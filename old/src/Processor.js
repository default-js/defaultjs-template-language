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
	const promises = [];
	const length = theElements.length;
	for(let i = 0; i < length; i++){
		const element = theElements[i];		
		if(element instanceof HTMLElement)					
			promises.push(executeElement(element, aData, aRoot));
	}
	
	return Promise.all(promises);
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
		const start = !aRoot ? Date.now() : null;
		return Promise.resolve(execute(aElement, aData, aRoot))
			["finally"](function(){
				if(!aRoot){
					const end = Date.now();
					console.log("Processor.execute runtime:", (end - start), "ms!");
				}
			});
	}
};
export default Processor;