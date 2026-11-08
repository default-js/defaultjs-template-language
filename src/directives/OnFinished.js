import Context from "../Context.js";
import Directive from "../Directive.js";
import ExpressionResolver from "@default-js/defaultjs-expression-language/src/ExpressionResolver.js";

const NAME = "on-finished";
const ATTRIBUTE_ON_FINISHED = `jstl-${NAME}`;
const ATTRIBUTE_ON_FINISHED_ASYNC = `${ATTRIBUTE_ON_FINISHED}-async`;

class OnFinished extends Directive {
	constructor() {
		super();
	}

	get name() { return NAME }
	get rank() { return Directive.MAX_RANK }
	get phase() { return Directive.PHASE.finish }



	
	/**
	 * Description placeholder
	 *
	 * @async
	 * @param {Context} context 
	 * @returns {Context} 
	 */
	async execute(context) {
		const { template, content } = context;
		if (!(template instanceof HTMLElement) || !template.hasAttribute(ATTRIBUTE_ON_FINISHED))
			return context;

		const expression = template.attr(ATTRIBUTE_ON_FINISHED);
		const asyncCall = template.hasAttribute(ATTRIBUTE_ON_FINISHED_ASYNC);

		const resolver = new ExpressionResolver({ context: {
			$element: content,
			$template: template
		}, name: ATTRIBUTE_ON_FINISHED, parent: context.resolver });

		
		context.addCallback(async () => {
			try {
				if(!asyncCall)
					return resolver.resolve(expression, null);
					
				resolver.resolve(expression, null);
			} catch (e) {
				console.error(e);
			}
		}, true);

		return context;
	}
}

Directive.define({ directive: new OnFinished() });