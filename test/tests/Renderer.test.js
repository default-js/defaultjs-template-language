import { describe, it, expect, beforeAll, afterAll } from "vitest";
import { Renderer } from "../../index.js";

describe("Renderer Test - traverse tree", () => {

	beforeAll(() => {});

	it("case 1", async () => {
		const container = create("<div></div>").first();
		expect(container.children.length).toBe(0);
		await new Renderer().render({
			container: container,
			data: {},
			template: "<div></div>"
		});

		expect(container.children.length).toBe(1);
	});

	it("case 2", async () => {
		const container = create("<div></div>").first();
		expect(container.children.length).toBe(0);

		await new Renderer().render({
			container: container,
			data: {},
			template: 	"<div></div>" +
						"<div></div>" +
						"<div></div>" +
						"<div></div>" +
						"<div></div>"
		});
		expect(container.children.length).toBe(5);
	});

	it("case 3", async () => {
		const container = create("<div></div>").first();
		expect(container.children.length).toBe(0);
		await new Renderer().render({
			container: container,
			data: {},
			template: 	"<div>" +
						"\t<div></div>" +
						"\t<div></div>" +
						"\t<div></div>" +
						"\t<div></div>" +
						"\t<div></div>" +
						"</div>"
		});

		let element = container;
		expect(element.children.length).toBe(1);

		element = element.children[0];
		expect(element.children.length).toBe(5);
	});

	it("case 4", async () => {
		const container = create("<div></div>").first();
		expect(container.children.length).toBe(0);

		const content = "<div>{content}</div>";
		let template = content + content + content + content;
		for(let i = 0; i < 100; i++)
			template = template.replace(/\{content\}/g, content);

		await new Renderer().render({
			container: container,
			data: {},
			template: 	template
		});
		expect(container.find("div").length > 100).toBe(true);
	});

	afterAll(() => {});
});

describe("Renderer Test - mode", () => {

	beforeAll(() => {});

	it("default (replace)", async () => {
		const container = create("<div></div>").first();

		const option = {
			container: container,
			data: {},
			template: "<div></div>"
		};
		await (await Renderer.build({template: "<div></div>"})).render(option);
		expect(container.children.length).toBe(1);
		await (await Renderer.build()).render(option);
		expect(container.children.length).toBe(1);
	});

	it("replace without target", async () => {
		const container = create("<div></div>").first();

		const option = {
			container: container,
			data: {},
			template: "<div></div>",
			mode: "replace"
		};
		await new Renderer().render(option);
		expect(container.children.length).toBe(1);
		new Renderer().render(option);
		expect(container.children.length).toBe(1);
	});

	it("replace with target", async () => {
		const container = create("<div><a></a></div>").first();
		const target = container.find("a").first();
		const option = {
			container: container,
			data: {},
			template: "<div></div>",
			mode: "replace",
			target: target
		};
		await new Renderer().render(option);
		expect(container.children.length).toBe(1);
		expect(container.children[0].tagName).toBe("DIV");
	});

	afterAll(() => {});
});

describe("Renderer Test - jstl remove test", () => {

	beforeAll(() => {});

	it("case 1", async () => {
		const container = create("<div></div>").first();
		expect(container.children.length).toBe(0);
		await new Renderer().render({
			container: container,
			data: {},
			template: "<jstl><div></div></jstl>"
		});

		expect(container.children.length).toBe(1);
		expect(container.children[0].tagName).toBe("DIV");
	});


	it("case 2", async () => {
		const container = create("<div></div>").first();
		expect(container.children.length).toBe(0);
		await new Renderer().render({
			container: container,
			data: {render: false},
			template: "<jstl jstl-if=\"${render}\"><div></div></jstl>"
		});

		expect(container.children.length).toBe(0);
	});

	it("case 3", async () => {
		const container = create("<div></div>").first();
		expect(container.children.length).toBe(0);
		await new Renderer().render({
			container: container,
			data: {render: true},
			template: "<jstl jstl-if=\"${render}\"><div></div></jstl>"
		});

		expect(container.children.length).toBe(1);
		expect(container.children[0].tagName).toBe("DIV");
	});

	afterAll(() => {});
});
