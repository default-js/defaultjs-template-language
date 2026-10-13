import { describe, it, expect } from "vitest";
import { Renderer, Template } from "../../../index.js";

describe("jstl-foreach", () => {
	it("renders its content once per item, with the item and its status", async () => {
		const container = document.createElement("div");
		const template = await Template.load(`<div jstl-foreach="\${list}" jstl-foreach-var="entry" jstl-foreach-status="state"><div>\${entry}-\${state.index}</div></div>`);

		await Renderer.render({ container, template, data: { list: [1, 2, 3, 4, 5] } });

		expect(container.children).toHaveLength(1);
		const element = container.children[0];
		expect(Array.from(element.children, (aChild) => aChild.textContent)).toEqual(["1-0", "2-1", "3-2", "4-3", "5-4"]);
	});

	it("renders its content once per own property of an object, with the value as item and the name as status.key", async () => {
		const container = document.createElement("div");
		const template = await Template.load(`<div jstl-foreach="\${object}"><div>\${status.key}: \${item}</div></div>`);

		await Renderer.render({ container, template, data: { object: { a: "value-a", b: "value-b" } } });

		expect(container.children).toHaveLength(1);
		const element = container.children[0];
		expect(Array.from(element.children, (aChild) => aChild.textContent)).toEqual(["a: value-a", "b: value-b"]);
	});

	it("carries key, first, last and step in the status of an array", async () => {
		const container = document.createElement("div");
		const template = await Template.load(`<div jstl-foreach="\${list}"><div>\${status.key}-\${status.first}-\${status.last}-\${status.step}</div></div>`);

		await Renderer.render({ container, template, data: { list: ["x", "y", "z"] } });

		expect(container.children).toHaveLength(1);
		const element = container.children[0];
		expect(Array.from(element.children, (aChild) => aChild.textContent)).toEqual(["0-true-false-1", "1-false-false-1", "2-false-true-1"]);
	});

	it("renders its content count times with jstl-foreach-count", async () => {
		const container = document.createElement("div");
		const template = await Template.load(`<div jstl-foreach-count="\${count}" jstl-foreach-var="entry" jstl-foreach-status="state"><div>\${entry}-\${state.index}</div></div>`);

		await Renderer.render({ container, template, data: { count: 5 } });

		expect(container.children).toHaveLength(1);
		const element = container.children[0];
		expect(Array.from(element.children, (aChild) => aChild.textContent)).toEqual(["0-0", "1-1", "2-2", "3-3", "4-4"]);
	});

	it("carries first, last and step in the status of jstl-foreach-count", async () => {
		const container = document.createElement("div");
		const template = await Template.load(`<div jstl-foreach-count="\${count}" jstl-foreach-step="2"><div>\${item}-\${status.first}-\${status.last}-\${status.step}</div></div>`);

		await Renderer.render({ container, template, data: { count: 3 } });

		expect(container.children).toHaveLength(1);
		const element = container.children[0];
		expect(Array.from(element.children, (aChild) => aChild.textContent)).toEqual(["0-true-false-2", "2-false-false-2", "4-false-true-2"]);
	});

	it("renders no item when jstl-foreach-count is undefined", async () => {
		const container = document.createElement("div");
		const template = await Template.load(`
			<div jstl-foreach-count="\${data}" jstl-foreach-var="item" jstl-foreach-status="status">
				<div>\${item}-\${status.index}</div>
			</div>`);

		await Renderer.render({ container, template, data: {} });

		expect(container.children).toHaveLength(1);
		expect(container.children[0].children).toHaveLength(0);
	});
});
