import { describe, it, expect } from "vitest";
import { server } from "vitest/browser";
import { Renderer, Template } from "../../../index.js";

class ExtDivTestElement extends HTMLDivElement {}

customElements.define("test-div", ExtDivTestElement, { extends: "div" });

describe("rendering an element", () => {
	it("renders an element of the tag of the template", async () => {
		const container = document.createElement("div");
		const template = await Template.load(`<div></div>`);

		await Renderer.render({ container, template });

		expect(container.children).toHaveLength(1);
		expect(container.children[0].tagName).toBe("DIV");
	});

	it("renders an HTMLTemplateElement with its content", async () => {
		const container = document.createElement("div");
		const template = await Template.load(`<div><template><div></div></template></div>`);

		await Renderer.render({ container, template });

		expect(container.children).toHaveLength(1);
		const element = container.children[0];
		expect(element.children).toHaveLength(1);
		const inner = element.children[0];
		expect(inner).toBeInstanceOf(HTMLTemplateElement);
		expect(inner.content).toBeInstanceOf(DocumentFragment);
		expect(Array.from(inner.content.children, (aChild) => aChild.tagName)).toEqual(["DIV"]);
	});

	it("renders the expressions in the content of an HTMLTemplateElement", async () => {
		const container = document.createElement("div");
		const template = await Template.load(`
			<div>
				<template id="template-test-id">
					<div>\${text}</div>
				</template>
			</div>`);

		await Renderer.render({ container, template, data: { text: "test" } });

		expect(container.children).toHaveLength(1);
		const element = container.children[0];
		expect(element.tagName).toBe("DIV");
		expect(element.children).toHaveLength(1);
		const inner = element.children[0];
		expect(inner.tagName).toBe("TEMPLATE");
		expect(inner.getAttribute("id")).toBe("template-test-id");
		expect(inner.content.children).toHaveLength(1);
		expect(inner.content.children[0].tagName).toBe("DIV");
		expect(inner.content.children[0].textContent).toBe("test");
	});

	it("runs the directives in the content of an HTMLTemplateElement", async () => {
		const container = document.createElement("div");
		const template = await Template.load(`<template><p>\${text}</p><b jstl-if="\${false}"></b></template>`);

		await Renderer.render({ container, template, data: { text: "test" } });

		expect(container.children).toHaveLength(1);
		const inner = container.children[0];
		expect(inner).toBeInstanceOf(HTMLTemplateElement);
		expect(Array.from(inner.content.children, (aChild) => aChild.tagName)).toEqual(["P"]);
		expect(inner.content.children[0].textContent).toBe("test");
	});

	it("renders a comment", async () => {
		const container = document.createElement("div");
		const template = await Template.load(`<div><!-- test --></div>`);

		await Renderer.render({ container, template });

		expect(container.children).toHaveLength(1);
		const element = container.children[0];
		expect(element.childNodes).toHaveLength(1);
		expect(element.childNodes[0]).toBeInstanceOf(Comment);
		expect(element.childNodes[0].data).toBe(" test ");
	});
});

describe("jstl-tagname", () => {
	it.each([
		{ source: "div", template: `<div jstl-tagname="span" test-attr="attr"><span></span><span></span><span></span></div>`, data: {} },
		{ source: "jstl", template: `<jstl jstl-tagname="span" test-attr="attr"><span></span><span></span><span></span></jstl>`, data: {} },
		{ source: "an expression", template: `<jstl jstl-tagname="\${tagname}" test-attr="attr"><span></span><span></span><span></span></jstl>`, data: { tagname: "span" } },
		{ source: "an expression awaiting an async function", template: `<jstl jstl-tagname="\${await tagname()}" test-attr="attr"><span></span><span></span><span></span></jstl>`, data: { tagname: async () => "span" } }
	])("renders the element as span, given by $source", async ({ template: source, data }) => {
		const container = document.createElement("div");
		const template = await Template.load(source);

		await Renderer.render({ container, template, data });

		expect(container.children).toHaveLength(1);
		const element = container.children[0];
		expect(element).toBeInstanceOf(HTMLSpanElement);
		expect(element.getAttribute("test-attr")).toBe("attr");
		expect(Array.from(element.children, (aChild) => aChild.tagName)).toEqual(["SPAN", "SPAN", "SPAN"]);
	});
});

