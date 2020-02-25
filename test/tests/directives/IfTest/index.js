import Renderer from "@src/Renderer.js";

describe("If Test - ", () => {
	
	beforeAll(() => {});
	
	it("jstl-if=${render} render=true", async () => {
		const container = create("<div></div>").first();		
		const renderer = new Renderer({template: "<div jstl-if=\"${render}\"></div>"});
		await renderer.render({container, data : {render : true}});		
		expect(container.children.length).toBe(1);
	});
	
	it("jstl-if=${render} render=false", async () => {		
		const container = create("<div></div>").first();		
		const renderer = new Renderer({template: "<div jstl-if=\"${render}\"></div>"});
		await renderer.render({container, data : {render : false}});		
		expect(container.children.length).toBe(0);
	});
	
	afterAll(() => {});
});