import { describe, it, expect } from "vitest";
import { Renderer, Template } from "../../../index.js";

/**
 * @param {HTMLTableElement} aTable
 * @returns {string[][]} the text of each cell, row by row
 */
const toCells = (aTable) => Array.from(aTable.rows, (aRow) => Array.from(aRow.cells, (aCell) => aCell.textContent));

describe("table", () => {
	it("holds a row per item by jstl-foreach on the tbody", async () => {
		const container = document.createElement("div");
		const template = await Template.load(`<table><tbody jstl-foreach="\${items}"><tr><td>\${item}</td></tr></tbody></table>`);

		await Renderer.render({ container, template, data: { items: ["a", "b"] } });

		expect(Array.from(container.children, (anElement) => anElement.tagName)).toEqual(["TABLE"]);
		const table = container.children[0];
		expect(table.tBodies).toHaveLength(1);
		expect(toCells(table)).toEqual([["a"], ["b"]]);
	});

	it("holds a row per item by jstl-repeat on the tr, and a cell per column by jstl-repeat on the td", async () => {
		const container = document.createElement("div");
		const template = await Template.load(`<table><tr jstl-repeat="\${rows}" jstl-repeat-var="row"><td jstl-repeat="\${row}">\${item}</td></tr></table>`);

		await Renderer.render({ container, template, data: { rows: [["a", "b"], ["c", "d"]] } });

		expect(Array.from(container.children, (anElement) => anElement.tagName)).toEqual(["TABLE"]);
		expect(toCells(container.children[0])).toEqual([["a", "b"], ["c", "d"]]);
	});

	// defect: B56
	it.fails("keeps a header row before the rows of jstl-repeat", async () => {
		const container = document.createElement("div");
		const template = await Template.load(`<table><tr><th>name</th></tr><tr jstl-repeat="\${items}"><td>\${item}</td></tr></table>`);

		await Renderer.render({ container, template, data: { items: ["a", "b"] } });

		expect(Array.from(container.children, (anElement) => anElement.tagName)).toEqual(["TABLE"]);
		expect(toCells(container.children[0])).toEqual([["name"], ["a"], ["b"]]);
	});

	// the HTML parser moves the <jstl> in front of the <table>, empty: the row is no part of the loop
	it("renders the row of a jstl tag with jstl-foreach in the table once", async () => {
		const container = document.createElement("div");
		const template = await Template.load(`<table><jstl jstl-foreach="\${items}"><tr><td>\${item}</td></tr></jstl></table>`);

		await Renderer.render({ container, template, data: { items: ["a", "b"] } });

		expect(Array.from(container.children, (anElement) => anElement.tagName)).toEqual(["TABLE"]);
		expect(container.children[0].rows).toHaveLength(1);
	});
});
