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
        aContext.element.replaceChild(aNode, create(aText));
    },
    "json" : function(aNode, aText, aContext) {
        if (typeof aText === "string")
        	aNode.textContent = aText;
        else
        	aNode.textContent = JSON.stringify(aText);
    },
    "text" : function(aNode, aText, aContext) {
        let text = aText;
        let addAsHtml = false;

        Promise.all([
        	Resolver.resolve(aContext.element.attr("jstl-text-prevent-format"), aContext.data, false),
        	Resolver.resolve(aContext.element.attr("jstl-text-trim-length"), aContext.data, 0),
        ]).then(function(aResults){
        	const preventFormat = !!aResults[0];
        	const maxLength = aResults[1];
        	
        	if(maxLength > 0)
        		text = _utils_StringUtils__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].trimTextLength(text, maxLength);        	
        	if(preventFormat)
        		text = _utils_StringUtils__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].formatToHtml(text)
        		
        		
    		 if (preventFormat)
    			 aContext.element.replaceChild(aNode, create(text));
    		 else
    			 aNode.textContent = text;
        });
    }
};

CONTENTTYPE["text/html"] = CONTENTTYPE["html"];
CONTENTTYPE["application/json"] = CONTENTTYPE["json"];
CONTENTTYPE["text/plain"] = CONTENTTYPE["text"];



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

		let settings = _default_js_defaultjs_common_utils_src_ObjectUtils__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].megre({}, theSettings, DEFAULTS.trimTextLength);

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
		let settings = _default_js_defaultjs_common_utils_src_ObjectUtils__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].merge({}, theSettings ,DEFAULTS.formatToHtml);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYnJvd3Nlci1pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGRlZmF1bHQtanMvZGVmYXVsdGpzLWNvbW1vbi11dGlscy9zcmMvT2JqZWN0VXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BkZWZhdWx0LWpzL2RlZmF1bHRqcy1leHByZXNzaW9uLWxhbmd1YWdlL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZGVmYXVsdC1qcy9kZWZhdWx0anMtZXhwcmVzc2lvbi1sYW5ndWFnZS9zcmMvRXhwcmVzc2lvblJlc29sdmVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZGVmYXVsdC1qcy9kZWZhdWx0anMtZXhwcmVzc2lvbi1sYW5ndWFnZS9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BkZWZhdWx0LWpzL2RlZmF1bHRqcy1leHRkb20vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BkZWZhdWx0LWpzL2RlZmF1bHRqcy1leHRkb20vc3JjL0dsb2JhbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGRlZmF1bHQtanMvZGVmYXVsdGpzLWV4dGRvbS9zcmMvZG9tL0RvY3VtZW50LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZGVmYXVsdC1qcy9kZWZhdWx0anMtZXh0ZG9tL3NyYy9kb20vRG9jdW1lbnRGcmFnbWVudC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGRlZmF1bHQtanMvZGVmYXVsdGpzLWV4dGRvbS9zcmMvZG9tL0VsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BkZWZhdWx0LWpzL2RlZmF1bHRqcy1leHRkb20vc3JjL2RvbS9FdmVudFRhcmdldC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGRlZmF1bHQtanMvZGVmYXVsdGpzLWV4dGRvbS9zcmMvZG9tL0hUTUxFbGVtZW50LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZGVmYXVsdC1qcy9kZWZhdWx0anMtZXh0ZG9tL3NyYy9kb20vSFRNTElucHV0RWxlbWVudC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGRlZmF1bHQtanMvZGVmYXVsdGpzLWV4dGRvbS9zcmMvZG9tL0hUTUxTZWxlY3RFbGVtZW50LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZGVmYXVsdC1qcy9kZWZhdWx0anMtZXh0ZG9tL3NyYy9kb20vSFRNTFRleHRBcmVhRWxlbWVudC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGRlZmF1bHQtanMvZGVmYXVsdGpzLWV4dGRvbS9zcmMvZG9tL05vZGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BkZWZhdWx0LWpzL2RlZmF1bHRqcy1leHRkb20vc3JjL2RvbS9Ob2RlTGlzdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGRlZmF1bHQtanMvZGVmYXVsdGpzLWV4dGRvbS9zcmMvZG9tL2V4dGVudGlvbnMvQXR0cmlidXRlU3VwcG9ydC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGRlZmF1bHQtanMvZGVmYXVsdGpzLWV4dGRvbS9zcmMvZG9tL2V4dGVudGlvbnMvRGF0YVN1cHBvcnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BkZWZhdWx0LWpzL2RlZmF1bHRqcy1leHRkb20vc3JjL2RvbS9leHRlbnRpb25zL0V2ZW50U3VwcG9ydC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGRlZmF1bHQtanMvZGVmYXVsdGpzLWV4dGRvbS9zcmMvZG9tL2V4dGVudGlvbnMvSHRtbENsYXNzU3VwcG9ydC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGRlZmF1bHQtanMvZGVmYXVsdGpzLWV4dGRvbS9zcmMvZG9tL2V4dGVudGlvbnMvTGlzdFN1cHBvcnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BkZWZhdWx0LWpzL2RlZmF1bHRqcy1leHRkb20vc3JjL2RvbS9leHRlbnRpb25zL01hbmlwdWxhdGlvblN1cHBvcnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BkZWZhdWx0LWpzL2RlZmF1bHRqcy1leHRkb20vc3JjL2RvbS9leHRlbnRpb25zL1F1ZXJ5U3VwcG9ydC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGRlZmF1bHQtanMvZGVmYXVsdGpzLWV4dGRvbS9zcmMvZG9tL2V4dGVudGlvbnMvUmVhZHlFdmVudFN1cHBvcnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BkZWZhdWx0LWpzL2RlZmF1bHRqcy1leHRkb20vc3JjL2RvbS9leHRlbnRpb25zL1Nob3dIaWRlU3VwcG9ydC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGRlZmF1bHQtanMvZGVmYXVsdGpzLWV4dGRvbS9zcmMvZG9tL2V4dGVudGlvbnMvVmFsdWVTdXBwb3J0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZGVmYXVsdC1qcy9kZWZhdWx0anMtZXh0ZG9tL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGRlZmF1bHQtanMvZGVmYXVsdGpzLWV4dGRvbS9zcmMvdXRpbHMvRGVsZWdhdGVyQnVpbGRlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGRlZmF1bHQtanMvZGVmYXVsdGpzLWV4dGRvbS9zcmMvdXRpbHMvRXh0ZW5kUHJvdG90eXBlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZGVmYXVsdC1qcy9kZWZhdWx0anMtZXh0ZG9tL3NyYy91dGlscy9FeHRlbmRlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGRlZmF1bHQtanMvZGVmYXVsdGpzLWV4dGRvbS9zcmMvdXRpbHMvVXRpbHMuanMiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL2dsb2JhbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQ29uc3RhbnRzLmpzIiwid2VicGFjazovLy8uL3NyYy9Qcm9jZXNzb3IuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1Rhc2tDaGFpbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Rhc2tzL0FkZEF0dHJpYnV0ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdGFza3MvQXN5bmMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Rhc2tzL0F0dHJpYnV0ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdGFza3MvQ2hpbGRyZW4uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Rhc2tzL0Nob29zZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdGFza3MvRGF0YS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdGFza3MvRm9yZWFjaC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdGFza3MvSWYuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Rhc2tzL0luY2x1ZGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Rhc2tzL1RleHQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Rhc2tzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy91dGlscy9TdHJpbmdVdGlscy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFD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QUFTLGVBQWUsMERBQVMsZ0I7Ozs7Ozs7Ozs7OztBQ3BHakM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBaUI7QUFDTztBQUNIO0FBQ0g7QUFDRjtBQUNHO0FBQ0w7QUFDSztBQUNIOzs7Ozs7Ozs7Ozs7OztBQ1JoQjtBQUE2RTs7QUFFN0U7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUJBQWlCLGtHQUFXLFNBQVM7O0FBRXJDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsa0dBQVcsU0FBUztBQUNyQztBQUNBO0FBQ0EsaUJBQWlCLGtCQUFrQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQSxpQkFBaUIsY0FBYztBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsaUJBQWlCO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQSx5QkFBeUIsU0FBUztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0osZ0JBQWdCO0FBQ2hCLElBQUk7QUFDSixnQkFBZ0I7QUFDaEIsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ2Usb0VBQVcsRSIsImZpbGUiOiJkZWZhdWx0anMtdGVtcGxhdGUtbGFuZ3VhZ2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2Jyb3dzZXItaW5kZXguanNcIik7XG4iLCJpbXBvcnQge0NvbnN0YW50cywgUHJvY2Vzc29yfSBmcm9tIFwiLi9zcmNcIlxyXG5cclxuY29uc3QgZ2xvYmFsID0gd2luZG93IHx8IGdsb2JhbCB8fCBzZWxmIHx8IHRoaXMgfHwge307XHJcbmdsb2JhbC5kZWZhdWx0anMgPSBnbG9iYWwuZGVmYXVsdGpzIHx8IHt9O1xyXG5nbG9iYWwuZGVmYXVsdGpzLnRsID0gZ2xvYmFsLmRlZmF1bHRqcy50bCB8fCB7XHJcblx0VkVSU0lPTiA6IFwiJHt2ZXJzaW9ufVwiLFxyXG5cdENvbnN0YW50cyA6IENvbnN0YW50cyxcclxuXHRQcm9jZXNzb3IgOiBQcm9jZXNzb3JcclxufTsiLCJcclxuLyoqXHJcbiAqIGFwcGVuZCBhIHByb3BlcnkgdmFsdWUgdG8gYW4gb2JqZWN0LiBJZiBwcm9wZXJ5IGV4aXN0cyBpdHMgd291bGQgYmUgY29udmVydGVkIHRvIGFuIGFycmF5XHJcbiAqIFxyXG4gKiAgQHBhcmFtIGFLZXk6c3RyaW5nIG5hbWUgb2YgcHJvcGVydHlcclxuICogIEBwYXJhbSBhRGF0YTphbnkgcHJvcGVydHkgdmFsdWVcclxuICogIEBwYXJhbSBhT2JqZWN0Om9iamVjdCB0aGUgb2JqZWN0IHRvIGFwcGVuZCB0aGUgcHJvcGVydHlcclxuICogIFxyXG4gKiAgQHJldHVybiByZXR1cm5zIHRoZSBjaGFuZ2VkIG9iamVjdFxyXG4gKi9cclxuY29uc3QgYXBwZW5kID0gZnVuY3Rpb24oYUtleSwgYURhdGEsIGFPYmplY3Qpe1xyXG5cdGlmKHR5cGVvZiBhRGF0YSAhPT0gXCJ1bmRlZmluZWRcIil7XHRcdFxyXG5cdFx0bGV0IGtleSA9IGFLZXkudG9Mb3dlckNhc2UoKS50cmltKCk7XHRcclxuXHRcdGlmKHR5cGVvZiBhT2JqZWN0W2tleV0gPT09IFwidW5kZWZpbmVkXCIpXHJcblx0XHRcdGFPYmplY3Rba2V5XSA9IGFEYXRhO1xyXG5cdFx0ZWxzZXtcdFx0XHJcblx0XHRcdGxldCBkYXRhID0gYU9iamVjdFtrZXldO1xyXG5cdFx0XHRpZihkYXRhIGluc3RhbmNlb2YgQXJyYXkpXHJcblx0XHRcdFx0ZGF0YS5wdXNoKGFEYXRhKTtcclxuXHRcdFx0ZWxzZVxyXG5cdFx0XHRcdGFPYmplY3Rba2V5XSA9IFthT2JqZWN0W2tleV0sIGFEYXRhXTtcclxuXHRcdH1cclxuXHR9XHRcclxuXHRyZXR1cm4gYU9iamVjdDtcclxufTtcclxuXHJcbi8qKlxyXG4gKiBjaGVja2VkIGlmIGFuIG9iamVjdCBhIHNpbXBsZSBvYmplY3QuIE5vIEFycmF5LCBNYXAgb3Igc29tZXRoaW5nIGVsc2UuXHJcbiAqIFxyXG4gKiBAcGFyYW0gYU9iamVjdDpvYmplY3QgdGhlIG9iamVjdCB0byBiZSB0ZXN0aW5nXHJcbiAqIFxyXG4gKiBAcmV0dXJuIGJvb2xlYW5cclxuICovXHJcbmNvbnN0IGlzUG9qbyA9IGZ1bmN0aW9uKGFPYmplY3Qpe1xyXG5cdHJldHVybiB0eXBlb2YgYU9iamVjdCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBhT2JqZWN0ICE9IG51bGwgJiYgYU9iamVjdC5jb25zdHJ1Y3Rvci5uYW1lID09PSBcIk9iamVjdFwiXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBtZXJnaW5nIG9iamVjdCBpbnRvIGEgdGFyZ2V0IG9iamVjdC4gSXRzIG9ubHkgbWVyZ2Ugc2ltcGxlIG9iamVjdCBhbmQgc3ViIG9iamVjdHMuIEV2ZXJ5IG90aGVyIFxyXG4gKiB2YWx1ZSB3b3VsZCBiZSByZXBsYWNlZCBieSB2YWx1ZSBmcm9tIHRoZSBzb3VyY2Ugb2JqZWN0LlxyXG4gKiBcclxuICogc2FtcGxlOiBtZXJnZSh0YXJnZXQsIHNvdXJjZS0xLCBzb3VyY2UtMiwgLi4uc291cmNlLW4pXHJcbiAqIFxyXG4gKiBAcGFyYW0gYVRhcmdldDpvYmplY3QgdGhlIHRhcmdldCBvYmplY3QgdG8gbWVyZ2luZyBpbnRvXHJcbiAqIEBwYXJhbSBhU291cmNlczpvYmplY3RcclxuICogXHJcbiAqIEByZXR1cm4gb2JqZWN0IHJldHVybnMgdGhlIHRhcmdldCBvYmplY3RcclxuICovXHJcbmNvbnN0IG1lcmdlID0gZnVuY3Rpb24oYVRhcmdldCl7XHRcclxuXHRmb3IobGV0IGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKXtcclxuXHRcdGNvbnN0IHNvdXJjZSA9IGFyZ3VtZW50c1tpXTtcclxuXHRcdE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHNvdXJjZSkuZm9yRWFjaChmdW5jdGlvbihhS2V5KXtcclxuXHRcdFx0aWYoaXNQb2pvKGFUYXJnZXRbYUtleV0pKVxyXG5cdFx0XHRcdG1lcmdlKGFUYXJnZXRbYUtleV0sIHNvdXJjZVthS2V5XSk7XHJcblx0XHRcdGVsc2VcclxuXHRcdFx0XHRhVGFyZ2V0W2FLZXldID0gc291cmNlW2FLZXldO1xyXG5cdFx0fSk7XHJcblx0fVxyXG5cdFxyXG5cdHJldHVybiBhVGFyZ2V0O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcblx0aXNQb2pvIDogaXNQb2pvLFxyXG5cdGFwcGVuZDogYXBwZW5kLFxyXG5cdG1lcmdlIDogbWVyZ2VcclxufTsiLCJpbXBvcnQgcGFjayBmcm9tIFwiLi9zcmNcIjtcblxuZXhwb3J0IGRlZmF1bHQgcGFjazsiLCJjb25zdCBFWFBSRVNTSU9OID0gL1xcJFxceyhbXlxce1xcfV0rKVxcfS87XHJcblxyXG5jb25zdCBleGVjdXRlID0gZnVuY3Rpb24oYVN0YXRlbWVudCwgYUNvbnRleHQsIGFEZWZhdWx0LCBhVGltZW91dCkge1xyXG5cdFx0aWYodHlwZW9mIGFUaW1lb3V0ID09PSBcIm51bWJlclwiICYmIGFUaW1lb3V0ID4gMClcclxuXHRcdFx0cmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUpe1xyXG5cdFx0XHRcdHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcclxuXHRcdFx0XHRcdHJlc29sdmUoZXhlY3V0ZShhU3RhdGVtZW50LCBhQ29udGV4dCwgYURlZmF1bHQpKTtcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fSk7XHJcblx0XHRcclxuXHQgICAgaWYgKHR5cGVvZiBhU3RhdGVtZW50ICE9PSBcInN0cmluZ1wiKVxyXG5cdFx0ICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoYVN0YXRlbWVudCk7XHJcblx0ICAgIFxyXG5cdCAgICBsZXQgc3RhdGVtZW50ID0gYVN0YXRlbWVudC50cmltKCk7XHRcdFx0ICAgIFxyXG5cdCAgICBpZihzdGF0ZW1lbnQubGVuZ3RoID09IDApXHJcblx0ICAgIFx0cmV0dXJuIFByb21pc2UucmVzb2x2ZShhRGVmYXVsdCk7XHJcblx0ICAgIHRyeXtcclxuXHRcdCAgICBjb25zdCBleHByZXNzaW9uID0gbmV3IEZ1bmN0aW9uKFwiYUNvbnRleHRcIiwgXCJ0cnl7XCIgK1xyXG5cdFx0ICAgIFx0XHRcIlx0d2l0aChhQ29udGV4dCB8fCB3aW5kb3cgfHwgZ2xvYmFsIHx8IHNlbGYgfHwgdGhpcyl7XCIgK1xyXG5cdFx0ICAgIFx0XHRcIlx0XHRyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKFwiICsgc3RhdGVtZW50ICsgXCIpO1wiICtcclxuXHRcdCAgICBcdFx0XCJcdH1cIiArXHJcblx0XHQgICAgXHRcdFwifWNhdGNoKGUpe1wiICtcclxuXHRcdCAgICBcdFx0XCJcdHRocm93IGU7XCIgK1xyXG5cdFx0ICAgIFx0XHRcIn1cIik7XHJcblx0XHQgICAgcmV0dXJuIGV4cHJlc3Npb24oYUNvbnRleHQpXHJcblx0XHQgICAgLnRoZW4oZnVuY3Rpb24oYVJlc3VsdCl7XHJcblx0XHQgICAgXHRpZih0eXBlb2YgYVJlc3VsdCA9PT0gXCJ1bmRlZmluZWRcIilcclxuXHRcdCAgICBcdFx0cmV0dXJuIFByb21pc2UucmVzb2x2ZShhRGVmYXVsdCk7XHJcblx0XHQgICAgXHRcclxuXHRcdCAgICBcdHJldHVybiBQcm9taXNlLnJlc29sdmUoYVJlc3VsdCk7XHJcblx0XHQgICAgfSlbXCJjYXRjaFwiXShmdW5jdGlvbihhRXJyb3Ipe1xyXG5cdFx0XHRcdHJldHVybiBQcm9taXNlLnJlamVjdChhRXJyb3IpO1xyXG5cdFx0ICAgIH0pXHJcblx0XHR9Y2F0Y2goZSl7XHJcblx0XHRcdHJldHVybiBQcm9taXNlLnJlamVjdChlKTtcclxuXHRcdH1cclxufTtcclxuXHJcbmNvbnN0IHJlc29sdmUgPSBmdW5jdGlvbihhRXhwcmVzc2lvbiwgYURhdGFDb250ZXh0LCBhRGVmYXVsdCwgYVRpbWVvdXQpIHtcclxuXHRjb25zdCBtYXRjaCA9IEVYUFJFU1NJT04uZXhlYyhhRXhwcmVzc2lvbik7XHJcblx0aWYgKG1hdGNoKVxyXG5cdFx0cmV0dXJuIGV4ZWN1dGUobWF0Y2hbMV0sIGFEYXRhQ29udGV4dCwgYURlZmF1bHQsIGFUaW1lb3V0KTtcclxuXHRcclxuXHRyZXR1cm4gZXhlY3V0ZShhRXhwcmVzc2lvbiwgYURhdGFDb250ZXh0LCBhRGVmYXVsdCwgYVRpbWVvdXQpO1xyXG59O1xyXG5cclxuY29uc3QgcmVzb2x2ZVRleHQgPSBmdW5jdGlvbihhVGV4dCwgYUNvbnRleHQsIGFEZWZhdWx0LCBhVGltZW91dCkge1xyXG5cdGlmKHR5cGVvZiBhVGltZW91dCA9PT0gXCJudW1iZXJcIiAmJiBhVGltZW91dCA+IDApXHJcblx0XHRyZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSl7XHJcblx0XHRcdHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcclxuXHRcdFx0XHRyZXNvbHZlKHJlc29sdmVUZXh0KGFUZXh0LCBhQ29udGV4dCwgYURlZmF1bHQpKTtcclxuXHRcdFx0fSk7XHJcblx0XHR9KTtcclxuXHRcclxuXHRcclxuXHRjb25zdCBtYXRjaCA9IEVYUFJFU1NJT04uZXhlYyhhVGV4dCk7XHJcblx0aWYobWF0Y2ggIT0gbnVsbClcclxuXHRcdHJldHVybiBleGVjdXRlKG1hdGNoWzFdLCBhQ29udGV4dCwgYURlZmF1bHQpXHJcblx0XHQudGhlbihmdW5jdGlvbihhUmVzdWx0KXtcclxuXHRcdFx0cmV0dXJuIHJlc29sdmVUZXh0KGFUZXh0LnNwbGl0KG1hdGNoWzBdKS5qb2luKGFSZXN1bHQpLCBhQ29udGV4dCwgYURlZmF1bHQpO1xyXG5cdFx0fSk7XHJcblx0XHJcblx0cmV0dXJuIFByb21pc2UucmVzb2x2ZShhVGV4dCk7XHJcbn07XHJcblxyXG5jb25zdCBFeHByZXNzaW9uUmVzb2x2ZXIgPSB7XHJcblx0XHRyZXNvbHZlIDogcmVzb2x2ZSxcclxuXHRcdHJlc29sdmVUZXh0IDogcmVzb2x2ZVRleHRcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgRXhwcmVzc2lvblJlc29sdmVyOyIsImltcG9ydCBFeHByZXNzaW9uUmVzb2x2ZXIgZnJvbSBcIi4vRXhwcmVzc2lvblJlc29sdmVyXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcblx0RXhwcmVzc2lvblJlc29sdmVyOkV4cHJlc3Npb25SZXNvbHZlclxyXG59OyIsImltcG9ydCBcIi4vc3JjL2luZGV4XCI7IiwiaW1wb3J0IFV0aWxzIGZyb20gXCIuL3V0aWxzL1V0aWxzXCI7XHJcblxyXG5VdGlscy5nbG9iYWwuZGVmYXVsdGpzID0gVXRpbHMuZ2xvYmFsLmRlZmF1bHRqcyB8fCB7fTtcclxuVXRpbHMuZ2xvYmFsLmRlZmF1bHRqcy5leHRkb20gPSBVdGlscy5nbG9iYWwuZGVmYXVsdGpzLmV4dGRvbSB8fCB7XHJcblx0VkVSU0lPTiA6IFwiJHt2ZXJzaW9ufVwiLFxyXG5cdHV0aWxzIDoge1xyXG5cdFx0VXRpbHM6IFV0aWxzXHJcblx0fVxyXG59O1xyXG5cclxuY29uc3QgcGFyc2VyID0gbmV3IERPTVBhcnNlcigpO1xyXG5cclxuVXRpbHMuZ2xvYmFsLmZpbmQgPSBmdW5jdGlvbigpIHtcclxuXHRyZXR1cm4gZG9jdW1lbnQuZmluZC5hcHBseShkb2N1bWVudCwgYXJndW1lbnRzKTtcclxufTtcclxuXHJcblV0aWxzLmdsb2JhbC5yZWFkeSA9IGZ1bmN0aW9uKCkge1xyXG5cdHJldHVybiBkb2N1bWVudC5yZWFkeS5hcHBseShkb2N1bWVudCwgYXJndW1lbnRzKTtcclxufTtcclxuXHJcblV0aWxzLmdsb2JhbC5jcmVhdGUgPSBmdW5jdGlvbihhQ29udGVudCwgYUNvbnRlbnRUeXBlKSB7XHJcblx0aWYgKHR5cGVvZiBhcmd1bWVudHNbMF0gIT09IFwic3RyaW5nXCIpXHJcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJUaGUgZmlyc3QgYXJndW1lbnQgbXVzdCBiZSBhIHN0cmluZyFcIik7XHJcblxyXG5cdGxldCBwYXJzZWQgPSBwYXJzZXIucGFyc2VGcm9tU3RyaW5nKGFyZ3VtZW50c1swXS50cmltKCksIGFyZ3VtZW50c1sxXSB8fCBcInRleHQvaHRtbFwiKTtcclxuXHRsZXQgbm9kZXMgPSBwYXJzZWQuYm9keS5jaGlsZE5vZGVzO1xyXG5cdGxldCBmcmFnID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xyXG5cdGZyYWcuYXBwZW5kKG5vZGVzKTtcclxuXHRyZXR1cm4gZnJhZy5jaGlsZE5vZGVzO1xyXG59OyIsImltcG9ydCBleHRlbmRQcm90b3R5cGUgZnJvbSBcIi4uL3V0aWxzL0V4dGVuZFByb3RvdHlwZVwiO1xyXG5pbXBvcnQgUXVlcnlTdXBwb3J0IGZyb20gXCIuL2V4dGVudGlvbnMvUXVlcnlTdXBwb3J0XCI7XHJcbmltcG9ydCBSZWFkeUV2ZW50U3VwcG9ydCBmcm9tIFwiLi9leHRlbnRpb25zL1JlYWR5RXZlbnRTdXBwb3J0XCI7XHJcblxyXG5leHRlbmRQcm90b3R5cGUoRG9jdW1lbnQsIFF1ZXJ5U3VwcG9ydCwgUmVhZHlFdmVudFN1cHBvcnQpO1xyXG5cclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgZnVuY3Rpb24oKXtcclxuXHRkb2N1bWVudC50cmlnZ2VyKFwicmVhZHlcIik7XHJcbn0pO1xyXG5cclxuXHJcblxyXG4iLCJpbXBvcnQgZXh0ZW5kUHJvdG90eXBlIGZyb20gXCIuLi91dGlscy9FeHRlbmRQcm90b3R5cGVcIjtcclxuaW1wb3J0IFF1ZXJ5U3VwcG9ydCBmcm9tIFwiLi9leHRlbnRpb25zL1F1ZXJ5U3VwcG9ydFwiO1xyXG5pbXBvcnQgTWFuaXB1bGF0aW9uU3VwcG9ydCBmcm9tIFwiLi9leHRlbnRpb25zL01hbmlwdWxhdGlvblN1cHBvcnRcIjtcclxuXHJcbmV4dGVuZFByb3RvdHlwZShEb2N1bWVudEZyYWdtZW50LCBRdWVyeVN1cHBvcnQsIE1hbmlwdWxhdGlvblN1cHBvcnQpO1xyXG5cclxuXHJcblxyXG5cclxuIiwiaW1wb3J0IGV4dGVuZFByb3RvdHlwZSBmcm9tIFwiLi4vdXRpbHMvRXh0ZW5kUHJvdG90eXBlXCI7XHJcbmltcG9ydCBRdWVyeVN1cHBvcnQgZnJvbSBcIi4vZXh0ZW50aW9ucy9RdWVyeVN1cHBvcnRcIjtcclxuaW1wb3J0IEF0dHJpYnV0ZVN1cHBvcnQgZnJvbSBcIi4vZXh0ZW50aW9ucy9BdHRyaWJ1dGVTdXBwb3J0XCI7XHJcbmltcG9ydCBNYW5pcHVsYXRpb25TdXBwb3J0IGZyb20gXCIuL2V4dGVudGlvbnMvTWFuaXB1bGF0aW9uU3VwcG9ydFwiO1xyXG5cclxuZXh0ZW5kUHJvdG90eXBlKEVsZW1lbnQsUXVlcnlTdXBwb3J0LCBBdHRyaWJ1dGVTdXBwb3J0LCBNYW5pcHVsYXRpb25TdXBwb3J0KTtcclxuLy9cclxuLy9FbGVtZW50LnByb3RvdHlwZS52YWwgPSBmdW5jdGlvbigpIHtcclxuLy9cdGxldCByZXN1bHQgPSBuZXcgTWFwKCk7XHRcdFxyXG4vL1x0bGV0IGlucHV0cyA9IHRoaXMuZmluZChcImlucHV0XCIsIFwic2VsZWN0XCIsIFwidGV4dGFyZWFcIik7XHJcbi8vXHRpZihpbnB1dHMpe1x0XHJcbi8vXHRcdGlucHV0cy5mb3JFYWNoKGZ1bmN0aW9uKG5vZGUpe1xyXG4vL1x0XHRcdGxldCB2YWx1ZSA9IG5vZGUudmFsKCk7XHJcbi8vXHRcdFx0aWYodHlwZW9mIHZhbHVlICE9PSBcInVuZGVmaW5lZFwiICYmIHZhbHVlICE9IG51bGwpXHJcbi8vXHRcdFx0XHRyZXN1bHQuc2V0KChub2RlLm5hbWUgfHwgbm9kZS5pZCB8fCBub2RlLnNlbGVjdG9yKCkpLCBub2RlLnZhbCgpKTtcclxuLy9cdFx0fSk7XHRcclxuLy9cdFx0cmV0dXJuIHJlc3VsdDtcclxuLy9cdH1cclxuLy99OyIsImltcG9ydCBleHRlbmRQcm90b3R5cGUgZnJvbSBcIi4uL3V0aWxzL0V4dGVuZFByb3RvdHlwZVwiO1xuaW1wb3J0IEV2ZW50U3VwcG9ydCBmcm9tIFwiLi9leHRlbnRpb25zL0V2ZW50U3VwcG9ydFwiO1xuXG5leHRlbmRQcm90b3R5cGUoRXZlbnRUYXJnZXQsIEV2ZW50U3VwcG9ydCk7IiwiaW1wb3J0IGV4dGVuZFByb3RvdHlwZSBmcm9tIFwiLi4vdXRpbHMvRXh0ZW5kUHJvdG90eXBlXCI7XHJcbmltcG9ydCBIdG1sQ2xhc3NTdXBwb3J0IGZyb20gXCIuL2V4dGVudGlvbnMvSHRtbENsYXNzU3VwcG9ydFwiO1xyXG5pbXBvcnQgU2hvd0hpZGVTdXBwb3J0IGZyb20gXCIuL2V4dGVudGlvbnMvU2hvd0hpZGVTdXBwb3J0XCI7XHJcblxyXG5cclxuZXh0ZW5kUHJvdG90eXBlKEhUTUxFbGVtZW50LCBIdG1sQ2xhc3NTdXBwb3J0LCBTaG93SGlkZVN1cHBvcnQpOyIsImltcG9ydCBleHRlbmRQcm90b3R5cGUgZnJvbSBcIi4uL3V0aWxzL0V4dGVuZFByb3RvdHlwZVwiO1xyXG5pbXBvcnQgVmFsdWVTdXBwb3J0IGZyb20gXCIuL2V4dGVudGlvbnMvVmFsdWVTdXBwb3J0XCI7XHJcblxyXG5cclxuZXh0ZW5kUHJvdG90eXBlKEhUTUxJbnB1dEVsZW1lbnQsVmFsdWVTdXBwb3J0KTsiLCJpbXBvcnQgZXh0ZW5kUHJvdG90eXBlIGZyb20gXCIuLi91dGlscy9FeHRlbmRQcm90b3R5cGVcIjtcclxuaW1wb3J0IFZhbHVlU3VwcG9ydCBmcm9tIFwiLi9leHRlbnRpb25zL1ZhbHVlU3VwcG9ydFwiO1xyXG5cclxuXHJcbmV4dGVuZFByb3RvdHlwZShIVE1MU2VsZWN0RWxlbWVudCxWYWx1ZVN1cHBvcnQpOyIsImltcG9ydCBleHRlbmRQcm90b3R5cGUgZnJvbSBcIi4uL3V0aWxzL0V4dGVuZFByb3RvdHlwZVwiO1xyXG5pbXBvcnQgRXh0ZW5kZXIgZnJvbSBcIi4uL3V0aWxzL0V4dGVuZGVyXCI7XHJcblxyXG5cclxuZXh0ZW5kUHJvdG90eXBlKEhUTUxUZXh0QXJlYUVsZW1lbnQsRXh0ZW5kZXIoXCJWYWx1ZVN1cHBvcnRcIiwgZnVuY3Rpb24oUHJvdG90eXBlKSB7XHRcclxuXHRQcm90b3R5cGUudmFsID0gZnVuY3Rpb24oKSB7XHJcblx0XHRpZihhcmd1bWVudHMubGVuZ3RoID09IDApXHJcblx0XHRcdHJldHVybiB0aGlzLnZhbHVlO1xyXG5cdFx0ZWxzZVxyXG5cdFx0XHR0aGlzLnZhbHVlID0gYXJndW1lbnRzWzBdXHJcblx0XHRcdFxyXG5cdFx0cmV0dXJuIHRoaXM7XHJcblx0fTtcdFxyXG59KSk7IiwiaW1wb3J0IGV4dGVuZFByb3RvdHlwZSBmcm9tIFwiLi4vdXRpbHMvRXh0ZW5kUHJvdG90eXBlXCI7XHJcbmltcG9ydCBEYXRhU3VwcG9ydCBmcm9tIFwiLi9leHRlbnRpb25zL0RhdGFTdXBwb3J0XCI7XHJcbmltcG9ydCBNYW5pcHVsYXRpb25TdXBwb3J0IGZyb20gXCIuL2V4dGVudGlvbnMvTWFuaXB1bGF0aW9uU3VwcG9ydFwiO1xyXG5cclxuZXh0ZW5kUHJvdG90eXBlKE5vZGUsRGF0YVN1cHBvcnQsTWFuaXB1bGF0aW9uU3VwcG9ydCk7IiwiaW1wb3J0IGV4dGVuZFByb3RvdHlwZSBmcm9tIFwiLi4vdXRpbHMvRXh0ZW5kUHJvdG90eXBlXCI7XHJcbmltcG9ydCBEZWxlZ2F0ZXJCdWlsZGVyIGZyb20gXCIuLi91dGlscy9EZWxlZ2F0ZXJCdWlsZGVyXCI7XHJcbmltcG9ydCBMaXN0U3VwcG9ydCBmcm9tIFwiLi9leHRlbnRpb25zL0xpc3RTdXBwb3J0XCI7XHJcblxyXG5leHRlbmRQcm90b3R5cGUoTm9kZUxpc3QsIExpc3RTdXBwb3J0KTtcclxuXHJcbk5vZGVMaXN0LnByb3RvdHlwZS5hcHBseVRvID0gZnVuY3Rpb24oKXtcclxuXHRsZXQgYXJncyA9IEFycmF5LmZyb20oYXJndW1lbnRzKTtcclxuXHRsZXQgY2FsbGluZyA9IGFyZ3Muc2hpZnQoKTtcclxuXHRsZXQgaXNGdW5jdGlvbiA9IHR5cGVvZiBjYWxsaW5nID09PSBcImZ1bmN0aW9uXCI7XHJcblx0bGV0IHJlc3VsdHMgPSBbXTtcclxuXHRmb3IobGV0IGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKyl7XHJcblx0XHRsZXQgbm9kZSA9IHRoaXNbaV07XHJcblx0XHRsZXRcdHJlc3VsdDtcclxuXHRcdGlmKGlzRnVuY3Rpb24pXHJcblx0XHRcdHJlc3VsdCA9IGNhbGxpbmcuYXBwbHkoW25vZGVdLmNvbmNhdChhcmdzKSk7XHJcblx0XHRlbHNlIGlmKHR5cGVvZiBub2RlW2NhbGxpbmddID09PSBcImZ1bmN0aW9uXCIpXHJcblx0XHRcdHJlc3VsdCA9IG5vZGVbY2FsbGluZ10uYXBwbHkobm9kZSwgYXJncyk7XHJcblx0XHRcclxuXHRcdGlmKHJlc3VsdClcclxuXHRcdFx0cmVzdWx0cy5wdXNoKHJlc3VsdCk7XHJcblx0fVxyXG5cdFxyXG5cdHJldHVybiByZXN1bHRzO1xyXG59O1xyXG5cclxuTm9kZUxpc3QucHJvdG90eXBlLnZhbCA9IGZ1bmN0aW9uKCkge1xyXG5cdGlmKGFyZ3VtZW50cy5sZW5ndGggPT0gMCl7XHJcblx0XHRpZih0aGlzLmxlbmd0aCA+IDApe1xyXG5cdFx0XHRsZXQgcmVzdWx0ID0gbmV3IE1hcCgpO1xyXG5cdFx0XHR0aGlzLmZvckVhY2goZnVuY3Rpb24obm9kZSl7XHJcblx0XHRcdFx0aWYodHlwZW9mIG5vZGUudmFsID09PSBcImZ1bmN0aW9uXCIpe1xyXG5cdFx0XHRcdFx0bGV0IHZhbHVlID0gbm9kZS52YWwoKTtcclxuXHRcdFx0XHRcdGlmKHZhbHVlKVxyXG5cdFx0XHRcdFx0XHRyZXN1bHQuc2V0KChub2RlLm5hbWUgfHwgbm9kZS5pZCB8fCBub2RlLnNlbGVjdG9yKCkpLCBub2RlLnZhbCgpKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pO1x0XHJcblx0XHRcdHJldHVybiByZXN1bHQ7XHJcblx0XHR9XHJcblx0fVxyXG5cdGVsc2VcclxuXHRcdE5vZGVMaXN0LnByb3RvdHlwZS5hcHBseVRvLmFwcGx5KHRoaXMsIFtcInZhbFwiXS5jb25jYXQoQXJyYXkuZnJvbShhcmd1bWVudHMpKSk7XHJcbn07XHJcblxyXG5Ob2RlTGlzdC5mcm9tID0gZnVuY3Rpb24oKXtcclxuXHRsZXQgYXJncyA9IEFycmF5LmZyb20oYXJndW1lbnRzKTtcclxuXHRsZXQgZGF0YSA9IHt9O1xyXG5cdGxldCBjb3VudGVyID0gMDtcclxuXHRcclxuXHR3aGlsZShhcmdzLmxlbmd0aCA+IDApe1xyXG5cdFx0bGV0IGFyZyA9IGFyZ3Muc2hpZnQoKTtcclxuXHRcdGlmKHR5cGVvZiBhcmcgIT09IFwidW5kZWZpbmVkXCIgJiYgYXJnICE9IG51bGwpe1xyXG5cdFx0XHRpZihhcmcgaW5zdGFuY2VvZiBOb2RlKVxyXG5cdFx0XHRcdGRhdGFbY291bnRlcisrXSA9IHt2YWx1ZTogYXJnLCBlbnVtZXJhYmxlOiB0cnVlfTtcclxuXHRcdFx0ZWxzZSBpZihhcmcgaW5zdGFuY2VvZiBOb2RlTGlzdCB8fCBBcnJheS5pc0FycmF5KGFyZykpe1xyXG5cdFx0XHRcdGZvcihsZXQgaSA9IDA7IGkgPCBhcmcubGVuZ3RoOyBpKyspe1xyXG5cdFx0XHRcdFx0aWYoYXJnW2ldICYmIGFyZ1tpXSBpbnN0YW5jZW9mIE5vZGUpe1xyXG5cdFx0XHRcdFx0XHRkYXRhW2NvdW50ZXIrK10gPSB7dmFsdWU6IGFyZ1tpXSwgZW51bWVyYWJsZTogdHJ1ZX07XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cdFxyXG5cdGRhdGEubGVuZ3RoID0ge3ZhbHVlOiBjb3VudGVyfTtcclxuXHRyZXR1cm4gIE9iamVjdC5jcmVhdGUoTm9kZUxpc3QucHJvdG90eXBlLCBkYXRhKTtcclxufTtcclxuXHJcblxyXG5EZWxlZ2F0ZXJCdWlsZGVyKGZ1bmN0aW9uKGFGdW5jdGlvbk5hbWUsIHRoZUFyZ3VtZW50cyl7XHJcblx0bGV0IHJlc3VsdHMgPSBbXTtcdFxyXG5cdHRoaXMuZm9yRWFjaChmdW5jdGlvbihub2RlKXtcclxuXHRcdGlmKG5vZGUgJiYgdHlwZW9mIG5vZGVbYUZ1bmN0aW9uTmFtZV0gPT09IFwiZnVuY3Rpb25cIil7XHJcblx0XHRcdGxldCByZXN1bHQgPSBub2RlW2FGdW5jdGlvbk5hbWVdLmFwcGx5KG5vZGUsIHRoZUFyZ3VtZW50cyk7XHJcblx0XHRcdGlmKHJlc3VsdCl7IFxyXG5cdFx0XHRcdGlmKHJlc3VsdCBpbnN0YW5jZW9mIE5vZGVMaXN0KVxyXG5cdFx0XHRcdFx0cmVzdWx0cyA9IHJlc3VsdHMuY29uY2F0KEFycmF5LmZyb20ocmVzdWx0KSk7XHJcblx0XHRcdFx0ZWxzZVxyXG5cdFx0XHRcdFx0cmVzdWx0cy5wdXNoKHJlc3VsdCk7XHJcblx0XHRcdH1cdFx0XHJcblx0XHR9XHJcblx0fSk7XHJcblx0XHJcblx0aWYocmVzdWx0cy5sZW5ndGggPT09IDApXHJcblx0XHRyZXR1cm4gdW5kZWZpbmVkO1xyXG5cdGVsc2UgaWYocmVzdWx0c1swXSBpbnN0YW5jZW9mIE5vZGUgfHwgcmVzdWx0c1swXSBpbnN0YW5jZW9mIE5vZGVMaXN0KVxyXG5cdFx0cmV0dXJuIE5vZGVMaXN0LmZyb20uYXBwbHkobnVsbCwgcmVzdWx0cyk7XHJcblx0ZWxzZVxyXG5cdFx0cmV0dXJuIHJlc3VsdHM7XHJcbn0sTm9kZUxpc3QucHJvdG90eXBlLCBOb2RlLnByb3RvdHlwZSwgSFRNTEVsZW1lbnQucHJvdG90eXBlLCBIVE1MSW5wdXRFbGVtZW50LnByb3RvdHlwZSwgRWxlbWVudC5wcm90b3R5cGUsIEV2ZW50VGFyZ2V0LnByb3RvdHlwZSk7XHJcbiIsImltcG9ydCBFeHRlbmRlciBmcm9tIFwiLi4vLi4vdXRpbHMvRXh0ZW5kZXJcIjtcclxuXHJcbmNvbnN0IHN1cHBvcnQgPSBFeHRlbmRlcihcIkF0dHJpYnV0ZVN1cHBvcnRcIiwgZnVuY3Rpb24oUHJvdG90eXBlKSB7XHJcblx0UHJvdG90eXBlLmF0dHIgPSBmdW5jdGlvbigpIHtcclxuXHRcdGlmIChhcmd1bWVudHMubGVuZ3RoID09IDApXHJcblx0XHRcdHJldHVybiB0aGlzLmhhc0F0dHJpYnV0ZXMoKSA/IChmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRsZXQgcmVzdWx0ID0ge307XHJcblx0XHRcdFx0dGhpcy5nZXRBdHRyaWJ1dGVOYW1lcygpLmZvckVhY2goKGZ1bmN0aW9uKHJlc3VsdCwgbmFtZSkge1xyXG5cdFx0XHRcdFx0cmVzdWx0W25hbWVdID0gdGhpcy5nZXRBdHRyaWJ1dGUobmFtZSk7XHJcblx0XHRcdFx0fSkuYmluZCh0aGlzLCByZXN1bHQpKTtcclxuXHRcdFx0XHRyZXR1cm4gcmVzdWx0O1xyXG5cdFx0XHR9KS5jYWxsKHRoaXMpIDogdW5kZWZpbmVkO1xyXG5cdFx0ZWxzZSBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PSAxKVxyXG5cdFx0XHRyZXR1cm4gdGhpcy5nZXRBdHRyaWJ1dGUoYXJndW1lbnRzWzBdKTtcclxuXHRcdGVsc2UgaWYgKHR5cGVvZiBhcmd1bWVudHNbMV0gPT09IFwidW5kZWZpbmVkXCIgfHwgYXJndW1lbnRzWzFdID09IG51bGwpXHJcblx0XHRcdHRoaXMucmVtb3ZlQXR0cmlidXRlKGFyZ3VtZW50c1swXSk7XHJcblx0XHRlbHNlXHJcblx0XHRcdHRoaXMuc2V0QXR0cmlidXRlKGFyZ3VtZW50c1swXSwgYXJndW1lbnRzWzFdKTtcclxuXHRcdFxyXG5cdFx0cmV0dXJuIHRoaXM7XHJcblx0fTtcclxufSk7XHJcbmV4cG9ydCBkZWZhdWx0IHN1cHBvcnQ7IiwiaW1wb3J0IEV4dGVuZGVyIGZyb20gXCIuLi8uLi91dGlscy9FeHRlbmRlclwiO1xyXG5jb25zdCBzdXBwb3J0ID0gRXh0ZW5kZXIoXCJEYXRhU3VwcG9ydFwiLCBmdW5jdGlvbihQcm90b3R5cGUpIHtcclxuXHRQcm90b3R5cGUuZGF0YSA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0aWYgKHR5cGVvZiB0aGlzLl9fZGF0YV9fID09PSBcInVuZGVmaW5lZFwiKSB7XHJcblx0XHRcdHRoaXMuX19kYXRhX18gPSB7fTtcclxuXHRcdFx0aWYodHlwZW9mIHRoaXMuZGF0YXNldCAhPT0gXCJ1bmRlZmluZWRcIilcclxuXHRcdFx0XHRmb3IgKG5hbWUgaW4gdGhpcy5kYXRhc2V0KVxyXG5cdFx0XHRcdFx0dGhpcy5fX2RhdGFfX1tuYW1lXSA9IHRoaXMuZGF0YXNldFtuYW1lXTtcclxuXHRcdH1cclxuXHJcblx0XHRpZiAoYXJndW1lbnRzLmxlbmd0aCA9PSAwKVxyXG5cdFx0XHRyZXR1cm4gdGhpcy5fX2RhdGFfXztcclxuXHRcdGVsc2UgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT0gMSlcclxuXHRcdFx0cmV0dXJuIHRoaXMuX19kYXRhX19bYXJndW1lbnRzWzBdXSA7XHJcblx0XHRlbHNlIGlmICh0eXBlb2YgYXJndW1lbnRzWzFdID09PSBcInVuZGVmaW5lZFwiIHx8IGFyZ3VtZW50c1sxXSA9PSBudWxsKVxyXG5cdFx0XHRkZWxldGUgdGhpcy5fX2RhdGFfX1thcmd1bWVudHNbMF1dO1xyXG5cdFx0ZWxzZVxyXG5cdFx0XHR0aGlzLl9fZGF0YV9fW2FyZ3VtZW50c1swXV0gPSBhcmd1bWVudHNbMV07XHJcblx0XHRcclxuXHRcdHJldHVybiB0aGlzO1xyXG5cdH07XHJcbn0pO1xyXG5leHBvcnQgZGVmYXVsdCBzdXBwb3J0OyIsImltcG9ydCBFeHRlbmRlciBmcm9tIFwiLi4vLi4vdXRpbHMvRXh0ZW5kZXJcIjtcclxuXHJcbmNvbnN0IHN1cHBvcnQgPSBFeHRlbmRlcihcIkV2ZW50U3VwcG9ydFwiLCBmdW5jdGlvbihQcm90b3R5cGUpIHtcclxuXHRjb25zdCBXcmFwcGVkRXZlbnRIYW5kbGVyID0gZnVuY3Rpb24oYUNvbmZpZywgYUNhbGxiYWNrICxhRXZlbnQpe1xyXG5cdFx0aWYodHlwZW9mIGFDb25maWcuZmlsdGVyICE9PSBcInVuZGVmaW5lZFwiICYmICFhRXZlbnQudGFyZ2V0LmlzKGFDb25maWcuZmlsdGVyKSlcdFx0XHJcblx0XHRcdHJldHVybjtcclxuXHRcdFxyXG5cdFx0bGV0IGFyZ3MgPSBbYUV2ZW50XTtcclxuXHRcdGlmKHR5cGVvZiBhQ29uZmlnLmRhdGEgIT09IFwidW5kZWZpbmVkXCIpXHJcblx0XHRcdGFyZ3MgPSBhcmdzLmNvbmNhdChhQ29uZmlnLmRhdGEpO1xyXG5cdFx0XHJcblx0XHRsZXQgcmVzdWx0ID0gYUNhbGxiYWNrLmFwcGx5KGFDYWxsYmFjaywgYXJncyk7XHJcblx0XHRpZihhQ29uZmlnLnNpbmdsZUNhbGwpXHJcblx0XHRcdHRoaXMucmVtb3ZlRXZlbnRMaXN0ZW5lcihhQ2FsbGJhY2spO1xyXG5cdFx0XHJcblx0XHRyZXR1cm4gcmVzdWx0O1x0XHRcclxuXHR9O1xyXG5cdFxyXG5cdFxyXG5cdGNvbnN0IGFkZEV2ZW50TGlzdGVuZXIgPSBQcm90b3R5cGUuYWRkRXZlbnRMaXN0ZW5lcjtcclxuXHRQcm90b3R5cGUuYWRkRXZlbnRMaXN0ZW5lciA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0aWYgKGFyZ3VtZW50cy5sZW5ndGggPCAyKVxyXG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJUb28gbGVzcyBhcmd1bWVudHMhXCIpO1xyXG5cclxuXHRcdHRoaXMub24oYXJndW1lbnRzWzBdLCBhcmd1bWVudHNbMV0pO1xyXG5cdH07XHRcclxuXHRcclxuXHRQcm90b3R5cGUub24gPSBmdW5jdGlvbigpIHtcclxuXHRcdGlmIChhcmd1bWVudHMubGVuZ3RoIDwgMilcclxuXHRcdFx0dGhyb3cgbmV3IEVycm9yKFwiVG9vIGxlc3MgYXJndW1lbnRzIVwiKTtcclxuXHRcdFxyXG5cdFx0aWYgKHR5cGVvZiB0aGlzLl9fY2FsbGJhY2tNYXAgPT09IFwidW5kZWZpbmVkXCIpXHJcblx0XHRcdHRoaXMuX19jYWxsYmFja01hcCA9IHt9O1xyXG5cclxuXHRcdGxldCBhcmdzID0gQXJyYXkuZnJvbShhcmd1bWVudHMpO1xyXG5cdFx0bGV0IGV2ZW50cyA9IGFyZ3Muc2hpZnQoKS5zcGxpdCgvKFxccyspfChcXHMqLFxccyopLyk7XHJcblx0XHRsZXQgaGFuZGxlckNvbmZpZyA9IHtcclxuXHRcdFx0ZmlsdGVyIDogKHR5cGVvZiBhcmdzWzBdID09PSBcInN0cmluZ1wiID8gYXJncy5zaGlmdCgpLnNwbGl0KC9cXHMqLFxccyovKSA6IHVuZGVmaW5lZCksXHJcblx0XHRcdGRhdGEgOiAodHlwZW9mIGFyZ3NbMF0gIT09IFwiZnVuY3Rpb25cIiA/IGFyZ3Muc2hpZnQoKSA6IHVuZGVmaW5lZClcclxuXHRcdH07XHJcblx0ICAgIGxldCBjYWxsYmFjayA9IGFyZ3Muc2hpZnQoKTtcclxuXHQgICAgXHJcblx0ICAgIGhhbmRsZXJDb25maWcuc2luZ2xlQ2FsbCA9ICh0eXBlb2YgYXJnc1swXSAhPT0gXCJib29sZWFuXCIgPyBhcmdzLnNoaWZ0KCkgOiBmYWxzZSk7XHJcblxyXG5cdFx0bGV0IGV2ZW50TWFwID0ge307XHJcblx0XHRldmVudHMuZm9yRWFjaCgoZnVuY3Rpb24ocmVzdWx0LCBjb25maWcsIGNhbGxiYWNrLCBldmVudCl7XHJcblx0XHRcdGxldCB3cmFwcGVkRXZlbnRIYW5kbGVyID0gV3JhcHBlZEV2ZW50SGFuZGxlci5iaW5kKHRoaXMsIGNvbmZpZywgY2FsbGJhY2spO1xyXG5cdFx0XHRldmVudE1hcFtldmVudF0gPSB3cmFwcGVkRXZlbnRIYW5kbGVyO1x0XHRcdFxyXG5cdFx0XHRhZGRFdmVudExpc3RlbmVyLmNhbGwodGhpcywgZXZlbnQsIHdyYXBwZWRFdmVudEhhbmRsZXIsIHRydWUpO1xyXG5cdFx0XHRcclxuXHRcdH0pLmJpbmQodGhpcywgZXZlbnRNYXAsIGhhbmRsZXJDb25maWcsIGNhbGxiYWNrKSk7XHJcblx0XHRcclxuXHRcdHRoaXMuX19jYWxsYmFja01hcFtjYWxsYmFja10gPSBldmVudE1hcDtcclxuXHRcdFxyXG5cdFx0cmV0dXJuIHRoaXM7XHJcblx0fTtcdFxyXG5cdFxyXG5cdGNvbnN0IHJlbW92ZUV2ZW50TGlzdGVuZXIgPSBQcm90b3R5cGUucmVtb3ZlRXZlbnRMaXN0ZW5lcjtcclxuXHRQcm90b3R5cGUucmVtb3ZlRXZlbnRMaXN0ZW5lciA9IFByb3RvdHlwZS5yZW1vdmVPbiA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0aWYgKGFyZ3VtZW50cy5sZW5ndGggIT0gMSB8fCB0eXBlb2YgdGhpcy5fX2NhbGxiYWNrTWFwID09PSBcInVuZGVmaW5lZFwiKVxyXG5cdFx0XHRyZXR1cm4gcmVtb3ZlRXZlbnRMaXN0ZW5lci5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG5cdFx0XHRcclxuXHRcdGxldCBldmVudHMgPSB1bmRlZmluZWQ7XHJcblx0XHRsZXQgY2FsbGJhY2sgPSB1bmRlZmluZWQ7XHJcblx0XHRpZih0eXBlb2YgYXJndW1lbnRzWzBdID09PSBcInN0cmluZ1wiKVxyXG5cdFx0XHRldmVudHMgPSBhcmd1bWVudHNbMF0uc3BsaXQoLyhcXHMrKXwoXFxzKixcXHMqKS8pO1xyXG5cdFx0ZWxzZSBpZih0eXBlb2YgYXJndW1lbnRzWzBdID09PSBcImZ1bmN0aW9uXCIpXHJcblx0XHRcdGNhbGxiYWNrID0gYXJndW1lbnRzWzBdO1xyXG5cdFx0ZWxzZVxyXG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJXcm9uZyBhcmd1bWVudCEgLT4gY2FsbCBmdW5jdGlvbihbZXZlbnR8aGFuZGxlcl0pXCIpO1xyXG5cdFx0XHJcblx0XHRsZXQgcmVtb3ZhbEhhbmRsZXIgPSBbXTtcclxuXHRcdGlmKHR5cGVvZiBldmVudHMgPT09IFwidW5kZWZpbmVkXCIpe1xyXG5cdFx0XHRsZXQgZXZlbnRNYXAgPSB0aGlzLl9fY2FsbGJhY2tNYXBbY2FsbGJhY2tdO1xyXG5cdFx0XHRpZih0eXBlb2YgZXZlbnRNYXAgIT09IFwidW5kZWZpbmVkXCIpe1xyXG5cdFx0XHQgICAgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoZXZlbnRNYXApLmZvckVhY2goKGZ1bmN0aW9uKHJlc3VsdCwgZXZlbnRNYXAsIGV2ZW50KXtcclxuXHRcdFx0XHRcdGxldCBoYW5kbGVyID0gZXZlbnRNYXBbZXZlbnRdO1xyXG5cdFx0XHRcdFx0aWYodHlwZW9mIGhhbmRsZXIgIT09IFwidW5kZWZpbmVkXCIpXHJcblx0XHRcdFx0XHRcdHJlc3VsdC5wdXNoKGhhbmRsZXIpO1x0XHRcdFx0XHRcclxuXHRcdFx0XHR9KS5iaW5kKHRoaXMsIHJlbW92YWxIYW5kbGVyLCBldmVudE1hcCkpO1xyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdGRlbGV0ZSB0aGlzLl9fY2FsbGJhY2tNYXBbY2FsbGJhY2tdO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRlbHNlIHtcclxuXHRcdFx0ZXZlbnRzLmZvckVhY2goKGZ1bmN0aW9uKHJlc3VsdCwgZXZlbnQpe1xyXG5cdFx0XHQgICAgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXModGhpcy5fX2NhbGxiYWNrTWFwKS5mb3JFYWNoKChmdW5jdGlvbihhRXZlbnQsIENhbGxiYWNrKXtcclxuXHRcdFx0XHRcdGxldCBldmVudE1hcCA9IHRoaXMuX19jYWxsYmFja01hcFtDYWxsYmFja107XHJcblx0XHRcdFx0XHRkZWxldGUgZXZlbnRNYXBbYUV2ZW50XTtcclxuXHRcdFx0XHRcdGlmKE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKGV2ZW50TWFwKS5sZW5ndGggPT0gMClcclxuXHRcdFx0XHRcdFx0ZGVsZXRlIHRoaXMuX19jYWxsYmFja01hcFtDYWxsYmFja107XHJcblx0XHRcdFx0fSkuYmluZCh0aGlzLCBldmVudCkpO1x0XHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0fSkuYmluZCh0aGlzKSk7XHJcblx0XHR9XHJcblx0XHRcclxuXHRcdHJldHVybiB0aGlzO1xyXG5cdH07XHJcblxyXG5cdFxyXG5cdFByb3RvdHlwZS50cmlnZ2VyID0gZnVuY3Rpb24oKXtcclxuXHRcdGxldCBhcmdzID0gQXJyYXkuZnJvbShhcmd1bWVudHMpO1x0XHRcclxuXHRcdGxldCBldmVudCA9IGFyZ3Muc2hpZnQoKTtcdFx0XHJcblx0XHRsZXQgZGF0YSA9IGFyZ3MubGVuZ3RoID4gMSA/IGFyZ3Muc2hpZnQoKSA6IHVuZGVmaW5lZDtcclxuXHRcdGxldCBkZWxlZ2F0ZWRFdmVudCA9IGRhdGEgaW5zdGFuY2VvZiBFdmVudCA/IGRhdGEgOiB1bmRlZmluZWQ7XHJcblx0XHRcclxuXHRcdFxyXG5cdFx0aWYodHlwZW9mIHRoaXNbXCJvblwiICsgZXZlbnRdID09PSBcImZ1bmN0aW9uXCIpe1xyXG5cdFx0XHRldmVudCA9IGRvY3VtZW50LmNyZWF0ZUV2ZW50KFwiRXZlbnRcIik7XHJcblx0XHRcdGV2ZW50LmluaXRFdmVudChldmVudCwgdHJ1ZSwgdHJ1ZSk7XHJcblx0XHR9XHJcblx0XHRlbHNlXHJcblx0XHRcdGV2ZW50ID0gbmV3IEN1c3RvbUV2ZW50KGV2ZW50LCAgeyBidWJibGVzOiB0cnVlLCBjYW5jZWxhYmxlOiB0cnVlLCBkZXRhaWw6IGRhdGEgfSk7XHJcblx0XHRcclxuXHRcdGV2ZW50LmRlbGVnYXRlZEV2ZW50ID0gZGVsZWdhdGVkRXZlbnQ7XHRcdFxyXG5cdFx0dGhpcy5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcclxuXHRcdHJldHVybiB0aGlzO1xyXG5cdH07XHJcbn0pO1xyXG5leHBvcnQgZGVmYXVsdCBzdXBwb3J0O1xyXG4iLCJpbXBvcnQgRXh0ZW5kZXIgZnJvbSBcIi4uLy4uL3V0aWxzL0V4dGVuZGVyXCI7XHJcblxyXG5jb25zdCBzdXBwb3J0ID0gRXh0ZW5kZXIoXCJIdG1sQ2xhc3NTdXBwb3J0XCIsIGZ1bmN0aW9uKFByb3RvdHlwZSkge1x0XHJcblx0UHJvdG90eXBlLmFkZENsYXNzID0gZnVuY3Rpb24oKSB7XHJcblx0XHRpZihhcmd1bWVudHMubGVuZ3RoID09IDEpXHJcblx0XHRcdGFyZ3VtZW50c1swXS5zcGxpdCgvXFxzKy8pLmZvckVhY2goKGZ1bmN0aW9uKGNsYXp6KXtcclxuXHRcdFx0XHR0aGlzLmNsYXNzTGlzdC5hZGQoY2xhenopO1xyXG5cdFx0XHR9KS5iaW5kKHRoaXMpKTtcclxuXHRcdGVsc2UgaWYoYXJndW1lbnRzLmxlbmd0aCA+IDEpXHJcblx0XHRcdEFycmF5LnByb3RvdHlwZS5mb3JFYWNoLmNhbGwoYXJndW1lbnRzLChmdW5jdGlvbihjbGF6eil7XHJcblx0XHRcdFx0dGhpcy5hZGRDbGFzcyhjbGF6eik7XHJcblx0XHRcdH0pLmJpbmQodGhpcykpO1xyXG5cdFx0XHJcblx0XHRyZXR1cm4gdGhpcztcclxuXHR9O1xyXG5cdFxyXG5cdFByb3RvdHlwZS5yZW1vdmVDbGFzcyA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0aWYoYXJndW1lbnRzLmxlbmd0aCA9PSAxKVxyXG5cdFx0XHRhcmd1bWVudHNbMF0uc3BsaXQoL1xccysvKS5mb3JFYWNoKChmdW5jdGlvbihjbGF6eil7XHJcblx0XHRcdFx0dGhpcy5jbGFzc0xpc3QucmVtb3ZlKGNsYXp6KTtcclxuXHRcdFx0fSkuYmluZCh0aGlzKSk7XHJcblx0XHRlbHNlIGlmKGFyZ3VtZW50cy5sZW5ndGggPiAxKVxyXG5cdFx0XHRBcnJheS5wcm90b3R5cGUuZm9yRWFjaC5jYWxsKGFyZ3VtZW50cywoZnVuY3Rpb24oY2xhenope1xyXG5cdFx0XHRcdHRoaXMucmVtb3ZlQ2xhc3MoY2xhenopO1xyXG5cdFx0XHR9KS5iaW5kKHRoaXMpKTtcclxuXHRcdFxyXG5cdFx0cmV0dXJuIHRoaXM7XHRcdFxyXG5cdH07XHJcblx0XHJcblx0UHJvdG90eXBlLnRvZ2dsZUNsYXNzID0gZnVuY3Rpb24oKSB7XHJcblx0XHRpZihhcmd1bWVudHMubGVuZ3RoID09IDEpXHJcblx0XHRcdGFyZ3VtZW50c1swXS5zcGxpdCgvXFxzKy8pLmZvckVhY2goKGZ1bmN0aW9uKGNsYXp6KXtcclxuXHRcdFx0XHR0aGlzLmNsYXNzTGlzdC50b2dnbGUoY2xhenopO1xyXG5cdFx0XHR9KS5iaW5kKHRoaXMpKTtcclxuXHRcdGVsc2UgaWYoYXJndW1lbnRzLmxlbmd0aCA+IDEpXHJcblx0XHRcdEFycmF5LnByb3RvdHlwZS5mb3JFYWNoLmNhbGwoYXJndW1lbnRzLChmdW5jdGlvbihjbGF6eil7XHJcblx0XHRcdFx0dGhpcy50b29nbGVDbGFzcyhjbGF6eik7XHJcblx0XHRcdH0pLmJpbmQodGhpcykpO1xyXG5cdFx0XHJcblx0XHRyZXR1cm4gdGhpcztcclxuXHR9O1xyXG59KTtcclxuZXhwb3J0IGRlZmF1bHQgc3VwcG9ydDsiLCJpbXBvcnQgRXh0ZW5kZXIgZnJvbSBcIi4uLy4uL3V0aWxzL0V4dGVuZGVyXCI7XHJcblxyXG5jb25zdCBzdXBwb3J0ID0gRXh0ZW5kZXIoXCJMaXN0U3VwcG9ydFwiLCBmdW5jdGlvbihQcm90b3R5cGUpIHtcdFx0XHJcblx0UHJvdG90eXBlLmluZGV4T2YgPSBmdW5jdGlvbigpIHtcclxuXHRcdGZvcihsZXQgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKVxyXG5cdFx0XHRpZih0aGlzW2ldID09IGFyZ3VtZW50c1swXSlcclxuXHRcdFx0XHRyZXR1cm4gaTtcclxuXHRcdFxyXG5cdFx0cmV0dXJuIC0xO1xyXG5cdH07XHJcblxyXG5cdFByb3RvdHlwZS5mb3JFYWNoID0gZnVuY3Rpb24oKXtcclxuXHRcdHJldHVybiBBcnJheS5wcm90b3R5cGUuZm9yRWFjaC5hcHBseShBcnJheS5mcm9tKHRoaXMpLCBhcmd1bWVudHMpO1xyXG5cdH07XHRcclxuXHJcblx0UHJvdG90eXBlLmZpcnN0ID0gZnVuY3Rpb24oKXtcclxuXHRcdGlmKHRoaXMubGVuZ3RoID4gMClcclxuXHRcdFx0cmV0dXJuIHRoaXNbMF07XHJcblx0fTtcdFxyXG5cdFxyXG5cdFByb3RvdHlwZS5sYXN0ID0gZnVuY3Rpb24oKXtcclxuXHRcdGlmKHRoaXMubGVuZ3RoID4gMClcclxuXHRcdFx0cmV0dXJuIHRoaXNbdGhpcy5sZW5ndGggLSAxXTtcclxuXHR9O1xyXG59KTtcclxuZXhwb3J0IGRlZmF1bHQgc3VwcG9ydDsiLCJpbXBvcnQgRXh0ZW5kZXIgZnJvbSBcIi4uLy4uL3V0aWxzL0V4dGVuZGVyXCI7XHJcbmltcG9ydCBVdGlscyBmcm9tIFwiLi4vLi4vdXRpbHMvVXRpbHNcIjtcclxuXHJcbmNvbnN0IHN1cHBvcnQgPSBFeHRlbmRlcihcIk1hbmlwdWxhdGlvblN1cHBvcnRcIiwgZnVuY3Rpb24oUHJvdG90eXBlKSB7XHRcclxuXHRQcm90b3R5cGUuZW1wdHkgPSBmdW5jdGlvbigpe1xyXG5cdFx0bGV0IG5vZGVzID0gdGhpcy5jaGlsZE5vZGVzXHJcblx0XHR3aGlsZShub2Rlcy5sZW5ndGggIT0gMClcdFx0XHRcclxuXHRcdFx0bm9kZXNbMF0ucmVtb3ZlKHRydWUpO1xyXG5cdFx0XHJcblx0XHRyZXR1cm4gdGhpcztcclxuXHR9O1xyXG5cdFxyXG5cdFByb3RvdHlwZS5jb250ZW50ID0gZnVuY3Rpb24oKXtcclxuXHRcdHJldHVybiB0aGlzLmNoaWxkTm9kZXM7XHJcblx0fTtcdFxyXG5cdFxyXG5cdFByb3RvdHlwZS5odG1sID0gZnVuY3Rpb24oKXtcclxuXHRcdGlmKGFyZ3VtZW50cy5sZW5ndGggPT0gMClcdFx0XHRcclxuXHRcdFx0cmV0dXJuIHRoaXMuaW5uZXJIVE1MO1xyXG5cdFx0ZWxzZSBpZihhcmd1bWVudHMubGVuZ3RoID09IDEgJiYgdHlwZW9mIGFyZ3VtZW50c1swXSA9PT0gXCJib29sZWFuXCIpXHJcblx0XHRcdGlmKGFyZ3VtZW50c1swXSlcclxuXHRcdFx0XHRyZXR1cm4gdGhpcy5vdXRlckhUTUw7XHJcblx0XHRcdGVsc2VcclxuXHRcdFx0XHRyZXR1cm4gdGhpcy5pbm5lckhUTUw7XHJcblx0XHRlbHNlIFxyXG5cdFx0XHRBcnJheS5mcm9tKGFyZ3VtZW50cykuZm9yRWFjaCgoZnVuY3Rpb24oY29udGVudCl7XHJcblx0XHRcdFx0aWYodHlwZW9mIGNvbnRlbnQgPT09IFwic3RyaW5nXCIpXHJcblx0XHRcdFx0XHR0aGlzLmlubmVySFRNTCA9IGNvbnRlbnQ7XHJcblx0XHRcdFx0ZWxzZSBpZihjb250ZW50IGluc3RhbmNlb2YgTm9kZSB8fCBjb250ZW50IGluc3RhbmNlb2YgTm9kZUxpc3Qpe1xyXG5cdFx0XHRcdFx0dGhpcy5lbXB0eSgpO1xyXG5cdFx0XHRcdFx0dGhpcy5hcHBlbmQoY29udGVudCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KS5iaW5kKHRoaXMpKTtcdFx0XHJcblx0XHRcdFxyXG5cdFx0cmV0dXJuIHRoaXM7XHJcblx0fTtcclxuXHRcclxuXHRQcm90b3R5cGUuYXBwZW5kID0gZnVuY3Rpb24oKXtcclxuXHRcdGxldCBhcHBlbmQgPSBQcm90b3R5cGUuYXBwZW5kQ2hpbGQuYmluZCh0aGlzKTtcclxuXHRcdGZvcihsZXQgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspe1xyXG5cdFx0XHRsZXQgYXJnID0gYXJndW1lbnRzW2ldO1xyXG5cdFx0XHRpZihhcmcgaW5zdGFuY2VvZiBOb2RlKVxyXG5cdFx0XHRcdHRoaXMuYXBwZW5kQ2hpbGQoYXJnKTtcclxuXHRcdFx0ZWxzZSBpZih0eXBlb2YgYXJnID09PSBcInN0cmluZ1wiKVxyXG5cdFx0XHRcdGNyZWF0ZShhcmcpLmZvckVhY2goYXBwZW5kKTtcclxuXHRcdFx0ZWxzZSBpZihBcnJheS5pc0FycmF5KGFyZykgfHwgYXJnIGluc3RhbmNlb2YgTm9kZUxpc3QpXHJcblx0XHRcdFx0YXJnLmZvckVhY2goYXBwZW5kKTtcclxuXHRcdH1cclxuXHR9O1xyXG5cdFxyXG5cdGNvbnN0IHByZXBlbmQgPSBmdW5jdGlvbihhRmlyc3RFbGVtZW50LCBhRWxlbWVudCl7XHJcblx0XHR0aGlzLmluc2VydEJlZm9yZShhRWxlbWVudCwgYUZpcnN0RWxlbWVudCk7XHJcblx0fTtcclxuXHRQcm90b3R5cGUucHJlcGVuZCA9IGZ1bmN0aW9uKCl7XHJcblx0XHRsZXQgZmlyc3QgPSB0aGlzLmNoaWxkTm9kZXMuZmlyc3QoKTtcclxuXHRcdGxldCBpbnNlcnQgPSBwcmVwZW5kLmJpbmQodGhpcywgZmlyc3QpO1xyXG5cdFx0Zm9yKGxldCBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKyl7XHJcblx0XHRcdGxldCBhcmcgPSBhcmd1bWVudHNbaV07XHJcblx0XHRcdGlmKEFycmF5LmlzQXJyYXkoYXJnKSB8fCBhcmcgaW5zdGFuY2VvZiBOb2RlTGlzdClcclxuXHRcdFx0XHRhcmcuZm9yRWFjaChpbnNlcnQpO1xyXG5cdFx0XHRlbHNlIGlmKGFyZyBpbnN0YW5jZW9mIE5vZGUpXHJcblx0XHRcdFx0dGhpcy5pbnNlcnRCZWZvcmUoYXJnLCBmaXJzdCk7XHJcblx0XHRcdGVsc2UgaWYodHlwZW9mIGFyZyA9PT0gXCJzdHJpbmdcIilcclxuXHRcdFx0XHRhcmcuZm9yRWFjaChpbnNlcnQpO1xyXG5cdFx0fVxyXG5cdH07XHRcclxufSk7XHJcbmV4cG9ydCBkZWZhdWx0IHN1cHBvcnQ7IiwiaW1wb3J0IEV4dGVuZGVyIGZyb20gXCIuLi8uLi91dGlscy9FeHRlbmRlclwiO1xyXG5cclxuY29uc3QgcGFyZW50U2VsZWN0b3IgPSAvOnBhcmVudChcXChcXFwiKFteXFwpXSopXFxcIlxcKSk/L2k7XHJcbmNvbnN0IHF1ZXJ5RXhlY3V0ZXIgPSBmdW5jdGlvbihhRWxlbWVudCwgYVNlbGVjdG9yKXtcclxuXHRsZXQgbWF0Y2ggPSBwYXJlbnRTZWxlY3Rvci5leGVjKGFTZWxlY3Rvcik7XHJcblx0aWYobWF0Y2gpe1xyXG5cdFx0bGV0IHJlc3VsdCA9IGFFbGVtZW50O1xyXG5cdFx0aWYobWF0Y2guaW5kZXggPiAwKXtcclxuXHRcdFx0cmVzdWx0ID0gYUVsZW1lbnQucXVlcnlTZWxlY3RvckFsbChhU2VsZWN0b3Iuc3Vic3RyKDAsIG1hdGNoLmluZGV4KSk7XHJcblx0XHRcdGlmKHJlc3VsdC5sZW5ndGggPT0gMClcclxuXHRcdFx0XHRyZXR1cm47XHJcblx0XHR9XHRcclxuXHRcdHJlc3VsdCA9IHJlc3VsdC5wYXJlbnQobWF0Y2hbMl0pO1x0XHRcdFxyXG5cdFx0aWYocmVzdWx0KXtcclxuXHRcdFx0bGV0IG5leHRTZWxlY3RvciA9IGFTZWxlY3Rvci5zdWJzdHIobWF0Y2guaW5kZXggKyBtYXRjaFswXS5sZW5ndGgpLnRyaW0oKTtcclxuXHRcdFx0aWYobmV4dFNlbGVjdG9yLmxlbmd0aCA+IDApXHJcblx0XHRcdFx0cmVzdWx0ID0gcmVzdWx0LmZpbmQobmV4dFNlbGVjdG9yKTtcclxuXHRcdFx0XHJcblx0XHRcdHJldHVybiByZXN1bHQ7XHJcblx0XHR9XHRcdFxyXG5cdH1cclxuXHRlbHNlXHJcblx0XHRyZXR1cm4gYUVsZW1lbnQucXVlcnlTZWxlY3RvckFsbChhU2VsZWN0b3IpO1xyXG59O1xyXG5cclxuXHJcbmNvbnN0IHN1cHBvcnQgPSBFeHRlbmRlcihcIlF1ZXJ5U3VwcG9ydFwiLGZ1bmN0aW9uKFByb3RvdHlwZSkge1x0XHJcblx0UHJvdG90eXBlLmZpbmQgPSBmdW5jdGlvbigpIHtcclxuXHRcdGxldCBub2RlcyA9IFtdO1xyXG5cdFx0bGV0IGFyZ3MgPSBBcnJheS5mcm9tKGFyZ3VtZW50cyk7XHJcblx0XHRsZXQgYXJnID0gYXJncy5zaGlmdCgpO1xyXG5cdFx0d2hpbGUoYXJnKXtcclxuXHRcdFx0aWYodHlwZW9mIGFyZyA9PT0gXCJzdHJpbmdcIil7XHJcblx0XHRcdFx0bGV0IHJlc3VsdCA9IHF1ZXJ5RXhlY3V0ZXIodGhpcywgYXJnKTtcclxuXHRcdFx0XHRpZihyZXN1bHQpXHJcblx0XHRcdFx0XHRub2Rlcy5wdXNoKHJlc3VsdCk7XHJcblx0XHRcdH1cclxuXHRcdFx0XHJcblx0XHRcdGFyZyA9IGFyZ3Muc2hpZnQoKTtcclxuXHRcdH1cclxuXHRcdFxyXG5cdFx0bGV0IHJlc3VsdCA9IE5vZGVMaXN0LmZyb20uYXBwbHkobnVsbCwgbm9kZXMpO1xyXG5cdFx0cmV0dXJuIHJlc3VsdDtcclxuXHR9O1xyXG5cdFxyXG5cdFByb3RvdHlwZS5pcyA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0aWYodGhpcyBpbnN0YW5jZW9mIERvY3VtZW50KVxyXG5cdFx0XHRyZXR1cm4gZmFsc2U7XHRcdFxyXG5cdFx0ZWxzZSBpZihhcmd1bWVudHMubGVuZ3RoID09IDEpe1xyXG5cdFx0XHRpZih0eXBlb2YgYXJndW1lbnRzWzBdID09PSBcInN0cmluZ1wiKVxyXG5cdFx0XHRcdHJldHVybiB0aGlzLm1hdGNoZXMoYXJndW1lbnRzWzBdKTtcclxuXHRcdFx0ZWxzZSBpZih0eXBlb2YgYXJndW1lbnRzWzBdLmxlbmd0aCA9PT0gXCJudW1iZXJcIil7XHJcblx0XHRcdFx0bGV0IGZpbHRlciA9IGFyZ3VtZW50c1swXTtcclxuXHRcdFx0XHRmb3IobGV0IGkgPSAwOyBpIDwgZmlsdGVyLmxlbmd0aDsgaSsrKVxyXG5cdFx0XHRcdFx0aWYodGhpcy5tYXRjaGVzKGZpbHRlcltpXSkpXHJcblx0XHRcdFx0XHRcdHJldHVybiB0cnVlO1xyXG5cdFx0XHR9XHRcdFx0XHRcclxuXHRcdH1cclxuXHRcdGVsc2UgaWYoYXJndW1lbnRzLmxlbmd0aCA+IDEpXHJcblx0XHRcdHJldHVybiB0aGlzLmlzKEFycmF5LmZyb20oYXJndW1lbnRzKSk7XHJcblx0XHRcclxuXHRcdHJldHVybiBmYWxzZTtcclxuXHR9O1x0XHJcblx0XHJcblx0UHJvdG90eXBlLnBhcmVudCA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0aWYoIXRoaXMucGFyZW50Tm9kZSlcclxuXHRcdFx0cmV0dXJuIHVuZGVmaW5lZDtcdFx0XHJcblx0XHRlbHNlIGlmKHR5cGVvZiBhcmd1bWVudHNbMF0gPT09IFwic3RyaW5nXCIpe1xyXG5cdFx0XHRsZXQgcGFyZW50ID0gdGhpcy5wYXJlbnROb2RlO1xyXG5cdFx0XHR0cnl7XHJcblx0XHRcdFx0d2hpbGUocGFyZW50ICYmICFwYXJlbnQuaXMoYXJndW1lbnRzWzBdKSlcclxuXHRcdFx0XHRcdHBhcmVudCA9IHBhcmVudC5wYXJlbnQoYXJndW1lbnRzWzBdKTtcclxuXHRcdFx0fWNhdGNoIChlKSB7XHJcblx0XHRcdFx0Y29uc29sZS5lcnJvcihcInRoaXM6XCIsIHRoaXMsIFwicGFyZW50OlwiLCBwYXJlbnQsIFwiZXJyb3I6XCIsIGUpO1xyXG5cdFx0XHR9XHJcblx0XHRcdHJldHVybiBwYXJlbnQ7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gdGhpcy5wYXJlbnROb2RlO1xyXG5cdH07XHJcblx0XHJcblx0UHJvdG90eXBlLnBhcmVudHMgPSBmdW5jdGlvbigpIHtcdFx0XHJcblx0XHRsZXQgcmVzdWx0ID0gbmV3IEFycmF5KCk7XHJcblx0XHRsZXQgcGFyZW50ID0gUHJvdG90eXBlLnBhcmVudC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG5cdFx0d2hpbGUocGFyZW50KXtcclxuXHRcdFx0cmVzdWx0LnB1c2gocGFyZW50KTtcclxuXHRcdFx0cGFyZW50ID0gUHJvdG90eXBlLnBhcmVudC5hcHBseShwYXJlbnQsIGFyZ3VtZW50cyk7XHJcblx0XHR9XHJcblx0XHRcclxuXHRcdHJldHVybiBOb2RlTGlzdC5mcm9tKHJlc3VsdCk7XHJcblx0fTtcdFxyXG5cclxuXHRQcm90b3R5cGUuc2VsZWN0b3IgPSBmdW5jdGlvbigpe1xyXG5cdFx0aWYodGhpcyBpbnN0YW5jZW9mIERvY3VtZW50KVxyXG5cdFx0XHRyZXR1cm4gdW5kZWZpbmVkO1xyXG5cdFx0ZWxzZSBpZih0aGlzLmlkKVxyXG5cdFx0XHRyZXR1cm4gXCIjXCIgKyB0aGlzLmlkO1xyXG5cdFx0ZWxzZXtcdFx0XHRcclxuXHRcdFx0bGV0IHNlbGVjdG9yID0gdGhpcy50YWdOYW1lLnRvTG93ZXJDYXNlKCk7XHJcblx0XHRcdGxldCBwYXJlbnQgPSB0aGlzLnBhcmVudCgpO1xyXG5cdFx0XHRpZihwYXJlbnQpe1xyXG5cdFx0XHRcdGxldCBzYW1lVGFnU2libGluZ3MgPSBwYXJlbnQuZmluZChcIjpzY29wZT5cIiArIHNlbGVjdG9yKTtcdFx0XHRcclxuXHRcdFx0XHRpZiAoc2FtZVRhZ1NpYmxpbmdzIGluc3RhbmNlb2YgTm9kZUxpc3QpIHtcclxuXHRcdFx0XHRcdGxldCBpbmRleCA9IHNhbWVUYWdTaWJsaW5ncy5pbmRleE9mKHRoaXMpO1xyXG5cdFx0XHRcdFx0aWYgKGluZGV4ID4gMClcclxuXHRcdFx0XHRcdFx0c2VsZWN0b3IgKz0gJzpudGgtY2hpbGQoJyArIChpbmRleCArIDEpICsgJyknO1xyXG5cdFx0XHRcdH1cdFx0XHJcblx0XHRcdFx0bGV0IHBhcmVudFNlbGVjdG9yID0gcGFyZW50LnNlbGVjdG9yKCk7XHJcblx0XHRcdFx0cmV0dXJuIHBhcmVudFNlbGVjdG9yID8gcGFyZW50U2VsZWN0b3IgKyBcIj5cIiArIHNlbGVjdG9yIDogc2VsZWN0b3I7XHJcblx0XHRcdH0gXHJcblx0XHRcdHJldHVybiBzZWxlY3RvcjtcclxuXHRcdH1cclxuXHR9O1x0XHJcblxyXG5cdFByb3RvdHlwZS5jbG9zZXN0ID0gZnVuY3Rpb24oYVF1ZXJ5KSB7XHRcdFx0XHJcblx0XHRsZXQgbm9kZSA9IHRoaXM7XHJcblx0XHR3aGlsZShub2RlKXtcclxuXHRcdFx0bGV0IGNsb3Nlc3RzID0gbm9kZS5maW5kKGFRdWVyeSk7XHJcblx0XHRcdGlmKGNsb3Nlc3RzICYmIGNsb3Nlc3RzLmxlbmd0aCA+IDApXHJcblx0XHRcdFx0cmV0dXJuIGNsb3Nlc3RzO1xyXG5cdFx0XHRlbHNlIGlmKG5vZGUuaXMoYVF1ZXJ5KSlcclxuXHRcdFx0XHRyZXR1cm4gTm9kZUxpc3QuZnJvbShub2RlKTtcclxuXHRcdFx0XHJcblx0XHRcdG5vZGUgPSBub2RlLnBhcmVudCgpO1x0XHRcclxuXHRcdH1cclxuXHR9O1xyXG5cdFxyXG5cdFByb3RvdHlwZS5uZXN0ZWQgPSBmdW5jdGlvbihhUXVlcnkpe1xyXG5cdFx0aWYodGhpcy5pcyhhUXVlcnkpKVxyXG5cdFx0XHRyZXR1cm4gTm9kZUxpc3QuZnJvbSh0aGlzKTtcdFxyXG5cdFx0XHJcblx0XHRsZXQgbmVzdGVkID0gdGhpcy5maW5kKGFRdWVyeSk7XHJcblx0XHRpZihuZXN0ZWQgJiYgbmVzdGVkLmxlbmd0aCA+IDApXHJcblx0XHRcdHJldHVybiBuZXN0ZWQ7XHJcblx0XHRlbHNlXHJcblx0XHRcdHJldHVybiBOb2RlTGlzdC5mcm9tKHRoaXMucGFyZW50KGFRdWVyeSkpO1xyXG5cdH07XHJcbn0pO1xyXG5leHBvcnQgZGVmYXVsdCBzdXBwb3J0O1xyXG5cclxuIiwiaW1wb3J0IEV4dGVuZGVyIGZyb20gXCIuLi8uLi91dGlscy9FeHRlbmRlclwiO1xyXG5cclxuY29uc3Qgc3VwcG9ydCA9IEV4dGVuZGVyKFwiUmVhZHlFdmVudFN1cHBvcnRcIiwgZnVuY3Rpb24oUHJvdG90eXBlKSB7XHJcblx0UHJvdG90eXBlLnJlYWR5ID0gZnVuY3Rpb24oYUZ1bmN0aW9uLCBvbmNlKXtcdFxyXG5cdFx0dGhpcy5vbihcInJlYWR5XCIsIGFGdW5jdGlvbiwgb25jZSk7XHJcblx0XHRpZihkb2N1bWVudC5yZWFkeVN0YXRlID09IFwiY29tcGxldGVcIilcdFx0XHRcclxuXHRcdFx0dGhpcy50cmlnZ2VyKFwicmVhZHlcIik7XHJcblx0XHRcclxuXHRcdHJldHVybiB0aGlzO1xyXG5cdH07XHJcblx0XHJcbn0pO1xyXG5leHBvcnQgZGVmYXVsdCBzdXBwb3J0OyIsImltcG9ydCBFeHRlbmRlciBmcm9tIFwiLi4vLi4vdXRpbHMvRXh0ZW5kZXJcIjtcclxuXHJcbmNvbnN0IHN1cHBvcnQgPSBFeHRlbmRlcihcIlNob3dIaWRlU3VwcG9ydFwiLCBmdW5jdGlvbihQcm90b3R5cGUpIHtcclxuXHRQcm90b3R5cGUuc2hvdyA9IGZ1bmN0aW9uKCl7XHJcblx0XHRpZih0aGlzLl9faXNoaWRlKXtcclxuXHRcdFx0dGhpcy5zdHlsZS5kaXNwbGF5ID0gdGhpcy5fX2Rpc3BsYXkgfHwgXCJcIjtcclxuXHRcdFx0dGhpcy5fX2lzaGlkZSA9IGZhbHNlO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHRoaXM7XHJcblx0fTtcclxuXHRcclxuXHRQcm90b3R5cGUuaGlkZSA9IGZ1bmN0aW9uKCl7XHJcblx0XHRpZighdGhpcy5fX2lzaGlkZSl7XHJcblx0XHRcdHRoaXMuX19kaXNwbGF5ID0gdGhpcy5zdHlsZS5kaXNwbGF5O1xyXG5cdFx0XHR0aGlzLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuXHRcdFx0dGhpcy5fX2lzaGlkZSA9IHRydWU7XHJcblx0XHR9XHRcclxuXHRcdFxyXG5cdFx0cmV0dXJuIHRoaXM7XHJcblx0fTtcclxuXHRcclxuXHRQcm90b3R5cGUudG9nZ2xlU2hvdyA9IGZ1bmN0aW9uKCl7XHJcblx0XHRpZih0aGlzLl9faXNoaWRlKVxyXG5cdFx0XHRyZXR1cm4gdGhpcy5zaG93KCk7XHJcblx0XHRlbHNlXHJcblx0XHRcdHJldHVybiB0aGlzLmhpZGUoKTtcclxuXHR9O1xyXG5cdFxyXG59KTtcclxuZXhwb3J0IGRlZmF1bHQgc3VwcG9ydDsiLCJpbXBvcnQgRXh0ZW5kZXIgZnJvbSBcIi4uLy4uL3V0aWxzL0V4dGVuZGVyXCI7XHJcblxyXG5jb25zdCBJbnB1dFR5cGVzID1bXHJcblx0e1xyXG5cdFx0c2VsZWN0b3IgOiBcInNlbGVjdFwiLFxyXG5cdFx0Z2V0IDogZnVuY3Rpb24oKXtcclxuXHRcdFx0bGV0IHJlc3VsdCA9IFtdO1xyXG5cdFx0XHR0aGlzLmZpbmQoXCJvcHRpb25cIikuZm9yRWFjaChmdW5jdGlvbihvcHRpb24pe1xyXG5cdFx0XHRcdGlmKG9wdGlvbi5zZWxlY3RlZClcclxuXHRcdFx0XHRcdHJlc3VsdC5wdXNoKG9wdGlvbi52YWx1ZSk7XHJcblx0XHRcdH0pO1xyXG5cdFx0XHRcclxuXHRcdFx0cmV0dXJuIHJlc3VsdDtcclxuXHRcdH0sXHJcblx0XHRzZXQgOiBmdW5jdGlvbigpe1x0XHRcdFx0XHJcblx0XHRcdGxldCB2YWx1ZXMgPSBbXTtcclxuXHRcdFx0bGV0IGFyZ3MgPSBBcnJheS5mcm9tKGFyZ3VtZW50cyk7XHJcblx0XHRcdGxldCBhcmcgPSBhcmdzLnNoaWZ0KCk7XHJcblx0XHRcdHdoaWxlKGFyZyl7XHJcblx0XHRcdFx0aWYoQXJyYXkuaXNBcnJheShhcmcpKVxyXG5cdFx0XHRcdFx0dmFsdWVzID0gdmFsdWVzLmNvbmNhdChhcmcpO1xyXG5cdFx0XHRcdGVsc2VcclxuXHRcdFx0XHRcdHZhbHVlcy5wdXNoKGFyZyk7XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0YXJnID0gYXJncy5zaGlmdCgpO1xyXG5cdFx0XHR9XHJcblx0XHRcdHRoaXMudmFsdWUgPSB2YWx1ZXM7XHJcblx0XHRcdHRoaXMuZmluZChcIm9wdGlvblwiKS5mb3JFYWNoKGZ1bmN0aW9uKG9wdGlvbil7XHJcblx0XHRcdFx0b3B0aW9uLnNlbGVjdGVkID0gdmFsdWVzLmluZGV4T2Yob3B0aW9uLnZhbHVlKSA+PSAwO1xyXG5cdFx0XHR9KTtcclxuXHRcdFx0XHJcblx0XHRcdHRoaXMudHJpZ2dlcihcImNoYW5nZWRcIik7XHJcblx0XHR9XHRcdFx0XHJcblx0fSxcclxuXHR7XHJcblx0XHRzZWxlY3RvciA6IFwiaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXSwgaW5wdXRbdHlwZT1cXFwicmFkaW9cXFwiXVwiLFxyXG5cdFx0Z2V0IDogZnVuY3Rpb24oKXtcclxuXHRcdFx0aWYodGhpcy52YWx1ZSA9PSBcIm9uXCIgfHwgdGhpcy52YWx1ZSA9PSBcIm9mZlwiKVxyXG5cdFx0XHRcdHJldHVybiB0aGlzLmNoZWNrZWQ7XHJcblx0XHRcdGVsc2UgaWYodGhpcy5jaGVja2VkKVxyXG5cdFx0XHRcdHJldHVybiB0aGlzLnZhbHVlO1x0XHRcdFx0XHJcblx0XHR9LFxyXG5cdFx0c2V0IDogZnVuY3Rpb24oYVZhbHVlKXtcclxuXHRcdFx0aWYodHlwZW9mIGFWYWx1ZSA9PT0gXCJib29sZWFuXCIpXHJcblx0XHRcdFx0dGhpcy5jaGVja2VkID0gYVZhbHVlO1xyXG5cdFx0XHRlbHNlIGlmKHR5cGVvZiBhVmFsdWUgPT09IFwic3RyaW5nXCIpXHJcblx0XHRcdFx0dGhpcy5jaGVja2VkID0gdGhpcy52YWx1ZSA9PSBhVmFsdWU7XHJcblx0XHRcdGVsc2UgaWYoQXJyYXkuaXNBcnJheShhVmFsdWUpKVxyXG5cdFx0XHRcdHRoaXMuY2hlY2tlZCA9IGFWYWx1ZS5pbmRleE9mKHRoaXMudmFsdWUpID49IDA7XHJcblx0XHRcdFxyXG5cdFx0XHR0aGlzLnRyaWdnZXIoXCJjaGFuZ2VkXCIpO1xyXG5cdFx0fVxyXG5cdH1cclxuXTtcclxuXHJcbmNvbnN0IERlZmF1bHRJbnB1dFR5cGUgPSB7XHJcblx0XHRnZXQgOiBmdW5jdGlvbigpe1xyXG5cdFx0XHRyZXR1cm4gdGhpcy52YWx1ZTtcclxuXHRcdH0sXHJcblx0XHRzZXQgOiBmdW5jdGlvbihhVmFsdWUpe1xyXG5cdFx0XHR0aGlzLnZhbHVlID0gYVZhbHVlO1xyXG5cdFx0XHR0aGlzLnRyaWdnZXIoXCJpbnB1dFwiKTtcclxuXHRcdH1cdFxyXG59O1xyXG5cclxuY29uc3QgZ2V0SW5wdXRUeXBlID0gZnVuY3Rpb24oYUVsZW1lbnQpe1xyXG5cdGZvcihsZXQgaSA9IDA7IGkgPCBJbnB1dFR5cGVzLmxlbmd0aDsgaSsrKVxyXG5cdFx0aWYoYUVsZW1lbnQuaXMoSW5wdXRUeXBlc1tpXS5zZWxlY3RvcikpXHJcblx0XHRcdHJldHVybiBJbnB1dFR5cGVzW2ldO1x0XHRcclxuXHRyZXR1cm4gRGVmYXVsdElucHV0VHlwZTtcclxufTtcclxuXHJcblxyXG5jb25zdCBzdXBwb3J0ID0gRXh0ZW5kZXIoXCJWYWx1ZVN1cHBvcnRcIiwgZnVuY3Rpb24oUHJvdG90eXBlKSB7XHRcclxuXHRQcm90b3R5cGUudmFsID0gZnVuY3Rpb24oKSB7XHJcblx0XHRsZXQgdHlwZSA9IGdldElucHV0VHlwZSh0aGlzKTtcclxuXHRcdGlmKGFyZ3VtZW50cy5sZW5ndGggPT0gMClcclxuXHRcdFx0cmV0dXJuIHR5cGUuZ2V0LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcblx0XHRlbHNlXHJcblx0XHRcdHR5cGUuc2V0LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcblx0XHRcdFxyXG5cdFx0cmV0dXJuIHRoaXM7XHJcblx0fTtcdFxyXG59KTtcclxuZXhwb3J0IGRlZmF1bHQgc3VwcG9ydDsiLCJpbXBvcnQgXCIuL2RvbS9FdmVudFRhcmdldFwiO1xyXG5pbXBvcnQgXCIuL2RvbS9Ob2RlXCI7XHJcbmltcG9ydCBcIi4vZG9tL0VsZW1lbnRcIjtcclxuaW1wb3J0IFwiLi9kb20vRG9jdW1lbnRcIjtcclxuaW1wb3J0IFwiLi9kb20vRG9jdW1lbnRGcmFnbWVudFwiO1xyXG5pbXBvcnQgXCIuL2RvbS9IVE1MRWxlbWVudFwiO1xyXG5pbXBvcnQgXCIuL2RvbS9IVE1MSW5wdXRFbGVtZW50XCI7XHJcbmltcG9ydCBcIi4vZG9tL0hUTUxUZXh0QXJlYUVsZW1lbnRcIjtcclxuaW1wb3J0IFwiLi9kb20vSFRNTFNlbGVjdEVsZW1lbnRcIjtcclxuaW1wb3J0IFwiLi9kb20vTm9kZUxpc3RcIjtcclxuaW1wb3J0IFwiLi9HbG9iYWxcIjtcclxuIiwiY29uc3QgRGVsZWdhdGVyQnVpbGRlciA9IGZ1bmN0aW9uKCkge1xyXG5cdGxldCBhcmdzID0gQXJyYXkuZnJvbShhcmd1bWVudHMpO1xyXG5cdGxldCBjYWxsYmFjayA9IGFyZ3Muc2hpZnQoKTtcclxuXHRsZXQgc291cmNlID0gYXJncy5zaGlmdCgpO1xyXG5cdGFyZ3MuZm9yRWFjaCgoZnVuY3Rpb24oYVNvdXJjZSwgYUNhbGxiYWNrLCBhVGFyZ2V0KXtcclxuXHRcdE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKGFUYXJnZXQpLmZvckVhY2goXHJcblx0XHRcdChmdW5jdGlvbihhU291cmNlLCBhVGFyZ2V0LGFDYWxsYmFjaywgIGFOYW1lKSB7XHJcblx0XHRcdFx0bGV0IHByb3AgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGFUYXJnZXQsIGFOYW1lKTtcclxuXHRcdFx0XHRpZiAodHlwZW9mIGFTb3VyY2VbYU5hbWVdID09PSBcInVuZGVmaW5lZFwiICYmIHR5cGVvZiBwcm9wLnZhbHVlID09PSBcImZ1bmN0aW9uXCIpXHJcblx0XHRcdFx0XHRhU291cmNlW2FOYW1lXSA9IGZ1bmN0aW9uKCl7cmV0dXJuIGFDYWxsYmFjay5jYWxsKHRoaXMsIGFOYW1lLCBhcmd1bWVudHMpO307XHRcdFx0XHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0fSkuYmluZChudWxsLCBhU291cmNlLCBhVGFyZ2V0LCBhQ2FsbGJhY2spKTtcclxuXHR9KS5iaW5kKG51bGwsIHNvdXJjZSwgY2FsbGJhY2spKTtcclxuXHRcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgRGVsZWdhdGVyQnVpbGRlcjsiLCJjb25zdCBleHRlbmRQcm90b3R5cGUgPSBmdW5jdGlvbigpe1xyXG5cdGxldCBhcmdzID0gXHRBcnJheS5mcm9tKGFyZ3VtZW50cyk7XHJcblx0bGV0IHR5cGUgPSBhcmdzLnNoaWZ0KCk7XHRcclxuXHR3aGlsZShhcmdzLmxlbmd0aCA+IDApe1xyXG5cdFx0bGV0IGV4dGVuZGVyID0gYXJncy5zaGlmdCgpO1xyXG5cdFx0ZXh0ZW5kZXIodHlwZSk7XHJcblx0fVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZXh0ZW5kUHJvdG90eXBlOyIsImltcG9ydCBVdGlscyBmcm9tIFwiLi9VdGlsc1wiO1xyXG5cclxuY29uc3QgRVhURU5TSU9OU19NQVAgPSBVdGlscy5nbG9iYWxWYXIoXCJfX0RPTV9BUElfRVhURU5TSU9OX01BUF9fXCIsIHt9KTtcclxuY29uc3QgRXh0ZW5kZXIgPSBmdW5jdGlvbihhTmFtZSwgYUV4dGVudGlvbil7XHJcblx0cmV0dXJuIGZ1bmN0aW9uKGFUeXBlKXtcdFxyXG5cdFx0bGV0IGV4dGVuc2lvbnMgPSBFWFRFTlNJT05TX01BUFthVHlwZS5uYW1lXTtcclxuXHRcdGlmKCFleHRlbnNpb25zKVxyXG5cdFx0XHRleHRlbnNpb25zID0gRVhURU5TSU9OU19NQVBbYVR5cGUubmFtZV0gPSB7fTtcdFx0XHJcblx0XHRcclxuXHRcdGlmKCFleHRlbnNpb25zW2FOYW1lXSl7XHJcblx0XHRcdGV4dGVuc2lvbnNbYU5hbWVdID0gdHJ1ZTtcclxuXHRcdFx0YUV4dGVudGlvbihhVHlwZS5wcm90b3R5cGUpO1xyXG5cdFx0fVxyXG5cdFx0ZWxzZVxyXG5cdFx0XHRjb25zb2xlLndhcm4oXCJkdXBsaWNhdGVkIGxvYWQgb2YgZXh0ZW5zaW9uIFxcXCJcIiArIGFOYW1lICsgXCJcXFwiIVwiKTtcclxuXHR9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBFeHRlbmRlcjsiLCJjb25zdCBVdGlscyA9IHtcclxuXHRnbG9iYWwgOiAod2luZG93IHx8IGdsb2JhbCB8fCBzZWxmIHx8IHRoaXMgfHwge30pLFxyXG5cdGdsb2JhbFZhciA6IGZ1bmN0aW9uKGFOYW1lLCBhSW5pdFZhbHVlKXtcclxuXHRcdGlmKGFyZ3VtZW50cy5sZW5ndGggPT09IDIgJiYgdHlwZW9mIFV0aWxzLmdsb2JhbFthTmFtZV0gPT09IFwidW5kZWZpbmVkXCIpXHJcblx0XHRcdFV0aWxzLmdsb2JhbFthTmFtZV0gPSBhSW5pdFZhbHVlO1xyXG5cdFx0XHJcblx0XHRyZXR1cm4gVXRpbHMuZ2xvYmFsW2FOYW1lXTtcdFx0XHJcblx0fVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVXRpbHM7IiwidmFyIGc7XG5cbi8vIFRoaXMgd29ya3MgaW4gbm9uLXN0cmljdCBtb2RlXG5nID0gKGZ1bmN0aW9uKCkge1xuXHRyZXR1cm4gdGhpcztcbn0pKCk7XG5cbnRyeSB7XG5cdC8vIFRoaXMgd29ya3MgaWYgZXZhbCBpcyBhbGxvd2VkIChzZWUgQ1NQKVxuXHRnID0gZyB8fCBuZXcgRnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpO1xufSBjYXRjaCAoZSkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIHRoZSB3aW5kb3cgcmVmZXJlbmNlIGlzIGF2YWlsYWJsZVxuXHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gXCJvYmplY3RcIikgZyA9IHdpbmRvdztcbn1cblxuLy8gZyBjYW4gc3RpbGwgYmUgdW5kZWZpbmVkLCBidXQgbm90aGluZyB0byBkbyBhYm91dCBpdC4uLlxuLy8gV2UgcmV0dXJuIHVuZGVmaW5lZCwgaW5zdGVhZCBvZiBub3RoaW5nIGhlcmUsIHNvIGl0J3Ncbi8vIGVhc2llciB0byBoYW5kbGUgdGhpcyBjYXNlLiBpZighZ2xvYmFsKSB7IC4uLn1cblxubW9kdWxlLmV4cG9ydHMgPSBnO1xuIiwiZXhwb3J0IGRlZmF1bHQge1xyXG5cdEVWRU5UUyA6IHtcclxuXHRcdG9uRXhlY3V0ZSA6IFwianN0bC1vbi1leGVjdXRlXCIsXHJcblx0XHRvblN1Y2Nlc3MgOiBcImpzdGwtb24tc3VjY2Vzc1wiLFxyXG5cdFx0b25GYWlsIDogXCJqc3RsLW9uLWZhaWxcIixcclxuXHRcdG9uUmVhZHkgOiBcImpzdGwtb24tcmVhZHlcIlxyXG5cdH0sXHJcblx0UEhBU0UgOiB7XHJcblx0XHRJTklUIDogMTAwMCxcclxuXHRcdENPTkRJVElPTiA6IDIwMDAsXHJcblx0XHRDT05URVhUIDogMzAwMCxcclxuXHRcdE1BTklQVUxBVElPTiA6IDQwMDAsXHJcblx0XHRDT05URU5UIDogNTAwMCxcclxuXHRcdENMRUFOSU5HIDogNjAwMCxcclxuXHRcdENISUxEUkVOIDogNzAwMCxcclxuXHRcdEJJTkRJTkcgOiA4MDAwLFxyXG5cdFx0RklOSVNIIDogOTAwMFxyXG5cdH1cclxufTtcdFxyXG4iLCJpbXBvcnQgQ29uc3RhbnRzIGZyb20gXCIuL0NvbnN0YW50c1wiO1xuaW1wb3J0IFRhc2tDaGFpbiBmcm9tIFwiLi9UYXNrQ2hhaW5cIjtcblxuY29uc3QgdGFza2NoYWluID0gbmV3IFRhc2tDaGFpbigpO1xuXG5jb25zdCBleGVjdXRlRWxlbWVudCA9IGZ1bmN0aW9uKGFFbGVtZW50LCBhRGF0YSwgYVJvb3Qpe1xuXHRjb25zb2xlLmxvZyhcInByb2Nlc3Nvci5leGVjdXRlKFwiLCBhRWxlbWVudCwgYURhdGEsIGFSb290LFwiKVwiKTtcblx0XG5cdGFFbGVtZW50LnRyaWdnZXIoQ29uc3RhbnRzLkVWRU5UUy5vbkV4ZWN1dGUpO1xuXHRcblx0cmV0dXJuIHRhc2tjaGFpbi5leGVjdXRlKHtcblx0XHRlbGVtZW50IDogYUVsZW1lbnQsXG5cdFx0ZGF0YSA6IGFEYXRhLFxuXHRcdHJvb3QgOiBhUm9vdCB8fCBhRWxlbWVudFxuXHR9KS50aGVuKGZ1bmN0aW9uKCl7XG5cdFx0aWYodHlwZW9mIGFSb290ID09PSBcInVuZGVmaW5lZFwiKVxuXHRcdFx0YUVsZW1lbnQudHJpZ2dlcihDb25zdGFudHMuRVZFTlRTLm9uUmVhZHkpO1xuXHRcdFxuXHRcdHJldHVybiB7ZWxlbWVudCA6IGFFbGVtZW50LCBkYXRhIDogYURhdGEsIHJvb3QgOiBhUm9vdH07XG5cdH0pW1wiY2F0Y2hcIl0oZnVuY3Rpb24oYUVycm9yKXtcblx0XHRpZih0eXBlb2YgYVJvb3QgPT09IFwidW5kZWZpbmVkXCIpXG5cdFx0XHRhRWxlbWVudC50cmlnZ2VyKENvbnN0YW50cy5FVkVOVFMub25GYWlsKTtcblx0XHRcblx0XHR0aHJvdyBhRXJyb3I7XG5cdH0pO1xufTtcblxuY29uc3QgUHJvY2Vzc29yID0ge1xuXHQvKipcblx0KiBAcGFyYW0gYVRhc2sgOiB7XG5cdCogXHRcdHRpdGxlIDogc3RyaW5nLFxuXHQqIFx0XHRhY2NlcHQoYUVsZW1lbnQpIDogUHJvbWlzZShCb29sZWFuKVxuXHQqIFx0XHRleGVjdXRlKGFDb250ZXh0KSA6IFByb21pc2UobmV3IENvbnRleHQpXG5cdCogfVxuXHQqIEBwYXJhbSBhUGhhc2UgOiBDb250YW50cy5QSEFTRVxuXHQqL1x0XG5cdGFkZFRhc2sgOiBmdW5jdGlvbihhVGFzaywgYVBoYXNlKXtcblx0XHR0YXNrY2hhaW4uYWRkKGFUYXNrLCBhUGhhc2UpXG5cdH0sXG5cdGdldFRhc2tjaGFpbiA6IGZ1bmN0aW9uKCl7XG5cdFx0cmV0dXJuIHRhc2tjaGFpbjtcblx0fSxcblx0ZXhlY3V0ZSA6IGZ1bmN0aW9uKGFFbGVtZW50LCBhRGF0YSwgYVJvb3Qpe1xuXHRcdGlmKHR5cGVvZiBhRWxlbWVudCA9PT0gXCJ1bmRlZmluZWRcIilcblx0XHRcdHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoXCJQYXJhbWV0ZXIgXFxcImFFbGVtZW50XFxcIiBpcyB1bmRlZmluZWQhXCIpKTtcblx0XHRlbHNlIGlmKGFFbGVtZW50IGluc3RhbmNlb2YgTm9kZUxpc3Qpe1xuXHRcdFx0Y29uc3QgcHJvbWlzZXMgPSBbXTtcblx0XHRcdGFFbGVtZW50LmZvckVhY2goZnVuY3Rpb24oYUVsZW1lbnQpe1xuXHRcdFx0XHRpZih0eXBlb2YgYUVsZW1lbnQgIT09IFwidW5kZWZpbmVkXCIgJiYgYUVsZW1lbnQubm9kZVR5cGUgIT0gMyAmJiBhRWxlbWVudC5ub2RlVHlwZSAhPSA0KVxuXHRcdFx0XHRcdHByb21pc2VzLnB1c2goZXhlY3V0ZUVsZW1lbnQoYUVsZW1lbnQsIGFEYXRhLCBhUm9vdCkpO1xuXHRcdFx0fSlcblx0XHRcdFxuXHRcdFx0cmV0dXJuIFByb21pc2UuYWxsKHByb21pc2VzKVxuXHRcdFx0LnRoZW4oZnVuY3Rpb24oKXtcblx0XHRcdFx0cmV0dXJuIHtlbGVtZW50IDogYUVsZW1lbnQsIGRhdGEgOiBhRGF0YSwgcm9vdCA6IGFSb290fTtcblx0XHRcdH0pO1xuXHRcdH1cblx0XHRlbHNlIGlmKGFFbGVtZW50IGluc3RhbmNlb2YgTm9kZSlcblx0XHRcdHJldHVybiBleGVjdXRlRWxlbWVudChhRWxlbWVudCwgYURhdGEsIGFSb290KVxuXHRcdGVsc2Vcblx0XHRcdCByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKFwiVHlwZSBvZiBcXFwiYUVsZW1lbnRcXFwiIC0gXFxcIlwiICsgdHlwZW9mIGFFbGVtZW50ICsgXCJcXFwiIGlzIG5vdCBzdXBwb3J0ZWQhXCIpKTtcblx0fVxufTtcbmV4cG9ydCBkZWZhdWx0IFByb2Nlc3NvcjsiLCJpbXBvcnQgQ29uc3RhbnRzIGZyb20gXCIuL0NvbnN0YW50c1wiO1xyXG5cclxuY29uc3QgaW5zZXJ0ID0gZnVuY3Rpb24oYUVudHJ5LCBhQ2hhaW4pe1x0XHJcblx0aWYoYUNoYWluID09IG51bGwpXHJcblx0XHRyZXR1cm4gYUVudHJ5O1xyXG5cdFxyXG5cdGxldCBwYXJlbnQgPSBudWxsO1xyXG5cdGxldCBjdXJyZW50ID0gYUNoYWluO1xyXG5cdHdoaWxlKGN1cnJlbnQgIT0gbnVsbCl7XHJcblx0XHRpZihjdXJyZW50LnBoYXNlID4gYUVudHJ5LnBoYXNlKXtcclxuXHRcdFx0YUVudHJ5Lm5leHQgPSBjdXJyZW50XHJcblx0XHRcdGlmKHBhcmVudCA9PSBudWxsKVx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdHJldHVybiBhRW50cnk7XHJcblx0XHRcdGVsc2V7XHJcblx0XHRcdFx0cGFyZW50Lm5leHQgPSBhRW50cnk7XHJcblx0XHRcdFx0cmV0dXJuIGFDaGFpbjtcclxuXHRcdFx0fVxyXG5cdFx0fVx0XHRcdFxyXG5cdFx0cGFyZW50ID0gY3VycmVudDtcclxuXHRcdGN1cnJlbnQgPSBjdXJyZW50Lm5leHQ7XHJcblx0fVxyXG5cdFxyXG5cdHBhcmVudC5uZXh0ID0gYUVudHJ5O1x0XHJcblx0cmV0dXJuIGFDaGFpbjtcclxufTtcclxuXHJcbmNvbnN0IGV4ZWN1dGVDaGFpbiA9IGZ1bmN0aW9uKGFDb250ZXh0LCBhQ2hhaW4pe1x0XHJcblx0cmV0dXJuIFByb21pc2UucmVzb2x2ZShhQ2hhaW4udGFzay5hY2NlcHQoYUNvbnRleHQpKVxyXG5cdC50aGVuKGZ1bmN0aW9uKGlzQWNjZXB0ZWQpe1xyXG5cdFx0aWYoIWlzQWNjZXB0ZWQpXHJcblx0XHRcdHJldHVybiBhQ2hhaW4ubmV4dCA9PSBudWxsID8gYUNvbnRleHQgOiBleGVjdXRlQ2hhaW4oYUNvbnRleHQsIGFDaGFpbi5uZXh0KTtcclxuXHRcdFxyXG5cdFx0cmV0dXJuIFByb21pc2UucmVzb2x2ZShhQ2hhaW4udGFzay5leGVjdXRlKGFDb250ZXh0KSlcclxuXHRcdC50aGVuKGZ1bmN0aW9uKGFDb250ZXh0KXtcclxuXHRcdFx0aWYoYUNvbnRleHQuZXhpdCB8fCBhQ2hhaW4ubmV4dCA9PSBudWxsKVxyXG5cdFx0XHRcdHJldHVybiBhQ29udGV4dDtcclxuXHRcdFx0XHJcblx0XHRcdHJldHVybiBleGVjdXRlQ2hhaW4oYUNvbnRleHQsIGFDaGFpbi5uZXh0KTtcclxuXHRcdH0pO1xyXG5cdH0pO1x0XHJcbn07XHJcblxyXG5jb25zdCBUYXNrQ2hhaW4gPSBmdW5jdGlvbigpe1xyXG5cdGNvbnN0IHRhc2tzID0ge307XHRcclxuXHRyZXR1cm4ge1xyXG5cdFx0Y2hhaW4gOiBudWxsLFxyXG5cdFx0LyoqXHJcblx0XHQgKiBAcGFyYW0gYVRhc2sgOiB7XHJcblx0XHQgKiBcdFx0dGl0bGUgOiBzdHJpbmcsXHJcblx0XHQgKiBcdFx0YWNjZXB0KGFFbGVtZW50KSA6IFByb21pc2UoQm9vbGVhbilcclxuXHRcdCAqIFx0XHRleGVjdXRlKGFDb250ZXh0KSA6IFByb21pc2UobmV3IENvbnRleHQpXHJcblx0XHQgKiB9XHJcblx0XHQgKiBAcGFyYW0gYVBoYXNlIDogQ29udGFudHMuUEhBU0VcclxuXHRcdCAqL1x0XHJcblx0XHRhZGQgOiBmdW5jdGlvbihhVGFzaywgYVBoYXNlKXtcclxuXHRcdFx0aWYodHlwZW9mIHRhc2tzW2FUYXNrLmlkXSA9PT0gXCJ1bmRlZmluZWRcIilcdFx0XHJcblx0XHRcdFx0dGhpcy5jaGFpbiA9IGluc2VydCh7XHJcblx0XHRcdFx0XHR0YXNrIDogYVRhc2ssXHJcblx0XHRcdFx0XHRwaGFzZSA6ICh0eXBlb2YgYVBoYXNlICE9PSBcInVuZGVmaW5lZFwiID8gYVBoYXNlIDogQ29uc3RhbnRzLlBIQVNFLkZJTklTSCksXHJcblx0XHRcdFx0XHRuZXh0IDogbnVsbFxyXG5cdFx0XHRcdH0sIHRoaXMuY2hhaW4pO1x0XHRcdFxyXG5cdFx0fSxcclxuXHRcdFxyXG5cdFx0LyoqXHJcblx0XHQgKiBAcGFyYW0gYUNvbnRleHQ6IHtcclxuXHRcdCAqXHRcdGVsZW1lbnQsXHJcblx0XHQgKlx0XHRkYXRhLFxyXG5cdFx0ICpcdFx0cm9vdCxcclxuXHRcdCAqXHRcdHByb2Nlc3NvcixcclxuXHRcdCAqXHR9XHJcblx0XHQgKi9cclxuXHRcdGV4ZWN1dGUgOiBmdW5jdGlvbihhQ29udGV4dCl7XHJcblx0XHRcdHJldHVybiBleGVjdXRlQ2hhaW4oYUNvbnRleHQsIHRoaXMuY2hhaW4pO1xyXG5cdFx0fVxyXG5cdH07XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUYXNrQ2hhaW47IiwiaW1wb3J0IFwiQGRlZmF1bHQtanMvZGVmYXVsdGpzLWV4dGRvbVwiO1xyXG5pbXBvcnQgQ29uc3RhbnRzIGZyb20gXCIuL0NvbnN0YW50c1wiO1xyXG5pbXBvcnQgUHJvY2Vzc29yIGZyb20gXCIuL1Byb2Nlc3NvclwiO1xyXG5pbXBvcnQgXCIuL3Rhc2tzXCI7XHJcblxyXG5jb25zdCBwYWNrID0ge1xyXG5cdENvbnN0YW50cyA6IENvbnN0YW50cyxcclxuXHRQcm9jZXNzb3IgOiBQcm9jZXNzb3JcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHBhY2s7XHJcbmV4cG9ydCB7Q29uc3RhbnRzLCBQcm9jZXNzb3J9OyIsImltcG9ydCBDb25zdGFudHMgZnJvbSBcIi4uL0NvbnN0YW50c1wiO1xyXG5pbXBvcnQgUHJvY2Vzc29yIGZyb20gXCIuLi9Qcm9jZXNzb3JcIjtcclxuXHJcbmNvbnN0IFRhc2sgPSB7XHJcblx0aWQgOiBcImFkZC1hdHRyaWJ1dGVcIixcclxuXHRhY2NlcHQgOiBmdW5jdGlvbihhQ29udGV4dCl7XHJcblx0XHRyZXR1cm4gYUNvbnRleHQuZWxlbWVudC5pcyhcIltqc3RsLWFkZC1hdHRyaWJ1dGVdXCIpO1xyXG5cdH0sXHJcblx0ZXhlY3V0ZSA6IGZ1bmN0aW9uKGFDb250ZXh0KXtcclxuXHRcdHJldHVybiBQcm9taXNlLnJlc29sdmUoYUNvbnRleHQpO1xyXG5cdH1cclxufTtcclxuXHJcblByb2Nlc3Nvci5hZGRUYXNrKFRhc2ssIENvbnN0YW50cy5QSEFTRS5NQU5JUFVMQVRJT04gKyAyMDApOyIsImltcG9ydCBDb25zdGFudHMgZnJvbSBcIi4uL0NvbnN0YW50c1wiO1xyXG5pbXBvcnQgUHJvY2Vzc29yIGZyb20gXCIuLi9Qcm9jZXNzb3JcIjtcclxuXHJcbmNvbnN0IFRhc2sgPSB7XHJcblx0aWQgOiBcImFzeW5jXCIsXHJcblx0YWNjZXB0IDogZnVuY3Rpb24oYUNvbnRleHQpe1xyXG5cdFx0cmV0dXJuIGZhbHNlO1xyXG5cdH0sXHJcblx0ZXhlY3V0ZSA6IGZ1bmN0aW9uKGFDb250ZXh0KXtcclxuXHRcdHJldHVybiBQcm9taXNlLnJlc29sdmUoYUNvbnRleHQpO1xyXG5cdH1cclxufTtcclxuXHJcblByb2Nlc3Nvci5hZGRUYXNrKFRhc2ssIENvbnN0YW50cy5QSEFTRS5JTklUKTsiLCJpbXBvcnQgQ29uc3RhbnRzIGZyb20gXCIuLi9Db25zdGFudHNcIjtcbmltcG9ydCBQcm9jZXNzb3IgZnJvbSBcIi4uL1Byb2Nlc3NvclwiO1xuaW1wb3J0IGVsIGZyb20gXCJAZGVmYXVsdC1qcy9kZWZhdWx0anMtZXhwcmVzc2lvbi1sYW5ndWFnZVwiO1xuXG5jb25zdCBSZXNvbHZlciA9IGVsLkV4cHJlc3Npb25SZXNvbHZlcjtcblxuY29uc3QgZXhlY3V0ZSA9IGZ1bmN0aW9uKGFLZXksIGFWYWx1ZSwgYUNvbnRleHQpe1xuXHRyZXR1cm4gUmVzb2x2ZXIucmVzb2x2ZVRleHQoYVZhbHVlLCBhQ29udGV4dC5kYXRhKVxuXHQudGhlbihmdW5jdGlvbihhUmVzdWx0KXtcblx0XHRpZihhVmFsdWUgIT0gYVJlc3VsdClcblx0XHRcdGFDb250ZXh0LmVsZW1lbnQuYXR0cihhS2V5LCBhUmVzdWx0KTtcblx0fSk7XG59O1xuXG5jb25zdCBUYXNrID0ge1xuXHRpZCA6IFwiYXR0cmlidXRlXCIsXG5cdGFjY2VwdCA6IGZ1bmN0aW9uKGFDb250ZXh0KXtcblx0XHRjb25zdCBhdHRyaWJ1dGVzID0gYUNvbnRleHQuZWxlbWVudC5hdHRyKCk7XG5cdFx0cmV0dXJuIHR5cGVvZiBhdHRyaWJ1dGVzICE9PSBcInVuZGVmaW5lZFwiICYmIGF0dHJpYnV0ZXMgIT0gbnVsbCAmJiAhYUNvbnRleHQuZWxlbWVudC5pcyhcIltqc3RsLWF0dHJpYnV0ZS1pZ25vcmVdXCIpO1xuXHR9LFxuXHRleGVjdXRlIDogZnVuY3Rpb24oYUNvbnRleHQpe1xuXHRcdGNvbnN0IGF0dHJpYnV0ZXMgPSBhQ29udGV4dC5lbGVtZW50LmF0dHIoKTtcblx0XHRjb25zdCBwcm9taXNlcyA9IFtdO1xuXHRcdGZvcihjb25zdCBrZXkgaW4gYXR0cmlidXRlcylcblx0XHRcdHByb21pc2VzLnB1c2goZXhlY3V0ZShrZXksIGF0dHJpYnV0ZXNba2V5XSwgYUNvbnRleHQpKTtcblx0XHRcblx0XHRyZXR1cm4gUHJvbWlzZS5hbGwocHJvbWlzZXMpXG5cdFx0LnRoZW4oZnVuY3Rpb24oKXtcblx0XHRcdHJldHVybiBhQ29udGV4dDtcblx0XHR9KTtcblx0fVxufTtcblxuUHJvY2Vzc29yLmFkZFRhc2soVGFzaywgQ29uc3RhbnRzLlBIQVNFLkNPTlRFTlQgKyAxMDApOyIsImltcG9ydCBDb25zdGFudHMgZnJvbSBcIi4uL0NvbnN0YW50c1wiO1xyXG5pbXBvcnQgUHJvY2Vzc29yIGZyb20gXCIuLi9Qcm9jZXNzb3JcIjtcclxuXHJcblxyXG5jb25zdCBleGVjdXRlTmV4dCA9IGZ1bmN0aW9uKGNoaWxkcmVuLCBpbmRleCwgYUNvbnRleHQpe1xyXG5cdHJldHVybiBQcm9jZXNzb3IuZXhlY3V0ZShjaGlsZHJlbltpbmRleF0sIGFDb250ZXh0LmRhdGEsIGFDb250ZXh0LnJvb3QpXHJcblx0LnRoZW4oZnVuY3Rpb24oYUNvbnRleHQpe1xyXG5cdFx0Y29uc3QgbmV4dEluZGV4ID0gaW5kZXggKyAxO1xyXG5cdFx0aWYoY2hpbGRyZW4ubGVuZ3RoID4gbmV4dEluZGV4KVxyXG5cdFx0XHRyZXR1cm4gZXhlY3V0ZU5leHQoY2hpbGRyZW4sIG5leHRJbmRleCwgYUNvbnRleHQpO1xyXG5cdFx0ZWxzZVxyXG5cdFx0XHRyZXR1cm4gYUNvbnRleHQ7XHJcblx0fSk7XHJcbn07XHJcblxyXG5jb25zdCBUYXNrID0ge1xyXG5cdGlkIDogXCJjaGlsZHJlblwiLFxyXG5cdGFjY2VwdCA6IGZ1bmN0aW9uKGFDb250ZXh0KXtcclxuXHRcdGNvbnN0IGNoaWxkcmVuID0gYUNvbnRleHQuZWxlbWVudC5jaGlsZHJlbjtcclxuXHRcdHJldHVybiBjaGlsZHJlbiAhPSBudWxsICYmIGNoaWxkcmVuLmxlbmd0aCA+IDA7XHJcblx0fSxcclxuXHRleGVjdXRlIDogZnVuY3Rpb24oYUNvbnRleHQpe1xyXG5cdFx0Y29uc3QgY2hpbGRyZW4gPSBBcnJheS5mcm9tKGFDb250ZXh0LmVsZW1lbnQuY2hpbGRyZW4pXHJcblx0XHQuZmlsdGVyKGZ1bmN0aW9uKGFOb2RlKXtcclxuXHRcdFx0cmV0dXJuIGFOb2RlLm5vZGVUeXBlICE9IDMgJiYgYU5vZGUubm9kZVR5cGUgIT0gNDtcclxuXHRcdH0pO1xyXG5cdFx0XHJcblx0XHRyZXR1cm4gZXhlY3V0ZU5leHQoY2hpbGRyZW4sIDAsIGFDb250ZXh0KTtcclxuXHR9XHJcbn07XHJcblxyXG5Qcm9jZXNzb3IuYWRkVGFzayhUYXNrLCBDb25zdGFudHMuUEhBU0UuQ0hJTERSRU4pOyIsImltcG9ydCBDb25zdGFudHMgZnJvbSBcIi4uL0NvbnN0YW50c1wiO1xyXG5pbXBvcnQgUHJvY2Vzc29yIGZyb20gXCIuLi9Qcm9jZXNzb3JcIjtcclxuXHJcbmNvbnN0IFRhc2sgPSB7XHJcblx0aWQgOiBcImNob29zZVwiLFxyXG5cdGFjY2VwdCA6IGZ1bmN0aW9uKGFDb250ZXh0KXtcclxuXHRcdHJldHVybiBmYWxzZTtcclxuXHR9LFxyXG5cdGV4ZWN1dGUgOiBmdW5jdGlvbihhQ29udGV4dCl7XHJcblx0XHRyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGFDb250ZXh0KTtcclxuXHR9XHJcbn07XHJcblxyXG5Qcm9jZXNzb3IuYWRkVGFzayhUYXNrLCBDb25zdGFudHMuUEhBU0UuTUFOSVBVTEFUSU9OICsgMTAwKTsiLCJpbXBvcnQgQ29uc3RhbnRzIGZyb20gXCIuLi9Db25zdGFudHNcIjtcclxuaW1wb3J0IFByb2Nlc3NvciBmcm9tIFwiLi4vUHJvY2Vzc29yXCI7XHJcblxyXG5jb25zdCBUYXNrID0ge1xyXG5cdGlkIDogXCJkYXRhXCIsXHJcblx0YWNjZXB0IDogZnVuY3Rpb24oYUNvbnRleHQpe1xyXG5cdFx0cmV0dXJuIGZhbHNlO1xyXG5cdH0sXHJcblx0ZXhlY3V0ZSA6IGZ1bmN0aW9uKGFDb250ZXh0KXtcclxuXHRcdHJldHVybiBQcm9taXNlLnJlc29sdmUoYUNvbnRleHQpO1xyXG5cdH1cclxufTtcclxuXHJcblByb2Nlc3Nvci5hZGRUYXNrKFRhc2ssIENvbnN0YW50cy5QSEFTRS5DT05URVhUICsgMTAwKTsiLCJpbXBvcnQgZWwgZnJvbSBcIkBkZWZhdWx0LWpzL2RlZmF1bHRqcy1leHByZXNzaW9uLWxhbmd1YWdlXCI7XHJcbmltcG9ydCBDb25zdGFudHMgZnJvbSBcIi4uL0NvbnN0YW50c1wiO1xyXG5pbXBvcnQgUHJvY2Vzc29yIGZyb20gXCIuLi9Qcm9jZXNzb3JcIjtcclxuaW1wb3J0IE9iamVjdFV0aWxzIGZyb20gXCJAZGVmYXVsdC1qcy9kZWZhdWx0anMtY29tbW9uLXV0aWxzL3NyYy9PYmplY3RVdGlsc1wiO1xyXG5cclxuY29uc3QgUmVzb2x2ZXIgPSBlbC5FeHByZXNzaW9uUmVzb2x2ZXI7XHJcbmNvbnN0IERBVEFOQU1FID0gXCJkZWZhdWx0anMudGwuZm9yZWFjaC50ZW1wbGF0ZVwiO1xyXG5jb25zdCBBVFRSSUJVVEUgPSB7XHJcblx0REFUQSA6IFwianN0bC1mb3JlYWNoXCIsXHJcblx0VkFSTkFNRSA6IFwianN0bC1mb3JlYWNoLXZhclwiLFxyXG5cdFNUQVRVU1ZBUk5BTUUgOiBcImpzdGwtZm9yZWFjaC1zdGF0dXNcIixcclxuXHRDT1VOVCA6IFwianN0bC1mb3JlYWNoLWNvdW50XCIsXHJcblx0U1RBUlRJTkRFWCA6IFwianN0bC1mb3JlYWNoLXN0YXJ0LWluZGV4XCIsXHJcblx0U1RFUCA6IFwianN0bC1mb3JlYWNoLXN0ZXBcIixcclxuXHRCUkVBS0NPTkRJVElPTiA6IFwianN0bC1mb3JlYWNoLWJyZWFrLWNvbmRpdGlvblwiXHJcbn07XHJcblxyXG5jb25zdCBjb3VudCA9IGZ1bmN0aW9uKGFWYXJuYW1lLCBhU3RhdHVzbmFtZSwgYUNvbnRleHQsIGFUZW1wbGF0ZSkge1x0XHJcblx0Y29uc29sZS5sb2coXCJjb3VudFwiKTtcclxuXHRyZXR1cm4gUHJvbWlzZS5hbGwoW1xyXG5cdFx0UmVzb2x2ZXIucmVzb2x2ZShhQ29udGV4dC5lbGVtZW50LmF0dHIoQVRUUklCVVRFLlNUQVJUSU5ERVgpIHx8IDAsIGFDb250ZXh0LmRhdGEsIDApLFxyXG5cdFx0UmVzb2x2ZXIucmVzb2x2ZShhQ29udGV4dC5lbGVtZW50LmF0dHIoQVRUUklCVVRFLkNPVU5UKSB8fCAwLCBhQ29udGV4dC5kYXRhLCAwKSxcclxuXHRcdFJlc29sdmVyLnJlc29sdmUoYUNvbnRleHQuZWxlbWVudC5hdHRyKEFUVFJJQlVURS5TVEVQKSB8fCAxLCBhQ29udGV4dC5kYXRhLCAxKVxyXG5cdF0pLnRoZW4oZnVuY3Rpb24oYVJlc3VsdHMpe1xyXG5cdFx0bGV0IHByb21pc2VzID0gW107XHJcblx0XHRjb25zdCBzdGFydCA9IGFSZXN1bHRzWzBdIHx8IDA7XHJcblx0XHRjb25zdCBjb3VudCA9IGFSZXN1bHRzWzFdIHx8IDA7XHJcblx0XHRjb25zdCBzdGVwID0gYVJlc3VsdHNbMl0gfHwgMTtcclxuXHRcdGZvciAobGV0IGkgPSBzdGFydDsgaSA8IGNvdW50OyBpICs9IHN0ZXApIHsgICAgXHRcdFx0ICAgIFxyXG5cdFx0ICAgIGNvbnN0IGNvbnRleHQgPSBPYmplY3RVdGlscy5tZXJnZSh7fSwgYUNvbnRleHQuZGF0YSk7XHJcblx0XHQgICAgY29udGV4dFthVmFybmFtZV0gPSBpLFxyXG5cdFx0ICAgIGNvbnRleHRbYVN0YXR1c25hbWVdID0ge1xyXG5cdFx0ICAgICAgICBcImluZGV4XCIgOiBpLFxyXG5cdFx0ICAgICAgICBcIm51bWJlclwiIDogaSArIDEsIFxyXG5cdFx0ICAgICAgICBcImNvdW50XCIgOiBhUmVzdWx0c1sxXSxcclxuXHRcdCAgICAgICAgXCJjb250ZXh0XCIgOiBhQ29udGV4dC5kYXRhXHJcblx0XHQgICAgfTtcclxuXHRcdCAgICBwcm9taXNlcy5wdXNoKFByb2Nlc3Nvci5leGVjdXRlKGFUZW1wbGF0ZS5jbG9uZU5vZGUodHJ1ZSksIGNvbnRleHQsIGFDb250ZXh0LnJvb3QpXHJcblx0XHQgICAgXHQudGhlbihmdW5jdGlvbihhUmVzdWx0KXtcclxuXHQgICAgXHRcdFx0cmV0dXJuIGFSZXN1bHQuZWxlbWVudDtcclxuXHQgICAgXHRcdH0pKTtcclxuXHQgICAgfVxyXG5cdFx0XHJcblx0XHRyZXR1cm4gUHJvbWlzZS5hbGwocHJvbWlzZXMpO1xyXG5cdH0pOyAgICBcclxufTtcclxuXHJcbmNvbnN0IGl0ZXJhdGVMaXN0ID0gZnVuY3Rpb24oYUluZGV4LCBhRGF0YSwgYUJyZWFrQ29uZGl0aW9uLCBhVmFybmFtZSwgYVN0YXR1c25hbWUsIGFDb250ZXh0LCBhVGVtcGxhdGUsIGFSZXN1bHQpe1xyXG5cdGlmKGFJbmRleCA+PSBhRGF0YS5sZW5ndGgpXHJcblx0XHRyZXR1cm4gYVJlc3VsdDtcdFxyXG5cdFxyXG5cdGNvbnN0IGNvbnRleHQgPSBPYmplY3RVdGlscy5tZXJnZSh7fSwgYUNvbnRleHQpO1xyXG4gICAgY29udGV4dFthVmFybmFtZV0gPSBhRGF0YVthSW5kZXhdLFxyXG4gICAgY29udGV4dFthU3RhdHVzbmFtZV0gPSB7XHJcbiAgICAgICAgXCJpbmRleFwiIDogYUluZGV4LFxyXG4gICAgICAgIFwibnVtYmVyXCIgOiBhSW5kZXggKyAxLCBcclxuICAgICAgICBcImNvdW50XCIgOiBhRGF0YS5sZW5ndGgsXHJcbiAgICAgICAgXCJkYXRhXCIgOiBhRGF0YSxcclxuICAgICAgICBcImNvbnRleHRcIiA6IGFDb250ZXh0LmRhdGFcclxuICAgIH07XHJcbiAgICBcclxuICAgIHJldHVybiBSZXNvbHZlci5yZXNvbHZlKGFCcmVha0NvbmRpdGlvbiwgY29udGV4dCwgZmFsc2UpXHJcbiAgICAudGhlbihmdW5jdGlvbihkb0JyZWFrKXtcclxuICAgIFx0aWYoIWRvQnJlYWspe1xyXG4gICAgXHRcdHJldHVybiBhQ29udGV4dC5wcm9jZXNzb3IuZXhlY3V0ZShhVGVtcGxhdGUuY2xvbmVOb2RlKHRydWUpLCBjb250ZXh0LCBhQ29udGV4dC5yb290KVxyXG4gICAgXHRcdC50aGVuKGZ1bmN0aW9uKGFDb250ZW50KXtcclxuICAgIFx0XHRcdHJldHVybiBhUmVzdWx0LnB1c2goYUNvbnRlbnQuZWxlbWVudCk7XHJcbiAgICBcdFx0fSk7ICAgIFx0XHRcclxuICAgIFx0fVxyXG4gICAgXHRcclxuICAgIFx0cmV0dXJuIGFSZXN1bHQ7XHJcbiAgICB9KTtcdFxyXG59O1xyXG5cclxuY29uc3QgbGlzdCA9IGZ1bmN0aW9uKGFEYXRhLCBhVmFybmFtZSwgYVN0YXR1c25hbWUsIGFDb250ZXh0LCBhVGVtcGxhdGUpIHtcdFxyXG5cdGNvbnN0IGJyZWFrQ29uZGl0aW9uID0gYUNvbnRleHQuZWxlbWVudC5hdHRyKEFUVFJJQlVURS5CUkVBS0NPTkRJVElPTik7XHJcblx0cmV0dXJuIFJlc29sdmVyLnJlc29sdmUoYUNvbnRleHQuZWxlbWVudC5hdHRyKEFUVFJJQlVURS5TVEFSVElOREVYKSwgYUNvbnRleHQuZGF0YSwgMClcclxuXHQudGhlbihmdW5jdGlvbihhU3RhcnRJbmRleCl7XHJcblx0XHRyZXR1cm4gaXRlcmF0ZUxpc3QoYVN0YXJ0SW5kZXgsYURhdGEsIGFWYXJuYW1lLCBhU3RhdHVzbmFtZSwgYUNvbnRleHQsIGFUZW1wbGF0ZSwgW10pO1x0ICAgIFx0XHJcblx0fSk7XHJcbn07XHJcblxyXG5jb25zdCBpdGVyYXRlTWFwID0gZnVuY3Rpb24oYUluZGV4LCBhS2V5cywgYURhdGEsIGFCcmVha0NvbmRpdGlvbiwgYVZhcm5hbWUsIGFTdGF0dXNuYW1lLCBhQ29udGV4dCwgYVRlbXBsYXRlLCBhUmVzdWx0KXtcclxuXHRpZihhSW5kZXggPj0gYURhdGEubGVuZ3RoKVxyXG5cdFx0cmV0dXJuIGFSZXN1bHQ7XHJcblx0XHJcblx0Y29uc3Qga2V5ID0gYUtleXNbYUluZGV4XTtcclxuXHRjb25zdCBjb250ZXh0ID0gT2JqZWN0VXRpbHMubWVyZ2Uoe30sIGFDb250ZXh0KTtcclxuICAgIGNvbnRleHRbYVZhcm5hbWVdID0gYURhdGFba2V5XSxcclxuICAgIGNvbnRleHRbYVN0YXR1c25hbWVdID0ge1xyXG4gICAgICAgIFwiaW5kZXhcIiA6IGFJbmRleCxcclxuICAgICAgICBcIm51bWJlclwiIDogYUluZGV4ICsgMSxcclxuICAgICAgICBcImtleVwiIDoga2V5LFxyXG4gICAgICAgIFwiY291bnRcIiA6IGFEYXRhLmxlbmd0aCxcclxuICAgICAgICBcImRhdGFcIiA6IGFEYXRhLFxyXG4gICAgICAgIFwiY29udGV4dFwiIDogYUNvbnRleHQuZGF0YVxyXG4gICAgfTtcclxuICAgIFxyXG4gICAgcmV0dXJuIFJlc29sdmVyLnJlc29sdmUoYUJyZWFrQ29uZGl0aW9uLCBjb250ZXh0LCBmYWxzZSlcclxuICAgIC50aGVuKGZ1bmN0aW9uKGRvQnJlYWspe1xyXG4gICAgXHRpZighZG9CcmVhayl7XHJcbiAgICBcdFx0cmV0dXJuIGFDb250ZXh0LnByb2Nlc3Nvci5leGVjdXRlKGFUZW1wbGF0ZS5jbG9uZU5vZGUodHJ1ZSksIGNvbnRleHQsIGFDb250ZXh0LnJvb3QpXHJcbiAgICBcdFx0LnRoZW4oZnVuY3Rpb24oYUNvbnRlbnQpe1xyXG4gICAgXHRcdFx0cmV0dXJuIGFSZXN1bHQucHVzaChhQ29udGVudC5lbGVtZW50KTtcclxuICAgIFx0XHR9KTsgICAgXHRcdFxyXG4gICAgXHR9XHJcbiAgICBcdFxyXG4gICAgXHRyZXR1cm4gYVJlc3VsdDtcclxuICAgIH0pO1xyXG59O1xyXG5cclxuY29uc3QgbWFwID0gZnVuY3Rpb24oYURhdGEsIGFWYXJuYW1lLCBhU3RhdHVzbmFtZSwgYUNvbnRleHQsIGFUZW1wbGF0ZSkge1xyXG5cdGNvbnN0IGJyZWFrQ29uZGl0aW9uID0gYUNvbnRleHQuZWxlbWVudC5hdHRyKEFUVFJJQlVURS5CUkVBS0NPTkRJVElPTik7XHJcblx0cmV0dXJuIFJlc29sdmVyLnJlc29sdmUoYUNvbnRleHQuZWxlbWVudC5hdHRyKEFUVFJJQlVURS5TVEFSVElOREVYKSwgYUNvbnRleHQuZGF0YSwgMClcclxuXHQudGhlbihmdW5jdGlvbihhU3RhcnRJbmRleCl7XHJcblx0XHRyZXR1cm4gaXRlcmF0ZU1hcChhU3RhcnRJbmRleCwgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoYURhdGEpLCBhRGF0YSwgYVZhcm5hbWUsIGFTdGF0dXNuYW1lLCBhQ29udGV4dCwgYVRlbXBsYXRlLCBbXSk7XHQgICAgXHRcclxuXHR9KTtcclxufTtcclxuXHJcbmNvbnN0IGdldFRlbXBsYXRlID0gZnVuY3Rpb24oYUVsZW1lbnQpIHtcclxuICAgIGxldCB0ZW1wbGF0ZSA9IGFFbGVtZW50LmRhdGEoREFUQU5BTUUpO1xyXG4gICAgaWYgKHR5cGVvZiB0ZW1wbGF0ZSA9PT0gJ3VuZGVmaW5lZCcpIHtcclxuXHQgICAgdGVtcGxhdGUgPSBhRWxlbWVudC5jb250ZW50KCk7XHJcblx0ICAgIGFFbGVtZW50LmRhdGEoREFUQU5BTUUsIHRlbXBsYXRlKTtcclxuICAgIH1cclxuICAgIHJldHVybiB0ZW1wbGF0ZTtcclxufTtcclxuXHJcblxyXG5jb25zdCBleGVjdXRlID0gZnVuY3Rpb24oYW5FeHByZXNzaW9uLCBhVmFybmFtZSwgYVN0YXR1c25hbWUsIGFDb250ZXh0LCBhVGVtcGxhdGUpe1xyXG5cdGlmIChhbkV4cHJlc3Npb24gPT0gbnVsbCAmJiB0eXBlb2YgYUNvbnRleHQuZWxlbWVudC5hdHRyKEFUVFJJQlVURS5DT1VOVCkgIT09IFwidW5kZWZpbmVkXCIpXHJcblx0ICAgIHJldHVybiBjb3VudChhVmFybmFtZSwgYVN0YXR1c25hbWUsIGFDb250ZXh0LCBhVGVtcGxhdGUpO1xyXG4gICAgZWxzZSBpZihleHByZXNzaW9uICE9IG51bGwpe1xyXG5cdCAgICBsZXQgZGF0YSA9IFJlc29sdmVyLnJlc29sdmUoYW5FeHByZXNzaW9uLCBhQ29udGV4dCwgbnVsbCk7XHJcblx0ICAgIGlmKGRhdGEgPT0gbnVsbClcclxuXHQgICAgXHRyZXR1cm4gYUNvbnRleHQ7XHJcblx0ICAgIGVsc2UgaWYgKGRhdGEgaW5zdGFuY2VvZiBBcnJheSlcclxuXHRcdCAgICByZXR1cm4gbGlzdChkYXRhLCBhVmFybmFtZSwgYVN0YXR1c25hbWUsIGFDb250ZXh0LCBhVGVtcGxhdGUpO1xyXG5cdCAgICBlbHNlIGlmKGRhdGEgaW5zdGFuY2VvZiBPYmplY3QpXHJcblx0ICAgIFx0cmV0dXJuIG1hcChkYXRhLCBhVmFybmFtZSwgYVN0YXR1c25hbWUsIGFDb250ZXh0LCBhVGVtcGxhdGUpO1x0XHRcdFx0ICAgXHJcblx0ICAgIGVsc2VcclxuXHRcdCAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxufTtcclxuXHJcblxyXG5jb25zdCBUYXNrID0ge1xyXG5cdGlkIDogXCJmb3JlYWNoXCIsXHJcblx0YWNjZXB0IDogZnVuY3Rpb24oYUNvbnRleHQpe1xyXG5cdFx0cmV0dXJuIGFDb250ZXh0LmVsZW1lbnQuaXMoXCJbanN0bC1mb3JlYWNoXVwiKTtcclxuXHR9LFxyXG5cdGV4ZWN1dGUgOiBmdW5jdGlvbihhQ29udGV4dCl7XHRcdFxyXG5cdFx0Y29uc3QgZWxlbWVudCA9IGFDb250ZXh0LmVsZW1lbnQ7XHJcblx0XHRjb25zdCB0ZW1wbGF0ZSA9IGdldFRlbXBsYXRlKGFDb250ZXh0LmVsZW1lbnQpO1xyXG5cdCAgICBpZiAodHlwZW9mIHRlbXBsYXRlICE9PSAndW5kZWZpbmVkJykge1xyXG5cdCAgICBcdGNvbnN0IGV4cHJlc3Npb24gPSBlbGVtZW50LmF0dHIoQVRUUklCVVRFLkRBVEEpIHx8IG51bGw7XHJcblx0ICAgIFx0Y29uc3QgdmFybmFtZSA9IGVsZW1lbnQuYXR0cihBVFRSSUJVVEUuVkFSTkFNRSkgfHwgXCJpdGVtVmFyXCI7IFxyXG5cdFx0ICAgIGNvbnN0IHN0YXR1c25hbWUgPSBlbGVtZW50LmF0dHIoQVRUUklCVVRFLlNUQVRVU1ZBUk5BTUUpIHx8IFwic3RhdHVzVmFyXCI7XHJcblx0XHQgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShleGVjdXRlKGV4cHJlc3Npb24sIHZhcm5hbWUsIHN0YXR1c25hbWUsIGFDb250ZXh0LCB0ZW1wbGF0ZSkpXHJcblx0XHQgICAgLnRoZW4oZnVuY3Rpb24oYUNvbnRlbnQpe1xyXG5cdFx0ICAgIFx0Y29uc29sZS5sb2coXCJmb3JlYWNoIGNvbnRlbnQ6XCIsIGFDb250ZW50KTtcclxuXHRcdCAgICBcdFxyXG5cdFx0ICAgIFx0aWYodHlwZW9mIGFDb250ZW50ID09PSBcInVuZGVmaW5lZFwiKVxyXG5cdFx0ICAgIFx0XHRyZXR1cm4gW107XHJcblx0XHQgICAgXHRcclxuXHRcdCAgICBcdGNvbnN0IHJlc3VsdCA9IFtdO1xyXG5cdCAgICBcdFx0YUNvbnRlbnQuZm9yRWFjaChmdW5jdGlvbihhSXRlbSl7XHJcblx0ICAgIFx0XHRcdGlmKHR5cGVvZiBhSXRlbSAhPT0gXCJ1bmRlZmluZWRcIilcclxuXHRcdCAgICBcdFx0XHRhSXRlbS5mb3JFYWNoKGZ1bmN0aW9uKGFOb2RlKXtcclxuXHRcdCAgICBcdFx0XHRcdGlmKHR5cGVvZiBhTm9kZSAhPT0gXCJ1bmRlZmluZWRcIilcclxuXHRcdCAgICBcdFx0XHRcdFx0cmVzdWx0LnB1c2goYU5vZGUpO1xyXG5cdFx0ICAgIFx0XHRcdH0pO1xyXG5cdCAgICBcdFx0fSk7XHJcblx0XHQgICAgXHRcclxuXHRcdCAgICBcdHJldHVybiByZXN1bHQ7XHJcblx0XHQgICAgfSkudGhlbihmdW5jdGlvbihhQ29udGVudCl7XHJcblx0XHQgICAgXHRlbGVtZW50LmVtcHR5KCk7XHJcblx0XHQgICAgXHRpZihhQ29udGVudCAhPSBudWxsKVxyXG5cdFx0ICAgIFx0XHRlbGVtZW50LmFwcGVuZChhQ29udGVudClcclxuXHRcdCAgICBcdFx0XHJcblx0XHQgICAgXHRhQ29udGV4dC5leGl0ID0gdHJ1ZTtcclxuXHRcdCAgICBcdHJldHVybiBhQ29udGV4dDtcdFx0ICAgIFx0XHJcblx0XHQgICAgfSlbXCJjYXRjaFwiXShjb25zb2xlLmVycm9yKTtcclxuXHQgICAgfVxyXG5cdCAgICBcclxuXHRcdHJldHVybiBhQ29udGV4dDtcclxuXHR9XHJcbn07XHJcblxyXG5Qcm9jZXNzb3IuYWRkVGFzayhUYXNrLCBDb25zdGFudHMuUEhBU0UuTUFOSVBVTEFUSU9OKTsiLCJpbXBvcnQgZWwgZnJvbSBcIkBkZWZhdWx0LWpzL2RlZmF1bHRqcy1leHByZXNzaW9uLWxhbmd1YWdlXCI7XHJcbmltcG9ydCBDb25zdGFudHMgZnJvbSBcIi4uL0NvbnN0YW50c1wiO1xyXG5pbXBvcnQgUHJvY2Vzc29yIGZyb20gXCIuLi9Qcm9jZXNzb3JcIjtcclxuXHJcbmNvbnN0IFJlc29sdmVyID0gZWwuRXhwcmVzc2lvblJlc29sdmVyO1xyXG5jb25zdCBBVFRSSUJVVEUgPSBcImpzdGwtaWZcIjtcclxuY29uc3QgVGFzayA9IHtcclxuXHRpZCA6IFwiaWZcIixcclxuXHRhY2NlcHQgOiBmdW5jdGlvbihhQ29udGV4dCl7XHRcdFxyXG5cdFx0cmV0dXJuIFByb21pc2UucmVzb2x2ZShhQ29udGV4dC5lbGVtZW50LmlzKFwiW2pzdGwtaWZdXCIpKTtcclxuXHR9LFxyXG5cdGV4ZWN1dGUgOiBmdW5jdGlvbihhQ29udGV4dCl7XHJcblx0XHRjb25zdCBleHByZXNzaW9uID0gYUNvbnRleHQuZWxlbWVudC5hdHRyKFwianN0bC1pZlwiKTtcclxuXHRcdHJldHVybiBSZXNvbHZlci5yZXNvbHZlKGV4cHJlc3Npb24sIGFDb250ZXh0LmRhdGEsIGZhbHNlKVxyXG5cdFx0LnRoZW4oZnVuY3Rpb24oYVJlc3VsdCl7XHJcblx0XHRcdGlmKCFhUmVzdWx0KVxyXG5cdFx0XHRcdGFDb250ZXh0LmVsZW1lbnQucmVtb3ZlKCk7XHJcblx0XHRcdFxyXG5cdFx0XHRhQ29udGV4dC5leGl0ID0gISFhUmVzdWx0O1xyXG5cdFx0XHRyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGFDb250ZXh0KTtcclxuXHRcdH0pO1xyXG5cdH1cclxufTtcclxuXHJcblByb2Nlc3Nvci5hZGRUYXNrKFRhc2ssIENvbnN0YW50cy5QSEFTRS5DT05ESVRJT04pOyIsImltcG9ydCBDb25zdGFudHMgZnJvbSBcIi4uL0NvbnN0YW50c1wiO1xyXG5pbXBvcnQgUHJvY2Vzc29yIGZyb20gXCIuLi9Qcm9jZXNzb3JcIjtcclxuXHJcbmNvbnN0IFRhc2sgPSB7XHJcblx0aWQgOiBcImluY2x1ZGVcIixcclxuXHRhY2NlcHQgOiBmdW5jdGlvbihhQ29udGV4dCl7XHJcblx0XHRyZXR1cm4gZmFsc2U7XHJcblx0fSxcclxuXHRleGVjdXRlIDogZnVuY3Rpb24oYUNvbnRleHQpe1xyXG5cdFx0cmV0dXJuIFByb21pc2UucmVzb2x2ZShhQ29udGV4dCk7XHJcblx0fVxyXG59O1xyXG5cclxuUHJvY2Vzc29yLmFkZFRhc2soVGFzaywgQ29uc3RhbnRzLlBIQVNFLkNPTlRFWFQpOyIsImltcG9ydCBlbCBmcm9tIFwiQGRlZmF1bHQtanMvZGVmYXVsdGpzLWV4cHJlc3Npb24tbGFuZ3VhZ2VcIjtcclxuaW1wb3J0IENvbnN0YW50cyBmcm9tIFwiLi4vQ29uc3RhbnRzXCI7XHJcbmltcG9ydCBQcm9jZXNzb3IgZnJvbSBcIi4uL1Byb2Nlc3NvclwiO1xyXG5pbXBvcnQgU3RyaW5nVXRpbHMgZnJvbSBcIi4uL3V0aWxzL1N0cmluZ1V0aWxzXCI7XHJcblxyXG5jb25zdCBSZXNvbHZlciA9IGVsLkV4cHJlc3Npb25SZXNvbHZlcjtcclxuXHJcbmNvbnN0IG5vcm1hbGl6ZSA9IGZ1bmN0aW9uKGFOb2RlKSB7XHJcbiAgICBpZiAoYU5vZGUpIHtcclxuXHQgICAgaWYgKGFOb2RlLm5vZGVUeXBlID09IDMpIHtcclxuXHRcdCAgICBsZXQgdGV4dCA9IGFOb2RlLnRleHRDb250ZW50O1xyXG5cdFx0ICAgIHdoaWxlIChhTm9kZS5uZXh0U2libGluZyAmJiBhTm9kZS5uZXh0U2libGluZy5ub2RlVHlwZSA9PSAzKSB7XHJcblx0XHRcdCAgICB0ZXh0ICs9IGFOb2RlLm5leHRTaWJsaW5nLnRleHRDb250ZW50O1xyXG5cdFx0XHQgICAgYU5vZGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChhTm9kZS5uZXh0U2libGluZyk7XHJcblx0XHQgICAgfVxyXG5cdFx0ICAgIGFOb2RlLnRleHRDb250ZW50ID0gdGV4dDtcclxuXHQgICAgfSBlbHNlXHJcblx0XHQgICAgbm9ybWFsaXplKGFOb2RlLmZpcnN0Q2hpbGQpO1xyXG5cdCAgICBcclxuXHQgICAgbm9ybWFsaXplKGFOb2RlLm5leHRTaWJsaW5nKTtcclxuICAgIH1cclxufTtcclxuXHJcbmNvbnN0IENPTlRFTlRUWVBFID0ge1xyXG4gICAgXCJodG1sXCIgOiBmdW5jdGlvbihhTm9kZSwgYVRleHQsIGFDb250ZXh0KSB7XHJcbiAgICAgICAgYUNvbnRleHQuZWxlbWVudC5yZXBsYWNlQ2hpbGQoYU5vZGUsIGNyZWF0ZShhVGV4dCkpO1xyXG4gICAgfSxcclxuICAgIFwianNvblwiIDogZnVuY3Rpb24oYU5vZGUsIGFUZXh0LCBhQ29udGV4dCkge1xyXG4gICAgICAgIGlmICh0eXBlb2YgYVRleHQgPT09IFwic3RyaW5nXCIpXHJcbiAgICAgICAgXHRhTm9kZS50ZXh0Q29udGVudCA9IGFUZXh0O1xyXG4gICAgICAgIGVsc2VcclxuICAgICAgICBcdGFOb2RlLnRleHRDb250ZW50ID0gSlNPTi5zdHJpbmdpZnkoYVRleHQpO1xyXG4gICAgfSxcclxuICAgIFwidGV4dFwiIDogZnVuY3Rpb24oYU5vZGUsIGFUZXh0LCBhQ29udGV4dCkge1xyXG4gICAgICAgIGxldCB0ZXh0ID0gYVRleHQ7XHJcbiAgICAgICAgbGV0IGFkZEFzSHRtbCA9IGZhbHNlO1xyXG5cclxuICAgICAgICBQcm9taXNlLmFsbChbXHJcbiAgICAgICAgXHRSZXNvbHZlci5yZXNvbHZlKGFDb250ZXh0LmVsZW1lbnQuYXR0cihcImpzdGwtdGV4dC1wcmV2ZW50LWZvcm1hdFwiKSwgYUNvbnRleHQuZGF0YSwgZmFsc2UpLFxyXG4gICAgICAgIFx0UmVzb2x2ZXIucmVzb2x2ZShhQ29udGV4dC5lbGVtZW50LmF0dHIoXCJqc3RsLXRleHQtdHJpbS1sZW5ndGhcIiksIGFDb250ZXh0LmRhdGEsIDApLFxyXG4gICAgICAgIF0pLnRoZW4oZnVuY3Rpb24oYVJlc3VsdHMpe1xyXG4gICAgICAgIFx0Y29uc3QgcHJldmVudEZvcm1hdCA9ICEhYVJlc3VsdHNbMF07XHJcbiAgICAgICAgXHRjb25zdCBtYXhMZW5ndGggPSBhUmVzdWx0c1sxXTtcclxuICAgICAgICBcdFxyXG4gICAgICAgIFx0aWYobWF4TGVuZ3RoID4gMClcclxuICAgICAgICBcdFx0dGV4dCA9IFN0cmluZ1V0aWxzLnRyaW1UZXh0TGVuZ3RoKHRleHQsIG1heExlbmd0aCk7ICAgICAgICBcdFxyXG4gICAgICAgIFx0aWYocHJldmVudEZvcm1hdClcclxuICAgICAgICBcdFx0dGV4dCA9IFN0cmluZ1V0aWxzLmZvcm1hdFRvSHRtbCh0ZXh0KVxyXG4gICAgICAgIFx0XHRcclxuICAgICAgICBcdFx0XHJcbiAgICBcdFx0IGlmIChwcmV2ZW50Rm9ybWF0KVxyXG4gICAgXHRcdFx0IGFDb250ZXh0LmVsZW1lbnQucmVwbGFjZUNoaWxkKGFOb2RlLCBjcmVhdGUodGV4dCkpO1xyXG4gICAgXHRcdCBlbHNlXHJcbiAgICBcdFx0XHQgYU5vZGUudGV4dENvbnRlbnQgPSB0ZXh0O1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59O1xyXG5cclxuQ09OVEVOVFRZUEVbXCJ0ZXh0L2h0bWxcIl0gPSBDT05URU5UVFlQRVtcImh0bWxcIl07XHJcbkNPTlRFTlRUWVBFW1wiYXBwbGljYXRpb24vanNvblwiXSA9IENPTlRFTlRUWVBFW1wianNvblwiXTtcclxuQ09OVEVOVFRZUEVbXCJ0ZXh0L3BsYWluXCJdID0gQ09OVEVOVFRZUEVbXCJ0ZXh0XCJdO1xyXG5cclxuXHJcblxyXG5jb25zdCBUYXNrID0ge1xyXG5cdGlkIDogXCJ0ZXh0XCIsXHJcblx0YWNjZXB0IDogZnVuY3Rpb24oYUNvbnRleHQpe1xyXG5cdFx0cmV0dXJuICFhQ29udGV4dC5lbGVtZW50LmlzKFwiW2pzdGwtdGV4dC1pZ25vcmVdXCIpO1xyXG5cdH0sXHJcblx0ZXhlY3V0ZSA6IGZ1bmN0aW9uKGFDb250ZXh0KXtcclxuXHRcdGNvbnN0IHR5cGUgPSBhQ29udGV4dC5lbGVtZW50LmF0dHIoXCJqc3RsLXRleHQtY29udGVudC10eXBlXCIpIHx8IFwidGV4dFwiO1xyXG5cdFx0aWYodHlwZW9mIENPTlRFTlRUWVBFW3R5cGVdID09PSBcInVuZGVmaW5lZFwiKVxyXG5cdFx0XHRyZXR1cm47XHJcblx0XHRcclxuXHRcdGNvbnN0IHByb21pc2VzID0gW107XHRcdFxyXG5cdFx0bm9ybWFsaXplKGFDb250ZXh0LmVsZW1lbnQpO1xyXG5cdFx0QXJyYXkuZnJvbShhQ29udGV4dC5lbGVtZW50LmNoaWxkTm9kZXMgfHwgW10pXHJcblx0XHQuZmlsdGVyKGZ1bmN0aW9uKGFOb2RlKSB7XHJcblx0XHRcdHJldHVybiAoYU5vZGUubm9kZVR5cGUgPT09IDMgfHwgYU5vZGUubm9kZVR5cGUgPT09IDQpICYmIHR5cGVvZiBhTm9kZS50ZXh0Q29udGVudCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBhTm9kZS50ZXh0Q29udGVudC50cmltKCkubGVuZ3RoID4gMDtcclxuXHRcdH0pLmZvckVhY2goZnVuY3Rpb24oYU5vZGUpIHtcclxuXHRcdCAgICBsZXQgdGV4dCA9IGFOb2RlLnRleHRDb250ZW50O1xyXG5cdFx0ICAgIGlmICh0ZXh0KSB7XHJcblx0XHQgICAgXHRjb25zb2xlLmxvZyhcInJlc29sdmUgdGV4dDpcIiwgdGV4dCwgXCJjb250ZXh0OlwiLCBhQ29udGV4dC5kYXRhKTtcclxuXHRcdCAgICBcdHByb21pc2VzLnB1c2goXHJcblx0XHRcdFx0ICAgIFJlc29sdmVyLnJlc29sdmVUZXh0KHRleHQsIGFDb250ZXh0LmRhdGEpXHJcblx0XHRcdFx0ICAgIC50aGVuKGZ1bmN0aW9uKGFUZXh0KXtcclxuXHRcdFx0XHRcdFx0cmV0dXJuIENPTlRFTlRUWVBFW3R5cGVdKGFOb2RlLCBhVGV4dCwgYUNvbnRleHQpO1xyXG5cdFx0XHRcdCAgICB9KVxyXG5cdFx0XHQgICAgKTtcclxuXHRcdFx0ICAgIFxyXG5cdFx0ICAgIH1cclxuXHQgICAgfSk7XHRcdFxyXG5cdFx0XHJcblx0XHRyZXR1cm4gUHJvbWlzZS5hbGwocHJvbWlzZXMpXHJcblx0XHQudGhlbihmdW5jdGlvbigpe1xyXG5cdFx0XHRyZXR1cm4gYUNvbnRleHQ7XHJcblx0XHR9KTtcclxuXHR9XHJcbn07XHJcblxyXG5Qcm9jZXNzb3IuYWRkVGFzayhUYXNrLCBDb25zdGFudHMuUEhBU0UuQ09OVEVOVCk7IiwiaW1wb3J0IFwiLi9Bc3luY1wiO1xyXG5pbXBvcnQgXCIuL0FkZEF0dHJpYnV0ZVwiO1xyXG5pbXBvcnQgXCIuL0F0dHJpYnV0ZVwiO1xyXG5pbXBvcnQgXCIuL0Nob29zZVwiO1xyXG5pbXBvcnQgXCIuL0RhdGFcIjtcclxuaW1wb3J0IFwiLi9Gb3JlYWNoXCI7XHJcbmltcG9ydCBcIi4vSWZcIjtcclxuaW1wb3J0IFwiLi9JbmNsdWRlXCI7XHJcbmltcG9ydCBcIi4vVGV4dFwiO1xyXG5pbXBvcnQgXCIuL0NoaWxkcmVuXCI7IiwiaW1wb3J0IE9iamVjdFV0aWxzIGZyb20gXCJAZGVmYXVsdC1qcy9kZWZhdWx0anMtY29tbW9uLXV0aWxzL3NyYy9PYmplY3RVdGlsc1wiO1xyXG5cclxuY29uc3QgREVGQVVMVFMgPSB7XHJcblx0Zm9ybWF0VG9IdG1sIDoge1xyXG5cdFx0XCJ0YWJzaXplXCIgOiA0LFxyXG5cdFx0XCJ0YWJjaGFyXCIgOiBcIiZuYnNwO1wiLFxyXG5cdFx0XCJuZXdsaW5lVGFnXCIgOiBcIjxici8+XCJcclxuXHR9LFxyXG5cclxuXHR0cmltVGV4dExlbmd0aCA6IHtcclxuXHRcdFwicG9zdGZpeFwiIDogXCIuLi5cIlxyXG5cdH1cclxufTtcclxuY29uc3QgU3RyaW5nVXRpbHMgPSB7XHJcblx0REVGQVVMVFMgOiBERUZBVUxUUyxcclxuXHR0cmltVGV4dExlbmd0aCA6IGZ1bmN0aW9uKGFUZXh0LCBtYXhMZW5ndGgsIHRoZVNldHRpbmdzKSB7XHJcblx0XHRpZiAoYVRleHQgPT0gdW5kZWZpbmVkIHx8IHR5cGVvZiBhVGV4dCAhPT0gXCJzdHJpbmdcIiB8fCBhVGV4dCA9PSBcIlwiKVxyXG5cdFx0XHRyZXR1cm4gYVRleHQ7XHJcblxyXG5cdFx0bGV0IHNldHRpbmdzID0gT2JqZWN0VXRpbHMubWVncmUoe30sIHRoZVNldHRpbmdzLCBERUZBVUxUUy50cmltVGV4dExlbmd0aCk7XHJcblxyXG5cdFx0aWYgKGFUZXh0Lmxlbmd0aCA+IG1heExlbmd0aCkge1xyXG5cdFx0XHRsZXQgZW5kID0gbWF4TGVuZ3RoIC0gc2V0dGluZ3MucG9zdGZpeC5sZW5ndGg7XHJcblx0XHRcdGlmICgoYVRleHQubGVuZ3RoIC0gZW5kKSA+IDApXHJcblx0XHRcdFx0cmV0dXJuIGFUZXh0LnN1YnN0cmluZygwLCBlbmQpLnRyaW0oKSArIHNldHRpbmdzLnBvc3RmaXg7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gYVRleHQ7XHJcblx0fSxcclxuXHRmb3JtYXRUb0h0bWwgOiBmdW5jdGlvbihhVGV4dCwgdGhlU2V0dGluZ3MpIHtcclxuXHRcdGlmIChhVGV4dCA9PSB1bmRlZmluZWQgfHwgdHlwZW9mIGFUZXh0ICE9PSBcInN0cmluZ1wiIHx8IGFUZXh0ID09IFwiXCIpXHJcblx0XHRcdHJldHVybiBhVGV4dDtcclxuXHRcdGxldCBzZXR0aW5ncyA9IE9iamVjdFV0aWxzLm1lcmdlKHt9LCB0aGVTZXR0aW5ncyAsREVGQVVMVFMuZm9ybWF0VG9IdG1sKTtcclxuXHRcdGxldCBsaW5lcyA9IGFUZXh0LnJlcGxhY2UoL1xcblxcci9nLCBcIlxcblwiKS5yZXBsYWNlKC9cXHIvZywgXCJcXG5cIikuc3BsaXQoXCJcXG5cIik7XHJcblx0XHRsZXQgdGV4dCA9IFwiXCI7XHJcblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IGxpbmVzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdGlmIChpICE9IDApXHJcblx0XHRcdFx0dGV4dCA9IHRleHQgKyBzZXR0aW5ncy5uZXdsaW5lVGFnO1xyXG5cdFx0XHR0ZXh0ID0gdGV4dFx0KyBTdHJpbmdVdGlscy5wcmV2ZW50VGFicyhsaW5lc1tpXSwgc2V0dGluZ3MudGFic2l6ZSwgc2V0dGluZ3MudGFiY2hhcik7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gdGV4dDtcclxuXHR9LFxyXG5cdGdldFRhYlN0b3BNYXAgOiBmdW5jdGlvbih0YWJTaXplLCB0YWJTdHJpbmcpIHtcclxuXHRcdGxldCB0YWJzdG9wTWFwID0gW107XHJcblx0XHRmb3IgKGxldCBpID0gMDsgaSA8PSB0YWJTaXplOyBpKyspIHtcclxuXHRcdFx0aWYgKGkgPT0gMClcclxuXHRcdFx0XHR0YWJzdG9wTWFwWzBdID0gXCJcIjtcclxuXHRcdFx0ZWxzZVxyXG5cdFx0XHRcdHRhYnN0b3BNYXBbaV0gPSB0YWJzdG9wTWFwW2kgLSAxXSArIHRhYlN0cmluZztcclxuXHRcdH1cclxuXHJcblx0XHRyZXR1cm4gdGFic3RvcE1hcDtcclxuXHR9LFxyXG5cdHByZXZlbnRUYWJzIDogZnVuY3Rpb24oYVRleHQsIHRoZVRhYlN0b3BzLCB0aGVUYWJTdG9wQ2hhcikge1xyXG5cdFx0bGV0IHRhYnN0b3BNYXAgPSBTdHJpbmdVdGlscy5nZXRUYWJTdG9wTWFwKHRoZVRhYlN0b3BzLCB0aGVUYWJTdG9wQ2hhcik7XHJcblx0XHRsZXQgdGFiU3RvcHMgPSB0aGVUYWJTdG9wcztcclxuXHRcdGxldCB0ZXh0ID0gXCJcIjtcclxuXHRcdGxldCB0YWJzID0gYVRleHQuc3BsaXQoXCJcXHRcIik7XHJcblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHRhYnMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0aWYgKHRhYnNbaV0ubGVuZ3RoICE9IDAgJiYgaSAhPSAwKSB7XHJcblx0XHRcdFx0bGV0IHNpemUgPSB0ZXh0Lmxlbmd0aDtcclxuXHRcdFx0XHRsZXQgdGFiU2l6ZSA9IHNpemUgJSB0YWJTdG9wcztcclxuXHRcdFx0XHR0ZXh0ID0gdGV4dCArIHRhYnN0b3BNYXBbdGhlVGFiU3RvcHMgLSB0YWJTaXplXSArIHRhYnNbaV07XHJcblx0XHRcdH0gZWxzZSBpZiAodGFic1tpXS5sZW5ndGggPT0gMCAmJiBpICE9IDApXHJcblx0XHRcdFx0dGV4dCA9IHRleHQgKyB0YWJzdG9wTWFwW3RoZVRhYlN0b3BzXTtcclxuXHRcdFx0ZWxzZVxyXG5cdFx0XHRcdHRleHQgPSB0ZXh0ICsgdGFic1tpXTtcclxuXHRcdH1cclxuXHJcblx0XHRyZXR1cm4gdGV4dDtcclxuXHR9LFxyXG5cdGZvcm1hdCA6IGZ1bmN0aW9uKGFUZXh0LCBhcmdzKSB7XHJcblx0XHRsZXQgb2JqZWN0cyA9IGFyZ3VtZW50cztcclxuXHRcdHJldHVybiBhVGV4dC5yZXBsYWNlKC97LT9bMC05XSt9L2csIGZ1bmN0aW9uKGl0ZW0pIHtcclxuXHRcdFx0bGV0IGluZGV4ID0gcGFyc2VJbnQoaXRlbS5zdWJzdHJpbmcoMSwgaXRlbS5sZW5ndGggLSAxKSkgKyAxO1xyXG5cdFx0XHRsZXQgcmVwbGFjZTtcclxuXHRcdFx0aWYgKGluZGV4ID4gMCAmJiBpbmRleCA8IG9iamVjdHMubGVuZ3RoKSB7XHJcblx0XHRcdFx0cmVwbGFjZSA9IG9iamVjdHNbaW5kZXhdO1xyXG5cdFx0XHRcdGlmICh0eXBlb2YgcmVwbGFjZSAhPT0gXCJzdHJpbmdcIilcclxuXHRcdFx0XHRcdHJlcGxhY2UgPSBKU09OLnN0cmluZ2lmeShyZXBsYWNlKTtcclxuXHRcdFx0fSBlbHNlIGlmIChpbmRleCA9PT0gLTEpIHtcclxuXHRcdFx0XHRyZXBsYWNlID0gXCJ7XCI7XHJcblx0XHRcdH0gZWxzZSBpZiAoaW5kZXggPT09IC0yKSB7XHJcblx0XHRcdFx0cmVwbGFjZSA9IFwifVwiO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHJlcGxhY2UgPSBcIlwiO1xyXG5cdFx0XHR9XHJcblx0XHRcdHJldHVybiByZXBsYWNlO1xyXG5cdFx0fSk7XHJcblx0fVxyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBTdHJpbmdVdGlsczsiXSwic291cmNlUm9vdCI6IiJ9