import Directive from "../Directive.js";
import Template from "../Template.js";

class Include extends Directive {	
	constructor(){
		super();
	}
	
	get name() {return "include"}
	get rank() {return 3000}
		
	async execute(context){
		if(!(context.template instanceof HTMLElement) || !context.template.attr("jstl-include"))
			return context;
		try{
			const {template, resolver, renderer} = context;		
			let include = template.attr("jstl-include");
			include = await resolver.resolveText(include);			
			include = Template.load(include);
			
			const mode = template.attr("jstl-include-mode") || "replace";
			renderer.render({template:include, container: context.content,mode, context});
					
			return context;
		}catch(e){
			console.error(e, context.template);
			return context;
		}		
	}
}

Directive.define({directive: new Include()});