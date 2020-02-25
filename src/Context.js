export default class Context {	
	constructor({renderer, container, root, target = null, parent = null}) {
		if(!renderer) throw new Error("Parameter \"renderer\" is required!");
		if(!container) throw new Error("Parameter \"container\" is required!");
		if(!root) throw new Error("Parameter \"root\" is required!");
		
		this.readyHandles = [];		
		this.finallyHandles = [];
		this.content = null;
		this.container = container;
		this.renderer = renderer;
		this.root = root;
		this.target = target;
		this.parent = parent;
		
		/* execution flags */
		this.stop = false;
		this.ignore = false;		
	}
	
		
	get finally(){
		return this.finallyHandles;
	}

	set finally(callback) {
		if(this.parent)
			this.parent.finally = callback;
		else if(callback instanceof Array)
			this.readyhandles = this.readyhandles.concat(callback);
		else
			this.readyhandles.push(callback);
	}
	
	get ready(){
		return this.readyHandles = [];
	}

	set ready(callback) {
		if(callback instanceof Array)
			this.readyHandles = this.readyHandles.concat(callback);
		else
			this.readyHandles.push(callback);
	}

	clone({renderer, container, root, target} = {}) {
		return new Context({
			renderer: renderer ? renderer : this.renderer,			
			container: container ? container : this.container,
			root: root ? root : this.root, 
			target: target ? target : this.target,
			parent: this
		});
	}
};