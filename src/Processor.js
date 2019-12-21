import Constants from "./Constants";
import TaskChain from "./TaskChain";




 const Processor = {
	addTask : function(){
		
	},		 
	process : function(aElement, aData){		
		aContext.element.trigger(Constants.EVENTS.onExecute)
		return TaskChain.execute({
			element : aElement,
			data : aData,
			root : aElement,
			processor : this
		}).then(function(aContext){
			aContext.element.trigger(Constants.EVENTS.onReady);
		})["catch"](function(aContext){
			aContext.element.trigger(Constants.EVENTS.onFail);
		});
	}
};
export default Processor;