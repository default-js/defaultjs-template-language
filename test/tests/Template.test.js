import { describe, it, expect, vi, onTestFinished } from "vitest";
import { Renderer, Template, toAsyncTemplateLoader } from "../../index.js";

const TEMPLATE_URL = "/templates/Template/LoadFromURL.html";

describe("new Template", () => {
	it("creates a template rendering the content of an HTMLTemplateElement", async () => {
		const container = document.createElement("div");
		const element = document.createElement("template");
		element.innerHTML = `<p>\${text}</p>`;

		await Renderer.render({ container, template: new Template(element), data: { text: "text" } });

		expect(Array.from(container.children, (anElement) => anElement.tagName)).toEqual(["P"]);
		expect(container.children[0].textContent).toBe("text");
	});
});

describe("Template.load", () => {
	it("answers a Template as it is", async () => {
		const template = await Template.load(`<p></p>`, false);

		const result = await Template.load(template);

		expect(result).toBe(template);
	});

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

	it.each([
		{ type: "number", value: 42 },
		{ type: "plain object", value: {} },
		{ type: "null", value: null }
	])("rejects a $type with an Error", async ({ value }) => {
		await expect(Template.load(value, false)).rejects.toBeInstanceOf(Error);
	});
});

describe("Template.fetch", () => {
	it("loads a template from a URL given as string", async () => {
		const result = await Template.fetch(TEMPLATE_URL, false);

		expect(result).toBeInstanceOf(Template);
		expect(result.template.content.children).toHaveLength(5);
	});

	it("loads a template from a URL", async () => {
		const result = await Template.fetch(new URL(TEMPLATE_URL, location), false);

		expect(result).toBeInstanceOf(Template);
		expect(result.template.content.children).toHaveLength(5);
	});

	it("resolves a relative URL given as string against location", async () => {
		// the page lies in the root of the origin, where location and origin resolve alike
		const page = location.href;
		history.replaceState(history.state, "", "/templates/Template/page.html");
		onTestFinished(() => history.replaceState(history.state, "", page));

		const result = await Template.fetch("LoadFromURL.html", false);

		expect(result).toBeInstanceOf(Template);
		expect(result.template.content.children).toHaveLength(5);
	});

	it.each([
		{ type: "number", value: 42 },
		{ type: "plain object", value: {} },
		{ type: "null", value: null }
	])("rejects a $type with an Error", async ({ value }) => {
		await expect(Template.fetch(value, false)).rejects.toBeInstanceOf(Error);
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

	it("returns the cached template for the same URL given as string", async () => {
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

describe("Template.loadNodeTemplate", () => {
	it("loads the template of a child template element", async () => {
		const node = create(`<div><template><p></p></template></div>`).first();

		const result = await Template.loadNodeTemplate(node, null, false);

		expect(result).toBeInstanceOf(Template);
		expect(Array.from(result.template.content.children, (aChild) => aChild.tagName)).toEqual(["P"]);
	});

	it("loads the template of the element the attribute template selects", async () => {
		const element = create(`<template id="load-node-template-test"><p></p></template>`).first();
		document.body.append(element);
		onTestFinished(() => element.remove());
		const node = create(`<div template="#load-node-template-test"></div>`).first();

		const result = await Template.loadNodeTemplate(node, null, false);

		expect(result).toBeInstanceOf(Template);
		expect(Array.from(result.template.content.children, (aChild) => aChild.tagName)).toEqual(["P"]);
	});

	it("loads the template from the URL of the attribute template", async () => {
		const node = create(`<div template="${TEMPLATE_URL}"></div>`).first();

		const result = await Template.loadNodeTemplate(node, null, false);

		expect(result).toBeInstanceOf(Template);
		expect(result.template.content.children).toHaveLength(5);
	});

	it("prefers a child template element to the attribute template", async () => {
		const node = create(`<div template="${TEMPLATE_URL}"><template><p></p></template></div>`).first();

		const result = await Template.loadNodeTemplate(node, null, false);

		expect(Array.from(result.template.content.children, (aChild) => aChild.tagName)).toEqual(["P"]);
	});

	it("answers the defaultTemplate when the node names no template", async () => {
		const defaultTemplate = await Template.load(`<p></p>`, false);
		const node = create(`<div></div>`).first();

		const result = await Template.loadNodeTemplate(node, defaultTemplate, false);

		expect(result).toBe(defaultTemplate);
	});
});

describe("toAsyncTemplateLoader", () => {
	it("loads the template on the first call only and answers it on every call", async () => {
		const source = vi.fn(() => `<p></p>`);
		const loader = toAsyncTemplateLoader(source);

		const first = await loader();
		const second = await loader();

		expect(first).toBeInstanceOf(Template);
		expect(second).toBe(first);
		expect(source).toHaveBeenCalledOnce();
	});

	it.each([
		{ kind: "a source", template: () => `<p></p>` },
		{ kind: "a promise of a source", template: () => Promise.resolve(`<p></p>`) },
		{ kind: "a function answering a source", template: () => () => `<p></p>` }
	])("loads the template from $kind", async ({ template }) => {
		const loader = toAsyncTemplateLoader(template());

		const result = await loader();

		expect(result).toBeInstanceOf(Template);
		expect(Array.from(result.template.content.children, (aChild) => aChild.tagName)).toEqual(["P"]);
	});
});
