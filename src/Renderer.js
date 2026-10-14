import "@default-js/defaultjs-extdom";
import ExpressionResolver from "@default-js/defaultjs-expression-language/src/ExpressionResolver.js";
import Template from "./Template.js";
import Context from "./Context.js";
import Directive from "./Directive.js";
import DirectiveElement from "./DirectiveElement.js";
import "./directives/index.js";
import "./elements/index.js";

export const SCOPES = {
	application: "application",
	data: "data",
	render: "render",
	container: "container",
	node: "node",
};

const APPLICATION_SCOPE_RESOLVER = new ExpressionResolver({ name: SCOPES.application });


/**
 * @readonly
 * @enum {string}
 */
const MODETYPES = ["replace", "append", "prepend"];

const MODEWORKER = {
	replace: async ({ container, target = null, content }) => {
		if (target) {
			target.replace(content);
		} else {
			container.empty();
			container.append(content);
		}
	},
	append: async ({ container, target = null, content }) => {
		if (target) target.after(content);
		else container.append(content);
	},
	prepend: async ({ container, target = null, content }) => {
		if (target) target.before(content);
		else container.prepend(content);
	},
};

/**
 * 
 * @param {Template|string|URL|Node|NodeList|HTMLCollection} aTemplate - source of the template template 
 * @param {Renderer} aRenderer 
 * @returns {Promise<NodeList>} - the imported template content
 */
const loadTemplateContent = async (aTemplate, aRenderer) => {
	if (aTemplate) {
		aTemplate = await Template.load(aTemplate);
		return aTemplate.importContent();
	} else if (aRenderer.template) {
		return await aRenderer.template.importContent();
	}

	throw new Error("No content template specified!");
};

const addContent = async (context) => {
	if (context.content) {
		const modeworker = MODEWORKER[context.mode];
		if (!modeworker) throw new Error('The "' + context.mode + '" is not supported!');
		await modeworker(context);
	}
};

const renderContainer = async (context) => {
	let { template, resolver } = context;
	if (!template || template.length == 0) return context;

	let content = [];
	for (let nodeTemplate of template) {
		nodeTemplate.normalize();
		const nodeResolver = new ExpressionResolver({ name: SCOPES.node, context: null, parent: resolver });
		const nodeContext = await renderNode(context.subContext({ template: nodeTemplate, resolver: nodeResolver }));
		await nodeContext.ready();
		const node = nodeContext.content;
		if (node) {
			if (node instanceof Array) content = content.concat(node);
			if (node instanceof NodeList || node instanceof HTMLCollection) content = content.concat(Array.from(node));
			else if (node instanceof Node) content.push(node);
		}
	}

	context.content = content.length != 0 ? content : null;
	return context;
};

/**
 * Creates an element of the class of a directive element, with the attributes of the tag and
 * without its children. The node itself is not an element of its class: it comes from the content
 * of a `<template>`, which has no custom element registry.
 *
 * @param {Node} aNode - a node of the template
 * @returns {DirectiveElement|null} the element, or `null` if the node is no directive element
 */
const toDirectiveElement = (aNode) => {
	if (!(aNode instanceof Element)) return null;
	const type = customElements.get(aNode.localName);
	return type && type.prototype instanceof DirectiveElement ? document.importNode(aNode) : null;
};

/**
 * @async
 * @param {Context} aContext 
 * @returns {Context} 
 */
const renderNode = async (aContext) => {
	try {
		const { template, renderer } = aContext;
		const directiveElement = toDirectiveElement(template);
		if (directiveElement) aContext = await directiveElement.execute(aContext, template, renderer);
		else  aContext = await executeDirectives(aContext);

		const { ignore, content } = aContext;

		if (!ignore && content) {
			const { resolver } = aContext;
			const subTemplate = aContext.template.childNodes;
			if (subTemplate && subTemplate.length > 0) {
				const containerResolver = new ExpressionResolver({ name: SCOPES.container, context: null, parent: resolver });
				const subContext = await renderer.render(aContext.subContext({ container: content, template: subTemplate, resolver: containerResolver, mode: "append" }));
				await subContext.ready();
			}
		}

		if (aContext.content && aContext.content.tagName && aContext.content.tagName == "JSTL") aContext.content = aContext.content.childNodes; //special case to support the old "<jstl>" tag.
	} catch (e) {
		console.error("error at render node:", e, aContext);
	}
	return aContext;
};



/**
 * @async
 * @param {Context} context 
 * @returns {Context} 
 */
const executeDirectives = async (context) => {
	const directives = Directive.directives;
	const length = directives.length;
	for (let i = 0; i < length && !context.stop; i++) {
		const directive = directives[i];
		try {
			if (context.acceptDirective(directive)) await directive.execute(context);
		} catch (e) {
			console.error("error at directive:", e, directive, context);
		}
	}
	return context;
};

export default class Renderer {

	#template;
	#resolver;

	/**
	 * Creates a renderer.
	 *
	 * @param {object} [anOption]
	 * @param {Template} [anOption.template] - the template rendered, if `render` gets none
	 * @param {object} [anOption.data] - base data, available in every rendering
	 * @throws {Error} if `template` is not a `Template`
	 */
	constructor({ template, data } = {}) {
		if (template && !(template instanceof Template)) throw new Error("template must be an instance of Template!");

		this.#template = template;
		this.#resolver = new ExpressionResolver({ name: SCOPES.data, context: data ? data : {}, parent: APPLICATION_SCOPE_RESOLVER });
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
	 * @returns {Promise<Context>}
	 */
	async render(aContext) {
		/** @type {Context} */
		let context = null;
		const calledWithContext = aContext instanceof Context;
		if (!calledWithContext) {
			let { template = null, data = null, container, root, mode, target } = aContext;
			template = await loadTemplateContent(template, this);
			const resolver = new ExpressionResolver({ name: SCOPES.render, context: data, parent: this.resolver });
			context = new Context({ resolver, renderer: this, template: template, container, root: root ? root : container, mode: mode ? mode : "replace", target });
		} else if (aContext.closed) throw new Error("calling with closed context", aContext);
		else context = aContext;

		

		const template = context.template;
		if (template instanceof Node) context = await renderNode(context);
		else context = await renderContainer(context);
		
		await addContent(context);

		if (!calledWithContext)
			await context.ready();

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
	 * @returns {Promise<Context>}
	 * @memberof Renderer
	 */
	static async render({ container, data, template, mode, target }) {
		const renderer = new Renderer({ template, data });
		return renderer.render({ container, mode, target });
	}
}
