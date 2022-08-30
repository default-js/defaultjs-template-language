import Directive from "../Directive.js";
import Template from "../Template.js";

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

	async execute(context) {
		if (!(context.template instanceof HTMLElement) || !context.template.attr("jstl-include")) return context;
		try {
			const { template, resolver, renderer } = context;
			let include = template.attr("jstl-include");
			include = await resolver.resolveText(include);
			include = new URL(include, location);
			include = await Template.load(include);

			const mode = template.attr("jstl-include-mode") || "replace";

			const subContext = context.subContext({ template: include, container: context.content, mode});
			await renderer.render(subContext);
			await subContext.ready();
			context.ignore = true;
			context.stop = true;

			return context;
		} catch (e) {
			console.error(e, context.template);
			return context;
		}
	}
}

Directive.define({ directive: new Include() });
