(self["webpackChunk_default_js_defaultjs_template_language"] = self["webpackChunk_default_js_defaultjs_template_language"] || []).push([["commons"],{

/***/ "./node_modules/@default-js/defaultjs-common-utils/src/ObjectProperty.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-common-utils/src/ObjectProperty.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ObjectProperty)
/* harmony export */ });
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

/***/ "./node_modules/@default-js/defaultjs-common-utils/src/ObjectUtils.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-common-utils/src/ObjectUtils.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "append": () => (/* binding */ append),
/* harmony export */   "isPojo": () => (/* binding */ isPojo),
/* harmony export */   "merge": () => (/* binding */ merge),
/* harmony export */   "filter": () => (/* binding */ filter),
/* harmony export */   "defValue": () => (/* binding */ defValue),
/* harmony export */   "defGet": () => (/* binding */ defGet),
/* harmony export */   "defGetSet": () => (/* binding */ defGetSet),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ObjectProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ObjectProperty.js */ "./node_modules/@default-js/defaultjs-common-utils/src/ObjectProperty.js");

/**
 * append a propery value to an object. If propery exists its would be converted to an array
 *
 *  @param aKey:string name of property
 *  @param aData:any property value
 *  @param aObject:object the object to append the property
 *
 *  @return returns the changed object
 */
const append = function (aKey, aData, aObject) {
	if (typeof aData !== "undefined") {
		const property = _ObjectProperty_js__WEBPACK_IMPORTED_MODULE_0__.default.load(aObject, aKey, true);
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
const isPojo = function (aObject) {
	return typeof aObject !== "undefined" && aObject != null && aObject.constructor.name === "Object";
};

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
const merge = function (aTarget) {
	for (let i = 1; i < arguments.length; i++) {
		const source = arguments[i];
		Object.getOwnPropertyNames(source).forEach((aKey) => {
			if (isPojo(aTarget[aKey])) merge(aTarget[aKey], source[aKey]);
			else aTarget[aKey] = source[aKey];
		});
	}

	return aTarget;
};

const buildPropertyFilter = function ({ names, allowed }) {
	return (name, value, context) => {
		return names.includes(name) === allowed;
	};
};

const filter = function () {
	const [data, propFilter, { deep = false, recursive = true, parents = [] } = {}] = arguments;
	const result = {};

	for (let name in data) {
		const value = data[name];
		const accept = propFilter(name, value, data);
		if (accept && (!deep || value === null || value === undefined)) result[name] = value;
		else if (accept && deep) {
			const type = typeof value;
			if (type !== "object" || value instanceof Array || value instanceof Map || value instanceof Set || value instanceof RegExp || parents.includes[value] || value == data) result[name] = value;
			else result[name] = filter(value, propFilter, { deep, recursive, parents: parents.concat(data) });
		}
	}

	return result;
};

const defValue = (o, name, value) => {
	Object.defineProperty(o, name, {
		value,
		writable: false,
		configurable: false,
		enumerable: false
	});
};
const defGet = (o, name, get) => {
	Object.defineProperty(o, name, {
		get,
		configurable: false,
		enumerable: false
	});
};

const defGetSet = (o, name, get, set) => {
	Object.defineProperty(o, name, {
		get,
		set,
		configurable: false,
		enumerable: false
	});
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
	isPojo,
	append,
	merge,
	filter,
	buildPropertyFilter,
	defValue,
	defGet,
	defGetSet
});


/***/ }),

/***/ "./node_modules/@default-js/defaultjs-common-utils/src/PrivateProperty.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-common-utils/src/PrivateProperty.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "privateProperty": () => (/* binding */ privateProperty),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const PRIVATE_PROPERTIES = new WeakMap();
const privateStore = (obj) => {
	if(PRIVATE_PROPERTIES.has(obj))
		return PRIVATE_PROPERTIES.get(obj);
	
	const data = {};
	PRIVATE_PROPERTIES.set(obj, data);
	return data;
};

const privateProperty = function(obj, name, value) {
	const data = privateStore(obj);
	if(arguments.length === 1)
		return data;
	else if(arguments.length === 2)
		return data[name];
	else if(arguments.length === 3)
		data[name] = value;
	else
		throw new Error("Not allowed size of arguments!");
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({privateProperty});

/***/ }),

/***/ "./node_modules/@default-js/defaultjs-common-utils/src/PromiseUtils.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-common-utils/src/PromiseUtils.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "timeoutPromise": () => (/* binding */ timeoutPromise),
/* harmony export */   "lazyPromise": () => (/* binding */ lazyPromise),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ObjectUtils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ObjectUtils */ "./node_modules/@default-js/defaultjs-common-utils/src/ObjectUtils.js");


const timeoutPromise = (fn, ms) =>{
	let canceled = false;
	let timeout = null;
	const promise = new Promise((r, e) => {
		timeout = setTimeout(()=> {
			timeout = null;
			fn(r,e);
		}, ms)
	});

	const then = promise.then;
	promise.then = (fn) => {
		then.call(promise, (result) => {
			if(!undefined.canceled)
				return fn(result);
		});
	}

	;(0,_ObjectUtils__WEBPACK_IMPORTED_MODULE_0__.defValue)(promise, "cancel", () => {
		if(timeout){
			clearTimeout(timeout);
			canceled = true;
		}
	});
	(0,_ObjectUtils__WEBPACK_IMPORTED_MODULE_0__.defGet)(promise, canceld, () => canceled);

	return promise;
}


const lazyPromise = () => {
		let promiseResolve = null;
		let promiseError = null;

		const promise = new Promise((r, e) => {
			promiseResolve = r;
			promiseError = e;
		});

		let resolved = false;
		let error = false;
		let value = undefined;

		(0,_ObjectUtils__WEBPACK_IMPORTED_MODULE_0__.defValue)(promise, "resolve", (result) => {
			value = result;
			resolved = true;
			if (value instanceof Error) {
				error = true;
				promiseError(value);
			} else promiseResolve(value);
		});

		(0,_ObjectUtils__WEBPACK_IMPORTED_MODULE_0__.defGet)(promise, "value", () => value);
		(0,_ObjectUtils__WEBPACK_IMPORTED_MODULE_0__.defGet)(promise, "error", () => error);
		(0,_ObjectUtils__WEBPACK_IMPORTED_MODULE_0__.defGet)(promise, "resolved", () => resolved);

		return promise;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
	lazyPromise,
	timeoutPromise
});


/***/ }),

/***/ "./node_modules/@default-js/defaultjs-common-utils/src/javascript/String.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-common-utils/src/javascript/String.js ***!
  \**********************************************************************************/
/***/ (() => {

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
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const GLOBAL = (() => {
	if(typeof __webpack_require__.g !== "undefined") return __webpack_require__.g;
	if(typeof window !== "undefined") return window;	
	if(typeof self !== "undefined") return self;
	return {};
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GLOBAL);

/***/ }),

/***/ "./node_modules/@default-js/defaultjs-expression-language/node_modules/@default-js/defaultjs-common-utils/src/ObjectProperty.js":
/*!**************************************************************************************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-expression-language/node_modules/@default-js/defaultjs-common-utils/src/ObjectProperty.js ***!
  \**************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ObjectProperty)
/* harmony export */ });
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
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "append": () => (/* binding */ append),
/* harmony export */   "isPojo": () => (/* binding */ isPojo),
/* harmony export */   "merge": () => (/* binding */ merge),
/* harmony export */   "filter": () => (/* binding */ filter),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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
		const property = _ObjectProperty_js__WEBPACK_IMPORTED_MODULE_0__.default.load(aObject, aKey, true)
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



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
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
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Context)
/* harmony export */ });
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
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DefaultValue)
/* harmony export */ });
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
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ExpressionResolver)
/* harmony export */ });
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

const DEFAULT_NOT_DEFINED = new _DefaultValue_js__WEBPACK_IMPORTED_MODULE_3__.default();
const toDefaultValue = value => {
	if (value instanceof _DefaultValue_js__WEBPACK_IMPORTED_MODULE_3__.default)
		return value;

	return new _DefaultValue_js__WEBPACK_IMPORTED_MODULE_3__.default(value);
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

	else if (aDefault instanceof _DefaultValue_js__WEBPACK_IMPORTED_MODULE_3__.default && aDefault.hasValue)
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
	constructor({ context = _default_js_defaultjs_common_utils_src_Global_js__WEBPACK_IMPORTED_MODULE_0__.default, parent = null, name = null }) {
		this.parent = (parent instanceof ExpressionResolver) ? parent : null;
		this.name = name;
		this.context = context;
		this.proxy = new _Context_js__WEBPACK_IMPORTED_MODULE_4__.default(this.context, this);
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
			const property = _default_js_defaultjs_common_utils_src_ObjectProperty_js__WEBPACK_IMPORTED_MODULE_1__.default.load(this.context, key, false);
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
			const property = _default_js_defaultjs_common_utils_src_ObjectProperty_js__WEBPACK_IMPORTED_MODULE_1__.default.load(this.context, key);
			property.value = value;
			this.proxy.resetCache();
		}
	}

	mergeContext(context, filter) {
		if (filter && filter != this.name) {
			if (this.parent)
				this.parent.mergeContext(context, filter);
		} else {
			this.context = this.context ? _default_js_defaultjs_common_utils_src_ObjectUtils_js__WEBPACK_IMPORTED_MODULE_2__.default.merge(this.context, context) : context;
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
		context = _default_js_defaultjs_common_utils_src_ObjectUtils_js__WEBPACK_IMPORTED_MODULE_2__.default.filter({data: context, propFilter, option});
		return new ExpressionResolver({context, name, parent});
	}
};

/***/ }),

/***/ "./node_modules/@default-js/defaultjs-extdom/index.js":
/*!************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-extdom/index.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/index */ "./node_modules/@default-js/defaultjs-extdom/src/index.js");


/***/ }),

/***/ "./node_modules/@default-js/defaultjs-extdom/src/Global.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-extdom/src/Global.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_Utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/Utils */ "./node_modules/@default-js/defaultjs-extdom/src/utils/Utils.js");


_utils_Utils__WEBPACK_IMPORTED_MODULE_0__.default.global.defaultjs = _utils_Utils__WEBPACK_IMPORTED_MODULE_0__.default.global.defaultjs || {};
_utils_Utils__WEBPACK_IMPORTED_MODULE_0__.default.global.defaultjs.extdom = _utils_Utils__WEBPACK_IMPORTED_MODULE_0__.default.global.defaultjs.extdom || {
	VERSION : "1.1.5",
	utils : {
		Utils: _utils_Utils__WEBPACK_IMPORTED_MODULE_0__.default
	}
};

_utils_Utils__WEBPACK_IMPORTED_MODULE_0__.default.global.find = function() {
	return document.find.apply(document, arguments);
};

_utils_Utils__WEBPACK_IMPORTED_MODULE_0__.default.global.ready = function() {
	return document.ready.apply(document, arguments);
};

_utils_Utils__WEBPACK_IMPORTED_MODULE_0__.default.global.create = function(aContent, asTemplate) {
	if (typeof arguments[0] !== "string")
		throw new Error("The first argument must be a string!");
	
	const template = document.createElement("template");
	template.innerHTML = aContent;
	if(asTemplate)
		return template;
	
	return document.importNode(template.content, true).childNodes;
};

_utils_Utils__WEBPACK_IMPORTED_MODULE_0__.default.global.script = function(aFile, aTarget) {
	if(aFile instanceof Array)
		return Promise.all(aFile.map(file => _utils_Utils__WEBPACK_IMPORTED_MODULE_0__.default.global.script(file, aTarget)));
	
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
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_ExtendPrototype__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/ExtendPrototype */ "./node_modules/@default-js/defaultjs-extdom/src/utils/ExtendPrototype.js");
/* harmony import */ var _extentions_QuerySupport__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./extentions/QuerySupport */ "./node_modules/@default-js/defaultjs-extdom/src/dom/extentions/QuerySupport.js");
/* harmony import */ var _extentions_ReadyEventSupport__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./extentions/ReadyEventSupport */ "./node_modules/@default-js/defaultjs-extdom/src/dom/extentions/ReadyEventSupport.js");




(0,_utils_ExtendPrototype__WEBPACK_IMPORTED_MODULE_0__.default)(Document, _extentions_QuerySupport__WEBPACK_IMPORTED_MODULE_1__.default, _extentions_ReadyEventSupport__WEBPACK_IMPORTED_MODULE_2__.default);

document.addEventListener("DOMContentLoaded", () => document.trigger("ready"));





/***/ }),

/***/ "./node_modules/@default-js/defaultjs-extdom/src/dom/DocumentFragment.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-extdom/src/dom/DocumentFragment.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_ExtendPrototype__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/ExtendPrototype */ "./node_modules/@default-js/defaultjs-extdom/src/utils/ExtendPrototype.js");
/* harmony import */ var _extentions_QuerySupport__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./extentions/QuerySupport */ "./node_modules/@default-js/defaultjs-extdom/src/dom/extentions/QuerySupport.js");
/* harmony import */ var _extentions_ManipulationSupport__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./extentions/ManipulationSupport */ "./node_modules/@default-js/defaultjs-extdom/src/dom/extentions/ManipulationSupport.js");




(0,_utils_ExtendPrototype__WEBPACK_IMPORTED_MODULE_0__.default)(DocumentFragment, _extentions_QuerySupport__WEBPACK_IMPORTED_MODULE_1__.default, _extentions_ManipulationSupport__WEBPACK_IMPORTED_MODULE_2__.default);






/***/ }),

/***/ "./node_modules/@default-js/defaultjs-extdom/src/dom/Element.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-extdom/src/dom/Element.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_ExtendPrototype__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/ExtendPrototype */ "./node_modules/@default-js/defaultjs-extdom/src/utils/ExtendPrototype.js");
/* harmony import */ var _extentions_QuerySupport__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./extentions/QuerySupport */ "./node_modules/@default-js/defaultjs-extdom/src/dom/extentions/QuerySupport.js");
/* harmony import */ var _extentions_AttributeSupport__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./extentions/AttributeSupport */ "./node_modules/@default-js/defaultjs-extdom/src/dom/extentions/AttributeSupport.js");
/* harmony import */ var _extentions_ManipulationSupport__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./extentions/ManipulationSupport */ "./node_modules/@default-js/defaultjs-extdom/src/dom/extentions/ManipulationSupport.js");





(0,_utils_ExtendPrototype__WEBPACK_IMPORTED_MODULE_0__.default)(Element,_extentions_QuerySupport__WEBPACK_IMPORTED_MODULE_1__.default, _extentions_AttributeSupport__WEBPACK_IMPORTED_MODULE_2__.default, _extentions_ManipulationSupport__WEBPACK_IMPORTED_MODULE_3__.default);

/***/ }),

/***/ "./node_modules/@default-js/defaultjs-extdom/src/dom/EventTarget.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-extdom/src/dom/EventTarget.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_ExtendPrototype__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/ExtendPrototype */ "./node_modules/@default-js/defaultjs-extdom/src/utils/ExtendPrototype.js");
/* harmony import */ var _extentions_EventSupport__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./extentions/EventSupport */ "./node_modules/@default-js/defaultjs-extdom/src/dom/extentions/EventSupport.js");



(0,_utils_ExtendPrototype__WEBPACK_IMPORTED_MODULE_0__.default)(EventTarget, _extentions_EventSupport__WEBPACK_IMPORTED_MODULE_1__.default);

/***/ }),

/***/ "./node_modules/@default-js/defaultjs-extdom/src/dom/HTMLElement.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-extdom/src/dom/HTMLElement.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_ExtendPrototype__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/ExtendPrototype */ "./node_modules/@default-js/defaultjs-extdom/src/utils/ExtendPrototype.js");
/* harmony import */ var _extentions_HtmlClassSupport__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./extentions/HtmlClassSupport */ "./node_modules/@default-js/defaultjs-extdom/src/dom/extentions/HtmlClassSupport.js");
/* harmony import */ var _extentions_ShowHideSupport__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./extentions/ShowHideSupport */ "./node_modules/@default-js/defaultjs-extdom/src/dom/extentions/ShowHideSupport.js");





(0,_utils_ExtendPrototype__WEBPACK_IMPORTED_MODULE_0__.default)(HTMLElement, _extentions_HtmlClassSupport__WEBPACK_IMPORTED_MODULE_1__.default, _extentions_ShowHideSupport__WEBPACK_IMPORTED_MODULE_2__.default);

/***/ }),

/***/ "./node_modules/@default-js/defaultjs-extdom/src/dom/HTMLInputElement.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-extdom/src/dom/HTMLInputElement.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_ExtendPrototype__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/ExtendPrototype */ "./node_modules/@default-js/defaultjs-extdom/src/utils/ExtendPrototype.js");
/* harmony import */ var _extentions_ValueSupport__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./extentions/ValueSupport */ "./node_modules/@default-js/defaultjs-extdom/src/dom/extentions/ValueSupport.js");




(0,_utils_ExtendPrototype__WEBPACK_IMPORTED_MODULE_0__.default)(HTMLInputElement,_extentions_ValueSupport__WEBPACK_IMPORTED_MODULE_1__.default);

/***/ }),

/***/ "./node_modules/@default-js/defaultjs-extdom/src/dom/HTMLSelectElement.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-extdom/src/dom/HTMLSelectElement.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_ExtendPrototype__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/ExtendPrototype */ "./node_modules/@default-js/defaultjs-extdom/src/utils/ExtendPrototype.js");
/* harmony import */ var _extentions_ValueSupport__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./extentions/ValueSupport */ "./node_modules/@default-js/defaultjs-extdom/src/dom/extentions/ValueSupport.js");




(0,_utils_ExtendPrototype__WEBPACK_IMPORTED_MODULE_0__.default)(HTMLSelectElement,_extentions_ValueSupport__WEBPACK_IMPORTED_MODULE_1__.default);

/***/ }),

/***/ "./node_modules/@default-js/defaultjs-extdom/src/dom/HTMLTextAreaElement.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-extdom/src/dom/HTMLTextAreaElement.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_ExtendPrototype__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/ExtendPrototype */ "./node_modules/@default-js/defaultjs-extdom/src/utils/ExtendPrototype.js");
/* harmony import */ var _utils_Extender__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/Extender */ "./node_modules/@default-js/defaultjs-extdom/src/utils/Extender.js");




(0,_utils_ExtendPrototype__WEBPACK_IMPORTED_MODULE_0__.default)(HTMLTextAreaElement,(0,_utils_Extender__WEBPACK_IMPORTED_MODULE_1__.default)("ValueSupport", Prototype => {	
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
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_ExtendPrototype__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/ExtendPrototype */ "./node_modules/@default-js/defaultjs-extdom/src/utils/ExtendPrototype.js");
/* harmony import */ var _utils_DelegaterBuilder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/DelegaterBuilder */ "./node_modules/@default-js/defaultjs-extdom/src/utils/DelegaterBuilder.js");
/* harmony import */ var _extentions_ListSupport__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./extentions/ListSupport */ "./node_modules/@default-js/defaultjs-extdom/src/dom/extentions/ListSupport.js");




(0,_utils_ExtendPrototype__WEBPACK_IMPORTED_MODULE_0__.default)(HTMLCollection, _extentions_ListSupport__WEBPACK_IMPORTED_MODULE_2__.default);

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


(0,_utils_DelegaterBuilder__WEBPACK_IMPORTED_MODULE_1__.default)(function(aFunctionName, theArguments) {
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
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_ExtendPrototype__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/ExtendPrototype */ "./node_modules/@default-js/defaultjs-extdom/src/utils/ExtendPrototype.js");
/* harmony import */ var _extentions_DataSupport__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./extentions/DataSupport */ "./node_modules/@default-js/defaultjs-extdom/src/dom/extentions/DataSupport.js");
/* harmony import */ var _extentions_ManipulationSupport__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./extentions/ManipulationSupport */ "./node_modules/@default-js/defaultjs-extdom/src/dom/extentions/ManipulationSupport.js");




(0,_utils_ExtendPrototype__WEBPACK_IMPORTED_MODULE_0__.default)(Node,_extentions_DataSupport__WEBPACK_IMPORTED_MODULE_1__.default,_extentions_ManipulationSupport__WEBPACK_IMPORTED_MODULE_2__.default);

/***/ }),

/***/ "./node_modules/@default-js/defaultjs-extdom/src/dom/NodeList.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-extdom/src/dom/NodeList.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_ExtendPrototype__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/ExtendPrototype */ "./node_modules/@default-js/defaultjs-extdom/src/utils/ExtendPrototype.js");
/* harmony import */ var _utils_DelegaterBuilder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/DelegaterBuilder */ "./node_modules/@default-js/defaultjs-extdom/src/utils/DelegaterBuilder.js");
/* harmony import */ var _extentions_ListSupport__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./extentions/ListSupport */ "./node_modules/@default-js/defaultjs-extdom/src/dom/extentions/ListSupport.js");




(0,_utils_ExtendPrototype__WEBPACK_IMPORTED_MODULE_0__.default)(NodeList, _extentions_ListSupport__WEBPACK_IMPORTED_MODULE_2__.default);

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


(0,_utils_DelegaterBuilder__WEBPACK_IMPORTED_MODULE_1__.default)(function(aFunctionName, theArguments) {
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
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_Extender__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/Extender */ "./node_modules/@default-js/defaultjs-extdom/src/utils/Extender.js");


const support = (0,_utils_Extender__WEBPACK_IMPORTED_MODULE_0__.default)("AttributeSupport", Prototype => {
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (support);

/***/ }),

/***/ "./node_modules/@default-js/defaultjs-extdom/src/dom/extentions/DataSupport.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-extdom/src/dom/extentions/DataSupport.js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_Extender__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/Extender */ "./node_modules/@default-js/defaultjs-extdom/src/utils/Extender.js");

const support = (0,_utils_Extender__WEBPACK_IMPORTED_MODULE_0__.default)("DataSupport", Prototype => {
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (support);

/***/ }),

/***/ "./node_modules/@default-js/defaultjs-extdom/src/dom/extentions/EventSupport.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-extdom/src/dom/extentions/EventSupport.js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_Extender__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/Extender */ "./node_modules/@default-js/defaultjs-extdom/src/utils/Extender.js");


const DEFAULT_TIMEOUT = 100;
const support = (0,_utils_Extender__WEBPACK_IMPORTED_MODULE_0__.default)("EventSupport", (Prototype) => {
	const EVENTSPLITER = /(\s+)|(\s*,\s*)/;
	const getWrapperHandleMap = (element) => {
		if (!element.__wrapperhandlemap__) element.__wrapperhandlemap__ = new Map();

		return element.__wrapperhandlemap__;
	};

	const getTriggerTimeouts = (element) => {
		if (!element.___EVENTTRIGGERTIMEOUTS___) element.___EVENTTRIGGERTIMEOUTS___ = {};

		return element.___EVENTTRIGGERTIMEOUTS___;
	};

	const removeWrapper = (element, data, eventTypes) => {
		const { wrapper, option, events, handle } = data;
		const capture = option.capture;
		if (eventTypes) {
			eventTypes = typeof eventTypes === "string" ? eventTypes.split(EVENTSPLITER) : eventTypes;
			for (let event of eventTypes) {
				const index = events.indexOf(event);
				if (index >= 0) {
					element.removeEventListener(event, wrapper, capture);
					events.splice(index, 1);
				}
				if (events.length == 0) getWrapperHandleMap(element).delete(handle);
			}
		} else {
			for (let event of events) {
				element.removeEventListener(event, wrapper, capture);
			}
			getWrapperHandleMap(element).delete(handle);
		}
	};

	Prototype.on = function () {
		if (arguments.length < 2) throw new Error("Too less arguments!");

		const args = Array.from(arguments);
		let events = typeof args[0] === "string" ? args.shift().split(EVENTSPLITER) : args.shift();
		const filter = typeof args[0] === "string" ? args.shift() : null;
		const handle = args.shift();
		const option = typeof args[0] === "undefined" ? { capture: false, once: false, passive: false } : typeof args[0] === "boolean" ? { capture: args.shift(), once: false, passive: false } : args.shift();
		const wrapper = function (event) {
			if (filter) {
				const target = event.target;
				if (typeof target.is === "function" && !target.is(filter)) return;
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

	Prototype.removeOn = function (handle, event, capture) {
		const data = getWrapperHandleMap(this).get(handle);
		if (data) removeWrapper(this, data, event);
		else this.removeEventListener(handle, event, capture);

		return this;
	};

	Prototype.trigger = function () {
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
			const data = args.length >= 1 ? (args.length == 1 ? args.shift() : args) : delegate;
			const event = data ? new CustomEvent(type, { bubbles: true, cancelable: true, composed: true, detail: data }) : new Event(type, { bubbles: true, cancelable: true, composed: true });

			if (delegate) event.delegatedEvent = delegate;
			this.dispatchEvent(event);
		}
		return this;
	};
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (support);


/***/ }),

/***/ "./node_modules/@default-js/defaultjs-extdom/src/dom/extentions/HtmlClassSupport.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-extdom/src/dom/extentions/HtmlClassSupport.js ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_Extender__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/Extender */ "./node_modules/@default-js/defaultjs-extdom/src/utils/Extender.js");


const support = (0,_utils_Extender__WEBPACK_IMPORTED_MODULE_0__.default)("HtmlClassSupport", Prototype => {	
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (support);

/***/ }),

/***/ "./node_modules/@default-js/defaultjs-extdom/src/dom/extentions/ListSupport.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-extdom/src/dom/extentions/ListSupport.js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_Extender__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/Extender */ "./node_modules/@default-js/defaultjs-extdom/src/utils/Extender.js");


const support = (0,_utils_Extender__WEBPACK_IMPORTED_MODULE_0__.default)("ListSupport", Prototype => {		
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (support);

/***/ }),

/***/ "./node_modules/@default-js/defaultjs-extdom/src/dom/extentions/ManipulationSupport.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-extdom/src/dom/extentions/ManipulationSupport.js ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_Extender__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/Extender */ "./node_modules/@default-js/defaultjs-extdom/src/utils/Extender.js");
/* harmony import */ var _utils_Utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/Utils */ "./node_modules/@default-js/defaultjs-extdom/src/utils/Utils.js");



const support = (0,_utils_Extender__WEBPACK_IMPORTED_MODULE_0__.default)("ManipulationSupport", Prototype => {	
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (support);

/***/ }),

/***/ "./node_modules/@default-js/defaultjs-extdom/src/dom/extentions/QuerySupport.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-extdom/src/dom/extentions/QuerySupport.js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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


const support = (0,_utils_Extender__WEBPACK_IMPORTED_MODULE_0__.default)("QuerySupport", Prototype => {	
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
	
	Prototype.parent = function(selector, ignoreShadowRoot) {		
		if(!this.parentNode)
			return null;		
		ignoreShadowRoot = typeof selector === "boolean" ? selector : ignoreShadowRoot;
		selector = typeof selector === "string" ? selector : null;
		
		let parent = this.parentNode;		
		if(parent instanceof ShadowRoot && ignoreShadowRoot)
			parent = parent.host;
						
		if(selector){
			try{
				while(parent && !parent.is(selector))
					parent = parent.parent(selector, ignoreShadowRoot);
			}catch (e) {
				console.error("this:", this, "parent:", parent, "error:", e);
			}
			return parent;
		}
		return parent;
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (support);



/***/ }),

/***/ "./node_modules/@default-js/defaultjs-extdom/src/dom/extentions/ReadyEventSupport.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-extdom/src/dom/extentions/ReadyEventSupport.js ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_Extender__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/Extender */ "./node_modules/@default-js/defaultjs-extdom/src/utils/Extender.js");


const support = (0,_utils_Extender__WEBPACK_IMPORTED_MODULE_0__.default)("ReadyEventSupport", Prototype => {
	Prototype.ready = function(aFunction, once){	
		this.on("ready", aFunction, once);
		if(document.readyState == "complete")			
			this.trigger("ready");
		
		return this;
	};
	
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (support);

/***/ }),

/***/ "./node_modules/@default-js/defaultjs-extdom/src/dom/extentions/ShowHideSupport.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-extdom/src/dom/extentions/ShowHideSupport.js ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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


const support = (0,_utils_Extender__WEBPACK_IMPORTED_MODULE_0__.default)("ShowHideSupport", Prototype => {
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (support);

/***/ }),

/***/ "./node_modules/@default-js/defaultjs-extdom/src/dom/extentions/ValueSupport.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-extdom/src/dom/extentions/ValueSupport.js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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


const support = (0,_utils_Extender__WEBPACK_IMPORTED_MODULE_0__.default)("ValueSupport", Prototype => {	
	Prototype.val = function() {
		let type = getInputType(this);
		if(arguments.length == 0)
			return type.get.apply(this, arguments);
		else
			type.set.apply(this, arguments);
			
		return this;
	};	
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (support);

/***/ }),

/***/ "./node_modules/@default-js/defaultjs-extdom/src/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-extdom/src/index.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DelegaterBuilder);

/***/ }),

/***/ "./node_modules/@default-js/defaultjs-extdom/src/utils/ExtendPrototype.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-extdom/src/utils/ExtendPrototype.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const extendPrototype = function(){
	const args = Array.from(arguments);
	const type = args.shift();	
	while(args.length > 0){
		const extender = args.shift();
		extender(type);
	}
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (extendPrototype);

/***/ }),

/***/ "./node_modules/@default-js/defaultjs-extdom/src/utils/Extender.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-extdom/src/utils/Extender.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Utils */ "./node_modules/@default-js/defaultjs-extdom/src/utils/Utils.js");


const EXTENSIONS_MAP = _Utils__WEBPACK_IMPORTED_MODULE_0__.default.globalVar("___DOM_API_EXTENSION_MAP___", {});
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Extender);

/***/ }),

/***/ "./node_modules/@default-js/defaultjs-extdom/src/utils/Utils.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-extdom/src/utils/Utils.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const Utils = {
	global : (() => {
		if(typeof window !== "undefined") return window;
		if(typeof __webpack_require__.g !== "undefined") return __webpack_require__.g;
		if(typeof self !== "undefined") return self;
		return {};		
	})(),
	globalVar : function(aName, aInitValue){
		if(arguments.length === 2 && typeof Utils.global[aName] === "undefined")
			Utils.global[aName] = aInitValue;
		
		return Utils.global[aName];		
	}
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Utils);

/***/ }),

/***/ "./src/Context.js":
/*!************************!*\
  !*** ./src/Context.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Context)
/* harmony export */ });
/* harmony import */ var _default_js_defaultjs_common_utils_src_PromiseUtils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @default-js/defaultjs-common-utils/src/PromiseUtils */ "./node_modules/@default-js/defaultjs-common-utils/src/PromiseUtils.js");
/* harmony import */ var _default_js_defaultjs_common_utils_src_ObjectUtils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @default-js/defaultjs-common-utils/src/ObjectUtils */ "./node_modules/@default-js/defaultjs-common-utils/src/ObjectUtils.js");
/* harmony import */ var _default_js_defaultjs_common_utils_src_PrivateProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @default-js/defaultjs-common-utils/src/PrivateProperty */ "./node_modules/@default-js/defaultjs-common-utils/src/PrivateProperty.js");
/* harmony import */ var _Directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Directive */ "./src/Directive.js");
/* harmony import */ var _Template__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Template */ "./src/Template.js");






const PRIVATE_WAIT = "wait";
const PRIVATE_CALLBACKS = "callbacks";
const PRIVATE_IGNOREDIRECTIVES = "ignoreDirectives";

const CONTEXTCLONE = new Set();
const CONTEXTS = new Map();
const WARNTIME = 1000;
const CRITICALTIME = 10000;

let observerTimeout = null;
const observe = (context) => {
	CONTEXTS.set(context, Date.now());
	runObserver();
};
const runObserver = () => {
	if (observerTimeout == null) {
		observerTimeout = setTimeout(() => {
			observerTimeout = null;
			const time = Date.now();
			CONTEXTS.forEach((createTime, context) => {
				const delta = time - createTime;
				if (context.closed) CONTEXTS.delete(context);
				else {
					if (delta > CRITICALTIME) {
						console.error("context lives longer then 10s", delta / 1000, context);
					} else if (delta > WARNTIME) {
						console.warn("context lives longer then 1s", delta / 1000, context);
					}
				}
			});
			console.log("open context:", CONTEXTS.size);
			if (CONTEXTS.size > 0) runObserver();
		}, 1000);
	}
};

const toTemplate = (template) => {
	if (template instanceof _Template__WEBPACK_IMPORTED_MODULE_4__.default) return template.importContent();
	else if (typeof template === String) return create(template);
	return template;
};

let id = 0;
class Context {
	constructor({ resolver, renderer, template, container, root, mode = "replace", target = null, parent = null, ignoreDirective }) {
		if (!resolver) throw new Error('Parameter "resolver" is required!');
		if (!renderer) throw new Error('Parameter "renderer" is required!');
		if (!template) throw new Error('Parameter "template" is required!');
		if (!container) throw new Error('Parameter "container" is required!');
		if (!root) throw new Error('Parameter "root" is required!');

		(0,_default_js_defaultjs_common_utils_src_ObjectUtils__WEBPACK_IMPORTED_MODULE_1__.defValue)(this, "id", parent ? `${parent.id}->${id++}` : `root::${id++}`);
		(0,_default_js_defaultjs_common_utils_src_ObjectUtils__WEBPACK_IMPORTED_MODULE_1__.defValue)(this, "depth", parent ? parent.depth + 1 : 0);
		(0,_default_js_defaultjs_common_utils_src_ObjectUtils__WEBPACK_IMPORTED_MODULE_1__.defValue)(this, "parent", parent);
		//defValue(this, "resolver", resolver);
		(0,_default_js_defaultjs_common_utils_src_ObjectUtils__WEBPACK_IMPORTED_MODULE_1__.defValue)(this, "renderer", renderer);
		(0,_default_js_defaultjs_common_utils_src_ObjectUtils__WEBPACK_IMPORTED_MODULE_1__.defValue)(this, "root", root);
		(0,_default_js_defaultjs_common_utils_src_ObjectUtils__WEBPACK_IMPORTED_MODULE_1__.defValue)(this, "template", toTemplate(template));
		(0,_default_js_defaultjs_common_utils_src_ObjectUtils__WEBPACK_IMPORTED_MODULE_1__.defValue)(this, "mode", mode);
		(0,_default_js_defaultjs_common_utils_src_ObjectUtils__WEBPACK_IMPORTED_MODULE_1__.defValue)(this, "subcontexts", new Set());
		const wait = (0,_default_js_defaultjs_common_utils_src_PromiseUtils__WEBPACK_IMPORTED_MODULE_0__.lazyPromise)();
		(0,_default_js_defaultjs_common_utils_src_PrivateProperty__WEBPACK_IMPORTED_MODULE_2__.privateProperty)(this, PRIVATE_IGNOREDIRECTIVES, ignoreDirective instanceof Set ? ignoreDirective : new Set());
		(0,_default_js_defaultjs_common_utils_src_PrivateProperty__WEBPACK_IMPORTED_MODULE_2__.privateProperty)(this, PRIVATE_WAIT, wait);
		(0,_default_js_defaultjs_common_utils_src_PrivateProperty__WEBPACK_IMPORTED_MODULE_2__.privateProperty)(this, PRIVATE_CALLBACKS, []);

		this.content = null;
		this.container = container;
		this.target = target;
		this.resolver = resolver;

		/* execution flags */
		this.stop = false;
		this.ignore = false;
		//console.log(`context={"depth":${this.depth} }, "id": ${this.id}`);
		//this.createtAt = new Error();

		if (parent) {
			parent.subcontexts.add(this);
		}
	}

	get closed() {
		return (0,_default_js_defaultjs_common_utils_src_PrivateProperty__WEBPACK_IMPORTED_MODULE_2__.privateProperty)(this, PRIVATE_WAIT).resolved;
	}

	ignoreDirective(directive) {
		const ignoreDirectives = (0,_default_js_defaultjs_common_utils_src_PrivateProperty__WEBPACK_IMPORTED_MODULE_2__.privateProperty)(this, PRIVATE_IGNOREDIRECTIVES);
		directive instanceof _Directive__WEBPACK_IMPORTED_MODULE_3__.default ? ignoreDirectives.add(directive.name) : ignoreDirectives.add(directive);
	}

	acceptDirective(directive) {
		const ignoreDirectives = (0,_default_js_defaultjs_common_utils_src_PrivateProperty__WEBPACK_IMPORTED_MODULE_2__.privateProperty)(this, PRIVATE_IGNOREDIRECTIVES);
		if (directive instanceof _Directive__WEBPACK_IMPORTED_MODULE_3__.default) return !(ignoreDirectives.has(directive.name) || ignoreDirectives.has(directive));

		return !ignoreDirectives.has(directive);
	}

	finished(callback) {
		if (this.parent) this.parent.finished(callback);
		else this.ready(callback);
	}

	async ready(callback) {
		const callbacks = (0,_default_js_defaultjs_common_utils_src_PrivateProperty__WEBPACK_IMPORTED_MODULE_2__.privateProperty)(this, PRIVATE_CALLBACKS);
		if (callback) {
			if (callback instanceof Array) callback.forEach((callback) => this.wait.then(callback));
			else if (callback instanceof Promise) callbacks.push(async () => await callback);
			else if (typeof callback === "function") callbacks.push(callback);
		} else {
			const wait = (0,_default_js_defaultjs_common_utils_src_PrivateProperty__WEBPACK_IMPORTED_MODULE_2__.privateProperty)(this, PRIVATE_WAIT);
			if (!wait.resolved) {
				if (!this.ignore) for (let callback of callbacks) await callback(this);

				for (let child of this.subcontexts) await child.ready();

				if (this.parent) this.parent.subcontexts.delete(this);

				wait.resolve(this);
			}

			return wait;
		}
	}

	subContext({ resolver = this.resolver, renderer = this.renderer, template = this.template, container = this.container, root = this.root, mode = this.mode, target = this.target, ignoreDirective = null } = {}) {
		return new Context({ resolver, renderer, template, container, mode, root, target, parent: this, ignoreDirective });
	}

	clone({ resolver = this.resolver, renderer = this.renderer, template = this.template, container = this.container, root = this.root, mode = this.mode, target = this.target, ignoreDirective = null } = {}) {
		return new Context({ resolver, renderer, template, container, mode, root, target, parent: null, ignoreDirective });
	}

	toRenderOption({ resolver = this.resolver, renderer = this.renderer, template = this.template, container = this.container, root = this.root, mode = this.mode, target = this.target, ignoreDirective = null } = {}) {
		return { resolver, renderer, template, container, mode, root, target, parent: null, ignoreDirective };
	}
}


/***/ }),

/***/ "./src/Directive.js":
/*!**************************!*\
  !*** ./src/Directive.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Directive)
/* harmony export */ });
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
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DirectiveElement)
/* harmony export */ });
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
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SCOPES": () => (/* binding */ SCOPES),
/* harmony export */   "default": () => (/* binding */ Renderer)
/* harmony export */ });
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
	directive: "directive",
};

const APPLICATION_SCOPE_RESOLVER = new _default_js_defaultjs_expression_language_src_ExpressionResolver_js__WEBPACK_IMPORTED_MODULE_1__.default({ name: SCOPES.application });

const MODEWORKER = {
	replace: async ({ container, target = null, content }) => {
		if (target) {
			target.replace(content);
		} else {
			container.empty();
			container.append(content);
		}
	},
	append: async ({ container, target = null, content }) => {
		if (target) target.after(content);
		else container.append(content);
	},
	prepend: async ({ container, target = null, content }) => {
		if (target) target.before(content);
		else container.prepend(content);
	},
};

const loadTemplateContent = async (template, renderer) => {
	if (template) {
		template = await _Template_js__WEBPACK_IMPORTED_MODULE_2__.default.load(template);
		return template.importContent();
	} else if (renderer.template) {
		return await renderer.template.importContent();
	}

	throw new Error("No content template specified!");
};

const addContent = async (context) => {
	if (context.content) {
		const modeworker = MODEWORKER[context.mode];
		if (!modeworker) throw new Error('The "' + context.mode + '" is not supported!');
		await modeworker(context);
	}
};

const renderContainer = async (context) => {
	let { template, resolver } = context;
	if (!template || template.length == 0) return context;

	let content = [];
	for (let nodeTemplate of template) {
		nodeTemplate.normalize();
		const nodeResolver = new _default_js_defaultjs_expression_language_src_ExpressionResolver_js__WEBPACK_IMPORTED_MODULE_1__.default({ name: SCOPES.node, context: null, parent: resolver });
		const nodeContext = await renderNode(context.subContext({ template: nodeTemplate, resolver: nodeResolver }));
		await nodeContext.ready();
		const node = nodeContext.content;
		if (node) {
			if (node instanceof Array) content = content.concat(node);
			if (node instanceof NodeList || node instanceof HTMLCollection) content = content.concat(Array.from(node));
			else if (node instanceof Node) content.push(node);
		}
	}

	context.content = content.length != 0 ? content : null;
	return context;
};

const renderNode = async (context) => {
	try {
		let { template, renderer } = context;
		if (template instanceof _Element_js__WEBPACK_IMPORTED_MODULE_5__.default) await template.execute(context);
		else await executeDirectives(context);

		const { ignore, content } = context;

		if (!ignore && content) {
			let { resolver } = context;
			const subTemplate = context.template.childNodes;
			if (subTemplate && subTemplate.length > 0) {
				const containerResolver = new _default_js_defaultjs_expression_language_src_ExpressionResolver_js__WEBPACK_IMPORTED_MODULE_1__.default({ name: SCOPES.container, context: null, parent: resolver });
				const subContext = await renderer.render(context.subContext({ container: content, template: subTemplate, resolver: containerResolver }));
				await subContext.ready();
			}
		}

		if (context.content && context.content.tagName && context.content.tagName == "JSTL") context.content = context.content.childNodes; //special case to support the old "<jstl>" tag.
	} catch (e) {
		console.error("error at render node:", e, context);
	}
	return context;
};

const executeDirectives = async (context) => {
	const directives = _Directive_js__WEBPACK_IMPORTED_MODULE_4__.default.directives;
	const length = directives.length;
	for (let i = 0; i < length && !context.stop; i++) {
		const directive = directives[i];
		try {
			if (context.acceptDirective(directive)) await directive.execute(context);
		} catch (e) {
			console.error("error at directive:", e, directive, context);
		}
	}
	return context;
};

class Renderer {
	constructor({ template, data } = {}) {
		if (template && !(template instanceof _Template_js__WEBPACK_IMPORTED_MODULE_2__.default)) throw new Error("template must be an instance of Template!");

		this.template = template;
		this.resolver = new _default_js_defaultjs_expression_language_src_ExpressionResolver_js__WEBPACK_IMPORTED_MODULE_1__.default({ name: SCOPES.data, context: data ? data : {}, parent: APPLICATION_SCOPE_RESOLVER });
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
	async render(context) {
		const calledWithContext = context instanceof _Context_js__WEBPACK_IMPORTED_MODULE_3__.default;
		if (!calledWithContext) {
			let { template = null, data = null, container, root, mode, target } = context;
			template = await loadTemplateContent(template, this);
			const resolver = new _default_js_defaultjs_expression_language_src_ExpressionResolver_js__WEBPACK_IMPORTED_MODULE_1__.default({ name: SCOPES.render, context: data, parent: this.resolver });
			context = new _Context_js__WEBPACK_IMPORTED_MODULE_3__.default({ resolver, renderer: this, template: template, container, root: root ? root : container, mode: mode ? mode : "replace", target });
		} else if (context.closed) throw new Error("calling with closed context", context);

		const template = context.template;
		if (template instanceof Node) await renderNode(context);
		else await renderContainer(context);
		
		await addContent(context);

		if (!calledWithContext)
			await context.ready();

		return context;
	}

	static async build({ template, data } = {}) {
		if (template && template instanceof Promise) template = await template;

		template = template ? await _Template_js__WEBPACK_IMPORTED_MODULE_2__.default.load(template) : null;
		return new Renderer({ template, data });
	}

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
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Template)
/* harmony export */ });
/* harmony import */ var _default_js_defaultjs_common_utils_src_javascript_String_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @default-js/defaultjs-common-utils/src/javascript/String.js */ "./node_modules/@default-js/defaultjs-common-utils/src/javascript/String.js");
/* harmony import */ var _default_js_defaultjs_common_utils_src_javascript_String_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_default_js_defaultjs_common_utils_src_javascript_String_js__WEBPACK_IMPORTED_MODULE_0__);


const CACHE = {};
const getKey = (template, cache, alias) => {
	if (!cache) return null;

	let key = null;
	if (alias) key = alias;
	else if (typeof template === "string") key = template;
	else if (template instanceof URL) key = template.toString();
	else if (template instanceof HTMLElement) key = template.selector();

	if (key) return key.hashcode();

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
	let template = null;
	if (element instanceof HTMLTemplateElement) template = new Template(element, key);
	else {
		template = document.createElement("template");
		if (element instanceof Node || element instanceof NodeList || element instanceof HTMLCollection || element instanceof Array) template.content.append(element.cloneNode(true));
		else throw new Error("Template type is not supported!");

		template = new Template(template, key);
	}

	if (!template) throw new Error("Template can't loaded!");

	if (cache && key) CACHE[key] = template;

	return template;
};

class Template {
	constructor(template, key) {
		this.template = template;
		this.key = key;
	}

	importContent(doc = document) {
		let imported = doc.importNode(this.template, true);
		return imported.content.childNodes;
	}

	remove() {
		if (this.key && CACHE[this.key]) delete CACHE[this.key];
	}

	static async fetch(url, cache = true, alias = null) {
		if (typeof url === "string") {
			return Template.load(new URL(url, loaction), cache, alias);
		} else if (url instanceof URL) return Template.load(url, cache, alias);

		new Error("The url isn't a allowed type! -> [String|URL] required!");
	}

	static async load(template, cache = true, alias = null) {
		if (template instanceof Template) return template;

		const key = getKey(template, cache, alias);
		if (key && CACHE[key]) return CACHE[key];
		else if (typeof template === "string") {
			return fromSource(template, cache, key);
		} else if (template instanceof URL) return await fromURL(template, cache, key);
		else if (template instanceof Node || template instanceof NodeList || template instanceof HTMLCollection || template instanceof HTMLTemplateElement) return fromElement(template, cache, key);

		new Error("The template isn't a allowed type! -> [String|URL|Node|NodeList|HTMLCollection|Template] required!");
	}
}


/***/ }),

/***/ "./src/directives/Attributes.js":
/*!**************************************!*\
  !*** ./src/directives/Attributes.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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


class Attribute extends _Directive_js__WEBPACK_IMPORTED_MODULE_0__.default {
	constructor() {
		super();
	}

	get name() { return "attribute" }
	get rank() { return _Directive_js__WEBPACK_IMPORTED_MODULE_0__.default.MIN_RANK }
	get phase() { return _Directive_js__WEBPACK_IMPORTED_MODULE_0__.default.PHASE.content }


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

_Directive_js__WEBPACK_IMPORTED_MODULE_0__.default.define({ directive: new Attribute() });

/***/ }),

/***/ "./src/directives/Choose.js":
/*!**********************************!*\
  !*** ./src/directives/Choose.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Directive_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Directive.js */ "./src/Directive.js");


class Choose extends _Directive_js__WEBPACK_IMPORTED_MODULE_0__.default {
	constructor() {
		super();
	}

	get name() { return "choose" }
	get rank() { return _Directive_js__WEBPACK_IMPORTED_MODULE_0__.default.MIN_RANK + 1 }
	get phase() { return _Directive_js__WEBPACK_IMPORTED_MODULE_0__.default.PHASE.template }

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

_Directive_js__WEBPACK_IMPORTED_MODULE_0__.default.define({ directive: new Choose() });

/***/ }),

/***/ "./src/directives/Data.js":
/*!********************************!*\
  !*** ./src/directives/Data.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Directive_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Directive.js */ "./src/Directive.js");
/* harmony import */ var _default_js_defaultjs_expression_language_src_ExpressionResolver__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @default-js/defaultjs-expression-language/src/ExpressionResolver */ "./node_modules/@default-js/defaultjs-expression-language/src/ExpressionResolver.js");



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
	else{
		const resolver = new _default_js_defaultjs_expression_language_src_ExpressionResolver__WEBPACK_IMPORTED_MODULE_1__.default({ context: data, name: "jstl-data", parent: context.resolver });
		//context = context.subContext({resolver});
		context.resolver = resolver;
	}
	
		
	return context;
};



class Data extends _Directive_js__WEBPACK_IMPORTED_MODULE_0__.default {
	constructor() {
		super();
	}

	get name() { return "data" }
	get rank() { return 1000 }
	get phase(){return _Directive_js__WEBPACK_IMPORTED_MODULE_0__.default.PHASE.data}

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

_Directive_js__WEBPACK_IMPORTED_MODULE_0__.default.define({ directive: new Data() });

/***/ }),

/***/ "./src/directives/Foreach.js":
/*!***********************************!*\
  !*** ./src/directives/Foreach.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
	resolver = new _default_js_defaultjs_expression_language_src_ExpressionResolver_js__WEBPACK_IMPORTED_MODULE_1__.default({ context: data, name: "jstl-foreach", parent: resolver });

	condition = condition ? await resolver.resolve(condition, false) : false;
	if (condition)
		return false;
	const itemContext = context.subContext({ resolver, container, template, mode: "append" });
	await renderer.render(itemContext);
	await itemContext.ready();
	return true;
};

class Foreach extends _Directive_js__WEBPACK_IMPORTED_MODULE_0__.default {
	constructor() {
		super();
	}

	get name() { return "foreach" }
	get rank() { return _Directive_js__WEBPACK_IMPORTED_MODULE_0__.default.MIN_RANK + 2 }
	get phase() { return _Directive_js__WEBPACK_IMPORTED_MODULE_0__.default.PHASE.template }

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

_Directive_js__WEBPACK_IMPORTED_MODULE_0__.default.define({ directive: new Foreach() });

/***/ }),

/***/ "./src/directives/If.js":
/*!******************************!*\
  !*** ./src/directives/If.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Directive_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Directive.js */ "./src/Directive.js");


class If extends _Directive_js__WEBPACK_IMPORTED_MODULE_0__.default {
	constructor() {
		super();
	}

	get name() { return "if" }
	get rank() { return _Directive_js__WEBPACK_IMPORTED_MODULE_0__.default.MIN_RANK + 1000 }
	get phase() { return _Directive_js__WEBPACK_IMPORTED_MODULE_0__.default.PHASE.init }

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

_Directive_js__WEBPACK_IMPORTED_MODULE_0__.default.define({ directive: new If() });

/***/ }),

/***/ "./src/directives/Include.js":
/*!***********************************!*\
  !*** ./src/directives/Include.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Directive_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Directive.js */ "./src/Directive.js");
/* harmony import */ var _Template_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Template.js */ "./src/Template.js");



class Include extends _Directive_js__WEBPACK_IMPORTED_MODULE_0__.default {
	constructor() {
		super();
	}

	get name() {
		return "include";
	}
	get rank() {
		return _Directive_js__WEBPACK_IMPORTED_MODULE_0__.default.MIN_RANK;
	}
	get phase() {
		return _Directive_js__WEBPACK_IMPORTED_MODULE_0__.default.PHASE.template;
	}

	async execute(context) {
		if (!(context.template instanceof HTMLElement) || !context.template.attr("jstl-include")) return context;
		try {
			const { template, resolver, renderer } = context;
			let include = template.attr("jstl-include");
			include = await resolver.resolveText(include);
			include = new URL(include, location);
			include = await _Template_js__WEBPACK_IMPORTED_MODULE_1__.default.load(include);

			const mode = template.attr("jstl-include-mode") || "replace";

			const subContext = context.subContext({ template: include, container: context.content, mode});
			await renderer.render(subContext);
			await subContext.ready();
			context.ignore;

			return context;
		} catch (e) {
			console.error(e, context.template);
			return context;
		}
	}
}

_Directive_js__WEBPACK_IMPORTED_MODULE_0__.default.define({ directive: new Include() });


/***/ }),

/***/ "./src/directives/Initial.js":
/*!***********************************!*\
  !*** ./src/directives/Initial.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Directive_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Directive.js */ "./src/Directive.js");
/* harmony import */ var _elements_Replace_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../elements/Replace.js */ "./src/elements/Replace.js");



class Initial extends _Directive_js__WEBPACK_IMPORTED_MODULE_0__.default {
	constructor() {
		super();
	}

	get name() {
		return "initial";
	}
	get rank() {
		return _Directive_js__WEBPACK_IMPORTED_MODULE_0__.default.MIN_RANK;
	}
	get phase() {
		return _Directive_js__WEBPACK_IMPORTED_MODULE_0__.default.PHASE.init;
	}

	async execute(context) {
		const { template, renderer, resolver } = context;
		if (!(template instanceof Element)) {
			context.content = document.importNode(template, true);
		} else if (template.attr("jstl-async")) {
			context.content = new _elements_Replace_js__WEBPACK_IMPORTED_MODULE_1__.default();
			template.attr("jstl-async", null);
			const renderOption = context.toRenderOption({ mode: "replace", target: context.content });
			setTimeout(() => {
				renderer.render(renderOption);
			}, parseInt(template.attr("jstl-async") || "250") || 250);
			context.stop = true;
			context.ignore = true;
		} else if (template.attr("jstl-ignore")) {
			context.content = document.importNode(template, true);
			context.stop = true;
			context.ignore = true;
		} else if (template instanceof HTMLTemplateElement) {
			context.content = document.createElement(template.tagName);
			const subContext = context.subContext({ template: template.content.childNodes, container: context.content.content });
			await renderer.render(subContext);			
			context.stop = true;
			context.ignore = true;
		} else if (template.hasAttribute("jstl-tagname")) {
			let tagname = template.attr("jstl-tagname").trim();
			if (tagname.length > 0) context.content = document.createElement(await resolver.resolveText(template.attr("jstl-tagname")));
			else {
				context.content = document.importNode(template, true);
				context.stop = true;
				context.ignore = true;
			}
		} else if (template.tagName) {
			context.content = document.createElement(template.tagName);
		} else {
			context.content = document.importNode(template, true);
			context.stop = true;
			context.ignore = true;
		}

		return context;
	}
}

_Directive_js__WEBPACK_IMPORTED_MODULE_0__.default.define({ directive: new Initial() });


/***/ }),

/***/ "./src/directives/OnFinished.js":
/*!**************************************!*\
  !*** ./src/directives/OnFinished.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Directive_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Directive.js */ "./src/Directive.js");
/* harmony import */ var _default_js_defaultjs_expression_language_src_ExpressionResolver__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @default-js/defaultjs-expression-language/src/ExpressionResolver */ "./node_modules/@default-js/defaultjs-expression-language/src/ExpressionResolver.js");



const NAME = "on-finished";
const ATTRIBUTE_ON_FINISHED = `jstl-${NAME}`;
const ATTRIBUTE_ON_FINISHED_ASYNC = `${ATTRIBUTE_ON_FINISHED}-async`;

class OnFinished extends _Directive_js__WEBPACK_IMPORTED_MODULE_0__.default {
	constructor() {
		super();
	}

	get name() { return NAME }
	get rank() { return _Directive_js__WEBPACK_IMPORTED_MODULE_0__.default.MAX_RANK }
	get phase() { return _Directive_js__WEBPACK_IMPORTED_MODULE_0__.default.PHASE.finish }



	async execute(context) {
		const { template, content, root } = context;
		if (!(template instanceof HTMLElement) || !template.hasAttribute(ATTRIBUTE_ON_FINISHED))
			return context;

		const expression = template.attr(ATTRIBUTE_ON_FINISHED);
		const asyncCall = template.hasAttribute(ATTRIBUTE_ON_FINISHED_ASYNC);

		const data = {
			$element: content,
			$root: root,
			$template: template
		};
		const resolver = new _default_js_defaultjs_expression_language_src_ExpressionResolver__WEBPACK_IMPORTED_MODULE_1__.default({ context: data, name: "jstl-data", parent: context.resolver });


		context.finished(async () => {
			try {
				if(!asyncCall)
					return resolver.resolve(expression, null);
					
				resolver.resolve(expression, null);
			} catch (e) {
				console.error(e);
			}
		});

		return context;
	}
}

_Directive_js__WEBPACK_IMPORTED_MODULE_0__.default.define({ directive: new OnFinished() });

/***/ }),

/***/ "./src/directives/Repeat.js":
/*!**********************************!*\
  !*** ./src/directives/Repeat.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Directive_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Directive.js */ "./src/Directive.js");
/* harmony import */ var _default_js_defaultjs_expression_language_src_ExpressionResolver_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @default-js/defaultjs-expression-language/src/ExpressionResolver.js */ "./node_modules/@default-js/defaultjs-expression-language/src/ExpressionResolver.js");



const DIRECTIVENAME = "jstl-repeat";
const IGNOREDIRECTIVE = new Set([DIRECTIVENAME]);

const ATTRIBUTE = {
	DATA: `${DIRECTIVENAME}`,
	VAR: `${DIRECTIVENAME}-var`,
	STATUS: `${DIRECTIVENAME}-status`,
	COUNT: `${DIRECTIVENAME}-count`,
	START: `${DIRECTIVENAME}-start`,
	STEP: `${DIRECTIVENAME}-step`,
	CONDITION: `${DIRECTIVENAME}-condition`,
};

const doCount = async (option) => {
	let { start, step, count, varname, status, resolver } = option;
	count = await resolver.resolve(count);
	const length = start + count * step;
	let stop = false;
	for (let i = start; i < length && !stop; i = i + step) {
		const iteration = {};
		iteration[varname] = i;
		iteration[status] = {
			index: i,
			number: i + 1,
			step,
			count,
		};
		stop = !(await iterate(iteration, option));
	}
};

const doRepeat = async (option) => {
	let { data, start, step, count, varname, status, resolver } = option;

	data = await resolver.resolve(data);
	let array = data;
	if (!(data instanceof Array)) array = Object.getOwnPropertyNames(data);

	count = count != "" ? await resolver.resolve(count, 0) : null;
	const length = count ? Math.min(start + count, array.length) : array.length;
	let stop = false;
	for (let i = start; i < length && !stop; i = i + step) {
		const iteration = {};
		iteration[varname] = data[i];
		iteration[status] = {
			index: i,
			number: i + 1,
			count: length,
			data,
		};
		stop = !(await iterate(iteration, option));
	}
};

const iterate = async (data, option) => {
	let { template, resolver, renderer, condition, context } = option;
	resolver = new _default_js_defaultjs_expression_language_src_ExpressionResolver_js__WEBPACK_IMPORTED_MODULE_1__.default({ context: data, name: DIRECTIVENAME, parent: resolver });

	condition = condition ? await resolver.resolve(condition, false) : false;
	if (condition) return false;

	const itemContext =  context.subContext({ resolver, template, mode: "append", ignoreDirective: IGNOREDIRECTIVE })
	await renderer.render(itemContext);
	await itemContext.ready();

	return true;
};

class Repeat extends _Directive_js__WEBPACK_IMPORTED_MODULE_0__.default {
	constructor() {
		super();
	}

	get name() {
		return DIRECTIVENAME;
	}
	get rank() {
		return _Directive_js__WEBPACK_IMPORTED_MODULE_0__.default.MIN_RANK + 3;
	}
	get phase() {
		return _Directive_js__WEBPACK_IMPORTED_MODULE_0__.default.PHASE.template;
	}

	async execute(context) {
		if (!(context.template instanceof HTMLElement) || (!context.template.attr(ATTRIBUTE.DATA) && !context.template.attr(ATTRIBUTE.COUNT))) return context;

		try {
			const { template, resolver, renderer, content, container } = context;
			const option = {
				data: (template.attr(ATTRIBUTE.DATA) || "").trim(),
				count: (template.attr(ATTRIBUTE.COUNT) || "").trim(),
				start: await resolver.resolve(template.attr(ATTRIBUTE.START) || "0"),
				step: await resolver.resolve(template.attr(ATTRIBUTE.STEP) || "1"),
				varname: (template.attr(ATTRIBUTE.VAR) || "item").trim(),
				status: (template.attr(ATTRIBUTE.STATUS) || "status").trim(),
				condition: template.attr(ATTRIBUTE.CONDITION),
				template: template,
				tagname: content.tagName,
				resolver,
				renderer,
				container,
				context,
			};
			if ((!option.data || option.data == "") && option.count) await doCount(option);
			else await doRepeat(option);
		} catch (error) {
			console.error("error at jstl-repeat:", error);
		}

		context.content = null;
		context.stop = true;
		context.ignore = true;
		return context;
	}
}

_Directive_js__WEBPACK_IMPORTED_MODULE_0__.default.define({ directive: new Repeat() });


/***/ }),

/***/ "./src/directives/Text.js":
/*!********************************!*\
  !*** ./src/directives/Text.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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


class TextContent extends _Directive_js__WEBPACK_IMPORTED_MODULE_0__.default {
	constructor() {
		super();
	}

	get name() { return "text" }
	get rank() { return _Directive_js__WEBPACK_IMPORTED_MODULE_0__.default.MIN_RANK + 1 }
	get phase() { return _Directive_js__WEBPACK_IMPORTED_MODULE_0__.default.PHASE.content }



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

_Directive_js__WEBPACK_IMPORTED_MODULE_0__.default.define({ directive: new TextContent() });

/***/ }),

/***/ "./src/directives/index.js":
/*!*********************************!*\
  !*** ./src/directives/index.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Initial_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Initial.js */ "./src/directives/Initial.js");
/* harmony import */ var _Data_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Data.js */ "./src/directives/Data.js");
/* harmony import */ var _If_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./If.js */ "./src/directives/If.js");
/* harmony import */ var _Choose_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Choose.js */ "./src/directives/Choose.js");
/* harmony import */ var _Include_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Include.js */ "./src/directives/Include.js");
/* harmony import */ var _Foreach_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Foreach.js */ "./src/directives/Foreach.js");
/* harmony import */ var _Repeat_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Repeat.js */ "./src/directives/Repeat.js");
/* harmony import */ var _Text_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Text.js */ "./src/directives/Text.js");
/* harmony import */ var _Attributes_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Attributes.js */ "./src/directives/Attributes.js");
/* harmony import */ var _OnFinished_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./OnFinished.js */ "./src/directives/OnFinished.js");











/***/ }),

/***/ "./src/elements/Replace.js":
/*!*********************************!*\
  !*** ./src/elements/Replace.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ReplaceElement)
/* harmony export */ });
/* harmony import */ var _Element_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Element.js */ "./src/Element.js");


class ReplaceElement extends _Element_js__WEBPACK_IMPORTED_MODULE_0__.default{
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
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Replace_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Replace.js */ "./src/elements/Replace.js");


/***/ }),

/***/ "./test/index.js":
/*!***********************!*\
  !*** ./test/index.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _default_js_defaultjs_extdom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @default-js/defaultjs-extdom */ "./node_modules/@default-js/defaultjs-extdom/index.js");
/* harmony import */ var _tests__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tests */ "./test/tests/index.js");



/***/ }),

/***/ "./test/tests/RendererTest/JstlTagReplaceTest.js":
/*!*******************************************************!*\
  !*** ./test/tests/RendererTest/JstlTagReplaceTest.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_Renderer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @src/Renderer.js */ "./src/Renderer.js");


describe("Renderer Test - jstl remove test", () => {
	
	beforeAll(() => {});	
	
	it("case 1", async () => {		
		const container = create("<div></div>").first();
		expect(container.children.length).toBe(0);
		await new _src_Renderer_js__WEBPACK_IMPORTED_MODULE_0__.default().render({
			container: container, 
			data: {}, 
			template: "<jstl><div></div></jstl>"
		});
		
		expect(container.children.length).toBe(1);
		expect(container.children[0].tagName).toBe("DIV");
	});
	
	
	it("case 2", async () => {		
		const container = create("<div></div>").first();
		expect(container.children.length).toBe(0);
		await new _src_Renderer_js__WEBPACK_IMPORTED_MODULE_0__.default().render({
			container: container, 
			data: {render: false}, 
			template: "<jstl jstl-if=\"${render}\"><div></div></jstl>"
		});
		
		expect(container.children.length).toBe(0);
	});
	
	it("case 3", async () => {		
		const container = create("<div></div>").first();
		expect(container.children.length).toBe(0);
		await new _src_Renderer_js__WEBPACK_IMPORTED_MODULE_0__.default().render({
			container: container, 
			data: {render: true}, 
			template: "<jstl jstl-if=\"${render}\"><div></div></jstl>"
		});
		
		expect(container.children.length).toBe(1);
		expect(container.children[0].tagName).toBe("DIV");
	});
	
	afterAll(() => {});
});

/***/ }),

/***/ "./test/tests/RendererTest/RenderModeTest.js":
/*!***************************************************!*\
  !*** ./test/tests/RendererTest/RenderModeTest.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_Renderer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @src/Renderer.js */ "./src/Renderer.js");


describe("Renderer Test - mode", () => {
	
	beforeAll(() => {});
	
	it("default (replace)", async () => {
		const container = create("<div></div>").first();
		
		const option = {
			container: container, 
			data: {}, 
			template: "<div></div>"
		};		
		await (await _src_Renderer_js__WEBPACK_IMPORTED_MODULE_0__.default.build({template: "<div></div>"})).render(option);		
		expect(container.children.length).toBe(1);
		await (await _src_Renderer_js__WEBPACK_IMPORTED_MODULE_0__.default.build()).render(option);
		expect(container.children.length).toBe(1);
	});
	
	it("replace without target", async () => {
		const container = create("<div></div>").first();
		
		const option = {
			container: container, 
			data: {}, 
			template: "<div></div>",
			mode: "replace"
		};		
		await new _src_Renderer_js__WEBPACK_IMPORTED_MODULE_0__.default().render(option);		
		expect(container.children.length).toBe(1);
		new _src_Renderer_js__WEBPACK_IMPORTED_MODULE_0__.default().render(option);
		expect(container.children.length).toBe(1);
	});
	
	it("replace with target", async () => {
		const container = create("<div><a></a></div>").first();
		const target = container.find("a").first();
		const option = {
			container: container, 
			data: {}, 
			template: "<div></div>",
			mode: "replace",
			target: target
		};
		await new _src_Renderer_js__WEBPACK_IMPORTED_MODULE_0__.default().render(option);		
		expect(container.children.length).toBe(1);
		expect(container.children[0].tagName).toBe("DIV");
	});
	
	afterAll(() => {});
});

/***/ }),

/***/ "./test/tests/RendererTest/RenderTest.js":
/*!***********************************************!*\
  !*** ./test/tests/RendererTest/RenderTest.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_Renderer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @src/Renderer.js */ "./src/Renderer.js");


describe("Renderer Test - traverse tree", () => {
	
	beforeAll(() => {});	
	
	it("case 1", async () => {		
		const container = create("<div></div>").first();
		expect(container.children.length).toBe(0);
		await new _src_Renderer_js__WEBPACK_IMPORTED_MODULE_0__.default().render({
			container: container, 
			data: {}, 
			template: "<div></div>"
		});
		
		expect(container.children.length).toBe(1);
	});
	
	it("case 2", async () => {		
		const container = create("<div></div>").first();
		expect(container.children.length).toBe(0);
		
		await new _src_Renderer_js__WEBPACK_IMPORTED_MODULE_0__.default().render({
			container: container, 
			data: {}, 
			template: 	"<div></div>" +
						"<div></div>" +
						"<div></div>" +
						"<div></div>" +
						"<div></div>"
		});		
		expect(container.children.length).toBe(5);
	});
	
	it("case 3", async () => {		
		const container = create("<div></div>").first();
		expect(container.children.length).toBe(0);
		await new _src_Renderer_js__WEBPACK_IMPORTED_MODULE_0__.default().render({
			container: container, 
			data: {}, 
			template: 	"<div>" +
						"\t<div></div>" +
						"\t<div></div>" +
						"\t<div></div>" +
						"\t<div></div>" +
						"\t<div></div>" +
						"</div>"
		});
		
		let element = container;
		expect(element.children.length).toBe(1);
		
		element = element.children[0];
		expect(element.children.length).toBe(5);
	});
	
	it("case 4", async () => {		
		const container = create("<div></div>").first();
		expect(container.children.length).toBe(0);
		
		const content = "<div>{content}</div>";
		let template = content + content + content + content;
		for(let i = 0; i < 100; i++)
			template = template.replace(/\{content\}/g, content);
		
		await new _src_Renderer_js__WEBPACK_IMPORTED_MODULE_0__.default().render({
			container: container, 
			data: {}, 
			template: 	template
		});
		expect(container.find("div").length > 100).toBe(true);
	});
	
	afterAll(() => {});
});

/***/ }),

/***/ "./test/tests/RendererTest/index.js":
/*!******************************************!*\
  !*** ./test/tests/RendererTest/index.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _RenderTest_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RenderTest.js */ "./test/tests/RendererTest/RenderTest.js");
/* harmony import */ var _RenderModeTest_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RenderModeTest.js */ "./test/tests/RendererTest/RenderModeTest.js");
/* harmony import */ var _JstlTagReplaceTest_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./JstlTagReplaceTest.js */ "./test/tests/RendererTest/JstlTagReplaceTest.js");





/***/ }),

/***/ "./test/tests/TemplateTest/CacheTest.js":
/*!**********************************************!*\
  !*** ./test/tests/TemplateTest/CacheTest.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_Template_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @src/Template.js */ "./src/Template.js");


describe("Template Cache Test - Template.load()", () => {
	
	beforeAll(() => {});	
	
	it("load from source code", async () => {
		const source =	"<div>" +
						"\t<div></div>" +
						"\t<div></div>" +
						"</div>";

		const expected = await _src_Template_js__WEBPACK_IMPORTED_MODULE_0__.default.load(source);
		const result = await _src_Template_js__WEBPACK_IMPORTED_MODULE_0__.default.load(source);
		expect(result).toBe(expected);
	});
	
	it("load from url string", async () => {		
		const expected = await _src_Template_js__WEBPACK_IMPORTED_MODULE_0__.default.load("/templates/TemplateTest/LoadFromURL.html");
		const result = await _src_Template_js__WEBPACK_IMPORTED_MODULE_0__.default.load("/templates/TemplateTest/LoadFromURL.html");
		expect(result).toBe(expected);
	});
	
	it("load from url", async () => {		
		const url = new URL("/templates/TemplateTest/LoadFromURL.html", location.origin).toString();
		
		const expected = await _src_Template_js__WEBPACK_IMPORTED_MODULE_0__.default.load(url);
		const result = await _src_Template_js__WEBPACK_IMPORTED_MODULE_0__.default.load(url);
		expect(result).toBe(expected);
	});
	
	it("load from HTMLTemplateElement", async () => {
		const template = create("<div>" +
								"\t<div></div>" +
								"\t<div></div>" +
								"</div>", true);		
		
		const expected = await _src_Template_js__WEBPACK_IMPORTED_MODULE_0__.default.load(template);
		const result = await _src_Template_js__WEBPACK_IMPORTED_MODULE_0__.default.load(template);
		expect(result).toBe(expected);
	});
	
	it("load from Node", async () => {
		const node = create("<div>" +
								"\t<div></div>" +
								"\t<div></div>" +
								"</div>").first();		
		
		const expected = await _src_Template_js__WEBPACK_IMPORTED_MODULE_0__.default.load(node, false);
		const result = await _src_Template_js__WEBPACK_IMPORTED_MODULE_0__.default.load(node, false);
		expect(result).not.toBe(expected);
	});
	
	it("load from NodeList", async () => {
		const nodelist = create("<div>" +
								"\t<div></div>" +
								"\t<div></div>" +
								"</div>");
		
		const expected = await _src_Template_js__WEBPACK_IMPORTED_MODULE_0__.default.load(nodelist, false);
		const result = await _src_Template_js__WEBPACK_IMPORTED_MODULE_0__.default.load(nodelist, false);
		expect(result).not.toBe(expected);
	});
	
	it("load from HTMLCollection", async () => {
		const htmlcollection = create("<div>" +
								"\t<div></div>" +
								"\t<div></div>" +
								"</div>",true).content.children;
		
		const expected = await _src_Template_js__WEBPACK_IMPORTED_MODULE_0__.default.load(htmlcollection);
		const result = await _src_Template_js__WEBPACK_IMPORTED_MODULE_0__.default.load(htmlcollection);
		expect(result).not.toBe(expected);
	});
	
	it("load with alias", async () => {
		const nodelist = create("<div>" +
								"\t<div></div>" +
								"\t<div></div>" +
								"</div>");
		
		const expected = await _src_Template_js__WEBPACK_IMPORTED_MODULE_0__.default.load(nodelist, true, "test");
		const result = await _src_Template_js__WEBPACK_IMPORTED_MODULE_0__.default.load(nodelist, true, "test");
		expect(result).toBe(expected);
	});
	
	afterAll(() => {});
});

/***/ }),

/***/ "./test/tests/TemplateTest/LoadTest.js":
/*!*********************************************!*\
  !*** ./test/tests/TemplateTest/LoadTest.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_Template_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @src/Template.js */ "./src/Template.js");


describe("Template Test - Template.load()", () => {
	
	beforeAll(() => {});	
	
	it("load from source code", async () => {
		const source =	"<div>" +
						"\t<div></div>" +
						"\t<div></div>" +
						"</div>";
		
		const result = await _src_Template_js__WEBPACK_IMPORTED_MODULE_0__.default.load(source, false);
		expect(result).toBeDefined();
		expect(result instanceof _src_Template_js__WEBPACK_IMPORTED_MODULE_0__.default).toBe(true);
		expect(result.template).toBeDefined();
		expect(result.template instanceof HTMLTemplateElement).toBe(true);
	});
	
	it("load from url string", async () => {		
		const result = await _src_Template_js__WEBPACK_IMPORTED_MODULE_0__.default.load(new URL("/templates/TemplateTest/LoadFromURL.html", location), false);
		expect(result).toBeDefined();
		expect(result instanceof _src_Template_js__WEBPACK_IMPORTED_MODULE_0__.default).toBe(true);
		expect(result.template).toBeDefined();
		expect(result.template instanceof HTMLTemplateElement).toBe(true);
		expect(result.template.content.children.length).toBe(5);
		expect(result.key).toBeDefined();
	});
	
	it("load from url", async () => {		
		const url = new URL("/templates/TemplateTest/LoadFromURL.html", location);
		const result = await _src_Template_js__WEBPACK_IMPORTED_MODULE_0__.default.load(url.toString(), false);
		expect(result).toBeDefined();
		expect(result instanceof _src_Template_js__WEBPACK_IMPORTED_MODULE_0__.default).toBe(true);
		expect(result.template).toBeDefined();
		expect(result.template instanceof HTMLTemplateElement).toBe(true);
		expect(result.key).toBeDefined();
	});
	
	it("load from HTMLTemplateElement", async () => {
		const template = create("<div></div>" +
								"<div></div>" +
								"<div></div>" +
								"<div></div>" +
								"<div></div>", true);		
		
		const result = await _src_Template_js__WEBPACK_IMPORTED_MODULE_0__.default.load(template, false);
		expect(result).toBeDefined();
		expect(result instanceof _src_Template_js__WEBPACK_IMPORTED_MODULE_0__.default).toBe(true);
		expect(result.template).toBeDefined();
		expect(result.template instanceof HTMLTemplateElement).toBe(true);
		expect(result.template instanceof HTMLTemplateElement).toBe(true);
		expect(result.template.content.childNodes.length).toBe(5);
		expect(result.key).toBeDefined();
	});
	
	it("load from Node", async () => {
		const node = create(`<div><div></div><div></div></div>`).first();		
		
		expect(node instanceof Node).toBe(true);
		const result = await _src_Template_js__WEBPACK_IMPORTED_MODULE_0__.default.load(node, false);
		expect(result).toBeDefined();
		expect(result instanceof _src_Template_js__WEBPACK_IMPORTED_MODULE_0__.default).toBe(true);
		expect(result.template).toBeDefined();
		expect(result.template instanceof HTMLTemplateElement).toBe(true);
		expect(result.importContent().length).toBe(1);
		expect(result.key).toBeDefined();
	});
	
	it("load from NodeList", async () => {
		const nodelist = create("<div>" +
								"\t<div></div>" +
								"\t<div></div>" +
								"</div>");

		expect(nodelist instanceof NodeList).toBe(true);
		const result = await _src_Template_js__WEBPACK_IMPORTED_MODULE_0__.default.load(nodelist, false);
		expect(result).toBeDefined();
		expect(result instanceof _src_Template_js__WEBPACK_IMPORTED_MODULE_0__.default).toBe(true);
		expect(result.template).toBeDefined();
		expect(result.template instanceof HTMLTemplateElement).toBe(true);
		expect(result.key).toBeDefined();
	});
	
	it("load from HTMLCollection", async () => {
		const htmlcollection = create("<div>" +
								"\t<div></div>" +
								"\t<div></div>" +
								"</div>",true).content.children;
		
		expect(htmlcollection instanceof HTMLCollection).toBe(true);
		const result = await _src_Template_js__WEBPACK_IMPORTED_MODULE_0__.default.load(htmlcollection, false);
		expect(result).toBeDefined();
		expect(result instanceof _src_Template_js__WEBPACK_IMPORTED_MODULE_0__.default).toBe(true);
		expect(result.template).toBeDefined();
		expect(result.template instanceof HTMLTemplateElement).toBe(true);
		expect(result.key).toBeDefined();
	});
	
	afterAll(() => {});
});

/***/ }),

/***/ "./test/tests/TemplateTest/index.js":
/*!******************************************!*\
  !*** ./test/tests/TemplateTest/index.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _LoadTest_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LoadTest.js */ "./test/tests/TemplateTest/LoadTest.js");
/* harmony import */ var _CacheTest_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CacheTest.js */ "./test/tests/TemplateTest/CacheTest.js");



/***/ }),

/***/ "./test/tests/directives/AttributeTest/index.js":
/*!******************************************************!*\
  !*** ./test/tests/directives/AttributeTest/index.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_Renderer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @src/Renderer.js */ "./src/Renderer.js");


describe("Attribute Test - ", () => {

	beforeAll(() => { });

	it("keep attributes from template", async () => {
		const container = create("<div></div>").first();
		const renderer = await _src_Renderer_js__WEBPACK_IMPORTED_MODULE_0__.default.build({ template: "<div id=\"id\" attr-1=\"attr-1\" data-test-1=\"data-test-1\"></div>" });

		await renderer.render({ container });
		let element = container.children[0];

		expect(element.attr("id")).toBe("id");
		expect(element.attr("attr-1")).toBe("attr-1");
		expect(element.attr("data-test-1")).toBe("data-test-1");
	});

	it("boolean attributes -> ?boolean=\"${boolean}\"", async () => {
		const container = create("<div></div>").first();
		const renderer = await _src_Renderer_js__WEBPACK_IMPORTED_MODULE_0__.default.build({ template: "<div ?boolean=\"${boolean}\"></div>" });

		await renderer.render({ container, data: { boolean: true } });
		let element = container.children[0];
		expect(element.attr("boolean")).toBe("true");

		await renderer.render({ container, data: { boolean: false } });
		element = container.children[0];
		expect(element.attr("boolean")).toBe(null);
	});


	it("append attributes -> attr=\"${attr}\"", async () => {
		const container = create("<div></div>").first();
		const renderer = await _src_Renderer_js__WEBPACK_IMPORTED_MODULE_0__.default.build({ template: "<div attr=\"${attr}\"></div>" });

		await renderer.render({ container, data: { attr: "attr" } });
		let element = container.children[0];
		expect(element.attr("attr")).toBe("attr");
	});
	
	it("append attributes -> attr=\"\"", async () => {
		const container = create("<div></div>").first();
		const renderer = await _src_Renderer_js__WEBPACK_IMPORTED_MODULE_0__.default.build({ template: "<div attr=\"\"></div>" });

		await renderer.render({ container, data: { attr: "attr" } });
		let element = container.children[0];
		expect(element.attr("attr")).toBe("");
	});


	it("append attributes with condition=true -> ?attr=\"${boolean}\" attr=\"${attr}\"", async () => {
		const container = create("<div></div>").first();
		const renderer = await _src_Renderer_js__WEBPACK_IMPORTED_MODULE_0__.default.build({ template: "<div ?attr=\"${boolean}\" attr=\"${attr}\"></div>" });

		await renderer.render({ container, data: { attr: "attr", boolean: true } });
		let element = container.children[0];
		expect(element.attr("attr")).toBe("attr");
	});

	it("append attributes with condition=false -> ?attr=\"${boolean}\" attr=\"${attr}\"", async () => {
		const container = create("<div></div>").first();
		const renderer = await _src_Renderer_js__WEBPACK_IMPORTED_MODULE_0__.default.build({ template: "<div ?attr=\"${boolean}\" attr=\"${attr}\"></div>" });

		await renderer.render({ container, data: { attr: "attr", boolean: false } });
		let element = container.children[0];
		expect(element.attr("attr")).toBe(null);
	});


	it("event bind with normal function", async () => {
		const container = create("<div></div>").first();
		const renderer = await _src_Renderer_js__WEBPACK_IMPORTED_MODULE_0__.default.build({ template: "<div @click=\"${action}\"></div>" });


		let action = null
		const promise = new Promise((r) => {
			action = function(e) {
				r();
			};
		});

		await renderer.render({ container, data: { action, boolean: false } });
		setTimeout(() => container.children[0].trigger("click"), 1);

		return promise;
	});

	it("event bind with arrow function", async () => {
		const container = create("<div></div>").first();
		const renderer = await _src_Renderer_js__WEBPACK_IMPORTED_MODULE_0__.default.build({ template: "<div @click=\"${action}\"></div>" });


		let action = null
		const promise = new Promise((r) => {
			action = (e) => {
				r();
			};
		});

		await renderer.render({ container, data: { action, boolean: false } });
		setTimeout(() => container.children[0].trigger("click"), 1);

		return promise;
	});
	
	it("event bind - delegate", async () => {
		const container = create("<div></div>").first();
		const renderer = await _src_Renderer_js__WEBPACK_IMPORTED_MODULE_0__.default.build({ template: "<div @click:delegate=\"${action}\"></div>" });


		let handle = null
		const promise = new Promise((r) => {
			handle = (e) => {
				r();
			};
		});

		await renderer.render({ container, data: { action: "event-delegate-test", boolean: false } });
		container.children[0].on("event-delegate-test", handle);
		setTimeout(() => container.children[0].trigger("click"), 1);

		return promise;
	});
	
	it("event bind - delegate -> triggered at child", async () => {
		const container = create("<div></div>").first();
		const renderer = await _src_Renderer_js__WEBPACK_IMPORTED_MODULE_0__.default.build({ template: "<div @click:delegate=\"${action}\"><span>trigger</span></div>" });


		let handle = null
		const promise = new Promise((r) => {
			handle = (e) => {
				e.preventDefault();
				e.stopPropagation();
				expect(e.target).toBe(container.children[0]);
				r();
			};
		});

		await renderer.render({ container, data: { action: "event-delegate-test", boolean: false } });
		container.on("event-delegate-test", handle);
		setTimeout(() => container.children[0].children[0].trigger("click"), 1);

		return promise;
	});


	it("event bind - delegate (impliced)", async () => {
		const container = create("<div></div>").first();
		const renderer = await _src_Renderer_js__WEBPACK_IMPORTED_MODULE_0__.default.build({ template: "<div @click=\"${action}\"></div>" });


		let handle = null
		const promise = new Promise((r) => {
			handle = (e) => {
				r();
			};
		});

		await renderer.render({ container, data: { action: "event-delegate-test", boolean: false } });
		container.children[0].on("event-delegate-test", handle);
		setTimeout(() => container.children[0].trigger("click"), 1);

		return promise;
	});
	
	it("event bind:delegate - with condition", async () => {
		const container = create("<div></div>").first();
		const renderer = await _src_Renderer_js__WEBPACK_IMPORTED_MODULE_0__.default.build({ template: "<div ?@click:delegate=\"${boolean}\" @click:delegate=\"${action}\"></div>" });


		let handle = null
		const promise = new Promise((r) => {
			handle = (e) => {
				r();
			};
		});

		await renderer.render({ container, data: { action: "event-delegate-test", boolean: true } });
		container.children[0].on("event-delegate-test", handle);
		setTimeout(() => container.children[0].trigger("click"), 1);

		return promise;
	});

	it("event bind:delegate - with condition", async () => {
		const container = create("<div></div>").first();
		const renderer = await _src_Renderer_js__WEBPACK_IMPORTED_MODULE_0__.default.build({ template: "<div ?@click:delegate=\"${boolean}\" @click:delegate=\"${action}\"></div>" });


		let handle = null
		const promise = new Promise((r) => {
			handle = (e) => {
				throw new Error();
			};
		});

		await renderer.render({ container, data: { action: "event-delegate-test", boolean: false } });
		container.children[0].on("event-delegate-test", handle);
		setTimeout(() => container.children[0].trigger("click"), 1);

		return Promise.race([promise, new Promise((r) => {
			setTimeout(r, 100);
		})]);
	});



	it("attributes copied", async () => {
		const container = create("<div></div>").first();
		const renderer = await _src_Renderer_js__WEBPACK_IMPORTED_MODULE_0__.default.build({ template: "<div id=\"id\" attr-1=\"attr-1\" data-test-1=\"data-test-1\" ?data-test-2=\"true\" data-test-2=\"data-test-2\" ?data-test-3=\"false\" data-test-3=\"data-test-3\" data-test-4=\"data-test-4\"></div>" });

		await renderer.render({ container });
		let element = container.children[0];

		expect(element.attr("id")).toBe("id");
		expect(element.attr("attr-1")).toBe("attr-1");
		expect(element.attr("data-test-1")).toBe("data-test-1");
		expect(element.attr("data-test-2")).toBe("data-test-2");
		expect(element.attr("data-test-3")).toBe(null);
		expect(element.attr("data-test-4")).toBe("data-test-4");
	});

	afterAll(() => { });
});

/***/ }),

/***/ "./test/tests/directives/ChooseTest/index.js":
/*!***************************************************!*\
  !*** ./test/tests/directives/ChooseTest/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_Renderer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @src/Renderer.js */ "./src/Renderer.js");
/* harmony import */ var _src_Template_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @src/Template.js */ "./src/Template.js");



describe("Choose Test - ", () => {
	
	beforeAll(() => {});
	
	it("case 1", async () => {
		const template = await _src_Template_js__WEBPACK_IMPORTED_MODULE_1__.default.load(
			"<div jstl-choose>" +
				"<div jstl-when=\"${usecase==1}\">1</div>" +
				"<div jstl-when=\"${usecase==2}\">2</div>" + 
				"<div jstl-when=\"${usecase==3}\">3</div>" +
				"<div jstl-otherwise>otherwise</div>" +
			"</div>", false);
		const container = create("<div></div>").first();		
		const renderer = new _src_Renderer_js__WEBPACK_IMPORTED_MODULE_0__.default({template});
		
		await renderer.render({container, data: {usecase : 1}});
		let element = container.children[0];		
		expect(element.children.length).toBe(1);
		expect(element.children[0].textContent).toBe("1");
		
		await renderer.render({container, data: {usecase : 2}});
		element = container.children[0];		
		expect(element.children.length).toBe(1);
		expect(element.children[0].textContent).toBe("2");		
		
		await renderer.render({container, data: {usecase : 100}});
		element = container.children[0];		
		expect(element.children.length).toBe(1);
		expect(element.children[0].textContent).toBe("otherwise");
	});
	
	
	afterAll(() => {});
});

/***/ }),

/***/ "./test/tests/directives/DataTest/index.js":
/*!*************************************************!*\
  !*** ./test/tests/directives/DataTest/index.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_Renderer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @src/Renderer.js */ "./src/Renderer.js");


describe("Data Test - ", () => {
	
	beforeAll(() => {});
	
	it("load data from url", async () => {		
		const container = create("<div></div>").first();		
		const renderer = await _src_Renderer_js__WEBPACK_IMPORTED_MODULE_0__.default.build({template: "<div jstl-data=\"/data/DataTest/remote-data.json\">${test1}</div>"});
		
		await renderer.render({container});		
		expect(container.children.length).toBe(1);
		expect(container.children[0].textContent).toBe("value-1");
	});
	
	it("load data into variable - direct mode", async () => {		
		const container = create("<div></div>").first();		
		const renderer = await _src_Renderer_js__WEBPACK_IMPORTED_MODULE_0__.default.build({template: "<div jstl-data=\"value-1\" jstl-data-var=\"test1\" jstl-data-mode=\"direct\">${test1}</div>"});
		
		await renderer.render({container});		
		expect(container.children.length).toBe(1);
		expect(container.children[0].textContent).toBe("value-1");
	});
	
	it("copy data into variable - set mode", async () => {		
		const container = create("<div></div>").first();		
		const renderer = await _src_Renderer_js__WEBPACK_IMPORTED_MODULE_0__.default.build({template: "<div jstl-data=\"${test}\" jstl-data-var=\"test1\" jstl-data-mode=\"set\">${test1.data}</div>", data: {test: {data:"value-1"}}});
		
		await renderer.render({container});		
		expect(container.children.length).toBe(1);
		expect(container.children[0].textContent).toBe("value-1");
	});

	
	it("copy data - set mode", async () => {		
		const container = create("<div></div>").first();		
		const renderer = await _src_Renderer_js__WEBPACK_IMPORTED_MODULE_0__.default.build({template: `<div jstl-data="\${test}" jstl-data-mode="set">\${test.data}</div>`, data: {test: {data:"value-1"}}});
		
		await renderer.render({container});		
		expect(container.children.length).toBe(1);
		expect(container.children[0].textContent).toBe("value-1");
	});

	it("copy data - direct mode", async () => {		
		const container = create("<div></div>").first();		
		const renderer = await _src_Renderer_js__WEBPACK_IMPORTED_MODULE_0__.default.build({template: `<div jstl-data="\${test}" jstl-data-mode="set">\${test.data}</div>`, data: {test: {data:"value-1"}}});
		
		await renderer.render({container});		
		expect(container.children.length).toBe(1);
		expect(container.children[0].textContent).toBe("value-1");
	});
	afterAll(() => {});
});

/***/ }),

/***/ "./test/tests/directives/DirectiveTest.js":
/*!************************************************!*\
  !*** ./test/tests/directives/DirectiveTest.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_Directive_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @src/Directive.js */ "./src/Directive.js");
/* harmony import */ var _src_directives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @src/directives */ "./src/directives/index.js");



describe("Test directive chain - ", () => {
	
	beforeAll(() => {});
	
	it("order test", async () => {
		const expected = [
			"initial",
			"if",
			"data",
			"include",
			"choose",
			"foreach",
			"jstl-repeat",		
			"attribute",
			"text",
			"on-finished"
		];
		
		const directive = _src_Directive_js__WEBPACK_IMPORTED_MODULE_0__.default.directives.map(d => d.name);		
				
		expect(directive).toEqual(expected);
	});
	
	afterAll(() => {});
});

/***/ }),

/***/ "./test/tests/directives/ForeachTest/index.js":
/*!****************************************************!*\
  !*** ./test/tests/directives/ForeachTest/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_Renderer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @src/Renderer.js */ "./src/Renderer.js");


describe("Foreach Test - ", () => {
	
	beforeAll(() => {});
	
	it("foreach=[1,2,3,4,5]", async () => {		
		const container = create("<div></div>").first();		
		const renderer = await _src_Renderer_js__WEBPACK_IMPORTED_MODULE_0__.default.build({template: "<div jstl-foreach=\"${list}\" jstl-foreach-var=\"item\" jstl-foreach-status=\"status\"><div>${item}-${status.index}</div></div>"});
		
		await renderer.render({container, data : {list: [1,2,3,4,5]}});
		let element = container.children[0];
		expect(element.children.length).toBe(5);
		for(let i = 0; i < element.children.length; i++){
			const item = element.children[i];
			expect(item.textContent).toBe((i + 1) + "-" + i);			
		}		
	});
	
	it("count=5", async () => {		
		const container = create("<div></div>").first();		
		const renderer = await _src_Renderer_js__WEBPACK_IMPORTED_MODULE_0__.default.build({template: "<div jstl-foreach-count=\"${count}\" jstl-foreach-var=\"item\" jstl-foreach-status=\"status\"><div>${item}-${status.index}</div></div>"});
		
		await renderer.render({container, data : {count:5}});
		let element = container.children[0];
		expect(element.children.length).toBe(5);
		for(let i = 0; i < element.children.length; i++){
			const item = element.children[i];
			expect(item.textContent).toBe(i  + "-" + i);			
		}		
	});
	
	afterAll(() => {});
});

/***/ }),

/***/ "./test/tests/directives/IfTest/index.js":
/*!***********************************************!*\
  !*** ./test/tests/directives/IfTest/index.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_Renderer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @src/Renderer.js */ "./src/Renderer.js");


describe("If Test - ", () => {
	
	beforeAll(() => {});
	
	it("jstl-if=${render} render=true", async () => {
		const container = create("<div></div>").first();		
		const renderer = await _src_Renderer_js__WEBPACK_IMPORTED_MODULE_0__.default.build({template: "<div jstl-if=\"${render}\"></div>"});
		await renderer.render({container, data : {render : true}});		
		expect(container.children.length).toBe(1);
	});
	
	it("jstl-if=${render} render=false", async () => {		
		const container = create("<div></div>").first();		
		const renderer = await _src_Renderer_js__WEBPACK_IMPORTED_MODULE_0__.default.build({template: "<div jstl-if=\"${render}\"></div>"});
		await renderer.render({container, data : {render : false}});		
		expect(container.children.length).toBe(0);
	});
	
	
	it("jstl-if=${render} render=false -> no other directive executed", async () => {		
		const container = create("<div></div>").first();		
		const renderer = await _src_Renderer_js__WEBPACK_IMPORTED_MODULE_0__.default.build({template: "<div jstl-if=\"${render}\" attr=\"test\"></div>"});
		await renderer.render({container, data : {render : false}});		
		expect(container.children.length).toBe(0);
	});
	
	it("jstl-if=${render} render=false -> don't execute children", async () => {		
		const container = create("<div></div>").first();
		let fail = false;
		const renderer = await _src_Renderer_js__WEBPACK_IMPORTED_MODULE_0__.default.build({template: "<div jstl-if=\"${render}\"><div>${executed()}</div></div>", data : {
			executed : () =>{ fail = true}
		}});
		await renderer.render({container, data : {render : false}});		
		expect(container.children.length).toBe(0);
		expect(fail).toBe(false);
	});
	
	afterAll(() => {});
});

/***/ }),

/***/ "./test/tests/directives/IncludeTest/index.js":
/*!****************************************************!*\
  !*** ./test/tests/directives/IncludeTest/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_Renderer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @src/Renderer.js */ "./src/Renderer.js");


describe("Include Test - ", () => {
	
	beforeAll(() => {});
	
	it("load template from url", async () => {		
		const container = create("<div></div>").first();		
		const renderer = await _src_Renderer_js__WEBPACK_IMPORTED_MODULE_0__.default.build({template: "<div jstl-include=\"/templates/IncludeTest/LoadFromURL.tpl.html\"></div>"});
		await renderer.render({container});		
		let result = container;
		expect(result.children.length).toBe(1);
		result = result.children[0];
		expect(result.children.length).toBe(5);
		container.remove();
	});

	it("load template from url after if", async () => {		
		const container = create("<div></div>").first();		
		const renderer = await _src_Renderer_js__WEBPACK_IMPORTED_MODULE_0__.default.build({template: `<div jstl-if="\${include}" jstl-include="/templates/IncludeTest/LoadFromURL.tpl.html"></div>`});
		await renderer.render({container, data : {include: true}});		
		let result = container;
		expect(result.children.length).toBe(1);
		result = result.children[0];
		expect(result.children.length).toBe(5);
		container.remove();
	});

	it("load template from url after if on jstl-tag", async () => {		
		const container = create("<div></div>").first();		
		const renderer = await _src_Renderer_js__WEBPACK_IMPORTED_MODULE_0__.default.build({template: `<jstl jstl-if="\${include}" jstl-include="/templates/IncludeTest/LoadFromURL.tpl.html"></jstl>`});
		await renderer.render({container, data : {include: true}});		
		expect(container.children.length).toBe(5);
		container.remove();
	});
	
	afterAll(() => {});
});

/***/ }),

/***/ "./test/tests/directives/InitialTest/index.js":
/*!****************************************************!*\
  !*** ./test/tests/directives/InitialTest/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_Renderer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @src/Renderer.js */ "./src/Renderer.js");


describe("InitialDirective Test - ", () => {

	beforeAll(() => { });

	it("default case 1", async () => {
		const renderer = await _src_Renderer_js__WEBPACK_IMPORTED_MODULE_0__.default.build({ template: "<div></div>" });
		const container = create("<div></div>").first();
		await renderer.render({ container });
		expect(container.children.length).toBe(1);
	});


	it("process HTMLTemlateElement", async () => {
		const renderer = await _src_Renderer_js__WEBPACK_IMPORTED_MODULE_0__.default.build({ template: "<div><template><div></div></template></div>" });
		const container = create("<div></div>").first();
		await renderer.render({ container });

		expect(container.children.length).toBe(1);
		let element = container.children[0];
		expect(element.children.length).toBe(1);
		element = element.children[0];
		expect(element instanceof HTMLTemplateElement).toBe(true);
		element = element.content;
		expect(element instanceof DocumentFragment).toBe(true);
		expect(element.children.length).toBe(1);
	});
	
	
	it("process template with comments", async () => {
		const renderer = await _src_Renderer_js__WEBPACK_IMPORTED_MODULE_0__.default.build({ template: "<div><!-- test --></div>" });
		const container = create("<div></div>").first();
		await renderer.render({ container });

		expect(container.childNodes.length).toBe(1);
		let element = container.childNodes[0];
		expect(element.childNodes.length).toBe(1);
		element = element.childNodes[0];
		expect(element instanceof Comment).toBe(true);
	});


	it("change tagname div -> span", async () => {
		const renderer = await _src_Renderer_js__WEBPACK_IMPORTED_MODULE_0__.default.build({ template: `<div jstl-tagname="span" test-attr="attr">
			<span></span>
			<span></span>
			<span></span>
		</div>` });
		const container = create("<div></div>").first();
		await renderer.render({ container });

		expect(container.childNodes.length).toBe(1);
		let element = container.childNodes[0];
		expect(element instanceof HTMLSpanElement).toBe(true);
		expect(element.attr("test-attr")).toBe("attr");
		expect(element.children.length).toBe(3);
	});

	
	it("change tagname jstl -> span", async () => {
		const renderer = await _src_Renderer_js__WEBPACK_IMPORTED_MODULE_0__.default.build({ template: `<jstl jstl-tagname="span" test-attr="attr">
			<span></span>
			<span></span>
			<span></span>
		</jstl>` });
		const container = create("<div></div>").first();
		await renderer.render({ container });

		expect(container.childNodes.length).toBe(1);
		let element = container.childNodes[0];
		expect(element instanceof HTMLSpanElement).toBe(true);
		expect(element.attr("test-attr")).toBe("attr");
		expect(element.children.length).toBe(3);
	});

	it("change tagname with dynamic value", async () => {
		const renderer = await _src_Renderer_js__WEBPACK_IMPORTED_MODULE_0__.default.build({ template: `<jstl jstl-tagname="\${tagname}" test-attr="attr">
			<span></span>
			<span></span>
			<span></span>
		</jstl>` });
		const container = create("<div></div>").first();
		await renderer.render({ container , data : {tagname: "span"}});

		expect(container.childNodes.length).toBe(1);
		let element = container.childNodes[0];
		expect(element instanceof HTMLSpanElement).toBe(true);
		expect(element.attr("test-attr")).toBe("attr");
		expect(element.children.length).toBe(3);
	});
	

	afterAll(() => { });
});

/***/ }),

/***/ "./test/tests/directives/OnFinished/index.js":
/*!***************************************************!*\
  !*** ./test/tests/directives/OnFinished/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_Renderer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @src/Renderer.js */ "./src/Renderer.js");


describe("OnFinished Directive Test - ", () => {

	beforeAll(() => { });

	it("default case 1", async () => {		
		window.ONFINISH_CASE_1 = false;
		const template =`<div jstl-on-finished="\${window.ONFINISH_CASE_1 = true}"></div>`;		
		const container = create("<div></div>").first();
		
		document.body.append(container);
		const renderer = await _src_Renderer_js__WEBPACK_IMPORTED_MODULE_0__.default.build({template});
		
		await renderer.render({ container, template });
		expect(window.ONFINISH_CASE_1).toBeTrue();
	});

	

	afterAll(() => { });
});

/***/ }),

/***/ "./test/tests/directives/RepeatTest/index.js":
/*!***************************************************!*\
  !*** ./test/tests/directives/RepeatTest/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_Renderer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @src/Renderer.js */ "./src/Renderer.js");


describe("Repeat Test - ", () => {
	
	beforeAll(() => {});
	it("repeat=[1,2,3,4,5]", async () => {		
		const container = create("<div></div>").first();		
		const renderer = await _src_Renderer_js__WEBPACK_IMPORTED_MODULE_0__.default.build({template: `<div jstl-repeat="\${list}" jstl-repeat-var="item" jstl-repeat-status="status">\${item}-\${status.index}</div>`});
		
		await renderer.render({container, data : {list: [1,2,3,4,5]}});

		let element = container;
		expect(container.children.length).toBe(5);
		for(let i = 0; i < container.children.length; i++){
			const item = container.children[i];
			expect(item.textContent).toBe((i + 1) + "-" + i);			
		}		
	});
	
	it("jstl-repeat-count=5", async () => {		
		const container = create("<div></div>").first();		
		const renderer = await _src_Renderer_js__WEBPACK_IMPORTED_MODULE_0__.default.build({template: `<div jstl-repeat-count="\${count}" jstl-repeat-var="item" jstl-repeat-status="status">\${item}-\${status.index}</div>`});
		
		await renderer.render({container, data : {count:5}});

		expect(container.children.length).toBe(5);
		for(let i = 0; i < container.children.length; i++){
			const item = container.children[i];
			expect(item.textContent).toBe(i  + "-" + i);			
		}		
	});


	it("create options at select tag", async () => {		
		const container = create("<select></select>").first();
		document.body.append(container);
		const renderer = await _src_Renderer_js__WEBPACK_IMPORTED_MODULE_0__.default.build({template: `<option jstl-repeat-count="\${count}" jstl-repeat-var="item" jstl-repeat-status="status">\${item}-\${status.index}</option>`});
		
		await renderer.render({container, data : {count:5}});

		expect(container.children.length).toBe(5);
		for(let i = 0; i < container.children.length; i++){
			const item = container.children[i];
			expect(item.textContent).toBe(i  + "-" + i);			
		}
		
		container.remove();
	});
	
	afterAll(() => {});
});

/***/ }),

/***/ "./test/tests/directives/TextTest/HTMLMode.js":
/*!****************************************************!*\
  !*** ./test/tests/directives/TextTest/HTMLMode.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_Renderer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @src/Renderer.js */ "./src/Renderer.js");


describe("Text Test - html mode ", () => {
	
	beforeAll(() => {});
	
	it("html", async () => {
		const renderer = await _src_Renderer_js__WEBPACK_IMPORTED_MODULE_0__.default.build({template: "<div jstl-text-content-type=\"html\">${content}</div>"});
		const container = create("<div></div>").first();		
		await renderer.render({container, data: {content: "<div></div>"}});
		
		let element = container.children[0];
		expect(element.children.length).toBe(1);
	});
	
	it("html between text", async () => {
		const renderer = await _src_Renderer_js__WEBPACK_IMPORTED_MODULE_0__.default.build({template: "<div jstl-text-content-type=\"html\">text ${content} test</div>"});
		const container = create("<div></div>").first();		
		await renderer.render({container, data: {content: "<div></div>"}});
		
		let element = container.children[0];
		expect(element.children.length).toBe(1);
		expect(element.childNodes.length).toBe(3);
		expect(element.childNodes[0] instanceof Text).toBe(true);
		expect(element.childNodes[1] instanceof HTMLElement).toBe(true);
		expect(element.childNodes[2] instanceof Text).toBe(true);		
	});
	
	it("html with expression as context (don't execute)", async () => {
		const renderer = await _src_Renderer_js__WEBPACK_IMPORTED_MODULE_0__.default.build({template: "<div jstl-text-content-type=\"html\">${content}</div>"});
		const container = create("<div></div>").first();		
		await renderer.render({container, data: {content: "<div>${fail}</div>"}, fail:"fail"});
		
		let element = container.children[0];
		expect(element.children.length).toBe(1);
		expect(element.children[0].textContent).toBe("${fail}");
		
	});
	
	
	it("html secure content (no script, style, body, html, head, object and link tags)", async () => {
		const renderer = await _src_Renderer_js__WEBPACK_IMPORTED_MODULE_0__.default.build({template: "<div jstl-text-content-type=\"html\">${content}</div>"});
		const container = create("<div></div>").first();		
		const badContent = "<script></script><html></html><head></head><object></object><style></style><link></link>"
		const badContentSelector = "script, style, body, html, head, object, link";	
		await renderer.render({container, data: {content: badContent + "<div>" + badContent + "</div>"}});
		
		let element = container.children[0];
		expect(element.children.length).toBe(1);
		expect(element.find(badContentSelector).length).toBe(0);
		
	});
	
	it("html include unsecure content ", async () => {
		const renderer = await _src_Renderer_js__WEBPACK_IMPORTED_MODULE_0__.default.build({template: "<div jstl-text-content-type=\"html\" jstl-text-unsecure>${content}</div>"});
		const container = create("<div></div>").first();		
		const badContent = "<script></script><html></html><head></head><object></object><style></style><link></link>"
		const badContentSelector = "script, style, body, html, head, object, link";	
		await renderer.render({container, data: {content: badContent + "<div>" + badContent + "</div>"}});
		
		let element = container.children[0];
		expect(element.find(badContentSelector).length).not.toBe(0);
		
	});
	
	afterAll(() => {});
});

/***/ }),

/***/ "./test/tests/directives/TextTest/TextMode.js":
/*!****************************************************!*\
  !*** ./test/tests/directives/TextTest/TextMode.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_Renderer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @src/Renderer.js */ "./src/Renderer.js");


describe("Text Test - text mode ", () => {
	
	beforeAll(() => {});
	
	it("plain text", async () => {
		const renderer = await _src_Renderer_js__WEBPACK_IMPORTED_MODULE_0__.default.build({template: "<div>test text</div>"});
		const container = create("<div></div>").first();		
		await renderer.render({container});		
		expect(container.children[0].textContent).toBe("test text");
	});
	
	it("plain text with dynamic content", async () => {
		const renderer = await _src_Renderer_js__WEBPACK_IMPORTED_MODULE_0__.default.build({template: "<div>test text ${dynamic} content</div>"});
		const container = create("<div></div>").first();		
		await renderer.render({container, data: {dynamic:"dynamic"}});		
		expect(container.children[0].textContent).toBe("test text dynamic content");
	});
	
	it("plain text with jstl-text-ignore", async () => {
		const renderer = await _src_Renderer_js__WEBPACK_IMPORTED_MODULE_0__.default.build({template: "<div jstl-text-ignore>test text ${dynamic} content</div>"});
		const container = create("<div></div>").first();		
		await renderer.render({container, data: {dynamic:"dynamic"}});		
		expect(container.children[0].textContent).toBe("test text ${dynamic} content");
	});
	
	
	it("plain text with max text length and dynamic content", async () => {
		const renderer = await _src_Renderer_js__WEBPACK_IMPORTED_MODULE_0__.default.build({template: "<div jstl-text-trim-length=\"${length}\">test text ${dynamic} content</div>"});
		const container = create("<div></div>").first();		
		await renderer.render({container, data: {dynamic:"dynamic", length: 15}});		
		expect(container.children[0].textContent).toBe("test text dy...");
	});
	
	it("plain text with dynamic html content", async () => {
		const renderer = await _src_Renderer_js__WEBPACK_IMPORTED_MODULE_0__.default.build({template: "<div>test text ${dynamic}</div>"});
		const container = create("<div></div>").first();		
		await renderer.render({container, data: {dynamic:"<div>dynamic<div> content</div></div>"}});
		expect(container.children[0].children.length).toBe(0);	
		expect(container.children[0].textContent).toBe("test text dynamic content");
	});
	
	afterAll(() => {});
});

/***/ }),

/***/ "./test/tests/directives/TextTest/index.js":
/*!*************************************************!*\
  !*** ./test/tests/directives/TextTest/index.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TextMode_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TextMode.js */ "./test/tests/directives/TextTest/TextMode.js");
/* harmony import */ var _HTMLMode_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HTMLMode.js */ "./test/tests/directives/TextTest/HTMLMode.js");



/***/ }),

/***/ "./test/tests/directives/index.js":
/*!****************************************!*\
  !*** ./test/tests/directives/index.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DirectiveTest_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DirectiveTest.js */ "./test/tests/directives/DirectiveTest.js");
/* harmony import */ var _InitialTest__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./InitialTest */ "./test/tests/directives/InitialTest/index.js");
/* harmony import */ var _IfTest__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./IfTest */ "./test/tests/directives/IfTest/index.js");
/* harmony import */ var _DataTest__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DataTest */ "./test/tests/directives/DataTest/index.js");
/* harmony import */ var _IncludeTest__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./IncludeTest */ "./test/tests/directives/IncludeTest/index.js");
/* harmony import */ var _AttributeTest__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./AttributeTest */ "./test/tests/directives/AttributeTest/index.js");
/* harmony import */ var _ForeachTest__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ForeachTest */ "./test/tests/directives/ForeachTest/index.js");
/* harmony import */ var _RepeatTest__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./RepeatTest */ "./test/tests/directives/RepeatTest/index.js");
/* harmony import */ var _ChooseTest__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ChooseTest */ "./test/tests/directives/ChooseTest/index.js");
/* harmony import */ var _TextTest__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./TextTest */ "./test/tests/directives/TextTest/index.js");
/* harmony import */ var _OnFinished__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./OnFinished */ "./test/tests/directives/OnFinished/index.js");












/***/ }),

/***/ "./test/tests/index.js":
/*!*****************************!*\
  !*** ./test/tests/index.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TemplateTest__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TemplateTest */ "./test/tests/TemplateTest/index.js");
/* harmony import */ var _RendererTest__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RendererTest */ "./test/tests/RendererTest/index.js");
/* harmony import */ var _directives__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./directives */ "./test/tests/directives/index.js");
/* harmony import */ var _performance__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./performance */ "./test/tests/performance/index.js");







/***/ }),

/***/ "./test/tests/performance/index.js":
/*!*****************************************!*\
  !*** ./test/tests/performance/index.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_Template_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @src/Template.js */ "./src/Template.js");
/* harmony import */ var _src_Renderer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @src/Renderer.js */ "./src/Renderer.js");




const base = "<div class=\"test-${classname}\">${testValue} ${promiseFunction()}\n{content}</div>";
const buildContent = ({count, template=base}) => {
	if(count == 1)
		return base;
		
	let content = []; 
	for(let i = 0; i < count; i++)
		content.push(base);
	
	return content.join("");
}

const build = ({depth, count, string = null, index = 0, template }) => {
	if(index >= depth)
		return string.replace(/\{content\}/g, "");
	
	return build({string: (string ? string.replace(/\{content\}/g, buildContent({count, template})) : buildContent({count, template})), index: index+1, depth, count, template});
};



describe("Performance Test - deep element processing", () => {

	beforeAll(() => { });

	it("case 1 - depth=5000, count=1", async () => {
		const depth = 5000;
		const count = 1;
		const html = build({depth, count});		
		const template = await _src_Template_js__WEBPACK_IMPORTED_MODULE_0__.default.load(html, false);
		const container = create("<div></div>").first();
		document.body.append(container);
		const renderer = new _src_Renderer_js__WEBPACK_IMPORTED_MODULE_1__.default({ template });
		const data = {
			classname: "test-class",
			testValue: "test-value",
			promiseFunction: function() {
				return Promise.resolve("promise-value");
			}
		};

		const start = Date.now();
		await renderer.render({ data, container });
		const end = Date.now();
		const elements = container.find(":scope *");		

		console.log("many element process", elements.length, "elements at", (end - start), "ms");
		expect(elements.length).toBe(depth);
		container.remove();
	});
	
	it("case 2 - depth=10 count=3", async () => {
		const depth = 10;
		const count = 3;
		const html = build({depth, count});		
		const template = await _src_Template_js__WEBPACK_IMPORTED_MODULE_0__.default.load(html, false);
		const container = create("<div></div>").first();
		document.body.append(container);
		const renderer = new _src_Renderer_js__WEBPACK_IMPORTED_MODULE_1__.default({ template });
		const data = {
			classname: "test-class",
			testValue: "test-value",
			promiseFunction: function() {
				return Promise.resolve("promise-value");
			}
		};

		const start = Date.now();
		await renderer.render({ data, container });
		const end = Date.now();
		const elements = container.find(":scope *");		

		console.log("many element process", elements.length, "elements at", (end - start), "ms");
		container.remove();
	});
	
	it("case 3 - depth=1 count=10000", async () => {
		const depth = 1;
		const count = 10000;
		const html = build({depth, count});		
		const template = await _src_Template_js__WEBPACK_IMPORTED_MODULE_0__.default.load(html, false);
		const container = create("<div></div>").first();
		document.body.append(container);
		const renderer = new _src_Renderer_js__WEBPACK_IMPORTED_MODULE_1__.default({ template });
		const data = {
			classname: "test-class",
			testValue: "test-value",
			promiseFunction: function() {
				return Promise.resolve("promise-value");
			}
		};

		const start = Date.now();
		await renderer.render({ data, container });
		const end = Date.now();
		const elements = container.find(":scope *");		

		console.log("many element process", elements.length, "elements at", (end - start), "ms");
		container.remove();
	});

	afterAll(() => { });
});

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AZGVmYXVsdC1qcy9kZWZhdWx0anMtdGVtcGxhdGUtbGFuZ3VhZ2UvLi9ub2RlX21vZHVsZXMvQGRlZmF1bHQtanMvZGVmYXVsdGpzLWNvbW1vbi11dGlscy9zcmMvT2JqZWN0UHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vQGRlZmF1bHQtanMvZGVmYXVsdGpzLXRlbXBsYXRlLWxhbmd1YWdlLy4vbm9kZV9tb2R1bGVzL0BkZWZhdWx0LWpzL2RlZmF1bHRqcy1jb21tb24tdXRpbHMvc3JjL09iamVjdFV0aWxzLmpzIiwid2VicGFjazovL0BkZWZhdWx0LWpzL2RlZmF1bHRqcy10ZW1wbGF0ZS1sYW5ndWFnZS8uL25vZGVfbW9kdWxlcy9AZGVmYXVsdC1qcy9kZWZhdWx0anMtY29tbW9uLXV0aWxzL3NyYy9Qcml2YXRlUHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vQGRlZmF1bHQtanMvZGVmYXVsdGpzLXRlbXBsYXRlLWxhbmd1YWdlLy4vbm9kZV9tb2R1bGVzL0BkZWZhdWx0LWpzL2RlZmF1bHRqcy1jb21tb24tdXRpbHMvc3JjL1Byb21pc2VVdGlscy5qcyIsIndlYnBhY2s6Ly9AZGVmYXVsdC1qcy9kZWZhdWx0anMtdGVtcGxhdGUtbGFuZ3VhZ2UvLi9ub2RlX21vZHVsZXMvQGRlZmF1bHQtanMvZGVmYXVsdGpzLWNvbW1vbi11dGlscy9zcmMvamF2YXNjcmlwdC9TdHJpbmcuanMiLCJ3ZWJwYWNrOi8vQGRlZmF1bHQtanMvZGVmYXVsdGpzLXRlbXBsYXRlLWxhbmd1YWdlLy4vbm9kZV9tb2R1bGVzL0BkZWZhdWx0LWpzL2RlZmF1bHRqcy1leHByZXNzaW9uLWxhbmd1YWdlL25vZGVfbW9kdWxlcy9AZGVmYXVsdC1qcy9kZWZhdWx0anMtY29tbW9uLXV0aWxzL3NyYy9HbG9iYWwuanMiLCJ3ZWJwYWNrOi8vQGRlZmF1bHQtanMvZGVmYXVsdGpzLXRlbXBsYXRlLWxhbmd1YWdlLy4vbm9kZV9tb2R1bGVzL0BkZWZhdWx0LWpzL2RlZmF1bHRqcy1leHByZXNzaW9uLWxhbmd1YWdlL25vZGVfbW9kdWxlcy9AZGVmYXVsdC1qcy9kZWZhdWx0anMtY29tbW9uLXV0aWxzL3NyYy9PYmplY3RQcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly9AZGVmYXVsdC1qcy9kZWZhdWx0anMtdGVtcGxhdGUtbGFuZ3VhZ2UvLi9ub2RlX21vZHVsZXMvQGRlZmF1bHQtanMvZGVmYXVsdGpzLWV4cHJlc3Npb24tbGFuZ3VhZ2Uvbm9kZV9tb2R1bGVzL0BkZWZhdWx0LWpzL2RlZmF1bHRqcy1jb21tb24tdXRpbHMvc3JjL09iamVjdFV0aWxzLmpzIiwid2VicGFjazovL0BkZWZhdWx0LWpzL2RlZmF1bHRqcy10ZW1wbGF0ZS1sYW5ndWFnZS8uL25vZGVfbW9kdWxlcy9AZGVmYXVsdC1qcy9kZWZhdWx0anMtZXhwcmVzc2lvbi1sYW5ndWFnZS9zcmMvQ29udGV4dC5qcyIsIndlYnBhY2s6Ly9AZGVmYXVsdC1qcy9kZWZhdWx0anMtdGVtcGxhdGUtbGFuZ3VhZ2UvLi9ub2RlX21vZHVsZXMvQGRlZmF1bHQtanMvZGVmYXVsdGpzLWV4cHJlc3Npb24tbGFuZ3VhZ2Uvc3JjL0RlZmF1bHRWYWx1ZS5qcyIsIndlYnBhY2s6Ly9AZGVmYXVsdC1qcy9kZWZhdWx0anMtdGVtcGxhdGUtbGFuZ3VhZ2UvLi9ub2RlX21vZHVsZXMvQGRlZmF1bHQtanMvZGVmYXVsdGpzLWV4cHJlc3Npb24tbGFuZ3VhZ2Uvc3JjL0V4cHJlc3Npb25SZXNvbHZlci5qcyIsIndlYnBhY2s6Ly9AZGVmYXVsdC1qcy9kZWZhdWx0anMtdGVtcGxhdGUtbGFuZ3VhZ2UvLi9ub2RlX21vZHVsZXMvQGRlZmF1bHQtanMvZGVmYXVsdGpzLWV4dGRvbS9zcmMvR2xvYmFsLmpzIiwid2VicGFjazovL0BkZWZhdWx0LWpzL2RlZmF1bHRqcy10ZW1wbGF0ZS1sYW5ndWFnZS8uL25vZGVfbW9kdWxlcy9AZGVmYXVsdC1qcy9kZWZhdWx0anMtZXh0ZG9tL3NyYy9kb20vRG9jdW1lbnQuanMiLCJ3ZWJwYWNrOi8vQGRlZmF1bHQtanMvZGVmYXVsdGpzLXRlbXBsYXRlLWxhbmd1YWdlLy4vbm9kZV9tb2R1bGVzL0BkZWZhdWx0LWpzL2RlZmF1bHRqcy1leHRkb20vc3JjL2RvbS9Eb2N1bWVudEZyYWdtZW50LmpzIiwid2VicGFjazovL0BkZWZhdWx0LWpzL2RlZmF1bHRqcy10ZW1wbGF0ZS1sYW5ndWFnZS8uL25vZGVfbW9kdWxlcy9AZGVmYXVsdC1qcy9kZWZhdWx0anMtZXh0ZG9tL3NyYy9kb20vRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9AZGVmYXVsdC1qcy9kZWZhdWx0anMtdGVtcGxhdGUtbGFuZ3VhZ2UvLi9ub2RlX21vZHVsZXMvQGRlZmF1bHQtanMvZGVmYXVsdGpzLWV4dGRvbS9zcmMvZG9tL0V2ZW50VGFyZ2V0LmpzIiwid2VicGFjazovL0BkZWZhdWx0LWpzL2RlZmF1bHRqcy10ZW1wbGF0ZS1sYW5ndWFnZS8uL25vZGVfbW9kdWxlcy9AZGVmYXVsdC1qcy9kZWZhdWx0anMtZXh0ZG9tL3NyYy9kb20vSFRNTEVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vQGRlZmF1bHQtanMvZGVmYXVsdGpzLXRlbXBsYXRlLWxhbmd1YWdlLy4vbm9kZV9tb2R1bGVzL0BkZWZhdWx0LWpzL2RlZmF1bHRqcy1leHRkb20vc3JjL2RvbS9IVE1MSW5wdXRFbGVtZW50LmpzIiwid2VicGFjazovL0BkZWZhdWx0LWpzL2RlZmF1bHRqcy10ZW1wbGF0ZS1sYW5ndWFnZS8uL25vZGVfbW9kdWxlcy9AZGVmYXVsdC1qcy9kZWZhdWx0anMtZXh0ZG9tL3NyYy9kb20vSFRNTFNlbGVjdEVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vQGRlZmF1bHQtanMvZGVmYXVsdGpzLXRlbXBsYXRlLWxhbmd1YWdlLy4vbm9kZV9tb2R1bGVzL0BkZWZhdWx0LWpzL2RlZmF1bHRqcy1leHRkb20vc3JjL2RvbS9IVE1MVGV4dEFyZWFFbGVtZW50LmpzIiwid2VicGFjazovL0BkZWZhdWx0LWpzL2RlZmF1bHRqcy10ZW1wbGF0ZS1sYW5ndWFnZS8uL25vZGVfbW9kdWxlcy9AZGVmYXVsdC1qcy9kZWZhdWx0anMtZXh0ZG9tL3NyYy9kb20vSHRtbENvbGxlY3Rpb24uanMiLCJ3ZWJwYWNrOi8vQGRlZmF1bHQtanMvZGVmYXVsdGpzLXRlbXBsYXRlLWxhbmd1YWdlLy4vbm9kZV9tb2R1bGVzL0BkZWZhdWx0LWpzL2RlZmF1bHRqcy1leHRkb20vc3JjL2RvbS9Ob2RlLmpzIiwid2VicGFjazovL0BkZWZhdWx0LWpzL2RlZmF1bHRqcy10ZW1wbGF0ZS1sYW5ndWFnZS8uL25vZGVfbW9kdWxlcy9AZGVmYXVsdC1qcy9kZWZhdWx0anMtZXh0ZG9tL3NyYy9kb20vTm9kZUxpc3QuanMiLCJ3ZWJwYWNrOi8vQGRlZmF1bHQtanMvZGVmYXVsdGpzLXRlbXBsYXRlLWxhbmd1YWdlLy4vbm9kZV9tb2R1bGVzL0BkZWZhdWx0LWpzL2RlZmF1bHRqcy1leHRkb20vc3JjL2RvbS9leHRlbnRpb25zL0F0dHJpYnV0ZVN1cHBvcnQuanMiLCJ3ZWJwYWNrOi8vQGRlZmF1bHQtanMvZGVmYXVsdGpzLXRlbXBsYXRlLWxhbmd1YWdlLy4vbm9kZV9tb2R1bGVzL0BkZWZhdWx0LWpzL2RlZmF1bHRqcy1leHRkb20vc3JjL2RvbS9leHRlbnRpb25zL0RhdGFTdXBwb3J0LmpzIiwid2VicGFjazovL0BkZWZhdWx0LWpzL2RlZmF1bHRqcy10ZW1wbGF0ZS1sYW5ndWFnZS8uL25vZGVfbW9kdWxlcy9AZGVmYXVsdC1qcy9kZWZhdWx0anMtZXh0ZG9tL3NyYy9kb20vZXh0ZW50aW9ucy9FdmVudFN1cHBvcnQuanMiLCJ3ZWJwYWNrOi8vQGRlZmF1bHQtanMvZGVmYXVsdGpzLXRlbXBsYXRlLWxhbmd1YWdlLy4vbm9kZV9tb2R1bGVzL0BkZWZhdWx0LWpzL2RlZmF1bHRqcy1leHRkb20vc3JjL2RvbS9leHRlbnRpb25zL0h0bWxDbGFzc1N1cHBvcnQuanMiLCJ3ZWJwYWNrOi8vQGRlZmF1bHQtanMvZGVmYXVsdGpzLXRlbXBsYXRlLWxhbmd1YWdlLy4vbm9kZV9tb2R1bGVzL0BkZWZhdWx0LWpzL2RlZmF1bHRqcy1leHRkb20vc3JjL2RvbS9leHRlbnRpb25zL0xpc3RTdXBwb3J0LmpzIiwid2VicGFjazovL0BkZWZhdWx0LWpzL2RlZmF1bHRqcy10ZW1wbGF0ZS1sYW5ndWFnZS8uL25vZGVfbW9kdWxlcy9AZGVmYXVsdC1qcy9kZWZhdWx0anMtZXh0ZG9tL3NyYy9kb20vZXh0ZW50aW9ucy9NYW5pcHVsYXRpb25TdXBwb3J0LmpzIiwid2VicGFjazovL0BkZWZhdWx0LWpzL2RlZmF1bHRqcy10ZW1wbGF0ZS1sYW5ndWFnZS8uL25vZGVfbW9kdWxlcy9AZGVmYXVsdC1qcy9kZWZhdWx0anMtZXh0ZG9tL3NyYy9kb20vZXh0ZW50aW9ucy9RdWVyeVN1cHBvcnQuanMiLCJ3ZWJwYWNrOi8vQGRlZmF1bHQtanMvZGVmYXVsdGpzLXRlbXBsYXRlLWxhbmd1YWdlLy4vbm9kZV9tb2R1bGVzL0BkZWZhdWx0LWpzL2RlZmF1bHRqcy1leHRkb20vc3JjL2RvbS9leHRlbnRpb25zL1JlYWR5RXZlbnRTdXBwb3J0LmpzIiwid2VicGFjazovL0BkZWZhdWx0LWpzL2RlZmF1bHRqcy10ZW1wbGF0ZS1sYW5ndWFnZS8uL25vZGVfbW9kdWxlcy9AZGVmYXVsdC1qcy9kZWZhdWx0anMtZXh0ZG9tL3NyYy9kb20vZXh0ZW50aW9ucy9TaG93SGlkZVN1cHBvcnQuanMiLCJ3ZWJwYWNrOi8vQGRlZmF1bHQtanMvZGVmYXVsdGpzLXRlbXBsYXRlLWxhbmd1YWdlLy4vbm9kZV9tb2R1bGVzL0BkZWZhdWx0LWpzL2RlZmF1bHRqcy1leHRkb20vc3JjL2RvbS9leHRlbnRpb25zL1ZhbHVlU3VwcG9ydC5qcyIsIndlYnBhY2s6Ly9AZGVmYXVsdC1qcy9kZWZhdWx0anMtdGVtcGxhdGUtbGFuZ3VhZ2UvLi9ub2RlX21vZHVsZXMvQGRlZmF1bHQtanMvZGVmYXVsdGpzLWV4dGRvbS9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vQGRlZmF1bHQtanMvZGVmYXVsdGpzLXRlbXBsYXRlLWxhbmd1YWdlLy4vbm9kZV9tb2R1bGVzL0BkZWZhdWx0LWpzL2RlZmF1bHRqcy1leHRkb20vc3JjL3V0aWxzL0RlbGVnYXRlckJ1aWxkZXIuanMiLCJ3ZWJwYWNrOi8vQGRlZmF1bHQtanMvZGVmYXVsdGpzLXRlbXBsYXRlLWxhbmd1YWdlLy4vbm9kZV9tb2R1bGVzL0BkZWZhdWx0LWpzL2RlZmF1bHRqcy1leHRkb20vc3JjL3V0aWxzL0V4dGVuZFByb3RvdHlwZS5qcyIsIndlYnBhY2s6Ly9AZGVmYXVsdC1qcy9kZWZhdWx0anMtdGVtcGxhdGUtbGFuZ3VhZ2UvLi9ub2RlX21vZHVsZXMvQGRlZmF1bHQtanMvZGVmYXVsdGpzLWV4dGRvbS9zcmMvdXRpbHMvRXh0ZW5kZXIuanMiLCJ3ZWJwYWNrOi8vQGRlZmF1bHQtanMvZGVmYXVsdGpzLXRlbXBsYXRlLWxhbmd1YWdlLy4vbm9kZV9tb2R1bGVzL0BkZWZhdWx0LWpzL2RlZmF1bHRqcy1leHRkb20vc3JjL3V0aWxzL1V0aWxzLmpzIiwid2VicGFjazovL0BkZWZhdWx0LWpzL2RlZmF1bHRqcy10ZW1wbGF0ZS1sYW5ndWFnZS8uL3NyYy9Db250ZXh0LmpzIiwid2VicGFjazovL0BkZWZhdWx0LWpzL2RlZmF1bHRqcy10ZW1wbGF0ZS1sYW5ndWFnZS8uL3NyYy9EaXJlY3RpdmUuanMiLCJ3ZWJwYWNrOi8vQGRlZmF1bHQtanMvZGVmYXVsdGpzLXRlbXBsYXRlLWxhbmd1YWdlLy4vc3JjL0VsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vQGRlZmF1bHQtanMvZGVmYXVsdGpzLXRlbXBsYXRlLWxhbmd1YWdlLy4vc3JjL1JlbmRlcmVyLmpzIiwid2VicGFjazovL0BkZWZhdWx0LWpzL2RlZmF1bHRqcy10ZW1wbGF0ZS1sYW5ndWFnZS8uL3NyYy9UZW1wbGF0ZS5qcyIsIndlYnBhY2s6Ly9AZGVmYXVsdC1qcy9kZWZhdWx0anMtdGVtcGxhdGUtbGFuZ3VhZ2UvLi9zcmMvZGlyZWN0aXZlcy9BdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL0BkZWZhdWx0LWpzL2RlZmF1bHRqcy10ZW1wbGF0ZS1sYW5ndWFnZS8uL3NyYy9kaXJlY3RpdmVzL0Nob29zZS5qcyIsIndlYnBhY2s6Ly9AZGVmYXVsdC1qcy9kZWZhdWx0anMtdGVtcGxhdGUtbGFuZ3VhZ2UvLi9zcmMvZGlyZWN0aXZlcy9EYXRhLmpzIiwid2VicGFjazovL0BkZWZhdWx0LWpzL2RlZmF1bHRqcy10ZW1wbGF0ZS1sYW5ndWFnZS8uL3NyYy9kaXJlY3RpdmVzL0ZvcmVhY2guanMiLCJ3ZWJwYWNrOi8vQGRlZmF1bHQtanMvZGVmYXVsdGpzLXRlbXBsYXRlLWxhbmd1YWdlLy4vc3JjL2RpcmVjdGl2ZXMvSWYuanMiLCJ3ZWJwYWNrOi8vQGRlZmF1bHQtanMvZGVmYXVsdGpzLXRlbXBsYXRlLWxhbmd1YWdlLy4vc3JjL2RpcmVjdGl2ZXMvSW5jbHVkZS5qcyIsIndlYnBhY2s6Ly9AZGVmYXVsdC1qcy9kZWZhdWx0anMtdGVtcGxhdGUtbGFuZ3VhZ2UvLi9zcmMvZGlyZWN0aXZlcy9Jbml0aWFsLmpzIiwid2VicGFjazovL0BkZWZhdWx0LWpzL2RlZmF1bHRqcy10ZW1wbGF0ZS1sYW5ndWFnZS8uL3NyYy9kaXJlY3RpdmVzL09uRmluaXNoZWQuanMiLCJ3ZWJwYWNrOi8vQGRlZmF1bHQtanMvZGVmYXVsdGpzLXRlbXBsYXRlLWxhbmd1YWdlLy4vc3JjL2RpcmVjdGl2ZXMvUmVwZWF0LmpzIiwid2VicGFjazovL0BkZWZhdWx0LWpzL2RlZmF1bHRqcy10ZW1wbGF0ZS1sYW5ndWFnZS8uL3NyYy9kaXJlY3RpdmVzL1RleHQuanMiLCJ3ZWJwYWNrOi8vQGRlZmF1bHQtanMvZGVmYXVsdGpzLXRlbXBsYXRlLWxhbmd1YWdlLy4vc3JjL2RpcmVjdGl2ZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vQGRlZmF1bHQtanMvZGVmYXVsdGpzLXRlbXBsYXRlLWxhbmd1YWdlLy4vc3JjL2VsZW1lbnRzL1JlcGxhY2UuanMiLCJ3ZWJwYWNrOi8vQGRlZmF1bHQtanMvZGVmYXVsdGpzLXRlbXBsYXRlLWxhbmd1YWdlLy4vdGVzdC9pbmRleC5qcyIsIndlYnBhY2s6Ly9AZGVmYXVsdC1qcy9kZWZhdWx0anMtdGVtcGxhdGUtbGFuZ3VhZ2UvLi90ZXN0L3Rlc3RzL1JlbmRlcmVyVGVzdC9Kc3RsVGFnUmVwbGFjZVRlc3QuanMiLCJ3ZWJwYWNrOi8vQGRlZmF1bHQtanMvZGVmYXVsdGpzLXRlbXBsYXRlLWxhbmd1YWdlLy4vdGVzdC90ZXN0cy9SZW5kZXJlclRlc3QvUmVuZGVyTW9kZVRlc3QuanMiLCJ3ZWJwYWNrOi8vQGRlZmF1bHQtanMvZGVmYXVsdGpzLXRlbXBsYXRlLWxhbmd1YWdlLy4vdGVzdC90ZXN0cy9SZW5kZXJlclRlc3QvUmVuZGVyVGVzdC5qcyIsIndlYnBhY2s6Ly9AZGVmYXVsdC1qcy9kZWZhdWx0anMtdGVtcGxhdGUtbGFuZ3VhZ2UvLi90ZXN0L3Rlc3RzL1JlbmRlcmVyVGVzdC9pbmRleC5qcyIsIndlYnBhY2s6Ly9AZGVmYXVsdC1qcy9kZWZhdWx0anMtdGVtcGxhdGUtbGFuZ3VhZ2UvLi90ZXN0L3Rlc3RzL1RlbXBsYXRlVGVzdC9DYWNoZVRlc3QuanMiLCJ3ZWJwYWNrOi8vQGRlZmF1bHQtanMvZGVmYXVsdGpzLXRlbXBsYXRlLWxhbmd1YWdlLy4vdGVzdC90ZXN0cy9UZW1wbGF0ZVRlc3QvTG9hZFRlc3QuanMiLCJ3ZWJwYWNrOi8vQGRlZmF1bHQtanMvZGVmYXVsdGpzLXRlbXBsYXRlLWxhbmd1YWdlLy4vdGVzdC90ZXN0cy9UZW1wbGF0ZVRlc3QvaW5kZXguanMiLCJ3ZWJwYWNrOi8vQGRlZmF1bHQtanMvZGVmYXVsdGpzLXRlbXBsYXRlLWxhbmd1YWdlLy4vdGVzdC90ZXN0cy9kaXJlY3RpdmVzL0F0dHJpYnV0ZVRlc3QvaW5kZXguanMiLCJ3ZWJwYWNrOi8vQGRlZmF1bHQtanMvZGVmYXVsdGpzLXRlbXBsYXRlLWxhbmd1YWdlLy4vdGVzdC90ZXN0cy9kaXJlY3RpdmVzL0Nob29zZVRlc3QvaW5kZXguanMiLCJ3ZWJwYWNrOi8vQGRlZmF1bHQtanMvZGVmYXVsdGpzLXRlbXBsYXRlLWxhbmd1YWdlLy4vdGVzdC90ZXN0cy9kaXJlY3RpdmVzL0RhdGFUZXN0L2luZGV4LmpzIiwid2VicGFjazovL0BkZWZhdWx0LWpzL2RlZmF1bHRqcy10ZW1wbGF0ZS1sYW5ndWFnZS8uL3Rlc3QvdGVzdHMvZGlyZWN0aXZlcy9EaXJlY3RpdmVUZXN0LmpzIiwid2VicGFjazovL0BkZWZhdWx0LWpzL2RlZmF1bHRqcy10ZW1wbGF0ZS1sYW5ndWFnZS8uL3Rlc3QvdGVzdHMvZGlyZWN0aXZlcy9Gb3JlYWNoVGVzdC9pbmRleC5qcyIsIndlYnBhY2s6Ly9AZGVmYXVsdC1qcy9kZWZhdWx0anMtdGVtcGxhdGUtbGFuZ3VhZ2UvLi90ZXN0L3Rlc3RzL2RpcmVjdGl2ZXMvSWZUZXN0L2luZGV4LmpzIiwid2VicGFjazovL0BkZWZhdWx0LWpzL2RlZmF1bHRqcy10ZW1wbGF0ZS1sYW5ndWFnZS8uL3Rlc3QvdGVzdHMvZGlyZWN0aXZlcy9JbmNsdWRlVGVzdC9pbmRleC5qcyIsIndlYnBhY2s6Ly9AZGVmYXVsdC1qcy9kZWZhdWx0anMtdGVtcGxhdGUtbGFuZ3VhZ2UvLi90ZXN0L3Rlc3RzL2RpcmVjdGl2ZXMvSW5pdGlhbFRlc3QvaW5kZXguanMiLCJ3ZWJwYWNrOi8vQGRlZmF1bHQtanMvZGVmYXVsdGpzLXRlbXBsYXRlLWxhbmd1YWdlLy4vdGVzdC90ZXN0cy9kaXJlY3RpdmVzL09uRmluaXNoZWQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vQGRlZmF1bHQtanMvZGVmYXVsdGpzLXRlbXBsYXRlLWxhbmd1YWdlLy4vdGVzdC90ZXN0cy9kaXJlY3RpdmVzL1JlcGVhdFRlc3QvaW5kZXguanMiLCJ3ZWJwYWNrOi8vQGRlZmF1bHQtanMvZGVmYXVsdGpzLXRlbXBsYXRlLWxhbmd1YWdlLy4vdGVzdC90ZXN0cy9kaXJlY3RpdmVzL1RleHRUZXN0L0hUTUxNb2RlLmpzIiwid2VicGFjazovL0BkZWZhdWx0LWpzL2RlZmF1bHRqcy10ZW1wbGF0ZS1sYW5ndWFnZS8uL3Rlc3QvdGVzdHMvZGlyZWN0aXZlcy9UZXh0VGVzdC9UZXh0TW9kZS5qcyIsIndlYnBhY2s6Ly9AZGVmYXVsdC1qcy9kZWZhdWx0anMtdGVtcGxhdGUtbGFuZ3VhZ2UvLi90ZXN0L3Rlc3RzL2RpcmVjdGl2ZXMvVGV4dFRlc3QvaW5kZXguanMiLCJ3ZWJwYWNrOi8vQGRlZmF1bHQtanMvZGVmYXVsdGpzLXRlbXBsYXRlLWxhbmd1YWdlLy4vdGVzdC90ZXN0cy9kaXJlY3RpdmVzL2luZGV4LmpzIiwid2VicGFjazovL0BkZWZhdWx0LWpzL2RlZmF1bHRqcy10ZW1wbGF0ZS1sYW5ndWFnZS8uL3Rlc3QvdGVzdHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vQGRlZmF1bHQtanMvZGVmYXVsdGpzLXRlbXBsYXRlLWxhbmd1YWdlLy4vdGVzdC90ZXN0cy9wZXJmb3JtYW5jZS9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGtDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4RGlEO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQSxtQkFBbUIsNERBQW1CO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQLGdCQUFnQixzQkFBc0I7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTs7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U0FBUzs7QUFFcEMsZUFBZSxvQ0FBb0MsU0FBUyxrQkFBa0IsZ0JBQWdCLG1CQUFtQixnQkFBZ0IsMkNBQTJDO0FBQzVLOzs7O0FBSUE7O0FBRUEsa0JBQWtCLEVBQUU7O0FBRXBCO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixhQUFhLEU7QUFDbkMseUJBQXlCLDBEQUFhO0FBQ3RDO0FBQ0E7QUFDQSx1QkFBdUIscURBQVEsRUFBRSxXQUFXO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EseUJBQXlCLGtCQUFrQjtBQUMzQztBQUNBLDhDOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLGFBQWEsRTtBQUNuQyx5QkFBeUIsMERBQWE7QUFDdEM7QUFDQTtBQUNBLHVCQUF1QixxREFBUSxFQUFFLFdBQVc7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx5QkFBeUIsa0JBQWtCO0FBQzNDO0FBQ0EsOEM7O0FBRUE7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLGFBQWEsRTtBQUNuQyx5QkFBeUIsMERBQWE7QUFDdEM7QUFDQTtBQUNBLHVCQUF1QixxREFBUSxFQUFFLFdBQVc7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx5QkFBeUIsa0JBQWtCO0FBQzNDO0FBQ0EsOEM7O0FBRUE7QUFDQTtBQUNBLEVBQUU7O0FBRUYsaUJBQWlCLEVBQUU7QUFDbkIsQ0FBQyxFIiwiZmlsZSI6ImNvbW1vbnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBPYmplY3RQcm9wZXJ0eSB7XHJcblx0Y29uc3RydWN0b3Ioa2V5LCBjb250ZXh0KXtcclxuXHRcdHRoaXMua2V5ID0ga2V5O1xyXG5cdFx0dGhpcy5jb250ZXh0ID0gY29udGV4dDtcclxuXHR9XHJcblx0XHJcblx0Z2V0IGtleURlZmluZWQoKXtcclxuXHRcdHJldHVybiB0aGlzLmtleSBpbiB0aGlzLmNvbnRleHQ7IFxyXG5cdH1cclxuXHRcclxuXHRnZXQgaGFzVmFsdWUoKXtcclxuXHRcdHJldHVybiAhIXRoaXMuY29udGV4dFt0aGlzLmtleV07XHJcblx0fVxyXG5cdFxyXG5cdGdldCB2YWx1ZSgpe1xyXG5cdFx0cmV0dXJuIHRoaXMuY29udGV4dFt0aGlzLmtleV07XHJcblx0fVxyXG5cdFxyXG5cdHNldCB2YWx1ZShkYXRhKXtcclxuXHRcdHRoaXMuY29udGV4dFt0aGlzLmtleV0gPSBkYXRhO1xyXG5cdH1cclxuXHRcclxuXHRzZXQgYXBwZW5kKGRhdGEpIHtcclxuXHRcdGlmKCF0aGlzLmhhc1ZhbHVlKVxyXG5cdFx0XHR0aGlzLnZhbHVlID0gZGF0YTtcclxuXHRcdGVsc2Uge1xyXG5cdFx0XHRjb25zdCB2YWx1ZSA9IHRoaXMudmFsdWU7XHJcblx0XHRcdGlmKHZhbHVlIGluc3RhbmNlb2YgQXJyYXkpXHJcblx0XHRcdFx0dmFsdWUucHVzaChkYXRhKTtcclxuXHRcdFx0ZWxzZVxyXG5cdFx0XHRcdHRoaXMudmFsdWUgPSBbdGhpcy52YWx1ZSwgZGF0YV07XHJcblx0XHR9XHJcblx0fVxyXG5cdFxyXG5cdHJlbW92ZSgpe1xyXG5cdFx0ZGVsZXRlIHRoaXMuY29udGV4dFt0aGlzLmtleV07XHJcblx0fVxyXG5cdFxyXG5cdHN0YXRpYyBsb2FkKGRhdGEsIGtleSwgY3JlYXRlPXRydWUpIHtcclxuXHRcdGxldCBjb250ZXh0ID0gZGF0YTtcclxuXHRcdGNvbnN0IGtleXMgPSBrZXkuc3BsaXQoXCJcXC5cIik7XHJcblx0XHRsZXQgbmFtZSA9IGtleXMuc2hpZnQoKS50cmltKCk7XHJcblx0XHR3aGlsZShrZXlzLmxlbmd0aCA+IDApe1xyXG5cdFx0XHRpZighY29udGV4dFtuYW1lXSl7XHJcblx0XHRcdFx0aWYoIWNyZWF0ZSlcclxuXHRcdFx0XHRcdHJldHVybiBudWxsO1xyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdGNvbnRleHRbbmFtZV0gPSB7fVxyXG5cdFx0XHR9XHJcblx0XHRcdFxyXG5cdFx0XHRjb250ZXh0ID0gY29udGV4dFtuYW1lXTtcclxuXHRcdFx0bmFtZSA9IGtleXMuc2hpZnQoKS50cmltKCk7XHJcblx0XHR9XHJcblx0XHRcclxuXHRcdHJldHVybiBuZXcgT2JqZWN0UHJvcGVydHkobmFtZSwgY29udGV4dCk7XHJcblx0fVxyXG59OyIsImltcG9ydCBPYmplY3RQcm9wZXJ0eSBmcm9tIFwiLi9PYmplY3RQcm9wZXJ0eS5qc1wiO1xyXG4vKipcclxuICogYXBwZW5kIGEgcHJvcGVyeSB2YWx1ZSB0byBhbiBvYmplY3QuIElmIHByb3BlcnkgZXhpc3RzIGl0cyB3b3VsZCBiZSBjb252ZXJ0ZWQgdG8gYW4gYXJyYXlcclxuICpcclxuICogIEBwYXJhbSBhS2V5OnN0cmluZyBuYW1lIG9mIHByb3BlcnR5XHJcbiAqICBAcGFyYW0gYURhdGE6YW55IHByb3BlcnR5IHZhbHVlXHJcbiAqICBAcGFyYW0gYU9iamVjdDpvYmplY3QgdGhlIG9iamVjdCB0byBhcHBlbmQgdGhlIHByb3BlcnR5XHJcbiAqXHJcbiAqICBAcmV0dXJuIHJldHVybnMgdGhlIGNoYW5nZWQgb2JqZWN0XHJcbiAqL1xyXG5leHBvcnQgY29uc3QgYXBwZW5kID0gZnVuY3Rpb24gKGFLZXksIGFEYXRhLCBhT2JqZWN0KSB7XHJcblx0aWYgKHR5cGVvZiBhRGF0YSAhPT0gXCJ1bmRlZmluZWRcIikge1xyXG5cdFx0Y29uc3QgcHJvcGVydHkgPSBPYmplY3RQcm9wZXJ0eS5sb2FkKGFPYmplY3QsIGFLZXksIHRydWUpO1xyXG5cdFx0cHJvcGVydHkuYXBwZW5kID0gYURhdGE7XHJcblx0fVxyXG5cdHJldHVybiBhT2JqZWN0O1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIGNoZWNrZWQgaWYgYW4gb2JqZWN0IGEgc2ltcGxlIG9iamVjdC4gTm8gQXJyYXksIE1hcCBvciBzb21ldGhpbmcgZWxzZS5cclxuICpcclxuICogQHBhcmFtIGFPYmplY3Q6b2JqZWN0IHRoZSBvYmplY3QgdG8gYmUgdGVzdGluZ1xyXG4gKlxyXG4gKiBAcmV0dXJuIGJvb2xlYW5cclxuICovXHJcbmV4cG9ydCBjb25zdCBpc1Bvam8gPSBmdW5jdGlvbiAoYU9iamVjdCkge1xyXG5cdHJldHVybiB0eXBlb2YgYU9iamVjdCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBhT2JqZWN0ICE9IG51bGwgJiYgYU9iamVjdC5jb25zdHJ1Y3Rvci5uYW1lID09PSBcIk9iamVjdFwiO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIG1lcmdpbmcgb2JqZWN0IGludG8gYSB0YXJnZXQgb2JqZWN0LiBJdHMgb25seSBtZXJnZSBzaW1wbGUgb2JqZWN0IGFuZCBzdWIgb2JqZWN0cy4gRXZlcnkgb3RoZXJcclxuICogdmFsdWUgd291bGQgYmUgcmVwbGFjZWQgYnkgdmFsdWUgZnJvbSB0aGUgc291cmNlIG9iamVjdC5cclxuICpcclxuICogc2FtcGxlOiBtZXJnZSh0YXJnZXQsIHNvdXJjZS0xLCBzb3VyY2UtMiwgLi4uc291cmNlLW4pXHJcbiAqXHJcbiAqIEBwYXJhbSBhVGFyZ2V0Om9iamVjdCB0aGUgdGFyZ2V0IG9iamVjdCB0byBtZXJnaW5nIGludG9cclxuICogQHBhcmFtIGFTb3VyY2VzOm9iamVjdFxyXG4gKlxyXG4gKiBAcmV0dXJuIG9iamVjdCByZXR1cm5zIHRoZSB0YXJnZXQgb2JqZWN0XHJcbiAqL1xyXG5leHBvcnQgY29uc3QgbWVyZ2UgPSBmdW5jdGlvbiAoYVRhcmdldCkge1xyXG5cdGZvciAobGV0IGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRjb25zdCBzb3VyY2UgPSBhcmd1bWVudHNbaV07XHJcblx0XHRPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhzb3VyY2UpLmZvckVhY2goKGFLZXkpID0+IHtcclxuXHRcdFx0aWYgKGlzUG9qbyhhVGFyZ2V0W2FLZXldKSkgbWVyZ2UoYVRhcmdldFthS2V5XSwgc291cmNlW2FLZXldKTtcclxuXHRcdFx0ZWxzZSBhVGFyZ2V0W2FLZXldID0gc291cmNlW2FLZXldO1xyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHRyZXR1cm4gYVRhcmdldDtcclxufTtcclxuXHJcbmNvbnN0IGJ1aWxkUHJvcGVydHlGaWx0ZXIgPSBmdW5jdGlvbiAoeyBuYW1lcywgYWxsb3dlZCB9KSB7XHJcblx0cmV0dXJuIChuYW1lLCB2YWx1ZSwgY29udGV4dCkgPT4ge1xyXG5cdFx0cmV0dXJuIG5hbWVzLmluY2x1ZGVzKG5hbWUpID09PSBhbGxvd2VkO1xyXG5cdH07XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZmlsdGVyID0gZnVuY3Rpb24gKCkge1xyXG5cdGNvbnN0IFtkYXRhLCBwcm9wRmlsdGVyLCB7IGRlZXAgPSBmYWxzZSwgcmVjdXJzaXZlID0gdHJ1ZSwgcGFyZW50cyA9IFtdIH0gPSB7fV0gPSBhcmd1bWVudHM7XHJcblx0Y29uc3QgcmVzdWx0ID0ge307XHJcblxyXG5cdGZvciAobGV0IG5hbWUgaW4gZGF0YSkge1xyXG5cdFx0Y29uc3QgdmFsdWUgPSBkYXRhW25hbWVdO1xyXG5cdFx0Y29uc3QgYWNjZXB0ID0gcHJvcEZpbHRlcihuYW1lLCB2YWx1ZSwgZGF0YSk7XHJcblx0XHRpZiAoYWNjZXB0ICYmICghZGVlcCB8fCB2YWx1ZSA9PT0gbnVsbCB8fCB2YWx1ZSA9PT0gdW5kZWZpbmVkKSkgcmVzdWx0W25hbWVdID0gdmFsdWU7XHJcblx0XHRlbHNlIGlmIChhY2NlcHQgJiYgZGVlcCkge1xyXG5cdFx0XHRjb25zdCB0eXBlID0gdHlwZW9mIHZhbHVlO1xyXG5cdFx0XHRpZiAodHlwZSAhPT0gXCJvYmplY3RcIiB8fCB2YWx1ZSBpbnN0YW5jZW9mIEFycmF5IHx8IHZhbHVlIGluc3RhbmNlb2YgTWFwIHx8IHZhbHVlIGluc3RhbmNlb2YgU2V0IHx8IHZhbHVlIGluc3RhbmNlb2YgUmVnRXhwIHx8IHBhcmVudHMuaW5jbHVkZXNbdmFsdWVdIHx8IHZhbHVlID09IGRhdGEpIHJlc3VsdFtuYW1lXSA9IHZhbHVlO1xyXG5cdFx0XHRlbHNlIHJlc3VsdFtuYW1lXSA9IGZpbHRlcih2YWx1ZSwgcHJvcEZpbHRlciwgeyBkZWVwLCByZWN1cnNpdmUsIHBhcmVudHM6IHBhcmVudHMuY29uY2F0KGRhdGEpIH0pO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0cmV0dXJuIHJlc3VsdDtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBkZWZWYWx1ZSA9IChvLCBuYW1lLCB2YWx1ZSkgPT4ge1xyXG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBuYW1lLCB7XHJcblx0XHR2YWx1ZSxcclxuXHRcdHdyaXRhYmxlOiBmYWxzZSxcclxuXHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXHJcblx0XHRlbnVtZXJhYmxlOiBmYWxzZVxyXG5cdH0pO1xyXG59O1xyXG5leHBvcnQgY29uc3QgZGVmR2V0ID0gKG8sIG5hbWUsIGdldCkgPT4ge1xyXG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBuYW1lLCB7XHJcblx0XHRnZXQsXHJcblx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxyXG5cdFx0ZW51bWVyYWJsZTogZmFsc2VcclxuXHR9KTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBkZWZHZXRTZXQgPSAobywgbmFtZSwgZ2V0LCBzZXQpID0+IHtcclxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkobywgbmFtZSwge1xyXG5cdFx0Z2V0LFxyXG5cdFx0c2V0LFxyXG5cdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcclxuXHRcdGVudW1lcmFibGU6IGZhbHNlXHJcblx0fSk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcblx0aXNQb2pvLFxyXG5cdGFwcGVuZCxcclxuXHRtZXJnZSxcclxuXHRmaWx0ZXIsXHJcblx0YnVpbGRQcm9wZXJ0eUZpbHRlcixcclxuXHRkZWZWYWx1ZSxcclxuXHRkZWZHZXQsXHJcblx0ZGVmR2V0U2V0XHJcbn07XHJcbiIsImNvbnN0IFBSSVZBVEVfUFJPUEVSVElFUyA9IG5ldyBXZWFrTWFwKCk7XHJcbmNvbnN0IHByaXZhdGVTdG9yZSA9IChvYmopID0+IHtcclxuXHRpZihQUklWQVRFX1BST1BFUlRJRVMuaGFzKG9iaikpXHJcblx0XHRyZXR1cm4gUFJJVkFURV9QUk9QRVJUSUVTLmdldChvYmopO1xyXG5cdFxyXG5cdGNvbnN0IGRhdGEgPSB7fTtcclxuXHRQUklWQVRFX1BST1BFUlRJRVMuc2V0KG9iaiwgZGF0YSk7XHJcblx0cmV0dXJuIGRhdGE7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgcHJpdmF0ZVByb3BlcnR5ID0gZnVuY3Rpb24ob2JqLCBuYW1lLCB2YWx1ZSkge1xyXG5cdGNvbnN0IGRhdGEgPSBwcml2YXRlU3RvcmUob2JqKTtcclxuXHRpZihhcmd1bWVudHMubGVuZ3RoID09PSAxKVxyXG5cdFx0cmV0dXJuIGRhdGE7XHJcblx0ZWxzZSBpZihhcmd1bWVudHMubGVuZ3RoID09PSAyKVxyXG5cdFx0cmV0dXJuIGRhdGFbbmFtZV07XHJcblx0ZWxzZSBpZihhcmd1bWVudHMubGVuZ3RoID09PSAzKVxyXG5cdFx0ZGF0YVtuYW1lXSA9IHZhbHVlO1xyXG5cdGVsc2VcclxuXHRcdHRocm93IG5ldyBFcnJvcihcIk5vdCBhbGxvd2VkIHNpemUgb2YgYXJndW1lbnRzIVwiKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtwcml2YXRlUHJvcGVydHl9IiwiaW1wb3J0IHtkZWZWYWx1ZSwgZGVmR2V0fSBmcm9tIFwiLi9PYmplY3RVdGlsc1wiXHJcblxyXG5leHBvcnQgY29uc3QgdGltZW91dFByb21pc2UgPSAoZm4sIG1zKSA9PntcclxuXHRsZXQgY2FuY2VsZWQgPSBmYWxzZTtcclxuXHRsZXQgdGltZW91dCA9IG51bGw7XHJcblx0Y29uc3QgcHJvbWlzZSA9IG5ldyBQcm9taXNlKChyLCBlKSA9PiB7XHJcblx0XHR0aW1lb3V0ID0gc2V0VGltZW91dCgoKT0+IHtcclxuXHRcdFx0dGltZW91dCA9IG51bGw7XHJcblx0XHRcdGZuKHIsZSk7XHJcblx0XHR9LCBtcylcclxuXHR9KTtcclxuXHJcblx0Y29uc3QgdGhlbiA9IHByb21pc2UudGhlbjtcclxuXHRwcm9taXNlLnRoZW4gPSAoZm4pID0+IHtcclxuXHRcdHRoZW4uY2FsbChwcm9taXNlLCAocmVzdWx0KSA9PiB7XHJcblx0XHRcdGlmKCF0aGlzLmNhbmNlbGVkKVxyXG5cdFx0XHRcdHJldHVybiBmbihyZXN1bHQpO1xyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHRkZWZWYWx1ZShwcm9taXNlLCBcImNhbmNlbFwiLCAoKSA9PiB7XHJcblx0XHRpZih0aW1lb3V0KXtcclxuXHRcdFx0Y2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xyXG5cdFx0XHRjYW5jZWxlZCA9IHRydWU7XHJcblx0XHR9XHJcblx0fSk7XHJcblx0ZGVmR2V0KHByb21pc2UsIGNhbmNlbGQsICgpID0+IGNhbmNlbGVkKTtcclxuXHJcblx0cmV0dXJuIHByb21pc2U7XHJcbn1cclxuXHJcblxyXG5leHBvcnQgY29uc3QgbGF6eVByb21pc2UgPSAoKSA9PiB7XHJcblx0XHRsZXQgcHJvbWlzZVJlc29sdmUgPSBudWxsO1xyXG5cdFx0bGV0IHByb21pc2VFcnJvciA9IG51bGw7XHJcblxyXG5cdFx0Y29uc3QgcHJvbWlzZSA9IG5ldyBQcm9taXNlKChyLCBlKSA9PiB7XHJcblx0XHRcdHByb21pc2VSZXNvbHZlID0gcjtcclxuXHRcdFx0cHJvbWlzZUVycm9yID0gZTtcclxuXHRcdH0pO1xyXG5cclxuXHRcdGxldCByZXNvbHZlZCA9IGZhbHNlO1xyXG5cdFx0bGV0IGVycm9yID0gZmFsc2U7XHJcblx0XHRsZXQgdmFsdWUgPSB1bmRlZmluZWQ7XHJcblxyXG5cdFx0ZGVmVmFsdWUocHJvbWlzZSwgXCJyZXNvbHZlXCIsIChyZXN1bHQpID0+IHtcclxuXHRcdFx0dmFsdWUgPSByZXN1bHQ7XHJcblx0XHRcdHJlc29sdmVkID0gdHJ1ZTtcclxuXHRcdFx0aWYgKHZhbHVlIGluc3RhbmNlb2YgRXJyb3IpIHtcclxuXHRcdFx0XHRlcnJvciA9IHRydWU7XHJcblx0XHRcdFx0cHJvbWlzZUVycm9yKHZhbHVlKTtcclxuXHRcdFx0fSBlbHNlIHByb21pc2VSZXNvbHZlKHZhbHVlKTtcclxuXHRcdH0pO1xyXG5cclxuXHRcdGRlZkdldChwcm9taXNlLCBcInZhbHVlXCIsICgpID0+IHZhbHVlKTtcclxuXHRcdGRlZkdldChwcm9taXNlLCBcImVycm9yXCIsICgpID0+IGVycm9yKTtcclxuXHRcdGRlZkdldChwcm9taXNlLCBcInJlc29sdmVkXCIsICgpID0+IHJlc29sdmVkKTtcclxuXHJcblx0XHRyZXR1cm4gcHJvbWlzZTtcclxufTtcclxuZXhwb3J0IGRlZmF1bHQge1xyXG5cdGxhenlQcm9taXNlLFxyXG5cdHRpbWVvdXRQcm9taXNlXHJcbn1cclxuIiwiaWYgKCFTdHJpbmcucHJvdG90eXBlLmhhc2hjb2RlKVxyXG5cdFN0cmluZy5wcm90b3R5cGUuaGFzaGNvZGUgPSBmdW5jdGlvbigpIHtcclxuXHRcdGlmICh0aGlzLmxlbmd0aCA9PT0gMClcclxuXHRcdFx0cmV0dXJuIDA7XHJcblx0XHRcclxuXHRcdGxldCBoYXNoID0gMDtcclxuXHRcdGNvbnN0IGxlbmd0aCA9IHRoaXMubGVuZ3RoO1xyXG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xyXG5cdFx0XHRjb25zdCBjID0gdGhpcy5jaGFyQ29kZUF0KGkpO1xyXG5cdFx0XHRoYXNoID0gKChoYXNoIDw8IDUpIC0gaGFzaCkgKyBjO1xyXG5cdFx0XHRoYXNoIHw9IDA7IC8vIENvbnZlcnQgdG8gMzJiaXQgaW50ZWdlclxyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIGhhc2g7XHJcblx0fTsiLCJjb25zdCBHTE9CQUwgPSAoKCkgPT4ge1xyXG5cdGlmKHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIpIHJldHVybiBnbG9iYWw7XHJcblx0aWYodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIikgcmV0dXJuIHdpbmRvdztcdFxyXG5cdGlmKHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiKSByZXR1cm4gc2VsZjtcclxuXHRyZXR1cm4ge307XHJcbn0pKCk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBHTE9CQUw7IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgT2JqZWN0UHJvcGVydHkge1xuXHRjb25zdHJ1Y3RvcihrZXksIGNvbnRleHQpe1xuXHRcdHRoaXMua2V5ID0ga2V5O1xuXHRcdHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XG5cdH1cblx0XG5cdGdldCBrZXlEZWZpbmVkKCl7XG5cdFx0cmV0dXJuIHRoaXMua2V5IGluIHRoaXMuY29udGV4dDsgXG5cdH1cblx0XG5cdGdldCBoYXNWYWx1ZSgpe1xuXHRcdHJldHVybiAhIXRoaXMuY29udGV4dFt0aGlzLmtleV07XG5cdH1cblx0XG5cdGdldCB2YWx1ZSgpe1xuXHRcdHJldHVybiB0aGlzLmNvbnRleHRbdGhpcy5rZXldO1xuXHR9XG5cdFxuXHRzZXQgdmFsdWUoZGF0YSl7XG5cdFx0dGhpcy5jb250ZXh0W3RoaXMua2V5XSA9IGRhdGE7XG5cdH1cblx0XG5cdHNldCBhcHBlbmQoZGF0YSkge1xuXHRcdGlmKCF0aGlzLmhhc1ZhbHVlKVxuXHRcdFx0dGhpcy52YWx1ZSA9IGRhdGE7XG5cdFx0ZWxzZSB7XG5cdFx0XHRjb25zdCB2YWx1ZSA9IHRoaXMudmFsdWU7XG5cdFx0XHRpZih2YWx1ZSBpbnN0YW5jZW9mIEFycmF5KVxuXHRcdFx0XHR2YWx1ZS5wdXNoKGRhdGEpO1xuXHRcdFx0ZWxzZVxuXHRcdFx0XHR0aGlzLnZhbHVlID0gW3RoaXMudmFsdWUsIGRhdGFdO1xuXHRcdH1cblx0fVxuXHRcblx0cmVtb3ZlKCl7XG5cdFx0ZGVsZXRlIHRoaXMuY29udGV4dFt0aGlzLmtleV07XG5cdH1cblx0XG5cdHN0YXRpYyBsb2FkKGRhdGEsIGtleSwgY3JlYXRlPXRydWUpIHtcblx0XHRsZXQgY29udGV4dCA9IGRhdGE7XG5cdFx0Y29uc3Qga2V5cyA9IGtleS5zcGxpdChcIlxcLlwiKTtcblx0XHRsZXQgbmFtZSA9IGtleXMuc2hpZnQoKS50cmltKCk7XG5cdFx0d2hpbGUoa2V5cy5sZW5ndGggPiAwKXtcblx0XHRcdGlmKCFjb250ZXh0W25hbWVdKXtcblx0XHRcdFx0aWYoIWNyZWF0ZSlcblx0XHRcdFx0XHRyZXR1cm4gbnVsbDtcblx0XHRcdFx0XG5cdFx0XHRcdGNvbnRleHRbbmFtZV0gPSB7fVxuXHRcdFx0fVxuXHRcdFx0XG5cdFx0XHRjb250ZXh0ID0gY29udGV4dFtuYW1lXTtcblx0XHRcdG5hbWUgPSBrZXlzLnNoaWZ0KCkudHJpbSgpO1xuXHRcdH1cblx0XHRcblx0XHRyZXR1cm4gbmV3IE9iamVjdFByb3BlcnR5KG5hbWUsIGNvbnRleHQpO1xuXHR9XG59OyIsImltcG9ydCBPYmplY3RQcm9wZXJ0eSBmcm9tIFwiLi9PYmplY3RQcm9wZXJ0eS5qc1wiO1xyXG4vKipcclxuICogYXBwZW5kIGEgcHJvcGVyeSB2YWx1ZSB0byBhbiBvYmplY3QuIElmIHByb3BlcnkgZXhpc3RzIGl0cyB3b3VsZCBiZSBjb252ZXJ0ZWQgdG8gYW4gYXJyYXlcclxuICogXHJcbiAqICBAcGFyYW0gYUtleTpzdHJpbmcgbmFtZSBvZiBwcm9wZXJ0eVxyXG4gKiAgQHBhcmFtIGFEYXRhOmFueSBwcm9wZXJ0eSB2YWx1ZVxyXG4gKiAgQHBhcmFtIGFPYmplY3Q6b2JqZWN0IHRoZSBvYmplY3QgdG8gYXBwZW5kIHRoZSBwcm9wZXJ0eVxyXG4gKiAgXHJcbiAqICBAcmV0dXJuIHJldHVybnMgdGhlIGNoYW5nZWQgb2JqZWN0XHJcbiAqL1xyXG5leHBvcnQgY29uc3QgYXBwZW5kID0gZnVuY3Rpb24oYUtleSwgYURhdGEsIGFPYmplY3QpIHtcclxuXHRpZiAodHlwZW9mIGFEYXRhICE9PSBcInVuZGVmaW5lZFwiKSB7XHJcblx0XHRjb25zdCBwcm9wZXJ0eSA9IE9iamVjdFByb3BlcnR5LmxvYWQoYU9iamVjdCwgYUtleSwgdHJ1ZSlcclxuXHRcdHByb3BlcnR5LmFwcGVuZCA9IGFEYXRhO1xyXG5cdH1cclxuXHRyZXR1cm4gYU9iamVjdDtcclxufTtcclxuXHJcbi8qKlxyXG4gKiBjaGVja2VkIGlmIGFuIG9iamVjdCBhIHNpbXBsZSBvYmplY3QuIE5vIEFycmF5LCBNYXAgb3Igc29tZXRoaW5nIGVsc2UuXHJcbiAqIFxyXG4gKiBAcGFyYW0gYU9iamVjdDpvYmplY3QgdGhlIG9iamVjdCB0byBiZSB0ZXN0aW5nXHJcbiAqIFxyXG4gKiBAcmV0dXJuIGJvb2xlYW5cclxuICovXHJcbmV4cG9ydCBjb25zdCBpc1Bvam8gPSBmdW5jdGlvbihhT2JqZWN0KSB7XHJcblx0cmV0dXJuIHR5cGVvZiBhT2JqZWN0ICE9PSBcInVuZGVmaW5lZFwiICYmIGFPYmplY3QgIT0gbnVsbCAmJiBhT2JqZWN0LmNvbnN0cnVjdG9yLm5hbWUgPT09IFwiT2JqZWN0XCJcclxufVxyXG5cclxuLyoqXHJcbiAqIG1lcmdpbmcgb2JqZWN0IGludG8gYSB0YXJnZXQgb2JqZWN0LiBJdHMgb25seSBtZXJnZSBzaW1wbGUgb2JqZWN0IGFuZCBzdWIgb2JqZWN0cy4gRXZlcnkgb3RoZXIgXHJcbiAqIHZhbHVlIHdvdWxkIGJlIHJlcGxhY2VkIGJ5IHZhbHVlIGZyb20gdGhlIHNvdXJjZSBvYmplY3QuXHJcbiAqIFxyXG4gKiBzYW1wbGU6IG1lcmdlKHRhcmdldCwgc291cmNlLTEsIHNvdXJjZS0yLCAuLi5zb3VyY2UtbilcclxuICogXHJcbiAqIEBwYXJhbSBhVGFyZ2V0Om9iamVjdCB0aGUgdGFyZ2V0IG9iamVjdCB0byBtZXJnaW5nIGludG9cclxuICogQHBhcmFtIGFTb3VyY2VzOm9iamVjdFxyXG4gKiBcclxuICogQHJldHVybiBvYmplY3QgcmV0dXJucyB0aGUgdGFyZ2V0IG9iamVjdFxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IG1lcmdlID0gZnVuY3Rpb24oYVRhcmdldCkge1xyXG5cdGZvciAobGV0IGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRjb25zdCBzb3VyY2UgPSBhcmd1bWVudHNbaV07XHJcblx0XHRPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhzb3VyY2UpLmZvckVhY2goYUtleSA9PiB7XHJcblx0XHRcdGlmIChpc1Bvam8oYVRhcmdldFthS2V5XSkpXHJcblx0XHRcdFx0bWVyZ2UoYVRhcmdldFthS2V5XSwgc291cmNlW2FLZXldKTtcclxuXHRcdFx0ZWxzZVxyXG5cdFx0XHRcdGFUYXJnZXRbYUtleV0gPSBzb3VyY2VbYUtleV07XHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdHJldHVybiBhVGFyZ2V0O1xyXG59XHJcblxyXG5cclxuXHJcbmNvbnN0IGJ1aWxkUHJvcGVydHlGaWx0ZXIgPSBmdW5jdGlvbih7IG5hbWVzLCBhbGxvd2VkIH0pIHtcclxuXHRyZXR1cm4gKG5hbWUsIHZhbHVlLCBjb250ZXh0KSA9PiB7XHJcblx0XHRyZXR1cm4gbmFtZXMuaW5jbHVkZXMobmFtZSkgPT09IGFsbG93ZWQ7XHJcblx0fVxyXG59O1xyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBmaWx0ZXIgPSBmdW5jdGlvbigpIHtcclxuXHRjb25zdCBbZGF0YSwgcHJvcEZpbHRlciwge2RlZXAgPSBmYWxzZSwgcmVjdXJzaXZlID0gdHJ1ZSwgcGFyZW50cyA9IFtdfSA9IHt9XSA9IGFyZ3VtZW50cztcclxuXHRjb25zdCByZXN1bHQgPSB7fTtcclxuXHJcblx0Zm9yIChuYW1lIGluIGRhdGEpIHtcclxuXHRcdGNvbnN0IHZhbHVlID0gZGF0YVtuYW1lXTtcclxuXHRcdGNvbnN0IGFjY2VwdCA9IHByb3BGaWx0ZXIobmFtZSwgdmFsdWUsIGRhdGEpO1xyXG5cdFx0aWYgKGFjY2VwdCAmJiAoIWRlZXAgfHwgdmFsdWUgPT09IG51bGwgfHwgdmFsdWUgPT09IHVuZGVmaW5lZCkpXHJcblx0XHRcdHJlc3VsdFtuYW1lXSA9IHZhbHVlO1xyXG5cdFx0ZWxzZSBpZiAoYWNjZXB0ICYmIGRlZXApIHtcclxuXHRcdFx0Y29uc3QgdHlwZSA9IHR5cGVvZiB2YWx1ZTtcclxuXHRcdFx0aWYgKHR5cGUgIT09IFwib2JqZWN0XCJcclxuXHRcdFx0XHR8fCB2YWx1ZSBpbnN0YW5jZW9mIEFycmF5XHJcblx0XHRcdFx0fHwgdmFsdWUgaW5zdGFuY2VvZiBNYXBcclxuXHRcdFx0XHR8fCB2YWx1ZSBpbnN0YW5jZW9mIFNldFxyXG5cdFx0XHRcdHx8IHZhbHVlIGluc3RhbmNlb2YgUmVnRXhwXHJcblx0XHRcdFx0fHwgcGFyZW50cy5pbmNsdWRlc1t2YWx1ZV1cclxuXHRcdFx0XHR8fCB2YWx1ZSA9PSBkYXRhKVxyXG5cdFx0XHRcdHJlc3VsdFtuYW1lXSA9IHZhbHVlO1xyXG5cdFx0XHRlbHNlXHJcblx0XHRcdFx0cmVzdWx0W25hbWVdID0gZmlsdGVyKHZhbHVlLCBwcm9wRmlsdGVyLCB7ZGVlcCwgcmVjdXJzaXZlLCBwYXJlbnRzOiAgcGFyZW50cy5jb25jYXQoZGF0YSl9KTtcclxuXHRcdH1cclxuXHJcblx0fVxyXG5cclxuXHRyZXR1cm4gcmVzdWx0O1xyXG59O1xyXG5cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcblx0aXNQb2pvLFxyXG5cdGFwcGVuZCxcclxuXHRtZXJnZSxcclxuXHRmaWx0ZXIsXHJcblx0YnVpbGRQcm9wZXJ0eUZpbHRlclxyXG59OyIsImNvbnN0IHNlZWtBdENoYWluID0gKHJlc29sdmVyLCBwcm9wZXJ0eSkgPT4ge1xuXHR3aGlsZShyZXNvbHZlcil7XG5cdFx0Y29uc3QgZGVmID0gcmVzb2x2ZXIucHJveHkuaGFuZGxlLmdldFByb3BlcnR5RGVmKHByb3BlcnR5LCBmYWxzZSk7XG5cdFx0aWYoZGVmKVxuXHRcdFx0cmV0dXJuIGRlZjtcblx0XHRcblx0XHRyZXNvbHZlciA9IHJlc29sdmVyLnBhcmVudDtcblx0fVx0XG5cdHJldHVybiB7IGRhdGE6IG51bGwsIHJlc29sdmVyOiBudWxsLCBkZWZpbmVkOiBmYWxzZSB9O1xufVxuXG5jbGFzcyBIYW5kbGUge1xuXHRjb25zdHJ1Y3RvcihkYXRhLCByZXNvbHZlcikge1xuXHRcdHRoaXMuZGF0YSA9IGRhdGE7XG5cdFx0dGhpcy5yZXNvbHZlciA9IHJlc29sdmVyO1xuXHRcdHRoaXMuY2FjaGUgPSBuZXcgTWFwKCk7XG5cdH1cblx0XG5cdHVwZGF0ZURhdGEoZGF0YSl7XG5cdFx0dGhpcy5kYXRhID0gZGF0YTtcblx0XHR0aGlzLmNhY2hlID0gbmV3IE1hcCgpO1xuXHR9XG5cdFxuXHRyZXNldENhY2hlKCl7XG5cdFx0dGhpcy5jYWNoZSA9IG5ldyBNYXAoKTtcblx0fVxuXG5cdGdldFByb3BlcnR5RGVmKHByb3BlcnR5LCBzZWVrID0gdHJ1ZSkge1xuXHRcdGlmICh0aGlzLmNhY2hlLmhhcyhwcm9wZXJ0eSkpXG5cdFx0XHRyZXR1cm4gdGhpcy5jYWNoZS5nZXQocHJvcGVydHkpO1xuXHRcdFxuXHRcdGxldCBkZWYgPSBudWxsXG5cdFx0aWYgKHRoaXMuZGF0YSAmJiBwcm9wZXJ0eSBpbiB0aGlzLmRhdGEpXG5cdFx0XHRkZWYgPSB7IGRhdGE6IHRoaXMuZGF0YSwgcmVzb2x2ZXI6IHRoaXMucmVzb2x2ZXIsIGRlZmluZWQ6IHRydWUgfTtcblx0XHRlbHNlIGlmKHNlZWspXG5cdFx0XHRkZWYgPSBzZWVrQXRDaGFpbih0aGlzLnJlc29sdmVyLnBhcmVudCwgcHJvcGVydHkpO1xuXHRcdGVsc2Vcblx0XHRcdHJldHVybiBudWxsO1xuXHRcdGlmKGRlZi5kZWZpbmVkKVxuXHRcdFx0dGhpcy5jYWNoZS5zZXQocHJvcGVydHksIGRlZik7XG5cdFx0cmV0dXJuIGRlZjtcblx0fVxuXG5cdGhhc1Byb3BlcnR5KHByb3BlcnR5KSB7XG5cdFx0Ly9AVE9ETyB3cml0ZSB0ZXN0cyEhIVxuXHRcdGNvbnN0IHsgZGVmaW5lZCB9ID0gdGhpcy5nZXRQcm9wZXJ0eURlZihwcm9wZXJ0eSk7XG5cdFx0cmV0dXJuIGRlZmluZWQ7XG5cdH1cblx0Z2V0UHJvcGVydHkocHJvcGVydHkpIHtcblx0XHQvL0BUT0RPIHdyaXRlIHRlc3RzISEhXHRcblx0XHRjb25zdCB7IGRhdGEgfSA9IHRoaXMuZ2V0UHJvcGVydHlEZWYocHJvcGVydHkpO1xuXHRcdHJldHVybiBkYXRhID8gZGF0YVtwcm9wZXJ0eV0gOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0UHJvcGVydHkocHJvcGVydHksIHZhbHVlKSB7XG5cdFx0Ly9AVE9ETyB3b3VsZCBzdXBwb3J0IHRoaXMgYWN0aW9uIG9uIGFuIHByb3hpZWQgcmVzb2x2ZXIgY29udGV4dD8/PyB3cml0ZSB0ZXN0cyEhIVxuXHRcdGNvbnN0IHsgZGF0YSwgZGVmaW5lZCB9ID0gdGhpcy5nZXRQcm9wZXJ0eURlZihwcm9wZXJ0eSk7XG5cdFx0aWYgKGRlZmluZWQpXG5cdFx0XHRkYXRhW3Byb3BlcnR5XSA9IHZhbHVlO1xuXHRcdGVsc2Uge1xuXHRcdFx0aWYgKHRoaXMuZGF0YSlcblx0XHRcdFx0dGhpcy5kYXRhW3Byb3BlcnR5XSA9IHZhbHVlO1xuXHRcdFx0ZWxzZSB7XG5cdFx0XHRcdHRoaXMuZGF0YSA9IHt9XG5cdFx0XHRcdHRoaXMuZGF0YVtwcm9wZXJ0eV0gPSB2YWx1ZTtcblx0XHRcdH1cblx0XHRcdHRoaXMuY2FjaGUuc2V0KHByb3BlcnR5LCB7IGRhdGE6IHRoaXMuZGF0YSwgcmVzb2x2ZXI6IHRoaXMucmVzb2x2ZXIsIGRlZmluZWQ6IHRydWUgfSk7XG5cdFx0fVxuXHR9XG5cdGRlbGV0ZVByb3BlcnR5KHByb3BlcnR5KSB7XG5cdFx0Ly9AVE9ETyB3b3VsZCBzdXBwb3J0IHRoaXMgYWN0aW9uIG9uIGFuIHByb3hpZWQgcmVzb2x2ZXIgY29udGV4dD8/PyB3cml0ZSB0ZXN0cyEhIVx0XHRcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJ1bnN1cHBvcnRlZCBmdW5jdGlvbiFcIilcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb250ZXh0IHtcblx0Y29uc3RydWN0b3IoY29udGV4dCwgcmVzb2x2ZXIpIHtcblx0XHR0aGlzLmhhbmRsZSA9IG5ldyBIYW5kbGUoY29udGV4dCwgcmVzb2x2ZXIpO1x0XHRcblx0XHR0aGlzLmRhdGEgPSBuZXcgUHJveHkodGhpcy5oYW5kbGUsIHtcblx0XHRcdGhhczogZnVuY3Rpb24oZGF0YSwgcHJvcGVydHkpIHtcblx0XHRcdFx0cmV0dXJuIGRhdGEuaGFzUHJvcGVydHkocHJvcGVydHkpO1xuXHRcdFx0fSxcblx0XHRcdGdldDogZnVuY3Rpb24oZGF0YSwgcHJvcGVydHkpIHtcblx0XHRcdFx0cmV0dXJuIGRhdGEuZ2V0UHJvcGVydHkocHJvcGVydHkpO1xuXHRcdFx0fSxcblx0XHRcdHNldDogZnVuY3Rpb24oZGF0YSwgcHJvcGVydHksIHZhbHVlKSB7XG5cdFx0XHRcdHJldHVybiBkYXRhLnNldFByb3BlcnR5KHByb3BlcnR5LCB2YWx1ZSk7XG5cdFx0XHR9LFxuXHRcdFx0ZGVsZXRlUHJvcGVydHk6IGZ1bmN0aW9uKGRhdGEsIHByb3BlcnR5KSB7XG5cdFx0XHRcdHJldHVybiBkYXRhLmRlbGV0ZVByb3BlcnR5KHByb3BlcnR5KTtcblx0XHRcdH1cblx0XHRcdC8vQFRPRE8gbmVlZCB0byBzdXBwb3J0IHRoZSBvdGhlciBwcm94eSBhY3Rpb25zXHRcdFxuXHRcdH0pOztcblx0fVxuXHRcblx0dXBkYXRlRGF0YShkYXRhKXtcblx0XHR0aGlzLmhhbmRsZS51cGRhdGVEYXRhKGRhdGEpXHRcdFxuXHR9XG5cdFxuXHRyZXNldENhY2hlKCl7XG5cdFx0dGhpcy5oYW5kbGUucmVzZXRDYWNoZSgpO1xuXHR9XG59OyIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIERlZmF1bHRWYWx1ZSB7XG5cdGNvbnN0cnVjdG9yKHZhbHVlKXtcblx0XHR0aGlzLmhhc1ZhbHVlID0gYXJndW1lbnRzLmxlbmd0aCA9PSAxO1xuXHRcdHRoaXMudmFsdWUgPSB2YWx1ZTtcblx0fVx0XG59OyIsImltcG9ydCBHTE9CQUwgZnJvbSBcIkBkZWZhdWx0LWpzL2RlZmF1bHRqcy1jb21tb24tdXRpbHMvc3JjL0dsb2JhbC5qc1wiXHJcbmltcG9ydCBPYmplY3RQcm9wZXJ0eSBmcm9tIFwiQGRlZmF1bHQtanMvZGVmYXVsdGpzLWNvbW1vbi11dGlscy9zcmMvT2JqZWN0UHJvcGVydHkuanNcIjtcclxuaW1wb3J0IE9iamVjdFV0aWxzIGZyb20gXCJAZGVmYXVsdC1qcy9kZWZhdWx0anMtY29tbW9uLXV0aWxzL3NyYy9PYmplY3RVdGlscy5qc1wiXHJcbmltcG9ydCBEZWZhdWx0VmFsdWUgZnJvbSBcIi4vRGVmYXVsdFZhbHVlLmpzXCI7XHJcbmltcG9ydCBDb250ZXh0IGZyb20gXCIuL0NvbnRleHQuanNcIjtcclxuXHJcblxyXG5jb25zdCBFWEVDVVRJT05fV0FSTl9USU1FT1VUID0gMTAwMDtcclxuY29uc3QgRVhQUkVTU0lPTiA9IC8oXFxcXD8pKFxcJFxceygoW2EtekEtWjAtOVxcLV9cXHNdKyk6Oik/KFteXFx7XFx9XSspXFx9KS87XHJcbmNvbnN0IE1BVENIX0VTQ0FQRUQgPSAxO1xyXG5jb25zdCBNQVRDSF9GVUxMX0VYUFJFU1NJT04gPSAyO1xyXG5jb25zdCBNQVRDSF9FWFBSRVNTSU9OX1NDT1BFID0gNDtcclxuY29uc3QgTUFUQ0hfRVhQUkVTU0lPTl9TVEFURU1FTlQgPSA1O1xyXG5cclxuY29uc3QgREVGQVVMVF9OT1RfREVGSU5FRCA9IG5ldyBEZWZhdWx0VmFsdWUoKTtcclxuY29uc3QgdG9EZWZhdWx0VmFsdWUgPSB2YWx1ZSA9PiB7XHJcblx0aWYgKHZhbHVlIGluc3RhbmNlb2YgRGVmYXVsdFZhbHVlKVxyXG5cdFx0cmV0dXJuIHZhbHVlO1xyXG5cclxuXHRyZXR1cm4gbmV3IERlZmF1bHRWYWx1ZSh2YWx1ZSk7XHJcbn07XHJcblxyXG5jb25zdCBleGVjdXRlID0gYXN5bmMgZnVuY3Rpb24oYVN0YXRlbWVudCwgYUNvbnRleHQpIHtcclxuXHRpZiAodHlwZW9mIGFTdGF0ZW1lbnQgIT09IFwic3RyaW5nXCIpXHJcblx0XHRyZXR1cm4gYVN0YXRlbWVudDtcclxuXHRcdFxyXG5cdGNvbnN0IGV4cHJlc3Npb24gPSBuZXcgRnVuY3Rpb24oXCJjb250ZXh0XCIsIFxyXG5gXHJcbnJldHVybiAoYXN5bmMgKGNvbnRleHQpID0+IHtcclxuXHR0cnl7IFxyXG5cdFx0d2l0aChjb250ZXh0KXtcclxuXHRcdFx0IHJldHVybiAke2FTdGF0ZW1lbnR9XHJcblx0XHR9XHJcblx0fWNhdGNoKGUpe1xyXG5cdFx0dGhyb3cgZTtcclxuXHR9XHJcbn0pKGNvbnRleHQpYFxyXG5cdCk7XHJcblx0XHJcblx0bGV0IHRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcclxuXHRcdHRpbWVvdXQgPSBudWxsO1xyXG5cdFx0Y29uc29sZS53YXJuKFwibG9uZyBydW5uaW5nIHN0YXRlbWVudDpcIiwgYVN0YXRlbWVudCwgbmV3IEVycm9yKCkpO1xyXG5cdH0sIEVYRUNVVElPTl9XQVJOX1RJTUVPVVQpXHJcblx0bGV0IHJlc3VsdCA9IHVuZGVmaW5lZDtcclxuXHR0cnl7XHJcblx0XHRyZXN1bHQgPSBhd2FpdCBleHByZXNzaW9uKGFDb250ZXh0KTtcclxuXHR9Y2F0Y2goZSl7fVxyXG5cdFxyXG5cdGlmKHRpbWVvdXQpXHJcblx0XHRjbGVhclRpbWVvdXQodGltZW91dClcclxuXHRyZXR1cm4gcmVzdWx0O1xyXG59O1xyXG5cclxuY29uc3QgcmVzb2x2ZSA9IGFzeW5jIGZ1bmN0aW9uKGFSZXNvbHZlciwgYUV4cHJlc3Npb24sIGFGaWx0ZXIsIGFEZWZhdWx0KSB7XHJcblx0aWYgKGFGaWx0ZXIgJiYgYVJlc29sdmVyLm5hbWUgIT0gYUZpbHRlcilcclxuXHRcdHJldHVybiBhUmVzb2x2ZXIucGFyZW50ID8gcmVzb2x2ZShhUmVzb2x2ZXIucGFyZW50LCBhRXhwcmVzc2lvbiwgYUZpbHRlciwgYURlZmF1bHQpIDogbnVsbDtcclxuXHRcclxuXHRjb25zdCByZXN1bHQgPSBhd2FpdCBleGVjdXRlKGFFeHByZXNzaW9uLCBhUmVzb2x2ZXIucHJveHkuZGF0YSk7XHJcblx0aWYgKHJlc3VsdCAhPT0gbnVsbCAmJiB0eXBlb2YgcmVzdWx0ICE9PSBcInVuZGVmaW5lZFwiKVxyXG5cdFx0cmV0dXJuIHJlc3VsdDtcclxuXHJcblx0ZWxzZSBpZiAoYURlZmF1bHQgaW5zdGFuY2VvZiBEZWZhdWx0VmFsdWUgJiYgYURlZmF1bHQuaGFzVmFsdWUpXHJcblx0XHRyZXR1cm4gYURlZmF1bHQudmFsdWU7XHJcbn07XHJcblxyXG5jb25zdCByZXNvbHZlTWF0Y2ggPSBhc3luYyAocmVzb2x2ZXIsIG1hdGNoLCBkZWZhdWx0VmFsdWUpID0+IHtcclxuXHRpZihtYXRjaFtNQVRDSF9FU0NBUEVEXSlcclxuXHRcdHJldHVybiBtYXRjaFtNQVRDSF9GVUxMX0VYUFJFU1NJT05dOyBcclxuXHRcdFxyXG5cdHJldHVybiByZXNvbHZlKHJlc29sdmVyLCBtYXRjaFtNQVRDSF9FWFBSRVNTSU9OX1NUQVRFTUVOVF0sIG5vcm1hbGl6ZShtYXRjaFtNQVRDSF9FWFBSRVNTSU9OX1NDT1BFXSksIGRlZmF1bHRWYWx1ZSk7XHJcbn1cclxuXHJcbmNvbnN0IG5vcm1hbGl6ZSA9IHZhbHVlID0+IHtcclxuXHRpZiAodmFsdWUpIHtcclxuXHRcdHZhbHVlID0gdmFsdWUudHJpbSgpO1xyXG5cdFx0cmV0dXJuIHZhbHVlLmxlbmd0aCA9PSAwID8gbnVsbCA6IHZhbHVlO1xyXG5cdH1cclxuXHRyZXR1cm4gbnVsbDtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEV4cHJlc3Npb25SZXNvbHZlciB7XHJcblx0Y29uc3RydWN0b3IoeyBjb250ZXh0ID0gR0xPQkFMLCBwYXJlbnQgPSBudWxsLCBuYW1lID0gbnVsbCB9KSB7XHJcblx0XHR0aGlzLnBhcmVudCA9IChwYXJlbnQgaW5zdGFuY2VvZiBFeHByZXNzaW9uUmVzb2x2ZXIpID8gcGFyZW50IDogbnVsbDtcclxuXHRcdHRoaXMubmFtZSA9IG5hbWU7XHJcblx0XHR0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xyXG5cdFx0dGhpcy5wcm94eSA9IG5ldyBDb250ZXh0KHRoaXMuY29udGV4dCwgdGhpcyk7XHJcblx0fVxyXG5cclxuXHRnZXQgY2hhaW4oKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5wYXJlbnQgPyB0aGlzLnBhcmVudC5jaGFpbiArIFwiL1wiICsgdGhpcy5uYW1lIDogXCIvXCIgKyB0aGlzLm5hbWU7XHJcblx0fVxyXG5cclxuXHRnZXQgZWZmZWN0aXZlQ2hhaW4oKSB7XHJcblx0XHRpZiAoIXRoaXMuY29udGV4dClcclxuXHRcdFx0cmV0dXJuIHRoaXMucGFyZW50ID8gdGhpcy5wYXJlbnQuZWZmZWN0aXZlQ2hhaW4gOiBcIlwiO1xyXG5cdFx0cmV0dXJuIHRoaXMucGFyZW50ID8gdGhpcy5wYXJlbnQuZWZmZWN0aXZlQ2hhaW4gKyBcIi9cIiArIHRoaXMubmFtZSA6IFwiL1wiICsgdGhpcy5uYW1lO1xyXG5cdH1cclxuXHJcblx0Z2V0IGNvbnRleHRDaGFpbigpIHtcclxuXHRcdGNvbnN0IHJlc3VsdCA9IFtdO1xyXG5cdFx0bGV0IHJlc29sdmVyID0gdGhpcztcclxuXHRcdHdoaWxlIChyZXNvbHZlcikge1xyXG5cdFx0XHRpZiAocmVzb2x2ZXIuY29udGV4dClcclxuXHRcdFx0XHRyZXN1bHQucHVzaChyZXNvbHZlci5jb250ZXh0KTtcclxuXHJcblx0XHRcdHJlc29sdmVyID0gcmVzb2x2ZXIucGFyZW50O1xyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiByZXN1bHQ7XHJcblx0fVxyXG5cclxuXHRnZXREYXRhKGtleSwgZmlsdGVyKSB7XHJcblx0XHRpZiAoIWtleSlcclxuXHRcdFx0cmV0dXJuO1xyXG5cdFx0ZWxzZSBpZiAoZmlsdGVyICYmIGZpbHRlciAhPSB0aGlzLm5hbWUpIHtcclxuXHRcdFx0aWYgKHRoaXMucGFyZW50KVxyXG5cdFx0XHRcdHRoaXMucGFyZW50LmdldERhdGEoa2V5LCBmaWx0ZXIpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0Y29uc3QgcHJvcGVydHkgPSBPYmplY3RQcm9wZXJ0eS5sb2FkKHRoaXMuY29udGV4dCwga2V5LCBmYWxzZSk7XHJcblx0XHRcdHJldHVybiBwcm9wZXJ0eSA/IHByb3BlcnR5LnZhbHVlIDogbnVsbDtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHVwZGF0ZURhdGEoa2V5LCB2YWx1ZSwgZmlsdGVyKSB7XHJcblx0XHRpZiAoIWtleSlcclxuXHRcdFx0cmV0dXJuO1xyXG5cdFx0ZWxzZSBpZiAoZmlsdGVyICYmIGZpbHRlciAhPSB0aGlzLm5hbWUpIHtcclxuXHRcdFx0aWYgKHRoaXMucGFyZW50KVxyXG5cdFx0XHRcdHRoaXMucGFyZW50LnVwZGF0ZURhdGEoa2V5LCB2YWx1ZSwgZmlsdGVyKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGlmKHRoaXMuY29udGV4dCA9PSBudWxsIHx8IHR5cGVvZiB0aGlzLmNvbnRleHQgPT09IFwidW5kZWZpbmVkXCIpe1xyXG5cdFx0XHRcdHRoaXMuY29udGV4dCA9IHt9O1x0XHRcdFx0XHJcblx0XHRcdFx0dGhpcy5wcm94eS51cGRhdGVEYXRhKHRoaXMuY29udGV4dCk7XHJcblx0XHRcdH1cclxuXHRcdFx0Y29uc3QgcHJvcGVydHkgPSBPYmplY3RQcm9wZXJ0eS5sb2FkKHRoaXMuY29udGV4dCwga2V5KTtcclxuXHRcdFx0cHJvcGVydHkudmFsdWUgPSB2YWx1ZTtcclxuXHRcdFx0dGhpcy5wcm94eS5yZXNldENhY2hlKCk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRtZXJnZUNvbnRleHQoY29udGV4dCwgZmlsdGVyKSB7XHJcblx0XHRpZiAoZmlsdGVyICYmIGZpbHRlciAhPSB0aGlzLm5hbWUpIHtcclxuXHRcdFx0aWYgKHRoaXMucGFyZW50KVxyXG5cdFx0XHRcdHRoaXMucGFyZW50Lm1lcmdlQ29udGV4dChjb250ZXh0LCBmaWx0ZXIpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0dGhpcy5jb250ZXh0ID0gdGhpcy5jb250ZXh0ID8gT2JqZWN0VXRpbHMubWVyZ2UodGhpcy5jb250ZXh0LCBjb250ZXh0KSA6IGNvbnRleHQ7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRhc3luYyByZXNvbHZlKGFFeHByZXNzaW9uLCBhRGVmYXVsdCkge1xyXG5cdFx0Y29uc3QgZGVmYXVsdFZhbHVlID0gYXJndW1lbnRzLmxlbmd0aCA9PSAyID8gdG9EZWZhdWx0VmFsdWUoYURlZmF1bHQpIDogREVGQVVMVF9OT1RfREVGSU5FRDtcclxuXHRcdHRyeSB7XHJcblx0XHRcdGNvbnN0IG1hdGNoID0gRVhQUkVTU0lPTi5leGVjKGFFeHByZXNzaW9uKTtcclxuXHRcdFx0aWYgKG1hdGNoKVxyXG5cdFx0XHRcdHJldHVybiBhd2FpdCByZXNvbHZlTWF0Y2godGhpcywgbWF0Y2gsIGRlZmF1bHRWYWx1ZSk7XHJcblx0XHRcdGVsc2VcclxuXHRcdFx0XHRyZXR1cm4gYXdhaXQgcmVzb2x2ZSh0aGlzLCBub3JtYWxpemUoYUV4cHJlc3Npb24pLCBudWxsLCBkZWZhdWx0VmFsdWUpO1xyXG5cdFx0fSBjYXRjaCAoZSkge1xyXG5cdFx0XHRjb25zb2xlLmVycm9yKFwiZXJyb3IgYXQgZXhlY3V0aW5nIHN0YXRtZW50XFxcIlwiLCBhRXhwcmVzc2lvbiwgXCJcXFwiOlwiLCBlKTtcclxuXHRcdFx0cmV0dXJuIGRlZmF1bHRWYWx1ZS5oYXNWYWx1ZSA/IGRlZmF1bHRWYWx1ZS52YWx1ZSA6IGFFeHByZXNzaW9uO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0YXN5bmMgcmVzb2x2ZVRleHQoYVRleHQsIGFEZWZhdWx0KSB7XHJcblx0XHRsZXQgdGV4dCA9IGFUZXh0O1xyXG5cdFx0bGV0IHRlbXAgPSBhVGV4dDsgLy8gcmVxdWlyZWQgdG8gcHJldmVudCBpbmZpbml0eSBsb29wXHJcblx0XHRsZXQgbWF0Y2ggPSBFWFBSRVNTSU9OLmV4ZWModGV4dCk7XHJcblx0XHRjb25zdCBkZWZhdWx0VmFsdWUgPSBhcmd1bWVudHMubGVuZ3RoID09IDIgPyB0b0RlZmF1bHRWYWx1ZShhRGVmYXVsdCkgOiBERUZBVUxUX05PVF9ERUZJTkVEXHJcblx0XHR3aGlsZSAobWF0Y2ggIT0gbnVsbCkge1xyXG5cdFx0XHRjb25zdCByZXN1bHQgPSBhd2FpdCByZXNvbHZlTWF0Y2godGhpcywgbWF0Y2gsIGRlZmF1bHRWYWx1ZSk7XHJcblx0XHRcdHRlbXAgPSB0ZW1wLnNwbGl0KG1hdGNoWzBdKS5qb2luKCk7IC8vIHJlbW92ZSBjdXJyZW50IG1hdGNoIGZvciBuZXh0IGxvb3BcclxuXHRcdFx0dGV4dCA9IHRleHQuc3BsaXQobWF0Y2hbMF0pLmpvaW4odHlwZW9mIHJlc3VsdCA9PT0gXCJ1bmRlZmluZWRcIiA/IFwidW5kZWZpbmVkXCIgOiAocmVzdWx0ID09IG51bGwgPyBcIm51bGxcIiA6IHJlc3VsdCkpO1xyXG5cdFx0XHRtYXRjaCA9IEVYUFJFU1NJT04uZXhlYyh0ZW1wKTtcclxuXHRcdH1cclxuXHRcdHJldHVybiB0ZXh0O1xyXG5cdH1cclxuXHJcblx0c3RhdGljIGFzeW5jIHJlc29sdmUoYUV4cHJlc3Npb24sIGFDb250ZXh0LCBhRGVmYXVsdCwgYVRpbWVvdXQpIHtcclxuXHRcdGNvbnN0IHJlc29sdmVyID0gbmV3IEV4cHJlc3Npb25SZXNvbHZlcih7IGNvbnRleHQ6IGFDb250ZXh0IH0pO1xyXG5cdFx0Y29uc3QgZGVmYXVsdFZhbHVlID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgPyB0b0RlZmF1bHRWYWx1ZShhRGVmYXVsdCkgOiBERUZBVUxUX05PVF9ERUZJTkVEO1xyXG5cdFx0aWYgKHR5cGVvZiBhVGltZW91dCA9PT0gXCJudW1iZXJcIiAmJiBhVGltZW91dCA+IDApXHJcblx0XHRcdHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcclxuXHRcdFx0XHRzZXRUaW1lb3V0KCgpID0+IHtcclxuXHRcdFx0XHRcdHJlc29sdmUocmVzb2x2ZXIucmVzb2x2ZShhRXhwcmVzc2lvbiwgZGVmYXVsdFZhbHVlKSk7XHJcblx0XHRcdFx0fSwgYVRpbWVvdXQpO1xyXG5cdFx0XHR9KTtcclxuXHJcblx0XHRyZXR1cm4gcmVzb2x2ZXIucmVzb2x2ZShhRXhwcmVzc2lvbiwgZGVmYXVsdFZhbHVlKVxyXG5cdH1cclxuXHJcblx0c3RhdGljIGFzeW5jIHJlc29sdmVUZXh0KGFUZXh0LCBhQ29udGV4dCwgYURlZmF1bHQsIGFUaW1lb3V0KSB7XHJcblx0XHRjb25zdCByZXNvbHZlciA9IG5ldyBFeHByZXNzaW9uUmVzb2x2ZXIoeyBjb250ZXh0OiBhQ29udGV4dCB9KTtcclxuXHRcdGNvbnN0IGRlZmF1bHRWYWx1ZSA9IGFyZ3VtZW50cy5sZW5ndGggPiAyID8gdG9EZWZhdWx0VmFsdWUoYURlZmF1bHQpIDogREVGQVVMVF9OT1RfREVGSU5FRDtcclxuXHRcdGlmICh0eXBlb2YgYVRpbWVvdXQgPT09IFwibnVtYmVyXCIgJiYgYVRpbWVvdXQgPiAwKVxyXG5cdFx0XHRyZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XHJcblx0XHRcdFx0c2V0VGltZW91dCgoKSA9PiB7XHJcblx0XHRcdFx0XHRyZXNvbHZlKHJlc29sdmVyLnJlc29sdmVUZXh0KGFUZXh0LCBkZWZhdWx0VmFsdWUpKTtcclxuXHRcdFx0XHR9LCBhVGltZW91dCk7XHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdHJldHVybiByZXNvbHZlci5yZXNvbHZlVGV4dChhVGV4dCwgZGVmYXVsdFZhbHVlKTtcclxuXHR9XHJcblx0XHJcblx0c3RhdGljIGJ1aWxkU2VjdXJlKHtjb250ZXh0LCBwcm9wRmlsdGVyLCBvcHRpb249e2RlZXA6dHJ1ZX0sIG5hbWUsIHBhcmVudH0pe1xyXG5cdFx0Y29udGV4dCA9IE9iamVjdFV0aWxzLmZpbHRlcih7ZGF0YTogY29udGV4dCwgcHJvcEZpbHRlciwgb3B0aW9ufSk7XHJcblx0XHRyZXR1cm4gbmV3IEV4cHJlc3Npb25SZXNvbHZlcih7Y29udGV4dCwgbmFtZSwgcGFyZW50fSk7XHJcblx0fVxyXG59OyIsImltcG9ydCBVdGlscyBmcm9tIFwiLi91dGlscy9VdGlsc1wiO1xyXG5cclxuVXRpbHMuZ2xvYmFsLmRlZmF1bHRqcyA9IFV0aWxzLmdsb2JhbC5kZWZhdWx0anMgfHwge307XHJcblV0aWxzLmdsb2JhbC5kZWZhdWx0anMuZXh0ZG9tID0gVXRpbHMuZ2xvYmFsLmRlZmF1bHRqcy5leHRkb20gfHwge1xyXG5cdFZFUlNJT04gOiBcIiR7dmVyc2lvbn1cIixcclxuXHR1dGlscyA6IHtcclxuXHRcdFV0aWxzOiBVdGlsc1xyXG5cdH1cclxufTtcclxuXHJcblV0aWxzLmdsb2JhbC5maW5kID0gZnVuY3Rpb24oKSB7XHJcblx0cmV0dXJuIGRvY3VtZW50LmZpbmQuYXBwbHkoZG9jdW1lbnQsIGFyZ3VtZW50cyk7XHJcbn07XHJcblxyXG5VdGlscy5nbG9iYWwucmVhZHkgPSBmdW5jdGlvbigpIHtcclxuXHRyZXR1cm4gZG9jdW1lbnQucmVhZHkuYXBwbHkoZG9jdW1lbnQsIGFyZ3VtZW50cyk7XHJcbn07XHJcblxyXG5VdGlscy5nbG9iYWwuY3JlYXRlID0gZnVuY3Rpb24oYUNvbnRlbnQsIGFzVGVtcGxhdGUpIHtcclxuXHRpZiAodHlwZW9mIGFyZ3VtZW50c1swXSAhPT0gXCJzdHJpbmdcIilcclxuXHRcdHRocm93IG5ldyBFcnJvcihcIlRoZSBmaXJzdCBhcmd1bWVudCBtdXN0IGJlIGEgc3RyaW5nIVwiKTtcclxuXHRcclxuXHRjb25zdCB0ZW1wbGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZW1wbGF0ZVwiKTtcclxuXHR0ZW1wbGF0ZS5pbm5lckhUTUwgPSBhQ29udGVudDtcclxuXHRpZihhc1RlbXBsYXRlKVxyXG5cdFx0cmV0dXJuIHRlbXBsYXRlO1xyXG5cdFxyXG5cdHJldHVybiBkb2N1bWVudC5pbXBvcnROb2RlKHRlbXBsYXRlLmNvbnRlbnQsIHRydWUpLmNoaWxkTm9kZXM7XHJcbn07XHJcblxyXG5VdGlscy5nbG9iYWwuc2NyaXB0ID0gZnVuY3Rpb24oYUZpbGUsIGFUYXJnZXQpIHtcclxuXHRpZihhRmlsZSBpbnN0YW5jZW9mIEFycmF5KVxyXG5cdFx0cmV0dXJuIFByb21pc2UuYWxsKGFGaWxlLm1hcChmaWxlID0+IFV0aWxzLmdsb2JhbC5zY3JpcHQoZmlsZSwgYVRhcmdldCkpKTtcclxuXHRcclxuXHRpZih0eXBlb2YgYUZpbGUgPT09IFwic3RyaW5nXCIpXHRcclxuXHRcdHJldHVybiBuZXcgUHJvbWlzZSgocixlKSA9PiB7XHJcblx0XHRcdGNvbnN0IHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIik7XHJcblx0XHRcdHNjcmlwdC5hc3luYyA9IHRydWU7XHJcblx0XHRcdHNjcmlwdC5vbmxvYWQgPSBmdW5jdGlvbigpe3IoKX07XHJcblx0XHRcdHNjcmlwdC5vbmVycm9yID0gZnVuY3Rpb24oKXt0aHJvdyBuZXcgRXJyb3IoXCJsb2FkIGVycm9yIVwiKX07XHJcblx0XHRcdCFhVGFyZ2V0ID8gZG9jdW1lbnQuYm9keS5hcHBlbmQoc2NyaXB0KSA6IGFUYXJnZXQuYXBwZW5kKHNjcmlwdCk7XHJcblx0XHRcdHNjcmlwdC5zcmMgPSBhRmlsZTtcclxuXHRcdH0pO1xyXG5cdGVsc2VcclxuXHRcdHJldHVybiBQcm9taXNlLnJlamVjdChcIkZpcnN0IHBhcmFtZXRlciBtdXN0IGJlIGFuIGFycmF5IG9mIHN0cmluZ3Mgb3IgYSBzdHJpbmchXCIpO1xyXG59OyIsImltcG9ydCBleHRlbmRQcm90b3R5cGUgZnJvbSBcIi4uL3V0aWxzL0V4dGVuZFByb3RvdHlwZVwiO1xyXG5pbXBvcnQgUXVlcnlTdXBwb3J0IGZyb20gXCIuL2V4dGVudGlvbnMvUXVlcnlTdXBwb3J0XCI7XHJcbmltcG9ydCBSZWFkeUV2ZW50U3VwcG9ydCBmcm9tIFwiLi9leHRlbnRpb25zL1JlYWR5RXZlbnRTdXBwb3J0XCI7XHJcblxyXG5leHRlbmRQcm90b3R5cGUoRG9jdW1lbnQsIFF1ZXJ5U3VwcG9ydCwgUmVhZHlFdmVudFN1cHBvcnQpO1xyXG5cclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4gZG9jdW1lbnQudHJpZ2dlcihcInJlYWR5XCIpKTtcclxuXHJcblxyXG5cclxuIiwiaW1wb3J0IGV4dGVuZFByb3RvdHlwZSBmcm9tIFwiLi4vdXRpbHMvRXh0ZW5kUHJvdG90eXBlXCI7XHJcbmltcG9ydCBRdWVyeVN1cHBvcnQgZnJvbSBcIi4vZXh0ZW50aW9ucy9RdWVyeVN1cHBvcnRcIjtcclxuaW1wb3J0IE1hbmlwdWxhdGlvblN1cHBvcnQgZnJvbSBcIi4vZXh0ZW50aW9ucy9NYW5pcHVsYXRpb25TdXBwb3J0XCI7XHJcblxyXG5leHRlbmRQcm90b3R5cGUoRG9jdW1lbnRGcmFnbWVudCwgUXVlcnlTdXBwb3J0LCBNYW5pcHVsYXRpb25TdXBwb3J0KTtcclxuXHJcblxyXG5cclxuXHJcbiIsImltcG9ydCBleHRlbmRQcm90b3R5cGUgZnJvbSBcIi4uL3V0aWxzL0V4dGVuZFByb3RvdHlwZVwiO1xyXG5pbXBvcnQgUXVlcnlTdXBwb3J0IGZyb20gXCIuL2V4dGVudGlvbnMvUXVlcnlTdXBwb3J0XCI7XHJcbmltcG9ydCBBdHRyaWJ1dGVTdXBwb3J0IGZyb20gXCIuL2V4dGVudGlvbnMvQXR0cmlidXRlU3VwcG9ydFwiO1xyXG5pbXBvcnQgTWFuaXB1bGF0aW9uU3VwcG9ydCBmcm9tIFwiLi9leHRlbnRpb25zL01hbmlwdWxhdGlvblN1cHBvcnRcIjtcclxuXHJcbmV4dGVuZFByb3RvdHlwZShFbGVtZW50LFF1ZXJ5U3VwcG9ydCwgQXR0cmlidXRlU3VwcG9ydCwgTWFuaXB1bGF0aW9uU3VwcG9ydCk7IiwiaW1wb3J0IGV4dGVuZFByb3RvdHlwZSBmcm9tIFwiLi4vdXRpbHMvRXh0ZW5kUHJvdG90eXBlXCI7XG5pbXBvcnQgRXZlbnRTdXBwb3J0IGZyb20gXCIuL2V4dGVudGlvbnMvRXZlbnRTdXBwb3J0XCI7XG5cbmV4dGVuZFByb3RvdHlwZShFdmVudFRhcmdldCwgRXZlbnRTdXBwb3J0KTsiLCJpbXBvcnQgZXh0ZW5kUHJvdG90eXBlIGZyb20gXCIuLi91dGlscy9FeHRlbmRQcm90b3R5cGVcIjtcclxuaW1wb3J0IEh0bWxDbGFzc1N1cHBvcnQgZnJvbSBcIi4vZXh0ZW50aW9ucy9IdG1sQ2xhc3NTdXBwb3J0XCI7XHJcbmltcG9ydCBTaG93SGlkZVN1cHBvcnQgZnJvbSBcIi4vZXh0ZW50aW9ucy9TaG93SGlkZVN1cHBvcnRcIjtcclxuXHJcblxyXG5leHRlbmRQcm90b3R5cGUoSFRNTEVsZW1lbnQsIEh0bWxDbGFzc1N1cHBvcnQsIFNob3dIaWRlU3VwcG9ydCk7IiwiaW1wb3J0IGV4dGVuZFByb3RvdHlwZSBmcm9tIFwiLi4vdXRpbHMvRXh0ZW5kUHJvdG90eXBlXCI7XHJcbmltcG9ydCBWYWx1ZVN1cHBvcnQgZnJvbSBcIi4vZXh0ZW50aW9ucy9WYWx1ZVN1cHBvcnRcIjtcclxuXHJcblxyXG5leHRlbmRQcm90b3R5cGUoSFRNTElucHV0RWxlbWVudCxWYWx1ZVN1cHBvcnQpOyIsImltcG9ydCBleHRlbmRQcm90b3R5cGUgZnJvbSBcIi4uL3V0aWxzL0V4dGVuZFByb3RvdHlwZVwiO1xyXG5pbXBvcnQgVmFsdWVTdXBwb3J0IGZyb20gXCIuL2V4dGVudGlvbnMvVmFsdWVTdXBwb3J0XCI7XHJcblxyXG5cclxuZXh0ZW5kUHJvdG90eXBlKEhUTUxTZWxlY3RFbGVtZW50LFZhbHVlU3VwcG9ydCk7IiwiaW1wb3J0IGV4dGVuZFByb3RvdHlwZSBmcm9tIFwiLi4vdXRpbHMvRXh0ZW5kUHJvdG90eXBlXCI7XHJcbmltcG9ydCBFeHRlbmRlciBmcm9tIFwiLi4vdXRpbHMvRXh0ZW5kZXJcIjtcclxuXHJcblxyXG5leHRlbmRQcm90b3R5cGUoSFRNTFRleHRBcmVhRWxlbWVudCxFeHRlbmRlcihcIlZhbHVlU3VwcG9ydFwiLCBQcm90b3R5cGUgPT4ge1x0XHJcblx0UHJvdG90eXBlLnZhbCA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0aWYoYXJndW1lbnRzLmxlbmd0aCA9PSAwKVxyXG5cdFx0XHRyZXR1cm4gdGhpcy52YWx1ZTtcclxuXHRcdGVsc2VcclxuXHRcdFx0dGhpcy52YWx1ZSA9IGFyZ3VtZW50c1swXVxyXG5cdFx0XHRcclxuXHRcdHJldHVybiB0aGlzO1xyXG5cdH07XHRcclxufSkpOyIsImltcG9ydCBleHRlbmRQcm90b3R5cGUgZnJvbSBcIi4uL3V0aWxzL0V4dGVuZFByb3RvdHlwZVwiO1xyXG5pbXBvcnQgRGVsZWdhdGVyQnVpbGRlciBmcm9tIFwiLi4vdXRpbHMvRGVsZWdhdGVyQnVpbGRlclwiO1xyXG5pbXBvcnQgTGlzdFN1cHBvcnQgZnJvbSBcIi4vZXh0ZW50aW9ucy9MaXN0U3VwcG9ydFwiO1xyXG5cclxuZXh0ZW5kUHJvdG90eXBlKEhUTUxDb2xsZWN0aW9uLCBMaXN0U3VwcG9ydCk7XHJcblxyXG5IVE1MQ29sbGVjdGlvbi5wcm90b3R5cGUuYXBwbHlUbyA9IGZ1bmN0aW9uKCl7XHJcblx0Y29uc3QgYXJncyA9IEFycmF5LmZyb20oYXJndW1lbnRzKTtcclxuXHRjb25zdCBjYWxsaW5nID0gYXJncy5zaGlmdCgpO1xyXG5cdGNvbnN0IGlzRnVuY3Rpb24gPSB0eXBlb2YgY2FsbGluZyA9PT0gXCJmdW5jdGlvblwiO1xyXG5cdGNvbnN0IHJlc3VsdHMgPSBbXTtcclxuXHRmb3IobGV0IGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKyl7XHJcblx0XHRjb25zdCBub2RlID0gdGhpc1tpXTtcclxuXHRcdGxldFx0cmVzdWx0O1xyXG5cdFx0aWYoaXNGdW5jdGlvbilcclxuXHRcdFx0cmVzdWx0ID0gY2FsbGluZy5hcHBseShbbm9kZV0uY29uY2F0KGFyZ3MpKTtcclxuXHRcdGVsc2UgaWYodHlwZW9mIG5vZGVbY2FsbGluZ10gPT09IFwiZnVuY3Rpb25cIilcclxuXHRcdFx0cmVzdWx0ID0gbm9kZVtjYWxsaW5nXS5hcHBseShub2RlLCBhcmdzKTtcclxuXHRcdFxyXG5cdFx0aWYocmVzdWx0KVxyXG5cdFx0XHRyZXN1bHRzLnB1c2gocmVzdWx0KTtcclxuXHR9XHJcblx0XHJcblx0cmV0dXJuIHJlc3VsdHM7XHJcbn07XHJcblxyXG5IVE1MQ29sbGVjdGlvbi5wcm90b3R5cGUudmFsID0gZnVuY3Rpb24oKSB7XHJcblx0aWYoYXJndW1lbnRzLmxlbmd0aCA9PSAwKXtcclxuXHRcdGlmKHRoaXMubGVuZ3RoID4gMCl7XHJcblx0XHRcdGNvbnN0IHJlc3VsdCA9IG5ldyBNYXAoKTtcclxuXHRcdFx0dGhpcy5mb3JFYWNoKG5vZGUgPT4ge1xyXG5cdFx0XHRcdGlmKHR5cGVvZiBub2RlLnZhbCA9PT0gXCJmdW5jdGlvblwiKXtcclxuXHRcdFx0XHRcdGNvbnN0IHZhbHVlID0gbm9kZS52YWwoKTtcclxuXHRcdFx0XHRcdGlmKHZhbHVlKVxyXG5cdFx0XHRcdFx0XHRyZXN1bHQuc2V0KChub2RlLm5hbWUgfHwgbm9kZS5pZCB8fCBub2RlLnNlbGVjdG9yKCkpLCBub2RlLnZhbCgpKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pO1x0XHJcblx0XHRcdHJldHVybiByZXN1bHQ7XHJcblx0XHR9XHJcblx0fVxyXG5cdGVsc2VcclxuXHRcdEhUTUxDb2xsZWN0aW9uLnByb3RvdHlwZS5hcHBseVRvLmFwcGx5KHRoaXMsIFtcInZhbFwiXS5jb25jYXQoQXJyYXkuZnJvbShhcmd1bWVudHMpKSk7XHJcbn07XHJcblxyXG5IVE1MQ29sbGVjdGlvbi5mcm9tID0gZnVuY3Rpb24oKXtcclxuXHRjb25zdCBhcmdzID0gQXJyYXkuZnJvbShhcmd1bWVudHMpO1xyXG5cdGNvbnN0IGRhdGEgPSB7fTtcclxuXHRsZXQgY291bnRlciA9IDA7XHJcblx0XHJcblx0d2hpbGUoYXJncy5sZW5ndGggPiAwKXtcclxuXHRcdGNvbnN0IGFyZyA9IGFyZ3Muc2hpZnQoKTtcclxuXHRcdGlmKHR5cGVvZiBhcmcgIT09IFwidW5kZWZpbmVkXCIgJiYgYXJnICE9IG51bGwpe1xyXG5cdFx0XHRpZihhcmcgaW5zdGFuY2VvZiBIVE1MRWxlbWVudClcclxuXHRcdFx0XHRkYXRhW2NvdW50ZXIrK10gPSB7dmFsdWU6IGFyZywgZW51bWVyYWJsZTogdHJ1ZX07XHJcblx0XHRcdGVsc2UgaWYoYXJnIGluc3RhbmNlb2YgSFRNTENvbGxlY3Rpb24gfHwgYXJnIGluc3RhbmNlb2YgTm9kZUxpc3QgfHwgYXJnIGluc3RhbmNlb2YgQXJyYXkpe1xyXG5cdFx0XHRcdGZvcihsZXQgaSA9IDA7IGkgPCBhcmcubGVuZ3RoOyBpKyspe1xyXG5cdFx0XHRcdFx0aWYoYXJnW2ldICYmIGFyZ1tpXSBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KXtcclxuXHRcdFx0XHRcdFx0ZGF0YVtjb3VudGVyKytdID0ge3ZhbHVlOiBhcmdbaV0sIGVudW1lcmFibGU6IHRydWV9O1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHRcclxuXHRkYXRhLmxlbmd0aCA9IHt2YWx1ZTogY291bnRlcn07XHJcblx0cmV0dXJuICBPYmplY3QuY3JlYXRlKEhUTUxDb2xsZWN0aW9uLnByb3RvdHlwZSwgZGF0YSk7XHJcbn07XHJcblxyXG5cclxuRGVsZWdhdGVyQnVpbGRlcihmdW5jdGlvbihhRnVuY3Rpb25OYW1lLCB0aGVBcmd1bWVudHMpIHtcclxuXHRsZXQgcmVzdWx0cyA9IFtdO1x0XHJcblx0dGhpcy5mb3JFYWNoKG5vZGUgPT4ge1xyXG5cdFx0aWYobm9kZSAmJiB0eXBlb2Ygbm9kZVthRnVuY3Rpb25OYW1lXSA9PT0gXCJmdW5jdGlvblwiKXtcclxuXHRcdFx0bGV0IHJlc3VsdCA9IG5vZGVbYUZ1bmN0aW9uTmFtZV0uYXBwbHkobm9kZSwgdGhlQXJndW1lbnRzKTtcclxuXHRcdFx0aWYocmVzdWx0KXsgXHJcblx0XHRcdFx0aWYocmVzdWx0IGluc3RhbmNlb2YgSFRNTENvbGxlY3Rpb24pXHJcblx0XHRcdFx0XHRyZXN1bHRzID0gcmVzdWx0cy5jb25jYXQoQXJyYXkuZnJvbShyZXN1bHQpKTtcclxuXHRcdFx0XHRlbHNlXHJcblx0XHRcdFx0XHRyZXN1bHRzLnB1c2gocmVzdWx0KTtcclxuXHRcdFx0fVx0XHRcclxuXHRcdH1cclxuXHR9KTtcclxuXHRcclxuXHRpZihyZXN1bHRzLmxlbmd0aCA9PT0gMClcclxuXHRcdHJldHVybiB1bmRlZmluZWQ7XHJcblx0ZWxzZSBpZihyZXN1bHRzWzBdIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQgfHwgcmVzdWx0c1swXSBpbnN0YW5jZW9mIEhUTUxDb2xsZWN0aW9uKVxyXG5cdFx0cmV0dXJuIEhUTUxDb2xsZWN0aW9uLmZyb20uYXBwbHkobnVsbCwgcmVzdWx0cyk7XHJcblx0ZWxzZVxyXG5cdFx0cmV0dXJuIHJlc3VsdHM7XHJcbn0sSFRNTENvbGxlY3Rpb24ucHJvdG90eXBlLCBOb2RlLnByb3RvdHlwZSwgSFRNTEVsZW1lbnQucHJvdG90eXBlLCBIVE1MSW5wdXRFbGVtZW50LnByb3RvdHlwZSwgRWxlbWVudC5wcm90b3R5cGUsIEV2ZW50VGFyZ2V0LnByb3RvdHlwZSk7XHJcbiIsImltcG9ydCBleHRlbmRQcm90b3R5cGUgZnJvbSBcIi4uL3V0aWxzL0V4dGVuZFByb3RvdHlwZVwiO1xyXG5pbXBvcnQgRGF0YVN1cHBvcnQgZnJvbSBcIi4vZXh0ZW50aW9ucy9EYXRhU3VwcG9ydFwiO1xyXG5pbXBvcnQgTWFuaXB1bGF0aW9uU3VwcG9ydCBmcm9tIFwiLi9leHRlbnRpb25zL01hbmlwdWxhdGlvblN1cHBvcnRcIjtcclxuXHJcbmV4dGVuZFByb3RvdHlwZShOb2RlLERhdGFTdXBwb3J0LE1hbmlwdWxhdGlvblN1cHBvcnQpOyIsImltcG9ydCBleHRlbmRQcm90b3R5cGUgZnJvbSBcIi4uL3V0aWxzL0V4dGVuZFByb3RvdHlwZVwiO1xyXG5pbXBvcnQgRGVsZWdhdGVyQnVpbGRlciBmcm9tIFwiLi4vdXRpbHMvRGVsZWdhdGVyQnVpbGRlclwiO1xyXG5pbXBvcnQgTGlzdFN1cHBvcnQgZnJvbSBcIi4vZXh0ZW50aW9ucy9MaXN0U3VwcG9ydFwiO1xyXG5cclxuZXh0ZW5kUHJvdG90eXBlKE5vZGVMaXN0LCBMaXN0U3VwcG9ydCk7XHJcblxyXG5Ob2RlTGlzdC5wcm90b3R5cGUuYXBwbHlUbyA9IGZ1bmN0aW9uKCl7XHJcblx0Y29uc3QgYXJncyA9IEFycmF5LmZyb20oYXJndW1lbnRzKTtcclxuXHRjb25zdCBjYWxsaW5nID0gYXJncy5zaGlmdCgpO1xyXG5cdGNvbnN0IGlzRnVuY3Rpb24gPSB0eXBlb2YgY2FsbGluZyA9PT0gXCJmdW5jdGlvblwiO1xyXG5cdGNvbnN0IHJlc3VsdHMgPSBbXTtcclxuXHRmb3IobGV0IGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKyl7XHJcblx0XHRjb25zdCBub2RlID0gdGhpc1tpXTtcclxuXHRcdGxldFx0cmVzdWx0O1xyXG5cdFx0aWYoaXNGdW5jdGlvbilcclxuXHRcdFx0cmVzdWx0ID0gY2FsbGluZy5hcHBseShbbm9kZV0uY29uY2F0KGFyZ3MpKTtcclxuXHRcdGVsc2UgaWYodHlwZW9mIG5vZGVbY2FsbGluZ10gPT09IFwiZnVuY3Rpb25cIilcclxuXHRcdFx0cmVzdWx0ID0gbm9kZVtjYWxsaW5nXS5hcHBseShub2RlLCBhcmdzKTtcclxuXHRcdFxyXG5cdFx0aWYocmVzdWx0KVxyXG5cdFx0XHRyZXN1bHRzLnB1c2gocmVzdWx0KTtcclxuXHR9XHJcblx0XHJcblx0cmV0dXJuIHJlc3VsdHM7XHJcbn07XHJcblxyXG5Ob2RlTGlzdC5wcm90b3R5cGUudmFsID0gZnVuY3Rpb24oKSB7XHJcblx0aWYoYXJndW1lbnRzLmxlbmd0aCA9PSAwKXtcclxuXHRcdGlmKHRoaXMubGVuZ3RoID4gMCl7XHJcblx0XHRcdGNvbnN0IHJlc3VsdCA9IG5ldyBNYXAoKTtcclxuXHRcdFx0dGhpcy5mb3JFYWNoKG5vZGUgPT4ge1xyXG5cdFx0XHRcdGlmKHR5cGVvZiBub2RlLnZhbCA9PT0gXCJmdW5jdGlvblwiKXtcclxuXHRcdFx0XHRcdGNvbnN0IHZhbHVlID0gbm9kZS52YWwoKTtcclxuXHRcdFx0XHRcdGlmKHZhbHVlKVxyXG5cdFx0XHRcdFx0XHRyZXN1bHQuc2V0KChub2RlLm5hbWUgfHwgbm9kZS5pZCB8fCBub2RlLnNlbGVjdG9yKCkpLCBub2RlLnZhbCgpKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pO1x0XHJcblx0XHRcdHJldHVybiByZXN1bHQ7XHJcblx0XHR9XHJcblx0fVxyXG5cdGVsc2VcclxuXHRcdE5vZGVMaXN0LnByb3RvdHlwZS5hcHBseVRvLmFwcGx5KHRoaXMsIFtcInZhbFwiXS5jb25jYXQoQXJyYXkuZnJvbShhcmd1bWVudHMpKSk7XHJcbn07XHJcblxyXG5Ob2RlTGlzdC5mcm9tID0gZnVuY3Rpb24oKXtcclxuXHRjb25zdCBhcmdzID0gQXJyYXkuZnJvbShhcmd1bWVudHMpO1xyXG5cdGNvbnN0IGRhdGEgPSB7fTtcclxuXHRsZXQgY291bnRlciA9IDA7XHJcblx0XHJcblx0d2hpbGUoYXJncy5sZW5ndGggPiAwKXtcclxuXHRcdGNvbnN0IGFyZyA9IGFyZ3Muc2hpZnQoKTtcclxuXHRcdGlmKHR5cGVvZiBhcmcgIT09IFwidW5kZWZpbmVkXCIgJiYgYXJnICE9IG51bGwpe1xyXG5cdFx0XHRpZihhcmcgaW5zdGFuY2VvZiBOb2RlKVxyXG5cdFx0XHRcdGRhdGFbY291bnRlcisrXSA9IHt2YWx1ZTogYXJnLCBlbnVtZXJhYmxlOiB0cnVlfTtcclxuXHRcdFx0ZWxzZSBpZihhcmcgaW5zdGFuY2VvZiBOb2RlTGlzdCB8fCBhcmcgaW5zdGFuY2VvZiBIVE1MQ29sbGVjdGlvbiB8fCBhcmcgaW5zdGFuY2VvZiBBcnJheSl7XHJcblx0XHRcdFx0Zm9yKGxldCBpID0gMDsgaSA8IGFyZy5sZW5ndGg7IGkrKyl7XHJcblx0XHRcdFx0XHRpZihhcmdbaV0gJiYgYXJnW2ldIGluc3RhbmNlb2YgTm9kZSl7XHJcblx0XHRcdFx0XHRcdGRhdGFbY291bnRlcisrXSA9IHt2YWx1ZTogYXJnW2ldLCBlbnVtZXJhYmxlOiB0cnVlfTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcblx0XHJcblx0ZGF0YS5sZW5ndGggPSB7dmFsdWU6IGNvdW50ZXJ9O1xyXG5cdHJldHVybiAgT2JqZWN0LmNyZWF0ZShOb2RlTGlzdC5wcm90b3R5cGUsIGRhdGEpO1xyXG59O1xyXG5cclxuXHJcbkRlbGVnYXRlckJ1aWxkZXIoZnVuY3Rpb24oYUZ1bmN0aW9uTmFtZSwgdGhlQXJndW1lbnRzKSB7XHJcblx0bGV0IHJlc3VsdHMgPSBbXTtcdFxyXG5cdHRoaXMuZm9yRWFjaChub2RlID0+IHtcclxuXHRcdGlmKG5vZGUgJiYgdHlwZW9mIG5vZGVbYUZ1bmN0aW9uTmFtZV0gPT09IFwiZnVuY3Rpb25cIil7XHJcblx0XHRcdGNvbnN0IHJlc3VsdCA9IG5vZGVbYUZ1bmN0aW9uTmFtZV0uYXBwbHkobm9kZSwgdGhlQXJndW1lbnRzKTtcclxuXHRcdFx0aWYocmVzdWx0KXsgXHJcblx0XHRcdFx0aWYocmVzdWx0IGluc3RhbmNlb2YgTm9kZUxpc3QpXHJcblx0XHRcdFx0XHRyZXN1bHRzID0gcmVzdWx0cy5jb25jYXQoQXJyYXkuZnJvbShyZXN1bHQpKTtcclxuXHRcdFx0XHRlbHNlXHJcblx0XHRcdFx0XHRyZXN1bHRzLnB1c2gocmVzdWx0KTtcclxuXHRcdFx0fVx0XHRcclxuXHRcdH1cclxuXHR9KTtcclxuXHRcclxuXHRpZihyZXN1bHRzLmxlbmd0aCA9PT0gMClcclxuXHRcdHJldHVybiB1bmRlZmluZWQ7XHJcblx0ZWxzZSBpZihyZXN1bHRzWzBdIGluc3RhbmNlb2YgTm9kZSB8fCByZXN1bHRzWzBdIGluc3RhbmNlb2YgTm9kZUxpc3QpXHJcblx0XHRyZXR1cm4gTm9kZUxpc3QuZnJvbShyZXN1bHRzKTtcclxuXHRlbHNlXHJcblx0XHRyZXR1cm4gcmVzdWx0cztcclxufSxOb2RlTGlzdC5wcm90b3R5cGUsIE5vZGUucHJvdG90eXBlLCBIVE1MRWxlbWVudC5wcm90b3R5cGUsIEhUTUxJbnB1dEVsZW1lbnQucHJvdG90eXBlLCBFbGVtZW50LnByb3RvdHlwZSwgRXZlbnRUYXJnZXQucHJvdG90eXBlKTtcclxuIiwiaW1wb3J0IEV4dGVuZGVyIGZyb20gXCIuLi8uLi91dGlscy9FeHRlbmRlclwiO1xyXG5cclxuY29uc3Qgc3VwcG9ydCA9IEV4dGVuZGVyKFwiQXR0cmlidXRlU3VwcG9ydFwiLCBQcm90b3R5cGUgPT4ge1xyXG5cdFByb3RvdHlwZS5hdHRyID0gZnVuY3Rpb24oKSB7XHJcblx0XHRpZiAoYXJndW1lbnRzLmxlbmd0aCA9PSAwKVxyXG5cdFx0XHRyZXR1cm4gdGhpcy5oYXNBdHRyaWJ1dGVzKCkgPyAoKCkgPT4ge1xyXG5cdFx0XHRcdGNvbnN0IHJlc3VsdCA9IHt9O1xyXG5cdFx0XHRcdHRoaXMuZ2V0QXR0cmlidXRlTmFtZXMoKS5mb3JFYWNoKG5hbWUgPT4ge1xyXG5cdFx0XHRcdFx0cmVzdWx0W25hbWVdID0gdGhpcy5nZXRBdHRyaWJ1dGUobmFtZSk7XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdFx0cmV0dXJuIHJlc3VsdDtcclxuXHRcdFx0fSkoKSA6IHVuZGVmaW5lZDtcclxuXHRcdGVsc2UgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT0gMSlcclxuXHRcdFx0cmV0dXJuIHRoaXMuZ2V0QXR0cmlidXRlKGFyZ3VtZW50c1swXSk7XHJcblx0XHRlbHNlIGlmICh0eXBlb2YgYXJndW1lbnRzWzFdID09PSBcInVuZGVmaW5lZFwiIHx8IGFyZ3VtZW50c1sxXSA9PSBudWxsKVxyXG5cdFx0XHR0aGlzLnJlbW92ZUF0dHJpYnV0ZShhcmd1bWVudHNbMF0pO1xyXG5cdFx0ZWxzZVxyXG5cdFx0XHR0aGlzLnNldEF0dHJpYnV0ZShhcmd1bWVudHNbMF0sIGFyZ3VtZW50c1sxXSk7XHJcblx0XHRcclxuXHRcdHJldHVybiB0aGlzO1xyXG5cdH07XHJcbn0pO1xyXG5leHBvcnQgZGVmYXVsdCBzdXBwb3J0OyIsImltcG9ydCBFeHRlbmRlciBmcm9tIFwiLi4vLi4vdXRpbHMvRXh0ZW5kZXJcIjtcclxuY29uc3Qgc3VwcG9ydCA9IEV4dGVuZGVyKFwiRGF0YVN1cHBvcnRcIiwgUHJvdG90eXBlID0+IHtcclxuXHRQcm90b3R5cGUuZGF0YSA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0Y29uc3QgZGF0YSA9IHt9O1xyXG5cdFx0aWYgKHR5cGVvZiB0aGlzLmRhdGFzZXQgIT09IFwidW5kZWZpbmVkXCIpXHJcblx0XHRcdGZvciAobmFtZSBpbiB0aGlzLmRhdGFzZXQpXHJcblx0XHRcdFx0ZGF0YVtuYW1lXSA9IHRoaXMuZGF0YXNldFtuYW1lXTtcclxuXHJcblx0XHR0aGlzLmRhdGEgPSAoZnVuY3Rpb24oKSB7XHJcblx0XHRcdGlmIChhcmd1bWVudHMubGVuZ3RoID09IDApXHJcblx0XHRcdFx0cmV0dXJuIGRhdGE7XHJcblx0XHRcdGVsc2UgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT0gMSlcclxuXHRcdFx0XHRyZXR1cm4gZGF0YVthcmd1bWVudHNbMF1dO1xyXG5cdFx0XHRlbHNlIGlmICh0eXBlb2YgYXJndW1lbnRzWzFdID09PSBcInVuZGVmaW5lZFwiIHx8IGFyZ3VtZW50c1sxXSA9PSBudWxsKVxyXG5cdFx0XHRcdGRlbGV0ZSBkYXRhW2FyZ3VtZW50c1swXV07XHJcblx0XHRcdGVsc2VcclxuXHRcdFx0XHRkYXRhW2FyZ3VtZW50c1swXV0gPSBhcmd1bWVudHNbMV07XHJcblxyXG5cdFx0XHRyZXR1cm4gdGhpcztcclxuXHRcdH0pLmJpbmQodGhpcyk7XHJcblxyXG5cdFx0cmV0dXJuIHRoaXMuZGF0YS5hcHBseShudWxsLCBhcmd1bWVudHMpO1xyXG5cdH07XHJcbn0pO1xyXG5leHBvcnQgZGVmYXVsdCBzdXBwb3J0OyIsImltcG9ydCBFeHRlbmRlciBmcm9tIFwiLi4vLi4vdXRpbHMvRXh0ZW5kZXJcIjtcclxuXHJcbmNvbnN0IERFRkFVTFRfVElNRU9VVCA9IDEwMDtcclxuY29uc3Qgc3VwcG9ydCA9IEV4dGVuZGVyKFwiRXZlbnRTdXBwb3J0XCIsIChQcm90b3R5cGUpID0+IHtcclxuXHRjb25zdCBFVkVOVFNQTElURVIgPSAvKFxccyspfChcXHMqLFxccyopLztcclxuXHRjb25zdCBnZXRXcmFwcGVySGFuZGxlTWFwID0gKGVsZW1lbnQpID0+IHtcclxuXHRcdGlmICghZWxlbWVudC5fX3dyYXBwZXJoYW5kbGVtYXBfXykgZWxlbWVudC5fX3dyYXBwZXJoYW5kbGVtYXBfXyA9IG5ldyBNYXAoKTtcclxuXHJcblx0XHRyZXR1cm4gZWxlbWVudC5fX3dyYXBwZXJoYW5kbGVtYXBfXztcclxuXHR9O1xyXG5cclxuXHRjb25zdCBnZXRUcmlnZ2VyVGltZW91dHMgPSAoZWxlbWVudCkgPT4ge1xyXG5cdFx0aWYgKCFlbGVtZW50Ll9fX0VWRU5UVFJJR0dFUlRJTUVPVVRTX19fKSBlbGVtZW50Ll9fX0VWRU5UVFJJR0dFUlRJTUVPVVRTX19fID0ge307XHJcblxyXG5cdFx0cmV0dXJuIGVsZW1lbnQuX19fRVZFTlRUUklHR0VSVElNRU9VVFNfX187XHJcblx0fTtcclxuXHJcblx0Y29uc3QgcmVtb3ZlV3JhcHBlciA9IChlbGVtZW50LCBkYXRhLCBldmVudFR5cGVzKSA9PiB7XHJcblx0XHRjb25zdCB7IHdyYXBwZXIsIG9wdGlvbiwgZXZlbnRzLCBoYW5kbGUgfSA9IGRhdGE7XHJcblx0XHRjb25zdCBjYXB0dXJlID0gb3B0aW9uLmNhcHR1cmU7XHJcblx0XHRpZiAoZXZlbnRUeXBlcykge1xyXG5cdFx0XHRldmVudFR5cGVzID0gdHlwZW9mIGV2ZW50VHlwZXMgPT09IFwic3RyaW5nXCIgPyBldmVudFR5cGVzLnNwbGl0KEVWRU5UU1BMSVRFUikgOiBldmVudFR5cGVzO1xyXG5cdFx0XHRmb3IgKGxldCBldmVudCBvZiBldmVudFR5cGVzKSB7XHJcblx0XHRcdFx0Y29uc3QgaW5kZXggPSBldmVudHMuaW5kZXhPZihldmVudCk7XHJcblx0XHRcdFx0aWYgKGluZGV4ID49IDApIHtcclxuXHRcdFx0XHRcdGVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudCwgd3JhcHBlciwgY2FwdHVyZSk7XHJcblx0XHRcdFx0XHRldmVudHMuc3BsaWNlKGluZGV4LCAxKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0aWYgKGV2ZW50cy5sZW5ndGggPT0gMCkgZ2V0V3JhcHBlckhhbmRsZU1hcChlbGVtZW50KS5kZWxldGUoaGFuZGxlKTtcclxuXHRcdFx0fVxyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0Zm9yIChsZXQgZXZlbnQgb2YgZXZlbnRzKSB7XHJcblx0XHRcdFx0ZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50LCB3cmFwcGVyLCBjYXB0dXJlKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRnZXRXcmFwcGVySGFuZGxlTWFwKGVsZW1lbnQpLmRlbGV0ZShoYW5kbGUpO1xyXG5cdFx0fVxyXG5cdH07XHJcblxyXG5cdFByb3RvdHlwZS5vbiA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdGlmIChhcmd1bWVudHMubGVuZ3RoIDwgMikgdGhyb3cgbmV3IEVycm9yKFwiVG9vIGxlc3MgYXJndW1lbnRzIVwiKTtcclxuXHJcblx0XHRjb25zdCBhcmdzID0gQXJyYXkuZnJvbShhcmd1bWVudHMpO1xyXG5cdFx0bGV0IGV2ZW50cyA9IHR5cGVvZiBhcmdzWzBdID09PSBcInN0cmluZ1wiID8gYXJncy5zaGlmdCgpLnNwbGl0KEVWRU5UU1BMSVRFUikgOiBhcmdzLnNoaWZ0KCk7XHJcblx0XHRjb25zdCBmaWx0ZXIgPSB0eXBlb2YgYXJnc1swXSA9PT0gXCJzdHJpbmdcIiA/IGFyZ3Muc2hpZnQoKSA6IG51bGw7XHJcblx0XHRjb25zdCBoYW5kbGUgPSBhcmdzLnNoaWZ0KCk7XHJcblx0XHRjb25zdCBvcHRpb24gPSB0eXBlb2YgYXJnc1swXSA9PT0gXCJ1bmRlZmluZWRcIiA/IHsgY2FwdHVyZTogZmFsc2UsIG9uY2U6IGZhbHNlLCBwYXNzaXZlOiBmYWxzZSB9IDogdHlwZW9mIGFyZ3NbMF0gPT09IFwiYm9vbGVhblwiID8geyBjYXB0dXJlOiBhcmdzLnNoaWZ0KCksIG9uY2U6IGZhbHNlLCBwYXNzaXZlOiBmYWxzZSB9IDogYXJncy5zaGlmdCgpO1xyXG5cdFx0Y29uc3Qgd3JhcHBlciA9IGZ1bmN0aW9uIChldmVudCkge1xyXG5cdFx0XHRpZiAoZmlsdGVyKSB7XHJcblx0XHRcdFx0Y29uc3QgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0O1xyXG5cdFx0XHRcdGlmICh0eXBlb2YgdGFyZ2V0LmlzID09PSBcImZ1bmN0aW9uXCIgJiYgIXRhcmdldC5pcyhmaWx0ZXIpKSByZXR1cm47XHJcblx0XHRcdH1cclxuXHRcdFx0Y29uc3QgcmVzdWx0ID0gaGFuZGxlLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7XHJcblx0XHRcdGlmIChvcHRpb24ub25jZSkgcmVtb3ZlV3JhcHBlcih0aGlzLCB3cmFwcGVyKTtcclxuXHRcdFx0cmV0dXJuIHJlc3VsdDtcclxuXHRcdH07XHJcblxyXG5cdFx0Z2V0V3JhcHBlckhhbmRsZU1hcCh0aGlzKS5zZXQoaGFuZGxlLCB7IGhhbmRsZSwgd3JhcHBlcjogd3JhcHBlciwgZXZlbnRzLCBvcHRpb24gfSk7XHJcblxyXG5cdFx0Zm9yIChsZXQgZXZlbnQgb2YgZXZlbnRzKSB7XHJcblx0XHRcdHRoaXMuYWRkRXZlbnRMaXN0ZW5lcihldmVudCwgd3JhcHBlciwgb3B0aW9uKTtcclxuXHRcdH1cclxuXHJcblx0XHRyZXR1cm4gdGhpcztcclxuXHR9O1xyXG5cclxuXHRQcm90b3R5cGUucmVtb3ZlT24gPSBmdW5jdGlvbiAoaGFuZGxlLCBldmVudCwgY2FwdHVyZSkge1xyXG5cdFx0Y29uc3QgZGF0YSA9IGdldFdyYXBwZXJIYW5kbGVNYXAodGhpcykuZ2V0KGhhbmRsZSk7XHJcblx0XHRpZiAoZGF0YSkgcmVtb3ZlV3JhcHBlcih0aGlzLCBkYXRhLCBldmVudCk7XHJcblx0XHRlbHNlIHRoaXMucmVtb3ZlRXZlbnRMaXN0ZW5lcihoYW5kbGUsIGV2ZW50LCBjYXB0dXJlKTtcclxuXHJcblx0XHRyZXR1cm4gdGhpcztcclxuXHR9O1xyXG5cclxuXHRQcm90b3R5cGUudHJpZ2dlciA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdGNvbnN0IGFyZ3MgPSBBcnJheS5mcm9tKGFyZ3VtZW50cyk7XHJcblx0XHRjb25zdCB0aW1lb3V0ID0gdHlwZW9mIGFyZ3NbMF0gPT09IFwibnVtYmVyXCIgPyBhcmdzLnNoaWZ0KCkgOiAtMTtcclxuXHRcdGlmICh0aW1lb3V0ID49IDApIHtcclxuXHRcdFx0Y29uc3QgdHlwZSA9IGFyZ3NbMF07XHJcblx0XHRcdGNvbnN0IHRpbWVvdXRzID0gZ2V0VHJpZ2dlclRpbWVvdXRzKHRoaXMpO1xyXG5cdFx0XHRjb25zdCB0aW1lb3V0aWQgPSB0aW1lb3V0c1t0eXBlXTtcclxuXHRcdFx0aWYgKHRpbWVvdXRpZCkgY2xlYXJUaW1lb3V0KHRpbWVvdXRpZCk7XHJcblxyXG5cdFx0XHR0aW1lb3V0c1t0eXBlXSA9IHNldFRpbWVvdXQoKCkgPT4ge1xyXG5cdFx0XHRcdGRlbGV0ZSB0aW1lb3V0c1t0eXBlXTtcclxuXHRcdFx0XHR0aGlzLnRyaWdnZXIuYXBwbHkodGhpcywgYXJncyk7XHJcblx0XHRcdH0sIHRpbWVvdXQpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0Y29uc3QgdHlwZSA9IGFyZ3Muc2hpZnQoKTtcclxuXHRcdFx0Y29uc3QgZGVsZWdhdGUgPSBhcmdzWzBdIGluc3RhbmNlb2YgRXZlbnQgPyBhcmdzLnNoaWZ0KCkgOiBudWxsO1xyXG5cdFx0XHRjb25zdCBkYXRhID0gYXJncy5sZW5ndGggPj0gMSA/IChhcmdzLmxlbmd0aCA9PSAxID8gYXJncy5zaGlmdCgpIDogYXJncykgOiBkZWxlZ2F0ZTtcclxuXHRcdFx0Y29uc3QgZXZlbnQgPSBkYXRhID8gbmV3IEN1c3RvbUV2ZW50KHR5cGUsIHsgYnViYmxlczogdHJ1ZSwgY2FuY2VsYWJsZTogdHJ1ZSwgY29tcG9zZWQ6IHRydWUsIGRldGFpbDogZGF0YSB9KSA6IG5ldyBFdmVudCh0eXBlLCB7IGJ1YmJsZXM6IHRydWUsIGNhbmNlbGFibGU6IHRydWUsIGNvbXBvc2VkOiB0cnVlIH0pO1xyXG5cclxuXHRcdFx0aWYgKGRlbGVnYXRlKSBldmVudC5kZWxlZ2F0ZWRFdmVudCA9IGRlbGVnYXRlO1xyXG5cdFx0XHR0aGlzLmRpc3BhdGNoRXZlbnQoZXZlbnQpO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHRoaXM7XHJcblx0fTtcclxufSk7XHJcbmV4cG9ydCBkZWZhdWx0IHN1cHBvcnQ7XHJcbiIsImltcG9ydCBFeHRlbmRlciBmcm9tIFwiLi4vLi4vdXRpbHMvRXh0ZW5kZXJcIjtcclxuXHJcbmNvbnN0IHN1cHBvcnQgPSBFeHRlbmRlcihcIkh0bWxDbGFzc1N1cHBvcnRcIiwgUHJvdG90eXBlID0+IHtcdFxyXG5cdFByb3RvdHlwZS5hZGRDbGFzcyA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0aWYoYXJndW1lbnRzLmxlbmd0aCA9PSAxKVxyXG5cdFx0XHRhcmd1bWVudHNbMF0uc3BsaXQoL1xccysvKS5mb3JFYWNoKGNsYXp6ID0+IHRoaXMuY2xhc3NMaXN0LmFkZChjbGF6eikpO1xyXG5cdFx0ZWxzZSBpZihhcmd1bWVudHMubGVuZ3RoID4gMSlcclxuXHRcdFx0QXJyYXkucHJvdG90eXBlLmZvckVhY2guY2FsbChhcmd1bWVudHMsY2xhenogPT4gdGhpcy5jbGFzc0xpc3QuYWRkKGNsYXp6KSk7XHJcblx0XHRcclxuXHRcdHJldHVybiB0aGlzO1xyXG5cdH07XHJcblx0XHJcblx0UHJvdG90eXBlLnJlbW92ZUNsYXNzID0gZnVuY3Rpb24oKSB7XHJcblx0XHRpZihhcmd1bWVudHMubGVuZ3RoID09IDEpXHJcblx0XHRcdGFyZ3VtZW50c1swXS5zcGxpdCgvXFxzKy8pLmZvckVhY2goY2xhenogPT4gdGhpcy5jbGFzc0xpc3QucmVtb3ZlKGNsYXp6KSk7XHJcblx0XHRlbHNlIGlmKGFyZ3VtZW50cy5sZW5ndGggPiAxKVxyXG5cdFx0XHRBcnJheS5wcm90b3R5cGUuZm9yRWFjaC5jYWxsKGFyZ3VtZW50cywgY2xhenogPT4gdGhpcy5jbGFzc0xpc3QucmVtb3ZlKGNsYXp6KSk7XHJcblx0XHRcclxuXHRcdHJldHVybiB0aGlzO1x0XHRcclxuXHR9O1xyXG5cdFxyXG5cdFByb3RvdHlwZS50b2dnbGVDbGFzcyA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0aWYoYXJndW1lbnRzLmxlbmd0aCA9PSAxKVxyXG5cdFx0XHRhcmd1bWVudHNbMF0uc3BsaXQoL1xccysvKS5mb3JFYWNoKGNsYXp6ID0+IHRoaXMuY2xhc3NMaXN0LnRvZ2dsZShjbGF6eikpO1xyXG5cdFx0ZWxzZSBpZihhcmd1bWVudHMubGVuZ3RoID4gMSlcclxuXHRcdFx0QXJyYXkucHJvdG90eXBlLmZvckVhY2guY2FsbChhcmd1bWVudHMsIGNsYXp6ID0+IHRoaXMuY2xhc3NMaXN0LnRvZ2dsZShjbGF6eikpO1xyXG5cdFx0XHJcblx0XHRyZXR1cm4gdGhpcztcclxuXHR9O1xyXG59KTtcclxuZXhwb3J0IGRlZmF1bHQgc3VwcG9ydDsiLCJpbXBvcnQgRXh0ZW5kZXIgZnJvbSBcIi4uLy4uL3V0aWxzL0V4dGVuZGVyXCI7XHJcblxyXG5jb25zdCBzdXBwb3J0ID0gRXh0ZW5kZXIoXCJMaXN0U3VwcG9ydFwiLCBQcm90b3R5cGUgPT4ge1x0XHRcclxuXHRQcm90b3R5cGUuaW5kZXhPZiA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0Zm9yKGxldCBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspXHJcblx0XHRcdGlmKHRoaXNbaV0gPT0gYXJndW1lbnRzWzBdKVxyXG5cdFx0XHRcdHJldHVybiBpO1xyXG5cdFx0XHJcblx0XHRyZXR1cm4gLTE7XHJcblx0fTtcclxuXHJcblx0UHJvdG90eXBlLmZvckVhY2ggPSBmdW5jdGlvbigpe1xyXG5cdFx0cmV0dXJuIEFycmF5LnByb3RvdHlwZS5mb3JFYWNoLmFwcGx5KEFycmF5LmZyb20odGhpcyksIGFyZ3VtZW50cyk7XHJcblx0fTtcclxuXHRcclxuXHRQcm90b3R5cGUubWFwID0gZnVuY3Rpb24oKXtcclxuXHRcdHJldHVybiBBcnJheS5wcm90b3R5cGUubWFwLmFwcGx5KEFycmF5LmZyb20odGhpcyksIGFyZ3VtZW50cyk7XHJcblx0fTtcclxuXHRcclxuXHRQcm90b3R5cGUuZmlsdGVyID0gZnVuY3Rpb24oKXtcclxuXHRcdHJldHVybiBBcnJheS5wcm90b3R5cGUuZmlsdGVyLmFwcGx5KEFycmF5LmZyb20odGhpcyksIGFyZ3VtZW50cyk7XHJcblx0fTtcclxuXHJcblx0UHJvdG90eXBlLmZpcnN0ID0gZnVuY3Rpb24oKXtcclxuXHRcdGlmKHRoaXMubGVuZ3RoID4gMClcclxuXHRcdFx0cmV0dXJuIHRoaXNbMF07XHJcblx0fTtcdFxyXG5cdFxyXG5cdFByb3RvdHlwZS5sYXN0ID0gZnVuY3Rpb24oKXtcclxuXHRcdGlmKHRoaXMubGVuZ3RoID4gMClcclxuXHRcdFx0cmV0dXJuIHRoaXNbdGhpcy5sZW5ndGggLSAxXTtcclxuXHR9O1xyXG59KTtcclxuZXhwb3J0IGRlZmF1bHQgc3VwcG9ydDsiLCJpbXBvcnQgRXh0ZW5kZXIgZnJvbSBcIi4uLy4uL3V0aWxzL0V4dGVuZGVyXCI7XHJcbmltcG9ydCBVdGlscyBmcm9tIFwiLi4vLi4vdXRpbHMvVXRpbHNcIjtcclxuXHJcbmNvbnN0IHN1cHBvcnQgPSBFeHRlbmRlcihcIk1hbmlwdWxhdGlvblN1cHBvcnRcIiwgUHJvdG90eXBlID0+IHtcdFxyXG5cdFByb3RvdHlwZS5lbXB0eSA9IGZ1bmN0aW9uKCl7XHJcblx0XHRsZXQgbm9kZXMgPSB0aGlzLmNoaWxkTm9kZXNcclxuXHRcdHdoaWxlKG5vZGVzLmxlbmd0aCAhPSAwKVx0XHRcdFxyXG5cdFx0XHRub2Rlc1swXS5yZW1vdmUodHJ1ZSk7XHJcblx0XHRcclxuXHRcdHJldHVybiB0aGlzO1xyXG5cdH07XHJcblx0XHJcblx0UHJvdG90eXBlLmNvbnRlbnQgPSBmdW5jdGlvbigpe1xyXG5cdFx0cmV0dXJuIHRoaXMuY2hpbGROb2RlcztcclxuXHR9O1x0XHJcblx0XHJcblx0UHJvdG90eXBlLmh0bWwgPSBmdW5jdGlvbigpe1xyXG5cdFx0aWYoYXJndW1lbnRzLmxlbmd0aCA9PSAwKVx0XHRcdFxyXG5cdFx0XHRyZXR1cm4gdGhpcy5pbm5lckhUTUw7XHJcblx0XHRlbHNlIGlmKGFyZ3VtZW50cy5sZW5ndGggPT0gMSAmJiB0eXBlb2YgYXJndW1lbnRzWzBdID09PSBcImJvb2xlYW5cIilcclxuXHRcdFx0aWYoYXJndW1lbnRzWzBdKVxyXG5cdFx0XHRcdHJldHVybiB0aGlzLm91dGVySFRNTDtcclxuXHRcdFx0ZWxzZVxyXG5cdFx0XHRcdHJldHVybiB0aGlzLmlubmVySFRNTDtcclxuXHRcdGVsc2UgXHJcblx0XHRcdEFycmF5LmZyb20oYXJndW1lbnRzKS5mb3JFYWNoKGNvbnRlbnQgPT4ge1xyXG5cdFx0XHRcdHRoaXMuZW1wdHkoKTtcclxuXHRcdFx0XHRpZih0eXBlb2YgY29udGVudCA9PT0gXCJzdHJpbmdcIilcclxuXHRcdFx0XHRcdHRoaXMuYXBwZW5kKGNvbnRlbnQpO1xyXG5cdFx0XHRcdGVsc2UgaWYoY29udGVudCBpbnN0YW5jZW9mIE5vZGUgfHwgY29udGVudCBpbnN0YW5jZW9mIE5vZGVMaXN0IHx8IGNvbnRlbnQgaW5zdGFuY2VvZiBIVE1MQ29sbGVjdGlvbil7XHJcblx0XHRcdFx0XHR0aGlzLmFwcGVuZChjb250ZW50KTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pO1x0XHRcclxuXHRcdFx0XHJcblx0XHRyZXR1cm4gdGhpcztcclxuXHR9O1xyXG5cdFxyXG5cdGNvbnN0IGFwcGVuZCA9IGZ1bmN0aW9uKCl7XHJcblx0XHRjb25zdCBhcHBlbmQgPSBQcm90b3R5cGUuYXBwZW5kQ2hpbGQuYmluZCh0aGlzKTtcclxuXHRcdGZvcihsZXQgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspe1xyXG5cdFx0XHRsZXQgYXJnID0gYXJndW1lbnRzW2ldO1xyXG5cdFx0XHRpZihhcmcgaW5zdGFuY2VvZiBOb2RlKVxyXG5cdFx0XHRcdHRoaXMuYXBwZW5kQ2hpbGQoYXJnKTtcclxuXHRcdFx0ZWxzZSBpZih0eXBlb2YgYXJnID09PSBcInN0cmluZ1wiKVxyXG5cdFx0XHRcdGNyZWF0ZShhcmcpLmZvckVhY2goYXBwZW5kKTtcclxuXHRcdFx0ZWxzZSBpZih0eXBlb2YgYXJnLmZvckVhY2ggPT09IFwiZnVuY3Rpb25cIilcclxuXHRcdFx0XHRhcmcuZm9yRWFjaChhcHBlbmQpO1xyXG5cdFx0fVxyXG5cdH07XHRcclxuXHRQcm90b3R5cGUuYXBwZW5kID0gYXBwZW5kO1xyXG5cdFxyXG5cdGNvbnN0IHByZXBlbmQgPSBmdW5jdGlvbihhRmlyc3RFbGVtZW50LCBhRWxlbWVudCl7XHJcblx0XHR0aGlzLmluc2VydEJlZm9yZShhRWxlbWVudCwgYUZpcnN0RWxlbWVudCk7XHJcblx0fTtcclxuXHRQcm90b3R5cGUucHJlcGVuZCA9IGZ1bmN0aW9uKCl7XHJcblx0XHRpZih0aGlzLmNoaWxkTm9kZXMubGVuZ3RoID09IDApXHJcblx0XHRcdGFwcGVuZC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG5cdFx0ZWxzZSB7XHJcblx0XHRcdGNvbnN0IGZpcnN0ID0gdGhpcy5jaGlsZE5vZGVzLmZpcnN0KCk7XHJcblx0XHRcdGNvbnN0IGluc2VydCA9IHByZXBlbmQuYmluZCh0aGlzLCBmaXJzdCk7XHJcblx0XHRcdGZvcihsZXQgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspe1xyXG5cdFx0XHRcdGNvbnN0IGFyZyA9IGFyZ3VtZW50c1tpXTtcclxuXHRcdFx0XHRpZihhcmcgaW5zdGFuY2VvZiBOb2RlKVxyXG5cdFx0XHRcdFx0aW5zZXJ0KGFyZyk7XHJcblx0XHRcdFx0ZWxzZSBpZih0eXBlb2YgYXJnID09PSBcInN0cmluZ1wiKVxyXG5cdFx0XHRcdFx0YXJnLmZvckVhY2goaW5zZXJ0KTtcclxuXHRcdFx0XHRlbHNlIGlmKHR5cGVvZiBhcmcuZm9yRWFjaCA9PT0gXCJmdW5jdGlvblwiKVxyXG5cdFx0XHRcdFx0YXJnLmZvckVhY2goaW5zZXJ0KTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH07XHJcblx0XHJcblx0UHJvdG90eXBlLnJlcGxhY2UgPSBmdW5jdGlvbigpe1xyXG5cdFx0aWYoYXJndW1lbnRzLmxlbmd0aCA8IDEpXHJcblx0XHRcdHRocm93IG5ldyBFcnJvcihcIkluc3VmZmljaWVudCBhcmd1bWVudHMhIE9uZSBvciB0d28gbm9kZXMgcmVxdWlyZWQhXCIpO1xyXG5cdFx0XHJcblx0XHRjb25zdCBwYXJlbnQgPSBhcmd1bWVudHMubGVuZ3RoID09IDEgPyB0aGlzLnBhcmVudE5vZGUgOiB0aGlzO1xyXG5cdFx0Y29uc3Qgb2xkTm9kZSA9IGFyZ3VtZW50cy5sZW5ndGggPT0gMSA/IHRoaXMgOiBhcmd1bWVudHNbMF07XHJcblx0XHRjb25zdCBuZXdOb2RlID0gYXJndW1lbnRzLmxlbmd0aCA9PSAxID8gYXJndW1lbnRzWzBdIDogYXJndW1lbnRzWzFdO1xyXG5cdFx0XHJcblx0XHRpZihuZXdOb2RlIGluc3RhbmNlb2YgQXJyYXkgfHwgbmV3Tm9kZSBpbnN0YW5jZW9mIE5vZGVMaXN0IHx8IG5ld05vZGUgaW5zdGFuY2VvZiBIVE1MQ29sbGVjdGlvbil7XHJcblx0XHRcdG5ld05vZGUuZm9yRWFjaChhSXRlbSA9PiBwYXJlbnQuaW5zZXJ0QmVmb3JlKGFJdGVtLCBvbGROb2RlKSk7XHJcblx0XHRcdG9sZE5vZGUucmVtb3ZlKCk7XHJcblx0XHR9XHJcblx0XHRlbHNlXHJcblx0XHRcdHBhcmVudC5yZXBsYWNlQ2hpbGQobmV3Tm9kZSxvbGROb2RlKTtcclxuXHR9O1xyXG5cdFxyXG5cdFByb3RvdHlwZS5hZnRlciA9IGZ1bmN0aW9uKCl7XHJcblx0XHRpZih0aGlzLnBhcmVudE5vZGUgPT0gbnVsbClcclxuXHRcdFx0dGhyb3cgbmV3IEVycm9yKFwiQ2FuJ3QgaW5zZXJ0IG5vZGVzIGFmdGVyIHRoaXMgbm9kZSEgUGFyZW50IG5vZGUgbm90IGF2YWlsYWJsZSFcIik7XHJcblx0XHRcclxuXHRcdGNvbnN0IHBhcmVudCA9IHRoaXMucGFyZW50Tm9kZTtcclxuXHRcdGNvbnN0IG5leHQgPSB0aGlzLm5leHRTaWJsaW5nO1xyXG5cdFx0aWYobmV4dClcclxuXHRcdFx0UHJvdG90eXBlLmJlZm9yZS5hcHBseShuZXh0LCBhcmd1bWVudHMpO1xyXG5cdFx0ZWxzZVxyXG5cdFx0XHRQcm90b3R5cGUuYXBwZW5kLmFwcGx5KHBhcmVudCwgYXJndW1lbnRzKTtcclxuXHR9O1x0XHJcblx0XHJcblx0UHJvdG90eXBlLmJlZm9yZSA9IGZ1bmN0aW9uKCl7XHJcblx0XHRpZih0aGlzLnBhcmVudE5vZGUgPT0gbnVsbClcclxuXHRcdFx0dGhyb3cgbmV3IEVycm9yKFwiQ2FuJ3QgaW5zZXJ0IG5vZGVzIGFmdGVyIHRoaXMgbm9kZSEgUGFyZW50IG5vZGUgbm90IGF2YWlsYWJsZSFcIik7XHJcblx0XHRcclxuXHRcdGNvbnN0IHBhcmVudCA9IHRoaXMucGFyZW50Tm9kZTtcclxuXHRcdGNvbnN0IGluc2VydGVyID0gKG5vZGUpID0+IHtwYXJlbnQuaW5zZXJ0QmVmb3JlKG5vZGUsIHRoaXMpO31cclxuXHRcdGZvcihsZXQgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspe1xyXG5cdFx0XHRjb25zdCBhcmcgPSBhcmd1bWVudHNbaV07XHJcblx0XHRcdGlmKGFyZyBpbnN0YW5jZW9mIE5vZGUpXHJcblx0XHRcdFx0aW5zZXJ0ZXIoYXJnKTtcclxuXHRcdFx0ZWxzZSBpZih0eXBlb2YgYXJnID09PSBcInN0cmluZ1wiKVxyXG5cdFx0XHRcdGFyZy5mb3JFYWNoKGluc2VydGVyKTtcclxuXHRcdFx0ZWxzZSBpZih0eXBlb2YgYXJnLmZvckVhY2ggPT09IFwiZnVuY3Rpb25cIilcclxuXHRcdFx0XHRhcmcuZm9yRWFjaChpbnNlcnRlcik7XHJcblx0XHR9XHJcblx0fTtcdFxyXG59KTtcclxuZXhwb3J0IGRlZmF1bHQgc3VwcG9ydDsiLCJpbXBvcnQgRXh0ZW5kZXIgZnJvbSBcIi4uLy4uL3V0aWxzL0V4dGVuZGVyXCI7XHJcblxyXG5jb25zdCBwYXJlbnRTZWxlY3RvciA9IC86cGFyZW50KFxcKFxcXCIoW15cXCldKilcXFwiXFwpKT8vaTtcclxuY29uc3QgcXVlcnlFeGVjdXRlciA9IGZ1bmN0aW9uKGFFbGVtZW50LCBhU2VsZWN0b3Ipe1xyXG5cdGxldCBtYXRjaCA9IHBhcmVudFNlbGVjdG9yLmV4ZWMoYVNlbGVjdG9yKTtcclxuXHRpZihtYXRjaCl7XHJcblx0XHRsZXQgcmVzdWx0ID0gYUVsZW1lbnQ7XHJcblx0XHRpZihtYXRjaC5pbmRleCA+IDApe1xyXG5cdFx0XHRyZXN1bHQgPSBhRWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKGFTZWxlY3Rvci5zdWJzdHIoMCwgbWF0Y2guaW5kZXgpKTtcclxuXHRcdFx0aWYocmVzdWx0Lmxlbmd0aCA9PSAwKVxyXG5cdFx0XHRcdHJldHVybjtcclxuXHRcdH1cdFxyXG5cdFx0cmVzdWx0ID0gcmVzdWx0LnBhcmVudChtYXRjaFsyXSk7XHRcdFx0XHJcblx0XHRpZihyZXN1bHQpe1xyXG5cdFx0XHRsZXQgbmV4dFNlbGVjdG9yID0gYVNlbGVjdG9yLnN1YnN0cihtYXRjaC5pbmRleCArIG1hdGNoWzBdLmxlbmd0aCkudHJpbSgpO1xyXG5cdFx0XHRpZihuZXh0U2VsZWN0b3IubGVuZ3RoID4gMClcclxuXHRcdFx0XHRyZXN1bHQgPSByZXN1bHQuZmluZChuZXh0U2VsZWN0b3IpO1xyXG5cdFx0XHRcclxuXHRcdFx0cmV0dXJuIHJlc3VsdDtcclxuXHRcdH1cdFx0XHJcblx0fVxyXG5cdGVsc2VcclxuXHRcdHJldHVybiBhRWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKGFTZWxlY3Rvcik7XHJcbn07XHJcblxyXG5cclxuY29uc3Qgc3VwcG9ydCA9IEV4dGVuZGVyKFwiUXVlcnlTdXBwb3J0XCIsIFByb3RvdHlwZSA9PiB7XHRcclxuXHRQcm90b3R5cGUuZmluZCA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0bGV0IG5vZGVzID0gW107XHJcblx0XHRsZXQgYXJncyA9IEFycmF5LmZyb20oYXJndW1lbnRzKTtcclxuXHRcdGxldCBhcmcgPSBhcmdzLnNoaWZ0KCk7XHJcblx0XHR3aGlsZShhcmcpe1xyXG5cdFx0XHRpZih0eXBlb2YgYXJnID09PSBcInN0cmluZ1wiKXtcclxuXHRcdFx0XHRsZXQgcmVzdWx0ID0gcXVlcnlFeGVjdXRlcih0aGlzLCBhcmcpO1xyXG5cdFx0XHRcdGlmKHJlc3VsdClcclxuXHRcdFx0XHRcdG5vZGVzLnB1c2gocmVzdWx0KTtcclxuXHRcdFx0fVxyXG5cdFx0XHRcclxuXHRcdFx0YXJnID0gYXJncy5zaGlmdCgpO1xyXG5cdFx0fVxyXG5cdFx0XHJcblx0XHRsZXQgcmVzdWx0ID0gTm9kZUxpc3QuZnJvbS5hcHBseShudWxsLCBub2Rlcyk7XHJcblx0XHRyZXR1cm4gcmVzdWx0O1xyXG5cdH07XHJcblx0XHJcblx0UHJvdG90eXBlLmlzID0gZnVuY3Rpb24oKSB7XHJcblx0XHRpZih0aGlzIGluc3RhbmNlb2YgRG9jdW1lbnQgfHwgdGhpcyBpbnN0YW5jZW9mIERvY3VtZW50RnJhZ21lbnQpXHJcblx0XHRcdHJldHVybiBmYWxzZTtcdFx0XHJcblx0XHRlbHNlIGlmKGFyZ3VtZW50cy5sZW5ndGggPT0gMSl7XHJcblx0XHRcdGlmKHR5cGVvZiBhcmd1bWVudHNbMF0gPT09IFwic3RyaW5nXCIpXHJcblx0XHRcdFx0cmV0dXJuIHRoaXMubWF0Y2hlcyhhcmd1bWVudHNbMF0pO1xyXG5cdFx0XHRlbHNlIGlmKHR5cGVvZiBhcmd1bWVudHNbMF0ubGVuZ3RoID09PSBcIm51bWJlclwiKXtcclxuXHRcdFx0XHRsZXQgZmlsdGVyID0gYXJndW1lbnRzWzBdO1xyXG5cdFx0XHRcdGZvcihsZXQgaSA9IDA7IGkgPCBmaWx0ZXIubGVuZ3RoOyBpKyspXHJcblx0XHRcdFx0XHRpZih0aGlzLm1hdGNoZXMoZmlsdGVyW2ldKSlcclxuXHRcdFx0XHRcdFx0cmV0dXJuIHRydWU7XHJcblx0XHRcdH1cdFx0XHRcdFxyXG5cdFx0fVxyXG5cdFx0ZWxzZSBpZihhcmd1bWVudHMubGVuZ3RoID4gMSlcclxuXHRcdFx0cmV0dXJuIHRoaXMuaXMoQXJyYXkuZnJvbShhcmd1bWVudHMpKTtcclxuXHRcdFxyXG5cdFx0cmV0dXJuIGZhbHNlO1xyXG5cdH07XHRcclxuXHRcclxuXHRQcm90b3R5cGUucGFyZW50ID0gZnVuY3Rpb24oc2VsZWN0b3IsIGlnbm9yZVNoYWRvd1Jvb3QpIHtcdFx0XHJcblx0XHRpZighdGhpcy5wYXJlbnROb2RlKVxyXG5cdFx0XHRyZXR1cm4gbnVsbDtcdFx0XHJcblx0XHRpZ25vcmVTaGFkb3dSb290ID0gdHlwZW9mIHNlbGVjdG9yID09PSBcImJvb2xlYW5cIiA/IHNlbGVjdG9yIDogaWdub3JlU2hhZG93Um9vdDtcclxuXHRcdHNlbGVjdG9yID0gdHlwZW9mIHNlbGVjdG9yID09PSBcInN0cmluZ1wiID8gc2VsZWN0b3IgOiBudWxsO1xyXG5cdFx0XHJcblx0XHRsZXQgcGFyZW50ID0gdGhpcy5wYXJlbnROb2RlO1x0XHRcclxuXHRcdGlmKHBhcmVudCBpbnN0YW5jZW9mIFNoYWRvd1Jvb3QgJiYgaWdub3JlU2hhZG93Um9vdClcclxuXHRcdFx0cGFyZW50ID0gcGFyZW50Lmhvc3Q7XHJcblx0XHRcdFx0XHRcdFxyXG5cdFx0aWYoc2VsZWN0b3Ipe1xyXG5cdFx0XHR0cnl7XHJcblx0XHRcdFx0d2hpbGUocGFyZW50ICYmICFwYXJlbnQuaXMoc2VsZWN0b3IpKVxyXG5cdFx0XHRcdFx0cGFyZW50ID0gcGFyZW50LnBhcmVudChzZWxlY3RvciwgaWdub3JlU2hhZG93Um9vdCk7XHJcblx0XHRcdH1jYXRjaCAoZSkge1xyXG5cdFx0XHRcdGNvbnNvbGUuZXJyb3IoXCJ0aGlzOlwiLCB0aGlzLCBcInBhcmVudDpcIiwgcGFyZW50LCBcImVycm9yOlwiLCBlKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRyZXR1cm4gcGFyZW50O1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHBhcmVudDtcclxuXHR9O1xyXG5cdFxyXG5cdFByb3RvdHlwZS5wYXJlbnRzID0gZnVuY3Rpb24oKSB7XHRcdFxyXG5cdFx0bGV0IHJlc3VsdCA9IG5ldyBBcnJheSgpO1xyXG5cdFx0bGV0IHBhcmVudCA9IFByb3RvdHlwZS5wYXJlbnQuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxuXHRcdHdoaWxlKHBhcmVudCl7XHJcblx0XHRcdHJlc3VsdC5wdXNoKHBhcmVudCk7XHJcblx0XHRcdHBhcmVudCA9IFByb3RvdHlwZS5wYXJlbnQuYXBwbHkocGFyZW50LCBhcmd1bWVudHMpO1xyXG5cdFx0fVxyXG5cdFx0XHJcblx0XHRyZXR1cm4gTm9kZUxpc3QuZnJvbShyZXN1bHQpO1xyXG5cdH07XHRcclxuXHJcblx0UHJvdG90eXBlLnNlbGVjdG9yID0gZnVuY3Rpb24oKXtcclxuXHRcdGlmKHRoaXMgaW5zdGFuY2VvZiBEb2N1bWVudCB8fCB0aGlzIGluc3RhbmNlb2YgRG9jdW1lbnRGcmFnbWVudClcclxuXHRcdFx0cmV0dXJuIHVuZGVmaW5lZDtcclxuXHRcdGVsc2UgaWYodGhpcy5pZClcclxuXHRcdFx0cmV0dXJuIFwiI1wiICsgdGhpcy5pZDtcclxuXHRcdGVsc2V7XHRcdFx0XHJcblx0XHRcdGxldCBzZWxlY3RvciA9IHRoaXMudGFnTmFtZS50b0xvd2VyQ2FzZSgpO1xyXG5cdFx0XHRsZXQgcGFyZW50ID0gdGhpcy5wYXJlbnQoKTtcclxuXHRcdFx0aWYocGFyZW50KXtcclxuXHRcdFx0XHRsZXQgc2FtZVRhZ1NpYmxpbmdzID0gcGFyZW50LmZpbmQoXCI6c2NvcGU+XCIgKyBzZWxlY3Rvcik7XHRcdFx0XHJcblx0XHRcdFx0aWYgKHNhbWVUYWdTaWJsaW5ncyBpbnN0YW5jZW9mIE5vZGVMaXN0KSB7XHJcblx0XHRcdFx0XHRsZXQgaW5kZXggPSBzYW1lVGFnU2libGluZ3MuaW5kZXhPZih0aGlzKTtcclxuXHRcdFx0XHRcdGlmIChpbmRleCA+IDApXHJcblx0XHRcdFx0XHRcdHNlbGVjdG9yICs9ICc6bnRoLWNoaWxkKCcgKyAoaW5kZXggKyAxKSArICcpJztcclxuXHRcdFx0XHR9XHRcdFxyXG5cdFx0XHRcdGxldCBwYXJlbnRTZWxlY3RvciA9IHBhcmVudC5zZWxlY3RvcigpO1xyXG5cdFx0XHRcdHJldHVybiBwYXJlbnRTZWxlY3RvciA/IHBhcmVudFNlbGVjdG9yICsgXCI+XCIgKyBzZWxlY3RvciA6IHNlbGVjdG9yO1xyXG5cdFx0XHR9IFxyXG5cdFx0XHRyZXR1cm4gc2VsZWN0b3I7XHJcblx0XHR9XHJcblx0fTtcdFxyXG5cclxuXHRQcm90b3R5cGUuY2xvc2VzdCA9IGZ1bmN0aW9uKGFRdWVyeSkge1x0XHRcdFxyXG5cdFx0bGV0IG5vZGUgPSB0aGlzO1xyXG5cdFx0d2hpbGUobm9kZSl7XHJcblx0XHRcdGxldCBjbG9zZXN0cyA9IG5vZGUuZmluZChhUXVlcnkpO1xyXG5cdFx0XHRpZihjbG9zZXN0cyAmJiBjbG9zZXN0cy5sZW5ndGggPiAwKVxyXG5cdFx0XHRcdHJldHVybiBjbG9zZXN0cztcclxuXHRcdFx0ZWxzZSBpZihub2RlLmlzKGFRdWVyeSkpXHJcblx0XHRcdFx0cmV0dXJuIE5vZGVMaXN0LmZyb20obm9kZSk7XHJcblx0XHRcdFxyXG5cdFx0XHRub2RlID0gbm9kZS5wYXJlbnQoKTtcdFx0XHJcblx0XHR9XHJcblx0fTtcclxuXHRcclxuXHRQcm90b3R5cGUubmVzdGVkID0gZnVuY3Rpb24oYVF1ZXJ5KXtcclxuXHRcdGlmKHRoaXMuaXMoYVF1ZXJ5KSlcclxuXHRcdFx0cmV0dXJuIE5vZGVMaXN0LmZyb20odGhpcyk7XHRcclxuXHRcdFxyXG5cdFx0bGV0IG5lc3RlZCA9IHRoaXMuZmluZChhUXVlcnkpO1xyXG5cdFx0aWYobmVzdGVkICYmIG5lc3RlZC5sZW5ndGggPiAwKVxyXG5cdFx0XHRyZXR1cm4gbmVzdGVkO1xyXG5cdFx0ZWxzZVxyXG5cdFx0XHRyZXR1cm4gTm9kZUxpc3QuZnJvbSh0aGlzLnBhcmVudChhUXVlcnkpKTtcclxuXHR9O1xyXG59KTtcclxuZXhwb3J0IGRlZmF1bHQgc3VwcG9ydDtcclxuXHJcbiIsImltcG9ydCBFeHRlbmRlciBmcm9tIFwiLi4vLi4vdXRpbHMvRXh0ZW5kZXJcIjtcclxuXHJcbmNvbnN0IHN1cHBvcnQgPSBFeHRlbmRlcihcIlJlYWR5RXZlbnRTdXBwb3J0XCIsIFByb3RvdHlwZSA9PiB7XHJcblx0UHJvdG90eXBlLnJlYWR5ID0gZnVuY3Rpb24oYUZ1bmN0aW9uLCBvbmNlKXtcdFxyXG5cdFx0dGhpcy5vbihcInJlYWR5XCIsIGFGdW5jdGlvbiwgb25jZSk7XHJcblx0XHRpZihkb2N1bWVudC5yZWFkeVN0YXRlID09IFwiY29tcGxldGVcIilcdFx0XHRcclxuXHRcdFx0dGhpcy50cmlnZ2VyKFwicmVhZHlcIik7XHJcblx0XHRcclxuXHRcdHJldHVybiB0aGlzO1xyXG5cdH07XHJcblx0XHJcbn0pO1xyXG5leHBvcnQgZGVmYXVsdCBzdXBwb3J0OyIsImltcG9ydCBFeHRlbmRlciBmcm9tIFwiLi4vLi4vdXRpbHMvRXh0ZW5kZXJcIjtcclxuXHJcbmNvbnN0IEhJREVWQUxVRSA9IFwibm9uZVwiO1xyXG5cclxuY29uc3QgaXNIaWRkZW4gPSAoZWxlbWVudCkgPT4ge1xyXG5cdHJldHVybiBlbGVtZW50LnN0eWxlLmRpc3BsYXkgPT09IEhJREVWQUxVRVxyXG59O1xyXG5cclxuY29uc3QgaW5pdCA9IChlbGVtZW50KSA9PiB7XHRcclxuXHRsZXQgZGlzcGxheSA9ICFpc0hpZGRlbihlbGVtZW50KSA/IGVsZW1lbnQuc3R5bGUuZGlzcGxheSA6IFwiXCI7XHJcblx0XHJcblx0ZWxlbWVudC5zaG93ID0gKGZ1bmN0aW9uKCl7XHJcblx0XHR0aGlzLnN0eWxlLmRpc3BsYXkgPSBkaXNwbGF5O1xyXG5cdFx0cmV0dXJuIHRoaXM7XHRcdFxyXG5cdH0pLmJpbmQoZWxlbWVudCk7XHJcblx0XHJcblx0ZWxlbWVudC5oaWRlID0gKGZ1bmN0aW9uKCl7XHJcblx0XHR0aGlzLnN0eWxlLmRpc3BsYXkgPSBISURFVkFMVUU7XHJcblx0XHRyZXR1cm4gdGhpcztcdFx0XHJcblx0fSkuYmluZChlbGVtZW50KTtcclxuXHRcclxuXHRyZXR1cm4gZWxlbWVudDtcclxufTtcclxuXHJcblxyXG5jb25zdCBzdXBwb3J0ID0gRXh0ZW5kZXIoXCJTaG93SGlkZVN1cHBvcnRcIiwgUHJvdG90eXBlID0+IHtcclxuXHRQcm90b3R5cGUuc2hvdyA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0cmV0dXJuIGluaXQodGhpcykuc2hvdy5hcHBseShudWxsLCBhcmd1bWVudHMpXHJcblx0fTtcclxuXHJcblx0UHJvdG90eXBlLmhpZGUgPSBmdW5jdGlvbigpIHtcclxuXHRcdHJldHVybiBpbml0KHRoaXMpLmhpZGUuYXBwbHkobnVsbCwgYXJndW1lbnRzKVxyXG5cdH07XHJcblxyXG5cdFByb3RvdHlwZS50b2dnbGVTaG93ID0gZnVuY3Rpb24oKSB7XHJcblx0XHRyZXR1cm4gaXNIaWRkZW4odGhpcykgPyB0aGlzLnNob3coKSA6IHRoaXMuaGlkZSgpO1xyXG5cdH07XHJcblxyXG59KTtcclxuZXhwb3J0IGRlZmF1bHQgc3VwcG9ydDsiLCJpbXBvcnQgRXh0ZW5kZXIgZnJvbSBcIi4uLy4uL3V0aWxzL0V4dGVuZGVyXCI7XHJcblxyXG5jb25zdCBJbnB1dFR5cGVzID0gW1xyXG5cdHtcclxuXHRcdHNlbGVjdG9yIDogXCJzZWxlY3RcIixcclxuXHRcdGdldCA6IGZ1bmN0aW9uKCl7XHJcblx0XHRcdGNvbnN0IHJlc3VsdCA9IFtdO1xyXG5cdFx0XHR0aGlzLmZpbmQoXCJvcHRpb25cIikuZm9yRWFjaChvcHRpb24gPT4ge1xyXG5cdFx0XHRcdGlmKG9wdGlvbi5zZWxlY3RlZClcclxuXHRcdFx0XHRcdHJlc3VsdC5wdXNoKG9wdGlvbi52YWx1ZSk7XHJcblx0XHRcdH0pO1x0XHRcdFxyXG5cdFx0XHRyZXR1cm4gcmVzdWx0O1xyXG5cdFx0fSxcclxuXHRcdHNldCA6IGZ1bmN0aW9uKCl7XHRcdFx0XHRcclxuXHRcdFx0bGV0IHZhbHVlcyA9IFtdO1xyXG5cdFx0XHRjb25zdCBhcmdzID0gQXJyYXkuZnJvbShhcmd1bWVudHMpO1xyXG5cdFx0XHRsZXQgYXJnID0gYXJncy5zaGlmdCgpO1xyXG5cdFx0XHR3aGlsZShhcmcpe1xyXG5cdFx0XHRcdGlmKEFycmF5LmlzQXJyYXkoYXJnKSlcclxuXHRcdFx0XHRcdHZhbHVlcyA9IHZhbHVlcy5jb25jYXQoYXJnKTtcclxuXHRcdFx0XHRlbHNlXHJcblx0XHRcdFx0XHR2YWx1ZXMucHVzaChhcmcpO1xyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdGFyZyA9IGFyZ3Muc2hpZnQoKTtcclxuXHRcdFx0fVxyXG5cdFx0XHR0aGlzLnZhbHVlID0gdmFsdWVzO1xyXG5cdFx0XHR0aGlzLmZpbmQoXCJvcHRpb25cIikuZm9yRWFjaChvcHRpb24gPT4gb3B0aW9uLnNlbGVjdGVkID0gdmFsdWVzLmluZGV4T2Yob3B0aW9uLnZhbHVlKSA+PSAwKTtcdFx0XHRcclxuXHRcdFx0dGhpcy50cmlnZ2VyKFwiY2hhbmdlZFwiKTtcclxuXHRcdH1cdFx0XHRcclxuXHR9LFxyXG5cdHtcclxuXHRcdHNlbGVjdG9yIDogXCJpbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdLCBpbnB1dFt0eXBlPVxcXCJyYWRpb1xcXCJdXCIsXHJcblx0XHRnZXQgOiBmdW5jdGlvbigpe1xyXG5cdFx0XHRpZih0aGlzLnZhbHVlID09IFwib25cIiB8fCB0aGlzLnZhbHVlID09IFwib2ZmXCIpXHJcblx0XHRcdFx0cmV0dXJuIHRoaXMuY2hlY2tlZDtcclxuXHRcdFx0ZWxzZSBpZih0aGlzLmNoZWNrZWQpXHJcblx0XHRcdFx0cmV0dXJuIHRoaXMudmFsdWU7XHRcdFx0XHRcclxuXHRcdH0sXHJcblx0XHRzZXQgOiBmdW5jdGlvbihhVmFsdWUpe1xyXG5cdFx0XHRpZih0eXBlb2YgYVZhbHVlID09PSBcImJvb2xlYW5cIilcclxuXHRcdFx0XHR0aGlzLmNoZWNrZWQgPSBhVmFsdWU7XHJcblx0XHRcdGVsc2UgaWYodHlwZW9mIGFWYWx1ZSA9PT0gXCJzdHJpbmdcIilcclxuXHRcdFx0XHR0aGlzLmNoZWNrZWQgPSB0aGlzLnZhbHVlID09IGFWYWx1ZTtcclxuXHRcdFx0ZWxzZSBpZihBcnJheS5pc0FycmF5KGFWYWx1ZSkpXHJcblx0XHRcdFx0dGhpcy5jaGVja2VkID0gYVZhbHVlLmluZGV4T2YodGhpcy52YWx1ZSkgPj0gMDtcclxuXHRcdFx0XHJcblx0XHRcdHRoaXMudHJpZ2dlcihcImNoYW5nZWRcIik7XHJcblx0XHR9XHJcblx0fVxyXG5dO1xyXG5cclxuY29uc3QgRGVmYXVsdElucHV0VHlwZSA9IHtcclxuXHRcdGdldCA6IGZ1bmN0aW9uKCl7XHJcblx0XHRcdHJldHVybiB0aGlzLnZhbHVlO1xyXG5cdFx0fSxcclxuXHRcdHNldCA6IGZ1bmN0aW9uKGFWYWx1ZSl7XHJcblx0XHRcdHRoaXMudmFsdWUgPSBhVmFsdWU7XHJcblx0XHRcdHRoaXMudHJpZ2dlcihcImlucHV0XCIpO1xyXG5cdFx0fVx0XHJcbn07XHJcblxyXG5jb25zdCBnZXRJbnB1dFR5cGUgPSBmdW5jdGlvbihhRWxlbWVudCl7XHJcblx0Zm9yKGxldCBpID0gMDsgaSA8IElucHV0VHlwZXMubGVuZ3RoOyBpKyspXHJcblx0XHRpZihhRWxlbWVudC5pcyhJbnB1dFR5cGVzW2ldLnNlbGVjdG9yKSlcclxuXHRcdFx0cmV0dXJuIElucHV0VHlwZXNbaV07XHRcdFxyXG5cdHJldHVybiBEZWZhdWx0SW5wdXRUeXBlO1xyXG59O1xyXG5cclxuXHJcbmNvbnN0IHN1cHBvcnQgPSBFeHRlbmRlcihcIlZhbHVlU3VwcG9ydFwiLCBQcm90b3R5cGUgPT4ge1x0XHJcblx0UHJvdG90eXBlLnZhbCA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0bGV0IHR5cGUgPSBnZXRJbnB1dFR5cGUodGhpcyk7XHJcblx0XHRpZihhcmd1bWVudHMubGVuZ3RoID09IDApXHJcblx0XHRcdHJldHVybiB0eXBlLmdldC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG5cdFx0ZWxzZVxyXG5cdFx0XHR0eXBlLnNldC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG5cdFx0XHRcclxuXHRcdHJldHVybiB0aGlzO1xyXG5cdH07XHRcclxufSk7XHJcbmV4cG9ydCBkZWZhdWx0IHN1cHBvcnQ7IiwiaW1wb3J0IFwiLi9kb20vRXZlbnRUYXJnZXRcIjtcclxuaW1wb3J0IFwiLi9kb20vTm9kZVwiO1xyXG5pbXBvcnQgXCIuL2RvbS9FbGVtZW50XCI7XHJcbmltcG9ydCBcIi4vZG9tL0RvY3VtZW50XCI7XHJcbmltcG9ydCBcIi4vZG9tL0RvY3VtZW50RnJhZ21lbnRcIjtcclxuaW1wb3J0IFwiLi9kb20vSFRNTEVsZW1lbnRcIjtcclxuaW1wb3J0IFwiLi9kb20vSFRNTElucHV0RWxlbWVudFwiO1xyXG5pbXBvcnQgXCIuL2RvbS9IVE1MVGV4dEFyZWFFbGVtZW50XCI7XHJcbmltcG9ydCBcIi4vZG9tL0hUTUxTZWxlY3RFbGVtZW50XCI7XHJcbmltcG9ydCBcIi4vZG9tL05vZGVMaXN0XCI7XHJcbmltcG9ydCBcIi4vZG9tL0h0bWxDb2xsZWN0aW9uXCI7XHJcbmltcG9ydCBcIi4vR2xvYmFsXCI7XHJcbiIsImNvbnN0IERlbGVnYXRlckJ1aWxkZXIgPSBmdW5jdGlvbigpIHtcclxuXHRjb25zdCBhcmdzID0gQXJyYXkuZnJvbShhcmd1bWVudHMpO1xyXG5cdGNvbnN0IGNhbGxiYWNrID0gYXJncy5zaGlmdCgpO1xyXG5cdGNvbnN0IHNvdXJjZSA9IGFyZ3Muc2hpZnQoKTtcclxuXHRhcmdzLmZvckVhY2goIHRhcmdldCA9PntcclxuXHRcdE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHRhcmdldClcclxuXHRcdC5mb3JFYWNoKG5hbWUgPT4ge1xyXG5cdFx0XHRjb25zdCBwcm9wID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIG5hbWUpO1xyXG5cdFx0XHRpZiAodHlwZW9mIHNvdXJjZVtuYW1lXSA9PT0gXCJ1bmRlZmluZWRcIiAmJiB0eXBlb2YgcHJvcC52YWx1ZSA9PT0gXCJmdW5jdGlvblwiKVxyXG5cdFx0XHRcdHNvdXJjZVtuYW1lXSA9IGZ1bmN0aW9uKCl7XHJcblx0XHRcdFx0XHRyZXR1cm4gY2FsbGJhY2suY2FsbCh0aGlzLCBuYW1lLCBhcmd1bWVudHMpO1xyXG5cdFx0XHRcdH07XHRcdFx0XHRcdFx0XHRcdFx0XHRcclxuXHRcdH0pO1xyXG5cdH0pO1xyXG5cdFxyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBEZWxlZ2F0ZXJCdWlsZGVyOyIsImNvbnN0IGV4dGVuZFByb3RvdHlwZSA9IGZ1bmN0aW9uKCl7XHJcblx0Y29uc3QgYXJncyA9IEFycmF5LmZyb20oYXJndW1lbnRzKTtcclxuXHRjb25zdCB0eXBlID0gYXJncy5zaGlmdCgpO1x0XHJcblx0d2hpbGUoYXJncy5sZW5ndGggPiAwKXtcclxuXHRcdGNvbnN0IGV4dGVuZGVyID0gYXJncy5zaGlmdCgpO1xyXG5cdFx0ZXh0ZW5kZXIodHlwZSk7XHJcblx0fVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZXh0ZW5kUHJvdG90eXBlOyIsImltcG9ydCBVdGlscyBmcm9tIFwiLi9VdGlsc1wiO1xyXG5cclxuY29uc3QgRVhURU5TSU9OU19NQVAgPSBVdGlscy5nbG9iYWxWYXIoXCJfX19ET01fQVBJX0VYVEVOU0lPTl9NQVBfX19cIiwge30pO1xyXG5jb25zdCBFeHRlbmRlciA9IGZ1bmN0aW9uKGFOYW1lLCBhRXh0ZW50aW9uKXtcclxuXHRyZXR1cm4gZnVuY3Rpb24oYVR5cGUpe1x0XHJcblx0XHRsZXQgZXh0ZW5zaW9ucyA9IEVYVEVOU0lPTlNfTUFQW2FUeXBlLm5hbWVdO1xyXG5cdFx0aWYoIWV4dGVuc2lvbnMpXHJcblx0XHRcdGV4dGVuc2lvbnMgPSBFWFRFTlNJT05TX01BUFthVHlwZS5uYW1lXSA9IHt9O1x0XHRcclxuXHRcdFxyXG5cdFx0aWYoIWV4dGVuc2lvbnNbYU5hbWVdKXtcclxuXHRcdFx0ZXh0ZW5zaW9uc1thTmFtZV0gPSB0cnVlO1xyXG5cdFx0XHRhRXh0ZW50aW9uKGFUeXBlLnByb3RvdHlwZSk7XHJcblx0XHR9XHJcblx0XHRlbHNlXHJcblx0XHRcdGNvbnNvbGUud2FybihcImR1cGxpY2F0ZWQgbG9hZCBvZiBleHRlbnNpb24gXFxcIlwiICsgYU5hbWUgKyBcIlxcXCIhXCIpO1xyXG5cdH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEV4dGVuZGVyOyIsImNvbnN0IFV0aWxzID0ge1xyXG5cdGdsb2JhbCA6ICgoKSA9PiB7XHJcblx0XHRpZih0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiKSByZXR1cm4gd2luZG93O1xyXG5cdFx0aWYodHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIikgcmV0dXJuIGdsb2JhbDtcclxuXHRcdGlmKHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiKSByZXR1cm4gc2VsZjtcclxuXHRcdHJldHVybiB7fTtcdFx0XHJcblx0fSkoKSxcclxuXHRnbG9iYWxWYXIgOiBmdW5jdGlvbihhTmFtZSwgYUluaXRWYWx1ZSl7XHJcblx0XHRpZihhcmd1bWVudHMubGVuZ3RoID09PSAyICYmIHR5cGVvZiBVdGlscy5nbG9iYWxbYU5hbWVdID09PSBcInVuZGVmaW5lZFwiKVxyXG5cdFx0XHRVdGlscy5nbG9iYWxbYU5hbWVdID0gYUluaXRWYWx1ZTtcclxuXHRcdFxyXG5cdFx0cmV0dXJuIFV0aWxzLmdsb2JhbFthTmFtZV07XHRcdFxyXG5cdH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFV0aWxzOyIsImltcG9ydCB7IGxhenlQcm9taXNlIH0gZnJvbSBcIkBkZWZhdWx0LWpzL2RlZmF1bHRqcy1jb21tb24tdXRpbHMvc3JjL1Byb21pc2VVdGlsc1wiO1xuaW1wb3J0IHsgZGVmR2V0LCBkZWZWYWx1ZSB9IGZyb20gXCJAZGVmYXVsdC1qcy9kZWZhdWx0anMtY29tbW9uLXV0aWxzL3NyYy9PYmplY3RVdGlsc1wiO1xuaW1wb3J0IHsgcHJpdmF0ZVByb3BlcnR5IH0gZnJvbSBcIkBkZWZhdWx0LWpzL2RlZmF1bHRqcy1jb21tb24tdXRpbHMvc3JjL1ByaXZhdGVQcm9wZXJ0eVwiO1xuaW1wb3J0IERpcmVjdGl2ZSBmcm9tIFwiLi9EaXJlY3RpdmVcIjtcbmltcG9ydCBUZW1wbGF0ZSBmcm9tIFwiLi9UZW1wbGF0ZVwiO1xuXG5jb25zdCBQUklWQVRFX1dBSVQgPSBcIndhaXRcIjtcbmNvbnN0IFBSSVZBVEVfQ0FMTEJBQ0tTID0gXCJjYWxsYmFja3NcIjtcbmNvbnN0IFBSSVZBVEVfSUdOT1JFRElSRUNUSVZFUyA9IFwiaWdub3JlRGlyZWN0aXZlc1wiO1xuXG5jb25zdCBDT05URVhUQ0xPTkUgPSBuZXcgU2V0KCk7XG5jb25zdCBDT05URVhUUyA9IG5ldyBNYXAoKTtcbmNvbnN0IFdBUk5USU1FID0gMTAwMDtcbmNvbnN0IENSSVRJQ0FMVElNRSA9IDEwMDAwO1xuXG5sZXQgb2JzZXJ2ZXJUaW1lb3V0ID0gbnVsbDtcbmNvbnN0IG9ic2VydmUgPSAoY29udGV4dCkgPT4ge1xuXHRDT05URVhUUy5zZXQoY29udGV4dCwgRGF0ZS5ub3coKSk7XG5cdHJ1bk9ic2VydmVyKCk7XG59O1xuY29uc3QgcnVuT2JzZXJ2ZXIgPSAoKSA9PiB7XG5cdGlmIChvYnNlcnZlclRpbWVvdXQgPT0gbnVsbCkge1xuXHRcdG9ic2VydmVyVGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdFx0b2JzZXJ2ZXJUaW1lb3V0ID0gbnVsbDtcblx0XHRcdGNvbnN0IHRpbWUgPSBEYXRlLm5vdygpO1xuXHRcdFx0Q09OVEVYVFMuZm9yRWFjaCgoY3JlYXRlVGltZSwgY29udGV4dCkgPT4ge1xuXHRcdFx0XHRjb25zdCBkZWx0YSA9IHRpbWUgLSBjcmVhdGVUaW1lO1xuXHRcdFx0XHRpZiAoY29udGV4dC5jbG9zZWQpIENPTlRFWFRTLmRlbGV0ZShjb250ZXh0KTtcblx0XHRcdFx0ZWxzZSB7XG5cdFx0XHRcdFx0aWYgKGRlbHRhID4gQ1JJVElDQUxUSU1FKSB7XG5cdFx0XHRcdFx0XHRjb25zb2xlLmVycm9yKFwiY29udGV4dCBsaXZlcyBsb25nZXIgdGhlbiAxMHNcIiwgZGVsdGEgLyAxMDAwLCBjb250ZXh0KTtcblx0XHRcdFx0XHR9IGVsc2UgaWYgKGRlbHRhID4gV0FSTlRJTUUpIHtcblx0XHRcdFx0XHRcdGNvbnNvbGUud2FybihcImNvbnRleHQgbGl2ZXMgbG9uZ2VyIHRoZW4gMXNcIiwgZGVsdGEgLyAxMDAwLCBjb250ZXh0KTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHRcdFx0Y29uc29sZS5sb2coXCJvcGVuIGNvbnRleHQ6XCIsIENPTlRFWFRTLnNpemUpO1xuXHRcdFx0aWYgKENPTlRFWFRTLnNpemUgPiAwKSBydW5PYnNlcnZlcigpO1xuXHRcdH0sIDEwMDApO1xuXHR9XG59O1xuXG5jb25zdCB0b1RlbXBsYXRlID0gKHRlbXBsYXRlKSA9PiB7XG5cdGlmICh0ZW1wbGF0ZSBpbnN0YW5jZW9mIFRlbXBsYXRlKSByZXR1cm4gdGVtcGxhdGUuaW1wb3J0Q29udGVudCgpO1xuXHRlbHNlIGlmICh0eXBlb2YgdGVtcGxhdGUgPT09IFN0cmluZykgcmV0dXJuIGNyZWF0ZSh0ZW1wbGF0ZSk7XG5cdHJldHVybiB0ZW1wbGF0ZTtcbn07XG5cbmxldCBpZCA9IDA7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb250ZXh0IHtcblx0Y29uc3RydWN0b3IoeyByZXNvbHZlciwgcmVuZGVyZXIsIHRlbXBsYXRlLCBjb250YWluZXIsIHJvb3QsIG1vZGUgPSBcInJlcGxhY2VcIiwgdGFyZ2V0ID0gbnVsbCwgcGFyZW50ID0gbnVsbCwgaWdub3JlRGlyZWN0aXZlIH0pIHtcblx0XHRpZiAoIXJlc29sdmVyKSB0aHJvdyBuZXcgRXJyb3IoJ1BhcmFtZXRlciBcInJlc29sdmVyXCIgaXMgcmVxdWlyZWQhJyk7XG5cdFx0aWYgKCFyZW5kZXJlcikgdGhyb3cgbmV3IEVycm9yKCdQYXJhbWV0ZXIgXCJyZW5kZXJlclwiIGlzIHJlcXVpcmVkIScpO1xuXHRcdGlmICghdGVtcGxhdGUpIHRocm93IG5ldyBFcnJvcignUGFyYW1ldGVyIFwidGVtcGxhdGVcIiBpcyByZXF1aXJlZCEnKTtcblx0XHRpZiAoIWNvbnRhaW5lcikgdGhyb3cgbmV3IEVycm9yKCdQYXJhbWV0ZXIgXCJjb250YWluZXJcIiBpcyByZXF1aXJlZCEnKTtcblx0XHRpZiAoIXJvb3QpIHRocm93IG5ldyBFcnJvcignUGFyYW1ldGVyIFwicm9vdFwiIGlzIHJlcXVpcmVkIScpO1xuXG5cdFx0ZGVmVmFsdWUodGhpcywgXCJpZFwiLCBwYXJlbnQgPyBgJHtwYXJlbnQuaWR9LT4ke2lkKyt9YCA6IGByb290Ojoke2lkKyt9YCk7XG5cdFx0ZGVmVmFsdWUodGhpcywgXCJkZXB0aFwiLCBwYXJlbnQgPyBwYXJlbnQuZGVwdGggKyAxIDogMCk7XG5cdFx0ZGVmVmFsdWUodGhpcywgXCJwYXJlbnRcIiwgcGFyZW50KTtcblx0XHQvL2RlZlZhbHVlKHRoaXMsIFwicmVzb2x2ZXJcIiwgcmVzb2x2ZXIpO1xuXHRcdGRlZlZhbHVlKHRoaXMsIFwicmVuZGVyZXJcIiwgcmVuZGVyZXIpO1xuXHRcdGRlZlZhbHVlKHRoaXMsIFwicm9vdFwiLCByb290KTtcblx0XHRkZWZWYWx1ZSh0aGlzLCBcInRlbXBsYXRlXCIsIHRvVGVtcGxhdGUodGVtcGxhdGUpKTtcblx0XHRkZWZWYWx1ZSh0aGlzLCBcIm1vZGVcIiwgbW9kZSk7XG5cdFx0ZGVmVmFsdWUodGhpcywgXCJzdWJjb250ZXh0c1wiLCBuZXcgU2V0KCkpO1xuXHRcdGNvbnN0IHdhaXQgPSBsYXp5UHJvbWlzZSgpO1xuXHRcdHByaXZhdGVQcm9wZXJ0eSh0aGlzLCBQUklWQVRFX0lHTk9SRURJUkVDVElWRVMsIGlnbm9yZURpcmVjdGl2ZSBpbnN0YW5jZW9mIFNldCA/IGlnbm9yZURpcmVjdGl2ZSA6IG5ldyBTZXQoKSk7XG5cdFx0cHJpdmF0ZVByb3BlcnR5KHRoaXMsIFBSSVZBVEVfV0FJVCwgd2FpdCk7XG5cdFx0cHJpdmF0ZVByb3BlcnR5KHRoaXMsIFBSSVZBVEVfQ0FMTEJBQ0tTLCBbXSk7XG5cblx0XHR0aGlzLmNvbnRlbnQgPSBudWxsO1xuXHRcdHRoaXMuY29udGFpbmVyID0gY29udGFpbmVyO1xuXHRcdHRoaXMudGFyZ2V0ID0gdGFyZ2V0O1xuXHRcdHRoaXMucmVzb2x2ZXIgPSByZXNvbHZlcjtcblxuXHRcdC8qIGV4ZWN1dGlvbiBmbGFncyAqL1xuXHRcdHRoaXMuc3RvcCA9IGZhbHNlO1xuXHRcdHRoaXMuaWdub3JlID0gZmFsc2U7XG5cdFx0Ly9jb25zb2xlLmxvZyhgY29udGV4dD17XCJkZXB0aFwiOiR7dGhpcy5kZXB0aH0gfSwgXCJpZFwiOiAke3RoaXMuaWR9YCk7XG5cdFx0Ly90aGlzLmNyZWF0ZXRBdCA9IG5ldyBFcnJvcigpO1xuXG5cdFx0aWYgKHBhcmVudCkge1xuXHRcdFx0cGFyZW50LnN1YmNvbnRleHRzLmFkZCh0aGlzKTtcblx0XHR9XG5cdH1cblxuXHRnZXQgY2xvc2VkKCkge1xuXHRcdHJldHVybiBwcml2YXRlUHJvcGVydHkodGhpcywgUFJJVkFURV9XQUlUKS5yZXNvbHZlZDtcblx0fVxuXG5cdGlnbm9yZURpcmVjdGl2ZShkaXJlY3RpdmUpIHtcblx0XHRjb25zdCBpZ25vcmVEaXJlY3RpdmVzID0gcHJpdmF0ZVByb3BlcnR5KHRoaXMsIFBSSVZBVEVfSUdOT1JFRElSRUNUSVZFUyk7XG5cdFx0ZGlyZWN0aXZlIGluc3RhbmNlb2YgRGlyZWN0aXZlID8gaWdub3JlRGlyZWN0aXZlcy5hZGQoZGlyZWN0aXZlLm5hbWUpIDogaWdub3JlRGlyZWN0aXZlcy5hZGQoZGlyZWN0aXZlKTtcblx0fVxuXG5cdGFjY2VwdERpcmVjdGl2ZShkaXJlY3RpdmUpIHtcblx0XHRjb25zdCBpZ25vcmVEaXJlY3RpdmVzID0gcHJpdmF0ZVByb3BlcnR5KHRoaXMsIFBSSVZBVEVfSUdOT1JFRElSRUNUSVZFUyk7XG5cdFx0aWYgKGRpcmVjdGl2ZSBpbnN0YW5jZW9mIERpcmVjdGl2ZSkgcmV0dXJuICEoaWdub3JlRGlyZWN0aXZlcy5oYXMoZGlyZWN0aXZlLm5hbWUpIHx8IGlnbm9yZURpcmVjdGl2ZXMuaGFzKGRpcmVjdGl2ZSkpO1xuXG5cdFx0cmV0dXJuICFpZ25vcmVEaXJlY3RpdmVzLmhhcyhkaXJlY3RpdmUpO1xuXHR9XG5cblx0ZmluaXNoZWQoY2FsbGJhY2spIHtcblx0XHRpZiAodGhpcy5wYXJlbnQpIHRoaXMucGFyZW50LmZpbmlzaGVkKGNhbGxiYWNrKTtcblx0XHRlbHNlIHRoaXMucmVhZHkoY2FsbGJhY2spO1xuXHR9XG5cblx0YXN5bmMgcmVhZHkoY2FsbGJhY2spIHtcblx0XHRjb25zdCBjYWxsYmFja3MgPSBwcml2YXRlUHJvcGVydHkodGhpcywgUFJJVkFURV9DQUxMQkFDS1MpO1xuXHRcdGlmIChjYWxsYmFjaykge1xuXHRcdFx0aWYgKGNhbGxiYWNrIGluc3RhbmNlb2YgQXJyYXkpIGNhbGxiYWNrLmZvckVhY2goKGNhbGxiYWNrKSA9PiB0aGlzLndhaXQudGhlbihjYWxsYmFjaykpO1xuXHRcdFx0ZWxzZSBpZiAoY2FsbGJhY2sgaW5zdGFuY2VvZiBQcm9taXNlKSBjYWxsYmFja3MucHVzaChhc3luYyAoKSA9PiBhd2FpdCBjYWxsYmFjayk7XG5cdFx0XHRlbHNlIGlmICh0eXBlb2YgY2FsbGJhY2sgPT09IFwiZnVuY3Rpb25cIikgY2FsbGJhY2tzLnB1c2goY2FsbGJhY2spO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRjb25zdCB3YWl0ID0gcHJpdmF0ZVByb3BlcnR5KHRoaXMsIFBSSVZBVEVfV0FJVCk7XG5cdFx0XHRpZiAoIXdhaXQucmVzb2x2ZWQpIHtcblx0XHRcdFx0aWYgKCF0aGlzLmlnbm9yZSkgZm9yIChsZXQgY2FsbGJhY2sgb2YgY2FsbGJhY2tzKSBhd2FpdCBjYWxsYmFjayh0aGlzKTtcblxuXHRcdFx0XHRmb3IgKGxldCBjaGlsZCBvZiB0aGlzLnN1YmNvbnRleHRzKSBhd2FpdCBjaGlsZC5yZWFkeSgpO1xuXG5cdFx0XHRcdGlmICh0aGlzLnBhcmVudCkgdGhpcy5wYXJlbnQuc3ViY29udGV4dHMuZGVsZXRlKHRoaXMpO1xuXG5cdFx0XHRcdHdhaXQucmVzb2x2ZSh0aGlzKTtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIHdhaXQ7XG5cdFx0fVxuXHR9XG5cblx0c3ViQ29udGV4dCh7IHJlc29sdmVyID0gdGhpcy5yZXNvbHZlciwgcmVuZGVyZXIgPSB0aGlzLnJlbmRlcmVyLCB0ZW1wbGF0ZSA9IHRoaXMudGVtcGxhdGUsIGNvbnRhaW5lciA9IHRoaXMuY29udGFpbmVyLCByb290ID0gdGhpcy5yb290LCBtb2RlID0gdGhpcy5tb2RlLCB0YXJnZXQgPSB0aGlzLnRhcmdldCwgaWdub3JlRGlyZWN0aXZlID0gbnVsbCB9ID0ge30pIHtcblx0XHRyZXR1cm4gbmV3IENvbnRleHQoeyByZXNvbHZlciwgcmVuZGVyZXIsIHRlbXBsYXRlLCBjb250YWluZXIsIG1vZGUsIHJvb3QsIHRhcmdldCwgcGFyZW50OiB0aGlzLCBpZ25vcmVEaXJlY3RpdmUgfSk7XG5cdH1cblxuXHRjbG9uZSh7IHJlc29sdmVyID0gdGhpcy5yZXNvbHZlciwgcmVuZGVyZXIgPSB0aGlzLnJlbmRlcmVyLCB0ZW1wbGF0ZSA9IHRoaXMudGVtcGxhdGUsIGNvbnRhaW5lciA9IHRoaXMuY29udGFpbmVyLCByb290ID0gdGhpcy5yb290LCBtb2RlID0gdGhpcy5tb2RlLCB0YXJnZXQgPSB0aGlzLnRhcmdldCwgaWdub3JlRGlyZWN0aXZlID0gbnVsbCB9ID0ge30pIHtcblx0XHRyZXR1cm4gbmV3IENvbnRleHQoeyByZXNvbHZlciwgcmVuZGVyZXIsIHRlbXBsYXRlLCBjb250YWluZXIsIG1vZGUsIHJvb3QsIHRhcmdldCwgcGFyZW50OiBudWxsLCBpZ25vcmVEaXJlY3RpdmUgfSk7XG5cdH1cblxuXHR0b1JlbmRlck9wdGlvbih7IHJlc29sdmVyID0gdGhpcy5yZXNvbHZlciwgcmVuZGVyZXIgPSB0aGlzLnJlbmRlcmVyLCB0ZW1wbGF0ZSA9IHRoaXMudGVtcGxhdGUsIGNvbnRhaW5lciA9IHRoaXMuY29udGFpbmVyLCByb290ID0gdGhpcy5yb290LCBtb2RlID0gdGhpcy5tb2RlLCB0YXJnZXQgPSB0aGlzLnRhcmdldCwgaWdub3JlRGlyZWN0aXZlID0gbnVsbCB9ID0ge30pIHtcblx0XHRyZXR1cm4geyByZXNvbHZlciwgcmVuZGVyZXIsIHRlbXBsYXRlLCBjb250YWluZXIsIG1vZGUsIHJvb3QsIHRhcmdldCwgcGFyZW50OiBudWxsLCBpZ25vcmVEaXJlY3RpdmUgfTtcblx0fVxufVxuIiwiY29uc3QgREVGSU5FRF9ESVJFQ1RJVkVTID0gW107XG5cbmNvbnN0IGRlZmluZURpcmVjdGl2ZSA9ICh7IGRpcmVjdGl2ZSB9KSA9PiB7XG5cdGlmICghKGRpcmVjdGl2ZSBpbnN0YW5jZW9mIERpcmVjdGl2ZSkpXG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiSW1wbGVtZW50YXRpb24gZG9zbid0IGV4dGVuZCBEaXJlY3RpdmUgY2xhc3MhXCIpO1xuXG5cdGlmIChkaXJlY3RpdmUucmFuayA8IERpcmVjdGl2ZS5NSU5fUkFOSylcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJUaGUgcmFuayBvZiBhIGRpcmVjdGl2ZSBjYW4ndCBiZSBsb3dlciBhcyBcIiArIERpcmVjdGl2ZS5NSU5fUkFOSyArIFwiIVwiKTtcblxuXHRpZiAoZGlyZWN0aXZlLnJhbmsgPiBEaXJlY3RpdmUuTUFYX1JBTkspXG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiVGhlIHJhbmsgb2YgYSBkaXJlY3RpdmUgY2FuJ3QgYmUgZ3JhdGVyIGFzIFwiICsgRGlyZWN0aXZlLk1BWF9SQU5LICsgXCIhXCIpO1xuXG5cdERFRklORURfRElSRUNUSVZFUy5wdXNoKGRpcmVjdGl2ZSk7XG5cdERFRklORURfRElSRUNUSVZFUy5zb3J0KChhLCBiKSA9PiB7XG5cdFx0Y29uc3QgcGhhc2UgPSBhLnBoYXNlIC0gYi5waGFzZTtcblx0XHRpZihwaGFzZSA9PSAwKVxuXHRcdFx0cmV0dXJuIGEucmFuayAtIGIucmFuaztcblx0XHRcdFxuXHRcdHJldHVybiBwaGFzZTtcblx0fSk7XG59O1xuXG5jb25zdCBQSEFTRSA9IHtcblx0aW5pdDogMCxcblx0ZGF0YTogMSxcblx0dGVtcGxhdGU6IDIsXG5cdGNvbnRlbnQ6IDMsXG5cdGZpbmlzaDogNFxufTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGlyZWN0aXZlIHtcblxuXHRzdGF0aWMgZ2V0IFBIQVNFKCkgeyByZXR1cm4gUEhBU0UgfTtcblx0c3RhdGljIGdldCBNSU5fUkFOSygpIHsgcmV0dXJuIDAgfTtcblx0c3RhdGljIGdldCBNQVhfUkFOSygpIHsgcmV0dXJuIDEwMDAwMCB9O1xuXG5cdGNvbnN0cnVjdG9yKCkgeyB9O1xuXG5cdGdldCBuYW1lKCkgeyB9XG5cdGdldCByYW5rKCkgeyB9XG5cdGdldCBwaGFzZSgpIHtyZXR1cm4gUEhBU0UuZmluaXNofVxuXG5cdC8qKlxuXHQgKiBuZWVkIHRvIGJlIGltcGxlbWVudGVkXG5cdCAqIFxuXHQgKiByZXR1cm4gRGlyZWN0aXZlUmVzdWx0XG5cdCAqL1xuXHRhc3luYyBleGVjdXRlKGNvbnRleHQpIHtcblx0XHRyZXR1cm4gY29udGV4dDtcblx0fVxuXG5cblx0c3RhdGljIGRlZmluZShvcHRpb24pIHtcblx0XHRkZWZpbmVEaXJlY3RpdmUob3B0aW9uKTtcblx0fVxuXG5cdHN0YXRpYyBnZXQgZGlyZWN0aXZlcygpIHtcblx0XHRyZXR1cm4gREVGSU5FRF9ESVJFQ1RJVkVTO1xuXHR9XG59OyIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIERpcmVjdGl2ZUVsZW1lbnQgZXh0ZW5kcyBIVE1MRWxlbWVudHtcblx0Y29uc3RydWN0b3IoKXtcblx0XHRzdXBlcigpO1xuXHRcdHRoaXMuaGlkZGVuID0gdHJ1ZTtcblx0fVxuXHRcblx0LyoqXG5cdCAqIG5lZWQgdG8gYmUgaW1wbGVtZW50ZWRcblx0ICogXG5cdCAqL1xuXHRhc3luYyBleGVjdXRlKHt0ZW1wbGF0ZSwgY29udGV4dH0pe1xuXHRcdGNvbnRleHQuY29udGVudCA9IHRlbXBsYXRlLmNsb25lTm9kZSh0cnVlKTtcblx0XHRyZXR1cm4gY29udGV4dDtcblx0fTtcdFxufSIsImltcG9ydCBcIkBkZWZhdWx0LWpzL2RlZmF1bHRqcy1leHRkb21cIjtcbmltcG9ydCBFeHByZXNzaW9uUmVzb2x2ZXIgZnJvbSBcIkBkZWZhdWx0LWpzL2RlZmF1bHRqcy1leHByZXNzaW9uLWxhbmd1YWdlL3NyYy9FeHByZXNzaW9uUmVzb2x2ZXIuanNcIjtcbmltcG9ydCBUZW1wbGF0ZSBmcm9tIFwiLi9UZW1wbGF0ZS5qc1wiO1xuaW1wb3J0IENvbnRleHQgZnJvbSBcIi4vQ29udGV4dC5qc1wiO1xuaW1wb3J0IERpcmVjdGl2ZSBmcm9tIFwiLi9EaXJlY3RpdmUuanNcIjtcbmltcG9ydCBFbGVtZW50IGZyb20gXCIuL0VsZW1lbnQuanNcIjtcbmltcG9ydCBcIi4vZGlyZWN0aXZlc1wiO1xuaW1wb3J0IFwiLi9lbGVtZW50c1wiO1xuXG5leHBvcnQgY29uc3QgU0NPUEVTID0ge1xuXHRhcHBsaWNhdGlvbjogXCJhcHBsaWNhdGlvblwiLFxuXHRkYXRhOiBcImRhdGFcIixcblx0cmVuZGVyOiBcInJlbmRlclwiLFxuXHRjb250YWluZXI6IFwiY29udGFpbmVyXCIsXG5cdG5vZGU6IFwibm9kZVwiLFxuXHRkaXJlY3RpdmU6IFwiZGlyZWN0aXZlXCIsXG59O1xuXG5jb25zdCBBUFBMSUNBVElPTl9TQ09QRV9SRVNPTFZFUiA9IG5ldyBFeHByZXNzaW9uUmVzb2x2ZXIoeyBuYW1lOiBTQ09QRVMuYXBwbGljYXRpb24gfSk7XG5cbmNvbnN0IE1PREVXT1JLRVIgPSB7XG5cdHJlcGxhY2U6IGFzeW5jICh7IGNvbnRhaW5lciwgdGFyZ2V0ID0gbnVsbCwgY29udGVudCB9KSA9PiB7XG5cdFx0aWYgKHRhcmdldCkge1xuXHRcdFx0dGFyZ2V0LnJlcGxhY2UoY29udGVudCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGNvbnRhaW5lci5lbXB0eSgpO1xuXHRcdFx0Y29udGFpbmVyLmFwcGVuZChjb250ZW50KTtcblx0XHR9XG5cdH0sXG5cdGFwcGVuZDogYXN5bmMgKHsgY29udGFpbmVyLCB0YXJnZXQgPSBudWxsLCBjb250ZW50IH0pID0+IHtcblx0XHRpZiAodGFyZ2V0KSB0YXJnZXQuYWZ0ZXIoY29udGVudCk7XG5cdFx0ZWxzZSBjb250YWluZXIuYXBwZW5kKGNvbnRlbnQpO1xuXHR9LFxuXHRwcmVwZW5kOiBhc3luYyAoeyBjb250YWluZXIsIHRhcmdldCA9IG51bGwsIGNvbnRlbnQgfSkgPT4ge1xuXHRcdGlmICh0YXJnZXQpIHRhcmdldC5iZWZvcmUoY29udGVudCk7XG5cdFx0ZWxzZSBjb250YWluZXIucHJlcGVuZChjb250ZW50KTtcblx0fSxcbn07XG5cbmNvbnN0IGxvYWRUZW1wbGF0ZUNvbnRlbnQgPSBhc3luYyAodGVtcGxhdGUsIHJlbmRlcmVyKSA9PiB7XG5cdGlmICh0ZW1wbGF0ZSkge1xuXHRcdHRlbXBsYXRlID0gYXdhaXQgVGVtcGxhdGUubG9hZCh0ZW1wbGF0ZSk7XG5cdFx0cmV0dXJuIHRlbXBsYXRlLmltcG9ydENvbnRlbnQoKTtcblx0fSBlbHNlIGlmIChyZW5kZXJlci50ZW1wbGF0ZSkge1xuXHRcdHJldHVybiBhd2FpdCByZW5kZXJlci50ZW1wbGF0ZS5pbXBvcnRDb250ZW50KCk7XG5cdH1cblxuXHR0aHJvdyBuZXcgRXJyb3IoXCJObyBjb250ZW50IHRlbXBsYXRlIHNwZWNpZmllZCFcIik7XG59O1xuXG5jb25zdCBhZGRDb250ZW50ID0gYXN5bmMgKGNvbnRleHQpID0+IHtcblx0aWYgKGNvbnRleHQuY29udGVudCkge1xuXHRcdGNvbnN0IG1vZGV3b3JrZXIgPSBNT0RFV09SS0VSW2NvbnRleHQubW9kZV07XG5cdFx0aWYgKCFtb2Rld29ya2VyKSB0aHJvdyBuZXcgRXJyb3IoJ1RoZSBcIicgKyBjb250ZXh0Lm1vZGUgKyAnXCIgaXMgbm90IHN1cHBvcnRlZCEnKTtcblx0XHRhd2FpdCBtb2Rld29ya2VyKGNvbnRleHQpO1xuXHR9XG59O1xuXG5jb25zdCByZW5kZXJDb250YWluZXIgPSBhc3luYyAoY29udGV4dCkgPT4ge1xuXHRsZXQgeyB0ZW1wbGF0ZSwgcmVzb2x2ZXIgfSA9IGNvbnRleHQ7XG5cdGlmICghdGVtcGxhdGUgfHwgdGVtcGxhdGUubGVuZ3RoID09IDApIHJldHVybiBjb250ZXh0O1xuXG5cdGxldCBjb250ZW50ID0gW107XG5cdGZvciAobGV0IG5vZGVUZW1wbGF0ZSBvZiB0ZW1wbGF0ZSkge1xuXHRcdG5vZGVUZW1wbGF0ZS5ub3JtYWxpemUoKTtcblx0XHRjb25zdCBub2RlUmVzb2x2ZXIgPSBuZXcgRXhwcmVzc2lvblJlc29sdmVyKHsgbmFtZTogU0NPUEVTLm5vZGUsIGNvbnRleHQ6IG51bGwsIHBhcmVudDogcmVzb2x2ZXIgfSk7XG5cdFx0Y29uc3Qgbm9kZUNvbnRleHQgPSBhd2FpdCByZW5kZXJOb2RlKGNvbnRleHQuc3ViQ29udGV4dCh7IHRlbXBsYXRlOiBub2RlVGVtcGxhdGUsIHJlc29sdmVyOiBub2RlUmVzb2x2ZXIgfSkpO1xuXHRcdGF3YWl0IG5vZGVDb250ZXh0LnJlYWR5KCk7XG5cdFx0Y29uc3Qgbm9kZSA9IG5vZGVDb250ZXh0LmNvbnRlbnQ7XG5cdFx0aWYgKG5vZGUpIHtcblx0XHRcdGlmIChub2RlIGluc3RhbmNlb2YgQXJyYXkpIGNvbnRlbnQgPSBjb250ZW50LmNvbmNhdChub2RlKTtcblx0XHRcdGlmIChub2RlIGluc3RhbmNlb2YgTm9kZUxpc3QgfHwgbm9kZSBpbnN0YW5jZW9mIEhUTUxDb2xsZWN0aW9uKSBjb250ZW50ID0gY29udGVudC5jb25jYXQoQXJyYXkuZnJvbShub2RlKSk7XG5cdFx0XHRlbHNlIGlmIChub2RlIGluc3RhbmNlb2YgTm9kZSkgY29udGVudC5wdXNoKG5vZGUpO1xuXHRcdH1cblx0fVxuXG5cdGNvbnRleHQuY29udGVudCA9IGNvbnRlbnQubGVuZ3RoICE9IDAgPyBjb250ZW50IDogbnVsbDtcblx0cmV0dXJuIGNvbnRleHQ7XG59O1xuXG5jb25zdCByZW5kZXJOb2RlID0gYXN5bmMgKGNvbnRleHQpID0+IHtcblx0dHJ5IHtcblx0XHRsZXQgeyB0ZW1wbGF0ZSwgcmVuZGVyZXIgfSA9IGNvbnRleHQ7XG5cdFx0aWYgKHRlbXBsYXRlIGluc3RhbmNlb2YgRWxlbWVudCkgYXdhaXQgdGVtcGxhdGUuZXhlY3V0ZShjb250ZXh0KTtcblx0XHRlbHNlIGF3YWl0IGV4ZWN1dGVEaXJlY3RpdmVzKGNvbnRleHQpO1xuXG5cdFx0Y29uc3QgeyBpZ25vcmUsIGNvbnRlbnQgfSA9IGNvbnRleHQ7XG5cblx0XHRpZiAoIWlnbm9yZSAmJiBjb250ZW50KSB7XG5cdFx0XHRsZXQgeyByZXNvbHZlciB9ID0gY29udGV4dDtcblx0XHRcdGNvbnN0IHN1YlRlbXBsYXRlID0gY29udGV4dC50ZW1wbGF0ZS5jaGlsZE5vZGVzO1xuXHRcdFx0aWYgKHN1YlRlbXBsYXRlICYmIHN1YlRlbXBsYXRlLmxlbmd0aCA+IDApIHtcblx0XHRcdFx0Y29uc3QgY29udGFpbmVyUmVzb2x2ZXIgPSBuZXcgRXhwcmVzc2lvblJlc29sdmVyKHsgbmFtZTogU0NPUEVTLmNvbnRhaW5lciwgY29udGV4dDogbnVsbCwgcGFyZW50OiByZXNvbHZlciB9KTtcblx0XHRcdFx0Y29uc3Qgc3ViQ29udGV4dCA9IGF3YWl0IHJlbmRlcmVyLnJlbmRlcihjb250ZXh0LnN1YkNvbnRleHQoeyBjb250YWluZXI6IGNvbnRlbnQsIHRlbXBsYXRlOiBzdWJUZW1wbGF0ZSwgcmVzb2x2ZXI6IGNvbnRhaW5lclJlc29sdmVyIH0pKTtcblx0XHRcdFx0YXdhaXQgc3ViQ29udGV4dC5yZWFkeSgpO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGlmIChjb250ZXh0LmNvbnRlbnQgJiYgY29udGV4dC5jb250ZW50LnRhZ05hbWUgJiYgY29udGV4dC5jb250ZW50LnRhZ05hbWUgPT0gXCJKU1RMXCIpIGNvbnRleHQuY29udGVudCA9IGNvbnRleHQuY29udGVudC5jaGlsZE5vZGVzOyAvL3NwZWNpYWwgY2FzZSB0byBzdXBwb3J0IHRoZSBvbGQgXCI8anN0bD5cIiB0YWcuXG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRjb25zb2xlLmVycm9yKFwiZXJyb3IgYXQgcmVuZGVyIG5vZGU6XCIsIGUsIGNvbnRleHQpO1xuXHR9XG5cdHJldHVybiBjb250ZXh0O1xufTtcblxuY29uc3QgZXhlY3V0ZURpcmVjdGl2ZXMgPSBhc3luYyAoY29udGV4dCkgPT4ge1xuXHRjb25zdCBkaXJlY3RpdmVzID0gRGlyZWN0aXZlLmRpcmVjdGl2ZXM7XG5cdGNvbnN0IGxlbmd0aCA9IGRpcmVjdGl2ZXMubGVuZ3RoO1xuXHRmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aCAmJiAhY29udGV4dC5zdG9wOyBpKyspIHtcblx0XHRjb25zdCBkaXJlY3RpdmUgPSBkaXJlY3RpdmVzW2ldO1xuXHRcdHRyeSB7XG5cdFx0XHRpZiAoY29udGV4dC5hY2NlcHREaXJlY3RpdmUoZGlyZWN0aXZlKSkgYXdhaXQgZGlyZWN0aXZlLmV4ZWN1dGUoY29udGV4dCk7XG5cdFx0fSBjYXRjaCAoZSkge1xuXHRcdFx0Y29uc29sZS5lcnJvcihcImVycm9yIGF0IGRpcmVjdGl2ZTpcIiwgZSwgZGlyZWN0aXZlLCBjb250ZXh0KTtcblx0XHR9XG5cdH1cblx0cmV0dXJuIGNvbnRleHQ7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZW5kZXJlciB7XG5cdGNvbnN0cnVjdG9yKHsgdGVtcGxhdGUsIGRhdGEgfSA9IHt9KSB7XG5cdFx0aWYgKHRlbXBsYXRlICYmICEodGVtcGxhdGUgaW5zdGFuY2VvZiBUZW1wbGF0ZSkpIHRocm93IG5ldyBFcnJvcihcInRlbXBsYXRlIG11c3QgYmUgYW4gaW5zdGFuY2Ugb2YgVGVtcGxhdGUhXCIpO1xuXG5cdFx0dGhpcy50ZW1wbGF0ZSA9IHRlbXBsYXRlO1xuXHRcdHRoaXMucmVzb2x2ZXIgPSBuZXcgRXhwcmVzc2lvblJlc29sdmVyKHsgbmFtZTogU0NPUEVTLmRhdGEsIGNvbnRleHQ6IGRhdGEgPyBkYXRhIDoge30sIHBhcmVudDogQVBQTElDQVRJT05fU0NPUEVfUkVTT0xWRVIgfSk7XG5cdH1cblxuXHQvKipcblx0ICogQHBhcmFtXG5cdCAqIFx0XHRjb250YWluZXIgSFRNTEVsZW1lbnQgLT4gdGFyZ2V0IHRvIHJlbmRlciBpblxuXHQgKiBAcGFyYW1cblx0ICogXHRcdGRhdGEgT2JqZWN0fC4uLiAtPiBkYXRhIHRvIHVzZWQgYXQgcmVuZGVyaW5nXG5cdCAqIEBwYXJhbVxuXHQgKiBcdFx0dGVtcGxhdGUgVGVtcGxhdGV8Tm9kZXxOb2RlTGlzdHxIVE1MQ29sbGVjdGlvbnxTdHJpbmcgLT4gdGVtcGxhdGUgdG8gcmVuZGVyXG5cdCAqIEBwYXJhbVxuXHQgKiBcdFx0bW9kZSBcImFwcGVuZFwifFwiaW5zZXJ0XCJ8XCJyZXBsYWNlXCJcblx0ICogQHBhcmFtXG5cdCAqIFx0XHR0YXJnZXRcblx0ICovXG5cdGFzeW5jIHJlbmRlcihjb250ZXh0KSB7XG5cdFx0Y29uc3QgY2FsbGVkV2l0aENvbnRleHQgPSBjb250ZXh0IGluc3RhbmNlb2YgQ29udGV4dDtcblx0XHRpZiAoIWNhbGxlZFdpdGhDb250ZXh0KSB7XG5cdFx0XHRsZXQgeyB0ZW1wbGF0ZSA9IG51bGwsIGRhdGEgPSBudWxsLCBjb250YWluZXIsIHJvb3QsIG1vZGUsIHRhcmdldCB9ID0gY29udGV4dDtcblx0XHRcdHRlbXBsYXRlID0gYXdhaXQgbG9hZFRlbXBsYXRlQ29udGVudCh0ZW1wbGF0ZSwgdGhpcyk7XG5cdFx0XHRjb25zdCByZXNvbHZlciA9IG5ldyBFeHByZXNzaW9uUmVzb2x2ZXIoeyBuYW1lOiBTQ09QRVMucmVuZGVyLCBjb250ZXh0OiBkYXRhLCBwYXJlbnQ6IHRoaXMucmVzb2x2ZXIgfSk7XG5cdFx0XHRjb250ZXh0ID0gbmV3IENvbnRleHQoeyByZXNvbHZlciwgcmVuZGVyZXI6IHRoaXMsIHRlbXBsYXRlOiB0ZW1wbGF0ZSwgY29udGFpbmVyLCByb290OiByb290ID8gcm9vdCA6IGNvbnRhaW5lciwgbW9kZTogbW9kZSA/IG1vZGUgOiBcInJlcGxhY2VcIiwgdGFyZ2V0IH0pO1xuXHRcdH0gZWxzZSBpZiAoY29udGV4dC5jbG9zZWQpIHRocm93IG5ldyBFcnJvcihcImNhbGxpbmcgd2l0aCBjbG9zZWQgY29udGV4dFwiLCBjb250ZXh0KTtcblxuXHRcdGNvbnN0IHRlbXBsYXRlID0gY29udGV4dC50ZW1wbGF0ZTtcblx0XHRpZiAodGVtcGxhdGUgaW5zdGFuY2VvZiBOb2RlKSBhd2FpdCByZW5kZXJOb2RlKGNvbnRleHQpO1xuXHRcdGVsc2UgYXdhaXQgcmVuZGVyQ29udGFpbmVyKGNvbnRleHQpO1xuXHRcdFxuXHRcdGF3YWl0IGFkZENvbnRlbnQoY29udGV4dCk7XG5cblx0XHRpZiAoIWNhbGxlZFdpdGhDb250ZXh0KVxuXHRcdFx0YXdhaXQgY29udGV4dC5yZWFkeSgpO1xuXG5cdFx0cmV0dXJuIGNvbnRleHQ7XG5cdH1cblxuXHRzdGF0aWMgYXN5bmMgYnVpbGQoeyB0ZW1wbGF0ZSwgZGF0YSB9ID0ge30pIHtcblx0XHRpZiAodGVtcGxhdGUgJiYgdGVtcGxhdGUgaW5zdGFuY2VvZiBQcm9taXNlKSB0ZW1wbGF0ZSA9IGF3YWl0IHRlbXBsYXRlO1xuXG5cdFx0dGVtcGxhdGUgPSB0ZW1wbGF0ZSA/IGF3YWl0IFRlbXBsYXRlLmxvYWQodGVtcGxhdGUpIDogbnVsbDtcblx0XHRyZXR1cm4gbmV3IFJlbmRlcmVyKHsgdGVtcGxhdGUsIGRhdGEgfSk7XG5cdH1cblxuXHRzdGF0aWMgYXN5bmMgcmVuZGVyKHsgY29udGFpbmVyLCBkYXRhLCB0ZW1wbGF0ZSwgbW9kZSwgdGFyZ2V0IH0pIHtcblx0XHRjb25zdCByZW5kZXJlciA9IG5ldyBSZW5kZXJlcih7IHRlbXBsYXRlLCBkYXRhIH0pO1xuXHRcdHJldHVybiByZW5kZXJlci5yZW5kZXIoeyBjb250YWluZXIsIG1vZGUsIHRhcmdldCB9KTtcblx0fVxufVxuIiwiaW1wb3J0IFwiQGRlZmF1bHQtanMvZGVmYXVsdGpzLWNvbW1vbi11dGlscy9zcmMvamF2YXNjcmlwdC9TdHJpbmcuanNcIjtcblxuY29uc3QgQ0FDSEUgPSB7fTtcbmNvbnN0IGdldEtleSA9ICh0ZW1wbGF0ZSwgY2FjaGUsIGFsaWFzKSA9PiB7XG5cdGlmICghY2FjaGUpIHJldHVybiBudWxsO1xuXG5cdGxldCBrZXkgPSBudWxsO1xuXHRpZiAoYWxpYXMpIGtleSA9IGFsaWFzO1xuXHRlbHNlIGlmICh0eXBlb2YgdGVtcGxhdGUgPT09IFwic3RyaW5nXCIpIGtleSA9IHRlbXBsYXRlO1xuXHRlbHNlIGlmICh0ZW1wbGF0ZSBpbnN0YW5jZW9mIFVSTCkga2V5ID0gdGVtcGxhdGUudG9TdHJpbmcoKTtcblx0ZWxzZSBpZiAodGVtcGxhdGUgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkga2V5ID0gdGVtcGxhdGUuc2VsZWN0b3IoKTtcblxuXHRpZiAoa2V5KSByZXR1cm4ga2V5Lmhhc2hjb2RlKCk7XG5cblx0cmV0dXJuIG51bGw7XG59O1xuXG5jb25zdCBmcm9tVVJMID0gYXN5bmMgKHVybCwgY2FjaGUsIGtleSkgPT4ge1xuXHRjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybC50b1N0cmluZygpKTtcblx0Y29uc3Qgc291cmNlID0gYXdhaXQgcmVzcG9uc2UudGV4dCgpO1xuXHRyZXR1cm4gZnJvbVNvdXJjZShzb3VyY2UsIGNhY2hlLCBrZXkpO1xufTtcblxuY29uc3QgZnJvbVNvdXJjZSA9IGFzeW5jIChzb3VyY2UsIGNhY2hlLCBrZXkpID0+IHtcblx0cmV0dXJuIGZyb21FbGVtZW50KGNyZWF0ZShzb3VyY2UsIHRydWUpLCBjYWNoZSwga2V5KTtcbn07XG5cbmNvbnN0IGZyb21FbGVtZW50ID0gYXN5bmMgKGVsZW1lbnQsIGNhY2hlLCBrZXkpID0+IHtcblx0bGV0IHRlbXBsYXRlID0gbnVsbDtcblx0aWYgKGVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MVGVtcGxhdGVFbGVtZW50KSB0ZW1wbGF0ZSA9IG5ldyBUZW1wbGF0ZShlbGVtZW50LCBrZXkpO1xuXHRlbHNlIHtcblx0XHR0ZW1wbGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZW1wbGF0ZVwiKTtcblx0XHRpZiAoZWxlbWVudCBpbnN0YW5jZW9mIE5vZGUgfHwgZWxlbWVudCBpbnN0YW5jZW9mIE5vZGVMaXN0IHx8IGVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MQ29sbGVjdGlvbiB8fCBlbGVtZW50IGluc3RhbmNlb2YgQXJyYXkpIHRlbXBsYXRlLmNvbnRlbnQuYXBwZW5kKGVsZW1lbnQuY2xvbmVOb2RlKHRydWUpKTtcblx0XHRlbHNlIHRocm93IG5ldyBFcnJvcihcIlRlbXBsYXRlIHR5cGUgaXMgbm90IHN1cHBvcnRlZCFcIik7XG5cblx0XHR0ZW1wbGF0ZSA9IG5ldyBUZW1wbGF0ZSh0ZW1wbGF0ZSwga2V5KTtcblx0fVxuXG5cdGlmICghdGVtcGxhdGUpIHRocm93IG5ldyBFcnJvcihcIlRlbXBsYXRlIGNhbid0IGxvYWRlZCFcIik7XG5cblx0aWYgKGNhY2hlICYmIGtleSkgQ0FDSEVba2V5XSA9IHRlbXBsYXRlO1xuXG5cdHJldHVybiB0ZW1wbGF0ZTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRlbXBsYXRlIHtcblx0Y29uc3RydWN0b3IodGVtcGxhdGUsIGtleSkge1xuXHRcdHRoaXMudGVtcGxhdGUgPSB0ZW1wbGF0ZTtcblx0XHR0aGlzLmtleSA9IGtleTtcblx0fVxuXG5cdGltcG9ydENvbnRlbnQoZG9jID0gZG9jdW1lbnQpIHtcblx0XHRsZXQgaW1wb3J0ZWQgPSBkb2MuaW1wb3J0Tm9kZSh0aGlzLnRlbXBsYXRlLCB0cnVlKTtcblx0XHRyZXR1cm4gaW1wb3J0ZWQuY29udGVudC5jaGlsZE5vZGVzO1xuXHR9XG5cblx0cmVtb3ZlKCkge1xuXHRcdGlmICh0aGlzLmtleSAmJiBDQUNIRVt0aGlzLmtleV0pIGRlbGV0ZSBDQUNIRVt0aGlzLmtleV07XG5cdH1cblxuXHRzdGF0aWMgYXN5bmMgZmV0Y2godXJsLCBjYWNoZSA9IHRydWUsIGFsaWFzID0gbnVsbCkge1xuXHRcdGlmICh0eXBlb2YgdXJsID09PSBcInN0cmluZ1wiKSB7XG5cdFx0XHRyZXR1cm4gVGVtcGxhdGUubG9hZChuZXcgVVJMKHVybCwgbG9hY3Rpb24pLCBjYWNoZSwgYWxpYXMpO1xuXHRcdH0gZWxzZSBpZiAodXJsIGluc3RhbmNlb2YgVVJMKSByZXR1cm4gVGVtcGxhdGUubG9hZCh1cmwsIGNhY2hlLCBhbGlhcyk7XG5cblx0XHRuZXcgRXJyb3IoXCJUaGUgdXJsIGlzbid0IGEgYWxsb3dlZCB0eXBlISAtPiBbU3RyaW5nfFVSTF0gcmVxdWlyZWQhXCIpO1xuXHR9XG5cblx0c3RhdGljIGFzeW5jIGxvYWQodGVtcGxhdGUsIGNhY2hlID0gdHJ1ZSwgYWxpYXMgPSBudWxsKSB7XG5cdFx0aWYgKHRlbXBsYXRlIGluc3RhbmNlb2YgVGVtcGxhdGUpIHJldHVybiB0ZW1wbGF0ZTtcblxuXHRcdGNvbnN0IGtleSA9IGdldEtleSh0ZW1wbGF0ZSwgY2FjaGUsIGFsaWFzKTtcblx0XHRpZiAoa2V5ICYmIENBQ0hFW2tleV0pIHJldHVybiBDQUNIRVtrZXldO1xuXHRcdGVsc2UgaWYgKHR5cGVvZiB0ZW1wbGF0ZSA9PT0gXCJzdHJpbmdcIikge1xuXHRcdFx0cmV0dXJuIGZyb21Tb3VyY2UodGVtcGxhdGUsIGNhY2hlLCBrZXkpO1xuXHRcdH0gZWxzZSBpZiAodGVtcGxhdGUgaW5zdGFuY2VvZiBVUkwpIHJldHVybiBhd2FpdCBmcm9tVVJMKHRlbXBsYXRlLCBjYWNoZSwga2V5KTtcblx0XHRlbHNlIGlmICh0ZW1wbGF0ZSBpbnN0YW5jZW9mIE5vZGUgfHwgdGVtcGxhdGUgaW5zdGFuY2VvZiBOb2RlTGlzdCB8fCB0ZW1wbGF0ZSBpbnN0YW5jZW9mIEhUTUxDb2xsZWN0aW9uIHx8IHRlbXBsYXRlIGluc3RhbmNlb2YgSFRNTFRlbXBsYXRlRWxlbWVudCkgcmV0dXJuIGZyb21FbGVtZW50KHRlbXBsYXRlLCBjYWNoZSwga2V5KTtcblxuXHRcdG5ldyBFcnJvcihcIlRoZSB0ZW1wbGF0ZSBpc24ndCBhIGFsbG93ZWQgdHlwZSEgLT4gW1N0cmluZ3xVUkx8Tm9kZXxOb2RlTGlzdHxIVE1MQ29sbGVjdGlvbnxUZW1wbGF0ZV0gcmVxdWlyZWQhXCIpO1xuXHR9XG59XG4iLCJpbXBvcnQgRGlyZWN0aXZlIGZyb20gXCIuLi9EaXJlY3RpdmUuanNcIjtcblxuY29uc3QgQVRUUklCVVRFX05BTUUgPSAvKGpzdGwpPyhcXD8pPyhAKT8oW15cXD9AXSspL2k7XG5cbmNvbnN0IGJpbmRBdHRyaWJ1dGUgPSBhc3luYyAoeyBjb25kaXRpb24sIG5hbWUsIHZhbHVlLCBjb250ZXh0IH0pID0+IHtcblx0Y29uc3QgeyByZXNvbHZlciwgY29udGVudCwgdGVtcGxhdGUgfSA9IGNvbnRleHQ7XG5cdFx0XG5cdGxldCBhdHRyaWJ1dGUgPSAhY29uZGl0aW9uID8gdmFsdWUgOiB0ZW1wbGF0ZS5hdHRyKG5hbWUpO1xuXHRjb25kaXRpb24gPSBjb25kaXRpb24gPyB2YWx1ZSA6IHRlbXBsYXRlLmF0dHIoXCI/XCIgKyBuYW1lKTtcblx0Y29uc3QgaGFzVmFsdWUgPSBpc1ZhbHVlKGF0dHJpYnV0ZSk7XG5cdFxuXHRpZiAoY29uZGl0aW9uICYmIGhhc1ZhbHVlKSB7XG5cdFx0Y29uZGl0aW9uID0gYXdhaXQgcmVzb2x2ZXIucmVzb2x2ZShjb25kaXRpb24sIGZhbHNlKTtcblx0XHRpZiAoY29uZGl0aW9uID09PSB0cnVlKVxuXHRcdFx0Y29udGVudC5hdHRyKG5hbWUsIGF3YWl0IHJlc29sdmVyLnJlc29sdmVUZXh0KGF0dHJpYnV0ZSwgYXR0cmlidXRlKSk7XG5cdH0gZWxzZSBpZiAoY29uZGl0aW9uKSB7XG5cdFx0Y29uZGl0aW9uID0gYXdhaXQgcmVzb2x2ZXIucmVzb2x2ZShjb25kaXRpb24sIGZhbHNlKTtcblx0XHRpZiAoY29uZGl0aW9uID09PSB0cnVlKVxuXHRcdFx0Y29udGVudC5hdHRyKG5hbWUsIHRydWUpO1xuXHR9IGVsc2UgaWYgKGhhc1ZhbHVlKSB7XG5cdFx0Y29udGVudC5hdHRyKG5hbWUsIGF3YWl0IHJlc29sdmVyLnJlc29sdmVUZXh0KGF0dHJpYnV0ZSwgYXR0cmlidXRlKSk7XG5cdH1cbn07XG5cbmNvbnN0IGlzVmFsdWUgPSAodmFsdWUpID0+IHtcblx0cmV0dXJuIHZhbHVlICE9IG51bGwgJiYgdHlwZW9mIHZhbHVlICE9PSBcInVuZGVmaW5lZFwiO1x0XG59O1xuXG5jb25zdCBiaW5kRXZlbnQgPSBhc3luYyAoeyBjb25kaXRpb24sIG5hbWUsIHZhbHVlLCBjb250ZXh0IH0pID0+IHtcblx0Y29uc3QgeyByZXNvbHZlciwgdGVtcGxhdGUgfSA9IGNvbnRleHQ7XG5cdFxuXHRjb25kaXRpb24gPSBjb25kaXRpb24gPyB2YWx1ZSA6IHRlbXBsYXRlLmF0dHIoXCI/QFwiICsgbmFtZSk7XG5cdGxldCBoYW5kbGUgPSAhY29uZGl0aW9uID8gdmFsdWUgOiB0ZW1wbGF0ZS5hdHRyKFwiQFwiKyBuYW1lKTtcblx0bGV0IHNwbGl0ID0gbmFtZS5zcGxpdChcIjpcIik7XG5cdGNvbnN0IGV2ZW50ID0gc3BsaXQuc2hpZnQoKTtcblx0Y29uc3QgdHlwZSA9IHNwbGl0LnNoaWZ0KCkgfHwgXCJkZWZhdWx0XCI7XG5cdFxuXG5cdGlmIChjb25kaXRpb24gJiYgaGFuZGxlKXtcblx0XHRpZihhd2FpdCByZXNvbHZlci5yZXNvbHZlKGNvbmRpdGlvbiwgZmFsc2UpID09IHRydWUpXG5cdFx0XHRhd2FpdCBiaW5kaW5nKHtldmVudCwgdHlwZSwgaGFuZGxlLCBjb250ZXh0IH0pO1xuXHR9XG5cdGVsc2UgaWYgKGhhbmRsZSlcblx0XHRhd2FpdCBiaW5kaW5nKHtldmVudCwgdHlwZSwgaGFuZGxlLCBjb250ZXh0IH0pO1xufTtcblxuY29uc3QgYmluZGluZyA9IGFzeW5jICh7ZXZlbnQsIHR5cGUsIGhhbmRsZSwgY29udGV4dCB9KSA9PiB7XG5cdGNvbnN0IHsgcmVzb2x2ZXIsIGNvbnRlbnR9ID0gY29udGV4dDtcblx0XHRcblx0aWYodHlwZSA9PSBcImRlbGVnYXRlXCIpe1xuXHRcdGNvbnN0IGV2ZW50aGFuZGxlID0gYXdhaXQgcmVzb2x2ZXIucmVzb2x2ZVRleHQoaGFuZGxlLCBoYW5kbGUpO1xuXHRcdGNvbnRlbnQub24oZXZlbnQsIGRlbGVnYXRlcihldmVudGhhbmRsZSkpO1xuXHR9IGVsc2Uge1x0XHRcblx0XHRjb25zdCBldmVudGhhbmRsZSA9IGF3YWl0IHJlc29sdmVyLnJlc29sdmUoaGFuZGxlLCBoYW5kbGUpO1xuXHRcblx0XHRpZighZXZlbnRoYW5kbGUpXG5cdFx0XHRjb25zb2xlLmVycm9yKG5ldyBFcnJvcihcIkNhbid0IHJlc29sdmUgXFxcIlwiICsgaGFuZGxlICsgXCJcXFwiIHRvIGV2ZW50IGhhbmRsZSFcIikpXG5cdFx0ZWxzZSBpZih0eXBlb2YgZXZlbnRoYW5kbGUgPT09IFwiZnVuY3Rpb25cIilcblx0XHRcdGNvbnRlbnQub24oZXZlbnQsIGV2ZW50aGFuZGxlKTtcblx0XHRlbHNlIGlmKHR5cGVvZiBldmVudGhhbmRsZSA9PT0gXCJzdHJpbmdcIilcblx0XHRcdGNvbnRlbnQub24oZXZlbnQsIGRlbGVnYXRlcihldmVudGhhbmRsZSkpO1xuXHRcdGVsc2UgaWYodHlwZW9mIGV2ZW50aGFuZGxlID09PSBcIm9iamVjdFwiKXtcdFxuXHRcdFx0Y29uc3Qge2NhcHR1cmU9ZmFsc2UsIHBhc3NpdmU9ZmFsc2UsIG9uY2U9ZmFsc2V9ID0gaGFuZGxlO1x0XHRcblx0XHRcdGNvbnRlbnQub24oZXZlbnQsIGV2ZW50aGFuZGxlLmV2ZW50SGFuZGxlLCB7Y2FwdHVyZSwgcGFzc2l2ZSwgb25jZX0pO1xuXHRcdH1cblx0fVxufTtcblxuY29uc3QgZGVsZWdhdGVyID0gZnVuY3Rpb24oZGVsZWdhdGUpIHtcblx0cmV0dXJuIGZ1bmN0aW9uKGV2ZW50KSB7XG5cdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblx0XHRpZihldmVudC5jdXJyZW50VGFyZ2V0KVx0XG5cdFx0XHRldmVudC5jdXJyZW50VGFyZ2V0LnRyaWdnZXIoZGVsZWdhdGUsIGV2ZW50KTtcblx0XHRlbHNlXG5cdFx0XHRldmVudC50YXJnZXQudHJpZ2dlcihkZWxlZ2F0ZSwgZXZlbnQpO1xuXHR9O1xufTtcblxuXG5jbGFzcyBBdHRyaWJ1dGUgZXh0ZW5kcyBEaXJlY3RpdmUge1xuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRzdXBlcigpO1xuXHR9XG5cblx0Z2V0IG5hbWUoKSB7IHJldHVybiBcImF0dHJpYnV0ZVwiIH1cblx0Z2V0IHJhbmsoKSB7IHJldHVybiBEaXJlY3RpdmUuTUlOX1JBTksgfVxuXHRnZXQgcGhhc2UoKSB7IHJldHVybiBEaXJlY3RpdmUuUEhBU0UuY29udGVudCB9XG5cblxuXHRhc3luYyBleGVjdXRlKGNvbnRleHQpIHtcblx0XHRjb25zdCB7IHRlbXBsYXRlIH0gPSBjb250ZXh0O1xuXHRcdGlmICghKHRlbXBsYXRlIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpKVxuXHRcdFx0cmV0dXJuIGNvbnRleHQ7XG5cblx0XHRjb25zdCBwcm9jZXNzZWQgPSBuZXcgU2V0KCk7XG5cdFx0Zm9yIChjb25zdCBhdHRyaWJ1dGUgb2YgdGVtcGxhdGUuYXR0cmlidXRlcykge1xuXHRcdFx0Y29uc3QgWywganN0bCwgY29uZGl0aW9uLCBldmVudCwgbmFtZV0gPSBBVFRSSUJVVEVfTkFNRS5leGVjKGF0dHJpYnV0ZS5uYW1lKTtcblx0XHRcdGlmICghanN0bCAmJiAhcHJvY2Vzc2VkLmhhcyhuYW1lKSkge1xuXHRcdFx0XHRjb25zdCB2YWx1ZSA9IGF0dHJpYnV0ZS52YWx1ZTtcblx0XHRcdFx0XHRcdFx0XHRcblx0XHRcdFx0aWYgKGV2ZW50KVxuXHRcdFx0XHRcdGF3YWl0IGJpbmRFdmVudCh7IGNvbmRpdGlvbiwgZXZlbnQsIG5hbWUsIHZhbHVlLCBjb250ZXh0IH0pXG5cdFx0XHRcdGVsc2Vcblx0XHRcdFx0XHRhd2FpdCBiaW5kQXR0cmlidXRlKHsgY29uZGl0aW9uLCBuYW1lLCB2YWx1ZSwgY29udGV4dCB9KVxuXHRcdFx0fVxuXHRcdFx0cHJvY2Vzc2VkLmFkZChuYW1lKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gY29udGV4dDtcblx0fVxufVxuXG5EaXJlY3RpdmUuZGVmaW5lKHsgZGlyZWN0aXZlOiBuZXcgQXR0cmlidXRlKCkgfSk7IiwiaW1wb3J0IERpcmVjdGl2ZSBmcm9tIFwiLi4vRGlyZWN0aXZlLmpzXCI7XG5cbmNsYXNzIENob29zZSBleHRlbmRzIERpcmVjdGl2ZSB7XG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHN1cGVyKCk7XG5cdH1cblxuXHRnZXQgbmFtZSgpIHsgcmV0dXJuIFwiY2hvb3NlXCIgfVxuXHRnZXQgcmFuaygpIHsgcmV0dXJuIERpcmVjdGl2ZS5NSU5fUkFOSyArIDEgfVxuXHRnZXQgcGhhc2UoKSB7IHJldHVybiBEaXJlY3RpdmUuUEhBU0UudGVtcGxhdGUgfVxuXG5cdGFzeW5jIGV4ZWN1dGUoY29udGV4dCkge1xuXHRcdGlmICghKGNvbnRleHQudGVtcGxhdGUgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkgfHwgIWNvbnRleHQudGVtcGxhdGUuaGFzQXR0cmlidXRlKFwianN0bC1jaG9vc2VcIikgfHwgY29udGV4dC50ZW1wbGF0ZS5jaGlsZHJlbi5sZW5ndGggPT0gMClcblx0XHRcdHJldHVybiBjb250ZXh0O1xuXG5cdFx0Y29uc3QgeyB0ZW1wbGF0ZSwgcmVzb2x2ZXIgfSA9IGNvbnRleHQ7XG5cdFx0bGV0IHJlc29sdmVkID0gZmFsc2U7XG5cdFx0Y29uc3Qgd2hlbnMgPSB0ZW1wbGF0ZS5maW5kKFwiOnNjb3BlID4gW2pzdGwtd2hlbl1cIik7XG5cdFx0Y29uc3QgbGVuZ3RoID0gd2hlbnMubGVuZ3RoO1xuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcblx0XHRcdGNvbnN0IG5vZGUgPSB3aGVuc1tpXTtcblx0XHRcdGlmICghcmVzb2x2ZWQgJiYgKGF3YWl0IHJlc29sdmVyLnJlc29sdmUobm9kZS5hdHRyKFwianN0bC13aGVuXCIpLCBmYWxzZSkpKVxuXHRcdFx0XHRyZXNvbHZlZCA9IHRydWU7XG5cdFx0XHRlbHNlXG5cdFx0XHRcdG5vZGUucmVtb3ZlKCk7XG5cdFx0fVxuXG5cdFx0aWYgKHJlc29sdmVkKVxuXHRcdFx0dGVtcGxhdGUuZmluZChcIjpzY29wZSA+IFtqc3RsLW90aGVyd2lzZV1cIikucmVtb3ZlKCk7XG5cblx0XHRyZXR1cm4gY29udGV4dDtcblx0fVxufVxuXG5EaXJlY3RpdmUuZGVmaW5lKHsgZGlyZWN0aXZlOiBuZXcgQ2hvb3NlKCkgfSk7IiwiaW1wb3J0IERpcmVjdGl2ZSBmcm9tIFwiLi4vRGlyZWN0aXZlLmpzXCI7XG5pbXBvcnQgRXhwcmVzc2lvblJlc29sdmVyIGZyb20gXCJAZGVmYXVsdC1qcy9kZWZhdWx0anMtZXhwcmVzc2lvbi1sYW5ndWFnZS9zcmMvRXhwcmVzc2lvblJlc29sdmVyXCI7XG5cbmNvbnN0IE1PREVTID0ge1xuXHRcInJlbW90ZVwiOiBhc3luYyAoeyBkYXRhLCBjb250ZXh0IH0pID0+IHtcdFx0XG5cdFx0Y29uc3Qge3Jlc29sdmVyLCB0ZW1wbGF0ZX0gPSBjb250ZXh0O1xuXHRcdGRhdGEgPSBhd2FpdCByZXNvbHZlci5yZXNvbHZlVGV4dChkYXRhKTtcblx0XHRkYXRhID0gbmV3IFVSTChkYXRhLCBsb2NhdGlvbi5vcmlnaW4pO1xuXHRcdGxldCBvcHRpb24gPSBhd2FpdCByZXNvbHZlci5yZXNvbHZlVGV4dCh0ZW1wbGF0ZS5hdHRyKFwianN0bC1kYXRhLW9wdGlvblwiKSB8fCBcInt9XCIpO1xuXHRcdG9wdGlvbiA9IEpTT04ucGFyc2Uob3B0aW9uKTtcblxuXHRcdGRhdGEgPSBhd2FpdCBmZXRjaChkYXRhLnRvU3RyaW5nKCksIG9wdGlvbik7XG5cdFx0cmV0dXJuIGRhdGEuanNvbigpO1xuXHR9LFx0XG5cdFwic2V0XCI6IGFzeW5jICh7IGRhdGEsIGNvbnRleHQgfSkgPT4ge1xuXHRcdGNvbnN0IHtyZXNvbHZlcn0gPSBjb250ZXh0O1xuXHRcdFxuXHRcdGRhdGEgPSBhd2FpdCByZXNvbHZlci5yZXNvbHZlKGRhdGEpO1xuXHRcdHJldHVybiBkYXRhO1xuXHR9LFxuXHRcImRpcmVjdFwiOiBhc3luYyAoeyBkYXRhLCBjb250ZXh0IH0pID0+IHtcblx0XHRjb25zdCB7cmVzb2x2ZXJ9ID0gY29udGV4dDtcblx0XHRcblx0XHRkYXRhID0gYXdhaXQgcmVzb2x2ZXIucmVzb2x2ZVRleHQoZGF0YSk7XG5cdFx0cmV0dXJuIGRhdGE7XG5cdH1cbn07XG5cbmNvbnN0IHVwZGF0ZUNvbnRleHQgPSAoeyB2YXJuYW1lLCBkYXRhLCBzY29wZSwgY29udGV4dCB9KSA9PiB7XG5cdGlmICh2YXJuYW1lKVxuXHRcdGNvbnRleHQucmVzb2x2ZXIudXBkYXRlRGF0YSh2YXJuYW1lLCBkYXRhLCBzY29wZSk7XG5cdGVsc2UgaWYgKHNjb3BlKVxuXHRcdGNvbnRleHQucmVzb2x2ZXIubWVyZ2VDb250ZXh0KGRhdGEsIHNjb3BlKTtcblx0ZWxzZXtcblx0XHRjb25zdCByZXNvbHZlciA9IG5ldyBFeHByZXNzaW9uUmVzb2x2ZXIoeyBjb250ZXh0OiBkYXRhLCBuYW1lOiBcImpzdGwtZGF0YVwiLCBwYXJlbnQ6IGNvbnRleHQucmVzb2x2ZXIgfSk7XG5cdFx0Ly9jb250ZXh0ID0gY29udGV4dC5zdWJDb250ZXh0KHtyZXNvbHZlcn0pO1xuXHRcdGNvbnRleHQucmVzb2x2ZXIgPSByZXNvbHZlcjtcblx0fVxuXHRcblx0XHRcblx0cmV0dXJuIGNvbnRleHQ7XG59O1xuXG5cblxuY2xhc3MgRGF0YSBleHRlbmRzIERpcmVjdGl2ZSB7XG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHN1cGVyKCk7XG5cdH1cblxuXHRnZXQgbmFtZSgpIHsgcmV0dXJuIFwiZGF0YVwiIH1cblx0Z2V0IHJhbmsoKSB7IHJldHVybiAxMDAwIH1cblx0Z2V0IHBoYXNlKCl7cmV0dXJuIERpcmVjdGl2ZS5QSEFTRS5kYXRhfVxuXG5cdGFzeW5jIGV4ZWN1dGUoY29udGV4dCkge1xuXHRcdGlmICghKGNvbnRleHQudGVtcGxhdGUgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkgfHwgIWNvbnRleHQudGVtcGxhdGUuYXR0cihcImpzdGwtZGF0YVwiKSlcblx0XHRcdHJldHVybiBjb250ZXh0O1xuXHRcdFx0XG5cdFx0dHJ5IHtcblx0XHRcdGNvbnN0IHsgdGVtcGxhdGUgfSA9IGNvbnRleHQ7XHRcdFx0XG5cdFx0XHRjb25zdCBtb2RlID0gTU9ERVNbKHRlbXBsYXRlLmF0dHIoXCJqc3RsLWRhdGEtbW9kZVwiKSB8fCBcInJlbW90ZVwiKV07XG5cdFx0XHRpZiAoIW1vZGUpXG5cdFx0XHRcdHRocm93IG5ldyBFcnJvcihcIlRoZSBqc3RsLWRhdGEtbW9kZSBpcyB1bnN1cHBvcnRlZCFcIik7XG5cblx0XHRcdGxldCBkYXRhID0gdGVtcGxhdGUuYXR0cihcImpzdGwtZGF0YVwiKTtcblx0XHRcdGRhdGEgPSBhd2FpdCBtb2RlKHsgZGF0YSwgY29udGV4dCB9KTtcblxuXHRcdFx0Y29uc3QgdmFybmFtZSA9IHRlbXBsYXRlLmF0dHIoXCJqc3RsLWRhdGEtdmFyXCIpO1xuXHRcdFx0Y29uc3Qgc2NvcGUgPSB0ZW1wbGF0ZS5hdHRyKFwianN0bC1kYXRhLXNjb3BlXCIpO1xuXHRcdFx0Y29udGV4dCA9IHVwZGF0ZUNvbnRleHQoeyB2YXJuYW1lLCBkYXRhLCBzY29wZSwgY29udGV4dCB9KTtcblx0XHR9IGNhdGNoIChlKSB7XG5cdFx0XHRjb25zb2xlLmVycm9yKGUsIGNvbnRleHQudGVtcGxhdGUpO1xuXHRcdH1cblxuXHRcdHJldHVybiBjb250ZXh0O1xuXG5cdH1cbn1cblxuRGlyZWN0aXZlLmRlZmluZSh7IGRpcmVjdGl2ZTogbmV3IERhdGEoKSB9KTsiLCJpbXBvcnQgRGlyZWN0aXZlIGZyb20gXCIuLi9EaXJlY3RpdmUuanNcIjtcbmltcG9ydCBFeHByZXNzaW9uUmVzb2x2ZXIgZnJvbSBcIkBkZWZhdWx0LWpzL2RlZmF1bHRqcy1leHByZXNzaW9uLWxhbmd1YWdlL3NyYy9FeHByZXNzaW9uUmVzb2x2ZXIuanNcIjtcblxuY29uc3QgQVRUUklCVVRFID0ge1xuXHREQVRBOiBcImpzdGwtZm9yZWFjaFwiLFxuXHRWQVI6IFwianN0bC1mb3JlYWNoLXZhclwiLFxuXHRTVEFUVVM6IFwianN0bC1mb3JlYWNoLXN0YXR1c1wiLFxuXHRDT1VOVDogXCJqc3RsLWZvcmVhY2gtY291bnRcIixcblx0U1RBUlQ6IFwianN0bC1mb3JlYWNoLXN0YXJ0XCIsXG5cdFNURVA6IFwianN0bC1mb3JlYWNoLXN0ZXBcIixcblx0Q09ORElUSU9OOiBcImpzdGwtZm9yZWFjaC1jb25kaXRpb25cIlxufTtcblxuY29uc3QgZG9Db3VudCA9IGFzeW5jIChvcHRpb24pID0+IHtcblx0bGV0IHsgc3RhcnQsIHN0ZXAsIGNvdW50LCB2YXJuYW1lLCBzdGF0dXMsIHJlc29sdmVyIH0gPSBvcHRpb247XG5cblx0Y291bnQgPSBhd2FpdCByZXNvbHZlci5yZXNvbHZlKGNvdW50KTtcblx0Y29uc3QgbGVuZ3RoID0gc3RhcnQgKyAoY291bnQgKiBzdGVwKTtcblx0bGV0IHN0b3AgPSBmYWxzZTtcblx0Zm9yIChsZXQgaSA9IHN0YXJ0OyBpIDwgbGVuZ3RoICYmICFzdG9wOyBpID0gaSArIHN0ZXApIHtcblx0XHRjb25zdCBpdGVyYXRpb24gPSB7fVxuXHRcdGl0ZXJhdGlvblt2YXJuYW1lXSA9IGk7XG5cdFx0aXRlcmF0aW9uW3N0YXR1c10gPSB7XG5cdFx0XHRpbmRleDogaSxcblx0XHRcdG51bWJlcjogaSArIDEsXG5cdFx0XHRzdGVwLFxuXHRcdFx0Y291bnRcblx0XHR9O1xuXHRcdHN0b3AgPSAhKGF3YWl0IGl0ZXJhdGUoaXRlcmF0aW9uLCBvcHRpb24pKTtcblx0fVxufTtcblxuY29uc3QgZG9Gb3JlYWNoID0gYXN5bmMgKG9wdGlvbikgPT4ge1xuXHRsZXQgeyBkYXRhLCBzdGFydCwgc3RlcCwgY291bnQsIHZhcm5hbWUsIHN0YXR1cywgcmVzb2x2ZXIgfSA9IG9wdGlvbjtcblxuXHRkYXRhID0gYXdhaXQgcmVzb2x2ZXIucmVzb2x2ZShkYXRhKTtcblx0bGV0IGFycmF5ID0gZGF0YTtcblx0aWYgKCEoZGF0YSBpbnN0YW5jZW9mIEFycmF5KSlcblx0XHRhcnJheSA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKGRhdGEpO1xuXG5cdGNvdW50ID0gY291bnQgIT0gXCJcIiA/IGF3YWl0IHJlc29sdmVyLnJlc29sdmUoY291bnQsIDApIDogbnVsbDtcblx0Y29uc3QgbGVuZ3RoID0gY291bnQgPyBNYXRoLm1pbihzdGFydCArIGNvdW50LCBhcnJheS5sZW5ndGgpIDogYXJyYXkubGVuZ3RoO1xuXHRsZXQgc3RvcCA9IGZhbHNlO1xuXHRmb3IgKGxldCBpID0gc3RhcnQ7IGkgPCBsZW5ndGggJiYgIXN0b3A7IGkgPSBpICsgc3RlcCkge1xuXHRcdGNvbnN0IGl0ZXJhdGlvbiA9IHt9XG5cdFx0aXRlcmF0aW9uW3Zhcm5hbWVdID0gZGF0YVtpXTtcblx0XHRpdGVyYXRpb25bc3RhdHVzXSA9IHtcblx0XHRcdGluZGV4OiBpLFxuXHRcdFx0bnVtYmVyOiBpICsgMSxcblx0XHRcdGNvdW50OiBsZW5ndGgsXG5cdFx0XHRkYXRhXG5cdFx0fTtcblx0XHRzdG9wID0gIShhd2FpdCBpdGVyYXRlKGl0ZXJhdGlvbiwgb3B0aW9uKSk7XG5cdH1cbn07XG5cbmNvbnN0IGl0ZXJhdGUgPSBhc3luYyAoZGF0YSwgb3B0aW9uKSA9PiB7XG5cdGxldCB7IHRlbXBsYXRlLCByZXNvbHZlciwgcmVuZGVyZXIsIGNvbnRhaW5lciwgY29uZGl0aW9uLCBjb250ZXh0IH0gPSBvcHRpb247XG5cdHJlc29sdmVyID0gbmV3IEV4cHJlc3Npb25SZXNvbHZlcih7IGNvbnRleHQ6IGRhdGEsIG5hbWU6IFwianN0bC1mb3JlYWNoXCIsIHBhcmVudDogcmVzb2x2ZXIgfSk7XG5cblx0Y29uZGl0aW9uID0gY29uZGl0aW9uID8gYXdhaXQgcmVzb2x2ZXIucmVzb2x2ZShjb25kaXRpb24sIGZhbHNlKSA6IGZhbHNlO1xuXHRpZiAoY29uZGl0aW9uKVxuXHRcdHJldHVybiBmYWxzZTtcblx0Y29uc3QgaXRlbUNvbnRleHQgPSBjb250ZXh0LnN1YkNvbnRleHQoeyByZXNvbHZlciwgY29udGFpbmVyLCB0ZW1wbGF0ZSwgbW9kZTogXCJhcHBlbmRcIiB9KTtcblx0YXdhaXQgcmVuZGVyZXIucmVuZGVyKGl0ZW1Db250ZXh0KTtcblx0YXdhaXQgaXRlbUNvbnRleHQucmVhZHkoKTtcblx0cmV0dXJuIHRydWU7XG59O1xuXG5jbGFzcyBGb3JlYWNoIGV4dGVuZHMgRGlyZWN0aXZlIHtcblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0c3VwZXIoKTtcblx0fVxuXG5cdGdldCBuYW1lKCkgeyByZXR1cm4gXCJmb3JlYWNoXCIgfVxuXHRnZXQgcmFuaygpIHsgcmV0dXJuIERpcmVjdGl2ZS5NSU5fUkFOSyArIDIgfVxuXHRnZXQgcGhhc2UoKSB7IHJldHVybiBEaXJlY3RpdmUuUEhBU0UudGVtcGxhdGUgfVxuXG5cdGFzeW5jIGV4ZWN1dGUoY29udGV4dCkge1xuXHRcdGlmICghKGNvbnRleHQudGVtcGxhdGUgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkgfHwgKCFjb250ZXh0LnRlbXBsYXRlLmF0dHIoQVRUUklCVVRFLkRBVEEpICYmICFjb250ZXh0LnRlbXBsYXRlLmF0dHIoQVRUUklCVVRFLkNPVU5UKSkpXG5cdFx0XHRyZXR1cm4gY29udGV4dDtcblxuXHRcdGNvbnRleHQuaWdub3JlID0gdHJ1ZTtcblx0XHR0cnkge1xuXHRcdFx0Y29uc3QgeyB0ZW1wbGF0ZSwgcmVzb2x2ZXIsIHJlbmRlcmVyLCBjb250ZW50IH0gPSBjb250ZXh0O1xuXHRcdFx0Y29uc3Qgb3B0aW9uID0ge1xuXHRcdFx0XHRkYXRhOiAodGVtcGxhdGUuYXR0cihBVFRSSUJVVEUuREFUQSkgfHwgXCJcIikudHJpbSgpLFxuXHRcdFx0XHRjb3VudDogKHRlbXBsYXRlLmF0dHIoQVRUUklCVVRFLkNPVU5UKSB8fCBcIlwiKS50cmltKCksXG5cdFx0XHRcdHN0YXJ0OiBhd2FpdCByZXNvbHZlci5yZXNvbHZlKHRlbXBsYXRlLmF0dHIoQVRUUklCVVRFLlNUQVJUKSB8fCBcIjBcIiksXG5cdFx0XHRcdHN0ZXA6IGF3YWl0IHJlc29sdmVyLnJlc29sdmUodGVtcGxhdGUuYXR0cihBVFRSSUJVVEUuU1RFUCkgfHwgXCIxXCIpLFxuXHRcdFx0XHR2YXJuYW1lOiAodGVtcGxhdGUuYXR0cihBVFRSSUJVVEUuVkFSKSB8fCBcIml0ZW1cIikudHJpbSgpLFxuXHRcdFx0XHRzdGF0dXM6ICh0ZW1wbGF0ZS5hdHRyKEFUVFJJQlVURS5TVEFUVVMpIHx8IFwic3RhdHVzXCIpLnRyaW0oKSxcblx0XHRcdFx0Y29uZGl0aW9uOiB0ZW1wbGF0ZS5hdHRyKEFUVFJJQlVURS5DT05ESVRJT04pLFxuXHRcdFx0XHR0ZW1wbGF0ZTogdGVtcGxhdGUuY2hpbGROb2Rlcyxcblx0XHRcdFx0cmVzb2x2ZXIsXG5cdFx0XHRcdHJlbmRlcmVyLFxuXHRcdFx0XHRjb250YWluZXI6IGNvbnRlbnQsXG5cdFx0XHRcdGNvbnRleHRcblx0XHRcdH07XG5cdFx0XHRpZiAoKCFvcHRpb24uZGF0YSB8fCBvcHRpb24uZGF0YSA9PSBcIlwiKSAmJiBvcHRpb24uY291bnQpXG5cdFx0XHRcdGF3YWl0IGRvQ291bnQob3B0aW9uKTtcblx0XHRcdGVsc2Vcblx0XHRcdFx0YXdhaXQgZG9Gb3JlYWNoKG9wdGlvbik7XG5cblx0XHR9IGNhdGNoIChlcnJvcikge1xuXHRcdFx0Y29uc29sZS5lcnJvcihcImVycm9yIGF0IGpzdGwtZm9yZWFjaDpcIiwgZXJyb3IpO1xuXHRcdH1cblx0XHRyZXR1cm4gY29udGV4dDtcblxuXHR9XG59O1xuXG5EaXJlY3RpdmUuZGVmaW5lKHsgZGlyZWN0aXZlOiBuZXcgRm9yZWFjaCgpIH0pOyIsImltcG9ydCBEaXJlY3RpdmUgZnJvbSBcIi4uL0RpcmVjdGl2ZS5qc1wiO1xuXG5jbGFzcyBJZiBleHRlbmRzIERpcmVjdGl2ZSB7XG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHN1cGVyKCk7XG5cdH1cblxuXHRnZXQgbmFtZSgpIHsgcmV0dXJuIFwiaWZcIiB9XG5cdGdldCByYW5rKCkgeyByZXR1cm4gRGlyZWN0aXZlLk1JTl9SQU5LICsgMTAwMCB9XG5cdGdldCBwaGFzZSgpIHsgcmV0dXJuIERpcmVjdGl2ZS5QSEFTRS5pbml0IH1cblxuXHRhc3luYyBleGVjdXRlKGNvbnRleHQpIHtcblx0XHRjb25zdCB7IHRlbXBsYXRlIH0gPSBjb250ZXh0O1xuXHRcdGlmICghKHRlbXBsYXRlIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpIHx8ICF0ZW1wbGF0ZS5hdHRyKFwianN0bC1pZlwiKSlcblx0XHRcdHJldHVybiBjb250ZXh0O1xuXG5cdFx0Y29uc3QgZXhwcmVzc2lvbiA9IHRlbXBsYXRlLmF0dHIoXCJqc3RsLWlmXCIpO1xuXHRcdGNvbnN0IHJlc29sdmVyID0gY29udGV4dC5yZXNvbHZlcjtcblx0XHRjb25zdCByZXN1bHQgPSBhd2FpdCByZXNvbHZlci5yZXNvbHZlKGV4cHJlc3Npb24sIGZhbHNlKTtcblx0XHRpZiAoIXJlc3VsdCkge1xuXHRcdFx0Y29udGV4dC5jb250ZW50ID0gbnVsbDtcblx0XHRcdGNvbnRleHQuc3RvcCA9IHRydWU7XG5cdFx0XHRjb250ZXh0Lmlnbm9yZSA9IHRydWU7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGNvbnRleHQ7XG5cdH1cbn1cblxuRGlyZWN0aXZlLmRlZmluZSh7IGRpcmVjdGl2ZTogbmV3IElmKCkgfSk7IiwiaW1wb3J0IERpcmVjdGl2ZSBmcm9tIFwiLi4vRGlyZWN0aXZlLmpzXCI7XG5pbXBvcnQgVGVtcGxhdGUgZnJvbSBcIi4uL1RlbXBsYXRlLmpzXCI7XG5cbmNsYXNzIEluY2x1ZGUgZXh0ZW5kcyBEaXJlY3RpdmUge1xuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRzdXBlcigpO1xuXHR9XG5cblx0Z2V0IG5hbWUoKSB7XG5cdFx0cmV0dXJuIFwiaW5jbHVkZVwiO1xuXHR9XG5cdGdldCByYW5rKCkge1xuXHRcdHJldHVybiBEaXJlY3RpdmUuTUlOX1JBTks7XG5cdH1cblx0Z2V0IHBoYXNlKCkge1xuXHRcdHJldHVybiBEaXJlY3RpdmUuUEhBU0UudGVtcGxhdGU7XG5cdH1cblxuXHRhc3luYyBleGVjdXRlKGNvbnRleHQpIHtcblx0XHRpZiAoIShjb250ZXh0LnRlbXBsYXRlIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpIHx8ICFjb250ZXh0LnRlbXBsYXRlLmF0dHIoXCJqc3RsLWluY2x1ZGVcIikpIHJldHVybiBjb250ZXh0O1xuXHRcdHRyeSB7XG5cdFx0XHRjb25zdCB7IHRlbXBsYXRlLCByZXNvbHZlciwgcmVuZGVyZXIgfSA9IGNvbnRleHQ7XG5cdFx0XHRsZXQgaW5jbHVkZSA9IHRlbXBsYXRlLmF0dHIoXCJqc3RsLWluY2x1ZGVcIik7XG5cdFx0XHRpbmNsdWRlID0gYXdhaXQgcmVzb2x2ZXIucmVzb2x2ZVRleHQoaW5jbHVkZSk7XG5cdFx0XHRpbmNsdWRlID0gbmV3IFVSTChpbmNsdWRlLCBsb2NhdGlvbik7XG5cdFx0XHRpbmNsdWRlID0gYXdhaXQgVGVtcGxhdGUubG9hZChpbmNsdWRlKTtcblxuXHRcdFx0Y29uc3QgbW9kZSA9IHRlbXBsYXRlLmF0dHIoXCJqc3RsLWluY2x1ZGUtbW9kZVwiKSB8fCBcInJlcGxhY2VcIjtcblxuXHRcdFx0Y29uc3Qgc3ViQ29udGV4dCA9IGNvbnRleHQuc3ViQ29udGV4dCh7IHRlbXBsYXRlOiBpbmNsdWRlLCBjb250YWluZXI6IGNvbnRleHQuY29udGVudCwgbW9kZX0pO1xuXHRcdFx0YXdhaXQgcmVuZGVyZXIucmVuZGVyKHN1YkNvbnRleHQpO1xuXHRcdFx0YXdhaXQgc3ViQ29udGV4dC5yZWFkeSgpO1xuXHRcdFx0Y29udGV4dC5pZ25vcmU7XG5cblx0XHRcdHJldHVybiBjb250ZXh0O1xuXHRcdH0gY2F0Y2ggKGUpIHtcblx0XHRcdGNvbnNvbGUuZXJyb3IoZSwgY29udGV4dC50ZW1wbGF0ZSk7XG5cdFx0XHRyZXR1cm4gY29udGV4dDtcblx0XHR9XG5cdH1cbn1cblxuRGlyZWN0aXZlLmRlZmluZSh7IGRpcmVjdGl2ZTogbmV3IEluY2x1ZGUoKSB9KTtcbiIsImltcG9ydCBEaXJlY3RpdmUgZnJvbSBcIi4uL0RpcmVjdGl2ZS5qc1wiO1xuaW1wb3J0IFJlcGxhY2UgZnJvbSBcIi4uL2VsZW1lbnRzL1JlcGxhY2UuanNcIjtcblxuY2xhc3MgSW5pdGlhbCBleHRlbmRzIERpcmVjdGl2ZSB7XG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHN1cGVyKCk7XG5cdH1cblxuXHRnZXQgbmFtZSgpIHtcblx0XHRyZXR1cm4gXCJpbml0aWFsXCI7XG5cdH1cblx0Z2V0IHJhbmsoKSB7XG5cdFx0cmV0dXJuIERpcmVjdGl2ZS5NSU5fUkFOSztcblx0fVxuXHRnZXQgcGhhc2UoKSB7XG5cdFx0cmV0dXJuIERpcmVjdGl2ZS5QSEFTRS5pbml0O1xuXHR9XG5cblx0YXN5bmMgZXhlY3V0ZShjb250ZXh0KSB7XG5cdFx0Y29uc3QgeyB0ZW1wbGF0ZSwgcmVuZGVyZXIsIHJlc29sdmVyIH0gPSBjb250ZXh0O1xuXHRcdGlmICghKHRlbXBsYXRlIGluc3RhbmNlb2YgRWxlbWVudCkpIHtcblx0XHRcdGNvbnRleHQuY29udGVudCA9IGRvY3VtZW50LmltcG9ydE5vZGUodGVtcGxhdGUsIHRydWUpO1xuXHRcdH0gZWxzZSBpZiAodGVtcGxhdGUuYXR0cihcImpzdGwtYXN5bmNcIikpIHtcblx0XHRcdGNvbnRleHQuY29udGVudCA9IG5ldyBSZXBsYWNlKCk7XG5cdFx0XHR0ZW1wbGF0ZS5hdHRyKFwianN0bC1hc3luY1wiLCBudWxsKTtcblx0XHRcdGNvbnN0IHJlbmRlck9wdGlvbiA9IGNvbnRleHQudG9SZW5kZXJPcHRpb24oeyBtb2RlOiBcInJlcGxhY2VcIiwgdGFyZ2V0OiBjb250ZXh0LmNvbnRlbnQgfSk7XG5cdFx0XHRzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRcdFx0cmVuZGVyZXIucmVuZGVyKHJlbmRlck9wdGlvbik7XG5cdFx0XHR9LCBwYXJzZUludCh0ZW1wbGF0ZS5hdHRyKFwianN0bC1hc3luY1wiKSB8fCBcIjI1MFwiKSB8fCAyNTApO1xuXHRcdFx0Y29udGV4dC5zdG9wID0gdHJ1ZTtcblx0XHRcdGNvbnRleHQuaWdub3JlID0gdHJ1ZTtcblx0XHR9IGVsc2UgaWYgKHRlbXBsYXRlLmF0dHIoXCJqc3RsLWlnbm9yZVwiKSkge1xuXHRcdFx0Y29udGV4dC5jb250ZW50ID0gZG9jdW1lbnQuaW1wb3J0Tm9kZSh0ZW1wbGF0ZSwgdHJ1ZSk7XG5cdFx0XHRjb250ZXh0LnN0b3AgPSB0cnVlO1xuXHRcdFx0Y29udGV4dC5pZ25vcmUgPSB0cnVlO1xuXHRcdH0gZWxzZSBpZiAodGVtcGxhdGUgaW5zdGFuY2VvZiBIVE1MVGVtcGxhdGVFbGVtZW50KSB7XG5cdFx0XHRjb250ZXh0LmNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRlbXBsYXRlLnRhZ05hbWUpO1xuXHRcdFx0Y29uc3Qgc3ViQ29udGV4dCA9IGNvbnRleHQuc3ViQ29udGV4dCh7IHRlbXBsYXRlOiB0ZW1wbGF0ZS5jb250ZW50LmNoaWxkTm9kZXMsIGNvbnRhaW5lcjogY29udGV4dC5jb250ZW50LmNvbnRlbnQgfSk7XG5cdFx0XHRhd2FpdCByZW5kZXJlci5yZW5kZXIoc3ViQ29udGV4dCk7XHRcdFx0XG5cdFx0XHRjb250ZXh0LnN0b3AgPSB0cnVlO1xuXHRcdFx0Y29udGV4dC5pZ25vcmUgPSB0cnVlO1xuXHRcdH0gZWxzZSBpZiAodGVtcGxhdGUuaGFzQXR0cmlidXRlKFwianN0bC10YWduYW1lXCIpKSB7XG5cdFx0XHRsZXQgdGFnbmFtZSA9IHRlbXBsYXRlLmF0dHIoXCJqc3RsLXRhZ25hbWVcIikudHJpbSgpO1xuXHRcdFx0aWYgKHRhZ25hbWUubGVuZ3RoID4gMCkgY29udGV4dC5jb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChhd2FpdCByZXNvbHZlci5yZXNvbHZlVGV4dCh0ZW1wbGF0ZS5hdHRyKFwianN0bC10YWduYW1lXCIpKSk7XG5cdFx0XHRlbHNlIHtcblx0XHRcdFx0Y29udGV4dC5jb250ZW50ID0gZG9jdW1lbnQuaW1wb3J0Tm9kZSh0ZW1wbGF0ZSwgdHJ1ZSk7XG5cdFx0XHRcdGNvbnRleHQuc3RvcCA9IHRydWU7XG5cdFx0XHRcdGNvbnRleHQuaWdub3JlID0gdHJ1ZTtcblx0XHRcdH1cblx0XHR9IGVsc2UgaWYgKHRlbXBsYXRlLnRhZ05hbWUpIHtcblx0XHRcdGNvbnRleHQuY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGVtcGxhdGUudGFnTmFtZSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGNvbnRleHQuY29udGVudCA9IGRvY3VtZW50LmltcG9ydE5vZGUodGVtcGxhdGUsIHRydWUpO1xuXHRcdFx0Y29udGV4dC5zdG9wID0gdHJ1ZTtcblx0XHRcdGNvbnRleHQuaWdub3JlID0gdHJ1ZTtcblx0XHR9XG5cblx0XHRyZXR1cm4gY29udGV4dDtcblx0fVxufVxuXG5EaXJlY3RpdmUuZGVmaW5lKHsgZGlyZWN0aXZlOiBuZXcgSW5pdGlhbCgpIH0pO1xuIiwiaW1wb3J0IERpcmVjdGl2ZSBmcm9tIFwiLi4vRGlyZWN0aXZlLmpzXCI7XG5pbXBvcnQgRXhwcmVzc2lvblJlc29sdmVyIGZyb20gXCJAZGVmYXVsdC1qcy9kZWZhdWx0anMtZXhwcmVzc2lvbi1sYW5ndWFnZS9zcmMvRXhwcmVzc2lvblJlc29sdmVyXCI7XG5cbmNvbnN0IE5BTUUgPSBcIm9uLWZpbmlzaGVkXCI7XG5jb25zdCBBVFRSSUJVVEVfT05fRklOSVNIRUQgPSBganN0bC0ke05BTUV9YDtcbmNvbnN0IEFUVFJJQlVURV9PTl9GSU5JU0hFRF9BU1lOQyA9IGAke0FUVFJJQlVURV9PTl9GSU5JU0hFRH0tYXN5bmNgO1xuXG5jbGFzcyBPbkZpbmlzaGVkIGV4dGVuZHMgRGlyZWN0aXZlIHtcblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0c3VwZXIoKTtcblx0fVxuXG5cdGdldCBuYW1lKCkgeyByZXR1cm4gTkFNRSB9XG5cdGdldCByYW5rKCkgeyByZXR1cm4gRGlyZWN0aXZlLk1BWF9SQU5LIH1cblx0Z2V0IHBoYXNlKCkgeyByZXR1cm4gRGlyZWN0aXZlLlBIQVNFLmZpbmlzaCB9XG5cblxuXG5cdGFzeW5jIGV4ZWN1dGUoY29udGV4dCkge1xuXHRcdGNvbnN0IHsgdGVtcGxhdGUsIGNvbnRlbnQsIHJvb3QgfSA9IGNvbnRleHQ7XG5cdFx0aWYgKCEodGVtcGxhdGUgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkgfHwgIXRlbXBsYXRlLmhhc0F0dHJpYnV0ZShBVFRSSUJVVEVfT05fRklOSVNIRUQpKVxuXHRcdFx0cmV0dXJuIGNvbnRleHQ7XG5cblx0XHRjb25zdCBleHByZXNzaW9uID0gdGVtcGxhdGUuYXR0cihBVFRSSUJVVEVfT05fRklOSVNIRUQpO1xuXHRcdGNvbnN0IGFzeW5jQ2FsbCA9IHRlbXBsYXRlLmhhc0F0dHJpYnV0ZShBVFRSSUJVVEVfT05fRklOSVNIRURfQVNZTkMpO1xuXG5cdFx0Y29uc3QgZGF0YSA9IHtcblx0XHRcdCRlbGVtZW50OiBjb250ZW50LFxuXHRcdFx0JHJvb3Q6IHJvb3QsXG5cdFx0XHQkdGVtcGxhdGU6IHRlbXBsYXRlXG5cdFx0fTtcblx0XHRjb25zdCByZXNvbHZlciA9IG5ldyBFeHByZXNzaW9uUmVzb2x2ZXIoeyBjb250ZXh0OiBkYXRhLCBuYW1lOiBcImpzdGwtZGF0YVwiLCBwYXJlbnQ6IGNvbnRleHQucmVzb2x2ZXIgfSk7XG5cblxuXHRcdGNvbnRleHQuZmluaXNoZWQoYXN5bmMgKCkgPT4ge1xuXHRcdFx0dHJ5IHtcblx0XHRcdFx0aWYoIWFzeW5jQ2FsbClcblx0XHRcdFx0XHRyZXR1cm4gcmVzb2x2ZXIucmVzb2x2ZShleHByZXNzaW9uLCBudWxsKTtcblx0XHRcdFx0XHRcblx0XHRcdFx0cmVzb2x2ZXIucmVzb2x2ZShleHByZXNzaW9uLCBudWxsKTtcclxuXHRcdFx0fSBjYXRjaCAoZSkge1xuXHRcdFx0XHRjb25zb2xlLmVycm9yKGUpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXG5cdFx0cmV0dXJuIGNvbnRleHQ7XG5cdH1cbn1cblxuRGlyZWN0aXZlLmRlZmluZSh7IGRpcmVjdGl2ZTogbmV3IE9uRmluaXNoZWQoKSB9KTsiLCJpbXBvcnQgRGlyZWN0aXZlIGZyb20gXCIuLi9EaXJlY3RpdmUuanNcIjtcbmltcG9ydCBFeHByZXNzaW9uUmVzb2x2ZXIgZnJvbSBcIkBkZWZhdWx0LWpzL2RlZmF1bHRqcy1leHByZXNzaW9uLWxhbmd1YWdlL3NyYy9FeHByZXNzaW9uUmVzb2x2ZXIuanNcIjtcblxuY29uc3QgRElSRUNUSVZFTkFNRSA9IFwianN0bC1yZXBlYXRcIjtcbmNvbnN0IElHTk9SRURJUkVDVElWRSA9IG5ldyBTZXQoW0RJUkVDVElWRU5BTUVdKTtcblxuY29uc3QgQVRUUklCVVRFID0ge1xuXHREQVRBOiBgJHtESVJFQ1RJVkVOQU1FfWAsXG5cdFZBUjogYCR7RElSRUNUSVZFTkFNRX0tdmFyYCxcblx0U1RBVFVTOiBgJHtESVJFQ1RJVkVOQU1FfS1zdGF0dXNgLFxuXHRDT1VOVDogYCR7RElSRUNUSVZFTkFNRX0tY291bnRgLFxuXHRTVEFSVDogYCR7RElSRUNUSVZFTkFNRX0tc3RhcnRgLFxuXHRTVEVQOiBgJHtESVJFQ1RJVkVOQU1FfS1zdGVwYCxcblx0Q09ORElUSU9OOiBgJHtESVJFQ1RJVkVOQU1FfS1jb25kaXRpb25gLFxufTtcblxuY29uc3QgZG9Db3VudCA9IGFzeW5jIChvcHRpb24pID0+IHtcblx0bGV0IHsgc3RhcnQsIHN0ZXAsIGNvdW50LCB2YXJuYW1lLCBzdGF0dXMsIHJlc29sdmVyIH0gPSBvcHRpb247XG5cdGNvdW50ID0gYXdhaXQgcmVzb2x2ZXIucmVzb2x2ZShjb3VudCk7XG5cdGNvbnN0IGxlbmd0aCA9IHN0YXJ0ICsgY291bnQgKiBzdGVwO1xuXHRsZXQgc3RvcCA9IGZhbHNlO1xuXHRmb3IgKGxldCBpID0gc3RhcnQ7IGkgPCBsZW5ndGggJiYgIXN0b3A7IGkgPSBpICsgc3RlcCkge1xuXHRcdGNvbnN0IGl0ZXJhdGlvbiA9IHt9O1xuXHRcdGl0ZXJhdGlvblt2YXJuYW1lXSA9IGk7XG5cdFx0aXRlcmF0aW9uW3N0YXR1c10gPSB7XG5cdFx0XHRpbmRleDogaSxcblx0XHRcdG51bWJlcjogaSArIDEsXG5cdFx0XHRzdGVwLFxuXHRcdFx0Y291bnQsXG5cdFx0fTtcblx0XHRzdG9wID0gIShhd2FpdCBpdGVyYXRlKGl0ZXJhdGlvbiwgb3B0aW9uKSk7XG5cdH1cbn07XG5cbmNvbnN0IGRvUmVwZWF0ID0gYXN5bmMgKG9wdGlvbikgPT4ge1xuXHRsZXQgeyBkYXRhLCBzdGFydCwgc3RlcCwgY291bnQsIHZhcm5hbWUsIHN0YXR1cywgcmVzb2x2ZXIgfSA9IG9wdGlvbjtcblxuXHRkYXRhID0gYXdhaXQgcmVzb2x2ZXIucmVzb2x2ZShkYXRhKTtcblx0bGV0IGFycmF5ID0gZGF0YTtcblx0aWYgKCEoZGF0YSBpbnN0YW5jZW9mIEFycmF5KSkgYXJyYXkgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhkYXRhKTtcblxuXHRjb3VudCA9IGNvdW50ICE9IFwiXCIgPyBhd2FpdCByZXNvbHZlci5yZXNvbHZlKGNvdW50LCAwKSA6IG51bGw7XG5cdGNvbnN0IGxlbmd0aCA9IGNvdW50ID8gTWF0aC5taW4oc3RhcnQgKyBjb3VudCwgYXJyYXkubGVuZ3RoKSA6IGFycmF5Lmxlbmd0aDtcblx0bGV0IHN0b3AgPSBmYWxzZTtcblx0Zm9yIChsZXQgaSA9IHN0YXJ0OyBpIDwgbGVuZ3RoICYmICFzdG9wOyBpID0gaSArIHN0ZXApIHtcblx0XHRjb25zdCBpdGVyYXRpb24gPSB7fTtcblx0XHRpdGVyYXRpb25bdmFybmFtZV0gPSBkYXRhW2ldO1xuXHRcdGl0ZXJhdGlvbltzdGF0dXNdID0ge1xuXHRcdFx0aW5kZXg6IGksXG5cdFx0XHRudW1iZXI6IGkgKyAxLFxuXHRcdFx0Y291bnQ6IGxlbmd0aCxcblx0XHRcdGRhdGEsXG5cdFx0fTtcblx0XHRzdG9wID0gIShhd2FpdCBpdGVyYXRlKGl0ZXJhdGlvbiwgb3B0aW9uKSk7XG5cdH1cbn07XG5cbmNvbnN0IGl0ZXJhdGUgPSBhc3luYyAoZGF0YSwgb3B0aW9uKSA9PiB7XG5cdGxldCB7IHRlbXBsYXRlLCByZXNvbHZlciwgcmVuZGVyZXIsIGNvbmRpdGlvbiwgY29udGV4dCB9ID0gb3B0aW9uO1xuXHRyZXNvbHZlciA9IG5ldyBFeHByZXNzaW9uUmVzb2x2ZXIoeyBjb250ZXh0OiBkYXRhLCBuYW1lOiBESVJFQ1RJVkVOQU1FLCBwYXJlbnQ6IHJlc29sdmVyIH0pO1xuXG5cdGNvbmRpdGlvbiA9IGNvbmRpdGlvbiA/IGF3YWl0IHJlc29sdmVyLnJlc29sdmUoY29uZGl0aW9uLCBmYWxzZSkgOiBmYWxzZTtcblx0aWYgKGNvbmRpdGlvbikgcmV0dXJuIGZhbHNlO1xuXG5cdGNvbnN0IGl0ZW1Db250ZXh0ID0gIGNvbnRleHQuc3ViQ29udGV4dCh7IHJlc29sdmVyLCB0ZW1wbGF0ZSwgbW9kZTogXCJhcHBlbmRcIiwgaWdub3JlRGlyZWN0aXZlOiBJR05PUkVESVJFQ1RJVkUgfSlcblx0YXdhaXQgcmVuZGVyZXIucmVuZGVyKGl0ZW1Db250ZXh0KTtcblx0YXdhaXQgaXRlbUNvbnRleHQucmVhZHkoKTtcblxuXHRyZXR1cm4gdHJ1ZTtcbn07XG5cbmNsYXNzIFJlcGVhdCBleHRlbmRzIERpcmVjdGl2ZSB7XG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHN1cGVyKCk7XG5cdH1cblxuXHRnZXQgbmFtZSgpIHtcblx0XHRyZXR1cm4gRElSRUNUSVZFTkFNRTtcblx0fVxuXHRnZXQgcmFuaygpIHtcblx0XHRyZXR1cm4gRGlyZWN0aXZlLk1JTl9SQU5LICsgMztcblx0fVxuXHRnZXQgcGhhc2UoKSB7XG5cdFx0cmV0dXJuIERpcmVjdGl2ZS5QSEFTRS50ZW1wbGF0ZTtcblx0fVxuXG5cdGFzeW5jIGV4ZWN1dGUoY29udGV4dCkge1xuXHRcdGlmICghKGNvbnRleHQudGVtcGxhdGUgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkgfHwgKCFjb250ZXh0LnRlbXBsYXRlLmF0dHIoQVRUUklCVVRFLkRBVEEpICYmICFjb250ZXh0LnRlbXBsYXRlLmF0dHIoQVRUUklCVVRFLkNPVU5UKSkpIHJldHVybiBjb250ZXh0O1xuXG5cdFx0dHJ5IHtcblx0XHRcdGNvbnN0IHsgdGVtcGxhdGUsIHJlc29sdmVyLCByZW5kZXJlciwgY29udGVudCwgY29udGFpbmVyIH0gPSBjb250ZXh0O1xuXHRcdFx0Y29uc3Qgb3B0aW9uID0ge1xuXHRcdFx0XHRkYXRhOiAodGVtcGxhdGUuYXR0cihBVFRSSUJVVEUuREFUQSkgfHwgXCJcIikudHJpbSgpLFxuXHRcdFx0XHRjb3VudDogKHRlbXBsYXRlLmF0dHIoQVRUUklCVVRFLkNPVU5UKSB8fCBcIlwiKS50cmltKCksXG5cdFx0XHRcdHN0YXJ0OiBhd2FpdCByZXNvbHZlci5yZXNvbHZlKHRlbXBsYXRlLmF0dHIoQVRUUklCVVRFLlNUQVJUKSB8fCBcIjBcIiksXG5cdFx0XHRcdHN0ZXA6IGF3YWl0IHJlc29sdmVyLnJlc29sdmUodGVtcGxhdGUuYXR0cihBVFRSSUJVVEUuU1RFUCkgfHwgXCIxXCIpLFxuXHRcdFx0XHR2YXJuYW1lOiAodGVtcGxhdGUuYXR0cihBVFRSSUJVVEUuVkFSKSB8fCBcIml0ZW1cIikudHJpbSgpLFxuXHRcdFx0XHRzdGF0dXM6ICh0ZW1wbGF0ZS5hdHRyKEFUVFJJQlVURS5TVEFUVVMpIHx8IFwic3RhdHVzXCIpLnRyaW0oKSxcblx0XHRcdFx0Y29uZGl0aW9uOiB0ZW1wbGF0ZS5hdHRyKEFUVFJJQlVURS5DT05ESVRJT04pLFxuXHRcdFx0XHR0ZW1wbGF0ZTogdGVtcGxhdGUsXG5cdFx0XHRcdHRhZ25hbWU6IGNvbnRlbnQudGFnTmFtZSxcblx0XHRcdFx0cmVzb2x2ZXIsXG5cdFx0XHRcdHJlbmRlcmVyLFxuXHRcdFx0XHRjb250YWluZXIsXG5cdFx0XHRcdGNvbnRleHQsXG5cdFx0XHR9O1xuXHRcdFx0aWYgKCghb3B0aW9uLmRhdGEgfHwgb3B0aW9uLmRhdGEgPT0gXCJcIikgJiYgb3B0aW9uLmNvdW50KSBhd2FpdCBkb0NvdW50KG9wdGlvbik7XG5cdFx0XHRlbHNlIGF3YWl0IGRvUmVwZWF0KG9wdGlvbik7XG5cdFx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRcdGNvbnNvbGUuZXJyb3IoXCJlcnJvciBhdCBqc3RsLXJlcGVhdDpcIiwgZXJyb3IpO1xuXHRcdH1cblxuXHRcdGNvbnRleHQuY29udGVudCA9IG51bGw7XG5cdFx0Y29udGV4dC5zdG9wID0gdHJ1ZTtcblx0XHRjb250ZXh0Lmlnbm9yZSA9IHRydWU7XG5cdFx0cmV0dXJuIGNvbnRleHQ7XG5cdH1cbn1cblxuRGlyZWN0aXZlLmRlZmluZSh7IGRpcmVjdGl2ZTogbmV3IFJlcGVhdCgpIH0pO1xuIiwiaW1wb3J0IERpcmVjdGl2ZSBmcm9tIFwiLi4vRGlyZWN0aXZlLmpzXCI7XG5cbmNvbnN0IERFRkFVTFRfT1BUSU9OID0ge1xuXHRtb2RlOiBcInRleHRcIixcblx0dW5zZWN1cmU6IGZhbHNlLFxuXHRwcmV2ZW50Rm9ybWF0IDogZmFsc2UsXG5cdG1heExlbmd0aDogMFx0XG59O1xuXG5jb25zdCBTRUNVUkVfSFRNTF9GSUxURVIgPSBcInNjcmlwdCwgc3R5bGUsIGJvZHksIGh0bWwsIGhlYWQsIG9iamVjdCwgbGlua1wiO1xuXG5jb25zdCByZWFkT3B0aW9uID0gYXN5bmMgKHBhcmVudCwgY29udGV4dCkgPT4ge1xuXHRjb25zdCByZXNvbHZlciA9IGNvbnRleHQucmVzb2x2ZXI7XG5cdHJldHVybiB7XG5cdFx0bW9kZTogYXdhaXQgcmVzb2x2ZXIucmVzb2x2ZVRleHQoKHBhcmVudC5hdHRyKFwianN0bC10ZXh0LWNvbnRlbnQtdHlwZVwiKSB8fCBcInRleHRcIikudHJpbSgpLnRvTG93ZXJDYXNlKCkpLFxuXHRcdHVuc2VjdXJlOiBwYXJlbnQuaGFzQXR0cmlidXRlKFwianN0bC10ZXh0LXVuc2VjdXJlXCIpLFxuXHRcdHByZXZlbnRGb3JtYXQ6ICEhcGFyZW50LmF0dHIoXCJqc3RsLXRleHQtcHJldmVudC1mb3JtYXRcIikgfHwgZmFsc2UsXG5cdFx0bWF4TGVuZ3RoOiBwYXJzZUludChhd2FpdCByZXNvbHZlci5yZXNvbHZlVGV4dChwYXJlbnQuYXR0cihcImpzdGwtdGV4dC10cmltLWxlbmd0aFwiKSB8fCBcIjBcIikpXG5cdH07XG59O1xuXG5jb25zdCB0cmltVGV4dExlbmd0aCA9ICh0ZXh0LCBsZW5ndGgpID0+IHtcblx0cmV0dXJuIHRleHQubGVuZ3RoID4gbGVuZ3RoID8gdGV4dC5zdWJzdHJpbmcoMCwgbGVuZ3RoIC0gMykudHJpbSgpICsgXCIuLi5cIiA6IHRleHQ7XG59O1xuXG5jb25zdCBNT0RFUyA9IHtcblx0XCJ0ZXh0XCIgOiBhc3luYyAob3B0aW9uLCBjb250ZXh0KSA9PiB7XG5cdFx0Y29uc3Qge2NvbnRlbnQsIHJlc29sdmVyLCB0ZW1wbGF0ZX0gPSBjb250ZXh0O1xuXHRcdFxuXHRcdGxldCB0ZXh0ID0gYXdhaXQgcmVzb2x2ZXIucmVzb2x2ZVRleHQodGVtcGxhdGUudGV4dENvbnRlbnQpO1x0XHRcblx0XHR0ZXh0ID0gY3JlYXRlKHRleHQsdHJ1ZSkuY29udGVudC50ZXh0Q29udGVudDtcblx0XHRpZihvcHRpb24ubWF4TGVuZ3RoID4gMClcblx0XHRcdHRleHQgPSB0cmltVGV4dExlbmd0aCh0ZXh0LCBvcHRpb24ubWF4TGVuZ3RoKTtcdFx0XG5cdFx0XG5cdFx0Y29udGVudC50ZXh0Q29udGVudCA9IHRleHQ7XHRcdFxuXHR9LFxuXHRcImh0bWxcIjogYXN5bmMgKG9wdGlvbiwgY29udGV4dCkgPT4ge1xuXHRcdGNvbnN0IHtyZXNvbHZlciwgdGVtcGxhdGV9ID0gY29udGV4dDtcblx0XHRcblx0XHRsZXQgY29udGVudCA9IGF3YWl0IHJlc29sdmVyLnJlc29sdmVUZXh0KHRlbXBsYXRlLnRleHRDb250ZW50KTtcdFx0XG5cdFx0Y29udGVudCA9IGNyZWF0ZShjb250ZW50LHRydWUpO1x0XHRcblx0XHRjb250ZW50ID0gZG9jdW1lbnQuaW1wb3J0Tm9kZShjb250ZW50LmNvbnRlbnQsIHRydWUpO1xuXHRcdFxuXHRcdGlmKG9wdGlvbi51bnNlY3VyZSlcblx0XHRcdGNvbnRleHQuY29udGVudCA9IGNvbnRlbnQ7XHRcdFx0XG5cdFx0ZWxzZXtcblx0XHRcdGNvbnRlbnQuZmluZChTRUNVUkVfSFRNTF9GSUxURVIpLnJlbW92ZSgpO1x0XHRcdFxuXHRcdFx0Y29udGV4dC5jb250ZW50ID0gY29udGVudDtcblx0XHR9XG5cdH1cbn07XG5cblxuY2xhc3MgVGV4dENvbnRlbnQgZXh0ZW5kcyBEaXJlY3RpdmUge1xuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRzdXBlcigpO1xuXHR9XG5cblx0Z2V0IG5hbWUoKSB7IHJldHVybiBcInRleHRcIiB9XG5cdGdldCByYW5rKCkgeyByZXR1cm4gRGlyZWN0aXZlLk1JTl9SQU5LICsgMSB9XG5cdGdldCBwaGFzZSgpIHsgcmV0dXJuIERpcmVjdGl2ZS5QSEFTRS5jb250ZW50IH1cblxuXG5cblx0YXN5bmMgZXhlY3V0ZShjb250ZXh0KSB7XG5cdFx0Y29uc3QgeyB0ZW1wbGF0ZSB9ID0gY29udGV4dDtcblx0XHRpZiAoISh0ZW1wbGF0ZSBpbnN0YW5jZW9mIFRleHQpIHx8IHRlbXBsYXRlLnRleHRDb250ZW50LnRyaW0oKS5sZW5ndGggPT0gMCB8fCAodGVtcGxhdGUucGFyZW50RWxlbWVudCAmJiB0ZW1wbGF0ZS5wYXJlbnRFbGVtZW50Lmhhc0F0dHJpYnV0ZShcImpzdGwtdGV4dC1pZ25vcmVcIikpKVxuXHRcdFx0cmV0dXJuIGNvbnRleHQ7XG5cblx0XHRjb25zdCBwYXJlbnQgPSB0ZW1wbGF0ZS5wYXJlbnRFbGVtZW50O1xuXHRcdGNvbnN0IG9wdGlvbiA9IHBhcmVudCA/IGF3YWl0IHJlYWRPcHRpb24ocGFyZW50LCBjb250ZXh0KSA6IERFRkFVTFRfT1BUSU9OO1xuXHRcdFxuXHRcdGNvbnN0ICBtb2RlID0gTU9ERVNbb3B0aW9uLm1vZGVdO1xuXHRcdGlmKCFtb2RlKVxuXHRcdFx0dGhyb3cgbmV3IEVycm9yKFwiVGV4dCBtb2RlIFxcXCJcIisgb3B0aW9uLm1vZGUgKyBcIlxcXCIgaXMgdW5zdXBwb3J0ZWQhXCIpO1xuXHRcdFxuXHRcdGF3YWl0IG1vZGUob3B0aW9uLCBjb250ZXh0KTtcblx0XHRcblx0XHRyZXR1cm4gY29udGV4dDtcblx0fVxufVxuXG5EaXJlY3RpdmUuZGVmaW5lKHsgZGlyZWN0aXZlOiBuZXcgVGV4dENvbnRlbnQoKSB9KTsiLCJpbXBvcnQgXCIuL0luaXRpYWwuanNcIjtcbmltcG9ydCBcIi4vRGF0YS5qc1wiO1xuaW1wb3J0IFwiLi9JZi5qc1wiO1xuaW1wb3J0IFwiLi9DaG9vc2UuanNcIjtcbmltcG9ydCBcIi4vSW5jbHVkZS5qc1wiO1xuaW1wb3J0IFwiLi9Gb3JlYWNoLmpzXCI7XG5pbXBvcnQgXCIuL1JlcGVhdC5qc1wiO1xuaW1wb3J0IFwiLi9UZXh0LmpzXCI7XG5pbXBvcnQgXCIuL0F0dHJpYnV0ZXMuanNcIjtcbmltcG9ydCBcIi4vT25GaW5pc2hlZC5qc1wiOyIsImltcG9ydCBFbGVtZW50IGZyb20gXCIuLi9FbGVtZW50LmpzXCJcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVwbGFjZUVsZW1lbnQgZXh0ZW5kcyBFbGVtZW50e1xuXHRjb25zdHJ1Y3Rvcigpe1xuXHRcdHN1cGVyKCk7XG5cdFx0XG5cdFx0dGhpcy5hdHRhY2hTaGFkb3coe21vZGU6ICdvcGVuJ30pO1xuXHR9XG5cdGFzeW5jIGV4ZWN1dGUoe3RlbXBsYXRlLCBjb250ZXh0fSl7XG5cdFx0cmV0dXJuIGNvbnRleHQ7XG5cdH07XHRcdFxufVxudHJ5e2N1c3RvbUVsZW1lbnRzLmRlZmluZShcImpzdGwtcmVwbGFjZVwiLCBSZXBsYWNlRWxlbWVudCk7fWNhdGNoKGUpe30vL2lnbm9yZSIsImltcG9ydCBcIkBkZWZhdWx0LWpzL2RlZmF1bHRqcy1leHRkb21cIjtcclxuaW1wb3J0IFwiLi90ZXN0c1wiOyIsImltcG9ydCBSZW5kZXJlciBmcm9tIFwiQHNyYy9SZW5kZXJlci5qc1wiO1xuXG5kZXNjcmliZShcIlJlbmRlcmVyIFRlc3QgLSBqc3RsIHJlbW92ZSB0ZXN0XCIsICgpID0+IHtcblx0XG5cdGJlZm9yZUFsbCgoKSA9PiB7fSk7XHRcblx0XG5cdGl0KFwiY2FzZSAxXCIsIGFzeW5jICgpID0+IHtcdFx0XG5cdFx0Y29uc3QgY29udGFpbmVyID0gY3JlYXRlKFwiPGRpdj48L2Rpdj5cIikuZmlyc3QoKTtcblx0XHRleHBlY3QoY29udGFpbmVyLmNoaWxkcmVuLmxlbmd0aCkudG9CZSgwKTtcblx0XHRhd2FpdCBuZXcgUmVuZGVyZXIoKS5yZW5kZXIoe1xuXHRcdFx0Y29udGFpbmVyOiBjb250YWluZXIsIFxuXHRcdFx0ZGF0YToge30sIFxuXHRcdFx0dGVtcGxhdGU6IFwiPGpzdGw+PGRpdj48L2Rpdj48L2pzdGw+XCJcblx0XHR9KTtcblx0XHRcblx0XHRleHBlY3QoY29udGFpbmVyLmNoaWxkcmVuLmxlbmd0aCkudG9CZSgxKTtcblx0XHRleHBlY3QoY29udGFpbmVyLmNoaWxkcmVuWzBdLnRhZ05hbWUpLnRvQmUoXCJESVZcIik7XG5cdH0pO1xuXHRcblx0XG5cdGl0KFwiY2FzZSAyXCIsIGFzeW5jICgpID0+IHtcdFx0XG5cdFx0Y29uc3QgY29udGFpbmVyID0gY3JlYXRlKFwiPGRpdj48L2Rpdj5cIikuZmlyc3QoKTtcblx0XHRleHBlY3QoY29udGFpbmVyLmNoaWxkcmVuLmxlbmd0aCkudG9CZSgwKTtcblx0XHRhd2FpdCBuZXcgUmVuZGVyZXIoKS5yZW5kZXIoe1xuXHRcdFx0Y29udGFpbmVyOiBjb250YWluZXIsIFxuXHRcdFx0ZGF0YToge3JlbmRlcjogZmFsc2V9LCBcblx0XHRcdHRlbXBsYXRlOiBcIjxqc3RsIGpzdGwtaWY9XFxcIiR7cmVuZGVyfVxcXCI+PGRpdj48L2Rpdj48L2pzdGw+XCJcblx0XHR9KTtcblx0XHRcblx0XHRleHBlY3QoY29udGFpbmVyLmNoaWxkcmVuLmxlbmd0aCkudG9CZSgwKTtcblx0fSk7XG5cdFxuXHRpdChcImNhc2UgM1wiLCBhc3luYyAoKSA9PiB7XHRcdFxuXHRcdGNvbnN0IGNvbnRhaW5lciA9IGNyZWF0ZShcIjxkaXY+PC9kaXY+XCIpLmZpcnN0KCk7XG5cdFx0ZXhwZWN0KGNvbnRhaW5lci5jaGlsZHJlbi5sZW5ndGgpLnRvQmUoMCk7XG5cdFx0YXdhaXQgbmV3IFJlbmRlcmVyKCkucmVuZGVyKHtcblx0XHRcdGNvbnRhaW5lcjogY29udGFpbmVyLCBcblx0XHRcdGRhdGE6IHtyZW5kZXI6IHRydWV9LCBcblx0XHRcdHRlbXBsYXRlOiBcIjxqc3RsIGpzdGwtaWY9XFxcIiR7cmVuZGVyfVxcXCI+PGRpdj48L2Rpdj48L2pzdGw+XCJcblx0XHR9KTtcblx0XHRcblx0XHRleHBlY3QoY29udGFpbmVyLmNoaWxkcmVuLmxlbmd0aCkudG9CZSgxKTtcblx0XHRleHBlY3QoY29udGFpbmVyLmNoaWxkcmVuWzBdLnRhZ05hbWUpLnRvQmUoXCJESVZcIik7XG5cdH0pO1xuXHRcblx0YWZ0ZXJBbGwoKCkgPT4ge30pO1xufSk7IiwiaW1wb3J0IFJlbmRlcmVyIGZyb20gXCJAc3JjL1JlbmRlcmVyLmpzXCI7XG5cbmRlc2NyaWJlKFwiUmVuZGVyZXIgVGVzdCAtIG1vZGVcIiwgKCkgPT4ge1xuXHRcblx0YmVmb3JlQWxsKCgpID0+IHt9KTtcblx0XG5cdGl0KFwiZGVmYXVsdCAocmVwbGFjZSlcIiwgYXN5bmMgKCkgPT4ge1xuXHRcdGNvbnN0IGNvbnRhaW5lciA9IGNyZWF0ZShcIjxkaXY+PC9kaXY+XCIpLmZpcnN0KCk7XG5cdFx0XG5cdFx0Y29uc3Qgb3B0aW9uID0ge1xuXHRcdFx0Y29udGFpbmVyOiBjb250YWluZXIsIFxuXHRcdFx0ZGF0YToge30sIFxuXHRcdFx0dGVtcGxhdGU6IFwiPGRpdj48L2Rpdj5cIlxuXHRcdH07XHRcdFxuXHRcdGF3YWl0IChhd2FpdCBSZW5kZXJlci5idWlsZCh7dGVtcGxhdGU6IFwiPGRpdj48L2Rpdj5cIn0pKS5yZW5kZXIob3B0aW9uKTtcdFx0XG5cdFx0ZXhwZWN0KGNvbnRhaW5lci5jaGlsZHJlbi5sZW5ndGgpLnRvQmUoMSk7XG5cdFx0YXdhaXQgKGF3YWl0IFJlbmRlcmVyLmJ1aWxkKCkpLnJlbmRlcihvcHRpb24pO1xuXHRcdGV4cGVjdChjb250YWluZXIuY2hpbGRyZW4ubGVuZ3RoKS50b0JlKDEpO1xuXHR9KTtcblx0XG5cdGl0KFwicmVwbGFjZSB3aXRob3V0IHRhcmdldFwiLCBhc3luYyAoKSA9PiB7XG5cdFx0Y29uc3QgY29udGFpbmVyID0gY3JlYXRlKFwiPGRpdj48L2Rpdj5cIikuZmlyc3QoKTtcblx0XHRcblx0XHRjb25zdCBvcHRpb24gPSB7XG5cdFx0XHRjb250YWluZXI6IGNvbnRhaW5lciwgXG5cdFx0XHRkYXRhOiB7fSwgXG5cdFx0XHR0ZW1wbGF0ZTogXCI8ZGl2PjwvZGl2PlwiLFxuXHRcdFx0bW9kZTogXCJyZXBsYWNlXCJcblx0XHR9O1x0XHRcblx0XHRhd2FpdCBuZXcgUmVuZGVyZXIoKS5yZW5kZXIob3B0aW9uKTtcdFx0XG5cdFx0ZXhwZWN0KGNvbnRhaW5lci5jaGlsZHJlbi5sZW5ndGgpLnRvQmUoMSk7XG5cdFx0bmV3IFJlbmRlcmVyKCkucmVuZGVyKG9wdGlvbik7XG5cdFx0ZXhwZWN0KGNvbnRhaW5lci5jaGlsZHJlbi5sZW5ndGgpLnRvQmUoMSk7XG5cdH0pO1xuXHRcblx0aXQoXCJyZXBsYWNlIHdpdGggdGFyZ2V0XCIsIGFzeW5jICgpID0+IHtcblx0XHRjb25zdCBjb250YWluZXIgPSBjcmVhdGUoXCI8ZGl2PjxhPjwvYT48L2Rpdj5cIikuZmlyc3QoKTtcblx0XHRjb25zdCB0YXJnZXQgPSBjb250YWluZXIuZmluZChcImFcIikuZmlyc3QoKTtcblx0XHRjb25zdCBvcHRpb24gPSB7XG5cdFx0XHRjb250YWluZXI6IGNvbnRhaW5lciwgXG5cdFx0XHRkYXRhOiB7fSwgXG5cdFx0XHR0ZW1wbGF0ZTogXCI8ZGl2PjwvZGl2PlwiLFxuXHRcdFx0bW9kZTogXCJyZXBsYWNlXCIsXG5cdFx0XHR0YXJnZXQ6IHRhcmdldFxuXHRcdH07XG5cdFx0YXdhaXQgbmV3IFJlbmRlcmVyKCkucmVuZGVyKG9wdGlvbik7XHRcdFxuXHRcdGV4cGVjdChjb250YWluZXIuY2hpbGRyZW4ubGVuZ3RoKS50b0JlKDEpO1xuXHRcdGV4cGVjdChjb250YWluZXIuY2hpbGRyZW5bMF0udGFnTmFtZSkudG9CZShcIkRJVlwiKTtcblx0fSk7XG5cdFxuXHRhZnRlckFsbCgoKSA9PiB7fSk7XG59KTsiLCJpbXBvcnQgUmVuZGVyZXIgZnJvbSBcIkBzcmMvUmVuZGVyZXIuanNcIjtcblxuZGVzY3JpYmUoXCJSZW5kZXJlciBUZXN0IC0gdHJhdmVyc2UgdHJlZVwiLCAoKSA9PiB7XG5cdFxuXHRiZWZvcmVBbGwoKCkgPT4ge30pO1x0XG5cdFxuXHRpdChcImNhc2UgMVwiLCBhc3luYyAoKSA9PiB7XHRcdFxuXHRcdGNvbnN0IGNvbnRhaW5lciA9IGNyZWF0ZShcIjxkaXY+PC9kaXY+XCIpLmZpcnN0KCk7XG5cdFx0ZXhwZWN0KGNvbnRhaW5lci5jaGlsZHJlbi5sZW5ndGgpLnRvQmUoMCk7XG5cdFx0YXdhaXQgbmV3IFJlbmRlcmVyKCkucmVuZGVyKHtcblx0XHRcdGNvbnRhaW5lcjogY29udGFpbmVyLCBcblx0XHRcdGRhdGE6IHt9LCBcblx0XHRcdHRlbXBsYXRlOiBcIjxkaXY+PC9kaXY+XCJcblx0XHR9KTtcblx0XHRcblx0XHRleHBlY3QoY29udGFpbmVyLmNoaWxkcmVuLmxlbmd0aCkudG9CZSgxKTtcblx0fSk7XG5cdFxuXHRpdChcImNhc2UgMlwiLCBhc3luYyAoKSA9PiB7XHRcdFxuXHRcdGNvbnN0IGNvbnRhaW5lciA9IGNyZWF0ZShcIjxkaXY+PC9kaXY+XCIpLmZpcnN0KCk7XG5cdFx0ZXhwZWN0KGNvbnRhaW5lci5jaGlsZHJlbi5sZW5ndGgpLnRvQmUoMCk7XG5cdFx0XG5cdFx0YXdhaXQgbmV3IFJlbmRlcmVyKCkucmVuZGVyKHtcblx0XHRcdGNvbnRhaW5lcjogY29udGFpbmVyLCBcblx0XHRcdGRhdGE6IHt9LCBcblx0XHRcdHRlbXBsYXRlOiBcdFwiPGRpdj48L2Rpdj5cIiArXG5cdFx0XHRcdFx0XHRcIjxkaXY+PC9kaXY+XCIgK1xuXHRcdFx0XHRcdFx0XCI8ZGl2PjwvZGl2PlwiICtcblx0XHRcdFx0XHRcdFwiPGRpdj48L2Rpdj5cIiArXG5cdFx0XHRcdFx0XHRcIjxkaXY+PC9kaXY+XCJcblx0XHR9KTtcdFx0XG5cdFx0ZXhwZWN0KGNvbnRhaW5lci5jaGlsZHJlbi5sZW5ndGgpLnRvQmUoNSk7XG5cdH0pO1xuXHRcblx0aXQoXCJjYXNlIDNcIiwgYXN5bmMgKCkgPT4ge1x0XHRcblx0XHRjb25zdCBjb250YWluZXIgPSBjcmVhdGUoXCI8ZGl2PjwvZGl2PlwiKS5maXJzdCgpO1xuXHRcdGV4cGVjdChjb250YWluZXIuY2hpbGRyZW4ubGVuZ3RoKS50b0JlKDApO1xuXHRcdGF3YWl0IG5ldyBSZW5kZXJlcigpLnJlbmRlcih7XG5cdFx0XHRjb250YWluZXI6IGNvbnRhaW5lciwgXG5cdFx0XHRkYXRhOiB7fSwgXG5cdFx0XHR0ZW1wbGF0ZTogXHRcIjxkaXY+XCIgK1xuXHRcdFx0XHRcdFx0XCJcXHQ8ZGl2PjwvZGl2PlwiICtcblx0XHRcdFx0XHRcdFwiXFx0PGRpdj48L2Rpdj5cIiArXG5cdFx0XHRcdFx0XHRcIlxcdDxkaXY+PC9kaXY+XCIgK1xuXHRcdFx0XHRcdFx0XCJcXHQ8ZGl2PjwvZGl2PlwiICtcblx0XHRcdFx0XHRcdFwiXFx0PGRpdj48L2Rpdj5cIiArXG5cdFx0XHRcdFx0XHRcIjwvZGl2PlwiXG5cdFx0fSk7XG5cdFx0XG5cdFx0bGV0IGVsZW1lbnQgPSBjb250YWluZXI7XG5cdFx0ZXhwZWN0KGVsZW1lbnQuY2hpbGRyZW4ubGVuZ3RoKS50b0JlKDEpO1xuXHRcdFxuXHRcdGVsZW1lbnQgPSBlbGVtZW50LmNoaWxkcmVuWzBdO1xuXHRcdGV4cGVjdChlbGVtZW50LmNoaWxkcmVuLmxlbmd0aCkudG9CZSg1KTtcblx0fSk7XG5cdFxuXHRpdChcImNhc2UgNFwiLCBhc3luYyAoKSA9PiB7XHRcdFxuXHRcdGNvbnN0IGNvbnRhaW5lciA9IGNyZWF0ZShcIjxkaXY+PC9kaXY+XCIpLmZpcnN0KCk7XG5cdFx0ZXhwZWN0KGNvbnRhaW5lci5jaGlsZHJlbi5sZW5ndGgpLnRvQmUoMCk7XG5cdFx0XG5cdFx0Y29uc3QgY29udGVudCA9IFwiPGRpdj57Y29udGVudH08L2Rpdj5cIjtcblx0XHRsZXQgdGVtcGxhdGUgPSBjb250ZW50ICsgY29udGVudCArIGNvbnRlbnQgKyBjb250ZW50O1xuXHRcdGZvcihsZXQgaSA9IDA7IGkgPCAxMDA7IGkrKylcblx0XHRcdHRlbXBsYXRlID0gdGVtcGxhdGUucmVwbGFjZSgvXFx7Y29udGVudFxcfS9nLCBjb250ZW50KTtcblx0XHRcblx0XHRhd2FpdCBuZXcgUmVuZGVyZXIoKS5yZW5kZXIoe1xuXHRcdFx0Y29udGFpbmVyOiBjb250YWluZXIsIFxuXHRcdFx0ZGF0YToge30sIFxuXHRcdFx0dGVtcGxhdGU6IFx0dGVtcGxhdGVcblx0XHR9KTtcblx0XHRleHBlY3QoY29udGFpbmVyLmZpbmQoXCJkaXZcIikubGVuZ3RoID4gMTAwKS50b0JlKHRydWUpO1xuXHR9KTtcblx0XG5cdGFmdGVyQWxsKCgpID0+IHt9KTtcbn0pOyIsImltcG9ydCBcIi4vUmVuZGVyVGVzdC5qc1wiO1xuaW1wb3J0IFwiLi9SZW5kZXJNb2RlVGVzdC5qc1wiO1xuaW1wb3J0IFwiLi9Kc3RsVGFnUmVwbGFjZVRlc3QuanNcIjtcbiIsImltcG9ydCBUZW1wbGF0ZSBmcm9tIFwiQHNyYy9UZW1wbGF0ZS5qc1wiO1xuXG5kZXNjcmliZShcIlRlbXBsYXRlIENhY2hlIFRlc3QgLSBUZW1wbGF0ZS5sb2FkKClcIiwgKCkgPT4ge1xuXHRcblx0YmVmb3JlQWxsKCgpID0+IHt9KTtcdFxuXHRcblx0aXQoXCJsb2FkIGZyb20gc291cmNlIGNvZGVcIiwgYXN5bmMgKCkgPT4ge1xuXHRcdGNvbnN0IHNvdXJjZSA9XHRcIjxkaXY+XCIgK1xuXHRcdFx0XHRcdFx0XCJcXHQ8ZGl2PjwvZGl2PlwiICtcblx0XHRcdFx0XHRcdFwiXFx0PGRpdj48L2Rpdj5cIiArXG5cdFx0XHRcdFx0XHRcIjwvZGl2PlwiO1xuXG5cdFx0Y29uc3QgZXhwZWN0ZWQgPSBhd2FpdCBUZW1wbGF0ZS5sb2FkKHNvdXJjZSk7XG5cdFx0Y29uc3QgcmVzdWx0ID0gYXdhaXQgVGVtcGxhdGUubG9hZChzb3VyY2UpO1xuXHRcdGV4cGVjdChyZXN1bHQpLnRvQmUoZXhwZWN0ZWQpO1xuXHR9KTtcblx0XG5cdGl0KFwibG9hZCBmcm9tIHVybCBzdHJpbmdcIiwgYXN5bmMgKCkgPT4ge1x0XHRcblx0XHRjb25zdCBleHBlY3RlZCA9IGF3YWl0IFRlbXBsYXRlLmxvYWQoXCIvdGVtcGxhdGVzL1RlbXBsYXRlVGVzdC9Mb2FkRnJvbVVSTC5odG1sXCIpO1xuXHRcdGNvbnN0IHJlc3VsdCA9IGF3YWl0IFRlbXBsYXRlLmxvYWQoXCIvdGVtcGxhdGVzL1RlbXBsYXRlVGVzdC9Mb2FkRnJvbVVSTC5odG1sXCIpO1xuXHRcdGV4cGVjdChyZXN1bHQpLnRvQmUoZXhwZWN0ZWQpO1xuXHR9KTtcblx0XG5cdGl0KFwibG9hZCBmcm9tIHVybFwiLCBhc3luYyAoKSA9PiB7XHRcdFxuXHRcdGNvbnN0IHVybCA9IG5ldyBVUkwoXCIvdGVtcGxhdGVzL1RlbXBsYXRlVGVzdC9Mb2FkRnJvbVVSTC5odG1sXCIsIGxvY2F0aW9uLm9yaWdpbikudG9TdHJpbmcoKTtcblx0XHRcblx0XHRjb25zdCBleHBlY3RlZCA9IGF3YWl0IFRlbXBsYXRlLmxvYWQodXJsKTtcblx0XHRjb25zdCByZXN1bHQgPSBhd2FpdCBUZW1wbGF0ZS5sb2FkKHVybCk7XG5cdFx0ZXhwZWN0KHJlc3VsdCkudG9CZShleHBlY3RlZCk7XG5cdH0pO1xuXHRcblx0aXQoXCJsb2FkIGZyb20gSFRNTFRlbXBsYXRlRWxlbWVudFwiLCBhc3luYyAoKSA9PiB7XG5cdFx0Y29uc3QgdGVtcGxhdGUgPSBjcmVhdGUoXCI8ZGl2PlwiICtcblx0XHRcdFx0XHRcdFx0XHRcIlxcdDxkaXY+PC9kaXY+XCIgK1xuXHRcdFx0XHRcdFx0XHRcdFwiXFx0PGRpdj48L2Rpdj5cIiArXG5cdFx0XHRcdFx0XHRcdFx0XCI8L2Rpdj5cIiwgdHJ1ZSk7XHRcdFxuXHRcdFxuXHRcdGNvbnN0IGV4cGVjdGVkID0gYXdhaXQgVGVtcGxhdGUubG9hZCh0ZW1wbGF0ZSk7XG5cdFx0Y29uc3QgcmVzdWx0ID0gYXdhaXQgVGVtcGxhdGUubG9hZCh0ZW1wbGF0ZSk7XG5cdFx0ZXhwZWN0KHJlc3VsdCkudG9CZShleHBlY3RlZCk7XG5cdH0pO1xuXHRcblx0aXQoXCJsb2FkIGZyb20gTm9kZVwiLCBhc3luYyAoKSA9PiB7XG5cdFx0Y29uc3Qgbm9kZSA9IGNyZWF0ZShcIjxkaXY+XCIgK1xuXHRcdFx0XHRcdFx0XHRcdFwiXFx0PGRpdj48L2Rpdj5cIiArXG5cdFx0XHRcdFx0XHRcdFx0XCJcXHQ8ZGl2PjwvZGl2PlwiICtcblx0XHRcdFx0XHRcdFx0XHRcIjwvZGl2PlwiKS5maXJzdCgpO1x0XHRcblx0XHRcblx0XHRjb25zdCBleHBlY3RlZCA9IGF3YWl0IFRlbXBsYXRlLmxvYWQobm9kZSwgZmFsc2UpO1xuXHRcdGNvbnN0IHJlc3VsdCA9IGF3YWl0IFRlbXBsYXRlLmxvYWQobm9kZSwgZmFsc2UpO1xuXHRcdGV4cGVjdChyZXN1bHQpLm5vdC50b0JlKGV4cGVjdGVkKTtcblx0fSk7XG5cdFxuXHRpdChcImxvYWQgZnJvbSBOb2RlTGlzdFwiLCBhc3luYyAoKSA9PiB7XG5cdFx0Y29uc3Qgbm9kZWxpc3QgPSBjcmVhdGUoXCI8ZGl2PlwiICtcblx0XHRcdFx0XHRcdFx0XHRcIlxcdDxkaXY+PC9kaXY+XCIgK1xuXHRcdFx0XHRcdFx0XHRcdFwiXFx0PGRpdj48L2Rpdj5cIiArXG5cdFx0XHRcdFx0XHRcdFx0XCI8L2Rpdj5cIik7XG5cdFx0XG5cdFx0Y29uc3QgZXhwZWN0ZWQgPSBhd2FpdCBUZW1wbGF0ZS5sb2FkKG5vZGVsaXN0LCBmYWxzZSk7XG5cdFx0Y29uc3QgcmVzdWx0ID0gYXdhaXQgVGVtcGxhdGUubG9hZChub2RlbGlzdCwgZmFsc2UpO1xuXHRcdGV4cGVjdChyZXN1bHQpLm5vdC50b0JlKGV4cGVjdGVkKTtcblx0fSk7XG5cdFxuXHRpdChcImxvYWQgZnJvbSBIVE1MQ29sbGVjdGlvblwiLCBhc3luYyAoKSA9PiB7XG5cdFx0Y29uc3QgaHRtbGNvbGxlY3Rpb24gPSBjcmVhdGUoXCI8ZGl2PlwiICtcblx0XHRcdFx0XHRcdFx0XHRcIlxcdDxkaXY+PC9kaXY+XCIgK1xuXHRcdFx0XHRcdFx0XHRcdFwiXFx0PGRpdj48L2Rpdj5cIiArXG5cdFx0XHRcdFx0XHRcdFx0XCI8L2Rpdj5cIix0cnVlKS5jb250ZW50LmNoaWxkcmVuO1xuXHRcdFxuXHRcdGNvbnN0IGV4cGVjdGVkID0gYXdhaXQgVGVtcGxhdGUubG9hZChodG1sY29sbGVjdGlvbik7XG5cdFx0Y29uc3QgcmVzdWx0ID0gYXdhaXQgVGVtcGxhdGUubG9hZChodG1sY29sbGVjdGlvbik7XG5cdFx0ZXhwZWN0KHJlc3VsdCkubm90LnRvQmUoZXhwZWN0ZWQpO1xuXHR9KTtcblx0XG5cdGl0KFwibG9hZCB3aXRoIGFsaWFzXCIsIGFzeW5jICgpID0+IHtcblx0XHRjb25zdCBub2RlbGlzdCA9IGNyZWF0ZShcIjxkaXY+XCIgK1xuXHRcdFx0XHRcdFx0XHRcdFwiXFx0PGRpdj48L2Rpdj5cIiArXG5cdFx0XHRcdFx0XHRcdFx0XCJcXHQ8ZGl2PjwvZGl2PlwiICtcblx0XHRcdFx0XHRcdFx0XHRcIjwvZGl2PlwiKTtcblx0XHRcblx0XHRjb25zdCBleHBlY3RlZCA9IGF3YWl0IFRlbXBsYXRlLmxvYWQobm9kZWxpc3QsIHRydWUsIFwidGVzdFwiKTtcblx0XHRjb25zdCByZXN1bHQgPSBhd2FpdCBUZW1wbGF0ZS5sb2FkKG5vZGVsaXN0LCB0cnVlLCBcInRlc3RcIik7XG5cdFx0ZXhwZWN0KHJlc3VsdCkudG9CZShleHBlY3RlZCk7XG5cdH0pO1xuXHRcblx0YWZ0ZXJBbGwoKCkgPT4ge30pO1xufSk7IiwiaW1wb3J0IFRlbXBsYXRlIGZyb20gXCJAc3JjL1RlbXBsYXRlLmpzXCI7XG5cbmRlc2NyaWJlKFwiVGVtcGxhdGUgVGVzdCAtIFRlbXBsYXRlLmxvYWQoKVwiLCAoKSA9PiB7XG5cdFxuXHRiZWZvcmVBbGwoKCkgPT4ge30pO1x0XG5cdFxuXHRpdChcImxvYWQgZnJvbSBzb3VyY2UgY29kZVwiLCBhc3luYyAoKSA9PiB7XG5cdFx0Y29uc3Qgc291cmNlID1cdFwiPGRpdj5cIiArXG5cdFx0XHRcdFx0XHRcIlxcdDxkaXY+PC9kaXY+XCIgK1xuXHRcdFx0XHRcdFx0XCJcXHQ8ZGl2PjwvZGl2PlwiICtcblx0XHRcdFx0XHRcdFwiPC9kaXY+XCI7XG5cdFx0XG5cdFx0Y29uc3QgcmVzdWx0ID0gYXdhaXQgVGVtcGxhdGUubG9hZChzb3VyY2UsIGZhbHNlKTtcblx0XHRleHBlY3QocmVzdWx0KS50b0JlRGVmaW5lZCgpO1xuXHRcdGV4cGVjdChyZXN1bHQgaW5zdGFuY2VvZiBUZW1wbGF0ZSkudG9CZSh0cnVlKTtcblx0XHRleHBlY3QocmVzdWx0LnRlbXBsYXRlKS50b0JlRGVmaW5lZCgpO1xuXHRcdGV4cGVjdChyZXN1bHQudGVtcGxhdGUgaW5zdGFuY2VvZiBIVE1MVGVtcGxhdGVFbGVtZW50KS50b0JlKHRydWUpO1xuXHR9KTtcblx0XG5cdGl0KFwibG9hZCBmcm9tIHVybCBzdHJpbmdcIiwgYXN5bmMgKCkgPT4ge1x0XHRcblx0XHRjb25zdCByZXN1bHQgPSBhd2FpdCBUZW1wbGF0ZS5sb2FkKG5ldyBVUkwoXCIvdGVtcGxhdGVzL1RlbXBsYXRlVGVzdC9Mb2FkRnJvbVVSTC5odG1sXCIsIGxvY2F0aW9uKSwgZmFsc2UpO1xuXHRcdGV4cGVjdChyZXN1bHQpLnRvQmVEZWZpbmVkKCk7XG5cdFx0ZXhwZWN0KHJlc3VsdCBpbnN0YW5jZW9mIFRlbXBsYXRlKS50b0JlKHRydWUpO1xuXHRcdGV4cGVjdChyZXN1bHQudGVtcGxhdGUpLnRvQmVEZWZpbmVkKCk7XG5cdFx0ZXhwZWN0KHJlc3VsdC50ZW1wbGF0ZSBpbnN0YW5jZW9mIEhUTUxUZW1wbGF0ZUVsZW1lbnQpLnRvQmUodHJ1ZSk7XG5cdFx0ZXhwZWN0KHJlc3VsdC50ZW1wbGF0ZS5jb250ZW50LmNoaWxkcmVuLmxlbmd0aCkudG9CZSg1KTtcblx0XHRleHBlY3QocmVzdWx0LmtleSkudG9CZURlZmluZWQoKTtcblx0fSk7XG5cdFxuXHRpdChcImxvYWQgZnJvbSB1cmxcIiwgYXN5bmMgKCkgPT4ge1x0XHRcblx0XHRjb25zdCB1cmwgPSBuZXcgVVJMKFwiL3RlbXBsYXRlcy9UZW1wbGF0ZVRlc3QvTG9hZEZyb21VUkwuaHRtbFwiLCBsb2NhdGlvbik7XG5cdFx0Y29uc3QgcmVzdWx0ID0gYXdhaXQgVGVtcGxhdGUubG9hZCh1cmwudG9TdHJpbmcoKSwgZmFsc2UpO1xuXHRcdGV4cGVjdChyZXN1bHQpLnRvQmVEZWZpbmVkKCk7XG5cdFx0ZXhwZWN0KHJlc3VsdCBpbnN0YW5jZW9mIFRlbXBsYXRlKS50b0JlKHRydWUpO1xuXHRcdGV4cGVjdChyZXN1bHQudGVtcGxhdGUpLnRvQmVEZWZpbmVkKCk7XG5cdFx0ZXhwZWN0KHJlc3VsdC50ZW1wbGF0ZSBpbnN0YW5jZW9mIEhUTUxUZW1wbGF0ZUVsZW1lbnQpLnRvQmUodHJ1ZSk7XG5cdFx0ZXhwZWN0KHJlc3VsdC5rZXkpLnRvQmVEZWZpbmVkKCk7XG5cdH0pO1xuXHRcblx0aXQoXCJsb2FkIGZyb20gSFRNTFRlbXBsYXRlRWxlbWVudFwiLCBhc3luYyAoKSA9PiB7XG5cdFx0Y29uc3QgdGVtcGxhdGUgPSBjcmVhdGUoXCI8ZGl2PjwvZGl2PlwiICtcblx0XHRcdFx0XHRcdFx0XHRcIjxkaXY+PC9kaXY+XCIgK1xuXHRcdFx0XHRcdFx0XHRcdFwiPGRpdj48L2Rpdj5cIiArXG5cdFx0XHRcdFx0XHRcdFx0XCI8ZGl2PjwvZGl2PlwiICtcblx0XHRcdFx0XHRcdFx0XHRcIjxkaXY+PC9kaXY+XCIsIHRydWUpO1x0XHRcblx0XHRcblx0XHRjb25zdCByZXN1bHQgPSBhd2FpdCBUZW1wbGF0ZS5sb2FkKHRlbXBsYXRlLCBmYWxzZSk7XG5cdFx0ZXhwZWN0KHJlc3VsdCkudG9CZURlZmluZWQoKTtcblx0XHRleHBlY3QocmVzdWx0IGluc3RhbmNlb2YgVGVtcGxhdGUpLnRvQmUodHJ1ZSk7XG5cdFx0ZXhwZWN0KHJlc3VsdC50ZW1wbGF0ZSkudG9CZURlZmluZWQoKTtcblx0XHRleHBlY3QocmVzdWx0LnRlbXBsYXRlIGluc3RhbmNlb2YgSFRNTFRlbXBsYXRlRWxlbWVudCkudG9CZSh0cnVlKTtcblx0XHRleHBlY3QocmVzdWx0LnRlbXBsYXRlIGluc3RhbmNlb2YgSFRNTFRlbXBsYXRlRWxlbWVudCkudG9CZSh0cnVlKTtcblx0XHRleHBlY3QocmVzdWx0LnRlbXBsYXRlLmNvbnRlbnQuY2hpbGROb2Rlcy5sZW5ndGgpLnRvQmUoNSk7XG5cdFx0ZXhwZWN0KHJlc3VsdC5rZXkpLnRvQmVEZWZpbmVkKCk7XG5cdH0pO1xuXHRcblx0aXQoXCJsb2FkIGZyb20gTm9kZVwiLCBhc3luYyAoKSA9PiB7XG5cdFx0Y29uc3Qgbm9kZSA9IGNyZWF0ZShgPGRpdj48ZGl2PjwvZGl2PjxkaXY+PC9kaXY+PC9kaXY+YCkuZmlyc3QoKTtcdFx0XG5cdFx0XG5cdFx0ZXhwZWN0KG5vZGUgaW5zdGFuY2VvZiBOb2RlKS50b0JlKHRydWUpO1xuXHRcdGNvbnN0IHJlc3VsdCA9IGF3YWl0IFRlbXBsYXRlLmxvYWQobm9kZSwgZmFsc2UpO1xuXHRcdGV4cGVjdChyZXN1bHQpLnRvQmVEZWZpbmVkKCk7XG5cdFx0ZXhwZWN0KHJlc3VsdCBpbnN0YW5jZW9mIFRlbXBsYXRlKS50b0JlKHRydWUpO1xuXHRcdGV4cGVjdChyZXN1bHQudGVtcGxhdGUpLnRvQmVEZWZpbmVkKCk7XG5cdFx0ZXhwZWN0KHJlc3VsdC50ZW1wbGF0ZSBpbnN0YW5jZW9mIEhUTUxUZW1wbGF0ZUVsZW1lbnQpLnRvQmUodHJ1ZSk7XG5cdFx0ZXhwZWN0KHJlc3VsdC5pbXBvcnRDb250ZW50KCkubGVuZ3RoKS50b0JlKDEpO1xuXHRcdGV4cGVjdChyZXN1bHQua2V5KS50b0JlRGVmaW5lZCgpO1xuXHR9KTtcblx0XG5cdGl0KFwibG9hZCBmcm9tIE5vZGVMaXN0XCIsIGFzeW5jICgpID0+IHtcblx0XHRjb25zdCBub2RlbGlzdCA9IGNyZWF0ZShcIjxkaXY+XCIgK1xuXHRcdFx0XHRcdFx0XHRcdFwiXFx0PGRpdj48L2Rpdj5cIiArXG5cdFx0XHRcdFx0XHRcdFx0XCJcXHQ8ZGl2PjwvZGl2PlwiICtcblx0XHRcdFx0XHRcdFx0XHRcIjwvZGl2PlwiKTtcblxuXHRcdGV4cGVjdChub2RlbGlzdCBpbnN0YW5jZW9mIE5vZGVMaXN0KS50b0JlKHRydWUpO1xuXHRcdGNvbnN0IHJlc3VsdCA9IGF3YWl0IFRlbXBsYXRlLmxvYWQobm9kZWxpc3QsIGZhbHNlKTtcblx0XHRleHBlY3QocmVzdWx0KS50b0JlRGVmaW5lZCgpO1xuXHRcdGV4cGVjdChyZXN1bHQgaW5zdGFuY2VvZiBUZW1wbGF0ZSkudG9CZSh0cnVlKTtcblx0XHRleHBlY3QocmVzdWx0LnRlbXBsYXRlKS50b0JlRGVmaW5lZCgpO1xuXHRcdGV4cGVjdChyZXN1bHQudGVtcGxhdGUgaW5zdGFuY2VvZiBIVE1MVGVtcGxhdGVFbGVtZW50KS50b0JlKHRydWUpO1xuXHRcdGV4cGVjdChyZXN1bHQua2V5KS50b0JlRGVmaW5lZCgpO1xuXHR9KTtcblx0XG5cdGl0KFwibG9hZCBmcm9tIEhUTUxDb2xsZWN0aW9uXCIsIGFzeW5jICgpID0+IHtcblx0XHRjb25zdCBodG1sY29sbGVjdGlvbiA9IGNyZWF0ZShcIjxkaXY+XCIgK1xuXHRcdFx0XHRcdFx0XHRcdFwiXFx0PGRpdj48L2Rpdj5cIiArXG5cdFx0XHRcdFx0XHRcdFx0XCJcXHQ8ZGl2PjwvZGl2PlwiICtcblx0XHRcdFx0XHRcdFx0XHRcIjwvZGl2PlwiLHRydWUpLmNvbnRlbnQuY2hpbGRyZW47XG5cdFx0XG5cdFx0ZXhwZWN0KGh0bWxjb2xsZWN0aW9uIGluc3RhbmNlb2YgSFRNTENvbGxlY3Rpb24pLnRvQmUodHJ1ZSk7XG5cdFx0Y29uc3QgcmVzdWx0ID0gYXdhaXQgVGVtcGxhdGUubG9hZChodG1sY29sbGVjdGlvbiwgZmFsc2UpO1xuXHRcdGV4cGVjdChyZXN1bHQpLnRvQmVEZWZpbmVkKCk7XG5cdFx0ZXhwZWN0KHJlc3VsdCBpbnN0YW5jZW9mIFRlbXBsYXRlKS50b0JlKHRydWUpO1xuXHRcdGV4cGVjdChyZXN1bHQudGVtcGxhdGUpLnRvQmVEZWZpbmVkKCk7XG5cdFx0ZXhwZWN0KHJlc3VsdC50ZW1wbGF0ZSBpbnN0YW5jZW9mIEhUTUxUZW1wbGF0ZUVsZW1lbnQpLnRvQmUodHJ1ZSk7XG5cdFx0ZXhwZWN0KHJlc3VsdC5rZXkpLnRvQmVEZWZpbmVkKCk7XG5cdH0pO1xuXHRcblx0YWZ0ZXJBbGwoKCkgPT4ge30pO1xufSk7IiwiaW1wb3J0IFwiLi9Mb2FkVGVzdC5qc1wiO1xuaW1wb3J0IFwiLi9DYWNoZVRlc3QuanNcIjsiLCJpbXBvcnQgUmVuZGVyZXIgZnJvbSBcIkBzcmMvUmVuZGVyZXIuanNcIjtcblxuZGVzY3JpYmUoXCJBdHRyaWJ1dGUgVGVzdCAtIFwiLCAoKSA9PiB7XG5cblx0YmVmb3JlQWxsKCgpID0+IHsgfSk7XG5cblx0aXQoXCJrZWVwIGF0dHJpYnV0ZXMgZnJvbSB0ZW1wbGF0ZVwiLCBhc3luYyAoKSA9PiB7XG5cdFx0Y29uc3QgY29udGFpbmVyID0gY3JlYXRlKFwiPGRpdj48L2Rpdj5cIikuZmlyc3QoKTtcblx0XHRjb25zdCByZW5kZXJlciA9IGF3YWl0IFJlbmRlcmVyLmJ1aWxkKHsgdGVtcGxhdGU6IFwiPGRpdiBpZD1cXFwiaWRcXFwiIGF0dHItMT1cXFwiYXR0ci0xXFxcIiBkYXRhLXRlc3QtMT1cXFwiZGF0YS10ZXN0LTFcXFwiPjwvZGl2PlwiIH0pO1xuXG5cdFx0YXdhaXQgcmVuZGVyZXIucmVuZGVyKHsgY29udGFpbmVyIH0pO1xuXHRcdGxldCBlbGVtZW50ID0gY29udGFpbmVyLmNoaWxkcmVuWzBdO1xuXG5cdFx0ZXhwZWN0KGVsZW1lbnQuYXR0cihcImlkXCIpKS50b0JlKFwiaWRcIik7XG5cdFx0ZXhwZWN0KGVsZW1lbnQuYXR0cihcImF0dHItMVwiKSkudG9CZShcImF0dHItMVwiKTtcblx0XHRleHBlY3QoZWxlbWVudC5hdHRyKFwiZGF0YS10ZXN0LTFcIikpLnRvQmUoXCJkYXRhLXRlc3QtMVwiKTtcblx0fSk7XG5cblx0aXQoXCJib29sZWFuIGF0dHJpYnV0ZXMgLT4gP2Jvb2xlYW49XFxcIiR7Ym9vbGVhbn1cXFwiXCIsIGFzeW5jICgpID0+IHtcblx0XHRjb25zdCBjb250YWluZXIgPSBjcmVhdGUoXCI8ZGl2PjwvZGl2PlwiKS5maXJzdCgpO1xuXHRcdGNvbnN0IHJlbmRlcmVyID0gYXdhaXQgUmVuZGVyZXIuYnVpbGQoeyB0ZW1wbGF0ZTogXCI8ZGl2ID9ib29sZWFuPVxcXCIke2Jvb2xlYW59XFxcIj48L2Rpdj5cIiB9KTtcblxuXHRcdGF3YWl0IHJlbmRlcmVyLnJlbmRlcih7IGNvbnRhaW5lciwgZGF0YTogeyBib29sZWFuOiB0cnVlIH0gfSk7XG5cdFx0bGV0IGVsZW1lbnQgPSBjb250YWluZXIuY2hpbGRyZW5bMF07XG5cdFx0ZXhwZWN0KGVsZW1lbnQuYXR0cihcImJvb2xlYW5cIikpLnRvQmUoXCJ0cnVlXCIpO1xuXG5cdFx0YXdhaXQgcmVuZGVyZXIucmVuZGVyKHsgY29udGFpbmVyLCBkYXRhOiB7IGJvb2xlYW46IGZhbHNlIH0gfSk7XG5cdFx0ZWxlbWVudCA9IGNvbnRhaW5lci5jaGlsZHJlblswXTtcblx0XHRleHBlY3QoZWxlbWVudC5hdHRyKFwiYm9vbGVhblwiKSkudG9CZShudWxsKTtcblx0fSk7XG5cblxuXHRpdChcImFwcGVuZCBhdHRyaWJ1dGVzIC0+IGF0dHI9XFxcIiR7YXR0cn1cXFwiXCIsIGFzeW5jICgpID0+IHtcblx0XHRjb25zdCBjb250YWluZXIgPSBjcmVhdGUoXCI8ZGl2PjwvZGl2PlwiKS5maXJzdCgpO1xuXHRcdGNvbnN0IHJlbmRlcmVyID0gYXdhaXQgUmVuZGVyZXIuYnVpbGQoeyB0ZW1wbGF0ZTogXCI8ZGl2IGF0dHI9XFxcIiR7YXR0cn1cXFwiPjwvZGl2PlwiIH0pO1xuXG5cdFx0YXdhaXQgcmVuZGVyZXIucmVuZGVyKHsgY29udGFpbmVyLCBkYXRhOiB7IGF0dHI6IFwiYXR0clwiIH0gfSk7XG5cdFx0bGV0IGVsZW1lbnQgPSBjb250YWluZXIuY2hpbGRyZW5bMF07XG5cdFx0ZXhwZWN0KGVsZW1lbnQuYXR0cihcImF0dHJcIikpLnRvQmUoXCJhdHRyXCIpO1xuXHR9KTtcblx0XG5cdGl0KFwiYXBwZW5kIGF0dHJpYnV0ZXMgLT4gYXR0cj1cXFwiXFxcIlwiLCBhc3luYyAoKSA9PiB7XG5cdFx0Y29uc3QgY29udGFpbmVyID0gY3JlYXRlKFwiPGRpdj48L2Rpdj5cIikuZmlyc3QoKTtcblx0XHRjb25zdCByZW5kZXJlciA9IGF3YWl0IFJlbmRlcmVyLmJ1aWxkKHsgdGVtcGxhdGU6IFwiPGRpdiBhdHRyPVxcXCJcXFwiPjwvZGl2PlwiIH0pO1xuXG5cdFx0YXdhaXQgcmVuZGVyZXIucmVuZGVyKHsgY29udGFpbmVyLCBkYXRhOiB7IGF0dHI6IFwiYXR0clwiIH0gfSk7XG5cdFx0bGV0IGVsZW1lbnQgPSBjb250YWluZXIuY2hpbGRyZW5bMF07XG5cdFx0ZXhwZWN0KGVsZW1lbnQuYXR0cihcImF0dHJcIikpLnRvQmUoXCJcIik7XG5cdH0pO1xuXG5cblx0aXQoXCJhcHBlbmQgYXR0cmlidXRlcyB3aXRoIGNvbmRpdGlvbj10cnVlIC0+ID9hdHRyPVxcXCIke2Jvb2xlYW59XFxcIiBhdHRyPVxcXCIke2F0dHJ9XFxcIlwiLCBhc3luYyAoKSA9PiB7XG5cdFx0Y29uc3QgY29udGFpbmVyID0gY3JlYXRlKFwiPGRpdj48L2Rpdj5cIikuZmlyc3QoKTtcblx0XHRjb25zdCByZW5kZXJlciA9IGF3YWl0IFJlbmRlcmVyLmJ1aWxkKHsgdGVtcGxhdGU6IFwiPGRpdiA/YXR0cj1cXFwiJHtib29sZWFufVxcXCIgYXR0cj1cXFwiJHthdHRyfVxcXCI+PC9kaXY+XCIgfSk7XG5cblx0XHRhd2FpdCByZW5kZXJlci5yZW5kZXIoeyBjb250YWluZXIsIGRhdGE6IHsgYXR0cjogXCJhdHRyXCIsIGJvb2xlYW46IHRydWUgfSB9KTtcblx0XHRsZXQgZWxlbWVudCA9IGNvbnRhaW5lci5jaGlsZHJlblswXTtcblx0XHRleHBlY3QoZWxlbWVudC5hdHRyKFwiYXR0clwiKSkudG9CZShcImF0dHJcIik7XG5cdH0pO1xuXG5cdGl0KFwiYXBwZW5kIGF0dHJpYnV0ZXMgd2l0aCBjb25kaXRpb249ZmFsc2UgLT4gP2F0dHI9XFxcIiR7Ym9vbGVhbn1cXFwiIGF0dHI9XFxcIiR7YXR0cn1cXFwiXCIsIGFzeW5jICgpID0+IHtcblx0XHRjb25zdCBjb250YWluZXIgPSBjcmVhdGUoXCI8ZGl2PjwvZGl2PlwiKS5maXJzdCgpO1xuXHRcdGNvbnN0IHJlbmRlcmVyID0gYXdhaXQgUmVuZGVyZXIuYnVpbGQoeyB0ZW1wbGF0ZTogXCI8ZGl2ID9hdHRyPVxcXCIke2Jvb2xlYW59XFxcIiBhdHRyPVxcXCIke2F0dHJ9XFxcIj48L2Rpdj5cIiB9KTtcblxuXHRcdGF3YWl0IHJlbmRlcmVyLnJlbmRlcih7IGNvbnRhaW5lciwgZGF0YTogeyBhdHRyOiBcImF0dHJcIiwgYm9vbGVhbjogZmFsc2UgfSB9KTtcblx0XHRsZXQgZWxlbWVudCA9IGNvbnRhaW5lci5jaGlsZHJlblswXTtcblx0XHRleHBlY3QoZWxlbWVudC5hdHRyKFwiYXR0clwiKSkudG9CZShudWxsKTtcblx0fSk7XG5cblxuXHRpdChcImV2ZW50IGJpbmQgd2l0aCBub3JtYWwgZnVuY3Rpb25cIiwgYXN5bmMgKCkgPT4ge1xuXHRcdGNvbnN0IGNvbnRhaW5lciA9IGNyZWF0ZShcIjxkaXY+PC9kaXY+XCIpLmZpcnN0KCk7XG5cdFx0Y29uc3QgcmVuZGVyZXIgPSBhd2FpdCBSZW5kZXJlci5idWlsZCh7IHRlbXBsYXRlOiBcIjxkaXYgQGNsaWNrPVxcXCIke2FjdGlvbn1cXFwiPjwvZGl2PlwiIH0pO1xuXG5cblx0XHRsZXQgYWN0aW9uID0gbnVsbFxuXHRcdGNvbnN0IHByb21pc2UgPSBuZXcgUHJvbWlzZSgocikgPT4ge1xuXHRcdFx0YWN0aW9uID0gZnVuY3Rpb24oZSkge1xuXHRcdFx0XHRyKCk7XG5cdFx0XHR9O1xuXHRcdH0pO1xuXG5cdFx0YXdhaXQgcmVuZGVyZXIucmVuZGVyKHsgY29udGFpbmVyLCBkYXRhOiB7IGFjdGlvbiwgYm9vbGVhbjogZmFsc2UgfSB9KTtcblx0XHRzZXRUaW1lb3V0KCgpID0+IGNvbnRhaW5lci5jaGlsZHJlblswXS50cmlnZ2VyKFwiY2xpY2tcIiksIDEpO1xuXG5cdFx0cmV0dXJuIHByb21pc2U7XG5cdH0pO1xuXG5cdGl0KFwiZXZlbnQgYmluZCB3aXRoIGFycm93IGZ1bmN0aW9uXCIsIGFzeW5jICgpID0+IHtcblx0XHRjb25zdCBjb250YWluZXIgPSBjcmVhdGUoXCI8ZGl2PjwvZGl2PlwiKS5maXJzdCgpO1xuXHRcdGNvbnN0IHJlbmRlcmVyID0gYXdhaXQgUmVuZGVyZXIuYnVpbGQoeyB0ZW1wbGF0ZTogXCI8ZGl2IEBjbGljaz1cXFwiJHthY3Rpb259XFxcIj48L2Rpdj5cIiB9KTtcblxuXG5cdFx0bGV0IGFjdGlvbiA9IG51bGxcblx0XHRjb25zdCBwcm9taXNlID0gbmV3IFByb21pc2UoKHIpID0+IHtcblx0XHRcdGFjdGlvbiA9IChlKSA9PiB7XG5cdFx0XHRcdHIoKTtcblx0XHRcdH07XG5cdFx0fSk7XG5cblx0XHRhd2FpdCByZW5kZXJlci5yZW5kZXIoeyBjb250YWluZXIsIGRhdGE6IHsgYWN0aW9uLCBib29sZWFuOiBmYWxzZSB9IH0pO1xuXHRcdHNldFRpbWVvdXQoKCkgPT4gY29udGFpbmVyLmNoaWxkcmVuWzBdLnRyaWdnZXIoXCJjbGlja1wiKSwgMSk7XG5cblx0XHRyZXR1cm4gcHJvbWlzZTtcblx0fSk7XG5cdFxuXHRpdChcImV2ZW50IGJpbmQgLSBkZWxlZ2F0ZVwiLCBhc3luYyAoKSA9PiB7XG5cdFx0Y29uc3QgY29udGFpbmVyID0gY3JlYXRlKFwiPGRpdj48L2Rpdj5cIikuZmlyc3QoKTtcblx0XHRjb25zdCByZW5kZXJlciA9IGF3YWl0IFJlbmRlcmVyLmJ1aWxkKHsgdGVtcGxhdGU6IFwiPGRpdiBAY2xpY2s6ZGVsZWdhdGU9XFxcIiR7YWN0aW9ufVxcXCI+PC9kaXY+XCIgfSk7XG5cblxuXHRcdGxldCBoYW5kbGUgPSBudWxsXG5cdFx0Y29uc3QgcHJvbWlzZSA9IG5ldyBQcm9taXNlKChyKSA9PiB7XG5cdFx0XHRoYW5kbGUgPSAoZSkgPT4ge1xuXHRcdFx0XHRyKCk7XG5cdFx0XHR9O1xuXHRcdH0pO1xuXG5cdFx0YXdhaXQgcmVuZGVyZXIucmVuZGVyKHsgY29udGFpbmVyLCBkYXRhOiB7IGFjdGlvbjogXCJldmVudC1kZWxlZ2F0ZS10ZXN0XCIsIGJvb2xlYW46IGZhbHNlIH0gfSk7XG5cdFx0Y29udGFpbmVyLmNoaWxkcmVuWzBdLm9uKFwiZXZlbnQtZGVsZWdhdGUtdGVzdFwiLCBoYW5kbGUpO1xuXHRcdHNldFRpbWVvdXQoKCkgPT4gY29udGFpbmVyLmNoaWxkcmVuWzBdLnRyaWdnZXIoXCJjbGlja1wiKSwgMSk7XG5cblx0XHRyZXR1cm4gcHJvbWlzZTtcblx0fSk7XG5cdFxuXHRpdChcImV2ZW50IGJpbmQgLSBkZWxlZ2F0ZSAtPiB0cmlnZ2VyZWQgYXQgY2hpbGRcIiwgYXN5bmMgKCkgPT4ge1xuXHRcdGNvbnN0IGNvbnRhaW5lciA9IGNyZWF0ZShcIjxkaXY+PC9kaXY+XCIpLmZpcnN0KCk7XG5cdFx0Y29uc3QgcmVuZGVyZXIgPSBhd2FpdCBSZW5kZXJlci5idWlsZCh7IHRlbXBsYXRlOiBcIjxkaXYgQGNsaWNrOmRlbGVnYXRlPVxcXCIke2FjdGlvbn1cXFwiPjxzcGFuPnRyaWdnZXI8L3NwYW4+PC9kaXY+XCIgfSk7XG5cblxuXHRcdGxldCBoYW5kbGUgPSBudWxsXG5cdFx0Y29uc3QgcHJvbWlzZSA9IG5ldyBQcm9taXNlKChyKSA9PiB7XG5cdFx0XHRoYW5kbGUgPSAoZSkgPT4ge1xuXHRcdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdGUuc3RvcFByb3BhZ2F0aW9uKCk7XG5cdFx0XHRcdGV4cGVjdChlLnRhcmdldCkudG9CZShjb250YWluZXIuY2hpbGRyZW5bMF0pO1xuXHRcdFx0XHRyKCk7XG5cdFx0XHR9O1xuXHRcdH0pO1xuXG5cdFx0YXdhaXQgcmVuZGVyZXIucmVuZGVyKHsgY29udGFpbmVyLCBkYXRhOiB7IGFjdGlvbjogXCJldmVudC1kZWxlZ2F0ZS10ZXN0XCIsIGJvb2xlYW46IGZhbHNlIH0gfSk7XG5cdFx0Y29udGFpbmVyLm9uKFwiZXZlbnQtZGVsZWdhdGUtdGVzdFwiLCBoYW5kbGUpO1xuXHRcdHNldFRpbWVvdXQoKCkgPT4gY29udGFpbmVyLmNoaWxkcmVuWzBdLmNoaWxkcmVuWzBdLnRyaWdnZXIoXCJjbGlja1wiKSwgMSk7XG5cblx0XHRyZXR1cm4gcHJvbWlzZTtcblx0fSk7XG5cblxuXHRpdChcImV2ZW50IGJpbmQgLSBkZWxlZ2F0ZSAoaW1wbGljZWQpXCIsIGFzeW5jICgpID0+IHtcblx0XHRjb25zdCBjb250YWluZXIgPSBjcmVhdGUoXCI8ZGl2PjwvZGl2PlwiKS5maXJzdCgpO1xuXHRcdGNvbnN0IHJlbmRlcmVyID0gYXdhaXQgUmVuZGVyZXIuYnVpbGQoeyB0ZW1wbGF0ZTogXCI8ZGl2IEBjbGljaz1cXFwiJHthY3Rpb259XFxcIj48L2Rpdj5cIiB9KTtcblxuXG5cdFx0bGV0IGhhbmRsZSA9IG51bGxcblx0XHRjb25zdCBwcm9taXNlID0gbmV3IFByb21pc2UoKHIpID0+IHtcblx0XHRcdGhhbmRsZSA9IChlKSA9PiB7XG5cdFx0XHRcdHIoKTtcblx0XHRcdH07XG5cdFx0fSk7XG5cblx0XHRhd2FpdCByZW5kZXJlci5yZW5kZXIoeyBjb250YWluZXIsIGRhdGE6IHsgYWN0aW9uOiBcImV2ZW50LWRlbGVnYXRlLXRlc3RcIiwgYm9vbGVhbjogZmFsc2UgfSB9KTtcblx0XHRjb250YWluZXIuY2hpbGRyZW5bMF0ub24oXCJldmVudC1kZWxlZ2F0ZS10ZXN0XCIsIGhhbmRsZSk7XG5cdFx0c2V0VGltZW91dCgoKSA9PiBjb250YWluZXIuY2hpbGRyZW5bMF0udHJpZ2dlcihcImNsaWNrXCIpLCAxKTtcblxuXHRcdHJldHVybiBwcm9taXNlO1xuXHR9KTtcblx0XG5cdGl0KFwiZXZlbnQgYmluZDpkZWxlZ2F0ZSAtIHdpdGggY29uZGl0aW9uXCIsIGFzeW5jICgpID0+IHtcblx0XHRjb25zdCBjb250YWluZXIgPSBjcmVhdGUoXCI8ZGl2PjwvZGl2PlwiKS5maXJzdCgpO1xuXHRcdGNvbnN0IHJlbmRlcmVyID0gYXdhaXQgUmVuZGVyZXIuYnVpbGQoeyB0ZW1wbGF0ZTogXCI8ZGl2ID9AY2xpY2s6ZGVsZWdhdGU9XFxcIiR7Ym9vbGVhbn1cXFwiIEBjbGljazpkZWxlZ2F0ZT1cXFwiJHthY3Rpb259XFxcIj48L2Rpdj5cIiB9KTtcblxuXG5cdFx0bGV0IGhhbmRsZSA9IG51bGxcblx0XHRjb25zdCBwcm9taXNlID0gbmV3IFByb21pc2UoKHIpID0+IHtcblx0XHRcdGhhbmRsZSA9IChlKSA9PiB7XG5cdFx0XHRcdHIoKTtcblx0XHRcdH07XG5cdFx0fSk7XG5cblx0XHRhd2FpdCByZW5kZXJlci5yZW5kZXIoeyBjb250YWluZXIsIGRhdGE6IHsgYWN0aW9uOiBcImV2ZW50LWRlbGVnYXRlLXRlc3RcIiwgYm9vbGVhbjogdHJ1ZSB9IH0pO1xuXHRcdGNvbnRhaW5lci5jaGlsZHJlblswXS5vbihcImV2ZW50LWRlbGVnYXRlLXRlc3RcIiwgaGFuZGxlKTtcblx0XHRzZXRUaW1lb3V0KCgpID0+IGNvbnRhaW5lci5jaGlsZHJlblswXS50cmlnZ2VyKFwiY2xpY2tcIiksIDEpO1xuXG5cdFx0cmV0dXJuIHByb21pc2U7XG5cdH0pO1xuXG5cdGl0KFwiZXZlbnQgYmluZDpkZWxlZ2F0ZSAtIHdpdGggY29uZGl0aW9uXCIsIGFzeW5jICgpID0+IHtcblx0XHRjb25zdCBjb250YWluZXIgPSBjcmVhdGUoXCI8ZGl2PjwvZGl2PlwiKS5maXJzdCgpO1xuXHRcdGNvbnN0IHJlbmRlcmVyID0gYXdhaXQgUmVuZGVyZXIuYnVpbGQoeyB0ZW1wbGF0ZTogXCI8ZGl2ID9AY2xpY2s6ZGVsZWdhdGU9XFxcIiR7Ym9vbGVhbn1cXFwiIEBjbGljazpkZWxlZ2F0ZT1cXFwiJHthY3Rpb259XFxcIj48L2Rpdj5cIiB9KTtcblxuXG5cdFx0bGV0IGhhbmRsZSA9IG51bGxcblx0XHRjb25zdCBwcm9taXNlID0gbmV3IFByb21pc2UoKHIpID0+IHtcblx0XHRcdGhhbmRsZSA9IChlKSA9PiB7XG5cdFx0XHRcdHRocm93IG5ldyBFcnJvcigpO1xuXHRcdFx0fTtcblx0XHR9KTtcblxuXHRcdGF3YWl0IHJlbmRlcmVyLnJlbmRlcih7IGNvbnRhaW5lciwgZGF0YTogeyBhY3Rpb246IFwiZXZlbnQtZGVsZWdhdGUtdGVzdFwiLCBib29sZWFuOiBmYWxzZSB9IH0pO1xuXHRcdGNvbnRhaW5lci5jaGlsZHJlblswXS5vbihcImV2ZW50LWRlbGVnYXRlLXRlc3RcIiwgaGFuZGxlKTtcblx0XHRzZXRUaW1lb3V0KCgpID0+IGNvbnRhaW5lci5jaGlsZHJlblswXS50cmlnZ2VyKFwiY2xpY2tcIiksIDEpO1xuXG5cdFx0cmV0dXJuIFByb21pc2UucmFjZShbcHJvbWlzZSwgbmV3IFByb21pc2UoKHIpID0+IHtcblx0XHRcdHNldFRpbWVvdXQociwgMTAwKTtcblx0XHR9KV0pO1xuXHR9KTtcblxuXG5cblx0aXQoXCJhdHRyaWJ1dGVzIGNvcGllZFwiLCBhc3luYyAoKSA9PiB7XG5cdFx0Y29uc3QgY29udGFpbmVyID0gY3JlYXRlKFwiPGRpdj48L2Rpdj5cIikuZmlyc3QoKTtcblx0XHRjb25zdCByZW5kZXJlciA9IGF3YWl0IFJlbmRlcmVyLmJ1aWxkKHsgdGVtcGxhdGU6IFwiPGRpdiBpZD1cXFwiaWRcXFwiIGF0dHItMT1cXFwiYXR0ci0xXFxcIiBkYXRhLXRlc3QtMT1cXFwiZGF0YS10ZXN0LTFcXFwiID9kYXRhLXRlc3QtMj1cXFwidHJ1ZVxcXCIgZGF0YS10ZXN0LTI9XFxcImRhdGEtdGVzdC0yXFxcIiA/ZGF0YS10ZXN0LTM9XFxcImZhbHNlXFxcIiBkYXRhLXRlc3QtMz1cXFwiZGF0YS10ZXN0LTNcXFwiIGRhdGEtdGVzdC00PVxcXCJkYXRhLXRlc3QtNFxcXCI+PC9kaXY+XCIgfSk7XG5cblx0XHRhd2FpdCByZW5kZXJlci5yZW5kZXIoeyBjb250YWluZXIgfSk7XG5cdFx0bGV0IGVsZW1lbnQgPSBjb250YWluZXIuY2hpbGRyZW5bMF07XG5cblx0XHRleHBlY3QoZWxlbWVudC5hdHRyKFwiaWRcIikpLnRvQmUoXCJpZFwiKTtcblx0XHRleHBlY3QoZWxlbWVudC5hdHRyKFwiYXR0ci0xXCIpKS50b0JlKFwiYXR0ci0xXCIpO1xuXHRcdGV4cGVjdChlbGVtZW50LmF0dHIoXCJkYXRhLXRlc3QtMVwiKSkudG9CZShcImRhdGEtdGVzdC0xXCIpO1xuXHRcdGV4cGVjdChlbGVtZW50LmF0dHIoXCJkYXRhLXRlc3QtMlwiKSkudG9CZShcImRhdGEtdGVzdC0yXCIpO1xuXHRcdGV4cGVjdChlbGVtZW50LmF0dHIoXCJkYXRhLXRlc3QtM1wiKSkudG9CZShudWxsKTtcblx0XHRleHBlY3QoZWxlbWVudC5hdHRyKFwiZGF0YS10ZXN0LTRcIikpLnRvQmUoXCJkYXRhLXRlc3QtNFwiKTtcblx0fSk7XG5cblx0YWZ0ZXJBbGwoKCkgPT4geyB9KTtcbn0pOyIsImltcG9ydCBSZW5kZXJlciBmcm9tIFwiQHNyYy9SZW5kZXJlci5qc1wiO1xuaW1wb3J0IFRlbXBsYXRlIGZyb20gXCJAc3JjL1RlbXBsYXRlLmpzXCI7XG5cbmRlc2NyaWJlKFwiQ2hvb3NlIFRlc3QgLSBcIiwgKCkgPT4ge1xuXHRcblx0YmVmb3JlQWxsKCgpID0+IHt9KTtcblx0XG5cdGl0KFwiY2FzZSAxXCIsIGFzeW5jICgpID0+IHtcblx0XHRjb25zdCB0ZW1wbGF0ZSA9IGF3YWl0IFRlbXBsYXRlLmxvYWQoXG5cdFx0XHRcIjxkaXYganN0bC1jaG9vc2U+XCIgK1xuXHRcdFx0XHRcIjxkaXYganN0bC13aGVuPVxcXCIke3VzZWNhc2U9PTF9XFxcIj4xPC9kaXY+XCIgK1xuXHRcdFx0XHRcIjxkaXYganN0bC13aGVuPVxcXCIke3VzZWNhc2U9PTJ9XFxcIj4yPC9kaXY+XCIgKyBcblx0XHRcdFx0XCI8ZGl2IGpzdGwtd2hlbj1cXFwiJHt1c2VjYXNlPT0zfVxcXCI+MzwvZGl2PlwiICtcblx0XHRcdFx0XCI8ZGl2IGpzdGwtb3RoZXJ3aXNlPm90aGVyd2lzZTwvZGl2PlwiICtcblx0XHRcdFwiPC9kaXY+XCIsIGZhbHNlKTtcblx0XHRjb25zdCBjb250YWluZXIgPSBjcmVhdGUoXCI8ZGl2PjwvZGl2PlwiKS5maXJzdCgpO1x0XHRcblx0XHRjb25zdCByZW5kZXJlciA9IG5ldyBSZW5kZXJlcih7dGVtcGxhdGV9KTtcblx0XHRcblx0XHRhd2FpdCByZW5kZXJlci5yZW5kZXIoe2NvbnRhaW5lciwgZGF0YToge3VzZWNhc2UgOiAxfX0pO1xuXHRcdGxldCBlbGVtZW50ID0gY29udGFpbmVyLmNoaWxkcmVuWzBdO1x0XHRcblx0XHRleHBlY3QoZWxlbWVudC5jaGlsZHJlbi5sZW5ndGgpLnRvQmUoMSk7XG5cdFx0ZXhwZWN0KGVsZW1lbnQuY2hpbGRyZW5bMF0udGV4dENvbnRlbnQpLnRvQmUoXCIxXCIpO1xuXHRcdFxuXHRcdGF3YWl0IHJlbmRlcmVyLnJlbmRlcih7Y29udGFpbmVyLCBkYXRhOiB7dXNlY2FzZSA6IDJ9fSk7XG5cdFx0ZWxlbWVudCA9IGNvbnRhaW5lci5jaGlsZHJlblswXTtcdFx0XG5cdFx0ZXhwZWN0KGVsZW1lbnQuY2hpbGRyZW4ubGVuZ3RoKS50b0JlKDEpO1xuXHRcdGV4cGVjdChlbGVtZW50LmNoaWxkcmVuWzBdLnRleHRDb250ZW50KS50b0JlKFwiMlwiKTtcdFx0XG5cdFx0XG5cdFx0YXdhaXQgcmVuZGVyZXIucmVuZGVyKHtjb250YWluZXIsIGRhdGE6IHt1c2VjYXNlIDogMTAwfX0pO1xuXHRcdGVsZW1lbnQgPSBjb250YWluZXIuY2hpbGRyZW5bMF07XHRcdFxuXHRcdGV4cGVjdChlbGVtZW50LmNoaWxkcmVuLmxlbmd0aCkudG9CZSgxKTtcblx0XHRleHBlY3QoZWxlbWVudC5jaGlsZHJlblswXS50ZXh0Q29udGVudCkudG9CZShcIm90aGVyd2lzZVwiKTtcblx0fSk7XG5cdFxuXHRcblx0YWZ0ZXJBbGwoKCkgPT4ge30pO1xufSk7IiwiaW1wb3J0IFJlbmRlcmVyIGZyb20gXCJAc3JjL1JlbmRlcmVyLmpzXCI7XG5cbmRlc2NyaWJlKFwiRGF0YSBUZXN0IC0gXCIsICgpID0+IHtcblx0XG5cdGJlZm9yZUFsbCgoKSA9PiB7fSk7XG5cdFxuXHRpdChcImxvYWQgZGF0YSBmcm9tIHVybFwiLCBhc3luYyAoKSA9PiB7XHRcdFxuXHRcdGNvbnN0IGNvbnRhaW5lciA9IGNyZWF0ZShcIjxkaXY+PC9kaXY+XCIpLmZpcnN0KCk7XHRcdFxuXHRcdGNvbnN0IHJlbmRlcmVyID0gYXdhaXQgUmVuZGVyZXIuYnVpbGQoe3RlbXBsYXRlOiBcIjxkaXYganN0bC1kYXRhPVxcXCIvZGF0YS9EYXRhVGVzdC9yZW1vdGUtZGF0YS5qc29uXFxcIj4ke3Rlc3QxfTwvZGl2PlwifSk7XG5cdFx0XG5cdFx0YXdhaXQgcmVuZGVyZXIucmVuZGVyKHtjb250YWluZXJ9KTtcdFx0XG5cdFx0ZXhwZWN0KGNvbnRhaW5lci5jaGlsZHJlbi5sZW5ndGgpLnRvQmUoMSk7XG5cdFx0ZXhwZWN0KGNvbnRhaW5lci5jaGlsZHJlblswXS50ZXh0Q29udGVudCkudG9CZShcInZhbHVlLTFcIik7XG5cdH0pO1xuXHRcblx0aXQoXCJsb2FkIGRhdGEgaW50byB2YXJpYWJsZSAtIGRpcmVjdCBtb2RlXCIsIGFzeW5jICgpID0+IHtcdFx0XG5cdFx0Y29uc3QgY29udGFpbmVyID0gY3JlYXRlKFwiPGRpdj48L2Rpdj5cIikuZmlyc3QoKTtcdFx0XG5cdFx0Y29uc3QgcmVuZGVyZXIgPSBhd2FpdCBSZW5kZXJlci5idWlsZCh7dGVtcGxhdGU6IFwiPGRpdiBqc3RsLWRhdGE9XFxcInZhbHVlLTFcXFwiIGpzdGwtZGF0YS12YXI9XFxcInRlc3QxXFxcIiBqc3RsLWRhdGEtbW9kZT1cXFwiZGlyZWN0XFxcIj4ke3Rlc3QxfTwvZGl2PlwifSk7XG5cdFx0XG5cdFx0YXdhaXQgcmVuZGVyZXIucmVuZGVyKHtjb250YWluZXJ9KTtcdFx0XG5cdFx0ZXhwZWN0KGNvbnRhaW5lci5jaGlsZHJlbi5sZW5ndGgpLnRvQmUoMSk7XG5cdFx0ZXhwZWN0KGNvbnRhaW5lci5jaGlsZHJlblswXS50ZXh0Q29udGVudCkudG9CZShcInZhbHVlLTFcIik7XG5cdH0pO1xuXHRcblx0aXQoXCJjb3B5IGRhdGEgaW50byB2YXJpYWJsZSAtIHNldCBtb2RlXCIsIGFzeW5jICgpID0+IHtcdFx0XG5cdFx0Y29uc3QgY29udGFpbmVyID0gY3JlYXRlKFwiPGRpdj48L2Rpdj5cIikuZmlyc3QoKTtcdFx0XG5cdFx0Y29uc3QgcmVuZGVyZXIgPSBhd2FpdCBSZW5kZXJlci5idWlsZCh7dGVtcGxhdGU6IFwiPGRpdiBqc3RsLWRhdGE9XFxcIiR7dGVzdH1cXFwiIGpzdGwtZGF0YS12YXI9XFxcInRlc3QxXFxcIiBqc3RsLWRhdGEtbW9kZT1cXFwic2V0XFxcIj4ke3Rlc3QxLmRhdGF9PC9kaXY+XCIsIGRhdGE6IHt0ZXN0OiB7ZGF0YTpcInZhbHVlLTFcIn19fSk7XG5cdFx0XG5cdFx0YXdhaXQgcmVuZGVyZXIucmVuZGVyKHtjb250YWluZXJ9KTtcdFx0XG5cdFx0ZXhwZWN0KGNvbnRhaW5lci5jaGlsZHJlbi5sZW5ndGgpLnRvQmUoMSk7XG5cdFx0ZXhwZWN0KGNvbnRhaW5lci5jaGlsZHJlblswXS50ZXh0Q29udGVudCkudG9CZShcInZhbHVlLTFcIik7XG5cdH0pO1xuXG5cdFxuXHRpdChcImNvcHkgZGF0YSAtIHNldCBtb2RlXCIsIGFzeW5jICgpID0+IHtcdFx0XG5cdFx0Y29uc3QgY29udGFpbmVyID0gY3JlYXRlKFwiPGRpdj48L2Rpdj5cIikuZmlyc3QoKTtcdFx0XG5cdFx0Y29uc3QgcmVuZGVyZXIgPSBhd2FpdCBSZW5kZXJlci5idWlsZCh7dGVtcGxhdGU6IGA8ZGl2IGpzdGwtZGF0YT1cIlxcJHt0ZXN0fVwiIGpzdGwtZGF0YS1tb2RlPVwic2V0XCI+XFwke3Rlc3QuZGF0YX08L2Rpdj5gLCBkYXRhOiB7dGVzdDoge2RhdGE6XCJ2YWx1ZS0xXCJ9fX0pO1xuXHRcdFxuXHRcdGF3YWl0IHJlbmRlcmVyLnJlbmRlcih7Y29udGFpbmVyfSk7XHRcdFxuXHRcdGV4cGVjdChjb250YWluZXIuY2hpbGRyZW4ubGVuZ3RoKS50b0JlKDEpO1xuXHRcdGV4cGVjdChjb250YWluZXIuY2hpbGRyZW5bMF0udGV4dENvbnRlbnQpLnRvQmUoXCJ2YWx1ZS0xXCIpO1xuXHR9KTtcblxuXHRpdChcImNvcHkgZGF0YSAtIGRpcmVjdCBtb2RlXCIsIGFzeW5jICgpID0+IHtcdFx0XG5cdFx0Y29uc3QgY29udGFpbmVyID0gY3JlYXRlKFwiPGRpdj48L2Rpdj5cIikuZmlyc3QoKTtcdFx0XG5cdFx0Y29uc3QgcmVuZGVyZXIgPSBhd2FpdCBSZW5kZXJlci5idWlsZCh7dGVtcGxhdGU6IGA8ZGl2IGpzdGwtZGF0YT1cIlxcJHt0ZXN0fVwiIGpzdGwtZGF0YS1tb2RlPVwic2V0XCI+XFwke3Rlc3QuZGF0YX08L2Rpdj5gLCBkYXRhOiB7dGVzdDoge2RhdGE6XCJ2YWx1ZS0xXCJ9fX0pO1xuXHRcdFxuXHRcdGF3YWl0IHJlbmRlcmVyLnJlbmRlcih7Y29udGFpbmVyfSk7XHRcdFxuXHRcdGV4cGVjdChjb250YWluZXIuY2hpbGRyZW4ubGVuZ3RoKS50b0JlKDEpO1xuXHRcdGV4cGVjdChjb250YWluZXIuY2hpbGRyZW5bMF0udGV4dENvbnRlbnQpLnRvQmUoXCJ2YWx1ZS0xXCIpO1xuXHR9KTtcblx0YWZ0ZXJBbGwoKCkgPT4ge30pO1xufSk7IiwiaW1wb3J0IERpcmVjdGl2ZSBmcm9tIFwiQHNyYy9EaXJlY3RpdmUuanNcIjtcbmltcG9ydCBcIkBzcmMvZGlyZWN0aXZlc1wiO1xuXG5kZXNjcmliZShcIlRlc3QgZGlyZWN0aXZlIGNoYWluIC0gXCIsICgpID0+IHtcblx0XG5cdGJlZm9yZUFsbCgoKSA9PiB7fSk7XG5cdFxuXHRpdChcIm9yZGVyIHRlc3RcIiwgYXN5bmMgKCkgPT4ge1xuXHRcdGNvbnN0IGV4cGVjdGVkID0gW1xuXHRcdFx0XCJpbml0aWFsXCIsXG5cdFx0XHRcImlmXCIsXG5cdFx0XHRcImRhdGFcIixcblx0XHRcdFwiaW5jbHVkZVwiLFxuXHRcdFx0XCJjaG9vc2VcIixcblx0XHRcdFwiZm9yZWFjaFwiLFxuXHRcdFx0XCJqc3RsLXJlcGVhdFwiLFx0XHRcblx0XHRcdFwiYXR0cmlidXRlXCIsXG5cdFx0XHRcInRleHRcIixcblx0XHRcdFwib24tZmluaXNoZWRcIlxuXHRcdF07XG5cdFx0XG5cdFx0Y29uc3QgZGlyZWN0aXZlID0gRGlyZWN0aXZlLmRpcmVjdGl2ZXMubWFwKGQgPT4gZC5uYW1lKTtcdFx0XG5cdFx0XHRcdFxuXHRcdGV4cGVjdChkaXJlY3RpdmUpLnRvRXF1YWwoZXhwZWN0ZWQpO1xuXHR9KTtcblx0XG5cdGFmdGVyQWxsKCgpID0+IHt9KTtcbn0pOyIsImltcG9ydCBSZW5kZXJlciBmcm9tIFwiQHNyYy9SZW5kZXJlci5qc1wiO1xuXG5kZXNjcmliZShcIkZvcmVhY2ggVGVzdCAtIFwiLCAoKSA9PiB7XG5cdFxuXHRiZWZvcmVBbGwoKCkgPT4ge30pO1xuXHRcblx0aXQoXCJmb3JlYWNoPVsxLDIsMyw0LDVdXCIsIGFzeW5jICgpID0+IHtcdFx0XG5cdFx0Y29uc3QgY29udGFpbmVyID0gY3JlYXRlKFwiPGRpdj48L2Rpdj5cIikuZmlyc3QoKTtcdFx0XG5cdFx0Y29uc3QgcmVuZGVyZXIgPSBhd2FpdCBSZW5kZXJlci5idWlsZCh7dGVtcGxhdGU6IFwiPGRpdiBqc3RsLWZvcmVhY2g9XFxcIiR7bGlzdH1cXFwiIGpzdGwtZm9yZWFjaC12YXI9XFxcIml0ZW1cXFwiIGpzdGwtZm9yZWFjaC1zdGF0dXM9XFxcInN0YXR1c1xcXCI+PGRpdj4ke2l0ZW19LSR7c3RhdHVzLmluZGV4fTwvZGl2PjwvZGl2PlwifSk7XG5cdFx0XG5cdFx0YXdhaXQgcmVuZGVyZXIucmVuZGVyKHtjb250YWluZXIsIGRhdGEgOiB7bGlzdDogWzEsMiwzLDQsNV19fSk7XG5cdFx0bGV0IGVsZW1lbnQgPSBjb250YWluZXIuY2hpbGRyZW5bMF07XG5cdFx0ZXhwZWN0KGVsZW1lbnQuY2hpbGRyZW4ubGVuZ3RoKS50b0JlKDUpO1xuXHRcdGZvcihsZXQgaSA9IDA7IGkgPCBlbGVtZW50LmNoaWxkcmVuLmxlbmd0aDsgaSsrKXtcblx0XHRcdGNvbnN0IGl0ZW0gPSBlbGVtZW50LmNoaWxkcmVuW2ldO1xuXHRcdFx0ZXhwZWN0KGl0ZW0udGV4dENvbnRlbnQpLnRvQmUoKGkgKyAxKSArIFwiLVwiICsgaSk7XHRcdFx0XG5cdFx0fVx0XHRcblx0fSk7XG5cdFxuXHRpdChcImNvdW50PTVcIiwgYXN5bmMgKCkgPT4ge1x0XHRcblx0XHRjb25zdCBjb250YWluZXIgPSBjcmVhdGUoXCI8ZGl2PjwvZGl2PlwiKS5maXJzdCgpO1x0XHRcblx0XHRjb25zdCByZW5kZXJlciA9IGF3YWl0IFJlbmRlcmVyLmJ1aWxkKHt0ZW1wbGF0ZTogXCI8ZGl2IGpzdGwtZm9yZWFjaC1jb3VudD1cXFwiJHtjb3VudH1cXFwiIGpzdGwtZm9yZWFjaC12YXI9XFxcIml0ZW1cXFwiIGpzdGwtZm9yZWFjaC1zdGF0dXM9XFxcInN0YXR1c1xcXCI+PGRpdj4ke2l0ZW19LSR7c3RhdHVzLmluZGV4fTwvZGl2PjwvZGl2PlwifSk7XG5cdFx0XG5cdFx0YXdhaXQgcmVuZGVyZXIucmVuZGVyKHtjb250YWluZXIsIGRhdGEgOiB7Y291bnQ6NX19KTtcblx0XHRsZXQgZWxlbWVudCA9IGNvbnRhaW5lci5jaGlsZHJlblswXTtcblx0XHRleHBlY3QoZWxlbWVudC5jaGlsZHJlbi5sZW5ndGgpLnRvQmUoNSk7XG5cdFx0Zm9yKGxldCBpID0gMDsgaSA8IGVsZW1lbnQuY2hpbGRyZW4ubGVuZ3RoOyBpKyspe1xuXHRcdFx0Y29uc3QgaXRlbSA9IGVsZW1lbnQuY2hpbGRyZW5baV07XG5cdFx0XHRleHBlY3QoaXRlbS50ZXh0Q29udGVudCkudG9CZShpICArIFwiLVwiICsgaSk7XHRcdFx0XG5cdFx0fVx0XHRcblx0fSk7XG5cdFxuXHRhZnRlckFsbCgoKSA9PiB7fSk7XG59KTsiLCJpbXBvcnQgUmVuZGVyZXIgZnJvbSBcIkBzcmMvUmVuZGVyZXIuanNcIjtcblxuZGVzY3JpYmUoXCJJZiBUZXN0IC0gXCIsICgpID0+IHtcblx0XG5cdGJlZm9yZUFsbCgoKSA9PiB7fSk7XG5cdFxuXHRpdChcImpzdGwtaWY9JHtyZW5kZXJ9IHJlbmRlcj10cnVlXCIsIGFzeW5jICgpID0+IHtcblx0XHRjb25zdCBjb250YWluZXIgPSBjcmVhdGUoXCI8ZGl2PjwvZGl2PlwiKS5maXJzdCgpO1x0XHRcblx0XHRjb25zdCByZW5kZXJlciA9IGF3YWl0IFJlbmRlcmVyLmJ1aWxkKHt0ZW1wbGF0ZTogXCI8ZGl2IGpzdGwtaWY9XFxcIiR7cmVuZGVyfVxcXCI+PC9kaXY+XCJ9KTtcblx0XHRhd2FpdCByZW5kZXJlci5yZW5kZXIoe2NvbnRhaW5lciwgZGF0YSA6IHtyZW5kZXIgOiB0cnVlfX0pO1x0XHRcblx0XHRleHBlY3QoY29udGFpbmVyLmNoaWxkcmVuLmxlbmd0aCkudG9CZSgxKTtcblx0fSk7XG5cdFxuXHRpdChcImpzdGwtaWY9JHtyZW5kZXJ9IHJlbmRlcj1mYWxzZVwiLCBhc3luYyAoKSA9PiB7XHRcdFxuXHRcdGNvbnN0IGNvbnRhaW5lciA9IGNyZWF0ZShcIjxkaXY+PC9kaXY+XCIpLmZpcnN0KCk7XHRcdFxuXHRcdGNvbnN0IHJlbmRlcmVyID0gYXdhaXQgUmVuZGVyZXIuYnVpbGQoe3RlbXBsYXRlOiBcIjxkaXYganN0bC1pZj1cXFwiJHtyZW5kZXJ9XFxcIj48L2Rpdj5cIn0pO1xuXHRcdGF3YWl0IHJlbmRlcmVyLnJlbmRlcih7Y29udGFpbmVyLCBkYXRhIDoge3JlbmRlciA6IGZhbHNlfX0pO1x0XHRcblx0XHRleHBlY3QoY29udGFpbmVyLmNoaWxkcmVuLmxlbmd0aCkudG9CZSgwKTtcblx0fSk7XG5cdFxuXHRcblx0aXQoXCJqc3RsLWlmPSR7cmVuZGVyfSByZW5kZXI9ZmFsc2UgLT4gbm8gb3RoZXIgZGlyZWN0aXZlIGV4ZWN1dGVkXCIsIGFzeW5jICgpID0+IHtcdFx0XG5cdFx0Y29uc3QgY29udGFpbmVyID0gY3JlYXRlKFwiPGRpdj48L2Rpdj5cIikuZmlyc3QoKTtcdFx0XG5cdFx0Y29uc3QgcmVuZGVyZXIgPSBhd2FpdCBSZW5kZXJlci5idWlsZCh7dGVtcGxhdGU6IFwiPGRpdiBqc3RsLWlmPVxcXCIke3JlbmRlcn1cXFwiIGF0dHI9XFxcInRlc3RcXFwiPjwvZGl2PlwifSk7XG5cdFx0YXdhaXQgcmVuZGVyZXIucmVuZGVyKHtjb250YWluZXIsIGRhdGEgOiB7cmVuZGVyIDogZmFsc2V9fSk7XHRcdFxuXHRcdGV4cGVjdChjb250YWluZXIuY2hpbGRyZW4ubGVuZ3RoKS50b0JlKDApO1xuXHR9KTtcblx0XG5cdGl0KFwianN0bC1pZj0ke3JlbmRlcn0gcmVuZGVyPWZhbHNlIC0+IGRvbid0IGV4ZWN1dGUgY2hpbGRyZW5cIiwgYXN5bmMgKCkgPT4ge1x0XHRcblx0XHRjb25zdCBjb250YWluZXIgPSBjcmVhdGUoXCI8ZGl2PjwvZGl2PlwiKS5maXJzdCgpO1xuXHRcdGxldCBmYWlsID0gZmFsc2U7XG5cdFx0Y29uc3QgcmVuZGVyZXIgPSBhd2FpdCBSZW5kZXJlci5idWlsZCh7dGVtcGxhdGU6IFwiPGRpdiBqc3RsLWlmPVxcXCIke3JlbmRlcn1cXFwiPjxkaXY+JHtleGVjdXRlZCgpfTwvZGl2PjwvZGl2PlwiLCBkYXRhIDoge1xuXHRcdFx0ZXhlY3V0ZWQgOiAoKSA9PnsgZmFpbCA9IHRydWV9XG5cdFx0fX0pO1xuXHRcdGF3YWl0IHJlbmRlcmVyLnJlbmRlcih7Y29udGFpbmVyLCBkYXRhIDoge3JlbmRlciA6IGZhbHNlfX0pO1x0XHRcblx0XHRleHBlY3QoY29udGFpbmVyLmNoaWxkcmVuLmxlbmd0aCkudG9CZSgwKTtcblx0XHRleHBlY3QoZmFpbCkudG9CZShmYWxzZSk7XG5cdH0pO1xuXHRcblx0YWZ0ZXJBbGwoKCkgPT4ge30pO1xufSk7IiwiaW1wb3J0IFJlbmRlcmVyIGZyb20gXCJAc3JjL1JlbmRlcmVyLmpzXCI7XG5cbmRlc2NyaWJlKFwiSW5jbHVkZSBUZXN0IC0gXCIsICgpID0+IHtcblx0XG5cdGJlZm9yZUFsbCgoKSA9PiB7fSk7XG5cdFxuXHRpdChcImxvYWQgdGVtcGxhdGUgZnJvbSB1cmxcIiwgYXN5bmMgKCkgPT4ge1x0XHRcblx0XHRjb25zdCBjb250YWluZXIgPSBjcmVhdGUoXCI8ZGl2PjwvZGl2PlwiKS5maXJzdCgpO1x0XHRcblx0XHRjb25zdCByZW5kZXJlciA9IGF3YWl0IFJlbmRlcmVyLmJ1aWxkKHt0ZW1wbGF0ZTogXCI8ZGl2IGpzdGwtaW5jbHVkZT1cXFwiL3RlbXBsYXRlcy9JbmNsdWRlVGVzdC9Mb2FkRnJvbVVSTC50cGwuaHRtbFxcXCI+PC9kaXY+XCJ9KTtcblx0XHRhd2FpdCByZW5kZXJlci5yZW5kZXIoe2NvbnRhaW5lcn0pO1x0XHRcblx0XHRsZXQgcmVzdWx0ID0gY29udGFpbmVyO1xuXHRcdGV4cGVjdChyZXN1bHQuY2hpbGRyZW4ubGVuZ3RoKS50b0JlKDEpO1xuXHRcdHJlc3VsdCA9IHJlc3VsdC5jaGlsZHJlblswXTtcblx0XHRleHBlY3QocmVzdWx0LmNoaWxkcmVuLmxlbmd0aCkudG9CZSg1KTtcblx0XHRjb250YWluZXIucmVtb3ZlKCk7XG5cdH0pO1xuXG5cdGl0KFwibG9hZCB0ZW1wbGF0ZSBmcm9tIHVybCBhZnRlciBpZlwiLCBhc3luYyAoKSA9PiB7XHRcdFxuXHRcdGNvbnN0IGNvbnRhaW5lciA9IGNyZWF0ZShcIjxkaXY+PC9kaXY+XCIpLmZpcnN0KCk7XHRcdFxuXHRcdGNvbnN0IHJlbmRlcmVyID0gYXdhaXQgUmVuZGVyZXIuYnVpbGQoe3RlbXBsYXRlOiBgPGRpdiBqc3RsLWlmPVwiXFwke2luY2x1ZGV9XCIganN0bC1pbmNsdWRlPVwiL3RlbXBsYXRlcy9JbmNsdWRlVGVzdC9Mb2FkRnJvbVVSTC50cGwuaHRtbFwiPjwvZGl2PmB9KTtcblx0XHRhd2FpdCByZW5kZXJlci5yZW5kZXIoe2NvbnRhaW5lciwgZGF0YSA6IHtpbmNsdWRlOiB0cnVlfX0pO1x0XHRcblx0XHRsZXQgcmVzdWx0ID0gY29udGFpbmVyO1xuXHRcdGV4cGVjdChyZXN1bHQuY2hpbGRyZW4ubGVuZ3RoKS50b0JlKDEpO1xuXHRcdHJlc3VsdCA9IHJlc3VsdC5jaGlsZHJlblswXTtcblx0XHRleHBlY3QocmVzdWx0LmNoaWxkcmVuLmxlbmd0aCkudG9CZSg1KTtcblx0XHRjb250YWluZXIucmVtb3ZlKCk7XG5cdH0pO1xuXG5cdGl0KFwibG9hZCB0ZW1wbGF0ZSBmcm9tIHVybCBhZnRlciBpZiBvbiBqc3RsLXRhZ1wiLCBhc3luYyAoKSA9PiB7XHRcdFxuXHRcdGNvbnN0IGNvbnRhaW5lciA9IGNyZWF0ZShcIjxkaXY+PC9kaXY+XCIpLmZpcnN0KCk7XHRcdFxuXHRcdGNvbnN0IHJlbmRlcmVyID0gYXdhaXQgUmVuZGVyZXIuYnVpbGQoe3RlbXBsYXRlOiBgPGpzdGwganN0bC1pZj1cIlxcJHtpbmNsdWRlfVwiIGpzdGwtaW5jbHVkZT1cIi90ZW1wbGF0ZXMvSW5jbHVkZVRlc3QvTG9hZEZyb21VUkwudHBsLmh0bWxcIj48L2pzdGw+YH0pO1xuXHRcdGF3YWl0IHJlbmRlcmVyLnJlbmRlcih7Y29udGFpbmVyLCBkYXRhIDoge2luY2x1ZGU6IHRydWV9fSk7XHRcdFxuXHRcdGV4cGVjdChjb250YWluZXIuY2hpbGRyZW4ubGVuZ3RoKS50b0JlKDUpO1xuXHRcdGNvbnRhaW5lci5yZW1vdmUoKTtcblx0fSk7XG5cdFxuXHRhZnRlckFsbCgoKSA9PiB7fSk7XG59KTsiLCJpbXBvcnQgUmVuZGVyZXIgZnJvbSBcIkBzcmMvUmVuZGVyZXIuanNcIjtcblxuZGVzY3JpYmUoXCJJbml0aWFsRGlyZWN0aXZlIFRlc3QgLSBcIiwgKCkgPT4ge1xuXG5cdGJlZm9yZUFsbCgoKSA9PiB7IH0pO1xuXG5cdGl0KFwiZGVmYXVsdCBjYXNlIDFcIiwgYXN5bmMgKCkgPT4ge1xuXHRcdGNvbnN0IHJlbmRlcmVyID0gYXdhaXQgUmVuZGVyZXIuYnVpbGQoeyB0ZW1wbGF0ZTogXCI8ZGl2PjwvZGl2PlwiIH0pO1xuXHRcdGNvbnN0IGNvbnRhaW5lciA9IGNyZWF0ZShcIjxkaXY+PC9kaXY+XCIpLmZpcnN0KCk7XG5cdFx0YXdhaXQgcmVuZGVyZXIucmVuZGVyKHsgY29udGFpbmVyIH0pO1xuXHRcdGV4cGVjdChjb250YWluZXIuY2hpbGRyZW4ubGVuZ3RoKS50b0JlKDEpO1xuXHR9KTtcblxuXG5cdGl0KFwicHJvY2VzcyBIVE1MVGVtbGF0ZUVsZW1lbnRcIiwgYXN5bmMgKCkgPT4ge1xuXHRcdGNvbnN0IHJlbmRlcmVyID0gYXdhaXQgUmVuZGVyZXIuYnVpbGQoeyB0ZW1wbGF0ZTogXCI8ZGl2Pjx0ZW1wbGF0ZT48ZGl2PjwvZGl2PjwvdGVtcGxhdGU+PC9kaXY+XCIgfSk7XG5cdFx0Y29uc3QgY29udGFpbmVyID0gY3JlYXRlKFwiPGRpdj48L2Rpdj5cIikuZmlyc3QoKTtcblx0XHRhd2FpdCByZW5kZXJlci5yZW5kZXIoeyBjb250YWluZXIgfSk7XG5cblx0XHRleHBlY3QoY29udGFpbmVyLmNoaWxkcmVuLmxlbmd0aCkudG9CZSgxKTtcblx0XHRsZXQgZWxlbWVudCA9IGNvbnRhaW5lci5jaGlsZHJlblswXTtcblx0XHRleHBlY3QoZWxlbWVudC5jaGlsZHJlbi5sZW5ndGgpLnRvQmUoMSk7XG5cdFx0ZWxlbWVudCA9IGVsZW1lbnQuY2hpbGRyZW5bMF07XG5cdFx0ZXhwZWN0KGVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MVGVtcGxhdGVFbGVtZW50KS50b0JlKHRydWUpO1xuXHRcdGVsZW1lbnQgPSBlbGVtZW50LmNvbnRlbnQ7XG5cdFx0ZXhwZWN0KGVsZW1lbnQgaW5zdGFuY2VvZiBEb2N1bWVudEZyYWdtZW50KS50b0JlKHRydWUpO1xuXHRcdGV4cGVjdChlbGVtZW50LmNoaWxkcmVuLmxlbmd0aCkudG9CZSgxKTtcblx0fSk7XG5cdFxuXHRcblx0aXQoXCJwcm9jZXNzIHRlbXBsYXRlIHdpdGggY29tbWVudHNcIiwgYXN5bmMgKCkgPT4ge1xuXHRcdGNvbnN0IHJlbmRlcmVyID0gYXdhaXQgUmVuZGVyZXIuYnVpbGQoeyB0ZW1wbGF0ZTogXCI8ZGl2PjwhLS0gdGVzdCAtLT48L2Rpdj5cIiB9KTtcblx0XHRjb25zdCBjb250YWluZXIgPSBjcmVhdGUoXCI8ZGl2PjwvZGl2PlwiKS5maXJzdCgpO1xuXHRcdGF3YWl0IHJlbmRlcmVyLnJlbmRlcih7IGNvbnRhaW5lciB9KTtcblxuXHRcdGV4cGVjdChjb250YWluZXIuY2hpbGROb2Rlcy5sZW5ndGgpLnRvQmUoMSk7XG5cdFx0bGV0IGVsZW1lbnQgPSBjb250YWluZXIuY2hpbGROb2Rlc1swXTtcblx0XHRleHBlY3QoZWxlbWVudC5jaGlsZE5vZGVzLmxlbmd0aCkudG9CZSgxKTtcblx0XHRlbGVtZW50ID0gZWxlbWVudC5jaGlsZE5vZGVzWzBdO1xuXHRcdGV4cGVjdChlbGVtZW50IGluc3RhbmNlb2YgQ29tbWVudCkudG9CZSh0cnVlKTtcblx0fSk7XG5cblxuXHRpdChcImNoYW5nZSB0YWduYW1lIGRpdiAtPiBzcGFuXCIsIGFzeW5jICgpID0+IHtcblx0XHRjb25zdCByZW5kZXJlciA9IGF3YWl0IFJlbmRlcmVyLmJ1aWxkKHsgdGVtcGxhdGU6IGA8ZGl2IGpzdGwtdGFnbmFtZT1cInNwYW5cIiB0ZXN0LWF0dHI9XCJhdHRyXCI+XG5cdFx0XHQ8c3Bhbj48L3NwYW4+XG5cdFx0XHQ8c3Bhbj48L3NwYW4+XG5cdFx0XHQ8c3Bhbj48L3NwYW4+XG5cdFx0PC9kaXY+YCB9KTtcblx0XHRjb25zdCBjb250YWluZXIgPSBjcmVhdGUoXCI8ZGl2PjwvZGl2PlwiKS5maXJzdCgpO1xuXHRcdGF3YWl0IHJlbmRlcmVyLnJlbmRlcih7IGNvbnRhaW5lciB9KTtcblxuXHRcdGV4cGVjdChjb250YWluZXIuY2hpbGROb2Rlcy5sZW5ndGgpLnRvQmUoMSk7XG5cdFx0bGV0IGVsZW1lbnQgPSBjb250YWluZXIuY2hpbGROb2Rlc1swXTtcblx0XHRleHBlY3QoZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxTcGFuRWxlbWVudCkudG9CZSh0cnVlKTtcblx0XHRleHBlY3QoZWxlbWVudC5hdHRyKFwidGVzdC1hdHRyXCIpKS50b0JlKFwiYXR0clwiKTtcblx0XHRleHBlY3QoZWxlbWVudC5jaGlsZHJlbi5sZW5ndGgpLnRvQmUoMyk7XG5cdH0pO1xuXG5cdFxuXHRpdChcImNoYW5nZSB0YWduYW1lIGpzdGwgLT4gc3BhblwiLCBhc3luYyAoKSA9PiB7XG5cdFx0Y29uc3QgcmVuZGVyZXIgPSBhd2FpdCBSZW5kZXJlci5idWlsZCh7IHRlbXBsYXRlOiBgPGpzdGwganN0bC10YWduYW1lPVwic3BhblwiIHRlc3QtYXR0cj1cImF0dHJcIj5cblx0XHRcdDxzcGFuPjwvc3Bhbj5cblx0XHRcdDxzcGFuPjwvc3Bhbj5cblx0XHRcdDxzcGFuPjwvc3Bhbj5cblx0XHQ8L2pzdGw+YCB9KTtcblx0XHRjb25zdCBjb250YWluZXIgPSBjcmVhdGUoXCI8ZGl2PjwvZGl2PlwiKS5maXJzdCgpO1xuXHRcdGF3YWl0IHJlbmRlcmVyLnJlbmRlcih7IGNvbnRhaW5lciB9KTtcblxuXHRcdGV4cGVjdChjb250YWluZXIuY2hpbGROb2Rlcy5sZW5ndGgpLnRvQmUoMSk7XG5cdFx0bGV0IGVsZW1lbnQgPSBjb250YWluZXIuY2hpbGROb2Rlc1swXTtcblx0XHRleHBlY3QoZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxTcGFuRWxlbWVudCkudG9CZSh0cnVlKTtcblx0XHRleHBlY3QoZWxlbWVudC5hdHRyKFwidGVzdC1hdHRyXCIpKS50b0JlKFwiYXR0clwiKTtcblx0XHRleHBlY3QoZWxlbWVudC5jaGlsZHJlbi5sZW5ndGgpLnRvQmUoMyk7XG5cdH0pO1xuXG5cdGl0KFwiY2hhbmdlIHRhZ25hbWUgd2l0aCBkeW5hbWljIHZhbHVlXCIsIGFzeW5jICgpID0+IHtcblx0XHRjb25zdCByZW5kZXJlciA9IGF3YWl0IFJlbmRlcmVyLmJ1aWxkKHsgdGVtcGxhdGU6IGA8anN0bCBqc3RsLXRhZ25hbWU9XCJcXCR7dGFnbmFtZX1cIiB0ZXN0LWF0dHI9XCJhdHRyXCI+XG5cdFx0XHQ8c3Bhbj48L3NwYW4+XG5cdFx0XHQ8c3Bhbj48L3NwYW4+XG5cdFx0XHQ8c3Bhbj48L3NwYW4+XG5cdFx0PC9qc3RsPmAgfSk7XG5cdFx0Y29uc3QgY29udGFpbmVyID0gY3JlYXRlKFwiPGRpdj48L2Rpdj5cIikuZmlyc3QoKTtcblx0XHRhd2FpdCByZW5kZXJlci5yZW5kZXIoeyBjb250YWluZXIgLCBkYXRhIDoge3RhZ25hbWU6IFwic3BhblwifX0pO1xuXG5cdFx0ZXhwZWN0KGNvbnRhaW5lci5jaGlsZE5vZGVzLmxlbmd0aCkudG9CZSgxKTtcblx0XHRsZXQgZWxlbWVudCA9IGNvbnRhaW5lci5jaGlsZE5vZGVzWzBdO1xuXHRcdGV4cGVjdChlbGVtZW50IGluc3RhbmNlb2YgSFRNTFNwYW5FbGVtZW50KS50b0JlKHRydWUpO1xuXHRcdGV4cGVjdChlbGVtZW50LmF0dHIoXCJ0ZXN0LWF0dHJcIikpLnRvQmUoXCJhdHRyXCIpO1xuXHRcdGV4cGVjdChlbGVtZW50LmNoaWxkcmVuLmxlbmd0aCkudG9CZSgzKTtcblx0fSk7XG5cdFxuXG5cdGFmdGVyQWxsKCgpID0+IHsgfSk7XG59KTsiLCJpbXBvcnQgUmVuZGVyZXIgZnJvbSBcIkBzcmMvUmVuZGVyZXIuanNcIjtcblxuZGVzY3JpYmUoXCJPbkZpbmlzaGVkIERpcmVjdGl2ZSBUZXN0IC0gXCIsICgpID0+IHtcblxuXHRiZWZvcmVBbGwoKCkgPT4geyB9KTtcblxuXHRpdChcImRlZmF1bHQgY2FzZSAxXCIsIGFzeW5jICgpID0+IHtcdFx0XG5cdFx0d2luZG93Lk9ORklOSVNIX0NBU0VfMSA9IGZhbHNlO1xuXHRcdGNvbnN0IHRlbXBsYXRlID1gPGRpdiBqc3RsLW9uLWZpbmlzaGVkPVwiXFwke3dpbmRvdy5PTkZJTklTSF9DQVNFXzEgPSB0cnVlfVwiPjwvZGl2PmA7XHRcdFxuXHRcdGNvbnN0IGNvbnRhaW5lciA9IGNyZWF0ZShcIjxkaXY+PC9kaXY+XCIpLmZpcnN0KCk7XG5cdFx0XG5cdFx0ZG9jdW1lbnQuYm9keS5hcHBlbmQoY29udGFpbmVyKTtcblx0XHRjb25zdCByZW5kZXJlciA9IGF3YWl0IFJlbmRlcmVyLmJ1aWxkKHt0ZW1wbGF0ZX0pO1xuXHRcdFxuXHRcdGF3YWl0IHJlbmRlcmVyLnJlbmRlcih7IGNvbnRhaW5lciwgdGVtcGxhdGUgfSk7XG5cdFx0ZXhwZWN0KHdpbmRvdy5PTkZJTklTSF9DQVNFXzEpLnRvQmVUcnVlKCk7XG5cdH0pO1xuXG5cdFxuXG5cdGFmdGVyQWxsKCgpID0+IHsgfSk7XG59KTsiLCJpbXBvcnQgUmVuZGVyZXIgZnJvbSBcIkBzcmMvUmVuZGVyZXIuanNcIjtcblxuZGVzY3JpYmUoXCJSZXBlYXQgVGVzdCAtIFwiLCAoKSA9PiB7XG5cdFxuXHRiZWZvcmVBbGwoKCkgPT4ge30pO1xuXHRpdChcInJlcGVhdD1bMSwyLDMsNCw1XVwiLCBhc3luYyAoKSA9PiB7XHRcdFxuXHRcdGNvbnN0IGNvbnRhaW5lciA9IGNyZWF0ZShcIjxkaXY+PC9kaXY+XCIpLmZpcnN0KCk7XHRcdFxuXHRcdGNvbnN0IHJlbmRlcmVyID0gYXdhaXQgUmVuZGVyZXIuYnVpbGQoe3RlbXBsYXRlOiBgPGRpdiBqc3RsLXJlcGVhdD1cIlxcJHtsaXN0fVwiIGpzdGwtcmVwZWF0LXZhcj1cIml0ZW1cIiBqc3RsLXJlcGVhdC1zdGF0dXM9XCJzdGF0dXNcIj5cXCR7aXRlbX0tXFwke3N0YXR1cy5pbmRleH08L2Rpdj5gfSk7XG5cdFx0XG5cdFx0YXdhaXQgcmVuZGVyZXIucmVuZGVyKHtjb250YWluZXIsIGRhdGEgOiB7bGlzdDogWzEsMiwzLDQsNV19fSk7XG5cblx0XHRsZXQgZWxlbWVudCA9IGNvbnRhaW5lcjtcblx0XHRleHBlY3QoY29udGFpbmVyLmNoaWxkcmVuLmxlbmd0aCkudG9CZSg1KTtcblx0XHRmb3IobGV0IGkgPSAwOyBpIDwgY29udGFpbmVyLmNoaWxkcmVuLmxlbmd0aDsgaSsrKXtcblx0XHRcdGNvbnN0IGl0ZW0gPSBjb250YWluZXIuY2hpbGRyZW5baV07XG5cdFx0XHRleHBlY3QoaXRlbS50ZXh0Q29udGVudCkudG9CZSgoaSArIDEpICsgXCItXCIgKyBpKTtcdFx0XHRcblx0XHR9XHRcdFxuXHR9KTtcblx0XG5cdGl0KFwianN0bC1yZXBlYXQtY291bnQ9NVwiLCBhc3luYyAoKSA9PiB7XHRcdFxuXHRcdGNvbnN0IGNvbnRhaW5lciA9IGNyZWF0ZShcIjxkaXY+PC9kaXY+XCIpLmZpcnN0KCk7XHRcdFxuXHRcdGNvbnN0IHJlbmRlcmVyID0gYXdhaXQgUmVuZGVyZXIuYnVpbGQoe3RlbXBsYXRlOiBgPGRpdiBqc3RsLXJlcGVhdC1jb3VudD1cIlxcJHtjb3VudH1cIiBqc3RsLXJlcGVhdC12YXI9XCJpdGVtXCIganN0bC1yZXBlYXQtc3RhdHVzPVwic3RhdHVzXCI+XFwke2l0ZW19LVxcJHtzdGF0dXMuaW5kZXh9PC9kaXY+YH0pO1xuXHRcdFxuXHRcdGF3YWl0IHJlbmRlcmVyLnJlbmRlcih7Y29udGFpbmVyLCBkYXRhIDoge2NvdW50OjV9fSk7XG5cblx0XHRleHBlY3QoY29udGFpbmVyLmNoaWxkcmVuLmxlbmd0aCkudG9CZSg1KTtcblx0XHRmb3IobGV0IGkgPSAwOyBpIDwgY29udGFpbmVyLmNoaWxkcmVuLmxlbmd0aDsgaSsrKXtcblx0XHRcdGNvbnN0IGl0ZW0gPSBjb250YWluZXIuY2hpbGRyZW5baV07XG5cdFx0XHRleHBlY3QoaXRlbS50ZXh0Q29udGVudCkudG9CZShpICArIFwiLVwiICsgaSk7XHRcdFx0XG5cdFx0fVx0XHRcblx0fSk7XG5cblxuXHRpdChcImNyZWF0ZSBvcHRpb25zIGF0IHNlbGVjdCB0YWdcIiwgYXN5bmMgKCkgPT4ge1x0XHRcblx0XHRjb25zdCBjb250YWluZXIgPSBjcmVhdGUoXCI8c2VsZWN0Pjwvc2VsZWN0PlwiKS5maXJzdCgpO1xuXHRcdGRvY3VtZW50LmJvZHkuYXBwZW5kKGNvbnRhaW5lcik7XG5cdFx0Y29uc3QgcmVuZGVyZXIgPSBhd2FpdCBSZW5kZXJlci5idWlsZCh7dGVtcGxhdGU6IGA8b3B0aW9uIGpzdGwtcmVwZWF0LWNvdW50PVwiXFwke2NvdW50fVwiIGpzdGwtcmVwZWF0LXZhcj1cIml0ZW1cIiBqc3RsLXJlcGVhdC1zdGF0dXM9XCJzdGF0dXNcIj5cXCR7aXRlbX0tXFwke3N0YXR1cy5pbmRleH08L29wdGlvbj5gfSk7XG5cdFx0XG5cdFx0YXdhaXQgcmVuZGVyZXIucmVuZGVyKHtjb250YWluZXIsIGRhdGEgOiB7Y291bnQ6NX19KTtcblxuXHRcdGV4cGVjdChjb250YWluZXIuY2hpbGRyZW4ubGVuZ3RoKS50b0JlKDUpO1xuXHRcdGZvcihsZXQgaSA9IDA7IGkgPCBjb250YWluZXIuY2hpbGRyZW4ubGVuZ3RoOyBpKyspe1xuXHRcdFx0Y29uc3QgaXRlbSA9IGNvbnRhaW5lci5jaGlsZHJlbltpXTtcblx0XHRcdGV4cGVjdChpdGVtLnRleHRDb250ZW50KS50b0JlKGkgICsgXCItXCIgKyBpKTtcdFx0XHRcblx0XHR9XG5cdFx0XG5cdFx0Y29udGFpbmVyLnJlbW92ZSgpO1xuXHR9KTtcblx0XG5cdGFmdGVyQWxsKCgpID0+IHt9KTtcbn0pOyIsImltcG9ydCBSZW5kZXJlciBmcm9tIFwiQHNyYy9SZW5kZXJlci5qc1wiO1xuXG5kZXNjcmliZShcIlRleHQgVGVzdCAtIGh0bWwgbW9kZSBcIiwgKCkgPT4ge1xuXHRcblx0YmVmb3JlQWxsKCgpID0+IHt9KTtcblx0XG5cdGl0KFwiaHRtbFwiLCBhc3luYyAoKSA9PiB7XG5cdFx0Y29uc3QgcmVuZGVyZXIgPSBhd2FpdCBSZW5kZXJlci5idWlsZCh7dGVtcGxhdGU6IFwiPGRpdiBqc3RsLXRleHQtY29udGVudC10eXBlPVxcXCJodG1sXFxcIj4ke2NvbnRlbnR9PC9kaXY+XCJ9KTtcblx0XHRjb25zdCBjb250YWluZXIgPSBjcmVhdGUoXCI8ZGl2PjwvZGl2PlwiKS5maXJzdCgpO1x0XHRcblx0XHRhd2FpdCByZW5kZXJlci5yZW5kZXIoe2NvbnRhaW5lciwgZGF0YToge2NvbnRlbnQ6IFwiPGRpdj48L2Rpdj5cIn19KTtcblx0XHRcblx0XHRsZXQgZWxlbWVudCA9IGNvbnRhaW5lci5jaGlsZHJlblswXTtcblx0XHRleHBlY3QoZWxlbWVudC5jaGlsZHJlbi5sZW5ndGgpLnRvQmUoMSk7XG5cdH0pO1xuXHRcblx0aXQoXCJodG1sIGJldHdlZW4gdGV4dFwiLCBhc3luYyAoKSA9PiB7XG5cdFx0Y29uc3QgcmVuZGVyZXIgPSBhd2FpdCBSZW5kZXJlci5idWlsZCh7dGVtcGxhdGU6IFwiPGRpdiBqc3RsLXRleHQtY29udGVudC10eXBlPVxcXCJodG1sXFxcIj50ZXh0ICR7Y29udGVudH0gdGVzdDwvZGl2PlwifSk7XG5cdFx0Y29uc3QgY29udGFpbmVyID0gY3JlYXRlKFwiPGRpdj48L2Rpdj5cIikuZmlyc3QoKTtcdFx0XG5cdFx0YXdhaXQgcmVuZGVyZXIucmVuZGVyKHtjb250YWluZXIsIGRhdGE6IHtjb250ZW50OiBcIjxkaXY+PC9kaXY+XCJ9fSk7XG5cdFx0XG5cdFx0bGV0IGVsZW1lbnQgPSBjb250YWluZXIuY2hpbGRyZW5bMF07XG5cdFx0ZXhwZWN0KGVsZW1lbnQuY2hpbGRyZW4ubGVuZ3RoKS50b0JlKDEpO1xuXHRcdGV4cGVjdChlbGVtZW50LmNoaWxkTm9kZXMubGVuZ3RoKS50b0JlKDMpO1xuXHRcdGV4cGVjdChlbGVtZW50LmNoaWxkTm9kZXNbMF0gaW5zdGFuY2VvZiBUZXh0KS50b0JlKHRydWUpO1xuXHRcdGV4cGVjdChlbGVtZW50LmNoaWxkTm9kZXNbMV0gaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkudG9CZSh0cnVlKTtcblx0XHRleHBlY3QoZWxlbWVudC5jaGlsZE5vZGVzWzJdIGluc3RhbmNlb2YgVGV4dCkudG9CZSh0cnVlKTtcdFx0XG5cdH0pO1xuXHRcblx0aXQoXCJodG1sIHdpdGggZXhwcmVzc2lvbiBhcyBjb250ZXh0IChkb24ndCBleGVjdXRlKVwiLCBhc3luYyAoKSA9PiB7XG5cdFx0Y29uc3QgcmVuZGVyZXIgPSBhd2FpdCBSZW5kZXJlci5idWlsZCh7dGVtcGxhdGU6IFwiPGRpdiBqc3RsLXRleHQtY29udGVudC10eXBlPVxcXCJodG1sXFxcIj4ke2NvbnRlbnR9PC9kaXY+XCJ9KTtcblx0XHRjb25zdCBjb250YWluZXIgPSBjcmVhdGUoXCI8ZGl2PjwvZGl2PlwiKS5maXJzdCgpO1x0XHRcblx0XHRhd2FpdCByZW5kZXJlci5yZW5kZXIoe2NvbnRhaW5lciwgZGF0YToge2NvbnRlbnQ6IFwiPGRpdj4ke2ZhaWx9PC9kaXY+XCJ9LCBmYWlsOlwiZmFpbFwifSk7XG5cdFx0XG5cdFx0bGV0IGVsZW1lbnQgPSBjb250YWluZXIuY2hpbGRyZW5bMF07XG5cdFx0ZXhwZWN0KGVsZW1lbnQuY2hpbGRyZW4ubGVuZ3RoKS50b0JlKDEpO1xuXHRcdGV4cGVjdChlbGVtZW50LmNoaWxkcmVuWzBdLnRleHRDb250ZW50KS50b0JlKFwiJHtmYWlsfVwiKTtcblx0XHRcblx0fSk7XG5cdFxuXHRcblx0aXQoXCJodG1sIHNlY3VyZSBjb250ZW50IChubyBzY3JpcHQsIHN0eWxlLCBib2R5LCBodG1sLCBoZWFkLCBvYmplY3QgYW5kIGxpbmsgdGFncylcIiwgYXN5bmMgKCkgPT4ge1xuXHRcdGNvbnN0IHJlbmRlcmVyID0gYXdhaXQgUmVuZGVyZXIuYnVpbGQoe3RlbXBsYXRlOiBcIjxkaXYganN0bC10ZXh0LWNvbnRlbnQtdHlwZT1cXFwiaHRtbFxcXCI+JHtjb250ZW50fTwvZGl2PlwifSk7XG5cdFx0Y29uc3QgY29udGFpbmVyID0gY3JlYXRlKFwiPGRpdj48L2Rpdj5cIikuZmlyc3QoKTtcdFx0XG5cdFx0Y29uc3QgYmFkQ29udGVudCA9IFwiPHNjcmlwdD48L3NjcmlwdD48aHRtbD48L2h0bWw+PGhlYWQ+PC9oZWFkPjxvYmplY3Q+PC9vYmplY3Q+PHN0eWxlPjwvc3R5bGU+PGxpbms+PC9saW5rPlwiXG5cdFx0Y29uc3QgYmFkQ29udGVudFNlbGVjdG9yID0gXCJzY3JpcHQsIHN0eWxlLCBib2R5LCBodG1sLCBoZWFkLCBvYmplY3QsIGxpbmtcIjtcdFxuXHRcdGF3YWl0IHJlbmRlcmVyLnJlbmRlcih7Y29udGFpbmVyLCBkYXRhOiB7Y29udGVudDogYmFkQ29udGVudCArIFwiPGRpdj5cIiArIGJhZENvbnRlbnQgKyBcIjwvZGl2PlwifX0pO1xuXHRcdFxuXHRcdGxldCBlbGVtZW50ID0gY29udGFpbmVyLmNoaWxkcmVuWzBdO1xuXHRcdGV4cGVjdChlbGVtZW50LmNoaWxkcmVuLmxlbmd0aCkudG9CZSgxKTtcblx0XHRleHBlY3QoZWxlbWVudC5maW5kKGJhZENvbnRlbnRTZWxlY3RvcikubGVuZ3RoKS50b0JlKDApO1xuXHRcdFxuXHR9KTtcblx0XG5cdGl0KFwiaHRtbCBpbmNsdWRlIHVuc2VjdXJlIGNvbnRlbnQgXCIsIGFzeW5jICgpID0+IHtcblx0XHRjb25zdCByZW5kZXJlciA9IGF3YWl0IFJlbmRlcmVyLmJ1aWxkKHt0ZW1wbGF0ZTogXCI8ZGl2IGpzdGwtdGV4dC1jb250ZW50LXR5cGU9XFxcImh0bWxcXFwiIGpzdGwtdGV4dC11bnNlY3VyZT4ke2NvbnRlbnR9PC9kaXY+XCJ9KTtcblx0XHRjb25zdCBjb250YWluZXIgPSBjcmVhdGUoXCI8ZGl2PjwvZGl2PlwiKS5maXJzdCgpO1x0XHRcblx0XHRjb25zdCBiYWRDb250ZW50ID0gXCI8c2NyaXB0Pjwvc2NyaXB0PjxodG1sPjwvaHRtbD48aGVhZD48L2hlYWQ+PG9iamVjdD48L29iamVjdD48c3R5bGU+PC9zdHlsZT48bGluaz48L2xpbms+XCJcblx0XHRjb25zdCBiYWRDb250ZW50U2VsZWN0b3IgPSBcInNjcmlwdCwgc3R5bGUsIGJvZHksIGh0bWwsIGhlYWQsIG9iamVjdCwgbGlua1wiO1x0XG5cdFx0YXdhaXQgcmVuZGVyZXIucmVuZGVyKHtjb250YWluZXIsIGRhdGE6IHtjb250ZW50OiBiYWRDb250ZW50ICsgXCI8ZGl2PlwiICsgYmFkQ29udGVudCArIFwiPC9kaXY+XCJ9fSk7XG5cdFx0XG5cdFx0bGV0IGVsZW1lbnQgPSBjb250YWluZXIuY2hpbGRyZW5bMF07XG5cdFx0ZXhwZWN0KGVsZW1lbnQuZmluZChiYWRDb250ZW50U2VsZWN0b3IpLmxlbmd0aCkubm90LnRvQmUoMCk7XG5cdFx0XG5cdH0pO1xuXHRcblx0YWZ0ZXJBbGwoKCkgPT4ge30pO1xufSk7IiwiaW1wb3J0IFJlbmRlcmVyIGZyb20gXCJAc3JjL1JlbmRlcmVyLmpzXCI7XG5cbmRlc2NyaWJlKFwiVGV4dCBUZXN0IC0gdGV4dCBtb2RlIFwiLCAoKSA9PiB7XG5cdFxuXHRiZWZvcmVBbGwoKCkgPT4ge30pO1xuXHRcblx0aXQoXCJwbGFpbiB0ZXh0XCIsIGFzeW5jICgpID0+IHtcblx0XHRjb25zdCByZW5kZXJlciA9IGF3YWl0IFJlbmRlcmVyLmJ1aWxkKHt0ZW1wbGF0ZTogXCI8ZGl2PnRlc3QgdGV4dDwvZGl2PlwifSk7XG5cdFx0Y29uc3QgY29udGFpbmVyID0gY3JlYXRlKFwiPGRpdj48L2Rpdj5cIikuZmlyc3QoKTtcdFx0XG5cdFx0YXdhaXQgcmVuZGVyZXIucmVuZGVyKHtjb250YWluZXJ9KTtcdFx0XG5cdFx0ZXhwZWN0KGNvbnRhaW5lci5jaGlsZHJlblswXS50ZXh0Q29udGVudCkudG9CZShcInRlc3QgdGV4dFwiKTtcblx0fSk7XG5cdFxuXHRpdChcInBsYWluIHRleHQgd2l0aCBkeW5hbWljIGNvbnRlbnRcIiwgYXN5bmMgKCkgPT4ge1xuXHRcdGNvbnN0IHJlbmRlcmVyID0gYXdhaXQgUmVuZGVyZXIuYnVpbGQoe3RlbXBsYXRlOiBcIjxkaXY+dGVzdCB0ZXh0ICR7ZHluYW1pY30gY29udGVudDwvZGl2PlwifSk7XG5cdFx0Y29uc3QgY29udGFpbmVyID0gY3JlYXRlKFwiPGRpdj48L2Rpdj5cIikuZmlyc3QoKTtcdFx0XG5cdFx0YXdhaXQgcmVuZGVyZXIucmVuZGVyKHtjb250YWluZXIsIGRhdGE6IHtkeW5hbWljOlwiZHluYW1pY1wifX0pO1x0XHRcblx0XHRleHBlY3QoY29udGFpbmVyLmNoaWxkcmVuWzBdLnRleHRDb250ZW50KS50b0JlKFwidGVzdCB0ZXh0IGR5bmFtaWMgY29udGVudFwiKTtcblx0fSk7XG5cdFxuXHRpdChcInBsYWluIHRleHQgd2l0aCBqc3RsLXRleHQtaWdub3JlXCIsIGFzeW5jICgpID0+IHtcblx0XHRjb25zdCByZW5kZXJlciA9IGF3YWl0IFJlbmRlcmVyLmJ1aWxkKHt0ZW1wbGF0ZTogXCI8ZGl2IGpzdGwtdGV4dC1pZ25vcmU+dGVzdCB0ZXh0ICR7ZHluYW1pY30gY29udGVudDwvZGl2PlwifSk7XG5cdFx0Y29uc3QgY29udGFpbmVyID0gY3JlYXRlKFwiPGRpdj48L2Rpdj5cIikuZmlyc3QoKTtcdFx0XG5cdFx0YXdhaXQgcmVuZGVyZXIucmVuZGVyKHtjb250YWluZXIsIGRhdGE6IHtkeW5hbWljOlwiZHluYW1pY1wifX0pO1x0XHRcblx0XHRleHBlY3QoY29udGFpbmVyLmNoaWxkcmVuWzBdLnRleHRDb250ZW50KS50b0JlKFwidGVzdCB0ZXh0ICR7ZHluYW1pY30gY29udGVudFwiKTtcblx0fSk7XG5cdFxuXHRcblx0aXQoXCJwbGFpbiB0ZXh0IHdpdGggbWF4IHRleHQgbGVuZ3RoIGFuZCBkeW5hbWljIGNvbnRlbnRcIiwgYXN5bmMgKCkgPT4ge1xuXHRcdGNvbnN0IHJlbmRlcmVyID0gYXdhaXQgUmVuZGVyZXIuYnVpbGQoe3RlbXBsYXRlOiBcIjxkaXYganN0bC10ZXh0LXRyaW0tbGVuZ3RoPVxcXCIke2xlbmd0aH1cXFwiPnRlc3QgdGV4dCAke2R5bmFtaWN9IGNvbnRlbnQ8L2Rpdj5cIn0pO1xuXHRcdGNvbnN0IGNvbnRhaW5lciA9IGNyZWF0ZShcIjxkaXY+PC9kaXY+XCIpLmZpcnN0KCk7XHRcdFxuXHRcdGF3YWl0IHJlbmRlcmVyLnJlbmRlcih7Y29udGFpbmVyLCBkYXRhOiB7ZHluYW1pYzpcImR5bmFtaWNcIiwgbGVuZ3RoOiAxNX19KTtcdFx0XG5cdFx0ZXhwZWN0KGNvbnRhaW5lci5jaGlsZHJlblswXS50ZXh0Q29udGVudCkudG9CZShcInRlc3QgdGV4dCBkeS4uLlwiKTtcblx0fSk7XG5cdFxuXHRpdChcInBsYWluIHRleHQgd2l0aCBkeW5hbWljIGh0bWwgY29udGVudFwiLCBhc3luYyAoKSA9PiB7XG5cdFx0Y29uc3QgcmVuZGVyZXIgPSBhd2FpdCBSZW5kZXJlci5idWlsZCh7dGVtcGxhdGU6IFwiPGRpdj50ZXN0IHRleHQgJHtkeW5hbWljfTwvZGl2PlwifSk7XG5cdFx0Y29uc3QgY29udGFpbmVyID0gY3JlYXRlKFwiPGRpdj48L2Rpdj5cIikuZmlyc3QoKTtcdFx0XG5cdFx0YXdhaXQgcmVuZGVyZXIucmVuZGVyKHtjb250YWluZXIsIGRhdGE6IHtkeW5hbWljOlwiPGRpdj5keW5hbWljPGRpdj4gY29udGVudDwvZGl2PjwvZGl2PlwifX0pO1xuXHRcdGV4cGVjdChjb250YWluZXIuY2hpbGRyZW5bMF0uY2hpbGRyZW4ubGVuZ3RoKS50b0JlKDApO1x0XG5cdFx0ZXhwZWN0KGNvbnRhaW5lci5jaGlsZHJlblswXS50ZXh0Q29udGVudCkudG9CZShcInRlc3QgdGV4dCBkeW5hbWljIGNvbnRlbnRcIik7XG5cdH0pO1xuXHRcblx0YWZ0ZXJBbGwoKCkgPT4ge30pO1xufSk7IiwiaW1wb3J0IFwiLi9UZXh0TW9kZS5qc1wiO1xuaW1wb3J0IFwiLi9IVE1MTW9kZS5qc1wiOyIsImltcG9ydCBcIi4vRGlyZWN0aXZlVGVzdC5qc1wiO1xuaW1wb3J0IFwiLi9Jbml0aWFsVGVzdFwiO1xuaW1wb3J0IFwiLi9JZlRlc3RcIjtcbmltcG9ydCBcIi4vRGF0YVRlc3RcIjtcbmltcG9ydCBcIi4vSW5jbHVkZVRlc3RcIjtcbmltcG9ydCBcIi4vQXR0cmlidXRlVGVzdFwiO1xuaW1wb3J0IFwiLi9Gb3JlYWNoVGVzdFwiO1xuaW1wb3J0IFwiLi9SZXBlYXRUZXN0XCI7XG5pbXBvcnQgXCIuL0Nob29zZVRlc3RcIjtcbmltcG9ydCBcIi4vVGV4dFRlc3RcIjtcbmltcG9ydCBcIi4vT25GaW5pc2hlZFwiOyIsImltcG9ydCBcIi4vVGVtcGxhdGVUZXN0XCI7XG5pbXBvcnQgXCIuL1JlbmRlcmVyVGVzdFwiO1xuaW1wb3J0IFwiLi9kaXJlY3RpdmVzXCI7XG5cblxuaW1wb3J0IFwiLi9wZXJmb3JtYW5jZVwiOyIsImltcG9ydCBUZW1wbGF0ZSBmcm9tIFwiQHNyYy9UZW1wbGF0ZS5qc1wiO1xuaW1wb3J0IFJlbmRlcmVyIGZyb20gXCJAc3JjL1JlbmRlcmVyLmpzXCI7XG5cblxuY29uc3QgYmFzZSA9IFwiPGRpdiBjbGFzcz1cXFwidGVzdC0ke2NsYXNzbmFtZX1cXFwiPiR7dGVzdFZhbHVlfSAke3Byb21pc2VGdW5jdGlvbigpfVxcbntjb250ZW50fTwvZGl2PlwiO1xuY29uc3QgYnVpbGRDb250ZW50ID0gKHtjb3VudCwgdGVtcGxhdGU9YmFzZX0pID0+IHtcblx0aWYoY291bnQgPT0gMSlcblx0XHRyZXR1cm4gYmFzZTtcblx0XHRcblx0bGV0IGNvbnRlbnQgPSBbXTsgXG5cdGZvcihsZXQgaSA9IDA7IGkgPCBjb3VudDsgaSsrKVxuXHRcdGNvbnRlbnQucHVzaChiYXNlKTtcblx0XG5cdHJldHVybiBjb250ZW50LmpvaW4oXCJcIik7XG59XG5cbmNvbnN0IGJ1aWxkID0gKHtkZXB0aCwgY291bnQsIHN0cmluZyA9IG51bGwsIGluZGV4ID0gMCwgdGVtcGxhdGUgfSkgPT4ge1xuXHRpZihpbmRleCA+PSBkZXB0aClcblx0XHRyZXR1cm4gc3RyaW5nLnJlcGxhY2UoL1xce2NvbnRlbnRcXH0vZywgXCJcIik7XG5cdFxuXHRyZXR1cm4gYnVpbGQoe3N0cmluZzogKHN0cmluZyA/IHN0cmluZy5yZXBsYWNlKC9cXHtjb250ZW50XFx9L2csIGJ1aWxkQ29udGVudCh7Y291bnQsIHRlbXBsYXRlfSkpIDogYnVpbGRDb250ZW50KHtjb3VudCwgdGVtcGxhdGV9KSksIGluZGV4OiBpbmRleCsxLCBkZXB0aCwgY291bnQsIHRlbXBsYXRlfSk7XG59O1xuXG5cblxuZGVzY3JpYmUoXCJQZXJmb3JtYW5jZSBUZXN0IC0gZGVlcCBlbGVtZW50IHByb2Nlc3NpbmdcIiwgKCkgPT4ge1xuXG5cdGJlZm9yZUFsbCgoKSA9PiB7IH0pO1xuXG5cdGl0KFwiY2FzZSAxIC0gZGVwdGg9NTAwMCwgY291bnQ9MVwiLCBhc3luYyAoKSA9PiB7XG5cdFx0Y29uc3QgZGVwdGggPSA1MDAwO1xuXHRcdGNvbnN0IGNvdW50ID0gMTtcblx0XHRjb25zdCBodG1sID0gYnVpbGQoe2RlcHRoLCBjb3VudH0pO1x0XHRcblx0XHRjb25zdCB0ZW1wbGF0ZSA9IGF3YWl0IFRlbXBsYXRlLmxvYWQoaHRtbCwgZmFsc2UpO1xuXHRcdGNvbnN0IGNvbnRhaW5lciA9IGNyZWF0ZShcIjxkaXY+PC9kaXY+XCIpLmZpcnN0KCk7XG5cdFx0ZG9jdW1lbnQuYm9keS5hcHBlbmQoY29udGFpbmVyKTtcblx0XHRjb25zdCByZW5kZXJlciA9IG5ldyBSZW5kZXJlcih7IHRlbXBsYXRlIH0pO1xuXHRcdGNvbnN0IGRhdGEgPSB7XG5cdFx0XHRjbGFzc25hbWU6IFwidGVzdC1jbGFzc1wiLFxuXHRcdFx0dGVzdFZhbHVlOiBcInRlc3QtdmFsdWVcIixcblx0XHRcdHByb21pc2VGdW5jdGlvbjogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHJldHVybiBQcm9taXNlLnJlc29sdmUoXCJwcm9taXNlLXZhbHVlXCIpO1xuXHRcdFx0fVxuXHRcdH07XG5cblx0XHRjb25zdCBzdGFydCA9IERhdGUubm93KCk7XG5cdFx0YXdhaXQgcmVuZGVyZXIucmVuZGVyKHsgZGF0YSwgY29udGFpbmVyIH0pO1xuXHRcdGNvbnN0IGVuZCA9IERhdGUubm93KCk7XG5cdFx0Y29uc3QgZWxlbWVudHMgPSBjb250YWluZXIuZmluZChcIjpzY29wZSAqXCIpO1x0XHRcblxuXHRcdGNvbnNvbGUubG9nKFwibWFueSBlbGVtZW50IHByb2Nlc3NcIiwgZWxlbWVudHMubGVuZ3RoLCBcImVsZW1lbnRzIGF0XCIsIChlbmQgLSBzdGFydCksIFwibXNcIik7XG5cdFx0ZXhwZWN0KGVsZW1lbnRzLmxlbmd0aCkudG9CZShkZXB0aCk7XG5cdFx0Y29udGFpbmVyLnJlbW92ZSgpO1xuXHR9KTtcblx0XG5cdGl0KFwiY2FzZSAyIC0gZGVwdGg9MTAgY291bnQ9M1wiLCBhc3luYyAoKSA9PiB7XG5cdFx0Y29uc3QgZGVwdGggPSAxMDtcblx0XHRjb25zdCBjb3VudCA9IDM7XG5cdFx0Y29uc3QgaHRtbCA9IGJ1aWxkKHtkZXB0aCwgY291bnR9KTtcdFx0XG5cdFx0Y29uc3QgdGVtcGxhdGUgPSBhd2FpdCBUZW1wbGF0ZS5sb2FkKGh0bWwsIGZhbHNlKTtcblx0XHRjb25zdCBjb250YWluZXIgPSBjcmVhdGUoXCI8ZGl2PjwvZGl2PlwiKS5maXJzdCgpO1xuXHRcdGRvY3VtZW50LmJvZHkuYXBwZW5kKGNvbnRhaW5lcik7XG5cdFx0Y29uc3QgcmVuZGVyZXIgPSBuZXcgUmVuZGVyZXIoeyB0ZW1wbGF0ZSB9KTtcblx0XHRjb25zdCBkYXRhID0ge1xuXHRcdFx0Y2xhc3NuYW1lOiBcInRlc3QtY2xhc3NcIixcblx0XHRcdHRlc3RWYWx1ZTogXCJ0ZXN0LXZhbHVlXCIsXG5cdFx0XHRwcm9taXNlRnVuY3Rpb246IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKFwicHJvbWlzZS12YWx1ZVwiKTtcblx0XHRcdH1cblx0XHR9O1xuXG5cdFx0Y29uc3Qgc3RhcnQgPSBEYXRlLm5vdygpO1xuXHRcdGF3YWl0IHJlbmRlcmVyLnJlbmRlcih7IGRhdGEsIGNvbnRhaW5lciB9KTtcblx0XHRjb25zdCBlbmQgPSBEYXRlLm5vdygpO1xuXHRcdGNvbnN0IGVsZW1lbnRzID0gY29udGFpbmVyLmZpbmQoXCI6c2NvcGUgKlwiKTtcdFx0XG5cblx0XHRjb25zb2xlLmxvZyhcIm1hbnkgZWxlbWVudCBwcm9jZXNzXCIsIGVsZW1lbnRzLmxlbmd0aCwgXCJlbGVtZW50cyBhdFwiLCAoZW5kIC0gc3RhcnQpLCBcIm1zXCIpO1xuXHRcdGNvbnRhaW5lci5yZW1vdmUoKTtcblx0fSk7XG5cdFxuXHRpdChcImNhc2UgMyAtIGRlcHRoPTEgY291bnQ9MTAwMDBcIiwgYXN5bmMgKCkgPT4ge1xuXHRcdGNvbnN0IGRlcHRoID0gMTtcblx0XHRjb25zdCBjb3VudCA9IDEwMDAwO1xuXHRcdGNvbnN0IGh0bWwgPSBidWlsZCh7ZGVwdGgsIGNvdW50fSk7XHRcdFxuXHRcdGNvbnN0IHRlbXBsYXRlID0gYXdhaXQgVGVtcGxhdGUubG9hZChodG1sLCBmYWxzZSk7XG5cdFx0Y29uc3QgY29udGFpbmVyID0gY3JlYXRlKFwiPGRpdj48L2Rpdj5cIikuZmlyc3QoKTtcblx0XHRkb2N1bWVudC5ib2R5LmFwcGVuZChjb250YWluZXIpO1xuXHRcdGNvbnN0IHJlbmRlcmVyID0gbmV3IFJlbmRlcmVyKHsgdGVtcGxhdGUgfSk7XG5cdFx0Y29uc3QgZGF0YSA9IHtcblx0XHRcdGNsYXNzbmFtZTogXCJ0ZXN0LWNsYXNzXCIsXG5cdFx0XHR0ZXN0VmFsdWU6IFwidGVzdC12YWx1ZVwiLFxuXHRcdFx0cHJvbWlzZUZ1bmN0aW9uOiBmdW5jdGlvbigpIHtcblx0XHRcdFx0cmV0dXJuIFByb21pc2UucmVzb2x2ZShcInByb21pc2UtdmFsdWVcIik7XG5cdFx0XHR9XG5cdFx0fTtcblxuXHRcdGNvbnN0IHN0YXJ0ID0gRGF0ZS5ub3coKTtcblx0XHRhd2FpdCByZW5kZXJlci5yZW5kZXIoeyBkYXRhLCBjb250YWluZXIgfSk7XG5cdFx0Y29uc3QgZW5kID0gRGF0ZS5ub3coKTtcblx0XHRjb25zdCBlbGVtZW50cyA9IGNvbnRhaW5lci5maW5kKFwiOnNjb3BlICpcIik7XHRcdFxuXG5cdFx0Y29uc29sZS5sb2coXCJtYW55IGVsZW1lbnQgcHJvY2Vzc1wiLCBlbGVtZW50cy5sZW5ndGgsIFwiZWxlbWVudHMgYXRcIiwgKGVuZCAtIHN0YXJ0KSwgXCJtc1wiKTtcblx0XHRjb250YWluZXIucmVtb3ZlKCk7XG5cdH0pO1xuXG5cdGFmdGVyQWxsKCgpID0+IHsgfSk7XG59KTsiXSwic291cmNlUm9vdCI6IiJ9