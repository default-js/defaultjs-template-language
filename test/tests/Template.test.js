import { describe, it, expect, beforeAll, afterAll } from "vitest";
import { Template } from "../../index.js";

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
		const result = await Template.load(new URL("/templates/Template/LoadFromURL.html", location), false);
		expect(result).toBeDefined();
		expect(result instanceof Template).toBe(true);
		expect(result.template).toBeDefined();
		expect(result.template instanceof HTMLTemplateElement).toBe(true);
		expect(result.template.content.children.length).toBe(5);
		expect(result.key).toBeDefined();
	});

	it("load from url", async () => {
		const url = new URL("/templates/Template/LoadFromURL.html", location);
		const result = await Template.load(url.toString(), false);
		expect(result).toBeDefined();
		expect(result instanceof Template).toBe(true);
		expect(result.template).toBeDefined();
		expect(result.template instanceof HTMLTemplateElement).toBe(true);
		expect(result.key).toBeDefined();
	});

	it("load from HTMLTemplateElement", async () => {
		const template = create("<div></div>" +
								"<div></div>" +
								"<div></div>" +
								"<div></div>" +
								"<div></div>", true);

		const result = await Template.load(template, false);
		expect(result).toBeDefined();
		expect(result instanceof Template).toBe(true);
		expect(result.template).toBeDefined();
		expect(result.template instanceof HTMLTemplateElement).toBe(true);
		expect(result.template instanceof HTMLTemplateElement).toBe(true);
		expect(result.template.content.childNodes.length).toBe(5);
		expect(result.key).toBeDefined();
	});

	it("load from Node", async () => {
		const node = create(`<div><div></div><div></div></div>`).first();

		expect(node instanceof Node).toBe(true);
		const result = await Template.load(node, false);
		expect(result).toBeDefined();
		expect(result instanceof Template).toBe(true);
		expect(result.template).toBeDefined();
		expect(result.template instanceof HTMLTemplateElement).toBe(true);
		expect(result.importContent().length).toBe(1);
		expect(result.key).toBeDefined();
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
		expect(result.key).toBeDefined();
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
		expect(result.key).toBeDefined();
	});

	afterAll(() => {});
});

describe("Template Cache Test - Template.load()", () => {

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
		const expected = await Template.load("/templates/Template/LoadFromURL.html");
		const result = await Template.load("/templates/Template/LoadFromURL.html");
		expect(result).toBe(expected);
	});

	it("load from url", async () => {
		const url = new URL("/templates/Template/LoadFromURL.html", location.origin).toString();

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

		const expected = await Template.load(node, false);
		const result = await Template.load(node, false);
		expect(result).not.toBe(expected);
	});

	it("load from NodeList", async () => {
		const nodelist = create("<div>" +
								"\t<div></div>" +
								"\t<div></div>" +
								"</div>");

		const expected = await Template.load(nodelist, false);
		const result = await Template.load(nodelist, false);
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
