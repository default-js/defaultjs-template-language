import Template from "@src/Template.js";
import Renderer from "@src/Renderer.js";


const base = "<div class=\"test-${classname}\">${testValue} ${promiseFunction()}\n{content}</div>";
const buildContent = ({count, template=base}) => {
	if(count == 1)
		return base;
		
	let content = []; 
	for(let i = 0; i < count; i++)
		content.push(base);
	
	return content.join("");
}

const build = ({depth, count, string = null, index = 0, template }) => {
	if(index >= depth)
		return string.replace(/\{content\}/g, "");
	
	return build({string: (string ? string.replace(/\{content\}/g, buildContent({count, template})) : buildContent({count, template})), index: index+1, depth, count, template});
};



describe("Performance Test - deep element processing", () => {

	beforeAll(() => { });

	it("case 1 - depth=5000, count=1", async () => {
		const depth = 5000;
		const count = 1;
		const html = build({depth, count});
		const template = await Template.load(html, false);
		const container = create("<div></div>").first();
		document.body.append(container);
		const renderer = new Renderer({ template });
		const data = {
			classname: "test-class",
			testValue: "test-value",
			promiseFunction: function() {
				return Promise.resolve("promise-value");
			}
		};

		const start = Date.now();
		await renderer.render({ data, container });
		const end = Date.now();
		console.log("")
		const elements = container.find(":scope *");		

		console.log("many element process", elements.length, "elements at", (end - start), "ms");
		expect(elements.length).toBe(depth);
		container.remove();
	});
	
	it("case 2 - depth=15 count=3", async () => {
		const depth = 10;
		const count = 3;
		const html = build({depth, count, template:"<div>{content}</div>"});
		const template = await Template.load(html, false);
		const container = create("<div></div>").first();
		document.body.append(container);
		const renderer = new Renderer({ template });
		const data = {
			classname: "test-class",
			testValue: "test-value",
			promiseFunction: function() {
				return Promise.resolve("promise-value");
			}
		};

		const start = Date.now();
		await renderer.render({ data, container });
		const end = Date.now();
		console.log("")
		const elements = container.find(":scope *");		

		console.log("many element process", elements.length, "elements at", (end - start), "ms");
		container.remove();
	});
	
	it("case 3 - depth=1 count=100000", async () => {
		const depth = 1;
		const count = 100000;
		const html = build({depth, count, template:"<div>{content}</div>"});
		const template = await Template.load(html, false);
		const container = create("<div></div>").first();
		document.body.append(container);
		const renderer = new Renderer({ template });
		const data = {
			classname: "test-class",
			testValue: "test-value",
			promiseFunction: function() {
				return Promise.resolve("promise-value");
			}
		};

		const start = Date.now();
		await renderer.render({ data, container });
		const end = Date.now();
		console.log("")
		const elements = container.find(":scope *");		

		console.log("many element process", elements.length, "elements at", (end - start), "ms");
		container.remove();
	});

	afterAll(() => { });
});