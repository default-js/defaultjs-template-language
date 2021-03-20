import Renderer from "@src/Renderer.js";

describe("InitialDirective Test - ", () => {

	beforeAll(() => { });

	it("default case 1", async () => {
		const renderer = await Renderer.build({ template: "<div></div>" });
		const container = create("<div></div>").first();
		await renderer.render({ container });
		expect(container.children.length).toBe(1);
	});


	it("process HTMLTemlateElement", async () => {
		const renderer = await Renderer.build({ template: "<div><template><div></div></template></div>" });
		const container = create("<div></div>").first();
		await renderer.render({ container });

		expect(container.children.length).toBe(1);
		let element = container.children[0];
		expect(element.children.length).toBe(1);
		element = element.children[0];
		expect(element instanceof HTMLTemplateElement).toBe(true);
		element = element.content;
		expect(element instanceof DocumentFragment).toBe(true);
		expect(element.children.length).toBe(1);
	});
	
	
	it("process template with comments", async () => {
		const renderer = await Renderer.build({ template: "<div><!-- test --></div>" });
		const container = create("<div></div>").first();
		await renderer.render({ container });

		expect(container.childNodes.length).toBe(1);
		let element = container.childNodes[0];
		expect(element.childNodes.length).toBe(1);
		element = element.childNodes[0];
		expect(element instanceof Comment).toBe(true);
	});


	it("change tagname div -> span", async () => {
		const renderer = await Renderer.build({ template: `<div jstl-tagname="span" test-attr="attr">
			<span></span>
			<span></span>
			<span></span>
		</div>` });
		const container = create("<div></div>").first();
		await renderer.render({ container });

		expect(container.childNodes.length).toBe(1);
		let element = container.childNodes[0];
		expect(element instanceof HTMLSpanElement).toBe(true);
		expect(element.attr("test-attr")).toBe("attr");
		expect(element.children.length).toBe(3);
	});

	
	it("change tagname jstl -> span", async () => {
		const renderer = await Renderer.build({ template: `<jstl jstl-tagname="span" test-attr="attr">
			<span></span>
			<span></span>
			<span></span>
		</jstl>` });
		const container = create("<div></div>").first();
		await renderer.render({ container });

		expect(container.childNodes.length).toBe(1);
		let element = container.childNodes[0];
		expect(element instanceof HTMLSpanElement).toBe(true);
		expect(element.attr("test-attr")).toBe("attr");
		expect(element.children.length).toBe(3);
	});

	it("change tagname with dynamic value", async () => {
		const renderer = await Renderer.build({ template: `<jstl jstl-tagname="\${tagname}" test-attr="attr">
			<span></span>
			<span></span>
			<span></span>
		</jstl>` });
		const container = create("<div></div>").first();
		await renderer.render({ container , data : {tagname: "span"}});

		expect(container.childNodes.length).toBe(1);
		let element = container.childNodes[0];
		expect(element instanceof HTMLSpanElement).toBe(true);
		expect(element.attr("test-attr")).toBe("attr");
		expect(element.children.length).toBe(3);
	});
	

	afterAll(() => { });
});