export default class DirectiveElement extends HTMLElement{
	/**
	 * Execute the directive element.
	 * @param {import("./ContextOld.js").default} aContext
	 * @param {HTMLElement} aTemplate
	 * @param {import("./Renderer.js").default} aRenderer
	 *
	 * @returns {Promise<import("./ContextOld.js").default>}
	 */
	async execute(aContext, aTemplate, aRenderer){
		throw new Error("execute method must be implemented!");
	};
}
