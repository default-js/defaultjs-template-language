import { describe, it, expect, beforeAll, afterAll } from "vitest";
import { Renderer } from "../../../index.js";

describe("Attribute Test - ", () => {

	beforeAll(() => { });

	it("keep attributes from template", async () => {
		const container = create("<div></div>").first();
		const renderer = await Renderer.build({ template: "<div id=\"id\" attr-1=\"attr-1\" data-test-1=\"data-test-1\"></div>" });

		await renderer.render({ container });
		let element = container.children[0];

		expect(element.attr("id")).toBe("id");
		expect(element.attr("attr-1")).toBe("attr-1");
		expect(element.attr("data-test-1")).toBe("data-test-1");
	});

	it("boolean attributes -> ?boolean=\"${boolean}\"", async () => {
		const container = create("<div></div>").first();
		const renderer = await Renderer.build({ template: "<div ?boolean=\"${boolean}\"></div>" });

		await renderer.render({ container, data: { boolean: true } });
		let element = container.children[0];
		expect(element.attr("boolean")).toBe("true");

		await renderer.render({ container, data: { boolean: false } });
		element = container.children[0];
		expect(element.attr("boolean")).toBe(null);
	});


	it("append attributes -> attr=\"${attr}\"", async () => {
		const container = create("<div></div>").first();
		const renderer = await Renderer.build({ template: "<div attr=\"${attr}\"></div>" });

		await renderer.render({ container, data: { attr: "attr" } });
		let element = container.children[0];
		expect(element.attr("attr")).toBe("attr");
	});

	it("append attributes -> attr=\"\"", async () => {
		const container = create("<div></div>").first();
		const renderer = await Renderer.build({ template: "<div attr=\"\"></div>" });

		await renderer.render({ container, data: { attr: "attr" } });
		let element = container.children[0];
		expect(element.attr("attr")).toBe("");
	});


	it("append attributes with condition=true -> ?attr=\"${boolean}\" attr=\"${attr}\"", async () => {
		const container = create("<div></div>").first();
		const renderer = await Renderer.build({ template: "<div ?attr=\"${boolean}\" attr=\"${attr}\"></div>" });

		await renderer.render({ container, data: { attr: "attr", boolean: true } });
		let element = container.children[0];
		expect(element.attr("attr")).toBe("attr");
	});

	it("append attributes with condition=false -> ?attr=\"${boolean}\" attr=\"${attr}\"", async () => {
		const container = create("<div></div>").first();
		const renderer = await Renderer.build({ template: "<div ?attr=\"${boolean}\" attr=\"${attr}\"></div>" });

		await renderer.render({ container, data: { attr: "attr", boolean: false } });
		let element = container.children[0];
		expect(element.attr("attr")).toBe(null);
	});


	it("event bind with normal function", async () => {
		const container = create("<div></div>").first();
		const renderer = await Renderer.build({ template: "<div @click=\"${action}\"></div>" });


		let action = null
		const promise = new Promise((r) => {
			action = function(e) {
				r();
			};
		});

		await renderer.render({ container, data: { action, boolean: false } });
		setTimeout(() => container.children[0].trigger("click"), 1);

		return promise;
	});

	it("event bind with arrow function", async () => {
		const container = create("<div></div>").first();
		const renderer = await Renderer.build({ template: "<div @click=\"${action}\"></div>" });


		let action = null
		const promise = new Promise((r) => {
			action = (e) => {
				r();
			};
		});

		await renderer.render({ container, data: { action, boolean: false } });
		setTimeout(() => container.children[0].trigger("click"), 1);

		return promise;
	});

	it("event bind - delegate", async () => {
		const container = create("<div></div>").first();
		const renderer = await Renderer.build({ template: "<div @click:delegate=\"${action}\"></div>" });


		let handle = null
		const promise = new Promise((r) => {
			handle = (e) => {
				r();
			};
		});

		await renderer.render({ container, data: { action: "event-delegate-test", boolean: false } });
		container.children[0].on("event-delegate-test", handle);
		setTimeout(() => container.children[0].trigger("click"), 1);

		return promise;
	});

	it("event bind - delegate -> triggered at child", async () => {
		const container = create("<div></div>").first();
		const renderer = await Renderer.build({ template: "<div @click:delegate=\"${action}\"><span>trigger</span></div>" });


		let handle = null
		const promise = new Promise((r) => {
			handle = (e) => {
				e.preventDefault();
				e.stopPropagation();
				expect(e.target).toBe(container.children[0]);
				r();
			};
		});

		await renderer.render({ container, data: { action: "event-delegate-test", boolean: false } });
		container.on("event-delegate-test", handle);
		setTimeout(() => container.children[0].children[0].trigger("click"), 1);

		return promise;
	});


	it("event bind - delegate (impliced)", async () => {
		const container = create("<div></div>").first();
		const renderer = await Renderer.build({ template: "<div @click=\"${action}\"></div>" });


		let handle = null
		const promise = new Promise((r) => {
			handle = (e) => {
				r();
			};
		});

		await renderer.render({ container, data: { action: "event-delegate-test", boolean: false } });
		container.children[0].on("event-delegate-test", handle);
		setTimeout(() => container.children[0].trigger("click"), 1);

		return promise;
	});

	it("event bind:delegate - with condition", async () => {
		const container = create("<div></div>").first();
		const renderer = await Renderer.build({ template: "<div ?@click:delegate=\"${boolean}\" @click:delegate=\"${action}\"></div>" });


		let handle = null
		const promise = new Promise((r) => {
			handle = (e) => {
				r();
			};
		});

		await renderer.render({ container, data: { action: "event-delegate-test", boolean: true } });
		container.children[0].on("event-delegate-test", handle);
		setTimeout(() => container.children[0].trigger("click"), 1);

		return promise;
	});

	it("event bind:delegate - with condition", async () => {
		const container = create("<div></div>").first();
		const renderer = await Renderer.build({ template: "<div ?@click:delegate=\"${boolean}\" @click:delegate=\"${action}\"></div>" });


		let handle = null
		const promise = new Promise((r) => {
			handle = (e) => {
				throw new Error();
			};
		});

		await renderer.render({ container, data: { action: "event-delegate-test", boolean: false } });
		container.children[0].on("event-delegate-test", handle);
		setTimeout(() => container.children[0].trigger("click"), 1);

		return Promise.race([promise, new Promise((r) => {
			setTimeout(r, 100);
		})]);
	});



	it("attributes copied", async () => {
		const container = create("<div></div>").first();
		const renderer = await Renderer.build({ template: "<div id=\"id\" attr-1=\"attr-1\" data-test-1=\"data-test-1\" ?data-test-2=\"true\" data-test-2=\"data-test-2\" ?data-test-3=\"false\" data-test-3=\"data-test-3\" data-test-4=\"data-test-4\"></div>" });

		await renderer.render({ container });
		let element = container.children[0];

		expect(element.attr("id")).toBe("id");
		expect(element.attr("attr-1")).toBe("attr-1");
		expect(element.attr("data-test-1")).toBe("data-test-1");
		expect(element.attr("data-test-2")).toBe("data-test-2");
		expect(element.attr("data-test-3")).toBe(null);
		expect(element.attr("data-test-4")).toBe("data-test-4");
	});

	afterAll(() => { });
});

