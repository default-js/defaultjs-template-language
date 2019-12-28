import Constants from "../Constants";
import Processor from "../Processor";

const Task = {
	id : "add-attribute",
	accept : function(aContext){
		return aContext.element.is("[jstl-add-attribute]");
	},
	execute : function(aContext){
		return Promise.resolve(aContext);
	}
};

Processor.addTask(Task, Constants.PHASE.MANIPULATION + 200);