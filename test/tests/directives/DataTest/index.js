import Renderer from "@src/Renderer.js";

describe("Data Test - ", () => {
	
	beforeAll(() => {});
	
	/*it("load data from url", async () => {		
		const container = create("<div></div>").first();		
		const renderer = await Renderer.build({template: "<div jstl-data=\"/data/DataTest/remote-data.json\">${test1}</div>"});
		
		await renderer.render({container});		
		expect(container.children.length).toBe(1);
		expect(container.children[0].textContent).toBe("value-1");
	});*/
	
	it("load data into variable - direct mode", async () => {		
		const container = create("<div></div>").first();		
		const renderer = await Renderer.build({template: "<div jstl-data=\"value-1\" jstl-data-var=\"test1\" jstl-data-mode=\"direct\">${test1}</div>"});
		
		await renderer.render({container});		
		expect(container.children.length).toBe(1);
		expect(container.children[0].textContent).toBe("value-1");
	});
	
	afterAll(() => {});
});