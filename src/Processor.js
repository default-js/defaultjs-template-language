import Constants from "./Constants";
import TaskChain from "./TaskChain";
import ObjectUtils from "@default-js/defaultjs-common-utils/src/ObjectUtils";


const TEMPALTE_DATA_NAME = "defaultjs.tl.Processor.template";
const taskchain = new TaskChain();

const executeElement = function(aData){
	const element = aData.element;
	element.trigger(Constants.EVENTS.onExecute);
	let template = aData.template || element;
	if(!aRoot && !aData.template)
		template = getTemplate(aElement);
	
	return taskchain.execute(template, aData.data, aData.aRoot)
		.then(function(aResult){
			if(!aRoot){
				element.trigger(Constants.EVENTS.onReady);				
				if(aData.mode == "append")
					element.parent().append(container.content());
				else if(aData.mode == "prepend")
					element.parent.prepend(container.content());				
				else				
					element.replace(container.content());
			}			
			return aResult;
		})["catch"](function(aError){
			if(typeof aRoot === "undefined")
				element.trigger(Constants.EVENTS.onFail);
			
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

const executeElements = function(theElements, aData){
	const promises = [];
	const length = theElements.length;
	for(let i = 0; i < length; i++){
		const element = theElements[i];		
		if(element instanceof HTMLElement){
			const data = ObjectUtils.merge({}, aData, {element : element});
			promises.push(executeElement(data));
		}
	}
	
	return Promise.all(promises);
};

const execute = function(aData){	
	//@TODO load template data - is not the same as jstl-include
	if(typeof aElement === "undefined" || aElement == null)
		return Promise.reject(new Error("Parameter \"aElement\" is undefined!"));
	else if(aElement instanceof NodeList || aElement instanceof Array || aElement instanceof HTMLCollection){
		const elements = Array.from(aElement);
		return executeElements(elements, aData);
	}
	else if(aElement instanceof HTMLElement)
		return executeElement(aData)
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
	execute : function(aData){
		return Promise.resolve(execute(aData));
	}
};
export default Processor;