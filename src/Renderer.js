import {
	SCOPE__APPLICATION,
	SCOPE__RENDER,
	SCOPE__DATA,
	SCOPE__CONTAINER,
	SCOPE__NODE,
	APPLICATION_SCOPE_RESOLVER,
} from "./Constants.js";
import ExpressionResolver from "@default-js/defaultjs-expression-language/src/ExpressionResolver.js";
import Template from "./Template.js";
import Directive from "./Directive.js";
import DirectiveElement from "./DirectiveElement.js";
import "./directives/index.js";
import "./elements/index.js";
import Context from "./Context.js";
import { isUndefinedOrNull } from "./Utils.js";
import { isNullOrUndefined } from "@default-js/defaultjs-common-utils/src/ObjectUtils.js";

/**
 *  @typedef {object} RenderOptions
 *  @property {HTMLElement} container - the container where the template is rendered
 *  @property {object} [data] - base data, available in every rendering
 *  @property {Template|string|URL|Node|NodeList|HTMLCollection} [template] - source of the template
 *  @property {MODETYPES} [mode] - how to add the content to the container: "replace", "append" or "prepend"
 *  @property {HTMLElement} [root] - the root element of the rendering, defaults to `container`
 *  @property {HTMLElement} [target] - the target element of the rendering, defaults to `null`
 */

export const EVENT__RENDER = "render";
export const EVENT__RENDERED = "rendered";
/**
 * @readonly
 * @enum {string}
 */
export const EVENTS = { render: EVENT__RENDER, rendered: EVENT__RENDERED };

export const MODE__REPLACE = "replace";
export const MODE__APPEND = "append";
export const MODE__PREPEND = "prepend";
export const MODE__NONE = "none";

/**
 * @readonly
 * @enum {string}
 */
export const MODETYPES = {
	replace: MODE__REPLACE,
	append: MODE__APPEND,
	prepend: MODE__PREPEND,
	none: MODE__NONE,
};

const MODEWORKER = {
	[MODE__REPLACE]: ({
		/**@type {HTMLElement} */ container,
		/**@type {HTMLElement} */ target = null,
		/**@type {Node|Array<Node>} */ content,
	}) => {
		if (target) {
			if(content == null || content.length == 0)
				target.remove();
			else
				target.replace(content);
		} else {
			container.empty();
			if(content != null && content.length != 0)
				container.append(content);
		}
	},
	[MODE__APPEND]: ({
		/**@type {HTMLElement} */ container,
		/**@type {HTMLElement} */ target = null,
		/**@type {Node|Array<Node>} */ content,
	}) => {
		if(content == null || content.length == 0) return;
		if (target) target.after(content);
		else container.append(content);
	},
	[MODE__PREPEND]: ({
		/**@type {HTMLElement} */ container,
		/**@type {HTMLElement} */ target = null,
		/**@type {Node|Array<Node>} */ content,
	}) => {
		if(content == null || content.length == 0) return;
		if (target) target.before(content);
		else container.prepend(content);
	},
	[MODE__NONE]: () => {},
};

/**
 * apply a mode to a container, target with content
 *
 * @param {object } options
 * @param {HTMLElement} options.container
 * @param {HTMLElement} options.target
 * @param {Node|Array<Node>} options.content
 * @param {MODETYPES} options.mode
 */
const applyMode = ({ container, target, content, mode }) => {
	if (!mode || !MODEWORKER[mode])
		throw new Error(`Mode "${mode}" is not supported!`);
	MODEWORKER[mode]({ container, target, content });
};

/**
 * find the event target by mode, container and target definition
 *
 * @param {EVENTS} event
 * @param {HTMLElement} container
 * @param {HTMLElement} target
 * @param {MODETYPES} mode
 * @returns {HTMLElement}
 */
const findEventTarget = (event, container, target, mode) => {
	if (
		mode == MODETYPES.none ||
		(isUndefinedOrNull(container) && isUndefinedOrNull(target))
	)
		return null;

	const useTarget = !isUndefinedOrNull(target);
	if (useTarget && event == EVENT__RENDER && mode == MODETYPES.replace)
		return target.parentElement;
	return useTarget ? target : container;
};

/**
 * fires an event
 *
 * @param {HTMLElement} target
 * @param {EVENTS} event
 * @param {Context} context
 */
const fireEvent = (target, event, context) => {
	if (target instanceof EventTarget) target.trigger(event, context);
};

/**
 * transform render options into a context object
 *
 * @param {RenderOptions} renderOptions
 * @param {Renderer} renderer
 */
const toInitialContext = (renderOptions, renderer) => {
	const { data, template, container } = renderOptions;
	const resolver = new ExpressionResolver({
		name: SCOPE__RENDER,
		context: data,
		parent: renderer.resolver,
	});
	return new Context({
		container: new DocumentFragment(),
		template: template || renderer.template,
		renderer,
		resolver,
	});
};

/**
 * @param {HTMLElement} element
 * @returns {HTMLElement}
 */
const cloneNode = (element) => {
	return document.createElement(element.nodeName);
};

export default class Renderer {
	static MODETYPES = MODETYPES;
	static EVENTS = EVENTS;

