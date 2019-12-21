import Constants from "../Constants";
import Processor from "../Processor";


const executeNext = function(children, index, aContext){
	return aContext.processor.execute(children[index], aContext.data, aContext.root)
	.then(function(aContext){
		if(children.length < index)
			return executeNext(children, index + 1, aContext);
		else
			return aContext;
	});
};

const Task = {
	id : "children",
	accept : function(aElement){		
		return Promise.resolve(true);
	},
	execute : function(aContext){		
		const children = aContext.element.children;
		if(typeof children !== "undefined" && children != null && children.length > 0)
			return executeNext(children, 0, aContext);
		
		return aContext;
	}
};

Processor.addTask(Task, Constants.PHASE.CHILDREN);