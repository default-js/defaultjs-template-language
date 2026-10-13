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

	it("starts at the index of jstl-repeat-start", async () => {
		const container = document.createElement("div");
		const template = await Template.load(`<div jstl-repeat="\${list}" jstl-repeat-start="2">\${item}-\${status.index}-\${status.first}</div>`);

		await Renderer.render({ container, template, data: { list: ["a", "b", "c", "d", "e"] } });

		expect(Array.from(container.children, (anElement) => anElement.tagName)).toEqual(["DIV", "DIV", "DIV"]);
		expect(Array.from(container.children, (anElement) => anElement.textContent)).toEqual(["c-2-true", "d-3-false", "e-4-false"]);
	});

	it("renders every second item with jstl-repeat-step 2", async () => {
		const container = document.createElement("div");
		const template = await Template.load(`<div jstl-repeat="\${list}" jstl-repeat-step="2">\${item}-\${status.last}</div>`);

		await Renderer.render({ container, template, data: { list: ["a", "b", "c", "d", "e"] } });

		expect(Array.from(container.children, (anElement) => anElement.tagName)).toEqual(["DIV", "DIV", "DIV"]);
		expect(Array.from(container.children, (anElement) => anElement.textContent)).toEqual(["a-false", "c-false", "e-true"]);
	});

	it.each([
		{ start: 1, step: 1, count: 3, expected: ["b-4", "c-4", "d-4"] },
		{ start: 0, step: 2, count: 3, expected: ["a-3", "c-3"] },
		{ start: 0, step: 1, count: 0, expected: ["a-5", "b-5", "c-5", "d-5", "e-5"] }
	])("iterates the items below start $start + count $count with step $step, status.count the end", async ({ start, step, count, expected }) => {
		const container = document.createElement("div");
		const template = await Template.load(`<div jstl-repeat="\${list}" jstl-repeat-start="${start}" jstl-repeat-step="${step}" jstl-repeat-count="\${count}">\${item}-\${status.count}</div>`);

		await Renderer.render({ container, template, data: { list: ["a", "b", "c", "d", "e"], count } });

		expect(Array.from(container.children, (anElement) => anElement.textContent)).toEqual(expected);
	});

	it("stops before the item for which jstl-repeat-condition is true", async () => {
		const container = document.createElement("div");
		const template = await Template.load(`<div jstl-repeat="\${list}" jstl-repeat-condition="\${item == 'c'}">\${item}</div>`);

		await Renderer.render({ container, template, data: { list: ["a", "b", "c", "d"] } });

		expect(Array.from(container.children, (anElement) => anElement.tagName)).toEqual(["DIV", "DIV"]);
		expect(Array.from(container.children, (anElement) => anElement.textContent)).toEqual(["a", "b"]);
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

	it("counts from jstl-repeat-start with jstl-repeat-count", async () => {
		const container = document.createElement("div");
		const template = await Template.load(`<div jstl-repeat-count="\${3}" jstl-repeat-start="2">\${item}-\${status.index}-\${status.number}-\${status.count}</div>`);

		await Renderer.render({ container, template, data: {} });

		expect(Array.from(container.children, (anElement) => anElement.tagName)).toEqual(["DIV", "DIV", "DIV"]);
		expect(Array.from(container.children, (anElement) => anElement.textContent)).toEqual(["2-2-3-3", "3-3-4-3", "4-4-5-3"]);
	});

	it("stops counting before the item for which jstl-repeat-condition is true", async () => {
		const container = document.createElement("div");
		const template = await Template.load(`<div jstl-repeat-count="\${5}" jstl-repeat-condition="\${status.index > 1}">\${item}</div>`);

		await Renderer.render({ container, template, data: {} });

		expect(Array.from(container.children, (anElement) => anElement.tagName)).toEqual(["DIV", "DIV"]);
		expect(Array.from(container.children, (anElement) => anElement.textContent)).toEqual(["0", "1"]);
	});

	it("renders options into a select", async () => {
		const container = document.createElement("select");
		const template = await Template.load(`<option jstl-repeat-count="\${count}" jstl-repeat-var="entry" jstl-repeat-status="state">\${entry}-\${state.index}</option>`);

		await Renderer.render({ container, template, data: { count: 5 } });

		expect(Array.from(container.children, (anElement) => anElement.tagName)).toEqual(["OPTION", "OPTION", "OPTION", "OPTION", "OPTION"]);
		expect(Array.from(container.children, (anElement) => anElement.textContent)).toEqual(["0-0", "1-1", "2-2", "3-3", "4-4"]);
	});
});
