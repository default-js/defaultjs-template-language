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
		if(this instanceof Document)
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
	console.log("processor.execute(", aElement, aData, aRoot,")");
	
	aElement.trigger(_Constants__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].EVENTS.onExecute);
	
	return taskchain.execute({
		element : aElement,
		data : aData,
		root : aRoot || aElement
	}).then(function(){
		if(typeof aRoot === "undefined")
			aElement.trigger(_Constants__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].EVENTS.onReady);
		
		return {element : aElement, data : aData, root : aRoot};
	})["catch"](function(aError){
		if(typeof aRoot === "undefined")
			aElement.trigger(_Constants__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].EVENTS.onFail);
		
		throw aError;
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
		if(typeof aElement === "undefined")
			return Promise.reject(new Error("Parameter \"aElement\" is undefined!"));
		else if(aElement instanceof NodeList){
			const promises = [];
			aElement.forEach(function(aElement){
				if(typeof aElement !== "undefined" && aElement.nodeType != 3 && aElement.nodeType != 4)
					promises.push(executeElement(aElement, aData, aRoot));
			})
			
			return Promise.all(promises)
			.then(function(){
				return {element : aElement, data : aData, root : aRoot};
			});
		}
		else if(aElement instanceof Node)
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
	return Promise.resolve(aChain.task.accept(aContext))
	.then(function(isAccepted){
		if(!isAccepted)
			return aChain.next == null ? aContext : executeChain(aContext, aChain.next);
		
		return Promise.resolve(aChain.task.execute(aContext))
		.then(function(aContext){
			if(aContext.exit || aChain.next == null)
				return aContext;
			
			return executeChain(aContext, aChain.next);
		});
	});	
};

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
		execute : function(aContext){
			return executeChain(aContext, this.chain);
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




const executeNext = function(children, index, aContext){
	return _Processor__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].execute(children[index], aContext.data, aContext.root)
	.then(function(aContext){
		const nextIndex = index + 1;
		if(children.length > nextIndex)
			return executeNext(children, nextIndex, aContext);
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
		const children = Array.from(aContext.element.children)
		.filter(function(aNode){
			return aNode.nodeType != 3 && aNode.nodeType != 4;
		});
		
		return executeNext(children, 0, aContext);
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
/* harmony import */ var _Constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Constants */ "./src/Constants.js");
/* harmony import */ var _Processor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Processor */ "./src/Processor.js");



const Task = {
	id : "choose",
	accept : function(aContext){
		return false;
	},
	execute : function(aContext){
		return Promise.resolve(aContext);
	}
};

_Processor__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].addTask(Task, _Constants__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].PHASE.MANIPULATION + 100);

/***/ }),

/***/ "./src/tasks/Data.js":
/*!***************************!*\
  !*** ./src/tasks/Data.js ***!
  \***************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _Constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Constants */ "./src/Constants.js");
/* harmony import */ var _Processor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Processor */ "./src/Processor.js");



const Task = {
	id : "data",
	accept : function(aContext){
		return false;
	},
	execute : function(aContext){
		return Promise.resolve(aContext);
	}
};

_Processor__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].addTask(Task, _Constants__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].PHASE.CONTEXT + 100);

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
	console.log("count");
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
		    	console.log("foreach content:", aContent);
		    	
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



