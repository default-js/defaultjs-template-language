import el from "@default-js/defaultjs-expression-language";
import Constants from "../Constants";
import Processor from "../Processor";
import ObjectUtils from "@default-js/defaultjs-common-utils/src/ObjectUtils";

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
		Resolver.resolve(aContext.element.attr(ATTRIBUTE.STARTINDEX) || 0, aContext.data, 0),
		Resolver.resolve(aContext.element.attr(ATTRIBUTE.COUNT) || 0, aContext.data, 0),
		Resolver.resolve(aContext.element.attr(ATTRIBUTE.STEP) || 1, aContext.data, 1)
	]).then(function(aResults){
		let promises = [];
		const start = aResults[0] || 0;
		const count = aResults[1] || 0;
		const step = aResults[2] || 1;
		for (let i = start; i < count; i += step) {
		    const data = ObjectUtils.merge({}, aContext.data);
		    data[aVarname] = i,
		    data[aStatusname] = {
		        "index" : i,
		        "number" : i + 1, 
		        "count" : aResults[1],
		        "context" : aContext.data
		    };
		    promises.push(Processor.execute(aTemplate.cloneNode(true), data, aContext.root));
	    }
		
		return Promise.all(promises);
	});    
};

const iterateList = function(aIndex, aData, aBreakCondition, aVarname, aStatusname, aContext, aTemplate, aResult){
	if(aIndex >= aData.length)
		return aResult;	
	
	const context = ObjectUtils.merge({}, aContext);
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
    		return aContext.processor.execute(aTemplate.cloneNode(true), context, aContext.root)
    		.then(function(aContent){
    			return aResult.push(aContent.element);
    		});
    	}
    	
    	return aResult;
    });	
};

const list = function(aData, aVarname, aStatusname, aContext, aTemplate) {	
	const breakCondition = aContext.element.attr(ATTRIBUTE.BREAKCONDITION);
	return Resolver.resolve(aContext.element.attr(ATTRIBUTE.STARTINDEX), aContext.data, 0)
	.then(function(aStartIndex){
		return iterateList(aStartIndex,aData, aVarname, aStatusname, aContext, aTemplate, []);	    	
	});
};

const iterateMap = function(aIndex, aKeys, aData, aBreakCondition, aVarname, aStatusname, aContext, aTemplate, aResult){
	if(aIndex >= aData.length)
		return aResult;
	
	const key = aKeys[aIndex];
	const context = ObjectUtils.merge({}, aContext);
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
    		return aContext.processor.execute(aTemplate.cloneNode(true), context, aContext.root)
    		.then(function(aContent){
    			return aResult.push(aContent.element);
    		});
    	}
    	
    	return aResult;
    });
};

const map = function(aData, aVarname, aStatusname, aContext, aTemplate) {
	const breakCondition = aContext.element.attr(ATTRIBUTE.BREAKCONDITION);
	return Resolver.resolve(aContext.element.attr(ATTRIBUTE.STARTINDEX), aContext.data, 0)
	.then(function(aStartIndex){
		return iterateMap(aStartIndex, Object.getOwnPropertyNames(aData), aData, aVarname, aStatusname, aContext, aTemplate, []);
	});
};

const getTemplate = function(aElement) {
    let template = aElement.data(DATANAME);
    if (typeof template === 'undefined') {
	    template = aElement.content();
	    aElement.data(DATANAME, template);
    }
    return template;
};


const execute = function(anExpression, aVarname, aStatusname, aContext, aTemplate){
	if (anExpression == null && typeof aContext.element.attr(ATTRIBUTE.COUNT) !== "undefined")
	    return count(aVarname, aStatusname, aContext, aTemplate);
    else if(expression != null){
	    let data = Resolver.resolve(anExpression, aContext, null);
	    if(data == null)
	    	return aContext;
	    else if (data instanceof Array)
		    return list(data, aVarname, aStatusname, aContext, aTemplate);
	    else if(data instanceof Object)
	    	return map(data, aVarname, aStatusname, aContext, aTemplate);				   
	    else
		    return null;
    }
};


const Task = {
	id : "foreach",
	execute : function(aNextTask, aContext){
		if(!aContext.element.is("[jstl-foreach]"))
			return aNextTask();
			
		const element = aContext.element;
		const template = getTemplate(aContext.element);
	    if (typeof template !== 'undefined') {
	    	const expression = element.attr(ATTRIBUTE.DATA) || null;
	    	const varname = element.attr(ATTRIBUTE.VARNAME) || "itemVar"; 
		    const statusname = element.attr(ATTRIBUTE.STATUSVARNAME) || "statusVar";
		    return Promise.resolve(execute(expression, varname, statusname, aContext, template))
		    	.then(function(aContent){
			    	element.empty();
			    	if(aContent){
			    		if(aContent instanceof Array){
			    			const content = aContent.flat();
			    			content.forEach(aItem => {
			    				if(aItem.element instanceof Node)
			    					element.append(aItem.element);
			    			});
			    		} else if(aContent.element)
			    			element.append(aContent.element);
			    	}
			    });
	    }
	}
};

Processor.addTask(Task, Constants.PHASE.MANIPULATION);