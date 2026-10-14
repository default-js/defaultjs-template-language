import { describe, it, expect, onTestFinished } from "vitest";
import { Renderer, Template } from "../../../index.js";

describe("jstl-attach-element", () => {
	it.each([
		{ mode: "by default", attribute: "" },
		{ mode: "in mode replace", attribute: ` jstl-attach-element-mode="replace"` }
	])("replaces the content by the element $mode", async ({ attribute }) => {
		const container = document.createElement("div");
		const span = document.createElement("span");
		const template = await Template.load(`<div jstl-attach-element="\${element}"${attribute}><div></div></div>`);

		await Renderer.render({ container, template, data: { element: span } });

		expect(container.children).toHaveLength(1);
		const element = container.children[0];
		expect(element.children).toHaveLength(1);
		expect(element.children[0]).toBe(span);
	});

	it("attaches the element an expression awaiting an async function results in", async () => {
		const container = document.createElement("div");
		const span = document.createElement("span");
		const template = await Template.load(`<div jstl-attach-element="\${await element()}"></div>`);

		await Renderer.render({ container, template, data: { element: async () => span } });

		expect(container.children).toHaveLength(1);
		const element = container.children[0];
		expect(element.children).toHaveLength(1);
		expect(element.children[0]).toBe(span);
	});

	it("appends the element in mode append", async () => {
		const container = document.createElement("div");
		const span = document.createElement("span");
		const template = await Template.load(`<div jstl-attach-element="\${element}" jstl-attach-element-mode="append"><p></p></div>`);

		await Renderer.render({ container, template, data: { element: span } });

		expect(container.children).toHaveLength(1);
		const element = container.children[0];
		expect(element.children).toHaveLength(2);
		expect(element.children[0].tagName).toBe("P");
		expect(element.children[1]).toBe(span);
	});

	it("prepends the element in mode prepend", async () => {
		const container = document.createElement("div");
		const span = document.createElement("span");
		const template = await Template.load(`<div jstl-attach-element="\${element}" jstl-attach-element-mode="prepend"><p></p></div>`);

		await Renderer.render({ container, template, data: { element: span } });

		expect(container.children).toHaveLength(1);
		const element = container.children[0];
		expect(element.children).toHaveLength(2);
		expect(element.children[0]).toBe(span);
		expect(element.children[1].tagName).toBe("P");
	});

	it.each([
		{ kind: "a selector", attribute: "#attach-element-test-by-selector", data: {} },
		{ kind: "an expression resolving to a selector", attribute: "${selector}", data: { selector: "#attach-element-test-by-selector" } }
	])("attaches the element of the document found by $kind", async ({ attribute, data }) => {
		const span = document.createElement("span");
		span.id = "attach-element-test-by-selector";
		document.body.append(span);
		onTestFinished(() => span.remove());
		const container = document.createElement("div");
		const template = await Template.load(`<div jstl-attach-element="${attribute}"></div>`);

		await Renderer.render({ container, template, data });

		expect(container.children).toHaveLength(1);
		const element = container.children[0];
		expect(element.children).toHaveLength(1);
		expect(element.children[0]).toBe(span);
	});
});
