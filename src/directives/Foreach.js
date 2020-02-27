import Directive from "../Directive.js";
import ExpressionResolver from "@default-js/defaultjs-expression-language/src/ExpressionResolver.js";

const ATTRIBUTE = {
	DATA: "jstl-foreach",
	VAR: "jstl-foreach-var",
	STATUS: "jstl-foreach-status",
	COUNT: "jstl-foreach-count",
	START: "jstl-foreach-start",
	STEP: "jstl-foreach-step",
	CONDITION: "jstl-foreach-condition"
};

const doCount = async (option, context) => {
	let { data, start, step, count, varname, status, resolver} = option;
}

const doForeach = async (option) => {
	let { data, start, step, count, varname, status, resolver} = option;
	
	data = await resolver.resolve(data);
	let array = data;
	if(!(data instanceof Array))
		array = Object.getOwnPropertyNames(data);
	
	count = count != "" ? await resolver.resolve(count, 0) : null;	
	const length = count ? Math.min(start + count, array.length): array.length;
	 
	
	let stop = false;
	for(let i = start; i < length && !stop; i+step){
		console.log("i:", i, "stop:", stop, "step:", step, "length:", length);
		const iteration = {}
		iteration[varname] = data[i];
		iteration[status] = {
			index: i,
			number: i + 1,
			count: length,
			data
		}
		
		stop = !(await render(iteration, option));
		console.log("i:", i, "stop:", stop, "step:", step, "length:", length);	
	}
}

const render = async (data, option) => {
	let { template, resolver, renderer, container, condition, context } = option;
	resolver = new ExpressionResolver({context:data, name: "jstl-foreach", parent: resolver});
	
	condition = condition ? resolver.resolve(condition, false) : false;	
	if(condition)
		return false;
	
	context = context.clone({resolver, container, template, mode: "append"});
	await renderer.render(context);
	
	return true;	
}

class Foreach extends Directive {
	constructor() {
		super();
	}

	get name() { return "foreach" }
	get rank() { return 4000 }

	async execute(context) {
		if (!(context.template instanceof HTMLElement) || (!context.template.attr(ATTRIBUTE.DATA) && !context.template.attr(ATTRIBUTE.COUNT)))
			return context;

		context.ignore = true;
		try {
			const { template, resolver, renderer, content } = context;
			const option = {
				data: (template.attr(ATTRIBUTE.DATA) || "").trim(),
				count: (template.attr(ATTRIBUTE.COUNT) || "").trim(),
				start: await resolver.resolve(template.attr(ATTRIBUTE.START) || "0"),
				step: await resolver.resolve(template.attr(ATTRIBUTE.STEP) || "1"),
				varname: (template.attr(ATTRIBUTE.VAR) || "item").trim(),
				status: (template.attr(ATTRIBUTE.STATUS) || "status").trim(),
				condition: template.attr(ATTRIBUTE.CONDITION),
				template: template.childNodes,
				resolver,
				renderer,
				container: content,
				context
			};
			if ((!option.data || option.data == "") && option.count)
				await doCount(option);
			else
				await doForeach(option);			
			
		} catch (e) {
			console.error(e, template);
		}
		return context;

	}
}

Directive.define({ directive: new Foreach() });