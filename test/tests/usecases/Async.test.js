import { describe, it, expect } from "vitest";
import { Renderer, Template } from "../../../index.js";

/**
 * @returns {{ promise: Promise<*>, resolve: (aValue: *) => void }} a promise and the function resolving it
 */
const toDeferred = () => {
	let resolve;
	const promise = new Promise((aResolve) => (resolve = aResolve));
	return { promise, resolve };
};

describe("asynchronous data", () => {
	it("keeps the order of the template when the values resolve in reverse order", async () => {
		const container = document.createElement("div");
		const template = await Template.load(`<li jstl-repeat="\${items}">\${await item.load()}</li>`);
		const deferreds = [toDeferred(), toDeferred(), toDeferred()];
		const items = deferreds.map(({ promise }) => ({ load: () => promise }));

		const rendering = Renderer.render({ container, template, data: { items } });
		deferreds[2].resolve("c");
		deferreds[1].resolve("b");
		deferreds[0].resolve("a");
		await rendering;

		expect(Array.from(container.children, (anElement) => anElement.textContent)).toEqual(["a", "b", "c"]);
	});
});
