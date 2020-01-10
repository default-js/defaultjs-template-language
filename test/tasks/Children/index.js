import {Processor} from "@src/index.js";

const CONTAINER_SELECTOR= "#children-test-cases";
describe("Children Task Test", function() {
	
	beforeAll(function(){
		window.document.body.append(create(window.__html__["test/sites/tasks/children/TestCase1.html"]));
	});
	
	
	it("test", function(){
		let container = find(CONTAINER_SELECTOR).first();
		const data = { test : false };
		return Processor.execute(container, data)
		.then(function(){
			container = find(CONTAINER_SELECTOR).first();
			let element = container.find(".result-1").first();
			expect(element).toBeDefined();
			element = container.find(".result-2").first();
			expect(element).toBeUndefined();
			element = container.find(".result-3").first();
			expect(element).toBeUndefined();
			element = container.find(".result-4").first();
			expect(element).toBeDefined();
		});
	});	
	
	afterAll(function() {
		find(CONTAINER_SELECTOR).remove();
	});
});