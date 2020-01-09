import Constants from "../Constants";
import Processor from "../Processor";
import el from "@default-js/defaultjs-expression-language";

const Resolver = el.ExpressionResolver;

const execute = function(aKey, aValue, aContext){
	return Resolver.resolveText(aValue, aContext.data)
	.then(function(aResult){
		if(aValue != aResult)
			aContext.element.attr(aKey, aResult);
	});
};

const acceped = function(aContext){
	const attributes = aContext.element.attr();
	return typeof attributes !== "undefined" && attributes != null && !aContext.element.is("[jstl-attribute-ignore]");
};

const Task = {
	id : "attribute",
	execute : function(aNextTask, aContext){
		if(!acceped(aContext))
			return aNextTask();
		
		const attributes = aContext.element.attr();
		const promises = [];
		for(const key in attributes)
			promises.push(execute(key, attributes[key], aContext));
		
		return Promise.all(promises)
		.then(function(){
			return aNextTask();
		});
	}
};

Processor.addTask(Task, Constants.PHASE.CONTENT + 100);