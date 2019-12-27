import el from "@default-js/defaultjs-expression-language";
import Constants from "../Constants";
import Processor from "../Processor";

const Resolver = el.ExpressionResolver;
const ATTRIBUTE = "jstl-if";
const Task = {
	id : "if",
	accept : function(aContext){		
		return Promise.resolve(aContext.element.is("[jstl-if]"));
	},
	execute : function(aContext){
		const expression = aContext.element.attr("jstl-if");
		return Resolver.resolve(expression, aContext.data, false)
		.then(function(aResult){
			if(!aResult)
				aContext.element.remove();
			
			aContext.exit = !!aResult;
			return Promise.resolve(aContext);
		});
	}
};

Processor.addTask(Task, Constants.PHASE.CONDITION);