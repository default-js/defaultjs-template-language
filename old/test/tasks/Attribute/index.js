import {Processor} from "@src/index.js";

const CONTAINER_SELECTOR= "#attribute-test-cases";
describe("Attribute Test", function() {
	const DATA = {
		test1 : "value1",
		test2 : "value2",
		test3 : "value3"
	};
	
	beforeAll(function(){
		window.document.body.append(create(window.__html__["test/sites/tasks/attribute/TestCase1.html"]));
	});
	
	it("single attribute test", function(){
		const container = find(CONTAINER_SELECTOR).first();
		let element = container.find(".test-case-1").first();
		return Processor.execute(element, DATA)
		.then(function(){
			element = container.find(".test-case-1").first();
			expect(element.attr("data-test-1")).toBe(DATA.test1);
		});
	});
	
	it("multible attributes test", function(){
		const container = find(CONTAINER_SELECTOR).first();
		let element = container.find(".test-case-2").first();
		return Processor.execute(element, DATA)
		.then(function(){
			element = container.find(".test-case-2").first();
			expect(element.attr("data-test-1")).toBe(DATA.test1);
			expect(element.attr("data-test-2")).toBe(DATA.test2);
			expect(element.attr("data-test-3")).toBe(DATA.test3);
			expect(element.attr("data-test-4")).toBe("no-replaced-value");
		});
	});
	
	it("single attribute with multiple values test", function(){
		const container = find(CONTAINER_SELECTOR).first();
		let element = container.find(".test-case-3").first();
		return Processor.execute(element, DATA)
		.then(function(){
			element = container.find(".test-case-3").first();
			expect(element.attr("data-test")).toBe("test " + DATA.test1 + " test " + DATA.test2 + " test");
		});
	});
	
	
	afterAll(function() {
		find(CONTAINER_SELECTOR).remove();
	});
});