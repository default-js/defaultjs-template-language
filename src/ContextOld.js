import { lazyPromise } from "@default-js/defaultjs-common-utils/src/PromiseUtils.js";
import Directive from "./Directive.js";
import Template from "./Template.js";
import { ExpressionResolver } from "@default-js/defaultjs-expression-language/index.js";

/**
 * Converts a template into one of the two types a context holds: a node, or an array of nodes.
 *
 * @param {Template|string|Node|NodeList|HTMLCollection|Array<Node>} aTemplate
 * @returns {Node|Array<Node>} a node or an array as it is, the nodes of a `Template` or a `string` as an array
 * @throws {Error} if `aTemplate` is none of these types
 */
const toTemplate = (aTemplate) => {
	if (aTemplate instanceof Node || aTemplate instanceof Array) return aTemplate;
	else if (aTemplate instanceof NodeList) return Array.from(aTemplate);
	else if (aTemplate instanceof HTMLCollection) return Array.from(aTemplate);
	else if (aTemplate instanceof Template) return Array.from(aTemplate.importContent());
	else if (aTemplate instanceof DocumentFragment) return Array.from(aTemplate.childNodes);
	else if (aTemplate instanceof HTMLTemplateElement) return Array.from(aTemplate.content.childNodes);
	else if (typeof aTemplate === "string") return Array.from(create(aTemplate));
	else throw new Error("Template type is not supported!");
};

/**
 * Checks that a content is one of the types a context holds: a node, an array of nodes, or `null`.
 *
 * @param {Node|Array<Node>|null} aContent
 * @returns {Node|Array<Node>|null} the content
 * @throws {Error} if `aContent` is none of these types
 */
const toContent = (aContent) => {
	if (aContent === null || aContent instanceof Node || aContent instanceof Array) return aContent;
	else throw new Error("Content type is not supported!");
};

let id = 0;
export default class Context {
	#id;
	#depth;
	#parent;
	#renderer;
	#root;
	/** @type {Node|Array<Node>} */
	#template;
	/** @type {Node|Array<Node>|null} */
	#content;
	#mode;
	#subcontexts;
	#wait;
	#ignoreDirectives;
	#callbacks;

	
	/**
	 * Creates an instance of Context.
	 *
	 * @constructor
	 * @param {object} options
	 * @param {Node|Array<Node>|null} [options.content=null]
	 * @param {ExpressionResolver} options.resolver
	 * @param {import("./Renderer.js").default} options.renderer
	 * @param {Template|string|Node|NodeList|HTMLCollection|DocumentFragment|HTMLTemplateElement|Array<Node>} options.template
	 * @param {Element|DocumentFragment} options.container
	 * @param {HTMLElement} options.root 
	 * @param {string} [options.mode="replace"] 
	 * @param {HTMLElement} [options.target=null] 
	 * @param {Context} [options.parent=null] 
	 * @param {Promise<>} [options.wait=null] 
	 * @param {Array<Function>} [options.callbacks=null] 
	 * @param {Set<Directive|string>} options.ignoreDirective 
	 */
	constructor({ content = null, resolver, renderer, template, container, root, mode = "replace", target = null, parent = null, wait = null, callbacks = null, ignoreDirective }) {
		if (!resolver) throw new Error('Parameter "resolver" is required!');
		if (!renderer) throw new Error('Parameter "renderer" is required!');
		if (!template) throw new Error('Parameter "template" is required!');
		if (!container) throw new Error('Parameter "container" is required!');
		if (!root) throw new Error('Parameter "root" is required!');

		this.#id = parent ? `${parent.id}->${id++}` : `root::${id++}`;
		this.#depth = parent ? parent.depth + 1 : 0;
		this.#parent = parent;
		this.#renderer = renderer;
		this.#root = root;
		this.#template = toTemplate(template);
		this.#mode = mode;
		this.#subcontexts = new Set();
		this.#wait = wait ? wait : lazyPromise();
		this.#ignoreDirectives = ignoreDirective instanceof Set ? ignoreDirective : new Set();
		this.#callbacks = callbacks instanceof Array ? callbacks : [];

		this.content = content;
		this.container = container;
		this.target = target;
		this.resolver = resolver;

		/* execution flags */
		this.stop = false;
		this.ignore = false;
		//console.log(`context={"depth":${this.depth} }, "id": ${this.id}`);
		//this.createtAt = new Error();

		if (parent) {
			parent.subcontexts.add(this);
		}
	}

