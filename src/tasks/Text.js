import el from "@default-js/defaultjs-expression-language";
import Constants from "../Constants";
import Processor from "../Processor";
import StringUtils from "../utils/StringUtils";

const Resolver = el.ExpressionResolver;

const normalize = function(aNode) {
    if (aNode) {
	    if (aNode.nodeType == 3) {
		    let text = aNode.textContent;
		    while (aNode.nextSibling && aNode.nextSibling.nodeType == 3) {
			    text += aNode.nextSibling.textContent;
			    aNode.parentNode.removeChild(aNode.nextSibling);
		    }
		    aNode.textContent = text;
	    } else
		    normalize(aNode.firstChild);
	    
	    normalize(aNode.nextSibling);
    }
};

const CONTENTTYPE = {
    "html" : function(aNode, aText, aContext) {
        aNode.replace(create(aText));
    },
    "text" : function(aNode, aText, aContext) {
        let text = aText;
        let addAsHtml = false;

        let preventFormat = aContext.element.attr("jstl-text-prevent-format");
        if(typeof preventFormat === "string" && preventFormat.trim().length == 0)
        	preventFormat = "true";
        
        Promise.all([
        	Resolver.resolve(preventFormat, aContext.data, false),
        	Resolver.resolve(aContext.element.attr("jstl-text-trim-length") || "0", aContext.data, 0),
        ]).then(function(aResults){
        	const preventFormat = !!aResults[0];
        	const maxLength = aResults[1];
        	
        	if(maxLength > 0)
        		text = StringUtils.trimTextLength(text, maxLength);        	
        	if(preventFormat)
        		text = StringUtils.formatToHtml(text)
        		
        		
    		 if (preventFormat)
    			 aNode.replace(create(text));
    		 else
    			 aNode.textContent = text;
        });
    }
};

const Task = {
	id : "text",
	accept : function(aContext){
		return !aContext.element.is("[jstl-text-ignore]");
	},
	execute : function(aContext){
		const type = aContext.element.attr("jstl-text-content-type") || "text";
		if(typeof CONTENTTYPE[type] === "undefined")
			return;
		
		const promises = [];		
		normalize(aContext.element);
		Array.from(aContext.element.childNodes || [])
		.filter(function(aNode) {
			return (aNode.nodeType === 3 || aNode.nodeType === 4) && typeof aNode.textContent !== "undefined" && aNode.textContent.trim().length > 0;
		}).forEach(function(aNode) {
		    let text = aNode.textContent;
		    if (text) {
		    	promises.push(
				    Resolver.resolveText(text, aContext.data)
				    .then(function(aText){
						return CONTENTTYPE[type](aNode, aText, aContext);
				    })
			    );
			    
		    }
	    });		
		
		return Promise.all(promises)
		.then(function(){
			return aContext;
		});
	}
};

Processor.addTask(Task, Constants.PHASE.CONTENT);