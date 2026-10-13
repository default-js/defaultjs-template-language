/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@default-js/defaultjs-extdom/index.js"
/*!************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-extdom/index.js ***!
  \************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src */ "./node_modules/@default-js/defaultjs-extdom/src/index.js");


/***/ },

/***/ "./node_modules/@default-js/defaultjs-extdom/src/Global.js"
/*!*****************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-extdom/src/Global.js ***!
  \*****************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_Utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/Utils */ "./node_modules/@default-js/defaultjs-extdom/src/utils/Utils.js");
/* harmony import */ var _dom_extentions_ReadyEventSupport__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom/extentions/ReadyEventSupport */ "./node_modules/@default-js/defaultjs-extdom/src/dom/extentions/ReadyEventSupport.js");



_utils_Utils__WEBPACK_IMPORTED_MODULE_0__.GLOBAL.defaultjs = _utils_Utils__WEBPACK_IMPORTED_MODULE_0__.GLOBAL.defaultjs || {};
_utils_Utils__WEBPACK_IMPORTED_MODULE_0__.GLOBAL.defaultjs.extdom = _utils_Utils__WEBPACK_IMPORTED_MODULE_0__.GLOBAL.defaultjs.extdom || {
	VERSION : "2.0.0",
	READYEVENT : _dom_extentions_ReadyEventSupport__WEBPACK_IMPORTED_MODULE_1__.READYEVENT,
	utils : {
		Utils: _utils_Utils__WEBPACK_IMPORTED_MODULE_0__["default"]
	}
};

_utils_Utils__WEBPACK_IMPORTED_MODULE_0__.GLOBAL.find = function() {
	return document.find.apply(document, arguments);
};

_utils_Utils__WEBPACK_IMPORTED_MODULE_0__.GLOBAL.ready = function() {
	return document.ready.apply(document, arguments);
};

_utils_Utils__WEBPACK_IMPORTED_MODULE_0__.GLOBAL.create = function(aContent, asTemplate) {
	if (typeof arguments[0] !== "string")
		throw new Error("The first argument must be a string!");
	
	const template = document.createElement("template");
	template.innerHTML = aContent;
	if(asTemplate)
		return template;
	
	return document.importNode(template.content, true).childNodes;
};

_utils_Utils__WEBPACK_IMPORTED_MODULE_0__.GLOBAL.script = function(aFile, aTarget) {
	if(aFile instanceof Array)
		return Promise.all(aFile.map(file => _utils_Utils__WEBPACK_IMPORTED_MODULE_0__.GLOBAL.script(file, aTarget)));
	
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

/***/ },

/***/ "./node_modules/@default-js/defaultjs-extdom/src/dom/Document.js"
/*!***********************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-extdom/src/dom/Document.js ***!
  \***********************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_ExtendPrototype__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/ExtendPrototype */ "./node_modules/@default-js/defaultjs-extdom/src/utils/ExtendPrototype.js");
/* harmony import */ var _extentions_QuerySupport__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./extentions/QuerySupport */ "./node_modules/@default-js/defaultjs-extdom/src/dom/extentions/QuerySupport.js");
/* harmony import */ var _extentions_ReadyEventSupport__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./extentions/ReadyEventSupport */ "./node_modules/@default-js/defaultjs-extdom/src/dom/extentions/ReadyEventSupport.js");
/**
 * Adds query and ready functions to Document, and triggers the ready event.
 *
 * The event is triggered once the dom is parsed. A ready function registered
 * after that is not lost, as ready() triggers the event again when the document
 * is already complete.
 */




(0,_utils_ExtendPrototype__WEBPACK_IMPORTED_MODULE_0__["default"])(Document, _extentions_QuerySupport__WEBPACK_IMPORTED_MODULE_1__["default"], _extentions_ReadyEventSupport__WEBPACK_IMPORTED_MODULE_2__["default"]);

document.addEventListener("DOMContentLoaded", () => document.trigger(_extentions_ReadyEventSupport__WEBPACK_IMPORTED_MODULE_2__.READYEVENT));





/***/ },

/***/ "./node_modules/@default-js/defaultjs-extdom/src/dom/DocumentFragment.js"
/*!*******************************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-extdom/src/dom/DocumentFragment.js ***!
  \*******************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_ExtendPrototype__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/ExtendPrototype */ "./node_modules/@default-js/defaultjs-extdom/src/utils/ExtendPrototype.js");
/* harmony import */ var _extentions_QuerySupport__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./extentions/QuerySupport */ "./node_modules/@default-js/defaultjs-extdom/src/dom/extentions/QuerySupport.js");
/* harmony import */ var _extentions_ManipulationSupport__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./extentions/ManipulationSupport */ "./node_modules/@default-js/defaultjs-extdom/src/dom/extentions/ManipulationSupport.js");
/**
 * Adds query and content functions to DocumentFragment.
 *
 * A ShadowRoot is a DocumentFragment, so a shadow root can be searched and filled
 * the same way as the fragment create() returns.
 */




(0,_utils_ExtendPrototype__WEBPACK_IMPORTED_MODULE_0__["default"])(DocumentFragment, _extentions_QuerySupport__WEBPACK_IMPORTED_MODULE_1__["default"], _extentions_ManipulationSupport__WEBPACK_IMPORTED_MODULE_2__["default"]);






/***/ },

/***/ "./node_modules/@default-js/defaultjs-extdom/src/dom/Element.js"
/*!**********************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-extdom/src/dom/Element.js ***!
  \**********************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_ExtendPrototype__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/ExtendPrototype */ "./node_modules/@default-js/defaultjs-extdom/src/utils/ExtendPrototype.js");
/* harmony import */ var _extentions_QuerySupport__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./extentions/QuerySupport */ "./node_modules/@default-js/defaultjs-extdom/src/dom/extentions/QuerySupport.js");
/* harmony import */ var _extentions_AttributeSupport__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./extentions/AttributeSupport */ "./node_modules/@default-js/defaultjs-extdom/src/dom/extentions/AttributeSupport.js");
/* harmony import */ var _extentions_ManipulationSupport__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./extentions/ManipulationSupport */ "./node_modules/@default-js/defaultjs-extdom/src/dom/extentions/ManipulationSupport.js");
/**
 * Adds query, attribute and content functions to Element.
 *
 * Query and attribute functions need a selectable node, which is why they sit
 * here and not on Node. ManipulationSupport is applied again although Element
 * inherits it from Node - that puts the functions on Element as own properties,
 * where the extensions of the more specific html types can find them.
 */





(0,_utils_ExtendPrototype__WEBPACK_IMPORTED_MODULE_0__["default"])(Element,_extentions_QuerySupport__WEBPACK_IMPORTED_MODULE_1__["default"], _extentions_AttributeSupport__WEBPACK_IMPORTED_MODULE_2__["default"], _extentions_ManipulationSupport__WEBPACK_IMPORTED_MODULE_3__["default"]);

/***/ },

/***/ "./node_modules/@default-js/defaultjs-extdom/src/dom/EventTarget.js"
/*!**************************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-extdom/src/dom/EventTarget.js ***!
  \**************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_ExtendPrototype__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/ExtendPrototype */ "./node_modules/@default-js/defaultjs-extdom/src/utils/ExtendPrototype.js");
/* harmony import */ var _extentions_EventSupport__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./extentions/EventSupport */ "./node_modules/@default-js/defaultjs-extdom/src/dom/extentions/EventSupport.js");
/**
 * Adds the event functions to EventTarget.
 *
 * EventTarget is the root of everything dispatching events, not only of the dom,
 * so on(), removeOn() and trigger() are available on every node, on the document
 * and on the window alike.
 */



(0,_utils_ExtendPrototype__WEBPACK_IMPORTED_MODULE_0__["default"])(EventTarget, _extentions_EventSupport__WEBPACK_IMPORTED_MODULE_1__["default"]);

/***/ },

/***/ "./node_modules/@default-js/defaultjs-extdom/src/dom/HTMLElement.js"
/*!**************************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-extdom/src/dom/HTMLElement.js ***!
  \**************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_ExtendPrototype__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/ExtendPrototype */ "./node_modules/@default-js/defaultjs-extdom/src/utils/ExtendPrototype.js");
/* harmony import */ var _extentions_HtmlClassSupport__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./extentions/HtmlClassSupport */ "./node_modules/@default-js/defaultjs-extdom/src/dom/extentions/HtmlClassSupport.js");
/* harmony import */ var _extentions_ShowHideSupport__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./extentions/ShowHideSupport */ "./node_modules/@default-js/defaultjs-extdom/src/dom/extentions/ShowHideSupport.js");
/**
 * Adds class and visibility functions to HTMLElement.
 *
 * Both work on the style and the classList of a html element, which is why they
 * sit here and not on Element - an svg element has neither in the same way.
 */





(0,_utils_ExtendPrototype__WEBPACK_IMPORTED_MODULE_0__["default"])(HTMLElement, _extentions_HtmlClassSupport__WEBPACK_IMPORTED_MODULE_1__["default"], _extentions_ShowHideSupport__WEBPACK_IMPORTED_MODULE_2__["default"]);

/***/ },

/***/ "./node_modules/@default-js/defaultjs-extdom/src/dom/HTMLInputElement.js"
/*!*******************************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-extdom/src/dom/HTMLInputElement.js ***!
  \*******************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_ExtendPrototype__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/ExtendPrototype */ "./node_modules/@default-js/defaultjs-extdom/src/utils/ExtendPrototype.js");
/* harmony import */ var _extentions_ValueSupport__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./extentions/ValueSupport */ "./node_modules/@default-js/defaultjs-extdom/src/dom/extentions/ValueSupport.js");
/**
 * Adds val() to HTMLInputElement.
 *
 * ValueSupport picks the handling by the type of the input, so a checkbox and a
 * radio are read by their checked state while every other input is read by its
 * value.
 */




(0,_utils_ExtendPrototype__WEBPACK_IMPORTED_MODULE_0__["default"])(HTMLInputElement,_extentions_ValueSupport__WEBPACK_IMPORTED_MODULE_1__["default"]);

/***/ },

/***/ "./node_modules/@default-js/defaultjs-extdom/src/dom/HTMLSelectElement.js"
/*!********************************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-extdom/src/dom/HTMLSelectElement.js ***!
  \********************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_ExtendPrototype__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/ExtendPrototype */ "./node_modules/@default-js/defaultjs-extdom/src/utils/ExtendPrototype.js");
/* harmony import */ var _extentions_ValueSupport__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./extentions/ValueSupport */ "./node_modules/@default-js/defaultjs-extdom/src/dom/extentions/ValueSupport.js");
/**
 * Adds val() to HTMLSelectElement.
 *
 * ValueSupport reads a select by its selected options, so val() gives an array of
 * their values and takes one to select them again.
 */




(0,_utils_ExtendPrototype__WEBPACK_IMPORTED_MODULE_0__["default"])(HTMLSelectElement,_extentions_ValueSupport__WEBPACK_IMPORTED_MODULE_1__["default"]);

/***/ },

/***/ "./node_modules/@default-js/defaultjs-extdom/src/dom/HTMLTextAreaElement.js"
/*!**********************************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-extdom/src/dom/HTMLTextAreaElement.js ***!
  \**********************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_ExtendPrototype__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/ExtendPrototype */ "./node_modules/@default-js/defaultjs-extdom/src/utils/ExtendPrototype.js");
/* harmony import */ var _extentions_ValueSupport__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./extentions/ValueSupport */ "./node_modules/@default-js/defaultjs-extdom/src/dom/extentions/ValueSupport.js");
/**
 * Adds val() to HTMLTextAreaElement.
 *
 * A textarea matches none of the special input types, so ValueSupport falls back
 * to reading and writing its value - and triggers an input event when it is set,
 * the same as any other field.
 */




(0,_utils_ExtendPrototype__WEBPACK_IMPORTED_MODULE_0__["default"])(HTMLTextAreaElement, _extentions_ValueSupport__WEBPACK_IMPORTED_MODULE_1__["default"]);


/***/ },

/***/ "./node_modules/@default-js/defaultjs-extdom/src/dom/HtmlCollection.js"
/*!*****************************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-extdom/src/dom/HtmlCollection.js ***!
  \*****************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _extentions_ListTypeBuilder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./extentions/ListTypeBuilder */ "./node_modules/@default-js/defaultjs-extdom/src/dom/extentions/ListTypeBuilder.js");
/**
 * Builds HTMLCollection as a list of html elements.
 *
 * Same as NodeList, only holding html elements - a live collection like children
 * therefore keeps its type when it is filtered.
 */


(0,_extentions_ListTypeBuilder__WEBPACK_IMPORTED_MODULE_0__["default"])(HTMLCollection, HTMLElement);


/***/ },

/***/ "./node_modules/@default-js/defaultjs-extdom/src/dom/Node.js"
/*!*******************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-extdom/src/dom/Node.js ***!
  \*******************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_ExtendPrototype__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/ExtendPrototype */ "./node_modules/@default-js/defaultjs-extdom/src/utils/ExtendPrototype.js");
/* harmony import */ var _extentions_DataSupport__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./extentions/DataSupport */ "./node_modules/@default-js/defaultjs-extdom/src/dom/extentions/DataSupport.js");
/* harmony import */ var _extentions_ManipulationSupport__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./extentions/ManipulationSupport */ "./node_modules/@default-js/defaultjs-extdom/src/dom/extentions/ManipulationSupport.js");
/**
 * Adds data and content functions to Node.
 *
 * Node is the common base of elements, text nodes and fragments, so data() and
 * the insert functions work on all of them, not only on elements.
 */




(0,_utils_ExtendPrototype__WEBPACK_IMPORTED_MODULE_0__["default"])(Node,_extentions_DataSupport__WEBPACK_IMPORTED_MODULE_1__["default"],_extentions_ManipulationSupport__WEBPACK_IMPORTED_MODULE_2__["default"]);

/***/ },

/***/ "./node_modules/@default-js/defaultjs-extdom/src/dom/NodeList.js"
/*!***********************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-extdom/src/dom/NodeList.js ***!
  \***********************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _extentions_ListTypeBuilder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./extentions/ListTypeBuilder */ "./node_modules/@default-js/defaultjs-extdom/src/dom/extentions/ListTypeBuilder.js");
/**
 * Builds NodeList as a list of nodes.
 *
 * Besides the list functions this gives a NodeList every function of a node, by
 * delegation - calling one applies it to each node and collects the results.
 */


(0,_extentions_ListTypeBuilder__WEBPACK_IMPORTED_MODULE_0__["default"])(NodeList, Node);


/***/ },

/***/ "./node_modules/@default-js/defaultjs-extdom/src/dom/extentions/AttributeSupport.js"
/*!******************************************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-extdom/src/dom/extentions/AttributeSupport.js ***!
  \******************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_Extender__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/Extender */ "./node_modules/@default-js/defaultjs-extdom/src/utils/Extender.js");


const support = (0,_utils_Extender__WEBPACK_IMPORTED_MODULE_0__["default"])("AttributeSupport", (Prototype) => {
	/**
	 * Gets or sets attributes of this element.
	 *
	 * attr() returns all attributes as an object, attr(name) the value of a single
	 * one. With a second argument the attribute is set, with null or undefined it
	 * gets removed.
	 *
	 * Values are stringified by setAttribute, so attr(name, 0) sets "0". Only null
	 * and undefined remove an attribute - 0, false and "" are regular values.
	 *
	 * @param {string} [aName] - the attribute name
	 * @param {*} [aValue] - the new value, null or undefined removes the attribute
	 * @returns {Object<string,string>|string|Element} all attributes, the value of the requested attribute (null when it does not exist), or this when an attribute was set or removed
	 */
	Prototype.attr = function () {
		if (arguments.length == 0) {
			const result = {};
			this.getAttributeNames().forEach((name) => {
				result[name] = this.getAttribute(name);
			});
			return result;
		} else if (arguments.length == 1) return this.getAttribute(arguments[0]);
		else if (arguments[1] == null) this.removeAttribute(arguments[0]);
		else this.setAttribute(arguments[0], arguments[1]);

		return this;
	};
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (support);


/***/ },

/***/ "./node_modules/@default-js/defaultjs-extdom/src/dom/extentions/DataSupport.js"
/*!*************************************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-extdom/src/dom/extentions/DataSupport.js ***!
  \*************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_Extender__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/Extender */ "./node_modules/@default-js/defaultjs-extdom/src/utils/Extender.js");

const support = (0,_utils_Extender__WEBPACK_IMPORTED_MODULE_0__["default"])("DataSupport", Prototype => {

	/**
	 * Reads all data- attributes of a node into a plain object.
	 *
	 * @param {Node} element
	 * @returns {Object<string,string>} the dataset of the node, empty when it has none
	 */
	const loadData = (element) => {
		const data = {};
		if (typeof element.dataset !== "undefined")
			for (const name in element.dataset)
				data[name] = element.dataset[name];
		return data;
	}

	/**
	 * Gets or sets the data of this node.
	 *
	 * The first call reads the data- attributes into a cache, which is kept on the
	 * node from then on. That cache is detached from the dom: later attribute
	 * changes are not seen and written values are not reflected back. data(true)
	 * reads the attributes again.
	 *
	 * Reloading merges, it does not sync - a value removed from the dom stays in
	 * the cache, as it can not be told apart from a value that never came from the
	 * dom.
	 *
	 * @param {string|boolean} [aName] - a name to read or write, or a boolean to read all data, reloading the attributes first when true
	 * @param {*} [aValue] - the new value, null or undefined removes the name
	 * @returns {Object<string,*>|*|Node} all data, the value of the given name, or this when a value was written
	 * @throws {Error} when the first argument is neither a string nor a boolean
	 */
	Prototype.data = function() {
		const data = loadData(this);
		this.data = (function() {
			if (arguments.length == 0)
				return data;
			const arg1 = arguments[0];
			const type = typeof arg1;
			if(type === "boolean"){
				if(arg1)
					Object.assign(data, loadData(this));
				return data;
			}

			if(type !== "string")
				throw new Error("data() expects a string or boolean as first argument or no arguments at all");
			
			if (arguments.length == 1)
				return data[arg1];
			else if (arguments[1] == null)
				delete data[arguments[0]];
			else
				data[arguments[0]] = arguments[1];

			return this;
		}).bind(this);

		return this.data.apply(null, arguments);
	};
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (support);

/***/ },

/***/ "./node_modules/@default-js/defaultjs-extdom/src/dom/extentions/EventSupport.js"
/*!**************************************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-extdom/src/dom/extentions/EventSupport.js ***!
  \**************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_Extender__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/Extender */ "./node_modules/@default-js/defaultjs-extdom/src/utils/Extender.js");


const EVENTSPLITER = /\s*,\s*|\s+/;
const DEFAULT_OPTIONS = { capture: false, once: false, passive: false, signal: undefined };

/**
 * Everything this extension keeps per element. A WeakMap holds it outside of the
 * element, so nothing is exposed on the dom and it is released with the element.
 *
 * Wrappers and handles are mapped in both directions: a wrapper needs to find its
 * registration while an event runs, and removeOn needs to find all wrappers of a
 * handle. Handles are mapped to a set of wrappers, not to a single one, so the
 * same handle can be registered any number of times without the registrations
 * overwriting each other.
 *
 * @typedef {Object} ElementData
 * @property {Map<string,number>} eventTriggerTimeouts - running trigger timeouts by event type
 * @property {Map<Function,Registration>} wrapperHandleMap - registration of each wrapper
 * @property {Map<Function,Set<Function>>} handleWrapperMap - all wrappers of a handle
 */

/**
 * One call of on().
 *
 * @typedef {Object} Registration
 * @property {Function} handle - the function given to on()
 * @property {Set<string>} events - the event types still registered, listeners get removed one by one
 * @property {Object} options - the options the listener was added with, needed to remove it again
 */

const ELEMENTDATA = new WeakMap();

/**
 * @param {EventTarget} element
 * @returns {ElementData} the data of the element, created on first access
 */
const getElementData = (element) => {
	if (!ELEMENTDATA.has(element))
		ELEMENTDATA.set(element, {
			eventTriggerTimeouts: new Map(),
			wrapperHandleMap: new Map(),
			handleWrapperMap: new Map()
		});

	return ELEMENTDATA.get(element);
};

const getWrapperHandleMap = (element) => {
	return getElementData(element).wrapperHandleMap;
};

const getHandleWrapperMap = (element) => {
	return getElementData(element).handleWrapperMap;
};

const getTriggerTimeouts = (element) => {
	return getElementData(element).eventTriggerTimeouts;
};

/**
 * Registers a wrapper in both directions.
 *
 * @param {EventTarget} anElement
 * @param {Function} aHandle - the function given to on()
 * @param {Function} aWrapper - the listener actually added to the element
 * @param {Iterable<string>} theEvents
 * @param {Object} theOptions - kept to remove the listener with the same options later
 * @throws {Error} when the wrapper is already registered, which can not happen as long as on() creates a new one per call
 */
const registrateHandleWrapper = (anElement, aHandle, aWrapper, theEvents, theOptions) => {
	const wrapperHandleMap = getWrapperHandleMap(anElement);
	if (!wrapperHandleMap.has(aWrapper)) wrapperHandleMap.set(aWrapper, { handle: aHandle, events: new Set(theEvents), options: theOptions });
	else throw new Error("Wrapper already registered for this element!");

	const handleWrapperMap = getHandleWrapperMap(anElement);
	let wrapperSet = handleWrapperMap.get(aHandle);
	if (!wrapperSet) {
		wrapperSet = new Set();
		handleWrapperMap.set(aHandle, wrapperSet);
	}	
	wrapperSet.add(aWrapper);	
};

/**
 * Removes a wrapper from some or all of its events.
 *
 * The registration is dropped from both maps as soon as no event is left, so a
 * wrapper that still listens to other events stays known.
 *
 * @param {EventTarget} aElement
 * @param {Function} aWrapper
 * @param {Iterable<string>} [theEvents] - the events to remove, all of them when omitted
 */
const removeWrapper = (aElement, aWrapper, theEvents) => {
	const wrapperHandleMap = getWrapperHandleMap(aElement);
	if(!wrapperHandleMap.has(aWrapper)) throw new Error("Wrapper not registered for this element!");
	const { events, options, handle } = wrapperHandleMap.get(aWrapper);
	const removedEvents = theEvents || events;
	for (let event of removedEvents) {
		if (events.has(event)) {
			events.delete(event);
			aElement.removeEventListener(event, aWrapper, options);
		}
	}
	//Cleanup the wrapperHandleMap and handleWrapperMap if no events left for this wrapper
	if (events.size === 0){
		wrapperHandleMap.delete(aWrapper);
		const handleWrapperMap = getHandleWrapperMap(aElement);
		const wrapperSet = handleWrapperMap.get(handle);
		wrapperSet.delete(aWrapper);
		if (wrapperSet.size === 0)
			handleWrapperMap.delete(handle);
	}
};

/**
 * @param {boolean|Object} [options] - a boolean is taken as capture, an object is merged into the defaults
 * @returns {Object} always a new object, never the shared defaults
 */
const toEventOptions = (options) => {
	if (options == null) return Object.assign({}, DEFAULT_OPTIONS);
	else if (typeof options === "boolean") return Object.assign({}, DEFAULT_OPTIONS, { capture: options });
	else return Object.assign({}, DEFAULT_OPTIONS, options);
};

/**
 * Normalizes event types to a flat list.
 *
 * Types are separated by whitespaces, commas or both, in a string as well as
 * within the entries of an array - so ["click", "focus blur"] gives three types.
 *
 * A string gets trimmed before it is split, because the empty entries a leading
 * or trailing separator produces are artifacts of splitting, not something the
 * caller asked for. An empty entry inside an array is the opposite case: it was
 * written down and therefore throws.
 *
 * @param {string|Iterable<string>} theEvents
 * @returns {string[]} the event types, never empty
 * @throws {Error} when no type is left or an entry is not a non empty string
 */
const toEventTypes = (theEvents) => {
	if(theEvents == null) throw new Error("Event types are required!");	
	
	const events = typeof theEvents === "string" ? theEvents.trim().split(EVENTSPLITER) : theEvents;
	if (typeof events[Symbol.iterator] !== "function") throw new Error("Invalid event types!");
	if(events.length === 0) throw new Error("Event types are required!");

	const result = [];

	for (let event of events) {
		if (typeof event !== "string") throw new Error("Invalid event types!");
		event = event.trim();
		if (event.length === 0) throw new Error("Invalid event types!");
		result.push(...event.split(EVENTSPLITER));
	}
	return result;
};

const support = (0,_utils_Extender__WEBPACK_IMPORTED_MODULE_0__["default"])("EventSupport", (Prototype) => {
	/**
	 * Adds a handle to one or more events.
	 *
	 * The handle is not added as listener itself, it gets wrapped. That wrapper
	 * applies the selector and handles the once option, which keeps removeOn able
	 * to find every registration of a handle.
	 *
	 * With a selector the handle is only called when the target of the event
	 * matches it. Together with once this needs care: the browser consumes a once
	 * listener on the first event, even when the selector did not match, so the
	 * wrapper registers itself again in that case and waits for a matching event.
	 *
	 * @param {string|Iterable<string>} theEvents - event types, separated by whitespaces or commas
	 * @param {string} [aSelector] - only call the handle when the target of the event matches
	 * @param {Function} aHandle - called with the event
	 * @param {boolean|Object} [theOptions] - a boolean is taken as capture, otherwise the options of addEventListener
	 * @returns {EventTarget} this
	 * @throws {Error} by less than two arguments or invalid event types
	 */
	Prototype.on = function () {
		if (arguments.length < 2) throw new Error("Too less arguments!");

		const args = Array.from(arguments);
		const events = toEventTypes(args.shift());
		const elementSelector = typeof args[0] === "string" ? args.shift() : null;
		const handle = args.shift();
		const option = toEventOptions(args.shift());
		const element = this;
		const wrapper = function(event) {
			const { target, type } = event;
			if (elementSelector && typeof target.is === "function" && !target.is(elementSelector)) {
				if (option.once) element.addEventListener(type, wrapper, option); // re-register the wrapper for the next event
				return;
			} else {
				if (option.once) removeWrapper(element, wrapper, [type]);
				const result = handle.apply(null, arguments);				
				return result;
			}
		};

		registrateHandleWrapper(this, handle, wrapper, events, option);

		for (let event of events) {
			this.addEventListener(event, wrapper, option);
		}

		return this;
	};

	/**
	 * Removes a handle from some or all of its events.
	 *
	 * A handle registered by several calls of on() is removed from all of them.
	 *
	 * @param {Function} aHandle - the function given to on()
	 * @param {string|Iterable<string>} [theEvents] - the events to remove, all of them when omitted
	 * @returns {EventTarget} this
	 * @throws {Error} by invalid event types
	 */
	Prototype.removeOn = function (aHandle, theEvents) {
		const events = theEvents ? toEventTypes(theEvents) : null;
		const handleWrapperMap = getHandleWrapperMap(this);
		const wrapperSet = handleWrapperMap.get(aHandle);	
		if (wrapperSet) {
			for (let wrapper of wrapperSet)
				removeWrapper(this, wrapper, events);
		}

		return this;
	};

	/**
	 * Dispatches a bubbling, cancelable and composed CustomEvent.
	 *
	 * A leading number delays the event by that many milliseconds and replaces a
	 * delayed event of the same type that is still pending, so a repeatedly
	 * triggered event is dispatched once after things came to rest.
	 *
	 * One data argument becomes event.detail as it is, several become an array of
	 * them. A leading Event is taken as the event this one is delegated from and
	 * is available as event.delegatedEvent.
	 *
	 * @param {number} [aTimeout] - milliseconds to delay the event
	 * @param {string} aType - the event type
	 * @param {Event} [aDelegatedEvent] - the event this one is triggered for
	 * @param {...*} [theData] - becomes event.detail
	 * @returns {EventTarget} this
	 */
	Prototype.trigger = function () {
		const args = Array.from(arguments);
		const timeout = typeof args[0] === "number" ? args.shift() : -1;
		if (timeout >= 0) {
			const type = args[0];
			const timeouts = getTriggerTimeouts(this);
			const timeoutid = timeouts.get(type);
			if (timeoutid) clearTimeout(timeoutid);

			timeouts.set(type, setTimeout(() => {
				timeouts.delete(type);
				this.trigger.apply(this, args);
			}, timeout));
		} else {
			const type = args.shift();
			const delegate = args[0] instanceof Event ? args.shift() : null;
			const data = args.length >= 1 ? (args.length == 1 ? args.shift() : args) : delegate;
			const event = new CustomEvent(type, { bubbles: true, cancelable: true, composed: true, detail: data });

			if (delegate) event.delegatedEvent = delegate;
			this.dispatchEvent(event);
		}
		return this;
	};
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (support);


/***/ },

/***/ "./node_modules/@default-js/defaultjs-extdom/src/dom/extentions/HtmlClassSupport.js"
/*!******************************************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-extdom/src/dom/extentions/HtmlClassSupport.js ***!
  \******************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_Extender__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/Extender */ "./node_modules/@default-js/defaultjs-extdom/src/utils/Extender.js");


const CLASSSPLITER = /\s+/;

/**
 * Normalizes class names to a flat list.
 *
 * Names are separated by whitespaces, in a string as well as within the entries
 * of an array - so ["a", "b c"] gives three names.
 *
 * A string gets trimmed before it is split, because the empty entries a leading
 * or trailing whitespace produces are artifacts of splitting. An empty entry
 * written down by the caller throws instead, as does anything that is not a
 * string - classList would only report those as an unusable token, or silently
 * take a boolean as a class named "true".
 *
 * @param {string|string[]} theClasses
 * @returns {Iterable<string>} the class names, never empty
 * @throws {Error} when no name is left or an entry is not a non empty string
 */
const toClassNames = (theClasses) => {
	if (theClasses == null) throw new Error("Class names are required!");

	const classes = typeof theClasses === "string" ? theClasses.trim().split(CLASSSPLITER) : theClasses;
	if (typeof classes[Symbol.iterator] !== "function") throw new Error("Invalid class names!");
	if (classes.length === 0) throw new Error("Class names are required!");

	const result = [];
	for (let clazz of classes) {
		if (typeof clazz !== "string") throw new Error("Invalid class names!");
		clazz = clazz.trim();
		if (clazz.length === 0) throw new Error("Invalid class names!");
		result.push(...clazz.split(CLASSSPLITER));
	}
	
	return result;
};

/**
 * Builds a class function, as add, remove and toggle only differ by the method
 * they call on the classList.
 *
 * @param {string} aName - the name of the classList method
 * @returns {function(...(string|string[])):Element} a function taking any mix of names, lists of names and arrays of both
 */
const classListFunction = (aName) =>
	function () {
		const classes = toClassNames(Array.from(arguments).flat());
		classes.forEach((clazz) => this.classList[aName](clazz));

		return this;
	};

const support = (0,_utils_Extender__WEBPACK_IMPORTED_MODULE_0__["default"])("HtmlClassSupport", (Prototype) => {
	/**
	 * Adds class names to this element.
	 *
	 * @param {...(string|string[])} theClasses - names, whitespace separated lists of names, or arrays of both
	 * @returns {Element} this
	 * @throws {Error} by invalid class names
	 */
	Prototype.addClass = classListFunction("add");

	/**
	 * Removes class names from this element. Names not present are ignored.
	 *
	 * @param {...(string|string[])} theClasses - names, whitespace separated lists of names, or arrays of both
	 * @returns {Element} this
	 * @throws {Error} by invalid class names
	 */
	Prototype.removeClass = classListFunction("remove");

	/**
	 * Toggles class names of this element, each one on its own.
	 *
	 * The force parameter of classList.toggle is not supported - a boolean is not
	 * a class name and therefore throws.
	 *
	 * @param {...(string|string[])} theClasses - names, whitespace separated lists of names, or arrays of both
	 * @returns {Element} this
	 * @throws {Error} by invalid class names
	 */
	Prototype.toggleClass = classListFunction("toggle");
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (support);

/***/ },

/***/ "./node_modules/@default-js/defaultjs-extdom/src/dom/extentions/ListSupport.js"
/*!*************************************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-extdom/src/dom/extentions/ListSupport.js ***!
  \*************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_Extender__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/Extender */ "./node_modules/@default-js/defaultjs-extdom/src/utils/Extender.js");


/**
 * Builds a list function by delegating to the array function of the same name.
 *
 * The list is copied into an array first. That copy is what makes these functions
 * safe on a live HTMLCollection: nodes may be moved or removed while iterating,
 * without the iteration skipping the entries that shift into their place.
 *
 * @param {string} aName - the name of the array function
 * @returns {Function} a function behaving like the array function of that name
 */
const arrayFunction = (aName) =>
	function () {
		return Array.prototype[aName].apply(Array.from(this), arguments);
	};

const support = (0,_utils_Extender__WEBPACK_IMPORTED_MODULE_0__["default"])("ListSupport", (Prototype) => {
	/**
	 * @param {*} aNode - the node to look for
	 * @param {number} [aStart] - the index to start at
	 * @returns {number} the index of the node, or -1
	 */
	Prototype.indexOf = arrayFunction("indexOf");

	/**
	 * @param {*} aNode - the node to look for
	 * @param {number} [aStart] - the index to start at
	 * @returns {boolean} whether the list contains the node
	 */
	Prototype.includes = arrayFunction("includes");

	/**
	 * Calls the function for each node.
	 *
	 * @param {function(Node,number,Node[]):void} aFunction - called with node, index and the copied list
	 */
	Prototype.forEach = arrayFunction("forEach");

	/**
	 * @param {function(Node,number,Node[]):*} aFunction
	 * @returns {Array} the results, an array as the results are not nodes anymore
	 */
	Prototype.map = arrayFunction("map");

	/**
	 * @param {function(Node,number,Node[]):boolean} aFunction
	 * @returns {boolean} whether the function matches at least one node
	 */
	Prototype.some = arrayFunction("some");

	/**
	 * @param {function(Node,number,Node[]):boolean} aFunction
	 * @returns {boolean} whether the function matches every node
	 */
	Prototype.every = arrayFunction("every");

	/**
	 * @param {function(*,Node,number,Node[]):*} aFunction
	 * @param {*} [aInitialValue]
	 * @returns {*} the accumulated result
	 */
	Prototype.reduce = arrayFunction("reduce");

	/**
	 * Filters the list.
	 *
	 * Unlike map this keeps the type of the list - a NodeList returns a NodeList, a
	 * HTMLCollection returns a HTMLCollection - so a filtered list can be used like
	 * any other one. The result is a new list, it is not live anymore.
	 *
	 * @param {function(Node,number,Node[]):boolean} aFunction
	 * @returns {NodeList|HTMLCollection} the matching nodes
	 */
	Prototype.filter = function () {
		const result = Array.prototype.filter.apply(Array.from(this), arguments);

		return this.constructor.from(result);
	};

	/**
	 * @returns {Node|undefined} the first node, or undefined when the list is empty
	 */
	Prototype.first = function () {
		if (this.length > 0) return this[0];
	};

	/**
	 * @returns {Node|undefined} the last node, or undefined when the list is empty
	 */
	Prototype.last = function () {
		if (this.length > 0) return this[this.length - 1];
	};
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (support);

/***/ },

/***/ "./node_modules/@default-js/defaultjs-extdom/src/dom/extentions/ListTypeBuilder.js"
/*!*****************************************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-extdom/src/dom/extentions/ListTypeBuilder.js ***!
  \*****************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_ExtendPrototype__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/ExtendPrototype */ "./node_modules/@default-js/defaultjs-extdom/src/utils/ExtendPrototype.js");
/* harmony import */ var _utils_DelegaterBuilder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/DelegaterBuilder */ "./node_modules/@default-js/defaultjs-extdom/src/utils/DelegaterBuilder.js");
/* harmony import */ var _ListSupport__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ListSupport */ "./node_modules/@default-js/defaultjs-extdom/src/dom/extentions/ListSupport.js");




/**
 * Sets up a dom list type - NodeList or HTMLCollection - the same way.
 *
 * The two only differ by their own type and the element type they hold, so this
 * builds both from those two parameters: it applies ListSupport, adds applyTo,
 * val and the static from, and wires the delegation that lets a list forward
 * every method of its elements.
 *
 * @param {Function} ListType - the list type, NodeList or HTMLCollection
 * @param {Function} ElementType - the type of the items, Node or HTMLElement
 */
const buildListType = (ListType, ElementType) => {
	(0,_utils_ExtendPrototype__WEBPACK_IMPORTED_MODULE_0__["default"])(ListType, _ListSupport__WEBPACK_IMPORTED_MODULE_2__["default"]);

	/**
	 * Applies a function or a method to each item and collects the results.
	 *
	 * A function is called with the item followed by the extra arguments. A string
	 * is taken as the name of a method to call on each item with those arguments.
	 * Null results are skipped.
	 *
	 * @param {Function|string} calling - a function to call, or the name of a method
	 * @param {...*} theArguments - passed to the function or method
	 * @returns {Array} the collected results
	 */
	ListType.prototype.applyTo = function () {
		const args = Array.from(arguments);
		const calling = args.shift();
		const isFunction = typeof calling === "function";
		const results = [];
		for (let i = 0; i < this.length; i++) {
			const node = this[i];
			let result;
			if (isFunction) result = calling.apply(null, [node].concat(args));
			else if (typeof node[calling] === "function") result = node[calling].apply(node, args);

			if (result != null) results.push(result);
		}

		return results;
	};

	/**
	 * Reads or writes the value of the items.
	 *
	 * Without arguments the values are collected into a Map, keyed by the name, id
	 * or selector of each item - items without a value are left out, so an unchecked
	 * radio does not overwrite the selected one of its group. With arguments the
	 * value is set on every item.
	 *
	 * @param {...*} [theValue] - the value to set on the items
	 * @returns {Map<string,*>|ListType} the values by key, or this when a value was set
	 */
	ListType.prototype.val = function () {
		if (arguments.length == 0) {
			const result = new Map();
			for (const node of this) {
				if (typeof node.val === "function") {
					const value = node.val();
					if (value != null) result.set(node.name || node.id || node.selector(), value);
				}
			}
			return result;
		} else this.applyTo("val", ...arguments);

		return this;
	};

	/**
	 * Builds a list from nodes, other lists and arrays of them.
	 *
	 * Every argument that is an item is taken, an iterable is read item by item, so
	 * any mix can be passed. Anything that is not an item is left out. The result is
	 * a plain list, not a live one.
	 *
	 * @param {...(ElementType|Iterable)} theItems
	 * @returns {ListType} a new list of the items
	 */
	ListType.from = function () {
		const args = Array.from(arguments);
		const data = {};
		let counter = 0;

		while (args.length > 0) {
			const arg = args.shift();
			if (arg != null) {
				if (arg instanceof ElementType) data[counter++] = { value: arg, enumerable: true };
				else if (typeof arg[Symbol.iterator] === "function") {
					for (let item of arg) {
						if (item instanceof ElementType) data[counter++] = { value: item, enumerable: true };
					}
				}
			}
		}

		data.length = { value: counter };
		return Object.create(ListType.prototype, data);
	};

	(0,_utils_DelegaterBuilder__WEBPACK_IMPORTED_MODULE_1__["default"])(
		function (aFunctionName, theArguments) {
			let results = [];
			this.forEach((node) => {
				if (node && typeof node[aFunctionName] === "function") {
					const result = node[aFunctionName].apply(node, theArguments);
					if (result != null) {
						if (result instanceof ListType) results = results.concat(Array.from(result));
						else results.push(result);
					}
				}
			});

			if (results.length === 0) return undefined;
			else if (results[0] instanceof ElementType || results[0] instanceof ListType) return ListType.from(results);
			else return results;
		},
		ListType.prototype,
		Node.prototype,
		HTMLElement.prototype,
		HTMLInputElement.prototype,
		Element.prototype,
		EventTarget.prototype,
	);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (buildListType);


/***/ },

/***/ "./node_modules/@default-js/defaultjs-extdom/src/dom/extentions/ManipulationSupport.js"
/*!*********************************************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-extdom/src/dom/extentions/ManipulationSupport.js ***!
  \*********************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_Extender__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/Extender */ "./node_modules/@default-js/defaultjs-extdom/src/utils/Extender.js");


/**
 * Content accepted by the insert functions.
 *
 * @typedef {Node|NodeList|HTMLCollection|Content[]|string} Content
 */

/**
 * Normalizes content to a flat list of nodes.
 *
 * Strings are parsed to nodes by the global create(), lists and arrays are taken
 * item by item, so any mix of them can be passed. Lists are read into an array
 * before anything is inserted, because inserting a node removes it from the list
 * it came from - iterating that list while inserting would skip every other node.
 *
 * Strings are not trimmed and an empty one is accepted: unlike event types or
 * class names, whitespace is content. "   " becomes a text node, "" becomes no
 * node at all. Only the absence of any argument is an error.
 *
 * @param {...Content} theContent
 * @returns {Node[]} the nodes, empty when the content produced none
 * @throws {Error} when there is no content at all or an item is not content
 */
const toNodes = function () {
	const content = Array.from(arguments).flat(Infinity);
	if (content.length === 0) throw new Error("Content is required!");

	return content
		.map((item) => {
			if (item instanceof Node) return item;
			if (item instanceof NodeList || item instanceof HTMLCollection) return Array.from(item);
			if (typeof item === "string") return Array.from(create(item));

			throw new Error("Invalid content!");
		})
		.flat();
};

const support = (0,_utils_Extender__WEBPACK_IMPORTED_MODULE_0__["default"])("ManipulationSupport", Prototype => {
	/**
	 * Removes all child nodes.
	 *
	 * @returns {Node} this
	 */
	Prototype.empty = function(){
		const nodes = this.childNodes;
		while(nodes.length != 0)			
			nodes[0].remove(true);
		
		return this;
	};
	
	/**
	 * @returns {NodeList} the live list of child nodes
	 */
	Prototype.content = function(){
		return this.childNodes;
	};	
	
	/**
	 * Gets or sets the markup of this node.
	 *
	 * html() returns the innerHTML, html(true) the outerHTML and html(false) the
	 * innerHTML. Any other argument replaces all children by the given content.
	 *
	 * @param {...(boolean|Content)} theContent - null or undefined throws
	 * @returns {string|Node} the markup, or this when content was set
	 */
	Prototype.html = function(){
		if(arguments.length == 0)
			return this.innerHTML;
		else if(arguments.length == 1 && typeof arguments[0] === "boolean")
			if(arguments[0])
				return this.outerHTML;
			else
				return this.innerHTML;
		else {
			const nodes = toNodes(Array.from(arguments));
			this.empty();
			nodes.forEach(node => this.appendChild(node));
		}

		return this;
	};
	
	/**
	 * Appends the content as last children.
	 *
	 * @param {...Content} theContent
	 * @returns {Node} this
	 * @throws {Error} by invalid content
	 */
	Prototype.append = function(){
		toNodes(Array.from(arguments)).forEach(node => this.appendChild(node));

		return this;
	};

	/**
	 * Inserts the content as first children.
	 *
	 * @param {...Content} theContent
	 * @returns {Node} this
	 * @throws {Error} by invalid content
	 */
	Prototype.prepend = function(){
		const nodes = toNodes(Array.from(arguments));
		const first = this.firstChild;
		nodes.forEach(node => this.insertBefore(node, first));

		return this;
	};

	/**
	 * Replaces a node by the given content.
	 *
	 * Called with one argument, this node is replaced within its parent node.
	 * Called with more, the first one - a child of this node - is replaced by the
	 * content following it.
	 *
	 * @param {...Content} theContent - the new content, or the old node followed by the new content
	 * @returns {Node} this, even when this node was the replaced one
	 * @throws {Error} when called without arguments or by invalid content
	 */
	Prototype.replace = function(){
		if(arguments.length < 1)
			throw new Error("Insufficient arguments! One or two nodes required!");

		const parent = arguments.length == 1 ? this.parentNode : this;
		const oldNode = arguments.length == 1 ? this : arguments[0];
		const nodes = toNodes(arguments.length == 1 ? arguments[0] : Array.from(arguments).slice(1));

		nodes.forEach(node => parent.insertBefore(node, oldNode));
		oldNode.remove();

		return this;
	};

	/**
	 * Inserts the content directly after this node.
	 *
	 * @param {...Content} theContent
	 * @returns {Node} this
	 * @throws {Error} when this node has no parent node or by invalid content
	 */
	Prototype.after = function(){
		if(this.parentNode == null)
			throw new Error("Can't insert nodes after this node! Parent node not available!");

		const parent = this.parentNode;
		const next = this.nextSibling;
		toNodes(Array.from(arguments)).forEach(node => parent.insertBefore(node, next));

		return this;
	};

	/**
	 * Inserts the content directly before this node.
	 *
	 * @param {...Content} theContent
	 * @returns {Node} this
	 * @throws {Error} when this node has no parent node or by invalid content
	 */
	Prototype.before = function(){
		if(this.parentNode == null)
			throw new Error("Can't insert nodes before this node! Parent node not available!");

		const parent = this.parentNode;
		toNodes(Array.from(arguments)).forEach(node => parent.insertBefore(node, this));

		return this;
	};
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (support);

/***/ },

/***/ "./node_modules/@default-js/defaultjs-extdom/src/dom/extentions/QuerySupport.js"
/*!**************************************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-extdom/src/dom/extentions/QuerySupport.js ***!
  \**************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_Extender__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/Extender */ "./node_modules/@default-js/defaultjs-extdom/src/utils/Extender.js");


const PARENTTOKEN = ":parent";
const QUOTES = ["\"", "'"];

/**
 * Strips the optional quotes around a sub selector.
 *
 * Quoting is not needed anymore, as the selector is read by counting brackets
 * instead of matching a pattern, but it stays supported.
 *
 * @param {string} subquery
 * @returns {string} the sub selector, empty when there is none
 */
const cleanupSubSelector = (subquery) => {
	if (typeof subquery !== "string") return "";
	subquery = subquery.trim();
	if ((subquery.startsWith('"') && subquery.endsWith('"')) || (subquery.startsWith("'") && subquery.endsWith("'"))) subquery = subquery.substring(1, subquery.length - 1);
	return subquery.trim();
};

/**
 * Finds the :parent token of a selector.
 *
 * Only a token on bracket level zero and outside of quotes counts, so neither
 * [data=":parent"] nor :not(:parent) is taken for one.
 *
 * @param {string} aSelector
 * @returns {number} the index of the token, or -1
 */
const indexOfParentToken = (aSelector) => {
	let quote = null;
	let depth = 0;
	for (let i = 0; i < aSelector.length; i++) {
		const char = aSelector[i];
		if (quote) {
			if (char === quote && aSelector[i - 1] !== "\\") quote = null;
		} else if (QUOTES.includes(char)) quote = char;
		else if (char === "(") depth++;
		else if (char === ")") depth--;
		else if (depth === 0 && aSelector.startsWith(PARENTTOKEN, i)) return i;
	}

	return -1;
};

/**
 * Reads a bracket group by counting brackets, so a nested group like
 * div:has(p):not(span) is read as a whole.
 *
 * @param {string} aSelector
 * @param {number} aStart - the index of the opening bracket
 * @returns {{content: string, end: number}} the content of the group and the index behind it
 * @throws {Error} when the group is not closed
 */
const readGroup = (aSelector, aStart) => {
	let quote = null;
	let depth = 0;
	for (let i = aStart; i < aSelector.length; i++) {
		const char = aSelector[i];
		if (quote) {
			if (char === quote && aSelector[i - 1] !== "\\") quote = null;
		} else if (QUOTES.includes(char)) quote = char;
		else if (char === "(") depth++;
		else if (char === ")" && --depth === 0) return { content: aSelector.substring(aStart + 1, i), end: i + 1 };
	}

	throw new Error("Invalid query!");
};

/**
 * Splits a selector at its :parent token.
 *
 * @param {string} aSelector
 * @returns {{prefix: string, selector: string, suffix: string}|null} the parts, or null when there is no token
 * @throws {Error} when the bracket group of the token is not closed
 */
const splitParentQuery = (aSelector) => {
	const index = indexOfParentToken(aSelector);
	if (index < 0) return null;

	const after = index + PARENTTOKEN.length;
	const group = aSelector[after] === "(" ? readGroup(aSelector, after) : { content: "", end: after };

	return {
		prefix: aSelector.substring(0, index).trim(),
		selector: cleanupSubSelector(group.content),
		suffix: aSelector.substring(group.end).trim()
	};
};

/**
 * Executes a selector, resolving the :parent pseudo selector.
 *
 * :parent returns the parent of the element, :parent(selector) the next ancestor
 * matching the selector. Everything before the token selects the elements to
 * start from, everything behind it is searched within the parents found.
 *
 * @param {HTMLElement} aElement
 * @param {string} aSelector
 * @returns {NodeList|undefined} the result, undefined when a step found nothing
 */
const queryExecuter = function (aElement, aSelector) {
	const query = splitParentQuery(aSelector);
	if (!query) return aElement.querySelectorAll(aSelector);

	let result = aElement;
	if (query.prefix.length > 0) {
		result = aElement.querySelectorAll(query.prefix);
		if (result.length == 0) return;
	}

	result = result.parent(query.selector.length > 0 ? query.selector : null);
	if (!result) return;

	return query.suffix.length > 0 ? result.find(query.suffix) : result;
};

/**
 * Normalizes selectors to a list of non empty strings.
 *
 * Empty selectors are skipped rather than thrown at, other than in the sibling
 * functions for event types and class names: an empty selector carries no intent
 * and just contributes nothing, while a non string is a mistake and throws.
 * Selectors are not split, comma separated lists are left for querySelectorAll.
 *
 * @param {string|Iterable<string>} theSelectors
 * @returns {string[]} the trimmed selectors, empty ones removed
 * @throws {Error} when there is no selector or one is not a string
 */
const toSelector = function (theSelectors) {
	if(theSelectors == null) throw new Error("Invalid query!");

	const selectors = typeof theSelectors === "string" ? [theSelectors] : Array.from(theSelectors);

	return selectors
		.map((selector) => {
				if(typeof selector !== "string") throw new Error("Invalid query!");
				return selector.trim();
			})
		.filter((selector) => selector.length > 0);
}


const support = (0,_utils_Extender__WEBPACK_IMPORTED_MODULE_0__["default"])("QuerySupport", (Prototype) => {
	/**
	 * Searches nodes by one or more selectors.
	 *
	 * Selector lists separated by comma are left to querySelectorAll, which knows
	 * them and gets the commas inside brackets and quotes right. The results of
	 * several selectors are collected in the order they were given, without
	 * removing the nodes a second selector finds again.
	 *
	 * @param {...string} theSelectors - selectors, empty ones are skipped
	 * @returns {NodeList} the nodes found, empty when there are none
	 * @throws {Error} by a selector beside a string
	 */
	Prototype.find = function () {
		const nodes = [];
		const selectors = toSelector(arguments);
		for(let selector of selectors){
			const result = queryExecuter(this, selector);
			if (result) nodes.push(result);
		}

		return NodeList.from(...nodes);
	};

	/**
	 * Checks whether this node matches at least one of the selectors.
	 *
	 * A Document and a DocumentFragment never match, as they can not be selected -
	 * that also covers a ShadowRoot, which is a DocumentFragment.
	 *
	 * @param {...(string|string[])} theSelectors - selectors, given one by one or as a list
	 * @returns {boolean} whether one of the selectors matches
	 * @throws {DOMException} by an invalid selector
	 */
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

	/**
	 * Returns the parent of this node, or the next ancestor matching a selector.
	 *
	 * An invalid selector is not caught: it would return the parent reached so far,
	 * which is indistinguishable from a match, while a selector matching nothing
	 * correctly returns null. Letting it throw keeps those two apart.
	 *
	 * @param {string|boolean} [selector] - a selector to look for, or the ignoreShadowRoot flag
	 * @param {boolean} [ignoreShadowRoot] - continue at the host of a shadow root instead of stopping
	 * @returns {Node|null} the parent, the matching ancestor, or null when there is none
	 * @throws {DOMException} by an invalid selector
	 */
	Prototype.parent = function (selector, ignoreShadowRoot) {
		if (!this.parentNode) return null;
		ignoreShadowRoot = typeof selector === "boolean" ? selector : ignoreShadowRoot;
		selector = typeof selector === "string" ? selector : null;

		let parent = this.parentNode;
		if (parent instanceof ShadowRoot && ignoreShadowRoot) parent = parent.host;

		if (selector) return parent.is(selector) ? parent : parent.parent(selector, ignoreShadowRoot);

		return parent;
	};

	/**
	 * Collects the ancestors of this node, from the nearest one upwards.
	 *
	 * With a selector only the matching ancestors are collected, as every step
	 * walks up to the next match.
	 *
	 * @param {string|boolean} [selector] - a selector to look for, or the ignoreShadowRoot flag
	 * @param {boolean} [ignoreShadowRoot] - continue at the host of a shadow root instead of stopping
	 * @returns {NodeList} the ancestors, empty when there are none
	 * @throws {DOMException} by an invalid selector
	 */
	Prototype.parents = function () {
		const result = new Array();
		let parent = Prototype.parent.apply(this, arguments);
		while (parent) {
			result.push(parent);
			parent = Prototype.parent.apply(parent, arguments);
		}

		return NodeList.from(result);
	};

	/**
	 * Builds a selector addressing this node.
	 *
	 * An id ends the selector, as it already identifies the node. Otherwise the tag
	 * name is used and the path continues at the parent. A position is only added
	 * when the parent has more than one element child, and it counts all of them -
	 * that is what :nth-child does, unlike :nth-of-type.
	 *
	 * The id is not escaped, so an id needing it gives an invalid selector.
	 *
	 * @returns {string|undefined} the selector, undefined for a Document or DocumentFragment
	 */
	Prototype.selector = function () {
		if (this instanceof Document || this instanceof DocumentFragment) return undefined;
		else if (this.id) return "#" + this.id;
		else {
			let selector = this.tagName.toLowerCase();
			const parent = this.parent();
			if (parent) {
				if(parent.children.length > 1) {
					const index = parent.children.indexOf(this);
					selector = `${selector}:nth-child(${index + 1})`;
				}
				const parentSelector = parent.selector();
				return parentSelector != null ? `${parentSelector} > ${selector}` : selector;
			}
			return selector;
		}
	};

	/**
	 * Returns the first node of closests().
	 *
	 * @param {string} aQuery
	 * @returns {Node|undefined} the first node found, or undefined
	 */
	Prototype.closest = function (aQuery) {
		return this.closests(aQuery).first();
	};

	/**
	 * Searches the nodes closest to this one by their distance in the tree.
	 *
	 * The subtree of this node is searched first, then the subtree of the parent,
	 * and so on upwards - the search widens in rings until a level has matches, and
	 * those are returned. So the result may be a child, a sibling, a cousin or an
	 * ancestor, depending on where the first match appears.
	 *
	 * Distance is meant in both directions here, other than in the native closest(),
	 * which only walks up and returns an ancestor.
	 *
	 * @param {string} aQuery
	 * @returns {NodeList} the matches of the closest level having any, empty when there are none
	 */
	Prototype.closests = function (aQuery) {
		const result = this.find(aQuery);
		if (result.length != 0) return result;

		const parent = this.parentElement;
		if (parent) return parent.closests(aQuery);

		return NodeList.from([]);
	};

	/**
	 * Searches the query at this node, below it, or above it - in that order.
	 *
	 * This node itself is checked first, then its subtree, and only then the
	 * ancestors. Unlike closests() the search does not widen in rings: it never
	 * looks into the subtree of an ancestor, so a sibling is not found.
	 *
	 * @param {string} aQuery
	 * @returns {NodeList} this node, the nodes below it, or the matching ancestor, empty when there is none
	 */
	Prototype.nested = function (aQuery) {
		if (this.is(aQuery)) return NodeList.from(this);

		let nested = this.find(aQuery);
		if (nested && nested.length > 0) return nested;
		else return NodeList.from(this.parent(aQuery));
	};
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (support);


/***/ },

/***/ "./node_modules/@default-js/defaultjs-extdom/src/dom/extentions/ReadyEventSupport.js"
/*!*******************************************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-extdom/src/dom/extentions/ReadyEventSupport.js ***!
  \*******************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   READYEVENT: () => (/* binding */ READYEVENT),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_Extender__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/Extender */ "./node_modules/@default-js/defaultjs-extdom/src/utils/Extender.js");


/**
 * The type of the event triggered once the document is ready.
 *
 * @type {string}
 */
const READYEVENT = "defaultjs--event--ready";

const support = (0,_utils_Extender__WEBPACK_IMPORTED_MODULE_0__["default"])("ReadyEventSupport", Prototype => {
	/**
	 * Registers a function for the ready event of the document.
	 *
	 * The ready event is triggered once the dom is parsed. When the document is
	 * already complete the event is triggered right away, so a function registered
	 * late still runs. That trigger reaches every ready listener, so functions
	 * registered earlier run again on each late registration.
	 *
	 * @param {Function} aFunction - called on the ready event
	 * @param {boolean} [once] - remove the function after the next ready event
	 * @returns {Document} this
	 */
	Prototype.ready = function(aFunction, once){
		this.on(READYEVENT, aFunction, once ? { once: true } : undefined);
		if(document.readyState == "complete")
			this.trigger(READYEVENT);

		return this;
	};

});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (support);

/***/ },

/***/ "./node_modules/@default-js/defaultjs-extdom/src/dom/extentions/ShowHideSupport.js"
/*!*****************************************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-extdom/src/dom/extentions/ShowHideSupport.js ***!
  \*****************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_Extender__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/Extender */ "./node_modules/@default-js/defaultjs-extdom/src/utils/Extender.js");


const HIDEVALUE = "none";

/**
 * Whether the element is hidden by its own inline display, a display coming from
 * a css rule is not seen.
 *
 * @param {HTMLElement} element
 * @returns {boolean}
 */
const isHidden = (element) => {
	return element.style.display === HIDEVALUE
};

/**
 * Replaces show and hide on the element by versions bound to it, capturing the
 * display to restore on show.
 *
 * The display is read once, on the first show or hide, and kept from then on -
 * the bound methods shadow the prototype, so init does not run again. A display
 * set directly afterwards is not picked up. When the element is hidden at that
 * first call the captured value is the empty string, falling back to the css.
 *
 * @param {HTMLElement} element
 * @returns {HTMLElement} the element
 */
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
	/**
	 * Shows the element by restoring the display captured before it was hidden.
	 *
	 * @returns {HTMLElement} this
	 */
	Prototype.show = function() {
		return init(this).show.apply(null, arguments)
	};

	/**
	 * Hides the element by setting its display to none.
	 *
	 * @returns {HTMLElement} this
	 */
	Prototype.hide = function() {
		return init(this).hide.apply(null, arguments)
	};

	/**
	 * Shows the element when it is hidden, hides it otherwise.
	 *
	 * Only an inline display of none counts as hidden, so an element hidden by a
	 * css rule is hidden inline first before it shows.
	 *
	 * @returns {HTMLElement} this
	 */
	Prototype.toggleShow = function() {
		return isHidden(this) ? this.show() : this.hide();
	};

});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (support);

/***/ },

/***/ "./node_modules/@default-js/defaultjs-extdom/src/dom/extentions/ValueSupport.js"
/*!**************************************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-extdom/src/dom/extentions/ValueSupport.js ***!
  \**************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_Extender__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/Extender */ "./node_modules/@default-js/defaultjs-extdom/src/utils/Extender.js");


/**
 * Value handling for one kind of input element.
 *
 * @typedef {Object} InputType
 * @property {string} selector - matches the elements handled by this type
 * @property {function():*} get - reads the value of the element
 * @property {function(*):void} set - writes the value to the element
 */

/**
 * Shared setter of checkbox and radio, both are set by their checked state.
 *
 * @param {boolean|string|string[]} aValue - a boolean is applied directly, a string or an array of strings checks the element when its value matches
 */
const checkedSetter = function(aValue){
	if(typeof aValue === "boolean")
		this.checked = aValue;
	else if(typeof aValue === "string")
		this.checked = this.value == aValue;
	else if(Array.isArray(aValue))
		this.checked = aValue.indexOf(this.value) >= 0;

	this.trigger("changed");
};

/**
 * The first type with a matching selector handles the element.
 *
 * @type {InputType[]}
 */
const InputTypes = [
	{
		selector : "select",
		/**
		 * @returns {string[]} the values of all selected options
		 */
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
		selector : "input[type=\"checkbox\"]",
		/**
		 * A checkbox is independent, so an unchecked one reports false - it is off,
		 * which is a value of its own.
		 *
		 * @returns {boolean|string|undefined} the checked state without a value attribute, otherwise the value when checked
		 */
		get : function(){
			if(!this.hasAttribute("value"))
				return this.checked;
			else if(this.checked)
				return this.value;
		},
		set : checkedSetter
	},
	{
		selector : "input[type=\"radio\"]",
		/**
		 * All radios of a group share one name and only one of them can be checked,
		 * so an unchecked radio returns undefined instead of false - it carries no
		 * value, it just is not the selected one. This is what keeps the unchecked
		 * radios from overwriting the value of their group, once the results of a
		 * whole group get collected by name.
		 *
		 * @returns {boolean|string|undefined} true or the value when checked, undefined otherwise
		 */
		get : function(){
			if(this.checked)
				return this.hasAttribute("value") ? this.value : true;
		},
		set : checkedSetter
	}
];

/**
 * Fallback for all elements without a matching InputType.
 *
 * @type {InputType}
 */
const DefaultInputType = {
		get : function(){
			return this.value;
		},
		set : function(aValue){
			this.value = aValue;
			this.trigger("input");
		}
};

/**
 * @param {Element} aElement
 * @returns {InputType} the first matching type, or DefaultInputType
 */
const getInputType = function(aElement){
	for(let i = 0; i < InputTypes.length; i++)
		if(aElement.is(InputTypes[i].selector))
			return InputTypes[i];		
	return DefaultInputType;
};


const support = (0,_utils_Extender__WEBPACK_IMPORTED_MODULE_0__["default"])("ValueSupport", Prototype => {
	/**
	 * Gets or sets the value of this element.
	 *
	 * What a value is depends on the element: a select returns the values of all
	 * its selected options, a checkbox its checked state or its value, a radio a
	 * value only when it is checked, every other element its value.
	 *
	 * @param {...*} [aValue] - the new value, the accepted types depend on the element
	 * @returns {*|Element} the value of the element, or this when a value was set
	 */
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

/***/ },

/***/ "./node_modules/@default-js/defaultjs-extdom/src/index.js"
/*!****************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-extdom/src/index.js ***!
  \****************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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














/***/ },

/***/ "./node_modules/@default-js/defaultjs-extdom/src/utils/DelegaterBuilder.js"
/*!*********************************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-extdom/src/utils/DelegaterBuilder.js ***!
  \*********************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * Adds delegating methods to a prototype, one for each method of the target
 * prototypes.
 *
 * This is how a NodeList gets the methods of a Node: for every method name found
 * on the targets, a function is put on the source that hands the call to the
 * callback, together with that name. The callback then decides what to do - for a
 * list it applies the method to each node and collects the results.
 *
 * A name already on the source is left alone, so its own methods win. Only value
 * methods are taken, accessors are skipped, as their descriptor has no value.
 *
 * @param {function(string, Arguments):*} callback - called as method, with the name and the arguments
 * @param {Object} source - the prototype the delegating methods are added to
 * @param {...Object} theTargets - the prototypes whose method names are delegated
 */
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

/***/ },

/***/ "./node_modules/@default-js/defaultjs-extdom/src/utils/ExtendPrototype.js"
/*!********************************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-extdom/src/utils/ExtendPrototype.js ***!
  \********************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * Applies extensions to the prototype of a type.
 *
 * @param {Function} aType - the type whose prototype gets extended
 * @param {...function(Function):void} theExtenders - the wrapped extensions to apply, in order
 */
const extendPrototype = function(){
	const args = Array.from(arguments);
	const type = args.shift();
	while(args.length > 0){
		const extender = args.shift();
		extender(type);
	}
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (extendPrototype);

/***/ },

/***/ "./node_modules/@default-js/defaultjs-extdom/src/utils/Extender.js"
/*!*************************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-extdom/src/utils/Extender.js ***!
  \*************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Utils */ "./node_modules/@default-js/defaultjs-extdom/src/utils/Utils.js");


/**
 * Which extension is applied to which type, kept on the global object so it is
 * shared across separate loads of the library.
 *
 * @type {Object<string, Object<string, boolean>>}
 */
const EXTENSIONS_MAP = _Utils__WEBPACK_IMPORTED_MODULE_0__["default"].globalVar("___DOM_API_EXTENSION_MAP___", {});

/**
 * Wraps an extension so it applies to the prototype of a type only once.
 *
 * The returned function is what extendPrototype() calls with a type. Applying the
 * same named extension to the same type again is a no-op with a warning, so
 * loading the library twice does not patch the prototypes twice.
 *
 * @param {string} aName - the name of the extension, unique per type
 * @param {function(Object):void} aExtention - adds the members to the prototype
 * @returns {function(Function):void} a function applying the extension to a type
 */
const Extender = function(aName, aExtention){
	return function(aType){
		const {name, prototype} = aType;
		let extensions = EXTENSIONS_MAP[name];
		if(!extensions)
			extensions = EXTENSIONS_MAP[name] = {};		
		
		if(!extensions[aName]){
			extensions[aName] = true;
			aExtention(prototype);
		}
		else
			console.warn(`Duplicated load of extension \"${aName}\"!`);
	}
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Extender);

/***/ },

/***/ "./node_modules/@default-js/defaultjs-extdom/src/utils/Utils.js"
/*!**********************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-extdom/src/utils/Utils.js ***!
  \**********************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GLOBAL: () => (/* binding */ GLOBAL),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });

/**
 * The global object of the current environment.
 *
 * Detected with typeof guards, because a bare reference to an undeclared name
 * throws instead of being falsy - so a plain window || global chain would break
 * everywhere window is missing, not fall through. globalThis covers the browser,
 * node and workers, the rest stays as a fallback for older runtimes.
 *
 * @type {Object}
 */
const GLOBAL = typeof globalThis !== "undefined" ? globalThis :
	typeof window !== "undefined" ? window :
	typeof __webpack_require__.g !== "undefined" ? __webpack_require__.g :
	typeof self !== "undefined" ? self : {};

const Utils = {
	/**
	 * The global object, same as GLOBAL.
	 *
	 * @type {Object}
	 */
	global : GLOBAL,

	/**
	 * Reads a variable from the global object, initializing it once when a value
	 * is given and none is set yet.
	 *
	 * Used to share state between separate loads of the library, which each have
	 * their own module scope but the one global object in common.
	 *
	 * @param {string} aName - the name on the global object
	 * @param {*} [aInitValue] - the value to set when the name is still undefined
	 * @returns {*} the value on the global object
	 */
	globalVar : function(aName, aInitValue){
		if(arguments.length === 2 && typeof GLOBAL[aName] === "undefined")
			GLOBAL[aName] = aInitValue;

		return GLOBAL[aName];
	}
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Utils);

/***/ },

/***/ "./index.js"
/*!******************!*\
  !*** ./index.js ***!
  \******************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Context: () => (/* reexport safe */ _src_Context_js__WEBPACK_IMPORTED_MODULE_2__["default"]),
/* harmony export */   Directive: () => (/* reexport safe */ _src_Directive_js__WEBPACK_IMPORTED_MODULE_3__["default"]),
/* harmony export */   DirectiveElement: () => (/* reexport safe */ _src_DirectiveElement_js__WEBPACK_IMPORTED_MODULE_4__["default"]),
/* harmony export */   Renderer: () => (/* reexport safe */ _src_Renderer_js__WEBPACK_IMPORTED_MODULE_1__["default"]),
/* harmony export */   Template: () => (/* reexport safe */ _src_Template_js__WEBPACK_IMPORTED_MODULE_0__["default"]),
/* harmony export */   toAsyncTemplateLoader: () => (/* reexport safe */ _src_Template_js__WEBPACK_IMPORTED_MODULE_0__.toAsyncTemplateLoader)
/* harmony export */ });
/* harmony import */ var _src_Template_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/Template.js */ "./src/Template.js");
/* harmony import */ var _src_Renderer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/Renderer.js */ "./src/Renderer.js");
/* harmony import */ var _src_Context_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/Context.js */ "./src/Context.js");
/* harmony import */ var _src_Directive_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/Directive.js */ "./src/Directive.js");
/* harmony import */ var _src_DirectiveElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./src/DirectiveElement.js */ "./src/DirectiveElement.js");









/***/ },

/***/ "./node_modules/@default-js/defaultjs-common-utils/src/Global.js"
/*!***********************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-common-utils/src/Global.js ***!
  \***********************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * The global scope of the current environment.
 *
 * Resolved once when the module is loaded: globalThis, then global, window and self for engines not
 * knowing it yet. An empty object when none of them exists, so reading from it never throws.
 *
 * @module Global
 *
 * @example
 * GLOBAL.crypto.getRandomValues(buffer);
 */
const GLOBAL = (() => {
	if(typeof globalThis !== "undefined") return globalThis;
	if(typeof __webpack_require__.g !== "undefined") return __webpack_require__.g;
	if(typeof window !== "undefined") return window;
	if(typeof self !== "undefined") return self;
	return {};
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GLOBAL);


/***/ },

/***/ "./node_modules/@default-js/defaultjs-common-utils/src/ObjectProperty.js"
/*!*******************************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-common-utils/src/ObjectProperty.js ***!
  \*******************************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ObjectProperty)
/* harmony export */ });
/**
 * Only an object can carry a property, so a path stops at a primitive instead of handing out a
 * property that cannot be read or written. An Array, Map or Date passes - they are objects and take
 * a property like any other one, which is what makes a path like "list.0" work.
 *
 * @private
 * @param {*} value the value a step of the path resolved to
 * @param {string} name the name of that step
 * @param {string} key the whole path, to tell which one of several steps failed
 * @returns {void}
 * @throws {TypeError} when the step carries no object
 */
const assertDescendable = (value, name, key) => {
	if(value !== null && typeof value === "object")
		return;

	const type = value === null ? "null" : `a ${typeof value}`;
	throw new TypeError(`cannot descend into "${name}" of path "${key}" - ${type} is no object`);
};

/**
 * One property of an object, addressed by name, together with the object carrying it.
 *
 * Built through {@link ObjectProperty.load}, which walks a dotted path and hands back the property at
 * its end.
 *
 * @example
 * const property = ObjectProperty.load({a : {b : 1}}, "a.b");
 * property.value;      // 1
 * property.value = 2;  // writes into the object
 */
class ObjectProperty {
	/**
	 * @param {string} key name of the property
	 * @param {object} context the object carrying it
	 */
	constructor(key, context){
		this.key = key;
		this.context = context;
	}

	/**
	 * Whether the key is reachable on the context at all.
	 *
	 * This answers for the whole prototype chain, not only for own properties - load({}, "toString")
	 * reports true. That is deliberate: a path may address a prototype and extend it, so an inherited
	 * key is a key like any other here. Use hasValue to ask whether something is actually stored.
	 *
	 * @returns {boolean}
	 */
	get keyDefined(){
		return this.key in this.context;
	}
	
	/**
	 * Whether something is stored under the key. Only undefined counts as nothing - 0, "", false and
	 * null are values.
	 *
	 * @returns {boolean}
	 */
	get hasValue(){
		return typeof this.context[this.key] !== "undefined";
	}

	/**
	 * @returns {*} the stored value, undefined when there is none
	 */
	get value(){
		return this.context[this.key];
	}

	/**
	 * @param {*} data
	 */
	set value(data){
		this.context[this.key] = data;
	}

	/**
	 * Adds a value next to what is already there: writes it when the key holds nothing, turns the
	 * value into an array of both when it holds one, and pushes onto the array when it holds one
	 * already.
	 *
	 * The value itself is not looked at - appending undefined puts undefined into the array.
	 *
	 * @param {*} data
	 *
	 * @example
	 * property.append = 1;   // {key : 1}
	 * property.append = 2;   // {key : [1, 2]}
	 * property.append = 3;   // {key : [1, 2, 3]}
	 */
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

	/**
	 * Deletes the key from the object. Does nothing when it is not there.
	 *
	 * @returns {void}
	 */
	remove(){
		delete this.context[this.key];
	}
	
	/**
	 * Loads the property a dotted path addresses. Every part of the path is trimmed, so " a . b "
	 * addresses the same property as "a.b".
	 *
	 * A missing step is created with create, otherwise the path is reported as not loadable. A step
	 * holding something that is no object cannot be walked into at all - that is a broken path, not a
	 * missing one, and it is reported as an error regardless of create.
	 *
	 * @param {object} data the object to walk
	 * @param {string} key name of the property, a dotted path addresses a nested one
	 * @param {boolean} [create=true] create a missing step on the way
	 * @returns {ObjectProperty|null} null when a step is missing and create is false
	 * @throws {TypeError} when a step of the path holds something that is no object
	 *
	 * @example
	 * ObjectProperty.load({a : {b : 1}}, "a.b").value;   // 1
	 * ObjectProperty.load({list : [1, 2]}, "list.1").value;   // 2, an array is an object
	 * ObjectProperty.load({}, "a.b", false);             // null
	 * ObjectProperty.load({a : 0}, "a.b");               // throws, 0 is no object
	 */
	static load(data, key, create=true) {
		let context = data;
		const keys = key.split(".");
		let name = keys.shift().trim();
		while(keys.length > 0){
			if(typeof context[name] === "undefined" || context[name] === null){
				if(!create)
					return null;

				context[name] = {}
			}

			assertDescendable(context[name], name, key);
			context = context[name];
			name = keys.shift().trim();
		}

		return new ObjectProperty(name, context);
	}
};

/***/ },

/***/ "./node_modules/@default-js/defaultjs-common-utils/src/ObjectUtils.js"
/*!****************************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-common-utils/src/ObjectUtils.js ***!
  \****************************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   append: () => (/* binding */ append),
/* harmony export */   buildPropertyFilter: () => (/* binding */ buildPropertyFilter),
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
/**
 * Utilities to inspect, compare, merge and filter javascript objects.
 *
 * Several functions share one notion of data: primitives, simple objects, Array, Date, RegExp, Map
 * and Set. {@link isPojo} decides whether a value stays within it, {@link equalPojo} compares those
 * types by value, and {@link merge} treats everything outside of it as a value to be replaced.
 *
 * @module ObjectUtils
 */


/**
 * @private
 * @param {Array} a
 * @param {Array} b
 * @param {WeakMap} seen pairs currently under comparison
 * @returns {boolean}
 */
const equalArray = (a, b, seen) => {
	if (a.length !== b.length) return false;

	const length = a.length;
	for (let i = 0; i < length; i++) if (!internalEqualPojo(a[i], b[i], seen)) return false;

	return true;
};

/**
 * A set is unordered, so every entry of a has to find its own partner in b.
 *
 * @private
 * @param {Set} a
 * @param {Set} b
 * @param {WeakMap} seen pairs currently under comparison
 * @returns {boolean}
 */
const equalSet = (a, b, seen) => {
	if (a.size !== b.size) return false;

	const remaining = Array.from(b);
	for (const entryA of a) {
		const index = remaining.findIndex((entryB) => internalEqualPojo(entryA, entryB, seen));
		if (index < 0) return false;

		remaining.splice(index, 1);
	}

	return true;
};

/**
 * A map is unordered as well and its keys may be objects, so the keys get compared by value too.
 *
 * @private
 * @param {Map} a
 * @param {Map} b
 * @param {WeakMap} seen pairs currently under comparison
 * @returns {boolean}
 */
const equalMap = (a, b, seen) => {
	if (a.size !== b.size) return false;

	const remaining = Array.from(b);
	for (const [keyA, valueA] of a) {
		const index = remaining.findIndex(([keyB, valueB]) => internalEqualPojo(keyA, keyB, seen) && internalEqualPojo(valueA, valueB, seen));
		if (index < 0) return false;

		remaining.splice(index, 1);
	}

	return true;
};

/**
 * Compares two objects by prototype and by their own enumerable properties.
 *
 * @private
 * @param {object} a
 * @param {object} b
 * @param {WeakMap} seen pairs currently under comparison
 * @returns {boolean}
 */
const equalObject = (a, b, seen) => {
	if (Object.getPrototypeOf(a) !== Object.getPrototypeOf(b)) return false;

	const propertiesA = Object.keys(a);
	const propertiesB = Object.keys(b);
	if (propertiesA.length !== propertiesB.length) return false;

	for (const key of propertiesA) {
		// equal key counts alone would let {x:1, y:undefined} pass against {x:1, z:undefined}
		if (!Object.prototype.hasOwnProperty.call(b, key)) return false;
		if (!internalEqualPojo(a[key], b[key], seen)) return false;
	}

	return true;
};

/**
 * A cyclic structure can only be decided co-inductively: a pair already under comparison counts as
 * equal, otherwise the walk would never come back.
 *
 * @private
 * @param {WeakMap} seen pairs currently under comparison
 * @param {object} a
 * @param {object} b
 * @returns {boolean} true when this pair is already being compared further up the stack
 */
const isComparing = (seen, a, b) => {
	const partners = seen.get(a);
	return !!partners && partners.has(b);
};

/**
 * Notes a pair as being compared, so a cycle running through it terminates.
 *
 * @private
 * @param {WeakMap} seen pairs currently under comparison
 * @param {object} a
 * @param {object} b
 * @returns {void}
 */
const rememberComparing = (seen, a, b) => {
	const partners = seen.get(a);
	if (partners) partners.add(b);
	else seen.set(a, new WeakSet([b]));
};

/**
 * Checks whether a value is null or undefined.
 *
 * ValueHelper.noValue answers the same question. Both are kept on purpose, so ValueHelper stays free
 * of a dependency on this module - see the note there.
 *
 * @param {*} object the value to be testing
 * @returns {boolean}
 */
const isNullOrUndefined = (object) => {
	return object == null || typeof object === "undefined";
};

/**
 * Checks whether a value is a primitive.
 *
 * null and undefined count as primitives. A symbol does not - it is treated as an opaque value
 * throughout this module, so that {@link isPojo} keeps rejecting it as data.
 *
 * @param {*} object the value to be testing
 * @returns {boolean}
 */
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

/**
 * Checks whether a value is an object.
 *
 * Every object counts, Array, Map, Date and class instances included. Use {@link isPojo} to ask for
 * a simple data object instead.
 *
 * @param {*} object the value to be testing
 * @returns {boolean}
 */
const isObject = (object) => {
	if (isNullOrUndefined(object)) return false;

	return typeof object === "object";
};

/**
 * Compares two values by value.
 *
 * The types compared by value are the ones {@link isPojo} accepts as data: primitives, simple
 * objects, Array, Date, RegExp, Map and Set. A Date is compared by its time, a RegExp by source and
 * flags. Set and Map are unordered, so their entries are matched by value instead of by position,
 * and the keys of a Map take part in that comparison.
 *
 * Simple objects and class instances need the same prototype and the same own enumerable
 * properties. Every other object - Error, Promise, WeakMap and the like - keeps its state out of
 * reach, so those compare by identity only. Functions and symbols do as well.
 *
 * Cyclic structures are supported.
 *
 * @param {*} a
 * @param {*} b
 * @returns {boolean}
 *
 * @example
 * equalPojo({a : [1, 2]}, {a : [1, 2]});               // true
 * equalPojo(new Set([1, 2]), new Set([2, 1]));         // true, a set is unordered
 * equalPojo(new Date(0), new Date(1));                 // false
 * equalPojo(new Error("x"), new Error("x"));           // false, compared by identity
 */
const equalPojo = (a, b) => internalEqualPojo(a, b, new WeakMap());


/**
* @param {*} a
 * @param {*} b
 * @param {WeakMap} seen internal, tracks the pairs currently under comparison
 * @returns {boolean}
 */
const internalEqualPojo = (a, b, seen) => {
	if (isNullOrUndefined(a) || isNullOrUndefined(b)) return a === b;
	if (a === b) return true;
	if (isPrimitive(a) || isPrimitive(b)) return a === b;

	const typeA = typeof a;
	if (typeA !== typeof b) return false;
	if (typeA !== "object") return a === b; // function and symbol

	if (isComparing(seen, a, b)) return true;
	rememberComparing(seen, a, b);

	if(a instanceof Date) return  b instanceof Date ? Object.is(a.getTime(), b.getTime()) : false;
	else if(a instanceof RegExp) return b instanceof RegExp ? (a.source === b.source && a.flags === b.flags) : false;
	else if(a instanceof Array) return b instanceof Array ? equalArray(a, b, seen) : false;
	else if(a instanceof Set) return b instanceof Set ? equalSet(a, b, seen) : false;
	else if(a instanceof Map) return b instanceof Map ? equalMap(a, b, seen) : false;
	else if (Object.prototype.toString.call(a) !== "[object Object]") return false;	
	else return equalObject(a, b, seen);
};

/**
 * A plain object owns either no prototype at all or a prototype that itself has none. Checking the
 * chain length instead of comparing against Object.prototype keeps this working across realms,
 * where an iframe brings its own Object.prototype.
 *
 * @private
 * @param {*} object
 * @returns {boolean}
 */
const isPlainObject = (object) => {
	if (object === null || typeof object !== "object") return false;
	const prototype = Object.getPrototypeOf(object);
	return prototype === null || Object.getPrototypeOf(prototype) === null;
};

/**
 * Walks a value and decides whether everything reachable from it is data.
 *
 * @private
 * @param {*} value
 * @param {WeakSet} [seen] values already walked, closes cycles
 * @returns {boolean}
 */
const isDataValue = (value, seen = new WeakSet()) => {
	if (isPrimitive(value)) return true;
	else if (value instanceof Date) return true;
	else if (value instanceof RegExp) return true;

	if (seen.has(value)) return true;
	seen.add(value);

	if (value instanceof Array) return value.every((entry) => isDataValue(entry, seen));
	else if (value instanceof Map) {
		for (const [key, entry] of value) {
			if (!isDataValue(key, seen) || !isDataValue(entry, seen)) return false;
		}
		return true;
	} else if (value instanceof Set) {
		for (const entry of value) {
			if (!isDataValue(entry, seen)) return false;
		}
		return true;
	} else if (!isPlainObject(value))
		return false; // class instances and every other exotic object
	else {
		for (const key of Object.keys(value)) {
			if (!isDataValue(value[key], seen)) return false;
		}

		return true;
	}
};

/**
 * Checks whether an object is a pure data object.
 *
 * The object itself has to be a simple object - no Array, Map or something else. Every value
 * reachable from it has to be data as well: primitives, simple objects, Array, Date, RegExp, Map or
 * Set. Functions and class instances are rejected at any depth, including inside arrays and inside
 * the keys and values of a Map or Set.
 *
 * Only own enumerable properties are inspected. Cyclic references are allowed.
 *
 * @param {*} object the object to be testing
 * @returns {boolean}
 *
 * @example
 * isPojo({a : {b : [1, new Date()]}});   // true
 * isPojo({a : () => {}});                // false, a function is no data
 * isPojo({a : [{b : new Foo()}]});       // false, rejected at any depth
 * isPojo([]);                            // false, the object itself has to be a simple one
 */
const isPojo = (object) => {
	if (isNullOrUndefined(object) || !isPlainObject(object)) return false;

	return isDataValue(object);
};

/**
 * Appends a property value to an object. If the property already holds a value, it is converted
 * into an array carrying both. An undefined value is ignored.
 *
 * The key may address a nested property by a dotted path, missing steps are created on the way.
 *
 * @param {string} aKey name of the property, a dotted path addresses a nested one
 * @param {*} aData property value
 * @param {object} aObject the object to append the property to
 * @returns {object} the changed object
 *
 * @example
 * append("a", 1, {});             // {a : 1}
 * append("a", 2, {a : 1});        // {a : [1, 2]}
 * append("a.b", 1, {});           // {a : {b : 1}}
 */
const append = (aKey, aData, aObject) => {
	if (typeof aData !== "undefined") {
		const property = _ObjectProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"].load(aObject, aKey, true);
		property.append = aData;
	}
	return aObject;
};

/**
 * Own enumerable keys, strings and symbols alike - the same set Object.assign copies.
 *
 * @private
 * @param {*} source
 * @returns {Array<string|symbol>}
 */
const assignableKeys = (source) => {
	const object = Object(source);
	return Reflect.ownKeys(object).filter((key) => Object.prototype.propertyIsEnumerable.call(object, key));
};

/**
 * Merges objects into a target object - a recursive Object.assign. It steps into objects and sub
 * objects. Every other value is replaced by the value from the source object.
 *
 * Like Object.assign it copies own enumerable properties - string and symbol keys alike -, ignores
 * null and undefined sources and returns the target. Unlike Object.assign it steps into a property
 * when target and source both hold an object, instead of replacing it.
 *
 * A class instance counts as an object here and is merged property by property just like a simple
 * one. The target keeps its own prototype, only the properties of the source are applied to it - a
 * merge never turns the target into an instance of the class of the source.
 *
 * An Array, Set, Map, Date or RegExp is always replaced as a whole, never merged entry by entry.
 * That already applies when only one of both sides holds one. The result therefore carries the
 * container of the source with its own length - nothing of the target survives it, not even an
 * object sitting at the same index or under the same key.
 *
 * A key whose value is a symbol is skipped, on the target side as well as on the source side. A
 * symbol carries no data, so such a property is left untouched.
 *
 * The key __proto__ is skipped. Object.assign would only repoint the prototype of the target, but
 * merging into it would walk into Object.prototype and leak into every object.
 *
 * The target is modified in place. A sub object of a source that has no counterpart in the target is
 * taken over by reference, just like Object.assign does.
 *
 * @param {object} target the target object to merge into, a new object when falsy
 * @param {...object} sources the source objects, applied in order
 * @returns {object} the target object
 *
 * @example
 * merge({a : 1}, {b : 2});                          // {a : 1, b : 2}
 * merge({a : {x : 1}}, {a : {y : 2}});              // {a : {x : 1, y : 2}}
 * merge({a : [1, 2, 3]}, {a : [9]});                // {a : [9]}, replaced as a whole
 * merge({a : new Foo(1)}, {a : new Bar(2)});        // a stays a Foo, carrying the properties of both
 * merge({}, source1, source2, source3);
 */
const merge = (target, ...sources) => {
	if (!target) target = {};

	sources
		.filter((source) => !isNullOrUndefined(source))
		.forEach((source) => {
			const keys = assignableKeys(source);
			keys
				.filter((key) => key != "__proto__")
				.filter((key) => typeof target[key] !== "symbol")
				.filter((key) => typeof source[key] !== "symbol")
				.forEach((key) => {
					const value = source[key];
					const current = target[key];

					if(current == null ) target[key] = value;
					else if( typeof current !== typeof value ) target[key] = value;
					else if (current instanceof Array || value instanceof Array) target[key] = value;
					else if (current instanceof Set || value instanceof Set) target[key] = value;
					else if (current instanceof Map || value instanceof Map) target[key] = value;
					else if (current instanceof Date || value instanceof Date) target[key] = value;
					else if (current instanceof RegExp || value instanceof RegExp) target[key] = value;
					else if (isObject(current) && isObject(value)) merge(current, value);
					else target[key] = value;
				});
		});

	return target;
};

/**
 * Decides whether a single property is taken over by {@link filter}.
 *
 * @callback PropertyFilter
 * @param {string} name name of the property
 * @param {*} value value of the property
 * @param {object} context the object the property belongs to
 * @returns {boolean} true to keep the property
 */

/**
 * Builds a {@link PropertyFilter} accepting or rejecting a fixed list of property names.
 *
 * @param {object} options
 * @param {Array<string>} options.names the property names to decide on
 * @param {boolean} options.allowed true turns the list into an allow list, false into a deny list
 * @returns {PropertyFilter}
 *
 * @example
 * const deny = buildPropertyFilter({names : ["password"], allowed : false});
 * filter(user, deny);   // every property but password
 */
const buildPropertyFilter = ({ names, allowed }) => {
	return (name, value, context) => {
		return names.includes(name) === allowed;
	};
};

/**
 * Rebuilds an Array, Set or Map with its values filtered. A container keeps all of its entries -
 * only the values inside get filtered. The keys of a Map stay untouched, replacing them would break
 * every lookup against the result.
 *
 * @private
 * @param {Array|Set|Map} value
 * @param {PropertyFilter} propFilter
 * @param {boolean} deep
 * @param {WeakMap} copies maps an original onto its filtered copy
 * @returns {Array|Set|Map}
 */
const filterContainer = (value, propFilter, deep, copies) => {
	if (value instanceof Array) {
		const copy = [];
		copies.set(value, copy);
		for (const entry of value) copy.push(filterValue(entry, propFilter, deep, copies));

		return copy;
	}

	if (value instanceof Set) {
		const copy = new Set();
		copies.set(value, copy);
		for (const entry of value) copy.add(filterValue(entry, propFilter, deep, copies));

		return copy;
	}

	const copy = new Map();
	copies.set(value, copy);
	for (const [key, entry] of value) copy.set(key, filterValue(entry, propFilter, deep, copies));

	return copy;
};

/**
 * Filters a single value, dispatching on what it is.
 *
 * @private
 * @param {*} value
 * @param {PropertyFilter} propFilter
 * @param {boolean} deep
 * @param {WeakMap} copies maps an original onto its filtered copy
 * @returns {*} the filtered value, or the value itself when there is nothing to filter
 */
const filterValue = (value, propFilter, deep, copies) => {
	if (value === null || typeof value !== "object") return value;
	if (value instanceof Date || value instanceof RegExp) return value; // carry no properties to filter

	// a value seen before closes a cycle - its copy stands in, so nothing unfiltered leaks back in
	if (copies.has(value)) return copies.get(value);

	if (value instanceof Array || value instanceof Set || value instanceof Map) return filterContainer(value, propFilter, deep, copies);

	return filterObject(value, propFilter, deep, copies);
};

/**
 * Builds the filtered copy of an object. The copy is registered before it is filled, so a cycle
 * running back into it resolves to the copy instead of the original.
 *
 * @private
 * @param {object} data
 * @param {PropertyFilter} propFilter
 * @param {boolean} deep
 * @param {WeakMap} copies maps an original onto its filtered copy
 * @returns {object}
 */
const filterObject = (data, propFilter, deep, copies) => {
	const result = {};
	copies.set(data, result);

	for (const name in data) {
		const value = data[name];
		if (propFilter(name, value, data)){
			result[name] = deep ? filterValue(value, propFilter, deep, copies) : value;
		}
	}

	return result;
};

/**
 * Builds a new object holding the properties a filter accepts.
 *
 * The filter is called for every enumerable property, inherited ones included - filtering a window
 * relies on that, since most of its members sit on the prototype.
 *
 * With deep the filter is applied to sub objects as well. Array, Set and Map are rebuilt with their
 * values filtered, keeping all of their entries and, for a Map, its keys. Date and RegExp are taken
 * over as they are. A cyclic reference resolves to the filtered copy, so the result never carries a
 * reference into the untouched original.
 *
 * Without deep the accepted values are taken over as they are, sub objects by reference.
 *
 * @param {object} data the object to be filtered
 * @param {PropertyFilter} propFilter decides per property, see {@link buildPropertyFilter}
 * @param {object} [options]
 * @param {boolean} [options.deep=false] filter sub objects too
 * @returns {object} a new object
 *
 * @example
 * const deny = buildPropertyFilter({names : ["secret"], allowed : false});
 *
 * filter({secret : "x", a : 1}, deny);                             // {a : 1}
 * filter({sub : {secret : "x", a : 1}}, deny, {deep : true});      // {sub : {a : 1}}
 */
const filter = (data, propFilter, { deep = false } = {}) => filterObject(data, propFilter, deep, new WeakMap());

/**
 * Defines a constant, non enumerable property.
 *
 * @param {object} o the object to define the property on
 * @param {string} name name of the property
 * @param {*} value the value, neither writable nor configurable
 * @returns {void}
 */
const defValue = (o, name, value) => {
	Object.defineProperty(o, name, {
		value,
		writable: false,
		configurable: false,
		enumerable: false,
	});
};

/**
 * Defines a read only, non enumerable property backed by a getter.
 *
 * @param {object} o the object to define the property on
 * @param {string} name name of the property
 * @param {Function} get returns the value of the property
 * @returns {void}
 */
const defGet = (o, name, get) => {
	Object.defineProperty(o, name, {
		get,
		configurable: false,
		enumerable: false,
	});
};

/**
 * Defines a non enumerable property backed by a getter and a setter.
 *
 * @param {object} o the object to define the property on
 * @param {string} name name of the property
 * @param {Function} get returns the value of the property
 * @param {Function} set takes the new value of the property
 * @returns {void}
 */
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
	isPrimitive,
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


/***/ },

/***/ "./node_modules/@default-js/defaultjs-common-utils/src/PromiseUtils.js"
/*!*****************************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-common-utils/src/PromiseUtils.js ***!
  \*****************************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   lazyPromise: () => (/* binding */ lazyPromise),
/* harmony export */   timeoutPromise: () => (/* binding */ timeoutPromise)
/* harmony export */ });
/* harmony import */ var _ObjectUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ObjectUtils.js */ "./node_modules/@default-js/defaultjs-common-utils/src/ObjectUtils.js");
/**
 * Two ways of building a promise that something outside of it settles.
 *
 * {@link timeoutPromise} runs a function once a timeout has passed and lets the whole chain behind
 * it be canceled. {@link lazyPromise} hands out a promise together with its resolve and reject, for
 * the cases where the settling is driven from somewhere else - a framework callback, an event,
 * foreign code - and packing all of that into the executor would only blow the code up or is not
 * possible at all.
 *
 * The two carry different state on purpose: a timeoutPromise reports its cancellation through a
 * rejection and an AbortSignal, a lazyPromise reports its outcome through resolved, error and value.
 *
 * @module PromiseUtils
 */


/**
 * The reason an aborted operation rejects with. A DOMException named AbortError is what
 * AbortController itself uses, an Error carrying the same name stands in where it is missing.
 *
 * @private
 * @returns {Error|DOMException}
 */
const abortError = () => {
	if (typeof DOMException !== "undefined") return new DOMException("The operation was aborted.", "AbortError");

	/* istanbul ignore next - every browser the suite runs in brings DOMException, so this line only
	   stands in for environments the test run cannot reach */
	return Object.assign(new Error("The operation was aborted."), { name: "AbortError" });
};

/**
 * The reason a signal carries. abort() fills it in on its own, older implementations know the
 * method but not the property.
 *
 * @private
 * @param {AbortSignal} signal
 * @returns {*}
 */
const abortReason = (signal) => (typeof signal.reason === "undefined" ? abortError() : signal.reason);

/**
 * Adds the cancel api to a promise and to every promise derived from it. All of them share one
 * controller, so a chain can be canceled from any of its links.
 *
 * @private
 * @param {Promise} promise
 * @param {AbortController} controller
 * @param {Function} cancel
 * @returns {Promise} the promise itself
 */
const cancelable = (promise, controller, cancel) => {
	(0,_ObjectUtils_js__WEBPACK_IMPORTED_MODULE_0__.defValue)(promise, "cancel", cancel);
	(0,_ObjectUtils_js__WEBPACK_IMPORTED_MODULE_0__.defGet)(promise, "signal", () => controller.signal);
	(0,_ObjectUtils_js__WEBPACK_IMPORTED_MODULE_0__.defGet)(promise, "canceled", () => controller.signal.aborted);

	// then has to hand both handlers through and return the derived promise - catch, finally and
	// await are defined in terms of then, so anything less silently breaks those as well
	const then = promise.then;
	(0,_ObjectUtils_js__WEBPACK_IMPORTED_MODULE_0__.defValue)(promise, "then", (onFulfilled, onRejected) => cancelable(then.call(promise, onFulfilled, onRejected), controller, cancel));

	return promise;
};

/**
 * Calls a function after a timeout and settles with whatever it produces.
 *
 * The function is called with resolve, reject and the AbortSignal of the promise, so work started
 * inside it can be aborted along with it. An exception thrown by the function rejects the promise
 * instead of escaping into the timer.
 *
 * The promise brings its own AbortController. cancel() clears a pending timeout and rejects with an
 * AbortError, which travels down the whole chain - no then handler behind it runs. cancel() sits on
 * every promise derived from it and does nothing once the promise has settled.
 *
 * @param {Function} fn called with (resolve, reject, signal) once the timeout has passed
 * @param {number} ms the timeout in milliseconds
 * @returns {Promise} a promise carrying cancel(), signal and canceled
 *
 * @example
 * const promise = timeoutPromise((resolve) => resolve("done"), 1000);
 * await promise;                                  // "done"
 *
 * @example
 * const promise = timeoutPromise((resolve) => resolve("done"), 1000);
 * promise.then(() => console.log("never runs"));
 * promise.cancel();
 * await promise;                                  // throws AbortError
 */
const timeoutPromise = (fn, ms) => {
	const controller = new AbortController();
	const signal = controller.signal;
	let timeout = null;
	let settled = false;

	const promise = new Promise((resolve, reject) => {
		// the timeout is cleared on every way out, a canceled promise must not keep the timer alive
		const settle = (handler) => (value) => {
			if (settled) return;

			settled = true;
			if (timeout !== null) {
				clearTimeout(timeout);
				timeout = null;
			}
			handler(value);
		};

		const onResolve = settle(resolve);
		const onReject = settle(reject);

		signal.addEventListener("abort", () => onReject(abortReason(signal)), { once: true });

		timeout = setTimeout(() => {
			timeout = null;
			try {
				fn(onResolve, onReject, signal);
			} catch (error) {
				onReject(error);
			}
		}, ms);
	});

	return cancelable(promise, controller, (reason) => {
		if (settled || signal.aborted) return;

		controller.abort(typeof reason === "undefined" ? abortError() : reason);
	});
};

/**
 * Builds a promise together with the two functions settling it.
 *
 * The point is to have the promise and its resolve and reject apart from each other: whatever
 * settles it does not have to sit inside the executor. That keeps a promise usable where the
 * settling is driven by a framework callback, an event or any other foreign code the executor has no
 * way of reaching.
 *
 * The promise carries three read only properties:
 *
 * - resolved says the promise has been settled. It says nothing about the outcome - it is true for a
 *   failure just as well.
 * - error tells the two apart.
 * - value holds whatever the promise was settled with: the result after a resolve, the reason after
 *   a reject. error is what decides how to read it.
 *
 * An Error always leads to a rejection, in both directions - handing one to resolve rejects the
 * promise just like reject would. A reason that is no Error is wrapped into one, and a reject
 * without a reason gets an Error of its own, so there is always a message to read.
 *
 * Both functions settle the promise once. A second call throws instead of settling again, so the
 * three properties can never end up disagreeing with the promise.
 *
 * @returns {Promise} a promise carrying resolve(), reject(), value, error and resolved
 * @throws {Error} from resolve or reject when the promise has already been settled
 *
 * @example
 * const promise = lazyPromise();
 * element.addEventListener("load", () => promise.resolve(element), {once : true});
 * await promise;
 *
 * @example
 * const promise = lazyPromise();
 * promise.reject("no connection");   // rejects with an Error carrying that message
 * promise.resolved;                  // true - settled, not successful
 * promise.error;                     // true
 * promise.value;                     // "no connection"
 */
const lazyPromise = () => {
	let promiseResolve = null;
	let promiseReject = null;
	let resolved = false;
	let error = false;
	let value = undefined;

	const promise = new Promise((r, e) => {
		promiseResolve = r;
		promiseReject = (anError) => e(anError instanceof Error ? anError : new Error(anError == null ? "Promise rejected with no reason" : anError));
	});

	(0,_ObjectUtils_js__WEBPACK_IMPORTED_MODULE_0__.defValue)(promise, "resolve", (result) => {
		if (resolved) throw new Error("Promise already resolved!");
		resolved = true;
		value = result;
		if (value instanceof Error) {
			error = true;
			promiseReject(value);
		} else promiseResolve(value);
	});
	(0,_ObjectUtils_js__WEBPACK_IMPORTED_MODULE_0__.defValue)(promise, "reject", (result) => {
		if (resolved) throw new Error("Promise already resolved!");
		resolved = true;
		value = result;
		error = true;
		promiseReject(result);
	});

	(0,_ObjectUtils_js__WEBPACK_IMPORTED_MODULE_0__.defGet)(promise, "value", () => value);
	(0,_ObjectUtils_js__WEBPACK_IMPORTED_MODULE_0__.defGet)(promise, "error", () => error);
	(0,_ObjectUtils_js__WEBPACK_IMPORTED_MODULE_0__.defGet)(promise, "resolved", () => resolved);

	return promise;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
	lazyPromise,
	timeoutPromise,
});


/***/ },

/***/ "./node_modules/@default-js/defaultjs-common-utils/src/javascript/String.js"
/*!**********************************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-common-utils/src/javascript/String.js ***!
  \**********************************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/**
 * Adds hashcode() to every string - see the note on patching prototypes in ./index.js.
 *
 * The hash is the one java uses for its strings: h = 31 * h + char, kept inside 32 signed bits. It
 * is meant for bucketing and for telling texts apart cheaply, not for anything where collisions
 * matter - two different texts can share a hash, and it is no cryptographic digest.
 *
 * Only defined when nothing else carries that name already.
 *
 * @returns {number} a 32 bit signed integer, 0 for the empty string
 *
 * @example
 * "test".hashcode();   // 3556498
 */
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

/***/ },

/***/ "./node_modules/@default-js/defaultjs-expression-language/index.js"
/*!*************************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-expression-language/index.js ***!
  \*************************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ExecuterRegistry: () => (/* reexport module object */ _src_ExecuterRegistry_js__WEBPACK_IMPORTED_MODULE_2__),
/* harmony export */   ExpressionResolver: () => (/* reexport safe */ _src_ExpressionResolver_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _src_ExpressionResolver_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/ExpressionResolver.js */ "./node_modules/@default-js/defaultjs-expression-language/src/ExpressionResolver.js");
/* harmony import */ var _src_executer_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/executer/index.js */ "./node_modules/@default-js/defaultjs-expression-language/src/executer/index.js");
/* harmony import */ var _src_ExecuterRegistry_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/ExecuterRegistry.js */ "./node_modules/@default-js/defaultjs-expression-language/src/ExecuterRegistry.js");







/***/ },

/***/ "./node_modules/@default-js/defaultjs-expression-language/src/CodeCache.js"
/*!*********************************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-expression-language/src/CodeCache.js ***!
  \*********************************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CodeCache)
/* harmony export */ });
/**
 * @typedef {Object} CacheEntry
 * @property {number} lastHit - Monotonic marker of the last read or write, the eviction order.
 * @property {string} key
 * @property {Function} value
 */

/**
 * @typedef {Object} CodeCacheOptions
 * @property {number} [size] - Maximum number of entries in the cache, a fraction rounded down. If set
 * to 0 or less, caching is disabled. Left out, the size stays as it is.
 */

/** The size every cache starts with. */
const START_SIZE = 5000;

/**
 * CodeCache class to manage caching of generated code snippets.
 *
 * Entries are evicted least recently used first: every hit refreshes the entry, so an
 * expression that keeps being resolved outlives one that was compiled once and dropped.
 * The marker is a counter rather than a timestamp — a burst of first-time compilations
 * falls into a single millisecond, which would leave the eviction order to chance.
 */
class CodeCache {
	/** @type {boolean} */
	#disabled = false;
	/** @type {number} */
	#size = 0;
	/** @type {number} */
	#maxSize = 0;
	/** @type {Array<CacheEntry>} */
	#entries = [];
	/** @type {Map<string,CacheEntry>} */
	#entryMap = new Map();
	/** @type {number} - Hands out the `lastHit` markers, never reset. */
	#clock = 0;


	/**
	 * Starts with a size of 5000, then applies the options.
	 *
	 * @param {CodeCacheOptions} options
	 */
	constructor(options = {}) {
		this.#resize(START_SIZE);
		this.setup(options);
	}

	/**
	 * Applies what the options carry and leaves everything else as it is. A size of 0 or less
	 * disables the cache and releases its entries, a later positive size enables it again and starts
	 * empty.
	 *
	 * @param {CodeCacheOptions} options
	 * @throws {TypeError} where the size is not a finite number
	 */
	setup({ size } = {}) {
		if (size === undefined) return;
		if (typeof size !== "number" || !Number.isFinite(size)) throw new TypeError(`The size of a code cache is a finite number, not ${String(size)}!`);

		this.#resize(Math.floor(size));
	}

	/**
	 * @param {number} aSize a whole number
	 */
	#resize(aSize) {
		this.#disabled = aSize <= 0;
		if (this.#disabled) {
			this.#size = 0;
			this.#maxSize = 0;
			this.clear();
		} else {
			this.#size = aSize;
			this.#maxSize = Math.floor(aSize * 1.1);
			this.#trim();
		}
	}

	/**
	 * Whether an entry is held under the key. A disabled cache holds none. Asking does not count as a
	 * hit, so it leaves the eviction order alone.
	 *
	 * @param {string} key
	 * @returns {boolean}
	 */
	has(key) {
		if(this.#disabled) return false;
		return this.#entryMap.has(key);
	}

	/**
	 * The code held under the key, or null where none is held or the cache is disabled. A hit
	 * refreshes the entry, so it is evicted last.
	 *
	 * @param {string} key
	 * @returns {?Function}
	 */
	get(key) {
		if(this.#disabled) return null;
		const entry = this.#entryMap.get(key);
		if (entry) {
			entry.lastHit = ++this.#clock;
			return entry.value;
		}
		return null;
	}

	/**
	 * Holds the code under the key, replacing what was held there, and refreshes the entry. Once the
	 * cache reaches a tenth past its size, the least recently used entries are evicted down to the
	 * size.
	 * A disabled cache keeps nothing.
	 *
	 * @param {string} key
	 * @param {Function} code
	 */
	set(key, code) {
		if(this.#disabled) return;
		let entry = this.#entryMap.get(key);
		if (entry) {
			entry.lastHit = ++this.#clock;
			entry.value = code;
		} else {
			entry = {
				lastHit: ++this.#clock,
				key,
				value: code,
			};
			this.#entries.push(entry);
			this.#entryMap.set(key, entry);
		}

		if (this.#entryMap.size >= this.#maxSize) this.#trim();
	}

	/**
	 * Drops every entry. The size stays as it is.
	 */
	clear() {
		this.#entries = [];
		this.#entryMap = new Map();
	}

	#trim() {
		this.#entries.sort((a, b) => b.lastHit - a.lastHit);
		if (this.#entries.length > this.#size) {
			const entriesToRemove = this.#entries.splice(this.#size);
			for (const entry of entriesToRemove) {
				this.#entryMap.delete(entry.key);
			}
		}
	}
};


/***/ },

/***/ "./node_modules/@default-js/defaultjs-expression-language/src/DefaultValue.js"
/*!************************************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-expression-language/src/DefaultValue.js ***!
  \************************************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DefaultValue)
/* harmony export */ });
/**
 * A default value as the resolver carries it, which tells "no default passed" apart from "the
 * default is undefined".
 *
 * @export
 * @class DefaultValue
 */
class DefaultValue {
	/**
	 * Created without an argument, it carries no default; created with one, it carries that
	 * argument, undefined included.
	 *
	 * @constructor
	 * @param {*} [value]
	 */
	constructor(value){
		/** @type {boolean} whether a default was passed */
		this.hasValue = arguments.length == 1;
		/** @type {*} the default, meaningful only where hasValue is true */
		this.value = value;
	}
};


/***/ },

/***/ "./node_modules/@default-js/defaultjs-expression-language/src/Executer.js"
/*!********************************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-expression-language/src/Executer.js ***!
  \********************************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Executer)
/* harmony export */ });
/**
 * The interface every executer implements. An executer runs statements and
 * holds no context of its own: the context always comes from the resolver.
 *
 * An own implementation is built from it by handing over the function that does the work.
 *
 * @export
 * @class Executer
 */
class Executer{

	#execution;

	/**
	 * @param {Object} [option]
	 * @param {(aStatement: string, aContext: object) => *} [option.execution] runs a statement over
	 * a context and answers the result, a promise included. Without one, every execution throws.
	 */
	constructor({execution} = {}){
		this.#execution = execution || (() => {throw new Error("not implemented")});
	}

	/**
	 * Runs a statement over a context.
	 *
	 * @param {string} aStatement the statement, without delimiters and scope prefix
	 * @param {object} aContext the context of the resolver the statement is evaluated on
	 * @returns {*} what the execution answers, a promise included
	 */
	execute(aStatement, aContext){
		return this.#execution(aStatement, aContext);
	}
};


/***/ },

/***/ "./node_modules/@default-js/defaultjs-expression-language/src/ExecuterRegistry.js"
/*!****************************************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-expression-language/src/ExecuterRegistry.js ***!
  \****************************************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   getExecuter: () => (/* binding */ getExecuter),
/* harmony export */   register: () => (/* binding */ register)
/* harmony export */ });
/* harmony import */ var _Executer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Executer.js */ "./node_modules/@default-js/defaultjs-expression-language/src/Executer.js");


const EXECUTERS = new Map();

/**
 * Keeps an executer under a name, so a resolver can be given the name instead of the instance.
 * An executer already kept under the name is replaced.
 *
 * @param {string} aName
 * @param {Executer} anExecuter
 */
const register = (aName, anExecuter) => {
	EXECUTERS.set(aName, anExecuter);
};

/**
 * The executer kept under a name. Also the default export of this module.
 *
 * @param {string} aName
 * @returns {Executer}
 * @throws {Error} where no executer is kept under the name
 */
const getExecuter = (aName) => {
	const executer = EXECUTERS.get(aName);
	if (!executer) throw new Error(`Executer "${aName}" is not registered!`);
	return executer;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getExecuter);


/***/ },

/***/ "./node_modules/@default-js/defaultjs-expression-language/src/ExpressionResolver.js"
/*!******************************************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-expression-language/src/ExpressionResolver.js ***!
  \******************************************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ExpressionResolver)
/* harmony export */ });
/* harmony import */ var _default_js_defaultjs_common_utils_src_ObjectUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @default-js/defaultjs-common-utils/src/ObjectUtils.js */ "./node_modules/@default-js/defaultjs-common-utils/src/ObjectUtils.js");
/* harmony import */ var _DefaultValue_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DefaultValue.js */ "./node_modules/@default-js/defaultjs-expression-language/src/DefaultValue.js");
/* harmony import */ var _ExecuterRegistry_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ExecuterRegistry.js */ "./node_modules/@default-js/defaultjs-expression-language/src/ExecuterRegistry.js");
/* harmony import */ var _executer_ContextDeconstructorExecuter_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./executer/ContextDeconstructorExecuter.js */ "./node_modules/@default-js/defaultjs-expression-language/src/executer/ContextDeconstructorExecuter.js");
/* harmony import */ var _ResolverContextHandle_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ResolverContextHandle.js */ "./node_modules/@default-js/defaultjs-expression-language/src/ResolverContextHandle.js");
/* harmony import */ var _Executer_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Executer.js */ "./node_modules/@default-js/defaultjs-expression-language/src/Executer.js");
/* harmony import */ var _ExpressionScanner_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ExpressionScanner.js */ "./node_modules/@default-js/defaultjs-expression-language/src/ExpressionScanner.js");
/* harmony import */ var _Utils_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Utils.js */ "./node_modules/@default-js/defaultjs-expression-language/src/Utils.js");









/** @type {Executer} */
let DEFAULT_EXECUTER = _executer_ContextDeconstructorExecuter_js__WEBPACK_IMPORTED_MODULE_3__["default"];

const DEFAULT_NOT_DEFINED = new _DefaultValue_js__WEBPACK_IMPORTED_MODULE_1__["default"]();
const toDefaultValue = (value) => {
	if (value instanceof _DefaultValue_js__WEBPACK_IMPORTED_MODULE_1__["default"]) return value;

	return new _DefaultValue_js__WEBPACK_IMPORTED_MODULE_1__["default"](value);
};

let NAME_COUNTER = 0;
/**
 * The name a resolver carries where the caller passed none. Only uniqueness is promised, the shape
 * is not.
 *
 * @returns {string}
 */
const generateName = () => `ER${++NAME_COUNTER}`;

/**
 * The name a resolver keeps: the one passed, trimmed and held to the characters a scope name may
 * carry, or a generated one where none was passed.
 *
 * @param {?string} aName
 * @returns {string}
 * @throws {TypeError} where the name is no string, empty, or carries a character a scope name cannot
 * carry
 */
const toName = (aName) => {
	if (aName == null) return generateName();
	if (typeof aName !== "string") throw new TypeError(`The option name takes a string, not a ${typeof aName}!`);

	const name = (0,_Utils_js__WEBPACK_IMPORTED_MODULE_7__.trimToNull)(aName);
	if (name == null) throw new TypeError("The option name takes a name, not an empty string!");
	for (let index = 0; index < name.length; index++)
		if (!(0,_Utils_js__WEBPACK_IMPORTED_MODULE_7__.isNameCharacter)(name.charCodeAt(index))) throw new TypeError(`The name "${name}" carries a character a scope name cannot carry - only ASCII letters, digits, "-", "_" and whitespace are allowed!`);

	return name;
};

/**
 * The scope name a filter of the data methods selects, read like a scope prefix: trimmed, and null
 * where there is none.
 *
 * @param {?string} aFilter
 * @returns {?string}
 * @throws {TypeError} where the filter is no string
 */
const toScope = (aFilter) => {
	if (aFilter == null) return null;
	if (typeof aFilter !== "string") throw new TypeError(`A filter is a scope name, not a ${typeof aFilter}!`);

	return (0,_Utils_js__WEBPACK_IMPORTED_MODULE_7__.trimToNull)(aFilter);
};

/**
 * The property key a data method works with - a string, "" included, a symbol, or a number, which
 * names the same property as its string and is looked up as one.
 *
 * @param {string|number|symbol} aKey
 * @returns {string|symbol}
 * @throws {TypeError} where the key is none, or of a type no property key has
 */
const toKey = (aKey) => {
	const type = typeof aKey;
	if (type === "string" || type === "symbol") return aKey;
	if (type === "number") return String(aKey);

	throw new TypeError(`A key is a string, a number or a symbol, not ${aKey == null ? "missing" : `a ${type}`}!`);
};

const warnFailedStatement = (aStatement, anError) => {
	console.warn(`Execution error on statement!
		statement:
		${aStatement}
		error:
		${anError}
		`);
};

/**
 * @param {*} aResult
 * @param {DefaultValue} aDefault
 * @returns {*}
 */
const withDefault = (aResult, aDefault) => {
	if (aResult !== null && typeof aResult !== "undefined") return aResult;
	else if (aDefault.hasValue) return aDefault.value;
	return aResult;
};

// the first argument of a static entry point is a string, or a configuration object
const isConfiguration = (aValue) => aValue !== null && typeof aValue === "object";

// a configuration counts as passing a default where it carries the key, whatever it holds
const defaultOf = (aConfiguration) => ("defaultValue" in aConfiguration ? aConfiguration.defaultValue : DEFAULT_NOT_DEFINED);

/**
 * Resolves `${...}` expressions against a context. A resolver may have a parent, and the resolvers
 * from it up to the root form a chain: a name is looked up from this resolver towards the root, and
 * a scope prefix `${name::statement}` addresses one resolver of the chain.
 *
 * Used statically with an ad-hoc context (`resolve`, `resolveText`), or as an instance within a
 * chain.
 *
 * @export
 * @class ExpressionResolver
 */
class ExpressionResolver {
	/**
	 * Sets the executer a resolver without a parent takes where the `executer` option is left out,
	 * and so the executer of the static entry points.
	 *
	 * @param {string|Executer} anExecuter a registered name or an `Executer` instance
	 * @throws {TypeError} where the value is neither a string nor an `Executer` instance
	 * @throws {Error} where a name is not registered
	 */
	static set defaultExecuter(anExecuter) {
		if (anExecuter instanceof _Executer_js__WEBPACK_IMPORTED_MODULE_5__["default"]) DEFAULT_EXECUTER = anExecuter;
		else if (typeof anExecuter === "string") DEFAULT_EXECUTER = (0,_ExecuterRegistry_js__WEBPACK_IMPORTED_MODULE_2__.getExecuter)(anExecuter);
		else throw new TypeError(`ExpressionResolver.defaultExecuter takes a registered name or an Executer, not a ${typeof anExecuter}!`);
		console.info(`Changed default executer for ExpressionResolver!`);
	}

	/**
	 * The executer a resolver without a parent takes where the `executer` option is left out;
	 * `context-deconstruction-executer` until it is set.
	 *
	 * @type {Executer}
	 */
	static get defaultExecuter() {
		return DEFAULT_EXECUTER;
	}

	/** @type {string|null} */
	#name = null;
	/** @type {ExpressionResolver|null} */
	#parent = null;
	/** @type {Executer|null} */
	#executer = null;
	/** @type {object|null} */
	#context = null;
	/** @type {ResolverContextHandle|null} */
	#contextHandle = null;

	/**
	 * @constructor
	 * @param {object} [options]
	 * @param {?object} [options.context] any object; where none is passed - left out, null or
	 * undefined - the resolver has no context of its own
	 * @param {?ExpressionResolver} [options.parent=null]
	 * @param {?string} [options.name=null] kept trimmed; where none is passed, one is generated
	 * @param {?(string|Executer)} [options.executer] the registered name of an executer, or an
	 * `Executer` instance. A name that is not registered throws; an instance needs no registration,
	 * because it addresses the executer directly. Null and undefined count as left out. Without the
	 * option the resolver takes the executer of its parent, and one without a parent
	 * `ExpressionResolver.defaultExecuter`.
	 * @throws {TypeError} where the parent is no resolver, the context a primitive, the name no
	 * string, empty, or carrying a character a scope name cannot carry, or the executer neither a
	 * string nor an `Executer` instance
	 * @throws {Error} where the executer is named and the name is not registered
	 */
	constructor({ context, parent = null, name = null, executer } = {}) {
		if (parent != null && !(parent instanceof ExpressionResolver)) throw new TypeError("The option parent takes an ExpressionResolver!");
		if (context != null && typeof context !== "object" && typeof context !== "function") throw new TypeError(`The option context takes an object, not a ${typeof context}!`);
		if (executer != null && typeof executer !== "string" && !(executer instanceof _Executer_js__WEBPACK_IMPORTED_MODULE_5__["default"])) throw new TypeError(`The option executer takes a registered name or an Executer, not a ${typeof executer}!`);
		this.#name = toName(name);

		if(executer instanceof _Executer_js__WEBPACK_IMPORTED_MODULE_5__["default"]) this.#executer =  executer;
		else if (typeof executer === "string") this.#executer = (0,_ExecuterRegistry_js__WEBPACK_IMPORTED_MODULE_2__.getExecuter)(executer);
		else if(parent != null) this.#executer = parent.executer;
		else this.#executer = ExpressionResolver.defaultExecuter;

		this.#parent = parent;
		this.#contextHandle = new _ResolverContextHandle_js__WEBPACK_IMPORTED_MODULE_4__["default"](context , this.#parent ? this.#parent.contextHandle : null);
		this.#context = this.#contextHandle.context;
	}

	/**
	 * The name this resolver is addressed by in a scope prefix and a filter.
	 *
	 * @type {string}
	 */
	get name() {
		return this.#name;
	}

	/**
	 * @type {ExpressionResolver|null}
	 */
	get parent() {
		return this.#parent;
	}

	/**
	 * The context of this resolver as an expression sees it. It is not the object passed to the
	 * constructor and it answers for the whole chain. Over the global object it is the global
	 * object itself.
	 *
	 * @type {Record<string|symbol, *>}
	 */
	get context() {
		return this.#context;
	}

	/**
	 * The executer in use, chosen once in the constructor.
	 *
	 * @type {Executer}
	 */
	get executer() {
		return this.#executer;
	}

	/**
	 * The internal handle behind the context, public for `resetCache`.
	 *
	 * @type {ResolverContextHandle}
	 */
	get contextHandle() {
		return this.#contextHandle;
	}

	/**
	 * The names of every resolver from the root down to this one, as a path - `/root/…/this`. It
	 * describes the structure and does not change.
	 *
	 * @type {string}
	 */
	get chain() {
		// a loop, not a recursion into the parent: a deep chain overflowed the stack
		let path = "";
		let resolver = this;
		while (resolver) {
			path = `/${resolver.name}${path}`;
			resolver = resolver.parent;
		}

		return path;
	}

	/**
	 * The names of the resolvers from the root down to this one that provide a context, as a path
	 * like `chain`. A resolver built without a context joins it the moment a value is set on it, so
	 * this describes a state and not the structure. Where none provides one,
	 * the answer is the empty string.
	 *
	 * @type {string}
	 */
	get effectiveChain() {
		// a loop, not a recursion into the parent: a deep chain overflowed the stack
		let path = "";
		let resolver = this;
		while (resolver) {
			if (resolver.contextHandle.providesContext) path = `/${resolver.name}${path}`;
			resolver = resolver.parent;
		}

		return path;
	}

	/**
	 * The contexts of exactly the resolvers `effectiveChain` names, as an array, this resolver's
	 * first and the root's last. A state like `effectiveChain`.
	 *
	 * @type {Array<Record<string|symbol, *>>}
	 */
	get contextChain() {
		const result = [];
		let resolver = this;
		while (resolver) {
			if (resolver.contextHandle.providesContext) result.push(resolver.context);

			resolver = resolver.parent;
		}

		return result;
	}

	/**
	 * The resolver a call addresses: the one the filter names, or the resolver the call was made on
	 * where no filter is given.
	 *
	 * A filter selects exactly one resolver, the nearest of that name from here towards the root, and
	 * a filter matching none throws - a wrong name in an API call is a mistake in the calling code,
	 * unlike a scope prefix inside an expression, which answers undefined.
	 *
	 * @param {?string} aScope the filter as `toScope` reads it
	 * @returns {ExpressionResolver}
	 */
	#findResolver(aScope) {
		if (!aScope) return this;

		const resolver = this.#resolverForScope(aScope);
		if (resolver) return resolver;

		throw new Error(`Filter "${aScope}" matches no resolver of the chain!`);
	}

	/**
	 * The nearest resolver from here to the root that carries the scope name, or null where none
	 * carries it. A filter and a scope prefix answer a miss differently, so each caller does that
	 * for itself.
	 *
	 * @param {string} aScope
	 * @returns {ExpressionResolver|null}
	 */
	#resolverForScope(aScope) {
		// a loop, not a recursion into the parent: one call per resolver climbed overflowed the
		// stack on a deep chain
		let resolver = this;
		while (resolver) {
			if (resolver.#name === aScope) return resolver;
			resolver = resolver.#parent;
		}

		return null;
	}

	/**
	 * Hands a statement to the resolver it addresses - the one its scope prefix names, or this one
	 * without a prefix - and answers what that resolver's executer answers, a promise included. An
	 * empty statement and a prefix no resolver of the chain carries answer undefined, and the default
	 * applies to it like to any other result.
	 *
	 * Deliberately not async: the entry point awaits the answer once, and a synchronous throw of the
	 * executer lands in its `try` all the same. An error is not caught here, because the two entry
	 * points answer it differently.
	 *
	 * @param {?string} aStatement trimmed, and null where it is empty
	 * @param {?string} aScope the scope prefix, null where there is none
	 * @returns {*}
	 */
	#execute(aStatement, aScope) {
		const resolver = aScope ? this.#resolverForScope(aScope) : this;
		// an empty statement answers undefined, the same as `return;` in JavaScript
		if (resolver === null || aStatement == null) return undefined;

		return resolver.#executer.execute(aStatement, resolver.#context);
	}

	/**
	 * The nearest resolver from here to the root that carries the key itself, or null where none
	 * carries it. What decides is whether a resolver provides the name, not what it holds.
	 *
	 * @param {string|symbol} key
	 * @returns {ExpressionResolver|null}
	 */
	#resolverForKey(key) {
		let resolver = this;
		while (resolver) {
			if (resolver.contextHandle.hasName(key)) return resolver;
			resolver = resolver.parent;
		}

		return null;
	}

	/**
	 * Reads a value along the chain, from the addressed resolver towards the root. Without a key -
	 * null or undefined - it answers the whole context of that resolver, which still sees the chain on
	 * every access.
	 *
	 * @param {?(string|number|symbol)} [key] a property key; a number is looked up as its string
	 * @param {?string} [filter] the scope name of the resolver the call addresses; without one, this
	 * resolver
	 * @returns {*} the value, or the whole context without a key
	 * @throws {TypeError} where the key is of a type no property key has, or the filter no string
	 * @throws {Error} where the filter matches no resolver of the chain
	 */
	getData(key, filter) {
		const resolver = this.#findResolver(toScope(filter));
		if (key == null) return resolver.context;

		return resolver.context[toKey(key)];
	}

	/**
	 * Sets a value, in the object the caller handed over. Without a filter the value is changed where
	 * the key lives, counting from here towards the root, and created here where no resolver carries
	 * it. With a filter the addressed resolver is the target outright.
	 *
	 * @param {string|number|symbol} key a property key; a number is looked up as its string
	 * @param {*} value
	 * @param {?string} [filter] the scope name of the resolver the call addresses
	 * @throws {TypeError} where the key is missing or of a type no property key has, the filter no
	 * string, or the object refuses the write
	 * @throws {Error} where the filter matches no resolver of the chain
	 */
	updateData(key, value, filter) {
		const property = toKey(key);
		const scope = toScope(filter);
		const resolver = this.#findResolver(scope);

		const target = scope ? resolver : this.#resolverForKey(property) || this;
		target.context[property] = value;
	}

	/**
	 * Removes the key from one resolver - the addressed one with a filter, and without one the first
	 * resolver carrying it, counting from here towards the root. Removing it uncovers the value of
	 * the next resolver that carries the same key.
	 *
	 * @param {string|number|symbol} key a property key; a number is looked up as its string
	 * @param {?string} [filter] the scope name of the resolver the call addresses
	 * @throws {TypeError} where the key is missing or of a type no property key has, the filter no
	 * string, or the object refuses the deletion
	 * @throws {Error} where the filter matches no resolver of the chain
	 */
	deleteData(key, filter) {
		const property = toKey(key);
		const scope = toScope(filter);
		const resolver = this.#findResolver(scope);

		const target = scope ? resolver : this.#resolverForKey(property);
		if (target) delete target.context[property];
	}

	/**
	 * A shallow assignment, key by key, into the context of the addressed resolver, replacing what is
	 * there and adding what is not. No search along the chain: a merged key shadows the resolvers
	 * above from here on.
	 *
	 * @param {?object} context the keys to assign; null or undefined changes nothing
	 * @param {?string} [filter] the scope name of the resolver the call addresses
	 * @throws {TypeError} where the context is a primitive, the filter no string, or the object
	 * refuses a key - the keys before it are written by then
	 * @throws {Error} where the filter matches no resolver of the chain
	 */
	mergeContext(context, filter) {
		const resolver = this.#findResolver(toScope(filter));
		if (context == null) return;
		if (typeof context !== "object" && typeof context !== "function") throw new TypeError(`mergeContext takes an object, not a ${typeof context}!`);

		resolver.contextHandle.mergeData(context);
	}

	/**
	 * Resolves one expression to its value, of whatever type the statement answers. Takes the
	 * delimited form `${...}`, a scope prefix included, or a bare statement; an input that does not
	 * both open with `${` and end with `}` is a bare statement. An error of the statement is logged
	 * and handed on, and the default never covers it.
	 *
	 * @async
	 * @param {string} aExpression
	 * @param {*} [aDefault] replaces a result of null or undefined where it is passed, undefined
	 * included
	 * @returns {Promise<*>}
	 * @throws {TypeError} where the expression is no string
	 */
	async resolve(aExpression, aDefault) {
		// a mistake in the calling code, not a failed statement - so no warning and no default
		if (typeof aExpression !== "string") throw new TypeError(`resolve takes an expression as a string, not a ${typeof aExpression}!`);
		const defaultValue = arguments.length == 2 ? toDefaultValue(aDefault) : DEFAULT_NOT_DEFINED;
		try {
			// the delimited form or a bare statement, told apart by the scanner
			const { scope, statement } = (0,_ExpressionScanner_js__WEBPACK_IMPORTED_MODULE_6__.parseExpression)(aExpression);
			return withDefault(await this.#execute(statement, scope), defaultValue);
		} catch (e) {
			// the error is logged and handed on. resolve answers a value or says why it cannot,
			// and a default value covers a missing result, never an error.
			warnFailedStatement(aExpression, e);
			throw e;
		}
	}

	/**
	 * Replaces every expression of a text by its value and answers the text. An expression whose
	 * statement fails stands as written, a warning names it, and the rest of the text keeps rendering.
	 *
	 * @async
	 * @param {string} aText
	 * @param {*} [aDefault] replaces a result of null or undefined, per expression, where it is
	 * passed
	 * @returns {Promise<string>}
	 * @throws {TypeError} where the text is no string
	 */
	async resolveText(aText, aDefault) {
		if (typeof aText !== "string") throw new TypeError(`resolveText takes a text as a string, not a ${typeof aText}!`);
		const defaultValue = arguments.length == 2 ? toDefaultValue(aDefault) : DEFAULT_NOT_DEFINED;

		const occurrences = (0,_ExpressionScanner_js__WEBPACK_IMPORTED_MODULE_6__.scan)(aText);
		if (!occurrences) return aText;

		let text = "";
		let position = 0;
		for (const occurrence of occurrences) {
			// an escaping backslash is consumed, everything else in front of the expression
			// stands as written
			text += aText.substring(position, occurrence.escaped ? occurrence.start - 1 : occurrence.start);
			position = occurrence.end;

			if (occurrence.escaped) {
				text += aText.substring(occurrence.start, occurrence.end);
			} else {
				try {
					text += withDefault(await this.#execute(occurrence.statement, occurrence.scope), defaultValue);
				} catch (e) {
					// an expression whose statement failed stands as written, and the default value
					// does not cover it. The rest of the text keeps rendering.
					warnFailedStatement(occurrence.statement, e);
					text += aText.substring(occurrence.start, occurrence.end);
				}
			}
		}

		return text + aText.substring(position);
	}

	/**
	 * Resolves one expression against an ad-hoc context, through a resolver of its own, as the instance
	 * `resolve` does.
	 *
	 * @overload
	 * @param {string} aExpression
	 * @param {?object} [aContext]
	 * @param {*} [aDefault] replaces a result of null or undefined where it is passed
	 * @param {?number} [aTimeout] delays the start by that many milliseconds; no deadline
	 * @returns {Promise<*>}
	 * @throws {TypeError} where the expression is no string, or the context is a primitive
	 */
	/**
	 * Resolves one expression against an ad-hoc context, as the positional form does, with the
	 * arguments in one configuration object. A default counts as passed where the key `defaultValue`
	 * is present, whatever it holds.
	 *
	 * @overload
	 * @param {{ expression: string, context?: ?object, defaultValue?: *, timeout?: ?number }} aConfiguration
	 * @returns {Promise<*>}
	 * @throws {TypeError} where the configuration carries no string under `expression`, or the
	 * context is a primitive
	 */
	/**
	 * Takes the arguments positionally, or one configuration object
	 * `{ expression, context, defaultValue, timeout }`, behind which every argument is ignored. A first
	 * argument that is neither a string nor an object, and a configuration without a string under
	 * `expression`, reject with a `TypeError`.
	 *
	 * @static
	 * @async
	 * @param {string|{ expression: string, context?: ?object, defaultValue?: *, timeout?: ?number }} aExpression
	 * @param {?object} [aContext]
	 * @param {*} [aDefault]
	 * @param {?number} [aTimeout]
	 * @returns {Promise<*>}
	 */
	static async resolve(aExpression, aContext, aDefault, aTimeout) {
		if (isConfiguration(arguments[0])) {
			const { expression, context, timeout } = arguments[0];
			if (typeof expression !== "string") throw new TypeError("ExpressionResolver.resolve takes a configuration carrying the expression as a string under the key expression!");
			return ExpressionResolver.resolve(expression, context, defaultOf(arguments[0]), timeout);
		}
		if (typeof aExpression !== "string") throw new TypeError("ExpressionResolver.resolve takes a string or a configuration object!");

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
	 * Replaces every expression of a text against an ad-hoc context, through a resolver of its own, as
	 * the instance `resolveText` does.
	 *
	 * @overload
	 * @param {string} aText
	 * @param {?object} [aContext]
	 * @param {*} [aDefault] replaces a result of null or undefined, per expression, where it is
	 * passed
	 * @param {?number} [aTimeout] delays the start by that many milliseconds; no deadline
	 * @returns {Promise<string>}
	 * @throws {TypeError} where the text is no string, or the context is a primitive
	 */
	/**
	 * Replaces every expression of a text against an ad-hoc context, as the positional form does,
	 * with the arguments in one configuration object. A default counts as passed where the key
	 * `defaultValue` is present, whatever it holds.
	 *
	 * @overload
	 * @param {{ text: string, context?: ?object, defaultValue?: *, timeout?: ?number }} aConfiguration
	 * @returns {Promise<string>}
	 * @throws {TypeError} where the configuration carries no string under `text`, or the context is
	 * a primitive
	 */
	/**
	 * Takes the arguments positionally, or one configuration object
	 * `{ text, context, defaultValue, timeout }`, behind which every argument is ignored. A first
	 * argument that is neither a string nor an object, and a configuration without a string under
	 * `text`, reject with a `TypeError`.
	 *
	 * @static
	 * @async
	 * @param {string|{ text: string, context?: ?object, defaultValue?: *, timeout?: ?number }} aText
	 * @param {?object} [aContext]
	 * @param {*} [aDefault]
	 * @param {?number} [aTimeout]
	 * @returns {Promise<string>}
	 */
	static async resolveText(aText, aContext, aDefault, aTimeout) {		
		if (isConfiguration(arguments[0])) {
			const { text, context, timeout } = arguments[0];
			if (typeof text !== "string") throw new TypeError("ExpressionResolver.resolveText takes a configuration carrying the text as a string under the key text!");
			return ExpressionResolver.resolveText(text, context, defaultOf(arguments[0]), timeout);
		}
		if (typeof aText !== "string") throw new TypeError("ExpressionResolver.resolveText takes a string or a configuration object!");

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
	 * Builds a resolver over a filtered copy of the context.
	 *
	 * The filter is applied to the context only, never to the globals, so this is a way to hand
	 * over a cleaned context and not a sandbox.
	 *
	 * `option` carries the filter's own `deep` together with the constructor options `name`,
	 * `parent` and `executer`, which are handed on as they are.
	 *
	 * @static
	 * @param {object} arg the filter arguments, plus the whole constructor option set
	 * @param {object} arg.context the object to copy; it is left untouched
	 * @param {(name: string, value: *, holder: object) => boolean} arg.propFilter called with name,
	 * value and the object holding it for every enumerable property, inherited ones included; a
	 * property it answers false for is left out of the copy
	 * @param {object} [arg.option={ deep: true, name: null, parent: null, executer: null }]
	 * @param {boolean} [arg.option.deep=true] filters sub objects as well
	 * @param {?string} [arg.option.name=null]
	 * @param {?ExpressionResolver} [arg.option.parent=null]
	 * @param {?(string|Executer)} [arg.option.executer=null]
	 * @returns {ExpressionResolver}
	 * @throws {TypeError} where a constructor option is of the wrong kind, as the constructor throws
	 */
	static buildFiltered({ context, propFilter, option = { deep: true, name: null, parent: null, executer: null } }) {
		const { deep = true, name, parent, executer } = option;
		context = _default_js_defaultjs_common_utils_src_ObjectUtils_js__WEBPACK_IMPORTED_MODULE_0__["default"].filter(context, propFilter, {deep});
		return new ExpressionResolver({ context, name, parent, executer });
	}

	/**
	 * The former name of `buildFiltered`. It promised a security the method does not give.
	 *
	 * @deprecated use `buildFiltered`
	 * @static
	 * @param {Parameters<typeof ExpressionResolver.buildFiltered>[0]} arg the arguments of
	 * `buildFiltered`
	 * @returns {ExpressionResolver}
	 */
	static buildSecure(arg) {
		return ExpressionResolver.buildFiltered(arg);
	}
}



/***/ },

/***/ "./node_modules/@default-js/defaultjs-expression-language/src/ExpressionScanner.js"
/*!*****************************************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-expression-language/src/ExpressionScanner.js ***!
  \*****************************************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   parseExpression: () => (/* binding */ parseExpression),
/* harmony export */   scan: () => (/* binding */ scan)
/* harmony export */ });
/* harmony import */ var _Utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Utils.js */ "./node_modules/@default-js/defaultjs-expression-language/src/Utils.js");
/**
 * Finds the expressions of a text and takes a single expression apart. It reads where an expression
 * begins and ends, whether it is escaped, and which scope prefix it carries; evaluating a statement
 * and addressing a scope is ExpressionResolver's.
 *
 * Internal to the package: index.js does not export it.
 */



const EXPRESSION_START = "${";

// the scanner states - everything that is not code hides the braces inside it
const CODE = 0;
const SINGLE_QUOTED = 1;
const DOUBLE_QUOTED = 2;
const TEMPLATE = 3;
const REGEX = 4;
const REGEX_CLASS = 5;
const BLOCK_COMMENT = 6;
const LINE_COMMENT = 7;

// a "/" continues an expression instead of opening a regular expression when it follows one of
// these - the classic division-or-regex question, decided on the last character that is neither
// whitespace nor part of a comment
const BEFORE_DIVISION = /[a-zA-Z0-9_$)\]]/;

// the characters the scanner decides on, compared as char codes rather than as one-character strings
const BACKSLASH = 0x5c;
const DOLLAR = 0x24;
const OPEN_BRACE = 0x7b;
const CLOSE_BRACE = 0x7d;
const SINGLE_QUOTE = 0x27;
const DOUBLE_QUOTE = 0x22;
const BACKTICK = 0x60;
const SLASH = 0x2f;
const STAR = 0x2a;
const LINE_FEED = 0x0a;
const CARRIAGE_RETURN = 0x0d;
const LINE_SEPARATOR = 0x2028;
const PARAGRAPH_SEPARATOR = 0x2029;
const OPEN_BRACKET = 0x5b;
const CLOSE_BRACKET = 0x5d;
const COLON = 0x3a;

const SCOPE_SEPARATOR = "::";

/**
 * Whether the "/" at aIndex opens a regular expression literal, decided on the character before it
 * that is neither whitespace nor part of a comment.
 *
 * @param {string} aText
 * @param {number} aIndex
 * @param {?Array<number>} theComments the comments read so far as flat start and end index pairs, in
 * the order they stand; null where the expression has none
 * @returns {boolean}
 */
const slashOpensRegex = (aText, aIndex, theComments) => {
	let index = aIndex - 1;
	let comment = theComments ? theComments.length - 1 : -1;
	while (index >= 0) {
		while (index >= 0 && _Utils_js__WEBPACK_IMPORTED_MODULE_0__.WHITESPACE.test(aText[index])) index--;
		// a line comment may end in whitespace, so the walk can land inside it rather than on its end
		if (comment < 0 || index < theComments[comment - 1] || index > theComments[comment]) break;

		index = theComments[comment - 1] - 1;
		comment -= 2;
	}

	return index < 0 || !BEFORE_DIVISION.test(aText[index]);
};

/**
 * Whether a char code ends a line comment - a line terminator in the sense of ECMAScript.
 *
 * @param {number} aCode
 * @returns {boolean}
 */
const isLineTerminator = (aCode) => aCode === LINE_FEED || aCode === CARRIAGE_RETURN || aCode === LINE_SEPARATOR || aCode === PARAGRAPH_SEPARATOR;

/*
 * Two splits take the text between the delimiters apart into the scope prefix and the
 * statement - this one for a text, `splitScopeAndStatementBySeparator` behind `parseExpression` for
 * the single expression of `resolve`. They are two implementations of the one rule, each measured
 * faster for other statements: a text reads forwards, the single expression from the first "::"
 * backwards. Both have to answer every case alike.
 */

/**
 * The split of a text: reads forwards only as far as the first character a name cannot carry, which
 * for most statements is a few characters.
 *
 * @param {string} aContent the text between the delimiters
 * @returns {{ scope: ?string, statement: ?string }} both trimmed, null where empty
 */
const splitScopeAndStatementForward = (aContent) => {
	const length = aContent.length;
	let index = 0;
	while (index < length && (0,_Utils_js__WEBPACK_IMPORTED_MODULE_0__.isNameCharacter)(aContent.charCodeAt(index))) index++;

	if (aContent.charCodeAt(index) !== COLON || aContent.charCodeAt(index + 1) !== COLON)
		return { scope: null, statement: (0,_Utils_js__WEBPACK_IMPORTED_MODULE_0__.trimToNull)(aContent) };

	// an empty name is no name, but its separator goes with it all the same
	return { scope: (0,_Utils_js__WEBPACK_IMPORTED_MODULE_0__.trimToNull)(aContent.substring(0, index)), statement: (0,_Utils_js__WEBPACK_IMPORTED_MODULE_0__.trimToNull)(aContent.substring(index + 2)) };
};

/**
 * The number of backslashes standing directly in front of the index.
 *
 * @param {string} aText
 * @param {number} aIndex
 * @returns {number}
 */
const countBackslashesBefore = (aText, aIndex) => {
	let count = 0;
	while (aIndex - count > 0 && aText.charCodeAt(aIndex - count - 1) === BACKSLASH) count++;

	return count;
};

/**
 * Reads the one expression whose "${" stands at aStart, counting braces but not the ones hidden
 * inside a literal or a comment, and takes it apart into scope prefix and statement.
 *
 * Answers the occurrence `scan` hands on, `end` the index directly after the matching closing brace;
 * null where the text ends before that brace, which means there is no
 * expression here at all; and, with `end` negated, the index of another "${" met outside a literal
 * or a comment, which starts an expression of its own and abandons this one.
 *
 * @param {string} aText
 * @param {number} aStart
 * @returns {?{ start: number, end: number, escaped: boolean, scope: ?string, statement: ?string }}
 */
const readExpression = (aText, aStart) => {
	const length = aText.length;
	const stack = [CODE];
	let comments = null;
	let commentStart = 0;
	let index = aStart + 2;

	while (index < length) {
		const char = aText.charCodeAt(index);
		switch (stack[stack.length - 1]) {
			case CODE:
				if (char === OPEN_BRACE) stack.push(CODE);
				else if (char === CLOSE_BRACE) {
					stack.pop();
					if (stack.length === 0) {
						const { scope, statement } = splitScopeAndStatementForward(aText.substring(aStart + 2, index));
						return { start: aStart, end: index + 1, escaped: false, scope: scope, statement: statement };
					}
				} else if (char === SINGLE_QUOTE) stack.push(SINGLE_QUOTED);
				else if (char === DOUBLE_QUOTE) stack.push(DOUBLE_QUOTED);
				else if (char === BACKTICK) stack.push(TEMPLATE);
				else if (char === DOLLAR && aText.charCodeAt(index + 1) === OPEN_BRACE) return { start: aStart, end: -index, escaped: false, scope: null, statement: null };
				else if (char === SLASH) {
					const next = aText.charCodeAt(index + 1);
					if (next === STAR || next === SLASH) {
						stack.push(next === STAR ? BLOCK_COMMENT : LINE_COMMENT);
						commentStart = index;
						index++;
					} else if (slashOpensRegex(aText, index, comments)) stack.push(REGEX);
				}
				break;
			case BLOCK_COMMENT:
				if (char === STAR && aText.charCodeAt(index + 1) === SLASH) {
					stack.pop();
					index++;
					(comments ??= []).push(commentStart, index);
				}
				break;
			case LINE_COMMENT:
				if (isLineTerminator(char)) {
					stack.pop();
					(comments ??= []).push(commentStart, index - 1);
				}
				break;
			case SINGLE_QUOTED:
				if (char === BACKSLASH) index++;
				else if (char === SINGLE_QUOTE) stack.pop();
				break;
			case DOUBLE_QUOTED:
				if (char === BACKSLASH) index++;
				else if (char === DOUBLE_QUOTE) stack.pop();
				break;
			case TEMPLATE:
				if (char === BACKSLASH) index++;
				else if (char === BACKTICK) stack.pop();
				else if (char === DOLLAR && aText.charCodeAt(index + 1) === OPEN_BRACE) {
					stack.push(CODE);
					index++;
				}
				break;
			case REGEX:
				if (char === BACKSLASH) index++;
				else if (char === OPEN_BRACKET) stack.push(REGEX_CLASS);
				else if (char === SLASH) stack.pop();
				break;
			case REGEX_CLASS:
				if (char === BACKSLASH) index++;
				else if (char === CLOSE_BRACKET) stack.pop();
				break;
		}
		index++;
	}

	return null;
};

/**
 * Answers every expression of a text, in the order they stand, or null where the text carries
 * none. `start` is the index of the "$", `end` the index after the matching closing brace, so a
 * caller replaces by position and never touches an occurrence twice. The text between two
 * expressions is skipped by a native search for the next "${".
 *
 * @param {string} aText
 * @returns {?Array<{ start: number, end: number, escaped: boolean, scope: ?string, statement: ?string }>}
 */
const scan = (aText) => {
	let occurrences = null;
	let start = aText.indexOf(EXPRESSION_START);

	while (start >= 0) {
		// an odd run of backslashes escapes the delimiter itself. It opens nothing, so only
		// those two characters are taken out of the text and the scan carries on behind them -
		// what would have been the statement is ordinary text and may hold expressions of its own.
		if (countBackslashesBefore(aText, start) % 2 === 1) {
			if (!occurrences) occurrences = [];
			occurrences.push({ start: start, end: start + 2, escaped: true, scope: null, statement: null });
			start = aText.indexOf(EXPRESSION_START, start + 2);
			continue;
		}

		const occurrence = readExpression(aText, start);
		// no matching brace: the text stands as written, and nothing behind it can be an
		// expression either - a "${" outside a literal or a comment would have restarted the scan instead
		if (!occurrence) break;
		if (occurrence.end < 0) {
			start = -occurrence.end;
			continue;
		}

		if (!occurrences) occurrences = [];
		occurrences.push(occurrence);
		start = aText.indexOf(EXPRESSION_START, occurrence.end);
	}

	return occurrences;
};

/**
 * Takes the one expression `resolve` is handed apart.
 *
 * Which form is in hand is decided by the two ends of the trimmed input: an input that opens with
 * "${" and ends with "}" is the delimited form, anything else is a bare statement. The whole input
 * is one expression, so its end is the end of the input. Escaping a delimiter does not apply here -
 * it is a rule of the text form, and there is no surrounding text, so a backslash belongs to the
 * statement.
 *
 * @param {string} aExpression
 * @returns {{ scope: ?string, statement: ?string }}
 */
const parseExpression = (aExpression) => {
	aExpression = aExpression.trim();

	if (aExpression.startsWith(EXPRESSION_START) && aExpression.endsWith("}"))
		return splitScopeAndStatementBySeparator(aExpression.substring(2, aExpression.length - 1));

	// anything else is a statement in full, and carries no scope prefix
	return { scope: null, statement: (0,_Utils_js__WEBPACK_IMPORTED_MODULE_0__.trimToNull)(aExpression) };
};

/**
 * The split of the single expression: most statements carry no "::" at all and are done after one
 * native search. Where one stands, everything before the first of them has to be a name, checked
 * backwards from it: a "::" inside a statement - a quoted one - usually has a character no name
 * carries right in front of it.
 *
 * @param {string} aContent the text between the delimiters
 * @returns {{ scope: ?string, statement: ?string }} both trimmed, null where empty
 */
const splitScopeAndStatementBySeparator = (aContent) => {
	const end = aContent.indexOf(SCOPE_SEPARATOR);
	if (end < 0) return { scope: null, statement: (0,_Utils_js__WEBPACK_IMPORTED_MODULE_0__.trimToNull)(aContent) };

	for (let index = end - 1; index >= 0; index--)
		if (!(0,_Utils_js__WEBPACK_IMPORTED_MODULE_0__.isNameCharacter)(aContent.charCodeAt(index))) return { scope: null, statement: (0,_Utils_js__WEBPACK_IMPORTED_MODULE_0__.trimToNull)(aContent) };

	return { scope: (0,_Utils_js__WEBPACK_IMPORTED_MODULE_0__.trimToNull)(aContent.substring(0, end)), statement: (0,_Utils_js__WEBPACK_IMPORTED_MODULE_0__.trimToNull)(aContent.substring(end + 2)) };
};


/***/ },

/***/ "./node_modules/@default-js/defaultjs-expression-language/src/ResolverContextHandle.js"
/*!*********************************************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-expression-language/src/ResolverContextHandle.js ***!
  \*********************************************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ResolverContextHandle)
/* harmony export */ });
/* harmony import */ var _default_js_defaultjs_common_utils_src_Global_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @default-js/defaultjs-common-utils/src/Global.js */ "./node_modules/@default-js/defaultjs-common-utils/src/Global.js");
/* harmony import */ var _default_js_defaultjs_common_utils_src_ObjectUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @default-js/defaultjs-common-utils/src/ObjectUtils.js */ "./node_modules/@default-js/defaultjs-common-utils/src/ObjectUtils.js");



/**
 * The descriptor a property has where it is defined - own or anywhere up the prototype chain of
 * the object holding it.
 *
 * @param {object} data
 * @param {string|symbol} property
 * @returns {PropertyDescriptor|null}
 */
const findPropertyDescriptor = (data, property) => {
	let type = data;
	while (!(0,_default_js_defaultjs_common_utils_src_ObjectUtils_js__WEBPACK_IMPORTED_MODULE_1__.isNullOrUndefined)(type)) {
		const descriptor = Reflect.getOwnPropertyDescriptor(type, property);
		if (descriptor) return descriptor;
		type = Reflect.getPrototypeOf(type);
	}

	return null;
};

/**
 * The names a handle provides, each mapped to the handle providing it: a Map, or the stand-in of
 * `createGlobalNameCache` over the global object, which answers the same calls.
 *
 * @typedef {object} NameCache
 * @property {(key: string|symbol) => boolean} has
 * @property {(key: string|symbol) => (ResolverContextHandle|undefined)} get
 * @property {(key: string|symbol, value: ResolverContextHandle) => *} set
 * @property {(key: string|symbol) => boolean} delete
 * @property {() => Iterable<string|symbol>} keys
 */

/**
 * Name cache for a context that is the global object itself.
 *
 * It answers like the Map it replaces: every name is present, and the value is the handle
 * holding it - never the value of the property. That is the contract of #findHandle,
 * whose caller reads the property off the handle it gets back.
 *
 * Because every name is present, such a resolver answers every lookup that reaches it, and no
 * handle nearer the root is reached. It lists no name of its own, so the ownKeys trap of a handle
 * further from the root reports none of the global object's.
 *
 * @param {ResolverContextHandle} handle
 * @returns {NameCache}
 */
const createGlobalNameCache = (handle) => {
	return {
		has: (property) => {
			return true;
		},
		get: (property) => {
			return handle;
		},
		set: (property, value) => {
			return false;
		},
		delete: (property) => {
			return false;
		},
		keys: () => {
			// No name of its own. `has` already answers every lookup, so a name of the global object
			// is found from anywhere below; listing it as well would only hand it to an executer that
			// turns a name into code, which then fails over names it never needed - the index "0" of
			// a frame, a symbol another library planted. A statement reaches a global through the
			// ordinary scope chain anyway.
			return [];
		},
	};
};

/**
 * What stands behind the context of one resolver: the object handed to it, the handle of its parent,
 * and the name cache that tells which names this resolver provides. It hands out the context an
 * expression sees, a proxy that answers for the whole chain.
 *
 * Internal to the package: index.js does not export it.
 *
 * @export
 * @class ResolverContextHandle
 */
class ResolverContextHandle {
	/** @type {object|null} */
	#context = null;
	/** @type {ResolverContextHandle|null} */
	#parent = null;
	/** @type {object|null} */
	#data = null;
	/** @type {NameCache|null} */
	#cache = null;
	/** @type {boolean} */
	#providesContext = false;

	/**
	 * @constructor
	 * @param {?object} context the object the caller handed over, kept rather than copied. Where none
	 * is passed, the handle holds no object at all and carries no name, not even one of
	 * Object.prototype. It gets an object on the first write.
	 * @param {?ResolverContextHandle} parent the handle of the parent resolver
	 */
	constructor(context, parent) {
		this.#data = (0,_default_js_defaultjs_common_utils_src_ObjectUtils_js__WEBPACK_IMPORTED_MODULE_1__.isNullOrUndefined)(context) ? null : context;
		this.#parent = parent ? parent : null;
		this.#providesContext = !(0,_default_js_defaultjs_common_utils_src_ObjectUtils_js__WEBPACK_IMPORTED_MODULE_1__.isNullOrUndefined)(context);

		this.#cache = this.#buildNameCache();

		if (_default_js_defaultjs_common_utils_src_Global_js__WEBPACK_IMPORTED_MODULE_0__["default"] === this.#data)
			this.#context = this.#data;
		else {
			// The proxy answers for the whole chain, which is more than the object handed to this
			// resolver holds. A proxy may not speak that freely for a target that guarantees
			// anything about its own keys - a frozen or sealed context is where that ends in a
			// TypeError - so it gets an empty target of its own. No trap reads it; every one of
			// them works on #data and #cache.
			this.#context = new Proxy({}, {
				has: (data, property) => {
					//console.log("has property:", property);
					return this.#findHandle(property) != null;
				},
				get: (data, property) => {
					//console.log("get property:", property);
					const handle = this.#findHandle(property);
					return handle ? handle.#data[property] : undefined;
				},
				set: (data, property, value) => {
					//console.log("set property:", property, "=", value);
					this.#data ??= {};
					this.#data[property] = value;
					this.#cache.set(property, this);
					this.#providesContext = true;
					return true;
				},
				deleteProperty: (data, property) => {
					const handle = this.#cache.get(property);
					if (handle) {
						delete this.#data[property];
						this.#cache.delete(property);
					}
					return true;
				},
				getOwnPropertyDescriptor: (data, property) => {
					const handle = this.#findHandle(property);
					if (!handle) return undefined;

					// Read through a getter rather than up front, so enumerating a context does not
					// evaluate what nobody asked for, and so a value stays live. Enumerability
					// is taken from where the property is defined - that is what keeps the members
					// of Object.prototype out of Object.keys - while configurable has to be true:
					// a proxy may not claim a fixed property its target does not have.
					const descriptor = findPropertyDescriptor(handle.#data, property);
					return {
						get: () => handle.#data[property],
						enumerable: descriptor ? descriptor.enumerable : true,
						configurable: true
					};
				},
				ownKeys: (data) => {
					//console.log("ownKeys");
					const result = new Set();
					let handle = this;
					while (handle) {
						// a handle without an object carries no name - its empty cache is passed by
						if (handle.#data !== null) {
							for (let key of handle.#cache.keys()) {
								result.add(key);
							}
						}
						handle = handle.#parent;
					}
					return Array.from(result);
				},
			});
		}
	}

	/**
	 * The context an expression sees: a proxy that answers for the whole chain, or over the global
	 * object the global object itself.
	 *
	 * @type {object}
	 */
	get context() {
		return this.#context;
	}

	/**
	 * @type {ResolverContextHandle|null}
	 */
	get parent() {
		return this.#parent;
	}

	/**
	 * Whether this handle provides the name itself. Every name of its own context counts, the ones
	 * inherited through the prototype chain included; a handle over the global object
	 * provides every name.
	 *
	 * @param {string|symbol} key
	 * @returns {boolean}
	 */
	hasName(key) {
		return this.#cache.has(key);
	}

	/**
	 * Whether this handle provides a context: one was handed to the constructor, or a value has been
	 * written since. What the data holds decides nothing.
	 *
	 * @type {boolean}
	 */
	get providesContext() {
		return this.#providesContext;
	}

	/**
	 * Assigns the keys of an object into the one this handle holds, key by key, creating that object
	 * where there is none.
	 *
	 * @param {object} data
	 * @throws {TypeError} where the object held refuses a key - the keys before it are written by then
	 */
	mergeData(data) {
		this.#data ??= {};
		Object.assign(this.#data, data);
		this.#providesContext = true;
		this.#cache = this.#buildNameCache();
	}

	/**
	 * Takes up the keys added to the handed-in object since the handle was built, which are not
	 * provided until then.
	 */
	resetCache() {
		this.#cache = this.#buildNameCache();
	}

	/**
	 * A new name cache for the object this handle holds: every key it carries, its prototype chain
	 * included, each mapped to this handle. Over the global object the stand-in of
	 * `createGlobalNameCache`, which provides every name.
	 *
	 * @returns {NameCache}
	 */
	#buildNameCache() {
		const data = this.#data;
		if (_default_js_defaultjs_common_utils_src_Global_js__WEBPACK_IMPORTED_MODULE_0__["default"] === data) 
			return createGlobalNameCache(this);

		// every key JavaScript says the object carries, nothing filtered - which of them an executer
		// can put into its code is the executer's business
		const cache = new Map();
		let type = data;
		while (!(0,_default_js_defaultjs_common_utils_src_ObjectUtils_js__WEBPACK_IMPORTED_MODULE_1__.isNullOrUndefined)(type)) {
			for (let name of Reflect.ownKeys(type)) cache.set(name, this);
			type = Reflect.getPrototypeOf(type);
		}

		return cache;
	}

	/**
	 * The nearest handle from this one to the root that provides the name, or null where none does.
	 *
	 * @param {string|symbol} property
	 * @returns {ResolverContextHandle|null}
	 */
	#findHandle(property) {
		// A handle without an object carries no name, so it is passed by without asking its cache -
		// most resolvers of a chain are built without a context.
		let handle = this;
		while (handle) {
			if (handle.#data !== null && handle.#cache.has(property)) return handle.#cache.get(property);
			handle = handle.#parent;
		}
		return null;
	}
}


/***/ },

/***/ "./node_modules/@default-js/defaultjs-expression-language/src/Utils.js"
/*!*****************************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-expression-language/src/Utils.js ***!
  \*****************************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WHITESPACE: () => (/* binding */ WHITESPACE),
/* harmony export */   isNameCharacter: () => (/* binding */ isNameCharacter),
/* harmony export */   stringToHashcode: () => (/* binding */ stringToHashcode),
/* harmony export */   trimToNull: () => (/* binding */ trimToNull)
/* harmony export */ });
/**
 * The helpers more than one component uses. Internal to the package: index.js does not export
 * them.
 */

/** Whitespace in the sense of `\s`. */
const WHITESPACE = /\s/;

/**
 * Whether a character may stand in a scope name: an ASCII letter, a digit,
 * "-", "_", or whitespace in the sense of `\s`, which past ASCII is left to the regular expression.
 *
 * @param {number} aCode the char code
 * @returns {boolean}
 */
const isNameCharacter = (aCode) => {
	if (aCode < 0x80)
		return (
			(aCode >= 0x61 && aCode <= 0x7a) ||
			(aCode >= 0x41 && aCode <= 0x5a) ||
			(aCode >= 0x30 && aCode <= 0x39) ||
			aCode === 0x2d ||
			aCode === 0x5f ||
			aCode === 0x20 ||
			(aCode >= 0x09 && aCode <= 0x0d)
		);

	return WHITESPACE.test(String.fromCharCode(aCode));
};

/**
 * Trims a string, and answers null for one that is empty after trimming, and for none.
 *
 * @param {?string} value
 * @returns {?string}
 */
const trimToNull = (value) => {
	if (value) {
		value = value.trim();
		return value.length == 0 ? null : value;
	}
	return null;
};

/**
 * A 32 bit hash of a string, in the manner of Java's `String.hashCode`.
 *
 * @param {string} aString
 * @returns {number}
 */
const stringToHashcode = (aString) => {
	let hash = 0;
	if (aString.length == 0) return hash;
	const length = aString.length;
	for (let i = 0; i < length; i++) {
		const char = aString.charCodeAt(i);
		hash = (hash << 5) - hash + char;
		hash |= 0; // Convert to 32bit integer
	}
	return hash;
};


/***/ },

/***/ "./node_modules/@default-js/defaultjs-expression-language/src/executer/ContextDeconstructorExecuter.js"
/*!*************************************************************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-expression-language/src/executer/ContextDeconstructorExecuter.js ***!
  \*************************************************************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EXECUTERNAME: () => (/* binding */ EXECUTERNAME),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   setDebug: () => (/* binding */ setDebug),
/* harmony export */   setupExecuter: () => (/* binding */ setupExecuter)
/* harmony export */ });
/* harmony import */ var _ExecuterRegistry_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ExecuterRegistry.js */ "./node_modules/@default-js/defaultjs-expression-language/src/ExecuterRegistry.js");
/* harmony import */ var _Executer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Executer.js */ "./node_modules/@default-js/defaultjs-expression-language/src/Executer.js");
/* harmony import */ var _CodeCache_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../CodeCache.js */ "./node_modules/@default-js/defaultjs-expression-language/src/CodeCache.js");
/* harmony import */ var _default_js_defaultjs_common_utils_src_Global_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @default-js/defaultjs-common-utils/src/Global.js */ "./node_modules/@default-js/defaultjs-common-utils/src/Global.js");





let DEBUG = false;
/** The name this executer is registered under, and the default executer. */
const EXECUTERNAME = "context-deconstruction-executer";
const EXPRESSION_CACHE = new _CodeCache_js__WEBPACK_IMPORTED_MODULE_2__["default"]();


/**
 * How many names a context may carry before this executer says that binding them all costs. Every
 * ordinary object brings seven of them along from `Object.prototype`, so the number counts a good
 * many own keys before it is reached.
 */
const HIGH_PROPERTY_COUNT = 25;

/**
 * The names that made the generated function fail to compile, asked of JavaScript itself rather
 * than of a list kept here: a name is usable when it can stand in a destructuring pattern.
 *
 * Only ever called on the failure path, so the cost of compiling one pattern per name is paid by a
 * context that is broken for this executer anyway.
 *
 * @param {Array<string|symbol>} theNames
 * @returns {Array<string>}
 */
const unusableNames = (theNames) =>
	theNames
		.filter((name) => {
			if (typeof name === "symbol") return true;
			try {
				new Function(`{${name}}`, "");
				return false;
			} catch (e) {
				return true;
			}
		})
		.map(String);

/**
 * Switches the logging of every function this executer generates to the console.
 *
 * @param {boolean} value
 */
const setDebug = (value) => {
	DEBUG = value;
};

/**
 * Configures the code cache of this executer. `size` is the only option
 * today; an option left out changes nothing.
 *
 * @param {import('../CodeCache.js').CodeCacheOptions} [options]
 * @throws {TypeError} where the size is not a finite number
 */
const setupExecuter = (options) => {
	EXPRESSION_CACHE.setup(options);
};

const getPropertyNames = (aContext) => {
	if (_default_js_defaultjs_common_utils_src_Global_js__WEBPACK_IMPORTED_MODULE_3__["default"] === aContext) return [];
	return Reflect.ownKeys(aContext);
};

const getOrCreateFunction = (aStatement, contextProperties) => {
	// A symbol has to be written out rather than joined - `join` alone raises a TypeError that says
	// nothing about the context it came from. Written out it reaches the pattern, where it fails to
	// compile like any other name that is no identifier, and generate() names it.
	const propertyNames = contextProperties.map(String).join(",");
	const cacheKey = `${aStatement.length}::${propertyNames}::${aStatement}`;
	if (EXPRESSION_CACHE.has(cacheKey)) {
		return EXPRESSION_CACHE.get(cacheKey);
	}
	const expression = generate(aStatement, propertyNames, contextProperties);
	EXPRESSION_CACHE.set(cacheKey, expression);
	return expression;
};

/**
 * The generated function destructures the context in its parameter list and runs the statement over
 * the local bindings that produces.
 *
 * **Nothing is carried back.** A statement that assigns to a context name writes into a local
 * binding, and that binding is gone when the function returns - so a write is not readable
 * afterwards, which the resolver leaves to each executer. That is a decision rather than a gap: the
 * write-back this executer carried between 2026-09-07 and 2026-09-20 cost a factor of eleven on a
 * cache miss, because it needs every context name declared in the body instead of listed in the
 * parameter list. Speed is what this executer is for, and a consumer who needs a write to persist
 * picks `context-object-executer`.
 *
 * What still reaches the context is a **mutation**: `holder.name = "after"` changes an object the
 * binding and the context both point at, and needs nothing carried back.
 *
 * The context is destructured in the parameter list rather than declared in the body so that the
 * generated source stays one line per statement instead of one line per context name - `new Function`
 * parses that source on every cache miss, and its length is what the miss costs. It also declares no
 * name of its own: the statement can therefore never collide with a binding of this function, which
 * is what the random suffix removed on 2026-09-20 used to guard.
 *
 * **Nothing is filtered out of the pattern.** Every name the context carries is bound, a name that
 * cannot be a variable included - a key like `test-test`, a reserved word, a symbol, the index of an
 * array. Such a context cannot be run over by this executer at all, and dropping the name silently
 * would hide a property the caller defined. What this executer owes the caller instead is a message
 * that says which statement failed and which name did it, because the statement itself need not
 * mention that name.
 *
 * @param {string} aStatement
 * @param {string} thePropertyNameString the context names, comma separated, as the destructuring
 *                 pattern spells them
 * @param {Array<string|symbol>} theNames the same names unwritten, for the error message
 * @returns {Function}
 */
const generate = (aStatement, thePropertyNameString, theNames) => {
	// Only here, and therefore once per context shape and statement rather than on every execution:
	// a console write in a browser costs more than a resolution does, and warning per execution cost
	// this executer a factor of four to twenty-five (measured 2026-09-22, `npm run bench`).
	if (theNames.length > HIGH_PROPERTY_COUNT)
		console.warn(
			`High count of properties at first level, can be decrease the performence! count: ${theNames.length}`,
		);

	const code = `
return (async ({${thePropertyNameString}}) => {
    try{
       return ${aStatement}
    }catch(e){
        throw e;
    }
})(arguments[0] || {});`;

	if (DEBUG) console.log("genererated code: \n", code);

	try {
		return new Function(code);
	} catch (e) {
		// only a syntax error can come from a name. Anything else - the EvalError of a Content Security
		// Policy without 'unsafe-eval' among them - is handed on: asking about the names would be
		// refused as well, and every name would be blamed
		if (!(e instanceof SyntaxError)) throw e;

		const unusable = unusableNames(theNames);
		// nothing wrong with the names: the statement itself does not compile, and that error says
		// more than anything this executer could add
		if (unusable.length === 0) throw e;

		throw new SyntaxError(
			`Context property ${unusable.length === 1 ? "name" : "names"} "${unusable.join('", "')}" cannot be used as a variable by ${EXECUTERNAME}, so this statement cannot run over this context! statement: ${aStatement}`,
			{ cause: e },
		);
	}
};

/**
 * The executer: destructures the context into the parameters of a generated function, so a
 * statement addresses a context value by its bare name - see `README.md`.
 * Registered under `EXECUTERNAME` on import.
 *
 * @type {Executer}
 */
const EXECUTER = new _Executer_js__WEBPACK_IMPORTED_MODULE_1__["default"]({
	execution: (aStatement, aContext) => {
		const propertyNames = getPropertyNames(aContext);
		const expression = getOrCreateFunction(aStatement, propertyNames);
		return expression(aContext);
	},
});

(0,_ExecuterRegistry_js__WEBPACK_IMPORTED_MODULE_0__.register)(EXECUTERNAME, EXECUTER);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EXECUTER);


/***/ },

/***/ "./node_modules/@default-js/defaultjs-expression-language/src/executer/ContextObjectExecuter.js"
/*!******************************************************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-expression-language/src/executer/ContextObjectExecuter.js ***!
  \******************************************************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EXECUTERNAME: () => (/* binding */ EXECUTERNAME),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   getContextVar: () => (/* binding */ getContextVar),
/* harmony export */   setupExecuter: () => (/* binding */ setupExecuter)
/* harmony export */ });
/* harmony import */ var _ExecuterRegistry_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ExecuterRegistry.js */ "./node_modules/@default-js/defaultjs-expression-language/src/ExecuterRegistry.js");
/* harmony import */ var _Executer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Executer.js */ "./node_modules/@default-js/defaultjs-expression-language/src/Executer.js");
/* harmony import */ var _CodeCache_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../CodeCache.js */ "./node_modules/@default-js/defaultjs-expression-language/src/CodeCache.js");




/** The name this executer is registered under. */
const EXECUTERNAME = "context-object-executer";
const EXPRESSION_CACHE = new _CodeCache_js__WEBPACK_IMPORTED_MODULE_2__["default"]();
/** The name a statement addresses the context by. */
let CONTEXT_VAR = "ctx";

/**
 * Configures this executer: the size of its code cache and the name a statement addresses the
 * context by. An option left out changes nothing.
 *
 * @param {object} [options]
 * @param {number} [options.size] the size of the code cache, as `CodeCacheOptions` describes it in
 * `CodeCache.js`
 * @param {?string} [options.contextVar] the name a statement addresses the context by, `ctx` until it
 * is set, taken trimmed. It holds for every statement this executer runs from then on, whichever
 * resolver hands it over. Null, undefined and a string that is empty after trimming leave the name
 * as it is. A name that cannot be a parameter name is not rejected here: every statement then
 * throws a `SyntaxError`.
 * @throws {TypeError} where the size is not a finite number, or the name is neither a string nor
 * null or undefined
 */
const setupExecuter = (options) => {
	EXPRESSION_CACHE.setup(options);
	CONTEXT_VAR =
		options?.contextVar == null || options?.contextVar.trim().length === 0
			? CONTEXT_VAR
			: options?.contextVar.trim();
};

/**
 * The name a statement addresses the context by: `ctx`, or the one `setupExecuter` set last.
 *
 * @returns {string}
 */
const getContextVar = () => CONTEXT_VAR;

/**
 * Compiles a statement into a function that hands the context over under the name a statement
 * addresses it by.
 *
 * @param {string} aStatement
 * @returns {Function}
 */
const generate = (aStatement) => {
	const code = `
return (async (${CONTEXT_VAR}) => {
    try{
        return ${aStatement}
    }catch(e){
        throw e;
    }
})(arguments[0] || {});`;

	//console.log("code", code);

	return new Function(code);
};

/**
 * The compiled function for a statement, from the cache or compiled now and cached.
 *
 * @param {string} aStatement
 * @returns {Function}
 */
const getOrCreateFunction = (aStatement) => {
	const cacheKey = `${CONTEXT_VAR}::${aStatement}`;

	if (EXPRESSION_CACHE.has(cacheKey)) {
		return EXPRESSION_CACHE.get(cacheKey);
	}
	const expression = generate(aStatement);
	EXPRESSION_CACHE.set(cacheKey, expression);
	return expression;
};

/**
 * The executer: hands the context over as one object named `ctx`, or the name `setupExecuter` sets,
 * so a statement addresses a context value as `ctx.value` - see `README.md`. Registered under
 * `EXECUTERNAME` on import.
 *
 * @type {Executer}
 */
const EXECUTER = new _Executer_js__WEBPACK_IMPORTED_MODULE_1__["default"]({
	execution: (aStatement, aContext) => {
		const expression = getOrCreateFunction(aStatement);
		return expression(aContext);
	},
});

(0,_ExecuterRegistry_js__WEBPACK_IMPORTED_MODULE_0__.register)(EXECUTERNAME, EXECUTER);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EXECUTER);


/***/ },

/***/ "./node_modules/@default-js/defaultjs-expression-language/src/executer/WithScopedExecuter.js"
/*!***************************************************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-expression-language/src/executer/WithScopedExecuter.js ***!
  \***************************************************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EXECUTERNAME: () => (/* binding */ EXECUTERNAME),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   setupExecuter: () => (/* binding */ setupExecuter)
/* harmony export */ });
/* harmony import */ var _ExecuterRegistry_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ExecuterRegistry.js */ "./node_modules/@default-js/defaultjs-expression-language/src/ExecuterRegistry.js");
/* harmony import */ var _Executer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Executer.js */ "./node_modules/@default-js/defaultjs-expression-language/src/Executer.js");
/* harmony import */ var _CodeCache_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../CodeCache.js */ "./node_modules/@default-js/defaultjs-expression-language/src/CodeCache.js");




/** The name this executer is registered under. */
const EXECUTERNAME = "with-scoped-executer";
const EXPRESSION_CACHE = new _CodeCache_js__WEBPACK_IMPORTED_MODULE_2__["default"]();

/**
 * Configures the code cache of this executer. `size` is the only option
 * today; an option left out changes nothing.
 *
 * @param {import('../CodeCache.js').CodeCacheOptions} [options]
 * @throws {TypeError} where the size is not a finite number
 */
const setupExecuter = (options) => {
	EXPRESSION_CACHE.setup(options);
};

let initialCall = true;

/**
 * Compiles a statement into a function that runs it inside a `with` block over the context.
 *
 * @param {string} aStatement
 * @returns {Function}
 */
const generate = (aStatement) => {
	const code = `
	return (async function (){
		with(arguments[0] || {}){
			try{
				return ${aStatement}
			}catch(e){
				throw e;
			}
		}
	})(arguments[0] || {});
`;
	//console.log("code", code);

	return new Function(code);
};

/**
 * The compiled function for a statement, from the cache or compiled now and cached.
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
 * The executer: runs a statement inside a `with` block over the context, so a statement addresses a
 * context value by its bare name - see `README.md`. Registered under
 * `EXECUTERNAME` on import.
 *
 * @deprecated because `with` is; announces it on the first statement it runs
 * @type {Executer}
 */
const EXECUTER = new _Executer_js__WEBPACK_IMPORTED_MODULE_1__["default"]({
	execution: (aStatement, aContext) => {
		if (initialCall) {
			initialCall = false;
			console.warn(
				new Error(`With Scoped expression execution is marked as deprecated.`),
			);
		}

		const expression = getOrCreateFunction(aStatement);
		return expression(aContext);
	},
});
(0,_ExecuterRegistry_js__WEBPACK_IMPORTED_MODULE_0__.register)(EXECUTERNAME, EXECUTER);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EXECUTER);


/***/ },

/***/ "./node_modules/@default-js/defaultjs-expression-language/src/executer/index.js"
/*!**************************************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-expression-language/src/executer/index.js ***!
  \**************************************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _WithScopedExecuter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./WithScopedExecuter.js */ "./node_modules/@default-js/defaultjs-expression-language/src/executer/WithScopedExecuter.js");
/* harmony import */ var _ContextObjectExecuter_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ContextObjectExecuter.js */ "./node_modules/@default-js/defaultjs-expression-language/src/executer/ContextObjectExecuter.js");
/* harmony import */ var _ContextDeconstructorExecuter_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ContextDeconstructorExecuter.js */ "./node_modules/@default-js/defaultjs-expression-language/src/executer/ContextDeconstructorExecuter.js");





/***/ },

/***/ "./src/Context.js"
/*!************************!*\
  !*** ./src/Context.js ***!
  \************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Context)
/* harmony export */ });
/* harmony import */ var _default_js_defaultjs_common_utils_src_PromiseUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @default-js/defaultjs-common-utils/src/PromiseUtils.js */ "./node_modules/@default-js/defaultjs-common-utils/src/PromiseUtils.js");
/* harmony import */ var _Directive_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Directive.js */ "./src/Directive.js");
/* harmony import */ var _Template_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Template.js */ "./src/Template.js");
/* harmony import */ var _default_js_defaultjs_expression_language_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @default-js/defaultjs-expression-language/index.js */ "./node_modules/@default-js/defaultjs-expression-language/index.js");





const toTemplate = (template) => {
	if (template instanceof _Template_js__WEBPACK_IMPORTED_MODULE_2__["default"]) return template.importContent();
	else if (typeof template === "string") return create(template);
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
	 * @param {import("./Renderer.js").default} options.renderer 
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
			if (callback instanceof Array) callback.forEach((callback) => this.ready(callback));
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


/***/ },

/***/ "./src/Directive.js"
/*!**************************!*\
  !*** ./src/Directive.js ***!
  \**************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

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

/***/ },

/***/ "./src/DirectiveElement.js"
/*!*********************************!*\
  !*** ./src/DirectiveElement.js ***!
  \*********************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

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

/***/ },

/***/ "./src/Renderer.js"
/*!*************************!*\
  !*** ./src/Renderer.js ***!
  \*************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

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
/* harmony import */ var _DirectiveElement_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./DirectiveElement.js */ "./src/DirectiveElement.js");
/* harmony import */ var _directives_index_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./directives/index.js */ "./src/directives/index.js");
/* harmony import */ var _elements_index_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./elements/index.js */ "./src/elements/index.js");









const SCOPES = {
	application: "application",
	data: "data",
	render: "render",
	container: "container",
	node: "node",
};

const APPLICATION_SCOPE_RESOLVER = new _default_js_defaultjs_expression_language_src_ExpressionResolver_js__WEBPACK_IMPORTED_MODULE_1__["default"]({ name: SCOPES.application });


/**
 * @readonly
 * @enum {string}
 */
const MODETYPES = ["replace", "append", "prepend"];

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
		if (template instanceof _DirectiveElement_js__WEBPACK_IMPORTED_MODULE_5__["default"]) await template.execute(context);
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
	/**
	 * Creates a renderer.
	 *
	 * @param {object} [anOption]
	 * @param {Template} [anOption.template] - the template rendered, if `render` gets none
	 * @param {object} [anOption.data] - base data, available in every rendering
	 * @throws {Error} if `template` is not a `Template`
	 */
	constructor({ template, data } = {}) {
		if (template && !(template instanceof _Template_js__WEBPACK_IMPORTED_MODULE_2__["default"])) throw new Error("template must be an instance of Template!");

		this.template = template;
		this.resolver = new _default_js_defaultjs_expression_language_src_ExpressionResolver_js__WEBPACK_IMPORTED_MODULE_1__["default"]({ name: SCOPES.data, context: data ? data : {}, parent: APPLICATION_SCOPE_RESOLVER });
	}

	/**
	 * Renders a template into a container.
	 * 
	 * @param {object|Context} context 
	 * @param {HTMLElement} context.container
	 * @param {object} [context.data]
	 * @param {Template|string|URL|Node|NodeList|HTMLCollection} [context.template]
	 * @param {MODETYPES} [context.mode]
	 * @param {HTMLElement} [context.root]
	 * @param {HTMLElement} [context.target]
	 * @returns {Promise<Context>}
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

	/**
	 * Creates a renderer and loads its template with `Template.load` first.
	 *
	 * @static
	 * @async
	 * @param {object} [anOption]
	 * @param {Template|string|URL|Node|NodeList|HTMLCollection|Promise<Template|string|URL|Node|NodeList|HTMLCollection>} [anOption.template] - source of the template
	 * @param {object} [anOption.data] - base data, available in every rendering
	 * @returns {Promise<Renderer>}
	 */
	static async build({ template, data } = {}) {
		if (template && template instanceof Promise) template = await template;

		template = template ? await _Template_js__WEBPACK_IMPORTED_MODULE_2__["default"].load(template) : null;
		return new Renderer({ template, data });
	}

	/**
	 * Renders a template into a container without keeping a renderer.
	 *
	 * @static
	 * @async
	 * @param {object} context
	 * @param {HTMLElement} context.container
	 * @param {object} [context.data]
	 * @param {Template} context.template
	 * @param {MODETYPES} [context.mode]
	 * @param {HTMLElement} [context.target]
	 * @returns {Promise<Context>}
	 * @memberof Renderer
	 */
	static async render({ container, data, template, mode, target }) {
		const renderer = new Renderer({ template, data });
		return renderer.render({ container, mode, target });
	}
}


/***/ },

/***/ "./src/Template.js"
/*!*************************!*\
  !*** ./src/Template.js ***!
  \*************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NODE_ATTRIBUTE_TEMPLATE: () => (/* binding */ NODE_ATTRIBUTE_TEMPLATE),
/* harmony export */   "default": () => (/* binding */ Template),
/* harmony export */   toAsyncTemplateLoader: () => (/* binding */ toAsyncTemplateLoader)
/* harmony export */ });
/* harmony import */ var _default_js_defaultjs_common_utils_src_javascript_String_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @default-js/defaultjs-common-utils/src/javascript/String.js */ "./node_modules/@default-js/defaultjs-common-utils/src/javascript/String.js");


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
			return Template.load(new URL(url, location), cache, alias);
		} else if (url instanceof URL) return Template.load(url, cache, alias);

		throw new Error("The url isn't a allowed type! -> [String|URL] required!");
	}

	static async load(template, cache = true, alias = null) {
		if (template instanceof Template) return template;

		const key = getKey(template, cache, alias);
		if (key && CACHE[key]) return CACHE[key];
		else if (typeof template === "string") {
			return fromSource(template, cache, key);
		} else if (template instanceof URL) return await fromURL(template, cache, key);
		else if (template instanceof Node || template instanceof NodeList || template instanceof HTMLCollection || template instanceof HTMLTemplateElement) return fromElement(template, cache, key);

		throw new Error("The template isn't a allowed type! -> [String|URL|Node|NodeList|HTMLCollection|Template] required!");
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


/***/ },

/***/ "./src/Utils.js"
/*!**********************!*\
  !*** ./src/Utils.js ***!
  \**********************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

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

/***/ },

/***/ "./src/directives/AttachElement.js"
/*!*****************************************!*\
  !*** ./src/directives/AttachElement.js ***!
  \*****************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

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


/***/ },

/***/ "./src/directives/Attributes.js"
/*!**************************************!*\
  !*** ./src/directives/Attributes.js ***!
  \**************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Directive_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Directive.js */ "./src/Directive.js");



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

class Attribute extends _Directive_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
	constructor() {
		super();
	}

	get name() {
		return "attribute";
	}
	get rank() {
		return _Directive_js__WEBPACK_IMPORTED_MODULE_0__["default"].MIN_RANK;
	}
	get phase() {
		return _Directive_js__WEBPACK_IMPORTED_MODULE_0__["default"].PHASE.content;
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

_Directive_js__WEBPACK_IMPORTED_MODULE_0__["default"].define({ directive: new Attribute() });


/***/ },

/***/ "./src/directives/Choose.js"
/*!**********************************!*\
  !*** ./src/directives/Choose.js ***!
  \**********************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

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

/***/ },

/***/ "./src/directives/Data.js"
/*!********************************!*\
  !*** ./src/directives/Data.js ***!
  \********************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

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

/***/ },

/***/ "./src/directives/Foreach.js"
/*!***********************************!*\
  !*** ./src/directives/Foreach.js ***!
  \***********************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

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

/***/ },

/***/ "./src/directives/If.js"
/*!******************************!*\
  !*** ./src/directives/If.js ***!
  \******************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

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

/***/ },

/***/ "./src/directives/Include.js"
/*!***********************************!*\
  !*** ./src/directives/Include.js ***!
  \***********************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

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
			context.stop = false;

			return context;
		} catch (e) {
			console.error(e, context.template);
			return context;
		}
	}
}

_Directive_js__WEBPACK_IMPORTED_MODULE_0__["default"].define({ directive: new Include() });


/***/ },

/***/ "./src/directives/Initial.js"
/*!***********************************!*\
  !*** ./src/directives/Initial.js ***!
  \***********************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

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
			} else if (false) // removed by dead control flow
{} else if (template instanceof HTMLTemplateElement) {
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


/***/ },

/***/ "./src/directives/OnFinished.js"
/*!**************************************!*\
  !*** ./src/directives/OnFinished.js ***!
  \**************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

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

/***/ },

/***/ "./src/directives/Repeat.js"
/*!**********************************!*\
  !*** ./src/directives/Repeat.js ***!
  \**********************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

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


/***/ },

/***/ "./src/directives/Text.js"
/*!********************************!*\
  !*** ./src/directives/Text.js ***!
  \********************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

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

/***/ },

/***/ "./src/directives/index.js"
/*!*********************************!*\
  !*** ./src/directives/index.js ***!
  \*********************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

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












/***/ },

/***/ "./src/elements/Replace.js"
/*!*********************************!*\
  !*** ./src/elements/Replace.js ***!
  \*********************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ReplaceElement)
/* harmony export */ });
/* harmony import */ var _DirectiveElement_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../DirectiveElement.js */ "./src/DirectiveElement.js");


class ReplaceElement extends _DirectiveElement_js__WEBPACK_IMPORTED_MODULE_0__["default"]{
	constructor(){
		super();
		
		this.attachShadow({mode: 'open'});
	}
	async execute({template, context}){
		return context;
	};		
}
try{customElements.define("jstl-replace", ReplaceElement);}catch(e){}//ignore

/***/ },

/***/ "./src/elements/index.js"
/*!*******************************!*\
  !*** ./src/elements/index.js ***!
  \*******************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Replace_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Replace.js */ "./src/elements/Replace.js");


/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	const __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		const cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		const module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			const e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	// define getter/value functions for harmony exports
/******/ 	__webpack_require__.d = (exports, definition) => {
/******/ 		for(var key in definition) {
/******/ 			if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 				Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 			}
/******/ 		}
/******/ 	};
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	__webpack_require__.g = (function() {
/******/ 		if (typeof globalThis === 'object') return globalThis;
/******/ 		try {
/******/ 			return this || new Function('return this')();
/******/ 		} catch (e) {
/******/ 			if (typeof window === 'object') return window;
/******/ 		}
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop));
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = (exports) => {
/******/ 		Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/ 	
/************************************************************************/
let __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!********************!*\
  !*** ./browser.js ***!
  \********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Context: () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_2__.Context),
/* harmony export */   Directive: () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_2__.Directive),
/* harmony export */   DirectiveElement: () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_2__.DirectiveElement),
/* harmony export */   Renderer: () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_2__.Renderer),
/* harmony export */   Template: () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_2__.Template)
/* harmony export */ });
/* harmony import */ var _default_js_defaultjs_extdom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @default-js/defaultjs-extdom */ "./node_modules/@default-js/defaultjs-extdom/index.js");
/* harmony import */ var _default_js_defaultjs_common_utils_src_Global_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @default-js/defaultjs-common-utils/src/Global.js */ "./node_modules/@default-js/defaultjs-common-utils/src/Global.js");
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.js */ "./index.js");




_default_js_defaultjs_common_utils_src_Global_js__WEBPACK_IMPORTED_MODULE_1__["default"].defaultjs = _default_js_defaultjs_common_utils_src_Global_js__WEBPACK_IMPORTED_MODULE_1__["default"].defaultjs || {};
_default_js_defaultjs_common_utils_src_Global_js__WEBPACK_IMPORTED_MODULE_1__["default"].defaultjs.jstl = _default_js_defaultjs_common_utils_src_Global_js__WEBPACK_IMPORTED_MODULE_1__["default"].defaultjs.tl = _default_js_defaultjs_common_utils_src_Global_js__WEBPACK_IMPORTED_MODULE_1__["default"].defaultjs.tl || {
	VERSION : "2.0.0",
	Template: _index_js__WEBPACK_IMPORTED_MODULE_2__.Template,
	Renderer: _index_js__WEBPACK_IMPORTED_MODULE_2__.Renderer,
	Context: _index_js__WEBPACK_IMPORTED_MODULE_2__.Context,
	Directive: _index_js__WEBPACK_IMPORTED_MODULE_2__.Directive,
	DirectiveElement: _index_js__WEBPACK_IMPORTED_MODULE_2__.DirectiveElement
};



})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJvd3Nlci1kZWZhdWx0anMtdGVtcGxhdGUtbGFuZ3VhZ2UuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0E0QztBQUNvQjtBQUNoRTtBQUNBLGdEQUFNLGFBQWEsZ0RBQU07QUFDekIsZ0RBQU0sb0JBQW9CLGdEQUFNO0FBQ2hDLGNBQWMsUUFBUTtBQUN0QixjQUFjLHlFQUFVO0FBQ3hCO0FBQ0EsU0FBUyxvREFBSztBQUNkO0FBQ0E7QUFDQTtBQUNBLGdEQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0EsZ0RBQU07QUFDTjtBQUNBO0FBQ0E7QUFDQSxnREFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnREFBTTtBQUNOO0FBQ0EsdUNBQXVDLGdEQUFNO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEI7QUFDOUIsK0JBQStCO0FBQy9CO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEU7Ozs7Ozs7Ozs7Ozs7O0FDL0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ3VEO0FBQ0Y7QUFDMEI7QUFDL0U7QUFDQSxrRUFBZSxXQUFXLGdFQUFZLEVBQUUscUVBQWlCO0FBQ3pEO0FBQ0EscUVBQXFFLHFFQUFVO0FBQy9FO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDaEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUN1RDtBQUNGO0FBQ2M7QUFDbkU7QUFDQSxrRUFBZSxtQkFBbUIsZ0VBQVksRUFBRSx1RUFBbUI7QUFDbkU7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNkQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ3VEO0FBQ0Y7QUFDUTtBQUNNO0FBQ25FO0FBQ0Esa0VBQWUsU0FBUyxnRUFBWSxFQUFFLG9FQUFnQixFQUFFLHVFQUFtQixFOzs7Ozs7Ozs7Ozs7O0FDYjNFO0FBQ0E7QUFD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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxxREFBUyxVQUFVLDhCQUE4QixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEYzQjtBQUNIO0FBQ0Y7QUFDSTtBQUNDO0FBQ0E7QUFDRDtBQUNGO0FBQ007QUFDRzs7Ozs7Ozs7Ozs7Ozs7OztBQ1RnQjs7QUFFN0IsNkJBQTZCLDREQUFPO0FBQ25EO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixhQUFhO0FBQ2xDO0FBQ0EsZ0JBQWdCLGtCQUFrQjtBQUNsQztBQUNBO0FBQ0E7QUFDQSxJQUFJLHVEQUF1RCxVQUFVLFE7Ozs7Ozs7Ozs7Ozs7Ozs7OztVRVpyRTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7O1VDNUJBO1VBQ0E7VUFDQTtVQUNBO1VBQ0EseUNBQXlDLHdDQUF3QztVQUNqRjtVQUNBO1VBQ0EsRTs7O1VDUEE7VUFDQTtVQUNBO1VBQ0E7VUFDQSxHQUFHO1VBQ0g7VUFDQTtVQUNBLENBQUMsSTs7O1VDUEQseUY7OztVQ0FBO1VBQ0E7VUFDQSxzREFBc0QsaUJBQWlCO1VBQ3ZFLGdEQUFnRCxhQUFhO1VBQzdELEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSnNDO0FBQ2dDO0FBQ2E7O0FBRW5GLHdGQUFNLGFBQWEsd0ZBQU07QUFDekIsd0ZBQU0sa0JBQWtCLHdGQUFNLGdCQUFnQix3RkFBTTtBQUNwRCxjQUFjLFFBQVE7QUFDdEIsU0FBUztBQUNULFNBQVM7QUFDVCxRQUFRO0FBQ1IsVUFBVTtBQUNWLGlCQUFpQjtBQUNqQjs7QUFFa0UiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AZGVmYXVsdC1qcy9kZWZhdWx0anMtdGVtcGxhdGUtbGFuZ3VhZ2UvLi9ub2RlX21vZHVsZXMvQGRlZmF1bHQtanMvZGVmYXVsdGpzLWV4dGRvbS9pbmRleC5qcyIsIndlYnBhY2s6Ly9AZGVmYXVsdC1qcy9kZWZhdWx0anMtdGVtcGxhdGUtbGFuZ3VhZ2UvLi9ub2RlX21vZHVsZXMvQGRlZmF1bHQtanMvZGVmYXVsdGpzLWV4dGRvbS9zcmMvR2xvYmFsLmpzIiwid2VicGFjazovL0BkZWZhdWx0LWpzL2RlZmF1bHRqcy10ZW1wbGF0ZS1sYW5ndWFnZS8uL25vZGVfbW9kdWxlcy9AZGVmYXVsdC1qcy9kZWZhdWx0anMtZXh0ZG9tL3NyYy9kb20vRG9jdW1lbnQuanMiLCJ3ZWJwYWNrOi8vQGRlZmF1bHQtanMvZGVmYXVsdGpzLXRlbXBsYXRlLWxhbmd1YWdlLy4vbm9kZV9tb2R1bGVzL0BkZWZhdWx0LWpzL2RlZmF1bHRqcy1leHRkb20vc3JjL2RvbS9Eb2N1bWVudEZyYWdtZW50LmpzIiwid2VicGFjazovL0BkZWZhdWx0LWpzL2RlZmF1bHRqcy10ZW1wbGF0ZS1sYW5ndWFnZS8uL25vZGVfbW9kdWxlcy9AZGVmYXVsdC1qcy9kZWZhdWx0anMtZXh0ZG9tL3NyYy9kb20vRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9AZGVmYXVsdC1qcy9kZWZhdWx0anMtdGVtcGxhdGUtbGFuZ3VhZ2UvLi9ub2RlX21vZHVsZXMvQGRlZmF1bHQtanMvZGVmYXVsdGpzLWV4dGRvbS9zcmMvZG9tL0V2ZW50VGFyZ2V0LmpzIiwid2VicGFjazovL0BkZWZhdWx0LWpzL2RlZmF1bHRqcy10ZW1wbGF0ZS1sYW5ndWFnZS8uL25vZGVfbW9kdWxlcy9AZGVmYXVsdC1qcy9kZWZhdWx0anMtZXh0ZG9tL3NyYy9kb20vSFRNTEVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vQGRlZmF1bHQtanMvZGVmYXVsdGpzLXRlbXBsYXRlLWxhbmd1YWdlLy4vbm9kZV9tb2R1bGVzL0BkZWZhdWx0LWpzL2RlZmF1bHRqcy1leHRkb20vc3JjL2RvbS9IVE1MSW5wdXRFbGVtZW50LmpzIiwid2VicGFjazovL0BkZWZhdWx0LWpzL2RlZmF1bHRqcy10ZW1wbGF0ZS1sYW5ndWFnZS8uL25vZGVfbW9kdWxlcy9AZGVmYXVsdC1qcy9kZWZhdWx0anMtZXh0ZG9tL3NyYy9kb20vSFRNTFNlbGVjdEVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vQGRlZmF1bHQtanMvZGVmYXVsdGpzLXRlbXBsYXRlLWxhbmd1YWdlLy4vbm9kZV9tb2R1bGVzL0BkZWZhdWx0LWpzL2RlZmF1bHRqcy1leHRkb20vc3JjL2RvbS9IVE1MVGV4dEFyZWFFbGVtZW50LmpzIiwid2VicGFjazovL0BkZWZhdWx0LWpzL2RlZmF1bHRqcy10ZW1wbGF0ZS1sYW5ndWFnZS8uL25vZGVfbW9kdWxlcy9AZGVmYXVsdC1qcy9kZWZhdWx0anMtZXh0ZG9tL3NyYy9kb20vSHRtbENvbGxlY3Rpb24uanMiLCJ3ZWJwYWNrOi8vQGRlZmF1bHQtanMvZGVmYXVsdGpzLXRlbXBsYXRlLWxhbmd1YWdlLy4vbm9kZV9tb2R1bGVzL0BkZWZhdWx0LWpzL2RlZmF1bHRqcy1leHRkb20vc3JjL2RvbS9Ob2RlLmpzIiwid2VicGFjazovL0BkZWZhdWx0LWpzL2RlZmF1bHRqcy10ZW1wbGF0ZS1sYW5ndWFnZS8uL25vZGVfbW9kdWxlcy9AZGVmYXVsdC1qcy9kZWZhdWx0anMtZXh0ZG9tL3NyYy9kb20vTm9kZUxpc3QuanMiLCJ3ZWJwYWNrOi8vQGRlZmF1bHQtanMvZGVmYXVsdGpzLXRlbXBsYXRlLWxhbmd1YWdlLy4vbm9kZV9tb2R1bGVzL0BkZWZhdWx0LWpzL2RlZmF1bHRqcy1leHRkb20vc3JjL2RvbS9leHRlbnRpb25zL0F0dHJpYnV0ZVN1cHBvcnQuanMiLCJ3ZWJwYWNrOi8vQGRlZmF1bHQtanMvZGVmYXVsdGpzLXRlbXBsYXRlLWxhbmd1YWdlLy4vbm9kZV9tb2R1bGVzL0BkZWZhdWx0LWpzL2RlZmF1bHRqcy1leHRkb20vc3JjL2RvbS9leHRlbnRpb25zL0RhdGFTdXBwb3J0LmpzIiwid2VicGFjazovL0BkZWZhdWx0LWpzL2RlZmF1bHRqcy10ZW1wbGF0ZS1sYW5ndWFnZS8uL25vZGVfbW9kdWxlcy9AZGVmYXVsdC1qcy9kZWZhdWx0anMtZXh0ZG9tL3NyYy9kb20vZXh0ZW50aW9ucy9FdmVudFN1cHBvcnQuanMiLCJ3ZWJwYWNrOi8vQGRlZmF1bHQtanMvZGVmYXVsdGpzLXRlbXBsYXRlLWxhbmd1YWdlLy4vbm9kZV9tb2R1bGVzL0BkZWZhdWx0LWpzL2RlZmF1bHRqcy1leHRkb20vc3JjL2RvbS9leHRlbnRpb25zL0h0bWxDbGFzc1N1cHBvcnQuanMiLCJ3ZWJwYWNrOi8vQGRlZmF1bHQtanMvZGVmYXVsdGpzLXRlbXBsYXRlLWxhbmd1YWdlLy4vbm9kZV9tb2R1bGVzL0BkZWZhdWx0LWpzL2RlZmF1bHRqcy1leHRkb20vc3JjL2RvbS9leHRlbnRpb25zL0xpc3RTdXBwb3J0LmpzIiwid2VicGFjazovL0BkZWZhdWx0LWpzL2RlZmF1bHRqcy10ZW1wbGF0ZS1sYW5ndWFnZS8uL25vZGVfbW9kdWxlcy9AZGVmYXVsdC1qcy9kZWZhdWx0anMtZXh0ZG9tL3NyYy9kb20vZXh0ZW50aW9ucy9MaXN0VHlwZUJ1aWxkZXIuanMiLCJ3ZWJwYWNrOi8vQGRlZmF1bHQtanMvZGVmYXVsdGpzLXRlbXBsYXRlLWxhbmd1YWdlLy4vbm9kZV9tb2R1bGVzL0BkZWZhdWx0LWpzL2RlZmF1bHRqcy1leHRkb20vc3JjL2RvbS9leHRlbnRpb25zL01hbmlwdWxhdGlvblN1cHBvcnQuanMiLCJ3ZWJwYWNrOi8vQGRlZmF1bHQtanMvZGVmYXVsdGpzLXRlbXBsYXRlLWxhbmd1YWdlLy4vbm9kZV9tb2R1bGVzL0BkZWZhdWx0LWpzL2RlZmF1bHRqcy1leHRkb20vc3JjL2RvbS9leHRlbnRpb25zL1F1ZXJ5U3VwcG9ydC5qcyIsIndlYnBhY2s6Ly9AZGVmYXVsdC1qcy9kZWZhdWx0anMtdGVtcGxhdGUtbGFuZ3VhZ2UvLi9ub2RlX21vZHVsZXMvQGRlZmF1bHQtanMvZGVmYXVsdGpzLWV4dGRvbS9zcmMvZG9tL2V4dGVudGlvbnMvUmVhZHlFdmVudFN1cHBvcnQuanMiLCJ3ZWJwYWNrOi8vQGRlZmF1bHQtanMvZGVmYXVsdGpzLXRlbXBsYXRlLWxhbmd1YWdlLy4vbm9kZV9tb2R1bGVzL0BkZWZhdWx0LWpzL2RlZmF1bHRqcy1leHRkb20vc3JjL2RvbS9leHRlbnRpb25zL1Nob3dIaWRlU3VwcG9ydC5qcyIsIndlYnBhY2s6Ly9AZGVmYXVsdC1qcy9kZWZhdWx0anMtdGVtcGxhdGUtbGFuZ3VhZ2UvLi9ub2RlX21vZHVsZXMvQGRlZmF1bHQtanMvZGVmYXVsdGpzLWV4dGRvbS9zcmMvZG9tL2V4dGVudGlvbnMvVmFsdWVTdXBwb3J0LmpzIiwid2VicGFjazovL0BkZWZhdWx0LWpzL2RlZmF1bHRqcy10ZW1wbGF0ZS1sYW5ndWFnZS8uL25vZGVfbW9kdWxlcy9AZGVmYXVsdC1qcy9kZWZhdWx0anMtZXh0ZG9tL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9AZGVmYXVsdC1qcy9kZWZhdWx0anMtdGVtcGxhdGUtbGFuZ3VhZ2UvLi9ub2RlX21vZHVsZXMvQGRlZmF1bHQtanMvZGVmYXVsdGpzLWV4dGRvbS9zcmMvdXRpbHMvRGVsZWdhdGVyQnVpbGRlci5qcyIsIndlYnBhY2s6Ly9AZGVmYXVsdC1qcy9kZWZhdWx0anMtdGVtcGxhdGUtbGFuZ3VhZ2UvLi9ub2RlX21vZHVsZXMvQGRlZmF1bHQtanMvZGVmYXVsdGpzLWV4dGRvbS9zcmMvdXRpbHMvRXh0ZW5kUHJvdG90eXBlLmpzIiwid2VicGFjazovL0BkZWZhdWx0LWpzL2RlZmF1bHRqcy10ZW1wbGF0ZS1sYW5ndWFnZS8uL25vZGVfbW9kdWxlcy9AZGVmYXVsdC1qcy9kZWZhdWx0anMtZXh0ZG9tL3NyYy91dGlscy9FeHRlbmRlci5qcyIsIndlYnBhY2s6Ly9AZGVmYXVsdC1qcy9kZWZhdWx0anMtdGVtcGxhdGUtbGFuZ3VhZ2UvLi9ub2RlX21vZHVsZXMvQGRlZmF1bHQtanMvZGVmYXVsdGpzLWV4dGRvbS9zcmMvdXRpbHMvVXRpbHMuanMiLCJ3ZWJwYWNrOi8vQGRlZmF1bHQtanMvZGVmYXVsdGpzLXRlbXBsYXRlLWxhbmd1YWdlLy4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vQGRlZmF1bHQtanMvZGVmYXVsdGpzLXRlbXBsYXRlLWxhbmd1YWdlLy4vbm9kZV9tb2R1bGVzL0BkZWZhdWx0LWpzL2RlZmF1bHRqcy1jb21tb24tdXRpbHMvc3JjL0dsb2JhbC5qcyIsIndlYnBhY2s6Ly9AZGVmYXVsdC1qcy9kZWZhdWx0anMtdGVtcGxhdGUtbGFuZ3VhZ2UvLi9ub2RlX21vZHVsZXMvQGRlZmF1bHQtanMvZGVmYXVsdGpzLWNvbW1vbi11dGlscy9zcmMvT2JqZWN0UHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vQGRlZmF1bHQtanMvZGVmYXVsdGpzLXRlbXBsYXRlLWxhbmd1YWdlLy4vbm9kZV9tb2R1bGVzL0BkZWZhdWx0LWpzL2RlZmF1bHRqcy1jb21tb24tdXRpbHMvc3JjL09iamVjdFV0aWxzLmpzIiwid2VicGFjazovL0BkZWZhdWx0LWpzL2RlZmF1bHRqcy10ZW1wbGF0ZS1sYW5ndWFnZS8uL25vZGVfbW9kdWxlcy9AZGVmYXVsdC1qcy9kZWZhdWx0anMtY29tbW9uLXV0aWxzL3NyYy9Qcm9taXNlVXRpbHMuanMiLCJ3ZWJwYWNrOi8vQGRlZmF1bHQtanMvZGVmYXVsdGpzLXRlbXBsYXRlLWxhbmd1YWdlLy4vbm9kZV9tb2R1bGVzL0BkZWZhdWx0LWpzL2RlZmF1bHRqcy1jb21tb24tdXRpbHMvc3JjL2phdmFzY3JpcHQvU3RyaW5nLmpzIiwid2VicGFjazovL0BkZWZhdWx0LWpzL2RlZmF1bHRqcy10ZW1wbGF0ZS1sYW5ndWFnZS8uL25vZGVfbW9kdWxlcy9AZGVmYXVsdC1qcy9kZWZhdWx0anMtZXhwcmVzc2lvbi1sYW5ndWFnZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9AZGVmYXVsdC1qcy9kZWZhdWx0anMtdGVtcGxhdGUtbGFuZ3VhZ2UvLi9ub2RlX21vZHVsZXMvQGRlZmF1bHQtanMvZGVmYXVsdGpzLWV4cHJlc3Npb24tbGFuZ3VhZ2Uvc3JjL0NvZGVDYWNoZS5qcyIsIndlYnBhY2s6Ly9AZGVmYXVsdC1qcy9kZWZhdWx0anMtdGVtcGxhdGUtbGFuZ3VhZ2UvLi9ub2RlX21vZHVsZXMvQGRlZmF1bHQtanMvZGVmYXVsdGpzLWV4cHJlc3Npb24tbGFuZ3VhZ2Uvc3JjL0RlZmF1bHRWYWx1ZS5qcyIsIndlYnBhY2s6Ly9AZGVmYXVsdC1qcy9kZWZhdWx0anMtdGVtcGxhdGUtbGFuZ3VhZ2UvLi9ub2RlX21vZHVsZXMvQGRlZmF1bHQtanMvZGVmYXVsdGpzLWV4cHJlc3Npb24tbGFuZ3VhZ2Uvc3JjL0V4ZWN1dGVyLmpzIiwid2VicGFjazovL0BkZWZhdWx0LWpzL2RlZmF1bHRqcy10ZW1wbGF0ZS1sYW5ndWFnZS8uL25vZGVfbW9kdWxlcy9AZGVmYXVsdC1qcy9kZWZhdWx0anMtZXhwcmVzc2lvbi1sYW5ndWFnZS9zcmMvRXhlY3V0ZXJSZWdpc3RyeS5qcyIsIndlYnBhY2s6Ly9AZGVmYXVsdC1qcy9kZWZhdWx0anMtdGVtcGxhdGUtbGFuZ3VhZ2UvLi9ub2RlX21vZHVsZXMvQGRlZmF1bHQtanMvZGVmYXVsdGpzLWV4cHJlc3Npb24tbGFuZ3VhZ2Uvc3JjL0V4cHJlc3Npb25SZXNvbHZlci5qcyIsIndlYnBhY2s6Ly9AZGVmYXVsdC1qcy9kZWZhdWx0anMtdGVtcGxhdGUtbGFuZ3VhZ2UvLi9ub2RlX21vZHVsZXMvQGRlZmF1bHQtanMvZGVmYXVsdGpzLWV4cHJlc3Npb24tbGFuZ3VhZ2Uvc3JjL0V4cHJlc3Npb25TY2FubmVyLmpzIiwid2VicGFjazovL0BkZWZhdWx0LWpzL2RlZmF1bHRqcy10ZW1wbGF0ZS1sYW5ndWFnZS8uL25vZGVfbW9kdWxlcy9AZGVmYXVsdC1qcy9kZWZhdWx0anMtZXhwcmVzc2lvbi1sYW5ndWFnZS9zcmMvUmVzb2x2ZXJDb250ZXh0SGFuZGxlLmpzIiwid2VicGFjazovL0BkZWZhdWx0LWpzL2RlZmF1bHRqcy10ZW1wbGF0ZS1sYW5ndWFnZS8uL25vZGVfbW9kdWxlcy9AZGVmYXVsdC1qcy9kZWZhdWx0anMtZXhwcmVzc2lvbi1sYW5ndWFnZS9zcmMvVXRpbHMuanMiLCJ3ZWJwYWNrOi8vQGRlZmF1bHQtanMvZGVmYXVsdGpzLXRlbXBsYXRlLWxhbmd1YWdlLy4vbm9kZV9tb2R1bGVzL0BkZWZhdWx0LWpzL2RlZmF1bHRqcy1leHByZXNzaW9uLWxhbmd1YWdlL3NyYy9leGVjdXRlci9Db250ZXh0RGVjb25zdHJ1Y3RvckV4ZWN1dGVyLmpzIiwid2VicGFjazovL0BkZWZhdWx0LWpzL2RlZmF1bHRqcy10ZW1wbGF0ZS1sYW5ndWFnZS8uL25vZGVfbW9kdWxlcy9AZGVmYXVsdC1qcy9kZWZhdWx0anMtZXhwcmVzc2lvbi1sYW5ndWFnZS9zcmMvZXhlY3V0ZXIvQ29udGV4dE9iamVjdEV4ZWN1dGVyLmpzIiwid2VicGFjazovL0BkZWZhdWx0LWpzL2RlZmF1bHRqcy10ZW1wbGF0ZS1sYW5ndWFnZS8uL25vZGVfbW9kdWxlcy9AZGVmYXVsdC1qcy9kZWZhdWx0anMtZXhwcmVzc2lvbi1sYW5ndWFnZS9zcmMvZXhlY3V0ZXIvV2l0aFNjb3BlZEV4ZWN1dGVyLmpzIiwid2VicGFjazovL0BkZWZhdWx0LWpzL2RlZmF1bHRqcy10ZW1wbGF0ZS1sYW5ndWFnZS8uL25vZGVfbW9kdWxlcy9AZGVmYXVsdC1qcy9kZWZhdWx0anMtZXhwcmVzc2lvbi1sYW5ndWFnZS9zcmMvZXhlY3V0ZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vQGRlZmF1bHQtanMvZGVmYXVsdGpzLXRlbXBsYXRlLWxhbmd1YWdlLy4vc3JjL0NvbnRleHQuanMiLCJ3ZWJwYWNrOi8vQGRlZmF1bHQtanMvZGVmYXVsdGpzLXRlbXBsYXRlLWxhbmd1YWdlLy4vc3JjL0RpcmVjdGl2ZS5qcyIsIndlYnBhY2s6Ly9AZGVmYXVsdC1qcy9kZWZhdWx0anMtdGVtcGxhdGUtbGFuZ3VhZ2UvLi9zcmMvRGlyZWN0aXZlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9AZGVmYXVsdC1qcy9kZWZhdWx0anMtdGVtcGxhdGUtbGFuZ3VhZ2UvLi9zcmMvUmVuZGVyZXIuanMiLCJ3ZWJwYWNrOi8vQGRlZmF1bHQtanMvZGVmYXVsdGpzLXRlbXBsYXRlLWxhbmd1YWdlLy4vc3JjL1RlbXBsYXRlLmpzIiwid2VicGFjazovL0BkZWZhdWx0LWpzL2RlZmF1bHRqcy10ZW1wbGF0ZS1sYW5ndWFnZS8uL3NyYy9VdGlscy5qcyIsIndlYnBhY2s6Ly9AZGVmYXVsdC1qcy9kZWZhdWx0anMtdGVtcGxhdGUtbGFuZ3VhZ2UvLi9zcmMvZGlyZWN0aXZlcy9BdHRhY2hFbGVtZW50LmpzIiwid2VicGFjazovL0BkZWZhdWx0LWpzL2RlZmF1bHRqcy10ZW1wbGF0ZS1sYW5ndWFnZS8uL3NyYy9kaXJlY3RpdmVzL0F0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vQGRlZmF1bHQtanMvZGVmYXVsdGpzLXRlbXBsYXRlLWxhbmd1YWdlLy4vc3JjL2RpcmVjdGl2ZXMvQ2hvb3NlLmpzIiwid2VicGFjazovL0BkZWZhdWx0LWpzL2RlZmF1bHRqcy10ZW1wbGF0ZS1sYW5ndWFnZS8uL3NyYy9kaXJlY3RpdmVzL0RhdGEuanMiLCJ3ZWJwYWNrOi8vQGRlZmF1bHQtanMvZGVmYXVsdGpzLXRlbXBsYXRlLWxhbmd1YWdlLy4vc3JjL2RpcmVjdGl2ZXMvRm9yZWFjaC5qcyIsIndlYnBhY2s6Ly9AZGVmYXVsdC1qcy9kZWZhdWx0anMtdGVtcGxhdGUtbGFuZ3VhZ2UvLi9zcmMvZGlyZWN0aXZlcy9JZi5qcyIsIndlYnBhY2s6Ly9AZGVmYXVsdC1qcy9kZWZhdWx0anMtdGVtcGxhdGUtbGFuZ3VhZ2UvLi9zcmMvZGlyZWN0aXZlcy9JbmNsdWRlLmpzIiwid2VicGFjazovL0BkZWZhdWx0LWpzL2RlZmF1bHRqcy10ZW1wbGF0ZS1sYW5ndWFnZS8uL3NyYy9kaXJlY3RpdmVzL0luaXRpYWwuanMiLCJ3ZWJwYWNrOi8vQGRlZmF1bHQtanMvZGVmYXVsdGpzLXRlbXBsYXRlLWxhbmd1YWdlLy4vc3JjL2RpcmVjdGl2ZXMvT25GaW5pc2hlZC5qcyIsIndlYnBhY2s6Ly9AZGVmYXVsdC1qcy9kZWZhdWx0anMtdGVtcGxhdGUtbGFuZ3VhZ2UvLi9zcmMvZGlyZWN0aXZlcy9SZXBlYXQuanMiLCJ3ZWJwYWNrOi8vQGRlZmF1bHQtanMvZGVmYXVsdGpzLXRlbXBsYXRlLWxhbmd1YWdlLy4vc3JjL2RpcmVjdGl2ZXMvVGV4dC5qcyIsIndlYnBhY2s6Ly9AZGVmYXVsdC1qcy9kZWZhdWx0anMtdGVtcGxhdGUtbGFuZ3VhZ2UvLi9zcmMvZGlyZWN0aXZlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9AZGVmYXVsdC1qcy9kZWZhdWx0anMtdGVtcGxhdGUtbGFuZ3VhZ2UvLi9zcmMvZWxlbWVudHMvUmVwbGFjZS5qcyIsIndlYnBhY2s6Ly9AZGVmYXVsdC1qcy9kZWZhdWx0anMtdGVtcGxhdGUtbGFuZ3VhZ2UvLi9zcmMvZWxlbWVudHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vQGRlZmF1bHQtanMvZGVmYXVsdGpzLXRlbXBsYXRlLWxhbmd1YWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL0BkZWZhdWx0LWpzL2RlZmF1bHRqcy10ZW1wbGF0ZS1sYW5ndWFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vQGRlZmF1bHQtanMvZGVmYXVsdGpzLXRlbXBsYXRlLWxhbmd1YWdlL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vQGRlZmF1bHQtanMvZGVmYXVsdGpzLXRlbXBsYXRlLWxhbmd1YWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vQGRlZmF1bHQtanMvZGVmYXVsdGpzLXRlbXBsYXRlLWxhbmd1YWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vQGRlZmF1bHQtanMvZGVmYXVsdGpzLXRlbXBsYXRlLWxhbmd1YWdlLy4vYnJvd3Nlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXCIuL3NyY1wiOyIsImltcG9ydCBVdGlscywge0dMT0JBTH0gZnJvbSBcIi4vdXRpbHMvVXRpbHNcIjtcclxuaW1wb3J0IHsgUkVBRFlFVkVOVCB9IGZyb20gXCIuL2RvbS9leHRlbnRpb25zL1JlYWR5RXZlbnRTdXBwb3J0XCI7XHJcblxyXG5HTE9CQUwuZGVmYXVsdGpzID0gR0xPQkFMLmRlZmF1bHRqcyB8fCB7fTtcclxuR0xPQkFMLmRlZmF1bHRqcy5leHRkb20gPSBHTE9CQUwuZGVmYXVsdGpzLmV4dGRvbSB8fCB7XHJcblx0VkVSU0lPTiA6IFwiJHt2ZXJzaW9ufVwiLFxyXG5cdFJFQURZRVZFTlQgOiBSRUFEWUVWRU5ULFxyXG5cdHV0aWxzIDoge1xyXG5cdFx0VXRpbHM6IFV0aWxzXHJcblx0fVxyXG59O1xyXG5cclxuR0xPQkFMLmZpbmQgPSBmdW5jdGlvbigpIHtcclxuXHRyZXR1cm4gZG9jdW1lbnQuZmluZC5hcHBseShkb2N1bWVudCwgYXJndW1lbnRzKTtcclxufTtcclxuXHJcbkdMT0JBTC5yZWFkeSA9IGZ1bmN0aW9uKCkge1xyXG5cdHJldHVybiBkb2N1bWVudC5yZWFkeS5hcHBseShkb2N1bWVudCwgYXJndW1lbnRzKTtcclxufTtcclxuXHJcbkdMT0JBTC5jcmVhdGUgPSBmdW5jdGlvbihhQ29udGVudCwgYXNUZW1wbGF0ZSkge1xyXG5cdGlmICh0eXBlb2YgYXJndW1lbnRzWzBdICE9PSBcInN0cmluZ1wiKVxyXG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiVGhlIGZpcnN0IGFyZ3VtZW50IG11c3QgYmUgYSBzdHJpbmchXCIpO1xyXG5cdFxyXG5cdGNvbnN0IHRlbXBsYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRlbXBsYXRlXCIpO1xyXG5cdHRlbXBsYXRlLmlubmVySFRNTCA9IGFDb250ZW50O1xyXG5cdGlmKGFzVGVtcGxhdGUpXHJcblx0XHRyZXR1cm4gdGVtcGxhdGU7XHJcblx0XHJcblx0cmV0dXJuIGRvY3VtZW50LmltcG9ydE5vZGUodGVtcGxhdGUuY29udGVudCwgdHJ1ZSkuY2hpbGROb2RlcztcclxufTtcclxuXHJcbkdMT0JBTC5zY3JpcHQgPSBmdW5jdGlvbihhRmlsZSwgYVRhcmdldCkge1xyXG5cdGlmKGFGaWxlIGluc3RhbmNlb2YgQXJyYXkpXHJcblx0XHRyZXR1cm4gUHJvbWlzZS5hbGwoYUZpbGUubWFwKGZpbGUgPT4gR0xPQkFMLnNjcmlwdChmaWxlLCBhVGFyZ2V0KSkpO1xyXG5cdFxyXG5cdGlmKHR5cGVvZiBhRmlsZSA9PT0gXCJzdHJpbmdcIilcdFxyXG5cdFx0cmV0dXJuIG5ldyBQcm9taXNlKChyLGUpID0+IHtcclxuXHRcdFx0Y29uc3Qgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiKTtcclxuXHRcdFx0c2NyaXB0LmFzeW5jID0gdHJ1ZTtcclxuXHRcdFx0c2NyaXB0Lm9ubG9hZCA9IGZ1bmN0aW9uKCl7cigpfTtcclxuXHRcdFx0c2NyaXB0Lm9uZXJyb3IgPSBmdW5jdGlvbigpe3Rocm93IG5ldyBFcnJvcihcImxvYWQgZXJyb3IhXCIpfTtcclxuXHRcdFx0IWFUYXJnZXQgPyBkb2N1bWVudC5ib2R5LmFwcGVuZChzY3JpcHQpIDogYVRhcmdldC5hcHBlbmQoc2NyaXB0KTtcclxuXHRcdFx0c2NyaXB0LnNyYyA9IGFGaWxlO1xyXG5cdFx0fSk7XHJcblx0ZWxzZVxyXG5cdFx0cmV0dXJuIFByb21pc2UucmVqZWN0KFwiRmlyc3QgcGFyYW1ldGVyIG11c3QgYmUgYW4gYXJyYXkgb2Ygc3RyaW5ncyBvciBhIHN0cmluZyFcIik7XHJcbn07IiwiLyoqXHJcbiAqIEFkZHMgcXVlcnkgYW5kIHJlYWR5IGZ1bmN0aW9ucyB0byBEb2N1bWVudCwgYW5kIHRyaWdnZXJzIHRoZSByZWFkeSBldmVudC5cclxuICpcclxuICogVGhlIGV2ZW50IGlzIHRyaWdnZXJlZCBvbmNlIHRoZSBkb20gaXMgcGFyc2VkLiBBIHJlYWR5IGZ1bmN0aW9uIHJlZ2lzdGVyZWRcclxuICogYWZ0ZXIgdGhhdCBpcyBub3QgbG9zdCwgYXMgcmVhZHkoKSB0cmlnZ2VycyB0aGUgZXZlbnQgYWdhaW4gd2hlbiB0aGUgZG9jdW1lbnRcclxuICogaXMgYWxyZWFkeSBjb21wbGV0ZS5cclxuICovXHJcbmltcG9ydCBleHRlbmRQcm90b3R5cGUgZnJvbSBcIi4uL3V0aWxzL0V4dGVuZFByb3RvdHlwZVwiO1xyXG5pbXBvcnQgUXVlcnlTdXBwb3J0IGZyb20gXCIuL2V4dGVudGlvbnMvUXVlcnlTdXBwb3J0XCI7XHJcbmltcG9ydCBSZWFkeUV2ZW50U3VwcG9ydCwgeyBSRUFEWUVWRU5UIH0gZnJvbSBcIi4vZXh0ZW50aW9ucy9SZWFkeUV2ZW50U3VwcG9ydFwiO1xyXG5cclxuZXh0ZW5kUHJvdG90eXBlKERvY3VtZW50LCBRdWVyeVN1cHBvcnQsIFJlYWR5RXZlbnRTdXBwb3J0KTtcclxuXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IGRvY3VtZW50LnRyaWdnZXIoUkVBRFlFVkVOVCkpO1xyXG5cclxuXHJcblxyXG4iLCIvKipcclxuICogQWRkcyBxdWVyeSBhbmQgY29udGVudCBmdW5jdGlvbnMgdG8gRG9jdW1lbnRGcmFnbWVudC5cclxuICpcclxuICogQSBTaGFkb3dSb290IGlzIGEgRG9jdW1lbnRGcmFnbWVudCwgc28gYSBzaGFkb3cgcm9vdCBjYW4gYmUgc2VhcmNoZWQgYW5kIGZpbGxlZFxyXG4gKiB0aGUgc2FtZSB3YXkgYXMgdGhlIGZyYWdtZW50IGNyZWF0ZSgpIHJldHVybnMuXHJcbiAqL1xyXG5pbXBvcnQgZXh0ZW5kUHJvdG90eXBlIGZyb20gXCIuLi91dGlscy9FeHRlbmRQcm90b3R5cGVcIjtcclxuaW1wb3J0IFF1ZXJ5U3VwcG9ydCBmcm9tIFwiLi9leHRlbnRpb25zL1F1ZXJ5U3VwcG9ydFwiO1xyXG5pbXBvcnQgTWFuaXB1bGF0aW9uU3VwcG9ydCBmcm9tIFwiLi9leHRlbnRpb25zL01hbmlwdWxhdGlvblN1cHBvcnRcIjtcclxuXHJcbmV4dGVuZFByb3RvdHlwZShEb2N1bWVudEZyYWdtZW50LCBRdWVyeVN1cHBvcnQsIE1hbmlwdWxhdGlvblN1cHBvcnQpO1xyXG5cclxuXHJcblxyXG5cclxuIiwiLyoqXHJcbiAqIEFkZHMgcXVlcnksIGF0dHJpYnV0ZSBhbmQgY29udGVudCBmdW5jdGlvbnMgdG8gRWxlbWVudC5cclxuICpcclxuICogUXVlcnkgYW5kIGF0dHJpYnV0ZSBmdW5jdGlvbnMgbmVlZCBhIHNlbGVjdGFibGUgbm9kZSwgd2hpY2ggaXMgd2h5IHRoZXkgc2l0XHJcbiAqIGhlcmUgYW5kIG5vdCBvbiBOb2RlLiBNYW5pcHVsYXRpb25TdXBwb3J0IGlzIGFwcGxpZWQgYWdhaW4gYWx0aG91Z2ggRWxlbWVudFxyXG4gKiBpbmhlcml0cyBpdCBmcm9tIE5vZGUgLSB0aGF0IHB1dHMgdGhlIGZ1bmN0aW9ucyBvbiBFbGVtZW50IGFzIG93biBwcm9wZXJ0aWVzLFxyXG4gKiB3aGVyZSB0aGUgZXh0ZW5zaW9ucyBvZiB0aGUgbW9yZSBzcGVjaWZpYyBodG1sIHR5cGVzIGNhbiBmaW5kIHRoZW0uXHJcbiAqL1xyXG5pbXBvcnQgZXh0ZW5kUHJvdG90eXBlIGZyb20gXCIuLi91dGlscy9FeHRlbmRQcm90b3R5cGVcIjtcclxuaW1wb3J0IFF1ZXJ5U3VwcG9ydCBmcm9tIFwiLi9leHRlbnRpb25zL1F1ZXJ5U3VwcG9ydFwiO1xyXG5pbXBvcnQgQXR0cmlidXRlU3VwcG9ydCBmcm9tIFwiLi9leHRlbnRpb25zL0F0dHJpYnV0ZVN1cHBvcnRcIjtcclxuaW1wb3J0IE1hbmlwdWxhdGlvblN1cHBvcnQgZnJvbSBcIi4vZXh0ZW50aW9ucy9NYW5pcHVsYXRpb25TdXBwb3J0XCI7XHJcblxyXG5leHRlbmRQcm90b3R5cGUoRWxlbWVudCxRdWVyeVN1cHBvcnQsIEF0dHJpYnV0ZVN1cHBvcnQsIE1hbmlwdWxhdGlvblN1cHBvcnQpOyIsIi8qKlxuICogQWRkcyB0aGUgZXZlbnQgZnVuY3Rpb25zIHRvIEV2ZW50VGFyZ2V0LlxuICpcbiAqIEV2ZW50VGFyZ2V0IGlzIHRoZSByb290IG9mIGV2ZXJ5dGhpbmcgZGlzcGF0Y2hpbmcgZXZlbnRzLCBub3Qgb25seSBvZiB0aGUgZG9tLFxuICogc28gb24oKSwgcmVtb3ZlT24oKSBhbmQgdHJpZ2dlcigpIGFyZSBhdmFpbGFibGUgb24gZXZlcnkgbm9kZSwgb24gdGhlIGRvY3VtZW50XG4gKiBhbmQgb24gdGhlIHdpbmRvdyBhbGlrZS5cbiAqL1xuaW1wb3J0IGV4dGVuZFByb3RvdHlwZSBmcm9tIFwiLi4vdXRpbHMvRXh0ZW5kUHJvdG90eXBlXCI7XG5pbXBvcnQgRXZlbnRTdXBwb3J0IGZyb20gXCIuL2V4dGVudGlvbnMvRXZlbnRTdXBwb3J0XCI7XG5cbmV4dGVuZFByb3RvdHlwZShFdmVudFRhcmdldCwgRXZlbnRTdXBwb3J0KTsiLCIvKipcclxuICogQWRkcyBjbGFzcyBhbmQgdmlzaWJpbGl0eSBmdW5jdGlvbnMgdG8gSFRNTEVsZW1lbnQuXHJcbiAqXHJcbiAqIEJvdGggd29yayBvbiB0aGUgc3R5bGUgYW5kIHRoZSBjbGFzc0xpc3Qgb2YgYSBodG1sIGVsZW1lbnQsIHdoaWNoIGlzIHdoeSB0aGV5XHJcbiAqIHNpdCBoZXJlIGFuZCBub3Qgb24gRWxlbWVudCAtIGFuIHN2ZyBlbGVtZW50IGhhcyBuZWl0aGVyIGluIHRoZSBzYW1lIHdheS5cclxuICovXHJcbmltcG9ydCBleHRlbmRQcm90b3R5cGUgZnJvbSBcIi4uL3V0aWxzL0V4dGVuZFByb3RvdHlwZVwiO1xyXG5pbXBvcnQgSHRtbENsYXNzU3VwcG9ydCBmcm9tIFwiLi9leHRlbnRpb25zL0h0bWxDbGFzc1N1cHBvcnRcIjtcclxuaW1wb3J0IFNob3dIaWRlU3VwcG9ydCBmcm9tIFwiLi9leHRlbnRpb25zL1Nob3dIaWRlU3VwcG9ydFwiO1xyXG5cclxuXHJcbmV4dGVuZFByb3RvdHlwZShIVE1MRWxlbWVudCwgSHRtbENsYXNzU3VwcG9ydCwgU2hvd0hpZGVTdXBwb3J0KTsiLCIvKipcclxuICogQWRkcyB2YWwoKSB0byBIVE1MSW5wdXRFbGVtZW50LlxyXG4gKlxyXG4gKiBWYWx1ZVN1cHBvcnQgcGlja3MgdGhlIGhhbmRsaW5nIGJ5IHRoZSB0eXBlIG9mIHRoZSBpbnB1dCwgc28gYSBjaGVja2JveCBhbmQgYVxyXG4gKiByYWRpbyBhcmUgcmVhZCBieSB0aGVpciBjaGVja2VkIHN0YXRlIHdoaWxlIGV2ZXJ5IG90aGVyIGlucHV0IGlzIHJlYWQgYnkgaXRzXHJcbiAqIHZhbHVlLlxyXG4gKi9cclxuaW1wb3J0IGV4dGVuZFByb3RvdHlwZSBmcm9tIFwiLi4vdXRpbHMvRXh0ZW5kUHJvdG90eXBlXCI7XHJcbmltcG9ydCBWYWx1ZVN1cHBvcnQgZnJvbSBcIi4vZXh0ZW50aW9ucy9WYWx1ZVN1cHBvcnRcIjtcclxuXHJcblxyXG5leHRlbmRQcm90b3R5cGUoSFRNTElucHV0RWxlbWVudCxWYWx1ZVN1cHBvcnQpOyIsIi8qKlxyXG4gKiBBZGRzIHZhbCgpIHRvIEhUTUxTZWxlY3RFbGVtZW50LlxyXG4gKlxyXG4gKiBWYWx1ZVN1cHBvcnQgcmVhZHMgYSBzZWxlY3QgYnkgaXRzIHNlbGVjdGVkIG9wdGlvbnMsIHNvIHZhbCgpIGdpdmVzIGFuIGFycmF5IG9mXHJcbiAqIHRoZWlyIHZhbHVlcyBhbmQgdGFrZXMgb25lIHRvIHNlbGVjdCB0aGVtIGFnYWluLlxyXG4gKi9cclxuaW1wb3J0IGV4dGVuZFByb3RvdHlwZSBmcm9tIFwiLi4vdXRpbHMvRXh0ZW5kUHJvdG90eXBlXCI7XHJcbmltcG9ydCBWYWx1ZVN1cHBvcnQgZnJvbSBcIi4vZXh0ZW50aW9ucy9WYWx1ZVN1cHBvcnRcIjtcclxuXHJcblxyXG5leHRlbmRQcm90b3R5cGUoSFRNTFNlbGVjdEVsZW1lbnQsVmFsdWVTdXBwb3J0KTsiLCIvKipcclxuICogQWRkcyB2YWwoKSB0byBIVE1MVGV4dEFyZWFFbGVtZW50LlxyXG4gKlxyXG4gKiBBIHRleHRhcmVhIG1hdGNoZXMgbm9uZSBvZiB0aGUgc3BlY2lhbCBpbnB1dCB0eXBlcywgc28gVmFsdWVTdXBwb3J0IGZhbGxzIGJhY2tcclxuICogdG8gcmVhZGluZyBhbmQgd3JpdGluZyBpdHMgdmFsdWUgLSBhbmQgdHJpZ2dlcnMgYW4gaW5wdXQgZXZlbnQgd2hlbiBpdCBpcyBzZXQsXHJcbiAqIHRoZSBzYW1lIGFzIGFueSBvdGhlciBmaWVsZC5cclxuICovXHJcbmltcG9ydCBleHRlbmRQcm90b3R5cGUgZnJvbSBcIi4uL3V0aWxzL0V4dGVuZFByb3RvdHlwZVwiO1xyXG5pbXBvcnQgVmFsdWVTdXBwb3J0IGZyb20gXCIuL2V4dGVudGlvbnMvVmFsdWVTdXBwb3J0XCI7XHJcblxyXG5cclxuZXh0ZW5kUHJvdG90eXBlKEhUTUxUZXh0QXJlYUVsZW1lbnQsIFZhbHVlU3VwcG9ydCk7XHJcbiIsIi8qKlxuICogQnVpbGRzIEhUTUxDb2xsZWN0aW9uIGFzIGEgbGlzdCBvZiBodG1sIGVsZW1lbnRzLlxuICpcbiAqIFNhbWUgYXMgTm9kZUxpc3QsIG9ubHkgaG9sZGluZyBodG1sIGVsZW1lbnRzIC0gYSBsaXZlIGNvbGxlY3Rpb24gbGlrZSBjaGlsZHJlblxuICogdGhlcmVmb3JlIGtlZXBzIGl0cyB0eXBlIHdoZW4gaXQgaXMgZmlsdGVyZWQuXG4gKi9cbmltcG9ydCBidWlsZExpc3RUeXBlIGZyb20gXCIuL2V4dGVudGlvbnMvTGlzdFR5cGVCdWlsZGVyXCI7XG5cbmJ1aWxkTGlzdFR5cGUoSFRNTENvbGxlY3Rpb24sIEhUTUxFbGVtZW50KTtcbiIsIi8qKlxyXG4gKiBBZGRzIGRhdGEgYW5kIGNvbnRlbnQgZnVuY3Rpb25zIHRvIE5vZGUuXHJcbiAqXHJcbiAqIE5vZGUgaXMgdGhlIGNvbW1vbiBiYXNlIG9mIGVsZW1lbnRzLCB0ZXh0IG5vZGVzIGFuZCBmcmFnbWVudHMsIHNvIGRhdGEoKSBhbmRcclxuICogdGhlIGluc2VydCBmdW5jdGlvbnMgd29yayBvbiBhbGwgb2YgdGhlbSwgbm90IG9ubHkgb24gZWxlbWVudHMuXHJcbiAqL1xyXG5pbXBvcnQgZXh0ZW5kUHJvdG90eXBlIGZyb20gXCIuLi91dGlscy9FeHRlbmRQcm90b3R5cGVcIjtcclxuaW1wb3J0IERhdGFTdXBwb3J0IGZyb20gXCIuL2V4dGVudGlvbnMvRGF0YVN1cHBvcnRcIjtcclxuaW1wb3J0IE1hbmlwdWxhdGlvblN1cHBvcnQgZnJvbSBcIi4vZXh0ZW50aW9ucy9NYW5pcHVsYXRpb25TdXBwb3J0XCI7XHJcblxyXG5leHRlbmRQcm90b3R5cGUoTm9kZSxEYXRhU3VwcG9ydCxNYW5pcHVsYXRpb25TdXBwb3J0KTsiLCIvKipcbiAqIEJ1aWxkcyBOb2RlTGlzdCBhcyBhIGxpc3Qgb2Ygbm9kZXMuXG4gKlxuICogQmVzaWRlcyB0aGUgbGlzdCBmdW5jdGlvbnMgdGhpcyBnaXZlcyBhIE5vZGVMaXN0IGV2ZXJ5IGZ1bmN0aW9uIG9mIGEgbm9kZSwgYnlcbiAqIGRlbGVnYXRpb24gLSBjYWxsaW5nIG9uZSBhcHBsaWVzIGl0IHRvIGVhY2ggbm9kZSBhbmQgY29sbGVjdHMgdGhlIHJlc3VsdHMuXG4gKi9cbmltcG9ydCBidWlsZExpc3RUeXBlIGZyb20gXCIuL2V4dGVudGlvbnMvTGlzdFR5cGVCdWlsZGVyXCI7XG5cbmJ1aWxkTGlzdFR5cGUoTm9kZUxpc3QsIE5vZGUpO1xuIiwiaW1wb3J0IEV4dGVuZGVyIGZyb20gXCIuLi8uLi91dGlscy9FeHRlbmRlclwiO1xyXG5cclxuY29uc3Qgc3VwcG9ydCA9IEV4dGVuZGVyKFwiQXR0cmlidXRlU3VwcG9ydFwiLCAoUHJvdG90eXBlKSA9PiB7XHJcblx0LyoqXHJcblx0ICogR2V0cyBvciBzZXRzIGF0dHJpYnV0ZXMgb2YgdGhpcyBlbGVtZW50LlxyXG5cdCAqXHJcblx0ICogYXR0cigpIHJldHVybnMgYWxsIGF0dHJpYnV0ZXMgYXMgYW4gb2JqZWN0LCBhdHRyKG5hbWUpIHRoZSB2YWx1ZSBvZiBhIHNpbmdsZVxyXG5cdCAqIG9uZS4gV2l0aCBhIHNlY29uZCBhcmd1bWVudCB0aGUgYXR0cmlidXRlIGlzIHNldCwgd2l0aCBudWxsIG9yIHVuZGVmaW5lZCBpdFxyXG5cdCAqIGdldHMgcmVtb3ZlZC5cclxuXHQgKlxyXG5cdCAqIFZhbHVlcyBhcmUgc3RyaW5naWZpZWQgYnkgc2V0QXR0cmlidXRlLCBzbyBhdHRyKG5hbWUsIDApIHNldHMgXCIwXCIuIE9ubHkgbnVsbFxyXG5cdCAqIGFuZCB1bmRlZmluZWQgcmVtb3ZlIGFuIGF0dHJpYnV0ZSAtIDAsIGZhbHNlIGFuZCBcIlwiIGFyZSByZWd1bGFyIHZhbHVlcy5cclxuXHQgKlxyXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBbYU5hbWVdIC0gdGhlIGF0dHJpYnV0ZSBuYW1lXHJcblx0ICogQHBhcmFtIHsqfSBbYVZhbHVlXSAtIHRoZSBuZXcgdmFsdWUsIG51bGwgb3IgdW5kZWZpbmVkIHJlbW92ZXMgdGhlIGF0dHJpYnV0ZVxyXG5cdCAqIEByZXR1cm5zIHtPYmplY3Q8c3RyaW5nLHN0cmluZz58c3RyaW5nfEVsZW1lbnR9IGFsbCBhdHRyaWJ1dGVzLCB0aGUgdmFsdWUgb2YgdGhlIHJlcXVlc3RlZCBhdHRyaWJ1dGUgKG51bGwgd2hlbiBpdCBkb2VzIG5vdCBleGlzdCksIG9yIHRoaXMgd2hlbiBhbiBhdHRyaWJ1dGUgd2FzIHNldCBvciByZW1vdmVkXHJcblx0ICovXHJcblx0UHJvdG90eXBlLmF0dHIgPSBmdW5jdGlvbiAoKSB7XHJcblx0XHRpZiAoYXJndW1lbnRzLmxlbmd0aCA9PSAwKSB7XHJcblx0XHRcdGNvbnN0IHJlc3VsdCA9IHt9O1xyXG5cdFx0XHR0aGlzLmdldEF0dHJpYnV0ZU5hbWVzKCkuZm9yRWFjaCgobmFtZSkgPT4ge1xyXG5cdFx0XHRcdHJlc3VsdFtuYW1lXSA9IHRoaXMuZ2V0QXR0cmlidXRlKG5hbWUpO1xyXG5cdFx0XHR9KTtcclxuXHRcdFx0cmV0dXJuIHJlc3VsdDtcclxuXHRcdH0gZWxzZSBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PSAxKSByZXR1cm4gdGhpcy5nZXRBdHRyaWJ1dGUoYXJndW1lbnRzWzBdKTtcclxuXHRcdGVsc2UgaWYgKGFyZ3VtZW50c1sxXSA9PSBudWxsKSB0aGlzLnJlbW92ZUF0dHJpYnV0ZShhcmd1bWVudHNbMF0pO1xyXG5cdFx0ZWxzZSB0aGlzLnNldEF0dHJpYnV0ZShhcmd1bWVudHNbMF0sIGFyZ3VtZW50c1sxXSk7XHJcblxyXG5cdFx0cmV0dXJuIHRoaXM7XHJcblx0fTtcclxufSk7XHJcbmV4cG9ydCBkZWZhdWx0IHN1cHBvcnQ7XHJcbiIsImltcG9ydCBFeHRlbmRlciBmcm9tIFwiLi4vLi4vdXRpbHMvRXh0ZW5kZXJcIjtcclxuY29uc3Qgc3VwcG9ydCA9IEV4dGVuZGVyKFwiRGF0YVN1cHBvcnRcIiwgUHJvdG90eXBlID0+IHtcclxuXHJcblx0LyoqXHJcblx0ICogUmVhZHMgYWxsIGRhdGEtIGF0dHJpYnV0ZXMgb2YgYSBub2RlIGludG8gYSBwbGFpbiBvYmplY3QuXHJcblx0ICpcclxuXHQgKiBAcGFyYW0ge05vZGV9IGVsZW1lbnRcclxuXHQgKiBAcmV0dXJucyB7T2JqZWN0PHN0cmluZyxzdHJpbmc+fSB0aGUgZGF0YXNldCBvZiB0aGUgbm9kZSwgZW1wdHkgd2hlbiBpdCBoYXMgbm9uZVxyXG5cdCAqL1xyXG5cdGNvbnN0IGxvYWREYXRhID0gKGVsZW1lbnQpID0+IHtcclxuXHRcdGNvbnN0IGRhdGEgPSB7fTtcclxuXHRcdGlmICh0eXBlb2YgZWxlbWVudC5kYXRhc2V0ICE9PSBcInVuZGVmaW5lZFwiKVxyXG5cdFx0XHRmb3IgKGNvbnN0IG5hbWUgaW4gZWxlbWVudC5kYXRhc2V0KVxyXG5cdFx0XHRcdGRhdGFbbmFtZV0gPSBlbGVtZW50LmRhdGFzZXRbbmFtZV07XHJcblx0XHRyZXR1cm4gZGF0YTtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIEdldHMgb3Igc2V0cyB0aGUgZGF0YSBvZiB0aGlzIG5vZGUuXHJcblx0ICpcclxuXHQgKiBUaGUgZmlyc3QgY2FsbCByZWFkcyB0aGUgZGF0YS0gYXR0cmlidXRlcyBpbnRvIGEgY2FjaGUsIHdoaWNoIGlzIGtlcHQgb24gdGhlXHJcblx0ICogbm9kZSBmcm9tIHRoZW4gb24uIFRoYXQgY2FjaGUgaXMgZGV0YWNoZWQgZnJvbSB0aGUgZG9tOiBsYXRlciBhdHRyaWJ1dGVcclxuXHQgKiBjaGFuZ2VzIGFyZSBub3Qgc2VlbiBhbmQgd3JpdHRlbiB2YWx1ZXMgYXJlIG5vdCByZWZsZWN0ZWQgYmFjay4gZGF0YSh0cnVlKVxyXG5cdCAqIHJlYWRzIHRoZSBhdHRyaWJ1dGVzIGFnYWluLlxyXG5cdCAqXHJcblx0ICogUmVsb2FkaW5nIG1lcmdlcywgaXQgZG9lcyBub3Qgc3luYyAtIGEgdmFsdWUgcmVtb3ZlZCBmcm9tIHRoZSBkb20gc3RheXMgaW5cclxuXHQgKiB0aGUgY2FjaGUsIGFzIGl0IGNhbiBub3QgYmUgdG9sZCBhcGFydCBmcm9tIGEgdmFsdWUgdGhhdCBuZXZlciBjYW1lIGZyb20gdGhlXHJcblx0ICogZG9tLlxyXG5cdCAqXHJcblx0ICogQHBhcmFtIHtzdHJpbmd8Ym9vbGVhbn0gW2FOYW1lXSAtIGEgbmFtZSB0byByZWFkIG9yIHdyaXRlLCBvciBhIGJvb2xlYW4gdG8gcmVhZCBhbGwgZGF0YSwgcmVsb2FkaW5nIHRoZSBhdHRyaWJ1dGVzIGZpcnN0IHdoZW4gdHJ1ZVxyXG5cdCAqIEBwYXJhbSB7Kn0gW2FWYWx1ZV0gLSB0aGUgbmV3IHZhbHVlLCBudWxsIG9yIHVuZGVmaW5lZCByZW1vdmVzIHRoZSBuYW1lXHJcblx0ICogQHJldHVybnMge09iamVjdDxzdHJpbmcsKj58KnxOb2RlfSBhbGwgZGF0YSwgdGhlIHZhbHVlIG9mIHRoZSBnaXZlbiBuYW1lLCBvciB0aGlzIHdoZW4gYSB2YWx1ZSB3YXMgd3JpdHRlblxyXG5cdCAqIEB0aHJvd3Mge0Vycm9yfSB3aGVuIHRoZSBmaXJzdCBhcmd1bWVudCBpcyBuZWl0aGVyIGEgc3RyaW5nIG5vciBhIGJvb2xlYW5cclxuXHQgKi9cclxuXHRQcm90b3R5cGUuZGF0YSA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0Y29uc3QgZGF0YSA9IGxvYWREYXRhKHRoaXMpO1xyXG5cdFx0dGhpcy5kYXRhID0gKGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRpZiAoYXJndW1lbnRzLmxlbmd0aCA9PSAwKVxyXG5cdFx0XHRcdHJldHVybiBkYXRhO1xyXG5cdFx0XHRjb25zdCBhcmcxID0gYXJndW1lbnRzWzBdO1xyXG5cdFx0XHRjb25zdCB0eXBlID0gdHlwZW9mIGFyZzE7XHJcblx0XHRcdGlmKHR5cGUgPT09IFwiYm9vbGVhblwiKXtcclxuXHRcdFx0XHRpZihhcmcxKVxyXG5cdFx0XHRcdFx0T2JqZWN0LmFzc2lnbihkYXRhLCBsb2FkRGF0YSh0aGlzKSk7XHJcblx0XHRcdFx0cmV0dXJuIGRhdGE7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGlmKHR5cGUgIT09IFwic3RyaW5nXCIpXHJcblx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKFwiZGF0YSgpIGV4cGVjdHMgYSBzdHJpbmcgb3IgYm9vbGVhbiBhcyBmaXJzdCBhcmd1bWVudCBvciBubyBhcmd1bWVudHMgYXQgYWxsXCIpO1xyXG5cdFx0XHRcclxuXHRcdFx0aWYgKGFyZ3VtZW50cy5sZW5ndGggPT0gMSlcclxuXHRcdFx0XHRyZXR1cm4gZGF0YVthcmcxXTtcclxuXHRcdFx0ZWxzZSBpZiAoYXJndW1lbnRzWzFdID09IG51bGwpXHJcblx0XHRcdFx0ZGVsZXRlIGRhdGFbYXJndW1lbnRzWzBdXTtcclxuXHRcdFx0ZWxzZVxyXG5cdFx0XHRcdGRhdGFbYXJndW1lbnRzWzBdXSA9IGFyZ3VtZW50c1sxXTtcclxuXHJcblx0XHRcdHJldHVybiB0aGlzO1xyXG5cdFx0fSkuYmluZCh0aGlzKTtcclxuXHJcblx0XHRyZXR1cm4gdGhpcy5kYXRhLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7XHJcblx0fTtcclxufSk7XHJcbmV4cG9ydCBkZWZhdWx0IHN1cHBvcnQ7IiwiaW1wb3J0IEV4dGVuZGVyIGZyb20gXCIuLi8uLi91dGlscy9FeHRlbmRlclwiO1xyXG5cclxuY29uc3QgRVZFTlRTUExJVEVSID0gL1xccyosXFxzKnxcXHMrLztcclxuY29uc3QgREVGQVVMVF9PUFRJT05TID0geyBjYXB0dXJlOiBmYWxzZSwgb25jZTogZmFsc2UsIHBhc3NpdmU6IGZhbHNlLCBzaWduYWw6IHVuZGVmaW5lZCB9O1xyXG5cclxuLyoqXHJcbiAqIEV2ZXJ5dGhpbmcgdGhpcyBleHRlbnNpb24ga2VlcHMgcGVyIGVsZW1lbnQuIEEgV2Vha01hcCBob2xkcyBpdCBvdXRzaWRlIG9mIHRoZVxyXG4gKiBlbGVtZW50LCBzbyBub3RoaW5nIGlzIGV4cG9zZWQgb24gdGhlIGRvbSBhbmQgaXQgaXMgcmVsZWFzZWQgd2l0aCB0aGUgZWxlbWVudC5cclxuICpcclxuICogV3JhcHBlcnMgYW5kIGhhbmRsZXMgYXJlIG1hcHBlZCBpbiBib3RoIGRpcmVjdGlvbnM6IGEgd3JhcHBlciBuZWVkcyB0byBmaW5kIGl0c1xyXG4gKiByZWdpc3RyYXRpb24gd2hpbGUgYW4gZXZlbnQgcnVucywgYW5kIHJlbW92ZU9uIG5lZWRzIHRvIGZpbmQgYWxsIHdyYXBwZXJzIG9mIGFcclxuICogaGFuZGxlLiBIYW5kbGVzIGFyZSBtYXBwZWQgdG8gYSBzZXQgb2Ygd3JhcHBlcnMsIG5vdCB0byBhIHNpbmdsZSBvbmUsIHNvIHRoZVxyXG4gKiBzYW1lIGhhbmRsZSBjYW4gYmUgcmVnaXN0ZXJlZCBhbnkgbnVtYmVyIG9mIHRpbWVzIHdpdGhvdXQgdGhlIHJlZ2lzdHJhdGlvbnNcclxuICogb3ZlcndyaXRpbmcgZWFjaCBvdGhlci5cclxuICpcclxuICogQHR5cGVkZWYge09iamVjdH0gRWxlbWVudERhdGFcclxuICogQHByb3BlcnR5IHtNYXA8c3RyaW5nLG51bWJlcj59IGV2ZW50VHJpZ2dlclRpbWVvdXRzIC0gcnVubmluZyB0cmlnZ2VyIHRpbWVvdXRzIGJ5IGV2ZW50IHR5cGVcclxuICogQHByb3BlcnR5IHtNYXA8RnVuY3Rpb24sUmVnaXN0cmF0aW9uPn0gd3JhcHBlckhhbmRsZU1hcCAtIHJlZ2lzdHJhdGlvbiBvZiBlYWNoIHdyYXBwZXJcclxuICogQHByb3BlcnR5IHtNYXA8RnVuY3Rpb24sU2V0PEZ1bmN0aW9uPj59IGhhbmRsZVdyYXBwZXJNYXAgLSBhbGwgd3JhcHBlcnMgb2YgYSBoYW5kbGVcclxuICovXHJcblxyXG4vKipcclxuICogT25lIGNhbGwgb2Ygb24oKS5cclxuICpcclxuICogQHR5cGVkZWYge09iamVjdH0gUmVnaXN0cmF0aW9uXHJcbiAqIEBwcm9wZXJ0eSB7RnVuY3Rpb259IGhhbmRsZSAtIHRoZSBmdW5jdGlvbiBnaXZlbiB0byBvbigpXHJcbiAqIEBwcm9wZXJ0eSB7U2V0PHN0cmluZz59IGV2ZW50cyAtIHRoZSBldmVudCB0eXBlcyBzdGlsbCByZWdpc3RlcmVkLCBsaXN0ZW5lcnMgZ2V0IHJlbW92ZWQgb25lIGJ5IG9uZVxyXG4gKiBAcHJvcGVydHkge09iamVjdH0gb3B0aW9ucyAtIHRoZSBvcHRpb25zIHRoZSBsaXN0ZW5lciB3YXMgYWRkZWQgd2l0aCwgbmVlZGVkIHRvIHJlbW92ZSBpdCBhZ2FpblxyXG4gKi9cclxuXHJcbmNvbnN0IEVMRU1FTlREQVRBID0gbmV3IFdlYWtNYXAoKTtcclxuXHJcbi8qKlxyXG4gKiBAcGFyYW0ge0V2ZW50VGFyZ2V0fSBlbGVtZW50XHJcbiAqIEByZXR1cm5zIHtFbGVtZW50RGF0YX0gdGhlIGRhdGEgb2YgdGhlIGVsZW1lbnQsIGNyZWF0ZWQgb24gZmlyc3QgYWNjZXNzXHJcbiAqL1xyXG5jb25zdCBnZXRFbGVtZW50RGF0YSA9IChlbGVtZW50KSA9PiB7XHJcblx0aWYgKCFFTEVNRU5UREFUQS5oYXMoZWxlbWVudCkpXHJcblx0XHRFTEVNRU5UREFUQS5zZXQoZWxlbWVudCwge1xyXG5cdFx0XHRldmVudFRyaWdnZXJUaW1lb3V0czogbmV3IE1hcCgpLFxyXG5cdFx0XHR3cmFwcGVySGFuZGxlTWFwOiBuZXcgTWFwKCksXHJcblx0XHRcdGhhbmRsZVdyYXBwZXJNYXA6IG5ldyBNYXAoKVxyXG5cdFx0fSk7XHJcblxyXG5cdHJldHVybiBFTEVNRU5UREFUQS5nZXQoZWxlbWVudCk7XHJcbn07XHJcblxyXG5jb25zdCBnZXRXcmFwcGVySGFuZGxlTWFwID0gKGVsZW1lbnQpID0+IHtcclxuXHRyZXR1cm4gZ2V0RWxlbWVudERhdGEoZWxlbWVudCkud3JhcHBlckhhbmRsZU1hcDtcclxufTtcclxuXHJcbmNvbnN0IGdldEhhbmRsZVdyYXBwZXJNYXAgPSAoZWxlbWVudCkgPT4ge1xyXG5cdHJldHVybiBnZXRFbGVtZW50RGF0YShlbGVtZW50KS5oYW5kbGVXcmFwcGVyTWFwO1xyXG59O1xyXG5cclxuY29uc3QgZ2V0VHJpZ2dlclRpbWVvdXRzID0gKGVsZW1lbnQpID0+IHtcclxuXHRyZXR1cm4gZ2V0RWxlbWVudERhdGEoZWxlbWVudCkuZXZlbnRUcmlnZ2VyVGltZW91dHM7XHJcbn07XHJcblxyXG4vKipcclxuICogUmVnaXN0ZXJzIGEgd3JhcHBlciBpbiBib3RoIGRpcmVjdGlvbnMuXHJcbiAqXHJcbiAqIEBwYXJhbSB7RXZlbnRUYXJnZXR9IGFuRWxlbWVudFxyXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBhSGFuZGxlIC0gdGhlIGZ1bmN0aW9uIGdpdmVuIHRvIG9uKClcclxuICogQHBhcmFtIHtGdW5jdGlvbn0gYVdyYXBwZXIgLSB0aGUgbGlzdGVuZXIgYWN0dWFsbHkgYWRkZWQgdG8gdGhlIGVsZW1lbnRcclxuICogQHBhcmFtIHtJdGVyYWJsZTxzdHJpbmc+fSB0aGVFdmVudHNcclxuICogQHBhcmFtIHtPYmplY3R9IHRoZU9wdGlvbnMgLSBrZXB0IHRvIHJlbW92ZSB0aGUgbGlzdGVuZXIgd2l0aCB0aGUgc2FtZSBvcHRpb25zIGxhdGVyXHJcbiAqIEB0aHJvd3Mge0Vycm9yfSB3aGVuIHRoZSB3cmFwcGVyIGlzIGFscmVhZHkgcmVnaXN0ZXJlZCwgd2hpY2ggY2FuIG5vdCBoYXBwZW4gYXMgbG9uZyBhcyBvbigpIGNyZWF0ZXMgYSBuZXcgb25lIHBlciBjYWxsXHJcbiAqL1xyXG5jb25zdCByZWdpc3RyYXRlSGFuZGxlV3JhcHBlciA9IChhbkVsZW1lbnQsIGFIYW5kbGUsIGFXcmFwcGVyLCB0aGVFdmVudHMsIHRoZU9wdGlvbnMpID0+IHtcclxuXHRjb25zdCB3cmFwcGVySGFuZGxlTWFwID0gZ2V0V3JhcHBlckhhbmRsZU1hcChhbkVsZW1lbnQpO1xyXG5cdGlmICghd3JhcHBlckhhbmRsZU1hcC5oYXMoYVdyYXBwZXIpKSB3cmFwcGVySGFuZGxlTWFwLnNldChhV3JhcHBlciwgeyBoYW5kbGU6IGFIYW5kbGUsIGV2ZW50czogbmV3IFNldCh0aGVFdmVudHMpLCBvcHRpb25zOiB0aGVPcHRpb25zIH0pO1xyXG5cdGVsc2UgdGhyb3cgbmV3IEVycm9yKFwiV3JhcHBlciBhbHJlYWR5IHJlZ2lzdGVyZWQgZm9yIHRoaXMgZWxlbWVudCFcIik7XHJcblxyXG5cdGNvbnN0IGhhbmRsZVdyYXBwZXJNYXAgPSBnZXRIYW5kbGVXcmFwcGVyTWFwKGFuRWxlbWVudCk7XHJcblx0bGV0IHdyYXBwZXJTZXQgPSBoYW5kbGVXcmFwcGVyTWFwLmdldChhSGFuZGxlKTtcclxuXHRpZiAoIXdyYXBwZXJTZXQpIHtcclxuXHRcdHdyYXBwZXJTZXQgPSBuZXcgU2V0KCk7XHJcblx0XHRoYW5kbGVXcmFwcGVyTWFwLnNldChhSGFuZGxlLCB3cmFwcGVyU2V0KTtcclxuXHR9XHRcclxuXHR3cmFwcGVyU2V0LmFkZChhV3JhcHBlcik7XHRcclxufTtcclxuXHJcbi8qKlxyXG4gKiBSZW1vdmVzIGEgd3JhcHBlciBmcm9tIHNvbWUgb3IgYWxsIG9mIGl0cyBldmVudHMuXHJcbiAqXHJcbiAqIFRoZSByZWdpc3RyYXRpb24gaXMgZHJvcHBlZCBmcm9tIGJvdGggbWFwcyBhcyBzb29uIGFzIG5vIGV2ZW50IGlzIGxlZnQsIHNvIGFcclxuICogd3JhcHBlciB0aGF0IHN0aWxsIGxpc3RlbnMgdG8gb3RoZXIgZXZlbnRzIHN0YXlzIGtub3duLlxyXG4gKlxyXG4gKiBAcGFyYW0ge0V2ZW50VGFyZ2V0fSBhRWxlbWVudFxyXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBhV3JhcHBlclxyXG4gKiBAcGFyYW0ge0l0ZXJhYmxlPHN0cmluZz59IFt0aGVFdmVudHNdIC0gdGhlIGV2ZW50cyB0byByZW1vdmUsIGFsbCBvZiB0aGVtIHdoZW4gb21pdHRlZFxyXG4gKi9cclxuY29uc3QgcmVtb3ZlV3JhcHBlciA9IChhRWxlbWVudCwgYVdyYXBwZXIsIHRoZUV2ZW50cykgPT4ge1xyXG5cdGNvbnN0IHdyYXBwZXJIYW5kbGVNYXAgPSBnZXRXcmFwcGVySGFuZGxlTWFwKGFFbGVtZW50KTtcclxuXHRpZighd3JhcHBlckhhbmRsZU1hcC5oYXMoYVdyYXBwZXIpKSB0aHJvdyBuZXcgRXJyb3IoXCJXcmFwcGVyIG5vdCByZWdpc3RlcmVkIGZvciB0aGlzIGVsZW1lbnQhXCIpO1xyXG5cdGNvbnN0IHsgZXZlbnRzLCBvcHRpb25zLCBoYW5kbGUgfSA9IHdyYXBwZXJIYW5kbGVNYXAuZ2V0KGFXcmFwcGVyKTtcclxuXHRjb25zdCByZW1vdmVkRXZlbnRzID0gdGhlRXZlbnRzIHx8IGV2ZW50cztcclxuXHRmb3IgKGxldCBldmVudCBvZiByZW1vdmVkRXZlbnRzKSB7XHJcblx0XHRpZiAoZXZlbnRzLmhhcyhldmVudCkpIHtcclxuXHRcdFx0ZXZlbnRzLmRlbGV0ZShldmVudCk7XHJcblx0XHRcdGFFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnQsIGFXcmFwcGVyLCBvcHRpb25zKTtcclxuXHRcdH1cclxuXHR9XHJcblx0Ly9DbGVhbnVwIHRoZSB3cmFwcGVySGFuZGxlTWFwIGFuZCBoYW5kbGVXcmFwcGVyTWFwIGlmIG5vIGV2ZW50cyBsZWZ0IGZvciB0aGlzIHdyYXBwZXJcclxuXHRpZiAoZXZlbnRzLnNpemUgPT09IDApe1xyXG5cdFx0d3JhcHBlckhhbmRsZU1hcC5kZWxldGUoYVdyYXBwZXIpO1xyXG5cdFx0Y29uc3QgaGFuZGxlV3JhcHBlck1hcCA9IGdldEhhbmRsZVdyYXBwZXJNYXAoYUVsZW1lbnQpO1xyXG5cdFx0Y29uc3Qgd3JhcHBlclNldCA9IGhhbmRsZVdyYXBwZXJNYXAuZ2V0KGhhbmRsZSk7XHJcblx0XHR3cmFwcGVyU2V0LmRlbGV0ZShhV3JhcHBlcik7XHJcblx0XHRpZiAod3JhcHBlclNldC5zaXplID09PSAwKVxyXG5cdFx0XHRoYW5kbGVXcmFwcGVyTWFwLmRlbGV0ZShoYW5kbGUpO1xyXG5cdH1cclxufTtcclxuXHJcbi8qKlxyXG4gKiBAcGFyYW0ge2Jvb2xlYW58T2JqZWN0fSBbb3B0aW9uc10gLSBhIGJvb2xlYW4gaXMgdGFrZW4gYXMgY2FwdHVyZSwgYW4gb2JqZWN0IGlzIG1lcmdlZCBpbnRvIHRoZSBkZWZhdWx0c1xyXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBhbHdheXMgYSBuZXcgb2JqZWN0LCBuZXZlciB0aGUgc2hhcmVkIGRlZmF1bHRzXHJcbiAqL1xyXG5jb25zdCB0b0V2ZW50T3B0aW9ucyA9IChvcHRpb25zKSA9PiB7XHJcblx0aWYgKG9wdGlvbnMgPT0gbnVsbCkgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIERFRkFVTFRfT1BUSU9OUyk7XHJcblx0ZWxzZSBpZiAodHlwZW9mIG9wdGlvbnMgPT09IFwiYm9vbGVhblwiKSByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgREVGQVVMVF9PUFRJT05TLCB7IGNhcHR1cmU6IG9wdGlvbnMgfSk7XHJcblx0ZWxzZSByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgREVGQVVMVF9PUFRJT05TLCBvcHRpb25zKTtcclxufTtcclxuXHJcbi8qKlxyXG4gKiBOb3JtYWxpemVzIGV2ZW50IHR5cGVzIHRvIGEgZmxhdCBsaXN0LlxyXG4gKlxyXG4gKiBUeXBlcyBhcmUgc2VwYXJhdGVkIGJ5IHdoaXRlc3BhY2VzLCBjb21tYXMgb3IgYm90aCwgaW4gYSBzdHJpbmcgYXMgd2VsbCBhc1xyXG4gKiB3aXRoaW4gdGhlIGVudHJpZXMgb2YgYW4gYXJyYXkgLSBzbyBbXCJjbGlja1wiLCBcImZvY3VzIGJsdXJcIl0gZ2l2ZXMgdGhyZWUgdHlwZXMuXHJcbiAqXHJcbiAqIEEgc3RyaW5nIGdldHMgdHJpbW1lZCBiZWZvcmUgaXQgaXMgc3BsaXQsIGJlY2F1c2UgdGhlIGVtcHR5IGVudHJpZXMgYSBsZWFkaW5nXHJcbiAqIG9yIHRyYWlsaW5nIHNlcGFyYXRvciBwcm9kdWNlcyBhcmUgYXJ0aWZhY3RzIG9mIHNwbGl0dGluZywgbm90IHNvbWV0aGluZyB0aGVcclxuICogY2FsbGVyIGFza2VkIGZvci4gQW4gZW1wdHkgZW50cnkgaW5zaWRlIGFuIGFycmF5IGlzIHRoZSBvcHBvc2l0ZSBjYXNlOiBpdCB3YXNcclxuICogd3JpdHRlbiBkb3duIGFuZCB0aGVyZWZvcmUgdGhyb3dzLlxyXG4gKlxyXG4gKiBAcGFyYW0ge3N0cmluZ3xJdGVyYWJsZTxzdHJpbmc+fSB0aGVFdmVudHNcclxuICogQHJldHVybnMge3N0cmluZ1tdfSB0aGUgZXZlbnQgdHlwZXMsIG5ldmVyIGVtcHR5XHJcbiAqIEB0aHJvd3Mge0Vycm9yfSB3aGVuIG5vIHR5cGUgaXMgbGVmdCBvciBhbiBlbnRyeSBpcyBub3QgYSBub24gZW1wdHkgc3RyaW5nXHJcbiAqL1xyXG5jb25zdCB0b0V2ZW50VHlwZXMgPSAodGhlRXZlbnRzKSA9PiB7XHJcblx0aWYodGhlRXZlbnRzID09IG51bGwpIHRocm93IG5ldyBFcnJvcihcIkV2ZW50IHR5cGVzIGFyZSByZXF1aXJlZCFcIik7XHRcclxuXHRcclxuXHRjb25zdCBldmVudHMgPSB0eXBlb2YgdGhlRXZlbnRzID09PSBcInN0cmluZ1wiID8gdGhlRXZlbnRzLnRyaW0oKS5zcGxpdChFVkVOVFNQTElURVIpIDogdGhlRXZlbnRzO1xyXG5cdGlmICh0eXBlb2YgZXZlbnRzW1N5bWJvbC5pdGVyYXRvcl0gIT09IFwiZnVuY3Rpb25cIikgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBldmVudCB0eXBlcyFcIik7XHJcblx0aWYoZXZlbnRzLmxlbmd0aCA9PT0gMCkgdGhyb3cgbmV3IEVycm9yKFwiRXZlbnQgdHlwZXMgYXJlIHJlcXVpcmVkIVwiKTtcclxuXHJcblx0Y29uc3QgcmVzdWx0ID0gW107XHJcblxyXG5cdGZvciAobGV0IGV2ZW50IG9mIGV2ZW50cykge1xyXG5cdFx0aWYgKHR5cGVvZiBldmVudCAhPT0gXCJzdHJpbmdcIikgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBldmVudCB0eXBlcyFcIik7XHJcblx0XHRldmVudCA9IGV2ZW50LnRyaW0oKTtcclxuXHRcdGlmIChldmVudC5sZW5ndGggPT09IDApIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgZXZlbnQgdHlwZXMhXCIpO1xyXG5cdFx0cmVzdWx0LnB1c2goLi4uZXZlbnQuc3BsaXQoRVZFTlRTUExJVEVSKSk7XHJcblx0fVxyXG5cdHJldHVybiByZXN1bHQ7XHJcbn07XHJcblxyXG5jb25zdCBzdXBwb3J0ID0gRXh0ZW5kZXIoXCJFdmVudFN1cHBvcnRcIiwgKFByb3RvdHlwZSkgPT4ge1xyXG5cdC8qKlxyXG5cdCAqIEFkZHMgYSBoYW5kbGUgdG8gb25lIG9yIG1vcmUgZXZlbnRzLlxyXG5cdCAqXHJcblx0ICogVGhlIGhhbmRsZSBpcyBub3QgYWRkZWQgYXMgbGlzdGVuZXIgaXRzZWxmLCBpdCBnZXRzIHdyYXBwZWQuIFRoYXQgd3JhcHBlclxyXG5cdCAqIGFwcGxpZXMgdGhlIHNlbGVjdG9yIGFuZCBoYW5kbGVzIHRoZSBvbmNlIG9wdGlvbiwgd2hpY2gga2VlcHMgcmVtb3ZlT24gYWJsZVxyXG5cdCAqIHRvIGZpbmQgZXZlcnkgcmVnaXN0cmF0aW9uIG9mIGEgaGFuZGxlLlxyXG5cdCAqXHJcblx0ICogV2l0aCBhIHNlbGVjdG9yIHRoZSBoYW5kbGUgaXMgb25seSBjYWxsZWQgd2hlbiB0aGUgdGFyZ2V0IG9mIHRoZSBldmVudFxyXG5cdCAqIG1hdGNoZXMgaXQuIFRvZ2V0aGVyIHdpdGggb25jZSB0aGlzIG5lZWRzIGNhcmU6IHRoZSBicm93c2VyIGNvbnN1bWVzIGEgb25jZVxyXG5cdCAqIGxpc3RlbmVyIG9uIHRoZSBmaXJzdCBldmVudCwgZXZlbiB3aGVuIHRoZSBzZWxlY3RvciBkaWQgbm90IG1hdGNoLCBzbyB0aGVcclxuXHQgKiB3cmFwcGVyIHJlZ2lzdGVycyBpdHNlbGYgYWdhaW4gaW4gdGhhdCBjYXNlIGFuZCB3YWl0cyBmb3IgYSBtYXRjaGluZyBldmVudC5cclxuXHQgKlxyXG5cdCAqIEBwYXJhbSB7c3RyaW5nfEl0ZXJhYmxlPHN0cmluZz59IHRoZUV2ZW50cyAtIGV2ZW50IHR5cGVzLCBzZXBhcmF0ZWQgYnkgd2hpdGVzcGFjZXMgb3IgY29tbWFzXHJcblx0ICogQHBhcmFtIHtzdHJpbmd9IFthU2VsZWN0b3JdIC0gb25seSBjYWxsIHRoZSBoYW5kbGUgd2hlbiB0aGUgdGFyZ2V0IG9mIHRoZSBldmVudCBtYXRjaGVzXHJcblx0ICogQHBhcmFtIHtGdW5jdGlvbn0gYUhhbmRsZSAtIGNhbGxlZCB3aXRoIHRoZSBldmVudFxyXG5cdCAqIEBwYXJhbSB7Ym9vbGVhbnxPYmplY3R9IFt0aGVPcHRpb25zXSAtIGEgYm9vbGVhbiBpcyB0YWtlbiBhcyBjYXB0dXJlLCBvdGhlcndpc2UgdGhlIG9wdGlvbnMgb2YgYWRkRXZlbnRMaXN0ZW5lclxyXG5cdCAqIEByZXR1cm5zIHtFdmVudFRhcmdldH0gdGhpc1xyXG5cdCAqIEB0aHJvd3Mge0Vycm9yfSBieSBsZXNzIHRoYW4gdHdvIGFyZ3VtZW50cyBvciBpbnZhbGlkIGV2ZW50IHR5cGVzXHJcblx0ICovXHJcblx0UHJvdG90eXBlLm9uID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0aWYgKGFyZ3VtZW50cy5sZW5ndGggPCAyKSB0aHJvdyBuZXcgRXJyb3IoXCJUb28gbGVzcyBhcmd1bWVudHMhXCIpO1xyXG5cclxuXHRcdGNvbnN0IGFyZ3MgPSBBcnJheS5mcm9tKGFyZ3VtZW50cyk7XHJcblx0XHRjb25zdCBldmVudHMgPSB0b0V2ZW50VHlwZXMoYXJncy5zaGlmdCgpKTtcclxuXHRcdGNvbnN0IGVsZW1lbnRTZWxlY3RvciA9IHR5cGVvZiBhcmdzWzBdID09PSBcInN0cmluZ1wiID8gYXJncy5zaGlmdCgpIDogbnVsbDtcclxuXHRcdGNvbnN0IGhhbmRsZSA9IGFyZ3Muc2hpZnQoKTtcclxuXHRcdGNvbnN0IG9wdGlvbiA9IHRvRXZlbnRPcHRpb25zKGFyZ3Muc2hpZnQoKSk7XHJcblx0XHRjb25zdCBlbGVtZW50ID0gdGhpcztcclxuXHRcdGNvbnN0IHdyYXBwZXIgPSBmdW5jdGlvbihldmVudCkge1xyXG5cdFx0XHRjb25zdCB7IHRhcmdldCwgdHlwZSB9ID0gZXZlbnQ7XHJcblx0XHRcdGlmIChlbGVtZW50U2VsZWN0b3IgJiYgdHlwZW9mIHRhcmdldC5pcyA9PT0gXCJmdW5jdGlvblwiICYmICF0YXJnZXQuaXMoZWxlbWVudFNlbGVjdG9yKSkge1xyXG5cdFx0XHRcdGlmIChvcHRpb24ub25jZSkgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKHR5cGUsIHdyYXBwZXIsIG9wdGlvbik7IC8vIHJlLXJlZ2lzdGVyIHRoZSB3cmFwcGVyIGZvciB0aGUgbmV4dCBldmVudFxyXG5cdFx0XHRcdHJldHVybjtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRpZiAob3B0aW9uLm9uY2UpIHJlbW92ZVdyYXBwZXIoZWxlbWVudCwgd3JhcHBlciwgW3R5cGVdKTtcclxuXHRcdFx0XHRjb25zdCByZXN1bHQgPSBoYW5kbGUuYXBwbHkobnVsbCwgYXJndW1lbnRzKTtcdFx0XHRcdFxyXG5cdFx0XHRcdHJldHVybiByZXN1bHQ7XHJcblx0XHRcdH1cclxuXHRcdH07XHJcblxyXG5cdFx0cmVnaXN0cmF0ZUhhbmRsZVdyYXBwZXIodGhpcywgaGFuZGxlLCB3cmFwcGVyLCBldmVudHMsIG9wdGlvbik7XHJcblxyXG5cdFx0Zm9yIChsZXQgZXZlbnQgb2YgZXZlbnRzKSB7XHJcblx0XHRcdHRoaXMuYWRkRXZlbnRMaXN0ZW5lcihldmVudCwgd3JhcHBlciwgb3B0aW9uKTtcclxuXHRcdH1cclxuXHJcblx0XHRyZXR1cm4gdGhpcztcclxuXHR9O1xyXG5cclxuXHQvKipcclxuXHQgKiBSZW1vdmVzIGEgaGFuZGxlIGZyb20gc29tZSBvciBhbGwgb2YgaXRzIGV2ZW50cy5cclxuXHQgKlxyXG5cdCAqIEEgaGFuZGxlIHJlZ2lzdGVyZWQgYnkgc2V2ZXJhbCBjYWxscyBvZiBvbigpIGlzIHJlbW92ZWQgZnJvbSBhbGwgb2YgdGhlbS5cclxuXHQgKlxyXG5cdCAqIEBwYXJhbSB7RnVuY3Rpb259IGFIYW5kbGUgLSB0aGUgZnVuY3Rpb24gZ2l2ZW4gdG8gb24oKVxyXG5cdCAqIEBwYXJhbSB7c3RyaW5nfEl0ZXJhYmxlPHN0cmluZz59IFt0aGVFdmVudHNdIC0gdGhlIGV2ZW50cyB0byByZW1vdmUsIGFsbCBvZiB0aGVtIHdoZW4gb21pdHRlZFxyXG5cdCAqIEByZXR1cm5zIHtFdmVudFRhcmdldH0gdGhpc1xyXG5cdCAqIEB0aHJvd3Mge0Vycm9yfSBieSBpbnZhbGlkIGV2ZW50IHR5cGVzXHJcblx0ICovXHJcblx0UHJvdG90eXBlLnJlbW92ZU9uID0gZnVuY3Rpb24gKGFIYW5kbGUsIHRoZUV2ZW50cykge1xyXG5cdFx0Y29uc3QgZXZlbnRzID0gdGhlRXZlbnRzID8gdG9FdmVudFR5cGVzKHRoZUV2ZW50cykgOiBudWxsO1xyXG5cdFx0Y29uc3QgaGFuZGxlV3JhcHBlck1hcCA9IGdldEhhbmRsZVdyYXBwZXJNYXAodGhpcyk7XHJcblx0XHRjb25zdCB3cmFwcGVyU2V0ID0gaGFuZGxlV3JhcHBlck1hcC5nZXQoYUhhbmRsZSk7XHRcclxuXHRcdGlmICh3cmFwcGVyU2V0KSB7XHJcblx0XHRcdGZvciAobGV0IHdyYXBwZXIgb2Ygd3JhcHBlclNldClcclxuXHRcdFx0XHRyZW1vdmVXcmFwcGVyKHRoaXMsIHdyYXBwZXIsIGV2ZW50cyk7XHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIHRoaXM7XHJcblx0fTtcclxuXHJcblx0LyoqXHJcblx0ICogRGlzcGF0Y2hlcyBhIGJ1YmJsaW5nLCBjYW5jZWxhYmxlIGFuZCBjb21wb3NlZCBDdXN0b21FdmVudC5cclxuXHQgKlxyXG5cdCAqIEEgbGVhZGluZyBudW1iZXIgZGVsYXlzIHRoZSBldmVudCBieSB0aGF0IG1hbnkgbWlsbGlzZWNvbmRzIGFuZCByZXBsYWNlcyBhXHJcblx0ICogZGVsYXllZCBldmVudCBvZiB0aGUgc2FtZSB0eXBlIHRoYXQgaXMgc3RpbGwgcGVuZGluZywgc28gYSByZXBlYXRlZGx5XHJcblx0ICogdHJpZ2dlcmVkIGV2ZW50IGlzIGRpc3BhdGNoZWQgb25jZSBhZnRlciB0aGluZ3MgY2FtZSB0byByZXN0LlxyXG5cdCAqXHJcblx0ICogT25lIGRhdGEgYXJndW1lbnQgYmVjb21lcyBldmVudC5kZXRhaWwgYXMgaXQgaXMsIHNldmVyYWwgYmVjb21lIGFuIGFycmF5IG9mXHJcblx0ICogdGhlbS4gQSBsZWFkaW5nIEV2ZW50IGlzIHRha2VuIGFzIHRoZSBldmVudCB0aGlzIG9uZSBpcyBkZWxlZ2F0ZWQgZnJvbSBhbmRcclxuXHQgKiBpcyBhdmFpbGFibGUgYXMgZXZlbnQuZGVsZWdhdGVkRXZlbnQuXHJcblx0ICpcclxuXHQgKiBAcGFyYW0ge251bWJlcn0gW2FUaW1lb3V0XSAtIG1pbGxpc2Vjb25kcyB0byBkZWxheSB0aGUgZXZlbnRcclxuXHQgKiBAcGFyYW0ge3N0cmluZ30gYVR5cGUgLSB0aGUgZXZlbnQgdHlwZVxyXG5cdCAqIEBwYXJhbSB7RXZlbnR9IFthRGVsZWdhdGVkRXZlbnRdIC0gdGhlIGV2ZW50IHRoaXMgb25lIGlzIHRyaWdnZXJlZCBmb3JcclxuXHQgKiBAcGFyYW0gey4uLip9IFt0aGVEYXRhXSAtIGJlY29tZXMgZXZlbnQuZGV0YWlsXHJcblx0ICogQHJldHVybnMge0V2ZW50VGFyZ2V0fSB0aGlzXHJcblx0ICovXHJcblx0UHJvdG90eXBlLnRyaWdnZXIgPSBmdW5jdGlvbiAoKSB7XHJcblx0XHRjb25zdCBhcmdzID0gQXJyYXkuZnJvbShhcmd1bWVudHMpO1xyXG5cdFx0Y29uc3QgdGltZW91dCA9IHR5cGVvZiBhcmdzWzBdID09PSBcIm51bWJlclwiID8gYXJncy5zaGlmdCgpIDogLTE7XHJcblx0XHRpZiAodGltZW91dCA+PSAwKSB7XHJcblx0XHRcdGNvbnN0IHR5cGUgPSBhcmdzWzBdO1xyXG5cdFx0XHRjb25zdCB0aW1lb3V0cyA9IGdldFRyaWdnZXJUaW1lb3V0cyh0aGlzKTtcclxuXHRcdFx0Y29uc3QgdGltZW91dGlkID0gdGltZW91dHMuZ2V0KHR5cGUpO1xyXG5cdFx0XHRpZiAodGltZW91dGlkKSBjbGVhclRpbWVvdXQodGltZW91dGlkKTtcclxuXHJcblx0XHRcdHRpbWVvdXRzLnNldCh0eXBlLCBzZXRUaW1lb3V0KCgpID0+IHtcclxuXHRcdFx0XHR0aW1lb3V0cy5kZWxldGUodHlwZSk7XHJcblx0XHRcdFx0dGhpcy50cmlnZ2VyLmFwcGx5KHRoaXMsIGFyZ3MpO1xyXG5cdFx0XHR9LCB0aW1lb3V0KSk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRjb25zdCB0eXBlID0gYXJncy5zaGlmdCgpO1xyXG5cdFx0XHRjb25zdCBkZWxlZ2F0ZSA9IGFyZ3NbMF0gaW5zdGFuY2VvZiBFdmVudCA/IGFyZ3Muc2hpZnQoKSA6IG51bGw7XHJcblx0XHRcdGNvbnN0IGRhdGEgPSBhcmdzLmxlbmd0aCA+PSAxID8gKGFyZ3MubGVuZ3RoID09IDEgPyBhcmdzLnNoaWZ0KCkgOiBhcmdzKSA6IGRlbGVnYXRlO1xyXG5cdFx0XHRjb25zdCBldmVudCA9IG5ldyBDdXN0b21FdmVudCh0eXBlLCB7IGJ1YmJsZXM6IHRydWUsIGNhbmNlbGFibGU6IHRydWUsIGNvbXBvc2VkOiB0cnVlLCBkZXRhaWw6IGRhdGEgfSk7XHJcblxyXG5cdFx0XHRpZiAoZGVsZWdhdGUpIGV2ZW50LmRlbGVnYXRlZEV2ZW50ID0gZGVsZWdhdGU7XHJcblx0XHRcdHRoaXMuZGlzcGF0Y2hFdmVudChldmVudCk7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gdGhpcztcclxuXHR9O1xyXG59KTtcclxuZXhwb3J0IGRlZmF1bHQgc3VwcG9ydDtcclxuIiwiaW1wb3J0IEV4dGVuZGVyIGZyb20gXCIuLi8uLi91dGlscy9FeHRlbmRlclwiO1xyXG5cclxuY29uc3QgQ0xBU1NTUExJVEVSID0gL1xccysvO1xyXG5cclxuLyoqXHJcbiAqIE5vcm1hbGl6ZXMgY2xhc3MgbmFtZXMgdG8gYSBmbGF0IGxpc3QuXHJcbiAqXHJcbiAqIE5hbWVzIGFyZSBzZXBhcmF0ZWQgYnkgd2hpdGVzcGFjZXMsIGluIGEgc3RyaW5nIGFzIHdlbGwgYXMgd2l0aGluIHRoZSBlbnRyaWVzXHJcbiAqIG9mIGFuIGFycmF5IC0gc28gW1wiYVwiLCBcImIgY1wiXSBnaXZlcyB0aHJlZSBuYW1lcy5cclxuICpcclxuICogQSBzdHJpbmcgZ2V0cyB0cmltbWVkIGJlZm9yZSBpdCBpcyBzcGxpdCwgYmVjYXVzZSB0aGUgZW1wdHkgZW50cmllcyBhIGxlYWRpbmdcclxuICogb3IgdHJhaWxpbmcgd2hpdGVzcGFjZSBwcm9kdWNlcyBhcmUgYXJ0aWZhY3RzIG9mIHNwbGl0dGluZy4gQW4gZW1wdHkgZW50cnlcclxuICogd3JpdHRlbiBkb3duIGJ5IHRoZSBjYWxsZXIgdGhyb3dzIGluc3RlYWQsIGFzIGRvZXMgYW55dGhpbmcgdGhhdCBpcyBub3QgYVxyXG4gKiBzdHJpbmcgLSBjbGFzc0xpc3Qgd291bGQgb25seSByZXBvcnQgdGhvc2UgYXMgYW4gdW51c2FibGUgdG9rZW4sIG9yIHNpbGVudGx5XHJcbiAqIHRha2UgYSBib29sZWFuIGFzIGEgY2xhc3MgbmFtZWQgXCJ0cnVlXCIuXHJcbiAqXHJcbiAqIEBwYXJhbSB7c3RyaW5nfHN0cmluZ1tdfSB0aGVDbGFzc2VzXHJcbiAqIEByZXR1cm5zIHtJdGVyYWJsZTxzdHJpbmc+fSB0aGUgY2xhc3MgbmFtZXMsIG5ldmVyIGVtcHR5XHJcbiAqIEB0aHJvd3Mge0Vycm9yfSB3aGVuIG5vIG5hbWUgaXMgbGVmdCBvciBhbiBlbnRyeSBpcyBub3QgYSBub24gZW1wdHkgc3RyaW5nXHJcbiAqL1xyXG5jb25zdCB0b0NsYXNzTmFtZXMgPSAodGhlQ2xhc3NlcykgPT4ge1xyXG5cdGlmICh0aGVDbGFzc2VzID09IG51bGwpIHRocm93IG5ldyBFcnJvcihcIkNsYXNzIG5hbWVzIGFyZSByZXF1aXJlZCFcIik7XHJcblxyXG5cdGNvbnN0IGNsYXNzZXMgPSB0eXBlb2YgdGhlQ2xhc3NlcyA9PT0gXCJzdHJpbmdcIiA/IHRoZUNsYXNzZXMudHJpbSgpLnNwbGl0KENMQVNTU1BMSVRFUikgOiB0aGVDbGFzc2VzO1xyXG5cdGlmICh0eXBlb2YgY2xhc3Nlc1tTeW1ib2wuaXRlcmF0b3JdICE9PSBcImZ1bmN0aW9uXCIpIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgY2xhc3MgbmFtZXMhXCIpO1xyXG5cdGlmIChjbGFzc2VzLmxlbmd0aCA9PT0gMCkgdGhyb3cgbmV3IEVycm9yKFwiQ2xhc3MgbmFtZXMgYXJlIHJlcXVpcmVkIVwiKTtcclxuXHJcblx0Y29uc3QgcmVzdWx0ID0gW107XHJcblx0Zm9yIChsZXQgY2xhenogb2YgY2xhc3Nlcykge1xyXG5cdFx0aWYgKHR5cGVvZiBjbGF6eiAhPT0gXCJzdHJpbmdcIikgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBjbGFzcyBuYW1lcyFcIik7XHJcblx0XHRjbGF6eiA9IGNsYXp6LnRyaW0oKTtcclxuXHRcdGlmIChjbGF6ei5sZW5ndGggPT09IDApIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgY2xhc3MgbmFtZXMhXCIpO1xyXG5cdFx0cmVzdWx0LnB1c2goLi4uY2xhenouc3BsaXQoQ0xBU1NTUExJVEVSKSk7XHJcblx0fVxyXG5cdFxyXG5cdHJldHVybiByZXN1bHQ7XHJcbn07XHJcblxyXG4vKipcclxuICogQnVpbGRzIGEgY2xhc3MgZnVuY3Rpb24sIGFzIGFkZCwgcmVtb3ZlIGFuZCB0b2dnbGUgb25seSBkaWZmZXIgYnkgdGhlIG1ldGhvZFxyXG4gKiB0aGV5IGNhbGwgb24gdGhlIGNsYXNzTGlzdC5cclxuICpcclxuICogQHBhcmFtIHtzdHJpbmd9IGFOYW1lIC0gdGhlIG5hbWUgb2YgdGhlIGNsYXNzTGlzdCBtZXRob2RcclxuICogQHJldHVybnMge2Z1bmN0aW9uKC4uLihzdHJpbmd8c3RyaW5nW10pKTpFbGVtZW50fSBhIGZ1bmN0aW9uIHRha2luZyBhbnkgbWl4IG9mIG5hbWVzLCBsaXN0cyBvZiBuYW1lcyBhbmQgYXJyYXlzIG9mIGJvdGhcclxuICovXHJcbmNvbnN0IGNsYXNzTGlzdEZ1bmN0aW9uID0gKGFOYW1lKSA9PlxyXG5cdGZ1bmN0aW9uICgpIHtcclxuXHRcdGNvbnN0IGNsYXNzZXMgPSB0b0NsYXNzTmFtZXMoQXJyYXkuZnJvbShhcmd1bWVudHMpLmZsYXQoKSk7XHJcblx0XHRjbGFzc2VzLmZvckVhY2goKGNsYXp6KSA9PiB0aGlzLmNsYXNzTGlzdFthTmFtZV0oY2xhenopKTtcclxuXHJcblx0XHRyZXR1cm4gdGhpcztcclxuXHR9O1xyXG5cclxuY29uc3Qgc3VwcG9ydCA9IEV4dGVuZGVyKFwiSHRtbENsYXNzU3VwcG9ydFwiLCAoUHJvdG90eXBlKSA9PiB7XHJcblx0LyoqXHJcblx0ICogQWRkcyBjbGFzcyBuYW1lcyB0byB0aGlzIGVsZW1lbnQuXHJcblx0ICpcclxuXHQgKiBAcGFyYW0gey4uLihzdHJpbmd8c3RyaW5nW10pfSB0aGVDbGFzc2VzIC0gbmFtZXMsIHdoaXRlc3BhY2Ugc2VwYXJhdGVkIGxpc3RzIG9mIG5hbWVzLCBvciBhcnJheXMgb2YgYm90aFxyXG5cdCAqIEByZXR1cm5zIHtFbGVtZW50fSB0aGlzXHJcblx0ICogQHRocm93cyB7RXJyb3J9IGJ5IGludmFsaWQgY2xhc3MgbmFtZXNcclxuXHQgKi9cclxuXHRQcm90b3R5cGUuYWRkQ2xhc3MgPSBjbGFzc0xpc3RGdW5jdGlvbihcImFkZFwiKTtcclxuXHJcblx0LyoqXHJcblx0ICogUmVtb3ZlcyBjbGFzcyBuYW1lcyBmcm9tIHRoaXMgZWxlbWVudC4gTmFtZXMgbm90IHByZXNlbnQgYXJlIGlnbm9yZWQuXHJcblx0ICpcclxuXHQgKiBAcGFyYW0gey4uLihzdHJpbmd8c3RyaW5nW10pfSB0aGVDbGFzc2VzIC0gbmFtZXMsIHdoaXRlc3BhY2Ugc2VwYXJhdGVkIGxpc3RzIG9mIG5hbWVzLCBvciBhcnJheXMgb2YgYm90aFxyXG5cdCAqIEByZXR1cm5zIHtFbGVtZW50fSB0aGlzXHJcblx0ICogQHRocm93cyB7RXJyb3J9IGJ5IGludmFsaWQgY2xhc3MgbmFtZXNcclxuXHQgKi9cclxuXHRQcm90b3R5cGUucmVtb3ZlQ2xhc3MgPSBjbGFzc0xpc3RGdW5jdGlvbihcInJlbW92ZVwiKTtcclxuXHJcblx0LyoqXHJcblx0ICogVG9nZ2xlcyBjbGFzcyBuYW1lcyBvZiB0aGlzIGVsZW1lbnQsIGVhY2ggb25lIG9uIGl0cyBvd24uXHJcblx0ICpcclxuXHQgKiBUaGUgZm9yY2UgcGFyYW1ldGVyIG9mIGNsYXNzTGlzdC50b2dnbGUgaXMgbm90IHN1cHBvcnRlZCAtIGEgYm9vbGVhbiBpcyBub3RcclxuXHQgKiBhIGNsYXNzIG5hbWUgYW5kIHRoZXJlZm9yZSB0aHJvd3MuXHJcblx0ICpcclxuXHQgKiBAcGFyYW0gey4uLihzdHJpbmd8c3RyaW5nW10pfSB0aGVDbGFzc2VzIC0gbmFtZXMsIHdoaXRlc3BhY2Ugc2VwYXJhdGVkIGxpc3RzIG9mIG5hbWVzLCBvciBhcnJheXMgb2YgYm90aFxyXG5cdCAqIEByZXR1cm5zIHtFbGVtZW50fSB0aGlzXHJcblx0ICogQHRocm93cyB7RXJyb3J9IGJ5IGludmFsaWQgY2xhc3MgbmFtZXNcclxuXHQgKi9cclxuXHRQcm90b3R5cGUudG9nZ2xlQ2xhc3MgPSBjbGFzc0xpc3RGdW5jdGlvbihcInRvZ2dsZVwiKTtcclxufSk7XHJcbmV4cG9ydCBkZWZhdWx0IHN1cHBvcnQ7IiwiaW1wb3J0IEV4dGVuZGVyIGZyb20gXCIuLi8uLi91dGlscy9FeHRlbmRlclwiO1xyXG5cclxuLyoqXHJcbiAqIEJ1aWxkcyBhIGxpc3QgZnVuY3Rpb24gYnkgZGVsZWdhdGluZyB0byB0aGUgYXJyYXkgZnVuY3Rpb24gb2YgdGhlIHNhbWUgbmFtZS5cclxuICpcclxuICogVGhlIGxpc3QgaXMgY29waWVkIGludG8gYW4gYXJyYXkgZmlyc3QuIFRoYXQgY29weSBpcyB3aGF0IG1ha2VzIHRoZXNlIGZ1bmN0aW9uc1xyXG4gKiBzYWZlIG9uIGEgbGl2ZSBIVE1MQ29sbGVjdGlvbjogbm9kZXMgbWF5IGJlIG1vdmVkIG9yIHJlbW92ZWQgd2hpbGUgaXRlcmF0aW5nLFxyXG4gKiB3aXRob3V0IHRoZSBpdGVyYXRpb24gc2tpcHBpbmcgdGhlIGVudHJpZXMgdGhhdCBzaGlmdCBpbnRvIHRoZWlyIHBsYWNlLlxyXG4gKlxyXG4gKiBAcGFyYW0ge3N0cmluZ30gYU5hbWUgLSB0aGUgbmFtZSBvZiB0aGUgYXJyYXkgZnVuY3Rpb25cclxuICogQHJldHVybnMge0Z1bmN0aW9ufSBhIGZ1bmN0aW9uIGJlaGF2aW5nIGxpa2UgdGhlIGFycmF5IGZ1bmN0aW9uIG9mIHRoYXQgbmFtZVxyXG4gKi9cclxuY29uc3QgYXJyYXlGdW5jdGlvbiA9IChhTmFtZSkgPT5cclxuXHRmdW5jdGlvbiAoKSB7XHJcblx0XHRyZXR1cm4gQXJyYXkucHJvdG90eXBlW2FOYW1lXS5hcHBseShBcnJheS5mcm9tKHRoaXMpLCBhcmd1bWVudHMpO1xyXG5cdH07XHJcblxyXG5jb25zdCBzdXBwb3J0ID0gRXh0ZW5kZXIoXCJMaXN0U3VwcG9ydFwiLCAoUHJvdG90eXBlKSA9PiB7XHJcblx0LyoqXHJcblx0ICogQHBhcmFtIHsqfSBhTm9kZSAtIHRoZSBub2RlIHRvIGxvb2sgZm9yXHJcblx0ICogQHBhcmFtIHtudW1iZXJ9IFthU3RhcnRdIC0gdGhlIGluZGV4IHRvIHN0YXJ0IGF0XHJcblx0ICogQHJldHVybnMge251bWJlcn0gdGhlIGluZGV4IG9mIHRoZSBub2RlLCBvciAtMVxyXG5cdCAqL1xyXG5cdFByb3RvdHlwZS5pbmRleE9mID0gYXJyYXlGdW5jdGlvbihcImluZGV4T2ZcIik7XHJcblxyXG5cdC8qKlxyXG5cdCAqIEBwYXJhbSB7Kn0gYU5vZGUgLSB0aGUgbm9kZSB0byBsb29rIGZvclxyXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSBbYVN0YXJ0XSAtIHRoZSBpbmRleCB0byBzdGFydCBhdFxyXG5cdCAqIEByZXR1cm5zIHtib29sZWFufSB3aGV0aGVyIHRoZSBsaXN0IGNvbnRhaW5zIHRoZSBub2RlXHJcblx0ICovXHJcblx0UHJvdG90eXBlLmluY2x1ZGVzID0gYXJyYXlGdW5jdGlvbihcImluY2x1ZGVzXCIpO1xyXG5cclxuXHQvKipcclxuXHQgKiBDYWxscyB0aGUgZnVuY3Rpb24gZm9yIGVhY2ggbm9kZS5cclxuXHQgKlxyXG5cdCAqIEBwYXJhbSB7ZnVuY3Rpb24oTm9kZSxudW1iZXIsTm9kZVtdKTp2b2lkfSBhRnVuY3Rpb24gLSBjYWxsZWQgd2l0aCBub2RlLCBpbmRleCBhbmQgdGhlIGNvcGllZCBsaXN0XHJcblx0ICovXHJcblx0UHJvdG90eXBlLmZvckVhY2ggPSBhcnJheUZ1bmN0aW9uKFwiZm9yRWFjaFwiKTtcclxuXHJcblx0LyoqXHJcblx0ICogQHBhcmFtIHtmdW5jdGlvbihOb2RlLG51bWJlcixOb2RlW10pOip9IGFGdW5jdGlvblxyXG5cdCAqIEByZXR1cm5zIHtBcnJheX0gdGhlIHJlc3VsdHMsIGFuIGFycmF5IGFzIHRoZSByZXN1bHRzIGFyZSBub3Qgbm9kZXMgYW55bW9yZVxyXG5cdCAqL1xyXG5cdFByb3RvdHlwZS5tYXAgPSBhcnJheUZ1bmN0aW9uKFwibWFwXCIpO1xyXG5cclxuXHQvKipcclxuXHQgKiBAcGFyYW0ge2Z1bmN0aW9uKE5vZGUsbnVtYmVyLE5vZGVbXSk6Ym9vbGVhbn0gYUZ1bmN0aW9uXHJcblx0ICogQHJldHVybnMge2Jvb2xlYW59IHdoZXRoZXIgdGhlIGZ1bmN0aW9uIG1hdGNoZXMgYXQgbGVhc3Qgb25lIG5vZGVcclxuXHQgKi9cclxuXHRQcm90b3R5cGUuc29tZSA9IGFycmF5RnVuY3Rpb24oXCJzb21lXCIpO1xyXG5cclxuXHQvKipcclxuXHQgKiBAcGFyYW0ge2Z1bmN0aW9uKE5vZGUsbnVtYmVyLE5vZGVbXSk6Ym9vbGVhbn0gYUZ1bmN0aW9uXHJcblx0ICogQHJldHVybnMge2Jvb2xlYW59IHdoZXRoZXIgdGhlIGZ1bmN0aW9uIG1hdGNoZXMgZXZlcnkgbm9kZVxyXG5cdCAqL1xyXG5cdFByb3RvdHlwZS5ldmVyeSA9IGFycmF5RnVuY3Rpb24oXCJldmVyeVwiKTtcclxuXHJcblx0LyoqXHJcblx0ICogQHBhcmFtIHtmdW5jdGlvbigqLE5vZGUsbnVtYmVyLE5vZGVbXSk6Kn0gYUZ1bmN0aW9uXHJcblx0ICogQHBhcmFtIHsqfSBbYUluaXRpYWxWYWx1ZV1cclxuXHQgKiBAcmV0dXJucyB7Kn0gdGhlIGFjY3VtdWxhdGVkIHJlc3VsdFxyXG5cdCAqL1xyXG5cdFByb3RvdHlwZS5yZWR1Y2UgPSBhcnJheUZ1bmN0aW9uKFwicmVkdWNlXCIpO1xyXG5cclxuXHQvKipcclxuXHQgKiBGaWx0ZXJzIHRoZSBsaXN0LlxyXG5cdCAqXHJcblx0ICogVW5saWtlIG1hcCB0aGlzIGtlZXBzIHRoZSB0eXBlIG9mIHRoZSBsaXN0IC0gYSBOb2RlTGlzdCByZXR1cm5zIGEgTm9kZUxpc3QsIGFcclxuXHQgKiBIVE1MQ29sbGVjdGlvbiByZXR1cm5zIGEgSFRNTENvbGxlY3Rpb24gLSBzbyBhIGZpbHRlcmVkIGxpc3QgY2FuIGJlIHVzZWQgbGlrZVxyXG5cdCAqIGFueSBvdGhlciBvbmUuIFRoZSByZXN1bHQgaXMgYSBuZXcgbGlzdCwgaXQgaXMgbm90IGxpdmUgYW55bW9yZS5cclxuXHQgKlxyXG5cdCAqIEBwYXJhbSB7ZnVuY3Rpb24oTm9kZSxudW1iZXIsTm9kZVtdKTpib29sZWFufSBhRnVuY3Rpb25cclxuXHQgKiBAcmV0dXJucyB7Tm9kZUxpc3R8SFRNTENvbGxlY3Rpb259IHRoZSBtYXRjaGluZyBub2Rlc1xyXG5cdCAqL1xyXG5cdFByb3RvdHlwZS5maWx0ZXIgPSBmdW5jdGlvbiAoKSB7XHJcblx0XHRjb25zdCByZXN1bHQgPSBBcnJheS5wcm90b3R5cGUuZmlsdGVyLmFwcGx5KEFycmF5LmZyb20odGhpcyksIGFyZ3VtZW50cyk7XHJcblxyXG5cdFx0cmV0dXJuIHRoaXMuY29uc3RydWN0b3IuZnJvbShyZXN1bHQpO1xyXG5cdH07XHJcblxyXG5cdC8qKlxyXG5cdCAqIEByZXR1cm5zIHtOb2RlfHVuZGVmaW5lZH0gdGhlIGZpcnN0IG5vZGUsIG9yIHVuZGVmaW5lZCB3aGVuIHRoZSBsaXN0IGlzIGVtcHR5XHJcblx0ICovXHJcblx0UHJvdG90eXBlLmZpcnN0ID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0aWYgKHRoaXMubGVuZ3RoID4gMCkgcmV0dXJuIHRoaXNbMF07XHJcblx0fTtcclxuXHJcblx0LyoqXHJcblx0ICogQHJldHVybnMge05vZGV8dW5kZWZpbmVkfSB0aGUgbGFzdCBub2RlLCBvciB1bmRlZmluZWQgd2hlbiB0aGUgbGlzdCBpcyBlbXB0eVxyXG5cdCAqL1xyXG5cdFByb3RvdHlwZS5sYXN0ID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0aWYgKHRoaXMubGVuZ3RoID4gMCkgcmV0dXJuIHRoaXNbdGhpcy5sZW5ndGggLSAxXTtcclxuXHR9O1xyXG59KTtcclxuZXhwb3J0IGRlZmF1bHQgc3VwcG9ydDsiLCJpbXBvcnQgZXh0ZW5kUHJvdG90eXBlIGZyb20gXCIuLi8uLi91dGlscy9FeHRlbmRQcm90b3R5cGVcIjtcbmltcG9ydCBEZWxlZ2F0ZXJCdWlsZGVyIGZyb20gXCIuLi8uLi91dGlscy9EZWxlZ2F0ZXJCdWlsZGVyXCI7XG5pbXBvcnQgTGlzdFN1cHBvcnQgZnJvbSBcIi4vTGlzdFN1cHBvcnRcIjtcblxuLyoqXG4gKiBTZXRzIHVwIGEgZG9tIGxpc3QgdHlwZSAtIE5vZGVMaXN0IG9yIEhUTUxDb2xsZWN0aW9uIC0gdGhlIHNhbWUgd2F5LlxuICpcbiAqIFRoZSB0d28gb25seSBkaWZmZXIgYnkgdGhlaXIgb3duIHR5cGUgYW5kIHRoZSBlbGVtZW50IHR5cGUgdGhleSBob2xkLCBzbyB0aGlzXG4gKiBidWlsZHMgYm90aCBmcm9tIHRob3NlIHR3byBwYXJhbWV0ZXJzOiBpdCBhcHBsaWVzIExpc3RTdXBwb3J0LCBhZGRzIGFwcGx5VG8sXG4gKiB2YWwgYW5kIHRoZSBzdGF0aWMgZnJvbSwgYW5kIHdpcmVzIHRoZSBkZWxlZ2F0aW9uIHRoYXQgbGV0cyBhIGxpc3QgZm9yd2FyZFxuICogZXZlcnkgbWV0aG9kIG9mIGl0cyBlbGVtZW50cy5cbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBMaXN0VHlwZSAtIHRoZSBsaXN0IHR5cGUsIE5vZGVMaXN0IG9yIEhUTUxDb2xsZWN0aW9uXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBFbGVtZW50VHlwZSAtIHRoZSB0eXBlIG9mIHRoZSBpdGVtcywgTm9kZSBvciBIVE1MRWxlbWVudFxuICovXG5jb25zdCBidWlsZExpc3RUeXBlID0gKExpc3RUeXBlLCBFbGVtZW50VHlwZSkgPT4ge1xuXHRleHRlbmRQcm90b3R5cGUoTGlzdFR5cGUsIExpc3RTdXBwb3J0KTtcblxuXHQvKipcblx0ICogQXBwbGllcyBhIGZ1bmN0aW9uIG9yIGEgbWV0aG9kIHRvIGVhY2ggaXRlbSBhbmQgY29sbGVjdHMgdGhlIHJlc3VsdHMuXG5cdCAqXG5cdCAqIEEgZnVuY3Rpb24gaXMgY2FsbGVkIHdpdGggdGhlIGl0ZW0gZm9sbG93ZWQgYnkgdGhlIGV4dHJhIGFyZ3VtZW50cy4gQSBzdHJpbmdcblx0ICogaXMgdGFrZW4gYXMgdGhlIG5hbWUgb2YgYSBtZXRob2QgdG8gY2FsbCBvbiBlYWNoIGl0ZW0gd2l0aCB0aG9zZSBhcmd1bWVudHMuXG5cdCAqIE51bGwgcmVzdWx0cyBhcmUgc2tpcHBlZC5cblx0ICpcblx0ICogQHBhcmFtIHtGdW5jdGlvbnxzdHJpbmd9IGNhbGxpbmcgLSBhIGZ1bmN0aW9uIHRvIGNhbGwsIG9yIHRoZSBuYW1lIG9mIGEgbWV0aG9kXG5cdCAqIEBwYXJhbSB7Li4uKn0gdGhlQXJndW1lbnRzIC0gcGFzc2VkIHRvIHRoZSBmdW5jdGlvbiBvciBtZXRob2Rcblx0ICogQHJldHVybnMge0FycmF5fSB0aGUgY29sbGVjdGVkIHJlc3VsdHNcblx0ICovXG5cdExpc3RUeXBlLnByb3RvdHlwZS5hcHBseVRvID0gZnVuY3Rpb24gKCkge1xuXHRcdGNvbnN0IGFyZ3MgPSBBcnJheS5mcm9tKGFyZ3VtZW50cyk7XG5cdFx0Y29uc3QgY2FsbGluZyA9IGFyZ3Muc2hpZnQoKTtcblx0XHRjb25zdCBpc0Z1bmN0aW9uID0gdHlwZW9mIGNhbGxpbmcgPT09IFwiZnVuY3Rpb25cIjtcblx0XHRjb25zdCByZXN1bHRzID0gW107XG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRjb25zdCBub2RlID0gdGhpc1tpXTtcblx0XHRcdGxldCByZXN1bHQ7XG5cdFx0XHRpZiAoaXNGdW5jdGlvbikgcmVzdWx0ID0gY2FsbGluZy5hcHBseShudWxsLCBbbm9kZV0uY29uY2F0KGFyZ3MpKTtcblx0XHRcdGVsc2UgaWYgKHR5cGVvZiBub2RlW2NhbGxpbmddID09PSBcImZ1bmN0aW9uXCIpIHJlc3VsdCA9IG5vZGVbY2FsbGluZ10uYXBwbHkobm9kZSwgYXJncyk7XG5cblx0XHRcdGlmIChyZXN1bHQgIT0gbnVsbCkgcmVzdWx0cy5wdXNoKHJlc3VsdCk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHJlc3VsdHM7XG5cdH07XG5cblx0LyoqXG5cdCAqIFJlYWRzIG9yIHdyaXRlcyB0aGUgdmFsdWUgb2YgdGhlIGl0ZW1zLlxuXHQgKlxuXHQgKiBXaXRob3V0IGFyZ3VtZW50cyB0aGUgdmFsdWVzIGFyZSBjb2xsZWN0ZWQgaW50byBhIE1hcCwga2V5ZWQgYnkgdGhlIG5hbWUsIGlkXG5cdCAqIG9yIHNlbGVjdG9yIG9mIGVhY2ggaXRlbSAtIGl0ZW1zIHdpdGhvdXQgYSB2YWx1ZSBhcmUgbGVmdCBvdXQsIHNvIGFuIHVuY2hlY2tlZFxuXHQgKiByYWRpbyBkb2VzIG5vdCBvdmVyd3JpdGUgdGhlIHNlbGVjdGVkIG9uZSBvZiBpdHMgZ3JvdXAuIFdpdGggYXJndW1lbnRzIHRoZVxuXHQgKiB2YWx1ZSBpcyBzZXQgb24gZXZlcnkgaXRlbS5cblx0ICpcblx0ICogQHBhcmFtIHsuLi4qfSBbdGhlVmFsdWVdIC0gdGhlIHZhbHVlIHRvIHNldCBvbiB0aGUgaXRlbXNcblx0ICogQHJldHVybnMge01hcDxzdHJpbmcsKj58TGlzdFR5cGV9IHRoZSB2YWx1ZXMgYnkga2V5LCBvciB0aGlzIHdoZW4gYSB2YWx1ZSB3YXMgc2V0XG5cdCAqL1xuXHRMaXN0VHlwZS5wcm90b3R5cGUudmFsID0gZnVuY3Rpb24gKCkge1xuXHRcdGlmIChhcmd1bWVudHMubGVuZ3RoID09IDApIHtcblx0XHRcdGNvbnN0IHJlc3VsdCA9IG5ldyBNYXAoKTtcblx0XHRcdGZvciAoY29uc3Qgbm9kZSBvZiB0aGlzKSB7XG5cdFx0XHRcdGlmICh0eXBlb2Ygbm9kZS52YWwgPT09IFwiZnVuY3Rpb25cIikge1xuXHRcdFx0XHRcdGNvbnN0IHZhbHVlID0gbm9kZS52YWwoKTtcblx0XHRcdFx0XHRpZiAodmFsdWUgIT0gbnVsbCkgcmVzdWx0LnNldChub2RlLm5hbWUgfHwgbm9kZS5pZCB8fCBub2RlLnNlbGVjdG9yKCksIHZhbHVlKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHJlc3VsdDtcblx0XHR9IGVsc2UgdGhpcy5hcHBseVRvKFwidmFsXCIsIC4uLmFyZ3VtZW50cyk7XG5cblx0XHRyZXR1cm4gdGhpcztcblx0fTtcblxuXHQvKipcblx0ICogQnVpbGRzIGEgbGlzdCBmcm9tIG5vZGVzLCBvdGhlciBsaXN0cyBhbmQgYXJyYXlzIG9mIHRoZW0uXG5cdCAqXG5cdCAqIEV2ZXJ5IGFyZ3VtZW50IHRoYXQgaXMgYW4gaXRlbSBpcyB0YWtlbiwgYW4gaXRlcmFibGUgaXMgcmVhZCBpdGVtIGJ5IGl0ZW0sIHNvXG5cdCAqIGFueSBtaXggY2FuIGJlIHBhc3NlZC4gQW55dGhpbmcgdGhhdCBpcyBub3QgYW4gaXRlbSBpcyBsZWZ0IG91dC4gVGhlIHJlc3VsdCBpc1xuXHQgKiBhIHBsYWluIGxpc3QsIG5vdCBhIGxpdmUgb25lLlxuXHQgKlxuXHQgKiBAcGFyYW0gey4uLihFbGVtZW50VHlwZXxJdGVyYWJsZSl9IHRoZUl0ZW1zXG5cdCAqIEByZXR1cm5zIHtMaXN0VHlwZX0gYSBuZXcgbGlzdCBvZiB0aGUgaXRlbXNcblx0ICovXG5cdExpc3RUeXBlLmZyb20gPSBmdW5jdGlvbiAoKSB7XG5cdFx0Y29uc3QgYXJncyA9IEFycmF5LmZyb20oYXJndW1lbnRzKTtcblx0XHRjb25zdCBkYXRhID0ge307XG5cdFx0bGV0IGNvdW50ZXIgPSAwO1xuXG5cdFx0d2hpbGUgKGFyZ3MubGVuZ3RoID4gMCkge1xuXHRcdFx0Y29uc3QgYXJnID0gYXJncy5zaGlmdCgpO1xuXHRcdFx0aWYgKGFyZyAhPSBudWxsKSB7XG5cdFx0XHRcdGlmIChhcmcgaW5zdGFuY2VvZiBFbGVtZW50VHlwZSkgZGF0YVtjb3VudGVyKytdID0geyB2YWx1ZTogYXJnLCBlbnVtZXJhYmxlOiB0cnVlIH07XG5cdFx0XHRcdGVsc2UgaWYgKHR5cGVvZiBhcmdbU3ltYm9sLml0ZXJhdG9yXSA9PT0gXCJmdW5jdGlvblwiKSB7XG5cdFx0XHRcdFx0Zm9yIChsZXQgaXRlbSBvZiBhcmcpIHtcblx0XHRcdFx0XHRcdGlmIChpdGVtIGluc3RhbmNlb2YgRWxlbWVudFR5cGUpIGRhdGFbY291bnRlcisrXSA9IHsgdmFsdWU6IGl0ZW0sIGVudW1lcmFibGU6IHRydWUgfTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHRkYXRhLmxlbmd0aCA9IHsgdmFsdWU6IGNvdW50ZXIgfTtcblx0XHRyZXR1cm4gT2JqZWN0LmNyZWF0ZShMaXN0VHlwZS5wcm90b3R5cGUsIGRhdGEpO1xuXHR9O1xuXG5cdERlbGVnYXRlckJ1aWxkZXIoXG5cdFx0ZnVuY3Rpb24gKGFGdW5jdGlvbk5hbWUsIHRoZUFyZ3VtZW50cykge1xuXHRcdFx0bGV0IHJlc3VsdHMgPSBbXTtcblx0XHRcdHRoaXMuZm9yRWFjaCgobm9kZSkgPT4ge1xuXHRcdFx0XHRpZiAobm9kZSAmJiB0eXBlb2Ygbm9kZVthRnVuY3Rpb25OYW1lXSA9PT0gXCJmdW5jdGlvblwiKSB7XG5cdFx0XHRcdFx0Y29uc3QgcmVzdWx0ID0gbm9kZVthRnVuY3Rpb25OYW1lXS5hcHBseShub2RlLCB0aGVBcmd1bWVudHMpO1xuXHRcdFx0XHRcdGlmIChyZXN1bHQgIT0gbnVsbCkge1xuXHRcdFx0XHRcdFx0aWYgKHJlc3VsdCBpbnN0YW5jZW9mIExpc3RUeXBlKSByZXN1bHRzID0gcmVzdWx0cy5jb25jYXQoQXJyYXkuZnJvbShyZXN1bHQpKTtcblx0XHRcdFx0XHRcdGVsc2UgcmVzdWx0cy5wdXNoKHJlc3VsdCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblxuXHRcdFx0aWYgKHJlc3VsdHMubGVuZ3RoID09PSAwKSByZXR1cm4gdW5kZWZpbmVkO1xuXHRcdFx0ZWxzZSBpZiAocmVzdWx0c1swXSBpbnN0YW5jZW9mIEVsZW1lbnRUeXBlIHx8IHJlc3VsdHNbMF0gaW5zdGFuY2VvZiBMaXN0VHlwZSkgcmV0dXJuIExpc3RUeXBlLmZyb20ocmVzdWx0cyk7XG5cdFx0XHRlbHNlIHJldHVybiByZXN1bHRzO1xuXHRcdH0sXG5cdFx0TGlzdFR5cGUucHJvdG90eXBlLFxuXHRcdE5vZGUucHJvdG90eXBlLFxuXHRcdEhUTUxFbGVtZW50LnByb3RvdHlwZSxcblx0XHRIVE1MSW5wdXRFbGVtZW50LnByb3RvdHlwZSxcblx0XHRFbGVtZW50LnByb3RvdHlwZSxcblx0XHRFdmVudFRhcmdldC5wcm90b3R5cGUsXG5cdCk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBidWlsZExpc3RUeXBlO1xuIiwiaW1wb3J0IEV4dGVuZGVyIGZyb20gXCIuLi8uLi91dGlscy9FeHRlbmRlclwiO1xyXG5cclxuLyoqXHJcbiAqIENvbnRlbnQgYWNjZXB0ZWQgYnkgdGhlIGluc2VydCBmdW5jdGlvbnMuXHJcbiAqXHJcbiAqIEB0eXBlZGVmIHtOb2RlfE5vZGVMaXN0fEhUTUxDb2xsZWN0aW9ufENvbnRlbnRbXXxzdHJpbmd9IENvbnRlbnRcclxuICovXHJcblxyXG4vKipcclxuICogTm9ybWFsaXplcyBjb250ZW50IHRvIGEgZmxhdCBsaXN0IG9mIG5vZGVzLlxyXG4gKlxyXG4gKiBTdHJpbmdzIGFyZSBwYXJzZWQgdG8gbm9kZXMgYnkgdGhlIGdsb2JhbCBjcmVhdGUoKSwgbGlzdHMgYW5kIGFycmF5cyBhcmUgdGFrZW5cclxuICogaXRlbSBieSBpdGVtLCBzbyBhbnkgbWl4IG9mIHRoZW0gY2FuIGJlIHBhc3NlZC4gTGlzdHMgYXJlIHJlYWQgaW50byBhbiBhcnJheVxyXG4gKiBiZWZvcmUgYW55dGhpbmcgaXMgaW5zZXJ0ZWQsIGJlY2F1c2UgaW5zZXJ0aW5nIGEgbm9kZSByZW1vdmVzIGl0IGZyb20gdGhlIGxpc3RcclxuICogaXQgY2FtZSBmcm9tIC0gaXRlcmF0aW5nIHRoYXQgbGlzdCB3aGlsZSBpbnNlcnRpbmcgd291bGQgc2tpcCBldmVyeSBvdGhlciBub2RlLlxyXG4gKlxyXG4gKiBTdHJpbmdzIGFyZSBub3QgdHJpbW1lZCBhbmQgYW4gZW1wdHkgb25lIGlzIGFjY2VwdGVkOiB1bmxpa2UgZXZlbnQgdHlwZXMgb3JcclxuICogY2xhc3MgbmFtZXMsIHdoaXRlc3BhY2UgaXMgY29udGVudC4gXCIgICBcIiBiZWNvbWVzIGEgdGV4dCBub2RlLCBcIlwiIGJlY29tZXMgbm9cclxuICogbm9kZSBhdCBhbGwuIE9ubHkgdGhlIGFic2VuY2Ugb2YgYW55IGFyZ3VtZW50IGlzIGFuIGVycm9yLlxyXG4gKlxyXG4gKiBAcGFyYW0gey4uLkNvbnRlbnR9IHRoZUNvbnRlbnRcclxuICogQHJldHVybnMge05vZGVbXX0gdGhlIG5vZGVzLCBlbXB0eSB3aGVuIHRoZSBjb250ZW50IHByb2R1Y2VkIG5vbmVcclxuICogQHRocm93cyB7RXJyb3J9IHdoZW4gdGhlcmUgaXMgbm8gY29udGVudCBhdCBhbGwgb3IgYW4gaXRlbSBpcyBub3QgY29udGVudFxyXG4gKi9cclxuY29uc3QgdG9Ob2RlcyA9IGZ1bmN0aW9uICgpIHtcclxuXHRjb25zdCBjb250ZW50ID0gQXJyYXkuZnJvbShhcmd1bWVudHMpLmZsYXQoSW5maW5pdHkpO1xyXG5cdGlmIChjb250ZW50Lmxlbmd0aCA9PT0gMCkgdGhyb3cgbmV3IEVycm9yKFwiQ29udGVudCBpcyByZXF1aXJlZCFcIik7XHJcblxyXG5cdHJldHVybiBjb250ZW50XHJcblx0XHQubWFwKChpdGVtKSA9PiB7XHJcblx0XHRcdGlmIChpdGVtIGluc3RhbmNlb2YgTm9kZSkgcmV0dXJuIGl0ZW07XHJcblx0XHRcdGlmIChpdGVtIGluc3RhbmNlb2YgTm9kZUxpc3QgfHwgaXRlbSBpbnN0YW5jZW9mIEhUTUxDb2xsZWN0aW9uKSByZXR1cm4gQXJyYXkuZnJvbShpdGVtKTtcclxuXHRcdFx0aWYgKHR5cGVvZiBpdGVtID09PSBcInN0cmluZ1wiKSByZXR1cm4gQXJyYXkuZnJvbShjcmVhdGUoaXRlbSkpO1xyXG5cclxuXHRcdFx0dGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBjb250ZW50IVwiKTtcclxuXHRcdH0pXHJcblx0XHQuZmxhdCgpO1xyXG59O1xyXG5cclxuY29uc3Qgc3VwcG9ydCA9IEV4dGVuZGVyKFwiTWFuaXB1bGF0aW9uU3VwcG9ydFwiLCBQcm90b3R5cGUgPT4ge1xyXG5cdC8qKlxyXG5cdCAqIFJlbW92ZXMgYWxsIGNoaWxkIG5vZGVzLlxyXG5cdCAqXHJcblx0ICogQHJldHVybnMge05vZGV9IHRoaXNcclxuXHQgKi9cclxuXHRQcm90b3R5cGUuZW1wdHkgPSBmdW5jdGlvbigpe1xyXG5cdFx0Y29uc3Qgbm9kZXMgPSB0aGlzLmNoaWxkTm9kZXM7XHJcblx0XHR3aGlsZShub2Rlcy5sZW5ndGggIT0gMClcdFx0XHRcclxuXHRcdFx0bm9kZXNbMF0ucmVtb3ZlKHRydWUpO1xyXG5cdFx0XHJcblx0XHRyZXR1cm4gdGhpcztcclxuXHR9O1xyXG5cdFxyXG5cdC8qKlxyXG5cdCAqIEByZXR1cm5zIHtOb2RlTGlzdH0gdGhlIGxpdmUgbGlzdCBvZiBjaGlsZCBub2Rlc1xyXG5cdCAqL1xyXG5cdFByb3RvdHlwZS5jb250ZW50ID0gZnVuY3Rpb24oKXtcclxuXHRcdHJldHVybiB0aGlzLmNoaWxkTm9kZXM7XHJcblx0fTtcdFxyXG5cdFxyXG5cdC8qKlxyXG5cdCAqIEdldHMgb3Igc2V0cyB0aGUgbWFya3VwIG9mIHRoaXMgbm9kZS5cclxuXHQgKlxyXG5cdCAqIGh0bWwoKSByZXR1cm5zIHRoZSBpbm5lckhUTUwsIGh0bWwodHJ1ZSkgdGhlIG91dGVySFRNTCBhbmQgaHRtbChmYWxzZSkgdGhlXHJcblx0ICogaW5uZXJIVE1MLiBBbnkgb3RoZXIgYXJndW1lbnQgcmVwbGFjZXMgYWxsIGNoaWxkcmVuIGJ5IHRoZSBnaXZlbiBjb250ZW50LlxyXG5cdCAqXHJcblx0ICogQHBhcmFtIHsuLi4oYm9vbGVhbnxDb250ZW50KX0gdGhlQ29udGVudCAtIG51bGwgb3IgdW5kZWZpbmVkIHRocm93c1xyXG5cdCAqIEByZXR1cm5zIHtzdHJpbmd8Tm9kZX0gdGhlIG1hcmt1cCwgb3IgdGhpcyB3aGVuIGNvbnRlbnQgd2FzIHNldFxyXG5cdCAqL1xyXG5cdFByb3RvdHlwZS5odG1sID0gZnVuY3Rpb24oKXtcclxuXHRcdGlmKGFyZ3VtZW50cy5sZW5ndGggPT0gMClcclxuXHRcdFx0cmV0dXJuIHRoaXMuaW5uZXJIVE1MO1xyXG5cdFx0ZWxzZSBpZihhcmd1bWVudHMubGVuZ3RoID09IDEgJiYgdHlwZW9mIGFyZ3VtZW50c1swXSA9PT0gXCJib29sZWFuXCIpXHJcblx0XHRcdGlmKGFyZ3VtZW50c1swXSlcclxuXHRcdFx0XHRyZXR1cm4gdGhpcy5vdXRlckhUTUw7XHJcblx0XHRcdGVsc2VcclxuXHRcdFx0XHRyZXR1cm4gdGhpcy5pbm5lckhUTUw7XHJcblx0XHRlbHNlIHtcclxuXHRcdFx0Y29uc3Qgbm9kZXMgPSB0b05vZGVzKEFycmF5LmZyb20oYXJndW1lbnRzKSk7XHJcblx0XHRcdHRoaXMuZW1wdHkoKTtcclxuXHRcdFx0bm9kZXMuZm9yRWFjaChub2RlID0+IHRoaXMuYXBwZW5kQ2hpbGQobm9kZSkpO1xyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiB0aGlzO1xyXG5cdH07XHJcblx0XHJcblx0LyoqXHJcblx0ICogQXBwZW5kcyB0aGUgY29udGVudCBhcyBsYXN0IGNoaWxkcmVuLlxyXG5cdCAqXHJcblx0ICogQHBhcmFtIHsuLi5Db250ZW50fSB0aGVDb250ZW50XHJcblx0ICogQHJldHVybnMge05vZGV9IHRoaXNcclxuXHQgKiBAdGhyb3dzIHtFcnJvcn0gYnkgaW52YWxpZCBjb250ZW50XHJcblx0ICovXHJcblx0UHJvdG90eXBlLmFwcGVuZCA9IGZ1bmN0aW9uKCl7XHJcblx0XHR0b05vZGVzKEFycmF5LmZyb20oYXJndW1lbnRzKSkuZm9yRWFjaChub2RlID0+IHRoaXMuYXBwZW5kQ2hpbGQobm9kZSkpO1xyXG5cclxuXHRcdHJldHVybiB0aGlzO1xyXG5cdH07XHJcblxyXG5cdC8qKlxyXG5cdCAqIEluc2VydHMgdGhlIGNvbnRlbnQgYXMgZmlyc3QgY2hpbGRyZW4uXHJcblx0ICpcclxuXHQgKiBAcGFyYW0gey4uLkNvbnRlbnR9IHRoZUNvbnRlbnRcclxuXHQgKiBAcmV0dXJucyB7Tm9kZX0gdGhpc1xyXG5cdCAqIEB0aHJvd3Mge0Vycm9yfSBieSBpbnZhbGlkIGNvbnRlbnRcclxuXHQgKi9cclxuXHRQcm90b3R5cGUucHJlcGVuZCA9IGZ1bmN0aW9uKCl7XHJcblx0XHRjb25zdCBub2RlcyA9IHRvTm9kZXMoQXJyYXkuZnJvbShhcmd1bWVudHMpKTtcclxuXHRcdGNvbnN0IGZpcnN0ID0gdGhpcy5maXJzdENoaWxkO1xyXG5cdFx0bm9kZXMuZm9yRWFjaChub2RlID0+IHRoaXMuaW5zZXJ0QmVmb3JlKG5vZGUsIGZpcnN0KSk7XHJcblxyXG5cdFx0cmV0dXJuIHRoaXM7XHJcblx0fTtcclxuXHJcblx0LyoqXHJcblx0ICogUmVwbGFjZXMgYSBub2RlIGJ5IHRoZSBnaXZlbiBjb250ZW50LlxyXG5cdCAqXHJcblx0ICogQ2FsbGVkIHdpdGggb25lIGFyZ3VtZW50LCB0aGlzIG5vZGUgaXMgcmVwbGFjZWQgd2l0aGluIGl0cyBwYXJlbnQgbm9kZS5cclxuXHQgKiBDYWxsZWQgd2l0aCBtb3JlLCB0aGUgZmlyc3Qgb25lIC0gYSBjaGlsZCBvZiB0aGlzIG5vZGUgLSBpcyByZXBsYWNlZCBieSB0aGVcclxuXHQgKiBjb250ZW50IGZvbGxvd2luZyBpdC5cclxuXHQgKlxyXG5cdCAqIEBwYXJhbSB7Li4uQ29udGVudH0gdGhlQ29udGVudCAtIHRoZSBuZXcgY29udGVudCwgb3IgdGhlIG9sZCBub2RlIGZvbGxvd2VkIGJ5IHRoZSBuZXcgY29udGVudFxyXG5cdCAqIEByZXR1cm5zIHtOb2RlfSB0aGlzLCBldmVuIHdoZW4gdGhpcyBub2RlIHdhcyB0aGUgcmVwbGFjZWQgb25lXHJcblx0ICogQHRocm93cyB7RXJyb3J9IHdoZW4gY2FsbGVkIHdpdGhvdXQgYXJndW1lbnRzIG9yIGJ5IGludmFsaWQgY29udGVudFxyXG5cdCAqL1xyXG5cdFByb3RvdHlwZS5yZXBsYWNlID0gZnVuY3Rpb24oKXtcclxuXHRcdGlmKGFyZ3VtZW50cy5sZW5ndGggPCAxKVxyXG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJJbnN1ZmZpY2llbnQgYXJndW1lbnRzISBPbmUgb3IgdHdvIG5vZGVzIHJlcXVpcmVkIVwiKTtcclxuXHJcblx0XHRjb25zdCBwYXJlbnQgPSBhcmd1bWVudHMubGVuZ3RoID09IDEgPyB0aGlzLnBhcmVudE5vZGUgOiB0aGlzO1xyXG5cdFx0Y29uc3Qgb2xkTm9kZSA9IGFyZ3VtZW50cy5sZW5ndGggPT0gMSA/IHRoaXMgOiBhcmd1bWVudHNbMF07XHJcblx0XHRjb25zdCBub2RlcyA9IHRvTm9kZXMoYXJndW1lbnRzLmxlbmd0aCA9PSAxID8gYXJndW1lbnRzWzBdIDogQXJyYXkuZnJvbShhcmd1bWVudHMpLnNsaWNlKDEpKTtcclxuXHJcblx0XHRub2Rlcy5mb3JFYWNoKG5vZGUgPT4gcGFyZW50Lmluc2VydEJlZm9yZShub2RlLCBvbGROb2RlKSk7XHJcblx0XHRvbGROb2RlLnJlbW92ZSgpO1xyXG5cclxuXHRcdHJldHVybiB0aGlzO1xyXG5cdH07XHJcblxyXG5cdC8qKlxyXG5cdCAqIEluc2VydHMgdGhlIGNvbnRlbnQgZGlyZWN0bHkgYWZ0ZXIgdGhpcyBub2RlLlxyXG5cdCAqXHJcblx0ICogQHBhcmFtIHsuLi5Db250ZW50fSB0aGVDb250ZW50XHJcblx0ICogQHJldHVybnMge05vZGV9IHRoaXNcclxuXHQgKiBAdGhyb3dzIHtFcnJvcn0gd2hlbiB0aGlzIG5vZGUgaGFzIG5vIHBhcmVudCBub2RlIG9yIGJ5IGludmFsaWQgY29udGVudFxyXG5cdCAqL1xyXG5cdFByb3RvdHlwZS5hZnRlciA9IGZ1bmN0aW9uKCl7XHJcblx0XHRpZih0aGlzLnBhcmVudE5vZGUgPT0gbnVsbClcclxuXHRcdFx0dGhyb3cgbmV3IEVycm9yKFwiQ2FuJ3QgaW5zZXJ0IG5vZGVzIGFmdGVyIHRoaXMgbm9kZSEgUGFyZW50IG5vZGUgbm90IGF2YWlsYWJsZSFcIik7XHJcblxyXG5cdFx0Y29uc3QgcGFyZW50ID0gdGhpcy5wYXJlbnROb2RlO1xyXG5cdFx0Y29uc3QgbmV4dCA9IHRoaXMubmV4dFNpYmxpbmc7XHJcblx0XHR0b05vZGVzKEFycmF5LmZyb20oYXJndW1lbnRzKSkuZm9yRWFjaChub2RlID0+IHBhcmVudC5pbnNlcnRCZWZvcmUobm9kZSwgbmV4dCkpO1xyXG5cclxuXHRcdHJldHVybiB0aGlzO1xyXG5cdH07XHJcblxyXG5cdC8qKlxyXG5cdCAqIEluc2VydHMgdGhlIGNvbnRlbnQgZGlyZWN0bHkgYmVmb3JlIHRoaXMgbm9kZS5cclxuXHQgKlxyXG5cdCAqIEBwYXJhbSB7Li4uQ29udGVudH0gdGhlQ29udGVudFxyXG5cdCAqIEByZXR1cm5zIHtOb2RlfSB0aGlzXHJcblx0ICogQHRocm93cyB7RXJyb3J9IHdoZW4gdGhpcyBub2RlIGhhcyBubyBwYXJlbnQgbm9kZSBvciBieSBpbnZhbGlkIGNvbnRlbnRcclxuXHQgKi9cclxuXHRQcm90b3R5cGUuYmVmb3JlID0gZnVuY3Rpb24oKXtcclxuXHRcdGlmKHRoaXMucGFyZW50Tm9kZSA9PSBudWxsKVxyXG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJDYW4ndCBpbnNlcnQgbm9kZXMgYmVmb3JlIHRoaXMgbm9kZSEgUGFyZW50IG5vZGUgbm90IGF2YWlsYWJsZSFcIik7XHJcblxyXG5cdFx0Y29uc3QgcGFyZW50ID0gdGhpcy5wYXJlbnROb2RlO1xyXG5cdFx0dG9Ob2RlcyhBcnJheS5mcm9tKGFyZ3VtZW50cykpLmZvckVhY2gobm9kZSA9PiBwYXJlbnQuaW5zZXJ0QmVmb3JlKG5vZGUsIHRoaXMpKTtcclxuXHJcblx0XHRyZXR1cm4gdGhpcztcclxuXHR9O1xyXG59KTtcclxuZXhwb3J0IGRlZmF1bHQgc3VwcG9ydDsiLCJpbXBvcnQgRXh0ZW5kZXIgZnJvbSBcIi4uLy4uL3V0aWxzL0V4dGVuZGVyXCI7XHJcblxyXG5jb25zdCBQQVJFTlRUT0tFTiA9IFwiOnBhcmVudFwiO1xyXG5jb25zdCBRVU9URVMgPSBbXCJcXFwiXCIsIFwiJ1wiXTtcclxuXHJcbi8qKlxyXG4gKiBTdHJpcHMgdGhlIG9wdGlvbmFsIHF1b3RlcyBhcm91bmQgYSBzdWIgc2VsZWN0b3IuXHJcbiAqXHJcbiAqIFF1b3RpbmcgaXMgbm90IG5lZWRlZCBhbnltb3JlLCBhcyB0aGUgc2VsZWN0b3IgaXMgcmVhZCBieSBjb3VudGluZyBicmFja2V0c1xyXG4gKiBpbnN0ZWFkIG9mIG1hdGNoaW5nIGEgcGF0dGVybiwgYnV0IGl0IHN0YXlzIHN1cHBvcnRlZC5cclxuICpcclxuICogQHBhcmFtIHtzdHJpbmd9IHN1YnF1ZXJ5XHJcbiAqIEByZXR1cm5zIHtzdHJpbmd9IHRoZSBzdWIgc2VsZWN0b3IsIGVtcHR5IHdoZW4gdGhlcmUgaXMgbm9uZVxyXG4gKi9cclxuY29uc3QgY2xlYW51cFN1YlNlbGVjdG9yID0gKHN1YnF1ZXJ5KSA9PiB7XHJcblx0aWYgKHR5cGVvZiBzdWJxdWVyeSAhPT0gXCJzdHJpbmdcIikgcmV0dXJuIFwiXCI7XHJcblx0c3VicXVlcnkgPSBzdWJxdWVyeS50cmltKCk7XHJcblx0aWYgKChzdWJxdWVyeS5zdGFydHNXaXRoKCdcIicpICYmIHN1YnF1ZXJ5LmVuZHNXaXRoKCdcIicpKSB8fCAoc3VicXVlcnkuc3RhcnRzV2l0aChcIidcIikgJiYgc3VicXVlcnkuZW5kc1dpdGgoXCInXCIpKSkgc3VicXVlcnkgPSBzdWJxdWVyeS5zdWJzdHJpbmcoMSwgc3VicXVlcnkubGVuZ3RoIC0gMSk7XHJcblx0cmV0dXJuIHN1YnF1ZXJ5LnRyaW0oKTtcclxufTtcclxuXHJcbi8qKlxyXG4gKiBGaW5kcyB0aGUgOnBhcmVudCB0b2tlbiBvZiBhIHNlbGVjdG9yLlxyXG4gKlxyXG4gKiBPbmx5IGEgdG9rZW4gb24gYnJhY2tldCBsZXZlbCB6ZXJvIGFuZCBvdXRzaWRlIG9mIHF1b3RlcyBjb3VudHMsIHNvIG5laXRoZXJcclxuICogW2RhdGE9XCI6cGFyZW50XCJdIG5vciA6bm90KDpwYXJlbnQpIGlzIHRha2VuIGZvciBvbmUuXHJcbiAqXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBhU2VsZWN0b3JcclxuICogQHJldHVybnMge251bWJlcn0gdGhlIGluZGV4IG9mIHRoZSB0b2tlbiwgb3IgLTFcclxuICovXHJcbmNvbnN0IGluZGV4T2ZQYXJlbnRUb2tlbiA9IChhU2VsZWN0b3IpID0+IHtcclxuXHRsZXQgcXVvdGUgPSBudWxsO1xyXG5cdGxldCBkZXB0aCA9IDA7XHJcblx0Zm9yIChsZXQgaSA9IDA7IGkgPCBhU2VsZWN0b3IubGVuZ3RoOyBpKyspIHtcclxuXHRcdGNvbnN0IGNoYXIgPSBhU2VsZWN0b3JbaV07XHJcblx0XHRpZiAocXVvdGUpIHtcclxuXHRcdFx0aWYgKGNoYXIgPT09IHF1b3RlICYmIGFTZWxlY3RvcltpIC0gMV0gIT09IFwiXFxcXFwiKSBxdW90ZSA9IG51bGw7XHJcblx0XHR9IGVsc2UgaWYgKFFVT1RFUy5pbmNsdWRlcyhjaGFyKSkgcXVvdGUgPSBjaGFyO1xyXG5cdFx0ZWxzZSBpZiAoY2hhciA9PT0gXCIoXCIpIGRlcHRoKys7XHJcblx0XHRlbHNlIGlmIChjaGFyID09PSBcIilcIikgZGVwdGgtLTtcclxuXHRcdGVsc2UgaWYgKGRlcHRoID09PSAwICYmIGFTZWxlY3Rvci5zdGFydHNXaXRoKFBBUkVOVFRPS0VOLCBpKSkgcmV0dXJuIGk7XHJcblx0fVxyXG5cclxuXHRyZXR1cm4gLTE7XHJcbn07XHJcblxyXG4vKipcclxuICogUmVhZHMgYSBicmFja2V0IGdyb3VwIGJ5IGNvdW50aW5nIGJyYWNrZXRzLCBzbyBhIG5lc3RlZCBncm91cCBsaWtlXHJcbiAqIGRpdjpoYXMocCk6bm90KHNwYW4pIGlzIHJlYWQgYXMgYSB3aG9sZS5cclxuICpcclxuICogQHBhcmFtIHtzdHJpbmd9IGFTZWxlY3RvclxyXG4gKiBAcGFyYW0ge251bWJlcn0gYVN0YXJ0IC0gdGhlIGluZGV4IG9mIHRoZSBvcGVuaW5nIGJyYWNrZXRcclxuICogQHJldHVybnMge3tjb250ZW50OiBzdHJpbmcsIGVuZDogbnVtYmVyfX0gdGhlIGNvbnRlbnQgb2YgdGhlIGdyb3VwIGFuZCB0aGUgaW5kZXggYmVoaW5kIGl0XHJcbiAqIEB0aHJvd3Mge0Vycm9yfSB3aGVuIHRoZSBncm91cCBpcyBub3QgY2xvc2VkXHJcbiAqL1xyXG5jb25zdCByZWFkR3JvdXAgPSAoYVNlbGVjdG9yLCBhU3RhcnQpID0+IHtcclxuXHRsZXQgcXVvdGUgPSBudWxsO1xyXG5cdGxldCBkZXB0aCA9IDA7XHJcblx0Zm9yIChsZXQgaSA9IGFTdGFydDsgaSA8IGFTZWxlY3Rvci5sZW5ndGg7IGkrKykge1xyXG5cdFx0Y29uc3QgY2hhciA9IGFTZWxlY3RvcltpXTtcclxuXHRcdGlmIChxdW90ZSkge1xyXG5cdFx0XHRpZiAoY2hhciA9PT0gcXVvdGUgJiYgYVNlbGVjdG9yW2kgLSAxXSAhPT0gXCJcXFxcXCIpIHF1b3RlID0gbnVsbDtcclxuXHRcdH0gZWxzZSBpZiAoUVVPVEVTLmluY2x1ZGVzKGNoYXIpKSBxdW90ZSA9IGNoYXI7XHJcblx0XHRlbHNlIGlmIChjaGFyID09PSBcIihcIikgZGVwdGgrKztcclxuXHRcdGVsc2UgaWYgKGNoYXIgPT09IFwiKVwiICYmIC0tZGVwdGggPT09IDApIHJldHVybiB7IGNvbnRlbnQ6IGFTZWxlY3Rvci5zdWJzdHJpbmcoYVN0YXJ0ICsgMSwgaSksIGVuZDogaSArIDEgfTtcclxuXHR9XHJcblxyXG5cdHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgcXVlcnkhXCIpO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIFNwbGl0cyBhIHNlbGVjdG9yIGF0IGl0cyA6cGFyZW50IHRva2VuLlxyXG4gKlxyXG4gKiBAcGFyYW0ge3N0cmluZ30gYVNlbGVjdG9yXHJcbiAqIEByZXR1cm5zIHt7cHJlZml4OiBzdHJpbmcsIHNlbGVjdG9yOiBzdHJpbmcsIHN1ZmZpeDogc3RyaW5nfXxudWxsfSB0aGUgcGFydHMsIG9yIG51bGwgd2hlbiB0aGVyZSBpcyBubyB0b2tlblxyXG4gKiBAdGhyb3dzIHtFcnJvcn0gd2hlbiB0aGUgYnJhY2tldCBncm91cCBvZiB0aGUgdG9rZW4gaXMgbm90IGNsb3NlZFxyXG4gKi9cclxuY29uc3Qgc3BsaXRQYXJlbnRRdWVyeSA9IChhU2VsZWN0b3IpID0+IHtcclxuXHRjb25zdCBpbmRleCA9IGluZGV4T2ZQYXJlbnRUb2tlbihhU2VsZWN0b3IpO1xyXG5cdGlmIChpbmRleCA8IDApIHJldHVybiBudWxsO1xyXG5cclxuXHRjb25zdCBhZnRlciA9IGluZGV4ICsgUEFSRU5UVE9LRU4ubGVuZ3RoO1xyXG5cdGNvbnN0IGdyb3VwID0gYVNlbGVjdG9yW2FmdGVyXSA9PT0gXCIoXCIgPyByZWFkR3JvdXAoYVNlbGVjdG9yLCBhZnRlcikgOiB7IGNvbnRlbnQ6IFwiXCIsIGVuZDogYWZ0ZXIgfTtcclxuXHJcblx0cmV0dXJuIHtcclxuXHRcdHByZWZpeDogYVNlbGVjdG9yLnN1YnN0cmluZygwLCBpbmRleCkudHJpbSgpLFxyXG5cdFx0c2VsZWN0b3I6IGNsZWFudXBTdWJTZWxlY3Rvcihncm91cC5jb250ZW50KSxcclxuXHRcdHN1ZmZpeDogYVNlbGVjdG9yLnN1YnN0cmluZyhncm91cC5lbmQpLnRyaW0oKVxyXG5cdH07XHJcbn07XHJcblxyXG4vKipcclxuICogRXhlY3V0ZXMgYSBzZWxlY3RvciwgcmVzb2x2aW5nIHRoZSA6cGFyZW50IHBzZXVkbyBzZWxlY3Rvci5cclxuICpcclxuICogOnBhcmVudCByZXR1cm5zIHRoZSBwYXJlbnQgb2YgdGhlIGVsZW1lbnQsIDpwYXJlbnQoc2VsZWN0b3IpIHRoZSBuZXh0IGFuY2VzdG9yXHJcbiAqIG1hdGNoaW5nIHRoZSBzZWxlY3Rvci4gRXZlcnl0aGluZyBiZWZvcmUgdGhlIHRva2VuIHNlbGVjdHMgdGhlIGVsZW1lbnRzIHRvXHJcbiAqIHN0YXJ0IGZyb20sIGV2ZXJ5dGhpbmcgYmVoaW5kIGl0IGlzIHNlYXJjaGVkIHdpdGhpbiB0aGUgcGFyZW50cyBmb3VuZC5cclxuICpcclxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gYUVsZW1lbnRcclxuICogQHBhcmFtIHtzdHJpbmd9IGFTZWxlY3RvclxyXG4gKiBAcmV0dXJucyB7Tm9kZUxpc3R8dW5kZWZpbmVkfSB0aGUgcmVzdWx0LCB1bmRlZmluZWQgd2hlbiBhIHN0ZXAgZm91bmQgbm90aGluZ1xyXG4gKi9cclxuY29uc3QgcXVlcnlFeGVjdXRlciA9IGZ1bmN0aW9uIChhRWxlbWVudCwgYVNlbGVjdG9yKSB7XHJcblx0Y29uc3QgcXVlcnkgPSBzcGxpdFBhcmVudFF1ZXJ5KGFTZWxlY3Rvcik7XHJcblx0aWYgKCFxdWVyeSkgcmV0dXJuIGFFbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYVNlbGVjdG9yKTtcclxuXHJcblx0bGV0IHJlc3VsdCA9IGFFbGVtZW50O1xyXG5cdGlmIChxdWVyeS5wcmVmaXgubGVuZ3RoID4gMCkge1xyXG5cdFx0cmVzdWx0ID0gYUVsZW1lbnQucXVlcnlTZWxlY3RvckFsbChxdWVyeS5wcmVmaXgpO1xyXG5cdFx0aWYgKHJlc3VsdC5sZW5ndGggPT0gMCkgcmV0dXJuO1xyXG5cdH1cclxuXHJcblx0cmVzdWx0ID0gcmVzdWx0LnBhcmVudChxdWVyeS5zZWxlY3Rvci5sZW5ndGggPiAwID8gcXVlcnkuc2VsZWN0b3IgOiBudWxsKTtcclxuXHRpZiAoIXJlc3VsdCkgcmV0dXJuO1xyXG5cclxuXHRyZXR1cm4gcXVlcnkuc3VmZml4Lmxlbmd0aCA+IDAgPyByZXN1bHQuZmluZChxdWVyeS5zdWZmaXgpIDogcmVzdWx0O1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIE5vcm1hbGl6ZXMgc2VsZWN0b3JzIHRvIGEgbGlzdCBvZiBub24gZW1wdHkgc3RyaW5ncy5cclxuICpcclxuICogRW1wdHkgc2VsZWN0b3JzIGFyZSBza2lwcGVkIHJhdGhlciB0aGFuIHRocm93biBhdCwgb3RoZXIgdGhhbiBpbiB0aGUgc2libGluZ1xyXG4gKiBmdW5jdGlvbnMgZm9yIGV2ZW50IHR5cGVzIGFuZCBjbGFzcyBuYW1lczogYW4gZW1wdHkgc2VsZWN0b3IgY2FycmllcyBubyBpbnRlbnRcclxuICogYW5kIGp1c3QgY29udHJpYnV0ZXMgbm90aGluZywgd2hpbGUgYSBub24gc3RyaW5nIGlzIGEgbWlzdGFrZSBhbmQgdGhyb3dzLlxyXG4gKiBTZWxlY3RvcnMgYXJlIG5vdCBzcGxpdCwgY29tbWEgc2VwYXJhdGVkIGxpc3RzIGFyZSBsZWZ0IGZvciBxdWVyeVNlbGVjdG9yQWxsLlxyXG4gKlxyXG4gKiBAcGFyYW0ge3N0cmluZ3xJdGVyYWJsZTxzdHJpbmc+fSB0aGVTZWxlY3RvcnNcclxuICogQHJldHVybnMge3N0cmluZ1tdfSB0aGUgdHJpbW1lZCBzZWxlY3RvcnMsIGVtcHR5IG9uZXMgcmVtb3ZlZFxyXG4gKiBAdGhyb3dzIHtFcnJvcn0gd2hlbiB0aGVyZSBpcyBubyBzZWxlY3RvciBvciBvbmUgaXMgbm90IGEgc3RyaW5nXHJcbiAqL1xyXG5jb25zdCB0b1NlbGVjdG9yID0gZnVuY3Rpb24gKHRoZVNlbGVjdG9ycykge1xyXG5cdGlmKHRoZVNlbGVjdG9ycyA9PSBudWxsKSB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIHF1ZXJ5IVwiKTtcclxuXHJcblx0Y29uc3Qgc2VsZWN0b3JzID0gdHlwZW9mIHRoZVNlbGVjdG9ycyA9PT0gXCJzdHJpbmdcIiA/IFt0aGVTZWxlY3RvcnNdIDogQXJyYXkuZnJvbSh0aGVTZWxlY3RvcnMpO1xyXG5cclxuXHRyZXR1cm4gc2VsZWN0b3JzXHJcblx0XHQubWFwKChzZWxlY3RvcikgPT4ge1xyXG5cdFx0XHRcdGlmKHR5cGVvZiBzZWxlY3RvciAhPT0gXCJzdHJpbmdcIikgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBxdWVyeSFcIik7XHJcblx0XHRcdFx0cmV0dXJuIHNlbGVjdG9yLnRyaW0oKTtcclxuXHRcdFx0fSlcclxuXHRcdC5maWx0ZXIoKHNlbGVjdG9yKSA9PiBzZWxlY3Rvci5sZW5ndGggPiAwKTtcclxufVxyXG5cclxuXHJcbmNvbnN0IHN1cHBvcnQgPSBFeHRlbmRlcihcIlF1ZXJ5U3VwcG9ydFwiLCAoUHJvdG90eXBlKSA9PiB7XHJcblx0LyoqXHJcblx0ICogU2VhcmNoZXMgbm9kZXMgYnkgb25lIG9yIG1vcmUgc2VsZWN0b3JzLlxyXG5cdCAqXHJcblx0ICogU2VsZWN0b3IgbGlzdHMgc2VwYXJhdGVkIGJ5IGNvbW1hIGFyZSBsZWZ0IHRvIHF1ZXJ5U2VsZWN0b3JBbGwsIHdoaWNoIGtub3dzXHJcblx0ICogdGhlbSBhbmQgZ2V0cyB0aGUgY29tbWFzIGluc2lkZSBicmFja2V0cyBhbmQgcXVvdGVzIHJpZ2h0LiBUaGUgcmVzdWx0cyBvZlxyXG5cdCAqIHNldmVyYWwgc2VsZWN0b3JzIGFyZSBjb2xsZWN0ZWQgaW4gdGhlIG9yZGVyIHRoZXkgd2VyZSBnaXZlbiwgd2l0aG91dFxyXG5cdCAqIHJlbW92aW5nIHRoZSBub2RlcyBhIHNlY29uZCBzZWxlY3RvciBmaW5kcyBhZ2Fpbi5cclxuXHQgKlxyXG5cdCAqIEBwYXJhbSB7Li4uc3RyaW5nfSB0aGVTZWxlY3RvcnMgLSBzZWxlY3RvcnMsIGVtcHR5IG9uZXMgYXJlIHNraXBwZWRcclxuXHQgKiBAcmV0dXJucyB7Tm9kZUxpc3R9IHRoZSBub2RlcyBmb3VuZCwgZW1wdHkgd2hlbiB0aGVyZSBhcmUgbm9uZVxyXG5cdCAqIEB0aHJvd3Mge0Vycm9yfSBieSBhIHNlbGVjdG9yIGJlc2lkZSBhIHN0cmluZ1xyXG5cdCAqL1xyXG5cdFByb3RvdHlwZS5maW5kID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0Y29uc3Qgbm9kZXMgPSBbXTtcclxuXHRcdGNvbnN0IHNlbGVjdG9ycyA9IHRvU2VsZWN0b3IoYXJndW1lbnRzKTtcclxuXHRcdGZvcihsZXQgc2VsZWN0b3Igb2Ygc2VsZWN0b3JzKXtcclxuXHRcdFx0Y29uc3QgcmVzdWx0ID0gcXVlcnlFeGVjdXRlcih0aGlzLCBzZWxlY3Rvcik7XHJcblx0XHRcdGlmIChyZXN1bHQpIG5vZGVzLnB1c2gocmVzdWx0KTtcclxuXHRcdH1cclxuXHJcblx0XHRyZXR1cm4gTm9kZUxpc3QuZnJvbSguLi5ub2Rlcyk7XHJcblx0fTtcclxuXHJcblx0LyoqXHJcblx0ICogQ2hlY2tzIHdoZXRoZXIgdGhpcyBub2RlIG1hdGNoZXMgYXQgbGVhc3Qgb25lIG9mIHRoZSBzZWxlY3RvcnMuXHJcblx0ICpcclxuXHQgKiBBIERvY3VtZW50IGFuZCBhIERvY3VtZW50RnJhZ21lbnQgbmV2ZXIgbWF0Y2gsIGFzIHRoZXkgY2FuIG5vdCBiZSBzZWxlY3RlZCAtXHJcblx0ICogdGhhdCBhbHNvIGNvdmVycyBhIFNoYWRvd1Jvb3QsIHdoaWNoIGlzIGEgRG9jdW1lbnRGcmFnbWVudC5cclxuXHQgKlxyXG5cdCAqIEBwYXJhbSB7Li4uKHN0cmluZ3xzdHJpbmdbXSl9IHRoZVNlbGVjdG9ycyAtIHNlbGVjdG9ycywgZ2l2ZW4gb25lIGJ5IG9uZSBvciBhcyBhIGxpc3RcclxuXHQgKiBAcmV0dXJucyB7Ym9vbGVhbn0gd2hldGhlciBvbmUgb2YgdGhlIHNlbGVjdG9ycyBtYXRjaGVzXHJcblx0ICogQHRocm93cyB7RE9NRXhjZXB0aW9ufSBieSBhbiBpbnZhbGlkIHNlbGVjdG9yXHJcblx0ICovXHJcblx0UHJvdG90eXBlLmlzID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0aWYgKHRoaXMgaW5zdGFuY2VvZiBEb2N1bWVudCB8fCB0aGlzIGluc3RhbmNlb2YgRG9jdW1lbnRGcmFnbWVudCkgcmV0dXJuIGZhbHNlO1xyXG5cdFx0ZWxzZSBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PSAxKSB7XHJcblx0XHRcdGlmICh0eXBlb2YgYXJndW1lbnRzWzBdID09PSBcInN0cmluZ1wiKSByZXR1cm4gdGhpcy5tYXRjaGVzKGFyZ3VtZW50c1swXSk7XHJcblx0XHRcdGVsc2UgaWYgKHR5cGVvZiBhcmd1bWVudHNbMF0ubGVuZ3RoID09PSBcIm51bWJlclwiKSB7XHJcblx0XHRcdFx0bGV0IGZpbHRlciA9IGFyZ3VtZW50c1swXTtcclxuXHRcdFx0XHRmb3IgKGxldCBpID0gMDsgaSA8IGZpbHRlci5sZW5ndGg7IGkrKykgaWYgKHRoaXMubWF0Y2hlcyhmaWx0ZXJbaV0pKSByZXR1cm4gdHJ1ZTtcclxuXHRcdFx0fVxyXG5cdFx0fSBlbHNlIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkgcmV0dXJuIHRoaXMuaXMoQXJyYXkuZnJvbShhcmd1bWVudHMpKTtcclxuXHJcblx0XHRyZXR1cm4gZmFsc2U7XHJcblx0fTtcclxuXHJcblx0LyoqXHJcblx0ICogUmV0dXJucyB0aGUgcGFyZW50IG9mIHRoaXMgbm9kZSwgb3IgdGhlIG5leHQgYW5jZXN0b3IgbWF0Y2hpbmcgYSBzZWxlY3Rvci5cclxuXHQgKlxyXG5cdCAqIEFuIGludmFsaWQgc2VsZWN0b3IgaXMgbm90IGNhdWdodDogaXQgd291bGQgcmV0dXJuIHRoZSBwYXJlbnQgcmVhY2hlZCBzbyBmYXIsXHJcblx0ICogd2hpY2ggaXMgaW5kaXN0aW5ndWlzaGFibGUgZnJvbSBhIG1hdGNoLCB3aGlsZSBhIHNlbGVjdG9yIG1hdGNoaW5nIG5vdGhpbmdcclxuXHQgKiBjb3JyZWN0bHkgcmV0dXJucyBudWxsLiBMZXR0aW5nIGl0IHRocm93IGtlZXBzIHRob3NlIHR3byBhcGFydC5cclxuXHQgKlxyXG5cdCAqIEBwYXJhbSB7c3RyaW5nfGJvb2xlYW59IFtzZWxlY3Rvcl0gLSBhIHNlbGVjdG9yIHRvIGxvb2sgZm9yLCBvciB0aGUgaWdub3JlU2hhZG93Um9vdCBmbGFnXHJcblx0ICogQHBhcmFtIHtib29sZWFufSBbaWdub3JlU2hhZG93Um9vdF0gLSBjb250aW51ZSBhdCB0aGUgaG9zdCBvZiBhIHNoYWRvdyByb290IGluc3RlYWQgb2Ygc3RvcHBpbmdcclxuXHQgKiBAcmV0dXJucyB7Tm9kZXxudWxsfSB0aGUgcGFyZW50LCB0aGUgbWF0Y2hpbmcgYW5jZXN0b3IsIG9yIG51bGwgd2hlbiB0aGVyZSBpcyBub25lXHJcblx0ICogQHRocm93cyB7RE9NRXhjZXB0aW9ufSBieSBhbiBpbnZhbGlkIHNlbGVjdG9yXHJcblx0ICovXHJcblx0UHJvdG90eXBlLnBhcmVudCA9IGZ1bmN0aW9uIChzZWxlY3RvciwgaWdub3JlU2hhZG93Um9vdCkge1xyXG5cdFx0aWYgKCF0aGlzLnBhcmVudE5vZGUpIHJldHVybiBudWxsO1xyXG5cdFx0aWdub3JlU2hhZG93Um9vdCA9IHR5cGVvZiBzZWxlY3RvciA9PT0gXCJib29sZWFuXCIgPyBzZWxlY3RvciA6IGlnbm9yZVNoYWRvd1Jvb3Q7XHJcblx0XHRzZWxlY3RvciA9IHR5cGVvZiBzZWxlY3RvciA9PT0gXCJzdHJpbmdcIiA/IHNlbGVjdG9yIDogbnVsbDtcclxuXHJcblx0XHRsZXQgcGFyZW50ID0gdGhpcy5wYXJlbnROb2RlO1xyXG5cdFx0aWYgKHBhcmVudCBpbnN0YW5jZW9mIFNoYWRvd1Jvb3QgJiYgaWdub3JlU2hhZG93Um9vdCkgcGFyZW50ID0gcGFyZW50Lmhvc3Q7XHJcblxyXG5cdFx0aWYgKHNlbGVjdG9yKSByZXR1cm4gcGFyZW50LmlzKHNlbGVjdG9yKSA/IHBhcmVudCA6IHBhcmVudC5wYXJlbnQoc2VsZWN0b3IsIGlnbm9yZVNoYWRvd1Jvb3QpO1xyXG5cclxuXHRcdHJldHVybiBwYXJlbnQ7XHJcblx0fTtcclxuXHJcblx0LyoqXHJcblx0ICogQ29sbGVjdHMgdGhlIGFuY2VzdG9ycyBvZiB0aGlzIG5vZGUsIGZyb20gdGhlIG5lYXJlc3Qgb25lIHVwd2FyZHMuXHJcblx0ICpcclxuXHQgKiBXaXRoIGEgc2VsZWN0b3Igb25seSB0aGUgbWF0Y2hpbmcgYW5jZXN0b3JzIGFyZSBjb2xsZWN0ZWQsIGFzIGV2ZXJ5IHN0ZXBcclxuXHQgKiB3YWxrcyB1cCB0byB0aGUgbmV4dCBtYXRjaC5cclxuXHQgKlxyXG5cdCAqIEBwYXJhbSB7c3RyaW5nfGJvb2xlYW59IFtzZWxlY3Rvcl0gLSBhIHNlbGVjdG9yIHRvIGxvb2sgZm9yLCBvciB0aGUgaWdub3JlU2hhZG93Um9vdCBmbGFnXHJcblx0ICogQHBhcmFtIHtib29sZWFufSBbaWdub3JlU2hhZG93Um9vdF0gLSBjb250aW51ZSBhdCB0aGUgaG9zdCBvZiBhIHNoYWRvdyByb290IGluc3RlYWQgb2Ygc3RvcHBpbmdcclxuXHQgKiBAcmV0dXJucyB7Tm9kZUxpc3R9IHRoZSBhbmNlc3RvcnMsIGVtcHR5IHdoZW4gdGhlcmUgYXJlIG5vbmVcclxuXHQgKiBAdGhyb3dzIHtET01FeGNlcHRpb259IGJ5IGFuIGludmFsaWQgc2VsZWN0b3JcclxuXHQgKi9cclxuXHRQcm90b3R5cGUucGFyZW50cyA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdGNvbnN0IHJlc3VsdCA9IG5ldyBBcnJheSgpO1xyXG5cdFx0bGV0IHBhcmVudCA9IFByb3RvdHlwZS5wYXJlbnQuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxuXHRcdHdoaWxlIChwYXJlbnQpIHtcclxuXHRcdFx0cmVzdWx0LnB1c2gocGFyZW50KTtcclxuXHRcdFx0cGFyZW50ID0gUHJvdG90eXBlLnBhcmVudC5hcHBseShwYXJlbnQsIGFyZ3VtZW50cyk7XHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIE5vZGVMaXN0LmZyb20ocmVzdWx0KTtcclxuXHR9O1xyXG5cclxuXHQvKipcclxuXHQgKiBCdWlsZHMgYSBzZWxlY3RvciBhZGRyZXNzaW5nIHRoaXMgbm9kZS5cclxuXHQgKlxyXG5cdCAqIEFuIGlkIGVuZHMgdGhlIHNlbGVjdG9yLCBhcyBpdCBhbHJlYWR5IGlkZW50aWZpZXMgdGhlIG5vZGUuIE90aGVyd2lzZSB0aGUgdGFnXHJcblx0ICogbmFtZSBpcyB1c2VkIGFuZCB0aGUgcGF0aCBjb250aW51ZXMgYXQgdGhlIHBhcmVudC4gQSBwb3NpdGlvbiBpcyBvbmx5IGFkZGVkXHJcblx0ICogd2hlbiB0aGUgcGFyZW50IGhhcyBtb3JlIHRoYW4gb25lIGVsZW1lbnQgY2hpbGQsIGFuZCBpdCBjb3VudHMgYWxsIG9mIHRoZW0gLVxyXG5cdCAqIHRoYXQgaXMgd2hhdCA6bnRoLWNoaWxkIGRvZXMsIHVubGlrZSA6bnRoLW9mLXR5cGUuXHJcblx0ICpcclxuXHQgKiBUaGUgaWQgaXMgbm90IGVzY2FwZWQsIHNvIGFuIGlkIG5lZWRpbmcgaXQgZ2l2ZXMgYW4gaW52YWxpZCBzZWxlY3Rvci5cclxuXHQgKlxyXG5cdCAqIEByZXR1cm5zIHtzdHJpbmd8dW5kZWZpbmVkfSB0aGUgc2VsZWN0b3IsIHVuZGVmaW5lZCBmb3IgYSBEb2N1bWVudCBvciBEb2N1bWVudEZyYWdtZW50XHJcblx0ICovXHJcblx0UHJvdG90eXBlLnNlbGVjdG9yID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0aWYgKHRoaXMgaW5zdGFuY2VvZiBEb2N1bWVudCB8fCB0aGlzIGluc3RhbmNlb2YgRG9jdW1lbnRGcmFnbWVudCkgcmV0dXJuIHVuZGVmaW5lZDtcclxuXHRcdGVsc2UgaWYgKHRoaXMuaWQpIHJldHVybiBcIiNcIiArIHRoaXMuaWQ7XHJcblx0XHRlbHNlIHtcclxuXHRcdFx0bGV0IHNlbGVjdG9yID0gdGhpcy50YWdOYW1lLnRvTG93ZXJDYXNlKCk7XHJcblx0XHRcdGNvbnN0IHBhcmVudCA9IHRoaXMucGFyZW50KCk7XHJcblx0XHRcdGlmIChwYXJlbnQpIHtcclxuXHRcdFx0XHRpZihwYXJlbnQuY2hpbGRyZW4ubGVuZ3RoID4gMSkge1xyXG5cdFx0XHRcdFx0Y29uc3QgaW5kZXggPSBwYXJlbnQuY2hpbGRyZW4uaW5kZXhPZih0aGlzKTtcclxuXHRcdFx0XHRcdHNlbGVjdG9yID0gYCR7c2VsZWN0b3J9Om50aC1jaGlsZCgke2luZGV4ICsgMX0pYDtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0Y29uc3QgcGFyZW50U2VsZWN0b3IgPSBwYXJlbnQuc2VsZWN0b3IoKTtcclxuXHRcdFx0XHRyZXR1cm4gcGFyZW50U2VsZWN0b3IgIT0gbnVsbCA/IGAke3BhcmVudFNlbGVjdG9yfSA+ICR7c2VsZWN0b3J9YCA6IHNlbGVjdG9yO1xyXG5cdFx0XHR9XHJcblx0XHRcdHJldHVybiBzZWxlY3RvcjtcclxuXHRcdH1cclxuXHR9O1xyXG5cclxuXHQvKipcclxuXHQgKiBSZXR1cm5zIHRoZSBmaXJzdCBub2RlIG9mIGNsb3Nlc3RzKCkuXHJcblx0ICpcclxuXHQgKiBAcGFyYW0ge3N0cmluZ30gYVF1ZXJ5XHJcblx0ICogQHJldHVybnMge05vZGV8dW5kZWZpbmVkfSB0aGUgZmlyc3Qgbm9kZSBmb3VuZCwgb3IgdW5kZWZpbmVkXHJcblx0ICovXHJcblx0UHJvdG90eXBlLmNsb3Nlc3QgPSBmdW5jdGlvbiAoYVF1ZXJ5KSB7XHJcblx0XHRyZXR1cm4gdGhpcy5jbG9zZXN0cyhhUXVlcnkpLmZpcnN0KCk7XHJcblx0fTtcclxuXHJcblx0LyoqXHJcblx0ICogU2VhcmNoZXMgdGhlIG5vZGVzIGNsb3Nlc3QgdG8gdGhpcyBvbmUgYnkgdGhlaXIgZGlzdGFuY2UgaW4gdGhlIHRyZWUuXHJcblx0ICpcclxuXHQgKiBUaGUgc3VidHJlZSBvZiB0aGlzIG5vZGUgaXMgc2VhcmNoZWQgZmlyc3QsIHRoZW4gdGhlIHN1YnRyZWUgb2YgdGhlIHBhcmVudCxcclxuXHQgKiBhbmQgc28gb24gdXB3YXJkcyAtIHRoZSBzZWFyY2ggd2lkZW5zIGluIHJpbmdzIHVudGlsIGEgbGV2ZWwgaGFzIG1hdGNoZXMsIGFuZFxyXG5cdCAqIHRob3NlIGFyZSByZXR1cm5lZC4gU28gdGhlIHJlc3VsdCBtYXkgYmUgYSBjaGlsZCwgYSBzaWJsaW5nLCBhIGNvdXNpbiBvciBhblxyXG5cdCAqIGFuY2VzdG9yLCBkZXBlbmRpbmcgb24gd2hlcmUgdGhlIGZpcnN0IG1hdGNoIGFwcGVhcnMuXHJcblx0ICpcclxuXHQgKiBEaXN0YW5jZSBpcyBtZWFudCBpbiBib3RoIGRpcmVjdGlvbnMgaGVyZSwgb3RoZXIgdGhhbiBpbiB0aGUgbmF0aXZlIGNsb3Nlc3QoKSxcclxuXHQgKiB3aGljaCBvbmx5IHdhbGtzIHVwIGFuZCByZXR1cm5zIGFuIGFuY2VzdG9yLlxyXG5cdCAqXHJcblx0ICogQHBhcmFtIHtzdHJpbmd9IGFRdWVyeVxyXG5cdCAqIEByZXR1cm5zIHtOb2RlTGlzdH0gdGhlIG1hdGNoZXMgb2YgdGhlIGNsb3Nlc3QgbGV2ZWwgaGF2aW5nIGFueSwgZW1wdHkgd2hlbiB0aGVyZSBhcmUgbm9uZVxyXG5cdCAqL1xyXG5cdFByb3RvdHlwZS5jbG9zZXN0cyA9IGZ1bmN0aW9uIChhUXVlcnkpIHtcclxuXHRcdGNvbnN0IHJlc3VsdCA9IHRoaXMuZmluZChhUXVlcnkpO1xyXG5cdFx0aWYgKHJlc3VsdC5sZW5ndGggIT0gMCkgcmV0dXJuIHJlc3VsdDtcclxuXHJcblx0XHRjb25zdCBwYXJlbnQgPSB0aGlzLnBhcmVudEVsZW1lbnQ7XHJcblx0XHRpZiAocGFyZW50KSByZXR1cm4gcGFyZW50LmNsb3Nlc3RzKGFRdWVyeSk7XHJcblxyXG5cdFx0cmV0dXJuIE5vZGVMaXN0LmZyb20oW10pO1xyXG5cdH07XHJcblxyXG5cdC8qKlxyXG5cdCAqIFNlYXJjaGVzIHRoZSBxdWVyeSBhdCB0aGlzIG5vZGUsIGJlbG93IGl0LCBvciBhYm92ZSBpdCAtIGluIHRoYXQgb3JkZXIuXHJcblx0ICpcclxuXHQgKiBUaGlzIG5vZGUgaXRzZWxmIGlzIGNoZWNrZWQgZmlyc3QsIHRoZW4gaXRzIHN1YnRyZWUsIGFuZCBvbmx5IHRoZW4gdGhlXHJcblx0ICogYW5jZXN0b3JzLiBVbmxpa2UgY2xvc2VzdHMoKSB0aGUgc2VhcmNoIGRvZXMgbm90IHdpZGVuIGluIHJpbmdzOiBpdCBuZXZlclxyXG5cdCAqIGxvb2tzIGludG8gdGhlIHN1YnRyZWUgb2YgYW4gYW5jZXN0b3IsIHNvIGEgc2libGluZyBpcyBub3QgZm91bmQuXHJcblx0ICpcclxuXHQgKiBAcGFyYW0ge3N0cmluZ30gYVF1ZXJ5XHJcblx0ICogQHJldHVybnMge05vZGVMaXN0fSB0aGlzIG5vZGUsIHRoZSBub2RlcyBiZWxvdyBpdCwgb3IgdGhlIG1hdGNoaW5nIGFuY2VzdG9yLCBlbXB0eSB3aGVuIHRoZXJlIGlzIG5vbmVcclxuXHQgKi9cclxuXHRQcm90b3R5cGUubmVzdGVkID0gZnVuY3Rpb24gKGFRdWVyeSkge1xyXG5cdFx0aWYgKHRoaXMuaXMoYVF1ZXJ5KSkgcmV0dXJuIE5vZGVMaXN0LmZyb20odGhpcyk7XHJcblxyXG5cdFx0bGV0IG5lc3RlZCA9IHRoaXMuZmluZChhUXVlcnkpO1xyXG5cdFx0aWYgKG5lc3RlZCAmJiBuZXN0ZWQubGVuZ3RoID4gMCkgcmV0dXJuIG5lc3RlZDtcclxuXHRcdGVsc2UgcmV0dXJuIE5vZGVMaXN0LmZyb20odGhpcy5wYXJlbnQoYVF1ZXJ5KSk7XHJcblx0fTtcclxufSk7XHJcbmV4cG9ydCBkZWZhdWx0IHN1cHBvcnQ7XHJcbiIsImltcG9ydCBFeHRlbmRlciBmcm9tIFwiLi4vLi4vdXRpbHMvRXh0ZW5kZXJcIjtcclxuXHJcbi8qKlxyXG4gKiBUaGUgdHlwZSBvZiB0aGUgZXZlbnQgdHJpZ2dlcmVkIG9uY2UgdGhlIGRvY3VtZW50IGlzIHJlYWR5LlxyXG4gKlxyXG4gKiBAdHlwZSB7c3RyaW5nfVxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IFJFQURZRVZFTlQgPSBcImRlZmF1bHRqcy0tZXZlbnQtLXJlYWR5XCI7XHJcblxyXG5jb25zdCBzdXBwb3J0ID0gRXh0ZW5kZXIoXCJSZWFkeUV2ZW50U3VwcG9ydFwiLCBQcm90b3R5cGUgPT4ge1xyXG5cdC8qKlxyXG5cdCAqIFJlZ2lzdGVycyBhIGZ1bmN0aW9uIGZvciB0aGUgcmVhZHkgZXZlbnQgb2YgdGhlIGRvY3VtZW50LlxyXG5cdCAqXHJcblx0ICogVGhlIHJlYWR5IGV2ZW50IGlzIHRyaWdnZXJlZCBvbmNlIHRoZSBkb20gaXMgcGFyc2VkLiBXaGVuIHRoZSBkb2N1bWVudCBpc1xyXG5cdCAqIGFscmVhZHkgY29tcGxldGUgdGhlIGV2ZW50IGlzIHRyaWdnZXJlZCByaWdodCBhd2F5LCBzbyBhIGZ1bmN0aW9uIHJlZ2lzdGVyZWRcclxuXHQgKiBsYXRlIHN0aWxsIHJ1bnMuIFRoYXQgdHJpZ2dlciByZWFjaGVzIGV2ZXJ5IHJlYWR5IGxpc3RlbmVyLCBzbyBmdW5jdGlvbnNcclxuXHQgKiByZWdpc3RlcmVkIGVhcmxpZXIgcnVuIGFnYWluIG9uIGVhY2ggbGF0ZSByZWdpc3RyYXRpb24uXHJcblx0ICpcclxuXHQgKiBAcGFyYW0ge0Z1bmN0aW9ufSBhRnVuY3Rpb24gLSBjYWxsZWQgb24gdGhlIHJlYWR5IGV2ZW50XHJcblx0ICogQHBhcmFtIHtib29sZWFufSBbb25jZV0gLSByZW1vdmUgdGhlIGZ1bmN0aW9uIGFmdGVyIHRoZSBuZXh0IHJlYWR5IGV2ZW50XHJcblx0ICogQHJldHVybnMge0RvY3VtZW50fSB0aGlzXHJcblx0ICovXHJcblx0UHJvdG90eXBlLnJlYWR5ID0gZnVuY3Rpb24oYUZ1bmN0aW9uLCBvbmNlKXtcclxuXHRcdHRoaXMub24oUkVBRFlFVkVOVCwgYUZ1bmN0aW9uLCBvbmNlID8geyBvbmNlOiB0cnVlIH0gOiB1bmRlZmluZWQpO1xyXG5cdFx0aWYoZG9jdW1lbnQucmVhZHlTdGF0ZSA9PSBcImNvbXBsZXRlXCIpXHJcblx0XHRcdHRoaXMudHJpZ2dlcihSRUFEWUVWRU5UKTtcclxuXHJcblx0XHRyZXR1cm4gdGhpcztcclxuXHR9O1xyXG5cclxufSk7XHJcbmV4cG9ydCBkZWZhdWx0IHN1cHBvcnQ7IiwiaW1wb3J0IEV4dGVuZGVyIGZyb20gXCIuLi8uLi91dGlscy9FeHRlbmRlclwiO1xyXG5cclxuY29uc3QgSElERVZBTFVFID0gXCJub25lXCI7XHJcblxyXG4vKipcclxuICogV2hldGhlciB0aGUgZWxlbWVudCBpcyBoaWRkZW4gYnkgaXRzIG93biBpbmxpbmUgZGlzcGxheSwgYSBkaXNwbGF5IGNvbWluZyBmcm9tXHJcbiAqIGEgY3NzIHJ1bGUgaXMgbm90IHNlZW4uXHJcbiAqXHJcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsZW1lbnRcclxuICogQHJldHVybnMge2Jvb2xlYW59XHJcbiAqL1xyXG5jb25zdCBpc0hpZGRlbiA9IChlbGVtZW50KSA9PiB7XHJcblx0cmV0dXJuIGVsZW1lbnQuc3R5bGUuZGlzcGxheSA9PT0gSElERVZBTFVFXHJcbn07XHJcblxyXG4vKipcclxuICogUmVwbGFjZXMgc2hvdyBhbmQgaGlkZSBvbiB0aGUgZWxlbWVudCBieSB2ZXJzaW9ucyBib3VuZCB0byBpdCwgY2FwdHVyaW5nIHRoZVxyXG4gKiBkaXNwbGF5IHRvIHJlc3RvcmUgb24gc2hvdy5cclxuICpcclxuICogVGhlIGRpc3BsYXkgaXMgcmVhZCBvbmNlLCBvbiB0aGUgZmlyc3Qgc2hvdyBvciBoaWRlLCBhbmQga2VwdCBmcm9tIHRoZW4gb24gLVxyXG4gKiB0aGUgYm91bmQgbWV0aG9kcyBzaGFkb3cgdGhlIHByb3RvdHlwZSwgc28gaW5pdCBkb2VzIG5vdCBydW4gYWdhaW4uIEEgZGlzcGxheVxyXG4gKiBzZXQgZGlyZWN0bHkgYWZ0ZXJ3YXJkcyBpcyBub3QgcGlja2VkIHVwLiBXaGVuIHRoZSBlbGVtZW50IGlzIGhpZGRlbiBhdCB0aGF0XHJcbiAqIGZpcnN0IGNhbGwgdGhlIGNhcHR1cmVkIHZhbHVlIGlzIHRoZSBlbXB0eSBzdHJpbmcsIGZhbGxpbmcgYmFjayB0byB0aGUgY3NzLlxyXG4gKlxyXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbGVtZW50XHJcbiAqIEByZXR1cm5zIHtIVE1MRWxlbWVudH0gdGhlIGVsZW1lbnRcclxuICovXHJcbmNvbnN0IGluaXQgPSAoZWxlbWVudCkgPT4ge1xyXG5cdGxldCBkaXNwbGF5ID0gIWlzSGlkZGVuKGVsZW1lbnQpID8gZWxlbWVudC5zdHlsZS5kaXNwbGF5IDogXCJcIjtcclxuXHJcblx0ZWxlbWVudC5zaG93ID0gKGZ1bmN0aW9uKCl7XHJcblx0XHR0aGlzLnN0eWxlLmRpc3BsYXkgPSBkaXNwbGF5O1xyXG5cdFx0cmV0dXJuIHRoaXM7XHJcblx0fSkuYmluZChlbGVtZW50KTtcclxuXHJcblx0ZWxlbWVudC5oaWRlID0gKGZ1bmN0aW9uKCl7XHJcblx0XHR0aGlzLnN0eWxlLmRpc3BsYXkgPSBISURFVkFMVUU7XHJcblx0XHRyZXR1cm4gdGhpcztcclxuXHR9KS5iaW5kKGVsZW1lbnQpO1xyXG5cclxuXHRyZXR1cm4gZWxlbWVudDtcclxufTtcclxuXHJcblxyXG5jb25zdCBzdXBwb3J0ID0gRXh0ZW5kZXIoXCJTaG93SGlkZVN1cHBvcnRcIiwgUHJvdG90eXBlID0+IHtcclxuXHQvKipcclxuXHQgKiBTaG93cyB0aGUgZWxlbWVudCBieSByZXN0b3JpbmcgdGhlIGRpc3BsYXkgY2FwdHVyZWQgYmVmb3JlIGl0IHdhcyBoaWRkZW4uXHJcblx0ICpcclxuXHQgKiBAcmV0dXJucyB7SFRNTEVsZW1lbnR9IHRoaXNcclxuXHQgKi9cclxuXHRQcm90b3R5cGUuc2hvdyA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0cmV0dXJuIGluaXQodGhpcykuc2hvdy5hcHBseShudWxsLCBhcmd1bWVudHMpXHJcblx0fTtcclxuXHJcblx0LyoqXHJcblx0ICogSGlkZXMgdGhlIGVsZW1lbnQgYnkgc2V0dGluZyBpdHMgZGlzcGxheSB0byBub25lLlxyXG5cdCAqXHJcblx0ICogQHJldHVybnMge0hUTUxFbGVtZW50fSB0aGlzXHJcblx0ICovXHJcblx0UHJvdG90eXBlLmhpZGUgPSBmdW5jdGlvbigpIHtcclxuXHRcdHJldHVybiBpbml0KHRoaXMpLmhpZGUuYXBwbHkobnVsbCwgYXJndW1lbnRzKVxyXG5cdH07XHJcblxyXG5cdC8qKlxyXG5cdCAqIFNob3dzIHRoZSBlbGVtZW50IHdoZW4gaXQgaXMgaGlkZGVuLCBoaWRlcyBpdCBvdGhlcndpc2UuXHJcblx0ICpcclxuXHQgKiBPbmx5IGFuIGlubGluZSBkaXNwbGF5IG9mIG5vbmUgY291bnRzIGFzIGhpZGRlbiwgc28gYW4gZWxlbWVudCBoaWRkZW4gYnkgYVxyXG5cdCAqIGNzcyBydWxlIGlzIGhpZGRlbiBpbmxpbmUgZmlyc3QgYmVmb3JlIGl0IHNob3dzLlxyXG5cdCAqXHJcblx0ICogQHJldHVybnMge0hUTUxFbGVtZW50fSB0aGlzXHJcblx0ICovXHJcblx0UHJvdG90eXBlLnRvZ2dsZVNob3cgPSBmdW5jdGlvbigpIHtcclxuXHRcdHJldHVybiBpc0hpZGRlbih0aGlzKSA/IHRoaXMuc2hvdygpIDogdGhpcy5oaWRlKCk7XHJcblx0fTtcclxuXHJcbn0pO1xyXG5leHBvcnQgZGVmYXVsdCBzdXBwb3J0OyIsImltcG9ydCBFeHRlbmRlciBmcm9tIFwiLi4vLi4vdXRpbHMvRXh0ZW5kZXJcIjtcclxuXHJcbi8qKlxyXG4gKiBWYWx1ZSBoYW5kbGluZyBmb3Igb25lIGtpbmQgb2YgaW5wdXQgZWxlbWVudC5cclxuICpcclxuICogQHR5cGVkZWYge09iamVjdH0gSW5wdXRUeXBlXHJcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBzZWxlY3RvciAtIG1hdGNoZXMgdGhlIGVsZW1lbnRzIGhhbmRsZWQgYnkgdGhpcyB0eXBlXHJcbiAqIEBwcm9wZXJ0eSB7ZnVuY3Rpb24oKToqfSBnZXQgLSByZWFkcyB0aGUgdmFsdWUgb2YgdGhlIGVsZW1lbnRcclxuICogQHByb3BlcnR5IHtmdW5jdGlvbigqKTp2b2lkfSBzZXQgLSB3cml0ZXMgdGhlIHZhbHVlIHRvIHRoZSBlbGVtZW50XHJcbiAqL1xyXG5cclxuLyoqXHJcbiAqIFNoYXJlZCBzZXR0ZXIgb2YgY2hlY2tib3ggYW5kIHJhZGlvLCBib3RoIGFyZSBzZXQgYnkgdGhlaXIgY2hlY2tlZCBzdGF0ZS5cclxuICpcclxuICogQHBhcmFtIHtib29sZWFufHN0cmluZ3xzdHJpbmdbXX0gYVZhbHVlIC0gYSBib29sZWFuIGlzIGFwcGxpZWQgZGlyZWN0bHksIGEgc3RyaW5nIG9yIGFuIGFycmF5IG9mIHN0cmluZ3MgY2hlY2tzIHRoZSBlbGVtZW50IHdoZW4gaXRzIHZhbHVlIG1hdGNoZXNcclxuICovXHJcbmNvbnN0IGNoZWNrZWRTZXR0ZXIgPSBmdW5jdGlvbihhVmFsdWUpe1xyXG5cdGlmKHR5cGVvZiBhVmFsdWUgPT09IFwiYm9vbGVhblwiKVxyXG5cdFx0dGhpcy5jaGVja2VkID0gYVZhbHVlO1xyXG5cdGVsc2UgaWYodHlwZW9mIGFWYWx1ZSA9PT0gXCJzdHJpbmdcIilcclxuXHRcdHRoaXMuY2hlY2tlZCA9IHRoaXMudmFsdWUgPT0gYVZhbHVlO1xyXG5cdGVsc2UgaWYoQXJyYXkuaXNBcnJheShhVmFsdWUpKVxyXG5cdFx0dGhpcy5jaGVja2VkID0gYVZhbHVlLmluZGV4T2YodGhpcy52YWx1ZSkgPj0gMDtcclxuXHJcblx0dGhpcy50cmlnZ2VyKFwiY2hhbmdlZFwiKTtcclxufTtcclxuXHJcbi8qKlxyXG4gKiBUaGUgZmlyc3QgdHlwZSB3aXRoIGEgbWF0Y2hpbmcgc2VsZWN0b3IgaGFuZGxlcyB0aGUgZWxlbWVudC5cclxuICpcclxuICogQHR5cGUge0lucHV0VHlwZVtdfVxyXG4gKi9cclxuY29uc3QgSW5wdXRUeXBlcyA9IFtcclxuXHR7XHJcblx0XHRzZWxlY3RvciA6IFwic2VsZWN0XCIsXHJcblx0XHQvKipcclxuXHRcdCAqIEByZXR1cm5zIHtzdHJpbmdbXX0gdGhlIHZhbHVlcyBvZiBhbGwgc2VsZWN0ZWQgb3B0aW9uc1xyXG5cdFx0ICovXHJcblx0XHRnZXQgOiBmdW5jdGlvbigpe1xyXG5cdFx0XHRjb25zdCByZXN1bHQgPSBbXTtcclxuXHRcdFx0dGhpcy5maW5kKFwib3B0aW9uXCIpLmZvckVhY2gob3B0aW9uID0+IHtcclxuXHRcdFx0XHRpZihvcHRpb24uc2VsZWN0ZWQpXHJcblx0XHRcdFx0XHRyZXN1bHQucHVzaChvcHRpb24udmFsdWUpO1xyXG5cdFx0XHR9KTtcdFx0XHRcclxuXHRcdFx0cmV0dXJuIHJlc3VsdDtcclxuXHRcdH0sXHJcblx0XHRzZXQgOiBmdW5jdGlvbigpe1x0XHRcdFx0XHJcblx0XHRcdGxldCB2YWx1ZXMgPSBbXTtcclxuXHRcdFx0Y29uc3QgYXJncyA9IEFycmF5LmZyb20oYXJndW1lbnRzKTtcclxuXHRcdFx0bGV0IGFyZyA9IGFyZ3Muc2hpZnQoKTtcclxuXHRcdFx0d2hpbGUoYXJnKXtcclxuXHRcdFx0XHRpZihBcnJheS5pc0FycmF5KGFyZykpXHJcblx0XHRcdFx0XHR2YWx1ZXMgPSB2YWx1ZXMuY29uY2F0KGFyZyk7XHJcblx0XHRcdFx0ZWxzZVxyXG5cdFx0XHRcdFx0dmFsdWVzLnB1c2goYXJnKTtcclxuXHRcdFx0XHRcclxuXHRcdFx0XHRhcmcgPSBhcmdzLnNoaWZ0KCk7XHJcblx0XHRcdH1cclxuXHRcdFx0dGhpcy52YWx1ZSA9IHZhbHVlcztcclxuXHRcdFx0dGhpcy5maW5kKFwib3B0aW9uXCIpLmZvckVhY2gob3B0aW9uID0+IG9wdGlvbi5zZWxlY3RlZCA9IHZhbHVlcy5pbmRleE9mKG9wdGlvbi52YWx1ZSkgPj0gMCk7XHJcblx0XHRcdHRoaXMudHJpZ2dlcihcImNoYW5nZWRcIik7XHJcblx0XHR9XHJcblx0fSxcclxuXHR7XHJcblx0XHRzZWxlY3RvciA6IFwiaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXVwiLFxyXG5cdFx0LyoqXHJcblx0XHQgKiBBIGNoZWNrYm94IGlzIGluZGVwZW5kZW50LCBzbyBhbiB1bmNoZWNrZWQgb25lIHJlcG9ydHMgZmFsc2UgLSBpdCBpcyBvZmYsXHJcblx0XHQgKiB3aGljaCBpcyBhIHZhbHVlIG9mIGl0cyBvd24uXHJcblx0XHQgKlxyXG5cdFx0ICogQHJldHVybnMge2Jvb2xlYW58c3RyaW5nfHVuZGVmaW5lZH0gdGhlIGNoZWNrZWQgc3RhdGUgd2l0aG91dCBhIHZhbHVlIGF0dHJpYnV0ZSwgb3RoZXJ3aXNlIHRoZSB2YWx1ZSB3aGVuIGNoZWNrZWRcclxuXHRcdCAqL1xyXG5cdFx0Z2V0IDogZnVuY3Rpb24oKXtcclxuXHRcdFx0aWYoIXRoaXMuaGFzQXR0cmlidXRlKFwidmFsdWVcIikpXHJcblx0XHRcdFx0cmV0dXJuIHRoaXMuY2hlY2tlZDtcclxuXHRcdFx0ZWxzZSBpZih0aGlzLmNoZWNrZWQpXHJcblx0XHRcdFx0cmV0dXJuIHRoaXMudmFsdWU7XHJcblx0XHR9LFxyXG5cdFx0c2V0IDogY2hlY2tlZFNldHRlclxyXG5cdH0sXHJcblx0e1xyXG5cdFx0c2VsZWN0b3IgOiBcImlucHV0W3R5cGU9XFxcInJhZGlvXFxcIl1cIixcclxuXHRcdC8qKlxyXG5cdFx0ICogQWxsIHJhZGlvcyBvZiBhIGdyb3VwIHNoYXJlIG9uZSBuYW1lIGFuZCBvbmx5IG9uZSBvZiB0aGVtIGNhbiBiZSBjaGVja2VkLFxyXG5cdFx0ICogc28gYW4gdW5jaGVja2VkIHJhZGlvIHJldHVybnMgdW5kZWZpbmVkIGluc3RlYWQgb2YgZmFsc2UgLSBpdCBjYXJyaWVzIG5vXHJcblx0XHQgKiB2YWx1ZSwgaXQganVzdCBpcyBub3QgdGhlIHNlbGVjdGVkIG9uZS4gVGhpcyBpcyB3aGF0IGtlZXBzIHRoZSB1bmNoZWNrZWRcclxuXHRcdCAqIHJhZGlvcyBmcm9tIG92ZXJ3cml0aW5nIHRoZSB2YWx1ZSBvZiB0aGVpciBncm91cCwgb25jZSB0aGUgcmVzdWx0cyBvZiBhXHJcblx0XHQgKiB3aG9sZSBncm91cCBnZXQgY29sbGVjdGVkIGJ5IG5hbWUuXHJcblx0XHQgKlxyXG5cdFx0ICogQHJldHVybnMge2Jvb2xlYW58c3RyaW5nfHVuZGVmaW5lZH0gdHJ1ZSBvciB0aGUgdmFsdWUgd2hlbiBjaGVja2VkLCB1bmRlZmluZWQgb3RoZXJ3aXNlXHJcblx0XHQgKi9cclxuXHRcdGdldCA6IGZ1bmN0aW9uKCl7XHJcblx0XHRcdGlmKHRoaXMuY2hlY2tlZClcclxuXHRcdFx0XHRyZXR1cm4gdGhpcy5oYXNBdHRyaWJ1dGUoXCJ2YWx1ZVwiKSA/IHRoaXMudmFsdWUgOiB0cnVlO1xyXG5cdFx0fSxcclxuXHRcdHNldCA6IGNoZWNrZWRTZXR0ZXJcclxuXHR9XHJcbl07XHJcblxyXG4vKipcclxuICogRmFsbGJhY2sgZm9yIGFsbCBlbGVtZW50cyB3aXRob3V0IGEgbWF0Y2hpbmcgSW5wdXRUeXBlLlxyXG4gKlxyXG4gKiBAdHlwZSB7SW5wdXRUeXBlfVxyXG4gKi9cclxuY29uc3QgRGVmYXVsdElucHV0VHlwZSA9IHtcclxuXHRcdGdldCA6IGZ1bmN0aW9uKCl7XHJcblx0XHRcdHJldHVybiB0aGlzLnZhbHVlO1xyXG5cdFx0fSxcclxuXHRcdHNldCA6IGZ1bmN0aW9uKGFWYWx1ZSl7XHJcblx0XHRcdHRoaXMudmFsdWUgPSBhVmFsdWU7XHJcblx0XHRcdHRoaXMudHJpZ2dlcihcImlucHV0XCIpO1xyXG5cdFx0fVxyXG59O1xyXG5cclxuLyoqXHJcbiAqIEBwYXJhbSB7RWxlbWVudH0gYUVsZW1lbnRcclxuICogQHJldHVybnMge0lucHV0VHlwZX0gdGhlIGZpcnN0IG1hdGNoaW5nIHR5cGUsIG9yIERlZmF1bHRJbnB1dFR5cGVcclxuICovXHJcbmNvbnN0IGdldElucHV0VHlwZSA9IGZ1bmN0aW9uKGFFbGVtZW50KXtcclxuXHRmb3IobGV0IGkgPSAwOyBpIDwgSW5wdXRUeXBlcy5sZW5ndGg7IGkrKylcclxuXHRcdGlmKGFFbGVtZW50LmlzKElucHV0VHlwZXNbaV0uc2VsZWN0b3IpKVxyXG5cdFx0XHRyZXR1cm4gSW5wdXRUeXBlc1tpXTtcdFx0XHJcblx0cmV0dXJuIERlZmF1bHRJbnB1dFR5cGU7XHJcbn07XHJcblxyXG5cclxuY29uc3Qgc3VwcG9ydCA9IEV4dGVuZGVyKFwiVmFsdWVTdXBwb3J0XCIsIFByb3RvdHlwZSA9PiB7XHJcblx0LyoqXHJcblx0ICogR2V0cyBvciBzZXRzIHRoZSB2YWx1ZSBvZiB0aGlzIGVsZW1lbnQuXHJcblx0ICpcclxuXHQgKiBXaGF0IGEgdmFsdWUgaXMgZGVwZW5kcyBvbiB0aGUgZWxlbWVudDogYSBzZWxlY3QgcmV0dXJucyB0aGUgdmFsdWVzIG9mIGFsbFxyXG5cdCAqIGl0cyBzZWxlY3RlZCBvcHRpb25zLCBhIGNoZWNrYm94IGl0cyBjaGVja2VkIHN0YXRlIG9yIGl0cyB2YWx1ZSwgYSByYWRpbyBhXHJcblx0ICogdmFsdWUgb25seSB3aGVuIGl0IGlzIGNoZWNrZWQsIGV2ZXJ5IG90aGVyIGVsZW1lbnQgaXRzIHZhbHVlLlxyXG5cdCAqXHJcblx0ICogQHBhcmFtIHsuLi4qfSBbYVZhbHVlXSAtIHRoZSBuZXcgdmFsdWUsIHRoZSBhY2NlcHRlZCB0eXBlcyBkZXBlbmQgb24gdGhlIGVsZW1lbnRcclxuXHQgKiBAcmV0dXJucyB7KnxFbGVtZW50fSB0aGUgdmFsdWUgb2YgdGhlIGVsZW1lbnQsIG9yIHRoaXMgd2hlbiBhIHZhbHVlIHdhcyBzZXRcclxuXHQgKi9cclxuXHRQcm90b3R5cGUudmFsID0gZnVuY3Rpb24oKSB7XHJcblx0XHRsZXQgdHlwZSA9IGdldElucHV0VHlwZSh0aGlzKTtcclxuXHRcdGlmKGFyZ3VtZW50cy5sZW5ndGggPT0gMClcclxuXHRcdFx0cmV0dXJuIHR5cGUuZ2V0LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcblx0XHRlbHNlXHJcblx0XHRcdHR5cGUuc2V0LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcblx0XHRcdFxyXG5cdFx0cmV0dXJuIHRoaXM7XHJcblx0fTtcdFxyXG59KTtcclxuZXhwb3J0IGRlZmF1bHQgc3VwcG9ydDsiLCJpbXBvcnQgXCIuL2RvbS9FdmVudFRhcmdldFwiO1xyXG5pbXBvcnQgXCIuL2RvbS9Ob2RlXCI7XHJcbmltcG9ydCBcIi4vZG9tL0VsZW1lbnRcIjtcclxuaW1wb3J0IFwiLi9kb20vRG9jdW1lbnRcIjtcclxuaW1wb3J0IFwiLi9kb20vRG9jdW1lbnRGcmFnbWVudFwiO1xyXG5pbXBvcnQgXCIuL2RvbS9IVE1MRWxlbWVudFwiO1xyXG5pbXBvcnQgXCIuL2RvbS9IVE1MSW5wdXRFbGVtZW50XCI7XHJcbmltcG9ydCBcIi4vZG9tL0hUTUxUZXh0QXJlYUVsZW1lbnRcIjtcclxuaW1wb3J0IFwiLi9kb20vSFRNTFNlbGVjdEVsZW1lbnRcIjtcclxuaW1wb3J0IFwiLi9kb20vTm9kZUxpc3RcIjtcclxuaW1wb3J0IFwiLi9kb20vSHRtbENvbGxlY3Rpb25cIjtcclxuaW1wb3J0IFwiLi9HbG9iYWxcIjtcclxuIiwiLyoqXHJcbiAqIEFkZHMgZGVsZWdhdGluZyBtZXRob2RzIHRvIGEgcHJvdG90eXBlLCBvbmUgZm9yIGVhY2ggbWV0aG9kIG9mIHRoZSB0YXJnZXRcclxuICogcHJvdG90eXBlcy5cclxuICpcclxuICogVGhpcyBpcyBob3cgYSBOb2RlTGlzdCBnZXRzIHRoZSBtZXRob2RzIG9mIGEgTm9kZTogZm9yIGV2ZXJ5IG1ldGhvZCBuYW1lIGZvdW5kXHJcbiAqIG9uIHRoZSB0YXJnZXRzLCBhIGZ1bmN0aW9uIGlzIHB1dCBvbiB0aGUgc291cmNlIHRoYXQgaGFuZHMgdGhlIGNhbGwgdG8gdGhlXHJcbiAqIGNhbGxiYWNrLCB0b2dldGhlciB3aXRoIHRoYXQgbmFtZS4gVGhlIGNhbGxiYWNrIHRoZW4gZGVjaWRlcyB3aGF0IHRvIGRvIC0gZm9yIGFcclxuICogbGlzdCBpdCBhcHBsaWVzIHRoZSBtZXRob2QgdG8gZWFjaCBub2RlIGFuZCBjb2xsZWN0cyB0aGUgcmVzdWx0cy5cclxuICpcclxuICogQSBuYW1lIGFscmVhZHkgb24gdGhlIHNvdXJjZSBpcyBsZWZ0IGFsb25lLCBzbyBpdHMgb3duIG1ldGhvZHMgd2luLiBPbmx5IHZhbHVlXHJcbiAqIG1ldGhvZHMgYXJlIHRha2VuLCBhY2Nlc3NvcnMgYXJlIHNraXBwZWQsIGFzIHRoZWlyIGRlc2NyaXB0b3IgaGFzIG5vIHZhbHVlLlxyXG4gKlxyXG4gKiBAcGFyYW0ge2Z1bmN0aW9uKHN0cmluZywgQXJndW1lbnRzKToqfSBjYWxsYmFjayAtIGNhbGxlZCBhcyBtZXRob2QsIHdpdGggdGhlIG5hbWUgYW5kIHRoZSBhcmd1bWVudHNcclxuICogQHBhcmFtIHtPYmplY3R9IHNvdXJjZSAtIHRoZSBwcm90b3R5cGUgdGhlIGRlbGVnYXRpbmcgbWV0aG9kcyBhcmUgYWRkZWQgdG9cclxuICogQHBhcmFtIHsuLi5PYmplY3R9IHRoZVRhcmdldHMgLSB0aGUgcHJvdG90eXBlcyB3aG9zZSBtZXRob2QgbmFtZXMgYXJlIGRlbGVnYXRlZFxyXG4gKi9cclxuY29uc3QgRGVsZWdhdGVyQnVpbGRlciA9IGZ1bmN0aW9uKCkge1xyXG5cdGNvbnN0IGFyZ3MgPSBBcnJheS5mcm9tKGFyZ3VtZW50cyk7XHJcblx0Y29uc3QgY2FsbGJhY2sgPSBhcmdzLnNoaWZ0KCk7XHJcblx0Y29uc3Qgc291cmNlID0gYXJncy5zaGlmdCgpO1xyXG5cdGFyZ3MuZm9yRWFjaCggdGFyZ2V0ID0+e1xyXG5cdFx0T2JqZWN0LmdldE93blByb3BlcnR5TmFtZXModGFyZ2V0KVxyXG5cdFx0LmZvckVhY2gobmFtZSA9PiB7XHJcblx0XHRcdGNvbnN0IHByb3AgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwgbmFtZSk7XHJcblx0XHRcdGlmICh0eXBlb2Ygc291cmNlW25hbWVdID09PSBcInVuZGVmaW5lZFwiICYmIHR5cGVvZiBwcm9wLnZhbHVlID09PSBcImZ1bmN0aW9uXCIpXHJcblx0XHRcdFx0c291cmNlW25hbWVdID0gZnVuY3Rpb24oKXtcclxuXHRcdFx0XHRcdHJldHVybiBjYWxsYmFjay5jYWxsKHRoaXMsIG5hbWUsIGFyZ3VtZW50cyk7XHJcblx0XHRcdFx0fTtcclxuXHRcdH0pO1xyXG5cdH0pO1xyXG5cclxufTtcclxuZXhwb3J0IGRlZmF1bHQgRGVsZWdhdGVyQnVpbGRlcjsiLCIvKipcclxuICogQXBwbGllcyBleHRlbnNpb25zIHRvIHRoZSBwcm90b3R5cGUgb2YgYSB0eXBlLlxyXG4gKlxyXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBhVHlwZSAtIHRoZSB0eXBlIHdob3NlIHByb3RvdHlwZSBnZXRzIGV4dGVuZGVkXHJcbiAqIEBwYXJhbSB7Li4uZnVuY3Rpb24oRnVuY3Rpb24pOnZvaWR9IHRoZUV4dGVuZGVycyAtIHRoZSB3cmFwcGVkIGV4dGVuc2lvbnMgdG8gYXBwbHksIGluIG9yZGVyXHJcbiAqL1xyXG5jb25zdCBleHRlbmRQcm90b3R5cGUgPSBmdW5jdGlvbigpe1xyXG5cdGNvbnN0IGFyZ3MgPSBBcnJheS5mcm9tKGFyZ3VtZW50cyk7XHJcblx0Y29uc3QgdHlwZSA9IGFyZ3Muc2hpZnQoKTtcclxuXHR3aGlsZShhcmdzLmxlbmd0aCA+IDApe1xyXG5cdFx0Y29uc3QgZXh0ZW5kZXIgPSBhcmdzLnNoaWZ0KCk7XHJcblx0XHRleHRlbmRlcih0eXBlKTtcclxuXHR9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBleHRlbmRQcm90b3R5cGU7IiwiaW1wb3J0IFV0aWxzIGZyb20gXCIuL1V0aWxzXCI7XHJcblxyXG4vKipcclxuICogV2hpY2ggZXh0ZW5zaW9uIGlzIGFwcGxpZWQgdG8gd2hpY2ggdHlwZSwga2VwdCBvbiB0aGUgZ2xvYmFsIG9iamVjdCBzbyBpdCBpc1xyXG4gKiBzaGFyZWQgYWNyb3NzIHNlcGFyYXRlIGxvYWRzIG9mIHRoZSBsaWJyYXJ5LlxyXG4gKlxyXG4gKiBAdHlwZSB7T2JqZWN0PHN0cmluZywgT2JqZWN0PHN0cmluZywgYm9vbGVhbj4+fVxyXG4gKi9cclxuY29uc3QgRVhURU5TSU9OU19NQVAgPSBVdGlscy5nbG9iYWxWYXIoXCJfX19ET01fQVBJX0VYVEVOU0lPTl9NQVBfX19cIiwge30pO1xyXG5cclxuLyoqXHJcbiAqIFdyYXBzIGFuIGV4dGVuc2lvbiBzbyBpdCBhcHBsaWVzIHRvIHRoZSBwcm90b3R5cGUgb2YgYSB0eXBlIG9ubHkgb25jZS5cclxuICpcclxuICogVGhlIHJldHVybmVkIGZ1bmN0aW9uIGlzIHdoYXQgZXh0ZW5kUHJvdG90eXBlKCkgY2FsbHMgd2l0aCBhIHR5cGUuIEFwcGx5aW5nIHRoZVxyXG4gKiBzYW1lIG5hbWVkIGV4dGVuc2lvbiB0byB0aGUgc2FtZSB0eXBlIGFnYWluIGlzIGEgbm8tb3Agd2l0aCBhIHdhcm5pbmcsIHNvXHJcbiAqIGxvYWRpbmcgdGhlIGxpYnJhcnkgdHdpY2UgZG9lcyBub3QgcGF0Y2ggdGhlIHByb3RvdHlwZXMgdHdpY2UuXHJcbiAqXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBhTmFtZSAtIHRoZSBuYW1lIG9mIHRoZSBleHRlbnNpb24sIHVuaXF1ZSBwZXIgdHlwZVxyXG4gKiBAcGFyYW0ge2Z1bmN0aW9uKE9iamVjdCk6dm9pZH0gYUV4dGVudGlvbiAtIGFkZHMgdGhlIG1lbWJlcnMgdG8gdGhlIHByb3RvdHlwZVxyXG4gKiBAcmV0dXJucyB7ZnVuY3Rpb24oRnVuY3Rpb24pOnZvaWR9IGEgZnVuY3Rpb24gYXBwbHlpbmcgdGhlIGV4dGVuc2lvbiB0byBhIHR5cGVcclxuICovXHJcbmNvbnN0IEV4dGVuZGVyID0gZnVuY3Rpb24oYU5hbWUsIGFFeHRlbnRpb24pe1xyXG5cdHJldHVybiBmdW5jdGlvbihhVHlwZSl7XHJcblx0XHRjb25zdCB7bmFtZSwgcHJvdG90eXBlfSA9IGFUeXBlO1xyXG5cdFx0bGV0IGV4dGVuc2lvbnMgPSBFWFRFTlNJT05TX01BUFtuYW1lXTtcclxuXHRcdGlmKCFleHRlbnNpb25zKVxyXG5cdFx0XHRleHRlbnNpb25zID0gRVhURU5TSU9OU19NQVBbbmFtZV0gPSB7fTtcdFx0XHJcblx0XHRcclxuXHRcdGlmKCFleHRlbnNpb25zW2FOYW1lXSl7XHJcblx0XHRcdGV4dGVuc2lvbnNbYU5hbWVdID0gdHJ1ZTtcclxuXHRcdFx0YUV4dGVudGlvbihwcm90b3R5cGUpO1xyXG5cdFx0fVxyXG5cdFx0ZWxzZVxyXG5cdFx0XHRjb25zb2xlLndhcm4oYER1cGxpY2F0ZWQgbG9hZCBvZiBleHRlbnNpb24gXFxcIiR7YU5hbWV9XFxcIiFgKTtcclxuXHR9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBFeHRlbmRlcjsiLCJcclxuLyoqXHJcbiAqIFRoZSBnbG9iYWwgb2JqZWN0IG9mIHRoZSBjdXJyZW50IGVudmlyb25tZW50LlxyXG4gKlxyXG4gKiBEZXRlY3RlZCB3aXRoIHR5cGVvZiBndWFyZHMsIGJlY2F1c2UgYSBiYXJlIHJlZmVyZW5jZSB0byBhbiB1bmRlY2xhcmVkIG5hbWVcclxuICogdGhyb3dzIGluc3RlYWQgb2YgYmVpbmcgZmFsc3kgLSBzbyBhIHBsYWluIHdpbmRvdyB8fCBnbG9iYWwgY2hhaW4gd291bGQgYnJlYWtcclxuICogZXZlcnl3aGVyZSB3aW5kb3cgaXMgbWlzc2luZywgbm90IGZhbGwgdGhyb3VnaC4gZ2xvYmFsVGhpcyBjb3ZlcnMgdGhlIGJyb3dzZXIsXHJcbiAqIG5vZGUgYW5kIHdvcmtlcnMsIHRoZSByZXN0IHN0YXlzIGFzIGEgZmFsbGJhY2sgZm9yIG9sZGVyIHJ1bnRpbWVzLlxyXG4gKlxyXG4gKiBAdHlwZSB7T2JqZWN0fVxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IEdMT0JBTCA9IHR5cGVvZiBnbG9iYWxUaGlzICE9PSBcInVuZGVmaW5lZFwiID8gZ2xvYmFsVGhpcyA6XHJcblx0dHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvdyA6XHJcblx0dHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIiA/IGdsb2JhbCA6XHJcblx0dHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIgPyBzZWxmIDoge307XHJcblxyXG5jb25zdCBVdGlscyA9IHtcclxuXHQvKipcclxuXHQgKiBUaGUgZ2xvYmFsIG9iamVjdCwgc2FtZSBhcyBHTE9CQUwuXHJcblx0ICpcclxuXHQgKiBAdHlwZSB7T2JqZWN0fVxyXG5cdCAqL1xyXG5cdGdsb2JhbCA6IEdMT0JBTCxcclxuXHJcblx0LyoqXHJcblx0ICogUmVhZHMgYSB2YXJpYWJsZSBmcm9tIHRoZSBnbG9iYWwgb2JqZWN0LCBpbml0aWFsaXppbmcgaXQgb25jZSB3aGVuIGEgdmFsdWVcclxuXHQgKiBpcyBnaXZlbiBhbmQgbm9uZSBpcyBzZXQgeWV0LlxyXG5cdCAqXHJcblx0ICogVXNlZCB0byBzaGFyZSBzdGF0ZSBiZXR3ZWVuIHNlcGFyYXRlIGxvYWRzIG9mIHRoZSBsaWJyYXJ5LCB3aGljaCBlYWNoIGhhdmVcclxuXHQgKiB0aGVpciBvd24gbW9kdWxlIHNjb3BlIGJ1dCB0aGUgb25lIGdsb2JhbCBvYmplY3QgaW4gY29tbW9uLlxyXG5cdCAqXHJcblx0ICogQHBhcmFtIHtzdHJpbmd9IGFOYW1lIC0gdGhlIG5hbWUgb24gdGhlIGdsb2JhbCBvYmplY3RcclxuXHQgKiBAcGFyYW0geyp9IFthSW5pdFZhbHVlXSAtIHRoZSB2YWx1ZSB0byBzZXQgd2hlbiB0aGUgbmFtZSBpcyBzdGlsbCB1bmRlZmluZWRcclxuXHQgKiBAcmV0dXJucyB7Kn0gdGhlIHZhbHVlIG9uIHRoZSBnbG9iYWwgb2JqZWN0XHJcblx0ICovXHJcblx0Z2xvYmFsVmFyIDogZnVuY3Rpb24oYU5hbWUsIGFJbml0VmFsdWUpe1xyXG5cdFx0aWYoYXJndW1lbnRzLmxlbmd0aCA9PT0gMiAmJiB0eXBlb2YgR0xPQkFMW2FOYW1lXSA9PT0gXCJ1bmRlZmluZWRcIilcclxuXHRcdFx0R0xPQkFMW2FOYW1lXSA9IGFJbml0VmFsdWU7XHJcblxyXG5cdFx0cmV0dXJuIEdMT0JBTFthTmFtZV07XHJcblx0fVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVXRpbHM7IiwiaW1wb3J0IFRlbXBsYXRlLCB7dG9Bc3luY1RlbXBsYXRlTG9hZGVyfSBmcm9tIFwiLi9zcmMvVGVtcGxhdGUuanNcIjtcbmltcG9ydCBSZW5kZXJlciBmcm9tIFwiLi9zcmMvUmVuZGVyZXIuanNcIjtcbmltcG9ydCBDb250ZXh0IGZyb20gXCIuL3NyYy9Db250ZXh0LmpzXCI7XG5pbXBvcnQgRGlyZWN0aXZlIGZyb20gXCIuL3NyYy9EaXJlY3RpdmUuanNcIjtcbmltcG9ydCBEaXJlY3RpdmVFbGVtZW50IGZyb20gXCIuL3NyYy9EaXJlY3RpdmVFbGVtZW50LmpzXCI7XG5cbmV4cG9ydCB7VGVtcGxhdGUsIFJlbmRlcmVyLCBDb250ZXh0LCBEaXJlY3RpdmUsIERpcmVjdGl2ZUVsZW1lbnQsIHRvQXN5bmNUZW1wbGF0ZUxvYWRlcn07XG4iLCIvKipcbiAqIFRoZSBnbG9iYWwgc2NvcGUgb2YgdGhlIGN1cnJlbnQgZW52aXJvbm1lbnQuXG4gKlxuICogUmVzb2x2ZWQgb25jZSB3aGVuIHRoZSBtb2R1bGUgaXMgbG9hZGVkOiBnbG9iYWxUaGlzLCB0aGVuIGdsb2JhbCwgd2luZG93IGFuZCBzZWxmIGZvciBlbmdpbmVzIG5vdFxuICoga25vd2luZyBpdCB5ZXQuIEFuIGVtcHR5IG9iamVjdCB3aGVuIG5vbmUgb2YgdGhlbSBleGlzdHMsIHNvIHJlYWRpbmcgZnJvbSBpdCBuZXZlciB0aHJvd3MuXG4gKlxuICogQG1vZHVsZSBHbG9iYWxcbiAqXG4gKiBAZXhhbXBsZVxuICogR0xPQkFMLmNyeXB0by5nZXRSYW5kb21WYWx1ZXMoYnVmZmVyKTtcbiAqL1xuY29uc3QgR0xPQkFMID0gKCgpID0+IHtcblx0aWYodHlwZW9mIGdsb2JhbFRoaXMgIT09IFwidW5kZWZpbmVkXCIpIHJldHVybiBnbG9iYWxUaGlzO1xuXHRpZih0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiKSByZXR1cm4gZ2xvYmFsO1xuXHRpZih0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiKSByZXR1cm4gd2luZG93O1xuXHRpZih0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIikgcmV0dXJuIHNlbGY7XG5cdHJldHVybiB7fTtcbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IEdMT0JBTDtcbiIsIi8qKlxyXG4gKiBPbmx5IGFuIG9iamVjdCBjYW4gY2FycnkgYSBwcm9wZXJ0eSwgc28gYSBwYXRoIHN0b3BzIGF0IGEgcHJpbWl0aXZlIGluc3RlYWQgb2YgaGFuZGluZyBvdXQgYVxyXG4gKiBwcm9wZXJ0eSB0aGF0IGNhbm5vdCBiZSByZWFkIG9yIHdyaXR0ZW4uIEFuIEFycmF5LCBNYXAgb3IgRGF0ZSBwYXNzZXMgLSB0aGV5IGFyZSBvYmplY3RzIGFuZCB0YWtlXHJcbiAqIGEgcHJvcGVydHkgbGlrZSBhbnkgb3RoZXIgb25lLCB3aGljaCBpcyB3aGF0IG1ha2VzIGEgcGF0aCBsaWtlIFwibGlzdC4wXCIgd29yay5cclxuICpcclxuICogQHByaXZhdGVcclxuICogQHBhcmFtIHsqfSB2YWx1ZSB0aGUgdmFsdWUgYSBzdGVwIG9mIHRoZSBwYXRoIHJlc29sdmVkIHRvXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIHRoZSBuYW1lIG9mIHRoYXQgc3RlcFxyXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IHRoZSB3aG9sZSBwYXRoLCB0byB0ZWxsIHdoaWNoIG9uZSBvZiBzZXZlcmFsIHN0ZXBzIGZhaWxlZFxyXG4gKiBAcmV0dXJucyB7dm9pZH1cclxuICogQHRocm93cyB7VHlwZUVycm9yfSB3aGVuIHRoZSBzdGVwIGNhcnJpZXMgbm8gb2JqZWN0XHJcbiAqL1xyXG5jb25zdCBhc3NlcnREZXNjZW5kYWJsZSA9ICh2YWx1ZSwgbmFtZSwga2V5KSA9PiB7XHJcblx0aWYodmFsdWUgIT09IG51bGwgJiYgdHlwZW9mIHZhbHVlID09PSBcIm9iamVjdFwiKVxyXG5cdFx0cmV0dXJuO1xyXG5cclxuXHRjb25zdCB0eXBlID0gdmFsdWUgPT09IG51bGwgPyBcIm51bGxcIiA6IGBhICR7dHlwZW9mIHZhbHVlfWA7XHJcblx0dGhyb3cgbmV3IFR5cGVFcnJvcihgY2Fubm90IGRlc2NlbmQgaW50byBcIiR7bmFtZX1cIiBvZiBwYXRoIFwiJHtrZXl9XCIgLSAke3R5cGV9IGlzIG5vIG9iamVjdGApO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIE9uZSBwcm9wZXJ0eSBvZiBhbiBvYmplY3QsIGFkZHJlc3NlZCBieSBuYW1lLCB0b2dldGhlciB3aXRoIHRoZSBvYmplY3QgY2FycnlpbmcgaXQuXHJcbiAqXHJcbiAqIEJ1aWx0IHRocm91Z2gge0BsaW5rIE9iamVjdFByb3BlcnR5LmxvYWR9LCB3aGljaCB3YWxrcyBhIGRvdHRlZCBwYXRoIGFuZCBoYW5kcyBiYWNrIHRoZSBwcm9wZXJ0eSBhdFxyXG4gKiBpdHMgZW5kLlxyXG4gKlxyXG4gKiBAZXhhbXBsZVxyXG4gKiBjb25zdCBwcm9wZXJ0eSA9IE9iamVjdFByb3BlcnR5LmxvYWQoe2EgOiB7YiA6IDF9fSwgXCJhLmJcIik7XHJcbiAqIHByb3BlcnR5LnZhbHVlOyAgICAgIC8vIDFcclxuICogcHJvcGVydHkudmFsdWUgPSAyOyAgLy8gd3JpdGVzIGludG8gdGhlIG9iamVjdFxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgT2JqZWN0UHJvcGVydHkge1xyXG5cdC8qKlxyXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgbmFtZSBvZiB0aGUgcHJvcGVydHlcclxuXHQgKiBAcGFyYW0ge29iamVjdH0gY29udGV4dCB0aGUgb2JqZWN0IGNhcnJ5aW5nIGl0XHJcblx0ICovXHJcblx0Y29uc3RydWN0b3Ioa2V5LCBjb250ZXh0KXtcclxuXHRcdHRoaXMua2V5ID0ga2V5O1xyXG5cdFx0dGhpcy5jb250ZXh0ID0gY29udGV4dDtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIFdoZXRoZXIgdGhlIGtleSBpcyByZWFjaGFibGUgb24gdGhlIGNvbnRleHQgYXQgYWxsLlxyXG5cdCAqXHJcblx0ICogVGhpcyBhbnN3ZXJzIGZvciB0aGUgd2hvbGUgcHJvdG90eXBlIGNoYWluLCBub3Qgb25seSBmb3Igb3duIHByb3BlcnRpZXMgLSBsb2FkKHt9LCBcInRvU3RyaW5nXCIpXHJcblx0ICogcmVwb3J0cyB0cnVlLiBUaGF0IGlzIGRlbGliZXJhdGU6IGEgcGF0aCBtYXkgYWRkcmVzcyBhIHByb3RvdHlwZSBhbmQgZXh0ZW5kIGl0LCBzbyBhbiBpbmhlcml0ZWRcclxuXHQgKiBrZXkgaXMgYSBrZXkgbGlrZSBhbnkgb3RoZXIgaGVyZS4gVXNlIGhhc1ZhbHVlIHRvIGFzayB3aGV0aGVyIHNvbWV0aGluZyBpcyBhY3R1YWxseSBzdG9yZWQuXHJcblx0ICpcclxuXHQgKiBAcmV0dXJucyB7Ym9vbGVhbn1cclxuXHQgKi9cclxuXHRnZXQga2V5RGVmaW5lZCgpe1xyXG5cdFx0cmV0dXJuIHRoaXMua2V5IGluIHRoaXMuY29udGV4dDtcclxuXHR9XHJcblx0XHJcblx0LyoqXHJcblx0ICogV2hldGhlciBzb21ldGhpbmcgaXMgc3RvcmVkIHVuZGVyIHRoZSBrZXkuIE9ubHkgdW5kZWZpbmVkIGNvdW50cyBhcyBub3RoaW5nIC0gMCwgXCJcIiwgZmFsc2UgYW5kXHJcblx0ICogbnVsbCBhcmUgdmFsdWVzLlxyXG5cdCAqXHJcblx0ICogQHJldHVybnMge2Jvb2xlYW59XHJcblx0ICovXHJcblx0Z2V0IGhhc1ZhbHVlKCl7XHJcblx0XHRyZXR1cm4gdHlwZW9mIHRoaXMuY29udGV4dFt0aGlzLmtleV0gIT09IFwidW5kZWZpbmVkXCI7XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBAcmV0dXJucyB7Kn0gdGhlIHN0b3JlZCB2YWx1ZSwgdW5kZWZpbmVkIHdoZW4gdGhlcmUgaXMgbm9uZVxyXG5cdCAqL1xyXG5cdGdldCB2YWx1ZSgpe1xyXG5cdFx0cmV0dXJuIHRoaXMuY29udGV4dFt0aGlzLmtleV07XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBAcGFyYW0geyp9IGRhdGFcclxuXHQgKi9cclxuXHRzZXQgdmFsdWUoZGF0YSl7XHJcblx0XHR0aGlzLmNvbnRleHRbdGhpcy5rZXldID0gZGF0YTtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIEFkZHMgYSB2YWx1ZSBuZXh0IHRvIHdoYXQgaXMgYWxyZWFkeSB0aGVyZTogd3JpdGVzIGl0IHdoZW4gdGhlIGtleSBob2xkcyBub3RoaW5nLCB0dXJucyB0aGVcclxuXHQgKiB2YWx1ZSBpbnRvIGFuIGFycmF5IG9mIGJvdGggd2hlbiBpdCBob2xkcyBvbmUsIGFuZCBwdXNoZXMgb250byB0aGUgYXJyYXkgd2hlbiBpdCBob2xkcyBvbmVcclxuXHQgKiBhbHJlYWR5LlxyXG5cdCAqXHJcblx0ICogVGhlIHZhbHVlIGl0c2VsZiBpcyBub3QgbG9va2VkIGF0IC0gYXBwZW5kaW5nIHVuZGVmaW5lZCBwdXRzIHVuZGVmaW5lZCBpbnRvIHRoZSBhcnJheS5cclxuXHQgKlxyXG5cdCAqIEBwYXJhbSB7Kn0gZGF0YVxyXG5cdCAqXHJcblx0ICogQGV4YW1wbGVcclxuXHQgKiBwcm9wZXJ0eS5hcHBlbmQgPSAxOyAgIC8vIHtrZXkgOiAxfVxyXG5cdCAqIHByb3BlcnR5LmFwcGVuZCA9IDI7ICAgLy8ge2tleSA6IFsxLCAyXX1cclxuXHQgKiBwcm9wZXJ0eS5hcHBlbmQgPSAzOyAgIC8vIHtrZXkgOiBbMSwgMiwgM119XHJcblx0ICovXHJcblx0c2V0IGFwcGVuZChkYXRhKSB7XHJcblx0XHRpZighdGhpcy5oYXNWYWx1ZSlcclxuXHRcdFx0dGhpcy52YWx1ZSA9IGRhdGE7XHJcblx0XHRlbHNlIHtcclxuXHRcdFx0Y29uc3QgdmFsdWUgPSB0aGlzLnZhbHVlO1xyXG5cdFx0XHRpZih2YWx1ZSBpbnN0YW5jZW9mIEFycmF5KVxyXG5cdFx0XHRcdHZhbHVlLnB1c2goZGF0YSk7XHJcblx0XHRcdGVsc2VcclxuXHRcdFx0XHR0aGlzLnZhbHVlID0gW3RoaXMudmFsdWUsIGRhdGFdO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogRGVsZXRlcyB0aGUga2V5IGZyb20gdGhlIG9iamVjdC4gRG9lcyBub3RoaW5nIHdoZW4gaXQgaXMgbm90IHRoZXJlLlxyXG5cdCAqXHJcblx0ICogQHJldHVybnMge3ZvaWR9XHJcblx0ICovXHJcblx0cmVtb3ZlKCl7XHJcblx0XHRkZWxldGUgdGhpcy5jb250ZXh0W3RoaXMua2V5XTtcclxuXHR9XHJcblx0XHJcblx0LyoqXHJcblx0ICogTG9hZHMgdGhlIHByb3BlcnR5IGEgZG90dGVkIHBhdGggYWRkcmVzc2VzLiBFdmVyeSBwYXJ0IG9mIHRoZSBwYXRoIGlzIHRyaW1tZWQsIHNvIFwiIGEgLiBiIFwiXHJcblx0ICogYWRkcmVzc2VzIHRoZSBzYW1lIHByb3BlcnR5IGFzIFwiYS5iXCIuXHJcblx0ICpcclxuXHQgKiBBIG1pc3Npbmcgc3RlcCBpcyBjcmVhdGVkIHdpdGggY3JlYXRlLCBvdGhlcndpc2UgdGhlIHBhdGggaXMgcmVwb3J0ZWQgYXMgbm90IGxvYWRhYmxlLiBBIHN0ZXBcclxuXHQgKiBob2xkaW5nIHNvbWV0aGluZyB0aGF0IGlzIG5vIG9iamVjdCBjYW5ub3QgYmUgd2Fsa2VkIGludG8gYXQgYWxsIC0gdGhhdCBpcyBhIGJyb2tlbiBwYXRoLCBub3QgYVxyXG5cdCAqIG1pc3Npbmcgb25lLCBhbmQgaXQgaXMgcmVwb3J0ZWQgYXMgYW4gZXJyb3IgcmVnYXJkbGVzcyBvZiBjcmVhdGUuXHJcblx0ICpcclxuXHQgKiBAcGFyYW0ge29iamVjdH0gZGF0YSB0aGUgb2JqZWN0IHRvIHdhbGtcclxuXHQgKiBAcGFyYW0ge3N0cmluZ30ga2V5IG5hbWUgb2YgdGhlIHByb3BlcnR5LCBhIGRvdHRlZCBwYXRoIGFkZHJlc3NlcyBhIG5lc3RlZCBvbmVcclxuXHQgKiBAcGFyYW0ge2Jvb2xlYW59IFtjcmVhdGU9dHJ1ZV0gY3JlYXRlIGEgbWlzc2luZyBzdGVwIG9uIHRoZSB3YXlcclxuXHQgKiBAcmV0dXJucyB7T2JqZWN0UHJvcGVydHl8bnVsbH0gbnVsbCB3aGVuIGEgc3RlcCBpcyBtaXNzaW5nIGFuZCBjcmVhdGUgaXMgZmFsc2VcclxuXHQgKiBAdGhyb3dzIHtUeXBlRXJyb3J9IHdoZW4gYSBzdGVwIG9mIHRoZSBwYXRoIGhvbGRzIHNvbWV0aGluZyB0aGF0IGlzIG5vIG9iamVjdFxyXG5cdCAqXHJcblx0ICogQGV4YW1wbGVcclxuXHQgKiBPYmplY3RQcm9wZXJ0eS5sb2FkKHthIDoge2IgOiAxfX0sIFwiYS5iXCIpLnZhbHVlOyAgIC8vIDFcclxuXHQgKiBPYmplY3RQcm9wZXJ0eS5sb2FkKHtsaXN0IDogWzEsIDJdfSwgXCJsaXN0LjFcIikudmFsdWU7ICAgLy8gMiwgYW4gYXJyYXkgaXMgYW4gb2JqZWN0XHJcblx0ICogT2JqZWN0UHJvcGVydHkubG9hZCh7fSwgXCJhLmJcIiwgZmFsc2UpOyAgICAgICAgICAgICAvLyBudWxsXHJcblx0ICogT2JqZWN0UHJvcGVydHkubG9hZCh7YSA6IDB9LCBcImEuYlwiKTsgICAgICAgICAgICAgICAvLyB0aHJvd3MsIDAgaXMgbm8gb2JqZWN0XHJcblx0ICovXHJcblx0c3RhdGljIGxvYWQoZGF0YSwga2V5LCBjcmVhdGU9dHJ1ZSkge1xyXG5cdFx0bGV0IGNvbnRleHQgPSBkYXRhO1xyXG5cdFx0Y29uc3Qga2V5cyA9IGtleS5zcGxpdChcIi5cIik7XHJcblx0XHRsZXQgbmFtZSA9IGtleXMuc2hpZnQoKS50cmltKCk7XHJcblx0XHR3aGlsZShrZXlzLmxlbmd0aCA+IDApe1xyXG5cdFx0XHRpZih0eXBlb2YgY29udGV4dFtuYW1lXSA9PT0gXCJ1bmRlZmluZWRcIiB8fCBjb250ZXh0W25hbWVdID09PSBudWxsKXtcclxuXHRcdFx0XHRpZighY3JlYXRlKVxyXG5cdFx0XHRcdFx0cmV0dXJuIG51bGw7XHJcblxyXG5cdFx0XHRcdGNvbnRleHRbbmFtZV0gPSB7fVxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRhc3NlcnREZXNjZW5kYWJsZShjb250ZXh0W25hbWVdLCBuYW1lLCBrZXkpO1xyXG5cdFx0XHRjb250ZXh0ID0gY29udGV4dFtuYW1lXTtcclxuXHRcdFx0bmFtZSA9IGtleXMuc2hpZnQoKS50cmltKCk7XHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIG5ldyBPYmplY3RQcm9wZXJ0eShuYW1lLCBjb250ZXh0KTtcclxuXHR9XHJcbn07IiwiLyoqXHJcbiAqIFV0aWxpdGllcyB0byBpbnNwZWN0LCBjb21wYXJlLCBtZXJnZSBhbmQgZmlsdGVyIGphdmFzY3JpcHQgb2JqZWN0cy5cclxuICpcclxuICogU2V2ZXJhbCBmdW5jdGlvbnMgc2hhcmUgb25lIG5vdGlvbiBvZiBkYXRhOiBwcmltaXRpdmVzLCBzaW1wbGUgb2JqZWN0cywgQXJyYXksIERhdGUsIFJlZ0V4cCwgTWFwXHJcbiAqIGFuZCBTZXQuIHtAbGluayBpc1Bvam99IGRlY2lkZXMgd2hldGhlciBhIHZhbHVlIHN0YXlzIHdpdGhpbiBpdCwge0BsaW5rIGVxdWFsUG9qb30gY29tcGFyZXMgdGhvc2VcclxuICogdHlwZXMgYnkgdmFsdWUsIGFuZCB7QGxpbmsgbWVyZ2V9IHRyZWF0cyBldmVyeXRoaW5nIG91dHNpZGUgb2YgaXQgYXMgYSB2YWx1ZSB0byBiZSByZXBsYWNlZC5cclxuICpcclxuICogQG1vZHVsZSBPYmplY3RVdGlsc1xyXG4gKi9cclxuaW1wb3J0IE9iamVjdFByb3BlcnR5IGZyb20gXCIuL09iamVjdFByb3BlcnR5LmpzXCI7XHJcblxyXG4vKipcclxuICogQHByaXZhdGVcclxuICogQHBhcmFtIHtBcnJheX0gYVxyXG4gKiBAcGFyYW0ge0FycmF5fSBiXHJcbiAqIEBwYXJhbSB7V2Vha01hcH0gc2VlbiBwYWlycyBjdXJyZW50bHkgdW5kZXIgY29tcGFyaXNvblxyXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cclxuICovXHJcbmNvbnN0IGVxdWFsQXJyYXkgPSAoYSwgYiwgc2VlbikgPT4ge1xyXG5cdGlmIChhLmxlbmd0aCAhPT0gYi5sZW5ndGgpIHJldHVybiBmYWxzZTtcclxuXHJcblx0Y29uc3QgbGVuZ3RoID0gYS5sZW5ndGg7XHJcblx0Zm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykgaWYgKCFpbnRlcm5hbEVxdWFsUG9qbyhhW2ldLCBiW2ldLCBzZWVuKSkgcmV0dXJuIGZhbHNlO1xyXG5cclxuXHRyZXR1cm4gdHJ1ZTtcclxufTtcclxuXHJcbi8qKlxyXG4gKiBBIHNldCBpcyB1bm9yZGVyZWQsIHNvIGV2ZXJ5IGVudHJ5IG9mIGEgaGFzIHRvIGZpbmQgaXRzIG93biBwYXJ0bmVyIGluIGIuXHJcbiAqXHJcbiAqIEBwcml2YXRlXHJcbiAqIEBwYXJhbSB7U2V0fSBhXHJcbiAqIEBwYXJhbSB7U2V0fSBiXHJcbiAqIEBwYXJhbSB7V2Vha01hcH0gc2VlbiBwYWlycyBjdXJyZW50bHkgdW5kZXIgY29tcGFyaXNvblxyXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cclxuICovXHJcbmNvbnN0IGVxdWFsU2V0ID0gKGEsIGIsIHNlZW4pID0+IHtcclxuXHRpZiAoYS5zaXplICE9PSBiLnNpemUpIHJldHVybiBmYWxzZTtcclxuXHJcblx0Y29uc3QgcmVtYWluaW5nID0gQXJyYXkuZnJvbShiKTtcclxuXHRmb3IgKGNvbnN0IGVudHJ5QSBvZiBhKSB7XHJcblx0XHRjb25zdCBpbmRleCA9IHJlbWFpbmluZy5maW5kSW5kZXgoKGVudHJ5QikgPT4gaW50ZXJuYWxFcXVhbFBvam8oZW50cnlBLCBlbnRyeUIsIHNlZW4pKTtcclxuXHRcdGlmIChpbmRleCA8IDApIHJldHVybiBmYWxzZTtcclxuXHJcblx0XHRyZW1haW5pbmcuc3BsaWNlKGluZGV4LCAxKTtcclxuXHR9XHJcblxyXG5cdHJldHVybiB0cnVlO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIEEgbWFwIGlzIHVub3JkZXJlZCBhcyB3ZWxsIGFuZCBpdHMga2V5cyBtYXkgYmUgb2JqZWN0cywgc28gdGhlIGtleXMgZ2V0IGNvbXBhcmVkIGJ5IHZhbHVlIHRvby5cclxuICpcclxuICogQHByaXZhdGVcclxuICogQHBhcmFtIHtNYXB9IGFcclxuICogQHBhcmFtIHtNYXB9IGJcclxuICogQHBhcmFtIHtXZWFrTWFwfSBzZWVuIHBhaXJzIGN1cnJlbnRseSB1bmRlciBjb21wYXJpc29uXHJcbiAqIEByZXR1cm5zIHtib29sZWFufVxyXG4gKi9cclxuY29uc3QgZXF1YWxNYXAgPSAoYSwgYiwgc2VlbikgPT4ge1xyXG5cdGlmIChhLnNpemUgIT09IGIuc2l6ZSkgcmV0dXJuIGZhbHNlO1xyXG5cclxuXHRjb25zdCByZW1haW5pbmcgPSBBcnJheS5mcm9tKGIpO1xyXG5cdGZvciAoY29uc3QgW2tleUEsIHZhbHVlQV0gb2YgYSkge1xyXG5cdFx0Y29uc3QgaW5kZXggPSByZW1haW5pbmcuZmluZEluZGV4KChba2V5QiwgdmFsdWVCXSkgPT4gaW50ZXJuYWxFcXVhbFBvam8oa2V5QSwga2V5Qiwgc2VlbikgJiYgaW50ZXJuYWxFcXVhbFBvam8odmFsdWVBLCB2YWx1ZUIsIHNlZW4pKTtcclxuXHRcdGlmIChpbmRleCA8IDApIHJldHVybiBmYWxzZTtcclxuXHJcblx0XHRyZW1haW5pbmcuc3BsaWNlKGluZGV4LCAxKTtcclxuXHR9XHJcblxyXG5cdHJldHVybiB0cnVlO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIENvbXBhcmVzIHR3byBvYmplY3RzIGJ5IHByb3RvdHlwZSBhbmQgYnkgdGhlaXIgb3duIGVudW1lcmFibGUgcHJvcGVydGllcy5cclxuICpcclxuICogQHByaXZhdGVcclxuICogQHBhcmFtIHtvYmplY3R9IGFcclxuICogQHBhcmFtIHtvYmplY3R9IGJcclxuICogQHBhcmFtIHtXZWFrTWFwfSBzZWVuIHBhaXJzIGN1cnJlbnRseSB1bmRlciBjb21wYXJpc29uXHJcbiAqIEByZXR1cm5zIHtib29sZWFufVxyXG4gKi9cclxuY29uc3QgZXF1YWxPYmplY3QgPSAoYSwgYiwgc2VlbikgPT4ge1xyXG5cdGlmIChPYmplY3QuZ2V0UHJvdG90eXBlT2YoYSkgIT09IE9iamVjdC5nZXRQcm90b3R5cGVPZihiKSkgcmV0dXJuIGZhbHNlO1xyXG5cclxuXHRjb25zdCBwcm9wZXJ0aWVzQSA9IE9iamVjdC5rZXlzKGEpO1xyXG5cdGNvbnN0IHByb3BlcnRpZXNCID0gT2JqZWN0LmtleXMoYik7XHJcblx0aWYgKHByb3BlcnRpZXNBLmxlbmd0aCAhPT0gcHJvcGVydGllc0IubGVuZ3RoKSByZXR1cm4gZmFsc2U7XHJcblxyXG5cdGZvciAoY29uc3Qga2V5IG9mIHByb3BlcnRpZXNBKSB7XHJcblx0XHQvLyBlcXVhbCBrZXkgY291bnRzIGFsb25lIHdvdWxkIGxldCB7eDoxLCB5OnVuZGVmaW5lZH0gcGFzcyBhZ2FpbnN0IHt4OjEsIHo6dW5kZWZpbmVkfVxyXG5cdFx0aWYgKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYiwga2V5KSkgcmV0dXJuIGZhbHNlO1xyXG5cdFx0aWYgKCFpbnRlcm5hbEVxdWFsUG9qbyhhW2tleV0sIGJba2V5XSwgc2VlbikpIHJldHVybiBmYWxzZTtcclxuXHR9XHJcblxyXG5cdHJldHVybiB0cnVlO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIEEgY3ljbGljIHN0cnVjdHVyZSBjYW4gb25seSBiZSBkZWNpZGVkIGNvLWluZHVjdGl2ZWx5OiBhIHBhaXIgYWxyZWFkeSB1bmRlciBjb21wYXJpc29uIGNvdW50cyBhc1xyXG4gKiBlcXVhbCwgb3RoZXJ3aXNlIHRoZSB3YWxrIHdvdWxkIG5ldmVyIGNvbWUgYmFjay5cclxuICpcclxuICogQHByaXZhdGVcclxuICogQHBhcmFtIHtXZWFrTWFwfSBzZWVuIHBhaXJzIGN1cnJlbnRseSB1bmRlciBjb21wYXJpc29uXHJcbiAqIEBwYXJhbSB7b2JqZWN0fSBhXHJcbiAqIEBwYXJhbSB7b2JqZWN0fSBiXHJcbiAqIEByZXR1cm5zIHtib29sZWFufSB0cnVlIHdoZW4gdGhpcyBwYWlyIGlzIGFscmVhZHkgYmVpbmcgY29tcGFyZWQgZnVydGhlciB1cCB0aGUgc3RhY2tcclxuICovXHJcbmNvbnN0IGlzQ29tcGFyaW5nID0gKHNlZW4sIGEsIGIpID0+IHtcclxuXHRjb25zdCBwYXJ0bmVycyA9IHNlZW4uZ2V0KGEpO1xyXG5cdHJldHVybiAhIXBhcnRuZXJzICYmIHBhcnRuZXJzLmhhcyhiKTtcclxufTtcclxuXHJcbi8qKlxyXG4gKiBOb3RlcyBhIHBhaXIgYXMgYmVpbmcgY29tcGFyZWQsIHNvIGEgY3ljbGUgcnVubmluZyB0aHJvdWdoIGl0IHRlcm1pbmF0ZXMuXHJcbiAqXHJcbiAqIEBwcml2YXRlXHJcbiAqIEBwYXJhbSB7V2Vha01hcH0gc2VlbiBwYWlycyBjdXJyZW50bHkgdW5kZXIgY29tcGFyaXNvblxyXG4gKiBAcGFyYW0ge29iamVjdH0gYVxyXG4gKiBAcGFyYW0ge29iamVjdH0gYlxyXG4gKiBAcmV0dXJucyB7dm9pZH1cclxuICovXHJcbmNvbnN0IHJlbWVtYmVyQ29tcGFyaW5nID0gKHNlZW4sIGEsIGIpID0+IHtcclxuXHRjb25zdCBwYXJ0bmVycyA9IHNlZW4uZ2V0KGEpO1xyXG5cdGlmIChwYXJ0bmVycykgcGFydG5lcnMuYWRkKGIpO1xyXG5cdGVsc2Ugc2Vlbi5zZXQoYSwgbmV3IFdlYWtTZXQoW2JdKSk7XHJcbn07XHJcblxyXG4vKipcclxuICogQ2hlY2tzIHdoZXRoZXIgYSB2YWx1ZSBpcyBudWxsIG9yIHVuZGVmaW5lZC5cclxuICpcclxuICogVmFsdWVIZWxwZXIubm9WYWx1ZSBhbnN3ZXJzIHRoZSBzYW1lIHF1ZXN0aW9uLiBCb3RoIGFyZSBrZXB0IG9uIHB1cnBvc2UsIHNvIFZhbHVlSGVscGVyIHN0YXlzIGZyZWVcclxuICogb2YgYSBkZXBlbmRlbmN5IG9uIHRoaXMgbW9kdWxlIC0gc2VlIHRoZSBub3RlIHRoZXJlLlxyXG4gKlxyXG4gKiBAcGFyYW0geyp9IG9iamVjdCB0aGUgdmFsdWUgdG8gYmUgdGVzdGluZ1xyXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cclxuICovXHJcbmV4cG9ydCBjb25zdCBpc051bGxPclVuZGVmaW5lZCA9IChvYmplY3QpID0+IHtcclxuXHRyZXR1cm4gb2JqZWN0ID09IG51bGwgfHwgdHlwZW9mIG9iamVjdCA9PT0gXCJ1bmRlZmluZWRcIjtcclxufTtcclxuXHJcbi8qKlxyXG4gKiBDaGVja3Mgd2hldGhlciBhIHZhbHVlIGlzIGEgcHJpbWl0aXZlLlxyXG4gKlxyXG4gKiBudWxsIGFuZCB1bmRlZmluZWQgY291bnQgYXMgcHJpbWl0aXZlcy4gQSBzeW1ib2wgZG9lcyBub3QgLSBpdCBpcyB0cmVhdGVkIGFzIGFuIG9wYXF1ZSB2YWx1ZVxyXG4gKiB0aHJvdWdob3V0IHRoaXMgbW9kdWxlLCBzbyB0aGF0IHtAbGluayBpc1Bvam99IGtlZXBzIHJlamVjdGluZyBpdCBhcyBkYXRhLlxyXG4gKlxyXG4gKiBAcGFyYW0geyp9IG9iamVjdCB0aGUgdmFsdWUgdG8gYmUgdGVzdGluZ1xyXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cclxuICovXHJcbmV4cG9ydCBjb25zdCBpc1ByaW1pdGl2ZSA9IChvYmplY3QpID0+IHtcclxuXHRpZiAob2JqZWN0ID09IG51bGwpIHJldHVybiB0cnVlO1xyXG5cclxuXHRjb25zdCB0eXBlID0gdHlwZW9mIG9iamVjdDtcclxuXHRzd2l0Y2ggKHR5cGUpIHtcclxuXHRcdGNhc2UgXCJudW1iZXJcIjpcclxuXHRcdGNhc2UgXCJiaWdpbnRcIjpcclxuXHRcdGNhc2UgXCJib29sZWFuXCI6XHJcblx0XHRjYXNlIFwic3RyaW5nXCI6XHJcblx0XHRjYXNlIFwidW5kZWZpbmVkXCI6XHJcblx0XHRcdHJldHVybiB0cnVlO1xyXG5cdH1cclxuXHJcblx0cmV0dXJuIGZhbHNlO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIENoZWNrcyB3aGV0aGVyIGEgdmFsdWUgaXMgYW4gb2JqZWN0LlxyXG4gKlxyXG4gKiBFdmVyeSBvYmplY3QgY291bnRzLCBBcnJheSwgTWFwLCBEYXRlIGFuZCBjbGFzcyBpbnN0YW5jZXMgaW5jbHVkZWQuIFVzZSB7QGxpbmsgaXNQb2pvfSB0byBhc2sgZm9yXHJcbiAqIGEgc2ltcGxlIGRhdGEgb2JqZWN0IGluc3RlYWQuXHJcbiAqXHJcbiAqIEBwYXJhbSB7Kn0gb2JqZWN0IHRoZSB2YWx1ZSB0byBiZSB0ZXN0aW5nXHJcbiAqIEByZXR1cm5zIHtib29sZWFufVxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGlzT2JqZWN0ID0gKG9iamVjdCkgPT4ge1xyXG5cdGlmIChpc051bGxPclVuZGVmaW5lZChvYmplY3QpKSByZXR1cm4gZmFsc2U7XHJcblxyXG5cdHJldHVybiB0eXBlb2Ygb2JqZWN0ID09PSBcIm9iamVjdFwiO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIENvbXBhcmVzIHR3byB2YWx1ZXMgYnkgdmFsdWUuXHJcbiAqXHJcbiAqIFRoZSB0eXBlcyBjb21wYXJlZCBieSB2YWx1ZSBhcmUgdGhlIG9uZXMge0BsaW5rIGlzUG9qb30gYWNjZXB0cyBhcyBkYXRhOiBwcmltaXRpdmVzLCBzaW1wbGVcclxuICogb2JqZWN0cywgQXJyYXksIERhdGUsIFJlZ0V4cCwgTWFwIGFuZCBTZXQuIEEgRGF0ZSBpcyBjb21wYXJlZCBieSBpdHMgdGltZSwgYSBSZWdFeHAgYnkgc291cmNlIGFuZFxyXG4gKiBmbGFncy4gU2V0IGFuZCBNYXAgYXJlIHVub3JkZXJlZCwgc28gdGhlaXIgZW50cmllcyBhcmUgbWF0Y2hlZCBieSB2YWx1ZSBpbnN0ZWFkIG9mIGJ5IHBvc2l0aW9uLFxyXG4gKiBhbmQgdGhlIGtleXMgb2YgYSBNYXAgdGFrZSBwYXJ0IGluIHRoYXQgY29tcGFyaXNvbi5cclxuICpcclxuICogU2ltcGxlIG9iamVjdHMgYW5kIGNsYXNzIGluc3RhbmNlcyBuZWVkIHRoZSBzYW1lIHByb3RvdHlwZSBhbmQgdGhlIHNhbWUgb3duIGVudW1lcmFibGVcclxuICogcHJvcGVydGllcy4gRXZlcnkgb3RoZXIgb2JqZWN0IC0gRXJyb3IsIFByb21pc2UsIFdlYWtNYXAgYW5kIHRoZSBsaWtlIC0ga2VlcHMgaXRzIHN0YXRlIG91dCBvZlxyXG4gKiByZWFjaCwgc28gdGhvc2UgY29tcGFyZSBieSBpZGVudGl0eSBvbmx5LiBGdW5jdGlvbnMgYW5kIHN5bWJvbHMgZG8gYXMgd2VsbC5cclxuICpcclxuICogQ3ljbGljIHN0cnVjdHVyZXMgYXJlIHN1cHBvcnRlZC5cclxuICpcclxuICogQHBhcmFtIHsqfSBhXHJcbiAqIEBwYXJhbSB7Kn0gYlxyXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cclxuICpcclxuICogQGV4YW1wbGVcclxuICogZXF1YWxQb2pvKHthIDogWzEsIDJdfSwge2EgOiBbMSwgMl19KTsgICAgICAgICAgICAgICAvLyB0cnVlXHJcbiAqIGVxdWFsUG9qbyhuZXcgU2V0KFsxLCAyXSksIG5ldyBTZXQoWzIsIDFdKSk7ICAgICAgICAgLy8gdHJ1ZSwgYSBzZXQgaXMgdW5vcmRlcmVkXHJcbiAqIGVxdWFsUG9qbyhuZXcgRGF0ZSgwKSwgbmV3IERhdGUoMSkpOyAgICAgICAgICAgICAgICAgLy8gZmFsc2VcclxuICogZXF1YWxQb2pvKG5ldyBFcnJvcihcInhcIiksIG5ldyBFcnJvcihcInhcIikpOyAgICAgICAgICAgLy8gZmFsc2UsIGNvbXBhcmVkIGJ5IGlkZW50aXR5XHJcbiAqL1xyXG5leHBvcnQgY29uc3QgZXF1YWxQb2pvID0gKGEsIGIpID0+IGludGVybmFsRXF1YWxQb2pvKGEsIGIsIG5ldyBXZWFrTWFwKCkpO1xyXG5cclxuXHJcbi8qKlxyXG4qIEBwYXJhbSB7Kn0gYVxyXG4gKiBAcGFyYW0geyp9IGJcclxuICogQHBhcmFtIHtXZWFrTWFwfSBzZWVuIGludGVybmFsLCB0cmFja3MgdGhlIHBhaXJzIGN1cnJlbnRseSB1bmRlciBjb21wYXJpc29uXHJcbiAqIEByZXR1cm5zIHtib29sZWFufVxyXG4gKi9cclxuY29uc3QgaW50ZXJuYWxFcXVhbFBvam8gPSAoYSwgYiwgc2VlbikgPT4ge1xyXG5cdGlmIChpc051bGxPclVuZGVmaW5lZChhKSB8fCBpc051bGxPclVuZGVmaW5lZChiKSkgcmV0dXJuIGEgPT09IGI7XHJcblx0aWYgKGEgPT09IGIpIHJldHVybiB0cnVlO1xyXG5cdGlmIChpc1ByaW1pdGl2ZShhKSB8fCBpc1ByaW1pdGl2ZShiKSkgcmV0dXJuIGEgPT09IGI7XHJcblxyXG5cdGNvbnN0IHR5cGVBID0gdHlwZW9mIGE7XHJcblx0aWYgKHR5cGVBICE9PSB0eXBlb2YgYikgcmV0dXJuIGZhbHNlO1xyXG5cdGlmICh0eXBlQSAhPT0gXCJvYmplY3RcIikgcmV0dXJuIGEgPT09IGI7IC8vIGZ1bmN0aW9uIGFuZCBzeW1ib2xcclxuXHJcblx0aWYgKGlzQ29tcGFyaW5nKHNlZW4sIGEsIGIpKSByZXR1cm4gdHJ1ZTtcclxuXHRyZW1lbWJlckNvbXBhcmluZyhzZWVuLCBhLCBiKTtcclxuXHJcblx0aWYoYSBpbnN0YW5jZW9mIERhdGUpIHJldHVybiAgYiBpbnN0YW5jZW9mIERhdGUgPyBPYmplY3QuaXMoYS5nZXRUaW1lKCksIGIuZ2V0VGltZSgpKSA6IGZhbHNlO1xyXG5cdGVsc2UgaWYoYSBpbnN0YW5jZW9mIFJlZ0V4cCkgcmV0dXJuIGIgaW5zdGFuY2VvZiBSZWdFeHAgPyAoYS5zb3VyY2UgPT09IGIuc291cmNlICYmIGEuZmxhZ3MgPT09IGIuZmxhZ3MpIDogZmFsc2U7XHJcblx0ZWxzZSBpZihhIGluc3RhbmNlb2YgQXJyYXkpIHJldHVybiBiIGluc3RhbmNlb2YgQXJyYXkgPyBlcXVhbEFycmF5KGEsIGIsIHNlZW4pIDogZmFsc2U7XHJcblx0ZWxzZSBpZihhIGluc3RhbmNlb2YgU2V0KSByZXR1cm4gYiBpbnN0YW5jZW9mIFNldCA/IGVxdWFsU2V0KGEsIGIsIHNlZW4pIDogZmFsc2U7XHJcblx0ZWxzZSBpZihhIGluc3RhbmNlb2YgTWFwKSByZXR1cm4gYiBpbnN0YW5jZW9mIE1hcCA/IGVxdWFsTWFwKGEsIGIsIHNlZW4pIDogZmFsc2U7XHJcblx0ZWxzZSBpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGEpICE9PSBcIltvYmplY3QgT2JqZWN0XVwiKSByZXR1cm4gZmFsc2U7XHRcclxuXHRlbHNlIHJldHVybiBlcXVhbE9iamVjdChhLCBiLCBzZWVuKTtcclxufTtcclxuXHJcbi8qKlxyXG4gKiBBIHBsYWluIG9iamVjdCBvd25zIGVpdGhlciBubyBwcm90b3R5cGUgYXQgYWxsIG9yIGEgcHJvdG90eXBlIHRoYXQgaXRzZWxmIGhhcyBub25lLiBDaGVja2luZyB0aGVcclxuICogY2hhaW4gbGVuZ3RoIGluc3RlYWQgb2YgY29tcGFyaW5nIGFnYWluc3QgT2JqZWN0LnByb3RvdHlwZSBrZWVwcyB0aGlzIHdvcmtpbmcgYWNyb3NzIHJlYWxtcyxcclxuICogd2hlcmUgYW4gaWZyYW1lIGJyaW5ncyBpdHMgb3duIE9iamVjdC5wcm90b3R5cGUuXHJcbiAqXHJcbiAqIEBwcml2YXRlXHJcbiAqIEBwYXJhbSB7Kn0gb2JqZWN0XHJcbiAqIEByZXR1cm5zIHtib29sZWFufVxyXG4gKi9cclxuY29uc3QgaXNQbGFpbk9iamVjdCA9IChvYmplY3QpID0+IHtcclxuXHRpZiAob2JqZWN0ID09PSBudWxsIHx8IHR5cGVvZiBvYmplY3QgIT09IFwib2JqZWN0XCIpIHJldHVybiBmYWxzZTtcclxuXHRjb25zdCBwcm90b3R5cGUgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2Yob2JqZWN0KTtcclxuXHRyZXR1cm4gcHJvdG90eXBlID09PSBudWxsIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihwcm90b3R5cGUpID09PSBudWxsO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIFdhbGtzIGEgdmFsdWUgYW5kIGRlY2lkZXMgd2hldGhlciBldmVyeXRoaW5nIHJlYWNoYWJsZSBmcm9tIGl0IGlzIGRhdGEuXHJcbiAqXHJcbiAqIEBwcml2YXRlXHJcbiAqIEBwYXJhbSB7Kn0gdmFsdWVcclxuICogQHBhcmFtIHtXZWFrU2V0fSBbc2Vlbl0gdmFsdWVzIGFscmVhZHkgd2Fsa2VkLCBjbG9zZXMgY3ljbGVzXHJcbiAqIEByZXR1cm5zIHtib29sZWFufVxyXG4gKi9cclxuY29uc3QgaXNEYXRhVmFsdWUgPSAodmFsdWUsIHNlZW4gPSBuZXcgV2Vha1NldCgpKSA9PiB7XHJcblx0aWYgKGlzUHJpbWl0aXZlKHZhbHVlKSkgcmV0dXJuIHRydWU7XHJcblx0ZWxzZSBpZiAodmFsdWUgaW5zdGFuY2VvZiBEYXRlKSByZXR1cm4gdHJ1ZTtcclxuXHRlbHNlIGlmICh2YWx1ZSBpbnN0YW5jZW9mIFJlZ0V4cCkgcmV0dXJuIHRydWU7XHJcblxyXG5cdGlmIChzZWVuLmhhcyh2YWx1ZSkpIHJldHVybiB0cnVlO1xyXG5cdHNlZW4uYWRkKHZhbHVlKTtcclxuXHJcblx0aWYgKHZhbHVlIGluc3RhbmNlb2YgQXJyYXkpIHJldHVybiB2YWx1ZS5ldmVyeSgoZW50cnkpID0+IGlzRGF0YVZhbHVlKGVudHJ5LCBzZWVuKSk7XHJcblx0ZWxzZSBpZiAodmFsdWUgaW5zdGFuY2VvZiBNYXApIHtcclxuXHRcdGZvciAoY29uc3QgW2tleSwgZW50cnldIG9mIHZhbHVlKSB7XHJcblx0XHRcdGlmICghaXNEYXRhVmFsdWUoa2V5LCBzZWVuKSB8fCAhaXNEYXRhVmFsdWUoZW50cnksIHNlZW4pKSByZXR1cm4gZmFsc2U7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gdHJ1ZTtcclxuXHR9IGVsc2UgaWYgKHZhbHVlIGluc3RhbmNlb2YgU2V0KSB7XHJcblx0XHRmb3IgKGNvbnN0IGVudHJ5IG9mIHZhbHVlKSB7XHJcblx0XHRcdGlmICghaXNEYXRhVmFsdWUoZW50cnksIHNlZW4pKSByZXR1cm4gZmFsc2U7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gdHJ1ZTtcclxuXHR9IGVsc2UgaWYgKCFpc1BsYWluT2JqZWN0KHZhbHVlKSlcclxuXHRcdHJldHVybiBmYWxzZTsgLy8gY2xhc3MgaW5zdGFuY2VzIGFuZCBldmVyeSBvdGhlciBleG90aWMgb2JqZWN0XHJcblx0ZWxzZSB7XHJcblx0XHRmb3IgKGNvbnN0IGtleSBvZiBPYmplY3Qua2V5cyh2YWx1ZSkpIHtcclxuXHRcdFx0aWYgKCFpc0RhdGFWYWx1ZSh2YWx1ZVtrZXldLCBzZWVuKSkgcmV0dXJuIGZhbHNlO1xyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiB0cnVlO1xyXG5cdH1cclxufTtcclxuXHJcbi8qKlxyXG4gKiBDaGVja3Mgd2hldGhlciBhbiBvYmplY3QgaXMgYSBwdXJlIGRhdGEgb2JqZWN0LlxyXG4gKlxyXG4gKiBUaGUgb2JqZWN0IGl0c2VsZiBoYXMgdG8gYmUgYSBzaW1wbGUgb2JqZWN0IC0gbm8gQXJyYXksIE1hcCBvciBzb21ldGhpbmcgZWxzZS4gRXZlcnkgdmFsdWVcclxuICogcmVhY2hhYmxlIGZyb20gaXQgaGFzIHRvIGJlIGRhdGEgYXMgd2VsbDogcHJpbWl0aXZlcywgc2ltcGxlIG9iamVjdHMsIEFycmF5LCBEYXRlLCBSZWdFeHAsIE1hcCBvclxyXG4gKiBTZXQuIEZ1bmN0aW9ucyBhbmQgY2xhc3MgaW5zdGFuY2VzIGFyZSByZWplY3RlZCBhdCBhbnkgZGVwdGgsIGluY2x1ZGluZyBpbnNpZGUgYXJyYXlzIGFuZCBpbnNpZGVcclxuICogdGhlIGtleXMgYW5kIHZhbHVlcyBvZiBhIE1hcCBvciBTZXQuXHJcbiAqXHJcbiAqIE9ubHkgb3duIGVudW1lcmFibGUgcHJvcGVydGllcyBhcmUgaW5zcGVjdGVkLiBDeWNsaWMgcmVmZXJlbmNlcyBhcmUgYWxsb3dlZC5cclxuICpcclxuICogQHBhcmFtIHsqfSBvYmplY3QgdGhlIG9iamVjdCB0byBiZSB0ZXN0aW5nXHJcbiAqIEByZXR1cm5zIHtib29sZWFufVxyXG4gKlxyXG4gKiBAZXhhbXBsZVxyXG4gKiBpc1Bvam8oe2EgOiB7YiA6IFsxLCBuZXcgRGF0ZSgpXX19KTsgICAvLyB0cnVlXHJcbiAqIGlzUG9qbyh7YSA6ICgpID0+IHt9fSk7ICAgICAgICAgICAgICAgIC8vIGZhbHNlLCBhIGZ1bmN0aW9uIGlzIG5vIGRhdGFcclxuICogaXNQb2pvKHthIDogW3tiIDogbmV3IEZvbygpfV19KTsgICAgICAgLy8gZmFsc2UsIHJlamVjdGVkIGF0IGFueSBkZXB0aFxyXG4gKiBpc1Bvam8oW10pOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBmYWxzZSwgdGhlIG9iamVjdCBpdHNlbGYgaGFzIHRvIGJlIGEgc2ltcGxlIG9uZVxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGlzUG9qbyA9IChvYmplY3QpID0+IHtcclxuXHRpZiAoaXNOdWxsT3JVbmRlZmluZWQob2JqZWN0KSB8fCAhaXNQbGFpbk9iamVjdChvYmplY3QpKSByZXR1cm4gZmFsc2U7XHJcblxyXG5cdHJldHVybiBpc0RhdGFWYWx1ZShvYmplY3QpO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIEFwcGVuZHMgYSBwcm9wZXJ0eSB2YWx1ZSB0byBhbiBvYmplY3QuIElmIHRoZSBwcm9wZXJ0eSBhbHJlYWR5IGhvbGRzIGEgdmFsdWUsIGl0IGlzIGNvbnZlcnRlZFxyXG4gKiBpbnRvIGFuIGFycmF5IGNhcnJ5aW5nIGJvdGguIEFuIHVuZGVmaW5lZCB2YWx1ZSBpcyBpZ25vcmVkLlxyXG4gKlxyXG4gKiBUaGUga2V5IG1heSBhZGRyZXNzIGEgbmVzdGVkIHByb3BlcnR5IGJ5IGEgZG90dGVkIHBhdGgsIG1pc3Npbmcgc3RlcHMgYXJlIGNyZWF0ZWQgb24gdGhlIHdheS5cclxuICpcclxuICogQHBhcmFtIHtzdHJpbmd9IGFLZXkgbmFtZSBvZiB0aGUgcHJvcGVydHksIGEgZG90dGVkIHBhdGggYWRkcmVzc2VzIGEgbmVzdGVkIG9uZVxyXG4gKiBAcGFyYW0geyp9IGFEYXRhIHByb3BlcnR5IHZhbHVlXHJcbiAqIEBwYXJhbSB7b2JqZWN0fSBhT2JqZWN0IHRoZSBvYmplY3QgdG8gYXBwZW5kIHRoZSBwcm9wZXJ0eSB0b1xyXG4gKiBAcmV0dXJucyB7b2JqZWN0fSB0aGUgY2hhbmdlZCBvYmplY3RcclxuICpcclxuICogQGV4YW1wbGVcclxuICogYXBwZW5kKFwiYVwiLCAxLCB7fSk7ICAgICAgICAgICAgIC8vIHthIDogMX1cclxuICogYXBwZW5kKFwiYVwiLCAyLCB7YSA6IDF9KTsgICAgICAgIC8vIHthIDogWzEsIDJdfVxyXG4gKiBhcHBlbmQoXCJhLmJcIiwgMSwge30pOyAgICAgICAgICAgLy8ge2EgOiB7YiA6IDF9fVxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGFwcGVuZCA9IChhS2V5LCBhRGF0YSwgYU9iamVjdCkgPT4ge1xyXG5cdGlmICh0eXBlb2YgYURhdGEgIT09IFwidW5kZWZpbmVkXCIpIHtcclxuXHRcdGNvbnN0IHByb3BlcnR5ID0gT2JqZWN0UHJvcGVydHkubG9hZChhT2JqZWN0LCBhS2V5LCB0cnVlKTtcclxuXHRcdHByb3BlcnR5LmFwcGVuZCA9IGFEYXRhO1xyXG5cdH1cclxuXHRyZXR1cm4gYU9iamVjdDtcclxufTtcclxuXHJcbi8qKlxyXG4gKiBPd24gZW51bWVyYWJsZSBrZXlzLCBzdHJpbmdzIGFuZCBzeW1ib2xzIGFsaWtlIC0gdGhlIHNhbWUgc2V0IE9iamVjdC5hc3NpZ24gY29waWVzLlxyXG4gKlxyXG4gKiBAcHJpdmF0ZVxyXG4gKiBAcGFyYW0geyp9IHNvdXJjZVxyXG4gKiBAcmV0dXJucyB7QXJyYXk8c3RyaW5nfHN5bWJvbD59XHJcbiAqL1xyXG5jb25zdCBhc3NpZ25hYmxlS2V5cyA9IChzb3VyY2UpID0+IHtcclxuXHRjb25zdCBvYmplY3QgPSBPYmplY3Qoc291cmNlKTtcclxuXHRyZXR1cm4gUmVmbGVjdC5vd25LZXlzKG9iamVjdCkuZmlsdGVyKChrZXkpID0+IE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChvYmplY3QsIGtleSkpO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIE1lcmdlcyBvYmplY3RzIGludG8gYSB0YXJnZXQgb2JqZWN0IC0gYSByZWN1cnNpdmUgT2JqZWN0LmFzc2lnbi4gSXQgc3RlcHMgaW50byBvYmplY3RzIGFuZCBzdWJcclxuICogb2JqZWN0cy4gRXZlcnkgb3RoZXIgdmFsdWUgaXMgcmVwbGFjZWQgYnkgdGhlIHZhbHVlIGZyb20gdGhlIHNvdXJjZSBvYmplY3QuXHJcbiAqXHJcbiAqIExpa2UgT2JqZWN0LmFzc2lnbiBpdCBjb3BpZXMgb3duIGVudW1lcmFibGUgcHJvcGVydGllcyAtIHN0cmluZyBhbmQgc3ltYm9sIGtleXMgYWxpa2UgLSwgaWdub3Jlc1xyXG4gKiBudWxsIGFuZCB1bmRlZmluZWQgc291cmNlcyBhbmQgcmV0dXJucyB0aGUgdGFyZ2V0LiBVbmxpa2UgT2JqZWN0LmFzc2lnbiBpdCBzdGVwcyBpbnRvIGEgcHJvcGVydHlcclxuICogd2hlbiB0YXJnZXQgYW5kIHNvdXJjZSBib3RoIGhvbGQgYW4gb2JqZWN0LCBpbnN0ZWFkIG9mIHJlcGxhY2luZyBpdC5cclxuICpcclxuICogQSBjbGFzcyBpbnN0YW5jZSBjb3VudHMgYXMgYW4gb2JqZWN0IGhlcmUgYW5kIGlzIG1lcmdlZCBwcm9wZXJ0eSBieSBwcm9wZXJ0eSBqdXN0IGxpa2UgYSBzaW1wbGVcclxuICogb25lLiBUaGUgdGFyZ2V0IGtlZXBzIGl0cyBvd24gcHJvdG90eXBlLCBvbmx5IHRoZSBwcm9wZXJ0aWVzIG9mIHRoZSBzb3VyY2UgYXJlIGFwcGxpZWQgdG8gaXQgLSBhXHJcbiAqIG1lcmdlIG5ldmVyIHR1cm5zIHRoZSB0YXJnZXQgaW50byBhbiBpbnN0YW5jZSBvZiB0aGUgY2xhc3Mgb2YgdGhlIHNvdXJjZS5cclxuICpcclxuICogQW4gQXJyYXksIFNldCwgTWFwLCBEYXRlIG9yIFJlZ0V4cCBpcyBhbHdheXMgcmVwbGFjZWQgYXMgYSB3aG9sZSwgbmV2ZXIgbWVyZ2VkIGVudHJ5IGJ5IGVudHJ5LlxyXG4gKiBUaGF0IGFscmVhZHkgYXBwbGllcyB3aGVuIG9ubHkgb25lIG9mIGJvdGggc2lkZXMgaG9sZHMgb25lLiBUaGUgcmVzdWx0IHRoZXJlZm9yZSBjYXJyaWVzIHRoZVxyXG4gKiBjb250YWluZXIgb2YgdGhlIHNvdXJjZSB3aXRoIGl0cyBvd24gbGVuZ3RoIC0gbm90aGluZyBvZiB0aGUgdGFyZ2V0IHN1cnZpdmVzIGl0LCBub3QgZXZlbiBhblxyXG4gKiBvYmplY3Qgc2l0dGluZyBhdCB0aGUgc2FtZSBpbmRleCBvciB1bmRlciB0aGUgc2FtZSBrZXkuXHJcbiAqXHJcbiAqIEEga2V5IHdob3NlIHZhbHVlIGlzIGEgc3ltYm9sIGlzIHNraXBwZWQsIG9uIHRoZSB0YXJnZXQgc2lkZSBhcyB3ZWxsIGFzIG9uIHRoZSBzb3VyY2Ugc2lkZS4gQVxyXG4gKiBzeW1ib2wgY2FycmllcyBubyBkYXRhLCBzbyBzdWNoIGEgcHJvcGVydHkgaXMgbGVmdCB1bnRvdWNoZWQuXHJcbiAqXHJcbiAqIFRoZSBrZXkgX19wcm90b19fIGlzIHNraXBwZWQuIE9iamVjdC5hc3NpZ24gd291bGQgb25seSByZXBvaW50IHRoZSBwcm90b3R5cGUgb2YgdGhlIHRhcmdldCwgYnV0XHJcbiAqIG1lcmdpbmcgaW50byBpdCB3b3VsZCB3YWxrIGludG8gT2JqZWN0LnByb3RvdHlwZSBhbmQgbGVhayBpbnRvIGV2ZXJ5IG9iamVjdC5cclxuICpcclxuICogVGhlIHRhcmdldCBpcyBtb2RpZmllZCBpbiBwbGFjZS4gQSBzdWIgb2JqZWN0IG9mIGEgc291cmNlIHRoYXQgaGFzIG5vIGNvdW50ZXJwYXJ0IGluIHRoZSB0YXJnZXQgaXNcclxuICogdGFrZW4gb3ZlciBieSByZWZlcmVuY2UsIGp1c3QgbGlrZSBPYmplY3QuYXNzaWduIGRvZXMuXHJcbiAqXHJcbiAqIEBwYXJhbSB7b2JqZWN0fSB0YXJnZXQgdGhlIHRhcmdldCBvYmplY3QgdG8gbWVyZ2UgaW50bywgYSBuZXcgb2JqZWN0IHdoZW4gZmFsc3lcclxuICogQHBhcmFtIHsuLi5vYmplY3R9IHNvdXJjZXMgdGhlIHNvdXJjZSBvYmplY3RzLCBhcHBsaWVkIGluIG9yZGVyXHJcbiAqIEByZXR1cm5zIHtvYmplY3R9IHRoZSB0YXJnZXQgb2JqZWN0XHJcbiAqXHJcbiAqIEBleGFtcGxlXHJcbiAqIG1lcmdlKHthIDogMX0sIHtiIDogMn0pOyAgICAgICAgICAgICAgICAgICAgICAgICAgLy8ge2EgOiAxLCBiIDogMn1cclxuICogbWVyZ2Uoe2EgOiB7eCA6IDF9fSwge2EgOiB7eSA6IDJ9fSk7ICAgICAgICAgICAgICAvLyB7YSA6IHt4IDogMSwgeSA6IDJ9fVxyXG4gKiBtZXJnZSh7YSA6IFsxLCAyLCAzXX0sIHthIDogWzldfSk7ICAgICAgICAgICAgICAgIC8vIHthIDogWzldfSwgcmVwbGFjZWQgYXMgYSB3aG9sZVxyXG4gKiBtZXJnZSh7YSA6IG5ldyBGb28oMSl9LCB7YSA6IG5ldyBCYXIoMil9KTsgICAgICAgIC8vIGEgc3RheXMgYSBGb28sIGNhcnJ5aW5nIHRoZSBwcm9wZXJ0aWVzIG9mIGJvdGhcclxuICogbWVyZ2Uoe30sIHNvdXJjZTEsIHNvdXJjZTIsIHNvdXJjZTMpO1xyXG4gKi9cclxuZXhwb3J0IGNvbnN0IG1lcmdlID0gKHRhcmdldCwgLi4uc291cmNlcykgPT4ge1xyXG5cdGlmICghdGFyZ2V0KSB0YXJnZXQgPSB7fTtcclxuXHJcblx0c291cmNlc1xyXG5cdFx0LmZpbHRlcigoc291cmNlKSA9PiAhaXNOdWxsT3JVbmRlZmluZWQoc291cmNlKSlcclxuXHRcdC5mb3JFYWNoKChzb3VyY2UpID0+IHtcclxuXHRcdFx0Y29uc3Qga2V5cyA9IGFzc2lnbmFibGVLZXlzKHNvdXJjZSk7XHJcblx0XHRcdGtleXNcclxuXHRcdFx0XHQuZmlsdGVyKChrZXkpID0+IGtleSAhPSBcIl9fcHJvdG9fX1wiKVxyXG5cdFx0XHRcdC5maWx0ZXIoKGtleSkgPT4gdHlwZW9mIHRhcmdldFtrZXldICE9PSBcInN5bWJvbFwiKVxyXG5cdFx0XHRcdC5maWx0ZXIoKGtleSkgPT4gdHlwZW9mIHNvdXJjZVtrZXldICE9PSBcInN5bWJvbFwiKVxyXG5cdFx0XHRcdC5mb3JFYWNoKChrZXkpID0+IHtcclxuXHRcdFx0XHRcdGNvbnN0IHZhbHVlID0gc291cmNlW2tleV07XHJcblx0XHRcdFx0XHRjb25zdCBjdXJyZW50ID0gdGFyZ2V0W2tleV07XHJcblxyXG5cdFx0XHRcdFx0aWYoY3VycmVudCA9PSBudWxsICkgdGFyZ2V0W2tleV0gPSB2YWx1ZTtcclxuXHRcdFx0XHRcdGVsc2UgaWYoIHR5cGVvZiBjdXJyZW50ICE9PSB0eXBlb2YgdmFsdWUgKSB0YXJnZXRba2V5XSA9IHZhbHVlO1xyXG5cdFx0XHRcdFx0ZWxzZSBpZiAoY3VycmVudCBpbnN0YW5jZW9mIEFycmF5IHx8IHZhbHVlIGluc3RhbmNlb2YgQXJyYXkpIHRhcmdldFtrZXldID0gdmFsdWU7XHJcblx0XHRcdFx0XHRlbHNlIGlmIChjdXJyZW50IGluc3RhbmNlb2YgU2V0IHx8IHZhbHVlIGluc3RhbmNlb2YgU2V0KSB0YXJnZXRba2V5XSA9IHZhbHVlO1xyXG5cdFx0XHRcdFx0ZWxzZSBpZiAoY3VycmVudCBpbnN0YW5jZW9mIE1hcCB8fCB2YWx1ZSBpbnN0YW5jZW9mIE1hcCkgdGFyZ2V0W2tleV0gPSB2YWx1ZTtcclxuXHRcdFx0XHRcdGVsc2UgaWYgKGN1cnJlbnQgaW5zdGFuY2VvZiBEYXRlIHx8IHZhbHVlIGluc3RhbmNlb2YgRGF0ZSkgdGFyZ2V0W2tleV0gPSB2YWx1ZTtcclxuXHRcdFx0XHRcdGVsc2UgaWYgKGN1cnJlbnQgaW5zdGFuY2VvZiBSZWdFeHAgfHwgdmFsdWUgaW5zdGFuY2VvZiBSZWdFeHApIHRhcmdldFtrZXldID0gdmFsdWU7XHJcblx0XHRcdFx0XHRlbHNlIGlmIChpc09iamVjdChjdXJyZW50KSAmJiBpc09iamVjdCh2YWx1ZSkpIG1lcmdlKGN1cnJlbnQsIHZhbHVlKTtcclxuXHRcdFx0XHRcdGVsc2UgdGFyZ2V0W2tleV0gPSB2YWx1ZTtcclxuXHRcdFx0XHR9KTtcclxuXHRcdH0pO1xyXG5cclxuXHRyZXR1cm4gdGFyZ2V0O1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIERlY2lkZXMgd2hldGhlciBhIHNpbmdsZSBwcm9wZXJ0eSBpcyB0YWtlbiBvdmVyIGJ5IHtAbGluayBmaWx0ZXJ9LlxyXG4gKlxyXG4gKiBAY2FsbGJhY2sgUHJvcGVydHlGaWx0ZXJcclxuICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgbmFtZSBvZiB0aGUgcHJvcGVydHlcclxuICogQHBhcmFtIHsqfSB2YWx1ZSB2YWx1ZSBvZiB0aGUgcHJvcGVydHlcclxuICogQHBhcmFtIHtvYmplY3R9IGNvbnRleHQgdGhlIG9iamVjdCB0aGUgcHJvcGVydHkgYmVsb25ncyB0b1xyXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gdHJ1ZSB0byBrZWVwIHRoZSBwcm9wZXJ0eVxyXG4gKi9cclxuXHJcbi8qKlxyXG4gKiBCdWlsZHMgYSB7QGxpbmsgUHJvcGVydHlGaWx0ZXJ9IGFjY2VwdGluZyBvciByZWplY3RpbmcgYSBmaXhlZCBsaXN0IG9mIHByb3BlcnR5IG5hbWVzLlxyXG4gKlxyXG4gKiBAcGFyYW0ge29iamVjdH0gb3B0aW9uc1xyXG4gKiBAcGFyYW0ge0FycmF5PHN0cmluZz59IG9wdGlvbnMubmFtZXMgdGhlIHByb3BlcnR5IG5hbWVzIHRvIGRlY2lkZSBvblxyXG4gKiBAcGFyYW0ge2Jvb2xlYW59IG9wdGlvbnMuYWxsb3dlZCB0cnVlIHR1cm5zIHRoZSBsaXN0IGludG8gYW4gYWxsb3cgbGlzdCwgZmFsc2UgaW50byBhIGRlbnkgbGlzdFxyXG4gKiBAcmV0dXJucyB7UHJvcGVydHlGaWx0ZXJ9XHJcbiAqXHJcbiAqIEBleGFtcGxlXHJcbiAqIGNvbnN0IGRlbnkgPSBidWlsZFByb3BlcnR5RmlsdGVyKHtuYW1lcyA6IFtcInBhc3N3b3JkXCJdLCBhbGxvd2VkIDogZmFsc2V9KTtcclxuICogZmlsdGVyKHVzZXIsIGRlbnkpOyAgIC8vIGV2ZXJ5IHByb3BlcnR5IGJ1dCBwYXNzd29yZFxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGJ1aWxkUHJvcGVydHlGaWx0ZXIgPSAoeyBuYW1lcywgYWxsb3dlZCB9KSA9PiB7XHJcblx0cmV0dXJuIChuYW1lLCB2YWx1ZSwgY29udGV4dCkgPT4ge1xyXG5cdFx0cmV0dXJuIG5hbWVzLmluY2x1ZGVzKG5hbWUpID09PSBhbGxvd2VkO1xyXG5cdH07XHJcbn07XHJcblxyXG4vKipcclxuICogUmVidWlsZHMgYW4gQXJyYXksIFNldCBvciBNYXAgd2l0aCBpdHMgdmFsdWVzIGZpbHRlcmVkLiBBIGNvbnRhaW5lciBrZWVwcyBhbGwgb2YgaXRzIGVudHJpZXMgLVxyXG4gKiBvbmx5IHRoZSB2YWx1ZXMgaW5zaWRlIGdldCBmaWx0ZXJlZC4gVGhlIGtleXMgb2YgYSBNYXAgc3RheSB1bnRvdWNoZWQsIHJlcGxhY2luZyB0aGVtIHdvdWxkIGJyZWFrXHJcbiAqIGV2ZXJ5IGxvb2t1cCBhZ2FpbnN0IHRoZSByZXN1bHQuXHJcbiAqXHJcbiAqIEBwcml2YXRlXHJcbiAqIEBwYXJhbSB7QXJyYXl8U2V0fE1hcH0gdmFsdWVcclxuICogQHBhcmFtIHtQcm9wZXJ0eUZpbHRlcn0gcHJvcEZpbHRlclxyXG4gKiBAcGFyYW0ge2Jvb2xlYW59IGRlZXBcclxuICogQHBhcmFtIHtXZWFrTWFwfSBjb3BpZXMgbWFwcyBhbiBvcmlnaW5hbCBvbnRvIGl0cyBmaWx0ZXJlZCBjb3B5XHJcbiAqIEByZXR1cm5zIHtBcnJheXxTZXR8TWFwfVxyXG4gKi9cclxuY29uc3QgZmlsdGVyQ29udGFpbmVyID0gKHZhbHVlLCBwcm9wRmlsdGVyLCBkZWVwLCBjb3BpZXMpID0+IHtcclxuXHRpZiAodmFsdWUgaW5zdGFuY2VvZiBBcnJheSkge1xyXG5cdFx0Y29uc3QgY29weSA9IFtdO1xyXG5cdFx0Y29waWVzLnNldCh2YWx1ZSwgY29weSk7XHJcblx0XHRmb3IgKGNvbnN0IGVudHJ5IG9mIHZhbHVlKSBjb3B5LnB1c2goZmlsdGVyVmFsdWUoZW50cnksIHByb3BGaWx0ZXIsIGRlZXAsIGNvcGllcykpO1xyXG5cclxuXHRcdHJldHVybiBjb3B5O1xyXG5cdH1cclxuXHJcblx0aWYgKHZhbHVlIGluc3RhbmNlb2YgU2V0KSB7XHJcblx0XHRjb25zdCBjb3B5ID0gbmV3IFNldCgpO1xyXG5cdFx0Y29waWVzLnNldCh2YWx1ZSwgY29weSk7XHJcblx0XHRmb3IgKGNvbnN0IGVudHJ5IG9mIHZhbHVlKSBjb3B5LmFkZChmaWx0ZXJWYWx1ZShlbnRyeSwgcHJvcEZpbHRlciwgZGVlcCwgY29waWVzKSk7XHJcblxyXG5cdFx0cmV0dXJuIGNvcHk7XHJcblx0fVxyXG5cclxuXHRjb25zdCBjb3B5ID0gbmV3IE1hcCgpO1xyXG5cdGNvcGllcy5zZXQodmFsdWUsIGNvcHkpO1xyXG5cdGZvciAoY29uc3QgW2tleSwgZW50cnldIG9mIHZhbHVlKSBjb3B5LnNldChrZXksIGZpbHRlclZhbHVlKGVudHJ5LCBwcm9wRmlsdGVyLCBkZWVwLCBjb3BpZXMpKTtcclxuXHJcblx0cmV0dXJuIGNvcHk7XHJcbn07XHJcblxyXG4vKipcclxuICogRmlsdGVycyBhIHNpbmdsZSB2YWx1ZSwgZGlzcGF0Y2hpbmcgb24gd2hhdCBpdCBpcy5cclxuICpcclxuICogQHByaXZhdGVcclxuICogQHBhcmFtIHsqfSB2YWx1ZVxyXG4gKiBAcGFyYW0ge1Byb3BlcnR5RmlsdGVyfSBwcm9wRmlsdGVyXHJcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gZGVlcFxyXG4gKiBAcGFyYW0ge1dlYWtNYXB9IGNvcGllcyBtYXBzIGFuIG9yaWdpbmFsIG9udG8gaXRzIGZpbHRlcmVkIGNvcHlcclxuICogQHJldHVybnMgeyp9IHRoZSBmaWx0ZXJlZCB2YWx1ZSwgb3IgdGhlIHZhbHVlIGl0c2VsZiB3aGVuIHRoZXJlIGlzIG5vdGhpbmcgdG8gZmlsdGVyXHJcbiAqL1xyXG5jb25zdCBmaWx0ZXJWYWx1ZSA9ICh2YWx1ZSwgcHJvcEZpbHRlciwgZGVlcCwgY29waWVzKSA9PiB7XHJcblx0aWYgKHZhbHVlID09PSBudWxsIHx8IHR5cGVvZiB2YWx1ZSAhPT0gXCJvYmplY3RcIikgcmV0dXJuIHZhbHVlO1xyXG5cdGlmICh2YWx1ZSBpbnN0YW5jZW9mIERhdGUgfHwgdmFsdWUgaW5zdGFuY2VvZiBSZWdFeHApIHJldHVybiB2YWx1ZTsgLy8gY2Fycnkgbm8gcHJvcGVydGllcyB0byBmaWx0ZXJcclxuXHJcblx0Ly8gYSB2YWx1ZSBzZWVuIGJlZm9yZSBjbG9zZXMgYSBjeWNsZSAtIGl0cyBjb3B5IHN0YW5kcyBpbiwgc28gbm90aGluZyB1bmZpbHRlcmVkIGxlYWtzIGJhY2sgaW5cclxuXHRpZiAoY29waWVzLmhhcyh2YWx1ZSkpIHJldHVybiBjb3BpZXMuZ2V0KHZhbHVlKTtcclxuXHJcblx0aWYgKHZhbHVlIGluc3RhbmNlb2YgQXJyYXkgfHwgdmFsdWUgaW5zdGFuY2VvZiBTZXQgfHwgdmFsdWUgaW5zdGFuY2VvZiBNYXApIHJldHVybiBmaWx0ZXJDb250YWluZXIodmFsdWUsIHByb3BGaWx0ZXIsIGRlZXAsIGNvcGllcyk7XHJcblxyXG5cdHJldHVybiBmaWx0ZXJPYmplY3QodmFsdWUsIHByb3BGaWx0ZXIsIGRlZXAsIGNvcGllcyk7XHJcbn07XHJcblxyXG4vKipcclxuICogQnVpbGRzIHRoZSBmaWx0ZXJlZCBjb3B5IG9mIGFuIG9iamVjdC4gVGhlIGNvcHkgaXMgcmVnaXN0ZXJlZCBiZWZvcmUgaXQgaXMgZmlsbGVkLCBzbyBhIGN5Y2xlXHJcbiAqIHJ1bm5pbmcgYmFjayBpbnRvIGl0IHJlc29sdmVzIHRvIHRoZSBjb3B5IGluc3RlYWQgb2YgdGhlIG9yaWdpbmFsLlxyXG4gKlxyXG4gKiBAcHJpdmF0ZVxyXG4gKiBAcGFyYW0ge29iamVjdH0gZGF0YVxyXG4gKiBAcGFyYW0ge1Byb3BlcnR5RmlsdGVyfSBwcm9wRmlsdGVyXHJcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gZGVlcFxyXG4gKiBAcGFyYW0ge1dlYWtNYXB9IGNvcGllcyBtYXBzIGFuIG9yaWdpbmFsIG9udG8gaXRzIGZpbHRlcmVkIGNvcHlcclxuICogQHJldHVybnMge29iamVjdH1cclxuICovXHJcbmNvbnN0IGZpbHRlck9iamVjdCA9IChkYXRhLCBwcm9wRmlsdGVyLCBkZWVwLCBjb3BpZXMpID0+IHtcclxuXHRjb25zdCByZXN1bHQgPSB7fTtcclxuXHRjb3BpZXMuc2V0KGRhdGEsIHJlc3VsdCk7XHJcblxyXG5cdGZvciAoY29uc3QgbmFtZSBpbiBkYXRhKSB7XHJcblx0XHRjb25zdCB2YWx1ZSA9IGRhdGFbbmFtZV07XHJcblx0XHRpZiAocHJvcEZpbHRlcihuYW1lLCB2YWx1ZSwgZGF0YSkpe1xyXG5cdFx0XHRyZXN1bHRbbmFtZV0gPSBkZWVwID8gZmlsdGVyVmFsdWUodmFsdWUsIHByb3BGaWx0ZXIsIGRlZXAsIGNvcGllcykgOiB2YWx1ZTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHJldHVybiByZXN1bHQ7XHJcbn07XHJcblxyXG4vKipcclxuICogQnVpbGRzIGEgbmV3IG9iamVjdCBob2xkaW5nIHRoZSBwcm9wZXJ0aWVzIGEgZmlsdGVyIGFjY2VwdHMuXHJcbiAqXHJcbiAqIFRoZSBmaWx0ZXIgaXMgY2FsbGVkIGZvciBldmVyeSBlbnVtZXJhYmxlIHByb3BlcnR5LCBpbmhlcml0ZWQgb25lcyBpbmNsdWRlZCAtIGZpbHRlcmluZyBhIHdpbmRvd1xyXG4gKiByZWxpZXMgb24gdGhhdCwgc2luY2UgbW9zdCBvZiBpdHMgbWVtYmVycyBzaXQgb24gdGhlIHByb3RvdHlwZS5cclxuICpcclxuICogV2l0aCBkZWVwIHRoZSBmaWx0ZXIgaXMgYXBwbGllZCB0byBzdWIgb2JqZWN0cyBhcyB3ZWxsLiBBcnJheSwgU2V0IGFuZCBNYXAgYXJlIHJlYnVpbHQgd2l0aCB0aGVpclxyXG4gKiB2YWx1ZXMgZmlsdGVyZWQsIGtlZXBpbmcgYWxsIG9mIHRoZWlyIGVudHJpZXMgYW5kLCBmb3IgYSBNYXAsIGl0cyBrZXlzLiBEYXRlIGFuZCBSZWdFeHAgYXJlIHRha2VuXHJcbiAqIG92ZXIgYXMgdGhleSBhcmUuIEEgY3ljbGljIHJlZmVyZW5jZSByZXNvbHZlcyB0byB0aGUgZmlsdGVyZWQgY29weSwgc28gdGhlIHJlc3VsdCBuZXZlciBjYXJyaWVzIGFcclxuICogcmVmZXJlbmNlIGludG8gdGhlIHVudG91Y2hlZCBvcmlnaW5hbC5cclxuICpcclxuICogV2l0aG91dCBkZWVwIHRoZSBhY2NlcHRlZCB2YWx1ZXMgYXJlIHRha2VuIG92ZXIgYXMgdGhleSBhcmUsIHN1YiBvYmplY3RzIGJ5IHJlZmVyZW5jZS5cclxuICpcclxuICogQHBhcmFtIHtvYmplY3R9IGRhdGEgdGhlIG9iamVjdCB0byBiZSBmaWx0ZXJlZFxyXG4gKiBAcGFyYW0ge1Byb3BlcnR5RmlsdGVyfSBwcm9wRmlsdGVyIGRlY2lkZXMgcGVyIHByb3BlcnR5LCBzZWUge0BsaW5rIGJ1aWxkUHJvcGVydHlGaWx0ZXJ9XHJcbiAqIEBwYXJhbSB7b2JqZWN0fSBbb3B0aW9uc11cclxuICogQHBhcmFtIHtib29sZWFufSBbb3B0aW9ucy5kZWVwPWZhbHNlXSBmaWx0ZXIgc3ViIG9iamVjdHMgdG9vXHJcbiAqIEByZXR1cm5zIHtvYmplY3R9IGEgbmV3IG9iamVjdFxyXG4gKlxyXG4gKiBAZXhhbXBsZVxyXG4gKiBjb25zdCBkZW55ID0gYnVpbGRQcm9wZXJ0eUZpbHRlcih7bmFtZXMgOiBbXCJzZWNyZXRcIl0sIGFsbG93ZWQgOiBmYWxzZX0pO1xyXG4gKlxyXG4gKiBmaWx0ZXIoe3NlY3JldCA6IFwieFwiLCBhIDogMX0sIGRlbnkpOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8ge2EgOiAxfVxyXG4gKiBmaWx0ZXIoe3N1YiA6IHtzZWNyZXQgOiBcInhcIiwgYSA6IDF9fSwgZGVueSwge2RlZXAgOiB0cnVlfSk7ICAgICAgLy8ge3N1YiA6IHthIDogMX19XHJcbiAqL1xyXG5leHBvcnQgY29uc3QgZmlsdGVyID0gKGRhdGEsIHByb3BGaWx0ZXIsIHsgZGVlcCA9IGZhbHNlIH0gPSB7fSkgPT4gZmlsdGVyT2JqZWN0KGRhdGEsIHByb3BGaWx0ZXIsIGRlZXAsIG5ldyBXZWFrTWFwKCkpO1xyXG5cclxuLyoqXHJcbiAqIERlZmluZXMgYSBjb25zdGFudCwgbm9uIGVudW1lcmFibGUgcHJvcGVydHkuXHJcbiAqXHJcbiAqIEBwYXJhbSB7b2JqZWN0fSBvIHRoZSBvYmplY3QgdG8gZGVmaW5lIHRoZSBwcm9wZXJ0eSBvblxyXG4gKiBAcGFyYW0ge3N0cmluZ30gbmFtZSBuYW1lIG9mIHRoZSBwcm9wZXJ0eVxyXG4gKiBAcGFyYW0geyp9IHZhbHVlIHRoZSB2YWx1ZSwgbmVpdGhlciB3cml0YWJsZSBub3IgY29uZmlndXJhYmxlXHJcbiAqIEByZXR1cm5zIHt2b2lkfVxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGRlZlZhbHVlID0gKG8sIG5hbWUsIHZhbHVlKSA9PiB7XHJcblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIG5hbWUsIHtcclxuXHRcdHZhbHVlLFxyXG5cdFx0d3JpdGFibGU6IGZhbHNlLFxyXG5cdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcclxuXHRcdGVudW1lcmFibGU6IGZhbHNlLFxyXG5cdH0pO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIERlZmluZXMgYSByZWFkIG9ubHksIG5vbiBlbnVtZXJhYmxlIHByb3BlcnR5IGJhY2tlZCBieSBhIGdldHRlci5cclxuICpcclxuICogQHBhcmFtIHtvYmplY3R9IG8gdGhlIG9iamVjdCB0byBkZWZpbmUgdGhlIHByb3BlcnR5IG9uXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIG5hbWUgb2YgdGhlIHByb3BlcnR5XHJcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGdldCByZXR1cm5zIHRoZSB2YWx1ZSBvZiB0aGUgcHJvcGVydHlcclxuICogQHJldHVybnMge3ZvaWR9XHJcbiAqL1xyXG5leHBvcnQgY29uc3QgZGVmR2V0ID0gKG8sIG5hbWUsIGdldCkgPT4ge1xyXG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBuYW1lLCB7XHJcblx0XHRnZXQsXHJcblx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxyXG5cdFx0ZW51bWVyYWJsZTogZmFsc2UsXHJcblx0fSk7XHJcbn07XHJcblxyXG4vKipcclxuICogRGVmaW5lcyBhIG5vbiBlbnVtZXJhYmxlIHByb3BlcnR5IGJhY2tlZCBieSBhIGdldHRlciBhbmQgYSBzZXR0ZXIuXHJcbiAqXHJcbiAqIEBwYXJhbSB7b2JqZWN0fSBvIHRoZSBvYmplY3QgdG8gZGVmaW5lIHRoZSBwcm9wZXJ0eSBvblxyXG4gKiBAcGFyYW0ge3N0cmluZ30gbmFtZSBuYW1lIG9mIHRoZSBwcm9wZXJ0eVxyXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBnZXQgcmV0dXJucyB0aGUgdmFsdWUgb2YgdGhlIHByb3BlcnR5XHJcbiAqIEBwYXJhbSB7RnVuY3Rpb259IHNldCB0YWtlcyB0aGUgbmV3IHZhbHVlIG9mIHRoZSBwcm9wZXJ0eVxyXG4gKiBAcmV0dXJucyB7dm9pZH1cclxuICovXHJcbmV4cG9ydCBjb25zdCBkZWZHZXRTZXQgPSAobywgbmFtZSwgZ2V0LCBzZXQpID0+IHtcclxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkobywgbmFtZSwge1xyXG5cdFx0Z2V0LFxyXG5cdFx0c2V0LFxyXG5cdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcclxuXHRcdGVudW1lcmFibGU6IGZhbHNlLFxyXG5cdH0pO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG5cdGlzTnVsbE9yVW5kZWZpbmVkLFxyXG5cdGlzT2JqZWN0LFxyXG5cdGlzUHJpbWl0aXZlLFxyXG5cdGVxdWFsUG9qbyxcclxuXHRpc1Bvam8sXHJcblx0YXBwZW5kLFxyXG5cdG1lcmdlLFxyXG5cdGZpbHRlcixcclxuXHRidWlsZFByb3BlcnR5RmlsdGVyLFxyXG5cdGRlZlZhbHVlLFxyXG5cdGRlZkdldCxcclxuXHRkZWZHZXRTZXQsXHJcbn07XHJcbiIsIi8qKlxuICogVHdvIHdheXMgb2YgYnVpbGRpbmcgYSBwcm9taXNlIHRoYXQgc29tZXRoaW5nIG91dHNpZGUgb2YgaXQgc2V0dGxlcy5cbiAqXG4gKiB7QGxpbmsgdGltZW91dFByb21pc2V9IHJ1bnMgYSBmdW5jdGlvbiBvbmNlIGEgdGltZW91dCBoYXMgcGFzc2VkIGFuZCBsZXRzIHRoZSB3aG9sZSBjaGFpbiBiZWhpbmRcbiAqIGl0IGJlIGNhbmNlbGVkLiB7QGxpbmsgbGF6eVByb21pc2V9IGhhbmRzIG91dCBhIHByb21pc2UgdG9nZXRoZXIgd2l0aCBpdHMgcmVzb2x2ZSBhbmQgcmVqZWN0LCBmb3JcbiAqIHRoZSBjYXNlcyB3aGVyZSB0aGUgc2V0dGxpbmcgaXMgZHJpdmVuIGZyb20gc29tZXdoZXJlIGVsc2UgLSBhIGZyYW1ld29yayBjYWxsYmFjaywgYW4gZXZlbnQsXG4gKiBmb3JlaWduIGNvZGUgLSBhbmQgcGFja2luZyBhbGwgb2YgdGhhdCBpbnRvIHRoZSBleGVjdXRvciB3b3VsZCBvbmx5IGJsb3cgdGhlIGNvZGUgdXAgb3IgaXMgbm90XG4gKiBwb3NzaWJsZSBhdCBhbGwuXG4gKlxuICogVGhlIHR3byBjYXJyeSBkaWZmZXJlbnQgc3RhdGUgb24gcHVycG9zZTogYSB0aW1lb3V0UHJvbWlzZSByZXBvcnRzIGl0cyBjYW5jZWxsYXRpb24gdGhyb3VnaCBhXG4gKiByZWplY3Rpb24gYW5kIGFuIEFib3J0U2lnbmFsLCBhIGxhenlQcm9taXNlIHJlcG9ydHMgaXRzIG91dGNvbWUgdGhyb3VnaCByZXNvbHZlZCwgZXJyb3IgYW5kIHZhbHVlLlxuICpcbiAqIEBtb2R1bGUgUHJvbWlzZVV0aWxzXG4gKi9cbmltcG9ydCB7IGRlZlZhbHVlLCBkZWZHZXQgfSBmcm9tIFwiLi9PYmplY3RVdGlscy5qc1wiO1xuXG4vKipcbiAqIFRoZSByZWFzb24gYW4gYWJvcnRlZCBvcGVyYXRpb24gcmVqZWN0cyB3aXRoLiBBIERPTUV4Y2VwdGlvbiBuYW1lZCBBYm9ydEVycm9yIGlzIHdoYXRcbiAqIEFib3J0Q29udHJvbGxlciBpdHNlbGYgdXNlcywgYW4gRXJyb3IgY2FycnlpbmcgdGhlIHNhbWUgbmFtZSBzdGFuZHMgaW4gd2hlcmUgaXQgaXMgbWlzc2luZy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHJldHVybnMge0Vycm9yfERPTUV4Y2VwdGlvbn1cbiAqL1xuY29uc3QgYWJvcnRFcnJvciA9ICgpID0+IHtcblx0aWYgKHR5cGVvZiBET01FeGNlcHRpb24gIT09IFwidW5kZWZpbmVkXCIpIHJldHVybiBuZXcgRE9NRXhjZXB0aW9uKFwiVGhlIG9wZXJhdGlvbiB3YXMgYWJvcnRlZC5cIiwgXCJBYm9ydEVycm9yXCIpO1xuXG5cdC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0IC0gZXZlcnkgYnJvd3NlciB0aGUgc3VpdGUgcnVucyBpbiBicmluZ3MgRE9NRXhjZXB0aW9uLCBzbyB0aGlzIGxpbmUgb25seVxuXHQgICBzdGFuZHMgaW4gZm9yIGVudmlyb25tZW50cyB0aGUgdGVzdCBydW4gY2Fubm90IHJlYWNoICovXG5cdHJldHVybiBPYmplY3QuYXNzaWduKG5ldyBFcnJvcihcIlRoZSBvcGVyYXRpb24gd2FzIGFib3J0ZWQuXCIpLCB7IG5hbWU6IFwiQWJvcnRFcnJvclwiIH0pO1xufTtcblxuLyoqXG4gKiBUaGUgcmVhc29uIGEgc2lnbmFsIGNhcnJpZXMuIGFib3J0KCkgZmlsbHMgaXQgaW4gb24gaXRzIG93biwgb2xkZXIgaW1wbGVtZW50YXRpb25zIGtub3cgdGhlXG4gKiBtZXRob2QgYnV0IG5vdCB0aGUgcHJvcGVydHkuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QWJvcnRTaWduYWx9IHNpZ25hbFxuICogQHJldHVybnMgeyp9XG4gKi9cbmNvbnN0IGFib3J0UmVhc29uID0gKHNpZ25hbCkgPT4gKHR5cGVvZiBzaWduYWwucmVhc29uID09PSBcInVuZGVmaW5lZFwiID8gYWJvcnRFcnJvcigpIDogc2lnbmFsLnJlYXNvbik7XG5cbi8qKlxuICogQWRkcyB0aGUgY2FuY2VsIGFwaSB0byBhIHByb21pc2UgYW5kIHRvIGV2ZXJ5IHByb21pc2UgZGVyaXZlZCBmcm9tIGl0LiBBbGwgb2YgdGhlbSBzaGFyZSBvbmVcbiAqIGNvbnRyb2xsZXIsIHNvIGEgY2hhaW4gY2FuIGJlIGNhbmNlbGVkIGZyb20gYW55IG9mIGl0cyBsaW5rcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtQcm9taXNlfSBwcm9taXNlXG4gKiBAcGFyYW0ge0Fib3J0Q29udHJvbGxlcn0gY29udHJvbGxlclxuICogQHBhcmFtIHtGdW5jdGlvbn0gY2FuY2VsXG4gKiBAcmV0dXJucyB7UHJvbWlzZX0gdGhlIHByb21pc2UgaXRzZWxmXG4gKi9cbmNvbnN0IGNhbmNlbGFibGUgPSAocHJvbWlzZSwgY29udHJvbGxlciwgY2FuY2VsKSA9PiB7XG5cdGRlZlZhbHVlKHByb21pc2UsIFwiY2FuY2VsXCIsIGNhbmNlbCk7XG5cdGRlZkdldChwcm9taXNlLCBcInNpZ25hbFwiLCAoKSA9PiBjb250cm9sbGVyLnNpZ25hbCk7XG5cdGRlZkdldChwcm9taXNlLCBcImNhbmNlbGVkXCIsICgpID0+IGNvbnRyb2xsZXIuc2lnbmFsLmFib3J0ZWQpO1xuXG5cdC8vIHRoZW4gaGFzIHRvIGhhbmQgYm90aCBoYW5kbGVycyB0aHJvdWdoIGFuZCByZXR1cm4gdGhlIGRlcml2ZWQgcHJvbWlzZSAtIGNhdGNoLCBmaW5hbGx5IGFuZFxuXHQvLyBhd2FpdCBhcmUgZGVmaW5lZCBpbiB0ZXJtcyBvZiB0aGVuLCBzbyBhbnl0aGluZyBsZXNzIHNpbGVudGx5IGJyZWFrcyB0aG9zZSBhcyB3ZWxsXG5cdGNvbnN0IHRoZW4gPSBwcm9taXNlLnRoZW47XG5cdGRlZlZhbHVlKHByb21pc2UsIFwidGhlblwiLCAob25GdWxmaWxsZWQsIG9uUmVqZWN0ZWQpID0+IGNhbmNlbGFibGUodGhlbi5jYWxsKHByb21pc2UsIG9uRnVsZmlsbGVkLCBvblJlamVjdGVkKSwgY29udHJvbGxlciwgY2FuY2VsKSk7XG5cblx0cmV0dXJuIHByb21pc2U7XG59O1xuXG4vKipcbiAqIENhbGxzIGEgZnVuY3Rpb24gYWZ0ZXIgYSB0aW1lb3V0IGFuZCBzZXR0bGVzIHdpdGggd2hhdGV2ZXIgaXQgcHJvZHVjZXMuXG4gKlxuICogVGhlIGZ1bmN0aW9uIGlzIGNhbGxlZCB3aXRoIHJlc29sdmUsIHJlamVjdCBhbmQgdGhlIEFib3J0U2lnbmFsIG9mIHRoZSBwcm9taXNlLCBzbyB3b3JrIHN0YXJ0ZWRcbiAqIGluc2lkZSBpdCBjYW4gYmUgYWJvcnRlZCBhbG9uZyB3aXRoIGl0LiBBbiBleGNlcHRpb24gdGhyb3duIGJ5IHRoZSBmdW5jdGlvbiByZWplY3RzIHRoZSBwcm9taXNlXG4gKiBpbnN0ZWFkIG9mIGVzY2FwaW5nIGludG8gdGhlIHRpbWVyLlxuICpcbiAqIFRoZSBwcm9taXNlIGJyaW5ncyBpdHMgb3duIEFib3J0Q29udHJvbGxlci4gY2FuY2VsKCkgY2xlYXJzIGEgcGVuZGluZyB0aW1lb3V0IGFuZCByZWplY3RzIHdpdGggYW5cbiAqIEFib3J0RXJyb3IsIHdoaWNoIHRyYXZlbHMgZG93biB0aGUgd2hvbGUgY2hhaW4gLSBubyB0aGVuIGhhbmRsZXIgYmVoaW5kIGl0IHJ1bnMuIGNhbmNlbCgpIHNpdHMgb25cbiAqIGV2ZXJ5IHByb21pc2UgZGVyaXZlZCBmcm9tIGl0IGFuZCBkb2VzIG5vdGhpbmcgb25jZSB0aGUgcHJvbWlzZSBoYXMgc2V0dGxlZC5cbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmbiBjYWxsZWQgd2l0aCAocmVzb2x2ZSwgcmVqZWN0LCBzaWduYWwpIG9uY2UgdGhlIHRpbWVvdXQgaGFzIHBhc3NlZFxuICogQHBhcmFtIHtudW1iZXJ9IG1zIHRoZSB0aW1lb3V0IGluIG1pbGxpc2Vjb25kc1xuICogQHJldHVybnMge1Byb21pc2V9IGEgcHJvbWlzZSBjYXJyeWluZyBjYW5jZWwoKSwgc2lnbmFsIGFuZCBjYW5jZWxlZFxuICpcbiAqIEBleGFtcGxlXG4gKiBjb25zdCBwcm9taXNlID0gdGltZW91dFByb21pc2UoKHJlc29sdmUpID0+IHJlc29sdmUoXCJkb25lXCIpLCAxMDAwKTtcbiAqIGF3YWl0IHByb21pc2U7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFwiZG9uZVwiXG4gKlxuICogQGV4YW1wbGVcbiAqIGNvbnN0IHByb21pc2UgPSB0aW1lb3V0UHJvbWlzZSgocmVzb2x2ZSkgPT4gcmVzb2x2ZShcImRvbmVcIiksIDEwMDApO1xuICogcHJvbWlzZS50aGVuKCgpID0+IGNvbnNvbGUubG9nKFwibmV2ZXIgcnVuc1wiKSk7XG4gKiBwcm9taXNlLmNhbmNlbCgpO1xuICogYXdhaXQgcHJvbWlzZTsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gdGhyb3dzIEFib3J0RXJyb3JcbiAqL1xuZXhwb3J0IGNvbnN0IHRpbWVvdXRQcm9taXNlID0gKGZuLCBtcykgPT4ge1xuXHRjb25zdCBjb250cm9sbGVyID0gbmV3IEFib3J0Q29udHJvbGxlcigpO1xuXHRjb25zdCBzaWduYWwgPSBjb250cm9sbGVyLnNpZ25hbDtcblx0bGV0IHRpbWVvdXQgPSBudWxsO1xuXHRsZXQgc2V0dGxlZCA9IGZhbHNlO1xuXG5cdGNvbnN0IHByb21pc2UgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG5cdFx0Ly8gdGhlIHRpbWVvdXQgaXMgY2xlYXJlZCBvbiBldmVyeSB3YXkgb3V0LCBhIGNhbmNlbGVkIHByb21pc2UgbXVzdCBub3Qga2VlcCB0aGUgdGltZXIgYWxpdmVcblx0XHRjb25zdCBzZXR0bGUgPSAoaGFuZGxlcikgPT4gKHZhbHVlKSA9PiB7XG5cdFx0XHRpZiAoc2V0dGxlZCkgcmV0dXJuO1xuXG5cdFx0XHRzZXR0bGVkID0gdHJ1ZTtcblx0XHRcdGlmICh0aW1lb3V0ICE9PSBudWxsKSB7XG5cdFx0XHRcdGNsZWFyVGltZW91dCh0aW1lb3V0KTtcblx0XHRcdFx0dGltZW91dCA9IG51bGw7XG5cdFx0XHR9XG5cdFx0XHRoYW5kbGVyKHZhbHVlKTtcblx0XHR9O1xuXG5cdFx0Y29uc3Qgb25SZXNvbHZlID0gc2V0dGxlKHJlc29sdmUpO1xuXHRcdGNvbnN0IG9uUmVqZWN0ID0gc2V0dGxlKHJlamVjdCk7XG5cblx0XHRzaWduYWwuYWRkRXZlbnRMaXN0ZW5lcihcImFib3J0XCIsICgpID0+IG9uUmVqZWN0KGFib3J0UmVhc29uKHNpZ25hbCkpLCB7IG9uY2U6IHRydWUgfSk7XG5cblx0XHR0aW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHR0aW1lb3V0ID0gbnVsbDtcblx0XHRcdHRyeSB7XG5cdFx0XHRcdGZuKG9uUmVzb2x2ZSwgb25SZWplY3QsIHNpZ25hbCk7XG5cdFx0XHR9IGNhdGNoIChlcnJvcikge1xuXHRcdFx0XHRvblJlamVjdChlcnJvcik7XG5cdFx0XHR9XG5cdFx0fSwgbXMpO1xuXHR9KTtcblxuXHRyZXR1cm4gY2FuY2VsYWJsZShwcm9taXNlLCBjb250cm9sbGVyLCAocmVhc29uKSA9PiB7XG5cdFx0aWYgKHNldHRsZWQgfHwgc2lnbmFsLmFib3J0ZWQpIHJldHVybjtcblxuXHRcdGNvbnRyb2xsZXIuYWJvcnQodHlwZW9mIHJlYXNvbiA9PT0gXCJ1bmRlZmluZWRcIiA/IGFib3J0RXJyb3IoKSA6IHJlYXNvbik7XG5cdH0pO1xufTtcblxuLyoqXG4gKiBCdWlsZHMgYSBwcm9taXNlIHRvZ2V0aGVyIHdpdGggdGhlIHR3byBmdW5jdGlvbnMgc2V0dGxpbmcgaXQuXG4gKlxuICogVGhlIHBvaW50IGlzIHRvIGhhdmUgdGhlIHByb21pc2UgYW5kIGl0cyByZXNvbHZlIGFuZCByZWplY3QgYXBhcnQgZnJvbSBlYWNoIG90aGVyOiB3aGF0ZXZlclxuICogc2V0dGxlcyBpdCBkb2VzIG5vdCBoYXZlIHRvIHNpdCBpbnNpZGUgdGhlIGV4ZWN1dG9yLiBUaGF0IGtlZXBzIGEgcHJvbWlzZSB1c2FibGUgd2hlcmUgdGhlXG4gKiBzZXR0bGluZyBpcyBkcml2ZW4gYnkgYSBmcmFtZXdvcmsgY2FsbGJhY2ssIGFuIGV2ZW50IG9yIGFueSBvdGhlciBmb3JlaWduIGNvZGUgdGhlIGV4ZWN1dG9yIGhhcyBub1xuICogd2F5IG9mIHJlYWNoaW5nLlxuICpcbiAqIFRoZSBwcm9taXNlIGNhcnJpZXMgdGhyZWUgcmVhZCBvbmx5IHByb3BlcnRpZXM6XG4gKlxuICogLSByZXNvbHZlZCBzYXlzIHRoZSBwcm9taXNlIGhhcyBiZWVuIHNldHRsZWQuIEl0IHNheXMgbm90aGluZyBhYm91dCB0aGUgb3V0Y29tZSAtIGl0IGlzIHRydWUgZm9yIGFcbiAqICAgZmFpbHVyZSBqdXN0IGFzIHdlbGwuXG4gKiAtIGVycm9yIHRlbGxzIHRoZSB0d28gYXBhcnQuXG4gKiAtIHZhbHVlIGhvbGRzIHdoYXRldmVyIHRoZSBwcm9taXNlIHdhcyBzZXR0bGVkIHdpdGg6IHRoZSByZXN1bHQgYWZ0ZXIgYSByZXNvbHZlLCB0aGUgcmVhc29uIGFmdGVyXG4gKiAgIGEgcmVqZWN0LiBlcnJvciBpcyB3aGF0IGRlY2lkZXMgaG93IHRvIHJlYWQgaXQuXG4gKlxuICogQW4gRXJyb3IgYWx3YXlzIGxlYWRzIHRvIGEgcmVqZWN0aW9uLCBpbiBib3RoIGRpcmVjdGlvbnMgLSBoYW5kaW5nIG9uZSB0byByZXNvbHZlIHJlamVjdHMgdGhlXG4gKiBwcm9taXNlIGp1c3QgbGlrZSByZWplY3Qgd291bGQuIEEgcmVhc29uIHRoYXQgaXMgbm8gRXJyb3IgaXMgd3JhcHBlZCBpbnRvIG9uZSwgYW5kIGEgcmVqZWN0XG4gKiB3aXRob3V0IGEgcmVhc29uIGdldHMgYW4gRXJyb3Igb2YgaXRzIG93biwgc28gdGhlcmUgaXMgYWx3YXlzIGEgbWVzc2FnZSB0byByZWFkLlxuICpcbiAqIEJvdGggZnVuY3Rpb25zIHNldHRsZSB0aGUgcHJvbWlzZSBvbmNlLiBBIHNlY29uZCBjYWxsIHRocm93cyBpbnN0ZWFkIG9mIHNldHRsaW5nIGFnYWluLCBzbyB0aGVcbiAqIHRocmVlIHByb3BlcnRpZXMgY2FuIG5ldmVyIGVuZCB1cCBkaXNhZ3JlZWluZyB3aXRoIHRoZSBwcm9taXNlLlxuICpcbiAqIEByZXR1cm5zIHtQcm9taXNlfSBhIHByb21pc2UgY2FycnlpbmcgcmVzb2x2ZSgpLCByZWplY3QoKSwgdmFsdWUsIGVycm9yIGFuZCByZXNvbHZlZFxuICogQHRocm93cyB7RXJyb3J9IGZyb20gcmVzb2x2ZSBvciByZWplY3Qgd2hlbiB0aGUgcHJvbWlzZSBoYXMgYWxyZWFkeSBiZWVuIHNldHRsZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogY29uc3QgcHJvbWlzZSA9IGxhenlQcm9taXNlKCk7XG4gKiBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsICgpID0+IHByb21pc2UucmVzb2x2ZShlbGVtZW50KSwge29uY2UgOiB0cnVlfSk7XG4gKiBhd2FpdCBwcm9taXNlO1xuICpcbiAqIEBleGFtcGxlXG4gKiBjb25zdCBwcm9taXNlID0gbGF6eVByb21pc2UoKTtcbiAqIHByb21pc2UucmVqZWN0KFwibm8gY29ubmVjdGlvblwiKTsgICAvLyByZWplY3RzIHdpdGggYW4gRXJyb3IgY2FycnlpbmcgdGhhdCBtZXNzYWdlXG4gKiBwcm9taXNlLnJlc29sdmVkOyAgICAgICAgICAgICAgICAgIC8vIHRydWUgLSBzZXR0bGVkLCBub3Qgc3VjY2Vzc2Z1bFxuICogcHJvbWlzZS5lcnJvcjsgICAgICAgICAgICAgICAgICAgICAvLyB0cnVlXG4gKiBwcm9taXNlLnZhbHVlOyAgICAgICAgICAgICAgICAgICAgIC8vIFwibm8gY29ubmVjdGlvblwiXG4gKi9cbmV4cG9ydCBjb25zdCBsYXp5UHJvbWlzZSA9ICgpID0+IHtcblx0bGV0IHByb21pc2VSZXNvbHZlID0gbnVsbDtcblx0bGV0IHByb21pc2VSZWplY3QgPSBudWxsO1xuXHRsZXQgcmVzb2x2ZWQgPSBmYWxzZTtcblx0bGV0IGVycm9yID0gZmFsc2U7XG5cdGxldCB2YWx1ZSA9IHVuZGVmaW5lZDtcblxuXHRjb25zdCBwcm9taXNlID0gbmV3IFByb21pc2UoKHIsIGUpID0+IHtcblx0XHRwcm9taXNlUmVzb2x2ZSA9IHI7XG5cdFx0cHJvbWlzZVJlamVjdCA9IChhbkVycm9yKSA9PiBlKGFuRXJyb3IgaW5zdGFuY2VvZiBFcnJvciA/IGFuRXJyb3IgOiBuZXcgRXJyb3IoYW5FcnJvciA9PSBudWxsID8gXCJQcm9taXNlIHJlamVjdGVkIHdpdGggbm8gcmVhc29uXCIgOiBhbkVycm9yKSk7XG5cdH0pO1xuXG5cdGRlZlZhbHVlKHByb21pc2UsIFwicmVzb2x2ZVwiLCAocmVzdWx0KSA9PiB7XG5cdFx0aWYgKHJlc29sdmVkKSB0aHJvdyBuZXcgRXJyb3IoXCJQcm9taXNlIGFscmVhZHkgcmVzb2x2ZWQhXCIpO1xuXHRcdHJlc29sdmVkID0gdHJ1ZTtcblx0XHR2YWx1ZSA9IHJlc3VsdDtcblx0XHRpZiAodmFsdWUgaW5zdGFuY2VvZiBFcnJvcikge1xuXHRcdFx0ZXJyb3IgPSB0cnVlO1xuXHRcdFx0cHJvbWlzZVJlamVjdCh2YWx1ZSk7XG5cdFx0fSBlbHNlIHByb21pc2VSZXNvbHZlKHZhbHVlKTtcblx0fSk7XG5cdGRlZlZhbHVlKHByb21pc2UsIFwicmVqZWN0XCIsIChyZXN1bHQpID0+IHtcblx0XHRpZiAocmVzb2x2ZWQpIHRocm93IG5ldyBFcnJvcihcIlByb21pc2UgYWxyZWFkeSByZXNvbHZlZCFcIik7XG5cdFx0cmVzb2x2ZWQgPSB0cnVlO1xuXHRcdHZhbHVlID0gcmVzdWx0O1xuXHRcdGVycm9yID0gdHJ1ZTtcblx0XHRwcm9taXNlUmVqZWN0KHJlc3VsdCk7XG5cdH0pO1xuXG5cdGRlZkdldChwcm9taXNlLCBcInZhbHVlXCIsICgpID0+IHZhbHVlKTtcblx0ZGVmR2V0KHByb21pc2UsIFwiZXJyb3JcIiwgKCkgPT4gZXJyb3IpO1xuXHRkZWZHZXQocHJvbWlzZSwgXCJyZXNvbHZlZFwiLCAoKSA9PiByZXNvbHZlZCk7XG5cblx0cmV0dXJuIHByb21pc2U7XG59O1xuZXhwb3J0IGRlZmF1bHQge1xuXHRsYXp5UHJvbWlzZSxcblx0dGltZW91dFByb21pc2UsXG59O1xuIiwiLyoqXHJcbiAqIEFkZHMgaGFzaGNvZGUoKSB0byBldmVyeSBzdHJpbmcgLSBzZWUgdGhlIG5vdGUgb24gcGF0Y2hpbmcgcHJvdG90eXBlcyBpbiAuL2luZGV4LmpzLlxyXG4gKlxyXG4gKiBUaGUgaGFzaCBpcyB0aGUgb25lIGphdmEgdXNlcyBmb3IgaXRzIHN0cmluZ3M6IGggPSAzMSAqIGggKyBjaGFyLCBrZXB0IGluc2lkZSAzMiBzaWduZWQgYml0cy4gSXRcclxuICogaXMgbWVhbnQgZm9yIGJ1Y2tldGluZyBhbmQgZm9yIHRlbGxpbmcgdGV4dHMgYXBhcnQgY2hlYXBseSwgbm90IGZvciBhbnl0aGluZyB3aGVyZSBjb2xsaXNpb25zXHJcbiAqIG1hdHRlciAtIHR3byBkaWZmZXJlbnQgdGV4dHMgY2FuIHNoYXJlIGEgaGFzaCwgYW5kIGl0IGlzIG5vIGNyeXB0b2dyYXBoaWMgZGlnZXN0LlxyXG4gKlxyXG4gKiBPbmx5IGRlZmluZWQgd2hlbiBub3RoaW5nIGVsc2UgY2FycmllcyB0aGF0IG5hbWUgYWxyZWFkeS5cclxuICpcclxuICogQHJldHVybnMge251bWJlcn0gYSAzMiBiaXQgc2lnbmVkIGludGVnZXIsIDAgZm9yIHRoZSBlbXB0eSBzdHJpbmdcclxuICpcclxuICogQGV4YW1wbGVcclxuICogXCJ0ZXN0XCIuaGFzaGNvZGUoKTsgICAvLyAzNTU2NDk4XHJcbiAqL1xyXG5pZiAoIVN0cmluZy5wcm90b3R5cGUuaGFzaGNvZGUpXHJcblx0U3RyaW5nLnByb3RvdHlwZS5oYXNoY29kZSA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0aWYgKHRoaXMubGVuZ3RoID09PSAwKVxyXG5cdFx0XHRyZXR1cm4gMDtcclxuXHRcdFxyXG5cdFx0bGV0IGhhc2ggPSAwO1xyXG5cdFx0Y29uc3QgbGVuZ3RoID0gdGhpcy5sZW5ndGg7XHJcblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdGNvbnN0IGMgPSB0aGlzLmNoYXJDb2RlQXQoaSk7XHJcblx0XHRcdGhhc2ggPSAoKGhhc2ggPDwgNSkgLSBoYXNoKSArIGM7XHJcblx0XHRcdGhhc2ggfD0gMDsgLy8gQ29udmVydCB0byAzMmJpdCBpbnRlZ2VyXHJcblx0XHR9XHJcblx0XHRyZXR1cm4gaGFzaDtcclxuXHR9OyIsImltcG9ydCBFeHByZXNzaW9uUmVzb2x2ZXIgZnJvbSBcIi4vc3JjL0V4cHJlc3Npb25SZXNvbHZlci5qc1wiO1xuaW1wb3J0IFwiLi9zcmMvZXhlY3V0ZXIvaW5kZXguanNcIjtcbmltcG9ydCAqIGFzIEV4ZWN1dGVyUmVnaXN0cnkgZnJvbSBcIi4vc3JjL0V4ZWN1dGVyUmVnaXN0cnkuanNcIlxuXG5leHBvcnQgeyBFeHByZXNzaW9uUmVzb2x2ZXIsIEV4ZWN1dGVyUmVnaXN0cnkgfTtcbiIsIi8qKlxuICogQHR5cGVkZWYge09iamVjdH0gQ2FjaGVFbnRyeVxuICogQHByb3BlcnR5IHtudW1iZXJ9IGxhc3RIaXQgLSBNb25vdG9uaWMgbWFya2VyIG9mIHRoZSBsYXN0IHJlYWQgb3Igd3JpdGUsIHRoZSBldmljdGlvbiBvcmRlci5cbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBrZXlcbiAqIEBwcm9wZXJ0eSB7RnVuY3Rpb259IHZhbHVlXG4gKi9cblxuLyoqXG4gKiBAdHlwZWRlZiB7T2JqZWN0fSBDb2RlQ2FjaGVPcHRpb25zXG4gKiBAcHJvcGVydHkge251bWJlcn0gW3NpemVdIC0gTWF4aW11bSBudW1iZXIgb2YgZW50cmllcyBpbiB0aGUgY2FjaGUsIGEgZnJhY3Rpb24gcm91bmRlZCBkb3duLiBJZiBzZXRcbiAqIHRvIDAgb3IgbGVzcywgY2FjaGluZyBpcyBkaXNhYmxlZC4gTGVmdCBvdXQsIHRoZSBzaXplIHN0YXlzIGFzIGl0IGlzLlxuICovXG5cbi8qKiBUaGUgc2l6ZSBldmVyeSBjYWNoZSBzdGFydHMgd2l0aC4gKi9cbmNvbnN0IFNUQVJUX1NJWkUgPSA1MDAwO1xuXG4vKipcbiAqIENvZGVDYWNoZSBjbGFzcyB0byBtYW5hZ2UgY2FjaGluZyBvZiBnZW5lcmF0ZWQgY29kZSBzbmlwcGV0cy5cbiAqXG4gKiBFbnRyaWVzIGFyZSBldmljdGVkIGxlYXN0IHJlY2VudGx5IHVzZWQgZmlyc3Q6IGV2ZXJ5IGhpdCByZWZyZXNoZXMgdGhlIGVudHJ5LCBzbyBhblxuICogZXhwcmVzc2lvbiB0aGF0IGtlZXBzIGJlaW5nIHJlc29sdmVkIG91dGxpdmVzIG9uZSB0aGF0IHdhcyBjb21waWxlZCBvbmNlIGFuZCBkcm9wcGVkLlxuICogVGhlIG1hcmtlciBpcyBhIGNvdW50ZXIgcmF0aGVyIHRoYW4gYSB0aW1lc3RhbXAg4oCUIGEgYnVyc3Qgb2YgZmlyc3QtdGltZSBjb21waWxhdGlvbnNcbiAqIGZhbGxzIGludG8gYSBzaW5nbGUgbWlsbGlzZWNvbmQsIHdoaWNoIHdvdWxkIGxlYXZlIHRoZSBldmljdGlvbiBvcmRlciB0byBjaGFuY2UuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvZGVDYWNoZSB7XG5cdC8qKiBAdHlwZSB7Ym9vbGVhbn0gKi9cblx0I2Rpc2FibGVkID0gZmFsc2U7XG5cdC8qKiBAdHlwZSB7bnVtYmVyfSAqL1xuXHQjc2l6ZSA9IDA7XG5cdC8qKiBAdHlwZSB7bnVtYmVyfSAqL1xuXHQjbWF4U2l6ZSA9IDA7XG5cdC8qKiBAdHlwZSB7QXJyYXk8Q2FjaGVFbnRyeT59ICovXG5cdCNlbnRyaWVzID0gW107XG5cdC8qKiBAdHlwZSB7TWFwPHN0cmluZyxDYWNoZUVudHJ5Pn0gKi9cblx0I2VudHJ5TWFwID0gbmV3IE1hcCgpO1xuXHQvKiogQHR5cGUge251bWJlcn0gLSBIYW5kcyBvdXQgdGhlIGBsYXN0SGl0YCBtYXJrZXJzLCBuZXZlciByZXNldC4gKi9cblx0I2Nsb2NrID0gMDtcblxuXG5cdC8qKlxuXHQgKiBTdGFydHMgd2l0aCBhIHNpemUgb2YgNTAwMCwgdGhlbiBhcHBsaWVzIHRoZSBvcHRpb25zLlxuXHQgKlxuXHQgKiBAcGFyYW0ge0NvZGVDYWNoZU9wdGlvbnN9IG9wdGlvbnNcblx0ICovXG5cdGNvbnN0cnVjdG9yKG9wdGlvbnMgPSB7fSkge1xuXHRcdHRoaXMuI3Jlc2l6ZShTVEFSVF9TSVpFKTtcblx0XHR0aGlzLnNldHVwKG9wdGlvbnMpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEFwcGxpZXMgd2hhdCB0aGUgb3B0aW9ucyBjYXJyeSBhbmQgbGVhdmVzIGV2ZXJ5dGhpbmcgZWxzZSBhcyBpdCBpcy4gQSBzaXplIG9mIDAgb3IgbGVzc1xuXHQgKiBkaXNhYmxlcyB0aGUgY2FjaGUgYW5kIHJlbGVhc2VzIGl0cyBlbnRyaWVzLCBhIGxhdGVyIHBvc2l0aXZlIHNpemUgZW5hYmxlcyBpdCBhZ2FpbiBhbmQgc3RhcnRzXG5cdCAqIGVtcHR5LlxuXHQgKlxuXHQgKiBAcGFyYW0ge0NvZGVDYWNoZU9wdGlvbnN9IG9wdGlvbnNcblx0ICogQHRocm93cyB7VHlwZUVycm9yfSB3aGVyZSB0aGUgc2l6ZSBpcyBub3QgYSBmaW5pdGUgbnVtYmVyXG5cdCAqL1xuXHRzZXR1cCh7IHNpemUgfSA9IHt9KSB7XG5cdFx0aWYgKHNpemUgPT09IHVuZGVmaW5lZCkgcmV0dXJuO1xuXHRcdGlmICh0eXBlb2Ygc2l6ZSAhPT0gXCJudW1iZXJcIiB8fCAhTnVtYmVyLmlzRmluaXRlKHNpemUpKSB0aHJvdyBuZXcgVHlwZUVycm9yKGBUaGUgc2l6ZSBvZiBhIGNvZGUgY2FjaGUgaXMgYSBmaW5pdGUgbnVtYmVyLCBub3QgJHtTdHJpbmcoc2l6ZSl9IWApO1xuXG5cdFx0dGhpcy4jcmVzaXplKE1hdGguZmxvb3Ioc2l6ZSkpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSBhU2l6ZSBhIHdob2xlIG51bWJlclxuXHQgKi9cblx0I3Jlc2l6ZShhU2l6ZSkge1xuXHRcdHRoaXMuI2Rpc2FibGVkID0gYVNpemUgPD0gMDtcblx0XHRpZiAodGhpcy4jZGlzYWJsZWQpIHtcblx0XHRcdHRoaXMuI3NpemUgPSAwO1xuXHRcdFx0dGhpcy4jbWF4U2l6ZSA9IDA7XG5cdFx0XHR0aGlzLmNsZWFyKCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuI3NpemUgPSBhU2l6ZTtcblx0XHRcdHRoaXMuI21heFNpemUgPSBNYXRoLmZsb29yKGFTaXplICogMS4xKTtcblx0XHRcdHRoaXMuI3RyaW0oKTtcblx0XHR9XG5cdH1cblxuXHQvKipcblx0ICogV2hldGhlciBhbiBlbnRyeSBpcyBoZWxkIHVuZGVyIHRoZSBrZXkuIEEgZGlzYWJsZWQgY2FjaGUgaG9sZHMgbm9uZS4gQXNraW5nIGRvZXMgbm90IGNvdW50IGFzIGFcblx0ICogaGl0LCBzbyBpdCBsZWF2ZXMgdGhlIGV2aWN0aW9uIG9yZGVyIGFsb25lLlxuXHQgKlxuXHQgKiBAcGFyYW0ge3N0cmluZ30ga2V5XG5cdCAqIEByZXR1cm5zIHtib29sZWFufVxuXHQgKi9cblx0aGFzKGtleSkge1xuXHRcdGlmKHRoaXMuI2Rpc2FibGVkKSByZXR1cm4gZmFsc2U7XG5cdFx0cmV0dXJuIHRoaXMuI2VudHJ5TWFwLmhhcyhrZXkpO1xuXHR9XG5cblx0LyoqXG5cdCAqIFRoZSBjb2RlIGhlbGQgdW5kZXIgdGhlIGtleSwgb3IgbnVsbCB3aGVyZSBub25lIGlzIGhlbGQgb3IgdGhlIGNhY2hlIGlzIGRpc2FibGVkLiBBIGhpdFxuXHQgKiByZWZyZXNoZXMgdGhlIGVudHJ5LCBzbyBpdCBpcyBldmljdGVkIGxhc3QuXG5cdCAqXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBrZXlcblx0ICogQHJldHVybnMgez9GdW5jdGlvbn1cblx0ICovXG5cdGdldChrZXkpIHtcblx0XHRpZih0aGlzLiNkaXNhYmxlZCkgcmV0dXJuIG51bGw7XG5cdFx0Y29uc3QgZW50cnkgPSB0aGlzLiNlbnRyeU1hcC5nZXQoa2V5KTtcblx0XHRpZiAoZW50cnkpIHtcblx0XHRcdGVudHJ5Lmxhc3RIaXQgPSArK3RoaXMuI2Nsb2NrO1xuXHRcdFx0cmV0dXJuIGVudHJ5LnZhbHVlO1xuXHRcdH1cblx0XHRyZXR1cm4gbnVsbDtcblx0fVxuXG5cdC8qKlxuXHQgKiBIb2xkcyB0aGUgY29kZSB1bmRlciB0aGUga2V5LCByZXBsYWNpbmcgd2hhdCB3YXMgaGVsZCB0aGVyZSwgYW5kIHJlZnJlc2hlcyB0aGUgZW50cnkuIE9uY2UgdGhlXG5cdCAqIGNhY2hlIHJlYWNoZXMgYSB0ZW50aCBwYXN0IGl0cyBzaXplLCB0aGUgbGVhc3QgcmVjZW50bHkgdXNlZCBlbnRyaWVzIGFyZSBldmljdGVkIGRvd24gdG8gdGhlXG5cdCAqIHNpemUuXG5cdCAqIEEgZGlzYWJsZWQgY2FjaGUga2VlcHMgbm90aGluZy5cblx0ICpcblx0ICogQHBhcmFtIHtzdHJpbmd9IGtleVxuXHQgKiBAcGFyYW0ge0Z1bmN0aW9ufSBjb2RlXG5cdCAqL1xuXHRzZXQoa2V5LCBjb2RlKSB7XG5cdFx0aWYodGhpcy4jZGlzYWJsZWQpIHJldHVybjtcblx0XHRsZXQgZW50cnkgPSB0aGlzLiNlbnRyeU1hcC5nZXQoa2V5KTtcblx0XHRpZiAoZW50cnkpIHtcblx0XHRcdGVudHJ5Lmxhc3RIaXQgPSArK3RoaXMuI2Nsb2NrO1xuXHRcdFx0ZW50cnkudmFsdWUgPSBjb2RlO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRlbnRyeSA9IHtcblx0XHRcdFx0bGFzdEhpdDogKyt0aGlzLiNjbG9jayxcblx0XHRcdFx0a2V5LFxuXHRcdFx0XHR2YWx1ZTogY29kZSxcblx0XHRcdH07XG5cdFx0XHR0aGlzLiNlbnRyaWVzLnB1c2goZW50cnkpO1xuXHRcdFx0dGhpcy4jZW50cnlNYXAuc2V0KGtleSwgZW50cnkpO1xuXHRcdH1cblxuXHRcdGlmICh0aGlzLiNlbnRyeU1hcC5zaXplID49IHRoaXMuI21heFNpemUpIHRoaXMuI3RyaW0oKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBEcm9wcyBldmVyeSBlbnRyeS4gVGhlIHNpemUgc3RheXMgYXMgaXQgaXMuXG5cdCAqL1xuXHRjbGVhcigpIHtcblx0XHR0aGlzLiNlbnRyaWVzID0gW107XG5cdFx0dGhpcy4jZW50cnlNYXAgPSBuZXcgTWFwKCk7XG5cdH1cblxuXHQjdHJpbSgpIHtcblx0XHR0aGlzLiNlbnRyaWVzLnNvcnQoKGEsIGIpID0+IGIubGFzdEhpdCAtIGEubGFzdEhpdCk7XG5cdFx0aWYgKHRoaXMuI2VudHJpZXMubGVuZ3RoID4gdGhpcy4jc2l6ZSkge1xuXHRcdFx0Y29uc3QgZW50cmllc1RvUmVtb3ZlID0gdGhpcy4jZW50cmllcy5zcGxpY2UodGhpcy4jc2l6ZSk7XG5cdFx0XHRmb3IgKGNvbnN0IGVudHJ5IG9mIGVudHJpZXNUb1JlbW92ZSkge1xuXHRcdFx0XHR0aGlzLiNlbnRyeU1hcC5kZWxldGUoZW50cnkua2V5KTtcblx0XHRcdH1cblx0XHR9XG5cdH1cbn07XG4iLCIvKipcbiAqIEEgZGVmYXVsdCB2YWx1ZSBhcyB0aGUgcmVzb2x2ZXIgY2FycmllcyBpdCwgd2hpY2ggdGVsbHMgXCJubyBkZWZhdWx0IHBhc3NlZFwiIGFwYXJ0IGZyb20gXCJ0aGVcbiAqIGRlZmF1bHQgaXMgdW5kZWZpbmVkXCIuXG4gKlxuICogQGV4cG9ydFxuICogQGNsYXNzIERlZmF1bHRWYWx1ZVxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEZWZhdWx0VmFsdWUge1xuXHQvKipcblx0ICogQ3JlYXRlZCB3aXRob3V0IGFuIGFyZ3VtZW50LCBpdCBjYXJyaWVzIG5vIGRlZmF1bHQ7IGNyZWF0ZWQgd2l0aCBvbmUsIGl0IGNhcnJpZXMgdGhhdFxuXHQgKiBhcmd1bWVudCwgdW5kZWZpbmVkIGluY2x1ZGVkLlxuXHQgKlxuXHQgKiBAY29uc3RydWN0b3Jcblx0ICogQHBhcmFtIHsqfSBbdmFsdWVdXG5cdCAqL1xuXHRjb25zdHJ1Y3Rvcih2YWx1ZSl7XG5cdFx0LyoqIEB0eXBlIHtib29sZWFufSB3aGV0aGVyIGEgZGVmYXVsdCB3YXMgcGFzc2VkICovXG5cdFx0dGhpcy5oYXNWYWx1ZSA9IGFyZ3VtZW50cy5sZW5ndGggPT0gMTtcblx0XHQvKiogQHR5cGUgeyp9IHRoZSBkZWZhdWx0LCBtZWFuaW5nZnVsIG9ubHkgd2hlcmUgaGFzVmFsdWUgaXMgdHJ1ZSAqL1xuXHRcdHRoaXMudmFsdWUgPSB2YWx1ZTtcblx0fVxufTtcbiIsIi8qKlxuICogVGhlIGludGVyZmFjZSBldmVyeSBleGVjdXRlciBpbXBsZW1lbnRzLiBBbiBleGVjdXRlciBydW5zIHN0YXRlbWVudHMgYW5kXG4gKiBob2xkcyBubyBjb250ZXh0IG9mIGl0cyBvd246IHRoZSBjb250ZXh0IGFsd2F5cyBjb21lcyBmcm9tIHRoZSByZXNvbHZlci5cbiAqXG4gKiBBbiBvd24gaW1wbGVtZW50YXRpb24gaXMgYnVpbHQgZnJvbSBpdCBieSBoYW5kaW5nIG92ZXIgdGhlIGZ1bmN0aW9uIHRoYXQgZG9lcyB0aGUgd29yay5cbiAqXG4gKiBAZXhwb3J0XG4gKiBAY2xhc3MgRXhlY3V0ZXJcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXhlY3V0ZXJ7XG5cblx0I2V4ZWN1dGlvbjtcblxuXHQvKipcblx0ICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25dXG5cdCAqIEBwYXJhbSB7KGFTdGF0ZW1lbnQ6IHN0cmluZywgYUNvbnRleHQ6IG9iamVjdCkgPT4gKn0gW29wdGlvbi5leGVjdXRpb25dIHJ1bnMgYSBzdGF0ZW1lbnQgb3ZlclxuXHQgKiBhIGNvbnRleHQgYW5kIGFuc3dlcnMgdGhlIHJlc3VsdCwgYSBwcm9taXNlIGluY2x1ZGVkLiBXaXRob3V0IG9uZSwgZXZlcnkgZXhlY3V0aW9uIHRocm93cy5cblx0ICovXG5cdGNvbnN0cnVjdG9yKHtleGVjdXRpb259ID0ge30pe1xuXHRcdHRoaXMuI2V4ZWN1dGlvbiA9IGV4ZWN1dGlvbiB8fCAoKCkgPT4ge3Rocm93IG5ldyBFcnJvcihcIm5vdCBpbXBsZW1lbnRlZFwiKX0pO1xuXHR9XG5cblx0LyoqXG5cdCAqIFJ1bnMgYSBzdGF0ZW1lbnQgb3ZlciBhIGNvbnRleHQuXG5cdCAqXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBhU3RhdGVtZW50IHRoZSBzdGF0ZW1lbnQsIHdpdGhvdXQgZGVsaW1pdGVycyBhbmQgc2NvcGUgcHJlZml4XG5cdCAqIEBwYXJhbSB7b2JqZWN0fSBhQ29udGV4dCB0aGUgY29udGV4dCBvZiB0aGUgcmVzb2x2ZXIgdGhlIHN0YXRlbWVudCBpcyBldmFsdWF0ZWQgb25cblx0ICogQHJldHVybnMgeyp9IHdoYXQgdGhlIGV4ZWN1dGlvbiBhbnN3ZXJzLCBhIHByb21pc2UgaW5jbHVkZWRcblx0ICovXG5cdGV4ZWN1dGUoYVN0YXRlbWVudCwgYUNvbnRleHQpe1xuXHRcdHJldHVybiB0aGlzLiNleGVjdXRpb24oYVN0YXRlbWVudCwgYUNvbnRleHQpO1xuXHR9XG59O1xuIiwiaW1wb3J0IEV4ZWN1dGVyIGZyb20gXCIuL0V4ZWN1dGVyLmpzXCI7XG5cbmNvbnN0IEVYRUNVVEVSUyA9IG5ldyBNYXAoKTtcblxuLyoqXG4gKiBLZWVwcyBhbiBleGVjdXRlciB1bmRlciBhIG5hbWUsIHNvIGEgcmVzb2x2ZXIgY2FuIGJlIGdpdmVuIHRoZSBuYW1lIGluc3RlYWQgb2YgdGhlIGluc3RhbmNlLlxuICogQW4gZXhlY3V0ZXIgYWxyZWFkeSBrZXB0IHVuZGVyIHRoZSBuYW1lIGlzIHJlcGxhY2VkLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBhTmFtZVxuICogQHBhcmFtIHtFeGVjdXRlcn0gYW5FeGVjdXRlclxuICovXG5leHBvcnQgY29uc3QgcmVnaXN0ZXIgPSAoYU5hbWUsIGFuRXhlY3V0ZXIpID0+IHtcblx0RVhFQ1VURVJTLnNldChhTmFtZSwgYW5FeGVjdXRlcik7XG59O1xuXG4vKipcbiAqIFRoZSBleGVjdXRlciBrZXB0IHVuZGVyIGEgbmFtZS4gQWxzbyB0aGUgZGVmYXVsdCBleHBvcnQgb2YgdGhpcyBtb2R1bGUuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGFOYW1lXG4gKiBAcmV0dXJucyB7RXhlY3V0ZXJ9XG4gKiBAdGhyb3dzIHtFcnJvcn0gd2hlcmUgbm8gZXhlY3V0ZXIgaXMga2VwdCB1bmRlciB0aGUgbmFtZVxuICovXG5leHBvcnQgY29uc3QgZ2V0RXhlY3V0ZXIgPSAoYU5hbWUpID0+IHtcblx0Y29uc3QgZXhlY3V0ZXIgPSBFWEVDVVRFUlMuZ2V0KGFOYW1lKTtcblx0aWYgKCFleGVjdXRlcikgdGhyb3cgbmV3IEVycm9yKGBFeGVjdXRlciBcIiR7YU5hbWV9XCIgaXMgbm90IHJlZ2lzdGVyZWQhYCk7XG5cdHJldHVybiBleGVjdXRlcjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGdldEV4ZWN1dGVyO1xuIiwiaW1wb3J0IE9iamVjdFV0aWxzIGZyb20gXCJAZGVmYXVsdC1qcy9kZWZhdWx0anMtY29tbW9uLXV0aWxzL3NyYy9PYmplY3RVdGlscy5qc1wiO1xuaW1wb3J0IERlZmF1bHRWYWx1ZSBmcm9tIFwiLi9EZWZhdWx0VmFsdWUuanNcIjtcbmltcG9ydCB7IGdldEV4ZWN1dGVyIH0gZnJvbSBcIi4vRXhlY3V0ZXJSZWdpc3RyeS5qc1wiO1xuaW1wb3J0IERlZmF1bHRFeGVjdXRlciBmcm9tIFwiLi9leGVjdXRlci9Db250ZXh0RGVjb25zdHJ1Y3RvckV4ZWN1dGVyLmpzXCI7XG5pbXBvcnQgUmVzb2x2ZXJDb250ZXh0SGFuZGxlIGZyb20gXCIuL1Jlc29sdmVyQ29udGV4dEhhbmRsZS5qc1wiO1xuaW1wb3J0IEV4ZWN1dGVyIGZyb20gXCIuL0V4ZWN1dGVyLmpzXCI7XG5pbXBvcnQgeyBzY2FuLCBwYXJzZUV4cHJlc3Npb24gfSBmcm9tIFwiLi9FeHByZXNzaW9uU2Nhbm5lci5qc1wiO1xuaW1wb3J0IHsgaXNOYW1lQ2hhcmFjdGVyLCB0cmltVG9OdWxsIH0gZnJvbSBcIi4vVXRpbHMuanNcIjtcblxuLyoqIEB0eXBlIHtFeGVjdXRlcn0gKi9cbmxldCBERUZBVUxUX0VYRUNVVEVSID0gRGVmYXVsdEV4ZWN1dGVyO1xuXG5jb25zdCBERUZBVUxUX05PVF9ERUZJTkVEID0gbmV3IERlZmF1bHRWYWx1ZSgpO1xuY29uc3QgdG9EZWZhdWx0VmFsdWUgPSAodmFsdWUpID0+IHtcblx0aWYgKHZhbHVlIGluc3RhbmNlb2YgRGVmYXVsdFZhbHVlKSByZXR1cm4gdmFsdWU7XG5cblx0cmV0dXJuIG5ldyBEZWZhdWx0VmFsdWUodmFsdWUpO1xufTtcblxubGV0IE5BTUVfQ09VTlRFUiA9IDA7XG4vKipcbiAqIFRoZSBuYW1lIGEgcmVzb2x2ZXIgY2FycmllcyB3aGVyZSB0aGUgY2FsbGVyIHBhc3NlZCBub25lLiBPbmx5IHVuaXF1ZW5lc3MgaXMgcHJvbWlzZWQsIHRoZSBzaGFwZVxuICogaXMgbm90LlxuICpcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbmNvbnN0IGdlbmVyYXRlTmFtZSA9ICgpID0+IGBFUiR7KytOQU1FX0NPVU5URVJ9YDtcblxuLyoqXG4gKiBUaGUgbmFtZSBhIHJlc29sdmVyIGtlZXBzOiB0aGUgb25lIHBhc3NlZCwgdHJpbW1lZCBhbmQgaGVsZCB0byB0aGUgY2hhcmFjdGVycyBhIHNjb3BlIG5hbWUgbWF5XG4gKiBjYXJyeSwgb3IgYSBnZW5lcmF0ZWQgb25lIHdoZXJlIG5vbmUgd2FzIHBhc3NlZC5cbiAqXG4gKiBAcGFyYW0gez9zdHJpbmd9IGFOYW1lXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICogQHRocm93cyB7VHlwZUVycm9yfSB3aGVyZSB0aGUgbmFtZSBpcyBubyBzdHJpbmcsIGVtcHR5LCBvciBjYXJyaWVzIGEgY2hhcmFjdGVyIGEgc2NvcGUgbmFtZSBjYW5ub3RcbiAqIGNhcnJ5XG4gKi9cbmNvbnN0IHRvTmFtZSA9IChhTmFtZSkgPT4ge1xuXHRpZiAoYU5hbWUgPT0gbnVsbCkgcmV0dXJuIGdlbmVyYXRlTmFtZSgpO1xuXHRpZiAodHlwZW9mIGFOYW1lICE9PSBcInN0cmluZ1wiKSB0aHJvdyBuZXcgVHlwZUVycm9yKGBUaGUgb3B0aW9uIG5hbWUgdGFrZXMgYSBzdHJpbmcsIG5vdCBhICR7dHlwZW9mIGFOYW1lfSFgKTtcblxuXHRjb25zdCBuYW1lID0gdHJpbVRvTnVsbChhTmFtZSk7XG5cdGlmIChuYW1lID09IG51bGwpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJUaGUgb3B0aW9uIG5hbWUgdGFrZXMgYSBuYW1lLCBub3QgYW4gZW1wdHkgc3RyaW5nIVwiKTtcblx0Zm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IG5hbWUubGVuZ3RoOyBpbmRleCsrKVxuXHRcdGlmICghaXNOYW1lQ2hhcmFjdGVyKG5hbWUuY2hhckNvZGVBdChpbmRleCkpKSB0aHJvdyBuZXcgVHlwZUVycm9yKGBUaGUgbmFtZSBcIiR7bmFtZX1cIiBjYXJyaWVzIGEgY2hhcmFjdGVyIGEgc2NvcGUgbmFtZSBjYW5ub3QgY2FycnkgLSBvbmx5IEFTQ0lJIGxldHRlcnMsIGRpZ2l0cywgXCItXCIsIFwiX1wiIGFuZCB3aGl0ZXNwYWNlIGFyZSBhbGxvd2VkIWApO1xuXG5cdHJldHVybiBuYW1lO1xufTtcblxuLyoqXG4gKiBUaGUgc2NvcGUgbmFtZSBhIGZpbHRlciBvZiB0aGUgZGF0YSBtZXRob2RzIHNlbGVjdHMsIHJlYWQgbGlrZSBhIHNjb3BlIHByZWZpeDogdHJpbW1lZCwgYW5kIG51bGxcbiAqIHdoZXJlIHRoZXJlIGlzIG5vbmUuXG4gKlxuICogQHBhcmFtIHs/c3RyaW5nfSBhRmlsdGVyXG4gKiBAcmV0dXJucyB7P3N0cmluZ31cbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gd2hlcmUgdGhlIGZpbHRlciBpcyBubyBzdHJpbmdcbiAqL1xuY29uc3QgdG9TY29wZSA9IChhRmlsdGVyKSA9PiB7XG5cdGlmIChhRmlsdGVyID09IG51bGwpIHJldHVybiBudWxsO1xuXHRpZiAodHlwZW9mIGFGaWx0ZXIgIT09IFwic3RyaW5nXCIpIHRocm93IG5ldyBUeXBlRXJyb3IoYEEgZmlsdGVyIGlzIGEgc2NvcGUgbmFtZSwgbm90IGEgJHt0eXBlb2YgYUZpbHRlcn0hYCk7XG5cblx0cmV0dXJuIHRyaW1Ub051bGwoYUZpbHRlcik7XG59O1xuXG4vKipcbiAqIFRoZSBwcm9wZXJ0eSBrZXkgYSBkYXRhIG1ldGhvZCB3b3JrcyB3aXRoIC0gYSBzdHJpbmcsIFwiXCIgaW5jbHVkZWQsIGEgc3ltYm9sLCBvciBhIG51bWJlciwgd2hpY2hcbiAqIG5hbWVzIHRoZSBzYW1lIHByb3BlcnR5IGFzIGl0cyBzdHJpbmcgYW5kIGlzIGxvb2tlZCB1cCBhcyBvbmUuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd8bnVtYmVyfHN5bWJvbH0gYUtleVxuICogQHJldHVybnMge3N0cmluZ3xzeW1ib2x9XG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IHdoZXJlIHRoZSBrZXkgaXMgbm9uZSwgb3Igb2YgYSB0eXBlIG5vIHByb3BlcnR5IGtleSBoYXNcbiAqL1xuY29uc3QgdG9LZXkgPSAoYUtleSkgPT4ge1xuXHRjb25zdCB0eXBlID0gdHlwZW9mIGFLZXk7XG5cdGlmICh0eXBlID09PSBcInN0cmluZ1wiIHx8IHR5cGUgPT09IFwic3ltYm9sXCIpIHJldHVybiBhS2V5O1xuXHRpZiAodHlwZSA9PT0gXCJudW1iZXJcIikgcmV0dXJuIFN0cmluZyhhS2V5KTtcblxuXHR0aHJvdyBuZXcgVHlwZUVycm9yKGBBIGtleSBpcyBhIHN0cmluZywgYSBudW1iZXIgb3IgYSBzeW1ib2wsIG5vdCAke2FLZXkgPT0gbnVsbCA/IFwibWlzc2luZ1wiIDogYGEgJHt0eXBlfWB9IWApO1xufTtcblxuY29uc3Qgd2FybkZhaWxlZFN0YXRlbWVudCA9IChhU3RhdGVtZW50LCBhbkVycm9yKSA9PiB7XG5cdGNvbnNvbGUud2FybihgRXhlY3V0aW9uIGVycm9yIG9uIHN0YXRlbWVudCFcblx0XHRzdGF0ZW1lbnQ6XG5cdFx0JHthU3RhdGVtZW50fVxuXHRcdGVycm9yOlxuXHRcdCR7YW5FcnJvcn1cblx0XHRgKTtcbn07XG5cbi8qKlxuICogQHBhcmFtIHsqfSBhUmVzdWx0XG4gKiBAcGFyYW0ge0RlZmF1bHRWYWx1ZX0gYURlZmF1bHRcbiAqIEByZXR1cm5zIHsqfVxuICovXG5jb25zdCB3aXRoRGVmYXVsdCA9IChhUmVzdWx0LCBhRGVmYXVsdCkgPT4ge1xuXHRpZiAoYVJlc3VsdCAhPT0gbnVsbCAmJiB0eXBlb2YgYVJlc3VsdCAhPT0gXCJ1bmRlZmluZWRcIikgcmV0dXJuIGFSZXN1bHQ7XG5cdGVsc2UgaWYgKGFEZWZhdWx0Lmhhc1ZhbHVlKSByZXR1cm4gYURlZmF1bHQudmFsdWU7XG5cdHJldHVybiBhUmVzdWx0O1xufTtcblxuLy8gdGhlIGZpcnN0IGFyZ3VtZW50IG9mIGEgc3RhdGljIGVudHJ5IHBvaW50IGlzIGEgc3RyaW5nLCBvciBhIGNvbmZpZ3VyYXRpb24gb2JqZWN0XG5jb25zdCBpc0NvbmZpZ3VyYXRpb24gPSAoYVZhbHVlKSA9PiBhVmFsdWUgIT09IG51bGwgJiYgdHlwZW9mIGFWYWx1ZSA9PT0gXCJvYmplY3RcIjtcblxuLy8gYSBjb25maWd1cmF0aW9uIGNvdW50cyBhcyBwYXNzaW5nIGEgZGVmYXVsdCB3aGVyZSBpdCBjYXJyaWVzIHRoZSBrZXksIHdoYXRldmVyIGl0IGhvbGRzXG5jb25zdCBkZWZhdWx0T2YgPSAoYUNvbmZpZ3VyYXRpb24pID0+IChcImRlZmF1bHRWYWx1ZVwiIGluIGFDb25maWd1cmF0aW9uID8gYUNvbmZpZ3VyYXRpb24uZGVmYXVsdFZhbHVlIDogREVGQVVMVF9OT1RfREVGSU5FRCk7XG5cbi8qKlxuICogUmVzb2x2ZXMgYCR7Li4ufWAgZXhwcmVzc2lvbnMgYWdhaW5zdCBhIGNvbnRleHQuIEEgcmVzb2x2ZXIgbWF5IGhhdmUgYSBwYXJlbnQsIGFuZCB0aGUgcmVzb2x2ZXJzXG4gKiBmcm9tIGl0IHVwIHRvIHRoZSByb290IGZvcm0gYSBjaGFpbjogYSBuYW1lIGlzIGxvb2tlZCB1cCBmcm9tIHRoaXMgcmVzb2x2ZXIgdG93YXJkcyB0aGUgcm9vdCwgYW5kXG4gKiBhIHNjb3BlIHByZWZpeCBgJHtuYW1lOjpzdGF0ZW1lbnR9YCBhZGRyZXNzZXMgb25lIHJlc29sdmVyIG9mIHRoZSBjaGFpbi5cbiAqXG4gKiBVc2VkIHN0YXRpY2FsbHkgd2l0aCBhbiBhZC1ob2MgY29udGV4dCAoYHJlc29sdmVgLCBgcmVzb2x2ZVRleHRgKSwgb3IgYXMgYW4gaW5zdGFuY2Ugd2l0aGluIGFcbiAqIGNoYWluLlxuICpcbiAqIEBleHBvcnRcbiAqIEBjbGFzcyBFeHByZXNzaW9uUmVzb2x2ZXJcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXhwcmVzc2lvblJlc29sdmVyIHtcblx0LyoqXG5cdCAqIFNldHMgdGhlIGV4ZWN1dGVyIGEgcmVzb2x2ZXIgd2l0aG91dCBhIHBhcmVudCB0YWtlcyB3aGVyZSB0aGUgYGV4ZWN1dGVyYCBvcHRpb24gaXMgbGVmdCBvdXQsXG5cdCAqIGFuZCBzbyB0aGUgZXhlY3V0ZXIgb2YgdGhlIHN0YXRpYyBlbnRyeSBwb2ludHMuXG5cdCAqXG5cdCAqIEBwYXJhbSB7c3RyaW5nfEV4ZWN1dGVyfSBhbkV4ZWN1dGVyIGEgcmVnaXN0ZXJlZCBuYW1lIG9yIGFuIGBFeGVjdXRlcmAgaW5zdGFuY2Vcblx0ICogQHRocm93cyB7VHlwZUVycm9yfSB3aGVyZSB0aGUgdmFsdWUgaXMgbmVpdGhlciBhIHN0cmluZyBub3IgYW4gYEV4ZWN1dGVyYCBpbnN0YW5jZVxuXHQgKiBAdGhyb3dzIHtFcnJvcn0gd2hlcmUgYSBuYW1lIGlzIG5vdCByZWdpc3RlcmVkXG5cdCAqL1xuXHRzdGF0aWMgc2V0IGRlZmF1bHRFeGVjdXRlcihhbkV4ZWN1dGVyKSB7XG5cdFx0aWYgKGFuRXhlY3V0ZXIgaW5zdGFuY2VvZiBFeGVjdXRlcikgREVGQVVMVF9FWEVDVVRFUiA9IGFuRXhlY3V0ZXI7XG5cdFx0ZWxzZSBpZiAodHlwZW9mIGFuRXhlY3V0ZXIgPT09IFwic3RyaW5nXCIpIERFRkFVTFRfRVhFQ1VURVIgPSBnZXRFeGVjdXRlcihhbkV4ZWN1dGVyKTtcblx0XHRlbHNlIHRocm93IG5ldyBUeXBlRXJyb3IoYEV4cHJlc3Npb25SZXNvbHZlci5kZWZhdWx0RXhlY3V0ZXIgdGFrZXMgYSByZWdpc3RlcmVkIG5hbWUgb3IgYW4gRXhlY3V0ZXIsIG5vdCBhICR7dHlwZW9mIGFuRXhlY3V0ZXJ9IWApO1xuXHRcdGNvbnNvbGUuaW5mbyhgQ2hhbmdlZCBkZWZhdWx0IGV4ZWN1dGVyIGZvciBFeHByZXNzaW9uUmVzb2x2ZXIhYCk7XG5cdH1cblxuXHQvKipcblx0ICogVGhlIGV4ZWN1dGVyIGEgcmVzb2x2ZXIgd2l0aG91dCBhIHBhcmVudCB0YWtlcyB3aGVyZSB0aGUgYGV4ZWN1dGVyYCBvcHRpb24gaXMgbGVmdCBvdXQ7XG5cdCAqIGBjb250ZXh0LWRlY29uc3RydWN0aW9uLWV4ZWN1dGVyYCB1bnRpbCBpdCBpcyBzZXQuXG5cdCAqXG5cdCAqIEB0eXBlIHtFeGVjdXRlcn1cblx0ICovXG5cdHN0YXRpYyBnZXQgZGVmYXVsdEV4ZWN1dGVyKCkge1xuXHRcdHJldHVybiBERUZBVUxUX0VYRUNVVEVSO1xuXHR9XG5cblx0LyoqIEB0eXBlIHtzdHJpbmd8bnVsbH0gKi9cblx0I25hbWUgPSBudWxsO1xuXHQvKiogQHR5cGUge0V4cHJlc3Npb25SZXNvbHZlcnxudWxsfSAqL1xuXHQjcGFyZW50ID0gbnVsbDtcblx0LyoqIEB0eXBlIHtFeGVjdXRlcnxudWxsfSAqL1xuXHQjZXhlY3V0ZXIgPSBudWxsO1xuXHQvKiogQHR5cGUge29iamVjdHxudWxsfSAqL1xuXHQjY29udGV4dCA9IG51bGw7XG5cdC8qKiBAdHlwZSB7UmVzb2x2ZXJDb250ZXh0SGFuZGxlfG51bGx9ICovXG5cdCNjb250ZXh0SGFuZGxlID0gbnVsbDtcblxuXHQvKipcblx0ICogQGNvbnN0cnVjdG9yXG5cdCAqIEBwYXJhbSB7b2JqZWN0fSBbb3B0aW9uc11cblx0ICogQHBhcmFtIHs/b2JqZWN0fSBbb3B0aW9ucy5jb250ZXh0XSBhbnkgb2JqZWN0OyB3aGVyZSBub25lIGlzIHBhc3NlZCAtIGxlZnQgb3V0LCBudWxsIG9yXG5cdCAqIHVuZGVmaW5lZCAtIHRoZSByZXNvbHZlciBoYXMgbm8gY29udGV4dCBvZiBpdHMgb3duXG5cdCAqIEBwYXJhbSB7P0V4cHJlc3Npb25SZXNvbHZlcn0gW29wdGlvbnMucGFyZW50PW51bGxdXG5cdCAqIEBwYXJhbSB7P3N0cmluZ30gW29wdGlvbnMubmFtZT1udWxsXSBrZXB0IHRyaW1tZWQ7IHdoZXJlIG5vbmUgaXMgcGFzc2VkLCBvbmUgaXMgZ2VuZXJhdGVkXG5cdCAqIEBwYXJhbSB7PyhzdHJpbmd8RXhlY3V0ZXIpfSBbb3B0aW9ucy5leGVjdXRlcl0gdGhlIHJlZ2lzdGVyZWQgbmFtZSBvZiBhbiBleGVjdXRlciwgb3IgYW5cblx0ICogYEV4ZWN1dGVyYCBpbnN0YW5jZS4gQSBuYW1lIHRoYXQgaXMgbm90IHJlZ2lzdGVyZWQgdGhyb3dzOyBhbiBpbnN0YW5jZSBuZWVkcyBubyByZWdpc3RyYXRpb24sXG5cdCAqIGJlY2F1c2UgaXQgYWRkcmVzc2VzIHRoZSBleGVjdXRlciBkaXJlY3RseS4gTnVsbCBhbmQgdW5kZWZpbmVkIGNvdW50IGFzIGxlZnQgb3V0LiBXaXRob3V0IHRoZVxuXHQgKiBvcHRpb24gdGhlIHJlc29sdmVyIHRha2VzIHRoZSBleGVjdXRlciBvZiBpdHMgcGFyZW50LCBhbmQgb25lIHdpdGhvdXQgYSBwYXJlbnRcblx0ICogYEV4cHJlc3Npb25SZXNvbHZlci5kZWZhdWx0RXhlY3V0ZXJgLlxuXHQgKiBAdGhyb3dzIHtUeXBlRXJyb3J9IHdoZXJlIHRoZSBwYXJlbnQgaXMgbm8gcmVzb2x2ZXIsIHRoZSBjb250ZXh0IGEgcHJpbWl0aXZlLCB0aGUgbmFtZSBub1xuXHQgKiBzdHJpbmcsIGVtcHR5LCBvciBjYXJyeWluZyBhIGNoYXJhY3RlciBhIHNjb3BlIG5hbWUgY2Fubm90IGNhcnJ5LCBvciB0aGUgZXhlY3V0ZXIgbmVpdGhlciBhXG5cdCAqIHN0cmluZyBub3IgYW4gYEV4ZWN1dGVyYCBpbnN0YW5jZVxuXHQgKiBAdGhyb3dzIHtFcnJvcn0gd2hlcmUgdGhlIGV4ZWN1dGVyIGlzIG5hbWVkIGFuZCB0aGUgbmFtZSBpcyBub3QgcmVnaXN0ZXJlZFxuXHQgKi9cblx0Y29uc3RydWN0b3IoeyBjb250ZXh0LCBwYXJlbnQgPSBudWxsLCBuYW1lID0gbnVsbCwgZXhlY3V0ZXIgfSA9IHt9KSB7XG5cdFx0aWYgKHBhcmVudCAhPSBudWxsICYmICEocGFyZW50IGluc3RhbmNlb2YgRXhwcmVzc2lvblJlc29sdmVyKSkgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlRoZSBvcHRpb24gcGFyZW50IHRha2VzIGFuIEV4cHJlc3Npb25SZXNvbHZlciFcIik7XG5cdFx0aWYgKGNvbnRleHQgIT0gbnVsbCAmJiB0eXBlb2YgY29udGV4dCAhPT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgY29udGV4dCAhPT0gXCJmdW5jdGlvblwiKSB0aHJvdyBuZXcgVHlwZUVycm9yKGBUaGUgb3B0aW9uIGNvbnRleHQgdGFrZXMgYW4gb2JqZWN0LCBub3QgYSAke3R5cGVvZiBjb250ZXh0fSFgKTtcblx0XHRpZiAoZXhlY3V0ZXIgIT0gbnVsbCAmJiB0eXBlb2YgZXhlY3V0ZXIgIT09IFwic3RyaW5nXCIgJiYgIShleGVjdXRlciBpbnN0YW5jZW9mIEV4ZWN1dGVyKSkgdGhyb3cgbmV3IFR5cGVFcnJvcihgVGhlIG9wdGlvbiBleGVjdXRlciB0YWtlcyBhIHJlZ2lzdGVyZWQgbmFtZSBvciBhbiBFeGVjdXRlciwgbm90IGEgJHt0eXBlb2YgZXhlY3V0ZXJ9IWApO1xuXHRcdHRoaXMuI25hbWUgPSB0b05hbWUobmFtZSk7XG5cblx0XHRpZihleGVjdXRlciBpbnN0YW5jZW9mIEV4ZWN1dGVyKSB0aGlzLiNleGVjdXRlciA9ICBleGVjdXRlcjtcblx0XHRlbHNlIGlmICh0eXBlb2YgZXhlY3V0ZXIgPT09IFwic3RyaW5nXCIpIHRoaXMuI2V4ZWN1dGVyID0gZ2V0RXhlY3V0ZXIoZXhlY3V0ZXIpO1xuXHRcdGVsc2UgaWYocGFyZW50ICE9IG51bGwpIHRoaXMuI2V4ZWN1dGVyID0gcGFyZW50LmV4ZWN1dGVyO1xuXHRcdGVsc2UgdGhpcy4jZXhlY3V0ZXIgPSBFeHByZXNzaW9uUmVzb2x2ZXIuZGVmYXVsdEV4ZWN1dGVyO1xuXG5cdFx0dGhpcy4jcGFyZW50ID0gcGFyZW50O1xuXHRcdHRoaXMuI2NvbnRleHRIYW5kbGUgPSBuZXcgUmVzb2x2ZXJDb250ZXh0SGFuZGxlKGNvbnRleHQgLCB0aGlzLiNwYXJlbnQgPyB0aGlzLiNwYXJlbnQuY29udGV4dEhhbmRsZSA6IG51bGwpO1xuXHRcdHRoaXMuI2NvbnRleHQgPSB0aGlzLiNjb250ZXh0SGFuZGxlLmNvbnRleHQ7XG5cdH1cblxuXHQvKipcblx0ICogVGhlIG5hbWUgdGhpcyByZXNvbHZlciBpcyBhZGRyZXNzZWQgYnkgaW4gYSBzY29wZSBwcmVmaXggYW5kIGEgZmlsdGVyLlxuXHQgKlxuXHQgKiBAdHlwZSB7c3RyaW5nfVxuXHQgKi9cblx0Z2V0IG5hbWUoKSB7XG5cdFx0cmV0dXJuIHRoaXMuI25hbWU7XG5cdH1cblxuXHQvKipcblx0ICogQHR5cGUge0V4cHJlc3Npb25SZXNvbHZlcnxudWxsfVxuXHQgKi9cblx0Z2V0IHBhcmVudCgpIHtcblx0XHRyZXR1cm4gdGhpcy4jcGFyZW50O1xuXHR9XG5cblx0LyoqXG5cdCAqIFRoZSBjb250ZXh0IG9mIHRoaXMgcmVzb2x2ZXIgYXMgYW4gZXhwcmVzc2lvbiBzZWVzIGl0LiBJdCBpcyBub3QgdGhlIG9iamVjdCBwYXNzZWQgdG8gdGhlXG5cdCAqIGNvbnN0cnVjdG9yIGFuZCBpdCBhbnN3ZXJzIGZvciB0aGUgd2hvbGUgY2hhaW4uIE92ZXIgdGhlIGdsb2JhbCBvYmplY3QgaXQgaXMgdGhlIGdsb2JhbFxuXHQgKiBvYmplY3QgaXRzZWxmLlxuXHQgKlxuXHQgKiBAdHlwZSB7UmVjb3JkPHN0cmluZ3xzeW1ib2wsICo+fVxuXHQgKi9cblx0Z2V0IGNvbnRleHQoKSB7XG5cdFx0cmV0dXJuIHRoaXMuI2NvbnRleHQ7XG5cdH1cblxuXHQvKipcblx0ICogVGhlIGV4ZWN1dGVyIGluIHVzZSwgY2hvc2VuIG9uY2UgaW4gdGhlIGNvbnN0cnVjdG9yLlxuXHQgKlxuXHQgKiBAdHlwZSB7RXhlY3V0ZXJ9XG5cdCAqL1xuXHRnZXQgZXhlY3V0ZXIoKSB7XG5cdFx0cmV0dXJuIHRoaXMuI2V4ZWN1dGVyO1xuXHR9XG5cblx0LyoqXG5cdCAqIFRoZSBpbnRlcm5hbCBoYW5kbGUgYmVoaW5kIHRoZSBjb250ZXh0LCBwdWJsaWMgZm9yIGByZXNldENhY2hlYC5cblx0ICpcblx0ICogQHR5cGUge1Jlc29sdmVyQ29udGV4dEhhbmRsZX1cblx0ICovXG5cdGdldCBjb250ZXh0SGFuZGxlKCkge1xuXHRcdHJldHVybiB0aGlzLiNjb250ZXh0SGFuZGxlO1xuXHR9XG5cblx0LyoqXG5cdCAqIFRoZSBuYW1lcyBvZiBldmVyeSByZXNvbHZlciBmcm9tIHRoZSByb290IGRvd24gdG8gdGhpcyBvbmUsIGFzIGEgcGF0aCAtIGAvcm9vdC/igKYvdGhpc2AuIEl0XG5cdCAqIGRlc2NyaWJlcyB0aGUgc3RydWN0dXJlIGFuZCBkb2VzIG5vdCBjaGFuZ2UuXG5cdCAqXG5cdCAqIEB0eXBlIHtzdHJpbmd9XG5cdCAqL1xuXHRnZXQgY2hhaW4oKSB7XG5cdFx0Ly8gYSBsb29wLCBub3QgYSByZWN1cnNpb24gaW50byB0aGUgcGFyZW50OiBhIGRlZXAgY2hhaW4gb3ZlcmZsb3dlZCB0aGUgc3RhY2tcblx0XHRsZXQgcGF0aCA9IFwiXCI7XG5cdFx0bGV0IHJlc29sdmVyID0gdGhpcztcblx0XHR3aGlsZSAocmVzb2x2ZXIpIHtcblx0XHRcdHBhdGggPSBgLyR7cmVzb2x2ZXIubmFtZX0ke3BhdGh9YDtcblx0XHRcdHJlc29sdmVyID0gcmVzb2x2ZXIucGFyZW50O1xuXHRcdH1cblxuXHRcdHJldHVybiBwYXRoO1xuXHR9XG5cblx0LyoqXG5cdCAqIFRoZSBuYW1lcyBvZiB0aGUgcmVzb2x2ZXJzIGZyb20gdGhlIHJvb3QgZG93biB0byB0aGlzIG9uZSB0aGF0IHByb3ZpZGUgYSBjb250ZXh0LCBhcyBhIHBhdGhcblx0ICogbGlrZSBgY2hhaW5gLiBBIHJlc29sdmVyIGJ1aWx0IHdpdGhvdXQgYSBjb250ZXh0IGpvaW5zIGl0IHRoZSBtb21lbnQgYSB2YWx1ZSBpcyBzZXQgb24gaXQsIHNvXG5cdCAqIHRoaXMgZGVzY3JpYmVzIGEgc3RhdGUgYW5kIG5vdCB0aGUgc3RydWN0dXJlLiBXaGVyZSBub25lIHByb3ZpZGVzIG9uZSxcblx0ICogdGhlIGFuc3dlciBpcyB0aGUgZW1wdHkgc3RyaW5nLlxuXHQgKlxuXHQgKiBAdHlwZSB7c3RyaW5nfVxuXHQgKi9cblx0Z2V0IGVmZmVjdGl2ZUNoYWluKCkge1xuXHRcdC8vIGEgbG9vcCwgbm90IGEgcmVjdXJzaW9uIGludG8gdGhlIHBhcmVudDogYSBkZWVwIGNoYWluIG92ZXJmbG93ZWQgdGhlIHN0YWNrXG5cdFx0bGV0IHBhdGggPSBcIlwiO1xuXHRcdGxldCByZXNvbHZlciA9IHRoaXM7XG5cdFx0d2hpbGUgKHJlc29sdmVyKSB7XG5cdFx0XHRpZiAocmVzb2x2ZXIuY29udGV4dEhhbmRsZS5wcm92aWRlc0NvbnRleHQpIHBhdGggPSBgLyR7cmVzb2x2ZXIubmFtZX0ke3BhdGh9YDtcblx0XHRcdHJlc29sdmVyID0gcmVzb2x2ZXIucGFyZW50O1xuXHRcdH1cblxuXHRcdHJldHVybiBwYXRoO1xuXHR9XG5cblx0LyoqXG5cdCAqIFRoZSBjb250ZXh0cyBvZiBleGFjdGx5IHRoZSByZXNvbHZlcnMgYGVmZmVjdGl2ZUNoYWluYCBuYW1lcywgYXMgYW4gYXJyYXksIHRoaXMgcmVzb2x2ZXInc1xuXHQgKiBmaXJzdCBhbmQgdGhlIHJvb3QncyBsYXN0LiBBIHN0YXRlIGxpa2UgYGVmZmVjdGl2ZUNoYWluYC5cblx0ICpcblx0ICogQHR5cGUge0FycmF5PFJlY29yZDxzdHJpbmd8c3ltYm9sLCAqPj59XG5cdCAqL1xuXHRnZXQgY29udGV4dENoYWluKCkge1xuXHRcdGNvbnN0IHJlc3VsdCA9IFtdO1xuXHRcdGxldCByZXNvbHZlciA9IHRoaXM7XG5cdFx0d2hpbGUgKHJlc29sdmVyKSB7XG5cdFx0XHRpZiAocmVzb2x2ZXIuY29udGV4dEhhbmRsZS5wcm92aWRlc0NvbnRleHQpIHJlc3VsdC5wdXNoKHJlc29sdmVyLmNvbnRleHQpO1xuXG5cdFx0XHRyZXNvbHZlciA9IHJlc29sdmVyLnBhcmVudDtcblx0XHR9XG5cblx0XHRyZXR1cm4gcmVzdWx0O1xuXHR9XG5cblx0LyoqXG5cdCAqIFRoZSByZXNvbHZlciBhIGNhbGwgYWRkcmVzc2VzOiB0aGUgb25lIHRoZSBmaWx0ZXIgbmFtZXMsIG9yIHRoZSByZXNvbHZlciB0aGUgY2FsbCB3YXMgbWFkZSBvblxuXHQgKiB3aGVyZSBubyBmaWx0ZXIgaXMgZ2l2ZW4uXG5cdCAqXG5cdCAqIEEgZmlsdGVyIHNlbGVjdHMgZXhhY3RseSBvbmUgcmVzb2x2ZXIsIHRoZSBuZWFyZXN0IG9mIHRoYXQgbmFtZSBmcm9tIGhlcmUgdG93YXJkcyB0aGUgcm9vdCwgYW5kXG5cdCAqIGEgZmlsdGVyIG1hdGNoaW5nIG5vbmUgdGhyb3dzIC0gYSB3cm9uZyBuYW1lIGluIGFuIEFQSSBjYWxsIGlzIGEgbWlzdGFrZSBpbiB0aGUgY2FsbGluZyBjb2RlLFxuXHQgKiB1bmxpa2UgYSBzY29wZSBwcmVmaXggaW5zaWRlIGFuIGV4cHJlc3Npb24sIHdoaWNoIGFuc3dlcnMgdW5kZWZpbmVkLlxuXHQgKlxuXHQgKiBAcGFyYW0gez9zdHJpbmd9IGFTY29wZSB0aGUgZmlsdGVyIGFzIGB0b1Njb3BlYCByZWFkcyBpdFxuXHQgKiBAcmV0dXJucyB7RXhwcmVzc2lvblJlc29sdmVyfVxuXHQgKi9cblx0I2ZpbmRSZXNvbHZlcihhU2NvcGUpIHtcblx0XHRpZiAoIWFTY29wZSkgcmV0dXJuIHRoaXM7XG5cblx0XHRjb25zdCByZXNvbHZlciA9IHRoaXMuI3Jlc29sdmVyRm9yU2NvcGUoYVNjb3BlKTtcblx0XHRpZiAocmVzb2x2ZXIpIHJldHVybiByZXNvbHZlcjtcblxuXHRcdHRocm93IG5ldyBFcnJvcihgRmlsdGVyIFwiJHthU2NvcGV9XCIgbWF0Y2hlcyBubyByZXNvbHZlciBvZiB0aGUgY2hhaW4hYCk7XG5cdH1cblxuXHQvKipcblx0ICogVGhlIG5lYXJlc3QgcmVzb2x2ZXIgZnJvbSBoZXJlIHRvIHRoZSByb290IHRoYXQgY2FycmllcyB0aGUgc2NvcGUgbmFtZSwgb3IgbnVsbCB3aGVyZSBub25lXG5cdCAqIGNhcnJpZXMgaXQuIEEgZmlsdGVyIGFuZCBhIHNjb3BlIHByZWZpeCBhbnN3ZXIgYSBtaXNzIGRpZmZlcmVudGx5LCBzbyBlYWNoIGNhbGxlciBkb2VzIHRoYXRcblx0ICogZm9yIGl0c2VsZi5cblx0ICpcblx0ICogQHBhcmFtIHtzdHJpbmd9IGFTY29wZVxuXHQgKiBAcmV0dXJucyB7RXhwcmVzc2lvblJlc29sdmVyfG51bGx9XG5cdCAqL1xuXHQjcmVzb2x2ZXJGb3JTY29wZShhU2NvcGUpIHtcblx0XHQvLyBhIGxvb3AsIG5vdCBhIHJlY3Vyc2lvbiBpbnRvIHRoZSBwYXJlbnQ6IG9uZSBjYWxsIHBlciByZXNvbHZlciBjbGltYmVkIG92ZXJmbG93ZWQgdGhlXG5cdFx0Ly8gc3RhY2sgb24gYSBkZWVwIGNoYWluXG5cdFx0bGV0IHJlc29sdmVyID0gdGhpcztcblx0XHR3aGlsZSAocmVzb2x2ZXIpIHtcblx0XHRcdGlmIChyZXNvbHZlci4jbmFtZSA9PT0gYVNjb3BlKSByZXR1cm4gcmVzb2x2ZXI7XG5cdFx0XHRyZXNvbHZlciA9IHJlc29sdmVyLiNwYXJlbnQ7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cblxuXHQvKipcblx0ICogSGFuZHMgYSBzdGF0ZW1lbnQgdG8gdGhlIHJlc29sdmVyIGl0IGFkZHJlc3NlcyAtIHRoZSBvbmUgaXRzIHNjb3BlIHByZWZpeCBuYW1lcywgb3IgdGhpcyBvbmVcblx0ICogd2l0aG91dCBhIHByZWZpeCAtIGFuZCBhbnN3ZXJzIHdoYXQgdGhhdCByZXNvbHZlcidzIGV4ZWN1dGVyIGFuc3dlcnMsIGEgcHJvbWlzZSBpbmNsdWRlZC4gQW5cblx0ICogZW1wdHkgc3RhdGVtZW50IGFuZCBhIHByZWZpeCBubyByZXNvbHZlciBvZiB0aGUgY2hhaW4gY2FycmllcyBhbnN3ZXIgdW5kZWZpbmVkLCBhbmQgdGhlIGRlZmF1bHRcblx0ICogYXBwbGllcyB0byBpdCBsaWtlIHRvIGFueSBvdGhlciByZXN1bHQuXG5cdCAqXG5cdCAqIERlbGliZXJhdGVseSBub3QgYXN5bmM6IHRoZSBlbnRyeSBwb2ludCBhd2FpdHMgdGhlIGFuc3dlciBvbmNlLCBhbmQgYSBzeW5jaHJvbm91cyB0aHJvdyBvZiB0aGVcblx0ICogZXhlY3V0ZXIgbGFuZHMgaW4gaXRzIGB0cnlgIGFsbCB0aGUgc2FtZS4gQW4gZXJyb3IgaXMgbm90IGNhdWdodCBoZXJlLCBiZWNhdXNlIHRoZSB0d28gZW50cnlcblx0ICogcG9pbnRzIGFuc3dlciBpdCBkaWZmZXJlbnRseS5cblx0ICpcblx0ICogQHBhcmFtIHs/c3RyaW5nfSBhU3RhdGVtZW50IHRyaW1tZWQsIGFuZCBudWxsIHdoZXJlIGl0IGlzIGVtcHR5XG5cdCAqIEBwYXJhbSB7P3N0cmluZ30gYVNjb3BlIHRoZSBzY29wZSBwcmVmaXgsIG51bGwgd2hlcmUgdGhlcmUgaXMgbm9uZVxuXHQgKiBAcmV0dXJucyB7Kn1cblx0ICovXG5cdCNleGVjdXRlKGFTdGF0ZW1lbnQsIGFTY29wZSkge1xuXHRcdGNvbnN0IHJlc29sdmVyID0gYVNjb3BlID8gdGhpcy4jcmVzb2x2ZXJGb3JTY29wZShhU2NvcGUpIDogdGhpcztcblx0XHQvLyBhbiBlbXB0eSBzdGF0ZW1lbnQgYW5zd2VycyB1bmRlZmluZWQsIHRoZSBzYW1lIGFzIGByZXR1cm47YCBpbiBKYXZhU2NyaXB0XG5cdFx0aWYgKHJlc29sdmVyID09PSBudWxsIHx8IGFTdGF0ZW1lbnQgPT0gbnVsbCkgcmV0dXJuIHVuZGVmaW5lZDtcblxuXHRcdHJldHVybiByZXNvbHZlci4jZXhlY3V0ZXIuZXhlY3V0ZShhU3RhdGVtZW50LCByZXNvbHZlci4jY29udGV4dCk7XG5cdH1cblxuXHQvKipcblx0ICogVGhlIG5lYXJlc3QgcmVzb2x2ZXIgZnJvbSBoZXJlIHRvIHRoZSByb290IHRoYXQgY2FycmllcyB0aGUga2V5IGl0c2VsZiwgb3IgbnVsbCB3aGVyZSBub25lXG5cdCAqIGNhcnJpZXMgaXQuIFdoYXQgZGVjaWRlcyBpcyB3aGV0aGVyIGEgcmVzb2x2ZXIgcHJvdmlkZXMgdGhlIG5hbWUsIG5vdCB3aGF0IGl0IGhvbGRzLlxuXHQgKlxuXHQgKiBAcGFyYW0ge3N0cmluZ3xzeW1ib2x9IGtleVxuXHQgKiBAcmV0dXJucyB7RXhwcmVzc2lvblJlc29sdmVyfG51bGx9XG5cdCAqL1xuXHQjcmVzb2x2ZXJGb3JLZXkoa2V5KSB7XG5cdFx0bGV0IHJlc29sdmVyID0gdGhpcztcblx0XHR3aGlsZSAocmVzb2x2ZXIpIHtcblx0XHRcdGlmIChyZXNvbHZlci5jb250ZXh0SGFuZGxlLmhhc05hbWUoa2V5KSkgcmV0dXJuIHJlc29sdmVyO1xuXHRcdFx0cmVzb2x2ZXIgPSByZXNvbHZlci5wYXJlbnQ7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cblxuXHQvKipcblx0ICogUmVhZHMgYSB2YWx1ZSBhbG9uZyB0aGUgY2hhaW4sIGZyb20gdGhlIGFkZHJlc3NlZCByZXNvbHZlciB0b3dhcmRzIHRoZSByb290LiBXaXRob3V0IGEga2V5IC1cblx0ICogbnVsbCBvciB1bmRlZmluZWQgLSBpdCBhbnN3ZXJzIHRoZSB3aG9sZSBjb250ZXh0IG9mIHRoYXQgcmVzb2x2ZXIsIHdoaWNoIHN0aWxsIHNlZXMgdGhlIGNoYWluIG9uXG5cdCAqIGV2ZXJ5IGFjY2Vzcy5cblx0ICpcblx0ICogQHBhcmFtIHs/KHN0cmluZ3xudW1iZXJ8c3ltYm9sKX0gW2tleV0gYSBwcm9wZXJ0eSBrZXk7IGEgbnVtYmVyIGlzIGxvb2tlZCB1cCBhcyBpdHMgc3RyaW5nXG5cdCAqIEBwYXJhbSB7P3N0cmluZ30gW2ZpbHRlcl0gdGhlIHNjb3BlIG5hbWUgb2YgdGhlIHJlc29sdmVyIHRoZSBjYWxsIGFkZHJlc3Nlczsgd2l0aG91dCBvbmUsIHRoaXNcblx0ICogcmVzb2x2ZXJcblx0ICogQHJldHVybnMgeyp9IHRoZSB2YWx1ZSwgb3IgdGhlIHdob2xlIGNvbnRleHQgd2l0aG91dCBhIGtleVxuXHQgKiBAdGhyb3dzIHtUeXBlRXJyb3J9IHdoZXJlIHRoZSBrZXkgaXMgb2YgYSB0eXBlIG5vIHByb3BlcnR5IGtleSBoYXMsIG9yIHRoZSBmaWx0ZXIgbm8gc3RyaW5nXG5cdCAqIEB0aHJvd3Mge0Vycm9yfSB3aGVyZSB0aGUgZmlsdGVyIG1hdGNoZXMgbm8gcmVzb2x2ZXIgb2YgdGhlIGNoYWluXG5cdCAqL1xuXHRnZXREYXRhKGtleSwgZmlsdGVyKSB7XG5cdFx0Y29uc3QgcmVzb2x2ZXIgPSB0aGlzLiNmaW5kUmVzb2x2ZXIodG9TY29wZShmaWx0ZXIpKTtcblx0XHRpZiAoa2V5ID09IG51bGwpIHJldHVybiByZXNvbHZlci5jb250ZXh0O1xuXG5cdFx0cmV0dXJuIHJlc29sdmVyLmNvbnRleHRbdG9LZXkoa2V5KV07XG5cdH1cblxuXHQvKipcblx0ICogU2V0cyBhIHZhbHVlLCBpbiB0aGUgb2JqZWN0IHRoZSBjYWxsZXIgaGFuZGVkIG92ZXIuIFdpdGhvdXQgYSBmaWx0ZXIgdGhlIHZhbHVlIGlzIGNoYW5nZWQgd2hlcmVcblx0ICogdGhlIGtleSBsaXZlcywgY291bnRpbmcgZnJvbSBoZXJlIHRvd2FyZHMgdGhlIHJvb3QsIGFuZCBjcmVhdGVkIGhlcmUgd2hlcmUgbm8gcmVzb2x2ZXIgY2Fycmllc1xuXHQgKiBpdC4gV2l0aCBhIGZpbHRlciB0aGUgYWRkcmVzc2VkIHJlc29sdmVyIGlzIHRoZSB0YXJnZXQgb3V0cmlnaHQuXG5cdCAqXG5cdCAqIEBwYXJhbSB7c3RyaW5nfG51bWJlcnxzeW1ib2x9IGtleSBhIHByb3BlcnR5IGtleTsgYSBudW1iZXIgaXMgbG9va2VkIHVwIGFzIGl0cyBzdHJpbmdcblx0ICogQHBhcmFtIHsqfSB2YWx1ZVxuXHQgKiBAcGFyYW0gez9zdHJpbmd9IFtmaWx0ZXJdIHRoZSBzY29wZSBuYW1lIG9mIHRoZSByZXNvbHZlciB0aGUgY2FsbCBhZGRyZXNzZXNcblx0ICogQHRocm93cyB7VHlwZUVycm9yfSB3aGVyZSB0aGUga2V5IGlzIG1pc3Npbmcgb3Igb2YgYSB0eXBlIG5vIHByb3BlcnR5IGtleSBoYXMsIHRoZSBmaWx0ZXIgbm9cblx0ICogc3RyaW5nLCBvciB0aGUgb2JqZWN0IHJlZnVzZXMgdGhlIHdyaXRlXG5cdCAqIEB0aHJvd3Mge0Vycm9yfSB3aGVyZSB0aGUgZmlsdGVyIG1hdGNoZXMgbm8gcmVzb2x2ZXIgb2YgdGhlIGNoYWluXG5cdCAqL1xuXHR1cGRhdGVEYXRhKGtleSwgdmFsdWUsIGZpbHRlcikge1xuXHRcdGNvbnN0IHByb3BlcnR5ID0gdG9LZXkoa2V5KTtcblx0XHRjb25zdCBzY29wZSA9IHRvU2NvcGUoZmlsdGVyKTtcblx0XHRjb25zdCByZXNvbHZlciA9IHRoaXMuI2ZpbmRSZXNvbHZlcihzY29wZSk7XG5cblx0XHRjb25zdCB0YXJnZXQgPSBzY29wZSA/IHJlc29sdmVyIDogdGhpcy4jcmVzb2x2ZXJGb3JLZXkocHJvcGVydHkpIHx8IHRoaXM7XG5cdFx0dGFyZ2V0LmNvbnRleHRbcHJvcGVydHldID0gdmFsdWU7XG5cdH1cblxuXHQvKipcblx0ICogUmVtb3ZlcyB0aGUga2V5IGZyb20gb25lIHJlc29sdmVyIC0gdGhlIGFkZHJlc3NlZCBvbmUgd2l0aCBhIGZpbHRlciwgYW5kIHdpdGhvdXQgb25lIHRoZSBmaXJzdFxuXHQgKiByZXNvbHZlciBjYXJyeWluZyBpdCwgY291bnRpbmcgZnJvbSBoZXJlIHRvd2FyZHMgdGhlIHJvb3QuIFJlbW92aW5nIGl0IHVuY292ZXJzIHRoZSB2YWx1ZSBvZlxuXHQgKiB0aGUgbmV4dCByZXNvbHZlciB0aGF0IGNhcnJpZXMgdGhlIHNhbWUga2V5LlxuXHQgKlxuXHQgKiBAcGFyYW0ge3N0cmluZ3xudW1iZXJ8c3ltYm9sfSBrZXkgYSBwcm9wZXJ0eSBrZXk7IGEgbnVtYmVyIGlzIGxvb2tlZCB1cCBhcyBpdHMgc3RyaW5nXG5cdCAqIEBwYXJhbSB7P3N0cmluZ30gW2ZpbHRlcl0gdGhlIHNjb3BlIG5hbWUgb2YgdGhlIHJlc29sdmVyIHRoZSBjYWxsIGFkZHJlc3Nlc1xuXHQgKiBAdGhyb3dzIHtUeXBlRXJyb3J9IHdoZXJlIHRoZSBrZXkgaXMgbWlzc2luZyBvciBvZiBhIHR5cGUgbm8gcHJvcGVydHkga2V5IGhhcywgdGhlIGZpbHRlciBub1xuXHQgKiBzdHJpbmcsIG9yIHRoZSBvYmplY3QgcmVmdXNlcyB0aGUgZGVsZXRpb25cblx0ICogQHRocm93cyB7RXJyb3J9IHdoZXJlIHRoZSBmaWx0ZXIgbWF0Y2hlcyBubyByZXNvbHZlciBvZiB0aGUgY2hhaW5cblx0ICovXG5cdGRlbGV0ZURhdGEoa2V5LCBmaWx0ZXIpIHtcblx0XHRjb25zdCBwcm9wZXJ0eSA9IHRvS2V5KGtleSk7XG5cdFx0Y29uc3Qgc2NvcGUgPSB0b1Njb3BlKGZpbHRlcik7XG5cdFx0Y29uc3QgcmVzb2x2ZXIgPSB0aGlzLiNmaW5kUmVzb2x2ZXIoc2NvcGUpO1xuXG5cdFx0Y29uc3QgdGFyZ2V0ID0gc2NvcGUgPyByZXNvbHZlciA6IHRoaXMuI3Jlc29sdmVyRm9yS2V5KHByb3BlcnR5KTtcblx0XHRpZiAodGFyZ2V0KSBkZWxldGUgdGFyZ2V0LmNvbnRleHRbcHJvcGVydHldO1xuXHR9XG5cblx0LyoqXG5cdCAqIEEgc2hhbGxvdyBhc3NpZ25tZW50LCBrZXkgYnkga2V5LCBpbnRvIHRoZSBjb250ZXh0IG9mIHRoZSBhZGRyZXNzZWQgcmVzb2x2ZXIsIHJlcGxhY2luZyB3aGF0IGlzXG5cdCAqIHRoZXJlIGFuZCBhZGRpbmcgd2hhdCBpcyBub3QuIE5vIHNlYXJjaCBhbG9uZyB0aGUgY2hhaW46IGEgbWVyZ2VkIGtleSBzaGFkb3dzIHRoZSByZXNvbHZlcnNcblx0ICogYWJvdmUgZnJvbSBoZXJlIG9uLlxuXHQgKlxuXHQgKiBAcGFyYW0gez9vYmplY3R9IGNvbnRleHQgdGhlIGtleXMgdG8gYXNzaWduOyBudWxsIG9yIHVuZGVmaW5lZCBjaGFuZ2VzIG5vdGhpbmdcblx0ICogQHBhcmFtIHs/c3RyaW5nfSBbZmlsdGVyXSB0aGUgc2NvcGUgbmFtZSBvZiB0aGUgcmVzb2x2ZXIgdGhlIGNhbGwgYWRkcmVzc2VzXG5cdCAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gd2hlcmUgdGhlIGNvbnRleHQgaXMgYSBwcmltaXRpdmUsIHRoZSBmaWx0ZXIgbm8gc3RyaW5nLCBvciB0aGUgb2JqZWN0XG5cdCAqIHJlZnVzZXMgYSBrZXkgLSB0aGUga2V5cyBiZWZvcmUgaXQgYXJlIHdyaXR0ZW4gYnkgdGhlblxuXHQgKiBAdGhyb3dzIHtFcnJvcn0gd2hlcmUgdGhlIGZpbHRlciBtYXRjaGVzIG5vIHJlc29sdmVyIG9mIHRoZSBjaGFpblxuXHQgKi9cblx0bWVyZ2VDb250ZXh0KGNvbnRleHQsIGZpbHRlcikge1xuXHRcdGNvbnN0IHJlc29sdmVyID0gdGhpcy4jZmluZFJlc29sdmVyKHRvU2NvcGUoZmlsdGVyKSk7XG5cdFx0aWYgKGNvbnRleHQgPT0gbnVsbCkgcmV0dXJuO1xuXHRcdGlmICh0eXBlb2YgY29udGV4dCAhPT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgY29udGV4dCAhPT0gXCJmdW5jdGlvblwiKSB0aHJvdyBuZXcgVHlwZUVycm9yKGBtZXJnZUNvbnRleHQgdGFrZXMgYW4gb2JqZWN0LCBub3QgYSAke3R5cGVvZiBjb250ZXh0fSFgKTtcblxuXHRcdHJlc29sdmVyLmNvbnRleHRIYW5kbGUubWVyZ2VEYXRhKGNvbnRleHQpO1xuXHR9XG5cblx0LyoqXG5cdCAqIFJlc29sdmVzIG9uZSBleHByZXNzaW9uIHRvIGl0cyB2YWx1ZSwgb2Ygd2hhdGV2ZXIgdHlwZSB0aGUgc3RhdGVtZW50IGFuc3dlcnMuIFRha2VzIHRoZVxuXHQgKiBkZWxpbWl0ZWQgZm9ybSBgJHsuLi59YCwgYSBzY29wZSBwcmVmaXggaW5jbHVkZWQsIG9yIGEgYmFyZSBzdGF0ZW1lbnQ7IGFuIGlucHV0IHRoYXQgZG9lcyBub3Rcblx0ICogYm90aCBvcGVuIHdpdGggYCR7YCBhbmQgZW5kIHdpdGggYH1gIGlzIGEgYmFyZSBzdGF0ZW1lbnQuIEFuIGVycm9yIG9mIHRoZSBzdGF0ZW1lbnQgaXMgbG9nZ2VkXG5cdCAqIGFuZCBoYW5kZWQgb24sIGFuZCB0aGUgZGVmYXVsdCBuZXZlciBjb3ZlcnMgaXQuXG5cdCAqXG5cdCAqIEBhc3luY1xuXHQgKiBAcGFyYW0ge3N0cmluZ30gYUV4cHJlc3Npb25cblx0ICogQHBhcmFtIHsqfSBbYURlZmF1bHRdIHJlcGxhY2VzIGEgcmVzdWx0IG9mIG51bGwgb3IgdW5kZWZpbmVkIHdoZXJlIGl0IGlzIHBhc3NlZCwgdW5kZWZpbmVkXG5cdCAqIGluY2x1ZGVkXG5cdCAqIEByZXR1cm5zIHtQcm9taXNlPCo+fVxuXHQgKiBAdGhyb3dzIHtUeXBlRXJyb3J9IHdoZXJlIHRoZSBleHByZXNzaW9uIGlzIG5vIHN0cmluZ1xuXHQgKi9cblx0YXN5bmMgcmVzb2x2ZShhRXhwcmVzc2lvbiwgYURlZmF1bHQpIHtcblx0XHQvLyBhIG1pc3Rha2UgaW4gdGhlIGNhbGxpbmcgY29kZSwgbm90IGEgZmFpbGVkIHN0YXRlbWVudCAtIHNvIG5vIHdhcm5pbmcgYW5kIG5vIGRlZmF1bHRcblx0XHRpZiAodHlwZW9mIGFFeHByZXNzaW9uICE9PSBcInN0cmluZ1wiKSB0aHJvdyBuZXcgVHlwZUVycm9yKGByZXNvbHZlIHRha2VzIGFuIGV4cHJlc3Npb24gYXMgYSBzdHJpbmcsIG5vdCBhICR7dHlwZW9mIGFFeHByZXNzaW9ufSFgKTtcblx0XHRjb25zdCBkZWZhdWx0VmFsdWUgPSBhcmd1bWVudHMubGVuZ3RoID09IDIgPyB0b0RlZmF1bHRWYWx1ZShhRGVmYXVsdCkgOiBERUZBVUxUX05PVF9ERUZJTkVEO1xuXHRcdHRyeSB7XG5cdFx0XHQvLyB0aGUgZGVsaW1pdGVkIGZvcm0gb3IgYSBiYXJlIHN0YXRlbWVudCwgdG9sZCBhcGFydCBieSB0aGUgc2Nhbm5lclxuXHRcdFx0Y29uc3QgeyBzY29wZSwgc3RhdGVtZW50IH0gPSBwYXJzZUV4cHJlc3Npb24oYUV4cHJlc3Npb24pO1xuXHRcdFx0cmV0dXJuIHdpdGhEZWZhdWx0KGF3YWl0IHRoaXMuI2V4ZWN1dGUoc3RhdGVtZW50LCBzY29wZSksIGRlZmF1bHRWYWx1ZSk7XG5cdFx0fSBjYXRjaCAoZSkge1xuXHRcdFx0Ly8gdGhlIGVycm9yIGlzIGxvZ2dlZCBhbmQgaGFuZGVkIG9uLiByZXNvbHZlIGFuc3dlcnMgYSB2YWx1ZSBvciBzYXlzIHdoeSBpdCBjYW5ub3QsXG5cdFx0XHQvLyBhbmQgYSBkZWZhdWx0IHZhbHVlIGNvdmVycyBhIG1pc3NpbmcgcmVzdWx0LCBuZXZlciBhbiBlcnJvci5cblx0XHRcdHdhcm5GYWlsZWRTdGF0ZW1lbnQoYUV4cHJlc3Npb24sIGUpO1xuXHRcdFx0dGhyb3cgZTtcblx0XHR9XG5cdH1cblxuXHQvKipcblx0ICogUmVwbGFjZXMgZXZlcnkgZXhwcmVzc2lvbiBvZiBhIHRleHQgYnkgaXRzIHZhbHVlIGFuZCBhbnN3ZXJzIHRoZSB0ZXh0LiBBbiBleHByZXNzaW9uIHdob3NlXG5cdCAqIHN0YXRlbWVudCBmYWlscyBzdGFuZHMgYXMgd3JpdHRlbiwgYSB3YXJuaW5nIG5hbWVzIGl0LCBhbmQgdGhlIHJlc3Qgb2YgdGhlIHRleHQga2VlcHMgcmVuZGVyaW5nLlxuXHQgKlxuXHQgKiBAYXN5bmNcblx0ICogQHBhcmFtIHtzdHJpbmd9IGFUZXh0XG5cdCAqIEBwYXJhbSB7Kn0gW2FEZWZhdWx0XSByZXBsYWNlcyBhIHJlc3VsdCBvZiBudWxsIG9yIHVuZGVmaW5lZCwgcGVyIGV4cHJlc3Npb24sIHdoZXJlIGl0IGlzXG5cdCAqIHBhc3NlZFxuXHQgKiBAcmV0dXJucyB7UHJvbWlzZTxzdHJpbmc+fVxuXHQgKiBAdGhyb3dzIHtUeXBlRXJyb3J9IHdoZXJlIHRoZSB0ZXh0IGlzIG5vIHN0cmluZ1xuXHQgKi9cblx0YXN5bmMgcmVzb2x2ZVRleHQoYVRleHQsIGFEZWZhdWx0KSB7XG5cdFx0aWYgKHR5cGVvZiBhVGV4dCAhPT0gXCJzdHJpbmdcIikgdGhyb3cgbmV3IFR5cGVFcnJvcihgcmVzb2x2ZVRleHQgdGFrZXMgYSB0ZXh0IGFzIGEgc3RyaW5nLCBub3QgYSAke3R5cGVvZiBhVGV4dH0hYCk7XG5cdFx0Y29uc3QgZGVmYXVsdFZhbHVlID0gYXJndW1lbnRzLmxlbmd0aCA9PSAyID8gdG9EZWZhdWx0VmFsdWUoYURlZmF1bHQpIDogREVGQVVMVF9OT1RfREVGSU5FRDtcblxuXHRcdGNvbnN0IG9jY3VycmVuY2VzID0gc2NhbihhVGV4dCk7XG5cdFx0aWYgKCFvY2N1cnJlbmNlcykgcmV0dXJuIGFUZXh0O1xuXG5cdFx0bGV0IHRleHQgPSBcIlwiO1xuXHRcdGxldCBwb3NpdGlvbiA9IDA7XG5cdFx0Zm9yIChjb25zdCBvY2N1cnJlbmNlIG9mIG9jY3VycmVuY2VzKSB7XG5cdFx0XHQvLyBhbiBlc2NhcGluZyBiYWNrc2xhc2ggaXMgY29uc3VtZWQsIGV2ZXJ5dGhpbmcgZWxzZSBpbiBmcm9udCBvZiB0aGUgZXhwcmVzc2lvblxuXHRcdFx0Ly8gc3RhbmRzIGFzIHdyaXR0ZW5cblx0XHRcdHRleHQgKz0gYVRleHQuc3Vic3RyaW5nKHBvc2l0aW9uLCBvY2N1cnJlbmNlLmVzY2FwZWQgPyBvY2N1cnJlbmNlLnN0YXJ0IC0gMSA6IG9jY3VycmVuY2Uuc3RhcnQpO1xuXHRcdFx0cG9zaXRpb24gPSBvY2N1cnJlbmNlLmVuZDtcblxuXHRcdFx0aWYgKG9jY3VycmVuY2UuZXNjYXBlZCkge1xuXHRcdFx0XHR0ZXh0ICs9IGFUZXh0LnN1YnN0cmluZyhvY2N1cnJlbmNlLnN0YXJ0LCBvY2N1cnJlbmNlLmVuZCk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdHRleHQgKz0gd2l0aERlZmF1bHQoYXdhaXQgdGhpcy4jZXhlY3V0ZShvY2N1cnJlbmNlLnN0YXRlbWVudCwgb2NjdXJyZW5jZS5zY29wZSksIGRlZmF1bHRWYWx1ZSk7XG5cdFx0XHRcdH0gY2F0Y2ggKGUpIHtcblx0XHRcdFx0XHQvLyBhbiBleHByZXNzaW9uIHdob3NlIHN0YXRlbWVudCBmYWlsZWQgc3RhbmRzIGFzIHdyaXR0ZW4sIGFuZCB0aGUgZGVmYXVsdCB2YWx1ZVxuXHRcdFx0XHRcdC8vIGRvZXMgbm90IGNvdmVyIGl0LiBUaGUgcmVzdCBvZiB0aGUgdGV4dCBrZWVwcyByZW5kZXJpbmcuXG5cdFx0XHRcdFx0d2FybkZhaWxlZFN0YXRlbWVudChvY2N1cnJlbmNlLnN0YXRlbWVudCwgZSk7XG5cdFx0XHRcdFx0dGV4dCArPSBhVGV4dC5zdWJzdHJpbmcob2NjdXJyZW5jZS5zdGFydCwgb2NjdXJyZW5jZS5lbmQpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRleHQgKyBhVGV4dC5zdWJzdHJpbmcocG9zaXRpb24pO1xuXHR9XG5cblx0LyoqXG5cdCAqIFJlc29sdmVzIG9uZSBleHByZXNzaW9uIGFnYWluc3QgYW4gYWQtaG9jIGNvbnRleHQsIHRocm91Z2ggYSByZXNvbHZlciBvZiBpdHMgb3duLCBhcyB0aGUgaW5zdGFuY2Vcblx0ICogYHJlc29sdmVgIGRvZXMuXG5cdCAqXG5cdCAqIEBvdmVybG9hZFxuXHQgKiBAcGFyYW0ge3N0cmluZ30gYUV4cHJlc3Npb25cblx0ICogQHBhcmFtIHs/b2JqZWN0fSBbYUNvbnRleHRdXG5cdCAqIEBwYXJhbSB7Kn0gW2FEZWZhdWx0XSByZXBsYWNlcyBhIHJlc3VsdCBvZiBudWxsIG9yIHVuZGVmaW5lZCB3aGVyZSBpdCBpcyBwYXNzZWRcblx0ICogQHBhcmFtIHs/bnVtYmVyfSBbYVRpbWVvdXRdIGRlbGF5cyB0aGUgc3RhcnQgYnkgdGhhdCBtYW55IG1pbGxpc2Vjb25kczsgbm8gZGVhZGxpbmVcblx0ICogQHJldHVybnMge1Byb21pc2U8Kj59XG5cdCAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gd2hlcmUgdGhlIGV4cHJlc3Npb24gaXMgbm8gc3RyaW5nLCBvciB0aGUgY29udGV4dCBpcyBhIHByaW1pdGl2ZVxuXHQgKi9cblx0LyoqXG5cdCAqIFJlc29sdmVzIG9uZSBleHByZXNzaW9uIGFnYWluc3QgYW4gYWQtaG9jIGNvbnRleHQsIGFzIHRoZSBwb3NpdGlvbmFsIGZvcm0gZG9lcywgd2l0aCB0aGVcblx0ICogYXJndW1lbnRzIGluIG9uZSBjb25maWd1cmF0aW9uIG9iamVjdC4gQSBkZWZhdWx0IGNvdW50cyBhcyBwYXNzZWQgd2hlcmUgdGhlIGtleSBgZGVmYXVsdFZhbHVlYFxuXHQgKiBpcyBwcmVzZW50LCB3aGF0ZXZlciBpdCBob2xkcy5cblx0ICpcblx0ICogQG92ZXJsb2FkXG5cdCAqIEBwYXJhbSB7eyBleHByZXNzaW9uOiBzdHJpbmcsIGNvbnRleHQ/OiA/b2JqZWN0LCBkZWZhdWx0VmFsdWU/OiAqLCB0aW1lb3V0PzogP251bWJlciB9fSBhQ29uZmlndXJhdGlvblxuXHQgKiBAcmV0dXJucyB7UHJvbWlzZTwqPn1cblx0ICogQHRocm93cyB7VHlwZUVycm9yfSB3aGVyZSB0aGUgY29uZmlndXJhdGlvbiBjYXJyaWVzIG5vIHN0cmluZyB1bmRlciBgZXhwcmVzc2lvbmAsIG9yIHRoZVxuXHQgKiBjb250ZXh0IGlzIGEgcHJpbWl0aXZlXG5cdCAqL1xuXHQvKipcblx0ICogVGFrZXMgdGhlIGFyZ3VtZW50cyBwb3NpdGlvbmFsbHksIG9yIG9uZSBjb25maWd1cmF0aW9uIG9iamVjdFxuXHQgKiBgeyBleHByZXNzaW9uLCBjb250ZXh0LCBkZWZhdWx0VmFsdWUsIHRpbWVvdXQgfWAsIGJlaGluZCB3aGljaCBldmVyeSBhcmd1bWVudCBpcyBpZ25vcmVkLiBBIGZpcnN0XG5cdCAqIGFyZ3VtZW50IHRoYXQgaXMgbmVpdGhlciBhIHN0cmluZyBub3IgYW4gb2JqZWN0LCBhbmQgYSBjb25maWd1cmF0aW9uIHdpdGhvdXQgYSBzdHJpbmcgdW5kZXJcblx0ICogYGV4cHJlc3Npb25gLCByZWplY3Qgd2l0aCBhIGBUeXBlRXJyb3JgLlxuXHQgKlxuXHQgKiBAc3RhdGljXG5cdCAqIEBhc3luY1xuXHQgKiBAcGFyYW0ge3N0cmluZ3x7IGV4cHJlc3Npb246IHN0cmluZywgY29udGV4dD86ID9vYmplY3QsIGRlZmF1bHRWYWx1ZT86ICosIHRpbWVvdXQ/OiA/bnVtYmVyIH19IGFFeHByZXNzaW9uXG5cdCAqIEBwYXJhbSB7P29iamVjdH0gW2FDb250ZXh0XVxuXHQgKiBAcGFyYW0geyp9IFthRGVmYXVsdF1cblx0ICogQHBhcmFtIHs/bnVtYmVyfSBbYVRpbWVvdXRdXG5cdCAqIEByZXR1cm5zIHtQcm9taXNlPCo+fVxuXHQgKi9cblx0c3RhdGljIGFzeW5jIHJlc29sdmUoYUV4cHJlc3Npb24sIGFDb250ZXh0LCBhRGVmYXVsdCwgYVRpbWVvdXQpIHtcblx0XHRpZiAoaXNDb25maWd1cmF0aW9uKGFyZ3VtZW50c1swXSkpIHtcblx0XHRcdGNvbnN0IHsgZXhwcmVzc2lvbiwgY29udGV4dCwgdGltZW91dCB9ID0gYXJndW1lbnRzWzBdO1xuXHRcdFx0aWYgKHR5cGVvZiBleHByZXNzaW9uICE9PSBcInN0cmluZ1wiKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRXhwcmVzc2lvblJlc29sdmVyLnJlc29sdmUgdGFrZXMgYSBjb25maWd1cmF0aW9uIGNhcnJ5aW5nIHRoZSBleHByZXNzaW9uIGFzIGEgc3RyaW5nIHVuZGVyIHRoZSBrZXkgZXhwcmVzc2lvbiFcIik7XG5cdFx0XHRyZXR1cm4gRXhwcmVzc2lvblJlc29sdmVyLnJlc29sdmUoZXhwcmVzc2lvbiwgY29udGV4dCwgZGVmYXVsdE9mKGFyZ3VtZW50c1swXSksIHRpbWVvdXQpO1xuXHRcdH1cblx0XHRpZiAodHlwZW9mIGFFeHByZXNzaW9uICE9PSBcInN0cmluZ1wiKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRXhwcmVzc2lvblJlc29sdmVyLnJlc29sdmUgdGFrZXMgYSBzdHJpbmcgb3IgYSBjb25maWd1cmF0aW9uIG9iamVjdCFcIik7XG5cblx0XHRjb25zdCByZXNvbHZlciA9IG5ldyBFeHByZXNzaW9uUmVzb2x2ZXIoeyBjb250ZXh0OiBhQ29udGV4dCB9KTtcblx0XHRjb25zdCBkZWZhdWx0VmFsdWUgPSBhcmd1bWVudHMubGVuZ3RoID4gMiA/IHRvRGVmYXVsdFZhbHVlKGFEZWZhdWx0KSA6IERFRkFVTFRfTk9UX0RFRklORUQ7XG5cdFx0aWYgKHR5cGVvZiBhVGltZW91dCA9PT0gXCJudW1iZXJcIiAmJiBhVGltZW91dCA+IDApXG5cdFx0XHRyZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcblx0XHRcdFx0c2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHRcdFx0cmVzb2x2ZShyZXNvbHZlci5yZXNvbHZlKGFFeHByZXNzaW9uLCBkZWZhdWx0VmFsdWUpKTtcblx0XHRcdFx0fSwgYVRpbWVvdXQpO1xuXHRcdFx0fSk7XG5cblx0XHRyZXR1cm4gcmVzb2x2ZXIucmVzb2x2ZShhRXhwcmVzc2lvbiwgZGVmYXVsdFZhbHVlKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBSZXBsYWNlcyBldmVyeSBleHByZXNzaW9uIG9mIGEgdGV4dCBhZ2FpbnN0IGFuIGFkLWhvYyBjb250ZXh0LCB0aHJvdWdoIGEgcmVzb2x2ZXIgb2YgaXRzIG93biwgYXNcblx0ICogdGhlIGluc3RhbmNlIGByZXNvbHZlVGV4dGAgZG9lcy5cblx0ICpcblx0ICogQG92ZXJsb2FkXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBhVGV4dFxuXHQgKiBAcGFyYW0gez9vYmplY3R9IFthQ29udGV4dF1cblx0ICogQHBhcmFtIHsqfSBbYURlZmF1bHRdIHJlcGxhY2VzIGEgcmVzdWx0IG9mIG51bGwgb3IgdW5kZWZpbmVkLCBwZXIgZXhwcmVzc2lvbiwgd2hlcmUgaXQgaXNcblx0ICogcGFzc2VkXG5cdCAqIEBwYXJhbSB7P251bWJlcn0gW2FUaW1lb3V0XSBkZWxheXMgdGhlIHN0YXJ0IGJ5IHRoYXQgbWFueSBtaWxsaXNlY29uZHM7IG5vIGRlYWRsaW5lXG5cdCAqIEByZXR1cm5zIHtQcm9taXNlPHN0cmluZz59XG5cdCAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gd2hlcmUgdGhlIHRleHQgaXMgbm8gc3RyaW5nLCBvciB0aGUgY29udGV4dCBpcyBhIHByaW1pdGl2ZVxuXHQgKi9cblx0LyoqXG5cdCAqIFJlcGxhY2VzIGV2ZXJ5IGV4cHJlc3Npb24gb2YgYSB0ZXh0IGFnYWluc3QgYW4gYWQtaG9jIGNvbnRleHQsIGFzIHRoZSBwb3NpdGlvbmFsIGZvcm0gZG9lcyxcblx0ICogd2l0aCB0aGUgYXJndW1lbnRzIGluIG9uZSBjb25maWd1cmF0aW9uIG9iamVjdC4gQSBkZWZhdWx0IGNvdW50cyBhcyBwYXNzZWQgd2hlcmUgdGhlIGtleVxuXHQgKiBgZGVmYXVsdFZhbHVlYCBpcyBwcmVzZW50LCB3aGF0ZXZlciBpdCBob2xkcy5cblx0ICpcblx0ICogQG92ZXJsb2FkXG5cdCAqIEBwYXJhbSB7eyB0ZXh0OiBzdHJpbmcsIGNvbnRleHQ/OiA/b2JqZWN0LCBkZWZhdWx0VmFsdWU/OiAqLCB0aW1lb3V0PzogP251bWJlciB9fSBhQ29uZmlndXJhdGlvblxuXHQgKiBAcmV0dXJucyB7UHJvbWlzZTxzdHJpbmc+fVxuXHQgKiBAdGhyb3dzIHtUeXBlRXJyb3J9IHdoZXJlIHRoZSBjb25maWd1cmF0aW9uIGNhcnJpZXMgbm8gc3RyaW5nIHVuZGVyIGB0ZXh0YCwgb3IgdGhlIGNvbnRleHQgaXNcblx0ICogYSBwcmltaXRpdmVcblx0ICovXG5cdC8qKlxuXHQgKiBUYWtlcyB0aGUgYXJndW1lbnRzIHBvc2l0aW9uYWxseSwgb3Igb25lIGNvbmZpZ3VyYXRpb24gb2JqZWN0XG5cdCAqIGB7IHRleHQsIGNvbnRleHQsIGRlZmF1bHRWYWx1ZSwgdGltZW91dCB9YCwgYmVoaW5kIHdoaWNoIGV2ZXJ5IGFyZ3VtZW50IGlzIGlnbm9yZWQuIEEgZmlyc3Rcblx0ICogYXJndW1lbnQgdGhhdCBpcyBuZWl0aGVyIGEgc3RyaW5nIG5vciBhbiBvYmplY3QsIGFuZCBhIGNvbmZpZ3VyYXRpb24gd2l0aG91dCBhIHN0cmluZyB1bmRlclxuXHQgKiBgdGV4dGAsIHJlamVjdCB3aXRoIGEgYFR5cGVFcnJvcmAuXG5cdCAqXG5cdCAqIEBzdGF0aWNcblx0ICogQGFzeW5jXG5cdCAqIEBwYXJhbSB7c3RyaW5nfHsgdGV4dDogc3RyaW5nLCBjb250ZXh0PzogP29iamVjdCwgZGVmYXVsdFZhbHVlPzogKiwgdGltZW91dD86ID9udW1iZXIgfX0gYVRleHRcblx0ICogQHBhcmFtIHs/b2JqZWN0fSBbYUNvbnRleHRdXG5cdCAqIEBwYXJhbSB7Kn0gW2FEZWZhdWx0XVxuXHQgKiBAcGFyYW0gez9udW1iZXJ9IFthVGltZW91dF1cblx0ICogQHJldHVybnMge1Byb21pc2U8c3RyaW5nPn1cblx0ICovXG5cdHN0YXRpYyBhc3luYyByZXNvbHZlVGV4dChhVGV4dCwgYUNvbnRleHQsIGFEZWZhdWx0LCBhVGltZW91dCkge1x0XHRcblx0XHRpZiAoaXNDb25maWd1cmF0aW9uKGFyZ3VtZW50c1swXSkpIHtcblx0XHRcdGNvbnN0IHsgdGV4dCwgY29udGV4dCwgdGltZW91dCB9ID0gYXJndW1lbnRzWzBdO1xuXHRcdFx0aWYgKHR5cGVvZiB0ZXh0ICE9PSBcInN0cmluZ1wiKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRXhwcmVzc2lvblJlc29sdmVyLnJlc29sdmVUZXh0IHRha2VzIGEgY29uZmlndXJhdGlvbiBjYXJyeWluZyB0aGUgdGV4dCBhcyBhIHN0cmluZyB1bmRlciB0aGUga2V5IHRleHQhXCIpO1xuXHRcdFx0cmV0dXJuIEV4cHJlc3Npb25SZXNvbHZlci5yZXNvbHZlVGV4dCh0ZXh0LCBjb250ZXh0LCBkZWZhdWx0T2YoYXJndW1lbnRzWzBdKSwgdGltZW91dCk7XG5cdFx0fVxuXHRcdGlmICh0eXBlb2YgYVRleHQgIT09IFwic3RyaW5nXCIpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJFeHByZXNzaW9uUmVzb2x2ZXIucmVzb2x2ZVRleHQgdGFrZXMgYSBzdHJpbmcgb3IgYSBjb25maWd1cmF0aW9uIG9iamVjdCFcIik7XG5cblx0XHRjb25zdCByZXNvbHZlciA9IG5ldyBFeHByZXNzaW9uUmVzb2x2ZXIoeyBjb250ZXh0OiBhQ29udGV4dCB9KTtcblx0XHRjb25zdCBkZWZhdWx0VmFsdWUgPSBhcmd1bWVudHMubGVuZ3RoID4gMiA/IHRvRGVmYXVsdFZhbHVlKGFEZWZhdWx0KSA6IERFRkFVTFRfTk9UX0RFRklORUQ7XG5cdFx0aWYgKHR5cGVvZiBhVGltZW91dCA9PT0gXCJudW1iZXJcIiAmJiBhVGltZW91dCA+IDApXG5cdFx0XHRyZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcblx0XHRcdFx0c2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHRcdFx0cmVzb2x2ZShyZXNvbHZlci5yZXNvbHZlVGV4dChhVGV4dCwgZGVmYXVsdFZhbHVlKSk7XG5cdFx0XHRcdH0sIGFUaW1lb3V0KTtcblx0XHRcdH0pO1xuXG5cdFx0cmV0dXJuIHJlc29sdmVyLnJlc29sdmVUZXh0KGFUZXh0LCBkZWZhdWx0VmFsdWUpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEJ1aWxkcyBhIHJlc29sdmVyIG92ZXIgYSBmaWx0ZXJlZCBjb3B5IG9mIHRoZSBjb250ZXh0LlxuXHQgKlxuXHQgKiBUaGUgZmlsdGVyIGlzIGFwcGxpZWQgdG8gdGhlIGNvbnRleHQgb25seSwgbmV2ZXIgdG8gdGhlIGdsb2JhbHMsIHNvIHRoaXMgaXMgYSB3YXkgdG8gaGFuZFxuXHQgKiBvdmVyIGEgY2xlYW5lZCBjb250ZXh0IGFuZCBub3QgYSBzYW5kYm94LlxuXHQgKlxuXHQgKiBgb3B0aW9uYCBjYXJyaWVzIHRoZSBmaWx0ZXIncyBvd24gYGRlZXBgIHRvZ2V0aGVyIHdpdGggdGhlIGNvbnN0cnVjdG9yIG9wdGlvbnMgYG5hbWVgLFxuXHQgKiBgcGFyZW50YCBhbmQgYGV4ZWN1dGVyYCwgd2hpY2ggYXJlIGhhbmRlZCBvbiBhcyB0aGV5IGFyZS5cblx0ICpcblx0ICogQHN0YXRpY1xuXHQgKiBAcGFyYW0ge29iamVjdH0gYXJnIHRoZSBmaWx0ZXIgYXJndW1lbnRzLCBwbHVzIHRoZSB3aG9sZSBjb25zdHJ1Y3RvciBvcHRpb24gc2V0XG5cdCAqIEBwYXJhbSB7b2JqZWN0fSBhcmcuY29udGV4dCB0aGUgb2JqZWN0IHRvIGNvcHk7IGl0IGlzIGxlZnQgdW50b3VjaGVkXG5cdCAqIEBwYXJhbSB7KG5hbWU6IHN0cmluZywgdmFsdWU6ICosIGhvbGRlcjogb2JqZWN0KSA9PiBib29sZWFufSBhcmcucHJvcEZpbHRlciBjYWxsZWQgd2l0aCBuYW1lLFxuXHQgKiB2YWx1ZSBhbmQgdGhlIG9iamVjdCBob2xkaW5nIGl0IGZvciBldmVyeSBlbnVtZXJhYmxlIHByb3BlcnR5LCBpbmhlcml0ZWQgb25lcyBpbmNsdWRlZDsgYVxuXHQgKiBwcm9wZXJ0eSBpdCBhbnN3ZXJzIGZhbHNlIGZvciBpcyBsZWZ0IG91dCBvZiB0aGUgY29weVxuXHQgKiBAcGFyYW0ge29iamVjdH0gW2FyZy5vcHRpb249eyBkZWVwOiB0cnVlLCBuYW1lOiBudWxsLCBwYXJlbnQ6IG51bGwsIGV4ZWN1dGVyOiBudWxsIH1dXG5cdCAqIEBwYXJhbSB7Ym9vbGVhbn0gW2FyZy5vcHRpb24uZGVlcD10cnVlXSBmaWx0ZXJzIHN1YiBvYmplY3RzIGFzIHdlbGxcblx0ICogQHBhcmFtIHs/c3RyaW5nfSBbYXJnLm9wdGlvbi5uYW1lPW51bGxdXG5cdCAqIEBwYXJhbSB7P0V4cHJlc3Npb25SZXNvbHZlcn0gW2FyZy5vcHRpb24ucGFyZW50PW51bGxdXG5cdCAqIEBwYXJhbSB7PyhzdHJpbmd8RXhlY3V0ZXIpfSBbYXJnLm9wdGlvbi5leGVjdXRlcj1udWxsXVxuXHQgKiBAcmV0dXJucyB7RXhwcmVzc2lvblJlc29sdmVyfVxuXHQgKiBAdGhyb3dzIHtUeXBlRXJyb3J9IHdoZXJlIGEgY29uc3RydWN0b3Igb3B0aW9uIGlzIG9mIHRoZSB3cm9uZyBraW5kLCBhcyB0aGUgY29uc3RydWN0b3IgdGhyb3dzXG5cdCAqL1xuXHRzdGF0aWMgYnVpbGRGaWx0ZXJlZCh7IGNvbnRleHQsIHByb3BGaWx0ZXIsIG9wdGlvbiA9IHsgZGVlcDogdHJ1ZSwgbmFtZTogbnVsbCwgcGFyZW50OiBudWxsLCBleGVjdXRlcjogbnVsbCB9IH0pIHtcblx0XHRjb25zdCB7IGRlZXAgPSB0cnVlLCBuYW1lLCBwYXJlbnQsIGV4ZWN1dGVyIH0gPSBvcHRpb247XG5cdFx0Y29udGV4dCA9IE9iamVjdFV0aWxzLmZpbHRlcihjb250ZXh0LCBwcm9wRmlsdGVyLCB7ZGVlcH0pO1xuXHRcdHJldHVybiBuZXcgRXhwcmVzc2lvblJlc29sdmVyKHsgY29udGV4dCwgbmFtZSwgcGFyZW50LCBleGVjdXRlciB9KTtcblx0fVxuXG5cdC8qKlxuXHQgKiBUaGUgZm9ybWVyIG5hbWUgb2YgYGJ1aWxkRmlsdGVyZWRgLiBJdCBwcm9taXNlZCBhIHNlY3VyaXR5IHRoZSBtZXRob2QgZG9lcyBub3QgZ2l2ZS5cblx0ICpcblx0ICogQGRlcHJlY2F0ZWQgdXNlIGBidWlsZEZpbHRlcmVkYFxuXHQgKiBAc3RhdGljXG5cdCAqIEBwYXJhbSB7UGFyYW1ldGVyczx0eXBlb2YgRXhwcmVzc2lvblJlc29sdmVyLmJ1aWxkRmlsdGVyZWQ+WzBdfSBhcmcgdGhlIGFyZ3VtZW50cyBvZlxuXHQgKiBgYnVpbGRGaWx0ZXJlZGBcblx0ICogQHJldHVybnMge0V4cHJlc3Npb25SZXNvbHZlcn1cblx0ICovXG5cdHN0YXRpYyBidWlsZFNlY3VyZShhcmcpIHtcblx0XHRyZXR1cm4gRXhwcmVzc2lvblJlc29sdmVyLmJ1aWxkRmlsdGVyZWQoYXJnKTtcblx0fVxufVxuXG4iLCIvKipcbiAqIEZpbmRzIHRoZSBleHByZXNzaW9ucyBvZiBhIHRleHQgYW5kIHRha2VzIGEgc2luZ2xlIGV4cHJlc3Npb24gYXBhcnQuIEl0IHJlYWRzIHdoZXJlIGFuIGV4cHJlc3Npb25cbiAqIGJlZ2lucyBhbmQgZW5kcywgd2hldGhlciBpdCBpcyBlc2NhcGVkLCBhbmQgd2hpY2ggc2NvcGUgcHJlZml4IGl0IGNhcnJpZXM7IGV2YWx1YXRpbmcgYSBzdGF0ZW1lbnRcbiAqIGFuZCBhZGRyZXNzaW5nIGEgc2NvcGUgaXMgRXhwcmVzc2lvblJlc29sdmVyJ3MuXG4gKlxuICogSW50ZXJuYWwgdG8gdGhlIHBhY2thZ2U6IGluZGV4LmpzIGRvZXMgbm90IGV4cG9ydCBpdC5cbiAqL1xuXG5pbXBvcnQgeyBXSElURVNQQUNFLCBpc05hbWVDaGFyYWN0ZXIsIHRyaW1Ub051bGwgfSBmcm9tIFwiLi9VdGlscy5qc1wiO1xuXG5jb25zdCBFWFBSRVNTSU9OX1NUQVJUID0gXCIke1wiO1xuXG4vLyB0aGUgc2Nhbm5lciBzdGF0ZXMgLSBldmVyeXRoaW5nIHRoYXQgaXMgbm90IGNvZGUgaGlkZXMgdGhlIGJyYWNlcyBpbnNpZGUgaXRcbmNvbnN0IENPREUgPSAwO1xuY29uc3QgU0lOR0xFX1FVT1RFRCA9IDE7XG5jb25zdCBET1VCTEVfUVVPVEVEID0gMjtcbmNvbnN0IFRFTVBMQVRFID0gMztcbmNvbnN0IFJFR0VYID0gNDtcbmNvbnN0IFJFR0VYX0NMQVNTID0gNTtcbmNvbnN0IEJMT0NLX0NPTU1FTlQgPSA2O1xuY29uc3QgTElORV9DT01NRU5UID0gNztcblxuLy8gYSBcIi9cIiBjb250aW51ZXMgYW4gZXhwcmVzc2lvbiBpbnN0ZWFkIG9mIG9wZW5pbmcgYSByZWd1bGFyIGV4cHJlc3Npb24gd2hlbiBpdCBmb2xsb3dzIG9uZSBvZlxuLy8gdGhlc2UgLSB0aGUgY2xhc3NpYyBkaXZpc2lvbi1vci1yZWdleCBxdWVzdGlvbiwgZGVjaWRlZCBvbiB0aGUgbGFzdCBjaGFyYWN0ZXIgdGhhdCBpcyBuZWl0aGVyXG4vLyB3aGl0ZXNwYWNlIG5vciBwYXJ0IG9mIGEgY29tbWVudFxuY29uc3QgQkVGT1JFX0RJVklTSU9OID0gL1thLXpBLVowLTlfJClcXF1dLztcblxuLy8gdGhlIGNoYXJhY3RlcnMgdGhlIHNjYW5uZXIgZGVjaWRlcyBvbiwgY29tcGFyZWQgYXMgY2hhciBjb2RlcyByYXRoZXIgdGhhbiBhcyBvbmUtY2hhcmFjdGVyIHN0cmluZ3NcbmNvbnN0IEJBQ0tTTEFTSCA9IDB4NWM7XG5jb25zdCBET0xMQVIgPSAweDI0O1xuY29uc3QgT1BFTl9CUkFDRSA9IDB4N2I7XG5jb25zdCBDTE9TRV9CUkFDRSA9IDB4N2Q7XG5jb25zdCBTSU5HTEVfUVVPVEUgPSAweDI3O1xuY29uc3QgRE9VQkxFX1FVT1RFID0gMHgyMjtcbmNvbnN0IEJBQ0tUSUNLID0gMHg2MDtcbmNvbnN0IFNMQVNIID0gMHgyZjtcbmNvbnN0IFNUQVIgPSAweDJhO1xuY29uc3QgTElORV9GRUVEID0gMHgwYTtcbmNvbnN0IENBUlJJQUdFX1JFVFVSTiA9IDB4MGQ7XG5jb25zdCBMSU5FX1NFUEFSQVRPUiA9IDB4MjAyODtcbmNvbnN0IFBBUkFHUkFQSF9TRVBBUkFUT1IgPSAweDIwMjk7XG5jb25zdCBPUEVOX0JSQUNLRVQgPSAweDViO1xuY29uc3QgQ0xPU0VfQlJBQ0tFVCA9IDB4NWQ7XG5jb25zdCBDT0xPTiA9IDB4M2E7XG5cbmNvbnN0IFNDT1BFX1NFUEFSQVRPUiA9IFwiOjpcIjtcblxuLyoqXG4gKiBXaGV0aGVyIHRoZSBcIi9cIiBhdCBhSW5kZXggb3BlbnMgYSByZWd1bGFyIGV4cHJlc3Npb24gbGl0ZXJhbCwgZGVjaWRlZCBvbiB0aGUgY2hhcmFjdGVyIGJlZm9yZSBpdFxuICogdGhhdCBpcyBuZWl0aGVyIHdoaXRlc3BhY2Ugbm9yIHBhcnQgb2YgYSBjb21tZW50LlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBhVGV4dFxuICogQHBhcmFtIHtudW1iZXJ9IGFJbmRleFxuICogQHBhcmFtIHs/QXJyYXk8bnVtYmVyPn0gdGhlQ29tbWVudHMgdGhlIGNvbW1lbnRzIHJlYWQgc28gZmFyIGFzIGZsYXQgc3RhcnQgYW5kIGVuZCBpbmRleCBwYWlycywgaW5cbiAqIHRoZSBvcmRlciB0aGV5IHN0YW5kOyBudWxsIHdoZXJlIHRoZSBleHByZXNzaW9uIGhhcyBub25lXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuY29uc3Qgc2xhc2hPcGVuc1JlZ2V4ID0gKGFUZXh0LCBhSW5kZXgsIHRoZUNvbW1lbnRzKSA9PiB7XG5cdGxldCBpbmRleCA9IGFJbmRleCAtIDE7XG5cdGxldCBjb21tZW50ID0gdGhlQ29tbWVudHMgPyB0aGVDb21tZW50cy5sZW5ndGggLSAxIDogLTE7XG5cdHdoaWxlIChpbmRleCA+PSAwKSB7XG5cdFx0d2hpbGUgKGluZGV4ID49IDAgJiYgV0hJVEVTUEFDRS50ZXN0KGFUZXh0W2luZGV4XSkpIGluZGV4LS07XG5cdFx0Ly8gYSBsaW5lIGNvbW1lbnQgbWF5IGVuZCBpbiB3aGl0ZXNwYWNlLCBzbyB0aGUgd2FsayBjYW4gbGFuZCBpbnNpZGUgaXQgcmF0aGVyIHRoYW4gb24gaXRzIGVuZFxuXHRcdGlmIChjb21tZW50IDwgMCB8fCBpbmRleCA8IHRoZUNvbW1lbnRzW2NvbW1lbnQgLSAxXSB8fCBpbmRleCA+IHRoZUNvbW1lbnRzW2NvbW1lbnRdKSBicmVhaztcblxuXHRcdGluZGV4ID0gdGhlQ29tbWVudHNbY29tbWVudCAtIDFdIC0gMTtcblx0XHRjb21tZW50IC09IDI7XG5cdH1cblxuXHRyZXR1cm4gaW5kZXggPCAwIHx8ICFCRUZPUkVfRElWSVNJT04udGVzdChhVGV4dFtpbmRleF0pO1xufTtcblxuLyoqXG4gKiBXaGV0aGVyIGEgY2hhciBjb2RlIGVuZHMgYSBsaW5lIGNvbW1lbnQgLSBhIGxpbmUgdGVybWluYXRvciBpbiB0aGUgc2Vuc2Ugb2YgRUNNQVNjcmlwdC5cbiAqXG4gKiBAcGFyYW0ge251bWJlcn0gYUNvZGVcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5jb25zdCBpc0xpbmVUZXJtaW5hdG9yID0gKGFDb2RlKSA9PiBhQ29kZSA9PT0gTElORV9GRUVEIHx8IGFDb2RlID09PSBDQVJSSUFHRV9SRVRVUk4gfHwgYUNvZGUgPT09IExJTkVfU0VQQVJBVE9SIHx8IGFDb2RlID09PSBQQVJBR1JBUEhfU0VQQVJBVE9SO1xuXG4vKlxuICogVHdvIHNwbGl0cyB0YWtlIHRoZSB0ZXh0IGJldHdlZW4gdGhlIGRlbGltaXRlcnMgYXBhcnQgaW50byB0aGUgc2NvcGUgcHJlZml4IGFuZCB0aGVcbiAqIHN0YXRlbWVudCAtIHRoaXMgb25lIGZvciBhIHRleHQsIGBzcGxpdFNjb3BlQW5kU3RhdGVtZW50QnlTZXBhcmF0b3JgIGJlaGluZCBgcGFyc2VFeHByZXNzaW9uYCBmb3JcbiAqIHRoZSBzaW5nbGUgZXhwcmVzc2lvbiBvZiBgcmVzb2x2ZWAuIFRoZXkgYXJlIHR3byBpbXBsZW1lbnRhdGlvbnMgb2YgdGhlIG9uZSBydWxlLCBlYWNoIG1lYXN1cmVkXG4gKiBmYXN0ZXIgZm9yIG90aGVyIHN0YXRlbWVudHM6IGEgdGV4dCByZWFkcyBmb3J3YXJkcywgdGhlIHNpbmdsZSBleHByZXNzaW9uIGZyb20gdGhlIGZpcnN0IFwiOjpcIlxuICogYmFja3dhcmRzLiBCb3RoIGhhdmUgdG8gYW5zd2VyIGV2ZXJ5IGNhc2UgYWxpa2UuXG4gKi9cblxuLyoqXG4gKiBUaGUgc3BsaXQgb2YgYSB0ZXh0OiByZWFkcyBmb3J3YXJkcyBvbmx5IGFzIGZhciBhcyB0aGUgZmlyc3QgY2hhcmFjdGVyIGEgbmFtZSBjYW5ub3QgY2FycnksIHdoaWNoXG4gKiBmb3IgbW9zdCBzdGF0ZW1lbnRzIGlzIGEgZmV3IGNoYXJhY3RlcnMuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGFDb250ZW50IHRoZSB0ZXh0IGJldHdlZW4gdGhlIGRlbGltaXRlcnNcbiAqIEByZXR1cm5zIHt7IHNjb3BlOiA/c3RyaW5nLCBzdGF0ZW1lbnQ6ID9zdHJpbmcgfX0gYm90aCB0cmltbWVkLCBudWxsIHdoZXJlIGVtcHR5XG4gKi9cbmNvbnN0IHNwbGl0U2NvcGVBbmRTdGF0ZW1lbnRGb3J3YXJkID0gKGFDb250ZW50KSA9PiB7XG5cdGNvbnN0IGxlbmd0aCA9IGFDb250ZW50Lmxlbmd0aDtcblx0bGV0IGluZGV4ID0gMDtcblx0d2hpbGUgKGluZGV4IDwgbGVuZ3RoICYmIGlzTmFtZUNoYXJhY3RlcihhQ29udGVudC5jaGFyQ29kZUF0KGluZGV4KSkpIGluZGV4Kys7XG5cblx0aWYgKGFDb250ZW50LmNoYXJDb2RlQXQoaW5kZXgpICE9PSBDT0xPTiB8fCBhQ29udGVudC5jaGFyQ29kZUF0KGluZGV4ICsgMSkgIT09IENPTE9OKVxuXHRcdHJldHVybiB7IHNjb3BlOiBudWxsLCBzdGF0ZW1lbnQ6IHRyaW1Ub051bGwoYUNvbnRlbnQpIH07XG5cblx0Ly8gYW4gZW1wdHkgbmFtZSBpcyBubyBuYW1lLCBidXQgaXRzIHNlcGFyYXRvciBnb2VzIHdpdGggaXQgYWxsIHRoZSBzYW1lXG5cdHJldHVybiB7IHNjb3BlOiB0cmltVG9OdWxsKGFDb250ZW50LnN1YnN0cmluZygwLCBpbmRleCkpLCBzdGF0ZW1lbnQ6IHRyaW1Ub051bGwoYUNvbnRlbnQuc3Vic3RyaW5nKGluZGV4ICsgMikpIH07XG59O1xuXG4vKipcbiAqIFRoZSBudW1iZXIgb2YgYmFja3NsYXNoZXMgc3RhbmRpbmcgZGlyZWN0bHkgaW4gZnJvbnQgb2YgdGhlIGluZGV4LlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBhVGV4dFxuICogQHBhcmFtIHtudW1iZXJ9IGFJbmRleFxuICogQHJldHVybnMge251bWJlcn1cbiAqL1xuY29uc3QgY291bnRCYWNrc2xhc2hlc0JlZm9yZSA9IChhVGV4dCwgYUluZGV4KSA9PiB7XG5cdGxldCBjb3VudCA9IDA7XG5cdHdoaWxlIChhSW5kZXggLSBjb3VudCA+IDAgJiYgYVRleHQuY2hhckNvZGVBdChhSW5kZXggLSBjb3VudCAtIDEpID09PSBCQUNLU0xBU0gpIGNvdW50Kys7XG5cblx0cmV0dXJuIGNvdW50O1xufTtcblxuLyoqXG4gKiBSZWFkcyB0aGUgb25lIGV4cHJlc3Npb24gd2hvc2UgXCIke1wiIHN0YW5kcyBhdCBhU3RhcnQsIGNvdW50aW5nIGJyYWNlcyBidXQgbm90IHRoZSBvbmVzIGhpZGRlblxuICogaW5zaWRlIGEgbGl0ZXJhbCBvciBhIGNvbW1lbnQsIGFuZCB0YWtlcyBpdCBhcGFydCBpbnRvIHNjb3BlIHByZWZpeCBhbmQgc3RhdGVtZW50LlxuICpcbiAqIEFuc3dlcnMgdGhlIG9jY3VycmVuY2UgYHNjYW5gIGhhbmRzIG9uLCBgZW5kYCB0aGUgaW5kZXggZGlyZWN0bHkgYWZ0ZXIgdGhlIG1hdGNoaW5nIGNsb3NpbmcgYnJhY2U7XG4gKiBudWxsIHdoZXJlIHRoZSB0ZXh0IGVuZHMgYmVmb3JlIHRoYXQgYnJhY2UsIHdoaWNoIG1lYW5zIHRoZXJlIGlzIG5vXG4gKiBleHByZXNzaW9uIGhlcmUgYXQgYWxsOyBhbmQsIHdpdGggYGVuZGAgbmVnYXRlZCwgdGhlIGluZGV4IG9mIGFub3RoZXIgXCIke1wiIG1ldCBvdXRzaWRlIGEgbGl0ZXJhbFxuICogb3IgYSBjb21tZW50LCB3aGljaCBzdGFydHMgYW4gZXhwcmVzc2lvbiBvZiBpdHMgb3duIGFuZCBhYmFuZG9ucyB0aGlzIG9uZS5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gYVRleHRcbiAqIEBwYXJhbSB7bnVtYmVyfSBhU3RhcnRcbiAqIEByZXR1cm5zIHs/eyBzdGFydDogbnVtYmVyLCBlbmQ6IG51bWJlciwgZXNjYXBlZDogYm9vbGVhbiwgc2NvcGU6ID9zdHJpbmcsIHN0YXRlbWVudDogP3N0cmluZyB9fVxuICovXG5jb25zdCByZWFkRXhwcmVzc2lvbiA9IChhVGV4dCwgYVN0YXJ0KSA9PiB7XG5cdGNvbnN0IGxlbmd0aCA9IGFUZXh0Lmxlbmd0aDtcblx0Y29uc3Qgc3RhY2sgPSBbQ09ERV07XG5cdGxldCBjb21tZW50cyA9IG51bGw7XG5cdGxldCBjb21tZW50U3RhcnQgPSAwO1xuXHRsZXQgaW5kZXggPSBhU3RhcnQgKyAyO1xuXG5cdHdoaWxlIChpbmRleCA8IGxlbmd0aCkge1xuXHRcdGNvbnN0IGNoYXIgPSBhVGV4dC5jaGFyQ29kZUF0KGluZGV4KTtcblx0XHRzd2l0Y2ggKHN0YWNrW3N0YWNrLmxlbmd0aCAtIDFdKSB7XG5cdFx0XHRjYXNlIENPREU6XG5cdFx0XHRcdGlmIChjaGFyID09PSBPUEVOX0JSQUNFKSBzdGFjay5wdXNoKENPREUpO1xuXHRcdFx0XHRlbHNlIGlmIChjaGFyID09PSBDTE9TRV9CUkFDRSkge1xuXHRcdFx0XHRcdHN0YWNrLnBvcCgpO1xuXHRcdFx0XHRcdGlmIChzdGFjay5sZW5ndGggPT09IDApIHtcblx0XHRcdFx0XHRcdGNvbnN0IHsgc2NvcGUsIHN0YXRlbWVudCB9ID0gc3BsaXRTY29wZUFuZFN0YXRlbWVudEZvcndhcmQoYVRleHQuc3Vic3RyaW5nKGFTdGFydCArIDIsIGluZGV4KSk7XG5cdFx0XHRcdFx0XHRyZXR1cm4geyBzdGFydDogYVN0YXJ0LCBlbmQ6IGluZGV4ICsgMSwgZXNjYXBlZDogZmFsc2UsIHNjb3BlOiBzY29wZSwgc3RhdGVtZW50OiBzdGF0ZW1lbnQgfTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0gZWxzZSBpZiAoY2hhciA9PT0gU0lOR0xFX1FVT1RFKSBzdGFjay5wdXNoKFNJTkdMRV9RVU9URUQpO1xuXHRcdFx0XHRlbHNlIGlmIChjaGFyID09PSBET1VCTEVfUVVPVEUpIHN0YWNrLnB1c2goRE9VQkxFX1FVT1RFRCk7XG5cdFx0XHRcdGVsc2UgaWYgKGNoYXIgPT09IEJBQ0tUSUNLKSBzdGFjay5wdXNoKFRFTVBMQVRFKTtcblx0XHRcdFx0ZWxzZSBpZiAoY2hhciA9PT0gRE9MTEFSICYmIGFUZXh0LmNoYXJDb2RlQXQoaW5kZXggKyAxKSA9PT0gT1BFTl9CUkFDRSkgcmV0dXJuIHsgc3RhcnQ6IGFTdGFydCwgZW5kOiAtaW5kZXgsIGVzY2FwZWQ6IGZhbHNlLCBzY29wZTogbnVsbCwgc3RhdGVtZW50OiBudWxsIH07XG5cdFx0XHRcdGVsc2UgaWYgKGNoYXIgPT09IFNMQVNIKSB7XG5cdFx0XHRcdFx0Y29uc3QgbmV4dCA9IGFUZXh0LmNoYXJDb2RlQXQoaW5kZXggKyAxKTtcblx0XHRcdFx0XHRpZiAobmV4dCA9PT0gU1RBUiB8fCBuZXh0ID09PSBTTEFTSCkge1xuXHRcdFx0XHRcdFx0c3RhY2sucHVzaChuZXh0ID09PSBTVEFSID8gQkxPQ0tfQ09NTUVOVCA6IExJTkVfQ09NTUVOVCk7XG5cdFx0XHRcdFx0XHRjb21tZW50U3RhcnQgPSBpbmRleDtcblx0XHRcdFx0XHRcdGluZGV4Kys7XG5cdFx0XHRcdFx0fSBlbHNlIGlmIChzbGFzaE9wZW5zUmVnZXgoYVRleHQsIGluZGV4LCBjb21tZW50cykpIHN0YWNrLnB1c2goUkVHRVgpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSBCTE9DS19DT01NRU5UOlxuXHRcdFx0XHRpZiAoY2hhciA9PT0gU1RBUiAmJiBhVGV4dC5jaGFyQ29kZUF0KGluZGV4ICsgMSkgPT09IFNMQVNIKSB7XG5cdFx0XHRcdFx0c3RhY2sucG9wKCk7XG5cdFx0XHRcdFx0aW5kZXgrKztcblx0XHRcdFx0XHQoY29tbWVudHMgPz89IFtdKS5wdXNoKGNvbW1lbnRTdGFydCwgaW5kZXgpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSBMSU5FX0NPTU1FTlQ6XG5cdFx0XHRcdGlmIChpc0xpbmVUZXJtaW5hdG9yKGNoYXIpKSB7XG5cdFx0XHRcdFx0c3RhY2sucG9wKCk7XG5cdFx0XHRcdFx0KGNvbW1lbnRzID8/PSBbXSkucHVzaChjb21tZW50U3RhcnQsIGluZGV4IC0gMSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlIFNJTkdMRV9RVU9URUQ6XG5cdFx0XHRcdGlmIChjaGFyID09PSBCQUNLU0xBU0gpIGluZGV4Kys7XG5cdFx0XHRcdGVsc2UgaWYgKGNoYXIgPT09IFNJTkdMRV9RVU9URSkgc3RhY2sucG9wKCk7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSBET1VCTEVfUVVPVEVEOlxuXHRcdFx0XHRpZiAoY2hhciA9PT0gQkFDS1NMQVNIKSBpbmRleCsrO1xuXHRcdFx0XHRlbHNlIGlmIChjaGFyID09PSBET1VCTEVfUVVPVEUpIHN0YWNrLnBvcCgpO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgVEVNUExBVEU6XG5cdFx0XHRcdGlmIChjaGFyID09PSBCQUNLU0xBU0gpIGluZGV4Kys7XG5cdFx0XHRcdGVsc2UgaWYgKGNoYXIgPT09IEJBQ0tUSUNLKSBzdGFjay5wb3AoKTtcblx0XHRcdFx0ZWxzZSBpZiAoY2hhciA9PT0gRE9MTEFSICYmIGFUZXh0LmNoYXJDb2RlQXQoaW5kZXggKyAxKSA9PT0gT1BFTl9CUkFDRSkge1xuXHRcdFx0XHRcdHN0YWNrLnB1c2goQ09ERSk7XG5cdFx0XHRcdFx0aW5kZXgrKztcblx0XHRcdFx0fVxuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgUkVHRVg6XG5cdFx0XHRcdGlmIChjaGFyID09PSBCQUNLU0xBU0gpIGluZGV4Kys7XG5cdFx0XHRcdGVsc2UgaWYgKGNoYXIgPT09IE9QRU5fQlJBQ0tFVCkgc3RhY2sucHVzaChSRUdFWF9DTEFTUyk7XG5cdFx0XHRcdGVsc2UgaWYgKGNoYXIgPT09IFNMQVNIKSBzdGFjay5wb3AoKTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlIFJFR0VYX0NMQVNTOlxuXHRcdFx0XHRpZiAoY2hhciA9PT0gQkFDS1NMQVNIKSBpbmRleCsrO1xuXHRcdFx0XHRlbHNlIGlmIChjaGFyID09PSBDTE9TRV9CUkFDS0VUKSBzdGFjay5wb3AoKTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0fVxuXHRcdGluZGV4Kys7XG5cdH1cblxuXHRyZXR1cm4gbnVsbDtcbn07XG5cbi8qKlxuICogQW5zd2VycyBldmVyeSBleHByZXNzaW9uIG9mIGEgdGV4dCwgaW4gdGhlIG9yZGVyIHRoZXkgc3RhbmQsIG9yIG51bGwgd2hlcmUgdGhlIHRleHQgY2Fycmllc1xuICogbm9uZS4gYHN0YXJ0YCBpcyB0aGUgaW5kZXggb2YgdGhlIFwiJFwiLCBgZW5kYCB0aGUgaW5kZXggYWZ0ZXIgdGhlIG1hdGNoaW5nIGNsb3NpbmcgYnJhY2UsIHNvIGFcbiAqIGNhbGxlciByZXBsYWNlcyBieSBwb3NpdGlvbiBhbmQgbmV2ZXIgdG91Y2hlcyBhbiBvY2N1cnJlbmNlIHR3aWNlLiBUaGUgdGV4dCBiZXR3ZWVuIHR3b1xuICogZXhwcmVzc2lvbnMgaXMgc2tpcHBlZCBieSBhIG5hdGl2ZSBzZWFyY2ggZm9yIHRoZSBuZXh0IFwiJHtcIi5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gYVRleHRcbiAqIEByZXR1cm5zIHs/QXJyYXk8eyBzdGFydDogbnVtYmVyLCBlbmQ6IG51bWJlciwgZXNjYXBlZDogYm9vbGVhbiwgc2NvcGU6ID9zdHJpbmcsIHN0YXRlbWVudDogP3N0cmluZyB9Pn1cbiAqL1xuZXhwb3J0IGNvbnN0IHNjYW4gPSAoYVRleHQpID0+IHtcblx0bGV0IG9jY3VycmVuY2VzID0gbnVsbDtcblx0bGV0IHN0YXJ0ID0gYVRleHQuaW5kZXhPZihFWFBSRVNTSU9OX1NUQVJUKTtcblxuXHR3aGlsZSAoc3RhcnQgPj0gMCkge1xuXHRcdC8vIGFuIG9kZCBydW4gb2YgYmFja3NsYXNoZXMgZXNjYXBlcyB0aGUgZGVsaW1pdGVyIGl0c2VsZi4gSXQgb3BlbnMgbm90aGluZywgc28gb25seVxuXHRcdC8vIHRob3NlIHR3byBjaGFyYWN0ZXJzIGFyZSB0YWtlbiBvdXQgb2YgdGhlIHRleHQgYW5kIHRoZSBzY2FuIGNhcnJpZXMgb24gYmVoaW5kIHRoZW0gLVxuXHRcdC8vIHdoYXQgd291bGQgaGF2ZSBiZWVuIHRoZSBzdGF0ZW1lbnQgaXMgb3JkaW5hcnkgdGV4dCBhbmQgbWF5IGhvbGQgZXhwcmVzc2lvbnMgb2YgaXRzIG93bi5cblx0XHRpZiAoY291bnRCYWNrc2xhc2hlc0JlZm9yZShhVGV4dCwgc3RhcnQpICUgMiA9PT0gMSkge1xuXHRcdFx0aWYgKCFvY2N1cnJlbmNlcykgb2NjdXJyZW5jZXMgPSBbXTtcblx0XHRcdG9jY3VycmVuY2VzLnB1c2goeyBzdGFydDogc3RhcnQsIGVuZDogc3RhcnQgKyAyLCBlc2NhcGVkOiB0cnVlLCBzY29wZTogbnVsbCwgc3RhdGVtZW50OiBudWxsIH0pO1xuXHRcdFx0c3RhcnQgPSBhVGV4dC5pbmRleE9mKEVYUFJFU1NJT05fU1RBUlQsIHN0YXJ0ICsgMik7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cblx0XHRjb25zdCBvY2N1cnJlbmNlID0gcmVhZEV4cHJlc3Npb24oYVRleHQsIHN0YXJ0KTtcblx0XHQvLyBubyBtYXRjaGluZyBicmFjZTogdGhlIHRleHQgc3RhbmRzIGFzIHdyaXR0ZW4sIGFuZCBub3RoaW5nIGJlaGluZCBpdCBjYW4gYmUgYW5cblx0XHQvLyBleHByZXNzaW9uIGVpdGhlciAtIGEgXCIke1wiIG91dHNpZGUgYSBsaXRlcmFsIG9yIGEgY29tbWVudCB3b3VsZCBoYXZlIHJlc3RhcnRlZCB0aGUgc2NhbiBpbnN0ZWFkXG5cdFx0aWYgKCFvY2N1cnJlbmNlKSBicmVhaztcblx0XHRpZiAob2NjdXJyZW5jZS5lbmQgPCAwKSB7XG5cdFx0XHRzdGFydCA9IC1vY2N1cnJlbmNlLmVuZDtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblxuXHRcdGlmICghb2NjdXJyZW5jZXMpIG9jY3VycmVuY2VzID0gW107XG5cdFx0b2NjdXJyZW5jZXMucHVzaChvY2N1cnJlbmNlKTtcblx0XHRzdGFydCA9IGFUZXh0LmluZGV4T2YoRVhQUkVTU0lPTl9TVEFSVCwgb2NjdXJyZW5jZS5lbmQpO1xuXHR9XG5cblx0cmV0dXJuIG9jY3VycmVuY2VzO1xufTtcblxuLyoqXG4gKiBUYWtlcyB0aGUgb25lIGV4cHJlc3Npb24gYHJlc29sdmVgIGlzIGhhbmRlZCBhcGFydC5cbiAqXG4gKiBXaGljaCBmb3JtIGlzIGluIGhhbmQgaXMgZGVjaWRlZCBieSB0aGUgdHdvIGVuZHMgb2YgdGhlIHRyaW1tZWQgaW5wdXQ6IGFuIGlucHV0IHRoYXQgb3BlbnMgd2l0aFxuICogXCIke1wiIGFuZCBlbmRzIHdpdGggXCJ9XCIgaXMgdGhlIGRlbGltaXRlZCBmb3JtLCBhbnl0aGluZyBlbHNlIGlzIGEgYmFyZSBzdGF0ZW1lbnQuIFRoZSB3aG9sZSBpbnB1dFxuICogaXMgb25lIGV4cHJlc3Npb24sIHNvIGl0cyBlbmQgaXMgdGhlIGVuZCBvZiB0aGUgaW5wdXQuIEVzY2FwaW5nIGEgZGVsaW1pdGVyIGRvZXMgbm90IGFwcGx5IGhlcmUgLVxuICogaXQgaXMgYSBydWxlIG9mIHRoZSB0ZXh0IGZvcm0sIGFuZCB0aGVyZSBpcyBubyBzdXJyb3VuZGluZyB0ZXh0LCBzbyBhIGJhY2tzbGFzaCBiZWxvbmdzIHRvIHRoZVxuICogc3RhdGVtZW50LlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBhRXhwcmVzc2lvblxuICogQHJldHVybnMge3sgc2NvcGU6ID9zdHJpbmcsIHN0YXRlbWVudDogP3N0cmluZyB9fVxuICovXG5leHBvcnQgY29uc3QgcGFyc2VFeHByZXNzaW9uID0gKGFFeHByZXNzaW9uKSA9PiB7XG5cdGFFeHByZXNzaW9uID0gYUV4cHJlc3Npb24udHJpbSgpO1xuXG5cdGlmIChhRXhwcmVzc2lvbi5zdGFydHNXaXRoKEVYUFJFU1NJT05fU1RBUlQpICYmIGFFeHByZXNzaW9uLmVuZHNXaXRoKFwifVwiKSlcblx0XHRyZXR1cm4gc3BsaXRTY29wZUFuZFN0YXRlbWVudEJ5U2VwYXJhdG9yKGFFeHByZXNzaW9uLnN1YnN0cmluZygyLCBhRXhwcmVzc2lvbi5sZW5ndGggLSAxKSk7XG5cblx0Ly8gYW55dGhpbmcgZWxzZSBpcyBhIHN0YXRlbWVudCBpbiBmdWxsLCBhbmQgY2FycmllcyBubyBzY29wZSBwcmVmaXhcblx0cmV0dXJuIHsgc2NvcGU6IG51bGwsIHN0YXRlbWVudDogdHJpbVRvTnVsbChhRXhwcmVzc2lvbikgfTtcbn07XG5cbi8qKlxuICogVGhlIHNwbGl0IG9mIHRoZSBzaW5nbGUgZXhwcmVzc2lvbjogbW9zdCBzdGF0ZW1lbnRzIGNhcnJ5IG5vIFwiOjpcIiBhdCBhbGwgYW5kIGFyZSBkb25lIGFmdGVyIG9uZVxuICogbmF0aXZlIHNlYXJjaC4gV2hlcmUgb25lIHN0YW5kcywgZXZlcnl0aGluZyBiZWZvcmUgdGhlIGZpcnN0IG9mIHRoZW0gaGFzIHRvIGJlIGEgbmFtZSwgY2hlY2tlZFxuICogYmFja3dhcmRzIGZyb20gaXQ6IGEgXCI6OlwiIGluc2lkZSBhIHN0YXRlbWVudCAtIGEgcXVvdGVkIG9uZSAtIHVzdWFsbHkgaGFzIGEgY2hhcmFjdGVyIG5vIG5hbWVcbiAqIGNhcnJpZXMgcmlnaHQgaW4gZnJvbnQgb2YgaXQuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGFDb250ZW50IHRoZSB0ZXh0IGJldHdlZW4gdGhlIGRlbGltaXRlcnNcbiAqIEByZXR1cm5zIHt7IHNjb3BlOiA/c3RyaW5nLCBzdGF0ZW1lbnQ6ID9zdHJpbmcgfX0gYm90aCB0cmltbWVkLCBudWxsIHdoZXJlIGVtcHR5XG4gKi9cbmNvbnN0IHNwbGl0U2NvcGVBbmRTdGF0ZW1lbnRCeVNlcGFyYXRvciA9IChhQ29udGVudCkgPT4ge1xuXHRjb25zdCBlbmQgPSBhQ29udGVudC5pbmRleE9mKFNDT1BFX1NFUEFSQVRPUik7XG5cdGlmIChlbmQgPCAwKSByZXR1cm4geyBzY29wZTogbnVsbCwgc3RhdGVtZW50OiB0cmltVG9OdWxsKGFDb250ZW50KSB9O1xuXG5cdGZvciAobGV0IGluZGV4ID0gZW5kIC0gMTsgaW5kZXggPj0gMDsgaW5kZXgtLSlcblx0XHRpZiAoIWlzTmFtZUNoYXJhY3RlcihhQ29udGVudC5jaGFyQ29kZUF0KGluZGV4KSkpIHJldHVybiB7IHNjb3BlOiBudWxsLCBzdGF0ZW1lbnQ6IHRyaW1Ub051bGwoYUNvbnRlbnQpIH07XG5cblx0cmV0dXJuIHsgc2NvcGU6IHRyaW1Ub051bGwoYUNvbnRlbnQuc3Vic3RyaW5nKDAsIGVuZCkpLCBzdGF0ZW1lbnQ6IHRyaW1Ub051bGwoYUNvbnRlbnQuc3Vic3RyaW5nKGVuZCArIDIpKSB9O1xufTtcbiIsImltcG9ydCBHTE9CQUwgZnJvbSBcIkBkZWZhdWx0LWpzL2RlZmF1bHRqcy1jb21tb24tdXRpbHMvc3JjL0dsb2JhbC5qc1wiO1xuaW1wb3J0IHsgaXNOdWxsT3JVbmRlZmluZWQgfSBmcm9tIFwiQGRlZmF1bHQtanMvZGVmYXVsdGpzLWNvbW1vbi11dGlscy9zcmMvT2JqZWN0VXRpbHMuanNcIjtcblxuLyoqXG4gKiBUaGUgZGVzY3JpcHRvciBhIHByb3BlcnR5IGhhcyB3aGVyZSBpdCBpcyBkZWZpbmVkIC0gb3duIG9yIGFueXdoZXJlIHVwIHRoZSBwcm90b3R5cGUgY2hhaW4gb2ZcbiAqIHRoZSBvYmplY3QgaG9sZGluZyBpdC5cbiAqXG4gKiBAcGFyYW0ge29iamVjdH0gZGF0YVxuICogQHBhcmFtIHtzdHJpbmd8c3ltYm9sfSBwcm9wZXJ0eVxuICogQHJldHVybnMge1Byb3BlcnR5RGVzY3JpcHRvcnxudWxsfVxuICovXG5jb25zdCBmaW5kUHJvcGVydHlEZXNjcmlwdG9yID0gKGRhdGEsIHByb3BlcnR5KSA9PiB7XG5cdGxldCB0eXBlID0gZGF0YTtcblx0d2hpbGUgKCFpc051bGxPclVuZGVmaW5lZCh0eXBlKSkge1xuXHRcdGNvbnN0IGRlc2NyaXB0b3IgPSBSZWZsZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0eXBlLCBwcm9wZXJ0eSk7XG5cdFx0aWYgKGRlc2NyaXB0b3IpIHJldHVybiBkZXNjcmlwdG9yO1xuXHRcdHR5cGUgPSBSZWZsZWN0LmdldFByb3RvdHlwZU9mKHR5cGUpO1xuXHR9XG5cblx0cmV0dXJuIG51bGw7XG59O1xuXG4vKipcbiAqIFRoZSBuYW1lcyBhIGhhbmRsZSBwcm92aWRlcywgZWFjaCBtYXBwZWQgdG8gdGhlIGhhbmRsZSBwcm92aWRpbmcgaXQ6IGEgTWFwLCBvciB0aGUgc3RhbmQtaW4gb2ZcbiAqIGBjcmVhdGVHbG9iYWxOYW1lQ2FjaGVgIG92ZXIgdGhlIGdsb2JhbCBvYmplY3QsIHdoaWNoIGFuc3dlcnMgdGhlIHNhbWUgY2FsbHMuXG4gKlxuICogQHR5cGVkZWYge29iamVjdH0gTmFtZUNhY2hlXG4gKiBAcHJvcGVydHkgeyhrZXk6IHN0cmluZ3xzeW1ib2wpID0+IGJvb2xlYW59IGhhc1xuICogQHByb3BlcnR5IHsoa2V5OiBzdHJpbmd8c3ltYm9sKSA9PiAoUmVzb2x2ZXJDb250ZXh0SGFuZGxlfHVuZGVmaW5lZCl9IGdldFxuICogQHByb3BlcnR5IHsoa2V5OiBzdHJpbmd8c3ltYm9sLCB2YWx1ZTogUmVzb2x2ZXJDb250ZXh0SGFuZGxlKSA9PiAqfSBzZXRcbiAqIEBwcm9wZXJ0eSB7KGtleTogc3RyaW5nfHN5bWJvbCkgPT4gYm9vbGVhbn0gZGVsZXRlXG4gKiBAcHJvcGVydHkgeygpID0+IEl0ZXJhYmxlPHN0cmluZ3xzeW1ib2w+fSBrZXlzXG4gKi9cblxuLyoqXG4gKiBOYW1lIGNhY2hlIGZvciBhIGNvbnRleHQgdGhhdCBpcyB0aGUgZ2xvYmFsIG9iamVjdCBpdHNlbGYuXG4gKlxuICogSXQgYW5zd2VycyBsaWtlIHRoZSBNYXAgaXQgcmVwbGFjZXM6IGV2ZXJ5IG5hbWUgaXMgcHJlc2VudCwgYW5kIHRoZSB2YWx1ZSBpcyB0aGUgaGFuZGxlXG4gKiBob2xkaW5nIGl0IC0gbmV2ZXIgdGhlIHZhbHVlIG9mIHRoZSBwcm9wZXJ0eS4gVGhhdCBpcyB0aGUgY29udHJhY3Qgb2YgI2ZpbmRIYW5kbGUsXG4gKiB3aG9zZSBjYWxsZXIgcmVhZHMgdGhlIHByb3BlcnR5IG9mZiB0aGUgaGFuZGxlIGl0IGdldHMgYmFjay5cbiAqXG4gKiBCZWNhdXNlIGV2ZXJ5IG5hbWUgaXMgcHJlc2VudCwgc3VjaCBhIHJlc29sdmVyIGFuc3dlcnMgZXZlcnkgbG9va3VwIHRoYXQgcmVhY2hlcyBpdCwgYW5kIG5vXG4gKiBoYW5kbGUgbmVhcmVyIHRoZSByb290IGlzIHJlYWNoZWQuIEl0IGxpc3RzIG5vIG5hbWUgb2YgaXRzIG93biwgc28gdGhlIG93bktleXMgdHJhcCBvZiBhIGhhbmRsZVxuICogZnVydGhlciBmcm9tIHRoZSByb290IHJlcG9ydHMgbm9uZSBvZiB0aGUgZ2xvYmFsIG9iamVjdCdzLlxuICpcbiAqIEBwYXJhbSB7UmVzb2x2ZXJDb250ZXh0SGFuZGxlfSBoYW5kbGVcbiAqIEByZXR1cm5zIHtOYW1lQ2FjaGV9XG4gKi9cbmNvbnN0IGNyZWF0ZUdsb2JhbE5hbWVDYWNoZSA9IChoYW5kbGUpID0+IHtcblx0cmV0dXJuIHtcblx0XHRoYXM6IChwcm9wZXJ0eSkgPT4ge1xuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fSxcblx0XHRnZXQ6IChwcm9wZXJ0eSkgPT4ge1xuXHRcdFx0cmV0dXJuIGhhbmRsZTtcblx0XHR9LFxuXHRcdHNldDogKHByb3BlcnR5LCB2YWx1ZSkgPT4ge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH0sXG5cdFx0ZGVsZXRlOiAocHJvcGVydHkpID0+IHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9LFxuXHRcdGtleXM6ICgpID0+IHtcblx0XHRcdC8vIE5vIG5hbWUgb2YgaXRzIG93bi4gYGhhc2AgYWxyZWFkeSBhbnN3ZXJzIGV2ZXJ5IGxvb2t1cCwgc28gYSBuYW1lIG9mIHRoZSBnbG9iYWwgb2JqZWN0XG5cdFx0XHQvLyBpcyBmb3VuZCBmcm9tIGFueXdoZXJlIGJlbG93OyBsaXN0aW5nIGl0IGFzIHdlbGwgd291bGQgb25seSBoYW5kIGl0IHRvIGFuIGV4ZWN1dGVyIHRoYXRcblx0XHRcdC8vIHR1cm5zIGEgbmFtZSBpbnRvIGNvZGUsIHdoaWNoIHRoZW4gZmFpbHMgb3ZlciBuYW1lcyBpdCBuZXZlciBuZWVkZWQgLSB0aGUgaW5kZXggXCIwXCIgb2Zcblx0XHRcdC8vIGEgZnJhbWUsIGEgc3ltYm9sIGFub3RoZXIgbGlicmFyeSBwbGFudGVkLiBBIHN0YXRlbWVudCByZWFjaGVzIGEgZ2xvYmFsIHRocm91Z2ggdGhlXG5cdFx0XHQvLyBvcmRpbmFyeSBzY29wZSBjaGFpbiBhbnl3YXkuXG5cdFx0XHRyZXR1cm4gW107XG5cdFx0fSxcblx0fTtcbn07XG5cbi8qKlxuICogV2hhdCBzdGFuZHMgYmVoaW5kIHRoZSBjb250ZXh0IG9mIG9uZSByZXNvbHZlcjogdGhlIG9iamVjdCBoYW5kZWQgdG8gaXQsIHRoZSBoYW5kbGUgb2YgaXRzIHBhcmVudCxcbiAqIGFuZCB0aGUgbmFtZSBjYWNoZSB0aGF0IHRlbGxzIHdoaWNoIG5hbWVzIHRoaXMgcmVzb2x2ZXIgcHJvdmlkZXMuIEl0IGhhbmRzIG91dCB0aGUgY29udGV4dCBhblxuICogZXhwcmVzc2lvbiBzZWVzLCBhIHByb3h5IHRoYXQgYW5zd2VycyBmb3IgdGhlIHdob2xlIGNoYWluLlxuICpcbiAqIEludGVybmFsIHRvIHRoZSBwYWNrYWdlOiBpbmRleC5qcyBkb2VzIG5vdCBleHBvcnQgaXQuXG4gKlxuICogQGV4cG9ydFxuICogQGNsYXNzIFJlc29sdmVyQ29udGV4dEhhbmRsZVxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZXNvbHZlckNvbnRleHRIYW5kbGUge1xuXHQvKiogQHR5cGUge29iamVjdHxudWxsfSAqL1xuXHQjY29udGV4dCA9IG51bGw7XG5cdC8qKiBAdHlwZSB7UmVzb2x2ZXJDb250ZXh0SGFuZGxlfG51bGx9ICovXG5cdCNwYXJlbnQgPSBudWxsO1xuXHQvKiogQHR5cGUge29iamVjdHxudWxsfSAqL1xuXHQjZGF0YSA9IG51bGw7XG5cdC8qKiBAdHlwZSB7TmFtZUNhY2hlfG51bGx9ICovXG5cdCNjYWNoZSA9IG51bGw7XG5cdC8qKiBAdHlwZSB7Ym9vbGVhbn0gKi9cblx0I3Byb3ZpZGVzQ29udGV4dCA9IGZhbHNlO1xuXG5cdC8qKlxuXHQgKiBAY29uc3RydWN0b3Jcblx0ICogQHBhcmFtIHs/b2JqZWN0fSBjb250ZXh0IHRoZSBvYmplY3QgdGhlIGNhbGxlciBoYW5kZWQgb3Zlciwga2VwdCByYXRoZXIgdGhhbiBjb3BpZWQuIFdoZXJlIG5vbmVcblx0ICogaXMgcGFzc2VkLCB0aGUgaGFuZGxlIGhvbGRzIG5vIG9iamVjdCBhdCBhbGwgYW5kIGNhcnJpZXMgbm8gbmFtZSwgbm90IGV2ZW4gb25lIG9mXG5cdCAqIE9iamVjdC5wcm90b3R5cGUuIEl0IGdldHMgYW4gb2JqZWN0IG9uIHRoZSBmaXJzdCB3cml0ZS5cblx0ICogQHBhcmFtIHs/UmVzb2x2ZXJDb250ZXh0SGFuZGxlfSBwYXJlbnQgdGhlIGhhbmRsZSBvZiB0aGUgcGFyZW50IHJlc29sdmVyXG5cdCAqL1xuXHRjb25zdHJ1Y3Rvcihjb250ZXh0LCBwYXJlbnQpIHtcblx0XHR0aGlzLiNkYXRhID0gaXNOdWxsT3JVbmRlZmluZWQoY29udGV4dCkgPyBudWxsIDogY29udGV4dDtcblx0XHR0aGlzLiNwYXJlbnQgPSBwYXJlbnQgPyBwYXJlbnQgOiBudWxsO1xuXHRcdHRoaXMuI3Byb3ZpZGVzQ29udGV4dCA9ICFpc051bGxPclVuZGVmaW5lZChjb250ZXh0KTtcblxuXHRcdHRoaXMuI2NhY2hlID0gdGhpcy4jYnVpbGROYW1lQ2FjaGUoKTtcblxuXHRcdGlmIChHTE9CQUwgPT09IHRoaXMuI2RhdGEpXG5cdFx0XHR0aGlzLiNjb250ZXh0ID0gdGhpcy4jZGF0YTtcblx0XHRlbHNlIHtcblx0XHRcdC8vIFRoZSBwcm94eSBhbnN3ZXJzIGZvciB0aGUgd2hvbGUgY2hhaW4sIHdoaWNoIGlzIG1vcmUgdGhhbiB0aGUgb2JqZWN0IGhhbmRlZCB0byB0aGlzXG5cdFx0XHQvLyByZXNvbHZlciBob2xkcy4gQSBwcm94eSBtYXkgbm90IHNwZWFrIHRoYXQgZnJlZWx5IGZvciBhIHRhcmdldCB0aGF0IGd1YXJhbnRlZXNcblx0XHRcdC8vIGFueXRoaW5nIGFib3V0IGl0cyBvd24ga2V5cyAtIGEgZnJvemVuIG9yIHNlYWxlZCBjb250ZXh0IGlzIHdoZXJlIHRoYXQgZW5kcyBpbiBhXG5cdFx0XHQvLyBUeXBlRXJyb3IgLSBzbyBpdCBnZXRzIGFuIGVtcHR5IHRhcmdldCBvZiBpdHMgb3duLiBObyB0cmFwIHJlYWRzIGl0OyBldmVyeSBvbmUgb2Zcblx0XHRcdC8vIHRoZW0gd29ya3Mgb24gI2RhdGEgYW5kICNjYWNoZS5cblx0XHRcdHRoaXMuI2NvbnRleHQgPSBuZXcgUHJveHkoe30sIHtcblx0XHRcdFx0aGFzOiAoZGF0YSwgcHJvcGVydHkpID0+IHtcblx0XHRcdFx0XHQvL2NvbnNvbGUubG9nKFwiaGFzIHByb3BlcnR5OlwiLCBwcm9wZXJ0eSk7XG5cdFx0XHRcdFx0cmV0dXJuIHRoaXMuI2ZpbmRIYW5kbGUocHJvcGVydHkpICE9IG51bGw7XG5cdFx0XHRcdH0sXG5cdFx0XHRcdGdldDogKGRhdGEsIHByb3BlcnR5KSA9PiB7XG5cdFx0XHRcdFx0Ly9jb25zb2xlLmxvZyhcImdldCBwcm9wZXJ0eTpcIiwgcHJvcGVydHkpO1xuXHRcdFx0XHRcdGNvbnN0IGhhbmRsZSA9IHRoaXMuI2ZpbmRIYW5kbGUocHJvcGVydHkpO1xuXHRcdFx0XHRcdHJldHVybiBoYW5kbGUgPyBoYW5kbGUuI2RhdGFbcHJvcGVydHldIDogdW5kZWZpbmVkO1xuXHRcdFx0XHR9LFxuXHRcdFx0XHRzZXQ6IChkYXRhLCBwcm9wZXJ0eSwgdmFsdWUpID0+IHtcblx0XHRcdFx0XHQvL2NvbnNvbGUubG9nKFwic2V0IHByb3BlcnR5OlwiLCBwcm9wZXJ0eSwgXCI9XCIsIHZhbHVlKTtcblx0XHRcdFx0XHR0aGlzLiNkYXRhID8/PSB7fTtcblx0XHRcdFx0XHR0aGlzLiNkYXRhW3Byb3BlcnR5XSA9IHZhbHVlO1xuXHRcdFx0XHRcdHRoaXMuI2NhY2hlLnNldChwcm9wZXJ0eSwgdGhpcyk7XG5cdFx0XHRcdFx0dGhpcy4jcHJvdmlkZXNDb250ZXh0ID0gdHJ1ZTtcblx0XHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdFx0fSxcblx0XHRcdFx0ZGVsZXRlUHJvcGVydHk6IChkYXRhLCBwcm9wZXJ0eSkgPT4ge1xuXHRcdFx0XHRcdGNvbnN0IGhhbmRsZSA9IHRoaXMuI2NhY2hlLmdldChwcm9wZXJ0eSk7XG5cdFx0XHRcdFx0aWYgKGhhbmRsZSkge1xuXHRcdFx0XHRcdFx0ZGVsZXRlIHRoaXMuI2RhdGFbcHJvcGVydHldO1xuXHRcdFx0XHRcdFx0dGhpcy4jY2FjaGUuZGVsZXRlKHByb3BlcnR5KTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHRcdH0sXG5cdFx0XHRcdGdldE93blByb3BlcnR5RGVzY3JpcHRvcjogKGRhdGEsIHByb3BlcnR5KSA9PiB7XG5cdFx0XHRcdFx0Y29uc3QgaGFuZGxlID0gdGhpcy4jZmluZEhhbmRsZShwcm9wZXJ0eSk7XG5cdFx0XHRcdFx0aWYgKCFoYW5kbGUpIHJldHVybiB1bmRlZmluZWQ7XG5cblx0XHRcdFx0XHQvLyBSZWFkIHRocm91Z2ggYSBnZXR0ZXIgcmF0aGVyIHRoYW4gdXAgZnJvbnQsIHNvIGVudW1lcmF0aW5nIGEgY29udGV4dCBkb2VzIG5vdFxuXHRcdFx0XHRcdC8vIGV2YWx1YXRlIHdoYXQgbm9ib2R5IGFza2VkIGZvciwgYW5kIHNvIGEgdmFsdWUgc3RheXMgbGl2ZS4gRW51bWVyYWJpbGl0eVxuXHRcdFx0XHRcdC8vIGlzIHRha2VuIGZyb20gd2hlcmUgdGhlIHByb3BlcnR5IGlzIGRlZmluZWQgLSB0aGF0IGlzIHdoYXQga2VlcHMgdGhlIG1lbWJlcnNcblx0XHRcdFx0XHQvLyBvZiBPYmplY3QucHJvdG90eXBlIG91dCBvZiBPYmplY3Qua2V5cyAtIHdoaWxlIGNvbmZpZ3VyYWJsZSBoYXMgdG8gYmUgdHJ1ZTpcblx0XHRcdFx0XHQvLyBhIHByb3h5IG1heSBub3QgY2xhaW0gYSBmaXhlZCBwcm9wZXJ0eSBpdHMgdGFyZ2V0IGRvZXMgbm90IGhhdmUuXG5cdFx0XHRcdFx0Y29uc3QgZGVzY3JpcHRvciA9IGZpbmRQcm9wZXJ0eURlc2NyaXB0b3IoaGFuZGxlLiNkYXRhLCBwcm9wZXJ0eSk7XG5cdFx0XHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0XHRcdGdldDogKCkgPT4gaGFuZGxlLiNkYXRhW3Byb3BlcnR5XSxcblx0XHRcdFx0XHRcdGVudW1lcmFibGU6IGRlc2NyaXB0b3IgPyBkZXNjcmlwdG9yLmVudW1lcmFibGUgOiB0cnVlLFxuXHRcdFx0XHRcdFx0Y29uZmlndXJhYmxlOiB0cnVlXG5cdFx0XHRcdFx0fTtcblx0XHRcdFx0fSxcblx0XHRcdFx0b3duS2V5czogKGRhdGEpID0+IHtcblx0XHRcdFx0XHQvL2NvbnNvbGUubG9nKFwib3duS2V5c1wiKTtcblx0XHRcdFx0XHRjb25zdCByZXN1bHQgPSBuZXcgU2V0KCk7XG5cdFx0XHRcdFx0bGV0IGhhbmRsZSA9IHRoaXM7XG5cdFx0XHRcdFx0d2hpbGUgKGhhbmRsZSkge1xuXHRcdFx0XHRcdFx0Ly8gYSBoYW5kbGUgd2l0aG91dCBhbiBvYmplY3QgY2FycmllcyBubyBuYW1lIC0gaXRzIGVtcHR5IGNhY2hlIGlzIHBhc3NlZCBieVxuXHRcdFx0XHRcdFx0aWYgKGhhbmRsZS4jZGF0YSAhPT0gbnVsbCkge1xuXHRcdFx0XHRcdFx0XHRmb3IgKGxldCBrZXkgb2YgaGFuZGxlLiNjYWNoZS5rZXlzKCkpIHtcblx0XHRcdFx0XHRcdFx0XHRyZXN1bHQuYWRkKGtleSk7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdGhhbmRsZSA9IGhhbmRsZS4jcGFyZW50O1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRyZXR1cm4gQXJyYXkuZnJvbShyZXN1bHQpO1xuXHRcdFx0XHR9LFxuXHRcdFx0fSk7XG5cdFx0fVxuXHR9XG5cblx0LyoqXG5cdCAqIFRoZSBjb250ZXh0IGFuIGV4cHJlc3Npb24gc2VlczogYSBwcm94eSB0aGF0IGFuc3dlcnMgZm9yIHRoZSB3aG9sZSBjaGFpbiwgb3Igb3ZlciB0aGUgZ2xvYmFsXG5cdCAqIG9iamVjdCB0aGUgZ2xvYmFsIG9iamVjdCBpdHNlbGYuXG5cdCAqXG5cdCAqIEB0eXBlIHtvYmplY3R9XG5cdCAqL1xuXHRnZXQgY29udGV4dCgpIHtcblx0XHRyZXR1cm4gdGhpcy4jY29udGV4dDtcblx0fVxuXG5cdC8qKlxuXHQgKiBAdHlwZSB7UmVzb2x2ZXJDb250ZXh0SGFuZGxlfG51bGx9XG5cdCAqL1xuXHRnZXQgcGFyZW50KCkge1xuXHRcdHJldHVybiB0aGlzLiNwYXJlbnQ7XG5cdH1cblxuXHQvKipcblx0ICogV2hldGhlciB0aGlzIGhhbmRsZSBwcm92aWRlcyB0aGUgbmFtZSBpdHNlbGYuIEV2ZXJ5IG5hbWUgb2YgaXRzIG93biBjb250ZXh0IGNvdW50cywgdGhlIG9uZXNcblx0ICogaW5oZXJpdGVkIHRocm91Z2ggdGhlIHByb3RvdHlwZSBjaGFpbiBpbmNsdWRlZDsgYSBoYW5kbGUgb3ZlciB0aGUgZ2xvYmFsIG9iamVjdFxuXHQgKiBwcm92aWRlcyBldmVyeSBuYW1lLlxuXHQgKlxuXHQgKiBAcGFyYW0ge3N0cmluZ3xzeW1ib2x9IGtleVxuXHQgKiBAcmV0dXJucyB7Ym9vbGVhbn1cblx0ICovXG5cdGhhc05hbWUoa2V5KSB7XG5cdFx0cmV0dXJuIHRoaXMuI2NhY2hlLmhhcyhrZXkpO1xuXHR9XG5cblx0LyoqXG5cdCAqIFdoZXRoZXIgdGhpcyBoYW5kbGUgcHJvdmlkZXMgYSBjb250ZXh0OiBvbmUgd2FzIGhhbmRlZCB0byB0aGUgY29uc3RydWN0b3IsIG9yIGEgdmFsdWUgaGFzIGJlZW5cblx0ICogd3JpdHRlbiBzaW5jZS4gV2hhdCB0aGUgZGF0YSBob2xkcyBkZWNpZGVzIG5vdGhpbmcuXG5cdCAqXG5cdCAqIEB0eXBlIHtib29sZWFufVxuXHQgKi9cblx0Z2V0IHByb3ZpZGVzQ29udGV4dCgpIHtcblx0XHRyZXR1cm4gdGhpcy4jcHJvdmlkZXNDb250ZXh0O1xuXHR9XG5cblx0LyoqXG5cdCAqIEFzc2lnbnMgdGhlIGtleXMgb2YgYW4gb2JqZWN0IGludG8gdGhlIG9uZSB0aGlzIGhhbmRsZSBob2xkcywga2V5IGJ5IGtleSwgY3JlYXRpbmcgdGhhdCBvYmplY3Rcblx0ICogd2hlcmUgdGhlcmUgaXMgbm9uZS5cblx0ICpcblx0ICogQHBhcmFtIHtvYmplY3R9IGRhdGFcblx0ICogQHRocm93cyB7VHlwZUVycm9yfSB3aGVyZSB0aGUgb2JqZWN0IGhlbGQgcmVmdXNlcyBhIGtleSAtIHRoZSBrZXlzIGJlZm9yZSBpdCBhcmUgd3JpdHRlbiBieSB0aGVuXG5cdCAqL1xuXHRtZXJnZURhdGEoZGF0YSkge1xuXHRcdHRoaXMuI2RhdGEgPz89IHt9O1xuXHRcdE9iamVjdC5hc3NpZ24odGhpcy4jZGF0YSwgZGF0YSk7XG5cdFx0dGhpcy4jcHJvdmlkZXNDb250ZXh0ID0gdHJ1ZTtcblx0XHR0aGlzLiNjYWNoZSA9IHRoaXMuI2J1aWxkTmFtZUNhY2hlKCk7XG5cdH1cblxuXHQvKipcblx0ICogVGFrZXMgdXAgdGhlIGtleXMgYWRkZWQgdG8gdGhlIGhhbmRlZC1pbiBvYmplY3Qgc2luY2UgdGhlIGhhbmRsZSB3YXMgYnVpbHQsIHdoaWNoIGFyZSBub3Rcblx0ICogcHJvdmlkZWQgdW50aWwgdGhlbi5cblx0ICovXG5cdHJlc2V0Q2FjaGUoKSB7XG5cdFx0dGhpcy4jY2FjaGUgPSB0aGlzLiNidWlsZE5hbWVDYWNoZSgpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEEgbmV3IG5hbWUgY2FjaGUgZm9yIHRoZSBvYmplY3QgdGhpcyBoYW5kbGUgaG9sZHM6IGV2ZXJ5IGtleSBpdCBjYXJyaWVzLCBpdHMgcHJvdG90eXBlIGNoYWluXG5cdCAqIGluY2x1ZGVkLCBlYWNoIG1hcHBlZCB0byB0aGlzIGhhbmRsZS4gT3ZlciB0aGUgZ2xvYmFsIG9iamVjdCB0aGUgc3RhbmQtaW4gb2Zcblx0ICogYGNyZWF0ZUdsb2JhbE5hbWVDYWNoZWAsIHdoaWNoIHByb3ZpZGVzIGV2ZXJ5IG5hbWUuXG5cdCAqXG5cdCAqIEByZXR1cm5zIHtOYW1lQ2FjaGV9XG5cdCAqL1xuXHQjYnVpbGROYW1lQ2FjaGUoKSB7XG5cdFx0Y29uc3QgZGF0YSA9IHRoaXMuI2RhdGE7XG5cdFx0aWYgKEdMT0JBTCA9PT0gZGF0YSkgXG5cdFx0XHRyZXR1cm4gY3JlYXRlR2xvYmFsTmFtZUNhY2hlKHRoaXMpO1xuXG5cdFx0Ly8gZXZlcnkga2V5IEphdmFTY3JpcHQgc2F5cyB0aGUgb2JqZWN0IGNhcnJpZXMsIG5vdGhpbmcgZmlsdGVyZWQgLSB3aGljaCBvZiB0aGVtIGFuIGV4ZWN1dGVyXG5cdFx0Ly8gY2FuIHB1dCBpbnRvIGl0cyBjb2RlIGlzIHRoZSBleGVjdXRlcidzIGJ1c2luZXNzXG5cdFx0Y29uc3QgY2FjaGUgPSBuZXcgTWFwKCk7XG5cdFx0bGV0IHR5cGUgPSBkYXRhO1xuXHRcdHdoaWxlICghaXNOdWxsT3JVbmRlZmluZWQodHlwZSkpIHtcblx0XHRcdGZvciAobGV0IG5hbWUgb2YgUmVmbGVjdC5vd25LZXlzKHR5cGUpKSBjYWNoZS5zZXQobmFtZSwgdGhpcyk7XG5cdFx0XHR0eXBlID0gUmVmbGVjdC5nZXRQcm90b3R5cGVPZih0eXBlKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gY2FjaGU7XG5cdH1cblxuXHQvKipcblx0ICogVGhlIG5lYXJlc3QgaGFuZGxlIGZyb20gdGhpcyBvbmUgdG8gdGhlIHJvb3QgdGhhdCBwcm92aWRlcyB0aGUgbmFtZSwgb3IgbnVsbCB3aGVyZSBub25lIGRvZXMuXG5cdCAqXG5cdCAqIEBwYXJhbSB7c3RyaW5nfHN5bWJvbH0gcHJvcGVydHlcblx0ICogQHJldHVybnMge1Jlc29sdmVyQ29udGV4dEhhbmRsZXxudWxsfVxuXHQgKi9cblx0I2ZpbmRIYW5kbGUocHJvcGVydHkpIHtcblx0XHQvLyBBIGhhbmRsZSB3aXRob3V0IGFuIG9iamVjdCBjYXJyaWVzIG5vIG5hbWUsIHNvIGl0IGlzIHBhc3NlZCBieSB3aXRob3V0IGFza2luZyBpdHMgY2FjaGUgLVxuXHRcdC8vIG1vc3QgcmVzb2x2ZXJzIG9mIGEgY2hhaW4gYXJlIGJ1aWx0IHdpdGhvdXQgYSBjb250ZXh0LlxuXHRcdGxldCBoYW5kbGUgPSB0aGlzO1xuXHRcdHdoaWxlIChoYW5kbGUpIHtcblx0XHRcdGlmIChoYW5kbGUuI2RhdGEgIT09IG51bGwgJiYgaGFuZGxlLiNjYWNoZS5oYXMocHJvcGVydHkpKSByZXR1cm4gaGFuZGxlLiNjYWNoZS5nZXQocHJvcGVydHkpO1xuXHRcdFx0aGFuZGxlID0gaGFuZGxlLiNwYXJlbnQ7XG5cdFx0fVxuXHRcdHJldHVybiBudWxsO1xuXHR9XG59XG4iLCIvKipcbiAqIFRoZSBoZWxwZXJzIG1vcmUgdGhhbiBvbmUgY29tcG9uZW50IHVzZXMuIEludGVybmFsIHRvIHRoZSBwYWNrYWdlOiBpbmRleC5qcyBkb2VzIG5vdCBleHBvcnRcbiAqIHRoZW0uXG4gKi9cblxuLyoqIFdoaXRlc3BhY2UgaW4gdGhlIHNlbnNlIG9mIGBcXHNgLiAqL1xuZXhwb3J0IGNvbnN0IFdISVRFU1BBQ0UgPSAvXFxzLztcblxuLyoqXG4gKiBXaGV0aGVyIGEgY2hhcmFjdGVyIG1heSBzdGFuZCBpbiBhIHNjb3BlIG5hbWU6IGFuIEFTQ0lJIGxldHRlciwgYSBkaWdpdCxcbiAqIFwiLVwiLCBcIl9cIiwgb3Igd2hpdGVzcGFjZSBpbiB0aGUgc2Vuc2Ugb2YgYFxcc2AsIHdoaWNoIHBhc3QgQVNDSUkgaXMgbGVmdCB0byB0aGUgcmVndWxhciBleHByZXNzaW9uLlxuICpcbiAqIEBwYXJhbSB7bnVtYmVyfSBhQ29kZSB0aGUgY2hhciBjb2RlXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuZXhwb3J0IGNvbnN0IGlzTmFtZUNoYXJhY3RlciA9IChhQ29kZSkgPT4ge1xuXHRpZiAoYUNvZGUgPCAweDgwKVxuXHRcdHJldHVybiAoXG5cdFx0XHQoYUNvZGUgPj0gMHg2MSAmJiBhQ29kZSA8PSAweDdhKSB8fFxuXHRcdFx0KGFDb2RlID49IDB4NDEgJiYgYUNvZGUgPD0gMHg1YSkgfHxcblx0XHRcdChhQ29kZSA+PSAweDMwICYmIGFDb2RlIDw9IDB4MzkpIHx8XG5cdFx0XHRhQ29kZSA9PT0gMHgyZCB8fFxuXHRcdFx0YUNvZGUgPT09IDB4NWYgfHxcblx0XHRcdGFDb2RlID09PSAweDIwIHx8XG5cdFx0XHQoYUNvZGUgPj0gMHgwOSAmJiBhQ29kZSA8PSAweDBkKVxuXHRcdCk7XG5cblx0cmV0dXJuIFdISVRFU1BBQ0UudGVzdChTdHJpbmcuZnJvbUNoYXJDb2RlKGFDb2RlKSk7XG59O1xuXG4vKipcbiAqIFRyaW1zIGEgc3RyaW5nLCBhbmQgYW5zd2VycyBudWxsIGZvciBvbmUgdGhhdCBpcyBlbXB0eSBhZnRlciB0cmltbWluZywgYW5kIGZvciBub25lLlxuICpcbiAqIEBwYXJhbSB7P3N0cmluZ30gdmFsdWVcbiAqIEByZXR1cm5zIHs/c3RyaW5nfVxuICovXG5leHBvcnQgY29uc3QgdHJpbVRvTnVsbCA9ICh2YWx1ZSkgPT4ge1xuXHRpZiAodmFsdWUpIHtcblx0XHR2YWx1ZSA9IHZhbHVlLnRyaW0oKTtcblx0XHRyZXR1cm4gdmFsdWUubGVuZ3RoID09IDAgPyBudWxsIDogdmFsdWU7XG5cdH1cblx0cmV0dXJuIG51bGw7XG59O1xuXG4vKipcbiAqIEEgMzIgYml0IGhhc2ggb2YgYSBzdHJpbmcsIGluIHRoZSBtYW5uZXIgb2YgSmF2YSdzIGBTdHJpbmcuaGFzaENvZGVgLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBhU3RyaW5nXG4gKiBAcmV0dXJucyB7bnVtYmVyfVxuICovXG5leHBvcnQgY29uc3Qgc3RyaW5nVG9IYXNoY29kZSA9IChhU3RyaW5nKSA9PiB7XG5cdGxldCBoYXNoID0gMDtcblx0aWYgKGFTdHJpbmcubGVuZ3RoID09IDApIHJldHVybiBoYXNoO1xuXHRjb25zdCBsZW5ndGggPSBhU3RyaW5nLmxlbmd0aDtcblx0Zm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuXHRcdGNvbnN0IGNoYXIgPSBhU3RyaW5nLmNoYXJDb2RlQXQoaSk7XG5cdFx0aGFzaCA9IChoYXNoIDw8IDUpIC0gaGFzaCArIGNoYXI7XG5cdFx0aGFzaCB8PSAwOyAvLyBDb252ZXJ0IHRvIDMyYml0IGludGVnZXJcblx0fVxuXHRyZXR1cm4gaGFzaDtcbn07XG4iLCJpbXBvcnQgeyByZWdpc3RlciB9IGZyb20gXCIuLi9FeGVjdXRlclJlZ2lzdHJ5LmpzXCI7XG5pbXBvcnQgRXhlY3V0ZXIgZnJvbSBcIi4uL0V4ZWN1dGVyLmpzXCI7XG5pbXBvcnQgQ29kZUNhY2hlIGZyb20gXCIuLi9Db2RlQ2FjaGUuanNcIjtcbmltcG9ydCBHTE9CQUwgZnJvbSBcIkBkZWZhdWx0LWpzL2RlZmF1bHRqcy1jb21tb24tdXRpbHMvc3JjL0dsb2JhbC5qc1wiO1xuXG5sZXQgREVCVUcgPSBmYWxzZTtcbi8qKiBUaGUgbmFtZSB0aGlzIGV4ZWN1dGVyIGlzIHJlZ2lzdGVyZWQgdW5kZXIsIGFuZCB0aGUgZGVmYXVsdCBleGVjdXRlci4gKi9cbmV4cG9ydCBjb25zdCBFWEVDVVRFUk5BTUUgPSBcImNvbnRleHQtZGVjb25zdHJ1Y3Rpb24tZXhlY3V0ZXJcIjtcbmNvbnN0IEVYUFJFU1NJT05fQ0FDSEUgPSBuZXcgQ29kZUNhY2hlKCk7XG5cblxuLyoqXG4gKiBIb3cgbWFueSBuYW1lcyBhIGNvbnRleHQgbWF5IGNhcnJ5IGJlZm9yZSB0aGlzIGV4ZWN1dGVyIHNheXMgdGhhdCBiaW5kaW5nIHRoZW0gYWxsIGNvc3RzLiBFdmVyeVxuICogb3JkaW5hcnkgb2JqZWN0IGJyaW5ncyBzZXZlbiBvZiB0aGVtIGFsb25nIGZyb20gYE9iamVjdC5wcm90b3R5cGVgLCBzbyB0aGUgbnVtYmVyIGNvdW50cyBhIGdvb2RcbiAqIG1hbnkgb3duIGtleXMgYmVmb3JlIGl0IGlzIHJlYWNoZWQuXG4gKi9cbmNvbnN0IEhJR0hfUFJPUEVSVFlfQ09VTlQgPSAyNTtcblxuLyoqXG4gKiBUaGUgbmFtZXMgdGhhdCBtYWRlIHRoZSBnZW5lcmF0ZWQgZnVuY3Rpb24gZmFpbCB0byBjb21waWxlLCBhc2tlZCBvZiBKYXZhU2NyaXB0IGl0c2VsZiByYXRoZXJcbiAqIHRoYW4gb2YgYSBsaXN0IGtlcHQgaGVyZTogYSBuYW1lIGlzIHVzYWJsZSB3aGVuIGl0IGNhbiBzdGFuZCBpbiBhIGRlc3RydWN0dXJpbmcgcGF0dGVybi5cbiAqXG4gKiBPbmx5IGV2ZXIgY2FsbGVkIG9uIHRoZSBmYWlsdXJlIHBhdGgsIHNvIHRoZSBjb3N0IG9mIGNvbXBpbGluZyBvbmUgcGF0dGVybiBwZXIgbmFtZSBpcyBwYWlkIGJ5IGFcbiAqIGNvbnRleHQgdGhhdCBpcyBicm9rZW4gZm9yIHRoaXMgZXhlY3V0ZXIgYW55d2F5LlxuICpcbiAqIEBwYXJhbSB7QXJyYXk8c3RyaW5nfHN5bWJvbD59IHRoZU5hbWVzXG4gKiBAcmV0dXJucyB7QXJyYXk8c3RyaW5nPn1cbiAqL1xuY29uc3QgdW51c2FibGVOYW1lcyA9ICh0aGVOYW1lcykgPT5cblx0dGhlTmFtZXNcblx0XHQuZmlsdGVyKChuYW1lKSA9PiB7XG5cdFx0XHRpZiAodHlwZW9mIG5hbWUgPT09IFwic3ltYm9sXCIpIHJldHVybiB0cnVlO1xuXHRcdFx0dHJ5IHtcblx0XHRcdFx0bmV3IEZ1bmN0aW9uKGB7JHtuYW1lfX1gLCBcIlwiKTtcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0fSBjYXRjaCAoZSkge1xuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdH1cblx0XHR9KVxuXHRcdC5tYXAoU3RyaW5nKTtcblxuLyoqXG4gKiBTd2l0Y2hlcyB0aGUgbG9nZ2luZyBvZiBldmVyeSBmdW5jdGlvbiB0aGlzIGV4ZWN1dGVyIGdlbmVyYXRlcyB0byB0aGUgY29uc29sZS5cbiAqXG4gKiBAcGFyYW0ge2Jvb2xlYW59IHZhbHVlXG4gKi9cbmV4cG9ydCBjb25zdCBzZXREZWJ1ZyA9ICh2YWx1ZSkgPT4ge1xuXHRERUJVRyA9IHZhbHVlO1xufTtcblxuLyoqXG4gKiBDb25maWd1cmVzIHRoZSBjb2RlIGNhY2hlIG9mIHRoaXMgZXhlY3V0ZXIuIGBzaXplYCBpcyB0aGUgb25seSBvcHRpb25cbiAqIHRvZGF5OyBhbiBvcHRpb24gbGVmdCBvdXQgY2hhbmdlcyBub3RoaW5nLlxuICpcbiAqIEBwYXJhbSB7aW1wb3J0KCcuLi9Db2RlQ2FjaGUuanMnKS5Db2RlQ2FjaGVPcHRpb25zfSBbb3B0aW9uc11cbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gd2hlcmUgdGhlIHNpemUgaXMgbm90IGEgZmluaXRlIG51bWJlclxuICovXG5leHBvcnQgY29uc3Qgc2V0dXBFeGVjdXRlciA9IChvcHRpb25zKSA9PiB7XG5cdEVYUFJFU1NJT05fQ0FDSEUuc2V0dXAob3B0aW9ucyk7XG59O1xuXG5jb25zdCBnZXRQcm9wZXJ0eU5hbWVzID0gKGFDb250ZXh0KSA9PiB7XG5cdGlmIChHTE9CQUwgPT09IGFDb250ZXh0KSByZXR1cm4gW107XG5cdHJldHVybiBSZWZsZWN0Lm93bktleXMoYUNvbnRleHQpO1xufTtcblxuY29uc3QgZ2V0T3JDcmVhdGVGdW5jdGlvbiA9IChhU3RhdGVtZW50LCBjb250ZXh0UHJvcGVydGllcykgPT4ge1xuXHQvLyBBIHN5bWJvbCBoYXMgdG8gYmUgd3JpdHRlbiBvdXQgcmF0aGVyIHRoYW4gam9pbmVkIC0gYGpvaW5gIGFsb25lIHJhaXNlcyBhIFR5cGVFcnJvciB0aGF0IHNheXNcblx0Ly8gbm90aGluZyBhYm91dCB0aGUgY29udGV4dCBpdCBjYW1lIGZyb20uIFdyaXR0ZW4gb3V0IGl0IHJlYWNoZXMgdGhlIHBhdHRlcm4sIHdoZXJlIGl0IGZhaWxzIHRvXG5cdC8vIGNvbXBpbGUgbGlrZSBhbnkgb3RoZXIgbmFtZSB0aGF0IGlzIG5vIGlkZW50aWZpZXIsIGFuZCBnZW5lcmF0ZSgpIG5hbWVzIGl0LlxuXHRjb25zdCBwcm9wZXJ0eU5hbWVzID0gY29udGV4dFByb3BlcnRpZXMubWFwKFN0cmluZykuam9pbihcIixcIik7XG5cdGNvbnN0IGNhY2hlS2V5ID0gYCR7YVN0YXRlbWVudC5sZW5ndGh9Ojoke3Byb3BlcnR5TmFtZXN9Ojoke2FTdGF0ZW1lbnR9YDtcblx0aWYgKEVYUFJFU1NJT05fQ0FDSEUuaGFzKGNhY2hlS2V5KSkge1xuXHRcdHJldHVybiBFWFBSRVNTSU9OX0NBQ0hFLmdldChjYWNoZUtleSk7XG5cdH1cblx0Y29uc3QgZXhwcmVzc2lvbiA9IGdlbmVyYXRlKGFTdGF0ZW1lbnQsIHByb3BlcnR5TmFtZXMsIGNvbnRleHRQcm9wZXJ0aWVzKTtcblx0RVhQUkVTU0lPTl9DQUNIRS5zZXQoY2FjaGVLZXksIGV4cHJlc3Npb24pO1xuXHRyZXR1cm4gZXhwcmVzc2lvbjtcbn07XG5cbi8qKlxuICogVGhlIGdlbmVyYXRlZCBmdW5jdGlvbiBkZXN0cnVjdHVyZXMgdGhlIGNvbnRleHQgaW4gaXRzIHBhcmFtZXRlciBsaXN0IGFuZCBydW5zIHRoZSBzdGF0ZW1lbnQgb3ZlclxuICogdGhlIGxvY2FsIGJpbmRpbmdzIHRoYXQgcHJvZHVjZXMuXG4gKlxuICogKipOb3RoaW5nIGlzIGNhcnJpZWQgYmFjay4qKiBBIHN0YXRlbWVudCB0aGF0IGFzc2lnbnMgdG8gYSBjb250ZXh0IG5hbWUgd3JpdGVzIGludG8gYSBsb2NhbFxuICogYmluZGluZywgYW5kIHRoYXQgYmluZGluZyBpcyBnb25lIHdoZW4gdGhlIGZ1bmN0aW9uIHJldHVybnMgLSBzbyBhIHdyaXRlIGlzIG5vdCByZWFkYWJsZVxuICogYWZ0ZXJ3YXJkcywgd2hpY2ggdGhlIHJlc29sdmVyIGxlYXZlcyB0byBlYWNoIGV4ZWN1dGVyLiBUaGF0IGlzIGEgZGVjaXNpb24gcmF0aGVyIHRoYW4gYSBnYXA6IHRoZVxuICogd3JpdGUtYmFjayB0aGlzIGV4ZWN1dGVyIGNhcnJpZWQgYmV0d2VlbiAyMDI2LTA5LTA3IGFuZCAyMDI2LTA5LTIwIGNvc3QgYSBmYWN0b3Igb2YgZWxldmVuIG9uIGFcbiAqIGNhY2hlIG1pc3MsIGJlY2F1c2UgaXQgbmVlZHMgZXZlcnkgY29udGV4dCBuYW1lIGRlY2xhcmVkIGluIHRoZSBib2R5IGluc3RlYWQgb2YgbGlzdGVkIGluIHRoZVxuICogcGFyYW1ldGVyIGxpc3QuIFNwZWVkIGlzIHdoYXQgdGhpcyBleGVjdXRlciBpcyBmb3IsIGFuZCBhIGNvbnN1bWVyIHdobyBuZWVkcyBhIHdyaXRlIHRvIHBlcnNpc3RcbiAqIHBpY2tzIGBjb250ZXh0LW9iamVjdC1leGVjdXRlcmAuXG4gKlxuICogV2hhdCBzdGlsbCByZWFjaGVzIHRoZSBjb250ZXh0IGlzIGEgKiptdXRhdGlvbioqOiBgaG9sZGVyLm5hbWUgPSBcImFmdGVyXCJgIGNoYW5nZXMgYW4gb2JqZWN0IHRoZVxuICogYmluZGluZyBhbmQgdGhlIGNvbnRleHQgYm90aCBwb2ludCBhdCwgYW5kIG5lZWRzIG5vdGhpbmcgY2FycmllZCBiYWNrLlxuICpcbiAqIFRoZSBjb250ZXh0IGlzIGRlc3RydWN0dXJlZCBpbiB0aGUgcGFyYW1ldGVyIGxpc3QgcmF0aGVyIHRoYW4gZGVjbGFyZWQgaW4gdGhlIGJvZHkgc28gdGhhdCB0aGVcbiAqIGdlbmVyYXRlZCBzb3VyY2Ugc3RheXMgb25lIGxpbmUgcGVyIHN0YXRlbWVudCBpbnN0ZWFkIG9mIG9uZSBsaW5lIHBlciBjb250ZXh0IG5hbWUgLSBgbmV3IEZ1bmN0aW9uYFxuICogcGFyc2VzIHRoYXQgc291cmNlIG9uIGV2ZXJ5IGNhY2hlIG1pc3MsIGFuZCBpdHMgbGVuZ3RoIGlzIHdoYXQgdGhlIG1pc3MgY29zdHMuIEl0IGFsc28gZGVjbGFyZXMgbm9cbiAqIG5hbWUgb2YgaXRzIG93bjogdGhlIHN0YXRlbWVudCBjYW4gdGhlcmVmb3JlIG5ldmVyIGNvbGxpZGUgd2l0aCBhIGJpbmRpbmcgb2YgdGhpcyBmdW5jdGlvbiwgd2hpY2hcbiAqIGlzIHdoYXQgdGhlIHJhbmRvbSBzdWZmaXggcmVtb3ZlZCBvbiAyMDI2LTA5LTIwIHVzZWQgdG8gZ3VhcmQuXG4gKlxuICogKipOb3RoaW5nIGlzIGZpbHRlcmVkIG91dCBvZiB0aGUgcGF0dGVybi4qKiBFdmVyeSBuYW1lIHRoZSBjb250ZXh0IGNhcnJpZXMgaXMgYm91bmQsIGEgbmFtZSB0aGF0XG4gKiBjYW5ub3QgYmUgYSB2YXJpYWJsZSBpbmNsdWRlZCAtIGEga2V5IGxpa2UgYHRlc3QtdGVzdGAsIGEgcmVzZXJ2ZWQgd29yZCwgYSBzeW1ib2wsIHRoZSBpbmRleCBvZiBhblxuICogYXJyYXkuIFN1Y2ggYSBjb250ZXh0IGNhbm5vdCBiZSBydW4gb3ZlciBieSB0aGlzIGV4ZWN1dGVyIGF0IGFsbCwgYW5kIGRyb3BwaW5nIHRoZSBuYW1lIHNpbGVudGx5XG4gKiB3b3VsZCBoaWRlIGEgcHJvcGVydHkgdGhlIGNhbGxlciBkZWZpbmVkLiBXaGF0IHRoaXMgZXhlY3V0ZXIgb3dlcyB0aGUgY2FsbGVyIGluc3RlYWQgaXMgYSBtZXNzYWdlXG4gKiB0aGF0IHNheXMgd2hpY2ggc3RhdGVtZW50IGZhaWxlZCBhbmQgd2hpY2ggbmFtZSBkaWQgaXQsIGJlY2F1c2UgdGhlIHN0YXRlbWVudCBpdHNlbGYgbmVlZCBub3RcbiAqIG1lbnRpb24gdGhhdCBuYW1lLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBhU3RhdGVtZW50XG4gKiBAcGFyYW0ge3N0cmluZ30gdGhlUHJvcGVydHlOYW1lU3RyaW5nIHRoZSBjb250ZXh0IG5hbWVzLCBjb21tYSBzZXBhcmF0ZWQsIGFzIHRoZSBkZXN0cnVjdHVyaW5nXG4gKiAgICAgICAgICAgICAgICAgcGF0dGVybiBzcGVsbHMgdGhlbVxuICogQHBhcmFtIHtBcnJheTxzdHJpbmd8c3ltYm9sPn0gdGhlTmFtZXMgdGhlIHNhbWUgbmFtZXMgdW53cml0dGVuLCBmb3IgdGhlIGVycm9yIG1lc3NhZ2VcbiAqIEByZXR1cm5zIHtGdW5jdGlvbn1cbiAqL1xuY29uc3QgZ2VuZXJhdGUgPSAoYVN0YXRlbWVudCwgdGhlUHJvcGVydHlOYW1lU3RyaW5nLCB0aGVOYW1lcykgPT4ge1xuXHQvLyBPbmx5IGhlcmUsIGFuZCB0aGVyZWZvcmUgb25jZSBwZXIgY29udGV4dCBzaGFwZSBhbmQgc3RhdGVtZW50IHJhdGhlciB0aGFuIG9uIGV2ZXJ5IGV4ZWN1dGlvbjpcblx0Ly8gYSBjb25zb2xlIHdyaXRlIGluIGEgYnJvd3NlciBjb3N0cyBtb3JlIHRoYW4gYSByZXNvbHV0aW9uIGRvZXMsIGFuZCB3YXJuaW5nIHBlciBleGVjdXRpb24gY29zdFxuXHQvLyB0aGlzIGV4ZWN1dGVyIGEgZmFjdG9yIG9mIGZvdXIgdG8gdHdlbnR5LWZpdmUgKG1lYXN1cmVkIDIwMjYtMDktMjIsIGBucG0gcnVuIGJlbmNoYCkuXG5cdGlmICh0aGVOYW1lcy5sZW5ndGggPiBISUdIX1BST1BFUlRZX0NPVU5UKVxuXHRcdGNvbnNvbGUud2Fybihcblx0XHRcdGBIaWdoIGNvdW50IG9mIHByb3BlcnRpZXMgYXQgZmlyc3QgbGV2ZWwsIGNhbiBiZSBkZWNyZWFzZSB0aGUgcGVyZm9ybWVuY2UhIGNvdW50OiAke3RoZU5hbWVzLmxlbmd0aH1gLFxuXHRcdCk7XG5cblx0Y29uc3QgY29kZSA9IGBcbnJldHVybiAoYXN5bmMgKHske3RoZVByb3BlcnR5TmFtZVN0cmluZ319KSA9PiB7XG4gICAgdHJ5e1xuICAgICAgIHJldHVybiAke2FTdGF0ZW1lbnR9XG4gICAgfWNhdGNoKGUpe1xuICAgICAgICB0aHJvdyBlO1xuICAgIH1cbn0pKGFyZ3VtZW50c1swXSB8fCB7fSk7YDtcblxuXHRpZiAoREVCVUcpIGNvbnNvbGUubG9nKFwiZ2VuZXJlcmF0ZWQgY29kZTogXFxuXCIsIGNvZGUpO1xuXG5cdHRyeSB7XG5cdFx0cmV0dXJuIG5ldyBGdW5jdGlvbihjb2RlKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdC8vIG9ubHkgYSBzeW50YXggZXJyb3IgY2FuIGNvbWUgZnJvbSBhIG5hbWUuIEFueXRoaW5nIGVsc2UgLSB0aGUgRXZhbEVycm9yIG9mIGEgQ29udGVudCBTZWN1cml0eVxuXHRcdC8vIFBvbGljeSB3aXRob3V0ICd1bnNhZmUtZXZhbCcgYW1vbmcgdGhlbSAtIGlzIGhhbmRlZCBvbjogYXNraW5nIGFib3V0IHRoZSBuYW1lcyB3b3VsZCBiZVxuXHRcdC8vIHJlZnVzZWQgYXMgd2VsbCwgYW5kIGV2ZXJ5IG5hbWUgd291bGQgYmUgYmxhbWVkXG5cdFx0aWYgKCEoZSBpbnN0YW5jZW9mIFN5bnRheEVycm9yKSkgdGhyb3cgZTtcblxuXHRcdGNvbnN0IHVudXNhYmxlID0gdW51c2FibGVOYW1lcyh0aGVOYW1lcyk7XG5cdFx0Ly8gbm90aGluZyB3cm9uZyB3aXRoIHRoZSBuYW1lczogdGhlIHN0YXRlbWVudCBpdHNlbGYgZG9lcyBub3QgY29tcGlsZSwgYW5kIHRoYXQgZXJyb3Igc2F5c1xuXHRcdC8vIG1vcmUgdGhhbiBhbnl0aGluZyB0aGlzIGV4ZWN1dGVyIGNvdWxkIGFkZFxuXHRcdGlmICh1bnVzYWJsZS5sZW5ndGggPT09IDApIHRocm93IGU7XG5cblx0XHR0aHJvdyBuZXcgU3ludGF4RXJyb3IoXG5cdFx0XHRgQ29udGV4dCBwcm9wZXJ0eSAke3VudXNhYmxlLmxlbmd0aCA9PT0gMSA/IFwibmFtZVwiIDogXCJuYW1lc1wifSBcIiR7dW51c2FibGUuam9pbignXCIsIFwiJyl9XCIgY2Fubm90IGJlIHVzZWQgYXMgYSB2YXJpYWJsZSBieSAke0VYRUNVVEVSTkFNRX0sIHNvIHRoaXMgc3RhdGVtZW50IGNhbm5vdCBydW4gb3ZlciB0aGlzIGNvbnRleHQhIHN0YXRlbWVudDogJHthU3RhdGVtZW50fWAsXG5cdFx0XHR7IGNhdXNlOiBlIH0sXG5cdFx0KTtcblx0fVxufTtcblxuLyoqXG4gKiBUaGUgZXhlY3V0ZXI6IGRlc3RydWN0dXJlcyB0aGUgY29udGV4dCBpbnRvIHRoZSBwYXJhbWV0ZXJzIG9mIGEgZ2VuZXJhdGVkIGZ1bmN0aW9uLCBzbyBhXG4gKiBzdGF0ZW1lbnQgYWRkcmVzc2VzIGEgY29udGV4dCB2YWx1ZSBieSBpdHMgYmFyZSBuYW1lIC0gc2VlIGBSRUFETUUubWRgLlxuICogUmVnaXN0ZXJlZCB1bmRlciBgRVhFQ1VURVJOQU1FYCBvbiBpbXBvcnQuXG4gKlxuICogQHR5cGUge0V4ZWN1dGVyfVxuICovXG5jb25zdCBFWEVDVVRFUiA9IG5ldyBFeGVjdXRlcih7XG5cdGV4ZWN1dGlvbjogKGFTdGF0ZW1lbnQsIGFDb250ZXh0KSA9PiB7XG5cdFx0Y29uc3QgcHJvcGVydHlOYW1lcyA9IGdldFByb3BlcnR5TmFtZXMoYUNvbnRleHQpO1xuXHRcdGNvbnN0IGV4cHJlc3Npb24gPSBnZXRPckNyZWF0ZUZ1bmN0aW9uKGFTdGF0ZW1lbnQsIHByb3BlcnR5TmFtZXMpO1xuXHRcdHJldHVybiBleHByZXNzaW9uKGFDb250ZXh0KTtcblx0fSxcbn0pO1xuXG5yZWdpc3RlcihFWEVDVVRFUk5BTUUsIEVYRUNVVEVSKTtcblxuZXhwb3J0IGRlZmF1bHQgRVhFQ1VURVI7XG4iLCJpbXBvcnQgeyByZWdpc3RlciB9IGZyb20gXCIuLi9FeGVjdXRlclJlZ2lzdHJ5LmpzXCI7XG5pbXBvcnQgRXhlY3V0ZXIgZnJvbSBcIi4uL0V4ZWN1dGVyLmpzXCI7XG5pbXBvcnQgQ29kZUNhY2hlIGZyb20gXCIuLi9Db2RlQ2FjaGUuanNcIjtcblxuLyoqIFRoZSBuYW1lIHRoaXMgZXhlY3V0ZXIgaXMgcmVnaXN0ZXJlZCB1bmRlci4gKi9cbmV4cG9ydCBjb25zdCBFWEVDVVRFUk5BTUUgPSBcImNvbnRleHQtb2JqZWN0LWV4ZWN1dGVyXCI7XG5jb25zdCBFWFBSRVNTSU9OX0NBQ0hFID0gbmV3IENvZGVDYWNoZSgpO1xuLyoqIFRoZSBuYW1lIGEgc3RhdGVtZW50IGFkZHJlc3NlcyB0aGUgY29udGV4dCBieS4gKi9cbmxldCBDT05URVhUX1ZBUiA9IFwiY3R4XCI7XG5cbi8qKlxuICogQ29uZmlndXJlcyB0aGlzIGV4ZWN1dGVyOiB0aGUgc2l6ZSBvZiBpdHMgY29kZSBjYWNoZSBhbmQgdGhlIG5hbWUgYSBzdGF0ZW1lbnQgYWRkcmVzc2VzIHRoZVxuICogY29udGV4dCBieS4gQW4gb3B0aW9uIGxlZnQgb3V0IGNoYW5nZXMgbm90aGluZy5cbiAqXG4gKiBAcGFyYW0ge29iamVjdH0gW29wdGlvbnNdXG4gKiBAcGFyYW0ge251bWJlcn0gW29wdGlvbnMuc2l6ZV0gdGhlIHNpemUgb2YgdGhlIGNvZGUgY2FjaGUsIGFzIGBDb2RlQ2FjaGVPcHRpb25zYCBkZXNjcmliZXMgaXQgaW5cbiAqIGBDb2RlQ2FjaGUuanNgXG4gKiBAcGFyYW0gez9zdHJpbmd9IFtvcHRpb25zLmNvbnRleHRWYXJdIHRoZSBuYW1lIGEgc3RhdGVtZW50IGFkZHJlc3NlcyB0aGUgY29udGV4dCBieSwgYGN0eGAgdW50aWwgaXRcbiAqIGlzIHNldCwgdGFrZW4gdHJpbW1lZC4gSXQgaG9sZHMgZm9yIGV2ZXJ5IHN0YXRlbWVudCB0aGlzIGV4ZWN1dGVyIHJ1bnMgZnJvbSB0aGVuIG9uLCB3aGljaGV2ZXJcbiAqIHJlc29sdmVyIGhhbmRzIGl0IG92ZXIuIE51bGwsIHVuZGVmaW5lZCBhbmQgYSBzdHJpbmcgdGhhdCBpcyBlbXB0eSBhZnRlciB0cmltbWluZyBsZWF2ZSB0aGUgbmFtZVxuICogYXMgaXQgaXMuIEEgbmFtZSB0aGF0IGNhbm5vdCBiZSBhIHBhcmFtZXRlciBuYW1lIGlzIG5vdCByZWplY3RlZCBoZXJlOiBldmVyeSBzdGF0ZW1lbnQgdGhlblxuICogdGhyb3dzIGEgYFN5bnRheEVycm9yYC5cbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gd2hlcmUgdGhlIHNpemUgaXMgbm90IGEgZmluaXRlIG51bWJlciwgb3IgdGhlIG5hbWUgaXMgbmVpdGhlciBhIHN0cmluZyBub3JcbiAqIG51bGwgb3IgdW5kZWZpbmVkXG4gKi9cbmV4cG9ydCBjb25zdCBzZXR1cEV4ZWN1dGVyID0gKG9wdGlvbnMpID0+IHtcblx0RVhQUkVTU0lPTl9DQUNIRS5zZXR1cChvcHRpb25zKTtcblx0Q09OVEVYVF9WQVIgPVxuXHRcdG9wdGlvbnM/LmNvbnRleHRWYXIgPT0gbnVsbCB8fCBvcHRpb25zPy5jb250ZXh0VmFyLnRyaW0oKS5sZW5ndGggPT09IDBcblx0XHRcdD8gQ09OVEVYVF9WQVJcblx0XHRcdDogb3B0aW9ucz8uY29udGV4dFZhci50cmltKCk7XG59O1xuXG4vKipcbiAqIFRoZSBuYW1lIGEgc3RhdGVtZW50IGFkZHJlc3NlcyB0aGUgY29udGV4dCBieTogYGN0eGAsIG9yIHRoZSBvbmUgYHNldHVwRXhlY3V0ZXJgIHNldCBsYXN0LlxuICpcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbmV4cG9ydCBjb25zdCBnZXRDb250ZXh0VmFyID0gKCkgPT4gQ09OVEVYVF9WQVI7XG5cbi8qKlxuICogQ29tcGlsZXMgYSBzdGF0ZW1lbnQgaW50byBhIGZ1bmN0aW9uIHRoYXQgaGFuZHMgdGhlIGNvbnRleHQgb3ZlciB1bmRlciB0aGUgbmFtZSBhIHN0YXRlbWVudFxuICogYWRkcmVzc2VzIGl0IGJ5LlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBhU3RhdGVtZW50XG4gKiBAcmV0dXJucyB7RnVuY3Rpb259XG4gKi9cbmNvbnN0IGdlbmVyYXRlID0gKGFTdGF0ZW1lbnQpID0+IHtcblx0Y29uc3QgY29kZSA9IGBcbnJldHVybiAoYXN5bmMgKCR7Q09OVEVYVF9WQVJ9KSA9PiB7XG4gICAgdHJ5e1xuICAgICAgICByZXR1cm4gJHthU3RhdGVtZW50fVxuICAgIH1jYXRjaChlKXtcbiAgICAgICAgdGhyb3cgZTtcbiAgICB9XG59KShhcmd1bWVudHNbMF0gfHwge30pO2A7XG5cblx0Ly9jb25zb2xlLmxvZyhcImNvZGVcIiwgY29kZSk7XG5cblx0cmV0dXJuIG5ldyBGdW5jdGlvbihjb2RlKTtcbn07XG5cbi8qKlxuICogVGhlIGNvbXBpbGVkIGZ1bmN0aW9uIGZvciBhIHN0YXRlbWVudCwgZnJvbSB0aGUgY2FjaGUgb3IgY29tcGlsZWQgbm93IGFuZCBjYWNoZWQuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGFTdGF0ZW1lbnRcbiAqIEByZXR1cm5zIHtGdW5jdGlvbn1cbiAqL1xuY29uc3QgZ2V0T3JDcmVhdGVGdW5jdGlvbiA9IChhU3RhdGVtZW50KSA9PiB7XG5cdGNvbnN0IGNhY2hlS2V5ID0gYCR7Q09OVEVYVF9WQVJ9Ojoke2FTdGF0ZW1lbnR9YDtcblxuXHRpZiAoRVhQUkVTU0lPTl9DQUNIRS5oYXMoY2FjaGVLZXkpKSB7XG5cdFx0cmV0dXJuIEVYUFJFU1NJT05fQ0FDSEUuZ2V0KGNhY2hlS2V5KTtcblx0fVxuXHRjb25zdCBleHByZXNzaW9uID0gZ2VuZXJhdGUoYVN0YXRlbWVudCk7XG5cdEVYUFJFU1NJT05fQ0FDSEUuc2V0KGNhY2hlS2V5LCBleHByZXNzaW9uKTtcblx0cmV0dXJuIGV4cHJlc3Npb247XG59O1xuXG4vKipcbiAqIFRoZSBleGVjdXRlcjogaGFuZHMgdGhlIGNvbnRleHQgb3ZlciBhcyBvbmUgb2JqZWN0IG5hbWVkIGBjdHhgLCBvciB0aGUgbmFtZSBgc2V0dXBFeGVjdXRlcmAgc2V0cyxcbiAqIHNvIGEgc3RhdGVtZW50IGFkZHJlc3NlcyBhIGNvbnRleHQgdmFsdWUgYXMgYGN0eC52YWx1ZWAgLSBzZWUgYFJFQURNRS5tZGAuIFJlZ2lzdGVyZWQgdW5kZXJcbiAqIGBFWEVDVVRFUk5BTUVgIG9uIGltcG9ydC5cbiAqXG4gKiBAdHlwZSB7RXhlY3V0ZXJ9XG4gKi9cbmNvbnN0IEVYRUNVVEVSID0gbmV3IEV4ZWN1dGVyKHtcblx0ZXhlY3V0aW9uOiAoYVN0YXRlbWVudCwgYUNvbnRleHQpID0+IHtcblx0XHRjb25zdCBleHByZXNzaW9uID0gZ2V0T3JDcmVhdGVGdW5jdGlvbihhU3RhdGVtZW50KTtcblx0XHRyZXR1cm4gZXhwcmVzc2lvbihhQ29udGV4dCk7XG5cdH0sXG59KTtcblxucmVnaXN0ZXIoRVhFQ1VURVJOQU1FLCBFWEVDVVRFUik7XG5cbmV4cG9ydCBkZWZhdWx0IEVYRUNVVEVSO1xuIiwiaW1wb3J0IHsgcmVnaXN0ZXIgfSBmcm9tIFwiLi4vRXhlY3V0ZXJSZWdpc3RyeS5qc1wiO1xuaW1wb3J0IEV4ZWN1dGVyIGZyb20gXCIuLi9FeGVjdXRlci5qc1wiO1xuaW1wb3J0IENvZGVDYWNoZSBmcm9tIFwiLi4vQ29kZUNhY2hlLmpzXCI7XG5cbi8qKiBUaGUgbmFtZSB0aGlzIGV4ZWN1dGVyIGlzIHJlZ2lzdGVyZWQgdW5kZXIuICovXG5leHBvcnQgY29uc3QgRVhFQ1VURVJOQU1FID0gXCJ3aXRoLXNjb3BlZC1leGVjdXRlclwiO1xuY29uc3QgRVhQUkVTU0lPTl9DQUNIRSA9IG5ldyBDb2RlQ2FjaGUoKTtcblxuLyoqXG4gKiBDb25maWd1cmVzIHRoZSBjb2RlIGNhY2hlIG9mIHRoaXMgZXhlY3V0ZXIuIGBzaXplYCBpcyB0aGUgb25seSBvcHRpb25cbiAqIHRvZGF5OyBhbiBvcHRpb24gbGVmdCBvdXQgY2hhbmdlcyBub3RoaW5nLlxuICpcbiAqIEBwYXJhbSB7aW1wb3J0KCcuLi9Db2RlQ2FjaGUuanMnKS5Db2RlQ2FjaGVPcHRpb25zfSBbb3B0aW9uc11cbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gd2hlcmUgdGhlIHNpemUgaXMgbm90IGEgZmluaXRlIG51bWJlclxuICovXG5leHBvcnQgY29uc3Qgc2V0dXBFeGVjdXRlciA9IChvcHRpb25zKSA9PiB7XG5cdEVYUFJFU1NJT05fQ0FDSEUuc2V0dXAob3B0aW9ucyk7XG59O1xuXG5sZXQgaW5pdGlhbENhbGwgPSB0cnVlO1xuXG4vKipcbiAqIENvbXBpbGVzIGEgc3RhdGVtZW50IGludG8gYSBmdW5jdGlvbiB0aGF0IHJ1bnMgaXQgaW5zaWRlIGEgYHdpdGhgIGJsb2NrIG92ZXIgdGhlIGNvbnRleHQuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGFTdGF0ZW1lbnRcbiAqIEByZXR1cm5zIHtGdW5jdGlvbn1cbiAqL1xuY29uc3QgZ2VuZXJhdGUgPSAoYVN0YXRlbWVudCkgPT4ge1xuXHRjb25zdCBjb2RlID0gYFxuXHRyZXR1cm4gKGFzeW5jIGZ1bmN0aW9uICgpe1xuXHRcdHdpdGgoYXJndW1lbnRzWzBdIHx8IHt9KXtcblx0XHRcdHRyeXtcblx0XHRcdFx0cmV0dXJuICR7YVN0YXRlbWVudH1cblx0XHRcdH1jYXRjaChlKXtcblx0XHRcdFx0dGhyb3cgZTtcblx0XHRcdH1cblx0XHR9XG5cdH0pKGFyZ3VtZW50c1swXSB8fCB7fSk7XG5gO1xuXHQvL2NvbnNvbGUubG9nKFwiY29kZVwiLCBjb2RlKTtcblxuXHRyZXR1cm4gbmV3IEZ1bmN0aW9uKGNvZGUpO1xufTtcblxuLyoqXG4gKiBUaGUgY29tcGlsZWQgZnVuY3Rpb24gZm9yIGEgc3RhdGVtZW50LCBmcm9tIHRoZSBjYWNoZSBvciBjb21waWxlZCBub3cgYW5kIGNhY2hlZC5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gYVN0YXRlbWVudFxuICogQHJldHVybnMge0Z1bmN0aW9ufVxuICovXG5jb25zdCBnZXRPckNyZWF0ZUZ1bmN0aW9uID0gKGFTdGF0ZW1lbnQpID0+IHtcblx0aWYgKEVYUFJFU1NJT05fQ0FDSEUuaGFzKGFTdGF0ZW1lbnQpKSB7XG5cdFx0cmV0dXJuIEVYUFJFU1NJT05fQ0FDSEUuZ2V0KGFTdGF0ZW1lbnQpO1xuXHR9XG5cdGNvbnN0IGV4cHJlc3Npb24gPSBnZW5lcmF0ZShhU3RhdGVtZW50KTtcblx0RVhQUkVTU0lPTl9DQUNIRS5zZXQoYVN0YXRlbWVudCwgZXhwcmVzc2lvbik7XG5cdHJldHVybiBleHByZXNzaW9uO1xufTtcblxuLyoqXG4gKiBUaGUgZXhlY3V0ZXI6IHJ1bnMgYSBzdGF0ZW1lbnQgaW5zaWRlIGEgYHdpdGhgIGJsb2NrIG92ZXIgdGhlIGNvbnRleHQsIHNvIGEgc3RhdGVtZW50IGFkZHJlc3NlcyBhXG4gKiBjb250ZXh0IHZhbHVlIGJ5IGl0cyBiYXJlIG5hbWUgLSBzZWUgYFJFQURNRS5tZGAuIFJlZ2lzdGVyZWQgdW5kZXJcbiAqIGBFWEVDVVRFUk5BTUVgIG9uIGltcG9ydC5cbiAqXG4gKiBAZGVwcmVjYXRlZCBiZWNhdXNlIGB3aXRoYCBpczsgYW5ub3VuY2VzIGl0IG9uIHRoZSBmaXJzdCBzdGF0ZW1lbnQgaXQgcnVuc1xuICogQHR5cGUge0V4ZWN1dGVyfVxuICovXG5jb25zdCBFWEVDVVRFUiA9IG5ldyBFeGVjdXRlcih7XG5cdGV4ZWN1dGlvbjogKGFTdGF0ZW1lbnQsIGFDb250ZXh0KSA9PiB7XG5cdFx0aWYgKGluaXRpYWxDYWxsKSB7XG5cdFx0XHRpbml0aWFsQ2FsbCA9IGZhbHNlO1xuXHRcdFx0Y29uc29sZS53YXJuKFxuXHRcdFx0XHRuZXcgRXJyb3IoYFdpdGggU2NvcGVkIGV4cHJlc3Npb24gZXhlY3V0aW9uIGlzIG1hcmtlZCBhcyBkZXByZWNhdGVkLmApLFxuXHRcdFx0KTtcblx0XHR9XG5cblx0XHRjb25zdCBleHByZXNzaW9uID0gZ2V0T3JDcmVhdGVGdW5jdGlvbihhU3RhdGVtZW50KTtcblx0XHRyZXR1cm4gZXhwcmVzc2lvbihhQ29udGV4dCk7XG5cdH0sXG59KTtcbnJlZ2lzdGVyKEVYRUNVVEVSTkFNRSwgRVhFQ1VURVIpO1xuXG5leHBvcnQgZGVmYXVsdCBFWEVDVVRFUjtcbiIsImltcG9ydCBcIi4vV2l0aFNjb3BlZEV4ZWN1dGVyLmpzXCI7XG5pbXBvcnQgXCIuL0NvbnRleHRPYmplY3RFeGVjdXRlci5qc1wiO1xuaW1wb3J0IFwiLi9Db250ZXh0RGVjb25zdHJ1Y3RvckV4ZWN1dGVyLmpzXCI7XG4iLCJpbXBvcnQgeyBsYXp5UHJvbWlzZSB9IGZyb20gXCJAZGVmYXVsdC1qcy9kZWZhdWx0anMtY29tbW9uLXV0aWxzL3NyYy9Qcm9taXNlVXRpbHMuanNcIjtcbmltcG9ydCBEaXJlY3RpdmUgZnJvbSBcIi4vRGlyZWN0aXZlLmpzXCI7XG5pbXBvcnQgVGVtcGxhdGUgZnJvbSBcIi4vVGVtcGxhdGUuanNcIjtcbmltcG9ydCB7IEV4cHJlc3Npb25SZXNvbHZlciB9IGZyb20gXCJAZGVmYXVsdC1qcy9kZWZhdWx0anMtZXhwcmVzc2lvbi1sYW5ndWFnZS9pbmRleC5qc1wiO1xuXG5jb25zdCB0b1RlbXBsYXRlID0gKHRlbXBsYXRlKSA9PiB7XG5cdGlmICh0ZW1wbGF0ZSBpbnN0YW5jZW9mIFRlbXBsYXRlKSByZXR1cm4gdGVtcGxhdGUuaW1wb3J0Q29udGVudCgpO1xuXHRlbHNlIGlmICh0eXBlb2YgdGVtcGxhdGUgPT09IFwic3RyaW5nXCIpIHJldHVybiBjcmVhdGUodGVtcGxhdGUpO1xuXHRyZXR1cm4gdGVtcGxhdGU7XG59O1xuXG5sZXQgaWQgPSAwO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29udGV4dCB7XG5cdCNpZDtcblx0I2RlcHRoO1xuXHQjcGFyZW50O1xuXHQjcmVuZGVyZXI7XG5cdCNyb290O1xuXHQjdGVtcGxhdGU7XG5cdCNtb2RlO1xuXHQjc3ViY29udGV4dHM7XG5cdCN3YWl0O1xuXHQjaWdub3JlRGlyZWN0aXZlcztcblx0I2NhbGxiYWNrcztcblxuXHRcblx0LyoqXG5cdCAqIENyZWF0ZXMgYW4gaW5zdGFuY2Ugb2YgQ29udGV4dC5cblx0ICpcblx0ICogQGNvbnN0cnVjdG9yXG5cdCAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zXG5cdCAqIEBwYXJhbSB7Tm9kZUxpc3R9IFtvcHRpb25zLmNvbnRlbnQ9bnVsbF0gXG5cdCAqIEBwYXJhbSB7RXhwcmVzc2lvblJlc29sdmVyfSBvcHRpb25zLnJlc29sdmVyIFxuXHQgKiBAcGFyYW0ge2ltcG9ydChcIi4vUmVuZGVyZXIuanNcIikuZGVmYXVsdH0gb3B0aW9ucy5yZW5kZXJlciBcblx0ICogQHBhcmFtIHtUZW1wbGF0ZXxzdHJpbmd9IG9wdGlvbnMudGVtcGxhdGUgXG5cdCAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IG9wdGlvbnMuY29udGFpbmVyIFxuXHQgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBvcHRpb25zLnJvb3QgXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0aW9ucy5tb2RlPVwicmVwbGFjZVwiXSBcblx0ICogQHBhcmFtIHtIVE1MRWxlbWVudH0gW29wdGlvbnMudGFyZ2V0PW51bGxdIFxuXHQgKiBAcGFyYW0ge0NvbnRleHR9IFtvcHRpb25zLnBhcmVudD1udWxsXSBcblx0ICogQHBhcmFtIHtQcm9taXNlPD59IFtvcHRpb25zLndhaXQ9bnVsbF0gXG5cdCAqIEBwYXJhbSB7QXJyYXk8RnVuY3Rpb24+fSBbb3B0aW9ucy5jYWxsYmFja3M9bnVsbF0gXG5cdCAqIEBwYXJhbSB7U2V0PERpcmVjdGl2ZXxzdHJpbmc+fSBvcHRpb25zLmlnbm9yZURpcmVjdGl2ZSBcblx0ICovXG5cdGNvbnN0cnVjdG9yKHsgY29udGVudCA9IG51bGwsIHJlc29sdmVyLCByZW5kZXJlciwgdGVtcGxhdGUsIGNvbnRhaW5lciwgcm9vdCwgbW9kZSA9IFwicmVwbGFjZVwiLCB0YXJnZXQgPSBudWxsLCBwYXJlbnQgPSBudWxsLCB3YWl0ID0gbnVsbCwgY2FsbGJhY2tzID0gbnVsbCwgaWdub3JlRGlyZWN0aXZlIH0pIHtcblx0XHRpZiAoIXJlc29sdmVyKSB0aHJvdyBuZXcgRXJyb3IoJ1BhcmFtZXRlciBcInJlc29sdmVyXCIgaXMgcmVxdWlyZWQhJyk7XG5cdFx0aWYgKCFyZW5kZXJlcikgdGhyb3cgbmV3IEVycm9yKCdQYXJhbWV0ZXIgXCJyZW5kZXJlclwiIGlzIHJlcXVpcmVkIScpO1xuXHRcdGlmICghdGVtcGxhdGUpIHRocm93IG5ldyBFcnJvcignUGFyYW1ldGVyIFwidGVtcGxhdGVcIiBpcyByZXF1aXJlZCEnKTtcblx0XHRpZiAoIWNvbnRhaW5lcikgdGhyb3cgbmV3IEVycm9yKCdQYXJhbWV0ZXIgXCJjb250YWluZXJcIiBpcyByZXF1aXJlZCEnKTtcblx0XHRpZiAoIXJvb3QpIHRocm93IG5ldyBFcnJvcignUGFyYW1ldGVyIFwicm9vdFwiIGlzIHJlcXVpcmVkIScpO1xuXG5cdFx0dGhpcy4jaWQgPSBwYXJlbnQgPyBgJHtwYXJlbnQuaWR9LT4ke2lkKyt9YCA6IGByb290Ojoke2lkKyt9YDtcblx0XHR0aGlzLiNkZXB0aCA9IHBhcmVudCA/IHBhcmVudC5kZXB0aCArIDEgOiAwO1xuXHRcdHRoaXMuI3BhcmVudCA9IHBhcmVudDtcblx0XHR0aGlzLiNyZW5kZXJlciA9IHJlbmRlcmVyO1xuXHRcdHRoaXMuI3Jvb3QgPSByb290O1xuXHRcdHRoaXMuI3RlbXBsYXRlID0gdG9UZW1wbGF0ZSh0ZW1wbGF0ZSk7XG5cdFx0dGhpcy4jbW9kZSA9IG1vZGU7XG5cdFx0dGhpcy4jc3ViY29udGV4dHMgPSBuZXcgU2V0KCk7XG5cdFx0dGhpcy4jd2FpdCA9IHdhaXQgPyB3YWl0IDogbGF6eVByb21pc2UoKTtcblx0XHR0aGlzLiNpZ25vcmVEaXJlY3RpdmVzID0gaWdub3JlRGlyZWN0aXZlIGluc3RhbmNlb2YgU2V0ID8gaWdub3JlRGlyZWN0aXZlIDogbmV3IFNldCgpO1xuXHRcdHRoaXMuI2NhbGxiYWNrcyA9IGNhbGxiYWNrcyBpbnN0YW5jZW9mIEFycmF5ID8gY2FsbGJhY2tzIDogW107XG5cblx0XHR0aGlzLmNvbnRlbnQgPSBjb250ZW50O1xuXHRcdHRoaXMuY29udGFpbmVyID0gY29udGFpbmVyO1xuXHRcdHRoaXMudGFyZ2V0ID0gdGFyZ2V0O1xuXHRcdHRoaXMucmVzb2x2ZXIgPSByZXNvbHZlcjtcblxuXHRcdC8qIGV4ZWN1dGlvbiBmbGFncyAqL1xuXHRcdHRoaXMuc3RvcCA9IGZhbHNlO1xuXHRcdHRoaXMuaWdub3JlID0gZmFsc2U7XG5cdFx0Ly9jb25zb2xlLmxvZyhgY29udGV4dD17XCJkZXB0aFwiOiR7dGhpcy5kZXB0aH0gfSwgXCJpZFwiOiAke3RoaXMuaWR9YCk7XG5cdFx0Ly90aGlzLmNyZWF0ZXRBdCA9IG5ldyBFcnJvcigpO1xuXG5cdFx0aWYgKHBhcmVudCkge1xuXHRcdFx0cGFyZW50LnN1YmNvbnRleHRzLmFkZCh0aGlzKTtcblx0XHR9XG5cdH1cblxuXHRnZXQgaWQoKSB7XG5cdFx0cmV0dXJuIHRoaXMuI2lkO1xuXHR9XG5cdGdldCBkZXB0aCgpIHtcblx0XHRyZXR1cm4gdGhpcy4jZGVwdGg7XG5cdH1cblx0Z2V0IHBhcmVudCgpIHtcblx0XHRyZXR1cm4gdGhpcy4jcGFyZW50O1xuXHR9XG5cdGdldCByZW5kZXJlcigpIHtcblx0XHRyZXR1cm4gdGhpcy4jcmVuZGVyZXI7XG5cdH1cblx0Z2V0IHJvb3QoKSB7XG5cdFx0cmV0dXJuIHRoaXMuI3Jvb3Q7XG5cdH1cblx0Z2V0IHRlbXBsYXRlKCkge1xuXHRcdHJldHVybiB0aGlzLiN0ZW1wbGF0ZTtcblx0fVxuXHRzZXQgdGVtcGxhdGUodGVtcGxhdGUpe1xuXHRcdHRoaXMuI3RlbXBsYXRlID0gdG9UZW1wbGF0ZSh0ZW1wbGF0ZSk7XG5cdH1cblxuXHRnZXQgbW9kZSgpIHtcblx0XHRyZXR1cm4gdGhpcy4jbW9kZTtcblx0fVxuXHRnZXQgc3ViY29udGV4dHMoKSB7XG5cdFx0cmV0dXJuIHRoaXMuI3N1YmNvbnRleHRzO1xuXHR9XG5cblx0Z2V0IGNsb3NlZCgpIHtcblx0XHRyZXR1cm4gdGhpcy4jd2FpdC5yZXNvbHZlZDtcblx0fVxuXG5cdGlnbm9yZURpcmVjdGl2ZShkaXJlY3RpdmUpIHtcblx0XHRjb25zdCBpZ25vcmVEaXJlY3RpdmVzID0gdGhpcy4jaWdub3JlRGlyZWN0aXZlcztcblx0XHRkaXJlY3RpdmUgaW5zdGFuY2VvZiBEaXJlY3RpdmUgPyBpZ25vcmVEaXJlY3RpdmVzLmFkZChkaXJlY3RpdmUubmFtZSkgOiBpZ25vcmVEaXJlY3RpdmVzLmFkZChkaXJlY3RpdmUpO1xuXHR9XG5cblx0YWNjZXB0RGlyZWN0aXZlKGRpcmVjdGl2ZSkge1xuXHRcdGNvbnN0IGlnbm9yZURpcmVjdGl2ZXMgPSB0aGlzLiNpZ25vcmVEaXJlY3RpdmVzO1xuXHRcdGlmIChkaXJlY3RpdmUgaW5zdGFuY2VvZiBEaXJlY3RpdmUpIHJldHVybiAhKGlnbm9yZURpcmVjdGl2ZXMuaGFzKGRpcmVjdGl2ZS5uYW1lKSB8fCBpZ25vcmVEaXJlY3RpdmVzLmhhcyhkaXJlY3RpdmUpKTtcblxuXHRcdHJldHVybiAhaWdub3JlRGlyZWN0aXZlcy5oYXMoZGlyZWN0aXZlKTtcblx0fVxuXG5cdGZpbmlzaGVkKGNhbGxiYWNrKSB7XG5cdFx0aWYgKHRoaXMucGFyZW50KSB0aGlzLnBhcmVudC5maW5pc2hlZChjYWxsYmFjayk7XG5cdFx0ZWxzZSB0aGlzLnJlYWR5KGNhbGxiYWNrKTtcblx0fVxuXG5cdGFzeW5jIHJlYWR5KGNhbGxiYWNrKSB7XG5cdFx0Y29uc3QgY2FsbGJhY2tzID0gdGhpcy4jY2FsbGJhY2tzO1xuXHRcdGlmIChjYWxsYmFjaykge1xuXHRcdFx0aWYgKGNhbGxiYWNrIGluc3RhbmNlb2YgQXJyYXkpIGNhbGxiYWNrLmZvckVhY2goKGNhbGxiYWNrKSA9PiB0aGlzLnJlYWR5KGNhbGxiYWNrKSk7XG5cdFx0XHRlbHNlIGlmIChjYWxsYmFjayBpbnN0YW5jZW9mIFByb21pc2UpIGNhbGxiYWNrcy5wdXNoKGFzeW5jICgpID0+IGF3YWl0IGNhbGxiYWNrKTtcblx0XHRcdGVsc2UgaWYgKHR5cGVvZiBjYWxsYmFjayA9PT0gXCJmdW5jdGlvblwiKSBjYWxsYmFja3MucHVzaChjYWxsYmFjayk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGNvbnN0IHdhaXQgPSB0aGlzLiN3YWl0O1xuXHRcdFx0aWYgKCF3YWl0LnJlc29sdmVkKSB7XG5cdFx0XHRcdGlmICghdGhpcy5pZ25vcmUpIGZvciAobGV0IGNhbGxiYWNrIG9mIGNhbGxiYWNrcykgYXdhaXQgY2FsbGJhY2sodGhpcyk7XG5cblx0XHRcdFx0Zm9yIChsZXQgY2hpbGQgb2YgdGhpcy5zdWJjb250ZXh0cykgYXdhaXQgY2hpbGQucmVhZHkoKTtcblxuXHRcdFx0XHRpZiAodGhpcy5wYXJlbnQpIHRoaXMucGFyZW50LnN1YmNvbnRleHRzLmRlbGV0ZSh0aGlzKTtcblxuXHRcdFx0XHR3YWl0LnJlc29sdmUodGhpcyk7XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiB3YWl0O1xuXHRcdH1cblx0fVxuXG5cdHN1YkNvbnRleHQoeyByZXNvbHZlciA9IHRoaXMucmVzb2x2ZXIsIHJlbmRlcmVyID0gdGhpcy5yZW5kZXJlciwgdGVtcGxhdGUgPSB0aGlzLnRlbXBsYXRlLCBjb250YWluZXIgPSB0aGlzLmNvbnRhaW5lciwgcm9vdCA9IHRoaXMucm9vdCwgbW9kZSA9IHRoaXMubW9kZSwgdGFyZ2V0ID0gdGhpcy50YXJnZXQsIGlnbm9yZURpcmVjdGl2ZSA9IG51bGwgfSA9IHt9KSB7XG5cdFx0cmV0dXJuIG5ldyBDb250ZXh0KHsgcmVzb2x2ZXIsIHJlbmRlcmVyLCB0ZW1wbGF0ZSwgY29udGFpbmVyLCBtb2RlLCByb290LCB0YXJnZXQsIHBhcmVudDogdGhpcywgaWdub3JlRGlyZWN0aXZlIH0pO1xuXHR9XG5cblx0Y2xvbmUoeyBjb250ZW50ID0gdGhpcy5jb250ZW50LCB0ZW1wbGF0ZSA9IHRoaXMudGVtcGxhdGUsIGNvbnRhaW5lciA9IHRoaXMuY29udGFpbmVyLCByb290ID0gdGhpcy5yb290LCBtb2RlID0gdGhpcy5tb2RlLCB0YXJnZXQgPSB0aGlzLnRhcmdldCwgaWdub3JlRGlyZWN0aXZlID0gdGhpcy4jaWdub3JlRGlyZWN0aXZlcyB9ID0ge30pIHtcblx0XHRyZXR1cm4gbmV3IENvbnRleHQoeyBjb250ZW50LCBcblx0XHRcdHJlc29sdmVyOiB0aGlzLnJlc29sdmVyLCBcblx0XHRcdHJlbmRlcmVyOiB0aGlzLnJlbmRlcmVyLCBcblx0XHRcdHRlbXBsYXRlLCBcblx0XHRcdGNvbnRhaW5lciwgXG5cdFx0XHRyb290LCBcblx0XHRcdG1vZGUsIFxuXHRcdFx0dGFyZ2V0LCBcblx0XHRcdGlnbm9yZURpcmVjdGl2ZSxcblx0XHRcdHdhaXQ6IHRoaXMuI3dhaXQsXG5cdFx0XHRjYWxsYmFja3M6IHRoaXMuI2NhbGxiYWNrc1xuXHRcdCB9KTtcblx0fVxuXG5cdHRvUmVuZGVyT3B0aW9uKHsgcmVzb2x2ZXIgPSB0aGlzLnJlc29sdmVyLCByZW5kZXJlciA9IHRoaXMucmVuZGVyZXIsIHRlbXBsYXRlID0gdGhpcy50ZW1wbGF0ZSwgY29udGFpbmVyID0gdGhpcy5jb250YWluZXIsIHJvb3QgPSB0aGlzLnJvb3QsIG1vZGUgPSB0aGlzLm1vZGUsIHRhcmdldCA9IHRoaXMudGFyZ2V0LCBpZ25vcmVEaXJlY3RpdmUgPSBudWxsIH0gPSB7fSkge1xuXHRcdHJldHVybiB7IHJlc29sdmVyLCByZW5kZXJlciwgdGVtcGxhdGUsIGNvbnRhaW5lciwgbW9kZSwgcm9vdCwgdGFyZ2V0LCBwYXJlbnQ6IG51bGwsIGlnbm9yZURpcmVjdGl2ZSB9O1xuXHR9XG59XG4iLCJpbXBvcnQgQ29udGV4dCBmcm9tIFwiLi9Db250ZXh0LmpzXCI7XG5cblxuY29uc3QgREVGSU5FRF9ESVJFQ1RJVkVTID0gW107XG5cblxuLyoqXG4gKiBAcGFyYW0ge29iamVjdH0gb3B0aW9uc1xuICogQHBhcmFtIHtEaXJlY3RpdmV9IG9wdGlvbnMuZGlyZWN0aXZlIFxuICovXG5jb25zdCBkZWZpbmVEaXJlY3RpdmUgPSAoeyBkaXJlY3RpdmUgfSkgPT4ge1xuXHRpZiAoIShkaXJlY3RpdmUgaW5zdGFuY2VvZiBEaXJlY3RpdmUpKVxuXHRcdHRocm93IG5ldyBFcnJvcihcIkltcGxlbWVudGF0aW9uIGRvc24ndCBleHRlbmQgRGlyZWN0aXZlIGNsYXNzIVwiKTtcblxuXHRpZiAoZGlyZWN0aXZlLnJhbmsgPCBEaXJlY3RpdmUuTUlOX1JBTkspXG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiVGhlIHJhbmsgb2YgYSBkaXJlY3RpdmUgY2FuJ3QgYmUgbG93ZXIgYXMgXCIgKyBEaXJlY3RpdmUuTUlOX1JBTksgKyBcIiFcIik7XG5cblx0aWYgKGRpcmVjdGl2ZS5yYW5rID4gRGlyZWN0aXZlLk1BWF9SQU5LKVxuXHRcdHRocm93IG5ldyBFcnJvcihcIlRoZSByYW5rIG9mIGEgZGlyZWN0aXZlIGNhbid0IGJlIGdyYXRlciBhcyBcIiArIERpcmVjdGl2ZS5NQVhfUkFOSyArIFwiIVwiKTtcblxuXHRERUZJTkVEX0RJUkVDVElWRVMucHVzaChkaXJlY3RpdmUpO1xuXHRERUZJTkVEX0RJUkVDVElWRVMuc29ydCgoYSwgYikgPT4ge1xuXHRcdGNvbnN0IHBoYXNlID0gYS5waGFzZSAtIGIucGhhc2U7XG5cdFx0aWYocGhhc2UgPT0gMClcblx0XHRcdHJldHVybiBhLnJhbmsgLSBiLnJhbms7XG5cdFx0XHRcblx0XHRyZXR1cm4gcGhhc2U7XG5cdH0pO1xufTtcblxuLyoqXG4gKiBAcmVhZG9ubHlcbiAqIEBlbnVtIHtudW1iZXJ9XHRcbiAqL1xuZXhwb3J0IGNvbnN0IFBIQVNFID0ge1xuXHRpbml0OiAwLFxuXHRkYXRhOiAxLFxuXHR0ZW1wbGF0ZTogMixcblx0Y29udGVudDogMyxcblx0ZmluaXNoOiA0XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEaXJlY3RpdmUge1xuXG5cdC8qKiBAZW51bSB7UEhBU0V9ICovXG5cdHN0YXRpYyBnZXQgUEhBU0UoKSB7IHJldHVybiBQSEFTRSB9O1xuXHQvKiogQGVudW0ge251bWJlcn0gKi9cblx0c3RhdGljIGdldCBNSU5fUkFOSygpIHsgcmV0dXJuIDAgfTtcblx0LyoqIEBlbnVtIHtudW1iZXJ9ICovXG5cdHN0YXRpYyBnZXQgTUFYX1JBTksoKSB7IHJldHVybiAxMDAwMDAgfTtcblxuXHRjb25zdHJ1Y3RvcigpIHsgfTtcblxuXHQvKipcblx0ICogQGFic3RyYWN0IFxuXHQgKiBAZW51bSB7c3RyaW5nfSBcblx0ICovXG5cdGdldCBuYW1lKCkgeyB9XG5cdC8qKiBcblx0ICogQGFic3RyYWN0XG5cdCAqIEBlbnVtIHtudW1iZXJ9IFxuXHQgKi9cblx0Z2V0IHJhbmsoKSB7IH1cblx0LyoqXG5cdCAqIEBhYnN0cmFjdCBcblx0ICogQGVudW0ge1BIQVNFfSBcblx0ICovXG5cdGdldCBwaGFzZSgpIHtyZXR1cm4gUEhBU0UuZmluaXNofVxuXG5cdC8qKlxuXHQgKiBAYWJzdHJhY3Rcblx0ICogQHBhcmFtIHtDb250ZXh0fSBjb250ZXh0IFxuXHQgKiBAcmV0dXJucyBcblx0ICovXG5cdGFzeW5jIGV4ZWN1dGUoY29udGV4dCkge1xuXHRcdHJldHVybiBjb250ZXh0O1xuXHR9XG5cblx0LyoqXG5cdCAqIEBzdGF0aWNcblx0ICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnNcblx0ICogQHBhcmFtIHtEaXJlY3RpdmV9IG9wdGlvbnMuZGlyZWN0aXZlIFxuXHQgKi9cblx0c3RhdGljIGRlZmluZShvcHRpb24pIHtcblx0XHRkZWZpbmVEaXJlY3RpdmUob3B0aW9uKTtcblx0fVxuXG5cdFxuXHQvKipcblx0ICogQHN0YXRpY1xuXHQgKiBAcmVhZG9ubHlcblx0ICogQHR5cGUge0FycmF5PERpcmVjdGl2ZT59XG5cdCAqL1xuXHRzdGF0aWMgZ2V0IGRpcmVjdGl2ZXMoKSB7XG5cdFx0cmV0dXJuIERFRklORURfRElSRUNUSVZFUztcblx0fVxufTsiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBEaXJlY3RpdmVFbGVtZW50IGV4dGVuZHMgSFRNTEVsZW1lbnR7XG5cdGNvbnN0cnVjdG9yKCl7XG5cdFx0c3VwZXIoKTtcblx0XHR0aGlzLmhpZGRlbiA9IHRydWU7XG5cdH1cblx0XG5cdC8qKlxuXHQgKiBuZWVkIHRvIGJlIGltcGxlbWVudGVkXG5cdCAqIFxuXHQgKi9cblx0YXN5bmMgZXhlY3V0ZSh7dGVtcGxhdGUsIGNvbnRleHR9KXtcblx0XHRjb250ZXh0LmNvbnRlbnQgPSB0ZW1wbGF0ZS5jbG9uZU5vZGUodHJ1ZSk7XG5cdFx0cmV0dXJuIGNvbnRleHQ7XG5cdH07XHRcbn0iLCJpbXBvcnQgXCJAZGVmYXVsdC1qcy9kZWZhdWx0anMtZXh0ZG9tXCI7XG5pbXBvcnQgRXhwcmVzc2lvblJlc29sdmVyIGZyb20gXCJAZGVmYXVsdC1qcy9kZWZhdWx0anMtZXhwcmVzc2lvbi1sYW5ndWFnZS9zcmMvRXhwcmVzc2lvblJlc29sdmVyLmpzXCI7XG5pbXBvcnQgVGVtcGxhdGUgZnJvbSBcIi4vVGVtcGxhdGUuanNcIjtcbmltcG9ydCBDb250ZXh0IGZyb20gXCIuL0NvbnRleHQuanNcIjtcbmltcG9ydCBEaXJlY3RpdmUgZnJvbSBcIi4vRGlyZWN0aXZlLmpzXCI7XG5pbXBvcnQgRWxlbWVudCBmcm9tIFwiLi9EaXJlY3RpdmVFbGVtZW50LmpzXCI7XG5pbXBvcnQgXCIuL2RpcmVjdGl2ZXMvaW5kZXguanNcIjtcbmltcG9ydCBcIi4vZWxlbWVudHMvaW5kZXguanNcIjtcblxuZXhwb3J0IGNvbnN0IFNDT1BFUyA9IHtcblx0YXBwbGljYXRpb246IFwiYXBwbGljYXRpb25cIixcblx0ZGF0YTogXCJkYXRhXCIsXG5cdHJlbmRlcjogXCJyZW5kZXJcIixcblx0Y29udGFpbmVyOiBcImNvbnRhaW5lclwiLFxuXHRub2RlOiBcIm5vZGVcIixcbn07XG5cbmNvbnN0IEFQUExJQ0FUSU9OX1NDT1BFX1JFU09MVkVSID0gbmV3IEV4cHJlc3Npb25SZXNvbHZlcih7IG5hbWU6IFNDT1BFUy5hcHBsaWNhdGlvbiB9KTtcblxuXG4vKipcbiAqIEByZWFkb25seVxuICogQGVudW0ge3N0cmluZ31cbiAqL1xuY29uc3QgTU9ERVRZUEVTID0gW1wicmVwbGFjZVwiLCBcImFwcGVuZFwiLCBcInByZXBlbmRcIl07XG5cbmNvbnN0IE1PREVXT1JLRVIgPSB7XG5cdHJlcGxhY2U6IGFzeW5jICh7IGNvbnRhaW5lciwgdGFyZ2V0ID0gbnVsbCwgY29udGVudCB9KSA9PiB7XG5cdFx0aWYgKHRhcmdldCkge1xuXHRcdFx0dGFyZ2V0LnJlcGxhY2UoY29udGVudCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGNvbnRhaW5lci5lbXB0eSgpO1xuXHRcdFx0Y29udGFpbmVyLmFwcGVuZChjb250ZW50KTtcblx0XHR9XG5cdH0sXG5cdGFwcGVuZDogYXN5bmMgKHsgY29udGFpbmVyLCB0YXJnZXQgPSBudWxsLCBjb250ZW50IH0pID0+IHtcblx0XHRpZiAodGFyZ2V0KSB0YXJnZXQuYWZ0ZXIoY29udGVudCk7XG5cdFx0ZWxzZSBjb250YWluZXIuYXBwZW5kKGNvbnRlbnQpO1xuXHR9LFxuXHRwcmVwZW5kOiBhc3luYyAoeyBjb250YWluZXIsIHRhcmdldCA9IG51bGwsIGNvbnRlbnQgfSkgPT4ge1xuXHRcdGlmICh0YXJnZXQpIHRhcmdldC5iZWZvcmUoY29udGVudCk7XG5cdFx0ZWxzZSBjb250YWluZXIucHJlcGVuZChjb250ZW50KTtcblx0fSxcbn07XG5cbmNvbnN0IGxvYWRUZW1wbGF0ZUNvbnRlbnQgPSBhc3luYyAodGVtcGxhdGUsIHJlbmRlcmVyKSA9PiB7XG5cdGlmICh0ZW1wbGF0ZSkge1xuXHRcdHRlbXBsYXRlID0gYXdhaXQgVGVtcGxhdGUubG9hZCh0ZW1wbGF0ZSk7XG5cdFx0cmV0dXJuIHRlbXBsYXRlLmltcG9ydENvbnRlbnQoKTtcblx0fSBlbHNlIGlmIChyZW5kZXJlci50ZW1wbGF0ZSkge1xuXHRcdHJldHVybiBhd2FpdCByZW5kZXJlci50ZW1wbGF0ZS5pbXBvcnRDb250ZW50KCk7XG5cdH1cblxuXHR0aHJvdyBuZXcgRXJyb3IoXCJObyBjb250ZW50IHRlbXBsYXRlIHNwZWNpZmllZCFcIik7XG59O1xuXG5jb25zdCBhZGRDb250ZW50ID0gYXN5bmMgKGNvbnRleHQpID0+IHtcblx0aWYgKGNvbnRleHQuY29udGVudCkge1xuXHRcdGNvbnN0IG1vZGV3b3JrZXIgPSBNT0RFV09SS0VSW2NvbnRleHQubW9kZV07XG5cdFx0aWYgKCFtb2Rld29ya2VyKSB0aHJvdyBuZXcgRXJyb3IoJ1RoZSBcIicgKyBjb250ZXh0Lm1vZGUgKyAnXCIgaXMgbm90IHN1cHBvcnRlZCEnKTtcblx0XHRhd2FpdCBtb2Rld29ya2VyKGNvbnRleHQpO1xuXHR9XG59O1xuXG5jb25zdCByZW5kZXJDb250YWluZXIgPSBhc3luYyAoY29udGV4dCkgPT4ge1xuXHRsZXQgeyB0ZW1wbGF0ZSwgcmVzb2x2ZXIgfSA9IGNvbnRleHQ7XG5cdGlmICghdGVtcGxhdGUgfHwgdGVtcGxhdGUubGVuZ3RoID09IDApIHJldHVybiBjb250ZXh0O1xuXG5cdGxldCBjb250ZW50ID0gW107XG5cdGZvciAobGV0IG5vZGVUZW1wbGF0ZSBvZiB0ZW1wbGF0ZSkge1xuXHRcdG5vZGVUZW1wbGF0ZS5ub3JtYWxpemUoKTtcblx0XHRjb25zdCBub2RlUmVzb2x2ZXIgPSBuZXcgRXhwcmVzc2lvblJlc29sdmVyKHsgbmFtZTogU0NPUEVTLm5vZGUsIGNvbnRleHQ6IG51bGwsIHBhcmVudDogcmVzb2x2ZXIgfSk7XG5cdFx0Y29uc3Qgbm9kZUNvbnRleHQgPSBhd2FpdCByZW5kZXJOb2RlKGNvbnRleHQuc3ViQ29udGV4dCh7IHRlbXBsYXRlOiBub2RlVGVtcGxhdGUsIHJlc29sdmVyOiBub2RlUmVzb2x2ZXIgfSkpO1xuXHRcdGF3YWl0IG5vZGVDb250ZXh0LnJlYWR5KCk7XG5cdFx0Y29uc3Qgbm9kZSA9IG5vZGVDb250ZXh0LmNvbnRlbnQ7XG5cdFx0aWYgKG5vZGUpIHtcblx0XHRcdGlmIChub2RlIGluc3RhbmNlb2YgQXJyYXkpIGNvbnRlbnQgPSBjb250ZW50LmNvbmNhdChub2RlKTtcblx0XHRcdGlmIChub2RlIGluc3RhbmNlb2YgTm9kZUxpc3QgfHwgbm9kZSBpbnN0YW5jZW9mIEhUTUxDb2xsZWN0aW9uKSBjb250ZW50ID0gY29udGVudC5jb25jYXQoQXJyYXkuZnJvbShub2RlKSk7XG5cdFx0XHRlbHNlIGlmIChub2RlIGluc3RhbmNlb2YgTm9kZSkgY29udGVudC5wdXNoKG5vZGUpO1xuXHRcdH1cblx0fVxuXG5cdGNvbnRleHQuY29udGVudCA9IGNvbnRlbnQubGVuZ3RoICE9IDAgPyBjb250ZW50IDogbnVsbDtcblx0cmV0dXJuIGNvbnRleHQ7XG59O1xuXG5jb25zdCByZW5kZXJOb2RlID0gYXN5bmMgKGNvbnRleHQpID0+IHtcblx0dHJ5IHtcblx0XHRsZXQgeyB0ZW1wbGF0ZSwgcmVuZGVyZXIgfSA9IGNvbnRleHQ7XG5cdFx0aWYgKHRlbXBsYXRlIGluc3RhbmNlb2YgRWxlbWVudCkgYXdhaXQgdGVtcGxhdGUuZXhlY3V0ZShjb250ZXh0KTtcblx0XHRlbHNlIGF3YWl0IGV4ZWN1dGVEaXJlY3RpdmVzKGNvbnRleHQpO1xuXG5cdFx0Y29uc3QgeyBpZ25vcmUsIGNvbnRlbnQgfSA9IGNvbnRleHQ7XG5cblx0XHRpZiAoIWlnbm9yZSAmJiBjb250ZW50KSB7XG5cdFx0XHRsZXQgeyByZXNvbHZlciB9ID0gY29udGV4dDtcblx0XHRcdGNvbnN0IHN1YlRlbXBsYXRlID0gY29udGV4dC50ZW1wbGF0ZS5jaGlsZE5vZGVzO1xuXHRcdFx0aWYgKHN1YlRlbXBsYXRlICYmIHN1YlRlbXBsYXRlLmxlbmd0aCA+IDApIHtcblx0XHRcdFx0Y29uc3QgY29udGFpbmVyUmVzb2x2ZXIgPSBuZXcgRXhwcmVzc2lvblJlc29sdmVyKHsgbmFtZTogU0NPUEVTLmNvbnRhaW5lciwgY29udGV4dDogbnVsbCwgcGFyZW50OiByZXNvbHZlciB9KTtcblx0XHRcdFx0Y29uc3Qgc3ViQ29udGV4dCA9IGF3YWl0IHJlbmRlcmVyLnJlbmRlcihjb250ZXh0LnN1YkNvbnRleHQoeyBjb250YWluZXI6IGNvbnRlbnQsIHRlbXBsYXRlOiBzdWJUZW1wbGF0ZSwgcmVzb2x2ZXI6IGNvbnRhaW5lclJlc29sdmVyIH0pKTtcblx0XHRcdFx0YXdhaXQgc3ViQ29udGV4dC5yZWFkeSgpO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGlmIChjb250ZXh0LmNvbnRlbnQgJiYgY29udGV4dC5jb250ZW50LnRhZ05hbWUgJiYgY29udGV4dC5jb250ZW50LnRhZ05hbWUgPT0gXCJKU1RMXCIpIGNvbnRleHQuY29udGVudCA9IGNvbnRleHQuY29udGVudC5jaGlsZE5vZGVzOyAvL3NwZWNpYWwgY2FzZSB0byBzdXBwb3J0IHRoZSBvbGQgXCI8anN0bD5cIiB0YWcuXG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRjb25zb2xlLmVycm9yKFwiZXJyb3IgYXQgcmVuZGVyIG5vZGU6XCIsIGUsIGNvbnRleHQpO1xuXHR9XG5cdHJldHVybiBjb250ZXh0O1xufTtcblxuY29uc3QgZXhlY3V0ZURpcmVjdGl2ZXMgPSBhc3luYyAoY29udGV4dCkgPT4ge1xuXHRjb25zdCBkaXJlY3RpdmVzID0gRGlyZWN0aXZlLmRpcmVjdGl2ZXM7XG5cdGNvbnN0IGxlbmd0aCA9IGRpcmVjdGl2ZXMubGVuZ3RoO1xuXHRmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aCAmJiAhY29udGV4dC5zdG9wOyBpKyspIHtcblx0XHRjb25zdCBkaXJlY3RpdmUgPSBkaXJlY3RpdmVzW2ldO1xuXHRcdHRyeSB7XG5cdFx0XHRpZiAoY29udGV4dC5hY2NlcHREaXJlY3RpdmUoZGlyZWN0aXZlKSkgYXdhaXQgZGlyZWN0aXZlLmV4ZWN1dGUoY29udGV4dCk7XG5cdFx0fSBjYXRjaCAoZSkge1xuXHRcdFx0Y29uc29sZS5lcnJvcihcImVycm9yIGF0IGRpcmVjdGl2ZTpcIiwgZSwgZGlyZWN0aXZlLCBjb250ZXh0KTtcblx0XHR9XG5cdH1cblx0cmV0dXJuIGNvbnRleHQ7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZW5kZXJlciB7XG5cdC8qKlxuXHQgKiBDcmVhdGVzIGEgcmVuZGVyZXIuXG5cdCAqXG5cdCAqIEBwYXJhbSB7b2JqZWN0fSBbYW5PcHRpb25dXG5cdCAqIEBwYXJhbSB7VGVtcGxhdGV9IFthbk9wdGlvbi50ZW1wbGF0ZV0gLSB0aGUgdGVtcGxhdGUgcmVuZGVyZWQsIGlmIGByZW5kZXJgIGdldHMgbm9uZVxuXHQgKiBAcGFyYW0ge29iamVjdH0gW2FuT3B0aW9uLmRhdGFdIC0gYmFzZSBkYXRhLCBhdmFpbGFibGUgaW4gZXZlcnkgcmVuZGVyaW5nXG5cdCAqIEB0aHJvd3Mge0Vycm9yfSBpZiBgdGVtcGxhdGVgIGlzIG5vdCBhIGBUZW1wbGF0ZWBcblx0ICovXG5cdGNvbnN0cnVjdG9yKHsgdGVtcGxhdGUsIGRhdGEgfSA9IHt9KSB7XG5cdFx0aWYgKHRlbXBsYXRlICYmICEodGVtcGxhdGUgaW5zdGFuY2VvZiBUZW1wbGF0ZSkpIHRocm93IG5ldyBFcnJvcihcInRlbXBsYXRlIG11c3QgYmUgYW4gaW5zdGFuY2Ugb2YgVGVtcGxhdGUhXCIpO1xuXG5cdFx0dGhpcy50ZW1wbGF0ZSA9IHRlbXBsYXRlO1xuXHRcdHRoaXMucmVzb2x2ZXIgPSBuZXcgRXhwcmVzc2lvblJlc29sdmVyKHsgbmFtZTogU0NPUEVTLmRhdGEsIGNvbnRleHQ6IGRhdGEgPyBkYXRhIDoge30sIHBhcmVudDogQVBQTElDQVRJT05fU0NPUEVfUkVTT0xWRVIgfSk7XG5cdH1cblxuXHQvKipcblx0ICogUmVuZGVycyBhIHRlbXBsYXRlIGludG8gYSBjb250YWluZXIuXG5cdCAqIFxuXHQgKiBAcGFyYW0ge29iamVjdHxDb250ZXh0fSBjb250ZXh0IFxuXHQgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBjb250ZXh0LmNvbnRhaW5lclxuXHQgKiBAcGFyYW0ge29iamVjdH0gW2NvbnRleHQuZGF0YV1cblx0ICogQHBhcmFtIHtUZW1wbGF0ZXxzdHJpbmd8VVJMfE5vZGV8Tm9kZUxpc3R8SFRNTENvbGxlY3Rpb259IFtjb250ZXh0LnRlbXBsYXRlXVxuXHQgKiBAcGFyYW0ge01PREVUWVBFU30gW2NvbnRleHQubW9kZV1cblx0ICogQHBhcmFtIHtIVE1MRWxlbWVudH0gW2NvbnRleHQucm9vdF1cblx0ICogQHBhcmFtIHtIVE1MRWxlbWVudH0gW2NvbnRleHQudGFyZ2V0XVxuXHQgKiBAcmV0dXJucyB7UHJvbWlzZTxDb250ZXh0Pn1cblx0ICovXG5cdGFzeW5jIHJlbmRlcihjb250ZXh0KSB7XG5cdFx0Y29uc3QgY2FsbGVkV2l0aENvbnRleHQgPSBjb250ZXh0IGluc3RhbmNlb2YgQ29udGV4dDtcblx0XHRpZiAoIWNhbGxlZFdpdGhDb250ZXh0KSB7XG5cdFx0XHRsZXQgeyB0ZW1wbGF0ZSA9IG51bGwsIGRhdGEgPSBudWxsLCBjb250YWluZXIsIHJvb3QsIG1vZGUsIHRhcmdldCB9ID0gY29udGV4dDtcblx0XHRcdHRlbXBsYXRlID0gYXdhaXQgbG9hZFRlbXBsYXRlQ29udGVudCh0ZW1wbGF0ZSwgdGhpcyk7XG5cdFx0XHRjb25zdCByZXNvbHZlciA9IG5ldyBFeHByZXNzaW9uUmVzb2x2ZXIoeyBuYW1lOiBTQ09QRVMucmVuZGVyLCBjb250ZXh0OiBkYXRhLCBwYXJlbnQ6IHRoaXMucmVzb2x2ZXIgfSk7XG5cdFx0XHRjb250ZXh0ID0gbmV3IENvbnRleHQoeyByZXNvbHZlciwgcmVuZGVyZXI6IHRoaXMsIHRlbXBsYXRlOiB0ZW1wbGF0ZSwgY29udGFpbmVyLCByb290OiByb290ID8gcm9vdCA6IGNvbnRhaW5lciwgbW9kZTogbW9kZSA/IG1vZGUgOiBcInJlcGxhY2VcIiwgdGFyZ2V0IH0pO1xuXHRcdH0gZWxzZSBpZiAoY29udGV4dC5jbG9zZWQpIHRocm93IG5ldyBFcnJvcihcImNhbGxpbmcgd2l0aCBjbG9zZWQgY29udGV4dFwiLCBjb250ZXh0KTtcblxuXHRcdGNvbnN0IHRlbXBsYXRlID0gY29udGV4dC50ZW1wbGF0ZTtcblx0XHRpZiAodGVtcGxhdGUgaW5zdGFuY2VvZiBOb2RlKSBhd2FpdCByZW5kZXJOb2RlKGNvbnRleHQpO1xuXHRcdGVsc2UgYXdhaXQgcmVuZGVyQ29udGFpbmVyKGNvbnRleHQpO1xuXHRcdFxuXHRcdGF3YWl0IGFkZENvbnRlbnQoY29udGV4dCk7XG5cblx0XHRpZiAoIWNhbGxlZFdpdGhDb250ZXh0KVxuXHRcdFx0YXdhaXQgY29udGV4dC5yZWFkeSgpO1xuXG5cdFx0cmV0dXJuIGNvbnRleHQ7XG5cdH1cblxuXHQvKipcblx0ICogQ3JlYXRlcyBhIHJlbmRlcmVyIGFuZCBsb2FkcyBpdHMgdGVtcGxhdGUgd2l0aCBgVGVtcGxhdGUubG9hZGAgZmlyc3QuXG5cdCAqXG5cdCAqIEBzdGF0aWNcblx0ICogQGFzeW5jXG5cdCAqIEBwYXJhbSB7b2JqZWN0fSBbYW5PcHRpb25dXG5cdCAqIEBwYXJhbSB7VGVtcGxhdGV8c3RyaW5nfFVSTHxOb2RlfE5vZGVMaXN0fEhUTUxDb2xsZWN0aW9ufFByb21pc2U8VGVtcGxhdGV8c3RyaW5nfFVSTHxOb2RlfE5vZGVMaXN0fEhUTUxDb2xsZWN0aW9uPn0gW2FuT3B0aW9uLnRlbXBsYXRlXSAtIHNvdXJjZSBvZiB0aGUgdGVtcGxhdGVcblx0ICogQHBhcmFtIHtvYmplY3R9IFthbk9wdGlvbi5kYXRhXSAtIGJhc2UgZGF0YSwgYXZhaWxhYmxlIGluIGV2ZXJ5IHJlbmRlcmluZ1xuXHQgKiBAcmV0dXJucyB7UHJvbWlzZTxSZW5kZXJlcj59XG5cdCAqL1xuXHRzdGF0aWMgYXN5bmMgYnVpbGQoeyB0ZW1wbGF0ZSwgZGF0YSB9ID0ge30pIHtcblx0XHRpZiAodGVtcGxhdGUgJiYgdGVtcGxhdGUgaW5zdGFuY2VvZiBQcm9taXNlKSB0ZW1wbGF0ZSA9IGF3YWl0IHRlbXBsYXRlO1xuXG5cdFx0dGVtcGxhdGUgPSB0ZW1wbGF0ZSA/IGF3YWl0IFRlbXBsYXRlLmxvYWQodGVtcGxhdGUpIDogbnVsbDtcblx0XHRyZXR1cm4gbmV3IFJlbmRlcmVyKHsgdGVtcGxhdGUsIGRhdGEgfSk7XG5cdH1cblxuXHQvKipcblx0ICogUmVuZGVycyBhIHRlbXBsYXRlIGludG8gYSBjb250YWluZXIgd2l0aG91dCBrZWVwaW5nIGEgcmVuZGVyZXIuXG5cdCAqXG5cdCAqIEBzdGF0aWNcblx0ICogQGFzeW5jXG5cdCAqIEBwYXJhbSB7b2JqZWN0fSBjb250ZXh0XG5cdCAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGNvbnRleHQuY29udGFpbmVyXG5cdCAqIEBwYXJhbSB7b2JqZWN0fSBbY29udGV4dC5kYXRhXVxuXHQgKiBAcGFyYW0ge1RlbXBsYXRlfSBjb250ZXh0LnRlbXBsYXRlXG5cdCAqIEBwYXJhbSB7TU9ERVRZUEVTfSBbY29udGV4dC5tb2RlXVxuXHQgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBbY29udGV4dC50YXJnZXRdXG5cdCAqIEByZXR1cm5zIHtQcm9taXNlPENvbnRleHQ+fVxuXHQgKiBAbWVtYmVyb2YgUmVuZGVyZXJcblx0ICovXG5cdHN0YXRpYyBhc3luYyByZW5kZXIoeyBjb250YWluZXIsIGRhdGEsIHRlbXBsYXRlLCBtb2RlLCB0YXJnZXQgfSkge1xuXHRcdGNvbnN0IHJlbmRlcmVyID0gbmV3IFJlbmRlcmVyKHsgdGVtcGxhdGUsIGRhdGEgfSk7XG5cdFx0cmV0dXJuIHJlbmRlcmVyLnJlbmRlcih7IGNvbnRhaW5lciwgbW9kZSwgdGFyZ2V0IH0pO1xuXHR9XG59XG4iLCJpbXBvcnQgXCJAZGVmYXVsdC1qcy9kZWZhdWx0anMtY29tbW9uLXV0aWxzL3NyYy9qYXZhc2NyaXB0L1N0cmluZy5qc1wiO1xuXG5leHBvcnQgY29uc3QgTk9ERV9BVFRSSUJVVEVfVEVNUExBVEUgPSBcInRlbXBsYXRlXCI7XG5jb25zdCBDQUNIRSA9IHt9O1xuY29uc3QgZ2V0S2V5ID0gKHRlbXBsYXRlLCBjYWNoZSwgYWxpYXMpID0+IHtcblx0aWYgKCFjYWNoZSkgcmV0dXJuIG51bGw7XG5cblx0bGV0IGtleSA9IG51bGw7XG5cdGlmIChhbGlhcykga2V5ID0gYWxpYXM7XG5cdGVsc2UgaWYgKHR5cGVvZiB0ZW1wbGF0ZSA9PT0gXCJzdHJpbmdcIikga2V5ID0gdGVtcGxhdGU7XG5cdGVsc2UgaWYgKHRlbXBsYXRlIGluc3RhbmNlb2YgVVJMKSBrZXkgPSB0ZW1wbGF0ZS50b1N0cmluZygpO1xuXHRlbHNlIGlmICh0ZW1wbGF0ZSBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSBrZXkgPSB0ZW1wbGF0ZS5zZWxlY3RvcigpO1xuXG5cdGlmIChrZXkpIHJldHVybiBrZXkuaGFzaGNvZGUoKTtcblxuXHRyZXR1cm4gbnVsbDtcbn07XG5cbmNvbnN0IGZyb21VUkwgPSBhc3luYyAodXJsLCBjYWNoZSwga2V5KSA9PiB7XG5cdGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsLnRvU3RyaW5nKCkpO1xuXHRjb25zdCBzb3VyY2UgPSBhd2FpdCByZXNwb25zZS50ZXh0KCk7XG5cdHJldHVybiBmcm9tU291cmNlKHNvdXJjZSwgY2FjaGUsIGtleSk7XG59O1xuXG5jb25zdCBmcm9tU291cmNlID0gYXN5bmMgKHNvdXJjZSwgY2FjaGUsIGtleSkgPT4ge1xuXHRyZXR1cm4gZnJvbUVsZW1lbnQoY3JlYXRlKHNvdXJjZSwgdHJ1ZSksIGNhY2hlLCBrZXkpO1xufTtcblxuY29uc3QgZnJvbUVsZW1lbnQgPSBhc3luYyAoZWxlbWVudCwgY2FjaGUsIGtleSkgPT4ge1xuXHRsZXQgdGVtcGxhdGUgPSBudWxsO1xuXHRpZiAoZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxUZW1wbGF0ZUVsZW1lbnQpIHRlbXBsYXRlID0gbmV3IFRlbXBsYXRlKGVsZW1lbnQsIGtleSk7XG5cdGVsc2Uge1xuXHRcdHRlbXBsYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRlbXBsYXRlXCIpO1xuXHRcdGlmIChlbGVtZW50IGluc3RhbmNlb2YgTm9kZSB8fCBlbGVtZW50IGluc3RhbmNlb2YgTm9kZUxpc3QgfHwgZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxDb2xsZWN0aW9uIHx8IGVsZW1lbnQgaW5zdGFuY2VvZiBBcnJheSkgdGVtcGxhdGUuY29udGVudC5hcHBlbmQoZWxlbWVudC5jbG9uZU5vZGUodHJ1ZSkpO1xuXHRcdGVsc2UgdGhyb3cgbmV3IEVycm9yKFwiVGVtcGxhdGUgdHlwZSBpcyBub3Qgc3VwcG9ydGVkIVwiKTtcblxuXHRcdHRlbXBsYXRlID0gbmV3IFRlbXBsYXRlKHRlbXBsYXRlLCBrZXkpO1xuXHR9XG5cblx0aWYgKCF0ZW1wbGF0ZSkgdGhyb3cgbmV3IEVycm9yKFwiVGVtcGxhdGUgY2FuJ3QgbG9hZGVkIVwiKTtcblxuXHRpZiAoY2FjaGUgJiYga2V5KSBDQUNIRVtrZXldID0gdGVtcGxhdGU7XG5cblx0cmV0dXJuIHRlbXBsYXRlO1xufTtcblxuY29uc3QgZ2V0VGVtcGxhdGUgPSAobm9kZSkgPT4ge1xuXHRsZXQgdGVtcGxhdGUgPSBub2RlLmZpbmQoXCI6c2NvcGUgPiB0ZW1wbGF0ZVwiKS5maXJzdCgpO1xuXHRpZiAoISF0ZW1wbGF0ZSkgcmV0dXJuIHRlbXBsYXRlO1xuXHRjb25zdCB2YWx1ZSA9IG5vZGUuYXR0cihOT0RFX0FUVFJJQlVURV9URU1QTEFURSk7XG5cdGlmICghdmFsdWUpIHJldHVybiBudWxsO1xuXHR0cnkge1xuXHRcdHRlbXBsYXRlID0gZmluZCh2YWx1ZSkuZmlyc3QoKTtcblx0XHRpZiAoISF0ZW1wbGF0ZSkgcmV0dXJuIHRlbXBsYXRlO1xuXHR9IGNhdGNoIChlKSB7fVxuXHRyZXR1cm4gbmV3IFVSTCh2YWx1ZSwgbG9jYXRpb24pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGVtcGxhdGUge1xuXG5cdC8qKlxuXHQgKiBDcmVhdGUgYW4gaW5zdGFuY2Ugb2YgdGVtcGxhdGUuXG5cdCAqIFxuXHQgKiBAcGFyYW0gdGVtcGxhdGUgdHlwZSBvZiBIVE1MVGVtcGxhdGVFbGVtZW50LiBOb3QgbnVsbC5cblx0ICogQHBhcmFtIGtleSBpZGVudGlmaWVyIGF0IGNhY2hlLCBpZiB0ZW1wbGF0ZSB0byBiZSBjYWNoZWQuXG5cdCAqL1xuXHRjb25zdHJ1Y3RvcigvKiogQHR5cGUge0hUTUxUZW1wbGF0ZUVsZW1lbnR9ICovIHRlbXBsYXRlLC8qKiBAdHlwZSB7c3RyaW5nfSAqLyBrZXkpIHtcblx0XHR0aGlzLnRlbXBsYXRlID0gdGVtcGxhdGU7XG5cdFx0dGhpcy5rZXkgPSBrZXk7XG5cdH1cblxuXHRpbXBvcnRDb250ZW50KGRvYyA9IGRvY3VtZW50KSB7XG5cdFx0bGV0IGltcG9ydGVkID0gZG9jLmltcG9ydE5vZGUodGhpcy50ZW1wbGF0ZSwgdHJ1ZSk7XG5cdFx0cmV0dXJuIGltcG9ydGVkLmNvbnRlbnQuY2hpbGROb2Rlcztcblx0fVxuXG5cdHJlbW92ZSgpIHtcblx0XHRpZiAodGhpcy5rZXkgJiYgQ0FDSEVbdGhpcy5rZXldKSBkZWxldGUgQ0FDSEVbdGhpcy5rZXldO1xuXHR9XG5cblx0c3RhdGljIGFzeW5jIGZldGNoKHVybCwgY2FjaGUgPSB0cnVlLCBhbGlhcyA9IG51bGwpIHtcblx0XHRpZiAodHlwZW9mIHVybCA9PT0gXCJzdHJpbmdcIikge1xuXHRcdFx0cmV0dXJuIFRlbXBsYXRlLmxvYWQobmV3IFVSTCh1cmwsIGxvY2F0aW9uKSwgY2FjaGUsIGFsaWFzKTtcblx0XHR9IGVsc2UgaWYgKHVybCBpbnN0YW5jZW9mIFVSTCkgcmV0dXJuIFRlbXBsYXRlLmxvYWQodXJsLCBjYWNoZSwgYWxpYXMpO1xuXG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiVGhlIHVybCBpc24ndCBhIGFsbG93ZWQgdHlwZSEgLT4gW1N0cmluZ3xVUkxdIHJlcXVpcmVkIVwiKTtcblx0fVxuXG5cdHN0YXRpYyBhc3luYyBsb2FkKHRlbXBsYXRlLCBjYWNoZSA9IHRydWUsIGFsaWFzID0gbnVsbCkge1xuXHRcdGlmICh0ZW1wbGF0ZSBpbnN0YW5jZW9mIFRlbXBsYXRlKSByZXR1cm4gdGVtcGxhdGU7XG5cblx0XHRjb25zdCBrZXkgPSBnZXRLZXkodGVtcGxhdGUsIGNhY2hlLCBhbGlhcyk7XG5cdFx0aWYgKGtleSAmJiBDQUNIRVtrZXldKSByZXR1cm4gQ0FDSEVba2V5XTtcblx0XHRlbHNlIGlmICh0eXBlb2YgdGVtcGxhdGUgPT09IFwic3RyaW5nXCIpIHtcblx0XHRcdHJldHVybiBmcm9tU291cmNlKHRlbXBsYXRlLCBjYWNoZSwga2V5KTtcblx0XHR9IGVsc2UgaWYgKHRlbXBsYXRlIGluc3RhbmNlb2YgVVJMKSByZXR1cm4gYXdhaXQgZnJvbVVSTCh0ZW1wbGF0ZSwgY2FjaGUsIGtleSk7XG5cdFx0ZWxzZSBpZiAodGVtcGxhdGUgaW5zdGFuY2VvZiBOb2RlIHx8IHRlbXBsYXRlIGluc3RhbmNlb2YgTm9kZUxpc3QgfHwgdGVtcGxhdGUgaW5zdGFuY2VvZiBIVE1MQ29sbGVjdGlvbiB8fCB0ZW1wbGF0ZSBpbnN0YW5jZW9mIEhUTUxUZW1wbGF0ZUVsZW1lbnQpIHJldHVybiBmcm9tRWxlbWVudCh0ZW1wbGF0ZSwgY2FjaGUsIGtleSk7XG5cblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJUaGUgdGVtcGxhdGUgaXNuJ3QgYSBhbGxvd2VkIHR5cGUhIC0+IFtTdHJpbmd8VVJMfE5vZGV8Tm9kZUxpc3R8SFRNTENvbGxlY3Rpb258VGVtcGxhdGVdIHJlcXVpcmVkIVwiKTtcblx0fVxuXG5cdHN0YXRpYyBhc3luYyBsb2FkTm9kZVRlbXBsYXRlKG5vZGUsIGRlZmF1bHRUZW1wbGF0ZSwgY2FjaGUsIGFsaWFzKSB7XG5cdFx0dHJ5IHtcblx0XHRcdGNvbnN0IHRlbXBsYXRlID0gZ2V0VGVtcGxhdGUobm9kZSk7XG5cdFx0XHRpZiAodGVtcGxhdGUpIHJldHVybiBUZW1wbGF0ZS5sb2FkKHRlbXBsYXRlLCBjYWNoZSwgYWxpYXMpO1xuXHRcdH0gY2F0Y2ggKGUpIHtcblx0XHRcdGNvbnNvbGUud2FybihcIkNhbid0IGxvYWQgdGVtcGxhdGUgZnJvbSBub2RlIVwiLCBub2RlLCBlKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gZGVmYXVsdFRlbXBsYXRlO1xuXHR9XG59O1xuXG5leHBvcnQgY29uc3QgdG9Bc3luY1RlbXBsYXRlTG9hZGVyID0gKC8qVVJMKi91cmwpID0+IHtcbiAgICBsZXQgdGVtcGxhdGUgPSBudWxsO1xuXG4gICAgcmV0dXJuIGFzeW5jICgpID0+IHtcbiAgICAgICAgaWYoIXRlbXBsYXRlKXtcblx0XHRcdGlmKHR5cGVvZiB1cmwgPT09IFwiZnVuY3Rpb25cIilcblx0XHRcdFx0dXJsID0gYXdhaXQgdXJsKCk7XG5cdFx0XHRlbHNlIGlmKHVybCBpbnN0YW5jZW9mIFByb21pc2UpXG5cdFx0XHRcdHVybCA9IGF3YWl0IHVybDtcbiAgICAgICAgICAgIHRlbXBsYXRlID0gVGVtcGxhdGUubG9hZCh1cmwpO1xuXHRcdH1cblxuICAgICAgICByZXR1cm4gdGVtcGxhdGU7XG4gICAgfTtcbn07XG4iLCJleHBvcnQgY29uc3QgaXNVbmRlZmluZWRPck51bGwgPSAodmFsdWUpID0+IHtcbiAgICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAndW5kZWZpbmVkJyB8fCB2YWx1ZSA9PT0gbnVsbFxufVxuXG5leHBvcnQgY29uc3QgaXNVbmRlZmluZWRPck51bGxPckJsYW5rID0gKHZhbHVlKSA9PiB7XG4gIHJldHVybiBpc1VuZGVmaW5lZE9yTnVsbCh2YWx1ZSkgfHwgdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyAmJiB2YWx1ZS50cmltKCkubGVuZ3RoID09IDA7XG59OyIsImltcG9ydCBEaXJlY3RpdmUgZnJvbSBcIi4uL0RpcmVjdGl2ZS5qc1wiO1xuXG5jb25zdCBBVFRSSUJVVEVfX0FUVEFDSEVMRU1FTlQgPSBcImpzdGwtYXR0YWNoLWVsZW1lbnRcIjtcbmNvbnN0IEFUVFJJQlVURV9fQVRUQUNIRUxFTUVOVF9NT0RFID0gXCJqc3RsLWF0dGFjaC1lbGVtZW50LW1vZGVcIjtcblxuY29uc3QgTU9ERV9BUFBFTkQgPSBcImFwcGVuZFwiO1xuY29uc3QgTU9ERV9QUkVQRU5EID0gXCJwcmVwZW5kXCI7XG5jb25zdCBNT0RFX1JFUExBQ0UgPSBcInJlcGxhY2VcIjtcblxuY29uc3QgUFJFQ0hFQ0sgPSAvXiMuKyQvO1xuXG5jb25zdCBnZXRFbGVtZW50ID0gYXN5bmMgKHRlbXBsYXRlLCByZXNvbHZlcikgPT4ge1xuXHRsZXQgZWxlbWVudCA9ICh0ZW1wbGF0ZS5hdHRyKEFUVFJJQlVURV9fQVRUQUNIRUxFTUVOVCkgfHwgXCJcIikudHJpbSgpO1xuXHRpZiAoIVBSRUNIRUNLLnRlc3QoZWxlbWVudCkpIHtcblx0XHR0cnkge1xuXHRcdFx0ZWxlbWVudCA9IGF3YWl0IHJlc29sdmVyLnJlc29sdmUoZWxlbWVudCwgZWxlbWVudCk7XG5cdFx0fSBjYXRjaCAoZSkge31cblx0XHRpZiAoZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSByZXR1cm4gZWxlbWVudDtcblx0fVxuXG5cdHRyeSB7XG5cdFx0ZWxlbWVudCA9IGZpbmQoZWxlbWVudCk7XG5cdH0gY2F0Y2ggKGUpIHt9XG5cblx0aWYgKGVsZW1lbnQgJiYgZWxlbWVudC5sZW5ndGggPiAwKSByZXR1cm4gZWxlbWVudC5sZW5ndGggPT0gMCA/IGVsZW1lbnQuZmlyc3QoKSA6IGVsZW1lbnQ7XG5cblx0cmV0dXJuIG51bGw7XG59O1xuXG5jbGFzcyBBdHRhY2hFbGVtZW50IGV4dGVuZHMgRGlyZWN0aXZlIHtcblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0c3VwZXIoKTtcblx0fVxuXG5cdGdldCBuYW1lKCkge1xuXHRcdHJldHVybiBcImF0dGFjaC1lbGVtZW50XCI7XG5cdH1cblx0Z2V0IHJhbmsoKSB7XG5cdFx0cmV0dXJuIERpcmVjdGl2ZS5NSU5fUkFOSyArIDE7XG5cdH1cblx0Z2V0IHBoYXNlKCkge1xuXHRcdHJldHVybiBEaXJlY3RpdmUuUEhBU0UuY29udGVudDtcblx0fVxuXG5cdGFzeW5jIGV4ZWN1dGUoY29udGV4dCkge1xuXHRcdGNvbnN0IHsgcmVzb2x2ZXIsIHRlbXBsYXRlLCBjb250ZW50IH0gPSBjb250ZXh0O1xuXHRcdGlmICghKHRlbXBsYXRlIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpIHx8ICF0ZW1wbGF0ZS5hdHRyKEFUVFJJQlVURV9fQVRUQUNIRUxFTUVOVCkpIHJldHVybiBjb250ZXh0O1xuXHRcdHRyeSB7XG5cdFx0XHRsZXQgZWxlbWVudCA9IGF3YWl0IGdldEVsZW1lbnQodGVtcGxhdGUsIHJlc29sdmVyKTtcblx0XHRcdGlmIChlbGVtZW50KSB7XG5cdFx0XHRcdGNvbnN0IG1vZGUgPSB0ZW1wbGF0ZS5hdHRyKEFUVFJJQlVURV9fQVRUQUNIRUxFTUVOVF9NT0RFKSB8fCBNT0RFX1JFUExBQ0U7XG5cdFx0XHRcdGlmIChtb2RlID09IE1PREVfUkVQTEFDRSkge1xuXHRcdFx0XHRcdGNvbnRlbnQuZW1wdHkoKS5hcHBlbmQoZWxlbWVudCk7XG5cdFx0XHRcdFx0Y29udGV4dC5zdG9wID0gdHJ1ZTtcblx0XHRcdFx0XHRjb250ZXh0Lmlnbm9yZSA9IHRydWU7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0Y29udGV4dC5yZWFkeSgoeyBjb250ZW50IH0pID0+IHtcblx0XHRcdFx0XHRcdGlmIChjb250ZW50KSB7XG5cdFx0XHRcdFx0XHRcdGlmIChtb2RlID09IE1PREVfQVBQRU5EKSBjb250ZW50LmFwcGVuZChlbGVtZW50KTtcblx0XHRcdFx0XHRcdFx0ZWxzZSBpZiAobW9kZSA9PSBNT0RFX1BSRVBFTkQpIGNvbnRlbnQucHJlcGVuZChlbGVtZW50KTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0gY2F0Y2ggKGUpIHtcblx0XHRcdGNvbnNvbGUubG9nKGUsIHsgY29udGV4dCB9KTtcblx0XHR9XG5cblx0XHRyZXR1cm4gY29udGV4dDtcblx0fVxufVxuRGlyZWN0aXZlLmRlZmluZSh7IGRpcmVjdGl2ZTogbmV3IEF0dGFjaEVsZW1lbnQoKSB9KTtcbiIsImltcG9ydCBHTE9CQUwgZnJvbSBcIkBkZWZhdWx0LWpzL2RlZmF1bHRqcy1jb21tb24tdXRpbHMvc3JjL0dsb2JhbC5qc1wiO1xuaW1wb3J0IERpcmVjdGl2ZSBmcm9tIFwiLi4vRGlyZWN0aXZlLmpzXCI7XG5cbmNvbnN0IEFUVFJJQlVURV9OQU1FID0gLyhqc3RsKT8oXFw/KT8oQCk/KFteXFw/QF0rKS9pO1xuXG5jb25zdCBERUZBVUxUX0VWRU5UX0ZVTkNUSU9OID0gXCJkZWZhdWx0XCI7XG5jb25zdCBPUFRJT05fUFJFVkVOVF9ERUZBVUxUID0gXCJwcmV2ZW50LWRlZmF1bHRcIlxuY29uc3QgSUdOT1JFRF9BVFRSSUJVVEVTID0gW1wiaXNcIl07XG5cbmNvbnN0IEZVTkNUSU9OX1NQTElUVEVSID0gXCI6OlwiO1xuY29uc3QgRlVOQ1RJT05fU1BMSVRURVJfT0xEID0gXCI6XCI7XG5cbmNvbnN0IEVWRU5URlVOQ1RJT05TID0ge1xuXHRkZWxlZ2F0ZTogYXN5bmMgKGV2ZW50LCBoYW5kbGUsIHNldHRpbmcsIHR5cGUsIHJlc29sdmVyLCBjb250ZW50LCBvcHRpb25zLCBjb250ZXh0KSA9PiB7XG5cdFx0Y29uc3QgZXZlbnRoYW5kbGUgPSBhd2FpdCByZXNvbHZlci5yZXNvbHZlVGV4dChoYW5kbGUsIGhhbmRsZSk7XG5cdFx0Y29udGVudC5vbihldmVudCwgZGVsZWdhdGVyKGV2ZW50aGFuZGxlLCBzZXR0aW5nKSk7XG5cdH0sXG5cdHRvZ2dsZWNsYXNzOiBhc3luYyAoZXZlbnQsIGhhbmRsZSwgc2V0dGluZywgdHlwZSwgcmVzb2x2ZXIsIGNvbnRlbnQsIG9wdGlvbnMsIGNvbnRleHQpID0+IHtcblx0XHRjb25zdCBjbGF6eiA9IG9wdGlvbnMuc2hpZnQoKTtcblx0XHRjb25zdCBwcmV2ZW50RGVmYXVsdCA9IG9wdGlvbnMuaW5jbHVkZXMoT1BUSU9OX1BSRVZFTlRfREVGQVVMVCk7XG5cdFx0Y29uc3Qgc2VsZWN0b3IgPSBoYW5kbGUgPyBhd2FpdCByZXNvbHZlci5yZXNvbHZlVGV4dChoYW5kbGUsIGhhbmRsZSkgOiBudWxsO1x0XHRcblx0XHRjb250ZW50Lm9uKGV2ZW50LCAoZXZlbnQpID0+IHtcblx0XHRcdGlmKHByZXZlbnREZWZhdWx0KVxuXHRcdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0aWYoc2VsZWN0b3IpXG5cdFx0XHRcdGNvbnRlbnQuY2xvc2VzdHMoc2VsZWN0b3IpLnRvZ2dsZUNsYXNzKGNsYXp6KTtcblx0XHRcdGVsc2Vcblx0XHRcdFx0Y29udGVudC50b2dnbGVDbGFzcyhjbGF6eik7XG5cdFx0fSk7XG5cdH0sXG5cdHRvZ2dsZWF0dHJpYnV0ZTogYXN5bmMgKGV2ZW50LCBoYW5kbGUsIHNldHRpbmcsIHR5cGUsIHJlc29sdmVyLCBjb250ZW50LCBvcHRpb25zLCBjb250ZXh0KSA9PiB7XG5cdFx0Y29uc3QgYXR0cmlidXRlID0gb3B0aW9ucy5zaGlmdCgpO1xuXHRcdGNvbnN0IHByZXZlbnREZWZhdWx0ID0gb3B0aW9ucy5pbmNsdWRlcyhPUFRJT05fUFJFVkVOVF9ERUZBVUxUKTtcblx0XHRjb25zdCBzZWxlY3RvciA9IGhhbmRsZSA/IGF3YWl0IHJlc29sdmVyLnJlc29sdmVUZXh0KGhhbmRsZSwgaGFuZGxlKSA6IG51bGw7XHRcdFxuXHRcdGNvbnRlbnQub24oZXZlbnQsIChldmVudCkgPT4ge1xuXHRcdFx0aWYocHJldmVudERlZmF1bHQpXG5cdFx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRpZihzZWxlY3Rvcilcblx0XHRcdFx0Y29udGVudC5jbG9zZXN0cyhzZWxlY3RvcikuZm9yRWFjaChlbGVtZW50ID0+IHtcblx0XHRcdFx0XHRlbGVtZW50LnRvZ2dsZUF0dHJpYnV0ZShhdHRyaWJ1dGUpXHRcdFx0XHRcblx0XHRcdFx0fSk7XG5cdFx0XHRlbHNlIFxuXHRcdFx0XHRjb250ZW50LnRvZ2dsZUF0dHJpYnV0ZShhdHRyaWJ1dGUpO1xuXHRcdH0pO1xuXHR9LFxuXHRbREVGQVVMVF9FVkVOVF9GVU5DVElPTl06IGFzeW5jIChldmVudCwgaGFuZGxlLCBzZXR0aW5nLCB0eXBlLCByZXNvbHZlciwgY29udGVudCwgb3B0aW9ucywgY29udGV4dCkgPT4ge1xuXHRcdGNvbnN0IGV2ZW50aGFuZGxlID0gaGFuZGxlID8gYXdhaXQgcmVzb2x2ZXIucmVzb2x2ZShoYW5kbGUsIGhhbmRsZSkgOiBudWxsO1xuXG5cdFx0aWYgKCFldmVudGhhbmRsZSkgY29uc29sZS5lcnJvcihuZXcgRXJyb3IoXCJDYW4ndCByZXNvbHZlIFxcXCJcIiArIGhhbmRsZSArICdcIiB0byBldmVudCBoYW5kbGUhJykpO1xuXHRcdGVsc2UgaWYgKHR5cGVvZiBldmVudGhhbmRsZSA9PT0gXCJmdW5jdGlvblwiKSBjb250ZW50Lm9uKGV2ZW50LCBldmVudGhhbmRsZSk7XG5cdFx0ZWxzZSBpZiAodHlwZW9mIGV2ZW50aGFuZGxlID09PSBcInN0cmluZ1wiKSBjb250ZW50Lm9uKGV2ZW50LCBkZWxlZ2F0ZXIoZXZlbnRoYW5kbGUsIHNldHRpbmcpKTtcblx0XHRlbHNlIGlmICh0eXBlb2YgZXZlbnRoYW5kbGUgPT09IFwib2JqZWN0XCIpIHtcblx0XHRcdGNvbnN0IHsgY2FwdHVyZSA9IGZhbHNlLCBwYXNzaXZlID0gZmFsc2UsIG9uY2UgPSBmYWxzZSB9ID0gZXZlbnRoYW5kbGU7XG5cdFx0XHRjb250ZW50Lm9uKGV2ZW50LCBldmVudGhhbmRsZS5ldmVudEhhbmRsZSwgeyBjYXB0dXJlLCBwYXNzaXZlLCBvbmNlIH0pO1xuXHRcdH1cblx0fSxcbn07XG5cbmNvbnN0IGJpbmRBdHRyaWJ1dGUgPSBhc3luYyAoeyBjb25kaXRpb24sIG5hbWUsIHZhbHVlLCBjb250ZXh0IH0pID0+IHtcblx0Y29uc3QgeyByZXNvbHZlciwgY29udGVudCwgdGVtcGxhdGUgfSA9IGNvbnRleHQ7XG5cblx0bGV0IGF0dHJpYnV0ZSA9ICFjb25kaXRpb24gPyB2YWx1ZSA6IHRlbXBsYXRlLmF0dHIobmFtZSk7XG5cdGNvbmRpdGlvbiA9IGNvbmRpdGlvbiA/IHZhbHVlIDogdGVtcGxhdGUuYXR0cihcIj9cIiArIG5hbWUpO1xuXHRjb25zdCBoYXNWYWx1ZSA9IGlzVmFsdWUoYXR0cmlidXRlKTtcblxuXHRpZiAoY29uZGl0aW9uICYmIGhhc1ZhbHVlKSB7XG5cdFx0Y29uZGl0aW9uID0gYXdhaXQgcmVzb2x2ZXIucmVzb2x2ZShjb25kaXRpb24sIGZhbHNlKTtcblx0XHRpZiAoY29uZGl0aW9uID09PSB0cnVlKSBjb250ZW50LmF0dHIobmFtZSwgYXdhaXQgcmVzb2x2ZXIucmVzb2x2ZVRleHQoYXR0cmlidXRlLCBhdHRyaWJ1dGUpKTtcblx0fSBlbHNlIGlmIChjb25kaXRpb24pIHtcblx0XHRjb25kaXRpb24gPSBhd2FpdCByZXNvbHZlci5yZXNvbHZlKGNvbmRpdGlvbiwgZmFsc2UpO1xuXHRcdGlmIChjb25kaXRpb24gPT09IHRydWUpIGNvbnRlbnQuYXR0cihuYW1lLCB0cnVlKTtcblx0fSBlbHNlIGlmIChoYXNWYWx1ZSkge1xuXHRcdGNvbnRlbnQuYXR0cihuYW1lLCBhd2FpdCByZXNvbHZlci5yZXNvbHZlVGV4dChhdHRyaWJ1dGUsIGF0dHJpYnV0ZSkpO1xuXHR9XG59O1xuXG5jb25zdCBpc1ZhbHVlID0gKHZhbHVlKSA9PiB7XG5cdHJldHVybiB2YWx1ZSAhPSBudWxsICYmIHR5cGVvZiB2YWx1ZSAhPT0gXCJ1bmRlZmluZWRcIjtcbn07XG5cbmNvbnN0IGJpbmRFdmVudCA9IGFzeW5jICh7IGNvbmRpdGlvbiwgbmFtZSwgdmFsdWUsIGNvbnRleHQgfSkgPT4ge1xuXHRjb25zdCB7IHJlc29sdmVyLCB0ZW1wbGF0ZSwgY29udGVudCB9ID0gY29udGV4dDtcblxuXHRjb25kaXRpb24gPSBjb25kaXRpb24gPyB2YWx1ZSA6IHRlbXBsYXRlLmF0dHIoXCI/QFwiICsgbmFtZSk7XG5cdGxldCBoYW5kbGUgPSAhY29uZGl0aW9uID8gdmFsdWUgOiB0ZW1wbGF0ZS5hdHRyKFwiQFwiICsgbmFtZSk7XG5cdGxldCBzcGxpdCA9IG5hbWUuc3BsaXQoRlVOQ1RJT05fU1BMSVRURVIpO1xuXHRpZihzcGxpdC5sZW5ndGggPT0gMSlcblx0XHRzcGxpdCA9IG5hbWUuc3BsaXQoRlVOQ1RJT05fU1BMSVRURVJfT0xEKTtcblxuXHRjb25zdCBldmVudCA9IHNwbGl0LnNoaWZ0KCk7XG5cdGNvbnN0IHR5cGUgPSAoc3BsaXQuc2hpZnQoKSB8fCBERUZBVUxUX0VWRU5UX0ZVTkNUSU9OKS50b0xvd2VyQ2FzZSgpO1xuXHRcblx0aWYodHlwZW9mIGhhbmRsZSA9PT0gXCJ1bmRlZmluZWRcIiB8fCBoYW5kbGUgPT0gbnVsbClcblx0XHRjb25zb2xlLmVycm9yKGBEZWZpbml0aW9uIG9mIFwiJHtldmVudH1cIiAtIGV2ZW50IGhhbmRsZSBhdGAsIGNvbnRlbnQsIFwiaXMgaW5jb3JyZWN0IVwiKTtcblxuXHRoYW5kbGUgPSBoYW5kbGUudHJpbSgpO1xuXHRjb25zdCBzZXR0aW5nID0ge1xuXHRcdGJ1YmJsZTogdHJ1ZSxcblx0fTtcblxuXHRpZiAoY29uZGl0aW9uICkge1xuXHRcdGlmICgoYXdhaXQgcmVzb2x2ZXIucmVzb2x2ZShjb25kaXRpb24sIGZhbHNlKSkgPT0gdHJ1ZSkgYXdhaXQgYmluZGluZyhldmVudCwgaGFuZGxlLCBzZXR0aW5nLCB0eXBlLCByZXNvbHZlciwgY29udGVudCwgc3BsaXQsIGNvbnRleHQpO1xuXHR9IGVsc2UgYXdhaXQgYmluZGluZyhldmVudCwgaGFuZGxlLCBzZXR0aW5nLCB0eXBlLCByZXNvbHZlciwgY29udGVudCwgc3BsaXQsIGNvbnRleHQpO1xufTtcblxuY29uc3QgYmluZGluZyA9IGFzeW5jIChldmVudCwgaGFuZGxlLCBzZXR0aW5nLCB0eXBlLCByZXNvbHZlciwgY29udGVudCwgb3B0aW9ucywgY29udGV4dCkgPT4ge1xuXHRjb25zdCBiaW5kZXIgPSBFVkVOVEZVTkNUSU9OU1t0eXBlXTtcblx0aWYgKGJpbmRlcikgcmV0dXJuIGJpbmRlcihldmVudCwgaGFuZGxlLCBzZXR0aW5nLCB0eXBlLCByZXNvbHZlciwgY29udGVudCwgb3B0aW9ucywgY29udGV4dCk7XG59O1xuXG5jb25zdCBkZWxlZ2F0ZXIgPSBmdW5jdGlvbiAoZGVsZWdhdGUsIHNldHRpbmcpIHtcblx0cmV0dXJuIGZ1bmN0aW9uIChldmVudCkge1xuXHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0ZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cdFx0aWYgKGV2ZW50LmN1cnJlbnRUYXJnZXQpIGV2ZW50LmN1cnJlbnRUYXJnZXQudHJpZ2dlcihkZWxlZ2F0ZSwgZXZlbnQpO1xuXHRcdGVsc2UgZXZlbnQudGFyZ2V0LnRyaWdnZXIoZGVsZWdhdGUsIGV2ZW50KTtcblx0fTtcbn07XG5cbmNsYXNzIEF0dHJpYnV0ZSBleHRlbmRzIERpcmVjdGl2ZSB7XG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHN1cGVyKCk7XG5cdH1cblxuXHRnZXQgbmFtZSgpIHtcblx0XHRyZXR1cm4gXCJhdHRyaWJ1dGVcIjtcblx0fVxuXHRnZXQgcmFuaygpIHtcblx0XHRyZXR1cm4gRGlyZWN0aXZlLk1JTl9SQU5LO1xuXHR9XG5cdGdldCBwaGFzZSgpIHtcblx0XHRyZXR1cm4gRGlyZWN0aXZlLlBIQVNFLmNvbnRlbnQ7XG5cdH1cblxuXHRhc3luYyBleGVjdXRlKGNvbnRleHQpIHtcblx0XHRjb25zdCB7IHRlbXBsYXRlIH0gPSBjb250ZXh0O1xuXHRcdGlmICghKHRlbXBsYXRlIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpKSByZXR1cm4gY29udGV4dDtcblxuXHRcdGNvbnN0IHByb2Nlc3NlZCA9IG5ldyBTZXQoSUdOT1JFRF9BVFRSSUJVVEVTKTtcblx0XHRmb3IgKGNvbnN0IGF0dHJpYnV0ZSBvZiB0ZW1wbGF0ZS5hdHRyaWJ1dGVzKSB7XG5cdFx0XHRjb25zdCBbLCBqc3RsLCBjb25kaXRpb24sIGV2ZW50LCBuYW1lXSA9IEFUVFJJQlVURV9OQU1FLmV4ZWMoYXR0cmlidXRlLm5hbWUpO1xuXHRcdFx0aWYgKCFqc3RsICYmICFwcm9jZXNzZWQuaGFzKG5hbWUpKSB7XG5cdFx0XHRcdGNvbnN0IHZhbHVlID0gYXR0cmlidXRlLnZhbHVlO1xuXG5cdFx0XHRcdGlmIChldmVudCkgYXdhaXQgYmluZEV2ZW50KHsgY29uZGl0aW9uLCBldmVudCwgbmFtZSwgdmFsdWUsIGNvbnRleHQgfSk7XG5cdFx0XHRcdGVsc2UgYXdhaXQgYmluZEF0dHJpYnV0ZSh7IGNvbmRpdGlvbiwgbmFtZSwgdmFsdWUsIGNvbnRleHQgfSk7XG5cdFx0XHR9XG5cdFx0XHRwcm9jZXNzZWQuYWRkKG5hbWUpO1xuXHRcdH1cblxuXHRcdHJldHVybiBjb250ZXh0O1xuXHR9XG59XG5cbkRpcmVjdGl2ZS5kZWZpbmUoeyBkaXJlY3RpdmU6IG5ldyBBdHRyaWJ1dGUoKSB9KTtcbiIsImltcG9ydCBEaXJlY3RpdmUgZnJvbSBcIi4uL0RpcmVjdGl2ZS5qc1wiO1xuXG5jbGFzcyBDaG9vc2UgZXh0ZW5kcyBEaXJlY3RpdmUge1xuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRzdXBlcigpO1xuXHR9XG5cblx0Z2V0IG5hbWUoKSB7IHJldHVybiBcImNob29zZVwiIH1cblx0Z2V0IHJhbmsoKSB7IHJldHVybiBEaXJlY3RpdmUuTUlOX1JBTksgKyAxIH1cblx0Z2V0IHBoYXNlKCkgeyByZXR1cm4gRGlyZWN0aXZlLlBIQVNFLnRlbXBsYXRlIH1cblxuXHRhc3luYyBleGVjdXRlKGNvbnRleHQpIHtcblx0XHRpZiAoIShjb250ZXh0LnRlbXBsYXRlIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpIHx8ICFjb250ZXh0LnRlbXBsYXRlLmhhc0F0dHJpYnV0ZShcImpzdGwtY2hvb3NlXCIpIHx8IGNvbnRleHQudGVtcGxhdGUuY2hpbGRyZW4ubGVuZ3RoID09IDApXG5cdFx0XHRyZXR1cm4gY29udGV4dDtcblx0XHRcblx0XHQvL2Nsb25lIHRlbXBsYXRlLCBiZWZvcmUgbWFuaXB1bGF0ZSB0ZW1wbGF0ZVxuXHRcdGNvbnRleHQudGVtcGxhdGUgPSBjb250ZXh0LnRlbXBsYXRlLmNsb25lTm9kZSh0cnVlKTtcblx0XHRjb25zdCB7IHRlbXBsYXRlLCByZXNvbHZlciB9ID0gY29udGV4dDtcblx0XHRsZXQgcmVzb2x2ZWQgPSBmYWxzZTtcblx0XHRjb25zdCB3aGVucyA9IHRlbXBsYXRlLmZpbmQoXCI6c2NvcGUgPiBbanN0bC13aGVuXVwiKTtcblx0XHRjb25zdCBsZW5ndGggPSB3aGVucy5sZW5ndGg7XG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuXHRcdFx0Y29uc3Qgbm9kZSA9IHdoZW5zW2ldO1xuXHRcdFx0aWYgKCFyZXNvbHZlZCAmJiAoYXdhaXQgcmVzb2x2ZXIucmVzb2x2ZShub2RlLmF0dHIoXCJqc3RsLXdoZW5cIiksIGZhbHNlKSkpXG5cdFx0XHRcdHJlc29sdmVkID0gdHJ1ZTtcblx0XHRcdGVsc2Vcblx0XHRcdFx0bm9kZS5yZW1vdmUoKTtcblx0XHR9XG5cblx0XHRpZiAocmVzb2x2ZWQpXG5cdFx0XHR0ZW1wbGF0ZS5maW5kKFwiOnNjb3BlID4gW2pzdGwtb3RoZXJ3aXNlXVwiKS5yZW1vdmUoKTtcblxuXHRcdHJldHVybiBjb250ZXh0O1xuXHR9XG59XG5cbkRpcmVjdGl2ZS5kZWZpbmUoeyBkaXJlY3RpdmU6IG5ldyBDaG9vc2UoKSB9KTsiLCJpbXBvcnQgRGlyZWN0aXZlIGZyb20gXCIuLi9EaXJlY3RpdmUuanNcIjtcbmltcG9ydCBFeHByZXNzaW9uUmVzb2x2ZXIgZnJvbSBcIkBkZWZhdWx0LWpzL2RlZmF1bHRqcy1leHByZXNzaW9uLWxhbmd1YWdlL3NyYy9FeHByZXNzaW9uUmVzb2x2ZXIuanNcIjtcblxuY29uc3QgTU9ERVMgPSB7XG5cdFwicmVtb3RlXCI6IGFzeW5jICh7IGRhdGEsIGNvbnRleHQgfSkgPT4ge1x0XHRcblx0XHRjb25zdCB7cmVzb2x2ZXIsIHRlbXBsYXRlfSA9IGNvbnRleHQ7XG5cdFx0ZGF0YSA9IGF3YWl0IHJlc29sdmVyLnJlc29sdmVUZXh0KGRhdGEpO1xuXHRcdGRhdGEgPSBuZXcgVVJMKGRhdGEsIGxvY2F0aW9uLm9yaWdpbik7XG5cdFx0bGV0IG9wdGlvbiA9IGF3YWl0IHJlc29sdmVyLnJlc29sdmVUZXh0KHRlbXBsYXRlLmF0dHIoXCJqc3RsLWRhdGEtb3B0aW9uXCIpIHx8IFwie31cIik7XG5cdFx0b3B0aW9uID0gSlNPTi5wYXJzZShvcHRpb24pO1xuXG5cdFx0ZGF0YSA9IGF3YWl0IGZldGNoKGRhdGEudG9TdHJpbmcoKSwgb3B0aW9uKTtcblx0XHRyZXR1cm4gZGF0YS5qc29uKCk7XG5cdH0sXHRcblx0XCJzZXRcIjogYXN5bmMgKHsgZGF0YSwgY29udGV4dCB9KSA9PiB7XG5cdFx0Y29uc3Qge3Jlc29sdmVyfSA9IGNvbnRleHQ7XG5cdFx0XG5cdFx0ZGF0YSA9IGF3YWl0IHJlc29sdmVyLnJlc29sdmUoZGF0YSk7XG5cdFx0cmV0dXJuIGRhdGE7XG5cdH0sXG5cdFwiZGlyZWN0XCI6IGFzeW5jICh7IGRhdGEsIGNvbnRleHQgfSkgPT4ge1xuXHRcdGNvbnN0IHtyZXNvbHZlcn0gPSBjb250ZXh0O1xuXHRcdFxuXHRcdGRhdGEgPSBhd2FpdCByZXNvbHZlci5yZXNvbHZlVGV4dChkYXRhKTtcblx0XHRyZXR1cm4gZGF0YTtcblx0fVxufTtcblxuY29uc3QgdXBkYXRlQ29udGV4dCA9ICh7IHZhcm5hbWUsIGRhdGEsIHNjb3BlLCBjb250ZXh0IH0pID0+IHtcblx0aWYgKHZhcm5hbWUpXG5cdFx0Y29udGV4dC5yZXNvbHZlci51cGRhdGVEYXRhKHZhcm5hbWUsIGRhdGEsIHNjb3BlKTtcblx0ZWxzZSBpZiAoc2NvcGUpXG5cdFx0Y29udGV4dC5yZXNvbHZlci5tZXJnZUNvbnRleHQoZGF0YSwgc2NvcGUpO1xuXHRlbHNle1xuXHRcdGNvbnN0IHJlc29sdmVyID0gbmV3IEV4cHJlc3Npb25SZXNvbHZlcih7IGNvbnRleHQ6IGRhdGEsIG5hbWU6IFwianN0bC1kYXRhXCIsIHBhcmVudDogY29udGV4dC5yZXNvbHZlciB9KTtcblx0XHQvL2NvbnRleHQgPSBjb250ZXh0LnN1YkNvbnRleHQoe3Jlc29sdmVyfSk7XG5cdFx0Y29udGV4dC5yZXNvbHZlciA9IHJlc29sdmVyO1xuXHR9XG5cdFxuXHRcdFxuXHRyZXR1cm4gY29udGV4dDtcbn07XG5cblxuXG5jbGFzcyBEYXRhIGV4dGVuZHMgRGlyZWN0aXZlIHtcblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0c3VwZXIoKTtcblx0fVxuXG5cdGdldCBuYW1lKCkgeyByZXR1cm4gXCJkYXRhXCIgfVxuXHRnZXQgcmFuaygpIHsgcmV0dXJuIDEwMDAgfVxuXHRnZXQgcGhhc2UoKXtyZXR1cm4gRGlyZWN0aXZlLlBIQVNFLmRhdGF9XG5cblx0YXN5bmMgZXhlY3V0ZShjb250ZXh0KSB7XG5cdFx0aWYgKCEoY29udGV4dC50ZW1wbGF0ZSBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSB8fCAhY29udGV4dC50ZW1wbGF0ZS5hdHRyKFwianN0bC1kYXRhXCIpKVxuXHRcdFx0cmV0dXJuIGNvbnRleHQ7XG5cdFx0XHRcblx0XHR0cnkge1xuXHRcdFx0Y29uc3QgeyB0ZW1wbGF0ZSB9ID0gY29udGV4dDtcdFx0XHRcblx0XHRcdGNvbnN0IG1vZGUgPSBNT0RFU1sodGVtcGxhdGUuYXR0cihcImpzdGwtZGF0YS1tb2RlXCIpIHx8IFwicmVtb3RlXCIpXTtcblx0XHRcdGlmICghbW9kZSlcblx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKFwiVGhlIGpzdGwtZGF0YS1tb2RlIGlzIHVuc3VwcG9ydGVkIVwiKTtcblxuXHRcdFx0bGV0IGRhdGEgPSB0ZW1wbGF0ZS5hdHRyKFwianN0bC1kYXRhXCIpO1xuXHRcdFx0ZGF0YSA9IGF3YWl0IG1vZGUoeyBkYXRhLCBjb250ZXh0IH0pO1xuXG5cdFx0XHRjb25zdCB2YXJuYW1lID0gdGVtcGxhdGUuYXR0cihcImpzdGwtZGF0YS12YXJcIik7XG5cdFx0XHRjb25zdCBzY29wZSA9IHRlbXBsYXRlLmF0dHIoXCJqc3RsLWRhdGEtc2NvcGVcIik7XG5cdFx0XHRjb250ZXh0ID0gdXBkYXRlQ29udGV4dCh7IHZhcm5hbWUsIGRhdGEsIHNjb3BlLCBjb250ZXh0IH0pO1xuXHRcdH0gY2F0Y2ggKGUpIHtcblx0XHRcdGNvbnNvbGUuZXJyb3IoZSwgY29udGV4dC50ZW1wbGF0ZSk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGNvbnRleHQ7XG5cblx0fVxufVxuXG5EaXJlY3RpdmUuZGVmaW5lKHsgZGlyZWN0aXZlOiBuZXcgRGF0YSgpIH0pOyIsImltcG9ydCBEaXJlY3RpdmUgZnJvbSBcIi4uL0RpcmVjdGl2ZS5qc1wiO1xuaW1wb3J0IEV4cHJlc3Npb25SZXNvbHZlciBmcm9tIFwiQGRlZmF1bHQtanMvZGVmYXVsdGpzLWV4cHJlc3Npb24tbGFuZ3VhZ2Uvc3JjL0V4cHJlc3Npb25SZXNvbHZlci5qc1wiO1xuaW1wb3J0IHtpc1VuZGVmaW5lZE9yTnVsbE9yQmxhbmssIGlzVW5kZWZpbmVkT3JOdWxsfSBmcm9tIFwiLi4vVXRpbHMuanNcIjtcblxuY29uc3QgQVRUUklCVVRFID0ge1xuXHREQVRBOiBcImpzdGwtZm9yZWFjaFwiLFxuXHRWQVI6IFwianN0bC1mb3JlYWNoLXZhclwiLFxuXHRTVEFUVVM6IFwianN0bC1mb3JlYWNoLXN0YXR1c1wiLFxuXHRDT1VOVDogXCJqc3RsLWZvcmVhY2gtY291bnRcIixcblx0U1RBUlQ6IFwianN0bC1mb3JlYWNoLXN0YXJ0XCIsXG5cdFNURVA6IFwianN0bC1mb3JlYWNoLXN0ZXBcIixcblx0Q09ORElUSU9OOiBcImpzdGwtZm9yZWFjaC1jb25kaXRpb25cIlxufTtcblxuXG4vKipcbiAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb24gXG4gKiBAcGFyYW0ge251bWJlcn0gb3B0aW9uLnN0YXJ0IFxuICogQHBhcmFtIHtudW1iZXJ9IG9wdGlvbi5zdGVwIFxuICogQHBhcmFtIHtudW1iZXJ9IG9wdGlvbi5jb3VudCBcbiAqIEBwYXJhbSB7c3RyaW5nfSBvcHRpb24udmFybmFtZSBcbiAqIEBwYXJhbSB7c3RyaW5nfSBvcHRpb24uc3RhdHVzIFxuICogQHBhcmFtIHtFeHByZXNzaW9uUmVzb2x2ZXJ9IG9wdGlvbi5yZXNvbHZlciBcbiAqIEByZXR1cm5zIHtQcm9taXNlPHZvaWQ+fVxuICovXG5jb25zdCBkb0NvdW50ID0gYXN5bmMgKG9wdGlvbikgPT4ge1xuXHRsZXQgeyBzdGFydCwgc3RlcCwgY291bnQsIHZhcm5hbWUsIHN0YXR1cywgcmVzb2x2ZXIgfSA9IG9wdGlvbjtcblxuXHRjb3VudCA9IGF3YWl0IHJlc29sdmVyLnJlc29sdmUoY291bnQpO1xuXHRjb25zdCBsZW5ndGggPSBzdGFydCArIChjb3VudCAqIHN0ZXApO1xuXHRsZXQgc3RvcCA9IGZhbHNlO1xuXHRmb3IgKGxldCBpID0gc3RhcnQ7IGkgPCBsZW5ndGggJiYgIXN0b3A7IGkgPSBpICsgc3RlcCkge1xuXHRcdGNvbnN0IGl0ZXJhdGlvbiA9IHt9XG5cdFx0aXRlcmF0aW9uW3Zhcm5hbWVdID0gaTtcblx0XHRpdGVyYXRpb25bc3RhdHVzXSA9IHtcblx0XHRcdGluZGV4OiBpLFxuXHRcdFx0bnVtYmVyOiBpICsgMSxcblx0XHRcdHN0ZXAsXG5cdFx0XHRjb3VudFxuXHRcdH07XG5cdFx0c3RvcCA9ICEoYXdhaXQgaXRlcmF0ZShpdGVyYXRpb24sIG9wdGlvbikpO1xuXHR9XG59O1xuXG5cblxuLyoqXG4gKiBAcGFyYW0ge29iamVjdH0gb3B0aW9uIFxuICogQHBhcmFtIHtBcnJheTxhbnk+fGFueX0gb3B0aW9uLmRhdGEgXG4gKiBAcGFyYW0ge251bWJlcn0gb3B0aW9uLnN0YXJ0IFxuICogQHBhcmFtIHtudW1iZXJ9IG9wdGlvbi5zdGVwIFxuICogQHBhcmFtIHtudW1iZXJ9IG9wdGlvbi5jb3VudCBcbiAqIEBwYXJhbSB7c3RyaW5nfSBvcHRpb24udmFybmFtZSBcbiAqIEBwYXJhbSB7c3RyaW5nfSBvcHRpb24uc3RhdHVzIFxuICogQHBhcmFtIHtFeHByZXNzaW9uUmVzb2x2ZXJ9IG9wdGlvbi5yZXNvbHZlciBcbiAqIEByZXR1cm5zIHtQcm9taXNlPHZvaWQ+fVxuICovXG5jb25zdCBkb0ZvcmVhY2ggPSBhc3luYyAob3B0aW9uKSA9PiB7XG5cdGxldCB7IGRhdGEsIHN0YXJ0LCBzdGVwLCBjb3VudCwgdmFybmFtZSwgc3RhdHVzLCByZXNvbHZlciB9ID0gb3B0aW9uO1xuXG5cdGRhdGEgPSBhd2FpdCByZXNvbHZlci5yZXNvbHZlKGRhdGEsIFtdKTtcblx0bGV0IGFycmF5ID0gZGF0YTtcblx0aWYgKCEoZGF0YSBpbnN0YW5jZW9mIEFycmF5KSlcblx0XHRhcnJheSA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKGRhdGEpO1xuXG5cdGNvdW50ID0gY291bnQgIT0gXCJcIiA/IGF3YWl0IHJlc29sdmVyLnJlc29sdmUoY291bnQsIDApIDogbnVsbDtcblx0Y29uc3QgbGVuZ3RoID0gY291bnQgPyBNYXRoLm1pbihzdGFydCArIGNvdW50LCBhcnJheS5sZW5ndGgpIDogYXJyYXkubGVuZ3RoO1xuXHRsZXQgc3RvcCA9IGZhbHNlO1xuXHRmb3IgKGxldCBpID0gc3RhcnQ7IGkgPCBsZW5ndGggJiYgIXN0b3A7IGkgPSBpICsgc3RlcCkge1xuXHRcdGNvbnN0IGl0ZXJhdGlvbiA9IHt9XG5cdFx0aXRlcmF0aW9uW3Zhcm5hbWVdID0gZGF0YVtpXTtcblx0XHRpdGVyYXRpb25bc3RhdHVzXSA9IHtcblx0XHRcdGluZGV4OiBpLFxuXHRcdFx0bnVtYmVyOiBpICsgMSxcblx0XHRcdGNvdW50OiBsZW5ndGgsXG5cdFx0XHRkYXRhXG5cdFx0fTtcblx0XHRzdG9wID0gIShhd2FpdCBpdGVyYXRlKGl0ZXJhdGlvbiwgb3B0aW9uKSk7XG5cdH1cbn07XG5cbmNvbnN0IGl0ZXJhdGUgPSBhc3luYyAoZGF0YSwgb3B0aW9uKSA9PiB7XG5cdGxldCB7IHRlbXBsYXRlLCByZXNvbHZlciwgcmVuZGVyZXIsIGNvbnRhaW5lciwgY29uZGl0aW9uLCBjb250ZXh0IH0gPSBvcHRpb247XG5cdHJlc29sdmVyID0gbmV3IEV4cHJlc3Npb25SZXNvbHZlcih7IGNvbnRleHQ6IGRhdGEsIG5hbWU6IFwianN0bC1mb3JlYWNoXCIsIHBhcmVudDogcmVzb2x2ZXIgfSk7XG5cblx0Y29uZGl0aW9uID0gY29uZGl0aW9uID8gYXdhaXQgcmVzb2x2ZXIucmVzb2x2ZShjb25kaXRpb24sIGZhbHNlKSA6IGZhbHNlO1xuXHRpZiAoY29uZGl0aW9uKVxuXHRcdHJldHVybiBmYWxzZTtcblx0Y29uc3QgaXRlbUNvbnRleHQgPSBjb250ZXh0LnN1YkNvbnRleHQoeyByZXNvbHZlciwgY29udGFpbmVyLCB0ZW1wbGF0ZSwgbW9kZTogXCJhcHBlbmRcIiB9KTtcblx0YXdhaXQgcmVuZGVyZXIucmVuZGVyKGl0ZW1Db250ZXh0KTtcblx0YXdhaXQgaXRlbUNvbnRleHQucmVhZHkoKTtcblx0cmV0dXJuIHRydWU7XG59O1xuXG5jbGFzcyBGb3JlYWNoIGV4dGVuZHMgRGlyZWN0aXZlIHtcblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0c3VwZXIoKTtcblx0fVxuXG5cdGdldCBuYW1lKCkgeyByZXR1cm4gXCJmb3JlYWNoXCIgfVxuXHRnZXQgcmFuaygpIHsgcmV0dXJuIERpcmVjdGl2ZS5NSU5fUkFOSyArIDIgfVxuXHRnZXQgcGhhc2UoKSB7IHJldHVybiBEaXJlY3RpdmUuUEhBU0UudGVtcGxhdGUgfVxuXG5cdGFzeW5jIGV4ZWN1dGUoY29udGV4dCkge1xuXHRcdGlmICghKGNvbnRleHQudGVtcGxhdGUgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkgfHwgKCFjb250ZXh0LnRlbXBsYXRlLmF0dHIoQVRUUklCVVRFLkRBVEEpICYmICFjb250ZXh0LnRlbXBsYXRlLmF0dHIoQVRUUklCVVRFLkNPVU5UKSkpXG5cdFx0XHRyZXR1cm4gY29udGV4dDtcblxuXHRcdGNvbnRleHQuaWdub3JlID0gdHJ1ZTtcblx0XHR0cnkge1xuXHRcdFx0Y29uc3QgeyB0ZW1wbGF0ZSwgcmVzb2x2ZXIsIHJlbmRlcmVyLCBjb250ZW50IH0gPSBjb250ZXh0O1xuXHRcdFx0Y29uc3QgZGF0YSA9ICh0ZW1wbGF0ZS5hdHRyKEFUVFJJQlVURS5EQVRBKSB8fCBcIlwiKS50cmltKCk7XG5cdFx0XHRjb25zdCBjb3VudCA9ICh0ZW1wbGF0ZS5hdHRyKEFUVFJJQlVURS5DT1VOVCkgfHwgXCJcIikudHJpbSgpO1xuXHRcdFx0Y29uc3Qgb3B0aW9uID0ge1xuXHRcdFx0XHRkYXRhLFxuXHRcdFx0XHRjb3VudCxcblx0XHRcdFx0c3RhcnQ6IGF3YWl0IHJlc29sdmVyLnJlc29sdmUodGVtcGxhdGUuYXR0cihBVFRSSUJVVEUuU1RBUlQpIHx8IFwiMFwiKSxcblx0XHRcdFx0c3RlcDogYXdhaXQgcmVzb2x2ZXIucmVzb2x2ZSh0ZW1wbGF0ZS5hdHRyKEFUVFJJQlVURS5TVEVQKSB8fCBcIjFcIiksXG5cdFx0XHRcdHZhcm5hbWU6ICh0ZW1wbGF0ZS5hdHRyKEFUVFJJQlVURS5WQVIpIHx8IFwiaXRlbVwiKS50cmltKCksXG5cdFx0XHRcdHN0YXR1czogKHRlbXBsYXRlLmF0dHIoQVRUUklCVVRFLlNUQVRVUykgfHwgXCJzdGF0dXNcIikudHJpbSgpLFxuXHRcdFx0XHRjb25kaXRpb246IHRlbXBsYXRlLmF0dHIoQVRUUklCVVRFLkNPTkRJVElPTiksXG5cdFx0XHRcdHRlbXBsYXRlOiB0ZW1wbGF0ZS5jaGlsZE5vZGVzLFxuXHRcdFx0XHRyZXNvbHZlcixcblx0XHRcdFx0cmVuZGVyZXIsXG5cdFx0XHRcdGNvbnRhaW5lcjogY29udGVudCxcblx0XHRcdFx0Y29udGV4dFxuXHRcdFx0fTtcblx0XHRcdGlmIChpc1VuZGVmaW5lZE9yTnVsbE9yQmxhbmsoZGF0YSkgJiYgIWlzVW5kZWZpbmVkT3JOdWxsT3JCbGFuayhjb3VudCkpXG5cdFx0XHRcdGF3YWl0IGRvQ291bnQob3B0aW9uKTtcblx0XHRcdGVsc2UgaWYoIWlzVW5kZWZpbmVkT3JOdWxsT3JCbGFuayhkYXRhKSlcblx0XHRcdFx0YXdhaXQgZG9Gb3JlYWNoKG9wdGlvbik7XG5cblx0XHR9IGNhdGNoIChlcnJvcikge1xuXHRcdFx0Y29uc29sZS5lcnJvcihcImVycm9yIGF0IGpzdGwtZm9yZWFjaDpcIiwgZXJyb3IpO1xuXHRcdH1cblx0XHRyZXR1cm4gY29udGV4dDtcblxuXHR9XG59O1xuXG5EaXJlY3RpdmUuZGVmaW5lKHsgZGlyZWN0aXZlOiBuZXcgRm9yZWFjaCgpIH0pOyIsImltcG9ydCBEaXJlY3RpdmUgZnJvbSBcIi4uL0RpcmVjdGl2ZS5qc1wiO1xuXG5jbGFzcyBJZiBleHRlbmRzIERpcmVjdGl2ZSB7XG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHN1cGVyKCk7XG5cdH1cblxuXHRnZXQgbmFtZSgpIHsgcmV0dXJuIFwiaWZcIiB9XG5cdGdldCByYW5rKCkgeyByZXR1cm4gRGlyZWN0aXZlLk1JTl9SQU5LICsgMTAwMCB9XG5cdGdldCBwaGFzZSgpIHsgcmV0dXJuIERpcmVjdGl2ZS5QSEFTRS5pbml0IH1cblxuXHRhc3luYyBleGVjdXRlKGNvbnRleHQpIHtcblx0XHRjb25zdCB7IHRlbXBsYXRlIH0gPSBjb250ZXh0O1xuXHRcdGlmICghKHRlbXBsYXRlIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpIHx8ICF0ZW1wbGF0ZS5hdHRyKFwianN0bC1pZlwiKSlcblx0XHRcdHJldHVybiBjb250ZXh0O1xuXG5cdFx0Y29uc3QgZXhwcmVzc2lvbiA9IHRlbXBsYXRlLmF0dHIoXCJqc3RsLWlmXCIpO1xuXHRcdGNvbnN0IHJlc29sdmVyID0gY29udGV4dC5yZXNvbHZlcjtcblx0XHRjb25zdCByZXN1bHQgPSBhd2FpdCByZXNvbHZlci5yZXNvbHZlKGV4cHJlc3Npb24sIGZhbHNlKTtcblx0XHRpZiAoIXJlc3VsdCkge1xuXHRcdFx0Y29udGV4dC5jb250ZW50ID0gbnVsbDtcblx0XHRcdGNvbnRleHQuc3RvcCA9IHRydWU7XG5cdFx0XHRjb250ZXh0Lmlnbm9yZSA9IHRydWU7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGNvbnRleHQ7XG5cdH1cbn1cblxuRGlyZWN0aXZlLmRlZmluZSh7IGRpcmVjdGl2ZTogbmV3IElmKCkgfSk7IiwiaW1wb3J0IERpcmVjdGl2ZSBmcm9tIFwiLi4vRGlyZWN0aXZlLmpzXCI7XG5pbXBvcnQgVGVtcGxhdGUgZnJvbSBcIi4uL1RlbXBsYXRlLmpzXCI7XG5cbmNsYXNzIEluY2x1ZGUgZXh0ZW5kcyBEaXJlY3RpdmUge1xuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRzdXBlcigpO1xuXHR9XG5cblx0Z2V0IG5hbWUoKSB7XG5cdFx0cmV0dXJuIFwiaW5jbHVkZVwiO1xuXHR9XG5cdGdldCByYW5rKCkge1xuXHRcdHJldHVybiBEaXJlY3RpdmUuTUlOX1JBTks7XG5cdH1cblx0Z2V0IHBoYXNlKCkge1xuXHRcdHJldHVybiBEaXJlY3RpdmUuUEhBU0UudGVtcGxhdGU7XG5cdH1cblxuXHRhc3luYyBleGVjdXRlKGNvbnRleHQpIHtcblx0XHRpZiAoIShjb250ZXh0LnRlbXBsYXRlIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpIHx8ICFjb250ZXh0LnRlbXBsYXRlLmF0dHIoXCJqc3RsLWluY2x1ZGVcIikpIHJldHVybiBjb250ZXh0O1xuXHRcdHRyeSB7XG5cdFx0XHRjb25zdCB7IHRlbXBsYXRlLCByZXNvbHZlciwgcmVuZGVyZXIgfSA9IGNvbnRleHQ7XG5cdFx0XHRsZXQgaW5jbHVkZSA9IHRlbXBsYXRlLmF0dHIoXCJqc3RsLWluY2x1ZGVcIik7XG5cdFx0XHRpbmNsdWRlID0gYXdhaXQgcmVzb2x2ZXIucmVzb2x2ZVRleHQoaW5jbHVkZSk7XG5cdFx0XHRpbmNsdWRlID0gbmV3IFVSTChpbmNsdWRlLCBsb2NhdGlvbik7XG5cdFx0XHRpbmNsdWRlID0gYXdhaXQgVGVtcGxhdGUubG9hZChpbmNsdWRlKTtcblxuXHRcdFx0Y29uc3QgbW9kZSA9IHRlbXBsYXRlLmF0dHIoXCJqc3RsLWluY2x1ZGUtbW9kZVwiKSB8fCBcInJlcGxhY2VcIjtcblxuXHRcdFx0Y29uc3Qgc3ViQ29udGV4dCA9IGNvbnRleHQuc3ViQ29udGV4dCh7IHRlbXBsYXRlOiBpbmNsdWRlLCBjb250YWluZXI6IGNvbnRleHQuY29udGVudCwgbW9kZX0pO1xuXHRcdFx0YXdhaXQgcmVuZGVyZXIucmVuZGVyKHN1YkNvbnRleHQpO1xuXHRcdFx0YXdhaXQgc3ViQ29udGV4dC5yZWFkeSgpO1xuXHRcdFx0Y29udGV4dC5pZ25vcmUgPSB0cnVlO1xuXHRcdFx0Y29udGV4dC5zdG9wID0gZmFsc2U7XG5cblx0XHRcdHJldHVybiBjb250ZXh0O1xuXHRcdH0gY2F0Y2ggKGUpIHtcblx0XHRcdGNvbnNvbGUuZXJyb3IoZSwgY29udGV4dC50ZW1wbGF0ZSk7XG5cdFx0XHRyZXR1cm4gY29udGV4dDtcblx0XHR9XG5cdH1cbn1cblxuRGlyZWN0aXZlLmRlZmluZSh7IGRpcmVjdGl2ZTogbmV3IEluY2x1ZGUoKSB9KTtcbiIsImltcG9ydCBEaXJlY3RpdmUgZnJvbSBcIi4uL0RpcmVjdGl2ZS5qc1wiO1xuaW1wb3J0IFJlcGxhY2UgZnJvbSBcIi4uL2VsZW1lbnRzL1JlcGxhY2UuanNcIjtcblxuY29uc3QgTUFSS0VSX0lHTk9SRSA9IFwianN0bC1pZ25vcmVcIjtcbmNvbnN0IE1BUktFUl9JR05PUkVfQ0hJTERTID0gXCJqc3RsLWlnbm9yZS1jaGlsZHNcIjtcbmNvbnN0IE1BUktFUl9BU1lOQyA9IFwianN0bC1hc3luY1wiO1xuY29uc3QgTUFSS0VSX1RBR05BTUUgPSBcImpzdGwtdGFnbmFtZVwiO1xuY29uc3QgTUFSS0VSX0lTID0gXCJpc1wiO1xuXG5jbGFzcyBJbml0aWFsIGV4dGVuZHMgRGlyZWN0aXZlIHtcblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0c3VwZXIoKTtcblx0fVxuXG5cdGdldCBuYW1lKCkge1xuXHRcdHJldHVybiBcImluaXRpYWxcIjtcblx0fVxuXHRnZXQgcmFuaygpIHtcblx0XHRyZXR1cm4gRGlyZWN0aXZlLk1JTl9SQU5LO1xuXHR9XG5cdGdldCBwaGFzZSgpIHtcblx0XHRyZXR1cm4gRGlyZWN0aXZlLlBIQVNFLmluaXQ7XG5cdH1cblxuXHRhc3luYyBleGVjdXRlKGNvbnRleHQpIHtcblx0XHRjb25zdCB7IHRlbXBsYXRlLCByZW5kZXJlciwgcmVzb2x2ZXIgfSA9IGNvbnRleHQ7XG5cdFx0aWYgKCEodGVtcGxhdGUgaW5zdGFuY2VvZiBFbGVtZW50KSkge1xuXHRcdFx0Y29udGV4dC5jb250ZW50ID0gZG9jdW1lbnQuaW1wb3J0Tm9kZSh0ZW1wbGF0ZSwgdHJ1ZSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGlmICh0ZW1wbGF0ZS5oYXNBdHRyaWJ1dGUoTUFSS0VSX0lHTk9SRSkpIHtcblx0XHRcdFx0Y29udGV4dC5jb250ZW50ID0gZG9jdW1lbnQuaW1wb3J0Tm9kZSh0ZW1wbGF0ZSwgdHJ1ZSk7XG5cdFx0XHRcdGNvbnRleHQuY29udGVudC5yZW1vdmVBdHRyaWJ1dGUoTUFSS0VSX0lHTk9SRSk7XG5cdFx0XHRcdGNvbnRleHQuc3RvcCA9IHRydWU7XG5cdFx0XHRcdGNvbnRleHQuaWdub3JlID0gdHJ1ZTtcblx0XHRcdH0gZWxzZSBpZiAoZmFsc2UgJiYgdGVtcGxhdGUuaGFzQXR0cmlidXRlKE1BUktFUl9BU1lOQykpIHtcblx0XHRcdFx0Y29udGV4dC5jb250ZW50ID0gbmV3IFJlcGxhY2UoKTtcblx0XHRcdFx0dGVtcGxhdGUuYXR0cihNQVJLRVJfQVNZTkMsIG51bGwpO1xuXHRcdFx0XHRjb25zdCByZW5kZXJPcHRpb24gPSBjb250ZXh0LnRvUmVuZGVyT3B0aW9uKHsgbW9kZTogXCJyZXBsYWNlXCIsIHRhcmdldDogY29udGV4dC5jb250ZW50IH0pO1xuXHRcdFx0XHRzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRcdFx0XHRyZW5kZXJlci5yZW5kZXIocmVuZGVyT3B0aW9uKTtcblx0XHRcdFx0fSwgcGFyc2VJbnQodGVtcGxhdGUuYXR0cihNQVJLRVJfQVNZTkMpIHx8IFwiMjUwXCIpIHx8IDI1MCk7XG5cdFx0XHRcdGNvbnRleHQuc3RvcCA9IHRydWU7XG5cdFx0XHRcdGNvbnRleHQuaWdub3JlID0gdHJ1ZTtcblx0XHRcdH0gZWxzZSBpZiAodGVtcGxhdGUgaW5zdGFuY2VvZiBIVE1MVGVtcGxhdGVFbGVtZW50KSB7XG5cdFx0XHRcdGNvbnRleHQuY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGVtcGxhdGUudGFnTmFtZSk7XG5cdFx0XHRcdGNvbnN0IHN1YkNvbnRleHQgPSBjb250ZXh0LnN1YkNvbnRleHQoeyB0ZW1wbGF0ZTogdGVtcGxhdGUuY29udGVudC5jaGlsZE5vZGVzLCBjb250YWluZXI6IGNvbnRleHQuY29udGVudC5jb250ZW50IH0pO1xuXHRcdFx0XHRhd2FpdCByZW5kZXJlci5yZW5kZXIoc3ViQ29udGV4dCk7XG5cdFx0XHRcdGNvbnRleHQuc3RvcCA9IGZhbHNlO1xuXHRcdFx0XHRjb250ZXh0Lmlnbm9yZSA9IHRydWU7XG5cdFx0XHR9IGVsc2UgaWYgKHRlbXBsYXRlLmhhc0F0dHJpYnV0ZShNQVJLRVJfVEFHTkFNRSkpIHtcblx0XHRcdFx0bGV0IHRhZ25hbWUgPSB0ZW1wbGF0ZS5hdHRyKE1BUktFUl9UQUdOQU1FKS50cmltKCk7XG5cdFx0XHRcdGlmICh0YWduYW1lLmxlbmd0aCA+IDApIGNvbnRleHQuY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoYXdhaXQgcmVzb2x2ZXIucmVzb2x2ZVRleHQodGVtcGxhdGUuYXR0cihNQVJLRVJfVEFHTkFNRSkpKTtcblx0XHRcdFx0ZWxzZSB7XG5cdFx0XHRcdFx0Y29udGV4dC5jb250ZW50ID0gZG9jdW1lbnQuaW1wb3J0Tm9kZSh0ZW1wbGF0ZSwgdHJ1ZSk7XG5cdFx0XHRcdFx0Y29udGV4dC5zdG9wID0gdHJ1ZTtcblx0XHRcdFx0XHRjb250ZXh0Lmlnbm9yZSA9IHRydWU7XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSBpZiAodGVtcGxhdGUudGFnTmFtZSkge1xuXHRcdFx0XHRsZXQgaXMgPSB0ZW1wbGF0ZS5hdHRyKE1BUktFUl9JUyk7XG5cdFx0XHRcdGlmIChpcykge1xuXHRcdFx0XHRcdGlzID0gYXdhaXQgcmVzb2x2ZXIucmVzb2x2ZVRleHQoaXMpO1xuXHRcdFx0XHRcdGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRlbXBsYXRlLnRhZ05hbWUsIHsgaXMgfSk7XG5cdFx0XHRcdFx0ZWxlbWVudC5hdHRyKE1BUktFUl9JUywgaXMpO1xuXHRcdFx0XHRcdGNvbnRleHQuY29udGVudCA9IGVsZW1lbnQ7XG5cdFx0XHRcdH0gZWxzZSBjb250ZXh0LmNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRlbXBsYXRlLnRhZ05hbWUpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Y29udGV4dC5jb250ZW50ID0gZG9jdW1lbnQuaW1wb3J0Tm9kZSh0ZW1wbGF0ZSwgdHJ1ZSk7XG5cdFx0XHRcdGNvbnRleHQuc3RvcCA9IHRydWU7XG5cdFx0XHRcdGNvbnRleHQuaWdub3JlID0gdHJ1ZTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKCFjb250ZXh0LnN0b3AgJiYgdGVtcGxhdGUuaGFzQXR0cmlidXRlKE1BUktFUl9JR05PUkVfQ0hJTERTKSkge1xuXHRcdFx0XHRjb250ZXh0Lmlnbm9yZSA9IHRydWU7XG5cdFx0XHRcdGNvbnN0IGNsb25lID0gZG9jdW1lbnQuaW1wb3J0Tm9kZSh0ZW1wbGF0ZSwgdHJ1ZSk7XG5cdFx0XHRcdGlmICh0ZW1wbGF0ZSBpbnN0YW5jZW9mIEhUTUxUZW1wbGF0ZUVsZW1lbnQpIGNvbnRleHQuY29udGVudC5jb250ZW50LmFwcGVuZChjbG9uZS5jb250ZW50KTtcblx0XHRcdFx0ZWxzZSBjb250ZXh0LmNvbnRlbnQuYXBwZW5kKGNsb25lLmNoaWxkTm9kZXMpO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiBjb250ZXh0O1xuXHR9XG59XG5cbkRpcmVjdGl2ZS5kZWZpbmUoeyBkaXJlY3RpdmU6IG5ldyBJbml0aWFsKCkgfSk7XG4iLCJpbXBvcnQgRGlyZWN0aXZlIGZyb20gXCIuLi9EaXJlY3RpdmUuanNcIjtcbmltcG9ydCBFeHByZXNzaW9uUmVzb2x2ZXIgZnJvbSBcIkBkZWZhdWx0LWpzL2RlZmF1bHRqcy1leHByZXNzaW9uLWxhbmd1YWdlL3NyYy9FeHByZXNzaW9uUmVzb2x2ZXIuanNcIjtcblxuY29uc3QgTkFNRSA9IFwib24tZmluaXNoZWRcIjtcbmNvbnN0IEFUVFJJQlVURV9PTl9GSU5JU0hFRCA9IGBqc3RsLSR7TkFNRX1gO1xuY29uc3QgQVRUUklCVVRFX09OX0ZJTklTSEVEX0FTWU5DID0gYCR7QVRUUklCVVRFX09OX0ZJTklTSEVEfS1hc3luY2A7XG5cbmNsYXNzIE9uRmluaXNoZWQgZXh0ZW5kcyBEaXJlY3RpdmUge1xuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRzdXBlcigpO1xuXHR9XG5cblx0Z2V0IG5hbWUoKSB7IHJldHVybiBOQU1FIH1cblx0Z2V0IHJhbmsoKSB7IHJldHVybiBEaXJlY3RpdmUuTUFYX1JBTksgfVxuXHRnZXQgcGhhc2UoKSB7IHJldHVybiBEaXJlY3RpdmUuUEhBU0UuZmluaXNoIH1cblxuXG5cblx0YXN5bmMgZXhlY3V0ZShjb250ZXh0KSB7XG5cdFx0Y29uc3QgeyB0ZW1wbGF0ZSwgY29udGVudCwgcm9vdCB9ID0gY29udGV4dDtcblx0XHRpZiAoISh0ZW1wbGF0ZSBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSB8fCAhdGVtcGxhdGUuaGFzQXR0cmlidXRlKEFUVFJJQlVURV9PTl9GSU5JU0hFRCkpXG5cdFx0XHRyZXR1cm4gY29udGV4dDtcblxuXHRcdGNvbnN0IGV4cHJlc3Npb24gPSB0ZW1wbGF0ZS5hdHRyKEFUVFJJQlVURV9PTl9GSU5JU0hFRCk7XG5cdFx0Y29uc3QgYXN5bmNDYWxsID0gdGVtcGxhdGUuaGFzQXR0cmlidXRlKEFUVFJJQlVURV9PTl9GSU5JU0hFRF9BU1lOQyk7XG5cblx0XHRjb25zdCBkYXRhID0ge1xuXHRcdFx0JGVsZW1lbnQ6IGNvbnRlbnQsXG5cdFx0XHQkcm9vdDogcm9vdCxcblx0XHRcdCR0ZW1wbGF0ZTogdGVtcGxhdGVcblx0XHR9O1xuXHRcdGNvbnN0IHJlc29sdmVyID0gbmV3IEV4cHJlc3Npb25SZXNvbHZlcih7IGNvbnRleHQ6IGRhdGEsIG5hbWU6IFwianN0bC1kYXRhXCIsIHBhcmVudDogY29udGV4dC5yZXNvbHZlciB9KTtcblxuXG5cdFx0Y29udGV4dC5maW5pc2hlZChhc3luYyAoKSA9PiB7XG5cdFx0XHR0cnkge1xuXHRcdFx0XHRpZighYXN5bmNDYWxsKVxuXHRcdFx0XHRcdHJldHVybiByZXNvbHZlci5yZXNvbHZlKGV4cHJlc3Npb24sIG51bGwpO1xuXHRcdFx0XHRcdFxuXHRcdFx0XHRyZXNvbHZlci5yZXNvbHZlKGV4cHJlc3Npb24sIG51bGwpO1xuXHRcdFx0fSBjYXRjaCAoZSkge1xuXHRcdFx0XHRjb25zb2xlLmVycm9yKGUpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXG5cdFx0cmV0dXJuIGNvbnRleHQ7XG5cdH1cbn1cblxuRGlyZWN0aXZlLmRlZmluZSh7IGRpcmVjdGl2ZTogbmV3IE9uRmluaXNoZWQoKSB9KTsiLCJpbXBvcnQgRGlyZWN0aXZlIGZyb20gXCIuLi9EaXJlY3RpdmUuanNcIjtcbmltcG9ydCBFeHByZXNzaW9uUmVzb2x2ZXIgZnJvbSBcIkBkZWZhdWx0LWpzL2RlZmF1bHRqcy1leHByZXNzaW9uLWxhbmd1YWdlL3NyYy9FeHByZXNzaW9uUmVzb2x2ZXIuanNcIjtcblxuY29uc3QgRElSRUNUSVZFTkFNRSA9IFwianN0bC1yZXBlYXRcIjtcbmNvbnN0IElHTk9SRURJUkVDVElWRSA9IG5ldyBTZXQoW0RJUkVDVElWRU5BTUVdKTtcblxuY29uc3QgQVRUUklCVVRFID0ge1xuXHREQVRBOiBgJHtESVJFQ1RJVkVOQU1FfWAsXG5cdFZBUjogYCR7RElSRUNUSVZFTkFNRX0tdmFyYCxcblx0U1RBVFVTOiBgJHtESVJFQ1RJVkVOQU1FfS1zdGF0dXNgLFxuXHRDT1VOVDogYCR7RElSRUNUSVZFTkFNRX0tY291bnRgLFxuXHRTVEFSVDogYCR7RElSRUNUSVZFTkFNRX0tc3RhcnRgLFxuXHRTVEVQOiBgJHtESVJFQ1RJVkVOQU1FfS1zdGVwYCxcblx0Q09ORElUSU9OOiBgJHtESVJFQ1RJVkVOQU1FfS1jb25kaXRpb25gLFxufTtcblxuY29uc3QgZG9Db3VudCA9IGFzeW5jIChvcHRpb24pID0+IHtcblx0bGV0IHsgc3RhcnQsIHN0ZXAsIGNvdW50LCB2YXJuYW1lLCBzdGF0dXMsIHJlc29sdmVyIH0gPSBvcHRpb247XG5cdGNvdW50ID0gYXdhaXQgcmVzb2x2ZXIucmVzb2x2ZShjb3VudCk7XG5cdGNvbnN0IGxlbmd0aCA9IHN0YXJ0ICsgY291bnQgKiBzdGVwO1xuXHRsZXQgc3RvcCA9IGZhbHNlO1xuXHRmb3IgKGxldCBpID0gc3RhcnQ7IGkgPCBsZW5ndGggJiYgIXN0b3A7IGkgPSBpICsgc3RlcCkge1xuXHRcdGNvbnN0IGl0ZXJhdGlvbiA9IHt9O1xuXHRcdGl0ZXJhdGlvblt2YXJuYW1lXSA9IGk7XG5cdFx0aXRlcmF0aW9uW3N0YXR1c10gPSB7XG5cdFx0XHRpbmRleDogaSxcblx0XHRcdG51bWJlcjogaSArIDEsXG5cdFx0XHRzdGVwLFxuXHRcdFx0Y291bnQsXG5cdFx0fTtcblx0XHRzdG9wID0gIShhd2FpdCBpdGVyYXRlKGl0ZXJhdGlvbiwgb3B0aW9uKSk7XG5cdH1cbn07XG5cbmNvbnN0IGRvUmVwZWF0ID0gYXN5bmMgKG9wdGlvbikgPT4ge1xuXHRsZXQgeyBkYXRhLCBzdGFydCwgc3RlcCwgY291bnQsIHZhcm5hbWUsIHN0YXR1cywgcmVzb2x2ZXIgfSA9IG9wdGlvbjtcblxuXHRkYXRhID0gYXdhaXQgcmVzb2x2ZXIucmVzb2x2ZShkYXRhKTtcblx0bGV0IGFycmF5ID0gZGF0YTtcblx0aWYgKCEoZGF0YSBpbnN0YW5jZW9mIEFycmF5KSkgYXJyYXkgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhkYXRhKTtcblxuXHRjb3VudCA9IGNvdW50ICE9IFwiXCIgPyBhd2FpdCByZXNvbHZlci5yZXNvbHZlKGNvdW50LCAwKSA6IG51bGw7XG5cdGNvbnN0IGxlbmd0aCA9IGNvdW50ID8gTWF0aC5taW4oc3RhcnQgKyBjb3VudCwgYXJyYXkubGVuZ3RoKSA6IGFycmF5Lmxlbmd0aDtcblx0bGV0IHN0b3AgPSBmYWxzZTtcblx0Zm9yIChsZXQgaSA9IHN0YXJ0OyBpIDwgbGVuZ3RoICYmICFzdG9wOyBpID0gaSArIHN0ZXApIHtcblx0XHRjb25zdCBpdGVyYXRpb24gPSB7fTtcblx0XHRpdGVyYXRpb25bdmFybmFtZV0gPSBkYXRhW2ldO1xuXHRcdGl0ZXJhdGlvbltzdGF0dXNdID0ge1xuXHRcdFx0aW5kZXg6IGksXG5cdFx0XHRudW1iZXI6IGkgKyAxLFxuXHRcdFx0Y291bnQ6IGxlbmd0aCxcblx0XHRcdGRhdGEsXG5cdFx0fTtcblx0XHRzdG9wID0gIShhd2FpdCBpdGVyYXRlKGl0ZXJhdGlvbiwgb3B0aW9uKSk7XG5cdH1cbn07XG5cbmNvbnN0IGl0ZXJhdGUgPSBhc3luYyAoZGF0YSwgb3B0aW9uKSA9PiB7XG5cdGxldCB7IHRlbXBsYXRlLCByZXNvbHZlciwgcmVuZGVyZXIsIGNvbmRpdGlvbiwgY29udGV4dCB9ID0gb3B0aW9uO1xuXHRyZXNvbHZlciA9IG5ldyBFeHByZXNzaW9uUmVzb2x2ZXIoeyBjb250ZXh0OiBkYXRhLCBuYW1lOiBESVJFQ1RJVkVOQU1FLCBwYXJlbnQ6IHJlc29sdmVyIH0pO1xuXG5cdGNvbmRpdGlvbiA9IGNvbmRpdGlvbiA/IGF3YWl0IHJlc29sdmVyLnJlc29sdmUoY29uZGl0aW9uLCBmYWxzZSkgOiBmYWxzZTtcblx0aWYgKGNvbmRpdGlvbikgcmV0dXJuIGZhbHNlO1xuXG5cdGNvbnN0IGl0ZW1Db250ZXh0ID0gIGNvbnRleHQuc3ViQ29udGV4dCh7IHJlc29sdmVyLCB0ZW1wbGF0ZSwgbW9kZTogXCJhcHBlbmRcIiwgaWdub3JlRGlyZWN0aXZlOiBJR05PUkVESVJFQ1RJVkUgfSlcblx0YXdhaXQgcmVuZGVyZXIucmVuZGVyKGl0ZW1Db250ZXh0KTtcblx0YXdhaXQgaXRlbUNvbnRleHQucmVhZHkoKTtcblxuXHRyZXR1cm4gdHJ1ZTtcbn07XG5cbmNsYXNzIFJlcGVhdCBleHRlbmRzIERpcmVjdGl2ZSB7XG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHN1cGVyKCk7XG5cdH1cblxuXHRnZXQgbmFtZSgpIHtcblx0XHRyZXR1cm4gRElSRUNUSVZFTkFNRTtcblx0fVxuXHRnZXQgcmFuaygpIHtcblx0XHRyZXR1cm4gRGlyZWN0aXZlLk1JTl9SQU5LICsgMztcblx0fVxuXHRnZXQgcGhhc2UoKSB7XG5cdFx0cmV0dXJuIERpcmVjdGl2ZS5QSEFTRS50ZW1wbGF0ZTtcblx0fVxuXG5cdGFzeW5jIGV4ZWN1dGUoY29udGV4dCkge1xuXHRcdGlmICghKGNvbnRleHQudGVtcGxhdGUgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkgfHwgKCFjb250ZXh0LnRlbXBsYXRlLmF0dHIoQVRUUklCVVRFLkRBVEEpICYmICFjb250ZXh0LnRlbXBsYXRlLmF0dHIoQVRUUklCVVRFLkNPVU5UKSkpIHJldHVybiBjb250ZXh0O1xuXG5cdFx0dHJ5IHtcblx0XHRcdGNvbnN0IHsgdGVtcGxhdGUsIHJlc29sdmVyLCByZW5kZXJlciwgY29udGVudCwgY29udGFpbmVyIH0gPSBjb250ZXh0O1xuXHRcdFx0Y29uc3Qgb3B0aW9uID0ge1xuXHRcdFx0XHRkYXRhOiAodGVtcGxhdGUuYXR0cihBVFRSSUJVVEUuREFUQSkgfHwgXCJcIikudHJpbSgpLFxuXHRcdFx0XHRjb3VudDogKHRlbXBsYXRlLmF0dHIoQVRUUklCVVRFLkNPVU5UKSB8fCBcIlwiKS50cmltKCksXG5cdFx0XHRcdHN0YXJ0OiBhd2FpdCByZXNvbHZlci5yZXNvbHZlKHRlbXBsYXRlLmF0dHIoQVRUUklCVVRFLlNUQVJUKSB8fCBcIjBcIiksXG5cdFx0XHRcdHN0ZXA6IGF3YWl0IHJlc29sdmVyLnJlc29sdmUodGVtcGxhdGUuYXR0cihBVFRSSUJVVEUuU1RFUCkgfHwgXCIxXCIpLFxuXHRcdFx0XHR2YXJuYW1lOiAodGVtcGxhdGUuYXR0cihBVFRSSUJVVEUuVkFSKSB8fCBcIml0ZW1cIikudHJpbSgpLFxuXHRcdFx0XHRzdGF0dXM6ICh0ZW1wbGF0ZS5hdHRyKEFUVFJJQlVURS5TVEFUVVMpIHx8IFwic3RhdHVzXCIpLnRyaW0oKSxcblx0XHRcdFx0Y29uZGl0aW9uOiB0ZW1wbGF0ZS5hdHRyKEFUVFJJQlVURS5DT05ESVRJT04pLFxuXHRcdFx0XHR0ZW1wbGF0ZTogdGVtcGxhdGUsXG5cdFx0XHRcdHRhZ25hbWU6IGNvbnRlbnQudGFnTmFtZSxcblx0XHRcdFx0cmVzb2x2ZXIsXG5cdFx0XHRcdHJlbmRlcmVyLFxuXHRcdFx0XHRjb250YWluZXIsXG5cdFx0XHRcdGNvbnRleHQsXG5cdFx0XHR9O1xuXHRcdFx0aWYgKCghb3B0aW9uLmRhdGEgfHwgb3B0aW9uLmRhdGEgPT0gXCJcIikgJiYgb3B0aW9uLmNvdW50KSBhd2FpdCBkb0NvdW50KG9wdGlvbik7XG5cdFx0XHRlbHNlIGF3YWl0IGRvUmVwZWF0KG9wdGlvbik7XG5cdFx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRcdGNvbnNvbGUuZXJyb3IoXCJlcnJvciBhdCBqc3RsLXJlcGVhdDpcIiwgZXJyb3IpO1xuXHRcdH1cblxuXHRcdGNvbnRleHQuY29udGVudCA9IG51bGw7XG5cdFx0Y29udGV4dC5zdG9wID0gdHJ1ZTtcblx0XHRjb250ZXh0Lmlnbm9yZSA9IHRydWU7XG5cdFx0cmV0dXJuIGNvbnRleHQ7XG5cdH1cbn1cblxuRGlyZWN0aXZlLmRlZmluZSh7IGRpcmVjdGl2ZTogbmV3IFJlcGVhdCgpIH0pO1xuIiwiaW1wb3J0IERpcmVjdGl2ZSBmcm9tIFwiLi4vRGlyZWN0aXZlLmpzXCI7XG5cbmNvbnN0IERFRkFVTFRfT1BUSU9OID0ge1xuXHRtb2RlOiBcInRleHRcIixcblx0dW5zZWN1cmU6IGZhbHNlLFxuXHRwcmV2ZW50Rm9ybWF0IDogZmFsc2UsXG5cdG1heExlbmd0aDogMFx0XG59O1xuXG5jb25zdCBTRUNVUkVfSFRNTF9GSUxURVIgPSBcInNjcmlwdCwgc3R5bGUsIGJvZHksIGh0bWwsIGhlYWQsIG9iamVjdCwgbGlua1wiO1xuXG5jb25zdCByZWFkT3B0aW9uID0gYXN5bmMgKHBhcmVudCwgY29udGV4dCkgPT4ge1xuXHRjb25zdCByZXNvbHZlciA9IGNvbnRleHQucmVzb2x2ZXI7XG5cdHJldHVybiB7XG5cdFx0bW9kZTogYXdhaXQgcmVzb2x2ZXIucmVzb2x2ZVRleHQoKHBhcmVudC5hdHRyKFwianN0bC10ZXh0LWNvbnRlbnQtdHlwZVwiKSB8fCBcInRleHRcIikudHJpbSgpLnRvTG93ZXJDYXNlKCkpLFxuXHRcdHVuc2VjdXJlOiBwYXJlbnQuaGFzQXR0cmlidXRlKFwianN0bC10ZXh0LXVuc2VjdXJlXCIpLFxuXHRcdHByZXZlbnRGb3JtYXQ6ICEhcGFyZW50LmF0dHIoXCJqc3RsLXRleHQtcHJldmVudC1mb3JtYXRcIikgfHwgZmFsc2UsXG5cdFx0bWF4TGVuZ3RoOiBwYXJzZUludChhd2FpdCByZXNvbHZlci5yZXNvbHZlVGV4dChwYXJlbnQuYXR0cihcImpzdGwtdGV4dC10cmltLWxlbmd0aFwiKSB8fCBcIjBcIikpXG5cdH07XG59O1xuXG5jb25zdCB0cmltVGV4dExlbmd0aCA9ICh0ZXh0LCBsZW5ndGgpID0+IHtcblx0cmV0dXJuIHRleHQubGVuZ3RoID4gbGVuZ3RoID8gdGV4dC5zdWJzdHJpbmcoMCwgbGVuZ3RoIC0gMykudHJpbSgpICsgXCIuLi5cIiA6IHRleHQ7XG59O1xuXG5jb25zdCBNT0RFUyA9IHtcblx0XCJ0ZXh0XCIgOiBhc3luYyAob3B0aW9uLCBjb250ZXh0KSA9PiB7XG5cdFx0Y29uc3Qge2NvbnRlbnQsIHJlc29sdmVyLCB0ZW1wbGF0ZX0gPSBjb250ZXh0O1xuXHRcdFxuXHRcdGxldCB0ZXh0ID0gYXdhaXQgcmVzb2x2ZXIucmVzb2x2ZVRleHQodGVtcGxhdGUudGV4dENvbnRlbnQpO1x0XHRcblx0XHR0ZXh0ID0gY3JlYXRlKHRleHQsdHJ1ZSkuY29udGVudC50ZXh0Q29udGVudDtcblx0XHRpZihvcHRpb24ubWF4TGVuZ3RoID4gMClcblx0XHRcdHRleHQgPSB0cmltVGV4dExlbmd0aCh0ZXh0LCBvcHRpb24ubWF4TGVuZ3RoKTtcdFx0XG5cdFx0XG5cdFx0Y29udGVudC50ZXh0Q29udGVudCA9IHRleHQ7XHRcdFxuXHR9LFxuXHRcImh0bWxcIjogYXN5bmMgKG9wdGlvbiwgY29udGV4dCkgPT4ge1xuXHRcdGNvbnN0IHtyZXNvbHZlciwgdGVtcGxhdGV9ID0gY29udGV4dDtcblx0XHRcblx0XHRsZXQgY29udGVudCA9IGF3YWl0IHJlc29sdmVyLnJlc29sdmVUZXh0KHRlbXBsYXRlLnRleHRDb250ZW50KTtcdFx0XG5cdFx0Y29udGVudCA9IGNyZWF0ZShjb250ZW50LHRydWUpO1x0XHRcblx0XHRjb250ZW50ID0gZG9jdW1lbnQuaW1wb3J0Tm9kZShjb250ZW50LmNvbnRlbnQsIHRydWUpO1xuXHRcdFxuXHRcdGlmKG9wdGlvbi51bnNlY3VyZSlcblx0XHRcdGNvbnRleHQuY29udGVudCA9IGNvbnRlbnQ7XHRcdFx0XG5cdFx0ZWxzZXtcblx0XHRcdGNvbnRlbnQuZmluZChTRUNVUkVfSFRNTF9GSUxURVIpLnJlbW92ZSgpO1x0XHRcdFxuXHRcdFx0Y29udGV4dC5jb250ZW50ID0gY29udGVudDtcblx0XHR9XG5cdH1cbn07XG5cblxuY2xhc3MgVGV4dENvbnRlbnQgZXh0ZW5kcyBEaXJlY3RpdmUge1xuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRzdXBlcigpO1xuXHR9XG5cblx0Z2V0IG5hbWUoKSB7IHJldHVybiBcInRleHRcIiB9XG5cdGdldCByYW5rKCkgeyByZXR1cm4gRGlyZWN0aXZlLk1JTl9SQU5LICsgMSB9XG5cdGdldCBwaGFzZSgpIHsgcmV0dXJuIERpcmVjdGl2ZS5QSEFTRS5jb250ZW50IH1cblxuXG5cblx0YXN5bmMgZXhlY3V0ZShjb250ZXh0KSB7XG5cdFx0Y29uc3QgeyB0ZW1wbGF0ZSB9ID0gY29udGV4dDtcblx0XHRpZiAoISh0ZW1wbGF0ZSBpbnN0YW5jZW9mIFRleHQpIHx8IHRlbXBsYXRlLnRleHRDb250ZW50LnRyaW0oKS5sZW5ndGggPT0gMCB8fCAodGVtcGxhdGUucGFyZW50RWxlbWVudCAmJiB0ZW1wbGF0ZS5wYXJlbnRFbGVtZW50Lmhhc0F0dHJpYnV0ZShcImpzdGwtdGV4dC1pZ25vcmVcIikpKVxuXHRcdFx0cmV0dXJuIGNvbnRleHQ7XG5cblx0XHRjb25zdCBwYXJlbnQgPSB0ZW1wbGF0ZS5wYXJlbnRFbGVtZW50O1xuXHRcdGNvbnN0IG9wdGlvbiA9IHBhcmVudCA/IGF3YWl0IHJlYWRPcHRpb24ocGFyZW50LCBjb250ZXh0KSA6IERFRkFVTFRfT1BUSU9OO1xuXHRcdFxuXHRcdGNvbnN0ICBtb2RlID0gTU9ERVNbb3B0aW9uLm1vZGVdO1xuXHRcdGlmKCFtb2RlKVxuXHRcdFx0dGhyb3cgbmV3IEVycm9yKFwiVGV4dCBtb2RlIFxcXCJcIisgb3B0aW9uLm1vZGUgKyBcIlxcXCIgaXMgdW5zdXBwb3J0ZWQhXCIpO1xuXHRcdFxuXHRcdGF3YWl0IG1vZGUob3B0aW9uLCBjb250ZXh0KTtcblx0XHRcblx0XHRyZXR1cm4gY29udGV4dDtcblx0fVxufVxuXG5EaXJlY3RpdmUuZGVmaW5lKHsgZGlyZWN0aXZlOiBuZXcgVGV4dENvbnRlbnQoKSB9KTsiLCJpbXBvcnQgXCIuL0luaXRpYWwuanNcIjtcbmltcG9ydCBcIi4vRGF0YS5qc1wiO1xuaW1wb3J0IFwiLi9JZi5qc1wiO1xuaW1wb3J0IFwiLi9DaG9vc2UuanNcIjtcbmltcG9ydCBcIi4vSW5jbHVkZS5qc1wiO1xuaW1wb3J0IFwiLi9Gb3JlYWNoLmpzXCI7XG5pbXBvcnQgXCIuL1JlcGVhdC5qc1wiO1xuaW1wb3J0IFwiLi9UZXh0LmpzXCI7XG5pbXBvcnQgXCIuL0F0dHJpYnV0ZXMuanNcIjtcbmltcG9ydCBcIi4vQXR0YWNoRWxlbWVudC5qc1wiO1xuaW1wb3J0IFwiLi9PbkZpbmlzaGVkLmpzXCI7IiwiaW1wb3J0IEVsZW1lbnQgZnJvbSBcIi4uL0RpcmVjdGl2ZUVsZW1lbnQuanNcIlxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZXBsYWNlRWxlbWVudCBleHRlbmRzIEVsZW1lbnR7XG5cdGNvbnN0cnVjdG9yKCl7XG5cdFx0c3VwZXIoKTtcblx0XHRcblx0XHR0aGlzLmF0dGFjaFNoYWRvdyh7bW9kZTogJ29wZW4nfSk7XG5cdH1cblx0YXN5bmMgZXhlY3V0ZSh7dGVtcGxhdGUsIGNvbnRleHR9KXtcblx0XHRyZXR1cm4gY29udGV4dDtcblx0fTtcdFx0XG59XG50cnl7Y3VzdG9tRWxlbWVudHMuZGVmaW5lKFwianN0bC1yZXBsYWNlXCIsIFJlcGxhY2VFbGVtZW50KTt9Y2F0Y2goZSl7fS8vaWdub3JlIiwiaW1wb3J0IFwiLi9SZXBsYWNlLmpzXCIiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG5jb25zdCBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdGNvbnN0IGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHRjb25zdCBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdGlmICghKG1vZHVsZUlkIGluIF9fd2VicGFja19tb2R1bGVzX18pKSB7XG5cdFx0ZGVsZXRlIF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdFx0Y29uc3QgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyBtb2R1bGVJZCArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIvdmFsdWUgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKTsiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IFwiQGRlZmF1bHQtanMvZGVmYXVsdGpzLWV4dGRvbVwiO1xuaW1wb3J0IEdMT0JBTCBmcm9tIFwiQGRlZmF1bHQtanMvZGVmYXVsdGpzLWNvbW1vbi11dGlscy9zcmMvR2xvYmFsLmpzXCI7XG5pbXBvcnQge1RlbXBsYXRlLCBSZW5kZXJlciwgQ29udGV4dCwgRGlyZWN0aXZlLCBEaXJlY3RpdmVFbGVtZW50fSBmcm9tIFwiLi9pbmRleC5qc1wiXG5cbkdMT0JBTC5kZWZhdWx0anMgPSBHTE9CQUwuZGVmYXVsdGpzIHx8IHt9O1xuR0xPQkFMLmRlZmF1bHRqcy5qc3RsID0gR0xPQkFMLmRlZmF1bHRqcy50bCA9IEdMT0JBTC5kZWZhdWx0anMudGwgfHwge1xuXHRWRVJTSU9OIDogXCIke3ZlcnNpb259XCIsXG5cdFRlbXBsYXRlLFxuXHRSZW5kZXJlcixcblx0Q29udGV4dCxcblx0RGlyZWN0aXZlLFxuXHREaXJlY3RpdmVFbGVtZW50XG59O1xuXG5leHBvcnQge1RlbXBsYXRlLCBSZW5kZXJlciwgQ29udGV4dCwgRGlyZWN0aXZlLCBEaXJlY3RpdmVFbGVtZW50fTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==