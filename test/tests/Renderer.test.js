import { describe, it, expect } from "vitest";
import { Renderer, Template } from "../../index.js";

describe("Renderer.render", () => {
	it("renders a single element", async () => {
		const container = document.createElement("div");
		const template = await Template.load(`<div></div>`);

		await Renderer.render({ container, template });

		expect(container.children).toHaveLength(1);
		expect(container.children[0].tagName).toBe("DIV");
		expect(container.children[0].children).toHaveLength(0);
	});

	it("renders a single element in the place of a target", async () => {
		const parent = document.createElement("div");
		parent.innerHTML = `<span></span>`;
		const target = parent.children[0];
		const template = await Template.load(`<div></div>`);

		await Renderer.render({ target, template });

		expect(parent.children).toHaveLength(1);
		expect(parent.children[0].tagName).toBe("DIV");
		expect(parent.children[0].children).toHaveLength(0);
	});

	it("renders a list of elements in their order", async () => {
		const container = document.createElement("div");
		const template = await Template.load(`<div></div><p></p><b></b>`);

		await Renderer.render({ container, template });

		expect(Array.from(container.children, (anElement) => anElement.tagName)).toEqual(["DIV", "P", "B"]);
		expect(Array.from(container.children, (anElement) => anElement.children.length)).toEqual([0, 0, 0]);
	});

	it("renders a list of elements in their order in the place of a target", async () => {
		const parent = document.createElement("div");
		parent.innerHTML = `<span></span>`;
		const target = parent.children[0];
		const template = await Template.load(`<div></div><p></p><b></b>`);

		await Renderer.render({ target, template });

		expect(Array.from(parent.children, (anElement) => anElement.tagName)).toEqual(["DIV", "P", "B"]);
		expect(Array.from(parent.children, (anElement) => anElement.children.length)).toEqual([0, 0, 0]);
	});

	it("renders a single element into the content of the context in mode none", async () => {
		const template = await Template.load(`<div></div>`);

		const context = await Renderer.render({ template, mode: "none" });

		expect(context.content).toBeInstanceOf(Array);
		expect(context.content.map((aNode) => aNode.tagName)).toEqual(["DIV"]);
		expect(context.content[0].children).toHaveLength(0);
	});

	it("renders a list of elements into the content of the context in mode none", async () => {
		const template = await Template.load(`<div></div><p></p><b></b>`);

		const context = await Renderer.render({ template, mode: "none" });

		expect(context.content).toBeInstanceOf(Array);
		expect(context.content.map((aNode) => aNode.tagName)).toEqual(["DIV", "P", "B"]);
		expect(context.content.map((aNode) => aNode.children.length)).toEqual([0, 0, 0]);
	});

	it("renders an element with a child", async () => {
		const container = document.createElement("div");
		const template = await Template.load(`<div><p></p></div>`);

		await Renderer.render({ container, template });

		expect(container.children).toHaveLength(1);
		const element = container.children[0];
		expect(element.tagName).toBe("DIV");
		expect(element.children).toHaveLength(1);
		expect(element.children[0].tagName).toBe("P");
		expect(element.children[0].children).toHaveLength(0);
	});
});

const SINGLE = { elements: "a single element", source: `<div></div>` };
const LIST = { elements: "a list of elements", source: `<div></div><p></p><b></b>` };

describe("Renderer.render - mode", () => {
	it.each([
		{ mode: "replace", ...SINGLE, tagNames: ["DIV"] },
		{ mode: "replace", ...LIST, tagNames: ["DIV", "P", "B"] },
		{ mode: "append", ...SINGLE, tagNames: ["A", "DIV"] },
		{ mode: "append", ...LIST, tagNames: ["A", "DIV", "P", "B"] },
		{ mode: "prepend", ...SINGLE, tagNames: ["DIV", "A"] },
		{ mode: "prepend", ...LIST, tagNames: ["DIV", "P", "B", "A"] }
	])("$mode renders $elements into a container as $tagNames", async ({ mode, source, tagNames }) => {
		const container = document.createElement("div");
		container.innerHTML = `<a></a>`;
		const template = await Template.load(source);

		await Renderer.render({ container, template, mode });

		expect(Array.from(container.children, (anElement) => anElement.tagName)).toEqual(tagNames);
		expect(Array.from(container.children, (anElement) => anElement.children.length)).toEqual(tagNames.map(() => 0));
	});

	it.each([
		{ mode: "replace", ...SINGLE, tagNames: ["A", "DIV", "I"] },
		{ mode: "replace", ...LIST, tagNames: ["A", "DIV", "P", "B", "I"] },
		{ mode: "append", ...SINGLE, tagNames: ["A", "SPAN", "DIV", "I"] },
		{ mode: "append", ...LIST, tagNames: ["A", "SPAN", "DIV", "P", "B", "I"] },
		{ mode: "prepend", ...SINGLE, tagNames: ["A", "DIV", "SPAN", "I"] },
		{ mode: "prepend", ...LIST, tagNames: ["A", "DIV", "P", "B", "SPAN", "I"] }
	])("$mode renders $elements at a target as $tagNames", async ({ mode, source, tagNames }) => {
		const parent = document.createElement("div");
		parent.innerHTML = `<a></a><span></span><i></i>`;
		const target = parent.children[1];
		const template = await Template.load(source);

		await Renderer.render({ target, template, mode });

		expect(Array.from(parent.children, (anElement) => anElement.tagName)).toEqual(tagNames);
		expect(Array.from(parent.children, (anElement) => anElement.children.length)).toEqual(tagNames.map(() => 0));
	});
});
