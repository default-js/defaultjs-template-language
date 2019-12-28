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

const Task = {
	id : "attribute",
	accept : function(aContext){
		const attributes = aContext.element.attr();
		return typeof attributes !== "undefined" && attributes != null && !aContext.element.is("[jstl-attribute-ignore]");
	},
	execute : function(aContext){
		const attributes = aContext.element.attr();
		const promises = [];
		for(const key in attributes)
			promises.push(execute(key, attributes[key], aContext));
		
		return Promise.all(promises)
		.then(function(){
			return aContext;
		});
	}
};

Processor.addTask(Task, Constants.PHASE.CONTENT + 100);