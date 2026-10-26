import { describe, it, expect, vi } from "vitest";
import { Template, Renderer } from "../../index.js";

/**
 * Renders an empty template and answers the context `Renderer.render` resolves to; a context needs
 * a resolver, a renderer and a root, which the cases take from a rendering.
 *
 * @returns {Promise<import("../../src/Context.js").default>}
 */
const renderContext = async () => {
	const container = document.createElement("div");
	const template = await Template.load(`<div></div>`);
	return Renderer.render({ container, template, data: {} });
};

/**
 * Combines every way of handing a value to a context with every value.
 *
 * @param {Array<object>} aWayList - each with `via` and the function handing the value over
 * @param {Array<object>} aValueList - each with `type` and a function creating the value
 * @returns {Array<object>} a row of `it.each` per combination
 */
const combine = (aWayList, aValueList) => aWayList.flatMap((aWay) => aValueList.map((aValue) => ({ ...aWay, ...aValue })));

const TEMPLATE_WAYS = [
	{ via: "subContext", toContext: (aContext, aSource) => aContext.subContext({ template: aSource }) },
	{
		via: "the setter",
		toContext: (aContext, aSource) => {
			const subContext = aContext.subContext();
			subContext.template = aSource;
			return subContext;
		}
	}
];

const CONTENT_WAYS = [
	{ via: "clone", toContext: (aContext, aContent) => aContext.clone({ content: aContent }) },
	{
		via: "the setter",
		toContext: (aContext, aContent) => {
			const clone = aContext.clone();
			clone.content = aContent;
			return clone;
		}
	}
];

describe("Context.template", () => {
	it.each(combine(TEMPLATE_WAYS, [
		{ type: "a string", source: () => `<p>a</p><p>b</p>` },
		{ type: "a Template", source: () => new Template(create(`<p>a</p><p>b</p>`, true)) }
	]))("converts $type given through $via into an array of its nodes", async ({ toContext, source }) => {
		const context = toContext(await renderContext(), source());

		expect(context.template).toBeInstanceOf(Array);
		expect(context.template.map((aNode) => aNode.textContent)).toEqual(["a", "b"]);
	});

	it.each(combine(TEMPLATE_WAYS, [
		{ type: "a node", source: () => document.createElement("p") },
		{ type: "an array of nodes", source: () => [document.createElement("p"), document.createElement("p")] }
	]))("keeps $type given through $via", async ({ toContext, source }) => {
		const template = source();
		const context = toContext(await renderContext(), template);

		expect(context.template).toBe(template);
	});

	it.each(combine(TEMPLATE_WAYS, [
		{ type: "a NodeList", source: () => create(`<p></p><p></p>`) },
		{ type: "an HTMLCollection", source: () => create(`<div><p></p><p></p></div>`)[0].children }
	]))("throws an Error for $type given through $via", async ({ toContext, source }) => {
		const context = await renderContext();
		const template = source();

		expect(() => toContext(context, template)).toThrow(Error);
	});
});

describe("Context.content", () => {
	it.each(combine(CONTENT_WAYS, [
		{ type: "a node", source: () => document.createElement("p") },
		{ type: "an array of nodes", source: () => [document.createElement("p"), document.createElement("p")] },
		{ type: "null", source: () => null }
	]))("keeps $type given through $via", async ({ toContext, source }) => {
		const content = source();
		const context = toContext(await renderContext(), content);

		expect(context.content).toBe(content);
	});

	it.each(combine(CONTENT_WAYS, [
		{ type: "a NodeList", source: () => create(`<p></p><p></p>`) },
		{ type: "an HTMLCollection", source: () => create(`<div><p></p><p></p></div>`)[0].children },
		{ type: "a string", source: () => `<p></p>` }
	]))("throws an Error for $type given through $via", async ({ toContext, source }) => {
		const context = await renderContext();
		const content = source();

		expect(() => toContext(context, content)).toThrow(Error);
	});
});

describe("Context.ready", () => {
	it("runs every callback of an array once when the context completes", async () => {
		const context = (await renderContext()).subContext();
		const first = vi.fn();
		const second = vi.fn();

		await context.ready([first, second]);
		await context.ready();

		expect(first).toHaveBeenCalledExactlyOnceWith(context);
		expect(second).toHaveBeenCalledExactlyOnceWith(context);
	});
});
