import DirectiveElement from "../DirectiveElement.js"

export default class ReplaceElement extends DirectiveElement{
	constructor(){
		super();
		
		this.attachShadow({mode: 'open'});
	}
	/**
	 * Delivers no content.
	 *
	 * @param {import("../Context.js").default} aContext - the context of the tag
	 * @returns {Promise<import("../Context.js").default>} the context
	 */
	async execute(aContext){
		return aContext;
	};		
}
try{customElements.define("jstl-replace", ReplaceElement);}catch(e){}//ignore