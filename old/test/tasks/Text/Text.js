import {Processor} from "@src/index.js";
import StringUtils from "@src/utils/StringUtils";

const CONTAINER_SELECTOR= "#text-text-test-cases";
describe("Simplet Text Test", function() {
	
	beforeAll(function(){
		window.document.body.append(create(window.__html__["test/sites/tasks/text/TextTestCase.html"]));
	});
	
	
	it("single line text test", function(){
		const container = find(CONTAINER_SELECTOR).first();
		let element = container.find(".test-case-1").first();		
		const data = {text:"text"};
		return Processor.execute(element, data)
		.then(function(){
			element = container.find(".test-case-1").first();	
			expect(element.textContent).toBe("this is a text");
		});
	});	
	

	it("single line text with multi values test", function(){
		const container = find(CONTAINER_SELECTOR).first();
		let element = container.find(".test-case-2").first();		
		const data = {
			text1 : "text-1",
			text2 : "text-2",
			text3 : "text-3",
		};
		return Processor.execute(element, data)
		.then(function(){
			element = container.find(".test-case-2").first();
			expect(element.textContent).toBe("this is a text-1, a text-2 and a text-3");
		});
	});	
	
	it("multi line text with multi values and tags between test", function(){
		const container = find(CONTAINER_SELECTOR).first();
		let element = container.find(".test-case-3").first();		
		const data = {
			text1 : "text-1",
			text2 : "text-2",
			text3 : "text-3",
		};
		return Processor.execute(element, data)
		.then(function(){
			element = container.find(".test-case-3").first();
			expect(element.textContent).toBe("this is a text-1, a text-2 and a text-3");
		});
	});
	
	it("add html tags as text test", function(){
		const container = find(CONTAINER_SELECTOR).first();
		let element = container.find(".test-case-4").first();		
		const data = {text:"<b>html-tag</b>"};
		return Processor.execute(element, data)
		.then(function(){
			element = container.find(".test-case-4").first();
			expect(element.textContent).toBe("this is a html tags as text: <b>html-tag</b>");
		});
	});
	
	it("prevent text format test", function(){
		const container = find(CONTAINER_SELECTOR).first();
		let element = container.find(".test-case-5").first();		
		const data = {text:"line\n\tline\n\tline\n\tline"};
		return Processor.execute(element, data)
		.then(function(){
			element = container.find(".test-case-5").first();		
			const content = element.content();
			
			expect(content.length).toBe(7);
			expect(content[0].nodeType).toBe(Node.TEXT_NODE);
			expect(content[0].textContent).toBe("line");
			expect(content[1].tagName).toBe("BR");
			expect(content[2].nodeType).toBe(Node.TEXT_NODE);
			expect(content[2].textContent).toBe("    line");
			expect(content[3].tagName).toBe("BR");
			expect(content[4].nodeType).toBe(Node.TEXT_NODE);
			expect(content[4].textContent).toBe("    line");
			expect(content[5].tagName).toBe("BR");
			expect(content[6].nodeType).toBe(Node.TEXT_NODE);
			expect(content[6].textContent).toBe("    line");
		});
	});
	
	it("trim length text test", function(){
		const container = find(CONTAINER_SELECTOR).first();
		let element = container.find(".test-case-6").first();		
		const data = {text:"this a text with more then ten chars at once."};
		return Processor.execute(element, data)
		.then(function(){
			element = container.find(".test-case-6").first();		
			expect(element.textContent).toBe(StringUtils.trimTextLength(data.text, 10));
		});
	});
	
	it("trim length text test, but text length is less then 10", function(){
		const container = find(CONTAINER_SELECTOR).first();
		let element = container.find(".test-case-7").first();		
		const data = {text:"text"};
		return Processor.execute(element, data)
		.then(function(){
			element = container.find(".test-case-7").first();
			expect(element.textContent).toBe(StringUtils.trimTextLength(data.text, 10));
		});
	});
	
	
	
	afterAll(function() {
		find(CONTAINER_SELECTOR).remove();
	});
});