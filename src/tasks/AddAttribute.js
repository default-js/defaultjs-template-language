import Constants from "../Constants";
import Processor from "../Processor";

const Task = {
	id : "add-attribute",
	execute : function(aNextTask, aContext){
		return aNextTask();
	}
};

Processor.addTask(Task, Constants.PHASE.MANIPULATION + 200);