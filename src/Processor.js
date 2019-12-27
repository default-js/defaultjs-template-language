import Constants from "./Constants";
import TaskChain from "./TaskChain";

const taskchain = new TaskChain();

const executeElement = function(aElement, aData, aRoot){
	console.log("processor.execute(", aElement, aData, aRoot,")");
	
	aElement.trigger(Constants.EVENTS.onExecute);
	
	return taskchain.execute({
		element : aElement,
		data : aData,
		root : aRoot || aElement
	}).then(function(){
		if(typeof aRoot === "undefined")
			aElement.trigger(Constants.EVENTS.onReady);
		
		return {element : aElement, data : aData, root : aRoot};
	})["catch"](function(aError){
		if(typeof aRoot === "undefined")
			aElement.trigger(Constants.EVENTS.onFail);
		
		throw aError;
	});
};

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
		if(typeof aElement === "undefined")
			return Promise.reject(new Error("Parameter \"aElement\" is undefined!"));
		else if(aElement instanceof NodeList){
			const promises = [];
			aElement.forEach(function(aElement){
				if(typeof aElement !== "undefined" && aElement.nodeType != 3 && aElement.nodeType != 4)
					promises.push(executeElement(aElement, aData, aRoot));
			})
			
			return Promise.all(promises)
			.then(function(){
				return {element : aElement, data : aData, root : aRoot};
			});
		}
		else if(aElement instanceof Node)
			return executeElement(aElement, aData, aRoot)
		else
			 return Promise.reject(new Error("Type of \"aElement\" - \"" + typeof aElement + "\" is not supported!"));
	}
};
export default Processor;