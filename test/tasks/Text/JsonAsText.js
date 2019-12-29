import tl from "@src/index.js";
const Processor = tl.Processor;

describe("Text Test", function() {
	let content = null;
	
	
	beforeAll(function(done){
		window.document.body.innerHTML = window.__html__["test/sites/tasks/text/TestCase1.html"];
		done();
	});
	
	
	it("single line text test", function(done){	
		const element = find("#test-case-1").first();		
		const data = {text:"text"};
		Processor.execute(element, data)
		.then(function(aResult){
			expect(element.textContent).toBe("this is a text");
			done();
		});
	});	
	

	it("single line text with multi values test", function(done){	
		const element = find("#test-case-2").first();		
		const data = {
			text1 : "text-1",
			text2 : "text-2",
			text3 : "text-3",
		};
		Processor.execute(element, data)
		.then(function(aResult){
			expect(element.textContent).toBe("this is a text-1, a text-2 and a text-3");
			done();
		});
	});	
	
	it("multi line text with multi values and tags between test", function(done){	
		const element = find("#test-case-3").first();		
		const data = {
			text1 : "text-1",
			text2 : "text-2",
			text3 : "text-3",
		};
		Processor.execute(element, data)
		.then(function(){
			expect(element.textContent).toBe("this is a text-1, a text-2 and a text-3");
		})["catch"](function(aError){
			console.error(aError);
			expect(aError).toBeUndefined();
		})["finally"](done);
	});	
	
	afterAll(function() {
		window.document.body.innerHTML = "";
	});
});