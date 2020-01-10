import {Processor} from "@src/index.js";

const CONTAINER_SELECTOR= "#choose-test-cases";
describe("Choose Task Test", function() {
	
	beforeAll(function(){
		window.document.body.append(create(window.__html__["test/sites/tasks/choose/TestCase1.html"]));
	});
	
	
	it("choose -> first when test", function(){		
		const container = find(CONTAINER_SELECTOR).first();
		let testElement = container.find(".test-case-1").first();		
		const data = { 
			case1 : true,
			case2 : true,
			case3 : true
		};
		return Processor.execute(testElement, data)
		.then(function(){
			testElement = container.find(".test-case-1").first();
			let element = testElement.find(":scope > .case-1").first();
			expect(element).toBeDefined();
			element = testElement.find(":scope > .case-2").first();
			expect(element).toBeUndefined();
			element = testElement.find(":scope > .case-3").first();
			expect(element).toBeUndefined();
			element = testElement.find(":scope > .case-otherwise").first();
			expect(element).toBeUndefined();
		});
	});	
	
	it("choose -> last when test", function(){
		const container = find(CONTAINER_SELECTOR).first();
		let testElement = container.find(".test-case-2").first();		
		const data = { 
			case1 : false,
			case2 : false,
			case3 : true
		};
		return Processor.execute(testElement, data)
		.then(function(){
			testElement = container.find(".test-case-2").first();
			let element = testElement.find(":scope > .case-1").first();
			expect(element).toBeUndefined();
			element = testElement.find(":scope > .case-2").first();
			expect(element).toBeUndefined();
			element = testElement.find(":scope > .case-3").first();
			expect(element).toBeDefined();
			element = testElement.find(":scope > .case-otherwise").first();
			expect(element).toBeUndefined();
		});
	});	
	
	it("choose -> otherwise test", function(){
		const container = find(CONTAINER_SELECTOR).first();
		let testElement = container.find(".test-case-3").first();		
		const data = { 
			case1 : false,
			case2 : false,
			case3 : false
		};
		return Processor.execute(testElement, data)
		.then(function(){
			testElement = container.find(".test-case-3").first();
			let element = testElement.find(":scope > .case-1").first();
			expect(element).toBeUndefined();
			element = testElement.find(":scope > .case-2").first();
			expect(element).toBeUndefined();
			element = testElement.find(":scope > .case-3").first();
			expect(element).toBeUndefined();
			element = testElement.find(":scope > .case-otherwise").first();
			expect(element).toBeDefined();
		});
	});	
	
	it("choose ignore other tags test", function(){
		const container = find(CONTAINER_SELECTOR).first();
		let testElement = container.find(".test-case-4").first();		
		const data = { 
			case1 : false,
			case2 : false,
			case3 : false
		};
		return Processor.execute(testElement, data)
		.then(function(){
			testElement = container.find(".test-case-4").first();
			let element = testElement.find(":scope > .case-1").first();
			expect(element).toBeUndefined();
			element = testElement.find(":scope > .case-2").first();
			expect(element).toBeUndefined();
			element = testElement.find(":scope > .case-3").first();
			expect(element).toBeUndefined();
			element = testElement.find(":scope > .case-otherwise").first();
			expect(element).toBeDefined();
			
			const others = testElement.find(":scope > .ignore");
			expect(others.length).toBe(5);
			
		});
	});		
	
	afterAll(function() {
		find(CONTAINER_SELECTOR).remove();
	});
});