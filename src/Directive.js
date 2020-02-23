const DEFINED_DIRECTIVES = [];

const defineDirective = ({directive}) => {
	if(!(directive instanceof Directive))
		throw new Error("Implementation dosn't extend Directive class!");
	
	if(directive.rank < 0)
		throw new Error("The rank ofa directive must be positive(0 <= rank)!");
	
	DEFINED_DIRECTIVES.push(directive).sort((a,b) => {
		return a.rank - b.rank;
	});
};

export class DirectiveResult {
	constructor({stop = false, remove = false, node = null, content = null}){
		this.stop = stop;
		this.remove = remove;	
		this.node = node;
		this.content = content;
	}
};

export default class Directive {
	constructor(name, rank){
		this.name = name;
		this.rank = rank;
	};
	
	set name(n){}
	set rank(r){}
	
	/**
	 * need to be implemented
	 * 
	 * @return boolean
	 */
	async accept({node, template, resolver, container, context}){
		return true;
	}
	
	/**
	 * need to be implemented
	 * 
	 * return DirectiveResult
	 */
	async execute({node, template, resolver, container, context}){
		return new 
	}
	
	
	static define(option){
		defineDirective(option);
	}
	
	static get directives() {
		return DEFINED_DIRECTIVES;
	}
};