import { Renderer } from "../../../../index";

describe("Repeat Test - ", () => {
	
	beforeAll(() => {});
	it("repeat=[1,2,3,4,5]", async () => {		
		const container = create("<div></div>").first();		
		const renderer = await Renderer.build({template: `<div jstl-repeat="\${list}" jstl-repeat-var="item" jstl-repeat-status="status">\${item}-\${status.index}</div>`});
		
		await renderer.render({container, data : {list: [1,2,3,4,5]}});

		let element = container;
		expect(container.children.length).toBe(5);
		for(let i = 0; i < container.children.length; i++){
			const item = container.children[i];
			expect(item.textContent).toBe((i + 1) + "-" + i);			
		}		
	});
	
	it("jstl-repeat-count=5", async () => {		
		const container = create("<div></div>").first();		
		const renderer = await Renderer.build({template: `<div jstl-repeat-count="\${count}" jstl-repeat-var="item" jstl-repeat-status="status">\${item}-\${status.index}</div>`});
		
		await renderer.render({container, data : {count:5}});

		expect(container.children.length).toBe(5);
		for(let i = 0; i < container.children.length; i++){
			const item = container.children[i];
			expect(item.textContent).toBe(i  + "-" + i);			
		}		
	});


	it("create options at select tag", async () => {		
		const container = create("<select></select>").first();
		document.body.append(container);
		const renderer = await Renderer.build({template: `<option jstl-repeat-count="\${count}" jstl-repeat-var="item" jstl-repeat-status="status">\${item}-\${status.index}</option>`});
		
		await renderer.render({container, data : {count:5}});

		expect(container.children.length).toBe(5);
		for(let i = 0; i < container.children.length; i++){
			const item = container.children[i];
			expect(item.textContent).toBe(i  + "-" + i);			
		}
		
		container.remove();
	});
	
	afterAll(() => {});
});