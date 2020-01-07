import Constants from "./Constants";

const insert = function(aEntry, aChain){	
	if(aChain == null)
		return aEntry;
	
	let parent = null;
	let current = aChain;
	while(current != null){
		if(current.phase > aEntry.phase){
			aEntry.next = current
			if(parent == null)						
				return aEntry;
			else{
				parent.next = aEntry;
				return aChain;
			}
		}			
		parent = current;
		current = current.next;
	}
	
	parent.next = aEntry;	
	return aChain;
};

const executeChain = function(aContext, aChain){	
	return Promise.resolve(aChain.task.accept(aContext))
	.then(function(isAccepted){
		if(!isAccepted)
			return aChain.next == null ? aContext : executeChain(aContext, aChain.next);
		
		return Promise.resolve(aChain.task.execute(aContext))
			.then(function(aContext){
				if(typeof aContext === "undefined")
					debugger;
				if(aContext.exit || aChain.next == null)
					return aContext;
				
				return executeChain(aContext, aChain.next);
			});
	});	
};
j
const TaskChain = function(){
	const tasks = {};	
	return {
		chain : null,
		/**
		 * @param aTask : {
		 * 		title : string,
		 * 		accept(aElement) : Promise(Boolean)
		 * 		execute(aContext) : Promise(new Context)
		 * }
		 * @param aPhase : Contants.PHASE
		 */	
		add : function(aTask, aPhase){
			if(typeof tasks[aTask.id] === "undefined")		
				this.chain = insert({
					task : aTask,
					phase : (typeof aPhase !== "undefined" ? aPhase : Constants.PHASE.FINISH),
					next : null
				}, this.chain);			
		},
		
		/**
		 * @param aContext: {
		 *		element,
		 *		data,
		 *		root,
		 *		processor,
		 *	}
		 */
		execute : function(aContext){
			return executeChain(aContext, this.chain);
		}
	};
};

export default TaskChain;