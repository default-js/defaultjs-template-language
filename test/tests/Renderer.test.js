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

	it("renders sibling elements in their order", async () => {
		const container = document.createElement("div");
		const template = await Template.load(`<div></div><span></span><p></p><a></a><b></b>`);

		await Renderer.render({ container, template });

		expect(Array.from(container.children, (anElement) => anElement.tagName)).toEqual(["DIV", "SPAN", "P", "A", "B"]);
	});

	it("renders the children of an element", async () => {
		const container = document.createElement("div");
		const template = await Template.load(`
			<div>
				<div></div>
				<span></span>
				<p></p>
			</div>`);

		await Renderer.render({ container, template });

		expect(container.children).toHaveLength(1);
		const element = container.children[0];
		expect(element.tagName).toBe("DIV");
		expect(Array.from(element.children, (aChild) => aChild.tagName)).toEqual(["DIV", "SPAN", "P"]);
	});

	it("renders elements nested 101 levels deep", async () => {
		const container = document.createElement("div");
		const chain = "<div>".repeat(101) + "</div>".repeat(101);
		const template = await Template.load(chain.repeat(4));

		await Renderer.render({ container, template });

		expect(container.children).toHaveLength(4);
		for (const root of container.children) {
			let element = root;
			for (let depth = 1; depth < 101; depth++) {
				expect(element.children).toHaveLength(1);
				element = element.children[0];
			}
			expect(element.children).toHaveLength(0);
		}
	});
});

describe("render(option).mode", () => {
	it("replaces the content of the container by default", async () => {
		const container = document.createElement("div");
		const option = { container, data: {}, template: `<div></div>` };

		await (await Renderer.build({ template: `<div></div>` })).render(option);
		expect(container.children).toHaveLength(1);

		await (await Renderer.build()).render(option);
		expect(container.children).toHaveLength(1);
	});

	it("replace replaces the content of the container", async () => {
		const container = document.createElement("div");
		const option = { container, data: {}, template: `<div></div>`, mode: "replace" };

		await new Renderer().render(option);
		expect(container.children).toHaveLength(1);

		await new Renderer().render(option);
		expect(container.children).toHaveLength(1);
	});

	it("replace with a target replaces the target", async () => {
		const container = document.createElement("div");
		container.innerHTML = `<a></a>`;
		const target = container.children[0];

		await new Renderer().render({ container, data: {}, template: `<div></div>`, mode: "replace", target });

		expect(container.children).toHaveLength(1);
		expect(container.children[0].tagName).toBe("DIV");
	});
});

describe("Tag jstl", () => {
	it("is replaced by its content", async () => {
		const container = document.createElement("div");
		const template = await Template.load(`<jstl><div></div></jstl>`);

		await Renderer.render({ container, template });

		expect(container.children).toHaveLength(1);
		expect(container.children[0].tagName).toBe("DIV");
	});

	it.each([
		{ render: false, tagNames: [] },
		{ render: true, tagNames: ["DIV"] }
	])("with jstl-if evaluating to $render renders $tagNames", async ({ render, tagNames }) => {
		const container = document.createElement("div");
		const template = await Template.load(`<jstl jstl-if="\${render}"><div></div></jstl>`);

		await Renderer.render({ container, template, data: { render } });

		expect(Array.from(container.children, (anElement) => anElement.tagName)).toEqual(tagNames);
	});
});
