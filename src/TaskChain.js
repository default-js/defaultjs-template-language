import Constants from "./Constants";

let firstEntry;
export default {	
	/**
	 * @param aTask : {
	 * 		title : string,
	 * 		accept(aElement) : Promise(Boolean)
	 * 		execute(aContext) : Promise(new Context)
	 * }
	 * @param aPhase : Contants.PHASE
	 */	
	addTask : function(aTask, aPhase){
		const entry = {
			task : aTask,
			phase : aPhase || Constants.PHASE.FINISH,
			next : null
		};
		
		
		if(typeof firstTask === "undefined")
			firstEntry = entry;
		else if(typeof firstTask.next === "undefined"){
			if(firstTask.phase > aPhase){
				entry.next = firstEntry;
				firstEntry = entry;
			}
			else
				firstEntry.next = entry;
		}
		else{
			let parent = firstEntry;
			while(typeof parent.next !== "undefined"){
				const current = parent.next;			
				if(current.phase > entry.pahse){				
					entry.next = current;
					parent.next = entry;
				}			
			}		
		}
	},	
	getChain : function(){
		return firstEntry;
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
		return Promise.resolve(aContext);
	}
}