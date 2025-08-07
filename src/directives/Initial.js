import Directive from "../Directive.js";
import Replace from "../elements/Replace.js";

const MARKER_IGNORE = "jstl-ignore";
const MARKER_IGNORE_CHILDS = "jstl-ignore-childs";
const MARKER_ASYNC = "jstl-async";
const MARKER_TAGNAME = "jstl-tagname";
const MARKER_IS = "is";

class Initial extends Directive {
	constructor() {
		super();
	}

	get name() {
		return "initial";
	}
	get rank() {
		return Directive.MIN_RANK;
	}
	get phase() {
		return Directive.PHASE.init;
	}

	async execute(context) {
		const { template, renderer, resolver } = context;
		if (!(template instanceof Element)) {
			context.content = document.importNode(template, true);
		} else if (template.hasAttribute(MARKER_IGNORE)) {
			context.content = document.importNode(template, true);
			context.content.removeAttribute(MARKER_IGNORE)
			context.stop = true;
			context.ignore = true;
		} else if (false && template.hasAttribute(MARKER_ASYNC)) {
			context.content = new Replace();
			template.attr(MARKER_ASYNC, null);
			const renderOption = context.toRenderOption({ mode: "replace", target: context.content });
			setTimeout(() => {
				renderer.render(renderOption);
			}, parseInt(template.attr(MARKER_ASYNC) || "250") || 250);
			context.stop = true;
			context.ignore = true;
		} else if (template instanceof HTMLTemplateElement) {
			context.content = document.createElement(template.tagName);
			const subContext = context.subContext({ template: template.content.childNodes, container: context.content.content });
			await renderer.render(subContext);
			context.stop = false;
			context.ignore = true;
		} else if (template.hasAttribute(MARKER_TAGNAME)) {
			let tagname = template.attr(MARKER_TAGNAME).trim();
			if (tagname.length > 0) context.content = document.createElement(await resolver.resolveText(template.attr(MARKER_TAGNAME)));
			else {
				context.content = document.importNode(template, true);
				context.stop = true;
				context.ignore = true;
			}
		} else if (template.tagName) {
			let is = template.attr(MARKER_IS);
			if(is){
				is = await resolver.resolveText(is);
				const element = document.createElement(template.tagName, { is });
				element.attr(MARKER_IS, is);
				context.content = element;
			}else
				context.content =  document.createElement(template.tagName);

		} else {
			context.content = document.importNode(template, true);
			context.stop = true;
			context.ignore = true;
		}

		if(!context.stop && template.hasAttribute(MARKER_IGNORE_CHILDS)){
			context.ignore = true;
			const clone = document.importNode(template, true);
			if(template instanceof HTMLTemplateElement)
				context.content.content.append(clone.content);
			else
				context.content.append(clone.childNodes);
		}

		return context;
	}
}

Directive.define({ directive: new Initial() });
