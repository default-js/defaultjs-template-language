import Directive from "../Directive.js";

class Choose extends Directive {	
	constructor(){
		super();
	}
	
	get name() {return "choose"}
	get rank() {return 3000}
	
	async execute(context){
		if(!(context.template instanceof HTMLElement) || !context.template.attr("jstl-choose") && context.template.children.length == 0)
			return context;
			
		const {template, resolver} = context;
		
		let otherwises = [];
		let resolved = false;
		template.childNodes.forEach(node => {
			if(node instanceof HTMLElement){
				if(resolved)
					node.remove();
				else if(node.attr("jstl-when") && resolver.resolve(node.attr("jstl-when"), false))
					resolved = true
				else if(node.attr("jstl-otherwise"))
					otherwises.push(node);
			}
		});
		if(resolved)
			otherwises.forEach(node => node.remove());
				
		return context;		
	}
}

Directive.define({directive: new Choose()});