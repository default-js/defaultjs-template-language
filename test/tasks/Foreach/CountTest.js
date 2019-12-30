import {Processor} from "@src/index.js";

const CONTAINER_SELECTOR= "#foreach-count-test-cases";
describe("Foreach Count Test", function() {
	
	beforeAll(function(){
		window.document.body.append(create(window.__html__["test/sites/tasks/foreach/CountTest.html"]));
	});
	
	
	it("count test", function(){
		const container = find(CONTAINER_SELECTOR).first();
		const data = {};
		return Processor.execute(container, data)
		.then(function(){			
			const elements = container.find("*");
			expect(elements.length).toBe(10);	
		});
	});	
	
	afterAll(function() {
		find(CONTAINER_SELECTOR).remove();
	});
});