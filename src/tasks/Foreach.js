import el from "@modules/defaultjs-expression-language";
import Constants from "../Constants";
import Processor from "../Processor";
import ObjectUtils from "../ObjectUtils";

const Resolver = el.ExpressionResolver;
const DATANAME = "defaultjs.tl.foreach.template";
const ATTRIBUTE = {
	DATA : "jstl-foreach",
	VARNAME : "jstl-foreach-var",
	STATUSVARNAME : "jstl-foreach-status",
	COUNT : "jstl-foreach-count",
	STARTINDEX : "jstl-foreach-start-index",
	STEP : "jstl-foreach-step",
	BREAKCONDITION : "jstl-foreach-break-condition"
};

const count = function(aVarname, aStatusname, aContext, aTemplate) {	
	return Promise.all([
		Resolver.resolve(aContext.element.attr(ATTRIBUTE.STARTINDEX), aContext.data, 0),
		Resolver.resolve(aContext.element.attr(ATTRIBUTE.COUNT), aContext.data, 0),
		Resolver.resolve(aContext.element.attr(ATTRIBUTE.STEP), aContext.data, 1)
	]).then(function(aResults){
		let promises = [];
		for (let i = aResults[0]; i < aResults[1]; i += aResults[2]) {    			    
		    const context = ObjectUtils.extend({}, aContext);
		    context[aVarname] = i,
		    context[aStatusname] = {
		        "index" : i,
		        "number" : i + 1, 
		        "count" : aResults[1],
		        "context" : aContext.data
		    };
		    promises.push(aContext.processor.execute(aTemplate.clone(), context, aContext.root));
	    }
		
		return Promise.all(promises);
	});    
};

const iterateList = function(aIndex, aData, aBreakCondition, aVarname, aStatusname, aContext, aTemplate, aResult){
	if(aIndex >= aData.length)
		return aResult;	
	
	const context = ObjectUtils.extend({}, aContext);
    context[aVarname] = aData[aIndex],
    context[aStatusname] = {
        "index" : aIndex,
        "number" : aIndex + 1, 
        "count" : aData.length,
        "data" : aData,
        "context" : aContext.data
    };
    return Resolver.resolve(aBreakCondition, context, false)
    .then(function(doBreak){
    	if(!doBreak){
    		return aContext.processor.execute(aTemplate.clone(), context, aContext.root)).
    		then(function(aContent){
    			return aResult.push(aContent);
    		});    		
    	}
    	
    	return aResult;
    })	
};

const list = function(aData, aVarname, aStatusname, aContext, aTemplate) {	
	const breakCondition = aContext.element.attr(ATTRIBUTE.BREAKCONDITION);
	return Resolver.resolve(aContext.element.attr(ATTRIBUTE.STARTINDEX), aContext.data, 0))
	.then(function(aStartIndex){
		return iterateList(aStartIndex,aData, aVarname, aStatusname, aContext, aTemplate, []);	    	
	});
};

const iterateMap = function(aIndex, aKeys, aData, aBreakCondition, aVarname, aStatusname, aContext, aTemplate, aResult){
	if(aIndex >= aData.length)
		return aResult;
	
	const key = aKeys[aIndex];
	const context = ObjectUtils.extend({}, aContext);
    context[aVarname] = aData[key],
    context[aStatusname] = {
        "index" : aIndex,
        "number" : aIndex + 1,
        "key" : key,
        "count" : aData.length,
        "data" : aData,
        "context" : aContext.data
    };
    return Resolver.resolve(aBreakCondition, context, false)
    .then(function(doBreak){
    	if(!doBreak){
    		return aContext.processor.execute(aTemplate.clone(), context, aContext.root)).
    		then(function(aContent){
    			return aResult.push(aContent);
    		});    		
    	}
    	
    	return aResult;
    })	
};

const map = function(aMap, aTemplate, aVarname, aStatusName, aElement, aContext, aProcessor, aTaskChain) {
	const breakCondition = aContext.element.attr(ATTRIBUTE.BREAKCONDITION);
	return Resolver.resolve(aContext.element.attr(ATTRIBUTE.STARTINDEX), aContext.data, 0))
	.then(function(aStartIndex){
		return iterateMap(aStartIndex, Object.getOwnPropertyNames(aData), aData, aVarname, aStatusname, aContext, aTemplate, []);	    	
	});
},

const template : function(aElement) {
    let template = aElement.data(DATANAME);
    if (typeof template === 'undefined') {
	    template = aElement.contents();
	    aElement.data(DATANAME, template);
    }
    return template;
};


const execute = function(anExpression, aVarname, aStatusname, aContext, aTemplate){
	if (expression == null && typeof aElement.attr("jstl-foreach-count") !== "undefined")
	    return count(varname, statusname, aContext, template);
    else if(expression != null){
	    let data = Resolver.resolve(expression, aContext, null);
	    if(data == null)
	    	return aContext;
	    else if (data instanceof Array)
		    return list(data, varname, statusname, aContext, template);
	    else if(data instanceof Object)
		    return map(data, template, varName, statusName, aElement, aContext, aProcessor, aTaskChain);					   
	    else
		    return null;
    }
}


const Task = {
	id : "foreach",
	accept : function(aContext){
		return aContext.element.is("[jstl-foreach]");
	},
	execute : function(aContext){		
		const element = aContext.element;
		const template = template(element);
	    if (typeof template !== 'undefined') {
	    	const expression = element.attr(ATTRIBUTE.DATA) || null;
	    	const varname = element.attr(ATTRIBUTE.VARNAME) || "itemVar"; 
		    const statusname = element.attr(ATTRIBUTE.STATUSVARNAME) || "statusVar";
		    return Promise.resolve(execute(expression, varname, statusname, aContext, template)).then(function(aContent){
		    	element.empty();
		    	if(aContent != null)
		    		element.append(aContent)
		    	return aContext;		    	
		    });
	    }
	    
		return aContext;
	}
};

Processor.addTask(Task, Constants.PHASE.MANIPULATION);