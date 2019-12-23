import el from "@modules/defaultjs-expression-language";
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
		console.log("execute if", aContext);
		const expression = aContext.element.attr("jstl-if");
		return Resolver.resolve(expression, aContext.data, false)
		.then(function(aResult){
			console.log("if", aContext, "expr:",expression,"->", aResult);
			if(!aResult)
				aContext.element.remove();
			
			aContext.exit = !!aResult;
			return Promise.resolve(aContext);
		});
	}
};

Processor.addTask(Task, Constants.PHASE.CONDITION);