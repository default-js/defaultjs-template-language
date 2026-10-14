import { describe, it, expect } from "vitest";
import { Renderer, Template } from "../../../index.js";

const ITEM_URL = "/templates/usecases/Include/Item.tpl.html";

describe("jstl-include in a list", () => {
	it("renders the included template once per item, reading the item", async () => {
		const container = document.createElement("div");
		const template = await Template.load(`<ul jstl-foreach="\${items}"><li jstl-include="${ITEM_URL}"></li></ul>`);

		await Renderer.render({ container, template, data: { items: ["a", "b"] } });

		expect(container.children).toHaveLength(1);
		const items = Array.from(container.children[0].children);
		expect(items.map((anItem) => anItem.tagName)).toEqual(["LI", "LI"]);
		expect(items.map((anItem) => Array.from(anItem.children, (aChild) => `${aChild.tagName}:${aChild.textContent}`))).toEqual([["B:a"], ["B:b"]]);
	});
});
