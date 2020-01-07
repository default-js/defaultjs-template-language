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
	
	it("include, dynamic template url test", function(){	
		const container = find(CONTAINER_SELECTOR).first();
		const element = container.find(".test-case-2").first();		
		const data = { 
			template: "include-test-case-1.tpl.html",
			test : "value" 
		};
		return Processor.execute(element, data)
		.then(function(){			
			const element = container.find(".test-case-2 .result").first();
			expect(element.textContent).toBe("value");
		});
	});
	
	it("include, prepend test", function(){	
		const container = find(CONTAINER_SELECTOR).first();
		const element = container.find(".test-case-4").first();		
		const data = {
			resultId : 1,
			test : "value" 
		};
		return Processor.execute(element, data)
		.then(function(){
			data.resultId++;
			return Processor.execute(element, data);
		}).then(function(){
			const elements = container.find(".test-case-4 .result");
			expect(elements.length).toBe(2);
			expect(elements[0].is(".id-2")).toBe(true);
			expect(elements[1].is(".id-1")).toBe(true);
		});
	});
	
	afterAll(function() {
		find(CONTAINER_SELECTOR).remove();
	});
});