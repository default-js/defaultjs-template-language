import Constants from "./Constants";
import TaskChain from "./TaskChain";

const taskchain = new TaskChain();

const Processor = {
	/**
	* @param aTask : {
	* 		title : string,
	* 		accept(aElement) : Promise(Boolean)
	* 		execute(aContext) : Promise(new Context)
	* }
	* @param aPhase : Contants.PHASE
	*/	
	addTask : function(aTask, aPhase){
		taskchain.add(aTask, aPhase)
	},
	getTaskchain : function(){
		return taskchain;
	},
	execute : function(aElement, aData, aRoot){
		console.log("process:", aElement);
		aElement.trigger(Constants.EVENTS.onExecute);
		const context = {
			element : aElement,
			data : aData,
			root : aRoot || aElement,
			processor : this
		};
		
		return taskchain.execute(context).then(function(aContext){
			if(typeof aRoot === "undefined")
				return Promise.resolve({
					element : aElement,
					data : aData
				});
			aContext.element.trigger(Constants.EVENTS.onReady);
			return Promise.resolve(aContext);
		})["catch"](function(aError){
			console.error(aError);			
			if(typeof aRoot === "undefined")
				return Promise.resolve({
					element : aElement,
					data : aData
				});
			aElement.trigger(Constants.EVENTS.onFail);
			return Promise.resolve(context);
		});
	}
};
export default Processor;