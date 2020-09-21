import Renderer from "@src/Renderer.js";
import Template from "@src/Template.js";

describe("Choose Test - ", () => {
	
	beforeAll(() => {});
	
	it("case 1", async () => {
		const template = await Template.load(
			"<div jstl-choose>" +
				"<div jstl-when=\"${usecase==1}\">1</div>" +
				"<div jstl-when=\"${usecase==2}\">2</div>" + 
				"<div jstl-when=\"${usecase==3}\">3</div>" +
				"<div jstl-otherwise>otherwise</div>" +
			"</div>", false);
		const container = create("<div></div>").first();		
		const renderer = new Renderer({template});
		
		await renderer.render({container, data: {usecase : 1}});
		let element = container.children[0];		
		expect(element.children.length).toBe(1);
		expect(element.children[0].textContent).toBe("1");
		
		await renderer.render({container, data: {usecase : 2}});
		element = container.children[0];		
		expect(element.children.length).toBe(1);
		expect(element.children[0].textContent).toBe("2");		
		
		await renderer.render({container, data: {usecase : 100}});
		element = container.children[0];		
		expect(element.children.length).toBe(1);
		expect(element.children[0].textContent).toBe("otherwise");
	});
	
	
	afterAll(() => {});
});