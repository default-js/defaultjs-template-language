import Renderer from "@src/Renderer.js";

describe("Include Test - ", () => {
	
	beforeAll(() => {});
	
	it("load template from url", async () => {		
		const container = create("<div></div>").first();		
		const renderer = await Renderer.build({template: "<div jstl-include=\"/templates/IncludeTest/LoadFromURL.tpl.html\"></div>"});
		await renderer.render({container});		
		let result = container;
		expect(result.children.length).toBe(1);
		result = result.children[0];
		expect(result.children.length).toBe(5);
	});
	
	afterAll(() => {});
});