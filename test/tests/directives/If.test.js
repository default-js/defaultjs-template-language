import { describe, it, expect, vi } from "vitest";
import { Renderer, Template } from "../../../index.js";

describe("jstl-if", () => {
	it.each([
		{ render: true, tagNames: ["DIV"] },
		{ render: false, tagNames: [] }
	])("evaluating to $render renders $tagNames", async ({ render, tagNames }) => {
		const container = document.createElement("div");
		const template = await Template.load(`<div jstl-if="\${render}"></div>`);

		await Renderer.render({ container, template, data: { render } });

		expect(Array.from(container.children, (anElement) => anElement.tagName)).toEqual(tagNames);
	});

	it.each([
		{ render: true, tagNames: ["DIV"] },
		{ render: false, tagNames: [] }
	])("awaiting an async function resolving to $render renders $tagNames", async ({ render, tagNames }) => {
		const container = document.createElement("div");
		const template = await Template.load(`<div jstl-if="\${await check()}"></div>`);

		await Renderer.render({ container, template, data: { check: async () => render } });

		expect(Array.from(container.children, (anElement) => anElement.tagName)).toEqual(tagNames);
	});

	it("evaluating to false executes no other directive of the element", async () => {
		const container = document.createElement("div");
		const template = await Template.load(`<div jstl-if="\${render}" attr="\${executed()}"></div>`);
		const executed = vi.fn();

		await Renderer.render({ container, template, data: { render: false, executed } });

		expect(container.children).toHaveLength(0);
		expect(executed).not.toHaveBeenCalled();
	});

	it("evaluating to false renders none of the children", async () => {
		const container = document.createElement("div");
		const template = await Template.load(`<div jstl-if="\${render}"><div>\${executed()}</div></div>`);
		const executed = vi.fn();

		await Renderer.render({ container, template, data: { render: false, executed } });

		expect(container.children).toHaveLength(0);
		expect(executed).not.toHaveBeenCalled();
	});
});
