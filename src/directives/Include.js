import Context from "../Context.js";
import Directive from "../Directive.js";
import Template from "../Template.js";

const ATTRIBUTE_BASE = "jstl-include";

class Include extends Directive {
	constructor() {
		super();
	}

	get name() {
		return "include";
	}
	get rank() {
		return Directive.MIN_RANK;
	}
	get phase() {
		return Directive.PHASE.template;
	}

	/**
	 *
	 * @param {Context} context
	 * @returns
	 */
	async execute(context) {
		if (
			!(context.template instanceof HTMLElement) ||
			!context.template.attr(ATTRIBUTE_BASE)
		)
			return context;
		try {
			const { template, resolver, renderer } = context;
			let include = template.attr(ATTRIBUTE_BASE);
			include = await resolver.resolveText(include);
			include = new URL(include, location);
			include = await Template.load(include);

			context.stop = true;
			context.ignoreChildren = true;
			await renderer.render(
					new Context({
						template: include,
						container: context.content,
						renderer: context.renderer,
					})
			);
		} catch (e) {
			console.error(e, context.template);
		}

		return context;
	}
}

Directive.define({ directive: new Include() });
