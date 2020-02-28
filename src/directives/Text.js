import Directive from "../Directive.js";

class TextContent extends Directive {	
	constructor(){
		super();
	}
	
	get name() {return "text"}
	get rank() {return Number.MAX_SAFE_INTEGER}
	
	
		
	async execute(context){
		const {template} = context;		
		if(!(template instanceof Text) || template.textContent.trim().length == 0)
			return context;
		
		const resolver = context.resolver;
		const node = context.content;					
		node.textContent = await resolver.resolveText(template.textContent);
				
		return context;		
	}
}

Directive.define({directive: new TextContent()});