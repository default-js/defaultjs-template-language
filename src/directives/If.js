import Directive from "../Directive.js";

const ATTRIBUTE_NAME = "jstl-if";

class If extends Directive {
	constructor() {
		super();
	}

	get name() { return "if" }
	get rank() { return 1000 }
	get phase() { return Directive.PHASE.control }

	async execute(context) {
		const { template, resolver } = context;
		if (!(template instanceof HTMLElement) || !template.attr(ATTRIBUTE_NAME))
			return context;

		const expression = template.attr(ATTRIBUTE_NAME);
		const result = await resolver.resolve(expression, false);
		if (!result) {
			context.content = null;
			context.stop = true;
			context.ignoreChildren = true;
		}

		return context;
	}
}

Directive.define({ directive: new If() });