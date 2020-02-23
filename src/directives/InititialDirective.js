import Directive from "@src/Directive.js";
import DirectiveResult from "@src/DirectiveResult.js";


class InitialDirective extends Directive{
	static get name() {return "initial"}
	static get rank() {return 0}
	
	constructor(){
		super();
	}
	
	async accept({node=null, template, resolver, container, context}){
		return true;
	}
	
	
	async execute({node=null, template, resolver, container, context}){
		return new DirectiveResult({node});
	}
}

Directive.define({directive: new InitialDirective()});