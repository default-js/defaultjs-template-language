import Constants from "./Constants";
import TaskChain from "./TaskChain";


const TEMPALTE_DATA_NAME = "defaultjs.tl.Processor.template";
const taskchain = new TaskChain();

const executeElement = function(aElement, aData, aRoot){
	aElement.trigger(Constants.EVENTS.onExecute);
	let container = null;
	let template = aElement;
	if(!aRoot){		
		template = getTemplate(aElement);
		container = new DocumentFragment();
		container.append(template);		
	}
	
	return taskchain.execute(template, aData, aRoot)
		.then(function(aResult){
			console.log("aResult:", aResult)
			
			if(!aRoot){
				aElement.trigger(Constants.EVENTS.onReady);
				aElement.replace(container.content());					
			}
			
			
			return aResult;
		})["catch"](function(aError){
			if(typeof aRoot === "undefined")
				aElement.trigger(Constants.EVENTS.onFail);
			
			throw aError;
		});
};

const getTemplate = function(aElement){
	let template = aElement.data(TEMPALTE_DATA_NAME);
	if(!template){
		template = aElement.cloneNode(true);
		aElement.data(TEMPALTE_DATA_NAME, template);
	}
	return template.cloneNode(true);
}

const executeElements = function(theElements, aData, aRoot){
	if(theElements.length != 0)
		return Promise.resolve(theElements.shift())
			.then(function(aElement){
				if(aElement instanceof HTMLElement)					
					return executeElement(aElement, aData, aRoot)
						.then(function(){
							return executeElements(theElements, aData, aRoot);
						});
				
				return executeElements(theElements, aData, aRoot);
			})
};

const execute = function(aElement, aData, aRoot){	
	//@TODO load template data - is not the same as jstl-include
	if(typeof aElement === "undefined" || aElement == null)
		return Promise.reject(new Error("Parameter \"aElement\" is undefined!"));
	else if(aElement instanceof NodeList || aElement instanceof Array || aElement instanceof HTMLCollection){
		const elements = Array.from(aElement);
		return executeElements(elements, aData, aRoot);
	}
	else if(aElement instanceof HTMLElement)
		return executeElement(aElement, aData, aRoot)
	else
		 return Promise.reject(new Error("Type of \"aElement\" - \"" + typeof aElement + "\" is not supported!"));
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
		return Promise.resolve(execute(aElement, aData, aRoot))
			.then(function(){
				return {element : aElement, data : aData, root : aRoot};
			});
	}
};
export default Processor;