import { describe, it, expect } from "vitest";
import { Renderer, Template } from "../../../index.js";

const UNSECURE = `<script></script><html></html><head></head><object></object><style></style><link></link>`;
const UNSECURE_SELECTOR = "script, style, body, html, head, object, link";

describe("text content", () => {
	it("renders plain text", async () => {
		const container = document.createElement("div");
		const template = await Template.load(`<div>test text</div>`);

		await Renderer.render({ container, template });

		expect(container.children).toHaveLength(1);
		expect(container.children[0].textContent).toBe("test text");
	});

	it("renders the expressions in a text", async () => {
		const container = document.createElement("div");
		const template = await Template.load(`<div>test text \${dynamic} content</div>`);

		await Renderer.render({ container, template, data: { dynamic: "dynamic" } });

		expect(container.children).toHaveLength(1);
		expect(container.children[0].textContent).toBe("test text dynamic content");
	});

	it("leaves the text unrendered with jstl-text-ignore", async () => {
		const container = document.createElement("div");
		const template = await Template.load(`<div jstl-text-ignore>test text \${dynamic} content</div>`);

		await Renderer.render({ container, template, data: { dynamic: "dynamic" } });

		expect(container.children).toHaveLength(1);
		expect(container.children[0].textContent).toBe("test text ${dynamic} content");
	});

	it("trims a text to jstl-text-trim-length, the ellipsis included", async () => {
		const container = document.createElement("div");
		const template = await Template.load(`<div jstl-text-trim-length="\${length}">\${longText}</div>`);

		await Renderer.render({ container, template, data: { longText: "this is an long\nlong\nlong\ntext", length: 15 } });

		expect(container.children).toHaveLength(1);
		expect(container.children[0].textContent).toBe("this is an l...");
	});

	it("renders html as text without its tags", async () => {
		const container = document.createElement("div");
		const template = await Template.load(`<div>\${html}</div>`);
		const html = `<b>hello world</b><script type="application/javascript">alert("unsecure")</script>`;

		await Renderer.render({ container, template, data: { html } });

		expect(container.children).toHaveLength(1);
		const element = container.children[0];
		expect(element.children).toHaveLength(0);
		expect(element.textContent).toBe(`hello worldalert("unsecure")`);
	});
});

describe("jstl-text-content-type html", () => {
	it("renders the text as html", async () => {
		const container = document.createElement("div");
		const template = await Template.load(`<div jstl-text-content-type="html">\${content}</div>`);

		await Renderer.render({ container, template, data: { content: "<div></div>" } });

		expect(container.children).toHaveLength(1);
		expect(Array.from(container.children[0].children, (aChild) => aChild.tagName)).toEqual(["DIV"]);
	});

	it("renders html between text", async () => {
		const container = document.createElement("div");
		const template = await Template.load(`<div jstl-text-content-type="html">text \${content} test</div>`);

		await Renderer.render({ container, template, data: { content: "<div></div>" } });

		expect(container.children).toHaveLength(1);
		const element = container.children[0];
		expect(element.childNodes).toHaveLength(3);
		expect(element.childNodes[0]).toBeInstanceOf(Text);
		expect(element.childNodes[0].textContent).toBe("text ");
		expect(element.childNodes[1]).toBeInstanceOf(HTMLDivElement);
		expect(element.childNodes[2]).toBeInstanceOf(Text);
		expect(element.childNodes[2].textContent).toBe(" test");
	});

	it("does not resolve the expressions in the html", async () => {
		const container = document.createElement("div");
		const template = await Template.load(`<div jstl-text-content-type="html">\${content}</div>`);

		await Renderer.render({ container, template, data: { content: "<div>${fail}</div>", fail: "fail" } });

		expect(container.children).toHaveLength(1);
		const element = container.children[0];
		expect(element.children).toHaveLength(1);
		expect(element.children[0].textContent).toBe("${fail}");
	});

	it("removes the tags script, style, body, html, head, object and link", async () => {
		const container = document.createElement("div");
		const template = await Template.load(`<div jstl-text-content-type="html">\${content}</div>`);

		await Renderer.render({ container, template, data: { content: `${UNSECURE}<div>${UNSECURE}</div>` } });

		expect(container.children).toHaveLength(1);
		const element = container.children[0];
		expect(element.find(UNSECURE_SELECTOR)).toHaveLength(0);
		expect(Array.from(element.children, (aChild) => aChild.tagName)).toEqual(["DIV"]);
		expect(element.children[0].children).toHaveLength(0);
	});

	it("keeps those tags with jstl-text-unsecure", async () => {
		const container = document.createElement("div");
		const template = await Template.load(`<div jstl-text-content-type="html" jstl-text-unsecure>\${content}</div>`);

		await Renderer.render({ container, template, data: { content: `${UNSECURE}<div>${UNSECURE}</div>` } });

		expect(container.children).toHaveLength(1);
		const element = container.children[0];
		expect(Array.from(element.children, (aChild) => aChild.tagName)).toEqual(["SCRIPT", "OBJECT", "STYLE", "LINK", "DIV"]);
		expect(Array.from(element.children[4].children, (aChild) => aChild.tagName)).toEqual(["SCRIPT", "OBJECT", "STYLE", "LINK"]);
	});
});
