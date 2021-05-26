import Renderer from "@src/Renderer.js";

describe("OnFinished Directive Test - ", () => {

	beforeAll(() => { });

	it("default case 1", async () => {		
		window.ONFINISH_CASE_1 = false;
		const template =`<div jstl-on-finished="\${window.ONFINISH_CASE_1 = true}"></div>`;		
		const container = create("<div></div>").first();
		
		document.body.append(container);
		const renderer = await Renderer.build({template});
		
		await renderer.render({ container, template });
		expect(window.ONFINISH_CASE_1).toBeTrue();
	});

	

	afterAll(() => { });
});