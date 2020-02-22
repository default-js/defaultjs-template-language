import el from "@default-js/defaultjs-expression-language";
import Constants from "../Constants";
import Processor from "../Processor";

const Resolver = el.ExpressionResolver;
const Task = {
	id : "if",
	execute : function(aNextTask, aContext){
		if(!aContext.element.is("[jstl-if]"))
			return aNextTask();
		
		const expression = aContext.element.attr("jstl-if");
		return Resolver.resolve(expression, aContext.data, false)
		.then(function(aResult){
			if(aResult)
				return aNextTask();
			
			aContext.element.remove();
		});
	}
};

Processor.addTask(Task, Constants.PHASE.CONDITION);