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

const executeChain = function(aContext, aTask){
	try{
		let task = aTask;
		let context = aContext
		let nextChain = function(aContext){
			context = aContext || context;
			
			if(task.next == null)
				return context;
			
			task = task.next;
			return task.execute(nextChain, context);
		}
		
		return Promise.resolve(task.execute(nextChain, context))
			.then(function(aResultContext){
				return aResultContext || context || aContext;
			});
	}catch(aError){
		return Promise.reject(aError);
	}
};

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
					execute : aTask.execute,
					id : aTask.id || "unkown",
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
		execute : function(aElement, aData, aRoot){
			return executeChain({
				element : aElement,
				data : aData,
				root : aRoot || aElement,
				exit : false
			}, this.chain);
		}
	};
};

export default TaskChain;