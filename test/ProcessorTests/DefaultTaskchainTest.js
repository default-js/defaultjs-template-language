import Processor from "@src/Processor";
import "@src/tasks";

describe("Default Processor Taskchain Test", function() {
	
	beforeAll(function(done){		
		done();
	});
	
	
	it("check chain", function(){	
		let chain = Processor.getTaskchain().chain;
		expect(chain.id).toBe("async");		
		chain = chain.next;
		expect(chain.id).toBe("if");
		chain = chain.next;
		expect(chain.id).toBe("include");
		chain = chain.next;
		expect(chain.id).toBe("data");
		chain = chain.next;
		expect(chain.id).toBe("foreach");
		chain = chain.next;
		expect(chain.id).toBe("choose");
		chain = chain.next;
		expect(chain.id).toBe("add-attribute");
		chain = chain.next;
		expect(chain.id).toBe("text");
		chain = chain.next;
		expect(chain.id).toBe("attribute");
	});	
	
	afterAll(function() {
	});
});