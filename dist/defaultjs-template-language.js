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
/******/ 	return __webpack_require__(__webpack_require__.s = "./browser-index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./browser-index.js":
/*!**************************!*\
  !*** ./browser-index.js ***!
  \**************************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src */ "./src/index.js");


const global = window || global || self || undefined || {};
global.defaultjs = global.defaultjs || {};
global.defaultjs.tl = global.defaultjs.tl || {
	VERSION : "1.0.0-beta.1",
	Constants : _src__WEBPACK_IMPORTED_MODULE_0__[/* Constants */ "a"],
	Processor : _src__WEBPACK_IMPORTED_MODULE_0__[/* Processor */ "b"]
};

/***/ }),

/***/ "./node_modules/@default-js/defaultjs-common-utils/src/ObjectUtils.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-common-utils/src/ObjectUtils.js ***!
  \****************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

/**
 * append a propery value to an object. If propery exists its would be converted to an array
 * 
 *  @param aKey:string name of property
 *  @param aData:any property value
 *  @param aObject:object the object to append the property
 *  
 *  @return returns the changed object
 */
const append = function(aKey, aData, aObject){
	if(typeof aData !== "undefined"){		
		let key = aKey.toLowerCase().trim();	
		if(typeof aObject[key] === "undefined")
			aObject[key] = aData;
		else{		
			let data = aObject[key];
			if(data instanceof Array)
				data.push(aData);
			else
				aObject[key] = [aObject[key], aData];
		}
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
const isPojo = function(aObject){
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
const merge = function(aTarget){	
	for(let i = 1; i < arguments.length; i++){
		const source = arguments[i];
		Object.getOwnPropertyNames(source).forEach(function(aKey){
			if(isPojo(aTarget[aKey]))
				merge(aTarget[aKey], source[aKey]);
			else
				aTarget[aKey] = source[aKey];
		});
	}
	
	return aTarget;
}

/* harmony default export */ __webpack_exports__["a"] = ({
	isPojo : isPojo,
	append: append,
	merge : merge
});

/***/ }),

/***/ "./node_modules/@default-js/defaultjs-expression-language/index.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-expression-language/index.js ***!
  \*************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _src__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src */ "./node_modules/@default-js/defaultjs-expression-language/src/index.js");


/* harmony default export */ __webpack_exports__["a"] = (_src__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]);

/***/ }),

/***/ "./node_modules/@default-js/defaultjs-expression-language/src/ExpressionResolver.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-expression-language/src/ExpressionResolver.js ***!
  \******************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const EXPRESSION = /\$\{([^\{\}]+)\}/;

const execute = function(aStatement, aContext, aDefault, aTimeout) {
		if(typeof aTimeout === "number" && aTimeout > 0)
			return new Promise(function(resolve){
				setTimeout(function(){
					resolve(execute(aStatement, aContext, aDefault));
				});
			});
		
	    if (typeof aStatement !== "string")
		    return Promise.resolve(aStatement);
	    
	    let statement = aStatement.trim();			    
	    if(statement.length == 0)
	    	return Promise.resolve(aDefault);
	    try{
		    const expression = new Function("aContext", "try{" +
		    		"	with(aContext || window || global || self || this){" +
		    		"		return Promise.resolve(" + statement + ");" +
		    		"	}" +
		    		"}catch(e){" +
		    		"	throw e;" +
		    		"}");
		    return expression(aContext)
		    .then(function(aResult){
		    	if(typeof aResult === "undefined")
		    		return Promise.resolve(aDefault);
		    	
		    	return Promise.resolve(aResult);
		    })["catch"](function(aError){
				return Promise.reject(aError);
		    })
		}catch(e){
			return Promise.reject(e);
		}
};

const resolve = function(aExpression, aDataContext, aDefault, aTimeout) {
	const match = EXPRESSION.exec(aExpression);
	if (match)
		return execute(match[1], aDataContext, aDefault, aTimeout);
	
	return execute(aExpression, aDataContext, aDefault, aTimeout);
};

const resolveText = function(aText, aContext, aDefault, aTimeout) {
	if(typeof aTimeout === "number" && aTimeout > 0)
		return new Promise(function(resolve){
			setTimeout(function(){
				resolve(resolveText(aText, aContext, aDefault));
			});
		});
	
	
	const match = EXPRESSION.exec(aText);
	if(match != null)
		return execute(match[1], aContext, aDefault)
		.then(function(aResult){
			return resolveText(aText.split(match[0]).join(aResult), aContext, aDefault);
		});
	
	return Promise.resolve(aText);
};

const ExpressionResolver = {
		resolve : resolve,
		resolveText : resolveText
};
/* harmony default export */ __webpack_exports__["a"] = (ExpressionResolver);

/***/ }),

/***/ "./node_modules/@default-js/defaultjs-expression-language/src/index.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-expression-language/src/index.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _ExpressionResolver__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ExpressionResolver */ "./node_modules/@default-js/defaultjs-expression-language/src/ExpressionResolver.js");


/* harmony default export */ __webpack_exports__["a"] = ({
	ExpressionResolver:_ExpressionResolver__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]
});

/***/ }),

/***/ "./node_modules/@default-js/defaultjs-extdom/index.js":
/*!************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-extdom/index.js ***!
  \************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _src_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/index */ "./node_modules/@default-js/defaultjs-extdom/src/index.js");


/***/ }),

/***/ "./node_modules/@default-js/defaultjs-extdom/src/Global.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-extdom/src/Global.js ***!
  \*****************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _utils_Utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/Utils */ "./node_modules/@default-js/defaultjs-extdom/src/utils/Utils.js");


_utils_Utils__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].global.defaultjs = _utils_Utils__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].global.defaultjs || {};
_utils_Utils__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].global.defaultjs.extdom = _utils_Utils__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].global.defaultjs.extdom || {
	VERSION : "1.0.0-beta.1",
	utils : {
		Utils: _utils_Utils__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]
	}
};

const parser = new DOMParser();

_utils_Utils__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].global.find = function() {
	return document.find.apply(document, arguments);
};

_utils_Utils__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].global.ready = function() {
	return document.ready.apply(document, arguments);
};

_utils_Utils__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].global.create = function(aContent, aContentType) {
	if (typeof arguments[0] !== "string")
		throw new Error("The first argument must be a string!");

	let parsed = parser.parseFromString(arguments[0].trim(), arguments[1] || "text/html");
	let nodes = parsed.body.childNodes;
	let frag = document.createDocumentFragment();
	frag.append(nodes);
	return frag.childNodes;
};

/***/ }),

/***/ "./node_modules/@default-js/defaultjs-extdom/src/dom/Document.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-extdom/src/dom/Document.js ***!
  \***********************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _utils_ExtendPrototype__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/ExtendPrototype */ "./node_modules/@default-js/defaultjs-extdom/src/utils/ExtendPrototype.js");
/* harmony import */ var _extentions_QuerySupport__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./extentions/QuerySupport */ "./node_modules/@default-js/defaultjs-extdom/src/dom/extentions/QuerySupport.js");
/* harmony import */ var _extentions_ReadyEventSupport__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./extentions/ReadyEventSupport */ "./node_modules/@default-js/defaultjs-extdom/src/dom/extentions/ReadyEventSupport.js");




Object(_utils_ExtendPrototype__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(Document, _extentions_QuerySupport__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], _extentions_ReadyEventSupport__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"]);

document.addEventListener("DOMContentLoaded", function(){
	document.trigger("ready");
});





/***/ }),

/***/ "./node_modules/@default-js/defaultjs-extdom/src/dom/DocumentFragment.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-extdom/src/dom/DocumentFragment.js ***!
  \*******************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _utils_ExtendPrototype__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/ExtendPrototype */ "./node_modules/@default-js/defaultjs-extdom/src/utils/ExtendPrototype.js");
/* harmony import */ var _extentions_QuerySupport__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./extentions/QuerySupport */ "./node_modules/@default-js/defaultjs-extdom/src/dom/extentions/QuerySupport.js");
/* harmony import */ var _extentions_ManipulationSupport__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./extentions/ManipulationSupport */ "./node_modules/@default-js/defaultjs-extdom/src/dom/extentions/ManipulationSupport.js");




Object(_utils_ExtendPrototype__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(DocumentFragment, _extentions_QuerySupport__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], _extentions_ManipulationSupport__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"]);






/***/ }),

/***/ "./node_modules/@default-js/defaultjs-extdom/src/dom/Element.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-extdom/src/dom/Element.js ***!
  \**********************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _utils_ExtendPrototype__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/ExtendPrototype */ "./node_modules/@default-js/defaultjs-extdom/src/utils/ExtendPrototype.js");
/* harmony import */ var _extentions_QuerySupport__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./extentions/QuerySupport */ "./node_modules/@default-js/defaultjs-extdom/src/dom/extentions/QuerySupport.js");
/* harmony import */ var _extentions_AttributeSupport__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./extentions/AttributeSupport */ "./node_modules/@default-js/defaultjs-extdom/src/dom/extentions/AttributeSupport.js");
/* harmony import */ var _extentions_ManipulationSupport__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./extentions/ManipulationSupport */ "./node_modules/@default-js/defaultjs-extdom/src/dom/extentions/ManipulationSupport.js");





Object(_utils_ExtendPrototype__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(Element,_extentions_QuerySupport__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], _extentions_AttributeSupport__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], _extentions_ManipulationSupport__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"]);
//
//Element.prototype.val = function() {
//	let result = new Map();		
//	let inputs = this.find("input", "select", "textarea");
//	if(inputs){	
//		inputs.forEach(function(node){
//			let value = node.val();
//			if(typeof value !== "undefined" && value != null)
//				result.set((node.name || node.id || node.selector()), node.val());
//		});	
//		return result;
//	}
//};

/***/ }),

/***/ "./node_modules/@default-js/defaultjs-extdom/src/dom/EventTarget.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-extdom/src/dom/EventTarget.js ***!
  \**************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _utils_ExtendPrototype__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/ExtendPrototype */ "./node_modules/@default-js/defaultjs-extdom/src/utils/ExtendPrototype.js");
/* harmony import */ var _extentions_EventSupport__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./extentions/EventSupport */ "./node_modules/@default-js/defaultjs-extdom/src/dom/extentions/EventSupport.js");



Object(_utils_ExtendPrototype__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(EventTarget, _extentions_EventSupport__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"]);

/***/ }),

/***/ "./node_modules/@default-js/defaultjs-extdom/src/dom/HTMLElement.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-extdom/src/dom/HTMLElement.js ***!
  \**************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _utils_ExtendPrototype__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/ExtendPrototype */ "./node_modules/@default-js/defaultjs-extdom/src/utils/ExtendPrototype.js");
/* harmony import */ var _extentions_HtmlClassSupport__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./extentions/HtmlClassSupport */ "./node_modules/@default-js/defaultjs-extdom/src/dom/extentions/HtmlClassSupport.js");
/* harmony import */ var _extentions_ShowHideSupport__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./extentions/ShowHideSupport */ "./node_modules/@default-js/defaultjs-extdom/src/dom/extentions/ShowHideSupport.js");





Object(_utils_ExtendPrototype__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(HTMLElement, _extentions_HtmlClassSupport__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], _extentions_ShowHideSupport__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"]);

/***/ }),

/***/ "./node_modules/@default-js/defaultjs-extdom/src/dom/HTMLInputElement.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-extdom/src/dom/HTMLInputElement.js ***!
  \*******************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _utils_ExtendPrototype__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/ExtendPrototype */ "./node_modules/@default-js/defaultjs-extdom/src/utils/ExtendPrototype.js");
/* harmony import */ var _extentions_ValueSupport__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./extentions/ValueSupport */ "./node_modules/@default-js/defaultjs-extdom/src/dom/extentions/ValueSupport.js");




Object(_utils_ExtendPrototype__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(HTMLInputElement,_extentions_ValueSupport__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"]);

/***/ }),

/***/ "./node_modules/@default-js/defaultjs-extdom/src/dom/HTMLSelectElement.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-extdom/src/dom/HTMLSelectElement.js ***!
  \********************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _utils_ExtendPrototype__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/ExtendPrototype */ "./node_modules/@default-js/defaultjs-extdom/src/utils/ExtendPrototype.js");
/* harmony import */ var _extentions_ValueSupport__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./extentions/ValueSupport */ "./node_modules/@default-js/defaultjs-extdom/src/dom/extentions/ValueSupport.js");




Object(_utils_ExtendPrototype__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(HTMLSelectElement,_extentions_ValueSupport__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"]);

/***/ }),

/***/ "./node_modules/@default-js/defaultjs-extdom/src/dom/HTMLTextAreaElement.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-extdom/src/dom/HTMLTextAreaElement.js ***!
  \**********************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _utils_ExtendPrototype__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/ExtendPrototype */ "./node_modules/@default-js/defaultjs-extdom/src/utils/ExtendPrototype.js");
/* harmony import */ var _utils_Extender__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/Extender */ "./node_modules/@default-js/defaultjs-extdom/src/utils/Extender.js");




Object(_utils_ExtendPrototype__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(HTMLTextAreaElement,Object(_utils_Extender__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])("ValueSupport", function(Prototype) {	
	Prototype.val = function() {
		if(arguments.length == 0)
			return this.value;
		else
			this.value = arguments[0]
			
		return this;
	};	
}));

/***/ }),

/***/ "./node_modules/@default-js/defaultjs-extdom/src/dom/Node.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-extdom/src/dom/Node.js ***!
  \*******************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _utils_ExtendPrototype__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/ExtendPrototype */ "./node_modules/@default-js/defaultjs-extdom/src/utils/ExtendPrototype.js");
/* harmony import */ var _extentions_DataSupport__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./extentions/DataSupport */ "./node_modules/@default-js/defaultjs-extdom/src/dom/extentions/DataSupport.js");
/* harmony import */ var _extentions_ManipulationSupport__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./extentions/ManipulationSupport */ "./node_modules/@default-js/defaultjs-extdom/src/dom/extentions/ManipulationSupport.js");




Object(_utils_ExtendPrototype__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(Node,_extentions_DataSupport__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"],_extentions_ManipulationSupport__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"]);

/***/ }),

/***/ "./node_modules/@default-js/defaultjs-extdom/src/dom/NodeList.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-extdom/src/dom/NodeList.js ***!
  \***********************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _utils_ExtendPrototype__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/ExtendPrototype */ "./node_modules/@default-js/defaultjs-extdom/src/utils/ExtendPrototype.js");
/* harmony import */ var _utils_DelegaterBuilder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/DelegaterBuilder */ "./node_modules/@default-js/defaultjs-extdom/src/utils/DelegaterBuilder.js");
/* harmony import */ var _extentions_ListSupport__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./extentions/ListSupport */ "./node_modules/@default-js/defaultjs-extdom/src/dom/extentions/ListSupport.js");




Object(_utils_ExtendPrototype__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(NodeList, _extentions_ListSupport__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"]);

NodeList.prototype.applyTo = function(){
	let args = Array.from(arguments);
	let calling = args.shift();
	let isFunction = typeof calling === "function";
	let results = [];
	for(let i = 0; i < this.length; i++){
		let node = this[i];
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
			let result = new Map();
			this.forEach(function(node){
				if(typeof node.val === "function"){
					let value = node.val();
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
	let args = Array.from(arguments);
	let data = {};
	let counter = 0;
	
	while(args.length > 0){
		let arg = args.shift();
		if(typeof arg !== "undefined" && arg != null){
			if(arg instanceof Node)
				data[counter++] = {value: arg, enumerable: true};
			else if(arg instanceof NodeList || Array.isArray(arg)){
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


Object(_utils_DelegaterBuilder__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(function(aFunctionName, theArguments){
	let results = [];	
	this.forEach(function(node){
		if(node && typeof node[aFunctionName] === "function"){
			let result = node[aFunctionName].apply(node, theArguments);
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
		return NodeList.from.apply(null, results);
	else
		return results;
},NodeList.prototype, Node.prototype, HTMLElement.prototype, HTMLInputElement.prototype, Element.prototype, EventTarget.prototype);


/***/ }),

/***/ "./node_modules/@default-js/defaultjs-extdom/src/dom/extentions/AttributeSupport.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-extdom/src/dom/extentions/AttributeSupport.js ***!
  \******************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _utils_Extender__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/Extender */ "./node_modules/@default-js/defaultjs-extdom/src/utils/Extender.js");


const support = Object(_utils_Extender__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])("AttributeSupport", function(Prototype) {
	Prototype.attr = function() {
		if (arguments.length == 0)
			return this.hasAttributes() ? (function() {
				let result = {};
				this.getAttributeNames().forEach((function(result, name) {
					result[name] = this.getAttribute(name);
				}).bind(this, result));
				return result;
			}).call(this) : undefined;
		else if (arguments.length == 1)
			return this.getAttribute(arguments[0]);
		else if (typeof arguments[1] === "undefined" || arguments[1] == null)
			this.removeAttribute(arguments[0]);
		else
			this.setAttribute(arguments[0], arguments[1]);
		
		return this;
	};
});
/* harmony default export */ __webpack_exports__["a"] = (support);

/***/ }),

/***/ "./node_modules/@default-js/defaultjs-extdom/src/dom/extentions/DataSupport.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-extdom/src/dom/extentions/DataSupport.js ***!
  \*************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _utils_Extender__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/Extender */ "./node_modules/@default-js/defaultjs-extdom/src/utils/Extender.js");

const support = Object(_utils_Extender__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])("DataSupport", function(Prototype) {
	Prototype.data = function() {
		if (typeof this.__data__ === "undefined") {
			this.__data__ = {};
			if(typeof this.dataset !== "undefined")
				for (name in this.dataset)
					this.__data__[name] = this.dataset[name];
		}

		if (arguments.length == 0)
			return this.__data__;
		else if (arguments.length == 1)
			return this.__data__[arguments[0]] ;
		else if (typeof arguments[1] === "undefined" || arguments[1] == null)
			delete this.__data__[arguments[0]];
		else
			this.__data__[arguments[0]] = arguments[1];
		
		return this;
	};
});
/* harmony default export */ __webpack_exports__["a"] = (support);

/***/ }),

/***/ "./node_modules/@default-js/defaultjs-extdom/src/dom/extentions/EventSupport.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-extdom/src/dom/extentions/EventSupport.js ***!
  \**************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _utils_Extender__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/Extender */ "./node_modules/@default-js/defaultjs-extdom/src/utils/Extender.js");


const support = Object(_utils_Extender__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])("EventSupport", function(Prototype) {
	const WrappedEventHandler = function(aConfig, aCallback ,aEvent){
		if(typeof aConfig.filter !== "undefined" && !aEvent.target.is(aConfig.filter))		
			return;
		
		let args = [aEvent];
		if(typeof aConfig.data !== "undefined")
			args = args.concat(aConfig.data);
		
		let result = aCallback.apply(aCallback, args);
		if(aConfig.singleCall)
			this.removeEventListener(aCallback);
		
		return result;		
	};
	
	
	const addEventListener = Prototype.addEventListener;
	Prototype.addEventListener = function() {
		if (arguments.length < 2)
			throw new Error("Too less arguments!");

		this.on(arguments[0], arguments[1]);
	};	
	
	Prototype.on = function() {
		if (arguments.length < 2)
			throw new Error("Too less arguments!");
		
		if (typeof this.__callbackMap === "undefined")
			this.__callbackMap = {};

		let args = Array.from(arguments);
		let events = args.shift().split(/(\s+)|(\s*,\s*)/);
		let handlerConfig = {
			filter : (typeof args[0] === "string" ? args.shift().split(/\s*,\s*/) : undefined),
			data : (typeof args[0] !== "function" ? args.shift() : undefined)
		};
	    let callback = args.shift();
	    
	    handlerConfig.singleCall = (typeof args[0] !== "boolean" ? args.shift() : false);

		let eventMap = {};
		events.forEach((function(result, config, callback, event){
			let wrappedEventHandler = WrappedEventHandler.bind(this, config, callback);
			eventMap[event] = wrappedEventHandler;			
			addEventListener.call(this, event, wrappedEventHandler, true);
			
		}).bind(this, eventMap, handlerConfig, callback));
		
		this.__callbackMap[callback] = eventMap;
		
		return this;
	};	
	
	const removeEventListener = Prototype.removeEventListener;
	Prototype.removeEventListener = Prototype.removeOn = function() {
		if (arguments.length != 1 || typeof this.__callbackMap === "undefined")
			return removeEventListener.apply(this, arguments);
			
		let events = undefined;
		let callback = undefined;
		if(typeof arguments[0] === "string")
			events = arguments[0].split(/(\s+)|(\s*,\s*)/);
		else if(typeof arguments[0] === "function")
			callback = arguments[0];
		else
			throw new Error("Wrong argument! -> call function([event|handler])");
		
		let removalHandler = [];
		if(typeof events === "undefined"){
			let eventMap = this.__callbackMap[callback];
			if(typeof eventMap !== "undefined"){
			    Object.getOwnPropertyNames(eventMap).forEach((function(result, eventMap, event){
					let handler = eventMap[event];
					if(typeof handler !== "undefined")
						result.push(handler);					
				}).bind(this, removalHandler, eventMap));
				
				delete this.__callbackMap[callback];
			}
		}
		else {
			events.forEach((function(result, event){
			    Object.getOwnPropertyNames(this.__callbackMap).forEach((function(aEvent, Callback){
					let eventMap = this.__callbackMap[Callback];
					delete eventMap[aEvent];
					if(Object.getOwnPropertyNames(eventMap).length == 0)
						delete this.__callbackMap[Callback];
				}).bind(this, event));								
			}).bind(this));
		}
		
		return this;
	};

	
	Prototype.trigger = function(){
		let args = Array.from(arguments);		
		let event = args.shift();		
		let data = args.length > 1 ? args.shift() : undefined;
		let delegatedEvent = data instanceof Event ? data : undefined;
		
		
		if(typeof this["on" + event] === "function"){
			event = document.createEvent("Event");
			event.initEvent(event, true, true);
		}
		else
			event = new CustomEvent(event,  { bubbles: true, cancelable: true, detail: data });
		
		event.delegatedEvent = delegatedEvent;		
		this.dispatchEvent(event);
		return this;
	};
});
/* harmony default export */ __webpack_exports__["a"] = (support);


/***/ }),

/***/ "./node_modules/@default-js/defaultjs-extdom/src/dom/extentions/HtmlClassSupport.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-extdom/src/dom/extentions/HtmlClassSupport.js ***!
  \******************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _utils_Extender__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/Extender */ "./node_modules/@default-js/defaultjs-extdom/src/utils/Extender.js");


const support = Object(_utils_Extender__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])("HtmlClassSupport", function(Prototype) {	
	Prototype.addClass = function() {
		if(arguments.length == 1)
			arguments[0].split(/\s+/).forEach((function(clazz){
				this.classList.add(clazz);
			}).bind(this));
		else if(arguments.length > 1)
			Array.prototype.forEach.call(arguments,(function(clazz){
				this.addClass(clazz);
			}).bind(this));
		
		return this;
	};
	
	Prototype.removeClass = function() {
		if(arguments.length == 1)
			arguments[0].split(/\s+/).forEach((function(clazz){
				this.classList.remove(clazz);
			}).bind(this));
		else if(arguments.length > 1)
			Array.prototype.forEach.call(arguments,(function(clazz){
				this.removeClass(clazz);
			}).bind(this));
		
		return this;		
	};
	
	Prototype.toggleClass = function() {
		if(arguments.length == 1)
			arguments[0].split(/\s+/).forEach((function(clazz){
				this.classList.toggle(clazz);
			}).bind(this));
		else if(arguments.length > 1)
			Array.prototype.forEach.call(arguments,(function(clazz){
				this.toogleClass(clazz);
			}).bind(this));
		
		return this;
	};
});
/* harmony default export */ __webpack_exports__["a"] = (support);

/***/ }),

/***/ "./node_modules/@default-js/defaultjs-extdom/src/dom/extentions/ListSupport.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-extdom/src/dom/extentions/ListSupport.js ***!
  \*************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _utils_Extender__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/Extender */ "./node_modules/@default-js/defaultjs-extdom/src/utils/Extender.js");


const support = Object(_utils_Extender__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])("ListSupport", function(Prototype) {		
	Prototype.indexOf = function() {
		for(let i = 0; i < this.length; i++)
			if(this[i] == arguments[0])
				return i;
		
		return -1;
	};

	Prototype.forEach = function(){
		return Array.prototype.forEach.apply(Array.from(this), arguments);
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
/* harmony default export */ __webpack_exports__["a"] = (support);

/***/ }),

/***/ "./node_modules/@default-js/defaultjs-extdom/src/dom/extentions/ManipulationSupport.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-extdom/src/dom/extentions/ManipulationSupport.js ***!
  \*********************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _utils_Extender__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/Extender */ "./node_modules/@default-js/defaultjs-extdom/src/utils/Extender.js");
/* harmony import */ var _utils_Utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/Utils */ "./node_modules/@default-js/defaultjs-extdom/src/utils/Utils.js");



const support = Object(_utils_Extender__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])("ManipulationSupport", function(Prototype) {	
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
			Array.from(arguments).forEach((function(content){
				if(typeof content === "string")
					this.innerHTML = content;
				else if(content instanceof Node || content instanceof NodeList){
					this.empty();
					this.append(content);
				}
			}).bind(this));		
			
		return this;
	};
	
	Prototype.append = function(){
		let append = Prototype.appendChild.bind(this);
		for(let i = 0; i < arguments.length; i++){
			let arg = arguments[i];
			if(arg instanceof Node)
				this.appendChild(arg);
			else if(typeof arg === "string")
				create(arg).forEach(append);
			else if(Array.isArray(arg) || arg instanceof NodeList)
				arg.forEach(append);
		}
	};
	
	const prepend = function(aFirstElement, aElement){
		this.insertBefore(aElement, aFirstElement);
	};
	Prototype.prepend = function(){
		let first = this.childNodes.first();
		let insert = prepend.bind(this, first);
		for(let i = 0; i < arguments.length; i++){
			let arg = arguments[i];
			if(Array.isArray(arg) || arg instanceof NodeList)
				arg.forEach(insert);
			else if(arg instanceof Node)
				this.insertBefore(arg, first);
			else if(typeof arg === "string")
				arg.forEach(insert);
		}
	};
	
	Prototype.replace = function(){
		if(arguments.length < 1)
			throw new Error("Insufficient arguments! One or two nodes required!");
		
		const parent = arguments.length == 1 ? this.parentNode : this;
		const oldNode = arguments.length == 1 ? this : arguments[0];
		const newNode = arguments.length == 1 ? arguments[0] : arguments[1];
		
		if(newNode instanceof Array || newNode instanceof NodeList){
			newNode.forEach(function(aItem){
				parent.insertBefore(aItem, oldNode);
			});
			oldNode.remove();
		}
		else
			parent.replaceChild(oldNode, newNode);
	}
});
/* harmony default export */ __webpack_exports__["a"] = (support);

/***/ }),

/***/ "./node_modules/@default-js/defaultjs-extdom/src/dom/extentions/QuerySupport.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-extdom/src/dom/extentions/QuerySupport.js ***!
  \**************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
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


const support = Object(_utils_Extender__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])("QuerySupport",function(Prototype) {	
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
		if(this instanceof Document)
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
/* harmony default export */ __webpack_exports__["a"] = (support);



/***/ }),

/***/ "./node_modules/@default-js/defaultjs-extdom/src/dom/extentions/ReadyEventSupport.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-extdom/src/dom/extentions/ReadyEventSupport.js ***!
  \*******************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _utils_Extender__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/Extender */ "./node_modules/@default-js/defaultjs-extdom/src/utils/Extender.js");


const support = Object(_utils_Extender__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])("ReadyEventSupport", function(Prototype) {
	Prototype.ready = function(aFunction, once){	
		this.on("ready", aFunction, once);
		if(document.readyState == "complete")			
			this.trigger("ready");
		
		return this;
	};
	
});
/* harmony default export */ __webpack_exports__["a"] = (support);

/***/ }),

/***/ "./node_modules/@default-js/defaultjs-extdom/src/dom/extentions/ShowHideSupport.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-extdom/src/dom/extentions/ShowHideSupport.js ***!
  \*****************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _utils_Extender__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/Extender */ "./node_modules/@default-js/defaultjs-extdom/src/utils/Extender.js");


const support = Object(_utils_Extender__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])("ShowHideSupport", function(Prototype) {
	Prototype.show = function(){
		if(this.__ishide){
			this.style.display = this.__display || "";
			this.__ishide = false;
		}
		return this;
	};
	
	Prototype.hide = function(){
		if(!this.__ishide){
			this.__display = this.style.display;
			this.style.display = "none";
			this.__ishide = true;
		}	
		
		return this;
	};
	
	Prototype.toggleShow = function(){
		if(this.__ishide)
			return this.show();
		else
			return this.hide();
	};
	
});
/* harmony default export */ __webpack_exports__["a"] = (support);

/***/ }),

/***/ "./node_modules/@default-js/defaultjs-extdom/src/dom/extentions/ValueSupport.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-extdom/src/dom/extentions/ValueSupport.js ***!
  \**************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _utils_Extender__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/Extender */ "./node_modules/@default-js/defaultjs-extdom/src/utils/Extender.js");


const InputTypes =[
	{
		selector : "select",
		get : function(){
			let result = [];
			this.find("option").forEach(function(option){
				if(option.selected)
					result.push(option.value);
			});
			
			return result;
		},
		set : function(){				
			let values = [];
			let args = Array.from(arguments);
			let arg = args.shift();
			while(arg){
				if(Array.isArray(arg))
					values = values.concat(arg);
				else
					values.push(arg);
				
				arg = args.shift();
			}
			this.value = values;
			this.find("option").forEach(function(option){
				option.selected = values.indexOf(option.value) >= 0;
			});
			
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


const support = Object(_utils_Extender__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])("ValueSupport", function(Prototype) {	
	Prototype.val = function() {
		let type = getInputType(this);
		if(arguments.length == 0)
			return type.get.apply(this, arguments);
		else
			type.set.apply(this, arguments);
			
		return this;
	};	
});
/* harmony default export */ __webpack_exports__["a"] = (support);

/***/ }),

/***/ "./node_modules/@default-js/defaultjs-extdom/src/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-extdom/src/index.js ***!
  \****************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
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
/* harmony import */ var _Global__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Global */ "./node_modules/@default-js/defaultjs-extdom/src/Global.js");













/***/ }),

/***/ "./node_modules/@default-js/defaultjs-extdom/src/utils/DelegaterBuilder.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-extdom/src/utils/DelegaterBuilder.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const DelegaterBuilder = function() {
	let args = Array.from(arguments);
	let callback = args.shift();
	let source = args.shift();
	args.forEach((function(aSource, aCallback, aTarget){
		Object.getOwnPropertyNames(aTarget).forEach(
			(function(aSource, aTarget,aCallback,  aName) {
				let prop = Object.getOwnPropertyDescriptor(aTarget, aName);
				if (typeof aSource[aName] === "undefined" && typeof prop.value === "function")
					aSource[aName] = function(){return aCallback.call(this, aName, arguments);};										
			}).bind(null, aSource, aTarget, aCallback));
	}).bind(null, source, callback));
	
};
/* harmony default export */ __webpack_exports__["a"] = (DelegaterBuilder);

/***/ }),

/***/ "./node_modules/@default-js/defaultjs-extdom/src/utils/ExtendPrototype.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-extdom/src/utils/ExtendPrototype.js ***!
  \********************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const extendPrototype = function(){
	let args = 	Array.from(arguments);
	let type = args.shift();	
	while(args.length > 0){
		let extender = args.shift();
		extender(type);
	}
};

/* harmony default export */ __webpack_exports__["a"] = (extendPrototype);

/***/ }),

/***/ "./node_modules/@default-js/defaultjs-extdom/src/utils/Extender.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-extdom/src/utils/Extender.js ***!
  \*************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Utils */ "./node_modules/@default-js/defaultjs-extdom/src/utils/Utils.js");


const EXTENSIONS_MAP = _Utils__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].globalVar("__DOM_API_EXTENSION_MAP__", {});
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

/* harmony default export */ __webpack_exports__["a"] = (Extender);

/***/ }),

/***/ "./node_modules/@default-js/defaultjs-extdom/src/utils/Utils.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-extdom/src/utils/Utils.js ***!
  \**********************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {const Utils = {
	global : (window || global || self || undefined || {}),
	globalVar : function(aName, aInitValue){
		if(arguments.length === 2 && typeof Utils.global[aName] === "undefined")
			Utils.global[aName] = aInitValue;
		
		return Utils.global[aName];		
	}
};

/* harmony default export */ __webpack_exports__["a"] = (Utils);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/*! all exports used */
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

/***/ "./src/Constants.js":
/*!**************************!*\
  !*** ./src/Constants.js ***!
  \**************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
	EVENTS : {
		onExecute : "jstl-on-execute",
		onSuccess : "jstl-on-success",
		onFail : "jstl-on-fail",
		onReady : "jstl-on-ready"
	},
	PHASE : {
		INIT : 1000,
		CONDITION : 2000,
		CONTEXT : 3000,
		MANIPULATION : 4000,
		CONTENT : 5000,
		CLEANING : 6000,
		CHILDREN : 7000,
		BINDING : 8000,
		FINISH : 9000
	}
});	


/***/ }),

/***/ "./src/Processor.js":
/*!**************************!*\
  !*** ./src/Processor.js ***!
  \**************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _Constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Constants */ "./src/Constants.js");
/* harmony import */ var _TaskChain__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TaskChain */ "./src/TaskChain.js");



const taskchain = new _TaskChain__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"]();

const executeElement = function(aElement, aData, aRoot){
	console.log("execute element", aElement.selector(), "- root", aRoot ? aRoot.selector() : undefined);
	aElement.trigger(_Constants__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].EVENTS.onExecute);
	
	return taskchain.execute(aElement, aData, aRoot)
		.then(function(){
			if(typeof aRoot === "undefined")
				aElement.trigger(_Constants__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].EVENTS.onReady);
			
			return {element : aElement, data : aData, root : aRoot};
		})["catch"](function(aError){
			if(typeof aRoot === "undefined")
				aElement.trigger(_Constants__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].EVENTS.onFail);
			
			throw aError;
		});
};

