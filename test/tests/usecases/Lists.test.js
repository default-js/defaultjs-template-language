import { describe, it, expect } from "vitest";
import { Renderer, Template } from "../../../index.js";

describe("list", () => {
	it("renders a text as the only content of jstl-foreach once per item", async () => {
		const container = document.createElement("div");
		const template = await Template.load(`<p jstl-foreach="\${items}">\${item}</p>`);

		await Renderer.render({ container, template, data: { items: ["a", "b"] } });

		expect(container.children).toHaveLength(1);
		const element = container.children[0];
		expect(element.children).toHaveLength(0);
		expect(element.textContent).toBe("ab");
	});

	it("renders the text and the elements of the content of jstl-foreach in their order per item", async () => {
		const container = document.createElement("div");
		const template = await Template.load(`<p jstl-foreach="\${items}">\${status.number}. <b>\${item}</b> </p>`);

		await Renderer.render({ container, template, data: { items: ["a", "b"] } });

		expect(container.children).toHaveLength(1);
		const element = container.children[0];
		expect(element.textContent).toBe("1. a 2. b ");
		expect(Array.from(element.children, (aChild) => aChild.textContent)).toEqual(["a", "b"]);
	});

	it("renders nested loops, the inner one reading the item and the status of the outer one", async () => {
		const container = document.createElement("div");
		const template = await Template.load(`<div jstl-foreach="\${rows}" jstl-foreach-var="row" jstl-foreach-status="outer"><ul jstl-foreach="\${row}"><li>\${outer.index}-\${status.index}-\${item}</li></ul></div>`);

		await Renderer.render({ container, template, data: { rows: [["a", "b"], ["c"]] } });

		expect(container.children).toHaveLength(1);
		const element = container.children[0];
		expect(Array.from(element.children, (aList) => Array.from(aList.children, (anItem) => anItem.textContent))).toEqual([["0-0-a", "0-1-b"], ["1-0-c"]]);
	});

	it.each([
		{ render: true, lists: [["a", "b"]] },
		{ render: false, lists: [] }
	])("with jstl-if evaluating to $render beside jstl-foreach renders $lists", async ({ render, lists }) => {
		const container = document.createElement("div");
		const template = await Template.load(`<ul jstl-if="\${render}" jstl-foreach="\${items}"><li>\${item}</li></ul>`);

		await Renderer.render({ container, template, data: { render, items: ["a", "b"] } });

		expect(Array.from(container.children, (aList) => Array.from(aList.children, (anItem) => anItem.textContent))).toEqual(lists);
	});

	it("renders only the items a jstl tag with jstl-if lets through", async () => {
		const container = document.createElement("div");
		const template = await Template.load(`<ul jstl-foreach="\${items}"><jstl jstl-if="\${item.visible}"><li>\${item.name}</li></jstl></ul>`);

		await Renderer.render({ container, template, data: { items: [{ name: "a", visible: true }, { name: "b", visible: false }, { name: "c", visible: true }] } });

		expect(container.children).toHaveLength(1);
		expect(Array.from(container.children[0].children, (anItem) => anItem.textContent)).toEqual(["a", "c"]);
	});

	it("renders the element of jstl-foreach without content for an empty list", async () => {
		const container = document.createElement("div");
		const template = await Template.load(`<ul jstl-foreach="\${items}"><li>\${item}</li></ul>`);

		await Renderer.render({ container, template, data: { items: [] } });

		expect(Array.from(container.children, (anElement) => anElement.tagName)).toEqual(["UL"]);
		expect(container.children[0].childNodes).toHaveLength(0);
	});

	it("renders the elements of jstl-repeat between their siblings", async () => {
		const container = document.createElement("div");
		const template = await Template.load(`<ul><li>first</li><li jstl-repeat="\${items}">\${item}</li><li>last</li></ul>`);

		await Renderer.render({ container, template, data: { items: ["a", "b"] } });

		expect(container.children).toHaveLength(1);
		expect(Array.from(container.children[0].children, (anItem) => anItem.textContent)).toEqual(["first", "a", "b", "last"]);
	});

	it.each([
		{ mode: "replace", children: ["LI:a", "LI:b", "I:"] },
		{ mode: "append", children: ["SPAN:", "LI:a", "LI:b", "I:"] },
		{ mode: "prepend", children: ["LI:a", "LI:b", "SPAN:", "I:"] }
	])("places the elements of a jstl-repeat at the top of the template by the target with mode $mode", async ({ mode, children }) => {
		const container = document.createElement("div");
		container.innerHTML = "<span></span><i></i>";
		const template = await Template.load(`<li jstl-repeat="\${items}">\${item}</li>`);

		await Renderer.render({ container, template, data: { items: ["a", "b"] }, mode, target: container.children[0] });

		expect(Array.from(container.children, (anElement) => `${anElement.tagName}:${anElement.textContent}`)).toEqual(children);
		expect(container.textContent).toBe("ab");
	});

	it("renders no element of jstl-repeat for an empty list", async () => {
		const container = document.createElement("div");
		const template = await Template.load(`<ul><li jstl-repeat="\${items}">\${item}</li></ul>`);

		await Renderer.render({ container, template, data: { items: [] } });

		expect(container.children).toHaveLength(1);
		expect(container.children[0].childNodes).toHaveLength(0);
	});

	it.each([
		{ items: [], tagNames: ["P"], texts: ["empty"] },
		{ items: ["a", "b"], tagNames: ["UL"], texts: ["ab"] }
	])("shows an empty state by jstl-choose, rendering $tagNames for $items", async ({ items, tagNames, texts }) => {
		const container = document.createElement("div");
		const template = await Template.load(`<jstl jstl-choose><p jstl-when="\${items.length == 0}">empty</p><ul jstl-otherwise jstl-foreach="\${items}"><li>\${item}</li></ul></jstl>`);

		await Renderer.render({ container, template, data: { items } });

		expect(Array.from(container.children, (anElement) => anElement.tagName)).toEqual(tagNames);
		expect(Array.from(container.children, (anElement) => anElement.textContent)).toEqual(texts);
	});

	it.each([
		{ render: true, texts: ["a", "b"] },
		{ render: false, texts: [] }
	])("with jstl-if evaluating to $render beside jstl-repeat renders $texts", async ({ render, texts }) => {
		const container = document.createElement("div");
		const template = await Template.load(`<ul><li jstl-if="\${render}" jstl-repeat="\${items}">\${item}</li></ul>`);

		await Renderer.render({ container, template, data: { render, items: ["a", "b"] } });

		expect(container.children).toHaveLength(1);
		expect(Array.from(container.children[0].children, (anItem) => anItem.textContent)).toEqual(texts);
	});

	it("sets the attributes of each element of jstl-repeat by its item and status", async () => {
		const container = document.createElement("div");
		const template = await Template.load(`<ul><li jstl-repeat="\${items}" class="\${status.first ? 'first' : 'other'}" ?title="\${item == current}" title="current">\${item}</li></ul>`);

		await Renderer.render({ container, template, data: { items: ["a", "b", "c"], current: "b" } });

		expect(container.children).toHaveLength(1);
		const items = Array.from(container.children[0].children);
		expect(items.map((anItem) => anItem.textContent)).toEqual(["a", "b", "c"]);
		expect(items.map((anItem) => anItem.className)).toEqual(["first", "other", "other"]);
		expect(items.map((anItem) => anItem.getAttribute("title"))).toEqual([null, "current", null]);
	});
});
