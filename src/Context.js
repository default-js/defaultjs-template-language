import { lazyPromise } from "@default-js/defaultjs-common-utils/src/PromiseUtils";
import { defGet, defValue } from "@default-js/defaultjs-common-utils/src/ObjectUtils";
import Directive from "./Directive";

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
			CONTEXTS.forEach((createTime, context ) => {
				const delta = time - createTime;
				if (context.closed) CONTEXTS.delete(context);
				else{
					if (delta > CRITICALTIME) {
						console.error("context lives longer then 10s", delta / 1000, context);
					} else if (delta > WARNTIME) {
						console.warn("context lives longer then 1s", delta / 1000, context);
					}

					if(CONTEXTCLONE.has(context.id))
						console.log("is clone:", )
				}
			});
			console.log("open context:", CONTEXTS.size);
			if (CONTEXTS.size > 0) runObserver();
		}, 1000);
	}
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
		defValue(this, "wait", lazyPromise());
		defValue(this, "parent", parent);
		defValue(this, "resolver", resolver);
		defValue(this, "renderer", renderer);
		defValue(this, "root", root);
		defValue(this, "template", template);
		defValue(this, "mode", mode);
		defValue(this, "ignoreDirective", ignoreDirective instanceof Set ? ignoreDirective : new Set());
		defValue(this, "__callbacks", []);
		defGet(this, "closed", () => this.wait.resolved);

		this.content = null;
		this.container = container;
		this.target = target;

		/* execution flags */
		this.stop = false;
		this.ignore = false;
		//console.log(`context={"depth":${this.depth} }, "id": ${this.id}`);
		this.createtAt = new Error();
		if(parent)
			parent.ready(this.wait);
	}

	acceptDirective(directive) {
		if (directive instanceof Directive) return !(this.ignoreDirective.has(directive.name) || this.ignoreDirective.has(directive));

		return !this.ignoreDirective.has(directive);
	}

	finished(callback) {
		if (this.parent) this.parent.finished(callback);
		else this.ready(callback);
	}

	ready(callback) {
		if (callback) {
			if (callback instanceof Array) callback.forEach((callback) => this.wait.then(callback));
			else if (callback instanceof Promise) this.__callbacks.push(async () => await callback);
			else if (typeof callback === "function") this.__callbacks.push(callback);
		} else {
			return (async () => {
				if (!this.wait.resolved && !this.ignore) for (let callback of this.__callbacks) await callback();

				this.wait.resolve();
				return this.wait;
			})();
		}
	}

	subContext({ resolver = this.resolver, renderer = this.renderer, template = this.template, container = this.container, root = this.root, mode = this.mode, target = this.target, ignoreDirective = null } = {}) {
		return new Context({ resolver, renderer, template, container, mode, root, target, parent: this, ignoreDirective });
	}
	/*
	clone({ resolver = this.resolver, renderer = this.renderer, template = this.template, container = this.container, root = this.root, mode = this.mode, target = this.target, ignoreDirective = this.ignoreDirective } = {}) {
		return new Context({ resolver, renderer, template, container, mode, root, target, parent: this, ignoreDirective });
	}*/
};
