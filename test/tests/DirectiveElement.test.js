import { describe, it, expect, vi } from "vitest";
import { Renderer, Template, DirectiveElement } from "../../index.js";

class SectionTag extends DirectiveElement {
	async execute(aContext) {
		aContext.content = document.createElement("section");
		return aContext;
	}
}

class PrefilledTag extends DirectiveElement {
	async execute(aContext) {
		const section = document.createElement("section");
		section.append(document.createElement("h2"));
		aContext.content = section;
		return aContext;
	}
}

class IgnoringTag extends DirectiveElement {
	async execute(aContext) {
		aContext.content = document.createElement("section");
		aContext.ignore = true;
		return aContext;
	}
}

class ArrayTag extends DirectiveElement {
	async execute(aContext) {
		aContext.content = [document.createElement("section"), document.createElement("aside")];
		return aContext;
	}
}

class EmptyTag extends DirectiveElement {
	async execute(aContext) {
		return aContext;
	}
}

class PlainTag extends DirectiveElement {}

const executed = vi.fn();

class RecordingTag extends DirectiveElement {
	async execute(aContext) {
		executed(this);
		return aContext;
	}
}

const received = vi.fn();

class ArgumentsTag extends DirectiveElement {
	async execute(aContext, aTemplate, aRenderer) {
		received(aContext, aTemplate, aRenderer);
		return aContext;
	}
}

const counted = vi.fn();

class CountedTag extends DirectiveElement {
	async execute(aContext) {
		counted(this);
		return aContext;
	}
}

class Card extends DirectiveElement {
	async execute(aContext) {
		const section = document.createElement("section");
		const title = document.createElement("h2");
		title.textContent = await aContext.resolver.resolveText(this.getAttribute("title"));
		section.append(title);
		aContext.content = section;
		return aContext;
	}
}

customElements.define("test-section", SectionTag);
customElements.define("test-prefilled", PrefilledTag);
customElements.define("test-ignoring", IgnoringTag);
customElements.define("test-array", ArrayTag);
customElements.define("test-empty", EmptyTag);
customElements.define("test-plain", PlainTag);
customElements.define("test-recording", RecordingTag);
customElements.define("test-arguments", ArgumentsTag);
customElements.define("test-counted", CountedTag);
customElements.define("test-card", Card);

