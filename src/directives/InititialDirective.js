import Directive from "@src/Directive.js";
import DirectiveResult from "@src/DirectiveResult.js";


class InitialDirective extends Directive {	
	constructor(){
		super();
	}
	
	get name() {return "initial"}
	get rank() {return 0}
	
	
	async accept({node=null, template, resolver, container, context}){
		return true;
	}
	
	async execute({renderer, template, resolver, container, context}){
		const result = new DirectiveResult();
		if(!(template instanceof HTMLElement))
			result.node = template.cloneNode(true);
		else if(template.attr("jstl-async")){
			result.node = template.cloneNode(false);
			result.node.attr("jstl-async", null);
			setTimeout(async () =>{
				await context.renderer.render({data: resolver, template: node, container: container, mode: "replace", target: node});
			},parseInt(template.attr("jstl-async") || "250") || 250);
		}else if(template.attr("jstl-ignore")){
			result.node = template.cloneNode(true);
			result.stop = true;
			result.ignore = true;
		}else{
			result.node = template.cloneNode(false);
		}
		return result;
	}
}

Directive.define({directive: new InitialDirective()});