import "@default-js/defaultjs-extdom";
import ExpressionResolver from "@default-js/defaultjs-expression-language/src/ExpressionResolver.js";
import Template from "./Template.js";
import Context from "./Context.js";
import Directive from "./Directive.js";
import "./directives";
import "./elements";


export const SCOPES = {
	application: "application",
	data: "data",
	renderer: "renderer",
	container: "container",
	node: "node",
	//directives : "directives" 
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

export default class Renderer {
	constructor({ template, data, scope = SCOPES.renderer, parent = null } = {}) {
		this.scope = scope;
		if (template instanceof Template)
			this.template = template.template;
		else if (template instanceof Node || template instanceof NodeList || template instanceof HTMLCollection)
			this.template = template;
		else if (typeof template === "string")
			this.template = create(template);
		else
			this.template = null;

		this.parent = (parent instanceof Renderer) ? parent : null;
		if (data)
			this.resolver = new ExpressionResolver({ name: scope ? scope : SCOPES.data, context: data, parent: parent ? parent.resolver : APPLICATION_SCOPE_RESOLVER });
		else
			this.resolver = new ExpressionResolver({ name: SCOPES.application });
	}

	get scopechain() {
		return this.parent ? this.parent.scopechain + "/" + this.scope : this.scope
	}

	scopeFilter(scope, last = false) {
		if (last)
			return this.scope == scope ? this : this.parent.filterChain(scope, true);
		else {
			const result = this.parent ? this.parent.filterChain(scope) : null;
			return result ? result : (this.scope == scope ? this : null);
		}
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
	async render({ template = null, data = null, container, root, mode = "replace", target, context = null }) {

		let renderer = this;
		if (data || template)
			renderer = new Renderer({ template: template ? template: this.template, data: data ? data : {}, scope: SCOPES.renderer, parent: this });
			
		context = context ? context : new Context(this, null, container, root ? root : container, null)
		let content = null;
		if (template instanceof Node) {
			await renderer.renderNode({ template: (template ? template : this.template), context });
			content = context.content;
		} else
			content = await renderer.renderContainer({ context })

		if (mode) {
			const modeworker = MODEWORKER[mode];
			if (!modeworker)
				throw new Error("The \"" + mode + "\" is not supported!")

			await modeworker({ container, target, content });
		}

		if (!root || container == root)
			await Promise.all(
				context.ready.map(action =>
					action({ renderer: this, container, context })
				)
			);


		return content;
	}


	async renderContainer({ template = this.template, context }) {
		if (template && template.length > 0) {
			const length = template.length;
			const renderer = new Renderer({ template, data: {}, scope: SCOPES.container, parent: context.renderer });
			const renderings = [];
			for (let i = 0; i < length; i++) {
				renderings.push(renderer.renderNode({
					template: template[i],
					context: context.clone({ renderer: renderer })
				}));
			}

			let content = await Promise.all(renderings);
			return content.filter(node => !!node);
		}
		return context;
	}

	async renderNode({ template, context }) {
		const renderer = new Renderer({ template, data: {}, scope: SCOPES.node, parent: context.renderer });
		context = context.clone({ renderer: renderer })
		const result = await this.executeDirectives({ template, context });
		if (result instanceof Context)
			context = context;

		if (!context.content)
			return null;

		if (!context.ignore) {
			const content = template.childNodes;
			if (content && content.length > 0) {
				const contentContext = context.clone({ container: context.content });
				// @TODO await or fire and forget???
				await context.renderer.render({ template: content, context: contentContext, mode: "replace" });
			}
		}

		return result;
	}

	async executeDirectives({ template, context }) {
		console.log("scope chain:", context.renderer.scopechain);
		const directives = Directive.directives;
		const length = directives.length;
		for (let i = 0; i < length; i++) {
			const directive = directives[i];
			const accept = await directive.accept({ template, context });
			if (accept) {
				const result = await directive.execute({ template, context });
				if (result instanceof Context)
					context = result;
			}
		}
		return result;
	}


	static async render({ container, data, template, mode, target }) {
		const renderer = new Renderer({ template, data, scope: SCOPES.render });
		return renderer.render({ container, mode, target });
	}
}