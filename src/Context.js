import "@default-js/defaultjs-extdom";
import { lazyPromise } from "@default-js/defaultjs-common-utils/src/PromiseUtils.js";
import { ExpressionResolver } from "@default-js/defaultjs-expression-language";
import Directive from "./Directive.js";
import DirectiveElement from "./DirectiveElement.js";
import Template from "./Template.js";

export const CREATEHTML = document.create;

/**
 * Converts a template into one of the two types a context holds: a node, or an array of nodes.
 *
 * @param {Template|string|Node|NodeList|HTMLCollection|Array<Node>} aTemplate
 * @returns {Node|Array<Node>} a node or an array as it is, the nodes of a `Template` or a `string` as an array
 * @throws {Error} if `aTemplate` is none of these types
 */
export const toTemplate = (aTemplate) => {
	if (aTemplate instanceof Node || aTemplate instanceof Array) return aTemplate;
	else if (aTemplate instanceof NodeList) return Array.from(aTemplate);
	else if (aTemplate instanceof HTMLCollection) return Array.from(aTemplate);
	else if (aTemplate instanceof Template)
		return Array.from(aTemplate.importContent());
	else if (aTemplate instanceof DocumentFragment)
		return Array.from(aTemplate.childNodes);
	else if (aTemplate instanceof HTMLTemplateElement)
		return Array.from(aTemplate.content.childNodes);
	else if (typeof aTemplate === "string")
		return Array.from(CREATEHTML(aTemplate));
	else throw new Error("Template type is not supported!");
};

export default class Context {
	/** @type {Context|null} */
	#parent = null;
	/** @type {ExpressionResolver} */
	#resolver = null;
	/** @type {Node|Array<Node>} */
	#template = null;
	/** @type {Node|Array<Node>|null} */
	#content = null;
	/** @type {Set<Directive|DirectiveElement|string>} */
	#ignoreDirectives = new Set();
	/** @type {import("@default-js/defaultjs-common-utils/src/PromiseUtils.js").LazyPromise<Context>} */
	#ready = lazyPromise();
	/** @type {Array<Promise>} */
	#blocks = [];
	/** @type {Array<Function>} */
	#callbacks = [];

	// attributes that can be set by directives to control the rendering
	#stop = false;
	#ignoreChildren = false;
	#ignoreContent = false;

	/**
	 * Creates an instance of Context.
	 *
	 * @constructor
	 * @param {object} options
	 * @param {ExpressionResolver} options.resolver
	 * @param {Template|string|Node|NodeList|HTMLCollection|Array<Node>} options.template
	 * @param {Context|null} [options.parent=null]
	 */
	constructor({ template, resolver, parent = null } = {}) {
		if (!resolver || !(resolver instanceof ExpressionResolver))
			throw new Error(
				'Parameter "resolver" is required and must be an ExpressionResolver!',
			);
		if (!template) throw new Error('Parameter "template" is required!');
		if (parent && !(parent instanceof Context))
			throw new Error('Parameter "parent" must be a RenderContext or null!');

		this.#parent = parent;
		this.#template = toTemplate(template);
		this.#resolver = resolver;
	}

	/**
	 * @readonly
	 * @type {Context}
	 */
	get parent() {
		return this.#parent;
	}

	/**
	 * @readonly
	 * @type {ExpressionResolver}
	 */
	get resolver() {
		return this.#resolver;
	}

	/**
	 * @returns {Node|Array<Node>} what is rendered: a node, or an array of nodes
	 */
	get template() {
		return this.#template;
	}

	get ready() {
		return this.#ready;
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
		if (lazyPromise.resolved)
			throw new Error("context is resolved! Content can't be changed!");
		if (
			aContent != null &&
			!(aContent instanceof Node) &&
			!(aContent instanceof Array)
		)
			throw new Error("content must be a Node, an Array of Nodes or null!");

		this.#content = aContent;
	}

	/**
	 * @returns {boolean}
	 */
	get stop() {
		return this.#stop;
	}

