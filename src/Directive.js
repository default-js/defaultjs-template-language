import DirectiveResult from "./DirectiveResult.js";
const DEFINED_DIRECTIVES = [];

const defineDirective = ({directive}) => {
	if(!(directive instanceof Directive))
		throw new Error("Implementation dosn't extend Directive class!");
	
	if(directive.rank < 0)
		throw new Error("The rank ofa directive must be positive(0 <= rank)!");
	
	DEFINED_DIRECTIVES.push(directive);
	DEFINED_DIRECTIVES.sort((a,b) => {
		return a.rank - b.rank;
	});
};

export default class Directive {
	
	constructor(){};
	
	get name() {}
	get rank() {}
	
	
	/**
	 * need to be implemented
	 * 
	 * @return boolean
	 */
	async accept({node=null, template, resolver, container, context}){
		return true;
	}
	
	/**
	 * need to be implemented
	 * 
	 * return DirectiveResult
	 */
	async execute({node=null, template, resolver, container, context}){
		return new DirectiveResult({node});
	}
	
	
	static define(option){
		defineDirective(option);
	}
	
	static get directives() {
		return DEFINED_DIRECTIVES;
	}
};