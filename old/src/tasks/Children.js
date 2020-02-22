import Constants from "../Constants";
import Processor from "../Processor";

const accept = function(aContext){
	const children = aContext.element.children;
	return children != null && children.length > 0;
};

const Task = {
	id : "children",
	accept : function(aContext){
		const children = aContext.element.children;
		return children != null && children.length > 0;
	},
	execute : function(aNextTask, aContext){
		if(!accept)
			return aNextTask();
		
		return Processor.execute(aContext.element.children, aContext.data, aContext.root)
			.then(function(){
				return aNextTask();
			});
	}
};

Processor.addTask(Task, Constants.PHASE.CHILDREN);