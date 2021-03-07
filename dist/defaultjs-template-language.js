/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./browser.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./browser.js":
/*!********************!*\
  !*** ./browser.js ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _default_js_defaultjs_common_utils_src_Global_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @default-js/defaultjs-common-utils/src/Global.js */ "./node_modules/@default-js/defaultjs-common-utils/src/Global.js");
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.js */ "./index.js");



_default_js_defaultjs_common_utils_src_Global_js__WEBPACK_IMPORTED_MODULE_0__["default"].defaultjs = _default_js_defaultjs_common_utils_src_Global_js__WEBPACK_IMPORTED_MODULE_0__["default"].defaultjs || {};
_default_js_defaultjs_common_utils_src_Global_js__WEBPACK_IMPORTED_MODULE_0__["default"].defaultjs.jstl = _default_js_defaultjs_common_utils_src_Global_js__WEBPACK_IMPORTED_MODULE_0__["default"].defaultjs.tl = _default_js_defaultjs_common_utils_src_Global_js__WEBPACK_IMPORTED_MODULE_0__["default"].defaultjs.tl || {
	VERSION : "1.0.0-beta.23",
	Template: _index_js__WEBPACK_IMPORTED_MODULE_1__["Template"],
	Renderer: _index_js__WEBPACK_IMPORTED_MODULE_1__["Renderer"]
};

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! exports provided: Template, Renderer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_Template_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/Template.js */ "./src/Template.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Template", function() { return _src_Template_js__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _src_Renderer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/Renderer.js */ "./src/Renderer.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Renderer", function() { return _src_Renderer_js__WEBPACK_IMPORTED_MODULE_1__["default"]; });






/***/ }),

/***/ "./node_modules/@default-js/defaultjs-common-utils/src/Global.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-common-utils/src/Global.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {const GLOBAL = (() => {
	if(typeof global !== "undefined") return global;
	if(typeof window !== "undefined") return window;	
	if(typeof self !== "undefined") return self;
	return {};
})();

/* harmony default export */ __webpack_exports__["default"] = (GLOBAL);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/@default-js/defaultjs-common-utils/src/javascript/String.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-common-utils/src/javascript/String.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

if (!String.prototype.hashcode)
	String.prototype.hashcode = function() {
		if (this.length === 0)
			return 0;
		
		let hash = 0;
		const length = this.length;
		for (let i = 0; i < length; i++) {
			const c = this.charCodeAt(i);
			hash = ((hash << 5) - hash) + c;
			hash |= 0; // Convert to 32bit integer
		}
		return hash;
	};

/***/ }),

/***/ "./node_modules/@default-js/defaultjs-expression-language/node_modules/@default-js/defaultjs-common-utils/src/Global.js":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-expression-language/node_modules/@default-js/defaultjs-common-utils/src/Global.js ***!
  \******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {const GLOBAL = (() => {
	if(typeof global !== "undefined") return global;
	if(typeof window !== "undefined") return window;	
	if(typeof self !== "undefined") return self;
	return {};
})();

/* harmony default export */ __webpack_exports__["default"] = (GLOBAL);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/@default-js/defaultjs-expression-language/node_modules/@default-js/defaultjs-common-utils/src/ObjectProperty.js":
/*!**************************************************************************************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-expression-language/node_modules/@default-js/defaultjs-common-utils/src/ObjectProperty.js ***!
  \**************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ObjectProperty; });
class ObjectProperty {
	constructor(key, context){
		this.key = key;
		this.context = context;
	}
	
	get keyDefined(){
		return this.key in this.context; 
	}
	
	get hasValue(){
		return !!this.context[this.key];
	}
	
	get value(){
		return this.context[this.key];
	}
	
	set value(data){
		this.context[this.key] = data;
	}
	
	set append(data) {
		if(!this.hasValue)
			this.value = data;
		else {
			const value = this.value;
			if(value instanceof Array)
				value.push(data);
			else
				this.value = [this.value, data];
		}
	}
	
	remove(){
		delete this.context[this.key];
	}
	
	static load(data, key, create=true) {
		let context = data;
		const keys = key.split("\.");
		let name = keys.shift().trim();
		while(keys.length > 0){
			if(!context[name]){
				if(!create)
					return null;
				
				context[name] = {}
			}
			
			context = context[name];
			name = keys.shift().trim();
		}
		
		return new ObjectProperty(name, context);
	}
};

/***/ }),

/***/ "./node_modules/@default-js/defaultjs-expression-language/node_modules/@default-js/defaultjs-common-utils/src/ObjectUtils.js":
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-expression-language/node_modules/@default-js/defaultjs-common-utils/src/ObjectUtils.js ***!
  \***********************************************************************************************************************************/
/*! exports provided: append, isPojo, merge, filter, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "append", function() { return append; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isPojo", function() { return isPojo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "merge", function() { return merge; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filter", function() { return filter; });
/* harmony import */ var _ObjectProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ObjectProperty.js */ "./node_modules/@default-js/defaultjs-expression-language/node_modules/@default-js/defaultjs-common-utils/src/ObjectProperty.js");

/**
 * append a propery value to an object. If propery exists its would be converted to an array
 * 
 *  @param aKey:string name of property
 *  @param aData:any property value
 *  @param aObject:object the object to append the property
 *  
 *  @return returns the changed object
 */
const append = function(aKey, aData, aObject) {
	if (typeof aData !== "undefined") {
		const property = _ObjectProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"].load(aObject, aKey, true)
		property.append = aData;
	}
	return aObject;
};

/**
 * checked if an object a simple object. No Array, Map or something else.
 * 
 * @param aObject:object the object to be testing
 * 
 * @return boolean
 */
const isPojo = function(aObject) {
	return typeof aObject !== "undefined" && aObject != null && aObject.constructor.name === "Object"
}

/**
 * merging object into a target object. Its only merge simple object and sub objects. Every other 
 * value would be replaced by value from the source object.
 * 
 * sample: merge(target, source-1, source-2, ...source-n)
 * 
 * @param aTarget:object the target object to merging into
 * @param aSources:object
 * 
 * @return object returns the target object
 */
const merge = function(aTarget) {
	for (let i = 1; i < arguments.length; i++) {
		const source = arguments[i];
		Object.getOwnPropertyNames(source).forEach(aKey => {
			if (isPojo(aTarget[aKey]))
				merge(aTarget[aKey], source[aKey]);
			else
				aTarget[aKey] = source[aKey];
		});
	}

	return aTarget;
}



const buildPropertyFilter = function({ names, allowed }) {
	return (name, value, context) => {
		return names.includes(name) === allowed;
	}
};


const filter = function() {
	const [data, propFilter, {deep = false, recursive = true, parents = []} = {}] = arguments;
	const result = {};

	for (name in data) {
		const value = data[name];
		const accept = propFilter(name, value, data);
		if (accept && (!deep || value === null || value === undefined))
			result[name] = value;
		else if (accept && deep) {
			const type = typeof value;
			if (type !== "object"
				|| value instanceof Array
				|| value instanceof Map
				|| value instanceof Set
				|| value instanceof RegExp
				|| parents.includes[value]
				|| value == data)
				result[name] = value;
			else
				result[name] = filter(value, propFilter, {deep, recursive, parents:  parents.concat(data)});
		}

	}

	return result;
};



/* harmony default export */ __webpack_exports__["default"] = ({
	isPojo,
	append,
	merge,
	filter,
	buildPropertyFilter
});

/***/ }),

/***/ "./node_modules/@default-js/defaultjs-expression-language/src/Context.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-expression-language/src/Context.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Context; });
const seekAtChain = (resolver, property) => {
	while(resolver){
		const def = resolver.proxy.handle.getPropertyDef(property, false);
		if(def)
			return def;
		
		resolver = resolver.parent;
	}	
	return { data: null, resolver: null, defined: false };
}

class Handle {
	constructor(data, resolver) {
		this.data = data;
		this.resolver = resolver;
		this.cache = new Map();
	}
	
	updateData(data){
		this.data = data;
		this.cache = new Map();
	}
	
	resetCache(){
		this.cache = new Map();
	}

	getPropertyDef(property, seek = true) {
		if (this.cache.has(property))
			return this.cache.get(property);
		
		let def = null
		if (this.data && property in this.data)
			def = { data: this.data, resolver: this.resolver, defined: true };
		else if(seek)
			def = seekAtChain(this.resolver.parent, property);
		else
			return null;
		if(def.defined)
			this.cache.set(property, def);
		return def;
	}

	hasProperty(property) {
		//@TODO write tests!!!
		const { defined } = this.getPropertyDef(property);
		return defined;
	}
	getProperty(property) {
		//@TODO write tests!!!	
		const { data } = this.getPropertyDef(property);
		return data ? data[property] : undefined;
	}
	setProperty(property, value) {
		//@TODO would support this action on an proxied resolver context??? write tests!!!
		const { data, defined } = this.getPropertyDef(property);
		if (defined)
			data[property] = value;
		else {
			if (this.data)
				this.data[property] = value;
			else {
				this.data = {}
				this.data[property] = value;
			}
			this.cache.set(property, { data: this.data, resolver: this.resolver, defined: true });
		}
	}
	deleteProperty(property) {
		//@TODO would support this action on an proxied resolver context??? write tests!!!		
		throw new Error("unsupported function!")
	}
}

class Context {
	constructor(context, resolver) {
		this.handle = new Handle(context, resolver);		
		this.data = new Proxy(this.handle, {
			has: function(data, property) {
				return data.hasProperty(property);
			},
			get: function(data, property) {
				return data.getProperty(property);
			},
			set: function(data, property, value) {
				return data.setProperty(property, value);
			},
			deleteProperty: function(data, property) {
				return data.deleteProperty(property);
			}
			//@TODO need to support the other proxy actions		
		});;
	}
	
	updateData(data){
		this.handle.updateData(data)		
	}
	
	resetCache(){
		this.handle.resetCache();
	}
};

/***/ }),

/***/ "./node_modules/@default-js/defaultjs-expression-language/src/DefaultValue.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-expression-language/src/DefaultValue.js ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DefaultValue; });
class DefaultValue {
	constructor(value){
		this.hasValue = arguments.length == 1;
		this.value = value;
	}	
};

/***/ }),

/***/ "./node_modules/@default-js/defaultjs-expression-language/src/ExpressionResolver.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-expression-language/src/ExpressionResolver.js ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ExpressionResolver; });
/* harmony import */ var _default_js_defaultjs_common_utils_src_Global_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @default-js/defaultjs-common-utils/src/Global.js */ "./node_modules/@default-js/defaultjs-expression-language/node_modules/@default-js/defaultjs-common-utils/src/Global.js");
/* harmony import */ var _default_js_defaultjs_common_utils_src_ObjectProperty_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @default-js/defaultjs-common-utils/src/ObjectProperty.js */ "./node_modules/@default-js/defaultjs-expression-language/node_modules/@default-js/defaultjs-common-utils/src/ObjectProperty.js");
/* harmony import */ var _default_js_defaultjs_common_utils_src_ObjectUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @default-js/defaultjs-common-utils/src/ObjectUtils.js */ "./node_modules/@default-js/defaultjs-expression-language/node_modules/@default-js/defaultjs-common-utils/src/ObjectUtils.js");
/* harmony import */ var _DefaultValue_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DefaultValue.js */ "./node_modules/@default-js/defaultjs-expression-language/src/DefaultValue.js");
/* harmony import */ var _Context_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Context.js */ "./node_modules/@default-js/defaultjs-expression-language/src/Context.js");







const EXECUTION_WARN_TIMEOUT = 1000;
const EXPRESSION = /(\\?)(\$\{(([a-zA-Z0-9\-_\s]+)::)?([^\{\}]+)\})/;
const MATCH_ESCAPED = 1;
const MATCH_FULL_EXPRESSION = 2;
const MATCH_EXPRESSION_SCOPE = 4;
const MATCH_EXPRESSION_STATEMENT = 5;

const DEFAULT_NOT_DEFINED = new _DefaultValue_js__WEBPACK_IMPORTED_MODULE_3__["default"]();
const toDefaultValue = value => {
	if (value instanceof _DefaultValue_js__WEBPACK_IMPORTED_MODULE_3__["default"])
		return value;

	return new _DefaultValue_js__WEBPACK_IMPORTED_MODULE_3__["default"](value);
};

const execute = async function(aStatement, aContext) {
	if (typeof aStatement !== "string")
		return aStatement;
		
	const expression = new Function("context", 
`
return (async (context) => {
	try{ 
		with(context){
			 return ${aStatement}
		}
	}catch(e){
		throw e;
	}
})(context)`
	);
	
	let timeout = setTimeout(() => {
		timeout = null;
		console.warn("long running statement:", aStatement, new Error());
	}, EXECUTION_WARN_TIMEOUT)
	let result = undefined;
	try{
		result = await expression(aContext);
	}catch(e){}
	
	if(timeout)
		clearTimeout(timeout)
	return result;
};

const resolve = async function(aResolver, aExpression, aFilter, aDefault) {
	if (aFilter && aResolver.name != aFilter)
		return aResolver.parent ? resolve(aResolver.parent, aExpression, aFilter, aDefault) : null;
	
	const result = await execute(aExpression, aResolver.proxy.data);
	if (result !== null && typeof result !== "undefined")
		return result;

	else if (aDefault instanceof _DefaultValue_js__WEBPACK_IMPORTED_MODULE_3__["default"] && aDefault.hasValue)
		return aDefault.value;
};

const resolveMatch = async (resolver, match, defaultValue) => {
	if(match[MATCH_ESCAPED])
		return match[MATCH_FULL_EXPRESSION]; 
		
	return resolve(resolver, match[MATCH_EXPRESSION_STATEMENT], normalize(match[MATCH_EXPRESSION_SCOPE]), defaultValue);
}

const normalize = value => {
	if (value) {
		value = value.trim();
		return value.length == 0 ? null : value;
	}
	return null;
};

class ExpressionResolver {
	constructor({ context = _default_js_defaultjs_common_utils_src_Global_js__WEBPACK_IMPORTED_MODULE_0__["default"], parent = null, name = null }) {
		this.parent = (parent instanceof ExpressionResolver) ? parent : null;
		this.name = name;
		this.context = context;
		this.proxy = new _Context_js__WEBPACK_IMPORTED_MODULE_4__["default"](this.context, this);
	}

	get chain() {
		return this.parent ? this.parent.chain + "/" + this.name : "/" + this.name;
	}

	get effectiveChain() {
		if (!this.context)
			return this.parent ? this.parent.effectiveChain : "";
		return this.parent ? this.parent.effectiveChain + "/" + this.name : "/" + this.name;
	}

	get contextChain() {
		const result = [];
		let resolver = this;
		while (resolver) {
			if (resolver.context)
				result.push(resolver.context);

			resolver = resolver.parent;
		}

		return result;
	}

	getData(key, filter) {
		if (!key)
			return;
		else if (filter && filter != this.name) {
			if (this.parent)
				this.parent.getData(key, filter);
		} else {
			const property = _default_js_defaultjs_common_utils_src_ObjectProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"].load(this.context, key, false);
			return property ? property.value : null;
		}
	}

	updateData(key, value, filter) {
		if (!key)
			return;
		else if (filter && filter != this.name) {
			if (this.parent)
				this.parent.updateData(key, value, filter);
		} else {
			if(this.context == null || typeof this.context === "undefined"){
				this.context = {};				
				this.proxy.updateData(this.context);
			}
			const property = _default_js_defaultjs_common_utils_src_ObjectProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"].load(this.context, key);
			property.value = value;
			this.proxy.resetCache();
		}
	}

	mergeContext(context, filter) {
		if (filter && filter != this.name) {
			if (this.parent)
				this.parent.mergeContext(context, filter);
		} else {
			this.context = this.context ? _default_js_defaultjs_common_utils_src_ObjectUtils_js__WEBPACK_IMPORTED_MODULE_2__["default"].merge(this.context, context) : context;
		}
	}

	async resolve(aExpression, aDefault) {
		const defaultValue = arguments.length == 2 ? toDefaultValue(aDefault) : DEFAULT_NOT_DEFINED;
		try {
			const match = EXPRESSION.exec(aExpression);
			if (match)
				return await resolveMatch(this, match, defaultValue);
			else
				return await resolve(this, normalize(aExpression), null, defaultValue);
		} catch (e) {
			console.error("error at executing statment\"", aExpression, "\":", e);
			return defaultValue.hasValue ? defaultValue.value : aExpression;
		}
	}

	async resolveText(aText, aDefault) {
		let text = aText;
		let temp = aText; // required to prevent infinity loop
		let match = EXPRESSION.exec(text);
		const defaultValue = arguments.length == 2 ? toDefaultValue(aDefault) : DEFAULT_NOT_DEFINED
		while (match != null) {
			const result = await resolveMatch(this, match, defaultValue);
			temp = temp.split(match[0]).join(); // remove current match for next loop
			text = text.split(match[0]).join(typeof result === "undefined" ? "undefined" : (result == null ? "null" : result));
			match = EXPRESSION.exec(temp);
		}
		return text;
	}

	static async resolve(aExpression, aContext, aDefault, aTimeout) {
		const resolver = new ExpressionResolver({ context: aContext });
		const defaultValue = arguments.length > 2 ? toDefaultValue(aDefault) : DEFAULT_NOT_DEFINED;
		if (typeof aTimeout === "number" && aTimeout > 0)
			return new Promise(resolve => {
				setTimeout(() => {
					resolve(resolver.resolve(aExpression, defaultValue));
				}, aTimeout);
			});

		return resolver.resolve(aExpression, defaultValue)
	}

	static async resolveText(aText, aContext, aDefault, aTimeout) {
		const resolver = new ExpressionResolver({ context: aContext });
		const defaultValue = arguments.length > 2 ? toDefaultValue(aDefault) : DEFAULT_NOT_DEFINED;
		if (typeof aTimeout === "number" && aTimeout > 0)
			return new Promise(resolve => {
				setTimeout(() => {
					resolve(resolver.resolveText(aText, defaultValue));
				}, aTimeout);
			});

		return resolver.resolveText(aText, defaultValue);
	}
	
	static buildSecure({context, propFilter, option={deep:true}, name, parent}){
		context = _default_js_defaultjs_common_utils_src_ObjectUtils_js__WEBPACK_IMPORTED_MODULE_2__["default"].filter({data: context, propFilter, option});
		return new ExpressionResolver({context, name, parent});
	}
};

/***/ }),

/***/ "./node_modules/@default-js/defaultjs-extdom/index.js":
/*!************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-extdom/index.js ***!
  \************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/index */ "./node_modules/@default-js/defaultjs-extdom/src/index.js");


/***/ }),

/***/ "./node_modules/@default-js/defaultjs-extdom/src/Global.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-extdom/src/Global.js ***!
  \*****************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_Utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/Utils */ "./node_modules/@default-js/defaultjs-extdom/src/utils/Utils.js");


_utils_Utils__WEBPACK_IMPORTED_MODULE_0__["default"].global.defaultjs = _utils_Utils__WEBPACK_IMPORTED_MODULE_0__["default"].global.defaultjs || {};
_utils_Utils__WEBPACK_IMPORTED_MODULE_0__["default"].global.defaultjs.extdom = _utils_Utils__WEBPACK_IMPORTED_MODULE_0__["default"].global.defaultjs.extdom || {
	VERSION : "1.0.0-beta.23",
	utils : {
		Utils: _utils_Utils__WEBPACK_IMPORTED_MODULE_0__["default"]
	}
};

_utils_Utils__WEBPACK_IMPORTED_MODULE_0__["default"].global.find = function() {
	return document.find.apply(document, arguments);
};

_utils_Utils__WEBPACK_IMPORTED_MODULE_0__["default"].global.ready = function() {
	return document.ready.apply(document, arguments);
};

_utils_Utils__WEBPACK_IMPORTED_MODULE_0__["default"].global.create = function(aContent, asTemplate) {
	if (typeof arguments[0] !== "string")
		throw new Error("The first argument must be a string!");
	
	const template = document.createElement("template");
	template.innerHTML = aContent;
	if(asTemplate)
		return template;
	
	return document.importNode(template.content, true).childNodes;
};

_utils_Utils__WEBPACK_IMPORTED_MODULE_0__["default"].global.script = function(aFile, aTarget) {
	if(aFile instanceof Array)
		return Promise.all(aFile.map(file => _utils_Utils__WEBPACK_IMPORTED_MODULE_0__["default"].global.script(file, aTarget)));
	
	if(typeof aFile === "string")	
		return new Promise((r,e) => {
			const script = document.createElement("script");
			script.async = true;
			script.onload = function(){r()};
			script.onerror = function(){throw new Error("load error!")};
			!aTarget ? document.body.append(script) : aTarget.append(script);
			script.src = aFile;
		});
	else
		return Promise.reject("First parameter must be an array of strings or a string!");
};

/***/ }),

/***/ "./node_modules/@default-js/defaultjs-extdom/src/dom/Document.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-extdom/src/dom/Document.js ***!
  \***********************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_ExtendPrototype__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/ExtendPrototype */ "./node_modules/@default-js/defaultjs-extdom/src/utils/ExtendPrototype.js");
/* harmony import */ var _extentions_QuerySupport__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./extentions/QuerySupport */ "./node_modules/@default-js/defaultjs-extdom/src/dom/extentions/QuerySupport.js");
/* harmony import */ var _extentions_ReadyEventSupport__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./extentions/ReadyEventSupport */ "./node_modules/@default-js/defaultjs-extdom/src/dom/extentions/ReadyEventSupport.js");




Object(_utils_ExtendPrototype__WEBPACK_IMPORTED_MODULE_0__["default"])(Document, _extentions_QuerySupport__WEBPACK_IMPORTED_MODULE_1__["default"], _extentions_ReadyEventSupport__WEBPACK_IMPORTED_MODULE_2__["default"]);

document.addEventListener("DOMContentLoaded", () => document.trigger("ready"));





/***/ }),

/***/ "./node_modules/@default-js/defaultjs-extdom/src/dom/DocumentFragment.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-extdom/src/dom/DocumentFragment.js ***!
  \*******************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_ExtendPrototype__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/ExtendPrototype */ "./node_modules/@default-js/defaultjs-extdom/src/utils/ExtendPrototype.js");
/* harmony import */ var _extentions_QuerySupport__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./extentions/QuerySupport */ "./node_modules/@default-js/defaultjs-extdom/src/dom/extentions/QuerySupport.js");
/* harmony import */ var _extentions_ManipulationSupport__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./extentions/ManipulationSupport */ "./node_modules/@default-js/defaultjs-extdom/src/dom/extentions/ManipulationSupport.js");




Object(_utils_ExtendPrototype__WEBPACK_IMPORTED_MODULE_0__["default"])(DocumentFragment, _extentions_QuerySupport__WEBPACK_IMPORTED_MODULE_1__["default"], _extentions_ManipulationSupport__WEBPACK_IMPORTED_MODULE_2__["default"]);






/***/ }),

/***/ "./node_modules/@default-js/defaultjs-extdom/src/dom/Element.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-extdom/src/dom/Element.js ***!
  \**********************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_ExtendPrototype__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/ExtendPrototype */ "./node_modules/@default-js/defaultjs-extdom/src/utils/ExtendPrototype.js");
/* harmony import */ var _extentions_QuerySupport__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./extentions/QuerySupport */ "./node_modules/@default-js/defaultjs-extdom/src/dom/extentions/QuerySupport.js");
/* harmony import */ var _extentions_AttributeSupport__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./extentions/AttributeSupport */ "./node_modules/@default-js/defaultjs-extdom/src/dom/extentions/AttributeSupport.js");
/* harmony import */ var _extentions_ManipulationSupport__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./extentions/ManipulationSupport */ "./node_modules/@default-js/defaultjs-extdom/src/dom/extentions/ManipulationSupport.js");





Object(_utils_ExtendPrototype__WEBPACK_IMPORTED_MODULE_0__["default"])(Element,_extentions_QuerySupport__WEBPACK_IMPORTED_MODULE_1__["default"], _extentions_AttributeSupport__WEBPACK_IMPORTED_MODULE_2__["default"], _extentions_ManipulationSupport__WEBPACK_IMPORTED_MODULE_3__["default"]);

/***/ }),

/***/ "./node_modules/@default-js/defaultjs-extdom/src/dom/EventTarget.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-extdom/src/dom/EventTarget.js ***!
  \**************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_ExtendPrototype__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/ExtendPrototype */ "./node_modules/@default-js/defaultjs-extdom/src/utils/ExtendPrototype.js");
/* harmony import */ var _extentions_EventSupport__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./extentions/EventSupport */ "./node_modules/@default-js/defaultjs-extdom/src/dom/extentions/EventSupport.js");



Object(_utils_ExtendPrototype__WEBPACK_IMPORTED_MODULE_0__["default"])(EventTarget, _extentions_EventSupport__WEBPACK_IMPORTED_MODULE_1__["default"]);

/***/ }),

/***/ "./node_modules/@default-js/defaultjs-extdom/src/dom/HTMLElement.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-extdom/src/dom/HTMLElement.js ***!
  \**************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_ExtendPrototype__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/ExtendPrototype */ "./node_modules/@default-js/defaultjs-extdom/src/utils/ExtendPrototype.js");
/* harmony import */ var _extentions_HtmlClassSupport__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./extentions/HtmlClassSupport */ "./node_modules/@default-js/defaultjs-extdom/src/dom/extentions/HtmlClassSupport.js");
/* harmony import */ var _extentions_ShowHideSupport__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./extentions/ShowHideSupport */ "./node_modules/@default-js/defaultjs-extdom/src/dom/extentions/ShowHideSupport.js");





Object(_utils_ExtendPrototype__WEBPACK_IMPORTED_MODULE_0__["default"])(HTMLElement, _extentions_HtmlClassSupport__WEBPACK_IMPORTED_MODULE_1__["default"], _extentions_ShowHideSupport__WEBPACK_IMPORTED_MODULE_2__["default"]);

/***/ }),

/***/ "./node_modules/@default-js/defaultjs-extdom/src/dom/HTMLInputElement.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-extdom/src/dom/HTMLInputElement.js ***!
  \*******************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_ExtendPrototype__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/ExtendPrototype */ "./node_modules/@default-js/defaultjs-extdom/src/utils/ExtendPrototype.js");
/* harmony import */ var _extentions_ValueSupport__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./extentions/ValueSupport */ "./node_modules/@default-js/defaultjs-extdom/src/dom/extentions/ValueSupport.js");




Object(_utils_ExtendPrototype__WEBPACK_IMPORTED_MODULE_0__["default"])(HTMLInputElement,_extentions_ValueSupport__WEBPACK_IMPORTED_MODULE_1__["default"]);

/***/ }),

/***/ "./node_modules/@default-js/defaultjs-extdom/src/dom/HTMLSelectElement.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-extdom/src/dom/HTMLSelectElement.js ***!
  \********************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_ExtendPrototype__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/ExtendPrototype */ "./node_modules/@default-js/defaultjs-extdom/src/utils/ExtendPrototype.js");
/* harmony import */ var _extentions_ValueSupport__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./extentions/ValueSupport */ "./node_modules/@default-js/defaultjs-extdom/src/dom/extentions/ValueSupport.js");




Object(_utils_ExtendPrototype__WEBPACK_IMPORTED_MODULE_0__["default"])(HTMLSelectElement,_extentions_ValueSupport__WEBPACK_IMPORTED_MODULE_1__["default"]);

/***/ }),

/***/ "./node_modules/@default-js/defaultjs-extdom/src/dom/HTMLTextAreaElement.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-extdom/src/dom/HTMLTextAreaElement.js ***!
  \**********************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_ExtendPrototype__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/ExtendPrototype */ "./node_modules/@default-js/defaultjs-extdom/src/utils/ExtendPrototype.js");
/* harmony import */ var _utils_Extender__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/Extender */ "./node_modules/@default-js/defaultjs-extdom/src/utils/Extender.js");




Object(_utils_ExtendPrototype__WEBPACK_IMPORTED_MODULE_0__["default"])(HTMLTextAreaElement,Object(_utils_Extender__WEBPACK_IMPORTED_MODULE_1__["default"])("ValueSupport", Prototype => {	
	Prototype.val = function() {
		if(arguments.length == 0)
			return this.value;
		else
			this.value = arguments[0]
			
		return this;
	};	
}));

/***/ }),

/***/ "./node_modules/@default-js/defaultjs-extdom/src/dom/HtmlCollection.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-extdom/src/dom/HtmlCollection.js ***!
  \*****************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_ExtendPrototype__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/ExtendPrototype */ "./node_modules/@default-js/defaultjs-extdom/src/utils/ExtendPrototype.js");
/* harmony import */ var _utils_DelegaterBuilder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/DelegaterBuilder */ "./node_modules/@default-js/defaultjs-extdom/src/utils/DelegaterBuilder.js");
/* harmony import */ var _extentions_ListSupport__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./extentions/ListSupport */ "./node_modules/@default-js/defaultjs-extdom/src/dom/extentions/ListSupport.js");




Object(_utils_ExtendPrototype__WEBPACK_IMPORTED_MODULE_0__["default"])(HTMLCollection, _extentions_ListSupport__WEBPACK_IMPORTED_MODULE_2__["default"]);

HTMLCollection.prototype.applyTo = function(){
	const args = Array.from(arguments);
	const calling = args.shift();
	const isFunction = typeof calling === "function";
	const results = [];
	for(let i = 0; i < this.length; i++){
		const node = this[i];
		let	result;
		if(isFunction)
			result = calling.apply([node].concat(args));
		else if(typeof node[calling] === "function")
			result = node[calling].apply(node, args);
		
		if(result)
			results.push(result);
	}
	
	return results;
};

HTMLCollection.prototype.val = function() {
	if(arguments.length == 0){
		if(this.length > 0){
			const result = new Map();
			this.forEach(node => {
				if(typeof node.val === "function"){
					const value = node.val();
					if(value)
						result.set((node.name || node.id || node.selector()), node.val());
				}
			});	
			return result;
		}
	}
	else
		HTMLCollection.prototype.applyTo.apply(this, ["val"].concat(Array.from(arguments)));
};

HTMLCollection.from = function(){
	const args = Array.from(arguments);
	const data = {};
	let counter = 0;
	
	while(args.length > 0){
		const arg = args.shift();
		if(typeof arg !== "undefined" && arg != null){
			if(arg instanceof HTMLElement)
				data[counter++] = {value: arg, enumerable: true};
			else if(arg instanceof HTMLCollection || arg instanceof NodeList || arg instanceof Array){
				for(let i = 0; i < arg.length; i++){
					if(arg[i] && arg[i] instanceof HTMLElement){
						data[counter++] = {value: arg[i], enumerable: true};
					}
				}
			}
		}
	}
	
	data.length = {value: counter};
	return  Object.create(HTMLCollection.prototype, data);
};


Object(_utils_DelegaterBuilder__WEBPACK_IMPORTED_MODULE_1__["default"])(function(aFunctionName, theArguments) {
	let results = [];	
	this.forEach(node => {
		if(node && typeof node[aFunctionName] === "function"){
			let result = node[aFunctionName].apply(node, theArguments);
			if(result){ 
				if(result instanceof HTMLCollection)
					results = results.concat(Array.from(result));
				else
					results.push(result);
			}		
		}
	});
	
	if(results.length === 0)
		return undefined;
	else if(results[0] instanceof HTMLElement || results[0] instanceof HTMLCollection)
		return HTMLCollection.from.apply(null, results);
	else
		return results;
},HTMLCollection.prototype, Node.prototype, HTMLElement.prototype, HTMLInputElement.prototype, Element.prototype, EventTarget.prototype);


/***/ }),

/***/ "./node_modules/@default-js/defaultjs-extdom/src/dom/Node.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-extdom/src/dom/Node.js ***!
  \*******************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_ExtendPrototype__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/ExtendPrototype */ "./node_modules/@default-js/defaultjs-extdom/src/utils/ExtendPrototype.js");
/* harmony import */ var _extentions_DataSupport__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./extentions/DataSupport */ "./node_modules/@default-js/defaultjs-extdom/src/dom/extentions/DataSupport.js");
/* harmony import */ var _extentions_ManipulationSupport__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./extentions/ManipulationSupport */ "./node_modules/@default-js/defaultjs-extdom/src/dom/extentions/ManipulationSupport.js");




Object(_utils_ExtendPrototype__WEBPACK_IMPORTED_MODULE_0__["default"])(Node,_extentions_DataSupport__WEBPACK_IMPORTED_MODULE_1__["default"],_extentions_ManipulationSupport__WEBPACK_IMPORTED_MODULE_2__["default"]);

/***/ }),

/***/ "./node_modules/@default-js/defaultjs-extdom/src/dom/NodeList.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-extdom/src/dom/NodeList.js ***!
  \***********************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_ExtendPrototype__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/ExtendPrototype */ "./node_modules/@default-js/defaultjs-extdom/src/utils/ExtendPrototype.js");
/* harmony import */ var _utils_DelegaterBuilder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/DelegaterBuilder */ "./node_modules/@default-js/defaultjs-extdom/src/utils/DelegaterBuilder.js");
/* harmony import */ var _extentions_ListSupport__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./extentions/ListSupport */ "./node_modules/@default-js/defaultjs-extdom/src/dom/extentions/ListSupport.js");




Object(_utils_ExtendPrototype__WEBPACK_IMPORTED_MODULE_0__["default"])(NodeList, _extentions_ListSupport__WEBPACK_IMPORTED_MODULE_2__["default"]);

NodeList.prototype.applyTo = function(){
	const args = Array.from(arguments);
	const calling = args.shift();
	const isFunction = typeof calling === "function";
	const results = [];
	for(let i = 0; i < this.length; i++){
		const node = this[i];
		let	result;
		if(isFunction)
			result = calling.apply([node].concat(args));
		else if(typeof node[calling] === "function")
			result = node[calling].apply(node, args);
		
		if(result)
			results.push(result);
	}
	
	return results;
};

NodeList.prototype.val = function() {
	if(arguments.length == 0){
		if(this.length > 0){
			const result = new Map();
			this.forEach(node => {
				if(typeof node.val === "function"){
					const value = node.val();
					if(value)
						result.set((node.name || node.id || node.selector()), node.val());
				}
			});	
			return result;
		}
	}
	else
		NodeList.prototype.applyTo.apply(this, ["val"].concat(Array.from(arguments)));
};

NodeList.from = function(){
	const args = Array.from(arguments);
	const data = {};
	let counter = 0;
	
	while(args.length > 0){
		const arg = args.shift();
		if(typeof arg !== "undefined" && arg != null){
			if(arg instanceof Node)
				data[counter++] = {value: arg, enumerable: true};
			else if(arg instanceof NodeList || arg instanceof HTMLCollection || arg instanceof Array){
				for(let i = 0; i < arg.length; i++){
					if(arg[i] && arg[i] instanceof Node){
						data[counter++] = {value: arg[i], enumerable: true};
					}
				}
			}
		}
	}
	
	data.length = {value: counter};
	return  Object.create(NodeList.prototype, data);
};


Object(_utils_DelegaterBuilder__WEBPACK_IMPORTED_MODULE_1__["default"])(function(aFunctionName, theArguments) {
	let results = [];	
	this.forEach(node => {
		if(node && typeof node[aFunctionName] === "function"){
			const result = node[aFunctionName].apply(node, theArguments);
			if(result){ 
				if(result instanceof NodeList)
					results = results.concat(Array.from(result));
				else
					results.push(result);
			}		
		}
	});
	
	if(results.length === 0)
		return undefined;
	else if(results[0] instanceof Node || results[0] instanceof NodeList)
		return NodeList.from(results);
	else
		return results;
},NodeList.prototype, Node.prototype, HTMLElement.prototype, HTMLInputElement.prototype, Element.prototype, EventTarget.prototype);


/***/ }),

/***/ "./node_modules/@default-js/defaultjs-extdom/src/dom/extentions/AttributeSupport.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-extdom/src/dom/extentions/AttributeSupport.js ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_Extender__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/Extender */ "./node_modules/@default-js/defaultjs-extdom/src/utils/Extender.js");


const support = Object(_utils_Extender__WEBPACK_IMPORTED_MODULE_0__["default"])("AttributeSupport", Prototype => {
	Prototype.attr = function() {
		if (arguments.length == 0)
			return this.hasAttributes() ? (() => {
				const result = {};
				this.getAttributeNames().forEach(name => {
					result[name] = this.getAttribute(name);
				});
				return result;
			})() : undefined;
		else if (arguments.length == 1)
			return this.getAttribute(arguments[0]);
		else if (typeof arguments[1] === "undefined" || arguments[1] == null)
			this.removeAttribute(arguments[0]);
		else
			this.setAttribute(arguments[0], arguments[1]);
		
		return this;
	};
});
/* harmony default export */ __webpack_exports__["default"] = (support);

/***/ }),

/***/ "./node_modules/@default-js/defaultjs-extdom/src/dom/extentions/DataSupport.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-extdom/src/dom/extentions/DataSupport.js ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_Extender__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/Extender */ "./node_modules/@default-js/defaultjs-extdom/src/utils/Extender.js");

const support = Object(_utils_Extender__WEBPACK_IMPORTED_MODULE_0__["default"])("DataSupport", Prototype => {
	Prototype.data = function() {
		const data = {};
		if (typeof this.dataset !== "undefined")
			for (name in this.dataset)
				data[name] = this.dataset[name];

		this.data = (function() {
			if (arguments.length == 0)
				return data;
			else if (arguments.length == 1)
				return data[arguments[0]];
			else if (typeof arguments[1] === "undefined" || arguments[1] == null)
				delete data[arguments[0]];
			else
				data[arguments[0]] = arguments[1];

			return this;
		}).bind(this);

		return this.data.apply(null, arguments);
	};
});
/* harmony default export */ __webpack_exports__["default"] = (support);

/***/ }),

/***/ "./node_modules/@default-js/defaultjs-extdom/src/dom/extentions/EventSupport.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-extdom/src/dom/extentions/EventSupport.js ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_Extender__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/Extender */ "./node_modules/@default-js/defaultjs-extdom/src/utils/Extender.js");


const DEFAULT_TIMEOUT = 100;
const support = Object(_utils_Extender__WEBPACK_IMPORTED_MODULE_0__["default"])("EventSupport", (Prototype) => {
	const EVENTSPLITER = /(\s+)|(\s*,\s*)/;
	const getWrapperHandleMap = (element) => {
		if (!element.__wrapperhandlemap__)
			element.__wrapperhandlemap__ = new Map();

		return element.__wrapperhandlemap__;
	}

	const getTriggerTimeouts = (element) => {
		if (!element.___EVENTTRIGGERTIMEOUTS___) element.___EVENTTRIGGERTIMEOUTS___ = {};

		return element.___EVENTTRIGGERTIMEOUTS___;
	};

	const removeWrapper = (element, data, eventTypes) => {
		const { wrapper, option, events, handle } = data;
		const capture = option.capture;
		if(eventTypes){
			eventTypes = typeof eventTypes === "string" ? eventTypes.split(EVENTSPLITER) : eventTypes;
			for (let event of eventTypes) {
				const index = events.indexOf(event);
				if(index >= 0) {
					element.removeEventListener(event, wrapper, capture);
					events.splice(index, 1);
				}
				if(events.length == 0)				
					getWrapperHandleMap(element).delete(handle);
			}
			
		}else{
			for (let event of events) {
				element.removeEventListener(event, wrapper, capture);
			}
			getWrapperHandleMap(element).delete(handle);
		}		
	}

	Prototype.on = function() {
		if (arguments.length < 2) throw new Error("Too less arguments!");

		const args = Array.from(arguments);
		let events = typeof args[0] === "string" ? args.shift().split(EVENTSPLITER) : args.shift();
		const filter = typeof args[0] === "string" ? args.shift() : null;
		const handle = args.shift();
		const option = typeof args[0] === "undefined" ? { capture: false, once: false, passive: false } : (typeof args[0] === "boolean" ? { capture: args.shift(), once: false, passive: false } : args.shift());
		const wrapper = function(aEvent) {
			if (filter) {
				const target = event.target;
				if (typeof target.is === "function" && !aEvent.target.is(filter)) return true;
			}
			const result = handle.apply(null, arguments);
			if (option.once) removeWrapper(this, wrapper);
			return result;
		};

		getWrapperHandleMap(this).set(handle, { handle, wrapper: wrapper, events, option });

		for (let event of events) {
			this.addEventListener(event, wrapper, option);
		}

		return this;
	};


	Prototype.removeOn = function(handle, event, capture) {
		const data = getWrapperHandleMap(this).get(handle);
		if (data) 
			removeWrapper(this, data, event);
		else
			this.removeEventListener(handle, event, capture);

		return this;
	};

	Prototype.trigger = function() {
		const args = Array.from(arguments);
		const timeout = typeof args[0] === "number" ? args.shift() : -1;
		if (timeout >= 0) {
			const type = args[0];
			const timeouts = getTriggerTimeouts(this);
			const timeoutid = timeouts[type];
			if (timeoutid) clearTimeout(timeoutid);

			timeouts[type] = setTimeout(() => {
				delete timeouts[type];
				this.trigger.apply(this, args);
			}, timeout);
		} else {
			const type = args.shift();
			const delegate = args[0] instanceof Event ? args.shift() : null;
			const data = args.length >= 1 ? (args.length == 0 ? args.shift() : args) : delegate;
			const event = data ? new CustomEvent(type, { bubbles: true, cancelable: true, detail: data }) : new Event(type, { bubbles: true, cancelable: true });

			if (delegate) event.delegatedEvent = delegate;
			this.dispatchEvent(event);
		}
		return this;
	};
});
/* harmony default export */ __webpack_exports__["default"] = (support);


/***/ }),

/***/ "./node_modules/@default-js/defaultjs-extdom/src/dom/extentions/HtmlClassSupport.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-extdom/src/dom/extentions/HtmlClassSupport.js ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_Extender__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/Extender */ "./node_modules/@default-js/defaultjs-extdom/src/utils/Extender.js");


const support = Object(_utils_Extender__WEBPACK_IMPORTED_MODULE_0__["default"])("HtmlClassSupport", Prototype => {	
	Prototype.addClass = function() {
		if(arguments.length == 1)
			arguments[0].split(/\s+/).forEach(clazz => this.classList.add(clazz));
		else if(arguments.length > 1)
			Array.prototype.forEach.call(arguments,clazz => this.classList.add(clazz));
		
		return this;
	};
	
	Prototype.removeClass = function() {
		if(arguments.length == 1)
			arguments[0].split(/\s+/).forEach(clazz => this.classList.remove(clazz));
		else if(arguments.length > 1)
			Array.prototype.forEach.call(arguments, clazz => this.classList.remove(clazz));
		
		return this;		
	};
	
	Prototype.toggleClass = function() {
		if(arguments.length == 1)
			arguments[0].split(/\s+/).forEach(clazz => this.classList.toggle(clazz));
		else if(arguments.length > 1)
			Array.prototype.forEach.call(arguments, clazz => this.classList.toggle(clazz));
		
		return this;
	};
});
/* harmony default export */ __webpack_exports__["default"] = (support);

/***/ }),

/***/ "./node_modules/@default-js/defaultjs-extdom/src/dom/extentions/ListSupport.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-extdom/src/dom/extentions/ListSupport.js ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_Extender__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/Extender */ "./node_modules/@default-js/defaultjs-extdom/src/utils/Extender.js");


const support = Object(_utils_Extender__WEBPACK_IMPORTED_MODULE_0__["default"])("ListSupport", Prototype => {		
	Prototype.indexOf = function() {
		for(let i = 0; i < this.length; i++)
			if(this[i] == arguments[0])
				return i;
		
		return -1;
	};

	Prototype.forEach = function(){
		return Array.prototype.forEach.apply(Array.from(this), arguments);
	};
	
	Prototype.map = function(){
		return Array.prototype.map.apply(Array.from(this), arguments);
	};
	
	Prototype.filter = function(){
		return Array.prototype.filter.apply(Array.from(this), arguments);
	};

	Prototype.first = function(){
		if(this.length > 0)
			return this[0];
	};	
	
	Prototype.last = function(){
		if(this.length > 0)
			return this[this.length - 1];
	};
});
/* harmony default export */ __webpack_exports__["default"] = (support);

/***/ }),

/***/ "./node_modules/@default-js/defaultjs-extdom/src/dom/extentions/ManipulationSupport.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-extdom/src/dom/extentions/ManipulationSupport.js ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_Extender__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/Extender */ "./node_modules/@default-js/defaultjs-extdom/src/utils/Extender.js");
/* harmony import */ var _utils_Utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/Utils */ "./node_modules/@default-js/defaultjs-extdom/src/utils/Utils.js");



const support = Object(_utils_Extender__WEBPACK_IMPORTED_MODULE_0__["default"])("ManipulationSupport", Prototype => {	
	Prototype.empty = function(){
		let nodes = this.childNodes
		while(nodes.length != 0)			
			nodes[0].remove(true);
		
		return this;
	};
	
	Prototype.content = function(){
		return this.childNodes;
	};	
	
	Prototype.html = function(){
		if(arguments.length == 0)			
			return this.innerHTML;
		else if(arguments.length == 1 && typeof arguments[0] === "boolean")
			if(arguments[0])
				return this.outerHTML;
			else
				return this.innerHTML;
		else 
			Array.from(arguments).forEach(content => {
				this.empty();
				if(typeof content === "string")
					this.append(content);
				else if(content instanceof Node || content instanceof NodeList || content instanceof HTMLCollection){
					this.append(content);
				}
			});		
			
		return this;
	};
	
	const append = function(){
		const append = Prototype.appendChild.bind(this);
		for(let i = 0; i < arguments.length; i++){
			let arg = arguments[i];
			if(arg instanceof Node)
				this.appendChild(arg);
			else if(typeof arg === "string")
				create(arg).forEach(append);
			else if(typeof arg.forEach === "function")
				arg.forEach(append);
		}
	};	
	Prototype.append = append;
	
	const prepend = function(aFirstElement, aElement){
		this.insertBefore(aElement, aFirstElement);
	};
	Prototype.prepend = function(){
		if(this.childNodes.length == 0)
			append.apply(this, arguments);
		else {
			const first = this.childNodes.first();
			const insert = prepend.bind(this, first);
			for(let i = 0; i < arguments.length; i++){
				const arg = arguments[i];
				if(arg instanceof Node)
					insert(arg);
				else if(typeof arg === "string")
					arg.forEach(insert);
				else if(typeof arg.forEach === "function")
					arg.forEach(insert);
			}
		}
	};
	
	Prototype.replace = function(){
		if(arguments.length < 1)
			throw new Error("Insufficient arguments! One or two nodes required!");
		
		const parent = arguments.length == 1 ? this.parentNode : this;
		const oldNode = arguments.length == 1 ? this : arguments[0];
		const newNode = arguments.length == 1 ? arguments[0] : arguments[1];
		
		if(newNode instanceof Array || newNode instanceof NodeList || newNode instanceof HTMLCollection){
			newNode.forEach(aItem => parent.insertBefore(aItem, oldNode));
			oldNode.remove();
		}
		else
			parent.replaceChild(newNode,oldNode);
	};
	
	Prototype.after = function(){
		if(this.parentNode == null)
			throw new Error("Can't insert nodes after this node! Parent node not available!");
		
		const parent = this.parentNode;
		const next = this.nextSibling;
		if(next)
			Prototype.before.apply(next, arguments);
		else
			Prototype.append.apply(parent, arguments);
	};	
	
	Prototype.before = function(){
		if(this.parentNode == null)
			throw new Error("Can't insert nodes after this node! Parent node not available!");
		
		const parent = this.parentNode;
		const inserter = (node) => {parent.insertBefore(node, this);}
		for(let i = 0; i < arguments.length; i++){
			const arg = arguments[i];
			if(arg instanceof Node)
				inserter(arg);
			else if(typeof arg === "string")
				arg.forEach(inserter);
			else if(typeof arg.forEach === "function")
				arg.forEach(inserter);
		}
	};	
});
/* harmony default export */ __webpack_exports__["default"] = (support);

/***/ }),

/***/ "./node_modules/@default-js/defaultjs-extdom/src/dom/extentions/QuerySupport.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-extdom/src/dom/extentions/QuerySupport.js ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_Extender__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/Extender */ "./node_modules/@default-js/defaultjs-extdom/src/utils/Extender.js");


const parentSelector = /:parent(\(\"([^\)]*)\"\))?/i;
const queryExecuter = function(aElement, aSelector){
	let match = parentSelector.exec(aSelector);
	if(match){
		let result = aElement;
		if(match.index > 0){
			result = aElement.querySelectorAll(aSelector.substr(0, match.index));
			if(result.length == 0)
				return;
		}	
		result = result.parent(match[2]);			
		if(result){
			let nextSelector = aSelector.substr(match.index + match[0].length).trim();
			if(nextSelector.length > 0)
				result = result.find(nextSelector);
			
			return result;
		}		
	}
	else
		return aElement.querySelectorAll(aSelector);
};


const support = Object(_utils_Extender__WEBPACK_IMPORTED_MODULE_0__["default"])("QuerySupport", Prototype => {	
	Prototype.find = function() {
		let nodes = [];
		let args = Array.from(arguments);
		let arg = args.shift();
		while(arg){
			if(typeof arg === "string"){
				let result = queryExecuter(this, arg);
				if(result)
					nodes.push(result);
			}
			
			arg = args.shift();
		}
		
		let result = NodeList.from.apply(null, nodes);
		return result;
	};
	
	Prototype.is = function() {
		if(this instanceof Document || this instanceof DocumentFragment)
			return false;		
		else if(arguments.length == 1){
			if(typeof arguments[0] === "string")
				return this.matches(arguments[0]);
			else if(typeof arguments[0].length === "number"){
				let filter = arguments[0];
				for(let i = 0; i < filter.length; i++)
					if(this.matches(filter[i]))
						return true;
			}				
		}
		else if(arguments.length > 1)
			return this.is(Array.from(arguments));
		
		return false;
	};	
	
	Prototype.parent = function() {
		if(!this.parentNode)
			return undefined;		
		else if(typeof arguments[0] === "string"){
			let parent = this.parentNode;
			try{
				while(parent && !parent.is(arguments[0]))
					parent = parent.parent(arguments[0]);
			}catch (e) {
				console.error("this:", this, "parent:", parent, "error:", e);
			}
			return parent;
		}
		return this.parentNode;
	};
	
	Prototype.parents = function() {		
		let result = new Array();
		let parent = Prototype.parent.apply(this, arguments);
		while(parent){
			result.push(parent);
			parent = Prototype.parent.apply(parent, arguments);
		}
		
		return NodeList.from(result);
	};	

	Prototype.selector = function(){
		if(this instanceof Document || this instanceof DocumentFragment)
			return undefined;
		else if(this.id)
			return "#" + this.id;
		else{			
			let selector = this.tagName.toLowerCase();
			let parent = this.parent();
			if(parent){
				let sameTagSiblings = parent.find(":scope>" + selector);			
				if (sameTagSiblings instanceof NodeList) {
					let index = sameTagSiblings.indexOf(this);
					if (index > 0)
						selector += ':nth-child(' + (index + 1) + ')';
				}		
				let parentSelector = parent.selector();
				return parentSelector ? parentSelector + ">" + selector : selector;
			} 
			return selector;
		}
	};	

	Prototype.closest = function(aQuery) {			
		let node = this;
		while(node){
			let closests = node.find(aQuery);
			if(closests && closests.length > 0)
				return closests;
			else if(node.is(aQuery))
				return NodeList.from(node);
			
			node = node.parent();		
		}
	};
	
	Prototype.nested = function(aQuery){
		if(this.is(aQuery))
			return NodeList.from(this);	
		
		let nested = this.find(aQuery);
		if(nested && nested.length > 0)
			return nested;
		else
			return NodeList.from(this.parent(aQuery));
	};
});
/* harmony default export */ __webpack_exports__["default"] = (support);



/***/ }),

/***/ "./node_modules/@default-js/defaultjs-extdom/src/dom/extentions/ReadyEventSupport.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-extdom/src/dom/extentions/ReadyEventSupport.js ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_Extender__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/Extender */ "./node_modules/@default-js/defaultjs-extdom/src/utils/Extender.js");


const support = Object(_utils_Extender__WEBPACK_IMPORTED_MODULE_0__["default"])("ReadyEventSupport", Prototype => {
	Prototype.ready = function(aFunction, once){	
		this.on("ready", aFunction, once);
		if(document.readyState == "complete")			
			this.trigger("ready");
		
		return this;
	};
	
});
/* harmony default export */ __webpack_exports__["default"] = (support);

/***/ }),

/***/ "./node_modules/@default-js/defaultjs-extdom/src/dom/extentions/ShowHideSupport.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-extdom/src/dom/extentions/ShowHideSupport.js ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_Extender__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/Extender */ "./node_modules/@default-js/defaultjs-extdom/src/utils/Extender.js");


const HIDEVALUE = "none";

const isHidden = (element) => {
	return element.style.display === HIDEVALUE
};

const init = (element) => {	
	let display = !isHidden(element) ? element.style.display : "";
	
	element.show = (function(){
		this.style.display = display;
		return this;		
	}).bind(element);
	
	element.hide = (function(){
		this.style.display = HIDEVALUE;
		return this;		
	}).bind(element);
	
	return element;
};


const support = Object(_utils_Extender__WEBPACK_IMPORTED_MODULE_0__["default"])("ShowHideSupport", Prototype => {
	Prototype.show = function() {
		return init(this).show.apply(null, arguments)
	};

	Prototype.hide = function() {
		return init(this).hide.apply(null, arguments)
	};

	Prototype.toggleShow = function() {
		return isHidden(this) ? this.show() : this.hide();
	};

});
/* harmony default export */ __webpack_exports__["default"] = (support);

/***/ }),

/***/ "./node_modules/@default-js/defaultjs-extdom/src/dom/extentions/ValueSupport.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-extdom/src/dom/extentions/ValueSupport.js ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_Extender__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/Extender */ "./node_modules/@default-js/defaultjs-extdom/src/utils/Extender.js");


const InputTypes = [
	{
		selector : "select",
		get : function(){
			const result = [];
			this.find("option").forEach(option => {
				if(option.selected)
					result.push(option.value);
			});			
			return result;
		},
		set : function(){				
			let values = [];
			const args = Array.from(arguments);
			let arg = args.shift();
			while(arg){
				if(Array.isArray(arg))
					values = values.concat(arg);
				else
					values.push(arg);
				
				arg = args.shift();
			}
			this.value = values;
			this.find("option").forEach(option => option.selected = values.indexOf(option.value) >= 0);			
			this.trigger("changed");
		}			
	},
	{
		selector : "input[type=\"checkbox\"], input[type=\"radio\"]",
		get : function(){
			if(this.value == "on" || this.value == "off")
				return this.checked;
			else if(this.checked)
				return this.value;				
		},
		set : function(aValue){
			if(typeof aValue === "boolean")
				this.checked = aValue;
			else if(typeof aValue === "string")
				this.checked = this.value == aValue;
			else if(Array.isArray(aValue))
				this.checked = aValue.indexOf(this.value) >= 0;
			
			this.trigger("changed");
		}
	}
];

const DefaultInputType = {
		get : function(){
			return this.value;
		},
		set : function(aValue){
			this.value = aValue;
			this.trigger("input");
		}	
};

const getInputType = function(aElement){
	for(let i = 0; i < InputTypes.length; i++)
		if(aElement.is(InputTypes[i].selector))
			return InputTypes[i];		
	return DefaultInputType;
};


const support = Object(_utils_Extender__WEBPACK_IMPORTED_MODULE_0__["default"])("ValueSupport", Prototype => {	
	Prototype.val = function() {
		let type = getInputType(this);
		if(arguments.length == 0)
			return type.get.apply(this, arguments);
		else
			type.set.apply(this, arguments);
			
		return this;
	};	
});
/* harmony default export */ __webpack_exports__["default"] = (support);

/***/ }),

/***/ "./node_modules/@default-js/defaultjs-extdom/src/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-extdom/src/index.js ***!
  \****************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dom_EventTarget__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom/EventTarget */ "./node_modules/@default-js/defaultjs-extdom/src/dom/EventTarget.js");
/* harmony import */ var _dom_Node__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom/Node */ "./node_modules/@default-js/defaultjs-extdom/src/dom/Node.js");
/* harmony import */ var _dom_Element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dom/Element */ "./node_modules/@default-js/defaultjs-extdom/src/dom/Element.js");
/* harmony import */ var _dom_Document__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dom/Document */ "./node_modules/@default-js/defaultjs-extdom/src/dom/Document.js");
/* harmony import */ var _dom_DocumentFragment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dom/DocumentFragment */ "./node_modules/@default-js/defaultjs-extdom/src/dom/DocumentFragment.js");
/* harmony import */ var _dom_HTMLElement__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dom/HTMLElement */ "./node_modules/@default-js/defaultjs-extdom/src/dom/HTMLElement.js");
/* harmony import */ var _dom_HTMLInputElement__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dom/HTMLInputElement */ "./node_modules/@default-js/defaultjs-extdom/src/dom/HTMLInputElement.js");
/* harmony import */ var _dom_HTMLTextAreaElement__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./dom/HTMLTextAreaElement */ "./node_modules/@default-js/defaultjs-extdom/src/dom/HTMLTextAreaElement.js");
/* harmony import */ var _dom_HTMLSelectElement__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./dom/HTMLSelectElement */ "./node_modules/@default-js/defaultjs-extdom/src/dom/HTMLSelectElement.js");
/* harmony import */ var _dom_NodeList__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./dom/NodeList */ "./node_modules/@default-js/defaultjs-extdom/src/dom/NodeList.js");
/* harmony import */ var _dom_HtmlCollection__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./dom/HtmlCollection */ "./node_modules/@default-js/defaultjs-extdom/src/dom/HtmlCollection.js");
/* harmony import */ var _Global__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Global */ "./node_modules/@default-js/defaultjs-extdom/src/Global.js");














/***/ }),

/***/ "./node_modules/@default-js/defaultjs-extdom/src/utils/DelegaterBuilder.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-extdom/src/utils/DelegaterBuilder.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const DelegaterBuilder = function() {
	const args = Array.from(arguments);
	const callback = args.shift();
	const source = args.shift();
	args.forEach( target =>{
		Object.getOwnPropertyNames(target)
		.forEach(name => {
			const prop = Object.getOwnPropertyDescriptor(target, name);
			if (typeof source[name] === "undefined" && typeof prop.value === "function")
				source[name] = function(){
					return callback.call(this, name, arguments);
				};										
		});
	});
	
};
/* harmony default export */ __webpack_exports__["default"] = (DelegaterBuilder);

/***/ }),

/***/ "./node_modules/@default-js/defaultjs-extdom/src/utils/ExtendPrototype.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-extdom/src/utils/ExtendPrototype.js ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const extendPrototype = function(){
	const args = Array.from(arguments);
	const type = args.shift();	
	while(args.length > 0){
		const extender = args.shift();
		extender(type);
	}
};

/* harmony default export */ __webpack_exports__["default"] = (extendPrototype);

/***/ }),

/***/ "./node_modules/@default-js/defaultjs-extdom/src/utils/Extender.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-extdom/src/utils/Extender.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Utils */ "./node_modules/@default-js/defaultjs-extdom/src/utils/Utils.js");


const EXTENSIONS_MAP = _Utils__WEBPACK_IMPORTED_MODULE_0__["default"].globalVar("___DOM_API_EXTENSION_MAP___", {});
const Extender = function(aName, aExtention){
	return function(aType){	
		let extensions = EXTENSIONS_MAP[aType.name];
		if(!extensions)
			extensions = EXTENSIONS_MAP[aType.name] = {};		
		
		if(!extensions[aName]){
			extensions[aName] = true;
			aExtention(aType.prototype);
		}
		else
			console.warn("duplicated load of extension \"" + aName + "\"!");
	}
};

/* harmony default export */ __webpack_exports__["default"] = (Extender);

/***/ }),

/***/ "./node_modules/@default-js/defaultjs-extdom/src/utils/Utils.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-extdom/src/utils/Utils.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {const Utils = {
	global : (() => {
		if(typeof window !== "undefined") return window;
		if(typeof global !== "undefined") return global;
		if(typeof self !== "undefined") return self;
		return {};		
	})(),
	globalVar : function(aName, aInitValue){
		if(arguments.length === 2 && typeof Utils.global[aName] === "undefined")
			Utils.global[aName] = aInitValue;
		
		return Utils.global[aName];		
	}
};

/* harmony default export */ __webpack_exports__["default"] = (Utils);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./src/Context.js":
/*!************************!*\
  !*** ./src/Context.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Context; });
/* harmony import */ var _Wait_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Wait.js */ "./src/Wait.js");


const CLOSE_TIMEOUT = 2000;
class Context {
	constructor({ resolver, renderer, template, container, root, mode = "replace", target = null, parent = null }) {
		if (!resolver) throw new Error("Parameter \"resolver\" is required!");
		if (!renderer) throw new Error("Parameter \"renderer\" is required!");
		if (!template) throw new Error("Parameter \"template\" is required!");
		if (!container) throw new Error("Parameter \"container\" is required!");
		if (!root) throw new Error("Parameter \"root\" is required!");

		this.readyHandles = [];
		this.content = null;
		this.template = template;
		this.container = container;
		this.resolver = resolver;
		this.mode = mode;
		this.renderer = renderer;
		this.root = root;
		this.target = target;
		this.parent = parent;
		this.closed = false;
		this.wait = Object(_Wait_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this);


		/* execution flags */
		this.stop = false;
		this.ignore = false;
	}

	async finish(callback) {
		if (this.closed)
			return; //context is ready and closed

		if (this.parent)
			this.parent.finish(callback);
		else
			this.ready(callback);
	};

	async ready(callback) {
		if (this.closed)
			return; //context is ready and closed

		if (callback) {
			if (callback instanceof Array)
				callback.forEach((callback) => { this.ready = callback; });
			else if (callback instanceof Promise || typeof callback === "function")
				this.readyHandles.push(callback);
		} else {
			this.closed = true;
			//wait of all sub context to be closed with an maximum amount of time

			if (this.readyHandles.length > 0) {
				try {
					await Promise.race([
						Promise.all(this.readyHandles.map(handle => handle instanceof Promise ? handle : handle(this))),
						new Promise((reject, error) => {
							setTimeout(() => {
								error(new Error("timeout"));
							}, 2000)
						})
					]);
				} catch (e) {
					console.error(e);			
					throw e
				}
			}

			this.wait.finished();
		}
	}

	subContext({ resolver = this.resolver, renderer = this.renderer, template = this.template, container = this.container, root = this.root, mode = this.mode, target = this.target } = {}) {
		const sub = new Context({ resolver, renderer, template, container, mode, root, target, parent: this });
		//this.ready(sub.wait);
		return sub;
	}

	clone({ resolver = this.resolver, renderer = this.renderer, template = this.template, container = this.container, root = this.root, mode = this.mode, target = this.target } = {}) {
		return new Context({ resolver, renderer, template, container, mode, root, target, parent: this });
	}
};

/***/ }),

/***/ "./src/Directive.js":
/*!**************************!*\
  !*** ./src/Directive.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Directive; });
const DEFINED_DIRECTIVES = [];

const defineDirective = ({ directive }) => {
	if (!(directive instanceof Directive))
		throw new Error("Implementation dosn't extend Directive class!");

	if (directive.rank < Directive.MIN_RANK)
		throw new Error("The rank of a directive can't be lower as " + Directive.MIN_RANK + "!");

	if (directive.rank > Directive.MAX_RANK)
		throw new Error("The rank of a directive can't be grater as " + Directive.MAX_RANK + "!");

	DEFINED_DIRECTIVES.push(directive);
	DEFINED_DIRECTIVES.sort((a, b) => {
		const phase = a.phase - b.phase;
		if(phase == 0)
			return a.rank - b.rank;
			
		return phase;
	});
};

const PHASE = {
	init: 0,
	data: 1,
	template: 2,
	content: 3,
	finish: 4
};

class Directive {

	static get PHASE() { return PHASE };
	static get MIN_RANK() { return 0 };
	static get MAX_RANK() { return 100000 };

	constructor() { };

	get name() { }
	get rank() { }
	get phase() {return PHASE.finish}

	/**
	 * need to be implemented
	 * 
	 * return DirectiveResult
	 */
	async execute(context) {
		return context;
	}


	static define(option) {
		defineDirective(option);
	}

	static get directives() {
		return DEFINED_DIRECTIVES;
	}
};

/***/ }),

/***/ "./src/Element.js":
/*!************************!*\
  !*** ./src/Element.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DirectiveElement; });
class DirectiveElement extends HTMLElement{
	constructor(){
		super();
		this.hidden = true;
	}
	
	/**
	 * need to be implemented
	 * 
	 */
	async execute({template, context}){
		context.content = template.cloneNode(true);
		return context;
	};	
}

/***/ }),

/***/ "./src/Renderer.js":
/*!*************************!*\
  !*** ./src/Renderer.js ***!
  \*************************/
/*! exports provided: SCOPES, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SCOPES", function() { return SCOPES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Renderer; });
/* harmony import */ var _default_js_defaultjs_extdom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @default-js/defaultjs-extdom */ "./node_modules/@default-js/defaultjs-extdom/index.js");
/* harmony import */ var _default_js_defaultjs_expression_language_src_ExpressionResolver_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @default-js/defaultjs-expression-language/src/ExpressionResolver.js */ "./node_modules/@default-js/defaultjs-expression-language/src/ExpressionResolver.js");
/* harmony import */ var _Template_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Template.js */ "./src/Template.js");
/* harmony import */ var _Context_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Context.js */ "./src/Context.js");
/* harmony import */ var _Directive_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Directive.js */ "./src/Directive.js");
/* harmony import */ var _Element_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Element.js */ "./src/Element.js");
/* harmony import */ var _directives__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./directives */ "./src/directives/index.js");
/* harmony import */ var _elements__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./elements */ "./src/elements/index.js");










const SCOPES = {
	application: "application",
	data: "data",
	render: "render",
	container: "container",
	node: "node",
	directive: "directive"
};

const APPLICATION_SCOPE_RESOLVER = new _default_js_defaultjs_expression_language_src_ExpressionResolver_js__WEBPACK_IMPORTED_MODULE_1__["default"]({ name: SCOPES.application });

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
};

const loadTemplateContent = async (template, context, renderer) => {
	if (template) {
		template = await _Template_js__WEBPACK_IMPORTED_MODULE_2__["default"].load(template)
		return template.importContent();
	} else if (context)
		return context.template;
	else if (renderer.template) {
		return await renderer.template.importContent();
	}

	throw new Error("No content template specified!");
};

class Renderer {
	constructor({ template, data } = {}) {
		if (template && !(template instanceof _Template_js__WEBPACK_IMPORTED_MODULE_2__["default"]))
			throw new Error("template must be an instance of Template!");

		this.template = template;
		this.resolver = new _default_js_defaultjs_expression_language_src_ExpressionResolver_js__WEBPACK_IMPORTED_MODULE_1__["default"]({ name: SCOPES.data, context: data ? data : {}, parent: APPLICATION_SCOPE_RESOLVER });
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
	async render({ template = null, data = null, container, root, mode, target, context = null }) {
		template = await loadTemplateContent(template, context, this);
		let resolver = new _default_js_defaultjs_expression_language_src_ExpressionResolver_js__WEBPACK_IMPORTED_MODULE_1__["default"]({ name: SCOPES.render, context: data, parent: context ? context.resolver : this.resolver });

		let renderContext = context;
		if (!renderContext)
			renderContext = new _Context_js__WEBPACK_IMPORTED_MODULE_3__["default"]({ resolver, renderer: this, template, container, root: root ? root : container, mode: mode ? mode : "replace", target });
		else
			renderContext = renderContext.clone({ resolver, template, container, root, mode, target });

		let result = null;
		if (template instanceof Node)
			result = await this.renderNode(renderContext);
		else
			result = await this.renderContainer(renderContext)

		if (result instanceof _Context_js__WEBPACK_IMPORTED_MODULE_3__["default"])
			renderContext = result;


		if (renderContext.content && renderContext.mode) {
			const modeworker = MODEWORKER[renderContext.mode];
			if (!modeworker)
				throw new Error("The \"" + renderContext.mode + "\" is not supported!")

			await modeworker(renderContext);
		}

		if (!context)
			await renderContext.ready();
		else
			renderContext.ready();

		return context;
	}


	async renderContainer(context) {
		if (context.template && context.template.length > 0) {
			const renderings = context.template.map(node => {
				//separate node context from the current context
				const resolver = new _default_js_defaultjs_expression_language_src_ExpressionResolver_js__WEBPACK_IMPORTED_MODULE_1__["default"]({ name: SCOPES.node, context: null, parent: context.resolver });
				return this.renderNode(context.clone({ template: node, resolver }))
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
					if (node instanceof NodeList || node instanceof HTMLCollection)
						content = content.concat(Array.from(node));
					else if (node instanceof Node)
						content.push(node);

					result.ready();
					return content;
				}, []);

		}
		return context;
	}

	async renderNode(context) {
		try {
			context.template.normalize();
			if (context.template instanceof _Element_js__WEBPACK_IMPORTED_MODULE_5__["default"])
				await context.template.execute(context);
			else
				await this.executeDirectives(context);

			if (!context.ignore && context.content) {
				const content = context.template.childNodes;
				if (content && content.length > 0) {
					// @TODO await or fire and forget???
					await context.renderer.render({ context: context.clone({ template: content, container: context.content }) });
				}
			}

			if (context.content && context.content.tagName && context.content.tagName == "JSTL")
				context.content = context.content.childNodes; //special case to support the old "<jstl>" tag.
				
		} catch (e) {
			console.error("error at render node:", e, context);
		}
		return context;
	}

	async executeDirectives(context) {
		//console.log("scope chain:", context.renderer.chain, "resolver chain", context.renderer.resolver.fullname);
		const directives = _Directive_js__WEBPACK_IMPORTED_MODULE_4__["default"].directives;
		const length = directives.length;
		for (let i = 0; i < length && !context.stop; i++) {
			const directive = directives[i];
			try {
				const result = await directive.execute(context);
				if (result instanceof _Context_js__WEBPACK_IMPORTED_MODULE_3__["default"])
					context = result;
			} catch (e) {
				console.error("error at directive:", e, directive, context);
			}
		}
		return context;
	}

	static async build({ template, data } = {}) {
		if (template && template instanceof Promise)
			template = await template;

		template = template ? await _Template_js__WEBPACK_IMPORTED_MODULE_2__["default"].load(template) : null;
		return new Renderer({ template, data });
	};

	static async render({ container, data, template, mode, target }) {
		const renderer = new Renderer({ template, data });
		return renderer.render({ container, mode, target });
	}
}

/***/ }),

/***/ "./src/Template.js":
/*!*************************!*\
  !*** ./src/Template.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Template; });
/* harmony import */ var _default_js_defaultjs_common_utils_src_javascript_String_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @default-js/defaultjs-common-utils/src/javascript/String.js */ "./node_modules/@default-js/defaultjs-common-utils/src/javascript/String.js");
/* harmony import */ var _default_js_defaultjs_common_utils_src_javascript_String_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_default_js_defaultjs_common_utils_src_javascript_String_js__WEBPACK_IMPORTED_MODULE_0__);


const CACHE = {};
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
		template = document.createElement("template");
		if(element instanceof Node || element instanceof NodeList || element instanceof HTMLCollection || element instanceof Array)
			template.append(element);
		else
			throw new Error("Template type is not supported!");			
		
		template = new Template(template, key);
	}
	
	if(!template)
		throw new Error("Template can't loaded!");
	
	if(cache && key)
		CACHE[key] = template;
	
	return template;
};

class Template {	
	constructor(template, key){		
		this.template = template;
		this.key = key;	
	}
	
	importContent(doc=document){
		let imported = doc.importNode(this.template, true);
		return imported.content.childNodes;
	}
	
	remove() {
		if(this.key && CACHE[this.key])
			delete CACHE[this.key];		
	};

	static async fetch(url, cache = true, alias = null){
		if(typeof url === "string"){
			return Template.load(new URL(url, loaction), cache, alias);
		}else if(url instanceof URL)
			return Template.load(url, cache, alias);

		new Error("The url isn't a allowed type! -> [String|URL] required!");
	}
	
	static async load(template, cache = true, alias = null){
		if(template instanceof Template)
			return template;
		
		const key = getKey(template, cache, alias);
		if(key && CACHE[key])
			return CACHE[key];
		else if(typeof template === "string"){
			return fromSource(template, cache, key);
		}else if(template instanceof URL)
			return await fromURL(template, cache, key);
		else if(template instanceof Node || template instanceof NodeList || template instanceof HTMLCollection || template instanceof HTMLTemplateElement)
			return fromElement(template, cache, key);
		
		new Error("The template isn't a allowed type! -> [String|URL|Node|NodeList|HTMLCollection|Template] required!");
	}
};


/***/ }),

/***/ "./src/Wait.js":
/*!*********************!*\
  !*** ./src/Wait.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ((object) => {
	let finished = null;
	const wait =  new Promise((resolve) => {
		finished = resolve;
	});
	wait.object = object;
	
	wait.finished = async () => {
		await finished();
	};
	
	return wait;
});

/***/ }),

/***/ "./src/directives/Attributes.js":
/*!**************************************!*\
  !*** ./src/directives/Attributes.js ***!
  \**************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Directive_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Directive.js */ "./src/Directive.js");


const ATTRIBUTE_NAME = /(jstl)?(\?)?(@)?([^\?@]+)/i;

const bindAttribute = async ({ condition, name, value, context }) => {
	const { resolver, content, template } = context;
		
	let attribute = !condition ? value : template.attr(name);
	condition = condition ? value : template.attr("?" + name);
	const hasValue = isValue(attribute);
	
	if (condition && hasValue) {
		condition = await resolver.resolve(condition, false);
		if (condition === true)
			content.attr(name, await resolver.resolveText(attribute, attribute));
	} else if (condition) {
		condition = await resolver.resolve(condition, false);
		if (condition === true)
			content.attr(name, true);
	} else if (hasValue) {
		content.attr(name, await resolver.resolveText(attribute, attribute));
	}
};

const isValue = (value) => {
	return value != null && typeof value !== "undefined";	
};

const bindEvent = async ({ condition, name, value, context }) => {
	const { resolver, template } = context;
	
	condition = condition ? value : template.attr("?@" + name);
	let handle = !condition ? value : template.attr("@"+ name);
	let split = name.split(":");
	const event = split.shift();
	const type = split.shift() || "default";
	

	if (condition && handle){
		if(await resolver.resolve(condition, false) == true)
			await binding({event, type, handle, context });
	}
	else if (handle)
		await binding({event, type, handle, context });
};

const binding = async ({event, type, handle, context }) => {
	const { resolver, content} = context;
		
	if(type == "delegate"){
		const eventhandle = await resolver.resolveText(handle, handle);
		content.on(event, delegater(eventhandle));
	} else {		
		const eventhandle = await resolver.resolve(handle, handle);
	
		if(!eventhandle)
			console.error(new Error("Can't resolve \"" + handle + "\" to event handle!"))
		else if(typeof eventhandle === "function")
			content.on(event, eventhandle);
		else if(typeof eventhandle === "string")
			content.on(event, delegater(eventhandle));
		else if(typeof eventhandle === "object"){	
			const {capture=false, passive=false, once=false} = handle;		
			content.on(event, eventhandle.eventHandle, {capture, passive, once});
		}
	}
};

const delegater = function(delegate) {
	return function(event) {
		event.preventDefault();
		event.stopPropagation();
		if(event.currentTarget)	
			event.currentTarget.trigger(delegate, event);
		else
			event.target.trigger(delegate, event);
	};
};


class Attribute extends _Directive_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
	constructor() {
		super();
	}

	get name() { return "attribute" }
	get rank() { return _Directive_js__WEBPACK_IMPORTED_MODULE_0__["default"].MIN_RANK }
	get phase() { return _Directive_js__WEBPACK_IMPORTED_MODULE_0__["default"].PHASE.content }


	async execute(context) {
		const { template } = context;
		if (!(template instanceof HTMLElement))
			return context;

		const processed = new Set();
		for (const attribute of template.attributes) {
			const [, jstl, condition, event, name] = ATTRIBUTE_NAME.exec(attribute.name);
			if (!jstl && !processed.has(name)) {
				const value = attribute.value;
								
				if (event)
					await bindEvent({ condition, event, name, value, context })
				else
					await bindAttribute({ condition, name, value, context })
			}
			processed.add(name);
		}

		return context;
	}
}

_Directive_js__WEBPACK_IMPORTED_MODULE_0__["default"].define({ directive: new Attribute() });

/***/ }),

/***/ "./src/directives/Choose.js":
/*!**********************************!*\
  !*** ./src/directives/Choose.js ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Directive_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Directive.js */ "./src/Directive.js");


class Choose extends _Directive_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
	constructor() {
		super();
	}

	get name() { return "choose" }
	get rank() { return _Directive_js__WEBPACK_IMPORTED_MODULE_0__["default"].MIN_RANK + 1 }
	get phase() { return _Directive_js__WEBPACK_IMPORTED_MODULE_0__["default"].PHASE.template }

	async execute(context) {
		if (!(context.template instanceof HTMLElement) || !context.template.hasAttribute("jstl-choose") || context.template.children.length == 0)
			return context;

		const { template, resolver } = context;
		let resolved = false;
		const whens = template.find(":scope > [jstl-when]");
		const length = whens.length;
		for (let i = 0; i < length; i++) {
			const node = whens[i];
			if (!resolved && (await resolver.resolve(node.attr("jstl-when"), false)))
				resolved = true;
			else
				node.remove();
		}

		if (resolved)
			template.find(":scope > [jstl-otherwise]").remove();

		return context;
	}
}

_Directive_js__WEBPACK_IMPORTED_MODULE_0__["default"].define({ directive: new Choose() });

/***/ }),

/***/ "./src/directives/Data.js":
/*!********************************!*\
  !*** ./src/directives/Data.js ***!
  \********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Directive_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Directive.js */ "./src/Directive.js");
/* harmony import */ var _default_js_defaultjs_expression_language_src_ExpressionResolver_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @default-js/defaultjs-expression-language/src/ExpressionResolver.js */ "./node_modules/@default-js/defaultjs-expression-language/src/ExpressionResolver.js");



const MODES = {
	"remote": async ({ data, context }) => {		
		const {resolver, template} = context;
		data = await resolver.resolveText(data);
		data = new URL(data, location.origin);
		let option = await resolver.resolveText(template.attr("jstl-data-option") || "{}");
		option = JSON.parse(option);

		data = await fetch(data.toString(), option);
		return data.json();
	},	
	"set": async ({ data, context }) => {
		const {resolver} = context;
		
		data = await resolver.resolve(data);
		return data;
	},
	"direct": async ({ data, context }) => {
		const {resolver} = context;
		
		data = await resolver.resolveText(data);
		return data;
	}
};

const updateContext = ({ varname, data, scope, context }) => {
	if (varname)
		context.resolver.updateData(varname, data, scope);
	else if (scope)
		context.resolver.mergeContext(data, scope);
	else
		context.resolver = new _default_js_defaultjs_expression_language_src_ExpressionResolver_js__WEBPACK_IMPORTED_MODULE_1__["default"]({ context: data, name: "jstl-data", parent: context.resolver });
	
		
	return context;
};



class Data extends _Directive_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
	constructor() {
		super();
	}

	get name() { return "data" }
	get rank() { return 1000 }
	get phase(){return _Directive_js__WEBPACK_IMPORTED_MODULE_0__["default"].PHASE.data}

	async execute(context) {
		if (!(context.template instanceof HTMLElement) || !context.template.attr("jstl-data"))
			return context;
			
		try {
			const { template } = context;			
			const mode = MODES[(template.attr("jstl-data-mode") || "remote")];
			if (!mode)
				throw new Error("The jstl-data-mode is unsupported!");

			let data = template.attr("jstl-data");
			data = await mode({ data, context });

			const varname = template.attr("jstl-data-var");
			const scope = template.attr("jstl-data-scope");
			context = updateContext({ varname, data, scope, context });
		} catch (e) {
			console.error(e, context.template);
		}

		return context;

	}
}

_Directive_js__WEBPACK_IMPORTED_MODULE_0__["default"].define({ directive: new Data() });

/***/ }),

/***/ "./src/directives/Foreach.js":
/*!***********************************!*\
  !*** ./src/directives/Foreach.js ***!
  \***********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Directive_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Directive.js */ "./src/Directive.js");
/* harmony import */ var _default_js_defaultjs_expression_language_src_ExpressionResolver_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @default-js/defaultjs-expression-language/src/ExpressionResolver.js */ "./node_modules/@default-js/defaultjs-expression-language/src/ExpressionResolver.js");



const ATTRIBUTE = {
	DATA: "jstl-foreach",
	VAR: "jstl-foreach-var",
	STATUS: "jstl-foreach-status",
	COUNT: "jstl-foreach-count",
	START: "jstl-foreach-start",
	STEP: "jstl-foreach-step",
	CONDITION: "jstl-foreach-condition"
};

const doCount = async (option) => {
	let { start, step, count, varname, status, resolver } = option;

	count = await resolver.resolve(count);
	const length = start + (count * step);
	let stop = false;
	for (let i = start; i < length && !stop; i = i + step) {
		const iteration = {}
		iteration[varname] = i;
		iteration[status] = {
			index: i,
			number: i + 1,
			step,
			count
		};
		stop = !(await iterate(iteration, option));
	}
};

const doForeach = async (option) => {
	let { data, start, step, count, varname, status, resolver } = option;

	data = await resolver.resolve(data);
	let array = data;
	if (!(data instanceof Array))
		array = Object.getOwnPropertyNames(data);

	count = count != "" ? await resolver.resolve(count, 0) : null;
	const length = count ? Math.min(start + count, array.length) : array.length;
	let stop = false;
	for (let i = start; i < length && !stop; i = i + step) {
		const iteration = {}
		iteration[varname] = data[i];
		iteration[status] = {
			index: i,
			number: i + 1,
			count: length,
			data
		};
		stop = !(await iterate(iteration, option));
	}
};

const iterate = async (data, option) => {
	let { template, resolver, renderer, container, condition, context } = option;
	resolver = new _default_js_defaultjs_expression_language_src_ExpressionResolver_js__WEBPACK_IMPORTED_MODULE_1__["default"]({ context: data, name: "jstl-foreach", parent: resolver });

	condition = condition ? await resolver.resolve(condition, false) : false;
	if (condition)
		return false;

	await renderer.render({ context: context.clone({ resolver, container, template, mode: "append" }) });
	return true;
};

class Foreach extends _Directive_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
	constructor() {
		super();
	}

	get name() { return "foreach" }
	get rank() { return _Directive_js__WEBPACK_IMPORTED_MODULE_0__["default"].MIN_RANK + 2 }
	get phase() { return _Directive_js__WEBPACK_IMPORTED_MODULE_0__["default"].PHASE.template }

	async execute(context) {
		if (!(context.template instanceof HTMLElement) || (!context.template.attr(ATTRIBUTE.DATA) && !context.template.attr(ATTRIBUTE.COUNT)))
			return context;

		context.ignore = true;
		try {
			const { template, resolver, renderer, content } = context;
			const option = {
				data: (template.attr(ATTRIBUTE.DATA) || "").trim(),
				count: (template.attr(ATTRIBUTE.COUNT) || "").trim(),
				start: await resolver.resolve(template.attr(ATTRIBUTE.START) || "0"),
				step: await resolver.resolve(template.attr(ATTRIBUTE.STEP) || "1"),
				varname: (template.attr(ATTRIBUTE.VAR) || "item").trim(),
				status: (template.attr(ATTRIBUTE.STATUS) || "status").trim(),
				condition: template.attr(ATTRIBUTE.CONDITION),
				template: template.childNodes,
				resolver,
				renderer,
				container: content,
				context
			};
			if ((!option.data || option.data == "") && option.count)
				await doCount(option);
			else
				await doForeach(option);

		} catch (error) {
			console.error("error at jstl-foreach:", error);
		}
		return context;

	}
};

_Directive_js__WEBPACK_IMPORTED_MODULE_0__["default"].define({ directive: new Foreach() });

/***/ }),

/***/ "./src/directives/If.js":
/*!******************************!*\
  !*** ./src/directives/If.js ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Directive_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Directive.js */ "./src/Directive.js");


class If extends _Directive_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
	constructor() {
		super();
	}

	get name() { return "if" }
	get rank() { return _Directive_js__WEBPACK_IMPORTED_MODULE_0__["default"].MIN_RANK + 1000 }
	get phase() { return _Directive_js__WEBPACK_IMPORTED_MODULE_0__["default"].PHASE.init }

	async execute(context) {
		const { template } = context;
		if (!(template instanceof HTMLElement) || !template.attr("jstl-if"))
			return context;

		const expression = template.attr("jstl-if");
		const resolver = context.resolver;
		const result = await resolver.resolve(expression, false);
		if (!result) {
			context.content = null;
			context.stop = true;
			context.ignore = true;
		}

		return context;
	}
}

_Directive_js__WEBPACK_IMPORTED_MODULE_0__["default"].define({ directive: new If() });

/***/ }),

/***/ "./src/directives/Include.js":
/*!***********************************!*\
  !*** ./src/directives/Include.js ***!
  \***********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Directive_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Directive.js */ "./src/Directive.js");
/* harmony import */ var _Template_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Template.js */ "./src/Template.js");



class Include extends _Directive_js__WEBPACK_IMPORTED_MODULE_0__["default"] {	
	constructor(){
		super();
	}
	
	get name() {return "include"}
	get rank() {return _Directive_js__WEBPACK_IMPORTED_MODULE_0__["default"].MIN_RANK}
	get phase(){return _Directive_js__WEBPACK_IMPORTED_MODULE_0__["default"].PHASE.template}
		
	async execute(context){
		if(!(context.template instanceof HTMLElement) || !context.template.attr("jstl-include"))
			return context;
		try{
			const {template, resolver, renderer} = context;		
			let include = template.attr("jstl-include");
			include = await resolver.resolveText(include);
			include = new URL(include, location.origin);			
			include = await _Template_js__WEBPACK_IMPORTED_MODULE_1__["default"].load(include);
			
			const mode = template.attr("jstl-include-mode") || "replace";
			await renderer.render({template:include, container: context.content, mode, context});
			context.ignore;
			
			return context;
		}catch(e){
			console.error(e, context.template);
			return context;
		}		
	}
}

_Directive_js__WEBPACK_IMPORTED_MODULE_0__["default"].define({directive: new Include()});

/***/ }),

/***/ "./src/directives/Initial.js":
/*!***********************************!*\
  !*** ./src/directives/Initial.js ***!
  \***********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Directive_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Directive.js */ "./src/Directive.js");
/* harmony import */ var _elements_Replace_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../elements/Replace.js */ "./src/elements/Replace.js");




class Initial extends _Directive_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
	constructor() {
		super();
	}

	get name() { return "initial" }
	get rank() { return _Directive_js__WEBPACK_IMPORTED_MODULE_0__["default"].MIN_RANK }
	get phase() { return _Directive_js__WEBPACK_IMPORTED_MODULE_0__["default"].PHASE.init }


	async execute(context) {
		const { template, renderer } = context;
		if (!(template instanceof Element))
			context.content = document.importNode(template, true);
		else if (template.attr("jstl-async")) {
			context.content = new _elements_Replace_js__WEBPACK_IMPORTED_MODULE_1__["default"]();
			template.attr("jstl-async", null);
			setTimeout(async () => {
				await renderer.render({ mode: "replace", target: context.content, context });
			}, parseInt(template.attr("jstl-async") || "250") || 250);
			context.stop = true;
			context.ignore = true;
		} else if (template.attr("jstl-ignore")) {
			context.content = document.importNode(template, true);
			context.stop = true;
			context.ignore = true;
		} else if (template instanceof HTMLTemplateElement) {
			context.content = document.createElement(template.tagName);
			const subcontext = context.subContext({
				template: template.content.childNodes,
				container: context.content.content
			});
			renderer.render({ context: subcontext });
			context.stop = true;
			context.ignore = true;
		} else if (template.tagName)
			context.content = document.createElement(template.tagName);
		else {
			context.content = document.importNode(template, true);
			context.stop = true;
			context.ignore = true;
		}

		return context;
	}
}

_Directive_js__WEBPACK_IMPORTED_MODULE_0__["default"].define({ directive: new Initial() });

/***/ }),

/***/ "./src/directives/Text.js":
/*!********************************!*\
  !*** ./src/directives/Text.js ***!
  \********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Directive_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Directive.js */ "./src/Directive.js");


const DEFAULT_OPTION = {
	mode: "text",
	unsecure: false,
	preventFormat : false,
	maxLength: 0	
};

const SECURE_HTML_FILTER = "script, style, body, html, head, object, link";

const readOption = async (parent, context) => {
	const resolver = context.resolver;
	return {
		mode: await resolver.resolveText((parent.attr("jstl-text-content-type") || "text").trim().toLowerCase()),
		unsecure: parent.hasAttribute("jstl-text-unsecure"),
		preventFormat: !!parent.attr("jstl-text-prevent-format") || false,
		maxLength: parseInt(await resolver.resolveText(parent.attr("jstl-text-trim-length") || "0"))
	};
};

const trimTextLength = (text, length) => {
	return text.length > length ? text.substring(0, length - 3).trim() + "..." : text;
};

const MODES = {
	"text" : async (option, context) => {
		const {content, resolver, template} = context;
		
		let text = await resolver.resolveText(template.textContent);		
		text = create(text,true).content.textContent;
		if(option.maxLength > 0)
			text = trimTextLength(text, option.maxLength);		
		
		content.textContent = text;		
	},
	"html": async (option, context) => {
		const {resolver, template} = context;
		
		let content = await resolver.resolveText(template.textContent);		
		content = create(content,true);		
		content = document.importNode(content.content, true);
		
		if(option.unsecure)
			context.content = content;			
		else{
			content.find(SECURE_HTML_FILTER).remove();			
			context.content = content;
		}
	}
};


class TextContent extends _Directive_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
	constructor() {
		super();
	}

	get name() { return "text" }
	get rank() { return _Directive_js__WEBPACK_IMPORTED_MODULE_0__["default"].MIN_RANK + 1 }
	get phase() { return _Directive_js__WEBPACK_IMPORTED_MODULE_0__["default"].PHASE.content }



	async execute(context) {
		const { template } = context;
		if (!(template instanceof Text) || template.textContent.trim().length == 0 || (template.parentElement && template.parentElement.hasAttribute("jstl-text-ignore")))
			return context;

		const parent = template.parentElement;
		const option = parent ? await readOption(parent, context) : DEFAULT_OPTION;
		
		const  mode = MODES[option.mode];
		if(!mode)
			throw new Error("Text mode \""+ option.mode + "\" is unsupported!");
		
		await mode(option, context);
		
		return context;
	}
}

_Directive_js__WEBPACK_IMPORTED_MODULE_0__["default"].define({ directive: new TextContent() });

/***/ }),

/***/ "./src/directives/index.js":
/*!*********************************!*\
  !*** ./src/directives/index.js ***!
  \*********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Initial_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Initial.js */ "./src/directives/Initial.js");
/* harmony import */ var _Data_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Data.js */ "./src/directives/Data.js");
/* harmony import */ var _If_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./If.js */ "./src/directives/If.js");
/* harmony import */ var _Choose_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Choose.js */ "./src/directives/Choose.js");
/* harmony import */ var _Include_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Include.js */ "./src/directives/Include.js");
/* harmony import */ var _Foreach_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Foreach.js */ "./src/directives/Foreach.js");
/* harmony import */ var _Text_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Text.js */ "./src/directives/Text.js");
/* harmony import */ var _Attributes_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Attributes.js */ "./src/directives/Attributes.js");









/***/ }),

/***/ "./src/elements/Replace.js":
/*!*********************************!*\
  !*** ./src/elements/Replace.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ReplaceElement; });
/* harmony import */ var _Element_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Element.js */ "./src/Element.js");


class ReplaceElement extends _Element_js__WEBPACK_IMPORTED_MODULE_0__["default"]{
	constructor(){
		super();
		
		this.attachShadow({mode: 'open'});
	}
	async execute({template, context}){
		return context;
	};		
}
try{customElements.define("jstl-replace", ReplaceElement);}catch(e){}//ignore

/***/ }),

/***/ "./src/elements/index.js":
/*!*******************************!*\
  !*** ./src/elements/index.js ***!
  \*******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Replace_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Replace.js */ "./src/elements/Replace.js");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly8vLi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGRlZmF1bHQtanMvZGVmYXVsdGpzLWNvbW1vbi11dGlscy9zcmMvR2xvYmFsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZGVmYXVsdC1qcy9kZWZhdWx0anMtY29tbW9uLXV0aWxzL3NyYy9qYXZhc2NyaXB0L1N0cmluZy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGRlZmF1bHQtanMvZGVmYXVsdGpzLWV4cHJlc3Npb24tbGFuZ3VhZ2Uvbm9kZV9tb2R1bGVzL0BkZWZhdWx0LWpzL2RlZmF1bHRqcy1jb21tb24tdXRpbHMvc3JjL0dsb2JhbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGRlZmF1bHQtanMvZGVmYXVsdGpzLWV4cHJlc3Npb24tbGFuZ3VhZ2Uvbm9kZV9tb2R1bGVzL0BkZWZhdWx0LWpzL2RlZmF1bHRqcy1jb21tb24tdXRpbHMvc3JjL09iamVjdFByb3BlcnR5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZGVmYXVsdC1qcy9kZWZhdWx0anMtZXhwcmVzc2lvbi1sYW5ndWFnZS9ub2RlX21vZHVsZXMvQGRlZmF1bHQtanMvZGVmYXVsdGpzLWNvbW1vbi11dGlscy9zcmMvT2JqZWN0VXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BkZWZhdWx0LWpzL2RlZmF1bHRqcy1leHByZXNzaW9uLWxhbmd1YWdlL3NyYy9Db250ZXh0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZGVmYXVsdC1qcy9kZWZhdWx0anMtZXhwcmVzc2lvbi1sYW5ndWFnZS9zcmMvRGVmYXVsdFZhbHVlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZGVmYXVsdC1qcy9kZWZhdWx0anMtZXhwcmVzc2lvbi1sYW5ndWFnZS9zcmMvRXhwcmVzc2lvblJlc29sdmVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZGVmYXVsdC1qcy9kZWZhdWx0anMtZXh0ZG9tL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZGVmYXVsdC1qcy9kZWZhdWx0anMtZXh0ZG9tL3NyYy9HbG9iYWwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BkZWZhdWx0LWpzL2RlZmF1bHRqcy1leHRkb20vc3JjL2RvbS9Eb2N1bWVudC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGRlZmF1bHQtanMvZGVmYXVsdGpzLWV4dGRvbS9zcmMvZG9tL0RvY3VtZW50RnJhZ21lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BkZWZhdWx0LWpzL2RlZmF1bHRqcy1leHRkb20vc3JjL2RvbS9FbGVtZW50LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZGVmYXVsdC1qcy9kZWZhdWx0anMtZXh0ZG9tL3NyYy9kb20vRXZlbnRUYXJnZXQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BkZWZhdWx0LWpzL2RlZmF1bHRqcy1leHRkb20vc3JjL2RvbS9IVE1MRWxlbWVudC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGRlZmF1bHQtanMvZGVmYXVsdGpzLWV4dGRvbS9zcmMvZG9tL0hUTUxJbnB1dEVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BkZWZhdWx0LWpzL2RlZmF1bHRqcy1leHRkb20vc3JjL2RvbS9IVE1MU2VsZWN0RWxlbWVudC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGRlZmF1bHQtanMvZGVmYXVsdGpzLWV4dGRvbS9zcmMvZG9tL0hUTUxUZXh0QXJlYUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BkZWZhdWx0LWpzL2RlZmF1bHRqcy1leHRkb20vc3JjL2RvbS9IdG1sQ29sbGVjdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGRlZmF1bHQtanMvZGVmYXVsdGpzLWV4dGRvbS9zcmMvZG9tL05vZGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BkZWZhdWx0LWpzL2RlZmF1bHRqcy1leHRkb20vc3JjL2RvbS9Ob2RlTGlzdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGRlZmF1bHQtanMvZGVmYXVsdGpzLWV4dGRvbS9zcmMvZG9tL2V4dGVudGlvbnMvQXR0cmlidXRlU3VwcG9ydC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGRlZmF1bHQtanMvZGVmYXVsdGpzLWV4dGRvbS9zcmMvZG9tL2V4dGVudGlvbnMvRGF0YVN1cHBvcnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BkZWZhdWx0LWpzL2RlZmF1bHRqcy1leHRkb20vc3JjL2RvbS9leHRlbnRpb25zL0V2ZW50U3VwcG9ydC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGRlZmF1bHQtanMvZGVmYXVsdGpzLWV4dGRvbS9zcmMvZG9tL2V4dGVudGlvbnMvSHRtbENsYXNzU3VwcG9ydC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGRlZmF1bHQtanMvZGVmYXVsdGpzLWV4dGRvbS9zcmMvZG9tL2V4dGVudGlvbnMvTGlzdFN1cHBvcnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BkZWZhdWx0LWpzL2RlZmF1bHRqcy1leHRkb20vc3JjL2RvbS9leHRlbnRpb25zL01hbmlwdWxhdGlvblN1cHBvcnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BkZWZhdWx0LWpzL2RlZmF1bHRqcy1leHRkb20vc3JjL2RvbS9leHRlbnRpb25zL1F1ZXJ5U3VwcG9ydC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGRlZmF1bHQtanMvZGVmYXVsdGpzLWV4dGRvbS9zcmMvZG9tL2V4dGVudGlvbnMvUmVhZHlFdmVudFN1cHBvcnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BkZWZhdWx0LWpzL2RlZmF1bHRqcy1leHRkb20vc3JjL2RvbS9leHRlbnRpb25zL1Nob3dIaWRlU3VwcG9ydC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGRlZmF1bHQtanMvZGVmYXVsdGpzLWV4dGRvbS9zcmMvZG9tL2V4dGVudGlvbnMvVmFsdWVTdXBwb3J0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZGVmYXVsdC1qcy9kZWZhdWx0anMtZXh0ZG9tL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGRlZmF1bHQtanMvZGVmYXVsdGpzLWV4dGRvbS9zcmMvdXRpbHMvRGVsZWdhdGVyQnVpbGRlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGRlZmF1bHQtanMvZGVmYXVsdGpzLWV4dGRvbS9zcmMvdXRpbHMvRXh0ZW5kUHJvdG90eXBlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZGVmYXVsdC1qcy9kZWZhdWx0anMtZXh0ZG9tL3NyYy91dGlscy9FeHRlbmRlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGRlZmF1bHQtanMvZGVmYXVsdGpzLWV4dGRvbS9zcmMvdXRpbHMvVXRpbHMuanMiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL2dsb2JhbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQ29udGV4dC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvRGlyZWN0aXZlLmpzIiwid2VicGFjazovLy8uL3NyYy9FbGVtZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9SZW5kZXJlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvVGVtcGxhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1dhaXQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RpcmVjdGl2ZXMvQXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZGlyZWN0aXZlcy9DaG9vc2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RpcmVjdGl2ZXMvRGF0YS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZGlyZWN0aXZlcy9Gb3JlYWNoLmpzIiwid2VicGFjazovLy8uL3NyYy9kaXJlY3RpdmVzL0lmLmpzIiwid2VicGFjazovLy8uL3NyYy9kaXJlY3RpdmVzL0luY2x1ZGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RpcmVjdGl2ZXMvSW5pdGlhbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZGlyZWN0aXZlcy9UZXh0LmpzIiwid2VicGFjazovLy8uL3NyYy9kaXJlY3RpdmVzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9lbGVtZW50cy9SZXBsYWNlLmpzIiwid2VicGFjazovLy8uL3NyYy9lbGVtZW50cy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFB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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxTQUFTLDRCQUE0Qjs7QUFFckMsOEQ7QUFDQTtBQUNBO0FBQ0EsaUQ7O0FBRUEsNkI7QUFDQSxFQUFFO0FBQ0Y7QUFDQSxTQUFTLG1CQUFtQjs7QUFFNUIsaUU7QUFDQSxpQztBQUNBOztBQUVBO0FBQ0EsNkI7QUFDQTtBQUNBLDZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBLDBCQUEwQixxREFBUztBQUNuQztBQUNBO0FBQ0E7O0FBRUEsYUFBYTtBQUNiLGFBQWEsUUFBUSxxREFBUztBQUM5QixjQUFjLFFBQVEscURBQVM7Ozs7QUFJL0I7QUFDQSxTQUFTLFdBQVc7QUFDcEI7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEscURBQVMsU0FBUywrQkFBK0IsRTs7Ozs7Ozs7Ozs7O0FDbEZqRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBc0I7QUFDSDtBQUNGO0FBQ0k7QUFDQztBQUNBO0FBQ0g7Ozs7Ozs7Ozs7Ozs7QUNObkI7QUFBQTtBQUFBO0FBQW1DOztBQUVwQiw2QkFBNkIsbURBQU87QUFDbkQ7QUFDQTs7QUFFQSxxQkFBcUIsYUFBYTtBQUNsQztBQUNBLGdCQUFnQixrQkFBa0I7QUFDbEM7QUFDQSxHO0FBQ0E7QUFDQSxJQUFJLHVEQUF1RCxVQUFVLFE7Ozs7Ozs7Ozs7OztBQ1pyRTtBQUFBIiwiZmlsZSI6ImRlZmF1bHRqcy10ZW1wbGF0ZS1sYW5ndWFnZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vYnJvd3Nlci5qc1wiKTtcbiIsImltcG9ydCBHTE9CQUwgZnJvbSBcIkBkZWZhdWx0LWpzL2RlZmF1bHRqcy1jb21tb24tdXRpbHMvc3JjL0dsb2JhbC5qc1wiO1xuaW1wb3J0IHtUZW1wbGF0ZSwgUmVuZGVyZXJ9IGZyb20gXCIuL2luZGV4LmpzXCJcblxuR0xPQkFMLmRlZmF1bHRqcyA9IEdMT0JBTC5kZWZhdWx0anMgfHwge307XG5HTE9CQUwuZGVmYXVsdGpzLmpzdGwgPSBHTE9CQUwuZGVmYXVsdGpzLnRsID0gR0xPQkFMLmRlZmF1bHRqcy50bCB8fCB7XG5cdFZFUlNJT04gOiBcIiR7dmVyc2lvbn1cIixcblx0VGVtcGxhdGU6IFRlbXBsYXRlLFxuXHRSZW5kZXJlcjogUmVuZGVyZXJcbn07IiwiaW1wb3J0IFRlbXBsYXRlIGZyb20gXCIuL3NyYy9UZW1wbGF0ZS5qc1wiO1xuaW1wb3J0IFJlbmRlcmVyIGZyb20gXCIuL3NyYy9SZW5kZXJlci5qc1wiO1xuXG5leHBvcnQge1RlbXBsYXRlLCBSZW5kZXJlcn07IiwiY29uc3QgR0xPQkFMID0gKCgpID0+IHtcclxuXHRpZih0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiKSByZXR1cm4gZ2xvYmFsO1xyXG5cdGlmKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIpIHJldHVybiB3aW5kb3c7XHRcclxuXHRpZih0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIikgcmV0dXJuIHNlbGY7XHJcblx0cmV0dXJuIHt9O1xyXG59KSgpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgR0xPQkFMOyIsImlmICghU3RyaW5nLnByb3RvdHlwZS5oYXNoY29kZSlcclxuXHRTdHJpbmcucHJvdG90eXBlLmhhc2hjb2RlID0gZnVuY3Rpb24oKSB7XHJcblx0XHRpZiAodGhpcy5sZW5ndGggPT09IDApXHJcblx0XHRcdHJldHVybiAwO1xyXG5cdFx0XHJcblx0XHRsZXQgaGFzaCA9IDA7XHJcblx0XHRjb25zdCBsZW5ndGggPSB0aGlzLmxlbmd0aDtcclxuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0Y29uc3QgYyA9IHRoaXMuY2hhckNvZGVBdChpKTtcclxuXHRcdFx0aGFzaCA9ICgoaGFzaCA8PCA1KSAtIGhhc2gpICsgYztcclxuXHRcdFx0aGFzaCB8PSAwOyAvLyBDb252ZXJ0IHRvIDMyYml0IGludGVnZXJcclxuXHRcdH1cclxuXHRcdHJldHVybiBoYXNoO1xyXG5cdH07IiwiY29uc3QgR0xPQkFMID0gKCgpID0+IHtcclxuXHRpZih0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiKSByZXR1cm4gZ2xvYmFsO1xyXG5cdGlmKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIpIHJldHVybiB3aW5kb3c7XHRcclxuXHRpZih0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIikgcmV0dXJuIHNlbGY7XHJcblx0cmV0dXJuIHt9O1xyXG59KSgpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgR0xPQkFMOyIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIE9iamVjdFByb3BlcnR5IHtcblx0Y29uc3RydWN0b3Ioa2V5LCBjb250ZXh0KXtcblx0XHR0aGlzLmtleSA9IGtleTtcblx0XHR0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xuXHR9XG5cdFxuXHRnZXQga2V5RGVmaW5lZCgpe1xuXHRcdHJldHVybiB0aGlzLmtleSBpbiB0aGlzLmNvbnRleHQ7IFxuXHR9XG5cdFxuXHRnZXQgaGFzVmFsdWUoKXtcblx0XHRyZXR1cm4gISF0aGlzLmNvbnRleHRbdGhpcy5rZXldO1xuXHR9XG5cdFxuXHRnZXQgdmFsdWUoKXtcblx0XHRyZXR1cm4gdGhpcy5jb250ZXh0W3RoaXMua2V5XTtcblx0fVxuXHRcblx0c2V0IHZhbHVlKGRhdGEpe1xuXHRcdHRoaXMuY29udGV4dFt0aGlzLmtleV0gPSBkYXRhO1xuXHR9XG5cdFxuXHRzZXQgYXBwZW5kKGRhdGEpIHtcblx0XHRpZighdGhpcy5oYXNWYWx1ZSlcblx0XHRcdHRoaXMudmFsdWUgPSBkYXRhO1xuXHRcdGVsc2Uge1xuXHRcdFx0Y29uc3QgdmFsdWUgPSB0aGlzLnZhbHVlO1xuXHRcdFx0aWYodmFsdWUgaW5zdGFuY2VvZiBBcnJheSlcblx0XHRcdFx0dmFsdWUucHVzaChkYXRhKTtcblx0XHRcdGVsc2Vcblx0XHRcdFx0dGhpcy52YWx1ZSA9IFt0aGlzLnZhbHVlLCBkYXRhXTtcblx0XHR9XG5cdH1cblx0XG5cdHJlbW92ZSgpe1xuXHRcdGRlbGV0ZSB0aGlzLmNvbnRleHRbdGhpcy5rZXldO1xuXHR9XG5cdFxuXHRzdGF0aWMgbG9hZChkYXRhLCBrZXksIGNyZWF0ZT10cnVlKSB7XG5cdFx0bGV0IGNvbnRleHQgPSBkYXRhO1xuXHRcdGNvbnN0IGtleXMgPSBrZXkuc3BsaXQoXCJcXC5cIik7XG5cdFx0bGV0IG5hbWUgPSBrZXlzLnNoaWZ0KCkudHJpbSgpO1xuXHRcdHdoaWxlKGtleXMubGVuZ3RoID4gMCl7XG5cdFx0XHRpZighY29udGV4dFtuYW1lXSl7XG5cdFx0XHRcdGlmKCFjcmVhdGUpXG5cdFx0XHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0XHRcdFxuXHRcdFx0XHRjb250ZXh0W25hbWVdID0ge31cblx0XHRcdH1cblx0XHRcdFxuXHRcdFx0Y29udGV4dCA9IGNvbnRleHRbbmFtZV07XG5cdFx0XHRuYW1lID0ga2V5cy5zaGlmdCgpLnRyaW0oKTtcblx0XHR9XG5cdFx0XG5cdFx0cmV0dXJuIG5ldyBPYmplY3RQcm9wZXJ0eShuYW1lLCBjb250ZXh0KTtcblx0fVxufTsiLCJpbXBvcnQgT2JqZWN0UHJvcGVydHkgZnJvbSBcIi4vT2JqZWN0UHJvcGVydHkuanNcIjtcclxuLyoqXHJcbiAqIGFwcGVuZCBhIHByb3BlcnkgdmFsdWUgdG8gYW4gb2JqZWN0LiBJZiBwcm9wZXJ5IGV4aXN0cyBpdHMgd291bGQgYmUgY29udmVydGVkIHRvIGFuIGFycmF5XHJcbiAqIFxyXG4gKiAgQHBhcmFtIGFLZXk6c3RyaW5nIG5hbWUgb2YgcHJvcGVydHlcclxuICogIEBwYXJhbSBhRGF0YTphbnkgcHJvcGVydHkgdmFsdWVcclxuICogIEBwYXJhbSBhT2JqZWN0Om9iamVjdCB0aGUgb2JqZWN0IHRvIGFwcGVuZCB0aGUgcHJvcGVydHlcclxuICogIFxyXG4gKiAgQHJldHVybiByZXR1cm5zIHRoZSBjaGFuZ2VkIG9iamVjdFxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGFwcGVuZCA9IGZ1bmN0aW9uKGFLZXksIGFEYXRhLCBhT2JqZWN0KSB7XHJcblx0aWYgKHR5cGVvZiBhRGF0YSAhPT0gXCJ1bmRlZmluZWRcIikge1xyXG5cdFx0Y29uc3QgcHJvcGVydHkgPSBPYmplY3RQcm9wZXJ0eS5sb2FkKGFPYmplY3QsIGFLZXksIHRydWUpXHJcblx0XHRwcm9wZXJ0eS5hcHBlbmQgPSBhRGF0YTtcclxuXHR9XHJcblx0cmV0dXJuIGFPYmplY3Q7XHJcbn07XHJcblxyXG4vKipcclxuICogY2hlY2tlZCBpZiBhbiBvYmplY3QgYSBzaW1wbGUgb2JqZWN0LiBObyBBcnJheSwgTWFwIG9yIHNvbWV0aGluZyBlbHNlLlxyXG4gKiBcclxuICogQHBhcmFtIGFPYmplY3Q6b2JqZWN0IHRoZSBvYmplY3QgdG8gYmUgdGVzdGluZ1xyXG4gKiBcclxuICogQHJldHVybiBib29sZWFuXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgaXNQb2pvID0gZnVuY3Rpb24oYU9iamVjdCkge1xyXG5cdHJldHVybiB0eXBlb2YgYU9iamVjdCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBhT2JqZWN0ICE9IG51bGwgJiYgYU9iamVjdC5jb25zdHJ1Y3Rvci5uYW1lID09PSBcIk9iamVjdFwiXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBtZXJnaW5nIG9iamVjdCBpbnRvIGEgdGFyZ2V0IG9iamVjdC4gSXRzIG9ubHkgbWVyZ2Ugc2ltcGxlIG9iamVjdCBhbmQgc3ViIG9iamVjdHMuIEV2ZXJ5IG90aGVyIFxyXG4gKiB2YWx1ZSB3b3VsZCBiZSByZXBsYWNlZCBieSB2YWx1ZSBmcm9tIHRoZSBzb3VyY2Ugb2JqZWN0LlxyXG4gKiBcclxuICogc2FtcGxlOiBtZXJnZSh0YXJnZXQsIHNvdXJjZS0xLCBzb3VyY2UtMiwgLi4uc291cmNlLW4pXHJcbiAqIFxyXG4gKiBAcGFyYW0gYVRhcmdldDpvYmplY3QgdGhlIHRhcmdldCBvYmplY3QgdG8gbWVyZ2luZyBpbnRvXHJcbiAqIEBwYXJhbSBhU291cmNlczpvYmplY3RcclxuICogXHJcbiAqIEByZXR1cm4gb2JqZWN0IHJldHVybnMgdGhlIHRhcmdldCBvYmplY3RcclxuICovXHJcbmV4cG9ydCBjb25zdCBtZXJnZSA9IGZ1bmN0aW9uKGFUYXJnZXQpIHtcclxuXHRmb3IgKGxldCBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xyXG5cdFx0Y29uc3Qgc291cmNlID0gYXJndW1lbnRzW2ldO1xyXG5cdFx0T2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoc291cmNlKS5mb3JFYWNoKGFLZXkgPT4ge1xyXG5cdFx0XHRpZiAoaXNQb2pvKGFUYXJnZXRbYUtleV0pKVxyXG5cdFx0XHRcdG1lcmdlKGFUYXJnZXRbYUtleV0sIHNvdXJjZVthS2V5XSk7XHJcblx0XHRcdGVsc2VcclxuXHRcdFx0XHRhVGFyZ2V0W2FLZXldID0gc291cmNlW2FLZXldO1xyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHRyZXR1cm4gYVRhcmdldDtcclxufVxyXG5cclxuXHJcblxyXG5jb25zdCBidWlsZFByb3BlcnR5RmlsdGVyID0gZnVuY3Rpb24oeyBuYW1lcywgYWxsb3dlZCB9KSB7XHJcblx0cmV0dXJuIChuYW1lLCB2YWx1ZSwgY29udGV4dCkgPT4ge1xyXG5cdFx0cmV0dXJuIG5hbWVzLmluY2x1ZGVzKG5hbWUpID09PSBhbGxvd2VkO1xyXG5cdH1cclxufTtcclxuXHJcblxyXG5leHBvcnQgY29uc3QgZmlsdGVyID0gZnVuY3Rpb24oKSB7XHJcblx0Y29uc3QgW2RhdGEsIHByb3BGaWx0ZXIsIHtkZWVwID0gZmFsc2UsIHJlY3Vyc2l2ZSA9IHRydWUsIHBhcmVudHMgPSBbXX0gPSB7fV0gPSBhcmd1bWVudHM7XHJcblx0Y29uc3QgcmVzdWx0ID0ge307XHJcblxyXG5cdGZvciAobmFtZSBpbiBkYXRhKSB7XHJcblx0XHRjb25zdCB2YWx1ZSA9IGRhdGFbbmFtZV07XHJcblx0XHRjb25zdCBhY2NlcHQgPSBwcm9wRmlsdGVyKG5hbWUsIHZhbHVlLCBkYXRhKTtcclxuXHRcdGlmIChhY2NlcHQgJiYgKCFkZWVwIHx8IHZhbHVlID09PSBudWxsIHx8IHZhbHVlID09PSB1bmRlZmluZWQpKVxyXG5cdFx0XHRyZXN1bHRbbmFtZV0gPSB2YWx1ZTtcclxuXHRcdGVsc2UgaWYgKGFjY2VwdCAmJiBkZWVwKSB7XHJcblx0XHRcdGNvbnN0IHR5cGUgPSB0eXBlb2YgdmFsdWU7XHJcblx0XHRcdGlmICh0eXBlICE9PSBcIm9iamVjdFwiXHJcblx0XHRcdFx0fHwgdmFsdWUgaW5zdGFuY2VvZiBBcnJheVxyXG5cdFx0XHRcdHx8IHZhbHVlIGluc3RhbmNlb2YgTWFwXHJcblx0XHRcdFx0fHwgdmFsdWUgaW5zdGFuY2VvZiBTZXRcclxuXHRcdFx0XHR8fCB2YWx1ZSBpbnN0YW5jZW9mIFJlZ0V4cFxyXG5cdFx0XHRcdHx8IHBhcmVudHMuaW5jbHVkZXNbdmFsdWVdXHJcblx0XHRcdFx0fHwgdmFsdWUgPT0gZGF0YSlcclxuXHRcdFx0XHRyZXN1bHRbbmFtZV0gPSB2YWx1ZTtcclxuXHRcdFx0ZWxzZVxyXG5cdFx0XHRcdHJlc3VsdFtuYW1lXSA9IGZpbHRlcih2YWx1ZSwgcHJvcEZpbHRlciwge2RlZXAsIHJlY3Vyc2l2ZSwgcGFyZW50czogIHBhcmVudHMuY29uY2F0KGRhdGEpfSk7XHJcblx0XHR9XHJcblxyXG5cdH1cclxuXHJcblx0cmV0dXJuIHJlc3VsdDtcclxufTtcclxuXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG5cdGlzUG9qbyxcclxuXHRhcHBlbmQsXHJcblx0bWVyZ2UsXHJcblx0ZmlsdGVyLFxyXG5cdGJ1aWxkUHJvcGVydHlGaWx0ZXJcclxufTsiLCJjb25zdCBzZWVrQXRDaGFpbiA9IChyZXNvbHZlciwgcHJvcGVydHkpID0+IHtcblx0d2hpbGUocmVzb2x2ZXIpe1xuXHRcdGNvbnN0IGRlZiA9IHJlc29sdmVyLnByb3h5LmhhbmRsZS5nZXRQcm9wZXJ0eURlZihwcm9wZXJ0eSwgZmFsc2UpO1xuXHRcdGlmKGRlZilcblx0XHRcdHJldHVybiBkZWY7XG5cdFx0XG5cdFx0cmVzb2x2ZXIgPSByZXNvbHZlci5wYXJlbnQ7XG5cdH1cdFxuXHRyZXR1cm4geyBkYXRhOiBudWxsLCByZXNvbHZlcjogbnVsbCwgZGVmaW5lZDogZmFsc2UgfTtcbn1cblxuY2xhc3MgSGFuZGxlIHtcblx0Y29uc3RydWN0b3IoZGF0YSwgcmVzb2x2ZXIpIHtcblx0XHR0aGlzLmRhdGEgPSBkYXRhO1xuXHRcdHRoaXMucmVzb2x2ZXIgPSByZXNvbHZlcjtcblx0XHR0aGlzLmNhY2hlID0gbmV3IE1hcCgpO1xuXHR9XG5cdFxuXHR1cGRhdGVEYXRhKGRhdGEpe1xuXHRcdHRoaXMuZGF0YSA9IGRhdGE7XG5cdFx0dGhpcy5jYWNoZSA9IG5ldyBNYXAoKTtcblx0fVxuXHRcblx0cmVzZXRDYWNoZSgpe1xuXHRcdHRoaXMuY2FjaGUgPSBuZXcgTWFwKCk7XG5cdH1cblxuXHRnZXRQcm9wZXJ0eURlZihwcm9wZXJ0eSwgc2VlayA9IHRydWUpIHtcblx0XHRpZiAodGhpcy5jYWNoZS5oYXMocHJvcGVydHkpKVxuXHRcdFx0cmV0dXJuIHRoaXMuY2FjaGUuZ2V0KHByb3BlcnR5KTtcblx0XHRcblx0XHRsZXQgZGVmID0gbnVsbFxuXHRcdGlmICh0aGlzLmRhdGEgJiYgcHJvcGVydHkgaW4gdGhpcy5kYXRhKVxuXHRcdFx0ZGVmID0geyBkYXRhOiB0aGlzLmRhdGEsIHJlc29sdmVyOiB0aGlzLnJlc29sdmVyLCBkZWZpbmVkOiB0cnVlIH07XG5cdFx0ZWxzZSBpZihzZWVrKVxuXHRcdFx0ZGVmID0gc2Vla0F0Q2hhaW4odGhpcy5yZXNvbHZlci5wYXJlbnQsIHByb3BlcnR5KTtcblx0XHRlbHNlXG5cdFx0XHRyZXR1cm4gbnVsbDtcblx0XHRpZihkZWYuZGVmaW5lZClcblx0XHRcdHRoaXMuY2FjaGUuc2V0KHByb3BlcnR5LCBkZWYpO1xuXHRcdHJldHVybiBkZWY7XG5cdH1cblxuXHRoYXNQcm9wZXJ0eShwcm9wZXJ0eSkge1xuXHRcdC8vQFRPRE8gd3JpdGUgdGVzdHMhISFcblx0XHRjb25zdCB7IGRlZmluZWQgfSA9IHRoaXMuZ2V0UHJvcGVydHlEZWYocHJvcGVydHkpO1xuXHRcdHJldHVybiBkZWZpbmVkO1xuXHR9XG5cdGdldFByb3BlcnR5KHByb3BlcnR5KSB7XG5cdFx0Ly9AVE9ETyB3cml0ZSB0ZXN0cyEhIVx0XG5cdFx0Y29uc3QgeyBkYXRhIH0gPSB0aGlzLmdldFByb3BlcnR5RGVmKHByb3BlcnR5KTtcblx0XHRyZXR1cm4gZGF0YSA/IGRhdGFbcHJvcGVydHldIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldFByb3BlcnR5KHByb3BlcnR5LCB2YWx1ZSkge1xuXHRcdC8vQFRPRE8gd291bGQgc3VwcG9ydCB0aGlzIGFjdGlvbiBvbiBhbiBwcm94aWVkIHJlc29sdmVyIGNvbnRleHQ/Pz8gd3JpdGUgdGVzdHMhISFcblx0XHRjb25zdCB7IGRhdGEsIGRlZmluZWQgfSA9IHRoaXMuZ2V0UHJvcGVydHlEZWYocHJvcGVydHkpO1xuXHRcdGlmIChkZWZpbmVkKVxuXHRcdFx0ZGF0YVtwcm9wZXJ0eV0gPSB2YWx1ZTtcblx0XHRlbHNlIHtcblx0XHRcdGlmICh0aGlzLmRhdGEpXG5cdFx0XHRcdHRoaXMuZGF0YVtwcm9wZXJ0eV0gPSB2YWx1ZTtcblx0XHRcdGVsc2Uge1xuXHRcdFx0XHR0aGlzLmRhdGEgPSB7fVxuXHRcdFx0XHR0aGlzLmRhdGFbcHJvcGVydHldID0gdmFsdWU7XG5cdFx0XHR9XG5cdFx0XHR0aGlzLmNhY2hlLnNldChwcm9wZXJ0eSwgeyBkYXRhOiB0aGlzLmRhdGEsIHJlc29sdmVyOiB0aGlzLnJlc29sdmVyLCBkZWZpbmVkOiB0cnVlIH0pO1xuXHRcdH1cblx0fVxuXHRkZWxldGVQcm9wZXJ0eShwcm9wZXJ0eSkge1xuXHRcdC8vQFRPRE8gd291bGQgc3VwcG9ydCB0aGlzIGFjdGlvbiBvbiBhbiBwcm94aWVkIHJlc29sdmVyIGNvbnRleHQ/Pz8gd3JpdGUgdGVzdHMhISFcdFx0XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwidW5zdXBwb3J0ZWQgZnVuY3Rpb24hXCIpXG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29udGV4dCB7XG5cdGNvbnN0cnVjdG9yKGNvbnRleHQsIHJlc29sdmVyKSB7XG5cdFx0dGhpcy5oYW5kbGUgPSBuZXcgSGFuZGxlKGNvbnRleHQsIHJlc29sdmVyKTtcdFx0XG5cdFx0dGhpcy5kYXRhID0gbmV3IFByb3h5KHRoaXMuaGFuZGxlLCB7XG5cdFx0XHRoYXM6IGZ1bmN0aW9uKGRhdGEsIHByb3BlcnR5KSB7XG5cdFx0XHRcdHJldHVybiBkYXRhLmhhc1Byb3BlcnR5KHByb3BlcnR5KTtcblx0XHRcdH0sXG5cdFx0XHRnZXQ6IGZ1bmN0aW9uKGRhdGEsIHByb3BlcnR5KSB7XG5cdFx0XHRcdHJldHVybiBkYXRhLmdldFByb3BlcnR5KHByb3BlcnR5KTtcblx0XHRcdH0sXG5cdFx0XHRzZXQ6IGZ1bmN0aW9uKGRhdGEsIHByb3BlcnR5LCB2YWx1ZSkge1xuXHRcdFx0XHRyZXR1cm4gZGF0YS5zZXRQcm9wZXJ0eShwcm9wZXJ0eSwgdmFsdWUpO1xuXHRcdFx0fSxcblx0XHRcdGRlbGV0ZVByb3BlcnR5OiBmdW5jdGlvbihkYXRhLCBwcm9wZXJ0eSkge1xuXHRcdFx0XHRyZXR1cm4gZGF0YS5kZWxldGVQcm9wZXJ0eShwcm9wZXJ0eSk7XG5cdFx0XHR9XG5cdFx0XHQvL0BUT0RPIG5lZWQgdG8gc3VwcG9ydCB0aGUgb3RoZXIgcHJveHkgYWN0aW9uc1x0XHRcblx0XHR9KTs7XG5cdH1cblx0XG5cdHVwZGF0ZURhdGEoZGF0YSl7XG5cdFx0dGhpcy5oYW5kbGUudXBkYXRlRGF0YShkYXRhKVx0XHRcblx0fVxuXHRcblx0cmVzZXRDYWNoZSgpe1xuXHRcdHRoaXMuaGFuZGxlLnJlc2V0Q2FjaGUoKTtcblx0fVxufTsiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBEZWZhdWx0VmFsdWUge1xuXHRjb25zdHJ1Y3Rvcih2YWx1ZSl7XG5cdFx0dGhpcy5oYXNWYWx1ZSA9IGFyZ3VtZW50cy5sZW5ndGggPT0gMTtcblx0XHR0aGlzLnZhbHVlID0gdmFsdWU7XG5cdH1cdFxufTsiLCJpbXBvcnQgR0xPQkFMIGZyb20gXCJAZGVmYXVsdC1qcy9kZWZhdWx0anMtY29tbW9uLXV0aWxzL3NyYy9HbG9iYWwuanNcIlxyXG5pbXBvcnQgT2JqZWN0UHJvcGVydHkgZnJvbSBcIkBkZWZhdWx0LWpzL2RlZmF1bHRqcy1jb21tb24tdXRpbHMvc3JjL09iamVjdFByb3BlcnR5LmpzXCI7XHJcbmltcG9ydCBPYmplY3RVdGlscyBmcm9tIFwiQGRlZmF1bHQtanMvZGVmYXVsdGpzLWNvbW1vbi11dGlscy9zcmMvT2JqZWN0VXRpbHMuanNcIlxyXG5pbXBvcnQgRGVmYXVsdFZhbHVlIGZyb20gXCIuL0RlZmF1bHRWYWx1ZS5qc1wiO1xyXG5pbXBvcnQgQ29udGV4dCBmcm9tIFwiLi9Db250ZXh0LmpzXCI7XHJcblxyXG5cclxuY29uc3QgRVhFQ1VUSU9OX1dBUk5fVElNRU9VVCA9IDEwMDA7XHJcbmNvbnN0IEVYUFJFU1NJT04gPSAvKFxcXFw/KShcXCRcXHsoKFthLXpBLVowLTlcXC1fXFxzXSspOjopPyhbXlxce1xcfV0rKVxcfSkvO1xyXG5jb25zdCBNQVRDSF9FU0NBUEVEID0gMTtcclxuY29uc3QgTUFUQ0hfRlVMTF9FWFBSRVNTSU9OID0gMjtcclxuY29uc3QgTUFUQ0hfRVhQUkVTU0lPTl9TQ09QRSA9IDQ7XHJcbmNvbnN0IE1BVENIX0VYUFJFU1NJT05fU1RBVEVNRU5UID0gNTtcclxuXHJcbmNvbnN0IERFRkFVTFRfTk9UX0RFRklORUQgPSBuZXcgRGVmYXVsdFZhbHVlKCk7XHJcbmNvbnN0IHRvRGVmYXVsdFZhbHVlID0gdmFsdWUgPT4ge1xyXG5cdGlmICh2YWx1ZSBpbnN0YW5jZW9mIERlZmF1bHRWYWx1ZSlcclxuXHRcdHJldHVybiB2YWx1ZTtcclxuXHJcblx0cmV0dXJuIG5ldyBEZWZhdWx0VmFsdWUodmFsdWUpO1xyXG59O1xyXG5cclxuY29uc3QgZXhlY3V0ZSA9IGFzeW5jIGZ1bmN0aW9uKGFTdGF0ZW1lbnQsIGFDb250ZXh0KSB7XHJcblx0aWYgKHR5cGVvZiBhU3RhdGVtZW50ICE9PSBcInN0cmluZ1wiKVxyXG5cdFx0cmV0dXJuIGFTdGF0ZW1lbnQ7XHJcblx0XHRcclxuXHRjb25zdCBleHByZXNzaW9uID0gbmV3IEZ1bmN0aW9uKFwiY29udGV4dFwiLCBcclxuYFxyXG5yZXR1cm4gKGFzeW5jIChjb250ZXh0KSA9PiB7XHJcblx0dHJ5eyBcclxuXHRcdHdpdGgoY29udGV4dCl7XHJcblx0XHRcdCByZXR1cm4gJHthU3RhdGVtZW50fVxyXG5cdFx0fVxyXG5cdH1jYXRjaChlKXtcclxuXHRcdHRocm93IGU7XHJcblx0fVxyXG59KShjb250ZXh0KWBcclxuXHQpO1xyXG5cdFxyXG5cdGxldCB0aW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XHJcblx0XHR0aW1lb3V0ID0gbnVsbDtcclxuXHRcdGNvbnNvbGUud2FybihcImxvbmcgcnVubmluZyBzdGF0ZW1lbnQ6XCIsIGFTdGF0ZW1lbnQsIG5ldyBFcnJvcigpKTtcclxuXHR9LCBFWEVDVVRJT05fV0FSTl9USU1FT1VUKVxyXG5cdGxldCByZXN1bHQgPSB1bmRlZmluZWQ7XHJcblx0dHJ5e1xyXG5cdFx0cmVzdWx0ID0gYXdhaXQgZXhwcmVzc2lvbihhQ29udGV4dCk7XHJcblx0fWNhdGNoKGUpe31cclxuXHRcclxuXHRpZih0aW1lb3V0KVxyXG5cdFx0Y2xlYXJUaW1lb3V0KHRpbWVvdXQpXHJcblx0cmV0dXJuIHJlc3VsdDtcclxufTtcclxuXHJcbmNvbnN0IHJlc29sdmUgPSBhc3luYyBmdW5jdGlvbihhUmVzb2x2ZXIsIGFFeHByZXNzaW9uLCBhRmlsdGVyLCBhRGVmYXVsdCkge1xyXG5cdGlmIChhRmlsdGVyICYmIGFSZXNvbHZlci5uYW1lICE9IGFGaWx0ZXIpXHJcblx0XHRyZXR1cm4gYVJlc29sdmVyLnBhcmVudCA/IHJlc29sdmUoYVJlc29sdmVyLnBhcmVudCwgYUV4cHJlc3Npb24sIGFGaWx0ZXIsIGFEZWZhdWx0KSA6IG51bGw7XHJcblx0XHJcblx0Y29uc3QgcmVzdWx0ID0gYXdhaXQgZXhlY3V0ZShhRXhwcmVzc2lvbiwgYVJlc29sdmVyLnByb3h5LmRhdGEpO1xyXG5cdGlmIChyZXN1bHQgIT09IG51bGwgJiYgdHlwZW9mIHJlc3VsdCAhPT0gXCJ1bmRlZmluZWRcIilcclxuXHRcdHJldHVybiByZXN1bHQ7XHJcblxyXG5cdGVsc2UgaWYgKGFEZWZhdWx0IGluc3RhbmNlb2YgRGVmYXVsdFZhbHVlICYmIGFEZWZhdWx0Lmhhc1ZhbHVlKVxyXG5cdFx0cmV0dXJuIGFEZWZhdWx0LnZhbHVlO1xyXG59O1xyXG5cclxuY29uc3QgcmVzb2x2ZU1hdGNoID0gYXN5bmMgKHJlc29sdmVyLCBtYXRjaCwgZGVmYXVsdFZhbHVlKSA9PiB7XHJcblx0aWYobWF0Y2hbTUFUQ0hfRVNDQVBFRF0pXHJcblx0XHRyZXR1cm4gbWF0Y2hbTUFUQ0hfRlVMTF9FWFBSRVNTSU9OXTsgXHJcblx0XHRcclxuXHRyZXR1cm4gcmVzb2x2ZShyZXNvbHZlciwgbWF0Y2hbTUFUQ0hfRVhQUkVTU0lPTl9TVEFURU1FTlRdLCBub3JtYWxpemUobWF0Y2hbTUFUQ0hfRVhQUkVTU0lPTl9TQ09QRV0pLCBkZWZhdWx0VmFsdWUpO1xyXG59XHJcblxyXG5jb25zdCBub3JtYWxpemUgPSB2YWx1ZSA9PiB7XHJcblx0aWYgKHZhbHVlKSB7XHJcblx0XHR2YWx1ZSA9IHZhbHVlLnRyaW0oKTtcclxuXHRcdHJldHVybiB2YWx1ZS5sZW5ndGggPT0gMCA/IG51bGwgOiB2YWx1ZTtcclxuXHR9XHJcblx0cmV0dXJuIG51bGw7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFeHByZXNzaW9uUmVzb2x2ZXIge1xyXG5cdGNvbnN0cnVjdG9yKHsgY29udGV4dCA9IEdMT0JBTCwgcGFyZW50ID0gbnVsbCwgbmFtZSA9IG51bGwgfSkge1xyXG5cdFx0dGhpcy5wYXJlbnQgPSAocGFyZW50IGluc3RhbmNlb2YgRXhwcmVzc2lvblJlc29sdmVyKSA/IHBhcmVudCA6IG51bGw7XHJcblx0XHR0aGlzLm5hbWUgPSBuYW1lO1xyXG5cdFx0dGhpcy5jb250ZXh0ID0gY29udGV4dDtcclxuXHRcdHRoaXMucHJveHkgPSBuZXcgQ29udGV4dCh0aGlzLmNvbnRleHQsIHRoaXMpO1xyXG5cdH1cclxuXHJcblx0Z2V0IGNoYWluKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMucGFyZW50ID8gdGhpcy5wYXJlbnQuY2hhaW4gKyBcIi9cIiArIHRoaXMubmFtZSA6IFwiL1wiICsgdGhpcy5uYW1lO1xyXG5cdH1cclxuXHJcblx0Z2V0IGVmZmVjdGl2ZUNoYWluKCkge1xyXG5cdFx0aWYgKCF0aGlzLmNvbnRleHQpXHJcblx0XHRcdHJldHVybiB0aGlzLnBhcmVudCA/IHRoaXMucGFyZW50LmVmZmVjdGl2ZUNoYWluIDogXCJcIjtcclxuXHRcdHJldHVybiB0aGlzLnBhcmVudCA/IHRoaXMucGFyZW50LmVmZmVjdGl2ZUNoYWluICsgXCIvXCIgKyB0aGlzLm5hbWUgOiBcIi9cIiArIHRoaXMubmFtZTtcclxuXHR9XHJcblxyXG5cdGdldCBjb250ZXh0Q2hhaW4oKSB7XHJcblx0XHRjb25zdCByZXN1bHQgPSBbXTtcclxuXHRcdGxldCByZXNvbHZlciA9IHRoaXM7XHJcblx0XHR3aGlsZSAocmVzb2x2ZXIpIHtcclxuXHRcdFx0aWYgKHJlc29sdmVyLmNvbnRleHQpXHJcblx0XHRcdFx0cmVzdWx0LnB1c2gocmVzb2x2ZXIuY29udGV4dCk7XHJcblxyXG5cdFx0XHRyZXNvbHZlciA9IHJlc29sdmVyLnBhcmVudDtcclxuXHRcdH1cclxuXHJcblx0XHRyZXR1cm4gcmVzdWx0O1xyXG5cdH1cclxuXHJcblx0Z2V0RGF0YShrZXksIGZpbHRlcikge1xyXG5cdFx0aWYgKCFrZXkpXHJcblx0XHRcdHJldHVybjtcclxuXHRcdGVsc2UgaWYgKGZpbHRlciAmJiBmaWx0ZXIgIT0gdGhpcy5uYW1lKSB7XHJcblx0XHRcdGlmICh0aGlzLnBhcmVudClcclxuXHRcdFx0XHR0aGlzLnBhcmVudC5nZXREYXRhKGtleSwgZmlsdGVyKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGNvbnN0IHByb3BlcnR5ID0gT2JqZWN0UHJvcGVydHkubG9hZCh0aGlzLmNvbnRleHQsIGtleSwgZmFsc2UpO1xyXG5cdFx0XHRyZXR1cm4gcHJvcGVydHkgPyBwcm9wZXJ0eS52YWx1ZSA6IG51bGw7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHR1cGRhdGVEYXRhKGtleSwgdmFsdWUsIGZpbHRlcikge1xyXG5cdFx0aWYgKCFrZXkpXHJcblx0XHRcdHJldHVybjtcclxuXHRcdGVsc2UgaWYgKGZpbHRlciAmJiBmaWx0ZXIgIT0gdGhpcy5uYW1lKSB7XHJcblx0XHRcdGlmICh0aGlzLnBhcmVudClcclxuXHRcdFx0XHR0aGlzLnBhcmVudC51cGRhdGVEYXRhKGtleSwgdmFsdWUsIGZpbHRlcik7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRpZih0aGlzLmNvbnRleHQgPT0gbnVsbCB8fCB0eXBlb2YgdGhpcy5jb250ZXh0ID09PSBcInVuZGVmaW5lZFwiKXtcclxuXHRcdFx0XHR0aGlzLmNvbnRleHQgPSB7fTtcdFx0XHRcdFxyXG5cdFx0XHRcdHRoaXMucHJveHkudXBkYXRlRGF0YSh0aGlzLmNvbnRleHQpO1xyXG5cdFx0XHR9XHJcblx0XHRcdGNvbnN0IHByb3BlcnR5ID0gT2JqZWN0UHJvcGVydHkubG9hZCh0aGlzLmNvbnRleHQsIGtleSk7XHJcblx0XHRcdHByb3BlcnR5LnZhbHVlID0gdmFsdWU7XHJcblx0XHRcdHRoaXMucHJveHkucmVzZXRDYWNoZSgpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0bWVyZ2VDb250ZXh0KGNvbnRleHQsIGZpbHRlcikge1xyXG5cdFx0aWYgKGZpbHRlciAmJiBmaWx0ZXIgIT0gdGhpcy5uYW1lKSB7XHJcblx0XHRcdGlmICh0aGlzLnBhcmVudClcclxuXHRcdFx0XHR0aGlzLnBhcmVudC5tZXJnZUNvbnRleHQoY29udGV4dCwgZmlsdGVyKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHRoaXMuY29udGV4dCA9IHRoaXMuY29udGV4dCA/IE9iamVjdFV0aWxzLm1lcmdlKHRoaXMuY29udGV4dCwgY29udGV4dCkgOiBjb250ZXh0O1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0YXN5bmMgcmVzb2x2ZShhRXhwcmVzc2lvbiwgYURlZmF1bHQpIHtcclxuXHRcdGNvbnN0IGRlZmF1bHRWYWx1ZSA9IGFyZ3VtZW50cy5sZW5ndGggPT0gMiA/IHRvRGVmYXVsdFZhbHVlKGFEZWZhdWx0KSA6IERFRkFVTFRfTk9UX0RFRklORUQ7XHJcblx0XHR0cnkge1xyXG5cdFx0XHRjb25zdCBtYXRjaCA9IEVYUFJFU1NJT04uZXhlYyhhRXhwcmVzc2lvbik7XHJcblx0XHRcdGlmIChtYXRjaClcclxuXHRcdFx0XHRyZXR1cm4gYXdhaXQgcmVzb2x2ZU1hdGNoKHRoaXMsIG1hdGNoLCBkZWZhdWx0VmFsdWUpO1xyXG5cdFx0XHRlbHNlXHJcblx0XHRcdFx0cmV0dXJuIGF3YWl0IHJlc29sdmUodGhpcywgbm9ybWFsaXplKGFFeHByZXNzaW9uKSwgbnVsbCwgZGVmYXVsdFZhbHVlKTtcclxuXHRcdH0gY2F0Y2ggKGUpIHtcclxuXHRcdFx0Y29uc29sZS5lcnJvcihcImVycm9yIGF0IGV4ZWN1dGluZyBzdGF0bWVudFxcXCJcIiwgYUV4cHJlc3Npb24sIFwiXFxcIjpcIiwgZSk7XHJcblx0XHRcdHJldHVybiBkZWZhdWx0VmFsdWUuaGFzVmFsdWUgPyBkZWZhdWx0VmFsdWUudmFsdWUgOiBhRXhwcmVzc2lvbjtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGFzeW5jIHJlc29sdmVUZXh0KGFUZXh0LCBhRGVmYXVsdCkge1xyXG5cdFx0bGV0IHRleHQgPSBhVGV4dDtcclxuXHRcdGxldCB0ZW1wID0gYVRleHQ7IC8vIHJlcXVpcmVkIHRvIHByZXZlbnQgaW5maW5pdHkgbG9vcFxyXG5cdFx0bGV0IG1hdGNoID0gRVhQUkVTU0lPTi5leGVjKHRleHQpO1xyXG5cdFx0Y29uc3QgZGVmYXVsdFZhbHVlID0gYXJndW1lbnRzLmxlbmd0aCA9PSAyID8gdG9EZWZhdWx0VmFsdWUoYURlZmF1bHQpIDogREVGQVVMVF9OT1RfREVGSU5FRFxyXG5cdFx0d2hpbGUgKG1hdGNoICE9IG51bGwpIHtcclxuXHRcdFx0Y29uc3QgcmVzdWx0ID0gYXdhaXQgcmVzb2x2ZU1hdGNoKHRoaXMsIG1hdGNoLCBkZWZhdWx0VmFsdWUpO1xyXG5cdFx0XHR0ZW1wID0gdGVtcC5zcGxpdChtYXRjaFswXSkuam9pbigpOyAvLyByZW1vdmUgY3VycmVudCBtYXRjaCBmb3IgbmV4dCBsb29wXHJcblx0XHRcdHRleHQgPSB0ZXh0LnNwbGl0KG1hdGNoWzBdKS5qb2luKHR5cGVvZiByZXN1bHQgPT09IFwidW5kZWZpbmVkXCIgPyBcInVuZGVmaW5lZFwiIDogKHJlc3VsdCA9PSBudWxsID8gXCJudWxsXCIgOiByZXN1bHQpKTtcclxuXHRcdFx0bWF0Y2ggPSBFWFBSRVNTSU9OLmV4ZWModGVtcCk7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gdGV4dDtcclxuXHR9XHJcblxyXG5cdHN0YXRpYyBhc3luYyByZXNvbHZlKGFFeHByZXNzaW9uLCBhQ29udGV4dCwgYURlZmF1bHQsIGFUaW1lb3V0KSB7XHJcblx0XHRjb25zdCByZXNvbHZlciA9IG5ldyBFeHByZXNzaW9uUmVzb2x2ZXIoeyBjb250ZXh0OiBhQ29udGV4dCB9KTtcclxuXHRcdGNvbnN0IGRlZmF1bHRWYWx1ZSA9IGFyZ3VtZW50cy5sZW5ndGggPiAyID8gdG9EZWZhdWx0VmFsdWUoYURlZmF1bHQpIDogREVGQVVMVF9OT1RfREVGSU5FRDtcclxuXHRcdGlmICh0eXBlb2YgYVRpbWVvdXQgPT09IFwibnVtYmVyXCIgJiYgYVRpbWVvdXQgPiAwKVxyXG5cdFx0XHRyZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XHJcblx0XHRcdFx0c2V0VGltZW91dCgoKSA9PiB7XHJcblx0XHRcdFx0XHRyZXNvbHZlKHJlc29sdmVyLnJlc29sdmUoYUV4cHJlc3Npb24sIGRlZmF1bHRWYWx1ZSkpO1xyXG5cdFx0XHRcdH0sIGFUaW1lb3V0KTtcclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0cmV0dXJuIHJlc29sdmVyLnJlc29sdmUoYUV4cHJlc3Npb24sIGRlZmF1bHRWYWx1ZSlcclxuXHR9XHJcblxyXG5cdHN0YXRpYyBhc3luYyByZXNvbHZlVGV4dChhVGV4dCwgYUNvbnRleHQsIGFEZWZhdWx0LCBhVGltZW91dCkge1xyXG5cdFx0Y29uc3QgcmVzb2x2ZXIgPSBuZXcgRXhwcmVzc2lvblJlc29sdmVyKHsgY29udGV4dDogYUNvbnRleHQgfSk7XHJcblx0XHRjb25zdCBkZWZhdWx0VmFsdWUgPSBhcmd1bWVudHMubGVuZ3RoID4gMiA/IHRvRGVmYXVsdFZhbHVlKGFEZWZhdWx0KSA6IERFRkFVTFRfTk9UX0RFRklORUQ7XHJcblx0XHRpZiAodHlwZW9mIGFUaW1lb3V0ID09PSBcIm51bWJlclwiICYmIGFUaW1lb3V0ID4gMClcclxuXHRcdFx0cmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xyXG5cdFx0XHRcdHNldFRpbWVvdXQoKCkgPT4ge1xyXG5cdFx0XHRcdFx0cmVzb2x2ZShyZXNvbHZlci5yZXNvbHZlVGV4dChhVGV4dCwgZGVmYXVsdFZhbHVlKSk7XHJcblx0XHRcdFx0fSwgYVRpbWVvdXQpO1xyXG5cdFx0XHR9KTtcclxuXHJcblx0XHRyZXR1cm4gcmVzb2x2ZXIucmVzb2x2ZVRleHQoYVRleHQsIGRlZmF1bHRWYWx1ZSk7XHJcblx0fVxyXG5cdFxyXG5cdHN0YXRpYyBidWlsZFNlY3VyZSh7Y29udGV4dCwgcHJvcEZpbHRlciwgb3B0aW9uPXtkZWVwOnRydWV9LCBuYW1lLCBwYXJlbnR9KXtcclxuXHRcdGNvbnRleHQgPSBPYmplY3RVdGlscy5maWx0ZXIoe2RhdGE6IGNvbnRleHQsIHByb3BGaWx0ZXIsIG9wdGlvbn0pO1xyXG5cdFx0cmV0dXJuIG5ldyBFeHByZXNzaW9uUmVzb2x2ZXIoe2NvbnRleHQsIG5hbWUsIHBhcmVudH0pO1xyXG5cdH1cclxufTsiLCJpbXBvcnQgXCIuL3NyYy9pbmRleFwiOyIsImltcG9ydCBVdGlscyBmcm9tIFwiLi91dGlscy9VdGlsc1wiO1xyXG5cclxuVXRpbHMuZ2xvYmFsLmRlZmF1bHRqcyA9IFV0aWxzLmdsb2JhbC5kZWZhdWx0anMgfHwge307XHJcblV0aWxzLmdsb2JhbC5kZWZhdWx0anMuZXh0ZG9tID0gVXRpbHMuZ2xvYmFsLmRlZmF1bHRqcy5leHRkb20gfHwge1xyXG5cdFZFUlNJT04gOiBcIiR7dmVyc2lvbn1cIixcclxuXHR1dGlscyA6IHtcclxuXHRcdFV0aWxzOiBVdGlsc1xyXG5cdH1cclxufTtcclxuXHJcblV0aWxzLmdsb2JhbC5maW5kID0gZnVuY3Rpb24oKSB7XHJcblx0cmV0dXJuIGRvY3VtZW50LmZpbmQuYXBwbHkoZG9jdW1lbnQsIGFyZ3VtZW50cyk7XHJcbn07XHJcblxyXG5VdGlscy5nbG9iYWwucmVhZHkgPSBmdW5jdGlvbigpIHtcclxuXHRyZXR1cm4gZG9jdW1lbnQucmVhZHkuYXBwbHkoZG9jdW1lbnQsIGFyZ3VtZW50cyk7XHJcbn07XHJcblxyXG5VdGlscy5nbG9iYWwuY3JlYXRlID0gZnVuY3Rpb24oYUNvbnRlbnQsIGFzVGVtcGxhdGUpIHtcclxuXHRpZiAodHlwZW9mIGFyZ3VtZW50c1swXSAhPT0gXCJzdHJpbmdcIilcclxuXHRcdHRocm93IG5ldyBFcnJvcihcIlRoZSBmaXJzdCBhcmd1bWVudCBtdXN0IGJlIGEgc3RyaW5nIVwiKTtcclxuXHRcclxuXHRjb25zdCB0ZW1wbGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZW1wbGF0ZVwiKTtcclxuXHR0ZW1wbGF0ZS5pbm5lckhUTUwgPSBhQ29udGVudDtcclxuXHRpZihhc1RlbXBsYXRlKVxyXG5cdFx0cmV0dXJuIHRlbXBsYXRlO1xyXG5cdFxyXG5cdHJldHVybiBkb2N1bWVudC5pbXBvcnROb2RlKHRlbXBsYXRlLmNvbnRlbnQsIHRydWUpLmNoaWxkTm9kZXM7XHJcbn07XHJcblxyXG5VdGlscy5nbG9iYWwuc2NyaXB0ID0gZnVuY3Rpb24oYUZpbGUsIGFUYXJnZXQpIHtcclxuXHRpZihhRmlsZSBpbnN0YW5jZW9mIEFycmF5KVxyXG5cdFx0cmV0dXJuIFByb21pc2UuYWxsKGFGaWxlLm1hcChmaWxlID0+IFV0aWxzLmdsb2JhbC5zY3JpcHQoZmlsZSwgYVRhcmdldCkpKTtcclxuXHRcclxuXHRpZih0eXBlb2YgYUZpbGUgPT09IFwic3RyaW5nXCIpXHRcclxuXHRcdHJldHVybiBuZXcgUHJvbWlzZSgocixlKSA9PiB7XHJcblx0XHRcdGNvbnN0IHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIik7XHJcblx0XHRcdHNjcmlwdC5hc3luYyA9IHRydWU7XHJcblx0XHRcdHNjcmlwdC5vbmxvYWQgPSBmdW5jdGlvbigpe3IoKX07XHJcblx0XHRcdHNjcmlwdC5vbmVycm9yID0gZnVuY3Rpb24oKXt0aHJvdyBuZXcgRXJyb3IoXCJsb2FkIGVycm9yIVwiKX07XHJcblx0XHRcdCFhVGFyZ2V0ID8gZG9jdW1lbnQuYm9keS5hcHBlbmQoc2NyaXB0KSA6IGFUYXJnZXQuYXBwZW5kKHNjcmlwdCk7XHJcblx0XHRcdHNjcmlwdC5zcmMgPSBhRmlsZTtcclxuXHRcdH0pO1xyXG5cdGVsc2VcclxuXHRcdHJldHVybiBQcm9taXNlLnJlamVjdChcIkZpcnN0IHBhcmFtZXRlciBtdXN0IGJlIGFuIGFycmF5IG9mIHN0cmluZ3Mgb3IgYSBzdHJpbmchXCIpO1xyXG59OyIsImltcG9ydCBleHRlbmRQcm90b3R5cGUgZnJvbSBcIi4uL3V0aWxzL0V4dGVuZFByb3RvdHlwZVwiO1xyXG5pbXBvcnQgUXVlcnlTdXBwb3J0IGZyb20gXCIuL2V4dGVudGlvbnMvUXVlcnlTdXBwb3J0XCI7XHJcbmltcG9ydCBSZWFkeUV2ZW50U3VwcG9ydCBmcm9tIFwiLi9leHRlbnRpb25zL1JlYWR5RXZlbnRTdXBwb3J0XCI7XHJcblxyXG5leHRlbmRQcm90b3R5cGUoRG9jdW1lbnQsIFF1ZXJ5U3VwcG9ydCwgUmVhZHlFdmVudFN1cHBvcnQpO1xyXG5cclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4gZG9jdW1lbnQudHJpZ2dlcihcInJlYWR5XCIpKTtcclxuXHJcblxyXG5cclxuIiwiaW1wb3J0IGV4dGVuZFByb3RvdHlwZSBmcm9tIFwiLi4vdXRpbHMvRXh0ZW5kUHJvdG90eXBlXCI7XHJcbmltcG9ydCBRdWVyeVN1cHBvcnQgZnJvbSBcIi4vZXh0ZW50aW9ucy9RdWVyeVN1cHBvcnRcIjtcclxuaW1wb3J0IE1hbmlwdWxhdGlvblN1cHBvcnQgZnJvbSBcIi4vZXh0ZW50aW9ucy9NYW5pcHVsYXRpb25TdXBwb3J0XCI7XHJcblxyXG5leHRlbmRQcm90b3R5cGUoRG9jdW1lbnRGcmFnbWVudCwgUXVlcnlTdXBwb3J0LCBNYW5pcHVsYXRpb25TdXBwb3J0KTtcclxuXHJcblxyXG5cclxuXHJcbiIsImltcG9ydCBleHRlbmRQcm90b3R5cGUgZnJvbSBcIi4uL3V0aWxzL0V4dGVuZFByb3RvdHlwZVwiO1xyXG5pbXBvcnQgUXVlcnlTdXBwb3J0IGZyb20gXCIuL2V4dGVudGlvbnMvUXVlcnlTdXBwb3J0XCI7XHJcbmltcG9ydCBBdHRyaWJ1dGVTdXBwb3J0IGZyb20gXCIuL2V4dGVudGlvbnMvQXR0cmlidXRlU3VwcG9ydFwiO1xyXG5pbXBvcnQgTWFuaXB1bGF0aW9uU3VwcG9ydCBmcm9tIFwiLi9leHRlbnRpb25zL01hbmlwdWxhdGlvblN1cHBvcnRcIjtcclxuXHJcbmV4dGVuZFByb3RvdHlwZShFbGVtZW50LFF1ZXJ5U3VwcG9ydCwgQXR0cmlidXRlU3VwcG9ydCwgTWFuaXB1bGF0aW9uU3VwcG9ydCk7IiwiaW1wb3J0IGV4dGVuZFByb3RvdHlwZSBmcm9tIFwiLi4vdXRpbHMvRXh0ZW5kUHJvdG90eXBlXCI7XG5pbXBvcnQgRXZlbnRTdXBwb3J0IGZyb20gXCIuL2V4dGVudGlvbnMvRXZlbnRTdXBwb3J0XCI7XG5cbmV4dGVuZFByb3RvdHlwZShFdmVudFRhcmdldCwgRXZlbnRTdXBwb3J0KTsiLCJpbXBvcnQgZXh0ZW5kUHJvdG90eXBlIGZyb20gXCIuLi91dGlscy9FeHRlbmRQcm90b3R5cGVcIjtcclxuaW1wb3J0IEh0bWxDbGFzc1N1cHBvcnQgZnJvbSBcIi4vZXh0ZW50aW9ucy9IdG1sQ2xhc3NTdXBwb3J0XCI7XHJcbmltcG9ydCBTaG93SGlkZVN1cHBvcnQgZnJvbSBcIi4vZXh0ZW50aW9ucy9TaG93SGlkZVN1cHBvcnRcIjtcclxuXHJcblxyXG5leHRlbmRQcm90b3R5cGUoSFRNTEVsZW1lbnQsIEh0bWxDbGFzc1N1cHBvcnQsIFNob3dIaWRlU3VwcG9ydCk7IiwiaW1wb3J0IGV4dGVuZFByb3RvdHlwZSBmcm9tIFwiLi4vdXRpbHMvRXh0ZW5kUHJvdG90eXBlXCI7XHJcbmltcG9ydCBWYWx1ZVN1cHBvcnQgZnJvbSBcIi4vZXh0ZW50aW9ucy9WYWx1ZVN1cHBvcnRcIjtcclxuXHJcblxyXG5leHRlbmRQcm90b3R5cGUoSFRNTElucHV0RWxlbWVudCxWYWx1ZVN1cHBvcnQpOyIsImltcG9ydCBleHRlbmRQcm90b3R5cGUgZnJvbSBcIi4uL3V0aWxzL0V4dGVuZFByb3RvdHlwZVwiO1xyXG5pbXBvcnQgVmFsdWVTdXBwb3J0IGZyb20gXCIuL2V4dGVudGlvbnMvVmFsdWVTdXBwb3J0XCI7XHJcblxyXG5cclxuZXh0ZW5kUHJvdG90eXBlKEhUTUxTZWxlY3RFbGVtZW50LFZhbHVlU3VwcG9ydCk7IiwiaW1wb3J0IGV4dGVuZFByb3RvdHlwZSBmcm9tIFwiLi4vdXRpbHMvRXh0ZW5kUHJvdG90eXBlXCI7XHJcbmltcG9ydCBFeHRlbmRlciBmcm9tIFwiLi4vdXRpbHMvRXh0ZW5kZXJcIjtcclxuXHJcblxyXG5leHRlbmRQcm90b3R5cGUoSFRNTFRleHRBcmVhRWxlbWVudCxFeHRlbmRlcihcIlZhbHVlU3VwcG9ydFwiLCBQcm90b3R5cGUgPT4ge1x0XHJcblx0UHJvdG90eXBlLnZhbCA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0aWYoYXJndW1lbnRzLmxlbmd0aCA9PSAwKVxyXG5cdFx0XHRyZXR1cm4gdGhpcy52YWx1ZTtcclxuXHRcdGVsc2VcclxuXHRcdFx0dGhpcy52YWx1ZSA9IGFyZ3VtZW50c1swXVxyXG5cdFx0XHRcclxuXHRcdHJldHVybiB0aGlzO1xyXG5cdH07XHRcclxufSkpOyIsImltcG9ydCBleHRlbmRQcm90b3R5cGUgZnJvbSBcIi4uL3V0aWxzL0V4dGVuZFByb3RvdHlwZVwiO1xyXG5pbXBvcnQgRGVsZWdhdGVyQnVpbGRlciBmcm9tIFwiLi4vdXRpbHMvRGVsZWdhdGVyQnVpbGRlclwiO1xyXG5pbXBvcnQgTGlzdFN1cHBvcnQgZnJvbSBcIi4vZXh0ZW50aW9ucy9MaXN0U3VwcG9ydFwiO1xyXG5cclxuZXh0ZW5kUHJvdG90eXBlKEhUTUxDb2xsZWN0aW9uLCBMaXN0U3VwcG9ydCk7XHJcblxyXG5IVE1MQ29sbGVjdGlvbi5wcm90b3R5cGUuYXBwbHlUbyA9IGZ1bmN0aW9uKCl7XHJcblx0Y29uc3QgYXJncyA9IEFycmF5LmZyb20oYXJndW1lbnRzKTtcclxuXHRjb25zdCBjYWxsaW5nID0gYXJncy5zaGlmdCgpO1xyXG5cdGNvbnN0IGlzRnVuY3Rpb24gPSB0eXBlb2YgY2FsbGluZyA9PT0gXCJmdW5jdGlvblwiO1xyXG5cdGNvbnN0IHJlc3VsdHMgPSBbXTtcclxuXHRmb3IobGV0IGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKyl7XHJcblx0XHRjb25zdCBub2RlID0gdGhpc1tpXTtcclxuXHRcdGxldFx0cmVzdWx0O1xyXG5cdFx0aWYoaXNGdW5jdGlvbilcclxuXHRcdFx0cmVzdWx0ID0gY2FsbGluZy5hcHBseShbbm9kZV0uY29uY2F0KGFyZ3MpKTtcclxuXHRcdGVsc2UgaWYodHlwZW9mIG5vZGVbY2FsbGluZ10gPT09IFwiZnVuY3Rpb25cIilcclxuXHRcdFx0cmVzdWx0ID0gbm9kZVtjYWxsaW5nXS5hcHBseShub2RlLCBhcmdzKTtcclxuXHRcdFxyXG5cdFx0aWYocmVzdWx0KVxyXG5cdFx0XHRyZXN1bHRzLnB1c2gocmVzdWx0KTtcclxuXHR9XHJcblx0XHJcblx0cmV0dXJuIHJlc3VsdHM7XHJcbn07XHJcblxyXG5IVE1MQ29sbGVjdGlvbi5wcm90b3R5cGUudmFsID0gZnVuY3Rpb24oKSB7XHJcblx0aWYoYXJndW1lbnRzLmxlbmd0aCA9PSAwKXtcclxuXHRcdGlmKHRoaXMubGVuZ3RoID4gMCl7XHJcblx0XHRcdGNvbnN0IHJlc3VsdCA9IG5ldyBNYXAoKTtcclxuXHRcdFx0dGhpcy5mb3JFYWNoKG5vZGUgPT4ge1xyXG5cdFx0XHRcdGlmKHR5cGVvZiBub2RlLnZhbCA9PT0gXCJmdW5jdGlvblwiKXtcclxuXHRcdFx0XHRcdGNvbnN0IHZhbHVlID0gbm9kZS52YWwoKTtcclxuXHRcdFx0XHRcdGlmKHZhbHVlKVxyXG5cdFx0XHRcdFx0XHRyZXN1bHQuc2V0KChub2RlLm5hbWUgfHwgbm9kZS5pZCB8fCBub2RlLnNlbGVjdG9yKCkpLCBub2RlLnZhbCgpKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pO1x0XHJcblx0XHRcdHJldHVybiByZXN1bHQ7XHJcblx0XHR9XHJcblx0fVxyXG5cdGVsc2VcclxuXHRcdEhUTUxDb2xsZWN0aW9uLnByb3RvdHlwZS5hcHBseVRvLmFwcGx5KHRoaXMsIFtcInZhbFwiXS5jb25jYXQoQXJyYXkuZnJvbShhcmd1bWVudHMpKSk7XHJcbn07XHJcblxyXG5IVE1MQ29sbGVjdGlvbi5mcm9tID0gZnVuY3Rpb24oKXtcclxuXHRjb25zdCBhcmdzID0gQXJyYXkuZnJvbShhcmd1bWVudHMpO1xyXG5cdGNvbnN0IGRhdGEgPSB7fTtcclxuXHRsZXQgY291bnRlciA9IDA7XHJcblx0XHJcblx0d2hpbGUoYXJncy5sZW5ndGggPiAwKXtcclxuXHRcdGNvbnN0IGFyZyA9IGFyZ3Muc2hpZnQoKTtcclxuXHRcdGlmKHR5cGVvZiBhcmcgIT09IFwidW5kZWZpbmVkXCIgJiYgYXJnICE9IG51bGwpe1xyXG5cdFx0XHRpZihhcmcgaW5zdGFuY2VvZiBIVE1MRWxlbWVudClcclxuXHRcdFx0XHRkYXRhW2NvdW50ZXIrK10gPSB7dmFsdWU6IGFyZywgZW51bWVyYWJsZTogdHJ1ZX07XHJcblx0XHRcdGVsc2UgaWYoYXJnIGluc3RhbmNlb2YgSFRNTENvbGxlY3Rpb24gfHwgYXJnIGluc3RhbmNlb2YgTm9kZUxpc3QgfHwgYXJnIGluc3RhbmNlb2YgQXJyYXkpe1xyXG5cdFx0XHRcdGZvcihsZXQgaSA9IDA7IGkgPCBhcmcubGVuZ3RoOyBpKyspe1xyXG5cdFx0XHRcdFx0aWYoYXJnW2ldICYmIGFyZ1tpXSBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KXtcclxuXHRcdFx0XHRcdFx0ZGF0YVtjb3VudGVyKytdID0ge3ZhbHVlOiBhcmdbaV0sIGVudW1lcmFibGU6IHRydWV9O1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHRcclxuXHRkYXRhLmxlbmd0aCA9IHt2YWx1ZTogY291bnRlcn07XHJcblx0cmV0dXJuICBPYmplY3QuY3JlYXRlKEhUTUxDb2xsZWN0aW9uLnByb3RvdHlwZSwgZGF0YSk7XHJcbn07XHJcblxyXG5cclxuRGVsZWdhdGVyQnVpbGRlcihmdW5jdGlvbihhRnVuY3Rpb25OYW1lLCB0aGVBcmd1bWVudHMpIHtcclxuXHRsZXQgcmVzdWx0cyA9IFtdO1x0XHJcblx0dGhpcy5mb3JFYWNoKG5vZGUgPT4ge1xyXG5cdFx0aWYobm9kZSAmJiB0eXBlb2Ygbm9kZVthRnVuY3Rpb25OYW1lXSA9PT0gXCJmdW5jdGlvblwiKXtcclxuXHRcdFx0bGV0IHJlc3VsdCA9IG5vZGVbYUZ1bmN0aW9uTmFtZV0uYXBwbHkobm9kZSwgdGhlQXJndW1lbnRzKTtcclxuXHRcdFx0aWYocmVzdWx0KXsgXHJcblx0XHRcdFx0aWYocmVzdWx0IGluc3RhbmNlb2YgSFRNTENvbGxlY3Rpb24pXHJcblx0XHRcdFx0XHRyZXN1bHRzID0gcmVzdWx0cy5jb25jYXQoQXJyYXkuZnJvbShyZXN1bHQpKTtcclxuXHRcdFx0XHRlbHNlXHJcblx0XHRcdFx0XHRyZXN1bHRzLnB1c2gocmVzdWx0KTtcclxuXHRcdFx0fVx0XHRcclxuXHRcdH1cclxuXHR9KTtcclxuXHRcclxuXHRpZihyZXN1bHRzLmxlbmd0aCA9PT0gMClcclxuXHRcdHJldHVybiB1bmRlZmluZWQ7XHJcblx0ZWxzZSBpZihyZXN1bHRzWzBdIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQgfHwgcmVzdWx0c1swXSBpbnN0YW5jZW9mIEhUTUxDb2xsZWN0aW9uKVxyXG5cdFx0cmV0dXJuIEhUTUxDb2xsZWN0aW9uLmZyb20uYXBwbHkobnVsbCwgcmVzdWx0cyk7XHJcblx0ZWxzZVxyXG5cdFx0cmV0dXJuIHJlc3VsdHM7XHJcbn0sSFRNTENvbGxlY3Rpb24ucHJvdG90eXBlLCBOb2RlLnByb3RvdHlwZSwgSFRNTEVsZW1lbnQucHJvdG90eXBlLCBIVE1MSW5wdXRFbGVtZW50LnByb3RvdHlwZSwgRWxlbWVudC5wcm90b3R5cGUsIEV2ZW50VGFyZ2V0LnByb3RvdHlwZSk7XHJcbiIsImltcG9ydCBleHRlbmRQcm90b3R5cGUgZnJvbSBcIi4uL3V0aWxzL0V4dGVuZFByb3RvdHlwZVwiO1xyXG5pbXBvcnQgRGF0YVN1cHBvcnQgZnJvbSBcIi4vZXh0ZW50aW9ucy9EYXRhU3VwcG9ydFwiO1xyXG5pbXBvcnQgTWFuaXB1bGF0aW9uU3VwcG9ydCBmcm9tIFwiLi9leHRlbnRpb25zL01hbmlwdWxhdGlvblN1cHBvcnRcIjtcclxuXHJcbmV4dGVuZFByb3RvdHlwZShOb2RlLERhdGFTdXBwb3J0LE1hbmlwdWxhdGlvblN1cHBvcnQpOyIsImltcG9ydCBleHRlbmRQcm90b3R5cGUgZnJvbSBcIi4uL3V0aWxzL0V4dGVuZFByb3RvdHlwZVwiO1xyXG5pbXBvcnQgRGVsZWdhdGVyQnVpbGRlciBmcm9tIFwiLi4vdXRpbHMvRGVsZWdhdGVyQnVpbGRlclwiO1xyXG5pbXBvcnQgTGlzdFN1cHBvcnQgZnJvbSBcIi4vZXh0ZW50aW9ucy9MaXN0U3VwcG9ydFwiO1xyXG5cclxuZXh0ZW5kUHJvdG90eXBlKE5vZGVMaXN0LCBMaXN0U3VwcG9ydCk7XHJcblxyXG5Ob2RlTGlzdC5wcm90b3R5cGUuYXBwbHlUbyA9IGZ1bmN0aW9uKCl7XHJcblx0Y29uc3QgYXJncyA9IEFycmF5LmZyb20oYXJndW1lbnRzKTtcclxuXHRjb25zdCBjYWxsaW5nID0gYXJncy5zaGlmdCgpO1xyXG5cdGNvbnN0IGlzRnVuY3Rpb24gPSB0eXBlb2YgY2FsbGluZyA9PT0gXCJmdW5jdGlvblwiO1xyXG5cdGNvbnN0IHJlc3VsdHMgPSBbXTtcclxuXHRmb3IobGV0IGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKyl7XHJcblx0XHRjb25zdCBub2RlID0gdGhpc1tpXTtcclxuXHRcdGxldFx0cmVzdWx0O1xyXG5cdFx0aWYoaXNGdW5jdGlvbilcclxuXHRcdFx0cmVzdWx0ID0gY2FsbGluZy5hcHBseShbbm9kZV0uY29uY2F0KGFyZ3MpKTtcclxuXHRcdGVsc2UgaWYodHlwZW9mIG5vZGVbY2FsbGluZ10gPT09IFwiZnVuY3Rpb25cIilcclxuXHRcdFx0cmVzdWx0ID0gbm9kZVtjYWxsaW5nXS5hcHBseShub2RlLCBhcmdzKTtcclxuXHRcdFxyXG5cdFx0aWYocmVzdWx0KVxyXG5cdFx0XHRyZXN1bHRzLnB1c2gocmVzdWx0KTtcclxuXHR9XHJcblx0XHJcblx0cmV0dXJuIHJlc3VsdHM7XHJcbn07XHJcblxyXG5Ob2RlTGlzdC5wcm90b3R5cGUudmFsID0gZnVuY3Rpb24oKSB7XHJcblx0aWYoYXJndW1lbnRzLmxlbmd0aCA9PSAwKXtcclxuXHRcdGlmKHRoaXMubGVuZ3RoID4gMCl7XHJcblx0XHRcdGNvbnN0IHJlc3VsdCA9IG5ldyBNYXAoKTtcclxuXHRcdFx0dGhpcy5mb3JFYWNoKG5vZGUgPT4ge1xyXG5cdFx0XHRcdGlmKHR5cGVvZiBub2RlLnZhbCA9PT0gXCJmdW5jdGlvblwiKXtcclxuXHRcdFx0XHRcdGNvbnN0IHZhbHVlID0gbm9kZS52YWwoKTtcclxuXHRcdFx0XHRcdGlmKHZhbHVlKVxyXG5cdFx0XHRcdFx0XHRyZXN1bHQuc2V0KChub2RlLm5hbWUgfHwgbm9kZS5pZCB8fCBub2RlLnNlbGVjdG9yKCkpLCBub2RlLnZhbCgpKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pO1x0XHJcblx0XHRcdHJldHVybiByZXN1bHQ7XHJcblx0XHR9XHJcblx0fVxyXG5cdGVsc2VcclxuXHRcdE5vZGVMaXN0LnByb3RvdHlwZS5hcHBseVRvLmFwcGx5KHRoaXMsIFtcInZhbFwiXS5jb25jYXQoQXJyYXkuZnJvbShhcmd1bWVudHMpKSk7XHJcbn07XHJcblxyXG5Ob2RlTGlzdC5mcm9tID0gZnVuY3Rpb24oKXtcclxuXHRjb25zdCBhcmdzID0gQXJyYXkuZnJvbShhcmd1bWVudHMpO1xyXG5cdGNvbnN0IGRhdGEgPSB7fTtcclxuXHRsZXQgY291bnRlciA9IDA7XHJcblx0XHJcblx0d2hpbGUoYXJncy5sZW5ndGggPiAwKXtcclxuXHRcdGNvbnN0IGFyZyA9IGFyZ3Muc2hpZnQoKTtcclxuXHRcdGlmKHR5cGVvZiBhcmcgIT09IFwidW5kZWZpbmVkXCIgJiYgYXJnICE9IG51bGwpe1xyXG5cdFx0XHRpZihhcmcgaW5zdGFuY2VvZiBOb2RlKVxyXG5cdFx0XHRcdGRhdGFbY291bnRlcisrXSA9IHt2YWx1ZTogYXJnLCBlbnVtZXJhYmxlOiB0cnVlfTtcclxuXHRcdFx0ZWxzZSBpZihhcmcgaW5zdGFuY2VvZiBOb2RlTGlzdCB8fCBhcmcgaW5zdGFuY2VvZiBIVE1MQ29sbGVjdGlvbiB8fCBhcmcgaW5zdGFuY2VvZiBBcnJheSl7XHJcblx0XHRcdFx0Zm9yKGxldCBpID0gMDsgaSA8IGFyZy5sZW5ndGg7IGkrKyl7XHJcblx0XHRcdFx0XHRpZihhcmdbaV0gJiYgYXJnW2ldIGluc3RhbmNlb2YgTm9kZSl7XHJcblx0XHRcdFx0XHRcdGRhdGFbY291bnRlcisrXSA9IHt2YWx1ZTogYXJnW2ldLCBlbnVtZXJhYmxlOiB0cnVlfTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcblx0XHJcblx0ZGF0YS5sZW5ndGggPSB7dmFsdWU6IGNvdW50ZXJ9O1xyXG5cdHJldHVybiAgT2JqZWN0LmNyZWF0ZShOb2RlTGlzdC5wcm90b3R5cGUsIGRhdGEpO1xyXG59O1xyXG5cclxuXHJcbkRlbGVnYXRlckJ1aWxkZXIoZnVuY3Rpb24oYUZ1bmN0aW9uTmFtZSwgdGhlQXJndW1lbnRzKSB7XHJcblx0bGV0IHJlc3VsdHMgPSBbXTtcdFxyXG5cdHRoaXMuZm9yRWFjaChub2RlID0+IHtcclxuXHRcdGlmKG5vZGUgJiYgdHlwZW9mIG5vZGVbYUZ1bmN0aW9uTmFtZV0gPT09IFwiZnVuY3Rpb25cIil7XHJcblx0XHRcdGNvbnN0IHJlc3VsdCA9IG5vZGVbYUZ1bmN0aW9uTmFtZV0uYXBwbHkobm9kZSwgdGhlQXJndW1lbnRzKTtcclxuXHRcdFx0aWYocmVzdWx0KXsgXHJcblx0XHRcdFx0aWYocmVzdWx0IGluc3RhbmNlb2YgTm9kZUxpc3QpXHJcblx0XHRcdFx0XHRyZXN1bHRzID0gcmVzdWx0cy5jb25jYXQoQXJyYXkuZnJvbShyZXN1bHQpKTtcclxuXHRcdFx0XHRlbHNlXHJcblx0XHRcdFx0XHRyZXN1bHRzLnB1c2gocmVzdWx0KTtcclxuXHRcdFx0fVx0XHRcclxuXHRcdH1cclxuXHR9KTtcclxuXHRcclxuXHRpZihyZXN1bHRzLmxlbmd0aCA9PT0gMClcclxuXHRcdHJldHVybiB1bmRlZmluZWQ7XHJcblx0ZWxzZSBpZihyZXN1bHRzWzBdIGluc3RhbmNlb2YgTm9kZSB8fCByZXN1bHRzWzBdIGluc3RhbmNlb2YgTm9kZUxpc3QpXHJcblx0XHRyZXR1cm4gTm9kZUxpc3QuZnJvbShyZXN1bHRzKTtcclxuXHRlbHNlXHJcblx0XHRyZXR1cm4gcmVzdWx0cztcclxufSxOb2RlTGlzdC5wcm90b3R5cGUsIE5vZGUucHJvdG90eXBlLCBIVE1MRWxlbWVudC5wcm90b3R5cGUsIEhUTUxJbnB1dEVsZW1lbnQucHJvdG90eXBlLCBFbGVtZW50LnByb3RvdHlwZSwgRXZlbnRUYXJnZXQucHJvdG90eXBlKTtcclxuIiwiaW1wb3J0IEV4dGVuZGVyIGZyb20gXCIuLi8uLi91dGlscy9FeHRlbmRlclwiO1xyXG5cclxuY29uc3Qgc3VwcG9ydCA9IEV4dGVuZGVyKFwiQXR0cmlidXRlU3VwcG9ydFwiLCBQcm90b3R5cGUgPT4ge1xyXG5cdFByb3RvdHlwZS5hdHRyID0gZnVuY3Rpb24oKSB7XHJcblx0XHRpZiAoYXJndW1lbnRzLmxlbmd0aCA9PSAwKVxyXG5cdFx0XHRyZXR1cm4gdGhpcy5oYXNBdHRyaWJ1dGVzKCkgPyAoKCkgPT4ge1xyXG5cdFx0XHRcdGNvbnN0IHJlc3VsdCA9IHt9O1xyXG5cdFx0XHRcdHRoaXMuZ2V0QXR0cmlidXRlTmFtZXMoKS5mb3JFYWNoKG5hbWUgPT4ge1xyXG5cdFx0XHRcdFx0cmVzdWx0W25hbWVdID0gdGhpcy5nZXRBdHRyaWJ1dGUobmFtZSk7XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdFx0cmV0dXJuIHJlc3VsdDtcclxuXHRcdFx0fSkoKSA6IHVuZGVmaW5lZDtcclxuXHRcdGVsc2UgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT0gMSlcclxuXHRcdFx0cmV0dXJuIHRoaXMuZ2V0QXR0cmlidXRlKGFyZ3VtZW50c1swXSk7XHJcblx0XHRlbHNlIGlmICh0eXBlb2YgYXJndW1lbnRzWzFdID09PSBcInVuZGVmaW5lZFwiIHx8IGFyZ3VtZW50c1sxXSA9PSBudWxsKVxyXG5cdFx0XHR0aGlzLnJlbW92ZUF0dHJpYnV0ZShhcmd1bWVudHNbMF0pO1xyXG5cdFx0ZWxzZVxyXG5cdFx0XHR0aGlzLnNldEF0dHJpYnV0ZShhcmd1bWVudHNbMF0sIGFyZ3VtZW50c1sxXSk7XHJcblx0XHRcclxuXHRcdHJldHVybiB0aGlzO1xyXG5cdH07XHJcbn0pO1xyXG5leHBvcnQgZGVmYXVsdCBzdXBwb3J0OyIsImltcG9ydCBFeHRlbmRlciBmcm9tIFwiLi4vLi4vdXRpbHMvRXh0ZW5kZXJcIjtcclxuY29uc3Qgc3VwcG9ydCA9IEV4dGVuZGVyKFwiRGF0YVN1cHBvcnRcIiwgUHJvdG90eXBlID0+IHtcclxuXHRQcm90b3R5cGUuZGF0YSA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0Y29uc3QgZGF0YSA9IHt9O1xyXG5cdFx0aWYgKHR5cGVvZiB0aGlzLmRhdGFzZXQgIT09IFwidW5kZWZpbmVkXCIpXHJcblx0XHRcdGZvciAobmFtZSBpbiB0aGlzLmRhdGFzZXQpXHJcblx0XHRcdFx0ZGF0YVtuYW1lXSA9IHRoaXMuZGF0YXNldFtuYW1lXTtcclxuXHJcblx0XHR0aGlzLmRhdGEgPSAoZnVuY3Rpb24oKSB7XHJcblx0XHRcdGlmIChhcmd1bWVudHMubGVuZ3RoID09IDApXHJcblx0XHRcdFx0cmV0dXJuIGRhdGE7XHJcblx0XHRcdGVsc2UgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT0gMSlcclxuXHRcdFx0XHRyZXR1cm4gZGF0YVthcmd1bWVudHNbMF1dO1xyXG5cdFx0XHRlbHNlIGlmICh0eXBlb2YgYXJndW1lbnRzWzFdID09PSBcInVuZGVmaW5lZFwiIHx8IGFyZ3VtZW50c1sxXSA9PSBudWxsKVxyXG5cdFx0XHRcdGRlbGV0ZSBkYXRhW2FyZ3VtZW50c1swXV07XHJcblx0XHRcdGVsc2VcclxuXHRcdFx0XHRkYXRhW2FyZ3VtZW50c1swXV0gPSBhcmd1bWVudHNbMV07XHJcblxyXG5cdFx0XHRyZXR1cm4gdGhpcztcclxuXHRcdH0pLmJpbmQodGhpcyk7XHJcblxyXG5cdFx0cmV0dXJuIHRoaXMuZGF0YS5hcHBseShudWxsLCBhcmd1bWVudHMpO1xyXG5cdH07XHJcbn0pO1xyXG5leHBvcnQgZGVmYXVsdCBzdXBwb3J0OyIsImltcG9ydCBFeHRlbmRlciBmcm9tIFwiLi4vLi4vdXRpbHMvRXh0ZW5kZXJcIjtcclxuXHJcbmNvbnN0IERFRkFVTFRfVElNRU9VVCA9IDEwMDtcclxuY29uc3Qgc3VwcG9ydCA9IEV4dGVuZGVyKFwiRXZlbnRTdXBwb3J0XCIsIChQcm90b3R5cGUpID0+IHtcclxuXHRjb25zdCBFVkVOVFNQTElURVIgPSAvKFxccyspfChcXHMqLFxccyopLztcclxuXHRjb25zdCBnZXRXcmFwcGVySGFuZGxlTWFwID0gKGVsZW1lbnQpID0+IHtcclxuXHRcdGlmICghZWxlbWVudC5fX3dyYXBwZXJoYW5kbGVtYXBfXylcclxuXHRcdFx0ZWxlbWVudC5fX3dyYXBwZXJoYW5kbGVtYXBfXyA9IG5ldyBNYXAoKTtcclxuXHJcblx0XHRyZXR1cm4gZWxlbWVudC5fX3dyYXBwZXJoYW5kbGVtYXBfXztcclxuXHR9XHJcblxyXG5cdGNvbnN0IGdldFRyaWdnZXJUaW1lb3V0cyA9IChlbGVtZW50KSA9PiB7XHJcblx0XHRpZiAoIWVsZW1lbnQuX19fRVZFTlRUUklHR0VSVElNRU9VVFNfX18pIGVsZW1lbnQuX19fRVZFTlRUUklHR0VSVElNRU9VVFNfX18gPSB7fTtcclxuXHJcblx0XHRyZXR1cm4gZWxlbWVudC5fX19FVkVOVFRSSUdHRVJUSU1FT1VUU19fXztcclxuXHR9O1xyXG5cclxuXHRjb25zdCByZW1vdmVXcmFwcGVyID0gKGVsZW1lbnQsIGRhdGEsIGV2ZW50VHlwZXMpID0+IHtcclxuXHRcdGNvbnN0IHsgd3JhcHBlciwgb3B0aW9uLCBldmVudHMsIGhhbmRsZSB9ID0gZGF0YTtcclxuXHRcdGNvbnN0IGNhcHR1cmUgPSBvcHRpb24uY2FwdHVyZTtcclxuXHRcdGlmKGV2ZW50VHlwZXMpe1xyXG5cdFx0XHRldmVudFR5cGVzID0gdHlwZW9mIGV2ZW50VHlwZXMgPT09IFwic3RyaW5nXCIgPyBldmVudFR5cGVzLnNwbGl0KEVWRU5UU1BMSVRFUikgOiBldmVudFR5cGVzO1xyXG5cdFx0XHRmb3IgKGxldCBldmVudCBvZiBldmVudFR5cGVzKSB7XHJcblx0XHRcdFx0Y29uc3QgaW5kZXggPSBldmVudHMuaW5kZXhPZihldmVudCk7XHJcblx0XHRcdFx0aWYoaW5kZXggPj0gMCkge1xyXG5cdFx0XHRcdFx0ZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50LCB3cmFwcGVyLCBjYXB0dXJlKTtcclxuXHRcdFx0XHRcdGV2ZW50cy5zcGxpY2UoaW5kZXgsIDEpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRpZihldmVudHMubGVuZ3RoID09IDApXHRcdFx0XHRcclxuXHRcdFx0XHRcdGdldFdyYXBwZXJIYW5kbGVNYXAoZWxlbWVudCkuZGVsZXRlKGhhbmRsZSk7XHJcblx0XHRcdH1cclxuXHRcdFx0XHJcblx0XHR9ZWxzZXtcclxuXHRcdFx0Zm9yIChsZXQgZXZlbnQgb2YgZXZlbnRzKSB7XHJcblx0XHRcdFx0ZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50LCB3cmFwcGVyLCBjYXB0dXJlKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRnZXRXcmFwcGVySGFuZGxlTWFwKGVsZW1lbnQpLmRlbGV0ZShoYW5kbGUpO1xyXG5cdFx0fVx0XHRcclxuXHR9XHJcblxyXG5cdFByb3RvdHlwZS5vbiA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0aWYgKGFyZ3VtZW50cy5sZW5ndGggPCAyKSB0aHJvdyBuZXcgRXJyb3IoXCJUb28gbGVzcyBhcmd1bWVudHMhXCIpO1xyXG5cclxuXHRcdGNvbnN0IGFyZ3MgPSBBcnJheS5mcm9tKGFyZ3VtZW50cyk7XHJcblx0XHRsZXQgZXZlbnRzID0gdHlwZW9mIGFyZ3NbMF0gPT09IFwic3RyaW5nXCIgPyBhcmdzLnNoaWZ0KCkuc3BsaXQoRVZFTlRTUExJVEVSKSA6IGFyZ3Muc2hpZnQoKTtcclxuXHRcdGNvbnN0IGZpbHRlciA9IHR5cGVvZiBhcmdzWzBdID09PSBcInN0cmluZ1wiID8gYXJncy5zaGlmdCgpIDogbnVsbDtcclxuXHRcdGNvbnN0IGhhbmRsZSA9IGFyZ3Muc2hpZnQoKTtcclxuXHRcdGNvbnN0IG9wdGlvbiA9IHR5cGVvZiBhcmdzWzBdID09PSBcInVuZGVmaW5lZFwiID8geyBjYXB0dXJlOiBmYWxzZSwgb25jZTogZmFsc2UsIHBhc3NpdmU6IGZhbHNlIH0gOiAodHlwZW9mIGFyZ3NbMF0gPT09IFwiYm9vbGVhblwiID8geyBjYXB0dXJlOiBhcmdzLnNoaWZ0KCksIG9uY2U6IGZhbHNlLCBwYXNzaXZlOiBmYWxzZSB9IDogYXJncy5zaGlmdCgpKTtcclxuXHRcdGNvbnN0IHdyYXBwZXIgPSBmdW5jdGlvbihhRXZlbnQpIHtcclxuXHRcdFx0aWYgKGZpbHRlcikge1xyXG5cdFx0XHRcdGNvbnN0IHRhcmdldCA9IGV2ZW50LnRhcmdldDtcclxuXHRcdFx0XHRpZiAodHlwZW9mIHRhcmdldC5pcyA9PT0gXCJmdW5jdGlvblwiICYmICFhRXZlbnQudGFyZ2V0LmlzKGZpbHRlcikpIHJldHVybiB0cnVlO1xyXG5cdFx0XHR9XHJcblx0XHRcdGNvbnN0IHJlc3VsdCA9IGhhbmRsZS5hcHBseShudWxsLCBhcmd1bWVudHMpO1xyXG5cdFx0XHRpZiAob3B0aW9uLm9uY2UpIHJlbW92ZVdyYXBwZXIodGhpcywgd3JhcHBlcik7XHJcblx0XHRcdHJldHVybiByZXN1bHQ7XHJcblx0XHR9O1xyXG5cclxuXHRcdGdldFdyYXBwZXJIYW5kbGVNYXAodGhpcykuc2V0KGhhbmRsZSwgeyBoYW5kbGUsIHdyYXBwZXI6IHdyYXBwZXIsIGV2ZW50cywgb3B0aW9uIH0pO1xyXG5cclxuXHRcdGZvciAobGV0IGV2ZW50IG9mIGV2ZW50cykge1xyXG5cdFx0XHR0aGlzLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQsIHdyYXBwZXIsIG9wdGlvbik7XHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIHRoaXM7XHJcblx0fTtcclxuXHJcblxyXG5cdFByb3RvdHlwZS5yZW1vdmVPbiA9IGZ1bmN0aW9uKGhhbmRsZSwgZXZlbnQsIGNhcHR1cmUpIHtcclxuXHRcdGNvbnN0IGRhdGEgPSBnZXRXcmFwcGVySGFuZGxlTWFwKHRoaXMpLmdldChoYW5kbGUpO1xyXG5cdFx0aWYgKGRhdGEpIFxyXG5cdFx0XHRyZW1vdmVXcmFwcGVyKHRoaXMsIGRhdGEsIGV2ZW50KTtcclxuXHRcdGVsc2VcclxuXHRcdFx0dGhpcy5yZW1vdmVFdmVudExpc3RlbmVyKGhhbmRsZSwgZXZlbnQsIGNhcHR1cmUpO1xyXG5cclxuXHRcdHJldHVybiB0aGlzO1xyXG5cdH07XHJcblxyXG5cdFByb3RvdHlwZS50cmlnZ2VyID0gZnVuY3Rpb24oKSB7XHJcblx0XHRjb25zdCBhcmdzID0gQXJyYXkuZnJvbShhcmd1bWVudHMpO1xyXG5cdFx0Y29uc3QgdGltZW91dCA9IHR5cGVvZiBhcmdzWzBdID09PSBcIm51bWJlclwiID8gYXJncy5zaGlmdCgpIDogLTE7XHJcblx0XHRpZiAodGltZW91dCA+PSAwKSB7XHJcblx0XHRcdGNvbnN0IHR5cGUgPSBhcmdzWzBdO1xyXG5cdFx0XHRjb25zdCB0aW1lb3V0cyA9IGdldFRyaWdnZXJUaW1lb3V0cyh0aGlzKTtcclxuXHRcdFx0Y29uc3QgdGltZW91dGlkID0gdGltZW91dHNbdHlwZV07XHJcblx0XHRcdGlmICh0aW1lb3V0aWQpIGNsZWFyVGltZW91dCh0aW1lb3V0aWQpO1xyXG5cclxuXHRcdFx0dGltZW91dHNbdHlwZV0gPSBzZXRUaW1lb3V0KCgpID0+IHtcclxuXHRcdFx0XHRkZWxldGUgdGltZW91dHNbdHlwZV07XHJcblx0XHRcdFx0dGhpcy50cmlnZ2VyLmFwcGx5KHRoaXMsIGFyZ3MpO1xyXG5cdFx0XHR9LCB0aW1lb3V0KTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGNvbnN0IHR5cGUgPSBhcmdzLnNoaWZ0KCk7XHJcblx0XHRcdGNvbnN0IGRlbGVnYXRlID0gYXJnc1swXSBpbnN0YW5jZW9mIEV2ZW50ID8gYXJncy5zaGlmdCgpIDogbnVsbDtcclxuXHRcdFx0Y29uc3QgZGF0YSA9IGFyZ3MubGVuZ3RoID49IDEgPyAoYXJncy5sZW5ndGggPT0gMCA/IGFyZ3Muc2hpZnQoKSA6IGFyZ3MpIDogZGVsZWdhdGU7XHJcblx0XHRcdGNvbnN0IGV2ZW50ID0gZGF0YSA/IG5ldyBDdXN0b21FdmVudCh0eXBlLCB7IGJ1YmJsZXM6IHRydWUsIGNhbmNlbGFibGU6IHRydWUsIGRldGFpbDogZGF0YSB9KSA6IG5ldyBFdmVudCh0eXBlLCB7IGJ1YmJsZXM6IHRydWUsIGNhbmNlbGFibGU6IHRydWUgfSk7XHJcblxyXG5cdFx0XHRpZiAoZGVsZWdhdGUpIGV2ZW50LmRlbGVnYXRlZEV2ZW50ID0gZGVsZWdhdGU7XHJcblx0XHRcdHRoaXMuZGlzcGF0Y2hFdmVudChldmVudCk7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gdGhpcztcclxuXHR9O1xyXG59KTtcclxuZXhwb3J0IGRlZmF1bHQgc3VwcG9ydDtcclxuIiwiaW1wb3J0IEV4dGVuZGVyIGZyb20gXCIuLi8uLi91dGlscy9FeHRlbmRlclwiO1xyXG5cclxuY29uc3Qgc3VwcG9ydCA9IEV4dGVuZGVyKFwiSHRtbENsYXNzU3VwcG9ydFwiLCBQcm90b3R5cGUgPT4ge1x0XHJcblx0UHJvdG90eXBlLmFkZENsYXNzID0gZnVuY3Rpb24oKSB7XHJcblx0XHRpZihhcmd1bWVudHMubGVuZ3RoID09IDEpXHJcblx0XHRcdGFyZ3VtZW50c1swXS5zcGxpdCgvXFxzKy8pLmZvckVhY2goY2xhenogPT4gdGhpcy5jbGFzc0xpc3QuYWRkKGNsYXp6KSk7XHJcblx0XHRlbHNlIGlmKGFyZ3VtZW50cy5sZW5ndGggPiAxKVxyXG5cdFx0XHRBcnJheS5wcm90b3R5cGUuZm9yRWFjaC5jYWxsKGFyZ3VtZW50cyxjbGF6eiA9PiB0aGlzLmNsYXNzTGlzdC5hZGQoY2xhenopKTtcclxuXHRcdFxyXG5cdFx0cmV0dXJuIHRoaXM7XHJcblx0fTtcclxuXHRcclxuXHRQcm90b3R5cGUucmVtb3ZlQ2xhc3MgPSBmdW5jdGlvbigpIHtcclxuXHRcdGlmKGFyZ3VtZW50cy5sZW5ndGggPT0gMSlcclxuXHRcdFx0YXJndW1lbnRzWzBdLnNwbGl0KC9cXHMrLykuZm9yRWFjaChjbGF6eiA9PiB0aGlzLmNsYXNzTGlzdC5yZW1vdmUoY2xhenopKTtcclxuXHRcdGVsc2UgaWYoYXJndW1lbnRzLmxlbmd0aCA+IDEpXHJcblx0XHRcdEFycmF5LnByb3RvdHlwZS5mb3JFYWNoLmNhbGwoYXJndW1lbnRzLCBjbGF6eiA9PiB0aGlzLmNsYXNzTGlzdC5yZW1vdmUoY2xhenopKTtcclxuXHRcdFxyXG5cdFx0cmV0dXJuIHRoaXM7XHRcdFxyXG5cdH07XHJcblx0XHJcblx0UHJvdG90eXBlLnRvZ2dsZUNsYXNzID0gZnVuY3Rpb24oKSB7XHJcblx0XHRpZihhcmd1bWVudHMubGVuZ3RoID09IDEpXHJcblx0XHRcdGFyZ3VtZW50c1swXS5zcGxpdCgvXFxzKy8pLmZvckVhY2goY2xhenogPT4gdGhpcy5jbGFzc0xpc3QudG9nZ2xlKGNsYXp6KSk7XHJcblx0XHRlbHNlIGlmKGFyZ3VtZW50cy5sZW5ndGggPiAxKVxyXG5cdFx0XHRBcnJheS5wcm90b3R5cGUuZm9yRWFjaC5jYWxsKGFyZ3VtZW50cywgY2xhenogPT4gdGhpcy5jbGFzc0xpc3QudG9nZ2xlKGNsYXp6KSk7XHJcblx0XHRcclxuXHRcdHJldHVybiB0aGlzO1xyXG5cdH07XHJcbn0pO1xyXG5leHBvcnQgZGVmYXVsdCBzdXBwb3J0OyIsImltcG9ydCBFeHRlbmRlciBmcm9tIFwiLi4vLi4vdXRpbHMvRXh0ZW5kZXJcIjtcclxuXHJcbmNvbnN0IHN1cHBvcnQgPSBFeHRlbmRlcihcIkxpc3RTdXBwb3J0XCIsIFByb3RvdHlwZSA9PiB7XHRcdFxyXG5cdFByb3RvdHlwZS5pbmRleE9mID0gZnVuY3Rpb24oKSB7XHJcblx0XHRmb3IobGV0IGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKylcclxuXHRcdFx0aWYodGhpc1tpXSA9PSBhcmd1bWVudHNbMF0pXHJcblx0XHRcdFx0cmV0dXJuIGk7XHJcblx0XHRcclxuXHRcdHJldHVybiAtMTtcclxuXHR9O1xyXG5cclxuXHRQcm90b3R5cGUuZm9yRWFjaCA9IGZ1bmN0aW9uKCl7XHJcblx0XHRyZXR1cm4gQXJyYXkucHJvdG90eXBlLmZvckVhY2guYXBwbHkoQXJyYXkuZnJvbSh0aGlzKSwgYXJndW1lbnRzKTtcclxuXHR9O1xyXG5cdFxyXG5cdFByb3RvdHlwZS5tYXAgPSBmdW5jdGlvbigpe1xyXG5cdFx0cmV0dXJuIEFycmF5LnByb3RvdHlwZS5tYXAuYXBwbHkoQXJyYXkuZnJvbSh0aGlzKSwgYXJndW1lbnRzKTtcclxuXHR9O1xyXG5cdFxyXG5cdFByb3RvdHlwZS5maWx0ZXIgPSBmdW5jdGlvbigpe1xyXG5cdFx0cmV0dXJuIEFycmF5LnByb3RvdHlwZS5maWx0ZXIuYXBwbHkoQXJyYXkuZnJvbSh0aGlzKSwgYXJndW1lbnRzKTtcclxuXHR9O1xyXG5cclxuXHRQcm90b3R5cGUuZmlyc3QgPSBmdW5jdGlvbigpe1xyXG5cdFx0aWYodGhpcy5sZW5ndGggPiAwKVxyXG5cdFx0XHRyZXR1cm4gdGhpc1swXTtcclxuXHR9O1x0XHJcblx0XHJcblx0UHJvdG90eXBlLmxhc3QgPSBmdW5jdGlvbigpe1xyXG5cdFx0aWYodGhpcy5sZW5ndGggPiAwKVxyXG5cdFx0XHRyZXR1cm4gdGhpc1t0aGlzLmxlbmd0aCAtIDFdO1xyXG5cdH07XHJcbn0pO1xyXG5leHBvcnQgZGVmYXVsdCBzdXBwb3J0OyIsImltcG9ydCBFeHRlbmRlciBmcm9tIFwiLi4vLi4vdXRpbHMvRXh0ZW5kZXJcIjtcclxuaW1wb3J0IFV0aWxzIGZyb20gXCIuLi8uLi91dGlscy9VdGlsc1wiO1xyXG5cclxuY29uc3Qgc3VwcG9ydCA9IEV4dGVuZGVyKFwiTWFuaXB1bGF0aW9uU3VwcG9ydFwiLCBQcm90b3R5cGUgPT4ge1x0XHJcblx0UHJvdG90eXBlLmVtcHR5ID0gZnVuY3Rpb24oKXtcclxuXHRcdGxldCBub2RlcyA9IHRoaXMuY2hpbGROb2Rlc1xyXG5cdFx0d2hpbGUobm9kZXMubGVuZ3RoICE9IDApXHRcdFx0XHJcblx0XHRcdG5vZGVzWzBdLnJlbW92ZSh0cnVlKTtcclxuXHRcdFxyXG5cdFx0cmV0dXJuIHRoaXM7XHJcblx0fTtcclxuXHRcclxuXHRQcm90b3R5cGUuY29udGVudCA9IGZ1bmN0aW9uKCl7XHJcblx0XHRyZXR1cm4gdGhpcy5jaGlsZE5vZGVzO1xyXG5cdH07XHRcclxuXHRcclxuXHRQcm90b3R5cGUuaHRtbCA9IGZ1bmN0aW9uKCl7XHJcblx0XHRpZihhcmd1bWVudHMubGVuZ3RoID09IDApXHRcdFx0XHJcblx0XHRcdHJldHVybiB0aGlzLmlubmVySFRNTDtcclxuXHRcdGVsc2UgaWYoYXJndW1lbnRzLmxlbmd0aCA9PSAxICYmIHR5cGVvZiBhcmd1bWVudHNbMF0gPT09IFwiYm9vbGVhblwiKVxyXG5cdFx0XHRpZihhcmd1bWVudHNbMF0pXHJcblx0XHRcdFx0cmV0dXJuIHRoaXMub3V0ZXJIVE1MO1xyXG5cdFx0XHRlbHNlXHJcblx0XHRcdFx0cmV0dXJuIHRoaXMuaW5uZXJIVE1MO1xyXG5cdFx0ZWxzZSBcclxuXHRcdFx0QXJyYXkuZnJvbShhcmd1bWVudHMpLmZvckVhY2goY29udGVudCA9PiB7XHJcblx0XHRcdFx0dGhpcy5lbXB0eSgpO1xyXG5cdFx0XHRcdGlmKHR5cGVvZiBjb250ZW50ID09PSBcInN0cmluZ1wiKVxyXG5cdFx0XHRcdFx0dGhpcy5hcHBlbmQoY29udGVudCk7XHJcblx0XHRcdFx0ZWxzZSBpZihjb250ZW50IGluc3RhbmNlb2YgTm9kZSB8fCBjb250ZW50IGluc3RhbmNlb2YgTm9kZUxpc3QgfHwgY29udGVudCBpbnN0YW5jZW9mIEhUTUxDb2xsZWN0aW9uKXtcclxuXHRcdFx0XHRcdHRoaXMuYXBwZW5kKGNvbnRlbnQpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSk7XHRcdFxyXG5cdFx0XHRcclxuXHRcdHJldHVybiB0aGlzO1xyXG5cdH07XHJcblx0XHJcblx0Y29uc3QgYXBwZW5kID0gZnVuY3Rpb24oKXtcclxuXHRcdGNvbnN0IGFwcGVuZCA9IFByb3RvdHlwZS5hcHBlbmRDaGlsZC5iaW5kKHRoaXMpO1xyXG5cdFx0Zm9yKGxldCBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKyl7XHJcblx0XHRcdGxldCBhcmcgPSBhcmd1bWVudHNbaV07XHJcblx0XHRcdGlmKGFyZyBpbnN0YW5jZW9mIE5vZGUpXHJcblx0XHRcdFx0dGhpcy5hcHBlbmRDaGlsZChhcmcpO1xyXG5cdFx0XHRlbHNlIGlmKHR5cGVvZiBhcmcgPT09IFwic3RyaW5nXCIpXHJcblx0XHRcdFx0Y3JlYXRlKGFyZykuZm9yRWFjaChhcHBlbmQpO1xyXG5cdFx0XHRlbHNlIGlmKHR5cGVvZiBhcmcuZm9yRWFjaCA9PT0gXCJmdW5jdGlvblwiKVxyXG5cdFx0XHRcdGFyZy5mb3JFYWNoKGFwcGVuZCk7XHJcblx0XHR9XHJcblx0fTtcdFxyXG5cdFByb3RvdHlwZS5hcHBlbmQgPSBhcHBlbmQ7XHJcblx0XHJcblx0Y29uc3QgcHJlcGVuZCA9IGZ1bmN0aW9uKGFGaXJzdEVsZW1lbnQsIGFFbGVtZW50KXtcclxuXHRcdHRoaXMuaW5zZXJ0QmVmb3JlKGFFbGVtZW50LCBhRmlyc3RFbGVtZW50KTtcclxuXHR9O1xyXG5cdFByb3RvdHlwZS5wcmVwZW5kID0gZnVuY3Rpb24oKXtcclxuXHRcdGlmKHRoaXMuY2hpbGROb2Rlcy5sZW5ndGggPT0gMClcclxuXHRcdFx0YXBwZW5kLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcblx0XHRlbHNlIHtcclxuXHRcdFx0Y29uc3QgZmlyc3QgPSB0aGlzLmNoaWxkTm9kZXMuZmlyc3QoKTtcclxuXHRcdFx0Y29uc3QgaW5zZXJ0ID0gcHJlcGVuZC5iaW5kKHRoaXMsIGZpcnN0KTtcclxuXHRcdFx0Zm9yKGxldCBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKyl7XHJcblx0XHRcdFx0Y29uc3QgYXJnID0gYXJndW1lbnRzW2ldO1xyXG5cdFx0XHRcdGlmKGFyZyBpbnN0YW5jZW9mIE5vZGUpXHJcblx0XHRcdFx0XHRpbnNlcnQoYXJnKTtcclxuXHRcdFx0XHRlbHNlIGlmKHR5cGVvZiBhcmcgPT09IFwic3RyaW5nXCIpXHJcblx0XHRcdFx0XHRhcmcuZm9yRWFjaChpbnNlcnQpO1xyXG5cdFx0XHRcdGVsc2UgaWYodHlwZW9mIGFyZy5mb3JFYWNoID09PSBcImZ1bmN0aW9uXCIpXHJcblx0XHRcdFx0XHRhcmcuZm9yRWFjaChpbnNlcnQpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fTtcclxuXHRcclxuXHRQcm90b3R5cGUucmVwbGFjZSA9IGZ1bmN0aW9uKCl7XHJcblx0XHRpZihhcmd1bWVudHMubGVuZ3RoIDwgMSlcclxuXHRcdFx0dGhyb3cgbmV3IEVycm9yKFwiSW5zdWZmaWNpZW50IGFyZ3VtZW50cyEgT25lIG9yIHR3byBub2RlcyByZXF1aXJlZCFcIik7XHJcblx0XHRcclxuXHRcdGNvbnN0IHBhcmVudCA9IGFyZ3VtZW50cy5sZW5ndGggPT0gMSA/IHRoaXMucGFyZW50Tm9kZSA6IHRoaXM7XHJcblx0XHRjb25zdCBvbGROb2RlID0gYXJndW1lbnRzLmxlbmd0aCA9PSAxID8gdGhpcyA6IGFyZ3VtZW50c1swXTtcclxuXHRcdGNvbnN0IG5ld05vZGUgPSBhcmd1bWVudHMubGVuZ3RoID09IDEgPyBhcmd1bWVudHNbMF0gOiBhcmd1bWVudHNbMV07XHJcblx0XHRcclxuXHRcdGlmKG5ld05vZGUgaW5zdGFuY2VvZiBBcnJheSB8fCBuZXdOb2RlIGluc3RhbmNlb2YgTm9kZUxpc3QgfHwgbmV3Tm9kZSBpbnN0YW5jZW9mIEhUTUxDb2xsZWN0aW9uKXtcclxuXHRcdFx0bmV3Tm9kZS5mb3JFYWNoKGFJdGVtID0+IHBhcmVudC5pbnNlcnRCZWZvcmUoYUl0ZW0sIG9sZE5vZGUpKTtcclxuXHRcdFx0b2xkTm9kZS5yZW1vdmUoKTtcclxuXHRcdH1cclxuXHRcdGVsc2VcclxuXHRcdFx0cGFyZW50LnJlcGxhY2VDaGlsZChuZXdOb2RlLG9sZE5vZGUpO1xyXG5cdH07XHJcblx0XHJcblx0UHJvdG90eXBlLmFmdGVyID0gZnVuY3Rpb24oKXtcclxuXHRcdGlmKHRoaXMucGFyZW50Tm9kZSA9PSBudWxsKVxyXG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJDYW4ndCBpbnNlcnQgbm9kZXMgYWZ0ZXIgdGhpcyBub2RlISBQYXJlbnQgbm9kZSBub3QgYXZhaWxhYmxlIVwiKTtcclxuXHRcdFxyXG5cdFx0Y29uc3QgcGFyZW50ID0gdGhpcy5wYXJlbnROb2RlO1xyXG5cdFx0Y29uc3QgbmV4dCA9IHRoaXMubmV4dFNpYmxpbmc7XHJcblx0XHRpZihuZXh0KVxyXG5cdFx0XHRQcm90b3R5cGUuYmVmb3JlLmFwcGx5KG5leHQsIGFyZ3VtZW50cyk7XHJcblx0XHRlbHNlXHJcblx0XHRcdFByb3RvdHlwZS5hcHBlbmQuYXBwbHkocGFyZW50LCBhcmd1bWVudHMpO1xyXG5cdH07XHRcclxuXHRcclxuXHRQcm90b3R5cGUuYmVmb3JlID0gZnVuY3Rpb24oKXtcclxuXHRcdGlmKHRoaXMucGFyZW50Tm9kZSA9PSBudWxsKVxyXG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJDYW4ndCBpbnNlcnQgbm9kZXMgYWZ0ZXIgdGhpcyBub2RlISBQYXJlbnQgbm9kZSBub3QgYXZhaWxhYmxlIVwiKTtcclxuXHRcdFxyXG5cdFx0Y29uc3QgcGFyZW50ID0gdGhpcy5wYXJlbnROb2RlO1xyXG5cdFx0Y29uc3QgaW5zZXJ0ZXIgPSAobm9kZSkgPT4ge3BhcmVudC5pbnNlcnRCZWZvcmUobm9kZSwgdGhpcyk7fVxyXG5cdFx0Zm9yKGxldCBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKyl7XHJcblx0XHRcdGNvbnN0IGFyZyA9IGFyZ3VtZW50c1tpXTtcclxuXHRcdFx0aWYoYXJnIGluc3RhbmNlb2YgTm9kZSlcclxuXHRcdFx0XHRpbnNlcnRlcihhcmcpO1xyXG5cdFx0XHRlbHNlIGlmKHR5cGVvZiBhcmcgPT09IFwic3RyaW5nXCIpXHJcblx0XHRcdFx0YXJnLmZvckVhY2goaW5zZXJ0ZXIpO1xyXG5cdFx0XHRlbHNlIGlmKHR5cGVvZiBhcmcuZm9yRWFjaCA9PT0gXCJmdW5jdGlvblwiKVxyXG5cdFx0XHRcdGFyZy5mb3JFYWNoKGluc2VydGVyKTtcclxuXHRcdH1cclxuXHR9O1x0XHJcbn0pO1xyXG5leHBvcnQgZGVmYXVsdCBzdXBwb3J0OyIsImltcG9ydCBFeHRlbmRlciBmcm9tIFwiLi4vLi4vdXRpbHMvRXh0ZW5kZXJcIjtcclxuXHJcbmNvbnN0IHBhcmVudFNlbGVjdG9yID0gLzpwYXJlbnQoXFwoXFxcIihbXlxcKV0qKVxcXCJcXCkpPy9pO1xyXG5jb25zdCBxdWVyeUV4ZWN1dGVyID0gZnVuY3Rpb24oYUVsZW1lbnQsIGFTZWxlY3Rvcil7XHJcblx0bGV0IG1hdGNoID0gcGFyZW50U2VsZWN0b3IuZXhlYyhhU2VsZWN0b3IpO1xyXG5cdGlmKG1hdGNoKXtcclxuXHRcdGxldCByZXN1bHQgPSBhRWxlbWVudDtcclxuXHRcdGlmKG1hdGNoLmluZGV4ID4gMCl7XHJcblx0XHRcdHJlc3VsdCA9IGFFbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYVNlbGVjdG9yLnN1YnN0cigwLCBtYXRjaC5pbmRleCkpO1xyXG5cdFx0XHRpZihyZXN1bHQubGVuZ3RoID09IDApXHJcblx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0fVx0XHJcblx0XHRyZXN1bHQgPSByZXN1bHQucGFyZW50KG1hdGNoWzJdKTtcdFx0XHRcclxuXHRcdGlmKHJlc3VsdCl7XHJcblx0XHRcdGxldCBuZXh0U2VsZWN0b3IgPSBhU2VsZWN0b3Iuc3Vic3RyKG1hdGNoLmluZGV4ICsgbWF0Y2hbMF0ubGVuZ3RoKS50cmltKCk7XHJcblx0XHRcdGlmKG5leHRTZWxlY3Rvci5sZW5ndGggPiAwKVxyXG5cdFx0XHRcdHJlc3VsdCA9IHJlc3VsdC5maW5kKG5leHRTZWxlY3Rvcik7XHJcblx0XHRcdFxyXG5cdFx0XHRyZXR1cm4gcmVzdWx0O1xyXG5cdFx0fVx0XHRcclxuXHR9XHJcblx0ZWxzZVxyXG5cdFx0cmV0dXJuIGFFbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYVNlbGVjdG9yKTtcclxufTtcclxuXHJcblxyXG5jb25zdCBzdXBwb3J0ID0gRXh0ZW5kZXIoXCJRdWVyeVN1cHBvcnRcIiwgUHJvdG90eXBlID0+IHtcdFxyXG5cdFByb3RvdHlwZS5maW5kID0gZnVuY3Rpb24oKSB7XHJcblx0XHRsZXQgbm9kZXMgPSBbXTtcclxuXHRcdGxldCBhcmdzID0gQXJyYXkuZnJvbShhcmd1bWVudHMpO1xyXG5cdFx0bGV0IGFyZyA9IGFyZ3Muc2hpZnQoKTtcclxuXHRcdHdoaWxlKGFyZyl7XHJcblx0XHRcdGlmKHR5cGVvZiBhcmcgPT09IFwic3RyaW5nXCIpe1xyXG5cdFx0XHRcdGxldCByZXN1bHQgPSBxdWVyeUV4ZWN1dGVyKHRoaXMsIGFyZyk7XHJcblx0XHRcdFx0aWYocmVzdWx0KVxyXG5cdFx0XHRcdFx0bm9kZXMucHVzaChyZXN1bHQpO1xyXG5cdFx0XHR9XHJcblx0XHRcdFxyXG5cdFx0XHRhcmcgPSBhcmdzLnNoaWZ0KCk7XHJcblx0XHR9XHJcblx0XHRcclxuXHRcdGxldCByZXN1bHQgPSBOb2RlTGlzdC5mcm9tLmFwcGx5KG51bGwsIG5vZGVzKTtcclxuXHRcdHJldHVybiByZXN1bHQ7XHJcblx0fTtcclxuXHRcclxuXHRQcm90b3R5cGUuaXMgPSBmdW5jdGlvbigpIHtcclxuXHRcdGlmKHRoaXMgaW5zdGFuY2VvZiBEb2N1bWVudCB8fCB0aGlzIGluc3RhbmNlb2YgRG9jdW1lbnRGcmFnbWVudClcclxuXHRcdFx0cmV0dXJuIGZhbHNlO1x0XHRcclxuXHRcdGVsc2UgaWYoYXJndW1lbnRzLmxlbmd0aCA9PSAxKXtcclxuXHRcdFx0aWYodHlwZW9mIGFyZ3VtZW50c1swXSA9PT0gXCJzdHJpbmdcIilcclxuXHRcdFx0XHRyZXR1cm4gdGhpcy5tYXRjaGVzKGFyZ3VtZW50c1swXSk7XHJcblx0XHRcdGVsc2UgaWYodHlwZW9mIGFyZ3VtZW50c1swXS5sZW5ndGggPT09IFwibnVtYmVyXCIpe1xyXG5cdFx0XHRcdGxldCBmaWx0ZXIgPSBhcmd1bWVudHNbMF07XHJcblx0XHRcdFx0Zm9yKGxldCBpID0gMDsgaSA8IGZpbHRlci5sZW5ndGg7IGkrKylcclxuXHRcdFx0XHRcdGlmKHRoaXMubWF0Y2hlcyhmaWx0ZXJbaV0pKVxyXG5cdFx0XHRcdFx0XHRyZXR1cm4gdHJ1ZTtcclxuXHRcdFx0fVx0XHRcdFx0XHJcblx0XHR9XHJcblx0XHRlbHNlIGlmKGFyZ3VtZW50cy5sZW5ndGggPiAxKVxyXG5cdFx0XHRyZXR1cm4gdGhpcy5pcyhBcnJheS5mcm9tKGFyZ3VtZW50cykpO1xyXG5cdFx0XHJcblx0XHRyZXR1cm4gZmFsc2U7XHJcblx0fTtcdFxyXG5cdFxyXG5cdFByb3RvdHlwZS5wYXJlbnQgPSBmdW5jdGlvbigpIHtcclxuXHRcdGlmKCF0aGlzLnBhcmVudE5vZGUpXHJcblx0XHRcdHJldHVybiB1bmRlZmluZWQ7XHRcdFxyXG5cdFx0ZWxzZSBpZih0eXBlb2YgYXJndW1lbnRzWzBdID09PSBcInN0cmluZ1wiKXtcclxuXHRcdFx0bGV0IHBhcmVudCA9IHRoaXMucGFyZW50Tm9kZTtcclxuXHRcdFx0dHJ5e1xyXG5cdFx0XHRcdHdoaWxlKHBhcmVudCAmJiAhcGFyZW50LmlzKGFyZ3VtZW50c1swXSkpXHJcblx0XHRcdFx0XHRwYXJlbnQgPSBwYXJlbnQucGFyZW50KGFyZ3VtZW50c1swXSk7XHJcblx0XHRcdH1jYXRjaCAoZSkge1xyXG5cdFx0XHRcdGNvbnNvbGUuZXJyb3IoXCJ0aGlzOlwiLCB0aGlzLCBcInBhcmVudDpcIiwgcGFyZW50LCBcImVycm9yOlwiLCBlKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRyZXR1cm4gcGFyZW50O1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHRoaXMucGFyZW50Tm9kZTtcclxuXHR9O1xyXG5cdFxyXG5cdFByb3RvdHlwZS5wYXJlbnRzID0gZnVuY3Rpb24oKSB7XHRcdFxyXG5cdFx0bGV0IHJlc3VsdCA9IG5ldyBBcnJheSgpO1xyXG5cdFx0bGV0IHBhcmVudCA9IFByb3RvdHlwZS5wYXJlbnQuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxuXHRcdHdoaWxlKHBhcmVudCl7XHJcblx0XHRcdHJlc3VsdC5wdXNoKHBhcmVudCk7XHJcblx0XHRcdHBhcmVudCA9IFByb3RvdHlwZS5wYXJlbnQuYXBwbHkocGFyZW50LCBhcmd1bWVudHMpO1xyXG5cdFx0fVxyXG5cdFx0XHJcblx0XHRyZXR1cm4gTm9kZUxpc3QuZnJvbShyZXN1bHQpO1xyXG5cdH07XHRcclxuXHJcblx0UHJvdG90eXBlLnNlbGVjdG9yID0gZnVuY3Rpb24oKXtcclxuXHRcdGlmKHRoaXMgaW5zdGFuY2VvZiBEb2N1bWVudCB8fCB0aGlzIGluc3RhbmNlb2YgRG9jdW1lbnRGcmFnbWVudClcclxuXHRcdFx0cmV0dXJuIHVuZGVmaW5lZDtcclxuXHRcdGVsc2UgaWYodGhpcy5pZClcclxuXHRcdFx0cmV0dXJuIFwiI1wiICsgdGhpcy5pZDtcclxuXHRcdGVsc2V7XHRcdFx0XHJcblx0XHRcdGxldCBzZWxlY3RvciA9IHRoaXMudGFnTmFtZS50b0xvd2VyQ2FzZSgpO1xyXG5cdFx0XHRsZXQgcGFyZW50ID0gdGhpcy5wYXJlbnQoKTtcclxuXHRcdFx0aWYocGFyZW50KXtcclxuXHRcdFx0XHRsZXQgc2FtZVRhZ1NpYmxpbmdzID0gcGFyZW50LmZpbmQoXCI6c2NvcGU+XCIgKyBzZWxlY3Rvcik7XHRcdFx0XHJcblx0XHRcdFx0aWYgKHNhbWVUYWdTaWJsaW5ncyBpbnN0YW5jZW9mIE5vZGVMaXN0KSB7XHJcblx0XHRcdFx0XHRsZXQgaW5kZXggPSBzYW1lVGFnU2libGluZ3MuaW5kZXhPZih0aGlzKTtcclxuXHRcdFx0XHRcdGlmIChpbmRleCA+IDApXHJcblx0XHRcdFx0XHRcdHNlbGVjdG9yICs9ICc6bnRoLWNoaWxkKCcgKyAoaW5kZXggKyAxKSArICcpJztcclxuXHRcdFx0XHR9XHRcdFxyXG5cdFx0XHRcdGxldCBwYXJlbnRTZWxlY3RvciA9IHBhcmVudC5zZWxlY3RvcigpO1xyXG5cdFx0XHRcdHJldHVybiBwYXJlbnRTZWxlY3RvciA/IHBhcmVudFNlbGVjdG9yICsgXCI+XCIgKyBzZWxlY3RvciA6IHNlbGVjdG9yO1xyXG5cdFx0XHR9IFxyXG5cdFx0XHRyZXR1cm4gc2VsZWN0b3I7XHJcblx0XHR9XHJcblx0fTtcdFxyXG5cclxuXHRQcm90b3R5cGUuY2xvc2VzdCA9IGZ1bmN0aW9uKGFRdWVyeSkge1x0XHRcdFxyXG5cdFx0bGV0IG5vZGUgPSB0aGlzO1xyXG5cdFx0d2hpbGUobm9kZSl7XHJcblx0XHRcdGxldCBjbG9zZXN0cyA9IG5vZGUuZmluZChhUXVlcnkpO1xyXG5cdFx0XHRpZihjbG9zZXN0cyAmJiBjbG9zZXN0cy5sZW5ndGggPiAwKVxyXG5cdFx0XHRcdHJldHVybiBjbG9zZXN0cztcclxuXHRcdFx0ZWxzZSBpZihub2RlLmlzKGFRdWVyeSkpXHJcblx0XHRcdFx0cmV0dXJuIE5vZGVMaXN0LmZyb20obm9kZSk7XHJcblx0XHRcdFxyXG5cdFx0XHRub2RlID0gbm9kZS5wYXJlbnQoKTtcdFx0XHJcblx0XHR9XHJcblx0fTtcclxuXHRcclxuXHRQcm90b3R5cGUubmVzdGVkID0gZnVuY3Rpb24oYVF1ZXJ5KXtcclxuXHRcdGlmKHRoaXMuaXMoYVF1ZXJ5KSlcclxuXHRcdFx0cmV0dXJuIE5vZGVMaXN0LmZyb20odGhpcyk7XHRcclxuXHRcdFxyXG5cdFx0bGV0IG5lc3RlZCA9IHRoaXMuZmluZChhUXVlcnkpO1xyXG5cdFx0aWYobmVzdGVkICYmIG5lc3RlZC5sZW5ndGggPiAwKVxyXG5cdFx0XHRyZXR1cm4gbmVzdGVkO1xyXG5cdFx0ZWxzZVxyXG5cdFx0XHRyZXR1cm4gTm9kZUxpc3QuZnJvbSh0aGlzLnBhcmVudChhUXVlcnkpKTtcclxuXHR9O1xyXG59KTtcclxuZXhwb3J0IGRlZmF1bHQgc3VwcG9ydDtcclxuXHJcbiIsImltcG9ydCBFeHRlbmRlciBmcm9tIFwiLi4vLi4vdXRpbHMvRXh0ZW5kZXJcIjtcclxuXHJcbmNvbnN0IHN1cHBvcnQgPSBFeHRlbmRlcihcIlJlYWR5RXZlbnRTdXBwb3J0XCIsIFByb3RvdHlwZSA9PiB7XHJcblx0UHJvdG90eXBlLnJlYWR5ID0gZnVuY3Rpb24oYUZ1bmN0aW9uLCBvbmNlKXtcdFxyXG5cdFx0dGhpcy5vbihcInJlYWR5XCIsIGFGdW5jdGlvbiwgb25jZSk7XHJcblx0XHRpZihkb2N1bWVudC5yZWFkeVN0YXRlID09IFwiY29tcGxldGVcIilcdFx0XHRcclxuXHRcdFx0dGhpcy50cmlnZ2VyKFwicmVhZHlcIik7XHJcblx0XHRcclxuXHRcdHJldHVybiB0aGlzO1xyXG5cdH07XHJcblx0XHJcbn0pO1xyXG5leHBvcnQgZGVmYXVsdCBzdXBwb3J0OyIsImltcG9ydCBFeHRlbmRlciBmcm9tIFwiLi4vLi4vdXRpbHMvRXh0ZW5kZXJcIjtcclxuXHJcbmNvbnN0IEhJREVWQUxVRSA9IFwibm9uZVwiO1xyXG5cclxuY29uc3QgaXNIaWRkZW4gPSAoZWxlbWVudCkgPT4ge1xyXG5cdHJldHVybiBlbGVtZW50LnN0eWxlLmRpc3BsYXkgPT09IEhJREVWQUxVRVxyXG59O1xyXG5cclxuY29uc3QgaW5pdCA9IChlbGVtZW50KSA9PiB7XHRcclxuXHRsZXQgZGlzcGxheSA9ICFpc0hpZGRlbihlbGVtZW50KSA/IGVsZW1lbnQuc3R5bGUuZGlzcGxheSA6IFwiXCI7XHJcblx0XHJcblx0ZWxlbWVudC5zaG93ID0gKGZ1bmN0aW9uKCl7XHJcblx0XHR0aGlzLnN0eWxlLmRpc3BsYXkgPSBkaXNwbGF5O1xyXG5cdFx0cmV0dXJuIHRoaXM7XHRcdFxyXG5cdH0pLmJpbmQoZWxlbWVudCk7XHJcblx0XHJcblx0ZWxlbWVudC5oaWRlID0gKGZ1bmN0aW9uKCl7XHJcblx0XHR0aGlzLnN0eWxlLmRpc3BsYXkgPSBISURFVkFMVUU7XHJcblx0XHRyZXR1cm4gdGhpcztcdFx0XHJcblx0fSkuYmluZChlbGVtZW50KTtcclxuXHRcclxuXHRyZXR1cm4gZWxlbWVudDtcclxufTtcclxuXHJcblxyXG5jb25zdCBzdXBwb3J0ID0gRXh0ZW5kZXIoXCJTaG93SGlkZVN1cHBvcnRcIiwgUHJvdG90eXBlID0+IHtcclxuXHRQcm90b3R5cGUuc2hvdyA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0cmV0dXJuIGluaXQodGhpcykuc2hvdy5hcHBseShudWxsLCBhcmd1bWVudHMpXHJcblx0fTtcclxuXHJcblx0UHJvdG90eXBlLmhpZGUgPSBmdW5jdGlvbigpIHtcclxuXHRcdHJldHVybiBpbml0KHRoaXMpLmhpZGUuYXBwbHkobnVsbCwgYXJndW1lbnRzKVxyXG5cdH07XHJcblxyXG5cdFByb3RvdHlwZS50b2dnbGVTaG93ID0gZnVuY3Rpb24oKSB7XHJcblx0XHRyZXR1cm4gaXNIaWRkZW4odGhpcykgPyB0aGlzLnNob3coKSA6IHRoaXMuaGlkZSgpO1xyXG5cdH07XHJcblxyXG59KTtcclxuZXhwb3J0IGRlZmF1bHQgc3VwcG9ydDsiLCJpbXBvcnQgRXh0ZW5kZXIgZnJvbSBcIi4uLy4uL3V0aWxzL0V4dGVuZGVyXCI7XHJcblxyXG5jb25zdCBJbnB1dFR5cGVzID0gW1xyXG5cdHtcclxuXHRcdHNlbGVjdG9yIDogXCJzZWxlY3RcIixcclxuXHRcdGdldCA6IGZ1bmN0aW9uKCl7XHJcblx0XHRcdGNvbnN0IHJlc3VsdCA9IFtdO1xyXG5cdFx0XHR0aGlzLmZpbmQoXCJvcHRpb25cIikuZm9yRWFjaChvcHRpb24gPT4ge1xyXG5cdFx0XHRcdGlmKG9wdGlvbi5zZWxlY3RlZClcclxuXHRcdFx0XHRcdHJlc3VsdC5wdXNoKG9wdGlvbi52YWx1ZSk7XHJcblx0XHRcdH0pO1x0XHRcdFxyXG5cdFx0XHRyZXR1cm4gcmVzdWx0O1xyXG5cdFx0fSxcclxuXHRcdHNldCA6IGZ1bmN0aW9uKCl7XHRcdFx0XHRcclxuXHRcdFx0bGV0IHZhbHVlcyA9IFtdO1xyXG5cdFx0XHRjb25zdCBhcmdzID0gQXJyYXkuZnJvbShhcmd1bWVudHMpO1xyXG5cdFx0XHRsZXQgYXJnID0gYXJncy5zaGlmdCgpO1xyXG5cdFx0XHR3aGlsZShhcmcpe1xyXG5cdFx0XHRcdGlmKEFycmF5LmlzQXJyYXkoYXJnKSlcclxuXHRcdFx0XHRcdHZhbHVlcyA9IHZhbHVlcy5jb25jYXQoYXJnKTtcclxuXHRcdFx0XHRlbHNlXHJcblx0XHRcdFx0XHR2YWx1ZXMucHVzaChhcmcpO1xyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdGFyZyA9IGFyZ3Muc2hpZnQoKTtcclxuXHRcdFx0fVxyXG5cdFx0XHR0aGlzLnZhbHVlID0gdmFsdWVzO1xyXG5cdFx0XHR0aGlzLmZpbmQoXCJvcHRpb25cIikuZm9yRWFjaChvcHRpb24gPT4gb3B0aW9uLnNlbGVjdGVkID0gdmFsdWVzLmluZGV4T2Yob3B0aW9uLnZhbHVlKSA+PSAwKTtcdFx0XHRcclxuXHRcdFx0dGhpcy50cmlnZ2VyKFwiY2hhbmdlZFwiKTtcclxuXHRcdH1cdFx0XHRcclxuXHR9LFxyXG5cdHtcclxuXHRcdHNlbGVjdG9yIDogXCJpbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdLCBpbnB1dFt0eXBlPVxcXCJyYWRpb1xcXCJdXCIsXHJcblx0XHRnZXQgOiBmdW5jdGlvbigpe1xyXG5cdFx0XHRpZih0aGlzLnZhbHVlID09IFwib25cIiB8fCB0aGlzLnZhbHVlID09IFwib2ZmXCIpXHJcblx0XHRcdFx0cmV0dXJuIHRoaXMuY2hlY2tlZDtcclxuXHRcdFx0ZWxzZSBpZih0aGlzLmNoZWNrZWQpXHJcblx0XHRcdFx0cmV0dXJuIHRoaXMudmFsdWU7XHRcdFx0XHRcclxuXHRcdH0sXHJcblx0XHRzZXQgOiBmdW5jdGlvbihhVmFsdWUpe1xyXG5cdFx0XHRpZih0eXBlb2YgYVZhbHVlID09PSBcImJvb2xlYW5cIilcclxuXHRcdFx0XHR0aGlzLmNoZWNrZWQgPSBhVmFsdWU7XHJcblx0XHRcdGVsc2UgaWYodHlwZW9mIGFWYWx1ZSA9PT0gXCJzdHJpbmdcIilcclxuXHRcdFx0XHR0aGlzLmNoZWNrZWQgPSB0aGlzLnZhbHVlID09IGFWYWx1ZTtcclxuXHRcdFx0ZWxzZSBpZihBcnJheS5pc0FycmF5KGFWYWx1ZSkpXHJcblx0XHRcdFx0dGhpcy5jaGVja2VkID0gYVZhbHVlLmluZGV4T2YodGhpcy52YWx1ZSkgPj0gMDtcclxuXHRcdFx0XHJcblx0XHRcdHRoaXMudHJpZ2dlcihcImNoYW5nZWRcIik7XHJcblx0XHR9XHJcblx0fVxyXG5dO1xyXG5cclxuY29uc3QgRGVmYXVsdElucHV0VHlwZSA9IHtcclxuXHRcdGdldCA6IGZ1bmN0aW9uKCl7XHJcblx0XHRcdHJldHVybiB0aGlzLnZhbHVlO1xyXG5cdFx0fSxcclxuXHRcdHNldCA6IGZ1bmN0aW9uKGFWYWx1ZSl7XHJcblx0XHRcdHRoaXMudmFsdWUgPSBhVmFsdWU7XHJcblx0XHRcdHRoaXMudHJpZ2dlcihcImlucHV0XCIpO1xyXG5cdFx0fVx0XHJcbn07XHJcblxyXG5jb25zdCBnZXRJbnB1dFR5cGUgPSBmdW5jdGlvbihhRWxlbWVudCl7XHJcblx0Zm9yKGxldCBpID0gMDsgaSA8IElucHV0VHlwZXMubGVuZ3RoOyBpKyspXHJcblx0XHRpZihhRWxlbWVudC5pcyhJbnB1dFR5cGVzW2ldLnNlbGVjdG9yKSlcclxuXHRcdFx0cmV0dXJuIElucHV0VHlwZXNbaV07XHRcdFxyXG5cdHJldHVybiBEZWZhdWx0SW5wdXRUeXBlO1xyXG59O1xyXG5cclxuXHJcbmNvbnN0IHN1cHBvcnQgPSBFeHRlbmRlcihcIlZhbHVlU3VwcG9ydFwiLCBQcm90b3R5cGUgPT4ge1x0XHJcblx0UHJvdG90eXBlLnZhbCA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0bGV0IHR5cGUgPSBnZXRJbnB1dFR5cGUodGhpcyk7XHJcblx0XHRpZihhcmd1bWVudHMubGVuZ3RoID09IDApXHJcblx0XHRcdHJldHVybiB0eXBlLmdldC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG5cdFx0ZWxzZVxyXG5cdFx0XHR0eXBlLnNldC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG5cdFx0XHRcclxuXHRcdHJldHVybiB0aGlzO1xyXG5cdH07XHRcclxufSk7XHJcbmV4cG9ydCBkZWZhdWx0IHN1cHBvcnQ7IiwiaW1wb3J0IFwiLi9kb20vRXZlbnRUYXJnZXRcIjtcclxuaW1wb3J0IFwiLi9kb20vTm9kZVwiO1xyXG5pbXBvcnQgXCIuL2RvbS9FbGVtZW50XCI7XHJcbmltcG9ydCBcIi4vZG9tL0RvY3VtZW50XCI7XHJcbmltcG9ydCBcIi4vZG9tL0RvY3VtZW50RnJhZ21lbnRcIjtcclxuaW1wb3J0IFwiLi9kb20vSFRNTEVsZW1lbnRcIjtcclxuaW1wb3J0IFwiLi9kb20vSFRNTElucHV0RWxlbWVudFwiO1xyXG5pbXBvcnQgXCIuL2RvbS9IVE1MVGV4dEFyZWFFbGVtZW50XCI7XHJcbmltcG9ydCBcIi4vZG9tL0hUTUxTZWxlY3RFbGVtZW50XCI7XHJcbmltcG9ydCBcIi4vZG9tL05vZGVMaXN0XCI7XHJcbmltcG9ydCBcIi4vZG9tL0h0bWxDb2xsZWN0aW9uXCI7XHJcbmltcG9ydCBcIi4vR2xvYmFsXCI7XHJcbiIsImNvbnN0IERlbGVnYXRlckJ1aWxkZXIgPSBmdW5jdGlvbigpIHtcclxuXHRjb25zdCBhcmdzID0gQXJyYXkuZnJvbShhcmd1bWVudHMpO1xyXG5cdGNvbnN0IGNhbGxiYWNrID0gYXJncy5zaGlmdCgpO1xyXG5cdGNvbnN0IHNvdXJjZSA9IGFyZ3Muc2hpZnQoKTtcclxuXHRhcmdzLmZvckVhY2goIHRhcmdldCA9PntcclxuXHRcdE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHRhcmdldClcclxuXHRcdC5mb3JFYWNoKG5hbWUgPT4ge1xyXG5cdFx0XHRjb25zdCBwcm9wID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIG5hbWUpO1xyXG5cdFx0XHRpZiAodHlwZW9mIHNvdXJjZVtuYW1lXSA9PT0gXCJ1bmRlZmluZWRcIiAmJiB0eXBlb2YgcHJvcC52YWx1ZSA9PT0gXCJmdW5jdGlvblwiKVxyXG5cdFx0XHRcdHNvdXJjZVtuYW1lXSA9IGZ1bmN0aW9uKCl7XHJcblx0XHRcdFx0XHRyZXR1cm4gY2FsbGJhY2suY2FsbCh0aGlzLCBuYW1lLCBhcmd1bWVudHMpO1xyXG5cdFx0XHRcdH07XHRcdFx0XHRcdFx0XHRcdFx0XHRcclxuXHRcdH0pO1xyXG5cdH0pO1xyXG5cdFxyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBEZWxlZ2F0ZXJCdWlsZGVyOyIsImNvbnN0IGV4dGVuZFByb3RvdHlwZSA9IGZ1bmN0aW9uKCl7XHJcblx0Y29uc3QgYXJncyA9IEFycmF5LmZyb20oYXJndW1lbnRzKTtcclxuXHRjb25zdCB0eXBlID0gYXJncy5zaGlmdCgpO1x0XHJcblx0d2hpbGUoYXJncy5sZW5ndGggPiAwKXtcclxuXHRcdGNvbnN0IGV4dGVuZGVyID0gYXJncy5zaGlmdCgpO1xyXG5cdFx0ZXh0ZW5kZXIodHlwZSk7XHJcblx0fVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZXh0ZW5kUHJvdG90eXBlOyIsImltcG9ydCBVdGlscyBmcm9tIFwiLi9VdGlsc1wiO1xyXG5cclxuY29uc3QgRVhURU5TSU9OU19NQVAgPSBVdGlscy5nbG9iYWxWYXIoXCJfX19ET01fQVBJX0VYVEVOU0lPTl9NQVBfX19cIiwge30pO1xyXG5jb25zdCBFeHRlbmRlciA9IGZ1bmN0aW9uKGFOYW1lLCBhRXh0ZW50aW9uKXtcclxuXHRyZXR1cm4gZnVuY3Rpb24oYVR5cGUpe1x0XHJcblx0XHRsZXQgZXh0ZW5zaW9ucyA9IEVYVEVOU0lPTlNfTUFQW2FUeXBlLm5hbWVdO1xyXG5cdFx0aWYoIWV4dGVuc2lvbnMpXHJcblx0XHRcdGV4dGVuc2lvbnMgPSBFWFRFTlNJT05TX01BUFthVHlwZS5uYW1lXSA9IHt9O1x0XHRcclxuXHRcdFxyXG5cdFx0aWYoIWV4dGVuc2lvbnNbYU5hbWVdKXtcclxuXHRcdFx0ZXh0ZW5zaW9uc1thTmFtZV0gPSB0cnVlO1xyXG5cdFx0XHRhRXh0ZW50aW9uKGFUeXBlLnByb3RvdHlwZSk7XHJcblx0XHR9XHJcblx0XHRlbHNlXHJcblx0XHRcdGNvbnNvbGUud2FybihcImR1cGxpY2F0ZWQgbG9hZCBvZiBleHRlbnNpb24gXFxcIlwiICsgYU5hbWUgKyBcIlxcXCIhXCIpO1xyXG5cdH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEV4dGVuZGVyOyIsImNvbnN0IFV0aWxzID0ge1xyXG5cdGdsb2JhbCA6ICgoKSA9PiB7XHJcblx0XHRpZih0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiKSByZXR1cm4gd2luZG93O1xyXG5cdFx0aWYodHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIikgcmV0dXJuIGdsb2JhbDtcclxuXHRcdGlmKHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiKSByZXR1cm4gc2VsZjtcclxuXHRcdHJldHVybiB7fTtcdFx0XHJcblx0fSkoKSxcclxuXHRnbG9iYWxWYXIgOiBmdW5jdGlvbihhTmFtZSwgYUluaXRWYWx1ZSl7XHJcblx0XHRpZihhcmd1bWVudHMubGVuZ3RoID09PSAyICYmIHR5cGVvZiBVdGlscy5nbG9iYWxbYU5hbWVdID09PSBcInVuZGVmaW5lZFwiKVxyXG5cdFx0XHRVdGlscy5nbG9iYWxbYU5hbWVdID0gYUluaXRWYWx1ZTtcclxuXHRcdFxyXG5cdFx0cmV0dXJuIFV0aWxzLmdsb2JhbFthTmFtZV07XHRcdFxyXG5cdH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFV0aWxzOyIsInZhciBnO1xuXG4vLyBUaGlzIHdvcmtzIGluIG5vbi1zdHJpY3QgbW9kZVxuZyA9IChmdW5jdGlvbigpIHtcblx0cmV0dXJuIHRoaXM7XG59KSgpO1xuXG50cnkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIGV2YWwgaXMgYWxsb3dlZCAoc2VlIENTUClcblx0ZyA9IGcgfHwgbmV3IEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKTtcbn0gY2F0Y2ggKGUpIHtcblx0Ly8gVGhpcyB3b3JrcyBpZiB0aGUgd2luZG93IHJlZmVyZW5jZSBpcyBhdmFpbGFibGVcblx0aWYgKHR5cGVvZiB3aW5kb3cgPT09IFwib2JqZWN0XCIpIGcgPSB3aW5kb3c7XG59XG5cbi8vIGcgY2FuIHN0aWxsIGJlIHVuZGVmaW5lZCwgYnV0IG5vdGhpbmcgdG8gZG8gYWJvdXQgaXQuLi5cbi8vIFdlIHJldHVybiB1bmRlZmluZWQsIGluc3RlYWQgb2Ygbm90aGluZyBoZXJlLCBzbyBpdCdzXG4vLyBlYXNpZXIgdG8gaGFuZGxlIHRoaXMgY2FzZS4gaWYoIWdsb2JhbCkgeyAuLi59XG5cbm1vZHVsZS5leHBvcnRzID0gZztcbiIsImltcG9ydCBXYWl0IGZyb20gXCIuL1dhaXQuanNcIjtcblxuY29uc3QgQ0xPU0VfVElNRU9VVCA9IDIwMDA7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb250ZXh0IHtcblx0Y29uc3RydWN0b3IoeyByZXNvbHZlciwgcmVuZGVyZXIsIHRlbXBsYXRlLCBjb250YWluZXIsIHJvb3QsIG1vZGUgPSBcInJlcGxhY2VcIiwgdGFyZ2V0ID0gbnVsbCwgcGFyZW50ID0gbnVsbCB9KSB7XG5cdFx0aWYgKCFyZXNvbHZlcikgdGhyb3cgbmV3IEVycm9yKFwiUGFyYW1ldGVyIFxcXCJyZXNvbHZlclxcXCIgaXMgcmVxdWlyZWQhXCIpO1xuXHRcdGlmICghcmVuZGVyZXIpIHRocm93IG5ldyBFcnJvcihcIlBhcmFtZXRlciBcXFwicmVuZGVyZXJcXFwiIGlzIHJlcXVpcmVkIVwiKTtcblx0XHRpZiAoIXRlbXBsYXRlKSB0aHJvdyBuZXcgRXJyb3IoXCJQYXJhbWV0ZXIgXFxcInRlbXBsYXRlXFxcIiBpcyByZXF1aXJlZCFcIik7XG5cdFx0aWYgKCFjb250YWluZXIpIHRocm93IG5ldyBFcnJvcihcIlBhcmFtZXRlciBcXFwiY29udGFpbmVyXFxcIiBpcyByZXF1aXJlZCFcIik7XG5cdFx0aWYgKCFyb290KSB0aHJvdyBuZXcgRXJyb3IoXCJQYXJhbWV0ZXIgXFxcInJvb3RcXFwiIGlzIHJlcXVpcmVkIVwiKTtcblxuXHRcdHRoaXMucmVhZHlIYW5kbGVzID0gW107XG5cdFx0dGhpcy5jb250ZW50ID0gbnVsbDtcblx0XHR0aGlzLnRlbXBsYXRlID0gdGVtcGxhdGU7XG5cdFx0dGhpcy5jb250YWluZXIgPSBjb250YWluZXI7XG5cdFx0dGhpcy5yZXNvbHZlciA9IHJlc29sdmVyO1xuXHRcdHRoaXMubW9kZSA9IG1vZGU7XG5cdFx0dGhpcy5yZW5kZXJlciA9IHJlbmRlcmVyO1xuXHRcdHRoaXMucm9vdCA9IHJvb3Q7XG5cdFx0dGhpcy50YXJnZXQgPSB0YXJnZXQ7XG5cdFx0dGhpcy5wYXJlbnQgPSBwYXJlbnQ7XG5cdFx0dGhpcy5jbG9zZWQgPSBmYWxzZTtcblx0XHR0aGlzLndhaXQgPSBXYWl0KHRoaXMpO1xuXG5cblx0XHQvKiBleGVjdXRpb24gZmxhZ3MgKi9cblx0XHR0aGlzLnN0b3AgPSBmYWxzZTtcblx0XHR0aGlzLmlnbm9yZSA9IGZhbHNlO1xuXHR9XG5cblx0YXN5bmMgZmluaXNoKGNhbGxiYWNrKSB7XG5cdFx0aWYgKHRoaXMuY2xvc2VkKVxuXHRcdFx0cmV0dXJuOyAvL2NvbnRleHQgaXMgcmVhZHkgYW5kIGNsb3NlZFxuXG5cdFx0aWYgKHRoaXMucGFyZW50KVxuXHRcdFx0dGhpcy5wYXJlbnQuZmluaXNoKGNhbGxiYWNrKTtcblx0XHRlbHNlXG5cdFx0XHR0aGlzLnJlYWR5KGNhbGxiYWNrKTtcblx0fTtcblxuXHRhc3luYyByZWFkeShjYWxsYmFjaykge1xuXHRcdGlmICh0aGlzLmNsb3NlZClcblx0XHRcdHJldHVybjsgLy9jb250ZXh0IGlzIHJlYWR5IGFuZCBjbG9zZWRcblxuXHRcdGlmIChjYWxsYmFjaykge1xuXHRcdFx0aWYgKGNhbGxiYWNrIGluc3RhbmNlb2YgQXJyYXkpXG5cdFx0XHRcdGNhbGxiYWNrLmZvckVhY2goKGNhbGxiYWNrKSA9PiB7IHRoaXMucmVhZHkgPSBjYWxsYmFjazsgfSk7XG5cdFx0XHRlbHNlIGlmIChjYWxsYmFjayBpbnN0YW5jZW9mIFByb21pc2UgfHwgdHlwZW9mIGNhbGxiYWNrID09PSBcImZ1bmN0aW9uXCIpXG5cdFx0XHRcdHRoaXMucmVhZHlIYW5kbGVzLnB1c2goY2FsbGJhY2spO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLmNsb3NlZCA9IHRydWU7XG5cdFx0XHQvL3dhaXQgb2YgYWxsIHN1YiBjb250ZXh0IHRvIGJlIGNsb3NlZCB3aXRoIGFuIG1heGltdW0gYW1vdW50IG9mIHRpbWVcblxuXHRcdFx0aWYgKHRoaXMucmVhZHlIYW5kbGVzLmxlbmd0aCA+IDApIHtcblx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHRhd2FpdCBQcm9taXNlLnJhY2UoW1xuXHRcdFx0XHRcdFx0UHJvbWlzZS5hbGwodGhpcy5yZWFkeUhhbmRsZXMubWFwKGhhbmRsZSA9PiBoYW5kbGUgaW5zdGFuY2VvZiBQcm9taXNlID8gaGFuZGxlIDogaGFuZGxlKHRoaXMpKSksXG5cdFx0XHRcdFx0XHRuZXcgUHJvbWlzZSgocmVqZWN0LCBlcnJvcikgPT4ge1xuXHRcdFx0XHRcdFx0XHRzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRcdFx0XHRcdFx0XHRlcnJvcihuZXcgRXJyb3IoXCJ0aW1lb3V0XCIpKTtcblx0XHRcdFx0XHRcdFx0fSwgMjAwMClcblx0XHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0XSk7XG5cdFx0XHRcdH0gY2F0Y2ggKGUpIHtcblx0XHRcdFx0XHRjb25zb2xlLmVycm9yKGUpO1x0XHRcdFxuXHRcdFx0XHRcdHRocm93IGVcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHR0aGlzLndhaXQuZmluaXNoZWQoKTtcblx0XHR9XG5cdH1cblxuXHRzdWJDb250ZXh0KHsgcmVzb2x2ZXIgPSB0aGlzLnJlc29sdmVyLCByZW5kZXJlciA9IHRoaXMucmVuZGVyZXIsIHRlbXBsYXRlID0gdGhpcy50ZW1wbGF0ZSwgY29udGFpbmVyID0gdGhpcy5jb250YWluZXIsIHJvb3QgPSB0aGlzLnJvb3QsIG1vZGUgPSB0aGlzLm1vZGUsIHRhcmdldCA9IHRoaXMudGFyZ2V0IH0gPSB7fSkge1xuXHRcdGNvbnN0IHN1YiA9IG5ldyBDb250ZXh0KHsgcmVzb2x2ZXIsIHJlbmRlcmVyLCB0ZW1wbGF0ZSwgY29udGFpbmVyLCBtb2RlLCByb290LCB0YXJnZXQsIHBhcmVudDogdGhpcyB9KTtcblx0XHQvL3RoaXMucmVhZHkoc3ViLndhaXQpO1xuXHRcdHJldHVybiBzdWI7XG5cdH1cblxuXHRjbG9uZSh7IHJlc29sdmVyID0gdGhpcy5yZXNvbHZlciwgcmVuZGVyZXIgPSB0aGlzLnJlbmRlcmVyLCB0ZW1wbGF0ZSA9IHRoaXMudGVtcGxhdGUsIGNvbnRhaW5lciA9IHRoaXMuY29udGFpbmVyLCByb290ID0gdGhpcy5yb290LCBtb2RlID0gdGhpcy5tb2RlLCB0YXJnZXQgPSB0aGlzLnRhcmdldCB9ID0ge30pIHtcblx0XHRyZXR1cm4gbmV3IENvbnRleHQoeyByZXNvbHZlciwgcmVuZGVyZXIsIHRlbXBsYXRlLCBjb250YWluZXIsIG1vZGUsIHJvb3QsIHRhcmdldCwgcGFyZW50OiB0aGlzIH0pO1xuXHR9XG59OyIsImNvbnN0IERFRklORURfRElSRUNUSVZFUyA9IFtdO1xuXG5jb25zdCBkZWZpbmVEaXJlY3RpdmUgPSAoeyBkaXJlY3RpdmUgfSkgPT4ge1xuXHRpZiAoIShkaXJlY3RpdmUgaW5zdGFuY2VvZiBEaXJlY3RpdmUpKVxuXHRcdHRocm93IG5ldyBFcnJvcihcIkltcGxlbWVudGF0aW9uIGRvc24ndCBleHRlbmQgRGlyZWN0aXZlIGNsYXNzIVwiKTtcblxuXHRpZiAoZGlyZWN0aXZlLnJhbmsgPCBEaXJlY3RpdmUuTUlOX1JBTkspXG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiVGhlIHJhbmsgb2YgYSBkaXJlY3RpdmUgY2FuJ3QgYmUgbG93ZXIgYXMgXCIgKyBEaXJlY3RpdmUuTUlOX1JBTksgKyBcIiFcIik7XG5cblx0aWYgKGRpcmVjdGl2ZS5yYW5rID4gRGlyZWN0aXZlLk1BWF9SQU5LKVxuXHRcdHRocm93IG5ldyBFcnJvcihcIlRoZSByYW5rIG9mIGEgZGlyZWN0aXZlIGNhbid0IGJlIGdyYXRlciBhcyBcIiArIERpcmVjdGl2ZS5NQVhfUkFOSyArIFwiIVwiKTtcblxuXHRERUZJTkVEX0RJUkVDVElWRVMucHVzaChkaXJlY3RpdmUpO1xuXHRERUZJTkVEX0RJUkVDVElWRVMuc29ydCgoYSwgYikgPT4ge1xuXHRcdGNvbnN0IHBoYXNlID0gYS5waGFzZSAtIGIucGhhc2U7XG5cdFx0aWYocGhhc2UgPT0gMClcblx0XHRcdHJldHVybiBhLnJhbmsgLSBiLnJhbms7XG5cdFx0XHRcblx0XHRyZXR1cm4gcGhhc2U7XG5cdH0pO1xufTtcblxuY29uc3QgUEhBU0UgPSB7XG5cdGluaXQ6IDAsXG5cdGRhdGE6IDEsXG5cdHRlbXBsYXRlOiAyLFxuXHRjb250ZW50OiAzLFxuXHRmaW5pc2g6IDRcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERpcmVjdGl2ZSB7XG5cblx0c3RhdGljIGdldCBQSEFTRSgpIHsgcmV0dXJuIFBIQVNFIH07XG5cdHN0YXRpYyBnZXQgTUlOX1JBTksoKSB7IHJldHVybiAwIH07XG5cdHN0YXRpYyBnZXQgTUFYX1JBTksoKSB7IHJldHVybiAxMDAwMDAgfTtcblxuXHRjb25zdHJ1Y3RvcigpIHsgfTtcblxuXHRnZXQgbmFtZSgpIHsgfVxuXHRnZXQgcmFuaygpIHsgfVxuXHRnZXQgcGhhc2UoKSB7cmV0dXJuIFBIQVNFLmZpbmlzaH1cblxuXHQvKipcblx0ICogbmVlZCB0byBiZSBpbXBsZW1lbnRlZFxuXHQgKiBcblx0ICogcmV0dXJuIERpcmVjdGl2ZVJlc3VsdFxuXHQgKi9cblx0YXN5bmMgZXhlY3V0ZShjb250ZXh0KSB7XG5cdFx0cmV0dXJuIGNvbnRleHQ7XG5cdH1cblxuXG5cdHN0YXRpYyBkZWZpbmUob3B0aW9uKSB7XG5cdFx0ZGVmaW5lRGlyZWN0aXZlKG9wdGlvbik7XG5cdH1cblxuXHRzdGF0aWMgZ2V0IGRpcmVjdGl2ZXMoKSB7XG5cdFx0cmV0dXJuIERFRklORURfRElSRUNUSVZFUztcblx0fVxufTsiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBEaXJlY3RpdmVFbGVtZW50IGV4dGVuZHMgSFRNTEVsZW1lbnR7XG5cdGNvbnN0cnVjdG9yKCl7XG5cdFx0c3VwZXIoKTtcblx0XHR0aGlzLmhpZGRlbiA9IHRydWU7XG5cdH1cblx0XG5cdC8qKlxuXHQgKiBuZWVkIHRvIGJlIGltcGxlbWVudGVkXG5cdCAqIFxuXHQgKi9cblx0YXN5bmMgZXhlY3V0ZSh7dGVtcGxhdGUsIGNvbnRleHR9KXtcblx0XHRjb250ZXh0LmNvbnRlbnQgPSB0ZW1wbGF0ZS5jbG9uZU5vZGUodHJ1ZSk7XG5cdFx0cmV0dXJuIGNvbnRleHQ7XG5cdH07XHRcbn0iLCJpbXBvcnQgXCJAZGVmYXVsdC1qcy9kZWZhdWx0anMtZXh0ZG9tXCI7XG5pbXBvcnQgRXhwcmVzc2lvblJlc29sdmVyIGZyb20gXCJAZGVmYXVsdC1qcy9kZWZhdWx0anMtZXhwcmVzc2lvbi1sYW5ndWFnZS9zcmMvRXhwcmVzc2lvblJlc29sdmVyLmpzXCI7XG5pbXBvcnQgVGVtcGxhdGUgZnJvbSBcIi4vVGVtcGxhdGUuanNcIjtcbmltcG9ydCBDb250ZXh0IGZyb20gXCIuL0NvbnRleHQuanNcIjtcbmltcG9ydCBEaXJlY3RpdmUgZnJvbSBcIi4vRGlyZWN0aXZlLmpzXCI7XG5pbXBvcnQgRWxlbWVudCBmcm9tIFwiLi9FbGVtZW50LmpzXCI7XG5pbXBvcnQgXCIuL2RpcmVjdGl2ZXNcIjtcbmltcG9ydCBcIi4vZWxlbWVudHNcIjtcblxuXG5leHBvcnQgY29uc3QgU0NPUEVTID0ge1xuXHRhcHBsaWNhdGlvbjogXCJhcHBsaWNhdGlvblwiLFxuXHRkYXRhOiBcImRhdGFcIixcblx0cmVuZGVyOiBcInJlbmRlclwiLFxuXHRjb250YWluZXI6IFwiY29udGFpbmVyXCIsXG5cdG5vZGU6IFwibm9kZVwiLFxuXHRkaXJlY3RpdmU6IFwiZGlyZWN0aXZlXCJcbn07XG5cbmNvbnN0IEFQUExJQ0FUSU9OX1NDT1BFX1JFU09MVkVSID0gbmV3IEV4cHJlc3Npb25SZXNvbHZlcih7IG5hbWU6IFNDT1BFUy5hcHBsaWNhdGlvbiB9KTtcblxuY29uc3QgTU9ERVdPUktFUiA9IHtcblx0XCJyZXBsYWNlXCI6IGFzeW5jICh7IGNvbnRhaW5lciwgdGFyZ2V0ID0gbnVsbCwgY29udGVudCB9KSA9PiB7XG5cdFx0aWYgKHRhcmdldCkge1xuXHRcdFx0dGFyZ2V0LnJlcGxhY2UoY29udGVudCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGNvbnRhaW5lci5lbXB0eSgpO1xuXHRcdFx0Y29udGFpbmVyLmFwcGVuZChjb250ZW50KTtcblx0XHR9XG5cdH0sXG5cdFwiYXBwZW5kXCI6IGFzeW5jICh7IGNvbnRhaW5lciwgdGFyZ2V0ID0gbnVsbCwgY29udGVudCB9KSA9PiB7XG5cdFx0aWYgKHRhcmdldClcblx0XHRcdHRhcmdldC5hZnRlcihjb250ZW50KTtcblx0XHRlbHNlXG5cdFx0XHRjb250YWluZXIuYXBwZW5kKGNvbnRlbnQpO1xuXHR9LFxuXHRcInByZXBlbmRcIjogYXN5bmMgKHsgY29udGFpbmVyLCB0YXJnZXQgPSBudWxsLCBjb250ZW50IH0pID0+IHtcblx0XHRpZiAodGFyZ2V0KVxuXHRcdFx0dGFyZ2V0LmJlZm9yZShjb250ZW50KTtcblx0XHRlbHNlXG5cdFx0XHRjb250YWluZXIucHJlcGVuZChjb250ZW50KTtcblx0fVxufTtcblxuY29uc3QgbG9hZFRlbXBsYXRlQ29udGVudCA9IGFzeW5jICh0ZW1wbGF0ZSwgY29udGV4dCwgcmVuZGVyZXIpID0+IHtcblx0aWYgKHRlbXBsYXRlKSB7XG5cdFx0dGVtcGxhdGUgPSBhd2FpdCBUZW1wbGF0ZS5sb2FkKHRlbXBsYXRlKVxuXHRcdHJldHVybiB0ZW1wbGF0ZS5pbXBvcnRDb250ZW50KCk7XG5cdH0gZWxzZSBpZiAoY29udGV4dClcblx0XHRyZXR1cm4gY29udGV4dC50ZW1wbGF0ZTtcblx0ZWxzZSBpZiAocmVuZGVyZXIudGVtcGxhdGUpIHtcblx0XHRyZXR1cm4gYXdhaXQgcmVuZGVyZXIudGVtcGxhdGUuaW1wb3J0Q29udGVudCgpO1xuXHR9XG5cblx0dGhyb3cgbmV3IEVycm9yKFwiTm8gY29udGVudCB0ZW1wbGF0ZSBzcGVjaWZpZWQhXCIpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVuZGVyZXIge1xuXHRjb25zdHJ1Y3Rvcih7IHRlbXBsYXRlLCBkYXRhIH0gPSB7fSkge1xuXHRcdGlmICh0ZW1wbGF0ZSAmJiAhKHRlbXBsYXRlIGluc3RhbmNlb2YgVGVtcGxhdGUpKVxuXHRcdFx0dGhyb3cgbmV3IEVycm9yKFwidGVtcGxhdGUgbXVzdCBiZSBhbiBpbnN0YW5jZSBvZiBUZW1wbGF0ZSFcIik7XG5cblx0XHR0aGlzLnRlbXBsYXRlID0gdGVtcGxhdGU7XG5cdFx0dGhpcy5yZXNvbHZlciA9IG5ldyBFeHByZXNzaW9uUmVzb2x2ZXIoeyBuYW1lOiBTQ09QRVMuZGF0YSwgY29udGV4dDogZGF0YSA/IGRhdGEgOiB7fSwgcGFyZW50OiBBUFBMSUNBVElPTl9TQ09QRV9SRVNPTFZFUiB9KTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAcGFyYW0gXG5cdCAqIFx0XHRjb250YWluZXIgSFRNTEVsZW1lbnQgLT4gdGFyZ2V0IHRvIHJlbmRlciBpblxuXHQgKiBAcGFyYW1cblx0ICogXHRcdGRhdGEgT2JqZWN0fC4uLiAtPiBkYXRhIHRvIHVzZWQgYXQgcmVuZGVyaW5nXG5cdCAqIEBwYXJhbVxuXHQgKiBcdFx0dGVtcGxhdGUgVGVtcGxhdGV8Tm9kZXxOb2RlTGlzdHxIVE1MQ29sbGVjdGlvbnxTdHJpbmcgLT4gdGVtcGxhdGUgdG8gcmVuZGVyXG5cdCAqIEBwYXJhbVxuXHQgKiBcdFx0bW9kZSBcImFwcGVuZFwifFwiaW5zZXJ0XCJ8XCJyZXBsYWNlXCJcblx0ICogQHBhcmFtXG5cdCAqIFx0XHR0YXJnZXRcblx0ICovXG5cdGFzeW5jIHJlbmRlcih7IHRlbXBsYXRlID0gbnVsbCwgZGF0YSA9IG51bGwsIGNvbnRhaW5lciwgcm9vdCwgbW9kZSwgdGFyZ2V0LCBjb250ZXh0ID0gbnVsbCB9KSB7XG5cdFx0dGVtcGxhdGUgPSBhd2FpdCBsb2FkVGVtcGxhdGVDb250ZW50KHRlbXBsYXRlLCBjb250ZXh0LCB0aGlzKTtcblx0XHRsZXQgcmVzb2x2ZXIgPSBuZXcgRXhwcmVzc2lvblJlc29sdmVyKHsgbmFtZTogU0NPUEVTLnJlbmRlciwgY29udGV4dDogZGF0YSwgcGFyZW50OiBjb250ZXh0ID8gY29udGV4dC5yZXNvbHZlciA6IHRoaXMucmVzb2x2ZXIgfSk7XG5cblx0XHRsZXQgcmVuZGVyQ29udGV4dCA9IGNvbnRleHQ7XG5cdFx0aWYgKCFyZW5kZXJDb250ZXh0KVxuXHRcdFx0cmVuZGVyQ29udGV4dCA9IG5ldyBDb250ZXh0KHsgcmVzb2x2ZXIsIHJlbmRlcmVyOiB0aGlzLCB0ZW1wbGF0ZSwgY29udGFpbmVyLCByb290OiByb290ID8gcm9vdCA6IGNvbnRhaW5lciwgbW9kZTogbW9kZSA/IG1vZGUgOiBcInJlcGxhY2VcIiwgdGFyZ2V0IH0pO1xuXHRcdGVsc2Vcblx0XHRcdHJlbmRlckNvbnRleHQgPSByZW5kZXJDb250ZXh0LmNsb25lKHsgcmVzb2x2ZXIsIHRlbXBsYXRlLCBjb250YWluZXIsIHJvb3QsIG1vZGUsIHRhcmdldCB9KTtcblxuXHRcdGxldCByZXN1bHQgPSBudWxsO1xuXHRcdGlmICh0ZW1wbGF0ZSBpbnN0YW5jZW9mIE5vZGUpXG5cdFx0XHRyZXN1bHQgPSBhd2FpdCB0aGlzLnJlbmRlck5vZGUocmVuZGVyQ29udGV4dCk7XG5cdFx0ZWxzZVxuXHRcdFx0cmVzdWx0ID0gYXdhaXQgdGhpcy5yZW5kZXJDb250YWluZXIocmVuZGVyQ29udGV4dClcblxuXHRcdGlmIChyZXN1bHQgaW5zdGFuY2VvZiBDb250ZXh0KVxuXHRcdFx0cmVuZGVyQ29udGV4dCA9IHJlc3VsdDtcblxuXG5cdFx0aWYgKHJlbmRlckNvbnRleHQuY29udGVudCAmJiByZW5kZXJDb250ZXh0Lm1vZGUpIHtcblx0XHRcdGNvbnN0IG1vZGV3b3JrZXIgPSBNT0RFV09SS0VSW3JlbmRlckNvbnRleHQubW9kZV07XG5cdFx0XHRpZiAoIW1vZGV3b3JrZXIpXG5cdFx0XHRcdHRocm93IG5ldyBFcnJvcihcIlRoZSBcXFwiXCIgKyByZW5kZXJDb250ZXh0Lm1vZGUgKyBcIlxcXCIgaXMgbm90IHN1cHBvcnRlZCFcIilcblxuXHRcdFx0YXdhaXQgbW9kZXdvcmtlcihyZW5kZXJDb250ZXh0KTtcblx0XHR9XG5cblx0XHRpZiAoIWNvbnRleHQpXG5cdFx0XHRhd2FpdCByZW5kZXJDb250ZXh0LnJlYWR5KCk7XG5cdFx0ZWxzZVxuXHRcdFx0cmVuZGVyQ29udGV4dC5yZWFkeSgpO1xuXG5cdFx0cmV0dXJuIGNvbnRleHQ7XG5cdH1cblxuXG5cdGFzeW5jIHJlbmRlckNvbnRhaW5lcihjb250ZXh0KSB7XG5cdFx0aWYgKGNvbnRleHQudGVtcGxhdGUgJiYgY29udGV4dC50ZW1wbGF0ZS5sZW5ndGggPiAwKSB7XG5cdFx0XHRjb25zdCByZW5kZXJpbmdzID0gY29udGV4dC50ZW1wbGF0ZS5tYXAobm9kZSA9PiB7XG5cdFx0XHRcdC8vc2VwYXJhdGUgbm9kZSBjb250ZXh0IGZyb20gdGhlIGN1cnJlbnQgY29udGV4dFxuXHRcdFx0XHRjb25zdCByZXNvbHZlciA9IG5ldyBFeHByZXNzaW9uUmVzb2x2ZXIoeyBuYW1lOiBTQ09QRVMubm9kZSwgY29udGV4dDogbnVsbCwgcGFyZW50OiBjb250ZXh0LnJlc29sdmVyIH0pO1xuXHRcdFx0XHRyZXR1cm4gdGhpcy5yZW5kZXJOb2RlKGNvbnRleHQuY2xvbmUoeyB0ZW1wbGF0ZTogbm9kZSwgcmVzb2x2ZXIgfSkpXG5cdFx0XHR9KTtcblx0XHRcdGNvbnN0IHJlc3VsdCA9IGF3YWl0IFByb21pc2UuYWxsKHJlbmRlcmluZ3MpO1xuXHRcdFx0aWYgKCFyZXN1bHQpXG5cdFx0XHRcdHJldHVybiBjb250ZXh0O1xuXG5cdFx0XHRjb250ZXh0LmNvbnRlbnQgPSByZXN1bHRcblx0XHRcdFx0LmZpbHRlcihyZXN1bHQgPT4gISFyZXN1bHQpXG5cdFx0XHRcdC5yZWR1Y2UoKGNvbnRlbnQsIHJlc3VsdCkgPT4ge1xuXHRcdFx0XHRcdGNvbnN0IG5vZGUgPSByZXN1bHQuY29udGVudDtcblx0XHRcdFx0XHRpZiAobm9kZSBpbnN0YW5jZW9mIEFycmF5KVxuXHRcdFx0XHRcdFx0Y29udGVudCA9IGNvbnRlbnQuY29uY2F0KG5vZGUpO1xuXHRcdFx0XHRcdGlmIChub2RlIGluc3RhbmNlb2YgTm9kZUxpc3QgfHwgbm9kZSBpbnN0YW5jZW9mIEhUTUxDb2xsZWN0aW9uKVxuXHRcdFx0XHRcdFx0Y29udGVudCA9IGNvbnRlbnQuY29uY2F0KEFycmF5LmZyb20obm9kZSkpO1xuXHRcdFx0XHRcdGVsc2UgaWYgKG5vZGUgaW5zdGFuY2VvZiBOb2RlKVxuXHRcdFx0XHRcdFx0Y29udGVudC5wdXNoKG5vZGUpO1xuXG5cdFx0XHRcdFx0cmVzdWx0LnJlYWR5KCk7XG5cdFx0XHRcdFx0cmV0dXJuIGNvbnRlbnQ7XG5cdFx0XHRcdH0sIFtdKTtcblxuXHRcdH1cblx0XHRyZXR1cm4gY29udGV4dDtcblx0fVxuXG5cdGFzeW5jIHJlbmRlck5vZGUoY29udGV4dCkge1xuXHRcdHRyeSB7XG5cdFx0XHRjb250ZXh0LnRlbXBsYXRlLm5vcm1hbGl6ZSgpO1xuXHRcdFx0aWYgKGNvbnRleHQudGVtcGxhdGUgaW5zdGFuY2VvZiBFbGVtZW50KVxuXHRcdFx0XHRhd2FpdCBjb250ZXh0LnRlbXBsYXRlLmV4ZWN1dGUoY29udGV4dCk7XG5cdFx0XHRlbHNlXG5cdFx0XHRcdGF3YWl0IHRoaXMuZXhlY3V0ZURpcmVjdGl2ZXMoY29udGV4dCk7XG5cblx0XHRcdGlmICghY29udGV4dC5pZ25vcmUgJiYgY29udGV4dC5jb250ZW50KSB7XG5cdFx0XHRcdGNvbnN0IGNvbnRlbnQgPSBjb250ZXh0LnRlbXBsYXRlLmNoaWxkTm9kZXM7XG5cdFx0XHRcdGlmIChjb250ZW50ICYmIGNvbnRlbnQubGVuZ3RoID4gMCkge1xuXHRcdFx0XHRcdC8vIEBUT0RPIGF3YWl0IG9yIGZpcmUgYW5kIGZvcmdldD8/P1xuXHRcdFx0XHRcdGF3YWl0IGNvbnRleHQucmVuZGVyZXIucmVuZGVyKHsgY29udGV4dDogY29udGV4dC5jbG9uZSh7IHRlbXBsYXRlOiBjb250ZW50LCBjb250YWluZXI6IGNvbnRleHQuY29udGVudCB9KSB9KTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRpZiAoY29udGV4dC5jb250ZW50ICYmIGNvbnRleHQuY29udGVudC50YWdOYW1lICYmIGNvbnRleHQuY29udGVudC50YWdOYW1lID09IFwiSlNUTFwiKVxuXHRcdFx0XHRjb250ZXh0LmNvbnRlbnQgPSBjb250ZXh0LmNvbnRlbnQuY2hpbGROb2RlczsgLy9zcGVjaWFsIGNhc2UgdG8gc3VwcG9ydCB0aGUgb2xkIFwiPGpzdGw+XCIgdGFnLlxuXHRcdFx0XHRcblx0XHR9IGNhdGNoIChlKSB7XG5cdFx0XHRjb25zb2xlLmVycm9yKFwiZXJyb3IgYXQgcmVuZGVyIG5vZGU6XCIsIGUsIGNvbnRleHQpO1xuXHRcdH1cblx0XHRyZXR1cm4gY29udGV4dDtcblx0fVxuXG5cdGFzeW5jIGV4ZWN1dGVEaXJlY3RpdmVzKGNvbnRleHQpIHtcblx0XHQvL2NvbnNvbGUubG9nKFwic2NvcGUgY2hhaW46XCIsIGNvbnRleHQucmVuZGVyZXIuY2hhaW4sIFwicmVzb2x2ZXIgY2hhaW5cIiwgY29udGV4dC5yZW5kZXJlci5yZXNvbHZlci5mdWxsbmFtZSk7XG5cdFx0Y29uc3QgZGlyZWN0aXZlcyA9IERpcmVjdGl2ZS5kaXJlY3RpdmVzO1xuXHRcdGNvbnN0IGxlbmd0aCA9IGRpcmVjdGl2ZXMubGVuZ3RoO1xuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoICYmICFjb250ZXh0LnN0b3A7IGkrKykge1xuXHRcdFx0Y29uc3QgZGlyZWN0aXZlID0gZGlyZWN0aXZlc1tpXTtcblx0XHRcdHRyeSB7XG5cdFx0XHRcdGNvbnN0IHJlc3VsdCA9IGF3YWl0IGRpcmVjdGl2ZS5leGVjdXRlKGNvbnRleHQpO1xuXHRcdFx0XHRpZiAocmVzdWx0IGluc3RhbmNlb2YgQ29udGV4dClcblx0XHRcdFx0XHRjb250ZXh0ID0gcmVzdWx0O1xuXHRcdFx0fSBjYXRjaCAoZSkge1xuXHRcdFx0XHRjb25zb2xlLmVycm9yKFwiZXJyb3IgYXQgZGlyZWN0aXZlOlwiLCBlLCBkaXJlY3RpdmUsIGNvbnRleHQpO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4gY29udGV4dDtcblx0fVxuXG5cdHN0YXRpYyBhc3luYyBidWlsZCh7IHRlbXBsYXRlLCBkYXRhIH0gPSB7fSkge1xuXHRcdGlmICh0ZW1wbGF0ZSAmJiB0ZW1wbGF0ZSBpbnN0YW5jZW9mIFByb21pc2UpXG5cdFx0XHR0ZW1wbGF0ZSA9IGF3YWl0IHRlbXBsYXRlO1xuXG5cdFx0dGVtcGxhdGUgPSB0ZW1wbGF0ZSA/IGF3YWl0IFRlbXBsYXRlLmxvYWQodGVtcGxhdGUpIDogbnVsbDtcblx0XHRyZXR1cm4gbmV3IFJlbmRlcmVyKHsgdGVtcGxhdGUsIGRhdGEgfSk7XG5cdH07XG5cblx0c3RhdGljIGFzeW5jIHJlbmRlcih7IGNvbnRhaW5lciwgZGF0YSwgdGVtcGxhdGUsIG1vZGUsIHRhcmdldCB9KSB7XG5cdFx0Y29uc3QgcmVuZGVyZXIgPSBuZXcgUmVuZGVyZXIoeyB0ZW1wbGF0ZSwgZGF0YSB9KTtcblx0XHRyZXR1cm4gcmVuZGVyZXIucmVuZGVyKHsgY29udGFpbmVyLCBtb2RlLCB0YXJnZXQgfSk7XG5cdH1cbn0iLCJpbXBvcnQgXCJAZGVmYXVsdC1qcy9kZWZhdWx0anMtY29tbW9uLXV0aWxzL3NyYy9qYXZhc2NyaXB0L1N0cmluZy5qc1wiO1xuXG5jb25zdCBDQUNIRSA9IHt9O1xuY29uc3QgZ2V0S2V5ID0gKHRlbXBsYXRlLCBjYWNoZSwgYWxpYXMpID0+IHtcblx0aWYoIWNhY2hlKVxuXHRcdHJldHVybiBudWxsO1xuXHRcblx0bGV0IGtleSA9IG51bGw7XG5cdGlmKGFsaWFzKVxuXHRcdGtleSA9IGFsaWFzO1x0XG5cdGVsc2UgaWYodHlwZW9mIHRlbXBsYXRlID09PSBcInN0cmluZ1wiKVxuXHRcdGtleSA9IHRlbXBsYXRlO1xuXHRlbHNlIGlmKHRlbXBsYXRlIGluc3RhbmNlb2YgVVJMKVxuXHRcdGtleSA9IHRlbXBsYXRlLnRvU3RyaW5nKCk7XG5cdGVsc2UgaWYodGVtcGxhdGUgaW5zdGFuY2VvZiBIVE1MRWxlbWVudClcblx0XHRrZXkgPSB0ZW1wbGF0ZS5zZWxlY3RvcigpO1xuXHRcblx0aWYoa2V5KVxuXHRcdHJldHVybiBrZXkuaGFzaGNvZGUoKTtcblx0XG5cdHJldHVybiBudWxsO1xufTtcblxuY29uc3QgZnJvbVVSTCA9IGFzeW5jICh1cmwsIGNhY2hlLCBrZXkpID0+IHtcblx0Y29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwudG9TdHJpbmcoKSk7XG5cdGNvbnN0IHNvdXJjZSA9IGF3YWl0IHJlc3BvbnNlLnRleHQoKTtcblx0cmV0dXJuIGZyb21Tb3VyY2Uoc291cmNlLCBjYWNoZSwga2V5KTtcbn07XG5cbmNvbnN0IGZyb21Tb3VyY2UgPSBhc3luYyAoc291cmNlLCBjYWNoZSwga2V5KSA9PiB7XG5cdHJldHVybiBmcm9tRWxlbWVudChjcmVhdGUoc291cmNlLCB0cnVlKSwgY2FjaGUsIGtleSk7XG59O1xuXG5jb25zdCBmcm9tRWxlbWVudCA9IGFzeW5jIChlbGVtZW50LCBjYWNoZSwga2V5KSA9PiB7XHRcblx0bGV0IHRlbXBsYXRlID0gbnVsbFxuXHRpZihlbGVtZW50IGluc3RhbmNlb2YgSFRNTFRlbXBsYXRlRWxlbWVudClcdFx0XHRcblx0XHR0ZW1wbGF0ZSA9IG5ldyBUZW1wbGF0ZShlbGVtZW50KTtcblx0ZWxzZSB7XG5cdFx0dGVtcGxhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGVtcGxhdGVcIik7XG5cdFx0aWYoZWxlbWVudCBpbnN0YW5jZW9mIE5vZGUgfHwgZWxlbWVudCBpbnN0YW5jZW9mIE5vZGVMaXN0IHx8IGVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MQ29sbGVjdGlvbiB8fCBlbGVtZW50IGluc3RhbmNlb2YgQXJyYXkpXG5cdFx0XHR0ZW1wbGF0ZS5hcHBlbmQoZWxlbWVudCk7XG5cdFx0ZWxzZVxuXHRcdFx0dGhyb3cgbmV3IEVycm9yKFwiVGVtcGxhdGUgdHlwZSBpcyBub3Qgc3VwcG9ydGVkIVwiKTtcdFx0XHRcblx0XHRcblx0XHR0ZW1wbGF0ZSA9IG5ldyBUZW1wbGF0ZSh0ZW1wbGF0ZSwga2V5KTtcblx0fVxuXHRcblx0aWYoIXRlbXBsYXRlKVxuXHRcdHRocm93IG5ldyBFcnJvcihcIlRlbXBsYXRlIGNhbid0IGxvYWRlZCFcIik7XG5cdFxuXHRpZihjYWNoZSAmJiBrZXkpXG5cdFx0Q0FDSEVba2V5XSA9IHRlbXBsYXRlO1xuXHRcblx0cmV0dXJuIHRlbXBsYXRlO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGVtcGxhdGUge1x0XG5cdGNvbnN0cnVjdG9yKHRlbXBsYXRlLCBrZXkpe1x0XHRcblx0XHR0aGlzLnRlbXBsYXRlID0gdGVtcGxhdGU7XG5cdFx0dGhpcy5rZXkgPSBrZXk7XHRcblx0fVxuXHRcblx0aW1wb3J0Q29udGVudChkb2M9ZG9jdW1lbnQpe1xuXHRcdGxldCBpbXBvcnRlZCA9IGRvYy5pbXBvcnROb2RlKHRoaXMudGVtcGxhdGUsIHRydWUpO1xuXHRcdHJldHVybiBpbXBvcnRlZC5jb250ZW50LmNoaWxkTm9kZXM7XG5cdH1cblx0XG5cdHJlbW92ZSgpIHtcblx0XHRpZih0aGlzLmtleSAmJiBDQUNIRVt0aGlzLmtleV0pXG5cdFx0XHRkZWxldGUgQ0FDSEVbdGhpcy5rZXldO1x0XHRcblx0fTtcblxuXHRzdGF0aWMgYXN5bmMgZmV0Y2godXJsLCBjYWNoZSA9IHRydWUsIGFsaWFzID0gbnVsbCl7XG5cdFx0aWYodHlwZW9mIHVybCA9PT0gXCJzdHJpbmdcIil7XG5cdFx0XHRyZXR1cm4gVGVtcGxhdGUubG9hZChuZXcgVVJMKHVybCwgbG9hY3Rpb24pLCBjYWNoZSwgYWxpYXMpO1xuXHRcdH1lbHNlIGlmKHVybCBpbnN0YW5jZW9mIFVSTClcblx0XHRcdHJldHVybiBUZW1wbGF0ZS5sb2FkKHVybCwgY2FjaGUsIGFsaWFzKTtcblxuXHRcdG5ldyBFcnJvcihcIlRoZSB1cmwgaXNuJ3QgYSBhbGxvd2VkIHR5cGUhIC0+IFtTdHJpbmd8VVJMXSByZXF1aXJlZCFcIik7XG5cdH1cblx0XG5cdHN0YXRpYyBhc3luYyBsb2FkKHRlbXBsYXRlLCBjYWNoZSA9IHRydWUsIGFsaWFzID0gbnVsbCl7XG5cdFx0aWYodGVtcGxhdGUgaW5zdGFuY2VvZiBUZW1wbGF0ZSlcblx0XHRcdHJldHVybiB0ZW1wbGF0ZTtcblx0XHRcblx0XHRjb25zdCBrZXkgPSBnZXRLZXkodGVtcGxhdGUsIGNhY2hlLCBhbGlhcyk7XG5cdFx0aWYoa2V5ICYmIENBQ0hFW2tleV0pXG5cdFx0XHRyZXR1cm4gQ0FDSEVba2V5XTtcblx0XHRlbHNlIGlmKHR5cGVvZiB0ZW1wbGF0ZSA9PT0gXCJzdHJpbmdcIil7XG5cdFx0XHRyZXR1cm4gZnJvbVNvdXJjZSh0ZW1wbGF0ZSwgY2FjaGUsIGtleSk7XG5cdFx0fWVsc2UgaWYodGVtcGxhdGUgaW5zdGFuY2VvZiBVUkwpXG5cdFx0XHRyZXR1cm4gYXdhaXQgZnJvbVVSTCh0ZW1wbGF0ZSwgY2FjaGUsIGtleSk7XG5cdFx0ZWxzZSBpZih0ZW1wbGF0ZSBpbnN0YW5jZW9mIE5vZGUgfHwgdGVtcGxhdGUgaW5zdGFuY2VvZiBOb2RlTGlzdCB8fCB0ZW1wbGF0ZSBpbnN0YW5jZW9mIEhUTUxDb2xsZWN0aW9uIHx8IHRlbXBsYXRlIGluc3RhbmNlb2YgSFRNTFRlbXBsYXRlRWxlbWVudClcblx0XHRcdHJldHVybiBmcm9tRWxlbWVudCh0ZW1wbGF0ZSwgY2FjaGUsIGtleSk7XG5cdFx0XG5cdFx0bmV3IEVycm9yKFwiVGhlIHRlbXBsYXRlIGlzbid0IGEgYWxsb3dlZCB0eXBlISAtPiBbU3RyaW5nfFVSTHxOb2RlfE5vZGVMaXN0fEhUTUxDb2xsZWN0aW9ufFRlbXBsYXRlXSByZXF1aXJlZCFcIik7XG5cdH1cbn07XG4iLCJleHBvcnQgZGVmYXVsdCAob2JqZWN0KSA9PiB7XG5cdGxldCBmaW5pc2hlZCA9IG51bGw7XG5cdGNvbnN0IHdhaXQgPSAgbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcblx0XHRmaW5pc2hlZCA9IHJlc29sdmU7XG5cdH0pO1xuXHR3YWl0Lm9iamVjdCA9IG9iamVjdDtcblx0XG5cdHdhaXQuZmluaXNoZWQgPSBhc3luYyAoKSA9PiB7XG5cdFx0YXdhaXQgZmluaXNoZWQoKTtcblx0fTtcblx0XG5cdHJldHVybiB3YWl0O1xufTsiLCJpbXBvcnQgRGlyZWN0aXZlIGZyb20gXCIuLi9EaXJlY3RpdmUuanNcIjtcblxuY29uc3QgQVRUUklCVVRFX05BTUUgPSAvKGpzdGwpPyhcXD8pPyhAKT8oW15cXD9AXSspL2k7XG5cbmNvbnN0IGJpbmRBdHRyaWJ1dGUgPSBhc3luYyAoeyBjb25kaXRpb24sIG5hbWUsIHZhbHVlLCBjb250ZXh0IH0pID0+IHtcblx0Y29uc3QgeyByZXNvbHZlciwgY29udGVudCwgdGVtcGxhdGUgfSA9IGNvbnRleHQ7XG5cdFx0XG5cdGxldCBhdHRyaWJ1dGUgPSAhY29uZGl0aW9uID8gdmFsdWUgOiB0ZW1wbGF0ZS5hdHRyKG5hbWUpO1xuXHRjb25kaXRpb24gPSBjb25kaXRpb24gPyB2YWx1ZSA6IHRlbXBsYXRlLmF0dHIoXCI/XCIgKyBuYW1lKTtcblx0Y29uc3QgaGFzVmFsdWUgPSBpc1ZhbHVlKGF0dHJpYnV0ZSk7XG5cdFxuXHRpZiAoY29uZGl0aW9uICYmIGhhc1ZhbHVlKSB7XG5cdFx0Y29uZGl0aW9uID0gYXdhaXQgcmVzb2x2ZXIucmVzb2x2ZShjb25kaXRpb24sIGZhbHNlKTtcblx0XHRpZiAoY29uZGl0aW9uID09PSB0cnVlKVxuXHRcdFx0Y29udGVudC5hdHRyKG5hbWUsIGF3YWl0IHJlc29sdmVyLnJlc29sdmVUZXh0KGF0dHJpYnV0ZSwgYXR0cmlidXRlKSk7XG5cdH0gZWxzZSBpZiAoY29uZGl0aW9uKSB7XG5cdFx0Y29uZGl0aW9uID0gYXdhaXQgcmVzb2x2ZXIucmVzb2x2ZShjb25kaXRpb24sIGZhbHNlKTtcblx0XHRpZiAoY29uZGl0aW9uID09PSB0cnVlKVxuXHRcdFx0Y29udGVudC5hdHRyKG5hbWUsIHRydWUpO1xuXHR9IGVsc2UgaWYgKGhhc1ZhbHVlKSB7XG5cdFx0Y29udGVudC5hdHRyKG5hbWUsIGF3YWl0IHJlc29sdmVyLnJlc29sdmVUZXh0KGF0dHJpYnV0ZSwgYXR0cmlidXRlKSk7XG5cdH1cbn07XG5cbmNvbnN0IGlzVmFsdWUgPSAodmFsdWUpID0+IHtcblx0cmV0dXJuIHZhbHVlICE9IG51bGwgJiYgdHlwZW9mIHZhbHVlICE9PSBcInVuZGVmaW5lZFwiO1x0XG59O1xuXG5jb25zdCBiaW5kRXZlbnQgPSBhc3luYyAoeyBjb25kaXRpb24sIG5hbWUsIHZhbHVlLCBjb250ZXh0IH0pID0+IHtcblx0Y29uc3QgeyByZXNvbHZlciwgdGVtcGxhdGUgfSA9IGNvbnRleHQ7XG5cdFxuXHRjb25kaXRpb24gPSBjb25kaXRpb24gPyB2YWx1ZSA6IHRlbXBsYXRlLmF0dHIoXCI/QFwiICsgbmFtZSk7XG5cdGxldCBoYW5kbGUgPSAhY29uZGl0aW9uID8gdmFsdWUgOiB0ZW1wbGF0ZS5hdHRyKFwiQFwiKyBuYW1lKTtcblx0bGV0IHNwbGl0ID0gbmFtZS5zcGxpdChcIjpcIik7XG5cdGNvbnN0IGV2ZW50ID0gc3BsaXQuc2hpZnQoKTtcblx0Y29uc3QgdHlwZSA9IHNwbGl0LnNoaWZ0KCkgfHwgXCJkZWZhdWx0XCI7XG5cdFxuXG5cdGlmIChjb25kaXRpb24gJiYgaGFuZGxlKXtcblx0XHRpZihhd2FpdCByZXNvbHZlci5yZXNvbHZlKGNvbmRpdGlvbiwgZmFsc2UpID09IHRydWUpXG5cdFx0XHRhd2FpdCBiaW5kaW5nKHtldmVudCwgdHlwZSwgaGFuZGxlLCBjb250ZXh0IH0pO1xuXHR9XG5cdGVsc2UgaWYgKGhhbmRsZSlcblx0XHRhd2FpdCBiaW5kaW5nKHtldmVudCwgdHlwZSwgaGFuZGxlLCBjb250ZXh0IH0pO1xufTtcblxuY29uc3QgYmluZGluZyA9IGFzeW5jICh7ZXZlbnQsIHR5cGUsIGhhbmRsZSwgY29udGV4dCB9KSA9PiB7XG5cdGNvbnN0IHsgcmVzb2x2ZXIsIGNvbnRlbnR9ID0gY29udGV4dDtcblx0XHRcblx0aWYodHlwZSA9PSBcImRlbGVnYXRlXCIpe1xuXHRcdGNvbnN0IGV2ZW50aGFuZGxlID0gYXdhaXQgcmVzb2x2ZXIucmVzb2x2ZVRleHQoaGFuZGxlLCBoYW5kbGUpO1xuXHRcdGNvbnRlbnQub24oZXZlbnQsIGRlbGVnYXRlcihldmVudGhhbmRsZSkpO1xuXHR9IGVsc2Uge1x0XHRcblx0XHRjb25zdCBldmVudGhhbmRsZSA9IGF3YWl0IHJlc29sdmVyLnJlc29sdmUoaGFuZGxlLCBoYW5kbGUpO1xuXHRcblx0XHRpZighZXZlbnRoYW5kbGUpXG5cdFx0XHRjb25zb2xlLmVycm9yKG5ldyBFcnJvcihcIkNhbid0IHJlc29sdmUgXFxcIlwiICsgaGFuZGxlICsgXCJcXFwiIHRvIGV2ZW50IGhhbmRsZSFcIikpXG5cdFx0ZWxzZSBpZih0eXBlb2YgZXZlbnRoYW5kbGUgPT09IFwiZnVuY3Rpb25cIilcblx0XHRcdGNvbnRlbnQub24oZXZlbnQsIGV2ZW50aGFuZGxlKTtcblx0XHRlbHNlIGlmKHR5cGVvZiBldmVudGhhbmRsZSA9PT0gXCJzdHJpbmdcIilcblx0XHRcdGNvbnRlbnQub24oZXZlbnQsIGRlbGVnYXRlcihldmVudGhhbmRsZSkpO1xuXHRcdGVsc2UgaWYodHlwZW9mIGV2ZW50aGFuZGxlID09PSBcIm9iamVjdFwiKXtcdFxuXHRcdFx0Y29uc3Qge2NhcHR1cmU9ZmFsc2UsIHBhc3NpdmU9ZmFsc2UsIG9uY2U9ZmFsc2V9ID0gaGFuZGxlO1x0XHRcblx0XHRcdGNvbnRlbnQub24oZXZlbnQsIGV2ZW50aGFuZGxlLmV2ZW50SGFuZGxlLCB7Y2FwdHVyZSwgcGFzc2l2ZSwgb25jZX0pO1xuXHRcdH1cblx0fVxufTtcblxuY29uc3QgZGVsZWdhdGVyID0gZnVuY3Rpb24oZGVsZWdhdGUpIHtcblx0cmV0dXJuIGZ1bmN0aW9uKGV2ZW50KSB7XG5cdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblx0XHRpZihldmVudC5jdXJyZW50VGFyZ2V0KVx0XG5cdFx0XHRldmVudC5jdXJyZW50VGFyZ2V0LnRyaWdnZXIoZGVsZWdhdGUsIGV2ZW50KTtcblx0XHRlbHNlXG5cdFx0XHRldmVudC50YXJnZXQudHJpZ2dlcihkZWxlZ2F0ZSwgZXZlbnQpO1xuXHR9O1xufTtcblxuXG5jbGFzcyBBdHRyaWJ1dGUgZXh0ZW5kcyBEaXJlY3RpdmUge1xuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRzdXBlcigpO1xuXHR9XG5cblx0Z2V0IG5hbWUoKSB7IHJldHVybiBcImF0dHJpYnV0ZVwiIH1cblx0Z2V0IHJhbmsoKSB7IHJldHVybiBEaXJlY3RpdmUuTUlOX1JBTksgfVxuXHRnZXQgcGhhc2UoKSB7IHJldHVybiBEaXJlY3RpdmUuUEhBU0UuY29udGVudCB9XG5cblxuXHRhc3luYyBleGVjdXRlKGNvbnRleHQpIHtcblx0XHRjb25zdCB7IHRlbXBsYXRlIH0gPSBjb250ZXh0O1xuXHRcdGlmICghKHRlbXBsYXRlIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpKVxuXHRcdFx0cmV0dXJuIGNvbnRleHQ7XG5cblx0XHRjb25zdCBwcm9jZXNzZWQgPSBuZXcgU2V0KCk7XG5cdFx0Zm9yIChjb25zdCBhdHRyaWJ1dGUgb2YgdGVtcGxhdGUuYXR0cmlidXRlcykge1xuXHRcdFx0Y29uc3QgWywganN0bCwgY29uZGl0aW9uLCBldmVudCwgbmFtZV0gPSBBVFRSSUJVVEVfTkFNRS5leGVjKGF0dHJpYnV0ZS5uYW1lKTtcblx0XHRcdGlmICghanN0bCAmJiAhcHJvY2Vzc2VkLmhhcyhuYW1lKSkge1xuXHRcdFx0XHRjb25zdCB2YWx1ZSA9IGF0dHJpYnV0ZS52YWx1ZTtcblx0XHRcdFx0XHRcdFx0XHRcblx0XHRcdFx0aWYgKGV2ZW50KVxuXHRcdFx0XHRcdGF3YWl0IGJpbmRFdmVudCh7IGNvbmRpdGlvbiwgZXZlbnQsIG5hbWUsIHZhbHVlLCBjb250ZXh0IH0pXG5cdFx0XHRcdGVsc2Vcblx0XHRcdFx0XHRhd2FpdCBiaW5kQXR0cmlidXRlKHsgY29uZGl0aW9uLCBuYW1lLCB2YWx1ZSwgY29udGV4dCB9KVxuXHRcdFx0fVxuXHRcdFx0cHJvY2Vzc2VkLmFkZChuYW1lKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gY29udGV4dDtcblx0fVxufVxuXG5EaXJlY3RpdmUuZGVmaW5lKHsgZGlyZWN0aXZlOiBuZXcgQXR0cmlidXRlKCkgfSk7IiwiaW1wb3J0IERpcmVjdGl2ZSBmcm9tIFwiLi4vRGlyZWN0aXZlLmpzXCI7XG5cbmNsYXNzIENob29zZSBleHRlbmRzIERpcmVjdGl2ZSB7XG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHN1cGVyKCk7XG5cdH1cblxuXHRnZXQgbmFtZSgpIHsgcmV0dXJuIFwiY2hvb3NlXCIgfVxuXHRnZXQgcmFuaygpIHsgcmV0dXJuIERpcmVjdGl2ZS5NSU5fUkFOSyArIDEgfVxuXHRnZXQgcGhhc2UoKSB7IHJldHVybiBEaXJlY3RpdmUuUEhBU0UudGVtcGxhdGUgfVxuXG5cdGFzeW5jIGV4ZWN1dGUoY29udGV4dCkge1xuXHRcdGlmICghKGNvbnRleHQudGVtcGxhdGUgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkgfHwgIWNvbnRleHQudGVtcGxhdGUuaGFzQXR0cmlidXRlKFwianN0bC1jaG9vc2VcIikgfHwgY29udGV4dC50ZW1wbGF0ZS5jaGlsZHJlbi5sZW5ndGggPT0gMClcblx0XHRcdHJldHVybiBjb250ZXh0O1xuXG5cdFx0Y29uc3QgeyB0ZW1wbGF0ZSwgcmVzb2x2ZXIgfSA9IGNvbnRleHQ7XG5cdFx0bGV0IHJlc29sdmVkID0gZmFsc2U7XG5cdFx0Y29uc3Qgd2hlbnMgPSB0ZW1wbGF0ZS5maW5kKFwiOnNjb3BlID4gW2pzdGwtd2hlbl1cIik7XG5cdFx0Y29uc3QgbGVuZ3RoID0gd2hlbnMubGVuZ3RoO1xuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcblx0XHRcdGNvbnN0IG5vZGUgPSB3aGVuc1tpXTtcblx0XHRcdGlmICghcmVzb2x2ZWQgJiYgKGF3YWl0IHJlc29sdmVyLnJlc29sdmUobm9kZS5hdHRyKFwianN0bC13aGVuXCIpLCBmYWxzZSkpKVxuXHRcdFx0XHRyZXNvbHZlZCA9IHRydWU7XG5cdFx0XHRlbHNlXG5cdFx0XHRcdG5vZGUucmVtb3ZlKCk7XG5cdFx0fVxuXG5cdFx0aWYgKHJlc29sdmVkKVxuXHRcdFx0dGVtcGxhdGUuZmluZChcIjpzY29wZSA+IFtqc3RsLW90aGVyd2lzZV1cIikucmVtb3ZlKCk7XG5cblx0XHRyZXR1cm4gY29udGV4dDtcblx0fVxufVxuXG5EaXJlY3RpdmUuZGVmaW5lKHsgZGlyZWN0aXZlOiBuZXcgQ2hvb3NlKCkgfSk7IiwiaW1wb3J0IERpcmVjdGl2ZSBmcm9tIFwiLi4vRGlyZWN0aXZlLmpzXCI7XG5pbXBvcnQgRXhwcmVzc2lvblJlc29sdmVyIGZyb20gXCJAZGVmYXVsdC1qcy9kZWZhdWx0anMtZXhwcmVzc2lvbi1sYW5ndWFnZS9zcmMvRXhwcmVzc2lvblJlc29sdmVyLmpzXCI7XG5cbmNvbnN0IE1PREVTID0ge1xuXHRcInJlbW90ZVwiOiBhc3luYyAoeyBkYXRhLCBjb250ZXh0IH0pID0+IHtcdFx0XG5cdFx0Y29uc3Qge3Jlc29sdmVyLCB0ZW1wbGF0ZX0gPSBjb250ZXh0O1xuXHRcdGRhdGEgPSBhd2FpdCByZXNvbHZlci5yZXNvbHZlVGV4dChkYXRhKTtcblx0XHRkYXRhID0gbmV3IFVSTChkYXRhLCBsb2NhdGlvbi5vcmlnaW4pO1xuXHRcdGxldCBvcHRpb24gPSBhd2FpdCByZXNvbHZlci5yZXNvbHZlVGV4dCh0ZW1wbGF0ZS5hdHRyKFwianN0bC1kYXRhLW9wdGlvblwiKSB8fCBcInt9XCIpO1xuXHRcdG9wdGlvbiA9IEpTT04ucGFyc2Uob3B0aW9uKTtcblxuXHRcdGRhdGEgPSBhd2FpdCBmZXRjaChkYXRhLnRvU3RyaW5nKCksIG9wdGlvbik7XG5cdFx0cmV0dXJuIGRhdGEuanNvbigpO1xuXHR9LFx0XG5cdFwic2V0XCI6IGFzeW5jICh7IGRhdGEsIGNvbnRleHQgfSkgPT4ge1xuXHRcdGNvbnN0IHtyZXNvbHZlcn0gPSBjb250ZXh0O1xuXHRcdFxuXHRcdGRhdGEgPSBhd2FpdCByZXNvbHZlci5yZXNvbHZlKGRhdGEpO1xuXHRcdHJldHVybiBkYXRhO1xuXHR9LFxuXHRcImRpcmVjdFwiOiBhc3luYyAoeyBkYXRhLCBjb250ZXh0IH0pID0+IHtcblx0XHRjb25zdCB7cmVzb2x2ZXJ9ID0gY29udGV4dDtcblx0XHRcblx0XHRkYXRhID0gYXdhaXQgcmVzb2x2ZXIucmVzb2x2ZVRleHQoZGF0YSk7XG5cdFx0cmV0dXJuIGRhdGE7XG5cdH1cbn07XG5cbmNvbnN0IHVwZGF0ZUNvbnRleHQgPSAoeyB2YXJuYW1lLCBkYXRhLCBzY29wZSwgY29udGV4dCB9KSA9PiB7XG5cdGlmICh2YXJuYW1lKVxuXHRcdGNvbnRleHQucmVzb2x2ZXIudXBkYXRlRGF0YSh2YXJuYW1lLCBkYXRhLCBzY29wZSk7XG5cdGVsc2UgaWYgKHNjb3BlKVxuXHRcdGNvbnRleHQucmVzb2x2ZXIubWVyZ2VDb250ZXh0KGRhdGEsIHNjb3BlKTtcblx0ZWxzZVxuXHRcdGNvbnRleHQucmVzb2x2ZXIgPSBuZXcgRXhwcmVzc2lvblJlc29sdmVyKHsgY29udGV4dDogZGF0YSwgbmFtZTogXCJqc3RsLWRhdGFcIiwgcGFyZW50OiBjb250ZXh0LnJlc29sdmVyIH0pO1xuXHRcblx0XHRcblx0cmV0dXJuIGNvbnRleHQ7XG59O1xuXG5cblxuY2xhc3MgRGF0YSBleHRlbmRzIERpcmVjdGl2ZSB7XG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHN1cGVyKCk7XG5cdH1cblxuXHRnZXQgbmFtZSgpIHsgcmV0dXJuIFwiZGF0YVwiIH1cblx0Z2V0IHJhbmsoKSB7IHJldHVybiAxMDAwIH1cblx0Z2V0IHBoYXNlKCl7cmV0dXJuIERpcmVjdGl2ZS5QSEFTRS5kYXRhfVxuXG5cdGFzeW5jIGV4ZWN1dGUoY29udGV4dCkge1xuXHRcdGlmICghKGNvbnRleHQudGVtcGxhdGUgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkgfHwgIWNvbnRleHQudGVtcGxhdGUuYXR0cihcImpzdGwtZGF0YVwiKSlcblx0XHRcdHJldHVybiBjb250ZXh0O1xuXHRcdFx0XG5cdFx0dHJ5IHtcblx0XHRcdGNvbnN0IHsgdGVtcGxhdGUgfSA9IGNvbnRleHQ7XHRcdFx0XG5cdFx0XHRjb25zdCBtb2RlID0gTU9ERVNbKHRlbXBsYXRlLmF0dHIoXCJqc3RsLWRhdGEtbW9kZVwiKSB8fCBcInJlbW90ZVwiKV07XG5cdFx0XHRpZiAoIW1vZGUpXG5cdFx0XHRcdHRocm93IG5ldyBFcnJvcihcIlRoZSBqc3RsLWRhdGEtbW9kZSBpcyB1bnN1cHBvcnRlZCFcIik7XG5cblx0XHRcdGxldCBkYXRhID0gdGVtcGxhdGUuYXR0cihcImpzdGwtZGF0YVwiKTtcblx0XHRcdGRhdGEgPSBhd2FpdCBtb2RlKHsgZGF0YSwgY29udGV4dCB9KTtcblxuXHRcdFx0Y29uc3QgdmFybmFtZSA9IHRlbXBsYXRlLmF0dHIoXCJqc3RsLWRhdGEtdmFyXCIpO1xuXHRcdFx0Y29uc3Qgc2NvcGUgPSB0ZW1wbGF0ZS5hdHRyKFwianN0bC1kYXRhLXNjb3BlXCIpO1xuXHRcdFx0Y29udGV4dCA9IHVwZGF0ZUNvbnRleHQoeyB2YXJuYW1lLCBkYXRhLCBzY29wZSwgY29udGV4dCB9KTtcblx0XHR9IGNhdGNoIChlKSB7XG5cdFx0XHRjb25zb2xlLmVycm9yKGUsIGNvbnRleHQudGVtcGxhdGUpO1xuXHRcdH1cblxuXHRcdHJldHVybiBjb250ZXh0O1xuXG5cdH1cbn1cblxuRGlyZWN0aXZlLmRlZmluZSh7IGRpcmVjdGl2ZTogbmV3IERhdGEoKSB9KTsiLCJpbXBvcnQgRGlyZWN0aXZlIGZyb20gXCIuLi9EaXJlY3RpdmUuanNcIjtcbmltcG9ydCBFeHByZXNzaW9uUmVzb2x2ZXIgZnJvbSBcIkBkZWZhdWx0LWpzL2RlZmF1bHRqcy1leHByZXNzaW9uLWxhbmd1YWdlL3NyYy9FeHByZXNzaW9uUmVzb2x2ZXIuanNcIjtcblxuY29uc3QgQVRUUklCVVRFID0ge1xuXHREQVRBOiBcImpzdGwtZm9yZWFjaFwiLFxuXHRWQVI6IFwianN0bC1mb3JlYWNoLXZhclwiLFxuXHRTVEFUVVM6IFwianN0bC1mb3JlYWNoLXN0YXR1c1wiLFxuXHRDT1VOVDogXCJqc3RsLWZvcmVhY2gtY291bnRcIixcblx0U1RBUlQ6IFwianN0bC1mb3JlYWNoLXN0YXJ0XCIsXG5cdFNURVA6IFwianN0bC1mb3JlYWNoLXN0ZXBcIixcblx0Q09ORElUSU9OOiBcImpzdGwtZm9yZWFjaC1jb25kaXRpb25cIlxufTtcblxuY29uc3QgZG9Db3VudCA9IGFzeW5jIChvcHRpb24pID0+IHtcblx0bGV0IHsgc3RhcnQsIHN0ZXAsIGNvdW50LCB2YXJuYW1lLCBzdGF0dXMsIHJlc29sdmVyIH0gPSBvcHRpb247XG5cblx0Y291bnQgPSBhd2FpdCByZXNvbHZlci5yZXNvbHZlKGNvdW50KTtcblx0Y29uc3QgbGVuZ3RoID0gc3RhcnQgKyAoY291bnQgKiBzdGVwKTtcblx0bGV0IHN0b3AgPSBmYWxzZTtcblx0Zm9yIChsZXQgaSA9IHN0YXJ0OyBpIDwgbGVuZ3RoICYmICFzdG9wOyBpID0gaSArIHN0ZXApIHtcblx0XHRjb25zdCBpdGVyYXRpb24gPSB7fVxuXHRcdGl0ZXJhdGlvblt2YXJuYW1lXSA9IGk7XG5cdFx0aXRlcmF0aW9uW3N0YXR1c10gPSB7XG5cdFx0XHRpbmRleDogaSxcblx0XHRcdG51bWJlcjogaSArIDEsXG5cdFx0XHRzdGVwLFxuXHRcdFx0Y291bnRcblx0XHR9O1xuXHRcdHN0b3AgPSAhKGF3YWl0IGl0ZXJhdGUoaXRlcmF0aW9uLCBvcHRpb24pKTtcblx0fVxufTtcblxuY29uc3QgZG9Gb3JlYWNoID0gYXN5bmMgKG9wdGlvbikgPT4ge1xuXHRsZXQgeyBkYXRhLCBzdGFydCwgc3RlcCwgY291bnQsIHZhcm5hbWUsIHN0YXR1cywgcmVzb2x2ZXIgfSA9IG9wdGlvbjtcblxuXHRkYXRhID0gYXdhaXQgcmVzb2x2ZXIucmVzb2x2ZShkYXRhKTtcblx0bGV0IGFycmF5ID0gZGF0YTtcblx0aWYgKCEoZGF0YSBpbnN0YW5jZW9mIEFycmF5KSlcblx0XHRhcnJheSA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKGRhdGEpO1xuXG5cdGNvdW50ID0gY291bnQgIT0gXCJcIiA/IGF3YWl0IHJlc29sdmVyLnJlc29sdmUoY291bnQsIDApIDogbnVsbDtcblx0Y29uc3QgbGVuZ3RoID0gY291bnQgPyBNYXRoLm1pbihzdGFydCArIGNvdW50LCBhcnJheS5sZW5ndGgpIDogYXJyYXkubGVuZ3RoO1xuXHRsZXQgc3RvcCA9IGZhbHNlO1xuXHRmb3IgKGxldCBpID0gc3RhcnQ7IGkgPCBsZW5ndGggJiYgIXN0b3A7IGkgPSBpICsgc3RlcCkge1xuXHRcdGNvbnN0IGl0ZXJhdGlvbiA9IHt9XG5cdFx0aXRlcmF0aW9uW3Zhcm5hbWVdID0gZGF0YVtpXTtcblx0XHRpdGVyYXRpb25bc3RhdHVzXSA9IHtcblx0XHRcdGluZGV4OiBpLFxuXHRcdFx0bnVtYmVyOiBpICsgMSxcblx0XHRcdGNvdW50OiBsZW5ndGgsXG5cdFx0XHRkYXRhXG5cdFx0fTtcblx0XHRzdG9wID0gIShhd2FpdCBpdGVyYXRlKGl0ZXJhdGlvbiwgb3B0aW9uKSk7XG5cdH1cbn07XG5cbmNvbnN0IGl0ZXJhdGUgPSBhc3luYyAoZGF0YSwgb3B0aW9uKSA9PiB7XG5cdGxldCB7IHRlbXBsYXRlLCByZXNvbHZlciwgcmVuZGVyZXIsIGNvbnRhaW5lciwgY29uZGl0aW9uLCBjb250ZXh0IH0gPSBvcHRpb247XG5cdHJlc29sdmVyID0gbmV3IEV4cHJlc3Npb25SZXNvbHZlcih7IGNvbnRleHQ6IGRhdGEsIG5hbWU6IFwianN0bC1mb3JlYWNoXCIsIHBhcmVudDogcmVzb2x2ZXIgfSk7XG5cblx0Y29uZGl0aW9uID0gY29uZGl0aW9uID8gYXdhaXQgcmVzb2x2ZXIucmVzb2x2ZShjb25kaXRpb24sIGZhbHNlKSA6IGZhbHNlO1xuXHRpZiAoY29uZGl0aW9uKVxuXHRcdHJldHVybiBmYWxzZTtcblxuXHRhd2FpdCByZW5kZXJlci5yZW5kZXIoeyBjb250ZXh0OiBjb250ZXh0LmNsb25lKHsgcmVzb2x2ZXIsIGNvbnRhaW5lciwgdGVtcGxhdGUsIG1vZGU6IFwiYXBwZW5kXCIgfSkgfSk7XG5cdHJldHVybiB0cnVlO1xufTtcblxuY2xhc3MgRm9yZWFjaCBleHRlbmRzIERpcmVjdGl2ZSB7XG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHN1cGVyKCk7XG5cdH1cblxuXHRnZXQgbmFtZSgpIHsgcmV0dXJuIFwiZm9yZWFjaFwiIH1cblx0Z2V0IHJhbmsoKSB7IHJldHVybiBEaXJlY3RpdmUuTUlOX1JBTksgKyAyIH1cblx0Z2V0IHBoYXNlKCkgeyByZXR1cm4gRGlyZWN0aXZlLlBIQVNFLnRlbXBsYXRlIH1cblxuXHRhc3luYyBleGVjdXRlKGNvbnRleHQpIHtcblx0XHRpZiAoIShjb250ZXh0LnRlbXBsYXRlIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpIHx8ICghY29udGV4dC50ZW1wbGF0ZS5hdHRyKEFUVFJJQlVURS5EQVRBKSAmJiAhY29udGV4dC50ZW1wbGF0ZS5hdHRyKEFUVFJJQlVURS5DT1VOVCkpKVxuXHRcdFx0cmV0dXJuIGNvbnRleHQ7XG5cblx0XHRjb250ZXh0Lmlnbm9yZSA9IHRydWU7XG5cdFx0dHJ5IHtcblx0XHRcdGNvbnN0IHsgdGVtcGxhdGUsIHJlc29sdmVyLCByZW5kZXJlciwgY29udGVudCB9ID0gY29udGV4dDtcblx0XHRcdGNvbnN0IG9wdGlvbiA9IHtcblx0XHRcdFx0ZGF0YTogKHRlbXBsYXRlLmF0dHIoQVRUUklCVVRFLkRBVEEpIHx8IFwiXCIpLnRyaW0oKSxcblx0XHRcdFx0Y291bnQ6ICh0ZW1wbGF0ZS5hdHRyKEFUVFJJQlVURS5DT1VOVCkgfHwgXCJcIikudHJpbSgpLFxuXHRcdFx0XHRzdGFydDogYXdhaXQgcmVzb2x2ZXIucmVzb2x2ZSh0ZW1wbGF0ZS5hdHRyKEFUVFJJQlVURS5TVEFSVCkgfHwgXCIwXCIpLFxuXHRcdFx0XHRzdGVwOiBhd2FpdCByZXNvbHZlci5yZXNvbHZlKHRlbXBsYXRlLmF0dHIoQVRUUklCVVRFLlNURVApIHx8IFwiMVwiKSxcblx0XHRcdFx0dmFybmFtZTogKHRlbXBsYXRlLmF0dHIoQVRUUklCVVRFLlZBUikgfHwgXCJpdGVtXCIpLnRyaW0oKSxcblx0XHRcdFx0c3RhdHVzOiAodGVtcGxhdGUuYXR0cihBVFRSSUJVVEUuU1RBVFVTKSB8fCBcInN0YXR1c1wiKS50cmltKCksXG5cdFx0XHRcdGNvbmRpdGlvbjogdGVtcGxhdGUuYXR0cihBVFRSSUJVVEUuQ09ORElUSU9OKSxcblx0XHRcdFx0dGVtcGxhdGU6IHRlbXBsYXRlLmNoaWxkTm9kZXMsXG5cdFx0XHRcdHJlc29sdmVyLFxuXHRcdFx0XHRyZW5kZXJlcixcblx0XHRcdFx0Y29udGFpbmVyOiBjb250ZW50LFxuXHRcdFx0XHRjb250ZXh0XG5cdFx0XHR9O1xuXHRcdFx0aWYgKCghb3B0aW9uLmRhdGEgfHwgb3B0aW9uLmRhdGEgPT0gXCJcIikgJiYgb3B0aW9uLmNvdW50KVxuXHRcdFx0XHRhd2FpdCBkb0NvdW50KG9wdGlvbik7XG5cdFx0XHRlbHNlXG5cdFx0XHRcdGF3YWl0IGRvRm9yZWFjaChvcHRpb24pO1xuXG5cdFx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRcdGNvbnNvbGUuZXJyb3IoXCJlcnJvciBhdCBqc3RsLWZvcmVhY2g6XCIsIGVycm9yKTtcblx0XHR9XG5cdFx0cmV0dXJuIGNvbnRleHQ7XG5cblx0fVxufTtcblxuRGlyZWN0aXZlLmRlZmluZSh7IGRpcmVjdGl2ZTogbmV3IEZvcmVhY2goKSB9KTsiLCJpbXBvcnQgRGlyZWN0aXZlIGZyb20gXCIuLi9EaXJlY3RpdmUuanNcIjtcblxuY2xhc3MgSWYgZXh0ZW5kcyBEaXJlY3RpdmUge1xuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRzdXBlcigpO1xuXHR9XG5cblx0Z2V0IG5hbWUoKSB7IHJldHVybiBcImlmXCIgfVxuXHRnZXQgcmFuaygpIHsgcmV0dXJuIERpcmVjdGl2ZS5NSU5fUkFOSyArIDEwMDAgfVxuXHRnZXQgcGhhc2UoKSB7IHJldHVybiBEaXJlY3RpdmUuUEhBU0UuaW5pdCB9XG5cblx0YXN5bmMgZXhlY3V0ZShjb250ZXh0KSB7XG5cdFx0Y29uc3QgeyB0ZW1wbGF0ZSB9ID0gY29udGV4dDtcblx0XHRpZiAoISh0ZW1wbGF0ZSBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSB8fCAhdGVtcGxhdGUuYXR0cihcImpzdGwtaWZcIikpXG5cdFx0XHRyZXR1cm4gY29udGV4dDtcblxuXHRcdGNvbnN0IGV4cHJlc3Npb24gPSB0ZW1wbGF0ZS5hdHRyKFwianN0bC1pZlwiKTtcblx0XHRjb25zdCByZXNvbHZlciA9IGNvbnRleHQucmVzb2x2ZXI7XG5cdFx0Y29uc3QgcmVzdWx0ID0gYXdhaXQgcmVzb2x2ZXIucmVzb2x2ZShleHByZXNzaW9uLCBmYWxzZSk7XG5cdFx0aWYgKCFyZXN1bHQpIHtcblx0XHRcdGNvbnRleHQuY29udGVudCA9IG51bGw7XG5cdFx0XHRjb250ZXh0LnN0b3AgPSB0cnVlO1xuXHRcdFx0Y29udGV4dC5pZ25vcmUgPSB0cnVlO1xuXHRcdH1cblxuXHRcdHJldHVybiBjb250ZXh0O1xuXHR9XG59XG5cbkRpcmVjdGl2ZS5kZWZpbmUoeyBkaXJlY3RpdmU6IG5ldyBJZigpIH0pOyIsImltcG9ydCBEaXJlY3RpdmUgZnJvbSBcIi4uL0RpcmVjdGl2ZS5qc1wiO1xuaW1wb3J0IFRlbXBsYXRlIGZyb20gXCIuLi9UZW1wbGF0ZS5qc1wiO1xuXG5jbGFzcyBJbmNsdWRlIGV4dGVuZHMgRGlyZWN0aXZlIHtcdFxuXHRjb25zdHJ1Y3Rvcigpe1xuXHRcdHN1cGVyKCk7XG5cdH1cblx0XG5cdGdldCBuYW1lKCkge3JldHVybiBcImluY2x1ZGVcIn1cblx0Z2V0IHJhbmsoKSB7cmV0dXJuIERpcmVjdGl2ZS5NSU5fUkFOS31cblx0Z2V0IHBoYXNlKCl7cmV0dXJuIERpcmVjdGl2ZS5QSEFTRS50ZW1wbGF0ZX1cblx0XHRcblx0YXN5bmMgZXhlY3V0ZShjb250ZXh0KXtcblx0XHRpZighKGNvbnRleHQudGVtcGxhdGUgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkgfHwgIWNvbnRleHQudGVtcGxhdGUuYXR0cihcImpzdGwtaW5jbHVkZVwiKSlcblx0XHRcdHJldHVybiBjb250ZXh0O1xuXHRcdHRyeXtcblx0XHRcdGNvbnN0IHt0ZW1wbGF0ZSwgcmVzb2x2ZXIsIHJlbmRlcmVyfSA9IGNvbnRleHQ7XHRcdFxuXHRcdFx0bGV0IGluY2x1ZGUgPSB0ZW1wbGF0ZS5hdHRyKFwianN0bC1pbmNsdWRlXCIpO1xuXHRcdFx0aW5jbHVkZSA9IGF3YWl0IHJlc29sdmVyLnJlc29sdmVUZXh0KGluY2x1ZGUpO1xuXHRcdFx0aW5jbHVkZSA9IG5ldyBVUkwoaW5jbHVkZSwgbG9jYXRpb24ub3JpZ2luKTtcdFx0XHRcblx0XHRcdGluY2x1ZGUgPSBhd2FpdCBUZW1wbGF0ZS5sb2FkKGluY2x1ZGUpO1xuXHRcdFx0XG5cdFx0XHRjb25zdCBtb2RlID0gdGVtcGxhdGUuYXR0cihcImpzdGwtaW5jbHVkZS1tb2RlXCIpIHx8IFwicmVwbGFjZVwiO1xuXHRcdFx0YXdhaXQgcmVuZGVyZXIucmVuZGVyKHt0ZW1wbGF0ZTppbmNsdWRlLCBjb250YWluZXI6IGNvbnRleHQuY29udGVudCwgbW9kZSwgY29udGV4dH0pO1xuXHRcdFx0Y29udGV4dC5pZ25vcmU7XG5cdFx0XHRcblx0XHRcdHJldHVybiBjb250ZXh0O1xuXHRcdH1jYXRjaChlKXtcblx0XHRcdGNvbnNvbGUuZXJyb3IoZSwgY29udGV4dC50ZW1wbGF0ZSk7XG5cdFx0XHRyZXR1cm4gY29udGV4dDtcblx0XHR9XHRcdFxuXHR9XG59XG5cbkRpcmVjdGl2ZS5kZWZpbmUoe2RpcmVjdGl2ZTogbmV3IEluY2x1ZGUoKX0pOyIsImltcG9ydCBEaXJlY3RpdmUgZnJvbSBcIi4uL0RpcmVjdGl2ZS5qc1wiO1xuaW1wb3J0IFJlcGxhY2UgZnJvbSBcIi4uL2VsZW1lbnRzL1JlcGxhY2UuanNcIlxuXG5cbmNsYXNzIEluaXRpYWwgZXh0ZW5kcyBEaXJlY3RpdmUge1xuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRzdXBlcigpO1xuXHR9XG5cblx0Z2V0IG5hbWUoKSB7IHJldHVybiBcImluaXRpYWxcIiB9XG5cdGdldCByYW5rKCkgeyByZXR1cm4gRGlyZWN0aXZlLk1JTl9SQU5LIH1cblx0Z2V0IHBoYXNlKCkgeyByZXR1cm4gRGlyZWN0aXZlLlBIQVNFLmluaXQgfVxuXG5cblx0YXN5bmMgZXhlY3V0ZShjb250ZXh0KSB7XG5cdFx0Y29uc3QgeyB0ZW1wbGF0ZSwgcmVuZGVyZXIgfSA9IGNvbnRleHQ7XG5cdFx0aWYgKCEodGVtcGxhdGUgaW5zdGFuY2VvZiBFbGVtZW50KSlcblx0XHRcdGNvbnRleHQuY29udGVudCA9IGRvY3VtZW50LmltcG9ydE5vZGUodGVtcGxhdGUsIHRydWUpO1xuXHRcdGVsc2UgaWYgKHRlbXBsYXRlLmF0dHIoXCJqc3RsLWFzeW5jXCIpKSB7XG5cdFx0XHRjb250ZXh0LmNvbnRlbnQgPSBuZXcgUmVwbGFjZSgpO1xuXHRcdFx0dGVtcGxhdGUuYXR0cihcImpzdGwtYXN5bmNcIiwgbnVsbCk7XG5cdFx0XHRzZXRUaW1lb3V0KGFzeW5jICgpID0+IHtcblx0XHRcdFx0YXdhaXQgcmVuZGVyZXIucmVuZGVyKHsgbW9kZTogXCJyZXBsYWNlXCIsIHRhcmdldDogY29udGV4dC5jb250ZW50LCBjb250ZXh0IH0pO1xuXHRcdFx0fSwgcGFyc2VJbnQodGVtcGxhdGUuYXR0cihcImpzdGwtYXN5bmNcIikgfHwgXCIyNTBcIikgfHwgMjUwKTtcblx0XHRcdGNvbnRleHQuc3RvcCA9IHRydWU7XG5cdFx0XHRjb250ZXh0Lmlnbm9yZSA9IHRydWU7XG5cdFx0fSBlbHNlIGlmICh0ZW1wbGF0ZS5hdHRyKFwianN0bC1pZ25vcmVcIikpIHtcblx0XHRcdGNvbnRleHQuY29udGVudCA9IGRvY3VtZW50LmltcG9ydE5vZGUodGVtcGxhdGUsIHRydWUpO1xuXHRcdFx0Y29udGV4dC5zdG9wID0gdHJ1ZTtcblx0XHRcdGNvbnRleHQuaWdub3JlID0gdHJ1ZTtcblx0XHR9IGVsc2UgaWYgKHRlbXBsYXRlIGluc3RhbmNlb2YgSFRNTFRlbXBsYXRlRWxlbWVudCkge1xuXHRcdFx0Y29udGV4dC5jb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0ZW1wbGF0ZS50YWdOYW1lKTtcblx0XHRcdGNvbnN0IHN1YmNvbnRleHQgPSBjb250ZXh0LnN1YkNvbnRleHQoe1xuXHRcdFx0XHR0ZW1wbGF0ZTogdGVtcGxhdGUuY29udGVudC5jaGlsZE5vZGVzLFxuXHRcdFx0XHRjb250YWluZXI6IGNvbnRleHQuY29udGVudC5jb250ZW50XG5cdFx0XHR9KTtcblx0XHRcdHJlbmRlcmVyLnJlbmRlcih7IGNvbnRleHQ6IHN1YmNvbnRleHQgfSk7XG5cdFx0XHRjb250ZXh0LnN0b3AgPSB0cnVlO1xuXHRcdFx0Y29udGV4dC5pZ25vcmUgPSB0cnVlO1xuXHRcdH0gZWxzZSBpZiAodGVtcGxhdGUudGFnTmFtZSlcblx0XHRcdGNvbnRleHQuY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGVtcGxhdGUudGFnTmFtZSk7XG5cdFx0ZWxzZSB7XG5cdFx0XHRjb250ZXh0LmNvbnRlbnQgPSBkb2N1bWVudC5pbXBvcnROb2RlKHRlbXBsYXRlLCB0cnVlKTtcblx0XHRcdGNvbnRleHQuc3RvcCA9IHRydWU7XG5cdFx0XHRjb250ZXh0Lmlnbm9yZSA9IHRydWU7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGNvbnRleHQ7XG5cdH1cbn1cblxuRGlyZWN0aXZlLmRlZmluZSh7IGRpcmVjdGl2ZTogbmV3IEluaXRpYWwoKSB9KTsiLCJpbXBvcnQgRGlyZWN0aXZlIGZyb20gXCIuLi9EaXJlY3RpdmUuanNcIjtcblxuY29uc3QgREVGQVVMVF9PUFRJT04gPSB7XG5cdG1vZGU6IFwidGV4dFwiLFxuXHR1bnNlY3VyZTogZmFsc2UsXG5cdHByZXZlbnRGb3JtYXQgOiBmYWxzZSxcblx0bWF4TGVuZ3RoOiAwXHRcbn07XG5cbmNvbnN0IFNFQ1VSRV9IVE1MX0ZJTFRFUiA9IFwic2NyaXB0LCBzdHlsZSwgYm9keSwgaHRtbCwgaGVhZCwgb2JqZWN0LCBsaW5rXCI7XG5cbmNvbnN0IHJlYWRPcHRpb24gPSBhc3luYyAocGFyZW50LCBjb250ZXh0KSA9PiB7XG5cdGNvbnN0IHJlc29sdmVyID0gY29udGV4dC5yZXNvbHZlcjtcblx0cmV0dXJuIHtcblx0XHRtb2RlOiBhd2FpdCByZXNvbHZlci5yZXNvbHZlVGV4dCgocGFyZW50LmF0dHIoXCJqc3RsLXRleHQtY29udGVudC10eXBlXCIpIHx8IFwidGV4dFwiKS50cmltKCkudG9Mb3dlckNhc2UoKSksXG5cdFx0dW5zZWN1cmU6IHBhcmVudC5oYXNBdHRyaWJ1dGUoXCJqc3RsLXRleHQtdW5zZWN1cmVcIiksXG5cdFx0cHJldmVudEZvcm1hdDogISFwYXJlbnQuYXR0cihcImpzdGwtdGV4dC1wcmV2ZW50LWZvcm1hdFwiKSB8fCBmYWxzZSxcblx0XHRtYXhMZW5ndGg6IHBhcnNlSW50KGF3YWl0IHJlc29sdmVyLnJlc29sdmVUZXh0KHBhcmVudC5hdHRyKFwianN0bC10ZXh0LXRyaW0tbGVuZ3RoXCIpIHx8IFwiMFwiKSlcblx0fTtcbn07XG5cbmNvbnN0IHRyaW1UZXh0TGVuZ3RoID0gKHRleHQsIGxlbmd0aCkgPT4ge1xuXHRyZXR1cm4gdGV4dC5sZW5ndGggPiBsZW5ndGggPyB0ZXh0LnN1YnN0cmluZygwLCBsZW5ndGggLSAzKS50cmltKCkgKyBcIi4uLlwiIDogdGV4dDtcbn07XG5cbmNvbnN0IE1PREVTID0ge1xuXHRcInRleHRcIiA6IGFzeW5jIChvcHRpb24sIGNvbnRleHQpID0+IHtcblx0XHRjb25zdCB7Y29udGVudCwgcmVzb2x2ZXIsIHRlbXBsYXRlfSA9IGNvbnRleHQ7XG5cdFx0XG5cdFx0bGV0IHRleHQgPSBhd2FpdCByZXNvbHZlci5yZXNvbHZlVGV4dCh0ZW1wbGF0ZS50ZXh0Q29udGVudCk7XHRcdFxuXHRcdHRleHQgPSBjcmVhdGUodGV4dCx0cnVlKS5jb250ZW50LnRleHRDb250ZW50O1xuXHRcdGlmKG9wdGlvbi5tYXhMZW5ndGggPiAwKVxuXHRcdFx0dGV4dCA9IHRyaW1UZXh0TGVuZ3RoKHRleHQsIG9wdGlvbi5tYXhMZW5ndGgpO1x0XHRcblx0XHRcblx0XHRjb250ZW50LnRleHRDb250ZW50ID0gdGV4dDtcdFx0XG5cdH0sXG5cdFwiaHRtbFwiOiBhc3luYyAob3B0aW9uLCBjb250ZXh0KSA9PiB7XG5cdFx0Y29uc3Qge3Jlc29sdmVyLCB0ZW1wbGF0ZX0gPSBjb250ZXh0O1xuXHRcdFxuXHRcdGxldCBjb250ZW50ID0gYXdhaXQgcmVzb2x2ZXIucmVzb2x2ZVRleHQodGVtcGxhdGUudGV4dENvbnRlbnQpO1x0XHRcblx0XHRjb250ZW50ID0gY3JlYXRlKGNvbnRlbnQsdHJ1ZSk7XHRcdFxuXHRcdGNvbnRlbnQgPSBkb2N1bWVudC5pbXBvcnROb2RlKGNvbnRlbnQuY29udGVudCwgdHJ1ZSk7XG5cdFx0XG5cdFx0aWYob3B0aW9uLnVuc2VjdXJlKVxuXHRcdFx0Y29udGV4dC5jb250ZW50ID0gY29udGVudDtcdFx0XHRcblx0XHRlbHNle1xuXHRcdFx0Y29udGVudC5maW5kKFNFQ1VSRV9IVE1MX0ZJTFRFUikucmVtb3ZlKCk7XHRcdFx0XG5cdFx0XHRjb250ZXh0LmNvbnRlbnQgPSBjb250ZW50O1xuXHRcdH1cblx0fVxufTtcblxuXG5jbGFzcyBUZXh0Q29udGVudCBleHRlbmRzIERpcmVjdGl2ZSB7XG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHN1cGVyKCk7XG5cdH1cblxuXHRnZXQgbmFtZSgpIHsgcmV0dXJuIFwidGV4dFwiIH1cblx0Z2V0IHJhbmsoKSB7IHJldHVybiBEaXJlY3RpdmUuTUlOX1JBTksgKyAxIH1cblx0Z2V0IHBoYXNlKCkgeyByZXR1cm4gRGlyZWN0aXZlLlBIQVNFLmNvbnRlbnQgfVxuXG5cblxuXHRhc3luYyBleGVjdXRlKGNvbnRleHQpIHtcblx0XHRjb25zdCB7IHRlbXBsYXRlIH0gPSBjb250ZXh0O1xuXHRcdGlmICghKHRlbXBsYXRlIGluc3RhbmNlb2YgVGV4dCkgfHwgdGVtcGxhdGUudGV4dENvbnRlbnQudHJpbSgpLmxlbmd0aCA9PSAwIHx8ICh0ZW1wbGF0ZS5wYXJlbnRFbGVtZW50ICYmIHRlbXBsYXRlLnBhcmVudEVsZW1lbnQuaGFzQXR0cmlidXRlKFwianN0bC10ZXh0LWlnbm9yZVwiKSkpXG5cdFx0XHRyZXR1cm4gY29udGV4dDtcblxuXHRcdGNvbnN0IHBhcmVudCA9IHRlbXBsYXRlLnBhcmVudEVsZW1lbnQ7XG5cdFx0Y29uc3Qgb3B0aW9uID0gcGFyZW50ID8gYXdhaXQgcmVhZE9wdGlvbihwYXJlbnQsIGNvbnRleHQpIDogREVGQVVMVF9PUFRJT047XG5cdFx0XG5cdFx0Y29uc3QgIG1vZGUgPSBNT0RFU1tvcHRpb24ubW9kZV07XG5cdFx0aWYoIW1vZGUpXG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJUZXh0IG1vZGUgXFxcIlwiKyBvcHRpb24ubW9kZSArIFwiXFxcIiBpcyB1bnN1cHBvcnRlZCFcIik7XG5cdFx0XG5cdFx0YXdhaXQgbW9kZShvcHRpb24sIGNvbnRleHQpO1xuXHRcdFxuXHRcdHJldHVybiBjb250ZXh0O1xuXHR9XG59XG5cbkRpcmVjdGl2ZS5kZWZpbmUoeyBkaXJlY3RpdmU6IG5ldyBUZXh0Q29udGVudCgpIH0pOyIsImltcG9ydCBcIi4vSW5pdGlhbC5qc1wiO1xuaW1wb3J0IFwiLi9EYXRhLmpzXCI7XG5pbXBvcnQgXCIuL0lmLmpzXCI7XG5pbXBvcnQgXCIuL0Nob29zZS5qc1wiO1xuaW1wb3J0IFwiLi9JbmNsdWRlLmpzXCI7XG5pbXBvcnQgXCIuL0ZvcmVhY2guanNcIjtcbmltcG9ydCBcIi4vVGV4dC5qc1wiO1xuaW1wb3J0IFwiLi9BdHRyaWJ1dGVzLmpzXCI7IiwiaW1wb3J0IEVsZW1lbnQgZnJvbSBcIi4uL0VsZW1lbnQuanNcIlxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZXBsYWNlRWxlbWVudCBleHRlbmRzIEVsZW1lbnR7XG5cdGNvbnN0cnVjdG9yKCl7XG5cdFx0c3VwZXIoKTtcblx0XHRcblx0XHR0aGlzLmF0dGFjaFNoYWRvdyh7bW9kZTogJ29wZW4nfSk7XG5cdH1cblx0YXN5bmMgZXhlY3V0ZSh7dGVtcGxhdGUsIGNvbnRleHR9KXtcblx0XHRyZXR1cm4gY29udGV4dDtcblx0fTtcdFx0XG59XG50cnl7Y3VzdG9tRWxlbWVudHMuZGVmaW5lKFwianN0bC1yZXBsYWNlXCIsIFJlcGxhY2VFbGVtZW50KTt9Y2F0Y2goZSl7fS8vaWdub3JlIiwiaW1wb3J0IFwiLi9SZXBsYWNlLmpzXCIiXSwic291cmNlUm9vdCI6IiJ9