const executeElements = function(theElements, aData, aRoot){
	return executeElement(theElements.shift(), aData, aRoot)
		.then(function(aContext){
			if(theElements.length != 0)
				return executeElements(theElements, aContext.data, aContext.root);
			else
				return aContext;
		});
};

const Processor = {
	/**
	* @param aTask : {
	* 		title : string,
	* 		accept(aElement) : Promise(Boolean)
	* 		execute(aContext) : Promise(new Context)
	* }
	* @param aPhase : Contants.PHASE
	*/	
	addTask : function(aTask, aPhase){
		taskchain.add(aTask, aPhase)
	},
	getTaskchain : function(){
		return taskchain;
	},
	execute : function(aElement, aData, aRoot){
		//@TODO load template data - is not the same as jstl-include
		if(typeof aElement === "undefined" || aElement == null)
			return Promise.reject(new Error("Parameter \"aElement\" is undefined!"));
		else if(aElement instanceof NodeList){			
			return executeElements(Array.from(aElement), aData, aRoot)
				.then(function(){
					return {element : aElement, data : aData, root : aRoot};
				});
		} else if(aElement instanceof Array){
			return executeElements(aElement, aData, aRoot)
				.then(function(){
					return {element : aElement, data : aData, root : aRoot};
				});
		} else if(aElement instanceof Node)
			return executeElement(aElement, aData, aRoot)
		else
			 return Promise.reject(new Error("Type of \"aElement\" - \"" + typeof aElement + "\" is not supported!"));
	}
};
/* harmony default export */ __webpack_exports__["a"] = (Processor);

/***/ }),

/***/ "./src/TaskChain.js":
/*!**************************!*\
  !*** ./src/TaskChain.js ***!
  \**************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _Constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Constants */ "./src/Constants.js");


const insert = function(aEntry, aChain){	
	if(aChain == null)
		return aEntry;
	
	let parent = null;
	let current = aChain;
	while(current != null){
		if(current.phase > aEntry.phase){
			aEntry.next = current
			if(parent == null)						
				return aEntry;
			else{
				parent.next = aEntry;
				return aChain;
			}
		}			
		parent = current;
		current = current.next;
	}
	
	parent.next = aEntry;	
	return aChain;
};

const executeChain = function(aContext, aChain){
	console.log("execute chain", aChain.task.id, "context:" + aContext);
	return Promise.resolve(aChain.task.accept(aContext))
	.then(function(isAccepted){
		if(!isAccepted)
			return aChain.next == null ? aContext : executeChain(aContext, aChain.next);
		
		return Promise.resolve(aChain.task.execute(aContext))
			.then(function(aContext){
				if(typeof aContext === "undefined")
					debugger;
				if(aContext.exit || aChain.next == null)
					return aContext;
				
				return executeChain(aContext, aChain.next);
			});
	});	
};
j
const TaskChain = function(){
	const tasks = {};	
	return {
		chain : null,
		/**
		 * @param aTask : {
		 * 		title : string,
		 * 		accept(aElement) : Promise(Boolean)
		 * 		execute(aContext) : Promise(new Context)
		 * }
		 * @param aPhase : Contants.PHASE
		 */	
		add : function(aTask, aPhase){
			if(typeof tasks[aTask.id] === "undefined")		
				this.chain = insert({
					task : aTask,
					phase : (typeof aPhase !== "undefined" ? aPhase : _Constants__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].PHASE.FINISH),
					next : null
				}, this.chain);			
		},
		
		/**
		 * @param aContext: {
		 *		element,
		 *		data,
		 *		root,
		 *		processor,
		 *	}
		 */
		execute : function(aElement, aData, aRoot){
			return executeChain({
				element : aElement,
				data : aData,
				root : aRoot || aElement,
				exit : false
			}, this.chain);
		}
	};
};

/* harmony default export */ __webpack_exports__["a"] = (TaskChain);

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: default, Constants, Processor */
/*! exports used: Constants, Processor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _default_js_defaultjs_extdom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @default-js/defaultjs-extdom */ "./node_modules/@default-js/defaultjs-extdom/index.js");
/* harmony import */ var _Constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Constants */ "./src/Constants.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _Constants__WEBPACK_IMPORTED_MODULE_1__["a"]; });

/* harmony import */ var _Processor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Processor */ "./src/Processor.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "b", function() { return _Processor__WEBPACK_IMPORTED_MODULE_2__["a"]; });

/* harmony import */ var _tasks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tasks */ "./src/tasks/index.js");





const pack = {
	Constants : _Constants__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"],
	Processor : _Processor__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"]
};

/* unused harmony default export */ var _unused_webpack_default_export = (pack);


/***/ }),

/***/ "./src/tasks/AddAttribute.js":
/*!***********************************!*\
  !*** ./src/tasks/AddAttribute.js ***!
  \***********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _Constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Constants */ "./src/Constants.js");
/* harmony import */ var _Processor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Processor */ "./src/Processor.js");



const Task = {
	id : "add-attribute",
	accept : function(aContext){
		return aContext.element.is("[jstl-add-attribute]");
	},
	execute : function(aContext){
		return Promise.resolve(aContext);
	}
};

_Processor__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].addTask(Task, _Constants__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].PHASE.MANIPULATION + 200);

/***/ }),

/***/ "./src/tasks/Async.js":
/*!****************************!*\
  !*** ./src/tasks/Async.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _Constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Constants */ "./src/Constants.js");
/* harmony import */ var _Processor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Processor */ "./src/Processor.js");



const Task = {
	id : "async",
	accept : function(aContext){
		return false;
	},
	execute : function(aContext){
		return Promise.resolve(aContext);
	}
};

_Processor__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].addTask(Task, _Constants__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].PHASE.INIT);

/***/ }),

/***/ "./src/tasks/Attribute.js":
/*!********************************!*\
  !*** ./src/tasks/Attribute.js ***!
  \********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _Constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Constants */ "./src/Constants.js");
/* harmony import */ var _Processor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Processor */ "./src/Processor.js");
/* harmony import */ var _default_js_defaultjs_expression_language__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @default-js/defaultjs-expression-language */ "./node_modules/@default-js/defaultjs-expression-language/index.js");




const Resolver = _default_js_defaultjs_expression_language__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].ExpressionResolver;

const execute = function(aKey, aValue, aContext){
	return Resolver.resolveText(aValue, aContext.data)
	.then(function(aResult){
		if(aValue != aResult)
			aContext.element.attr(aKey, aResult);
	});
};

const Task = {
	id : "attribute",
	accept : function(aContext){
		const attributes = aContext.element.attr();
		return typeof attributes !== "undefined" && attributes != null && !aContext.element.is("[jstl-attribute-ignore]");
	},
	execute : function(aContext){
		const attributes = aContext.element.attr();
		const promises = [];
		for(const key in attributes)
			promises.push(execute(key, attributes[key], aContext));
		
		return Promise.all(promises)
		.then(function(){
			return aContext;
		});
	}
};

_Processor__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].addTask(Task, _Constants__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].PHASE.CONTENT + 100);

/***/ }),

/***/ "./src/tasks/Children.js":
/*!*******************************!*\
  !*** ./src/tasks/Children.js ***!
  \*******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _Constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Constants */ "./src/Constants.js");
/* harmony import */ var _Processor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Processor */ "./src/Processor.js");




const executeNext = function(children, aContext){
	return _Processor__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].execute(children.shift(), aContext.data, aContext.root)
	.then(function(aContext){
		if(children.length != 0)
			return executeNext(children, aContext);
		else
			return aContext;
	});
};

const Task = {
	id : "children",
	accept : function(aContext){
		const children = aContext.element.children;
		return children != null && children.length > 0;
	},
	execute : function(aContext){
		//const children = Array.from(aContext.element.find(":scope>*"));
//		.filter(function(aNode){
//			return aNode.nodeType != 3 && aNode.nodeType != 4;
//		});
		
		//return executeNext(children, aContext);
		return _Processor__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].execute(aContext.element.find(":scope>*"), aContext.data, aContext.root)
	}
};

_Processor__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].addTask(Task, _Constants__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].PHASE.CHILDREN);

/***/ }),

/***/ "./src/tasks/Choose.js":
/*!*****************************!*\
  !*** ./src/tasks/Choose.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _default_js_defaultjs_expression_language__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @default-js/defaultjs-expression-language */ "./node_modules/@default-js/defaultjs-expression-language/index.js");
/* harmony import */ var _Constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Constants */ "./src/Constants.js");
/* harmony import */ var _Processor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Processor */ "./src/Processor.js");




const Resolver = _default_js_defaultjs_expression_language__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].ExpressionResolver;

const when = function(theNodes, aContext){
	if(theNodes.length == 0)
		return false;
		
	const node = theNodes.shift();
	return Resolver.resolve(node.attr("jstl-when"), aContext.data, false)
	.then(function(aResult){
		if(!!aResult){
			theNodes.forEach(function(node){node.remove()});
			return aResult;
		}
		
		node.remove();
		return when(theNodes, aContext)
	})
};

const Task = {
	id : "choose",
	accept : function(aContext){
		return aContext.element.is("[jstl-choose]");
	},
	execute : function(aContext){
		return when(Array.from(aContext.element.find(":scope > [jstl-when]")), aContext)
		.then(function(aResult){
			if(!!aResult)
				aContext.element.find(":scope > [jstl-otherwise]").remove();			
		}).then(function(){
			return aContext;
		});
	}
};

_Processor__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].addTask(Task, _Constants__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].PHASE.MANIPULATION + 100);

/***/ }),

/***/ "./src/tasks/Data.js":
/*!***************************!*\
  !*** ./src/tasks/Data.js ***!
  \***************************/
/*! exports provided: MODES, DATATYPES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/* unused harmony export MODES */
/* unused harmony export DATATYPES */
/* harmony import */ var _Constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Constants */ "./src/Constants.js");
/* harmony import */ var _Processor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Processor */ "./src/Processor.js");
/* harmony import */ var _default_js_defaultjs_expression_language__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @default-js/defaultjs-expression-language */ "./node_modules/@default-js/defaultjs-expression-language/index.js");
/* harmony import */ var _default_js_defaultjs_common_utils_src_ObjectUtils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @default-js/defaultjs-common-utils/src/ObjectUtils */ "./node_modules/@default-js/defaultjs-common-utils/src/ObjectUtils.js");






const Resolver = _default_js_defaultjs_expression_language__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].ExpressionResolver;
const Global = window || global || self || undefined || {};

const getParameter = function(aParameter){
	const name = aParameter.replace(/[\[\]]/g, "\\$&");
	const value = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)").exec(Global.location.search);
	if (!results) 
		return undefined;
	else if (!results[2]) 
		return "";
	else
		return Global.decodeURIComponent(results[2].replace(/\+/g, " "));
}

const MODES = {
	"direct" : function(anExpression, aContext){
		return Resolver.resolve(anExpression, aContext.data);
	},
	"remote" : function(anExpression, aContext){		
		return Promise.all([
				Resolver.resolveText(anExpression, aContext.data),
				Resolver.resolve(aContext.element.attr("jstl-data-options") || "undefined", aContext.data)
			]).then(function(args){
				return fetch(/*url*/args[0], /*option*/_default_js_defaultjs_common_utils_src_ObjectUtils__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].isPojo(args[1]) ? args[1] : null);
			}).then(function(aResponse){				
				return Resolver.resolveText(aContext.element.attr("jstl-data-datatype") || "json", aContext.data)
				.then(function(aDatatype){
					const mapper = DATATYPES[aDatatype];
					if(typeof mapper === "function")
						return mapper(aResponse, aContext);					
				});
			});
	},
	"url-parameter" : function(anExpression, aContext){
		return Resolver.resolveText(anExpression, aContext.data)
		.then(function(aParameter){
			return getParameter(aParameter);
		});
	},
};

const DATATYPES = {
	"json" : function(aResponse){
		return aResponse.json();
	}
};

const Task = {
	id : "data",
	accept : function(aContext){
		return aContext.element.is("[jstl-data]");
	},
	execute : function(aContext){		
		const mode = aContext.element.attr("jstl-data-mode") || "direct";
		const action = MODES[mode];
		if(typeof action !== "function")		
			return Promise.resolve(aContext);
		
		
		const varname = aContext.element.attr("jstl-data-var");
		const defaultValue = aContext.element.attr("jstl-data-default");
		const expression = aContext.element.attr("jstl-data");
		
		return Promise.resolve(action(expression, aContext))
			.then(function(aData){
				if(typeof aData === "undefined")
					return Resolver.resolve(defaultValue, aContext.data);
				
				return aData;
			}).then(function(aData){
				if(varname)
					aContext.data[varname] = aData;
				else if(typeof aData !== "undefined")
					_default_js_defaultjs_common_utils_src_ObjectUtils__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].merge(aContext.data, aData);
				
				return aContext;
			});
	}
};

_Processor__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].addTask(Task, _Constants__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].PHASE.CONTEXT + 100);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./src/tasks/Foreach.js":
/*!******************************!*\
  !*** ./src/tasks/Foreach.js ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _default_js_defaultjs_expression_language__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @default-js/defaultjs-expression-language */ "./node_modules/@default-js/defaultjs-expression-language/index.js");
/* harmony import */ var _Constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Constants */ "./src/Constants.js");
/* harmony import */ var _Processor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Processor */ "./src/Processor.js");
/* harmony import */ var _default_js_defaultjs_common_utils_src_ObjectUtils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @default-js/defaultjs-common-utils/src/ObjectUtils */ "./node_modules/@default-js/defaultjs-common-utils/src/ObjectUtils.js");





const Resolver = _default_js_defaultjs_expression_language__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].ExpressionResolver;
const DATANAME = "defaultjs.tl.foreach.template";
const ATTRIBUTE = {
	DATA : "jstl-foreach",
	VARNAME : "jstl-foreach-var",
	STATUSVARNAME : "jstl-foreach-status",
	COUNT : "jstl-foreach-count",
	STARTINDEX : "jstl-foreach-start-index",
	STEP : "jstl-foreach-step",
	BREAKCONDITION : "jstl-foreach-break-condition"
};

const count = function(aVarname, aStatusname, aContext, aTemplate) {
	return Promise.all([
		Resolver.resolve(aContext.element.attr(ATTRIBUTE.STARTINDEX) || 0, aContext.data, 0),
		Resolver.resolve(aContext.element.attr(ATTRIBUTE.COUNT) || 0, aContext.data, 0),
		Resolver.resolve(aContext.element.attr(ATTRIBUTE.STEP) || 1, aContext.data, 1)
	]).then(function(aResults){
		let promises = [];
		const start = aResults[0] || 0;
		const count = aResults[1] || 0;
		const step = aResults[2] || 1;
		for (let i = start; i < count; i += step) {    			    
		    const context = _default_js_defaultjs_common_utils_src_ObjectUtils__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].merge({}, aContext.data);
		    context[aVarname] = i,
		    context[aStatusname] = {
		        "index" : i,
		        "number" : i + 1, 
		        "count" : aResults[1],
		        "context" : aContext.data
		    };
		    promises.push(_Processor__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].execute(aTemplate.cloneNode(true), context, aContext.root)
		    	.then(function(aResult){
	    			return aResult.element;
	    		}));
	    }
		
		return Promise.all(promises);
	});    
};

const iterateList = function(aIndex, aData, aBreakCondition, aVarname, aStatusname, aContext, aTemplate, aResult){
	if(aIndex >= aData.length)
		return aResult;	
	
	const context = _default_js_defaultjs_common_utils_src_ObjectUtils__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].merge({}, aContext);
    context[aVarname] = aData[aIndex],
    context[aStatusname] = {
        "index" : aIndex,
        "number" : aIndex + 1, 
        "count" : aData.length,
        "data" : aData,
        "context" : aContext.data
    };
    
    return Resolver.resolve(aBreakCondition, context, false)
    .then(function(doBreak){
    	if(!doBreak){
    		return aContext.processor.execute(aTemplate.cloneNode(true), context, aContext.root)
    		.then(function(aContent){
    			return aResult.push(aContent.element);
    		});
    	}
    	
    	return aResult;
    });	
};

const list = function(aData, aVarname, aStatusname, aContext, aTemplate) {	
	const breakCondition = aContext.element.attr(ATTRIBUTE.BREAKCONDITION);
	return Resolver.resolve(aContext.element.attr(ATTRIBUTE.STARTINDEX), aContext.data, 0)
	.then(function(aStartIndex){
		return iterateList(aStartIndex,aData, aVarname, aStatusname, aContext, aTemplate, []);	    	
	});
};

const iterateMap = function(aIndex, aKeys, aData, aBreakCondition, aVarname, aStatusname, aContext, aTemplate, aResult){
	if(aIndex >= aData.length)
		return aResult;
	
	const key = aKeys[aIndex];
	const context = _default_js_defaultjs_common_utils_src_ObjectUtils__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].merge({}, aContext);
    context[aVarname] = aData[key],
    context[aStatusname] = {
        "index" : aIndex,
        "number" : aIndex + 1,
        "key" : key,
        "count" : aData.length,
        "data" : aData,
        "context" : aContext.data
    };
    
    return Resolver.resolve(aBreakCondition, context, false)
    .then(function(doBreak){
    	if(!doBreak){
    		return aContext.processor.execute(aTemplate.cloneNode(true), context, aContext.root)
    		.then(function(aContent){
    			return aResult.push(aContent.element);
    		});    		
    	}
    	
    	return aResult;
    });
};

const map = function(aData, aVarname, aStatusname, aContext, aTemplate) {
	const breakCondition = aContext.element.attr(ATTRIBUTE.BREAKCONDITION);
	return Resolver.resolve(aContext.element.attr(ATTRIBUTE.STARTINDEX), aContext.data, 0)
	.then(function(aStartIndex){
		return iterateMap(aStartIndex, Object.getOwnPropertyNames(aData), aData, aVarname, aStatusname, aContext, aTemplate, []);	    	
	});
};

const getTemplate = function(aElement) {
    let template = aElement.data(DATANAME);
    if (typeof template === 'undefined') {
	    template = aElement.content();
	    aElement.data(DATANAME, template);
    }
    return template;
};


const execute = function(anExpression, aVarname, aStatusname, aContext, aTemplate){
	if (anExpression == null && typeof aContext.element.attr(ATTRIBUTE.COUNT) !== "undefined")
	    return count(aVarname, aStatusname, aContext, aTemplate);
    else if(expression != null){
	    let data = Resolver.resolve(anExpression, aContext, null);
	    if(data == null)
	    	return aContext;
	    else if (data instanceof Array)
		    return list(data, aVarname, aStatusname, aContext, aTemplate);
	    else if(data instanceof Object)
	    	return map(data, aVarname, aStatusname, aContext, aTemplate);				   
	    else
		    return null;
    }
};


const Task = {
	id : "foreach",
	accept : function(aContext){
		return aContext.element.is("[jstl-foreach]");
	},
	execute : function(aContext){		
		const element = aContext.element;
		const template = getTemplate(aContext.element);
	    if (typeof template !== 'undefined') {
	    	const expression = element.attr(ATTRIBUTE.DATA) || null;
	    	const varname = element.attr(ATTRIBUTE.VARNAME) || "itemVar"; 
		    const statusname = element.attr(ATTRIBUTE.STATUSVARNAME) || "statusVar";
		    return Promise.resolve(execute(expression, varname, statusname, aContext, template))
		    .then(function(aContent){
		    	if(typeof aContent === "undefined")
		    		return [];
		    	
		    	const result = [];
	    		aContent.forEach(function(aItem){
	    			if(typeof aItem !== "undefined")
		    			aItem.forEach(function(aNode){
		    				if(typeof aNode !== "undefined")
		    					result.push(aNode);
		    			});
	    		});
		    	
		    	return result;
		    }).then(function(aContent){
		    	element.empty();
		    	if(aContent != null)
		    		element.append(aContent)
		    		
		    	aContext.exit = true;
		    	return aContext;	    	
		    })["catch"](console.error);
	    }
	    
		return aContext;
	}
};

_Processor__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].addTask(Task, _Constants__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].PHASE.MANIPULATION);

/***/ }),

/***/ "./src/tasks/If.js":
/*!*************************!*\
  !*** ./src/tasks/If.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _default_js_defaultjs_expression_language__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @default-js/defaultjs-expression-language */ "./node_modules/@default-js/defaultjs-expression-language/index.js");
/* harmony import */ var _Constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Constants */ "./src/Constants.js");
/* harmony import */ var _Processor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Processor */ "./src/Processor.js");




const Resolver = _default_js_defaultjs_expression_language__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].ExpressionResolver;
const ATTRIBUTE = "jstl-if";
const Task = {
	id : "if",
	accept : function(aContext){		
		return Promise.resolve(aContext.element.is("[jstl-if]"));
	},
	execute : function(aContext){
		const expression = aContext.element.attr("jstl-if");
		return Resolver.resolve(expression, aContext.data, false)
		.then(function(aResult){
			if(!aResult)
				aContext.element.remove();
			
			aContext.exit = !!aResult;
			return Promise.resolve(aContext);
		});
	}
};

_Processor__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].addTask(Task, _Constants__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].PHASE.CONDITION);

/***/ }),

/***/ "./src/tasks/Include.js":
/*!******************************!*\
  !*** ./src/tasks/Include.js ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _Constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Constants */ "./src/Constants.js");
/* harmony import */ var _Processor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Processor */ "./src/Processor.js");
/* harmony import */ var _default_js_defaultjs_expression_language__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @default-js/defaultjs-expression-language */ "./node_modules/@default-js/defaultjs-expression-language/index.js");
/* harmony import */ var _default_js_defaultjs_common_utils_src_ObjectUtils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @default-js/defaultjs-common-utils/src/ObjectUtils */ "./node_modules/@default-js/defaultjs-common-utils/src/ObjectUtils.js");





const Resolver = _default_js_defaultjs_expression_language__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].ExpressionResolver;
const MODES = {
	append : "append",
	prepend : "prepend",
	replace : "replace"
};

const Task = {
	id : "include",
	accept : function(aContext){
		return aContext.element.is("[jstl-include]");
	},
	execute : function(aContext){
		const mode = aContext.element.attr("jstl-include-mode") || MODES.replace;
		const expression = aContext.element.attr("jstl-include");
		const option = aContext.element.attr("jstl-include-options");
		
		return Promise.all([
			Resolver.resolveText(mode, aContext.data),
			Resolver.resolveText(expression, aContext.data),
			Resolver.resolve(option, aContext.data),
		]).then(function(aData){
			const mode = aData[0];
			const url = aData[1];
			const option = _default_js_defaultjs_common_utils_src_ObjectUtils__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].isPojo(aData[2]) ? aData[2] : undefined;
			
			return fetch(url, option)			
			.then(function(aResponse){
				return aResponse.text();
			}).then(function(aContent){
				return create(aContent);
			}).then(function(aContent){
				return _Processor__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].execute(aContent, aContext.data, aContext.root)
				.then(function(){
					if(mode == MODES.append)
						aContext.element.append(aContent);
					else if(mode == MODES.prepend)
						aContext.element.prepend(aContent);
					else if(mode == MODES.replace){
						aContext.element.empty();
						aContext.element.append(aContent);
					} else
						throw new Error("Include mode \"" + mode + "\" is not supported");
				});
			})
		}).then(function(){
			aContext.exit = true;
			return aContext;
		});
	}
};

_Processor__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].addTask(Task, _Constants__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].PHASE.CONTEXT);

/***/ }),

/***/ "./src/tasks/Text.js":
/*!***************************!*\
  !*** ./src/tasks/Text.js ***!
  \***************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _default_js_defaultjs_expression_language__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @default-js/defaultjs-expression-language */ "./node_modules/@default-js/defaultjs-expression-language/index.js");
/* harmony import */ var _Constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Constants */ "./src/Constants.js");
/* harmony import */ var _Processor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Processor */ "./src/Processor.js");
/* harmony import */ var _utils_StringUtils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/StringUtils */ "./src/utils/StringUtils.js");





const Resolver = _default_js_defaultjs_expression_language__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].ExpressionResolver;

const normalize = function(aNode) {
    if (aNode) {
	    if (aNode.nodeType == 3) {
		    let text = aNode.textContent;
		    while (aNode.nextSibling && aNode.nextSibling.nodeType == 3) {
			    text += aNode.nextSibling.textContent;
			    aNode.parentNode.removeChild(aNode.nextSibling);
		    }
		    aNode.textContent = text;
	    } else
		    normalize(aNode.firstChild);
	    
	    normalize(aNode.nextSibling);
    }
};

const CONTENTTYPE = {
    "html" : function(aNode, aText, aContext) {
        aNode.replace(create(aText));
    },
    "text" : function(aNode, aText, aContext) {
        let text = aText;
        let addAsHtml = false;

        let preventFormat = aContext.element.attr("jstl-text-prevent-format");
        if(typeof preventFormat === "string" && preventFormat.trim().length == 0)
        	preventFormat = "true";
        
        Promise.all([
        	Resolver.resolve(preventFormat, aContext.data, false),
        	Resolver.resolve(aContext.element.attr("jstl-text-trim-length") || "0", aContext.data, 0),
        ]).then(function(aResults){
        	const preventFormat = !!aResults[0];
        	const maxLength = aResults[1];
        	
        	if(maxLength > 0)
        		text = _utils_StringUtils__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].trimTextLength(text, maxLength);        	
        	if(preventFormat)
        		text = _utils_StringUtils__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].formatToHtml(text)
        		
        		
    		 if (preventFormat)
    			 aNode.replace(create(text));
    		 else
    			 aNode.textContent = text;
        });
    }
};

const Task = {
	id : "text",
	accept : function(aContext){
		return !aContext.element.is("[jstl-text-ignore]");
	},
	execute : function(aContext){
		const type = aContext.element.attr("jstl-text-content-type") || "text";
		if(typeof CONTENTTYPE[type] === "undefined")
			return;
		
		const promises = [];		
		normalize(aContext.element);
		Array.from(aContext.element.childNodes || [])
		.filter(function(aNode) {
			return (aNode.nodeType === 3 || aNode.nodeType === 4) && typeof aNode.textContent !== "undefined" && aNode.textContent.trim().length > 0;
		}).forEach(function(aNode) {
		    let text = aNode.textContent;
		    if (text) {
		    	promises.push(
				    Resolver.resolveText(text, aContext.data)
				    .then(function(aText){
						return CONTENTTYPE[type](aNode, aText, aContext);
				    })
			    );
			    
		    }
	    });		
		
		return Promise.all(promises)
		.then(function(){
			return aContext;
		});
	}
};

_Processor__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].addTask(Task, _Constants__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].PHASE.CONTENT);

/***/ }),

/***/ "./src/tasks/index.js":
/*!****************************!*\
  !*** ./src/tasks/index.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _Async__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Async */ "./src/tasks/Async.js");
/* harmony import */ var _AddAttribute__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AddAttribute */ "./src/tasks/AddAttribute.js");
/* harmony import */ var _Attribute__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Attribute */ "./src/tasks/Attribute.js");
/* harmony import */ var _Choose__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Choose */ "./src/tasks/Choose.js");
/* harmony import */ var _Data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Data */ "./src/tasks/Data.js");
/* harmony import */ var _Foreach__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Foreach */ "./src/tasks/Foreach.js");
/* harmony import */ var _If__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./If */ "./src/tasks/If.js");
/* harmony import */ var _Include__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Include */ "./src/tasks/Include.js");
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Text */ "./src/tasks/Text.js");
/* harmony import */ var _Children__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Children */ "./src/tasks/Children.js");











/***/ }),

/***/ "./src/utils/StringUtils.js":
/*!**********************************!*\
  !*** ./src/utils/StringUtils.js ***!
  \**********************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _default_js_defaultjs_common_utils_src_ObjectUtils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @default-js/defaultjs-common-utils/src/ObjectUtils */ "./node_modules/@default-js/defaultjs-common-utils/src/ObjectUtils.js");


