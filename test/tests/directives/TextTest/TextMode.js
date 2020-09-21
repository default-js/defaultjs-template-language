import Renderer from "@src/Renderer.js";

describe("Text Test - text mode ", () => {
	
	beforeAll(() => {});
	
	it("plain text", async () => {
		const renderer = await Renderer.build({template: "<div>test text</div>"});
		const container = create("<div></div>").first();		
		await renderer.render({container});		
		expect(container.children[0].textContent).toBe("test text");
	});
	
	it("plain text with dynamic content", async () => {
		const renderer = await Renderer.build({template: "<div>test text ${dynamic} content</div>"});
		const container = create("<div></div>").first();		
		await renderer.render({container, data: {dynamic:"dynamic"}});		
		expect(container.children[0].textContent).toBe("test text dynamic content");
	});
	
	it("plain text with jstl-text-ignore", async () => {
		const renderer = await Renderer.build({template: "<div jstl-text-ignore>test text ${dynamic} content</div>"});
		const container = create("<div></div>").first();		
		await renderer.render({container, data: {dynamic:"dynamic"}});		
		expect(container.children[0].textContent).toBe("test text ${dynamic} content");
	});
	
	
	it("plain text with max text length and dynamic content", async () => {
		const renderer = await Renderer.build({template: "<div jstl-text-trim-length=\"${length}\">test text ${dynamic} content</div>"});
		const container = create("<div></div>").first();		
		await renderer.render({container, data: {dynamic:"dynamic", length: 15}});		
		expect(container.children[0].textContent).toBe("test text dy...");
	});
	
	it("plain text with dynamic html content", async () => {
		const renderer = await Renderer.build({template: "<div>test text ${dynamic}</div>"});
		const container = create("<div></div>").first();		
		await renderer.render({container, data: {dynamic:"<div>dynamic<div> content</div></div>"}});
		expect(container.children[0].children.length).toBe(0);	
		expect(container.children[0].textContent).toBe("test text dynamic content");
	});
	
	afterAll(() => {});
});