	/**
	 * @type {boolean}
	 */
	set stop(value) {
		if (this.#ready.resolved) throw new Error("Context is resolved!");
		this.#stop = value;
	}

	/**
	 * @returns {boolean}
	 */
	get ignoreChildren() {
		return this.#ignoreChildren;
	}

	/**
	 * @type {boolean}
	 */
	set ignoreChildren(value) {
		if (this.#ready.resolved) throw new Error("Context is resolved!");
		this.#ignoreChildren = value;
	}

	/**
	 * @returns {boolean}
	 */
	get ignoreContent() {
		return this.#ignoreContent;
	}

	/**
	 * @type {boolean}
	 */
	set ignoreContent(value) {
		if (this.#ready.resolved) throw new Error("Context is resolved!");
		this.#ignoreContent = value;
	}

	/**
	 * append content to the context
	 *
	 * @param {Node|Array<Node>} aContent
	 */
	appendContent(aContent) {
		if (lazyPromise.resolved)
			throw new Error("context is resolved! Content can't be changed!");
		else if (aContent instanceof Node) {
			if (this.#content == null) this.#content = aContent;
			else if (this.#content instanceof Array) this.#content.push(aContent);
			else this.#content = [this.#content, aContent];
		} else if (aContent instanceof Array) {
			if (this.#content == null) this.#content = aContent;
			else if (this.#content instanceof Array)
				this.#content = [...this.#content, ...aContent];
			else this.#content = [this.#content, ...aContent];
		} else throw new Error("content must be a Node or an Array of Nodes!");
	}

	/**
	 * add a directive to the list of directives that are ignored during rendering
	 * @param {Directive|DirectiveElement|string} directive
	 */
	addToIgnoreDirectives(directive) {
		if (lazyPromise.resolved) throw new Error("Context is resolved!");
		else if (
			directive instanceof Directive ||
			directive instanceof DirectiveElement
		)
			this.#ignoreDirectives.add(directive);
		else if (typeof directive === "string")
			this.#ignoreDirectives.add(directive);
		else
			throw new Error(
				"directive must be a Directive, a DirectiveElement or a string!",
			);
	}

	/**
	 * checks if a directive is in the list of directives that are ignored during rendering
	 * @param {Directive|DirectiveElement|string} directive
	 * @returns {boolean}
	 */
	acceptDirective(directive) {
		return !this.#ignoreDirectives.has(directive);
	}

	/**
	 * waits for the context to be ready, i.e. all blocks are resolved and all callbacks are called
	 *
	 * @async
	 * @returns {Context} the context of the rendering
	 */
	async waitForReady() {
		if (lazyPromise.resolved) return this;

		await Promise.all(this.#blocks);
		this.#freeze();
		this.#ready.resolve(this);

		for (const callback of this.#callbacks) {
			callback(this);
		}

		return this;
	}

	/**
	 * add a promise to the list of blocks that must be resolved before the context is ready
	 *
	 * @param {Promise} aPromise
	 */
	addBlocking(aPromise) {
		if (lazyPromise.resolved)
			throw new Error("Context is resolved! Blocking no more accepted!");
		else if (!(aPromise instanceof Promise))
			throw new Error("block must be a Promise!");
		else this.#blocks.push(aPromise);
	}

	/**
	 * add a callback to the list of callbacks that are called when the context is ready
	 *
	 * @param {Function} aCallback - a function that gets called when the context is ready
	 * @param {boolean} [onFinish=false] a function gets called when the first context is ready
	 */
	addCallback(aCallback, onFinish = false) {
		if (lazyPromise.resolved)
			throw new Error("Context is resolved! Callbacks no more accepted!");
		else if (typeof aCallback !== "function")
			throw new Error("callback must be a function!");
		else if (onFinish && this.#parent != null)
			this.#parent.addCallback(aCallback, onFinish);
		else this.#callbacks.push(aCallback);
	}

	#freeze() {
		if (this.#content instanceof Array)
			this.#content = Object.freeze(this.#content);
	}

}
