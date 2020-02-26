import Directive from "../Directive.js";
import ExpressionResolver from "@default-js/defaultjs-expression-language/src/ExpressionResolver.js";
import Replace from "../elements/Replace.js";

const load = async (varname, url, template, context) => {
	try{
		let resolver = context.resolver;
		const option = resolver.resolve(template.attr("jstl-data-option") || "{}");	
		
		let data = await fetch(url.toString(), option);
		data = await data.json();
		
		context.resolver = new ExpressionResolver({context : data, name: "jstl-data", parent: resolver});
		
		return context;
	}catch(e){
		console.error(e);
		return context;
	}
};

class Data extends Directive {	
	constructor(){
		super();
	}
	
	get name() {return "data"}
	get rank() {return 2000}	
	
	async accept({template, context}){
		if(context.content instanceof HTMLElement)
			return !!template.attr("jstl-data");
			
		return false;
	}
	
	async execute({template, context}){
		const expression = template.attr("jstl-data");
		const varname = template.attr("jstl-data-var");	
		let url = await context.resolver.resolveText(expression);
		try{
			url = new URL(url, location.origin);
			return load(varname, url, template, context);							
		}catch(e){}
		
		
		return context;		
	}
}

Directive.define({directive: new Data()});