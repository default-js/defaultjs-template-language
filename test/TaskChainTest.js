import TaskChain from "../src/TaskChain";
import Constants from "../src/Constants";

describe("TaskChain Test", function() {
	
	beforeAll(function(done){		
		done();
	});
	
	
	it("add task test", function(done){
		
		const task = {
			title: "task 1",
			accept : function(){
				return Promise.resolve(true);
			},
			execute : function(aContext){
				return Promise.resolve(aContext);
			}
		};		
		
		TaskChain.add(task);
		
		
		expect(TaskChain.getChain().task).toBe(task);
		expect(TaskChain.getChain().phase).toBe(Constants.PHASE.FINISH);
	});	
	
	afterAll(function() {
	});
});