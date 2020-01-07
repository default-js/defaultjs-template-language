import {Processor} from "@src/index.js";

const CONTAINER_SELECTOR= "#include-performance-test-cases-many-element-processing";
describe("Performance Test - many element processing", function() {
	
	beforeAll(function(){
		const start = Date.now();
		window.document.body.append(create(window.__html__["test/sites/performance/IncludeManyElementProcessingTest.html"]));
		const end = Date.now();
		console.log("append test html at:", (end - start), "ms");
	});
	
	it("Inline Template", function(){	
		const container = find(CONTAINER_SELECTOR).first();
		const element = container.find(".test-case-1").first();		
		const data = { 
			classname : "test-class",
			testValue : "test-value",
			promiseFunction : function(){
				return Promise.resolve("promise-value");
			}
		};
		const start = Date.now();
		return Processor.execute(element, data)
		.then(function(){			
			const elements = container.find(".test-case-1 > *");
			const end = Date.now();
			console.log("include process", elements.length, "elements at" , (end - start), "ms");
		});
	});
	
	afterAll(function() {
		//find(CONTAINER_SELECTOR).remove();
	});
});