const DEFAULTS = {
	formatToHtml : {
		"tabsize" : 4,
		"tabchar" : "&nbsp;",
		"newlineTag" : "<br/>"
	},

	trimTextLength : {
		"postfix" : "..."
	}
};
const StringUtils = {
	DEFAULTS : DEFAULTS,
	trimTextLength : function(aText, maxLength, theSettings) {
		if (aText == undefined || typeof aText !== "string" || aText == "")
			return aText;

		let settings = _default_js_defaultjs_common_utils_src_ObjectUtils__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].merge({}, theSettings || {}, DEFAULTS.trimTextLength);

		if (aText.length > maxLength) {
			let end = maxLength - settings.postfix.length;
			if ((aText.length - end) > 0)
				return aText.substring(0, end).trim() + settings.postfix;
		}
		return aText;
	},
	formatToHtml : function(aText, theSettings) {
		if (aText == undefined || typeof aText !== "string" || aText == "")
			return aText;
		let settings = _default_js_defaultjs_common_utils_src_ObjectUtils__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].merge({}, theSettings || {} ,DEFAULTS.formatToHtml);
		let lines = aText.replace(/\n\r/g, "\n").replace(/\r/g, "\n").split("\n");
		let text = "";
		for (let i = 0; i < lines.length; i++) {
			if (i != 0)
				text = text + settings.newlineTag;
			text = text	+ StringUtils.preventTabs(lines[i], settings.tabsize, settings.tabchar);
		}
		return text;
	},
	getTabStopMap : function(tabSize, tabString) {
		let tabstopMap = [];
		for (let i = 0; i <= tabSize; i++) {
			if (i == 0)
				tabstopMap[0] = "";
			else
				tabstopMap[i] = tabstopMap[i - 1] + tabString;
		}

		return tabstopMap;
	},
	preventTabs : function(aText, theTabStops, theTabStopChar) {
		let tabstopMap = StringUtils.getTabStopMap(theTabStops, theTabStopChar);
		let tabStops = theTabStops;
		let text = "";
		let tabs = aText.split("\t");
		for (let i = 0; i < tabs.length; i++) {
			if (tabs[i].length != 0 && i != 0) {
				let size = text.length;
				let tabSize = size % tabStops;
				text = text + tabstopMap[theTabStops - tabSize] + tabs[i];
			} else if (tabs[i].length == 0 && i != 0)
				text = text + tabstopMap[theTabStops];
			else
				text = text + tabs[i];
		}

		return text;
	},
	format : function(aText, args) {
		let objects = arguments;
		return aText.replace(/{-?[0-9]+}/g, function(item) {
			let index = parseInt(item.substring(1, item.length - 1)) + 1;
			let replace;
			if (index > 0 && index < objects.length) {
				replace = objects[index];
				if (typeof replace !== "string")
					replace = JSON.stringify(replace);
			} else if (index === -1) {
				replace = "{";
			} else if (index === -2) {
				replace = "}";
			} else {
				replace = "";
			}
			return replace;
		});
	}
};
/* harmony default export */ __webpack_exports__["a"] = (StringUtils);

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYnJvd3Nlci1pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGRlZmF1bHQtanMvZGVmYXVsdGpzLWNvbW1vbi11dGlscy9zcmMvT2JqZWN0VXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BkZWZhdWx0LWpzL2RlZmF1bHRqcy1leHByZXNzaW9uLWxhbmd1YWdlL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZGVmYXVsdC1qcy9kZWZhdWx0anMtZXhwcmVzc2lvbi1sYW5ndWFnZS9zcmMvRXhwcmVzc2lvblJlc29sdmVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZGVmYXVsdC1qcy9kZWZhdWx0anMtZXhwcmVzc2lvbi1sYW5ndWFnZS9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BkZWZhdWx0LWpzL2RlZmF1bHRqcy1leHRkb20vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BkZWZhdWx0LWpzL2RlZmF1bHRqcy1leHRkb20vc3JjL0dsb2JhbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGRlZmF1bHQtanMvZGVmYXVsdGpzLWV4dGRvbS9zcmMvZG9tL0RvY3VtZW50LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZGVmYXVsdC1qcy9kZWZhdWx0anMtZXh0ZG9tL3NyYy9kb20vRG9jdW1lbnRGcmFnbWVudC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGRlZmF1bHQtanMvZGVmYXVsdGpzLWV4dGRvbS9zcmMvZG9tL0VsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BkZWZhdWx0LWpzL2RlZmF1bHRqcy1leHRkb20vc3JjL2RvbS9FdmVudFRhcmdldC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGRlZmF1bHQtanMvZGVmYXVsdGpzLWV4dGRvbS9zcmMvZG9tL0hUTUxFbGVtZW50LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZGVmYXVsdC1qcy9kZWZhdWx0anMtZXh0ZG9tL3NyYy9kb20vSFRNTElucHV0RWxlbWVudC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGRlZmF1bHQtanMvZGVmYXVsdGpzLWV4dGRvbS9zcmMvZG9tL0hUTUxTZWxlY3RFbGVtZW50LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZGVmYXVsdC1qcy9kZWZhdWx0anMtZXh0ZG9tL3NyYy9kb20vSFRNTFRleHRBcmVhRWxlbWVudC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGRlZmF1bHQtanMvZGVmYXVsdGpzLWV4dGRvbS9zcmMvZG9tL05vZGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BkZWZhdWx0LWpzL2RlZmF1bHRqcy1leHRkb20vc3JjL2RvbS9Ob2RlTGlzdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGRlZmF1bHQtanMvZGVmYXVsdGpzLWV4dGRvbS9zcmMvZG9tL2V4dGVudGlvbnMvQXR0cmlidXRlU3VwcG9ydC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGRlZmF1bHQtanMvZGVmYXVsdGpzLWV4dGRvbS9zcmMvZG9tL2V4dGVudGlvbnMvRGF0YVN1cHBvcnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BkZWZhdWx0LWpzL2RlZmF1bHRqcy1leHRkb20vc3JjL2RvbS9leHRlbnRpb25zL0V2ZW50U3VwcG9ydC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGRlZmF1bHQtanMvZGVmYXVsdGpzLWV4dGRvbS9zcmMvZG9tL2V4dGVudGlvbnMvSHRtbENsYXNzU3VwcG9ydC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGRlZmF1bHQtanMvZGVmYXVsdGpzLWV4dGRvbS9zcmMvZG9tL2V4dGVudGlvbnMvTGlzdFN1cHBvcnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BkZWZhdWx0LWpzL2RlZmF1bHRqcy1leHRkb20vc3JjL2RvbS9leHRlbnRpb25zL01hbmlwdWxhdGlvblN1cHBvcnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BkZWZhdWx0LWpzL2RlZmF1bHRqcy1leHRkb20vc3JjL2RvbS9leHRlbnRpb25zL1F1ZXJ5U3VwcG9ydC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGRlZmF1bHQtanMvZGVmYXVsdGpzLWV4dGRvbS9zcmMvZG9tL2V4dGVudGlvbnMvUmVhZHlFdmVudFN1cHBvcnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BkZWZhdWx0LWpzL2RlZmF1bHRqcy1leHRkb20vc3JjL2RvbS9leHRlbnRpb25zL1Nob3dIaWRlU3VwcG9ydC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGRlZmF1bHQtanMvZGVmYXVsdGpzLWV4dGRvbS9zcmMvZG9tL2V4dGVudGlvbnMvVmFsdWVTdXBwb3J0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZGVmYXVsdC1qcy9kZWZhdWx0anMtZXh0ZG9tL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGRlZmF1bHQtanMvZGVmYXVsdGpzLWV4dGRvbS9zcmMvdXRpbHMvRGVsZWdhdGVyQnVpbGRlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGRlZmF1bHQtanMvZGVmYXVsdGpzLWV4dGRvbS9zcmMvdXRpbHMvRXh0ZW5kUHJvdG90eXBlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZGVmYXVsdC1qcy9kZWZhdWx0anMtZXh0ZG9tL3NyYy91dGlscy9FeHRlbmRlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGRlZmF1bHQtanMvZGVmYXVsdGpzLWV4dGRvbS9zcmMvdXRpbHMvVXRpbHMuanMiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL2dsb2JhbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQ29uc3RhbnRzLmpzIiwid2VicGFjazovLy8uL3NyYy9Qcm9jZXNzb3IuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1Rhc2tDaGFpbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Rhc2tzL0FkZEF0dHJpYnV0ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdGFza3MvQXN5bmMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Rhc2tzL0F0dHJpYnV0ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdGFza3MvQ2hpbGRyZW4uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Rhc2tzL0Nob29zZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdGFza3MvRGF0YS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdGFza3MvRm9yZWFjaC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdGFza3MvSWYuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Rhc2tzL0luY2x1ZGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Rhc2tzL1RleHQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Rhc2tzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy91dGlscy9TdHJpbmdVdGlscy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBO0FBQTBDOztBQUUxQywyQ0FBMkMsU0FBSTtBQUMvQztBQUNBO0FBQ0EsY0FBYyxRQUFRO0FBQ3RCLGFBQWEsc0RBQVM7QUFDdEIsYUFBYSxzREFBUztBQUN0QixFOzs7Ozs7Ozs7Ozs7OztBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0M7QUFDQSxzQztBQUNBO0FBQ0E7QUFDQSxPO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDO0FBQ0EsZUFBZSxzQkFBc0I7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7O0FBRWU7QUFDZjtBQUNBO0FBQ0E7QUFDQSxDQUFDLEU7Ozs7Ozs7Ozs7Ozs7QUNsRUQ7QUFBeUI7O0FBRVYsNkdBQUksRTs7Ozs7Ozs7Ozs7OztBQ0ZuQix3QkFBd0IsS0FBSyxFQUFFLEtBQUs7O0FBRXBDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsSUFBSTs7QUFFSjtBQUNBOztBQUVBLHVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdURBQXVEO0FBQ3ZELDZEQUE2RDtBQUM3RCxxREFBcUQ7QUFDckQsV0FBVztBQUNYLFVBQVUsU0FBUztBQUNuQixrQkFBa0I7QUFDbEIsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsT0FBTztBQUNQLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKLEdBQUc7OztBQUdIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDZSwyRUFBa0IsRTs7Ozs7Ozs7Ozs7OztBQ3JFakM7QUFBc0Q7O0FBRXZDO0FBQ2Ysb0JBQW9CLG1FQUFrQjtBQUN0QyxDQUFDLEU7Ozs7Ozs7Ozs7OztBQ0pEOzs7Ozs7Ozs7Ozs7O0FDQUE7QUFBa0M7O0FBRWxDLDREQUFLLG9CQUFvQiw0REFBSztBQUM5Qiw0REFBSywyQkFBMkIsNERBQUs7QUFDckMsY0FBYyxRQUFRO0FBQ3RCO0FBQ0EsU0FBUyw0REFBSztBQUNkO0FBQ0E7O0FBRUE7O0FBRUEsNERBQUs7QUFDTDtBQUNBOztBQUVBLDREQUFLO0FBQ0w7QUFDQTs7QUFFQSw0REFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEU7Ozs7Ozs7Ozs7OztBQzdCQTtBQUFBO0FBQUE7QUFBdUQ7QUFDRjtBQUNVOztBQUUvRCw4RUFBZSxXQUFXLHdFQUFZLEVBQUUsNkVBQWlCOztBQUV6RDtBQUNBO0FBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7OztBQ1JEO0FBQUE7QUFBQTtBQUF1RDtBQUNGO0FBQ2M7O0FBRW5FLDhFQUFlLG1CQUFtQix3RUFBWSxFQUFFLCtFQUFtQjs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNKbkU7QUFBQTtBQUFBO0FBQUE7QUFBdUQ7QUFDRjtBQUNRO0FBQ007O0FBRW5FLDhFQUFlLFNBQVMsd0VBQVksRUFBRSw0RUFBZ0IsRUFBRSwrRUFBbUI7QUFDM0U7QUFDQTtBQUNBLDBCO0FBQ0E7QUFDQSxjO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLLEU7QUFDTDtBQUNBO0FBQ0EsSTs7Ozs7Ozs7Ozs7O0FDbEJBO0FBQUE7QUFBdUQ7QUFDRjs7QUFFckQsOEVBQWUsY0FBYyx3RUFBWSxFOzs7Ozs7Ozs7Ozs7QUNIekM7QUFBQTtBQUFBO0FBQXVEO0FBQ007QUFDRjs7O0FBRzNELDhFQUFlLGNBQWMsNEVBQWdCLEVBQUUsMkVBQWUsRTs7Ozs7Ozs7Ozs7O0FDTDlEO0FBQUE7QUFBdUQ7QUFDRjs7O0FBR3JELDhFQUFlLGtCQUFrQix3RUFBWSxFOzs7Ozs7Ozs7Ozs7QUNKN0M7QUFBQTtBQUF1RDtBQUNGOzs7QUFHckQsOEVBQWUsbUJBQW1CLHdFQUFZLEU7Ozs7Ozs7Ozs7OztBQ0o5QztBQUFBO0FBQXVEO0FBQ2Q7OztBQUd6Qyw4RUFBZSxxQkFBcUIsdUVBQVEsc0M7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEc7QUFDQSxDQUFDLEc7Ozs7Ozs7Ozs7OztBQ2JEO0FBQUE7QUFBQTtBQUF1RDtBQUNKO0FBQ2dCOztBQUVuRSw4RUFBZSxNQUFNLHVFQUFXLENBQUMsK0VBQW1CLEU7Ozs7Ozs7Ozs7OztBQ0pwRDtBQUFBO0FBQUE7QUFBdUQ7QUFDRTtBQUNOOztBQUVuRCw4RUFBZSxXQUFXLHVFQUFXOztBQUVyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxpQkFBaUI7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxFO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCO0FBQ0Esa0JBQWtCLGdCQUFnQjtBQUNsQztBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGdCQUFnQjtBQUNoQjtBQUNBOzs7QUFHQSwrRUFBZ0I7QUFDaEIsa0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7Ozs7Ozs7Ozs7Ozs7O0FDekZEO0FBQTRDOztBQUU1QyxnQkFBZ0IsdUVBQVE7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQztBQUNjLGdFQUFPLEU7Ozs7Ozs7Ozs7Ozs7QUN0QnRCO0FBQTRDO0FBQzVDLGdCQUFnQix1RUFBUTtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDO0FBQ2MsZ0VBQU8sRTs7Ozs7Ozs7Ozs7OztBQ3RCdEI7QUFBNEM7O0FBRTVDLGdCQUFnQix1RUFBUTtBQUN4QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxnQjtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEc7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EseUM7QUFDQTs7QUFFQSxHQUFHOztBQUVIOztBQUVBO0FBQ0EsRzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkI7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSyxxQjtBQUNMLElBQUk7QUFDSjs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBLG1DO0FBQ0EsMkI7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DLGdEQUFnRDs7QUFFcEYsd0M7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ2MsZ0VBQU8sRUFBQzs7Ozs7Ozs7Ozs7Ozs7QUN0SHZCO0FBQTRDOztBQUU1QyxnQkFBZ0IsdUVBQVEsMEM7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0EsSUFBSTs7QUFFSjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBLElBQUk7O0FBRUosYztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBLElBQUk7O0FBRUo7QUFDQTtBQUNBLENBQUM7QUFDYyxnRUFBTyxFOzs7Ozs7Ozs7Ozs7O0FDMUN0QjtBQUE0Qzs7QUFFNUMsZ0JBQWdCLHVFQUFRLHFDO0FBQ3hCO0FBQ0EsZ0JBQWdCLGlCQUFpQjtBQUNqQztBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEc7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsRzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDYyxnRUFBTyxFOzs7Ozs7Ozs7Ozs7O0FDekJ0QjtBQUFBO0FBQTRDO0FBQ047O0FBRXRDLGdCQUFnQix1RUFBUSw2QztBQUN4QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxjOztBQUVKO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGdCQUFnQixzQkFBc0I7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixzQkFBc0I7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ2MsZ0VBQU8sRTs7Ozs7Ozs7Ozs7OztBQ3JGdEI7QUFBNEM7O0FBRTVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEc7QUFDQSxtQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsRztBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQSxnQkFBZ0IsdUVBQVEscUM7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixtQkFBbUI7QUFDckM7QUFDQTtBQUNBLEk7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHOztBQUVBO0FBQ0E7QUFDQSxvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsRzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTztBQUNBO0FBQ0E7QUFDQTtBQUNBLDREO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLO0FBQ0E7QUFDQTtBQUNBLEk7QUFDQTtBQUNBO0FBQ0EsRzs7QUFFQSx1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHdCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsOEI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNjLGdFQUFPLEVBQUM7Ozs7Ozs7Ozs7Ozs7OztBQ3pJdkI7QUFBNEM7O0FBRTVDLGdCQUFnQix1RUFBUTtBQUN4Qiw2QztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLENBQUM7QUFDYyxnRUFBTyxFOzs7Ozs7Ozs7Ozs7O0FDWnRCO0FBQTRDOztBQUU1QyxnQkFBZ0IsdUVBQVE7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEc7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsQ0FBQztBQUNjLGdFQUFPLEU7Ozs7Ozs7Ozs7Ozs7QUM3QnRCO0FBQTRDOztBQUU1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTs7QUFFSjtBQUNBLEdBQUc7QUFDSCxtQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7O0FBRUo7QUFDQSxHO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHO0FBQ0E7O0FBRUE7QUFDQSxlQUFlLHVCQUF1QjtBQUN0QztBQUNBLHdCO0FBQ0E7QUFDQTs7O0FBR0EsZ0JBQWdCLHVFQUFRLHNDO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEc7QUFDQSxDQUFDO0FBQ2MsZ0VBQU8sRTs7Ozs7Ozs7Ozs7O0FDcEZ0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTJCO0FBQ1A7QUFDRztBQUNDO0FBQ1E7QUFDTDtBQUNLO0FBQ0c7QUFDRjtBQUNUO0FBQ047Ozs7Ozs7Ozs7Ozs7O0FDVmxCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQyxnRDtBQUNqQyxJQUFJO0FBQ0osRUFBRTs7QUFFRjtBQUNlLHlFQUFnQixFOzs7Ozs7Ozs7Ozs7O0FDZC9CO0FBQ0E7QUFDQSx5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWUsd0VBQWUsRTs7Ozs7Ozs7Ozs7OztBQ1Q5QjtBQUE0Qjs7QUFFNUIsdUJBQXVCLHNEQUFLLDBDQUEwQztBQUN0RTtBQUNBLHdCO0FBQ0E7QUFDQTtBQUNBLGdEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWUsaUVBQVEsRTs7Ozs7Ozs7Ozs7OztBQ2xCdkI7QUFDQSx1Q0FBdUMsU0FBSSxNQUFNO0FBQ2pEO0FBQ0E7QUFDQTs7QUFFQSw2QjtBQUNBO0FBQ0E7O0FBRWUsOERBQUssRTs7Ozs7Ozs7Ozs7OztBQ1ZwQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDRDQUE0Qzs7QUFFNUM7Ozs7Ozs7Ozs7Ozs7O0FDbkJlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxFOzs7Ozs7Ozs7Ozs7OztBQ2xCRDtBQUFBO0FBQW9DO0FBQ0E7O0FBRXBDLHNCQUFzQiwwREFBUzs7QUFFL0I7QUFDQTtBQUNBLGtCQUFrQiwwREFBUzs7QUFFM0I7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLDBEQUFTOztBQUU5QixXQUFXO0FBQ1gsR0FBRztBQUNIO0FBQ0EscUJBQXFCLDBEQUFTOztBQUU5QjtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QztBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBO0FBQ0EsYUFBYTtBQUNiLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNlLGtFQUFTLEU7Ozs7Ozs7Ozs7Ozs7QUNwRXhCO0FBQW9DOztBQUVwQyx3QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEc7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsc0I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxJQUFJO0FBQ0osRUFBRSxFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0Esa0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdURBQXVELDBEQUFTO0FBQ2hFO0FBQ0EsS0FBSyxjO0FBQ0wsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFZSxrRUFBUyxFOzs7Ozs7Ozs7Ozs7O0FDckZ4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXNDO0FBQ0Y7QUFDQTtBQUNuQjs7QUFFakI7QUFDQSxhQUFhLDBEQUFTO0FBQ3RCLGFBQWEsMERBQVM7QUFDdEI7O0FBRWUsOEVBQUksRUFBQzs7Ozs7Ozs7Ozs7OztBQ1ZwQjtBQUFBO0FBQXFDO0FBQ0E7O0FBRXJDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDBEQUFTLGVBQWUsMERBQVMsMkI7Ozs7Ozs7Ozs7OztBQ2JqQztBQUFBO0FBQXFDO0FBQ0E7O0FBRXJDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDBEQUFTLGVBQWUsMERBQVMsYTs7Ozs7Ozs7Ozs7O0FDYmpDO0FBQUE7QUFBQTtBQUFxQztBQUNBO0FBQ3NCOztBQUUzRCxpQkFBaUIseUZBQUU7O0FBRW5CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBLDBEQUFTLGVBQWUsMERBQVMsc0I7Ozs7Ozs7Ozs7OztBQ2pDakM7QUFBQTtBQUFxQztBQUNBOzs7QUFHckM7QUFDQSxRQUFRLDBEQUFTO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQSxTQUFTLDBEQUFTO0FBQ2xCO0FBQ0E7O0FBRUEsMERBQVMsZUFBZSwwREFBUyxpQjs7Ozs7Ozs7Ozs7O0FDL0JqQztBQUFBO0FBQUE7QUFBMkQ7QUFDdEI7QUFDQTs7QUFFckMsaUJBQWlCLHlGQUFFOztBQUVuQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUMsY0FBYztBQUNqRDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnRTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBLDBEQUFTLGVBQWUsMERBQVMsMkI7Ozs7Ozs7Ozs7OztBQ3ZDakM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXFDO0FBQ0E7QUFDc0I7QUFDa0I7OztBQUc3RSxpQkFBaUIseUZBQUU7QUFDbkIsMkNBQTJDLFNBQUk7O0FBRS9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRiw2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDLGtHQUFXO0FBQ3RELElBQUksMkI7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlDO0FBQ0EsS0FBSztBQUNMLElBQUk7QUFDSixFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsRUFBRTtBQUNGOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0YsOEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBLEtBQUssa0dBQVc7O0FBRWhCO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7O0FBRUEsMERBQVMsZUFBZSwwREFBUzs7Ozs7Ozs7Ozs7Ozs7QUN0RmpDO0FBQUE7QUFBQTtBQUFBO0FBQTJEO0FBQ3RCO0FBQ0E7QUFDd0M7O0FBRTdFLGlCQUFpQix5RkFBRTtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixXQUFXLGE7QUFDaEMsc0JBQXNCLGtHQUFXLFNBQVM7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsMERBQVM7QUFDN0I7QUFDQTtBQUNBLFFBQVE7QUFDUjs7QUFFQTtBQUNBLEVBQUUsRTtBQUNGOztBQUVBO0FBQ0E7QUFDQSxpQjs7QUFFQSxpQkFBaUIsa0dBQVcsU0FBUztBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBLEtBQUssRTtBQUNMOztBQUVBLDBFO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0Y7QUFDQSxFQUFFO0FBQ0Y7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCLGtHQUFXLFNBQVM7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sRTtBQUNQOztBQUVBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkg7QUFDQSxFQUFFO0FBQ0Y7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtRTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRiw4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixRQUFROztBQUVSO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHVCO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSwwREFBUyxlQUFlLDBEQUFTLHFCOzs7Ozs7Ozs7Ozs7QUMxTGpDO0FBQUE7QUFBQTtBQUEyRDtBQUN0QjtBQUNBOztBQUVyQyxpQkFBaUIseUZBQUU7QUFDbkI7QUFDQTtBQUNBO0FBQ0EsNkI7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBLDBEQUFTLGVBQWUsMERBQVMsa0I7Ozs7Ozs7Ozs7OztBQ3hCakM7QUFBQTtBQUFBO0FBQUE7QUFBcUM7QUFDQTtBQUNzQjtBQUNrQjs7QUFFN0UsaUJBQWlCLHlGQUFFO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isa0dBQVc7O0FBRTdCO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBLElBQUk7QUFDSixXQUFXLDBEQUFTO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQSxLQUFLO0FBQ0wsSUFBSTtBQUNKLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUEsMERBQVMsZUFBZSwwREFBUyxnQjs7Ozs7Ozs7Ozs7O0FDekRqQztBQUFBO0FBQUE7QUFBQTtBQUEyRDtBQUN0QjtBQUNBO0FBQ1U7O0FBRS9DLGlCQUFpQix5RkFBRTs7QUFFbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpQkFBaUIsa0VBQVcsaUM7QUFDNUI7QUFDQSxpQkFBaUIsa0VBQVc7OztBQUc1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0EsTUFBTSxFOztBQUVOO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBLDBEQUFTLGVBQWUsMERBQVMsZ0I7Ozs7Ozs7Ozs7OztBQzNGakM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBaUI7QUFDTztBQUNIO0FBQ0g7QUFDRjtBQUNHO0FBQ0w7QUFDSztBQUNIOzs7Ozs7Ozs7Ozs7OztBQ1JoQjtBQUE2RTs7QUFFN0U7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUJBQWlCLGtHQUFXLFNBQVMsbUJBQW1COztBQUV4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLGtHQUFXLFNBQVMsbUJBQW1CO0FBQ3hEO0FBQ0E7QUFDQSxpQkFBaUIsa0JBQWtCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBLGlCQUFpQixjQUFjO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixpQkFBaUI7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBLHlCQUF5QixTQUFTO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSixnQkFBZ0I7QUFDaEIsSUFBSTtBQUNKLGdCQUFnQjtBQUNoQixJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDZSxvRUFBVyxFIiwiZmlsZSI6ImRlZmF1bHRqcy10ZW1wbGF0ZS1sYW5ndWFnZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vYnJvd3Nlci1pbmRleC5qc1wiKTtcbiIsImltcG9ydCB7Q29uc3RhbnRzLCBQcm9jZXNzb3J9IGZyb20gXCIuL3NyY1wiXHJcblxyXG5jb25zdCBnbG9iYWwgPSB3aW5kb3cgfHwgZ2xvYmFsIHx8IHNlbGYgfHwgdGhpcyB8fCB7fTtcclxuZ2xvYmFsLmRlZmF1bHRqcyA9IGdsb2JhbC5kZWZhdWx0anMgfHwge307XHJcbmdsb2JhbC5kZWZhdWx0anMudGwgPSBnbG9iYWwuZGVmYXVsdGpzLnRsIHx8IHtcclxuXHRWRVJTSU9OIDogXCIke3ZlcnNpb259XCIsXHJcblx0Q29uc3RhbnRzIDogQ29uc3RhbnRzLFxyXG5cdFByb2Nlc3NvciA6IFByb2Nlc3NvclxyXG59OyIsIlxyXG4vKipcclxuICogYXBwZW5kIGEgcHJvcGVyeSB2YWx1ZSB0byBhbiBvYmplY3QuIElmIHByb3BlcnkgZXhpc3RzIGl0cyB3b3VsZCBiZSBjb252ZXJ0ZWQgdG8gYW4gYXJyYXlcclxuICogXHJcbiAqICBAcGFyYW0gYUtleTpzdHJpbmcgbmFtZSBvZiBwcm9wZXJ0eVxyXG4gKiAgQHBhcmFtIGFEYXRhOmFueSBwcm9wZXJ0eSB2YWx1ZVxyXG4gKiAgQHBhcmFtIGFPYmplY3Q6b2JqZWN0IHRoZSBvYmplY3QgdG8gYXBwZW5kIHRoZSBwcm9wZXJ0eVxyXG4gKiAgXHJcbiAqICBAcmV0dXJuIHJldHVybnMgdGhlIGNoYW5nZWQgb2JqZWN0XHJcbiAqL1xyXG5jb25zdCBhcHBlbmQgPSBmdW5jdGlvbihhS2V5LCBhRGF0YSwgYU9iamVjdCl7XHJcblx0aWYodHlwZW9mIGFEYXRhICE9PSBcInVuZGVmaW5lZFwiKXtcdFx0XHJcblx0XHRsZXQga2V5ID0gYUtleS50b0xvd2VyQ2FzZSgpLnRyaW0oKTtcdFxyXG5cdFx0aWYodHlwZW9mIGFPYmplY3Rba2V5XSA9PT0gXCJ1bmRlZmluZWRcIilcclxuXHRcdFx0YU9iamVjdFtrZXldID0gYURhdGE7XHJcblx0XHRlbHNle1x0XHRcclxuXHRcdFx0bGV0IGRhdGEgPSBhT2JqZWN0W2tleV07XHJcblx0XHRcdGlmKGRhdGEgaW5zdGFuY2VvZiBBcnJheSlcclxuXHRcdFx0XHRkYXRhLnB1c2goYURhdGEpO1xyXG5cdFx0XHRlbHNlXHJcblx0XHRcdFx0YU9iamVjdFtrZXldID0gW2FPYmplY3Rba2V5XSwgYURhdGFdO1xyXG5cdFx0fVxyXG5cdH1cdFxyXG5cdHJldHVybiBhT2JqZWN0O1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIGNoZWNrZWQgaWYgYW4gb2JqZWN0IGEgc2ltcGxlIG9iamVjdC4gTm8gQXJyYXksIE1hcCBvciBzb21ldGhpbmcgZWxzZS5cclxuICogXHJcbiAqIEBwYXJhbSBhT2JqZWN0Om9iamVjdCB0aGUgb2JqZWN0IHRvIGJlIHRlc3RpbmdcclxuICogXHJcbiAqIEByZXR1cm4gYm9vbGVhblxyXG4gKi9cclxuY29uc3QgaXNQb2pvID0gZnVuY3Rpb24oYU9iamVjdCl7XHJcblx0cmV0dXJuIHR5cGVvZiBhT2JqZWN0ICE9PSBcInVuZGVmaW5lZFwiICYmIGFPYmplY3QgIT0gbnVsbCAmJiBhT2JqZWN0LmNvbnN0cnVjdG9yLm5hbWUgPT09IFwiT2JqZWN0XCJcclxufVxyXG5cclxuLyoqXHJcbiAqIG1lcmdpbmcgb2JqZWN0IGludG8gYSB0YXJnZXQgb2JqZWN0LiBJdHMgb25seSBtZXJnZSBzaW1wbGUgb2JqZWN0IGFuZCBzdWIgb2JqZWN0cy4gRXZlcnkgb3RoZXIgXHJcbiAqIHZhbHVlIHdvdWxkIGJlIHJlcGxhY2VkIGJ5IHZhbHVlIGZyb20gdGhlIHNvdXJjZSBvYmplY3QuXHJcbiAqIFxyXG4gKiBzYW1wbGU6IG1lcmdlKHRhcmdldCwgc291cmNlLTEsIHNvdXJjZS0yLCAuLi5zb3VyY2UtbilcclxuICogXHJcbiAqIEBwYXJhbSBhVGFyZ2V0Om9iamVjdCB0aGUgdGFyZ2V0IG9iamVjdCB0byBtZXJnaW5nIGludG9cclxuICogQHBhcmFtIGFTb3VyY2VzOm9iamVjdFxyXG4gKiBcclxuICogQHJldHVybiBvYmplY3QgcmV0dXJucyB0aGUgdGFyZ2V0IG9iamVjdFxyXG4gKi9cclxuY29uc3QgbWVyZ2UgPSBmdW5jdGlvbihhVGFyZ2V0KXtcdFxyXG5cdGZvcihsZXQgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspe1xyXG5cdFx0Y29uc3Qgc291cmNlID0gYXJndW1lbnRzW2ldO1xyXG5cdFx0T2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoc291cmNlKS5mb3JFYWNoKGZ1bmN0aW9uKGFLZXkpe1xyXG5cdFx0XHRpZihpc1Bvam8oYVRhcmdldFthS2V5XSkpXHJcblx0XHRcdFx0bWVyZ2UoYVRhcmdldFthS2V5XSwgc291cmNlW2FLZXldKTtcclxuXHRcdFx0ZWxzZVxyXG5cdFx0XHRcdGFUYXJnZXRbYUtleV0gPSBzb3VyY2VbYUtleV07XHJcblx0XHR9KTtcclxuXHR9XHJcblx0XHJcblx0cmV0dXJuIGFUYXJnZXQ7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuXHRpc1Bvam8gOiBpc1Bvam8sXHJcblx0YXBwZW5kOiBhcHBlbmQsXHJcblx0bWVyZ2UgOiBtZXJnZVxyXG59OyIsImltcG9ydCBwYWNrIGZyb20gXCIuL3NyY1wiO1xuXG5leHBvcnQgZGVmYXVsdCBwYWNrOyIsImNvbnN0IEVYUFJFU1NJT04gPSAvXFwkXFx7KFteXFx7XFx9XSspXFx9LztcclxuXHJcbmNvbnN0IGV4ZWN1dGUgPSBmdW5jdGlvbihhU3RhdGVtZW50LCBhQ29udGV4dCwgYURlZmF1bHQsIGFUaW1lb3V0KSB7XHJcblx0XHRpZih0eXBlb2YgYVRpbWVvdXQgPT09IFwibnVtYmVyXCIgJiYgYVRpbWVvdXQgPiAwKVxyXG5cdFx0XHRyZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSl7XHJcblx0XHRcdFx0c2V0VGltZW91dChmdW5jdGlvbigpe1xyXG5cdFx0XHRcdFx0cmVzb2x2ZShleGVjdXRlKGFTdGF0ZW1lbnQsIGFDb250ZXh0LCBhRGVmYXVsdCkpO1xyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9KTtcclxuXHRcdFxyXG5cdCAgICBpZiAodHlwZW9mIGFTdGF0ZW1lbnQgIT09IFwic3RyaW5nXCIpXHJcblx0XHQgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShhU3RhdGVtZW50KTtcclxuXHQgICAgXHJcblx0ICAgIGxldCBzdGF0ZW1lbnQgPSBhU3RhdGVtZW50LnRyaW0oKTtcdFx0XHQgICAgXHJcblx0ICAgIGlmKHN0YXRlbWVudC5sZW5ndGggPT0gMClcclxuXHQgICAgXHRyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGFEZWZhdWx0KTtcclxuXHQgICAgdHJ5e1xyXG5cdFx0ICAgIGNvbnN0IGV4cHJlc3Npb24gPSBuZXcgRnVuY3Rpb24oXCJhQ29udGV4dFwiLCBcInRyeXtcIiArXHJcblx0XHQgICAgXHRcdFwiXHR3aXRoKGFDb250ZXh0IHx8IHdpbmRvdyB8fCBnbG9iYWwgfHwgc2VsZiB8fCB0aGlzKXtcIiArXHJcblx0XHQgICAgXHRcdFwiXHRcdHJldHVybiBQcm9taXNlLnJlc29sdmUoXCIgKyBzdGF0ZW1lbnQgKyBcIik7XCIgK1xyXG5cdFx0ICAgIFx0XHRcIlx0fVwiICtcclxuXHRcdCAgICBcdFx0XCJ9Y2F0Y2goZSl7XCIgK1xyXG5cdFx0ICAgIFx0XHRcIlx0dGhyb3cgZTtcIiArXHJcblx0XHQgICAgXHRcdFwifVwiKTtcclxuXHRcdCAgICByZXR1cm4gZXhwcmVzc2lvbihhQ29udGV4dClcclxuXHRcdCAgICAudGhlbihmdW5jdGlvbihhUmVzdWx0KXtcclxuXHRcdCAgICBcdGlmKHR5cGVvZiBhUmVzdWx0ID09PSBcInVuZGVmaW5lZFwiKVxyXG5cdFx0ICAgIFx0XHRyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGFEZWZhdWx0KTtcclxuXHRcdCAgICBcdFxyXG5cdFx0ICAgIFx0cmV0dXJuIFByb21pc2UucmVzb2x2ZShhUmVzdWx0KTtcclxuXHRcdCAgICB9KVtcImNhdGNoXCJdKGZ1bmN0aW9uKGFFcnJvcil7XHJcblx0XHRcdFx0cmV0dXJuIFByb21pc2UucmVqZWN0KGFFcnJvcik7XHJcblx0XHQgICAgfSlcclxuXHRcdH1jYXRjaChlKXtcclxuXHRcdFx0cmV0dXJuIFByb21pc2UucmVqZWN0KGUpO1xyXG5cdFx0fVxyXG59O1xyXG5cclxuY29uc3QgcmVzb2x2ZSA9IGZ1bmN0aW9uKGFFeHByZXNzaW9uLCBhRGF0YUNvbnRleHQsIGFEZWZhdWx0LCBhVGltZW91dCkge1xyXG5cdGNvbnN0IG1hdGNoID0gRVhQUkVTU0lPTi5leGVjKGFFeHByZXNzaW9uKTtcclxuXHRpZiAobWF0Y2gpXHJcblx0XHRyZXR1cm4gZXhlY3V0ZShtYXRjaFsxXSwgYURhdGFDb250ZXh0LCBhRGVmYXVsdCwgYVRpbWVvdXQpO1xyXG5cdFxyXG5cdHJldHVybiBleGVjdXRlKGFFeHByZXNzaW9uLCBhRGF0YUNvbnRleHQsIGFEZWZhdWx0LCBhVGltZW91dCk7XHJcbn07XHJcblxyXG5jb25zdCByZXNvbHZlVGV4dCA9IGZ1bmN0aW9uKGFUZXh0LCBhQ29udGV4dCwgYURlZmF1bHQsIGFUaW1lb3V0KSB7XHJcblx0aWYodHlwZW9mIGFUaW1lb3V0ID09PSBcIm51bWJlclwiICYmIGFUaW1lb3V0ID4gMClcclxuXHRcdHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlKXtcclxuXHRcdFx0c2V0VGltZW91dChmdW5jdGlvbigpe1xyXG5cdFx0XHRcdHJlc29sdmUocmVzb2x2ZVRleHQoYVRleHQsIGFDb250ZXh0LCBhRGVmYXVsdCkpO1xyXG5cdFx0XHR9KTtcclxuXHRcdH0pO1xyXG5cdFxyXG5cdFxyXG5cdGNvbnN0IG1hdGNoID0gRVhQUkVTU0lPTi5leGVjKGFUZXh0KTtcclxuXHRpZihtYXRjaCAhPSBudWxsKVxyXG5cdFx0cmV0dXJuIGV4ZWN1dGUobWF0Y2hbMV0sIGFDb250ZXh0LCBhRGVmYXVsdClcclxuXHRcdC50aGVuKGZ1bmN0aW9uKGFSZXN1bHQpe1xyXG5cdFx0XHRyZXR1cm4gcmVzb2x2ZVRleHQoYVRleHQuc3BsaXQobWF0Y2hbMF0pLmpvaW4oYVJlc3VsdCksIGFDb250ZXh0LCBhRGVmYXVsdCk7XHJcblx0XHR9KTtcclxuXHRcclxuXHRyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGFUZXh0KTtcclxufTtcclxuXHJcbmNvbnN0IEV4cHJlc3Npb25SZXNvbHZlciA9IHtcclxuXHRcdHJlc29sdmUgOiByZXNvbHZlLFxyXG5cdFx0cmVzb2x2ZVRleHQgOiByZXNvbHZlVGV4dFxyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBFeHByZXNzaW9uUmVzb2x2ZXI7IiwiaW1wb3J0IEV4cHJlc3Npb25SZXNvbHZlciBmcm9tIFwiLi9FeHByZXNzaW9uUmVzb2x2ZXJcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuXHRFeHByZXNzaW9uUmVzb2x2ZXI6RXhwcmVzc2lvblJlc29sdmVyXHJcbn07IiwiaW1wb3J0IFwiLi9zcmMvaW5kZXhcIjsiLCJpbXBvcnQgVXRpbHMgZnJvbSBcIi4vdXRpbHMvVXRpbHNcIjtcclxuXHJcblV0aWxzLmdsb2JhbC5kZWZhdWx0anMgPSBVdGlscy5nbG9iYWwuZGVmYXVsdGpzIHx8IHt9O1xyXG5VdGlscy5nbG9iYWwuZGVmYXVsdGpzLmV4dGRvbSA9IFV0aWxzLmdsb2JhbC5kZWZhdWx0anMuZXh0ZG9tIHx8IHtcclxuXHRWRVJTSU9OIDogXCIke3ZlcnNpb259XCIsXHJcblx0dXRpbHMgOiB7XHJcblx0XHRVdGlsczogVXRpbHNcclxuXHR9XHJcbn07XHJcblxyXG5jb25zdCBwYXJzZXIgPSBuZXcgRE9NUGFyc2VyKCk7XHJcblxyXG5VdGlscy5nbG9iYWwuZmluZCA9IGZ1bmN0aW9uKCkge1xyXG5cdHJldHVybiBkb2N1bWVudC5maW5kLmFwcGx5KGRvY3VtZW50LCBhcmd1bWVudHMpO1xyXG59O1xyXG5cclxuVXRpbHMuZ2xvYmFsLnJlYWR5ID0gZnVuY3Rpb24oKSB7XHJcblx0cmV0dXJuIGRvY3VtZW50LnJlYWR5LmFwcGx5KGRvY3VtZW50LCBhcmd1bWVudHMpO1xyXG59O1xyXG5cclxuVXRpbHMuZ2xvYmFsLmNyZWF0ZSA9IGZ1bmN0aW9uKGFDb250ZW50LCBhQ29udGVudFR5cGUpIHtcclxuXHRpZiAodHlwZW9mIGFyZ3VtZW50c1swXSAhPT0gXCJzdHJpbmdcIilcclxuXHRcdHRocm93IG5ldyBFcnJvcihcIlRoZSBmaXJzdCBhcmd1bWVudCBtdXN0IGJlIGEgc3RyaW5nIVwiKTtcclxuXHJcblx0bGV0IHBhcnNlZCA9IHBhcnNlci5wYXJzZUZyb21TdHJpbmcoYXJndW1lbnRzWzBdLnRyaW0oKSwgYXJndW1lbnRzWzFdIHx8IFwidGV4dC9odG1sXCIpO1xyXG5cdGxldCBub2RlcyA9IHBhcnNlZC5ib2R5LmNoaWxkTm9kZXM7XHJcblx0bGV0IGZyYWcgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7XHJcblx0ZnJhZy5hcHBlbmQobm9kZXMpO1xyXG5cdHJldHVybiBmcmFnLmNoaWxkTm9kZXM7XHJcbn07IiwiaW1wb3J0IGV4dGVuZFByb3RvdHlwZSBmcm9tIFwiLi4vdXRpbHMvRXh0ZW5kUHJvdG90eXBlXCI7XHJcbmltcG9ydCBRdWVyeVN1cHBvcnQgZnJvbSBcIi4vZXh0ZW50aW9ucy9RdWVyeVN1cHBvcnRcIjtcclxuaW1wb3J0IFJlYWR5RXZlbnRTdXBwb3J0IGZyb20gXCIuL2V4dGVudGlvbnMvUmVhZHlFdmVudFN1cHBvcnRcIjtcclxuXHJcbmV4dGVuZFByb3RvdHlwZShEb2N1bWVudCwgUXVlcnlTdXBwb3J0LCBSZWFkeUV2ZW50U3VwcG9ydCk7XHJcblxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBmdW5jdGlvbigpe1xyXG5cdGRvY3VtZW50LnRyaWdnZXIoXCJyZWFkeVwiKTtcclxufSk7XHJcblxyXG5cclxuXHJcbiIsImltcG9ydCBleHRlbmRQcm90b3R5cGUgZnJvbSBcIi4uL3V0aWxzL0V4dGVuZFByb3RvdHlwZVwiO1xyXG5pbXBvcnQgUXVlcnlTdXBwb3J0IGZyb20gXCIuL2V4dGVudGlvbnMvUXVlcnlTdXBwb3J0XCI7XHJcbmltcG9ydCBNYW5pcHVsYXRpb25TdXBwb3J0IGZyb20gXCIuL2V4dGVudGlvbnMvTWFuaXB1bGF0aW9uU3VwcG9ydFwiO1xyXG5cclxuZXh0ZW5kUHJvdG90eXBlKERvY3VtZW50RnJhZ21lbnQsIFF1ZXJ5U3VwcG9ydCwgTWFuaXB1bGF0aW9uU3VwcG9ydCk7XHJcblxyXG5cclxuXHJcblxyXG4iLCJpbXBvcnQgZXh0ZW5kUHJvdG90eXBlIGZyb20gXCIuLi91dGlscy9FeHRlbmRQcm90b3R5cGVcIjtcclxuaW1wb3J0IFF1ZXJ5U3VwcG9ydCBmcm9tIFwiLi9leHRlbnRpb25zL1F1ZXJ5U3VwcG9ydFwiO1xyXG5pbXBvcnQgQXR0cmlidXRlU3VwcG9ydCBmcm9tIFwiLi9leHRlbnRpb25zL0F0dHJpYnV0ZVN1cHBvcnRcIjtcclxuaW1wb3J0IE1hbmlwdWxhdGlvblN1cHBvcnQgZnJvbSBcIi4vZXh0ZW50aW9ucy9NYW5pcHVsYXRpb25TdXBwb3J0XCI7XHJcblxyXG5leHRlbmRQcm90b3R5cGUoRWxlbWVudCxRdWVyeVN1cHBvcnQsIEF0dHJpYnV0ZVN1cHBvcnQsIE1hbmlwdWxhdGlvblN1cHBvcnQpO1xyXG4vL1xyXG4vL0VsZW1lbnQucHJvdG90eXBlLnZhbCA9IGZ1bmN0aW9uKCkge1xyXG4vL1x0bGV0IHJlc3VsdCA9IG5ldyBNYXAoKTtcdFx0XHJcbi8vXHRsZXQgaW5wdXRzID0gdGhpcy5maW5kKFwiaW5wdXRcIiwgXCJzZWxlY3RcIiwgXCJ0ZXh0YXJlYVwiKTtcclxuLy9cdGlmKGlucHV0cyl7XHRcclxuLy9cdFx0aW5wdXRzLmZvckVhY2goZnVuY3Rpb24obm9kZSl7XHJcbi8vXHRcdFx0bGV0IHZhbHVlID0gbm9kZS52YWwoKTtcclxuLy9cdFx0XHRpZih0eXBlb2YgdmFsdWUgIT09IFwidW5kZWZpbmVkXCIgJiYgdmFsdWUgIT0gbnVsbClcclxuLy9cdFx0XHRcdHJlc3VsdC5zZXQoKG5vZGUubmFtZSB8fCBub2RlLmlkIHx8IG5vZGUuc2VsZWN0b3IoKSksIG5vZGUudmFsKCkpO1xyXG4vL1x0XHR9KTtcdFxyXG4vL1x0XHRyZXR1cm4gcmVzdWx0O1xyXG4vL1x0fVxyXG4vL307IiwiaW1wb3J0IGV4dGVuZFByb3RvdHlwZSBmcm9tIFwiLi4vdXRpbHMvRXh0ZW5kUHJvdG90eXBlXCI7XG5pbXBvcnQgRXZlbnRTdXBwb3J0IGZyb20gXCIuL2V4dGVudGlvbnMvRXZlbnRTdXBwb3J0XCI7XG5cbmV4dGVuZFByb3RvdHlwZShFdmVudFRhcmdldCwgRXZlbnRTdXBwb3J0KTsiLCJpbXBvcnQgZXh0ZW5kUHJvdG90eXBlIGZyb20gXCIuLi91dGlscy9FeHRlbmRQcm90b3R5cGVcIjtcclxuaW1wb3J0IEh0bWxDbGFzc1N1cHBvcnQgZnJvbSBcIi4vZXh0ZW50aW9ucy9IdG1sQ2xhc3NTdXBwb3J0XCI7XHJcbmltcG9ydCBTaG93SGlkZVN1cHBvcnQgZnJvbSBcIi4vZXh0ZW50aW9ucy9TaG93SGlkZVN1cHBvcnRcIjtcclxuXHJcblxyXG5leHRlbmRQcm90b3R5cGUoSFRNTEVsZW1lbnQsIEh0bWxDbGFzc1N1cHBvcnQsIFNob3dIaWRlU3VwcG9ydCk7IiwiaW1wb3J0IGV4dGVuZFByb3RvdHlwZSBmcm9tIFwiLi4vdXRpbHMvRXh0ZW5kUHJvdG90eXBlXCI7XHJcbmltcG9ydCBWYWx1ZVN1cHBvcnQgZnJvbSBcIi4vZXh0ZW50aW9ucy9WYWx1ZVN1cHBvcnRcIjtcclxuXHJcblxyXG5leHRlbmRQcm90b3R5cGUoSFRNTElucHV0RWxlbWVudCxWYWx1ZVN1cHBvcnQpOyIsImltcG9ydCBleHRlbmRQcm90b3R5cGUgZnJvbSBcIi4uL3V0aWxzL0V4dGVuZFByb3RvdHlwZVwiO1xyXG5pbXBvcnQgVmFsdWVTdXBwb3J0IGZyb20gXCIuL2V4dGVudGlvbnMvVmFsdWVTdXBwb3J0XCI7XHJcblxyXG5cclxuZXh0ZW5kUHJvdG90eXBlKEhUTUxTZWxlY3RFbGVtZW50LFZhbHVlU3VwcG9ydCk7IiwiaW1wb3J0IGV4dGVuZFByb3RvdHlwZSBmcm9tIFwiLi4vdXRpbHMvRXh0ZW5kUHJvdG90eXBlXCI7XHJcbmltcG9ydCBFeHRlbmRlciBmcm9tIFwiLi4vdXRpbHMvRXh0ZW5kZXJcIjtcclxuXHJcblxyXG5leHRlbmRQcm90b3R5cGUoSFRNTFRleHRBcmVhRWxlbWVudCxFeHRlbmRlcihcIlZhbHVlU3VwcG9ydFwiLCBmdW5jdGlvbihQcm90b3R5cGUpIHtcdFxyXG5cdFByb3RvdHlwZS52YWwgPSBmdW5jdGlvbigpIHtcclxuXHRcdGlmKGFyZ3VtZW50cy5sZW5ndGggPT0gMClcclxuXHRcdFx0cmV0dXJuIHRoaXMudmFsdWU7XHJcblx0XHRlbHNlXHJcblx0XHRcdHRoaXMudmFsdWUgPSBhcmd1bWVudHNbMF1cclxuXHRcdFx0XHJcblx0XHRyZXR1cm4gdGhpcztcclxuXHR9O1x0XHJcbn0pKTsiLCJpbXBvcnQgZXh0ZW5kUHJvdG90eXBlIGZyb20gXCIuLi91dGlscy9FeHRlbmRQcm90b3R5cGVcIjtcclxuaW1wb3J0IERhdGFTdXBwb3J0IGZyb20gXCIuL2V4dGVudGlvbnMvRGF0YVN1cHBvcnRcIjtcclxuaW1wb3J0IE1hbmlwdWxhdGlvblN1cHBvcnQgZnJvbSBcIi4vZXh0ZW50aW9ucy9NYW5pcHVsYXRpb25TdXBwb3J0XCI7XHJcblxyXG5leHRlbmRQcm90b3R5cGUoTm9kZSxEYXRhU3VwcG9ydCxNYW5pcHVsYXRpb25TdXBwb3J0KTsiLCJpbXBvcnQgZXh0ZW5kUHJvdG90eXBlIGZyb20gXCIuLi91dGlscy9FeHRlbmRQcm90b3R5cGVcIjtcclxuaW1wb3J0IERlbGVnYXRlckJ1aWxkZXIgZnJvbSBcIi4uL3V0aWxzL0RlbGVnYXRlckJ1aWxkZXJcIjtcclxuaW1wb3J0IExpc3RTdXBwb3J0IGZyb20gXCIuL2V4dGVudGlvbnMvTGlzdFN1cHBvcnRcIjtcclxuXHJcbmV4dGVuZFByb3RvdHlwZShOb2RlTGlzdCwgTGlzdFN1cHBvcnQpO1xyXG5cclxuTm9kZUxpc3QucHJvdG90eXBlLmFwcGx5VG8gPSBmdW5jdGlvbigpe1xyXG5cdGxldCBhcmdzID0gQXJyYXkuZnJvbShhcmd1bWVudHMpO1xyXG5cdGxldCBjYWxsaW5nID0gYXJncy5zaGlmdCgpO1xyXG5cdGxldCBpc0Z1bmN0aW9uID0gdHlwZW9mIGNhbGxpbmcgPT09IFwiZnVuY3Rpb25cIjtcclxuXHRsZXQgcmVzdWx0cyA9IFtdO1xyXG5cdGZvcihsZXQgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKXtcclxuXHRcdGxldCBub2RlID0gdGhpc1tpXTtcclxuXHRcdGxldFx0cmVzdWx0O1xyXG5cdFx0aWYoaXNGdW5jdGlvbilcclxuXHRcdFx0cmVzdWx0ID0gY2FsbGluZy5hcHBseShbbm9kZV0uY29uY2F0KGFyZ3MpKTtcclxuXHRcdGVsc2UgaWYodHlwZW9mIG5vZGVbY2FsbGluZ10gPT09IFwiZnVuY3Rpb25cIilcclxuXHRcdFx0cmVzdWx0ID0gbm9kZVtjYWxsaW5nXS5hcHBseShub2RlLCBhcmdzKTtcclxuXHRcdFxyXG5cdFx0aWYocmVzdWx0KVxyXG5cdFx0XHRyZXN1bHRzLnB1c2gocmVzdWx0KTtcclxuXHR9XHJcblx0XHJcblx0cmV0dXJuIHJlc3VsdHM7XHJcbn07XHJcblxyXG5Ob2RlTGlzdC5wcm90b3R5cGUudmFsID0gZnVuY3Rpb24oKSB7XHJcblx0aWYoYXJndW1lbnRzLmxlbmd0aCA9PSAwKXtcclxuXHRcdGlmKHRoaXMubGVuZ3RoID4gMCl7XHJcblx0XHRcdGxldCByZXN1bHQgPSBuZXcgTWFwKCk7XHJcblx0XHRcdHRoaXMuZm9yRWFjaChmdW5jdGlvbihub2RlKXtcclxuXHRcdFx0XHRpZih0eXBlb2Ygbm9kZS52YWwgPT09IFwiZnVuY3Rpb25cIil7XHJcblx0XHRcdFx0XHRsZXQgdmFsdWUgPSBub2RlLnZhbCgpO1xyXG5cdFx0XHRcdFx0aWYodmFsdWUpXHJcblx0XHRcdFx0XHRcdHJlc3VsdC5zZXQoKG5vZGUubmFtZSB8fCBub2RlLmlkIHx8IG5vZGUuc2VsZWN0b3IoKSksIG5vZGUudmFsKCkpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSk7XHRcclxuXHRcdFx0cmV0dXJuIHJlc3VsdDtcclxuXHRcdH1cclxuXHR9XHJcblx0ZWxzZVxyXG5cdFx0Tm9kZUxpc3QucHJvdG90eXBlLmFwcGx5VG8uYXBwbHkodGhpcywgW1widmFsXCJdLmNvbmNhdChBcnJheS5mcm9tKGFyZ3VtZW50cykpKTtcclxufTtcclxuXHJcbk5vZGVMaXN0LmZyb20gPSBmdW5jdGlvbigpe1xyXG5cdGxldCBhcmdzID0gQXJyYXkuZnJvbShhcmd1bWVudHMpO1xyXG5cdGxldCBkYXRhID0ge307XHJcblx0bGV0IGNvdW50ZXIgPSAwO1xyXG5cdFxyXG5cdHdoaWxlKGFyZ3MubGVuZ3RoID4gMCl7XHJcblx0XHRsZXQgYXJnID0gYXJncy5zaGlmdCgpO1xyXG5cdFx0aWYodHlwZW9mIGFyZyAhPT0gXCJ1bmRlZmluZWRcIiAmJiBhcmcgIT0gbnVsbCl7XHJcblx0XHRcdGlmKGFyZyBpbnN0YW5jZW9mIE5vZGUpXHJcblx0XHRcdFx0ZGF0YVtjb3VudGVyKytdID0ge3ZhbHVlOiBhcmcsIGVudW1lcmFibGU6IHRydWV9O1xyXG5cdFx0XHRlbHNlIGlmKGFyZyBpbnN0YW5jZW9mIE5vZGVMaXN0IHx8IEFycmF5LmlzQXJyYXkoYXJnKSl7XHJcblx0XHRcdFx0Zm9yKGxldCBpID0gMDsgaSA8IGFyZy5sZW5ndGg7IGkrKyl7XHJcblx0XHRcdFx0XHRpZihhcmdbaV0gJiYgYXJnW2ldIGluc3RhbmNlb2YgTm9kZSl7XHJcblx0XHRcdFx0XHRcdGRhdGFbY291bnRlcisrXSA9IHt2YWx1ZTogYXJnW2ldLCBlbnVtZXJhYmxlOiB0cnVlfTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcblx0XHJcblx0ZGF0YS5sZW5ndGggPSB7dmFsdWU6IGNvdW50ZXJ9O1xyXG5cdHJldHVybiAgT2JqZWN0LmNyZWF0ZShOb2RlTGlzdC5wcm90b3R5cGUsIGRhdGEpO1xyXG59O1xyXG5cclxuXHJcbkRlbGVnYXRlckJ1aWxkZXIoZnVuY3Rpb24oYUZ1bmN0aW9uTmFtZSwgdGhlQXJndW1lbnRzKXtcclxuXHRsZXQgcmVzdWx0cyA9IFtdO1x0XHJcblx0dGhpcy5mb3JFYWNoKGZ1bmN0aW9uKG5vZGUpe1xyXG5cdFx0aWYobm9kZSAmJiB0eXBlb2Ygbm9kZVthRnVuY3Rpb25OYW1lXSA9PT0gXCJmdW5jdGlvblwiKXtcclxuXHRcdFx0bGV0IHJlc3VsdCA9IG5vZGVbYUZ1bmN0aW9uTmFtZV0uYXBwbHkobm9kZSwgdGhlQXJndW1lbnRzKTtcclxuXHRcdFx0aWYocmVzdWx0KXsgXHJcblx0XHRcdFx0aWYocmVzdWx0IGluc3RhbmNlb2YgTm9kZUxpc3QpXHJcblx0XHRcdFx0XHRyZXN1bHRzID0gcmVzdWx0cy5jb25jYXQoQXJyYXkuZnJvbShyZXN1bHQpKTtcclxuXHRcdFx0XHRlbHNlXHJcblx0XHRcdFx0XHRyZXN1bHRzLnB1c2gocmVzdWx0KTtcclxuXHRcdFx0fVx0XHRcclxuXHRcdH1cclxuXHR9KTtcclxuXHRcclxuXHRpZihyZXN1bHRzLmxlbmd0aCA9PT0gMClcclxuXHRcdHJldHVybiB1bmRlZmluZWQ7XHJcblx0ZWxzZSBpZihyZXN1bHRzWzBdIGluc3RhbmNlb2YgTm9kZSB8fCByZXN1bHRzWzBdIGluc3RhbmNlb2YgTm9kZUxpc3QpXHJcblx0XHRyZXR1cm4gTm9kZUxpc3QuZnJvbS5hcHBseShudWxsLCByZXN1bHRzKTtcclxuXHRlbHNlXHJcblx0XHRyZXR1cm4gcmVzdWx0cztcclxufSxOb2RlTGlzdC5wcm90b3R5cGUsIE5vZGUucHJvdG90eXBlLCBIVE1MRWxlbWVudC5wcm90b3R5cGUsIEhUTUxJbnB1dEVsZW1lbnQucHJvdG90eXBlLCBFbGVtZW50LnByb3RvdHlwZSwgRXZlbnRUYXJnZXQucHJvdG90eXBlKTtcclxuIiwiaW1wb3J0IEV4dGVuZGVyIGZyb20gXCIuLi8uLi91dGlscy9FeHRlbmRlclwiO1xyXG5cclxuY29uc3Qgc3VwcG9ydCA9IEV4dGVuZGVyKFwiQXR0cmlidXRlU3VwcG9ydFwiLCBmdW5jdGlvbihQcm90b3R5cGUpIHtcclxuXHRQcm90b3R5cGUuYXR0ciA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0aWYgKGFyZ3VtZW50cy5sZW5ndGggPT0gMClcclxuXHRcdFx0cmV0dXJuIHRoaXMuaGFzQXR0cmlidXRlcygpID8gKGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdGxldCByZXN1bHQgPSB7fTtcclxuXHRcdFx0XHR0aGlzLmdldEF0dHJpYnV0ZU5hbWVzKCkuZm9yRWFjaCgoZnVuY3Rpb24ocmVzdWx0LCBuYW1lKSB7XHJcblx0XHRcdFx0XHRyZXN1bHRbbmFtZV0gPSB0aGlzLmdldEF0dHJpYnV0ZShuYW1lKTtcclxuXHRcdFx0XHR9KS5iaW5kKHRoaXMsIHJlc3VsdCkpO1xyXG5cdFx0XHRcdHJldHVybiByZXN1bHQ7XHJcblx0XHRcdH0pLmNhbGwodGhpcykgOiB1bmRlZmluZWQ7XHJcblx0XHRlbHNlIGlmIChhcmd1bWVudHMubGVuZ3RoID09IDEpXHJcblx0XHRcdHJldHVybiB0aGlzLmdldEF0dHJpYnV0ZShhcmd1bWVudHNbMF0pO1xyXG5cdFx0ZWxzZSBpZiAodHlwZW9mIGFyZ3VtZW50c1sxXSA9PT0gXCJ1bmRlZmluZWRcIiB8fCBhcmd1bWVudHNbMV0gPT0gbnVsbClcclxuXHRcdFx0dGhpcy5yZW1vdmVBdHRyaWJ1dGUoYXJndW1lbnRzWzBdKTtcclxuXHRcdGVsc2VcclxuXHRcdFx0dGhpcy5zZXRBdHRyaWJ1dGUoYXJndW1lbnRzWzBdLCBhcmd1bWVudHNbMV0pO1xyXG5cdFx0XHJcblx0XHRyZXR1cm4gdGhpcztcclxuXHR9O1xyXG59KTtcclxuZXhwb3J0IGRlZmF1bHQgc3VwcG9ydDsiLCJpbXBvcnQgRXh0ZW5kZXIgZnJvbSBcIi4uLy4uL3V0aWxzL0V4dGVuZGVyXCI7XHJcbmNvbnN0IHN1cHBvcnQgPSBFeHRlbmRlcihcIkRhdGFTdXBwb3J0XCIsIGZ1bmN0aW9uKFByb3RvdHlwZSkge1xyXG5cdFByb3RvdHlwZS5kYXRhID0gZnVuY3Rpb24oKSB7XHJcblx0XHRpZiAodHlwZW9mIHRoaXMuX19kYXRhX18gPT09IFwidW5kZWZpbmVkXCIpIHtcclxuXHRcdFx0dGhpcy5fX2RhdGFfXyA9IHt9O1xyXG5cdFx0XHRpZih0eXBlb2YgdGhpcy5kYXRhc2V0ICE9PSBcInVuZGVmaW5lZFwiKVxyXG5cdFx0XHRcdGZvciAobmFtZSBpbiB0aGlzLmRhdGFzZXQpXHJcblx0XHRcdFx0XHR0aGlzLl9fZGF0YV9fW25hbWVdID0gdGhpcy5kYXRhc2V0W25hbWVdO1xyXG5cdFx0fVxyXG5cclxuXHRcdGlmIChhcmd1bWVudHMubGVuZ3RoID09IDApXHJcblx0XHRcdHJldHVybiB0aGlzLl9fZGF0YV9fO1xyXG5cdFx0ZWxzZSBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PSAxKVxyXG5cdFx0XHRyZXR1cm4gdGhpcy5fX2RhdGFfX1thcmd1bWVudHNbMF1dIDtcclxuXHRcdGVsc2UgaWYgKHR5cGVvZiBhcmd1bWVudHNbMV0gPT09IFwidW5kZWZpbmVkXCIgfHwgYXJndW1lbnRzWzFdID09IG51bGwpXHJcblx0XHRcdGRlbGV0ZSB0aGlzLl9fZGF0YV9fW2FyZ3VtZW50c1swXV07XHJcblx0XHRlbHNlXHJcblx0XHRcdHRoaXMuX19kYXRhX19bYXJndW1lbnRzWzBdXSA9IGFyZ3VtZW50c1sxXTtcclxuXHRcdFxyXG5cdFx0cmV0dXJuIHRoaXM7XHJcblx0fTtcclxufSk7XHJcbmV4cG9ydCBkZWZhdWx0IHN1cHBvcnQ7IiwiaW1wb3J0IEV4dGVuZGVyIGZyb20gXCIuLi8uLi91dGlscy9FeHRlbmRlclwiO1xyXG5cclxuY29uc3Qgc3VwcG9ydCA9IEV4dGVuZGVyKFwiRXZlbnRTdXBwb3J0XCIsIGZ1bmN0aW9uKFByb3RvdHlwZSkge1xyXG5cdGNvbnN0IFdyYXBwZWRFdmVudEhhbmRsZXIgPSBmdW5jdGlvbihhQ29uZmlnLCBhQ2FsbGJhY2sgLGFFdmVudCl7XHJcblx0XHRpZih0eXBlb2YgYUNvbmZpZy5maWx0ZXIgIT09IFwidW5kZWZpbmVkXCIgJiYgIWFFdmVudC50YXJnZXQuaXMoYUNvbmZpZy5maWx0ZXIpKVx0XHRcclxuXHRcdFx0cmV0dXJuO1xyXG5cdFx0XHJcblx0XHRsZXQgYXJncyA9IFthRXZlbnRdO1xyXG5cdFx0aWYodHlwZW9mIGFDb25maWcuZGF0YSAhPT0gXCJ1bmRlZmluZWRcIilcclxuXHRcdFx0YXJncyA9IGFyZ3MuY29uY2F0KGFDb25maWcuZGF0YSk7XHJcblx0XHRcclxuXHRcdGxldCByZXN1bHQgPSBhQ2FsbGJhY2suYXBwbHkoYUNhbGxiYWNrLCBhcmdzKTtcclxuXHRcdGlmKGFDb25maWcuc2luZ2xlQ2FsbClcclxuXHRcdFx0dGhpcy5yZW1vdmVFdmVudExpc3RlbmVyKGFDYWxsYmFjayk7XHJcblx0XHRcclxuXHRcdHJldHVybiByZXN1bHQ7XHRcdFxyXG5cdH07XHJcblx0XHJcblx0XHJcblx0Y29uc3QgYWRkRXZlbnRMaXN0ZW5lciA9IFByb3RvdHlwZS5hZGRFdmVudExpc3RlbmVyO1xyXG5cdFByb3RvdHlwZS5hZGRFdmVudExpc3RlbmVyID0gZnVuY3Rpb24oKSB7XHJcblx0XHRpZiAoYXJndW1lbnRzLmxlbmd0aCA8IDIpXHJcblx0XHRcdHRocm93IG5ldyBFcnJvcihcIlRvbyBsZXNzIGFyZ3VtZW50cyFcIik7XHJcblxyXG5cdFx0dGhpcy5vbihhcmd1bWVudHNbMF0sIGFyZ3VtZW50c1sxXSk7XHJcblx0fTtcdFxyXG5cdFxyXG5cdFByb3RvdHlwZS5vbiA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0aWYgKGFyZ3VtZW50cy5sZW5ndGggPCAyKVxyXG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJUb28gbGVzcyBhcmd1bWVudHMhXCIpO1xyXG5cdFx0XHJcblx0XHRpZiAodHlwZW9mIHRoaXMuX19jYWxsYmFja01hcCA9PT0gXCJ1bmRlZmluZWRcIilcclxuXHRcdFx0dGhpcy5fX2NhbGxiYWNrTWFwID0ge307XHJcblxyXG5cdFx0bGV0IGFyZ3MgPSBBcnJheS5mcm9tKGFyZ3VtZW50cyk7XHJcblx0XHRsZXQgZXZlbnRzID0gYXJncy5zaGlmdCgpLnNwbGl0KC8oXFxzKyl8KFxccyosXFxzKikvKTtcclxuXHRcdGxldCBoYW5kbGVyQ29uZmlnID0ge1xyXG5cdFx0XHRmaWx0ZXIgOiAodHlwZW9mIGFyZ3NbMF0gPT09IFwic3RyaW5nXCIgPyBhcmdzLnNoaWZ0KCkuc3BsaXQoL1xccyosXFxzKi8pIDogdW5kZWZpbmVkKSxcclxuXHRcdFx0ZGF0YSA6ICh0eXBlb2YgYXJnc1swXSAhPT0gXCJmdW5jdGlvblwiID8gYXJncy5zaGlmdCgpIDogdW5kZWZpbmVkKVxyXG5cdFx0fTtcclxuXHQgICAgbGV0IGNhbGxiYWNrID0gYXJncy5zaGlmdCgpO1xyXG5cdCAgICBcclxuXHQgICAgaGFuZGxlckNvbmZpZy5zaW5nbGVDYWxsID0gKHR5cGVvZiBhcmdzWzBdICE9PSBcImJvb2xlYW5cIiA/IGFyZ3Muc2hpZnQoKSA6IGZhbHNlKTtcclxuXHJcblx0XHRsZXQgZXZlbnRNYXAgPSB7fTtcclxuXHRcdGV2ZW50cy5mb3JFYWNoKChmdW5jdGlvbihyZXN1bHQsIGNvbmZpZywgY2FsbGJhY2ssIGV2ZW50KXtcclxuXHRcdFx0bGV0IHdyYXBwZWRFdmVudEhhbmRsZXIgPSBXcmFwcGVkRXZlbnRIYW5kbGVyLmJpbmQodGhpcywgY29uZmlnLCBjYWxsYmFjayk7XHJcblx0XHRcdGV2ZW50TWFwW2V2ZW50XSA9IHdyYXBwZWRFdmVudEhhbmRsZXI7XHRcdFx0XHJcblx0XHRcdGFkZEV2ZW50TGlzdGVuZXIuY2FsbCh0aGlzLCBldmVudCwgd3JhcHBlZEV2ZW50SGFuZGxlciwgdHJ1ZSk7XHJcblx0XHRcdFxyXG5cdFx0fSkuYmluZCh0aGlzLCBldmVudE1hcCwgaGFuZGxlckNvbmZpZywgY2FsbGJhY2spKTtcclxuXHRcdFxyXG5cdFx0dGhpcy5fX2NhbGxiYWNrTWFwW2NhbGxiYWNrXSA9IGV2ZW50TWFwO1xyXG5cdFx0XHJcblx0XHRyZXR1cm4gdGhpcztcclxuXHR9O1x0XHJcblx0XHJcblx0Y29uc3QgcmVtb3ZlRXZlbnRMaXN0ZW5lciA9IFByb3RvdHlwZS5yZW1vdmVFdmVudExpc3RlbmVyO1xyXG5cdFByb3RvdHlwZS5yZW1vdmVFdmVudExpc3RlbmVyID0gUHJvdG90eXBlLnJlbW92ZU9uID0gZnVuY3Rpb24oKSB7XHJcblx0XHRpZiAoYXJndW1lbnRzLmxlbmd0aCAhPSAxIHx8IHR5cGVvZiB0aGlzLl9fY2FsbGJhY2tNYXAgPT09IFwidW5kZWZpbmVkXCIpXHJcblx0XHRcdHJldHVybiByZW1vdmVFdmVudExpc3RlbmVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcblx0XHRcdFxyXG5cdFx0bGV0IGV2ZW50cyA9IHVuZGVmaW5lZDtcclxuXHRcdGxldCBjYWxsYmFjayA9IHVuZGVmaW5lZDtcclxuXHRcdGlmKHR5cGVvZiBhcmd1bWVudHNbMF0gPT09IFwic3RyaW5nXCIpXHJcblx0XHRcdGV2ZW50cyA9IGFyZ3VtZW50c1swXS5zcGxpdCgvKFxccyspfChcXHMqLFxccyopLyk7XHJcblx0XHRlbHNlIGlmKHR5cGVvZiBhcmd1bWVudHNbMF0gPT09IFwiZnVuY3Rpb25cIilcclxuXHRcdFx0Y2FsbGJhY2sgPSBhcmd1bWVudHNbMF07XHJcblx0XHRlbHNlXHJcblx0XHRcdHRocm93IG5ldyBFcnJvcihcIldyb25nIGFyZ3VtZW50ISAtPiBjYWxsIGZ1bmN0aW9uKFtldmVudHxoYW5kbGVyXSlcIik7XHJcblx0XHRcclxuXHRcdGxldCByZW1vdmFsSGFuZGxlciA9IFtdO1xyXG5cdFx0aWYodHlwZW9mIGV2ZW50cyA9PT0gXCJ1bmRlZmluZWRcIil7XHJcblx0XHRcdGxldCBldmVudE1hcCA9IHRoaXMuX19jYWxsYmFja01hcFtjYWxsYmFja107XHJcblx0XHRcdGlmKHR5cGVvZiBldmVudE1hcCAhPT0gXCJ1bmRlZmluZWRcIil7XHJcblx0XHRcdCAgICBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhldmVudE1hcCkuZm9yRWFjaCgoZnVuY3Rpb24ocmVzdWx0LCBldmVudE1hcCwgZXZlbnQpe1xyXG5cdFx0XHRcdFx0bGV0IGhhbmRsZXIgPSBldmVudE1hcFtldmVudF07XHJcblx0XHRcdFx0XHRpZih0eXBlb2YgaGFuZGxlciAhPT0gXCJ1bmRlZmluZWRcIilcclxuXHRcdFx0XHRcdFx0cmVzdWx0LnB1c2goaGFuZGxlcik7XHRcdFx0XHRcdFxyXG5cdFx0XHRcdH0pLmJpbmQodGhpcywgcmVtb3ZhbEhhbmRsZXIsIGV2ZW50TWFwKSk7XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0ZGVsZXRlIHRoaXMuX19jYWxsYmFja01hcFtjYWxsYmFja107XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdGVsc2Uge1xyXG5cdFx0XHRldmVudHMuZm9yRWFjaCgoZnVuY3Rpb24ocmVzdWx0LCBldmVudCl7XHJcblx0XHRcdCAgICBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh0aGlzLl9fY2FsbGJhY2tNYXApLmZvckVhY2goKGZ1bmN0aW9uKGFFdmVudCwgQ2FsbGJhY2spe1xyXG5cdFx0XHRcdFx0bGV0IGV2ZW50TWFwID0gdGhpcy5fX2NhbGxiYWNrTWFwW0NhbGxiYWNrXTtcclxuXHRcdFx0XHRcdGRlbGV0ZSBldmVudE1hcFthRXZlbnRdO1xyXG5cdFx0XHRcdFx0aWYoT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoZXZlbnRNYXApLmxlbmd0aCA9PSAwKVxyXG5cdFx0XHRcdFx0XHRkZWxldGUgdGhpcy5fX2NhbGxiYWNrTWFwW0NhbGxiYWNrXTtcclxuXHRcdFx0XHR9KS5iaW5kKHRoaXMsIGV2ZW50KSk7XHRcdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHR9KS5iaW5kKHRoaXMpKTtcclxuXHRcdH1cclxuXHRcdFxyXG5cdFx0cmV0dXJuIHRoaXM7XHJcblx0fTtcclxuXHJcblx0XHJcblx0UHJvdG90eXBlLnRyaWdnZXIgPSBmdW5jdGlvbigpe1xyXG5cdFx0bGV0IGFyZ3MgPSBBcnJheS5mcm9tKGFyZ3VtZW50cyk7XHRcdFxyXG5cdFx0bGV0IGV2ZW50ID0gYXJncy5zaGlmdCgpO1x0XHRcclxuXHRcdGxldCBkYXRhID0gYXJncy5sZW5ndGggPiAxID8gYXJncy5zaGlmdCgpIDogdW5kZWZpbmVkO1xyXG5cdFx0bGV0IGRlbGVnYXRlZEV2ZW50ID0gZGF0YSBpbnN0YW5jZW9mIEV2ZW50ID8gZGF0YSA6IHVuZGVmaW5lZDtcclxuXHRcdFxyXG5cdFx0XHJcblx0XHRpZih0eXBlb2YgdGhpc1tcIm9uXCIgKyBldmVudF0gPT09IFwiZnVuY3Rpb25cIil7XHJcblx0XHRcdGV2ZW50ID0gZG9jdW1lbnQuY3JlYXRlRXZlbnQoXCJFdmVudFwiKTtcclxuXHRcdFx0ZXZlbnQuaW5pdEV2ZW50KGV2ZW50LCB0cnVlLCB0cnVlKTtcclxuXHRcdH1cclxuXHRcdGVsc2VcclxuXHRcdFx0ZXZlbnQgPSBuZXcgQ3VzdG9tRXZlbnQoZXZlbnQsICB7IGJ1YmJsZXM6IHRydWUsIGNhbmNlbGFibGU6IHRydWUsIGRldGFpbDogZGF0YSB9KTtcclxuXHRcdFxyXG5cdFx0ZXZlbnQuZGVsZWdhdGVkRXZlbnQgPSBkZWxlZ2F0ZWRFdmVudDtcdFx0XHJcblx0XHR0aGlzLmRpc3BhdGNoRXZlbnQoZXZlbnQpO1xyXG5cdFx0cmV0dXJuIHRoaXM7XHJcblx0fTtcclxufSk7XHJcbmV4cG9ydCBkZWZhdWx0IHN1cHBvcnQ7XHJcbiIsImltcG9ydCBFeHRlbmRlciBmcm9tIFwiLi4vLi4vdXRpbHMvRXh0ZW5kZXJcIjtcclxuXHJcbmNvbnN0IHN1cHBvcnQgPSBFeHRlbmRlcihcIkh0bWxDbGFzc1N1cHBvcnRcIiwgZnVuY3Rpb24oUHJvdG90eXBlKSB7XHRcclxuXHRQcm90b3R5cGUuYWRkQ2xhc3MgPSBmdW5jdGlvbigpIHtcclxuXHRcdGlmKGFyZ3VtZW50cy5sZW5ndGggPT0gMSlcclxuXHRcdFx0YXJndW1lbnRzWzBdLnNwbGl0KC9cXHMrLykuZm9yRWFjaCgoZnVuY3Rpb24oY2xhenope1xyXG5cdFx0XHRcdHRoaXMuY2xhc3NMaXN0LmFkZChjbGF6eik7XHJcblx0XHRcdH0pLmJpbmQodGhpcykpO1xyXG5cdFx0ZWxzZSBpZihhcmd1bWVudHMubGVuZ3RoID4gMSlcclxuXHRcdFx0QXJyYXkucHJvdG90eXBlLmZvckVhY2guY2FsbChhcmd1bWVudHMsKGZ1bmN0aW9uKGNsYXp6KXtcclxuXHRcdFx0XHR0aGlzLmFkZENsYXNzKGNsYXp6KTtcclxuXHRcdFx0fSkuYmluZCh0aGlzKSk7XHJcblx0XHRcclxuXHRcdHJldHVybiB0aGlzO1xyXG5cdH07XHJcblx0XHJcblx0UHJvdG90eXBlLnJlbW92ZUNsYXNzID0gZnVuY3Rpb24oKSB7XHJcblx0XHRpZihhcmd1bWVudHMubGVuZ3RoID09IDEpXHJcblx0XHRcdGFyZ3VtZW50c1swXS5zcGxpdCgvXFxzKy8pLmZvckVhY2goKGZ1bmN0aW9uKGNsYXp6KXtcclxuXHRcdFx0XHR0aGlzLmNsYXNzTGlzdC5yZW1vdmUoY2xhenopO1xyXG5cdFx0XHR9KS5iaW5kKHRoaXMpKTtcclxuXHRcdGVsc2UgaWYoYXJndW1lbnRzLmxlbmd0aCA+IDEpXHJcblx0XHRcdEFycmF5LnByb3RvdHlwZS5mb3JFYWNoLmNhbGwoYXJndW1lbnRzLChmdW5jdGlvbihjbGF6eil7XHJcblx0XHRcdFx0dGhpcy5yZW1vdmVDbGFzcyhjbGF6eik7XHJcblx0XHRcdH0pLmJpbmQodGhpcykpO1xyXG5cdFx0XHJcblx0XHRyZXR1cm4gdGhpcztcdFx0XHJcblx0fTtcclxuXHRcclxuXHRQcm90b3R5cGUudG9nZ2xlQ2xhc3MgPSBmdW5jdGlvbigpIHtcclxuXHRcdGlmKGFyZ3VtZW50cy5sZW5ndGggPT0gMSlcclxuXHRcdFx0YXJndW1lbnRzWzBdLnNwbGl0KC9cXHMrLykuZm9yRWFjaCgoZnVuY3Rpb24oY2xhenope1xyXG5cdFx0XHRcdHRoaXMuY2xhc3NMaXN0LnRvZ2dsZShjbGF6eik7XHJcblx0XHRcdH0pLmJpbmQodGhpcykpO1xyXG5cdFx0ZWxzZSBpZihhcmd1bWVudHMubGVuZ3RoID4gMSlcclxuXHRcdFx0QXJyYXkucHJvdG90eXBlLmZvckVhY2guY2FsbChhcmd1bWVudHMsKGZ1bmN0aW9uKGNsYXp6KXtcclxuXHRcdFx0XHR0aGlzLnRvb2dsZUNsYXNzKGNsYXp6KTtcclxuXHRcdFx0fSkuYmluZCh0aGlzKSk7XHJcblx0XHRcclxuXHRcdHJldHVybiB0aGlzO1xyXG5cdH07XHJcbn0pO1xyXG5leHBvcnQgZGVmYXVsdCBzdXBwb3J0OyIsImltcG9ydCBFeHRlbmRlciBmcm9tIFwiLi4vLi4vdXRpbHMvRXh0ZW5kZXJcIjtcclxuXHJcbmNvbnN0IHN1cHBvcnQgPSBFeHRlbmRlcihcIkxpc3RTdXBwb3J0XCIsIGZ1bmN0aW9uKFByb3RvdHlwZSkge1x0XHRcclxuXHRQcm90b3R5cGUuaW5kZXhPZiA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0Zm9yKGxldCBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspXHJcblx0XHRcdGlmKHRoaXNbaV0gPT0gYXJndW1lbnRzWzBdKVxyXG5cdFx0XHRcdHJldHVybiBpO1xyXG5cdFx0XHJcblx0XHRyZXR1cm4gLTE7XHJcblx0fTtcclxuXHJcblx0UHJvdG90eXBlLmZvckVhY2ggPSBmdW5jdGlvbigpe1xyXG5cdFx0cmV0dXJuIEFycmF5LnByb3RvdHlwZS5mb3JFYWNoLmFwcGx5KEFycmF5LmZyb20odGhpcyksIGFyZ3VtZW50cyk7XHJcblx0fTtcdFxyXG5cclxuXHRQcm90b3R5cGUuZmlyc3QgPSBmdW5jdGlvbigpe1xyXG5cdFx0aWYodGhpcy5sZW5ndGggPiAwKVxyXG5cdFx0XHRyZXR1cm4gdGhpc1swXTtcclxuXHR9O1x0XHJcblx0XHJcblx0UHJvdG90eXBlLmxhc3QgPSBmdW5jdGlvbigpe1xyXG5cdFx0aWYodGhpcy5sZW5ndGggPiAwKVxyXG5cdFx0XHRyZXR1cm4gdGhpc1t0aGlzLmxlbmd0aCAtIDFdO1xyXG5cdH07XHJcbn0pO1xyXG5leHBvcnQgZGVmYXVsdCBzdXBwb3J0OyIsImltcG9ydCBFeHRlbmRlciBmcm9tIFwiLi4vLi4vdXRpbHMvRXh0ZW5kZXJcIjtcclxuaW1wb3J0IFV0aWxzIGZyb20gXCIuLi8uLi91dGlscy9VdGlsc1wiO1xyXG5cclxuY29uc3Qgc3VwcG9ydCA9IEV4dGVuZGVyKFwiTWFuaXB1bGF0aW9uU3VwcG9ydFwiLCBmdW5jdGlvbihQcm90b3R5cGUpIHtcdFxyXG5cdFByb3RvdHlwZS5lbXB0eSA9IGZ1bmN0aW9uKCl7XHJcblx0XHRsZXQgbm9kZXMgPSB0aGlzLmNoaWxkTm9kZXNcclxuXHRcdHdoaWxlKG5vZGVzLmxlbmd0aCAhPSAwKVx0XHRcdFxyXG5cdFx0XHRub2Rlc1swXS5yZW1vdmUodHJ1ZSk7XHJcblx0XHRcclxuXHRcdHJldHVybiB0aGlzO1xyXG5cdH07XHJcblx0XHJcblx0UHJvdG90eXBlLmNvbnRlbnQgPSBmdW5jdGlvbigpe1xyXG5cdFx0cmV0dXJuIHRoaXMuY2hpbGROb2RlcztcclxuXHR9O1x0XHJcblx0XHJcblx0UHJvdG90eXBlLmh0bWwgPSBmdW5jdGlvbigpe1xyXG5cdFx0aWYoYXJndW1lbnRzLmxlbmd0aCA9PSAwKVx0XHRcdFxyXG5cdFx0XHRyZXR1cm4gdGhpcy5pbm5lckhUTUw7XHJcblx0XHRlbHNlIGlmKGFyZ3VtZW50cy5sZW5ndGggPT0gMSAmJiB0eXBlb2YgYXJndW1lbnRzWzBdID09PSBcImJvb2xlYW5cIilcclxuXHRcdFx0aWYoYXJndW1lbnRzWzBdKVxyXG5cdFx0XHRcdHJldHVybiB0aGlzLm91dGVySFRNTDtcclxuXHRcdFx0ZWxzZVxyXG5cdFx0XHRcdHJldHVybiB0aGlzLmlubmVySFRNTDtcclxuXHRcdGVsc2UgXHJcblx0XHRcdEFycmF5LmZyb20oYXJndW1lbnRzKS5mb3JFYWNoKChmdW5jdGlvbihjb250ZW50KXtcclxuXHRcdFx0XHRpZih0eXBlb2YgY29udGVudCA9PT0gXCJzdHJpbmdcIilcclxuXHRcdFx0XHRcdHRoaXMuaW5uZXJIVE1MID0gY29udGVudDtcclxuXHRcdFx0XHRlbHNlIGlmKGNvbnRlbnQgaW5zdGFuY2VvZiBOb2RlIHx8IGNvbnRlbnQgaW5zdGFuY2VvZiBOb2RlTGlzdCl7XHJcblx0XHRcdFx0XHR0aGlzLmVtcHR5KCk7XHJcblx0XHRcdFx0XHR0aGlzLmFwcGVuZChjb250ZW50KTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pLmJpbmQodGhpcykpO1x0XHRcclxuXHRcdFx0XHJcblx0XHRyZXR1cm4gdGhpcztcclxuXHR9O1xyXG5cdFxyXG5cdFByb3RvdHlwZS5hcHBlbmQgPSBmdW5jdGlvbigpe1xyXG5cdFx0bGV0IGFwcGVuZCA9IFByb3RvdHlwZS5hcHBlbmRDaGlsZC5iaW5kKHRoaXMpO1xyXG5cdFx0Zm9yKGxldCBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKyl7XHJcblx0XHRcdGxldCBhcmcgPSBhcmd1bWVudHNbaV07XHJcblx0XHRcdGlmKGFyZyBpbnN0YW5jZW9mIE5vZGUpXHJcblx0XHRcdFx0dGhpcy5hcHBlbmRDaGlsZChhcmcpO1xyXG5cdFx0XHRlbHNlIGlmKHR5cGVvZiBhcmcgPT09IFwic3RyaW5nXCIpXHJcblx0XHRcdFx0Y3JlYXRlKGFyZykuZm9yRWFjaChhcHBlbmQpO1xyXG5cdFx0XHRlbHNlIGlmKEFycmF5LmlzQXJyYXkoYXJnKSB8fCBhcmcgaW5zdGFuY2VvZiBOb2RlTGlzdClcclxuXHRcdFx0XHRhcmcuZm9yRWFjaChhcHBlbmQpO1xyXG5cdFx0fVxyXG5cdH07XHJcblx0XHJcblx0Y29uc3QgcHJlcGVuZCA9IGZ1bmN0aW9uKGFGaXJzdEVsZW1lbnQsIGFFbGVtZW50KXtcclxuXHRcdHRoaXMuaW5zZXJ0QmVmb3JlKGFFbGVtZW50LCBhRmlyc3RFbGVtZW50KTtcclxuXHR9O1xyXG5cdFByb3RvdHlwZS5wcmVwZW5kID0gZnVuY3Rpb24oKXtcclxuXHRcdGxldCBmaXJzdCA9IHRoaXMuY2hpbGROb2Rlcy5maXJzdCgpO1xyXG5cdFx0bGV0IGluc2VydCA9IHByZXBlbmQuYmluZCh0aGlzLCBmaXJzdCk7XHJcblx0XHRmb3IobGV0IGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKXtcclxuXHRcdFx0bGV0IGFyZyA9IGFyZ3VtZW50c1tpXTtcclxuXHRcdFx0aWYoQXJyYXkuaXNBcnJheShhcmcpIHx8IGFyZyBpbnN0YW5jZW9mIE5vZGVMaXN0KVxyXG5cdFx0XHRcdGFyZy5mb3JFYWNoKGluc2VydCk7XHJcblx0XHRcdGVsc2UgaWYoYXJnIGluc3RhbmNlb2YgTm9kZSlcclxuXHRcdFx0XHR0aGlzLmluc2VydEJlZm9yZShhcmcsIGZpcnN0KTtcclxuXHRcdFx0ZWxzZSBpZih0eXBlb2YgYXJnID09PSBcInN0cmluZ1wiKVxyXG5cdFx0XHRcdGFyZy5mb3JFYWNoKGluc2VydCk7XHJcblx0XHR9XHJcblx0fTtcclxuXHRcclxuXHRQcm90b3R5cGUucmVwbGFjZSA9IGZ1bmN0aW9uKCl7XHJcblx0XHRpZihhcmd1bWVudHMubGVuZ3RoIDwgMSlcclxuXHRcdFx0dGhyb3cgbmV3IEVycm9yKFwiSW5zdWZmaWNpZW50IGFyZ3VtZW50cyEgT25lIG9yIHR3byBub2RlcyByZXF1aXJlZCFcIik7XHJcblx0XHRcclxuXHRcdGNvbnN0IHBhcmVudCA9IGFyZ3VtZW50cy5sZW5ndGggPT0gMSA/IHRoaXMucGFyZW50Tm9kZSA6IHRoaXM7XHJcblx0XHRjb25zdCBvbGROb2RlID0gYXJndW1lbnRzLmxlbmd0aCA9PSAxID8gdGhpcyA6IGFyZ3VtZW50c1swXTtcclxuXHRcdGNvbnN0IG5ld05vZGUgPSBhcmd1bWVudHMubGVuZ3RoID09IDEgPyBhcmd1bWVudHNbMF0gOiBhcmd1bWVudHNbMV07XHJcblx0XHRcclxuXHRcdGlmKG5ld05vZGUgaW5zdGFuY2VvZiBBcnJheSB8fCBuZXdOb2RlIGluc3RhbmNlb2YgTm9kZUxpc3Qpe1xyXG5cdFx0XHRuZXdOb2RlLmZvckVhY2goZnVuY3Rpb24oYUl0ZW0pe1xyXG5cdFx0XHRcdHBhcmVudC5pbnNlcnRCZWZvcmUoYUl0ZW0sIG9sZE5vZGUpO1xyXG5cdFx0XHR9KTtcclxuXHRcdFx0b2xkTm9kZS5yZW1vdmUoKTtcclxuXHRcdH1cclxuXHRcdGVsc2VcclxuXHRcdFx0cGFyZW50LnJlcGxhY2VDaGlsZChvbGROb2RlLCBuZXdOb2RlKTtcclxuXHR9XHJcbn0pO1xyXG5leHBvcnQgZGVmYXVsdCBzdXBwb3J0OyIsImltcG9ydCBFeHRlbmRlciBmcm9tIFwiLi4vLi4vdXRpbHMvRXh0ZW5kZXJcIjtcclxuXHJcbmNvbnN0IHBhcmVudFNlbGVjdG9yID0gLzpwYXJlbnQoXFwoXFxcIihbXlxcKV0qKVxcXCJcXCkpPy9pO1xyXG5jb25zdCBxdWVyeUV4ZWN1dGVyID0gZnVuY3Rpb24oYUVsZW1lbnQsIGFTZWxlY3Rvcil7XHJcblx0bGV0IG1hdGNoID0gcGFyZW50U2VsZWN0b3IuZXhlYyhhU2VsZWN0b3IpO1xyXG5cdGlmKG1hdGNoKXtcclxuXHRcdGxldCByZXN1bHQgPSBhRWxlbWVudDtcclxuXHRcdGlmKG1hdGNoLmluZGV4ID4gMCl7XHJcblx0XHRcdHJlc3VsdCA9IGFFbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYVNlbGVjdG9yLnN1YnN0cigwLCBtYXRjaC5pbmRleCkpO1xyXG5cdFx0XHRpZihyZXN1bHQubGVuZ3RoID09IDApXHJcblx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0fVx0XHJcblx0XHRyZXN1bHQgPSByZXN1bHQucGFyZW50KG1hdGNoWzJdKTtcdFx0XHRcclxuXHRcdGlmKHJlc3VsdCl7XHJcblx0XHRcdGxldCBuZXh0U2VsZWN0b3IgPSBhU2VsZWN0b3Iuc3Vic3RyKG1hdGNoLmluZGV4ICsgbWF0Y2hbMF0ubGVuZ3RoKS50cmltKCk7XHJcblx0XHRcdGlmKG5leHRTZWxlY3Rvci5sZW5ndGggPiAwKVxyXG5cdFx0XHRcdHJlc3VsdCA9IHJlc3VsdC5maW5kKG5leHRTZWxlY3Rvcik7XHJcblx0XHRcdFxyXG5cdFx0XHRyZXR1cm4gcmVzdWx0O1xyXG5cdFx0fVx0XHRcclxuXHR9XHJcblx0ZWxzZVxyXG5cdFx0cmV0dXJuIGFFbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYVNlbGVjdG9yKTtcclxufTtcclxuXHJcblxyXG5jb25zdCBzdXBwb3J0ID0gRXh0ZW5kZXIoXCJRdWVyeVN1cHBvcnRcIixmdW5jdGlvbihQcm90b3R5cGUpIHtcdFxyXG5cdFByb3RvdHlwZS5maW5kID0gZnVuY3Rpb24oKSB7XHJcblx0XHRsZXQgbm9kZXMgPSBbXTtcclxuXHRcdGxldCBhcmdzID0gQXJyYXkuZnJvbShhcmd1bWVudHMpO1xyXG5cdFx0bGV0IGFyZyA9IGFyZ3Muc2hpZnQoKTtcclxuXHRcdHdoaWxlKGFyZyl7XHJcblx0XHRcdGlmKHR5cGVvZiBhcmcgPT09IFwic3RyaW5nXCIpe1xyXG5cdFx0XHRcdGxldCByZXN1bHQgPSBxdWVyeUV4ZWN1dGVyKHRoaXMsIGFyZyk7XHJcblx0XHRcdFx0aWYocmVzdWx0KVxyXG5cdFx0XHRcdFx0bm9kZXMucHVzaChyZXN1bHQpO1xyXG5cdFx0XHR9XHJcblx0XHRcdFxyXG5cdFx0XHRhcmcgPSBhcmdzLnNoaWZ0KCk7XHJcblx0XHR9XHJcblx0XHRcclxuXHRcdGxldCByZXN1bHQgPSBOb2RlTGlzdC5mcm9tLmFwcGx5KG51bGwsIG5vZGVzKTtcclxuXHRcdHJldHVybiByZXN1bHQ7XHJcblx0fTtcclxuXHRcclxuXHRQcm90b3R5cGUuaXMgPSBmdW5jdGlvbigpIHtcclxuXHRcdGlmKHRoaXMgaW5zdGFuY2VvZiBEb2N1bWVudClcclxuXHRcdFx0cmV0dXJuIGZhbHNlO1x0XHRcclxuXHRcdGVsc2UgaWYoYXJndW1lbnRzLmxlbmd0aCA9PSAxKXtcclxuXHRcdFx0aWYodHlwZW9mIGFyZ3VtZW50c1swXSA9PT0gXCJzdHJpbmdcIilcclxuXHRcdFx0XHRyZXR1cm4gdGhpcy5tYXRjaGVzKGFyZ3VtZW50c1swXSk7XHJcblx0XHRcdGVsc2UgaWYodHlwZW9mIGFyZ3VtZW50c1swXS5sZW5ndGggPT09IFwibnVtYmVyXCIpe1xyXG5cdFx0XHRcdGxldCBmaWx0ZXIgPSBhcmd1bWVudHNbMF07XHJcblx0XHRcdFx0Zm9yKGxldCBpID0gMDsgaSA8IGZpbHRlci5sZW5ndGg7IGkrKylcclxuXHRcdFx0XHRcdGlmKHRoaXMubWF0Y2hlcyhmaWx0ZXJbaV0pKVxyXG5cdFx0XHRcdFx0XHRyZXR1cm4gdHJ1ZTtcclxuXHRcdFx0fVx0XHRcdFx0XHJcblx0XHR9XHJcblx0XHRlbHNlIGlmKGFyZ3VtZW50cy5sZW5ndGggPiAxKVxyXG5cdFx0XHRyZXR1cm4gdGhpcy5pcyhBcnJheS5mcm9tKGFyZ3VtZW50cykpO1xyXG5cdFx0XHJcblx0XHRyZXR1cm4gZmFsc2U7XHJcblx0fTtcdFxyXG5cdFxyXG5cdFByb3RvdHlwZS5wYXJlbnQgPSBmdW5jdGlvbigpIHtcclxuXHRcdGlmKCF0aGlzLnBhcmVudE5vZGUpXHJcblx0XHRcdHJldHVybiB1bmRlZmluZWQ7XHRcdFxyXG5cdFx0ZWxzZSBpZih0eXBlb2YgYXJndW1lbnRzWzBdID09PSBcInN0cmluZ1wiKXtcclxuXHRcdFx0bGV0IHBhcmVudCA9IHRoaXMucGFyZW50Tm9kZTtcclxuXHRcdFx0dHJ5e1xyXG5cdFx0XHRcdHdoaWxlKHBhcmVudCAmJiAhcGFyZW50LmlzKGFyZ3VtZW50c1swXSkpXHJcblx0XHRcdFx0XHRwYXJlbnQgPSBwYXJlbnQucGFyZW50KGFyZ3VtZW50c1swXSk7XHJcblx0XHRcdH1jYXRjaCAoZSkge1xyXG5cdFx0XHRcdGNvbnNvbGUuZXJyb3IoXCJ0aGlzOlwiLCB0aGlzLCBcInBhcmVudDpcIiwgcGFyZW50LCBcImVycm9yOlwiLCBlKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRyZXR1cm4gcGFyZW50O1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHRoaXMucGFyZW50Tm9kZTtcclxuXHR9O1xyXG5cdFxyXG5cdFByb3RvdHlwZS5wYXJlbnRzID0gZnVuY3Rpb24oKSB7XHRcdFxyXG5cdFx0bGV0IHJlc3VsdCA9IG5ldyBBcnJheSgpO1xyXG5cdFx0bGV0IHBhcmVudCA9IFByb3RvdHlwZS5wYXJlbnQuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxuXHRcdHdoaWxlKHBhcmVudCl7XHJcblx0XHRcdHJlc3VsdC5wdXNoKHBhcmVudCk7XHJcblx0XHRcdHBhcmVudCA9IFByb3RvdHlwZS5wYXJlbnQuYXBwbHkocGFyZW50LCBhcmd1bWVudHMpO1xyXG5cdFx0fVxyXG5cdFx0XHJcblx0XHRyZXR1cm4gTm9kZUxpc3QuZnJvbShyZXN1bHQpO1xyXG5cdH07XHRcclxuXHJcblx0UHJvdG90eXBlLnNlbGVjdG9yID0gZnVuY3Rpb24oKXtcclxuXHRcdGlmKHRoaXMgaW5zdGFuY2VvZiBEb2N1bWVudCB8fCB0aGlzIGluc3RhbmNlb2YgRG9jdW1lbnRGcmFnbWVudClcclxuXHRcdFx0cmV0dXJuIHVuZGVmaW5lZDtcclxuXHRcdGVsc2UgaWYodGhpcy5pZClcclxuXHRcdFx0cmV0dXJuIFwiI1wiICsgdGhpcy5pZDtcclxuXHRcdGVsc2V7XHRcdFx0XHJcblx0XHRcdGxldCBzZWxlY3RvciA9IHRoaXMudGFnTmFtZS50b0xvd2VyQ2FzZSgpO1xyXG5cdFx0XHRsZXQgcGFyZW50ID0gdGhpcy5wYXJlbnQoKTtcclxuXHRcdFx0aWYocGFyZW50KXtcclxuXHRcdFx0XHRsZXQgc2FtZVRhZ1NpYmxpbmdzID0gcGFyZW50LmZpbmQoXCI6c2NvcGU+XCIgKyBzZWxlY3Rvcik7XHRcdFx0XHJcblx0XHRcdFx0aWYgKHNhbWVUYWdTaWJsaW5ncyBpbnN0YW5jZW9mIE5vZGVMaXN0KSB7XHJcblx0XHRcdFx0XHRsZXQgaW5kZXggPSBzYW1lVGFnU2libGluZ3MuaW5kZXhPZih0aGlzKTtcclxuXHRcdFx0XHRcdGlmIChpbmRleCA+IDApXHJcblx0XHRcdFx0XHRcdHNlbGVjdG9yICs9ICc6bnRoLWNoaWxkKCcgKyAoaW5kZXggKyAxKSArICcpJztcclxuXHRcdFx0XHR9XHRcdFxyXG5cdFx0XHRcdGxldCBwYXJlbnRTZWxlY3RvciA9IHBhcmVudC5zZWxlY3RvcigpO1xyXG5cdFx0XHRcdHJldHVybiBwYXJlbnRTZWxlY3RvciA/IHBhcmVudFNlbGVjdG9yICsgXCI+XCIgKyBzZWxlY3RvciA6IHNlbGVjdG9yO1xyXG5cdFx0XHR9IFxyXG5cdFx0XHRyZXR1cm4gc2VsZWN0b3I7XHJcblx0XHR9XHJcblx0fTtcdFxyXG5cclxuXHRQcm90b3R5cGUuY2xvc2VzdCA9IGZ1bmN0aW9uKGFRdWVyeSkge1x0XHRcdFxyXG5cdFx0bGV0IG5vZGUgPSB0aGlzO1xyXG5cdFx0d2hpbGUobm9kZSl7XHJcblx0XHRcdGxldCBjbG9zZXN0cyA9IG5vZGUuZmluZChhUXVlcnkpO1xyXG5cdFx0XHRpZihjbG9zZXN0cyAmJiBjbG9zZXN0cy5sZW5ndGggPiAwKVxyXG5cdFx0XHRcdHJldHVybiBjbG9zZXN0cztcclxuXHRcdFx0ZWxzZSBpZihub2RlLmlzKGFRdWVyeSkpXHJcblx0XHRcdFx0cmV0dXJuIE5vZGVMaXN0LmZyb20obm9kZSk7XHJcblx0XHRcdFxyXG5cdFx0XHRub2RlID0gbm9kZS5wYXJlbnQoKTtcdFx0XHJcblx0XHR9XHJcblx0fTtcclxuXHRcclxuXHRQcm90b3R5cGUubmVzdGVkID0gZnVuY3Rpb24oYVF1ZXJ5KXtcclxuXHRcdGlmKHRoaXMuaXMoYVF1ZXJ5KSlcclxuXHRcdFx0cmV0dXJuIE5vZGVMaXN0LmZyb20odGhpcyk7XHRcclxuXHRcdFxyXG5cdFx0bGV0IG5lc3RlZCA9IHRoaXMuZmluZChhUXVlcnkpO1xyXG5cdFx0aWYobmVzdGVkICYmIG5lc3RlZC5sZW5ndGggPiAwKVxyXG5cdFx0XHRyZXR1cm4gbmVzdGVkO1xyXG5cdFx0ZWxzZVxyXG5cdFx0XHRyZXR1cm4gTm9kZUxpc3QuZnJvbSh0aGlzLnBhcmVudChhUXVlcnkpKTtcclxuXHR9O1xyXG59KTtcclxuZXhwb3J0IGRlZmF1bHQgc3VwcG9ydDtcclxuXHJcbiIsImltcG9ydCBFeHRlbmRlciBmcm9tIFwiLi4vLi4vdXRpbHMvRXh0ZW5kZXJcIjtcclxuXHJcbmNvbnN0IHN1cHBvcnQgPSBFeHRlbmRlcihcIlJlYWR5RXZlbnRTdXBwb3J0XCIsIGZ1bmN0aW9uKFByb3RvdHlwZSkge1xyXG5cdFByb3RvdHlwZS5yZWFkeSA9IGZ1bmN0aW9uKGFGdW5jdGlvbiwgb25jZSl7XHRcclxuXHRcdHRoaXMub24oXCJyZWFkeVwiLCBhRnVuY3Rpb24sIG9uY2UpO1xyXG5cdFx0aWYoZG9jdW1lbnQucmVhZHlTdGF0ZSA9PSBcImNvbXBsZXRlXCIpXHRcdFx0XHJcblx0XHRcdHRoaXMudHJpZ2dlcihcInJlYWR5XCIpO1xyXG5cdFx0XHJcblx0XHRyZXR1cm4gdGhpcztcclxuXHR9O1xyXG5cdFxyXG59KTtcclxuZXhwb3J0IGRlZmF1bHQgc3VwcG9ydDsiLCJpbXBvcnQgRXh0ZW5kZXIgZnJvbSBcIi4uLy4uL3V0aWxzL0V4dGVuZGVyXCI7XHJcblxyXG5jb25zdCBzdXBwb3J0ID0gRXh0ZW5kZXIoXCJTaG93SGlkZVN1cHBvcnRcIiwgZnVuY3Rpb24oUHJvdG90eXBlKSB7XHJcblx0UHJvdG90eXBlLnNob3cgPSBmdW5jdGlvbigpe1xyXG5cdFx0aWYodGhpcy5fX2lzaGlkZSl7XHJcblx0XHRcdHRoaXMuc3R5bGUuZGlzcGxheSA9IHRoaXMuX19kaXNwbGF5IHx8IFwiXCI7XHJcblx0XHRcdHRoaXMuX19pc2hpZGUgPSBmYWxzZTtcclxuXHRcdH1cclxuXHRcdHJldHVybiB0aGlzO1xyXG5cdH07XHJcblx0XHJcblx0UHJvdG90eXBlLmhpZGUgPSBmdW5jdGlvbigpe1xyXG5cdFx0aWYoIXRoaXMuX19pc2hpZGUpe1xyXG5cdFx0XHR0aGlzLl9fZGlzcGxheSA9IHRoaXMuc3R5bGUuZGlzcGxheTtcclxuXHRcdFx0dGhpcy5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcblx0XHRcdHRoaXMuX19pc2hpZGUgPSB0cnVlO1xyXG5cdFx0fVx0XHJcblx0XHRcclxuXHRcdHJldHVybiB0aGlzO1xyXG5cdH07XHJcblx0XHJcblx0UHJvdG90eXBlLnRvZ2dsZVNob3cgPSBmdW5jdGlvbigpe1xyXG5cdFx0aWYodGhpcy5fX2lzaGlkZSlcclxuXHRcdFx0cmV0dXJuIHRoaXMuc2hvdygpO1xyXG5cdFx0ZWxzZVxyXG5cdFx0XHRyZXR1cm4gdGhpcy5oaWRlKCk7XHJcblx0fTtcclxuXHRcclxufSk7XHJcbmV4cG9ydCBkZWZhdWx0IHN1cHBvcnQ7IiwiaW1wb3J0IEV4dGVuZGVyIGZyb20gXCIuLi8uLi91dGlscy9FeHRlbmRlclwiO1xyXG5cclxuY29uc3QgSW5wdXRUeXBlcyA9W1xyXG5cdHtcclxuXHRcdHNlbGVjdG9yIDogXCJzZWxlY3RcIixcclxuXHRcdGdldCA6IGZ1bmN0aW9uKCl7XHJcblx0XHRcdGxldCByZXN1bHQgPSBbXTtcclxuXHRcdFx0dGhpcy5maW5kKFwib3B0aW9uXCIpLmZvckVhY2goZnVuY3Rpb24ob3B0aW9uKXtcclxuXHRcdFx0XHRpZihvcHRpb24uc2VsZWN0ZWQpXHJcblx0XHRcdFx0XHRyZXN1bHQucHVzaChvcHRpb24udmFsdWUpO1xyXG5cdFx0XHR9KTtcclxuXHRcdFx0XHJcblx0XHRcdHJldHVybiByZXN1bHQ7XHJcblx0XHR9LFxyXG5cdFx0c2V0IDogZnVuY3Rpb24oKXtcdFx0XHRcdFxyXG5cdFx0XHRsZXQgdmFsdWVzID0gW107XHJcblx0XHRcdGxldCBhcmdzID0gQXJyYXkuZnJvbShhcmd1bWVudHMpO1xyXG5cdFx0XHRsZXQgYXJnID0gYXJncy5zaGlmdCgpO1xyXG5cdFx0XHR3aGlsZShhcmcpe1xyXG5cdFx0XHRcdGlmKEFycmF5LmlzQXJyYXkoYXJnKSlcclxuXHRcdFx0XHRcdHZhbHVlcyA9IHZhbHVlcy5jb25jYXQoYXJnKTtcclxuXHRcdFx0XHRlbHNlXHJcblx0XHRcdFx0XHR2YWx1ZXMucHVzaChhcmcpO1xyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdGFyZyA9IGFyZ3Muc2hpZnQoKTtcclxuXHRcdFx0fVxyXG5cdFx0XHR0aGlzLnZhbHVlID0gdmFsdWVzO1xyXG5cdFx0XHR0aGlzLmZpbmQoXCJvcHRpb25cIikuZm9yRWFjaChmdW5jdGlvbihvcHRpb24pe1xyXG5cdFx0XHRcdG9wdGlvbi5zZWxlY3RlZCA9IHZhbHVlcy5pbmRleE9mKG9wdGlvbi52YWx1ZSkgPj0gMDtcclxuXHRcdFx0fSk7XHJcblx0XHRcdFxyXG5cdFx0XHR0aGlzLnRyaWdnZXIoXCJjaGFuZ2VkXCIpO1xyXG5cdFx0fVx0XHRcdFxyXG5cdH0sXHJcblx0e1xyXG5cdFx0c2VsZWN0b3IgOiBcImlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl0sIGlucHV0W3R5cGU9XFxcInJhZGlvXFxcIl1cIixcclxuXHRcdGdldCA6IGZ1bmN0aW9uKCl7XHJcblx0XHRcdGlmKHRoaXMudmFsdWUgPT0gXCJvblwiIHx8IHRoaXMudmFsdWUgPT0gXCJvZmZcIilcclxuXHRcdFx0XHRyZXR1cm4gdGhpcy5jaGVja2VkO1xyXG5cdFx0XHRlbHNlIGlmKHRoaXMuY2hlY2tlZClcclxuXHRcdFx0XHRyZXR1cm4gdGhpcy52YWx1ZTtcdFx0XHRcdFxyXG5cdFx0fSxcclxuXHRcdHNldCA6IGZ1bmN0aW9uKGFWYWx1ZSl7XHJcblx0XHRcdGlmKHR5cGVvZiBhVmFsdWUgPT09IFwiYm9vbGVhblwiKVxyXG5cdFx0XHRcdHRoaXMuY2hlY2tlZCA9IGFWYWx1ZTtcclxuXHRcdFx0ZWxzZSBpZih0eXBlb2YgYVZhbHVlID09PSBcInN0cmluZ1wiKVxyXG5cdFx0XHRcdHRoaXMuY2hlY2tlZCA9IHRoaXMudmFsdWUgPT0gYVZhbHVlO1xyXG5cdFx0XHRlbHNlIGlmKEFycmF5LmlzQXJyYXkoYVZhbHVlKSlcclxuXHRcdFx0XHR0aGlzLmNoZWNrZWQgPSBhVmFsdWUuaW5kZXhPZih0aGlzLnZhbHVlKSA+PSAwO1xyXG5cdFx0XHRcclxuXHRcdFx0dGhpcy50cmlnZ2VyKFwiY2hhbmdlZFwiKTtcclxuXHRcdH1cclxuXHR9XHJcbl07XHJcblxyXG5jb25zdCBEZWZhdWx0SW5wdXRUeXBlID0ge1xyXG5cdFx0Z2V0IDogZnVuY3Rpb24oKXtcclxuXHRcdFx0cmV0dXJuIHRoaXMudmFsdWU7XHJcblx0XHR9LFxyXG5cdFx0c2V0IDogZnVuY3Rpb24oYVZhbHVlKXtcclxuXHRcdFx0dGhpcy52YWx1ZSA9IGFWYWx1ZTtcclxuXHRcdFx0dGhpcy50cmlnZ2VyKFwiaW5wdXRcIik7XHJcblx0XHR9XHRcclxufTtcclxuXHJcbmNvbnN0IGdldElucHV0VHlwZSA9IGZ1bmN0aW9uKGFFbGVtZW50KXtcclxuXHRmb3IobGV0IGkgPSAwOyBpIDwgSW5wdXRUeXBlcy5sZW5ndGg7IGkrKylcclxuXHRcdGlmKGFFbGVtZW50LmlzKElucHV0VHlwZXNbaV0uc2VsZWN0b3IpKVxyXG5cdFx0XHRyZXR1cm4gSW5wdXRUeXBlc1tpXTtcdFx0XHJcblx0cmV0dXJuIERlZmF1bHRJbnB1dFR5cGU7XHJcbn07XHJcblxyXG5cclxuY29uc3Qgc3VwcG9ydCA9IEV4dGVuZGVyKFwiVmFsdWVTdXBwb3J0XCIsIGZ1bmN0aW9uKFByb3RvdHlwZSkge1x0XHJcblx0UHJvdG90eXBlLnZhbCA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0bGV0IHR5cGUgPSBnZXRJbnB1dFR5cGUodGhpcyk7XHJcblx0XHRpZihhcmd1bWVudHMubGVuZ3RoID09IDApXHJcblx0XHRcdHJldHVybiB0eXBlLmdldC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG5cdFx0ZWxzZVxyXG5cdFx0XHR0eXBlLnNldC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG5cdFx0XHRcclxuXHRcdHJldHVybiB0aGlzO1xyXG5cdH07XHRcclxufSk7XHJcbmV4cG9ydCBkZWZhdWx0IHN1cHBvcnQ7IiwiaW1wb3J0IFwiLi9kb20vRXZlbnRUYXJnZXRcIjtcclxuaW1wb3J0IFwiLi9kb20vTm9kZVwiO1xyXG5pbXBvcnQgXCIuL2RvbS9FbGVtZW50XCI7XHJcbmltcG9ydCBcIi4vZG9tL0RvY3VtZW50XCI7XHJcbmltcG9ydCBcIi4vZG9tL0RvY3VtZW50RnJhZ21lbnRcIjtcclxuaW1wb3J0IFwiLi9kb20vSFRNTEVsZW1lbnRcIjtcclxuaW1wb3J0IFwiLi9kb20vSFRNTElucHV0RWxlbWVudFwiO1xyXG5pbXBvcnQgXCIuL2RvbS9IVE1MVGV4dEFyZWFFbGVtZW50XCI7XHJcbmltcG9ydCBcIi4vZG9tL0hUTUxTZWxlY3RFbGVtZW50XCI7XHJcbmltcG9ydCBcIi4vZG9tL05vZGVMaXN0XCI7XHJcbmltcG9ydCBcIi4vR2xvYmFsXCI7XHJcbiIsImNvbnN0IERlbGVnYXRlckJ1aWxkZXIgPSBmdW5jdGlvbigpIHtcclxuXHRsZXQgYXJncyA9IEFycmF5LmZyb20oYXJndW1lbnRzKTtcclxuXHRsZXQgY2FsbGJhY2sgPSBhcmdzLnNoaWZ0KCk7XHJcblx0bGV0IHNvdXJjZSA9IGFyZ3Muc2hpZnQoKTtcclxuXHRhcmdzLmZvckVhY2goKGZ1bmN0aW9uKGFTb3VyY2UsIGFDYWxsYmFjaywgYVRhcmdldCl7XHJcblx0XHRPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhhVGFyZ2V0KS5mb3JFYWNoKFxyXG5cdFx0XHQoZnVuY3Rpb24oYVNvdXJjZSwgYVRhcmdldCxhQ2FsbGJhY2ssICBhTmFtZSkge1xyXG5cdFx0XHRcdGxldCBwcm9wID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihhVGFyZ2V0LCBhTmFtZSk7XHJcblx0XHRcdFx0aWYgKHR5cGVvZiBhU291cmNlW2FOYW1lXSA9PT0gXCJ1bmRlZmluZWRcIiAmJiB0eXBlb2YgcHJvcC52YWx1ZSA9PT0gXCJmdW5jdGlvblwiKVxyXG5cdFx0XHRcdFx0YVNvdXJjZVthTmFtZV0gPSBmdW5jdGlvbigpe3JldHVybiBhQ2FsbGJhY2suY2FsbCh0aGlzLCBhTmFtZSwgYXJndW1lbnRzKTt9O1x0XHRcdFx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdH0pLmJpbmQobnVsbCwgYVNvdXJjZSwgYVRhcmdldCwgYUNhbGxiYWNrKSk7XHJcblx0fSkuYmluZChudWxsLCBzb3VyY2UsIGNhbGxiYWNrKSk7XHJcblx0XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IERlbGVnYXRlckJ1aWxkZXI7IiwiY29uc3QgZXh0ZW5kUHJvdG90eXBlID0gZnVuY3Rpb24oKXtcclxuXHRsZXQgYXJncyA9IFx0QXJyYXkuZnJvbShhcmd1bWVudHMpO1xyXG5cdGxldCB0eXBlID0gYXJncy5zaGlmdCgpO1x0XHJcblx0d2hpbGUoYXJncy5sZW5ndGggPiAwKXtcclxuXHRcdGxldCBleHRlbmRlciA9IGFyZ3Muc2hpZnQoKTtcclxuXHRcdGV4dGVuZGVyKHR5cGUpO1xyXG5cdH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGV4dGVuZFByb3RvdHlwZTsiLCJpbXBvcnQgVXRpbHMgZnJvbSBcIi4vVXRpbHNcIjtcclxuXHJcbmNvbnN0IEVYVEVOU0lPTlNfTUFQID0gVXRpbHMuZ2xvYmFsVmFyKFwiX19ET01fQVBJX0VYVEVOU0lPTl9NQVBfX1wiLCB7fSk7XHJcbmNvbnN0IEV4dGVuZGVyID0gZnVuY3Rpb24oYU5hbWUsIGFFeHRlbnRpb24pe1xyXG5cdHJldHVybiBmdW5jdGlvbihhVHlwZSl7XHRcclxuXHRcdGxldCBleHRlbnNpb25zID0gRVhURU5TSU9OU19NQVBbYVR5cGUubmFtZV07XHJcblx0XHRpZighZXh0ZW5zaW9ucylcclxuXHRcdFx0ZXh0ZW5zaW9ucyA9IEVYVEVOU0lPTlNfTUFQW2FUeXBlLm5hbWVdID0ge307XHRcdFxyXG5cdFx0XHJcblx0XHRpZighZXh0ZW5zaW9uc1thTmFtZV0pe1xyXG5cdFx0XHRleHRlbnNpb25zW2FOYW1lXSA9IHRydWU7XHJcblx0XHRcdGFFeHRlbnRpb24oYVR5cGUucHJvdG90eXBlKTtcclxuXHRcdH1cclxuXHRcdGVsc2VcclxuXHRcdFx0Y29uc29sZS53YXJuKFwiZHVwbGljYXRlZCBsb2FkIG9mIGV4dGVuc2lvbiBcXFwiXCIgKyBhTmFtZSArIFwiXFxcIiFcIik7XHJcblx0fVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRXh0ZW5kZXI7IiwiY29uc3QgVXRpbHMgPSB7XHJcblx0Z2xvYmFsIDogKHdpbmRvdyB8fCBnbG9iYWwgfHwgc2VsZiB8fCB0aGlzIHx8IHt9KSxcclxuXHRnbG9iYWxWYXIgOiBmdW5jdGlvbihhTmFtZSwgYUluaXRWYWx1ZSl7XHJcblx0XHRpZihhcmd1bWVudHMubGVuZ3RoID09PSAyICYmIHR5cGVvZiBVdGlscy5nbG9iYWxbYU5hbWVdID09PSBcInVuZGVmaW5lZFwiKVxyXG5cdFx0XHRVdGlscy5nbG9iYWxbYU5hbWVdID0gYUluaXRWYWx1ZTtcclxuXHRcdFxyXG5cdFx0cmV0dXJuIFV0aWxzLmdsb2JhbFthTmFtZV07XHRcdFxyXG5cdH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFV0aWxzOyIsInZhciBnO1xuXG4vLyBUaGlzIHdvcmtzIGluIG5vbi1zdHJpY3QgbW9kZVxuZyA9IChmdW5jdGlvbigpIHtcblx0cmV0dXJuIHRoaXM7XG59KSgpO1xuXG50cnkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIGV2YWwgaXMgYWxsb3dlZCAoc2VlIENTUClcblx0ZyA9IGcgfHwgbmV3IEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKTtcbn0gY2F0Y2ggKGUpIHtcblx0Ly8gVGhpcyB3b3JrcyBpZiB0aGUgd2luZG93IHJlZmVyZW5jZSBpcyBhdmFpbGFibGVcblx0aWYgKHR5cGVvZiB3aW5kb3cgPT09IFwib2JqZWN0XCIpIGcgPSB3aW5kb3c7XG59XG5cbi8vIGcgY2FuIHN0aWxsIGJlIHVuZGVmaW5lZCwgYnV0IG5vdGhpbmcgdG8gZG8gYWJvdXQgaXQuLi5cbi8vIFdlIHJldHVybiB1bmRlZmluZWQsIGluc3RlYWQgb2Ygbm90aGluZyBoZXJlLCBzbyBpdCdzXG4vLyBlYXNpZXIgdG8gaGFuZGxlIHRoaXMgY2FzZS4gaWYoIWdsb2JhbCkgeyAuLi59XG5cbm1vZHVsZS5leHBvcnRzID0gZztcbiIsImV4cG9ydCBkZWZhdWx0IHtcclxuXHRFVkVOVFMgOiB7XHJcblx0XHRvbkV4ZWN1dGUgOiBcImpzdGwtb24tZXhlY3V0ZVwiLFxyXG5cdFx0b25TdWNjZXNzIDogXCJqc3RsLW9uLXN1Y2Nlc3NcIixcclxuXHRcdG9uRmFpbCA6IFwianN0bC1vbi1mYWlsXCIsXHJcblx0XHRvblJlYWR5IDogXCJqc3RsLW9uLXJlYWR5XCJcclxuXHR9LFxyXG5cdFBIQVNFIDoge1xyXG5cdFx0SU5JVCA6IDEwMDAsXHJcblx0XHRDT05ESVRJT04gOiAyMDAwLFxyXG5cdFx0Q09OVEVYVCA6IDMwMDAsXHJcblx0XHRNQU5JUFVMQVRJT04gOiA0MDAwLFxyXG5cdFx0Q09OVEVOVCA6IDUwMDAsXHJcblx0XHRDTEVBTklORyA6IDYwMDAsXHJcblx0XHRDSElMRFJFTiA6IDcwMDAsXHJcblx0XHRCSU5ESU5HIDogODAwMCxcclxuXHRcdEZJTklTSCA6IDkwMDBcclxuXHR9XHJcbn07XHRcclxuIiwiaW1wb3J0IENvbnN0YW50cyBmcm9tIFwiLi9Db25zdGFudHNcIjtcbmltcG9ydCBUYXNrQ2hhaW4gZnJvbSBcIi4vVGFza0NoYWluXCI7XG5cbmNvbnN0IHRhc2tjaGFpbiA9IG5ldyBUYXNrQ2hhaW4oKTtcblxuY29uc3QgZXhlY3V0ZUVsZW1lbnQgPSBmdW5jdGlvbihhRWxlbWVudCwgYURhdGEsIGFSb290KXtcblx0Y29uc29sZS5sb2coXCJleGVjdXRlIGVsZW1lbnRcIiwgYUVsZW1lbnQuc2VsZWN0b3IoKSwgXCItIHJvb3RcIiwgYVJvb3QgPyBhUm9vdC5zZWxlY3RvcigpIDogdW5kZWZpbmVkKTtcblx0YUVsZW1lbnQudHJpZ2dlcihDb25zdGFudHMuRVZFTlRTLm9uRXhlY3V0ZSk7XG5cdFxuXHRyZXR1cm4gdGFza2NoYWluLmV4ZWN1dGUoYUVsZW1lbnQsIGFEYXRhLCBhUm9vdClcblx0XHQudGhlbihmdW5jdGlvbigpe1xuXHRcdFx0aWYodHlwZW9mIGFSb290ID09PSBcInVuZGVmaW5lZFwiKVxuXHRcdFx0XHRhRWxlbWVudC50cmlnZ2VyKENvbnN0YW50cy5FVkVOVFMub25SZWFkeSk7XG5cdFx0XHRcblx0XHRcdHJldHVybiB7ZWxlbWVudCA6IGFFbGVtZW50LCBkYXRhIDogYURhdGEsIHJvb3QgOiBhUm9vdH07XG5cdFx0fSlbXCJjYXRjaFwiXShmdW5jdGlvbihhRXJyb3Ipe1xuXHRcdFx0aWYodHlwZW9mIGFSb290ID09PSBcInVuZGVmaW5lZFwiKVxuXHRcdFx0XHRhRWxlbWVudC50cmlnZ2VyKENvbnN0YW50cy5FVkVOVFMub25GYWlsKTtcblx0XHRcdFxuXHRcdFx0dGhyb3cgYUVycm9yO1xuXHRcdH0pO1xufTtcblxuY29uc3QgZXhlY3V0ZUVsZW1lbnRzID0gZnVuY3Rpb24odGhlRWxlbWVudHMsIGFEYXRhLCBhUm9vdCl7XG5cdHJldHVybiBleGVjdXRlRWxlbWVudCh0aGVFbGVtZW50cy5zaGlmdCgpLCBhRGF0YSwgYVJvb3QpXG5cdFx0LnRoZW4oZnVuY3Rpb24oYUNvbnRleHQpe1xuXHRcdFx0aWYodGhlRWxlbWVudHMubGVuZ3RoICE9IDApXG5cdFx0XHRcdHJldHVybiBleGVjdXRlRWxlbWVudHModGhlRWxlbWVudHMsIGFDb250ZXh0LmRhdGEsIGFDb250ZXh0LnJvb3QpO1xuXHRcdFx0ZWxzZVxuXHRcdFx0XHRyZXR1cm4gYUNvbnRleHQ7XG5cdFx0fSk7XG59O1xuXG5jb25zdCBQcm9jZXNzb3IgPSB7XG5cdC8qKlxuXHQqIEBwYXJhbSBhVGFzayA6IHtcblx0KiBcdFx0dGl0bGUgOiBzdHJpbmcsXG5cdCogXHRcdGFjY2VwdChhRWxlbWVudCkgOiBQcm9taXNlKEJvb2xlYW4pXG5cdCogXHRcdGV4ZWN1dGUoYUNvbnRleHQpIDogUHJvbWlzZShuZXcgQ29udGV4dClcblx0KiB9XG5cdCogQHBhcmFtIGFQaGFzZSA6IENvbnRhbnRzLlBIQVNFXG5cdCovXHRcblx0YWRkVGFzayA6IGZ1bmN0aW9uKGFUYXNrLCBhUGhhc2Upe1xuXHRcdHRhc2tjaGFpbi5hZGQoYVRhc2ssIGFQaGFzZSlcblx0fSxcblx0Z2V0VGFza2NoYWluIDogZnVuY3Rpb24oKXtcblx0XHRyZXR1cm4gdGFza2NoYWluO1xuXHR9LFxuXHRleGVjdXRlIDogZnVuY3Rpb24oYUVsZW1lbnQsIGFEYXRhLCBhUm9vdCl7XG5cdFx0Ly9AVE9ETyBsb2FkIHRlbXBsYXRlIGRhdGEgLSBpcyBub3QgdGhlIHNhbWUgYXMganN0bC1pbmNsdWRlXG5cdFx0aWYodHlwZW9mIGFFbGVtZW50ID09PSBcInVuZGVmaW5lZFwiIHx8IGFFbGVtZW50ID09IG51bGwpXG5cdFx0XHRyZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKFwiUGFyYW1ldGVyIFxcXCJhRWxlbWVudFxcXCIgaXMgdW5kZWZpbmVkIVwiKSk7XG5cdFx0ZWxzZSBpZihhRWxlbWVudCBpbnN0YW5jZW9mIE5vZGVMaXN0KXtcdFx0XHRcblx0XHRcdHJldHVybiBleGVjdXRlRWxlbWVudHMoQXJyYXkuZnJvbShhRWxlbWVudCksIGFEYXRhLCBhUm9vdClcblx0XHRcdFx0LnRoZW4oZnVuY3Rpb24oKXtcblx0XHRcdFx0XHRyZXR1cm4ge2VsZW1lbnQgOiBhRWxlbWVudCwgZGF0YSA6IGFEYXRhLCByb290IDogYVJvb3R9O1xuXHRcdFx0XHR9KTtcblx0XHR9IGVsc2UgaWYoYUVsZW1lbnQgaW5zdGFuY2VvZiBBcnJheSl7XG5cdFx0XHRyZXR1cm4gZXhlY3V0ZUVsZW1lbnRzKGFFbGVtZW50LCBhRGF0YSwgYVJvb3QpXG5cdFx0XHRcdC50aGVuKGZ1bmN0aW9uKCl7XG5cdFx0XHRcdFx0cmV0dXJuIHtlbGVtZW50IDogYUVsZW1lbnQsIGRhdGEgOiBhRGF0YSwgcm9vdCA6IGFSb290fTtcblx0XHRcdFx0fSk7XG5cdFx0fSBlbHNlIGlmKGFFbGVtZW50IGluc3RhbmNlb2YgTm9kZSlcblx0XHRcdHJldHVybiBleGVjdXRlRWxlbWVudChhRWxlbWVudCwgYURhdGEsIGFSb290KVxuXHRcdGVsc2Vcblx0XHRcdCByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKFwiVHlwZSBvZiBcXFwiYUVsZW1lbnRcXFwiIC0gXFxcIlwiICsgdHlwZW9mIGFFbGVtZW50ICsgXCJcXFwiIGlzIG5vdCBzdXBwb3J0ZWQhXCIpKTtcblx0fVxufTtcbmV4cG9ydCBkZWZhdWx0IFByb2Nlc3NvcjsiLCJpbXBvcnQgQ29uc3RhbnRzIGZyb20gXCIuL0NvbnN0YW50c1wiO1xyXG5cclxuY29uc3QgaW5zZXJ0ID0gZnVuY3Rpb24oYUVudHJ5LCBhQ2hhaW4pe1x0XHJcblx0aWYoYUNoYWluID09IG51bGwpXHJcblx0XHRyZXR1cm4gYUVudHJ5O1xyXG5cdFxyXG5cdGxldCBwYXJlbnQgPSBudWxsO1xyXG5cdGxldCBjdXJyZW50ID0gYUNoYWluO1xyXG5cdHdoaWxlKGN1cnJlbnQgIT0gbnVsbCl7XHJcblx0XHRpZihjdXJyZW50LnBoYXNlID4gYUVudHJ5LnBoYXNlKXtcclxuXHRcdFx0YUVudHJ5Lm5leHQgPSBjdXJyZW50XHJcblx0XHRcdGlmKHBhcmVudCA9PSBudWxsKVx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdHJldHVybiBhRW50cnk7XHJcblx0XHRcdGVsc2V7XHJcblx0XHRcdFx0cGFyZW50Lm5leHQgPSBhRW50cnk7XHJcblx0XHRcdFx0cmV0dXJuIGFDaGFpbjtcclxuXHRcdFx0fVxyXG5cdFx0fVx0XHRcdFxyXG5cdFx0cGFyZW50ID0gY3VycmVudDtcclxuXHRcdGN1cnJlbnQgPSBjdXJyZW50Lm5leHQ7XHJcblx0fVxyXG5cdFxyXG5cdHBhcmVudC5uZXh0ID0gYUVudHJ5O1x0XHJcblx0cmV0dXJuIGFDaGFpbjtcclxufTtcclxuXHJcbmNvbnN0IGV4ZWN1dGVDaGFpbiA9IGZ1bmN0aW9uKGFDb250ZXh0LCBhQ2hhaW4pe1xyXG5cdGNvbnNvbGUubG9nKFwiZXhlY3V0ZSBjaGFpblwiLCBhQ2hhaW4udGFzay5pZCwgXCJjb250ZXh0OlwiICsgYUNvbnRleHQpO1xyXG5cdHJldHVybiBQcm9taXNlLnJlc29sdmUoYUNoYWluLnRhc2suYWNjZXB0KGFDb250ZXh0KSlcclxuXHQudGhlbihmdW5jdGlvbihpc0FjY2VwdGVkKXtcclxuXHRcdGlmKCFpc0FjY2VwdGVkKVxyXG5cdFx0XHRyZXR1cm4gYUNoYWluLm5leHQgPT0gbnVsbCA/IGFDb250ZXh0IDogZXhlY3V0ZUNoYWluKGFDb250ZXh0LCBhQ2hhaW4ubmV4dCk7XHJcblx0XHRcclxuXHRcdHJldHVybiBQcm9taXNlLnJlc29sdmUoYUNoYWluLnRhc2suZXhlY3V0ZShhQ29udGV4dCkpXHJcblx0XHRcdC50aGVuKGZ1bmN0aW9uKGFDb250ZXh0KXtcclxuXHRcdFx0XHRpZih0eXBlb2YgYUNvbnRleHQgPT09IFwidW5kZWZpbmVkXCIpXHJcblx0XHRcdFx0XHRkZWJ1Z2dlcjtcclxuXHRcdFx0XHRpZihhQ29udGV4dC5leGl0IHx8IGFDaGFpbi5uZXh0ID09IG51bGwpXHJcblx0XHRcdFx0XHRyZXR1cm4gYUNvbnRleHQ7XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0cmV0dXJuIGV4ZWN1dGVDaGFpbihhQ29udGV4dCwgYUNoYWluLm5leHQpO1xyXG5cdFx0XHR9KTtcclxuXHR9KTtcdFxyXG59O1xyXG5qXHJcbmNvbnN0IFRhc2tDaGFpbiA9IGZ1bmN0aW9uKCl7XHJcblx0Y29uc3QgdGFza3MgPSB7fTtcdFxyXG5cdHJldHVybiB7XHJcblx0XHRjaGFpbiA6IG51bGwsXHJcblx0XHQvKipcclxuXHRcdCAqIEBwYXJhbSBhVGFzayA6IHtcclxuXHRcdCAqIFx0XHR0aXRsZSA6IHN0cmluZyxcclxuXHRcdCAqIFx0XHRhY2NlcHQoYUVsZW1lbnQpIDogUHJvbWlzZShCb29sZWFuKVxyXG5cdFx0ICogXHRcdGV4ZWN1dGUoYUNvbnRleHQpIDogUHJvbWlzZShuZXcgQ29udGV4dClcclxuXHRcdCAqIH1cclxuXHRcdCAqIEBwYXJhbSBhUGhhc2UgOiBDb250YW50cy5QSEFTRVxyXG5cdFx0ICovXHRcclxuXHRcdGFkZCA6IGZ1bmN0aW9uKGFUYXNrLCBhUGhhc2Upe1xyXG5cdFx0XHRpZih0eXBlb2YgdGFza3NbYVRhc2suaWRdID09PSBcInVuZGVmaW5lZFwiKVx0XHRcclxuXHRcdFx0XHR0aGlzLmNoYWluID0gaW5zZXJ0KHtcclxuXHRcdFx0XHRcdHRhc2sgOiBhVGFzayxcclxuXHRcdFx0XHRcdHBoYXNlIDogKHR5cGVvZiBhUGhhc2UgIT09IFwidW5kZWZpbmVkXCIgPyBhUGhhc2UgOiBDb25zdGFudHMuUEhBU0UuRklOSVNIKSxcclxuXHRcdFx0XHRcdG5leHQgOiBudWxsXHJcblx0XHRcdFx0fSwgdGhpcy5jaGFpbik7XHRcdFx0XHJcblx0XHR9LFxyXG5cdFx0XHJcblx0XHQvKipcclxuXHRcdCAqIEBwYXJhbSBhQ29udGV4dDoge1xyXG5cdFx0ICpcdFx0ZWxlbWVudCxcclxuXHRcdCAqXHRcdGRhdGEsXHJcblx0XHQgKlx0XHRyb290LFxyXG5cdFx0ICpcdFx0cHJvY2Vzc29yLFxyXG5cdFx0ICpcdH1cclxuXHRcdCAqL1xyXG5cdFx0ZXhlY3V0ZSA6IGZ1bmN0aW9uKGFFbGVtZW50LCBhRGF0YSwgYVJvb3Qpe1xyXG5cdFx0XHRyZXR1cm4gZXhlY3V0ZUNoYWluKHtcclxuXHRcdFx0XHRlbGVtZW50IDogYUVsZW1lbnQsXHJcblx0XHRcdFx0ZGF0YSA6IGFEYXRhLFxyXG5cdFx0XHRcdHJvb3QgOiBhUm9vdCB8fCBhRWxlbWVudCxcclxuXHRcdFx0XHRleGl0IDogZmFsc2VcclxuXHRcdFx0fSwgdGhpcy5jaGFpbik7XHJcblx0XHR9XHJcblx0fTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRhc2tDaGFpbjsiLCJpbXBvcnQgXCJAZGVmYXVsdC1qcy9kZWZhdWx0anMtZXh0ZG9tXCI7XHJcbmltcG9ydCBDb25zdGFudHMgZnJvbSBcIi4vQ29uc3RhbnRzXCI7XHJcbmltcG9ydCBQcm9jZXNzb3IgZnJvbSBcIi4vUHJvY2Vzc29yXCI7XHJcbmltcG9ydCBcIi4vdGFza3NcIjtcclxuXHJcbmNvbnN0IHBhY2sgPSB7XHJcblx0Q29uc3RhbnRzIDogQ29uc3RhbnRzLFxyXG5cdFByb2Nlc3NvciA6IFByb2Nlc3NvclxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgcGFjaztcclxuZXhwb3J0IHtDb25zdGFudHMsIFByb2Nlc3Nvcn07IiwiaW1wb3J0IENvbnN0YW50cyBmcm9tIFwiLi4vQ29uc3RhbnRzXCI7XHJcbmltcG9ydCBQcm9jZXNzb3IgZnJvbSBcIi4uL1Byb2Nlc3NvclwiO1xyXG5cclxuY29uc3QgVGFzayA9IHtcclxuXHRpZCA6IFwiYWRkLWF0dHJpYnV0ZVwiLFxyXG5cdGFjY2VwdCA6IGZ1bmN0aW9uKGFDb250ZXh0KXtcclxuXHRcdHJldHVybiBhQ29udGV4dC5lbGVtZW50LmlzKFwiW2pzdGwtYWRkLWF0dHJpYnV0ZV1cIik7XHJcblx0fSxcclxuXHRleGVjdXRlIDogZnVuY3Rpb24oYUNvbnRleHQpe1xyXG5cdFx0cmV0dXJuIFByb21pc2UucmVzb2x2ZShhQ29udGV4dCk7XHJcblx0fVxyXG59O1xyXG5cclxuUHJvY2Vzc29yLmFkZFRhc2soVGFzaywgQ29uc3RhbnRzLlBIQVNFLk1BTklQVUxBVElPTiArIDIwMCk7IiwiaW1wb3J0IENvbnN0YW50cyBmcm9tIFwiLi4vQ29uc3RhbnRzXCI7XHJcbmltcG9ydCBQcm9jZXNzb3IgZnJvbSBcIi4uL1Byb2Nlc3NvclwiO1xyXG5cclxuY29uc3QgVGFzayA9IHtcclxuXHRpZCA6IFwiYXN5bmNcIixcclxuXHRhY2NlcHQgOiBmdW5jdGlvbihhQ29udGV4dCl7XHJcblx0XHRyZXR1cm4gZmFsc2U7XHJcblx0fSxcclxuXHRleGVjdXRlIDogZnVuY3Rpb24oYUNvbnRleHQpe1xyXG5cdFx0cmV0dXJuIFByb21pc2UucmVzb2x2ZShhQ29udGV4dCk7XHJcblx0fVxyXG59O1xyXG5cclxuUHJvY2Vzc29yLmFkZFRhc2soVGFzaywgQ29uc3RhbnRzLlBIQVNFLklOSVQpOyIsImltcG9ydCBDb25zdGFudHMgZnJvbSBcIi4uL0NvbnN0YW50c1wiO1xuaW1wb3J0IFByb2Nlc3NvciBmcm9tIFwiLi4vUHJvY2Vzc29yXCI7XG5pbXBvcnQgZWwgZnJvbSBcIkBkZWZhdWx0LWpzL2RlZmF1bHRqcy1leHByZXNzaW9uLWxhbmd1YWdlXCI7XG5cbmNvbnN0IFJlc29sdmVyID0gZWwuRXhwcmVzc2lvblJlc29sdmVyO1xuXG5jb25zdCBleGVjdXRlID0gZnVuY3Rpb24oYUtleSwgYVZhbHVlLCBhQ29udGV4dCl7XG5cdHJldHVybiBSZXNvbHZlci5yZXNvbHZlVGV4dChhVmFsdWUsIGFDb250ZXh0LmRhdGEpXG5cdC50aGVuKGZ1bmN0aW9uKGFSZXN1bHQpe1xuXHRcdGlmKGFWYWx1ZSAhPSBhUmVzdWx0KVxuXHRcdFx0YUNvbnRleHQuZWxlbWVudC5hdHRyKGFLZXksIGFSZXN1bHQpO1xuXHR9KTtcbn07XG5cbmNvbnN0IFRhc2sgPSB7XG5cdGlkIDogXCJhdHRyaWJ1dGVcIixcblx0YWNjZXB0IDogZnVuY3Rpb24oYUNvbnRleHQpe1xuXHRcdGNvbnN0IGF0dHJpYnV0ZXMgPSBhQ29udGV4dC5lbGVtZW50LmF0dHIoKTtcblx0XHRyZXR1cm4gdHlwZW9mIGF0dHJpYnV0ZXMgIT09IFwidW5kZWZpbmVkXCIgJiYgYXR0cmlidXRlcyAhPSBudWxsICYmICFhQ29udGV4dC5lbGVtZW50LmlzKFwiW2pzdGwtYXR0cmlidXRlLWlnbm9yZV1cIik7XG5cdH0sXG5cdGV4ZWN1dGUgOiBmdW5jdGlvbihhQ29udGV4dCl7XG5cdFx0Y29uc3QgYXR0cmlidXRlcyA9IGFDb250ZXh0LmVsZW1lbnQuYXR0cigpO1xuXHRcdGNvbnN0IHByb21pc2VzID0gW107XG5cdFx0Zm9yKGNvbnN0IGtleSBpbiBhdHRyaWJ1dGVzKVxuXHRcdFx0cHJvbWlzZXMucHVzaChleGVjdXRlKGtleSwgYXR0cmlidXRlc1trZXldLCBhQ29udGV4dCkpO1xuXHRcdFxuXHRcdHJldHVybiBQcm9taXNlLmFsbChwcm9taXNlcylcblx0XHQudGhlbihmdW5jdGlvbigpe1xuXHRcdFx0cmV0dXJuIGFDb250ZXh0O1xuXHRcdH0pO1xuXHR9XG59O1xuXG5Qcm9jZXNzb3IuYWRkVGFzayhUYXNrLCBDb25zdGFudHMuUEhBU0UuQ09OVEVOVCArIDEwMCk7IiwiaW1wb3J0IENvbnN0YW50cyBmcm9tIFwiLi4vQ29uc3RhbnRzXCI7XHJcbmltcG9ydCBQcm9jZXNzb3IgZnJvbSBcIi4uL1Byb2Nlc3NvclwiO1xyXG5cclxuXHJcbmNvbnN0IGV4ZWN1dGVOZXh0ID0gZnVuY3Rpb24oY2hpbGRyZW4sIGFDb250ZXh0KXtcclxuXHRyZXR1cm4gUHJvY2Vzc29yLmV4ZWN1dGUoY2hpbGRyZW4uc2hpZnQoKSwgYUNvbnRleHQuZGF0YSwgYUNvbnRleHQucm9vdClcclxuXHQudGhlbihmdW5jdGlvbihhQ29udGV4dCl7XHJcblx0XHRpZihjaGlsZHJlbi5sZW5ndGggIT0gMClcclxuXHRcdFx0cmV0dXJuIGV4ZWN1dGVOZXh0KGNoaWxkcmVuLCBhQ29udGV4dCk7XHJcblx0XHRlbHNlXHJcblx0XHRcdHJldHVybiBhQ29udGV4dDtcclxuXHR9KTtcclxufTtcclxuXHJcbmNvbnN0IFRhc2sgPSB7XHJcblx0aWQgOiBcImNoaWxkcmVuXCIsXHJcblx0YWNjZXB0IDogZnVuY3Rpb24oYUNvbnRleHQpe1xyXG5cdFx0Y29uc3QgY2hpbGRyZW4gPSBhQ29udGV4dC5lbGVtZW50LmNoaWxkcmVuO1xyXG5cdFx0cmV0dXJuIGNoaWxkcmVuICE9IG51bGwgJiYgY2hpbGRyZW4ubGVuZ3RoID4gMDtcclxuXHR9LFxyXG5cdGV4ZWN1dGUgOiBmdW5jdGlvbihhQ29udGV4dCl7XHJcblx0XHQvL2NvbnN0IGNoaWxkcmVuID0gQXJyYXkuZnJvbShhQ29udGV4dC5lbGVtZW50LmZpbmQoXCI6c2NvcGU+KlwiKSk7XHJcbi8vXHRcdC5maWx0ZXIoZnVuY3Rpb24oYU5vZGUpe1xyXG4vL1x0XHRcdHJldHVybiBhTm9kZS5ub2RlVHlwZSAhPSAzICYmIGFOb2RlLm5vZGVUeXBlICE9IDQ7XHJcbi8vXHRcdH0pO1xyXG5cdFx0XHJcblx0XHQvL3JldHVybiBleGVjdXRlTmV4dChjaGlsZHJlbiwgYUNvbnRleHQpO1xyXG5cdFx0cmV0dXJuIFByb2Nlc3Nvci5leGVjdXRlKGFDb250ZXh0LmVsZW1lbnQuZmluZChcIjpzY29wZT4qXCIpLCBhQ29udGV4dC5kYXRhLCBhQ29udGV4dC5yb290KVxyXG5cdH1cclxufTtcclxuXHJcblByb2Nlc3Nvci5hZGRUYXNrKFRhc2ssIENvbnN0YW50cy5QSEFTRS5DSElMRFJFTik7IiwiaW1wb3J0IGVsIGZyb20gXCJAZGVmYXVsdC1qcy9kZWZhdWx0anMtZXhwcmVzc2lvbi1sYW5ndWFnZVwiO1xyXG5pbXBvcnQgQ29uc3RhbnRzIGZyb20gXCIuLi9Db25zdGFudHNcIjtcclxuaW1wb3J0IFByb2Nlc3NvciBmcm9tIFwiLi4vUHJvY2Vzc29yXCI7XHJcblxyXG5jb25zdCBSZXNvbHZlciA9IGVsLkV4cHJlc3Npb25SZXNvbHZlcjtcclxuXHJcbmNvbnN0IHdoZW4gPSBmdW5jdGlvbih0aGVOb2RlcywgYUNvbnRleHQpe1xyXG5cdGlmKHRoZU5vZGVzLmxlbmd0aCA9PSAwKVxyXG5cdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0XHJcblx0Y29uc3Qgbm9kZSA9IHRoZU5vZGVzLnNoaWZ0KCk7XHJcblx0cmV0dXJuIFJlc29sdmVyLnJlc29sdmUobm9kZS5hdHRyKFwianN0bC13aGVuXCIpLCBhQ29udGV4dC5kYXRhLCBmYWxzZSlcclxuXHQudGhlbihmdW5jdGlvbihhUmVzdWx0KXtcclxuXHRcdGlmKCEhYVJlc3VsdCl7XHJcblx0XHRcdHRoZU5vZGVzLmZvckVhY2goZnVuY3Rpb24obm9kZSl7bm9kZS5yZW1vdmUoKX0pO1xyXG5cdFx0XHRyZXR1cm4gYVJlc3VsdDtcclxuXHRcdH1cclxuXHRcdFxyXG5cdFx0bm9kZS5yZW1vdmUoKTtcclxuXHRcdHJldHVybiB3aGVuKHRoZU5vZGVzLCBhQ29udGV4dClcclxuXHR9KVxyXG59O1xyXG5cclxuY29uc3QgVGFzayA9IHtcclxuXHRpZCA6IFwiY2hvb3NlXCIsXHJcblx0YWNjZXB0IDogZnVuY3Rpb24oYUNvbnRleHQpe1xyXG5cdFx0cmV0dXJuIGFDb250ZXh0LmVsZW1lbnQuaXMoXCJbanN0bC1jaG9vc2VdXCIpO1xyXG5cdH0sXHJcblx0ZXhlY3V0ZSA6IGZ1bmN0aW9uKGFDb250ZXh0KXtcclxuXHRcdHJldHVybiB3aGVuKEFycmF5LmZyb20oYUNvbnRleHQuZWxlbWVudC5maW5kKFwiOnNjb3BlID4gW2pzdGwtd2hlbl1cIikpLCBhQ29udGV4dClcclxuXHRcdC50aGVuKGZ1bmN0aW9uKGFSZXN1bHQpe1xyXG5cdFx0XHRpZighIWFSZXN1bHQpXHJcblx0XHRcdFx0YUNvbnRleHQuZWxlbWVudC5maW5kKFwiOnNjb3BlID4gW2pzdGwtb3RoZXJ3aXNlXVwiKS5yZW1vdmUoKTtcdFx0XHRcclxuXHRcdH0pLnRoZW4oZnVuY3Rpb24oKXtcclxuXHRcdFx0cmV0dXJuIGFDb250ZXh0O1xyXG5cdFx0fSk7XHJcblx0fVxyXG59O1xyXG5cclxuUHJvY2Vzc29yLmFkZFRhc2soVGFzaywgQ29uc3RhbnRzLlBIQVNFLk1BTklQVUxBVElPTiArIDEwMCk7IiwiaW1wb3J0IENvbnN0YW50cyBmcm9tIFwiLi4vQ29uc3RhbnRzXCI7XHJcbmltcG9ydCBQcm9jZXNzb3IgZnJvbSBcIi4uL1Byb2Nlc3NvclwiO1xyXG5pbXBvcnQgZWwgZnJvbSBcIkBkZWZhdWx0LWpzL2RlZmF1bHRqcy1leHByZXNzaW9uLWxhbmd1YWdlXCI7XHJcbmltcG9ydCBPYmplY3RVdGlscyBmcm9tIFwiQGRlZmF1bHQtanMvZGVmYXVsdGpzLWNvbW1vbi11dGlscy9zcmMvT2JqZWN0VXRpbHNcIjtcclxuXHJcblxyXG5jb25zdCBSZXNvbHZlciA9IGVsLkV4cHJlc3Npb25SZXNvbHZlcjtcclxuY29uc3QgR2xvYmFsID0gd2luZG93IHx8IGdsb2JhbCB8fCBzZWxmIHx8IHRoaXMgfHwge307XHJcblxyXG5jb25zdCBnZXRQYXJhbWV0ZXIgPSBmdW5jdGlvbihhUGFyYW1ldGVyKXtcclxuXHRjb25zdCBuYW1lID0gYVBhcmFtZXRlci5yZXBsYWNlKC9bXFxbXFxdXS9nLCBcIlxcXFwkJlwiKTtcclxuXHRjb25zdCB2YWx1ZSA9IG5ldyBSZWdFeHAoXCJbPyZdXCIgKyBuYW1lICsgXCIoPShbXiYjXSopfCZ8I3wkKVwiKS5leGVjKEdsb2JhbC5sb2NhdGlvbi5zZWFyY2gpO1xyXG5cdGlmICghcmVzdWx0cykgXHJcblx0XHRyZXR1cm4gdW5kZWZpbmVkO1xyXG5cdGVsc2UgaWYgKCFyZXN1bHRzWzJdKSBcclxuXHRcdHJldHVybiBcIlwiO1xyXG5cdGVsc2VcclxuXHRcdHJldHVybiBHbG9iYWwuZGVjb2RlVVJJQ29tcG9uZW50KHJlc3VsdHNbMl0ucmVwbGFjZSgvXFwrL2csIFwiIFwiKSk7XHJcbn1cclxuXHJcbmNvbnN0IE1PREVTID0ge1xyXG5cdFwiZGlyZWN0XCIgOiBmdW5jdGlvbihhbkV4cHJlc3Npb24sIGFDb250ZXh0KXtcclxuXHRcdHJldHVybiBSZXNvbHZlci5yZXNvbHZlKGFuRXhwcmVzc2lvbiwgYUNvbnRleHQuZGF0YSk7XHJcblx0fSxcclxuXHRcInJlbW90ZVwiIDogZnVuY3Rpb24oYW5FeHByZXNzaW9uLCBhQ29udGV4dCl7XHRcdFxyXG5cdFx0cmV0dXJuIFByb21pc2UuYWxsKFtcclxuXHRcdFx0XHRSZXNvbHZlci5yZXNvbHZlVGV4dChhbkV4cHJlc3Npb24sIGFDb250ZXh0LmRhdGEpLFxyXG5cdFx0XHRcdFJlc29sdmVyLnJlc29sdmUoYUNvbnRleHQuZWxlbWVudC5hdHRyKFwianN0bC1kYXRhLW9wdGlvbnNcIikgfHwgXCJ1bmRlZmluZWRcIiwgYUNvbnRleHQuZGF0YSlcclxuXHRcdFx0XSkudGhlbihmdW5jdGlvbihhcmdzKXtcclxuXHRcdFx0XHRyZXR1cm4gZmV0Y2goLyp1cmwqL2FyZ3NbMF0sIC8qb3B0aW9uKi9PYmplY3RVdGlscy5pc1Bvam8oYXJnc1sxXSkgPyBhcmdzWzFdIDogbnVsbCk7XHJcblx0XHRcdH0pLnRoZW4oZnVuY3Rpb24oYVJlc3BvbnNlKXtcdFx0XHRcdFxyXG5cdFx0XHRcdHJldHVybiBSZXNvbHZlci5yZXNvbHZlVGV4dChhQ29udGV4dC5lbGVtZW50LmF0dHIoXCJqc3RsLWRhdGEtZGF0YXR5cGVcIikgfHwgXCJqc29uXCIsIGFDb250ZXh0LmRhdGEpXHJcblx0XHRcdFx0LnRoZW4oZnVuY3Rpb24oYURhdGF0eXBlKXtcclxuXHRcdFx0XHRcdGNvbnN0IG1hcHBlciA9IERBVEFUWVBFU1thRGF0YXR5cGVdO1xyXG5cdFx0XHRcdFx0aWYodHlwZW9mIG1hcHBlciA9PT0gXCJmdW5jdGlvblwiKVxyXG5cdFx0XHRcdFx0XHRyZXR1cm4gbWFwcGVyKGFSZXNwb25zZSwgYUNvbnRleHQpO1x0XHRcdFx0XHRcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fSk7XHJcblx0fSxcclxuXHRcInVybC1wYXJhbWV0ZXJcIiA6IGZ1bmN0aW9uKGFuRXhwcmVzc2lvbiwgYUNvbnRleHQpe1xyXG5cdFx0cmV0dXJuIFJlc29sdmVyLnJlc29sdmVUZXh0KGFuRXhwcmVzc2lvbiwgYUNvbnRleHQuZGF0YSlcclxuXHRcdC50aGVuKGZ1bmN0aW9uKGFQYXJhbWV0ZXIpe1xyXG5cdFx0XHRyZXR1cm4gZ2V0UGFyYW1ldGVyKGFQYXJhbWV0ZXIpO1xyXG5cdFx0fSk7XHJcblx0fSxcclxufTtcclxuXHJcbmNvbnN0IERBVEFUWVBFUyA9IHtcclxuXHRcImpzb25cIiA6IGZ1bmN0aW9uKGFSZXNwb25zZSl7XHJcblx0XHRyZXR1cm4gYVJlc3BvbnNlLmpzb24oKTtcclxuXHR9XHJcbn07XHJcblxyXG5jb25zdCBUYXNrID0ge1xyXG5cdGlkIDogXCJkYXRhXCIsXHJcblx0YWNjZXB0IDogZnVuY3Rpb24oYUNvbnRleHQpe1xyXG5cdFx0cmV0dXJuIGFDb250ZXh0LmVsZW1lbnQuaXMoXCJbanN0bC1kYXRhXVwiKTtcclxuXHR9LFxyXG5cdGV4ZWN1dGUgOiBmdW5jdGlvbihhQ29udGV4dCl7XHRcdFxyXG5cdFx0Y29uc3QgbW9kZSA9IGFDb250ZXh0LmVsZW1lbnQuYXR0cihcImpzdGwtZGF0YS1tb2RlXCIpIHx8IFwiZGlyZWN0XCI7XHJcblx0XHRjb25zdCBhY3Rpb24gPSBNT0RFU1ttb2RlXTtcclxuXHRcdGlmKHR5cGVvZiBhY3Rpb24gIT09IFwiZnVuY3Rpb25cIilcdFx0XHJcblx0XHRcdHJldHVybiBQcm9taXNlLnJlc29sdmUoYUNvbnRleHQpO1xyXG5cdFx0XHJcblx0XHRcclxuXHRcdGNvbnN0IHZhcm5hbWUgPSBhQ29udGV4dC5lbGVtZW50LmF0dHIoXCJqc3RsLWRhdGEtdmFyXCIpO1xyXG5cdFx0Y29uc3QgZGVmYXVsdFZhbHVlID0gYUNvbnRleHQuZWxlbWVudC5hdHRyKFwianN0bC1kYXRhLWRlZmF1bHRcIik7XHJcblx0XHRjb25zdCBleHByZXNzaW9uID0gYUNvbnRleHQuZWxlbWVudC5hdHRyKFwianN0bC1kYXRhXCIpO1xyXG5cdFx0XHJcblx0XHRyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGFjdGlvbihleHByZXNzaW9uLCBhQ29udGV4dCkpXHJcblx0XHRcdC50aGVuKGZ1bmN0aW9uKGFEYXRhKXtcclxuXHRcdFx0XHRpZih0eXBlb2YgYURhdGEgPT09IFwidW5kZWZpbmVkXCIpXHJcblx0XHRcdFx0XHRyZXR1cm4gUmVzb2x2ZXIucmVzb2x2ZShkZWZhdWx0VmFsdWUsIGFDb250ZXh0LmRhdGEpO1xyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdHJldHVybiBhRGF0YTtcclxuXHRcdFx0fSkudGhlbihmdW5jdGlvbihhRGF0YSl7XHJcblx0XHRcdFx0aWYodmFybmFtZSlcclxuXHRcdFx0XHRcdGFDb250ZXh0LmRhdGFbdmFybmFtZV0gPSBhRGF0YTtcclxuXHRcdFx0XHRlbHNlIGlmKHR5cGVvZiBhRGF0YSAhPT0gXCJ1bmRlZmluZWRcIilcclxuXHRcdFx0XHRcdE9iamVjdFV0aWxzLm1lcmdlKGFDb250ZXh0LmRhdGEsIGFEYXRhKTtcclxuXHRcdFx0XHRcclxuXHRcdFx0XHRyZXR1cm4gYUNvbnRleHQ7XHJcblx0XHRcdH0pO1xyXG5cdH1cclxufTtcclxuXHJcblByb2Nlc3Nvci5hZGRUYXNrKFRhc2ssIENvbnN0YW50cy5QSEFTRS5DT05URVhUICsgMTAwKTtcclxuZXhwb3J0IHtNT0RFUywgREFUQVRZUEVTfSIsImltcG9ydCBlbCBmcm9tIFwiQGRlZmF1bHQtanMvZGVmYXVsdGpzLWV4cHJlc3Npb24tbGFuZ3VhZ2VcIjtcclxuaW1wb3J0IENvbnN0YW50cyBmcm9tIFwiLi4vQ29uc3RhbnRzXCI7XHJcbmltcG9ydCBQcm9jZXNzb3IgZnJvbSBcIi4uL1Byb2Nlc3NvclwiO1xyXG5pbXBvcnQgT2JqZWN0VXRpbHMgZnJvbSBcIkBkZWZhdWx0LWpzL2RlZmF1bHRqcy1jb21tb24tdXRpbHMvc3JjL09iamVjdFV0aWxzXCI7XHJcblxyXG5jb25zdCBSZXNvbHZlciA9IGVsLkV4cHJlc3Npb25SZXNvbHZlcjtcclxuY29uc3QgREFUQU5BTUUgPSBcImRlZmF1bHRqcy50bC5mb3JlYWNoLnRlbXBsYXRlXCI7XHJcbmNvbnN0IEFUVFJJQlVURSA9IHtcclxuXHREQVRBIDogXCJqc3RsLWZvcmVhY2hcIixcclxuXHRWQVJOQU1FIDogXCJqc3RsLWZvcmVhY2gtdmFyXCIsXHJcblx0U1RBVFVTVkFSTkFNRSA6IFwianN0bC1mb3JlYWNoLXN0YXR1c1wiLFxyXG5cdENPVU5UIDogXCJqc3RsLWZvcmVhY2gtY291bnRcIixcclxuXHRTVEFSVElOREVYIDogXCJqc3RsLWZvcmVhY2gtc3RhcnQtaW5kZXhcIixcclxuXHRTVEVQIDogXCJqc3RsLWZvcmVhY2gtc3RlcFwiLFxyXG5cdEJSRUFLQ09ORElUSU9OIDogXCJqc3RsLWZvcmVhY2gtYnJlYWstY29uZGl0aW9uXCJcclxufTtcclxuXHJcbmNvbnN0IGNvdW50ID0gZnVuY3Rpb24oYVZhcm5hbWUsIGFTdGF0dXNuYW1lLCBhQ29udGV4dCwgYVRlbXBsYXRlKSB7XHJcblx0cmV0dXJuIFByb21pc2UuYWxsKFtcclxuXHRcdFJlc29sdmVyLnJlc29sdmUoYUNvbnRleHQuZWxlbWVudC5hdHRyKEFUVFJJQlVURS5TVEFSVElOREVYKSB8fCAwLCBhQ29udGV4dC5kYXRhLCAwKSxcclxuXHRcdFJlc29sdmVyLnJlc29sdmUoYUNvbnRleHQuZWxlbWVudC5hdHRyKEFUVFJJQlVURS5DT1VOVCkgfHwgMCwgYUNvbnRleHQuZGF0YSwgMCksXHJcblx0XHRSZXNvbHZlci5yZXNvbHZlKGFDb250ZXh0LmVsZW1lbnQuYXR0cihBVFRSSUJVVEUuU1RFUCkgfHwgMSwgYUNvbnRleHQuZGF0YSwgMSlcclxuXHRdKS50aGVuKGZ1bmN0aW9uKGFSZXN1bHRzKXtcclxuXHRcdGxldCBwcm9taXNlcyA9IFtdO1xyXG5cdFx0Y29uc3Qgc3RhcnQgPSBhUmVzdWx0c1swXSB8fCAwO1xyXG5cdFx0Y29uc3QgY291bnQgPSBhUmVzdWx0c1sxXSB8fCAwO1xyXG5cdFx0Y29uc3Qgc3RlcCA9IGFSZXN1bHRzWzJdIHx8IDE7XHJcblx0XHRmb3IgKGxldCBpID0gc3RhcnQ7IGkgPCBjb3VudDsgaSArPSBzdGVwKSB7ICAgIFx0XHRcdCAgICBcclxuXHRcdCAgICBjb25zdCBjb250ZXh0ID0gT2JqZWN0VXRpbHMubWVyZ2Uoe30sIGFDb250ZXh0LmRhdGEpO1xyXG5cdFx0ICAgIGNvbnRleHRbYVZhcm5hbWVdID0gaSxcclxuXHRcdCAgICBjb250ZXh0W2FTdGF0dXNuYW1lXSA9IHtcclxuXHRcdCAgICAgICAgXCJpbmRleFwiIDogaSxcclxuXHRcdCAgICAgICAgXCJudW1iZXJcIiA6IGkgKyAxLCBcclxuXHRcdCAgICAgICAgXCJjb3VudFwiIDogYVJlc3VsdHNbMV0sXHJcblx0XHQgICAgICAgIFwiY29udGV4dFwiIDogYUNvbnRleHQuZGF0YVxyXG5cdFx0ICAgIH07XHJcblx0XHQgICAgcHJvbWlzZXMucHVzaChQcm9jZXNzb3IuZXhlY3V0ZShhVGVtcGxhdGUuY2xvbmVOb2RlKHRydWUpLCBjb250ZXh0LCBhQ29udGV4dC5yb290KVxyXG5cdFx0ICAgIFx0LnRoZW4oZnVuY3Rpb24oYVJlc3VsdCl7XHJcblx0ICAgIFx0XHRcdHJldHVybiBhUmVzdWx0LmVsZW1lbnQ7XHJcblx0ICAgIFx0XHR9KSk7XHJcblx0ICAgIH1cclxuXHRcdFxyXG5cdFx0cmV0dXJuIFByb21pc2UuYWxsKHByb21pc2VzKTtcclxuXHR9KTsgICAgXHJcbn07XHJcblxyXG5jb25zdCBpdGVyYXRlTGlzdCA9IGZ1bmN0aW9uKGFJbmRleCwgYURhdGEsIGFCcmVha0NvbmRpdGlvbiwgYVZhcm5hbWUsIGFTdGF0dXNuYW1lLCBhQ29udGV4dCwgYVRlbXBsYXRlLCBhUmVzdWx0KXtcclxuXHRpZihhSW5kZXggPj0gYURhdGEubGVuZ3RoKVxyXG5cdFx0cmV0dXJuIGFSZXN1bHQ7XHRcclxuXHRcclxuXHRjb25zdCBjb250ZXh0ID0gT2JqZWN0VXRpbHMubWVyZ2Uoe30sIGFDb250ZXh0KTtcclxuICAgIGNvbnRleHRbYVZhcm5hbWVdID0gYURhdGFbYUluZGV4XSxcclxuICAgIGNvbnRleHRbYVN0YXR1c25hbWVdID0ge1xyXG4gICAgICAgIFwiaW5kZXhcIiA6IGFJbmRleCxcclxuICAgICAgICBcIm51bWJlclwiIDogYUluZGV4ICsgMSwgXHJcbiAgICAgICAgXCJjb3VudFwiIDogYURhdGEubGVuZ3RoLFxyXG4gICAgICAgIFwiZGF0YVwiIDogYURhdGEsXHJcbiAgICAgICAgXCJjb250ZXh0XCIgOiBhQ29udGV4dC5kYXRhXHJcbiAgICB9O1xyXG4gICAgXHJcbiAgICByZXR1cm4gUmVzb2x2ZXIucmVzb2x2ZShhQnJlYWtDb25kaXRpb24sIGNvbnRleHQsIGZhbHNlKVxyXG4gICAgLnRoZW4oZnVuY3Rpb24oZG9CcmVhayl7XHJcbiAgICBcdGlmKCFkb0JyZWFrKXtcclxuICAgIFx0XHRyZXR1cm4gYUNvbnRleHQucHJvY2Vzc29yLmV4ZWN1dGUoYVRlbXBsYXRlLmNsb25lTm9kZSh0cnVlKSwgY29udGV4dCwgYUNvbnRleHQucm9vdClcclxuICAgIFx0XHQudGhlbihmdW5jdGlvbihhQ29udGVudCl7XHJcbiAgICBcdFx0XHRyZXR1cm4gYVJlc3VsdC5wdXNoKGFDb250ZW50LmVsZW1lbnQpO1xyXG4gICAgXHRcdH0pO1xyXG4gICAgXHR9XHJcbiAgICBcdFxyXG4gICAgXHRyZXR1cm4gYVJlc3VsdDtcclxuICAgIH0pO1x0XHJcbn07XHJcblxyXG5jb25zdCBsaXN0ID0gZnVuY3Rpb24oYURhdGEsIGFWYXJuYW1lLCBhU3RhdHVzbmFtZSwgYUNvbnRleHQsIGFUZW1wbGF0ZSkge1x0XHJcblx0Y29uc3QgYnJlYWtDb25kaXRpb24gPSBhQ29udGV4dC5lbGVtZW50LmF0dHIoQVRUUklCVVRFLkJSRUFLQ09ORElUSU9OKTtcclxuXHRyZXR1cm4gUmVzb2x2ZXIucmVzb2x2ZShhQ29udGV4dC5lbGVtZW50LmF0dHIoQVRUUklCVVRFLlNUQVJUSU5ERVgpLCBhQ29udGV4dC5kYXRhLCAwKVxyXG5cdC50aGVuKGZ1bmN0aW9uKGFTdGFydEluZGV4KXtcclxuXHRcdHJldHVybiBpdGVyYXRlTGlzdChhU3RhcnRJbmRleCxhRGF0YSwgYVZhcm5hbWUsIGFTdGF0dXNuYW1lLCBhQ29udGV4dCwgYVRlbXBsYXRlLCBbXSk7XHQgICAgXHRcclxuXHR9KTtcclxufTtcclxuXHJcbmNvbnN0IGl0ZXJhdGVNYXAgPSBmdW5jdGlvbihhSW5kZXgsIGFLZXlzLCBhRGF0YSwgYUJyZWFrQ29uZGl0aW9uLCBhVmFybmFtZSwgYVN0YXR1c25hbWUsIGFDb250ZXh0LCBhVGVtcGxhdGUsIGFSZXN1bHQpe1xyXG5cdGlmKGFJbmRleCA+PSBhRGF0YS5sZW5ndGgpXHJcblx0XHRyZXR1cm4gYVJlc3VsdDtcclxuXHRcclxuXHRjb25zdCBrZXkgPSBhS2V5c1thSW5kZXhdO1xyXG5cdGNvbnN0IGNvbnRleHQgPSBPYmplY3RVdGlscy5tZXJnZSh7fSwgYUNvbnRleHQpO1xyXG4gICAgY29udGV4dFthVmFybmFtZV0gPSBhRGF0YVtrZXldLFxyXG4gICAgY29udGV4dFthU3RhdHVzbmFtZV0gPSB7XHJcbiAgICAgICAgXCJpbmRleFwiIDogYUluZGV4LFxyXG4gICAgICAgIFwibnVtYmVyXCIgOiBhSW5kZXggKyAxLFxyXG4gICAgICAgIFwia2V5XCIgOiBrZXksXHJcbiAgICAgICAgXCJjb3VudFwiIDogYURhdGEubGVuZ3RoLFxyXG4gICAgICAgIFwiZGF0YVwiIDogYURhdGEsXHJcbiAgICAgICAgXCJjb250ZXh0XCIgOiBhQ29udGV4dC5kYXRhXHJcbiAgICB9O1xyXG4gICAgXHJcbiAgICByZXR1cm4gUmVzb2x2ZXIucmVzb2x2ZShhQnJlYWtDb25kaXRpb24sIGNvbnRleHQsIGZhbHNlKVxyXG4gICAgLnRoZW4oZnVuY3Rpb24oZG9CcmVhayl7XHJcbiAgICBcdGlmKCFkb0JyZWFrKXtcclxuICAgIFx0XHRyZXR1cm4gYUNvbnRleHQucHJvY2Vzc29yLmV4ZWN1dGUoYVRlbXBsYXRlLmNsb25lTm9kZSh0cnVlKSwgY29udGV4dCwgYUNvbnRleHQucm9vdClcclxuICAgIFx0XHQudGhlbihmdW5jdGlvbihhQ29udGVudCl7XHJcbiAgICBcdFx0XHRyZXR1cm4gYVJlc3VsdC5wdXNoKGFDb250ZW50LmVsZW1lbnQpO1xyXG4gICAgXHRcdH0pOyAgICBcdFx0XHJcbiAgICBcdH1cclxuICAgIFx0XHJcbiAgICBcdHJldHVybiBhUmVzdWx0O1xyXG4gICAgfSk7XHJcbn07XHJcblxyXG5jb25zdCBtYXAgPSBmdW5jdGlvbihhRGF0YSwgYVZhcm5hbWUsIGFTdGF0dXNuYW1lLCBhQ29udGV4dCwgYVRlbXBsYXRlKSB7XHJcblx0Y29uc3QgYnJlYWtDb25kaXRpb24gPSBhQ29udGV4dC5lbGVtZW50LmF0dHIoQVRUUklCVVRFLkJSRUFLQ09ORElUSU9OKTtcclxuXHRyZXR1cm4gUmVzb2x2ZXIucmVzb2x2ZShhQ29udGV4dC5lbGVtZW50LmF0dHIoQVRUUklCVVRFLlNUQVJUSU5ERVgpLCBhQ29udGV4dC5kYXRhLCAwKVxyXG5cdC50aGVuKGZ1bmN0aW9uKGFTdGFydEluZGV4KXtcclxuXHRcdHJldHVybiBpdGVyYXRlTWFwKGFTdGFydEluZGV4LCBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhhRGF0YSksIGFEYXRhLCBhVmFybmFtZSwgYVN0YXR1c25hbWUsIGFDb250ZXh0LCBhVGVtcGxhdGUsIFtdKTtcdCAgICBcdFxyXG5cdH0pO1xyXG59O1xyXG5cclxuY29uc3QgZ2V0VGVtcGxhdGUgPSBmdW5jdGlvbihhRWxlbWVudCkge1xyXG4gICAgbGV0IHRlbXBsYXRlID0gYUVsZW1lbnQuZGF0YShEQVRBTkFNRSk7XHJcbiAgICBpZiAodHlwZW9mIHRlbXBsYXRlID09PSAndW5kZWZpbmVkJykge1xyXG5cdCAgICB0ZW1wbGF0ZSA9IGFFbGVtZW50LmNvbnRlbnQoKTtcclxuXHQgICAgYUVsZW1lbnQuZGF0YShEQVRBTkFNRSwgdGVtcGxhdGUpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRlbXBsYXRlO1xyXG59O1xyXG5cclxuXHJcbmNvbnN0IGV4ZWN1dGUgPSBmdW5jdGlvbihhbkV4cHJlc3Npb24sIGFWYXJuYW1lLCBhU3RhdHVzbmFtZSwgYUNvbnRleHQsIGFUZW1wbGF0ZSl7XHJcblx0aWYgKGFuRXhwcmVzc2lvbiA9PSBudWxsICYmIHR5cGVvZiBhQ29udGV4dC5lbGVtZW50LmF0dHIoQVRUUklCVVRFLkNPVU5UKSAhPT0gXCJ1bmRlZmluZWRcIilcclxuXHQgICAgcmV0dXJuIGNvdW50KGFWYXJuYW1lLCBhU3RhdHVzbmFtZSwgYUNvbnRleHQsIGFUZW1wbGF0ZSk7XHJcbiAgICBlbHNlIGlmKGV4cHJlc3Npb24gIT0gbnVsbCl7XHJcblx0ICAgIGxldCBkYXRhID0gUmVzb2x2ZXIucmVzb2x2ZShhbkV4cHJlc3Npb24sIGFDb250ZXh0LCBudWxsKTtcclxuXHQgICAgaWYoZGF0YSA9PSBudWxsKVxyXG5cdCAgICBcdHJldHVybiBhQ29udGV4dDtcclxuXHQgICAgZWxzZSBpZiAoZGF0YSBpbnN0YW5jZW9mIEFycmF5KVxyXG5cdFx0ICAgIHJldHVybiBsaXN0KGRhdGEsIGFWYXJuYW1lLCBhU3RhdHVzbmFtZSwgYUNvbnRleHQsIGFUZW1wbGF0ZSk7XHJcblx0ICAgIGVsc2UgaWYoZGF0YSBpbnN0YW5jZW9mIE9iamVjdClcclxuXHQgICAgXHRyZXR1cm4gbWFwKGRhdGEsIGFWYXJuYW1lLCBhU3RhdHVzbmFtZSwgYUNvbnRleHQsIGFUZW1wbGF0ZSk7XHRcdFx0XHQgICBcclxuXHQgICAgZWxzZVxyXG5cdFx0ICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG59O1xyXG5cclxuXHJcbmNvbnN0IFRhc2sgPSB7XHJcblx0aWQgOiBcImZvcmVhY2hcIixcclxuXHRhY2NlcHQgOiBmdW5jdGlvbihhQ29udGV4dCl7XHJcblx0XHRyZXR1cm4gYUNvbnRleHQuZWxlbWVudC5pcyhcIltqc3RsLWZvcmVhY2hdXCIpO1xyXG5cdH0sXHJcblx0ZXhlY3V0ZSA6IGZ1bmN0aW9uKGFDb250ZXh0KXtcdFx0XHJcblx0XHRjb25zdCBlbGVtZW50ID0gYUNvbnRleHQuZWxlbWVudDtcclxuXHRcdGNvbnN0IHRlbXBsYXRlID0gZ2V0VGVtcGxhdGUoYUNvbnRleHQuZWxlbWVudCk7XHJcblx0ICAgIGlmICh0eXBlb2YgdGVtcGxhdGUgIT09ICd1bmRlZmluZWQnKSB7XHJcblx0ICAgIFx0Y29uc3QgZXhwcmVzc2lvbiA9IGVsZW1lbnQuYXR0cihBVFRSSUJVVEUuREFUQSkgfHwgbnVsbDtcclxuXHQgICAgXHRjb25zdCB2YXJuYW1lID0gZWxlbWVudC5hdHRyKEFUVFJJQlVURS5WQVJOQU1FKSB8fCBcIml0ZW1WYXJcIjsgXHJcblx0XHQgICAgY29uc3Qgc3RhdHVzbmFtZSA9IGVsZW1lbnQuYXR0cihBVFRSSUJVVEUuU1RBVFVTVkFSTkFNRSkgfHwgXCJzdGF0dXNWYXJcIjtcclxuXHRcdCAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGV4ZWN1dGUoZXhwcmVzc2lvbiwgdmFybmFtZSwgc3RhdHVzbmFtZSwgYUNvbnRleHQsIHRlbXBsYXRlKSlcclxuXHRcdCAgICAudGhlbihmdW5jdGlvbihhQ29udGVudCl7XHJcblx0XHQgICAgXHRpZih0eXBlb2YgYUNvbnRlbnQgPT09IFwidW5kZWZpbmVkXCIpXHJcblx0XHQgICAgXHRcdHJldHVybiBbXTtcclxuXHRcdCAgICBcdFxyXG5cdFx0ICAgIFx0Y29uc3QgcmVzdWx0ID0gW107XHJcblx0ICAgIFx0XHRhQ29udGVudC5mb3JFYWNoKGZ1bmN0aW9uKGFJdGVtKXtcclxuXHQgICAgXHRcdFx0aWYodHlwZW9mIGFJdGVtICE9PSBcInVuZGVmaW5lZFwiKVxyXG5cdFx0ICAgIFx0XHRcdGFJdGVtLmZvckVhY2goZnVuY3Rpb24oYU5vZGUpe1xyXG5cdFx0ICAgIFx0XHRcdFx0aWYodHlwZW9mIGFOb2RlICE9PSBcInVuZGVmaW5lZFwiKVxyXG5cdFx0ICAgIFx0XHRcdFx0XHRyZXN1bHQucHVzaChhTm9kZSk7XHJcblx0XHQgICAgXHRcdFx0fSk7XHJcblx0ICAgIFx0XHR9KTtcclxuXHRcdCAgICBcdFxyXG5cdFx0ICAgIFx0cmV0dXJuIHJlc3VsdDtcclxuXHRcdCAgICB9KS50aGVuKGZ1bmN0aW9uKGFDb250ZW50KXtcclxuXHRcdCAgICBcdGVsZW1lbnQuZW1wdHkoKTtcclxuXHRcdCAgICBcdGlmKGFDb250ZW50ICE9IG51bGwpXHJcblx0XHQgICAgXHRcdGVsZW1lbnQuYXBwZW5kKGFDb250ZW50KVxyXG5cdFx0ICAgIFx0XHRcclxuXHRcdCAgICBcdGFDb250ZXh0LmV4aXQgPSB0cnVlO1xyXG5cdFx0ICAgIFx0cmV0dXJuIGFDb250ZXh0O1x0ICAgIFx0XHJcblx0XHQgICAgfSlbXCJjYXRjaFwiXShjb25zb2xlLmVycm9yKTtcclxuXHQgICAgfVxyXG5cdCAgICBcclxuXHRcdHJldHVybiBhQ29udGV4dDtcclxuXHR9XHJcbn07XHJcblxyXG5Qcm9jZXNzb3IuYWRkVGFzayhUYXNrLCBDb25zdGFudHMuUEhBU0UuTUFOSVBVTEFUSU9OKTsiLCJpbXBvcnQgZWwgZnJvbSBcIkBkZWZhdWx0LWpzL2RlZmF1bHRqcy1leHByZXNzaW9uLWxhbmd1YWdlXCI7XHJcbmltcG9ydCBDb25zdGFudHMgZnJvbSBcIi4uL0NvbnN0YW50c1wiO1xyXG5pbXBvcnQgUHJvY2Vzc29yIGZyb20gXCIuLi9Qcm9jZXNzb3JcIjtcclxuXHJcbmNvbnN0IFJlc29sdmVyID0gZWwuRXhwcmVzc2lvblJlc29sdmVyO1xyXG5jb25zdCBBVFRSSUJVVEUgPSBcImpzdGwtaWZcIjtcclxuY29uc3QgVGFzayA9IHtcclxuXHRpZCA6IFwiaWZcIixcclxuXHRhY2NlcHQgOiBmdW5jdGlvbihhQ29udGV4dCl7XHRcdFxyXG5cdFx0cmV0dXJuIFByb21pc2UucmVzb2x2ZShhQ29udGV4dC5lbGVtZW50LmlzKFwiW2pzdGwtaWZdXCIpKTtcclxuXHR9LFxyXG5cdGV4ZWN1dGUgOiBmdW5jdGlvbihhQ29udGV4dCl7XHJcblx0XHRjb25zdCBleHByZXNzaW9uID0gYUNvbnRleHQuZWxlbWVudC5hdHRyKFwianN0bC1pZlwiKTtcclxuXHRcdHJldHVybiBSZXNvbHZlci5yZXNvbHZlKGV4cHJlc3Npb24sIGFDb250ZXh0LmRhdGEsIGZhbHNlKVxyXG5cdFx0LnRoZW4oZnVuY3Rpb24oYVJlc3VsdCl7XHJcblx0XHRcdGlmKCFhUmVzdWx0KVxyXG5cdFx0XHRcdGFDb250ZXh0LmVsZW1lbnQucmVtb3ZlKCk7XHJcblx0XHRcdFxyXG5cdFx0XHRhQ29udGV4dC5leGl0ID0gISFhUmVzdWx0O1xyXG5cdFx0XHRyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGFDb250ZXh0KTtcclxuXHRcdH0pO1xyXG5cdH1cclxufTtcclxuXHJcblByb2Nlc3Nvci5hZGRUYXNrKFRhc2ssIENvbnN0YW50cy5QSEFTRS5DT05ESVRJT04pOyIsImltcG9ydCBDb25zdGFudHMgZnJvbSBcIi4uL0NvbnN0YW50c1wiO1xyXG5pbXBvcnQgUHJvY2Vzc29yIGZyb20gXCIuLi9Qcm9jZXNzb3JcIjtcclxuaW1wb3J0IGVsIGZyb20gXCJAZGVmYXVsdC1qcy9kZWZhdWx0anMtZXhwcmVzc2lvbi1sYW5ndWFnZVwiO1xyXG5pbXBvcnQgT2JqZWN0VXRpbHMgZnJvbSBcIkBkZWZhdWx0LWpzL2RlZmF1bHRqcy1jb21tb24tdXRpbHMvc3JjL09iamVjdFV0aWxzXCI7XHJcblxyXG5jb25zdCBSZXNvbHZlciA9IGVsLkV4cHJlc3Npb25SZXNvbHZlcjtcclxuY29uc3QgTU9ERVMgPSB7XHJcblx0YXBwZW5kIDogXCJhcHBlbmRcIixcclxuXHRwcmVwZW5kIDogXCJwcmVwZW5kXCIsXHJcblx0cmVwbGFjZSA6IFwicmVwbGFjZVwiXHJcbn07XHJcblxyXG5jb25zdCBUYXNrID0ge1xyXG5cdGlkIDogXCJpbmNsdWRlXCIsXHJcblx0YWNjZXB0IDogZnVuY3Rpb24oYUNvbnRleHQpe1xyXG5cdFx0cmV0dXJuIGFDb250ZXh0LmVsZW1lbnQuaXMoXCJbanN0bC1pbmNsdWRlXVwiKTtcclxuXHR9LFxyXG5cdGV4ZWN1dGUgOiBmdW5jdGlvbihhQ29udGV4dCl7XHJcblx0XHRjb25zdCBtb2RlID0gYUNvbnRleHQuZWxlbWVudC5hdHRyKFwianN0bC1pbmNsdWRlLW1vZGVcIikgfHwgTU9ERVMucmVwbGFjZTtcclxuXHRcdGNvbnN0IGV4cHJlc3Npb24gPSBhQ29udGV4dC5lbGVtZW50LmF0dHIoXCJqc3RsLWluY2x1ZGVcIik7XHJcblx0XHRjb25zdCBvcHRpb24gPSBhQ29udGV4dC5lbGVtZW50LmF0dHIoXCJqc3RsLWluY2x1ZGUtb3B0aW9uc1wiKTtcclxuXHRcdFxyXG5cdFx0cmV0dXJuIFByb21pc2UuYWxsKFtcclxuXHRcdFx0UmVzb2x2ZXIucmVzb2x2ZVRleHQobW9kZSwgYUNvbnRleHQuZGF0YSksXHJcblx0XHRcdFJlc29sdmVyLnJlc29sdmVUZXh0KGV4cHJlc3Npb24sIGFDb250ZXh0LmRhdGEpLFxyXG5cdFx0XHRSZXNvbHZlci5yZXNvbHZlKG9wdGlvbiwgYUNvbnRleHQuZGF0YSksXHJcblx0XHRdKS50aGVuKGZ1bmN0aW9uKGFEYXRhKXtcclxuXHRcdFx0Y29uc3QgbW9kZSA9IGFEYXRhWzBdO1xyXG5cdFx0XHRjb25zdCB1cmwgPSBhRGF0YVsxXTtcclxuXHRcdFx0Y29uc3Qgb3B0aW9uID0gT2JqZWN0VXRpbHMuaXNQb2pvKGFEYXRhWzJdKSA/IGFEYXRhWzJdIDogdW5kZWZpbmVkO1xyXG5cdFx0XHRcclxuXHRcdFx0cmV0dXJuIGZldGNoKHVybCwgb3B0aW9uKVx0XHRcdFxyXG5cdFx0XHQudGhlbihmdW5jdGlvbihhUmVzcG9uc2Upe1xyXG5cdFx0XHRcdHJldHVybiBhUmVzcG9uc2UudGV4dCgpO1xyXG5cdFx0XHR9KS50aGVuKGZ1bmN0aW9uKGFDb250ZW50KXtcclxuXHRcdFx0XHRyZXR1cm4gY3JlYXRlKGFDb250ZW50KTtcclxuXHRcdFx0fSkudGhlbihmdW5jdGlvbihhQ29udGVudCl7XHJcblx0XHRcdFx0cmV0dXJuIFByb2Nlc3Nvci5leGVjdXRlKGFDb250ZW50LCBhQ29udGV4dC5kYXRhLCBhQ29udGV4dC5yb290KVxyXG5cdFx0XHRcdC50aGVuKGZ1bmN0aW9uKCl7XHJcblx0XHRcdFx0XHRpZihtb2RlID09IE1PREVTLmFwcGVuZClcclxuXHRcdFx0XHRcdFx0YUNvbnRleHQuZWxlbWVudC5hcHBlbmQoYUNvbnRlbnQpO1xyXG5cdFx0XHRcdFx0ZWxzZSBpZihtb2RlID09IE1PREVTLnByZXBlbmQpXHJcblx0XHRcdFx0XHRcdGFDb250ZXh0LmVsZW1lbnQucHJlcGVuZChhQ29udGVudCk7XHJcblx0XHRcdFx0XHRlbHNlIGlmKG1vZGUgPT0gTU9ERVMucmVwbGFjZSl7XHJcblx0XHRcdFx0XHRcdGFDb250ZXh0LmVsZW1lbnQuZW1wdHkoKTtcclxuXHRcdFx0XHRcdFx0YUNvbnRleHQuZWxlbWVudC5hcHBlbmQoYUNvbnRlbnQpO1xyXG5cdFx0XHRcdFx0fSBlbHNlXHJcblx0XHRcdFx0XHRcdHRocm93IG5ldyBFcnJvcihcIkluY2x1ZGUgbW9kZSBcXFwiXCIgKyBtb2RlICsgXCJcXFwiIGlzIG5vdCBzdXBwb3J0ZWRcIik7XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH0pXHJcblx0XHR9KS50aGVuKGZ1bmN0aW9uKCl7XHJcblx0XHRcdGFDb250ZXh0LmV4aXQgPSB0cnVlO1xyXG5cdFx0XHRyZXR1cm4gYUNvbnRleHQ7XHJcblx0XHR9KTtcclxuXHR9XHJcbn07XHJcblxyXG5Qcm9jZXNzb3IuYWRkVGFzayhUYXNrLCBDb25zdGFudHMuUEhBU0UuQ09OVEVYVCk7IiwiaW1wb3J0IGVsIGZyb20gXCJAZGVmYXVsdC1qcy9kZWZhdWx0anMtZXhwcmVzc2lvbi1sYW5ndWFnZVwiO1xyXG5pbXBvcnQgQ29uc3RhbnRzIGZyb20gXCIuLi9Db25zdGFudHNcIjtcclxuaW1wb3J0IFByb2Nlc3NvciBmcm9tIFwiLi4vUHJvY2Vzc29yXCI7XHJcbmltcG9ydCBTdHJpbmdVdGlscyBmcm9tIFwiLi4vdXRpbHMvU3RyaW5nVXRpbHNcIjtcclxuXHJcbmNvbnN0IFJlc29sdmVyID0gZWwuRXhwcmVzc2lvblJlc29sdmVyO1xyXG5cclxuY29uc3Qgbm9ybWFsaXplID0gZnVuY3Rpb24oYU5vZGUpIHtcclxuICAgIGlmIChhTm9kZSkge1xyXG5cdCAgICBpZiAoYU5vZGUubm9kZVR5cGUgPT0gMykge1xyXG5cdFx0ICAgIGxldCB0ZXh0ID0gYU5vZGUudGV4dENvbnRlbnQ7XHJcblx0XHQgICAgd2hpbGUgKGFOb2RlLm5leHRTaWJsaW5nICYmIGFOb2RlLm5leHRTaWJsaW5nLm5vZGVUeXBlID09IDMpIHtcclxuXHRcdFx0ICAgIHRleHQgKz0gYU5vZGUubmV4dFNpYmxpbmcudGV4dENvbnRlbnQ7XHJcblx0XHRcdCAgICBhTm9kZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGFOb2RlLm5leHRTaWJsaW5nKTtcclxuXHRcdCAgICB9XHJcblx0XHQgICAgYU5vZGUudGV4dENvbnRlbnQgPSB0ZXh0O1xyXG5cdCAgICB9IGVsc2VcclxuXHRcdCAgICBub3JtYWxpemUoYU5vZGUuZmlyc3RDaGlsZCk7XHJcblx0ICAgIFxyXG5cdCAgICBub3JtYWxpemUoYU5vZGUubmV4dFNpYmxpbmcpO1xyXG4gICAgfVxyXG59O1xyXG5cclxuY29uc3QgQ09OVEVOVFRZUEUgPSB7XHJcbiAgICBcImh0bWxcIiA6IGZ1bmN0aW9uKGFOb2RlLCBhVGV4dCwgYUNvbnRleHQpIHtcclxuICAgICAgICBhTm9kZS5yZXBsYWNlKGNyZWF0ZShhVGV4dCkpO1xyXG4gICAgfSxcclxuICAgIFwidGV4dFwiIDogZnVuY3Rpb24oYU5vZGUsIGFUZXh0LCBhQ29udGV4dCkge1xyXG4gICAgICAgIGxldCB0ZXh0ID0gYVRleHQ7XHJcbiAgICAgICAgbGV0IGFkZEFzSHRtbCA9IGZhbHNlO1xyXG5cclxuICAgICAgICBsZXQgcHJldmVudEZvcm1hdCA9IGFDb250ZXh0LmVsZW1lbnQuYXR0cihcImpzdGwtdGV4dC1wcmV2ZW50LWZvcm1hdFwiKTtcclxuICAgICAgICBpZih0eXBlb2YgcHJldmVudEZvcm1hdCA9PT0gXCJzdHJpbmdcIiAmJiBwcmV2ZW50Rm9ybWF0LnRyaW0oKS5sZW5ndGggPT0gMClcclxuICAgICAgICBcdHByZXZlbnRGb3JtYXQgPSBcInRydWVcIjtcclxuICAgICAgICBcclxuICAgICAgICBQcm9taXNlLmFsbChbXHJcbiAgICAgICAgXHRSZXNvbHZlci5yZXNvbHZlKHByZXZlbnRGb3JtYXQsIGFDb250ZXh0LmRhdGEsIGZhbHNlKSxcclxuICAgICAgICBcdFJlc29sdmVyLnJlc29sdmUoYUNvbnRleHQuZWxlbWVudC5hdHRyKFwianN0bC10ZXh0LXRyaW0tbGVuZ3RoXCIpIHx8IFwiMFwiLCBhQ29udGV4dC5kYXRhLCAwKSxcclxuICAgICAgICBdKS50aGVuKGZ1bmN0aW9uKGFSZXN1bHRzKXtcclxuICAgICAgICBcdGNvbnN0IHByZXZlbnRGb3JtYXQgPSAhIWFSZXN1bHRzWzBdO1xyXG4gICAgICAgIFx0Y29uc3QgbWF4TGVuZ3RoID0gYVJlc3VsdHNbMV07XHJcbiAgICAgICAgXHRcclxuICAgICAgICBcdGlmKG1heExlbmd0aCA+IDApXHJcbiAgICAgICAgXHRcdHRleHQgPSBTdHJpbmdVdGlscy50cmltVGV4dExlbmd0aCh0ZXh0LCBtYXhMZW5ndGgpOyAgICAgICAgXHRcclxuICAgICAgICBcdGlmKHByZXZlbnRGb3JtYXQpXHJcbiAgICAgICAgXHRcdHRleHQgPSBTdHJpbmdVdGlscy5mb3JtYXRUb0h0bWwodGV4dClcclxuICAgICAgICBcdFx0XHJcbiAgICAgICAgXHRcdFxyXG4gICAgXHRcdCBpZiAocHJldmVudEZvcm1hdClcclxuICAgIFx0XHRcdCBhTm9kZS5yZXBsYWNlKGNyZWF0ZSh0ZXh0KSk7XHJcbiAgICBcdFx0IGVsc2VcclxuICAgIFx0XHRcdCBhTm9kZS50ZXh0Q29udGVudCA9IHRleHQ7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn07XHJcblxyXG5jb25zdCBUYXNrID0ge1xyXG5cdGlkIDogXCJ0ZXh0XCIsXHJcblx0YWNjZXB0IDogZnVuY3Rpb24oYUNvbnRleHQpe1xyXG5cdFx0cmV0dXJuICFhQ29udGV4dC5lbGVtZW50LmlzKFwiW2pzdGwtdGV4dC1pZ25vcmVdXCIpO1xyXG5cdH0sXHJcblx0ZXhlY3V0ZSA6IGZ1bmN0aW9uKGFDb250ZXh0KXtcclxuXHRcdGNvbnN0IHR5cGUgPSBhQ29udGV4dC5lbGVtZW50LmF0dHIoXCJqc3RsLXRleHQtY29udGVudC10eXBlXCIpIHx8IFwidGV4dFwiO1xyXG5cdFx0aWYodHlwZW9mIENPTlRFTlRUWVBFW3R5cGVdID09PSBcInVuZGVmaW5lZFwiKVxyXG5cdFx0XHRyZXR1cm47XHJcblx0XHRcclxuXHRcdGNvbnN0IHByb21pc2VzID0gW107XHRcdFxyXG5cdFx0bm9ybWFsaXplKGFDb250ZXh0LmVsZW1lbnQpO1xyXG5cdFx0QXJyYXkuZnJvbShhQ29udGV4dC5lbGVtZW50LmNoaWxkTm9kZXMgfHwgW10pXHJcblx0XHQuZmlsdGVyKGZ1bmN0aW9uKGFOb2RlKSB7XHJcblx0XHRcdHJldHVybiAoYU5vZGUubm9kZVR5cGUgPT09IDMgfHwgYU5vZGUubm9kZVR5cGUgPT09IDQpICYmIHR5cGVvZiBhTm9kZS50ZXh0Q29udGVudCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBhTm9kZS50ZXh0Q29udGVudC50cmltKCkubGVuZ3RoID4gMDtcclxuXHRcdH0pLmZvckVhY2goZnVuY3Rpb24oYU5vZGUpIHtcclxuXHRcdCAgICBsZXQgdGV4dCA9IGFOb2RlLnRleHRDb250ZW50O1xyXG5cdFx0ICAgIGlmICh0ZXh0KSB7XHJcblx0XHQgICAgXHRwcm9taXNlcy5wdXNoKFxyXG5cdFx0XHRcdCAgICBSZXNvbHZlci5yZXNvbHZlVGV4dCh0ZXh0LCBhQ29udGV4dC5kYXRhKVxyXG5cdFx0XHRcdCAgICAudGhlbihmdW5jdGlvbihhVGV4dCl7XHJcblx0XHRcdFx0XHRcdHJldHVybiBDT05URU5UVFlQRVt0eXBlXShhTm9kZSwgYVRleHQsIGFDb250ZXh0KTtcclxuXHRcdFx0XHQgICAgfSlcclxuXHRcdFx0ICAgICk7XHJcblx0XHRcdCAgICBcclxuXHRcdCAgICB9XHJcblx0ICAgIH0pO1x0XHRcclxuXHRcdFxyXG5cdFx0cmV0dXJuIFByb21pc2UuYWxsKHByb21pc2VzKVxyXG5cdFx0LnRoZW4oZnVuY3Rpb24oKXtcclxuXHRcdFx0cmV0dXJuIGFDb250ZXh0O1xyXG5cdFx0fSk7XHJcblx0fVxyXG59O1xyXG5cclxuUHJvY2Vzc29yLmFkZFRhc2soVGFzaywgQ29uc3RhbnRzLlBIQVNFLkNPTlRFTlQpOyIsImltcG9ydCBcIi4vQXN5bmNcIjtcclxuaW1wb3J0IFwiLi9BZGRBdHRyaWJ1dGVcIjtcclxuaW1wb3J0IFwiLi9BdHRyaWJ1dGVcIjtcclxuaW1wb3J0IFwiLi9DaG9vc2VcIjtcclxuaW1wb3J0IFwiLi9EYXRhXCI7XHJcbmltcG9ydCBcIi4vRm9yZWFjaFwiO1xyXG5pbXBvcnQgXCIuL0lmXCI7XHJcbmltcG9ydCBcIi4vSW5jbHVkZVwiO1xyXG5pbXBvcnQgXCIuL1RleHRcIjtcclxuaW1wb3J0IFwiLi9DaGlsZHJlblwiOyIsImltcG9ydCBPYmplY3RVdGlscyBmcm9tIFwiQGRlZmF1bHQtanMvZGVmYXVsdGpzLWNvbW1vbi11dGlscy9zcmMvT2JqZWN0VXRpbHNcIjtcclxuXHJcbmNvbnN0IERFRkFVTFRTID0ge1xyXG5cdGZvcm1hdFRvSHRtbCA6IHtcclxuXHRcdFwidGFic2l6ZVwiIDogNCxcclxuXHRcdFwidGFiY2hhclwiIDogXCImbmJzcDtcIixcclxuXHRcdFwibmV3bGluZVRhZ1wiIDogXCI8YnIvPlwiXHJcblx0fSxcclxuXHJcblx0dHJpbVRleHRMZW5ndGggOiB7XHJcblx0XHRcInBvc3RmaXhcIiA6IFwiLi4uXCJcclxuXHR9XHJcbn07XHJcbmNvbnN0IFN0cmluZ1V0aWxzID0ge1xyXG5cdERFRkFVTFRTIDogREVGQVVMVFMsXHJcblx0dHJpbVRleHRMZW5ndGggOiBmdW5jdGlvbihhVGV4dCwgbWF4TGVuZ3RoLCB0aGVTZXR0aW5ncykge1xyXG5cdFx0aWYgKGFUZXh0ID09IHVuZGVmaW5lZCB8fCB0eXBlb2YgYVRleHQgIT09IFwic3RyaW5nXCIgfHwgYVRleHQgPT0gXCJcIilcclxuXHRcdFx0cmV0dXJuIGFUZXh0O1xyXG5cclxuXHRcdGxldCBzZXR0aW5ncyA9IE9iamVjdFV0aWxzLm1lcmdlKHt9LCB0aGVTZXR0aW5ncyB8fCB7fSwgREVGQVVMVFMudHJpbVRleHRMZW5ndGgpO1xyXG5cclxuXHRcdGlmIChhVGV4dC5sZW5ndGggPiBtYXhMZW5ndGgpIHtcclxuXHRcdFx0bGV0IGVuZCA9IG1heExlbmd0aCAtIHNldHRpbmdzLnBvc3RmaXgubGVuZ3RoO1xyXG5cdFx0XHRpZiAoKGFUZXh0Lmxlbmd0aCAtIGVuZCkgPiAwKVxyXG5cdFx0XHRcdHJldHVybiBhVGV4dC5zdWJzdHJpbmcoMCwgZW5kKS50cmltKCkgKyBzZXR0aW5ncy5wb3N0Zml4O1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIGFUZXh0O1xyXG5cdH0sXHJcblx0Zm9ybWF0VG9IdG1sIDogZnVuY3Rpb24oYVRleHQsIHRoZVNldHRpbmdzKSB7XHJcblx0XHRpZiAoYVRleHQgPT0gdW5kZWZpbmVkIHx8IHR5cGVvZiBhVGV4dCAhPT0gXCJzdHJpbmdcIiB8fCBhVGV4dCA9PSBcIlwiKVxyXG5cdFx0XHRyZXR1cm4gYVRleHQ7XHJcblx0XHRsZXQgc2V0dGluZ3MgPSBPYmplY3RVdGlscy5tZXJnZSh7fSwgdGhlU2V0dGluZ3MgfHwge30gLERFRkFVTFRTLmZvcm1hdFRvSHRtbCk7XHJcblx0XHRsZXQgbGluZXMgPSBhVGV4dC5yZXBsYWNlKC9cXG5cXHIvZywgXCJcXG5cIikucmVwbGFjZSgvXFxyL2csIFwiXFxuXCIpLnNwbGl0KFwiXFxuXCIpO1xyXG5cdFx0bGV0IHRleHQgPSBcIlwiO1xyXG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBsaW5lcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHRpZiAoaSAhPSAwKVxyXG5cdFx0XHRcdHRleHQgPSB0ZXh0ICsgc2V0dGluZ3MubmV3bGluZVRhZztcclxuXHRcdFx0dGV4dCA9IHRleHRcdCsgU3RyaW5nVXRpbHMucHJldmVudFRhYnMobGluZXNbaV0sIHNldHRpbmdzLnRhYnNpemUsIHNldHRpbmdzLnRhYmNoYXIpO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHRleHQ7XHJcblx0fSxcclxuXHRnZXRUYWJTdG9wTWFwIDogZnVuY3Rpb24odGFiU2l6ZSwgdGFiU3RyaW5nKSB7XHJcblx0XHRsZXQgdGFic3RvcE1hcCA9IFtdO1xyXG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPD0gdGFiU2l6ZTsgaSsrKSB7XHJcblx0XHRcdGlmIChpID09IDApXHJcblx0XHRcdFx0dGFic3RvcE1hcFswXSA9IFwiXCI7XHJcblx0XHRcdGVsc2VcclxuXHRcdFx0XHR0YWJzdG9wTWFwW2ldID0gdGFic3RvcE1hcFtpIC0gMV0gKyB0YWJTdHJpbmc7XHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIHRhYnN0b3BNYXA7XHJcblx0fSxcclxuXHRwcmV2ZW50VGFicyA6IGZ1bmN0aW9uKGFUZXh0LCB0aGVUYWJTdG9wcywgdGhlVGFiU3RvcENoYXIpIHtcclxuXHRcdGxldCB0YWJzdG9wTWFwID0gU3RyaW5nVXRpbHMuZ2V0VGFiU3RvcE1hcCh0aGVUYWJTdG9wcywgdGhlVGFiU3RvcENoYXIpO1xyXG5cdFx0bGV0IHRhYlN0b3BzID0gdGhlVGFiU3RvcHM7XHJcblx0XHRsZXQgdGV4dCA9IFwiXCI7XHJcblx0XHRsZXQgdGFicyA9IGFUZXh0LnNwbGl0KFwiXFx0XCIpO1xyXG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCB0YWJzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdGlmICh0YWJzW2ldLmxlbmd0aCAhPSAwICYmIGkgIT0gMCkge1xyXG5cdFx0XHRcdGxldCBzaXplID0gdGV4dC5sZW5ndGg7XHJcblx0XHRcdFx0bGV0IHRhYlNpemUgPSBzaXplICUgdGFiU3RvcHM7XHJcblx0XHRcdFx0dGV4dCA9IHRleHQgKyB0YWJzdG9wTWFwW3RoZVRhYlN0b3BzIC0gdGFiU2l6ZV0gKyB0YWJzW2ldO1xyXG5cdFx0XHR9IGVsc2UgaWYgKHRhYnNbaV0ubGVuZ3RoID09IDAgJiYgaSAhPSAwKVxyXG5cdFx0XHRcdHRleHQgPSB0ZXh0ICsgdGFic3RvcE1hcFt0aGVUYWJTdG9wc107XHJcblx0XHRcdGVsc2VcclxuXHRcdFx0XHR0ZXh0ID0gdGV4dCArIHRhYnNbaV07XHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIHRleHQ7XHJcblx0fSxcclxuXHRmb3JtYXQgOiBmdW5jdGlvbihhVGV4dCwgYXJncykge1xyXG5cdFx0bGV0IG9iamVjdHMgPSBhcmd1bWVudHM7XHJcblx0XHRyZXR1cm4gYVRleHQucmVwbGFjZSgvey0/WzAtOV0rfS9nLCBmdW5jdGlvbihpdGVtKSB7XHJcblx0XHRcdGxldCBpbmRleCA9IHBhcnNlSW50KGl0ZW0uc3Vic3RyaW5nKDEsIGl0ZW0ubGVuZ3RoIC0gMSkpICsgMTtcclxuXHRcdFx0bGV0IHJlcGxhY2U7XHJcblx0XHRcdGlmIChpbmRleCA+IDAgJiYgaW5kZXggPCBvYmplY3RzLmxlbmd0aCkge1xyXG5cdFx0XHRcdHJlcGxhY2UgPSBvYmplY3RzW2luZGV4XTtcclxuXHRcdFx0XHRpZiAodHlwZW9mIHJlcGxhY2UgIT09IFwic3RyaW5nXCIpXHJcblx0XHRcdFx0XHRyZXBsYWNlID0gSlNPTi5zdHJpbmdpZnkocmVwbGFjZSk7XHJcblx0XHRcdH0gZWxzZSBpZiAoaW5kZXggPT09IC0xKSB7XHJcblx0XHRcdFx0cmVwbGFjZSA9IFwie1wiO1xyXG5cdFx0XHR9IGVsc2UgaWYgKGluZGV4ID09PSAtMikge1xyXG5cdFx0XHRcdHJlcGxhY2UgPSBcIn1cIjtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRyZXBsYWNlID0gXCJcIjtcclxuXHRcdFx0fVxyXG5cdFx0XHRyZXR1cm4gcmVwbGFjZTtcclxuXHRcdH0pO1xyXG5cdH1cclxufTtcclxuZXhwb3J0IGRlZmF1bHQgU3RyaW5nVXRpbHM7Il0sInNvdXJjZVJvb3QiOiIifQ==