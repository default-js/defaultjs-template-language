import Context from "./Context.js";


const DEFINED_DIRECTIVES = [];


/**
 * Checks a directive and sorts it into the defined directives: by phase, then by rank, at the same
 * rank after those defined before.
 *
 * @param {object} anOption
 * @param {Directive} anOption.directive - the directive to define
 * @throws {Error} if `directive` is not a `Directive`, or one of its members does not meet its description
 */
const defineDirective = ({ directive }) => {
	if (!(directive instanceof Directive))
		throw new Error("The directive does not extend the class Directive!");

	const { name, rank, phase } = directive;
	if (typeof name !== "string" || name.length == 0)
		throw new Error("The name of a directive must be a non-empty string!");

	if (DEFINED_DIRECTIVES.some((aDirective) => aDirective.name == name))
		throw new Error(`A directive named "${name}" is already defined!`);

	if (typeof rank !== "number" || !(rank >= Directive.MIN_RANK && rank <= Directive.MAX_RANK))
		throw new Error(`The rank of the directive "${name}" must be a number from ${Directive.MIN_RANK} to ${Directive.MAX_RANK}!`);

	if (!Object.values(PHASE).includes(phase))
		throw new Error(`The phase of the directive "${name}" must be one of Directive.PHASE!`);

	if (directive.execute === Directive.prototype.execute)
		throw new Error(`The directive "${name}" does not implement execute!`);

	DEFINED_DIRECTIVES.push(directive);
	DEFINED_DIRECTIVES.sort((a, b) => {
		const phase = a.phase - b.phase;
		if(phase == 0)
			return a.rank - b.rank;

		return phase;
	});
};

/**
 * The phases the directives of a node run in, in this order.
 *
 * @readonly
 * @enum {number}
 */
export const PHASE = {
	init: 0,
	data: 1,
	template: 2,
	content: 3,
	finish: 4
};

/**
 * The base class of a directive. A class extending it implements `name`, `rank` and `execute`, and
 * `phase` for a phase other than `finish`.
 */
export default class Directive {

	/**
	 * The phases the directives of a node run in.
	 *
	 * @returns {typeof PHASE}
	 */
	static get PHASE() { return PHASE };
	/**
	 * The lowest rank of a directive.
	 *
	 * @returns {number}
	 */
	static get MIN_RANK() { return 0 };
	/**
	 * The highest rank of a directive.
	 *
	 * @returns {number}
	 */
	static get MAX_RANK() { return 100000 };

	constructor() { };

	/**
	 * The name of the directive, unique among the defined directives.
	 *
	 * @abstract
	 * @returns {string}
	 */
	get name() { }
	/**
	 * The order of the directive within its phase, from `Directive.MIN_RANK` to `Directive.MAX_RANK`.
	 *
	 * @abstract
	 * @returns {number}
	 */
	get rank() { }
	/**
	 * The phase the directive runs in; `Directive.PHASE.finish` unless a class implements it.
	 *
	 * @returns {PHASE}
	 */
	get phase() {return PHASE.finish}

	/**
	 * Runs the directive on the node of a context.
	 *
	 * @abstract
	 * @param {Context} aContext - the context of the node
	 * @returns {Promise<Context>} the context
	 */
	async execute(aContext) {
		return aContext;
	}

	/**
	 * Defines a directive: from then on it runs in every rendering.
	 *
	 * @param {object} anOption
	 * @param {Directive} anOption.directive - the directive to define
	 * @throws {Error} if `directive` is not a `Directive`, or one of its members does not meet its description
	 */
	static define(anOption) {
		defineDirective(anOption);
	}


	/**
	 * The defined directives, in the order they run.
	 *
	 * @returns {Array<Directive>}
	 */
	static get directives() {
		return DEFINED_DIRECTIVES;
	}
};
