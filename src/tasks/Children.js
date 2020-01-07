import Constants from "../Constants";
import Processor from "../Processor";


const executeNext = function(children, aContext){
	return Processor.execute(children.shift(), aContext.data, aContext.root)
	.then(function(aContext){
		if(children.length != 0)
			return executeNext(children, aContext);
		else
			return aContext;
	});
};

const Task = {
	id : "children",
	accept : function(aContext){
		const children = aContext.element.children;
		return children != null && children.length > 0;
	},
	execute : function(aContext){
		//const children = Array.from(aContext.element.find(":scope>*"));
//		.filter(function(aNode){
//			return aNode.nodeType != 3 && aNode.nodeType != 4;
//		});
		
		//return executeNext(children, aContext);
		return Processor.execute(aContext.element.find(":scope>*"), aContext.data, aContext.root)
	}
};

Processor.addTask(Task, Constants.PHASE.CHILDREN);