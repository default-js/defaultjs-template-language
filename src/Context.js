import { lazyPromise } from "@default-js/defaultjs-common-utils/src/PromiseUtils";
import { defGet, defValue } from "@default-js/defaultjs-common-utils/src/ObjectUtils";
import { privateProperty } from "@default-js/defaultjs-common-utils/src/PrivateProperty";
import Directive from "./Directive";
import Template from "./Template";

const PRIVATE_WAIT = "wait";
const PRIVATE_CALLBACKS = "callbacks";
const PRIVATE_IGNOREDIRECTIVES = "ignoreDirectives";

const CONTEXTCLONE = new Set();
const CONTEXTS = new Map();
const WARNTIME = 1000;
const CRITICALTIME = 10000;

let observerTimeout = null;
const observe = (context) => {
	CONTEXTS.set(context, Date.now());
	runObserver();
};
const runObserver = () => {
	if (observerTimeout == null) {
		observerTimeout = setTimeout(() => {
			observerTimeout = null;
			const time = Date.now();
			CONTEXTS.forEach((createTime, context) => {
				const delta = time - createTime;
				if (context.closed) CONTEXTS.delete(context);
				else {
					if (delta > CRITICALTIME) {
						console.error("context lives longer then 10s", delta / 1000, context);
					} else if (delta > WARNTIME) {
						console.warn("context lives longer then 1s", delta / 1000, context);
					}
				}
			});
			console.log("open context:", CONTEXTS.size);
			if (CONTEXTS.size > 0) runObserver();
		}, 1000);
	}
};

const toTemplate = (template) => {
	if (template instanceof Template) return template.importContent();
	else if (typeof template === String) return create(template);
	return template;
};

let id = 0;
export default class Context {
	constructor({ resolver, renderer, template, container, root, mode = "replace", target = null, parent = null, ignoreDirective }) {
		if (!resolver) throw new Error('Parameter "resolver" is required!');
		if (!renderer) throw new Error('Parameter "renderer" is required!');
		if (!template) throw new Error('Parameter "template" is required!');
		if (!container) throw new Error('Parameter "container" is required!');
		if (!root) throw new Error('Parameter "root" is required!');

		defValue(this, "id", parent ? `${parent.id}->${id++}` : `root::${id++}`);
		defValue(this, "depth", parent ? parent.depth + 1 : 0);
		defValue(this, "parent", parent);
		defValue(this, "resolver", resolver);
		defValue(this, "renderer", renderer);
		defValue(this, "root", root);
		defValue(this, "template", toTemplate(template));
		defValue(this, "mode", mode);
		const wait = lazyPromise();
		privateProperty(this, PRIVATE_IGNOREDIRECTIVES, ignoreDirective instanceof Set ? ignoreDirective : new Set());
		privateProperty(this, PRIVATE_WAIT, wait);
		privateProperty(this, PRIVATE_CALLBACKS, []);

		this.content = null;
		this.container = container;
		this.target = target;

		/* execution flags */
		this.stop = false;
		this.ignore = false;
		//console.log(`context={"depth":${this.depth} }, "id": ${this.id}`);
		this.createtAt = new Error();

		if (parent) parent.ready(wait);
	}

	get closed() {
		return privateProperty(this, PRIVATE_WAIT).resolved;
	}

	ignoreDirective(directive) {
		const ignoreDirectives = privateProperty(this, PRIVATE_IGNOREDIRECTIVES);
		directive instanceof Directive ? ignoreDirectives.add(directive.name) : ignoreDirectives.add(directive);
	}

	acceptDirective(directive) {
		const ignoreDirectives = privateProperty(this, PRIVATE_IGNOREDIRECTIVES);
		if (directive instanceof Directive) return !(ignoreDirectives.has(directive.name) || ignoreDirectives.has(directive));

		return !ignoreDirectives.has(directive);
	}

	finished(callback) {
		if (this.parent) this.parent.finished(callback);
		else this.ready(callback);
	}

	async ready(callback) {
		const callbacks = privateProperty(this, PRIVATE_CALLBACKS);
		if (callback) {
			if (callback instanceof Array) callback.forEach((callback) => this.wait.then(callback));
			else if (callback instanceof Promise) callbacks.push(async () => await callback);
			else if (typeof callback === "function") callbacks.push(callback);
		} else {
			const wait = privateProperty(this, PRIVATE_WAIT);
			if (!wait.resolved) {
				if (!this.ignore) for (let callback of callbacks) await callback(this);
				wait.resolve(this);
			}

			return wait;
		}
	}

	subContext({ resolver = this.resolver, renderer = this.renderer, template = this.template, container = this.container, root = this.root, mode = this.mode, target = this.target, ignoreDirective = null } = {}) {
		return new Context({ resolver, renderer, template, container, mode, root, target, parent: this, ignoreDirective });
	}

	clone({ resolver = this.resolver, renderer = this.renderer, template = this.template, container = this.container, root = this.root, mode = this.mode, target = this.target, ignoreDirective = null } = {}) {
		return new Context({ resolver, renderer, template, container, mode, root, target, parent: null, ignoreDirective });
	}

	toRenderOption({ resolver = this.resolver, renderer = this.renderer, template = this.template, container = this.container, root = this.root, mode = this.mode, target = this.target, ignoreDirective = null } = {}) {
		return { resolver, renderer, template, container, mode, root, target, parent: null, ignoreDirective };
	}
}
