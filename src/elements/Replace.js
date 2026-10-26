import DirectiveElement from "../DirectiveElement.js"

export default class ReplaceElement extends DirectiveElement{
	constructor(){
		super();
		
		this.attachShadow({mode: 'open'});
	}
	/**
	 * Delivers no content.
	 *
	 * @param {import("../ContextOld.js").default} aContext - the context of the tag
	 * @returns {Promise<import("../ContextOld.js").default>} the context
	 */
	async execute(aContext){
		return aContext;
	};		
}
try{customElements.define("jstl-replace", ReplaceElement);}catch(e){}//ignore