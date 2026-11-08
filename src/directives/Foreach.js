import Directive from "../Directive.js";
import ExpressionResolver from "@default-js/defaultjs-expression-language/src/ExpressionResolver.js";
import {isUndefinedOrNullOrBlank, isUndefinedOrNull} from "../Utils.js";
import Context from "../Context.js";


const BASEATTRIBUTE = "jstl-foreach";

const ATTRIBUTE = {
	DATA: BASEATTRIBUTE,
	VAR: `${BASEATTRIBUTE}-var`,
	STATUS: `${BASEATTRIBUTE}-status`,
	COUNT: `${BASEATTRIBUTE}-count`,
	START: `${BASEATTRIBUTE}-start`,
	STEP: `${BASEATTRIBUTE}-step`,
	CONDITION: `${BASEATTRIBUTE}-condition`
};


/**
 * @param {object} option 
 * @param {number} option.start 
 * @param {number} option.step 
 * @param {number} option.count 
 * @param {string} option.varname 
 * @param {string} option.status 
 * @param {ExpressionResolver} option.resolver 
 * @returns {Promise<void>}
 */
const doCount = async ({  start, step, count, varname, status, condition}, context) => {
	const { resolver } = context;

	count = await resolver.resolve(count);
	const length = start + (count * step);
	let stop = false;
	for (let i = start; i < length && !stop; i = i + step) {
		const iteration = {}
		iteration[varname] = i;
		iteration[status] = {
			first: i === start,
			last: i >= length - step,
			index: i,
			number: i + 1,
			step,
			count
		};
		let itemContext = toContext(iteration, context);
		itemContext = await iterate(condition, itemContext);
		stop = itemContext.stop;
	}
};



/**
 * @param {object} option 
 * @param {Array<any>|any} option.data 
 * @param {number} option.start 
 * @param {number} option.step 
 * @param {number} option.count 
 * @param {string} option.varname 
 * @param {string} option.status 
 * @param {ExpressionResolver} option.resolver 
 * @returns {Promise<void>}
 */
const doForeach = async ({ data, start, step, count, varname, status, condition}, context) => {
	const { resolver } = context;

	data = await resolver.resolve(data, []);
	let array = data;
	const isObject = !(data instanceof Array);
	if (isObject) array = Object.getOwnPropertyNames(data);

	count = count != "" ? await resolver.resolve(count, 0) : null;
	const length = count ? Math.min(start + count, array.length) : array.length;
	let stop = false;
	for (let i = start; i < length && !stop; i = i + step) {
		const iteration = {}
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

const toContext = (iteration, context) => {
	return new Context({
		template: context.template.childNodes,
		container: context.content,
		renderer: context.renderer,
		resolver: new ExpressionResolver({ context: iteration, name: BASEATTRIBUTE, parent: context.resolver })
	});
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
	const { resolver, renderer, template, container } = context;
	condition = condition ? await resolver.resolve(condition, false) : false;
	if (condition){
		context.stop = true;
		return context;
	}await renderer.render(context);
	await context.waitForReady();	
	return context;
};

class Foreach extends Directive {
	constructor() {
		super();
	}

	get name() { return "foreach" }
	get rank() { return Directive.MIN_RANK + 2 }
	get phase() { return Directive.PHASE.template }

	
	/**
	 * Description placeholder
	 *
	 * @async
	 * @param {Context} context 
	 * @returns {unknown} 
	 */
	async execute(context) {
		if (!(context.template instanceof HTMLElement) || (!context.template.attr(ATTRIBUTE.DATA) && !context.template.attr(ATTRIBUTE.COUNT)))
			return context;

		context.ignoreChildren = true;

		try {
			const { template, resolver } = context;
			const data = (template.attr(ATTRIBUTE.DATA) || "").trim();
			const count = (template.attr(ATTRIBUTE.COUNT) || "").trim();
			const option = {
				data,
				count,
				start: await resolver.resolve(template.attr(ATTRIBUTE.START) || "0"),
				step: await resolver.resolve(template.attr(ATTRIBUTE.STEP) || "1"),
				varname: (template.attr(ATTRIBUTE.VAR) || "item").trim(),
				status: (template.attr(ATTRIBUTE.STATUS) || "status").trim(),
				condition: template.attr(ATTRIBUTE.CONDITION)
			};
			if (isUndefinedOrNullOrBlank(data) && !isUndefinedOrNullOrBlank(count))
				await doCount(option, context);
			else if(!isUndefinedOrNullOrBlank(data))
				await doForeach(option, context);

		} catch (error) {
			console.error("error at jstl-foreach:", error);
		}
		return context;

	}
};

Directive.define({ directive: new Foreach() });