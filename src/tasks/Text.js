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
        aContext.element.replaceChild(aNode, create(aText));
    },
    "json" : function(aNode, aText, aContext) {
        if (typeof aText === "string")
        	aNode.textContent = aText;
        else
        	aNode.textContent = JSON.stringify(aText);
    },
    "text" : function(aNode, aText, aContext) {
        let text = aText;
        let addAsHtml = false;

        Promise.all([
        	Resolver.resolve(aContext.element.attr("jstl-text-prevent-format"), aContext.data, false),
        	Resolver.resolve(aContext.element.attr("jstl-text-trim-length"), aContext.data, 0),
        ]).then(function(aResults){
        	const preventFormat = !!aResults[0];
        	const maxLength = aResults[1];
        	
        	if(maxLength > 0)
        		text = StringUtils.trimTextLength(text, maxLength);        	
        	if(preventFormat)
        		text = StringUtils.formatToHtml(text)
        		
        		
    		 if (preventFormat)
    			 aContext.element.replaceChild(aNode, create(text));
    		 else
    			 aNode.textContent = text;
        });
    }
};

CONTENTTYPE["text/html"] = CONTENTTYPE["html"];
CONTENTTYPE["application/json"] = CONTENTTYPE["json"];
CONTENTTYPE["text/plain"] = CONTENTTYPE["text"];



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
		    	console.log("resolve text:", text, "context:", aContext.data);
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
			return Promise.resolve(aContext);
		});
	}
};

Processor.addTask(Task, Constants.PHASE.CONTENT);