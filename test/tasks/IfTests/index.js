import {Processor} from "@src/index.js";

describe("If Task Test", function() {
	
	beforeAll(function(){
		window.document.body.innerHTML = window.__html__["test/sites/tasks/if/TestCase1.html"];
	});
	
	
	it("if == true", function(done){	
		const element = find("#test-case-1").first();		
		const data = { test : true };
		Processor.execute(element, data)
		.then(function(){			
			const element = find("#test-case-1").first();
			expect(element).toBeDefined();			
		})["finally"](done);
	});	
	
	it("if == false", function(done){	
		const element = find("#test-case-1").first();		
		const data = { test : false };
		Processor.execute(element, data)
		.then(function(){			
			const element = find("#test-case-1").first();
			expect(element).toBeUndefined();			
			done();
		})["finally"](done);
	});	
	
	afterAll(function() {
		window.document.body.innerHTML = "";
	});
});