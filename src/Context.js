import Wait from "./Wait";
import Directive from "./Directive";

const CLOSE_TIMEOUT = 2000;
export default class Context {
	constructor({ resolver, renderer, template, container, root, mode = "replace", target = null, parent = null, ignoreDirective = new Set() }) {
		if (!resolver) throw new Error('Parameter "resolver" is required!');
		if (!renderer) throw new Error('Parameter "renderer" is required!');
		if (!template) throw new Error('Parameter "template" is required!');
		if (!container) throw new Error('Parameter "container" is required!');
		if (!root) throw new Error('Parameter "root" is required!');

		this.readyHandles = [];
		this.content = null;
		this.template = template;
		this.container = container;
		this.resolver = resolver;
		this.mode = mode;
		this.renderer = renderer;
		this.root = root;
		this.target = target;
		this.parent = parent;
		this.closed = false;
		this.ignoreDirective = ignoreDirective instanceof Set ? ignoreDirective : new Set();
		this.wait = Wait(this);

		/* execution flags */
		this.stop = false;
		this.ignore = false;
	}
	acceptDirective(directive) {
		if (directive instanceof Directive) return !(this.ignoreDirective.has(directive.name) || this.ignoreDirective.has(directive));

		return !this.ignoreDirective.has(directive);
	}

	async finish(callback) {
		if (this.closed) return; //context is ready and closed

		if (this.parent) this.parent.finish(callback);
		else this.ready(callback);
	}

	async ready(callback) {
		if (this.closed) return; //context is ready and closed

		if (callback) {
			if (callback instanceof Array)
				callback.forEach((callback) => {
					this.ready(callback);
				});
			else if (callback instanceof Promise || typeof callback === "function") this.readyHandles.push(callback);
		} else {
			this.closed = true;

			//wait of all sub context to be closed with an maximum amount of time
			if (this.readyHandles.length > 0) {
				try {
					await Promise.race([
						async () => {
							await Promise.all(
								this.readyHandles.map((handle) => {
									return handle instanceof Promise ? handle : handle(this);
								}),
							);
						},
						new Promise((reject, error) => {
							setTimeout(() => {
								error(new Error("timeout"));
							}, 10000);
						}),
					]);
				} catch (e) {
					console.error(e);
					throw e;
				}
			}

			this.wait.finished();
		}
	}

	subContext({ resolver = this.resolver, renderer = this.renderer, template = this.template, container = this.container, root = this.root, mode = this.mode, target = this.target, ignoreDirective = null } = {}) {
		const sub = new Context({ resolver, renderer, template, container, mode, root, target, parent: this, ignoreDirective });
		this.ready(sub.wait);
		return sub;
	}

	clone({ resolver = this.resolver, renderer = this.renderer, template = this.template, container = this.container, root = this.root, mode = this.mode, target = this.target, ignoreDirective = this.ignoreDirective } = {}) {
		return new Context({ resolver, renderer, template, container, mode, root, target, parent: this, ignoreDirective });
	}
}
