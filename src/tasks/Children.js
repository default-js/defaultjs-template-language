import Constants from "../Constants";
import Processor from "../Processor";

const Task = {
	id : "children",
	accept : function(aContext){
		const children = aContext.element.children;
		return children != null && children.length > 0;
	},
	execute : function(aContext){
		return Processor.execute(aContext.element.children, aContext.data, aContext.root)
			.then(function(){
				return aContext;
			});
	}
};

Processor.addTask(Task, Constants.PHASE.CHILDREN);