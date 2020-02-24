import "@default-js/defaultjs-extdom";
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
	const nodeResolver = new ExpressionResolver({name:"node", context: {}, parent: resolver});
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
				resolver: nodeResolver, 
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
	const directives = Directive.directives;
	const length = directives.length;
	let result = new DirectiveResult();
	for(let i = 0; i < length; i++){
		const directive = directives[i];
		const accept = await directive.accept({node: result.node, resolver: resolver, template: template, container: container, context: context});
		if(accept){
			result = await directive.execute({node: result.node, resolver: resolver, template: template, container: container, context: context});
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
		
	},
	"prepend" : async ({container, target = null, content}) => {}
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
		
		let resolver = null;
		if(data instanceof ExpressionResolver)
			resolver = data;
		else {
			const rendererResolver = new ExpressionResolver({name:"render", context: {$root: container}, parent: this.resolver});
			resolver = new ExpressionResolver({name:"data", context: data, parent: rendererResolver});
		}
		
		const templateNodes = template.template.content.childNodes;
		const {content, context} = await traverse({
			template : templateNodes,
			resolver : resolver,
			container : container,
			context : new Context(this, container)
		});
				
		//@TODO implementing mode logic
		if(mode == "replace"){
			if(target){				
				console.log("target", target, "content", content);
				target.replace(content);
			} else {
				container.empty();
				container.append(content);
			}
		} else if (mode == "append"){
			throw new Error("Not implemented!");
		} else if (mode == "prepend"){
			throw new Error("Not implemented!");
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