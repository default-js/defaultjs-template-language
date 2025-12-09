/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@default-js/defaultjs-common-utils/src/Global.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-common-utils/src/Global.js ***!
  \***********************************************************************/
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
/* harmony export */   append: () => (/* binding */ append),
/* harmony export */   defGet: () => (/* binding */ defGet),
/* harmony export */   defGetSet: () => (/* binding */ defGetSet),
/* harmony export */   defValue: () => (/* binding */ defValue),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   equalPojo: () => (/* binding */ equalPojo),
/* harmony export */   filter: () => (/* binding */ filter),
/* harmony export */   isNullOrUndefined: () => (/* binding */ isNullOrUndefined),
/* harmony export */   isObject: () => (/* binding */ isObject),
/* harmony export */   isPojo: () => (/* binding */ isPojo),
/* harmony export */   isPrimitive: () => (/* binding */ isPrimitive),
/* harmony export */   merge: () => (/* binding */ merge)
/* harmony export */ });
/* harmony import */ var _ObjectProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ObjectProperty.js */ "./node_modules/@default-js/defaultjs-common-utils/src/ObjectProperty.js");


const equalArraySet = (a, b) => {
	if (a.length !== b.length) return false;
	const length = a.length;
	for (let i = 0; i < length; i++)
		if (!equalPojo(a[i], b[i])) {
			//console.log("false");
			return false;
		}

	return true;
};

const equalMap = (a, b) => {
	if (a.length !== b.length) return false;
	for (const key of a.keys())
		if (!equalPojo(a.get(key), b.get(key))) {
			//console.log("false");
			return false;
		}

	return true;
};

const equalClasses = (a, b) => {
	const clazzA = Object.getPrototypeOf(a);
	const clazzB = Object.getPrototypeOf(b);
	if (clazzA != clazzB) return false;

	if (!clazzA) return true;

	const propertiesA = Object.getOwnPropertyNames(clazzA);
	const propertiesB = Object.getOwnPropertyNames(clazzB);

	if (propertiesA.length !== propertiesB.length) return false;
	for (const key of propertiesA) {
		const valueA = a[key];
		const valueB = b[key];

		if (!equalPojo(valueA, valueB)) return false;
	}
	return true;
};

const equalObject = (a, b) => {
	const propertiesA = Object.keys(a);
	const propertiesB = Object.keys(b);

	if (propertiesA.length !== propertiesB.length) return false;
	for (const key of propertiesA) {
		const valueA = a[key];
		const valueB = b[key];

		if (!equalPojo(valueA, valueB)) return false;
	}
	return true;
};

const isNullOrUndefined = (object) => {
	return object == null || typeof object === "undefined";
};

const isPrimitive = (object) => {
	if (object == null) return true;

	const type = typeof object;
	switch (type) {
		case "number":
		case "bigint":
		case "boolean":
		case "string":
		case "undefined":
			return true;
	}

	return false;
};

const isObject = (object) => {
	if(isNullOrUndefined(object))
		return false;

	return typeof object === "object" && (!object.constructor || object.constructor.name === "Object");
};

/**
 * equalPojo -> compares only pojos, array, set, map and primitives
 */
const equalPojo = (a, b) => {
	const nullA = isNullOrUndefined(a);
	const nullB = isNullOrUndefined(b);
	if (nullA || nullB) return a === b;

	if (isPrimitive(a) || isPrimitive(b)) return a === b;

	const typeA = typeof a;
	const typeB = typeof b;
	if (typeA != typeB) return false;
	if (typeA === "function") return a === b;
	//if (a.constructor !== b.constructor) return false;
	//if (a instanceof Array || a instanceof Set) return equalArraySet(a, b);
	//if (a instanceof Map) return equalMap(a, b);

	return equalObject(a, b) && equalClasses(a, b);
};

/**
 * checked if an object a simple object. No Array, Map or something else.
 *
 * @param aObject:object the object to be testing
 *
 * @return boolean
 */
const isPojo = (object) => {
	if (!isObject(object)) return false;

	for (const key in object) {
		const value = object[key];
		if (typeof value === "function") return false;
	}

	return true;
};

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
		const property = _ObjectProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"].load(aObject, aKey, true);
		property.append = aData;
	}
	return aObject;
};

/**
 * merging object into a target object. Its only merge simple object and sub objects. Every other
 * value would be replaced by value from the source object.
 *
 * sample: merge(target, source-1, source-2, ...source-n)
 *
 * @param target:object the target object to merging into
 * @param sources:object
 *
 * @return object returns the target object
 */
const merge = function (target, ...sources) {
	if (!target) target = {};

	for (let source of sources) {
		if (isPojo(source)) {
			Object.getOwnPropertyNames(source).forEach((key) => {
				if (isPojo(target[key])) merge(target[key], source[key]);
				else target[key] = source[key];
			});
		}
	}

	return target;
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
		enumerable: false,
	});
};
const defGet = (o, name, get) => {
	Object.defineProperty(o, name, {
		get,
		configurable: false,
		enumerable: false,
	});
};

const defGetSet = (o, name, get, set) => {
	Object.defineProperty(o, name, {
		get,
		set,
		configurable: false,
		enumerable: false,
	});
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
	isNullOrUndefined,
	isObject,
	equalPojo,
	isPojo,
	append,
	merge,
	filter,
	buildPropertyFilter,
	defValue,
	defGet,
	defGetSet,
});


/***/ }),

/***/ "./node_modules/@default-js/defaultjs-common-utils/src/PromiseUtils.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-common-utils/src/PromiseUtils.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   lazyPromise: () => (/* binding */ lazyPromise),
/* harmony export */   timeoutPromise: () => (/* binding */ timeoutPromise)
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

/***/ "./node_modules/@default-js/defaultjs-expression-language/index.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-expression-language/index.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ExecuterRegistry: () => (/* reexport module object */ _src_ExecuterRegistry_js__WEBPACK_IMPORTED_MODULE_2__),
/* harmony export */   ExpressionResolver: () => (/* reexport safe */ _src_ExpressionResolver_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _src_ExpressionResolver_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/ExpressionResolver.js */ "./node_modules/@default-js/defaultjs-expression-language/src/ExpressionResolver.js");
/* harmony import */ var _src_executer_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/executer/index.js */ "./node_modules/@default-js/defaultjs-expression-language/src/executer/index.js");
/* harmony import */ var _src_ExecuterRegistry_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/ExecuterRegistry.js */ "./node_modules/@default-js/defaultjs-expression-language/src/ExecuterRegistry.js");







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
/**
 * object for default value
 *
 * @export
 * @class DefaultValue
 * @typedef {DefaultValue}
 */
class DefaultValue {
	/**
	 * Creates an instance of DefaultValue.
	 *
	 * @constructor
	 * @param {*} value
	 */
	constructor(value){
		this.hasValue = arguments.length == 1;
		this.value = value;
	}	
};

/***/ }),

/***/ "./node_modules/@default-js/defaultjs-expression-language/src/ExecuterRegistry.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-expression-language/src/ExecuterRegistry.js ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   getExecuter: () => (/* binding */ getExecuter),
/* harmony export */   registrate: () => (/* binding */ registrate)
/* harmony export */ });
const EXECUTERS = new Map();

/**
 *
 * @param {string} aName
 * @param {Function} anExecuter
 */
const registrate = (aName, anExecuter) => {
	EXECUTERS.set(aName, anExecuter);
};

/**
 *
 * @param {string} aName
 * @returns {Function}
 */
const getExecuter = (aName) => {
	const executer = EXECUTERS.get(aName);
	if (!executer) throw new Error(`Executer "${aName}" is not registrated!`);
	return executer;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getExecuter);


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
/* harmony import */ var _default_js_defaultjs_common_utils_src_Global_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @default-js/defaultjs-common-utils/src/Global.js */ "./node_modules/@default-js/defaultjs-common-utils/src/Global.js");
/* harmony import */ var _default_js_defaultjs_common_utils_src_ObjectUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @default-js/defaultjs-common-utils/src/ObjectUtils.js */ "./node_modules/@default-js/defaultjs-common-utils/src/ObjectUtils.js");
/* harmony import */ var _DefaultValue_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DefaultValue.js */ "./node_modules/@default-js/defaultjs-expression-language/src/DefaultValue.js");
/* harmony import */ var _ExecuterRegistry_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ExecuterRegistry.js */ "./node_modules/@default-js/defaultjs-expression-language/src/ExecuterRegistry.js");
/* harmony import */ var _ResolverContextHandle_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ResolverContextHandle.js */ "./node_modules/@default-js/defaultjs-expression-language/src/ResolverContextHandle.js");






const DEFAULT_EXECUTER_NAME = "with-scoped-executer";
let DEFAULT_EXECUTER = (() => {
	let executer = null;
	return (aStatement, aContext) => {
		if (executer == null) executer = (0,_ExecuterRegistry_js__WEBPACK_IMPORTED_MODULE_3__["default"])(DEFAULT_EXECUTER_NAME);
		return executer(aStatement, aContext);
	};
})();

const EXECUTION_WARN_TIMEOUT = 1000;
const EXPRESSION = /(\\?)(\$\{(([a-zA-Z0-9\-_\s]+)::)?([^\{\}]+)\})/;
const MATCH_ESCAPED = 1;
const MATCH_FULL_EXPRESSION = 2;
const MATCH_EXPRESSION_SCOPE = 4;
const MATCH_EXPRESSION_STATEMENT = 5;

const DEFAULT_NOT_DEFINED = new _DefaultValue_js__WEBPACK_IMPORTED_MODULE_2__["default"]();
const toDefaultValue = (value) => {
	if (value instanceof _DefaultValue_js__WEBPACK_IMPORTED_MODULE_2__["default"]) return value;

	return new _DefaultValue_js__WEBPACK_IMPORTED_MODULE_2__["default"](value);
};

const execute = async function (anExecuter, aStatement, aContext) {
	if (typeof aStatement !== "string") return aStatement;
	aStatement = normalize(aStatement);
	if (aStatement == null) return aStatement;

	try {
		return await new Promise((resolve) => {
			const timeout = setTimeout(
				() =>
					console.warn(`Long running statement:
				"${aStatement}"
			`),
				EXECUTION_WARN_TIMEOUT,
			);
			resolve(
				(async () => {
					let result = undefined;
					try {
						result = await anExecuter(aStatement, aContext);
					} catch (e) {
						console.warn(`Execution error on statement!
							statement: 
							${aStatement}
							error:
							${e}
							`)
					} finally {
						clearTimeout(timeout);
					}
					return result;
				})(),
			);
		});
	} catch (e) {
		console.error(`Error by statement "${aStatement}":`, e);
	}
};

const resolve = async function (aExecuter = DEFAULT_EXECUTER, aResolver, aExpression, aFilter, aDefault) {
	if (aFilter && aResolver.name != aFilter) return aResolver.parent ? resolve(aResolver.parent, aExpression, aFilter, aDefault, aExecuter) : null;

	const result = await execute(aExecuter, aExpression, aResolver.context);
	if (result !== null && typeof result !== "undefined") return result;
	else if (aDefault instanceof _DefaultValue_js__WEBPACK_IMPORTED_MODULE_2__["default"] && aDefault.hasValue) return aDefault.value;
};

const resolveMatch = async (aExecuter, resolver, match, defaultValue) => {
	if (match[MATCH_ESCAPED]) return match[MATCH_FULL_EXPRESSION];

	return resolve(aExecuter, resolver, match[MATCH_EXPRESSION_STATEMENT], normalize(match[MATCH_EXPRESSION_SCOPE]), defaultValue);
};

const normalize = (value) => {
	if (value) {
		value = value.trim();
		return value.length == 0 ? null : value;
	}
	return null;
};

/**
 * ExpressionResolver
 *
 * @export
 * @class ExpressionResolver
 * @typedef {ExpressionResolver}
 */
class ExpressionResolver {
	/**
	 * @param {string} anExecuterName
	 */
	static set defaultExecuter(anExecuter) {
		if (typeof anExecuter === "function") DEFAULT_EXECUTER = anExecuter;
		else DEFAULT_EXECUTER = (0,_ExecuterRegistry_js__WEBPACK_IMPORTED_MODULE_3__["default"])(anExecuter);
		console.info(`Changed default executer for ExpressionResolver!`);
	}

	static get defaultExecuter() {
		return DEFAULT_EXECUTER;
	}

	/** @type {string|null} */
	#name = null;
	/** @type {ExpressionResolver|null} */
	#parent = null;
	/** @type {function|null} */
	#executer = null;
	/** @type {Proxy|null} */
	#context = null;
	/** @type {ResolverContextHandle|null} */
	#contextHandle = null;

	/**
	 * Creates an instance of ExpressionResolver.
	 * @date 3/10/2024 - 7:27:57 PM
	 *
	 * @constructor
	 * @param {{ context?: any; parent?: any; name?: any; }} param0
	 * @param {object} [param0.context=GLOBAL]
	 * @param {ExpressionResolver} [param0.parent=null]
	 * @param {?string} [param0.name=null]
	 */
	constructor({ context = _default_js_defaultjs_common_utils_src_Global_js__WEBPACK_IMPORTED_MODULE_0__["default"], parent = null, name = null, executer } = {}) {
		this.#parent = parent instanceof ExpressionResolver ? parent : null;
		this.#name = name;
		this.#contextHandle = new _ResolverContextHandle_js__WEBPACK_IMPORTED_MODULE_4__["default"](context, this.#parent ? this.#parent.contextHandle : null);
		this.#context = this.#contextHandle.proxy;
		this.#executer = typeof executer === "string" ? (0,_ExecuterRegistry_js__WEBPACK_IMPORTED_MODULE_3__["default"])(executer) : undefined;
	}

	get name() {
		return this.#name;
	}

	get parent() {
		return this.#parent;
	}

	get context() {
		return this.#context;
	}

	get contextHandle() {
		return this.#contextHandle;
	}

	/**
	 * get chain path
	 *
	 * @readonly
	 * @returns {string}
	 */
	get chain() {
		return this.parent ? this.parent.chain + "/" + this.name : "/" + this.name;
	}

	/**
	 * get effective chain path
	 *
	 * @readonly
	 * @returns {string}
	 */
	get effectiveChain() {
		return this.parent ? this.parent.effectiveChain + "/" + this.name : "/" + this.name;
	}

	/**
	 * get context chain
	 *
	 * @readonly
	 * @returns {Context[]}
	 */
	get contextChain() {
		const result = [];
		let resolver = this;
		while (resolver) {
			if (resolver.context) result.push(resolver.context);

			resolver = resolver.parent;
		}

		return result;
	}

	/**
	 * get data from context
	 *
	 * @param {string} key
	 * @param {?string} filter
	 * @returns {*}
	 */
	getData(key, filter) {
		if (!key) return this.context;
		else if (filter && filter != this.name) {
			if (this.parent) this.parent.getData(key, filter);
		} else {
			return this.context[key];
		}
	}

	/**
	 * update data at context
	 *
	 * @param {string} key
	 * @param {*} value
	 * @param {?string} filter
	 */
	updateData(key, value, filter) {
		if (!key) return;
		else if (filter && filter != this.name) {
			if (this.parent) this.parent.updateData(key, value, filter);
		} else {
			this.context[key] = value;
		}
	}

	/**
	 * merge context object
	 *
	 * @param {object} context
	 * @param {?string} filter
	 */	
	mergeContext(context, filter) {
		if (filter && filter != this.name) {
			if (this.parent) this.parent.mergeContext(context, filter);
		} else 
			this.#contextHandle.mergeData(context);
	}

	/**
	 * resolved an expression string to data
	 *
	 * @async
	 * @param {string} aExpression
	 * @param {?*} aDefault
	 * @returns {Promise<*>}
	 */
	async resolve(aExpression, aDefault) {
		const defaultValue = arguments.length == 2 ? toDefaultValue(aDefault) : DEFAULT_NOT_DEFINED;
		try {
			aExpression = aExpression.trim();
			if (aExpression.startsWith("\\${")) return aExpression.substring(1);
			else if (aExpression.startsWith("${") && aExpression.endsWith("}")) return await resolve(this.#executer, this, normalize(aExpression.substring(2, aExpression.length - 1)), null, defaultValue);			
			else return await resolve(this.#executer, this, normalize(aExpression), null, defaultValue);
		} catch (e) {
			console.error('error at executing statment"', aExpression, '":', e);
			return defaultValue.hasValue ? defaultValue.value : aExpression;
		}
	}

	/**
	 * replace all expressions at a string	 *
	 * @async
	 * @param {string} aText
	 * @param {?*} aDefault
	 * @returns {Promise<*>}
	 */
	async resolveText(aText, aDefault) {
		let text = aText;
		let temp = aText; // required to prevent infinity loop
		let match = EXPRESSION.exec(text);
		const defaultValue = arguments.length == 2 ? toDefaultValue(aDefault) : DEFAULT_NOT_DEFINED;
		while (match != null) {
			const result = await resolveMatch(this.#executer, this, match, defaultValue);
			temp = temp.split(match[0]).join(); // remove current match for next loop
			text = text.split(match[0]).join(typeof result === "undefined" ? "undefined" : result == null ? "null" : result);
			match = EXPRESSION.exec(temp);
		}
		return text;
	}

	/**
	 * resolve an expression string to data
	 *
	 * @static
	 * @async
	 * @param {string} aExpression
	 * @param {?object} aContext
	 * @param {?*} aDefault
	 * @param {?number} aTimeout
	 * @returns {Promise<*>}
	 */
	static async resolve(aExpression, aContext, aDefault, aTimeout) {
		const resolver = new ExpressionResolver({ context: aContext });
		const defaultValue = arguments.length > 2 ? toDefaultValue(aDefault) : DEFAULT_NOT_DEFINED;
		if (typeof aTimeout === "number" && aTimeout > 0)
			return new Promise((resolve) => {
				setTimeout(() => {
					resolve(resolver.resolve(aExpression, defaultValue));
				}, aTimeout);
			});

		return resolver.resolve(aExpression, defaultValue);
	}

	/**
	 * replace expression at text
	 *
	 * @static
	 * @async
	 * @param {string} aText
	 * @param {?object} aContext
	 * @param {?*} aDefault
	 * @param {?number} aTimeout
	 * @returns {Promise<*>}
	 */
	static async resolveText(aText, aContext, aDefault, aTimeout) {
		const resolver = new ExpressionResolver({ context: aContext });
		const defaultValue = arguments.length > 2 ? toDefaultValue(aDefault) : DEFAULT_NOT_DEFINED;
		if (typeof aTimeout === "number" && aTimeout > 0)
			return new Promise((resolve) => {
				setTimeout(() => {
					resolve(resolver.resolveText(aText, defaultValue));
				}, aTimeout);
			});

		return resolver.resolveText(aText, defaultValue);
	}

	/**
	 * build a secure context object
	 *
	 * @static
	 
	 * @param {object} arg
	 * @param {object} arg.context
	 * @param {function} arg.propFilter
	 * @param {{ deep: boolean; }} [arg.option={ deep: true }]
	 * @param {string} arg.name
	 * @param {ExpressionResolver} arg.parent
	 * @returns {object}
	 */
	static buildSecure({ context, propFilter, option = { deep: true }, name, parent }) {
		context = _default_js_defaultjs_common_utils_src_ObjectUtils_js__WEBPACK_IMPORTED_MODULE_1__["default"].filter({ data: context, propFilter, option });
		return new ExpressionResolver({ context, name, parent });
	}
}



/***/ }),

/***/ "./node_modules/@default-js/defaultjs-expression-language/src/ResolverContextHandle.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-expression-language/src/ResolverContextHandle.js ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ResolverContextHandle)
/* harmony export */ });
/* harmony import */ var _default_js_defaultjs_common_utils_src_Global_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @default-js/defaultjs-common-utils/src/Global.js */ "./node_modules/@default-js/defaultjs-common-utils/src/Global.js");
/* harmony import */ var _ExpressionResolver__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ExpressionResolver */ "./node_modules/@default-js/defaultjs-expression-language/src/ExpressionResolver.js");




const createGlobalCacheWrapper = (handle) => {

	return {
		has: (property) => {
			return true;
		},
		get: (property) => {
			return handle
		},
		set: (property, value) => {			
		},
		delete: (property) => {
			delete _default_js_defaultjs_common_utils_src_Global_js__WEBPACK_IMPORTED_MODULE_0__["default"][property];
		},
		keys: () => {
			return Object.getOwnPropertyNames(_default_js_defaultjs_common_utils_src_Global_js__WEBPACK_IMPORTED_MODULE_0__["default"]);
		}
	}	
}


/**
 * Context object to handle data access
 *
 * @export
 * @class ResolverContextHandle
 */
class ResolverContextHandle {
	/** @type {Proxy|null} */
	#proxy = null;
	/** @type {ResolverContextHandle|null} */
	#parent = null;
	/** @type {object|null} */
	#data = null;
	/** @type {Map<string,ResolverContextHandle>|null} */
	#cache = null;

	/**
	 * Creates an instance of Context.
	 *
	 * @constructor
	 * @param {object} data
	 * @param {ExpressionResolver} resolver
	 */
	constructor(data, parent) {
		this.#data = data || {};
		this.#parent = parent ? parent : null;
		this.#cache = this.#initPropertyCache();

		this.#proxy = new Proxy(this.#data, {
			has: (data, property) => {
				//console.log("has property:", property);
				return this.#hasProperty(property);
			},
			get: (data, property) => {
				//console.log("get property:", property);
				const proxy = this.#getPropertyDef(property);
				return proxy ? proxy.#getProperty(property) : undefined;
			},
			set: (data, property, value) => {
				//console.log("set property:", property, "=", value);
				const proxy = this.#getPropertyDef(property);
				if (proxy) return proxy.#setProperty(property, value);
				else return this.#setProperty(property, value);
			},
			deleteProperty: (data, property) => {
				return this.#deleteProperty(property);
			},
			ownKeys: (data) => {
				//console.log("ownKeys");
				const result = new Set();
				let proxy = this;
				while (proxy) {
					for (let key of proxy.#cache.keys()) {
						result.add(key);
					}
					proxy = proxy.#parent;
				}
				return Array.from(result);
			},

			//@TODO need to support the other proxy actions
		});
	}

	/**
	 * @readonly
	 * @type {Proxy}
	 */
	get proxy() {
		return this.#proxy;
	}

	/**
	 * @readonly
	 * @type {ResolverContextHandle|null}
	 */
	get parent() {
		return this.#parent;
	}

	updateData(data) {
		this.#data = data || {};
		this.#cache = this.#initPropertyCache();
	}

	mergeData(data) {
		if(typeof data !== 'object' || data == null) return;
		Object.assign(this.#data, data);
		this.#cache = this.#initPropertyCache();
	}

	resetCache() {
		this.#cache = this.#initPropertyCache();
	}

	/**
	 *
	 * @returns {Map<string,PropertyDefinition>}
	 */
	#initPropertyCache() {
		const data = this.#data;
		if(data == _default_js_defaultjs_common_utils_src_Global_js__WEBPACK_IMPORTED_MODULE_0__["default"]) 
			return createGlobalCacheWrapper(this);	

		const cache = new Map();
		for (let property of Object.getOwnPropertyNames(data)) cache.set(property, this);

		return cache;
	}

	/**
	 * @param {string} property
	 * @returns {ResolverContextHandle|null}
	 */
	#getPropertyDef(property) {
		if (this.#cache.has(property)) return this.#cache.get(property);
		let parent = this.#parent;
		while (parent) {
			if (parent.#cache.has(property)) return parent.#cache.get(property);
			parent = parent.#parent;
		}
		return null;
	}

	#hasProperty(property) {
		return this.#getPropertyDef(property) != null;
	}
	#getProperty(property) {
		//@TODO write tests!!!
		return this.#data[property];
	}
	#setProperty(property, value) {
		//@TODO would support this action on an proxied resolver context??? write tests!!!
		console.log("set property data:", property, "=", value);
		this.#data[property] = value;
		this.#cache.set(property, this);
		return true;
	}
	#deleteProperty(property) {
		const propertyDef = this.#cache.get(property);
		if (propertyDef) {
			delete propertyDef.data[property];
			this.#cache.delete(property);
		}
	}
}


/***/ }),

/***/ "./node_modules/@default-js/defaultjs-expression-language/src/Utils.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-expression-language/src/Utils.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   stringToHashcode: () => (/* binding */ stringToHashcode)
/* harmony export */ });
const stringToHashcode = (aString) => {
    let hash = 0;
    if (aString.length == 0) return hash;
    const length = aString.length;
    for (let i = 0; i < length; i++) {
      const char = aString.charCodeAt(i);
      hash = ((hash << 5) - hash) + char;
      hash |= 0; // Convert to 32bit integer
    }
    return hash;
  };

/***/ }),

/***/ "./node_modules/@default-js/defaultjs-expression-language/src/executer/ContextDeconstructorExecuter.js":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-expression-language/src/executer/ContextDeconstructorExecuter.js ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EXECUTERNAME: () => (/* binding */ EXECUTERNAME),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ExecuterRegistry_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ExecuterRegistry.js */ "./node_modules/@default-js/defaultjs-expression-language/src/ExecuterRegistry.js");
/* harmony import */ var _Utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Utils.js */ "./node_modules/@default-js/defaultjs-expression-language/src/Utils.js");



const EXECUTERNAME = "context-deconstruction-executer";
const EXPRESSION_CACHE = new Map();
/**
 *
 * @param {string} aStatement
 * @returns {Function}
 */
const generate = (aStatement, contextProperties) => {
	const code = `
return (async ({${contextProperties}}) => {
    try{
        return ${aStatement}
    }catch(e){
        throw e;
    }
})(context || {});`;

	//console.log("code", code);

	return new Function("context", code);
};

/**
 *
 * @param {string} aStatement
 * @returns {Function}
 */
const getOrCreateFunction = (aStatement, contextProperties) => {
	const cacheKey = (0,_Utils_js__WEBPACK_IMPORTED_MODULE_1__.stringToHashcode)(contextProperties + "::" + aStatement);
	if (EXPRESSION_CACHE.has(cacheKey)) {
		return EXPRESSION_CACHE.get(cacheKey);
	}
	const expression = generate(aStatement, contextProperties);
	EXPRESSION_CACHE.set(cacheKey, expression);
	return expression;
};

/**
 * Description placeholder
 *
 * @param {string} aStatement
 * @param {object} aContext
 * @returns {Promise}
 */
function execute(aStatement, aContext) {
	const contextProperties = Object.getOwnPropertyNames(aContext || {}).join(", ")	;
	const expression = getOrCreateFunction(aStatement, contextProperties);
	return expression(aContext);
};
(0,_ExecuterRegistry_js__WEBPACK_IMPORTED_MODULE_0__.registrate)(EXECUTERNAME, execute);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (execute);


/***/ }),

/***/ "./node_modules/@default-js/defaultjs-expression-language/src/executer/ContextObjectExecuter.js":
/*!******************************************************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-expression-language/src/executer/ContextObjectExecuter.js ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EXECUTERNAME: () => (/* binding */ EXECUTERNAME),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ExecuterRegistry_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ExecuterRegistry.js */ "./node_modules/@default-js/defaultjs-expression-language/src/ExecuterRegistry.js");


const EXECUTERNAME = "context-object-executer";
const EXPRESSION_CACHE = new Map();
/**
 *
 * @param {string} aStatement
 * @returns {Function}
 */
const generate = (aStatement) => {
	const code = `
return (async (ctx) => {
    try{
        return ${aStatement}
    }catch(e){
        throw e;
    }
})(context || {});`;

	//console.log("code", code);

	return new Function("context", code);
};

/**
 *
 * @param {string} aStatement
 * @returns {Function}
 */
const getOrCreateFunction = (aStatement) => {

	const cacheKey = aStatement;

	if (EXPRESSION_CACHE.has(cacheKey)) {
		return EXPRESSION_CACHE.get(cacheKey);
	}
	const expression = generate(aStatement);
	EXPRESSION_CACHE.set(cacheKey, expression);
	return expression;
};

/**
 * Description placeholder
 *
 * @param {string} aStatement
 * @param {object} aContext
 * @returns {Promise}
 */
function directExecute(aStatement, aContext) {
	const expression = getOrCreateFunction(aStatement);
	return expression(aContext);
};
(0,_ExecuterRegistry_js__WEBPACK_IMPORTED_MODULE_0__.registrate)(EXECUTERNAME, directExecute);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (directExecute);


/***/ }),

/***/ "./node_modules/@default-js/defaultjs-expression-language/src/executer/WithScopedExecuter.js":
/*!***************************************************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-expression-language/src/executer/WithScopedExecuter.js ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EXECUTERNAME: () => (/* binding */ EXECUTERNAME),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ExecuterRegistry_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ExecuterRegistry.js */ "./node_modules/@default-js/defaultjs-expression-language/src/ExecuterRegistry.js");


const EXECUTERNAME = "with-scoped-executer";
const EXPRESSION_CACHE = new Map();
let initialCall = true;

/**
 * 
 * @param {string} aStatement 
 * @returns {Function}
 */
const generate = (aStatement) => {
const code = `
	return (async (context) => {
		with(context){
			try{ 
				return ${aStatement}
			}catch(e){
				throw e;
			}
		}
	})(context || {});
`;
	//console.log("code", code);

	return new Function("context", code);
};

/**
 * 
 * @param {string} aStatement 
 * @returns {Function}
 */
const getOrCreateFunction = (aStatement) => {
	if (EXPRESSION_CACHE.has(aStatement)) {
		return EXPRESSION_CACHE.get(aStatement);
	}
	const expression = generate(aStatement);
	EXPRESSION_CACHE.set(aStatement, expression);
	return expression;
};

/**
 * Description placeholder
 *
 * @param {string} aStatement
 * @param {object} aContext
 * @returns {Promise}
 */
function withScopedExecute (aStatement, aContext) {
	if(initialCall){
		initialCall = false;
		console.warn(new Error(`With Scoped expression execution is marked as deprecated.`));
	}

	const expression = getOrCreateFunction(aStatement);
	return expression(aContext);
};
(0,_ExecuterRegistry_js__WEBPACK_IMPORTED_MODULE_0__.registrate)(EXECUTERNAME, withScopedExecute);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (withScopedExecute);


/***/ }),

/***/ "./node_modules/@default-js/defaultjs-expression-language/src/executer/index.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-expression-language/src/executer/index.js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _WithScopedExecuter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./WithScopedExecuter.js */ "./node_modules/@default-js/defaultjs-expression-language/src/executer/WithScopedExecuter.js");
/* harmony import */ var _ContextObjectExecuter_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ContextObjectExecuter.js */ "./node_modules/@default-js/defaultjs-expression-language/src/executer/ContextObjectExecuter.js");
/* harmony import */ var _ContextDeconstructorExecuter_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ContextDeconstructorExecuter.js */ "./node_modules/@default-js/defaultjs-expression-language/src/executer/ContextDeconstructorExecuter.js");
//import "./EsprimaExecuter.js";




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


_utils_Utils__WEBPACK_IMPORTED_MODULE_0__["default"].global.defaultjs = _utils_Utils__WEBPACK_IMPORTED_MODULE_0__["default"].global.defaultjs || {};
_utils_Utils__WEBPACK_IMPORTED_MODULE_0__["default"].global.defaultjs.extdom = _utils_Utils__WEBPACK_IMPORTED_MODULE_0__["default"].global.defaultjs.extdom || {
	VERSION : "1.7.19",
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
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_ExtendPrototype__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/ExtendPrototype */ "./node_modules/@default-js/defaultjs-extdom/src/utils/ExtendPrototype.js");
/* harmony import */ var _extentions_QuerySupport__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./extentions/QuerySupport */ "./node_modules/@default-js/defaultjs-extdom/src/dom/extentions/QuerySupport.js");
/* harmony import */ var _extentions_ReadyEventSupport__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./extentions/ReadyEventSupport */ "./node_modules/@default-js/defaultjs-extdom/src/dom/extentions/ReadyEventSupport.js");




(0,_utils_ExtendPrototype__WEBPACK_IMPORTED_MODULE_0__["default"])(Document, _extentions_QuerySupport__WEBPACK_IMPORTED_MODULE_1__["default"], _extentions_ReadyEventSupport__WEBPACK_IMPORTED_MODULE_2__["default"]);

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




(0,_utils_ExtendPrototype__WEBPACK_IMPORTED_MODULE_0__["default"])(DocumentFragment, _extentions_QuerySupport__WEBPACK_IMPORTED_MODULE_1__["default"], _extentions_ManipulationSupport__WEBPACK_IMPORTED_MODULE_2__["default"]);






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





(0,_utils_ExtendPrototype__WEBPACK_IMPORTED_MODULE_0__["default"])(Element,_extentions_QuerySupport__WEBPACK_IMPORTED_MODULE_1__["default"], _extentions_AttributeSupport__WEBPACK_IMPORTED_MODULE_2__["default"], _extentions_ManipulationSupport__WEBPACK_IMPORTED_MODULE_3__["default"]);

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



(0,_utils_ExtendPrototype__WEBPACK_IMPORTED_MODULE_0__["default"])(EventTarget, _extentions_EventSupport__WEBPACK_IMPORTED_MODULE_1__["default"]);

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





(0,_utils_ExtendPrototype__WEBPACK_IMPORTED_MODULE_0__["default"])(HTMLElement, _extentions_HtmlClassSupport__WEBPACK_IMPORTED_MODULE_1__["default"], _extentions_ShowHideSupport__WEBPACK_IMPORTED_MODULE_2__["default"]);

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




(0,_utils_ExtendPrototype__WEBPACK_IMPORTED_MODULE_0__["default"])(HTMLInputElement,_extentions_ValueSupport__WEBPACK_IMPORTED_MODULE_1__["default"]);

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




(0,_utils_ExtendPrototype__WEBPACK_IMPORTED_MODULE_0__["default"])(HTMLSelectElement,_extentions_ValueSupport__WEBPACK_IMPORTED_MODULE_1__["default"]);

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




(0,_utils_ExtendPrototype__WEBPACK_IMPORTED_MODULE_0__["default"])(HTMLTextAreaElement,(0,_utils_Extender__WEBPACK_IMPORTED_MODULE_1__["default"])("ValueSupport", Prototype => {	
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




(0,_utils_ExtendPrototype__WEBPACK_IMPORTED_MODULE_0__["default"])(HTMLCollection, _extentions_ListSupport__WEBPACK_IMPORTED_MODULE_2__["default"]);

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


(0,_utils_DelegaterBuilder__WEBPACK_IMPORTED_MODULE_1__["default"])(function(aFunctionName, theArguments) {
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




(0,_utils_ExtendPrototype__WEBPACK_IMPORTED_MODULE_0__["default"])(Node,_extentions_DataSupport__WEBPACK_IMPORTED_MODULE_1__["default"],_extentions_ManipulationSupport__WEBPACK_IMPORTED_MODULE_2__["default"]);

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




(0,_utils_ExtendPrototype__WEBPACK_IMPORTED_MODULE_0__["default"])(NodeList, _extentions_ListSupport__WEBPACK_IMPORTED_MODULE_2__["default"]);

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


(0,_utils_DelegaterBuilder__WEBPACK_IMPORTED_MODULE_1__["default"])(function(aFunctionName, theArguments) {
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


const support = (0,_utils_Extender__WEBPACK_IMPORTED_MODULE_0__["default"])("AttributeSupport", Prototype => {
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

const support = (0,_utils_Extender__WEBPACK_IMPORTED_MODULE_0__["default"])("DataSupport", Prototype => {
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
const support = (0,_utils_Extender__WEBPACK_IMPORTED_MODULE_0__["default"])("EventSupport", (Prototype) => {
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


const support = (0,_utils_Extender__WEBPACK_IMPORTED_MODULE_0__["default"])("HtmlClassSupport", Prototype => {	
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


const support = (0,_utils_Extender__WEBPACK_IMPORTED_MODULE_0__["default"])("ListSupport", Prototype => {		
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



const support = (0,_utils_Extender__WEBPACK_IMPORTED_MODULE_0__["default"])("ManipulationSupport", Prototype => {	
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
const queryExecuter = function (aElement, aSelector) {
	let match = parentSelector.exec(aSelector);
	if (match) {
		let result = aElement;
		if (match.index > 0) {
			result = aElement.querySelectorAll(aSelector.substr(0, match.index));
			if (result.length == 0) return;
		}
		result = result.parent(match[2]);
		if (result) {
			let nextSelector = aSelector.substr(match.index + match[0].length).trim();
			if (nextSelector.length > 0) result = result.find(nextSelector);

			return result;
		}
	} else return aElement.querySelectorAll(aSelector);
};

const support = (0,_utils_Extender__WEBPACK_IMPORTED_MODULE_0__["default"])("QuerySupport", (Prototype) => {
	Prototype.find = function () {
		let nodes = [];
		let args = Array.from(arguments);
		let arg = args.shift();
		while (arg) {
			if (typeof arg === "string") {
				let result = queryExecuter(this, arg);
				if (result) nodes.push(result);
			}

			arg = args.shift();
		}

		let result = NodeList.from.apply(null, nodes);
		return result;
	};

	Prototype.is = function () {
		if (this instanceof Document || this instanceof DocumentFragment) return false;
		else if (arguments.length == 1) {
			if (typeof arguments[0] === "string") return this.matches(arguments[0]);
			else if (typeof arguments[0].length === "number") {
				let filter = arguments[0];
				for (let i = 0; i < filter.length; i++) if (this.matches(filter[i])) return true;
			}
		} else if (arguments.length > 1) return this.is(Array.from(arguments));

		return false;
	};

	Prototype.parent = function (selector, ignoreShadowRoot) {
		if (!this.parentNode) return null;
		ignoreShadowRoot = typeof selector === "boolean" ? selector : ignoreShadowRoot;
		selector = typeof selector === "string" ? selector : null;

		let parent = this.parentNode;
		if (parent instanceof ShadowRoot && ignoreShadowRoot) parent = parent.host;

		if (selector) {
			try {
				while (parent && !parent.is(selector)) parent = parent.parent(selector, ignoreShadowRoot);
			} catch (e) {
				console.error("this:", this, "parent:", parent, "error:", e);
			}
			return parent;
		}
		return parent;
	};

	Prototype.parents = function () {
		let result = new Array();
		let parent = Prototype.parent.apply(this, arguments);
		while (parent) {
			result.push(parent);
			parent = Prototype.parent.apply(parent, arguments);
		}

		return NodeList.from(result);
	};

	Prototype.selector = function () {
		if (this instanceof Document || this instanceof DocumentFragment) return undefined;
		else if (this.id) return "#" + this.id;
		else {
			let selector = this.tagName.toLowerCase();
			let parent = this.parent();
			if (parent) {
				let sameTagSiblings = parent.find(":scope>" + selector);
				if (sameTagSiblings instanceof NodeList) {
					let index = sameTagSiblings.indexOf(this);
					if (index > 0) selector += ":nth-child(" + (index + 1) + ")";
				}
				let parentSelector = parent.selector();
				return parentSelector ? parentSelector + ">" + selector : selector;
			}
			return selector;
		}
	};

	Prototype.closest = function (aQuery) {
		return this.closests(aQuery).first();
	};

	Prototype.closests = function (aQuery) {
		const result = this.find(aQuery);
		if (result.length != 0) return result;
		
		const parent = this.parentElement;
		if (parent) return parent.closests(aQuery);

		return NodeList.from([]);
	};

	Prototype.nested = function (aQuery) {
		if (this.is(aQuery)) return NodeList.from(this);

		let nested = this.find(aQuery);
		if (nested && nested.length > 0) return nested;
		else return NodeList.from(this.parent(aQuery));
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


const support = (0,_utils_Extender__WEBPACK_IMPORTED_MODULE_0__["default"])("ReadyEventSupport", Prototype => {
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


const support = (0,_utils_Extender__WEBPACK_IMPORTED_MODULE_0__["default"])("ShowHideSupport", Prototype => {
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


const support = (0,_utils_Extender__WEBPACK_IMPORTED_MODULE_0__["default"])("ValueSupport", Prototype => {	
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
/* harmony import */ var _default_js_defaultjs_common_utils_src_PromiseUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @default-js/defaultjs-common-utils/src/PromiseUtils.js */ "./node_modules/@default-js/defaultjs-common-utils/src/PromiseUtils.js");
/* harmony import */ var _Directive_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Directive.js */ "./src/Directive.js");
/* harmony import */ var _Template_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Template.js */ "./src/Template.js");
/* harmony import */ var _default_js_defaultjs_expression_language_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @default-js/defaultjs-expression-language/index.js */ "./node_modules/@default-js/defaultjs-expression-language/index.js");
/* harmony import */ var _Renderer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Renderer.js */ "./src/Renderer.js");






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
	if (template instanceof _Template_js__WEBPACK_IMPORTED_MODULE_2__["default"]) return template.importContent();
	else if (typeof template === String) return create(template);
	return template;
};

let id = 0;
class Context {
	#id;
	#depth;
	#parent;
	#renderer;
	#root;
	#template;
	#mode;
	#subcontexts;
	#wait;
	#ignoreDirectives;
	#callbacks;

	
	/**
	 * Creates an instance of Context.
	 *
	 * @constructor
	 * @param {object} options
	 * @param {NodeList} [options.content=null] 
	 * @param {ExpressionResolver} options.resolver 
	 * @param {Renderer} options.renderer 
	 * @param {Template|string} options.template 
	 * @param {HTMLElement} options.container 
	 * @param {HTMLElement} options.root 
	 * @param {string} [options.mode="replace"] 
	 * @param {HTMLElement} [options.target=null] 
	 * @param {Context} [options.parent=null] 
	 * @param {Promise<>} [options.wait=null] 
	 * @param {Array<Function>} [options.callbacks=null] 
	 * @param {Set<Directive|string>} options.ignoreDirective 
	 */
	constructor({ content = null, resolver, renderer, template, container, root, mode = "replace", target = null, parent = null, wait = null, callbacks = null, ignoreDirective }) {
		if (!resolver) throw new Error('Parameter "resolver" is required!');
		if (!renderer) throw new Error('Parameter "renderer" is required!');
		if (!template) throw new Error('Parameter "template" is required!');
		if (!container) throw new Error('Parameter "container" is required!');
		if (!root) throw new Error('Parameter "root" is required!');

		this.#id = parent ? `${parent.id}->${id++}` : `root::${id++}`;
		this.#depth = parent ? parent.depth + 1 : 0;
		this.#parent = parent;
		this.#renderer = renderer;
		this.#root = root;
		this.#template = toTemplate(template);
		this.#mode = mode;
		this.#subcontexts = new Set();
		this.#wait = wait ? wait : (0,_default_js_defaultjs_common_utils_src_PromiseUtils_js__WEBPACK_IMPORTED_MODULE_0__.lazyPromise)();
		this.#ignoreDirectives = ignoreDirective instanceof Set ? ignoreDirective : new Set();
		this.#callbacks = callbacks instanceof Array ? callbacks : [];

		this.content = content;
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

	get id() {
		return this.#id;
	}
	get depth() {
		return this.#depth;
	}
	get parent() {
		return this.#parent;
	}
	get renderer() {
		return this.#renderer;
	}
	get root() {
		return this.#root;
	}
	get template() {
		return this.#template;
	}
	set template(template){
		this.#template = toTemplate(template);
	}

	get mode() {
		return this.#mode;
	}
	get subcontexts() {
		return this.#subcontexts;
	}

	get closed() {
		return this.#wait.resolved;
	}

	ignoreDirective(directive) {
		const ignoreDirectives = this.#ignoreDirectives;
		directive instanceof _Directive_js__WEBPACK_IMPORTED_MODULE_1__["default"] ? ignoreDirectives.add(directive.name) : ignoreDirectives.add(directive);
	}

	acceptDirective(directive) {
		const ignoreDirectives = this.#ignoreDirectives;
		if (directive instanceof _Directive_js__WEBPACK_IMPORTED_MODULE_1__["default"]) return !(ignoreDirectives.has(directive.name) || ignoreDirectives.has(directive));

		return !ignoreDirectives.has(directive);
	}

	finished(callback) {
		if (this.parent) this.parent.finished(callback);
		else this.ready(callback);
	}

	async ready(callback) {
		const callbacks = this.#callbacks;
		if (callback) {
			if (callback instanceof Array) callback.forEach((callback) => this.wait.then(callback));
			else if (callback instanceof Promise) callbacks.push(async () => await callback);
			else if (typeof callback === "function") callbacks.push(callback);
		} else {
			const wait = this.#wait;
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

	clone({ content = this.content, template = this.template, container = this.container, root = this.root, mode = this.mode, target = this.target, ignoreDirective = this.#ignoreDirectives } = {}) {
		return new Context({ content, 
			resolver: this.resolver, 
			renderer: this.renderer, 
			template, 
			container, 
			root, 
			mode, 
			target, 
			ignoreDirective,
			wait: this.#wait,
			callbacks: this.#callbacks
		 });
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
/* harmony export */   PHASE: () => (/* binding */ PHASE),
/* harmony export */   "default": () => (/* binding */ Directive)
/* harmony export */ });
/* harmony import */ var _Context_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Context.js */ "./src/Context.js");



const DEFINED_DIRECTIVES = [];


/**
 * @param {object} options
 * @param {Directive} options.directive 
 */
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

/**
 * @readonly
 * @enum {number}	
 */
const PHASE = {
	init: 0,
	data: 1,
	template: 2,
	content: 3,
	finish: 4
};

class Directive {

	/** @enum {PHASE} */
	static get PHASE() { return PHASE };
	/** @enum {number} */
	static get MIN_RANK() { return 0 };
	/** @enum {number} */
	static get MAX_RANK() { return 100000 };

	constructor() { };

	/**
	 * @abstract 
	 * @enum {string} 
	 */
	get name() { }
	/** 
	 * @abstract
	 * @enum {number} 
	 */
	get rank() { }
	/**
	 * @abstract 
	 * @enum {PHASE} 
	 */
	get phase() {return PHASE.finish}

	/**
	 * @abstract
	 * @param {Context} context 
	 * @returns 
	 */
	async execute(context) {
		return context;
	}

	/**
	 * @static
	 * @param {object} options
	 * @param {Directive} options.directive 
	 */
	static define(option) {
		defineDirective(option);
	}

	
	/**
	 * @static
	 * @readonly
	 * @type {Array<Directive>}
	 */
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
/* harmony export */   SCOPES: () => (/* binding */ SCOPES),
/* harmony export */   "default": () => (/* binding */ Renderer)
/* harmony export */ });
/* harmony import */ var _default_js_defaultjs_extdom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @default-js/defaultjs-extdom */ "./node_modules/@default-js/defaultjs-extdom/index.js");
/* harmony import */ var _default_js_defaultjs_expression_language_src_ExpressionResolver_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @default-js/defaultjs-expression-language/src/ExpressionResolver.js */ "./node_modules/@default-js/defaultjs-expression-language/src/ExpressionResolver.js");
/* harmony import */ var _Template_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Template.js */ "./src/Template.js");
/* harmony import */ var _Context_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Context.js */ "./src/Context.js");
/* harmony import */ var _Directive_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Directive.js */ "./src/Directive.js");
/* harmony import */ var _Element_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Element.js */ "./src/Element.js");
/* harmony import */ var _directives_index_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./directives/index.js */ "./src/directives/index.js");
/* harmony import */ var _elements_index_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./elements/index.js */ "./src/elements/index.js");









const SCOPES = {
	application: "application",
	data: "data",
	render: "render",
	container: "container",
	node: "node",
	directive: "directive",
};

const APPLICATION_SCOPE_RESOLVER = new _default_js_defaultjs_expression_language_src_ExpressionResolver_js__WEBPACK_IMPORTED_MODULE_1__["default"]({ name: SCOPES.application });

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
		template = await _Template_js__WEBPACK_IMPORTED_MODULE_2__["default"].load(template);
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
		const nodeResolver = new _default_js_defaultjs_expression_language_src_ExpressionResolver_js__WEBPACK_IMPORTED_MODULE_1__["default"]({ name: SCOPES.node, context: null, parent: resolver });
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
		if (template instanceof _Element_js__WEBPACK_IMPORTED_MODULE_5__["default"]) await template.execute(context);
		else await executeDirectives(context);

		const { ignore, content } = context;

		if (!ignore && content) {
			let { resolver } = context;
			const subTemplate = context.template.childNodes;
			if (subTemplate && subTemplate.length > 0) {
				const containerResolver = new _default_js_defaultjs_expression_language_src_ExpressionResolver_js__WEBPACK_IMPORTED_MODULE_1__["default"]({ name: SCOPES.container, context: null, parent: resolver });
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
	const directives = _Directive_js__WEBPACK_IMPORTED_MODULE_4__["default"].directives;
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
		if (template && !(template instanceof _Template_js__WEBPACK_IMPORTED_MODULE_2__["default"])) throw new Error("template must be an instance of Template!");

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
	async render(context) {
		const calledWithContext = context instanceof _Context_js__WEBPACK_IMPORTED_MODULE_3__["default"];
		if (!calledWithContext) {
			let { template = null, data = null, container, root, mode, target } = context;
			template = await loadTemplateContent(template, this);
			const resolver = new _default_js_defaultjs_expression_language_src_ExpressionResolver_js__WEBPACK_IMPORTED_MODULE_1__["default"]({ name: SCOPES.render, context: data, parent: this.resolver });
			context = new _Context_js__WEBPACK_IMPORTED_MODULE_3__["default"]({ resolver, renderer: this, template: template, container, root: root ? root : container, mode: mode ? mode : "replace", target });
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

		template = template ? await _Template_js__WEBPACK_IMPORTED_MODULE_2__["default"].load(template) : null;
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
/* harmony export */   NODE_ATTRIBUTE_TEMPLATE: () => (/* binding */ NODE_ATTRIBUTE_TEMPLATE),
/* harmony export */   "default": () => (/* binding */ Template),
/* harmony export */   toAsyncTemplateLoader: () => (/* binding */ toAsyncTemplateLoader)
/* harmony export */ });
/* harmony import */ var _default_js_defaultjs_common_utils_src_javascript_String_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @default-js/defaultjs-common-utils/src/javascript/String.js */ "./node_modules/@default-js/defaultjs-common-utils/src/javascript/String.js");
/* harmony import */ var _default_js_defaultjs_common_utils_src_javascript_String_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_default_js_defaultjs_common_utils_src_javascript_String_js__WEBPACK_IMPORTED_MODULE_0__);


const NODE_ATTRIBUTE_TEMPLATE = "template";
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

const getTemplate = (node) => {
	let template = node.find(":scope > template").first();
	if (!!template) return template;
	const value = node.attr(NODE_ATTRIBUTE_TEMPLATE);
	if (!value) return null;
	try {
		template = find(value).first();
		if (!!template) return template;
	} catch (e) {}
	return new URL(value, location);
};

class Template {

	/**
	 * Create an instance of template.
	 * 
	 * @param template type of HTMLTemplateElement. Not null.
	 * @param key identifier at cache, if template to be cached.
	 */
	constructor(/** @type {HTMLTemplateElement} */ template,/** @type {string} */ key) {
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

	static async loadNodeTemplate(node, defaultTemplate, cache, alias) {
		try {
			const template = getTemplate(node);
			if (template) return Template.load(template, cache, alias);
		} catch (e) {
			console.warn("Can't load template from node!", node, e);
		}

		return defaultTemplate;
	}
};

const toAsyncTemplateLoader = (/*URL*/url) => {
    let template = null;

    return async () => {
        if(!template){
			if(typeof url === "function")
				url = await url();
			else if(url instanceof Promise)
				url = await url;
            template = Template.load(url);
		}

        return template;
    };
};


/***/ }),

/***/ "./src/Utils.js":
/*!**********************!*\
  !*** ./src/Utils.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isUndefinedOrNull: () => (/* binding */ isUndefinedOrNull),
/* harmony export */   isUndefinedOrNullOrBlank: () => (/* binding */ isUndefinedOrNullOrBlank)
/* harmony export */ });
const isUndefinedOrNull = (value) => {
    return typeof value === 'undefined' || value === null
}

const isUndefinedOrNullOrBlank = (value) => {
  return isUndefinedOrNull(value) || typeof value === 'string' && value.trim().length == 0;
};

/***/ }),

/***/ "./src/directives/AttachElement.js":
/*!*****************************************!*\
  !*** ./src/directives/AttachElement.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Directive_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Directive.js */ "./src/Directive.js");


const ATTRIBUTE__ATTACHELEMENT = "jstl-attach-element";
const ATTRIBUTE__ATTACHELEMENT_MODE = "jstl-attach-element-mode";

const MODE_APPEND = "append";
const MODE_PREPEND = "prepend";
const MODE_REPLACE = "replace";

const PRECHECK = /^#.+$/;

const getElement = async (template, resolver) => {
	let element = (template.attr(ATTRIBUTE__ATTACHELEMENT) || "").trim();
	if (!PRECHECK.test(element)) {
		try {
			element = await resolver.resolve(element, element);
		} catch (e) {}
		if (element instanceof HTMLElement) return element;
	}

	try {
		element = find(element);
	} catch (e) {}

	if (element && element.length > 0) return element.length == 0 ? element.first() : element;

	return null;
};

class AttachElement extends _Directive_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
	constructor() {
		super();
	}

	get name() {
		return "attach-element";
	}
	get rank() {
		return _Directive_js__WEBPACK_IMPORTED_MODULE_0__["default"].MIN_RANK + 1;
	}
	get phase() {
		return _Directive_js__WEBPACK_IMPORTED_MODULE_0__["default"].PHASE.content;
	}

	async execute(context) {
		const { resolver, template, content } = context;
		if (!(template instanceof HTMLElement) || !template.attr(ATTRIBUTE__ATTACHELEMENT)) return context;
		try {
			let element = await getElement(template, resolver);
			if (element) {
				const mode = template.attr(ATTRIBUTE__ATTACHELEMENT_MODE) || MODE_REPLACE;
				if (mode == MODE_REPLACE) {
					content.empty().append(element);
					context.stop = true;
					context.ignore = true;
				} else {
					context.ready(({ content }) => {
						if (content) {
							if (mode == MODE_APPEND) content.append(element);
							else if (mode == MODE_PREPEND) content.prepend(element);
						}
					});
				}
			}
		} catch (e) {
			console.log(e, { context });
		}

		return context;
	}
}
_Directive_js__WEBPACK_IMPORTED_MODULE_0__["default"].define({ directive: new AttachElement() });


/***/ }),

/***/ "./src/directives/Attributes.js":
/*!**************************************!*\
  !*** ./src/directives/Attributes.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _default_js_defaultjs_common_utils_src_Global_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @default-js/defaultjs-common-utils/src/Global.js */ "./node_modules/@default-js/defaultjs-common-utils/src/Global.js");
/* harmony import */ var _Directive_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Directive.js */ "./src/Directive.js");



const ATTRIBUTE_NAME = /(jstl)?(\?)?(@)?([^\?@]+)/i;

const DEFAULT_EVENT_FUNCTION = "default";
const OPTION_PREVENT_DEFAULT = "prevent-default"
const IGNORED_ATTRIBUTES = ["is"];

const FUNCTION_SPLITTER = "::";
const FUNCTION_SPLITTER_OLD = ":";

const EVENTFUNCTIONS = {
	delegate: async (event, handle, setting, type, resolver, content, options, context) => {
		const eventhandle = await resolver.resolveText(handle, handle);
		content.on(event, delegater(eventhandle, setting));
	},
	toggleclass: async (event, handle, setting, type, resolver, content, options, context) => {
		const clazz = options.shift();
		const preventDefault = options.includes(OPTION_PREVENT_DEFAULT);
		const selector = handle ? await resolver.resolveText(handle, handle) : null;		
		content.on(event, (event) => {
			if(preventDefault)
				event.preventDefault();
			if(selector)
				content.closests(selector).toggleClass(clazz);
			else
				content.toggleClass(clazz);
		});
	},
	toggleattribute: async (event, handle, setting, type, resolver, content, options, context) => {
		const attribute = options.shift();
		const preventDefault = options.includes(OPTION_PREVENT_DEFAULT);
		const selector = handle ? await resolver.resolveText(handle, handle) : null;		
		content.on(event, (event) => {
			if(preventDefault)
				event.preventDefault();
			if(selector)
				content.closests(selector).forEach(element => {
					element.toggleAttribute(attribute)				
				});
			else 
				content.toggleAttribute(attribute);
		});
	},
	[DEFAULT_EVENT_FUNCTION]: async (event, handle, setting, type, resolver, content, options, context) => {
		const eventhandle = handle ? await resolver.resolve(handle, handle) : null;

		if (!eventhandle) console.error(new Error("Can't resolve \"" + handle + '" to event handle!'));
		else if (typeof eventhandle === "function") content.on(event, eventhandle);
		else if (typeof eventhandle === "string") content.on(event, delegater(eventhandle, setting));
		else if (typeof eventhandle === "object") {
			const { capture = false, passive = false, once = false } = eventhandle;
			content.on(event, eventhandle.eventHandle, { capture, passive, once });
		}
	},
};

const bindAttribute = async ({ condition, name, value, context }) => {
	const { resolver, content, template } = context;

	let attribute = !condition ? value : template.attr(name);
	condition = condition ? value : template.attr("?" + name);
	const hasValue = isValue(attribute);

	if (condition && hasValue) {
		condition = await resolver.resolve(condition, false);
		if (condition === true) content.attr(name, await resolver.resolveText(attribute, attribute));
	} else if (condition) {
		condition = await resolver.resolve(condition, false);
		if (condition === true) content.attr(name, true);
	} else if (hasValue) {
		content.attr(name, await resolver.resolveText(attribute, attribute));
	}
};

const isValue = (value) => {
	return value != null && typeof value !== "undefined";
};

const bindEvent = async ({ condition, name, value, context }) => {
	const { resolver, template, content } = context;

	condition = condition ? value : template.attr("?@" + name);
	let handle = !condition ? value : template.attr("@" + name);
	let split = name.split(FUNCTION_SPLITTER);
	if(split.length == 1)
		split = name.split(FUNCTION_SPLITTER_OLD);

	const event = split.shift();
	const type = (split.shift() || DEFAULT_EVENT_FUNCTION).toLowerCase();
	
	if(typeof handle === "undefined" || handle == null)
		console.error(`Definition of "${event}" - event handle at`, content, "is incorrect!");

	handle = handle.trim();
	const setting = {
		bubble: true,
	};

	if (condition ) {
		if ((await resolver.resolve(condition, false)) == true) await binding(event, handle, setting, type, resolver, content, split, context);
	} else await binding(event, handle, setting, type, resolver, content, split, context);
};

const binding = async (event, handle, setting, type, resolver, content, options, context) => {
	const binder = EVENTFUNCTIONS[type];
	if (binder) return binder(event, handle, setting, type, resolver, content, options, context);
};

const delegater = function (delegate, setting) {
	return function (event) {
		event.preventDefault();
		event.stopPropagation();
		if (event.currentTarget) event.currentTarget.trigger(delegate, event);
		else event.target.trigger(delegate, event);
	};
};

class Attribute extends _Directive_js__WEBPACK_IMPORTED_MODULE_1__["default"] {
	constructor() {
		super();
	}

	get name() {
		return "attribute";
	}
	get rank() {
		return _Directive_js__WEBPACK_IMPORTED_MODULE_1__["default"].MIN_RANK;
	}
	get phase() {
		return _Directive_js__WEBPACK_IMPORTED_MODULE_1__["default"].PHASE.content;
	}

	async execute(context) {
		const { template } = context;
		if (!(template instanceof HTMLElement)) return context;

		const processed = new Set(IGNORED_ATTRIBUTES);
		for (const attribute of template.attributes) {
			const [, jstl, condition, event, name] = ATTRIBUTE_NAME.exec(attribute.name);
			if (!jstl && !processed.has(name)) {
				const value = attribute.value;

				if (event) await bindEvent({ condition, event, name, value, context });
				else await bindAttribute({ condition, name, value, context });
			}
			processed.add(name);
		}

		return context;
	}
}

_Directive_js__WEBPACK_IMPORTED_MODULE_1__["default"].define({ directive: new Attribute() });


/***/ }),

/***/ "./src/directives/Choose.js":
/*!**********************************!*\
  !*** ./src/directives/Choose.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
		
		//clone template, before manipulate template
		context.template = context.template.cloneNode(true);
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
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
	else{
		const resolver = new _default_js_defaultjs_expression_language_src_ExpressionResolver_js__WEBPACK_IMPORTED_MODULE_1__["default"]({ context: data, name: "jstl-data", parent: context.resolver });
		//context = context.subContext({resolver});
		context.resolver = resolver;
	}
	
		
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
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Directive_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Directive.js */ "./src/Directive.js");
/* harmony import */ var _default_js_defaultjs_expression_language_src_ExpressionResolver_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @default-js/defaultjs-expression-language/src/ExpressionResolver.js */ "./node_modules/@default-js/defaultjs-expression-language/src/ExpressionResolver.js");
/* harmony import */ var _Utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Utils.js */ "./src/Utils.js");




const ATTRIBUTE = {
	DATA: "jstl-foreach",
	VAR: "jstl-foreach-var",
	STATUS: "jstl-foreach-status",
	COUNT: "jstl-foreach-count",
	START: "jstl-foreach-start",
	STEP: "jstl-foreach-step",
	CONDITION: "jstl-foreach-condition"
};


/**
 * @param {object} option 
 * @param {number} option.start 
 * @param {number} option.step 
 * @param {number} option.count 
 * @param {string} option.varname 
 * @param {string} option.status 
 * @param {ExpressionResolver} option.resolver 
 * @returns {Promise<void>}
 */
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



/**
 * @param {object} option 
 * @param {Array<any>|any} option.data 
 * @param {number} option.start 
 * @param {number} option.step 
 * @param {number} option.count 
 * @param {string} option.varname 
 * @param {string} option.status 
 * @param {ExpressionResolver} option.resolver 
 * @returns {Promise<void>}
 */
const doForeach = async (option) => {
	let { data, start, step, count, varname, status, resolver } = option;

	data = await resolver.resolve(data, []);
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
	const itemContext = context.subContext({ resolver, container, template, mode: "append" });
	await renderer.render(itemContext);
	await itemContext.ready();
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
			const data = (template.attr(ATTRIBUTE.DATA) || "").trim();
			const count = (template.attr(ATTRIBUTE.COUNT) || "").trim();
			const option = {
				data,
				count,
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
			if ((0,_Utils_js__WEBPACK_IMPORTED_MODULE_2__.isUndefinedOrNullOrBlank)(data) && !(0,_Utils_js__WEBPACK_IMPORTED_MODULE_2__.isUndefinedOrNullOrBlank)(count))
				await doCount(option);
			else if(!(0,_Utils_js__WEBPACK_IMPORTED_MODULE_2__.isUndefinedOrNullOrBlank)(data))
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
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Directive_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Directive.js */ "./src/Directive.js");
/* harmony import */ var _Template_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Template.js */ "./src/Template.js");



class Include extends _Directive_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
	constructor() {
		super();
	}

	get name() {
		return "include";
	}
	get rank() {
		return _Directive_js__WEBPACK_IMPORTED_MODULE_0__["default"].MIN_RANK;
	}
	get phase() {
		return _Directive_js__WEBPACK_IMPORTED_MODULE_0__["default"].PHASE.template;
	}

	async execute(context) {
		if (!(context.template instanceof HTMLElement) || !context.template.attr("jstl-include")) return context;
		try {
			const { template, resolver, renderer } = context;
			let include = template.attr("jstl-include");
			include = await resolver.resolveText(include);
			include = new URL(include, location);
			include = await _Template_js__WEBPACK_IMPORTED_MODULE_1__["default"].load(include);

			const mode = template.attr("jstl-include-mode") || "replace";

			const subContext = context.subContext({ template: include, container: context.content, mode});
			await renderer.render(subContext);
			await subContext.ready();
			context.ignore = true;
			context.stop = true;

			return context;
		} catch (e) {
			console.error(e, context.template);
			return context;
		}
	}
}

_Directive_js__WEBPACK_IMPORTED_MODULE_0__["default"].define({ directive: new Include() });


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



const MARKER_IGNORE = "jstl-ignore";
const MARKER_IGNORE_CHILDS = "jstl-ignore-childs";
const MARKER_ASYNC = "jstl-async";
const MARKER_TAGNAME = "jstl-tagname";
const MARKER_IS = "is";

class Initial extends _Directive_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
	constructor() {
		super();
	}

	get name() {
		return "initial";
	}
	get rank() {
		return _Directive_js__WEBPACK_IMPORTED_MODULE_0__["default"].MIN_RANK;
	}
	get phase() {
		return _Directive_js__WEBPACK_IMPORTED_MODULE_0__["default"].PHASE.init;
	}

	async execute(context) {
		const { template, renderer, resolver } = context;
		if (!(template instanceof Element)) {
			context.content = document.importNode(template, true);
		} else {
			if (template.hasAttribute(MARKER_IGNORE)) {
				context.content = document.importNode(template, true);
				context.content.removeAttribute(MARKER_IGNORE);
				context.stop = true;
				context.ignore = true;
			} else if (false) {} else if (template instanceof HTMLTemplateElement) {
				context.content = document.createElement(template.tagName);
				const subContext = context.subContext({ template: template.content.childNodes, container: context.content.content });
				await renderer.render(subContext);
				context.stop = false;
				context.ignore = true;
			} else if (template.hasAttribute(MARKER_TAGNAME)) {
				let tagname = template.attr(MARKER_TAGNAME).trim();
				if (tagname.length > 0) context.content = document.createElement(await resolver.resolveText(template.attr(MARKER_TAGNAME)));
				else {
					context.content = document.importNode(template, true);
					context.stop = true;
					context.ignore = true;
				}
			} else if (template.tagName) {
				let is = template.attr(MARKER_IS);
				if (is) {
					is = await resolver.resolveText(is);
					const element = document.createElement(template.tagName, { is });
					element.attr(MARKER_IS, is);
					context.content = element;
				} else context.content = document.createElement(template.tagName);
			} else {
				context.content = document.importNode(template, true);
				context.stop = true;
				context.ignore = true;
			}

			if (!context.stop && template.hasAttribute(MARKER_IGNORE_CHILDS)) {
				context.ignore = true;
				const clone = document.importNode(template, true);
				if (template instanceof HTMLTemplateElement) context.content.content.append(clone.content);
				else context.content.append(clone.childNodes);
			}
		}

		return context;
	}
}

_Directive_js__WEBPACK_IMPORTED_MODULE_0__["default"].define({ directive: new Initial() });


/***/ }),

/***/ "./src/directives/OnFinished.js":
/*!**************************************!*\
  !*** ./src/directives/OnFinished.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Directive_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Directive.js */ "./src/Directive.js");
/* harmony import */ var _default_js_defaultjs_expression_language_src_ExpressionResolver_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @default-js/defaultjs-expression-language/src/ExpressionResolver.js */ "./node_modules/@default-js/defaultjs-expression-language/src/ExpressionResolver.js");



const NAME = "on-finished";
const ATTRIBUTE_ON_FINISHED = `jstl-${NAME}`;
const ATTRIBUTE_ON_FINISHED_ASYNC = `${ATTRIBUTE_ON_FINISHED}-async`;

class OnFinished extends _Directive_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
	constructor() {
		super();
	}

	get name() { return NAME }
	get rank() { return _Directive_js__WEBPACK_IMPORTED_MODULE_0__["default"].MAX_RANK }
	get phase() { return _Directive_js__WEBPACK_IMPORTED_MODULE_0__["default"].PHASE.finish }



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
		const resolver = new _default_js_defaultjs_expression_language_src_ExpressionResolver_js__WEBPACK_IMPORTED_MODULE_1__["default"]({ context: data, name: "jstl-data", parent: context.resolver });


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

_Directive_js__WEBPACK_IMPORTED_MODULE_0__["default"].define({ directive: new OnFinished() });

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
	resolver = new _default_js_defaultjs_expression_language_src_ExpressionResolver_js__WEBPACK_IMPORTED_MODULE_1__["default"]({ context: data, name: DIRECTIVENAME, parent: resolver });

	condition = condition ? await resolver.resolve(condition, false) : false;
	if (condition) return false;

	const itemContext =  context.subContext({ resolver, template, mode: "append", ignoreDirective: IGNOREDIRECTIVE })
	await renderer.render(itemContext);
	await itemContext.ready();

	return true;
};

class Repeat extends _Directive_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
	constructor() {
		super();
	}

	get name() {
		return DIRECTIVENAME;
	}
	get rank() {
		return _Directive_js__WEBPACK_IMPORTED_MODULE_0__["default"].MIN_RANK + 3;
	}
	get phase() {
		return _Directive_js__WEBPACK_IMPORTED_MODULE_0__["default"].PHASE.template;
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

_Directive_js__WEBPACK_IMPORTED_MODULE_0__["default"].define({ directive: new Repeat() });


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
/* harmony import */ var _AttachElement_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./AttachElement.js */ "./src/directives/AttachElement.js");
/* harmony import */ var _OnFinished_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./OnFinished.js */ "./src/directives/OnFinished.js");












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
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Replace_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Replace.js */ "./src/elements/Replace.js");


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!******************!*\
  !*** ./index.js ***!
  \******************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Renderer: () => (/* reexport safe */ _src_Renderer_js__WEBPACK_IMPORTED_MODULE_1__["default"]),
/* harmony export */   Template: () => (/* reexport safe */ _src_Template_js__WEBPACK_IMPORTED_MODULE_0__["default"]),
/* harmony export */   toAsyncTemplateLoader: () => (/* reexport safe */ _src_Template_js__WEBPACK_IMPORTED_MODULE_0__.toAsyncTemplateLoader)
/* harmony export */ });
/* harmony import */ var _src_Template_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/Template.js */ "./src/Template.js");
/* harmony import */ var _src_Renderer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/Renderer.js */ "./src/Renderer.js");




})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kdWxlLWRlZmF1bHRqcy10ZW1wbGF0ZS1sYW5ndWFnZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0EsV0FBVyxxQkFBTSx5QkFBeUIscUJBQU07QUFDaEQ7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0EsaUVBQWUsTUFBTTs7Ozs7Ozs7Ozs7Ozs7O0FDUE47QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4RGlEO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLFlBQVk7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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bHRqcy10ZW1wbGF0ZS1sYW5ndWFnZS8uL25vZGVfbW9kdWxlcy9AZGVmYXVsdC1qcy9kZWZhdWx0anMtY29tbW9uLXV0aWxzL3NyYy9HbG9iYWwuanMiLCJ3ZWJwYWNrOi8vQGRlZmF1bHQtanMvZGVmYXVsdGpzLXRlbXBsYXRlLWxhbmd1YWdlLy4vbm9kZV9tb2R1bGVzL0BkZWZhdWx0LWpzL2RlZmF1bHRqcy1jb21tb24tdXRpbHMvc3JjL09iamVjdFByb3BlcnR5LmpzIiwid2VicGFjazovL0BkZWZhdWx0LWpzL2RlZmF1bHRqcy10ZW1wbGF0ZS1sYW5ndWFnZS8uL25vZGVfbW9kdWxlcy9AZGVmYXVsdC1qcy9kZWZhdWx0anMtY29tbW9uLXV0aWxzL3NyYy9PYmplY3RVdGlscy5qcyIsIndlYnBhY2s6Ly9AZGVmYXVsdC1qcy9kZWZhdWx0anMtdGVtcGxhdGUtbGFuZ3VhZ2UvLi9ub2RlX21vZHVsZXMvQGRlZmF1bHQtanMvZGVmYXVsdGpzLWNvbW1vbi11dGlscy9zcmMvUHJvbWlzZVV0aWxzLmpzIiwid2VicGFjazovL0BkZWZhdWx0LWpzL2RlZmF1bHRqcy10ZW1wbGF0ZS1sYW5ndWFnZS8uL25vZGVfbW9kdWxlcy9AZGVmYXVsdC1qcy9kZWZhdWx0anMtY29tbW9uLXV0aWxzL3NyYy9qYXZhc2NyaXB0L1N0cmluZy5qcyIsIndlYnBhY2s6Ly9AZGVmYXVsdC1qcy9kZWZhdWx0anMtdGVtcGxhdGUtbGFuZ3VhZ2UvLi9ub2RlX21vZHVsZXMvQGRlZmF1bHQtanMvZGVmYXVsdGpzLWV4cHJlc3Npb24tbGFuZ3VhZ2UvaW5kZXguanMiLCJ3ZWJwYWNrOi8vQGRlZmF1bHQtanMvZGVmYXVsdGpzLXRlbXBsYXRlLWxhbmd1YWdlLy4vbm9kZV9tb2R1bGVzL0BkZWZhdWx0LWpzL2RlZmF1bHRqcy1leHByZXNzaW9uLWxhbmd1YWdlL3NyYy9EZWZhdWx0VmFsdWUuanMiLCJ3ZWJwYWNrOi8vQGRlZmF1bHQtanMvZGVmYXVsdGpzLXRlbXBsYXRlLWxhbmd1YWdlLy4vbm9kZV9tb2R1bGVzL0BkZWZhdWx0LWpzL2RlZmF1bHRqcy1leHByZXNzaW9uLWxhbmd1YWdlL3NyYy9FeGVjdXRlclJlZ2lzdHJ5LmpzIiwid2VicGFjazovL0BkZWZhdWx0LWpzL2RlZmF1bHRqcy10ZW1wbGF0ZS1sYW5ndWFnZS8uL25vZGVfbW9kdWxlcy9AZGVmYXVsdC1qcy9kZWZhdWx0anMtZXhwcmVzc2lvbi1sYW5ndWFnZS9zcmMvRXhwcmVzc2lvblJlc29sdmVyLmpzIiwid2VicGFjazovL0BkZWZhdWx0LWpzL2RlZmF1bHRqcy10ZW1wbGF0ZS1sYW5ndWFnZS8uL25vZGVfbW9kdWxlcy9AZGVmYXVsdC1qcy9kZWZhdWx0anMtZXhwcmVzc2lvbi1sYW5ndWFnZS9zcmMvUmVzb2x2ZXJDb250ZXh0SGFuZGxlLmpzIiwid2VicGFjazovL0BkZWZhdWx0LWpzL2RlZmF1bHRqcy10ZW1wbGF0ZS1sYW5ndWFnZS8uL25vZGVfbW9kdWxlcy9AZGVmYXVsdC1qcy9kZWZhdWx0anMtZXhwcmVzc2lvbi1sYW5ndWFnZS9zcmMvVXRpbHMuanMiLCJ3ZWJwYWNrOi8vQGRlZmF1bHQtanMvZGVmYXVsdGpzLXRlbXBsYXRlLWxhbmd1YWdlLy4vbm9kZV9tb2R1bGVzL0BkZWZhdWx0LWpzL2RlZmF1bHRqcy1leHByZXNzaW9uLWxhbmd1YWdlL3NyYy9leGVjdXRlci9Db250ZXh0RGVjb25zdHJ1Y3RvckV4ZWN1dGVyLmpzIiwid2VicGFjazovL0BkZWZhdWx0LWpzL2RlZmF1bHRqcy10ZW1wbGF0ZS1sYW5ndWFnZS8uL25vZGVfbW9kdWxlcy9AZGVmYXVsdC1qcy9kZWZhdWx0anMtZXhwcmVzc2lvbi1sYW5ndWFnZS9zcmMvZXhlY3V0ZXIvQ29udGV4dE9iamVjdEV4ZWN1dGVyLmpzIiwid2VicGFjazovL0BkZWZhdWx0LWpzL2RlZmF1bHRqcy10ZW1wbGF0ZS1sYW5ndWFnZS8uL25vZGVfbW9kdWxlcy9AZGVmYXVsdC1qcy9kZWZhdWx0anMtZXhwcmVzc2lvbi1sYW5ndWFnZS9zcmMvZXhlY3V0ZXIvV2l0aFNjb3BlZEV4ZWN1dGVyLmpzIiwid2VicGFjazovL0BkZWZhdWx0LWpzL2RlZmF1bHRqcy10ZW1wbGF0ZS1sYW5ndWFnZS8uL25vZGVfbW9kdWxlcy9AZGVmYXVsdC1qcy9kZWZhdWx0anMtZXhwcmVzc2lvbi1sYW5ndWFnZS9zcmMvZXhlY3V0ZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vQGRlZmF1bHQtanMvZGVmYXVsdGpzLXRlbXBsYXRlLWxhbmd1YWdlLy4vbm9kZV9tb2R1bGVzL0BkZWZhdWx0LWpzL2RlZmF1bHRqcy1leHRkb20vaW5kZXguanMiLCJ3ZWJwYWNrOi8vQGRlZmF1bHQtanMvZGVmYXVsdGpzLXRlbXBsYXRlLWxhbmd1YWdlLy4vbm9kZV9tb2R1bGVzL0BkZWZhdWx0LWpzL2RlZmF1bHRqcy1leHRkb20vc3JjL0dsb2JhbC5qcyIsIndlYnBhY2s6Ly9AZGVmYXVsdC1qcy9kZWZhdWx0anMtdGVtcGxhdGUtbGFuZ3VhZ2UvLi9ub2RlX21vZHVsZXMvQGRlZmF1bHQtanMvZGVmYXVsdGpzLWV4dGRvbS9zcmMvZG9tL0RvY3VtZW50LmpzIiwid2VicGFjazovL0BkZWZhdWx0LWpzL2RlZmF1bHRqcy10ZW1wbGF0ZS1sYW5ndWFnZS8uL25vZGVfbW9kdWxlcy9AZGVmYXVsdC1qcy9kZWZhdWx0anMtZXh0ZG9tL3NyYy9kb20vRG9jdW1lbnRGcmFnbWVudC5qcyIsIndlYnBhY2s6Ly9AZGVmYXVsdC1qcy9kZWZhdWx0anMtdGVtcGxhdGUtbGFuZ3VhZ2UvLi9ub2RlX21vZHVsZXMvQGRlZmF1bHQtanMvZGVmYXVsdGpzLWV4dGRvbS9zcmMvZG9tL0VsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vQGRlZmF1bHQtanMvZGVmYXVsdGpzLXRlbXBsYXRlLWxhbmd1YWdlLy4vbm9kZV9tb2R1bGVzL0BkZWZhdWx0LWpzL2RlZmF1bHRqcy1leHRkb20vc3JjL2RvbS9FdmVudFRhcmdldC5qcyIsIndlYnBhY2s6Ly9AZGVmYXVsdC1qcy9kZWZhdWx0anMtdGVtcGxhdGUtbGFuZ3VhZ2UvLi9ub2RlX21vZHVsZXMvQGRlZmF1bHQtanMvZGVmYXVsdGpzLWV4dGRvbS9zcmMvZG9tL0hUTUxFbGVtZW50LmpzIiwid2VicGFjazovL0BkZWZhdWx0LWpzL2RlZmF1bHRqcy10ZW1wbGF0ZS1sYW5ndWFnZS8uL25vZGVfbW9kdWxlcy9AZGVmYXVsdC1qcy9kZWZhdWx0anMtZXh0ZG9tL3NyYy9kb20vSFRNTElucHV0RWxlbWVudC5qcyIsIndlYnBhY2s6Ly9AZGVmYXVsdC1qcy9kZWZhdWx0anMtdGVtcGxhdGUtbGFuZ3VhZ2UvLi9ub2RlX21vZHVsZXMvQGRlZmF1bHQtanMvZGVmYXVsdGpzLWV4dGRvbS9zcmMvZG9tL0hUTUxTZWxlY3RFbGVtZW50LmpzIiwid2VicGFjazovL0BkZWZhdWx0LWpzL2RlZmF1bHRqcy10ZW1wbGF0ZS1sYW5ndWFnZS8uL25vZGVfbW9kdWxlcy9AZGVmYXVsdC1qcy9kZWZhdWx0anMtZXh0ZG9tL3NyYy9kb20vSFRNTFRleHRBcmVhRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9AZGVmYXVsdC1qcy9kZWZhdWx0anMtdGVtcGxhdGUtbGFuZ3VhZ2UvLi9ub2RlX21vZHVsZXMvQGRlZmF1bHQtanMvZGVmYXVsdGpzLWV4dGRvbS9zcmMvZG9tL0h0bWxDb2xsZWN0aW9uLmpzIiwid2VicGFjazovL0BkZWZhdWx0LWpzL2RlZmF1bHRqcy10ZW1wbGF0ZS1sYW5ndWFnZS8uL25vZGVfbW9kdWxlcy9AZGVmYXVsdC1qcy9kZWZhdWx0anMtZXh0ZG9tL3NyYy9kb20vTm9kZS5qcyIsIndlYnBhY2s6Ly9AZGVmYXVsdC1qcy9kZWZhdWx0anMtdGVtcGxhdGUtbGFuZ3VhZ2UvLi9ub2RlX21vZHVsZXMvQGRlZmF1bHQtanMvZGVmYXVsdGpzLWV4dGRvbS9zcmMvZG9tL05vZGVMaXN0LmpzIiwid2VicGFjazovL0BkZWZhdWx0LWpzL2RlZmF1bHRqcy10ZW1wbGF0ZS1sYW5ndWFnZS8uL25vZGVfbW9kdWxlcy9AZGVmYXVsdC1qcy9kZWZhdWx0anMtZXh0ZG9tL3NyYy9kb20vZXh0ZW50aW9ucy9BdHRyaWJ1dGVTdXBwb3J0LmpzIiwid2VicGFjazovL0BkZWZhdWx0LWpzL2RlZmF1bHRqcy10ZW1wbGF0ZS1sYW5ndWFnZS8uL25vZGVfbW9kdWxlcy9AZGVmYXVsdC1qcy9kZWZhdWx0anMtZXh0ZG9tL3NyYy9kb20vZXh0ZW50aW9ucy9EYXRhU3VwcG9ydC5qcyIsIndlYnBhY2s6Ly9AZGVmYXVsdC1qcy9kZWZhdWx0anMtdGVtcGxhdGUtbGFuZ3VhZ2UvLi9ub2RlX21vZHVsZXMvQGRlZmF1bHQtanMvZGVmYXVsdGpzLWV4dGRvbS9zcmMvZG9tL2V4dGVudGlvbnMvRXZlbnRTdXBwb3J0LmpzIiwid2VicGFjazovL0BkZWZhdWx0LWpzL2RlZmF1bHRqcy10ZW1wbGF0ZS1sYW5ndWFnZS8uL25vZGVfbW9kdWxlcy9AZGVmYXVsdC1qcy9kZWZhdWx0anMtZXh0ZG9tL3NyYy9kb20vZXh0ZW50aW9ucy9IdG1sQ2xhc3NTdXBwb3J0LmpzIiwid2VicGFjazovL0BkZWZhdWx0LWpzL2RlZmF1bHRqcy10ZW1wbGF0ZS1sYW5ndWFnZS8uL25vZGVfbW9kdWxlcy9AZGVmYXVsdC1qcy9kZWZhdWx0anMtZXh0ZG9tL3NyYy9kb20vZXh0ZW50aW9ucy9MaXN0U3VwcG9ydC5qcyIsIndlYnBhY2s6Ly9AZGVmYXVsdC1qcy9kZWZhdWx0anMtdGVtcGxhdGUtbGFuZ3VhZ2UvLi9ub2RlX21vZHVsZXMvQGRlZmF1bHQtanMvZGVmYXVsdGpzLWV4dGRvbS9zcmMvZG9tL2V4dGVudGlvbnMvTWFuaXB1bGF0aW9uU3VwcG9ydC5qcyIsIndlYnBhY2s6Ly9AZGVmYXVsdC1qcy9kZWZhdWx0anMtdGVtcGxhdGUtbGFuZ3VhZ2UvLi9ub2RlX21vZHVsZXMvQGRlZmF1bHQtanMvZGVmYXVsdGpzLWV4dGRvbS9zcmMvZG9tL2V4dGVudGlvbnMvUXVlcnlTdXBwb3J0LmpzIiwid2VicGFjazovL0BkZWZhdWx0LWpzL2RlZmF1bHRqcy10ZW1wbGF0ZS1sYW5ndWFnZS8uL25vZGVfbW9kdWxlcy9AZGVmYXVsdC1qcy9kZWZhdWx0anMtZXh0ZG9tL3NyYy9kb20vZXh0ZW50aW9ucy9SZWFkeUV2ZW50U3VwcG9ydC5qcyIsIndlYnBhY2s6Ly9AZGVmYXVsdC1qcy9kZWZhdWx0anMtdGVtcGxhdGUtbGFuZ3VhZ2UvLi9ub2RlX21vZHVsZXMvQGRlZmF1bHQtanMvZGVmYXVsdGpzLWV4dGRvbS9zcmMvZG9tL2V4dGVudGlvbnMvU2hvd0hpZGVTdXBwb3J0LmpzIiwid2VicGFjazovL0BkZWZhdWx0LWpzL2RlZmF1bHRqcy10ZW1wbGF0ZS1sYW5ndWFnZS8uL25vZGVfbW9kdWxlcy9AZGVmYXVsdC1qcy9kZWZhdWx0anMtZXh0ZG9tL3NyYy9kb20vZXh0ZW50aW9ucy9WYWx1ZVN1cHBvcnQuanMiLCJ3ZWJwYWNrOi8vQGRlZmF1bHQtanMvZGVmYXVsdGpzLXRlbXBsYXRlLWxhbmd1YWdlLy4vbm9kZV9tb2R1bGVzL0BkZWZhdWx0LWpzL2RlZmF1bHRqcy1leHRkb20vc3JjL2luZGV4LmpzIiwid2VicGFjazovL0BkZWZhdWx0LWpzL2RlZmF1bHRqcy10ZW1wbGF0ZS1sYW5ndWFnZS8uL25vZGVfbW9kdWxlcy9AZGVmYXVsdC1qcy9kZWZhdWx0anMtZXh0ZG9tL3NyYy91dGlscy9EZWxlZ2F0ZXJCdWlsZGVyLmpzIiwid2VicGFjazovL0BkZWZhdWx0LWpzL2RlZmF1bHRqcy10ZW1wbGF0ZS1sYW5ndWFnZS8uL25vZGVfbW9kdWxlcy9AZGVmYXVsdC1qcy9kZWZhdWx0anMtZXh0ZG9tL3NyYy91dGlscy9FeHRlbmRQcm90b3R5cGUuanMiLCJ3ZWJwYWNrOi8vQGRlZmF1bHQtanMvZGVmYXVsdGpzLXRlbXBsYXRlLWxhbmd1YWdlLy4vbm9kZV9tb2R1bGVzL0BkZWZhdWx0LWpzL2RlZmF1bHRqcy1leHRkb20vc3JjL3V0aWxzL0V4dGVuZGVyLmpzIiwid2VicGFjazovL0BkZWZhdWx0LWpzL2RlZmF1bHRqcy10ZW1wbGF0ZS1sYW5ndWFnZS8uL25vZGVfbW9kdWxlcy9AZGVmYXVsdC1qcy9kZWZhdWx0anMtZXh0ZG9tL3NyYy91dGlscy9VdGlscy5qcyIsIndlYnBhY2s6Ly9AZGVmYXVsdC1qcy9kZWZhdWx0anMtdGVtcGxhdGUtbGFuZ3VhZ2UvLi9zcmMvQ29udGV4dC5qcyIsIndlYnBhY2s6Ly9AZGVmYXVsdC1qcy9kZWZhdWx0anMtdGVtcGxhdGUtbGFuZ3VhZ2UvLi9zcmMvRGlyZWN0aXZlLmpzIiwid2VicGFjazovL0BkZWZhdWx0LWpzL2RlZmF1bHRqcy10ZW1wbGF0ZS1sYW5ndWFnZS8uL3NyYy9FbGVtZW50LmpzIiwid2VicGFjazovL0BkZWZhdWx0LWpzL2RlZmF1bHRqcy10ZW1wbGF0ZS1sYW5ndWFnZS8uL3NyYy9SZW5kZXJlci5qcyIsIndlYnBhY2s6Ly9AZGVmYXVsdC1qcy9kZWZhdWx0anMtdGVtcGxhdGUtbGFuZ3VhZ2UvLi9zcmMvVGVtcGxhdGUuanMiLCJ3ZWJwYWNrOi8vQGRlZmF1bHQtanMvZGVmYXVsdGpzLXRlbXBsYXRlLWxhbmd1YWdlLy4vc3JjL1V0aWxzLmpzIiwid2VicGFjazovL0BkZWZhdWx0LWpzL2RlZmF1bHRqcy10ZW1wbGF0ZS1sYW5ndWFnZS8uL3NyYy9kaXJlY3RpdmVzL0F0dGFjaEVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vQGRlZmF1bHQtanMvZGVmYXVsdGpzLXRlbXBsYXRlLWxhbmd1YWdlLy4vc3JjL2RpcmVjdGl2ZXMvQXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9AZGVmYXVsdC1qcy9kZWZhdWx0anMtdGVtcGxhdGUtbGFuZ3VhZ2UvLi9zcmMvZGlyZWN0aXZlcy9DaG9vc2UuanMiLCJ3ZWJwYWNrOi8vQGRlZmF1bHQtanMvZGVmYXVsdGpzLXRlbXBsYXRlLWxhbmd1YWdlLy4vc3JjL2RpcmVjdGl2ZXMvRGF0YS5qcyIsIndlYnBhY2s6Ly9AZGVmYXVsdC1qcy9kZWZhdWx0anMtdGVtcGxhdGUtbGFuZ3VhZ2UvLi9zcmMvZGlyZWN0aXZlcy9Gb3JlYWNoLmpzIiwid2VicGFjazovL0BkZWZhdWx0LWpzL2RlZmF1bHRqcy10ZW1wbGF0ZS1sYW5ndWFnZS8uL3NyYy9kaXJlY3RpdmVzL0lmLmpzIiwid2VicGFjazovL0BkZWZhdWx0LWpzL2RlZmF1bHRqcy10ZW1wbGF0ZS1sYW5ndWFnZS8uL3NyYy9kaXJlY3RpdmVzL0luY2x1ZGUuanMiLCJ3ZWJwYWNrOi8vQGRlZmF1bHQtanMvZGVmYXVsdGpzLXRlbXBsYXRlLWxhbmd1YWdlLy4vc3JjL2RpcmVjdGl2ZXMvSW5pdGlhbC5qcyIsIndlYnBhY2s6Ly9AZGVmYXVsdC1qcy9kZWZhdWx0anMtdGVtcGxhdGUtbGFuZ3VhZ2UvLi9zcmMvZGlyZWN0aXZlcy9PbkZpbmlzaGVkLmpzIiwid2VicGFjazovL0BkZWZhdWx0LWpzL2RlZmF1bHRqcy10ZW1wbGF0ZS1sYW5ndWFnZS8uL3NyYy9kaXJlY3RpdmVzL1JlcGVhdC5qcyIsIndlYnBhY2s6Ly9AZGVmYXVsdC1qcy9kZWZhdWx0anMtdGVtcGxhdGUtbGFuZ3VhZ2UvLi9zcmMvZGlyZWN0aXZlcy9UZXh0LmpzIiwid2VicGFjazovL0BkZWZhdWx0LWpzL2RlZmF1bHRqcy10ZW1wbGF0ZS1sYW5ndWFnZS8uL3NyYy9kaXJlY3RpdmVzL2luZGV4LmpzIiwid2VicGFjazovL0BkZWZhdWx0LWpzL2RlZmF1bHRqcy10ZW1wbGF0ZS1sYW5ndWFnZS8uL3NyYy9lbGVtZW50cy9SZXBsYWNlLmpzIiwid2VicGFjazovL0BkZWZhdWx0LWpzL2RlZmF1bHRqcy10ZW1wbGF0ZS1sYW5ndWFnZS8uL3NyYy9lbGVtZW50cy9pbmRleC5qcyIsIndlYnBhY2s6Ly9AZGVmYXVsdC1qcy9kZWZhdWx0anMtdGVtcGxhdGUtbGFuZ3VhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vQGRlZmF1bHQtanMvZGVmYXVsdGpzLXRlbXBsYXRlLWxhbmd1YWdlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL0BkZWZhdWx0LWpzL2RlZmF1bHRqcy10ZW1wbGF0ZS1sYW5ndWFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vQGRlZmF1bHQtanMvZGVmYXVsdGpzLXRlbXBsYXRlLWxhbmd1YWdlL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vQGRlZmF1bHQtanMvZGVmYXVsdGpzLXRlbXBsYXRlLWxhbmd1YWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vQGRlZmF1bHQtanMvZGVmYXVsdGpzLXRlbXBsYXRlLWxhbmd1YWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vQGRlZmF1bHQtanMvZGVmYXVsdGpzLXRlbXBsYXRlLWxhbmd1YWdlLy4vaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgR0xPQkFMID0gKCgpID0+IHtcclxuXHRpZih0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiKSByZXR1cm4gZ2xvYmFsO1xyXG5cdGlmKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIpIHJldHVybiB3aW5kb3c7XHRcclxuXHRpZih0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIikgcmV0dXJuIHNlbGY7XHJcblx0cmV0dXJuIHt9O1xyXG59KSgpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgR0xPQkFMOyIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIE9iamVjdFByb3BlcnR5IHtcclxuXHRjb25zdHJ1Y3RvcihrZXksIGNvbnRleHQpe1xyXG5cdFx0dGhpcy5rZXkgPSBrZXk7XHJcblx0XHR0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xyXG5cdH1cclxuXHRcclxuXHRnZXQga2V5RGVmaW5lZCgpe1xyXG5cdFx0cmV0dXJuIHRoaXMua2V5IGluIHRoaXMuY29udGV4dDsgXHJcblx0fVxyXG5cdFxyXG5cdGdldCBoYXNWYWx1ZSgpe1xyXG5cdFx0cmV0dXJuICEhdGhpcy5jb250ZXh0W3RoaXMua2V5XTtcclxuXHR9XHJcblx0XHJcblx0Z2V0IHZhbHVlKCl7XHJcblx0XHRyZXR1cm4gdGhpcy5jb250ZXh0W3RoaXMua2V5XTtcclxuXHR9XHJcblx0XHJcblx0c2V0IHZhbHVlKGRhdGEpe1xyXG5cdFx0dGhpcy5jb250ZXh0W3RoaXMua2V5XSA9IGRhdGE7XHJcblx0fVxyXG5cdFxyXG5cdHNldCBhcHBlbmQoZGF0YSkge1xyXG5cdFx0aWYoIXRoaXMuaGFzVmFsdWUpXHJcblx0XHRcdHRoaXMudmFsdWUgPSBkYXRhO1xyXG5cdFx0ZWxzZSB7XHJcblx0XHRcdGNvbnN0IHZhbHVlID0gdGhpcy52YWx1ZTtcclxuXHRcdFx0aWYodmFsdWUgaW5zdGFuY2VvZiBBcnJheSlcclxuXHRcdFx0XHR2YWx1ZS5wdXNoKGRhdGEpO1xyXG5cdFx0XHRlbHNlXHJcblx0XHRcdFx0dGhpcy52YWx1ZSA9IFt0aGlzLnZhbHVlLCBkYXRhXTtcclxuXHRcdH1cclxuXHR9XHJcblx0XHJcblx0cmVtb3ZlKCl7XHJcblx0XHRkZWxldGUgdGhpcy5jb250ZXh0W3RoaXMua2V5XTtcclxuXHR9XHJcblx0XHJcblx0c3RhdGljIGxvYWQoZGF0YSwga2V5LCBjcmVhdGU9dHJ1ZSkge1xyXG5cdFx0bGV0IGNvbnRleHQgPSBkYXRhO1xyXG5cdFx0Y29uc3Qga2V5cyA9IGtleS5zcGxpdChcIlxcLlwiKTtcclxuXHRcdGxldCBuYW1lID0ga2V5cy5zaGlmdCgpLnRyaW0oKTtcclxuXHRcdHdoaWxlKGtleXMubGVuZ3RoID4gMCl7XHJcblx0XHRcdGlmKCFjb250ZXh0W25hbWVdKXtcclxuXHRcdFx0XHRpZighY3JlYXRlKVxyXG5cdFx0XHRcdFx0cmV0dXJuIG51bGw7XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0Y29udGV4dFtuYW1lXSA9IHt9XHJcblx0XHRcdH1cclxuXHRcdFx0XHJcblx0XHRcdGNvbnRleHQgPSBjb250ZXh0W25hbWVdO1xyXG5cdFx0XHRuYW1lID0ga2V5cy5zaGlmdCgpLnRyaW0oKTtcclxuXHRcdH1cclxuXHRcdFxyXG5cdFx0cmV0dXJuIG5ldyBPYmplY3RQcm9wZXJ0eShuYW1lLCBjb250ZXh0KTtcclxuXHR9XHJcbn07IiwiaW1wb3J0IE9iamVjdFByb3BlcnR5IGZyb20gXCIuL09iamVjdFByb3BlcnR5LmpzXCI7XHJcblxyXG5jb25zdCBlcXVhbEFycmF5U2V0ID0gKGEsIGIpID0+IHtcclxuXHRpZiAoYS5sZW5ndGggIT09IGIubGVuZ3RoKSByZXR1cm4gZmFsc2U7XHJcblx0Y29uc3QgbGVuZ3RoID0gYS5sZW5ndGg7XHJcblx0Zm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKylcclxuXHRcdGlmICghZXF1YWxQb2pvKGFbaV0sIGJbaV0pKSB7XHJcblx0XHRcdC8vY29uc29sZS5sb2coXCJmYWxzZVwiKTtcclxuXHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0fVxyXG5cclxuXHRyZXR1cm4gdHJ1ZTtcclxufTtcclxuXHJcbmNvbnN0IGVxdWFsTWFwID0gKGEsIGIpID0+IHtcclxuXHRpZiAoYS5sZW5ndGggIT09IGIubGVuZ3RoKSByZXR1cm4gZmFsc2U7XHJcblx0Zm9yIChjb25zdCBrZXkgb2YgYS5rZXlzKCkpXHJcblx0XHRpZiAoIWVxdWFsUG9qbyhhLmdldChrZXkpLCBiLmdldChrZXkpKSkge1xyXG5cdFx0XHQvL2NvbnNvbGUubG9nKFwiZmFsc2VcIik7XHJcblx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdH1cclxuXHJcblx0cmV0dXJuIHRydWU7XHJcbn07XHJcblxyXG5jb25zdCBlcXVhbENsYXNzZXMgPSAoYSwgYikgPT4ge1xyXG5cdGNvbnN0IGNsYXp6QSA9IE9iamVjdC5nZXRQcm90b3R5cGVPZihhKTtcclxuXHRjb25zdCBjbGF6ekIgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YoYik7XHJcblx0aWYgKGNsYXp6QSAhPSBjbGF6ekIpIHJldHVybiBmYWxzZTtcclxuXHJcblx0aWYgKCFjbGF6ekEpIHJldHVybiB0cnVlO1xyXG5cclxuXHRjb25zdCBwcm9wZXJ0aWVzQSA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKGNsYXp6QSk7XHJcblx0Y29uc3QgcHJvcGVydGllc0IgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhjbGF6ekIpO1xyXG5cclxuXHRpZiAocHJvcGVydGllc0EubGVuZ3RoICE9PSBwcm9wZXJ0aWVzQi5sZW5ndGgpIHJldHVybiBmYWxzZTtcclxuXHRmb3IgKGNvbnN0IGtleSBvZiBwcm9wZXJ0aWVzQSkge1xyXG5cdFx0Y29uc3QgdmFsdWVBID0gYVtrZXldO1xyXG5cdFx0Y29uc3QgdmFsdWVCID0gYltrZXldO1xyXG5cclxuXHRcdGlmICghZXF1YWxQb2pvKHZhbHVlQSwgdmFsdWVCKSkgcmV0dXJuIGZhbHNlO1xyXG5cdH1cclxuXHRyZXR1cm4gdHJ1ZTtcclxufTtcclxuXHJcbmNvbnN0IGVxdWFsT2JqZWN0ID0gKGEsIGIpID0+IHtcclxuXHRjb25zdCBwcm9wZXJ0aWVzQSA9IE9iamVjdC5rZXlzKGEpO1xyXG5cdGNvbnN0IHByb3BlcnRpZXNCID0gT2JqZWN0LmtleXMoYik7XHJcblxyXG5cdGlmIChwcm9wZXJ0aWVzQS5sZW5ndGggIT09IHByb3BlcnRpZXNCLmxlbmd0aCkgcmV0dXJuIGZhbHNlO1xyXG5cdGZvciAoY29uc3Qga2V5IG9mIHByb3BlcnRpZXNBKSB7XHJcblx0XHRjb25zdCB2YWx1ZUEgPSBhW2tleV07XHJcblx0XHRjb25zdCB2YWx1ZUIgPSBiW2tleV07XHJcblxyXG5cdFx0aWYgKCFlcXVhbFBvam8odmFsdWVBLCB2YWx1ZUIpKSByZXR1cm4gZmFsc2U7XHJcblx0fVxyXG5cdHJldHVybiB0cnVlO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGlzTnVsbE9yVW5kZWZpbmVkID0gKG9iamVjdCkgPT4ge1xyXG5cdHJldHVybiBvYmplY3QgPT0gbnVsbCB8fCB0eXBlb2Ygb2JqZWN0ID09PSBcInVuZGVmaW5lZFwiO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGlzUHJpbWl0aXZlID0gKG9iamVjdCkgPT4ge1xyXG5cdGlmIChvYmplY3QgPT0gbnVsbCkgcmV0dXJuIHRydWU7XHJcblxyXG5cdGNvbnN0IHR5cGUgPSB0eXBlb2Ygb2JqZWN0O1xyXG5cdHN3aXRjaCAodHlwZSkge1xyXG5cdFx0Y2FzZSBcIm51bWJlclwiOlxyXG5cdFx0Y2FzZSBcImJpZ2ludFwiOlxyXG5cdFx0Y2FzZSBcImJvb2xlYW5cIjpcclxuXHRcdGNhc2UgXCJzdHJpbmdcIjpcclxuXHRcdGNhc2UgXCJ1bmRlZmluZWRcIjpcclxuXHRcdFx0cmV0dXJuIHRydWU7XHJcblx0fVxyXG5cclxuXHRyZXR1cm4gZmFsc2U7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgaXNPYmplY3QgPSAob2JqZWN0KSA9PiB7XHJcblx0aWYoaXNOdWxsT3JVbmRlZmluZWQob2JqZWN0KSlcclxuXHRcdHJldHVybiBmYWxzZTtcclxuXHJcblx0cmV0dXJuIHR5cGVvZiBvYmplY3QgPT09IFwib2JqZWN0XCIgJiYgKCFvYmplY3QuY29uc3RydWN0b3IgfHwgb2JqZWN0LmNvbnN0cnVjdG9yLm5hbWUgPT09IFwiT2JqZWN0XCIpO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIGVxdWFsUG9qbyAtPiBjb21wYXJlcyBvbmx5IHBvam9zLCBhcnJheSwgc2V0LCBtYXAgYW5kIHByaW1pdGl2ZXNcclxuICovXHJcbmV4cG9ydCBjb25zdCBlcXVhbFBvam8gPSAoYSwgYikgPT4ge1xyXG5cdGNvbnN0IG51bGxBID0gaXNOdWxsT3JVbmRlZmluZWQoYSk7XHJcblx0Y29uc3QgbnVsbEIgPSBpc051bGxPclVuZGVmaW5lZChiKTtcclxuXHRpZiAobnVsbEEgfHwgbnVsbEIpIHJldHVybiBhID09PSBiO1xyXG5cclxuXHRpZiAoaXNQcmltaXRpdmUoYSkgfHwgaXNQcmltaXRpdmUoYikpIHJldHVybiBhID09PSBiO1xyXG5cclxuXHRjb25zdCB0eXBlQSA9IHR5cGVvZiBhO1xyXG5cdGNvbnN0IHR5cGVCID0gdHlwZW9mIGI7XHJcblx0aWYgKHR5cGVBICE9IHR5cGVCKSByZXR1cm4gZmFsc2U7XHJcblx0aWYgKHR5cGVBID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBhID09PSBiO1xyXG5cdC8vaWYgKGEuY29uc3RydWN0b3IgIT09IGIuY29uc3RydWN0b3IpIHJldHVybiBmYWxzZTtcclxuXHQvL2lmIChhIGluc3RhbmNlb2YgQXJyYXkgfHwgYSBpbnN0YW5jZW9mIFNldCkgcmV0dXJuIGVxdWFsQXJyYXlTZXQoYSwgYik7XHJcblx0Ly9pZiAoYSBpbnN0YW5jZW9mIE1hcCkgcmV0dXJuIGVxdWFsTWFwKGEsIGIpO1xyXG5cclxuXHRyZXR1cm4gZXF1YWxPYmplY3QoYSwgYikgJiYgZXF1YWxDbGFzc2VzKGEsIGIpO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIGNoZWNrZWQgaWYgYW4gb2JqZWN0IGEgc2ltcGxlIG9iamVjdC4gTm8gQXJyYXksIE1hcCBvciBzb21ldGhpbmcgZWxzZS5cclxuICpcclxuICogQHBhcmFtIGFPYmplY3Q6b2JqZWN0IHRoZSBvYmplY3QgdG8gYmUgdGVzdGluZ1xyXG4gKlxyXG4gKiBAcmV0dXJuIGJvb2xlYW5cclxuICovXHJcbmV4cG9ydCBjb25zdCBpc1Bvam8gPSAob2JqZWN0KSA9PiB7XHJcblx0aWYgKCFpc09iamVjdChvYmplY3QpKSByZXR1cm4gZmFsc2U7XHJcblxyXG5cdGZvciAoY29uc3Qga2V5IGluIG9iamVjdCkge1xyXG5cdFx0Y29uc3QgdmFsdWUgPSBvYmplY3Rba2V5XTtcclxuXHRcdGlmICh0eXBlb2YgdmFsdWUgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIGZhbHNlO1xyXG5cdH1cclxuXHJcblx0cmV0dXJuIHRydWU7XHJcbn07XHJcblxyXG4vKipcclxuICogYXBwZW5kIGEgcHJvcGVyeSB2YWx1ZSB0byBhbiBvYmplY3QuIElmIHByb3BlcnkgZXhpc3RzIGl0cyB3b3VsZCBiZSBjb252ZXJ0ZWQgdG8gYW4gYXJyYXlcclxuICpcclxuICogIEBwYXJhbSBhS2V5OnN0cmluZyBuYW1lIG9mIHByb3BlcnR5XHJcbiAqICBAcGFyYW0gYURhdGE6YW55IHByb3BlcnR5IHZhbHVlXHJcbiAqICBAcGFyYW0gYU9iamVjdDpvYmplY3QgdGhlIG9iamVjdCB0byBhcHBlbmQgdGhlIHByb3BlcnR5XHJcbiAqXHJcbiAqICBAcmV0dXJuIHJldHVybnMgdGhlIGNoYW5nZWQgb2JqZWN0XHJcbiAqL1xyXG5leHBvcnQgY29uc3QgYXBwZW5kID0gZnVuY3Rpb24gKGFLZXksIGFEYXRhLCBhT2JqZWN0KSB7XHJcblx0aWYgKHR5cGVvZiBhRGF0YSAhPT0gXCJ1bmRlZmluZWRcIikge1xyXG5cdFx0Y29uc3QgcHJvcGVydHkgPSBPYmplY3RQcm9wZXJ0eS5sb2FkKGFPYmplY3QsIGFLZXksIHRydWUpO1xyXG5cdFx0cHJvcGVydHkuYXBwZW5kID0gYURhdGE7XHJcblx0fVxyXG5cdHJldHVybiBhT2JqZWN0O1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIG1lcmdpbmcgb2JqZWN0IGludG8gYSB0YXJnZXQgb2JqZWN0LiBJdHMgb25seSBtZXJnZSBzaW1wbGUgb2JqZWN0IGFuZCBzdWIgb2JqZWN0cy4gRXZlcnkgb3RoZXJcclxuICogdmFsdWUgd291bGQgYmUgcmVwbGFjZWQgYnkgdmFsdWUgZnJvbSB0aGUgc291cmNlIG9iamVjdC5cclxuICpcclxuICogc2FtcGxlOiBtZXJnZSh0YXJnZXQsIHNvdXJjZS0xLCBzb3VyY2UtMiwgLi4uc291cmNlLW4pXHJcbiAqXHJcbiAqIEBwYXJhbSB0YXJnZXQ6b2JqZWN0IHRoZSB0YXJnZXQgb2JqZWN0IHRvIG1lcmdpbmcgaW50b1xyXG4gKiBAcGFyYW0gc291cmNlczpvYmplY3RcclxuICpcclxuICogQHJldHVybiBvYmplY3QgcmV0dXJucyB0aGUgdGFyZ2V0IG9iamVjdFxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IG1lcmdlID0gZnVuY3Rpb24gKHRhcmdldCwgLi4uc291cmNlcykge1xyXG5cdGlmICghdGFyZ2V0KSB0YXJnZXQgPSB7fTtcclxuXHJcblx0Zm9yIChsZXQgc291cmNlIG9mIHNvdXJjZXMpIHtcclxuXHRcdGlmIChpc1Bvam8oc291cmNlKSkge1xyXG5cdFx0XHRPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhzb3VyY2UpLmZvckVhY2goKGtleSkgPT4ge1xyXG5cdFx0XHRcdGlmIChpc1Bvam8odGFyZ2V0W2tleV0pKSBtZXJnZSh0YXJnZXRba2V5XSwgc291cmNlW2tleV0pO1xyXG5cdFx0XHRcdGVsc2UgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcclxuXHRcdFx0fSk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRyZXR1cm4gdGFyZ2V0O1xyXG59O1xyXG5cclxuY29uc3QgYnVpbGRQcm9wZXJ0eUZpbHRlciA9IGZ1bmN0aW9uICh7IG5hbWVzLCBhbGxvd2VkIH0pIHtcclxuXHRyZXR1cm4gKG5hbWUsIHZhbHVlLCBjb250ZXh0KSA9PiB7XHJcblx0XHRyZXR1cm4gbmFtZXMuaW5jbHVkZXMobmFtZSkgPT09IGFsbG93ZWQ7XHJcblx0fTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBmaWx0ZXIgPSBmdW5jdGlvbiAoKSB7XHJcblx0Y29uc3QgW2RhdGEsIHByb3BGaWx0ZXIsIHsgZGVlcCA9IGZhbHNlLCByZWN1cnNpdmUgPSB0cnVlLCBwYXJlbnRzID0gW10gfSA9IHt9XSA9IGFyZ3VtZW50cztcclxuXHRjb25zdCByZXN1bHQgPSB7fTtcclxuXHJcblx0Zm9yIChsZXQgbmFtZSBpbiBkYXRhKSB7XHJcblx0XHRjb25zdCB2YWx1ZSA9IGRhdGFbbmFtZV07XHJcblx0XHRjb25zdCBhY2NlcHQgPSBwcm9wRmlsdGVyKG5hbWUsIHZhbHVlLCBkYXRhKTtcclxuXHRcdGlmIChhY2NlcHQgJiYgKCFkZWVwIHx8IHZhbHVlID09PSBudWxsIHx8IHZhbHVlID09PSB1bmRlZmluZWQpKSByZXN1bHRbbmFtZV0gPSB2YWx1ZTtcclxuXHRcdGVsc2UgaWYgKGFjY2VwdCAmJiBkZWVwKSB7XHJcblx0XHRcdGNvbnN0IHR5cGUgPSB0eXBlb2YgdmFsdWU7XHJcblx0XHRcdGlmICh0eXBlICE9PSBcIm9iamVjdFwiIHx8IHZhbHVlIGluc3RhbmNlb2YgQXJyYXkgfHwgdmFsdWUgaW5zdGFuY2VvZiBNYXAgfHwgdmFsdWUgaW5zdGFuY2VvZiBTZXQgfHwgdmFsdWUgaW5zdGFuY2VvZiBSZWdFeHAgfHwgcGFyZW50cy5pbmNsdWRlc1t2YWx1ZV0gfHwgdmFsdWUgPT0gZGF0YSkgcmVzdWx0W25hbWVdID0gdmFsdWU7XHJcblx0XHRcdGVsc2UgcmVzdWx0W25hbWVdID0gZmlsdGVyKHZhbHVlLCBwcm9wRmlsdGVyLCB7IGRlZXAsIHJlY3Vyc2l2ZSwgcGFyZW50czogcGFyZW50cy5jb25jYXQoZGF0YSkgfSk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRyZXR1cm4gcmVzdWx0O1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGRlZlZhbHVlID0gKG8sIG5hbWUsIHZhbHVlKSA9PiB7XHJcblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIG5hbWUsIHtcclxuXHRcdHZhbHVlLFxyXG5cdFx0d3JpdGFibGU6IGZhbHNlLFxyXG5cdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcclxuXHRcdGVudW1lcmFibGU6IGZhbHNlLFxyXG5cdH0pO1xyXG59O1xyXG5leHBvcnQgY29uc3QgZGVmR2V0ID0gKG8sIG5hbWUsIGdldCkgPT4ge1xyXG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBuYW1lLCB7XHJcblx0XHRnZXQsXHJcblx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxyXG5cdFx0ZW51bWVyYWJsZTogZmFsc2UsXHJcblx0fSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZGVmR2V0U2V0ID0gKG8sIG5hbWUsIGdldCwgc2V0KSA9PiB7XHJcblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIG5hbWUsIHtcclxuXHRcdGdldCxcclxuXHRcdHNldCxcclxuXHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXHJcblx0XHRlbnVtZXJhYmxlOiBmYWxzZSxcclxuXHR9KTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuXHRpc051bGxPclVuZGVmaW5lZCxcclxuXHRpc09iamVjdCxcclxuXHRlcXVhbFBvam8sXHJcblx0aXNQb2pvLFxyXG5cdGFwcGVuZCxcclxuXHRtZXJnZSxcclxuXHRmaWx0ZXIsXHJcblx0YnVpbGRQcm9wZXJ0eUZpbHRlcixcclxuXHRkZWZWYWx1ZSxcclxuXHRkZWZHZXQsXHJcblx0ZGVmR2V0U2V0LFxyXG59O1xyXG4iLCJpbXBvcnQge2RlZlZhbHVlLCBkZWZHZXR9IGZyb20gXCIuL09iamVjdFV0aWxzXCJcclxuXHJcbmV4cG9ydCBjb25zdCB0aW1lb3V0UHJvbWlzZSA9IChmbiwgbXMpID0+e1xyXG5cdGxldCBjYW5jZWxlZCA9IGZhbHNlO1xyXG5cdGxldCB0aW1lb3V0ID0gbnVsbDtcclxuXHRjb25zdCBwcm9taXNlID0gbmV3IFByb21pc2UoKHIsIGUpID0+IHtcclxuXHRcdHRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpPT4ge1xyXG5cdFx0XHR0aW1lb3V0ID0gbnVsbDtcclxuXHRcdFx0Zm4ocixlKTtcclxuXHRcdH0sIG1zKVxyXG5cdH0pO1xyXG5cclxuXHRjb25zdCB0aGVuID0gcHJvbWlzZS50aGVuO1xyXG5cdHByb21pc2UudGhlbiA9IChmbikgPT4ge1xyXG5cdFx0dGhlbi5jYWxsKHByb21pc2UsIChyZXN1bHQpID0+IHtcclxuXHRcdFx0aWYoIXRoaXMuY2FuY2VsZWQpXHJcblx0XHRcdFx0cmV0dXJuIGZuKHJlc3VsdCk7XHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdGRlZlZhbHVlKHByb21pc2UsIFwiY2FuY2VsXCIsICgpID0+IHtcclxuXHRcdGlmKHRpbWVvdXQpe1xyXG5cdFx0XHRjbGVhclRpbWVvdXQodGltZW91dCk7XHJcblx0XHRcdGNhbmNlbGVkID0gdHJ1ZTtcclxuXHRcdH1cclxuXHR9KTtcclxuXHRkZWZHZXQocHJvbWlzZSwgY2FuY2VsZCwgKCkgPT4gY2FuY2VsZWQpO1xyXG5cclxuXHRyZXR1cm4gcHJvbWlzZTtcclxufVxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBsYXp5UHJvbWlzZSA9ICgpID0+IHtcclxuXHRcdGxldCBwcm9taXNlUmVzb2x2ZSA9IG51bGw7XHJcblx0XHRsZXQgcHJvbWlzZUVycm9yID0gbnVsbDtcclxuXHJcblx0XHRjb25zdCBwcm9taXNlID0gbmV3IFByb21pc2UoKHIsIGUpID0+IHtcclxuXHRcdFx0cHJvbWlzZVJlc29sdmUgPSByO1xyXG5cdFx0XHRwcm9taXNlRXJyb3IgPSBlO1xyXG5cdFx0fSk7XHJcblxyXG5cdFx0bGV0IHJlc29sdmVkID0gZmFsc2U7XHJcblx0XHRsZXQgZXJyb3IgPSBmYWxzZTtcclxuXHRcdGxldCB2YWx1ZSA9IHVuZGVmaW5lZDtcclxuXHJcblx0XHRkZWZWYWx1ZShwcm9taXNlLCBcInJlc29sdmVcIiwgKHJlc3VsdCkgPT4ge1xyXG5cdFx0XHR2YWx1ZSA9IHJlc3VsdDtcclxuXHRcdFx0cmVzb2x2ZWQgPSB0cnVlO1xyXG5cdFx0XHRpZiAodmFsdWUgaW5zdGFuY2VvZiBFcnJvcikge1xyXG5cdFx0XHRcdGVycm9yID0gdHJ1ZTtcclxuXHRcdFx0XHRwcm9taXNlRXJyb3IodmFsdWUpO1xyXG5cdFx0XHR9IGVsc2UgcHJvbWlzZVJlc29sdmUodmFsdWUpO1xyXG5cdFx0fSk7XHJcblxyXG5cdFx0ZGVmR2V0KHByb21pc2UsIFwidmFsdWVcIiwgKCkgPT4gdmFsdWUpO1xyXG5cdFx0ZGVmR2V0KHByb21pc2UsIFwiZXJyb3JcIiwgKCkgPT4gZXJyb3IpO1xyXG5cdFx0ZGVmR2V0KHByb21pc2UsIFwicmVzb2x2ZWRcIiwgKCkgPT4gcmVzb2x2ZWQpO1xyXG5cclxuXHRcdHJldHVybiBwcm9taXNlO1xyXG59O1xyXG5leHBvcnQgZGVmYXVsdCB7XHJcblx0bGF6eVByb21pc2UsXHJcblx0dGltZW91dFByb21pc2VcclxufVxyXG4iLCJpZiAoIVN0cmluZy5wcm90b3R5cGUuaGFzaGNvZGUpXHJcblx0U3RyaW5nLnByb3RvdHlwZS5oYXNoY29kZSA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0aWYgKHRoaXMubGVuZ3RoID09PSAwKVxyXG5cdFx0XHRyZXR1cm4gMDtcclxuXHRcdFxyXG5cdFx0bGV0IGhhc2ggPSAwO1xyXG5cdFx0Y29uc3QgbGVuZ3RoID0gdGhpcy5sZW5ndGg7XHJcblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdGNvbnN0IGMgPSB0aGlzLmNoYXJDb2RlQXQoaSk7XHJcblx0XHRcdGhhc2ggPSAoKGhhc2ggPDwgNSkgLSBoYXNoKSArIGM7XHJcblx0XHRcdGhhc2ggfD0gMDsgLy8gQ29udmVydCB0byAzMmJpdCBpbnRlZ2VyXHJcblx0XHR9XHJcblx0XHRyZXR1cm4gaGFzaDtcclxuXHR9OyIsImltcG9ydCBFeHByZXNzaW9uUmVzb2x2ZXIgZnJvbSBcIi4vc3JjL0V4cHJlc3Npb25SZXNvbHZlci5qc1wiO1xuaW1wb3J0IFwiLi9zcmMvZXhlY3V0ZXIvaW5kZXguanNcIjtcbmltcG9ydCAqIGFzIEV4ZWN1dGVyUmVnaXN0cnkgZnJvbSBcIi4vc3JjL0V4ZWN1dGVyUmVnaXN0cnkuanNcIlxuXG5leHBvcnQgeyBFeHByZXNzaW9uUmVzb2x2ZXIsIEV4ZWN1dGVyUmVnaXN0cnkgfTtcbiIsIi8qKlxuICogb2JqZWN0IGZvciBkZWZhdWx0IHZhbHVlXG4gKlxuICogQGV4cG9ydFxuICogQGNsYXNzIERlZmF1bHRWYWx1ZVxuICogQHR5cGVkZWYge0RlZmF1bHRWYWx1ZX1cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGVmYXVsdFZhbHVlIHtcblx0LyoqXG5cdCAqIENyZWF0ZXMgYW4gaW5zdGFuY2Ugb2YgRGVmYXVsdFZhbHVlLlxuXHQgKlxuXHQgKiBAY29uc3RydWN0b3Jcblx0ICogQHBhcmFtIHsqfSB2YWx1ZVxuXHQgKi9cblx0Y29uc3RydWN0b3IodmFsdWUpe1xuXHRcdHRoaXMuaGFzVmFsdWUgPSBhcmd1bWVudHMubGVuZ3RoID09IDE7XG5cdFx0dGhpcy52YWx1ZSA9IHZhbHVlO1xuXHR9XHRcbn07IiwiY29uc3QgRVhFQ1VURVJTID0gbmV3IE1hcCgpO1xyXG5cclxuLyoqXHJcbiAqXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBhTmFtZVxyXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBhbkV4ZWN1dGVyXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgcmVnaXN0cmF0ZSA9IChhTmFtZSwgYW5FeGVjdXRlcikgPT4ge1xyXG5cdEVYRUNVVEVSUy5zZXQoYU5hbWUsIGFuRXhlY3V0ZXIpO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBhTmFtZVxyXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259XHJcbiAqL1xyXG5leHBvcnQgY29uc3QgZ2V0RXhlY3V0ZXIgPSAoYU5hbWUpID0+IHtcclxuXHRjb25zdCBleGVjdXRlciA9IEVYRUNVVEVSUy5nZXQoYU5hbWUpO1xyXG5cdGlmICghZXhlY3V0ZXIpIHRocm93IG5ldyBFcnJvcihgRXhlY3V0ZXIgXCIke2FOYW1lfVwiIGlzIG5vdCByZWdpc3RyYXRlZCFgKTtcclxuXHRyZXR1cm4gZXhlY3V0ZXI7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBnZXRFeGVjdXRlcjtcclxuIiwiaW1wb3J0IEdMT0JBTCBmcm9tIFwiQGRlZmF1bHQtanMvZGVmYXVsdGpzLWNvbW1vbi11dGlscy9zcmMvR2xvYmFsLmpzXCI7XHJcbmltcG9ydCBPYmplY3RVdGlscyBmcm9tIFwiQGRlZmF1bHQtanMvZGVmYXVsdGpzLWNvbW1vbi11dGlscy9zcmMvT2JqZWN0VXRpbHMuanNcIjtcclxuaW1wb3J0IERlZmF1bHRWYWx1ZSBmcm9tIFwiLi9EZWZhdWx0VmFsdWUuanNcIjtcclxuaW1wb3J0IGdldEV4ZWN1dGVyVHlwZSBmcm9tIFwiLi9FeGVjdXRlclJlZ2lzdHJ5LmpzXCI7XHJcbmltcG9ydCBDb250ZXh0UHJveHkgZnJvbSBcIi4vUmVzb2x2ZXJDb250ZXh0SGFuZGxlLmpzXCI7XHJcblxyXG5jb25zdCBERUZBVUxUX0VYRUNVVEVSX05BTUUgPSBcIndpdGgtc2NvcGVkLWV4ZWN1dGVyXCI7XHJcbmxldCBERUZBVUxUX0VYRUNVVEVSID0gKCgpID0+IHtcclxuXHRsZXQgZXhlY3V0ZXIgPSBudWxsO1xyXG5cdHJldHVybiAoYVN0YXRlbWVudCwgYUNvbnRleHQpID0+IHtcclxuXHRcdGlmIChleGVjdXRlciA9PSBudWxsKSBleGVjdXRlciA9IGdldEV4ZWN1dGVyVHlwZShERUZBVUxUX0VYRUNVVEVSX05BTUUpO1xyXG5cdFx0cmV0dXJuIGV4ZWN1dGVyKGFTdGF0ZW1lbnQsIGFDb250ZXh0KTtcclxuXHR9O1xyXG59KSgpO1xyXG5cclxuY29uc3QgRVhFQ1VUSU9OX1dBUk5fVElNRU9VVCA9IDEwMDA7XHJcbmNvbnN0IEVYUFJFU1NJT04gPSAvKFxcXFw/KShcXCRcXHsoKFthLXpBLVowLTlcXC1fXFxzXSspOjopPyhbXlxce1xcfV0rKVxcfSkvO1xyXG5jb25zdCBNQVRDSF9FU0NBUEVEID0gMTtcclxuY29uc3QgTUFUQ0hfRlVMTF9FWFBSRVNTSU9OID0gMjtcclxuY29uc3QgTUFUQ0hfRVhQUkVTU0lPTl9TQ09QRSA9IDQ7XHJcbmNvbnN0IE1BVENIX0VYUFJFU1NJT05fU1RBVEVNRU5UID0gNTtcclxuXHJcbmNvbnN0IERFRkFVTFRfTk9UX0RFRklORUQgPSBuZXcgRGVmYXVsdFZhbHVlKCk7XHJcbmNvbnN0IHRvRGVmYXVsdFZhbHVlID0gKHZhbHVlKSA9PiB7XHJcblx0aWYgKHZhbHVlIGluc3RhbmNlb2YgRGVmYXVsdFZhbHVlKSByZXR1cm4gdmFsdWU7XHJcblxyXG5cdHJldHVybiBuZXcgRGVmYXVsdFZhbHVlKHZhbHVlKTtcclxufTtcclxuXHJcbmNvbnN0IGV4ZWN1dGUgPSBhc3luYyBmdW5jdGlvbiAoYW5FeGVjdXRlciwgYVN0YXRlbWVudCwgYUNvbnRleHQpIHtcclxuXHRpZiAodHlwZW9mIGFTdGF0ZW1lbnQgIT09IFwic3RyaW5nXCIpIHJldHVybiBhU3RhdGVtZW50O1xyXG5cdGFTdGF0ZW1lbnQgPSBub3JtYWxpemUoYVN0YXRlbWVudCk7XHJcblx0aWYgKGFTdGF0ZW1lbnQgPT0gbnVsbCkgcmV0dXJuIGFTdGF0ZW1lbnQ7XHJcblxyXG5cdHRyeSB7XHJcblx0XHRyZXR1cm4gYXdhaXQgbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcclxuXHRcdFx0Y29uc3QgdGltZW91dCA9IHNldFRpbWVvdXQoXHJcblx0XHRcdFx0KCkgPT5cclxuXHRcdFx0XHRcdGNvbnNvbGUud2FybihgTG9uZyBydW5uaW5nIHN0YXRlbWVudDpcclxuXHRcdFx0XHRcIiR7YVN0YXRlbWVudH1cIlxyXG5cdFx0XHRgKSxcclxuXHRcdFx0XHRFWEVDVVRJT05fV0FSTl9USU1FT1VULFxyXG5cdFx0XHQpO1xyXG5cdFx0XHRyZXNvbHZlKFxyXG5cdFx0XHRcdChhc3luYyAoKSA9PiB7XHJcblx0XHRcdFx0XHRsZXQgcmVzdWx0ID0gdW5kZWZpbmVkO1xyXG5cdFx0XHRcdFx0dHJ5IHtcclxuXHRcdFx0XHRcdFx0cmVzdWx0ID0gYXdhaXQgYW5FeGVjdXRlcihhU3RhdGVtZW50LCBhQ29udGV4dCk7XHJcblx0XHRcdFx0XHR9IGNhdGNoIChlKSB7XHJcblx0XHRcdFx0XHRcdGNvbnNvbGUud2FybihgRXhlY3V0aW9uIGVycm9yIG9uIHN0YXRlbWVudCFcclxuXHRcdFx0XHRcdFx0XHRzdGF0ZW1lbnQ6IFxyXG5cdFx0XHRcdFx0XHRcdCR7YVN0YXRlbWVudH1cclxuXHRcdFx0XHRcdFx0XHRlcnJvcjpcclxuXHRcdFx0XHRcdFx0XHQke2V9XHJcblx0XHRcdFx0XHRcdFx0YClcclxuXHRcdFx0XHRcdH0gZmluYWxseSB7XHJcblx0XHRcdFx0XHRcdGNsZWFyVGltZW91dCh0aW1lb3V0KTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdHJldHVybiByZXN1bHQ7XHJcblx0XHRcdFx0fSkoKSxcclxuXHRcdFx0KTtcclxuXHRcdH0pO1xyXG5cdH0gY2F0Y2ggKGUpIHtcclxuXHRcdGNvbnNvbGUuZXJyb3IoYEVycm9yIGJ5IHN0YXRlbWVudCBcIiR7YVN0YXRlbWVudH1cIjpgLCBlKTtcclxuXHR9XHJcbn07XHJcblxyXG5jb25zdCByZXNvbHZlID0gYXN5bmMgZnVuY3Rpb24gKGFFeGVjdXRlciA9IERFRkFVTFRfRVhFQ1VURVIsIGFSZXNvbHZlciwgYUV4cHJlc3Npb24sIGFGaWx0ZXIsIGFEZWZhdWx0KSB7XHJcblx0aWYgKGFGaWx0ZXIgJiYgYVJlc29sdmVyLm5hbWUgIT0gYUZpbHRlcikgcmV0dXJuIGFSZXNvbHZlci5wYXJlbnQgPyByZXNvbHZlKGFSZXNvbHZlci5wYXJlbnQsIGFFeHByZXNzaW9uLCBhRmlsdGVyLCBhRGVmYXVsdCwgYUV4ZWN1dGVyKSA6IG51bGw7XHJcblxyXG5cdGNvbnN0IHJlc3VsdCA9IGF3YWl0IGV4ZWN1dGUoYUV4ZWN1dGVyLCBhRXhwcmVzc2lvbiwgYVJlc29sdmVyLmNvbnRleHQpO1xyXG5cdGlmIChyZXN1bHQgIT09IG51bGwgJiYgdHlwZW9mIHJlc3VsdCAhPT0gXCJ1bmRlZmluZWRcIikgcmV0dXJuIHJlc3VsdDtcclxuXHRlbHNlIGlmIChhRGVmYXVsdCBpbnN0YW5jZW9mIERlZmF1bHRWYWx1ZSAmJiBhRGVmYXVsdC5oYXNWYWx1ZSkgcmV0dXJuIGFEZWZhdWx0LnZhbHVlO1xyXG59O1xyXG5cclxuY29uc3QgcmVzb2x2ZU1hdGNoID0gYXN5bmMgKGFFeGVjdXRlciwgcmVzb2x2ZXIsIG1hdGNoLCBkZWZhdWx0VmFsdWUpID0+IHtcclxuXHRpZiAobWF0Y2hbTUFUQ0hfRVNDQVBFRF0pIHJldHVybiBtYXRjaFtNQVRDSF9GVUxMX0VYUFJFU1NJT05dO1xyXG5cclxuXHRyZXR1cm4gcmVzb2x2ZShhRXhlY3V0ZXIsIHJlc29sdmVyLCBtYXRjaFtNQVRDSF9FWFBSRVNTSU9OX1NUQVRFTUVOVF0sIG5vcm1hbGl6ZShtYXRjaFtNQVRDSF9FWFBSRVNTSU9OX1NDT1BFXSksIGRlZmF1bHRWYWx1ZSk7XHJcbn07XHJcblxyXG5jb25zdCBub3JtYWxpemUgPSAodmFsdWUpID0+IHtcclxuXHRpZiAodmFsdWUpIHtcclxuXHRcdHZhbHVlID0gdmFsdWUudHJpbSgpO1xyXG5cdFx0cmV0dXJuIHZhbHVlLmxlbmd0aCA9PSAwID8gbnVsbCA6IHZhbHVlO1xyXG5cdH1cclxuXHRyZXR1cm4gbnVsbDtcclxufTtcclxuXHJcbi8qKlxyXG4gKiBFeHByZXNzaW9uUmVzb2x2ZXJcclxuICpcclxuICogQGV4cG9ydFxyXG4gKiBAY2xhc3MgRXhwcmVzc2lvblJlc29sdmVyXHJcbiAqIEB0eXBlZGVmIHtFeHByZXNzaW9uUmVzb2x2ZXJ9XHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFeHByZXNzaW9uUmVzb2x2ZXIge1xyXG5cdC8qKlxyXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBhbkV4ZWN1dGVyTmFtZVxyXG5cdCAqL1xyXG5cdHN0YXRpYyBzZXQgZGVmYXVsdEV4ZWN1dGVyKGFuRXhlY3V0ZXIpIHtcclxuXHRcdGlmICh0eXBlb2YgYW5FeGVjdXRlciA9PT0gXCJmdW5jdGlvblwiKSBERUZBVUxUX0VYRUNVVEVSID0gYW5FeGVjdXRlcjtcclxuXHRcdGVsc2UgREVGQVVMVF9FWEVDVVRFUiA9IGdldEV4ZWN1dGVyVHlwZShhbkV4ZWN1dGVyKTtcclxuXHRcdGNvbnNvbGUuaW5mbyhgQ2hhbmdlZCBkZWZhdWx0IGV4ZWN1dGVyIGZvciBFeHByZXNzaW9uUmVzb2x2ZXIhYCk7XHJcblx0fVxyXG5cclxuXHRzdGF0aWMgZ2V0IGRlZmF1bHRFeGVjdXRlcigpIHtcclxuXHRcdHJldHVybiBERUZBVUxUX0VYRUNVVEVSO1xyXG5cdH1cclxuXHJcblx0LyoqIEB0eXBlIHtzdHJpbmd8bnVsbH0gKi9cclxuXHQjbmFtZSA9IG51bGw7XHJcblx0LyoqIEB0eXBlIHtFeHByZXNzaW9uUmVzb2x2ZXJ8bnVsbH0gKi9cclxuXHQjcGFyZW50ID0gbnVsbDtcclxuXHQvKiogQHR5cGUge2Z1bmN0aW9ufG51bGx9ICovXHJcblx0I2V4ZWN1dGVyID0gbnVsbDtcclxuXHQvKiogQHR5cGUge1Byb3h5fG51bGx9ICovXHJcblx0I2NvbnRleHQgPSBudWxsO1xyXG5cdC8qKiBAdHlwZSB7UmVzb2x2ZXJDb250ZXh0SGFuZGxlfG51bGx9ICovXHJcblx0I2NvbnRleHRIYW5kbGUgPSBudWxsO1xyXG5cclxuXHQvKipcclxuXHQgKiBDcmVhdGVzIGFuIGluc3RhbmNlIG9mIEV4cHJlc3Npb25SZXNvbHZlci5cclxuXHQgKiBAZGF0ZSAzLzEwLzIwMjQgLSA3OjI3OjU3IFBNXHJcblx0ICpcclxuXHQgKiBAY29uc3RydWN0b3JcclxuXHQgKiBAcGFyYW0ge3sgY29udGV4dD86IGFueTsgcGFyZW50PzogYW55OyBuYW1lPzogYW55OyB9fSBwYXJhbTBcclxuXHQgKiBAcGFyYW0ge29iamVjdH0gW3BhcmFtMC5jb250ZXh0PUdMT0JBTF1cclxuXHQgKiBAcGFyYW0ge0V4cHJlc3Npb25SZXNvbHZlcn0gW3BhcmFtMC5wYXJlbnQ9bnVsbF1cclxuXHQgKiBAcGFyYW0gez9zdHJpbmd9IFtwYXJhbTAubmFtZT1udWxsXVxyXG5cdCAqL1xyXG5cdGNvbnN0cnVjdG9yKHsgY29udGV4dCA9IEdMT0JBTCwgcGFyZW50ID0gbnVsbCwgbmFtZSA9IG51bGwsIGV4ZWN1dGVyIH0gPSB7fSkge1xyXG5cdFx0dGhpcy4jcGFyZW50ID0gcGFyZW50IGluc3RhbmNlb2YgRXhwcmVzc2lvblJlc29sdmVyID8gcGFyZW50IDogbnVsbDtcclxuXHRcdHRoaXMuI25hbWUgPSBuYW1lO1xyXG5cdFx0dGhpcy4jY29udGV4dEhhbmRsZSA9IG5ldyBDb250ZXh0UHJveHkoY29udGV4dCwgdGhpcy4jcGFyZW50ID8gdGhpcy4jcGFyZW50LmNvbnRleHRIYW5kbGUgOiBudWxsKTtcclxuXHRcdHRoaXMuI2NvbnRleHQgPSB0aGlzLiNjb250ZXh0SGFuZGxlLnByb3h5O1xyXG5cdFx0dGhpcy4jZXhlY3V0ZXIgPSB0eXBlb2YgZXhlY3V0ZXIgPT09IFwic3RyaW5nXCIgPyBnZXRFeGVjdXRlclR5cGUoZXhlY3V0ZXIpIDogdW5kZWZpbmVkO1xyXG5cdH1cclxuXHJcblx0Z2V0IG5hbWUoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy4jbmFtZTtcclxuXHR9XHJcblxyXG5cdGdldCBwYXJlbnQoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy4jcGFyZW50O1xyXG5cdH1cclxuXHJcblx0Z2V0IGNvbnRleHQoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy4jY29udGV4dDtcclxuXHR9XHJcblxyXG5cdGdldCBjb250ZXh0SGFuZGxlKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuI2NvbnRleHRIYW5kbGU7XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBnZXQgY2hhaW4gcGF0aFxyXG5cdCAqXHJcblx0ICogQHJlYWRvbmx5XHJcblx0ICogQHJldHVybnMge3N0cmluZ31cclxuXHQgKi9cclxuXHRnZXQgY2hhaW4oKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5wYXJlbnQgPyB0aGlzLnBhcmVudC5jaGFpbiArIFwiL1wiICsgdGhpcy5uYW1lIDogXCIvXCIgKyB0aGlzLm5hbWU7XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBnZXQgZWZmZWN0aXZlIGNoYWluIHBhdGhcclxuXHQgKlxyXG5cdCAqIEByZWFkb25seVxyXG5cdCAqIEByZXR1cm5zIHtzdHJpbmd9XHJcblx0ICovXHJcblx0Z2V0IGVmZmVjdGl2ZUNoYWluKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMucGFyZW50ID8gdGhpcy5wYXJlbnQuZWZmZWN0aXZlQ2hhaW4gKyBcIi9cIiArIHRoaXMubmFtZSA6IFwiL1wiICsgdGhpcy5uYW1lO1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogZ2V0IGNvbnRleHQgY2hhaW5cclxuXHQgKlxyXG5cdCAqIEByZWFkb25seVxyXG5cdCAqIEByZXR1cm5zIHtDb250ZXh0W119XHJcblx0ICovXHJcblx0Z2V0IGNvbnRleHRDaGFpbigpIHtcclxuXHRcdGNvbnN0IHJlc3VsdCA9IFtdO1xyXG5cdFx0bGV0IHJlc29sdmVyID0gdGhpcztcclxuXHRcdHdoaWxlIChyZXNvbHZlcikge1xyXG5cdFx0XHRpZiAocmVzb2x2ZXIuY29udGV4dCkgcmVzdWx0LnB1c2gocmVzb2x2ZXIuY29udGV4dCk7XHJcblxyXG5cdFx0XHRyZXNvbHZlciA9IHJlc29sdmVyLnBhcmVudDtcclxuXHRcdH1cclxuXHJcblx0XHRyZXR1cm4gcmVzdWx0O1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogZ2V0IGRhdGEgZnJvbSBjb250ZXh0XHJcblx0ICpcclxuXHQgKiBAcGFyYW0ge3N0cmluZ30ga2V5XHJcblx0ICogQHBhcmFtIHs/c3RyaW5nfSBmaWx0ZXJcclxuXHQgKiBAcmV0dXJucyB7Kn1cclxuXHQgKi9cclxuXHRnZXREYXRhKGtleSwgZmlsdGVyKSB7XHJcblx0XHRpZiAoIWtleSkgcmV0dXJuIHRoaXMuY29udGV4dDtcclxuXHRcdGVsc2UgaWYgKGZpbHRlciAmJiBmaWx0ZXIgIT0gdGhpcy5uYW1lKSB7XHJcblx0XHRcdGlmICh0aGlzLnBhcmVudCkgdGhpcy5wYXJlbnQuZ2V0RGF0YShrZXksIGZpbHRlcik7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRyZXR1cm4gdGhpcy5jb250ZXh0W2tleV07XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiB1cGRhdGUgZGF0YSBhdCBjb250ZXh0XHJcblx0ICpcclxuXHQgKiBAcGFyYW0ge3N0cmluZ30ga2V5XHJcblx0ICogQHBhcmFtIHsqfSB2YWx1ZVxyXG5cdCAqIEBwYXJhbSB7P3N0cmluZ30gZmlsdGVyXHJcblx0ICovXHJcblx0dXBkYXRlRGF0YShrZXksIHZhbHVlLCBmaWx0ZXIpIHtcclxuXHRcdGlmICgha2V5KSByZXR1cm47XHJcblx0XHRlbHNlIGlmIChmaWx0ZXIgJiYgZmlsdGVyICE9IHRoaXMubmFtZSkge1xyXG5cdFx0XHRpZiAodGhpcy5wYXJlbnQpIHRoaXMucGFyZW50LnVwZGF0ZURhdGEoa2V5LCB2YWx1ZSwgZmlsdGVyKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHRoaXMuY29udGV4dFtrZXldID0gdmFsdWU7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBtZXJnZSBjb250ZXh0IG9iamVjdFxyXG5cdCAqXHJcblx0ICogQHBhcmFtIHtvYmplY3R9IGNvbnRleHRcclxuXHQgKiBAcGFyYW0gez9zdHJpbmd9IGZpbHRlclxyXG5cdCAqL1x0XHJcblx0bWVyZ2VDb250ZXh0KGNvbnRleHQsIGZpbHRlcikge1xyXG5cdFx0aWYgKGZpbHRlciAmJiBmaWx0ZXIgIT0gdGhpcy5uYW1lKSB7XHJcblx0XHRcdGlmICh0aGlzLnBhcmVudCkgdGhpcy5wYXJlbnQubWVyZ2VDb250ZXh0KGNvbnRleHQsIGZpbHRlcik7XHJcblx0XHR9IGVsc2UgXHJcblx0XHRcdHRoaXMuI2NvbnRleHRIYW5kbGUubWVyZ2VEYXRhKGNvbnRleHQpO1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogcmVzb2x2ZWQgYW4gZXhwcmVzc2lvbiBzdHJpbmcgdG8gZGF0YVxyXG5cdCAqXHJcblx0ICogQGFzeW5jXHJcblx0ICogQHBhcmFtIHtzdHJpbmd9IGFFeHByZXNzaW9uXHJcblx0ICogQHBhcmFtIHs/Kn0gYURlZmF1bHRcclxuXHQgKiBAcmV0dXJucyB7UHJvbWlzZTwqPn1cclxuXHQgKi9cclxuXHRhc3luYyByZXNvbHZlKGFFeHByZXNzaW9uLCBhRGVmYXVsdCkge1xyXG5cdFx0Y29uc3QgZGVmYXVsdFZhbHVlID0gYXJndW1lbnRzLmxlbmd0aCA9PSAyID8gdG9EZWZhdWx0VmFsdWUoYURlZmF1bHQpIDogREVGQVVMVF9OT1RfREVGSU5FRDtcclxuXHRcdHRyeSB7XHJcblx0XHRcdGFFeHByZXNzaW9uID0gYUV4cHJlc3Npb24udHJpbSgpO1xyXG5cdFx0XHRpZiAoYUV4cHJlc3Npb24uc3RhcnRzV2l0aChcIlxcXFwke1wiKSkgcmV0dXJuIGFFeHByZXNzaW9uLnN1YnN0cmluZygxKTtcclxuXHRcdFx0ZWxzZSBpZiAoYUV4cHJlc3Npb24uc3RhcnRzV2l0aChcIiR7XCIpICYmIGFFeHByZXNzaW9uLmVuZHNXaXRoKFwifVwiKSkgcmV0dXJuIGF3YWl0IHJlc29sdmUodGhpcy4jZXhlY3V0ZXIsIHRoaXMsIG5vcm1hbGl6ZShhRXhwcmVzc2lvbi5zdWJzdHJpbmcoMiwgYUV4cHJlc3Npb24ubGVuZ3RoIC0gMSkpLCBudWxsLCBkZWZhdWx0VmFsdWUpO1x0XHRcdFxyXG5cdFx0XHRlbHNlIHJldHVybiBhd2FpdCByZXNvbHZlKHRoaXMuI2V4ZWN1dGVyLCB0aGlzLCBub3JtYWxpemUoYUV4cHJlc3Npb24pLCBudWxsLCBkZWZhdWx0VmFsdWUpO1xyXG5cdFx0fSBjYXRjaCAoZSkge1xyXG5cdFx0XHRjb25zb2xlLmVycm9yKCdlcnJvciBhdCBleGVjdXRpbmcgc3RhdG1lbnRcIicsIGFFeHByZXNzaW9uLCAnXCI6JywgZSk7XHJcblx0XHRcdHJldHVybiBkZWZhdWx0VmFsdWUuaGFzVmFsdWUgPyBkZWZhdWx0VmFsdWUudmFsdWUgOiBhRXhwcmVzc2lvbjtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIHJlcGxhY2UgYWxsIGV4cHJlc3Npb25zIGF0IGEgc3RyaW5nXHQgKlxyXG5cdCAqIEBhc3luY1xyXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBhVGV4dFxyXG5cdCAqIEBwYXJhbSB7Pyp9IGFEZWZhdWx0XHJcblx0ICogQHJldHVybnMge1Byb21pc2U8Kj59XHJcblx0ICovXHJcblx0YXN5bmMgcmVzb2x2ZVRleHQoYVRleHQsIGFEZWZhdWx0KSB7XHJcblx0XHRsZXQgdGV4dCA9IGFUZXh0O1xyXG5cdFx0bGV0IHRlbXAgPSBhVGV4dDsgLy8gcmVxdWlyZWQgdG8gcHJldmVudCBpbmZpbml0eSBsb29wXHJcblx0XHRsZXQgbWF0Y2ggPSBFWFBSRVNTSU9OLmV4ZWModGV4dCk7XHJcblx0XHRjb25zdCBkZWZhdWx0VmFsdWUgPSBhcmd1bWVudHMubGVuZ3RoID09IDIgPyB0b0RlZmF1bHRWYWx1ZShhRGVmYXVsdCkgOiBERUZBVUxUX05PVF9ERUZJTkVEO1xyXG5cdFx0d2hpbGUgKG1hdGNoICE9IG51bGwpIHtcclxuXHRcdFx0Y29uc3QgcmVzdWx0ID0gYXdhaXQgcmVzb2x2ZU1hdGNoKHRoaXMuI2V4ZWN1dGVyLCB0aGlzLCBtYXRjaCwgZGVmYXVsdFZhbHVlKTtcclxuXHRcdFx0dGVtcCA9IHRlbXAuc3BsaXQobWF0Y2hbMF0pLmpvaW4oKTsgLy8gcmVtb3ZlIGN1cnJlbnQgbWF0Y2ggZm9yIG5leHQgbG9vcFxyXG5cdFx0XHR0ZXh0ID0gdGV4dC5zcGxpdChtYXRjaFswXSkuam9pbih0eXBlb2YgcmVzdWx0ID09PSBcInVuZGVmaW5lZFwiID8gXCJ1bmRlZmluZWRcIiA6IHJlc3VsdCA9PSBudWxsID8gXCJudWxsXCIgOiByZXN1bHQpO1xyXG5cdFx0XHRtYXRjaCA9IEVYUFJFU1NJT04uZXhlYyh0ZW1wKTtcclxuXHRcdH1cclxuXHRcdHJldHVybiB0ZXh0O1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogcmVzb2x2ZSBhbiBleHByZXNzaW9uIHN0cmluZyB0byBkYXRhXHJcblx0ICpcclxuXHQgKiBAc3RhdGljXHJcblx0ICogQGFzeW5jXHJcblx0ICogQHBhcmFtIHtzdHJpbmd9IGFFeHByZXNzaW9uXHJcblx0ICogQHBhcmFtIHs/b2JqZWN0fSBhQ29udGV4dFxyXG5cdCAqIEBwYXJhbSB7Pyp9IGFEZWZhdWx0XHJcblx0ICogQHBhcmFtIHs/bnVtYmVyfSBhVGltZW91dFxyXG5cdCAqIEByZXR1cm5zIHtQcm9taXNlPCo+fVxyXG5cdCAqL1xyXG5cdHN0YXRpYyBhc3luYyByZXNvbHZlKGFFeHByZXNzaW9uLCBhQ29udGV4dCwgYURlZmF1bHQsIGFUaW1lb3V0KSB7XHJcblx0XHRjb25zdCByZXNvbHZlciA9IG5ldyBFeHByZXNzaW9uUmVzb2x2ZXIoeyBjb250ZXh0OiBhQ29udGV4dCB9KTtcclxuXHRcdGNvbnN0IGRlZmF1bHRWYWx1ZSA9IGFyZ3VtZW50cy5sZW5ndGggPiAyID8gdG9EZWZhdWx0VmFsdWUoYURlZmF1bHQpIDogREVGQVVMVF9OT1RfREVGSU5FRDtcclxuXHRcdGlmICh0eXBlb2YgYVRpbWVvdXQgPT09IFwibnVtYmVyXCIgJiYgYVRpbWVvdXQgPiAwKVxyXG5cdFx0XHRyZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcclxuXHRcdFx0XHRzZXRUaW1lb3V0KCgpID0+IHtcclxuXHRcdFx0XHRcdHJlc29sdmUocmVzb2x2ZXIucmVzb2x2ZShhRXhwcmVzc2lvbiwgZGVmYXVsdFZhbHVlKSk7XHJcblx0XHRcdFx0fSwgYVRpbWVvdXQpO1xyXG5cdFx0XHR9KTtcclxuXHJcblx0XHRyZXR1cm4gcmVzb2x2ZXIucmVzb2x2ZShhRXhwcmVzc2lvbiwgZGVmYXVsdFZhbHVlKTtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIHJlcGxhY2UgZXhwcmVzc2lvbiBhdCB0ZXh0XHJcblx0ICpcclxuXHQgKiBAc3RhdGljXHJcblx0ICogQGFzeW5jXHJcblx0ICogQHBhcmFtIHtzdHJpbmd9IGFUZXh0XHJcblx0ICogQHBhcmFtIHs/b2JqZWN0fSBhQ29udGV4dFxyXG5cdCAqIEBwYXJhbSB7Pyp9IGFEZWZhdWx0XHJcblx0ICogQHBhcmFtIHs/bnVtYmVyfSBhVGltZW91dFxyXG5cdCAqIEByZXR1cm5zIHtQcm9taXNlPCo+fVxyXG5cdCAqL1xyXG5cdHN0YXRpYyBhc3luYyByZXNvbHZlVGV4dChhVGV4dCwgYUNvbnRleHQsIGFEZWZhdWx0LCBhVGltZW91dCkge1xyXG5cdFx0Y29uc3QgcmVzb2x2ZXIgPSBuZXcgRXhwcmVzc2lvblJlc29sdmVyKHsgY29udGV4dDogYUNvbnRleHQgfSk7XHJcblx0XHRjb25zdCBkZWZhdWx0VmFsdWUgPSBhcmd1bWVudHMubGVuZ3RoID4gMiA/IHRvRGVmYXVsdFZhbHVlKGFEZWZhdWx0KSA6IERFRkFVTFRfTk9UX0RFRklORUQ7XHJcblx0XHRpZiAodHlwZW9mIGFUaW1lb3V0ID09PSBcIm51bWJlclwiICYmIGFUaW1lb3V0ID4gMClcclxuXHRcdFx0cmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XHJcblx0XHRcdFx0c2V0VGltZW91dCgoKSA9PiB7XHJcblx0XHRcdFx0XHRyZXNvbHZlKHJlc29sdmVyLnJlc29sdmVUZXh0KGFUZXh0LCBkZWZhdWx0VmFsdWUpKTtcclxuXHRcdFx0XHR9LCBhVGltZW91dCk7XHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdHJldHVybiByZXNvbHZlci5yZXNvbHZlVGV4dChhVGV4dCwgZGVmYXVsdFZhbHVlKTtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIGJ1aWxkIGEgc2VjdXJlIGNvbnRleHQgb2JqZWN0XHJcblx0ICpcclxuXHQgKiBAc3RhdGljXHJcblx0IFxyXG5cdCAqIEBwYXJhbSB7b2JqZWN0fSBhcmdcclxuXHQgKiBAcGFyYW0ge29iamVjdH0gYXJnLmNvbnRleHRcclxuXHQgKiBAcGFyYW0ge2Z1bmN0aW9ufSBhcmcucHJvcEZpbHRlclxyXG5cdCAqIEBwYXJhbSB7eyBkZWVwOiBib29sZWFuOyB9fSBbYXJnLm9wdGlvbj17IGRlZXA6IHRydWUgfV1cclxuXHQgKiBAcGFyYW0ge3N0cmluZ30gYXJnLm5hbWVcclxuXHQgKiBAcGFyYW0ge0V4cHJlc3Npb25SZXNvbHZlcn0gYXJnLnBhcmVudFxyXG5cdCAqIEByZXR1cm5zIHtvYmplY3R9XHJcblx0ICovXHJcblx0c3RhdGljIGJ1aWxkU2VjdXJlKHsgY29udGV4dCwgcHJvcEZpbHRlciwgb3B0aW9uID0geyBkZWVwOiB0cnVlIH0sIG5hbWUsIHBhcmVudCB9KSB7XHJcblx0XHRjb250ZXh0ID0gT2JqZWN0VXRpbHMuZmlsdGVyKHsgZGF0YTogY29udGV4dCwgcHJvcEZpbHRlciwgb3B0aW9uIH0pO1xyXG5cdFx0cmV0dXJuIG5ldyBFeHByZXNzaW9uUmVzb2x2ZXIoeyBjb250ZXh0LCBuYW1lLCBwYXJlbnQgfSk7XHJcblx0fVxyXG59XHJcblxyXG4iLCJpbXBvcnQgR0xPQkFMIGZyb20gXCJAZGVmYXVsdC1qcy9kZWZhdWx0anMtY29tbW9uLXV0aWxzL3NyYy9HbG9iYWwuanNcIjtcclxuaW1wb3J0IEV4cHJlc3Npb25SZXNvbHZlciBmcm9tIFwiLi9FeHByZXNzaW9uUmVzb2x2ZXJcIjtcclxuXHJcblxyXG5jb25zdCBjcmVhdGVHbG9iYWxDYWNoZVdyYXBwZXIgPSAoaGFuZGxlKSA9PiB7XHJcblxyXG5cdHJldHVybiB7XHJcblx0XHRoYXM6IChwcm9wZXJ0eSkgPT4ge1xyXG5cdFx0XHRyZXR1cm4gdHJ1ZTtcclxuXHRcdH0sXHJcblx0XHRnZXQ6IChwcm9wZXJ0eSkgPT4ge1xyXG5cdFx0XHRyZXR1cm4gaGFuZGxlXHJcblx0XHR9LFxyXG5cdFx0c2V0OiAocHJvcGVydHksIHZhbHVlKSA9PiB7XHRcdFx0XHJcblx0XHR9LFxyXG5cdFx0ZGVsZXRlOiAocHJvcGVydHkpID0+IHtcclxuXHRcdFx0ZGVsZXRlIEdMT0JBTFtwcm9wZXJ0eV07XHJcblx0XHR9LFxyXG5cdFx0a2V5czogKCkgPT4ge1xyXG5cdFx0XHRyZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoR0xPQkFMKTtcclxuXHRcdH1cclxuXHR9XHRcclxufVxyXG5cclxuXHJcbi8qKlxyXG4gKiBDb250ZXh0IG9iamVjdCB0byBoYW5kbGUgZGF0YSBhY2Nlc3NcclxuICpcclxuICogQGV4cG9ydFxyXG4gKiBAY2xhc3MgUmVzb2x2ZXJDb250ZXh0SGFuZGxlXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZXNvbHZlckNvbnRleHRIYW5kbGUge1xyXG5cdC8qKiBAdHlwZSB7UHJveHl8bnVsbH0gKi9cclxuXHQjcHJveHkgPSBudWxsO1xyXG5cdC8qKiBAdHlwZSB7UmVzb2x2ZXJDb250ZXh0SGFuZGxlfG51bGx9ICovXHJcblx0I3BhcmVudCA9IG51bGw7XHJcblx0LyoqIEB0eXBlIHtvYmplY3R8bnVsbH0gKi9cclxuXHQjZGF0YSA9IG51bGw7XHJcblx0LyoqIEB0eXBlIHtNYXA8c3RyaW5nLFJlc29sdmVyQ29udGV4dEhhbmRsZT58bnVsbH0gKi9cclxuXHQjY2FjaGUgPSBudWxsO1xyXG5cclxuXHQvKipcclxuXHQgKiBDcmVhdGVzIGFuIGluc3RhbmNlIG9mIENvbnRleHQuXHJcblx0ICpcclxuXHQgKiBAY29uc3RydWN0b3JcclxuXHQgKiBAcGFyYW0ge29iamVjdH0gZGF0YVxyXG5cdCAqIEBwYXJhbSB7RXhwcmVzc2lvblJlc29sdmVyfSByZXNvbHZlclxyXG5cdCAqL1xyXG5cdGNvbnN0cnVjdG9yKGRhdGEsIHBhcmVudCkge1xyXG5cdFx0dGhpcy4jZGF0YSA9IGRhdGEgfHwge307XHJcblx0XHR0aGlzLiNwYXJlbnQgPSBwYXJlbnQgPyBwYXJlbnQgOiBudWxsO1xyXG5cdFx0dGhpcy4jY2FjaGUgPSB0aGlzLiNpbml0UHJvcGVydHlDYWNoZSgpO1xyXG5cclxuXHRcdHRoaXMuI3Byb3h5ID0gbmV3IFByb3h5KHRoaXMuI2RhdGEsIHtcclxuXHRcdFx0aGFzOiAoZGF0YSwgcHJvcGVydHkpID0+IHtcclxuXHRcdFx0XHQvL2NvbnNvbGUubG9nKFwiaGFzIHByb3BlcnR5OlwiLCBwcm9wZXJ0eSk7XHJcblx0XHRcdFx0cmV0dXJuIHRoaXMuI2hhc1Byb3BlcnR5KHByb3BlcnR5KTtcclxuXHRcdFx0fSxcclxuXHRcdFx0Z2V0OiAoZGF0YSwgcHJvcGVydHkpID0+IHtcclxuXHRcdFx0XHQvL2NvbnNvbGUubG9nKFwiZ2V0IHByb3BlcnR5OlwiLCBwcm9wZXJ0eSk7XHJcblx0XHRcdFx0Y29uc3QgcHJveHkgPSB0aGlzLiNnZXRQcm9wZXJ0eURlZihwcm9wZXJ0eSk7XHJcblx0XHRcdFx0cmV0dXJuIHByb3h5ID8gcHJveHkuI2dldFByb3BlcnR5KHByb3BlcnR5KSA6IHVuZGVmaW5lZDtcclxuXHRcdFx0fSxcclxuXHRcdFx0c2V0OiAoZGF0YSwgcHJvcGVydHksIHZhbHVlKSA9PiB7XHJcblx0XHRcdFx0Ly9jb25zb2xlLmxvZyhcInNldCBwcm9wZXJ0eTpcIiwgcHJvcGVydHksIFwiPVwiLCB2YWx1ZSk7XHJcblx0XHRcdFx0Y29uc3QgcHJveHkgPSB0aGlzLiNnZXRQcm9wZXJ0eURlZihwcm9wZXJ0eSk7XHJcblx0XHRcdFx0aWYgKHByb3h5KSByZXR1cm4gcHJveHkuI3NldFByb3BlcnR5KHByb3BlcnR5LCB2YWx1ZSk7XHJcblx0XHRcdFx0ZWxzZSByZXR1cm4gdGhpcy4jc2V0UHJvcGVydHkocHJvcGVydHksIHZhbHVlKTtcclxuXHRcdFx0fSxcclxuXHRcdFx0ZGVsZXRlUHJvcGVydHk6IChkYXRhLCBwcm9wZXJ0eSkgPT4ge1xyXG5cdFx0XHRcdHJldHVybiB0aGlzLiNkZWxldGVQcm9wZXJ0eShwcm9wZXJ0eSk7XHJcblx0XHRcdH0sXHJcblx0XHRcdG93bktleXM6IChkYXRhKSA9PiB7XHJcblx0XHRcdFx0Ly9jb25zb2xlLmxvZyhcIm93bktleXNcIik7XHJcblx0XHRcdFx0Y29uc3QgcmVzdWx0ID0gbmV3IFNldCgpO1xyXG5cdFx0XHRcdGxldCBwcm94eSA9IHRoaXM7XHJcblx0XHRcdFx0d2hpbGUgKHByb3h5KSB7XHJcblx0XHRcdFx0XHRmb3IgKGxldCBrZXkgb2YgcHJveHkuI2NhY2hlLmtleXMoKSkge1xyXG5cdFx0XHRcdFx0XHRyZXN1bHQuYWRkKGtleSk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRwcm94eSA9IHByb3h5LiNwYXJlbnQ7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdHJldHVybiBBcnJheS5mcm9tKHJlc3VsdCk7XHJcblx0XHRcdH0sXHJcblxyXG5cdFx0XHQvL0BUT0RPIG5lZWQgdG8gc3VwcG9ydCB0aGUgb3RoZXIgcHJveHkgYWN0aW9uc1xyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBAcmVhZG9ubHlcclxuXHQgKiBAdHlwZSB7UHJveHl9XHJcblx0ICovXHJcblx0Z2V0IHByb3h5KCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuI3Byb3h5O1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogQHJlYWRvbmx5XHJcblx0ICogQHR5cGUge1Jlc29sdmVyQ29udGV4dEhhbmRsZXxudWxsfVxyXG5cdCAqL1xyXG5cdGdldCBwYXJlbnQoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy4jcGFyZW50O1xyXG5cdH1cclxuXHJcblx0dXBkYXRlRGF0YShkYXRhKSB7XHJcblx0XHR0aGlzLiNkYXRhID0gZGF0YSB8fCB7fTtcclxuXHRcdHRoaXMuI2NhY2hlID0gdGhpcy4jaW5pdFByb3BlcnR5Q2FjaGUoKTtcclxuXHR9XHJcblxyXG5cdG1lcmdlRGF0YShkYXRhKSB7XHJcblx0XHRpZih0eXBlb2YgZGF0YSAhPT0gJ29iamVjdCcgfHwgZGF0YSA9PSBudWxsKSByZXR1cm47XHJcblx0XHRPYmplY3QuYXNzaWduKHRoaXMuI2RhdGEsIGRhdGEpO1xyXG5cdFx0dGhpcy4jY2FjaGUgPSB0aGlzLiNpbml0UHJvcGVydHlDYWNoZSgpO1xyXG5cdH1cclxuXHJcblx0cmVzZXRDYWNoZSgpIHtcclxuXHRcdHRoaXMuI2NhY2hlID0gdGhpcy4jaW5pdFByb3BlcnR5Q2FjaGUoKTtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqXHJcblx0ICogQHJldHVybnMge01hcDxzdHJpbmcsUHJvcGVydHlEZWZpbml0aW9uPn1cclxuXHQgKi9cclxuXHQjaW5pdFByb3BlcnR5Q2FjaGUoKSB7XHJcblx0XHRjb25zdCBkYXRhID0gdGhpcy4jZGF0YTtcclxuXHRcdGlmKGRhdGEgPT0gR0xPQkFMKSBcclxuXHRcdFx0cmV0dXJuIGNyZWF0ZUdsb2JhbENhY2hlV3JhcHBlcih0aGlzKTtcdFxyXG5cclxuXHRcdGNvbnN0IGNhY2hlID0gbmV3IE1hcCgpO1xyXG5cdFx0Zm9yIChsZXQgcHJvcGVydHkgb2YgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoZGF0YSkpIGNhY2hlLnNldChwcm9wZXJ0eSwgdGhpcyk7XHJcblxyXG5cdFx0cmV0dXJuIGNhY2hlO1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogQHBhcmFtIHtzdHJpbmd9IHByb3BlcnR5XHJcblx0ICogQHJldHVybnMge1Jlc29sdmVyQ29udGV4dEhhbmRsZXxudWxsfVxyXG5cdCAqL1xyXG5cdCNnZXRQcm9wZXJ0eURlZihwcm9wZXJ0eSkge1xyXG5cdFx0aWYgKHRoaXMuI2NhY2hlLmhhcyhwcm9wZXJ0eSkpIHJldHVybiB0aGlzLiNjYWNoZS5nZXQocHJvcGVydHkpO1xyXG5cdFx0bGV0IHBhcmVudCA9IHRoaXMuI3BhcmVudDtcclxuXHRcdHdoaWxlIChwYXJlbnQpIHtcclxuXHRcdFx0aWYgKHBhcmVudC4jY2FjaGUuaGFzKHByb3BlcnR5KSkgcmV0dXJuIHBhcmVudC4jY2FjaGUuZ2V0KHByb3BlcnR5KTtcclxuXHRcdFx0cGFyZW50ID0gcGFyZW50LiNwYXJlbnQ7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gbnVsbDtcclxuXHR9XHJcblxyXG5cdCNoYXNQcm9wZXJ0eShwcm9wZXJ0eSkge1xyXG5cdFx0cmV0dXJuIHRoaXMuI2dldFByb3BlcnR5RGVmKHByb3BlcnR5KSAhPSBudWxsO1xyXG5cdH1cclxuXHQjZ2V0UHJvcGVydHkocHJvcGVydHkpIHtcclxuXHRcdC8vQFRPRE8gd3JpdGUgdGVzdHMhISFcclxuXHRcdHJldHVybiB0aGlzLiNkYXRhW3Byb3BlcnR5XTtcclxuXHR9XHJcblx0I3NldFByb3BlcnR5KHByb3BlcnR5LCB2YWx1ZSkge1xyXG5cdFx0Ly9AVE9ETyB3b3VsZCBzdXBwb3J0IHRoaXMgYWN0aW9uIG9uIGFuIHByb3hpZWQgcmVzb2x2ZXIgY29udGV4dD8/PyB3cml0ZSB0ZXN0cyEhIVxyXG5cdFx0Y29uc29sZS5sb2coXCJzZXQgcHJvcGVydHkgZGF0YTpcIiwgcHJvcGVydHksIFwiPVwiLCB2YWx1ZSk7XHJcblx0XHR0aGlzLiNkYXRhW3Byb3BlcnR5XSA9IHZhbHVlO1xyXG5cdFx0dGhpcy4jY2FjaGUuc2V0KHByb3BlcnR5LCB0aGlzKTtcclxuXHRcdHJldHVybiB0cnVlO1xyXG5cdH1cclxuXHQjZGVsZXRlUHJvcGVydHkocHJvcGVydHkpIHtcclxuXHRcdGNvbnN0IHByb3BlcnR5RGVmID0gdGhpcy4jY2FjaGUuZ2V0KHByb3BlcnR5KTtcclxuXHRcdGlmIChwcm9wZXJ0eURlZikge1xyXG5cdFx0XHRkZWxldGUgcHJvcGVydHlEZWYuZGF0YVtwcm9wZXJ0eV07XHJcblx0XHRcdHRoaXMuI2NhY2hlLmRlbGV0ZShwcm9wZXJ0eSk7XHJcblx0XHR9XHJcblx0fVxyXG59XHJcbiIsImV4cG9ydCBjb25zdCBzdHJpbmdUb0hhc2hjb2RlID0gKGFTdHJpbmcpID0+IHtcclxuICAgIGxldCBoYXNoID0gMDtcclxuICAgIGlmIChhU3RyaW5nLmxlbmd0aCA9PSAwKSByZXR1cm4gaGFzaDtcclxuICAgIGNvbnN0IGxlbmd0aCA9IGFTdHJpbmcubGVuZ3RoO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xyXG4gICAgICBjb25zdCBjaGFyID0gYVN0cmluZy5jaGFyQ29kZUF0KGkpO1xyXG4gICAgICBoYXNoID0gKChoYXNoIDw8IDUpIC0gaGFzaCkgKyBjaGFyO1xyXG4gICAgICBoYXNoIHw9IDA7IC8vIENvbnZlcnQgdG8gMzJiaXQgaW50ZWdlclxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGhhc2g7XHJcbiAgfTsiLCJpbXBvcnQgeyByZWdpc3RyYXRlIH0gZnJvbSBcIi4uL0V4ZWN1dGVyUmVnaXN0cnkuanNcIjtcclxuaW1wb3J0IHsgc3RyaW5nVG9IYXNoY29kZSB9IGZyb20gXCIuLi9VdGlscy5qc1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IEVYRUNVVEVSTkFNRSA9IFwiY29udGV4dC1kZWNvbnN0cnVjdGlvbi1leGVjdXRlclwiO1xyXG5jb25zdCBFWFBSRVNTSU9OX0NBQ0hFID0gbmV3IE1hcCgpO1xyXG4vKipcclxuICpcclxuICogQHBhcmFtIHtzdHJpbmd9IGFTdGF0ZW1lbnRcclxuICogQHJldHVybnMge0Z1bmN0aW9ufVxyXG4gKi9cclxuY29uc3QgZ2VuZXJhdGUgPSAoYVN0YXRlbWVudCwgY29udGV4dFByb3BlcnRpZXMpID0+IHtcclxuXHRjb25zdCBjb2RlID0gYFxyXG5yZXR1cm4gKGFzeW5jICh7JHtjb250ZXh0UHJvcGVydGllc319KSA9PiB7XHJcbiAgICB0cnl7XHJcbiAgICAgICAgcmV0dXJuICR7YVN0YXRlbWVudH1cclxuICAgIH1jYXRjaChlKXtcclxuICAgICAgICB0aHJvdyBlO1xyXG4gICAgfVxyXG59KShjb250ZXh0IHx8IHt9KTtgO1xyXG5cclxuXHQvL2NvbnNvbGUubG9nKFwiY29kZVwiLCBjb2RlKTtcclxuXHJcblx0cmV0dXJuIG5ldyBGdW5jdGlvbihcImNvbnRleHRcIiwgY29kZSk7XHJcbn07XHJcblxyXG4vKipcclxuICpcclxuICogQHBhcmFtIHtzdHJpbmd9IGFTdGF0ZW1lbnRcclxuICogQHJldHVybnMge0Z1bmN0aW9ufVxyXG4gKi9cclxuY29uc3QgZ2V0T3JDcmVhdGVGdW5jdGlvbiA9IChhU3RhdGVtZW50LCBjb250ZXh0UHJvcGVydGllcykgPT4ge1xyXG5cdGNvbnN0IGNhY2hlS2V5ID0gc3RyaW5nVG9IYXNoY29kZShjb250ZXh0UHJvcGVydGllcyArIFwiOjpcIiArIGFTdGF0ZW1lbnQpO1xyXG5cdGlmIChFWFBSRVNTSU9OX0NBQ0hFLmhhcyhjYWNoZUtleSkpIHtcclxuXHRcdHJldHVybiBFWFBSRVNTSU9OX0NBQ0hFLmdldChjYWNoZUtleSk7XHJcblx0fVxyXG5cdGNvbnN0IGV4cHJlc3Npb24gPSBnZW5lcmF0ZShhU3RhdGVtZW50LCBjb250ZXh0UHJvcGVydGllcyk7XHJcblx0RVhQUkVTU0lPTl9DQUNIRS5zZXQoY2FjaGVLZXksIGV4cHJlc3Npb24pO1xyXG5cdHJldHVybiBleHByZXNzaW9uO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIERlc2NyaXB0aW9uIHBsYWNlaG9sZGVyXHJcbiAqXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBhU3RhdGVtZW50XHJcbiAqIEBwYXJhbSB7b2JqZWN0fSBhQ29udGV4dFxyXG4gKiBAcmV0dXJucyB7UHJvbWlzZX1cclxuICovXHJcbmZ1bmN0aW9uIGV4ZWN1dGUoYVN0YXRlbWVudCwgYUNvbnRleHQpIHtcclxuXHRjb25zdCBjb250ZXh0UHJvcGVydGllcyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKGFDb250ZXh0IHx8IHt9KS5qb2luKFwiLCBcIilcdDtcclxuXHRjb25zdCBleHByZXNzaW9uID0gZ2V0T3JDcmVhdGVGdW5jdGlvbihhU3RhdGVtZW50LCBjb250ZXh0UHJvcGVydGllcyk7XHJcblx0cmV0dXJuIGV4cHJlc3Npb24oYUNvbnRleHQpO1xyXG59O1xyXG5yZWdpc3RyYXRlKEVYRUNVVEVSTkFNRSwgZXhlY3V0ZSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBleGVjdXRlO1xyXG4iLCJpbXBvcnQgeyByZWdpc3RyYXRlIH0gZnJvbSBcIi4uL0V4ZWN1dGVyUmVnaXN0cnkuanNcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBFWEVDVVRFUk5BTUUgPSBcImNvbnRleHQtb2JqZWN0LWV4ZWN1dGVyXCI7XHJcbmNvbnN0IEVYUFJFU1NJT05fQ0FDSEUgPSBuZXcgTWFwKCk7XHJcbi8qKlxyXG4gKlxyXG4gKiBAcGFyYW0ge3N0cmluZ30gYVN0YXRlbWVudFxyXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259XHJcbiAqL1xyXG5jb25zdCBnZW5lcmF0ZSA9IChhU3RhdGVtZW50KSA9PiB7XHJcblx0Y29uc3QgY29kZSA9IGBcclxucmV0dXJuIChhc3luYyAoY3R4KSA9PiB7XHJcbiAgICB0cnl7XHJcbiAgICAgICAgcmV0dXJuICR7YVN0YXRlbWVudH1cclxuICAgIH1jYXRjaChlKXtcclxuICAgICAgICB0aHJvdyBlO1xyXG4gICAgfVxyXG59KShjb250ZXh0IHx8IHt9KTtgO1xyXG5cclxuXHQvL2NvbnNvbGUubG9nKFwiY29kZVwiLCBjb2RlKTtcclxuXHJcblx0cmV0dXJuIG5ldyBGdW5jdGlvbihcImNvbnRleHRcIiwgY29kZSk7XHJcbn07XHJcblxyXG4vKipcclxuICpcclxuICogQHBhcmFtIHtzdHJpbmd9IGFTdGF0ZW1lbnRcclxuICogQHJldHVybnMge0Z1bmN0aW9ufVxyXG4gKi9cclxuY29uc3QgZ2V0T3JDcmVhdGVGdW5jdGlvbiA9IChhU3RhdGVtZW50KSA9PiB7XHJcblxyXG5cdGNvbnN0IGNhY2hlS2V5ID0gYVN0YXRlbWVudDtcclxuXHJcblx0aWYgKEVYUFJFU1NJT05fQ0FDSEUuaGFzKGNhY2hlS2V5KSkge1xyXG5cdFx0cmV0dXJuIEVYUFJFU1NJT05fQ0FDSEUuZ2V0KGNhY2hlS2V5KTtcclxuXHR9XHJcblx0Y29uc3QgZXhwcmVzc2lvbiA9IGdlbmVyYXRlKGFTdGF0ZW1lbnQpO1xyXG5cdEVYUFJFU1NJT05fQ0FDSEUuc2V0KGNhY2hlS2V5LCBleHByZXNzaW9uKTtcclxuXHRyZXR1cm4gZXhwcmVzc2lvbjtcclxufTtcclxuXHJcbi8qKlxyXG4gKiBEZXNjcmlwdGlvbiBwbGFjZWhvbGRlclxyXG4gKlxyXG4gKiBAcGFyYW0ge3N0cmluZ30gYVN0YXRlbWVudFxyXG4gKiBAcGFyYW0ge29iamVjdH0gYUNvbnRleHRcclxuICogQHJldHVybnMge1Byb21pc2V9XHJcbiAqL1xyXG5mdW5jdGlvbiBkaXJlY3RFeGVjdXRlKGFTdGF0ZW1lbnQsIGFDb250ZXh0KSB7XHJcblx0Y29uc3QgZXhwcmVzc2lvbiA9IGdldE9yQ3JlYXRlRnVuY3Rpb24oYVN0YXRlbWVudCk7XHJcblx0cmV0dXJuIGV4cHJlc3Npb24oYUNvbnRleHQpO1xyXG59O1xyXG5yZWdpc3RyYXRlKEVYRUNVVEVSTkFNRSwgZGlyZWN0RXhlY3V0ZSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBkaXJlY3RFeGVjdXRlO1xyXG4iLCJpbXBvcnQge3JlZ2lzdHJhdGV9IGZyb20gXCIuLi9FeGVjdXRlclJlZ2lzdHJ5LmpzXCI7XHJcblxyXG5leHBvcnQgY29uc3QgRVhFQ1VURVJOQU1FID0gXCJ3aXRoLXNjb3BlZC1leGVjdXRlclwiO1xyXG5jb25zdCBFWFBSRVNTSU9OX0NBQ0hFID0gbmV3IE1hcCgpO1xyXG5sZXQgaW5pdGlhbENhbGwgPSB0cnVlO1xyXG5cclxuLyoqXHJcbiAqIFxyXG4gKiBAcGFyYW0ge3N0cmluZ30gYVN0YXRlbWVudCBcclxuICogQHJldHVybnMge0Z1bmN0aW9ufVxyXG4gKi9cclxuY29uc3QgZ2VuZXJhdGUgPSAoYVN0YXRlbWVudCkgPT4ge1xyXG5jb25zdCBjb2RlID0gYFxyXG5cdHJldHVybiAoYXN5bmMgKGNvbnRleHQpID0+IHtcclxuXHRcdHdpdGgoY29udGV4dCl7XHJcblx0XHRcdHRyeXsgXHJcblx0XHRcdFx0cmV0dXJuICR7YVN0YXRlbWVudH1cclxuXHRcdFx0fWNhdGNoKGUpe1xyXG5cdFx0XHRcdHRocm93IGU7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9KShjb250ZXh0IHx8IHt9KTtcclxuYDtcclxuXHQvL2NvbnNvbGUubG9nKFwiY29kZVwiLCBjb2RlKTtcclxuXHJcblx0cmV0dXJuIG5ldyBGdW5jdGlvbihcImNvbnRleHRcIiwgY29kZSk7XHJcbn07XHJcblxyXG4vKipcclxuICogXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBhU3RhdGVtZW50IFxyXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259XHJcbiAqL1xyXG5jb25zdCBnZXRPckNyZWF0ZUZ1bmN0aW9uID0gKGFTdGF0ZW1lbnQpID0+IHtcclxuXHRpZiAoRVhQUkVTU0lPTl9DQUNIRS5oYXMoYVN0YXRlbWVudCkpIHtcclxuXHRcdHJldHVybiBFWFBSRVNTSU9OX0NBQ0hFLmdldChhU3RhdGVtZW50KTtcclxuXHR9XHJcblx0Y29uc3QgZXhwcmVzc2lvbiA9IGdlbmVyYXRlKGFTdGF0ZW1lbnQpO1xyXG5cdEVYUFJFU1NJT05fQ0FDSEUuc2V0KGFTdGF0ZW1lbnQsIGV4cHJlc3Npb24pO1xyXG5cdHJldHVybiBleHByZXNzaW9uO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIERlc2NyaXB0aW9uIHBsYWNlaG9sZGVyXHJcbiAqXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBhU3RhdGVtZW50XHJcbiAqIEBwYXJhbSB7b2JqZWN0fSBhQ29udGV4dFxyXG4gKiBAcmV0dXJucyB7UHJvbWlzZX1cclxuICovXHJcbmZ1bmN0aW9uIHdpdGhTY29wZWRFeGVjdXRlIChhU3RhdGVtZW50LCBhQ29udGV4dCkge1xyXG5cdGlmKGluaXRpYWxDYWxsKXtcclxuXHRcdGluaXRpYWxDYWxsID0gZmFsc2U7XHJcblx0XHRjb25zb2xlLndhcm4obmV3IEVycm9yKGBXaXRoIFNjb3BlZCBleHByZXNzaW9uIGV4ZWN1dGlvbiBpcyBtYXJrZWQgYXMgZGVwcmVjYXRlZC5gKSk7XHJcblx0fVxyXG5cclxuXHRjb25zdCBleHByZXNzaW9uID0gZ2V0T3JDcmVhdGVGdW5jdGlvbihhU3RhdGVtZW50KTtcclxuXHRyZXR1cm4gZXhwcmVzc2lvbihhQ29udGV4dCk7XHJcbn07XHJcbnJlZ2lzdHJhdGUoRVhFQ1VURVJOQU1FLCB3aXRoU2NvcGVkRXhlY3V0ZSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoU2NvcGVkRXhlY3V0ZTtcclxuIiwiLy9pbXBvcnQgXCIuL0VzcHJpbWFFeGVjdXRlci5qc1wiO1xyXG5pbXBvcnQgXCIuL1dpdGhTY29wZWRFeGVjdXRlci5qc1wiO1xyXG5pbXBvcnQgXCIuL0NvbnRleHRPYmplY3RFeGVjdXRlci5qc1wiO1xyXG5pbXBvcnQgXCIuL0NvbnRleHREZWNvbnN0cnVjdG9yRXhlY3V0ZXIuanNcIjsiLCJpbXBvcnQgXCIuL3NyYy9pbmRleFwiOyIsImltcG9ydCBVdGlscyBmcm9tIFwiLi91dGlscy9VdGlsc1wiO1xyXG5cclxuVXRpbHMuZ2xvYmFsLmRlZmF1bHRqcyA9IFV0aWxzLmdsb2JhbC5kZWZhdWx0anMgfHwge307XHJcblV0aWxzLmdsb2JhbC5kZWZhdWx0anMuZXh0ZG9tID0gVXRpbHMuZ2xvYmFsLmRlZmF1bHRqcy5leHRkb20gfHwge1xyXG5cdFZFUlNJT04gOiBcIiR7dmVyc2lvbn1cIixcclxuXHR1dGlscyA6IHtcclxuXHRcdFV0aWxzOiBVdGlsc1xyXG5cdH1cclxufTtcclxuXHJcblV0aWxzLmdsb2JhbC5maW5kID0gZnVuY3Rpb24oKSB7XHJcblx0cmV0dXJuIGRvY3VtZW50LmZpbmQuYXBwbHkoZG9jdW1lbnQsIGFyZ3VtZW50cyk7XHJcbn07XHJcblxyXG5VdGlscy5nbG9iYWwucmVhZHkgPSBmdW5jdGlvbigpIHtcclxuXHRyZXR1cm4gZG9jdW1lbnQucmVhZHkuYXBwbHkoZG9jdW1lbnQsIGFyZ3VtZW50cyk7XHJcbn07XHJcblxyXG5VdGlscy5nbG9iYWwuY3JlYXRlID0gZnVuY3Rpb24oYUNvbnRlbnQsIGFzVGVtcGxhdGUpIHtcclxuXHRpZiAodHlwZW9mIGFyZ3VtZW50c1swXSAhPT0gXCJzdHJpbmdcIilcclxuXHRcdHRocm93IG5ldyBFcnJvcihcIlRoZSBmaXJzdCBhcmd1bWVudCBtdXN0IGJlIGEgc3RyaW5nIVwiKTtcclxuXHRcclxuXHRjb25zdCB0ZW1wbGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZW1wbGF0ZVwiKTtcclxuXHR0ZW1wbGF0ZS5pbm5lckhUTUwgPSBhQ29udGVudDtcclxuXHRpZihhc1RlbXBsYXRlKVxyXG5cdFx0cmV0dXJuIHRlbXBsYXRlO1xyXG5cdFxyXG5cdHJldHVybiBkb2N1bWVudC5pbXBvcnROb2RlKHRlbXBsYXRlLmNvbnRlbnQsIHRydWUpLmNoaWxkTm9kZXM7XHJcbn07XHJcblxyXG5VdGlscy5nbG9iYWwuc2NyaXB0ID0gZnVuY3Rpb24oYUZpbGUsIGFUYXJnZXQpIHtcclxuXHRpZihhRmlsZSBpbnN0YW5jZW9mIEFycmF5KVxyXG5cdFx0cmV0dXJuIFByb21pc2UuYWxsKGFGaWxlLm1hcChmaWxlID0+IFV0aWxzLmdsb2JhbC5zY3JpcHQoZmlsZSwgYVRhcmdldCkpKTtcclxuXHRcclxuXHRpZih0eXBlb2YgYUZpbGUgPT09IFwic3RyaW5nXCIpXHRcclxuXHRcdHJldHVybiBuZXcgUHJvbWlzZSgocixlKSA9PiB7XHJcblx0XHRcdGNvbnN0IHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIik7XHJcblx0XHRcdHNjcmlwdC5hc3luYyA9IHRydWU7XHJcblx0XHRcdHNjcmlwdC5vbmxvYWQgPSBmdW5jdGlvbigpe3IoKX07XHJcblx0XHRcdHNjcmlwdC5vbmVycm9yID0gZnVuY3Rpb24oKXt0aHJvdyBuZXcgRXJyb3IoXCJsb2FkIGVycm9yIVwiKX07XHJcblx0XHRcdCFhVGFyZ2V0ID8gZG9jdW1lbnQuYm9keS5hcHBlbmQoc2NyaXB0KSA6IGFUYXJnZXQuYXBwZW5kKHNjcmlwdCk7XHJcblx0XHRcdHNjcmlwdC5zcmMgPSBhRmlsZTtcclxuXHRcdH0pO1xyXG5cdGVsc2VcclxuXHRcdHJldHVybiBQcm9taXNlLnJlamVjdChcIkZpcnN0IHBhcmFtZXRlciBtdXN0IGJlIGFuIGFycmF5IG9mIHN0cmluZ3Mgb3IgYSBzdHJpbmchXCIpO1xyXG59OyIsImltcG9ydCBleHRlbmRQcm90b3R5cGUgZnJvbSBcIi4uL3V0aWxzL0V4dGVuZFByb3RvdHlwZVwiO1xyXG5pbXBvcnQgUXVlcnlTdXBwb3J0IGZyb20gXCIuL2V4dGVudGlvbnMvUXVlcnlTdXBwb3J0XCI7XHJcbmltcG9ydCBSZWFkeUV2ZW50U3VwcG9ydCBmcm9tIFwiLi9leHRlbnRpb25zL1JlYWR5RXZlbnRTdXBwb3J0XCI7XHJcblxyXG5leHRlbmRQcm90b3R5cGUoRG9jdW1lbnQsIFF1ZXJ5U3VwcG9ydCwgUmVhZHlFdmVudFN1cHBvcnQpO1xyXG5cclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4gZG9jdW1lbnQudHJpZ2dlcihcInJlYWR5XCIpKTtcclxuXHJcblxyXG5cclxuIiwiaW1wb3J0IGV4dGVuZFByb3RvdHlwZSBmcm9tIFwiLi4vdXRpbHMvRXh0ZW5kUHJvdG90eXBlXCI7XHJcbmltcG9ydCBRdWVyeVN1cHBvcnQgZnJvbSBcIi4vZXh0ZW50aW9ucy9RdWVyeVN1cHBvcnRcIjtcclxuaW1wb3J0IE1hbmlwdWxhdGlvblN1cHBvcnQgZnJvbSBcIi4vZXh0ZW50aW9ucy9NYW5pcHVsYXRpb25TdXBwb3J0XCI7XHJcblxyXG5leHRlbmRQcm90b3R5cGUoRG9jdW1lbnRGcmFnbWVudCwgUXVlcnlTdXBwb3J0LCBNYW5pcHVsYXRpb25TdXBwb3J0KTtcclxuXHJcblxyXG5cclxuXHJcbiIsImltcG9ydCBleHRlbmRQcm90b3R5cGUgZnJvbSBcIi4uL3V0aWxzL0V4dGVuZFByb3RvdHlwZVwiO1xyXG5pbXBvcnQgUXVlcnlTdXBwb3J0IGZyb20gXCIuL2V4dGVudGlvbnMvUXVlcnlTdXBwb3J0XCI7XHJcbmltcG9ydCBBdHRyaWJ1dGVTdXBwb3J0IGZyb20gXCIuL2V4dGVudGlvbnMvQXR0cmlidXRlU3VwcG9ydFwiO1xyXG5pbXBvcnQgTWFuaXB1bGF0aW9uU3VwcG9ydCBmcm9tIFwiLi9leHRlbnRpb25zL01hbmlwdWxhdGlvblN1cHBvcnRcIjtcclxuXHJcbmV4dGVuZFByb3RvdHlwZShFbGVtZW50LFF1ZXJ5U3VwcG9ydCwgQXR0cmlidXRlU3VwcG9ydCwgTWFuaXB1bGF0aW9uU3VwcG9ydCk7IiwiaW1wb3J0IGV4dGVuZFByb3RvdHlwZSBmcm9tIFwiLi4vdXRpbHMvRXh0ZW5kUHJvdG90eXBlXCI7XG5pbXBvcnQgRXZlbnRTdXBwb3J0IGZyb20gXCIuL2V4dGVudGlvbnMvRXZlbnRTdXBwb3J0XCI7XG5cbmV4dGVuZFByb3RvdHlwZShFdmVudFRhcmdldCwgRXZlbnRTdXBwb3J0KTsiLCJpbXBvcnQgZXh0ZW5kUHJvdG90eXBlIGZyb20gXCIuLi91dGlscy9FeHRlbmRQcm90b3R5cGVcIjtcclxuaW1wb3J0IEh0bWxDbGFzc1N1cHBvcnQgZnJvbSBcIi4vZXh0ZW50aW9ucy9IdG1sQ2xhc3NTdXBwb3J0XCI7XHJcbmltcG9ydCBTaG93SGlkZVN1cHBvcnQgZnJvbSBcIi4vZXh0ZW50aW9ucy9TaG93SGlkZVN1cHBvcnRcIjtcclxuXHJcblxyXG5leHRlbmRQcm90b3R5cGUoSFRNTEVsZW1lbnQsIEh0bWxDbGFzc1N1cHBvcnQsIFNob3dIaWRlU3VwcG9ydCk7IiwiaW1wb3J0IGV4dGVuZFByb3RvdHlwZSBmcm9tIFwiLi4vdXRpbHMvRXh0ZW5kUHJvdG90eXBlXCI7XHJcbmltcG9ydCBWYWx1ZVN1cHBvcnQgZnJvbSBcIi4vZXh0ZW50aW9ucy9WYWx1ZVN1cHBvcnRcIjtcclxuXHJcblxyXG5leHRlbmRQcm90b3R5cGUoSFRNTElucHV0RWxlbWVudCxWYWx1ZVN1cHBvcnQpOyIsImltcG9ydCBleHRlbmRQcm90b3R5cGUgZnJvbSBcIi4uL3V0aWxzL0V4dGVuZFByb3RvdHlwZVwiO1xyXG5pbXBvcnQgVmFsdWVTdXBwb3J0IGZyb20gXCIuL2V4dGVudGlvbnMvVmFsdWVTdXBwb3J0XCI7XHJcblxyXG5cclxuZXh0ZW5kUHJvdG90eXBlKEhUTUxTZWxlY3RFbGVtZW50LFZhbHVlU3VwcG9ydCk7IiwiaW1wb3J0IGV4dGVuZFByb3RvdHlwZSBmcm9tIFwiLi4vdXRpbHMvRXh0ZW5kUHJvdG90eXBlXCI7XHJcbmltcG9ydCBFeHRlbmRlciBmcm9tIFwiLi4vdXRpbHMvRXh0ZW5kZXJcIjtcclxuXHJcblxyXG5leHRlbmRQcm90b3R5cGUoSFRNTFRleHRBcmVhRWxlbWVudCxFeHRlbmRlcihcIlZhbHVlU3VwcG9ydFwiLCBQcm90b3R5cGUgPT4ge1x0XHJcblx0UHJvdG90eXBlLnZhbCA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0aWYoYXJndW1lbnRzLmxlbmd0aCA9PSAwKVxyXG5cdFx0XHRyZXR1cm4gdGhpcy52YWx1ZTtcclxuXHRcdGVsc2VcclxuXHRcdFx0dGhpcy52YWx1ZSA9IGFyZ3VtZW50c1swXVxyXG5cdFx0XHRcclxuXHRcdHJldHVybiB0aGlzO1xyXG5cdH07XHRcclxufSkpOyIsImltcG9ydCBleHRlbmRQcm90b3R5cGUgZnJvbSBcIi4uL3V0aWxzL0V4dGVuZFByb3RvdHlwZVwiO1xyXG5pbXBvcnQgRGVsZWdhdGVyQnVpbGRlciBmcm9tIFwiLi4vdXRpbHMvRGVsZWdhdGVyQnVpbGRlclwiO1xyXG5pbXBvcnQgTGlzdFN1cHBvcnQgZnJvbSBcIi4vZXh0ZW50aW9ucy9MaXN0U3VwcG9ydFwiO1xyXG5cclxuZXh0ZW5kUHJvdG90eXBlKEhUTUxDb2xsZWN0aW9uLCBMaXN0U3VwcG9ydCk7XHJcblxyXG5IVE1MQ29sbGVjdGlvbi5wcm90b3R5cGUuYXBwbHlUbyA9IGZ1bmN0aW9uKCl7XHJcblx0Y29uc3QgYXJncyA9IEFycmF5LmZyb20oYXJndW1lbnRzKTtcclxuXHRjb25zdCBjYWxsaW5nID0gYXJncy5zaGlmdCgpO1xyXG5cdGNvbnN0IGlzRnVuY3Rpb24gPSB0eXBlb2YgY2FsbGluZyA9PT0gXCJmdW5jdGlvblwiO1xyXG5cdGNvbnN0IHJlc3VsdHMgPSBbXTtcclxuXHRmb3IobGV0IGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKyl7XHJcblx0XHRjb25zdCBub2RlID0gdGhpc1tpXTtcclxuXHRcdGxldFx0cmVzdWx0O1xyXG5cdFx0aWYoaXNGdW5jdGlvbilcclxuXHRcdFx0cmVzdWx0ID0gY2FsbGluZy5hcHBseShbbm9kZV0uY29uY2F0KGFyZ3MpKTtcclxuXHRcdGVsc2UgaWYodHlwZW9mIG5vZGVbY2FsbGluZ10gPT09IFwiZnVuY3Rpb25cIilcclxuXHRcdFx0cmVzdWx0ID0gbm9kZVtjYWxsaW5nXS5hcHBseShub2RlLCBhcmdzKTtcclxuXHRcdFxyXG5cdFx0aWYocmVzdWx0KVxyXG5cdFx0XHRyZXN1bHRzLnB1c2gocmVzdWx0KTtcclxuXHR9XHJcblx0XHJcblx0cmV0dXJuIHJlc3VsdHM7XHJcbn07XHJcblxyXG5IVE1MQ29sbGVjdGlvbi5wcm90b3R5cGUudmFsID0gZnVuY3Rpb24oKSB7XHJcblx0aWYoYXJndW1lbnRzLmxlbmd0aCA9PSAwKXtcclxuXHRcdGlmKHRoaXMubGVuZ3RoID4gMCl7XHJcblx0XHRcdGNvbnN0IHJlc3VsdCA9IG5ldyBNYXAoKTtcclxuXHRcdFx0dGhpcy5mb3JFYWNoKG5vZGUgPT4ge1xyXG5cdFx0XHRcdGlmKHR5cGVvZiBub2RlLnZhbCA9PT0gXCJmdW5jdGlvblwiKXtcclxuXHRcdFx0XHRcdGNvbnN0IHZhbHVlID0gbm9kZS52YWwoKTtcclxuXHRcdFx0XHRcdGlmKHZhbHVlKVxyXG5cdFx0XHRcdFx0XHRyZXN1bHQuc2V0KChub2RlLm5hbWUgfHwgbm9kZS5pZCB8fCBub2RlLnNlbGVjdG9yKCkpLCBub2RlLnZhbCgpKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pO1x0XHJcblx0XHRcdHJldHVybiByZXN1bHQ7XHJcblx0XHR9XHJcblx0fVxyXG5cdGVsc2VcclxuXHRcdEhUTUxDb2xsZWN0aW9uLnByb3RvdHlwZS5hcHBseVRvLmFwcGx5KHRoaXMsIFtcInZhbFwiXS5jb25jYXQoQXJyYXkuZnJvbShhcmd1bWVudHMpKSk7XHJcbn07XHJcblxyXG5IVE1MQ29sbGVjdGlvbi5mcm9tID0gZnVuY3Rpb24oKXtcclxuXHRjb25zdCBhcmdzID0gQXJyYXkuZnJvbShhcmd1bWVudHMpO1xyXG5cdGNvbnN0IGRhdGEgPSB7fTtcclxuXHRsZXQgY291bnRlciA9IDA7XHJcblx0XHJcblx0d2hpbGUoYXJncy5sZW5ndGggPiAwKXtcclxuXHRcdGNvbnN0IGFyZyA9IGFyZ3Muc2hpZnQoKTtcclxuXHRcdGlmKHR5cGVvZiBhcmcgIT09IFwidW5kZWZpbmVkXCIgJiYgYXJnICE9IG51bGwpe1xyXG5cdFx0XHRpZihhcmcgaW5zdGFuY2VvZiBIVE1MRWxlbWVudClcclxuXHRcdFx0XHRkYXRhW2NvdW50ZXIrK10gPSB7dmFsdWU6IGFyZywgZW51bWVyYWJsZTogdHJ1ZX07XHJcblx0XHRcdGVsc2UgaWYoYXJnIGluc3RhbmNlb2YgSFRNTENvbGxlY3Rpb24gfHwgYXJnIGluc3RhbmNlb2YgTm9kZUxpc3QgfHwgYXJnIGluc3RhbmNlb2YgQXJyYXkpe1xyXG5cdFx0XHRcdGZvcihsZXQgaSA9IDA7IGkgPCBhcmcubGVuZ3RoOyBpKyspe1xyXG5cdFx0XHRcdFx0aWYoYXJnW2ldICYmIGFyZ1tpXSBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KXtcclxuXHRcdFx0XHRcdFx0ZGF0YVtjb3VudGVyKytdID0ge3ZhbHVlOiBhcmdbaV0sIGVudW1lcmFibGU6IHRydWV9O1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHRcclxuXHRkYXRhLmxlbmd0aCA9IHt2YWx1ZTogY291bnRlcn07XHJcblx0cmV0dXJuICBPYmplY3QuY3JlYXRlKEhUTUxDb2xsZWN0aW9uLnByb3RvdHlwZSwgZGF0YSk7XHJcbn07XHJcblxyXG5cclxuRGVsZWdhdGVyQnVpbGRlcihmdW5jdGlvbihhRnVuY3Rpb25OYW1lLCB0aGVBcmd1bWVudHMpIHtcclxuXHRsZXQgcmVzdWx0cyA9IFtdO1x0XHJcblx0dGhpcy5mb3JFYWNoKG5vZGUgPT4ge1xyXG5cdFx0aWYobm9kZSAmJiB0eXBlb2Ygbm9kZVthRnVuY3Rpb25OYW1lXSA9PT0gXCJmdW5jdGlvblwiKXtcclxuXHRcdFx0bGV0IHJlc3VsdCA9IG5vZGVbYUZ1bmN0aW9uTmFtZV0uYXBwbHkobm9kZSwgdGhlQXJndW1lbnRzKTtcclxuXHRcdFx0aWYocmVzdWx0KXsgXHJcblx0XHRcdFx0aWYocmVzdWx0IGluc3RhbmNlb2YgSFRNTENvbGxlY3Rpb24pXHJcblx0XHRcdFx0XHRyZXN1bHRzID0gcmVzdWx0cy5jb25jYXQoQXJyYXkuZnJvbShyZXN1bHQpKTtcclxuXHRcdFx0XHRlbHNlXHJcblx0XHRcdFx0XHRyZXN1bHRzLnB1c2gocmVzdWx0KTtcclxuXHRcdFx0fVx0XHRcclxuXHRcdH1cclxuXHR9KTtcclxuXHRcclxuXHRpZihyZXN1bHRzLmxlbmd0aCA9PT0gMClcclxuXHRcdHJldHVybiB1bmRlZmluZWQ7XHJcblx0ZWxzZSBpZihyZXN1bHRzWzBdIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQgfHwgcmVzdWx0c1swXSBpbnN0YW5jZW9mIEhUTUxDb2xsZWN0aW9uKVxyXG5cdFx0cmV0dXJuIEhUTUxDb2xsZWN0aW9uLmZyb20uYXBwbHkobnVsbCwgcmVzdWx0cyk7XHJcblx0ZWxzZVxyXG5cdFx0cmV0dXJuIHJlc3VsdHM7XHJcbn0sSFRNTENvbGxlY3Rpb24ucHJvdG90eXBlLCBOb2RlLnByb3RvdHlwZSwgSFRNTEVsZW1lbnQucHJvdG90eXBlLCBIVE1MSW5wdXRFbGVtZW50LnByb3RvdHlwZSwgRWxlbWVudC5wcm90b3R5cGUsIEV2ZW50VGFyZ2V0LnByb3RvdHlwZSk7XHJcbiIsImltcG9ydCBleHRlbmRQcm90b3R5cGUgZnJvbSBcIi4uL3V0aWxzL0V4dGVuZFByb3RvdHlwZVwiO1xyXG5pbXBvcnQgRGF0YVN1cHBvcnQgZnJvbSBcIi4vZXh0ZW50aW9ucy9EYXRhU3VwcG9ydFwiO1xyXG5pbXBvcnQgTWFuaXB1bGF0aW9uU3VwcG9ydCBmcm9tIFwiLi9leHRlbnRpb25zL01hbmlwdWxhdGlvblN1cHBvcnRcIjtcclxuXHJcbmV4dGVuZFByb3RvdHlwZShOb2RlLERhdGFTdXBwb3J0LE1hbmlwdWxhdGlvblN1cHBvcnQpOyIsImltcG9ydCBleHRlbmRQcm90b3R5cGUgZnJvbSBcIi4uL3V0aWxzL0V4dGVuZFByb3RvdHlwZVwiO1xyXG5pbXBvcnQgRGVsZWdhdGVyQnVpbGRlciBmcm9tIFwiLi4vdXRpbHMvRGVsZWdhdGVyQnVpbGRlclwiO1xyXG5pbXBvcnQgTGlzdFN1cHBvcnQgZnJvbSBcIi4vZXh0ZW50aW9ucy9MaXN0U3VwcG9ydFwiO1xyXG5cclxuZXh0ZW5kUHJvdG90eXBlKE5vZGVMaXN0LCBMaXN0U3VwcG9ydCk7XHJcblxyXG5Ob2RlTGlzdC5wcm90b3R5cGUuYXBwbHlUbyA9IGZ1bmN0aW9uKCl7XHJcblx0Y29uc3QgYXJncyA9IEFycmF5LmZyb20oYXJndW1lbnRzKTtcclxuXHRjb25zdCBjYWxsaW5nID0gYXJncy5zaGlmdCgpO1xyXG5cdGNvbnN0IGlzRnVuY3Rpb24gPSB0eXBlb2YgY2FsbGluZyA9PT0gXCJmdW5jdGlvblwiO1xyXG5cdGNvbnN0IHJlc3VsdHMgPSBbXTtcclxuXHRmb3IobGV0IGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKyl7XHJcblx0XHRjb25zdCBub2RlID0gdGhpc1tpXTtcclxuXHRcdGxldFx0cmVzdWx0O1xyXG5cdFx0aWYoaXNGdW5jdGlvbilcclxuXHRcdFx0cmVzdWx0ID0gY2FsbGluZy5hcHBseShbbm9kZV0uY29uY2F0KGFyZ3MpKTtcclxuXHRcdGVsc2UgaWYodHlwZW9mIG5vZGVbY2FsbGluZ10gPT09IFwiZnVuY3Rpb25cIilcclxuXHRcdFx0cmVzdWx0ID0gbm9kZVtjYWxsaW5nXS5hcHBseShub2RlLCBhcmdzKTtcclxuXHRcdFxyXG5cdFx0aWYocmVzdWx0KVxyXG5cdFx0XHRyZXN1bHRzLnB1c2gocmVzdWx0KTtcclxuXHR9XHJcblx0XHJcblx0cmV0dXJuIHJlc3VsdHM7XHJcbn07XHJcblxyXG5Ob2RlTGlzdC5wcm90b3R5cGUudmFsID0gZnVuY3Rpb24oKSB7XHJcblx0aWYoYXJndW1lbnRzLmxlbmd0aCA9PSAwKXtcclxuXHRcdGlmKHRoaXMubGVuZ3RoID4gMCl7XHJcblx0XHRcdGNvbnN0IHJlc3VsdCA9IG5ldyBNYXAoKTtcclxuXHRcdFx0dGhpcy5mb3JFYWNoKG5vZGUgPT4ge1xyXG5cdFx0XHRcdGlmKHR5cGVvZiBub2RlLnZhbCA9PT0gXCJmdW5jdGlvblwiKXtcclxuXHRcdFx0XHRcdGNvbnN0IHZhbHVlID0gbm9kZS52YWwoKTtcclxuXHRcdFx0XHRcdGlmKHZhbHVlKVxyXG5cdFx0XHRcdFx0XHRyZXN1bHQuc2V0KChub2RlLm5hbWUgfHwgbm9kZS5pZCB8fCBub2RlLnNlbGVjdG9yKCkpLCBub2RlLnZhbCgpKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pO1x0XHJcblx0XHRcdHJldHVybiByZXN1bHQ7XHJcblx0XHR9XHJcblx0fVxyXG5cdGVsc2VcclxuXHRcdE5vZGVMaXN0LnByb3RvdHlwZS5hcHBseVRvLmFwcGx5KHRoaXMsIFtcInZhbFwiXS5jb25jYXQoQXJyYXkuZnJvbShhcmd1bWVudHMpKSk7XHJcbn07XHJcblxyXG5Ob2RlTGlzdC5mcm9tID0gZnVuY3Rpb24oKXtcclxuXHRjb25zdCBhcmdzID0gQXJyYXkuZnJvbShhcmd1bWVudHMpO1xyXG5cdGNvbnN0IGRhdGEgPSB7fTtcclxuXHRsZXQgY291bnRlciA9IDA7XHJcblx0XHJcblx0d2hpbGUoYXJncy5sZW5ndGggPiAwKXtcclxuXHRcdGNvbnN0IGFyZyA9IGFyZ3Muc2hpZnQoKTtcclxuXHRcdGlmKHR5cGVvZiBhcmcgIT09IFwidW5kZWZpbmVkXCIgJiYgYXJnICE9IG51bGwpe1xyXG5cdFx0XHRpZihhcmcgaW5zdGFuY2VvZiBOb2RlKVxyXG5cdFx0XHRcdGRhdGFbY291bnRlcisrXSA9IHt2YWx1ZTogYXJnLCBlbnVtZXJhYmxlOiB0cnVlfTtcclxuXHRcdFx0ZWxzZSBpZihhcmcgaW5zdGFuY2VvZiBOb2RlTGlzdCB8fCBhcmcgaW5zdGFuY2VvZiBIVE1MQ29sbGVjdGlvbiB8fCBhcmcgaW5zdGFuY2VvZiBBcnJheSl7XHJcblx0XHRcdFx0Zm9yKGxldCBpID0gMDsgaSA8IGFyZy5sZW5ndGg7IGkrKyl7XHJcblx0XHRcdFx0XHRpZihhcmdbaV0gJiYgYXJnW2ldIGluc3RhbmNlb2YgTm9kZSl7XHJcblx0XHRcdFx0XHRcdGRhdGFbY291bnRlcisrXSA9IHt2YWx1ZTogYXJnW2ldLCBlbnVtZXJhYmxlOiB0cnVlfTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcblx0XHJcblx0ZGF0YS5sZW5ndGggPSB7dmFsdWU6IGNvdW50ZXJ9O1xyXG5cdHJldHVybiAgT2JqZWN0LmNyZWF0ZShOb2RlTGlzdC5wcm90b3R5cGUsIGRhdGEpO1xyXG59O1xyXG5cclxuXHJcbkRlbGVnYXRlckJ1aWxkZXIoZnVuY3Rpb24oYUZ1bmN0aW9uTmFtZSwgdGhlQXJndW1lbnRzKSB7XHJcblx0bGV0IHJlc3VsdHMgPSBbXTtcdFxyXG5cdHRoaXMuZm9yRWFjaChub2RlID0+IHtcclxuXHRcdGlmKG5vZGUgJiYgdHlwZW9mIG5vZGVbYUZ1bmN0aW9uTmFtZV0gPT09IFwiZnVuY3Rpb25cIil7XHJcblx0XHRcdGNvbnN0IHJlc3VsdCA9IG5vZGVbYUZ1bmN0aW9uTmFtZV0uYXBwbHkobm9kZSwgdGhlQXJndW1lbnRzKTtcclxuXHRcdFx0aWYocmVzdWx0KXsgXHJcblx0XHRcdFx0aWYocmVzdWx0IGluc3RhbmNlb2YgTm9kZUxpc3QpXHJcblx0XHRcdFx0XHRyZXN1bHRzID0gcmVzdWx0cy5jb25jYXQoQXJyYXkuZnJvbShyZXN1bHQpKTtcclxuXHRcdFx0XHRlbHNlXHJcblx0XHRcdFx0XHRyZXN1bHRzLnB1c2gocmVzdWx0KTtcclxuXHRcdFx0fVx0XHRcclxuXHRcdH1cclxuXHR9KTtcclxuXHRcclxuXHRpZihyZXN1bHRzLmxlbmd0aCA9PT0gMClcclxuXHRcdHJldHVybiB1bmRlZmluZWQ7XHJcblx0ZWxzZSBpZihyZXN1bHRzWzBdIGluc3RhbmNlb2YgTm9kZSB8fCByZXN1bHRzWzBdIGluc3RhbmNlb2YgTm9kZUxpc3QpXHJcblx0XHRyZXR1cm4gTm9kZUxpc3QuZnJvbShyZXN1bHRzKTtcclxuXHRlbHNlXHJcblx0XHRyZXR1cm4gcmVzdWx0cztcclxufSxOb2RlTGlzdC5wcm90b3R5cGUsIE5vZGUucHJvdG90eXBlLCBIVE1MRWxlbWVudC5wcm90b3R5cGUsIEhUTUxJbnB1dEVsZW1lbnQucHJvdG90eXBlLCBFbGVtZW50LnByb3RvdHlwZSwgRXZlbnRUYXJnZXQucHJvdG90eXBlKTtcclxuIiwiaW1wb3J0IEV4dGVuZGVyIGZyb20gXCIuLi8uLi91dGlscy9FeHRlbmRlclwiO1xyXG5cclxuY29uc3Qgc3VwcG9ydCA9IEV4dGVuZGVyKFwiQXR0cmlidXRlU3VwcG9ydFwiLCBQcm90b3R5cGUgPT4ge1xyXG5cdFByb3RvdHlwZS5hdHRyID0gZnVuY3Rpb24oKSB7XHJcblx0XHRpZiAoYXJndW1lbnRzLmxlbmd0aCA9PSAwKVxyXG5cdFx0XHRyZXR1cm4gdGhpcy5oYXNBdHRyaWJ1dGVzKCkgPyAoKCkgPT4ge1xyXG5cdFx0XHRcdGNvbnN0IHJlc3VsdCA9IHt9O1xyXG5cdFx0XHRcdHRoaXMuZ2V0QXR0cmlidXRlTmFtZXMoKS5mb3JFYWNoKG5hbWUgPT4ge1xyXG5cdFx0XHRcdFx0cmVzdWx0W25hbWVdID0gdGhpcy5nZXRBdHRyaWJ1dGUobmFtZSk7XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdFx0cmV0dXJuIHJlc3VsdDtcclxuXHRcdFx0fSkoKSA6IHVuZGVmaW5lZDtcclxuXHRcdGVsc2UgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT0gMSlcclxuXHRcdFx0cmV0dXJuIHRoaXMuZ2V0QXR0cmlidXRlKGFyZ3VtZW50c1swXSk7XHJcblx0XHRlbHNlIGlmICh0eXBlb2YgYXJndW1lbnRzWzFdID09PSBcInVuZGVmaW5lZFwiIHx8IGFyZ3VtZW50c1sxXSA9PSBudWxsKVxyXG5cdFx0XHR0aGlzLnJlbW92ZUF0dHJpYnV0ZShhcmd1bWVudHNbMF0pO1xyXG5cdFx0ZWxzZVxyXG5cdFx0XHR0aGlzLnNldEF0dHJpYnV0ZShhcmd1bWVudHNbMF0sIGFyZ3VtZW50c1sxXSk7XHJcblx0XHRcclxuXHRcdHJldHVybiB0aGlzO1xyXG5cdH07XHJcbn0pO1xyXG5leHBvcnQgZGVmYXVsdCBzdXBwb3J0OyIsImltcG9ydCBFeHRlbmRlciBmcm9tIFwiLi4vLi4vdXRpbHMvRXh0ZW5kZXJcIjtcclxuY29uc3Qgc3VwcG9ydCA9IEV4dGVuZGVyKFwiRGF0YVN1cHBvcnRcIiwgUHJvdG90eXBlID0+IHtcclxuXHRQcm90b3R5cGUuZGF0YSA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0Y29uc3QgZGF0YSA9IHt9O1xyXG5cdFx0aWYgKHR5cGVvZiB0aGlzLmRhdGFzZXQgIT09IFwidW5kZWZpbmVkXCIpXHJcblx0XHRcdGZvciAobmFtZSBpbiB0aGlzLmRhdGFzZXQpXHJcblx0XHRcdFx0ZGF0YVtuYW1lXSA9IHRoaXMuZGF0YXNldFtuYW1lXTtcclxuXHJcblx0XHR0aGlzLmRhdGEgPSAoZnVuY3Rpb24oKSB7XHJcblx0XHRcdGlmIChhcmd1bWVudHMubGVuZ3RoID09IDApXHJcblx0XHRcdFx0cmV0dXJuIGRhdGE7XHJcblx0XHRcdGVsc2UgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT0gMSlcclxuXHRcdFx0XHRyZXR1cm4gZGF0YVthcmd1bWVudHNbMF1dO1xyXG5cdFx0XHRlbHNlIGlmICh0eXBlb2YgYXJndW1lbnRzWzFdID09PSBcInVuZGVmaW5lZFwiIHx8IGFyZ3VtZW50c1sxXSA9PSBudWxsKVxyXG5cdFx0XHRcdGRlbGV0ZSBkYXRhW2FyZ3VtZW50c1swXV07XHJcblx0XHRcdGVsc2VcclxuXHRcdFx0XHRkYXRhW2FyZ3VtZW50c1swXV0gPSBhcmd1bWVudHNbMV07XHJcblxyXG5cdFx0XHRyZXR1cm4gdGhpcztcclxuXHRcdH0pLmJpbmQodGhpcyk7XHJcblxyXG5cdFx0cmV0dXJuIHRoaXMuZGF0YS5hcHBseShudWxsLCBhcmd1bWVudHMpO1xyXG5cdH07XHJcbn0pO1xyXG5leHBvcnQgZGVmYXVsdCBzdXBwb3J0OyIsImltcG9ydCBFeHRlbmRlciBmcm9tIFwiLi4vLi4vdXRpbHMvRXh0ZW5kZXJcIjtcclxuXHJcbmNvbnN0IERFRkFVTFRfVElNRU9VVCA9IDEwMDtcclxuY29uc3Qgc3VwcG9ydCA9IEV4dGVuZGVyKFwiRXZlbnRTdXBwb3J0XCIsIChQcm90b3R5cGUpID0+IHtcclxuXHRjb25zdCBFVkVOVFNQTElURVIgPSAvKFxccyspfChcXHMqLFxccyopLztcclxuXHRjb25zdCBnZXRXcmFwcGVySGFuZGxlTWFwID0gKGVsZW1lbnQpID0+IHtcclxuXHRcdGlmICghZWxlbWVudC5fX3dyYXBwZXJoYW5kbGVtYXBfXykgZWxlbWVudC5fX3dyYXBwZXJoYW5kbGVtYXBfXyA9IG5ldyBNYXAoKTtcclxuXHJcblx0XHRyZXR1cm4gZWxlbWVudC5fX3dyYXBwZXJoYW5kbGVtYXBfXztcclxuXHR9O1xyXG5cclxuXHRjb25zdCBnZXRUcmlnZ2VyVGltZW91dHMgPSAoZWxlbWVudCkgPT4ge1xyXG5cdFx0aWYgKCFlbGVtZW50Ll9fX0VWRU5UVFJJR0dFUlRJTUVPVVRTX19fKSBlbGVtZW50Ll9fX0VWRU5UVFJJR0dFUlRJTUVPVVRTX19fID0ge307XHJcblxyXG5cdFx0cmV0dXJuIGVsZW1lbnQuX19fRVZFTlRUUklHR0VSVElNRU9VVFNfX187XHJcblx0fTtcclxuXHJcblx0Y29uc3QgcmVtb3ZlV3JhcHBlciA9IChlbGVtZW50LCBkYXRhLCBldmVudFR5cGVzKSA9PiB7XHJcblx0XHRjb25zdCB7IHdyYXBwZXIsIG9wdGlvbiwgZXZlbnRzLCBoYW5kbGUgfSA9IGRhdGE7XHJcblx0XHRjb25zdCBjYXB0dXJlID0gb3B0aW9uLmNhcHR1cmU7XHJcblx0XHRpZiAoZXZlbnRUeXBlcykge1xyXG5cdFx0XHRldmVudFR5cGVzID0gdHlwZW9mIGV2ZW50VHlwZXMgPT09IFwic3RyaW5nXCIgPyBldmVudFR5cGVzLnNwbGl0KEVWRU5UU1BMSVRFUikgOiBldmVudFR5cGVzO1xyXG5cdFx0XHRmb3IgKGxldCBldmVudCBvZiBldmVudFR5cGVzKSB7XHJcblx0XHRcdFx0Y29uc3QgaW5kZXggPSBldmVudHMuaW5kZXhPZihldmVudCk7XHJcblx0XHRcdFx0aWYgKGluZGV4ID49IDApIHtcclxuXHRcdFx0XHRcdGVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudCwgd3JhcHBlciwgY2FwdHVyZSk7XHJcblx0XHRcdFx0XHRldmVudHMuc3BsaWNlKGluZGV4LCAxKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0aWYgKGV2ZW50cy5sZW5ndGggPT0gMCkgZ2V0V3JhcHBlckhhbmRsZU1hcChlbGVtZW50KS5kZWxldGUoaGFuZGxlKTtcclxuXHRcdFx0fVxyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0Zm9yIChsZXQgZXZlbnQgb2YgZXZlbnRzKSB7XHJcblx0XHRcdFx0ZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50LCB3cmFwcGVyLCBjYXB0dXJlKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRnZXRXcmFwcGVySGFuZGxlTWFwKGVsZW1lbnQpLmRlbGV0ZShoYW5kbGUpO1xyXG5cdFx0fVxyXG5cdH07XHJcblxyXG5cdFByb3RvdHlwZS5vbiA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdGlmIChhcmd1bWVudHMubGVuZ3RoIDwgMikgdGhyb3cgbmV3IEVycm9yKFwiVG9vIGxlc3MgYXJndW1lbnRzIVwiKTtcclxuXHJcblx0XHRjb25zdCBhcmdzID0gQXJyYXkuZnJvbShhcmd1bWVudHMpO1xyXG5cdFx0bGV0IGV2ZW50cyA9IHR5cGVvZiBhcmdzWzBdID09PSBcInN0cmluZ1wiID8gYXJncy5zaGlmdCgpLnNwbGl0KEVWRU5UU1BMSVRFUikgOiBhcmdzLnNoaWZ0KCk7XHJcblx0XHRjb25zdCBmaWx0ZXIgPSB0eXBlb2YgYXJnc1swXSA9PT0gXCJzdHJpbmdcIiA/IGFyZ3Muc2hpZnQoKSA6IG51bGw7XHJcblx0XHRjb25zdCBoYW5kbGUgPSBhcmdzLnNoaWZ0KCk7XHJcblx0XHRjb25zdCBvcHRpb24gPSB0eXBlb2YgYXJnc1swXSA9PT0gXCJ1bmRlZmluZWRcIiA/IHsgY2FwdHVyZTogZmFsc2UsIG9uY2U6IGZhbHNlLCBwYXNzaXZlOiBmYWxzZSB9IDogdHlwZW9mIGFyZ3NbMF0gPT09IFwiYm9vbGVhblwiID8geyBjYXB0dXJlOiBhcmdzLnNoaWZ0KCksIG9uY2U6IGZhbHNlLCBwYXNzaXZlOiBmYWxzZSB9IDogYXJncy5zaGlmdCgpO1xyXG5cdFx0Y29uc3Qgd3JhcHBlciA9IGZ1bmN0aW9uIChldmVudCkge1xyXG5cdFx0XHRpZiAoZmlsdGVyKSB7XHJcblx0XHRcdFx0Y29uc3QgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0O1xyXG5cdFx0XHRcdGlmICh0eXBlb2YgdGFyZ2V0LmlzID09PSBcImZ1bmN0aW9uXCIgJiYgIXRhcmdldC5pcyhmaWx0ZXIpKSByZXR1cm47XHJcblx0XHRcdH1cclxuXHRcdFx0Y29uc3QgcmVzdWx0ID0gaGFuZGxlLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7XHJcblx0XHRcdGlmIChvcHRpb24ub25jZSkgcmVtb3ZlV3JhcHBlcih0aGlzLCB3cmFwcGVyKTtcclxuXHRcdFx0cmV0dXJuIHJlc3VsdDtcclxuXHRcdH07XHJcblxyXG5cdFx0Z2V0V3JhcHBlckhhbmRsZU1hcCh0aGlzKS5zZXQoaGFuZGxlLCB7IGhhbmRsZSwgd3JhcHBlcjogd3JhcHBlciwgZXZlbnRzLCBvcHRpb24gfSk7XHJcblxyXG5cdFx0Zm9yIChsZXQgZXZlbnQgb2YgZXZlbnRzKSB7XHJcblx0XHRcdHRoaXMuYWRkRXZlbnRMaXN0ZW5lcihldmVudCwgd3JhcHBlciwgb3B0aW9uKTtcclxuXHRcdH1cclxuXHJcblx0XHRyZXR1cm4gdGhpcztcclxuXHR9O1xyXG5cclxuXHRQcm90b3R5cGUucmVtb3ZlT24gPSBmdW5jdGlvbiAoaGFuZGxlLCBldmVudCwgY2FwdHVyZSkge1xyXG5cdFx0Y29uc3QgZGF0YSA9IGdldFdyYXBwZXJIYW5kbGVNYXAodGhpcykuZ2V0KGhhbmRsZSk7XHJcblx0XHRpZiAoZGF0YSkgcmVtb3ZlV3JhcHBlcih0aGlzLCBkYXRhLCBldmVudCk7XHJcblx0XHRlbHNlIHRoaXMucmVtb3ZlRXZlbnRMaXN0ZW5lcihoYW5kbGUsIGV2ZW50LCBjYXB0dXJlKTtcclxuXHJcblx0XHRyZXR1cm4gdGhpcztcclxuXHR9O1xyXG5cclxuXHRQcm90b3R5cGUudHJpZ2dlciA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdGNvbnN0IGFyZ3MgPSBBcnJheS5mcm9tKGFyZ3VtZW50cyk7XHJcblx0XHRjb25zdCB0aW1lb3V0ID0gdHlwZW9mIGFyZ3NbMF0gPT09IFwibnVtYmVyXCIgPyBhcmdzLnNoaWZ0KCkgOiAtMTtcclxuXHRcdGlmICh0aW1lb3V0ID49IDApIHtcclxuXHRcdFx0Y29uc3QgdHlwZSA9IGFyZ3NbMF07XHJcblx0XHRcdGNvbnN0IHRpbWVvdXRzID0gZ2V0VHJpZ2dlclRpbWVvdXRzKHRoaXMpO1xyXG5cdFx0XHRjb25zdCB0aW1lb3V0aWQgPSB0aW1lb3V0c1t0eXBlXTtcclxuXHRcdFx0aWYgKHRpbWVvdXRpZCkgY2xlYXJUaW1lb3V0KHRpbWVvdXRpZCk7XHJcblxyXG5cdFx0XHR0aW1lb3V0c1t0eXBlXSA9IHNldFRpbWVvdXQoKCkgPT4ge1xyXG5cdFx0XHRcdGRlbGV0ZSB0aW1lb3V0c1t0eXBlXTtcclxuXHRcdFx0XHR0aGlzLnRyaWdnZXIuYXBwbHkodGhpcywgYXJncyk7XHJcblx0XHRcdH0sIHRpbWVvdXQpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0Y29uc3QgdHlwZSA9IGFyZ3Muc2hpZnQoKTtcclxuXHRcdFx0Y29uc3QgZGVsZWdhdGUgPSBhcmdzWzBdIGluc3RhbmNlb2YgRXZlbnQgPyBhcmdzLnNoaWZ0KCkgOiBudWxsO1xyXG5cdFx0XHRjb25zdCBkYXRhID0gYXJncy5sZW5ndGggPj0gMSA/IChhcmdzLmxlbmd0aCA9PSAxID8gYXJncy5zaGlmdCgpIDogYXJncykgOiBkZWxlZ2F0ZTtcclxuXHRcdFx0Y29uc3QgZXZlbnQgPSBkYXRhID8gbmV3IEN1c3RvbUV2ZW50KHR5cGUsIHsgYnViYmxlczogdHJ1ZSwgY2FuY2VsYWJsZTogdHJ1ZSwgY29tcG9zZWQ6IHRydWUsIGRldGFpbDogZGF0YSB9KSA6IG5ldyBFdmVudCh0eXBlLCB7IGJ1YmJsZXM6IHRydWUsIGNhbmNlbGFibGU6IHRydWUsIGNvbXBvc2VkOiB0cnVlIH0pO1xyXG5cclxuXHRcdFx0aWYgKGRlbGVnYXRlKSBldmVudC5kZWxlZ2F0ZWRFdmVudCA9IGRlbGVnYXRlO1xyXG5cdFx0XHR0aGlzLmRpc3BhdGNoRXZlbnQoZXZlbnQpO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHRoaXM7XHJcblx0fTtcclxufSk7XHJcbmV4cG9ydCBkZWZhdWx0IHN1cHBvcnQ7XHJcbiIsImltcG9ydCBFeHRlbmRlciBmcm9tIFwiLi4vLi4vdXRpbHMvRXh0ZW5kZXJcIjtcclxuXHJcbmNvbnN0IHN1cHBvcnQgPSBFeHRlbmRlcihcIkh0bWxDbGFzc1N1cHBvcnRcIiwgUHJvdG90eXBlID0+IHtcdFxyXG5cdFByb3RvdHlwZS5hZGRDbGFzcyA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0aWYoYXJndW1lbnRzLmxlbmd0aCA9PSAxKVxyXG5cdFx0XHRhcmd1bWVudHNbMF0uc3BsaXQoL1xccysvKS5mb3JFYWNoKGNsYXp6ID0+IHRoaXMuY2xhc3NMaXN0LmFkZChjbGF6eikpO1xyXG5cdFx0ZWxzZSBpZihhcmd1bWVudHMubGVuZ3RoID4gMSlcclxuXHRcdFx0QXJyYXkucHJvdG90eXBlLmZvckVhY2guY2FsbChhcmd1bWVudHMsY2xhenogPT4gdGhpcy5jbGFzc0xpc3QuYWRkKGNsYXp6KSk7XHJcblx0XHRcclxuXHRcdHJldHVybiB0aGlzO1xyXG5cdH07XHJcblx0XHJcblx0UHJvdG90eXBlLnJlbW92ZUNsYXNzID0gZnVuY3Rpb24oKSB7XHJcblx0XHRpZihhcmd1bWVudHMubGVuZ3RoID09IDEpXHJcblx0XHRcdGFyZ3VtZW50c1swXS5zcGxpdCgvXFxzKy8pLmZvckVhY2goY2xhenogPT4gdGhpcy5jbGFzc0xpc3QucmVtb3ZlKGNsYXp6KSk7XHJcblx0XHRlbHNlIGlmKGFyZ3VtZW50cy5sZW5ndGggPiAxKVxyXG5cdFx0XHRBcnJheS5wcm90b3R5cGUuZm9yRWFjaC5jYWxsKGFyZ3VtZW50cywgY2xhenogPT4gdGhpcy5jbGFzc0xpc3QucmVtb3ZlKGNsYXp6KSk7XHJcblx0XHRcclxuXHRcdHJldHVybiB0aGlzO1x0XHRcclxuXHR9O1xyXG5cdFxyXG5cdFByb3RvdHlwZS50b2dnbGVDbGFzcyA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0aWYoYXJndW1lbnRzLmxlbmd0aCA9PSAxKVxyXG5cdFx0XHRhcmd1bWVudHNbMF0uc3BsaXQoL1xccysvKS5mb3JFYWNoKGNsYXp6ID0+IHRoaXMuY2xhc3NMaXN0LnRvZ2dsZShjbGF6eikpO1xyXG5cdFx0ZWxzZSBpZihhcmd1bWVudHMubGVuZ3RoID4gMSlcclxuXHRcdFx0QXJyYXkucHJvdG90eXBlLmZvckVhY2guY2FsbChhcmd1bWVudHMsIGNsYXp6ID0+IHRoaXMuY2xhc3NMaXN0LnRvZ2dsZShjbGF6eikpO1xyXG5cdFx0XHJcblx0XHRyZXR1cm4gdGhpcztcclxuXHR9O1xyXG59KTtcclxuZXhwb3J0IGRlZmF1bHQgc3VwcG9ydDsiLCJpbXBvcnQgRXh0ZW5kZXIgZnJvbSBcIi4uLy4uL3V0aWxzL0V4dGVuZGVyXCI7XHJcblxyXG5jb25zdCBzdXBwb3J0ID0gRXh0ZW5kZXIoXCJMaXN0U3VwcG9ydFwiLCBQcm90b3R5cGUgPT4ge1x0XHRcclxuXHRQcm90b3R5cGUuaW5kZXhPZiA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0Zm9yKGxldCBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspXHJcblx0XHRcdGlmKHRoaXNbaV0gPT0gYXJndW1lbnRzWzBdKVxyXG5cdFx0XHRcdHJldHVybiBpO1xyXG5cdFx0XHJcblx0XHRyZXR1cm4gLTE7XHJcblx0fTtcclxuXHJcblx0UHJvdG90eXBlLmZvckVhY2ggPSBmdW5jdGlvbigpe1xyXG5cdFx0cmV0dXJuIEFycmF5LnByb3RvdHlwZS5mb3JFYWNoLmFwcGx5KEFycmF5LmZyb20odGhpcyksIGFyZ3VtZW50cyk7XHJcblx0fTtcclxuXHRcclxuXHRQcm90b3R5cGUubWFwID0gZnVuY3Rpb24oKXtcclxuXHRcdHJldHVybiBBcnJheS5wcm90b3R5cGUubWFwLmFwcGx5KEFycmF5LmZyb20odGhpcyksIGFyZ3VtZW50cyk7XHJcblx0fTtcclxuXHRcclxuXHRQcm90b3R5cGUuZmlsdGVyID0gZnVuY3Rpb24oKXtcclxuXHRcdHJldHVybiBBcnJheS5wcm90b3R5cGUuZmlsdGVyLmFwcGx5KEFycmF5LmZyb20odGhpcyksIGFyZ3VtZW50cyk7XHJcblx0fTtcclxuXHJcblx0UHJvdG90eXBlLmZpcnN0ID0gZnVuY3Rpb24oKXtcclxuXHRcdGlmKHRoaXMubGVuZ3RoID4gMClcclxuXHRcdFx0cmV0dXJuIHRoaXNbMF07XHJcblx0fTtcdFxyXG5cdFxyXG5cdFByb3RvdHlwZS5sYXN0ID0gZnVuY3Rpb24oKXtcclxuXHRcdGlmKHRoaXMubGVuZ3RoID4gMClcclxuXHRcdFx0cmV0dXJuIHRoaXNbdGhpcy5sZW5ndGggLSAxXTtcclxuXHR9O1xyXG59KTtcclxuZXhwb3J0IGRlZmF1bHQgc3VwcG9ydDsiLCJpbXBvcnQgRXh0ZW5kZXIgZnJvbSBcIi4uLy4uL3V0aWxzL0V4dGVuZGVyXCI7XHJcbmltcG9ydCBVdGlscyBmcm9tIFwiLi4vLi4vdXRpbHMvVXRpbHNcIjtcclxuXHJcbmNvbnN0IHN1cHBvcnQgPSBFeHRlbmRlcihcIk1hbmlwdWxhdGlvblN1cHBvcnRcIiwgUHJvdG90eXBlID0+IHtcdFxyXG5cdFByb3RvdHlwZS5lbXB0eSA9IGZ1bmN0aW9uKCl7XHJcblx0XHRsZXQgbm9kZXMgPSB0aGlzLmNoaWxkTm9kZXNcclxuXHRcdHdoaWxlKG5vZGVzLmxlbmd0aCAhPSAwKVx0XHRcdFxyXG5cdFx0XHRub2Rlc1swXS5yZW1vdmUodHJ1ZSk7XHJcblx0XHRcclxuXHRcdHJldHVybiB0aGlzO1xyXG5cdH07XHJcblx0XHJcblx0UHJvdG90eXBlLmNvbnRlbnQgPSBmdW5jdGlvbigpe1xyXG5cdFx0cmV0dXJuIHRoaXMuY2hpbGROb2RlcztcclxuXHR9O1x0XHJcblx0XHJcblx0UHJvdG90eXBlLmh0bWwgPSBmdW5jdGlvbigpe1xyXG5cdFx0aWYoYXJndW1lbnRzLmxlbmd0aCA9PSAwKVx0XHRcdFxyXG5cdFx0XHRyZXR1cm4gdGhpcy5pbm5lckhUTUw7XHJcblx0XHRlbHNlIGlmKGFyZ3VtZW50cy5sZW5ndGggPT0gMSAmJiB0eXBlb2YgYXJndW1lbnRzWzBdID09PSBcImJvb2xlYW5cIilcclxuXHRcdFx0aWYoYXJndW1lbnRzWzBdKVxyXG5cdFx0XHRcdHJldHVybiB0aGlzLm91dGVySFRNTDtcclxuXHRcdFx0ZWxzZVxyXG5cdFx0XHRcdHJldHVybiB0aGlzLmlubmVySFRNTDtcclxuXHRcdGVsc2UgXHJcblx0XHRcdEFycmF5LmZyb20oYXJndW1lbnRzKS5mb3JFYWNoKGNvbnRlbnQgPT4ge1xyXG5cdFx0XHRcdHRoaXMuZW1wdHkoKTtcclxuXHRcdFx0XHRpZih0eXBlb2YgY29udGVudCA9PT0gXCJzdHJpbmdcIilcclxuXHRcdFx0XHRcdHRoaXMuYXBwZW5kKGNvbnRlbnQpO1xyXG5cdFx0XHRcdGVsc2UgaWYoY29udGVudCBpbnN0YW5jZW9mIE5vZGUgfHwgY29udGVudCBpbnN0YW5jZW9mIE5vZGVMaXN0IHx8IGNvbnRlbnQgaW5zdGFuY2VvZiBIVE1MQ29sbGVjdGlvbil7XHJcblx0XHRcdFx0XHR0aGlzLmFwcGVuZChjb250ZW50KTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pO1x0XHRcclxuXHRcdFx0XHJcblx0XHRyZXR1cm4gdGhpcztcclxuXHR9O1xyXG5cdFxyXG5cdGNvbnN0IGFwcGVuZCA9IGZ1bmN0aW9uKCl7XHJcblx0XHRjb25zdCBhcHBlbmQgPSBQcm90b3R5cGUuYXBwZW5kQ2hpbGQuYmluZCh0aGlzKTtcclxuXHRcdGZvcihsZXQgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspe1xyXG5cdFx0XHRsZXQgYXJnID0gYXJndW1lbnRzW2ldO1xyXG5cdFx0XHRpZihhcmcgaW5zdGFuY2VvZiBOb2RlKVxyXG5cdFx0XHRcdHRoaXMuYXBwZW5kQ2hpbGQoYXJnKTtcclxuXHRcdFx0ZWxzZSBpZih0eXBlb2YgYXJnID09PSBcInN0cmluZ1wiKVxyXG5cdFx0XHRcdGNyZWF0ZShhcmcpLmZvckVhY2goYXBwZW5kKTtcclxuXHRcdFx0ZWxzZSBpZih0eXBlb2YgYXJnLmZvckVhY2ggPT09IFwiZnVuY3Rpb25cIilcclxuXHRcdFx0XHRhcmcuZm9yRWFjaChhcHBlbmQpO1xyXG5cdFx0fVxyXG5cdH07XHRcclxuXHRQcm90b3R5cGUuYXBwZW5kID0gYXBwZW5kO1xyXG5cdFxyXG5cdGNvbnN0IHByZXBlbmQgPSBmdW5jdGlvbihhRmlyc3RFbGVtZW50LCBhRWxlbWVudCl7XHJcblx0XHR0aGlzLmluc2VydEJlZm9yZShhRWxlbWVudCwgYUZpcnN0RWxlbWVudCk7XHJcblx0fTtcclxuXHRQcm90b3R5cGUucHJlcGVuZCA9IGZ1bmN0aW9uKCl7XHJcblx0XHRpZih0aGlzLmNoaWxkTm9kZXMubGVuZ3RoID09IDApXHJcblx0XHRcdGFwcGVuZC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG5cdFx0ZWxzZSB7XHJcblx0XHRcdGNvbnN0IGZpcnN0ID0gdGhpcy5jaGlsZE5vZGVzLmZpcnN0KCk7XHJcblx0XHRcdGNvbnN0IGluc2VydCA9IHByZXBlbmQuYmluZCh0aGlzLCBmaXJzdCk7XHJcblx0XHRcdGZvcihsZXQgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspe1xyXG5cdFx0XHRcdGNvbnN0IGFyZyA9IGFyZ3VtZW50c1tpXTtcclxuXHRcdFx0XHRpZihhcmcgaW5zdGFuY2VvZiBOb2RlKVxyXG5cdFx0XHRcdFx0aW5zZXJ0KGFyZyk7XHJcblx0XHRcdFx0ZWxzZSBpZih0eXBlb2YgYXJnID09PSBcInN0cmluZ1wiKVxyXG5cdFx0XHRcdFx0YXJnLmZvckVhY2goaW5zZXJ0KTtcclxuXHRcdFx0XHRlbHNlIGlmKHR5cGVvZiBhcmcuZm9yRWFjaCA9PT0gXCJmdW5jdGlvblwiKVxyXG5cdFx0XHRcdFx0YXJnLmZvckVhY2goaW5zZXJ0KTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH07XHJcblx0XHJcblx0UHJvdG90eXBlLnJlcGxhY2UgPSBmdW5jdGlvbigpe1xyXG5cdFx0aWYoYXJndW1lbnRzLmxlbmd0aCA8IDEpXHJcblx0XHRcdHRocm93IG5ldyBFcnJvcihcIkluc3VmZmljaWVudCBhcmd1bWVudHMhIE9uZSBvciB0d28gbm9kZXMgcmVxdWlyZWQhXCIpO1xyXG5cdFx0XHJcblx0XHRjb25zdCBwYXJlbnQgPSBhcmd1bWVudHMubGVuZ3RoID09IDEgPyB0aGlzLnBhcmVudE5vZGUgOiB0aGlzO1xyXG5cdFx0Y29uc3Qgb2xkTm9kZSA9IGFyZ3VtZW50cy5sZW5ndGggPT0gMSA/IHRoaXMgOiBhcmd1bWVudHNbMF07XHJcblx0XHRjb25zdCBuZXdOb2RlID0gYXJndW1lbnRzLmxlbmd0aCA9PSAxID8gYXJndW1lbnRzWzBdIDogYXJndW1lbnRzWzFdO1xyXG5cdFx0XHJcblx0XHRpZihuZXdOb2RlIGluc3RhbmNlb2YgQXJyYXkgfHwgbmV3Tm9kZSBpbnN0YW5jZW9mIE5vZGVMaXN0IHx8IG5ld05vZGUgaW5zdGFuY2VvZiBIVE1MQ29sbGVjdGlvbil7XHJcblx0XHRcdG5ld05vZGUuZm9yRWFjaChhSXRlbSA9PiBwYXJlbnQuaW5zZXJ0QmVmb3JlKGFJdGVtLCBvbGROb2RlKSk7XHJcblx0XHRcdG9sZE5vZGUucmVtb3ZlKCk7XHJcblx0XHR9XHJcblx0XHRlbHNlXHJcblx0XHRcdHBhcmVudC5yZXBsYWNlQ2hpbGQobmV3Tm9kZSxvbGROb2RlKTtcclxuXHR9O1xyXG5cdFxyXG5cdFByb3RvdHlwZS5hZnRlciA9IGZ1bmN0aW9uKCl7XHJcblx0XHRpZih0aGlzLnBhcmVudE5vZGUgPT0gbnVsbClcclxuXHRcdFx0dGhyb3cgbmV3IEVycm9yKFwiQ2FuJ3QgaW5zZXJ0IG5vZGVzIGFmdGVyIHRoaXMgbm9kZSEgUGFyZW50IG5vZGUgbm90IGF2YWlsYWJsZSFcIik7XHJcblx0XHRcclxuXHRcdGNvbnN0IHBhcmVudCA9IHRoaXMucGFyZW50Tm9kZTtcclxuXHRcdGNvbnN0IG5leHQgPSB0aGlzLm5leHRTaWJsaW5nO1xyXG5cdFx0aWYobmV4dClcclxuXHRcdFx0UHJvdG90eXBlLmJlZm9yZS5hcHBseShuZXh0LCBhcmd1bWVudHMpO1xyXG5cdFx0ZWxzZVxyXG5cdFx0XHRQcm90b3R5cGUuYXBwZW5kLmFwcGx5KHBhcmVudCwgYXJndW1lbnRzKTtcclxuXHR9O1x0XHJcblx0XHJcblx0UHJvdG90eXBlLmJlZm9yZSA9IGZ1bmN0aW9uKCl7XHJcblx0XHRpZih0aGlzLnBhcmVudE5vZGUgPT0gbnVsbClcclxuXHRcdFx0dGhyb3cgbmV3IEVycm9yKFwiQ2FuJ3QgaW5zZXJ0IG5vZGVzIGFmdGVyIHRoaXMgbm9kZSEgUGFyZW50IG5vZGUgbm90IGF2YWlsYWJsZSFcIik7XHJcblx0XHRcclxuXHRcdGNvbnN0IHBhcmVudCA9IHRoaXMucGFyZW50Tm9kZTtcclxuXHRcdGNvbnN0IGluc2VydGVyID0gKG5vZGUpID0+IHtwYXJlbnQuaW5zZXJ0QmVmb3JlKG5vZGUsIHRoaXMpO31cclxuXHRcdGZvcihsZXQgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspe1xyXG5cdFx0XHRjb25zdCBhcmcgPSBhcmd1bWVudHNbaV07XHJcblx0XHRcdGlmKGFyZyBpbnN0YW5jZW9mIE5vZGUpXHJcblx0XHRcdFx0aW5zZXJ0ZXIoYXJnKTtcclxuXHRcdFx0ZWxzZSBpZih0eXBlb2YgYXJnID09PSBcInN0cmluZ1wiKVxyXG5cdFx0XHRcdGFyZy5mb3JFYWNoKGluc2VydGVyKTtcclxuXHRcdFx0ZWxzZSBpZih0eXBlb2YgYXJnLmZvckVhY2ggPT09IFwiZnVuY3Rpb25cIilcclxuXHRcdFx0XHRhcmcuZm9yRWFjaChpbnNlcnRlcik7XHJcblx0XHR9XHJcblx0fTtcdFxyXG59KTtcclxuZXhwb3J0IGRlZmF1bHQgc3VwcG9ydDsiLCJpbXBvcnQgRXh0ZW5kZXIgZnJvbSBcIi4uLy4uL3V0aWxzL0V4dGVuZGVyXCI7XHJcblxyXG5jb25zdCBwYXJlbnRTZWxlY3RvciA9IC86cGFyZW50KFxcKFxcXCIoW15cXCldKilcXFwiXFwpKT8vaTtcclxuY29uc3QgcXVlcnlFeGVjdXRlciA9IGZ1bmN0aW9uIChhRWxlbWVudCwgYVNlbGVjdG9yKSB7XHJcblx0bGV0IG1hdGNoID0gcGFyZW50U2VsZWN0b3IuZXhlYyhhU2VsZWN0b3IpO1xyXG5cdGlmIChtYXRjaCkge1xyXG5cdFx0bGV0IHJlc3VsdCA9IGFFbGVtZW50O1xyXG5cdFx0aWYgKG1hdGNoLmluZGV4ID4gMCkge1xyXG5cdFx0XHRyZXN1bHQgPSBhRWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKGFTZWxlY3Rvci5zdWJzdHIoMCwgbWF0Y2guaW5kZXgpKTtcclxuXHRcdFx0aWYgKHJlc3VsdC5sZW5ndGggPT0gMCkgcmV0dXJuO1xyXG5cdFx0fVxyXG5cdFx0cmVzdWx0ID0gcmVzdWx0LnBhcmVudChtYXRjaFsyXSk7XHJcblx0XHRpZiAocmVzdWx0KSB7XHJcblx0XHRcdGxldCBuZXh0U2VsZWN0b3IgPSBhU2VsZWN0b3Iuc3Vic3RyKG1hdGNoLmluZGV4ICsgbWF0Y2hbMF0ubGVuZ3RoKS50cmltKCk7XHJcblx0XHRcdGlmIChuZXh0U2VsZWN0b3IubGVuZ3RoID4gMCkgcmVzdWx0ID0gcmVzdWx0LmZpbmQobmV4dFNlbGVjdG9yKTtcclxuXHJcblx0XHRcdHJldHVybiByZXN1bHQ7XHJcblx0XHR9XHJcblx0fSBlbHNlIHJldHVybiBhRWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKGFTZWxlY3Rvcik7XHJcbn07XHJcblxyXG5jb25zdCBzdXBwb3J0ID0gRXh0ZW5kZXIoXCJRdWVyeVN1cHBvcnRcIiwgKFByb3RvdHlwZSkgPT4ge1xyXG5cdFByb3RvdHlwZS5maW5kID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0bGV0IG5vZGVzID0gW107XHJcblx0XHRsZXQgYXJncyA9IEFycmF5LmZyb20oYXJndW1lbnRzKTtcclxuXHRcdGxldCBhcmcgPSBhcmdzLnNoaWZ0KCk7XHJcblx0XHR3aGlsZSAoYXJnKSB7XHJcblx0XHRcdGlmICh0eXBlb2YgYXJnID09PSBcInN0cmluZ1wiKSB7XHJcblx0XHRcdFx0bGV0IHJlc3VsdCA9IHF1ZXJ5RXhlY3V0ZXIodGhpcywgYXJnKTtcclxuXHRcdFx0XHRpZiAocmVzdWx0KSBub2Rlcy5wdXNoKHJlc3VsdCk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGFyZyA9IGFyZ3Muc2hpZnQoKTtcclxuXHRcdH1cclxuXHJcblx0XHRsZXQgcmVzdWx0ID0gTm9kZUxpc3QuZnJvbS5hcHBseShudWxsLCBub2Rlcyk7XHJcblx0XHRyZXR1cm4gcmVzdWx0O1xyXG5cdH07XHJcblxyXG5cdFByb3RvdHlwZS5pcyA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdGlmICh0aGlzIGluc3RhbmNlb2YgRG9jdW1lbnQgfHwgdGhpcyBpbnN0YW5jZW9mIERvY3VtZW50RnJhZ21lbnQpIHJldHVybiBmYWxzZTtcclxuXHRcdGVsc2UgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT0gMSkge1xyXG5cdFx0XHRpZiAodHlwZW9mIGFyZ3VtZW50c1swXSA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIHRoaXMubWF0Y2hlcyhhcmd1bWVudHNbMF0pO1xyXG5cdFx0XHRlbHNlIGlmICh0eXBlb2YgYXJndW1lbnRzWzBdLmxlbmd0aCA9PT0gXCJudW1iZXJcIikge1xyXG5cdFx0XHRcdGxldCBmaWx0ZXIgPSBhcmd1bWVudHNbMF07XHJcblx0XHRcdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBmaWx0ZXIubGVuZ3RoOyBpKyspIGlmICh0aGlzLm1hdGNoZXMoZmlsdGVyW2ldKSkgcmV0dXJuIHRydWU7XHJcblx0XHRcdH1cclxuXHRcdH0gZWxzZSBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHJldHVybiB0aGlzLmlzKEFycmF5LmZyb20oYXJndW1lbnRzKSk7XHJcblxyXG5cdFx0cmV0dXJuIGZhbHNlO1xyXG5cdH07XHJcblxyXG5cdFByb3RvdHlwZS5wYXJlbnQgPSBmdW5jdGlvbiAoc2VsZWN0b3IsIGlnbm9yZVNoYWRvd1Jvb3QpIHtcclxuXHRcdGlmICghdGhpcy5wYXJlbnROb2RlKSByZXR1cm4gbnVsbDtcclxuXHRcdGlnbm9yZVNoYWRvd1Jvb3QgPSB0eXBlb2Ygc2VsZWN0b3IgPT09IFwiYm9vbGVhblwiID8gc2VsZWN0b3IgOiBpZ25vcmVTaGFkb3dSb290O1xyXG5cdFx0c2VsZWN0b3IgPSB0eXBlb2Ygc2VsZWN0b3IgPT09IFwic3RyaW5nXCIgPyBzZWxlY3RvciA6IG51bGw7XHJcblxyXG5cdFx0bGV0IHBhcmVudCA9IHRoaXMucGFyZW50Tm9kZTtcclxuXHRcdGlmIChwYXJlbnQgaW5zdGFuY2VvZiBTaGFkb3dSb290ICYmIGlnbm9yZVNoYWRvd1Jvb3QpIHBhcmVudCA9IHBhcmVudC5ob3N0O1xyXG5cclxuXHRcdGlmIChzZWxlY3Rvcikge1xyXG5cdFx0XHR0cnkge1xyXG5cdFx0XHRcdHdoaWxlIChwYXJlbnQgJiYgIXBhcmVudC5pcyhzZWxlY3RvcikpIHBhcmVudCA9IHBhcmVudC5wYXJlbnQoc2VsZWN0b3IsIGlnbm9yZVNoYWRvd1Jvb3QpO1xyXG5cdFx0XHR9IGNhdGNoIChlKSB7XHJcblx0XHRcdFx0Y29uc29sZS5lcnJvcihcInRoaXM6XCIsIHRoaXMsIFwicGFyZW50OlwiLCBwYXJlbnQsIFwiZXJyb3I6XCIsIGUpO1xyXG5cdFx0XHR9XHJcblx0XHRcdHJldHVybiBwYXJlbnQ7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gcGFyZW50O1xyXG5cdH07XHJcblxyXG5cdFByb3RvdHlwZS5wYXJlbnRzID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0bGV0IHJlc3VsdCA9IG5ldyBBcnJheSgpO1xyXG5cdFx0bGV0IHBhcmVudCA9IFByb3RvdHlwZS5wYXJlbnQuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxuXHRcdHdoaWxlIChwYXJlbnQpIHtcclxuXHRcdFx0cmVzdWx0LnB1c2gocGFyZW50KTtcclxuXHRcdFx0cGFyZW50ID0gUHJvdG90eXBlLnBhcmVudC5hcHBseShwYXJlbnQsIGFyZ3VtZW50cyk7XHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIE5vZGVMaXN0LmZyb20ocmVzdWx0KTtcclxuXHR9O1xyXG5cclxuXHRQcm90b3R5cGUuc2VsZWN0b3IgPSBmdW5jdGlvbiAoKSB7XHJcblx0XHRpZiAodGhpcyBpbnN0YW5jZW9mIERvY3VtZW50IHx8IHRoaXMgaW5zdGFuY2VvZiBEb2N1bWVudEZyYWdtZW50KSByZXR1cm4gdW5kZWZpbmVkO1xyXG5cdFx0ZWxzZSBpZiAodGhpcy5pZCkgcmV0dXJuIFwiI1wiICsgdGhpcy5pZDtcclxuXHRcdGVsc2Uge1xyXG5cdFx0XHRsZXQgc2VsZWN0b3IgPSB0aGlzLnRhZ05hbWUudG9Mb3dlckNhc2UoKTtcclxuXHRcdFx0bGV0IHBhcmVudCA9IHRoaXMucGFyZW50KCk7XHJcblx0XHRcdGlmIChwYXJlbnQpIHtcclxuXHRcdFx0XHRsZXQgc2FtZVRhZ1NpYmxpbmdzID0gcGFyZW50LmZpbmQoXCI6c2NvcGU+XCIgKyBzZWxlY3Rvcik7XHJcblx0XHRcdFx0aWYgKHNhbWVUYWdTaWJsaW5ncyBpbnN0YW5jZW9mIE5vZGVMaXN0KSB7XHJcblx0XHRcdFx0XHRsZXQgaW5kZXggPSBzYW1lVGFnU2libGluZ3MuaW5kZXhPZih0aGlzKTtcclxuXHRcdFx0XHRcdGlmIChpbmRleCA+IDApIHNlbGVjdG9yICs9IFwiOm50aC1jaGlsZChcIiArIChpbmRleCArIDEpICsgXCIpXCI7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGxldCBwYXJlbnRTZWxlY3RvciA9IHBhcmVudC5zZWxlY3RvcigpO1xyXG5cdFx0XHRcdHJldHVybiBwYXJlbnRTZWxlY3RvciA/IHBhcmVudFNlbGVjdG9yICsgXCI+XCIgKyBzZWxlY3RvciA6IHNlbGVjdG9yO1xyXG5cdFx0XHR9XHJcblx0XHRcdHJldHVybiBzZWxlY3RvcjtcclxuXHRcdH1cclxuXHR9O1xyXG5cclxuXHRQcm90b3R5cGUuY2xvc2VzdCA9IGZ1bmN0aW9uIChhUXVlcnkpIHtcclxuXHRcdHJldHVybiB0aGlzLmNsb3Nlc3RzKGFRdWVyeSkuZmlyc3QoKTtcclxuXHR9O1xyXG5cclxuXHRQcm90b3R5cGUuY2xvc2VzdHMgPSBmdW5jdGlvbiAoYVF1ZXJ5KSB7XHJcblx0XHRjb25zdCByZXN1bHQgPSB0aGlzLmZpbmQoYVF1ZXJ5KTtcclxuXHRcdGlmIChyZXN1bHQubGVuZ3RoICE9IDApIHJldHVybiByZXN1bHQ7XHJcblx0XHRcclxuXHRcdGNvbnN0IHBhcmVudCA9IHRoaXMucGFyZW50RWxlbWVudDtcclxuXHRcdGlmIChwYXJlbnQpIHJldHVybiBwYXJlbnQuY2xvc2VzdHMoYVF1ZXJ5KTtcclxuXHJcblx0XHRyZXR1cm4gTm9kZUxpc3QuZnJvbShbXSk7XHJcblx0fTtcclxuXHJcblx0UHJvdG90eXBlLm5lc3RlZCA9IGZ1bmN0aW9uIChhUXVlcnkpIHtcclxuXHRcdGlmICh0aGlzLmlzKGFRdWVyeSkpIHJldHVybiBOb2RlTGlzdC5mcm9tKHRoaXMpO1xyXG5cclxuXHRcdGxldCBuZXN0ZWQgPSB0aGlzLmZpbmQoYVF1ZXJ5KTtcclxuXHRcdGlmIChuZXN0ZWQgJiYgbmVzdGVkLmxlbmd0aCA+IDApIHJldHVybiBuZXN0ZWQ7XHJcblx0XHRlbHNlIHJldHVybiBOb2RlTGlzdC5mcm9tKHRoaXMucGFyZW50KGFRdWVyeSkpO1xyXG5cdH07XHJcbn0pO1xyXG5leHBvcnQgZGVmYXVsdCBzdXBwb3J0O1xyXG4iLCJpbXBvcnQgRXh0ZW5kZXIgZnJvbSBcIi4uLy4uL3V0aWxzL0V4dGVuZGVyXCI7XHJcblxyXG5jb25zdCBzdXBwb3J0ID0gRXh0ZW5kZXIoXCJSZWFkeUV2ZW50U3VwcG9ydFwiLCBQcm90b3R5cGUgPT4ge1xyXG5cdFByb3RvdHlwZS5yZWFkeSA9IGZ1bmN0aW9uKGFGdW5jdGlvbiwgb25jZSl7XHRcclxuXHRcdHRoaXMub24oXCJyZWFkeVwiLCBhRnVuY3Rpb24sIG9uY2UpO1xyXG5cdFx0aWYoZG9jdW1lbnQucmVhZHlTdGF0ZSA9PSBcImNvbXBsZXRlXCIpXHRcdFx0XHJcblx0XHRcdHRoaXMudHJpZ2dlcihcInJlYWR5XCIpO1xyXG5cdFx0XHJcblx0XHRyZXR1cm4gdGhpcztcclxuXHR9O1xyXG5cdFxyXG59KTtcclxuZXhwb3J0IGRlZmF1bHQgc3VwcG9ydDsiLCJpbXBvcnQgRXh0ZW5kZXIgZnJvbSBcIi4uLy4uL3V0aWxzL0V4dGVuZGVyXCI7XHJcblxyXG5jb25zdCBISURFVkFMVUUgPSBcIm5vbmVcIjtcclxuXHJcbmNvbnN0IGlzSGlkZGVuID0gKGVsZW1lbnQpID0+IHtcclxuXHRyZXR1cm4gZWxlbWVudC5zdHlsZS5kaXNwbGF5ID09PSBISURFVkFMVUVcclxufTtcclxuXHJcbmNvbnN0IGluaXQgPSAoZWxlbWVudCkgPT4ge1x0XHJcblx0bGV0IGRpc3BsYXkgPSAhaXNIaWRkZW4oZWxlbWVudCkgPyBlbGVtZW50LnN0eWxlLmRpc3BsYXkgOiBcIlwiO1xyXG5cdFxyXG5cdGVsZW1lbnQuc2hvdyA9IChmdW5jdGlvbigpe1xyXG5cdFx0dGhpcy5zdHlsZS5kaXNwbGF5ID0gZGlzcGxheTtcclxuXHRcdHJldHVybiB0aGlzO1x0XHRcclxuXHR9KS5iaW5kKGVsZW1lbnQpO1xyXG5cdFxyXG5cdGVsZW1lbnQuaGlkZSA9IChmdW5jdGlvbigpe1xyXG5cdFx0dGhpcy5zdHlsZS5kaXNwbGF5ID0gSElERVZBTFVFO1xyXG5cdFx0cmV0dXJuIHRoaXM7XHRcdFxyXG5cdH0pLmJpbmQoZWxlbWVudCk7XHJcblx0XHJcblx0cmV0dXJuIGVsZW1lbnQ7XHJcbn07XHJcblxyXG5cclxuY29uc3Qgc3VwcG9ydCA9IEV4dGVuZGVyKFwiU2hvd0hpZGVTdXBwb3J0XCIsIFByb3RvdHlwZSA9PiB7XHJcblx0UHJvdG90eXBlLnNob3cgPSBmdW5jdGlvbigpIHtcclxuXHRcdHJldHVybiBpbml0KHRoaXMpLnNob3cuYXBwbHkobnVsbCwgYXJndW1lbnRzKVxyXG5cdH07XHJcblxyXG5cdFByb3RvdHlwZS5oaWRlID0gZnVuY3Rpb24oKSB7XHJcblx0XHRyZXR1cm4gaW5pdCh0aGlzKS5oaWRlLmFwcGx5KG51bGwsIGFyZ3VtZW50cylcclxuXHR9O1xyXG5cclxuXHRQcm90b3R5cGUudG9nZ2xlU2hvdyA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0cmV0dXJuIGlzSGlkZGVuKHRoaXMpID8gdGhpcy5zaG93KCkgOiB0aGlzLmhpZGUoKTtcclxuXHR9O1xyXG5cclxufSk7XHJcbmV4cG9ydCBkZWZhdWx0IHN1cHBvcnQ7IiwiaW1wb3J0IEV4dGVuZGVyIGZyb20gXCIuLi8uLi91dGlscy9FeHRlbmRlclwiO1xyXG5cclxuY29uc3QgSW5wdXRUeXBlcyA9IFtcclxuXHR7XHJcblx0XHRzZWxlY3RvciA6IFwic2VsZWN0XCIsXHJcblx0XHRnZXQgOiBmdW5jdGlvbigpe1xyXG5cdFx0XHRjb25zdCByZXN1bHQgPSBbXTtcclxuXHRcdFx0dGhpcy5maW5kKFwib3B0aW9uXCIpLmZvckVhY2gob3B0aW9uID0+IHtcclxuXHRcdFx0XHRpZihvcHRpb24uc2VsZWN0ZWQpXHJcblx0XHRcdFx0XHRyZXN1bHQucHVzaChvcHRpb24udmFsdWUpO1xyXG5cdFx0XHR9KTtcdFx0XHRcclxuXHRcdFx0cmV0dXJuIHJlc3VsdDtcclxuXHRcdH0sXHJcblx0XHRzZXQgOiBmdW5jdGlvbigpe1x0XHRcdFx0XHJcblx0XHRcdGxldCB2YWx1ZXMgPSBbXTtcclxuXHRcdFx0Y29uc3QgYXJncyA9IEFycmF5LmZyb20oYXJndW1lbnRzKTtcclxuXHRcdFx0bGV0IGFyZyA9IGFyZ3Muc2hpZnQoKTtcclxuXHRcdFx0d2hpbGUoYXJnKXtcclxuXHRcdFx0XHRpZihBcnJheS5pc0FycmF5KGFyZykpXHJcblx0XHRcdFx0XHR2YWx1ZXMgPSB2YWx1ZXMuY29uY2F0KGFyZyk7XHJcblx0XHRcdFx0ZWxzZVxyXG5cdFx0XHRcdFx0dmFsdWVzLnB1c2goYXJnKTtcclxuXHRcdFx0XHRcclxuXHRcdFx0XHRhcmcgPSBhcmdzLnNoaWZ0KCk7XHJcblx0XHRcdH1cclxuXHRcdFx0dGhpcy52YWx1ZSA9IHZhbHVlcztcclxuXHRcdFx0dGhpcy5maW5kKFwib3B0aW9uXCIpLmZvckVhY2gob3B0aW9uID0+IG9wdGlvbi5zZWxlY3RlZCA9IHZhbHVlcy5pbmRleE9mKG9wdGlvbi52YWx1ZSkgPj0gMCk7XHRcdFx0XHJcblx0XHRcdHRoaXMudHJpZ2dlcihcImNoYW5nZWRcIik7XHJcblx0XHR9XHRcdFx0XHJcblx0fSxcclxuXHR7XHJcblx0XHRzZWxlY3RvciA6IFwiaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXSwgaW5wdXRbdHlwZT1cXFwicmFkaW9cXFwiXVwiLFxyXG5cdFx0Z2V0IDogZnVuY3Rpb24oKXtcclxuXHRcdFx0aWYodGhpcy52YWx1ZSA9PSBcIm9uXCIgfHwgdGhpcy52YWx1ZSA9PSBcIm9mZlwiKVxyXG5cdFx0XHRcdHJldHVybiB0aGlzLmNoZWNrZWQ7XHJcblx0XHRcdGVsc2UgaWYodGhpcy5jaGVja2VkKVxyXG5cdFx0XHRcdHJldHVybiB0aGlzLnZhbHVlO1x0XHRcdFx0XHJcblx0XHR9LFxyXG5cdFx0c2V0IDogZnVuY3Rpb24oYVZhbHVlKXtcclxuXHRcdFx0aWYodHlwZW9mIGFWYWx1ZSA9PT0gXCJib29sZWFuXCIpXHJcblx0XHRcdFx0dGhpcy5jaGVja2VkID0gYVZhbHVlO1xyXG5cdFx0XHRlbHNlIGlmKHR5cGVvZiBhVmFsdWUgPT09IFwic3RyaW5nXCIpXHJcblx0XHRcdFx0dGhpcy5jaGVja2VkID0gdGhpcy52YWx1ZSA9PSBhVmFsdWU7XHJcblx0XHRcdGVsc2UgaWYoQXJyYXkuaXNBcnJheShhVmFsdWUpKVxyXG5cdFx0XHRcdHRoaXMuY2hlY2tlZCA9IGFWYWx1ZS5pbmRleE9mKHRoaXMudmFsdWUpID49IDA7XHJcblx0XHRcdFxyXG5cdFx0XHR0aGlzLnRyaWdnZXIoXCJjaGFuZ2VkXCIpO1xyXG5cdFx0fVxyXG5cdH1cclxuXTtcclxuXHJcbmNvbnN0IERlZmF1bHRJbnB1dFR5cGUgPSB7XHJcblx0XHRnZXQgOiBmdW5jdGlvbigpe1xyXG5cdFx0XHRyZXR1cm4gdGhpcy52YWx1ZTtcclxuXHRcdH0sXHJcblx0XHRzZXQgOiBmdW5jdGlvbihhVmFsdWUpe1xyXG5cdFx0XHR0aGlzLnZhbHVlID0gYVZhbHVlO1xyXG5cdFx0XHR0aGlzLnRyaWdnZXIoXCJpbnB1dFwiKTtcclxuXHRcdH1cdFxyXG59O1xyXG5cclxuY29uc3QgZ2V0SW5wdXRUeXBlID0gZnVuY3Rpb24oYUVsZW1lbnQpe1xyXG5cdGZvcihsZXQgaSA9IDA7IGkgPCBJbnB1dFR5cGVzLmxlbmd0aDsgaSsrKVxyXG5cdFx0aWYoYUVsZW1lbnQuaXMoSW5wdXRUeXBlc1tpXS5zZWxlY3RvcikpXHJcblx0XHRcdHJldHVybiBJbnB1dFR5cGVzW2ldO1x0XHRcclxuXHRyZXR1cm4gRGVmYXVsdElucHV0VHlwZTtcclxufTtcclxuXHJcblxyXG5jb25zdCBzdXBwb3J0ID0gRXh0ZW5kZXIoXCJWYWx1ZVN1cHBvcnRcIiwgUHJvdG90eXBlID0+IHtcdFxyXG5cdFByb3RvdHlwZS52YWwgPSBmdW5jdGlvbigpIHtcclxuXHRcdGxldCB0eXBlID0gZ2V0SW5wdXRUeXBlKHRoaXMpO1xyXG5cdFx0aWYoYXJndW1lbnRzLmxlbmd0aCA9PSAwKVxyXG5cdFx0XHRyZXR1cm4gdHlwZS5nZXQuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxuXHRcdGVsc2VcclxuXHRcdFx0dHlwZS5zZXQuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxuXHRcdFx0XHJcblx0XHRyZXR1cm4gdGhpcztcclxuXHR9O1x0XHJcbn0pO1xyXG5leHBvcnQgZGVmYXVsdCBzdXBwb3J0OyIsImltcG9ydCBcIi4vZG9tL0V2ZW50VGFyZ2V0XCI7XHJcbmltcG9ydCBcIi4vZG9tL05vZGVcIjtcclxuaW1wb3J0IFwiLi9kb20vRWxlbWVudFwiO1xyXG5pbXBvcnQgXCIuL2RvbS9Eb2N1bWVudFwiO1xyXG5pbXBvcnQgXCIuL2RvbS9Eb2N1bWVudEZyYWdtZW50XCI7XHJcbmltcG9ydCBcIi4vZG9tL0hUTUxFbGVtZW50XCI7XHJcbmltcG9ydCBcIi4vZG9tL0hUTUxJbnB1dEVsZW1lbnRcIjtcclxuaW1wb3J0IFwiLi9kb20vSFRNTFRleHRBcmVhRWxlbWVudFwiO1xyXG5pbXBvcnQgXCIuL2RvbS9IVE1MU2VsZWN0RWxlbWVudFwiO1xyXG5pbXBvcnQgXCIuL2RvbS9Ob2RlTGlzdFwiO1xyXG5pbXBvcnQgXCIuL2RvbS9IdG1sQ29sbGVjdGlvblwiO1xyXG5pbXBvcnQgXCIuL0dsb2JhbFwiO1xyXG4iLCJjb25zdCBEZWxlZ2F0ZXJCdWlsZGVyID0gZnVuY3Rpb24oKSB7XHJcblx0Y29uc3QgYXJncyA9IEFycmF5LmZyb20oYXJndW1lbnRzKTtcclxuXHRjb25zdCBjYWxsYmFjayA9IGFyZ3Muc2hpZnQoKTtcclxuXHRjb25zdCBzb3VyY2UgPSBhcmdzLnNoaWZ0KCk7XHJcblx0YXJncy5mb3JFYWNoKCB0YXJnZXQgPT57XHJcblx0XHRPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh0YXJnZXQpXHJcblx0XHQuZm9yRWFjaChuYW1lID0+IHtcclxuXHRcdFx0Y29uc3QgcHJvcCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBuYW1lKTtcclxuXHRcdFx0aWYgKHR5cGVvZiBzb3VyY2VbbmFtZV0gPT09IFwidW5kZWZpbmVkXCIgJiYgdHlwZW9mIHByb3AudmFsdWUgPT09IFwiZnVuY3Rpb25cIilcclxuXHRcdFx0XHRzb3VyY2VbbmFtZV0gPSBmdW5jdGlvbigpe1xyXG5cdFx0XHRcdFx0cmV0dXJuIGNhbGxiYWNrLmNhbGwodGhpcywgbmFtZSwgYXJndW1lbnRzKTtcclxuXHRcdFx0XHR9O1x0XHRcdFx0XHRcdFx0XHRcdFx0XHJcblx0XHR9KTtcclxuXHR9KTtcclxuXHRcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgRGVsZWdhdGVyQnVpbGRlcjsiLCJjb25zdCBleHRlbmRQcm90b3R5cGUgPSBmdW5jdGlvbigpe1xyXG5cdGNvbnN0IGFyZ3MgPSBBcnJheS5mcm9tKGFyZ3VtZW50cyk7XHJcblx0Y29uc3QgdHlwZSA9IGFyZ3Muc2hpZnQoKTtcdFxyXG5cdHdoaWxlKGFyZ3MubGVuZ3RoID4gMCl7XHJcblx0XHRjb25zdCBleHRlbmRlciA9IGFyZ3Muc2hpZnQoKTtcclxuXHRcdGV4dGVuZGVyKHR5cGUpO1xyXG5cdH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGV4dGVuZFByb3RvdHlwZTsiLCJpbXBvcnQgVXRpbHMgZnJvbSBcIi4vVXRpbHNcIjtcclxuXHJcbmNvbnN0IEVYVEVOU0lPTlNfTUFQID0gVXRpbHMuZ2xvYmFsVmFyKFwiX19fRE9NX0FQSV9FWFRFTlNJT05fTUFQX19fXCIsIHt9KTtcclxuY29uc3QgRXh0ZW5kZXIgPSBmdW5jdGlvbihhTmFtZSwgYUV4dGVudGlvbil7XHJcblx0cmV0dXJuIGZ1bmN0aW9uKGFUeXBlKXtcdFxyXG5cdFx0bGV0IGV4dGVuc2lvbnMgPSBFWFRFTlNJT05TX01BUFthVHlwZS5uYW1lXTtcclxuXHRcdGlmKCFleHRlbnNpb25zKVxyXG5cdFx0XHRleHRlbnNpb25zID0gRVhURU5TSU9OU19NQVBbYVR5cGUubmFtZV0gPSB7fTtcdFx0XHJcblx0XHRcclxuXHRcdGlmKCFleHRlbnNpb25zW2FOYW1lXSl7XHJcblx0XHRcdGV4dGVuc2lvbnNbYU5hbWVdID0gdHJ1ZTtcclxuXHRcdFx0YUV4dGVudGlvbihhVHlwZS5wcm90b3R5cGUpO1xyXG5cdFx0fVxyXG5cdFx0ZWxzZVxyXG5cdFx0XHRjb25zb2xlLndhcm4oXCJkdXBsaWNhdGVkIGxvYWQgb2YgZXh0ZW5zaW9uIFxcXCJcIiArIGFOYW1lICsgXCJcXFwiIVwiKTtcclxuXHR9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBFeHRlbmRlcjsiLCJjb25zdCBVdGlscyA9IHtcclxuXHRnbG9iYWwgOiAoKCkgPT4ge1xyXG5cdFx0aWYodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIikgcmV0dXJuIHdpbmRvdztcclxuXHRcdGlmKHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIpIHJldHVybiBnbG9iYWw7XHJcblx0XHRpZih0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIikgcmV0dXJuIHNlbGY7XHJcblx0XHRyZXR1cm4ge307XHRcdFxyXG5cdH0pKCksXHJcblx0Z2xvYmFsVmFyIDogZnVuY3Rpb24oYU5hbWUsIGFJbml0VmFsdWUpe1xyXG5cdFx0aWYoYXJndW1lbnRzLmxlbmd0aCA9PT0gMiAmJiB0eXBlb2YgVXRpbHMuZ2xvYmFsW2FOYW1lXSA9PT0gXCJ1bmRlZmluZWRcIilcclxuXHRcdFx0VXRpbHMuZ2xvYmFsW2FOYW1lXSA9IGFJbml0VmFsdWU7XHJcblx0XHRcclxuXHRcdHJldHVybiBVdGlscy5nbG9iYWxbYU5hbWVdO1x0XHRcclxuXHR9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBVdGlsczsiLCJpbXBvcnQgeyBsYXp5UHJvbWlzZSB9IGZyb20gXCJAZGVmYXVsdC1qcy9kZWZhdWx0anMtY29tbW9uLXV0aWxzL3NyYy9Qcm9taXNlVXRpbHMuanNcIjtcclxuaW1wb3J0IERpcmVjdGl2ZSBmcm9tIFwiLi9EaXJlY3RpdmUuanNcIjtcclxuaW1wb3J0IFRlbXBsYXRlIGZyb20gXCIuL1RlbXBsYXRlLmpzXCI7XHJcbmltcG9ydCB7IEV4cHJlc3Npb25SZXNvbHZlciB9IGZyb20gXCJAZGVmYXVsdC1qcy9kZWZhdWx0anMtZXhwcmVzc2lvbi1sYW5ndWFnZS9pbmRleC5qc1wiO1xyXG5pbXBvcnQge1JlbmRlcmVyfSBmcm9tIFwiLi9SZW5kZXJlci5qc1wiO1xyXG5cclxuY29uc3QgUFJJVkFURV9XQUlUID0gXCJ3YWl0XCI7XHJcbmNvbnN0IFBSSVZBVEVfQ0FMTEJBQ0tTID0gXCJjYWxsYmFja3NcIjtcclxuY29uc3QgUFJJVkFURV9JR05PUkVESVJFQ1RJVkVTID0gXCJpZ25vcmVEaXJlY3RpdmVzXCI7XHJcblxyXG5jb25zdCBDT05URVhUQ0xPTkUgPSBuZXcgU2V0KCk7XHJcbmNvbnN0IENPTlRFWFRTID0gbmV3IE1hcCgpO1xyXG5jb25zdCBXQVJOVElNRSA9IDEwMDA7XHJcbmNvbnN0IENSSVRJQ0FMVElNRSA9IDEwMDAwO1xyXG5cclxubGV0IG9ic2VydmVyVGltZW91dCA9IG51bGw7XHJcbmNvbnN0IG9ic2VydmUgPSAoY29udGV4dCkgPT4ge1xyXG5cdENPTlRFWFRTLnNldChjb250ZXh0LCBEYXRlLm5vdygpKTtcclxuXHRydW5PYnNlcnZlcigpO1xyXG59O1xyXG5jb25zdCBydW5PYnNlcnZlciA9ICgpID0+IHtcclxuXHRpZiAob2JzZXJ2ZXJUaW1lb3V0ID09IG51bGwpIHtcclxuXHRcdG9ic2VydmVyVGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xyXG5cdFx0XHRvYnNlcnZlclRpbWVvdXQgPSBudWxsO1xyXG5cdFx0XHRjb25zdCB0aW1lID0gRGF0ZS5ub3coKTtcclxuXHRcdFx0Q09OVEVYVFMuZm9yRWFjaCgoY3JlYXRlVGltZSwgY29udGV4dCkgPT4ge1xyXG5cdFx0XHRcdGNvbnN0IGRlbHRhID0gdGltZSAtIGNyZWF0ZVRpbWU7XHJcblx0XHRcdFx0aWYgKGNvbnRleHQuY2xvc2VkKSBDT05URVhUUy5kZWxldGUoY29udGV4dCk7XHJcblx0XHRcdFx0ZWxzZSB7XHJcblx0XHRcdFx0XHRpZiAoZGVsdGEgPiBDUklUSUNBTFRJTUUpIHtcclxuXHRcdFx0XHRcdFx0Y29uc29sZS5lcnJvcihcImNvbnRleHQgbGl2ZXMgbG9uZ2VyIHRoZW4gMTBzXCIsIGRlbHRhIC8gMTAwMCwgY29udGV4dCk7XHJcblx0XHRcdFx0XHR9IGVsc2UgaWYgKGRlbHRhID4gV0FSTlRJTUUpIHtcclxuXHRcdFx0XHRcdFx0Y29uc29sZS53YXJuKFwiY29udGV4dCBsaXZlcyBsb25nZXIgdGhlbiAxc1wiLCBkZWx0YSAvIDEwMDAsIGNvbnRleHQpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSk7XHJcblx0XHRcdGNvbnNvbGUubG9nKFwib3BlbiBjb250ZXh0OlwiLCBDT05URVhUUy5zaXplKTtcclxuXHRcdFx0aWYgKENPTlRFWFRTLnNpemUgPiAwKSBydW5PYnNlcnZlcigpO1xyXG5cdFx0fSwgMTAwMCk7XHJcblx0fVxyXG59O1xyXG5cclxuY29uc3QgdG9UZW1wbGF0ZSA9ICh0ZW1wbGF0ZSkgPT4ge1xyXG5cdGlmICh0ZW1wbGF0ZSBpbnN0YW5jZW9mIFRlbXBsYXRlKSByZXR1cm4gdGVtcGxhdGUuaW1wb3J0Q29udGVudCgpO1xyXG5cdGVsc2UgaWYgKHR5cGVvZiB0ZW1wbGF0ZSA9PT0gU3RyaW5nKSByZXR1cm4gY3JlYXRlKHRlbXBsYXRlKTtcclxuXHRyZXR1cm4gdGVtcGxhdGU7XHJcbn07XHJcblxyXG5sZXQgaWQgPSAwO1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb250ZXh0IHtcclxuXHQjaWQ7XHJcblx0I2RlcHRoO1xyXG5cdCNwYXJlbnQ7XHJcblx0I3JlbmRlcmVyO1xyXG5cdCNyb290O1xyXG5cdCN0ZW1wbGF0ZTtcclxuXHQjbW9kZTtcclxuXHQjc3ViY29udGV4dHM7XHJcblx0I3dhaXQ7XHJcblx0I2lnbm9yZURpcmVjdGl2ZXM7XHJcblx0I2NhbGxiYWNrcztcclxuXHJcblx0XHJcblx0LyoqXHJcblx0ICogQ3JlYXRlcyBhbiBpbnN0YW5jZSBvZiBDb250ZXh0LlxyXG5cdCAqXHJcblx0ICogQGNvbnN0cnVjdG9yXHJcblx0ICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnNcclxuXHQgKiBAcGFyYW0ge05vZGVMaXN0fSBbb3B0aW9ucy5jb250ZW50PW51bGxdIFxyXG5cdCAqIEBwYXJhbSB7RXhwcmVzc2lvblJlc29sdmVyfSBvcHRpb25zLnJlc29sdmVyIFxyXG5cdCAqIEBwYXJhbSB7UmVuZGVyZXJ9IG9wdGlvbnMucmVuZGVyZXIgXHJcblx0ICogQHBhcmFtIHtUZW1wbGF0ZXxzdHJpbmd9IG9wdGlvbnMudGVtcGxhdGUgXHJcblx0ICogQHBhcmFtIHtIVE1MRWxlbWVudH0gb3B0aW9ucy5jb250YWluZXIgXHJcblx0ICogQHBhcmFtIHtIVE1MRWxlbWVudH0gb3B0aW9ucy5yb290IFxyXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0aW9ucy5tb2RlPVwicmVwbGFjZVwiXSBcclxuXHQgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBbb3B0aW9ucy50YXJnZXQ9bnVsbF0gXHJcblx0ICogQHBhcmFtIHtDb250ZXh0fSBbb3B0aW9ucy5wYXJlbnQ9bnVsbF0gXHJcblx0ICogQHBhcmFtIHtQcm9taXNlPD59IFtvcHRpb25zLndhaXQ9bnVsbF0gXHJcblx0ICogQHBhcmFtIHtBcnJheTxGdW5jdGlvbj59IFtvcHRpb25zLmNhbGxiYWNrcz1udWxsXSBcclxuXHQgKiBAcGFyYW0ge1NldDxEaXJlY3RpdmV8c3RyaW5nPn0gb3B0aW9ucy5pZ25vcmVEaXJlY3RpdmUgXHJcblx0ICovXHJcblx0Y29uc3RydWN0b3IoeyBjb250ZW50ID0gbnVsbCwgcmVzb2x2ZXIsIHJlbmRlcmVyLCB0ZW1wbGF0ZSwgY29udGFpbmVyLCByb290LCBtb2RlID0gXCJyZXBsYWNlXCIsIHRhcmdldCA9IG51bGwsIHBhcmVudCA9IG51bGwsIHdhaXQgPSBudWxsLCBjYWxsYmFja3MgPSBudWxsLCBpZ25vcmVEaXJlY3RpdmUgfSkge1xyXG5cdFx0aWYgKCFyZXNvbHZlcikgdGhyb3cgbmV3IEVycm9yKCdQYXJhbWV0ZXIgXCJyZXNvbHZlclwiIGlzIHJlcXVpcmVkIScpO1xyXG5cdFx0aWYgKCFyZW5kZXJlcikgdGhyb3cgbmV3IEVycm9yKCdQYXJhbWV0ZXIgXCJyZW5kZXJlclwiIGlzIHJlcXVpcmVkIScpO1xyXG5cdFx0aWYgKCF0ZW1wbGF0ZSkgdGhyb3cgbmV3IEVycm9yKCdQYXJhbWV0ZXIgXCJ0ZW1wbGF0ZVwiIGlzIHJlcXVpcmVkIScpO1xyXG5cdFx0aWYgKCFjb250YWluZXIpIHRocm93IG5ldyBFcnJvcignUGFyYW1ldGVyIFwiY29udGFpbmVyXCIgaXMgcmVxdWlyZWQhJyk7XHJcblx0XHRpZiAoIXJvb3QpIHRocm93IG5ldyBFcnJvcignUGFyYW1ldGVyIFwicm9vdFwiIGlzIHJlcXVpcmVkIScpO1xyXG5cclxuXHRcdHRoaXMuI2lkID0gcGFyZW50ID8gYCR7cGFyZW50LmlkfS0+JHtpZCsrfWAgOiBgcm9vdDo6JHtpZCsrfWA7XHJcblx0XHR0aGlzLiNkZXB0aCA9IHBhcmVudCA/IHBhcmVudC5kZXB0aCArIDEgOiAwO1xyXG5cdFx0dGhpcy4jcGFyZW50ID0gcGFyZW50O1xyXG5cdFx0dGhpcy4jcmVuZGVyZXIgPSByZW5kZXJlcjtcclxuXHRcdHRoaXMuI3Jvb3QgPSByb290O1xyXG5cdFx0dGhpcy4jdGVtcGxhdGUgPSB0b1RlbXBsYXRlKHRlbXBsYXRlKTtcclxuXHRcdHRoaXMuI21vZGUgPSBtb2RlO1xyXG5cdFx0dGhpcy4jc3ViY29udGV4dHMgPSBuZXcgU2V0KCk7XHJcblx0XHR0aGlzLiN3YWl0ID0gd2FpdCA/IHdhaXQgOiBsYXp5UHJvbWlzZSgpO1xyXG5cdFx0dGhpcy4jaWdub3JlRGlyZWN0aXZlcyA9IGlnbm9yZURpcmVjdGl2ZSBpbnN0YW5jZW9mIFNldCA/IGlnbm9yZURpcmVjdGl2ZSA6IG5ldyBTZXQoKTtcclxuXHRcdHRoaXMuI2NhbGxiYWNrcyA9IGNhbGxiYWNrcyBpbnN0YW5jZW9mIEFycmF5ID8gY2FsbGJhY2tzIDogW107XHJcblxyXG5cdFx0dGhpcy5jb250ZW50ID0gY29udGVudDtcclxuXHRcdHRoaXMuY29udGFpbmVyID0gY29udGFpbmVyO1xyXG5cdFx0dGhpcy50YXJnZXQgPSB0YXJnZXQ7XHJcblx0XHR0aGlzLnJlc29sdmVyID0gcmVzb2x2ZXI7XHJcblxyXG5cdFx0LyogZXhlY3V0aW9uIGZsYWdzICovXHJcblx0XHR0aGlzLnN0b3AgPSBmYWxzZTtcclxuXHRcdHRoaXMuaWdub3JlID0gZmFsc2U7XHJcblx0XHQvL2NvbnNvbGUubG9nKGBjb250ZXh0PXtcImRlcHRoXCI6JHt0aGlzLmRlcHRofSB9LCBcImlkXCI6ICR7dGhpcy5pZH1gKTtcclxuXHRcdC8vdGhpcy5jcmVhdGV0QXQgPSBuZXcgRXJyb3IoKTtcclxuXHJcblx0XHRpZiAocGFyZW50KSB7XHJcblx0XHRcdHBhcmVudC5zdWJjb250ZXh0cy5hZGQodGhpcyk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRnZXQgaWQoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy4jaWQ7XHJcblx0fVxyXG5cdGdldCBkZXB0aCgpIHtcclxuXHRcdHJldHVybiB0aGlzLiNkZXB0aDtcclxuXHR9XHJcblx0Z2V0IHBhcmVudCgpIHtcclxuXHRcdHJldHVybiB0aGlzLiNwYXJlbnQ7XHJcblx0fVxyXG5cdGdldCByZW5kZXJlcigpIHtcclxuXHRcdHJldHVybiB0aGlzLiNyZW5kZXJlcjtcclxuXHR9XHJcblx0Z2V0IHJvb3QoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy4jcm9vdDtcclxuXHR9XHJcblx0Z2V0IHRlbXBsYXRlKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuI3RlbXBsYXRlO1xyXG5cdH1cclxuXHRzZXQgdGVtcGxhdGUodGVtcGxhdGUpe1xyXG5cdFx0dGhpcy4jdGVtcGxhdGUgPSB0b1RlbXBsYXRlKHRlbXBsYXRlKTtcclxuXHR9XHJcblxyXG5cdGdldCBtb2RlKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuI21vZGU7XHJcblx0fVxyXG5cdGdldCBzdWJjb250ZXh0cygpIHtcclxuXHRcdHJldHVybiB0aGlzLiNzdWJjb250ZXh0cztcclxuXHR9XHJcblxyXG5cdGdldCBjbG9zZWQoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy4jd2FpdC5yZXNvbHZlZDtcclxuXHR9XHJcblxyXG5cdGlnbm9yZURpcmVjdGl2ZShkaXJlY3RpdmUpIHtcclxuXHRcdGNvbnN0IGlnbm9yZURpcmVjdGl2ZXMgPSB0aGlzLiNpZ25vcmVEaXJlY3RpdmVzO1xyXG5cdFx0ZGlyZWN0aXZlIGluc3RhbmNlb2YgRGlyZWN0aXZlID8gaWdub3JlRGlyZWN0aXZlcy5hZGQoZGlyZWN0aXZlLm5hbWUpIDogaWdub3JlRGlyZWN0aXZlcy5hZGQoZGlyZWN0aXZlKTtcclxuXHR9XHJcblxyXG5cdGFjY2VwdERpcmVjdGl2ZShkaXJlY3RpdmUpIHtcclxuXHRcdGNvbnN0IGlnbm9yZURpcmVjdGl2ZXMgPSB0aGlzLiNpZ25vcmVEaXJlY3RpdmVzO1xyXG5cdFx0aWYgKGRpcmVjdGl2ZSBpbnN0YW5jZW9mIERpcmVjdGl2ZSkgcmV0dXJuICEoaWdub3JlRGlyZWN0aXZlcy5oYXMoZGlyZWN0aXZlLm5hbWUpIHx8IGlnbm9yZURpcmVjdGl2ZXMuaGFzKGRpcmVjdGl2ZSkpO1xyXG5cclxuXHRcdHJldHVybiAhaWdub3JlRGlyZWN0aXZlcy5oYXMoZGlyZWN0aXZlKTtcclxuXHR9XHJcblxyXG5cdGZpbmlzaGVkKGNhbGxiYWNrKSB7XHJcblx0XHRpZiAodGhpcy5wYXJlbnQpIHRoaXMucGFyZW50LmZpbmlzaGVkKGNhbGxiYWNrKTtcclxuXHRcdGVsc2UgdGhpcy5yZWFkeShjYWxsYmFjayk7XHJcblx0fVxyXG5cclxuXHRhc3luYyByZWFkeShjYWxsYmFjaykge1xyXG5cdFx0Y29uc3QgY2FsbGJhY2tzID0gdGhpcy4jY2FsbGJhY2tzO1xyXG5cdFx0aWYgKGNhbGxiYWNrKSB7XHJcblx0XHRcdGlmIChjYWxsYmFjayBpbnN0YW5jZW9mIEFycmF5KSBjYWxsYmFjay5mb3JFYWNoKChjYWxsYmFjaykgPT4gdGhpcy53YWl0LnRoZW4oY2FsbGJhY2spKTtcclxuXHRcdFx0ZWxzZSBpZiAoY2FsbGJhY2sgaW5zdGFuY2VvZiBQcm9taXNlKSBjYWxsYmFja3MucHVzaChhc3luYyAoKSA9PiBhd2FpdCBjYWxsYmFjayk7XHJcblx0XHRcdGVsc2UgaWYgKHR5cGVvZiBjYWxsYmFjayA9PT0gXCJmdW5jdGlvblwiKSBjYWxsYmFja3MucHVzaChjYWxsYmFjayk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRjb25zdCB3YWl0ID0gdGhpcy4jd2FpdDtcclxuXHRcdFx0aWYgKCF3YWl0LnJlc29sdmVkKSB7XHJcblx0XHRcdFx0aWYgKCF0aGlzLmlnbm9yZSkgZm9yIChsZXQgY2FsbGJhY2sgb2YgY2FsbGJhY2tzKSBhd2FpdCBjYWxsYmFjayh0aGlzKTtcclxuXHJcblx0XHRcdFx0Zm9yIChsZXQgY2hpbGQgb2YgdGhpcy5zdWJjb250ZXh0cykgYXdhaXQgY2hpbGQucmVhZHkoKTtcclxuXHJcblx0XHRcdFx0aWYgKHRoaXMucGFyZW50KSB0aGlzLnBhcmVudC5zdWJjb250ZXh0cy5kZWxldGUodGhpcyk7XHJcblxyXG5cdFx0XHRcdHdhaXQucmVzb2x2ZSh0aGlzKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0cmV0dXJuIHdhaXQ7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRzdWJDb250ZXh0KHsgcmVzb2x2ZXIgPSB0aGlzLnJlc29sdmVyLCByZW5kZXJlciA9IHRoaXMucmVuZGVyZXIsIHRlbXBsYXRlID0gdGhpcy50ZW1wbGF0ZSwgY29udGFpbmVyID0gdGhpcy5jb250YWluZXIsIHJvb3QgPSB0aGlzLnJvb3QsIG1vZGUgPSB0aGlzLm1vZGUsIHRhcmdldCA9IHRoaXMudGFyZ2V0LCBpZ25vcmVEaXJlY3RpdmUgPSBudWxsIH0gPSB7fSkge1xyXG5cdFx0cmV0dXJuIG5ldyBDb250ZXh0KHsgcmVzb2x2ZXIsIHJlbmRlcmVyLCB0ZW1wbGF0ZSwgY29udGFpbmVyLCBtb2RlLCByb290LCB0YXJnZXQsIHBhcmVudDogdGhpcywgaWdub3JlRGlyZWN0aXZlIH0pO1xyXG5cdH1cclxuXHJcblx0Y2xvbmUoeyBjb250ZW50ID0gdGhpcy5jb250ZW50LCB0ZW1wbGF0ZSA9IHRoaXMudGVtcGxhdGUsIGNvbnRhaW5lciA9IHRoaXMuY29udGFpbmVyLCByb290ID0gdGhpcy5yb290LCBtb2RlID0gdGhpcy5tb2RlLCB0YXJnZXQgPSB0aGlzLnRhcmdldCwgaWdub3JlRGlyZWN0aXZlID0gdGhpcy4jaWdub3JlRGlyZWN0aXZlcyB9ID0ge30pIHtcclxuXHRcdHJldHVybiBuZXcgQ29udGV4dCh7IGNvbnRlbnQsIFxyXG5cdFx0XHRyZXNvbHZlcjogdGhpcy5yZXNvbHZlciwgXHJcblx0XHRcdHJlbmRlcmVyOiB0aGlzLnJlbmRlcmVyLCBcclxuXHRcdFx0dGVtcGxhdGUsIFxyXG5cdFx0XHRjb250YWluZXIsIFxyXG5cdFx0XHRyb290LCBcclxuXHRcdFx0bW9kZSwgXHJcblx0XHRcdHRhcmdldCwgXHJcblx0XHRcdGlnbm9yZURpcmVjdGl2ZSxcclxuXHRcdFx0d2FpdDogdGhpcy4jd2FpdCxcclxuXHRcdFx0Y2FsbGJhY2tzOiB0aGlzLiNjYWxsYmFja3NcclxuXHRcdCB9KTtcclxuXHR9XHJcblxyXG5cdHRvUmVuZGVyT3B0aW9uKHsgcmVzb2x2ZXIgPSB0aGlzLnJlc29sdmVyLCByZW5kZXJlciA9IHRoaXMucmVuZGVyZXIsIHRlbXBsYXRlID0gdGhpcy50ZW1wbGF0ZSwgY29udGFpbmVyID0gdGhpcy5jb250YWluZXIsIHJvb3QgPSB0aGlzLnJvb3QsIG1vZGUgPSB0aGlzLm1vZGUsIHRhcmdldCA9IHRoaXMudGFyZ2V0LCBpZ25vcmVEaXJlY3RpdmUgPSBudWxsIH0gPSB7fSkge1xyXG5cdFx0cmV0dXJuIHsgcmVzb2x2ZXIsIHJlbmRlcmVyLCB0ZW1wbGF0ZSwgY29udGFpbmVyLCBtb2RlLCByb290LCB0YXJnZXQsIHBhcmVudDogbnVsbCwgaWdub3JlRGlyZWN0aXZlIH07XHJcblx0fVxyXG59XHJcbiIsImltcG9ydCBDb250ZXh0IGZyb20gXCIuL0NvbnRleHQuanNcIjtcblxuXG5jb25zdCBERUZJTkVEX0RJUkVDVElWRVMgPSBbXTtcblxuXG4vKipcbiAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zXG4gKiBAcGFyYW0ge0RpcmVjdGl2ZX0gb3B0aW9ucy5kaXJlY3RpdmUgXG4gKi9cbmNvbnN0IGRlZmluZURpcmVjdGl2ZSA9ICh7IGRpcmVjdGl2ZSB9KSA9PiB7XG5cdGlmICghKGRpcmVjdGl2ZSBpbnN0YW5jZW9mIERpcmVjdGl2ZSkpXG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiSW1wbGVtZW50YXRpb24gZG9zbid0IGV4dGVuZCBEaXJlY3RpdmUgY2xhc3MhXCIpO1xuXG5cdGlmIChkaXJlY3RpdmUucmFuayA8IERpcmVjdGl2ZS5NSU5fUkFOSylcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJUaGUgcmFuayBvZiBhIGRpcmVjdGl2ZSBjYW4ndCBiZSBsb3dlciBhcyBcIiArIERpcmVjdGl2ZS5NSU5fUkFOSyArIFwiIVwiKTtcblxuXHRpZiAoZGlyZWN0aXZlLnJhbmsgPiBEaXJlY3RpdmUuTUFYX1JBTkspXG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiVGhlIHJhbmsgb2YgYSBkaXJlY3RpdmUgY2FuJ3QgYmUgZ3JhdGVyIGFzIFwiICsgRGlyZWN0aXZlLk1BWF9SQU5LICsgXCIhXCIpO1xuXG5cdERFRklORURfRElSRUNUSVZFUy5wdXNoKGRpcmVjdGl2ZSk7XG5cdERFRklORURfRElSRUNUSVZFUy5zb3J0KChhLCBiKSA9PiB7XG5cdFx0Y29uc3QgcGhhc2UgPSBhLnBoYXNlIC0gYi5waGFzZTtcblx0XHRpZihwaGFzZSA9PSAwKVxuXHRcdFx0cmV0dXJuIGEucmFuayAtIGIucmFuaztcblx0XHRcdFxuXHRcdHJldHVybiBwaGFzZTtcblx0fSk7XG59O1xuXG4vKipcbiAqIEByZWFkb25seVxuICogQGVudW0ge251bWJlcn1cdFxuICovXG5leHBvcnQgY29uc3QgUEhBU0UgPSB7XG5cdGluaXQ6IDAsXG5cdGRhdGE6IDEsXG5cdHRlbXBsYXRlOiAyLFxuXHRjb250ZW50OiAzLFxuXHRmaW5pc2g6IDRcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERpcmVjdGl2ZSB7XG5cblx0LyoqIEBlbnVtIHtQSEFTRX0gKi9cblx0c3RhdGljIGdldCBQSEFTRSgpIHsgcmV0dXJuIFBIQVNFIH07XG5cdC8qKiBAZW51bSB7bnVtYmVyfSAqL1xuXHRzdGF0aWMgZ2V0IE1JTl9SQU5LKCkgeyByZXR1cm4gMCB9O1xuXHQvKiogQGVudW0ge251bWJlcn0gKi9cblx0c3RhdGljIGdldCBNQVhfUkFOSygpIHsgcmV0dXJuIDEwMDAwMCB9O1xuXG5cdGNvbnN0cnVjdG9yKCkgeyB9O1xuXG5cdC8qKlxuXHQgKiBAYWJzdHJhY3QgXG5cdCAqIEBlbnVtIHtzdHJpbmd9IFxuXHQgKi9cblx0Z2V0IG5hbWUoKSB7IH1cblx0LyoqIFxuXHQgKiBAYWJzdHJhY3Rcblx0ICogQGVudW0ge251bWJlcn0gXG5cdCAqL1xuXHRnZXQgcmFuaygpIHsgfVxuXHQvKipcblx0ICogQGFic3RyYWN0IFxuXHQgKiBAZW51bSB7UEhBU0V9IFxuXHQgKi9cblx0Z2V0IHBoYXNlKCkge3JldHVybiBQSEFTRS5maW5pc2h9XG5cblx0LyoqXG5cdCAqIEBhYnN0cmFjdFxuXHQgKiBAcGFyYW0ge0NvbnRleHR9IGNvbnRleHQgXG5cdCAqIEByZXR1cm5zIFxuXHQgKi9cblx0YXN5bmMgZXhlY3V0ZShjb250ZXh0KSB7XG5cdFx0cmV0dXJuIGNvbnRleHQ7XG5cdH1cblxuXHQvKipcblx0ICogQHN0YXRpY1xuXHQgKiBAcGFyYW0ge29iamVjdH0gb3B0aW9uc1xuXHQgKiBAcGFyYW0ge0RpcmVjdGl2ZX0gb3B0aW9ucy5kaXJlY3RpdmUgXG5cdCAqL1xuXHRzdGF0aWMgZGVmaW5lKG9wdGlvbikge1xuXHRcdGRlZmluZURpcmVjdGl2ZShvcHRpb24pO1xuXHR9XG5cblx0XG5cdC8qKlxuXHQgKiBAc3RhdGljXG5cdCAqIEByZWFkb25seVxuXHQgKiBAdHlwZSB7QXJyYXk8RGlyZWN0aXZlPn1cblx0ICovXG5cdHN0YXRpYyBnZXQgZGlyZWN0aXZlcygpIHtcblx0XHRyZXR1cm4gREVGSU5FRF9ESVJFQ1RJVkVTO1xuXHR9XG59OyIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIERpcmVjdGl2ZUVsZW1lbnQgZXh0ZW5kcyBIVE1MRWxlbWVudHtcblx0Y29uc3RydWN0b3IoKXtcblx0XHRzdXBlcigpO1xuXHRcdHRoaXMuaGlkZGVuID0gdHJ1ZTtcblx0fVxuXHRcblx0LyoqXG5cdCAqIG5lZWQgdG8gYmUgaW1wbGVtZW50ZWRcblx0ICogXG5cdCAqL1xuXHRhc3luYyBleGVjdXRlKHt0ZW1wbGF0ZSwgY29udGV4dH0pe1xuXHRcdGNvbnRleHQuY29udGVudCA9IHRlbXBsYXRlLmNsb25lTm9kZSh0cnVlKTtcblx0XHRyZXR1cm4gY29udGV4dDtcblx0fTtcdFxufSIsImltcG9ydCBcIkBkZWZhdWx0LWpzL2RlZmF1bHRqcy1leHRkb21cIjtcbmltcG9ydCBFeHByZXNzaW9uUmVzb2x2ZXIgZnJvbSBcIkBkZWZhdWx0LWpzL2RlZmF1bHRqcy1leHByZXNzaW9uLWxhbmd1YWdlL3NyYy9FeHByZXNzaW9uUmVzb2x2ZXIuanNcIjtcbmltcG9ydCBUZW1wbGF0ZSBmcm9tIFwiLi9UZW1wbGF0ZS5qc1wiO1xuaW1wb3J0IENvbnRleHQgZnJvbSBcIi4vQ29udGV4dC5qc1wiO1xuaW1wb3J0IERpcmVjdGl2ZSBmcm9tIFwiLi9EaXJlY3RpdmUuanNcIjtcbmltcG9ydCBFbGVtZW50IGZyb20gXCIuL0VsZW1lbnQuanNcIjtcbmltcG9ydCBcIi4vZGlyZWN0aXZlcy9pbmRleC5qc1wiO1xuaW1wb3J0IFwiLi9lbGVtZW50cy9pbmRleC5qc1wiO1xuXG5leHBvcnQgY29uc3QgU0NPUEVTID0ge1xuXHRhcHBsaWNhdGlvbjogXCJhcHBsaWNhdGlvblwiLFxuXHRkYXRhOiBcImRhdGFcIixcblx0cmVuZGVyOiBcInJlbmRlclwiLFxuXHRjb250YWluZXI6IFwiY29udGFpbmVyXCIsXG5cdG5vZGU6IFwibm9kZVwiLFxuXHRkaXJlY3RpdmU6IFwiZGlyZWN0aXZlXCIsXG59O1xuXG5jb25zdCBBUFBMSUNBVElPTl9TQ09QRV9SRVNPTFZFUiA9IG5ldyBFeHByZXNzaW9uUmVzb2x2ZXIoeyBuYW1lOiBTQ09QRVMuYXBwbGljYXRpb24gfSk7XG5cbmNvbnN0IE1PREVXT1JLRVIgPSB7XG5cdHJlcGxhY2U6IGFzeW5jICh7IGNvbnRhaW5lciwgdGFyZ2V0ID0gbnVsbCwgY29udGVudCB9KSA9PiB7XG5cdFx0aWYgKHRhcmdldCkge1xuXHRcdFx0dGFyZ2V0LnJlcGxhY2UoY29udGVudCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGNvbnRhaW5lci5lbXB0eSgpO1xuXHRcdFx0Y29udGFpbmVyLmFwcGVuZChjb250ZW50KTtcblx0XHR9XG5cdH0sXG5cdGFwcGVuZDogYXN5bmMgKHsgY29udGFpbmVyLCB0YXJnZXQgPSBudWxsLCBjb250ZW50IH0pID0+IHtcblx0XHRpZiAodGFyZ2V0KSB0YXJnZXQuYWZ0ZXIoY29udGVudCk7XG5cdFx0ZWxzZSBjb250YWluZXIuYXBwZW5kKGNvbnRlbnQpO1xuXHR9LFxuXHRwcmVwZW5kOiBhc3luYyAoeyBjb250YWluZXIsIHRhcmdldCA9IG51bGwsIGNvbnRlbnQgfSkgPT4ge1xuXHRcdGlmICh0YXJnZXQpIHRhcmdldC5iZWZvcmUoY29udGVudCk7XG5cdFx0ZWxzZSBjb250YWluZXIucHJlcGVuZChjb250ZW50KTtcblx0fSxcbn07XG5cbmNvbnN0IGxvYWRUZW1wbGF0ZUNvbnRlbnQgPSBhc3luYyAodGVtcGxhdGUsIHJlbmRlcmVyKSA9PiB7XG5cdGlmICh0ZW1wbGF0ZSkge1xuXHRcdHRlbXBsYXRlID0gYXdhaXQgVGVtcGxhdGUubG9hZCh0ZW1wbGF0ZSk7XG5cdFx0cmV0dXJuIHRlbXBsYXRlLmltcG9ydENvbnRlbnQoKTtcblx0fSBlbHNlIGlmIChyZW5kZXJlci50ZW1wbGF0ZSkge1xuXHRcdHJldHVybiBhd2FpdCByZW5kZXJlci50ZW1wbGF0ZS5pbXBvcnRDb250ZW50KCk7XG5cdH1cblxuXHR0aHJvdyBuZXcgRXJyb3IoXCJObyBjb250ZW50IHRlbXBsYXRlIHNwZWNpZmllZCFcIik7XG59O1xuXG5jb25zdCBhZGRDb250ZW50ID0gYXN5bmMgKGNvbnRleHQpID0+IHtcblx0aWYgKGNvbnRleHQuY29udGVudCkge1xuXHRcdGNvbnN0IG1vZGV3b3JrZXIgPSBNT0RFV09SS0VSW2NvbnRleHQubW9kZV07XG5cdFx0aWYgKCFtb2Rld29ya2VyKSB0aHJvdyBuZXcgRXJyb3IoJ1RoZSBcIicgKyBjb250ZXh0Lm1vZGUgKyAnXCIgaXMgbm90IHN1cHBvcnRlZCEnKTtcblx0XHRhd2FpdCBtb2Rld29ya2VyKGNvbnRleHQpO1xuXHR9XG59O1xuXG5jb25zdCByZW5kZXJDb250YWluZXIgPSBhc3luYyAoY29udGV4dCkgPT4ge1xuXHRsZXQgeyB0ZW1wbGF0ZSwgcmVzb2x2ZXIgfSA9IGNvbnRleHQ7XG5cdGlmICghdGVtcGxhdGUgfHwgdGVtcGxhdGUubGVuZ3RoID09IDApIHJldHVybiBjb250ZXh0O1xuXG5cdGxldCBjb250ZW50ID0gW107XG5cdGZvciAobGV0IG5vZGVUZW1wbGF0ZSBvZiB0ZW1wbGF0ZSkge1xuXHRcdG5vZGVUZW1wbGF0ZS5ub3JtYWxpemUoKTtcblx0XHRjb25zdCBub2RlUmVzb2x2ZXIgPSBuZXcgRXhwcmVzc2lvblJlc29sdmVyKHsgbmFtZTogU0NPUEVTLm5vZGUsIGNvbnRleHQ6IG51bGwsIHBhcmVudDogcmVzb2x2ZXIgfSk7XG5cdFx0Y29uc3Qgbm9kZUNvbnRleHQgPSBhd2FpdCByZW5kZXJOb2RlKGNvbnRleHQuc3ViQ29udGV4dCh7IHRlbXBsYXRlOiBub2RlVGVtcGxhdGUsIHJlc29sdmVyOiBub2RlUmVzb2x2ZXIgfSkpO1xuXHRcdGF3YWl0IG5vZGVDb250ZXh0LnJlYWR5KCk7XG5cdFx0Y29uc3Qgbm9kZSA9IG5vZGVDb250ZXh0LmNvbnRlbnQ7XG5cdFx0aWYgKG5vZGUpIHtcblx0XHRcdGlmIChub2RlIGluc3RhbmNlb2YgQXJyYXkpIGNvbnRlbnQgPSBjb250ZW50LmNvbmNhdChub2RlKTtcblx0XHRcdGlmIChub2RlIGluc3RhbmNlb2YgTm9kZUxpc3QgfHwgbm9kZSBpbnN0YW5jZW9mIEhUTUxDb2xsZWN0aW9uKSBjb250ZW50ID0gY29udGVudC5jb25jYXQoQXJyYXkuZnJvbShub2RlKSk7XG5cdFx0XHRlbHNlIGlmIChub2RlIGluc3RhbmNlb2YgTm9kZSkgY29udGVudC5wdXNoKG5vZGUpO1xuXHRcdH1cblx0fVxuXG5cdGNvbnRleHQuY29udGVudCA9IGNvbnRlbnQubGVuZ3RoICE9IDAgPyBjb250ZW50IDogbnVsbDtcblx0cmV0dXJuIGNvbnRleHQ7XG59O1xuXG5jb25zdCByZW5kZXJOb2RlID0gYXN5bmMgKGNvbnRleHQpID0+IHtcblx0dHJ5IHtcblx0XHRsZXQgeyB0ZW1wbGF0ZSwgcmVuZGVyZXIgfSA9IGNvbnRleHQ7XG5cdFx0aWYgKHRlbXBsYXRlIGluc3RhbmNlb2YgRWxlbWVudCkgYXdhaXQgdGVtcGxhdGUuZXhlY3V0ZShjb250ZXh0KTtcblx0XHRlbHNlIGF3YWl0IGV4ZWN1dGVEaXJlY3RpdmVzKGNvbnRleHQpO1xuXG5cdFx0Y29uc3QgeyBpZ25vcmUsIGNvbnRlbnQgfSA9IGNvbnRleHQ7XG5cblx0XHRpZiAoIWlnbm9yZSAmJiBjb250ZW50KSB7XG5cdFx0XHRsZXQgeyByZXNvbHZlciB9ID0gY29udGV4dDtcblx0XHRcdGNvbnN0IHN1YlRlbXBsYXRlID0gY29udGV4dC50ZW1wbGF0ZS5jaGlsZE5vZGVzO1xuXHRcdFx0aWYgKHN1YlRlbXBsYXRlICYmIHN1YlRlbXBsYXRlLmxlbmd0aCA+IDApIHtcblx0XHRcdFx0Y29uc3QgY29udGFpbmVyUmVzb2x2ZXIgPSBuZXcgRXhwcmVzc2lvblJlc29sdmVyKHsgbmFtZTogU0NPUEVTLmNvbnRhaW5lciwgY29udGV4dDogbnVsbCwgcGFyZW50OiByZXNvbHZlciB9KTtcblx0XHRcdFx0Y29uc3Qgc3ViQ29udGV4dCA9IGF3YWl0IHJlbmRlcmVyLnJlbmRlcihjb250ZXh0LnN1YkNvbnRleHQoeyBjb250YWluZXI6IGNvbnRlbnQsIHRlbXBsYXRlOiBzdWJUZW1wbGF0ZSwgcmVzb2x2ZXI6IGNvbnRhaW5lclJlc29sdmVyIH0pKTtcblx0XHRcdFx0YXdhaXQgc3ViQ29udGV4dC5yZWFkeSgpO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGlmIChjb250ZXh0LmNvbnRlbnQgJiYgY29udGV4dC5jb250ZW50LnRhZ05hbWUgJiYgY29udGV4dC5jb250ZW50LnRhZ05hbWUgPT0gXCJKU1RMXCIpIGNvbnRleHQuY29udGVudCA9IGNvbnRleHQuY29udGVudC5jaGlsZE5vZGVzOyAvL3NwZWNpYWwgY2FzZSB0byBzdXBwb3J0IHRoZSBvbGQgXCI8anN0bD5cIiB0YWcuXG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRjb25zb2xlLmVycm9yKFwiZXJyb3IgYXQgcmVuZGVyIG5vZGU6XCIsIGUsIGNvbnRleHQpO1xuXHR9XG5cdHJldHVybiBjb250ZXh0O1xufTtcblxuY29uc3QgZXhlY3V0ZURpcmVjdGl2ZXMgPSBhc3luYyAoY29udGV4dCkgPT4ge1xuXHRjb25zdCBkaXJlY3RpdmVzID0gRGlyZWN0aXZlLmRpcmVjdGl2ZXM7XG5cdGNvbnN0IGxlbmd0aCA9IGRpcmVjdGl2ZXMubGVuZ3RoO1xuXHRmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aCAmJiAhY29udGV4dC5zdG9wOyBpKyspIHtcblx0XHRjb25zdCBkaXJlY3RpdmUgPSBkaXJlY3RpdmVzW2ldO1xuXHRcdHRyeSB7XG5cdFx0XHRpZiAoY29udGV4dC5hY2NlcHREaXJlY3RpdmUoZGlyZWN0aXZlKSkgYXdhaXQgZGlyZWN0aXZlLmV4ZWN1dGUoY29udGV4dCk7XG5cdFx0fSBjYXRjaCAoZSkge1xuXHRcdFx0Y29uc29sZS5lcnJvcihcImVycm9yIGF0IGRpcmVjdGl2ZTpcIiwgZSwgZGlyZWN0aXZlLCBjb250ZXh0KTtcblx0XHR9XG5cdH1cblx0cmV0dXJuIGNvbnRleHQ7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZW5kZXJlciB7XG5cdGNvbnN0cnVjdG9yKHsgdGVtcGxhdGUsIGRhdGEgfSA9IHt9KSB7XG5cdFx0aWYgKHRlbXBsYXRlICYmICEodGVtcGxhdGUgaW5zdGFuY2VvZiBUZW1wbGF0ZSkpIHRocm93IG5ldyBFcnJvcihcInRlbXBsYXRlIG11c3QgYmUgYW4gaW5zdGFuY2Ugb2YgVGVtcGxhdGUhXCIpO1xuXG5cdFx0dGhpcy50ZW1wbGF0ZSA9IHRlbXBsYXRlO1xuXHRcdHRoaXMucmVzb2x2ZXIgPSBuZXcgRXhwcmVzc2lvblJlc29sdmVyKHsgbmFtZTogU0NPUEVTLmRhdGEsIGNvbnRleHQ6IGRhdGEgPyBkYXRhIDoge30sIHBhcmVudDogQVBQTElDQVRJT05fU0NPUEVfUkVTT0xWRVIgfSk7XG5cdH1cblxuXHQvKipcblx0ICogQHBhcmFtXG5cdCAqIFx0XHRjb250YWluZXIgSFRNTEVsZW1lbnQgLT4gdGFyZ2V0IHRvIHJlbmRlciBpblxuXHQgKiBAcGFyYW1cblx0ICogXHRcdGRhdGEgT2JqZWN0fC4uLiAtPiBkYXRhIHRvIHVzZWQgYXQgcmVuZGVyaW5nXG5cdCAqIEBwYXJhbVxuXHQgKiBcdFx0dGVtcGxhdGUgVGVtcGxhdGV8Tm9kZXxOb2RlTGlzdHxIVE1MQ29sbGVjdGlvbnxTdHJpbmcgLT4gdGVtcGxhdGUgdG8gcmVuZGVyXG5cdCAqIEBwYXJhbVxuXHQgKiBcdFx0bW9kZSBcImFwcGVuZFwifFwiaW5zZXJ0XCJ8XCJyZXBsYWNlXCJcblx0ICogQHBhcmFtXG5cdCAqIFx0XHR0YXJnZXRcblx0ICovXG5cdGFzeW5jIHJlbmRlcihjb250ZXh0KSB7XG5cdFx0Y29uc3QgY2FsbGVkV2l0aENvbnRleHQgPSBjb250ZXh0IGluc3RhbmNlb2YgQ29udGV4dDtcblx0XHRpZiAoIWNhbGxlZFdpdGhDb250ZXh0KSB7XG5cdFx0XHRsZXQgeyB0ZW1wbGF0ZSA9IG51bGwsIGRhdGEgPSBudWxsLCBjb250YWluZXIsIHJvb3QsIG1vZGUsIHRhcmdldCB9ID0gY29udGV4dDtcblx0XHRcdHRlbXBsYXRlID0gYXdhaXQgbG9hZFRlbXBsYXRlQ29udGVudCh0ZW1wbGF0ZSwgdGhpcyk7XG5cdFx0XHRjb25zdCByZXNvbHZlciA9IG5ldyBFeHByZXNzaW9uUmVzb2x2ZXIoeyBuYW1lOiBTQ09QRVMucmVuZGVyLCBjb250ZXh0OiBkYXRhLCBwYXJlbnQ6IHRoaXMucmVzb2x2ZXIgfSk7XG5cdFx0XHRjb250ZXh0ID0gbmV3IENvbnRleHQoeyByZXNvbHZlciwgcmVuZGVyZXI6IHRoaXMsIHRlbXBsYXRlOiB0ZW1wbGF0ZSwgY29udGFpbmVyLCByb290OiByb290ID8gcm9vdCA6IGNvbnRhaW5lciwgbW9kZTogbW9kZSA/IG1vZGUgOiBcInJlcGxhY2VcIiwgdGFyZ2V0IH0pO1xuXHRcdH0gZWxzZSBpZiAoY29udGV4dC5jbG9zZWQpIHRocm93IG5ldyBFcnJvcihcImNhbGxpbmcgd2l0aCBjbG9zZWQgY29udGV4dFwiLCBjb250ZXh0KTtcblxuXHRcdGNvbnN0IHRlbXBsYXRlID0gY29udGV4dC50ZW1wbGF0ZTtcblx0XHRpZiAodGVtcGxhdGUgaW5zdGFuY2VvZiBOb2RlKSBhd2FpdCByZW5kZXJOb2RlKGNvbnRleHQpO1xuXHRcdGVsc2UgYXdhaXQgcmVuZGVyQ29udGFpbmVyKGNvbnRleHQpO1xuXHRcdFxuXHRcdGF3YWl0IGFkZENvbnRlbnQoY29udGV4dCk7XG5cblx0XHRpZiAoIWNhbGxlZFdpdGhDb250ZXh0KVxuXHRcdFx0YXdhaXQgY29udGV4dC5yZWFkeSgpO1xuXG5cdFx0cmV0dXJuIGNvbnRleHQ7XG5cdH1cblxuXHRzdGF0aWMgYXN5bmMgYnVpbGQoeyB0ZW1wbGF0ZSwgZGF0YSB9ID0ge30pIHtcblx0XHRpZiAodGVtcGxhdGUgJiYgdGVtcGxhdGUgaW5zdGFuY2VvZiBQcm9taXNlKSB0ZW1wbGF0ZSA9IGF3YWl0IHRlbXBsYXRlO1xuXG5cdFx0dGVtcGxhdGUgPSB0ZW1wbGF0ZSA/IGF3YWl0IFRlbXBsYXRlLmxvYWQodGVtcGxhdGUpIDogbnVsbDtcblx0XHRyZXR1cm4gbmV3IFJlbmRlcmVyKHsgdGVtcGxhdGUsIGRhdGEgfSk7XG5cdH1cblxuXHRzdGF0aWMgYXN5bmMgcmVuZGVyKHsgY29udGFpbmVyLCBkYXRhLCB0ZW1wbGF0ZSwgbW9kZSwgdGFyZ2V0IH0pIHtcblx0XHRjb25zdCByZW5kZXJlciA9IG5ldyBSZW5kZXJlcih7IHRlbXBsYXRlLCBkYXRhIH0pO1xuXHRcdHJldHVybiByZW5kZXJlci5yZW5kZXIoeyBjb250YWluZXIsIG1vZGUsIHRhcmdldCB9KTtcblx0fVxufVxuIiwiaW1wb3J0IFwiQGRlZmF1bHQtanMvZGVmYXVsdGpzLWNvbW1vbi11dGlscy9zcmMvamF2YXNjcmlwdC9TdHJpbmcuanNcIjtcblxuZXhwb3J0IGNvbnN0IE5PREVfQVRUUklCVVRFX1RFTVBMQVRFID0gXCJ0ZW1wbGF0ZVwiO1xuY29uc3QgQ0FDSEUgPSB7fTtcbmNvbnN0IGdldEtleSA9ICh0ZW1wbGF0ZSwgY2FjaGUsIGFsaWFzKSA9PiB7XG5cdGlmICghY2FjaGUpIHJldHVybiBudWxsO1xuXG5cdGxldCBrZXkgPSBudWxsO1xuXHRpZiAoYWxpYXMpIGtleSA9IGFsaWFzO1xuXHRlbHNlIGlmICh0eXBlb2YgdGVtcGxhdGUgPT09IFwic3RyaW5nXCIpIGtleSA9IHRlbXBsYXRlO1xuXHRlbHNlIGlmICh0ZW1wbGF0ZSBpbnN0YW5jZW9mIFVSTCkga2V5ID0gdGVtcGxhdGUudG9TdHJpbmcoKTtcblx0ZWxzZSBpZiAodGVtcGxhdGUgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkga2V5ID0gdGVtcGxhdGUuc2VsZWN0b3IoKTtcblxuXHRpZiAoa2V5KSByZXR1cm4ga2V5Lmhhc2hjb2RlKCk7XG5cblx0cmV0dXJuIG51bGw7XG59O1xuXG5jb25zdCBmcm9tVVJMID0gYXN5bmMgKHVybCwgY2FjaGUsIGtleSkgPT4ge1xuXHRjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybC50b1N0cmluZygpKTtcblx0Y29uc3Qgc291cmNlID0gYXdhaXQgcmVzcG9uc2UudGV4dCgpO1xuXHRyZXR1cm4gZnJvbVNvdXJjZShzb3VyY2UsIGNhY2hlLCBrZXkpO1xufTtcblxuY29uc3QgZnJvbVNvdXJjZSA9IGFzeW5jIChzb3VyY2UsIGNhY2hlLCBrZXkpID0+IHtcblx0cmV0dXJuIGZyb21FbGVtZW50KGNyZWF0ZShzb3VyY2UsIHRydWUpLCBjYWNoZSwga2V5KTtcbn07XG5cbmNvbnN0IGZyb21FbGVtZW50ID0gYXN5bmMgKGVsZW1lbnQsIGNhY2hlLCBrZXkpID0+IHtcblx0bGV0IHRlbXBsYXRlID0gbnVsbDtcblx0aWYgKGVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MVGVtcGxhdGVFbGVtZW50KSB0ZW1wbGF0ZSA9IG5ldyBUZW1wbGF0ZShlbGVtZW50LCBrZXkpO1xuXHRlbHNlIHtcblx0XHR0ZW1wbGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZW1wbGF0ZVwiKTtcblx0XHRpZiAoZWxlbWVudCBpbnN0YW5jZW9mIE5vZGUgfHwgZWxlbWVudCBpbnN0YW5jZW9mIE5vZGVMaXN0IHx8IGVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MQ29sbGVjdGlvbiB8fCBlbGVtZW50IGluc3RhbmNlb2YgQXJyYXkpIHRlbXBsYXRlLmNvbnRlbnQuYXBwZW5kKGVsZW1lbnQuY2xvbmVOb2RlKHRydWUpKTtcblx0XHRlbHNlIHRocm93IG5ldyBFcnJvcihcIlRlbXBsYXRlIHR5cGUgaXMgbm90IHN1cHBvcnRlZCFcIik7XG5cblx0XHR0ZW1wbGF0ZSA9IG5ldyBUZW1wbGF0ZSh0ZW1wbGF0ZSwga2V5KTtcblx0fVxuXG5cdGlmICghdGVtcGxhdGUpIHRocm93IG5ldyBFcnJvcihcIlRlbXBsYXRlIGNhbid0IGxvYWRlZCFcIik7XG5cblx0aWYgKGNhY2hlICYmIGtleSkgQ0FDSEVba2V5XSA9IHRlbXBsYXRlO1xuXG5cdHJldHVybiB0ZW1wbGF0ZTtcbn07XG5cbmNvbnN0IGdldFRlbXBsYXRlID0gKG5vZGUpID0+IHtcblx0bGV0IHRlbXBsYXRlID0gbm9kZS5maW5kKFwiOnNjb3BlID4gdGVtcGxhdGVcIikuZmlyc3QoKTtcblx0aWYgKCEhdGVtcGxhdGUpIHJldHVybiB0ZW1wbGF0ZTtcblx0Y29uc3QgdmFsdWUgPSBub2RlLmF0dHIoTk9ERV9BVFRSSUJVVEVfVEVNUExBVEUpO1xuXHRpZiAoIXZhbHVlKSByZXR1cm4gbnVsbDtcblx0dHJ5IHtcblx0XHR0ZW1wbGF0ZSA9IGZpbmQodmFsdWUpLmZpcnN0KCk7XG5cdFx0aWYgKCEhdGVtcGxhdGUpIHJldHVybiB0ZW1wbGF0ZTtcblx0fSBjYXRjaCAoZSkge31cblx0cmV0dXJuIG5ldyBVUkwodmFsdWUsIGxvY2F0aW9uKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRlbXBsYXRlIHtcblxuXHQvKipcblx0ICogQ3JlYXRlIGFuIGluc3RhbmNlIG9mIHRlbXBsYXRlLlxuXHQgKiBcblx0ICogQHBhcmFtIHRlbXBsYXRlIHR5cGUgb2YgSFRNTFRlbXBsYXRlRWxlbWVudC4gTm90IG51bGwuXG5cdCAqIEBwYXJhbSBrZXkgaWRlbnRpZmllciBhdCBjYWNoZSwgaWYgdGVtcGxhdGUgdG8gYmUgY2FjaGVkLlxuXHQgKi9cblx0Y29uc3RydWN0b3IoLyoqIEB0eXBlIHtIVE1MVGVtcGxhdGVFbGVtZW50fSAqLyB0ZW1wbGF0ZSwvKiogQHR5cGUge3N0cmluZ30gKi8ga2V5KSB7XG5cdFx0dGhpcy50ZW1wbGF0ZSA9IHRlbXBsYXRlO1xuXHRcdHRoaXMua2V5ID0ga2V5O1xuXHR9XG5cblx0aW1wb3J0Q29udGVudChkb2MgPSBkb2N1bWVudCkge1xuXHRcdGxldCBpbXBvcnRlZCA9IGRvYy5pbXBvcnROb2RlKHRoaXMudGVtcGxhdGUsIHRydWUpO1xuXHRcdHJldHVybiBpbXBvcnRlZC5jb250ZW50LmNoaWxkTm9kZXM7XG5cdH1cblxuXHRyZW1vdmUoKSB7XG5cdFx0aWYgKHRoaXMua2V5ICYmIENBQ0hFW3RoaXMua2V5XSkgZGVsZXRlIENBQ0hFW3RoaXMua2V5XTtcblx0fVxuXG5cdHN0YXRpYyBhc3luYyBmZXRjaCh1cmwsIGNhY2hlID0gdHJ1ZSwgYWxpYXMgPSBudWxsKSB7XG5cdFx0aWYgKHR5cGVvZiB1cmwgPT09IFwic3RyaW5nXCIpIHtcblx0XHRcdHJldHVybiBUZW1wbGF0ZS5sb2FkKG5ldyBVUkwodXJsLCBsb2FjdGlvbiksIGNhY2hlLCBhbGlhcyk7XG5cdFx0fSBlbHNlIGlmICh1cmwgaW5zdGFuY2VvZiBVUkwpIHJldHVybiBUZW1wbGF0ZS5sb2FkKHVybCwgY2FjaGUsIGFsaWFzKTtcblxuXHRcdG5ldyBFcnJvcihcIlRoZSB1cmwgaXNuJ3QgYSBhbGxvd2VkIHR5cGUhIC0+IFtTdHJpbmd8VVJMXSByZXF1aXJlZCFcIik7XG5cdH1cblxuXHRzdGF0aWMgYXN5bmMgbG9hZCh0ZW1wbGF0ZSwgY2FjaGUgPSB0cnVlLCBhbGlhcyA9IG51bGwpIHtcblx0XHRpZiAodGVtcGxhdGUgaW5zdGFuY2VvZiBUZW1wbGF0ZSkgcmV0dXJuIHRlbXBsYXRlO1xuXG5cdFx0Y29uc3Qga2V5ID0gZ2V0S2V5KHRlbXBsYXRlLCBjYWNoZSwgYWxpYXMpO1xuXHRcdGlmIChrZXkgJiYgQ0FDSEVba2V5XSkgcmV0dXJuIENBQ0hFW2tleV07XG5cdFx0ZWxzZSBpZiAodHlwZW9mIHRlbXBsYXRlID09PSBcInN0cmluZ1wiKSB7XG5cdFx0XHRyZXR1cm4gZnJvbVNvdXJjZSh0ZW1wbGF0ZSwgY2FjaGUsIGtleSk7XG5cdFx0fSBlbHNlIGlmICh0ZW1wbGF0ZSBpbnN0YW5jZW9mIFVSTCkgcmV0dXJuIGF3YWl0IGZyb21VUkwodGVtcGxhdGUsIGNhY2hlLCBrZXkpO1xuXHRcdGVsc2UgaWYgKHRlbXBsYXRlIGluc3RhbmNlb2YgTm9kZSB8fCB0ZW1wbGF0ZSBpbnN0YW5jZW9mIE5vZGVMaXN0IHx8IHRlbXBsYXRlIGluc3RhbmNlb2YgSFRNTENvbGxlY3Rpb24gfHwgdGVtcGxhdGUgaW5zdGFuY2VvZiBIVE1MVGVtcGxhdGVFbGVtZW50KSByZXR1cm4gZnJvbUVsZW1lbnQodGVtcGxhdGUsIGNhY2hlLCBrZXkpO1xuXG5cdFx0bmV3IEVycm9yKFwiVGhlIHRlbXBsYXRlIGlzbid0IGEgYWxsb3dlZCB0eXBlISAtPiBbU3RyaW5nfFVSTHxOb2RlfE5vZGVMaXN0fEhUTUxDb2xsZWN0aW9ufFRlbXBsYXRlXSByZXF1aXJlZCFcIik7XG5cdH1cblxuXHRzdGF0aWMgYXN5bmMgbG9hZE5vZGVUZW1wbGF0ZShub2RlLCBkZWZhdWx0VGVtcGxhdGUsIGNhY2hlLCBhbGlhcykge1xuXHRcdHRyeSB7XG5cdFx0XHRjb25zdCB0ZW1wbGF0ZSA9IGdldFRlbXBsYXRlKG5vZGUpO1xuXHRcdFx0aWYgKHRlbXBsYXRlKSByZXR1cm4gVGVtcGxhdGUubG9hZCh0ZW1wbGF0ZSwgY2FjaGUsIGFsaWFzKTtcblx0XHR9IGNhdGNoIChlKSB7XG5cdFx0XHRjb25zb2xlLndhcm4oXCJDYW4ndCBsb2FkIHRlbXBsYXRlIGZyb20gbm9kZSFcIiwgbm9kZSwgZSk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGRlZmF1bHRUZW1wbGF0ZTtcblx0fVxufTtcblxuZXhwb3J0IGNvbnN0IHRvQXN5bmNUZW1wbGF0ZUxvYWRlciA9ICgvKlVSTCovdXJsKSA9PiB7XG4gICAgbGV0IHRlbXBsYXRlID0gbnVsbDtcblxuICAgIHJldHVybiBhc3luYyAoKSA9PiB7XG4gICAgICAgIGlmKCF0ZW1wbGF0ZSl7XG5cdFx0XHRpZih0eXBlb2YgdXJsID09PSBcImZ1bmN0aW9uXCIpXG5cdFx0XHRcdHVybCA9IGF3YWl0IHVybCgpO1xuXHRcdFx0ZWxzZSBpZih1cmwgaW5zdGFuY2VvZiBQcm9taXNlKVxuXHRcdFx0XHR1cmwgPSBhd2FpdCB1cmw7XG4gICAgICAgICAgICB0ZW1wbGF0ZSA9IFRlbXBsYXRlLmxvYWQodXJsKTtcblx0XHR9XG5cbiAgICAgICAgcmV0dXJuIHRlbXBsYXRlO1xuICAgIH07XG59O1xuIiwiZXhwb3J0IGNvbnN0IGlzVW5kZWZpbmVkT3JOdWxsID0gKHZhbHVlKSA9PiB7XHJcbiAgICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAndW5kZWZpbmVkJyB8fCB2YWx1ZSA9PT0gbnVsbFxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgaXNVbmRlZmluZWRPck51bGxPckJsYW5rID0gKHZhbHVlKSA9PiB7XHJcbiAgcmV0dXJuIGlzVW5kZWZpbmVkT3JOdWxsKHZhbHVlKSB8fCB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnICYmIHZhbHVlLnRyaW0oKS5sZW5ndGggPT0gMDtcclxufTsiLCJpbXBvcnQgRGlyZWN0aXZlIGZyb20gXCIuLi9EaXJlY3RpdmUuanNcIjtcclxuXHJcbmNvbnN0IEFUVFJJQlVURV9fQVRUQUNIRUxFTUVOVCA9IFwianN0bC1hdHRhY2gtZWxlbWVudFwiO1xyXG5jb25zdCBBVFRSSUJVVEVfX0FUVEFDSEVMRU1FTlRfTU9ERSA9IFwianN0bC1hdHRhY2gtZWxlbWVudC1tb2RlXCI7XHJcblxyXG5jb25zdCBNT0RFX0FQUEVORCA9IFwiYXBwZW5kXCI7XHJcbmNvbnN0IE1PREVfUFJFUEVORCA9IFwicHJlcGVuZFwiO1xyXG5jb25zdCBNT0RFX1JFUExBQ0UgPSBcInJlcGxhY2VcIjtcclxuXHJcbmNvbnN0IFBSRUNIRUNLID0gL14jLiskLztcclxuXHJcbmNvbnN0IGdldEVsZW1lbnQgPSBhc3luYyAodGVtcGxhdGUsIHJlc29sdmVyKSA9PiB7XHJcblx0bGV0IGVsZW1lbnQgPSAodGVtcGxhdGUuYXR0cihBVFRSSUJVVEVfX0FUVEFDSEVMRU1FTlQpIHx8IFwiXCIpLnRyaW0oKTtcclxuXHRpZiAoIVBSRUNIRUNLLnRlc3QoZWxlbWVudCkpIHtcclxuXHRcdHRyeSB7XHJcblx0XHRcdGVsZW1lbnQgPSBhd2FpdCByZXNvbHZlci5yZXNvbHZlKGVsZW1lbnQsIGVsZW1lbnQpO1xyXG5cdFx0fSBjYXRjaCAoZSkge31cclxuXHRcdGlmIChlbGVtZW50IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpIHJldHVybiBlbGVtZW50O1xyXG5cdH1cclxuXHJcblx0dHJ5IHtcclxuXHRcdGVsZW1lbnQgPSBmaW5kKGVsZW1lbnQpO1xyXG5cdH0gY2F0Y2ggKGUpIHt9XHJcblxyXG5cdGlmIChlbGVtZW50ICYmIGVsZW1lbnQubGVuZ3RoID4gMCkgcmV0dXJuIGVsZW1lbnQubGVuZ3RoID09IDAgPyBlbGVtZW50LmZpcnN0KCkgOiBlbGVtZW50O1xyXG5cclxuXHRyZXR1cm4gbnVsbDtcclxufTtcclxuXHJcbmNsYXNzIEF0dGFjaEVsZW1lbnQgZXh0ZW5kcyBEaXJlY3RpdmUge1xyXG5cdGNvbnN0cnVjdG9yKCkge1xyXG5cdFx0c3VwZXIoKTtcclxuXHR9XHJcblxyXG5cdGdldCBuYW1lKCkge1xyXG5cdFx0cmV0dXJuIFwiYXR0YWNoLWVsZW1lbnRcIjtcclxuXHR9XHJcblx0Z2V0IHJhbmsoKSB7XHJcblx0XHRyZXR1cm4gRGlyZWN0aXZlLk1JTl9SQU5LICsgMTtcclxuXHR9XHJcblx0Z2V0IHBoYXNlKCkge1xyXG5cdFx0cmV0dXJuIERpcmVjdGl2ZS5QSEFTRS5jb250ZW50O1xyXG5cdH1cclxuXHJcblx0YXN5bmMgZXhlY3V0ZShjb250ZXh0KSB7XHJcblx0XHRjb25zdCB7IHJlc29sdmVyLCB0ZW1wbGF0ZSwgY29udGVudCB9ID0gY29udGV4dDtcclxuXHRcdGlmICghKHRlbXBsYXRlIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpIHx8ICF0ZW1wbGF0ZS5hdHRyKEFUVFJJQlVURV9fQVRUQUNIRUxFTUVOVCkpIHJldHVybiBjb250ZXh0O1xyXG5cdFx0dHJ5IHtcclxuXHRcdFx0bGV0IGVsZW1lbnQgPSBhd2FpdCBnZXRFbGVtZW50KHRlbXBsYXRlLCByZXNvbHZlcik7XHJcblx0XHRcdGlmIChlbGVtZW50KSB7XHJcblx0XHRcdFx0Y29uc3QgbW9kZSA9IHRlbXBsYXRlLmF0dHIoQVRUUklCVVRFX19BVFRBQ0hFTEVNRU5UX01PREUpIHx8IE1PREVfUkVQTEFDRTtcclxuXHRcdFx0XHRpZiAobW9kZSA9PSBNT0RFX1JFUExBQ0UpIHtcclxuXHRcdFx0XHRcdGNvbnRlbnQuZW1wdHkoKS5hcHBlbmQoZWxlbWVudCk7XHJcblx0XHRcdFx0XHRjb250ZXh0LnN0b3AgPSB0cnVlO1xyXG5cdFx0XHRcdFx0Y29udGV4dC5pZ25vcmUgPSB0cnVlO1xyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRjb250ZXh0LnJlYWR5KCh7IGNvbnRlbnQgfSkgPT4ge1xyXG5cdFx0XHRcdFx0XHRpZiAoY29udGVudCkge1xyXG5cdFx0XHRcdFx0XHRcdGlmIChtb2RlID09IE1PREVfQVBQRU5EKSBjb250ZW50LmFwcGVuZChlbGVtZW50KTtcclxuXHRcdFx0XHRcdFx0XHRlbHNlIGlmIChtb2RlID09IE1PREVfUFJFUEVORCkgY29udGVudC5wcmVwZW5kKGVsZW1lbnQpO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH0gY2F0Y2ggKGUpIHtcclxuXHRcdFx0Y29uc29sZS5sb2coZSwgeyBjb250ZXh0IH0pO1xyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiBjb250ZXh0O1xyXG5cdH1cclxufVxyXG5EaXJlY3RpdmUuZGVmaW5lKHsgZGlyZWN0aXZlOiBuZXcgQXR0YWNoRWxlbWVudCgpIH0pO1xyXG4iLCJpbXBvcnQgR0xPQkFMIGZyb20gXCJAZGVmYXVsdC1qcy9kZWZhdWx0anMtY29tbW9uLXV0aWxzL3NyYy9HbG9iYWwuanNcIjtcbmltcG9ydCBEaXJlY3RpdmUgZnJvbSBcIi4uL0RpcmVjdGl2ZS5qc1wiO1xuXG5jb25zdCBBVFRSSUJVVEVfTkFNRSA9IC8oanN0bCk/KFxcPyk/KEApPyhbXlxcP0BdKykvaTtcblxuY29uc3QgREVGQVVMVF9FVkVOVF9GVU5DVElPTiA9IFwiZGVmYXVsdFwiO1xuY29uc3QgT1BUSU9OX1BSRVZFTlRfREVGQVVMVCA9IFwicHJldmVudC1kZWZhdWx0XCJcbmNvbnN0IElHTk9SRURfQVRUUklCVVRFUyA9IFtcImlzXCJdO1xuXG5jb25zdCBGVU5DVElPTl9TUExJVFRFUiA9IFwiOjpcIjtcbmNvbnN0IEZVTkNUSU9OX1NQTElUVEVSX09MRCA9IFwiOlwiO1xuXG5jb25zdCBFVkVOVEZVTkNUSU9OUyA9IHtcblx0ZGVsZWdhdGU6IGFzeW5jIChldmVudCwgaGFuZGxlLCBzZXR0aW5nLCB0eXBlLCByZXNvbHZlciwgY29udGVudCwgb3B0aW9ucywgY29udGV4dCkgPT4ge1xuXHRcdGNvbnN0IGV2ZW50aGFuZGxlID0gYXdhaXQgcmVzb2x2ZXIucmVzb2x2ZVRleHQoaGFuZGxlLCBoYW5kbGUpO1xuXHRcdGNvbnRlbnQub24oZXZlbnQsIGRlbGVnYXRlcihldmVudGhhbmRsZSwgc2V0dGluZykpO1xuXHR9LFxuXHR0b2dnbGVjbGFzczogYXN5bmMgKGV2ZW50LCBoYW5kbGUsIHNldHRpbmcsIHR5cGUsIHJlc29sdmVyLCBjb250ZW50LCBvcHRpb25zLCBjb250ZXh0KSA9PiB7XG5cdFx0Y29uc3QgY2xhenogPSBvcHRpb25zLnNoaWZ0KCk7XG5cdFx0Y29uc3QgcHJldmVudERlZmF1bHQgPSBvcHRpb25zLmluY2x1ZGVzKE9QVElPTl9QUkVWRU5UX0RFRkFVTFQpO1xuXHRcdGNvbnN0IHNlbGVjdG9yID0gaGFuZGxlID8gYXdhaXQgcmVzb2x2ZXIucmVzb2x2ZVRleHQoaGFuZGxlLCBoYW5kbGUpIDogbnVsbDtcdFx0XG5cdFx0Y29udGVudC5vbihldmVudCwgKGV2ZW50KSA9PiB7XG5cdFx0XHRpZihwcmV2ZW50RGVmYXVsdClcblx0XHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRcdGlmKHNlbGVjdG9yKVxuXHRcdFx0XHRjb250ZW50LmNsb3Nlc3RzKHNlbGVjdG9yKS50b2dnbGVDbGFzcyhjbGF6eik7XG5cdFx0XHRlbHNlXG5cdFx0XHRcdGNvbnRlbnQudG9nZ2xlQ2xhc3MoY2xhenopO1xuXHRcdH0pO1xuXHR9LFxuXHR0b2dnbGVhdHRyaWJ1dGU6IGFzeW5jIChldmVudCwgaGFuZGxlLCBzZXR0aW5nLCB0eXBlLCByZXNvbHZlciwgY29udGVudCwgb3B0aW9ucywgY29udGV4dCkgPT4ge1xuXHRcdGNvbnN0IGF0dHJpYnV0ZSA9IG9wdGlvbnMuc2hpZnQoKTtcblx0XHRjb25zdCBwcmV2ZW50RGVmYXVsdCA9IG9wdGlvbnMuaW5jbHVkZXMoT1BUSU9OX1BSRVZFTlRfREVGQVVMVCk7XG5cdFx0Y29uc3Qgc2VsZWN0b3IgPSBoYW5kbGUgPyBhd2FpdCByZXNvbHZlci5yZXNvbHZlVGV4dChoYW5kbGUsIGhhbmRsZSkgOiBudWxsO1x0XHRcblx0XHRjb250ZW50Lm9uKGV2ZW50LCAoZXZlbnQpID0+IHtcblx0XHRcdGlmKHByZXZlbnREZWZhdWx0KVxuXHRcdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0aWYoc2VsZWN0b3IpXG5cdFx0XHRcdGNvbnRlbnQuY2xvc2VzdHMoc2VsZWN0b3IpLmZvckVhY2goZWxlbWVudCA9PiB7XG5cdFx0XHRcdFx0ZWxlbWVudC50b2dnbGVBdHRyaWJ1dGUoYXR0cmlidXRlKVx0XHRcdFx0XG5cdFx0XHRcdH0pO1xuXHRcdFx0ZWxzZSBcblx0XHRcdFx0Y29udGVudC50b2dnbGVBdHRyaWJ1dGUoYXR0cmlidXRlKTtcblx0XHR9KTtcblx0fSxcblx0W0RFRkFVTFRfRVZFTlRfRlVOQ1RJT05dOiBhc3luYyAoZXZlbnQsIGhhbmRsZSwgc2V0dGluZywgdHlwZSwgcmVzb2x2ZXIsIGNvbnRlbnQsIG9wdGlvbnMsIGNvbnRleHQpID0+IHtcblx0XHRjb25zdCBldmVudGhhbmRsZSA9IGhhbmRsZSA/IGF3YWl0IHJlc29sdmVyLnJlc29sdmUoaGFuZGxlLCBoYW5kbGUpIDogbnVsbDtcblxuXHRcdGlmICghZXZlbnRoYW5kbGUpIGNvbnNvbGUuZXJyb3IobmV3IEVycm9yKFwiQ2FuJ3QgcmVzb2x2ZSBcXFwiXCIgKyBoYW5kbGUgKyAnXCIgdG8gZXZlbnQgaGFuZGxlIScpKTtcblx0XHRlbHNlIGlmICh0eXBlb2YgZXZlbnRoYW5kbGUgPT09IFwiZnVuY3Rpb25cIikgY29udGVudC5vbihldmVudCwgZXZlbnRoYW5kbGUpO1xuXHRcdGVsc2UgaWYgKHR5cGVvZiBldmVudGhhbmRsZSA9PT0gXCJzdHJpbmdcIikgY29udGVudC5vbihldmVudCwgZGVsZWdhdGVyKGV2ZW50aGFuZGxlLCBzZXR0aW5nKSk7XG5cdFx0ZWxzZSBpZiAodHlwZW9mIGV2ZW50aGFuZGxlID09PSBcIm9iamVjdFwiKSB7XG5cdFx0XHRjb25zdCB7IGNhcHR1cmUgPSBmYWxzZSwgcGFzc2l2ZSA9IGZhbHNlLCBvbmNlID0gZmFsc2UgfSA9IGV2ZW50aGFuZGxlO1xuXHRcdFx0Y29udGVudC5vbihldmVudCwgZXZlbnRoYW5kbGUuZXZlbnRIYW5kbGUsIHsgY2FwdHVyZSwgcGFzc2l2ZSwgb25jZSB9KTtcblx0XHR9XG5cdH0sXG59O1xuXG5jb25zdCBiaW5kQXR0cmlidXRlID0gYXN5bmMgKHsgY29uZGl0aW9uLCBuYW1lLCB2YWx1ZSwgY29udGV4dCB9KSA9PiB7XG5cdGNvbnN0IHsgcmVzb2x2ZXIsIGNvbnRlbnQsIHRlbXBsYXRlIH0gPSBjb250ZXh0O1xuXG5cdGxldCBhdHRyaWJ1dGUgPSAhY29uZGl0aW9uID8gdmFsdWUgOiB0ZW1wbGF0ZS5hdHRyKG5hbWUpO1xuXHRjb25kaXRpb24gPSBjb25kaXRpb24gPyB2YWx1ZSA6IHRlbXBsYXRlLmF0dHIoXCI/XCIgKyBuYW1lKTtcblx0Y29uc3QgaGFzVmFsdWUgPSBpc1ZhbHVlKGF0dHJpYnV0ZSk7XG5cblx0aWYgKGNvbmRpdGlvbiAmJiBoYXNWYWx1ZSkge1xuXHRcdGNvbmRpdGlvbiA9IGF3YWl0IHJlc29sdmVyLnJlc29sdmUoY29uZGl0aW9uLCBmYWxzZSk7XG5cdFx0aWYgKGNvbmRpdGlvbiA9PT0gdHJ1ZSkgY29udGVudC5hdHRyKG5hbWUsIGF3YWl0IHJlc29sdmVyLnJlc29sdmVUZXh0KGF0dHJpYnV0ZSwgYXR0cmlidXRlKSk7XG5cdH0gZWxzZSBpZiAoY29uZGl0aW9uKSB7XG5cdFx0Y29uZGl0aW9uID0gYXdhaXQgcmVzb2x2ZXIucmVzb2x2ZShjb25kaXRpb24sIGZhbHNlKTtcblx0XHRpZiAoY29uZGl0aW9uID09PSB0cnVlKSBjb250ZW50LmF0dHIobmFtZSwgdHJ1ZSk7XG5cdH0gZWxzZSBpZiAoaGFzVmFsdWUpIHtcblx0XHRjb250ZW50LmF0dHIobmFtZSwgYXdhaXQgcmVzb2x2ZXIucmVzb2x2ZVRleHQoYXR0cmlidXRlLCBhdHRyaWJ1dGUpKTtcblx0fVxufTtcblxuY29uc3QgaXNWYWx1ZSA9ICh2YWx1ZSkgPT4ge1xuXHRyZXR1cm4gdmFsdWUgIT0gbnVsbCAmJiB0eXBlb2YgdmFsdWUgIT09IFwidW5kZWZpbmVkXCI7XG59O1xuXG5jb25zdCBiaW5kRXZlbnQgPSBhc3luYyAoeyBjb25kaXRpb24sIG5hbWUsIHZhbHVlLCBjb250ZXh0IH0pID0+IHtcblx0Y29uc3QgeyByZXNvbHZlciwgdGVtcGxhdGUsIGNvbnRlbnQgfSA9IGNvbnRleHQ7XG5cblx0Y29uZGl0aW9uID0gY29uZGl0aW9uID8gdmFsdWUgOiB0ZW1wbGF0ZS5hdHRyKFwiP0BcIiArIG5hbWUpO1xuXHRsZXQgaGFuZGxlID0gIWNvbmRpdGlvbiA/IHZhbHVlIDogdGVtcGxhdGUuYXR0cihcIkBcIiArIG5hbWUpO1xuXHRsZXQgc3BsaXQgPSBuYW1lLnNwbGl0KEZVTkNUSU9OX1NQTElUVEVSKTtcblx0aWYoc3BsaXQubGVuZ3RoID09IDEpXG5cdFx0c3BsaXQgPSBuYW1lLnNwbGl0KEZVTkNUSU9OX1NQTElUVEVSX09MRCk7XG5cblx0Y29uc3QgZXZlbnQgPSBzcGxpdC5zaGlmdCgpO1xuXHRjb25zdCB0eXBlID0gKHNwbGl0LnNoaWZ0KCkgfHwgREVGQVVMVF9FVkVOVF9GVU5DVElPTikudG9Mb3dlckNhc2UoKTtcblx0XG5cdGlmKHR5cGVvZiBoYW5kbGUgPT09IFwidW5kZWZpbmVkXCIgfHwgaGFuZGxlID09IG51bGwpXG5cdFx0Y29uc29sZS5lcnJvcihgRGVmaW5pdGlvbiBvZiBcIiR7ZXZlbnR9XCIgLSBldmVudCBoYW5kbGUgYXRgLCBjb250ZW50LCBcImlzIGluY29ycmVjdCFcIik7XG5cblx0aGFuZGxlID0gaGFuZGxlLnRyaW0oKTtcblx0Y29uc3Qgc2V0dGluZyA9IHtcblx0XHRidWJibGU6IHRydWUsXG5cdH07XG5cblx0aWYgKGNvbmRpdGlvbiApIHtcblx0XHRpZiAoKGF3YWl0IHJlc29sdmVyLnJlc29sdmUoY29uZGl0aW9uLCBmYWxzZSkpID09IHRydWUpIGF3YWl0IGJpbmRpbmcoZXZlbnQsIGhhbmRsZSwgc2V0dGluZywgdHlwZSwgcmVzb2x2ZXIsIGNvbnRlbnQsIHNwbGl0LCBjb250ZXh0KTtcblx0fSBlbHNlIGF3YWl0IGJpbmRpbmcoZXZlbnQsIGhhbmRsZSwgc2V0dGluZywgdHlwZSwgcmVzb2x2ZXIsIGNvbnRlbnQsIHNwbGl0LCBjb250ZXh0KTtcbn07XG5cbmNvbnN0IGJpbmRpbmcgPSBhc3luYyAoZXZlbnQsIGhhbmRsZSwgc2V0dGluZywgdHlwZSwgcmVzb2x2ZXIsIGNvbnRlbnQsIG9wdGlvbnMsIGNvbnRleHQpID0+IHtcblx0Y29uc3QgYmluZGVyID0gRVZFTlRGVU5DVElPTlNbdHlwZV07XG5cdGlmIChiaW5kZXIpIHJldHVybiBiaW5kZXIoZXZlbnQsIGhhbmRsZSwgc2V0dGluZywgdHlwZSwgcmVzb2x2ZXIsIGNvbnRlbnQsIG9wdGlvbnMsIGNvbnRleHQpO1xufTtcblxuY29uc3QgZGVsZWdhdGVyID0gZnVuY3Rpb24gKGRlbGVnYXRlLCBzZXR0aW5nKSB7XG5cdHJldHVybiBmdW5jdGlvbiAoZXZlbnQpIHtcblx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXHRcdGlmIChldmVudC5jdXJyZW50VGFyZ2V0KSBldmVudC5jdXJyZW50VGFyZ2V0LnRyaWdnZXIoZGVsZWdhdGUsIGV2ZW50KTtcblx0XHRlbHNlIGV2ZW50LnRhcmdldC50cmlnZ2VyKGRlbGVnYXRlLCBldmVudCk7XG5cdH07XG59O1xuXG5jbGFzcyBBdHRyaWJ1dGUgZXh0ZW5kcyBEaXJlY3RpdmUge1xuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRzdXBlcigpO1xuXHR9XG5cblx0Z2V0IG5hbWUoKSB7XG5cdFx0cmV0dXJuIFwiYXR0cmlidXRlXCI7XG5cdH1cblx0Z2V0IHJhbmsoKSB7XG5cdFx0cmV0dXJuIERpcmVjdGl2ZS5NSU5fUkFOSztcblx0fVxuXHRnZXQgcGhhc2UoKSB7XG5cdFx0cmV0dXJuIERpcmVjdGl2ZS5QSEFTRS5jb250ZW50O1xuXHR9XG5cblx0YXN5bmMgZXhlY3V0ZShjb250ZXh0KSB7XG5cdFx0Y29uc3QgeyB0ZW1wbGF0ZSB9ID0gY29udGV4dDtcblx0XHRpZiAoISh0ZW1wbGF0ZSBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSkgcmV0dXJuIGNvbnRleHQ7XG5cblx0XHRjb25zdCBwcm9jZXNzZWQgPSBuZXcgU2V0KElHTk9SRURfQVRUUklCVVRFUyk7XG5cdFx0Zm9yIChjb25zdCBhdHRyaWJ1dGUgb2YgdGVtcGxhdGUuYXR0cmlidXRlcykge1xuXHRcdFx0Y29uc3QgWywganN0bCwgY29uZGl0aW9uLCBldmVudCwgbmFtZV0gPSBBVFRSSUJVVEVfTkFNRS5leGVjKGF0dHJpYnV0ZS5uYW1lKTtcblx0XHRcdGlmICghanN0bCAmJiAhcHJvY2Vzc2VkLmhhcyhuYW1lKSkge1xuXHRcdFx0XHRjb25zdCB2YWx1ZSA9IGF0dHJpYnV0ZS52YWx1ZTtcblxuXHRcdFx0XHRpZiAoZXZlbnQpIGF3YWl0IGJpbmRFdmVudCh7IGNvbmRpdGlvbiwgZXZlbnQsIG5hbWUsIHZhbHVlLCBjb250ZXh0IH0pO1xuXHRcdFx0XHRlbHNlIGF3YWl0IGJpbmRBdHRyaWJ1dGUoeyBjb25kaXRpb24sIG5hbWUsIHZhbHVlLCBjb250ZXh0IH0pO1xuXHRcdFx0fVxuXHRcdFx0cHJvY2Vzc2VkLmFkZChuYW1lKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gY29udGV4dDtcblx0fVxufVxuXG5EaXJlY3RpdmUuZGVmaW5lKHsgZGlyZWN0aXZlOiBuZXcgQXR0cmlidXRlKCkgfSk7XG4iLCJpbXBvcnQgRGlyZWN0aXZlIGZyb20gXCIuLi9EaXJlY3RpdmUuanNcIjtcblxuY2xhc3MgQ2hvb3NlIGV4dGVuZHMgRGlyZWN0aXZlIHtcblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0c3VwZXIoKTtcblx0fVxuXG5cdGdldCBuYW1lKCkgeyByZXR1cm4gXCJjaG9vc2VcIiB9XG5cdGdldCByYW5rKCkgeyByZXR1cm4gRGlyZWN0aXZlLk1JTl9SQU5LICsgMSB9XG5cdGdldCBwaGFzZSgpIHsgcmV0dXJuIERpcmVjdGl2ZS5QSEFTRS50ZW1wbGF0ZSB9XG5cblx0YXN5bmMgZXhlY3V0ZShjb250ZXh0KSB7XG5cdFx0aWYgKCEoY29udGV4dC50ZW1wbGF0ZSBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSB8fCAhY29udGV4dC50ZW1wbGF0ZS5oYXNBdHRyaWJ1dGUoXCJqc3RsLWNob29zZVwiKSB8fCBjb250ZXh0LnRlbXBsYXRlLmNoaWxkcmVuLmxlbmd0aCA9PSAwKVxuXHRcdFx0cmV0dXJuIGNvbnRleHQ7XG5cdFx0XG5cdFx0Ly9jbG9uZSB0ZW1wbGF0ZSwgYmVmb3JlIG1hbmlwdWxhdGUgdGVtcGxhdGVcblx0XHRjb250ZXh0LnRlbXBsYXRlID0gY29udGV4dC50ZW1wbGF0ZS5jbG9uZU5vZGUodHJ1ZSk7XG5cdFx0Y29uc3QgeyB0ZW1wbGF0ZSwgcmVzb2x2ZXIgfSA9IGNvbnRleHQ7XG5cdFx0bGV0IHJlc29sdmVkID0gZmFsc2U7XG5cdFx0Y29uc3Qgd2hlbnMgPSB0ZW1wbGF0ZS5maW5kKFwiOnNjb3BlID4gW2pzdGwtd2hlbl1cIik7XG5cdFx0Y29uc3QgbGVuZ3RoID0gd2hlbnMubGVuZ3RoO1xuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcblx0XHRcdGNvbnN0IG5vZGUgPSB3aGVuc1tpXTtcblx0XHRcdGlmICghcmVzb2x2ZWQgJiYgKGF3YWl0IHJlc29sdmVyLnJlc29sdmUobm9kZS5hdHRyKFwianN0bC13aGVuXCIpLCBmYWxzZSkpKVxuXHRcdFx0XHRyZXNvbHZlZCA9IHRydWU7XG5cdFx0XHRlbHNlXG5cdFx0XHRcdG5vZGUucmVtb3ZlKCk7XG5cdFx0fVxuXG5cdFx0aWYgKHJlc29sdmVkKVxuXHRcdFx0dGVtcGxhdGUuZmluZChcIjpzY29wZSA+IFtqc3RsLW90aGVyd2lzZV1cIikucmVtb3ZlKCk7XG5cblx0XHRyZXR1cm4gY29udGV4dDtcblx0fVxufVxuXG5EaXJlY3RpdmUuZGVmaW5lKHsgZGlyZWN0aXZlOiBuZXcgQ2hvb3NlKCkgfSk7IiwiaW1wb3J0IERpcmVjdGl2ZSBmcm9tIFwiLi4vRGlyZWN0aXZlLmpzXCI7XG5pbXBvcnQgRXhwcmVzc2lvblJlc29sdmVyIGZyb20gXCJAZGVmYXVsdC1qcy9kZWZhdWx0anMtZXhwcmVzc2lvbi1sYW5ndWFnZS9zcmMvRXhwcmVzc2lvblJlc29sdmVyLmpzXCI7XG5cbmNvbnN0IE1PREVTID0ge1xuXHRcInJlbW90ZVwiOiBhc3luYyAoeyBkYXRhLCBjb250ZXh0IH0pID0+IHtcdFx0XG5cdFx0Y29uc3Qge3Jlc29sdmVyLCB0ZW1wbGF0ZX0gPSBjb250ZXh0O1xuXHRcdGRhdGEgPSBhd2FpdCByZXNvbHZlci5yZXNvbHZlVGV4dChkYXRhKTtcblx0XHRkYXRhID0gbmV3IFVSTChkYXRhLCBsb2NhdGlvbi5vcmlnaW4pO1xuXHRcdGxldCBvcHRpb24gPSBhd2FpdCByZXNvbHZlci5yZXNvbHZlVGV4dCh0ZW1wbGF0ZS5hdHRyKFwianN0bC1kYXRhLW9wdGlvblwiKSB8fCBcInt9XCIpO1xuXHRcdG9wdGlvbiA9IEpTT04ucGFyc2Uob3B0aW9uKTtcblxuXHRcdGRhdGEgPSBhd2FpdCBmZXRjaChkYXRhLnRvU3RyaW5nKCksIG9wdGlvbik7XG5cdFx0cmV0dXJuIGRhdGEuanNvbigpO1xuXHR9LFx0XG5cdFwic2V0XCI6IGFzeW5jICh7IGRhdGEsIGNvbnRleHQgfSkgPT4ge1xuXHRcdGNvbnN0IHtyZXNvbHZlcn0gPSBjb250ZXh0O1xuXHRcdFxuXHRcdGRhdGEgPSBhd2FpdCByZXNvbHZlci5yZXNvbHZlKGRhdGEpO1xuXHRcdHJldHVybiBkYXRhO1xuXHR9LFxuXHRcImRpcmVjdFwiOiBhc3luYyAoeyBkYXRhLCBjb250ZXh0IH0pID0+IHtcblx0XHRjb25zdCB7cmVzb2x2ZXJ9ID0gY29udGV4dDtcblx0XHRcblx0XHRkYXRhID0gYXdhaXQgcmVzb2x2ZXIucmVzb2x2ZVRleHQoZGF0YSk7XG5cdFx0cmV0dXJuIGRhdGE7XG5cdH1cbn07XG5cbmNvbnN0IHVwZGF0ZUNvbnRleHQgPSAoeyB2YXJuYW1lLCBkYXRhLCBzY29wZSwgY29udGV4dCB9KSA9PiB7XG5cdGlmICh2YXJuYW1lKVxuXHRcdGNvbnRleHQucmVzb2x2ZXIudXBkYXRlRGF0YSh2YXJuYW1lLCBkYXRhLCBzY29wZSk7XG5cdGVsc2UgaWYgKHNjb3BlKVxuXHRcdGNvbnRleHQucmVzb2x2ZXIubWVyZ2VDb250ZXh0KGRhdGEsIHNjb3BlKTtcblx0ZWxzZXtcblx0XHRjb25zdCByZXNvbHZlciA9IG5ldyBFeHByZXNzaW9uUmVzb2x2ZXIoeyBjb250ZXh0OiBkYXRhLCBuYW1lOiBcImpzdGwtZGF0YVwiLCBwYXJlbnQ6IGNvbnRleHQucmVzb2x2ZXIgfSk7XG5cdFx0Ly9jb250ZXh0ID0gY29udGV4dC5zdWJDb250ZXh0KHtyZXNvbHZlcn0pO1xuXHRcdGNvbnRleHQucmVzb2x2ZXIgPSByZXNvbHZlcjtcblx0fVxuXHRcblx0XHRcblx0cmV0dXJuIGNvbnRleHQ7XG59O1xuXG5cblxuY2xhc3MgRGF0YSBleHRlbmRzIERpcmVjdGl2ZSB7XG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHN1cGVyKCk7XG5cdH1cblxuXHRnZXQgbmFtZSgpIHsgcmV0dXJuIFwiZGF0YVwiIH1cblx0Z2V0IHJhbmsoKSB7IHJldHVybiAxMDAwIH1cblx0Z2V0IHBoYXNlKCl7cmV0dXJuIERpcmVjdGl2ZS5QSEFTRS5kYXRhfVxuXG5cdGFzeW5jIGV4ZWN1dGUoY29udGV4dCkge1xuXHRcdGlmICghKGNvbnRleHQudGVtcGxhdGUgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkgfHwgIWNvbnRleHQudGVtcGxhdGUuYXR0cihcImpzdGwtZGF0YVwiKSlcblx0XHRcdHJldHVybiBjb250ZXh0O1xuXHRcdFx0XG5cdFx0dHJ5IHtcblx0XHRcdGNvbnN0IHsgdGVtcGxhdGUgfSA9IGNvbnRleHQ7XHRcdFx0XG5cdFx0XHRjb25zdCBtb2RlID0gTU9ERVNbKHRlbXBsYXRlLmF0dHIoXCJqc3RsLWRhdGEtbW9kZVwiKSB8fCBcInJlbW90ZVwiKV07XG5cdFx0XHRpZiAoIW1vZGUpXG5cdFx0XHRcdHRocm93IG5ldyBFcnJvcihcIlRoZSBqc3RsLWRhdGEtbW9kZSBpcyB1bnN1cHBvcnRlZCFcIik7XG5cblx0XHRcdGxldCBkYXRhID0gdGVtcGxhdGUuYXR0cihcImpzdGwtZGF0YVwiKTtcblx0XHRcdGRhdGEgPSBhd2FpdCBtb2RlKHsgZGF0YSwgY29udGV4dCB9KTtcblxuXHRcdFx0Y29uc3QgdmFybmFtZSA9IHRlbXBsYXRlLmF0dHIoXCJqc3RsLWRhdGEtdmFyXCIpO1xuXHRcdFx0Y29uc3Qgc2NvcGUgPSB0ZW1wbGF0ZS5hdHRyKFwianN0bC1kYXRhLXNjb3BlXCIpO1xuXHRcdFx0Y29udGV4dCA9IHVwZGF0ZUNvbnRleHQoeyB2YXJuYW1lLCBkYXRhLCBzY29wZSwgY29udGV4dCB9KTtcblx0XHR9IGNhdGNoIChlKSB7XG5cdFx0XHRjb25zb2xlLmVycm9yKGUsIGNvbnRleHQudGVtcGxhdGUpO1xuXHRcdH1cblxuXHRcdHJldHVybiBjb250ZXh0O1xuXG5cdH1cbn1cblxuRGlyZWN0aXZlLmRlZmluZSh7IGRpcmVjdGl2ZTogbmV3IERhdGEoKSB9KTsiLCJpbXBvcnQgRGlyZWN0aXZlIGZyb20gXCIuLi9EaXJlY3RpdmUuanNcIjtcbmltcG9ydCBFeHByZXNzaW9uUmVzb2x2ZXIgZnJvbSBcIkBkZWZhdWx0LWpzL2RlZmF1bHRqcy1leHByZXNzaW9uLWxhbmd1YWdlL3NyYy9FeHByZXNzaW9uUmVzb2x2ZXIuanNcIjtcbmltcG9ydCB7aXNVbmRlZmluZWRPck51bGxPckJsYW5rLCBpc1VuZGVmaW5lZE9yTnVsbH0gZnJvbSBcIi4uL1V0aWxzLmpzXCI7XG5cbmNvbnN0IEFUVFJJQlVURSA9IHtcblx0REFUQTogXCJqc3RsLWZvcmVhY2hcIixcblx0VkFSOiBcImpzdGwtZm9yZWFjaC12YXJcIixcblx0U1RBVFVTOiBcImpzdGwtZm9yZWFjaC1zdGF0dXNcIixcblx0Q09VTlQ6IFwianN0bC1mb3JlYWNoLWNvdW50XCIsXG5cdFNUQVJUOiBcImpzdGwtZm9yZWFjaC1zdGFydFwiLFxuXHRTVEVQOiBcImpzdGwtZm9yZWFjaC1zdGVwXCIsXG5cdENPTkRJVElPTjogXCJqc3RsLWZvcmVhY2gtY29uZGl0aW9uXCJcbn07XG5cblxuLyoqXG4gKiBAcGFyYW0ge29iamVjdH0gb3B0aW9uIFxuICogQHBhcmFtIHtudW1iZXJ9IG9wdGlvbi5zdGFydCBcbiAqIEBwYXJhbSB7bnVtYmVyfSBvcHRpb24uc3RlcCBcbiAqIEBwYXJhbSB7bnVtYmVyfSBvcHRpb24uY291bnQgXG4gKiBAcGFyYW0ge3N0cmluZ30gb3B0aW9uLnZhcm5hbWUgXG4gKiBAcGFyYW0ge3N0cmluZ30gb3B0aW9uLnN0YXR1cyBcbiAqIEBwYXJhbSB7RXhwcmVzc2lvblJlc29sdmVyfSBvcHRpb24ucmVzb2x2ZXIgXG4gKiBAcmV0dXJucyB7UHJvbWlzZTx2b2lkPn1cbiAqL1xuY29uc3QgZG9Db3VudCA9IGFzeW5jIChvcHRpb24pID0+IHtcblx0bGV0IHsgc3RhcnQsIHN0ZXAsIGNvdW50LCB2YXJuYW1lLCBzdGF0dXMsIHJlc29sdmVyIH0gPSBvcHRpb247XG5cblx0Y291bnQgPSBhd2FpdCByZXNvbHZlci5yZXNvbHZlKGNvdW50KTtcblx0Y29uc3QgbGVuZ3RoID0gc3RhcnQgKyAoY291bnQgKiBzdGVwKTtcblx0bGV0IHN0b3AgPSBmYWxzZTtcblx0Zm9yIChsZXQgaSA9IHN0YXJ0OyBpIDwgbGVuZ3RoICYmICFzdG9wOyBpID0gaSArIHN0ZXApIHtcblx0XHRjb25zdCBpdGVyYXRpb24gPSB7fVxuXHRcdGl0ZXJhdGlvblt2YXJuYW1lXSA9IGk7XG5cdFx0aXRlcmF0aW9uW3N0YXR1c10gPSB7XG5cdFx0XHRpbmRleDogaSxcblx0XHRcdG51bWJlcjogaSArIDEsXG5cdFx0XHRzdGVwLFxuXHRcdFx0Y291bnRcblx0XHR9O1xuXHRcdHN0b3AgPSAhKGF3YWl0IGl0ZXJhdGUoaXRlcmF0aW9uLCBvcHRpb24pKTtcblx0fVxufTtcblxuXG5cbi8qKlxuICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbiBcbiAqIEBwYXJhbSB7QXJyYXk8YW55Pnxhbnl9IG9wdGlvbi5kYXRhIFxuICogQHBhcmFtIHtudW1iZXJ9IG9wdGlvbi5zdGFydCBcbiAqIEBwYXJhbSB7bnVtYmVyfSBvcHRpb24uc3RlcCBcbiAqIEBwYXJhbSB7bnVtYmVyfSBvcHRpb24uY291bnQgXG4gKiBAcGFyYW0ge3N0cmluZ30gb3B0aW9uLnZhcm5hbWUgXG4gKiBAcGFyYW0ge3N0cmluZ30gb3B0aW9uLnN0YXR1cyBcbiAqIEBwYXJhbSB7RXhwcmVzc2lvblJlc29sdmVyfSBvcHRpb24ucmVzb2x2ZXIgXG4gKiBAcmV0dXJucyB7UHJvbWlzZTx2b2lkPn1cbiAqL1xuY29uc3QgZG9Gb3JlYWNoID0gYXN5bmMgKG9wdGlvbikgPT4ge1xuXHRsZXQgeyBkYXRhLCBzdGFydCwgc3RlcCwgY291bnQsIHZhcm5hbWUsIHN0YXR1cywgcmVzb2x2ZXIgfSA9IG9wdGlvbjtcblxuXHRkYXRhID0gYXdhaXQgcmVzb2x2ZXIucmVzb2x2ZShkYXRhLCBbXSk7XG5cdGxldCBhcnJheSA9IGRhdGE7XG5cdGlmICghKGRhdGEgaW5zdGFuY2VvZiBBcnJheSkpXG5cdFx0YXJyYXkgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhkYXRhKTtcblxuXHRjb3VudCA9IGNvdW50ICE9IFwiXCIgPyBhd2FpdCByZXNvbHZlci5yZXNvbHZlKGNvdW50LCAwKSA6IG51bGw7XG5cdGNvbnN0IGxlbmd0aCA9IGNvdW50ID8gTWF0aC5taW4oc3RhcnQgKyBjb3VudCwgYXJyYXkubGVuZ3RoKSA6IGFycmF5Lmxlbmd0aDtcblx0bGV0IHN0b3AgPSBmYWxzZTtcblx0Zm9yIChsZXQgaSA9IHN0YXJ0OyBpIDwgbGVuZ3RoICYmICFzdG9wOyBpID0gaSArIHN0ZXApIHtcblx0XHRjb25zdCBpdGVyYXRpb24gPSB7fVxuXHRcdGl0ZXJhdGlvblt2YXJuYW1lXSA9IGRhdGFbaV07XG5cdFx0aXRlcmF0aW9uW3N0YXR1c10gPSB7XG5cdFx0XHRpbmRleDogaSxcblx0XHRcdG51bWJlcjogaSArIDEsXG5cdFx0XHRjb3VudDogbGVuZ3RoLFxuXHRcdFx0ZGF0YVxuXHRcdH07XG5cdFx0c3RvcCA9ICEoYXdhaXQgaXRlcmF0ZShpdGVyYXRpb24sIG9wdGlvbikpO1xuXHR9XG59O1xuXG5jb25zdCBpdGVyYXRlID0gYXN5bmMgKGRhdGEsIG9wdGlvbikgPT4ge1xuXHRsZXQgeyB0ZW1wbGF0ZSwgcmVzb2x2ZXIsIHJlbmRlcmVyLCBjb250YWluZXIsIGNvbmRpdGlvbiwgY29udGV4dCB9ID0gb3B0aW9uO1xuXHRyZXNvbHZlciA9IG5ldyBFeHByZXNzaW9uUmVzb2x2ZXIoeyBjb250ZXh0OiBkYXRhLCBuYW1lOiBcImpzdGwtZm9yZWFjaFwiLCBwYXJlbnQ6IHJlc29sdmVyIH0pO1xuXG5cdGNvbmRpdGlvbiA9IGNvbmRpdGlvbiA/IGF3YWl0IHJlc29sdmVyLnJlc29sdmUoY29uZGl0aW9uLCBmYWxzZSkgOiBmYWxzZTtcblx0aWYgKGNvbmRpdGlvbilcblx0XHRyZXR1cm4gZmFsc2U7XG5cdGNvbnN0IGl0ZW1Db250ZXh0ID0gY29udGV4dC5zdWJDb250ZXh0KHsgcmVzb2x2ZXIsIGNvbnRhaW5lciwgdGVtcGxhdGUsIG1vZGU6IFwiYXBwZW5kXCIgfSk7XG5cdGF3YWl0IHJlbmRlcmVyLnJlbmRlcihpdGVtQ29udGV4dCk7XG5cdGF3YWl0IGl0ZW1Db250ZXh0LnJlYWR5KCk7XG5cdHJldHVybiB0cnVlO1xufTtcblxuY2xhc3MgRm9yZWFjaCBleHRlbmRzIERpcmVjdGl2ZSB7XG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHN1cGVyKCk7XG5cdH1cblxuXHRnZXQgbmFtZSgpIHsgcmV0dXJuIFwiZm9yZWFjaFwiIH1cblx0Z2V0IHJhbmsoKSB7IHJldHVybiBEaXJlY3RpdmUuTUlOX1JBTksgKyAyIH1cblx0Z2V0IHBoYXNlKCkgeyByZXR1cm4gRGlyZWN0aXZlLlBIQVNFLnRlbXBsYXRlIH1cblxuXHRhc3luYyBleGVjdXRlKGNvbnRleHQpIHtcblx0XHRpZiAoIShjb250ZXh0LnRlbXBsYXRlIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpIHx8ICghY29udGV4dC50ZW1wbGF0ZS5hdHRyKEFUVFJJQlVURS5EQVRBKSAmJiAhY29udGV4dC50ZW1wbGF0ZS5hdHRyKEFUVFJJQlVURS5DT1VOVCkpKVxuXHRcdFx0cmV0dXJuIGNvbnRleHQ7XG5cblx0XHRjb250ZXh0Lmlnbm9yZSA9IHRydWU7XG5cdFx0dHJ5IHtcblx0XHRcdGNvbnN0IHsgdGVtcGxhdGUsIHJlc29sdmVyLCByZW5kZXJlciwgY29udGVudCB9ID0gY29udGV4dDtcblx0XHRcdGNvbnN0IGRhdGEgPSAodGVtcGxhdGUuYXR0cihBVFRSSUJVVEUuREFUQSkgfHwgXCJcIikudHJpbSgpO1xuXHRcdFx0Y29uc3QgY291bnQgPSAodGVtcGxhdGUuYXR0cihBVFRSSUJVVEUuQ09VTlQpIHx8IFwiXCIpLnRyaW0oKTtcblx0XHRcdGNvbnN0IG9wdGlvbiA9IHtcblx0XHRcdFx0ZGF0YSxcblx0XHRcdFx0Y291bnQsXG5cdFx0XHRcdHN0YXJ0OiBhd2FpdCByZXNvbHZlci5yZXNvbHZlKHRlbXBsYXRlLmF0dHIoQVRUUklCVVRFLlNUQVJUKSB8fCBcIjBcIiksXG5cdFx0XHRcdHN0ZXA6IGF3YWl0IHJlc29sdmVyLnJlc29sdmUodGVtcGxhdGUuYXR0cihBVFRSSUJVVEUuU1RFUCkgfHwgXCIxXCIpLFxuXHRcdFx0XHR2YXJuYW1lOiAodGVtcGxhdGUuYXR0cihBVFRSSUJVVEUuVkFSKSB8fCBcIml0ZW1cIikudHJpbSgpLFxuXHRcdFx0XHRzdGF0dXM6ICh0ZW1wbGF0ZS5hdHRyKEFUVFJJQlVURS5TVEFUVVMpIHx8IFwic3RhdHVzXCIpLnRyaW0oKSxcblx0XHRcdFx0Y29uZGl0aW9uOiB0ZW1wbGF0ZS5hdHRyKEFUVFJJQlVURS5DT05ESVRJT04pLFxuXHRcdFx0XHR0ZW1wbGF0ZTogdGVtcGxhdGUuY2hpbGROb2Rlcyxcblx0XHRcdFx0cmVzb2x2ZXIsXG5cdFx0XHRcdHJlbmRlcmVyLFxuXHRcdFx0XHRjb250YWluZXI6IGNvbnRlbnQsXG5cdFx0XHRcdGNvbnRleHRcblx0XHRcdH07XG5cdFx0XHRpZiAoaXNVbmRlZmluZWRPck51bGxPckJsYW5rKGRhdGEpICYmICFpc1VuZGVmaW5lZE9yTnVsbE9yQmxhbmsoY291bnQpKVxuXHRcdFx0XHRhd2FpdCBkb0NvdW50KG9wdGlvbik7XG5cdFx0XHRlbHNlIGlmKCFpc1VuZGVmaW5lZE9yTnVsbE9yQmxhbmsoZGF0YSkpXG5cdFx0XHRcdGF3YWl0IGRvRm9yZWFjaChvcHRpb24pO1xuXG5cdFx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRcdGNvbnNvbGUuZXJyb3IoXCJlcnJvciBhdCBqc3RsLWZvcmVhY2g6XCIsIGVycm9yKTtcblx0XHR9XG5cdFx0cmV0dXJuIGNvbnRleHQ7XG5cblx0fVxufTtcblxuRGlyZWN0aXZlLmRlZmluZSh7IGRpcmVjdGl2ZTogbmV3IEZvcmVhY2goKSB9KTsiLCJpbXBvcnQgRGlyZWN0aXZlIGZyb20gXCIuLi9EaXJlY3RpdmUuanNcIjtcblxuY2xhc3MgSWYgZXh0ZW5kcyBEaXJlY3RpdmUge1xuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRzdXBlcigpO1xuXHR9XG5cblx0Z2V0IG5hbWUoKSB7IHJldHVybiBcImlmXCIgfVxuXHRnZXQgcmFuaygpIHsgcmV0dXJuIERpcmVjdGl2ZS5NSU5fUkFOSyArIDEwMDAgfVxuXHRnZXQgcGhhc2UoKSB7IHJldHVybiBEaXJlY3RpdmUuUEhBU0UuaW5pdCB9XG5cblx0YXN5bmMgZXhlY3V0ZShjb250ZXh0KSB7XG5cdFx0Y29uc3QgeyB0ZW1wbGF0ZSB9ID0gY29udGV4dDtcblx0XHRpZiAoISh0ZW1wbGF0ZSBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSB8fCAhdGVtcGxhdGUuYXR0cihcImpzdGwtaWZcIikpXG5cdFx0XHRyZXR1cm4gY29udGV4dDtcblxuXHRcdGNvbnN0IGV4cHJlc3Npb24gPSB0ZW1wbGF0ZS5hdHRyKFwianN0bC1pZlwiKTtcblx0XHRjb25zdCByZXNvbHZlciA9IGNvbnRleHQucmVzb2x2ZXI7XG5cdFx0Y29uc3QgcmVzdWx0ID0gYXdhaXQgcmVzb2x2ZXIucmVzb2x2ZShleHByZXNzaW9uLCBmYWxzZSk7XG5cdFx0aWYgKCFyZXN1bHQpIHtcblx0XHRcdGNvbnRleHQuY29udGVudCA9IG51bGw7XG5cdFx0XHRjb250ZXh0LnN0b3AgPSB0cnVlO1xuXHRcdFx0Y29udGV4dC5pZ25vcmUgPSB0cnVlO1xuXHRcdH1cblxuXHRcdHJldHVybiBjb250ZXh0O1xuXHR9XG59XG5cbkRpcmVjdGl2ZS5kZWZpbmUoeyBkaXJlY3RpdmU6IG5ldyBJZigpIH0pOyIsImltcG9ydCBEaXJlY3RpdmUgZnJvbSBcIi4uL0RpcmVjdGl2ZS5qc1wiO1xuaW1wb3J0IFRlbXBsYXRlIGZyb20gXCIuLi9UZW1wbGF0ZS5qc1wiO1xuXG5jbGFzcyBJbmNsdWRlIGV4dGVuZHMgRGlyZWN0aXZlIHtcblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0c3VwZXIoKTtcblx0fVxuXG5cdGdldCBuYW1lKCkge1xuXHRcdHJldHVybiBcImluY2x1ZGVcIjtcblx0fVxuXHRnZXQgcmFuaygpIHtcblx0XHRyZXR1cm4gRGlyZWN0aXZlLk1JTl9SQU5LO1xuXHR9XG5cdGdldCBwaGFzZSgpIHtcblx0XHRyZXR1cm4gRGlyZWN0aXZlLlBIQVNFLnRlbXBsYXRlO1xuXHR9XG5cblx0YXN5bmMgZXhlY3V0ZShjb250ZXh0KSB7XG5cdFx0aWYgKCEoY29udGV4dC50ZW1wbGF0ZSBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSB8fCAhY29udGV4dC50ZW1wbGF0ZS5hdHRyKFwianN0bC1pbmNsdWRlXCIpKSByZXR1cm4gY29udGV4dDtcblx0XHR0cnkge1xuXHRcdFx0Y29uc3QgeyB0ZW1wbGF0ZSwgcmVzb2x2ZXIsIHJlbmRlcmVyIH0gPSBjb250ZXh0O1xuXHRcdFx0bGV0IGluY2x1ZGUgPSB0ZW1wbGF0ZS5hdHRyKFwianN0bC1pbmNsdWRlXCIpO1xuXHRcdFx0aW5jbHVkZSA9IGF3YWl0IHJlc29sdmVyLnJlc29sdmVUZXh0KGluY2x1ZGUpO1xuXHRcdFx0aW5jbHVkZSA9IG5ldyBVUkwoaW5jbHVkZSwgbG9jYXRpb24pO1xuXHRcdFx0aW5jbHVkZSA9IGF3YWl0IFRlbXBsYXRlLmxvYWQoaW5jbHVkZSk7XG5cblx0XHRcdGNvbnN0IG1vZGUgPSB0ZW1wbGF0ZS5hdHRyKFwianN0bC1pbmNsdWRlLW1vZGVcIikgfHwgXCJyZXBsYWNlXCI7XG5cblx0XHRcdGNvbnN0IHN1YkNvbnRleHQgPSBjb250ZXh0LnN1YkNvbnRleHQoeyB0ZW1wbGF0ZTogaW5jbHVkZSwgY29udGFpbmVyOiBjb250ZXh0LmNvbnRlbnQsIG1vZGV9KTtcblx0XHRcdGF3YWl0IHJlbmRlcmVyLnJlbmRlcihzdWJDb250ZXh0KTtcblx0XHRcdGF3YWl0IHN1YkNvbnRleHQucmVhZHkoKTtcblx0XHRcdGNvbnRleHQuaWdub3JlID0gdHJ1ZTtcblx0XHRcdGNvbnRleHQuc3RvcCA9IHRydWU7XG5cblx0XHRcdHJldHVybiBjb250ZXh0O1xuXHRcdH0gY2F0Y2ggKGUpIHtcblx0XHRcdGNvbnNvbGUuZXJyb3IoZSwgY29udGV4dC50ZW1wbGF0ZSk7XG5cdFx0XHRyZXR1cm4gY29udGV4dDtcblx0XHR9XG5cdH1cbn1cblxuRGlyZWN0aXZlLmRlZmluZSh7IGRpcmVjdGl2ZTogbmV3IEluY2x1ZGUoKSB9KTtcbiIsImltcG9ydCBEaXJlY3RpdmUgZnJvbSBcIi4uL0RpcmVjdGl2ZS5qc1wiO1xuaW1wb3J0IFJlcGxhY2UgZnJvbSBcIi4uL2VsZW1lbnRzL1JlcGxhY2UuanNcIjtcblxuY29uc3QgTUFSS0VSX0lHTk9SRSA9IFwianN0bC1pZ25vcmVcIjtcbmNvbnN0IE1BUktFUl9JR05PUkVfQ0hJTERTID0gXCJqc3RsLWlnbm9yZS1jaGlsZHNcIjtcbmNvbnN0IE1BUktFUl9BU1lOQyA9IFwianN0bC1hc3luY1wiO1xuY29uc3QgTUFSS0VSX1RBR05BTUUgPSBcImpzdGwtdGFnbmFtZVwiO1xuY29uc3QgTUFSS0VSX0lTID0gXCJpc1wiO1xuXG5jbGFzcyBJbml0aWFsIGV4dGVuZHMgRGlyZWN0aXZlIHtcblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0c3VwZXIoKTtcblx0fVxuXG5cdGdldCBuYW1lKCkge1xuXHRcdHJldHVybiBcImluaXRpYWxcIjtcblx0fVxuXHRnZXQgcmFuaygpIHtcblx0XHRyZXR1cm4gRGlyZWN0aXZlLk1JTl9SQU5LO1xuXHR9XG5cdGdldCBwaGFzZSgpIHtcblx0XHRyZXR1cm4gRGlyZWN0aXZlLlBIQVNFLmluaXQ7XG5cdH1cblxuXHRhc3luYyBleGVjdXRlKGNvbnRleHQpIHtcblx0XHRjb25zdCB7IHRlbXBsYXRlLCByZW5kZXJlciwgcmVzb2x2ZXIgfSA9IGNvbnRleHQ7XG5cdFx0aWYgKCEodGVtcGxhdGUgaW5zdGFuY2VvZiBFbGVtZW50KSkge1xuXHRcdFx0Y29udGV4dC5jb250ZW50ID0gZG9jdW1lbnQuaW1wb3J0Tm9kZSh0ZW1wbGF0ZSwgdHJ1ZSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGlmICh0ZW1wbGF0ZS5oYXNBdHRyaWJ1dGUoTUFSS0VSX0lHTk9SRSkpIHtcblx0XHRcdFx0Y29udGV4dC5jb250ZW50ID0gZG9jdW1lbnQuaW1wb3J0Tm9kZSh0ZW1wbGF0ZSwgdHJ1ZSk7XG5cdFx0XHRcdGNvbnRleHQuY29udGVudC5yZW1vdmVBdHRyaWJ1dGUoTUFSS0VSX0lHTk9SRSk7XG5cdFx0XHRcdGNvbnRleHQuc3RvcCA9IHRydWU7XG5cdFx0XHRcdGNvbnRleHQuaWdub3JlID0gdHJ1ZTtcblx0XHRcdH0gZWxzZSBpZiAoZmFsc2UgJiYgdGVtcGxhdGUuaGFzQXR0cmlidXRlKE1BUktFUl9BU1lOQykpIHtcblx0XHRcdFx0Y29udGV4dC5jb250ZW50ID0gbmV3IFJlcGxhY2UoKTtcblx0XHRcdFx0dGVtcGxhdGUuYXR0cihNQVJLRVJfQVNZTkMsIG51bGwpO1xuXHRcdFx0XHRjb25zdCByZW5kZXJPcHRpb24gPSBjb250ZXh0LnRvUmVuZGVyT3B0aW9uKHsgbW9kZTogXCJyZXBsYWNlXCIsIHRhcmdldDogY29udGV4dC5jb250ZW50IH0pO1xuXHRcdFx0XHRzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRcdFx0XHRyZW5kZXJlci5yZW5kZXIocmVuZGVyT3B0aW9uKTtcblx0XHRcdFx0fSwgcGFyc2VJbnQodGVtcGxhdGUuYXR0cihNQVJLRVJfQVNZTkMpIHx8IFwiMjUwXCIpIHx8IDI1MCk7XG5cdFx0XHRcdGNvbnRleHQuc3RvcCA9IHRydWU7XG5cdFx0XHRcdGNvbnRleHQuaWdub3JlID0gdHJ1ZTtcblx0XHRcdH0gZWxzZSBpZiAodGVtcGxhdGUgaW5zdGFuY2VvZiBIVE1MVGVtcGxhdGVFbGVtZW50KSB7XG5cdFx0XHRcdGNvbnRleHQuY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGVtcGxhdGUudGFnTmFtZSk7XG5cdFx0XHRcdGNvbnN0IHN1YkNvbnRleHQgPSBjb250ZXh0LnN1YkNvbnRleHQoeyB0ZW1wbGF0ZTogdGVtcGxhdGUuY29udGVudC5jaGlsZE5vZGVzLCBjb250YWluZXI6IGNvbnRleHQuY29udGVudC5jb250ZW50IH0pO1xuXHRcdFx0XHRhd2FpdCByZW5kZXJlci5yZW5kZXIoc3ViQ29udGV4dCk7XG5cdFx0XHRcdGNvbnRleHQuc3RvcCA9IGZhbHNlO1xuXHRcdFx0XHRjb250ZXh0Lmlnbm9yZSA9IHRydWU7XG5cdFx0XHR9IGVsc2UgaWYgKHRlbXBsYXRlLmhhc0F0dHJpYnV0ZShNQVJLRVJfVEFHTkFNRSkpIHtcblx0XHRcdFx0bGV0IHRhZ25hbWUgPSB0ZW1wbGF0ZS5hdHRyKE1BUktFUl9UQUdOQU1FKS50cmltKCk7XG5cdFx0XHRcdGlmICh0YWduYW1lLmxlbmd0aCA+IDApIGNvbnRleHQuY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoYXdhaXQgcmVzb2x2ZXIucmVzb2x2ZVRleHQodGVtcGxhdGUuYXR0cihNQVJLRVJfVEFHTkFNRSkpKTtcblx0XHRcdFx0ZWxzZSB7XG5cdFx0XHRcdFx0Y29udGV4dC5jb250ZW50ID0gZG9jdW1lbnQuaW1wb3J0Tm9kZSh0ZW1wbGF0ZSwgdHJ1ZSk7XG5cdFx0XHRcdFx0Y29udGV4dC5zdG9wID0gdHJ1ZTtcblx0XHRcdFx0XHRjb250ZXh0Lmlnbm9yZSA9IHRydWU7XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSBpZiAodGVtcGxhdGUudGFnTmFtZSkge1xuXHRcdFx0XHRsZXQgaXMgPSB0ZW1wbGF0ZS5hdHRyKE1BUktFUl9JUyk7XG5cdFx0XHRcdGlmIChpcykge1xuXHRcdFx0XHRcdGlzID0gYXdhaXQgcmVzb2x2ZXIucmVzb2x2ZVRleHQoaXMpO1xuXHRcdFx0XHRcdGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRlbXBsYXRlLnRhZ05hbWUsIHsgaXMgfSk7XG5cdFx0XHRcdFx0ZWxlbWVudC5hdHRyKE1BUktFUl9JUywgaXMpO1xuXHRcdFx0XHRcdGNvbnRleHQuY29udGVudCA9IGVsZW1lbnQ7XG5cdFx0XHRcdH0gZWxzZSBjb250ZXh0LmNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRlbXBsYXRlLnRhZ05hbWUpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Y29udGV4dC5jb250ZW50ID0gZG9jdW1lbnQuaW1wb3J0Tm9kZSh0ZW1wbGF0ZSwgdHJ1ZSk7XG5cdFx0XHRcdGNvbnRleHQuc3RvcCA9IHRydWU7XG5cdFx0XHRcdGNvbnRleHQuaWdub3JlID0gdHJ1ZTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKCFjb250ZXh0LnN0b3AgJiYgdGVtcGxhdGUuaGFzQXR0cmlidXRlKE1BUktFUl9JR05PUkVfQ0hJTERTKSkge1xuXHRcdFx0XHRjb250ZXh0Lmlnbm9yZSA9IHRydWU7XG5cdFx0XHRcdGNvbnN0IGNsb25lID0gZG9jdW1lbnQuaW1wb3J0Tm9kZSh0ZW1wbGF0ZSwgdHJ1ZSk7XG5cdFx0XHRcdGlmICh0ZW1wbGF0ZSBpbnN0YW5jZW9mIEhUTUxUZW1wbGF0ZUVsZW1lbnQpIGNvbnRleHQuY29udGVudC5jb250ZW50LmFwcGVuZChjbG9uZS5jb250ZW50KTtcblx0XHRcdFx0ZWxzZSBjb250ZXh0LmNvbnRlbnQuYXBwZW5kKGNsb25lLmNoaWxkTm9kZXMpO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiBjb250ZXh0O1xuXHR9XG59XG5cbkRpcmVjdGl2ZS5kZWZpbmUoeyBkaXJlY3RpdmU6IG5ldyBJbml0aWFsKCkgfSk7XG4iLCJpbXBvcnQgRGlyZWN0aXZlIGZyb20gXCIuLi9EaXJlY3RpdmUuanNcIjtcbmltcG9ydCBFeHByZXNzaW9uUmVzb2x2ZXIgZnJvbSBcIkBkZWZhdWx0LWpzL2RlZmF1bHRqcy1leHByZXNzaW9uLWxhbmd1YWdlL3NyYy9FeHByZXNzaW9uUmVzb2x2ZXIuanNcIjtcblxuY29uc3QgTkFNRSA9IFwib24tZmluaXNoZWRcIjtcbmNvbnN0IEFUVFJJQlVURV9PTl9GSU5JU0hFRCA9IGBqc3RsLSR7TkFNRX1gO1xuY29uc3QgQVRUUklCVVRFX09OX0ZJTklTSEVEX0FTWU5DID0gYCR7QVRUUklCVVRFX09OX0ZJTklTSEVEfS1hc3luY2A7XG5cbmNsYXNzIE9uRmluaXNoZWQgZXh0ZW5kcyBEaXJlY3RpdmUge1xuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRzdXBlcigpO1xuXHR9XG5cblx0Z2V0IG5hbWUoKSB7IHJldHVybiBOQU1FIH1cblx0Z2V0IHJhbmsoKSB7IHJldHVybiBEaXJlY3RpdmUuTUFYX1JBTksgfVxuXHRnZXQgcGhhc2UoKSB7IHJldHVybiBEaXJlY3RpdmUuUEhBU0UuZmluaXNoIH1cblxuXG5cblx0YXN5bmMgZXhlY3V0ZShjb250ZXh0KSB7XG5cdFx0Y29uc3QgeyB0ZW1wbGF0ZSwgY29udGVudCwgcm9vdCB9ID0gY29udGV4dDtcblx0XHRpZiAoISh0ZW1wbGF0ZSBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSB8fCAhdGVtcGxhdGUuaGFzQXR0cmlidXRlKEFUVFJJQlVURV9PTl9GSU5JU0hFRCkpXG5cdFx0XHRyZXR1cm4gY29udGV4dDtcblxuXHRcdGNvbnN0IGV4cHJlc3Npb24gPSB0ZW1wbGF0ZS5hdHRyKEFUVFJJQlVURV9PTl9GSU5JU0hFRCk7XG5cdFx0Y29uc3QgYXN5bmNDYWxsID0gdGVtcGxhdGUuaGFzQXR0cmlidXRlKEFUVFJJQlVURV9PTl9GSU5JU0hFRF9BU1lOQyk7XG5cblx0XHRjb25zdCBkYXRhID0ge1xuXHRcdFx0JGVsZW1lbnQ6IGNvbnRlbnQsXG5cdFx0XHQkcm9vdDogcm9vdCxcblx0XHRcdCR0ZW1wbGF0ZTogdGVtcGxhdGVcblx0XHR9O1xuXHRcdGNvbnN0IHJlc29sdmVyID0gbmV3IEV4cHJlc3Npb25SZXNvbHZlcih7IGNvbnRleHQ6IGRhdGEsIG5hbWU6IFwianN0bC1kYXRhXCIsIHBhcmVudDogY29udGV4dC5yZXNvbHZlciB9KTtcblxuXG5cdFx0Y29udGV4dC5maW5pc2hlZChhc3luYyAoKSA9PiB7XG5cdFx0XHR0cnkge1xuXHRcdFx0XHRpZighYXN5bmNDYWxsKVxuXHRcdFx0XHRcdHJldHVybiByZXNvbHZlci5yZXNvbHZlKGV4cHJlc3Npb24sIG51bGwpO1xuXHRcdFx0XHRcdFxuXHRcdFx0XHRyZXNvbHZlci5yZXNvbHZlKGV4cHJlc3Npb24sIG51bGwpO1xuXHRcdFx0fSBjYXRjaCAoZSkge1xuXHRcdFx0XHRjb25zb2xlLmVycm9yKGUpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXG5cdFx0cmV0dXJuIGNvbnRleHQ7XG5cdH1cbn1cblxuRGlyZWN0aXZlLmRlZmluZSh7IGRpcmVjdGl2ZTogbmV3IE9uRmluaXNoZWQoKSB9KTsiLCJpbXBvcnQgRGlyZWN0aXZlIGZyb20gXCIuLi9EaXJlY3RpdmUuanNcIjtcbmltcG9ydCBFeHByZXNzaW9uUmVzb2x2ZXIgZnJvbSBcIkBkZWZhdWx0LWpzL2RlZmF1bHRqcy1leHByZXNzaW9uLWxhbmd1YWdlL3NyYy9FeHByZXNzaW9uUmVzb2x2ZXIuanNcIjtcblxuY29uc3QgRElSRUNUSVZFTkFNRSA9IFwianN0bC1yZXBlYXRcIjtcbmNvbnN0IElHTk9SRURJUkVDVElWRSA9IG5ldyBTZXQoW0RJUkVDVElWRU5BTUVdKTtcblxuY29uc3QgQVRUUklCVVRFID0ge1xuXHREQVRBOiBgJHtESVJFQ1RJVkVOQU1FfWAsXG5cdFZBUjogYCR7RElSRUNUSVZFTkFNRX0tdmFyYCxcblx0U1RBVFVTOiBgJHtESVJFQ1RJVkVOQU1FfS1zdGF0dXNgLFxuXHRDT1VOVDogYCR7RElSRUNUSVZFTkFNRX0tY291bnRgLFxuXHRTVEFSVDogYCR7RElSRUNUSVZFTkFNRX0tc3RhcnRgLFxuXHRTVEVQOiBgJHtESVJFQ1RJVkVOQU1FfS1zdGVwYCxcblx0Q09ORElUSU9OOiBgJHtESVJFQ1RJVkVOQU1FfS1jb25kaXRpb25gLFxufTtcblxuY29uc3QgZG9Db3VudCA9IGFzeW5jIChvcHRpb24pID0+IHtcblx0bGV0IHsgc3RhcnQsIHN0ZXAsIGNvdW50LCB2YXJuYW1lLCBzdGF0dXMsIHJlc29sdmVyIH0gPSBvcHRpb247XG5cdGNvdW50ID0gYXdhaXQgcmVzb2x2ZXIucmVzb2x2ZShjb3VudCk7XG5cdGNvbnN0IGxlbmd0aCA9IHN0YXJ0ICsgY291bnQgKiBzdGVwO1xuXHRsZXQgc3RvcCA9IGZhbHNlO1xuXHRmb3IgKGxldCBpID0gc3RhcnQ7IGkgPCBsZW5ndGggJiYgIXN0b3A7IGkgPSBpICsgc3RlcCkge1xuXHRcdGNvbnN0IGl0ZXJhdGlvbiA9IHt9O1xuXHRcdGl0ZXJhdGlvblt2YXJuYW1lXSA9IGk7XG5cdFx0aXRlcmF0aW9uW3N0YXR1c10gPSB7XG5cdFx0XHRpbmRleDogaSxcblx0XHRcdG51bWJlcjogaSArIDEsXG5cdFx0XHRzdGVwLFxuXHRcdFx0Y291bnQsXG5cdFx0fTtcblx0XHRzdG9wID0gIShhd2FpdCBpdGVyYXRlKGl0ZXJhdGlvbiwgb3B0aW9uKSk7XG5cdH1cbn07XG5cbmNvbnN0IGRvUmVwZWF0ID0gYXN5bmMgKG9wdGlvbikgPT4ge1xuXHRsZXQgeyBkYXRhLCBzdGFydCwgc3RlcCwgY291bnQsIHZhcm5hbWUsIHN0YXR1cywgcmVzb2x2ZXIgfSA9IG9wdGlvbjtcblxuXHRkYXRhID0gYXdhaXQgcmVzb2x2ZXIucmVzb2x2ZShkYXRhKTtcblx0bGV0IGFycmF5ID0gZGF0YTtcblx0aWYgKCEoZGF0YSBpbnN0YW5jZW9mIEFycmF5KSkgYXJyYXkgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhkYXRhKTtcblxuXHRjb3VudCA9IGNvdW50ICE9IFwiXCIgPyBhd2FpdCByZXNvbHZlci5yZXNvbHZlKGNvdW50LCAwKSA6IG51bGw7XG5cdGNvbnN0IGxlbmd0aCA9IGNvdW50ID8gTWF0aC5taW4oc3RhcnQgKyBjb3VudCwgYXJyYXkubGVuZ3RoKSA6IGFycmF5Lmxlbmd0aDtcblx0bGV0IHN0b3AgPSBmYWxzZTtcblx0Zm9yIChsZXQgaSA9IHN0YXJ0OyBpIDwgbGVuZ3RoICYmICFzdG9wOyBpID0gaSArIHN0ZXApIHtcblx0XHRjb25zdCBpdGVyYXRpb24gPSB7fTtcblx0XHRpdGVyYXRpb25bdmFybmFtZV0gPSBkYXRhW2ldO1xuXHRcdGl0ZXJhdGlvbltzdGF0dXNdID0ge1xuXHRcdFx0aW5kZXg6IGksXG5cdFx0XHRudW1iZXI6IGkgKyAxLFxuXHRcdFx0Y291bnQ6IGxlbmd0aCxcblx0XHRcdGRhdGEsXG5cdFx0fTtcblx0XHRzdG9wID0gIShhd2FpdCBpdGVyYXRlKGl0ZXJhdGlvbiwgb3B0aW9uKSk7XG5cdH1cbn07XG5cbmNvbnN0IGl0ZXJhdGUgPSBhc3luYyAoZGF0YSwgb3B0aW9uKSA9PiB7XG5cdGxldCB7IHRlbXBsYXRlLCByZXNvbHZlciwgcmVuZGVyZXIsIGNvbmRpdGlvbiwgY29udGV4dCB9ID0gb3B0aW9uO1xuXHRyZXNvbHZlciA9IG5ldyBFeHByZXNzaW9uUmVzb2x2ZXIoeyBjb250ZXh0OiBkYXRhLCBuYW1lOiBESVJFQ1RJVkVOQU1FLCBwYXJlbnQ6IHJlc29sdmVyIH0pO1xuXG5cdGNvbmRpdGlvbiA9IGNvbmRpdGlvbiA/IGF3YWl0IHJlc29sdmVyLnJlc29sdmUoY29uZGl0aW9uLCBmYWxzZSkgOiBmYWxzZTtcblx0aWYgKGNvbmRpdGlvbikgcmV0dXJuIGZhbHNlO1xuXG5cdGNvbnN0IGl0ZW1Db250ZXh0ID0gIGNvbnRleHQuc3ViQ29udGV4dCh7IHJlc29sdmVyLCB0ZW1wbGF0ZSwgbW9kZTogXCJhcHBlbmRcIiwgaWdub3JlRGlyZWN0aXZlOiBJR05PUkVESVJFQ1RJVkUgfSlcblx0YXdhaXQgcmVuZGVyZXIucmVuZGVyKGl0ZW1Db250ZXh0KTtcblx0YXdhaXQgaXRlbUNvbnRleHQucmVhZHkoKTtcblxuXHRyZXR1cm4gdHJ1ZTtcbn07XG5cbmNsYXNzIFJlcGVhdCBleHRlbmRzIERpcmVjdGl2ZSB7XG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHN1cGVyKCk7XG5cdH1cblxuXHRnZXQgbmFtZSgpIHtcblx0XHRyZXR1cm4gRElSRUNUSVZFTkFNRTtcblx0fVxuXHRnZXQgcmFuaygpIHtcblx0XHRyZXR1cm4gRGlyZWN0aXZlLk1JTl9SQU5LICsgMztcblx0fVxuXHRnZXQgcGhhc2UoKSB7XG5cdFx0cmV0dXJuIERpcmVjdGl2ZS5QSEFTRS50ZW1wbGF0ZTtcblx0fVxuXG5cdGFzeW5jIGV4ZWN1dGUoY29udGV4dCkge1xuXHRcdGlmICghKGNvbnRleHQudGVtcGxhdGUgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkgfHwgKCFjb250ZXh0LnRlbXBsYXRlLmF0dHIoQVRUUklCVVRFLkRBVEEpICYmICFjb250ZXh0LnRlbXBsYXRlLmF0dHIoQVRUUklCVVRFLkNPVU5UKSkpIHJldHVybiBjb250ZXh0O1xuXG5cdFx0dHJ5IHtcblx0XHRcdGNvbnN0IHsgdGVtcGxhdGUsIHJlc29sdmVyLCByZW5kZXJlciwgY29udGVudCwgY29udGFpbmVyIH0gPSBjb250ZXh0O1xuXHRcdFx0Y29uc3Qgb3B0aW9uID0ge1xuXHRcdFx0XHRkYXRhOiAodGVtcGxhdGUuYXR0cihBVFRSSUJVVEUuREFUQSkgfHwgXCJcIikudHJpbSgpLFxuXHRcdFx0XHRjb3VudDogKHRlbXBsYXRlLmF0dHIoQVRUUklCVVRFLkNPVU5UKSB8fCBcIlwiKS50cmltKCksXG5cdFx0XHRcdHN0YXJ0OiBhd2FpdCByZXNvbHZlci5yZXNvbHZlKHRlbXBsYXRlLmF0dHIoQVRUUklCVVRFLlNUQVJUKSB8fCBcIjBcIiksXG5cdFx0XHRcdHN0ZXA6IGF3YWl0IHJlc29sdmVyLnJlc29sdmUodGVtcGxhdGUuYXR0cihBVFRSSUJVVEUuU1RFUCkgfHwgXCIxXCIpLFxuXHRcdFx0XHR2YXJuYW1lOiAodGVtcGxhdGUuYXR0cihBVFRSSUJVVEUuVkFSKSB8fCBcIml0ZW1cIikudHJpbSgpLFxuXHRcdFx0XHRzdGF0dXM6ICh0ZW1wbGF0ZS5hdHRyKEFUVFJJQlVURS5TVEFUVVMpIHx8IFwic3RhdHVzXCIpLnRyaW0oKSxcblx0XHRcdFx0Y29uZGl0aW9uOiB0ZW1wbGF0ZS5hdHRyKEFUVFJJQlVURS5DT05ESVRJT04pLFxuXHRcdFx0XHR0ZW1wbGF0ZTogdGVtcGxhdGUsXG5cdFx0XHRcdHRhZ25hbWU6IGNvbnRlbnQudGFnTmFtZSxcblx0XHRcdFx0cmVzb2x2ZXIsXG5cdFx0XHRcdHJlbmRlcmVyLFxuXHRcdFx0XHRjb250YWluZXIsXG5cdFx0XHRcdGNvbnRleHQsXG5cdFx0XHR9O1xuXHRcdFx0aWYgKCghb3B0aW9uLmRhdGEgfHwgb3B0aW9uLmRhdGEgPT0gXCJcIikgJiYgb3B0aW9uLmNvdW50KSBhd2FpdCBkb0NvdW50KG9wdGlvbik7XG5cdFx0XHRlbHNlIGF3YWl0IGRvUmVwZWF0KG9wdGlvbik7XG5cdFx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRcdGNvbnNvbGUuZXJyb3IoXCJlcnJvciBhdCBqc3RsLXJlcGVhdDpcIiwgZXJyb3IpO1xuXHRcdH1cblxuXHRcdGNvbnRleHQuY29udGVudCA9IG51bGw7XG5cdFx0Y29udGV4dC5zdG9wID0gdHJ1ZTtcblx0XHRjb250ZXh0Lmlnbm9yZSA9IHRydWU7XG5cdFx0cmV0dXJuIGNvbnRleHQ7XG5cdH1cbn1cblxuRGlyZWN0aXZlLmRlZmluZSh7IGRpcmVjdGl2ZTogbmV3IFJlcGVhdCgpIH0pO1xuIiwiaW1wb3J0IERpcmVjdGl2ZSBmcm9tIFwiLi4vRGlyZWN0aXZlLmpzXCI7XG5cbmNvbnN0IERFRkFVTFRfT1BUSU9OID0ge1xuXHRtb2RlOiBcInRleHRcIixcblx0dW5zZWN1cmU6IGZhbHNlLFxuXHRwcmV2ZW50Rm9ybWF0IDogZmFsc2UsXG5cdG1heExlbmd0aDogMFx0XG59O1xuXG5jb25zdCBTRUNVUkVfSFRNTF9GSUxURVIgPSBcInNjcmlwdCwgc3R5bGUsIGJvZHksIGh0bWwsIGhlYWQsIG9iamVjdCwgbGlua1wiO1xuXG5jb25zdCByZWFkT3B0aW9uID0gYXN5bmMgKHBhcmVudCwgY29udGV4dCkgPT4ge1xuXHRjb25zdCByZXNvbHZlciA9IGNvbnRleHQucmVzb2x2ZXI7XG5cdHJldHVybiB7XG5cdFx0bW9kZTogYXdhaXQgcmVzb2x2ZXIucmVzb2x2ZVRleHQoKHBhcmVudC5hdHRyKFwianN0bC10ZXh0LWNvbnRlbnQtdHlwZVwiKSB8fCBcInRleHRcIikudHJpbSgpLnRvTG93ZXJDYXNlKCkpLFxuXHRcdHVuc2VjdXJlOiBwYXJlbnQuaGFzQXR0cmlidXRlKFwianN0bC10ZXh0LXVuc2VjdXJlXCIpLFxuXHRcdHByZXZlbnRGb3JtYXQ6ICEhcGFyZW50LmF0dHIoXCJqc3RsLXRleHQtcHJldmVudC1mb3JtYXRcIikgfHwgZmFsc2UsXG5cdFx0bWF4TGVuZ3RoOiBwYXJzZUludChhd2FpdCByZXNvbHZlci5yZXNvbHZlVGV4dChwYXJlbnQuYXR0cihcImpzdGwtdGV4dC10cmltLWxlbmd0aFwiKSB8fCBcIjBcIikpXG5cdH07XG59O1xuXG5jb25zdCB0cmltVGV4dExlbmd0aCA9ICh0ZXh0LCBsZW5ndGgpID0+IHtcblx0cmV0dXJuIHRleHQubGVuZ3RoID4gbGVuZ3RoID8gdGV4dC5zdWJzdHJpbmcoMCwgbGVuZ3RoIC0gMykudHJpbSgpICsgXCIuLi5cIiA6IHRleHQ7XG59O1xuXG5jb25zdCBNT0RFUyA9IHtcblx0XCJ0ZXh0XCIgOiBhc3luYyAob3B0aW9uLCBjb250ZXh0KSA9PiB7XG5cdFx0Y29uc3Qge2NvbnRlbnQsIHJlc29sdmVyLCB0ZW1wbGF0ZX0gPSBjb250ZXh0O1xuXHRcdFxuXHRcdGxldCB0ZXh0ID0gYXdhaXQgcmVzb2x2ZXIucmVzb2x2ZVRleHQodGVtcGxhdGUudGV4dENvbnRlbnQpO1x0XHRcblx0XHR0ZXh0ID0gY3JlYXRlKHRleHQsdHJ1ZSkuY29udGVudC50ZXh0Q29udGVudDtcblx0XHRpZihvcHRpb24ubWF4TGVuZ3RoID4gMClcblx0XHRcdHRleHQgPSB0cmltVGV4dExlbmd0aCh0ZXh0LCBvcHRpb24ubWF4TGVuZ3RoKTtcdFx0XG5cdFx0XG5cdFx0Y29udGVudC50ZXh0Q29udGVudCA9IHRleHQ7XHRcdFxuXHR9LFxuXHRcImh0bWxcIjogYXN5bmMgKG9wdGlvbiwgY29udGV4dCkgPT4ge1xuXHRcdGNvbnN0IHtyZXNvbHZlciwgdGVtcGxhdGV9ID0gY29udGV4dDtcblx0XHRcblx0XHRsZXQgY29udGVudCA9IGF3YWl0IHJlc29sdmVyLnJlc29sdmVUZXh0KHRlbXBsYXRlLnRleHRDb250ZW50KTtcdFx0XG5cdFx0Y29udGVudCA9IGNyZWF0ZShjb250ZW50LHRydWUpO1x0XHRcblx0XHRjb250ZW50ID0gZG9jdW1lbnQuaW1wb3J0Tm9kZShjb250ZW50LmNvbnRlbnQsIHRydWUpO1xuXHRcdFxuXHRcdGlmKG9wdGlvbi51bnNlY3VyZSlcblx0XHRcdGNvbnRleHQuY29udGVudCA9IGNvbnRlbnQ7XHRcdFx0XG5cdFx0ZWxzZXtcblx0XHRcdGNvbnRlbnQuZmluZChTRUNVUkVfSFRNTF9GSUxURVIpLnJlbW92ZSgpO1x0XHRcdFxuXHRcdFx0Y29udGV4dC5jb250ZW50ID0gY29udGVudDtcblx0XHR9XG5cdH1cbn07XG5cblxuY2xhc3MgVGV4dENvbnRlbnQgZXh0ZW5kcyBEaXJlY3RpdmUge1xuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRzdXBlcigpO1xuXHR9XG5cblx0Z2V0IG5hbWUoKSB7IHJldHVybiBcInRleHRcIiB9XG5cdGdldCByYW5rKCkgeyByZXR1cm4gRGlyZWN0aXZlLk1JTl9SQU5LICsgMSB9XG5cdGdldCBwaGFzZSgpIHsgcmV0dXJuIERpcmVjdGl2ZS5QSEFTRS5jb250ZW50IH1cblxuXG5cblx0YXN5bmMgZXhlY3V0ZShjb250ZXh0KSB7XG5cdFx0Y29uc3QgeyB0ZW1wbGF0ZSB9ID0gY29udGV4dDtcblx0XHRpZiAoISh0ZW1wbGF0ZSBpbnN0YW5jZW9mIFRleHQpIHx8IHRlbXBsYXRlLnRleHRDb250ZW50LnRyaW0oKS5sZW5ndGggPT0gMCB8fCAodGVtcGxhdGUucGFyZW50RWxlbWVudCAmJiB0ZW1wbGF0ZS5wYXJlbnRFbGVtZW50Lmhhc0F0dHJpYnV0ZShcImpzdGwtdGV4dC1pZ25vcmVcIikpKVxuXHRcdFx0cmV0dXJuIGNvbnRleHQ7XG5cblx0XHRjb25zdCBwYXJlbnQgPSB0ZW1wbGF0ZS5wYXJlbnRFbGVtZW50O1xuXHRcdGNvbnN0IG9wdGlvbiA9IHBhcmVudCA/IGF3YWl0IHJlYWRPcHRpb24ocGFyZW50LCBjb250ZXh0KSA6IERFRkFVTFRfT1BUSU9OO1xuXHRcdFxuXHRcdGNvbnN0ICBtb2RlID0gTU9ERVNbb3B0aW9uLm1vZGVdO1xuXHRcdGlmKCFtb2RlKVxuXHRcdFx0dGhyb3cgbmV3IEVycm9yKFwiVGV4dCBtb2RlIFxcXCJcIisgb3B0aW9uLm1vZGUgKyBcIlxcXCIgaXMgdW5zdXBwb3J0ZWQhXCIpO1xuXHRcdFxuXHRcdGF3YWl0IG1vZGUob3B0aW9uLCBjb250ZXh0KTtcblx0XHRcblx0XHRyZXR1cm4gY29udGV4dDtcblx0fVxufVxuXG5EaXJlY3RpdmUuZGVmaW5lKHsgZGlyZWN0aXZlOiBuZXcgVGV4dENvbnRlbnQoKSB9KTsiLCJpbXBvcnQgXCIuL0luaXRpYWwuanNcIjtcbmltcG9ydCBcIi4vRGF0YS5qc1wiO1xuaW1wb3J0IFwiLi9JZi5qc1wiO1xuaW1wb3J0IFwiLi9DaG9vc2UuanNcIjtcbmltcG9ydCBcIi4vSW5jbHVkZS5qc1wiO1xuaW1wb3J0IFwiLi9Gb3JlYWNoLmpzXCI7XG5pbXBvcnQgXCIuL1JlcGVhdC5qc1wiO1xuaW1wb3J0IFwiLi9UZXh0LmpzXCI7XG5pbXBvcnQgXCIuL0F0dHJpYnV0ZXMuanNcIjtcbmltcG9ydCBcIi4vQXR0YWNoRWxlbWVudC5qc1wiO1xuaW1wb3J0IFwiLi9PbkZpbmlzaGVkLmpzXCI7IiwiaW1wb3J0IEVsZW1lbnQgZnJvbSBcIi4uL0VsZW1lbnQuanNcIlxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZXBsYWNlRWxlbWVudCBleHRlbmRzIEVsZW1lbnR7XG5cdGNvbnN0cnVjdG9yKCl7XG5cdFx0c3VwZXIoKTtcblx0XHRcblx0XHR0aGlzLmF0dGFjaFNoYWRvdyh7bW9kZTogJ29wZW4nfSk7XG5cdH1cblx0YXN5bmMgZXhlY3V0ZSh7dGVtcGxhdGUsIGNvbnRleHR9KXtcblx0XHRyZXR1cm4gY29udGV4dDtcblx0fTtcdFx0XG59XG50cnl7Y3VzdG9tRWxlbWVudHMuZGVmaW5lKFwianN0bC1yZXBsYWNlXCIsIFJlcGxhY2VFbGVtZW50KTt9Y2F0Y2goZSl7fS8vaWdub3JlIiwiaW1wb3J0IFwiLi9SZXBsYWNlLmpzXCIiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgVGVtcGxhdGUsIHt0b0FzeW5jVGVtcGxhdGVMb2FkZXJ9IGZyb20gXCIuL3NyYy9UZW1wbGF0ZS5qc1wiO1xuaW1wb3J0IFJlbmRlcmVyIGZyb20gXCIuL3NyYy9SZW5kZXJlci5qc1wiO1xuXG5leHBvcnQge1RlbXBsYXRlLCBSZW5kZXJlciwgdG9Bc3luY1RlbXBsYXRlTG9hZGVyfTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=