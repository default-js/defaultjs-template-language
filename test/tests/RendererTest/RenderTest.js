import Renderer from "@src/Renderer.js";

describe("Renderer Test - traverse tree", () => {
	
	beforeAll(() => {});	
	
	it("case 1", async () => {		
		const container = create("<div></div>").first();
		expect(container.children.length).toBe(0);
		await new Renderer().render({
			container: container, 
			data: {}, 
			template: "<div></div>"
		});
		
		expect(container.children.length).toBe(1);
	});
	
	it("case 2", async () => {		
		const container = create("<div></div>").first();
		expect(container.children.length).toBe(0);
		
		await new Renderer().render({
			container: container, 
			data: {}, 
			template: 	"<div></div>" +
						"<div></div>" +
						"<div></div>" +
						"<div></div>" +
						"<div></div>"
		});		
		expect(container.children.length).toBe(5);
	});
	
	it("case 3", async () => {		
		const container = create("<div></div>").first();
		expect(container.children.length).toBe(0);
		await new Renderer().render({
			container: container, 
			data: {}, 
			template: 	"<div>" +
						"\t<div></div>" +
						"\t<div></div>" +
						"\t<div></div>" +
						"\t<div></div>" +
						"\t<div></div>" +
						"</div>"
		});
		
		let element = container;
		expect(element.children.length).toBe(1);
		
		element = element.children[0];
		expect(element.children.length).toBe(5);
	});
	
	it("case 4", async () => {		
		const container = create("<div></div>").first();
		expect(container.children.length).toBe(0);
		
		const content = "<div>{content}</div>";
		let template = content + content + content + content;
		for(let i = 0; i < 100; i++)
			template = template.replace(/\{content\}/g, content);
		
		await new Renderer().render({
			container: container, 
			data: {}, 
			template: 	template
		});
		expect(container.find("div").length > 100).toBe(true);
	});
	
	afterAll(() => {});
});