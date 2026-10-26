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

	it("rejects a template that is not a Template", async () => {
		const container = document.createElement("div");

		await expect(Renderer.render({ container, template: `<p></p>` })).rejects.toBeInstanceOf(Error);
	});
});

describe("new Renderer", () => {
	it("renders its template when render gets none", async () => {
		const container = document.createElement("div");
		const renderer = new Renderer({ template: await Template.load(`<p></p>`) });

		await renderer.render({ container });

		expect(Array.from(container.children, (anElement) => anElement.tagName)).toEqual(["P"]);
	});

	it("makes its data available to every rendering", async () => {
		const first = document.createElement("div");
		const second = document.createElement("div");
		const renderer = new Renderer({ template: await Template.load(`<p>\${text}</p>`), data: { text: "base" } });

		await renderer.render({ container: first });
		await renderer.render({ container: second });

		expect(Array.from(first.children, (anElement) => anElement.textContent)).toEqual(["base"]);
		expect(Array.from(second.children, (anElement) => anElement.textContent)).toEqual(["base"]);
	});

	it.each([
		{ type: "string", template: () => `<p></p>` },
		{ type: "HTMLTemplateElement", template: () => document.createElement("template") }
	])("throws an Error for a template given as $type", ({ template }) => {
		expect(() => new Renderer({ template: template() })).toThrow(Error);
	});
});

describe("Renderer.build", () => {
	it("loads its template from a promise", async () => {
		const container = document.createElement("div");
		const renderer = await Renderer.build({ template: Promise.resolve(`<p></p>`) });

		await renderer.render({ container });

		expect(Array.from(container.children, (anElement) => anElement.tagName)).toEqual(["P"]);
	});

	it("makes its data available to every rendering", async () => {
		const container = document.createElement("div");
		const renderer = await Renderer.build({ template: `<p>\${text}</p>`, data: { text: "base" } });

		await renderer.render({ container });

		expect(Array.from(container.children, (anElement) => anElement.textContent)).toEqual(["base"]);
	});
});

describe("render(option)", () => {
	it("hides a name of the base data by the same name in its data", async () => {
		const container = document.createElement("div");
		const renderer = new Renderer({ data: { text: "base", other: "other" } });

		await renderer.render({ container, template: `<p>\${text}-\${other}</p>`, data: { text: "rendering" } });

		expect(Array.from(container.children, (anElement) => anElement.textContent)).toEqual(["rendering-other"]);
	});

	it("rejects without a template, neither in the option nor at the renderer", async () => {
		const container = document.createElement("div");

		await expect(new Renderer().render({ container })).rejects.toBeInstanceOf(Error);
	});

	it("rejects a mode that is none of replace, append, prepend and none", async () => {
		const container = document.createElement("div");

		await expect(new Renderer().render({ container, template: `<p></p>`, mode: "insert" })).rejects.toBeInstanceOf(Error);
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

	it.each([
		{ mode: "append", tagNames: ["A", "DIV"] },
		{ mode: "prepend", tagNames: ["DIV", "A"] }
	])("$mode without a target renders the result into the container as $tagNames", async ({ mode, tagNames }) => {
		const container = document.createElement("div");
		container.innerHTML = `<a></a>`;

		await new Renderer().render({ container, template: `<div><p>x</p></div>`, mode });

		expect(Array.from(container.children, (anElement) => anElement.tagName)).toEqual(tagNames);
		const element = container.children[tagNames.indexOf("DIV")];
		expect(Array.from(element.children, (aChild) => aChild.textContent)).toEqual(["x"]);
	});

	// defect: B48
	it.fails.each([
		{ mode: "replace", tagNames: ["DIV", "I"] },
		{ mode: "append", tagNames: ["SPAN", "DIV", "I"] },
		{ mode: "prepend", tagNames: ["DIV", "SPAN", "I"] }
	])("$mode with a target renders an element with its children as $tagNames", async ({ mode, tagNames }) => {
		const container = document.createElement("div");
		container.innerHTML = `<span></span><i></i>`;
		const target = container.children[0];

		await new Renderer().render({ container, template: `<div><p>x</p></div>`, mode, target });

		expect(Array.from(container.children, (anElement) => anElement.tagName)).toEqual(tagNames);
		const element = container.children[tagNames.indexOf("DIV")];
		expect(Array.from(element.children, (aChild) => aChild.textContent)).toEqual(["x"]);
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

	it("is replaced by its text and its elements", async () => {
		const container = document.createElement("div");
		const template = await Template.load(`<div><jstl>\${text1}<div>\${text2}</div></jstl></div>`);

		await Renderer.render({ container, template, data: { text1: "some text", text2: "another text" } });

		expect(container.children).toHaveLength(1);
		const element = container.children[0];
		expect(element.textContent).toBe("some textanother text");
		expect(Array.from(element.children, (aChild) => aChild.textContent)).toEqual(["another text"]);
	});

	it("is replaced by the content of every item with jstl-foreach", async () => {
		const container = document.createElement("div");
		const template = await Template.load(`<div><jstl jstl-foreach="\${array}" jstl-foreach-var="item"><div>\${item.text}</div></jstl></div>`);

		await Renderer.render({ container, template, data: { array: [{ text: "text 1" }, { text: "text 2" }, { text: "text 3" }] } });

		expect(container.children).toHaveLength(1);
		const element = container.children[0];
		expect(Array.from(element.children, (aChild) => aChild.textContent)).toEqual(["text 1", "text 2", "text 3"]);
	});

	it("is replaced by its content with the data of jstl-data", async () => {
		const container = document.createElement("div");
		const template = await Template.load(`<div><jstl jstl-data="\${ text1 + ', ' + text2 }" jstl-data-mode="set" jstl-data-var="result">\${result}</jstl></div>`);

		await Renderer.render({ container, template, data: { text1: "some text", text2: "another text" } });

		expect(container.children).toHaveLength(1);
		const element = container.children[0];
		expect(element.children).toHaveLength(0);
		expect(element.textContent).toBe("some text, another text");
	});

	it("leaves nothing without content", async () => {
		const container = document.createElement("div");
		const template = await Template.load(`<div><jstl></jstl></div>`);

		await Renderer.render({ container, template });

		expect(container.children).toHaveLength(1);
		expect(container.children[0].childNodes).toHaveLength(0);
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
