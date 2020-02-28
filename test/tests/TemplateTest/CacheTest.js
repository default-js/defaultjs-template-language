import Template from "@src/Template.js";

describe("Template Test - Template.load()", () => {
	
	beforeAll(() => {});	
	
	it("load from source code", async () => {
		const source =	"<div>" +
						"\t<div></div>" +
						"\t<div></div>" +
						"</div>";

		const expected = await Template.load(source);
		const result = await Template.load(source);
		expect(result).toBe(expected);
	});
	
	it("load from url string", async () => {		
		const expected = await Template.load("/templates/TemplateTest/LoadFromURL.html");
		const result = await Template.load("/templates/TemplateTest/LoadFromURL.html");
		expect(result).toBe(expected);
	});
	
	it("load from url", async () => {		
		const url = new URL("/templates/TemplateTest/LoadFromURL.html", location.origin).toString();
		
		const expected = await Template.load(url);
		const result = await Template.load(url);
		expect(result).toBe(expected);
	});
	
	it("load from HTMLTemplateElement", async () => {
		const template = create("<div>" +
								"\t<div></div>" +
								"\t<div></div>" +
								"</div>", true);		
		
		const expected = await Template.load(template);
		const result = await Template.load(template);
		expect(result).toBe(expected);
	});
	
	it("load from Node", async () => {
		const node = create("<div>" +
								"\t<div></div>" +
								"\t<div></div>" +
								"</div>").first();		
		
		const expected = await Template.load(node);
		const result = await Template.load(node);
		expect(result).not.toBe(expected);
	});
	
	it("load from NodeList", async () => {
		const nodelist = create("<div>" +
								"\t<div></div>" +
								"\t<div></div>" +
								"</div>");
		
		const expected = await Template.load(nodelist);
		const result = await Template.load(nodelist);
		expect(result).not.toBe(expected);
	});
	
	it("load from HTMLCollection", async () => {
		const htmlcollection = create("<div>" +
								"\t<div></div>" +
								"\t<div></div>" +
								"</div>",true).content.children;
		
		const expected = await Template.load(htmlcollection);
		const result = await Template.load(htmlcollection);
		expect(result).not.toBe(expected);
	});
	
	it("load with alias", async () => {
		const nodelist = create("<div>" +
								"\t<div></div>" +
								"\t<div></div>" +
								"</div>");
		
		const expected = await Template.load(nodelist, true, "test");
		const result = await Template.load(nodelist, true, "test");
		expect(result).toBe(expected);
	});
	
	afterAll(() => {});
});