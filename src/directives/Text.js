import Directive from "../Directive.js";

class TextContent extends Directive {	
	constructor(){
		super();
	}
	
	get name() {return "text"}
	get rank() {return 10000}
	
	
	async accept({template, context}){
		return template instanceof Text && template.textContent.trim().length > 0;
	}
	
	async execute({template, context}){		
		const resolver = context.renderer.resolver;
		console.log("text content:", template.textContent, " resolver chain:", resolver.chain);
		const node = context.content;					
		node.textContent = await resolver.resolveText(template.textContent);
				
		return context;		
	}
}

Directive.define({directive: new TextContent()});