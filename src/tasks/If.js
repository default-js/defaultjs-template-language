import el from "@modules/defaultjs-expression-language";
import Constants from "../Constants";
import Processor from "../Processor";

const Resolver = el.ExpressionResolver;
const ATTRIBUTE = "jstl-if";
const Task = {
	id : "if",
	accept : function(aElement){		
		return Promise.resolve(typeof aElement.attr("jstl-if") !== "undefined");
	},
	execute : function(aContext){
		const expression = aContext.element.attr("jstl-if");
		return Resolver.resolve(expression, aContext.data, false)
		.then(function(aResult){
			if(!!aResult)
				aContext.element.remove();
			
			aContext.exit = aResult;
			return Promise.resolve(aContext);
		});
	}
};

Processor.addTask(Task, Constants.PHASE.CONDITION);