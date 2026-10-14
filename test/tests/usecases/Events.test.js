import { describe, it, expect, vi } from "vitest";
import { Renderer, Template } from "../../../index.js";

describe("event handler in a list", () => {
	it("hands each handler the item of its iteration", async () => {
		const container = document.createElement("div");
		const template = await Template.load(`<ul><li jstl-repeat="\${items}" @click="\${() => choose(item)}">\${item}</li></ul>`);
		const choose = vi.fn();

		await Renderer.render({ container, template, data: { items: ["a", "b", "c"], choose } });
		container.children[0].children[1].trigger("click");

		expect(choose).toHaveBeenCalledExactlyOnceWith("b");
	});

	it("delegates the event of an item to a listener of the container", async () => {
		const container = document.createElement("div");
		const template = await Template.load(`<ul><li jstl-repeat="\${items}" @click:delegate="choose">\${item}</li></ul>`);
		const handle = vi.fn();

		await Renderer.render({ container, template, data: { items: ["a", "b", "c"] } });
		container.on("choose", handle);
		const item = container.children[0].children[1];
		item.trigger("click");

		expect(handle).toHaveBeenCalledOnce();
		expect(handle.mock.calls[0][0].target).toBe(item);
	});
});
