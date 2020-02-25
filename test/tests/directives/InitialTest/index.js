import Renderer from "@src/Renderer.js";

describe("InitialDirective Test - ", () => {
	
	beforeAll(() => {});
	
	it("default case 1", async () => {
		const renderer = new Renderer({template: "<div></div>"});
		const container = create("<div></div>").first();		
		await renderer.render({container});		
		expect(container.children.length).toBe(1);
	});
	
	afterAll(() => {});
});