import Directive from "../Directive.js";

const ATTRIBUTE_NAME = /([\?\+])?(jstl)?([^\?\+]+)/i;

const processAttribute = async ({ type, name, value, context }) => {
	if(name == "attr")
		debugger;
	const { resolver, content, template } = context;
	let boolean = type == "?" ? value : template.attr("?" + name);
	let attribute = type == "+" ? value : template.attr("+" + name);

	if (boolean && attribute) {
		boolean = await resolver.resolve(boolean, false);
		if (boolean === true)
			content.attr(name, await resolver.resolveText(attribute));
	} else if (boolean) {
		boolean = await resolver.resolve(boolean, false);
		if (boolean === true)
			content.attr(name, true);
	} else if (attribute) {
		content.attr(name, await resolver.resolveText(attribute));
	}
};

const appendAttribute = async ({ name, value, context }) => {
	const { resolver, content } = context;
	content.attr(name, await resolver.resolveText(value));
};

class Attribute extends Directive {
	constructor() {
		super();
	}

	get name() { return "attribute" }
	get rank() { return 10000 }



	async execute(context) {
		const { template } = context;
		if (!(template instanceof HTMLElement))
			return context;
			
		const processed = new Set();
		for (const attribute of template.attributes) {
			const [, type, jstl, name] = ATTRIBUTE_NAME.exec(attribute.name);
			if (!jstl && !processed.has(name)) {				
				const value = attribute.value;
				if (type )
					await processAttribute({ type, name, value, context })
				else
					await appendAttribute({ name, value, context })
			}
			processed.add(name);
		}

		return context;
	}
}

Directive.define({ directive: new Attribute() });