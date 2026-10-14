import { describe, it, expect, vi, onTestFinished } from "vitest";
import { Renderer, Template } from "../../../index.js";

const MAX_REMOVE_CALLS = 100;

/**
 * Lets `HTMLSelectElement.prototype.remove` work as it does, but throws once it is called more than
 * `MAX_REMOVE_CALLS` times, until the case finishes: a loop calling it without end fails the case
 * instead of stopping the page. A timeout can not do that, since such a loop never yields to a timer.
 */
const guardSelectRemove = () => {
	const remove = HTMLSelectElement.prototype.remove;
	let calls = 0;
	const spy = vi.spyOn(HTMLSelectElement.prototype, "remove").mockImplementation(function (...theArguments) {
		calls++;
		if (calls > MAX_REMOVE_CALLS) throw new Error(`HTMLSelectElement.remove called more than ${MAX_REMOVE_CALLS} times`);
		return remove.apply(this, theArguments);
	});
	onTestFinished(() => spy.mockRestore());
};

/**
 * Creates a container attached to the document, removed again when the case finishes: a select
 * shows its options in a page.
 *
 * @returns {HTMLDivElement}
 */
const createContainer = () => {
	const container = document.createElement("div");
	document.body.append(container);
	onTestFinished(() => container.remove());
	return container;
};

/**
 * @param {HTMLSelectElement} aSelect
 * @returns {{ options: string[], selectedIndex: number, value: string }} what the select shows
 */
const toState = (aSelect) => ({
	options: Array.from(aSelect.options, (anOption) => anOption.textContent),
	selectedIndex: aSelect.selectedIndex,
	value: aSelect.value
});

describe("select", () => {
	it("holds an option per item by jstl-foreach on the select, the first one selected", async () => {
		const container = createContainer();
		const template = await Template.load(`<select jstl-foreach="\${items}"> <option>\${item}</option></select>`);

		await Renderer.render({ container, template, data: { items: ["a", "b"] } });

		expect(Array.from(container.children, (anElement) => anElement.tagName)).toEqual(["SELECT"]);
		expect(toState(container.children[0])).toEqual({ options: ["a", "b"], selectedIndex: 0, value: "a" });
	});

	it("holds an option per item by a jstl tag with jstl-foreach in the select, the first one selected", async () => {
		const container = createContainer();
		const template = await Template.load(`<select><jstl jstl-foreach="\${items}"><option>\${item}</option></jstl></select>`);

		await Renderer.render({ container, template, data: { items: ["a", "b"] } });

		expect(Array.from(container.children, (anElement) => anElement.tagName)).toEqual(["SELECT"]);
		expect(toState(container.children[0])).toEqual({ options: ["a", "b"], selectedIndex: 0, value: "a" });
	});

	it("selects the option of the current item by jstl-repeat with ?selected", async () => {
		const container = createContainer();
		const template = await Template.load(`<select><option jstl-repeat="\${items}" value="\${item.id}" ?selected="\${item.id == current}">\${item.name}</option></select>`);

		await Renderer.render({ container, template, data: { items: [{ id: "1", name: "a" }, { id: "2", name: "b" }], current: "2" } });

		expect(Array.from(container.children, (anElement) => anElement.tagName)).toEqual(["SELECT"]);
		expect(toState(container.children[0])).toEqual({ options: ["a", "b"], selectedIndex: 1, value: "2" });
	});

	it("renders the select again into the same container", async () => {
		guardSelectRemove();
		const container = createContainer();
		const template = await Template.load(`<select jstl-foreach="\${items}"><option>\${item}</option></select>`);

		await Renderer.render({ container, template, data: { items: ["a", "b"] } });
		await Renderer.render({ container, template, data: { items: ["c"] } });

		expect(Array.from(container.children, (anElement) => anElement.tagName)).toEqual(["SELECT"]);
		expect(toState(container.children[0])).toEqual({ options: ["c"], selectedIndex: 0, value: "c" });
	});

	// defect: B56
	it.fails("keeps a placeholder option before the options of jstl-repeat, selected", async () => {
		const container = createContainer();
		const template = await Template.load(`<select><option value="">choose</option><option jstl-repeat="\${items}" value="\${item}">\${item}</option></select>`);

		await Renderer.render({ container, template, data: { items: ["a", "b"] } });

		expect(Array.from(container.children, (anElement) => anElement.tagName)).toEqual(["SELECT"]);
		expect(toState(container.children[0])).toEqual({ options: ["choose", "a", "b"], selectedIndex: 0, value: "" });
	});
});
