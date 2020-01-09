import Constants from "../Constants";
import Processor from "../Processor";
import el from "@default-js/defaultjs-expression-language";

const Resolver = el.ExpressionResolver;

const Task = {
	id : "async",
	execute : function(aNextTask, aContext){
		if(!aContext.element.is("[jstl-async]"))
			return aNextTask();
		return Resolver.resolve(aContext.element.attr("jstl-async") || (1000/60), aContext.data, (1000/60))
			.then(function(aTimeout){
				return new Promise(function(resolve){
					setTimeout(function(){resolve(aNextTask());}, aTimeout);
				});
			})
		
	}
};

Processor.addTask(Task, Constants.PHASE.INIT);