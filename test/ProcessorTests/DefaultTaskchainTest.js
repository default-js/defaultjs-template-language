import Processor from "@src/Processor";
import "@src/tasks";

describe("Default Processor Taskchain Test", function() {
	
	beforeAll(function(done){		
		done();
	});
	
	
	it("check chain", function(done){
	
		let chain = Processor.getTaskchain().chain;
		expect(chain.task.id).toBe("async");		
		chain = chain.next;
		expect(chain.task.id).toBe("if");
		chain = chain.next;
		expect(chain.task.id).toBe("include");
		chain = chain.next;
		expect(chain.task.id).toBe("data");
		chain = chain.next;
		expect(chain.task.id).toBe("foreach");
		chain = chain.next;
		expect(chain.task.id).toBe("choose");
		chain = chain.next;
		expect(chain.task.id).toBe("add-attribute");
		chain = chain.next;
		expect(chain.task.id).toBe("text");
		chain = chain.next;
		expect(chain.task.id).toBe("attribute");	
		
		done();
	});	
	
	afterAll(function() {
	});
});