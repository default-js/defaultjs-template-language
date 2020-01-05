import Constants from "../Constants";
import Processor from "../Processor";
import el from "@default-js/defaultjs-expression-language";
import ObjectUtils from "@default-js/defaultjs-common-utils/src/ObjectUtils";


const Resolver = el.ExpressionResolver;
const Global = window || global || self || this || {};

const getParameter = function(aParameter){
	const name = aParameter.replace(/[\[\]]/g, "\\$&");
	const value = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)").exec(Global.location.search);
	if (!results) 
		return undefined;
	else if (!results[2]) 
		return "";
	else
		return Global.decodeURIComponent(results[2].replace(/\+/g, " "));
}

const MODES = {
	"direct" : function(anExpression, aContext){
		return Resolver.resolve(anExpression, aContext.data);
	},
	"remote" : function(anExpression, aContext){		
		return Promise.all([
				Resolver.resolveText(anExpression, aContext.data),
				Resolver.resolve(aContext.element.attr("jstl-data-options") || "undefined", aContext.data)
			]).then(function(args){
				return fetch(/*url*/args[0], /*option*/ObjectUtils.isPojo(args[1]) ? args[1] : null);
			}).then(function(aResponse){				
				return Resolver.resolveText(aContext.element.attr("jstl-data-datatype") || "json", aContext.data)
				.then(function(aDatatype){
					const mapper = DATATYPES[aDatatype];
					if(typeof mapper === "function")
						return mapper(aResponse, aContext);					
				});
			});
	},
	"url-parameter" : function(anExpression, aContext){
		return Resolver.resolveText(anExpression, aContext.data)
		.then(function(aParameter){
			return getParameter(aParameter);
		});
	},
};

const DATATYPES = {
	"json" : function(aResponse){
		return aResponse.json();
	}
};

const Task = {
	id : "data",
	accept : function(aContext){
		return aContext.element.is("[jstl-data]");
	},
	execute : function(aContext){		
		const mode = aContext.element.attr("jstl-data-mode") || "direct";
		const action = MODES[mode];
		if(typeof action !== "function")		
			return Promise.resolve(aContext);
		
		
		const varname = aContext.element.attr("jstl-data-var");
		const defaultValue = aContext.element.attr("jstl-data-default");
		const expression = aContext.element.attr("jstl-data");
		
		return Promise.resolve(action(expression, aContext))
			.then(function(aData){
				if(typeof aData === "undefined")
					return Resolver.resolve(defaultValue, aContext.data);
				
				return aData;
			}).then(function(aData){
				if(varname)
					aContext.data[varname] = aData;
				else if(typeof aData !== "undefined")
					ObjectUtils.merge(aContext.data, aData);
				
				return aContext;
			});
	}
};

Processor.addTask(Task, Constants.PHASE.CONTEXT + 100);
export {MODES, DATATYPES}