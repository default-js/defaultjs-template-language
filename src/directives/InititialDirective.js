import Directive from "../Directive.js";
import ReplaceElement from "../elements/ReplaceElement" 


class InitialDirective extends Directive {	
	constructor(){
		super();
	}
	
	get name() {return "initial"}
	get rank() {return 0}
	
	
	async accept({tempalte, context}){
		return true;
	}
	
	async execute({tempalte, context}){
		if(!(template instanceof HTMLElement))
			context.node = template.cloneNode(true);
		else if(template.attr("jstl-async")){
			context.node = new ReplaceElement();
			const node = node.cloneNode(true);
			node.attr("jstl-async", null);
			setTimeout(async () =>{
				await context.renderer.render({template: node, mode: "replace", target: context.node, context});
			},parseInt(template.attr("jstl-async") || "250") || 250);
		}else if(template.attr("jstl-ignore")){
			result.node = template.cloneNode(true);
			result.stop = true;
			result.ignore = true;
		}else{
			result.node = template.cloneNode(false);
		}
		return context;
	}
}

Directive.define({directive: new InitialDirective()});