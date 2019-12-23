import Constants from "../Constants";
import Processor from "../Processor";


const executeNext = function(children, index, aContext){
	return aContext.processor.execute(children[index], aContext.data, aContext.root)
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
		return executeNext(Array.from(aContext.element.children), 0, aContext);
	}
};

Processor.addTask(Task, Constants.PHASE.CHILDREN);