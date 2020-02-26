import Renderer from "@src/Renderer.js";

describe("Data Test - ", () => {
	
	beforeAll(() => {});
	
	it("load data from url", async () => {		
		const container = create("<div></div>").first();		
		const renderer = new Renderer({template: "<div jstl-data=\"/data/DataTest/remote-data.json\">${test1}</div>"});
		debugger;
		await renderer.render({container});		
		expect(container.children.length).toBe(1);
		expect(container.children[0].textContent).toBe("value-1");
	});
	
	afterAll(() => {});
});