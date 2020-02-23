import ExpressionResolver from "@default-js/defaultjs-expression-language/src/ExpressionResolver.js";
import Template from "./Template.js";
import Context from "./Context.js";
import Directive from "./Directive.js";
import DirectiveResult from "./DirectiveResult.js";
import "./directives";


const applicationResolver = new ExpressionResolver({name:"application"});

const traverse = async ({template, resolver, container, context}) => {
	const content = [];	
	if(template && template.length > 0){
		const containerResolver = new ExpressionResolver({name:"container", context: {$container: container}, parent: resolver});
		const length = template.length;
		for(let i = 0; i < length; i++){
			const {node} = await renderNode({
				resolver: containerResolver, 
				template: template[i], 
				container: container,
				context: context
			});
			
			content.push(node);
		}	
	}
	return {content: content, context: context};
};

const renderNode = async ({resolver, template, container, context}) => {	
	const nodeResolver = new ExpressionResolver({name:"node", context: {}, parent: resolver});
	const result = await executeDirectives({ 
		resolver: nodeResolver, 
		template: template, 
		container: container,
		context: context
	});
		
	const templateNodes = template.childNodes;
	if(templateNodes && templateNodes.length > 0){
		const {content} = await traverse({ 
			resolver: nodeResolver, 
			template: templateNodes, 
			container: container,
			context: context
		});
		result.node.append(content);
	}
	
	return {node: result.node};	
};

const executeDirectives = async ({resolver, template, container, context}) => {
	const directives = Directive.directives;
	const length = directives.length;	
	let result = new DirectiveResult({node: template.cloneNode(false)});
	for(let i = 0; i < length; i++){
		const directive = directives[i];
		const accept = await directive.accept({node: result.node, resolver: resolver, template: templateNodes, container: container, context: context});
		if(accept){
			result = await directive.accept({node: result.node, resolver: resolver, template: templateNodes, container: container, context: context, result: result});
			if(result.stop)
				return result;
		}		
	}	
	return result;
}

export default class Renderer {	
	constructor({data, parent = null} = {}){
		this.parent = (parent instanceof Renderer ) ? parent : null;
		if(data instanceof ExpressionResolver)
			this.resolver = data;
		else if(data)
			new ExpressionResolver({name:"renderer", context: data, parent: applicationResolver});
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
		
		const rendererResolver = new ExpressionResolver({name:"render", context: {$root: container}, parent: this.resolver});
		const resolver = new ExpressionResolver({name:"data", context: data, parent: rendererResolver});
		const templateNodes = template.template.content.childNodes;
		const {content, context} = await traverse({
			template : templateNodes,
			resolver : resolver,
			container : container,
			context : new Context(this, container)
		});
		
		console.log("render:", content);
		
		//@TODO implementing mode logic
		container.empty();
		container.append(content);
		
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