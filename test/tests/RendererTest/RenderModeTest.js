import Renderer from "@src/Renderer.js";

describe("Renderer Test - mode", () => {
	
	beforeAll(() => {});
	
	it("default (replace)", async () => {
		const container = create("<div></div>").first();
		
		const option = {
			container: container, 
			data: {}, 
			template: "<div></div>"
		};		
		await (new Renderer({template: "<div></div>"})).render(option);		
		expect(container.children.length).toBe(1);
		await (new Renderer()).render(option);
		expect(container.children.length).toBe(1);
	});
	
	it("replace without target", async () => {
		const container = create("<div></div>").first();
		
		const option = {
			container: container, 
			data: {}, 
			template: "<div></div>",
			mode: "replace"
		};		
		await (new Renderer()).render(option);		
		expect(container.children.length).toBe(1);
		await (new Renderer()).render(option);
		expect(container.children.length).toBe(1);
	});
	
	it("replace with target", async () => {
		const container = create("<div><a></a></div>").first();
		const target = container.find("a").first();
		const option = {
			container: container, 
			data: {}, 
			template: "<div></div>",
			mode: "replace",
			target: target
		};
		
		debugger;
		await (new Renderer()).render(option);		
		expect(container.children.length).toBe(1);
		expect(container.children[0].tagName).toBe("DIV");
	});
	
	afterAll(() => {});
});