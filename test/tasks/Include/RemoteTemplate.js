import {Processor} from "@src/index.js";

const CONTAINER_SELECTOR= "#include-test-cases-remote";
describe("Include - remote template Task Test", function() {
	
	beforeAll(function(){
		window.document.body.append(create(window.__html__["test/sites/tasks/include/RemoteTemplateTest.html"]));
	});
	
	it("include test", function(){	
		const container = find(CONTAINER_SELECTOR).first();
		const element = container.find(".test-case-1").first();		
		const data = { test : "value" };
		return Processor.execute(element, data)
		.then(function(){			
			const element = container.find(".test-case-1 .result").first();
			expect(element.textContent).toBe("value");			
		});
	});
	
	afterAll(function() {
		//find(CONTAINER_SELECTOR).remove();
	});
});