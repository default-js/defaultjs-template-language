export default class Context {
	constructor({ resolver, renderer, container, root, mode = "replace", target = null, parent = null }) {
		if (!resolver) throw new Error("Parameter \"resolver\" is required!");
		if (!renderer) throw new Error("Parameter \"renderer\" is required!");
		if (!container) throw new Error("Parameter \"container\" is required!");
		if (!root) throw new Error("Parameter \"root\" is required!");

		this.readyHandles = [];
		this.finallyHandles = [];
		this.content = null;
		this.container = container;
		this.resolver = resolver;
		this.mode = mode;
		this.renderer = renderer;
		this.root = root;
		this.target = target;
		this.parent = parent;

		/* execution flags */
		this.stop = false;
		this.ignore = false;
	}


	get finally() {
		return this.finallyHandles;
	}

	set finally(callback) {
		if (this.parent)
			this.parent.finally = callback;
		else if (callback instanceof Array)
			this.readyhandles = this.readyhandles.concat(callback);
		else
			this.readyhandles.push(callback);
	}

	get ready() {
		return this.readyHandles = [];
	}

	set ready(callback) {
		if (callback instanceof Array)
			this.readyHandles = this.readyHandles.concat(callback);
		else
			this.readyHandles.push(callback);
	}
	
	clone({ resolver = this.resolver, renderer = this.renderer, container = this.container, root = this.root, mode = this.mode, target = this.target } = {}) {
		return new Context({ resolver, renderer, container, mode, root, target, parent: this });
	}
};