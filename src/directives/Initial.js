import Directive from "../Directive.js";
import ReplaceElement from "../elements/Replace.js" 


class Initial extends Directive {	
	constructor(){
		super();
	}
	
	get name() {return "initial"}
	get rank() {return 0}
	
	
	async accept({template, context}){
		return true;
	}
	
	async execute({template, context}){
		if(template instanceof Text)
			context.content = template.cloneNode(true);
		else if(!(template instanceof HTMLElement) && template instanceof Node )
			context.content = template.cloneNode(true);
		else if(template.attr("jstl-async")){
			context.content = new Replace();
			const node = node.cloneNode(true);
			node.attr("jstl-async", null);
			setTimeout(async () =>{
				await context.renderer.render({template: node, mode: "replace", target: context.content, context: context.clone({target: context.content})});
			},parseInt(template.attr("jstl-async") || "250") || 250);
		}else if(template.attr("jstl-ignore")){
			context.content = template.cloneNode(true);
			context.stop = true;
			context.ignore = true;
		}else if(template instanceof HTMLElement){
			context.content = template.cloneNode(false);
		}else{
			context.stop = true;
			context.ignore = true;
		}
		return context;
	}
}

Directive.define({directive: new Initial()});