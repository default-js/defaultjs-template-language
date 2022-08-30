import { Renderer } from "../../../index";
import {} from "../../"

describe("Attach element Test", () => {	
	beforeAll(() => {});
	
	it("default", async () => {
		const container = document.createElement("div");		
		const span = document.createElement("span");
		const renderer = await Renderer.build({template: `<div jstl-attach-element="\${element}"><div></div></div>`});
		
		await renderer.render({container, data: {element: span}});
		
		let element = container.children[0];
		expect(element.children.length).toBe(1);
		expect(element.children[0]).toBe(span);
	});

    it("default", async () => {
		const container = document.createElement("div");		
		const span = document.createElement("span");
		const renderer = await Renderer.build({template: `<div jstl-attach-element="\${element}" jstl-attach-element-mode="replace"><div></div></div>`});
		
		await renderer.render({container, data: {element: span}});
		
		let element = container.children[0];
		expect(element.children.length).toBe(1);
		expect(element.children[0]).toBe(span);
	});

    it("append", async () => {
		const container = document.createElement("div");		
		const span = document.createElement("span");
		const renderer = await Renderer.build({template: `<div jstl-attach-element="\${element}" jstl-attach-element-mode="append">
            <span></span>
        </div>`});
		
		await renderer.render({container, data: {element: span}});
		
		let element = container.children[0];
		expect(element.children.length).toBe(2);
		expect(element.children[1]).toBe(span);
	});

    it("prepend", async () => {
		const container = document.createElement("div");		
		const span = create("<span>included</span>").first();
		const renderer = await Renderer.build({template: `<div jstl-attach-element="\${element}" jstl-attach-element-mode="prepend">
            <span></span>
        </div>`});
		
		await renderer.render({container, data: {element: span}});
		
		let element = container.children[0];
		expect(element.children.length).toBe(2);
		expect(element.children[0]).toBe(span);
	});

	it("element by selector - direct", async () => {
		const selector ="attach-element-test-by-selector";
		const span = create(`<span id="${selector}"></span>`).first();
		document.body.append(span);

		const container = document.createElement("div");		
		const renderer = await Renderer.build({template: `<div jstl-attach-element="#${selector}"></div>`});
		
		await renderer.render({container, data: {element: span}});
		
		let element = container.children[0];
		expect(element.children.length).toBe(1);
		expect(element.children[0]).toBe(span);

		span.remove();
	});
	
	afterAll(() => {});
});