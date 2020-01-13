import TaskChain from "../src/TaskChain";
import Constants from "../src/Constants";

describe("TaskChain Test", function() {
	
	beforeAll(function(done){		
		done();
	});
	
	
	it("add one task without a phase", function(){
		const taskchain = new TaskChain();
	
		const task = {
			id: "task 1",
			execute : function(aContext){
				return Promise.resolve(aContext);
			}
		};		
		
		taskchain.add(task);
		
		let chain = taskchain.chain;
		expect(chain.id).toBe(task.id);
		expect(chain.phase).toBe(Constants.PHASE.FINISH);
	});	
	
	it("add one task with a phase", function(){
		const taskchain = new TaskChain();
		const task = {
			id: "task 1",
			execute : function(aContext){
				return Promise.resolve(aContext);
			}
		};		
		
		taskchain.add(task, Constants.PHASE.INIT);
		
		let chain = taskchain.chain;
		expect(chain.id).toBe(task.id);
		expect(chain.phase).toBe(Constants.PHASE.INIT);
	});
	
	
	it("add two tasks test", function(){
		const taskchain = new TaskChain();
		taskchain.add({
			id: "task 1",
			execute : function(aContext){
				return Promise.resolve(aContext);
			}
		}, Constants.PHASE.INIT);
		
		taskchain.add({
			id: "task 2",
			execute : function(aContext){
				return Promise.resolve(aContext);
			}
		}, Constants.PHASE.INIT);
		
		let chain = taskchain.chain;
		expect(chain.id).toBe("task 1");
		chain = chain.next;
		expect(chain.id).toBe("task 2");
	});	
	
	it("add three tasks test", function(done){
		const taskchain = new TaskChain();
		taskchain.add({
			id: "task 1",
			accept : function(){
				return Promise.resolve(true);
			},
			execute : function(aContext){
				return Promise.resolve(aContext);
			}
		}, Constants.PHASE.INIT);
		
		taskchain.add({
			id: "task 2",
			accept : function(){
				return Promise.resolve(true);
			},
			execute : function(aContext){
				return Promise.resolve(aContext);
			}
		}, Constants.PHASE.INIT);
		
		taskchain.add({
			id: "task 3",
			accept : function(){
				return Promise.resolve(true);
			},
			execute : function(aContext){
				return Promise.resolve(aContext);
			}
		}, Constants.PHASE.INIT);
		
		let chain = taskchain.chain;
		expect(chain.task.id).toBe("task 1");
		chain = chain.next;
		expect(chain.task.id).toBe("task 2");
		chain = chain.next;
		expect(chain.task.id).toBe("task 3");
		
		done();
	});	
	
	
	it("add task as first task", function(done){
		
		// prepare chain for test
		const taskchain = new TaskChain();
		taskchain.add({
			id: "task 2",
			accept : function(){
				return Promise.resolve(true);
			},
			execute : function(aContext){
				return Promise.resolve(aContext);
			}
		}, Constants.PHASE.CONDITION);
		
		taskchain.add({
			id: "task 3",
			accept : function(){
				return Promise.resolve(true);
			},
			execute : function(aContext){
				return Promise.resolve(aContext);
			}
		}, Constants.PHASE.CONTEXT);
		
		// start test
		
		taskchain.add({
			id: "task 1",
			accept : function(){
				return Promise.resolve(true);
			},
			execute : function(aContext){
				return Promise.resolve(aContext);
			}
		}, Constants.PHASE.INIT);
		
		let chain = taskchain.chain;
		expect(chain.task.id).toBe("task 1");
		chain = chain.next;
		expect(chain.task.id).toBe("task 2");
		chain = chain.next;
		expect(chain.task.id).toBe("task 3");		
		
		done();
	});	
	
	it("add task as last task", function(done){
		
		// prepare chain for test
		const taskchain = new TaskChain();
		taskchain.add({
			id: "task 1",
			accept : function(){
				return Promise.resolve(true);
			},
			execute : function(aContext){
				return Promise.resolve(aContext);
			}
		}, Constants.PHASE.CONDITION);
		
		taskchain.add({
			id: "task 2",
			accept : function(){
				return Promise.resolve(true);
			},
			execute : function(aContext){
				return Promise.resolve(aContext);
			}
		}, Constants.PHASE.CONTEXT);
		
		// start test
		
		taskchain.add({
			id: "task 3",
			accept : function(){
				return Promise.resolve(true);
			},
			execute : function(aContext){
				return Promise.resolve(aContext);
			}
		}, Constants.PHASE.FINISH);
		
		let chain = taskchain.chain;
		expect(chain.task.id).toBe("task 1");
		chain = chain.next;
		expect(chain.task.id).toBe("task 2");
		chain = chain.next;
		expect(chain.task.id).toBe("task 3");		
		
		done();
	});	
	
	it("add task into the middle", function(done){
		
		// prepare chain for test
		const taskchain = new TaskChain();
		taskchain.add({
			id: "task 1",
			accept : function(){
				return Promise.resolve(true);
			},
			execute : function(aContext){
				return Promise.resolve(aContext);
			}
		}, Constants.PHASE.INIT);
		
		taskchain.add({
			id: "task 3",
			accept : function(){
				return Promise.resolve(true);
			},
			execute : function(aContext){
				return Promise.resolve(aContext);
			}
		}, Constants.PHASE.CONTEXT);
		
		// start test
		
		taskchain.add({
			id: "task 2",
			accept : function(){
				return Promise.resolve(true);
			},
			execute : function(aContext){
				return Promise.resolve(aContext);
			}
		}, Constants.PHASE.CONDITION);
		
		let chain = taskchain.chain;
		expect(chain.task.id).toBe("task 1");
		chain = chain.next;
		expect(chain.task.id).toBe("task 2");
		chain = chain.next;
		expect(chain.task.id).toBe("task 3");		
		
		done();
	});	
	
	afterAll(function() {
	});
});