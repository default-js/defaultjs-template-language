import {Processor} from "@src/index.js";

describe("Attribute Test", function() {
	const DATA = {
		test1 : "value1",
		test2 : "value2",
		test3 : "value3"
	};
	
	beforeAll(function(){
		window.document.body.innerHTML = window.__html__["test/sites/tasks/attribute/TestCase1.html"];
	});
	
	it("single attribute test", function(done){	
		const element = find("#test-case-1").first();
		Processor.execute(element, DATA)
		.then(function(){
			expect(element.attr("data-test-1")).toBe(DATA.test1);
		})["catch"](function(aError){
			expect(aError).toBeUndefined();
		})["finally"](done);
	});
	
	it("multible attributes test", function(done){	
		const element = find("#test-case-2").first();
		Processor.execute(element, DATA)
		.then(function(){
			expect(element.attr("data-test-1")).toBe(DATA.test1);
			expect(element.attr("data-test-2")).toBe(DATA.test2);
			expect(element.attr("data-test-3")).toBe(DATA.test3);
			expect(element.attr("data-test-4")).toBe("no-replaced-value");
		})["catch"](function(aError){
			expect(aError).toBeUndefined();
		})["finally"](done);
	});
	
	it("single attribute with multiple values test", function(done){	
		const element = find("#test-case-3").first();
		Processor.execute(element, DATA)
		.then(function(){
			expect(element.attr("data-test")).toBe("test " + DATA.test1 + " test " + DATA.test2 + " test");
		})["catch"](function(aError){
			expect(aError).toBeUndefined();
		})["finally"](done);
	});
	
	
	afterAll(function() {
		window.document.body.innerHTML = "";
	});
});