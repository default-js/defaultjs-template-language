import {Processor} from "@src/index.js";

const CONTAINER_SELECTOR= "#text-html-test-cases";
describe("HTML Text Test", function() {	
	
	beforeAll(function(){
		window.document.body.append(create(window.__html__["test/sites/tasks/text/HtmlTestCase.html"]));
	});
	
	
	it("single html content test", function(){
		const container = find(CONTAINER_SELECTOR).first();
		const element = container.find(".test-case-1").first();		
		const data = {html:"<div></div>"};
		return Processor.execute(element, data)
		.then(function(){
			const content = element.find("*");
			
			expect(content.length).toBe(1);
			expect(content[0].tagName).toBe("DIV");
		});
	});
	
	it("multiple html contents from one textnode test", function(){
		const container = find(CONTAINER_SELECTOR).first();
		const element = container.find(".test-case-2").first();		
		const data = {
			html1:"<b>html-1</b>",
			html2:"<b>html-2</b>",
			html3:"NO-HTML-CONTENT"
		};
		return Processor.execute(element, data)
		.then(function(){
			const content = element.content();
			
			expect(content.length).toBe(5);
			expect(content[0].nodeType).toBe(Node.TEXT_NODE);
			expect(content[1].tagName).toBe("B");
			expect(content[2].nodeType).toBe(Node.TEXT_NODE);
			expect(content[3].tagName).toBe("B");
			expect(content[4].nodeType).toBe(Node.TEXT_NODE);
		});
	});
	
	it("single html contents with other sibling nodes test", function(){
		const container = find(CONTAINER_SELECTOR).first();
		const element = container.find(".test-case-3").first();		
		const data = {
			html:"<div id=\"result\">html-1</div>"
		};
		return Processor.execute(element, data)
		.then(function(){
			const content = element.find("div");
			const result = element.find("#result").first();
			
			expect(result).toBeDefined();
			
			expect(content.length).toBe(3);
			expect(content[0].tagName).toBe("DIV");
			expect(content[1].tagName).toBe("DIV");
			expect(content[2].tagName).toBe("DIV");
			
			expect(content[1]).toBe(result);
			
		});
	});
	
	afterAll(function() {
		find(CONTAINER_SELECTOR).remove();
	});
});