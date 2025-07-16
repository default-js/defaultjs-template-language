import { Renderer } from "../../../../index";



class ExtDivTestElement extends HTMLDivElement{
	constructor(){
		super();
		console.log("test div element")
	}
};

customElements.define("test-div", ExtDivTestElement, {extends: "div"});


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


	it("initial with \"is\" directive", async () => {
		const renderer = await Renderer.build({ template: `<div is="test-div" test="test"></div>` });
		const container = create("<div></div>").first();
		await renderer.render({ container , data : {}});

		expect(container.childNodes.length).toBe(1);
		let element = container.childNodes[0];
		expect(element instanceof ExtDivTestElement).toBe(true);
		expect(element.attr("is")).toBe("test-div");
	});


	it("initial if htmltemplate", async () => {
		const renderer = await Renderer.build({ template: `<div>
				<template id="template-test-id">
					<div>\${text}</div>
				</template>
			</div>` });
		const container = create("<div></div>").first();
		document.body.append(container);
		await renderer.render({ container , data : {text:"test"}});

		expect(container.childNodes.length).toBe(1);
		let element = container.children[0];
		expect(element.tagName).toBe("DIV");
		expect(element.children.length).toBe(1);
		element = element.children[0];
		expect(element.tagName).toBe("TEMPLATE");
		expect(element.getAttribute("id")).toBe("template-test-id");
		expect(element.content.children.length).toBe(1);
		element = element.content.children[0];
		expect(element.tagName).toBe("DIV");
		expect(element.textContent).toBe("test");

		container.remove(); 
	});
	

	afterAll(() => { });
});