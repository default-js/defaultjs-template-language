import Directive from "../Directive.js";

class If extends Directive {	
	constructor(){
		super();
	}
	
	get name() {return "if"}
	get rank() {return 1000}
	
	
	async accept({template, context}){
		if(template instanceof HTMLElement)
			return !!template.attr("jstl-if");
			
		return false;
	}
	
	async execute({template, context}){
		const expression = template.attr("jstl-if");
		const resolver = context.renderer.resolver;
		debugger;
		const result = await resolver.resolve(expression, false);
		if(!result){
			context.content = null;
			context.stop;
			context.ignore;
		}
				
		return context;		
	}
}

Directive.define({directive: new If()});