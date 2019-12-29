import tl from "@src/index.js";
const Processor = tl.Processor;

describe("Simplet Text Test", function() {
	let content = null;
	
	
	beforeAll(function(done){
		window.document.body.innerHTML = window.__html__["test/sites/tasks/text/TestCase1.html"];
		done();
	});
	
	
	it("single line text test", function(){	
		const element = find("#test-case-1").first();		
		const data = {text:"text"};
		return Processor.execute(element, data)
		.then(function(){
			expect(element.textContent).toBe("this is a text");
		});
	});	
	

	it("single line text with multi values test", function(){	
		const element = find("#test-case-2").first();		
		const data = {
			text1 : "text-1",
			text2 : "text-2",
			text3 : "text-3",
		};
		return Processor.execute(element, data)
		.then(function(){
			expect(element.textContent).toBe("this is a text-1, a text-2 and a text-3");
		});
	});	
	
	it("multi line text with multi values and tags between test", function(){	
		const element = find("#test-case-3").first();		
		const data = {
			text1 : "text-1",
			text2 : "text-2",
			text3 : "text-3",
		};
		return Processor.execute(element, data)
		.then(function(){
			expect(element.textContent).toBe("this is a text-1, a text-2 and a text-3");
		});
	});
	
	it("add html tags as text test", function(){	
		const element = find("#test-case-4").first();		
		const data = {text:"<b>html-tag</b>"};
		return Processor.execute(element, data)
		.then(function(){
			expect(element.textContent).toBe("this is a html tags as text: <b>html-tag</b>");
		});
	});	
	
	afterAll(function() {
		window.document.body.innerHTML = "";
	});
});