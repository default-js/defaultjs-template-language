import Constants from "./Constants";
import TaskChain from "./TaskChain";

const taskchain = new TaskChain();

const executeElement = function(aElement, aData, aRoot){	
	aElement.trigger(Constants.EVENTS.onExecute);
	
	return taskchain.execute({
		element : aElement,
		data : aData,
		root : aRoot || aElement,
		exit : false
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

const executeElements = function(theElements, aData, aRoot){
	return executeElement(theElements.shift(), aData, aRoot)
		.then(function(aContext){
			if(theElements.length != 0)
				return executeElements(theElements, aContext.data, aContext.root);
			else
				return aContext;
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
		//@TODO load template data - is not the same as jstl-include
		if(typeof aElement === "undefined" || aElement == null)
			return Promise.reject(new Error("Parameter \"aElement\" is undefined!"));
		else if(aElement instanceof NodeList){			
			return executeElements(Array.from(aElement), aData, aRoot)
				.then(function(){
					return {element : aElement, data : aData, root : aRoot};
				});
		} else if(aElement instanceof Array){
			return executeElements(aElement, aData, aRoot)
				.then(function(){
					return {element : aElement, data : aData, root : aRoot};
				});
		} else if(aElement instanceof Node)
			return executeElement(aElement, aData, aRoot)
		else
			 return Promise.reject(new Error("Type of \"aElement\" - \"" + typeof aElement + "\" is not supported!"));
	}
};
export default Processor;