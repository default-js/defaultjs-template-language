export default {
	title : "data",
	accept : function(aElement){
		return Promise.resolve(true);
	},
	execute : function(aContext){
		return Promise.resolve(aContext);
	}
};