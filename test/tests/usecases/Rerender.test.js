import { describe, it, expect } from "vitest";
import { Renderer, Template } from "../../../index.js";

describe("rendering again", () => {
	it("replaces the list of the last rendering with a shorter one", async () => {
		const container = document.createElement("div");
		const renderer = new Renderer({ template: await Template.load(`<ul><li jstl-repeat="\${items}">\${item}</li></ul>`) });

		await renderer.render({ container, data: { items: ["a", "b", "c"] } });
		await renderer.render({ container, data: { items: ["d"] } });

		expect(container.children).toHaveLength(1);
		expect(Array.from(container.children[0].children, (anElement) => anElement.textContent)).toEqual(["d"]);
	});

	it("replaces the elements of a jstl-repeat at the top of the template with fewer ones", async () => {
		const container = document.createElement("div");
		const renderer = new Renderer({ template: await Template.load(`<li jstl-repeat="\${items}">\${item}</li>`) });

		await renderer.render({ container, data: { items: ["a", "b", "c"] } });
		await renderer.render({ container, data: { items: ["d"] } });

		expect(Array.from(container.children, (anElement) => anElement.textContent)).toEqual(["d"]);
	});

	it("appends a second page to the first with mode append", async () => {
		const container = document.createElement("div");
		const renderer = new Renderer({ template: await Template.load(`<li jstl-repeat="\${items}">\${item}</li>`) });

		await renderer.render({ container, data: { items: ["a", "b"] } });
		await renderer.render({ container, data: { items: ["c", "d"] }, mode: "append" });

		expect(Array.from(container.children, (anElement) => anElement.textContent)).toEqual(["a", "b", "c", "d"]);
	});
});
