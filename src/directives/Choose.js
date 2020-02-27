import Directive from "../Directive.js";

class Choose extends Directive {	
	constructor(){
		super();
	}
	
	get name() {return "choose"}
	get rank() {return 1000}
	
	async execute(context){
		const {template} = context;
		if(!(template instanceof HTMLElement) || !template.attr("jstl-choose"))
			return context;
		
		const expression = template.attr("jstl-choose");
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

Directive.define({directive: new Choose()});