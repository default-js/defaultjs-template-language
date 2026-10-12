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
});
