import { describe, it, expect, vi, onTestFinished } from "vitest";
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

describe("jstl-data in mode remote", () => {
	/**
	 * Answers every request with `{ "name": "value" }` and restores `fetch` when the case finishes.
	 *
	 * @returns {import("vitest").MockInstance}
	 */
	const mockFetch = () => {
		const spy = vi.spyOn(globalThis, "fetch").mockImplementation(async () => new Response(`{ "name": "value" }`));
		onTestFinished(() => spy.mockRestore());
		return spy;
	};

	it("resolves a relative URL against location", async () => {
		const fetch = mockFetch();
		// the page lies in the root of the origin, where location and origin resolve alike
		const page = location.href;
		history.replaceState(history.state, "", "/directory/page.html");
		onTestFinished(() => history.replaceState(history.state, "", page));
		const container = document.createElement("div");
		const template = await Template.load(`<div jstl-data="remote-data.json">\${name}</div>`);

		await Renderer.render({ container, template });

		expect(fetch).toHaveBeenCalledExactlyOnceWith(new URL("remote-data.json", location).toString(), {});
		expect(container.children).toHaveLength(1);
		expect(container.children[0].textContent).toBe("value");
	});

	it("hands jstl-data-option to fetch, its expressions resolved", async () => {
		const fetch = mockFetch();
		const container = document.createElement("div");
		const template = await Template.load(`<div jstl-data="/data.json" jstl-data-option='{"method": "POST", "headers": {"x-token": "\${token}"}}'>\${name}</div>`);

		await Renderer.render({ container, template, data: { token: "secret" } });

		expect(fetch).toHaveBeenCalledExactlyOnceWith(new URL("/data.json", location).toString(), { method: "POST", headers: { "x-token": "secret" } });
		expect(container.children[0].textContent).toBe("value");
	});
});

describe("jstl-data-scope", () => {
	/**
	 * A template setting `name` to `value` in `aScope`, followed by an element reading `typeof name`.
	 *
	 * @param {string} aName
	 * @param {string} [aScope]
	 * @returns {string}
	 */
	const setter = (aName, aScope) => `<div jstl-data="\${value}" jstl-data-mode="set" jstl-data-var="${aName}"${aScope ? ` jstl-data-scope="${aScope}"` : ""}>\${${aName}}</div>`;

	it("makes the data available to the element and its children only without a scope", async () => {
		const container = document.createElement("div");
		const template = await Template.load(`<div>${setter("x")}<p>\${typeof x}</p></div>`);

		await Renderer.render({ container, template, data: { value: "v" } });

		const element = container.children[0];
		expect(Array.from(element.children, (aChild) => aChild.textContent)).toEqual(["v", "undefined"]);
	});

	it("makes the data available to the following elements of the parent with scope container", async () => {
		const container = document.createElement("div");
		const template = await Template.load(`<div>${setter("x", "container")}<p>\${x}</p></div><p>\${typeof x}</p>`);

		await Renderer.render({ container, template, data: { value: "v" } });

		expect(container.children).toHaveLength(2);
		expect(Array.from(container.children[0].children, (aChild) => aChild.textContent)).toEqual(["v", "v"]);
		expect(container.children[1].textContent).toBe("undefined");
	});

	it("makes the data available to the rest of the rendering, not to the next, with scope render", async () => {
		const renderer = new Renderer();
		const first = document.createElement("div");
		const second = document.createElement("div");

		// a renderer of its own: the case is about two renderings of one renderer
		await renderer.render({ container: first, template: await Template.load(`<div>${setter("x", "render")}</div><p>\${x}</p>`), data: { value: "v" } });
		await renderer.render({ container: second, template: await Template.load(`<p>\${typeof x}</p>`) });

		expect(first.children[1].textContent).toBe("v");
		expect(second.children[0].textContent).toBe("undefined");
	});

	it("makes the data available to later renderings of the same renderer, not of another, with scope data", async () => {
		const renderer = new Renderer();
		const reader = await Template.load(`<p>\${typeof x}</p>`);
		const same = document.createElement("div");
		const other = document.createElement("div");

		// renderers of their own: the case is about renderings of one renderer against another
		await renderer.render({ container: document.createElement("div"), template: await Template.load(setter("x", "data")), data: { value: "v" } });
		await renderer.render({ container: same, template: reader });
		await new Renderer().render({ container: other, template: reader });

		expect(same.children[0].textContent).toBe("string");
		expect(other.children[0].textContent).toBe("undefined");
	});

	it("makes the data available to every renderer with scope application", async () => {
		const container = document.createElement("div");
		onTestFinished(async () => Renderer.render({ container: document.createElement("div"), template: await Template.load(setter("applicationScoped", "application")), data: { value: undefined } }));

		await Renderer.render({ container: document.createElement("div"), template: await Template.load(setter("applicationScoped", "application")), data: { value: "v" } });
		await new Renderer().render({ container, template: await Template.load(`<p>\${applicationScoped}</p>`) });

		expect(container.children[0].textContent).toBe("v");
	});

	it("makes the data available to the rest of the current iteration with scope jstl-foreach", async () => {
		const container = document.createElement("div");
		const template = await Template.load(`<div jstl-foreach="\${list}"><b jstl-data="\${item}" jstl-data-mode="set" jstl-data-var="y" jstl-data-scope="jstl-foreach"></b><i>\${y}</i></div>`);

		await Renderer.render({ container, template, data: { list: ["1", "2"] } });

		const element = container.children[0];
		expect(Array.from(element.children, (aChild) => aChild.textContent)).toEqual(["", "1", "", "2"]);
	});
});
