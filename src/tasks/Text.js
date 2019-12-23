import Constants from "../Constants";
import Processor from "../Processor";

const Task = {
	id : "text",
	accept : function(aContext){
		return false;
	},
	execute : function(aContext){
		return Promise.resolve(aContext);
	}
};

Processor.addTask(Task, Constants.PHASE.CONTENT);