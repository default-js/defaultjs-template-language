import Element from "../Element.js"

export default class ReplaceElement extends Element{
	constructor(){
		super();
		
		this.attachShadow({mode: 'open'});
	}
	async execute({template, context}){
		return context;
	};		
}

customElements.define("jstl-replace", ReplaceElement);