export default class DirectiveResult {
	constructor({stop = false, remove = false, node = null, content = null} = {}){
		this.stop = stop;
		this.remove = remove;	
		this.node = node;
		this.content = content;
	}
};