import {Processor} from "@src/index.js";

const CONTAINER_SELECTOR= "#if-test-cases";
describe("If Task Test", function() {
	
	beforeAll(function(){
		window.document.body.append(create(window.__html__["test/sites/tasks/if/TestCase1.html"]));
	});
	
	
	it("if == true", function(){
		const container = find(CONTAINER_SELECTOR).first();
		const element = container.find(".test-case-1").first();		
		const data = { test : true };
		return Processor.execute(element, data)
		.then(function(){			
			const element = container.find(".test-case-1").first();
			expect(element).toBeDefined();			
		});
	});	
	
	it("if == false", function(){	
		const container = find(CONTAINER_SELECTOR).first();
		const element = container.find(".test-case-2").first();		
		const data = { test : false };
		return Processor.execute(element, data)
		.then(function(){			
			const element = container.find(".test-case-2").first();
			expect(element).toBeUndefined();			
		});
	});	
	
	afterAll(function() {
		find(CONTAINER_SELECTOR).remove();
	});
});