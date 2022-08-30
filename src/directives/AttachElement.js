import Directive from "../Directive.js";

const ATTRIBUTE__ATTACHELEMENT = "jstl-attach-element";
const ATTRIBUTE__ATTACHELEMENT_MODE = "jstl-attach-element-mode";

const MODE_APPEND = "append";
const MODE_PREPEND = "prepend";
const MODE_REPLACE = "replace";

const getElement = async (template, resolver) => {
	const expression = template.attr(ATTRIBUTE__ATTACHELEMENT);
	try{
		//check first, if an element find on document by expression
		const result = find(expression)
		if(result && result.length > 0)
			return result.length == 0 ? result.first() : result;
	}catch(e){}
	const element = await resolver.resolve(expression);	
	if (element instanceof HTMLElement) return element;
	return null;
};

class AttachElement extends Directive {
	constructor() {
		super();
	}

	get name() {
		return "attach-element";
	}
	get rank() {
		return Directive.MIN_RANK + 1;
	}
	get phase() {
		return Directive.PHASE.content;
	}

	async execute(context) {
		const { resolver, template, content } = context;
		if (!(template instanceof HTMLElement) || !template.attr(ATTRIBUTE__ATTACHELEMENT)) return context;
		try {
			let element = await getElement(template, resolver);
			if (element) {
				const mode = template.attr(ATTRIBUTE__ATTACHELEMENT_MODE) || MODE_REPLACE;
				if (mode == MODE_REPLACE) {
					content.empty().append(element);
					context.stop = true;
					context.ignore = true;
				} else {
					context.ready(({ content }) => {
						if (content) {
							if (mode == MODE_APPEND) content.append(element);
							else if (mode == MODE_PREPEND) content.prepend(element);
						}
					});
				}
			}
		} catch (e) {
			console.log(e, { context });
		}

		return context;
	}
}
Directive.define({ directive: new AttachElement() });
