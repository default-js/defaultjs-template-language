export default class Context {	
	constructor(renderer, node, container, root, parent = null) {
		this.readyHandles = [];		
		this.finallyHandles = [];
		this.content = content;
		this.container = container;
		this.renderer = renderer;
		this.root = root;
		this.parent = parent;
		
		/* execution flags */
		this.stop = false;
		this.ignore = false;		
	}
	
	set container(c){};
	set renderer(r){}
	set root(r){}
	set parent(p){};	
	
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

	static clone({renderer, content, container, root}) {
		return new Context(
			renderer ? renderer : this.renderer,
			content ? content : this.content,
			container ? container : this.container,
			root ? root : this.root, 
			this);
	}
};