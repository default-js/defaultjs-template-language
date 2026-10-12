import { describe, it, expect } from "vitest";
import { Renderer, Template } from "../../../index.js";

const INCLUDE_URL = "/templates/directives/Include/LoadFromURL.tpl.html";

describe("jstl-include", () => {
	it("renders the template loaded from a URL as content of the element", async () => {
		const container = document.createElement("div");
		const template = await Template.load(`<div jstl-include="${INCLUDE_URL}"></div>`);

		await Renderer.render({ container, template });

		expect(container.children).toHaveLength(1);
		expect(Array.from(container.children[0].children, (aChild) => aChild.tagName)).toEqual(["DIV", "DIV", "DIV", "DIV", "DIV"]);
	});

	it("renders the template after jstl-if evaluated to true", async () => {
		const container = document.createElement("div");
		const template = await Template.load(`<div jstl-if="\${include}" jstl-include="${INCLUDE_URL}"></div>`);

		await Renderer.render({ container, template, data: { include: true } });

		expect(container.children).toHaveLength(1);
		expect(Array.from(container.children[0].children, (aChild) => aChild.tagName)).toEqual(["DIV", "DIV", "DIV", "DIV", "DIV"]);
	});

	it("renders the template in place of a jstl tag after jstl-if evaluated to true", async () => {
		const container = document.createElement("div");
		const template = await Template.load(`<jstl jstl-if="\${include}" jstl-include="${INCLUDE_URL}"></jstl>`);

		await Renderer.render({ container, template, data: { include: true } });

		expect(Array.from(container.children, (anElement) => anElement.tagName)).toEqual(["DIV", "DIV", "DIV", "DIV", "DIV"]);
	});
});