describe("directive element", () => {
	it("puts the content execute delivers in place of the tag", async () => {
		const container = document.createElement("div");
		const template = await Template.load(`<div><test-section></test-section></div>`);

		await Renderer.render({ container, template });

		expect(container.children).toHaveLength(1);
		const element = container.children[0];
		expect(element.children).toHaveLength(1);
		expect(element.children[0].tagName).toBe("SECTION");
	});

	it("renders the children of the tag into the content", async () => {
		const container = document.createElement("div");
		const template = await Template.load(`<test-section><p>\${text}</p></test-section>`);

		await Renderer.render({ container, template, data: { text: "some text" } });

		expect(container.children).toHaveLength(1);
		const section = container.children[0];
		expect(section.tagName).toBe("SECTION");
		expect(section.children).toHaveLength(1);
		expect(section.children[0].tagName).toBe("P");
		expect(section.children[0].textContent).toBe("some text");
	});

	it("renders the children after what the content already holds", async () => {
		const container = document.createElement("div");
		const template = await Template.load(`<test-prefilled><p></p></test-prefilled>`);

		await Renderer.render({ container, template });

		expect(container.children).toHaveLength(1);
		const section = container.children[0];
		expect(section.tagName).toBe("SECTION");
		expect(Array.from(section.children, (aChild) => aChild.tagName)).toEqual(["H2", "P"]);
	});

	it("does not render the children when execute sets ignore", async () => {
		const container = document.createElement("div");
		const template = await Template.load(`<test-ignoring><p></p></test-ignoring>`);

		await Renderer.render({ container, template });

		expect(container.children).toHaveLength(1);
		const section = container.children[0];
		expect(section.tagName).toBe("SECTION");
		expect(section.childNodes).toHaveLength(0);
	});

	it("puts an array of nodes execute delivers in place of the tag", async () => {
		const container = document.createElement("div");
		const template = await Template.load(`<div><test-array></test-array><i></i></div>`);

		await Renderer.render({ container, template });

		expect(container.children).toHaveLength(1);
		const element = container.children[0];
		expect(Array.from(element.children, (aChild) => aChild.tagName)).toEqual(["SECTION", "ASIDE", "I"]);
	});

	// The result alone does not show how the children are left out: rendered into an array, they
	// fail with a TypeError that renderNode logs, and leave the same result.
	it("renders no children of the tag into an array of nodes", async () => {
		const container = document.createElement("div");
		const template = await Template.load(`<div><test-array><b></b></test-array></div>`);

		await Renderer.render({ container, template });

		expect(container.children).toHaveLength(1);
		const element = container.children[0];
		expect(Array.from(element.children, (aChild) => aChild.tagName)).toEqual(["SECTION", "ASIDE"]);
		expect(element.querySelectorAll("b")).toHaveLength(0);
	});

	it("leaves nothing in the result when execute delivers no content", async () => {
		const container = document.createElement("div");
		const template = await Template.load(`<div><test-empty><p>text</p></test-empty></div>`);

		await Renderer.render({ container, template });

		expect(container.children).toHaveLength(1);
		expect(container.children[0].childNodes).toHaveLength(0);
	});

	it("calls execute on an element of its class with the attributes of the tag and no children", async () => {
		const container = document.createElement("div");
		const template = await Template.load(`<test-recording title="\${name}"><p></p></test-recording>`);

		await Renderer.render({ container, template, data: { name: "Card" } });

		expect(executed).toHaveBeenCalledOnce();
		const element = executed.mock.calls[0][0];
		expect(element).toBeInstanceOf(RecordingTag);
		expect(element.getAttribute("title")).toBe("${name}");
		expect(element.childNodes).toHaveLength(0);
	});

	it("hands execute the tag of the template and the renderer", async () => {
		const container = document.createElement("div");
		const template = await Template.load(`<test-arguments><p></p></test-arguments>`);

		await Renderer.render({ container, template });

		expect(received).toHaveBeenCalledOnce();
		const [context, tag, renderer] = received.mock.calls[0];
		expect(tag).toBe(context.template);
		expect(tag.localName).toBe("test-arguments");
		expect(tag.children).toHaveLength(1);
		expect(renderer).toBeInstanceOf(Renderer);
	});

	it("runs no directive on the tag", async () => {
		const container = document.createElement("div");
		const template = await Template.load(`<div><test-section jstl-if="\${false}"></test-section></div>`);

		await Renderer.render({ container, template });

		expect(container.children).toHaveLength(1);
		const element = container.children[0];
		expect(element.children).toHaveLength(1);
		expect(element.children[0].tagName).toBe("SECTION");
	});

	it("creates an element for each occurrence of the tag", async () => {
		const container = document.createElement("div");
		const template = await Template.load(`<div><test-counted></test-counted><test-counted></test-counted></div>`);

		await Renderer.render({ container, template });

		expect(counted).toHaveBeenCalledTimes(2);
		expect(counted.mock.calls[1][0]).not.toBe(counted.mock.calls[0][0]);
	});

	it("resolves an attribute of the tag through the resolver of the context", async () => {
		const container = document.createElement("div");
		const template = await Template.load(`<test-card title="\${name}"><p>\${text}</p></test-card>`);

		await Renderer.render({ container, template, data: { name: "Card", text: "some text" } });

		expect(container.children).toHaveLength(1);
		const section = container.children[0];
		expect(section.tagName).toBe("SECTION");
		expect(section.children).toHaveLength(2);
		expect(section.children[0].tagName).toBe("H2");
		expect(section.children[0].textContent).toBe("Card");
		expect(section.children[1].tagName).toBe("P");
		expect(section.children[1].textContent).toBe("some text");
	});
});

describe("new DirectiveElement", () => {
	it("creates an element that is not hidden", () => {
		expect(new SectionTag().hidden).toBe(false);
	});
});

describe("DirectiveElement.execute", () => {
	it("rejects with an Error when the class does not implement it", async () => {
		const error = await new PlainTag().execute().catch((anError) => anError);

		expect(error.constructor).toBe(Error);
	});
});
