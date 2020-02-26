import Directive from "../Directive.js";

class Include extends Directive {	
	constructor(){
		super();
	}
	
	get name() {return "include"}
	get rank() {return 3000}
	
	
	async accept({template, context}){
		if(template instanceof HTMLElement)
			return !!template.attr("jstl-include");
			
		return false;
	}
	
	async execute({template, context}){
		const mode = aContext.element.attr("jstl-include-mode") || MODES.replace;
		const expression = aContext.element.attr("jstl-include");
		const option = aContext.element.attr("jstl-include-options");
		
		const resolver = context.resolver;
		const result = await resolver.resolve(expression, false);
		if(!result){
			context.content = null;
			context.stop;
			context.ignore;
		}
				
		return context;		
	}
}

Directive.define({directive: new Include()});