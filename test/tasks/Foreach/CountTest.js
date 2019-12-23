import tl from "@src/index.js";
const Processor = tl.Processor;

describe("Foreach Count Test", function() {
	
	beforeAll(function(done){
		window.document.body.innerHTML = window.__html__["test/sites/tasks/foreach/CountTest.html"];
		done();
	});
	
	
	it("count test", function(done){	
		const element = find("#test-case-1").first();		
		const data = {};
		Processor.execute(element, data)
		.then(function(aResult){
			
			const elements = find("#test-case-1 *");
			expect(elements.length).toBe(10);			
			done();
		});
	});	
	
	afterAll(function() {
		//window.document.body.innerHTML = "";
	});
});