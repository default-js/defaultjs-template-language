export default (object) => {
	let resolving = null;
	const wait =  new Promise((resolve) => {
		resolving = resolve;
	});

	wait.object = object;	
	wait.finished = resolving;
	
	return wait;
};