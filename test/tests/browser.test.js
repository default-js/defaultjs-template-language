import { describe, it, expect, onTestFinished } from "vitest";
import { Template, Renderer, Context, Directive, DirectiveElement } from "../../index.js";

/**
 * Takes `defaultjs.tl` and `defaultjs.jstl` back to what they were when the case finishes;
 * `defaultjs` itself holds the global of `@default-js/defaultjs-extdom` as well.
 */
const restoreGlobal = () => {
	const { tl, jstl } = globalThis.defaultjs;
	onTestFinished(() => {
		globalThis.defaultjs.tl = tl;
		globalThis.defaultjs.jstl = jstl;
	});
};

describe("browser.js", () => {
	it("sets defaultjs.tl and its alias defaultjs.jstl", async () => {
		restoreGlobal();

		await import("../../browser.js");

		const { tl, jstl } = globalThis.defaultjs;
		expect(jstl).toBe(tl);
		expect(Object.keys(tl).sort()).toEqual(["Context", "Directive", "DirectiveElement", "Renderer", "Template", "VERSION"]);
		expect(tl.Template).toBe(Template);
		expect(tl.Renderer).toBe(Renderer);
		expect(tl.Context).toBe(Context);
		expect(tl.Directive).toBe(Directive);
		expect(tl.DirectiveElement).toBe(DirectiveElement);
		expect(typeof tl.VERSION).toBe("string");
	});

	it("leaves a defaultjs.tl already set as it is", async () => {
		restoreGlobal();
		const existing = {};
		globalThis.defaultjs.tl = existing;

		// a second copy of the script: the query makes it a module of its own
		await import("../../browser.js?second-copy");

		expect(globalThis.defaultjs.tl).toBe(existing);
		expect(globalThis.defaultjs.jstl).toBe(existing);
	});
});