describe("Attribute->event bind->toggleClass - ", () => {

	beforeAll(() => { });

	it("toggleClass with target selector", async () => {
		const container = create("<div></div>").first();
		const renderer = await Renderer.build({ template:
			`<div id="source" @click:toggleClass:test="#target"></div>
			<div id="target"></div>
		` });

		await renderer.render({ container, data: {} });
		const source = container.find("#source").first();
		const target = container.find("#target").first();

		expect(target.is(":not(.test)")).toBe(true);
		source.trigger("click");
		expect(target.is(".test")).toBe(true);
		source.trigger("click");
		expect(target.is(":not(.test)")).toBe(true);
	});

	it("toggleClass", async () => {
		const container = create("<div></div>").first();
		const renderer = await Renderer.build({ template: `<div id="target" @click:toggleClass:test=""></div>` });

		await renderer.render({ container, data: {} });
		const target = container.find("#target").first();

		expect(target.is(":not(.test)")).toBe(true);
		target.trigger("click");
		expect(target.is(".test")).toBe(true);
		target.trigger("click");
		expect(target.is(":not(.test)")).toBe(true);
	});

	afterAll(() => { });
});

describe("OLD FUNCTION SPLITTER: Attribute->event bind->toggleAttribute -", () => {

	beforeAll(() => { });

	it("toggleAttribute with target selector", async () => {
		const container = create("<div></div>").first();
		const renderer = await Renderer.build({ template:
			`<div id="source" @click:toggleAttribute:test="#target"></div>
			<div id="target"></div>
		` });

		await renderer.render({ container, data: {} });
		const source = container.find("#source").first();
		const target = container.find("#target").first();

		expect(target.is(":not([test])")).toBe(true);
		source.trigger("click");
		expect(target.is("[test]")).toBe(true);
		source.trigger("click");
		expect(target.is(":not([test])")).toBe(true);
	});

	it("toggleAttribute", async () => {
		const container = create("<div></div>").first();
		const renderer = await Renderer.build({ template: `<div id="target" @click:toggleAttribute:test=""></div>` });

		await renderer.render({ container, data: {} });
		const target = container.find("#target").first();

		expect(target.is(":not([test])")).toBe(true);
		target.trigger("click");
		expect(target.is("[test]")).toBe(true);
		target.trigger("click");
		expect(target.is(":not([test])")).toBe(true);
	});

	afterAll(() => { });
});

describe("Attribute->event bind->toggleAttribute -", () => {

	beforeAll(() => { });

	it("toggleAttribute with target selector", async () => {
		const container = create("<div></div>").first();
		const renderer = await Renderer.build({ template:
			`<div id="source" @click::toggleAttribute::test="#target"></div>
			<div id="target"></div>
		` });

		await renderer.render({ container, data: {} });
		const source = container.find("#source").first();
		const target = container.find("#target").first();

		expect(target.is(":not([test])")).toBe(true);
		source.trigger("click");
		expect(target.is("[test]")).toBe(true);
		source.trigger("click");
		expect(target.is(":not([test])")).toBe(true);
	});

	it("toggleAttribute", async () => {
		const container = create("<div></div>").first();
		const renderer = await Renderer.build({ template: `<div id="target" @click::toggleAttribute::test=""></div>` });

		await renderer.render({ container, data: {} });
		const target = container.find("#target").first();

		expect(target.is(":not([test])")).toBe(true);
		target.trigger("click");
		expect(target.is("[test]")).toBe(true);
		target.trigger("click");
		expect(target.is(":not([test])")).toBe(true);
	});

	afterAll(() => { });
});
