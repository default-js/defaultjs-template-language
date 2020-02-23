export default class Context {
	constructor(renderer, root){		
		this.ready = [];		
		this.renderer = renderer;
		this.root = root;
	}	
	
	set ready(action){
		if(typeof action === "function")
			this.ready.push(action)
		else if(action instanceof Array)
			action.forEach( i => this.ready = i);
	}
	
	static merge(context){
		if(!(context instanceof Context))
			return;
		
		this.ready = context.ready;
	}
	
	static clone(){
		return new Context(this.renderer, this.root, this.directives);
	}
};