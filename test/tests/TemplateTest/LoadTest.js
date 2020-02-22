import Template from "@src/Template.js";

describe("Template Test - Template.load()", () => {
	
	beforeAll(() => {});	
	
	it("load from source code", async () => {
		const source =	"<div>" +
						"\t<div></div>" +
						"\t<div></div>" +
						"</div>";
		
		const result = await Template.load(source, false);
		expect(result).toBeDefined();
		expect(result instanceof Template).toBe(true);
		expect(result.template).toBeDefined();
		expect(result.template instanceof HTMLTemplateElement).toBe(true);
	});
	
	it("load from url string", async () => {		
		const result = await Template.load("/templates/TemplateTest/LoadFromURL.html", false);
		expect(result).toBeDefined();
		expect(result instanceof Template).toBe(true);
		expect(result.template).toBeDefined();
		expect(result.template instanceof HTMLTemplateElement).toBe(true);
	});
	
	it("load from url", async () => {		
		const url = new URL("/templates/TemplateTest/LoadFromURL.html", location.origin);
		const result = await Template.load(url.toString(), false);
		expect(result).toBeDefined();
		expect(result instanceof Template).toBe(true);
		expect(result.template).toBeDefined();
		expect(result.template instanceof HTMLTemplateElement).toBe(true);
	});
	
	it("load from HTMLTemplateElement", async () => {
		const template = create("<div>" +
								"\t<div></div>" +
								"\t<div></div>" +
								"</div>", true);		
		
		const result = await Template.load(template, false);
		expect(result).toBeDefined();
		expect(result instanceof Template).toBe(true);
		expect(result.template).toBeDefined();
		expect(result.template instanceof HTMLTemplateElement).toBe(true);
	});
	
	it("load from Node", async () => {
		const node = create("<div>" +
								"\t<div></div>" +
								"\t<div></div>" +
								"</div>").first();		
		
		expect(node instanceof Node).toBe(true);
		const result = await Template.load(node, false);
		expect(result).toBeDefined();
		expect(result instanceof Template).toBe(true);
		expect(result.template).toBeDefined();
		expect(result.template instanceof HTMLTemplateElement).toBe(true);
	});
	
	it("load from NodeList", async () => {
		const nodelist = create("<div>" +
								"\t<div></div>" +
								"\t<div></div>" +
								"</div>");

		expect(nodelist instanceof NodeList).toBe(true);
		const result = await Template.load(nodelist, false);
		expect(result).toBeDefined();
		expect(result instanceof Template).toBe(true);
		expect(result.template).toBeDefined();
		expect(result.template instanceof HTMLTemplateElement).toBe(true);
	});
	
	it("load from HTMLCollection", async () => {
		const htmlcollection = create("<div>" +
								"\t<div></div>" +
								"\t<div></div>" +
								"</div>",true).content.children;
		
		expect(htmlcollection instanceof HTMLCollection).toBe(true);
		const result = await Template.load(htmlcollection, false);
		expect(result).toBeDefined();
		expect(result instanceof Template).toBe(true);
		expect(result.template).toBeDefined();
		expect(result.template instanceof HTMLTemplateElement).toBe(true);
	});
	
	afterAll(() => {});
});