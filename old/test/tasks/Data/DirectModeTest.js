import {Processor} from "@src/index.js";

const CONTAINER_SELECTOR= "#data-test-cases-direct";
describe("Data Task Test", function() {
	
	beforeAll(function(){
		window.document.body.append(create(window.__html__["test/sites/tasks/data/DirectModeTest.html"]));
	});
	
	it("data mode direct test", function(){	
		const container = find(CONTAINER_SELECTOR).first();
		const element = container.find(".test-case-1").first();		
		const data = { };
		return Processor.execute(element, data)
		.then(function(){			
			const element = container.find(".test-case-1 .result").first();
			expect(element.textContent).toBe("value");			
		});
	});
	
	it("data mode direct test, override context data", function(){	
		const container = find(CONTAINER_SELECTOR).first();
		const element = container.find(".test-case-2").first();		
		const data = { "test" : "fail"};
		return Processor.execute(element, data)
		.then(function(){			
			const element = container.find(".test-case-2 .result").first();
			expect(element.textContent).toBe("value");			
		});
	});
	
	it("data mode direct test, jstl-data-default", function(){	
		const container = find(CONTAINER_SELECTOR).first();
		const element = container.find(".test-case-3").first();		
		const data = {
			"data" : undefined
		};
		return Processor.execute(element, data)
		.then(function(){			
			const element = container.find(".test-case-3 .result").first();
			expect(element.textContent).toBe("default");			
		});
	});
	
	afterAll(function() {
		find(CONTAINER_SELECTOR).remove();
	});
});