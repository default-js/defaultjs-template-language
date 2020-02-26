import Directive from "../Directive.js";
import Replace from "../elements/Replace.js" 


class Initial extends Directive {	
	constructor(){
		super();
	}
	
	get name() {return "initial"}
	get rank() {return 0}
	
	
	async execute(context){
		const {template} = context;
		
		if(template instanceof Text)
			context.content = document.importNode(template,true);
		else if(!(template instanceof HTMLElement) && template instanceof Node )
			context.content = document.importNode(template, true);
		else if(template.attr("jstl-async")){
			context.content = new Replace();
			const node = document.importNode(template, true);
			node.attr("jstl-async", null);
			setTimeout(async () =>{
				await context.renderer.render({template: node, mode: "replace", target: context.content, context: context.clone({target: context.content})});
			},parseInt(template.attr("jstl-async") || "250") || 250);
		}else if(template.attr("jstl-ignore")){
			context.content = document.importNode(template, true);
			context.stop = true;
			context.ignore = true;
		}else if(template instanceof HTMLElement){
			context.content = document.importNode(template, false);
		}else{
			context.stop = true;
			context.ignore = true;
		}
		return context;
	}
}

Directive.define({directive: new Initial()});