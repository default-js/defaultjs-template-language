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
		context.template = template.cloneNode(false);
		
		const {template, resolver} = context;		
		context.template = template.cloneNode(false);
		
		let otherwises = [];	
		template.childNodes.forEach(node => {
			if(!node instanceof HTMLElement)
				context.template.append(node.cloneNode(true));			
			else if(node.attr("jstl-when") && resolver.resolve(node.attr("jstl-when"), false)){
				context.template.append(node.cloneNode(true));
				otherwises.forEach(node => node.remove());
				return context;
			}
			else if(!otherwise && node.attr("jstl-otherwise")){
				const otherwise = node.cloneNode(true);
				otherwise.push(otherwise);
				context.template.append(otherwise);
			}
		});
				
		return context;		
	}
}

Directive.define({directive: new Choose()});