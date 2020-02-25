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

const loadTemplate = (template) => {
	if(!template)
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
	constructor({ template, data, scope = SCOPES.application, parent = null } = {}) {
		this.scope = scope;
		this.template = loadTemplate(template);

		this.parent = (parent instanceof Renderer) ? parent : null;
		if (data)
			this.resolver = new ExpressionResolver({ name: scope ? scope : SCOPES.data, context: data, parent: parent ? parent.resolver : APPLICATION_SCOPE_RESOLVER });
		else if (this.parent)
			this.resolver = this.parent.resolver;
		else
			this.resolver = APPLICATION_SCOPE_RESOLVER;
	}
	
	get chain() {
		return this.parent ? this.parent.chain + "/" + this.scope : "/" + this.scope
	}

	scopeFilter(scope, last = false) {
		if (last)
			return this.scope == scope ? this : this.parent.scopeFilter(scope, true);
		else {
			const result = this.parent ? this.parent.scopeFilter(scope) : null;
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
		template = loadTemplate(template);
		let renderer = null;
		if(context){
			//not first call
			renderer = this.scopeFilter(SCOPES.renderer);
			context = context.clone({ renderer, container, root, target });
		} else {
			// first call
			renderer = new Renderer({data: data ? data : {}, scope: SCOPES.renderer, parent: this });
			context = new Context({
				renderer, 
				container, 
				root: root ? root : container, 
				target
			});		
		};
		


		let result = null;
		if (template instanceof Node)
			result = await renderer.renderNode({ template: (template ? template : this.template), context });
		else
			result = await renderer.renderContainer({ template: (template ? template : this.template), context })

		if (result instanceof Context)
			context = result;


		if (mode) {
			const modeworker = MODEWORKER[mode];
			if (!modeworker)
				throw new Error("The \"" + mode + "\" is not supported!")

			await modeworker(context);
		}

		if (!root || container == root)
			await Promise.all(context.ready.map(action => action({ context })));

		return context.content;
	}


	async renderContainer({ template, context }) {
		if (template && template.length > 0) {
			let renderer = context.renderer.scopeFilter(SCOPES.container);
			if (renderer)
				renderer = renderer.clone({ template });
			else
				renderer = new Renderer({ template, data: {}, scope: SCOPES.container, parent: context.renderer });

			context = context.clone({ renderer });
			const renderings = template.map(node => renderer.renderNode({ template: node, context }));

			let content = await Promise.all(renderings);
			content = content.filter(context => !!context.content).map(context => context.content);

			if (content.length > 0) {
				context.content = [];
				content.forEach(result => {
					if (result instanceof Array || result instanceof NodeList || result instanceof HTMLCollection)
						context.content = context.content.concat(result);
					else if (result instanceof Node)
						context.content.push(result);
				});
			}
		}
		return context;
	}

	async renderNode({ template, context }) {
		let renderer = new Renderer({ template, data: {}, scope: SCOPES.node, parent: context.renderer });
		context = context.clone({ renderer })
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

		return context;
	}

	async executeDirectives({ template, context }) {
		console.log("scope chain:", context.renderer.chain, "resolver chain", context.renderer.resolver.fullname);
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
		return context;
	}

	clone ({ template, data, scope } = {}) {
		return new Renderer({
			template: template ? template : this.template,
			data: data ? data : {},
			scope: scope ? scope : this.scope,
			parent: this.parent
		});
	}

	static async render({ container, data, template, mode, target }) {
		const renderer = new Renderer({ template, data, scope: SCOPES.render });
		return renderer.render({ container, mode, target });
	}
}