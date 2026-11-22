import Directive from "../Directive.js";
import ExpressionResolver from "@default-js/defaultjs-expression-language/src/ExpressionResolver.js";
import Context from "../Context.js";

const DIRECTIVENAME = "jstl-repeat";
const IGNOREDIRECTIVE = new Set([DIRECTIVENAME]);

const ATTRIBUTE = {
	DATA: `${DIRECTIVENAME}`,
	VAR: `${DIRECTIVENAME}-var`,
	STATUS: `${DIRECTIVENAME}-status`,
	COUNT: `${DIRECTIVENAME}-count`,
	START: `${DIRECTIVENAME}-start`,
	STEP: `${DIRECTIVENAME}-step`,
	CONDITION: `${DIRECTIVENAME}-condition`,
};

/**
 * Description placeholder
 *
 * @param {*} iteration 
 * @param {Context} context 
 * @returns {Context} 
 */
const toContext = (iteration, {template, resolver, content, renderer}) => {
	return new Context({
		template: template,
		container: content,
		renderer: renderer,
		resolver: new ExpressionResolver({ context: iteration, name: DIRECTIVENAME, parent: resolver }),
		excludedDirectives: IGNOREDIRECTIVE
	});
};

/**
 * 
 * @param {*} options 
 * @param {Context} context 
 */
const doCount = async ({ start, step, count, varname, status, condition }, context) => {
	const {resolver} = context;
	count = await resolver.resolve(count);
	const length = start + count * step;
	let stop = false;
	for (let i = start; i < length && !stop; i = i + step) {
		const iteration = {};
		iteration[varname] = i;
		iteration[status] = {
			first: i === start,
			last: i >= length - step,
			index: i,
			number: i + 1,
			step,
			count,
		};
		
		let itemContext = toContext(iteration, context);
		itemContext = await iterate(condition, itemContext);
		stop = itemContext.stop;
	}
};

/**
 * 
 * @param {*} options 
 * @param {Context} context 
 */
const doRepeat = async ({ data, start, step, count, varname, status, condition }, context) => {
	const {resolver} = context;

	data = await resolver.resolve(data);
	const isObject = !(data instanceof Array);
	let array = data;
	if (isObject) array = Object.getOwnPropertyNames(data);

	count = count != "" ? await resolver.resolve(count, 0) : null;
	const length = count ? Math.min(start + count, array.length) : array.length;
	let stop = false;
	for (let i = start; i < length && !stop; i = i + step) {
		console.log("repeat", i, length, start, step, count, data, array);
		const iteration = {};
		iteration[varname] = isObject ? data[array[i]] : data[i];
		iteration[status] = {
			first: i === start,
			last: i >= length - step,
			step,
			index: i,
			number: i + 1,
			count: length,
			key: isObject ? array[i] : i,
			data
		};
		
		let itemContext = toContext(iteration, context);
		itemContext = await iterate(condition, itemContext);
		stop = itemContext.stop;
	}
};

/**
 * Description placeholder
 *
 * @async
 * @param {String|null} condition 
 * @param {Context} context 
 * @returns {Context} 
 */
const iterate = async (condition, context) => {
	const { resolver, renderer } = context;
	condition = condition ? await resolver.resolve(condition, false) : false;
	if (condition){
		context.stop = true;
		return context;
	}
	await renderer.render(context);
	await context.waitForReady();	
	return context;
};

class Repeat extends Directive {
	constructor() {
		super();
	}

	get name() {
		return DIRECTIVENAME;
	}
	get rank() {
		return 3;
	}
	get phase() {
		return Directive.PHASE.template;
	}

	/**
	 * 
	 * @param {Context} context 
	 * @returns {Promise<Context>}
	 */
	async execute(context) {
		if (!(context.template instanceof HTMLElement) || (!context.template.attr(ATTRIBUTE.DATA) && !context.template.attr(ATTRIBUTE.COUNT))) return context;

		try {
			const { template, resolver} = context;
			const option = {
				data: (template.attr(ATTRIBUTE.DATA) || "").trim(),
				count: (template.attr(ATTRIBUTE.COUNT) || "").trim(),
				start: await resolver.resolve(template.attr(ATTRIBUTE.START) || "0"),
				step: await resolver.resolve(template.attr(ATTRIBUTE.STEP) || "1"),
				varname: (template.attr(ATTRIBUTE.VAR) || "item").trim(),
				status: (template.attr(ATTRIBUTE.STATUS) || "status").trim(),
				condition: template.attr(ATTRIBUTE.CONDITION)
			};

			context.stop = true;
			context.ignoreChildren = true;
			context.content = new DocumentFragment();

			if ((!option.data || option.data == "") && option.count) await doCount(option, context);
			else await doRepeat(option, context);
		} catch (error) {
			console.error("error at jstl-repeat:", error);
		}

		return context;
	}
}

Directive.define({ directive: new Repeat() });
