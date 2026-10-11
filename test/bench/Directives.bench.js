import { test, expect } from "vitest";
import { measure, nest, repeat, countElements, DEPTHS, WIDTHS, TIMEOUT } from "./BenchUtils.js";

/**
 * The directives with a nesting of their own are measured nested, at DEPTHS, and side by side, at
 * WIDTHS; each level carries the directive, and the next level sits inside it at `{content}`. The
 * loops are measured over WIDTHS items, one element each.
 */

const items = (aCount) => Array.from({ length: aCount }, (_, anIndex) => ({ name: `item-${anIndex}` }));

const LEVELS = [
	{
		group: "if",
		level: '<div jstl-if="${flag}">${value}{content}</div>',
		data: () => ({ flag: true, value: "value" }),
		depth: 1,
		elements: 1,
	},
	{
		group: "choose",
		level: '<div jstl-choose><div jstl-when="${no}">no</div><div jstl-when="${yes}">${value}{content}</div><div jstl-otherwise>otherwise</div></div>',
		data: () => ({ no: false, yes: true, value: "value" }),
		// the element carrying jstl-choose and the case that matches, one inside the other
		depth: 2,
		elements: 2,
	},
	{
		group: "attributes",
		level: '<div attr="${value}" ?cond="${flag}" cond="cond">{content}</div>',
		data: () => ({ flag: true, value: "value" }),
		depth: 1,
		elements: 1,
		check: (aContainer, aLevels) => expect(aContainer.querySelectorAll('[attr="value"][cond="cond"]').length).toBe(aLevels),
	},
	{
		group: "events",
		level: '<div @click="${handler}">{content}</div>',
		data: () => {
			const state = { calls: 0 };
			return { state, handler: () => state.calls++ };
		},
		depth: 1,
		elements: 1,
		check: (aContainer, aLevels, aData) => {
			aData.state.calls = 0;
			for (const element of aContainer.querySelectorAll("div")) element.dispatchEvent(new Event("click"));
			expect(aData.state.calls).toBe(aLevels);
		},
	},
	{
		group: "include",
		level: '<div><div jstl-include="/templates/bench/include.tpl.html"></div>{content}</div>',
		data: () => ({ value: "value" }),
		// the level, the element carrying jstl-include and the included span; the next level is a
		// sibling of the element carrying jstl-include
		depth: 1,
		elements: 3,
	},
];

const LOOPS = [
	{
		group: "foreach",
		template: '<div jstl-foreach="${items}" jstl-foreach-var="item"><div>${item.name}</div></div>',
		// the element carrying jstl-foreach and one per item
		elements: (anItems) => anItems + 1,
	},
	{
		group: "repeat",
		template: '<div><div jstl-repeat="${items}" jstl-repeat-var="item">${item.name}</div></div>',
		// the element around jstl-repeat and one per item
		elements: (anItems) => anItems + 1,
	},
];

/**
 * Measures one shape of a directive.
 *
 * @param {object} aBench the `bench` of the test context
 * @param {object} aLevel an entry of LEVELS
 * @param {string} aShape "depth" or "siblings"
 * @param {number} aSize
 * @param {number} aLevels the number of levels in the template
 * @param {string} aTemplate
 * @returns {Promise<void>}
 */
const measureLevel = async (aBench, aLevel, aShape, aSize, aLevels, aTemplate) => {
	const data = aLevel.data();
	await measure(aBench, {
		id: `${aLevel.group}-${aShape}-${aSize}`,
		name: `${aLevel.group} ${aShape} ${aSize}`,
		template: aTemplate,
		data,
		check: (aContainer) => {
			expect(countElements(aContainer)).toBe(aLevels * aLevel.elements);
			if (aLevel.check) aLevel.check(aContainer, aLevels, data);
		},
	});
};

for (const level of LEVELS)
	test(level.group, { timeout: TIMEOUT }, async ({ bench }) => {
		for (const depth of DEPTHS) {
			const levels = depth / level.depth;
			await measureLevel(bench, level, "depth", depth, levels, nest(level.level, levels));
		}
		for (const width of WIDTHS) await measureLevel(bench, level, "siblings", width, width, repeat(level.level, width));
	});

for (const { group, template, elements } of LOOPS)
	test(group, { timeout: TIMEOUT }, async ({ bench }) => {
		for (const width of WIDTHS)
			await measure(bench, {
				id: `${group}-items-${width}`,
				name: `${group} items ${width}`,
				template,
				data: { items: items(width) },
				check: (aContainer) => expect(countElements(aContainer)).toBe(elements(width)),
			});
	});
