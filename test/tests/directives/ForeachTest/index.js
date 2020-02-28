import Renderer from "@src/Renderer.js";

describe("Foreach Test - ", () => {
	
	beforeAll(() => {});
	
	it("foreach=[1,2,3,4,5]", async () => {		
		const container = create("<div></div>").first();		
		const renderer = await Renderer.build({template: "<div jstl-foreach=\"${list}\" jstl-foreach-var=\"item\" jstl-foreach-status=\"status\"><div>${item}-${status.index}</div></div>"});
		
		await renderer.render({container, data : {list: [1,2,3,4,5]}});
		let element = container.children[0];
		expect(element.children.length).toBe(5);
		for(let i = 0; i < element.children.length; i++){
			const item = element.children[i];
			expect(item.textContent).toBe((i + 1) + "-" + i);			
		}		
	});
	
	it("count=5", async () => {		
		const container = create("<div></div>").first();		
		const renderer = await Renderer.build({template: "<div jstl-foreach-count=\"${count}\" jstl-foreach-var=\"item\" jstl-foreach-status=\"status\"><div>${item}-${status.index}</div></div>"});
		
		await renderer.render({container, data : {count:5}});
		let element = container.children[0];
		expect(element.children.length).toBe(5);
		for(let i = 0; i < element.children.length; i++){
			const item = element.children[i];
			expect(item.textContent).toBe(i  + "-" + i);			
		}		
	});
	
	afterAll(() => {});
});