import Directive from "../Directive.js";
import Replace from "../elements/Replace.js"


class Initial extends Directive {
	constructor() {
		super();
	}

	get name() { return "initial" }
	get rank() { return Directive.MIN_RANK }
	get phase() { return Directive.PHASE.init }


	async execute(context) {
		const { template, renderer } = context;
		if (!(template instanceof Element))
			context.content = document.importNode(template, true);
		else if (template.attr("jstl-async")) {
			context.content = new Replace();
			template.attr("jstl-async", null);
			setTimeout(async () => {
				await renderer.render({ mode: "replace", target: context.content, context });
			}, parseInt(template.attr("jstl-async") || "250") || 250);
			context.stop = true;
			context.ignore = true;
		} else if (template.attr("jstl-ignore")) {
			context.content = document.importNode(template, true);
			context.stop = true;
			context.ignore = true;
		} else if (template instanceof HTMLTemplateElement) {
			context.content = document.createElement(template.tagName);
			const subcontext = context.subContext({
				template: template.content.childNodes,
				container: context.content.content
			});
			renderer.render({ context: subcontext });
			context.stop = true;
			context.ignore = true;
		} else if (template.tagName)
			context.content = document.createElement(template.tagName);
		else {
			context.content = document.importNode(template, true);
			context.stop = true;
			context.ignore = true;
		}

		return context;
	}
}

Directive.define({ directive: new Initial() });