import Constants from "../Constants";
import Processor from "../Processor";
import el from "@default-js/defaultjs-expression-language";

const Resolver = el.ExpressionResolver;

const Task = {
	id : "include",
	accept : function(aContext){
		return aContext.element.is("[jstl-include]");
	},
	execute : function(aContext){
		const mode = aContext.element.attr("jstl-include-mode") || "replace";		
		const expression = aContext.element.attr("jstl-include");
		const option = aContext.element.attr("jstl-include-options");
		
		return Promise.all([
			Resolver.resolveText(mode),
			Resolver.resolveText(expression),
			Resolver.resolve(option),
		]).then(function(aData){
			const mode = aData[0];
			const url = aData[1];
			const option = aData[2];
			
			return fetch(url, option)			
			.then(function(aResponse){
				return aResponse.text();
			}).then(function(aContent){
				return create(aContent);
			}).then(function(aContent){
				return Processor.execute(aContent, aContext.data, aContext.root)
				.then(function(){
					if(mode == "append")
						aContext.element.append(aContent);
					else if(mode == "preppend")
						aContext.element.preppend(aContent);
					else {
						aContext.element.empty();
						aContext.element.append(aContent);
					}
				});
			})
		}).then(function(){
			return aContext;
		});
	}
};

Processor.addTask(Task, Constants.PHASE.CONTEXT);