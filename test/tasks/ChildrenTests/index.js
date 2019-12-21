import tl from "@src/index.js";
const Processor = tl.Processor;

describe("Children Task Test", function() {
	
	beforeAll(function(done){
		window.document.body.innerHTML = window.__html__["test/sites/tasks/children/TestCase1.html"];
		done();
	});
	
	
	it("test", function(done){	
		const element = find("#test-case").first();		
		const data = { test : true };
		Processor.execute(element, data)
		.then(function(aResult){
			
			let element = find("#result-1").first();
			expect(element).toBeDefined();
			element = find("#result-2").first();
			expect(element).toBeUndefined();
			element = find("#result-3").first();
			expect(element).toBeUndefined();
			element = find("#result-4").first();
			expect(element).toBeDefined();			
			
			done();
		});
	});	
	
	afterAll(function() {
		window.document.body.innerHTML = "";
	});
});