	#template;
	#resolver;

	/**
	 * Creates a renderer.
	 *
	 * @param {object} [anOption]
	 * @param {Template} [anOption.template] - the template rendered, if `render` gets none
	 * @param {object} [anOption.data] - base data, available in every rendering
	 * @param {ExpressionResolver} [anOption.resolver] - the resolver used for every rendering, if `render` gets none
	 * @throws {Error} if `template` is not a `Template`
	 */
	constructor({ template, data, resolver } = {}) {
		if (template && !(template instanceof Template))
			throw new Error("template must be an instance of Template!");

		this.#template = template;
		this.#resolver =
			resolver ||
			new ExpressionResolver({
				name: SCOPE__DATA,
				context: data ? data : {},
				parent: APPLICATION_SCOPE_RESOLVER,
			});
	}

	get template() {
		return this.#template;
	}

	get resolver() {
		return this.#resolver;
	}

	/**
	 * Renders a template into a container.
	 *
	 * @param {RenderOptions|Context} context
	 * @returns {Promise<Context>} the context of the rendering
	 */
	render(context) {
		if (context instanceof Context) return this.#render(context);
		return this.#startRendering(context);
	}

	/**
	 * render as external usage
	 *
	 * @param {RenderOptions} context
	 * @returns {Promise<Context>} the context of the rendering
	 */
	async #startRendering(context) {
		const { container, target, mode } = context;
		let eventTarget = findEventTarget(EVENT__RENDER, container, target, mode);

		context = toInitialContext(context, this);
		fireEvent(eventTarget, EVENT__RENDER, context);

		context = await this.#render(context);

		context = await context.waitForReady();
		applyMode({
			container,
			target,
			content: context.content,
			mode: mode || MODETYPES.replace,
		});

		eventTarget = findEventTarget(EVENT__RENDERED, container, target, mode);
		fireEvent(eventTarget, EVENT__RENDERED, context);
		return context;
	}

	/**
	 * render as a child rendering process
	 *
	 * @async
	 * @param {Context} context
	 * @returns {Promise<Context>}
	 */
	async #render(context) {
		context = await (context.template instanceof Array
			? this.#renderNodes(context)
			: this.#renderNode(context));

		context = await context.waitForReady();
		const { container, content } = context;
		if (!isNullOrUndefined(content) && content.length > 0 && !isNullOrUndefined(container))
			container.append(content);

		return context;
	}

	/**
	 * interal method to render a template into a container, called by `render`.
	 *
	 * @param {Context} context
	 * @returns {Promise<Context>} the context of the rendering
	 */
	async #renderNodes(context) {
		const { /**@type {Array<Node>} */ template, resolver, container } = context;
		/**@type {Array<Promise<Context>>} */
		const promises = template.map((template) =>
			this.#render(
				new Context({ container, template, resolver, renderer: this }),
			),
		);
		context.content = (await Promise.all(promises))
			.map((context) => context.content)
			.filter((content) => !isNullOrUndefined(content))
			.flat();

		return context;
	}

	/**
	 * interal method to render a template into a container, called by `render`.
	 *
	 * @param {Context} context
	 * @returns {Promise<Context>} the context of the rendering
	 */
	async #renderNode(context) {
		const {
			/**@type {HTMLElement} */ container,
			/**@type {Node} */ template,
			resolver,
		} = context;

		context = new Context({
			container,
			template,
			renderer: this,
			resolver: new ExpressionResolver({ name: SCOPE__NODE, parent: resolver }),
		});

		for (const directive of Directive.directives) {
			if (context.acceptDirective(directive)) {
				context = await directive.execute(context);
				if (context.stop) break;
			}
		}

		if (!context.ignoreChildren && template.childNodes.length > 0)
			context.addBlocking(
				this.#render(
					new Context({
						template: template.childNodes,
						container: context.content,
						renderer: this,
						resolver,
					}),
				),
			);

		context = await context.waitForReady();

		return context;
	}

	/**
	 * Creates a renderer and loads its template with `Template.load` first.
	 *
	 * @static
	 * @async
	 * @param {object} [anOption]
	 * @param {Template|string|URL|Node|NodeList|HTMLCollection|Promise<Template|string|URL|Node|NodeList|HTMLCollection>} [anOption.template] - source of the template
	 * @param {object} [anOption.data] - base data, available in every rendering
	 * @returns {Promise<Renderer>}
	 */
	static async build({ template, data } = {}) {
		if (template && template instanceof Promise) template = await template;

		template = template ? await Template.load(template) : null;
		return new Renderer({ template, data });
	}

	/**
	 * Renders a template into a container without keeping a renderer.
	 *
	 * @static
	 * @async
	 * @param {object} context
	 * @param {HTMLElement} context.container
	 * @param {object} [context.data]
	 * @param {Template} context.template
	 * @param {MODETYPES} [context.mode]
	 * @param {HTMLElement} [context.target]
	 * @returns {Promise<Context>} the context of the rendering
	 * @memberof Renderer
	 */
	static async render({ container, data, template, mode, target }) {
		const renderer = new Renderer({ template, data });
		return await renderer.render({ container, data, mode, target });
	}
}
