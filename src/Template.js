import "@default-js/defaultjs-common-utils/src/javascript/String.js";

const CACHE = {};
const TEST_URL = /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g;

const getKey = (template, cache, alias) => {
	if(!cache)
		return null;
	
	let key = null;
	if(alias)
		key = alias;	
	else if(typeof template === "string")
		key = template;
	else if(template instanceof URL)
		key = template.toString();
	else if(template instanceof HTMLElement)
		key = template.selector();
	
	if(key)
		return key.hashcode();
	
	return null;
};

const fromURL = async (url, cache, key) => {
	const response = await fetch(url.toString());
	const source = await response.text();
	return fromSource(source, cache, key);
};

const fromSource = async (source, cache, key) => {
	return fromElement(create(source, true), cache, key);
};

const fromElement = async (element, cache, key) => {	
	let template = null
	if(element instanceof HTMLTemplateElement)			
		template = new Template(element);
	else {
		const content = template = document.createElement("template");
		if(element instanceof Node)
			template.append(element.cloneNode(true));
		else if(element instanceof NodeList || element instanceof HTMLCollection)
			template.append(element.map(i => i.cloneNode(true)));
		else
			throw new Error("Template type is not supported!");			
		
		template = new Template(content, key);
	}
	
	if(cache && key)
		CACHE[key] = template;
	
	return template;
};

export default class Template {	
	constructor(template, key){		
		this.template = template;
		this.key = key;	
	}
	
	remove() {
		if(this.key && CACHE[this.key])
			delete CACHE[this.key];		
	};
	
	static async load(template, cache = true, alias = null){
		if(template instanceof Template)
			return template;
		
		const key = getKey(template,cache, alias);
		if(key && CACHE[key])
			return CACHE[key];
		else if(typeof template === "string"){
			if(TEST_URL.test(template))
				return fromURL(new URL(template, location.origin),cache, key);
			
			return fromSource(template, cache, key);
		}else if(template instanceof URL)
			return fromURL(template, cache, key);
		else if(template instanceof Node || template instanceof NodeList || template instanceof HTMLCollection)
			return fromElement(template, cache, key);
		
		new Error("The template isn't a allowed type! -> [String|URL|Node|NodeList|HTMLCollection] required!");
	}	
};
