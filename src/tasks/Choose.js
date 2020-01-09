import el from "@default-js/defaultjs-expression-language";
import Constants from "../Constants";
import Processor from "../Processor";

const Resolver = el.ExpressionResolver;

const when = function(theNodes, aContext){
	if(theNodes.length == 0)
		return false;
		
	const node = theNodes.shift();
	return Resolver.resolve(node.attr("jstl-when"), aContext.data, false)
	.then(function(aResult){
		if(!!aResult){
			theNodes.forEach(function(node){node.remove()});
			return aResult;
		}
		
		node.remove();
		return when(theNodes, aContext)
	})
};

const Task = {
	id : "choose",
	execute : function(aNextTask, aContext){
		if(!aContext.element.is("[jstl-choose]"))
			return aNextTask();
		
		return when(Array.from(aContext.element.find(":scope > [jstl-when]")), aContext)
		.then(function(aResult){
			if(!!aResult)
				aContext.element.find(":scope > [jstl-otherwise]").remove();			
		}).then(function(){
			return aNextTask();
		});
	}
};

Processor.addTask(Task, Constants.PHASE.MANIPULATION + 100);