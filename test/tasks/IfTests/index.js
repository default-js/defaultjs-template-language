import el from "@src/index.js";
const Processor = el.Processor;

describe("If Task Test", function() {
	
	beforeAll(function(done){
		window.document.body.innerHTML = window.__html__["test/sites/tasks/if/TestCase1.html"];
		done();
	});
	
	
	it("if == true", function(done){	
		const element = find("#test-case-1").first();		
		const data = { test : true };
		Processor.execute(element, data)
		.then(function(aResult){
			
			const elements = find("#test-case-1").first();
			expect(elements).toBeDefined();			
			done();
		});
	});	
	
	it("if == false", function(done){	
		const element = find("#test-case-1").first();		
		const data = { test : false };
		Processor.execute(element, data)
		.then(function(aResult){
			
			const elements = find("#test-case-1").first();
			expect(elements).toBeUndefined();			
			done();
		});
	});	
	
	afterAll(function() {
		window.document.body.innerHTML = "";
	});
});