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
		container.remove();
	});

	it("load template from url after if", async () => {		
		const container = create("<div></div>").first();		
		const renderer = await Renderer.build({template: `<div jstl-if="\${include}" jstl-include="/templates/IncludeTest/LoadFromURL.tpl.html"></div>`});
		await renderer.render({container, data : {include: true}});		
		let result = container;
		expect(result.children.length).toBe(1);
		result = result.children[0];
		expect(result.children.length).toBe(5);
		container.remove();
	});

	it("load template from url after if on jstl-tag", async () => {		
		const container = create("<div></div>").first();		
		const renderer = await Renderer.build({template: `<jstl jstl-if="\${include}" jstl-include="/templates/IncludeTest/LoadFromURL.tpl.html"></jstl>`});
		await renderer.render({container, data : {include: true}});		
		expect(container.children.length).toBe(5);
		container.remove();
	});
	
	afterAll(() => {});
});