export default class DirectiveElement extends HTMLElement{
	constructor(){
		super();
	}
	
	/**
	 * need to be implemented
	 * 
	 * @FIXME Just an idea
	 */
	async execute({tempalte, context}){
		return template.cloneNode(true);
	});	
}