import { test, expect } from "vitest";
import { measure, countElements, TIMEOUT } from "./BenchUtils.js";

const base = '<div class="test-${classname}">${testValue} ${promiseFunction()}\n{content}</div>';
const buildContent = ({ count, template = base }) => {
	if (count == 1) return base;

	let content = [];
	for (let i = 0; i < count; i++) content.push(base);

	return content.join("");
};

const build = ({ depth, count, string = null, index = 0, template }) => {
	if (index >= depth) return string.replace(/\{content\}/g, "");

	return build({ string: string ? string.replace(/\{content\}/g, buildContent({ count, template })) : buildContent({ count, template }), index: index + 1, depth, count, template });
};

const data = {
	classname: "test-class",
	testValue: "test-value",
	promiseFunction: function () {
		return Promise.resolve("promise-value");
	},
};

// case, depth, elements per level, elements rendered
const CASES = [
	[1, 5000, 1, 5000],
	[2, 10, 3, 88572],
	[3, 1, 10000, 10000],
];

for (const [number, depth, count, elements] of CASES)
	test(`case ${number} - depth=${depth}, count=${count}`, { timeout: TIMEOUT }, async ({ bench }) => {
		await measure(bench, {
			id: `case-${number}`,
			name: `case ${number}`,
			template: build({ depth, count }),
			data,
			check: (aContainer) => expect(countElements(aContainer)).toBe(elements),
		});
	});
