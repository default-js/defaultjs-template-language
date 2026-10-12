import { describe, it, expect } from "vitest";
import { Renderer, Template } from "../../../index.js";

describe("jstl-data", () => {
	it("loads data from a URL into the context, in mode remote by default", async () => {
		const container = document.createElement("div");
		const template = await Template.load(`<div jstl-data="/data/directives/Data/remote-data.json">\${test1}</div>`);

		await Renderer.render({ container, template });

		expect(container.children).toHaveLength(1);
		expect(container.children[0].textContent).toBe("value-1");
	});

	it("sets a static value as variable in mode direct", async () => {
		const container = document.createElement("div");
		const template = await Template.load(`<div jstl-data="value-1" jstl-data-var="test1" jstl-data-mode="direct">\${test1}</div>`);

		await Renderer.render({ container, template });

		expect(container.children).toHaveLength(1);
		expect(container.children[0].textContent).toBe("value-1");
	});

	it("resolves the expressions of the value as text in mode direct", async () => {
		const container = document.createElement("div");
		const template = await Template.load(`<div jstl-data="\${test.data} and more" jstl-data-var="result" jstl-data-mode="direct">\${result}</div>`);

		await Renderer.render({ container, template, data: { test: { data: "value-1" } } });

		expect(container.children).toHaveLength(1);
		expect(container.children[0].textContent).toBe("value-1 and more");
	});

	it("sets the result of an expression as variable in mode set", async () => {
		const container = document.createElement("div");
		const template = await Template.load(`<div jstl-data="\${test}" jstl-data-var="test1" jstl-data-mode="set">\${test1.data}</div>`);

		await Renderer.render({ container, template, data: { test: { data: "value-1" } } });

		expect(container.children).toHaveLength(1);
		expect(container.children[0].textContent).toBe("value-1");
	});

	it("adds the result of an expression to the context in mode set without variable", async () => {
		const container = document.createElement("div");
		const template = await Template.load(`<div jstl-data="\${test}" jstl-data-mode="set">\${data}</div>`);

		await Renderer.render({ container, template, data: { test: { data: "value-1" } } });

		expect(container.children).toHaveLength(1);
		expect(container.children[0].textContent).toBe("value-1");
	});
});
