import { Renderer } from "../../../../index";

describe("Text Test - html mode ", () => {
	
	beforeAll(() => {});
	
	it("html", async () => {
		const renderer = await Renderer.build({template: "<div jstl-text-content-type=\"html\">${content}</div>"});
		const container = create("<div></div>").first();		
		await renderer.render({container, data: {content: "<div></div>"}});
		
		let element = container.children[0];
		expect(element.children.length).toBe(1);
	});
	
	it("html between text", async () => {
		const renderer = await Renderer.build({template: "<div jstl-text-content-type=\"html\">text ${content} test</div>"});
		const container = create("<div></div>").first();		
		await renderer.render({container, data: {content: "<div></div>"}});
		
		let element = container.children[0];
		expect(element.children.length).toBe(1);
		expect(element.childNodes.length).toBe(3);
		expect(element.childNodes[0] instanceof Text).toBe(true);
		expect(element.childNodes[1] instanceof HTMLElement).toBe(true);
		expect(element.childNodes[2] instanceof Text).toBe(true);		
	});
	
	it("html with expression as context (don't execute)", async () => {
		const renderer = await Renderer.build({template: "<div jstl-text-content-type=\"html\">${content}</div>"});
		const container = create("<div></div>").first();		
		await renderer.render({container, data: {content: "<div>${fail}</div>"}, fail:"fail"});
		
		let element = container.children[0];
		expect(element.children.length).toBe(1);
		expect(element.children[0].textContent).toBe("${fail}");
		
	});
	
	
	it("html secure content (no script, style, body, html, head, object and link tags)", async () => {
		const renderer = await Renderer.build({template: "<div jstl-text-content-type=\"html\">${content}</div>"});
		const container = create("<div></div>").first();		
		const badContent = "<script></script><html></html><head></head><object></object><style></style><link></link>"
		const badContentSelector = "script, style, body, html, head, object, link";	
		await renderer.render({container, data: {content: badContent + "<div>" + badContent + "</div>"}});
		
		let element = container.children[0];
		expect(element.children.length).toBe(1);
		expect(element.find(badContentSelector).length).toBe(0);
		
	});
	
	it("html include unsecure content ", async () => {
		const renderer = await Renderer.build({template: "<div jstl-text-content-type=\"html\" jstl-text-unsecure>${content}</div>"});
		const container = create("<div></div>").first();		
		const badContent = "<script></script><html></html><head></head><object></object><style></style><link></link>"
		const badContentSelector = "script, style, body, html, head, object, link";	
		await renderer.render({container, data: {content: badContent + "<div>" + badContent + "</div>"}});
		
		let element = container.children[0];
		expect(element.find(badContentSelector).length).not.toBe(0);
		
	});
	
	afterAll(() => {});
});