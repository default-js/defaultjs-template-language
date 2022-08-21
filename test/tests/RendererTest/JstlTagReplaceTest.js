import { Renderer } from "../../../index";

describe("Renderer Test - jstl remove test", () => {
	
	beforeAll(() => {});	
	
	it("case 1", async () => {		
		const container = create("<div></div>").first();
		expect(container.children.length).toBe(0);
		await new Renderer().render({
			container: container, 
			data: {}, 
			template: "<jstl><div></div></jstl>"
		});
		
		expect(container.children.length).toBe(1);
		expect(container.children[0].tagName).toBe("DIV");
	});
	
	
	it("case 2", async () => {		
		const container = create("<div></div>").first();
		expect(container.children.length).toBe(0);
		await new Renderer().render({
			container: container, 
			data: {render: false}, 
			template: "<jstl jstl-if=\"${render}\"><div></div></jstl>"
		});
		
		expect(container.children.length).toBe(0);
	});
	
	it("case 3", async () => {		
		const container = create("<div></div>").first();
		expect(container.children.length).toBe(0);
		await new Renderer().render({
			container: container, 
			data: {render: true}, 
			template: "<jstl jstl-if=\"${render}\"><div></div></jstl>"
		});
		
		expect(container.children.length).toBe(1);
		expect(container.children[0].tagName).toBe("DIV");
	});
	
	afterAll(() => {});
});