const Task = {
	id : "include",
	accept : function(aContext){
		return false;
	},
	execute : function(aContext){
		return Promise.resolve(aContext);
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
        	console.log("aResults", aResults);
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
		    	console.log("resolve text:", text, "context:", aContext.data);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYnJvd3Nlci1pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGRlZmF1bHQtanMvZGVmYXVsdGpzLWNvbW1vbi11dGlscy9zcmMvT2JqZWN0VXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BkZWZhdWx0LWpzL2RlZmF1bHRqcy1leHByZXNzaW9uLWxhbmd1YWdlL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZGVmYXVsdC1qcy9kZWZhdWx0anMtZXhwcmVzc2lvbi1sYW5ndWFnZS9zcmMvRXhwcmVzc2lvblJlc29sdmVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZGVmYXVsdC1qcy9kZWZhdWx0anMtZXhwcmVzc2lvbi1sYW5ndWFnZS9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BkZWZhdWx0LWpzL2RlZmF1bHRqcy1leHRkb20vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BkZWZhdWx0LWpzL2RlZmF1bHRqcy1leHRkb20vc3JjL0dsb2JhbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGRlZmF1bHQtanMvZGVmYXVsdGpzLWV4dGRvbS9zcmMvZG9tL0RvY3VtZW50LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZGVmYXVsdC1qcy9kZWZhdWx0anMtZXh0ZG9tL3NyYy9kb20vRG9jdW1lbnRGcmFnbWVudC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGRlZmF1bHQtanMvZGVmYXVsdGpzLWV4dGRvbS9zcmMvZG9tL0VsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BkZWZhdWx0LWpzL2RlZmF1bHRqcy1leHRkb20vc3JjL2RvbS9FdmVudFRhcmdldC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGRlZmF1bHQtanMvZGVmYXVsdGpzLWV4dGRvbS9zcmMvZG9tL0hUTUxFbGVtZW50LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZGVmYXVsdC1qcy9kZWZhdWx0anMtZXh0ZG9tL3NyYy9kb20vSFRNTElucHV0RWxlbWVudC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGRlZmF1bHQtanMvZGVmYXVsdGpzLWV4dGRvbS9zcmMvZG9tL0hUTUxTZWxlY3RFbGVtZW50LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZGVmYXVsdC1qcy9kZWZhdWx0anMtZXh0ZG9tL3NyYy9kb20vSFRNTFRleHRBcmVhRWxlbWVudC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGRlZmF1bHQtanMvZGVmYXVsdGpzLWV4dGRvbS9zcmMvZG9tL05vZGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BkZWZhdWx0LWpzL2RlZmF1bHRqcy1leHRkb20vc3JjL2RvbS9Ob2RlTGlzdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGRlZmF1bHQtanMvZGVmYXVsdGpzLWV4dGRvbS9zcmMvZG9tL2V4dGVudGlvbnMvQXR0cmlidXRlU3VwcG9ydC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGRlZmF1bHQtanMvZGVmYXVsdGpzLWV4dGRvbS9zcmMvZG9tL2V4dGVudGlvbnMvRGF0YVN1cHBvcnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BkZWZhdWx0LWpzL2RlZmF1bHRqcy1leHRkb20vc3JjL2RvbS9leHRlbnRpb25zL0V2ZW50U3VwcG9ydC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGRlZmF1bHQtanMvZGVmYXVsdGpzLWV4dGRvbS9zcmMvZG9tL2V4dGVudGlvbnMvSHRtbENsYXNzU3VwcG9ydC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGRlZmF1bHQtanMvZGVmYXVsdGpzLWV4dGRvbS9zcmMvZG9tL2V4dGVudGlvbnMvTGlzdFN1cHBvcnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BkZWZhdWx0LWpzL2RlZmF1bHRqcy1leHRkb20vc3JjL2RvbS9leHRlbnRpb25zL01hbmlwdWxhdGlvblN1cHBvcnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BkZWZhdWx0LWpzL2RlZmF1bHRqcy1leHRkb20vc3JjL2RvbS9leHRlbnRpb25zL1F1ZXJ5U3VwcG9ydC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGRlZmF1bHQtanMvZGVmYXVsdGpzLWV4dGRvbS9zcmMvZG9tL2V4dGVudGlvbnMvUmVhZHlFdmVudFN1cHBvcnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BkZWZhdWx0LWpzL2RlZmF1bHRqcy1leHRkb20vc3JjL2RvbS9leHRlbnRpb25zL1Nob3dIaWRlU3VwcG9ydC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGRlZmF1bHQtanMvZGVmYXVsdGpzLWV4dGRvbS9zcmMvZG9tL2V4dGVudGlvbnMvVmFsdWVTdXBwb3J0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZGVmYXVsdC1qcy9kZWZhdWx0anMtZXh0ZG9tL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGRlZmF1bHQtanMvZGVmYXVsdGpzLWV4dGRvbS9zcmMvdXRpbHMvRGVsZWdhdGVyQnVpbGRlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGRlZmF1bHQtanMvZGVmYXVsdGpzLWV4dGRvbS9zcmMvdXRpbHMvRXh0ZW5kUHJvdG90eXBlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZGVmYXVsdC1qcy9kZWZhdWx0anMtZXh0ZG9tL3NyYy91dGlscy9FeHRlbmRlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGRlZmF1bHQtanMvZGVmYXVsdGpzLWV4dGRvbS9zcmMvdXRpbHMvVXRpbHMuanMiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL2dsb2JhbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQ29uc3RhbnRzLmpzIiwid2VicGFjazovLy8uL3NyYy9Qcm9jZXNzb3IuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1Rhc2tDaGFpbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Rhc2tzL0FkZEF0dHJpYnV0ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdGFza3MvQXN5bmMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Rhc2tzL0F0dHJpYnV0ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdGFza3MvQ2hpbGRyZW4uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Rhc2tzL0Nob29zZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdGFza3MvRGF0YS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdGFza3MvRm9yZWFjaC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdGFza3MvSWYuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Rhc2tzL0luY2x1ZGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Rhc2tzL1RleHQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Rhc2tzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy91dGlscy9TdHJpbmdVdGlscy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFD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QU0sRTs7QUFFTjtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQSwwREFBUyxlQUFlLDBEQUFTLGdCOzs7Ozs7Ozs7Ozs7QUM3RmpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQWlCO0FBQ087QUFDSDtBQUNIO0FBQ0Y7QUFDRztBQUNMO0FBQ0s7QUFDSDs7Ozs7Ozs7Ozs7Ozs7QUNSaEI7QUFBNkU7O0FBRTdFO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlCQUFpQixrR0FBVyxTQUFTLG1CQUFtQjs7QUFFeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixrR0FBVyxTQUFTLG1CQUFtQjtBQUN4RDtBQUNBO0FBQ0EsaUJBQWlCLGtCQUFrQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQSxpQkFBaUIsY0FBYztBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsaUJBQWlCO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQSx5QkFBeUIsU0FBUztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0osZ0JBQWdCO0FBQ2hCLElBQUk7QUFDSixnQkFBZ0I7QUFDaEIsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ2Usb0VBQVcsRSIsImZpbGUiOiJkZWZhdWx0anMtdGVtcGxhdGUtbGFuZ3VhZ2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2Jyb3dzZXItaW5kZXguanNcIik7XG4iLCJpbXBvcnQge0NvbnN0YW50cywgUHJvY2Vzc29yfSBmcm9tIFwiLi9zcmNcIlxyXG5cclxuY29uc3QgZ2xvYmFsID0gd2luZG93IHx8IGdsb2JhbCB8fCBzZWxmIHx8IHRoaXMgfHwge307XHJcbmdsb2JhbC5kZWZhdWx0anMgPSBnbG9iYWwuZGVmYXVsdGpzIHx8IHt9O1xyXG5nbG9iYWwuZGVmYXVsdGpzLnRsID0gZ2xvYmFsLmRlZmF1bHRqcy50bCB8fCB7XHJcblx0VkVSU0lPTiA6IFwiJHt2ZXJzaW9ufVwiLFxyXG5cdENvbnN0YW50cyA6IENvbnN0YW50cyxcclxuXHRQcm9jZXNzb3IgOiBQcm9jZXNzb3JcclxufTsiLCJcclxuLyoqXHJcbiAqIGFwcGVuZCBhIHByb3BlcnkgdmFsdWUgdG8gYW4gb2JqZWN0LiBJZiBwcm9wZXJ5IGV4aXN0cyBpdHMgd291bGQgYmUgY29udmVydGVkIHRvIGFuIGFycmF5XHJcbiAqIFxyXG4gKiAgQHBhcmFtIGFLZXk6c3RyaW5nIG5hbWUgb2YgcHJvcGVydHlcclxuICogIEBwYXJhbSBhRGF0YTphbnkgcHJvcGVydHkgdmFsdWVcclxuICogIEBwYXJhbSBhT2JqZWN0Om9iamVjdCB0aGUgb2JqZWN0IHRvIGFwcGVuZCB0aGUgcHJvcGVydHlcclxuICogIFxyXG4gKiAgQHJldHVybiByZXR1cm5zIHRoZSBjaGFuZ2VkIG9iamVjdFxyXG4gKi9cclxuY29uc3QgYXBwZW5kID0gZnVuY3Rpb24oYUtleSwgYURhdGEsIGFPYmplY3Qpe1xyXG5cdGlmKHR5cGVvZiBhRGF0YSAhPT0gXCJ1bmRlZmluZWRcIil7XHRcdFxyXG5cdFx0bGV0IGtleSA9IGFLZXkudG9Mb3dlckNhc2UoKS50cmltKCk7XHRcclxuXHRcdGlmKHR5cGVvZiBhT2JqZWN0W2tleV0gPT09IFwidW5kZWZpbmVkXCIpXHJcblx0XHRcdGFPYmplY3Rba2V5XSA9IGFEYXRhO1xyXG5cdFx0ZWxzZXtcdFx0XHJcblx0XHRcdGxldCBkYXRhID0gYU9iamVjdFtrZXldO1xyXG5cdFx0XHRpZihkYXRhIGluc3RhbmNlb2YgQXJyYXkpXHJcblx0XHRcdFx0ZGF0YS5wdXNoKGFEYXRhKTtcclxuXHRcdFx0ZWxzZVxyXG5cdFx0XHRcdGFPYmplY3Rba2V5XSA9IFthT2JqZWN0W2tleV0sIGFEYXRhXTtcclxuXHRcdH1cclxuXHR9XHRcclxuXHRyZXR1cm4gYU9iamVjdDtcclxufTtcclxuXHJcbi8qKlxyXG4gKiBjaGVja2VkIGlmIGFuIG9iamVjdCBhIHNpbXBsZSBvYmplY3QuIE5vIEFycmF5LCBNYXAgb3Igc29tZXRoaW5nIGVsc2UuXHJcbiAqIFxyXG4gKiBAcGFyYW0gYU9iamVjdDpvYmplY3QgdGhlIG9iamVjdCB0byBiZSB0ZXN0aW5nXHJcbiAqIFxyXG4gKiBAcmV0dXJuIGJvb2xlYW5cclxuICovXHJcbmNvbnN0IGlzUG9qbyA9IGZ1bmN0aW9uKGFPYmplY3Qpe1xyXG5cdHJldHVybiB0eXBlb2YgYU9iamVjdCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBhT2JqZWN0ICE9IG51bGwgJiYgYU9iamVjdC5jb25zdHJ1Y3Rvci5uYW1lID09PSBcIk9iamVjdFwiXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBtZXJnaW5nIG9iamVjdCBpbnRvIGEgdGFyZ2V0IG9iamVjdC4gSXRzIG9ubHkgbWVyZ2Ugc2ltcGxlIG9iamVjdCBhbmQgc3ViIG9iamVjdHMuIEV2ZXJ5IG90aGVyIFxyXG4gKiB2YWx1ZSB3b3VsZCBiZSByZXBsYWNlZCBieSB2YWx1ZSBmcm9tIHRoZSBzb3VyY2Ugb2JqZWN0LlxyXG4gKiBcclxuICogc2FtcGxlOiBtZXJnZSh0YXJnZXQsIHNvdXJjZS0xLCBzb3VyY2UtMiwgLi4uc291cmNlLW4pXHJcbiAqIFxyXG4gKiBAcGFyYW0gYVRhcmdldDpvYmplY3QgdGhlIHRhcmdldCBvYmplY3QgdG8gbWVyZ2luZyBpbnRvXHJcbiAqIEBwYXJhbSBhU291cmNlczpvYmplY3RcclxuICogXHJcbiAqIEByZXR1cm4gb2JqZWN0IHJldHVybnMgdGhlIHRhcmdldCBvYmplY3RcclxuICovXHJcbmNvbnN0IG1lcmdlID0gZnVuY3Rpb24oYVRhcmdldCl7XHRcclxuXHRmb3IobGV0IGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKXtcclxuXHRcdGNvbnN0IHNvdXJjZSA9IGFyZ3VtZW50c1tpXTtcclxuXHRcdE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHNvdXJjZSkuZm9yRWFjaChmdW5jdGlvbihhS2V5KXtcclxuXHRcdFx0aWYoaXNQb2pvKGFUYXJnZXRbYUtleV0pKVxyXG5cdFx0XHRcdG1lcmdlKGFUYXJnZXRbYUtleV0sIHNvdXJjZVthS2V5XSk7XHJcblx0XHRcdGVsc2VcclxuXHRcdFx0XHRhVGFyZ2V0W2FLZXldID0gc291cmNlW2FLZXldO1xyXG5cdFx0fSk7XHJcblx0fVxyXG5cdFxyXG5cdHJldHVybiBhVGFyZ2V0O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcblx0aXNQb2pvIDogaXNQb2pvLFxyXG5cdGFwcGVuZDogYXBwZW5kLFxyXG5cdG1lcmdlIDogbWVyZ2VcclxufTsiLCJpbXBvcnQgcGFjayBmcm9tIFwiLi9zcmNcIjtcblxuZXhwb3J0IGRlZmF1bHQgcGFjazsiLCJjb25zdCBFWFBSRVNTSU9OID0gL1xcJFxceyhbXlxce1xcfV0rKVxcfS87XHJcblxyXG5jb25zdCBleGVjdXRlID0gZnVuY3Rpb24oYVN0YXRlbWVudCwgYUNvbnRleHQsIGFEZWZhdWx0LCBhVGltZW91dCkge1xyXG5cdFx0aWYodHlwZW9mIGFUaW1lb3V0ID09PSBcIm51bWJlclwiICYmIGFUaW1lb3V0ID4gMClcclxuXHRcdFx0cmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUpe1xyXG5cdFx0XHRcdHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcclxuXHRcdFx0XHRcdHJlc29sdmUoZXhlY3V0ZShhU3RhdGVtZW50LCBhQ29udGV4dCwgYURlZmF1bHQpKTtcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fSk7XHJcblx0XHRcclxuXHQgICAgaWYgKHR5cGVvZiBhU3RhdGVtZW50ICE9PSBcInN0cmluZ1wiKVxyXG5cdFx0ICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoYVN0YXRlbWVudCk7XHJcblx0ICAgIFxyXG5cdCAgICBsZXQgc3RhdGVtZW50ID0gYVN0YXRlbWVudC50cmltKCk7XHRcdFx0ICAgIFxyXG5cdCAgICBpZihzdGF0ZW1lbnQubGVuZ3RoID09IDApXHJcblx0ICAgIFx0cmV0dXJuIFByb21pc2UucmVzb2x2ZShhRGVmYXVsdCk7XHJcblx0ICAgIHRyeXtcclxuXHRcdCAgICBjb25zdCBleHByZXNzaW9uID0gbmV3IEZ1bmN0aW9uKFwiYUNvbnRleHRcIiwgXCJ0cnl7XCIgK1xyXG5cdFx0ICAgIFx0XHRcIlx0d2l0aChhQ29udGV4dCB8fCB3aW5kb3cgfHwgZ2xvYmFsIHx8IHNlbGYgfHwgdGhpcyl7XCIgK1xyXG5cdFx0ICAgIFx0XHRcIlx0XHRyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKFwiICsgc3RhdGVtZW50ICsgXCIpO1wiICtcclxuXHRcdCAgICBcdFx0XCJcdH1cIiArXHJcblx0XHQgICAgXHRcdFwifWNhdGNoKGUpe1wiICtcclxuXHRcdCAgICBcdFx0XCJcdHRocm93IGU7XCIgK1xyXG5cdFx0ICAgIFx0XHRcIn1cIik7XHJcblx0XHQgICAgcmV0dXJuIGV4cHJlc3Npb24oYUNvbnRleHQpXHJcblx0XHQgICAgLnRoZW4oZnVuY3Rpb24oYVJlc3VsdCl7XHJcblx0XHQgICAgXHRpZih0eXBlb2YgYVJlc3VsdCA9PT0gXCJ1bmRlZmluZWRcIilcclxuXHRcdCAgICBcdFx0cmV0dXJuIFByb21pc2UucmVzb2x2ZShhRGVmYXVsdCk7XHJcblx0XHQgICAgXHRcclxuXHRcdCAgICBcdHJldHVybiBQcm9taXNlLnJlc29sdmUoYVJlc3VsdCk7XHJcblx0XHQgICAgfSlbXCJjYXRjaFwiXShmdW5jdGlvbihhRXJyb3Ipe1xyXG5cdFx0XHRcdHJldHVybiBQcm9taXNlLnJlamVjdChhRXJyb3IpO1xyXG5cdFx0ICAgIH0pXHJcblx0XHR9Y2F0Y2goZSl7XHJcblx0XHRcdHJldHVybiBQcm9taXNlLnJlamVjdChlKTtcclxuXHRcdH1cclxufTtcclxuXHJcbmNvbnN0IHJlc29sdmUgPSBmdW5jdGlvbihhRXhwcmVzc2lvbiwgYURhdGFDb250ZXh0LCBhRGVmYXVsdCwgYVRpbWVvdXQpIHtcclxuXHRjb25zdCBtYXRjaCA9IEVYUFJFU1NJT04uZXhlYyhhRXhwcmVzc2lvbik7XHJcblx0aWYgKG1hdGNoKVxyXG5cdFx0cmV0dXJuIGV4ZWN1dGUobWF0Y2hbMV0sIGFEYXRhQ29udGV4dCwgYURlZmF1bHQsIGFUaW1lb3V0KTtcclxuXHRcclxuXHRyZXR1cm4gZXhlY3V0ZShhRXhwcmVzc2lvbiwgYURhdGFDb250ZXh0LCBhRGVmYXVsdCwgYVRpbWVvdXQpO1xyXG59O1xyXG5cclxuY29uc3QgcmVzb2x2ZVRleHQgPSBmdW5jdGlvbihhVGV4dCwgYUNvbnRleHQsIGFEZWZhdWx0LCBhVGltZW91dCkge1xyXG5cdGlmKHR5cGVvZiBhVGltZW91dCA9PT0gXCJudW1iZXJcIiAmJiBhVGltZW91dCA+IDApXHJcblx0XHRyZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSl7XHJcblx0XHRcdHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcclxuXHRcdFx0XHRyZXNvbHZlKHJlc29sdmVUZXh0KGFUZXh0LCBhQ29udGV4dCwgYURlZmF1bHQpKTtcclxuXHRcdFx0fSk7XHJcblx0XHR9KTtcclxuXHRcclxuXHRcclxuXHRjb25zdCBtYXRjaCA9IEVYUFJFU1NJT04uZXhlYyhhVGV4dCk7XHJcblx0aWYobWF0Y2ggIT0gbnVsbClcclxuXHRcdHJldHVybiBleGVjdXRlKG1hdGNoWzFdLCBhQ29udGV4dCwgYURlZmF1bHQpXHJcblx0XHQudGhlbihmdW5jdGlvbihhUmVzdWx0KXtcclxuXHRcdFx0cmV0dXJuIHJlc29sdmVUZXh0KGFUZXh0LnNwbGl0KG1hdGNoWzBdKS5qb2luKGFSZXN1bHQpLCBhQ29udGV4dCwgYURlZmF1bHQpO1xyXG5cdFx0fSk7XHJcblx0XHJcblx0cmV0dXJuIFByb21pc2UucmVzb2x2ZShhVGV4dCk7XHJcbn07XHJcblxyXG5jb25zdCBFeHByZXNzaW9uUmVzb2x2ZXIgPSB7XHJcblx0XHRyZXNvbHZlIDogcmVzb2x2ZSxcclxuXHRcdHJlc29sdmVUZXh0IDogcmVzb2x2ZVRleHRcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgRXhwcmVzc2lvblJlc29sdmVyOyIsImltcG9ydCBFeHByZXNzaW9uUmVzb2x2ZXIgZnJvbSBcIi4vRXhwcmVzc2lvblJlc29sdmVyXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcblx0RXhwcmVzc2lvblJlc29sdmVyOkV4cHJlc3Npb25SZXNvbHZlclxyXG59OyIsImltcG9ydCBcIi4vc3JjL2luZGV4XCI7IiwiaW1wb3J0IFV0aWxzIGZyb20gXCIuL3V0aWxzL1V0aWxzXCI7XHJcblxyXG5VdGlscy5nbG9iYWwuZGVmYXVsdGpzID0gVXRpbHMuZ2xvYmFsLmRlZmF1bHRqcyB8fCB7fTtcclxuVXRpbHMuZ2xvYmFsLmRlZmF1bHRqcy5leHRkb20gPSBVdGlscy5nbG9iYWwuZGVmYXVsdGpzLmV4dGRvbSB8fCB7XHJcblx0VkVSU0lPTiA6IFwiJHt2ZXJzaW9ufVwiLFxyXG5cdHV0aWxzIDoge1xyXG5cdFx0VXRpbHM6IFV0aWxzXHJcblx0fVxyXG59O1xyXG5cclxuY29uc3QgcGFyc2VyID0gbmV3IERPTVBhcnNlcigpO1xyXG5cclxuVXRpbHMuZ2xvYmFsLmZpbmQgPSBmdW5jdGlvbigpIHtcclxuXHRyZXR1cm4gZG9jdW1lbnQuZmluZC5hcHBseShkb2N1bWVudCwgYXJndW1lbnRzKTtcclxufTtcclxuXHJcblV0aWxzLmdsb2JhbC5yZWFkeSA9IGZ1bmN0aW9uKCkge1xyXG5cdHJldHVybiBkb2N1bWVudC5yZWFkeS5hcHBseShkb2N1bWVudCwgYXJndW1lbnRzKTtcclxufTtcclxuXHJcblV0aWxzLmdsb2JhbC5jcmVhdGUgPSBmdW5jdGlvbihhQ29udGVudCwgYUNvbnRlbnRUeXBlKSB7XHJcblx0aWYgKHR5cGVvZiBhcmd1bWVudHNbMF0gIT09IFwic3RyaW5nXCIpXHJcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJUaGUgZmlyc3QgYXJndW1lbnQgbXVzdCBiZSBhIHN0cmluZyFcIik7XHJcblxyXG5cdGxldCBwYXJzZWQgPSBwYXJzZXIucGFyc2VGcm9tU3RyaW5nKGFyZ3VtZW50c1swXS50cmltKCksIGFyZ3VtZW50c1sxXSB8fCBcInRleHQvaHRtbFwiKTtcclxuXHRsZXQgbm9kZXMgPSBwYXJzZWQuYm9keS5jaGlsZE5vZGVzO1xyXG5cdGxldCBmcmFnID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xyXG5cdGZyYWcuYXBwZW5kKG5vZGVzKTtcclxuXHRyZXR1cm4gZnJhZy5jaGlsZE5vZGVzO1xyXG59OyIsImltcG9ydCBleHRlbmRQcm90b3R5cGUgZnJvbSBcIi4uL3V0aWxzL0V4dGVuZFByb3RvdHlwZVwiO1xyXG5pbXBvcnQgUXVlcnlTdXBwb3J0IGZyb20gXCIuL2V4dGVudGlvbnMvUXVlcnlTdXBwb3J0XCI7XHJcbmltcG9ydCBSZWFkeUV2ZW50U3VwcG9ydCBmcm9tIFwiLi9leHRlbnRpb25zL1JlYWR5RXZlbnRTdXBwb3J0XCI7XHJcblxyXG5leHRlbmRQcm90b3R5cGUoRG9jdW1lbnQsIFF1ZXJ5U3VwcG9ydCwgUmVhZHlFdmVudFN1cHBvcnQpO1xyXG5cclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgZnVuY3Rpb24oKXtcclxuXHRkb2N1bWVudC50cmlnZ2VyKFwicmVhZHlcIik7XHJcbn0pO1xyXG5cclxuXHJcblxyXG4iLCJpbXBvcnQgZXh0ZW5kUHJvdG90eXBlIGZyb20gXCIuLi91dGlscy9FeHRlbmRQcm90b3R5cGVcIjtcclxuaW1wb3J0IFF1ZXJ5U3VwcG9ydCBmcm9tIFwiLi9leHRlbnRpb25zL1F1ZXJ5U3VwcG9ydFwiO1xyXG5pbXBvcnQgTWFuaXB1bGF0aW9uU3VwcG9ydCBmcm9tIFwiLi9leHRlbnRpb25zL01hbmlwdWxhdGlvblN1cHBvcnRcIjtcclxuXHJcbmV4dGVuZFByb3RvdHlwZShEb2N1bWVudEZyYWdtZW50LCBRdWVyeVN1cHBvcnQsIE1hbmlwdWxhdGlvblN1cHBvcnQpO1xyXG5cclxuXHJcblxyXG5cclxuIiwiaW1wb3J0IGV4dGVuZFByb3RvdHlwZSBmcm9tIFwiLi4vdXRpbHMvRXh0ZW5kUHJvdG90eXBlXCI7XHJcbmltcG9ydCBRdWVyeVN1cHBvcnQgZnJvbSBcIi4vZXh0ZW50aW9ucy9RdWVyeVN1cHBvcnRcIjtcclxuaW1wb3J0IEF0dHJpYnV0ZVN1cHBvcnQgZnJvbSBcIi4vZXh0ZW50aW9ucy9BdHRyaWJ1dGVTdXBwb3J0XCI7XHJcbmltcG9ydCBNYW5pcHVsYXRpb25TdXBwb3J0IGZyb20gXCIuL2V4dGVudGlvbnMvTWFuaXB1bGF0aW9uU3VwcG9ydFwiO1xyXG5cclxuZXh0ZW5kUHJvdG90eXBlKEVsZW1lbnQsUXVlcnlTdXBwb3J0LCBBdHRyaWJ1dGVTdXBwb3J0LCBNYW5pcHVsYXRpb25TdXBwb3J0KTtcclxuLy9cclxuLy9FbGVtZW50LnByb3RvdHlwZS52YWwgPSBmdW5jdGlvbigpIHtcclxuLy9cdGxldCByZXN1bHQgPSBuZXcgTWFwKCk7XHRcdFxyXG4vL1x0bGV0IGlucHV0cyA9IHRoaXMuZmluZChcImlucHV0XCIsIFwic2VsZWN0XCIsIFwidGV4dGFyZWFcIik7XHJcbi8vXHRpZihpbnB1dHMpe1x0XHJcbi8vXHRcdGlucHV0cy5mb3JFYWNoKGZ1bmN0aW9uKG5vZGUpe1xyXG4vL1x0XHRcdGxldCB2YWx1ZSA9IG5vZGUudmFsKCk7XHJcbi8vXHRcdFx0aWYodHlwZW9mIHZhbHVlICE9PSBcInVuZGVmaW5lZFwiICYmIHZhbHVlICE9IG51bGwpXHJcbi8vXHRcdFx0XHRyZXN1bHQuc2V0KChub2RlLm5hbWUgfHwgbm9kZS5pZCB8fCBub2RlLnNlbGVjdG9yKCkpLCBub2RlLnZhbCgpKTtcclxuLy9cdFx0fSk7XHRcclxuLy9cdFx0cmV0dXJuIHJlc3VsdDtcclxuLy9cdH1cclxuLy99OyIsImltcG9ydCBleHRlbmRQcm90b3R5cGUgZnJvbSBcIi4uL3V0aWxzL0V4dGVuZFByb3RvdHlwZVwiO1xuaW1wb3J0IEV2ZW50U3VwcG9ydCBmcm9tIFwiLi9leHRlbnRpb25zL0V2ZW50U3VwcG9ydFwiO1xuXG5leHRlbmRQcm90b3R5cGUoRXZlbnRUYXJnZXQsIEV2ZW50U3VwcG9ydCk7IiwiaW1wb3J0IGV4dGVuZFByb3RvdHlwZSBmcm9tIFwiLi4vdXRpbHMvRXh0ZW5kUHJvdG90eXBlXCI7XHJcbmltcG9ydCBIdG1sQ2xhc3NTdXBwb3J0IGZyb20gXCIuL2V4dGVudGlvbnMvSHRtbENsYXNzU3VwcG9ydFwiO1xyXG5pbXBvcnQgU2hvd0hpZGVTdXBwb3J0IGZyb20gXCIuL2V4dGVudGlvbnMvU2hvd0hpZGVTdXBwb3J0XCI7XHJcblxyXG5cclxuZXh0ZW5kUHJvdG90eXBlKEhUTUxFbGVtZW50LCBIdG1sQ2xhc3NTdXBwb3J0LCBTaG93SGlkZVN1cHBvcnQpOyIsImltcG9ydCBleHRlbmRQcm90b3R5cGUgZnJvbSBcIi4uL3V0aWxzL0V4dGVuZFByb3RvdHlwZVwiO1xyXG5pbXBvcnQgVmFsdWVTdXBwb3J0IGZyb20gXCIuL2V4dGVudGlvbnMvVmFsdWVTdXBwb3J0XCI7XHJcblxyXG5cclxuZXh0ZW5kUHJvdG90eXBlKEhUTUxJbnB1dEVsZW1lbnQsVmFsdWVTdXBwb3J0KTsiLCJpbXBvcnQgZXh0ZW5kUHJvdG90eXBlIGZyb20gXCIuLi91dGlscy9FeHRlbmRQcm90b3R5cGVcIjtcclxuaW1wb3J0IFZhbHVlU3VwcG9ydCBmcm9tIFwiLi9leHRlbnRpb25zL1ZhbHVlU3VwcG9ydFwiO1xyXG5cclxuXHJcbmV4dGVuZFByb3RvdHlwZShIVE1MU2VsZWN0RWxlbWVudCxWYWx1ZVN1cHBvcnQpOyIsImltcG9ydCBleHRlbmRQcm90b3R5cGUgZnJvbSBcIi4uL3V0aWxzL0V4dGVuZFByb3RvdHlwZVwiO1xyXG5pbXBvcnQgRXh0ZW5kZXIgZnJvbSBcIi4uL3V0aWxzL0V4dGVuZGVyXCI7XHJcblxyXG5cclxuZXh0ZW5kUHJvdG90eXBlKEhUTUxUZXh0QXJlYUVsZW1lbnQsRXh0ZW5kZXIoXCJWYWx1ZVN1cHBvcnRcIiwgZnVuY3Rpb24oUHJvdG90eXBlKSB7XHRcclxuXHRQcm90b3R5cGUudmFsID0gZnVuY3Rpb24oKSB7XHJcblx0XHRpZihhcmd1bWVudHMubGVuZ3RoID09IDApXHJcblx0XHRcdHJldHVybiB0aGlzLnZhbHVlO1xyXG5cdFx0ZWxzZVxyXG5cdFx0XHR0aGlzLnZhbHVlID0gYXJndW1lbnRzWzBdXHJcblx0XHRcdFxyXG5cdFx0cmV0dXJuIHRoaXM7XHJcblx0fTtcdFxyXG59KSk7IiwiaW1wb3J0IGV4dGVuZFByb3RvdHlwZSBmcm9tIFwiLi4vdXRpbHMvRXh0ZW5kUHJvdG90eXBlXCI7XHJcbmltcG9ydCBEYXRhU3VwcG9ydCBmcm9tIFwiLi9leHRlbnRpb25zL0RhdGFTdXBwb3J0XCI7XHJcbmltcG9ydCBNYW5pcHVsYXRpb25TdXBwb3J0IGZyb20gXCIuL2V4dGVudGlvbnMvTWFuaXB1bGF0aW9uU3VwcG9ydFwiO1xyXG5cclxuZXh0ZW5kUHJvdG90eXBlKE5vZGUsRGF0YVN1cHBvcnQsTWFuaXB1bGF0aW9uU3VwcG9ydCk7IiwiaW1wb3J0IGV4dGVuZFByb3RvdHlwZSBmcm9tIFwiLi4vdXRpbHMvRXh0ZW5kUHJvdG90eXBlXCI7XHJcbmltcG9ydCBEZWxlZ2F0ZXJCdWlsZGVyIGZyb20gXCIuLi91dGlscy9EZWxlZ2F0ZXJCdWlsZGVyXCI7XHJcbmltcG9ydCBMaXN0U3VwcG9ydCBmcm9tIFwiLi9leHRlbnRpb25zL0xpc3RTdXBwb3J0XCI7XHJcblxyXG5leHRlbmRQcm90b3R5cGUoTm9kZUxpc3QsIExpc3RTdXBwb3J0KTtcclxuXHJcbk5vZGVMaXN0LnByb3RvdHlwZS5hcHBseVRvID0gZnVuY3Rpb24oKXtcclxuXHRsZXQgYXJncyA9IEFycmF5LmZyb20oYXJndW1lbnRzKTtcclxuXHRsZXQgY2FsbGluZyA9IGFyZ3Muc2hpZnQoKTtcclxuXHRsZXQgaXNGdW5jdGlvbiA9IHR5cGVvZiBjYWxsaW5nID09PSBcImZ1bmN0aW9uXCI7XHJcblx0bGV0IHJlc3VsdHMgPSBbXTtcclxuXHRmb3IobGV0IGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKyl7XHJcblx0XHRsZXQgbm9kZSA9IHRoaXNbaV07XHJcblx0XHRsZXRcdHJlc3VsdDtcclxuXHRcdGlmKGlzRnVuY3Rpb24pXHJcblx0XHRcdHJlc3VsdCA9IGNhbGxpbmcuYXBwbHkoW25vZGVdLmNvbmNhdChhcmdzKSk7XHJcblx0XHRlbHNlIGlmKHR5cGVvZiBub2RlW2NhbGxpbmddID09PSBcImZ1bmN0aW9uXCIpXHJcblx0XHRcdHJlc3VsdCA9IG5vZGVbY2FsbGluZ10uYXBwbHkobm9kZSwgYXJncyk7XHJcblx0XHRcclxuXHRcdGlmKHJlc3VsdClcclxuXHRcdFx0cmVzdWx0cy5wdXNoKHJlc3VsdCk7XHJcblx0fVxyXG5cdFxyXG5cdHJldHVybiByZXN1bHRzO1xyXG59O1xyXG5cclxuTm9kZUxpc3QucHJvdG90eXBlLnZhbCA9IGZ1bmN0aW9uKCkge1xyXG5cdGlmKGFyZ3VtZW50cy5sZW5ndGggPT0gMCl7XHJcblx0XHRpZih0aGlzLmxlbmd0aCA+IDApe1xyXG5cdFx0XHRsZXQgcmVzdWx0ID0gbmV3IE1hcCgpO1xyXG5cdFx0XHR0aGlzLmZvckVhY2goZnVuY3Rpb24obm9kZSl7XHJcblx0XHRcdFx0aWYodHlwZW9mIG5vZGUudmFsID09PSBcImZ1bmN0aW9uXCIpe1xyXG5cdFx0XHRcdFx0bGV0IHZhbHVlID0gbm9kZS52YWwoKTtcclxuXHRcdFx0XHRcdGlmKHZhbHVlKVxyXG5cdFx0XHRcdFx0XHRyZXN1bHQuc2V0KChub2RlLm5hbWUgfHwgbm9kZS5pZCB8fCBub2RlLnNlbGVjdG9yKCkpLCBub2RlLnZhbCgpKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pO1x0XHJcblx0XHRcdHJldHVybiByZXN1bHQ7XHJcblx0XHR9XHJcblx0fVxyXG5cdGVsc2VcclxuXHRcdE5vZGVMaXN0LnByb3RvdHlwZS5hcHBseVRvLmFwcGx5KHRoaXMsIFtcInZhbFwiXS5jb25jYXQoQXJyYXkuZnJvbShhcmd1bWVudHMpKSk7XHJcbn07XHJcblxyXG5Ob2RlTGlzdC5mcm9tID0gZnVuY3Rpb24oKXtcclxuXHRsZXQgYXJncyA9IEFycmF5LmZyb20oYXJndW1lbnRzKTtcclxuXHRsZXQgZGF0YSA9IHt9O1xyXG5cdGxldCBjb3VudGVyID0gMDtcclxuXHRcclxuXHR3aGlsZShhcmdzLmxlbmd0aCA+IDApe1xyXG5cdFx0bGV0IGFyZyA9IGFyZ3Muc2hpZnQoKTtcclxuXHRcdGlmKHR5cGVvZiBhcmcgIT09IFwidW5kZWZpbmVkXCIgJiYgYXJnICE9IG51bGwpe1xyXG5cdFx0XHRpZihhcmcgaW5zdGFuY2VvZiBOb2RlKVxyXG5cdFx0XHRcdGRhdGFbY291bnRlcisrXSA9IHt2YWx1ZTogYXJnLCBlbnVtZXJhYmxlOiB0cnVlfTtcclxuXHRcdFx0ZWxzZSBpZihhcmcgaW5zdGFuY2VvZiBOb2RlTGlzdCB8fCBBcnJheS5pc0FycmF5KGFyZykpe1xyXG5cdFx0XHRcdGZvcihsZXQgaSA9IDA7IGkgPCBhcmcubGVuZ3RoOyBpKyspe1xyXG5cdFx0XHRcdFx0aWYoYXJnW2ldICYmIGFyZ1tpXSBpbnN0YW5jZW9mIE5vZGUpe1xyXG5cdFx0XHRcdFx0XHRkYXRhW2NvdW50ZXIrK10gPSB7dmFsdWU6IGFyZ1tpXSwgZW51bWVyYWJsZTogdHJ1ZX07XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cdFxyXG5cdGRhdGEubGVuZ3RoID0ge3ZhbHVlOiBjb3VudGVyfTtcclxuXHRyZXR1cm4gIE9iamVjdC5jcmVhdGUoTm9kZUxpc3QucHJvdG90eXBlLCBkYXRhKTtcclxufTtcclxuXHJcblxyXG5EZWxlZ2F0ZXJCdWlsZGVyKGZ1bmN0aW9uKGFGdW5jdGlvbk5hbWUsIHRoZUFyZ3VtZW50cyl7XHJcblx0bGV0IHJlc3VsdHMgPSBbXTtcdFxyXG5cdHRoaXMuZm9yRWFjaChmdW5jdGlvbihub2RlKXtcclxuXHRcdGlmKG5vZGUgJiYgdHlwZW9mIG5vZGVbYUZ1bmN0aW9uTmFtZV0gPT09IFwiZnVuY3Rpb25cIil7XHJcblx0XHRcdGxldCByZXN1bHQgPSBub2RlW2FGdW5jdGlvbk5hbWVdLmFwcGx5KG5vZGUsIHRoZUFyZ3VtZW50cyk7XHJcblx0XHRcdGlmKHJlc3VsdCl7IFxyXG5cdFx0XHRcdGlmKHJlc3VsdCBpbnN0YW5jZW9mIE5vZGVMaXN0KVxyXG5cdFx0XHRcdFx0cmVzdWx0cyA9IHJlc3VsdHMuY29uY2F0KEFycmF5LmZyb20ocmVzdWx0KSk7XHJcblx0XHRcdFx0ZWxzZVxyXG5cdFx0XHRcdFx0cmVzdWx0cy5wdXNoKHJlc3VsdCk7XHJcblx0XHRcdH1cdFx0XHJcblx0XHR9XHJcblx0fSk7XHJcblx0XHJcblx0aWYocmVzdWx0cy5sZW5ndGggPT09IDApXHJcblx0XHRyZXR1cm4gdW5kZWZpbmVkO1xyXG5cdGVsc2UgaWYocmVzdWx0c1swXSBpbnN0YW5jZW9mIE5vZGUgfHwgcmVzdWx0c1swXSBpbnN0YW5jZW9mIE5vZGVMaXN0KVxyXG5cdFx0cmV0dXJuIE5vZGVMaXN0LmZyb20uYXBwbHkobnVsbCwgcmVzdWx0cyk7XHJcblx0ZWxzZVxyXG5cdFx0cmV0dXJuIHJlc3VsdHM7XHJcbn0sTm9kZUxpc3QucHJvdG90eXBlLCBOb2RlLnByb3RvdHlwZSwgSFRNTEVsZW1lbnQucHJvdG90eXBlLCBIVE1MSW5wdXRFbGVtZW50LnByb3RvdHlwZSwgRWxlbWVudC5wcm90b3R5cGUsIEV2ZW50VGFyZ2V0LnByb3RvdHlwZSk7XHJcbiIsImltcG9ydCBFeHRlbmRlciBmcm9tIFwiLi4vLi4vdXRpbHMvRXh0ZW5kZXJcIjtcclxuXHJcbmNvbnN0IHN1cHBvcnQgPSBFeHRlbmRlcihcIkF0dHJpYnV0ZVN1cHBvcnRcIiwgZnVuY3Rpb24oUHJvdG90eXBlKSB7XHJcblx0UHJvdG90eXBlLmF0dHIgPSBmdW5jdGlvbigpIHtcclxuXHRcdGlmIChhcmd1bWVudHMubGVuZ3RoID09IDApXHJcblx0XHRcdHJldHVybiB0aGlzLmhhc0F0dHJpYnV0ZXMoKSA/IChmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRsZXQgcmVzdWx0ID0ge307XHJcblx0XHRcdFx0dGhpcy5nZXRBdHRyaWJ1dGVOYW1lcygpLmZvckVhY2goKGZ1bmN0aW9uKHJlc3VsdCwgbmFtZSkge1xyXG5cdFx0XHRcdFx0cmVzdWx0W25hbWVdID0gdGhpcy5nZXRBdHRyaWJ1dGUobmFtZSk7XHJcblx0XHRcdFx0fSkuYmluZCh0aGlzLCByZXN1bHQpKTtcclxuXHRcdFx0XHRyZXR1cm4gcmVzdWx0O1xyXG5cdFx0XHR9KS5jYWxsKHRoaXMpIDogdW5kZWZpbmVkO1xyXG5cdFx0ZWxzZSBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PSAxKVxyXG5cdFx0XHRyZXR1cm4gdGhpcy5nZXRBdHRyaWJ1dGUoYXJndW1lbnRzWzBdKTtcclxuXHRcdGVsc2UgaWYgKHR5cGVvZiBhcmd1bWVudHNbMV0gPT09IFwidW5kZWZpbmVkXCIgfHwgYXJndW1lbnRzWzFdID09IG51bGwpXHJcblx0XHRcdHRoaXMucmVtb3ZlQXR0cmlidXRlKGFyZ3VtZW50c1swXSk7XHJcblx0XHRlbHNlXHJcblx0XHRcdHRoaXMuc2V0QXR0cmlidXRlKGFyZ3VtZW50c1swXSwgYXJndW1lbnRzWzFdKTtcclxuXHRcdFxyXG5cdFx0cmV0dXJuIHRoaXM7XHJcblx0fTtcclxufSk7XHJcbmV4cG9ydCBkZWZhdWx0IHN1cHBvcnQ7IiwiaW1wb3J0IEV4dGVuZGVyIGZyb20gXCIuLi8uLi91dGlscy9FeHRlbmRlclwiO1xyXG5jb25zdCBzdXBwb3J0ID0gRXh0ZW5kZXIoXCJEYXRhU3VwcG9ydFwiLCBmdW5jdGlvbihQcm90b3R5cGUpIHtcclxuXHRQcm90b3R5cGUuZGF0YSA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0aWYgKHR5cGVvZiB0aGlzLl9fZGF0YV9fID09PSBcInVuZGVmaW5lZFwiKSB7XHJcblx0XHRcdHRoaXMuX19kYXRhX18gPSB7fTtcclxuXHRcdFx0aWYodHlwZW9mIHRoaXMuZGF0YXNldCAhPT0gXCJ1bmRlZmluZWRcIilcclxuXHRcdFx0XHRmb3IgKG5hbWUgaW4gdGhpcy5kYXRhc2V0KVxyXG5cdFx0XHRcdFx0dGhpcy5fX2RhdGFfX1tuYW1lXSA9IHRoaXMuZGF0YXNldFtuYW1lXTtcclxuXHRcdH1cclxuXHJcblx0XHRpZiAoYXJndW1lbnRzLmxlbmd0aCA9PSAwKVxyXG5cdFx0XHRyZXR1cm4gdGhpcy5fX2RhdGFfXztcclxuXHRcdGVsc2UgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT0gMSlcclxuXHRcdFx0cmV0dXJuIHRoaXMuX19kYXRhX19bYXJndW1lbnRzWzBdXSA7XHJcblx0XHRlbHNlIGlmICh0eXBlb2YgYXJndW1lbnRzWzFdID09PSBcInVuZGVmaW5lZFwiIHx8IGFyZ3VtZW50c1sxXSA9PSBudWxsKVxyXG5cdFx0XHRkZWxldGUgdGhpcy5fX2RhdGFfX1thcmd1bWVudHNbMF1dO1xyXG5cdFx0ZWxzZVxyXG5cdFx0XHR0aGlzLl9fZGF0YV9fW2FyZ3VtZW50c1swXV0gPSBhcmd1bWVudHNbMV07XHJcblx0XHRcclxuXHRcdHJldHVybiB0aGlzO1xyXG5cdH07XHJcbn0pO1xyXG5leHBvcnQgZGVmYXVsdCBzdXBwb3J0OyIsImltcG9ydCBFeHRlbmRlciBmcm9tIFwiLi4vLi4vdXRpbHMvRXh0ZW5kZXJcIjtcclxuXHJcbmNvbnN0IHN1cHBvcnQgPSBFeHRlbmRlcihcIkV2ZW50U3VwcG9ydFwiLCBmdW5jdGlvbihQcm90b3R5cGUpIHtcclxuXHRjb25zdCBXcmFwcGVkRXZlbnRIYW5kbGVyID0gZnVuY3Rpb24oYUNvbmZpZywgYUNhbGxiYWNrICxhRXZlbnQpe1xyXG5cdFx0aWYodHlwZW9mIGFDb25maWcuZmlsdGVyICE9PSBcInVuZGVmaW5lZFwiICYmICFhRXZlbnQudGFyZ2V0LmlzKGFDb25maWcuZmlsdGVyKSlcdFx0XHJcblx0XHRcdHJldHVybjtcclxuXHRcdFxyXG5cdFx0bGV0IGFyZ3MgPSBbYUV2ZW50XTtcclxuXHRcdGlmKHR5cGVvZiBhQ29uZmlnLmRhdGEgIT09IFwidW5kZWZpbmVkXCIpXHJcblx0XHRcdGFyZ3MgPSBhcmdzLmNvbmNhdChhQ29uZmlnLmRhdGEpO1xyXG5cdFx0XHJcblx0XHRsZXQgcmVzdWx0ID0gYUNhbGxiYWNrLmFwcGx5KGFDYWxsYmFjaywgYXJncyk7XHJcblx0XHRpZihhQ29uZmlnLnNpbmdsZUNhbGwpXHJcblx0XHRcdHRoaXMucmVtb3ZlRXZlbnRMaXN0ZW5lcihhQ2FsbGJhY2spO1xyXG5cdFx0XHJcblx0XHRyZXR1cm4gcmVzdWx0O1x0XHRcclxuXHR9O1xyXG5cdFxyXG5cdFxyXG5cdGNvbnN0IGFkZEV2ZW50TGlzdGVuZXIgPSBQcm90b3R5cGUuYWRkRXZlbnRMaXN0ZW5lcjtcclxuXHRQcm90b3R5cGUuYWRkRXZlbnRMaXN0ZW5lciA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0aWYgKGFyZ3VtZW50cy5sZW5ndGggPCAyKVxyXG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJUb28gbGVzcyBhcmd1bWVudHMhXCIpO1xyXG5cclxuXHRcdHRoaXMub24oYXJndW1lbnRzWzBdLCBhcmd1bWVudHNbMV0pO1xyXG5cdH07XHRcclxuXHRcclxuXHRQcm90b3R5cGUub24gPSBmdW5jdGlvbigpIHtcclxuXHRcdGlmIChhcmd1bWVudHMubGVuZ3RoIDwgMilcclxuXHRcdFx0dGhyb3cgbmV3IEVycm9yKFwiVG9vIGxlc3MgYXJndW1lbnRzIVwiKTtcclxuXHRcdFxyXG5cdFx0aWYgKHR5cGVvZiB0aGlzLl9fY2FsbGJhY2tNYXAgPT09IFwidW5kZWZpbmVkXCIpXHJcblx0XHRcdHRoaXMuX19jYWxsYmFja01hcCA9IHt9O1xyXG5cclxuXHRcdGxldCBhcmdzID0gQXJyYXkuZnJvbShhcmd1bWVudHMpO1xyXG5cdFx0bGV0IGV2ZW50cyA9IGFyZ3Muc2hpZnQoKS5zcGxpdCgvKFxccyspfChcXHMqLFxccyopLyk7XHJcblx0XHRsZXQgaGFuZGxlckNvbmZpZyA9IHtcclxuXHRcdFx0ZmlsdGVyIDogKHR5cGVvZiBhcmdzWzBdID09PSBcInN0cmluZ1wiID8gYXJncy5zaGlmdCgpLnNwbGl0KC9cXHMqLFxccyovKSA6IHVuZGVmaW5lZCksXHJcblx0XHRcdGRhdGEgOiAodHlwZW9mIGFyZ3NbMF0gIT09IFwiZnVuY3Rpb25cIiA/IGFyZ3Muc2hpZnQoKSA6IHVuZGVmaW5lZClcclxuXHRcdH07XHJcblx0ICAgIGxldCBjYWxsYmFjayA9IGFyZ3Muc2hpZnQoKTtcclxuXHQgICAgXHJcblx0ICAgIGhhbmRsZXJDb25maWcuc2luZ2xlQ2FsbCA9ICh0eXBlb2YgYXJnc1swXSAhPT0gXCJib29sZWFuXCIgPyBhcmdzLnNoaWZ0KCkgOiBmYWxzZSk7XHJcblxyXG5cdFx0bGV0IGV2ZW50TWFwID0ge307XHJcblx0XHRldmVudHMuZm9yRWFjaCgoZnVuY3Rpb24ocmVzdWx0LCBjb25maWcsIGNhbGxiYWNrLCBldmVudCl7XHJcblx0XHRcdGxldCB3cmFwcGVkRXZlbnRIYW5kbGVyID0gV3JhcHBlZEV2ZW50SGFuZGxlci5iaW5kKHRoaXMsIGNvbmZpZywgY2FsbGJhY2spO1xyXG5cdFx0XHRldmVudE1hcFtldmVudF0gPSB3cmFwcGVkRXZlbnRIYW5kbGVyO1x0XHRcdFxyXG5cdFx0XHRhZGRFdmVudExpc3RlbmVyLmNhbGwodGhpcywgZXZlbnQsIHdyYXBwZWRFdmVudEhhbmRsZXIsIHRydWUpO1xyXG5cdFx0XHRcclxuXHRcdH0pLmJpbmQodGhpcywgZXZlbnRNYXAsIGhhbmRsZXJDb25maWcsIGNhbGxiYWNrKSk7XHJcblx0XHRcclxuXHRcdHRoaXMuX19jYWxsYmFja01hcFtjYWxsYmFja10gPSBldmVudE1hcDtcclxuXHRcdFxyXG5cdFx0cmV0dXJuIHRoaXM7XHJcblx0fTtcdFxyXG5cdFxyXG5cdGNvbnN0IHJlbW92ZUV2ZW50TGlzdGVuZXIgPSBQcm90b3R5cGUucmVtb3ZlRXZlbnRMaXN0ZW5lcjtcclxuXHRQcm90b3R5cGUucmVtb3ZlRXZlbnRMaXN0ZW5lciA9IFByb3RvdHlwZS5yZW1vdmVPbiA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0aWYgKGFyZ3VtZW50cy5sZW5ndGggIT0gMSB8fCB0eXBlb2YgdGhpcy5fX2NhbGxiYWNrTWFwID09PSBcInVuZGVmaW5lZFwiKVxyXG5cdFx0XHRyZXR1cm4gcmVtb3ZlRXZlbnRMaXN0ZW5lci5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG5cdFx0XHRcclxuXHRcdGxldCBldmVudHMgPSB1bmRlZmluZWQ7XHJcblx0XHRsZXQgY2FsbGJhY2sgPSB1bmRlZmluZWQ7XHJcblx0XHRpZih0eXBlb2YgYXJndW1lbnRzWzBdID09PSBcInN0cmluZ1wiKVxyXG5cdFx0XHRldmVudHMgPSBhcmd1bWVudHNbMF0uc3BsaXQoLyhcXHMrKXwoXFxzKixcXHMqKS8pO1xyXG5cdFx0ZWxzZSBpZih0eXBlb2YgYXJndW1lbnRzWzBdID09PSBcImZ1bmN0aW9uXCIpXHJcblx0XHRcdGNhbGxiYWNrID0gYXJndW1lbnRzWzBdO1xyXG5cdFx0ZWxzZVxyXG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJXcm9uZyBhcmd1bWVudCEgLT4gY2FsbCBmdW5jdGlvbihbZXZlbnR8aGFuZGxlcl0pXCIpO1xyXG5cdFx0XHJcblx0XHRsZXQgcmVtb3ZhbEhhbmRsZXIgPSBbXTtcclxuXHRcdGlmKHR5cGVvZiBldmVudHMgPT09IFwidW5kZWZpbmVkXCIpe1xyXG5cdFx0XHRsZXQgZXZlbnRNYXAgPSB0aGlzLl9fY2FsbGJhY2tNYXBbY2FsbGJhY2tdO1xyXG5cdFx0XHRpZih0eXBlb2YgZXZlbnRNYXAgIT09IFwidW5kZWZpbmVkXCIpe1xyXG5cdFx0XHQgICAgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoZXZlbnRNYXApLmZvckVhY2goKGZ1bmN0aW9uKHJlc3VsdCwgZXZlbnRNYXAsIGV2ZW50KXtcclxuXHRcdFx0XHRcdGxldCBoYW5kbGVyID0gZXZlbnRNYXBbZXZlbnRdO1xyXG5cdFx0XHRcdFx0aWYodHlwZW9mIGhhbmRsZXIgIT09IFwidW5kZWZpbmVkXCIpXHJcblx0XHRcdFx0XHRcdHJlc3VsdC5wdXNoKGhhbmRsZXIpO1x0XHRcdFx0XHRcclxuXHRcdFx0XHR9KS5iaW5kKHRoaXMsIHJlbW92YWxIYW5kbGVyLCBldmVudE1hcCkpO1xyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdGRlbGV0ZSB0aGlzLl9fY2FsbGJhY2tNYXBbY2FsbGJhY2tdO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRlbHNlIHtcclxuXHRcdFx0ZXZlbnRzLmZvckVhY2goKGZ1bmN0aW9uKHJlc3VsdCwgZXZlbnQpe1xyXG5cdFx0XHQgICAgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXModGhpcy5fX2NhbGxiYWNrTWFwKS5mb3JFYWNoKChmdW5jdGlvbihhRXZlbnQsIENhbGxiYWNrKXtcclxuXHRcdFx0XHRcdGxldCBldmVudE1hcCA9IHRoaXMuX19jYWxsYmFja01hcFtDYWxsYmFja107XHJcblx0XHRcdFx0XHRkZWxldGUgZXZlbnRNYXBbYUV2ZW50XTtcclxuXHRcdFx0XHRcdGlmKE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKGV2ZW50TWFwKS5sZW5ndGggPT0gMClcclxuXHRcdFx0XHRcdFx0ZGVsZXRlIHRoaXMuX19jYWxsYmFja01hcFtDYWxsYmFja107XHJcblx0XHRcdFx0fSkuYmluZCh0aGlzLCBldmVudCkpO1x0XHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0fSkuYmluZCh0aGlzKSk7XHJcblx0XHR9XHJcblx0XHRcclxuXHRcdHJldHVybiB0aGlzO1xyXG5cdH07XHJcblxyXG5cdFxyXG5cdFByb3RvdHlwZS50cmlnZ2VyID0gZnVuY3Rpb24oKXtcclxuXHRcdGxldCBhcmdzID0gQXJyYXkuZnJvbShhcmd1bWVudHMpO1x0XHRcclxuXHRcdGxldCBldmVudCA9IGFyZ3Muc2hpZnQoKTtcdFx0XHJcblx0XHRsZXQgZGF0YSA9IGFyZ3MubGVuZ3RoID4gMSA/IGFyZ3Muc2hpZnQoKSA6IHVuZGVmaW5lZDtcclxuXHRcdGxldCBkZWxlZ2F0ZWRFdmVudCA9IGRhdGEgaW5zdGFuY2VvZiBFdmVudCA/IGRhdGEgOiB1bmRlZmluZWQ7XHJcblx0XHRcclxuXHRcdFxyXG5cdFx0aWYodHlwZW9mIHRoaXNbXCJvblwiICsgZXZlbnRdID09PSBcImZ1bmN0aW9uXCIpe1xyXG5cdFx0XHRldmVudCA9IGRvY3VtZW50LmNyZWF0ZUV2ZW50KFwiRXZlbnRcIik7XHJcblx0XHRcdGV2ZW50LmluaXRFdmVudChldmVudCwgdHJ1ZSwgdHJ1ZSk7XHJcblx0XHR9XHJcblx0XHRlbHNlXHJcblx0XHRcdGV2ZW50ID0gbmV3IEN1c3RvbUV2ZW50KGV2ZW50LCAgeyBidWJibGVzOiB0cnVlLCBjYW5jZWxhYmxlOiB0cnVlLCBkZXRhaWw6IGRhdGEgfSk7XHJcblx0XHRcclxuXHRcdGV2ZW50LmRlbGVnYXRlZEV2ZW50ID0gZGVsZWdhdGVkRXZlbnQ7XHRcdFxyXG5cdFx0dGhpcy5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcclxuXHRcdHJldHVybiB0aGlzO1xyXG5cdH07XHJcbn0pO1xyXG5leHBvcnQgZGVmYXVsdCBzdXBwb3J0O1xyXG4iLCJpbXBvcnQgRXh0ZW5kZXIgZnJvbSBcIi4uLy4uL3V0aWxzL0V4dGVuZGVyXCI7XHJcblxyXG5jb25zdCBzdXBwb3J0ID0gRXh0ZW5kZXIoXCJIdG1sQ2xhc3NTdXBwb3J0XCIsIGZ1bmN0aW9uKFByb3RvdHlwZSkge1x0XHJcblx0UHJvdG90eXBlLmFkZENsYXNzID0gZnVuY3Rpb24oKSB7XHJcblx0XHRpZihhcmd1bWVudHMubGVuZ3RoID09IDEpXHJcblx0XHRcdGFyZ3VtZW50c1swXS5zcGxpdCgvXFxzKy8pLmZvckVhY2goKGZ1bmN0aW9uKGNsYXp6KXtcclxuXHRcdFx0XHR0aGlzLmNsYXNzTGlzdC5hZGQoY2xhenopO1xyXG5cdFx0XHR9KS5iaW5kKHRoaXMpKTtcclxuXHRcdGVsc2UgaWYoYXJndW1lbnRzLmxlbmd0aCA+IDEpXHJcblx0XHRcdEFycmF5LnByb3RvdHlwZS5mb3JFYWNoLmNhbGwoYXJndW1lbnRzLChmdW5jdGlvbihjbGF6eil7XHJcblx0XHRcdFx0dGhpcy5hZGRDbGFzcyhjbGF6eik7XHJcblx0XHRcdH0pLmJpbmQodGhpcykpO1xyXG5cdFx0XHJcblx0XHRyZXR1cm4gdGhpcztcclxuXHR9O1xyXG5cdFxyXG5cdFByb3RvdHlwZS5yZW1vdmVDbGFzcyA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0aWYoYXJndW1lbnRzLmxlbmd0aCA9PSAxKVxyXG5cdFx0XHRhcmd1bWVudHNbMF0uc3BsaXQoL1xccysvKS5mb3JFYWNoKChmdW5jdGlvbihjbGF6eil7XHJcblx0XHRcdFx0dGhpcy5jbGFzc0xpc3QucmVtb3ZlKGNsYXp6KTtcclxuXHRcdFx0fSkuYmluZCh0aGlzKSk7XHJcblx0XHRlbHNlIGlmKGFyZ3VtZW50cy5sZW5ndGggPiAxKVxyXG5cdFx0XHRBcnJheS5wcm90b3R5cGUuZm9yRWFjaC5jYWxsKGFyZ3VtZW50cywoZnVuY3Rpb24oY2xhenope1xyXG5cdFx0XHRcdHRoaXMucmVtb3ZlQ2xhc3MoY2xhenopO1xyXG5cdFx0XHR9KS5iaW5kKHRoaXMpKTtcclxuXHRcdFxyXG5cdFx0cmV0dXJuIHRoaXM7XHRcdFxyXG5cdH07XHJcblx0XHJcblx0UHJvdG90eXBlLnRvZ2dsZUNsYXNzID0gZnVuY3Rpb24oKSB7XHJcblx0XHRpZihhcmd1bWVudHMubGVuZ3RoID09IDEpXHJcblx0XHRcdGFyZ3VtZW50c1swXS5zcGxpdCgvXFxzKy8pLmZvckVhY2goKGZ1bmN0aW9uKGNsYXp6KXtcclxuXHRcdFx0XHR0aGlzLmNsYXNzTGlzdC50b2dnbGUoY2xhenopO1xyXG5cdFx0XHR9KS5iaW5kKHRoaXMpKTtcclxuXHRcdGVsc2UgaWYoYXJndW1lbnRzLmxlbmd0aCA+IDEpXHJcblx0XHRcdEFycmF5LnByb3RvdHlwZS5mb3JFYWNoLmNhbGwoYXJndW1lbnRzLChmdW5jdGlvbihjbGF6eil7XHJcblx0XHRcdFx0dGhpcy50b29nbGVDbGFzcyhjbGF6eik7XHJcblx0XHRcdH0pLmJpbmQodGhpcykpO1xyXG5cdFx0XHJcblx0XHRyZXR1cm4gdGhpcztcclxuXHR9O1xyXG59KTtcclxuZXhwb3J0IGRlZmF1bHQgc3VwcG9ydDsiLCJpbXBvcnQgRXh0ZW5kZXIgZnJvbSBcIi4uLy4uL3V0aWxzL0V4dGVuZGVyXCI7XHJcblxyXG5jb25zdCBzdXBwb3J0ID0gRXh0ZW5kZXIoXCJMaXN0U3VwcG9ydFwiLCBmdW5jdGlvbihQcm90b3R5cGUpIHtcdFx0XHJcblx0UHJvdG90eXBlLmluZGV4T2YgPSBmdW5jdGlvbigpIHtcclxuXHRcdGZvcihsZXQgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKVxyXG5cdFx0XHRpZih0aGlzW2ldID09IGFyZ3VtZW50c1swXSlcclxuXHRcdFx0XHRyZXR1cm4gaTtcclxuXHRcdFxyXG5cdFx0cmV0dXJuIC0xO1xyXG5cdH07XHJcblxyXG5cdFByb3RvdHlwZS5mb3JFYWNoID0gZnVuY3Rpb24oKXtcclxuXHRcdHJldHVybiBBcnJheS5wcm90b3R5cGUuZm9yRWFjaC5hcHBseShBcnJheS5mcm9tKHRoaXMpLCBhcmd1bWVudHMpO1xyXG5cdH07XHRcclxuXHJcblx0UHJvdG90eXBlLmZpcnN0ID0gZnVuY3Rpb24oKXtcclxuXHRcdGlmKHRoaXMubGVuZ3RoID4gMClcclxuXHRcdFx0cmV0dXJuIHRoaXNbMF07XHJcblx0fTtcdFxyXG5cdFxyXG5cdFByb3RvdHlwZS5sYXN0ID0gZnVuY3Rpb24oKXtcclxuXHRcdGlmKHRoaXMubGVuZ3RoID4gMClcclxuXHRcdFx0cmV0dXJuIHRoaXNbdGhpcy5sZW5ndGggLSAxXTtcclxuXHR9O1xyXG59KTtcclxuZXhwb3J0IGRlZmF1bHQgc3VwcG9ydDsiLCJpbXBvcnQgRXh0ZW5kZXIgZnJvbSBcIi4uLy4uL3V0aWxzL0V4dGVuZGVyXCI7XHJcbmltcG9ydCBVdGlscyBmcm9tIFwiLi4vLi4vdXRpbHMvVXRpbHNcIjtcclxuXHJcbmNvbnN0IHN1cHBvcnQgPSBFeHRlbmRlcihcIk1hbmlwdWxhdGlvblN1cHBvcnRcIiwgZnVuY3Rpb24oUHJvdG90eXBlKSB7XHRcclxuXHRQcm90b3R5cGUuZW1wdHkgPSBmdW5jdGlvbigpe1xyXG5cdFx0bGV0IG5vZGVzID0gdGhpcy5jaGlsZE5vZGVzXHJcblx0XHR3aGlsZShub2Rlcy5sZW5ndGggIT0gMClcdFx0XHRcclxuXHRcdFx0bm9kZXNbMF0ucmVtb3ZlKHRydWUpO1xyXG5cdFx0XHJcblx0XHRyZXR1cm4gdGhpcztcclxuXHR9O1xyXG5cdFxyXG5cdFByb3RvdHlwZS5jb250ZW50ID0gZnVuY3Rpb24oKXtcclxuXHRcdHJldHVybiB0aGlzLmNoaWxkTm9kZXM7XHJcblx0fTtcdFxyXG5cdFxyXG5cdFByb3RvdHlwZS5odG1sID0gZnVuY3Rpb24oKXtcclxuXHRcdGlmKGFyZ3VtZW50cy5sZW5ndGggPT0gMClcdFx0XHRcclxuXHRcdFx0cmV0dXJuIHRoaXMuaW5uZXJIVE1MO1xyXG5cdFx0ZWxzZSBpZihhcmd1bWVudHMubGVuZ3RoID09IDEgJiYgdHlwZW9mIGFyZ3VtZW50c1swXSA9PT0gXCJib29sZWFuXCIpXHJcblx0XHRcdGlmKGFyZ3VtZW50c1swXSlcclxuXHRcdFx0XHRyZXR1cm4gdGhpcy5vdXRlckhUTUw7XHJcblx0XHRcdGVsc2VcclxuXHRcdFx0XHRyZXR1cm4gdGhpcy5pbm5lckhUTUw7XHJcblx0XHRlbHNlIFxyXG5cdFx0XHRBcnJheS5mcm9tKGFyZ3VtZW50cykuZm9yRWFjaCgoZnVuY3Rpb24oY29udGVudCl7XHJcblx0XHRcdFx0aWYodHlwZW9mIGNvbnRlbnQgPT09IFwic3RyaW5nXCIpXHJcblx0XHRcdFx0XHR0aGlzLmlubmVySFRNTCA9IGNvbnRlbnQ7XHJcblx0XHRcdFx0ZWxzZSBpZihjb250ZW50IGluc3RhbmNlb2YgTm9kZSB8fCBjb250ZW50IGluc3RhbmNlb2YgTm9kZUxpc3Qpe1xyXG5cdFx0XHRcdFx0dGhpcy5lbXB0eSgpO1xyXG5cdFx0XHRcdFx0dGhpcy5hcHBlbmQoY29udGVudCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KS5iaW5kKHRoaXMpKTtcdFx0XHJcblx0XHRcdFxyXG5cdFx0cmV0dXJuIHRoaXM7XHJcblx0fTtcclxuXHRcclxuXHRQcm90b3R5cGUuYXBwZW5kID0gZnVuY3Rpb24oKXtcclxuXHRcdGxldCBhcHBlbmQgPSBQcm90b3R5cGUuYXBwZW5kQ2hpbGQuYmluZCh0aGlzKTtcclxuXHRcdGZvcihsZXQgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspe1xyXG5cdFx0XHRsZXQgYXJnID0gYXJndW1lbnRzW2ldO1xyXG5cdFx0XHRpZihhcmcgaW5zdGFuY2VvZiBOb2RlKVxyXG5cdFx0XHRcdHRoaXMuYXBwZW5kQ2hpbGQoYXJnKTtcclxuXHRcdFx0ZWxzZSBpZih0eXBlb2YgYXJnID09PSBcInN0cmluZ1wiKVxyXG5cdFx0XHRcdGNyZWF0ZShhcmcpLmZvckVhY2goYXBwZW5kKTtcclxuXHRcdFx0ZWxzZSBpZihBcnJheS5pc0FycmF5KGFyZykgfHwgYXJnIGluc3RhbmNlb2YgTm9kZUxpc3QpXHJcblx0XHRcdFx0YXJnLmZvckVhY2goYXBwZW5kKTtcclxuXHRcdH1cclxuXHR9O1xyXG5cdFxyXG5cdGNvbnN0IHByZXBlbmQgPSBmdW5jdGlvbihhRmlyc3RFbGVtZW50LCBhRWxlbWVudCl7XHJcblx0XHR0aGlzLmluc2VydEJlZm9yZShhRWxlbWVudCwgYUZpcnN0RWxlbWVudCk7XHJcblx0fTtcclxuXHRQcm90b3R5cGUucHJlcGVuZCA9IGZ1bmN0aW9uKCl7XHJcblx0XHRsZXQgZmlyc3QgPSB0aGlzLmNoaWxkTm9kZXMuZmlyc3QoKTtcclxuXHRcdGxldCBpbnNlcnQgPSBwcmVwZW5kLmJpbmQodGhpcywgZmlyc3QpO1xyXG5cdFx0Zm9yKGxldCBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKyl7XHJcblx0XHRcdGxldCBhcmcgPSBhcmd1bWVudHNbaV07XHJcblx0XHRcdGlmKEFycmF5LmlzQXJyYXkoYXJnKSB8fCBhcmcgaW5zdGFuY2VvZiBOb2RlTGlzdClcclxuXHRcdFx0XHRhcmcuZm9yRWFjaChpbnNlcnQpO1xyXG5cdFx0XHRlbHNlIGlmKGFyZyBpbnN0YW5jZW9mIE5vZGUpXHJcblx0XHRcdFx0dGhpcy5pbnNlcnRCZWZvcmUoYXJnLCBmaXJzdCk7XHJcblx0XHRcdGVsc2UgaWYodHlwZW9mIGFyZyA9PT0gXCJzdHJpbmdcIilcclxuXHRcdFx0XHRhcmcuZm9yRWFjaChpbnNlcnQpO1xyXG5cdFx0fVxyXG5cdH07XHJcblx0XHJcblx0UHJvdG90eXBlLnJlcGxhY2UgPSBmdW5jdGlvbigpe1xyXG5cdFx0aWYoYXJndW1lbnRzLmxlbmd0aCA8IDEpXHJcblx0XHRcdHRocm93IG5ldyBFcnJvcihcIkluc3VmZmljaWVudCBhcmd1bWVudHMhIE9uZSBvciB0d28gbm9kZXMgcmVxdWlyZWQhXCIpO1xyXG5cdFx0XHJcblx0XHRjb25zdCBwYXJlbnQgPSBhcmd1bWVudHMubGVuZ3RoID09IDEgPyB0aGlzLnBhcmVudE5vZGUgOiB0aGlzO1xyXG5cdFx0Y29uc3Qgb2xkTm9kZSA9IGFyZ3VtZW50cy5sZW5ndGggPT0gMSA/IHRoaXMgOiBhcmd1bWVudHNbMF07XHJcblx0XHRjb25zdCBuZXdOb2RlID0gYXJndW1lbnRzLmxlbmd0aCA9PSAxID8gYXJndW1lbnRzWzBdIDogYXJndW1lbnRzWzFdO1xyXG5cdFx0XHJcblx0XHRpZihuZXdOb2RlIGluc3RhbmNlb2YgQXJyYXkgfHwgbmV3Tm9kZSBpbnN0YW5jZW9mIE5vZGVMaXN0KXtcclxuXHRcdFx0bmV3Tm9kZS5mb3JFYWNoKGZ1bmN0aW9uKGFJdGVtKXtcclxuXHRcdFx0XHRwYXJlbnQuaW5zZXJ0QmVmb3JlKGFJdGVtLCBvbGROb2RlKTtcclxuXHRcdFx0fSk7XHJcblx0XHRcdG9sZE5vZGUucmVtb3ZlKCk7XHJcblx0XHR9XHJcblx0XHRlbHNlXHJcblx0XHRcdHBhcmVudC5yZXBsYWNlQ2hpbGQob2xkTm9kZSwgbmV3Tm9kZSk7XHJcblx0fVxyXG59KTtcclxuZXhwb3J0IGRlZmF1bHQgc3VwcG9ydDsiLCJpbXBvcnQgRXh0ZW5kZXIgZnJvbSBcIi4uLy4uL3V0aWxzL0V4dGVuZGVyXCI7XHJcblxyXG5jb25zdCBwYXJlbnRTZWxlY3RvciA9IC86cGFyZW50KFxcKFxcXCIoW15cXCldKilcXFwiXFwpKT8vaTtcclxuY29uc3QgcXVlcnlFeGVjdXRlciA9IGZ1bmN0aW9uKGFFbGVtZW50LCBhU2VsZWN0b3Ipe1xyXG5cdGxldCBtYXRjaCA9IHBhcmVudFNlbGVjdG9yLmV4ZWMoYVNlbGVjdG9yKTtcclxuXHRpZihtYXRjaCl7XHJcblx0XHRsZXQgcmVzdWx0ID0gYUVsZW1lbnQ7XHJcblx0XHRpZihtYXRjaC5pbmRleCA+IDApe1xyXG5cdFx0XHRyZXN1bHQgPSBhRWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKGFTZWxlY3Rvci5zdWJzdHIoMCwgbWF0Y2guaW5kZXgpKTtcclxuXHRcdFx0aWYocmVzdWx0Lmxlbmd0aCA9PSAwKVxyXG5cdFx0XHRcdHJldHVybjtcclxuXHRcdH1cdFxyXG5cdFx0cmVzdWx0ID0gcmVzdWx0LnBhcmVudChtYXRjaFsyXSk7XHRcdFx0XHJcblx0XHRpZihyZXN1bHQpe1xyXG5cdFx0XHRsZXQgbmV4dFNlbGVjdG9yID0gYVNlbGVjdG9yLnN1YnN0cihtYXRjaC5pbmRleCArIG1hdGNoWzBdLmxlbmd0aCkudHJpbSgpO1xyXG5cdFx0XHRpZihuZXh0U2VsZWN0b3IubGVuZ3RoID4gMClcclxuXHRcdFx0XHRyZXN1bHQgPSByZXN1bHQuZmluZChuZXh0U2VsZWN0b3IpO1xyXG5cdFx0XHRcclxuXHRcdFx0cmV0dXJuIHJlc3VsdDtcclxuXHRcdH1cdFx0XHJcblx0fVxyXG5cdGVsc2VcclxuXHRcdHJldHVybiBhRWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKGFTZWxlY3Rvcik7XHJcbn07XHJcblxyXG5cclxuY29uc3Qgc3VwcG9ydCA9IEV4dGVuZGVyKFwiUXVlcnlTdXBwb3J0XCIsZnVuY3Rpb24oUHJvdG90eXBlKSB7XHRcclxuXHRQcm90b3R5cGUuZmluZCA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0bGV0IG5vZGVzID0gW107XHJcblx0XHRsZXQgYXJncyA9IEFycmF5LmZyb20oYXJndW1lbnRzKTtcclxuXHRcdGxldCBhcmcgPSBhcmdzLnNoaWZ0KCk7XHJcblx0XHR3aGlsZShhcmcpe1xyXG5cdFx0XHRpZih0eXBlb2YgYXJnID09PSBcInN0cmluZ1wiKXtcclxuXHRcdFx0XHRsZXQgcmVzdWx0ID0gcXVlcnlFeGVjdXRlcih0aGlzLCBhcmcpO1xyXG5cdFx0XHRcdGlmKHJlc3VsdClcclxuXHRcdFx0XHRcdG5vZGVzLnB1c2gocmVzdWx0KTtcclxuXHRcdFx0fVxyXG5cdFx0XHRcclxuXHRcdFx0YXJnID0gYXJncy5zaGlmdCgpO1xyXG5cdFx0fVxyXG5cdFx0XHJcblx0XHRsZXQgcmVzdWx0ID0gTm9kZUxpc3QuZnJvbS5hcHBseShudWxsLCBub2Rlcyk7XHJcblx0XHRyZXR1cm4gcmVzdWx0O1xyXG5cdH07XHJcblx0XHJcblx0UHJvdG90eXBlLmlzID0gZnVuY3Rpb24oKSB7XHJcblx0XHRpZih0aGlzIGluc3RhbmNlb2YgRG9jdW1lbnQpXHJcblx0XHRcdHJldHVybiBmYWxzZTtcdFx0XHJcblx0XHRlbHNlIGlmKGFyZ3VtZW50cy5sZW5ndGggPT0gMSl7XHJcblx0XHRcdGlmKHR5cGVvZiBhcmd1bWVudHNbMF0gPT09IFwic3RyaW5nXCIpXHJcblx0XHRcdFx0cmV0dXJuIHRoaXMubWF0Y2hlcyhhcmd1bWVudHNbMF0pO1xyXG5cdFx0XHRlbHNlIGlmKHR5cGVvZiBhcmd1bWVudHNbMF0ubGVuZ3RoID09PSBcIm51bWJlclwiKXtcclxuXHRcdFx0XHRsZXQgZmlsdGVyID0gYXJndW1lbnRzWzBdO1xyXG5cdFx0XHRcdGZvcihsZXQgaSA9IDA7IGkgPCBmaWx0ZXIubGVuZ3RoOyBpKyspXHJcblx0XHRcdFx0XHRpZih0aGlzLm1hdGNoZXMoZmlsdGVyW2ldKSlcclxuXHRcdFx0XHRcdFx0cmV0dXJuIHRydWU7XHJcblx0XHRcdH1cdFx0XHRcdFxyXG5cdFx0fVxyXG5cdFx0ZWxzZSBpZihhcmd1bWVudHMubGVuZ3RoID4gMSlcclxuXHRcdFx0cmV0dXJuIHRoaXMuaXMoQXJyYXkuZnJvbShhcmd1bWVudHMpKTtcclxuXHRcdFxyXG5cdFx0cmV0dXJuIGZhbHNlO1xyXG5cdH07XHRcclxuXHRcclxuXHRQcm90b3R5cGUucGFyZW50ID0gZnVuY3Rpb24oKSB7XHJcblx0XHRpZighdGhpcy5wYXJlbnROb2RlKVxyXG5cdFx0XHRyZXR1cm4gdW5kZWZpbmVkO1x0XHRcclxuXHRcdGVsc2UgaWYodHlwZW9mIGFyZ3VtZW50c1swXSA9PT0gXCJzdHJpbmdcIil7XHJcblx0XHRcdGxldCBwYXJlbnQgPSB0aGlzLnBhcmVudE5vZGU7XHJcblx0XHRcdHRyeXtcclxuXHRcdFx0XHR3aGlsZShwYXJlbnQgJiYgIXBhcmVudC5pcyhhcmd1bWVudHNbMF0pKVxyXG5cdFx0XHRcdFx0cGFyZW50ID0gcGFyZW50LnBhcmVudChhcmd1bWVudHNbMF0pO1xyXG5cdFx0XHR9Y2F0Y2ggKGUpIHtcclxuXHRcdFx0XHRjb25zb2xlLmVycm9yKFwidGhpczpcIiwgdGhpcywgXCJwYXJlbnQ6XCIsIHBhcmVudCwgXCJlcnJvcjpcIiwgZSk7XHJcblx0XHRcdH1cclxuXHRcdFx0cmV0dXJuIHBhcmVudDtcclxuXHRcdH1cclxuXHRcdHJldHVybiB0aGlzLnBhcmVudE5vZGU7XHJcblx0fTtcclxuXHRcclxuXHRQcm90b3R5cGUucGFyZW50cyA9IGZ1bmN0aW9uKCkge1x0XHRcclxuXHRcdGxldCByZXN1bHQgPSBuZXcgQXJyYXkoKTtcclxuXHRcdGxldCBwYXJlbnQgPSBQcm90b3R5cGUucGFyZW50LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcblx0XHR3aGlsZShwYXJlbnQpe1xyXG5cdFx0XHRyZXN1bHQucHVzaChwYXJlbnQpO1xyXG5cdFx0XHRwYXJlbnQgPSBQcm90b3R5cGUucGFyZW50LmFwcGx5KHBhcmVudCwgYXJndW1lbnRzKTtcclxuXHRcdH1cclxuXHRcdFxyXG5cdFx0cmV0dXJuIE5vZGVMaXN0LmZyb20ocmVzdWx0KTtcclxuXHR9O1x0XHJcblxyXG5cdFByb3RvdHlwZS5zZWxlY3RvciA9IGZ1bmN0aW9uKCl7XHJcblx0XHRpZih0aGlzIGluc3RhbmNlb2YgRG9jdW1lbnQpXHJcblx0XHRcdHJldHVybiB1bmRlZmluZWQ7XHJcblx0XHRlbHNlIGlmKHRoaXMuaWQpXHJcblx0XHRcdHJldHVybiBcIiNcIiArIHRoaXMuaWQ7XHJcblx0XHRlbHNle1x0XHRcdFxyXG5cdFx0XHRsZXQgc2VsZWN0b3IgPSB0aGlzLnRhZ05hbWUudG9Mb3dlckNhc2UoKTtcclxuXHRcdFx0bGV0IHBhcmVudCA9IHRoaXMucGFyZW50KCk7XHJcblx0XHRcdGlmKHBhcmVudCl7XHJcblx0XHRcdFx0bGV0IHNhbWVUYWdTaWJsaW5ncyA9IHBhcmVudC5maW5kKFwiOnNjb3BlPlwiICsgc2VsZWN0b3IpO1x0XHRcdFxyXG5cdFx0XHRcdGlmIChzYW1lVGFnU2libGluZ3MgaW5zdGFuY2VvZiBOb2RlTGlzdCkge1xyXG5cdFx0XHRcdFx0bGV0IGluZGV4ID0gc2FtZVRhZ1NpYmxpbmdzLmluZGV4T2YodGhpcyk7XHJcblx0XHRcdFx0XHRpZiAoaW5kZXggPiAwKVxyXG5cdFx0XHRcdFx0XHRzZWxlY3RvciArPSAnOm50aC1jaGlsZCgnICsgKGluZGV4ICsgMSkgKyAnKSc7XHJcblx0XHRcdFx0fVx0XHRcclxuXHRcdFx0XHRsZXQgcGFyZW50U2VsZWN0b3IgPSBwYXJlbnQuc2VsZWN0b3IoKTtcclxuXHRcdFx0XHRyZXR1cm4gcGFyZW50U2VsZWN0b3IgPyBwYXJlbnRTZWxlY3RvciArIFwiPlwiICsgc2VsZWN0b3IgOiBzZWxlY3RvcjtcclxuXHRcdFx0fSBcclxuXHRcdFx0cmV0dXJuIHNlbGVjdG9yO1xyXG5cdFx0fVxyXG5cdH07XHRcclxuXHJcblx0UHJvdG90eXBlLmNsb3Nlc3QgPSBmdW5jdGlvbihhUXVlcnkpIHtcdFx0XHRcclxuXHRcdGxldCBub2RlID0gdGhpcztcclxuXHRcdHdoaWxlKG5vZGUpe1xyXG5cdFx0XHRsZXQgY2xvc2VzdHMgPSBub2RlLmZpbmQoYVF1ZXJ5KTtcclxuXHRcdFx0aWYoY2xvc2VzdHMgJiYgY2xvc2VzdHMubGVuZ3RoID4gMClcclxuXHRcdFx0XHRyZXR1cm4gY2xvc2VzdHM7XHJcblx0XHRcdGVsc2UgaWYobm9kZS5pcyhhUXVlcnkpKVxyXG5cdFx0XHRcdHJldHVybiBOb2RlTGlzdC5mcm9tKG5vZGUpO1xyXG5cdFx0XHRcclxuXHRcdFx0bm9kZSA9IG5vZGUucGFyZW50KCk7XHRcdFxyXG5cdFx0fVxyXG5cdH07XHJcblx0XHJcblx0UHJvdG90eXBlLm5lc3RlZCA9IGZ1bmN0aW9uKGFRdWVyeSl7XHJcblx0XHRpZih0aGlzLmlzKGFRdWVyeSkpXHJcblx0XHRcdHJldHVybiBOb2RlTGlzdC5mcm9tKHRoaXMpO1x0XHJcblx0XHRcclxuXHRcdGxldCBuZXN0ZWQgPSB0aGlzLmZpbmQoYVF1ZXJ5KTtcclxuXHRcdGlmKG5lc3RlZCAmJiBuZXN0ZWQubGVuZ3RoID4gMClcclxuXHRcdFx0cmV0dXJuIG5lc3RlZDtcclxuXHRcdGVsc2VcclxuXHRcdFx0cmV0dXJuIE5vZGVMaXN0LmZyb20odGhpcy5wYXJlbnQoYVF1ZXJ5KSk7XHJcblx0fTtcclxufSk7XHJcbmV4cG9ydCBkZWZhdWx0IHN1cHBvcnQ7XHJcblxyXG4iLCJpbXBvcnQgRXh0ZW5kZXIgZnJvbSBcIi4uLy4uL3V0aWxzL0V4dGVuZGVyXCI7XHJcblxyXG5jb25zdCBzdXBwb3J0ID0gRXh0ZW5kZXIoXCJSZWFkeUV2ZW50U3VwcG9ydFwiLCBmdW5jdGlvbihQcm90b3R5cGUpIHtcclxuXHRQcm90b3R5cGUucmVhZHkgPSBmdW5jdGlvbihhRnVuY3Rpb24sIG9uY2Upe1x0XHJcblx0XHR0aGlzLm9uKFwicmVhZHlcIiwgYUZ1bmN0aW9uLCBvbmNlKTtcclxuXHRcdGlmKGRvY3VtZW50LnJlYWR5U3RhdGUgPT0gXCJjb21wbGV0ZVwiKVx0XHRcdFxyXG5cdFx0XHR0aGlzLnRyaWdnZXIoXCJyZWFkeVwiKTtcclxuXHRcdFxyXG5cdFx0cmV0dXJuIHRoaXM7XHJcblx0fTtcclxuXHRcclxufSk7XHJcbmV4cG9ydCBkZWZhdWx0IHN1cHBvcnQ7IiwiaW1wb3J0IEV4dGVuZGVyIGZyb20gXCIuLi8uLi91dGlscy9FeHRlbmRlclwiO1xyXG5cclxuY29uc3Qgc3VwcG9ydCA9IEV4dGVuZGVyKFwiU2hvd0hpZGVTdXBwb3J0XCIsIGZ1bmN0aW9uKFByb3RvdHlwZSkge1xyXG5cdFByb3RvdHlwZS5zaG93ID0gZnVuY3Rpb24oKXtcclxuXHRcdGlmKHRoaXMuX19pc2hpZGUpe1xyXG5cdFx0XHR0aGlzLnN0eWxlLmRpc3BsYXkgPSB0aGlzLl9fZGlzcGxheSB8fCBcIlwiO1xyXG5cdFx0XHR0aGlzLl9faXNoaWRlID0gZmFsc2U7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gdGhpcztcclxuXHR9O1xyXG5cdFxyXG5cdFByb3RvdHlwZS5oaWRlID0gZnVuY3Rpb24oKXtcclxuXHRcdGlmKCF0aGlzLl9faXNoaWRlKXtcclxuXHRcdFx0dGhpcy5fX2Rpc3BsYXkgPSB0aGlzLnN0eWxlLmRpc3BsYXk7XHJcblx0XHRcdHRoaXMuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG5cdFx0XHR0aGlzLl9faXNoaWRlID0gdHJ1ZTtcclxuXHRcdH1cdFxyXG5cdFx0XHJcblx0XHRyZXR1cm4gdGhpcztcclxuXHR9O1xyXG5cdFxyXG5cdFByb3RvdHlwZS50b2dnbGVTaG93ID0gZnVuY3Rpb24oKXtcclxuXHRcdGlmKHRoaXMuX19pc2hpZGUpXHJcblx0XHRcdHJldHVybiB0aGlzLnNob3coKTtcclxuXHRcdGVsc2VcclxuXHRcdFx0cmV0dXJuIHRoaXMuaGlkZSgpO1xyXG5cdH07XHJcblx0XHJcbn0pO1xyXG5leHBvcnQgZGVmYXVsdCBzdXBwb3J0OyIsImltcG9ydCBFeHRlbmRlciBmcm9tIFwiLi4vLi4vdXRpbHMvRXh0ZW5kZXJcIjtcclxuXHJcbmNvbnN0IElucHV0VHlwZXMgPVtcclxuXHR7XHJcblx0XHRzZWxlY3RvciA6IFwic2VsZWN0XCIsXHJcblx0XHRnZXQgOiBmdW5jdGlvbigpe1xyXG5cdFx0XHRsZXQgcmVzdWx0ID0gW107XHJcblx0XHRcdHRoaXMuZmluZChcIm9wdGlvblwiKS5mb3JFYWNoKGZ1bmN0aW9uKG9wdGlvbil7XHJcblx0XHRcdFx0aWYob3B0aW9uLnNlbGVjdGVkKVxyXG5cdFx0XHRcdFx0cmVzdWx0LnB1c2gob3B0aW9uLnZhbHVlKTtcclxuXHRcdFx0fSk7XHJcblx0XHRcdFxyXG5cdFx0XHRyZXR1cm4gcmVzdWx0O1xyXG5cdFx0fSxcclxuXHRcdHNldCA6IGZ1bmN0aW9uKCl7XHRcdFx0XHRcclxuXHRcdFx0bGV0IHZhbHVlcyA9IFtdO1xyXG5cdFx0XHRsZXQgYXJncyA9IEFycmF5LmZyb20oYXJndW1lbnRzKTtcclxuXHRcdFx0bGV0IGFyZyA9IGFyZ3Muc2hpZnQoKTtcclxuXHRcdFx0d2hpbGUoYXJnKXtcclxuXHRcdFx0XHRpZihBcnJheS5pc0FycmF5KGFyZykpXHJcblx0XHRcdFx0XHR2YWx1ZXMgPSB2YWx1ZXMuY29uY2F0KGFyZyk7XHJcblx0XHRcdFx0ZWxzZVxyXG5cdFx0XHRcdFx0dmFsdWVzLnB1c2goYXJnKTtcclxuXHRcdFx0XHRcclxuXHRcdFx0XHRhcmcgPSBhcmdzLnNoaWZ0KCk7XHJcblx0XHRcdH1cclxuXHRcdFx0dGhpcy52YWx1ZSA9IHZhbHVlcztcclxuXHRcdFx0dGhpcy5maW5kKFwib3B0aW9uXCIpLmZvckVhY2goZnVuY3Rpb24ob3B0aW9uKXtcclxuXHRcdFx0XHRvcHRpb24uc2VsZWN0ZWQgPSB2YWx1ZXMuaW5kZXhPZihvcHRpb24udmFsdWUpID49IDA7XHJcblx0XHRcdH0pO1xyXG5cdFx0XHRcclxuXHRcdFx0dGhpcy50cmlnZ2VyKFwiY2hhbmdlZFwiKTtcclxuXHRcdH1cdFx0XHRcclxuXHR9LFxyXG5cdHtcclxuXHRcdHNlbGVjdG9yIDogXCJpbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdLCBpbnB1dFt0eXBlPVxcXCJyYWRpb1xcXCJdXCIsXHJcblx0XHRnZXQgOiBmdW5jdGlvbigpe1xyXG5cdFx0XHRpZih0aGlzLnZhbHVlID09IFwib25cIiB8fCB0aGlzLnZhbHVlID09IFwib2ZmXCIpXHJcblx0XHRcdFx0cmV0dXJuIHRoaXMuY2hlY2tlZDtcclxuXHRcdFx0ZWxzZSBpZih0aGlzLmNoZWNrZWQpXHJcblx0XHRcdFx0cmV0dXJuIHRoaXMudmFsdWU7XHRcdFx0XHRcclxuXHRcdH0sXHJcblx0XHRzZXQgOiBmdW5jdGlvbihhVmFsdWUpe1xyXG5cdFx0XHRpZih0eXBlb2YgYVZhbHVlID09PSBcImJvb2xlYW5cIilcclxuXHRcdFx0XHR0aGlzLmNoZWNrZWQgPSBhVmFsdWU7XHJcblx0XHRcdGVsc2UgaWYodHlwZW9mIGFWYWx1ZSA9PT0gXCJzdHJpbmdcIilcclxuXHRcdFx0XHR0aGlzLmNoZWNrZWQgPSB0aGlzLnZhbHVlID09IGFWYWx1ZTtcclxuXHRcdFx0ZWxzZSBpZihBcnJheS5pc0FycmF5KGFWYWx1ZSkpXHJcblx0XHRcdFx0dGhpcy5jaGVja2VkID0gYVZhbHVlLmluZGV4T2YodGhpcy52YWx1ZSkgPj0gMDtcclxuXHRcdFx0XHJcblx0XHRcdHRoaXMudHJpZ2dlcihcImNoYW5nZWRcIik7XHJcblx0XHR9XHJcblx0fVxyXG5dO1xyXG5cclxuY29uc3QgRGVmYXVsdElucHV0VHlwZSA9IHtcclxuXHRcdGdldCA6IGZ1bmN0aW9uKCl7XHJcblx0XHRcdHJldHVybiB0aGlzLnZhbHVlO1xyXG5cdFx0fSxcclxuXHRcdHNldCA6IGZ1bmN0aW9uKGFWYWx1ZSl7XHJcblx0XHRcdHRoaXMudmFsdWUgPSBhVmFsdWU7XHJcblx0XHRcdHRoaXMudHJpZ2dlcihcImlucHV0XCIpO1xyXG5cdFx0fVx0XHJcbn07XHJcblxyXG5jb25zdCBnZXRJbnB1dFR5cGUgPSBmdW5jdGlvbihhRWxlbWVudCl7XHJcblx0Zm9yKGxldCBpID0gMDsgaSA8IElucHV0VHlwZXMubGVuZ3RoOyBpKyspXHJcblx0XHRpZihhRWxlbWVudC5pcyhJbnB1dFR5cGVzW2ldLnNlbGVjdG9yKSlcclxuXHRcdFx0cmV0dXJuIElucHV0VHlwZXNbaV07XHRcdFxyXG5cdHJldHVybiBEZWZhdWx0SW5wdXRUeXBlO1xyXG59O1xyXG5cclxuXHJcbmNvbnN0IHN1cHBvcnQgPSBFeHRlbmRlcihcIlZhbHVlU3VwcG9ydFwiLCBmdW5jdGlvbihQcm90b3R5cGUpIHtcdFxyXG5cdFByb3RvdHlwZS52YWwgPSBmdW5jdGlvbigpIHtcclxuXHRcdGxldCB0eXBlID0gZ2V0SW5wdXRUeXBlKHRoaXMpO1xyXG5cdFx0aWYoYXJndW1lbnRzLmxlbmd0aCA9PSAwKVxyXG5cdFx0XHRyZXR1cm4gdHlwZS5nZXQuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxuXHRcdGVsc2VcclxuXHRcdFx0dHlwZS5zZXQuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxuXHRcdFx0XHJcblx0XHRyZXR1cm4gdGhpcztcclxuXHR9O1x0XHJcbn0pO1xyXG5leHBvcnQgZGVmYXVsdCBzdXBwb3J0OyIsImltcG9ydCBcIi4vZG9tL0V2ZW50VGFyZ2V0XCI7XHJcbmltcG9ydCBcIi4vZG9tL05vZGVcIjtcclxuaW1wb3J0IFwiLi9kb20vRWxlbWVudFwiO1xyXG5pbXBvcnQgXCIuL2RvbS9Eb2N1bWVudFwiO1xyXG5pbXBvcnQgXCIuL2RvbS9Eb2N1bWVudEZyYWdtZW50XCI7XHJcbmltcG9ydCBcIi4vZG9tL0hUTUxFbGVtZW50XCI7XHJcbmltcG9ydCBcIi4vZG9tL0hUTUxJbnB1dEVsZW1lbnRcIjtcclxuaW1wb3J0IFwiLi9kb20vSFRNTFRleHRBcmVhRWxlbWVudFwiO1xyXG5pbXBvcnQgXCIuL2RvbS9IVE1MU2VsZWN0RWxlbWVudFwiO1xyXG5pbXBvcnQgXCIuL2RvbS9Ob2RlTGlzdFwiO1xyXG5pbXBvcnQgXCIuL0dsb2JhbFwiO1xyXG4iLCJjb25zdCBEZWxlZ2F0ZXJCdWlsZGVyID0gZnVuY3Rpb24oKSB7XHJcblx0bGV0IGFyZ3MgPSBBcnJheS5mcm9tKGFyZ3VtZW50cyk7XHJcblx0bGV0IGNhbGxiYWNrID0gYXJncy5zaGlmdCgpO1xyXG5cdGxldCBzb3VyY2UgPSBhcmdzLnNoaWZ0KCk7XHJcblx0YXJncy5mb3JFYWNoKChmdW5jdGlvbihhU291cmNlLCBhQ2FsbGJhY2ssIGFUYXJnZXQpe1xyXG5cdFx0T2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoYVRhcmdldCkuZm9yRWFjaChcclxuXHRcdFx0KGZ1bmN0aW9uKGFTb3VyY2UsIGFUYXJnZXQsYUNhbGxiYWNrLCAgYU5hbWUpIHtcclxuXHRcdFx0XHRsZXQgcHJvcCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoYVRhcmdldCwgYU5hbWUpO1xyXG5cdFx0XHRcdGlmICh0eXBlb2YgYVNvdXJjZVthTmFtZV0gPT09IFwidW5kZWZpbmVkXCIgJiYgdHlwZW9mIHByb3AudmFsdWUgPT09IFwiZnVuY3Rpb25cIilcclxuXHRcdFx0XHRcdGFTb3VyY2VbYU5hbWVdID0gZnVuY3Rpb24oKXtyZXR1cm4gYUNhbGxiYWNrLmNhbGwodGhpcywgYU5hbWUsIGFyZ3VtZW50cyk7fTtcdFx0XHRcdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHR9KS5iaW5kKG51bGwsIGFTb3VyY2UsIGFUYXJnZXQsIGFDYWxsYmFjaykpO1xyXG5cdH0pLmJpbmQobnVsbCwgc291cmNlLCBjYWxsYmFjaykpO1xyXG5cdFxyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBEZWxlZ2F0ZXJCdWlsZGVyOyIsImNvbnN0IGV4dGVuZFByb3RvdHlwZSA9IGZ1bmN0aW9uKCl7XHJcblx0bGV0IGFyZ3MgPSBcdEFycmF5LmZyb20oYXJndW1lbnRzKTtcclxuXHRsZXQgdHlwZSA9IGFyZ3Muc2hpZnQoKTtcdFxyXG5cdHdoaWxlKGFyZ3MubGVuZ3RoID4gMCl7XHJcblx0XHRsZXQgZXh0ZW5kZXIgPSBhcmdzLnNoaWZ0KCk7XHJcblx0XHRleHRlbmRlcih0eXBlKTtcclxuXHR9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBleHRlbmRQcm90b3R5cGU7IiwiaW1wb3J0IFV0aWxzIGZyb20gXCIuL1V0aWxzXCI7XHJcblxyXG5jb25zdCBFWFRFTlNJT05TX01BUCA9IFV0aWxzLmdsb2JhbFZhcihcIl9fRE9NX0FQSV9FWFRFTlNJT05fTUFQX19cIiwge30pO1xyXG5jb25zdCBFeHRlbmRlciA9IGZ1bmN0aW9uKGFOYW1lLCBhRXh0ZW50aW9uKXtcclxuXHRyZXR1cm4gZnVuY3Rpb24oYVR5cGUpe1x0XHJcblx0XHRsZXQgZXh0ZW5zaW9ucyA9IEVYVEVOU0lPTlNfTUFQW2FUeXBlLm5hbWVdO1xyXG5cdFx0aWYoIWV4dGVuc2lvbnMpXHJcblx0XHRcdGV4dGVuc2lvbnMgPSBFWFRFTlNJT05TX01BUFthVHlwZS5uYW1lXSA9IHt9O1x0XHRcclxuXHRcdFxyXG5cdFx0aWYoIWV4dGVuc2lvbnNbYU5hbWVdKXtcclxuXHRcdFx0ZXh0ZW5zaW9uc1thTmFtZV0gPSB0cnVlO1xyXG5cdFx0XHRhRXh0ZW50aW9uKGFUeXBlLnByb3RvdHlwZSk7XHJcblx0XHR9XHJcblx0XHRlbHNlXHJcblx0XHRcdGNvbnNvbGUud2FybihcImR1cGxpY2F0ZWQgbG9hZCBvZiBleHRlbnNpb24gXFxcIlwiICsgYU5hbWUgKyBcIlxcXCIhXCIpO1xyXG5cdH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEV4dGVuZGVyOyIsImNvbnN0IFV0aWxzID0ge1xyXG5cdGdsb2JhbCA6ICh3aW5kb3cgfHwgZ2xvYmFsIHx8IHNlbGYgfHwgdGhpcyB8fCB7fSksXHJcblx0Z2xvYmFsVmFyIDogZnVuY3Rpb24oYU5hbWUsIGFJbml0VmFsdWUpe1xyXG5cdFx0aWYoYXJndW1lbnRzLmxlbmd0aCA9PT0gMiAmJiB0eXBlb2YgVXRpbHMuZ2xvYmFsW2FOYW1lXSA9PT0gXCJ1bmRlZmluZWRcIilcclxuXHRcdFx0VXRpbHMuZ2xvYmFsW2FOYW1lXSA9IGFJbml0VmFsdWU7XHJcblx0XHRcclxuXHRcdHJldHVybiBVdGlscy5nbG9iYWxbYU5hbWVdO1x0XHRcclxuXHR9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBVdGlsczsiLCJ2YXIgZztcblxuLy8gVGhpcyB3b3JrcyBpbiBub24tc3RyaWN0IG1vZGVcbmcgPSAoZnVuY3Rpb24oKSB7XG5cdHJldHVybiB0aGlzO1xufSkoKTtcblxudHJ5IHtcblx0Ly8gVGhpcyB3b3JrcyBpZiBldmFsIGlzIGFsbG93ZWQgKHNlZSBDU1ApXG5cdGcgPSBnIHx8IG5ldyBGdW5jdGlvbihcInJldHVybiB0aGlzXCIpKCk7XG59IGNhdGNoIChlKSB7XG5cdC8vIFRoaXMgd29ya3MgaWYgdGhlIHdpbmRvdyByZWZlcmVuY2UgaXMgYXZhaWxhYmxlXG5cdGlmICh0eXBlb2Ygd2luZG93ID09PSBcIm9iamVjdFwiKSBnID0gd2luZG93O1xufVxuXG4vLyBnIGNhbiBzdGlsbCBiZSB1bmRlZmluZWQsIGJ1dCBub3RoaW5nIHRvIGRvIGFib3V0IGl0Li4uXG4vLyBXZSByZXR1cm4gdW5kZWZpbmVkLCBpbnN0ZWFkIG9mIG5vdGhpbmcgaGVyZSwgc28gaXQnc1xuLy8gZWFzaWVyIHRvIGhhbmRsZSB0aGlzIGNhc2UuIGlmKCFnbG9iYWwpIHsgLi4ufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGc7XG4iLCJleHBvcnQgZGVmYXVsdCB7XHJcblx0RVZFTlRTIDoge1xyXG5cdFx0b25FeGVjdXRlIDogXCJqc3RsLW9uLWV4ZWN1dGVcIixcclxuXHRcdG9uU3VjY2VzcyA6IFwianN0bC1vbi1zdWNjZXNzXCIsXHJcblx0XHRvbkZhaWwgOiBcImpzdGwtb24tZmFpbFwiLFxyXG5cdFx0b25SZWFkeSA6IFwianN0bC1vbi1yZWFkeVwiXHJcblx0fSxcclxuXHRQSEFTRSA6IHtcclxuXHRcdElOSVQgOiAxMDAwLFxyXG5cdFx0Q09ORElUSU9OIDogMjAwMCxcclxuXHRcdENPTlRFWFQgOiAzMDAwLFxyXG5cdFx0TUFOSVBVTEFUSU9OIDogNDAwMCxcclxuXHRcdENPTlRFTlQgOiA1MDAwLFxyXG5cdFx0Q0xFQU5JTkcgOiA2MDAwLFxyXG5cdFx0Q0hJTERSRU4gOiA3MDAwLFxyXG5cdFx0QklORElORyA6IDgwMDAsXHJcblx0XHRGSU5JU0ggOiA5MDAwXHJcblx0fVxyXG59O1x0XHJcbiIsImltcG9ydCBDb25zdGFudHMgZnJvbSBcIi4vQ29uc3RhbnRzXCI7XG5pbXBvcnQgVGFza0NoYWluIGZyb20gXCIuL1Rhc2tDaGFpblwiO1xuXG5jb25zdCB0YXNrY2hhaW4gPSBuZXcgVGFza0NoYWluKCk7XG5cbmNvbnN0IGV4ZWN1dGVFbGVtZW50ID0gZnVuY3Rpb24oYUVsZW1lbnQsIGFEYXRhLCBhUm9vdCl7XG5cdGNvbnNvbGUubG9nKFwicHJvY2Vzc29yLmV4ZWN1dGUoXCIsIGFFbGVtZW50LCBhRGF0YSwgYVJvb3QsXCIpXCIpO1xuXHRcblx0YUVsZW1lbnQudHJpZ2dlcihDb25zdGFudHMuRVZFTlRTLm9uRXhlY3V0ZSk7XG5cdFxuXHRyZXR1cm4gdGFza2NoYWluLmV4ZWN1dGUoe1xuXHRcdGVsZW1lbnQgOiBhRWxlbWVudCxcblx0XHRkYXRhIDogYURhdGEsXG5cdFx0cm9vdCA6IGFSb290IHx8IGFFbGVtZW50XG5cdH0pLnRoZW4oZnVuY3Rpb24oKXtcblx0XHRpZih0eXBlb2YgYVJvb3QgPT09IFwidW5kZWZpbmVkXCIpXG5cdFx0XHRhRWxlbWVudC50cmlnZ2VyKENvbnN0YW50cy5FVkVOVFMub25SZWFkeSk7XG5cdFx0XG5cdFx0cmV0dXJuIHtlbGVtZW50IDogYUVsZW1lbnQsIGRhdGEgOiBhRGF0YSwgcm9vdCA6IGFSb290fTtcblx0fSlbXCJjYXRjaFwiXShmdW5jdGlvbihhRXJyb3Ipe1xuXHRcdGlmKHR5cGVvZiBhUm9vdCA9PT0gXCJ1bmRlZmluZWRcIilcblx0XHRcdGFFbGVtZW50LnRyaWdnZXIoQ29uc3RhbnRzLkVWRU5UUy5vbkZhaWwpO1xuXHRcdFxuXHRcdHRocm93IGFFcnJvcjtcblx0fSk7XG59O1xuXG5jb25zdCBQcm9jZXNzb3IgPSB7XG5cdC8qKlxuXHQqIEBwYXJhbSBhVGFzayA6IHtcblx0KiBcdFx0dGl0bGUgOiBzdHJpbmcsXG5cdCogXHRcdGFjY2VwdChhRWxlbWVudCkgOiBQcm9taXNlKEJvb2xlYW4pXG5cdCogXHRcdGV4ZWN1dGUoYUNvbnRleHQpIDogUHJvbWlzZShuZXcgQ29udGV4dClcblx0KiB9XG5cdCogQHBhcmFtIGFQaGFzZSA6IENvbnRhbnRzLlBIQVNFXG5cdCovXHRcblx0YWRkVGFzayA6IGZ1bmN0aW9uKGFUYXNrLCBhUGhhc2Upe1xuXHRcdHRhc2tjaGFpbi5hZGQoYVRhc2ssIGFQaGFzZSlcblx0fSxcblx0Z2V0VGFza2NoYWluIDogZnVuY3Rpb24oKXtcblx0XHRyZXR1cm4gdGFza2NoYWluO1xuXHR9LFxuXHRleGVjdXRlIDogZnVuY3Rpb24oYUVsZW1lbnQsIGFEYXRhLCBhUm9vdCl7XG5cdFx0aWYodHlwZW9mIGFFbGVtZW50ID09PSBcInVuZGVmaW5lZFwiKVxuXHRcdFx0cmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihcIlBhcmFtZXRlciBcXFwiYUVsZW1lbnRcXFwiIGlzIHVuZGVmaW5lZCFcIikpO1xuXHRcdGVsc2UgaWYoYUVsZW1lbnQgaW5zdGFuY2VvZiBOb2RlTGlzdCl7XG5cdFx0XHRjb25zdCBwcm9taXNlcyA9IFtdO1xuXHRcdFx0YUVsZW1lbnQuZm9yRWFjaChmdW5jdGlvbihhRWxlbWVudCl7XG5cdFx0XHRcdGlmKHR5cGVvZiBhRWxlbWVudCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBhRWxlbWVudC5ub2RlVHlwZSAhPSAzICYmIGFFbGVtZW50Lm5vZGVUeXBlICE9IDQpXG5cdFx0XHRcdFx0cHJvbWlzZXMucHVzaChleGVjdXRlRWxlbWVudChhRWxlbWVudCwgYURhdGEsIGFSb290KSk7XG5cdFx0XHR9KVxuXHRcdFx0XG5cdFx0XHRyZXR1cm4gUHJvbWlzZS5hbGwocHJvbWlzZXMpXG5cdFx0XHQudGhlbihmdW5jdGlvbigpe1xuXHRcdFx0XHRyZXR1cm4ge2VsZW1lbnQgOiBhRWxlbWVudCwgZGF0YSA6IGFEYXRhLCByb290IDogYVJvb3R9O1xuXHRcdFx0fSk7XG5cdFx0fVxuXHRcdGVsc2UgaWYoYUVsZW1lbnQgaW5zdGFuY2VvZiBOb2RlKVxuXHRcdFx0cmV0dXJuIGV4ZWN1dGVFbGVtZW50KGFFbGVtZW50LCBhRGF0YSwgYVJvb3QpXG5cdFx0ZWxzZVxuXHRcdFx0IHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoXCJUeXBlIG9mIFxcXCJhRWxlbWVudFxcXCIgLSBcXFwiXCIgKyB0eXBlb2YgYUVsZW1lbnQgKyBcIlxcXCIgaXMgbm90IHN1cHBvcnRlZCFcIikpO1xuXHR9XG59O1xuZXhwb3J0IGRlZmF1bHQgUHJvY2Vzc29yOyIsImltcG9ydCBDb25zdGFudHMgZnJvbSBcIi4vQ29uc3RhbnRzXCI7XHJcblxyXG5jb25zdCBpbnNlcnQgPSBmdW5jdGlvbihhRW50cnksIGFDaGFpbil7XHRcclxuXHRpZihhQ2hhaW4gPT0gbnVsbClcclxuXHRcdHJldHVybiBhRW50cnk7XHJcblx0XHJcblx0bGV0IHBhcmVudCA9IG51bGw7XHJcblx0bGV0IGN1cnJlbnQgPSBhQ2hhaW47XHJcblx0d2hpbGUoY3VycmVudCAhPSBudWxsKXtcclxuXHRcdGlmKGN1cnJlbnQucGhhc2UgPiBhRW50cnkucGhhc2Upe1xyXG5cdFx0XHRhRW50cnkubmV4dCA9IGN1cnJlbnRcclxuXHRcdFx0aWYocGFyZW50ID09IG51bGwpXHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0cmV0dXJuIGFFbnRyeTtcclxuXHRcdFx0ZWxzZXtcclxuXHRcdFx0XHRwYXJlbnQubmV4dCA9IGFFbnRyeTtcclxuXHRcdFx0XHRyZXR1cm4gYUNoYWluO1xyXG5cdFx0XHR9XHJcblx0XHR9XHRcdFx0XHJcblx0XHRwYXJlbnQgPSBjdXJyZW50O1xyXG5cdFx0Y3VycmVudCA9IGN1cnJlbnQubmV4dDtcclxuXHR9XHJcblx0XHJcblx0cGFyZW50Lm5leHQgPSBhRW50cnk7XHRcclxuXHRyZXR1cm4gYUNoYWluO1xyXG59O1xyXG5cclxuY29uc3QgZXhlY3V0ZUNoYWluID0gZnVuY3Rpb24oYUNvbnRleHQsIGFDaGFpbil7XHRcclxuXHRyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGFDaGFpbi50YXNrLmFjY2VwdChhQ29udGV4dCkpXHJcblx0LnRoZW4oZnVuY3Rpb24oaXNBY2NlcHRlZCl7XHJcblx0XHRpZighaXNBY2NlcHRlZClcclxuXHRcdFx0cmV0dXJuIGFDaGFpbi5uZXh0ID09IG51bGwgPyBhQ29udGV4dCA6IGV4ZWN1dGVDaGFpbihhQ29udGV4dCwgYUNoYWluLm5leHQpO1xyXG5cdFx0XHJcblx0XHRyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGFDaGFpbi50YXNrLmV4ZWN1dGUoYUNvbnRleHQpKVxyXG5cdFx0LnRoZW4oZnVuY3Rpb24oYUNvbnRleHQpe1xyXG5cdFx0XHRpZihhQ29udGV4dC5leGl0IHx8IGFDaGFpbi5uZXh0ID09IG51bGwpXHJcblx0XHRcdFx0cmV0dXJuIGFDb250ZXh0O1xyXG5cdFx0XHRcclxuXHRcdFx0cmV0dXJuIGV4ZWN1dGVDaGFpbihhQ29udGV4dCwgYUNoYWluLm5leHQpO1xyXG5cdFx0fSk7XHJcblx0fSk7XHRcclxufTtcclxuXHJcbmNvbnN0IFRhc2tDaGFpbiA9IGZ1bmN0aW9uKCl7XHJcblx0Y29uc3QgdGFza3MgPSB7fTtcdFxyXG5cdHJldHVybiB7XHJcblx0XHRjaGFpbiA6IG51bGwsXHJcblx0XHQvKipcclxuXHRcdCAqIEBwYXJhbSBhVGFzayA6IHtcclxuXHRcdCAqIFx0XHR0aXRsZSA6IHN0cmluZyxcclxuXHRcdCAqIFx0XHRhY2NlcHQoYUVsZW1lbnQpIDogUHJvbWlzZShCb29sZWFuKVxyXG5cdFx0ICogXHRcdGV4ZWN1dGUoYUNvbnRleHQpIDogUHJvbWlzZShuZXcgQ29udGV4dClcclxuXHRcdCAqIH1cclxuXHRcdCAqIEBwYXJhbSBhUGhhc2UgOiBDb250YW50cy5QSEFTRVxyXG5cdFx0ICovXHRcclxuXHRcdGFkZCA6IGZ1bmN0aW9uKGFUYXNrLCBhUGhhc2Upe1xyXG5cdFx0XHRpZih0eXBlb2YgdGFza3NbYVRhc2suaWRdID09PSBcInVuZGVmaW5lZFwiKVx0XHRcclxuXHRcdFx0XHR0aGlzLmNoYWluID0gaW5zZXJ0KHtcclxuXHRcdFx0XHRcdHRhc2sgOiBhVGFzayxcclxuXHRcdFx0XHRcdHBoYXNlIDogKHR5cGVvZiBhUGhhc2UgIT09IFwidW5kZWZpbmVkXCIgPyBhUGhhc2UgOiBDb25zdGFudHMuUEhBU0UuRklOSVNIKSxcclxuXHRcdFx0XHRcdG5leHQgOiBudWxsXHJcblx0XHRcdFx0fSwgdGhpcy5jaGFpbik7XHRcdFx0XHJcblx0XHR9LFxyXG5cdFx0XHJcblx0XHQvKipcclxuXHRcdCAqIEBwYXJhbSBhQ29udGV4dDoge1xyXG5cdFx0ICpcdFx0ZWxlbWVudCxcclxuXHRcdCAqXHRcdGRhdGEsXHJcblx0XHQgKlx0XHRyb290LFxyXG5cdFx0ICpcdFx0cHJvY2Vzc29yLFxyXG5cdFx0ICpcdH1cclxuXHRcdCAqL1xyXG5cdFx0ZXhlY3V0ZSA6IGZ1bmN0aW9uKGFDb250ZXh0KXtcclxuXHRcdFx0cmV0dXJuIGV4ZWN1dGVDaGFpbihhQ29udGV4dCwgdGhpcy5jaGFpbik7XHJcblx0XHR9XHJcblx0fTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRhc2tDaGFpbjsiLCJpbXBvcnQgXCJAZGVmYXVsdC1qcy9kZWZhdWx0anMtZXh0ZG9tXCI7XHJcbmltcG9ydCBDb25zdGFudHMgZnJvbSBcIi4vQ29uc3RhbnRzXCI7XHJcbmltcG9ydCBQcm9jZXNzb3IgZnJvbSBcIi4vUHJvY2Vzc29yXCI7XHJcbmltcG9ydCBcIi4vdGFza3NcIjtcclxuXHJcbmNvbnN0IHBhY2sgPSB7XHJcblx0Q29uc3RhbnRzIDogQ29uc3RhbnRzLFxyXG5cdFByb2Nlc3NvciA6IFByb2Nlc3NvclxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgcGFjaztcclxuZXhwb3J0IHtDb25zdGFudHMsIFByb2Nlc3Nvcn07IiwiaW1wb3J0IENvbnN0YW50cyBmcm9tIFwiLi4vQ29uc3RhbnRzXCI7XHJcbmltcG9ydCBQcm9jZXNzb3IgZnJvbSBcIi4uL1Byb2Nlc3NvclwiO1xyXG5cclxuY29uc3QgVGFzayA9IHtcclxuXHRpZCA6IFwiYWRkLWF0dHJpYnV0ZVwiLFxyXG5cdGFjY2VwdCA6IGZ1bmN0aW9uKGFDb250ZXh0KXtcclxuXHRcdHJldHVybiBhQ29udGV4dC5lbGVtZW50LmlzKFwiW2pzdGwtYWRkLWF0dHJpYnV0ZV1cIik7XHJcblx0fSxcclxuXHRleGVjdXRlIDogZnVuY3Rpb24oYUNvbnRleHQpe1xyXG5cdFx0cmV0dXJuIFByb21pc2UucmVzb2x2ZShhQ29udGV4dCk7XHJcblx0fVxyXG59O1xyXG5cclxuUHJvY2Vzc29yLmFkZFRhc2soVGFzaywgQ29uc3RhbnRzLlBIQVNFLk1BTklQVUxBVElPTiArIDIwMCk7IiwiaW1wb3J0IENvbnN0YW50cyBmcm9tIFwiLi4vQ29uc3RhbnRzXCI7XHJcbmltcG9ydCBQcm9jZXNzb3IgZnJvbSBcIi4uL1Byb2Nlc3NvclwiO1xyXG5cclxuY29uc3QgVGFzayA9IHtcclxuXHRpZCA6IFwiYXN5bmNcIixcclxuXHRhY2NlcHQgOiBmdW5jdGlvbihhQ29udGV4dCl7XHJcblx0XHRyZXR1cm4gZmFsc2U7XHJcblx0fSxcclxuXHRleGVjdXRlIDogZnVuY3Rpb24oYUNvbnRleHQpe1xyXG5cdFx0cmV0dXJuIFByb21pc2UucmVzb2x2ZShhQ29udGV4dCk7XHJcblx0fVxyXG59O1xyXG5cclxuUHJvY2Vzc29yLmFkZFRhc2soVGFzaywgQ29uc3RhbnRzLlBIQVNFLklOSVQpOyIsImltcG9ydCBDb25zdGFudHMgZnJvbSBcIi4uL0NvbnN0YW50c1wiO1xuaW1wb3J0IFByb2Nlc3NvciBmcm9tIFwiLi4vUHJvY2Vzc29yXCI7XG5pbXBvcnQgZWwgZnJvbSBcIkBkZWZhdWx0LWpzL2RlZmF1bHRqcy1leHByZXNzaW9uLWxhbmd1YWdlXCI7XG5cbmNvbnN0IFJlc29sdmVyID0gZWwuRXhwcmVzc2lvblJlc29sdmVyO1xuXG5jb25zdCBleGVjdXRlID0gZnVuY3Rpb24oYUtleSwgYVZhbHVlLCBhQ29udGV4dCl7XG5cdHJldHVybiBSZXNvbHZlci5yZXNvbHZlVGV4dChhVmFsdWUsIGFDb250ZXh0LmRhdGEpXG5cdC50aGVuKGZ1bmN0aW9uKGFSZXN1bHQpe1xuXHRcdGlmKGFWYWx1ZSAhPSBhUmVzdWx0KVxuXHRcdFx0YUNvbnRleHQuZWxlbWVudC5hdHRyKGFLZXksIGFSZXN1bHQpO1xuXHR9KTtcbn07XG5cbmNvbnN0IFRhc2sgPSB7XG5cdGlkIDogXCJhdHRyaWJ1dGVcIixcblx0YWNjZXB0IDogZnVuY3Rpb24oYUNvbnRleHQpe1xuXHRcdGNvbnN0IGF0dHJpYnV0ZXMgPSBhQ29udGV4dC5lbGVtZW50LmF0dHIoKTtcblx0XHRyZXR1cm4gdHlwZW9mIGF0dHJpYnV0ZXMgIT09IFwidW5kZWZpbmVkXCIgJiYgYXR0cmlidXRlcyAhPSBudWxsICYmICFhQ29udGV4dC5lbGVtZW50LmlzKFwiW2pzdGwtYXR0cmlidXRlLWlnbm9yZV1cIik7XG5cdH0sXG5cdGV4ZWN1dGUgOiBmdW5jdGlvbihhQ29udGV4dCl7XG5cdFx0Y29uc3QgYXR0cmlidXRlcyA9IGFDb250ZXh0LmVsZW1lbnQuYXR0cigpO1xuXHRcdGNvbnN0IHByb21pc2VzID0gW107XG5cdFx0Zm9yKGNvbnN0IGtleSBpbiBhdHRyaWJ1dGVzKVxuXHRcdFx0cHJvbWlzZXMucHVzaChleGVjdXRlKGtleSwgYXR0cmlidXRlc1trZXldLCBhQ29udGV4dCkpO1xuXHRcdFxuXHRcdHJldHVybiBQcm9taXNlLmFsbChwcm9taXNlcylcblx0XHQudGhlbihmdW5jdGlvbigpe1xuXHRcdFx0cmV0dXJuIGFDb250ZXh0O1xuXHRcdH0pO1xuXHR9XG59O1xuXG5Qcm9jZXNzb3IuYWRkVGFzayhUYXNrLCBDb25zdGFudHMuUEhBU0UuQ09OVEVOVCArIDEwMCk7IiwiaW1wb3J0IENvbnN0YW50cyBmcm9tIFwiLi4vQ29uc3RhbnRzXCI7XHJcbmltcG9ydCBQcm9jZXNzb3IgZnJvbSBcIi4uL1Byb2Nlc3NvclwiO1xyXG5cclxuXHJcbmNvbnN0IGV4ZWN1dGVOZXh0ID0gZnVuY3Rpb24oY2hpbGRyZW4sIGluZGV4LCBhQ29udGV4dCl7XHJcblx0cmV0dXJuIFByb2Nlc3Nvci5leGVjdXRlKGNoaWxkcmVuW2luZGV4XSwgYUNvbnRleHQuZGF0YSwgYUNvbnRleHQucm9vdClcclxuXHQudGhlbihmdW5jdGlvbihhQ29udGV4dCl7XHJcblx0XHRjb25zdCBuZXh0SW5kZXggPSBpbmRleCArIDE7XHJcblx0XHRpZihjaGlsZHJlbi5sZW5ndGggPiBuZXh0SW5kZXgpXHJcblx0XHRcdHJldHVybiBleGVjdXRlTmV4dChjaGlsZHJlbiwgbmV4dEluZGV4LCBhQ29udGV4dCk7XHJcblx0XHRlbHNlXHJcblx0XHRcdHJldHVybiBhQ29udGV4dDtcclxuXHR9KTtcclxufTtcclxuXHJcbmNvbnN0IFRhc2sgPSB7XHJcblx0aWQgOiBcImNoaWxkcmVuXCIsXHJcblx0YWNjZXB0IDogZnVuY3Rpb24oYUNvbnRleHQpe1xyXG5cdFx0Y29uc3QgY2hpbGRyZW4gPSBhQ29udGV4dC5lbGVtZW50LmNoaWxkcmVuO1xyXG5cdFx0cmV0dXJuIGNoaWxkcmVuICE9IG51bGwgJiYgY2hpbGRyZW4ubGVuZ3RoID4gMDtcclxuXHR9LFxyXG5cdGV4ZWN1dGUgOiBmdW5jdGlvbihhQ29udGV4dCl7XHJcblx0XHRjb25zdCBjaGlsZHJlbiA9IEFycmF5LmZyb20oYUNvbnRleHQuZWxlbWVudC5jaGlsZHJlbilcclxuXHRcdC5maWx0ZXIoZnVuY3Rpb24oYU5vZGUpe1xyXG5cdFx0XHRyZXR1cm4gYU5vZGUubm9kZVR5cGUgIT0gMyAmJiBhTm9kZS5ub2RlVHlwZSAhPSA0O1xyXG5cdFx0fSk7XHJcblx0XHRcclxuXHRcdHJldHVybiBleGVjdXRlTmV4dChjaGlsZHJlbiwgMCwgYUNvbnRleHQpO1xyXG5cdH1cclxufTtcclxuXHJcblByb2Nlc3Nvci5hZGRUYXNrKFRhc2ssIENvbnN0YW50cy5QSEFTRS5DSElMRFJFTik7IiwiaW1wb3J0IENvbnN0YW50cyBmcm9tIFwiLi4vQ29uc3RhbnRzXCI7XHJcbmltcG9ydCBQcm9jZXNzb3IgZnJvbSBcIi4uL1Byb2Nlc3NvclwiO1xyXG5cclxuY29uc3QgVGFzayA9IHtcclxuXHRpZCA6IFwiY2hvb3NlXCIsXHJcblx0YWNjZXB0IDogZnVuY3Rpb24oYUNvbnRleHQpe1xyXG5cdFx0cmV0dXJuIGZhbHNlO1xyXG5cdH0sXHJcblx0ZXhlY3V0ZSA6IGZ1bmN0aW9uKGFDb250ZXh0KXtcclxuXHRcdHJldHVybiBQcm9taXNlLnJlc29sdmUoYUNvbnRleHQpO1xyXG5cdH1cclxufTtcclxuXHJcblByb2Nlc3Nvci5hZGRUYXNrKFRhc2ssIENvbnN0YW50cy5QSEFTRS5NQU5JUFVMQVRJT04gKyAxMDApOyIsImltcG9ydCBDb25zdGFudHMgZnJvbSBcIi4uL0NvbnN0YW50c1wiO1xyXG5pbXBvcnQgUHJvY2Vzc29yIGZyb20gXCIuLi9Qcm9jZXNzb3JcIjtcclxuXHJcbmNvbnN0IFRhc2sgPSB7XHJcblx0aWQgOiBcImRhdGFcIixcclxuXHRhY2NlcHQgOiBmdW5jdGlvbihhQ29udGV4dCl7XHJcblx0XHRyZXR1cm4gZmFsc2U7XHJcblx0fSxcclxuXHRleGVjdXRlIDogZnVuY3Rpb24oYUNvbnRleHQpe1xyXG5cdFx0cmV0dXJuIFByb21pc2UucmVzb2x2ZShhQ29udGV4dCk7XHJcblx0fVxyXG59O1xyXG5cclxuUHJvY2Vzc29yLmFkZFRhc2soVGFzaywgQ29uc3RhbnRzLlBIQVNFLkNPTlRFWFQgKyAxMDApOyIsImltcG9ydCBlbCBmcm9tIFwiQGRlZmF1bHQtanMvZGVmYXVsdGpzLWV4cHJlc3Npb24tbGFuZ3VhZ2VcIjtcclxuaW1wb3J0IENvbnN0YW50cyBmcm9tIFwiLi4vQ29uc3RhbnRzXCI7XHJcbmltcG9ydCBQcm9jZXNzb3IgZnJvbSBcIi4uL1Byb2Nlc3NvclwiO1xyXG5pbXBvcnQgT2JqZWN0VXRpbHMgZnJvbSBcIkBkZWZhdWx0LWpzL2RlZmF1bHRqcy1jb21tb24tdXRpbHMvc3JjL09iamVjdFV0aWxzXCI7XHJcblxyXG5jb25zdCBSZXNvbHZlciA9IGVsLkV4cHJlc3Npb25SZXNvbHZlcjtcclxuY29uc3QgREFUQU5BTUUgPSBcImRlZmF1bHRqcy50bC5mb3JlYWNoLnRlbXBsYXRlXCI7XHJcbmNvbnN0IEFUVFJJQlVURSA9IHtcclxuXHREQVRBIDogXCJqc3RsLWZvcmVhY2hcIixcclxuXHRWQVJOQU1FIDogXCJqc3RsLWZvcmVhY2gtdmFyXCIsXHJcblx0U1RBVFVTVkFSTkFNRSA6IFwianN0bC1mb3JlYWNoLXN0YXR1c1wiLFxyXG5cdENPVU5UIDogXCJqc3RsLWZvcmVhY2gtY291bnRcIixcclxuXHRTVEFSVElOREVYIDogXCJqc3RsLWZvcmVhY2gtc3RhcnQtaW5kZXhcIixcclxuXHRTVEVQIDogXCJqc3RsLWZvcmVhY2gtc3RlcFwiLFxyXG5cdEJSRUFLQ09ORElUSU9OIDogXCJqc3RsLWZvcmVhY2gtYnJlYWstY29uZGl0aW9uXCJcclxufTtcclxuXHJcbmNvbnN0IGNvdW50ID0gZnVuY3Rpb24oYVZhcm5hbWUsIGFTdGF0dXNuYW1lLCBhQ29udGV4dCwgYVRlbXBsYXRlKSB7XHRcclxuXHRjb25zb2xlLmxvZyhcImNvdW50XCIpO1xyXG5cdHJldHVybiBQcm9taXNlLmFsbChbXHJcblx0XHRSZXNvbHZlci5yZXNvbHZlKGFDb250ZXh0LmVsZW1lbnQuYXR0cihBVFRSSUJVVEUuU1RBUlRJTkRFWCkgfHwgMCwgYUNvbnRleHQuZGF0YSwgMCksXHJcblx0XHRSZXNvbHZlci5yZXNvbHZlKGFDb250ZXh0LmVsZW1lbnQuYXR0cihBVFRSSUJVVEUuQ09VTlQpIHx8IDAsIGFDb250ZXh0LmRhdGEsIDApLFxyXG5cdFx0UmVzb2x2ZXIucmVzb2x2ZShhQ29udGV4dC5lbGVtZW50LmF0dHIoQVRUUklCVVRFLlNURVApIHx8IDEsIGFDb250ZXh0LmRhdGEsIDEpXHJcblx0XSkudGhlbihmdW5jdGlvbihhUmVzdWx0cyl7XHJcblx0XHRsZXQgcHJvbWlzZXMgPSBbXTtcclxuXHRcdGNvbnN0IHN0YXJ0ID0gYVJlc3VsdHNbMF0gfHwgMDtcclxuXHRcdGNvbnN0IGNvdW50ID0gYVJlc3VsdHNbMV0gfHwgMDtcclxuXHRcdGNvbnN0IHN0ZXAgPSBhUmVzdWx0c1syXSB8fCAxO1xyXG5cdFx0Zm9yIChsZXQgaSA9IHN0YXJ0OyBpIDwgY291bnQ7IGkgKz0gc3RlcCkgeyAgICBcdFx0XHQgICAgXHJcblx0XHQgICAgY29uc3QgY29udGV4dCA9IE9iamVjdFV0aWxzLm1lcmdlKHt9LCBhQ29udGV4dC5kYXRhKTtcclxuXHRcdCAgICBjb250ZXh0W2FWYXJuYW1lXSA9IGksXHJcblx0XHQgICAgY29udGV4dFthU3RhdHVzbmFtZV0gPSB7XHJcblx0XHQgICAgICAgIFwiaW5kZXhcIiA6IGksXHJcblx0XHQgICAgICAgIFwibnVtYmVyXCIgOiBpICsgMSwgXHJcblx0XHQgICAgICAgIFwiY291bnRcIiA6IGFSZXN1bHRzWzFdLFxyXG5cdFx0ICAgICAgICBcImNvbnRleHRcIiA6IGFDb250ZXh0LmRhdGFcclxuXHRcdCAgICB9O1xyXG5cdFx0ICAgIHByb21pc2VzLnB1c2goUHJvY2Vzc29yLmV4ZWN1dGUoYVRlbXBsYXRlLmNsb25lTm9kZSh0cnVlKSwgY29udGV4dCwgYUNvbnRleHQucm9vdClcclxuXHRcdCAgICBcdC50aGVuKGZ1bmN0aW9uKGFSZXN1bHQpe1xyXG5cdCAgICBcdFx0XHRyZXR1cm4gYVJlc3VsdC5lbGVtZW50O1xyXG5cdCAgICBcdFx0fSkpO1xyXG5cdCAgICB9XHJcblx0XHRcclxuXHRcdHJldHVybiBQcm9taXNlLmFsbChwcm9taXNlcyk7XHJcblx0fSk7ICAgIFxyXG59O1xyXG5cclxuY29uc3QgaXRlcmF0ZUxpc3QgPSBmdW5jdGlvbihhSW5kZXgsIGFEYXRhLCBhQnJlYWtDb25kaXRpb24sIGFWYXJuYW1lLCBhU3RhdHVzbmFtZSwgYUNvbnRleHQsIGFUZW1wbGF0ZSwgYVJlc3VsdCl7XHJcblx0aWYoYUluZGV4ID49IGFEYXRhLmxlbmd0aClcclxuXHRcdHJldHVybiBhUmVzdWx0O1x0XHJcblx0XHJcblx0Y29uc3QgY29udGV4dCA9IE9iamVjdFV0aWxzLm1lcmdlKHt9LCBhQ29udGV4dCk7XHJcbiAgICBjb250ZXh0W2FWYXJuYW1lXSA9IGFEYXRhW2FJbmRleF0sXHJcbiAgICBjb250ZXh0W2FTdGF0dXNuYW1lXSA9IHtcclxuICAgICAgICBcImluZGV4XCIgOiBhSW5kZXgsXHJcbiAgICAgICAgXCJudW1iZXJcIiA6IGFJbmRleCArIDEsIFxyXG4gICAgICAgIFwiY291bnRcIiA6IGFEYXRhLmxlbmd0aCxcclxuICAgICAgICBcImRhdGFcIiA6IGFEYXRhLFxyXG4gICAgICAgIFwiY29udGV4dFwiIDogYUNvbnRleHQuZGF0YVxyXG4gICAgfTtcclxuICAgIFxyXG4gICAgcmV0dXJuIFJlc29sdmVyLnJlc29sdmUoYUJyZWFrQ29uZGl0aW9uLCBjb250ZXh0LCBmYWxzZSlcclxuICAgIC50aGVuKGZ1bmN0aW9uKGRvQnJlYWspe1xyXG4gICAgXHRpZighZG9CcmVhayl7XHJcbiAgICBcdFx0cmV0dXJuIGFDb250ZXh0LnByb2Nlc3Nvci5leGVjdXRlKGFUZW1wbGF0ZS5jbG9uZU5vZGUodHJ1ZSksIGNvbnRleHQsIGFDb250ZXh0LnJvb3QpXHJcbiAgICBcdFx0LnRoZW4oZnVuY3Rpb24oYUNvbnRlbnQpe1xyXG4gICAgXHRcdFx0cmV0dXJuIGFSZXN1bHQucHVzaChhQ29udGVudC5lbGVtZW50KTtcclxuICAgIFx0XHR9KTsgICAgXHRcdFxyXG4gICAgXHR9XHJcbiAgICBcdFxyXG4gICAgXHRyZXR1cm4gYVJlc3VsdDtcclxuICAgIH0pO1x0XHJcbn07XHJcblxyXG5jb25zdCBsaXN0ID0gZnVuY3Rpb24oYURhdGEsIGFWYXJuYW1lLCBhU3RhdHVzbmFtZSwgYUNvbnRleHQsIGFUZW1wbGF0ZSkge1x0XHJcblx0Y29uc3QgYnJlYWtDb25kaXRpb24gPSBhQ29udGV4dC5lbGVtZW50LmF0dHIoQVRUUklCVVRFLkJSRUFLQ09ORElUSU9OKTtcclxuXHRyZXR1cm4gUmVzb2x2ZXIucmVzb2x2ZShhQ29udGV4dC5lbGVtZW50LmF0dHIoQVRUUklCVVRFLlNUQVJUSU5ERVgpLCBhQ29udGV4dC5kYXRhLCAwKVxyXG5cdC50aGVuKGZ1bmN0aW9uKGFTdGFydEluZGV4KXtcclxuXHRcdHJldHVybiBpdGVyYXRlTGlzdChhU3RhcnRJbmRleCxhRGF0YSwgYVZhcm5hbWUsIGFTdGF0dXNuYW1lLCBhQ29udGV4dCwgYVRlbXBsYXRlLCBbXSk7XHQgICAgXHRcclxuXHR9KTtcclxufTtcclxuXHJcbmNvbnN0IGl0ZXJhdGVNYXAgPSBmdW5jdGlvbihhSW5kZXgsIGFLZXlzLCBhRGF0YSwgYUJyZWFrQ29uZGl0aW9uLCBhVmFybmFtZSwgYVN0YXR1c25hbWUsIGFDb250ZXh0LCBhVGVtcGxhdGUsIGFSZXN1bHQpe1xyXG5cdGlmKGFJbmRleCA+PSBhRGF0YS5sZW5ndGgpXHJcblx0XHRyZXR1cm4gYVJlc3VsdDtcclxuXHRcclxuXHRjb25zdCBrZXkgPSBhS2V5c1thSW5kZXhdO1xyXG5cdGNvbnN0IGNvbnRleHQgPSBPYmplY3RVdGlscy5tZXJnZSh7fSwgYUNvbnRleHQpO1xyXG4gICAgY29udGV4dFthVmFybmFtZV0gPSBhRGF0YVtrZXldLFxyXG4gICAgY29udGV4dFthU3RhdHVzbmFtZV0gPSB7XHJcbiAgICAgICAgXCJpbmRleFwiIDogYUluZGV4LFxyXG4gICAgICAgIFwibnVtYmVyXCIgOiBhSW5kZXggKyAxLFxyXG4gICAgICAgIFwia2V5XCIgOiBrZXksXHJcbiAgICAgICAgXCJjb3VudFwiIDogYURhdGEubGVuZ3RoLFxyXG4gICAgICAgIFwiZGF0YVwiIDogYURhdGEsXHJcbiAgICAgICAgXCJjb250ZXh0XCIgOiBhQ29udGV4dC5kYXRhXHJcbiAgICB9O1xyXG4gICAgXHJcbiAgICByZXR1cm4gUmVzb2x2ZXIucmVzb2x2ZShhQnJlYWtDb25kaXRpb24sIGNvbnRleHQsIGZhbHNlKVxyXG4gICAgLnRoZW4oZnVuY3Rpb24oZG9CcmVhayl7XHJcbiAgICBcdGlmKCFkb0JyZWFrKXtcclxuICAgIFx0XHRyZXR1cm4gYUNvbnRleHQucHJvY2Vzc29yLmV4ZWN1dGUoYVRlbXBsYXRlLmNsb25lTm9kZSh0cnVlKSwgY29udGV4dCwgYUNvbnRleHQucm9vdClcclxuICAgIFx0XHQudGhlbihmdW5jdGlvbihhQ29udGVudCl7XHJcbiAgICBcdFx0XHRyZXR1cm4gYVJlc3VsdC5wdXNoKGFDb250ZW50LmVsZW1lbnQpO1xyXG4gICAgXHRcdH0pOyAgICBcdFx0XHJcbiAgICBcdH1cclxuICAgIFx0XHJcbiAgICBcdHJldHVybiBhUmVzdWx0O1xyXG4gICAgfSk7XHJcbn07XHJcblxyXG5jb25zdCBtYXAgPSBmdW5jdGlvbihhRGF0YSwgYVZhcm5hbWUsIGFTdGF0dXNuYW1lLCBhQ29udGV4dCwgYVRlbXBsYXRlKSB7XHJcblx0Y29uc3QgYnJlYWtDb25kaXRpb24gPSBhQ29udGV4dC5lbGVtZW50LmF0dHIoQVRUUklCVVRFLkJSRUFLQ09ORElUSU9OKTtcclxuXHRyZXR1cm4gUmVzb2x2ZXIucmVzb2x2ZShhQ29udGV4dC5lbGVtZW50LmF0dHIoQVRUUklCVVRFLlNUQVJUSU5ERVgpLCBhQ29udGV4dC5kYXRhLCAwKVxyXG5cdC50aGVuKGZ1bmN0aW9uKGFTdGFydEluZGV4KXtcclxuXHRcdHJldHVybiBpdGVyYXRlTWFwKGFTdGFydEluZGV4LCBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhhRGF0YSksIGFEYXRhLCBhVmFybmFtZSwgYVN0YXR1c25hbWUsIGFDb250ZXh0LCBhVGVtcGxhdGUsIFtdKTtcdCAgICBcdFxyXG5cdH0pO1xyXG59O1xyXG5cclxuY29uc3QgZ2V0VGVtcGxhdGUgPSBmdW5jdGlvbihhRWxlbWVudCkge1xyXG4gICAgbGV0IHRlbXBsYXRlID0gYUVsZW1lbnQuZGF0YShEQVRBTkFNRSk7XHJcbiAgICBpZiAodHlwZW9mIHRlbXBsYXRlID09PSAndW5kZWZpbmVkJykge1xyXG5cdCAgICB0ZW1wbGF0ZSA9IGFFbGVtZW50LmNvbnRlbnQoKTtcclxuXHQgICAgYUVsZW1lbnQuZGF0YShEQVRBTkFNRSwgdGVtcGxhdGUpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRlbXBsYXRlO1xyXG59O1xyXG5cclxuXHJcbmNvbnN0IGV4ZWN1dGUgPSBmdW5jdGlvbihhbkV4cHJlc3Npb24sIGFWYXJuYW1lLCBhU3RhdHVzbmFtZSwgYUNvbnRleHQsIGFUZW1wbGF0ZSl7XHJcblx0aWYgKGFuRXhwcmVzc2lvbiA9PSBudWxsICYmIHR5cGVvZiBhQ29udGV4dC5lbGVtZW50LmF0dHIoQVRUUklCVVRFLkNPVU5UKSAhPT0gXCJ1bmRlZmluZWRcIilcclxuXHQgICAgcmV0dXJuIGNvdW50KGFWYXJuYW1lLCBhU3RhdHVzbmFtZSwgYUNvbnRleHQsIGFUZW1wbGF0ZSk7XHJcbiAgICBlbHNlIGlmKGV4cHJlc3Npb24gIT0gbnVsbCl7XHJcblx0ICAgIGxldCBkYXRhID0gUmVzb2x2ZXIucmVzb2x2ZShhbkV4cHJlc3Npb24sIGFDb250ZXh0LCBudWxsKTtcclxuXHQgICAgaWYoZGF0YSA9PSBudWxsKVxyXG5cdCAgICBcdHJldHVybiBhQ29udGV4dDtcclxuXHQgICAgZWxzZSBpZiAoZGF0YSBpbnN0YW5jZW9mIEFycmF5KVxyXG5cdFx0ICAgIHJldHVybiBsaXN0KGRhdGEsIGFWYXJuYW1lLCBhU3RhdHVzbmFtZSwgYUNvbnRleHQsIGFUZW1wbGF0ZSk7XHJcblx0ICAgIGVsc2UgaWYoZGF0YSBpbnN0YW5jZW9mIE9iamVjdClcclxuXHQgICAgXHRyZXR1cm4gbWFwKGRhdGEsIGFWYXJuYW1lLCBhU3RhdHVzbmFtZSwgYUNvbnRleHQsIGFUZW1wbGF0ZSk7XHRcdFx0XHQgICBcclxuXHQgICAgZWxzZVxyXG5cdFx0ICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG59O1xyXG5cclxuXHJcbmNvbnN0IFRhc2sgPSB7XHJcblx0aWQgOiBcImZvcmVhY2hcIixcclxuXHRhY2NlcHQgOiBmdW5jdGlvbihhQ29udGV4dCl7XHJcblx0XHRyZXR1cm4gYUNvbnRleHQuZWxlbWVudC5pcyhcIltqc3RsLWZvcmVhY2hdXCIpO1xyXG5cdH0sXHJcblx0ZXhlY3V0ZSA6IGZ1bmN0aW9uKGFDb250ZXh0KXtcdFx0XHJcblx0XHRjb25zdCBlbGVtZW50ID0gYUNvbnRleHQuZWxlbWVudDtcclxuXHRcdGNvbnN0IHRlbXBsYXRlID0gZ2V0VGVtcGxhdGUoYUNvbnRleHQuZWxlbWVudCk7XHJcblx0ICAgIGlmICh0eXBlb2YgdGVtcGxhdGUgIT09ICd1bmRlZmluZWQnKSB7XHJcblx0ICAgIFx0Y29uc3QgZXhwcmVzc2lvbiA9IGVsZW1lbnQuYXR0cihBVFRSSUJVVEUuREFUQSkgfHwgbnVsbDtcclxuXHQgICAgXHRjb25zdCB2YXJuYW1lID0gZWxlbWVudC5hdHRyKEFUVFJJQlVURS5WQVJOQU1FKSB8fCBcIml0ZW1WYXJcIjsgXHJcblx0XHQgICAgY29uc3Qgc3RhdHVzbmFtZSA9IGVsZW1lbnQuYXR0cihBVFRSSUJVVEUuU1RBVFVTVkFSTkFNRSkgfHwgXCJzdGF0dXNWYXJcIjtcclxuXHRcdCAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGV4ZWN1dGUoZXhwcmVzc2lvbiwgdmFybmFtZSwgc3RhdHVzbmFtZSwgYUNvbnRleHQsIHRlbXBsYXRlKSlcclxuXHRcdCAgICAudGhlbihmdW5jdGlvbihhQ29udGVudCl7XHJcblx0XHQgICAgXHRjb25zb2xlLmxvZyhcImZvcmVhY2ggY29udGVudDpcIiwgYUNvbnRlbnQpO1xyXG5cdFx0ICAgIFx0XHJcblx0XHQgICAgXHRpZih0eXBlb2YgYUNvbnRlbnQgPT09IFwidW5kZWZpbmVkXCIpXHJcblx0XHQgICAgXHRcdHJldHVybiBbXTtcclxuXHRcdCAgICBcdFxyXG5cdFx0ICAgIFx0Y29uc3QgcmVzdWx0ID0gW107XHJcblx0ICAgIFx0XHRhQ29udGVudC5mb3JFYWNoKGZ1bmN0aW9uKGFJdGVtKXtcclxuXHQgICAgXHRcdFx0aWYodHlwZW9mIGFJdGVtICE9PSBcInVuZGVmaW5lZFwiKVxyXG5cdFx0ICAgIFx0XHRcdGFJdGVtLmZvckVhY2goZnVuY3Rpb24oYU5vZGUpe1xyXG5cdFx0ICAgIFx0XHRcdFx0aWYodHlwZW9mIGFOb2RlICE9PSBcInVuZGVmaW5lZFwiKVxyXG5cdFx0ICAgIFx0XHRcdFx0XHRyZXN1bHQucHVzaChhTm9kZSk7XHJcblx0XHQgICAgXHRcdFx0fSk7XHJcblx0ICAgIFx0XHR9KTtcclxuXHRcdCAgICBcdFxyXG5cdFx0ICAgIFx0cmV0dXJuIHJlc3VsdDtcclxuXHRcdCAgICB9KS50aGVuKGZ1bmN0aW9uKGFDb250ZW50KXtcclxuXHRcdCAgICBcdGVsZW1lbnQuZW1wdHkoKTtcclxuXHRcdCAgICBcdGlmKGFDb250ZW50ICE9IG51bGwpXHJcblx0XHQgICAgXHRcdGVsZW1lbnQuYXBwZW5kKGFDb250ZW50KVxyXG5cdFx0ICAgIFx0XHRcclxuXHRcdCAgICBcdGFDb250ZXh0LmV4aXQgPSB0cnVlO1xyXG5cdFx0ICAgIFx0cmV0dXJuIGFDb250ZXh0O1x0XHQgICAgXHRcclxuXHRcdCAgICB9KVtcImNhdGNoXCJdKGNvbnNvbGUuZXJyb3IpO1xyXG5cdCAgICB9XHJcblx0ICAgIFxyXG5cdFx0cmV0dXJuIGFDb250ZXh0O1xyXG5cdH1cclxufTtcclxuXHJcblByb2Nlc3Nvci5hZGRUYXNrKFRhc2ssIENvbnN0YW50cy5QSEFTRS5NQU5JUFVMQVRJT04pOyIsImltcG9ydCBlbCBmcm9tIFwiQGRlZmF1bHQtanMvZGVmYXVsdGpzLWV4cHJlc3Npb24tbGFuZ3VhZ2VcIjtcclxuaW1wb3J0IENvbnN0YW50cyBmcm9tIFwiLi4vQ29uc3RhbnRzXCI7XHJcbmltcG9ydCBQcm9jZXNzb3IgZnJvbSBcIi4uL1Byb2Nlc3NvclwiO1xyXG5cclxuY29uc3QgUmVzb2x2ZXIgPSBlbC5FeHByZXNzaW9uUmVzb2x2ZXI7XHJcbmNvbnN0IEFUVFJJQlVURSA9IFwianN0bC1pZlwiO1xyXG5jb25zdCBUYXNrID0ge1xyXG5cdGlkIDogXCJpZlwiLFxyXG5cdGFjY2VwdCA6IGZ1bmN0aW9uKGFDb250ZXh0KXtcdFx0XHJcblx0XHRyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGFDb250ZXh0LmVsZW1lbnQuaXMoXCJbanN0bC1pZl1cIikpO1xyXG5cdH0sXHJcblx0ZXhlY3V0ZSA6IGZ1bmN0aW9uKGFDb250ZXh0KXtcclxuXHRcdGNvbnN0IGV4cHJlc3Npb24gPSBhQ29udGV4dC5lbGVtZW50LmF0dHIoXCJqc3RsLWlmXCIpO1xyXG5cdFx0cmV0dXJuIFJlc29sdmVyLnJlc29sdmUoZXhwcmVzc2lvbiwgYUNvbnRleHQuZGF0YSwgZmFsc2UpXHJcblx0XHQudGhlbihmdW5jdGlvbihhUmVzdWx0KXtcclxuXHRcdFx0aWYoIWFSZXN1bHQpXHJcblx0XHRcdFx0YUNvbnRleHQuZWxlbWVudC5yZW1vdmUoKTtcclxuXHRcdFx0XHJcblx0XHRcdGFDb250ZXh0LmV4aXQgPSAhIWFSZXN1bHQ7XHJcblx0XHRcdHJldHVybiBQcm9taXNlLnJlc29sdmUoYUNvbnRleHQpO1xyXG5cdFx0fSk7XHJcblx0fVxyXG59O1xyXG5cclxuUHJvY2Vzc29yLmFkZFRhc2soVGFzaywgQ29uc3RhbnRzLlBIQVNFLkNPTkRJVElPTik7IiwiaW1wb3J0IENvbnN0YW50cyBmcm9tIFwiLi4vQ29uc3RhbnRzXCI7XHJcbmltcG9ydCBQcm9jZXNzb3IgZnJvbSBcIi4uL1Byb2Nlc3NvclwiO1xyXG5cclxuY29uc3QgVGFzayA9IHtcclxuXHRpZCA6IFwiaW5jbHVkZVwiLFxyXG5cdGFjY2VwdCA6IGZ1bmN0aW9uKGFDb250ZXh0KXtcclxuXHRcdHJldHVybiBmYWxzZTtcclxuXHR9LFxyXG5cdGV4ZWN1dGUgOiBmdW5jdGlvbihhQ29udGV4dCl7XHJcblx0XHRyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGFDb250ZXh0KTtcclxuXHR9XHJcbn07XHJcblxyXG5Qcm9jZXNzb3IuYWRkVGFzayhUYXNrLCBDb25zdGFudHMuUEhBU0UuQ09OVEVYVCk7IiwiaW1wb3J0IGVsIGZyb20gXCJAZGVmYXVsdC1qcy9kZWZhdWx0anMtZXhwcmVzc2lvbi1sYW5ndWFnZVwiO1xyXG5pbXBvcnQgQ29uc3RhbnRzIGZyb20gXCIuLi9Db25zdGFudHNcIjtcclxuaW1wb3J0IFByb2Nlc3NvciBmcm9tIFwiLi4vUHJvY2Vzc29yXCI7XHJcbmltcG9ydCBTdHJpbmdVdGlscyBmcm9tIFwiLi4vdXRpbHMvU3RyaW5nVXRpbHNcIjtcclxuXHJcbmNvbnN0IFJlc29sdmVyID0gZWwuRXhwcmVzc2lvblJlc29sdmVyO1xyXG5cclxuY29uc3Qgbm9ybWFsaXplID0gZnVuY3Rpb24oYU5vZGUpIHtcclxuICAgIGlmIChhTm9kZSkge1xyXG5cdCAgICBpZiAoYU5vZGUubm9kZVR5cGUgPT0gMykge1xyXG5cdFx0ICAgIGxldCB0ZXh0ID0gYU5vZGUudGV4dENvbnRlbnQ7XHJcblx0XHQgICAgd2hpbGUgKGFOb2RlLm5leHRTaWJsaW5nICYmIGFOb2RlLm5leHRTaWJsaW5nLm5vZGVUeXBlID09IDMpIHtcclxuXHRcdFx0ICAgIHRleHQgKz0gYU5vZGUubmV4dFNpYmxpbmcudGV4dENvbnRlbnQ7XHJcblx0XHRcdCAgICBhTm9kZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGFOb2RlLm5leHRTaWJsaW5nKTtcclxuXHRcdCAgICB9XHJcblx0XHQgICAgYU5vZGUudGV4dENvbnRlbnQgPSB0ZXh0O1xyXG5cdCAgICB9IGVsc2VcclxuXHRcdCAgICBub3JtYWxpemUoYU5vZGUuZmlyc3RDaGlsZCk7XHJcblx0ICAgIFxyXG5cdCAgICBub3JtYWxpemUoYU5vZGUubmV4dFNpYmxpbmcpO1xyXG4gICAgfVxyXG59O1xyXG5cclxuY29uc3QgQ09OVEVOVFRZUEUgPSB7XHJcbiAgICBcImh0bWxcIiA6IGZ1bmN0aW9uKGFOb2RlLCBhVGV4dCwgYUNvbnRleHQpIHtcclxuICAgICAgICBhTm9kZS5yZXBsYWNlKGNyZWF0ZShhVGV4dCkpO1xyXG4gICAgfSxcclxuICAgIFwidGV4dFwiIDogZnVuY3Rpb24oYU5vZGUsIGFUZXh0LCBhQ29udGV4dCkge1xyXG4gICAgICAgIGxldCB0ZXh0ID0gYVRleHQ7XHJcbiAgICAgICAgbGV0IGFkZEFzSHRtbCA9IGZhbHNlO1xyXG5cclxuICAgICAgICBsZXQgcHJldmVudEZvcm1hdCA9IGFDb250ZXh0LmVsZW1lbnQuYXR0cihcImpzdGwtdGV4dC1wcmV2ZW50LWZvcm1hdFwiKTtcclxuICAgICAgICBpZih0eXBlb2YgcHJldmVudEZvcm1hdCA9PT0gXCJzdHJpbmdcIiAmJiBwcmV2ZW50Rm9ybWF0LnRyaW0oKS5sZW5ndGggPT0gMClcclxuICAgICAgICBcdHByZXZlbnRGb3JtYXQgPSBcInRydWVcIjtcclxuICAgICAgICBcclxuICAgICAgICBQcm9taXNlLmFsbChbXHJcbiAgICAgICAgXHRSZXNvbHZlci5yZXNvbHZlKHByZXZlbnRGb3JtYXQsIGFDb250ZXh0LmRhdGEsIGZhbHNlKSxcclxuICAgICAgICBcdFJlc29sdmVyLnJlc29sdmUoYUNvbnRleHQuZWxlbWVudC5hdHRyKFwianN0bC10ZXh0LXRyaW0tbGVuZ3RoXCIpIHx8IFwiMFwiLCBhQ29udGV4dC5kYXRhLCAwKSxcclxuICAgICAgICBdKS50aGVuKGZ1bmN0aW9uKGFSZXN1bHRzKXtcclxuICAgICAgICBcdGNvbnNvbGUubG9nKFwiYVJlc3VsdHNcIiwgYVJlc3VsdHMpO1xyXG4gICAgICAgIFx0Y29uc3QgcHJldmVudEZvcm1hdCA9ICEhYVJlc3VsdHNbMF07XHJcbiAgICAgICAgXHRjb25zdCBtYXhMZW5ndGggPSBhUmVzdWx0c1sxXTtcclxuICAgICAgICBcdFxyXG4gICAgICAgIFx0aWYobWF4TGVuZ3RoID4gMClcclxuICAgICAgICBcdFx0dGV4dCA9IFN0cmluZ1V0aWxzLnRyaW1UZXh0TGVuZ3RoKHRleHQsIG1heExlbmd0aCk7ICAgICAgICBcdFxyXG4gICAgICAgIFx0aWYocHJldmVudEZvcm1hdClcclxuICAgICAgICBcdFx0dGV4dCA9IFN0cmluZ1V0aWxzLmZvcm1hdFRvSHRtbCh0ZXh0KVxyXG4gICAgICAgIFx0XHRcclxuICAgICAgICBcdFx0XHJcbiAgICBcdFx0IGlmIChwcmV2ZW50Rm9ybWF0KVxyXG4gICAgXHRcdFx0IGFOb2RlLnJlcGxhY2UoY3JlYXRlKHRleHQpKTtcclxuICAgIFx0XHQgZWxzZVxyXG4gICAgXHRcdFx0IGFOb2RlLnRleHRDb250ZW50ID0gdGV4dDtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufTtcclxuXHJcbmNvbnN0IFRhc2sgPSB7XHJcblx0aWQgOiBcInRleHRcIixcclxuXHRhY2NlcHQgOiBmdW5jdGlvbihhQ29udGV4dCl7XHJcblx0XHRyZXR1cm4gIWFDb250ZXh0LmVsZW1lbnQuaXMoXCJbanN0bC10ZXh0LWlnbm9yZV1cIik7XHJcblx0fSxcclxuXHRleGVjdXRlIDogZnVuY3Rpb24oYUNvbnRleHQpe1xyXG5cdFx0Y29uc3QgdHlwZSA9IGFDb250ZXh0LmVsZW1lbnQuYXR0cihcImpzdGwtdGV4dC1jb250ZW50LXR5cGVcIikgfHwgXCJ0ZXh0XCI7XHJcblx0XHRpZih0eXBlb2YgQ09OVEVOVFRZUEVbdHlwZV0gPT09IFwidW5kZWZpbmVkXCIpXHJcblx0XHRcdHJldHVybjtcclxuXHRcdFxyXG5cdFx0Y29uc3QgcHJvbWlzZXMgPSBbXTtcdFx0XHJcblx0XHRub3JtYWxpemUoYUNvbnRleHQuZWxlbWVudCk7XHJcblx0XHRBcnJheS5mcm9tKGFDb250ZXh0LmVsZW1lbnQuY2hpbGROb2RlcyB8fCBbXSlcclxuXHRcdC5maWx0ZXIoZnVuY3Rpb24oYU5vZGUpIHtcclxuXHRcdFx0cmV0dXJuIChhTm9kZS5ub2RlVHlwZSA9PT0gMyB8fCBhTm9kZS5ub2RlVHlwZSA9PT0gNCkgJiYgdHlwZW9mIGFOb2RlLnRleHRDb250ZW50ICE9PSBcInVuZGVmaW5lZFwiICYmIGFOb2RlLnRleHRDb250ZW50LnRyaW0oKS5sZW5ndGggPiAwO1xyXG5cdFx0fSkuZm9yRWFjaChmdW5jdGlvbihhTm9kZSkge1xyXG5cdFx0ICAgIGxldCB0ZXh0ID0gYU5vZGUudGV4dENvbnRlbnQ7XHJcblx0XHQgICAgaWYgKHRleHQpIHtcclxuXHRcdCAgICBcdGNvbnNvbGUubG9nKFwicmVzb2x2ZSB0ZXh0OlwiLCB0ZXh0LCBcImNvbnRleHQ6XCIsIGFDb250ZXh0LmRhdGEpO1xyXG5cdFx0ICAgIFx0cHJvbWlzZXMucHVzaChcclxuXHRcdFx0XHQgICAgUmVzb2x2ZXIucmVzb2x2ZVRleHQodGV4dCwgYUNvbnRleHQuZGF0YSlcclxuXHRcdFx0XHQgICAgLnRoZW4oZnVuY3Rpb24oYVRleHQpe1xyXG5cdFx0XHRcdFx0XHRyZXR1cm4gQ09OVEVOVFRZUEVbdHlwZV0oYU5vZGUsIGFUZXh0LCBhQ29udGV4dCk7XHJcblx0XHRcdFx0ICAgIH0pXHJcblx0XHRcdCAgICApO1xyXG5cdFx0XHQgICAgXHJcblx0XHQgICAgfVxyXG5cdCAgICB9KTtcdFx0XHJcblx0XHRcclxuXHRcdHJldHVybiBQcm9taXNlLmFsbChwcm9taXNlcylcclxuXHRcdC50aGVuKGZ1bmN0aW9uKCl7XHJcblx0XHRcdHJldHVybiBhQ29udGV4dDtcclxuXHRcdH0pO1xyXG5cdH1cclxufTtcclxuXHJcblByb2Nlc3Nvci5hZGRUYXNrKFRhc2ssIENvbnN0YW50cy5QSEFTRS5DT05URU5UKTsiLCJpbXBvcnQgXCIuL0FzeW5jXCI7XHJcbmltcG9ydCBcIi4vQWRkQXR0cmlidXRlXCI7XHJcbmltcG9ydCBcIi4vQXR0cmlidXRlXCI7XHJcbmltcG9ydCBcIi4vQ2hvb3NlXCI7XHJcbmltcG9ydCBcIi4vRGF0YVwiO1xyXG5pbXBvcnQgXCIuL0ZvcmVhY2hcIjtcclxuaW1wb3J0IFwiLi9JZlwiO1xyXG5pbXBvcnQgXCIuL0luY2x1ZGVcIjtcclxuaW1wb3J0IFwiLi9UZXh0XCI7XHJcbmltcG9ydCBcIi4vQ2hpbGRyZW5cIjsiLCJpbXBvcnQgT2JqZWN0VXRpbHMgZnJvbSBcIkBkZWZhdWx0LWpzL2RlZmF1bHRqcy1jb21tb24tdXRpbHMvc3JjL09iamVjdFV0aWxzXCI7XHJcblxyXG5jb25zdCBERUZBVUxUUyA9IHtcclxuXHRmb3JtYXRUb0h0bWwgOiB7XHJcblx0XHRcInRhYnNpemVcIiA6IDQsXHJcblx0XHRcInRhYmNoYXJcIiA6IFwiJm5ic3A7XCIsXHJcblx0XHRcIm5ld2xpbmVUYWdcIiA6IFwiPGJyLz5cIlxyXG5cdH0sXHJcblxyXG5cdHRyaW1UZXh0TGVuZ3RoIDoge1xyXG5cdFx0XCJwb3N0Zml4XCIgOiBcIi4uLlwiXHJcblx0fVxyXG59O1xyXG5jb25zdCBTdHJpbmdVdGlscyA9IHtcclxuXHRERUZBVUxUUyA6IERFRkFVTFRTLFxyXG5cdHRyaW1UZXh0TGVuZ3RoIDogZnVuY3Rpb24oYVRleHQsIG1heExlbmd0aCwgdGhlU2V0dGluZ3MpIHtcclxuXHRcdGlmIChhVGV4dCA9PSB1bmRlZmluZWQgfHwgdHlwZW9mIGFUZXh0ICE9PSBcInN0cmluZ1wiIHx8IGFUZXh0ID09IFwiXCIpXHJcblx0XHRcdHJldHVybiBhVGV4dDtcclxuXHJcblx0XHRsZXQgc2V0dGluZ3MgPSBPYmplY3RVdGlscy5tZXJnZSh7fSwgdGhlU2V0dGluZ3MgfHwge30sIERFRkFVTFRTLnRyaW1UZXh0TGVuZ3RoKTtcclxuXHJcblx0XHRpZiAoYVRleHQubGVuZ3RoID4gbWF4TGVuZ3RoKSB7XHJcblx0XHRcdGxldCBlbmQgPSBtYXhMZW5ndGggLSBzZXR0aW5ncy5wb3N0Zml4Lmxlbmd0aDtcclxuXHRcdFx0aWYgKChhVGV4dC5sZW5ndGggLSBlbmQpID4gMClcclxuXHRcdFx0XHRyZXR1cm4gYVRleHQuc3Vic3RyaW5nKDAsIGVuZCkudHJpbSgpICsgc2V0dGluZ3MucG9zdGZpeDtcclxuXHRcdH1cclxuXHRcdHJldHVybiBhVGV4dDtcclxuXHR9LFxyXG5cdGZvcm1hdFRvSHRtbCA6IGZ1bmN0aW9uKGFUZXh0LCB0aGVTZXR0aW5ncykge1xyXG5cdFx0aWYgKGFUZXh0ID09IHVuZGVmaW5lZCB8fCB0eXBlb2YgYVRleHQgIT09IFwic3RyaW5nXCIgfHwgYVRleHQgPT0gXCJcIilcclxuXHRcdFx0cmV0dXJuIGFUZXh0O1xyXG5cdFx0bGV0IHNldHRpbmdzID0gT2JqZWN0VXRpbHMubWVyZ2Uoe30sIHRoZVNldHRpbmdzIHx8IHt9ICxERUZBVUxUUy5mb3JtYXRUb0h0bWwpO1xyXG5cdFx0bGV0IGxpbmVzID0gYVRleHQucmVwbGFjZSgvXFxuXFxyL2csIFwiXFxuXCIpLnJlcGxhY2UoL1xcci9nLCBcIlxcblwiKS5zcGxpdChcIlxcblwiKTtcclxuXHRcdGxldCB0ZXh0ID0gXCJcIjtcclxuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgbGluZXMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0aWYgKGkgIT0gMClcclxuXHRcdFx0XHR0ZXh0ID0gdGV4dCArIHNldHRpbmdzLm5ld2xpbmVUYWc7XHJcblx0XHRcdHRleHQgPSB0ZXh0XHQrIFN0cmluZ1V0aWxzLnByZXZlbnRUYWJzKGxpbmVzW2ldLCBzZXR0aW5ncy50YWJzaXplLCBzZXR0aW5ncy50YWJjaGFyKTtcclxuXHRcdH1cclxuXHRcdHJldHVybiB0ZXh0O1xyXG5cdH0sXHJcblx0Z2V0VGFiU3RvcE1hcCA6IGZ1bmN0aW9uKHRhYlNpemUsIHRhYlN0cmluZykge1xyXG5cdFx0bGV0IHRhYnN0b3BNYXAgPSBbXTtcclxuXHRcdGZvciAobGV0IGkgPSAwOyBpIDw9IHRhYlNpemU7IGkrKykge1xyXG5cdFx0XHRpZiAoaSA9PSAwKVxyXG5cdFx0XHRcdHRhYnN0b3BNYXBbMF0gPSBcIlwiO1xyXG5cdFx0XHRlbHNlXHJcblx0XHRcdFx0dGFic3RvcE1hcFtpXSA9IHRhYnN0b3BNYXBbaSAtIDFdICsgdGFiU3RyaW5nO1xyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiB0YWJzdG9wTWFwO1xyXG5cdH0sXHJcblx0cHJldmVudFRhYnMgOiBmdW5jdGlvbihhVGV4dCwgdGhlVGFiU3RvcHMsIHRoZVRhYlN0b3BDaGFyKSB7XHJcblx0XHRsZXQgdGFic3RvcE1hcCA9IFN0cmluZ1V0aWxzLmdldFRhYlN0b3BNYXAodGhlVGFiU3RvcHMsIHRoZVRhYlN0b3BDaGFyKTtcclxuXHRcdGxldCB0YWJTdG9wcyA9IHRoZVRhYlN0b3BzO1xyXG5cdFx0bGV0IHRleHQgPSBcIlwiO1xyXG5cdFx0bGV0IHRhYnMgPSBhVGV4dC5zcGxpdChcIlxcdFwiKTtcclxuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgdGFicy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHRpZiAodGFic1tpXS5sZW5ndGggIT0gMCAmJiBpICE9IDApIHtcclxuXHRcdFx0XHRsZXQgc2l6ZSA9IHRleHQubGVuZ3RoO1xyXG5cdFx0XHRcdGxldCB0YWJTaXplID0gc2l6ZSAlIHRhYlN0b3BzO1xyXG5cdFx0XHRcdHRleHQgPSB0ZXh0ICsgdGFic3RvcE1hcFt0aGVUYWJTdG9wcyAtIHRhYlNpemVdICsgdGFic1tpXTtcclxuXHRcdFx0fSBlbHNlIGlmICh0YWJzW2ldLmxlbmd0aCA9PSAwICYmIGkgIT0gMClcclxuXHRcdFx0XHR0ZXh0ID0gdGV4dCArIHRhYnN0b3BNYXBbdGhlVGFiU3RvcHNdO1xyXG5cdFx0XHRlbHNlXHJcblx0XHRcdFx0dGV4dCA9IHRleHQgKyB0YWJzW2ldO1xyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiB0ZXh0O1xyXG5cdH0sXHJcblx0Zm9ybWF0IDogZnVuY3Rpb24oYVRleHQsIGFyZ3MpIHtcclxuXHRcdGxldCBvYmplY3RzID0gYXJndW1lbnRzO1xyXG5cdFx0cmV0dXJuIGFUZXh0LnJlcGxhY2UoL3stP1swLTldK30vZywgZnVuY3Rpb24oaXRlbSkge1xyXG5cdFx0XHRsZXQgaW5kZXggPSBwYXJzZUludChpdGVtLnN1YnN0cmluZygxLCBpdGVtLmxlbmd0aCAtIDEpKSArIDE7XHJcblx0XHRcdGxldCByZXBsYWNlO1xyXG5cdFx0XHRpZiAoaW5kZXggPiAwICYmIGluZGV4IDwgb2JqZWN0cy5sZW5ndGgpIHtcclxuXHRcdFx0XHRyZXBsYWNlID0gb2JqZWN0c1tpbmRleF07XHJcblx0XHRcdFx0aWYgKHR5cGVvZiByZXBsYWNlICE9PSBcInN0cmluZ1wiKVxyXG5cdFx0XHRcdFx0cmVwbGFjZSA9IEpTT04uc3RyaW5naWZ5KHJlcGxhY2UpO1xyXG5cdFx0XHR9IGVsc2UgaWYgKGluZGV4ID09PSAtMSkge1xyXG5cdFx0XHRcdHJlcGxhY2UgPSBcIntcIjtcclxuXHRcdFx0fSBlbHNlIGlmIChpbmRleCA9PT0gLTIpIHtcclxuXHRcdFx0XHRyZXBsYWNlID0gXCJ9XCI7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0cmVwbGFjZSA9IFwiXCI7XHJcblx0XHRcdH1cclxuXHRcdFx0cmV0dXJuIHJlcGxhY2U7XHJcblx0XHR9KTtcclxuXHR9XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IFN0cmluZ1V0aWxzOyJdLCJzb3VyY2VSb290IjoiIn0=