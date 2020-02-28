const DEFINED_DIRECTIVES = [];

const defineDirective = ({directive}) => {
	if(!(directive instanceof Directive))
		throw new Error("Implementation dosn't extend Directive class!");
	
	if(directive.rank < Directive.MIN_RANK)
		throw new Error("The rank of a directive can't be lower as " +  Directive.MIN_RANK + "!");
		
	if(directive.rank > Directive.MAX_RANK)
		throw new Error("The rank of a directive can't be grater as " + Directive.MAX_RANK + "!");
	
	DEFINED_DIRECTIVES.push(directive);
	DEFINED_DIRECTIVES.sort((a,b) => {
		return a.rank - b.rank;
	});
};

export default class Directive {	
	static get MIN_RANK(){return 0};
	static get MAX_RANK(){return 100000};
	
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