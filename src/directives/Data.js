import Directive from "../Directive.js";
import Replace from "../elements/Replace.js";

const load = async (varname, url, template, context) => {	
	const resolver = context.renderer.resolver;
	const option = resolver.resolve(aContext.element.attr("jstl-data-var") || "{}");	
	
	let data = await fetch(url.toString(), option);
	data = await data.json();
	
	context.renderer.render({
		template: template.childNodes,
		data: varname ? (d => {d[varname] = data; return d;})({}) : data,
		container: context.content,
		context: context		
	});
};

class Include extends Directive {	
	constructor(){
		super();
	}
	
	get name() {return "data"}
	get rank() {return 2000}
	
	
	async accept({template, context}){
		if(template instanceof HTMLElement)
			return !!template.attr("jstl-data");
			
		return false;
	}
	
	async execute({template, context}){
		const expression = aContext.element.attr("jstl-data");
		const varname = aContext.element.attr("jstl-data-var");	
		let url = await context.renderer.resolve(expression);
		try{			
			url = new URL(url, location.origin);
			return load(varname, url, template, context);							
		}catch(e){}
		
		context.ignore = true;
		return context;		
	}
}

Directive.define({directive: new Include()});