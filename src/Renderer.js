import "@default-js/defaultjs-extdom";
import ExpressionResolver from "@default-js/defaultjs-expression-language/src/ExpressionResolver.js";
import Template from "./Template.js";
import Context from "./Context.js";
import Directive from "./Directive.js";
import Element from "./Element.js";
import "./directives";
import "./elements";


export const SCOPES = {
	application: "application",
	data: "data",
	render: "render",
	container: "container",
	node: "node",
	directive: "directive"
};

const APPLICATION_SCOPE_RESOLVER = new ExpressionResolver({ name: SCOPES.application });

const MODEWORKER = {
	"replace": async ({ container, target = null, content }) => {
		if (target) {
			target.replace(content);
		} else {
			container.empty();
			container.append(content);
		}
	},
	"append": async ({ container, target = null, content }) => {
		if (target)
			target.after(content);
		else
			container.append(content);
	},
	"prepend": async ({ container, target = null, content }) => {
		if (target)
			target.before(content);
		else
			container.prepend(content);
	}
}

const loadTemplate = (template) => {
	//@TODO use more Template.load
	if (!template)
		return null;
	else if (template instanceof Template)
		return template.template;
	else if (template instanceof Node || template instanceof NodeList || template instanceof HTMLCollection)
		return template;
	else if (typeof template === "string")
		return create(template);
	else
		return null;
}

export default class Renderer {
	constructor({ template, data } = {}) {
		this.template = loadTemplate(template);
		this.resolver = new ExpressionResolver({ name: SCOPES.data, context: data ? data : {}, parent: APPLICATION_SCOPE_RESOLVER });
	}

	/**
	 * @param 
	 * 		container HTMLElement -> target to render in
	 * @param
	 * 		data Object|... -> data to used at rendering
	 * @param
	 * 		template Template|Node|NodeList|HTMLCollection|String -> template to render
	 * @param
	 * 		mode "append"|"insert"|"replace"
	 * @param
	 * 		target
	 */
	async render({ template = null, data = null, container, root, mode="replace", target, context = null }) {
		template = loadTemplate(template) || this.template;
		let resolver = new ExpressionResolver({ name: SCOPES.render, context: data , parent: context ? context.resolver : this.resolver });

		let renderContext = context;
		if (!renderContext)
			renderContext = new Context({ resolver, renderer: this, container, root: root ? root : container, mode, target });
		else
			renderContext = context.clone({ resolver, container, root, mode, target });

		let result = null;
		if (template instanceof Node)
			result = await this.renderNode({ template, context: renderContext });
		else
			result = await this.renderContainer({ template, context: renderContext })

		if (result instanceof Context)
			renderContext = result;


		if (renderContext.content && renderContext.mode) {
			const modeworker = MODEWORKER[renderContext.mode];
			if (!modeworker)
				throw new Error("The \"" + renderContext.mode + "\" is not supported!")

			await modeworker(renderContext);
		}

		if (!context)
			await Promise.all(renderContext.ready.map(action => action({ renderContext })));
		else
			context.ready = renderContext.ready;

		return context;
	}


	async renderContainer({ template, context }) {
		if (template && template.length > 0) {
			const renderings = template.map(node => {
				//separate node context from the current context
				const resolver = new ExpressionResolver({ name: SCOPES.node, context: null, parent: context.resolver });
				return this.renderNode({ template: node, context: context.clone({ resolver }) })
			});
			const result = await Promise.all(renderings);
			if (!result)
				return context;

			context.content = result
				.filter(result => !!result)
				.reduce((content, result) => {
					const node = result.content;
					if (node instanceof Array)
						content = content.concat(node);
					else if (node instanceof Node)
						content.push(node);

					context.ready = result.ready;
					return content;
				}, []);

		}
		return context;
	}

	async renderNode({ template, context }) {
		template.normalize();

		let result = null;
		if (template instanceof Element)
			result = await template.execute({ template, context });
		else
			result = await this.executeDirectives({ template, context });

		if (result instanceof Context)
			context = result;

		if (!context.ignore && context.content) {
			const content = template.childNodes;
			if (content && content.length > 0) {
				// @TODO await or fire and forget???
				await context.renderer.render({ template: content, container: context.content, context });
			}
		}

		return context;
	}

	async executeDirectives({ template, context }) {
		//console.log("scope chain:", context.renderer.chain, "resolver chain", context.renderer.resolver.fullname);
		const directives = Directive.directives;
		const length = directives.length;
		for (let i = 0; i < length && !context.stop; i++) {
			const directive = directives[i];
			const accept = await directive.accept({ template, context });
			if (accept) {
				const result = await directive.execute({ template, context });
				if (result instanceof Context)
					context = result;
			}
		}
		return context;
	}

	clone({ template, data, scope } = {}) {
		return new Renderer({
			template: template ? template : this.template,
			data: data ? data : {},
			scope: scope ? scope : this.scope,
			parent: this.parent
		});
	}

	static async render({ container, data, template, mode, target }) {
		const renderer = new Renderer({ template, data });
		return renderer.render({ container, mode, target });
	}
}