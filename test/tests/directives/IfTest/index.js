import Renderer from "@src/Renderer.js";

describe("If Test - ", () => {
	
	beforeAll(() => {});
	
	it("jstl-if=${render} render=true", async () => {
		const container = create("<div></div>").first();		
		const renderer = await Renderer.build({template: "<div jstl-if=\"${render}\"></div>"});
		await renderer.render({container, data : {render : true}});		
		expect(container.children.length).toBe(1);
	});
	
	it("jstl-if=${render} render=false", async () => {		
		const container = create("<div></div>").first();		
		const renderer = await Renderer.build({template: "<div jstl-if=\"${render}\"></div>"});
		await renderer.render({container, data : {render : false}});		
		expect(container.children.length).toBe(0);
	});
	
	
	it("jstl-if=${render} render=false -> no other directive executed", async () => {		
		const container = create("<div></div>").first();		
		const renderer = await Renderer.build({template: "<div jstl-if=\"${render}\" attr=\"test\"></div>"});
		await renderer.render({container, data : {render : false}});		
		expect(container.children.length).toBe(0);
	});
	
	it("jstl-if=${render} render=false -> don't execute children", async () => {		
		const container = create("<div></div>").first();
		let fail = false;
		const renderer = await Renderer.build({template: "<div jstl-if=\"${render}\"><div>${executed()}</div></div>", data : {
			executed : () =>{ fail = true}
		}});
		await renderer.render({container, data : {render : false}});		
		expect(container.children.length).toBe(0);
		expect(fail).toBe(false);
	});
	
	afterAll(() => {});
});