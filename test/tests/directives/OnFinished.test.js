import { describe, it, expect, vi } from "vitest";
import { Renderer, Template } from "../../../index.js";

describe("jstl-on-finished", () => {
	it("resolves its expression once the rendering is finished", async () => {
		const container = document.createElement("div");
		const template = await Template.load(`<div jstl-on-finished="\${finished()}"></div>`);
		const finished = vi.fn();

		await Renderer.render({ container, template, data: { finished } });

		expect(finished).toHaveBeenCalledOnce();
		expect(container.children).toHaveLength(1);
	});

	it("knows $element, $root and $template, with the rest of the rendering done", async () => {
		const container = document.createElement("div");
		const template = await Template.load(`<div jstl-on-finished="\${finished($element, $root, $template)}"></div><p>\${text}</p>`);
		const finished = vi.fn(() => container.children[1].textContent);

		await Renderer.render({ container, template, data: { finished, text: "rendered" } });

		expect(finished).toHaveBeenCalledOnce();
		const [element, root, origin] = finished.mock.calls[0];
		expect(element).toBe(container.children[0]);
		expect(root).toBe(container);
		expect(origin).not.toBe(element);
		expect(origin.getAttribute("jstl-on-finished")).toBe("${finished($element, $root, $template)}");
		expect(finished.mock.results[0].value).toBe("rendered");
	});

	it("knows the root of the rendering as $root", async () => {
		const container = document.createElement("div");
		const root = document.createElement("main");
		const template = await Template.load(`<div jstl-on-finished="\${finished($root)}"></div>`);
		const finished = vi.fn();

		// a renderer of its own: the static Renderer.render takes no root
		await new Renderer().render({ container, template, data: { finished }, root });

		expect(finished).toHaveBeenCalledExactlyOnceWith(root);
	});

	it("resolves the rendering after the promise the expression results in", async () => {
		const container = document.createElement("div");
		const template = await Template.load(`<div jstl-on-finished="\${finished()}"></div>`);
		let done = false;
		const finished = async () => {
			await Promise.resolve();
			done = true;
		};

		await Renderer.render({ container, template, data: { finished } });

		expect(done).toBe(true);
	});

	it("resolves the rendering without waiting for the expression with jstl-on-finished-async", async () => {
		const container = document.createElement("div");
		const template = await Template.load(`<div jstl-on-finished="\${finished()}" jstl-on-finished-async></div>`);
		let release;
		const pending = new Promise((aResolve) => (release = aResolve));
		const finished = vi.fn(() => pending);

		await Renderer.render({ container, template, data: { finished } });

		expect(finished).toHaveBeenCalledOnce();
		release();
		await pending;
	});
});