describe("jstl-ignore", () => {
	it("includes the element and its children unprocessed", async () => {
		const container = document.createElement("div");
		const template = await Template.load(`<div>\${text1}<div jstl-ignore title="\${text2}">\${text2}<span jstl-if="\${false}"></span></div></div>`);

		await Renderer.render({ container, template, data: { text1: "some text", text2: "another text" } });

		expect(container.children).toHaveLength(1);
		const element = container.children[0];
		expect(element.childNodes[0].textContent).toBe("some text");
		expect(element.children).toHaveLength(1);
		const ignored = element.children[0];
		expect(Array.from(ignored.attributes, ({ name, value }) => [name, value])).toEqual([["title", "${text2}"]]);
		expect(ignored.childNodes[0].textContent).toBe("${text2}");
		expect(Array.from(ignored.children, (aChild) => aChild.tagName)).toEqual(["SPAN"]);
		expect(ignored.children[0].getAttribute("jstl-if")).toBe("${false}");
	});
});

describe("jstl-ignore-childs", () => {
	it("renders the attributes of the element and includes its children unprocessed", async () => {
		const container = document.createElement("div");
		const template = await Template.load(`<div jstl-ignore-childs title="\${text}">\${text}<span jstl-if="\${false}">\${text}</span></div>`);

		await Renderer.render({ container, template, data: { text: "test" } });

		expect(container.children).toHaveLength(1);
		const element = container.children[0];
		expect(element.getAttribute("title")).toBe("test");
		expect(element.hasAttribute("jstl-ignore-childs")).toBe(false);
		expect(element.childNodes[0].textContent).toBe("${text}");
		expect(Array.from(element.children, (aChild) => aChild.tagName)).toEqual(["SPAN"]);
		expect(element.children[0].getAttribute("jstl-if")).toBe("${false}");
		expect(element.children[0].textContent).toBe("${text}");
	});
});

describe("is", () => {
	it.skipIf(server.browser === "webkit").each([
		{ kind: "an expression", attribute: "${name}", data: { name: "test-div" } },
		{ kind: "an expression awaiting an async function", attribute: "${await name()}", data: { name: async () => "test-div" } }
	])("renders the customized built-in element named by $kind", async ({ attribute, data }) => {
		const container = document.createElement("div");
		const template = await Template.load(`<div is="${attribute}"></div>`);

		await Renderer.render({ container, template, data });

		expect(container.children).toHaveLength(1);
		const element = container.children[0];
		expect(element).toBeInstanceOf(ExtDivTestElement);
		expect(element.getAttribute("is")).toBe("test-div");
	});

	it.skipIf(server.browser === "webkit")("renders the customized built-in element", async () => {
		const container = document.createElement("div");
		const template = await Template.load(`<div is="test-div" test="test"></div>`);

		await Renderer.render({ container, template });

		expect(container.children).toHaveLength(1);
		const element = container.children[0];
		expect(element).toBeInstanceOf(ExtDivTestElement);
		expect(element.getAttribute("is")).toBe("test-div");
	});

	// Safari does not support customized built-in elements: the element stays what its tag names
	it.runIf(server.browser === "webkit")("has no effect in WebKit", async () => {
		const container = document.createElement("div");
		const template = await Template.load(`<div is="test-div" test="test"></div>`);

		await Renderer.render({ container, template });

		expect(container.children).toHaveLength(1);
		const element = container.children[0];
		expect(element).not.toBeInstanceOf(ExtDivTestElement);
		expect(element.constructor).toBe(HTMLDivElement);
		expect(element.getAttribute("is")).toBe("test-div");
	});
});
