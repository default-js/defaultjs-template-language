import Constants from "../Constants";
import Processor from "../Processor";
import el from "@default-js/defaultjs-expression-language";
import ObjectUtils from "@default-js/defaultjs-common-utils/src/ObjectUtils";

const Resolver = el.ExpressionResolver;
const MODES = {
	append : "append",
	prepend : "prepend",
	replace : "replace"
};

const Task = {
	id : "include",
	accept : function(aContext){
		return aContext.element.is("[jstl-include]");
	},
	execute : function(aContext){
		const mode = aContext.element.attr("jstl-include-mode") || MODES.replace;
		const expression = aContext.element.attr("jstl-include");
		const option = aContext.element.attr("jstl-include-options");
		
		return Promise.all([
			Resolver.resolveText(mode, aContext.data),
			Resolver.resolveText(expression, aContext.data),
			Resolver.resolve(option, aContext.data),
		]).then(function(aData){
			const mode = aData[0];
			const url = aData[1];
			const option = ObjectUtils.isPojo(aData[2]) ? aData[2] : undefined;
			
			return fetch(url, option)			
			.then(function(aResponse){
				return aResponse.text();
			}).then(function(aContent){
				return create(aContent);
			}).then(function(aContent){
				return Processor.execute(aContent, aContext.data, aContext.root)
				.then(function(){
					if(mode == MODES.append)
						aContext.element.append(aContent);
					else if(mode == MODES.prepend)
						aContext.element.prepend(aContent);
					else if(mode == MODES.replace){
						aContext.element.empty();
						aContext.element.append(aContent);
					} else
						throw new Error("Include mode \"" + mode + "\" is not supported");
				});
			})
		}).then(function(){
			aContext.exit = true;
			return aContext;
		});
	}
};

Processor.addTask(Task, Constants.PHASE.CONTEXT);