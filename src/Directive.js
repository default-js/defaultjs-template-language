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
	 * return DirectiveResult
	 */
	async execute( context ){
		return context;
	}
	
	
	static define(option){
		defineDirective(option);
	}
	
	static get directives() {
		return DEFINED_DIRECTIVES;
	}
};