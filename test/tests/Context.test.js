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

describe("Context.template", () => {
	it.each([
		{ via: "subContext", toContext: (aContext, aSource) => aContext.subContext({ template: aSource }) },
		{
			via: "the setter",
			toContext: (aContext, aSource) => {
				const subContext = aContext.subContext();
				subContext.template = aSource;
				return subContext;
			}
		}
	])("converts a string given through $via into its nodes", async ({ toContext }) => {
		const context = toContext(await renderContext(), `<p>a</p><p>b</p>`);

		expect(context.template).toBeInstanceOf(NodeList);
		expect(Array.from(context.template, (aNode) => aNode.textContent)).toEqual(["a", "b"]);
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
