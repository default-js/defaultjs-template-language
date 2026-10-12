import { describe, it, expect } from "vitest";
import { Template } from "../../index.js";

const TEMPLATE_URL = "/templates/Template/LoadFromURL.html";

describe("Template.load", () => {
	it("loads a template from source code", async () => {
		const result = await Template.load(`<div><div></div><span></span></div>`, false);

		expect(result).toBeInstanceOf(Template);
		expect(result.template).toBeInstanceOf(HTMLTemplateElement);
		const content = result.template.content;
		expect(content.children).toHaveLength(1);
		expect(Array.from(content.children[0].children, (anElement) => anElement.tagName)).toEqual(["DIV", "SPAN"]);
	});

	it("loads a template from a URL", async () => {
		const result = await Template.load(new URL(TEMPLATE_URL, location), false);

		expect(result).toBeInstanceOf(Template);
		expect(result.template).toBeInstanceOf(HTMLTemplateElement);
		expect(result.template.content.children).toHaveLength(5);
	});

	it("loads a template from an HTMLTemplateElement", async () => {
		const template = document.createElement("template");
		template.innerHTML = `<div></div><div></div><div></div><div></div><div></div>`;

		const result = await Template.load(template, false);

		expect(result).toBeInstanceOf(Template);
		expect(result.template).toBe(template);
		expect(result.template.content.children).toHaveLength(5);
	});

	it("loads a template from a Node", async () => {
		const node = create(`<div><div></div><span></span></div>`).first();

		const result = await Template.load(node, false);

		expect(result).toBeInstanceOf(Template);
		expect(result.template).toBeInstanceOf(HTMLTemplateElement);
		const content = result.importContent();
		expect(content).toHaveLength(1);
		expect(Array.from(content[0].children, (anElement) => anElement.tagName)).toEqual(["DIV", "SPAN"]);
	});

	it("loads a template from a NodeList", async () => {
		const nodelist = create(`<div><div></div><span></span></div>`);
		expect(nodelist).toBeInstanceOf(NodeList);

		const result = await Template.load(nodelist, false);

		expect(result).toBeInstanceOf(Template);
		expect(result.template).toBeInstanceOf(HTMLTemplateElement);
		const content = result.template.content;
		expect(content.children).toHaveLength(1);
		expect(Array.from(content.children[0].children, (anElement) => anElement.tagName)).toEqual(["DIV", "SPAN"]);
	});

	it("loads a template from an HTMLCollection", async () => {
		const htmlcollection = create(`<div><div></div><span></span></div>`, true).content.children;
		expect(htmlcollection).toBeInstanceOf(HTMLCollection);

		const result = await Template.load(htmlcollection, false);

		expect(result).toBeInstanceOf(Template);
		expect(result.template).toBeInstanceOf(HTMLTemplateElement);
		const content = result.template.content;
		expect(content.children).toHaveLength(1);
		expect(Array.from(content.children[0].children, (anElement) => anElement.tagName)).toEqual(["DIV", "SPAN"]);
	});
});

describe("Template.fetch", () => {
	// defect: B2
	it.fails("loads a template from a URL given as string", async () => {
		const result = await Template.fetch(TEMPLATE_URL, false);

		expect(result).toBeInstanceOf(Template);
		expect(result.template.content.children).toHaveLength(5);
	});
});

describe("Template.load - cache", () => {
	it("returns the cached template for the same source code", async () => {
		const source = `<div><div></div><span></span></div>`;

		const expected = await Template.load(source);
		const result = await Template.load(source);

		expect(result).toBe(expected);
	});

	it("returns the cached template for the same URL", async () => {
		const expected = await Template.load(new URL(TEMPLATE_URL, location));
		const result = await Template.load(new URL(TEMPLATE_URL, location));

		expect(result).toBe(expected);
	});

	// defect: B2
	it.fails("returns the cached template for the same URL given as string", async () => {
		const expected = await Template.fetch(TEMPLATE_URL);
		const result = await Template.fetch(TEMPLATE_URL);

		expect(result).toBe(expected);
	});

	it("returns the cached template for the same HTMLTemplateElement", async () => {
		const template = document.createElement("template");
		template.innerHTML = `<div><div></div><span></span></div>`;

		const expected = await Template.load(template);
		const result = await Template.load(template);

		expect(result).toBe(expected);
	});

	it.each([
		{ type: "Node", source: () => create(`<div><div></div><span></span></div>`).first() },
		{ type: "NodeList", source: () => create(`<div><div></div><span></span></div>`) }
	])("creates a new template from a $type when cache is false", async ({ source }) => {
		const node = source();

		const expected = await Template.load(node, false);
		const result = await Template.load(node, false);

		expect(result).not.toBe(expected);
	});

	it("does not cache a template from an HTMLCollection", async () => {
		const htmlcollection = create(`<div><div></div><span></span></div>`, true).content.children;

		const expected = await Template.load(htmlcollection);
		const result = await Template.load(htmlcollection);

		expect(result).not.toBe(expected);
	});

	it("returns the cached template for the same alias", async () => {
		const nodelist = create(`<div><div></div><span></span></div>`);

		const expected = await Template.load(nodelist, true, "test");
		const result = await Template.load(nodelist, true, "test");

		expect(result).toBe(expected);
	});
});
