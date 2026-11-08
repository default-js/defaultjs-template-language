import { describe, it, expect, vi } from "vitest";
import { Renderer, Template } from "../../../index.js";

describe("jstl-if", () => {
	it("evaluating to true renders the element", async () => {
		const container = document.createElement("div");
		const template = await Template.load(`<div jstl-if="\${render}"></div>`);

		await Renderer.render({ container, template, data: { render: true } });

		expect(Array.from(container.children, (anElement) => anElement.tagName)).toEqual(["DIV"]);
	});

	it("evaluating to false renders nothing", async () => {
		const container = document.createElement("div");
		const template = await Template.load(`<div jstl-if="\${render}"></div>`);

		await Renderer.render({ container, template, data: { render: false } });

		expect(Array.from(container.children, (anElement) => anElement.tagName)).toEqual([]);
	});

	it("awaiting an async function resolving to true renders the element", async () => {
		const container = document.createElement("div");
		const template = await Template.load(`<div jstl-if="\${await check()}"></div>`);

		await Renderer.render({ container, template, data: { check: async () => true } });

		expect(Array.from(container.children, (anElement) => anElement.tagName)).toEqual(["DIV"]);
	});

	it("awaiting an async function resolving to false renders nothing", async () => {
		const container = document.createElement("div");
		const template = await Template.load(`<div jstl-if="\${await check()}"></div>`);

		await Renderer.render({ container, template, data: { check: async () => false } });

		expect(Array.from(container.children, (anElement) => anElement.tagName)).toEqual([]);
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
