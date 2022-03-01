import Renderer from "@src/Renderer.js";

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

		expect(target.is(":not(.test)")).toBeTrue();
		source.trigger("click");
		expect(target.is(".test")).toBeTrue();
		source.trigger("click");
		expect(target.is(":not(.test)")).toBeTrue();
	});

	it("toggleClass", async () => {
		const container = create("<div></div>").first();
		const renderer = await Renderer.build({ template: `<div id="target" @click:toggleClass:test=""></div>` });

		await renderer.render({ container, data: {} });
		const target = container.find("#target").first();

		expect(target.is(":not(.test)")).toBeTrue();
		target.trigger("click");
		expect(target.is(".test")).toBeTrue();
		target.trigger("click");
		expect(target.is(":not(.test)")).toBeTrue();
	});

	afterAll(() => { });
});