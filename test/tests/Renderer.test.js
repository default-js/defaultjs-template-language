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

describe("Renderer.render - mode", () => {
	it("replace renders a single element in place of the content of a container", async () => {
		const container = document.createElement("div");
		container.innerHTML = `<a></a>`;
		const template = await Template.load(`<div></div>`);

		await Renderer.render({ container, template, mode: "replace" });

		expect(Array.from(container.children, (anElement) => anElement.tagName)).toEqual(["DIV"]);
		expect(Array.from(container.children, (anElement) => anElement.children.length)).toEqual([0]);
	});

	it("replace renders a list of elements in place of the content of a container", async () => {
		const container = document.createElement("div");
		container.innerHTML = `<a></a>`;
		const template = await Template.load(`<div></div><p></p><b></b>`);

		await Renderer.render({ container, template, mode: "replace" });

		expect(Array.from(container.children, (anElement) => anElement.tagName)).toEqual(["DIV", "P", "B"]);
		expect(Array.from(container.children, (anElement) => anElement.children.length)).toEqual([0, 0, 0]);
	});

	it("append renders a single element after the content of a container", async () => {
		const container = document.createElement("div");
		container.innerHTML = `<a></a>`;
		const template = await Template.load(`<div></div>`);

		await Renderer.render({ container, template, mode: "append" });

		expect(Array.from(container.children, (anElement) => anElement.tagName)).toEqual(["A", "DIV"]);
		expect(Array.from(container.children, (anElement) => anElement.children.length)).toEqual([0, 0]);
	});

	it("append renders a list of elements after the content of a container", async () => {
		const container = document.createElement("div");
		container.innerHTML = `<a></a>`;
		const template = await Template.load(`<div></div><p></p><b></b>`);

		await Renderer.render({ container, template, mode: "append" });

		expect(Array.from(container.children, (anElement) => anElement.tagName)).toEqual(["A", "DIV", "P", "B"]);
		expect(Array.from(container.children, (anElement) => anElement.children.length)).toEqual([0, 0, 0, 0]);
	});

	it("prepend renders a single element before the content of a container", async () => {
		const container = document.createElement("div");
		container.innerHTML = `<a></a>`;
		const template = await Template.load(`<div></div>`);

		await Renderer.render({ container, template, mode: "prepend" });

		expect(Array.from(container.children, (anElement) => anElement.tagName)).toEqual(["DIV", "A"]);
		expect(Array.from(container.children, (anElement) => anElement.children.length)).toEqual([0, 0]);
	});

	it("prepend renders a list of elements before the content of a container", async () => {
		const container = document.createElement("div");
		container.innerHTML = `<a></a>`;
		const template = await Template.load(`<div></div><p></p><b></b>`);

		await Renderer.render({ container, template, mode: "prepend" });

		expect(Array.from(container.children, (anElement) => anElement.tagName)).toEqual(["DIV", "P", "B", "A"]);
		expect(Array.from(container.children, (anElement) => anElement.children.length)).toEqual([0, 0, 0, 0]);
	});

	it("replace renders a single element in place of a target", async () => {
		const parent = document.createElement("div");
		parent.innerHTML = `<a></a><span></span><i></i>`;
		const target = parent.children[1];
		const template = await Template.load(`<div></div>`);

		await Renderer.render({ target, template, mode: "replace" });

		expect(Array.from(parent.children, (anElement) => anElement.tagName)).toEqual(["A", "DIV", "I"]);
		expect(Array.from(parent.children, (anElement) => anElement.children.length)).toEqual([0, 0, 0]);
	});

	it("replace renders a list of elements in place of a target", async () => {
		const parent = document.createElement("div");
		parent.innerHTML = `<a></a><span></span><i></i>`;
		const target = parent.children[1];
		const template = await Template.load(`<div></div><p></p><b></b>`);

		await Renderer.render({ target, template, mode: "replace" });

		expect(Array.from(parent.children, (anElement) => anElement.tagName)).toEqual(["A", "DIV", "P", "B", "I"]);
		expect(Array.from(parent.children, (anElement) => anElement.children.length)).toEqual([0, 0, 0, 0, 0]);
	});

	it("append renders a single element after a target", async () => {
		const parent = document.createElement("div");
		parent.innerHTML = `<a></a><span></span><i></i>`;
		const target = parent.children[1];
		const template = await Template.load(`<div></div>`);

		await Renderer.render({ target, template, mode: "append" });

		expect(Array.from(parent.children, (anElement) => anElement.tagName)).toEqual(["A", "SPAN", "DIV", "I"]);
		expect(Array.from(parent.children, (anElement) => anElement.children.length)).toEqual([0, 0, 0, 0]);
	});

	it("append renders a list of elements after a target", async () => {
		const parent = document.createElement("div");
		parent.innerHTML = `<a></a><span></span><i></i>`;
		const target = parent.children[1];
		const template = await Template.load(`<div></div><p></p><b></b>`);

		await Renderer.render({ target, template, mode: "append" });

		expect(Array.from(parent.children, (anElement) => anElement.tagName)).toEqual(["A", "SPAN", "DIV", "P", "B", "I"]);
		expect(Array.from(parent.children, (anElement) => anElement.children.length)).toEqual([0, 0, 0, 0, 0, 0]);
	});

	it("prepend renders a single element before a target", async () => {
		const parent = document.createElement("div");
		parent.innerHTML = `<a></a><span></span><i></i>`;
		const target = parent.children[1];
		const template = await Template.load(`<div></div>`);

		await Renderer.render({ target, template, mode: "prepend" });

		expect(Array.from(parent.children, (anElement) => anElement.tagName)).toEqual(["A", "DIV", "SPAN", "I"]);
		expect(Array.from(parent.children, (anElement) => anElement.children.length)).toEqual([0, 0, 0, 0]);
	});

	it("prepend renders a list of elements before a target", async () => {
		const parent = document.createElement("div");
		parent.innerHTML = `<a></a><span></span><i></i>`;
		const target = parent.children[1];
		const template = await Template.load(`<div></div><p></p><b></b>`);

		await Renderer.render({ target, template, mode: "prepend" });

		expect(Array.from(parent.children, (anElement) => anElement.tagName)).toEqual(["A", "DIV", "P", "B", "SPAN", "I"]);
		expect(Array.from(parent.children, (anElement) => anElement.children.length)).toEqual([0, 0, 0, 0, 0, 0]);
	});
});
