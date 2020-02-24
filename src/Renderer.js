import "@default-js/defaultjs-extdom";
import ExpressionResolver from "@default-js/defaultjs-expression-language/src/ExpressionResolver.js";
import Template from "./Template.js";
import Context from "./Context.js";
import Directive from "./Directive.js";
import DirectiveResult from "./DirectiveResult.js";
import "./directives";


export const SCOPES = {
		application : "application",
		renderer : "renderer",
		data : "data",
		container : "container",
		node : "node",
		directives : "directives" 
};

const applicationResolver = new ExpressionResolver({name:SCOPES.application});

const filterResolver = (resolver, filter, last=false) => {
	if(!resolver)
		return null;
	else if(last)		
		return resolver.name == filter ? resolver : filterResolver(resolver.parent, filter, true);	
	else{
		const result = filterResolver(resolver.parent, filter);
		return result ? result : (resolver.name == filter ? resolver : null);
	}
};


const traverse = async ({template, resolver, container, context}) => {
	const content = [];	
	if(template && template.length > 0){
		let containerResolver = filterResolver(resolver, SCOPES.container); 
		if(!containerResolver)
			containerResolver = new ExpressionResolver({name: SCOPES.container, context: {$container: container}, parent: resolver});
		
		const length = template.length;
		for(let i = 0; i < length; i++) {
			const {node} = await renderNode({
				resolver: containerResolver, 
				template: template[i], 
				container: container,
				context: context
			});
	
			if(node)
				content.push(node);
		}	
	}
	return {content: content, context: context};
};

const renderNode = async ({resolver, template, container, context}) => {
	const nodeResolver = new ExpressionResolver({name: SCOPES.node, context: {}, parent: resolver});
	const result = await executeDirectives({ 
		resolver: nodeResolver, 
		template: template, 
		container: container,
		context: context
	});
		
	if(!result.node)
		return result;
	
	if(!result.ignore){
		const templateNodes = template.childNodes;
		if(templateNodes && templateNodes.length > 0){
			const {content} = await traverse({ 
				resolver: resolver, 
				template: templateNodes, 
				container: container,
				context: context
			});
			result.node.append(content);
		}
	}
	
	return result;	
};

const executeDirectives = async ({resolver, template, container, context}) => {
	const directiveResolver = new ExpressionResolver({name: SCOPES.directives, context: {}, parent: resolver});
	console.log("resolver chain:", directiveResolver.fullname );
	const directives = Directive.directives;
	const length = directives.length;
	let result = new DirectiveResult();
	for(let i = 0; i < length; i++){
		const directive = directives[i];
		const accept = await directive.accept({node: result.node, resolver: directiveResolver, template: template, container: container, context: context});
		if(accept){
			result = await directive.execute({node: result.node, resolver: directiveResolver, template: template, container: container, context: context});
			if(result.stop)
				return result;
		}		
	}	
	return result;
}

const MODEWORKER = {
	"replace" : async ({container, target = null, content}) => {
		if(target){
			target.replace(content);
		} else {
			container.empty();
			container.append(content);
		}
	},
	"append" : async ({container, target = null, content}) => {		
		if(target)
			target.after(content);
		else
			container.append(content);
	},
	"prepend" : async ({container, target = null, content}) => {
		if(target)
			target.before(content);
		else
			container.prepend(content);
	}
}

export default class Renderer {	
	constructor({data, parent = null} = {}){
		this.parent = (parent instanceof Renderer ) ? parent : null;
		if(data instanceof ExpressionResolver)
			this.resolver = data;
		else if(data)
			new ExpressionResolver({name: SCOPES.renderer, context: data, parent: applicationResolver});
		else			
			this.resolver = applicationResolver; 
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
	async render({container, data = null, template, cache = false, mode = "replace", target}){
		if(!(template instanceof Template))
			template = await Template.load(template, cache, container.selector());
		
		let resolver = null;
		if(data instanceof ExpressionResolver)
			resolver = data;
		else {			
			const dataResolver = new ExpressionResolver({name: SCOPES.data, context: data, parent: this.resolver});
			resolver = new ExpressionResolver({name: SCOPES.renderer, context: {$root: container}, parent: dataResolver});
		}
		
		const templateNodes = template.template.content.childNodes;
		const {content, context} = await traverse({
			template : templateNodes,
			resolver : resolver,
			container : container,
			context : new Context(this, container)
		});
		
		if(mode){
			const modeworker = MODEWORKER[mode];
			if(!modeworker)
				throw new Error("The \"" + mode + "\" is not supported!")
					
			await modeworker({container, target, content});
		}
		
		//@TODO build Context Class
		if(context.ready)
			;
		
		return content;
	}
	
	static async render(option) {
		const renderer = new Renderer();		
		return await renderer.render(option);
	}	
}