import {
	SCOPE__APPLICATION,
	SCOPE__RENDER,
	SCOPE__DATA,
	SCOPE__CONTAINER,
	SCOPE__NODE,
	APPLICATION_SCOPE_RESOLVER,
	EVENT__RENDER,
	EVENT__RENDERED,
} from "./Constants.js";
import ExpressionResolver from "@default-js/defaultjs-expression-language/src/ExpressionResolver.js";
import Template from "./Template.js";
import Directive from "./Directive.js";
import DirectiveElement from "./DirectiveElement.js";
import "./directives/index.js";
import "./elements/index.js";
import Context from "./Context.js";
import { isUndefinedOrNull } from "./Utils.js";

/**
 * @readonly
 * @enum {string}
 */
export const MODETYPES = {
	replace: "replace",
	append: "append",
	prepend: "prepend",
	none: "none",
};

const MODEWORKER = {
	replace: ({
		/**@type {HTMLElement} */ container,
		/**@type {HTMLElement} */ target = null,
		/**@type {Node|Array<Node>} */ content,
	}) => {
		if (target) {
			target.replace(content);
		} else {
			container.empty();
			container.append(content);
		}
	},
	append: ({
		/**@type {HTMLElement} */ container,
		/**@type {HTMLElement} */ target = null,
		/**@type {Node|Array<Node>} */ content,
	}) => {
		if (target) target.after(content);
		else container.append(content);
	},
	prepend: ({
		/**@type {HTMLElement} */ container,
		/**@type {HTMLElement} */ target = null,
		/**@type {Node|Array<Node>} */ content,
	}) => {
		if (target) target.before(content);
		else container.prepend(content);
	},
	none: () => {},
};

/**
 * apply a mode to a container, target with content
 *
 * @param {object } options
 * @param {HTMLElement} options.container
 * @param {HTMLElement} options.target
 * @param {Node|Array<Node>} options.content
 * @param {string} options.mode
 */
const applyMode = ({ container, target, content, mode }) => {
	if (!mode || !MODEWORKER[mode])
		throw new Error(`Mode "${mode}" is not supported!`);
	MODEWORKER[mode]({ container, target, content });
};

const findEventTarget = (event, container, target, mode) => {
	if (mode == MODETYPES.none) return null;

	const useTarget = isUndefinedOrNull(target);
	if (useTarget && event == EVENT__RENDER && mode == MODETYPES.replace)
		return target.parent;
	return useTarget ? target : container;
};

/**
 * @param {RenderOptions} renderOptions
 * @param {Renderer} renderer
 */
const toRenderContext = (renderOptions, renderer) => {
	const { data, template } = renderOptions;
	const resolver = new ExpressionResolver({
		name: SCOPE__RENDER,
		context: isUndefinedOrNull(data) ? {} : data,
		parent: renderer.resolver,
	});
	template = isUndefinedOrNull(template) ? renderer.template : template;

	return new Context({ template, resolver });
};

/**
 * interal method to render a template into a container, called by `render`.
 *
 * @param {Context} context
 * @returns {Promise<Context>} the context of the rendering
 */
const renderNodes = async (context) => {
	const { template, resolver } = context;
};

/**
 * interal method to render a template into a container, called by `render`.
 *
 * @param {Context} context
 * @returns {Promise<Context>} the context of the rendering
 */
const renderNode = async (context) => {
	const { template, resolver } = context;
};

export default class Renderer {
	static MODETYPES = MODETYPES;
	static EVENTS = { EVENT__RENDER, EVENT__RENDERED };

	#template;
	#resolver;
	#parent;

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

		this.#parent = parent;
		this.#template = template;
		this.#resolver =
			resolver ||
			new ExpressionResolver({
				name: SCOPE__DATA,
				context: data ? data : {},
				parent: APPLICATION_SCOPE_RESOLVER,
			});
	}

	get parent() {
		return this.#parent;
	}

	get template() {
		return this.#template;
	}

	get resolver() {
		return this.#resolver;
	}

	/**
	 *  @typedef {object} RenderOptions
	 *  @property {HTMLElement} container - the container where the template is rendered
	 *  @property {object} [data] - base data, available in every rendering
	 *  @property {Template|string|URL|Node|NodeList|HTMLCollection} [template] - source of the template
	 *  @property {MODETYPES} [mode] - how to add the content to the container: "replace", "append" or "prepend"
	 *  @property {HTMLElement} [root] - the root element of the rendering, defaults to `container`
	 *  @property {HTMLElement} [target] - the target element of the rendering, defaults to `null`
	 */

	/**
	 * Renders a template into a container.
	 *
	 * @param {RenderOptions|Context} aContext
	 * @returns {Promise<Context>} the context of the rendering
	 */
	async render(aContext) {
		const isRenderContext = aContext instanceof Context;
		let context = isRenderContext
			? aContext
			: toRenderContext(aContext, this);
		if (!isRenderContext) {
			const { container, target, mode } = aContext;
			const eventTarget = findEventTarget(
				EVENT__RENDER,
				container,
				target,
				mode,
			);
			eventTarget.trigger(EVENT__RENDER, context);
		}

		if (context.template instanceof Array) context = renderNodes(context);
		else context = renderNode(context);

		if (!isRenderContext) {
			const { container, target, mode } = aContext;
			const eventTarget = findEventTarget(
				EVENT__RENDERED,
				container,
				target,
				mode,
			);
			context = await context;
			await context.ready;

			applyMode({
				container,
				target,
				content: context.content,
				mode: mode || MODETYPES.replace,
			});

			eventTarget.trigger(EVENT__RENDERED, context);
		}

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