	get id() {
		return this.#id;
	}
	get depth() {
		return this.#depth;
	}
	get parent() {
		return this.#parent;
	}
	get renderer() {
		return this.#renderer;
	}
	get root() {
		return this.#root;
	}
	/**
	 * @returns {Node|Array<Node>} what is rendered: a node, or an array of nodes
	 */
	get template() {
		return this.#template;
	}
	/**
	 * @param {Template|string|Node|NodeList|HTMLCollection|DocumentFragment|HTMLTemplateElement|Array<Node>} aTemplate - a `Template` or a `string` is converted into an array of its nodes
	 * @throws {Error} if `aTemplate` is none of these types
	 */
	set template(aTemplate) {
		this.#template = toTemplate(aTemplate);
	}

	/**
	 * @returns {Node|Array<Node>|null} the result: a node, or an array of nodes; `null` leaves nothing in the result
	 */
	get content() {
		return this.#content;
	}
	/**
	 * @param {Node|Array<Node>|null} aContent
	 * @throws {Error} if `aContent` is none of these types
	 */
	set content(aContent) {
		this.#content = toContent(aContent);
	}

	get mode() {
		return this.#mode;
	}
	get subcontexts() {
		return this.#subcontexts;
	}

	get closed() {
		return this.#wait.resolved;
	}

	ignoreDirective(directive) {
		const ignoreDirectives = this.#ignoreDirectives;
		directive instanceof Directive ? ignoreDirectives.add(directive.name) : ignoreDirectives.add(directive);
	}

	acceptDirective(directive) {
		const ignoreDirectives = this.#ignoreDirectives;
		if (directive instanceof Directive) return !(ignoreDirectives.has(directive.name) || ignoreDirectives.has(directive));

		return !ignoreDirectives.has(directive);
	}

	finished(callback) {
		if (this.parent) this.parent.finished(callback);
		else this.ready(callback);
	}

	async ready(callback) {
		const callbacks = this.#callbacks;
		if (callback) {
			if (callback instanceof Array) callback.forEach((callback) => this.ready(callback));
			else if (callback instanceof Promise) callbacks.push(async () => await callback);
			else if (typeof callback === "function") callbacks.push(callback);
		} else {
			const wait = this.#wait;
			if (!wait.resolved) {
				if (!this.ignore) for (let callback of callbacks) await callback(this);

				for (let child of this.subcontexts) await child.ready();

				if (this.parent) this.parent.subcontexts.delete(this);

				wait.resolve(this);
			}

			return wait;
		}
	}

	subContext({ resolver = this.resolver, renderer = this.renderer, template = this.template, container = this.container, root = this.root, mode = this.mode, target = this.target, ignoreDirective = null } = {}) {
		return new Context({ resolver, renderer, template, container, mode, root, target, parent: this, ignoreDirective });
	}

	clone({ content = this.content, template = this.template, container = this.container, root = this.root, mode = this.mode, target = this.target, ignoreDirective = this.#ignoreDirectives } = {}) {
		return new Context({ content, 
			resolver: this.resolver, 
			renderer: this.renderer, 
			template, 
			container, 
			root, 
			mode, 
			target, 
			ignoreDirective,
			wait: this.#wait,
			callbacks: this.#callbacks
		 });
	}

	toRenderOption({ resolver = this.resolver, renderer = this.renderer, template = this.template, container = this.container, root = this.root, mode = this.mode, target = this.target, ignoreDirective = null } = {}) {
		return { resolver, renderer, template, container, mode, root, target, parent: null, ignoreDirective };
	}
}
