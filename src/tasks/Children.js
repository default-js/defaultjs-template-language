import Constants from "../Constants";
import Processor from "../Processor";


const executeNext = function(children, index, aContext){
	return Processor.execute(children[index], aContext.data, aContext.root)
	.then(function(aContext){
		const nextIndex = index + 1;
		if(children.length > nextIndex)
			return executeNext(children, nextIndex, aContext);
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
		const children = Array.from(aContext.element.children)
		.filter(function(aNode){
			return aNode.nodeType != 3 && aNode.nodeType != 4;
		});
		
		return executeNext(children, 0, aContext);
	}
};

Processor.addTask(Task, Constants.PHASE.CHILDREN);