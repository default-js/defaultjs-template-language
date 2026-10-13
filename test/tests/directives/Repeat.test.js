import { describe, it, expect } from "vitest";
import { Renderer, Template } from "../../../index.js";

describe("jstl-repeat", () => {
	it("renders the element once per item, with the item and its status", async () => {
		const container = document.createElement("div");
		const template = await Template.load(`<div jstl-repeat="\${list}" jstl-repeat-var="entry" jstl-repeat-status="state">\${entry}-\${state.index}</div>`);

		await Renderer.render({ container, template, data: { list: [1, 2, 3, 4, 5] } });

		expect(Array.from(container.children, (anElement) => anElement.tagName)).toEqual(["DIV", "DIV", "DIV", "DIV", "DIV"]);
		expect(Array.from(container.children, (anElement) => anElement.textContent)).toEqual(["1-0", "2-1", "3-2", "4-3", "5-4"]);
	});

	it("renders the element once per own property of an object, with the value as item and the name as status.key", async () => {
		const container = document.createElement("div");
		const template = await Template.load(`<div jstl-repeat="\${object}">\${status.key}: \${item}</div>`);

		await Renderer.render({ container, template, data: { object: { a: "value-a", b: "value-b" } } });

		expect(Array.from(container.children, (anElement) => anElement.tagName)).toEqual(["DIV", "DIV"]);
		expect(Array.from(container.children, (anElement) => anElement.textContent)).toEqual(["a: value-a", "b: value-b"]);
	});

	it("carries key, first, last and step in the status of an array", async () => {
		const container = document.createElement("div");
		const template = await Template.load(`<div jstl-repeat="\${list}">\${status.key}-\${status.first}-\${status.last}-\${status.step}</div>`);

		await Renderer.render({ container, template, data: { list: ["x", "y", "z"] } });

		expect(Array.from(container.children, (anElement) => anElement.tagName)).toEqual(["DIV", "DIV", "DIV"]);
		expect(Array.from(container.children, (anElement) => anElement.textContent)).toEqual(["0-true-false-1", "1-false-false-1", "2-false-true-1"]);
	});

	it("renders the element count times with jstl-repeat-count", async () => {
		const container = document.createElement("div");
		const template = await Template.load(`<div jstl-repeat-count="\${count}" jstl-repeat-var="entry" jstl-repeat-status="state">\${entry}-\${state.index}</div>`);

		await Renderer.render({ container, template, data: { count: 5 } });

		expect(Array.from(container.children, (anElement) => anElement.tagName)).toEqual(["DIV", "DIV", "DIV", "DIV", "DIV"]);
		expect(Array.from(container.children, (anElement) => anElement.textContent)).toEqual(["0-0", "1-1", "2-2", "3-3", "4-4"]);
	});

	it("carries first, last and step in the status of jstl-repeat-count", async () => {
		const container = document.createElement("div");
		const template = await Template.load(`<div jstl-repeat-count="\${count}" jstl-repeat-step="2">\${item}-\${status.first}-\${status.last}-\${status.step}</div>`);

		await Renderer.render({ container, template, data: { count: 3 } });

		expect(Array.from(container.children, (anElement) => anElement.tagName)).toEqual(["DIV", "DIV", "DIV"]);
		expect(Array.from(container.children, (anElement) => anElement.textContent)).toEqual(["0-true-false-2", "2-false-false-2", "4-false-true-2"]);
	});

	it("renders options into a select", async () => {
		const container = document.createElement("select");
		const template = await Template.load(`<option jstl-repeat-count="\${count}" jstl-repeat-var="entry" jstl-repeat-status="state">\${entry}-\${state.index}</option>`);

		await Renderer.render({ container, template, data: { count: 5 } });

		expect(Array.from(container.children, (anElement) => anElement.tagName)).toEqual(["OPTION", "OPTION", "OPTION", "OPTION", "OPTION"]);
		expect(Array.from(container.children, (anElement) => anElement.textContent)).toEqual(["0-0", "1-1", "2-2", "3-3", "4-4"]);
	});
});
