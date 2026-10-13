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
		data = new URL(data, location);
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
			first: i === start,
			last: i >= length - step,
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
	const isObject = !(data instanceof Array);
	if (isObject) array = Object.getOwnPropertyNames(data);

	count = count != "" ? await resolver.resolve(count, 0) : null;
	const length = count ? Math.min(start + count, array.length) : array.length;
	let stop = false;
	for (let i = start; i < length && !stop; i = i + step) {
		const iteration = {}
		iteration[varname] = isObject ? data[array[i]] : data[i];
		iteration[status] = {
			first: i === start,
			last: i >= length - step,
			step,
			index: i,
			number: i + 1,
			count: length,
			key: isObject ? array[i] : i,
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
			first: i === start,
			last: i >= length - step,
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
	const isObject = !(data instanceof Array);
	let array = data;
	if (isObject) array = Object.getOwnPropertyNames(data);

	count = count != "" ? await resolver.resolve(count, 0) : null;
	const length = count ? Math.min(start + count, array.length) : array.length;
	let stop = false;
	for (let i = start; i < length && !stop; i = i + step) {
		const iteration = {};
		iteration[varname] = isObject ? data[array[i]] : data[i];
		iteration[status] = {
			first: i === start,
			last: i >= length - step,
			step,
			index: i,
			number: i + 1,
			count: length,
			key: isObject ? array[i] : i,
			data
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
	maxLength: 0	
};

const SECURE_HTML_FILTER = "script, style, body, html, head, object, link";

const readOption = async (parent, context) => {
	const resolver = context.resolver;
	return {
		mode: await resolver.resolveText((parent.attr("jstl-text-content-type") || "text").trim().toLowerCase()),
		unsecure: parent.hasAttribute("jstl-text-unsecure"),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJvd3Nlci1kZWZhdWx0anMtdGVtcGxhdGUtbGFuZ3VhZ2UuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0E0QztBQUNvQjtBQUNoRTtBQUNBLGdEQUFNLGFBQWEsZ0RBQU07QUFDekIsZ0RBQU0sb0JBQW9CLGdEQUFNO0FBQ2hDLGNBQWMsUUFBUTtBQUN0QixjQUFjLHlFQUFVO0FBQ3hCO0FBQ0EsU0FBUyxvREFBSztBQUNkO0FBQ0E7QUFDQTtBQUNBLGdEQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0EsZ0RBQU07QUFDTjtBQUNBO0FBQ0E7QUFDQSxnREFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnREFBTTtBQUNOO0FBQ0EsdUNBQXVDLGdEQUFNO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEI7QUFDOUIsK0JBQStCO0FBQy9CO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEU7Ozs7Ozs7Ozs7Ozs7O0FDL0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ3VEO0FBQ0Y7QUFDMEI7QUFDL0U7QUFDQSxrRUFBZSxXQUFXLGdFQUFZLEVBQUUscUVBQWlCO0FBQ3pEO0FBQ0EscUVBQXFFLHFFQUFVO0FBQy9FO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDaEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUN1RDtBQUNGO0FBQ2M7QUFDbkU7QUFDQSxrRUFBZSxtQkFBbUIsZ0VBQVksRUFBRSx1RUFBbUI7QUFDbkU7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNkQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ3VEO0FBQ0Y7QUFDUTtBQUNNO0FBQ25FO0FBQ0Esa0VBQWUsU0FBUyxnRUFBWSxFQUFFLG9FQUFnQixFQUFFLHVFQUFtQixFOzs7Ozs7Ozs7Ozs7O0FDYjNFO0FBQ0E7QUFD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bXBsYXRlLWxhbmd1YWdlLy4vbm9kZV9tb2R1bGVzL0BkZWZhdWx0LWpzL2RlZmF1bHRqcy1leHRkb20vaW5kZXguanMiLCJ3ZWJwYWNrOi8vQGRlZmF1bHQtanMvZGVmYXVsdGpzLXRlbXBsYXRlLWxhbmd1YWdlLy4vbm9kZV9tb2R1bGVzL0BkZWZhdWx0LWpzL2RlZmF1bHRqcy1leHRkb20vc3JjL0dsb2JhbC5qcyIsIndlYnBhY2s6Ly9AZGVmYXVsdC1qcy9kZWZhdWx0anMtdGVtcGxhdGUtbGFuZ3VhZ2UvLi9ub2RlX21vZHVsZXMvQGRlZmF1bHQtanMvZGVmYXVsdGpzLWV4dGRvbS9zcmMvZG9tL0RvY3VtZW50LmpzIiwid2VicGFjazovL0BkZWZhdWx0LWpzL2RlZmF1bHRqcy10ZW1wbGF0ZS1sYW5ndWFnZS8uL25vZGVfbW9kdWxlcy9AZGVmYXVsdC1qcy9kZWZhdWx0anMtZXh0ZG9tL3NyYy9kb20vRG9jdW1lbnRGcmFnbWVudC5qcyIsIndlYnBhY2s6Ly9AZGVmYXVsdC1qcy9kZWZhdWx0anMtdGVtcGxhdGUtbGFuZ3VhZ2UvLi9ub2RlX21vZHVsZXMvQGRlZmF1bHQtanMvZGVmYXVsdGpzLWV4dGRvbS9zcmMvZG9tL0VsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vQGRlZmF1bHQtanMvZGVmYXVsdGpzLXRlbXBsYXRlLWxhbmd1YWdlLy4vbm9kZV9tb2R1bGVzL0BkZWZhdWx0LWpzL2RlZmF1bHRqcy1leHRkb20vc3JjL2RvbS9FdmVudFRhcmdldC5qcyIsIndlYnBhY2s6Ly9AZGVmYXVsdC1qcy9kZWZhdWx0anMtdGVtcGxhdGUtbGFuZ3VhZ2UvLi9ub2RlX21vZHVsZXMvQGRlZmF1bHQtanMvZGVmYXVsdGpzLWV4dGRvbS9zcmMvZG9tL0hUTUxFbGVtZW50LmpzIiwid2VicGFjazovL0BkZWZhdWx0LWpzL2RlZmF1bHRqcy10ZW1wbGF0ZS1sYW5ndWFnZS8uL25vZGVfbW9kdWxlcy9AZGVmYXVsdC1qcy9kZWZhdWx0anMtZXh0ZG9tL3NyYy9kb20vSFRNTElucHV0RWxlbWVudC5qcyIsIndlYnBhY2s6Ly9AZGVmYXVsdC1qcy9kZWZhdWx0anMtdGVtcGxhdGUtbGFuZ3VhZ2UvLi9ub2RlX21vZHVsZXMvQGRlZmF1bHQtanMvZGVmYXVsdGpzLWV4dGRvbS9zcmMvZG9tL0hUTUxTZWxlY3RFbGVtZW50LmpzIiwid2VicGFjazovL0BkZWZhdWx0LWpzL2RlZmF1bHRqcy10ZW1wbGF0ZS1sYW5ndWFnZS8uL25vZGVfbW9kdWxlcy9AZGVmYXVsdC1qcy9kZWZhdWx0anMtZXh0ZG9tL3NyYy9kb20vSFRNTFRleHRBcmVhRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9AZGVmYXVsdC1qcy9kZWZhdWx0anMtdGVtcGxhdGUtbGFuZ3VhZ2UvLi9ub2RlX21vZHVsZXMvQGRlZmF1bHQtanMvZGVmYXVsdGpzLWV4dGRvbS9zcmMvZG9tL0h0bWxDb2xsZWN0aW9uLmpzIiwid2VicGFjazovL0BkZWZhdWx0LWpzL2RlZmF1bHRqcy10ZW1wbGF0ZS1sYW5ndWFnZS8uL25vZGVfbW9kdWxlcy9AZGVmYXVsdC1qcy9kZWZhdWx0anMtZXh0ZG9tL3NyYy9kb20vTm9kZS5qcyIsIndlYnBhY2s6Ly9AZGVmYXVsdC1qcy9kZWZhdWx0anMtdGVtcGxhdGUtbGFuZ3VhZ2UvLi9ub2RlX21vZHVsZXMvQGRlZmF1bHQtanMvZGVmYXVsdGpzLWV4dGRvbS9zcmMvZG9tL05vZGVMaXN0LmpzIiwid2VicGFjazovL0BkZWZhdWx0LWpzL2RlZmF1bHRqcy10ZW1wbGF0ZS1sYW5ndWFnZS8uL25vZGVfbW9kdWxlcy9AZGVmYXVsdC1qcy9kZWZhdWx0anMtZXh0ZG9tL3NyYy9kb20vZXh0ZW50aW9ucy9BdHRyaWJ1dGVTdXBwb3J0LmpzIiwid2VicGFjazovL0BkZWZhdWx0LWpzL2RlZmF1bHRqcy10ZW1wbGF0ZS1sYW5ndWFnZS8uL25vZGVfbW9kdWxlcy9AZGVmYXVsdC1qcy9kZWZhdWx0anMtZXh0ZG9tL3NyYy9kb20vZXh0ZW50aW9ucy9EYXRhU3VwcG9ydC5qcyIsIndlYnBhY2s6Ly9AZGVmYXVsdC1qcy9kZWZhdWx0anMtdGVtcGxhdGUtbGFuZ3VhZ2UvLi9ub2RlX21vZHVsZXMvQGRlZmF1bHQtanMvZGVmYXVsdGpzLWV4dGRvbS9zcmMvZG9tL2V4dGVudGlvbnMvRXZlbnRTdXBwb3J0LmpzIiwid2VicGFjazovL0BkZWZhdWx0LWpzL2RlZmF1bHRqcy10ZW1wbGF0ZS1sYW5ndWFnZS8uL25vZGVfbW9kdWxlcy9AZGVmYXVsdC1qcy9kZWZhdWx0anMtZXh0ZG9tL3NyYy9kb20vZXh0ZW50aW9ucy9IdG1sQ2xhc3NTdXBwb3J0LmpzIiwid2VicGFjazovL0BkZWZhdWx0LWpzL2RlZmF1bHRqcy10ZW1wbGF0ZS1sYW5ndWFnZS8uL25vZGVfbW9kdWxlcy9AZGVmYXVsdC1qcy9kZWZhdWx0anMtZXh0ZG9tL3NyYy9kb20vZXh0ZW50aW9ucy9MaXN0U3VwcG9ydC5qcyIsIndlYnBhY2s6Ly9AZGVmYXVsdC1qcy9kZWZhdWx0anMtdGVtcGxhdGUtbGFuZ3VhZ2UvLi9ub2RlX21vZHVsZXMvQGRlZmF1bHQtanMvZGVmYXVsdGpzLWV4dGRvbS9zcmMvZG9tL2V4dGVudGlvbnMvTGlzdFR5cGVCdWlsZGVyLmpzIiwid2VicGFjazovL0BkZWZhdWx0LWpzL2RlZmF1bHRqcy10ZW1wbGF0ZS1sYW5ndWFnZS8uL25vZGVfbW9kdWxlcy9AZGVmYXVsdC1qcy9kZWZhdWx0anMtZXh0ZG9tL3NyYy9kb20vZXh0ZW50aW9ucy9NYW5pcHVsYXRpb25TdXBwb3J0LmpzIiwid2VicGFjazovL0BkZWZhdWx0LWpzL2RlZmF1bHRqcy10ZW1wbGF0ZS1sYW5ndWFnZS8uL25vZGVfbW9kdWxlcy9AZGVmYXVsdC1qcy9kZWZhdWx0anMtZXh0ZG9tL3NyYy9kb20vZXh0ZW50aW9ucy9RdWVyeVN1cHBvcnQuanMiLCJ3ZWJwYWNrOi8vQGRlZmF1bHQtanMvZGVmYXVsdGpzLXRlbXBsYXRlLWxhbmd1YWdlLy4vbm9kZV9tb2R1bGVzL0BkZWZhdWx0LWpzL2RlZmF1bHRqcy1leHRkb20vc3JjL2RvbS9leHRlbnRpb25zL1JlYWR5RXZlbnRTdXBwb3J0LmpzIiwid2VicGFjazovL0BkZWZhdWx0LWpzL2RlZmF1bHRqcy10ZW1wbGF0ZS1sYW5ndWFnZS8uL25vZGVfbW9kdWxlcy9AZGVmYXVsdC1qcy9kZWZhdWx0anMtZXh0ZG9tL3NyYy9kb20vZXh0ZW50aW9ucy9TaG93SGlkZVN1cHBvcnQuanMiLCJ3ZWJwYWNrOi8vQGRlZmF1bHQtanMvZGVmYXVsdGpzLXRlbXBsYXRlLWxhbmd1YWdlLy4vbm9kZV9tb2R1bGVzL0BkZWZhdWx0LWpzL2RlZmF1bHRqcy1leHRkb20vc3JjL2RvbS9leHRlbnRpb25zL1ZhbHVlU3VwcG9ydC5qcyIsIndlYnBhY2s6Ly9AZGVmYXVsdC1qcy9kZWZhdWx0anMtdGVtcGxhdGUtbGFuZ3VhZ2UvLi9ub2RlX21vZHVsZXMvQGRlZmF1bHQtanMvZGVmYXVsdGpzLWV4dGRvbS9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vQGRlZmF1bHQtanMvZGVmYXVsdGpzLXRlbXBsYXRlLWxhbmd1YWdlLy4vbm9kZV9tb2R1bGVzL0BkZWZhdWx0LWpzL2RlZmF1bHRqcy1leHRkb20vc3JjL3V0aWxzL0RlbGVnYXRlckJ1aWxkZXIuanMiLCJ3ZWJwYWNrOi8vQGRlZmF1bHQtanMvZGVmYXVsdGpzLXRlbXBsYXRlLWxhbmd1YWdlLy4vbm9kZV9tb2R1bGVzL0BkZWZhdWx0LWpzL2RlZmF1bHRqcy1leHRkb20vc3JjL3V0aWxzL0V4dGVuZFByb3RvdHlwZS5qcyIsIndlYnBhY2s6Ly9AZGVmYXVsdC1qcy9kZWZhdWx0anMtdGVtcGxhdGUtbGFuZ3VhZ2UvLi9ub2RlX21vZHVsZXMvQGRlZmF1bHQtanMvZGVmYXVsdGpzLWV4dGRvbS9zcmMvdXRpbHMvRXh0ZW5kZXIuanMiLCJ3ZWJwYWNrOi8vQGRlZmF1bHQtanMvZGVmYXVsdGpzLXRlbXBsYXRlLWxhbmd1YWdlLy4vbm9kZV9tb2R1bGVzL0BkZWZhdWx0LWpzL2RlZmF1bHRqcy1leHRkb20vc3JjL3V0aWxzL1V0aWxzLmpzIiwid2VicGFjazovL0BkZWZhdWx0LWpzL2RlZmF1bHRqcy10ZW1wbGF0ZS1sYW5ndWFnZS8uL2luZGV4LmpzIiwid2VicGFjazovL0BkZWZhdWx0LWpzL2RlZmF1bHRqcy10ZW1wbGF0ZS1sYW5ndWFnZS8uL25vZGVfbW9kdWxlcy9AZGVmYXVsdC1qcy9kZWZhdWx0anMtY29tbW9uLXV0aWxzL3NyYy9HbG9iYWwuanMiLCJ3ZWJwYWNrOi8vQGRlZmF1bHQtanMvZGVmYXVsdGpzLXRlbXBsYXRlLWxhbmd1YWdlLy4vbm9kZV9tb2R1bGVzL0BkZWZhdWx0LWpzL2RlZmF1bHRqcy1jb21tb24tdXRpbHMvc3JjL09iamVjdFByb3BlcnR5LmpzIiwid2VicGFjazovL0BkZWZhdWx0LWpzL2RlZmF1bHRqcy10ZW1wbGF0ZS1sYW5ndWFnZS8uL25vZGVfbW9kdWxlcy9AZGVmYXVsdC1qcy9kZWZhdWx0anMtY29tbW9uLXV0aWxzL3NyYy9PYmplY3RVdGlscy5qcyIsIndlYnBhY2s6Ly9AZGVmYXVsdC1qcy9kZWZhdWx0anMtdGVtcGxhdGUtbGFuZ3VhZ2UvLi9ub2RlX21vZHVsZXMvQGRlZmF1bHQtanMvZGVmYXVsdGpzLWNvbW1vbi11dGlscy9zcmMvUHJvbWlzZVV0aWxzLmpzIiwid2VicGFjazovL0BkZWZhdWx0LWpzL2RlZmF1bHRqcy10ZW1wbGF0ZS1sYW5ndWFnZS8uL25vZGVfbW9kdWxlcy9AZGVmYXVsdC1qcy9kZWZhdWx0anMtY29tbW9uLXV0aWxzL3NyYy9qYXZhc2NyaXB0L1N0cmluZy5qcyIsIndlYnBhY2s6Ly9AZGVmYXVsdC1qcy9kZWZhdWx0anMtdGVtcGxhdGUtbGFuZ3VhZ2UvLi9ub2RlX21vZHVsZXMvQGRlZmF1bHQtanMvZGVmYXVsdGpzLWV4cHJlc3Npb24tbGFuZ3VhZ2UvaW5kZXguanMiLCJ3ZWJwYWNrOi8vQGRlZmF1bHQtanMvZGVmYXVsdGpzLXRlbXBsYXRlLWxhbmd1YWdlLy4vbm9kZV9tb2R1bGVzL0BkZWZhdWx0LWpzL2RlZmF1bHRqcy1leHByZXNzaW9uLWxhbmd1YWdlL3NyYy9Db2RlQ2FjaGUuanMiLCJ3ZWJwYWNrOi8vQGRlZmF1bHQtanMvZGVmYXVsdGpzLXRlbXBsYXRlLWxhbmd1YWdlLy4vbm9kZV9tb2R1bGVzL0BkZWZhdWx0LWpzL2RlZmF1bHRqcy1leHByZXNzaW9uLWxhbmd1YWdlL3NyYy9EZWZhdWx0VmFsdWUuanMiLCJ3ZWJwYWNrOi8vQGRlZmF1bHQtanMvZGVmYXVsdGpzLXRlbXBsYXRlLWxhbmd1YWdlLy4vbm9kZV9tb2R1bGVzL0BkZWZhdWx0LWpzL2RlZmF1bHRqcy1leHByZXNzaW9uLWxhbmd1YWdlL3NyYy9FeGVjdXRlci5qcyIsIndlYnBhY2s6Ly9AZGVmYXVsdC1qcy9kZWZhdWx0anMtdGVtcGxhdGUtbGFuZ3VhZ2UvLi9ub2RlX21vZHVsZXMvQGRlZmF1bHQtanMvZGVmYXVsdGpzLWV4cHJlc3Npb24tbGFuZ3VhZ2Uvc3JjL0V4ZWN1dGVyUmVnaXN0cnkuanMiLCJ3ZWJwYWNrOi8vQGRlZmF1bHQtanMvZGVmYXVsdGpzLXRlbXBsYXRlLWxhbmd1YWdlLy4vbm9kZV9tb2R1bGVzL0BkZWZhdWx0LWpzL2RlZmF1bHRqcy1leHByZXNzaW9uLWxhbmd1YWdlL3NyYy9FeHByZXNzaW9uUmVzb2x2ZXIuanMiLCJ3ZWJwYWNrOi8vQGRlZmF1bHQtanMvZGVmYXVsdGpzLXRlbXBsYXRlLWxhbmd1YWdlLy4vbm9kZV9tb2R1bGVzL0BkZWZhdWx0LWpzL2RlZmF1bHRqcy1leHByZXNzaW9uLWxhbmd1YWdlL3NyYy9FeHByZXNzaW9uU2Nhbm5lci5qcyIsIndlYnBhY2s6Ly9AZGVmYXVsdC1qcy9kZWZhdWx0anMtdGVtcGxhdGUtbGFuZ3VhZ2UvLi9ub2RlX21vZHVsZXMvQGRlZmF1bHQtanMvZGVmYXVsdGpzLWV4cHJlc3Npb24tbGFuZ3VhZ2Uvc3JjL1Jlc29sdmVyQ29udGV4dEhhbmRsZS5qcyIsIndlYnBhY2s6Ly9AZGVmYXVsdC1qcy9kZWZhdWx0anMtdGVtcGxhdGUtbGFuZ3VhZ2UvLi9ub2RlX21vZHVsZXMvQGRlZmF1bHQtanMvZGVmYXVsdGpzLWV4cHJlc3Npb24tbGFuZ3VhZ2Uvc3JjL1V0aWxzLmpzIiwid2VicGFjazovL0BkZWZhdWx0LWpzL2RlZmF1bHRqcy10ZW1wbGF0ZS1sYW5ndWFnZS8uL25vZGVfbW9kdWxlcy9AZGVmYXVsdC1qcy9kZWZhdWx0anMtZXhwcmVzc2lvbi1sYW5ndWFnZS9zcmMvZXhlY3V0ZXIvQ29udGV4dERlY29uc3RydWN0b3JFeGVjdXRlci5qcyIsIndlYnBhY2s6Ly9AZGVmYXVsdC1qcy9kZWZhdWx0anMtdGVtcGxhdGUtbGFuZ3VhZ2UvLi9ub2RlX21vZHVsZXMvQGRlZmF1bHQtanMvZGVmYXVsdGpzLWV4cHJlc3Npb24tbGFuZ3VhZ2Uvc3JjL2V4ZWN1dGVyL0NvbnRleHRPYmplY3RFeGVjdXRlci5qcyIsIndlYnBhY2s6Ly9AZGVmYXVsdC1qcy9kZWZhdWx0anMtdGVtcGxhdGUtbGFuZ3VhZ2UvLi9ub2RlX21vZHVsZXMvQGRlZmF1bHQtanMvZGVmYXVsdGpzLWV4cHJlc3Npb24tbGFuZ3VhZ2Uvc3JjL2V4ZWN1dGVyL1dpdGhTY29wZWRFeGVjdXRlci5qcyIsIndlYnBhY2s6Ly9AZGVmYXVsdC1qcy9kZWZhdWx0anMtdGVtcGxhdGUtbGFuZ3VhZ2UvLi9ub2RlX21vZHVsZXMvQGRlZmF1bHQtanMvZGVmYXVsdGpzLWV4cHJlc3Npb24tbGFuZ3VhZ2Uvc3JjL2V4ZWN1dGVyL2luZGV4LmpzIiwid2VicGFjazovL0BkZWZhdWx0LWpzL2RlZmF1bHRqcy10ZW1wbGF0ZS1sYW5ndWFnZS8uL3NyYy9Db250ZXh0LmpzIiwid2VicGFjazovL0BkZWZhdWx0LWpzL2RlZmF1bHRqcy10ZW1wbGF0ZS1sYW5ndWFnZS8uL3NyYy9EaXJlY3RpdmUuanMiLCJ3ZWJwYWNrOi8vQGRlZmF1bHQtanMvZGVmYXVsdGpzLXRlbXBsYXRlLWxhbmd1YWdlLy4vc3JjL0RpcmVjdGl2ZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vQGRlZmF1bHQtanMvZGVmYXVsdGpzLXRlbXBsYXRlLWxhbmd1YWdlLy4vc3JjL1JlbmRlcmVyLmpzIiwid2VicGFjazovL0BkZWZhdWx0LWpzL2RlZmF1bHRqcy10ZW1wbGF0ZS1sYW5ndWFnZS8uL3NyYy9UZW1wbGF0ZS5qcyIsIndlYnBhY2s6Ly9AZGVmYXVsdC1qcy9kZWZhdWx0anMtdGVtcGxhdGUtbGFuZ3VhZ2UvLi9zcmMvVXRpbHMuanMiLCJ3ZWJwYWNrOi8vQGRlZmF1bHQtanMvZGVmYXVsdGpzLXRlbXBsYXRlLWxhbmd1YWdlLy4vc3JjL2RpcmVjdGl2ZXMvQXR0YWNoRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9AZGVmYXVsdC1qcy9kZWZhdWx0anMtdGVtcGxhdGUtbGFuZ3VhZ2UvLi9zcmMvZGlyZWN0aXZlcy9BdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL0BkZWZhdWx0LWpzL2RlZmF1bHRqcy10ZW1wbGF0ZS1sYW5ndWFnZS8uL3NyYy9kaXJlY3RpdmVzL0Nob29zZS5qcyIsIndlYnBhY2s6Ly9AZGVmYXVsdC1qcy9kZWZhdWx0anMtdGVtcGxhdGUtbGFuZ3VhZ2UvLi9zcmMvZGlyZWN0aXZlcy9EYXRhLmpzIiwid2VicGFjazovL0BkZWZhdWx0LWpzL2RlZmF1bHRqcy10ZW1wbGF0ZS1sYW5ndWFnZS8uL3NyYy9kaXJlY3RpdmVzL0ZvcmVhY2guanMiLCJ3ZWJwYWNrOi8vQGRlZmF1bHQtanMvZGVmYXVsdGpzLXRlbXBsYXRlLWxhbmd1YWdlLy4vc3JjL2RpcmVjdGl2ZXMvSWYuanMiLCJ3ZWJwYWNrOi8vQGRlZmF1bHQtanMvZGVmYXVsdGpzLXRlbXBsYXRlLWxhbmd1YWdlLy4vc3JjL2RpcmVjdGl2ZXMvSW5jbHVkZS5qcyIsIndlYnBhY2s6Ly9AZGVmYXVsdC1qcy9kZWZhdWx0anMtdGVtcGxhdGUtbGFuZ3VhZ2UvLi9zcmMvZGlyZWN0aXZlcy9Jbml0aWFsLmpzIiwid2VicGFjazovL0BkZWZhdWx0LWpzL2RlZmF1bHRqcy10ZW1wbGF0ZS1sYW5ndWFnZS8uL3NyYy9kaXJlY3RpdmVzL09uRmluaXNoZWQuanMiLCJ3ZWJwYWNrOi8vQGRlZmF1bHQtanMvZGVmYXVsdGpzLXRlbXBsYXRlLWxhbmd1YWdlLy4vc3JjL2RpcmVjdGl2ZXMvUmVwZWF0LmpzIiwid2VicGFjazovL0BkZWZhdWx0LWpzL2RlZmF1bHRqcy10ZW1wbGF0ZS1sYW5ndWFnZS8uL3NyYy9kaXJlY3RpdmVzL1RleHQuanMiLCJ3ZWJwYWNrOi8vQGRlZmF1bHQtanMvZGVmYXVsdGpzLXRlbXBsYXRlLWxhbmd1YWdlLy4vc3JjL2RpcmVjdGl2ZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vQGRlZmF1bHQtanMvZGVmYXVsdGpzLXRlbXBsYXRlLWxhbmd1YWdlLy4vc3JjL2VsZW1lbnRzL1JlcGxhY2UuanMiLCJ3ZWJwYWNrOi8vQGRlZmF1bHQtanMvZGVmYXVsdGpzLXRlbXBsYXRlLWxhbmd1YWdlLy4vc3JjL2VsZW1lbnRzL2luZGV4LmpzIiwid2VicGFjazovL0BkZWZhdWx0LWpzL2RlZmF1bHRqcy10ZW1wbGF0ZS1sYW5ndWFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9AZGVmYXVsdC1qcy9kZWZhdWx0anMtdGVtcGxhdGUtbGFuZ3VhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL0BkZWZhdWx0LWpzL2RlZmF1bHRqcy10ZW1wbGF0ZS1sYW5ndWFnZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL0BkZWZhdWx0LWpzL2RlZmF1bHRqcy10ZW1wbGF0ZS1sYW5ndWFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL0BkZWZhdWx0LWpzL2RlZmF1bHRqcy10ZW1wbGF0ZS1sYW5ndWFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL0BkZWZhdWx0LWpzL2RlZmF1bHRqcy10ZW1wbGF0ZS1sYW5ndWFnZS8uL2Jyb3dzZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwiLi9zcmNcIjsiLCJpbXBvcnQgVXRpbHMsIHtHTE9CQUx9IGZyb20gXCIuL3V0aWxzL1V0aWxzXCI7XHJcbmltcG9ydCB7IFJFQURZRVZFTlQgfSBmcm9tIFwiLi9kb20vZXh0ZW50aW9ucy9SZWFkeUV2ZW50U3VwcG9ydFwiO1xyXG5cclxuR0xPQkFMLmRlZmF1bHRqcyA9IEdMT0JBTC5kZWZhdWx0anMgfHwge307XHJcbkdMT0JBTC5kZWZhdWx0anMuZXh0ZG9tID0gR0xPQkFMLmRlZmF1bHRqcy5leHRkb20gfHwge1xyXG5cdFZFUlNJT04gOiBcIiR7dmVyc2lvbn1cIixcclxuXHRSRUFEWUVWRU5UIDogUkVBRFlFVkVOVCxcclxuXHR1dGlscyA6IHtcclxuXHRcdFV0aWxzOiBVdGlsc1xyXG5cdH1cclxufTtcclxuXHJcbkdMT0JBTC5maW5kID0gZnVuY3Rpb24oKSB7XHJcblx0cmV0dXJuIGRvY3VtZW50LmZpbmQuYXBwbHkoZG9jdW1lbnQsIGFyZ3VtZW50cyk7XHJcbn07XHJcblxyXG5HTE9CQUwucmVhZHkgPSBmdW5jdGlvbigpIHtcclxuXHRyZXR1cm4gZG9jdW1lbnQucmVhZHkuYXBwbHkoZG9jdW1lbnQsIGFyZ3VtZW50cyk7XHJcbn07XHJcblxyXG5HTE9CQUwuY3JlYXRlID0gZnVuY3Rpb24oYUNvbnRlbnQsIGFzVGVtcGxhdGUpIHtcclxuXHRpZiAodHlwZW9mIGFyZ3VtZW50c1swXSAhPT0gXCJzdHJpbmdcIilcclxuXHRcdHRocm93IG5ldyBFcnJvcihcIlRoZSBmaXJzdCBhcmd1bWVudCBtdXN0IGJlIGEgc3RyaW5nIVwiKTtcclxuXHRcclxuXHRjb25zdCB0ZW1wbGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZW1wbGF0ZVwiKTtcclxuXHR0ZW1wbGF0ZS5pbm5lckhUTUwgPSBhQ29udGVudDtcclxuXHRpZihhc1RlbXBsYXRlKVxyXG5cdFx0cmV0dXJuIHRlbXBsYXRlO1xyXG5cdFxyXG5cdHJldHVybiBkb2N1bWVudC5pbXBvcnROb2RlKHRlbXBsYXRlLmNvbnRlbnQsIHRydWUpLmNoaWxkTm9kZXM7XHJcbn07XHJcblxyXG5HTE9CQUwuc2NyaXB0ID0gZnVuY3Rpb24oYUZpbGUsIGFUYXJnZXQpIHtcclxuXHRpZihhRmlsZSBpbnN0YW5jZW9mIEFycmF5KVxyXG5cdFx0cmV0dXJuIFByb21pc2UuYWxsKGFGaWxlLm1hcChmaWxlID0+IEdMT0JBTC5zY3JpcHQoZmlsZSwgYVRhcmdldCkpKTtcclxuXHRcclxuXHRpZih0eXBlb2YgYUZpbGUgPT09IFwic3RyaW5nXCIpXHRcclxuXHRcdHJldHVybiBuZXcgUHJvbWlzZSgocixlKSA9PiB7XHJcblx0XHRcdGNvbnN0IHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIik7XHJcblx0XHRcdHNjcmlwdC5hc3luYyA9IHRydWU7XHJcblx0XHRcdHNjcmlwdC5vbmxvYWQgPSBmdW5jdGlvbigpe3IoKX07XHJcblx0XHRcdHNjcmlwdC5vbmVycm9yID0gZnVuY3Rpb24oKXt0aHJvdyBuZXcgRXJyb3IoXCJsb2FkIGVycm9yIVwiKX07XHJcblx0XHRcdCFhVGFyZ2V0ID8gZG9jdW1lbnQuYm9keS5hcHBlbmQoc2NyaXB0KSA6IGFUYXJnZXQuYXBwZW5kKHNjcmlwdCk7XHJcblx0XHRcdHNjcmlwdC5zcmMgPSBhRmlsZTtcclxuXHRcdH0pO1xyXG5cdGVsc2VcclxuXHRcdHJldHVybiBQcm9taXNlLnJlamVjdChcIkZpcnN0IHBhcmFtZXRlciBtdXN0IGJlIGFuIGFycmF5IG9mIHN0cmluZ3Mgb3IgYSBzdHJpbmchXCIpO1xyXG59OyIsIi8qKlxyXG4gKiBBZGRzIHF1ZXJ5IGFuZCByZWFkeSBmdW5jdGlvbnMgdG8gRG9jdW1lbnQsIGFuZCB0cmlnZ2VycyB0aGUgcmVhZHkgZXZlbnQuXHJcbiAqXHJcbiAqIFRoZSBldmVudCBpcyB0cmlnZ2VyZWQgb25jZSB0aGUgZG9tIGlzIHBhcnNlZC4gQSByZWFkeSBmdW5jdGlvbiByZWdpc3RlcmVkXHJcbiAqIGFmdGVyIHRoYXQgaXMgbm90IGxvc3QsIGFzIHJlYWR5KCkgdHJpZ2dlcnMgdGhlIGV2ZW50IGFnYWluIHdoZW4gdGhlIGRvY3VtZW50XHJcbiAqIGlzIGFscmVhZHkgY29tcGxldGUuXHJcbiAqL1xyXG5pbXBvcnQgZXh0ZW5kUHJvdG90eXBlIGZyb20gXCIuLi91dGlscy9FeHRlbmRQcm90b3R5cGVcIjtcclxuaW1wb3J0IFF1ZXJ5U3VwcG9ydCBmcm9tIFwiLi9leHRlbnRpb25zL1F1ZXJ5U3VwcG9ydFwiO1xyXG5pbXBvcnQgUmVhZHlFdmVudFN1cHBvcnQsIHsgUkVBRFlFVkVOVCB9IGZyb20gXCIuL2V4dGVudGlvbnMvUmVhZHlFdmVudFN1cHBvcnRcIjtcclxuXHJcbmV4dGVuZFByb3RvdHlwZShEb2N1bWVudCwgUXVlcnlTdXBwb3J0LCBSZWFkeUV2ZW50U3VwcG9ydCk7XHJcblxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiBkb2N1bWVudC50cmlnZ2VyKFJFQURZRVZFTlQpKTtcclxuXHJcblxyXG5cclxuIiwiLyoqXHJcbiAqIEFkZHMgcXVlcnkgYW5kIGNvbnRlbnQgZnVuY3Rpb25zIHRvIERvY3VtZW50RnJhZ21lbnQuXHJcbiAqXHJcbiAqIEEgU2hhZG93Um9vdCBpcyBhIERvY3VtZW50RnJhZ21lbnQsIHNvIGEgc2hhZG93IHJvb3QgY2FuIGJlIHNlYXJjaGVkIGFuZCBmaWxsZWRcclxuICogdGhlIHNhbWUgd2F5IGFzIHRoZSBmcmFnbWVudCBjcmVhdGUoKSByZXR1cm5zLlxyXG4gKi9cclxuaW1wb3J0IGV4dGVuZFByb3RvdHlwZSBmcm9tIFwiLi4vdXRpbHMvRXh0ZW5kUHJvdG90eXBlXCI7XHJcbmltcG9ydCBRdWVyeVN1cHBvcnQgZnJvbSBcIi4vZXh0ZW50aW9ucy9RdWVyeVN1cHBvcnRcIjtcclxuaW1wb3J0IE1hbmlwdWxhdGlvblN1cHBvcnQgZnJvbSBcIi4vZXh0ZW50aW9ucy9NYW5pcHVsYXRpb25TdXBwb3J0XCI7XHJcblxyXG5leHRlbmRQcm90b3R5cGUoRG9jdW1lbnRGcmFnbWVudCwgUXVlcnlTdXBwb3J0LCBNYW5pcHVsYXRpb25TdXBwb3J0KTtcclxuXHJcblxyXG5cclxuXHJcbiIsIi8qKlxyXG4gKiBBZGRzIHF1ZXJ5LCBhdHRyaWJ1dGUgYW5kIGNvbnRlbnQgZnVuY3Rpb25zIHRvIEVsZW1lbnQuXHJcbiAqXHJcbiAqIFF1ZXJ5IGFuZCBhdHRyaWJ1dGUgZnVuY3Rpb25zIG5lZWQgYSBzZWxlY3RhYmxlIG5vZGUsIHdoaWNoIGlzIHdoeSB0aGV5IHNpdFxyXG4gKiBoZXJlIGFuZCBub3Qgb24gTm9kZS4gTWFuaXB1bGF0aW9uU3VwcG9ydCBpcyBhcHBsaWVkIGFnYWluIGFsdGhvdWdoIEVsZW1lbnRcclxuICogaW5oZXJpdHMgaXQgZnJvbSBOb2RlIC0gdGhhdCBwdXRzIHRoZSBmdW5jdGlvbnMgb24gRWxlbWVudCBhcyBvd24gcHJvcGVydGllcyxcclxuICogd2hlcmUgdGhlIGV4dGVuc2lvbnMgb2YgdGhlIG1vcmUgc3BlY2lmaWMgaHRtbCB0eXBlcyBjYW4gZmluZCB0aGVtLlxyXG4gKi9cclxuaW1wb3J0IGV4dGVuZFByb3RvdHlwZSBmcm9tIFwiLi4vdXRpbHMvRXh0ZW5kUHJvdG90eXBlXCI7XHJcbmltcG9ydCBRdWVyeVN1cHBvcnQgZnJvbSBcIi4vZXh0ZW50aW9ucy9RdWVyeVN1cHBvcnRcIjtcclxuaW1wb3J0IEF0dHJpYnV0ZVN1cHBvcnQgZnJvbSBcIi4vZXh0ZW50aW9ucy9BdHRyaWJ1dGVTdXBwb3J0XCI7XHJcbmltcG9ydCBNYW5pcHVsYXRpb25TdXBwb3J0IGZyb20gXCIuL2V4dGVudGlvbnMvTWFuaXB1bGF0aW9uU3VwcG9ydFwiO1xyXG5cclxuZXh0ZW5kUHJvdG90eXBlKEVsZW1lbnQsUXVlcnlTdXBwb3J0LCBBdHRyaWJ1dGVTdXBwb3J0LCBNYW5pcHVsYXRpb25TdXBwb3J0KTsiLCIvKipcbiAqIEFkZHMgdGhlIGV2ZW50IGZ1bmN0aW9ucyB0byBFdmVudFRhcmdldC5cbiAqXG4gKiBFdmVudFRhcmdldCBpcyB0aGUgcm9vdCBvZiBldmVyeXRoaW5nIGRpc3BhdGNoaW5nIGV2ZW50cywgbm90IG9ubHkgb2YgdGhlIGRvbSxcbiAqIHNvIG9uKCksIHJlbW92ZU9uKCkgYW5kIHRyaWdnZXIoKSBhcmUgYXZhaWxhYmxlIG9uIGV2ZXJ5IG5vZGUsIG9uIHRoZSBkb2N1bWVudFxuICogYW5kIG9uIHRoZSB3aW5kb3cgYWxpa2UuXG4gKi9cbmltcG9ydCBleHRlbmRQcm90b3R5cGUgZnJvbSBcIi4uL3V0aWxzL0V4dGVuZFByb3RvdHlwZVwiO1xuaW1wb3J0IEV2ZW50U3VwcG9ydCBmcm9tIFwiLi9leHRlbnRpb25zL0V2ZW50U3VwcG9ydFwiO1xuXG5leHRlbmRQcm90b3R5cGUoRXZlbnRUYXJnZXQsIEV2ZW50U3VwcG9ydCk7IiwiLyoqXHJcbiAqIEFkZHMgY2xhc3MgYW5kIHZpc2liaWxpdHkgZnVuY3Rpb25zIHRvIEhUTUxFbGVtZW50LlxyXG4gKlxyXG4gKiBCb3RoIHdvcmsgb24gdGhlIHN0eWxlIGFuZCB0aGUgY2xhc3NMaXN0IG9mIGEgaHRtbCBlbGVtZW50LCB3aGljaCBpcyB3aHkgdGhleVxyXG4gKiBzaXQgaGVyZSBhbmQgbm90IG9uIEVsZW1lbnQgLSBhbiBzdmcgZWxlbWVudCBoYXMgbmVpdGhlciBpbiB0aGUgc2FtZSB3YXkuXHJcbiAqL1xyXG5pbXBvcnQgZXh0ZW5kUHJvdG90eXBlIGZyb20gXCIuLi91dGlscy9FeHRlbmRQcm90b3R5cGVcIjtcclxuaW1wb3J0IEh0bWxDbGFzc1N1cHBvcnQgZnJvbSBcIi4vZXh0ZW50aW9ucy9IdG1sQ2xhc3NTdXBwb3J0XCI7XHJcbmltcG9ydCBTaG93SGlkZVN1cHBvcnQgZnJvbSBcIi4vZXh0ZW50aW9ucy9TaG93SGlkZVN1cHBvcnRcIjtcclxuXHJcblxyXG5leHRlbmRQcm90b3R5cGUoSFRNTEVsZW1lbnQsIEh0bWxDbGFzc1N1cHBvcnQsIFNob3dIaWRlU3VwcG9ydCk7IiwiLyoqXHJcbiAqIEFkZHMgdmFsKCkgdG8gSFRNTElucHV0RWxlbWVudC5cclxuICpcclxuICogVmFsdWVTdXBwb3J0IHBpY2tzIHRoZSBoYW5kbGluZyBieSB0aGUgdHlwZSBvZiB0aGUgaW5wdXQsIHNvIGEgY2hlY2tib3ggYW5kIGFcclxuICogcmFkaW8gYXJlIHJlYWQgYnkgdGhlaXIgY2hlY2tlZCBzdGF0ZSB3aGlsZSBldmVyeSBvdGhlciBpbnB1dCBpcyByZWFkIGJ5IGl0c1xyXG4gKiB2YWx1ZS5cclxuICovXHJcbmltcG9ydCBleHRlbmRQcm90b3R5cGUgZnJvbSBcIi4uL3V0aWxzL0V4dGVuZFByb3RvdHlwZVwiO1xyXG5pbXBvcnQgVmFsdWVTdXBwb3J0IGZyb20gXCIuL2V4dGVudGlvbnMvVmFsdWVTdXBwb3J0XCI7XHJcblxyXG5cclxuZXh0ZW5kUHJvdG90eXBlKEhUTUxJbnB1dEVsZW1lbnQsVmFsdWVTdXBwb3J0KTsiLCIvKipcclxuICogQWRkcyB2YWwoKSB0byBIVE1MU2VsZWN0RWxlbWVudC5cclxuICpcclxuICogVmFsdWVTdXBwb3J0IHJlYWRzIGEgc2VsZWN0IGJ5IGl0cyBzZWxlY3RlZCBvcHRpb25zLCBzbyB2YWwoKSBnaXZlcyBhbiBhcnJheSBvZlxyXG4gKiB0aGVpciB2YWx1ZXMgYW5kIHRha2VzIG9uZSB0byBzZWxlY3QgdGhlbSBhZ2Fpbi5cclxuICovXHJcbmltcG9ydCBleHRlbmRQcm90b3R5cGUgZnJvbSBcIi4uL3V0aWxzL0V4dGVuZFByb3RvdHlwZVwiO1xyXG5pbXBvcnQgVmFsdWVTdXBwb3J0IGZyb20gXCIuL2V4dGVudGlvbnMvVmFsdWVTdXBwb3J0XCI7XHJcblxyXG5cclxuZXh0ZW5kUHJvdG90eXBlKEhUTUxTZWxlY3RFbGVtZW50LFZhbHVlU3VwcG9ydCk7IiwiLyoqXHJcbiAqIEFkZHMgdmFsKCkgdG8gSFRNTFRleHRBcmVhRWxlbWVudC5cclxuICpcclxuICogQSB0ZXh0YXJlYSBtYXRjaGVzIG5vbmUgb2YgdGhlIHNwZWNpYWwgaW5wdXQgdHlwZXMsIHNvIFZhbHVlU3VwcG9ydCBmYWxscyBiYWNrXHJcbiAqIHRvIHJlYWRpbmcgYW5kIHdyaXRpbmcgaXRzIHZhbHVlIC0gYW5kIHRyaWdnZXJzIGFuIGlucHV0IGV2ZW50IHdoZW4gaXQgaXMgc2V0LFxyXG4gKiB0aGUgc2FtZSBhcyBhbnkgb3RoZXIgZmllbGQuXHJcbiAqL1xyXG5pbXBvcnQgZXh0ZW5kUHJvdG90eXBlIGZyb20gXCIuLi91dGlscy9FeHRlbmRQcm90b3R5cGVcIjtcclxuaW1wb3J0IFZhbHVlU3VwcG9ydCBmcm9tIFwiLi9leHRlbnRpb25zL1ZhbHVlU3VwcG9ydFwiO1xyXG5cclxuXHJcbmV4dGVuZFByb3RvdHlwZShIVE1MVGV4dEFyZWFFbGVtZW50LCBWYWx1ZVN1cHBvcnQpO1xyXG4iLCIvKipcbiAqIEJ1aWxkcyBIVE1MQ29sbGVjdGlvbiBhcyBhIGxpc3Qgb2YgaHRtbCBlbGVtZW50cy5cbiAqXG4gKiBTYW1lIGFzIE5vZGVMaXN0LCBvbmx5IGhvbGRpbmcgaHRtbCBlbGVtZW50cyAtIGEgbGl2ZSBjb2xsZWN0aW9uIGxpa2UgY2hpbGRyZW5cbiAqIHRoZXJlZm9yZSBrZWVwcyBpdHMgdHlwZSB3aGVuIGl0IGlzIGZpbHRlcmVkLlxuICovXG5pbXBvcnQgYnVpbGRMaXN0VHlwZSBmcm9tIFwiLi9leHRlbnRpb25zL0xpc3RUeXBlQnVpbGRlclwiO1xuXG5idWlsZExpc3RUeXBlKEhUTUxDb2xsZWN0aW9uLCBIVE1MRWxlbWVudCk7XG4iLCIvKipcclxuICogQWRkcyBkYXRhIGFuZCBjb250ZW50IGZ1bmN0aW9ucyB0byBOb2RlLlxyXG4gKlxyXG4gKiBOb2RlIGlzIHRoZSBjb21tb24gYmFzZSBvZiBlbGVtZW50cywgdGV4dCBub2RlcyBhbmQgZnJhZ21lbnRzLCBzbyBkYXRhKCkgYW5kXHJcbiAqIHRoZSBpbnNlcnQgZnVuY3Rpb25zIHdvcmsgb24gYWxsIG9mIHRoZW0sIG5vdCBvbmx5IG9uIGVsZW1lbnRzLlxyXG4gKi9cclxuaW1wb3J0IGV4dGVuZFByb3RvdHlwZSBmcm9tIFwiLi4vdXRpbHMvRXh0ZW5kUHJvdG90eXBlXCI7XHJcbmltcG9ydCBEYXRhU3VwcG9ydCBmcm9tIFwiLi9leHRlbnRpb25zL0RhdGFTdXBwb3J0XCI7XHJcbmltcG9ydCBNYW5pcHVsYXRpb25TdXBwb3J0IGZyb20gXCIuL2V4dGVudGlvbnMvTWFuaXB1bGF0aW9uU3VwcG9ydFwiO1xyXG5cclxuZXh0ZW5kUHJvdG90eXBlKE5vZGUsRGF0YVN1cHBvcnQsTWFuaXB1bGF0aW9uU3VwcG9ydCk7IiwiLyoqXG4gKiBCdWlsZHMgTm9kZUxpc3QgYXMgYSBsaXN0IG9mIG5vZGVzLlxuICpcbiAqIEJlc2lkZXMgdGhlIGxpc3QgZnVuY3Rpb25zIHRoaXMgZ2l2ZXMgYSBOb2RlTGlzdCBldmVyeSBmdW5jdGlvbiBvZiBhIG5vZGUsIGJ5XG4gKiBkZWxlZ2F0aW9uIC0gY2FsbGluZyBvbmUgYXBwbGllcyBpdCB0byBlYWNoIG5vZGUgYW5kIGNvbGxlY3RzIHRoZSByZXN1bHRzLlxuICovXG5pbXBvcnQgYnVpbGRMaXN0VHlwZSBmcm9tIFwiLi9leHRlbnRpb25zL0xpc3RUeXBlQnVpbGRlclwiO1xuXG5idWlsZExpc3RUeXBlKE5vZGVMaXN0LCBOb2RlKTtcbiIsImltcG9ydCBFeHRlbmRlciBmcm9tIFwiLi4vLi4vdXRpbHMvRXh0ZW5kZXJcIjtcclxuXHJcbmNvbnN0IHN1cHBvcnQgPSBFeHRlbmRlcihcIkF0dHJpYnV0ZVN1cHBvcnRcIiwgKFByb3RvdHlwZSkgPT4ge1xyXG5cdC8qKlxyXG5cdCAqIEdldHMgb3Igc2V0cyBhdHRyaWJ1dGVzIG9mIHRoaXMgZWxlbWVudC5cclxuXHQgKlxyXG5cdCAqIGF0dHIoKSByZXR1cm5zIGFsbCBhdHRyaWJ1dGVzIGFzIGFuIG9iamVjdCwgYXR0cihuYW1lKSB0aGUgdmFsdWUgb2YgYSBzaW5nbGVcclxuXHQgKiBvbmUuIFdpdGggYSBzZWNvbmQgYXJndW1lbnQgdGhlIGF0dHJpYnV0ZSBpcyBzZXQsIHdpdGggbnVsbCBvciB1bmRlZmluZWQgaXRcclxuXHQgKiBnZXRzIHJlbW92ZWQuXHJcblx0ICpcclxuXHQgKiBWYWx1ZXMgYXJlIHN0cmluZ2lmaWVkIGJ5IHNldEF0dHJpYnV0ZSwgc28gYXR0cihuYW1lLCAwKSBzZXRzIFwiMFwiLiBPbmx5IG51bGxcclxuXHQgKiBhbmQgdW5kZWZpbmVkIHJlbW92ZSBhbiBhdHRyaWJ1dGUgLSAwLCBmYWxzZSBhbmQgXCJcIiBhcmUgcmVndWxhciB2YWx1ZXMuXHJcblx0ICpcclxuXHQgKiBAcGFyYW0ge3N0cmluZ30gW2FOYW1lXSAtIHRoZSBhdHRyaWJ1dGUgbmFtZVxyXG5cdCAqIEBwYXJhbSB7Kn0gW2FWYWx1ZV0gLSB0aGUgbmV3IHZhbHVlLCBudWxsIG9yIHVuZGVmaW5lZCByZW1vdmVzIHRoZSBhdHRyaWJ1dGVcclxuXHQgKiBAcmV0dXJucyB7T2JqZWN0PHN0cmluZyxzdHJpbmc+fHN0cmluZ3xFbGVtZW50fSBhbGwgYXR0cmlidXRlcywgdGhlIHZhbHVlIG9mIHRoZSByZXF1ZXN0ZWQgYXR0cmlidXRlIChudWxsIHdoZW4gaXQgZG9lcyBub3QgZXhpc3QpLCBvciB0aGlzIHdoZW4gYW4gYXR0cmlidXRlIHdhcyBzZXQgb3IgcmVtb3ZlZFxyXG5cdCAqL1xyXG5cdFByb3RvdHlwZS5hdHRyID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0aWYgKGFyZ3VtZW50cy5sZW5ndGggPT0gMCkge1xyXG5cdFx0XHRjb25zdCByZXN1bHQgPSB7fTtcclxuXHRcdFx0dGhpcy5nZXRBdHRyaWJ1dGVOYW1lcygpLmZvckVhY2goKG5hbWUpID0+IHtcclxuXHRcdFx0XHRyZXN1bHRbbmFtZV0gPSB0aGlzLmdldEF0dHJpYnV0ZShuYW1lKTtcclxuXHRcdFx0fSk7XHJcblx0XHRcdHJldHVybiByZXN1bHQ7XHJcblx0XHR9IGVsc2UgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT0gMSkgcmV0dXJuIHRoaXMuZ2V0QXR0cmlidXRlKGFyZ3VtZW50c1swXSk7XHJcblx0XHRlbHNlIGlmIChhcmd1bWVudHNbMV0gPT0gbnVsbCkgdGhpcy5yZW1vdmVBdHRyaWJ1dGUoYXJndW1lbnRzWzBdKTtcclxuXHRcdGVsc2UgdGhpcy5zZXRBdHRyaWJ1dGUoYXJndW1lbnRzWzBdLCBhcmd1bWVudHNbMV0pO1xyXG5cclxuXHRcdHJldHVybiB0aGlzO1xyXG5cdH07XHJcbn0pO1xyXG5leHBvcnQgZGVmYXVsdCBzdXBwb3J0O1xyXG4iLCJpbXBvcnQgRXh0ZW5kZXIgZnJvbSBcIi4uLy4uL3V0aWxzL0V4dGVuZGVyXCI7XHJcbmNvbnN0IHN1cHBvcnQgPSBFeHRlbmRlcihcIkRhdGFTdXBwb3J0XCIsIFByb3RvdHlwZSA9PiB7XHJcblxyXG5cdC8qKlxyXG5cdCAqIFJlYWRzIGFsbCBkYXRhLSBhdHRyaWJ1dGVzIG9mIGEgbm9kZSBpbnRvIGEgcGxhaW4gb2JqZWN0LlxyXG5cdCAqXHJcblx0ICogQHBhcmFtIHtOb2RlfSBlbGVtZW50XHJcblx0ICogQHJldHVybnMge09iamVjdDxzdHJpbmcsc3RyaW5nPn0gdGhlIGRhdGFzZXQgb2YgdGhlIG5vZGUsIGVtcHR5IHdoZW4gaXQgaGFzIG5vbmVcclxuXHQgKi9cclxuXHRjb25zdCBsb2FkRGF0YSA9IChlbGVtZW50KSA9PiB7XHJcblx0XHRjb25zdCBkYXRhID0ge307XHJcblx0XHRpZiAodHlwZW9mIGVsZW1lbnQuZGF0YXNldCAhPT0gXCJ1bmRlZmluZWRcIilcclxuXHRcdFx0Zm9yIChjb25zdCBuYW1lIGluIGVsZW1lbnQuZGF0YXNldClcclxuXHRcdFx0XHRkYXRhW25hbWVdID0gZWxlbWVudC5kYXRhc2V0W25hbWVdO1xyXG5cdFx0cmV0dXJuIGRhdGE7XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBHZXRzIG9yIHNldHMgdGhlIGRhdGEgb2YgdGhpcyBub2RlLlxyXG5cdCAqXHJcblx0ICogVGhlIGZpcnN0IGNhbGwgcmVhZHMgdGhlIGRhdGEtIGF0dHJpYnV0ZXMgaW50byBhIGNhY2hlLCB3aGljaCBpcyBrZXB0IG9uIHRoZVxyXG5cdCAqIG5vZGUgZnJvbSB0aGVuIG9uLiBUaGF0IGNhY2hlIGlzIGRldGFjaGVkIGZyb20gdGhlIGRvbTogbGF0ZXIgYXR0cmlidXRlXHJcblx0ICogY2hhbmdlcyBhcmUgbm90IHNlZW4gYW5kIHdyaXR0ZW4gdmFsdWVzIGFyZSBub3QgcmVmbGVjdGVkIGJhY2suIGRhdGEodHJ1ZSlcclxuXHQgKiByZWFkcyB0aGUgYXR0cmlidXRlcyBhZ2Fpbi5cclxuXHQgKlxyXG5cdCAqIFJlbG9hZGluZyBtZXJnZXMsIGl0IGRvZXMgbm90IHN5bmMgLSBhIHZhbHVlIHJlbW92ZWQgZnJvbSB0aGUgZG9tIHN0YXlzIGluXHJcblx0ICogdGhlIGNhY2hlLCBhcyBpdCBjYW4gbm90IGJlIHRvbGQgYXBhcnQgZnJvbSBhIHZhbHVlIHRoYXQgbmV2ZXIgY2FtZSBmcm9tIHRoZVxyXG5cdCAqIGRvbS5cclxuXHQgKlxyXG5cdCAqIEBwYXJhbSB7c3RyaW5nfGJvb2xlYW59IFthTmFtZV0gLSBhIG5hbWUgdG8gcmVhZCBvciB3cml0ZSwgb3IgYSBib29sZWFuIHRvIHJlYWQgYWxsIGRhdGEsIHJlbG9hZGluZyB0aGUgYXR0cmlidXRlcyBmaXJzdCB3aGVuIHRydWVcclxuXHQgKiBAcGFyYW0geyp9IFthVmFsdWVdIC0gdGhlIG5ldyB2YWx1ZSwgbnVsbCBvciB1bmRlZmluZWQgcmVtb3ZlcyB0aGUgbmFtZVxyXG5cdCAqIEByZXR1cm5zIHtPYmplY3Q8c3RyaW5nLCo+fCp8Tm9kZX0gYWxsIGRhdGEsIHRoZSB2YWx1ZSBvZiB0aGUgZ2l2ZW4gbmFtZSwgb3IgdGhpcyB3aGVuIGEgdmFsdWUgd2FzIHdyaXR0ZW5cclxuXHQgKiBAdGhyb3dzIHtFcnJvcn0gd2hlbiB0aGUgZmlyc3QgYXJndW1lbnQgaXMgbmVpdGhlciBhIHN0cmluZyBub3IgYSBib29sZWFuXHJcblx0ICovXHJcblx0UHJvdG90eXBlLmRhdGEgPSBmdW5jdGlvbigpIHtcclxuXHRcdGNvbnN0IGRhdGEgPSBsb2FkRGF0YSh0aGlzKTtcclxuXHRcdHRoaXMuZGF0YSA9IChmdW5jdGlvbigpIHtcclxuXHRcdFx0aWYgKGFyZ3VtZW50cy5sZW5ndGggPT0gMClcclxuXHRcdFx0XHRyZXR1cm4gZGF0YTtcclxuXHRcdFx0Y29uc3QgYXJnMSA9IGFyZ3VtZW50c1swXTtcclxuXHRcdFx0Y29uc3QgdHlwZSA9IHR5cGVvZiBhcmcxO1xyXG5cdFx0XHRpZih0eXBlID09PSBcImJvb2xlYW5cIil7XHJcblx0XHRcdFx0aWYoYXJnMSlcclxuXHRcdFx0XHRcdE9iamVjdC5hc3NpZ24oZGF0YSwgbG9hZERhdGEodGhpcykpO1xyXG5cdFx0XHRcdHJldHVybiBkYXRhO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRpZih0eXBlICE9PSBcInN0cmluZ1wiKVxyXG5cdFx0XHRcdHRocm93IG5ldyBFcnJvcihcImRhdGEoKSBleHBlY3RzIGEgc3RyaW5nIG9yIGJvb2xlYW4gYXMgZmlyc3QgYXJndW1lbnQgb3Igbm8gYXJndW1lbnRzIGF0IGFsbFwiKTtcclxuXHRcdFx0XHJcblx0XHRcdGlmIChhcmd1bWVudHMubGVuZ3RoID09IDEpXHJcblx0XHRcdFx0cmV0dXJuIGRhdGFbYXJnMV07XHJcblx0XHRcdGVsc2UgaWYgKGFyZ3VtZW50c1sxXSA9PSBudWxsKVxyXG5cdFx0XHRcdGRlbGV0ZSBkYXRhW2FyZ3VtZW50c1swXV07XHJcblx0XHRcdGVsc2VcclxuXHRcdFx0XHRkYXRhW2FyZ3VtZW50c1swXV0gPSBhcmd1bWVudHNbMV07XHJcblxyXG5cdFx0XHRyZXR1cm4gdGhpcztcclxuXHRcdH0pLmJpbmQodGhpcyk7XHJcblxyXG5cdFx0cmV0dXJuIHRoaXMuZGF0YS5hcHBseShudWxsLCBhcmd1bWVudHMpO1xyXG5cdH07XHJcbn0pO1xyXG5leHBvcnQgZGVmYXVsdCBzdXBwb3J0OyIsImltcG9ydCBFeHRlbmRlciBmcm9tIFwiLi4vLi4vdXRpbHMvRXh0ZW5kZXJcIjtcclxuXHJcbmNvbnN0IEVWRU5UU1BMSVRFUiA9IC9cXHMqLFxccyp8XFxzKy87XHJcbmNvbnN0IERFRkFVTFRfT1BUSU9OUyA9IHsgY2FwdHVyZTogZmFsc2UsIG9uY2U6IGZhbHNlLCBwYXNzaXZlOiBmYWxzZSwgc2lnbmFsOiB1bmRlZmluZWQgfTtcclxuXHJcbi8qKlxyXG4gKiBFdmVyeXRoaW5nIHRoaXMgZXh0ZW5zaW9uIGtlZXBzIHBlciBlbGVtZW50LiBBIFdlYWtNYXAgaG9sZHMgaXQgb3V0c2lkZSBvZiB0aGVcclxuICogZWxlbWVudCwgc28gbm90aGluZyBpcyBleHBvc2VkIG9uIHRoZSBkb20gYW5kIGl0IGlzIHJlbGVhc2VkIHdpdGggdGhlIGVsZW1lbnQuXHJcbiAqXHJcbiAqIFdyYXBwZXJzIGFuZCBoYW5kbGVzIGFyZSBtYXBwZWQgaW4gYm90aCBkaXJlY3Rpb25zOiBhIHdyYXBwZXIgbmVlZHMgdG8gZmluZCBpdHNcclxuICogcmVnaXN0cmF0aW9uIHdoaWxlIGFuIGV2ZW50IHJ1bnMsIGFuZCByZW1vdmVPbiBuZWVkcyB0byBmaW5kIGFsbCB3cmFwcGVycyBvZiBhXHJcbiAqIGhhbmRsZS4gSGFuZGxlcyBhcmUgbWFwcGVkIHRvIGEgc2V0IG9mIHdyYXBwZXJzLCBub3QgdG8gYSBzaW5nbGUgb25lLCBzbyB0aGVcclxuICogc2FtZSBoYW5kbGUgY2FuIGJlIHJlZ2lzdGVyZWQgYW55IG51bWJlciBvZiB0aW1lcyB3aXRob3V0IHRoZSByZWdpc3RyYXRpb25zXHJcbiAqIG92ZXJ3cml0aW5nIGVhY2ggb3RoZXIuXHJcbiAqXHJcbiAqIEB0eXBlZGVmIHtPYmplY3R9IEVsZW1lbnREYXRhXHJcbiAqIEBwcm9wZXJ0eSB7TWFwPHN0cmluZyxudW1iZXI+fSBldmVudFRyaWdnZXJUaW1lb3V0cyAtIHJ1bm5pbmcgdHJpZ2dlciB0aW1lb3V0cyBieSBldmVudCB0eXBlXHJcbiAqIEBwcm9wZXJ0eSB7TWFwPEZ1bmN0aW9uLFJlZ2lzdHJhdGlvbj59IHdyYXBwZXJIYW5kbGVNYXAgLSByZWdpc3RyYXRpb24gb2YgZWFjaCB3cmFwcGVyXHJcbiAqIEBwcm9wZXJ0eSB7TWFwPEZ1bmN0aW9uLFNldDxGdW5jdGlvbj4+fSBoYW5kbGVXcmFwcGVyTWFwIC0gYWxsIHdyYXBwZXJzIG9mIGEgaGFuZGxlXHJcbiAqL1xyXG5cclxuLyoqXHJcbiAqIE9uZSBjYWxsIG9mIG9uKCkuXHJcbiAqXHJcbiAqIEB0eXBlZGVmIHtPYmplY3R9IFJlZ2lzdHJhdGlvblxyXG4gKiBAcHJvcGVydHkge0Z1bmN0aW9ufSBoYW5kbGUgLSB0aGUgZnVuY3Rpb24gZ2l2ZW4gdG8gb24oKVxyXG4gKiBAcHJvcGVydHkge1NldDxzdHJpbmc+fSBldmVudHMgLSB0aGUgZXZlbnQgdHlwZXMgc3RpbGwgcmVnaXN0ZXJlZCwgbGlzdGVuZXJzIGdldCByZW1vdmVkIG9uZSBieSBvbmVcclxuICogQHByb3BlcnR5IHtPYmplY3R9IG9wdGlvbnMgLSB0aGUgb3B0aW9ucyB0aGUgbGlzdGVuZXIgd2FzIGFkZGVkIHdpdGgsIG5lZWRlZCB0byByZW1vdmUgaXQgYWdhaW5cclxuICovXHJcblxyXG5jb25zdCBFTEVNRU5UREFUQSA9IG5ldyBXZWFrTWFwKCk7XHJcblxyXG4vKipcclxuICogQHBhcmFtIHtFdmVudFRhcmdldH0gZWxlbWVudFxyXG4gKiBAcmV0dXJucyB7RWxlbWVudERhdGF9IHRoZSBkYXRhIG9mIHRoZSBlbGVtZW50LCBjcmVhdGVkIG9uIGZpcnN0IGFjY2Vzc1xyXG4gKi9cclxuY29uc3QgZ2V0RWxlbWVudERhdGEgPSAoZWxlbWVudCkgPT4ge1xyXG5cdGlmICghRUxFTUVOVERBVEEuaGFzKGVsZW1lbnQpKVxyXG5cdFx0RUxFTUVOVERBVEEuc2V0KGVsZW1lbnQsIHtcclxuXHRcdFx0ZXZlbnRUcmlnZ2VyVGltZW91dHM6IG5ldyBNYXAoKSxcclxuXHRcdFx0d3JhcHBlckhhbmRsZU1hcDogbmV3IE1hcCgpLFxyXG5cdFx0XHRoYW5kbGVXcmFwcGVyTWFwOiBuZXcgTWFwKClcclxuXHRcdH0pO1xyXG5cclxuXHRyZXR1cm4gRUxFTUVOVERBVEEuZ2V0KGVsZW1lbnQpO1xyXG59O1xyXG5cclxuY29uc3QgZ2V0V3JhcHBlckhhbmRsZU1hcCA9IChlbGVtZW50KSA9PiB7XHJcblx0cmV0dXJuIGdldEVsZW1lbnREYXRhKGVsZW1lbnQpLndyYXBwZXJIYW5kbGVNYXA7XHJcbn07XHJcblxyXG5jb25zdCBnZXRIYW5kbGVXcmFwcGVyTWFwID0gKGVsZW1lbnQpID0+IHtcclxuXHRyZXR1cm4gZ2V0RWxlbWVudERhdGEoZWxlbWVudCkuaGFuZGxlV3JhcHBlck1hcDtcclxufTtcclxuXHJcbmNvbnN0IGdldFRyaWdnZXJUaW1lb3V0cyA9IChlbGVtZW50KSA9PiB7XHJcblx0cmV0dXJuIGdldEVsZW1lbnREYXRhKGVsZW1lbnQpLmV2ZW50VHJpZ2dlclRpbWVvdXRzO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIFJlZ2lzdGVycyBhIHdyYXBwZXIgaW4gYm90aCBkaXJlY3Rpb25zLlxyXG4gKlxyXG4gKiBAcGFyYW0ge0V2ZW50VGFyZ2V0fSBhbkVsZW1lbnRcclxuICogQHBhcmFtIHtGdW5jdGlvbn0gYUhhbmRsZSAtIHRoZSBmdW5jdGlvbiBnaXZlbiB0byBvbigpXHJcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGFXcmFwcGVyIC0gdGhlIGxpc3RlbmVyIGFjdHVhbGx5IGFkZGVkIHRvIHRoZSBlbGVtZW50XHJcbiAqIEBwYXJhbSB7SXRlcmFibGU8c3RyaW5nPn0gdGhlRXZlbnRzXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSB0aGVPcHRpb25zIC0ga2VwdCB0byByZW1vdmUgdGhlIGxpc3RlbmVyIHdpdGggdGhlIHNhbWUgb3B0aW9ucyBsYXRlclxyXG4gKiBAdGhyb3dzIHtFcnJvcn0gd2hlbiB0aGUgd3JhcHBlciBpcyBhbHJlYWR5IHJlZ2lzdGVyZWQsIHdoaWNoIGNhbiBub3QgaGFwcGVuIGFzIGxvbmcgYXMgb24oKSBjcmVhdGVzIGEgbmV3IG9uZSBwZXIgY2FsbFxyXG4gKi9cclxuY29uc3QgcmVnaXN0cmF0ZUhhbmRsZVdyYXBwZXIgPSAoYW5FbGVtZW50LCBhSGFuZGxlLCBhV3JhcHBlciwgdGhlRXZlbnRzLCB0aGVPcHRpb25zKSA9PiB7XHJcblx0Y29uc3Qgd3JhcHBlckhhbmRsZU1hcCA9IGdldFdyYXBwZXJIYW5kbGVNYXAoYW5FbGVtZW50KTtcclxuXHRpZiAoIXdyYXBwZXJIYW5kbGVNYXAuaGFzKGFXcmFwcGVyKSkgd3JhcHBlckhhbmRsZU1hcC5zZXQoYVdyYXBwZXIsIHsgaGFuZGxlOiBhSGFuZGxlLCBldmVudHM6IG5ldyBTZXQodGhlRXZlbnRzKSwgb3B0aW9uczogdGhlT3B0aW9ucyB9KTtcclxuXHRlbHNlIHRocm93IG5ldyBFcnJvcihcIldyYXBwZXIgYWxyZWFkeSByZWdpc3RlcmVkIGZvciB0aGlzIGVsZW1lbnQhXCIpO1xyXG5cclxuXHRjb25zdCBoYW5kbGVXcmFwcGVyTWFwID0gZ2V0SGFuZGxlV3JhcHBlck1hcChhbkVsZW1lbnQpO1xyXG5cdGxldCB3cmFwcGVyU2V0ID0gaGFuZGxlV3JhcHBlck1hcC5nZXQoYUhhbmRsZSk7XHJcblx0aWYgKCF3cmFwcGVyU2V0KSB7XHJcblx0XHR3cmFwcGVyU2V0ID0gbmV3IFNldCgpO1xyXG5cdFx0aGFuZGxlV3JhcHBlck1hcC5zZXQoYUhhbmRsZSwgd3JhcHBlclNldCk7XHJcblx0fVx0XHJcblx0d3JhcHBlclNldC5hZGQoYVdyYXBwZXIpO1x0XHJcbn07XHJcblxyXG4vKipcclxuICogUmVtb3ZlcyBhIHdyYXBwZXIgZnJvbSBzb21lIG9yIGFsbCBvZiBpdHMgZXZlbnRzLlxyXG4gKlxyXG4gKiBUaGUgcmVnaXN0cmF0aW9uIGlzIGRyb3BwZWQgZnJvbSBib3RoIG1hcHMgYXMgc29vbiBhcyBubyBldmVudCBpcyBsZWZ0LCBzbyBhXHJcbiAqIHdyYXBwZXIgdGhhdCBzdGlsbCBsaXN0ZW5zIHRvIG90aGVyIGV2ZW50cyBzdGF5cyBrbm93bi5cclxuICpcclxuICogQHBhcmFtIHtFdmVudFRhcmdldH0gYUVsZW1lbnRcclxuICogQHBhcmFtIHtGdW5jdGlvbn0gYVdyYXBwZXJcclxuICogQHBhcmFtIHtJdGVyYWJsZTxzdHJpbmc+fSBbdGhlRXZlbnRzXSAtIHRoZSBldmVudHMgdG8gcmVtb3ZlLCBhbGwgb2YgdGhlbSB3aGVuIG9taXR0ZWRcclxuICovXHJcbmNvbnN0IHJlbW92ZVdyYXBwZXIgPSAoYUVsZW1lbnQsIGFXcmFwcGVyLCB0aGVFdmVudHMpID0+IHtcclxuXHRjb25zdCB3cmFwcGVySGFuZGxlTWFwID0gZ2V0V3JhcHBlckhhbmRsZU1hcChhRWxlbWVudCk7XHJcblx0aWYoIXdyYXBwZXJIYW5kbGVNYXAuaGFzKGFXcmFwcGVyKSkgdGhyb3cgbmV3IEVycm9yKFwiV3JhcHBlciBub3QgcmVnaXN0ZXJlZCBmb3IgdGhpcyBlbGVtZW50IVwiKTtcclxuXHRjb25zdCB7IGV2ZW50cywgb3B0aW9ucywgaGFuZGxlIH0gPSB3cmFwcGVySGFuZGxlTWFwLmdldChhV3JhcHBlcik7XHJcblx0Y29uc3QgcmVtb3ZlZEV2ZW50cyA9IHRoZUV2ZW50cyB8fCBldmVudHM7XHJcblx0Zm9yIChsZXQgZXZlbnQgb2YgcmVtb3ZlZEV2ZW50cykge1xyXG5cdFx0aWYgKGV2ZW50cy5oYXMoZXZlbnQpKSB7XHJcblx0XHRcdGV2ZW50cy5kZWxldGUoZXZlbnQpO1xyXG5cdFx0XHRhRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50LCBhV3JhcHBlciwgb3B0aW9ucyk7XHJcblx0XHR9XHJcblx0fVxyXG5cdC8vQ2xlYW51cCB0aGUgd3JhcHBlckhhbmRsZU1hcCBhbmQgaGFuZGxlV3JhcHBlck1hcCBpZiBubyBldmVudHMgbGVmdCBmb3IgdGhpcyB3cmFwcGVyXHJcblx0aWYgKGV2ZW50cy5zaXplID09PSAwKXtcclxuXHRcdHdyYXBwZXJIYW5kbGVNYXAuZGVsZXRlKGFXcmFwcGVyKTtcclxuXHRcdGNvbnN0IGhhbmRsZVdyYXBwZXJNYXAgPSBnZXRIYW5kbGVXcmFwcGVyTWFwKGFFbGVtZW50KTtcclxuXHRcdGNvbnN0IHdyYXBwZXJTZXQgPSBoYW5kbGVXcmFwcGVyTWFwLmdldChoYW5kbGUpO1xyXG5cdFx0d3JhcHBlclNldC5kZWxldGUoYVdyYXBwZXIpO1xyXG5cdFx0aWYgKHdyYXBwZXJTZXQuc2l6ZSA9PT0gMClcclxuXHRcdFx0aGFuZGxlV3JhcHBlck1hcC5kZWxldGUoaGFuZGxlKTtcclxuXHR9XHJcbn07XHJcblxyXG4vKipcclxuICogQHBhcmFtIHtib29sZWFufE9iamVjdH0gW29wdGlvbnNdIC0gYSBib29sZWFuIGlzIHRha2VuIGFzIGNhcHR1cmUsIGFuIG9iamVjdCBpcyBtZXJnZWQgaW50byB0aGUgZGVmYXVsdHNcclxuICogQHJldHVybnMge09iamVjdH0gYWx3YXlzIGEgbmV3IG9iamVjdCwgbmV2ZXIgdGhlIHNoYXJlZCBkZWZhdWx0c1xyXG4gKi9cclxuY29uc3QgdG9FdmVudE9wdGlvbnMgPSAob3B0aW9ucykgPT4ge1xyXG5cdGlmIChvcHRpb25zID09IG51bGwpIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBERUZBVUxUX09QVElPTlMpO1xyXG5cdGVsc2UgaWYgKHR5cGVvZiBvcHRpb25zID09PSBcImJvb2xlYW5cIikgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIERFRkFVTFRfT1BUSU9OUywgeyBjYXB0dXJlOiBvcHRpb25zIH0pO1xyXG5cdGVsc2UgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIERFRkFVTFRfT1BUSU9OUywgb3B0aW9ucyk7XHJcbn07XHJcblxyXG4vKipcclxuICogTm9ybWFsaXplcyBldmVudCB0eXBlcyB0byBhIGZsYXQgbGlzdC5cclxuICpcclxuICogVHlwZXMgYXJlIHNlcGFyYXRlZCBieSB3aGl0ZXNwYWNlcywgY29tbWFzIG9yIGJvdGgsIGluIGEgc3RyaW5nIGFzIHdlbGwgYXNcclxuICogd2l0aGluIHRoZSBlbnRyaWVzIG9mIGFuIGFycmF5IC0gc28gW1wiY2xpY2tcIiwgXCJmb2N1cyBibHVyXCJdIGdpdmVzIHRocmVlIHR5cGVzLlxyXG4gKlxyXG4gKiBBIHN0cmluZyBnZXRzIHRyaW1tZWQgYmVmb3JlIGl0IGlzIHNwbGl0LCBiZWNhdXNlIHRoZSBlbXB0eSBlbnRyaWVzIGEgbGVhZGluZ1xyXG4gKiBvciB0cmFpbGluZyBzZXBhcmF0b3IgcHJvZHVjZXMgYXJlIGFydGlmYWN0cyBvZiBzcGxpdHRpbmcsIG5vdCBzb21ldGhpbmcgdGhlXHJcbiAqIGNhbGxlciBhc2tlZCBmb3IuIEFuIGVtcHR5IGVudHJ5IGluc2lkZSBhbiBhcnJheSBpcyB0aGUgb3Bwb3NpdGUgY2FzZTogaXQgd2FzXHJcbiAqIHdyaXR0ZW4gZG93biBhbmQgdGhlcmVmb3JlIHRocm93cy5cclxuICpcclxuICogQHBhcmFtIHtzdHJpbmd8SXRlcmFibGU8c3RyaW5nPn0gdGhlRXZlbnRzXHJcbiAqIEByZXR1cm5zIHtzdHJpbmdbXX0gdGhlIGV2ZW50IHR5cGVzLCBuZXZlciBlbXB0eVxyXG4gKiBAdGhyb3dzIHtFcnJvcn0gd2hlbiBubyB0eXBlIGlzIGxlZnQgb3IgYW4gZW50cnkgaXMgbm90IGEgbm9uIGVtcHR5IHN0cmluZ1xyXG4gKi9cclxuY29uc3QgdG9FdmVudFR5cGVzID0gKHRoZUV2ZW50cykgPT4ge1xyXG5cdGlmKHRoZUV2ZW50cyA9PSBudWxsKSB0aHJvdyBuZXcgRXJyb3IoXCJFdmVudCB0eXBlcyBhcmUgcmVxdWlyZWQhXCIpO1x0XHJcblx0XHJcblx0Y29uc3QgZXZlbnRzID0gdHlwZW9mIHRoZUV2ZW50cyA9PT0gXCJzdHJpbmdcIiA/IHRoZUV2ZW50cy50cmltKCkuc3BsaXQoRVZFTlRTUExJVEVSKSA6IHRoZUV2ZW50cztcclxuXHRpZiAodHlwZW9mIGV2ZW50c1tTeW1ib2wuaXRlcmF0b3JdICE9PSBcImZ1bmN0aW9uXCIpIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgZXZlbnQgdHlwZXMhXCIpO1xyXG5cdGlmKGV2ZW50cy5sZW5ndGggPT09IDApIHRocm93IG5ldyBFcnJvcihcIkV2ZW50IHR5cGVzIGFyZSByZXF1aXJlZCFcIik7XHJcblxyXG5cdGNvbnN0IHJlc3VsdCA9IFtdO1xyXG5cclxuXHRmb3IgKGxldCBldmVudCBvZiBldmVudHMpIHtcclxuXHRcdGlmICh0eXBlb2YgZXZlbnQgIT09IFwic3RyaW5nXCIpIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgZXZlbnQgdHlwZXMhXCIpO1xyXG5cdFx0ZXZlbnQgPSBldmVudC50cmltKCk7XHJcblx0XHRpZiAoZXZlbnQubGVuZ3RoID09PSAwKSB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIGV2ZW50IHR5cGVzIVwiKTtcclxuXHRcdHJlc3VsdC5wdXNoKC4uLmV2ZW50LnNwbGl0KEVWRU5UU1BMSVRFUikpO1xyXG5cdH1cclxuXHRyZXR1cm4gcmVzdWx0O1xyXG59O1xyXG5cclxuY29uc3Qgc3VwcG9ydCA9IEV4dGVuZGVyKFwiRXZlbnRTdXBwb3J0XCIsIChQcm90b3R5cGUpID0+IHtcclxuXHQvKipcclxuXHQgKiBBZGRzIGEgaGFuZGxlIHRvIG9uZSBvciBtb3JlIGV2ZW50cy5cclxuXHQgKlxyXG5cdCAqIFRoZSBoYW5kbGUgaXMgbm90IGFkZGVkIGFzIGxpc3RlbmVyIGl0c2VsZiwgaXQgZ2V0cyB3cmFwcGVkLiBUaGF0IHdyYXBwZXJcclxuXHQgKiBhcHBsaWVzIHRoZSBzZWxlY3RvciBhbmQgaGFuZGxlcyB0aGUgb25jZSBvcHRpb24sIHdoaWNoIGtlZXBzIHJlbW92ZU9uIGFibGVcclxuXHQgKiB0byBmaW5kIGV2ZXJ5IHJlZ2lzdHJhdGlvbiBvZiBhIGhhbmRsZS5cclxuXHQgKlxyXG5cdCAqIFdpdGggYSBzZWxlY3RvciB0aGUgaGFuZGxlIGlzIG9ubHkgY2FsbGVkIHdoZW4gdGhlIHRhcmdldCBvZiB0aGUgZXZlbnRcclxuXHQgKiBtYXRjaGVzIGl0LiBUb2dldGhlciB3aXRoIG9uY2UgdGhpcyBuZWVkcyBjYXJlOiB0aGUgYnJvd3NlciBjb25zdW1lcyBhIG9uY2VcclxuXHQgKiBsaXN0ZW5lciBvbiB0aGUgZmlyc3QgZXZlbnQsIGV2ZW4gd2hlbiB0aGUgc2VsZWN0b3IgZGlkIG5vdCBtYXRjaCwgc28gdGhlXHJcblx0ICogd3JhcHBlciByZWdpc3RlcnMgaXRzZWxmIGFnYWluIGluIHRoYXQgY2FzZSBhbmQgd2FpdHMgZm9yIGEgbWF0Y2hpbmcgZXZlbnQuXHJcblx0ICpcclxuXHQgKiBAcGFyYW0ge3N0cmluZ3xJdGVyYWJsZTxzdHJpbmc+fSB0aGVFdmVudHMgLSBldmVudCB0eXBlcywgc2VwYXJhdGVkIGJ5IHdoaXRlc3BhY2VzIG9yIGNvbW1hc1xyXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBbYVNlbGVjdG9yXSAtIG9ubHkgY2FsbCB0aGUgaGFuZGxlIHdoZW4gdGhlIHRhcmdldCBvZiB0aGUgZXZlbnQgbWF0Y2hlc1xyXG5cdCAqIEBwYXJhbSB7RnVuY3Rpb259IGFIYW5kbGUgLSBjYWxsZWQgd2l0aCB0aGUgZXZlbnRcclxuXHQgKiBAcGFyYW0ge2Jvb2xlYW58T2JqZWN0fSBbdGhlT3B0aW9uc10gLSBhIGJvb2xlYW4gaXMgdGFrZW4gYXMgY2FwdHVyZSwgb3RoZXJ3aXNlIHRoZSBvcHRpb25zIG9mIGFkZEV2ZW50TGlzdGVuZXJcclxuXHQgKiBAcmV0dXJucyB7RXZlbnRUYXJnZXR9IHRoaXNcclxuXHQgKiBAdGhyb3dzIHtFcnJvcn0gYnkgbGVzcyB0aGFuIHR3byBhcmd1bWVudHMgb3IgaW52YWxpZCBldmVudCB0eXBlc1xyXG5cdCAqL1xyXG5cdFByb3RvdHlwZS5vbiA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdGlmIChhcmd1bWVudHMubGVuZ3RoIDwgMikgdGhyb3cgbmV3IEVycm9yKFwiVG9vIGxlc3MgYXJndW1lbnRzIVwiKTtcclxuXHJcblx0XHRjb25zdCBhcmdzID0gQXJyYXkuZnJvbShhcmd1bWVudHMpO1xyXG5cdFx0Y29uc3QgZXZlbnRzID0gdG9FdmVudFR5cGVzKGFyZ3Muc2hpZnQoKSk7XHJcblx0XHRjb25zdCBlbGVtZW50U2VsZWN0b3IgPSB0eXBlb2YgYXJnc1swXSA9PT0gXCJzdHJpbmdcIiA/IGFyZ3Muc2hpZnQoKSA6IG51bGw7XHJcblx0XHRjb25zdCBoYW5kbGUgPSBhcmdzLnNoaWZ0KCk7XHJcblx0XHRjb25zdCBvcHRpb24gPSB0b0V2ZW50T3B0aW9ucyhhcmdzLnNoaWZ0KCkpO1xyXG5cdFx0Y29uc3QgZWxlbWVudCA9IHRoaXM7XHJcblx0XHRjb25zdCB3cmFwcGVyID0gZnVuY3Rpb24oZXZlbnQpIHtcclxuXHRcdFx0Y29uc3QgeyB0YXJnZXQsIHR5cGUgfSA9IGV2ZW50O1xyXG5cdFx0XHRpZiAoZWxlbWVudFNlbGVjdG9yICYmIHR5cGVvZiB0YXJnZXQuaXMgPT09IFwiZnVuY3Rpb25cIiAmJiAhdGFyZ2V0LmlzKGVsZW1lbnRTZWxlY3RvcikpIHtcclxuXHRcdFx0XHRpZiAob3B0aW9uLm9uY2UpIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcih0eXBlLCB3cmFwcGVyLCBvcHRpb24pOyAvLyByZS1yZWdpc3RlciB0aGUgd3JhcHBlciBmb3IgdGhlIG5leHQgZXZlbnRcclxuXHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0aWYgKG9wdGlvbi5vbmNlKSByZW1vdmVXcmFwcGVyKGVsZW1lbnQsIHdyYXBwZXIsIFt0eXBlXSk7XHJcblx0XHRcdFx0Y29uc3QgcmVzdWx0ID0gaGFuZGxlLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7XHRcdFx0XHRcclxuXHRcdFx0XHRyZXR1cm4gcmVzdWx0O1xyXG5cdFx0XHR9XHJcblx0XHR9O1xyXG5cclxuXHRcdHJlZ2lzdHJhdGVIYW5kbGVXcmFwcGVyKHRoaXMsIGhhbmRsZSwgd3JhcHBlciwgZXZlbnRzLCBvcHRpb24pO1xyXG5cclxuXHRcdGZvciAobGV0IGV2ZW50IG9mIGV2ZW50cykge1xyXG5cdFx0XHR0aGlzLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQsIHdyYXBwZXIsIG9wdGlvbik7XHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIHRoaXM7XHJcblx0fTtcclxuXHJcblx0LyoqXHJcblx0ICogUmVtb3ZlcyBhIGhhbmRsZSBmcm9tIHNvbWUgb3IgYWxsIG9mIGl0cyBldmVudHMuXHJcblx0ICpcclxuXHQgKiBBIGhhbmRsZSByZWdpc3RlcmVkIGJ5IHNldmVyYWwgY2FsbHMgb2Ygb24oKSBpcyByZW1vdmVkIGZyb20gYWxsIG9mIHRoZW0uXHJcblx0ICpcclxuXHQgKiBAcGFyYW0ge0Z1bmN0aW9ufSBhSGFuZGxlIC0gdGhlIGZ1bmN0aW9uIGdpdmVuIHRvIG9uKClcclxuXHQgKiBAcGFyYW0ge3N0cmluZ3xJdGVyYWJsZTxzdHJpbmc+fSBbdGhlRXZlbnRzXSAtIHRoZSBldmVudHMgdG8gcmVtb3ZlLCBhbGwgb2YgdGhlbSB3aGVuIG9taXR0ZWRcclxuXHQgKiBAcmV0dXJucyB7RXZlbnRUYXJnZXR9IHRoaXNcclxuXHQgKiBAdGhyb3dzIHtFcnJvcn0gYnkgaW52YWxpZCBldmVudCB0eXBlc1xyXG5cdCAqL1xyXG5cdFByb3RvdHlwZS5yZW1vdmVPbiA9IGZ1bmN0aW9uIChhSGFuZGxlLCB0aGVFdmVudHMpIHtcclxuXHRcdGNvbnN0IGV2ZW50cyA9IHRoZUV2ZW50cyA/IHRvRXZlbnRUeXBlcyh0aGVFdmVudHMpIDogbnVsbDtcclxuXHRcdGNvbnN0IGhhbmRsZVdyYXBwZXJNYXAgPSBnZXRIYW5kbGVXcmFwcGVyTWFwKHRoaXMpO1xyXG5cdFx0Y29uc3Qgd3JhcHBlclNldCA9IGhhbmRsZVdyYXBwZXJNYXAuZ2V0KGFIYW5kbGUpO1x0XHJcblx0XHRpZiAod3JhcHBlclNldCkge1xyXG5cdFx0XHRmb3IgKGxldCB3cmFwcGVyIG9mIHdyYXBwZXJTZXQpXHJcblx0XHRcdFx0cmVtb3ZlV3JhcHBlcih0aGlzLCB3cmFwcGVyLCBldmVudHMpO1xyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiB0aGlzO1xyXG5cdH07XHJcblxyXG5cdC8qKlxyXG5cdCAqIERpc3BhdGNoZXMgYSBidWJibGluZywgY2FuY2VsYWJsZSBhbmQgY29tcG9zZWQgQ3VzdG9tRXZlbnQuXHJcblx0ICpcclxuXHQgKiBBIGxlYWRpbmcgbnVtYmVyIGRlbGF5cyB0aGUgZXZlbnQgYnkgdGhhdCBtYW55IG1pbGxpc2Vjb25kcyBhbmQgcmVwbGFjZXMgYVxyXG5cdCAqIGRlbGF5ZWQgZXZlbnQgb2YgdGhlIHNhbWUgdHlwZSB0aGF0IGlzIHN0aWxsIHBlbmRpbmcsIHNvIGEgcmVwZWF0ZWRseVxyXG5cdCAqIHRyaWdnZXJlZCBldmVudCBpcyBkaXNwYXRjaGVkIG9uY2UgYWZ0ZXIgdGhpbmdzIGNhbWUgdG8gcmVzdC5cclxuXHQgKlxyXG5cdCAqIE9uZSBkYXRhIGFyZ3VtZW50IGJlY29tZXMgZXZlbnQuZGV0YWlsIGFzIGl0IGlzLCBzZXZlcmFsIGJlY29tZSBhbiBhcnJheSBvZlxyXG5cdCAqIHRoZW0uIEEgbGVhZGluZyBFdmVudCBpcyB0YWtlbiBhcyB0aGUgZXZlbnQgdGhpcyBvbmUgaXMgZGVsZWdhdGVkIGZyb20gYW5kXHJcblx0ICogaXMgYXZhaWxhYmxlIGFzIGV2ZW50LmRlbGVnYXRlZEV2ZW50LlxyXG5cdCAqXHJcblx0ICogQHBhcmFtIHtudW1iZXJ9IFthVGltZW91dF0gLSBtaWxsaXNlY29uZHMgdG8gZGVsYXkgdGhlIGV2ZW50XHJcblx0ICogQHBhcmFtIHtzdHJpbmd9IGFUeXBlIC0gdGhlIGV2ZW50IHR5cGVcclxuXHQgKiBAcGFyYW0ge0V2ZW50fSBbYURlbGVnYXRlZEV2ZW50XSAtIHRoZSBldmVudCB0aGlzIG9uZSBpcyB0cmlnZ2VyZWQgZm9yXHJcblx0ICogQHBhcmFtIHsuLi4qfSBbdGhlRGF0YV0gLSBiZWNvbWVzIGV2ZW50LmRldGFpbFxyXG5cdCAqIEByZXR1cm5zIHtFdmVudFRhcmdldH0gdGhpc1xyXG5cdCAqL1xyXG5cdFByb3RvdHlwZS50cmlnZ2VyID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0Y29uc3QgYXJncyA9IEFycmF5LmZyb20oYXJndW1lbnRzKTtcclxuXHRcdGNvbnN0IHRpbWVvdXQgPSB0eXBlb2YgYXJnc1swXSA9PT0gXCJudW1iZXJcIiA/IGFyZ3Muc2hpZnQoKSA6IC0xO1xyXG5cdFx0aWYgKHRpbWVvdXQgPj0gMCkge1xyXG5cdFx0XHRjb25zdCB0eXBlID0gYXJnc1swXTtcclxuXHRcdFx0Y29uc3QgdGltZW91dHMgPSBnZXRUcmlnZ2VyVGltZW91dHModGhpcyk7XHJcblx0XHRcdGNvbnN0IHRpbWVvdXRpZCA9IHRpbWVvdXRzLmdldCh0eXBlKTtcclxuXHRcdFx0aWYgKHRpbWVvdXRpZCkgY2xlYXJUaW1lb3V0KHRpbWVvdXRpZCk7XHJcblxyXG5cdFx0XHR0aW1lb3V0cy5zZXQodHlwZSwgc2V0VGltZW91dCgoKSA9PiB7XHJcblx0XHRcdFx0dGltZW91dHMuZGVsZXRlKHR5cGUpO1xyXG5cdFx0XHRcdHRoaXMudHJpZ2dlci5hcHBseSh0aGlzLCBhcmdzKTtcclxuXHRcdFx0fSwgdGltZW91dCkpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0Y29uc3QgdHlwZSA9IGFyZ3Muc2hpZnQoKTtcclxuXHRcdFx0Y29uc3QgZGVsZWdhdGUgPSBhcmdzWzBdIGluc3RhbmNlb2YgRXZlbnQgPyBhcmdzLnNoaWZ0KCkgOiBudWxsO1xyXG5cdFx0XHRjb25zdCBkYXRhID0gYXJncy5sZW5ndGggPj0gMSA/IChhcmdzLmxlbmd0aCA9PSAxID8gYXJncy5zaGlmdCgpIDogYXJncykgOiBkZWxlZ2F0ZTtcclxuXHRcdFx0Y29uc3QgZXZlbnQgPSBuZXcgQ3VzdG9tRXZlbnQodHlwZSwgeyBidWJibGVzOiB0cnVlLCBjYW5jZWxhYmxlOiB0cnVlLCBjb21wb3NlZDogdHJ1ZSwgZGV0YWlsOiBkYXRhIH0pO1xyXG5cclxuXHRcdFx0aWYgKGRlbGVnYXRlKSBldmVudC5kZWxlZ2F0ZWRFdmVudCA9IGRlbGVnYXRlO1xyXG5cdFx0XHR0aGlzLmRpc3BhdGNoRXZlbnQoZXZlbnQpO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHRoaXM7XHJcblx0fTtcclxufSk7XHJcbmV4cG9ydCBkZWZhdWx0IHN1cHBvcnQ7XHJcbiIsImltcG9ydCBFeHRlbmRlciBmcm9tIFwiLi4vLi4vdXRpbHMvRXh0ZW5kZXJcIjtcclxuXHJcbmNvbnN0IENMQVNTU1BMSVRFUiA9IC9cXHMrLztcclxuXHJcbi8qKlxyXG4gKiBOb3JtYWxpemVzIGNsYXNzIG5hbWVzIHRvIGEgZmxhdCBsaXN0LlxyXG4gKlxyXG4gKiBOYW1lcyBhcmUgc2VwYXJhdGVkIGJ5IHdoaXRlc3BhY2VzLCBpbiBhIHN0cmluZyBhcyB3ZWxsIGFzIHdpdGhpbiB0aGUgZW50cmllc1xyXG4gKiBvZiBhbiBhcnJheSAtIHNvIFtcImFcIiwgXCJiIGNcIl0gZ2l2ZXMgdGhyZWUgbmFtZXMuXHJcbiAqXHJcbiAqIEEgc3RyaW5nIGdldHMgdHJpbW1lZCBiZWZvcmUgaXQgaXMgc3BsaXQsIGJlY2F1c2UgdGhlIGVtcHR5IGVudHJpZXMgYSBsZWFkaW5nXHJcbiAqIG9yIHRyYWlsaW5nIHdoaXRlc3BhY2UgcHJvZHVjZXMgYXJlIGFydGlmYWN0cyBvZiBzcGxpdHRpbmcuIEFuIGVtcHR5IGVudHJ5XHJcbiAqIHdyaXR0ZW4gZG93biBieSB0aGUgY2FsbGVyIHRocm93cyBpbnN0ZWFkLCBhcyBkb2VzIGFueXRoaW5nIHRoYXQgaXMgbm90IGFcclxuICogc3RyaW5nIC0gY2xhc3NMaXN0IHdvdWxkIG9ubHkgcmVwb3J0IHRob3NlIGFzIGFuIHVudXNhYmxlIHRva2VuLCBvciBzaWxlbnRseVxyXG4gKiB0YWtlIGEgYm9vbGVhbiBhcyBhIGNsYXNzIG5hbWVkIFwidHJ1ZVwiLlxyXG4gKlxyXG4gKiBAcGFyYW0ge3N0cmluZ3xzdHJpbmdbXX0gdGhlQ2xhc3Nlc1xyXG4gKiBAcmV0dXJucyB7SXRlcmFibGU8c3RyaW5nPn0gdGhlIGNsYXNzIG5hbWVzLCBuZXZlciBlbXB0eVxyXG4gKiBAdGhyb3dzIHtFcnJvcn0gd2hlbiBubyBuYW1lIGlzIGxlZnQgb3IgYW4gZW50cnkgaXMgbm90IGEgbm9uIGVtcHR5IHN0cmluZ1xyXG4gKi9cclxuY29uc3QgdG9DbGFzc05hbWVzID0gKHRoZUNsYXNzZXMpID0+IHtcclxuXHRpZiAodGhlQ2xhc3NlcyA9PSBudWxsKSB0aHJvdyBuZXcgRXJyb3IoXCJDbGFzcyBuYW1lcyBhcmUgcmVxdWlyZWQhXCIpO1xyXG5cclxuXHRjb25zdCBjbGFzc2VzID0gdHlwZW9mIHRoZUNsYXNzZXMgPT09IFwic3RyaW5nXCIgPyB0aGVDbGFzc2VzLnRyaW0oKS5zcGxpdChDTEFTU1NQTElURVIpIDogdGhlQ2xhc3NlcztcclxuXHRpZiAodHlwZW9mIGNsYXNzZXNbU3ltYm9sLml0ZXJhdG9yXSAhPT0gXCJmdW5jdGlvblwiKSB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIGNsYXNzIG5hbWVzIVwiKTtcclxuXHRpZiAoY2xhc3Nlcy5sZW5ndGggPT09IDApIHRocm93IG5ldyBFcnJvcihcIkNsYXNzIG5hbWVzIGFyZSByZXF1aXJlZCFcIik7XHJcblxyXG5cdGNvbnN0IHJlc3VsdCA9IFtdO1xyXG5cdGZvciAobGV0IGNsYXp6IG9mIGNsYXNzZXMpIHtcclxuXHRcdGlmICh0eXBlb2YgY2xhenogIT09IFwic3RyaW5nXCIpIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgY2xhc3MgbmFtZXMhXCIpO1xyXG5cdFx0Y2xhenogPSBjbGF6ei50cmltKCk7XHJcblx0XHRpZiAoY2xhenoubGVuZ3RoID09PSAwKSB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIGNsYXNzIG5hbWVzIVwiKTtcclxuXHRcdHJlc3VsdC5wdXNoKC4uLmNsYXp6LnNwbGl0KENMQVNTU1BMSVRFUikpO1xyXG5cdH1cclxuXHRcclxuXHRyZXR1cm4gcmVzdWx0O1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIEJ1aWxkcyBhIGNsYXNzIGZ1bmN0aW9uLCBhcyBhZGQsIHJlbW92ZSBhbmQgdG9nZ2xlIG9ubHkgZGlmZmVyIGJ5IHRoZSBtZXRob2RcclxuICogdGhleSBjYWxsIG9uIHRoZSBjbGFzc0xpc3QuXHJcbiAqXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBhTmFtZSAtIHRoZSBuYW1lIG9mIHRoZSBjbGFzc0xpc3QgbWV0aG9kXHJcbiAqIEByZXR1cm5zIHtmdW5jdGlvbiguLi4oc3RyaW5nfHN0cmluZ1tdKSk6RWxlbWVudH0gYSBmdW5jdGlvbiB0YWtpbmcgYW55IG1peCBvZiBuYW1lcywgbGlzdHMgb2YgbmFtZXMgYW5kIGFycmF5cyBvZiBib3RoXHJcbiAqL1xyXG5jb25zdCBjbGFzc0xpc3RGdW5jdGlvbiA9IChhTmFtZSkgPT5cclxuXHRmdW5jdGlvbiAoKSB7XHJcblx0XHRjb25zdCBjbGFzc2VzID0gdG9DbGFzc05hbWVzKEFycmF5LmZyb20oYXJndW1lbnRzKS5mbGF0KCkpO1xyXG5cdFx0Y2xhc3Nlcy5mb3JFYWNoKChjbGF6eikgPT4gdGhpcy5jbGFzc0xpc3RbYU5hbWVdKGNsYXp6KSk7XHJcblxyXG5cdFx0cmV0dXJuIHRoaXM7XHJcblx0fTtcclxuXHJcbmNvbnN0IHN1cHBvcnQgPSBFeHRlbmRlcihcIkh0bWxDbGFzc1N1cHBvcnRcIiwgKFByb3RvdHlwZSkgPT4ge1xyXG5cdC8qKlxyXG5cdCAqIEFkZHMgY2xhc3MgbmFtZXMgdG8gdGhpcyBlbGVtZW50LlxyXG5cdCAqXHJcblx0ICogQHBhcmFtIHsuLi4oc3RyaW5nfHN0cmluZ1tdKX0gdGhlQ2xhc3NlcyAtIG5hbWVzLCB3aGl0ZXNwYWNlIHNlcGFyYXRlZCBsaXN0cyBvZiBuYW1lcywgb3IgYXJyYXlzIG9mIGJvdGhcclxuXHQgKiBAcmV0dXJucyB7RWxlbWVudH0gdGhpc1xyXG5cdCAqIEB0aHJvd3Mge0Vycm9yfSBieSBpbnZhbGlkIGNsYXNzIG5hbWVzXHJcblx0ICovXHJcblx0UHJvdG90eXBlLmFkZENsYXNzID0gY2xhc3NMaXN0RnVuY3Rpb24oXCJhZGRcIik7XHJcblxyXG5cdC8qKlxyXG5cdCAqIFJlbW92ZXMgY2xhc3MgbmFtZXMgZnJvbSB0aGlzIGVsZW1lbnQuIE5hbWVzIG5vdCBwcmVzZW50IGFyZSBpZ25vcmVkLlxyXG5cdCAqXHJcblx0ICogQHBhcmFtIHsuLi4oc3RyaW5nfHN0cmluZ1tdKX0gdGhlQ2xhc3NlcyAtIG5hbWVzLCB3aGl0ZXNwYWNlIHNlcGFyYXRlZCBsaXN0cyBvZiBuYW1lcywgb3IgYXJyYXlzIG9mIGJvdGhcclxuXHQgKiBAcmV0dXJucyB7RWxlbWVudH0gdGhpc1xyXG5cdCAqIEB0aHJvd3Mge0Vycm9yfSBieSBpbnZhbGlkIGNsYXNzIG5hbWVzXHJcblx0ICovXHJcblx0UHJvdG90eXBlLnJlbW92ZUNsYXNzID0gY2xhc3NMaXN0RnVuY3Rpb24oXCJyZW1vdmVcIik7XHJcblxyXG5cdC8qKlxyXG5cdCAqIFRvZ2dsZXMgY2xhc3MgbmFtZXMgb2YgdGhpcyBlbGVtZW50LCBlYWNoIG9uZSBvbiBpdHMgb3duLlxyXG5cdCAqXHJcblx0ICogVGhlIGZvcmNlIHBhcmFtZXRlciBvZiBjbGFzc0xpc3QudG9nZ2xlIGlzIG5vdCBzdXBwb3J0ZWQgLSBhIGJvb2xlYW4gaXMgbm90XHJcblx0ICogYSBjbGFzcyBuYW1lIGFuZCB0aGVyZWZvcmUgdGhyb3dzLlxyXG5cdCAqXHJcblx0ICogQHBhcmFtIHsuLi4oc3RyaW5nfHN0cmluZ1tdKX0gdGhlQ2xhc3NlcyAtIG5hbWVzLCB3aGl0ZXNwYWNlIHNlcGFyYXRlZCBsaXN0cyBvZiBuYW1lcywgb3IgYXJyYXlzIG9mIGJvdGhcclxuXHQgKiBAcmV0dXJucyB7RWxlbWVudH0gdGhpc1xyXG5cdCAqIEB0aHJvd3Mge0Vycm9yfSBieSBpbnZhbGlkIGNsYXNzIG5hbWVzXHJcblx0ICovXHJcblx0UHJvdG90eXBlLnRvZ2dsZUNsYXNzID0gY2xhc3NMaXN0RnVuY3Rpb24oXCJ0b2dnbGVcIik7XHJcbn0pO1xyXG5leHBvcnQgZGVmYXVsdCBzdXBwb3J0OyIsImltcG9ydCBFeHRlbmRlciBmcm9tIFwiLi4vLi4vdXRpbHMvRXh0ZW5kZXJcIjtcclxuXHJcbi8qKlxyXG4gKiBCdWlsZHMgYSBsaXN0IGZ1bmN0aW9uIGJ5IGRlbGVnYXRpbmcgdG8gdGhlIGFycmF5IGZ1bmN0aW9uIG9mIHRoZSBzYW1lIG5hbWUuXHJcbiAqXHJcbiAqIFRoZSBsaXN0IGlzIGNvcGllZCBpbnRvIGFuIGFycmF5IGZpcnN0LiBUaGF0IGNvcHkgaXMgd2hhdCBtYWtlcyB0aGVzZSBmdW5jdGlvbnNcclxuICogc2FmZSBvbiBhIGxpdmUgSFRNTENvbGxlY3Rpb246IG5vZGVzIG1heSBiZSBtb3ZlZCBvciByZW1vdmVkIHdoaWxlIGl0ZXJhdGluZyxcclxuICogd2l0aG91dCB0aGUgaXRlcmF0aW9uIHNraXBwaW5nIHRoZSBlbnRyaWVzIHRoYXQgc2hpZnQgaW50byB0aGVpciBwbGFjZS5cclxuICpcclxuICogQHBhcmFtIHtzdHJpbmd9IGFOYW1lIC0gdGhlIG5hbWUgb2YgdGhlIGFycmF5IGZ1bmN0aW9uXHJcbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gYSBmdW5jdGlvbiBiZWhhdmluZyBsaWtlIHRoZSBhcnJheSBmdW5jdGlvbiBvZiB0aGF0IG5hbWVcclxuICovXHJcbmNvbnN0IGFycmF5RnVuY3Rpb24gPSAoYU5hbWUpID0+XHJcblx0ZnVuY3Rpb24gKCkge1xyXG5cdFx0cmV0dXJuIEFycmF5LnByb3RvdHlwZVthTmFtZV0uYXBwbHkoQXJyYXkuZnJvbSh0aGlzKSwgYXJndW1lbnRzKTtcclxuXHR9O1xyXG5cclxuY29uc3Qgc3VwcG9ydCA9IEV4dGVuZGVyKFwiTGlzdFN1cHBvcnRcIiwgKFByb3RvdHlwZSkgPT4ge1xyXG5cdC8qKlxyXG5cdCAqIEBwYXJhbSB7Kn0gYU5vZGUgLSB0aGUgbm9kZSB0byBsb29rIGZvclxyXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSBbYVN0YXJ0XSAtIHRoZSBpbmRleCB0byBzdGFydCBhdFxyXG5cdCAqIEByZXR1cm5zIHtudW1iZXJ9IHRoZSBpbmRleCBvZiB0aGUgbm9kZSwgb3IgLTFcclxuXHQgKi9cclxuXHRQcm90b3R5cGUuaW5kZXhPZiA9IGFycmF5RnVuY3Rpb24oXCJpbmRleE9mXCIpO1xyXG5cclxuXHQvKipcclxuXHQgKiBAcGFyYW0geyp9IGFOb2RlIC0gdGhlIG5vZGUgdG8gbG9vayBmb3JcclxuXHQgKiBAcGFyYW0ge251bWJlcn0gW2FTdGFydF0gLSB0aGUgaW5kZXggdG8gc3RhcnQgYXRcclxuXHQgKiBAcmV0dXJucyB7Ym9vbGVhbn0gd2hldGhlciB0aGUgbGlzdCBjb250YWlucyB0aGUgbm9kZVxyXG5cdCAqL1xyXG5cdFByb3RvdHlwZS5pbmNsdWRlcyA9IGFycmF5RnVuY3Rpb24oXCJpbmNsdWRlc1wiKTtcclxuXHJcblx0LyoqXHJcblx0ICogQ2FsbHMgdGhlIGZ1bmN0aW9uIGZvciBlYWNoIG5vZGUuXHJcblx0ICpcclxuXHQgKiBAcGFyYW0ge2Z1bmN0aW9uKE5vZGUsbnVtYmVyLE5vZGVbXSk6dm9pZH0gYUZ1bmN0aW9uIC0gY2FsbGVkIHdpdGggbm9kZSwgaW5kZXggYW5kIHRoZSBjb3BpZWQgbGlzdFxyXG5cdCAqL1xyXG5cdFByb3RvdHlwZS5mb3JFYWNoID0gYXJyYXlGdW5jdGlvbihcImZvckVhY2hcIik7XHJcblxyXG5cdC8qKlxyXG5cdCAqIEBwYXJhbSB7ZnVuY3Rpb24oTm9kZSxudW1iZXIsTm9kZVtdKToqfSBhRnVuY3Rpb25cclxuXHQgKiBAcmV0dXJucyB7QXJyYXl9IHRoZSByZXN1bHRzLCBhbiBhcnJheSBhcyB0aGUgcmVzdWx0cyBhcmUgbm90IG5vZGVzIGFueW1vcmVcclxuXHQgKi9cclxuXHRQcm90b3R5cGUubWFwID0gYXJyYXlGdW5jdGlvbihcIm1hcFwiKTtcclxuXHJcblx0LyoqXHJcblx0ICogQHBhcmFtIHtmdW5jdGlvbihOb2RlLG51bWJlcixOb2RlW10pOmJvb2xlYW59IGFGdW5jdGlvblxyXG5cdCAqIEByZXR1cm5zIHtib29sZWFufSB3aGV0aGVyIHRoZSBmdW5jdGlvbiBtYXRjaGVzIGF0IGxlYXN0IG9uZSBub2RlXHJcblx0ICovXHJcblx0UHJvdG90eXBlLnNvbWUgPSBhcnJheUZ1bmN0aW9uKFwic29tZVwiKTtcclxuXHJcblx0LyoqXHJcblx0ICogQHBhcmFtIHtmdW5jdGlvbihOb2RlLG51bWJlcixOb2RlW10pOmJvb2xlYW59IGFGdW5jdGlvblxyXG5cdCAqIEByZXR1cm5zIHtib29sZWFufSB3aGV0aGVyIHRoZSBmdW5jdGlvbiBtYXRjaGVzIGV2ZXJ5IG5vZGVcclxuXHQgKi9cclxuXHRQcm90b3R5cGUuZXZlcnkgPSBhcnJheUZ1bmN0aW9uKFwiZXZlcnlcIik7XHJcblxyXG5cdC8qKlxyXG5cdCAqIEBwYXJhbSB7ZnVuY3Rpb24oKixOb2RlLG51bWJlcixOb2RlW10pOip9IGFGdW5jdGlvblxyXG5cdCAqIEBwYXJhbSB7Kn0gW2FJbml0aWFsVmFsdWVdXHJcblx0ICogQHJldHVybnMgeyp9IHRoZSBhY2N1bXVsYXRlZCByZXN1bHRcclxuXHQgKi9cclxuXHRQcm90b3R5cGUucmVkdWNlID0gYXJyYXlGdW5jdGlvbihcInJlZHVjZVwiKTtcclxuXHJcblx0LyoqXHJcblx0ICogRmlsdGVycyB0aGUgbGlzdC5cclxuXHQgKlxyXG5cdCAqIFVubGlrZSBtYXAgdGhpcyBrZWVwcyB0aGUgdHlwZSBvZiB0aGUgbGlzdCAtIGEgTm9kZUxpc3QgcmV0dXJucyBhIE5vZGVMaXN0LCBhXHJcblx0ICogSFRNTENvbGxlY3Rpb24gcmV0dXJucyBhIEhUTUxDb2xsZWN0aW9uIC0gc28gYSBmaWx0ZXJlZCBsaXN0IGNhbiBiZSB1c2VkIGxpa2VcclxuXHQgKiBhbnkgb3RoZXIgb25lLiBUaGUgcmVzdWx0IGlzIGEgbmV3IGxpc3QsIGl0IGlzIG5vdCBsaXZlIGFueW1vcmUuXHJcblx0ICpcclxuXHQgKiBAcGFyYW0ge2Z1bmN0aW9uKE5vZGUsbnVtYmVyLE5vZGVbXSk6Ym9vbGVhbn0gYUZ1bmN0aW9uXHJcblx0ICogQHJldHVybnMge05vZGVMaXN0fEhUTUxDb2xsZWN0aW9ufSB0aGUgbWF0Y2hpbmcgbm9kZXNcclxuXHQgKi9cclxuXHRQcm90b3R5cGUuZmlsdGVyID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0Y29uc3QgcmVzdWx0ID0gQXJyYXkucHJvdG90eXBlLmZpbHRlci5hcHBseShBcnJheS5mcm9tKHRoaXMpLCBhcmd1bWVudHMpO1xyXG5cclxuXHRcdHJldHVybiB0aGlzLmNvbnN0cnVjdG9yLmZyb20ocmVzdWx0KTtcclxuXHR9O1xyXG5cclxuXHQvKipcclxuXHQgKiBAcmV0dXJucyB7Tm9kZXx1bmRlZmluZWR9IHRoZSBmaXJzdCBub2RlLCBvciB1bmRlZmluZWQgd2hlbiB0aGUgbGlzdCBpcyBlbXB0eVxyXG5cdCAqL1xyXG5cdFByb3RvdHlwZS5maXJzdCA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdGlmICh0aGlzLmxlbmd0aCA+IDApIHJldHVybiB0aGlzWzBdO1xyXG5cdH07XHJcblxyXG5cdC8qKlxyXG5cdCAqIEByZXR1cm5zIHtOb2RlfHVuZGVmaW5lZH0gdGhlIGxhc3Qgbm9kZSwgb3IgdW5kZWZpbmVkIHdoZW4gdGhlIGxpc3QgaXMgZW1wdHlcclxuXHQgKi9cclxuXHRQcm90b3R5cGUubGFzdCA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdGlmICh0aGlzLmxlbmd0aCA+IDApIHJldHVybiB0aGlzW3RoaXMubGVuZ3RoIC0gMV07XHJcblx0fTtcclxufSk7XHJcbmV4cG9ydCBkZWZhdWx0IHN1cHBvcnQ7IiwiaW1wb3J0IGV4dGVuZFByb3RvdHlwZSBmcm9tIFwiLi4vLi4vdXRpbHMvRXh0ZW5kUHJvdG90eXBlXCI7XG5pbXBvcnQgRGVsZWdhdGVyQnVpbGRlciBmcm9tIFwiLi4vLi4vdXRpbHMvRGVsZWdhdGVyQnVpbGRlclwiO1xuaW1wb3J0IExpc3RTdXBwb3J0IGZyb20gXCIuL0xpc3RTdXBwb3J0XCI7XG5cbi8qKlxuICogU2V0cyB1cCBhIGRvbSBsaXN0IHR5cGUgLSBOb2RlTGlzdCBvciBIVE1MQ29sbGVjdGlvbiAtIHRoZSBzYW1lIHdheS5cbiAqXG4gKiBUaGUgdHdvIG9ubHkgZGlmZmVyIGJ5IHRoZWlyIG93biB0eXBlIGFuZCB0aGUgZWxlbWVudCB0eXBlIHRoZXkgaG9sZCwgc28gdGhpc1xuICogYnVpbGRzIGJvdGggZnJvbSB0aG9zZSB0d28gcGFyYW1ldGVyczogaXQgYXBwbGllcyBMaXN0U3VwcG9ydCwgYWRkcyBhcHBseVRvLFxuICogdmFsIGFuZCB0aGUgc3RhdGljIGZyb20sIGFuZCB3aXJlcyB0aGUgZGVsZWdhdGlvbiB0aGF0IGxldHMgYSBsaXN0IGZvcndhcmRcbiAqIGV2ZXJ5IG1ldGhvZCBvZiBpdHMgZWxlbWVudHMuXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gTGlzdFR5cGUgLSB0aGUgbGlzdCB0eXBlLCBOb2RlTGlzdCBvciBIVE1MQ29sbGVjdGlvblxuICogQHBhcmFtIHtGdW5jdGlvbn0gRWxlbWVudFR5cGUgLSB0aGUgdHlwZSBvZiB0aGUgaXRlbXMsIE5vZGUgb3IgSFRNTEVsZW1lbnRcbiAqL1xuY29uc3QgYnVpbGRMaXN0VHlwZSA9IChMaXN0VHlwZSwgRWxlbWVudFR5cGUpID0+IHtcblx0ZXh0ZW5kUHJvdG90eXBlKExpc3RUeXBlLCBMaXN0U3VwcG9ydCk7XG5cblx0LyoqXG5cdCAqIEFwcGxpZXMgYSBmdW5jdGlvbiBvciBhIG1ldGhvZCB0byBlYWNoIGl0ZW0gYW5kIGNvbGxlY3RzIHRoZSByZXN1bHRzLlxuXHQgKlxuXHQgKiBBIGZ1bmN0aW9uIGlzIGNhbGxlZCB3aXRoIHRoZSBpdGVtIGZvbGxvd2VkIGJ5IHRoZSBleHRyYSBhcmd1bWVudHMuIEEgc3RyaW5nXG5cdCAqIGlzIHRha2VuIGFzIHRoZSBuYW1lIG9mIGEgbWV0aG9kIHRvIGNhbGwgb24gZWFjaCBpdGVtIHdpdGggdGhvc2UgYXJndW1lbnRzLlxuXHQgKiBOdWxsIHJlc3VsdHMgYXJlIHNraXBwZWQuXG5cdCAqXG5cdCAqIEBwYXJhbSB7RnVuY3Rpb258c3RyaW5nfSBjYWxsaW5nIC0gYSBmdW5jdGlvbiB0byBjYWxsLCBvciB0aGUgbmFtZSBvZiBhIG1ldGhvZFxuXHQgKiBAcGFyYW0gey4uLip9IHRoZUFyZ3VtZW50cyAtIHBhc3NlZCB0byB0aGUgZnVuY3Rpb24gb3IgbWV0aG9kXG5cdCAqIEByZXR1cm5zIHtBcnJheX0gdGhlIGNvbGxlY3RlZCByZXN1bHRzXG5cdCAqL1xuXHRMaXN0VHlwZS5wcm90b3R5cGUuYXBwbHlUbyA9IGZ1bmN0aW9uICgpIHtcblx0XHRjb25zdCBhcmdzID0gQXJyYXkuZnJvbShhcmd1bWVudHMpO1xuXHRcdGNvbnN0IGNhbGxpbmcgPSBhcmdzLnNoaWZ0KCk7XG5cdFx0Y29uc3QgaXNGdW5jdGlvbiA9IHR5cGVvZiBjYWxsaW5nID09PSBcImZ1bmN0aW9uXCI7XG5cdFx0Y29uc3QgcmVzdWx0cyA9IFtdO1xuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0Y29uc3Qgbm9kZSA9IHRoaXNbaV07XG5cdFx0XHRsZXQgcmVzdWx0O1xuXHRcdFx0aWYgKGlzRnVuY3Rpb24pIHJlc3VsdCA9IGNhbGxpbmcuYXBwbHkobnVsbCwgW25vZGVdLmNvbmNhdChhcmdzKSk7XG5cdFx0XHRlbHNlIGlmICh0eXBlb2Ygbm9kZVtjYWxsaW5nXSA9PT0gXCJmdW5jdGlvblwiKSByZXN1bHQgPSBub2RlW2NhbGxpbmddLmFwcGx5KG5vZGUsIGFyZ3MpO1xuXG5cdFx0XHRpZiAocmVzdWx0ICE9IG51bGwpIHJlc3VsdHMucHVzaChyZXN1bHQpO1xuXHRcdH1cblxuXHRcdHJldHVybiByZXN1bHRzO1xuXHR9O1xuXG5cdC8qKlxuXHQgKiBSZWFkcyBvciB3cml0ZXMgdGhlIHZhbHVlIG9mIHRoZSBpdGVtcy5cblx0ICpcblx0ICogV2l0aG91dCBhcmd1bWVudHMgdGhlIHZhbHVlcyBhcmUgY29sbGVjdGVkIGludG8gYSBNYXAsIGtleWVkIGJ5IHRoZSBuYW1lLCBpZFxuXHQgKiBvciBzZWxlY3RvciBvZiBlYWNoIGl0ZW0gLSBpdGVtcyB3aXRob3V0IGEgdmFsdWUgYXJlIGxlZnQgb3V0LCBzbyBhbiB1bmNoZWNrZWRcblx0ICogcmFkaW8gZG9lcyBub3Qgb3ZlcndyaXRlIHRoZSBzZWxlY3RlZCBvbmUgb2YgaXRzIGdyb3VwLiBXaXRoIGFyZ3VtZW50cyB0aGVcblx0ICogdmFsdWUgaXMgc2V0IG9uIGV2ZXJ5IGl0ZW0uXG5cdCAqXG5cdCAqIEBwYXJhbSB7Li4uKn0gW3RoZVZhbHVlXSAtIHRoZSB2YWx1ZSB0byBzZXQgb24gdGhlIGl0ZW1zXG5cdCAqIEByZXR1cm5zIHtNYXA8c3RyaW5nLCo+fExpc3RUeXBlfSB0aGUgdmFsdWVzIGJ5IGtleSwgb3IgdGhpcyB3aGVuIGEgdmFsdWUgd2FzIHNldFxuXHQgKi9cblx0TGlzdFR5cGUucHJvdG90eXBlLnZhbCA9IGZ1bmN0aW9uICgpIHtcblx0XHRpZiAoYXJndW1lbnRzLmxlbmd0aCA9PSAwKSB7XG5cdFx0XHRjb25zdCByZXN1bHQgPSBuZXcgTWFwKCk7XG5cdFx0XHRmb3IgKGNvbnN0IG5vZGUgb2YgdGhpcykge1xuXHRcdFx0XHRpZiAodHlwZW9mIG5vZGUudmFsID09PSBcImZ1bmN0aW9uXCIpIHtcblx0XHRcdFx0XHRjb25zdCB2YWx1ZSA9IG5vZGUudmFsKCk7XG5cdFx0XHRcdFx0aWYgKHZhbHVlICE9IG51bGwpIHJlc3VsdC5zZXQobm9kZS5uYW1lIHx8IG5vZGUuaWQgfHwgbm9kZS5zZWxlY3RvcigpLCB2YWx1ZSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdHJldHVybiByZXN1bHQ7XG5cdFx0fSBlbHNlIHRoaXMuYXBwbHlUbyhcInZhbFwiLCAuLi5hcmd1bWVudHMpO1xuXG5cdFx0cmV0dXJuIHRoaXM7XG5cdH07XG5cblx0LyoqXG5cdCAqIEJ1aWxkcyBhIGxpc3QgZnJvbSBub2Rlcywgb3RoZXIgbGlzdHMgYW5kIGFycmF5cyBvZiB0aGVtLlxuXHQgKlxuXHQgKiBFdmVyeSBhcmd1bWVudCB0aGF0IGlzIGFuIGl0ZW0gaXMgdGFrZW4sIGFuIGl0ZXJhYmxlIGlzIHJlYWQgaXRlbSBieSBpdGVtLCBzb1xuXHQgKiBhbnkgbWl4IGNhbiBiZSBwYXNzZWQuIEFueXRoaW5nIHRoYXQgaXMgbm90IGFuIGl0ZW0gaXMgbGVmdCBvdXQuIFRoZSByZXN1bHQgaXNcblx0ICogYSBwbGFpbiBsaXN0LCBub3QgYSBsaXZlIG9uZS5cblx0ICpcblx0ICogQHBhcmFtIHsuLi4oRWxlbWVudFR5cGV8SXRlcmFibGUpfSB0aGVJdGVtc1xuXHQgKiBAcmV0dXJucyB7TGlzdFR5cGV9IGEgbmV3IGxpc3Qgb2YgdGhlIGl0ZW1zXG5cdCAqL1xuXHRMaXN0VHlwZS5mcm9tID0gZnVuY3Rpb24gKCkge1xuXHRcdGNvbnN0IGFyZ3MgPSBBcnJheS5mcm9tKGFyZ3VtZW50cyk7XG5cdFx0Y29uc3QgZGF0YSA9IHt9O1xuXHRcdGxldCBjb3VudGVyID0gMDtcblxuXHRcdHdoaWxlIChhcmdzLmxlbmd0aCA+IDApIHtcblx0XHRcdGNvbnN0IGFyZyA9IGFyZ3Muc2hpZnQoKTtcblx0XHRcdGlmIChhcmcgIT0gbnVsbCkge1xuXHRcdFx0XHRpZiAoYXJnIGluc3RhbmNlb2YgRWxlbWVudFR5cGUpIGRhdGFbY291bnRlcisrXSA9IHsgdmFsdWU6IGFyZywgZW51bWVyYWJsZTogdHJ1ZSB9O1xuXHRcdFx0XHRlbHNlIGlmICh0eXBlb2YgYXJnW1N5bWJvbC5pdGVyYXRvcl0gPT09IFwiZnVuY3Rpb25cIikge1xuXHRcdFx0XHRcdGZvciAobGV0IGl0ZW0gb2YgYXJnKSB7XG5cdFx0XHRcdFx0XHRpZiAoaXRlbSBpbnN0YW5jZW9mIEVsZW1lbnRUeXBlKSBkYXRhW2NvdW50ZXIrK10gPSB7IHZhbHVlOiBpdGVtLCBlbnVtZXJhYmxlOiB0cnVlIH07XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0ZGF0YS5sZW5ndGggPSB7IHZhbHVlOiBjb3VudGVyIH07XG5cdFx0cmV0dXJuIE9iamVjdC5jcmVhdGUoTGlzdFR5cGUucHJvdG90eXBlLCBkYXRhKTtcblx0fTtcblxuXHREZWxlZ2F0ZXJCdWlsZGVyKFxuXHRcdGZ1bmN0aW9uIChhRnVuY3Rpb25OYW1lLCB0aGVBcmd1bWVudHMpIHtcblx0XHRcdGxldCByZXN1bHRzID0gW107XG5cdFx0XHR0aGlzLmZvckVhY2goKG5vZGUpID0+IHtcblx0XHRcdFx0aWYgKG5vZGUgJiYgdHlwZW9mIG5vZGVbYUZ1bmN0aW9uTmFtZV0gPT09IFwiZnVuY3Rpb25cIikge1xuXHRcdFx0XHRcdGNvbnN0IHJlc3VsdCA9IG5vZGVbYUZ1bmN0aW9uTmFtZV0uYXBwbHkobm9kZSwgdGhlQXJndW1lbnRzKTtcblx0XHRcdFx0XHRpZiAocmVzdWx0ICE9IG51bGwpIHtcblx0XHRcdFx0XHRcdGlmIChyZXN1bHQgaW5zdGFuY2VvZiBMaXN0VHlwZSkgcmVzdWx0cyA9IHJlc3VsdHMuY29uY2F0KEFycmF5LmZyb20ocmVzdWx0KSk7XG5cdFx0XHRcdFx0XHRlbHNlIHJlc3VsdHMucHVzaChyZXN1bHQpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cblx0XHRcdGlmIChyZXN1bHRzLmxlbmd0aCA9PT0gMCkgcmV0dXJuIHVuZGVmaW5lZDtcblx0XHRcdGVsc2UgaWYgKHJlc3VsdHNbMF0gaW5zdGFuY2VvZiBFbGVtZW50VHlwZSB8fCByZXN1bHRzWzBdIGluc3RhbmNlb2YgTGlzdFR5cGUpIHJldHVybiBMaXN0VHlwZS5mcm9tKHJlc3VsdHMpO1xuXHRcdFx0ZWxzZSByZXR1cm4gcmVzdWx0cztcblx0XHR9LFxuXHRcdExpc3RUeXBlLnByb3RvdHlwZSxcblx0XHROb2RlLnByb3RvdHlwZSxcblx0XHRIVE1MRWxlbWVudC5wcm90b3R5cGUsXG5cdFx0SFRNTElucHV0RWxlbWVudC5wcm90b3R5cGUsXG5cdFx0RWxlbWVudC5wcm90b3R5cGUsXG5cdFx0RXZlbnRUYXJnZXQucHJvdG90eXBlLFxuXHQpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgYnVpbGRMaXN0VHlwZTtcbiIsImltcG9ydCBFeHRlbmRlciBmcm9tIFwiLi4vLi4vdXRpbHMvRXh0ZW5kZXJcIjtcclxuXHJcbi8qKlxyXG4gKiBDb250ZW50IGFjY2VwdGVkIGJ5IHRoZSBpbnNlcnQgZnVuY3Rpb25zLlxyXG4gKlxyXG4gKiBAdHlwZWRlZiB7Tm9kZXxOb2RlTGlzdHxIVE1MQ29sbGVjdGlvbnxDb250ZW50W118c3RyaW5nfSBDb250ZW50XHJcbiAqL1xyXG5cclxuLyoqXHJcbiAqIE5vcm1hbGl6ZXMgY29udGVudCB0byBhIGZsYXQgbGlzdCBvZiBub2Rlcy5cclxuICpcclxuICogU3RyaW5ncyBhcmUgcGFyc2VkIHRvIG5vZGVzIGJ5IHRoZSBnbG9iYWwgY3JlYXRlKCksIGxpc3RzIGFuZCBhcnJheXMgYXJlIHRha2VuXHJcbiAqIGl0ZW0gYnkgaXRlbSwgc28gYW55IG1peCBvZiB0aGVtIGNhbiBiZSBwYXNzZWQuIExpc3RzIGFyZSByZWFkIGludG8gYW4gYXJyYXlcclxuICogYmVmb3JlIGFueXRoaW5nIGlzIGluc2VydGVkLCBiZWNhdXNlIGluc2VydGluZyBhIG5vZGUgcmVtb3ZlcyBpdCBmcm9tIHRoZSBsaXN0XHJcbiAqIGl0IGNhbWUgZnJvbSAtIGl0ZXJhdGluZyB0aGF0IGxpc3Qgd2hpbGUgaW5zZXJ0aW5nIHdvdWxkIHNraXAgZXZlcnkgb3RoZXIgbm9kZS5cclxuICpcclxuICogU3RyaW5ncyBhcmUgbm90IHRyaW1tZWQgYW5kIGFuIGVtcHR5IG9uZSBpcyBhY2NlcHRlZDogdW5saWtlIGV2ZW50IHR5cGVzIG9yXHJcbiAqIGNsYXNzIG5hbWVzLCB3aGl0ZXNwYWNlIGlzIGNvbnRlbnQuIFwiICAgXCIgYmVjb21lcyBhIHRleHQgbm9kZSwgXCJcIiBiZWNvbWVzIG5vXHJcbiAqIG5vZGUgYXQgYWxsLiBPbmx5IHRoZSBhYnNlbmNlIG9mIGFueSBhcmd1bWVudCBpcyBhbiBlcnJvci5cclxuICpcclxuICogQHBhcmFtIHsuLi5Db250ZW50fSB0aGVDb250ZW50XHJcbiAqIEByZXR1cm5zIHtOb2RlW119IHRoZSBub2RlcywgZW1wdHkgd2hlbiB0aGUgY29udGVudCBwcm9kdWNlZCBub25lXHJcbiAqIEB0aHJvd3Mge0Vycm9yfSB3aGVuIHRoZXJlIGlzIG5vIGNvbnRlbnQgYXQgYWxsIG9yIGFuIGl0ZW0gaXMgbm90IGNvbnRlbnRcclxuICovXHJcbmNvbnN0IHRvTm9kZXMgPSBmdW5jdGlvbiAoKSB7XHJcblx0Y29uc3QgY29udGVudCA9IEFycmF5LmZyb20oYXJndW1lbnRzKS5mbGF0KEluZmluaXR5KTtcclxuXHRpZiAoY29udGVudC5sZW5ndGggPT09IDApIHRocm93IG5ldyBFcnJvcihcIkNvbnRlbnQgaXMgcmVxdWlyZWQhXCIpO1xyXG5cclxuXHRyZXR1cm4gY29udGVudFxyXG5cdFx0Lm1hcCgoaXRlbSkgPT4ge1xyXG5cdFx0XHRpZiAoaXRlbSBpbnN0YW5jZW9mIE5vZGUpIHJldHVybiBpdGVtO1xyXG5cdFx0XHRpZiAoaXRlbSBpbnN0YW5jZW9mIE5vZGVMaXN0IHx8IGl0ZW0gaW5zdGFuY2VvZiBIVE1MQ29sbGVjdGlvbikgcmV0dXJuIEFycmF5LmZyb20oaXRlbSk7XHJcblx0XHRcdGlmICh0eXBlb2YgaXRlbSA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIEFycmF5LmZyb20oY3JlYXRlKGl0ZW0pKTtcclxuXHJcblx0XHRcdHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgY29udGVudCFcIik7XHJcblx0XHR9KVxyXG5cdFx0LmZsYXQoKTtcclxufTtcclxuXHJcbmNvbnN0IHN1cHBvcnQgPSBFeHRlbmRlcihcIk1hbmlwdWxhdGlvblN1cHBvcnRcIiwgUHJvdG90eXBlID0+IHtcclxuXHQvKipcclxuXHQgKiBSZW1vdmVzIGFsbCBjaGlsZCBub2Rlcy5cclxuXHQgKlxyXG5cdCAqIEByZXR1cm5zIHtOb2RlfSB0aGlzXHJcblx0ICovXHJcblx0UHJvdG90eXBlLmVtcHR5ID0gZnVuY3Rpb24oKXtcclxuXHRcdGNvbnN0IG5vZGVzID0gdGhpcy5jaGlsZE5vZGVzO1xyXG5cdFx0d2hpbGUobm9kZXMubGVuZ3RoICE9IDApXHRcdFx0XHJcblx0XHRcdG5vZGVzWzBdLnJlbW92ZSh0cnVlKTtcclxuXHRcdFxyXG5cdFx0cmV0dXJuIHRoaXM7XHJcblx0fTtcclxuXHRcclxuXHQvKipcclxuXHQgKiBAcmV0dXJucyB7Tm9kZUxpc3R9IHRoZSBsaXZlIGxpc3Qgb2YgY2hpbGQgbm9kZXNcclxuXHQgKi9cclxuXHRQcm90b3R5cGUuY29udGVudCA9IGZ1bmN0aW9uKCl7XHJcblx0XHRyZXR1cm4gdGhpcy5jaGlsZE5vZGVzO1xyXG5cdH07XHRcclxuXHRcclxuXHQvKipcclxuXHQgKiBHZXRzIG9yIHNldHMgdGhlIG1hcmt1cCBvZiB0aGlzIG5vZGUuXHJcblx0ICpcclxuXHQgKiBodG1sKCkgcmV0dXJucyB0aGUgaW5uZXJIVE1MLCBodG1sKHRydWUpIHRoZSBvdXRlckhUTUwgYW5kIGh0bWwoZmFsc2UpIHRoZVxyXG5cdCAqIGlubmVySFRNTC4gQW55IG90aGVyIGFyZ3VtZW50IHJlcGxhY2VzIGFsbCBjaGlsZHJlbiBieSB0aGUgZ2l2ZW4gY29udGVudC5cclxuXHQgKlxyXG5cdCAqIEBwYXJhbSB7Li4uKGJvb2xlYW58Q29udGVudCl9IHRoZUNvbnRlbnQgLSBudWxsIG9yIHVuZGVmaW5lZCB0aHJvd3NcclxuXHQgKiBAcmV0dXJucyB7c3RyaW5nfE5vZGV9IHRoZSBtYXJrdXAsIG9yIHRoaXMgd2hlbiBjb250ZW50IHdhcyBzZXRcclxuXHQgKi9cclxuXHRQcm90b3R5cGUuaHRtbCA9IGZ1bmN0aW9uKCl7XHJcblx0XHRpZihhcmd1bWVudHMubGVuZ3RoID09IDApXHJcblx0XHRcdHJldHVybiB0aGlzLmlubmVySFRNTDtcclxuXHRcdGVsc2UgaWYoYXJndW1lbnRzLmxlbmd0aCA9PSAxICYmIHR5cGVvZiBhcmd1bWVudHNbMF0gPT09IFwiYm9vbGVhblwiKVxyXG5cdFx0XHRpZihhcmd1bWVudHNbMF0pXHJcblx0XHRcdFx0cmV0dXJuIHRoaXMub3V0ZXJIVE1MO1xyXG5cdFx0XHRlbHNlXHJcblx0XHRcdFx0cmV0dXJuIHRoaXMuaW5uZXJIVE1MO1xyXG5cdFx0ZWxzZSB7XHJcblx0XHRcdGNvbnN0IG5vZGVzID0gdG9Ob2RlcyhBcnJheS5mcm9tKGFyZ3VtZW50cykpO1xyXG5cdFx0XHR0aGlzLmVtcHR5KCk7XHJcblx0XHRcdG5vZGVzLmZvckVhY2gobm9kZSA9PiB0aGlzLmFwcGVuZENoaWxkKG5vZGUpKTtcclxuXHRcdH1cclxuXHJcblx0XHRyZXR1cm4gdGhpcztcclxuXHR9O1xyXG5cdFxyXG5cdC8qKlxyXG5cdCAqIEFwcGVuZHMgdGhlIGNvbnRlbnQgYXMgbGFzdCBjaGlsZHJlbi5cclxuXHQgKlxyXG5cdCAqIEBwYXJhbSB7Li4uQ29udGVudH0gdGhlQ29udGVudFxyXG5cdCAqIEByZXR1cm5zIHtOb2RlfSB0aGlzXHJcblx0ICogQHRocm93cyB7RXJyb3J9IGJ5IGludmFsaWQgY29udGVudFxyXG5cdCAqL1xyXG5cdFByb3RvdHlwZS5hcHBlbmQgPSBmdW5jdGlvbigpe1xyXG5cdFx0dG9Ob2RlcyhBcnJheS5mcm9tKGFyZ3VtZW50cykpLmZvckVhY2gobm9kZSA9PiB0aGlzLmFwcGVuZENoaWxkKG5vZGUpKTtcclxuXHJcblx0XHRyZXR1cm4gdGhpcztcclxuXHR9O1xyXG5cclxuXHQvKipcclxuXHQgKiBJbnNlcnRzIHRoZSBjb250ZW50IGFzIGZpcnN0IGNoaWxkcmVuLlxyXG5cdCAqXHJcblx0ICogQHBhcmFtIHsuLi5Db250ZW50fSB0aGVDb250ZW50XHJcblx0ICogQHJldHVybnMge05vZGV9IHRoaXNcclxuXHQgKiBAdGhyb3dzIHtFcnJvcn0gYnkgaW52YWxpZCBjb250ZW50XHJcblx0ICovXHJcblx0UHJvdG90eXBlLnByZXBlbmQgPSBmdW5jdGlvbigpe1xyXG5cdFx0Y29uc3Qgbm9kZXMgPSB0b05vZGVzKEFycmF5LmZyb20oYXJndW1lbnRzKSk7XHJcblx0XHRjb25zdCBmaXJzdCA9IHRoaXMuZmlyc3RDaGlsZDtcclxuXHRcdG5vZGVzLmZvckVhY2gobm9kZSA9PiB0aGlzLmluc2VydEJlZm9yZShub2RlLCBmaXJzdCkpO1xyXG5cclxuXHRcdHJldHVybiB0aGlzO1xyXG5cdH07XHJcblxyXG5cdC8qKlxyXG5cdCAqIFJlcGxhY2VzIGEgbm9kZSBieSB0aGUgZ2l2ZW4gY29udGVudC5cclxuXHQgKlxyXG5cdCAqIENhbGxlZCB3aXRoIG9uZSBhcmd1bWVudCwgdGhpcyBub2RlIGlzIHJlcGxhY2VkIHdpdGhpbiBpdHMgcGFyZW50IG5vZGUuXHJcblx0ICogQ2FsbGVkIHdpdGggbW9yZSwgdGhlIGZpcnN0IG9uZSAtIGEgY2hpbGQgb2YgdGhpcyBub2RlIC0gaXMgcmVwbGFjZWQgYnkgdGhlXHJcblx0ICogY29udGVudCBmb2xsb3dpbmcgaXQuXHJcblx0ICpcclxuXHQgKiBAcGFyYW0gey4uLkNvbnRlbnR9IHRoZUNvbnRlbnQgLSB0aGUgbmV3IGNvbnRlbnQsIG9yIHRoZSBvbGQgbm9kZSBmb2xsb3dlZCBieSB0aGUgbmV3IGNvbnRlbnRcclxuXHQgKiBAcmV0dXJucyB7Tm9kZX0gdGhpcywgZXZlbiB3aGVuIHRoaXMgbm9kZSB3YXMgdGhlIHJlcGxhY2VkIG9uZVxyXG5cdCAqIEB0aHJvd3Mge0Vycm9yfSB3aGVuIGNhbGxlZCB3aXRob3V0IGFyZ3VtZW50cyBvciBieSBpbnZhbGlkIGNvbnRlbnRcclxuXHQgKi9cclxuXHRQcm90b3R5cGUucmVwbGFjZSA9IGZ1bmN0aW9uKCl7XHJcblx0XHRpZihhcmd1bWVudHMubGVuZ3RoIDwgMSlcclxuXHRcdFx0dGhyb3cgbmV3IEVycm9yKFwiSW5zdWZmaWNpZW50IGFyZ3VtZW50cyEgT25lIG9yIHR3byBub2RlcyByZXF1aXJlZCFcIik7XHJcblxyXG5cdFx0Y29uc3QgcGFyZW50ID0gYXJndW1lbnRzLmxlbmd0aCA9PSAxID8gdGhpcy5wYXJlbnROb2RlIDogdGhpcztcclxuXHRcdGNvbnN0IG9sZE5vZGUgPSBhcmd1bWVudHMubGVuZ3RoID09IDEgPyB0aGlzIDogYXJndW1lbnRzWzBdO1xyXG5cdFx0Y29uc3Qgbm9kZXMgPSB0b05vZGVzKGFyZ3VtZW50cy5sZW5ndGggPT0gMSA/IGFyZ3VtZW50c1swXSA6IEFycmF5LmZyb20oYXJndW1lbnRzKS5zbGljZSgxKSk7XHJcblxyXG5cdFx0bm9kZXMuZm9yRWFjaChub2RlID0+IHBhcmVudC5pbnNlcnRCZWZvcmUobm9kZSwgb2xkTm9kZSkpO1xyXG5cdFx0b2xkTm9kZS5yZW1vdmUoKTtcclxuXHJcblx0XHRyZXR1cm4gdGhpcztcclxuXHR9O1xyXG5cclxuXHQvKipcclxuXHQgKiBJbnNlcnRzIHRoZSBjb250ZW50IGRpcmVjdGx5IGFmdGVyIHRoaXMgbm9kZS5cclxuXHQgKlxyXG5cdCAqIEBwYXJhbSB7Li4uQ29udGVudH0gdGhlQ29udGVudFxyXG5cdCAqIEByZXR1cm5zIHtOb2RlfSB0aGlzXHJcblx0ICogQHRocm93cyB7RXJyb3J9IHdoZW4gdGhpcyBub2RlIGhhcyBubyBwYXJlbnQgbm9kZSBvciBieSBpbnZhbGlkIGNvbnRlbnRcclxuXHQgKi9cclxuXHRQcm90b3R5cGUuYWZ0ZXIgPSBmdW5jdGlvbigpe1xyXG5cdFx0aWYodGhpcy5wYXJlbnROb2RlID09IG51bGwpXHJcblx0XHRcdHRocm93IG5ldyBFcnJvcihcIkNhbid0IGluc2VydCBub2RlcyBhZnRlciB0aGlzIG5vZGUhIFBhcmVudCBub2RlIG5vdCBhdmFpbGFibGUhXCIpO1xyXG5cclxuXHRcdGNvbnN0IHBhcmVudCA9IHRoaXMucGFyZW50Tm9kZTtcclxuXHRcdGNvbnN0IG5leHQgPSB0aGlzLm5leHRTaWJsaW5nO1xyXG5cdFx0dG9Ob2RlcyhBcnJheS5mcm9tKGFyZ3VtZW50cykpLmZvckVhY2gobm9kZSA9PiBwYXJlbnQuaW5zZXJ0QmVmb3JlKG5vZGUsIG5leHQpKTtcclxuXHJcblx0XHRyZXR1cm4gdGhpcztcclxuXHR9O1xyXG5cclxuXHQvKipcclxuXHQgKiBJbnNlcnRzIHRoZSBjb250ZW50IGRpcmVjdGx5IGJlZm9yZSB0aGlzIG5vZGUuXHJcblx0ICpcclxuXHQgKiBAcGFyYW0gey4uLkNvbnRlbnR9IHRoZUNvbnRlbnRcclxuXHQgKiBAcmV0dXJucyB7Tm9kZX0gdGhpc1xyXG5cdCAqIEB0aHJvd3Mge0Vycm9yfSB3aGVuIHRoaXMgbm9kZSBoYXMgbm8gcGFyZW50IG5vZGUgb3IgYnkgaW52YWxpZCBjb250ZW50XHJcblx0ICovXHJcblx0UHJvdG90eXBlLmJlZm9yZSA9IGZ1bmN0aW9uKCl7XHJcblx0XHRpZih0aGlzLnBhcmVudE5vZGUgPT0gbnVsbClcclxuXHRcdFx0dGhyb3cgbmV3IEVycm9yKFwiQ2FuJ3QgaW5zZXJ0IG5vZGVzIGJlZm9yZSB0aGlzIG5vZGUhIFBhcmVudCBub2RlIG5vdCBhdmFpbGFibGUhXCIpO1xyXG5cclxuXHRcdGNvbnN0IHBhcmVudCA9IHRoaXMucGFyZW50Tm9kZTtcclxuXHRcdHRvTm9kZXMoQXJyYXkuZnJvbShhcmd1bWVudHMpKS5mb3JFYWNoKG5vZGUgPT4gcGFyZW50Lmluc2VydEJlZm9yZShub2RlLCB0aGlzKSk7XHJcblxyXG5cdFx0cmV0dXJuIHRoaXM7XHJcblx0fTtcclxufSk7XHJcbmV4cG9ydCBkZWZhdWx0IHN1cHBvcnQ7IiwiaW1wb3J0IEV4dGVuZGVyIGZyb20gXCIuLi8uLi91dGlscy9FeHRlbmRlclwiO1xyXG5cclxuY29uc3QgUEFSRU5UVE9LRU4gPSBcIjpwYXJlbnRcIjtcclxuY29uc3QgUVVPVEVTID0gW1wiXFxcIlwiLCBcIidcIl07XHJcblxyXG4vKipcclxuICogU3RyaXBzIHRoZSBvcHRpb25hbCBxdW90ZXMgYXJvdW5kIGEgc3ViIHNlbGVjdG9yLlxyXG4gKlxyXG4gKiBRdW90aW5nIGlzIG5vdCBuZWVkZWQgYW55bW9yZSwgYXMgdGhlIHNlbGVjdG9yIGlzIHJlYWQgYnkgY291bnRpbmcgYnJhY2tldHNcclxuICogaW5zdGVhZCBvZiBtYXRjaGluZyBhIHBhdHRlcm4sIGJ1dCBpdCBzdGF5cyBzdXBwb3J0ZWQuXHJcbiAqXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdWJxdWVyeVxyXG4gKiBAcmV0dXJucyB7c3RyaW5nfSB0aGUgc3ViIHNlbGVjdG9yLCBlbXB0eSB3aGVuIHRoZXJlIGlzIG5vbmVcclxuICovXHJcbmNvbnN0IGNsZWFudXBTdWJTZWxlY3RvciA9IChzdWJxdWVyeSkgPT4ge1xyXG5cdGlmICh0eXBlb2Ygc3VicXVlcnkgIT09IFwic3RyaW5nXCIpIHJldHVybiBcIlwiO1xyXG5cdHN1YnF1ZXJ5ID0gc3VicXVlcnkudHJpbSgpO1xyXG5cdGlmICgoc3VicXVlcnkuc3RhcnRzV2l0aCgnXCInKSAmJiBzdWJxdWVyeS5lbmRzV2l0aCgnXCInKSkgfHwgKHN1YnF1ZXJ5LnN0YXJ0c1dpdGgoXCInXCIpICYmIHN1YnF1ZXJ5LmVuZHNXaXRoKFwiJ1wiKSkpIHN1YnF1ZXJ5ID0gc3VicXVlcnkuc3Vic3RyaW5nKDEsIHN1YnF1ZXJ5Lmxlbmd0aCAtIDEpO1xyXG5cdHJldHVybiBzdWJxdWVyeS50cmltKCk7XHJcbn07XHJcblxyXG4vKipcclxuICogRmluZHMgdGhlIDpwYXJlbnQgdG9rZW4gb2YgYSBzZWxlY3Rvci5cclxuICpcclxuICogT25seSBhIHRva2VuIG9uIGJyYWNrZXQgbGV2ZWwgemVybyBhbmQgb3V0c2lkZSBvZiBxdW90ZXMgY291bnRzLCBzbyBuZWl0aGVyXHJcbiAqIFtkYXRhPVwiOnBhcmVudFwiXSBub3IgOm5vdCg6cGFyZW50KSBpcyB0YWtlbiBmb3Igb25lLlxyXG4gKlxyXG4gKiBAcGFyYW0ge3N0cmluZ30gYVNlbGVjdG9yXHJcbiAqIEByZXR1cm5zIHtudW1iZXJ9IHRoZSBpbmRleCBvZiB0aGUgdG9rZW4sIG9yIC0xXHJcbiAqL1xyXG5jb25zdCBpbmRleE9mUGFyZW50VG9rZW4gPSAoYVNlbGVjdG9yKSA9PiB7XHJcblx0bGV0IHF1b3RlID0gbnVsbDtcclxuXHRsZXQgZGVwdGggPSAwO1xyXG5cdGZvciAobGV0IGkgPSAwOyBpIDwgYVNlbGVjdG9yLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRjb25zdCBjaGFyID0gYVNlbGVjdG9yW2ldO1xyXG5cdFx0aWYgKHF1b3RlKSB7XHJcblx0XHRcdGlmIChjaGFyID09PSBxdW90ZSAmJiBhU2VsZWN0b3JbaSAtIDFdICE9PSBcIlxcXFxcIikgcXVvdGUgPSBudWxsO1xyXG5cdFx0fSBlbHNlIGlmIChRVU9URVMuaW5jbHVkZXMoY2hhcikpIHF1b3RlID0gY2hhcjtcclxuXHRcdGVsc2UgaWYgKGNoYXIgPT09IFwiKFwiKSBkZXB0aCsrO1xyXG5cdFx0ZWxzZSBpZiAoY2hhciA9PT0gXCIpXCIpIGRlcHRoLS07XHJcblx0XHRlbHNlIGlmIChkZXB0aCA9PT0gMCAmJiBhU2VsZWN0b3Iuc3RhcnRzV2l0aChQQVJFTlRUT0tFTiwgaSkpIHJldHVybiBpO1xyXG5cdH1cclxuXHJcblx0cmV0dXJuIC0xO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIFJlYWRzIGEgYnJhY2tldCBncm91cCBieSBjb3VudGluZyBicmFja2V0cywgc28gYSBuZXN0ZWQgZ3JvdXAgbGlrZVxyXG4gKiBkaXY6aGFzKHApOm5vdChzcGFuKSBpcyByZWFkIGFzIGEgd2hvbGUuXHJcbiAqXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBhU2VsZWN0b3JcclxuICogQHBhcmFtIHtudW1iZXJ9IGFTdGFydCAtIHRoZSBpbmRleCBvZiB0aGUgb3BlbmluZyBicmFja2V0XHJcbiAqIEByZXR1cm5zIHt7Y29udGVudDogc3RyaW5nLCBlbmQ6IG51bWJlcn19IHRoZSBjb250ZW50IG9mIHRoZSBncm91cCBhbmQgdGhlIGluZGV4IGJlaGluZCBpdFxyXG4gKiBAdGhyb3dzIHtFcnJvcn0gd2hlbiB0aGUgZ3JvdXAgaXMgbm90IGNsb3NlZFxyXG4gKi9cclxuY29uc3QgcmVhZEdyb3VwID0gKGFTZWxlY3RvciwgYVN0YXJ0KSA9PiB7XHJcblx0bGV0IHF1b3RlID0gbnVsbDtcclxuXHRsZXQgZGVwdGggPSAwO1xyXG5cdGZvciAobGV0IGkgPSBhU3RhcnQ7IGkgPCBhU2VsZWN0b3IubGVuZ3RoOyBpKyspIHtcclxuXHRcdGNvbnN0IGNoYXIgPSBhU2VsZWN0b3JbaV07XHJcblx0XHRpZiAocXVvdGUpIHtcclxuXHRcdFx0aWYgKGNoYXIgPT09IHF1b3RlICYmIGFTZWxlY3RvcltpIC0gMV0gIT09IFwiXFxcXFwiKSBxdW90ZSA9IG51bGw7XHJcblx0XHR9IGVsc2UgaWYgKFFVT1RFUy5pbmNsdWRlcyhjaGFyKSkgcXVvdGUgPSBjaGFyO1xyXG5cdFx0ZWxzZSBpZiAoY2hhciA9PT0gXCIoXCIpIGRlcHRoKys7XHJcblx0XHRlbHNlIGlmIChjaGFyID09PSBcIilcIiAmJiAtLWRlcHRoID09PSAwKSByZXR1cm4geyBjb250ZW50OiBhU2VsZWN0b3Iuc3Vic3RyaW5nKGFTdGFydCArIDEsIGkpLCBlbmQ6IGkgKyAxIH07XHJcblx0fVxyXG5cclxuXHR0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIHF1ZXJ5IVwiKTtcclxufTtcclxuXHJcbi8qKlxyXG4gKiBTcGxpdHMgYSBzZWxlY3RvciBhdCBpdHMgOnBhcmVudCB0b2tlbi5cclxuICpcclxuICogQHBhcmFtIHtzdHJpbmd9IGFTZWxlY3RvclxyXG4gKiBAcmV0dXJucyB7e3ByZWZpeDogc3RyaW5nLCBzZWxlY3Rvcjogc3RyaW5nLCBzdWZmaXg6IHN0cmluZ318bnVsbH0gdGhlIHBhcnRzLCBvciBudWxsIHdoZW4gdGhlcmUgaXMgbm8gdG9rZW5cclxuICogQHRocm93cyB7RXJyb3J9IHdoZW4gdGhlIGJyYWNrZXQgZ3JvdXAgb2YgdGhlIHRva2VuIGlzIG5vdCBjbG9zZWRcclxuICovXHJcbmNvbnN0IHNwbGl0UGFyZW50UXVlcnkgPSAoYVNlbGVjdG9yKSA9PiB7XHJcblx0Y29uc3QgaW5kZXggPSBpbmRleE9mUGFyZW50VG9rZW4oYVNlbGVjdG9yKTtcclxuXHRpZiAoaW5kZXggPCAwKSByZXR1cm4gbnVsbDtcclxuXHJcblx0Y29uc3QgYWZ0ZXIgPSBpbmRleCArIFBBUkVOVFRPS0VOLmxlbmd0aDtcclxuXHRjb25zdCBncm91cCA9IGFTZWxlY3RvclthZnRlcl0gPT09IFwiKFwiID8gcmVhZEdyb3VwKGFTZWxlY3RvciwgYWZ0ZXIpIDogeyBjb250ZW50OiBcIlwiLCBlbmQ6IGFmdGVyIH07XHJcblxyXG5cdHJldHVybiB7XHJcblx0XHRwcmVmaXg6IGFTZWxlY3Rvci5zdWJzdHJpbmcoMCwgaW5kZXgpLnRyaW0oKSxcclxuXHRcdHNlbGVjdG9yOiBjbGVhbnVwU3ViU2VsZWN0b3IoZ3JvdXAuY29udGVudCksXHJcblx0XHRzdWZmaXg6IGFTZWxlY3Rvci5zdWJzdHJpbmcoZ3JvdXAuZW5kKS50cmltKClcclxuXHR9O1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIEV4ZWN1dGVzIGEgc2VsZWN0b3IsIHJlc29sdmluZyB0aGUgOnBhcmVudCBwc2V1ZG8gc2VsZWN0b3IuXHJcbiAqXHJcbiAqIDpwYXJlbnQgcmV0dXJucyB0aGUgcGFyZW50IG9mIHRoZSBlbGVtZW50LCA6cGFyZW50KHNlbGVjdG9yKSB0aGUgbmV4dCBhbmNlc3RvclxyXG4gKiBtYXRjaGluZyB0aGUgc2VsZWN0b3IuIEV2ZXJ5dGhpbmcgYmVmb3JlIHRoZSB0b2tlbiBzZWxlY3RzIHRoZSBlbGVtZW50cyB0b1xyXG4gKiBzdGFydCBmcm9tLCBldmVyeXRoaW5nIGJlaGluZCBpdCBpcyBzZWFyY2hlZCB3aXRoaW4gdGhlIHBhcmVudHMgZm91bmQuXHJcbiAqXHJcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGFFbGVtZW50XHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBhU2VsZWN0b3JcclxuICogQHJldHVybnMge05vZGVMaXN0fHVuZGVmaW5lZH0gdGhlIHJlc3VsdCwgdW5kZWZpbmVkIHdoZW4gYSBzdGVwIGZvdW5kIG5vdGhpbmdcclxuICovXHJcbmNvbnN0IHF1ZXJ5RXhlY3V0ZXIgPSBmdW5jdGlvbiAoYUVsZW1lbnQsIGFTZWxlY3Rvcikge1xyXG5cdGNvbnN0IHF1ZXJ5ID0gc3BsaXRQYXJlbnRRdWVyeShhU2VsZWN0b3IpO1xyXG5cdGlmICghcXVlcnkpIHJldHVybiBhRWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKGFTZWxlY3Rvcik7XHJcblxyXG5cdGxldCByZXN1bHQgPSBhRWxlbWVudDtcclxuXHRpZiAocXVlcnkucHJlZml4Lmxlbmd0aCA+IDApIHtcclxuXHRcdHJlc3VsdCA9IGFFbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwocXVlcnkucHJlZml4KTtcclxuXHRcdGlmIChyZXN1bHQubGVuZ3RoID09IDApIHJldHVybjtcclxuXHR9XHJcblxyXG5cdHJlc3VsdCA9IHJlc3VsdC5wYXJlbnQocXVlcnkuc2VsZWN0b3IubGVuZ3RoID4gMCA/IHF1ZXJ5LnNlbGVjdG9yIDogbnVsbCk7XHJcblx0aWYgKCFyZXN1bHQpIHJldHVybjtcclxuXHJcblx0cmV0dXJuIHF1ZXJ5LnN1ZmZpeC5sZW5ndGggPiAwID8gcmVzdWx0LmZpbmQocXVlcnkuc3VmZml4KSA6IHJlc3VsdDtcclxufTtcclxuXHJcbi8qKlxyXG4gKiBOb3JtYWxpemVzIHNlbGVjdG9ycyB0byBhIGxpc3Qgb2Ygbm9uIGVtcHR5IHN0cmluZ3MuXHJcbiAqXHJcbiAqIEVtcHR5IHNlbGVjdG9ycyBhcmUgc2tpcHBlZCByYXRoZXIgdGhhbiB0aHJvd24gYXQsIG90aGVyIHRoYW4gaW4gdGhlIHNpYmxpbmdcclxuICogZnVuY3Rpb25zIGZvciBldmVudCB0eXBlcyBhbmQgY2xhc3MgbmFtZXM6IGFuIGVtcHR5IHNlbGVjdG9yIGNhcnJpZXMgbm8gaW50ZW50XHJcbiAqIGFuZCBqdXN0IGNvbnRyaWJ1dGVzIG5vdGhpbmcsIHdoaWxlIGEgbm9uIHN0cmluZyBpcyBhIG1pc3Rha2UgYW5kIHRocm93cy5cclxuICogU2VsZWN0b3JzIGFyZSBub3Qgc3BsaXQsIGNvbW1hIHNlcGFyYXRlZCBsaXN0cyBhcmUgbGVmdCBmb3IgcXVlcnlTZWxlY3RvckFsbC5cclxuICpcclxuICogQHBhcmFtIHtzdHJpbmd8SXRlcmFibGU8c3RyaW5nPn0gdGhlU2VsZWN0b3JzXHJcbiAqIEByZXR1cm5zIHtzdHJpbmdbXX0gdGhlIHRyaW1tZWQgc2VsZWN0b3JzLCBlbXB0eSBvbmVzIHJlbW92ZWRcclxuICogQHRocm93cyB7RXJyb3J9IHdoZW4gdGhlcmUgaXMgbm8gc2VsZWN0b3Igb3Igb25lIGlzIG5vdCBhIHN0cmluZ1xyXG4gKi9cclxuY29uc3QgdG9TZWxlY3RvciA9IGZ1bmN0aW9uICh0aGVTZWxlY3RvcnMpIHtcclxuXHRpZih0aGVTZWxlY3RvcnMgPT0gbnVsbCkgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBxdWVyeSFcIik7XHJcblxyXG5cdGNvbnN0IHNlbGVjdG9ycyA9IHR5cGVvZiB0aGVTZWxlY3RvcnMgPT09IFwic3RyaW5nXCIgPyBbdGhlU2VsZWN0b3JzXSA6IEFycmF5LmZyb20odGhlU2VsZWN0b3JzKTtcclxuXHJcblx0cmV0dXJuIHNlbGVjdG9yc1xyXG5cdFx0Lm1hcCgoc2VsZWN0b3IpID0+IHtcclxuXHRcdFx0XHRpZih0eXBlb2Ygc2VsZWN0b3IgIT09IFwic3RyaW5nXCIpIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgcXVlcnkhXCIpO1xyXG5cdFx0XHRcdHJldHVybiBzZWxlY3Rvci50cmltKCk7XHJcblx0XHRcdH0pXHJcblx0XHQuZmlsdGVyKChzZWxlY3RvcikgPT4gc2VsZWN0b3IubGVuZ3RoID4gMCk7XHJcbn1cclxuXHJcblxyXG5jb25zdCBzdXBwb3J0ID0gRXh0ZW5kZXIoXCJRdWVyeVN1cHBvcnRcIiwgKFByb3RvdHlwZSkgPT4ge1xyXG5cdC8qKlxyXG5cdCAqIFNlYXJjaGVzIG5vZGVzIGJ5IG9uZSBvciBtb3JlIHNlbGVjdG9ycy5cclxuXHQgKlxyXG5cdCAqIFNlbGVjdG9yIGxpc3RzIHNlcGFyYXRlZCBieSBjb21tYSBhcmUgbGVmdCB0byBxdWVyeVNlbGVjdG9yQWxsLCB3aGljaCBrbm93c1xyXG5cdCAqIHRoZW0gYW5kIGdldHMgdGhlIGNvbW1hcyBpbnNpZGUgYnJhY2tldHMgYW5kIHF1b3RlcyByaWdodC4gVGhlIHJlc3VsdHMgb2ZcclxuXHQgKiBzZXZlcmFsIHNlbGVjdG9ycyBhcmUgY29sbGVjdGVkIGluIHRoZSBvcmRlciB0aGV5IHdlcmUgZ2l2ZW4sIHdpdGhvdXRcclxuXHQgKiByZW1vdmluZyB0aGUgbm9kZXMgYSBzZWNvbmQgc2VsZWN0b3IgZmluZHMgYWdhaW4uXHJcblx0ICpcclxuXHQgKiBAcGFyYW0gey4uLnN0cmluZ30gdGhlU2VsZWN0b3JzIC0gc2VsZWN0b3JzLCBlbXB0eSBvbmVzIGFyZSBza2lwcGVkXHJcblx0ICogQHJldHVybnMge05vZGVMaXN0fSB0aGUgbm9kZXMgZm91bmQsIGVtcHR5IHdoZW4gdGhlcmUgYXJlIG5vbmVcclxuXHQgKiBAdGhyb3dzIHtFcnJvcn0gYnkgYSBzZWxlY3RvciBiZXNpZGUgYSBzdHJpbmdcclxuXHQgKi9cclxuXHRQcm90b3R5cGUuZmluZCA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdGNvbnN0IG5vZGVzID0gW107XHJcblx0XHRjb25zdCBzZWxlY3RvcnMgPSB0b1NlbGVjdG9yKGFyZ3VtZW50cyk7XHJcblx0XHRmb3IobGV0IHNlbGVjdG9yIG9mIHNlbGVjdG9ycyl7XHJcblx0XHRcdGNvbnN0IHJlc3VsdCA9IHF1ZXJ5RXhlY3V0ZXIodGhpcywgc2VsZWN0b3IpO1xyXG5cdFx0XHRpZiAocmVzdWx0KSBub2Rlcy5wdXNoKHJlc3VsdCk7XHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIE5vZGVMaXN0LmZyb20oLi4ubm9kZXMpO1xyXG5cdH07XHJcblxyXG5cdC8qKlxyXG5cdCAqIENoZWNrcyB3aGV0aGVyIHRoaXMgbm9kZSBtYXRjaGVzIGF0IGxlYXN0IG9uZSBvZiB0aGUgc2VsZWN0b3JzLlxyXG5cdCAqXHJcblx0ICogQSBEb2N1bWVudCBhbmQgYSBEb2N1bWVudEZyYWdtZW50IG5ldmVyIG1hdGNoLCBhcyB0aGV5IGNhbiBub3QgYmUgc2VsZWN0ZWQgLVxyXG5cdCAqIHRoYXQgYWxzbyBjb3ZlcnMgYSBTaGFkb3dSb290LCB3aGljaCBpcyBhIERvY3VtZW50RnJhZ21lbnQuXHJcblx0ICpcclxuXHQgKiBAcGFyYW0gey4uLihzdHJpbmd8c3RyaW5nW10pfSB0aGVTZWxlY3RvcnMgLSBzZWxlY3RvcnMsIGdpdmVuIG9uZSBieSBvbmUgb3IgYXMgYSBsaXN0XHJcblx0ICogQHJldHVybnMge2Jvb2xlYW59IHdoZXRoZXIgb25lIG9mIHRoZSBzZWxlY3RvcnMgbWF0Y2hlc1xyXG5cdCAqIEB0aHJvd3Mge0RPTUV4Y2VwdGlvbn0gYnkgYW4gaW52YWxpZCBzZWxlY3RvclxyXG5cdCAqL1xyXG5cdFByb3RvdHlwZS5pcyA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdGlmICh0aGlzIGluc3RhbmNlb2YgRG9jdW1lbnQgfHwgdGhpcyBpbnN0YW5jZW9mIERvY3VtZW50RnJhZ21lbnQpIHJldHVybiBmYWxzZTtcclxuXHRcdGVsc2UgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT0gMSkge1xyXG5cdFx0XHRpZiAodHlwZW9mIGFyZ3VtZW50c1swXSA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIHRoaXMubWF0Y2hlcyhhcmd1bWVudHNbMF0pO1xyXG5cdFx0XHRlbHNlIGlmICh0eXBlb2YgYXJndW1lbnRzWzBdLmxlbmd0aCA9PT0gXCJudW1iZXJcIikge1xyXG5cdFx0XHRcdGxldCBmaWx0ZXIgPSBhcmd1bWVudHNbMF07XHJcblx0XHRcdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBmaWx0ZXIubGVuZ3RoOyBpKyspIGlmICh0aGlzLm1hdGNoZXMoZmlsdGVyW2ldKSkgcmV0dXJuIHRydWU7XHJcblx0XHRcdH1cclxuXHRcdH0gZWxzZSBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHJldHVybiB0aGlzLmlzKEFycmF5LmZyb20oYXJndW1lbnRzKSk7XHJcblxyXG5cdFx0cmV0dXJuIGZhbHNlO1xyXG5cdH07XHJcblxyXG5cdC8qKlxyXG5cdCAqIFJldHVybnMgdGhlIHBhcmVudCBvZiB0aGlzIG5vZGUsIG9yIHRoZSBuZXh0IGFuY2VzdG9yIG1hdGNoaW5nIGEgc2VsZWN0b3IuXHJcblx0ICpcclxuXHQgKiBBbiBpbnZhbGlkIHNlbGVjdG9yIGlzIG5vdCBjYXVnaHQ6IGl0IHdvdWxkIHJldHVybiB0aGUgcGFyZW50IHJlYWNoZWQgc28gZmFyLFxyXG5cdCAqIHdoaWNoIGlzIGluZGlzdGluZ3Vpc2hhYmxlIGZyb20gYSBtYXRjaCwgd2hpbGUgYSBzZWxlY3RvciBtYXRjaGluZyBub3RoaW5nXHJcblx0ICogY29ycmVjdGx5IHJldHVybnMgbnVsbC4gTGV0dGluZyBpdCB0aHJvdyBrZWVwcyB0aG9zZSB0d28gYXBhcnQuXHJcblx0ICpcclxuXHQgKiBAcGFyYW0ge3N0cmluZ3xib29sZWFufSBbc2VsZWN0b3JdIC0gYSBzZWxlY3RvciB0byBsb29rIGZvciwgb3IgdGhlIGlnbm9yZVNoYWRvd1Jvb3QgZmxhZ1xyXG5cdCAqIEBwYXJhbSB7Ym9vbGVhbn0gW2lnbm9yZVNoYWRvd1Jvb3RdIC0gY29udGludWUgYXQgdGhlIGhvc3Qgb2YgYSBzaGFkb3cgcm9vdCBpbnN0ZWFkIG9mIHN0b3BwaW5nXHJcblx0ICogQHJldHVybnMge05vZGV8bnVsbH0gdGhlIHBhcmVudCwgdGhlIG1hdGNoaW5nIGFuY2VzdG9yLCBvciBudWxsIHdoZW4gdGhlcmUgaXMgbm9uZVxyXG5cdCAqIEB0aHJvd3Mge0RPTUV4Y2VwdGlvbn0gYnkgYW4gaW52YWxpZCBzZWxlY3RvclxyXG5cdCAqL1xyXG5cdFByb3RvdHlwZS5wYXJlbnQgPSBmdW5jdGlvbiAoc2VsZWN0b3IsIGlnbm9yZVNoYWRvd1Jvb3QpIHtcclxuXHRcdGlmICghdGhpcy5wYXJlbnROb2RlKSByZXR1cm4gbnVsbDtcclxuXHRcdGlnbm9yZVNoYWRvd1Jvb3QgPSB0eXBlb2Ygc2VsZWN0b3IgPT09IFwiYm9vbGVhblwiID8gc2VsZWN0b3IgOiBpZ25vcmVTaGFkb3dSb290O1xyXG5cdFx0c2VsZWN0b3IgPSB0eXBlb2Ygc2VsZWN0b3IgPT09IFwic3RyaW5nXCIgPyBzZWxlY3RvciA6IG51bGw7XHJcblxyXG5cdFx0bGV0IHBhcmVudCA9IHRoaXMucGFyZW50Tm9kZTtcclxuXHRcdGlmIChwYXJlbnQgaW5zdGFuY2VvZiBTaGFkb3dSb290ICYmIGlnbm9yZVNoYWRvd1Jvb3QpIHBhcmVudCA9IHBhcmVudC5ob3N0O1xyXG5cclxuXHRcdGlmIChzZWxlY3RvcikgcmV0dXJuIHBhcmVudC5pcyhzZWxlY3RvcikgPyBwYXJlbnQgOiBwYXJlbnQucGFyZW50KHNlbGVjdG9yLCBpZ25vcmVTaGFkb3dSb290KTtcclxuXHJcblx0XHRyZXR1cm4gcGFyZW50O1xyXG5cdH07XHJcblxyXG5cdC8qKlxyXG5cdCAqIENvbGxlY3RzIHRoZSBhbmNlc3RvcnMgb2YgdGhpcyBub2RlLCBmcm9tIHRoZSBuZWFyZXN0IG9uZSB1cHdhcmRzLlxyXG5cdCAqXHJcblx0ICogV2l0aCBhIHNlbGVjdG9yIG9ubHkgdGhlIG1hdGNoaW5nIGFuY2VzdG9ycyBhcmUgY29sbGVjdGVkLCBhcyBldmVyeSBzdGVwXHJcblx0ICogd2Fsa3MgdXAgdG8gdGhlIG5leHQgbWF0Y2guXHJcblx0ICpcclxuXHQgKiBAcGFyYW0ge3N0cmluZ3xib29sZWFufSBbc2VsZWN0b3JdIC0gYSBzZWxlY3RvciB0byBsb29rIGZvciwgb3IgdGhlIGlnbm9yZVNoYWRvd1Jvb3QgZmxhZ1xyXG5cdCAqIEBwYXJhbSB7Ym9vbGVhbn0gW2lnbm9yZVNoYWRvd1Jvb3RdIC0gY29udGludWUgYXQgdGhlIGhvc3Qgb2YgYSBzaGFkb3cgcm9vdCBpbnN0ZWFkIG9mIHN0b3BwaW5nXHJcblx0ICogQHJldHVybnMge05vZGVMaXN0fSB0aGUgYW5jZXN0b3JzLCBlbXB0eSB3aGVuIHRoZXJlIGFyZSBub25lXHJcblx0ICogQHRocm93cyB7RE9NRXhjZXB0aW9ufSBieSBhbiBpbnZhbGlkIHNlbGVjdG9yXHJcblx0ICovXHJcblx0UHJvdG90eXBlLnBhcmVudHMgPSBmdW5jdGlvbiAoKSB7XHJcblx0XHRjb25zdCByZXN1bHQgPSBuZXcgQXJyYXkoKTtcclxuXHRcdGxldCBwYXJlbnQgPSBQcm90b3R5cGUucGFyZW50LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcblx0XHR3aGlsZSAocGFyZW50KSB7XHJcblx0XHRcdHJlc3VsdC5wdXNoKHBhcmVudCk7XHJcblx0XHRcdHBhcmVudCA9IFByb3RvdHlwZS5wYXJlbnQuYXBwbHkocGFyZW50LCBhcmd1bWVudHMpO1xyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiBOb2RlTGlzdC5mcm9tKHJlc3VsdCk7XHJcblx0fTtcclxuXHJcblx0LyoqXHJcblx0ICogQnVpbGRzIGEgc2VsZWN0b3IgYWRkcmVzc2luZyB0aGlzIG5vZGUuXHJcblx0ICpcclxuXHQgKiBBbiBpZCBlbmRzIHRoZSBzZWxlY3RvciwgYXMgaXQgYWxyZWFkeSBpZGVudGlmaWVzIHRoZSBub2RlLiBPdGhlcndpc2UgdGhlIHRhZ1xyXG5cdCAqIG5hbWUgaXMgdXNlZCBhbmQgdGhlIHBhdGggY29udGludWVzIGF0IHRoZSBwYXJlbnQuIEEgcG9zaXRpb24gaXMgb25seSBhZGRlZFxyXG5cdCAqIHdoZW4gdGhlIHBhcmVudCBoYXMgbW9yZSB0aGFuIG9uZSBlbGVtZW50IGNoaWxkLCBhbmQgaXQgY291bnRzIGFsbCBvZiB0aGVtIC1cclxuXHQgKiB0aGF0IGlzIHdoYXQgOm50aC1jaGlsZCBkb2VzLCB1bmxpa2UgOm50aC1vZi10eXBlLlxyXG5cdCAqXHJcblx0ICogVGhlIGlkIGlzIG5vdCBlc2NhcGVkLCBzbyBhbiBpZCBuZWVkaW5nIGl0IGdpdmVzIGFuIGludmFsaWQgc2VsZWN0b3IuXHJcblx0ICpcclxuXHQgKiBAcmV0dXJucyB7c3RyaW5nfHVuZGVmaW5lZH0gdGhlIHNlbGVjdG9yLCB1bmRlZmluZWQgZm9yIGEgRG9jdW1lbnQgb3IgRG9jdW1lbnRGcmFnbWVudFxyXG5cdCAqL1xyXG5cdFByb3RvdHlwZS5zZWxlY3RvciA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdGlmICh0aGlzIGluc3RhbmNlb2YgRG9jdW1lbnQgfHwgdGhpcyBpbnN0YW5jZW9mIERvY3VtZW50RnJhZ21lbnQpIHJldHVybiB1bmRlZmluZWQ7XHJcblx0XHRlbHNlIGlmICh0aGlzLmlkKSByZXR1cm4gXCIjXCIgKyB0aGlzLmlkO1xyXG5cdFx0ZWxzZSB7XHJcblx0XHRcdGxldCBzZWxlY3RvciA9IHRoaXMudGFnTmFtZS50b0xvd2VyQ2FzZSgpO1xyXG5cdFx0XHRjb25zdCBwYXJlbnQgPSB0aGlzLnBhcmVudCgpO1xyXG5cdFx0XHRpZiAocGFyZW50KSB7XHJcblx0XHRcdFx0aWYocGFyZW50LmNoaWxkcmVuLmxlbmd0aCA+IDEpIHtcclxuXHRcdFx0XHRcdGNvbnN0IGluZGV4ID0gcGFyZW50LmNoaWxkcmVuLmluZGV4T2YodGhpcyk7XHJcblx0XHRcdFx0XHRzZWxlY3RvciA9IGAke3NlbGVjdG9yfTpudGgtY2hpbGQoJHtpbmRleCArIDF9KWA7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGNvbnN0IHBhcmVudFNlbGVjdG9yID0gcGFyZW50LnNlbGVjdG9yKCk7XHJcblx0XHRcdFx0cmV0dXJuIHBhcmVudFNlbGVjdG9yICE9IG51bGwgPyBgJHtwYXJlbnRTZWxlY3Rvcn0gPiAke3NlbGVjdG9yfWAgOiBzZWxlY3RvcjtcclxuXHRcdFx0fVxyXG5cdFx0XHRyZXR1cm4gc2VsZWN0b3I7XHJcblx0XHR9XHJcblx0fTtcclxuXHJcblx0LyoqXHJcblx0ICogUmV0dXJucyB0aGUgZmlyc3Qgbm9kZSBvZiBjbG9zZXN0cygpLlxyXG5cdCAqXHJcblx0ICogQHBhcmFtIHtzdHJpbmd9IGFRdWVyeVxyXG5cdCAqIEByZXR1cm5zIHtOb2RlfHVuZGVmaW5lZH0gdGhlIGZpcnN0IG5vZGUgZm91bmQsIG9yIHVuZGVmaW5lZFxyXG5cdCAqL1xyXG5cdFByb3RvdHlwZS5jbG9zZXN0ID0gZnVuY3Rpb24gKGFRdWVyeSkge1xyXG5cdFx0cmV0dXJuIHRoaXMuY2xvc2VzdHMoYVF1ZXJ5KS5maXJzdCgpO1xyXG5cdH07XHJcblxyXG5cdC8qKlxyXG5cdCAqIFNlYXJjaGVzIHRoZSBub2RlcyBjbG9zZXN0IHRvIHRoaXMgb25lIGJ5IHRoZWlyIGRpc3RhbmNlIGluIHRoZSB0cmVlLlxyXG5cdCAqXHJcblx0ICogVGhlIHN1YnRyZWUgb2YgdGhpcyBub2RlIGlzIHNlYXJjaGVkIGZpcnN0LCB0aGVuIHRoZSBzdWJ0cmVlIG9mIHRoZSBwYXJlbnQsXHJcblx0ICogYW5kIHNvIG9uIHVwd2FyZHMgLSB0aGUgc2VhcmNoIHdpZGVucyBpbiByaW5ncyB1bnRpbCBhIGxldmVsIGhhcyBtYXRjaGVzLCBhbmRcclxuXHQgKiB0aG9zZSBhcmUgcmV0dXJuZWQuIFNvIHRoZSByZXN1bHQgbWF5IGJlIGEgY2hpbGQsIGEgc2libGluZywgYSBjb3VzaW4gb3IgYW5cclxuXHQgKiBhbmNlc3RvciwgZGVwZW5kaW5nIG9uIHdoZXJlIHRoZSBmaXJzdCBtYXRjaCBhcHBlYXJzLlxyXG5cdCAqXHJcblx0ICogRGlzdGFuY2UgaXMgbWVhbnQgaW4gYm90aCBkaXJlY3Rpb25zIGhlcmUsIG90aGVyIHRoYW4gaW4gdGhlIG5hdGl2ZSBjbG9zZXN0KCksXHJcblx0ICogd2hpY2ggb25seSB3YWxrcyB1cCBhbmQgcmV0dXJucyBhbiBhbmNlc3Rvci5cclxuXHQgKlxyXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBhUXVlcnlcclxuXHQgKiBAcmV0dXJucyB7Tm9kZUxpc3R9IHRoZSBtYXRjaGVzIG9mIHRoZSBjbG9zZXN0IGxldmVsIGhhdmluZyBhbnksIGVtcHR5IHdoZW4gdGhlcmUgYXJlIG5vbmVcclxuXHQgKi9cclxuXHRQcm90b3R5cGUuY2xvc2VzdHMgPSBmdW5jdGlvbiAoYVF1ZXJ5KSB7XHJcblx0XHRjb25zdCByZXN1bHQgPSB0aGlzLmZpbmQoYVF1ZXJ5KTtcclxuXHRcdGlmIChyZXN1bHQubGVuZ3RoICE9IDApIHJldHVybiByZXN1bHQ7XHJcblxyXG5cdFx0Y29uc3QgcGFyZW50ID0gdGhpcy5wYXJlbnRFbGVtZW50O1xyXG5cdFx0aWYgKHBhcmVudCkgcmV0dXJuIHBhcmVudC5jbG9zZXN0cyhhUXVlcnkpO1xyXG5cclxuXHRcdHJldHVybiBOb2RlTGlzdC5mcm9tKFtdKTtcclxuXHR9O1xyXG5cclxuXHQvKipcclxuXHQgKiBTZWFyY2hlcyB0aGUgcXVlcnkgYXQgdGhpcyBub2RlLCBiZWxvdyBpdCwgb3IgYWJvdmUgaXQgLSBpbiB0aGF0IG9yZGVyLlxyXG5cdCAqXHJcblx0ICogVGhpcyBub2RlIGl0c2VsZiBpcyBjaGVja2VkIGZpcnN0LCB0aGVuIGl0cyBzdWJ0cmVlLCBhbmQgb25seSB0aGVuIHRoZVxyXG5cdCAqIGFuY2VzdG9ycy4gVW5saWtlIGNsb3Nlc3RzKCkgdGhlIHNlYXJjaCBkb2VzIG5vdCB3aWRlbiBpbiByaW5nczogaXQgbmV2ZXJcclxuXHQgKiBsb29rcyBpbnRvIHRoZSBzdWJ0cmVlIG9mIGFuIGFuY2VzdG9yLCBzbyBhIHNpYmxpbmcgaXMgbm90IGZvdW5kLlxyXG5cdCAqXHJcblx0ICogQHBhcmFtIHtzdHJpbmd9IGFRdWVyeVxyXG5cdCAqIEByZXR1cm5zIHtOb2RlTGlzdH0gdGhpcyBub2RlLCB0aGUgbm9kZXMgYmVsb3cgaXQsIG9yIHRoZSBtYXRjaGluZyBhbmNlc3RvciwgZW1wdHkgd2hlbiB0aGVyZSBpcyBub25lXHJcblx0ICovXHJcblx0UHJvdG90eXBlLm5lc3RlZCA9IGZ1bmN0aW9uIChhUXVlcnkpIHtcclxuXHRcdGlmICh0aGlzLmlzKGFRdWVyeSkpIHJldHVybiBOb2RlTGlzdC5mcm9tKHRoaXMpO1xyXG5cclxuXHRcdGxldCBuZXN0ZWQgPSB0aGlzLmZpbmQoYVF1ZXJ5KTtcclxuXHRcdGlmIChuZXN0ZWQgJiYgbmVzdGVkLmxlbmd0aCA+IDApIHJldHVybiBuZXN0ZWQ7XHJcblx0XHRlbHNlIHJldHVybiBOb2RlTGlzdC5mcm9tKHRoaXMucGFyZW50KGFRdWVyeSkpO1xyXG5cdH07XHJcbn0pO1xyXG5leHBvcnQgZGVmYXVsdCBzdXBwb3J0O1xyXG4iLCJpbXBvcnQgRXh0ZW5kZXIgZnJvbSBcIi4uLy4uL3V0aWxzL0V4dGVuZGVyXCI7XHJcblxyXG4vKipcclxuICogVGhlIHR5cGUgb2YgdGhlIGV2ZW50IHRyaWdnZXJlZCBvbmNlIHRoZSBkb2N1bWVudCBpcyByZWFkeS5cclxuICpcclxuICogQHR5cGUge3N0cmluZ31cclxuICovXHJcbmV4cG9ydCBjb25zdCBSRUFEWUVWRU5UID0gXCJkZWZhdWx0anMtLWV2ZW50LS1yZWFkeVwiO1xyXG5cclxuY29uc3Qgc3VwcG9ydCA9IEV4dGVuZGVyKFwiUmVhZHlFdmVudFN1cHBvcnRcIiwgUHJvdG90eXBlID0+IHtcclxuXHQvKipcclxuXHQgKiBSZWdpc3RlcnMgYSBmdW5jdGlvbiBmb3IgdGhlIHJlYWR5IGV2ZW50IG9mIHRoZSBkb2N1bWVudC5cclxuXHQgKlxyXG5cdCAqIFRoZSByZWFkeSBldmVudCBpcyB0cmlnZ2VyZWQgb25jZSB0aGUgZG9tIGlzIHBhcnNlZC4gV2hlbiB0aGUgZG9jdW1lbnQgaXNcclxuXHQgKiBhbHJlYWR5IGNvbXBsZXRlIHRoZSBldmVudCBpcyB0cmlnZ2VyZWQgcmlnaHQgYXdheSwgc28gYSBmdW5jdGlvbiByZWdpc3RlcmVkXHJcblx0ICogbGF0ZSBzdGlsbCBydW5zLiBUaGF0IHRyaWdnZXIgcmVhY2hlcyBldmVyeSByZWFkeSBsaXN0ZW5lciwgc28gZnVuY3Rpb25zXHJcblx0ICogcmVnaXN0ZXJlZCBlYXJsaWVyIHJ1biBhZ2FpbiBvbiBlYWNoIGxhdGUgcmVnaXN0cmF0aW9uLlxyXG5cdCAqXHJcblx0ICogQHBhcmFtIHtGdW5jdGlvbn0gYUZ1bmN0aW9uIC0gY2FsbGVkIG9uIHRoZSByZWFkeSBldmVudFxyXG5cdCAqIEBwYXJhbSB7Ym9vbGVhbn0gW29uY2VdIC0gcmVtb3ZlIHRoZSBmdW5jdGlvbiBhZnRlciB0aGUgbmV4dCByZWFkeSBldmVudFxyXG5cdCAqIEByZXR1cm5zIHtEb2N1bWVudH0gdGhpc1xyXG5cdCAqL1xyXG5cdFByb3RvdHlwZS5yZWFkeSA9IGZ1bmN0aW9uKGFGdW5jdGlvbiwgb25jZSl7XHJcblx0XHR0aGlzLm9uKFJFQURZRVZFTlQsIGFGdW5jdGlvbiwgb25jZSA/IHsgb25jZTogdHJ1ZSB9IDogdW5kZWZpbmVkKTtcclxuXHRcdGlmKGRvY3VtZW50LnJlYWR5U3RhdGUgPT0gXCJjb21wbGV0ZVwiKVxyXG5cdFx0XHR0aGlzLnRyaWdnZXIoUkVBRFlFVkVOVCk7XHJcblxyXG5cdFx0cmV0dXJuIHRoaXM7XHJcblx0fTtcclxuXHJcbn0pO1xyXG5leHBvcnQgZGVmYXVsdCBzdXBwb3J0OyIsImltcG9ydCBFeHRlbmRlciBmcm9tIFwiLi4vLi4vdXRpbHMvRXh0ZW5kZXJcIjtcclxuXHJcbmNvbnN0IEhJREVWQUxVRSA9IFwibm9uZVwiO1xyXG5cclxuLyoqXHJcbiAqIFdoZXRoZXIgdGhlIGVsZW1lbnQgaXMgaGlkZGVuIGJ5IGl0cyBvd24gaW5saW5lIGRpc3BsYXksIGEgZGlzcGxheSBjb21pbmcgZnJvbVxyXG4gKiBhIGNzcyBydWxlIGlzIG5vdCBzZWVuLlxyXG4gKlxyXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbGVtZW50XHJcbiAqIEByZXR1cm5zIHtib29sZWFufVxyXG4gKi9cclxuY29uc3QgaXNIaWRkZW4gPSAoZWxlbWVudCkgPT4ge1xyXG5cdHJldHVybiBlbGVtZW50LnN0eWxlLmRpc3BsYXkgPT09IEhJREVWQUxVRVxyXG59O1xyXG5cclxuLyoqXHJcbiAqIFJlcGxhY2VzIHNob3cgYW5kIGhpZGUgb24gdGhlIGVsZW1lbnQgYnkgdmVyc2lvbnMgYm91bmQgdG8gaXQsIGNhcHR1cmluZyB0aGVcclxuICogZGlzcGxheSB0byByZXN0b3JlIG9uIHNob3cuXHJcbiAqXHJcbiAqIFRoZSBkaXNwbGF5IGlzIHJlYWQgb25jZSwgb24gdGhlIGZpcnN0IHNob3cgb3IgaGlkZSwgYW5kIGtlcHQgZnJvbSB0aGVuIG9uIC1cclxuICogdGhlIGJvdW5kIG1ldGhvZHMgc2hhZG93IHRoZSBwcm90b3R5cGUsIHNvIGluaXQgZG9lcyBub3QgcnVuIGFnYWluLiBBIGRpc3BsYXlcclxuICogc2V0IGRpcmVjdGx5IGFmdGVyd2FyZHMgaXMgbm90IHBpY2tlZCB1cC4gV2hlbiB0aGUgZWxlbWVudCBpcyBoaWRkZW4gYXQgdGhhdFxyXG4gKiBmaXJzdCBjYWxsIHRoZSBjYXB0dXJlZCB2YWx1ZSBpcyB0aGUgZW1wdHkgc3RyaW5nLCBmYWxsaW5nIGJhY2sgdG8gdGhlIGNzcy5cclxuICpcclxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxlbWVudFxyXG4gKiBAcmV0dXJucyB7SFRNTEVsZW1lbnR9IHRoZSBlbGVtZW50XHJcbiAqL1xyXG5jb25zdCBpbml0ID0gKGVsZW1lbnQpID0+IHtcclxuXHRsZXQgZGlzcGxheSA9ICFpc0hpZGRlbihlbGVtZW50KSA/IGVsZW1lbnQuc3R5bGUuZGlzcGxheSA6IFwiXCI7XHJcblxyXG5cdGVsZW1lbnQuc2hvdyA9IChmdW5jdGlvbigpe1xyXG5cdFx0dGhpcy5zdHlsZS5kaXNwbGF5ID0gZGlzcGxheTtcclxuXHRcdHJldHVybiB0aGlzO1xyXG5cdH0pLmJpbmQoZWxlbWVudCk7XHJcblxyXG5cdGVsZW1lbnQuaGlkZSA9IChmdW5jdGlvbigpe1xyXG5cdFx0dGhpcy5zdHlsZS5kaXNwbGF5ID0gSElERVZBTFVFO1xyXG5cdFx0cmV0dXJuIHRoaXM7XHJcblx0fSkuYmluZChlbGVtZW50KTtcclxuXHJcblx0cmV0dXJuIGVsZW1lbnQ7XHJcbn07XHJcblxyXG5cclxuY29uc3Qgc3VwcG9ydCA9IEV4dGVuZGVyKFwiU2hvd0hpZGVTdXBwb3J0XCIsIFByb3RvdHlwZSA9PiB7XHJcblx0LyoqXHJcblx0ICogU2hvd3MgdGhlIGVsZW1lbnQgYnkgcmVzdG9yaW5nIHRoZSBkaXNwbGF5IGNhcHR1cmVkIGJlZm9yZSBpdCB3YXMgaGlkZGVuLlxyXG5cdCAqXHJcblx0ICogQHJldHVybnMge0hUTUxFbGVtZW50fSB0aGlzXHJcblx0ICovXHJcblx0UHJvdG90eXBlLnNob3cgPSBmdW5jdGlvbigpIHtcclxuXHRcdHJldHVybiBpbml0KHRoaXMpLnNob3cuYXBwbHkobnVsbCwgYXJndW1lbnRzKVxyXG5cdH07XHJcblxyXG5cdC8qKlxyXG5cdCAqIEhpZGVzIHRoZSBlbGVtZW50IGJ5IHNldHRpbmcgaXRzIGRpc3BsYXkgdG8gbm9uZS5cclxuXHQgKlxyXG5cdCAqIEByZXR1cm5zIHtIVE1MRWxlbWVudH0gdGhpc1xyXG5cdCAqL1xyXG5cdFByb3RvdHlwZS5oaWRlID0gZnVuY3Rpb24oKSB7XHJcblx0XHRyZXR1cm4gaW5pdCh0aGlzKS5oaWRlLmFwcGx5KG51bGwsIGFyZ3VtZW50cylcclxuXHR9O1xyXG5cclxuXHQvKipcclxuXHQgKiBTaG93cyB0aGUgZWxlbWVudCB3aGVuIGl0IGlzIGhpZGRlbiwgaGlkZXMgaXQgb3RoZXJ3aXNlLlxyXG5cdCAqXHJcblx0ICogT25seSBhbiBpbmxpbmUgZGlzcGxheSBvZiBub25lIGNvdW50cyBhcyBoaWRkZW4sIHNvIGFuIGVsZW1lbnQgaGlkZGVuIGJ5IGFcclxuXHQgKiBjc3MgcnVsZSBpcyBoaWRkZW4gaW5saW5lIGZpcnN0IGJlZm9yZSBpdCBzaG93cy5cclxuXHQgKlxyXG5cdCAqIEByZXR1cm5zIHtIVE1MRWxlbWVudH0gdGhpc1xyXG5cdCAqL1xyXG5cdFByb3RvdHlwZS50b2dnbGVTaG93ID0gZnVuY3Rpb24oKSB7XHJcblx0XHRyZXR1cm4gaXNIaWRkZW4odGhpcykgPyB0aGlzLnNob3coKSA6IHRoaXMuaGlkZSgpO1xyXG5cdH07XHJcblxyXG59KTtcclxuZXhwb3J0IGRlZmF1bHQgc3VwcG9ydDsiLCJpbXBvcnQgRXh0ZW5kZXIgZnJvbSBcIi4uLy4uL3V0aWxzL0V4dGVuZGVyXCI7XHJcblxyXG4vKipcclxuICogVmFsdWUgaGFuZGxpbmcgZm9yIG9uZSBraW5kIG9mIGlucHV0IGVsZW1lbnQuXHJcbiAqXHJcbiAqIEB0eXBlZGVmIHtPYmplY3R9IElucHV0VHlwZVxyXG4gKiBAcHJvcGVydHkge3N0cmluZ30gc2VsZWN0b3IgLSBtYXRjaGVzIHRoZSBlbGVtZW50cyBoYW5kbGVkIGJ5IHRoaXMgdHlwZVxyXG4gKiBAcHJvcGVydHkge2Z1bmN0aW9uKCk6Kn0gZ2V0IC0gcmVhZHMgdGhlIHZhbHVlIG9mIHRoZSBlbGVtZW50XHJcbiAqIEBwcm9wZXJ0eSB7ZnVuY3Rpb24oKik6dm9pZH0gc2V0IC0gd3JpdGVzIHRoZSB2YWx1ZSB0byB0aGUgZWxlbWVudFxyXG4gKi9cclxuXHJcbi8qKlxyXG4gKiBTaGFyZWQgc2V0dGVyIG9mIGNoZWNrYm94IGFuZCByYWRpbywgYm90aCBhcmUgc2V0IGJ5IHRoZWlyIGNoZWNrZWQgc3RhdGUuXHJcbiAqXHJcbiAqIEBwYXJhbSB7Ym9vbGVhbnxzdHJpbmd8c3RyaW5nW119IGFWYWx1ZSAtIGEgYm9vbGVhbiBpcyBhcHBsaWVkIGRpcmVjdGx5LCBhIHN0cmluZyBvciBhbiBhcnJheSBvZiBzdHJpbmdzIGNoZWNrcyB0aGUgZWxlbWVudCB3aGVuIGl0cyB2YWx1ZSBtYXRjaGVzXHJcbiAqL1xyXG5jb25zdCBjaGVja2VkU2V0dGVyID0gZnVuY3Rpb24oYVZhbHVlKXtcclxuXHRpZih0eXBlb2YgYVZhbHVlID09PSBcImJvb2xlYW5cIilcclxuXHRcdHRoaXMuY2hlY2tlZCA9IGFWYWx1ZTtcclxuXHRlbHNlIGlmKHR5cGVvZiBhVmFsdWUgPT09IFwic3RyaW5nXCIpXHJcblx0XHR0aGlzLmNoZWNrZWQgPSB0aGlzLnZhbHVlID09IGFWYWx1ZTtcclxuXHRlbHNlIGlmKEFycmF5LmlzQXJyYXkoYVZhbHVlKSlcclxuXHRcdHRoaXMuY2hlY2tlZCA9IGFWYWx1ZS5pbmRleE9mKHRoaXMudmFsdWUpID49IDA7XHJcblxyXG5cdHRoaXMudHJpZ2dlcihcImNoYW5nZWRcIik7XHJcbn07XHJcblxyXG4vKipcclxuICogVGhlIGZpcnN0IHR5cGUgd2l0aCBhIG1hdGNoaW5nIHNlbGVjdG9yIGhhbmRsZXMgdGhlIGVsZW1lbnQuXHJcbiAqXHJcbiAqIEB0eXBlIHtJbnB1dFR5cGVbXX1cclxuICovXHJcbmNvbnN0IElucHV0VHlwZXMgPSBbXHJcblx0e1xyXG5cdFx0c2VsZWN0b3IgOiBcInNlbGVjdFwiLFxyXG5cdFx0LyoqXHJcblx0XHQgKiBAcmV0dXJucyB7c3RyaW5nW119IHRoZSB2YWx1ZXMgb2YgYWxsIHNlbGVjdGVkIG9wdGlvbnNcclxuXHRcdCAqL1xyXG5cdFx0Z2V0IDogZnVuY3Rpb24oKXtcclxuXHRcdFx0Y29uc3QgcmVzdWx0ID0gW107XHJcblx0XHRcdHRoaXMuZmluZChcIm9wdGlvblwiKS5mb3JFYWNoKG9wdGlvbiA9PiB7XHJcblx0XHRcdFx0aWYob3B0aW9uLnNlbGVjdGVkKVxyXG5cdFx0XHRcdFx0cmVzdWx0LnB1c2gob3B0aW9uLnZhbHVlKTtcclxuXHRcdFx0fSk7XHRcdFx0XHJcblx0XHRcdHJldHVybiByZXN1bHQ7XHJcblx0XHR9LFxyXG5cdFx0c2V0IDogZnVuY3Rpb24oKXtcdFx0XHRcdFxyXG5cdFx0XHRsZXQgdmFsdWVzID0gW107XHJcblx0XHRcdGNvbnN0IGFyZ3MgPSBBcnJheS5mcm9tKGFyZ3VtZW50cyk7XHJcblx0XHRcdGxldCBhcmcgPSBhcmdzLnNoaWZ0KCk7XHJcblx0XHRcdHdoaWxlKGFyZyl7XHJcblx0XHRcdFx0aWYoQXJyYXkuaXNBcnJheShhcmcpKVxyXG5cdFx0XHRcdFx0dmFsdWVzID0gdmFsdWVzLmNvbmNhdChhcmcpO1xyXG5cdFx0XHRcdGVsc2VcclxuXHRcdFx0XHRcdHZhbHVlcy5wdXNoKGFyZyk7XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0YXJnID0gYXJncy5zaGlmdCgpO1xyXG5cdFx0XHR9XHJcblx0XHRcdHRoaXMudmFsdWUgPSB2YWx1ZXM7XHJcblx0XHRcdHRoaXMuZmluZChcIm9wdGlvblwiKS5mb3JFYWNoKG9wdGlvbiA9PiBvcHRpb24uc2VsZWN0ZWQgPSB2YWx1ZXMuaW5kZXhPZihvcHRpb24udmFsdWUpID49IDApO1xyXG5cdFx0XHR0aGlzLnRyaWdnZXIoXCJjaGFuZ2VkXCIpO1xyXG5cdFx0fVxyXG5cdH0sXHJcblx0e1xyXG5cdFx0c2VsZWN0b3IgOiBcImlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl1cIixcclxuXHRcdC8qKlxyXG5cdFx0ICogQSBjaGVja2JveCBpcyBpbmRlcGVuZGVudCwgc28gYW4gdW5jaGVja2VkIG9uZSByZXBvcnRzIGZhbHNlIC0gaXQgaXMgb2ZmLFxyXG5cdFx0ICogd2hpY2ggaXMgYSB2YWx1ZSBvZiBpdHMgb3duLlxyXG5cdFx0ICpcclxuXHRcdCAqIEByZXR1cm5zIHtib29sZWFufHN0cmluZ3x1bmRlZmluZWR9IHRoZSBjaGVja2VkIHN0YXRlIHdpdGhvdXQgYSB2YWx1ZSBhdHRyaWJ1dGUsIG90aGVyd2lzZSB0aGUgdmFsdWUgd2hlbiBjaGVja2VkXHJcblx0XHQgKi9cclxuXHRcdGdldCA6IGZ1bmN0aW9uKCl7XHJcblx0XHRcdGlmKCF0aGlzLmhhc0F0dHJpYnV0ZShcInZhbHVlXCIpKVxyXG5cdFx0XHRcdHJldHVybiB0aGlzLmNoZWNrZWQ7XHJcblx0XHRcdGVsc2UgaWYodGhpcy5jaGVja2VkKVxyXG5cdFx0XHRcdHJldHVybiB0aGlzLnZhbHVlO1xyXG5cdFx0fSxcclxuXHRcdHNldCA6IGNoZWNrZWRTZXR0ZXJcclxuXHR9LFxyXG5cdHtcclxuXHRcdHNlbGVjdG9yIDogXCJpbnB1dFt0eXBlPVxcXCJyYWRpb1xcXCJdXCIsXHJcblx0XHQvKipcclxuXHRcdCAqIEFsbCByYWRpb3Mgb2YgYSBncm91cCBzaGFyZSBvbmUgbmFtZSBhbmQgb25seSBvbmUgb2YgdGhlbSBjYW4gYmUgY2hlY2tlZCxcclxuXHRcdCAqIHNvIGFuIHVuY2hlY2tlZCByYWRpbyByZXR1cm5zIHVuZGVmaW5lZCBpbnN0ZWFkIG9mIGZhbHNlIC0gaXQgY2FycmllcyBub1xyXG5cdFx0ICogdmFsdWUsIGl0IGp1c3QgaXMgbm90IHRoZSBzZWxlY3RlZCBvbmUuIFRoaXMgaXMgd2hhdCBrZWVwcyB0aGUgdW5jaGVja2VkXHJcblx0XHQgKiByYWRpb3MgZnJvbSBvdmVyd3JpdGluZyB0aGUgdmFsdWUgb2YgdGhlaXIgZ3JvdXAsIG9uY2UgdGhlIHJlc3VsdHMgb2YgYVxyXG5cdFx0ICogd2hvbGUgZ3JvdXAgZ2V0IGNvbGxlY3RlZCBieSBuYW1lLlxyXG5cdFx0ICpcclxuXHRcdCAqIEByZXR1cm5zIHtib29sZWFufHN0cmluZ3x1bmRlZmluZWR9IHRydWUgb3IgdGhlIHZhbHVlIHdoZW4gY2hlY2tlZCwgdW5kZWZpbmVkIG90aGVyd2lzZVxyXG5cdFx0ICovXHJcblx0XHRnZXQgOiBmdW5jdGlvbigpe1xyXG5cdFx0XHRpZih0aGlzLmNoZWNrZWQpXHJcblx0XHRcdFx0cmV0dXJuIHRoaXMuaGFzQXR0cmlidXRlKFwidmFsdWVcIikgPyB0aGlzLnZhbHVlIDogdHJ1ZTtcclxuXHRcdH0sXHJcblx0XHRzZXQgOiBjaGVja2VkU2V0dGVyXHJcblx0fVxyXG5dO1xyXG5cclxuLyoqXHJcbiAqIEZhbGxiYWNrIGZvciBhbGwgZWxlbWVudHMgd2l0aG91dCBhIG1hdGNoaW5nIElucHV0VHlwZS5cclxuICpcclxuICogQHR5cGUge0lucHV0VHlwZX1cclxuICovXHJcbmNvbnN0IERlZmF1bHRJbnB1dFR5cGUgPSB7XHJcblx0XHRnZXQgOiBmdW5jdGlvbigpe1xyXG5cdFx0XHRyZXR1cm4gdGhpcy52YWx1ZTtcclxuXHRcdH0sXHJcblx0XHRzZXQgOiBmdW5jdGlvbihhVmFsdWUpe1xyXG5cdFx0XHR0aGlzLnZhbHVlID0gYVZhbHVlO1xyXG5cdFx0XHR0aGlzLnRyaWdnZXIoXCJpbnB1dFwiKTtcclxuXHRcdH1cclxufTtcclxuXHJcbi8qKlxyXG4gKiBAcGFyYW0ge0VsZW1lbnR9IGFFbGVtZW50XHJcbiAqIEByZXR1cm5zIHtJbnB1dFR5cGV9IHRoZSBmaXJzdCBtYXRjaGluZyB0eXBlLCBvciBEZWZhdWx0SW5wdXRUeXBlXHJcbiAqL1xyXG5jb25zdCBnZXRJbnB1dFR5cGUgPSBmdW5jdGlvbihhRWxlbWVudCl7XHJcblx0Zm9yKGxldCBpID0gMDsgaSA8IElucHV0VHlwZXMubGVuZ3RoOyBpKyspXHJcblx0XHRpZihhRWxlbWVudC5pcyhJbnB1dFR5cGVzW2ldLnNlbGVjdG9yKSlcclxuXHRcdFx0cmV0dXJuIElucHV0VHlwZXNbaV07XHRcdFxyXG5cdHJldHVybiBEZWZhdWx0SW5wdXRUeXBlO1xyXG59O1xyXG5cclxuXHJcbmNvbnN0IHN1cHBvcnQgPSBFeHRlbmRlcihcIlZhbHVlU3VwcG9ydFwiLCBQcm90b3R5cGUgPT4ge1xyXG5cdC8qKlxyXG5cdCAqIEdldHMgb3Igc2V0cyB0aGUgdmFsdWUgb2YgdGhpcyBlbGVtZW50LlxyXG5cdCAqXHJcblx0ICogV2hhdCBhIHZhbHVlIGlzIGRlcGVuZHMgb24gdGhlIGVsZW1lbnQ6IGEgc2VsZWN0IHJldHVybnMgdGhlIHZhbHVlcyBvZiBhbGxcclxuXHQgKiBpdHMgc2VsZWN0ZWQgb3B0aW9ucywgYSBjaGVja2JveCBpdHMgY2hlY2tlZCBzdGF0ZSBvciBpdHMgdmFsdWUsIGEgcmFkaW8gYVxyXG5cdCAqIHZhbHVlIG9ubHkgd2hlbiBpdCBpcyBjaGVja2VkLCBldmVyeSBvdGhlciBlbGVtZW50IGl0cyB2YWx1ZS5cclxuXHQgKlxyXG5cdCAqIEBwYXJhbSB7Li4uKn0gW2FWYWx1ZV0gLSB0aGUgbmV3IHZhbHVlLCB0aGUgYWNjZXB0ZWQgdHlwZXMgZGVwZW5kIG9uIHRoZSBlbGVtZW50XHJcblx0ICogQHJldHVybnMgeyp8RWxlbWVudH0gdGhlIHZhbHVlIG9mIHRoZSBlbGVtZW50LCBvciB0aGlzIHdoZW4gYSB2YWx1ZSB3YXMgc2V0XHJcblx0ICovXHJcblx0UHJvdG90eXBlLnZhbCA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0bGV0IHR5cGUgPSBnZXRJbnB1dFR5cGUodGhpcyk7XHJcblx0XHRpZihhcmd1bWVudHMubGVuZ3RoID09IDApXHJcblx0XHRcdHJldHVybiB0eXBlLmdldC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG5cdFx0ZWxzZVxyXG5cdFx0XHR0eXBlLnNldC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG5cdFx0XHRcclxuXHRcdHJldHVybiB0aGlzO1xyXG5cdH07XHRcclxufSk7XHJcbmV4cG9ydCBkZWZhdWx0IHN1cHBvcnQ7IiwiaW1wb3J0IFwiLi9kb20vRXZlbnRUYXJnZXRcIjtcclxuaW1wb3J0IFwiLi9kb20vTm9kZVwiO1xyXG5pbXBvcnQgXCIuL2RvbS9FbGVtZW50XCI7XHJcbmltcG9ydCBcIi4vZG9tL0RvY3VtZW50XCI7XHJcbmltcG9ydCBcIi4vZG9tL0RvY3VtZW50RnJhZ21lbnRcIjtcclxuaW1wb3J0IFwiLi9kb20vSFRNTEVsZW1lbnRcIjtcclxuaW1wb3J0IFwiLi9kb20vSFRNTElucHV0RWxlbWVudFwiO1xyXG5pbXBvcnQgXCIuL2RvbS9IVE1MVGV4dEFyZWFFbGVtZW50XCI7XHJcbmltcG9ydCBcIi4vZG9tL0hUTUxTZWxlY3RFbGVtZW50XCI7XHJcbmltcG9ydCBcIi4vZG9tL05vZGVMaXN0XCI7XHJcbmltcG9ydCBcIi4vZG9tL0h0bWxDb2xsZWN0aW9uXCI7XHJcbmltcG9ydCBcIi4vR2xvYmFsXCI7XHJcbiIsIi8qKlxyXG4gKiBBZGRzIGRlbGVnYXRpbmcgbWV0aG9kcyB0byBhIHByb3RvdHlwZSwgb25lIGZvciBlYWNoIG1ldGhvZCBvZiB0aGUgdGFyZ2V0XHJcbiAqIHByb3RvdHlwZXMuXHJcbiAqXHJcbiAqIFRoaXMgaXMgaG93IGEgTm9kZUxpc3QgZ2V0cyB0aGUgbWV0aG9kcyBvZiBhIE5vZGU6IGZvciBldmVyeSBtZXRob2QgbmFtZSBmb3VuZFxyXG4gKiBvbiB0aGUgdGFyZ2V0cywgYSBmdW5jdGlvbiBpcyBwdXQgb24gdGhlIHNvdXJjZSB0aGF0IGhhbmRzIHRoZSBjYWxsIHRvIHRoZVxyXG4gKiBjYWxsYmFjaywgdG9nZXRoZXIgd2l0aCB0aGF0IG5hbWUuIFRoZSBjYWxsYmFjayB0aGVuIGRlY2lkZXMgd2hhdCB0byBkbyAtIGZvciBhXHJcbiAqIGxpc3QgaXQgYXBwbGllcyB0aGUgbWV0aG9kIHRvIGVhY2ggbm9kZSBhbmQgY29sbGVjdHMgdGhlIHJlc3VsdHMuXHJcbiAqXHJcbiAqIEEgbmFtZSBhbHJlYWR5IG9uIHRoZSBzb3VyY2UgaXMgbGVmdCBhbG9uZSwgc28gaXRzIG93biBtZXRob2RzIHdpbi4gT25seSB2YWx1ZVxyXG4gKiBtZXRob2RzIGFyZSB0YWtlbiwgYWNjZXNzb3JzIGFyZSBza2lwcGVkLCBhcyB0aGVpciBkZXNjcmlwdG9yIGhhcyBubyB2YWx1ZS5cclxuICpcclxuICogQHBhcmFtIHtmdW5jdGlvbihzdHJpbmcsIEFyZ3VtZW50cyk6Kn0gY2FsbGJhY2sgLSBjYWxsZWQgYXMgbWV0aG9kLCB3aXRoIHRoZSBuYW1lIGFuZCB0aGUgYXJndW1lbnRzXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBzb3VyY2UgLSB0aGUgcHJvdG90eXBlIHRoZSBkZWxlZ2F0aW5nIG1ldGhvZHMgYXJlIGFkZGVkIHRvXHJcbiAqIEBwYXJhbSB7Li4uT2JqZWN0fSB0aGVUYXJnZXRzIC0gdGhlIHByb3RvdHlwZXMgd2hvc2UgbWV0aG9kIG5hbWVzIGFyZSBkZWxlZ2F0ZWRcclxuICovXHJcbmNvbnN0IERlbGVnYXRlckJ1aWxkZXIgPSBmdW5jdGlvbigpIHtcclxuXHRjb25zdCBhcmdzID0gQXJyYXkuZnJvbShhcmd1bWVudHMpO1xyXG5cdGNvbnN0IGNhbGxiYWNrID0gYXJncy5zaGlmdCgpO1xyXG5cdGNvbnN0IHNvdXJjZSA9IGFyZ3Muc2hpZnQoKTtcclxuXHRhcmdzLmZvckVhY2goIHRhcmdldCA9PntcclxuXHRcdE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHRhcmdldClcclxuXHRcdC5mb3JFYWNoKG5hbWUgPT4ge1xyXG5cdFx0XHRjb25zdCBwcm9wID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIG5hbWUpO1xyXG5cdFx0XHRpZiAodHlwZW9mIHNvdXJjZVtuYW1lXSA9PT0gXCJ1bmRlZmluZWRcIiAmJiB0eXBlb2YgcHJvcC52YWx1ZSA9PT0gXCJmdW5jdGlvblwiKVxyXG5cdFx0XHRcdHNvdXJjZVtuYW1lXSA9IGZ1bmN0aW9uKCl7XHJcblx0XHRcdFx0XHRyZXR1cm4gY2FsbGJhY2suY2FsbCh0aGlzLCBuYW1lLCBhcmd1bWVudHMpO1xyXG5cdFx0XHRcdH07XHJcblx0XHR9KTtcclxuXHR9KTtcclxuXHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IERlbGVnYXRlckJ1aWxkZXI7IiwiLyoqXHJcbiAqIEFwcGxpZXMgZXh0ZW5zaW9ucyB0byB0aGUgcHJvdG90eXBlIG9mIGEgdHlwZS5cclxuICpcclxuICogQHBhcmFtIHtGdW5jdGlvbn0gYVR5cGUgLSB0aGUgdHlwZSB3aG9zZSBwcm90b3R5cGUgZ2V0cyBleHRlbmRlZFxyXG4gKiBAcGFyYW0gey4uLmZ1bmN0aW9uKEZ1bmN0aW9uKTp2b2lkfSB0aGVFeHRlbmRlcnMgLSB0aGUgd3JhcHBlZCBleHRlbnNpb25zIHRvIGFwcGx5LCBpbiBvcmRlclxyXG4gKi9cclxuY29uc3QgZXh0ZW5kUHJvdG90eXBlID0gZnVuY3Rpb24oKXtcclxuXHRjb25zdCBhcmdzID0gQXJyYXkuZnJvbShhcmd1bWVudHMpO1xyXG5cdGNvbnN0IHR5cGUgPSBhcmdzLnNoaWZ0KCk7XHJcblx0d2hpbGUoYXJncy5sZW5ndGggPiAwKXtcclxuXHRcdGNvbnN0IGV4dGVuZGVyID0gYXJncy5zaGlmdCgpO1xyXG5cdFx0ZXh0ZW5kZXIodHlwZSk7XHJcblx0fVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZXh0ZW5kUHJvdG90eXBlOyIsImltcG9ydCBVdGlscyBmcm9tIFwiLi9VdGlsc1wiO1xyXG5cclxuLyoqXHJcbiAqIFdoaWNoIGV4dGVuc2lvbiBpcyBhcHBsaWVkIHRvIHdoaWNoIHR5cGUsIGtlcHQgb24gdGhlIGdsb2JhbCBvYmplY3Qgc28gaXQgaXNcclxuICogc2hhcmVkIGFjcm9zcyBzZXBhcmF0ZSBsb2FkcyBvZiB0aGUgbGlicmFyeS5cclxuICpcclxuICogQHR5cGUge09iamVjdDxzdHJpbmcsIE9iamVjdDxzdHJpbmcsIGJvb2xlYW4+Pn1cclxuICovXHJcbmNvbnN0IEVYVEVOU0lPTlNfTUFQID0gVXRpbHMuZ2xvYmFsVmFyKFwiX19fRE9NX0FQSV9FWFRFTlNJT05fTUFQX19fXCIsIHt9KTtcclxuXHJcbi8qKlxyXG4gKiBXcmFwcyBhbiBleHRlbnNpb24gc28gaXQgYXBwbGllcyB0byB0aGUgcHJvdG90eXBlIG9mIGEgdHlwZSBvbmx5IG9uY2UuXHJcbiAqXHJcbiAqIFRoZSByZXR1cm5lZCBmdW5jdGlvbiBpcyB3aGF0IGV4dGVuZFByb3RvdHlwZSgpIGNhbGxzIHdpdGggYSB0eXBlLiBBcHBseWluZyB0aGVcclxuICogc2FtZSBuYW1lZCBleHRlbnNpb24gdG8gdGhlIHNhbWUgdHlwZSBhZ2FpbiBpcyBhIG5vLW9wIHdpdGggYSB3YXJuaW5nLCBzb1xyXG4gKiBsb2FkaW5nIHRoZSBsaWJyYXJ5IHR3aWNlIGRvZXMgbm90IHBhdGNoIHRoZSBwcm90b3R5cGVzIHR3aWNlLlxyXG4gKlxyXG4gKiBAcGFyYW0ge3N0cmluZ30gYU5hbWUgLSB0aGUgbmFtZSBvZiB0aGUgZXh0ZW5zaW9uLCB1bmlxdWUgcGVyIHR5cGVcclxuICogQHBhcmFtIHtmdW5jdGlvbihPYmplY3QpOnZvaWR9IGFFeHRlbnRpb24gLSBhZGRzIHRoZSBtZW1iZXJzIHRvIHRoZSBwcm90b3R5cGVcclxuICogQHJldHVybnMge2Z1bmN0aW9uKEZ1bmN0aW9uKTp2b2lkfSBhIGZ1bmN0aW9uIGFwcGx5aW5nIHRoZSBleHRlbnNpb24gdG8gYSB0eXBlXHJcbiAqL1xyXG5jb25zdCBFeHRlbmRlciA9IGZ1bmN0aW9uKGFOYW1lLCBhRXh0ZW50aW9uKXtcclxuXHRyZXR1cm4gZnVuY3Rpb24oYVR5cGUpe1xyXG5cdFx0Y29uc3Qge25hbWUsIHByb3RvdHlwZX0gPSBhVHlwZTtcclxuXHRcdGxldCBleHRlbnNpb25zID0gRVhURU5TSU9OU19NQVBbbmFtZV07XHJcblx0XHRpZighZXh0ZW5zaW9ucylcclxuXHRcdFx0ZXh0ZW5zaW9ucyA9IEVYVEVOU0lPTlNfTUFQW25hbWVdID0ge307XHRcdFxyXG5cdFx0XHJcblx0XHRpZighZXh0ZW5zaW9uc1thTmFtZV0pe1xyXG5cdFx0XHRleHRlbnNpb25zW2FOYW1lXSA9IHRydWU7XHJcblx0XHRcdGFFeHRlbnRpb24ocHJvdG90eXBlKTtcclxuXHRcdH1cclxuXHRcdGVsc2VcclxuXHRcdFx0Y29uc29sZS53YXJuKGBEdXBsaWNhdGVkIGxvYWQgb2YgZXh0ZW5zaW9uIFxcXCIke2FOYW1lfVxcXCIhYCk7XHJcblx0fVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRXh0ZW5kZXI7IiwiXHJcbi8qKlxyXG4gKiBUaGUgZ2xvYmFsIG9iamVjdCBvZiB0aGUgY3VycmVudCBlbnZpcm9ubWVudC5cclxuICpcclxuICogRGV0ZWN0ZWQgd2l0aCB0eXBlb2YgZ3VhcmRzLCBiZWNhdXNlIGEgYmFyZSByZWZlcmVuY2UgdG8gYW4gdW5kZWNsYXJlZCBuYW1lXHJcbiAqIHRocm93cyBpbnN0ZWFkIG9mIGJlaW5nIGZhbHN5IC0gc28gYSBwbGFpbiB3aW5kb3cgfHwgZ2xvYmFsIGNoYWluIHdvdWxkIGJyZWFrXHJcbiAqIGV2ZXJ5d2hlcmUgd2luZG93IGlzIG1pc3NpbmcsIG5vdCBmYWxsIHRocm91Z2guIGdsb2JhbFRoaXMgY292ZXJzIHRoZSBicm93c2VyLFxyXG4gKiBub2RlIGFuZCB3b3JrZXJzLCB0aGUgcmVzdCBzdGF5cyBhcyBhIGZhbGxiYWNrIGZvciBvbGRlciBydW50aW1lcy5cclxuICpcclxuICogQHR5cGUge09iamVjdH1cclxuICovXHJcbmV4cG9ydCBjb25zdCBHTE9CQUwgPSB0eXBlb2YgZ2xvYmFsVGhpcyAhPT0gXCJ1bmRlZmluZWRcIiA/IGdsb2JhbFRoaXMgOlxyXG5cdHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3cgOlxyXG5cdHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIgPyBnbG9iYWwgOlxyXG5cdHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiID8gc2VsZiA6IHt9O1xyXG5cclxuY29uc3QgVXRpbHMgPSB7XHJcblx0LyoqXHJcblx0ICogVGhlIGdsb2JhbCBvYmplY3QsIHNhbWUgYXMgR0xPQkFMLlxyXG5cdCAqXHJcblx0ICogQHR5cGUge09iamVjdH1cclxuXHQgKi9cclxuXHRnbG9iYWwgOiBHTE9CQUwsXHJcblxyXG5cdC8qKlxyXG5cdCAqIFJlYWRzIGEgdmFyaWFibGUgZnJvbSB0aGUgZ2xvYmFsIG9iamVjdCwgaW5pdGlhbGl6aW5nIGl0IG9uY2Ugd2hlbiBhIHZhbHVlXHJcblx0ICogaXMgZ2l2ZW4gYW5kIG5vbmUgaXMgc2V0IHlldC5cclxuXHQgKlxyXG5cdCAqIFVzZWQgdG8gc2hhcmUgc3RhdGUgYmV0d2VlbiBzZXBhcmF0ZSBsb2FkcyBvZiB0aGUgbGlicmFyeSwgd2hpY2ggZWFjaCBoYXZlXHJcblx0ICogdGhlaXIgb3duIG1vZHVsZSBzY29wZSBidXQgdGhlIG9uZSBnbG9iYWwgb2JqZWN0IGluIGNvbW1vbi5cclxuXHQgKlxyXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBhTmFtZSAtIHRoZSBuYW1lIG9uIHRoZSBnbG9iYWwgb2JqZWN0XHJcblx0ICogQHBhcmFtIHsqfSBbYUluaXRWYWx1ZV0gLSB0aGUgdmFsdWUgdG8gc2V0IHdoZW4gdGhlIG5hbWUgaXMgc3RpbGwgdW5kZWZpbmVkXHJcblx0ICogQHJldHVybnMgeyp9IHRoZSB2YWx1ZSBvbiB0aGUgZ2xvYmFsIG9iamVjdFxyXG5cdCAqL1xyXG5cdGdsb2JhbFZhciA6IGZ1bmN0aW9uKGFOYW1lLCBhSW5pdFZhbHVlKXtcclxuXHRcdGlmKGFyZ3VtZW50cy5sZW5ndGggPT09IDIgJiYgdHlwZW9mIEdMT0JBTFthTmFtZV0gPT09IFwidW5kZWZpbmVkXCIpXHJcblx0XHRcdEdMT0JBTFthTmFtZV0gPSBhSW5pdFZhbHVlO1xyXG5cclxuXHRcdHJldHVybiBHTE9CQUxbYU5hbWVdO1xyXG5cdH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFV0aWxzOyIsImltcG9ydCBUZW1wbGF0ZSwge3RvQXN5bmNUZW1wbGF0ZUxvYWRlcn0gZnJvbSBcIi4vc3JjL1RlbXBsYXRlLmpzXCI7XG5pbXBvcnQgUmVuZGVyZXIgZnJvbSBcIi4vc3JjL1JlbmRlcmVyLmpzXCI7XG5pbXBvcnQgQ29udGV4dCBmcm9tIFwiLi9zcmMvQ29udGV4dC5qc1wiO1xuaW1wb3J0IERpcmVjdGl2ZSBmcm9tIFwiLi9zcmMvRGlyZWN0aXZlLmpzXCI7XG5pbXBvcnQgRGlyZWN0aXZlRWxlbWVudCBmcm9tIFwiLi9zcmMvRGlyZWN0aXZlRWxlbWVudC5qc1wiO1xuXG5leHBvcnQge1RlbXBsYXRlLCBSZW5kZXJlciwgQ29udGV4dCwgRGlyZWN0aXZlLCBEaXJlY3RpdmVFbGVtZW50LCB0b0FzeW5jVGVtcGxhdGVMb2FkZXJ9O1xuIiwiLyoqXG4gKiBUaGUgZ2xvYmFsIHNjb3BlIG9mIHRoZSBjdXJyZW50IGVudmlyb25tZW50LlxuICpcbiAqIFJlc29sdmVkIG9uY2Ugd2hlbiB0aGUgbW9kdWxlIGlzIGxvYWRlZDogZ2xvYmFsVGhpcywgdGhlbiBnbG9iYWwsIHdpbmRvdyBhbmQgc2VsZiBmb3IgZW5naW5lcyBub3RcbiAqIGtub3dpbmcgaXQgeWV0LiBBbiBlbXB0eSBvYmplY3Qgd2hlbiBub25lIG9mIHRoZW0gZXhpc3RzLCBzbyByZWFkaW5nIGZyb20gaXQgbmV2ZXIgdGhyb3dzLlxuICpcbiAqIEBtb2R1bGUgR2xvYmFsXG4gKlxuICogQGV4YW1wbGVcbiAqIEdMT0JBTC5jcnlwdG8uZ2V0UmFuZG9tVmFsdWVzKGJ1ZmZlcik7XG4gKi9cbmNvbnN0IEdMT0JBTCA9ICgoKSA9PiB7XG5cdGlmKHR5cGVvZiBnbG9iYWxUaGlzICE9PSBcInVuZGVmaW5lZFwiKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0aWYodHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIikgcmV0dXJuIGdsb2JhbDtcblx0aWYodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIikgcmV0dXJuIHdpbmRvdztcblx0aWYodHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIpIHJldHVybiBzZWxmO1xuXHRyZXR1cm4ge307XG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCBHTE9CQUw7XG4iLCIvKipcclxuICogT25seSBhbiBvYmplY3QgY2FuIGNhcnJ5IGEgcHJvcGVydHksIHNvIGEgcGF0aCBzdG9wcyBhdCBhIHByaW1pdGl2ZSBpbnN0ZWFkIG9mIGhhbmRpbmcgb3V0IGFcclxuICogcHJvcGVydHkgdGhhdCBjYW5ub3QgYmUgcmVhZCBvciB3cml0dGVuLiBBbiBBcnJheSwgTWFwIG9yIERhdGUgcGFzc2VzIC0gdGhleSBhcmUgb2JqZWN0cyBhbmQgdGFrZVxyXG4gKiBhIHByb3BlcnR5IGxpa2UgYW55IG90aGVyIG9uZSwgd2hpY2ggaXMgd2hhdCBtYWtlcyBhIHBhdGggbGlrZSBcImxpc3QuMFwiIHdvcmsuXHJcbiAqXHJcbiAqIEBwcml2YXRlXHJcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgdGhlIHZhbHVlIGEgc3RlcCBvZiB0aGUgcGF0aCByZXNvbHZlZCB0b1xyXG4gKiBAcGFyYW0ge3N0cmluZ30gbmFtZSB0aGUgbmFtZSBvZiB0aGF0IHN0ZXBcclxuICogQHBhcmFtIHtzdHJpbmd9IGtleSB0aGUgd2hvbGUgcGF0aCwgdG8gdGVsbCB3aGljaCBvbmUgb2Ygc2V2ZXJhbCBzdGVwcyBmYWlsZWRcclxuICogQHJldHVybnMge3ZvaWR9XHJcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gd2hlbiB0aGUgc3RlcCBjYXJyaWVzIG5vIG9iamVjdFxyXG4gKi9cclxuY29uc3QgYXNzZXJ0RGVzY2VuZGFibGUgPSAodmFsdWUsIG5hbWUsIGtleSkgPT4ge1xyXG5cdGlmKHZhbHVlICE9PSBudWxsICYmIHR5cGVvZiB2YWx1ZSA9PT0gXCJvYmplY3RcIilcclxuXHRcdHJldHVybjtcclxuXHJcblx0Y29uc3QgdHlwZSA9IHZhbHVlID09PSBudWxsID8gXCJudWxsXCIgOiBgYSAke3R5cGVvZiB2YWx1ZX1gO1xyXG5cdHRocm93IG5ldyBUeXBlRXJyb3IoYGNhbm5vdCBkZXNjZW5kIGludG8gXCIke25hbWV9XCIgb2YgcGF0aCBcIiR7a2V5fVwiIC0gJHt0eXBlfSBpcyBubyBvYmplY3RgKTtcclxufTtcclxuXHJcbi8qKlxyXG4gKiBPbmUgcHJvcGVydHkgb2YgYW4gb2JqZWN0LCBhZGRyZXNzZWQgYnkgbmFtZSwgdG9nZXRoZXIgd2l0aCB0aGUgb2JqZWN0IGNhcnJ5aW5nIGl0LlxyXG4gKlxyXG4gKiBCdWlsdCB0aHJvdWdoIHtAbGluayBPYmplY3RQcm9wZXJ0eS5sb2FkfSwgd2hpY2ggd2Fsa3MgYSBkb3R0ZWQgcGF0aCBhbmQgaGFuZHMgYmFjayB0aGUgcHJvcGVydHkgYXRcclxuICogaXRzIGVuZC5cclxuICpcclxuICogQGV4YW1wbGVcclxuICogY29uc3QgcHJvcGVydHkgPSBPYmplY3RQcm9wZXJ0eS5sb2FkKHthIDoge2IgOiAxfX0sIFwiYS5iXCIpO1xyXG4gKiBwcm9wZXJ0eS52YWx1ZTsgICAgICAvLyAxXHJcbiAqIHByb3BlcnR5LnZhbHVlID0gMjsgIC8vIHdyaXRlcyBpbnRvIHRoZSBvYmplY3RcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE9iamVjdFByb3BlcnR5IHtcclxuXHQvKipcclxuXHQgKiBAcGFyYW0ge3N0cmluZ30ga2V5IG5hbWUgb2YgdGhlIHByb3BlcnR5XHJcblx0ICogQHBhcmFtIHtvYmplY3R9IGNvbnRleHQgdGhlIG9iamVjdCBjYXJyeWluZyBpdFxyXG5cdCAqL1xyXG5cdGNvbnN0cnVjdG9yKGtleSwgY29udGV4dCl7XHJcblx0XHR0aGlzLmtleSA9IGtleTtcclxuXHRcdHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBXaGV0aGVyIHRoZSBrZXkgaXMgcmVhY2hhYmxlIG9uIHRoZSBjb250ZXh0IGF0IGFsbC5cclxuXHQgKlxyXG5cdCAqIFRoaXMgYW5zd2VycyBmb3IgdGhlIHdob2xlIHByb3RvdHlwZSBjaGFpbiwgbm90IG9ubHkgZm9yIG93biBwcm9wZXJ0aWVzIC0gbG9hZCh7fSwgXCJ0b1N0cmluZ1wiKVxyXG5cdCAqIHJlcG9ydHMgdHJ1ZS4gVGhhdCBpcyBkZWxpYmVyYXRlOiBhIHBhdGggbWF5IGFkZHJlc3MgYSBwcm90b3R5cGUgYW5kIGV4dGVuZCBpdCwgc28gYW4gaW5oZXJpdGVkXHJcblx0ICoga2V5IGlzIGEga2V5IGxpa2UgYW55IG90aGVyIGhlcmUuIFVzZSBoYXNWYWx1ZSB0byBhc2sgd2hldGhlciBzb21ldGhpbmcgaXMgYWN0dWFsbHkgc3RvcmVkLlxyXG5cdCAqXHJcblx0ICogQHJldHVybnMge2Jvb2xlYW59XHJcblx0ICovXHJcblx0Z2V0IGtleURlZmluZWQoKXtcclxuXHRcdHJldHVybiB0aGlzLmtleSBpbiB0aGlzLmNvbnRleHQ7XHJcblx0fVxyXG5cdFxyXG5cdC8qKlxyXG5cdCAqIFdoZXRoZXIgc29tZXRoaW5nIGlzIHN0b3JlZCB1bmRlciB0aGUga2V5LiBPbmx5IHVuZGVmaW5lZCBjb3VudHMgYXMgbm90aGluZyAtIDAsIFwiXCIsIGZhbHNlIGFuZFxyXG5cdCAqIG51bGwgYXJlIHZhbHVlcy5cclxuXHQgKlxyXG5cdCAqIEByZXR1cm5zIHtib29sZWFufVxyXG5cdCAqL1xyXG5cdGdldCBoYXNWYWx1ZSgpe1xyXG5cdFx0cmV0dXJuIHR5cGVvZiB0aGlzLmNvbnRleHRbdGhpcy5rZXldICE9PSBcInVuZGVmaW5lZFwiO1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogQHJldHVybnMgeyp9IHRoZSBzdG9yZWQgdmFsdWUsIHVuZGVmaW5lZCB3aGVuIHRoZXJlIGlzIG5vbmVcclxuXHQgKi9cclxuXHRnZXQgdmFsdWUoKXtcclxuXHRcdHJldHVybiB0aGlzLmNvbnRleHRbdGhpcy5rZXldO1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogQHBhcmFtIHsqfSBkYXRhXHJcblx0ICovXHJcblx0c2V0IHZhbHVlKGRhdGEpe1xyXG5cdFx0dGhpcy5jb250ZXh0W3RoaXMua2V5XSA9IGRhdGE7XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBBZGRzIGEgdmFsdWUgbmV4dCB0byB3aGF0IGlzIGFscmVhZHkgdGhlcmU6IHdyaXRlcyBpdCB3aGVuIHRoZSBrZXkgaG9sZHMgbm90aGluZywgdHVybnMgdGhlXHJcblx0ICogdmFsdWUgaW50byBhbiBhcnJheSBvZiBib3RoIHdoZW4gaXQgaG9sZHMgb25lLCBhbmQgcHVzaGVzIG9udG8gdGhlIGFycmF5IHdoZW4gaXQgaG9sZHMgb25lXHJcblx0ICogYWxyZWFkeS5cclxuXHQgKlxyXG5cdCAqIFRoZSB2YWx1ZSBpdHNlbGYgaXMgbm90IGxvb2tlZCBhdCAtIGFwcGVuZGluZyB1bmRlZmluZWQgcHV0cyB1bmRlZmluZWQgaW50byB0aGUgYXJyYXkuXHJcblx0ICpcclxuXHQgKiBAcGFyYW0geyp9IGRhdGFcclxuXHQgKlxyXG5cdCAqIEBleGFtcGxlXHJcblx0ICogcHJvcGVydHkuYXBwZW5kID0gMTsgICAvLyB7a2V5IDogMX1cclxuXHQgKiBwcm9wZXJ0eS5hcHBlbmQgPSAyOyAgIC8vIHtrZXkgOiBbMSwgMl19XHJcblx0ICogcHJvcGVydHkuYXBwZW5kID0gMzsgICAvLyB7a2V5IDogWzEsIDIsIDNdfVxyXG5cdCAqL1xyXG5cdHNldCBhcHBlbmQoZGF0YSkge1xyXG5cdFx0aWYoIXRoaXMuaGFzVmFsdWUpXHJcblx0XHRcdHRoaXMudmFsdWUgPSBkYXRhO1xyXG5cdFx0ZWxzZSB7XHJcblx0XHRcdGNvbnN0IHZhbHVlID0gdGhpcy52YWx1ZTtcclxuXHRcdFx0aWYodmFsdWUgaW5zdGFuY2VvZiBBcnJheSlcclxuXHRcdFx0XHR2YWx1ZS5wdXNoKGRhdGEpO1xyXG5cdFx0XHRlbHNlXHJcblx0XHRcdFx0dGhpcy52YWx1ZSA9IFt0aGlzLnZhbHVlLCBkYXRhXTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIERlbGV0ZXMgdGhlIGtleSBmcm9tIHRoZSBvYmplY3QuIERvZXMgbm90aGluZyB3aGVuIGl0IGlzIG5vdCB0aGVyZS5cclxuXHQgKlxyXG5cdCAqIEByZXR1cm5zIHt2b2lkfVxyXG5cdCAqL1xyXG5cdHJlbW92ZSgpe1xyXG5cdFx0ZGVsZXRlIHRoaXMuY29udGV4dFt0aGlzLmtleV07XHJcblx0fVxyXG5cdFxyXG5cdC8qKlxyXG5cdCAqIExvYWRzIHRoZSBwcm9wZXJ0eSBhIGRvdHRlZCBwYXRoIGFkZHJlc3Nlcy4gRXZlcnkgcGFydCBvZiB0aGUgcGF0aCBpcyB0cmltbWVkLCBzbyBcIiBhIC4gYiBcIlxyXG5cdCAqIGFkZHJlc3NlcyB0aGUgc2FtZSBwcm9wZXJ0eSBhcyBcImEuYlwiLlxyXG5cdCAqXHJcblx0ICogQSBtaXNzaW5nIHN0ZXAgaXMgY3JlYXRlZCB3aXRoIGNyZWF0ZSwgb3RoZXJ3aXNlIHRoZSBwYXRoIGlzIHJlcG9ydGVkIGFzIG5vdCBsb2FkYWJsZS4gQSBzdGVwXHJcblx0ICogaG9sZGluZyBzb21ldGhpbmcgdGhhdCBpcyBubyBvYmplY3QgY2Fubm90IGJlIHdhbGtlZCBpbnRvIGF0IGFsbCAtIHRoYXQgaXMgYSBicm9rZW4gcGF0aCwgbm90IGFcclxuXHQgKiBtaXNzaW5nIG9uZSwgYW5kIGl0IGlzIHJlcG9ydGVkIGFzIGFuIGVycm9yIHJlZ2FyZGxlc3Mgb2YgY3JlYXRlLlxyXG5cdCAqXHJcblx0ICogQHBhcmFtIHtvYmplY3R9IGRhdGEgdGhlIG9iamVjdCB0byB3YWxrXHJcblx0ICogQHBhcmFtIHtzdHJpbmd9IGtleSBuYW1lIG9mIHRoZSBwcm9wZXJ0eSwgYSBkb3R0ZWQgcGF0aCBhZGRyZXNzZXMgYSBuZXN0ZWQgb25lXHJcblx0ICogQHBhcmFtIHtib29sZWFufSBbY3JlYXRlPXRydWVdIGNyZWF0ZSBhIG1pc3Npbmcgc3RlcCBvbiB0aGUgd2F5XHJcblx0ICogQHJldHVybnMge09iamVjdFByb3BlcnR5fG51bGx9IG51bGwgd2hlbiBhIHN0ZXAgaXMgbWlzc2luZyBhbmQgY3JlYXRlIGlzIGZhbHNlXHJcblx0ICogQHRocm93cyB7VHlwZUVycm9yfSB3aGVuIGEgc3RlcCBvZiB0aGUgcGF0aCBob2xkcyBzb21ldGhpbmcgdGhhdCBpcyBubyBvYmplY3RcclxuXHQgKlxyXG5cdCAqIEBleGFtcGxlXHJcblx0ICogT2JqZWN0UHJvcGVydHkubG9hZCh7YSA6IHtiIDogMX19LCBcImEuYlwiKS52YWx1ZTsgICAvLyAxXHJcblx0ICogT2JqZWN0UHJvcGVydHkubG9hZCh7bGlzdCA6IFsxLCAyXX0sIFwibGlzdC4xXCIpLnZhbHVlOyAgIC8vIDIsIGFuIGFycmF5IGlzIGFuIG9iamVjdFxyXG5cdCAqIE9iamVjdFByb3BlcnR5LmxvYWQoe30sIFwiYS5iXCIsIGZhbHNlKTsgICAgICAgICAgICAgLy8gbnVsbFxyXG5cdCAqIE9iamVjdFByb3BlcnR5LmxvYWQoe2EgOiAwfSwgXCJhLmJcIik7ICAgICAgICAgICAgICAgLy8gdGhyb3dzLCAwIGlzIG5vIG9iamVjdFxyXG5cdCAqL1xyXG5cdHN0YXRpYyBsb2FkKGRhdGEsIGtleSwgY3JlYXRlPXRydWUpIHtcclxuXHRcdGxldCBjb250ZXh0ID0gZGF0YTtcclxuXHRcdGNvbnN0IGtleXMgPSBrZXkuc3BsaXQoXCIuXCIpO1xyXG5cdFx0bGV0IG5hbWUgPSBrZXlzLnNoaWZ0KCkudHJpbSgpO1xyXG5cdFx0d2hpbGUoa2V5cy5sZW5ndGggPiAwKXtcclxuXHRcdFx0aWYodHlwZW9mIGNvbnRleHRbbmFtZV0gPT09IFwidW5kZWZpbmVkXCIgfHwgY29udGV4dFtuYW1lXSA9PT0gbnVsbCl7XHJcblx0XHRcdFx0aWYoIWNyZWF0ZSlcclxuXHRcdFx0XHRcdHJldHVybiBudWxsO1xyXG5cclxuXHRcdFx0XHRjb250ZXh0W25hbWVdID0ge31cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0YXNzZXJ0RGVzY2VuZGFibGUoY29udGV4dFtuYW1lXSwgbmFtZSwga2V5KTtcclxuXHRcdFx0Y29udGV4dCA9IGNvbnRleHRbbmFtZV07XHJcblx0XHRcdG5hbWUgPSBrZXlzLnNoaWZ0KCkudHJpbSgpO1xyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiBuZXcgT2JqZWN0UHJvcGVydHkobmFtZSwgY29udGV4dCk7XHJcblx0fVxyXG59OyIsIi8qKlxyXG4gKiBVdGlsaXRpZXMgdG8gaW5zcGVjdCwgY29tcGFyZSwgbWVyZ2UgYW5kIGZpbHRlciBqYXZhc2NyaXB0IG9iamVjdHMuXHJcbiAqXHJcbiAqIFNldmVyYWwgZnVuY3Rpb25zIHNoYXJlIG9uZSBub3Rpb24gb2YgZGF0YTogcHJpbWl0aXZlcywgc2ltcGxlIG9iamVjdHMsIEFycmF5LCBEYXRlLCBSZWdFeHAsIE1hcFxyXG4gKiBhbmQgU2V0LiB7QGxpbmsgaXNQb2pvfSBkZWNpZGVzIHdoZXRoZXIgYSB2YWx1ZSBzdGF5cyB3aXRoaW4gaXQsIHtAbGluayBlcXVhbFBvam99IGNvbXBhcmVzIHRob3NlXHJcbiAqIHR5cGVzIGJ5IHZhbHVlLCBhbmQge0BsaW5rIG1lcmdlfSB0cmVhdHMgZXZlcnl0aGluZyBvdXRzaWRlIG9mIGl0IGFzIGEgdmFsdWUgdG8gYmUgcmVwbGFjZWQuXHJcbiAqXHJcbiAqIEBtb2R1bGUgT2JqZWN0VXRpbHNcclxuICovXHJcbmltcG9ydCBPYmplY3RQcm9wZXJ0eSBmcm9tIFwiLi9PYmplY3RQcm9wZXJ0eS5qc1wiO1xyXG5cclxuLyoqXHJcbiAqIEBwcml2YXRlXHJcbiAqIEBwYXJhbSB7QXJyYXl9IGFcclxuICogQHBhcmFtIHtBcnJheX0gYlxyXG4gKiBAcGFyYW0ge1dlYWtNYXB9IHNlZW4gcGFpcnMgY3VycmVudGx5IHVuZGVyIGNvbXBhcmlzb25cclxuICogQHJldHVybnMge2Jvb2xlYW59XHJcbiAqL1xyXG5jb25zdCBlcXVhbEFycmF5ID0gKGEsIGIsIHNlZW4pID0+IHtcclxuXHRpZiAoYS5sZW5ndGggIT09IGIubGVuZ3RoKSByZXR1cm4gZmFsc2U7XHJcblxyXG5cdGNvbnN0IGxlbmd0aCA9IGEubGVuZ3RoO1xyXG5cdGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIGlmICghaW50ZXJuYWxFcXVhbFBvam8oYVtpXSwgYltpXSwgc2VlbikpIHJldHVybiBmYWxzZTtcclxuXHJcblx0cmV0dXJuIHRydWU7XHJcbn07XHJcblxyXG4vKipcclxuICogQSBzZXQgaXMgdW5vcmRlcmVkLCBzbyBldmVyeSBlbnRyeSBvZiBhIGhhcyB0byBmaW5kIGl0cyBvd24gcGFydG5lciBpbiBiLlxyXG4gKlxyXG4gKiBAcHJpdmF0ZVxyXG4gKiBAcGFyYW0ge1NldH0gYVxyXG4gKiBAcGFyYW0ge1NldH0gYlxyXG4gKiBAcGFyYW0ge1dlYWtNYXB9IHNlZW4gcGFpcnMgY3VycmVudGx5IHVuZGVyIGNvbXBhcmlzb25cclxuICogQHJldHVybnMge2Jvb2xlYW59XHJcbiAqL1xyXG5jb25zdCBlcXVhbFNldCA9IChhLCBiLCBzZWVuKSA9PiB7XHJcblx0aWYgKGEuc2l6ZSAhPT0gYi5zaXplKSByZXR1cm4gZmFsc2U7XHJcblxyXG5cdGNvbnN0IHJlbWFpbmluZyA9IEFycmF5LmZyb20oYik7XHJcblx0Zm9yIChjb25zdCBlbnRyeUEgb2YgYSkge1xyXG5cdFx0Y29uc3QgaW5kZXggPSByZW1haW5pbmcuZmluZEluZGV4KChlbnRyeUIpID0+IGludGVybmFsRXF1YWxQb2pvKGVudHJ5QSwgZW50cnlCLCBzZWVuKSk7XHJcblx0XHRpZiAoaW5kZXggPCAwKSByZXR1cm4gZmFsc2U7XHJcblxyXG5cdFx0cmVtYWluaW5nLnNwbGljZShpbmRleCwgMSk7XHJcblx0fVxyXG5cclxuXHRyZXR1cm4gdHJ1ZTtcclxufTtcclxuXHJcbi8qKlxyXG4gKiBBIG1hcCBpcyB1bm9yZGVyZWQgYXMgd2VsbCBhbmQgaXRzIGtleXMgbWF5IGJlIG9iamVjdHMsIHNvIHRoZSBrZXlzIGdldCBjb21wYXJlZCBieSB2YWx1ZSB0b28uXHJcbiAqXHJcbiAqIEBwcml2YXRlXHJcbiAqIEBwYXJhbSB7TWFwfSBhXHJcbiAqIEBwYXJhbSB7TWFwfSBiXHJcbiAqIEBwYXJhbSB7V2Vha01hcH0gc2VlbiBwYWlycyBjdXJyZW50bHkgdW5kZXIgY29tcGFyaXNvblxyXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cclxuICovXHJcbmNvbnN0IGVxdWFsTWFwID0gKGEsIGIsIHNlZW4pID0+IHtcclxuXHRpZiAoYS5zaXplICE9PSBiLnNpemUpIHJldHVybiBmYWxzZTtcclxuXHJcblx0Y29uc3QgcmVtYWluaW5nID0gQXJyYXkuZnJvbShiKTtcclxuXHRmb3IgKGNvbnN0IFtrZXlBLCB2YWx1ZUFdIG9mIGEpIHtcclxuXHRcdGNvbnN0IGluZGV4ID0gcmVtYWluaW5nLmZpbmRJbmRleCgoW2tleUIsIHZhbHVlQl0pID0+IGludGVybmFsRXF1YWxQb2pvKGtleUEsIGtleUIsIHNlZW4pICYmIGludGVybmFsRXF1YWxQb2pvKHZhbHVlQSwgdmFsdWVCLCBzZWVuKSk7XHJcblx0XHRpZiAoaW5kZXggPCAwKSByZXR1cm4gZmFsc2U7XHJcblxyXG5cdFx0cmVtYWluaW5nLnNwbGljZShpbmRleCwgMSk7XHJcblx0fVxyXG5cclxuXHRyZXR1cm4gdHJ1ZTtcclxufTtcclxuXHJcbi8qKlxyXG4gKiBDb21wYXJlcyB0d28gb2JqZWN0cyBieSBwcm90b3R5cGUgYW5kIGJ5IHRoZWlyIG93biBlbnVtZXJhYmxlIHByb3BlcnRpZXMuXHJcbiAqXHJcbiAqIEBwcml2YXRlXHJcbiAqIEBwYXJhbSB7b2JqZWN0fSBhXHJcbiAqIEBwYXJhbSB7b2JqZWN0fSBiXHJcbiAqIEBwYXJhbSB7V2Vha01hcH0gc2VlbiBwYWlycyBjdXJyZW50bHkgdW5kZXIgY29tcGFyaXNvblxyXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cclxuICovXHJcbmNvbnN0IGVxdWFsT2JqZWN0ID0gKGEsIGIsIHNlZW4pID0+IHtcclxuXHRpZiAoT2JqZWN0LmdldFByb3RvdHlwZU9mKGEpICE9PSBPYmplY3QuZ2V0UHJvdG90eXBlT2YoYikpIHJldHVybiBmYWxzZTtcclxuXHJcblx0Y29uc3QgcHJvcGVydGllc0EgPSBPYmplY3Qua2V5cyhhKTtcclxuXHRjb25zdCBwcm9wZXJ0aWVzQiA9IE9iamVjdC5rZXlzKGIpO1xyXG5cdGlmIChwcm9wZXJ0aWVzQS5sZW5ndGggIT09IHByb3BlcnRpZXNCLmxlbmd0aCkgcmV0dXJuIGZhbHNlO1xyXG5cclxuXHRmb3IgKGNvbnN0IGtleSBvZiBwcm9wZXJ0aWVzQSkge1xyXG5cdFx0Ly8gZXF1YWwga2V5IGNvdW50cyBhbG9uZSB3b3VsZCBsZXQge3g6MSwgeTp1bmRlZmluZWR9IHBhc3MgYWdhaW5zdCB7eDoxLCB6OnVuZGVmaW5lZH1cclxuXHRcdGlmICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGIsIGtleSkpIHJldHVybiBmYWxzZTtcclxuXHRcdGlmICghaW50ZXJuYWxFcXVhbFBvam8oYVtrZXldLCBiW2tleV0sIHNlZW4pKSByZXR1cm4gZmFsc2U7XHJcblx0fVxyXG5cclxuXHRyZXR1cm4gdHJ1ZTtcclxufTtcclxuXHJcbi8qKlxyXG4gKiBBIGN5Y2xpYyBzdHJ1Y3R1cmUgY2FuIG9ubHkgYmUgZGVjaWRlZCBjby1pbmR1Y3RpdmVseTogYSBwYWlyIGFscmVhZHkgdW5kZXIgY29tcGFyaXNvbiBjb3VudHMgYXNcclxuICogZXF1YWwsIG90aGVyd2lzZSB0aGUgd2FsayB3b3VsZCBuZXZlciBjb21lIGJhY2suXHJcbiAqXHJcbiAqIEBwcml2YXRlXHJcbiAqIEBwYXJhbSB7V2Vha01hcH0gc2VlbiBwYWlycyBjdXJyZW50bHkgdW5kZXIgY29tcGFyaXNvblxyXG4gKiBAcGFyYW0ge29iamVjdH0gYVxyXG4gKiBAcGFyYW0ge29iamVjdH0gYlxyXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gdHJ1ZSB3aGVuIHRoaXMgcGFpciBpcyBhbHJlYWR5IGJlaW5nIGNvbXBhcmVkIGZ1cnRoZXIgdXAgdGhlIHN0YWNrXHJcbiAqL1xyXG5jb25zdCBpc0NvbXBhcmluZyA9IChzZWVuLCBhLCBiKSA9PiB7XHJcblx0Y29uc3QgcGFydG5lcnMgPSBzZWVuLmdldChhKTtcclxuXHRyZXR1cm4gISFwYXJ0bmVycyAmJiBwYXJ0bmVycy5oYXMoYik7XHJcbn07XHJcblxyXG4vKipcclxuICogTm90ZXMgYSBwYWlyIGFzIGJlaW5nIGNvbXBhcmVkLCBzbyBhIGN5Y2xlIHJ1bm5pbmcgdGhyb3VnaCBpdCB0ZXJtaW5hdGVzLlxyXG4gKlxyXG4gKiBAcHJpdmF0ZVxyXG4gKiBAcGFyYW0ge1dlYWtNYXB9IHNlZW4gcGFpcnMgY3VycmVudGx5IHVuZGVyIGNvbXBhcmlzb25cclxuICogQHBhcmFtIHtvYmplY3R9IGFcclxuICogQHBhcmFtIHtvYmplY3R9IGJcclxuICogQHJldHVybnMge3ZvaWR9XHJcbiAqL1xyXG5jb25zdCByZW1lbWJlckNvbXBhcmluZyA9IChzZWVuLCBhLCBiKSA9PiB7XHJcblx0Y29uc3QgcGFydG5lcnMgPSBzZWVuLmdldChhKTtcclxuXHRpZiAocGFydG5lcnMpIHBhcnRuZXJzLmFkZChiKTtcclxuXHRlbHNlIHNlZW4uc2V0KGEsIG5ldyBXZWFrU2V0KFtiXSkpO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIENoZWNrcyB3aGV0aGVyIGEgdmFsdWUgaXMgbnVsbCBvciB1bmRlZmluZWQuXHJcbiAqXHJcbiAqIFZhbHVlSGVscGVyLm5vVmFsdWUgYW5zd2VycyB0aGUgc2FtZSBxdWVzdGlvbi4gQm90aCBhcmUga2VwdCBvbiBwdXJwb3NlLCBzbyBWYWx1ZUhlbHBlciBzdGF5cyBmcmVlXHJcbiAqIG9mIGEgZGVwZW5kZW5jeSBvbiB0aGlzIG1vZHVsZSAtIHNlZSB0aGUgbm90ZSB0aGVyZS5cclxuICpcclxuICogQHBhcmFtIHsqfSBvYmplY3QgdGhlIHZhbHVlIHRvIGJlIHRlc3RpbmdcclxuICogQHJldHVybnMge2Jvb2xlYW59XHJcbiAqL1xyXG5leHBvcnQgY29uc3QgaXNOdWxsT3JVbmRlZmluZWQgPSAob2JqZWN0KSA9PiB7XHJcblx0cmV0dXJuIG9iamVjdCA9PSBudWxsIHx8IHR5cGVvZiBvYmplY3QgPT09IFwidW5kZWZpbmVkXCI7XHJcbn07XHJcblxyXG4vKipcclxuICogQ2hlY2tzIHdoZXRoZXIgYSB2YWx1ZSBpcyBhIHByaW1pdGl2ZS5cclxuICpcclxuICogbnVsbCBhbmQgdW5kZWZpbmVkIGNvdW50IGFzIHByaW1pdGl2ZXMuIEEgc3ltYm9sIGRvZXMgbm90IC0gaXQgaXMgdHJlYXRlZCBhcyBhbiBvcGFxdWUgdmFsdWVcclxuICogdGhyb3VnaG91dCB0aGlzIG1vZHVsZSwgc28gdGhhdCB7QGxpbmsgaXNQb2pvfSBrZWVwcyByZWplY3RpbmcgaXQgYXMgZGF0YS5cclxuICpcclxuICogQHBhcmFtIHsqfSBvYmplY3QgdGhlIHZhbHVlIHRvIGJlIHRlc3RpbmdcclxuICogQHJldHVybnMge2Jvb2xlYW59XHJcbiAqL1xyXG5leHBvcnQgY29uc3QgaXNQcmltaXRpdmUgPSAob2JqZWN0KSA9PiB7XHJcblx0aWYgKG9iamVjdCA9PSBudWxsKSByZXR1cm4gdHJ1ZTtcclxuXHJcblx0Y29uc3QgdHlwZSA9IHR5cGVvZiBvYmplY3Q7XHJcblx0c3dpdGNoICh0eXBlKSB7XHJcblx0XHRjYXNlIFwibnVtYmVyXCI6XHJcblx0XHRjYXNlIFwiYmlnaW50XCI6XHJcblx0XHRjYXNlIFwiYm9vbGVhblwiOlxyXG5cdFx0Y2FzZSBcInN0cmluZ1wiOlxyXG5cdFx0Y2FzZSBcInVuZGVmaW5lZFwiOlxyXG5cdFx0XHRyZXR1cm4gdHJ1ZTtcclxuXHR9XHJcblxyXG5cdHJldHVybiBmYWxzZTtcclxufTtcclxuXHJcbi8qKlxyXG4gKiBDaGVja3Mgd2hldGhlciBhIHZhbHVlIGlzIGFuIG9iamVjdC5cclxuICpcclxuICogRXZlcnkgb2JqZWN0IGNvdW50cywgQXJyYXksIE1hcCwgRGF0ZSBhbmQgY2xhc3MgaW5zdGFuY2VzIGluY2x1ZGVkLiBVc2Uge0BsaW5rIGlzUG9qb30gdG8gYXNrIGZvclxyXG4gKiBhIHNpbXBsZSBkYXRhIG9iamVjdCBpbnN0ZWFkLlxyXG4gKlxyXG4gKiBAcGFyYW0geyp9IG9iamVjdCB0aGUgdmFsdWUgdG8gYmUgdGVzdGluZ1xyXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cclxuICovXHJcbmV4cG9ydCBjb25zdCBpc09iamVjdCA9IChvYmplY3QpID0+IHtcclxuXHRpZiAoaXNOdWxsT3JVbmRlZmluZWQob2JqZWN0KSkgcmV0dXJuIGZhbHNlO1xyXG5cclxuXHRyZXR1cm4gdHlwZW9mIG9iamVjdCA9PT0gXCJvYmplY3RcIjtcclxufTtcclxuXHJcbi8qKlxyXG4gKiBDb21wYXJlcyB0d28gdmFsdWVzIGJ5IHZhbHVlLlxyXG4gKlxyXG4gKiBUaGUgdHlwZXMgY29tcGFyZWQgYnkgdmFsdWUgYXJlIHRoZSBvbmVzIHtAbGluayBpc1Bvam99IGFjY2VwdHMgYXMgZGF0YTogcHJpbWl0aXZlcywgc2ltcGxlXHJcbiAqIG9iamVjdHMsIEFycmF5LCBEYXRlLCBSZWdFeHAsIE1hcCBhbmQgU2V0LiBBIERhdGUgaXMgY29tcGFyZWQgYnkgaXRzIHRpbWUsIGEgUmVnRXhwIGJ5IHNvdXJjZSBhbmRcclxuICogZmxhZ3MuIFNldCBhbmQgTWFwIGFyZSB1bm9yZGVyZWQsIHNvIHRoZWlyIGVudHJpZXMgYXJlIG1hdGNoZWQgYnkgdmFsdWUgaW5zdGVhZCBvZiBieSBwb3NpdGlvbixcclxuICogYW5kIHRoZSBrZXlzIG9mIGEgTWFwIHRha2UgcGFydCBpbiB0aGF0IGNvbXBhcmlzb24uXHJcbiAqXHJcbiAqIFNpbXBsZSBvYmplY3RzIGFuZCBjbGFzcyBpbnN0YW5jZXMgbmVlZCB0aGUgc2FtZSBwcm90b3R5cGUgYW5kIHRoZSBzYW1lIG93biBlbnVtZXJhYmxlXHJcbiAqIHByb3BlcnRpZXMuIEV2ZXJ5IG90aGVyIG9iamVjdCAtIEVycm9yLCBQcm9taXNlLCBXZWFrTWFwIGFuZCB0aGUgbGlrZSAtIGtlZXBzIGl0cyBzdGF0ZSBvdXQgb2ZcclxuICogcmVhY2gsIHNvIHRob3NlIGNvbXBhcmUgYnkgaWRlbnRpdHkgb25seS4gRnVuY3Rpb25zIGFuZCBzeW1ib2xzIGRvIGFzIHdlbGwuXHJcbiAqXHJcbiAqIEN5Y2xpYyBzdHJ1Y3R1cmVzIGFyZSBzdXBwb3J0ZWQuXHJcbiAqXHJcbiAqIEBwYXJhbSB7Kn0gYVxyXG4gKiBAcGFyYW0geyp9IGJcclxuICogQHJldHVybnMge2Jvb2xlYW59XHJcbiAqXHJcbiAqIEBleGFtcGxlXHJcbiAqIGVxdWFsUG9qbyh7YSA6IFsxLCAyXX0sIHthIDogWzEsIDJdfSk7ICAgICAgICAgICAgICAgLy8gdHJ1ZVxyXG4gKiBlcXVhbFBvam8obmV3IFNldChbMSwgMl0pLCBuZXcgU2V0KFsyLCAxXSkpOyAgICAgICAgIC8vIHRydWUsIGEgc2V0IGlzIHVub3JkZXJlZFxyXG4gKiBlcXVhbFBvam8obmV3IERhdGUoMCksIG5ldyBEYXRlKDEpKTsgICAgICAgICAgICAgICAgIC8vIGZhbHNlXHJcbiAqIGVxdWFsUG9qbyhuZXcgRXJyb3IoXCJ4XCIpLCBuZXcgRXJyb3IoXCJ4XCIpKTsgICAgICAgICAgIC8vIGZhbHNlLCBjb21wYXJlZCBieSBpZGVudGl0eVxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGVxdWFsUG9qbyA9IChhLCBiKSA9PiBpbnRlcm5hbEVxdWFsUG9qbyhhLCBiLCBuZXcgV2Vha01hcCgpKTtcclxuXHJcblxyXG4vKipcclxuKiBAcGFyYW0geyp9IGFcclxuICogQHBhcmFtIHsqfSBiXHJcbiAqIEBwYXJhbSB7V2Vha01hcH0gc2VlbiBpbnRlcm5hbCwgdHJhY2tzIHRoZSBwYWlycyBjdXJyZW50bHkgdW5kZXIgY29tcGFyaXNvblxyXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cclxuICovXHJcbmNvbnN0IGludGVybmFsRXF1YWxQb2pvID0gKGEsIGIsIHNlZW4pID0+IHtcclxuXHRpZiAoaXNOdWxsT3JVbmRlZmluZWQoYSkgfHwgaXNOdWxsT3JVbmRlZmluZWQoYikpIHJldHVybiBhID09PSBiO1xyXG5cdGlmIChhID09PSBiKSByZXR1cm4gdHJ1ZTtcclxuXHRpZiAoaXNQcmltaXRpdmUoYSkgfHwgaXNQcmltaXRpdmUoYikpIHJldHVybiBhID09PSBiO1xyXG5cclxuXHRjb25zdCB0eXBlQSA9IHR5cGVvZiBhO1xyXG5cdGlmICh0eXBlQSAhPT0gdHlwZW9mIGIpIHJldHVybiBmYWxzZTtcclxuXHRpZiAodHlwZUEgIT09IFwib2JqZWN0XCIpIHJldHVybiBhID09PSBiOyAvLyBmdW5jdGlvbiBhbmQgc3ltYm9sXHJcblxyXG5cdGlmIChpc0NvbXBhcmluZyhzZWVuLCBhLCBiKSkgcmV0dXJuIHRydWU7XHJcblx0cmVtZW1iZXJDb21wYXJpbmcoc2VlbiwgYSwgYik7XHJcblxyXG5cdGlmKGEgaW5zdGFuY2VvZiBEYXRlKSByZXR1cm4gIGIgaW5zdGFuY2VvZiBEYXRlID8gT2JqZWN0LmlzKGEuZ2V0VGltZSgpLCBiLmdldFRpbWUoKSkgOiBmYWxzZTtcclxuXHRlbHNlIGlmKGEgaW5zdGFuY2VvZiBSZWdFeHApIHJldHVybiBiIGluc3RhbmNlb2YgUmVnRXhwID8gKGEuc291cmNlID09PSBiLnNvdXJjZSAmJiBhLmZsYWdzID09PSBiLmZsYWdzKSA6IGZhbHNlO1xyXG5cdGVsc2UgaWYoYSBpbnN0YW5jZW9mIEFycmF5KSByZXR1cm4gYiBpbnN0YW5jZW9mIEFycmF5ID8gZXF1YWxBcnJheShhLCBiLCBzZWVuKSA6IGZhbHNlO1xyXG5cdGVsc2UgaWYoYSBpbnN0YW5jZW9mIFNldCkgcmV0dXJuIGIgaW5zdGFuY2VvZiBTZXQgPyBlcXVhbFNldChhLCBiLCBzZWVuKSA6IGZhbHNlO1xyXG5cdGVsc2UgaWYoYSBpbnN0YW5jZW9mIE1hcCkgcmV0dXJuIGIgaW5zdGFuY2VvZiBNYXAgPyBlcXVhbE1hcChhLCBiLCBzZWVuKSA6IGZhbHNlO1xyXG5cdGVsc2UgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChhKSAhPT0gXCJbb2JqZWN0IE9iamVjdF1cIikgcmV0dXJuIGZhbHNlO1x0XHJcblx0ZWxzZSByZXR1cm4gZXF1YWxPYmplY3QoYSwgYiwgc2Vlbik7XHJcbn07XHJcblxyXG4vKipcclxuICogQSBwbGFpbiBvYmplY3Qgb3ducyBlaXRoZXIgbm8gcHJvdG90eXBlIGF0IGFsbCBvciBhIHByb3RvdHlwZSB0aGF0IGl0c2VsZiBoYXMgbm9uZS4gQ2hlY2tpbmcgdGhlXHJcbiAqIGNoYWluIGxlbmd0aCBpbnN0ZWFkIG9mIGNvbXBhcmluZyBhZ2FpbnN0IE9iamVjdC5wcm90b3R5cGUga2VlcHMgdGhpcyB3b3JraW5nIGFjcm9zcyByZWFsbXMsXHJcbiAqIHdoZXJlIGFuIGlmcmFtZSBicmluZ3MgaXRzIG93biBPYmplY3QucHJvdG90eXBlLlxyXG4gKlxyXG4gKiBAcHJpdmF0ZVxyXG4gKiBAcGFyYW0geyp9IG9iamVjdFxyXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cclxuICovXHJcbmNvbnN0IGlzUGxhaW5PYmplY3QgPSAob2JqZWN0KSA9PiB7XHJcblx0aWYgKG9iamVjdCA9PT0gbnVsbCB8fCB0eXBlb2Ygb2JqZWN0ICE9PSBcIm9iamVjdFwiKSByZXR1cm4gZmFsc2U7XHJcblx0Y29uc3QgcHJvdG90eXBlID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKG9iamVjdCk7XHJcblx0cmV0dXJuIHByb3RvdHlwZSA9PT0gbnVsbCB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YocHJvdG90eXBlKSA9PT0gbnVsbDtcclxufTtcclxuXHJcbi8qKlxyXG4gKiBXYWxrcyBhIHZhbHVlIGFuZCBkZWNpZGVzIHdoZXRoZXIgZXZlcnl0aGluZyByZWFjaGFibGUgZnJvbSBpdCBpcyBkYXRhLlxyXG4gKlxyXG4gKiBAcHJpdmF0ZVxyXG4gKiBAcGFyYW0geyp9IHZhbHVlXHJcbiAqIEBwYXJhbSB7V2Vha1NldH0gW3NlZW5dIHZhbHVlcyBhbHJlYWR5IHdhbGtlZCwgY2xvc2VzIGN5Y2xlc1xyXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cclxuICovXHJcbmNvbnN0IGlzRGF0YVZhbHVlID0gKHZhbHVlLCBzZWVuID0gbmV3IFdlYWtTZXQoKSkgPT4ge1xyXG5cdGlmIChpc1ByaW1pdGl2ZSh2YWx1ZSkpIHJldHVybiB0cnVlO1xyXG5cdGVsc2UgaWYgKHZhbHVlIGluc3RhbmNlb2YgRGF0ZSkgcmV0dXJuIHRydWU7XHJcblx0ZWxzZSBpZiAodmFsdWUgaW5zdGFuY2VvZiBSZWdFeHApIHJldHVybiB0cnVlO1xyXG5cclxuXHRpZiAoc2Vlbi5oYXModmFsdWUpKSByZXR1cm4gdHJ1ZTtcclxuXHRzZWVuLmFkZCh2YWx1ZSk7XHJcblxyXG5cdGlmICh2YWx1ZSBpbnN0YW5jZW9mIEFycmF5KSByZXR1cm4gdmFsdWUuZXZlcnkoKGVudHJ5KSA9PiBpc0RhdGFWYWx1ZShlbnRyeSwgc2VlbikpO1xyXG5cdGVsc2UgaWYgKHZhbHVlIGluc3RhbmNlb2YgTWFwKSB7XHJcblx0XHRmb3IgKGNvbnN0IFtrZXksIGVudHJ5XSBvZiB2YWx1ZSkge1xyXG5cdFx0XHRpZiAoIWlzRGF0YVZhbHVlKGtleSwgc2VlbikgfHwgIWlzRGF0YVZhbHVlKGVudHJ5LCBzZWVuKSkgcmV0dXJuIGZhbHNlO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHRydWU7XHJcblx0fSBlbHNlIGlmICh2YWx1ZSBpbnN0YW5jZW9mIFNldCkge1xyXG5cdFx0Zm9yIChjb25zdCBlbnRyeSBvZiB2YWx1ZSkge1xyXG5cdFx0XHRpZiAoIWlzRGF0YVZhbHVlKGVudHJ5LCBzZWVuKSkgcmV0dXJuIGZhbHNlO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHRydWU7XHJcblx0fSBlbHNlIGlmICghaXNQbGFpbk9iamVjdCh2YWx1ZSkpXHJcblx0XHRyZXR1cm4gZmFsc2U7IC8vIGNsYXNzIGluc3RhbmNlcyBhbmQgZXZlcnkgb3RoZXIgZXhvdGljIG9iamVjdFxyXG5cdGVsc2Uge1xyXG5cdFx0Zm9yIChjb25zdCBrZXkgb2YgT2JqZWN0LmtleXModmFsdWUpKSB7XHJcblx0XHRcdGlmICghaXNEYXRhVmFsdWUodmFsdWVba2V5XSwgc2VlbikpIHJldHVybiBmYWxzZTtcclxuXHRcdH1cclxuXHJcblx0XHRyZXR1cm4gdHJ1ZTtcclxuXHR9XHJcbn07XHJcblxyXG4vKipcclxuICogQ2hlY2tzIHdoZXRoZXIgYW4gb2JqZWN0IGlzIGEgcHVyZSBkYXRhIG9iamVjdC5cclxuICpcclxuICogVGhlIG9iamVjdCBpdHNlbGYgaGFzIHRvIGJlIGEgc2ltcGxlIG9iamVjdCAtIG5vIEFycmF5LCBNYXAgb3Igc29tZXRoaW5nIGVsc2UuIEV2ZXJ5IHZhbHVlXHJcbiAqIHJlYWNoYWJsZSBmcm9tIGl0IGhhcyB0byBiZSBkYXRhIGFzIHdlbGw6IHByaW1pdGl2ZXMsIHNpbXBsZSBvYmplY3RzLCBBcnJheSwgRGF0ZSwgUmVnRXhwLCBNYXAgb3JcclxuICogU2V0LiBGdW5jdGlvbnMgYW5kIGNsYXNzIGluc3RhbmNlcyBhcmUgcmVqZWN0ZWQgYXQgYW55IGRlcHRoLCBpbmNsdWRpbmcgaW5zaWRlIGFycmF5cyBhbmQgaW5zaWRlXHJcbiAqIHRoZSBrZXlzIGFuZCB2YWx1ZXMgb2YgYSBNYXAgb3IgU2V0LlxyXG4gKlxyXG4gKiBPbmx5IG93biBlbnVtZXJhYmxlIHByb3BlcnRpZXMgYXJlIGluc3BlY3RlZC4gQ3ljbGljIHJlZmVyZW5jZXMgYXJlIGFsbG93ZWQuXHJcbiAqXHJcbiAqIEBwYXJhbSB7Kn0gb2JqZWN0IHRoZSBvYmplY3QgdG8gYmUgdGVzdGluZ1xyXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cclxuICpcclxuICogQGV4YW1wbGVcclxuICogaXNQb2pvKHthIDoge2IgOiBbMSwgbmV3IERhdGUoKV19fSk7ICAgLy8gdHJ1ZVxyXG4gKiBpc1Bvam8oe2EgOiAoKSA9PiB7fX0pOyAgICAgICAgICAgICAgICAvLyBmYWxzZSwgYSBmdW5jdGlvbiBpcyBubyBkYXRhXHJcbiAqIGlzUG9qbyh7YSA6IFt7YiA6IG5ldyBGb28oKX1dfSk7ICAgICAgIC8vIGZhbHNlLCByZWplY3RlZCBhdCBhbnkgZGVwdGhcclxuICogaXNQb2pvKFtdKTsgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gZmFsc2UsIHRoZSBvYmplY3QgaXRzZWxmIGhhcyB0byBiZSBhIHNpbXBsZSBvbmVcclxuICovXHJcbmV4cG9ydCBjb25zdCBpc1Bvam8gPSAob2JqZWN0KSA9PiB7XHJcblx0aWYgKGlzTnVsbE9yVW5kZWZpbmVkKG9iamVjdCkgfHwgIWlzUGxhaW5PYmplY3Qob2JqZWN0KSkgcmV0dXJuIGZhbHNlO1xyXG5cclxuXHRyZXR1cm4gaXNEYXRhVmFsdWUob2JqZWN0KTtcclxufTtcclxuXHJcbi8qKlxyXG4gKiBBcHBlbmRzIGEgcHJvcGVydHkgdmFsdWUgdG8gYW4gb2JqZWN0LiBJZiB0aGUgcHJvcGVydHkgYWxyZWFkeSBob2xkcyBhIHZhbHVlLCBpdCBpcyBjb252ZXJ0ZWRcclxuICogaW50byBhbiBhcnJheSBjYXJyeWluZyBib3RoLiBBbiB1bmRlZmluZWQgdmFsdWUgaXMgaWdub3JlZC5cclxuICpcclxuICogVGhlIGtleSBtYXkgYWRkcmVzcyBhIG5lc3RlZCBwcm9wZXJ0eSBieSBhIGRvdHRlZCBwYXRoLCBtaXNzaW5nIHN0ZXBzIGFyZSBjcmVhdGVkIG9uIHRoZSB3YXkuXHJcbiAqXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBhS2V5IG5hbWUgb2YgdGhlIHByb3BlcnR5LCBhIGRvdHRlZCBwYXRoIGFkZHJlc3NlcyBhIG5lc3RlZCBvbmVcclxuICogQHBhcmFtIHsqfSBhRGF0YSBwcm9wZXJ0eSB2YWx1ZVxyXG4gKiBAcGFyYW0ge29iamVjdH0gYU9iamVjdCB0aGUgb2JqZWN0IHRvIGFwcGVuZCB0aGUgcHJvcGVydHkgdG9cclxuICogQHJldHVybnMge29iamVjdH0gdGhlIGNoYW5nZWQgb2JqZWN0XHJcbiAqXHJcbiAqIEBleGFtcGxlXHJcbiAqIGFwcGVuZChcImFcIiwgMSwge30pOyAgICAgICAgICAgICAvLyB7YSA6IDF9XHJcbiAqIGFwcGVuZChcImFcIiwgMiwge2EgOiAxfSk7ICAgICAgICAvLyB7YSA6IFsxLCAyXX1cclxuICogYXBwZW5kKFwiYS5iXCIsIDEsIHt9KTsgICAgICAgICAgIC8vIHthIDoge2IgOiAxfX1cclxuICovXHJcbmV4cG9ydCBjb25zdCBhcHBlbmQgPSAoYUtleSwgYURhdGEsIGFPYmplY3QpID0+IHtcclxuXHRpZiAodHlwZW9mIGFEYXRhICE9PSBcInVuZGVmaW5lZFwiKSB7XHJcblx0XHRjb25zdCBwcm9wZXJ0eSA9IE9iamVjdFByb3BlcnR5LmxvYWQoYU9iamVjdCwgYUtleSwgdHJ1ZSk7XHJcblx0XHRwcm9wZXJ0eS5hcHBlbmQgPSBhRGF0YTtcclxuXHR9XHJcblx0cmV0dXJuIGFPYmplY3Q7XHJcbn07XHJcblxyXG4vKipcclxuICogT3duIGVudW1lcmFibGUga2V5cywgc3RyaW5ncyBhbmQgc3ltYm9scyBhbGlrZSAtIHRoZSBzYW1lIHNldCBPYmplY3QuYXNzaWduIGNvcGllcy5cclxuICpcclxuICogQHByaXZhdGVcclxuICogQHBhcmFtIHsqfSBzb3VyY2VcclxuICogQHJldHVybnMge0FycmF5PHN0cmluZ3xzeW1ib2w+fVxyXG4gKi9cclxuY29uc3QgYXNzaWduYWJsZUtleXMgPSAoc291cmNlKSA9PiB7XHJcblx0Y29uc3Qgb2JqZWN0ID0gT2JqZWN0KHNvdXJjZSk7XHJcblx0cmV0dXJuIFJlZmxlY3Qub3duS2V5cyhvYmplY3QpLmZpbHRlcigoa2V5KSA9PiBPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwob2JqZWN0LCBrZXkpKTtcclxufTtcclxuXHJcbi8qKlxyXG4gKiBNZXJnZXMgb2JqZWN0cyBpbnRvIGEgdGFyZ2V0IG9iamVjdCAtIGEgcmVjdXJzaXZlIE9iamVjdC5hc3NpZ24uIEl0IHN0ZXBzIGludG8gb2JqZWN0cyBhbmQgc3ViXHJcbiAqIG9iamVjdHMuIEV2ZXJ5IG90aGVyIHZhbHVlIGlzIHJlcGxhY2VkIGJ5IHRoZSB2YWx1ZSBmcm9tIHRoZSBzb3VyY2Ugb2JqZWN0LlxyXG4gKlxyXG4gKiBMaWtlIE9iamVjdC5hc3NpZ24gaXQgY29waWVzIG93biBlbnVtZXJhYmxlIHByb3BlcnRpZXMgLSBzdHJpbmcgYW5kIHN5bWJvbCBrZXlzIGFsaWtlIC0sIGlnbm9yZXNcclxuICogbnVsbCBhbmQgdW5kZWZpbmVkIHNvdXJjZXMgYW5kIHJldHVybnMgdGhlIHRhcmdldC4gVW5saWtlIE9iamVjdC5hc3NpZ24gaXQgc3RlcHMgaW50byBhIHByb3BlcnR5XHJcbiAqIHdoZW4gdGFyZ2V0IGFuZCBzb3VyY2UgYm90aCBob2xkIGFuIG9iamVjdCwgaW5zdGVhZCBvZiByZXBsYWNpbmcgaXQuXHJcbiAqXHJcbiAqIEEgY2xhc3MgaW5zdGFuY2UgY291bnRzIGFzIGFuIG9iamVjdCBoZXJlIGFuZCBpcyBtZXJnZWQgcHJvcGVydHkgYnkgcHJvcGVydHkganVzdCBsaWtlIGEgc2ltcGxlXHJcbiAqIG9uZS4gVGhlIHRhcmdldCBrZWVwcyBpdHMgb3duIHByb3RvdHlwZSwgb25seSB0aGUgcHJvcGVydGllcyBvZiB0aGUgc291cmNlIGFyZSBhcHBsaWVkIHRvIGl0IC0gYVxyXG4gKiBtZXJnZSBuZXZlciB0dXJucyB0aGUgdGFyZ2V0IGludG8gYW4gaW5zdGFuY2Ugb2YgdGhlIGNsYXNzIG9mIHRoZSBzb3VyY2UuXHJcbiAqXHJcbiAqIEFuIEFycmF5LCBTZXQsIE1hcCwgRGF0ZSBvciBSZWdFeHAgaXMgYWx3YXlzIHJlcGxhY2VkIGFzIGEgd2hvbGUsIG5ldmVyIG1lcmdlZCBlbnRyeSBieSBlbnRyeS5cclxuICogVGhhdCBhbHJlYWR5IGFwcGxpZXMgd2hlbiBvbmx5IG9uZSBvZiBib3RoIHNpZGVzIGhvbGRzIG9uZS4gVGhlIHJlc3VsdCB0aGVyZWZvcmUgY2FycmllcyB0aGVcclxuICogY29udGFpbmVyIG9mIHRoZSBzb3VyY2Ugd2l0aCBpdHMgb3duIGxlbmd0aCAtIG5vdGhpbmcgb2YgdGhlIHRhcmdldCBzdXJ2aXZlcyBpdCwgbm90IGV2ZW4gYW5cclxuICogb2JqZWN0IHNpdHRpbmcgYXQgdGhlIHNhbWUgaW5kZXggb3IgdW5kZXIgdGhlIHNhbWUga2V5LlxyXG4gKlxyXG4gKiBBIGtleSB3aG9zZSB2YWx1ZSBpcyBhIHN5bWJvbCBpcyBza2lwcGVkLCBvbiB0aGUgdGFyZ2V0IHNpZGUgYXMgd2VsbCBhcyBvbiB0aGUgc291cmNlIHNpZGUuIEFcclxuICogc3ltYm9sIGNhcnJpZXMgbm8gZGF0YSwgc28gc3VjaCBhIHByb3BlcnR5IGlzIGxlZnQgdW50b3VjaGVkLlxyXG4gKlxyXG4gKiBUaGUga2V5IF9fcHJvdG9fXyBpcyBza2lwcGVkLiBPYmplY3QuYXNzaWduIHdvdWxkIG9ubHkgcmVwb2ludCB0aGUgcHJvdG90eXBlIG9mIHRoZSB0YXJnZXQsIGJ1dFxyXG4gKiBtZXJnaW5nIGludG8gaXQgd291bGQgd2FsayBpbnRvIE9iamVjdC5wcm90b3R5cGUgYW5kIGxlYWsgaW50byBldmVyeSBvYmplY3QuXHJcbiAqXHJcbiAqIFRoZSB0YXJnZXQgaXMgbW9kaWZpZWQgaW4gcGxhY2UuIEEgc3ViIG9iamVjdCBvZiBhIHNvdXJjZSB0aGF0IGhhcyBubyBjb3VudGVycGFydCBpbiB0aGUgdGFyZ2V0IGlzXHJcbiAqIHRha2VuIG92ZXIgYnkgcmVmZXJlbmNlLCBqdXN0IGxpa2UgT2JqZWN0LmFzc2lnbiBkb2VzLlxyXG4gKlxyXG4gKiBAcGFyYW0ge29iamVjdH0gdGFyZ2V0IHRoZSB0YXJnZXQgb2JqZWN0IHRvIG1lcmdlIGludG8sIGEgbmV3IG9iamVjdCB3aGVuIGZhbHN5XHJcbiAqIEBwYXJhbSB7Li4ub2JqZWN0fSBzb3VyY2VzIHRoZSBzb3VyY2Ugb2JqZWN0cywgYXBwbGllZCBpbiBvcmRlclxyXG4gKiBAcmV0dXJucyB7b2JqZWN0fSB0aGUgdGFyZ2V0IG9iamVjdFxyXG4gKlxyXG4gKiBAZXhhbXBsZVxyXG4gKiBtZXJnZSh7YSA6IDF9LCB7YiA6IDJ9KTsgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHthIDogMSwgYiA6IDJ9XHJcbiAqIG1lcmdlKHthIDoge3ggOiAxfX0sIHthIDoge3kgOiAyfX0pOyAgICAgICAgICAgICAgLy8ge2EgOiB7eCA6IDEsIHkgOiAyfX1cclxuICogbWVyZ2Uoe2EgOiBbMSwgMiwgM119LCB7YSA6IFs5XX0pOyAgICAgICAgICAgICAgICAvLyB7YSA6IFs5XX0sIHJlcGxhY2VkIGFzIGEgd2hvbGVcclxuICogbWVyZ2Uoe2EgOiBuZXcgRm9vKDEpfSwge2EgOiBuZXcgQmFyKDIpfSk7ICAgICAgICAvLyBhIHN0YXlzIGEgRm9vLCBjYXJyeWluZyB0aGUgcHJvcGVydGllcyBvZiBib3RoXHJcbiAqIG1lcmdlKHt9LCBzb3VyY2UxLCBzb3VyY2UyLCBzb3VyY2UzKTtcclxuICovXHJcbmV4cG9ydCBjb25zdCBtZXJnZSA9ICh0YXJnZXQsIC4uLnNvdXJjZXMpID0+IHtcclxuXHRpZiAoIXRhcmdldCkgdGFyZ2V0ID0ge307XHJcblxyXG5cdHNvdXJjZXNcclxuXHRcdC5maWx0ZXIoKHNvdXJjZSkgPT4gIWlzTnVsbE9yVW5kZWZpbmVkKHNvdXJjZSkpXHJcblx0XHQuZm9yRWFjaCgoc291cmNlKSA9PiB7XHJcblx0XHRcdGNvbnN0IGtleXMgPSBhc3NpZ25hYmxlS2V5cyhzb3VyY2UpO1xyXG5cdFx0XHRrZXlzXHJcblx0XHRcdFx0LmZpbHRlcigoa2V5KSA9PiBrZXkgIT0gXCJfX3Byb3RvX19cIilcclxuXHRcdFx0XHQuZmlsdGVyKChrZXkpID0+IHR5cGVvZiB0YXJnZXRba2V5XSAhPT0gXCJzeW1ib2xcIilcclxuXHRcdFx0XHQuZmlsdGVyKChrZXkpID0+IHR5cGVvZiBzb3VyY2Vba2V5XSAhPT0gXCJzeW1ib2xcIilcclxuXHRcdFx0XHQuZm9yRWFjaCgoa2V5KSA9PiB7XHJcblx0XHRcdFx0XHRjb25zdCB2YWx1ZSA9IHNvdXJjZVtrZXldO1xyXG5cdFx0XHRcdFx0Y29uc3QgY3VycmVudCA9IHRhcmdldFtrZXldO1xyXG5cclxuXHRcdFx0XHRcdGlmKGN1cnJlbnQgPT0gbnVsbCApIHRhcmdldFtrZXldID0gdmFsdWU7XHJcblx0XHRcdFx0XHRlbHNlIGlmKCB0eXBlb2YgY3VycmVudCAhPT0gdHlwZW9mIHZhbHVlICkgdGFyZ2V0W2tleV0gPSB2YWx1ZTtcclxuXHRcdFx0XHRcdGVsc2UgaWYgKGN1cnJlbnQgaW5zdGFuY2VvZiBBcnJheSB8fCB2YWx1ZSBpbnN0YW5jZW9mIEFycmF5KSB0YXJnZXRba2V5XSA9IHZhbHVlO1xyXG5cdFx0XHRcdFx0ZWxzZSBpZiAoY3VycmVudCBpbnN0YW5jZW9mIFNldCB8fCB2YWx1ZSBpbnN0YW5jZW9mIFNldCkgdGFyZ2V0W2tleV0gPSB2YWx1ZTtcclxuXHRcdFx0XHRcdGVsc2UgaWYgKGN1cnJlbnQgaW5zdGFuY2VvZiBNYXAgfHwgdmFsdWUgaW5zdGFuY2VvZiBNYXApIHRhcmdldFtrZXldID0gdmFsdWU7XHJcblx0XHRcdFx0XHRlbHNlIGlmIChjdXJyZW50IGluc3RhbmNlb2YgRGF0ZSB8fCB2YWx1ZSBpbnN0YW5jZW9mIERhdGUpIHRhcmdldFtrZXldID0gdmFsdWU7XHJcblx0XHRcdFx0XHRlbHNlIGlmIChjdXJyZW50IGluc3RhbmNlb2YgUmVnRXhwIHx8IHZhbHVlIGluc3RhbmNlb2YgUmVnRXhwKSB0YXJnZXRba2V5XSA9IHZhbHVlO1xyXG5cdFx0XHRcdFx0ZWxzZSBpZiAoaXNPYmplY3QoY3VycmVudCkgJiYgaXNPYmplY3QodmFsdWUpKSBtZXJnZShjdXJyZW50LCB2YWx1ZSk7XHJcblx0XHRcdFx0XHRlbHNlIHRhcmdldFtrZXldID0gdmFsdWU7XHJcblx0XHRcdFx0fSk7XHJcblx0XHR9KTtcclxuXHJcblx0cmV0dXJuIHRhcmdldDtcclxufTtcclxuXHJcbi8qKlxyXG4gKiBEZWNpZGVzIHdoZXRoZXIgYSBzaW5nbGUgcHJvcGVydHkgaXMgdGFrZW4gb3ZlciBieSB7QGxpbmsgZmlsdGVyfS5cclxuICpcclxuICogQGNhbGxiYWNrIFByb3BlcnR5RmlsdGVyXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIG5hbWUgb2YgdGhlIHByb3BlcnR5XHJcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgdmFsdWUgb2YgdGhlIHByb3BlcnR5XHJcbiAqIEBwYXJhbSB7b2JqZWN0fSBjb250ZXh0IHRoZSBvYmplY3QgdGhlIHByb3BlcnR5IGJlbG9uZ3MgdG9cclxuICogQHJldHVybnMge2Jvb2xlYW59IHRydWUgdG8ga2VlcCB0aGUgcHJvcGVydHlcclxuICovXHJcblxyXG4vKipcclxuICogQnVpbGRzIGEge0BsaW5rIFByb3BlcnR5RmlsdGVyfSBhY2NlcHRpbmcgb3IgcmVqZWN0aW5nIGEgZml4ZWQgbGlzdCBvZiBwcm9wZXJ0eSBuYW1lcy5cclxuICpcclxuICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnNcclxuICogQHBhcmFtIHtBcnJheTxzdHJpbmc+fSBvcHRpb25zLm5hbWVzIHRoZSBwcm9wZXJ0eSBuYW1lcyB0byBkZWNpZGUgb25cclxuICogQHBhcmFtIHtib29sZWFufSBvcHRpb25zLmFsbG93ZWQgdHJ1ZSB0dXJucyB0aGUgbGlzdCBpbnRvIGFuIGFsbG93IGxpc3QsIGZhbHNlIGludG8gYSBkZW55IGxpc3RcclxuICogQHJldHVybnMge1Byb3BlcnR5RmlsdGVyfVxyXG4gKlxyXG4gKiBAZXhhbXBsZVxyXG4gKiBjb25zdCBkZW55ID0gYnVpbGRQcm9wZXJ0eUZpbHRlcih7bmFtZXMgOiBbXCJwYXNzd29yZFwiXSwgYWxsb3dlZCA6IGZhbHNlfSk7XHJcbiAqIGZpbHRlcih1c2VyLCBkZW55KTsgICAvLyBldmVyeSBwcm9wZXJ0eSBidXQgcGFzc3dvcmRcclxuICovXHJcbmV4cG9ydCBjb25zdCBidWlsZFByb3BlcnR5RmlsdGVyID0gKHsgbmFtZXMsIGFsbG93ZWQgfSkgPT4ge1xyXG5cdHJldHVybiAobmFtZSwgdmFsdWUsIGNvbnRleHQpID0+IHtcclxuXHRcdHJldHVybiBuYW1lcy5pbmNsdWRlcyhuYW1lKSA9PT0gYWxsb3dlZDtcclxuXHR9O1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIFJlYnVpbGRzIGFuIEFycmF5LCBTZXQgb3IgTWFwIHdpdGggaXRzIHZhbHVlcyBmaWx0ZXJlZC4gQSBjb250YWluZXIga2VlcHMgYWxsIG9mIGl0cyBlbnRyaWVzIC1cclxuICogb25seSB0aGUgdmFsdWVzIGluc2lkZSBnZXQgZmlsdGVyZWQuIFRoZSBrZXlzIG9mIGEgTWFwIHN0YXkgdW50b3VjaGVkLCByZXBsYWNpbmcgdGhlbSB3b3VsZCBicmVha1xyXG4gKiBldmVyeSBsb29rdXAgYWdhaW5zdCB0aGUgcmVzdWx0LlxyXG4gKlxyXG4gKiBAcHJpdmF0ZVxyXG4gKiBAcGFyYW0ge0FycmF5fFNldHxNYXB9IHZhbHVlXHJcbiAqIEBwYXJhbSB7UHJvcGVydHlGaWx0ZXJ9IHByb3BGaWx0ZXJcclxuICogQHBhcmFtIHtib29sZWFufSBkZWVwXHJcbiAqIEBwYXJhbSB7V2Vha01hcH0gY29waWVzIG1hcHMgYW4gb3JpZ2luYWwgb250byBpdHMgZmlsdGVyZWQgY29weVxyXG4gKiBAcmV0dXJucyB7QXJyYXl8U2V0fE1hcH1cclxuICovXHJcbmNvbnN0IGZpbHRlckNvbnRhaW5lciA9ICh2YWx1ZSwgcHJvcEZpbHRlciwgZGVlcCwgY29waWVzKSA9PiB7XHJcblx0aWYgKHZhbHVlIGluc3RhbmNlb2YgQXJyYXkpIHtcclxuXHRcdGNvbnN0IGNvcHkgPSBbXTtcclxuXHRcdGNvcGllcy5zZXQodmFsdWUsIGNvcHkpO1xyXG5cdFx0Zm9yIChjb25zdCBlbnRyeSBvZiB2YWx1ZSkgY29weS5wdXNoKGZpbHRlclZhbHVlKGVudHJ5LCBwcm9wRmlsdGVyLCBkZWVwLCBjb3BpZXMpKTtcclxuXHJcblx0XHRyZXR1cm4gY29weTtcclxuXHR9XHJcblxyXG5cdGlmICh2YWx1ZSBpbnN0YW5jZW9mIFNldCkge1xyXG5cdFx0Y29uc3QgY29weSA9IG5ldyBTZXQoKTtcclxuXHRcdGNvcGllcy5zZXQodmFsdWUsIGNvcHkpO1xyXG5cdFx0Zm9yIChjb25zdCBlbnRyeSBvZiB2YWx1ZSkgY29weS5hZGQoZmlsdGVyVmFsdWUoZW50cnksIHByb3BGaWx0ZXIsIGRlZXAsIGNvcGllcykpO1xyXG5cclxuXHRcdHJldHVybiBjb3B5O1xyXG5cdH1cclxuXHJcblx0Y29uc3QgY29weSA9IG5ldyBNYXAoKTtcclxuXHRjb3BpZXMuc2V0KHZhbHVlLCBjb3B5KTtcclxuXHRmb3IgKGNvbnN0IFtrZXksIGVudHJ5XSBvZiB2YWx1ZSkgY29weS5zZXQoa2V5LCBmaWx0ZXJWYWx1ZShlbnRyeSwgcHJvcEZpbHRlciwgZGVlcCwgY29waWVzKSk7XHJcblxyXG5cdHJldHVybiBjb3B5O1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIEZpbHRlcnMgYSBzaW5nbGUgdmFsdWUsIGRpc3BhdGNoaW5nIG9uIHdoYXQgaXQgaXMuXHJcbiAqXHJcbiAqIEBwcml2YXRlXHJcbiAqIEBwYXJhbSB7Kn0gdmFsdWVcclxuICogQHBhcmFtIHtQcm9wZXJ0eUZpbHRlcn0gcHJvcEZpbHRlclxyXG4gKiBAcGFyYW0ge2Jvb2xlYW59IGRlZXBcclxuICogQHBhcmFtIHtXZWFrTWFwfSBjb3BpZXMgbWFwcyBhbiBvcmlnaW5hbCBvbnRvIGl0cyBmaWx0ZXJlZCBjb3B5XHJcbiAqIEByZXR1cm5zIHsqfSB0aGUgZmlsdGVyZWQgdmFsdWUsIG9yIHRoZSB2YWx1ZSBpdHNlbGYgd2hlbiB0aGVyZSBpcyBub3RoaW5nIHRvIGZpbHRlclxyXG4gKi9cclxuY29uc3QgZmlsdGVyVmFsdWUgPSAodmFsdWUsIHByb3BGaWx0ZXIsIGRlZXAsIGNvcGllcykgPT4ge1xyXG5cdGlmICh2YWx1ZSA9PT0gbnVsbCB8fCB0eXBlb2YgdmFsdWUgIT09IFwib2JqZWN0XCIpIHJldHVybiB2YWx1ZTtcclxuXHRpZiAodmFsdWUgaW5zdGFuY2VvZiBEYXRlIHx8IHZhbHVlIGluc3RhbmNlb2YgUmVnRXhwKSByZXR1cm4gdmFsdWU7IC8vIGNhcnJ5IG5vIHByb3BlcnRpZXMgdG8gZmlsdGVyXHJcblxyXG5cdC8vIGEgdmFsdWUgc2VlbiBiZWZvcmUgY2xvc2VzIGEgY3ljbGUgLSBpdHMgY29weSBzdGFuZHMgaW4sIHNvIG5vdGhpbmcgdW5maWx0ZXJlZCBsZWFrcyBiYWNrIGluXHJcblx0aWYgKGNvcGllcy5oYXModmFsdWUpKSByZXR1cm4gY29waWVzLmdldCh2YWx1ZSk7XHJcblxyXG5cdGlmICh2YWx1ZSBpbnN0YW5jZW9mIEFycmF5IHx8IHZhbHVlIGluc3RhbmNlb2YgU2V0IHx8IHZhbHVlIGluc3RhbmNlb2YgTWFwKSByZXR1cm4gZmlsdGVyQ29udGFpbmVyKHZhbHVlLCBwcm9wRmlsdGVyLCBkZWVwLCBjb3BpZXMpO1xyXG5cclxuXHRyZXR1cm4gZmlsdGVyT2JqZWN0KHZhbHVlLCBwcm9wRmlsdGVyLCBkZWVwLCBjb3BpZXMpO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIEJ1aWxkcyB0aGUgZmlsdGVyZWQgY29weSBvZiBhbiBvYmplY3QuIFRoZSBjb3B5IGlzIHJlZ2lzdGVyZWQgYmVmb3JlIGl0IGlzIGZpbGxlZCwgc28gYSBjeWNsZVxyXG4gKiBydW5uaW5nIGJhY2sgaW50byBpdCByZXNvbHZlcyB0byB0aGUgY29weSBpbnN0ZWFkIG9mIHRoZSBvcmlnaW5hbC5cclxuICpcclxuICogQHByaXZhdGVcclxuICogQHBhcmFtIHtvYmplY3R9IGRhdGFcclxuICogQHBhcmFtIHtQcm9wZXJ0eUZpbHRlcn0gcHJvcEZpbHRlclxyXG4gKiBAcGFyYW0ge2Jvb2xlYW59IGRlZXBcclxuICogQHBhcmFtIHtXZWFrTWFwfSBjb3BpZXMgbWFwcyBhbiBvcmlnaW5hbCBvbnRvIGl0cyBmaWx0ZXJlZCBjb3B5XHJcbiAqIEByZXR1cm5zIHtvYmplY3R9XHJcbiAqL1xyXG5jb25zdCBmaWx0ZXJPYmplY3QgPSAoZGF0YSwgcHJvcEZpbHRlciwgZGVlcCwgY29waWVzKSA9PiB7XHJcblx0Y29uc3QgcmVzdWx0ID0ge307XHJcblx0Y29waWVzLnNldChkYXRhLCByZXN1bHQpO1xyXG5cclxuXHRmb3IgKGNvbnN0IG5hbWUgaW4gZGF0YSkge1xyXG5cdFx0Y29uc3QgdmFsdWUgPSBkYXRhW25hbWVdO1xyXG5cdFx0aWYgKHByb3BGaWx0ZXIobmFtZSwgdmFsdWUsIGRhdGEpKXtcclxuXHRcdFx0cmVzdWx0W25hbWVdID0gZGVlcCA/IGZpbHRlclZhbHVlKHZhbHVlLCBwcm9wRmlsdGVyLCBkZWVwLCBjb3BpZXMpIDogdmFsdWU7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRyZXR1cm4gcmVzdWx0O1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIEJ1aWxkcyBhIG5ldyBvYmplY3QgaG9sZGluZyB0aGUgcHJvcGVydGllcyBhIGZpbHRlciBhY2NlcHRzLlxyXG4gKlxyXG4gKiBUaGUgZmlsdGVyIGlzIGNhbGxlZCBmb3IgZXZlcnkgZW51bWVyYWJsZSBwcm9wZXJ0eSwgaW5oZXJpdGVkIG9uZXMgaW5jbHVkZWQgLSBmaWx0ZXJpbmcgYSB3aW5kb3dcclxuICogcmVsaWVzIG9uIHRoYXQsIHNpbmNlIG1vc3Qgb2YgaXRzIG1lbWJlcnMgc2l0IG9uIHRoZSBwcm90b3R5cGUuXHJcbiAqXHJcbiAqIFdpdGggZGVlcCB0aGUgZmlsdGVyIGlzIGFwcGxpZWQgdG8gc3ViIG9iamVjdHMgYXMgd2VsbC4gQXJyYXksIFNldCBhbmQgTWFwIGFyZSByZWJ1aWx0IHdpdGggdGhlaXJcclxuICogdmFsdWVzIGZpbHRlcmVkLCBrZWVwaW5nIGFsbCBvZiB0aGVpciBlbnRyaWVzIGFuZCwgZm9yIGEgTWFwLCBpdHMga2V5cy4gRGF0ZSBhbmQgUmVnRXhwIGFyZSB0YWtlblxyXG4gKiBvdmVyIGFzIHRoZXkgYXJlLiBBIGN5Y2xpYyByZWZlcmVuY2UgcmVzb2x2ZXMgdG8gdGhlIGZpbHRlcmVkIGNvcHksIHNvIHRoZSByZXN1bHQgbmV2ZXIgY2FycmllcyBhXHJcbiAqIHJlZmVyZW5jZSBpbnRvIHRoZSB1bnRvdWNoZWQgb3JpZ2luYWwuXHJcbiAqXHJcbiAqIFdpdGhvdXQgZGVlcCB0aGUgYWNjZXB0ZWQgdmFsdWVzIGFyZSB0YWtlbiBvdmVyIGFzIHRoZXkgYXJlLCBzdWIgb2JqZWN0cyBieSByZWZlcmVuY2UuXHJcbiAqXHJcbiAqIEBwYXJhbSB7b2JqZWN0fSBkYXRhIHRoZSBvYmplY3QgdG8gYmUgZmlsdGVyZWRcclxuICogQHBhcmFtIHtQcm9wZXJ0eUZpbHRlcn0gcHJvcEZpbHRlciBkZWNpZGVzIHBlciBwcm9wZXJ0eSwgc2VlIHtAbGluayBidWlsZFByb3BlcnR5RmlsdGVyfVxyXG4gKiBAcGFyYW0ge29iamVjdH0gW29wdGlvbnNdXHJcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdGlvbnMuZGVlcD1mYWxzZV0gZmlsdGVyIHN1YiBvYmplY3RzIHRvb1xyXG4gKiBAcmV0dXJucyB7b2JqZWN0fSBhIG5ldyBvYmplY3RcclxuICpcclxuICogQGV4YW1wbGVcclxuICogY29uc3QgZGVueSA9IGJ1aWxkUHJvcGVydHlGaWx0ZXIoe25hbWVzIDogW1wic2VjcmV0XCJdLCBhbGxvd2VkIDogZmFsc2V9KTtcclxuICpcclxuICogZmlsdGVyKHtzZWNyZXQgOiBcInhcIiwgYSA6IDF9LCBkZW55KTsgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHthIDogMX1cclxuICogZmlsdGVyKHtzdWIgOiB7c2VjcmV0IDogXCJ4XCIsIGEgOiAxfX0sIGRlbnksIHtkZWVwIDogdHJ1ZX0pOyAgICAgIC8vIHtzdWIgOiB7YSA6IDF9fVxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGZpbHRlciA9IChkYXRhLCBwcm9wRmlsdGVyLCB7IGRlZXAgPSBmYWxzZSB9ID0ge30pID0+IGZpbHRlck9iamVjdChkYXRhLCBwcm9wRmlsdGVyLCBkZWVwLCBuZXcgV2Vha01hcCgpKTtcclxuXHJcbi8qKlxyXG4gKiBEZWZpbmVzIGEgY29uc3RhbnQsIG5vbiBlbnVtZXJhYmxlIHByb3BlcnR5LlxyXG4gKlxyXG4gKiBAcGFyYW0ge29iamVjdH0gbyB0aGUgb2JqZWN0IHRvIGRlZmluZSB0aGUgcHJvcGVydHkgb25cclxuICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgbmFtZSBvZiB0aGUgcHJvcGVydHlcclxuICogQHBhcmFtIHsqfSB2YWx1ZSB0aGUgdmFsdWUsIG5laXRoZXIgd3JpdGFibGUgbm9yIGNvbmZpZ3VyYWJsZVxyXG4gKiBAcmV0dXJucyB7dm9pZH1cclxuICovXHJcbmV4cG9ydCBjb25zdCBkZWZWYWx1ZSA9IChvLCBuYW1lLCB2YWx1ZSkgPT4ge1xyXG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBuYW1lLCB7XHJcblx0XHR2YWx1ZSxcclxuXHRcdHdyaXRhYmxlOiBmYWxzZSxcclxuXHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXHJcblx0XHRlbnVtZXJhYmxlOiBmYWxzZSxcclxuXHR9KTtcclxufTtcclxuXHJcbi8qKlxyXG4gKiBEZWZpbmVzIGEgcmVhZCBvbmx5LCBub24gZW51bWVyYWJsZSBwcm9wZXJ0eSBiYWNrZWQgYnkgYSBnZXR0ZXIuXHJcbiAqXHJcbiAqIEBwYXJhbSB7b2JqZWN0fSBvIHRoZSBvYmplY3QgdG8gZGVmaW5lIHRoZSBwcm9wZXJ0eSBvblxyXG4gKiBAcGFyYW0ge3N0cmluZ30gbmFtZSBuYW1lIG9mIHRoZSBwcm9wZXJ0eVxyXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBnZXQgcmV0dXJucyB0aGUgdmFsdWUgb2YgdGhlIHByb3BlcnR5XHJcbiAqIEByZXR1cm5zIHt2b2lkfVxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGRlZkdldCA9IChvLCBuYW1lLCBnZXQpID0+IHtcclxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkobywgbmFtZSwge1xyXG5cdFx0Z2V0LFxyXG5cdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcclxuXHRcdGVudW1lcmFibGU6IGZhbHNlLFxyXG5cdH0pO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIERlZmluZXMgYSBub24gZW51bWVyYWJsZSBwcm9wZXJ0eSBiYWNrZWQgYnkgYSBnZXR0ZXIgYW5kIGEgc2V0dGVyLlxyXG4gKlxyXG4gKiBAcGFyYW0ge29iamVjdH0gbyB0aGUgb2JqZWN0IHRvIGRlZmluZSB0aGUgcHJvcGVydHkgb25cclxuICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgbmFtZSBvZiB0aGUgcHJvcGVydHlcclxuICogQHBhcmFtIHtGdW5jdGlvbn0gZ2V0IHJldHVybnMgdGhlIHZhbHVlIG9mIHRoZSBwcm9wZXJ0eVxyXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBzZXQgdGFrZXMgdGhlIG5ldyB2YWx1ZSBvZiB0aGUgcHJvcGVydHlcclxuICogQHJldHVybnMge3ZvaWR9XHJcbiAqL1xyXG5leHBvcnQgY29uc3QgZGVmR2V0U2V0ID0gKG8sIG5hbWUsIGdldCwgc2V0KSA9PiB7XHJcblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIG5hbWUsIHtcclxuXHRcdGdldCxcclxuXHRcdHNldCxcclxuXHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXHJcblx0XHRlbnVtZXJhYmxlOiBmYWxzZSxcclxuXHR9KTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuXHRpc051bGxPclVuZGVmaW5lZCxcclxuXHRpc09iamVjdCxcclxuXHRpc1ByaW1pdGl2ZSxcclxuXHRlcXVhbFBvam8sXHJcblx0aXNQb2pvLFxyXG5cdGFwcGVuZCxcclxuXHRtZXJnZSxcclxuXHRmaWx0ZXIsXHJcblx0YnVpbGRQcm9wZXJ0eUZpbHRlcixcclxuXHRkZWZWYWx1ZSxcclxuXHRkZWZHZXQsXHJcblx0ZGVmR2V0U2V0LFxyXG59O1xyXG4iLCIvKipcbiAqIFR3byB3YXlzIG9mIGJ1aWxkaW5nIGEgcHJvbWlzZSB0aGF0IHNvbWV0aGluZyBvdXRzaWRlIG9mIGl0IHNldHRsZXMuXG4gKlxuICoge0BsaW5rIHRpbWVvdXRQcm9taXNlfSBydW5zIGEgZnVuY3Rpb24gb25jZSBhIHRpbWVvdXQgaGFzIHBhc3NlZCBhbmQgbGV0cyB0aGUgd2hvbGUgY2hhaW4gYmVoaW5kXG4gKiBpdCBiZSBjYW5jZWxlZC4ge0BsaW5rIGxhenlQcm9taXNlfSBoYW5kcyBvdXQgYSBwcm9taXNlIHRvZ2V0aGVyIHdpdGggaXRzIHJlc29sdmUgYW5kIHJlamVjdCwgZm9yXG4gKiB0aGUgY2FzZXMgd2hlcmUgdGhlIHNldHRsaW5nIGlzIGRyaXZlbiBmcm9tIHNvbWV3aGVyZSBlbHNlIC0gYSBmcmFtZXdvcmsgY2FsbGJhY2ssIGFuIGV2ZW50LFxuICogZm9yZWlnbiBjb2RlIC0gYW5kIHBhY2tpbmcgYWxsIG9mIHRoYXQgaW50byB0aGUgZXhlY3V0b3Igd291bGQgb25seSBibG93IHRoZSBjb2RlIHVwIG9yIGlzIG5vdFxuICogcG9zc2libGUgYXQgYWxsLlxuICpcbiAqIFRoZSB0d28gY2FycnkgZGlmZmVyZW50IHN0YXRlIG9uIHB1cnBvc2U6IGEgdGltZW91dFByb21pc2UgcmVwb3J0cyBpdHMgY2FuY2VsbGF0aW9uIHRocm91Z2ggYVxuICogcmVqZWN0aW9uIGFuZCBhbiBBYm9ydFNpZ25hbCwgYSBsYXp5UHJvbWlzZSByZXBvcnRzIGl0cyBvdXRjb21lIHRocm91Z2ggcmVzb2x2ZWQsIGVycm9yIGFuZCB2YWx1ZS5cbiAqXG4gKiBAbW9kdWxlIFByb21pc2VVdGlsc1xuICovXG5pbXBvcnQgeyBkZWZWYWx1ZSwgZGVmR2V0IH0gZnJvbSBcIi4vT2JqZWN0VXRpbHMuanNcIjtcblxuLyoqXG4gKiBUaGUgcmVhc29uIGFuIGFib3J0ZWQgb3BlcmF0aW9uIHJlamVjdHMgd2l0aC4gQSBET01FeGNlcHRpb24gbmFtZWQgQWJvcnRFcnJvciBpcyB3aGF0XG4gKiBBYm9ydENvbnRyb2xsZXIgaXRzZWxmIHVzZXMsIGFuIEVycm9yIGNhcnJ5aW5nIHRoZSBzYW1lIG5hbWUgc3RhbmRzIGluIHdoZXJlIGl0IGlzIG1pc3NpbmcuXG4gKlxuICogQHByaXZhdGVcbiAqIEByZXR1cm5zIHtFcnJvcnxET01FeGNlcHRpb259XG4gKi9cbmNvbnN0IGFib3J0RXJyb3IgPSAoKSA9PiB7XG5cdGlmICh0eXBlb2YgRE9NRXhjZXB0aW9uICE9PSBcInVuZGVmaW5lZFwiKSByZXR1cm4gbmV3IERPTUV4Y2VwdGlvbihcIlRoZSBvcGVyYXRpb24gd2FzIGFib3J0ZWQuXCIsIFwiQWJvcnRFcnJvclwiKTtcblxuXHQvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAtIGV2ZXJ5IGJyb3dzZXIgdGhlIHN1aXRlIHJ1bnMgaW4gYnJpbmdzIERPTUV4Y2VwdGlvbiwgc28gdGhpcyBsaW5lIG9ubHlcblx0ICAgc3RhbmRzIGluIGZvciBlbnZpcm9ubWVudHMgdGhlIHRlc3QgcnVuIGNhbm5vdCByZWFjaCAqL1xuXHRyZXR1cm4gT2JqZWN0LmFzc2lnbihuZXcgRXJyb3IoXCJUaGUgb3BlcmF0aW9uIHdhcyBhYm9ydGVkLlwiKSwgeyBuYW1lOiBcIkFib3J0RXJyb3JcIiB9KTtcbn07XG5cbi8qKlxuICogVGhlIHJlYXNvbiBhIHNpZ25hbCBjYXJyaWVzLiBhYm9ydCgpIGZpbGxzIGl0IGluIG9uIGl0cyBvd24sIG9sZGVyIGltcGxlbWVudGF0aW9ucyBrbm93IHRoZVxuICogbWV0aG9kIGJ1dCBub3QgdGhlIHByb3BlcnR5LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0Fib3J0U2lnbmFsfSBzaWduYWxcbiAqIEByZXR1cm5zIHsqfVxuICovXG5jb25zdCBhYm9ydFJlYXNvbiA9IChzaWduYWwpID0+ICh0eXBlb2Ygc2lnbmFsLnJlYXNvbiA9PT0gXCJ1bmRlZmluZWRcIiA/IGFib3J0RXJyb3IoKSA6IHNpZ25hbC5yZWFzb24pO1xuXG4vKipcbiAqIEFkZHMgdGhlIGNhbmNlbCBhcGkgdG8gYSBwcm9taXNlIGFuZCB0byBldmVyeSBwcm9taXNlIGRlcml2ZWQgZnJvbSBpdC4gQWxsIG9mIHRoZW0gc2hhcmUgb25lXG4gKiBjb250cm9sbGVyLCBzbyBhIGNoYWluIGNhbiBiZSBjYW5jZWxlZCBmcm9tIGFueSBvZiBpdHMgbGlua3MuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7UHJvbWlzZX0gcHJvbWlzZVxuICogQHBhcmFtIHtBYm9ydENvbnRyb2xsZXJ9IGNvbnRyb2xsZXJcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbmNlbFxuICogQHJldHVybnMge1Byb21pc2V9IHRoZSBwcm9taXNlIGl0c2VsZlxuICovXG5jb25zdCBjYW5jZWxhYmxlID0gKHByb21pc2UsIGNvbnRyb2xsZXIsIGNhbmNlbCkgPT4ge1xuXHRkZWZWYWx1ZShwcm9taXNlLCBcImNhbmNlbFwiLCBjYW5jZWwpO1xuXHRkZWZHZXQocHJvbWlzZSwgXCJzaWduYWxcIiwgKCkgPT4gY29udHJvbGxlci5zaWduYWwpO1xuXHRkZWZHZXQocHJvbWlzZSwgXCJjYW5jZWxlZFwiLCAoKSA9PiBjb250cm9sbGVyLnNpZ25hbC5hYm9ydGVkKTtcblxuXHQvLyB0aGVuIGhhcyB0byBoYW5kIGJvdGggaGFuZGxlcnMgdGhyb3VnaCBhbmQgcmV0dXJuIHRoZSBkZXJpdmVkIHByb21pc2UgLSBjYXRjaCwgZmluYWxseSBhbmRcblx0Ly8gYXdhaXQgYXJlIGRlZmluZWQgaW4gdGVybXMgb2YgdGhlbiwgc28gYW55dGhpbmcgbGVzcyBzaWxlbnRseSBicmVha3MgdGhvc2UgYXMgd2VsbFxuXHRjb25zdCB0aGVuID0gcHJvbWlzZS50aGVuO1xuXHRkZWZWYWx1ZShwcm9taXNlLCBcInRoZW5cIiwgKG9uRnVsZmlsbGVkLCBvblJlamVjdGVkKSA9PiBjYW5jZWxhYmxlKHRoZW4uY2FsbChwcm9taXNlLCBvbkZ1bGZpbGxlZCwgb25SZWplY3RlZCksIGNvbnRyb2xsZXIsIGNhbmNlbCkpO1xuXG5cdHJldHVybiBwcm9taXNlO1xufTtcblxuLyoqXG4gKiBDYWxscyBhIGZ1bmN0aW9uIGFmdGVyIGEgdGltZW91dCBhbmQgc2V0dGxlcyB3aXRoIHdoYXRldmVyIGl0IHByb2R1Y2VzLlxuICpcbiAqIFRoZSBmdW5jdGlvbiBpcyBjYWxsZWQgd2l0aCByZXNvbHZlLCByZWplY3QgYW5kIHRoZSBBYm9ydFNpZ25hbCBvZiB0aGUgcHJvbWlzZSwgc28gd29yayBzdGFydGVkXG4gKiBpbnNpZGUgaXQgY2FuIGJlIGFib3J0ZWQgYWxvbmcgd2l0aCBpdC4gQW4gZXhjZXB0aW9uIHRocm93biBieSB0aGUgZnVuY3Rpb24gcmVqZWN0cyB0aGUgcHJvbWlzZVxuICogaW5zdGVhZCBvZiBlc2NhcGluZyBpbnRvIHRoZSB0aW1lci5cbiAqXG4gKiBUaGUgcHJvbWlzZSBicmluZ3MgaXRzIG93biBBYm9ydENvbnRyb2xsZXIuIGNhbmNlbCgpIGNsZWFycyBhIHBlbmRpbmcgdGltZW91dCBhbmQgcmVqZWN0cyB3aXRoIGFuXG4gKiBBYm9ydEVycm9yLCB3aGljaCB0cmF2ZWxzIGRvd24gdGhlIHdob2xlIGNoYWluIC0gbm8gdGhlbiBoYW5kbGVyIGJlaGluZCBpdCBydW5zLiBjYW5jZWwoKSBzaXRzIG9uXG4gKiBldmVyeSBwcm9taXNlIGRlcml2ZWQgZnJvbSBpdCBhbmQgZG9lcyBub3RoaW5nIG9uY2UgdGhlIHByb21pc2UgaGFzIHNldHRsZWQuXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm4gY2FsbGVkIHdpdGggKHJlc29sdmUsIHJlamVjdCwgc2lnbmFsKSBvbmNlIHRoZSB0aW1lb3V0IGhhcyBwYXNzZWRcbiAqIEBwYXJhbSB7bnVtYmVyfSBtcyB0aGUgdGltZW91dCBpbiBtaWxsaXNlY29uZHNcbiAqIEByZXR1cm5zIHtQcm9taXNlfSBhIHByb21pc2UgY2FycnlpbmcgY2FuY2VsKCksIHNpZ25hbCBhbmQgY2FuY2VsZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogY29uc3QgcHJvbWlzZSA9IHRpbWVvdXRQcm9taXNlKChyZXNvbHZlKSA9PiByZXNvbHZlKFwiZG9uZVwiKSwgMTAwMCk7XG4gKiBhd2FpdCBwcm9taXNlOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBcImRvbmVcIlxuICpcbiAqIEBleGFtcGxlXG4gKiBjb25zdCBwcm9taXNlID0gdGltZW91dFByb21pc2UoKHJlc29sdmUpID0+IHJlc29sdmUoXCJkb25lXCIpLCAxMDAwKTtcbiAqIHByb21pc2UudGhlbigoKSA9PiBjb25zb2xlLmxvZyhcIm5ldmVyIHJ1bnNcIikpO1xuICogcHJvbWlzZS5jYW5jZWwoKTtcbiAqIGF3YWl0IHByb21pc2U7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRocm93cyBBYm9ydEVycm9yXG4gKi9cbmV4cG9ydCBjb25zdCB0aW1lb3V0UHJvbWlzZSA9IChmbiwgbXMpID0+IHtcblx0Y29uc3QgY29udHJvbGxlciA9IG5ldyBBYm9ydENvbnRyb2xsZXIoKTtcblx0Y29uc3Qgc2lnbmFsID0gY29udHJvbGxlci5zaWduYWw7XG5cdGxldCB0aW1lb3V0ID0gbnVsbDtcblx0bGV0IHNldHRsZWQgPSBmYWxzZTtcblxuXHRjb25zdCBwcm9taXNlID0gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuXHRcdC8vIHRoZSB0aW1lb3V0IGlzIGNsZWFyZWQgb24gZXZlcnkgd2F5IG91dCwgYSBjYW5jZWxlZCBwcm9taXNlIG11c3Qgbm90IGtlZXAgdGhlIHRpbWVyIGFsaXZlXG5cdFx0Y29uc3Qgc2V0dGxlID0gKGhhbmRsZXIpID0+ICh2YWx1ZSkgPT4ge1xuXHRcdFx0aWYgKHNldHRsZWQpIHJldHVybjtcblxuXHRcdFx0c2V0dGxlZCA9IHRydWU7XG5cdFx0XHRpZiAodGltZW91dCAhPT0gbnVsbCkge1xuXHRcdFx0XHRjbGVhclRpbWVvdXQodGltZW91dCk7XG5cdFx0XHRcdHRpbWVvdXQgPSBudWxsO1xuXHRcdFx0fVxuXHRcdFx0aGFuZGxlcih2YWx1ZSk7XG5cdFx0fTtcblxuXHRcdGNvbnN0IG9uUmVzb2x2ZSA9IHNldHRsZShyZXNvbHZlKTtcblx0XHRjb25zdCBvblJlamVjdCA9IHNldHRsZShyZWplY3QpO1xuXG5cdFx0c2lnbmFsLmFkZEV2ZW50TGlzdGVuZXIoXCJhYm9ydFwiLCAoKSA9PiBvblJlamVjdChhYm9ydFJlYXNvbihzaWduYWwpKSwgeyBvbmNlOiB0cnVlIH0pO1xuXG5cdFx0dGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdFx0dGltZW91dCA9IG51bGw7XG5cdFx0XHR0cnkge1xuXHRcdFx0XHRmbihvblJlc29sdmUsIG9uUmVqZWN0LCBzaWduYWwpO1xuXHRcdFx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRcdFx0b25SZWplY3QoZXJyb3IpO1xuXHRcdFx0fVxuXHRcdH0sIG1zKTtcblx0fSk7XG5cblx0cmV0dXJuIGNhbmNlbGFibGUocHJvbWlzZSwgY29udHJvbGxlciwgKHJlYXNvbikgPT4ge1xuXHRcdGlmIChzZXR0bGVkIHx8IHNpZ25hbC5hYm9ydGVkKSByZXR1cm47XG5cblx0XHRjb250cm9sbGVyLmFib3J0KHR5cGVvZiByZWFzb24gPT09IFwidW5kZWZpbmVkXCIgPyBhYm9ydEVycm9yKCkgOiByZWFzb24pO1xuXHR9KTtcbn07XG5cbi8qKlxuICogQnVpbGRzIGEgcHJvbWlzZSB0b2dldGhlciB3aXRoIHRoZSB0d28gZnVuY3Rpb25zIHNldHRsaW5nIGl0LlxuICpcbiAqIFRoZSBwb2ludCBpcyB0byBoYXZlIHRoZSBwcm9taXNlIGFuZCBpdHMgcmVzb2x2ZSBhbmQgcmVqZWN0IGFwYXJ0IGZyb20gZWFjaCBvdGhlcjogd2hhdGV2ZXJcbiAqIHNldHRsZXMgaXQgZG9lcyBub3QgaGF2ZSB0byBzaXQgaW5zaWRlIHRoZSBleGVjdXRvci4gVGhhdCBrZWVwcyBhIHByb21pc2UgdXNhYmxlIHdoZXJlIHRoZVxuICogc2V0dGxpbmcgaXMgZHJpdmVuIGJ5IGEgZnJhbWV3b3JrIGNhbGxiYWNrLCBhbiBldmVudCBvciBhbnkgb3RoZXIgZm9yZWlnbiBjb2RlIHRoZSBleGVjdXRvciBoYXMgbm9cbiAqIHdheSBvZiByZWFjaGluZy5cbiAqXG4gKiBUaGUgcHJvbWlzZSBjYXJyaWVzIHRocmVlIHJlYWQgb25seSBwcm9wZXJ0aWVzOlxuICpcbiAqIC0gcmVzb2x2ZWQgc2F5cyB0aGUgcHJvbWlzZSBoYXMgYmVlbiBzZXR0bGVkLiBJdCBzYXlzIG5vdGhpbmcgYWJvdXQgdGhlIG91dGNvbWUgLSBpdCBpcyB0cnVlIGZvciBhXG4gKiAgIGZhaWx1cmUganVzdCBhcyB3ZWxsLlxuICogLSBlcnJvciB0ZWxscyB0aGUgdHdvIGFwYXJ0LlxuICogLSB2YWx1ZSBob2xkcyB3aGF0ZXZlciB0aGUgcHJvbWlzZSB3YXMgc2V0dGxlZCB3aXRoOiB0aGUgcmVzdWx0IGFmdGVyIGEgcmVzb2x2ZSwgdGhlIHJlYXNvbiBhZnRlclxuICogICBhIHJlamVjdC4gZXJyb3IgaXMgd2hhdCBkZWNpZGVzIGhvdyB0byByZWFkIGl0LlxuICpcbiAqIEFuIEVycm9yIGFsd2F5cyBsZWFkcyB0byBhIHJlamVjdGlvbiwgaW4gYm90aCBkaXJlY3Rpb25zIC0gaGFuZGluZyBvbmUgdG8gcmVzb2x2ZSByZWplY3RzIHRoZVxuICogcHJvbWlzZSBqdXN0IGxpa2UgcmVqZWN0IHdvdWxkLiBBIHJlYXNvbiB0aGF0IGlzIG5vIEVycm9yIGlzIHdyYXBwZWQgaW50byBvbmUsIGFuZCBhIHJlamVjdFxuICogd2l0aG91dCBhIHJlYXNvbiBnZXRzIGFuIEVycm9yIG9mIGl0cyBvd24sIHNvIHRoZXJlIGlzIGFsd2F5cyBhIG1lc3NhZ2UgdG8gcmVhZC5cbiAqXG4gKiBCb3RoIGZ1bmN0aW9ucyBzZXR0bGUgdGhlIHByb21pc2Ugb25jZS4gQSBzZWNvbmQgY2FsbCB0aHJvd3MgaW5zdGVhZCBvZiBzZXR0bGluZyBhZ2Fpbiwgc28gdGhlXG4gKiB0aHJlZSBwcm9wZXJ0aWVzIGNhbiBuZXZlciBlbmQgdXAgZGlzYWdyZWVpbmcgd2l0aCB0aGUgcHJvbWlzZS5cbiAqXG4gKiBAcmV0dXJucyB7UHJvbWlzZX0gYSBwcm9taXNlIGNhcnJ5aW5nIHJlc29sdmUoKSwgcmVqZWN0KCksIHZhbHVlLCBlcnJvciBhbmQgcmVzb2x2ZWRcbiAqIEB0aHJvd3Mge0Vycm9yfSBmcm9tIHJlc29sdmUgb3IgcmVqZWN0IHdoZW4gdGhlIHByb21pc2UgaGFzIGFscmVhZHkgYmVlbiBzZXR0bGVkXG4gKlxuICogQGV4YW1wbGVcbiAqIGNvbnN0IHByb21pc2UgPSBsYXp5UHJvbWlzZSgpO1xuICogZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCAoKSA9PiBwcm9taXNlLnJlc29sdmUoZWxlbWVudCksIHtvbmNlIDogdHJ1ZX0pO1xuICogYXdhaXQgcHJvbWlzZTtcbiAqXG4gKiBAZXhhbXBsZVxuICogY29uc3QgcHJvbWlzZSA9IGxhenlQcm9taXNlKCk7XG4gKiBwcm9taXNlLnJlamVjdChcIm5vIGNvbm5lY3Rpb25cIik7ICAgLy8gcmVqZWN0cyB3aXRoIGFuIEVycm9yIGNhcnJ5aW5nIHRoYXQgbWVzc2FnZVxuICogcHJvbWlzZS5yZXNvbHZlZDsgICAgICAgICAgICAgICAgICAvLyB0cnVlIC0gc2V0dGxlZCwgbm90IHN1Y2Nlc3NmdWxcbiAqIHByb21pc2UuZXJyb3I7ICAgICAgICAgICAgICAgICAgICAgLy8gdHJ1ZVxuICogcHJvbWlzZS52YWx1ZTsgICAgICAgICAgICAgICAgICAgICAvLyBcIm5vIGNvbm5lY3Rpb25cIlxuICovXG5leHBvcnQgY29uc3QgbGF6eVByb21pc2UgPSAoKSA9PiB7XG5cdGxldCBwcm9taXNlUmVzb2x2ZSA9IG51bGw7XG5cdGxldCBwcm9taXNlUmVqZWN0ID0gbnVsbDtcblx0bGV0IHJlc29sdmVkID0gZmFsc2U7XG5cdGxldCBlcnJvciA9IGZhbHNlO1xuXHRsZXQgdmFsdWUgPSB1bmRlZmluZWQ7XG5cblx0Y29uc3QgcHJvbWlzZSA9IG5ldyBQcm9taXNlKChyLCBlKSA9PiB7XG5cdFx0cHJvbWlzZVJlc29sdmUgPSByO1xuXHRcdHByb21pc2VSZWplY3QgPSAoYW5FcnJvcikgPT4gZShhbkVycm9yIGluc3RhbmNlb2YgRXJyb3IgPyBhbkVycm9yIDogbmV3IEVycm9yKGFuRXJyb3IgPT0gbnVsbCA/IFwiUHJvbWlzZSByZWplY3RlZCB3aXRoIG5vIHJlYXNvblwiIDogYW5FcnJvcikpO1xuXHR9KTtcblxuXHRkZWZWYWx1ZShwcm9taXNlLCBcInJlc29sdmVcIiwgKHJlc3VsdCkgPT4ge1xuXHRcdGlmIChyZXNvbHZlZCkgdGhyb3cgbmV3IEVycm9yKFwiUHJvbWlzZSBhbHJlYWR5IHJlc29sdmVkIVwiKTtcblx0XHRyZXNvbHZlZCA9IHRydWU7XG5cdFx0dmFsdWUgPSByZXN1bHQ7XG5cdFx0aWYgKHZhbHVlIGluc3RhbmNlb2YgRXJyb3IpIHtcblx0XHRcdGVycm9yID0gdHJ1ZTtcblx0XHRcdHByb21pc2VSZWplY3QodmFsdWUpO1xuXHRcdH0gZWxzZSBwcm9taXNlUmVzb2x2ZSh2YWx1ZSk7XG5cdH0pO1xuXHRkZWZWYWx1ZShwcm9taXNlLCBcInJlamVjdFwiLCAocmVzdWx0KSA9PiB7XG5cdFx0aWYgKHJlc29sdmVkKSB0aHJvdyBuZXcgRXJyb3IoXCJQcm9taXNlIGFscmVhZHkgcmVzb2x2ZWQhXCIpO1xuXHRcdHJlc29sdmVkID0gdHJ1ZTtcblx0XHR2YWx1ZSA9IHJlc3VsdDtcblx0XHRlcnJvciA9IHRydWU7XG5cdFx0cHJvbWlzZVJlamVjdChyZXN1bHQpO1xuXHR9KTtcblxuXHRkZWZHZXQocHJvbWlzZSwgXCJ2YWx1ZVwiLCAoKSA9PiB2YWx1ZSk7XG5cdGRlZkdldChwcm9taXNlLCBcImVycm9yXCIsICgpID0+IGVycm9yKTtcblx0ZGVmR2V0KHByb21pc2UsIFwicmVzb2x2ZWRcIiwgKCkgPT4gcmVzb2x2ZWQpO1xuXG5cdHJldHVybiBwcm9taXNlO1xufTtcbmV4cG9ydCBkZWZhdWx0IHtcblx0bGF6eVByb21pc2UsXG5cdHRpbWVvdXRQcm9taXNlLFxufTtcbiIsIi8qKlxyXG4gKiBBZGRzIGhhc2hjb2RlKCkgdG8gZXZlcnkgc3RyaW5nIC0gc2VlIHRoZSBub3RlIG9uIHBhdGNoaW5nIHByb3RvdHlwZXMgaW4gLi9pbmRleC5qcy5cclxuICpcclxuICogVGhlIGhhc2ggaXMgdGhlIG9uZSBqYXZhIHVzZXMgZm9yIGl0cyBzdHJpbmdzOiBoID0gMzEgKiBoICsgY2hhciwga2VwdCBpbnNpZGUgMzIgc2lnbmVkIGJpdHMuIEl0XHJcbiAqIGlzIG1lYW50IGZvciBidWNrZXRpbmcgYW5kIGZvciB0ZWxsaW5nIHRleHRzIGFwYXJ0IGNoZWFwbHksIG5vdCBmb3IgYW55dGhpbmcgd2hlcmUgY29sbGlzaW9uc1xyXG4gKiBtYXR0ZXIgLSB0d28gZGlmZmVyZW50IHRleHRzIGNhbiBzaGFyZSBhIGhhc2gsIGFuZCBpdCBpcyBubyBjcnlwdG9ncmFwaGljIGRpZ2VzdC5cclxuICpcclxuICogT25seSBkZWZpbmVkIHdoZW4gbm90aGluZyBlbHNlIGNhcnJpZXMgdGhhdCBuYW1lIGFscmVhZHkuXHJcbiAqXHJcbiAqIEByZXR1cm5zIHtudW1iZXJ9IGEgMzIgYml0IHNpZ25lZCBpbnRlZ2VyLCAwIGZvciB0aGUgZW1wdHkgc3RyaW5nXHJcbiAqXHJcbiAqIEBleGFtcGxlXHJcbiAqIFwidGVzdFwiLmhhc2hjb2RlKCk7ICAgLy8gMzU1NjQ5OFxyXG4gKi9cclxuaWYgKCFTdHJpbmcucHJvdG90eXBlLmhhc2hjb2RlKVxyXG5cdFN0cmluZy5wcm90b3R5cGUuaGFzaGNvZGUgPSBmdW5jdGlvbigpIHtcclxuXHRcdGlmICh0aGlzLmxlbmd0aCA9PT0gMClcclxuXHRcdFx0cmV0dXJuIDA7XHJcblx0XHRcclxuXHRcdGxldCBoYXNoID0gMDtcclxuXHRcdGNvbnN0IGxlbmd0aCA9IHRoaXMubGVuZ3RoO1xyXG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xyXG5cdFx0XHRjb25zdCBjID0gdGhpcy5jaGFyQ29kZUF0KGkpO1xyXG5cdFx0XHRoYXNoID0gKChoYXNoIDw8IDUpIC0gaGFzaCkgKyBjO1xyXG5cdFx0XHRoYXNoIHw9IDA7IC8vIENvbnZlcnQgdG8gMzJiaXQgaW50ZWdlclxyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIGhhc2g7XHJcblx0fTsiLCJpbXBvcnQgRXhwcmVzc2lvblJlc29sdmVyIGZyb20gXCIuL3NyYy9FeHByZXNzaW9uUmVzb2x2ZXIuanNcIjtcbmltcG9ydCBcIi4vc3JjL2V4ZWN1dGVyL2luZGV4LmpzXCI7XG5pbXBvcnQgKiBhcyBFeGVjdXRlclJlZ2lzdHJ5IGZyb20gXCIuL3NyYy9FeGVjdXRlclJlZ2lzdHJ5LmpzXCJcblxuZXhwb3J0IHsgRXhwcmVzc2lvblJlc29sdmVyLCBFeGVjdXRlclJlZ2lzdHJ5IH07XG4iLCIvKipcbiAqIEB0eXBlZGVmIHtPYmplY3R9IENhY2hlRW50cnlcbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBsYXN0SGl0IC0gTW9ub3RvbmljIG1hcmtlciBvZiB0aGUgbGFzdCByZWFkIG9yIHdyaXRlLCB0aGUgZXZpY3Rpb24gb3JkZXIuXG4gKiBAcHJvcGVydHkge3N0cmluZ30ga2V5XG4gKiBAcHJvcGVydHkge0Z1bmN0aW9ufSB2YWx1ZVxuICovXG5cbi8qKlxuICogQHR5cGVkZWYge09iamVjdH0gQ29kZUNhY2hlT3B0aW9uc1xuICogQHByb3BlcnR5IHtudW1iZXJ9IFtzaXplXSAtIE1heGltdW0gbnVtYmVyIG9mIGVudHJpZXMgaW4gdGhlIGNhY2hlLCBhIGZyYWN0aW9uIHJvdW5kZWQgZG93bi4gSWYgc2V0XG4gKiB0byAwIG9yIGxlc3MsIGNhY2hpbmcgaXMgZGlzYWJsZWQuIExlZnQgb3V0LCB0aGUgc2l6ZSBzdGF5cyBhcyBpdCBpcy5cbiAqL1xuXG4vKiogVGhlIHNpemUgZXZlcnkgY2FjaGUgc3RhcnRzIHdpdGguICovXG5jb25zdCBTVEFSVF9TSVpFID0gNTAwMDtcblxuLyoqXG4gKiBDb2RlQ2FjaGUgY2xhc3MgdG8gbWFuYWdlIGNhY2hpbmcgb2YgZ2VuZXJhdGVkIGNvZGUgc25pcHBldHMuXG4gKlxuICogRW50cmllcyBhcmUgZXZpY3RlZCBsZWFzdCByZWNlbnRseSB1c2VkIGZpcnN0OiBldmVyeSBoaXQgcmVmcmVzaGVzIHRoZSBlbnRyeSwgc28gYW5cbiAqIGV4cHJlc3Npb24gdGhhdCBrZWVwcyBiZWluZyByZXNvbHZlZCBvdXRsaXZlcyBvbmUgdGhhdCB3YXMgY29tcGlsZWQgb25jZSBhbmQgZHJvcHBlZC5cbiAqIFRoZSBtYXJrZXIgaXMgYSBjb3VudGVyIHJhdGhlciB0aGFuIGEgdGltZXN0YW1wIOKAlCBhIGJ1cnN0IG9mIGZpcnN0LXRpbWUgY29tcGlsYXRpb25zXG4gKiBmYWxscyBpbnRvIGEgc2luZ2xlIG1pbGxpc2Vjb25kLCB3aGljaCB3b3VsZCBsZWF2ZSB0aGUgZXZpY3Rpb24gb3JkZXIgdG8gY2hhbmNlLlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb2RlQ2FjaGUge1xuXHQvKiogQHR5cGUge2Jvb2xlYW59ICovXG5cdCNkaXNhYmxlZCA9IGZhbHNlO1xuXHQvKiogQHR5cGUge251bWJlcn0gKi9cblx0I3NpemUgPSAwO1xuXHQvKiogQHR5cGUge251bWJlcn0gKi9cblx0I21heFNpemUgPSAwO1xuXHQvKiogQHR5cGUge0FycmF5PENhY2hlRW50cnk+fSAqL1xuXHQjZW50cmllcyA9IFtdO1xuXHQvKiogQHR5cGUge01hcDxzdHJpbmcsQ2FjaGVFbnRyeT59ICovXG5cdCNlbnRyeU1hcCA9IG5ldyBNYXAoKTtcblx0LyoqIEB0eXBlIHtudW1iZXJ9IC0gSGFuZHMgb3V0IHRoZSBgbGFzdEhpdGAgbWFya2VycywgbmV2ZXIgcmVzZXQuICovXG5cdCNjbG9jayA9IDA7XG5cblxuXHQvKipcblx0ICogU3RhcnRzIHdpdGggYSBzaXplIG9mIDUwMDAsIHRoZW4gYXBwbGllcyB0aGUgb3B0aW9ucy5cblx0ICpcblx0ICogQHBhcmFtIHtDb2RlQ2FjaGVPcHRpb25zfSBvcHRpb25zXG5cdCAqL1xuXHRjb25zdHJ1Y3RvcihvcHRpb25zID0ge30pIHtcblx0XHR0aGlzLiNyZXNpemUoU1RBUlRfU0laRSk7XG5cdFx0dGhpcy5zZXR1cChvcHRpb25zKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBBcHBsaWVzIHdoYXQgdGhlIG9wdGlvbnMgY2FycnkgYW5kIGxlYXZlcyBldmVyeXRoaW5nIGVsc2UgYXMgaXQgaXMuIEEgc2l6ZSBvZiAwIG9yIGxlc3Ncblx0ICogZGlzYWJsZXMgdGhlIGNhY2hlIGFuZCByZWxlYXNlcyBpdHMgZW50cmllcywgYSBsYXRlciBwb3NpdGl2ZSBzaXplIGVuYWJsZXMgaXQgYWdhaW4gYW5kIHN0YXJ0c1xuXHQgKiBlbXB0eS5cblx0ICpcblx0ICogQHBhcmFtIHtDb2RlQ2FjaGVPcHRpb25zfSBvcHRpb25zXG5cdCAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gd2hlcmUgdGhlIHNpemUgaXMgbm90IGEgZmluaXRlIG51bWJlclxuXHQgKi9cblx0c2V0dXAoeyBzaXplIH0gPSB7fSkge1xuXHRcdGlmIChzaXplID09PSB1bmRlZmluZWQpIHJldHVybjtcblx0XHRpZiAodHlwZW9mIHNpemUgIT09IFwibnVtYmVyXCIgfHwgIU51bWJlci5pc0Zpbml0ZShzaXplKSkgdGhyb3cgbmV3IFR5cGVFcnJvcihgVGhlIHNpemUgb2YgYSBjb2RlIGNhY2hlIGlzIGEgZmluaXRlIG51bWJlciwgbm90ICR7U3RyaW5nKHNpemUpfSFgKTtcblxuXHRcdHRoaXMuI3Jlc2l6ZShNYXRoLmZsb29yKHNpemUpKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAcGFyYW0ge251bWJlcn0gYVNpemUgYSB3aG9sZSBudW1iZXJcblx0ICovXG5cdCNyZXNpemUoYVNpemUpIHtcblx0XHR0aGlzLiNkaXNhYmxlZCA9IGFTaXplIDw9IDA7XG5cdFx0aWYgKHRoaXMuI2Rpc2FibGVkKSB7XG5cdFx0XHR0aGlzLiNzaXplID0gMDtcblx0XHRcdHRoaXMuI21heFNpemUgPSAwO1xuXHRcdFx0dGhpcy5jbGVhcigpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLiNzaXplID0gYVNpemU7XG5cdFx0XHR0aGlzLiNtYXhTaXplID0gTWF0aC5mbG9vcihhU2l6ZSAqIDEuMSk7XG5cdFx0XHR0aGlzLiN0cmltKCk7XG5cdFx0fVxuXHR9XG5cblx0LyoqXG5cdCAqIFdoZXRoZXIgYW4gZW50cnkgaXMgaGVsZCB1bmRlciB0aGUga2V5LiBBIGRpc2FibGVkIGNhY2hlIGhvbGRzIG5vbmUuIEFza2luZyBkb2VzIG5vdCBjb3VudCBhcyBhXG5cdCAqIGhpdCwgc28gaXQgbGVhdmVzIHRoZSBldmljdGlvbiBvcmRlciBhbG9uZS5cblx0ICpcblx0ICogQHBhcmFtIHtzdHJpbmd9IGtleVxuXHQgKiBAcmV0dXJucyB7Ym9vbGVhbn1cblx0ICovXG5cdGhhcyhrZXkpIHtcblx0XHRpZih0aGlzLiNkaXNhYmxlZCkgcmV0dXJuIGZhbHNlO1xuXHRcdHJldHVybiB0aGlzLiNlbnRyeU1hcC5oYXMoa2V5KTtcblx0fVxuXG5cdC8qKlxuXHQgKiBUaGUgY29kZSBoZWxkIHVuZGVyIHRoZSBrZXksIG9yIG51bGwgd2hlcmUgbm9uZSBpcyBoZWxkIG9yIHRoZSBjYWNoZSBpcyBkaXNhYmxlZC4gQSBoaXRcblx0ICogcmVmcmVzaGVzIHRoZSBlbnRyeSwgc28gaXQgaXMgZXZpY3RlZCBsYXN0LlxuXHQgKlxuXHQgKiBAcGFyYW0ge3N0cmluZ30ga2V5XG5cdCAqIEByZXR1cm5zIHs/RnVuY3Rpb259XG5cdCAqL1xuXHRnZXQoa2V5KSB7XG5cdFx0aWYodGhpcy4jZGlzYWJsZWQpIHJldHVybiBudWxsO1xuXHRcdGNvbnN0IGVudHJ5ID0gdGhpcy4jZW50cnlNYXAuZ2V0KGtleSk7XG5cdFx0aWYgKGVudHJ5KSB7XG5cdFx0XHRlbnRyeS5sYXN0SGl0ID0gKyt0aGlzLiNjbG9jaztcblx0XHRcdHJldHVybiBlbnRyeS52YWx1ZTtcblx0XHR9XG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cblxuXHQvKipcblx0ICogSG9sZHMgdGhlIGNvZGUgdW5kZXIgdGhlIGtleSwgcmVwbGFjaW5nIHdoYXQgd2FzIGhlbGQgdGhlcmUsIGFuZCByZWZyZXNoZXMgdGhlIGVudHJ5LiBPbmNlIHRoZVxuXHQgKiBjYWNoZSByZWFjaGVzIGEgdGVudGggcGFzdCBpdHMgc2l6ZSwgdGhlIGxlYXN0IHJlY2VudGx5IHVzZWQgZW50cmllcyBhcmUgZXZpY3RlZCBkb3duIHRvIHRoZVxuXHQgKiBzaXplLlxuXHQgKiBBIGRpc2FibGVkIGNhY2hlIGtlZXBzIG5vdGhpbmcuXG5cdCAqXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBrZXlcblx0ICogQHBhcmFtIHtGdW5jdGlvbn0gY29kZVxuXHQgKi9cblx0c2V0KGtleSwgY29kZSkge1xuXHRcdGlmKHRoaXMuI2Rpc2FibGVkKSByZXR1cm47XG5cdFx0bGV0IGVudHJ5ID0gdGhpcy4jZW50cnlNYXAuZ2V0KGtleSk7XG5cdFx0aWYgKGVudHJ5KSB7XG5cdFx0XHRlbnRyeS5sYXN0SGl0ID0gKyt0aGlzLiNjbG9jaztcblx0XHRcdGVudHJ5LnZhbHVlID0gY29kZTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0ZW50cnkgPSB7XG5cdFx0XHRcdGxhc3RIaXQ6ICsrdGhpcy4jY2xvY2ssXG5cdFx0XHRcdGtleSxcblx0XHRcdFx0dmFsdWU6IGNvZGUsXG5cdFx0XHR9O1xuXHRcdFx0dGhpcy4jZW50cmllcy5wdXNoKGVudHJ5KTtcblx0XHRcdHRoaXMuI2VudHJ5TWFwLnNldChrZXksIGVudHJ5KTtcblx0XHR9XG5cblx0XHRpZiAodGhpcy4jZW50cnlNYXAuc2l6ZSA+PSB0aGlzLiNtYXhTaXplKSB0aGlzLiN0cmltKCk7XG5cdH1cblxuXHQvKipcblx0ICogRHJvcHMgZXZlcnkgZW50cnkuIFRoZSBzaXplIHN0YXlzIGFzIGl0IGlzLlxuXHQgKi9cblx0Y2xlYXIoKSB7XG5cdFx0dGhpcy4jZW50cmllcyA9IFtdO1xuXHRcdHRoaXMuI2VudHJ5TWFwID0gbmV3IE1hcCgpO1xuXHR9XG5cblx0I3RyaW0oKSB7XG5cdFx0dGhpcy4jZW50cmllcy5zb3J0KChhLCBiKSA9PiBiLmxhc3RIaXQgLSBhLmxhc3RIaXQpO1xuXHRcdGlmICh0aGlzLiNlbnRyaWVzLmxlbmd0aCA+IHRoaXMuI3NpemUpIHtcblx0XHRcdGNvbnN0IGVudHJpZXNUb1JlbW92ZSA9IHRoaXMuI2VudHJpZXMuc3BsaWNlKHRoaXMuI3NpemUpO1xuXHRcdFx0Zm9yIChjb25zdCBlbnRyeSBvZiBlbnRyaWVzVG9SZW1vdmUpIHtcblx0XHRcdFx0dGhpcy4jZW50cnlNYXAuZGVsZXRlKGVudHJ5LmtleSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG59O1xuIiwiLyoqXG4gKiBBIGRlZmF1bHQgdmFsdWUgYXMgdGhlIHJlc29sdmVyIGNhcnJpZXMgaXQsIHdoaWNoIHRlbGxzIFwibm8gZGVmYXVsdCBwYXNzZWRcIiBhcGFydCBmcm9tIFwidGhlXG4gKiBkZWZhdWx0IGlzIHVuZGVmaW5lZFwiLlxuICpcbiAqIEBleHBvcnRcbiAqIEBjbGFzcyBEZWZhdWx0VmFsdWVcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGVmYXVsdFZhbHVlIHtcblx0LyoqXG5cdCAqIENyZWF0ZWQgd2l0aG91dCBhbiBhcmd1bWVudCwgaXQgY2FycmllcyBubyBkZWZhdWx0OyBjcmVhdGVkIHdpdGggb25lLCBpdCBjYXJyaWVzIHRoYXRcblx0ICogYXJndW1lbnQsIHVuZGVmaW5lZCBpbmNsdWRlZC5cblx0ICpcblx0ICogQGNvbnN0cnVjdG9yXG5cdCAqIEBwYXJhbSB7Kn0gW3ZhbHVlXVxuXHQgKi9cblx0Y29uc3RydWN0b3IodmFsdWUpe1xuXHRcdC8qKiBAdHlwZSB7Ym9vbGVhbn0gd2hldGhlciBhIGRlZmF1bHQgd2FzIHBhc3NlZCAqL1xuXHRcdHRoaXMuaGFzVmFsdWUgPSBhcmd1bWVudHMubGVuZ3RoID09IDE7XG5cdFx0LyoqIEB0eXBlIHsqfSB0aGUgZGVmYXVsdCwgbWVhbmluZ2Z1bCBvbmx5IHdoZXJlIGhhc1ZhbHVlIGlzIHRydWUgKi9cblx0XHR0aGlzLnZhbHVlID0gdmFsdWU7XG5cdH1cbn07XG4iLCIvKipcbiAqIFRoZSBpbnRlcmZhY2UgZXZlcnkgZXhlY3V0ZXIgaW1wbGVtZW50cy4gQW4gZXhlY3V0ZXIgcnVucyBzdGF0ZW1lbnRzIGFuZFxuICogaG9sZHMgbm8gY29udGV4dCBvZiBpdHMgb3duOiB0aGUgY29udGV4dCBhbHdheXMgY29tZXMgZnJvbSB0aGUgcmVzb2x2ZXIuXG4gKlxuICogQW4gb3duIGltcGxlbWVudGF0aW9uIGlzIGJ1aWx0IGZyb20gaXQgYnkgaGFuZGluZyBvdmVyIHRoZSBmdW5jdGlvbiB0aGF0IGRvZXMgdGhlIHdvcmsuXG4gKlxuICogQGV4cG9ydFxuICogQGNsYXNzIEV4ZWN1dGVyXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEV4ZWN1dGVye1xuXG5cdCNleGVjdXRpb247XG5cblx0LyoqXG5cdCAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uXVxuXHQgKiBAcGFyYW0geyhhU3RhdGVtZW50OiBzdHJpbmcsIGFDb250ZXh0OiBvYmplY3QpID0+ICp9IFtvcHRpb24uZXhlY3V0aW9uXSBydW5zIGEgc3RhdGVtZW50IG92ZXJcblx0ICogYSBjb250ZXh0IGFuZCBhbnN3ZXJzIHRoZSByZXN1bHQsIGEgcHJvbWlzZSBpbmNsdWRlZC4gV2l0aG91dCBvbmUsIGV2ZXJ5IGV4ZWN1dGlvbiB0aHJvd3MuXG5cdCAqL1xuXHRjb25zdHJ1Y3Rvcih7ZXhlY3V0aW9ufSA9IHt9KXtcblx0XHR0aGlzLiNleGVjdXRpb24gPSBleGVjdXRpb24gfHwgKCgpID0+IHt0aHJvdyBuZXcgRXJyb3IoXCJub3QgaW1wbGVtZW50ZWRcIil9KTtcblx0fVxuXG5cdC8qKlxuXHQgKiBSdW5zIGEgc3RhdGVtZW50IG92ZXIgYSBjb250ZXh0LlxuXHQgKlxuXHQgKiBAcGFyYW0ge3N0cmluZ30gYVN0YXRlbWVudCB0aGUgc3RhdGVtZW50LCB3aXRob3V0IGRlbGltaXRlcnMgYW5kIHNjb3BlIHByZWZpeFxuXHQgKiBAcGFyYW0ge29iamVjdH0gYUNvbnRleHQgdGhlIGNvbnRleHQgb2YgdGhlIHJlc29sdmVyIHRoZSBzdGF0ZW1lbnQgaXMgZXZhbHVhdGVkIG9uXG5cdCAqIEByZXR1cm5zIHsqfSB3aGF0IHRoZSBleGVjdXRpb24gYW5zd2VycywgYSBwcm9taXNlIGluY2x1ZGVkXG5cdCAqL1xuXHRleGVjdXRlKGFTdGF0ZW1lbnQsIGFDb250ZXh0KXtcblx0XHRyZXR1cm4gdGhpcy4jZXhlY3V0aW9uKGFTdGF0ZW1lbnQsIGFDb250ZXh0KTtcblx0fVxufTtcbiIsImltcG9ydCBFeGVjdXRlciBmcm9tIFwiLi9FeGVjdXRlci5qc1wiO1xuXG5jb25zdCBFWEVDVVRFUlMgPSBuZXcgTWFwKCk7XG5cbi8qKlxuICogS2VlcHMgYW4gZXhlY3V0ZXIgdW5kZXIgYSBuYW1lLCBzbyBhIHJlc29sdmVyIGNhbiBiZSBnaXZlbiB0aGUgbmFtZSBpbnN0ZWFkIG9mIHRoZSBpbnN0YW5jZS5cbiAqIEFuIGV4ZWN1dGVyIGFscmVhZHkga2VwdCB1bmRlciB0aGUgbmFtZSBpcyByZXBsYWNlZC5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gYU5hbWVcbiAqIEBwYXJhbSB7RXhlY3V0ZXJ9IGFuRXhlY3V0ZXJcbiAqL1xuZXhwb3J0IGNvbnN0IHJlZ2lzdGVyID0gKGFOYW1lLCBhbkV4ZWN1dGVyKSA9PiB7XG5cdEVYRUNVVEVSUy5zZXQoYU5hbWUsIGFuRXhlY3V0ZXIpO1xufTtcblxuLyoqXG4gKiBUaGUgZXhlY3V0ZXIga2VwdCB1bmRlciBhIG5hbWUuIEFsc28gdGhlIGRlZmF1bHQgZXhwb3J0IG9mIHRoaXMgbW9kdWxlLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBhTmFtZVxuICogQHJldHVybnMge0V4ZWN1dGVyfVxuICogQHRocm93cyB7RXJyb3J9IHdoZXJlIG5vIGV4ZWN1dGVyIGlzIGtlcHQgdW5kZXIgdGhlIG5hbWVcbiAqL1xuZXhwb3J0IGNvbnN0IGdldEV4ZWN1dGVyID0gKGFOYW1lKSA9PiB7XG5cdGNvbnN0IGV4ZWN1dGVyID0gRVhFQ1VURVJTLmdldChhTmFtZSk7XG5cdGlmICghZXhlY3V0ZXIpIHRocm93IG5ldyBFcnJvcihgRXhlY3V0ZXIgXCIke2FOYW1lfVwiIGlzIG5vdCByZWdpc3RlcmVkIWApO1xuXHRyZXR1cm4gZXhlY3V0ZXI7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBnZXRFeGVjdXRlcjtcbiIsImltcG9ydCBPYmplY3RVdGlscyBmcm9tIFwiQGRlZmF1bHQtanMvZGVmYXVsdGpzLWNvbW1vbi11dGlscy9zcmMvT2JqZWN0VXRpbHMuanNcIjtcbmltcG9ydCBEZWZhdWx0VmFsdWUgZnJvbSBcIi4vRGVmYXVsdFZhbHVlLmpzXCI7XG5pbXBvcnQgeyBnZXRFeGVjdXRlciB9IGZyb20gXCIuL0V4ZWN1dGVyUmVnaXN0cnkuanNcIjtcbmltcG9ydCBEZWZhdWx0RXhlY3V0ZXIgZnJvbSBcIi4vZXhlY3V0ZXIvQ29udGV4dERlY29uc3RydWN0b3JFeGVjdXRlci5qc1wiO1xuaW1wb3J0IFJlc29sdmVyQ29udGV4dEhhbmRsZSBmcm9tIFwiLi9SZXNvbHZlckNvbnRleHRIYW5kbGUuanNcIjtcbmltcG9ydCBFeGVjdXRlciBmcm9tIFwiLi9FeGVjdXRlci5qc1wiO1xuaW1wb3J0IHsgc2NhbiwgcGFyc2VFeHByZXNzaW9uIH0gZnJvbSBcIi4vRXhwcmVzc2lvblNjYW5uZXIuanNcIjtcbmltcG9ydCB7IGlzTmFtZUNoYXJhY3RlciwgdHJpbVRvTnVsbCB9IGZyb20gXCIuL1V0aWxzLmpzXCI7XG5cbi8qKiBAdHlwZSB7RXhlY3V0ZXJ9ICovXG5sZXQgREVGQVVMVF9FWEVDVVRFUiA9IERlZmF1bHRFeGVjdXRlcjtcblxuY29uc3QgREVGQVVMVF9OT1RfREVGSU5FRCA9IG5ldyBEZWZhdWx0VmFsdWUoKTtcbmNvbnN0IHRvRGVmYXVsdFZhbHVlID0gKHZhbHVlKSA9PiB7XG5cdGlmICh2YWx1ZSBpbnN0YW5jZW9mIERlZmF1bHRWYWx1ZSkgcmV0dXJuIHZhbHVlO1xuXG5cdHJldHVybiBuZXcgRGVmYXVsdFZhbHVlKHZhbHVlKTtcbn07XG5cbmxldCBOQU1FX0NPVU5URVIgPSAwO1xuLyoqXG4gKiBUaGUgbmFtZSBhIHJlc29sdmVyIGNhcnJpZXMgd2hlcmUgdGhlIGNhbGxlciBwYXNzZWQgbm9uZS4gT25seSB1bmlxdWVuZXNzIGlzIHByb21pc2VkLCB0aGUgc2hhcGVcbiAqIGlzIG5vdC5cbiAqXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG5jb25zdCBnZW5lcmF0ZU5hbWUgPSAoKSA9PiBgRVIkeysrTkFNRV9DT1VOVEVSfWA7XG5cbi8qKlxuICogVGhlIG5hbWUgYSByZXNvbHZlciBrZWVwczogdGhlIG9uZSBwYXNzZWQsIHRyaW1tZWQgYW5kIGhlbGQgdG8gdGhlIGNoYXJhY3RlcnMgYSBzY29wZSBuYW1lIG1heVxuICogY2FycnksIG9yIGEgZ2VuZXJhdGVkIG9uZSB3aGVyZSBub25lIHdhcyBwYXNzZWQuXG4gKlxuICogQHBhcmFtIHs/c3RyaW5nfSBhTmFtZVxuICogQHJldHVybnMge3N0cmluZ31cbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gd2hlcmUgdGhlIG5hbWUgaXMgbm8gc3RyaW5nLCBlbXB0eSwgb3IgY2FycmllcyBhIGNoYXJhY3RlciBhIHNjb3BlIG5hbWUgY2Fubm90XG4gKiBjYXJyeVxuICovXG5jb25zdCB0b05hbWUgPSAoYU5hbWUpID0+IHtcblx0aWYgKGFOYW1lID09IG51bGwpIHJldHVybiBnZW5lcmF0ZU5hbWUoKTtcblx0aWYgKHR5cGVvZiBhTmFtZSAhPT0gXCJzdHJpbmdcIikgdGhyb3cgbmV3IFR5cGVFcnJvcihgVGhlIG9wdGlvbiBuYW1lIHRha2VzIGEgc3RyaW5nLCBub3QgYSAke3R5cGVvZiBhTmFtZX0hYCk7XG5cblx0Y29uc3QgbmFtZSA9IHRyaW1Ub051bGwoYU5hbWUpO1xuXHRpZiAobmFtZSA9PSBudWxsKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiVGhlIG9wdGlvbiBuYW1lIHRha2VzIGEgbmFtZSwgbm90IGFuIGVtcHR5IHN0cmluZyFcIik7XG5cdGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBuYW1lLmxlbmd0aDsgaW5kZXgrKylcblx0XHRpZiAoIWlzTmFtZUNoYXJhY3RlcihuYW1lLmNoYXJDb2RlQXQoaW5kZXgpKSkgdGhyb3cgbmV3IFR5cGVFcnJvcihgVGhlIG5hbWUgXCIke25hbWV9XCIgY2FycmllcyBhIGNoYXJhY3RlciBhIHNjb3BlIG5hbWUgY2Fubm90IGNhcnJ5IC0gb25seSBBU0NJSSBsZXR0ZXJzLCBkaWdpdHMsIFwiLVwiLCBcIl9cIiBhbmQgd2hpdGVzcGFjZSBhcmUgYWxsb3dlZCFgKTtcblxuXHRyZXR1cm4gbmFtZTtcbn07XG5cbi8qKlxuICogVGhlIHNjb3BlIG5hbWUgYSBmaWx0ZXIgb2YgdGhlIGRhdGEgbWV0aG9kcyBzZWxlY3RzLCByZWFkIGxpa2UgYSBzY29wZSBwcmVmaXg6IHRyaW1tZWQsIGFuZCBudWxsXG4gKiB3aGVyZSB0aGVyZSBpcyBub25lLlxuICpcbiAqIEBwYXJhbSB7P3N0cmluZ30gYUZpbHRlclxuICogQHJldHVybnMgez9zdHJpbmd9XG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IHdoZXJlIHRoZSBmaWx0ZXIgaXMgbm8gc3RyaW5nXG4gKi9cbmNvbnN0IHRvU2NvcGUgPSAoYUZpbHRlcikgPT4ge1xuXHRpZiAoYUZpbHRlciA9PSBudWxsKSByZXR1cm4gbnVsbDtcblx0aWYgKHR5cGVvZiBhRmlsdGVyICE9PSBcInN0cmluZ1wiKSB0aHJvdyBuZXcgVHlwZUVycm9yKGBBIGZpbHRlciBpcyBhIHNjb3BlIG5hbWUsIG5vdCBhICR7dHlwZW9mIGFGaWx0ZXJ9IWApO1xuXG5cdHJldHVybiB0cmltVG9OdWxsKGFGaWx0ZXIpO1xufTtcblxuLyoqXG4gKiBUaGUgcHJvcGVydHkga2V5IGEgZGF0YSBtZXRob2Qgd29ya3Mgd2l0aCAtIGEgc3RyaW5nLCBcIlwiIGluY2x1ZGVkLCBhIHN5bWJvbCwgb3IgYSBudW1iZXIsIHdoaWNoXG4gKiBuYW1lcyB0aGUgc2FtZSBwcm9wZXJ0eSBhcyBpdHMgc3RyaW5nIGFuZCBpcyBsb29rZWQgdXAgYXMgb25lLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfG51bWJlcnxzeW1ib2x9IGFLZXlcbiAqIEByZXR1cm5zIHtzdHJpbmd8c3ltYm9sfVxuICogQHRocm93cyB7VHlwZUVycm9yfSB3aGVyZSB0aGUga2V5IGlzIG5vbmUsIG9yIG9mIGEgdHlwZSBubyBwcm9wZXJ0eSBrZXkgaGFzXG4gKi9cbmNvbnN0IHRvS2V5ID0gKGFLZXkpID0+IHtcblx0Y29uc3QgdHlwZSA9IHR5cGVvZiBhS2V5O1xuXHRpZiAodHlwZSA9PT0gXCJzdHJpbmdcIiB8fCB0eXBlID09PSBcInN5bWJvbFwiKSByZXR1cm4gYUtleTtcblx0aWYgKHR5cGUgPT09IFwibnVtYmVyXCIpIHJldHVybiBTdHJpbmcoYUtleSk7XG5cblx0dGhyb3cgbmV3IFR5cGVFcnJvcihgQSBrZXkgaXMgYSBzdHJpbmcsIGEgbnVtYmVyIG9yIGEgc3ltYm9sLCBub3QgJHthS2V5ID09IG51bGwgPyBcIm1pc3NpbmdcIiA6IGBhICR7dHlwZX1gfSFgKTtcbn07XG5cbmNvbnN0IHdhcm5GYWlsZWRTdGF0ZW1lbnQgPSAoYVN0YXRlbWVudCwgYW5FcnJvcikgPT4ge1xuXHRjb25zb2xlLndhcm4oYEV4ZWN1dGlvbiBlcnJvciBvbiBzdGF0ZW1lbnQhXG5cdFx0c3RhdGVtZW50OlxuXHRcdCR7YVN0YXRlbWVudH1cblx0XHRlcnJvcjpcblx0XHQke2FuRXJyb3J9XG5cdFx0YCk7XG59O1xuXG4vKipcbiAqIEBwYXJhbSB7Kn0gYVJlc3VsdFxuICogQHBhcmFtIHtEZWZhdWx0VmFsdWV9IGFEZWZhdWx0XG4gKiBAcmV0dXJucyB7Kn1cbiAqL1xuY29uc3Qgd2l0aERlZmF1bHQgPSAoYVJlc3VsdCwgYURlZmF1bHQpID0+IHtcblx0aWYgKGFSZXN1bHQgIT09IG51bGwgJiYgdHlwZW9mIGFSZXN1bHQgIT09IFwidW5kZWZpbmVkXCIpIHJldHVybiBhUmVzdWx0O1xuXHRlbHNlIGlmIChhRGVmYXVsdC5oYXNWYWx1ZSkgcmV0dXJuIGFEZWZhdWx0LnZhbHVlO1xuXHRyZXR1cm4gYVJlc3VsdDtcbn07XG5cbi8vIHRoZSBmaXJzdCBhcmd1bWVudCBvZiBhIHN0YXRpYyBlbnRyeSBwb2ludCBpcyBhIHN0cmluZywgb3IgYSBjb25maWd1cmF0aW9uIG9iamVjdFxuY29uc3QgaXNDb25maWd1cmF0aW9uID0gKGFWYWx1ZSkgPT4gYVZhbHVlICE9PSBudWxsICYmIHR5cGVvZiBhVmFsdWUgPT09IFwib2JqZWN0XCI7XG5cbi8vIGEgY29uZmlndXJhdGlvbiBjb3VudHMgYXMgcGFzc2luZyBhIGRlZmF1bHQgd2hlcmUgaXQgY2FycmllcyB0aGUga2V5LCB3aGF0ZXZlciBpdCBob2xkc1xuY29uc3QgZGVmYXVsdE9mID0gKGFDb25maWd1cmF0aW9uKSA9PiAoXCJkZWZhdWx0VmFsdWVcIiBpbiBhQ29uZmlndXJhdGlvbiA/IGFDb25maWd1cmF0aW9uLmRlZmF1bHRWYWx1ZSA6IERFRkFVTFRfTk9UX0RFRklORUQpO1xuXG4vKipcbiAqIFJlc29sdmVzIGAkey4uLn1gIGV4cHJlc3Npb25zIGFnYWluc3QgYSBjb250ZXh0LiBBIHJlc29sdmVyIG1heSBoYXZlIGEgcGFyZW50LCBhbmQgdGhlIHJlc29sdmVyc1xuICogZnJvbSBpdCB1cCB0byB0aGUgcm9vdCBmb3JtIGEgY2hhaW46IGEgbmFtZSBpcyBsb29rZWQgdXAgZnJvbSB0aGlzIHJlc29sdmVyIHRvd2FyZHMgdGhlIHJvb3QsIGFuZFxuICogYSBzY29wZSBwcmVmaXggYCR7bmFtZTo6c3RhdGVtZW50fWAgYWRkcmVzc2VzIG9uZSByZXNvbHZlciBvZiB0aGUgY2hhaW4uXG4gKlxuICogVXNlZCBzdGF0aWNhbGx5IHdpdGggYW4gYWQtaG9jIGNvbnRleHQgKGByZXNvbHZlYCwgYHJlc29sdmVUZXh0YCksIG9yIGFzIGFuIGluc3RhbmNlIHdpdGhpbiBhXG4gKiBjaGFpbi5cbiAqXG4gKiBAZXhwb3J0XG4gKiBAY2xhc3MgRXhwcmVzc2lvblJlc29sdmVyXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEV4cHJlc3Npb25SZXNvbHZlciB7XG5cdC8qKlxuXHQgKiBTZXRzIHRoZSBleGVjdXRlciBhIHJlc29sdmVyIHdpdGhvdXQgYSBwYXJlbnQgdGFrZXMgd2hlcmUgdGhlIGBleGVjdXRlcmAgb3B0aW9uIGlzIGxlZnQgb3V0LFxuXHQgKiBhbmQgc28gdGhlIGV4ZWN1dGVyIG9mIHRoZSBzdGF0aWMgZW50cnkgcG9pbnRzLlxuXHQgKlxuXHQgKiBAcGFyYW0ge3N0cmluZ3xFeGVjdXRlcn0gYW5FeGVjdXRlciBhIHJlZ2lzdGVyZWQgbmFtZSBvciBhbiBgRXhlY3V0ZXJgIGluc3RhbmNlXG5cdCAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gd2hlcmUgdGhlIHZhbHVlIGlzIG5laXRoZXIgYSBzdHJpbmcgbm9yIGFuIGBFeGVjdXRlcmAgaW5zdGFuY2Vcblx0ICogQHRocm93cyB7RXJyb3J9IHdoZXJlIGEgbmFtZSBpcyBub3QgcmVnaXN0ZXJlZFxuXHQgKi9cblx0c3RhdGljIHNldCBkZWZhdWx0RXhlY3V0ZXIoYW5FeGVjdXRlcikge1xuXHRcdGlmIChhbkV4ZWN1dGVyIGluc3RhbmNlb2YgRXhlY3V0ZXIpIERFRkFVTFRfRVhFQ1VURVIgPSBhbkV4ZWN1dGVyO1xuXHRcdGVsc2UgaWYgKHR5cGVvZiBhbkV4ZWN1dGVyID09PSBcInN0cmluZ1wiKSBERUZBVUxUX0VYRUNVVEVSID0gZ2V0RXhlY3V0ZXIoYW5FeGVjdXRlcik7XG5cdFx0ZWxzZSB0aHJvdyBuZXcgVHlwZUVycm9yKGBFeHByZXNzaW9uUmVzb2x2ZXIuZGVmYXVsdEV4ZWN1dGVyIHRha2VzIGEgcmVnaXN0ZXJlZCBuYW1lIG9yIGFuIEV4ZWN1dGVyLCBub3QgYSAke3R5cGVvZiBhbkV4ZWN1dGVyfSFgKTtcblx0XHRjb25zb2xlLmluZm8oYENoYW5nZWQgZGVmYXVsdCBleGVjdXRlciBmb3IgRXhwcmVzc2lvblJlc29sdmVyIWApO1xuXHR9XG5cblx0LyoqXG5cdCAqIFRoZSBleGVjdXRlciBhIHJlc29sdmVyIHdpdGhvdXQgYSBwYXJlbnQgdGFrZXMgd2hlcmUgdGhlIGBleGVjdXRlcmAgb3B0aW9uIGlzIGxlZnQgb3V0O1xuXHQgKiBgY29udGV4dC1kZWNvbnN0cnVjdGlvbi1leGVjdXRlcmAgdW50aWwgaXQgaXMgc2V0LlxuXHQgKlxuXHQgKiBAdHlwZSB7RXhlY3V0ZXJ9XG5cdCAqL1xuXHRzdGF0aWMgZ2V0IGRlZmF1bHRFeGVjdXRlcigpIHtcblx0XHRyZXR1cm4gREVGQVVMVF9FWEVDVVRFUjtcblx0fVxuXG5cdC8qKiBAdHlwZSB7c3RyaW5nfG51bGx9ICovXG5cdCNuYW1lID0gbnVsbDtcblx0LyoqIEB0eXBlIHtFeHByZXNzaW9uUmVzb2x2ZXJ8bnVsbH0gKi9cblx0I3BhcmVudCA9IG51bGw7XG5cdC8qKiBAdHlwZSB7RXhlY3V0ZXJ8bnVsbH0gKi9cblx0I2V4ZWN1dGVyID0gbnVsbDtcblx0LyoqIEB0eXBlIHtvYmplY3R8bnVsbH0gKi9cblx0I2NvbnRleHQgPSBudWxsO1xuXHQvKiogQHR5cGUge1Jlc29sdmVyQ29udGV4dEhhbmRsZXxudWxsfSAqL1xuXHQjY29udGV4dEhhbmRsZSA9IG51bGw7XG5cblx0LyoqXG5cdCAqIEBjb25zdHJ1Y3RvclxuXHQgKiBAcGFyYW0ge29iamVjdH0gW29wdGlvbnNdXG5cdCAqIEBwYXJhbSB7P29iamVjdH0gW29wdGlvbnMuY29udGV4dF0gYW55IG9iamVjdDsgd2hlcmUgbm9uZSBpcyBwYXNzZWQgLSBsZWZ0IG91dCwgbnVsbCBvclxuXHQgKiB1bmRlZmluZWQgLSB0aGUgcmVzb2x2ZXIgaGFzIG5vIGNvbnRleHQgb2YgaXRzIG93blxuXHQgKiBAcGFyYW0gez9FeHByZXNzaW9uUmVzb2x2ZXJ9IFtvcHRpb25zLnBhcmVudD1udWxsXVxuXHQgKiBAcGFyYW0gez9zdHJpbmd9IFtvcHRpb25zLm5hbWU9bnVsbF0ga2VwdCB0cmltbWVkOyB3aGVyZSBub25lIGlzIHBhc3NlZCwgb25lIGlzIGdlbmVyYXRlZFxuXHQgKiBAcGFyYW0gez8oc3RyaW5nfEV4ZWN1dGVyKX0gW29wdGlvbnMuZXhlY3V0ZXJdIHRoZSByZWdpc3RlcmVkIG5hbWUgb2YgYW4gZXhlY3V0ZXIsIG9yIGFuXG5cdCAqIGBFeGVjdXRlcmAgaW5zdGFuY2UuIEEgbmFtZSB0aGF0IGlzIG5vdCByZWdpc3RlcmVkIHRocm93czsgYW4gaW5zdGFuY2UgbmVlZHMgbm8gcmVnaXN0cmF0aW9uLFxuXHQgKiBiZWNhdXNlIGl0IGFkZHJlc3NlcyB0aGUgZXhlY3V0ZXIgZGlyZWN0bHkuIE51bGwgYW5kIHVuZGVmaW5lZCBjb3VudCBhcyBsZWZ0IG91dC4gV2l0aG91dCB0aGVcblx0ICogb3B0aW9uIHRoZSByZXNvbHZlciB0YWtlcyB0aGUgZXhlY3V0ZXIgb2YgaXRzIHBhcmVudCwgYW5kIG9uZSB3aXRob3V0IGEgcGFyZW50XG5cdCAqIGBFeHByZXNzaW9uUmVzb2x2ZXIuZGVmYXVsdEV4ZWN1dGVyYC5cblx0ICogQHRocm93cyB7VHlwZUVycm9yfSB3aGVyZSB0aGUgcGFyZW50IGlzIG5vIHJlc29sdmVyLCB0aGUgY29udGV4dCBhIHByaW1pdGl2ZSwgdGhlIG5hbWUgbm9cblx0ICogc3RyaW5nLCBlbXB0eSwgb3IgY2FycnlpbmcgYSBjaGFyYWN0ZXIgYSBzY29wZSBuYW1lIGNhbm5vdCBjYXJyeSwgb3IgdGhlIGV4ZWN1dGVyIG5laXRoZXIgYVxuXHQgKiBzdHJpbmcgbm9yIGFuIGBFeGVjdXRlcmAgaW5zdGFuY2Vcblx0ICogQHRocm93cyB7RXJyb3J9IHdoZXJlIHRoZSBleGVjdXRlciBpcyBuYW1lZCBhbmQgdGhlIG5hbWUgaXMgbm90IHJlZ2lzdGVyZWRcblx0ICovXG5cdGNvbnN0cnVjdG9yKHsgY29udGV4dCwgcGFyZW50ID0gbnVsbCwgbmFtZSA9IG51bGwsIGV4ZWN1dGVyIH0gPSB7fSkge1xuXHRcdGlmIChwYXJlbnQgIT0gbnVsbCAmJiAhKHBhcmVudCBpbnN0YW5jZW9mIEV4cHJlc3Npb25SZXNvbHZlcikpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJUaGUgb3B0aW9uIHBhcmVudCB0YWtlcyBhbiBFeHByZXNzaW9uUmVzb2x2ZXIhXCIpO1xuXHRcdGlmIChjb250ZXh0ICE9IG51bGwgJiYgdHlwZW9mIGNvbnRleHQgIT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIGNvbnRleHQgIT09IFwiZnVuY3Rpb25cIikgdGhyb3cgbmV3IFR5cGVFcnJvcihgVGhlIG9wdGlvbiBjb250ZXh0IHRha2VzIGFuIG9iamVjdCwgbm90IGEgJHt0eXBlb2YgY29udGV4dH0hYCk7XG5cdFx0aWYgKGV4ZWN1dGVyICE9IG51bGwgJiYgdHlwZW9mIGV4ZWN1dGVyICE9PSBcInN0cmluZ1wiICYmICEoZXhlY3V0ZXIgaW5zdGFuY2VvZiBFeGVjdXRlcikpIHRocm93IG5ldyBUeXBlRXJyb3IoYFRoZSBvcHRpb24gZXhlY3V0ZXIgdGFrZXMgYSByZWdpc3RlcmVkIG5hbWUgb3IgYW4gRXhlY3V0ZXIsIG5vdCBhICR7dHlwZW9mIGV4ZWN1dGVyfSFgKTtcblx0XHR0aGlzLiNuYW1lID0gdG9OYW1lKG5hbWUpO1xuXG5cdFx0aWYoZXhlY3V0ZXIgaW5zdGFuY2VvZiBFeGVjdXRlcikgdGhpcy4jZXhlY3V0ZXIgPSAgZXhlY3V0ZXI7XG5cdFx0ZWxzZSBpZiAodHlwZW9mIGV4ZWN1dGVyID09PSBcInN0cmluZ1wiKSB0aGlzLiNleGVjdXRlciA9IGdldEV4ZWN1dGVyKGV4ZWN1dGVyKTtcblx0XHRlbHNlIGlmKHBhcmVudCAhPSBudWxsKSB0aGlzLiNleGVjdXRlciA9IHBhcmVudC5leGVjdXRlcjtcblx0XHRlbHNlIHRoaXMuI2V4ZWN1dGVyID0gRXhwcmVzc2lvblJlc29sdmVyLmRlZmF1bHRFeGVjdXRlcjtcblxuXHRcdHRoaXMuI3BhcmVudCA9IHBhcmVudDtcblx0XHR0aGlzLiNjb250ZXh0SGFuZGxlID0gbmV3IFJlc29sdmVyQ29udGV4dEhhbmRsZShjb250ZXh0ICwgdGhpcy4jcGFyZW50ID8gdGhpcy4jcGFyZW50LmNvbnRleHRIYW5kbGUgOiBudWxsKTtcblx0XHR0aGlzLiNjb250ZXh0ID0gdGhpcy4jY29udGV4dEhhbmRsZS5jb250ZXh0O1xuXHR9XG5cblx0LyoqXG5cdCAqIFRoZSBuYW1lIHRoaXMgcmVzb2x2ZXIgaXMgYWRkcmVzc2VkIGJ5IGluIGEgc2NvcGUgcHJlZml4IGFuZCBhIGZpbHRlci5cblx0ICpcblx0ICogQHR5cGUge3N0cmluZ31cblx0ICovXG5cdGdldCBuYW1lKCkge1xuXHRcdHJldHVybiB0aGlzLiNuYW1lO1xuXHR9XG5cblx0LyoqXG5cdCAqIEB0eXBlIHtFeHByZXNzaW9uUmVzb2x2ZXJ8bnVsbH1cblx0ICovXG5cdGdldCBwYXJlbnQoKSB7XG5cdFx0cmV0dXJuIHRoaXMuI3BhcmVudDtcblx0fVxuXG5cdC8qKlxuXHQgKiBUaGUgY29udGV4dCBvZiB0aGlzIHJlc29sdmVyIGFzIGFuIGV4cHJlc3Npb24gc2VlcyBpdC4gSXQgaXMgbm90IHRoZSBvYmplY3QgcGFzc2VkIHRvIHRoZVxuXHQgKiBjb25zdHJ1Y3RvciBhbmQgaXQgYW5zd2VycyBmb3IgdGhlIHdob2xlIGNoYWluLiBPdmVyIHRoZSBnbG9iYWwgb2JqZWN0IGl0IGlzIHRoZSBnbG9iYWxcblx0ICogb2JqZWN0IGl0c2VsZi5cblx0ICpcblx0ICogQHR5cGUge1JlY29yZDxzdHJpbmd8c3ltYm9sLCAqPn1cblx0ICovXG5cdGdldCBjb250ZXh0KCkge1xuXHRcdHJldHVybiB0aGlzLiNjb250ZXh0O1xuXHR9XG5cblx0LyoqXG5cdCAqIFRoZSBleGVjdXRlciBpbiB1c2UsIGNob3NlbiBvbmNlIGluIHRoZSBjb25zdHJ1Y3Rvci5cblx0ICpcblx0ICogQHR5cGUge0V4ZWN1dGVyfVxuXHQgKi9cblx0Z2V0IGV4ZWN1dGVyKCkge1xuXHRcdHJldHVybiB0aGlzLiNleGVjdXRlcjtcblx0fVxuXG5cdC8qKlxuXHQgKiBUaGUgaW50ZXJuYWwgaGFuZGxlIGJlaGluZCB0aGUgY29udGV4dCwgcHVibGljIGZvciBgcmVzZXRDYWNoZWAuXG5cdCAqXG5cdCAqIEB0eXBlIHtSZXNvbHZlckNvbnRleHRIYW5kbGV9XG5cdCAqL1xuXHRnZXQgY29udGV4dEhhbmRsZSgpIHtcblx0XHRyZXR1cm4gdGhpcy4jY29udGV4dEhhbmRsZTtcblx0fVxuXG5cdC8qKlxuXHQgKiBUaGUgbmFtZXMgb2YgZXZlcnkgcmVzb2x2ZXIgZnJvbSB0aGUgcm9vdCBkb3duIHRvIHRoaXMgb25lLCBhcyBhIHBhdGggLSBgL3Jvb3Qv4oCmL3RoaXNgLiBJdFxuXHQgKiBkZXNjcmliZXMgdGhlIHN0cnVjdHVyZSBhbmQgZG9lcyBub3QgY2hhbmdlLlxuXHQgKlxuXHQgKiBAdHlwZSB7c3RyaW5nfVxuXHQgKi9cblx0Z2V0IGNoYWluKCkge1xuXHRcdC8vIGEgbG9vcCwgbm90IGEgcmVjdXJzaW9uIGludG8gdGhlIHBhcmVudDogYSBkZWVwIGNoYWluIG92ZXJmbG93ZWQgdGhlIHN0YWNrXG5cdFx0bGV0IHBhdGggPSBcIlwiO1xuXHRcdGxldCByZXNvbHZlciA9IHRoaXM7XG5cdFx0d2hpbGUgKHJlc29sdmVyKSB7XG5cdFx0XHRwYXRoID0gYC8ke3Jlc29sdmVyLm5hbWV9JHtwYXRofWA7XG5cdFx0XHRyZXNvbHZlciA9IHJlc29sdmVyLnBhcmVudDtcblx0XHR9XG5cblx0XHRyZXR1cm4gcGF0aDtcblx0fVxuXG5cdC8qKlxuXHQgKiBUaGUgbmFtZXMgb2YgdGhlIHJlc29sdmVycyBmcm9tIHRoZSByb290IGRvd24gdG8gdGhpcyBvbmUgdGhhdCBwcm92aWRlIGEgY29udGV4dCwgYXMgYSBwYXRoXG5cdCAqIGxpa2UgYGNoYWluYC4gQSByZXNvbHZlciBidWlsdCB3aXRob3V0IGEgY29udGV4dCBqb2lucyBpdCB0aGUgbW9tZW50IGEgdmFsdWUgaXMgc2V0IG9uIGl0LCBzb1xuXHQgKiB0aGlzIGRlc2NyaWJlcyBhIHN0YXRlIGFuZCBub3QgdGhlIHN0cnVjdHVyZS4gV2hlcmUgbm9uZSBwcm92aWRlcyBvbmUsXG5cdCAqIHRoZSBhbnN3ZXIgaXMgdGhlIGVtcHR5IHN0cmluZy5cblx0ICpcblx0ICogQHR5cGUge3N0cmluZ31cblx0ICovXG5cdGdldCBlZmZlY3RpdmVDaGFpbigpIHtcblx0XHQvLyBhIGxvb3AsIG5vdCBhIHJlY3Vyc2lvbiBpbnRvIHRoZSBwYXJlbnQ6IGEgZGVlcCBjaGFpbiBvdmVyZmxvd2VkIHRoZSBzdGFja1xuXHRcdGxldCBwYXRoID0gXCJcIjtcblx0XHRsZXQgcmVzb2x2ZXIgPSB0aGlzO1xuXHRcdHdoaWxlIChyZXNvbHZlcikge1xuXHRcdFx0aWYgKHJlc29sdmVyLmNvbnRleHRIYW5kbGUucHJvdmlkZXNDb250ZXh0KSBwYXRoID0gYC8ke3Jlc29sdmVyLm5hbWV9JHtwYXRofWA7XG5cdFx0XHRyZXNvbHZlciA9IHJlc29sdmVyLnBhcmVudDtcblx0XHR9XG5cblx0XHRyZXR1cm4gcGF0aDtcblx0fVxuXG5cdC8qKlxuXHQgKiBUaGUgY29udGV4dHMgb2YgZXhhY3RseSB0aGUgcmVzb2x2ZXJzIGBlZmZlY3RpdmVDaGFpbmAgbmFtZXMsIGFzIGFuIGFycmF5LCB0aGlzIHJlc29sdmVyJ3Ncblx0ICogZmlyc3QgYW5kIHRoZSByb290J3MgbGFzdC4gQSBzdGF0ZSBsaWtlIGBlZmZlY3RpdmVDaGFpbmAuXG5cdCAqXG5cdCAqIEB0eXBlIHtBcnJheTxSZWNvcmQ8c3RyaW5nfHN5bWJvbCwgKj4+fVxuXHQgKi9cblx0Z2V0IGNvbnRleHRDaGFpbigpIHtcblx0XHRjb25zdCByZXN1bHQgPSBbXTtcblx0XHRsZXQgcmVzb2x2ZXIgPSB0aGlzO1xuXHRcdHdoaWxlIChyZXNvbHZlcikge1xuXHRcdFx0aWYgKHJlc29sdmVyLmNvbnRleHRIYW5kbGUucHJvdmlkZXNDb250ZXh0KSByZXN1bHQucHVzaChyZXNvbHZlci5jb250ZXh0KTtcblxuXHRcdFx0cmVzb2x2ZXIgPSByZXNvbHZlci5wYXJlbnQ7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHJlc3VsdDtcblx0fVxuXG5cdC8qKlxuXHQgKiBUaGUgcmVzb2x2ZXIgYSBjYWxsIGFkZHJlc3NlczogdGhlIG9uZSB0aGUgZmlsdGVyIG5hbWVzLCBvciB0aGUgcmVzb2x2ZXIgdGhlIGNhbGwgd2FzIG1hZGUgb25cblx0ICogd2hlcmUgbm8gZmlsdGVyIGlzIGdpdmVuLlxuXHQgKlxuXHQgKiBBIGZpbHRlciBzZWxlY3RzIGV4YWN0bHkgb25lIHJlc29sdmVyLCB0aGUgbmVhcmVzdCBvZiB0aGF0IG5hbWUgZnJvbSBoZXJlIHRvd2FyZHMgdGhlIHJvb3QsIGFuZFxuXHQgKiBhIGZpbHRlciBtYXRjaGluZyBub25lIHRocm93cyAtIGEgd3JvbmcgbmFtZSBpbiBhbiBBUEkgY2FsbCBpcyBhIG1pc3Rha2UgaW4gdGhlIGNhbGxpbmcgY29kZSxcblx0ICogdW5saWtlIGEgc2NvcGUgcHJlZml4IGluc2lkZSBhbiBleHByZXNzaW9uLCB3aGljaCBhbnN3ZXJzIHVuZGVmaW5lZC5cblx0ICpcblx0ICogQHBhcmFtIHs/c3RyaW5nfSBhU2NvcGUgdGhlIGZpbHRlciBhcyBgdG9TY29wZWAgcmVhZHMgaXRcblx0ICogQHJldHVybnMge0V4cHJlc3Npb25SZXNvbHZlcn1cblx0ICovXG5cdCNmaW5kUmVzb2x2ZXIoYVNjb3BlKSB7XG5cdFx0aWYgKCFhU2NvcGUpIHJldHVybiB0aGlzO1xuXG5cdFx0Y29uc3QgcmVzb2x2ZXIgPSB0aGlzLiNyZXNvbHZlckZvclNjb3BlKGFTY29wZSk7XG5cdFx0aWYgKHJlc29sdmVyKSByZXR1cm4gcmVzb2x2ZXI7XG5cblx0XHR0aHJvdyBuZXcgRXJyb3IoYEZpbHRlciBcIiR7YVNjb3BlfVwiIG1hdGNoZXMgbm8gcmVzb2x2ZXIgb2YgdGhlIGNoYWluIWApO1xuXHR9XG5cblx0LyoqXG5cdCAqIFRoZSBuZWFyZXN0IHJlc29sdmVyIGZyb20gaGVyZSB0byB0aGUgcm9vdCB0aGF0IGNhcnJpZXMgdGhlIHNjb3BlIG5hbWUsIG9yIG51bGwgd2hlcmUgbm9uZVxuXHQgKiBjYXJyaWVzIGl0LiBBIGZpbHRlciBhbmQgYSBzY29wZSBwcmVmaXggYW5zd2VyIGEgbWlzcyBkaWZmZXJlbnRseSwgc28gZWFjaCBjYWxsZXIgZG9lcyB0aGF0XG5cdCAqIGZvciBpdHNlbGYuXG5cdCAqXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBhU2NvcGVcblx0ICogQHJldHVybnMge0V4cHJlc3Npb25SZXNvbHZlcnxudWxsfVxuXHQgKi9cblx0I3Jlc29sdmVyRm9yU2NvcGUoYVNjb3BlKSB7XG5cdFx0Ly8gYSBsb29wLCBub3QgYSByZWN1cnNpb24gaW50byB0aGUgcGFyZW50OiBvbmUgY2FsbCBwZXIgcmVzb2x2ZXIgY2xpbWJlZCBvdmVyZmxvd2VkIHRoZVxuXHRcdC8vIHN0YWNrIG9uIGEgZGVlcCBjaGFpblxuXHRcdGxldCByZXNvbHZlciA9IHRoaXM7XG5cdFx0d2hpbGUgKHJlc29sdmVyKSB7XG5cdFx0XHRpZiAocmVzb2x2ZXIuI25hbWUgPT09IGFTY29wZSkgcmV0dXJuIHJlc29sdmVyO1xuXHRcdFx0cmVzb2x2ZXIgPSByZXNvbHZlci4jcGFyZW50O1xuXHRcdH1cblxuXHRcdHJldHVybiBudWxsO1xuXHR9XG5cblx0LyoqXG5cdCAqIEhhbmRzIGEgc3RhdGVtZW50IHRvIHRoZSByZXNvbHZlciBpdCBhZGRyZXNzZXMgLSB0aGUgb25lIGl0cyBzY29wZSBwcmVmaXggbmFtZXMsIG9yIHRoaXMgb25lXG5cdCAqIHdpdGhvdXQgYSBwcmVmaXggLSBhbmQgYW5zd2VycyB3aGF0IHRoYXQgcmVzb2x2ZXIncyBleGVjdXRlciBhbnN3ZXJzLCBhIHByb21pc2UgaW5jbHVkZWQuIEFuXG5cdCAqIGVtcHR5IHN0YXRlbWVudCBhbmQgYSBwcmVmaXggbm8gcmVzb2x2ZXIgb2YgdGhlIGNoYWluIGNhcnJpZXMgYW5zd2VyIHVuZGVmaW5lZCwgYW5kIHRoZSBkZWZhdWx0XG5cdCAqIGFwcGxpZXMgdG8gaXQgbGlrZSB0byBhbnkgb3RoZXIgcmVzdWx0LlxuXHQgKlxuXHQgKiBEZWxpYmVyYXRlbHkgbm90IGFzeW5jOiB0aGUgZW50cnkgcG9pbnQgYXdhaXRzIHRoZSBhbnN3ZXIgb25jZSwgYW5kIGEgc3luY2hyb25vdXMgdGhyb3cgb2YgdGhlXG5cdCAqIGV4ZWN1dGVyIGxhbmRzIGluIGl0cyBgdHJ5YCBhbGwgdGhlIHNhbWUuIEFuIGVycm9yIGlzIG5vdCBjYXVnaHQgaGVyZSwgYmVjYXVzZSB0aGUgdHdvIGVudHJ5XG5cdCAqIHBvaW50cyBhbnN3ZXIgaXQgZGlmZmVyZW50bHkuXG5cdCAqXG5cdCAqIEBwYXJhbSB7P3N0cmluZ30gYVN0YXRlbWVudCB0cmltbWVkLCBhbmQgbnVsbCB3aGVyZSBpdCBpcyBlbXB0eVxuXHQgKiBAcGFyYW0gez9zdHJpbmd9IGFTY29wZSB0aGUgc2NvcGUgcHJlZml4LCBudWxsIHdoZXJlIHRoZXJlIGlzIG5vbmVcblx0ICogQHJldHVybnMgeyp9XG5cdCAqL1xuXHQjZXhlY3V0ZShhU3RhdGVtZW50LCBhU2NvcGUpIHtcblx0XHRjb25zdCByZXNvbHZlciA9IGFTY29wZSA/IHRoaXMuI3Jlc29sdmVyRm9yU2NvcGUoYVNjb3BlKSA6IHRoaXM7XG5cdFx0Ly8gYW4gZW1wdHkgc3RhdGVtZW50IGFuc3dlcnMgdW5kZWZpbmVkLCB0aGUgc2FtZSBhcyBgcmV0dXJuO2AgaW4gSmF2YVNjcmlwdFxuXHRcdGlmIChyZXNvbHZlciA9PT0gbnVsbCB8fCBhU3RhdGVtZW50ID09IG51bGwpIHJldHVybiB1bmRlZmluZWQ7XG5cblx0XHRyZXR1cm4gcmVzb2x2ZXIuI2V4ZWN1dGVyLmV4ZWN1dGUoYVN0YXRlbWVudCwgcmVzb2x2ZXIuI2NvbnRleHQpO1xuXHR9XG5cblx0LyoqXG5cdCAqIFRoZSBuZWFyZXN0IHJlc29sdmVyIGZyb20gaGVyZSB0byB0aGUgcm9vdCB0aGF0IGNhcnJpZXMgdGhlIGtleSBpdHNlbGYsIG9yIG51bGwgd2hlcmUgbm9uZVxuXHQgKiBjYXJyaWVzIGl0LiBXaGF0IGRlY2lkZXMgaXMgd2hldGhlciBhIHJlc29sdmVyIHByb3ZpZGVzIHRoZSBuYW1lLCBub3Qgd2hhdCBpdCBob2xkcy5cblx0ICpcblx0ICogQHBhcmFtIHtzdHJpbmd8c3ltYm9sfSBrZXlcblx0ICogQHJldHVybnMge0V4cHJlc3Npb25SZXNvbHZlcnxudWxsfVxuXHQgKi9cblx0I3Jlc29sdmVyRm9yS2V5KGtleSkge1xuXHRcdGxldCByZXNvbHZlciA9IHRoaXM7XG5cdFx0d2hpbGUgKHJlc29sdmVyKSB7XG5cdFx0XHRpZiAocmVzb2x2ZXIuY29udGV4dEhhbmRsZS5oYXNOYW1lKGtleSkpIHJldHVybiByZXNvbHZlcjtcblx0XHRcdHJlc29sdmVyID0gcmVzb2x2ZXIucGFyZW50O1xuXHRcdH1cblxuXHRcdHJldHVybiBudWxsO1xuXHR9XG5cblx0LyoqXG5cdCAqIFJlYWRzIGEgdmFsdWUgYWxvbmcgdGhlIGNoYWluLCBmcm9tIHRoZSBhZGRyZXNzZWQgcmVzb2x2ZXIgdG93YXJkcyB0aGUgcm9vdC4gV2l0aG91dCBhIGtleSAtXG5cdCAqIG51bGwgb3IgdW5kZWZpbmVkIC0gaXQgYW5zd2VycyB0aGUgd2hvbGUgY29udGV4dCBvZiB0aGF0IHJlc29sdmVyLCB3aGljaCBzdGlsbCBzZWVzIHRoZSBjaGFpbiBvblxuXHQgKiBldmVyeSBhY2Nlc3MuXG5cdCAqXG5cdCAqIEBwYXJhbSB7PyhzdHJpbmd8bnVtYmVyfHN5bWJvbCl9IFtrZXldIGEgcHJvcGVydHkga2V5OyBhIG51bWJlciBpcyBsb29rZWQgdXAgYXMgaXRzIHN0cmluZ1xuXHQgKiBAcGFyYW0gez9zdHJpbmd9IFtmaWx0ZXJdIHRoZSBzY29wZSBuYW1lIG9mIHRoZSByZXNvbHZlciB0aGUgY2FsbCBhZGRyZXNzZXM7IHdpdGhvdXQgb25lLCB0aGlzXG5cdCAqIHJlc29sdmVyXG5cdCAqIEByZXR1cm5zIHsqfSB0aGUgdmFsdWUsIG9yIHRoZSB3aG9sZSBjb250ZXh0IHdpdGhvdXQgYSBrZXlcblx0ICogQHRocm93cyB7VHlwZUVycm9yfSB3aGVyZSB0aGUga2V5IGlzIG9mIGEgdHlwZSBubyBwcm9wZXJ0eSBrZXkgaGFzLCBvciB0aGUgZmlsdGVyIG5vIHN0cmluZ1xuXHQgKiBAdGhyb3dzIHtFcnJvcn0gd2hlcmUgdGhlIGZpbHRlciBtYXRjaGVzIG5vIHJlc29sdmVyIG9mIHRoZSBjaGFpblxuXHQgKi9cblx0Z2V0RGF0YShrZXksIGZpbHRlcikge1xuXHRcdGNvbnN0IHJlc29sdmVyID0gdGhpcy4jZmluZFJlc29sdmVyKHRvU2NvcGUoZmlsdGVyKSk7XG5cdFx0aWYgKGtleSA9PSBudWxsKSByZXR1cm4gcmVzb2x2ZXIuY29udGV4dDtcblxuXHRcdHJldHVybiByZXNvbHZlci5jb250ZXh0W3RvS2V5KGtleSldO1xuXHR9XG5cblx0LyoqXG5cdCAqIFNldHMgYSB2YWx1ZSwgaW4gdGhlIG9iamVjdCB0aGUgY2FsbGVyIGhhbmRlZCBvdmVyLiBXaXRob3V0IGEgZmlsdGVyIHRoZSB2YWx1ZSBpcyBjaGFuZ2VkIHdoZXJlXG5cdCAqIHRoZSBrZXkgbGl2ZXMsIGNvdW50aW5nIGZyb20gaGVyZSB0b3dhcmRzIHRoZSByb290LCBhbmQgY3JlYXRlZCBoZXJlIHdoZXJlIG5vIHJlc29sdmVyIGNhcnJpZXNcblx0ICogaXQuIFdpdGggYSBmaWx0ZXIgdGhlIGFkZHJlc3NlZCByZXNvbHZlciBpcyB0aGUgdGFyZ2V0IG91dHJpZ2h0LlxuXHQgKlxuXHQgKiBAcGFyYW0ge3N0cmluZ3xudW1iZXJ8c3ltYm9sfSBrZXkgYSBwcm9wZXJ0eSBrZXk7IGEgbnVtYmVyIGlzIGxvb2tlZCB1cCBhcyBpdHMgc3RyaW5nXG5cdCAqIEBwYXJhbSB7Kn0gdmFsdWVcblx0ICogQHBhcmFtIHs/c3RyaW5nfSBbZmlsdGVyXSB0aGUgc2NvcGUgbmFtZSBvZiB0aGUgcmVzb2x2ZXIgdGhlIGNhbGwgYWRkcmVzc2VzXG5cdCAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gd2hlcmUgdGhlIGtleSBpcyBtaXNzaW5nIG9yIG9mIGEgdHlwZSBubyBwcm9wZXJ0eSBrZXkgaGFzLCB0aGUgZmlsdGVyIG5vXG5cdCAqIHN0cmluZywgb3IgdGhlIG9iamVjdCByZWZ1c2VzIHRoZSB3cml0ZVxuXHQgKiBAdGhyb3dzIHtFcnJvcn0gd2hlcmUgdGhlIGZpbHRlciBtYXRjaGVzIG5vIHJlc29sdmVyIG9mIHRoZSBjaGFpblxuXHQgKi9cblx0dXBkYXRlRGF0YShrZXksIHZhbHVlLCBmaWx0ZXIpIHtcblx0XHRjb25zdCBwcm9wZXJ0eSA9IHRvS2V5KGtleSk7XG5cdFx0Y29uc3Qgc2NvcGUgPSB0b1Njb3BlKGZpbHRlcik7XG5cdFx0Y29uc3QgcmVzb2x2ZXIgPSB0aGlzLiNmaW5kUmVzb2x2ZXIoc2NvcGUpO1xuXG5cdFx0Y29uc3QgdGFyZ2V0ID0gc2NvcGUgPyByZXNvbHZlciA6IHRoaXMuI3Jlc29sdmVyRm9yS2V5KHByb3BlcnR5KSB8fCB0aGlzO1xuXHRcdHRhcmdldC5jb250ZXh0W3Byb3BlcnR5XSA9IHZhbHVlO1xuXHR9XG5cblx0LyoqXG5cdCAqIFJlbW92ZXMgdGhlIGtleSBmcm9tIG9uZSByZXNvbHZlciAtIHRoZSBhZGRyZXNzZWQgb25lIHdpdGggYSBmaWx0ZXIsIGFuZCB3aXRob3V0IG9uZSB0aGUgZmlyc3Rcblx0ICogcmVzb2x2ZXIgY2FycnlpbmcgaXQsIGNvdW50aW5nIGZyb20gaGVyZSB0b3dhcmRzIHRoZSByb290LiBSZW1vdmluZyBpdCB1bmNvdmVycyB0aGUgdmFsdWUgb2Zcblx0ICogdGhlIG5leHQgcmVzb2x2ZXIgdGhhdCBjYXJyaWVzIHRoZSBzYW1lIGtleS5cblx0ICpcblx0ICogQHBhcmFtIHtzdHJpbmd8bnVtYmVyfHN5bWJvbH0ga2V5IGEgcHJvcGVydHkga2V5OyBhIG51bWJlciBpcyBsb29rZWQgdXAgYXMgaXRzIHN0cmluZ1xuXHQgKiBAcGFyYW0gez9zdHJpbmd9IFtmaWx0ZXJdIHRoZSBzY29wZSBuYW1lIG9mIHRoZSByZXNvbHZlciB0aGUgY2FsbCBhZGRyZXNzZXNcblx0ICogQHRocm93cyB7VHlwZUVycm9yfSB3aGVyZSB0aGUga2V5IGlzIG1pc3Npbmcgb3Igb2YgYSB0eXBlIG5vIHByb3BlcnR5IGtleSBoYXMsIHRoZSBmaWx0ZXIgbm9cblx0ICogc3RyaW5nLCBvciB0aGUgb2JqZWN0IHJlZnVzZXMgdGhlIGRlbGV0aW9uXG5cdCAqIEB0aHJvd3Mge0Vycm9yfSB3aGVyZSB0aGUgZmlsdGVyIG1hdGNoZXMgbm8gcmVzb2x2ZXIgb2YgdGhlIGNoYWluXG5cdCAqL1xuXHRkZWxldGVEYXRhKGtleSwgZmlsdGVyKSB7XG5cdFx0Y29uc3QgcHJvcGVydHkgPSB0b0tleShrZXkpO1xuXHRcdGNvbnN0IHNjb3BlID0gdG9TY29wZShmaWx0ZXIpO1xuXHRcdGNvbnN0IHJlc29sdmVyID0gdGhpcy4jZmluZFJlc29sdmVyKHNjb3BlKTtcblxuXHRcdGNvbnN0IHRhcmdldCA9IHNjb3BlID8gcmVzb2x2ZXIgOiB0aGlzLiNyZXNvbHZlckZvcktleShwcm9wZXJ0eSk7XG5cdFx0aWYgKHRhcmdldCkgZGVsZXRlIHRhcmdldC5jb250ZXh0W3Byb3BlcnR5XTtcblx0fVxuXG5cdC8qKlxuXHQgKiBBIHNoYWxsb3cgYXNzaWdubWVudCwga2V5IGJ5IGtleSwgaW50byB0aGUgY29udGV4dCBvZiB0aGUgYWRkcmVzc2VkIHJlc29sdmVyLCByZXBsYWNpbmcgd2hhdCBpc1xuXHQgKiB0aGVyZSBhbmQgYWRkaW5nIHdoYXQgaXMgbm90LiBObyBzZWFyY2ggYWxvbmcgdGhlIGNoYWluOiBhIG1lcmdlZCBrZXkgc2hhZG93cyB0aGUgcmVzb2x2ZXJzXG5cdCAqIGFib3ZlIGZyb20gaGVyZSBvbi5cblx0ICpcblx0ICogQHBhcmFtIHs/b2JqZWN0fSBjb250ZXh0IHRoZSBrZXlzIHRvIGFzc2lnbjsgbnVsbCBvciB1bmRlZmluZWQgY2hhbmdlcyBub3RoaW5nXG5cdCAqIEBwYXJhbSB7P3N0cmluZ30gW2ZpbHRlcl0gdGhlIHNjb3BlIG5hbWUgb2YgdGhlIHJlc29sdmVyIHRoZSBjYWxsIGFkZHJlc3Nlc1xuXHQgKiBAdGhyb3dzIHtUeXBlRXJyb3J9IHdoZXJlIHRoZSBjb250ZXh0IGlzIGEgcHJpbWl0aXZlLCB0aGUgZmlsdGVyIG5vIHN0cmluZywgb3IgdGhlIG9iamVjdFxuXHQgKiByZWZ1c2VzIGEga2V5IC0gdGhlIGtleXMgYmVmb3JlIGl0IGFyZSB3cml0dGVuIGJ5IHRoZW5cblx0ICogQHRocm93cyB7RXJyb3J9IHdoZXJlIHRoZSBmaWx0ZXIgbWF0Y2hlcyBubyByZXNvbHZlciBvZiB0aGUgY2hhaW5cblx0ICovXG5cdG1lcmdlQ29udGV4dChjb250ZXh0LCBmaWx0ZXIpIHtcblx0XHRjb25zdCByZXNvbHZlciA9IHRoaXMuI2ZpbmRSZXNvbHZlcih0b1Njb3BlKGZpbHRlcikpO1xuXHRcdGlmIChjb250ZXh0ID09IG51bGwpIHJldHVybjtcblx0XHRpZiAodHlwZW9mIGNvbnRleHQgIT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIGNvbnRleHQgIT09IFwiZnVuY3Rpb25cIikgdGhyb3cgbmV3IFR5cGVFcnJvcihgbWVyZ2VDb250ZXh0IHRha2VzIGFuIG9iamVjdCwgbm90IGEgJHt0eXBlb2YgY29udGV4dH0hYCk7XG5cblx0XHRyZXNvbHZlci5jb250ZXh0SGFuZGxlLm1lcmdlRGF0YShjb250ZXh0KTtcblx0fVxuXG5cdC8qKlxuXHQgKiBSZXNvbHZlcyBvbmUgZXhwcmVzc2lvbiB0byBpdHMgdmFsdWUsIG9mIHdoYXRldmVyIHR5cGUgdGhlIHN0YXRlbWVudCBhbnN3ZXJzLiBUYWtlcyB0aGVcblx0ICogZGVsaW1pdGVkIGZvcm0gYCR7Li4ufWAsIGEgc2NvcGUgcHJlZml4IGluY2x1ZGVkLCBvciBhIGJhcmUgc3RhdGVtZW50OyBhbiBpbnB1dCB0aGF0IGRvZXMgbm90XG5cdCAqIGJvdGggb3BlbiB3aXRoIGAke2AgYW5kIGVuZCB3aXRoIGB9YCBpcyBhIGJhcmUgc3RhdGVtZW50LiBBbiBlcnJvciBvZiB0aGUgc3RhdGVtZW50IGlzIGxvZ2dlZFxuXHQgKiBhbmQgaGFuZGVkIG9uLCBhbmQgdGhlIGRlZmF1bHQgbmV2ZXIgY292ZXJzIGl0LlxuXHQgKlxuXHQgKiBAYXN5bmNcblx0ICogQHBhcmFtIHtzdHJpbmd9IGFFeHByZXNzaW9uXG5cdCAqIEBwYXJhbSB7Kn0gW2FEZWZhdWx0XSByZXBsYWNlcyBhIHJlc3VsdCBvZiBudWxsIG9yIHVuZGVmaW5lZCB3aGVyZSBpdCBpcyBwYXNzZWQsIHVuZGVmaW5lZFxuXHQgKiBpbmNsdWRlZFxuXHQgKiBAcmV0dXJucyB7UHJvbWlzZTwqPn1cblx0ICogQHRocm93cyB7VHlwZUVycm9yfSB3aGVyZSB0aGUgZXhwcmVzc2lvbiBpcyBubyBzdHJpbmdcblx0ICovXG5cdGFzeW5jIHJlc29sdmUoYUV4cHJlc3Npb24sIGFEZWZhdWx0KSB7XG5cdFx0Ly8gYSBtaXN0YWtlIGluIHRoZSBjYWxsaW5nIGNvZGUsIG5vdCBhIGZhaWxlZCBzdGF0ZW1lbnQgLSBzbyBubyB3YXJuaW5nIGFuZCBubyBkZWZhdWx0XG5cdFx0aWYgKHR5cGVvZiBhRXhwcmVzc2lvbiAhPT0gXCJzdHJpbmdcIikgdGhyb3cgbmV3IFR5cGVFcnJvcihgcmVzb2x2ZSB0YWtlcyBhbiBleHByZXNzaW9uIGFzIGEgc3RyaW5nLCBub3QgYSAke3R5cGVvZiBhRXhwcmVzc2lvbn0hYCk7XG5cdFx0Y29uc3QgZGVmYXVsdFZhbHVlID0gYXJndW1lbnRzLmxlbmd0aCA9PSAyID8gdG9EZWZhdWx0VmFsdWUoYURlZmF1bHQpIDogREVGQVVMVF9OT1RfREVGSU5FRDtcblx0XHR0cnkge1xuXHRcdFx0Ly8gdGhlIGRlbGltaXRlZCBmb3JtIG9yIGEgYmFyZSBzdGF0ZW1lbnQsIHRvbGQgYXBhcnQgYnkgdGhlIHNjYW5uZXJcblx0XHRcdGNvbnN0IHsgc2NvcGUsIHN0YXRlbWVudCB9ID0gcGFyc2VFeHByZXNzaW9uKGFFeHByZXNzaW9uKTtcblx0XHRcdHJldHVybiB3aXRoRGVmYXVsdChhd2FpdCB0aGlzLiNleGVjdXRlKHN0YXRlbWVudCwgc2NvcGUpLCBkZWZhdWx0VmFsdWUpO1xuXHRcdH0gY2F0Y2ggKGUpIHtcblx0XHRcdC8vIHRoZSBlcnJvciBpcyBsb2dnZWQgYW5kIGhhbmRlZCBvbi4gcmVzb2x2ZSBhbnN3ZXJzIGEgdmFsdWUgb3Igc2F5cyB3aHkgaXQgY2Fubm90LFxuXHRcdFx0Ly8gYW5kIGEgZGVmYXVsdCB2YWx1ZSBjb3ZlcnMgYSBtaXNzaW5nIHJlc3VsdCwgbmV2ZXIgYW4gZXJyb3IuXG5cdFx0XHR3YXJuRmFpbGVkU3RhdGVtZW50KGFFeHByZXNzaW9uLCBlKTtcblx0XHRcdHRocm93IGU7XG5cdFx0fVxuXHR9XG5cblx0LyoqXG5cdCAqIFJlcGxhY2VzIGV2ZXJ5IGV4cHJlc3Npb24gb2YgYSB0ZXh0IGJ5IGl0cyB2YWx1ZSBhbmQgYW5zd2VycyB0aGUgdGV4dC4gQW4gZXhwcmVzc2lvbiB3aG9zZVxuXHQgKiBzdGF0ZW1lbnQgZmFpbHMgc3RhbmRzIGFzIHdyaXR0ZW4sIGEgd2FybmluZyBuYW1lcyBpdCwgYW5kIHRoZSByZXN0IG9mIHRoZSB0ZXh0IGtlZXBzIHJlbmRlcmluZy5cblx0ICpcblx0ICogQGFzeW5jXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBhVGV4dFxuXHQgKiBAcGFyYW0geyp9IFthRGVmYXVsdF0gcmVwbGFjZXMgYSByZXN1bHQgb2YgbnVsbCBvciB1bmRlZmluZWQsIHBlciBleHByZXNzaW9uLCB3aGVyZSBpdCBpc1xuXHQgKiBwYXNzZWRcblx0ICogQHJldHVybnMge1Byb21pc2U8c3RyaW5nPn1cblx0ICogQHRocm93cyB7VHlwZUVycm9yfSB3aGVyZSB0aGUgdGV4dCBpcyBubyBzdHJpbmdcblx0ICovXG5cdGFzeW5jIHJlc29sdmVUZXh0KGFUZXh0LCBhRGVmYXVsdCkge1xuXHRcdGlmICh0eXBlb2YgYVRleHQgIT09IFwic3RyaW5nXCIpIHRocm93IG5ldyBUeXBlRXJyb3IoYHJlc29sdmVUZXh0IHRha2VzIGEgdGV4dCBhcyBhIHN0cmluZywgbm90IGEgJHt0eXBlb2YgYVRleHR9IWApO1xuXHRcdGNvbnN0IGRlZmF1bHRWYWx1ZSA9IGFyZ3VtZW50cy5sZW5ndGggPT0gMiA/IHRvRGVmYXVsdFZhbHVlKGFEZWZhdWx0KSA6IERFRkFVTFRfTk9UX0RFRklORUQ7XG5cblx0XHRjb25zdCBvY2N1cnJlbmNlcyA9IHNjYW4oYVRleHQpO1xuXHRcdGlmICghb2NjdXJyZW5jZXMpIHJldHVybiBhVGV4dDtcblxuXHRcdGxldCB0ZXh0ID0gXCJcIjtcblx0XHRsZXQgcG9zaXRpb24gPSAwO1xuXHRcdGZvciAoY29uc3Qgb2NjdXJyZW5jZSBvZiBvY2N1cnJlbmNlcykge1xuXHRcdFx0Ly8gYW4gZXNjYXBpbmcgYmFja3NsYXNoIGlzIGNvbnN1bWVkLCBldmVyeXRoaW5nIGVsc2UgaW4gZnJvbnQgb2YgdGhlIGV4cHJlc3Npb25cblx0XHRcdC8vIHN0YW5kcyBhcyB3cml0dGVuXG5cdFx0XHR0ZXh0ICs9IGFUZXh0LnN1YnN0cmluZyhwb3NpdGlvbiwgb2NjdXJyZW5jZS5lc2NhcGVkID8gb2NjdXJyZW5jZS5zdGFydCAtIDEgOiBvY2N1cnJlbmNlLnN0YXJ0KTtcblx0XHRcdHBvc2l0aW9uID0gb2NjdXJyZW5jZS5lbmQ7XG5cblx0XHRcdGlmIChvY2N1cnJlbmNlLmVzY2FwZWQpIHtcblx0XHRcdFx0dGV4dCArPSBhVGV4dC5zdWJzdHJpbmcob2NjdXJyZW5jZS5zdGFydCwgb2NjdXJyZW5jZS5lbmQpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHR0ZXh0ICs9IHdpdGhEZWZhdWx0KGF3YWl0IHRoaXMuI2V4ZWN1dGUob2NjdXJyZW5jZS5zdGF0ZW1lbnQsIG9jY3VycmVuY2Uuc2NvcGUpLCBkZWZhdWx0VmFsdWUpO1xuXHRcdFx0XHR9IGNhdGNoIChlKSB7XG5cdFx0XHRcdFx0Ly8gYW4gZXhwcmVzc2lvbiB3aG9zZSBzdGF0ZW1lbnQgZmFpbGVkIHN0YW5kcyBhcyB3cml0dGVuLCBhbmQgdGhlIGRlZmF1bHQgdmFsdWVcblx0XHRcdFx0XHQvLyBkb2VzIG5vdCBjb3ZlciBpdC4gVGhlIHJlc3Qgb2YgdGhlIHRleHQga2VlcHMgcmVuZGVyaW5nLlxuXHRcdFx0XHRcdHdhcm5GYWlsZWRTdGF0ZW1lbnQob2NjdXJyZW5jZS5zdGF0ZW1lbnQsIGUpO1xuXHRcdFx0XHRcdHRleHQgKz0gYVRleHQuc3Vic3RyaW5nKG9jY3VycmVuY2Uuc3RhcnQsIG9jY3VycmVuY2UuZW5kKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiB0ZXh0ICsgYVRleHQuc3Vic3RyaW5nKHBvc2l0aW9uKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBSZXNvbHZlcyBvbmUgZXhwcmVzc2lvbiBhZ2FpbnN0IGFuIGFkLWhvYyBjb250ZXh0LCB0aHJvdWdoIGEgcmVzb2x2ZXIgb2YgaXRzIG93biwgYXMgdGhlIGluc3RhbmNlXG5cdCAqIGByZXNvbHZlYCBkb2VzLlxuXHQgKlxuXHQgKiBAb3ZlcmxvYWRcblx0ICogQHBhcmFtIHtzdHJpbmd9IGFFeHByZXNzaW9uXG5cdCAqIEBwYXJhbSB7P29iamVjdH0gW2FDb250ZXh0XVxuXHQgKiBAcGFyYW0geyp9IFthRGVmYXVsdF0gcmVwbGFjZXMgYSByZXN1bHQgb2YgbnVsbCBvciB1bmRlZmluZWQgd2hlcmUgaXQgaXMgcGFzc2VkXG5cdCAqIEBwYXJhbSB7P251bWJlcn0gW2FUaW1lb3V0XSBkZWxheXMgdGhlIHN0YXJ0IGJ5IHRoYXQgbWFueSBtaWxsaXNlY29uZHM7IG5vIGRlYWRsaW5lXG5cdCAqIEByZXR1cm5zIHtQcm9taXNlPCo+fVxuXHQgKiBAdGhyb3dzIHtUeXBlRXJyb3J9IHdoZXJlIHRoZSBleHByZXNzaW9uIGlzIG5vIHN0cmluZywgb3IgdGhlIGNvbnRleHQgaXMgYSBwcmltaXRpdmVcblx0ICovXG5cdC8qKlxuXHQgKiBSZXNvbHZlcyBvbmUgZXhwcmVzc2lvbiBhZ2FpbnN0IGFuIGFkLWhvYyBjb250ZXh0LCBhcyB0aGUgcG9zaXRpb25hbCBmb3JtIGRvZXMsIHdpdGggdGhlXG5cdCAqIGFyZ3VtZW50cyBpbiBvbmUgY29uZmlndXJhdGlvbiBvYmplY3QuIEEgZGVmYXVsdCBjb3VudHMgYXMgcGFzc2VkIHdoZXJlIHRoZSBrZXkgYGRlZmF1bHRWYWx1ZWBcblx0ICogaXMgcHJlc2VudCwgd2hhdGV2ZXIgaXQgaG9sZHMuXG5cdCAqXG5cdCAqIEBvdmVybG9hZFxuXHQgKiBAcGFyYW0ge3sgZXhwcmVzc2lvbjogc3RyaW5nLCBjb250ZXh0PzogP29iamVjdCwgZGVmYXVsdFZhbHVlPzogKiwgdGltZW91dD86ID9udW1iZXIgfX0gYUNvbmZpZ3VyYXRpb25cblx0ICogQHJldHVybnMge1Byb21pc2U8Kj59XG5cdCAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gd2hlcmUgdGhlIGNvbmZpZ3VyYXRpb24gY2FycmllcyBubyBzdHJpbmcgdW5kZXIgYGV4cHJlc3Npb25gLCBvciB0aGVcblx0ICogY29udGV4dCBpcyBhIHByaW1pdGl2ZVxuXHQgKi9cblx0LyoqXG5cdCAqIFRha2VzIHRoZSBhcmd1bWVudHMgcG9zaXRpb25hbGx5LCBvciBvbmUgY29uZmlndXJhdGlvbiBvYmplY3Rcblx0ICogYHsgZXhwcmVzc2lvbiwgY29udGV4dCwgZGVmYXVsdFZhbHVlLCB0aW1lb3V0IH1gLCBiZWhpbmQgd2hpY2ggZXZlcnkgYXJndW1lbnQgaXMgaWdub3JlZC4gQSBmaXJzdFxuXHQgKiBhcmd1bWVudCB0aGF0IGlzIG5laXRoZXIgYSBzdHJpbmcgbm9yIGFuIG9iamVjdCwgYW5kIGEgY29uZmlndXJhdGlvbiB3aXRob3V0IGEgc3RyaW5nIHVuZGVyXG5cdCAqIGBleHByZXNzaW9uYCwgcmVqZWN0IHdpdGggYSBgVHlwZUVycm9yYC5cblx0ICpcblx0ICogQHN0YXRpY1xuXHQgKiBAYXN5bmNcblx0ICogQHBhcmFtIHtzdHJpbmd8eyBleHByZXNzaW9uOiBzdHJpbmcsIGNvbnRleHQ/OiA/b2JqZWN0LCBkZWZhdWx0VmFsdWU/OiAqLCB0aW1lb3V0PzogP251bWJlciB9fSBhRXhwcmVzc2lvblxuXHQgKiBAcGFyYW0gez9vYmplY3R9IFthQ29udGV4dF1cblx0ICogQHBhcmFtIHsqfSBbYURlZmF1bHRdXG5cdCAqIEBwYXJhbSB7P251bWJlcn0gW2FUaW1lb3V0XVxuXHQgKiBAcmV0dXJucyB7UHJvbWlzZTwqPn1cblx0ICovXG5cdHN0YXRpYyBhc3luYyByZXNvbHZlKGFFeHByZXNzaW9uLCBhQ29udGV4dCwgYURlZmF1bHQsIGFUaW1lb3V0KSB7XG5cdFx0aWYgKGlzQ29uZmlndXJhdGlvbihhcmd1bWVudHNbMF0pKSB7XG5cdFx0XHRjb25zdCB7IGV4cHJlc3Npb24sIGNvbnRleHQsIHRpbWVvdXQgfSA9IGFyZ3VtZW50c1swXTtcblx0XHRcdGlmICh0eXBlb2YgZXhwcmVzc2lvbiAhPT0gXCJzdHJpbmdcIikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkV4cHJlc3Npb25SZXNvbHZlci5yZXNvbHZlIHRha2VzIGEgY29uZmlndXJhdGlvbiBjYXJyeWluZyB0aGUgZXhwcmVzc2lvbiBhcyBhIHN0cmluZyB1bmRlciB0aGUga2V5IGV4cHJlc3Npb24hXCIpO1xuXHRcdFx0cmV0dXJuIEV4cHJlc3Npb25SZXNvbHZlci5yZXNvbHZlKGV4cHJlc3Npb24sIGNvbnRleHQsIGRlZmF1bHRPZihhcmd1bWVudHNbMF0pLCB0aW1lb3V0KTtcblx0XHR9XG5cdFx0aWYgKHR5cGVvZiBhRXhwcmVzc2lvbiAhPT0gXCJzdHJpbmdcIikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkV4cHJlc3Npb25SZXNvbHZlci5yZXNvbHZlIHRha2VzIGEgc3RyaW5nIG9yIGEgY29uZmlndXJhdGlvbiBvYmplY3QhXCIpO1xuXG5cdFx0Y29uc3QgcmVzb2x2ZXIgPSBuZXcgRXhwcmVzc2lvblJlc29sdmVyKHsgY29udGV4dDogYUNvbnRleHQgfSk7XG5cdFx0Y29uc3QgZGVmYXVsdFZhbHVlID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgPyB0b0RlZmF1bHRWYWx1ZShhRGVmYXVsdCkgOiBERUZBVUxUX05PVF9ERUZJTkVEO1xuXHRcdGlmICh0eXBlb2YgYVRpbWVvdXQgPT09IFwibnVtYmVyXCIgJiYgYVRpbWVvdXQgPiAwKVxuXHRcdFx0cmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG5cdFx0XHRcdHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdFx0XHRcdHJlc29sdmUocmVzb2x2ZXIucmVzb2x2ZShhRXhwcmVzc2lvbiwgZGVmYXVsdFZhbHVlKSk7XG5cdFx0XHRcdH0sIGFUaW1lb3V0KTtcblx0XHRcdH0pO1xuXG5cdFx0cmV0dXJuIHJlc29sdmVyLnJlc29sdmUoYUV4cHJlc3Npb24sIGRlZmF1bHRWYWx1ZSk7XG5cdH1cblxuXHQvKipcblx0ICogUmVwbGFjZXMgZXZlcnkgZXhwcmVzc2lvbiBvZiBhIHRleHQgYWdhaW5zdCBhbiBhZC1ob2MgY29udGV4dCwgdGhyb3VnaCBhIHJlc29sdmVyIG9mIGl0cyBvd24sIGFzXG5cdCAqIHRoZSBpbnN0YW5jZSBgcmVzb2x2ZVRleHRgIGRvZXMuXG5cdCAqXG5cdCAqIEBvdmVybG9hZFxuXHQgKiBAcGFyYW0ge3N0cmluZ30gYVRleHRcblx0ICogQHBhcmFtIHs/b2JqZWN0fSBbYUNvbnRleHRdXG5cdCAqIEBwYXJhbSB7Kn0gW2FEZWZhdWx0XSByZXBsYWNlcyBhIHJlc3VsdCBvZiBudWxsIG9yIHVuZGVmaW5lZCwgcGVyIGV4cHJlc3Npb24sIHdoZXJlIGl0IGlzXG5cdCAqIHBhc3NlZFxuXHQgKiBAcGFyYW0gez9udW1iZXJ9IFthVGltZW91dF0gZGVsYXlzIHRoZSBzdGFydCBieSB0aGF0IG1hbnkgbWlsbGlzZWNvbmRzOyBubyBkZWFkbGluZVxuXHQgKiBAcmV0dXJucyB7UHJvbWlzZTxzdHJpbmc+fVxuXHQgKiBAdGhyb3dzIHtUeXBlRXJyb3J9IHdoZXJlIHRoZSB0ZXh0IGlzIG5vIHN0cmluZywgb3IgdGhlIGNvbnRleHQgaXMgYSBwcmltaXRpdmVcblx0ICovXG5cdC8qKlxuXHQgKiBSZXBsYWNlcyBldmVyeSBleHByZXNzaW9uIG9mIGEgdGV4dCBhZ2FpbnN0IGFuIGFkLWhvYyBjb250ZXh0LCBhcyB0aGUgcG9zaXRpb25hbCBmb3JtIGRvZXMsXG5cdCAqIHdpdGggdGhlIGFyZ3VtZW50cyBpbiBvbmUgY29uZmlndXJhdGlvbiBvYmplY3QuIEEgZGVmYXVsdCBjb3VudHMgYXMgcGFzc2VkIHdoZXJlIHRoZSBrZXlcblx0ICogYGRlZmF1bHRWYWx1ZWAgaXMgcHJlc2VudCwgd2hhdGV2ZXIgaXQgaG9sZHMuXG5cdCAqXG5cdCAqIEBvdmVybG9hZFxuXHQgKiBAcGFyYW0ge3sgdGV4dDogc3RyaW5nLCBjb250ZXh0PzogP29iamVjdCwgZGVmYXVsdFZhbHVlPzogKiwgdGltZW91dD86ID9udW1iZXIgfX0gYUNvbmZpZ3VyYXRpb25cblx0ICogQHJldHVybnMge1Byb21pc2U8c3RyaW5nPn1cblx0ICogQHRocm93cyB7VHlwZUVycm9yfSB3aGVyZSB0aGUgY29uZmlndXJhdGlvbiBjYXJyaWVzIG5vIHN0cmluZyB1bmRlciBgdGV4dGAsIG9yIHRoZSBjb250ZXh0IGlzXG5cdCAqIGEgcHJpbWl0aXZlXG5cdCAqL1xuXHQvKipcblx0ICogVGFrZXMgdGhlIGFyZ3VtZW50cyBwb3NpdGlvbmFsbHksIG9yIG9uZSBjb25maWd1cmF0aW9uIG9iamVjdFxuXHQgKiBgeyB0ZXh0LCBjb250ZXh0LCBkZWZhdWx0VmFsdWUsIHRpbWVvdXQgfWAsIGJlaGluZCB3aGljaCBldmVyeSBhcmd1bWVudCBpcyBpZ25vcmVkLiBBIGZpcnN0XG5cdCAqIGFyZ3VtZW50IHRoYXQgaXMgbmVpdGhlciBhIHN0cmluZyBub3IgYW4gb2JqZWN0LCBhbmQgYSBjb25maWd1cmF0aW9uIHdpdGhvdXQgYSBzdHJpbmcgdW5kZXJcblx0ICogYHRleHRgLCByZWplY3Qgd2l0aCBhIGBUeXBlRXJyb3JgLlxuXHQgKlxuXHQgKiBAc3RhdGljXG5cdCAqIEBhc3luY1xuXHQgKiBAcGFyYW0ge3N0cmluZ3x7IHRleHQ6IHN0cmluZywgY29udGV4dD86ID9vYmplY3QsIGRlZmF1bHRWYWx1ZT86ICosIHRpbWVvdXQ/OiA/bnVtYmVyIH19IGFUZXh0XG5cdCAqIEBwYXJhbSB7P29iamVjdH0gW2FDb250ZXh0XVxuXHQgKiBAcGFyYW0geyp9IFthRGVmYXVsdF1cblx0ICogQHBhcmFtIHs/bnVtYmVyfSBbYVRpbWVvdXRdXG5cdCAqIEByZXR1cm5zIHtQcm9taXNlPHN0cmluZz59XG5cdCAqL1xuXHRzdGF0aWMgYXN5bmMgcmVzb2x2ZVRleHQoYVRleHQsIGFDb250ZXh0LCBhRGVmYXVsdCwgYVRpbWVvdXQpIHtcdFx0XG5cdFx0aWYgKGlzQ29uZmlndXJhdGlvbihhcmd1bWVudHNbMF0pKSB7XG5cdFx0XHRjb25zdCB7IHRleHQsIGNvbnRleHQsIHRpbWVvdXQgfSA9IGFyZ3VtZW50c1swXTtcblx0XHRcdGlmICh0eXBlb2YgdGV4dCAhPT0gXCJzdHJpbmdcIikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkV4cHJlc3Npb25SZXNvbHZlci5yZXNvbHZlVGV4dCB0YWtlcyBhIGNvbmZpZ3VyYXRpb24gY2FycnlpbmcgdGhlIHRleHQgYXMgYSBzdHJpbmcgdW5kZXIgdGhlIGtleSB0ZXh0IVwiKTtcblx0XHRcdHJldHVybiBFeHByZXNzaW9uUmVzb2x2ZXIucmVzb2x2ZVRleHQodGV4dCwgY29udGV4dCwgZGVmYXVsdE9mKGFyZ3VtZW50c1swXSksIHRpbWVvdXQpO1xuXHRcdH1cblx0XHRpZiAodHlwZW9mIGFUZXh0ICE9PSBcInN0cmluZ1wiKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRXhwcmVzc2lvblJlc29sdmVyLnJlc29sdmVUZXh0IHRha2VzIGEgc3RyaW5nIG9yIGEgY29uZmlndXJhdGlvbiBvYmplY3QhXCIpO1xuXG5cdFx0Y29uc3QgcmVzb2x2ZXIgPSBuZXcgRXhwcmVzc2lvblJlc29sdmVyKHsgY29udGV4dDogYUNvbnRleHQgfSk7XG5cdFx0Y29uc3QgZGVmYXVsdFZhbHVlID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgPyB0b0RlZmF1bHRWYWx1ZShhRGVmYXVsdCkgOiBERUZBVUxUX05PVF9ERUZJTkVEO1xuXHRcdGlmICh0eXBlb2YgYVRpbWVvdXQgPT09IFwibnVtYmVyXCIgJiYgYVRpbWVvdXQgPiAwKVxuXHRcdFx0cmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG5cdFx0XHRcdHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdFx0XHRcdHJlc29sdmUocmVzb2x2ZXIucmVzb2x2ZVRleHQoYVRleHQsIGRlZmF1bHRWYWx1ZSkpO1xuXHRcdFx0XHR9LCBhVGltZW91dCk7XG5cdFx0XHR9KTtcblxuXHRcdHJldHVybiByZXNvbHZlci5yZXNvbHZlVGV4dChhVGV4dCwgZGVmYXVsdFZhbHVlKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBCdWlsZHMgYSByZXNvbHZlciBvdmVyIGEgZmlsdGVyZWQgY29weSBvZiB0aGUgY29udGV4dC5cblx0ICpcblx0ICogVGhlIGZpbHRlciBpcyBhcHBsaWVkIHRvIHRoZSBjb250ZXh0IG9ubHksIG5ldmVyIHRvIHRoZSBnbG9iYWxzLCBzbyB0aGlzIGlzIGEgd2F5IHRvIGhhbmRcblx0ICogb3ZlciBhIGNsZWFuZWQgY29udGV4dCBhbmQgbm90IGEgc2FuZGJveC5cblx0ICpcblx0ICogYG9wdGlvbmAgY2FycmllcyB0aGUgZmlsdGVyJ3Mgb3duIGBkZWVwYCB0b2dldGhlciB3aXRoIHRoZSBjb25zdHJ1Y3RvciBvcHRpb25zIGBuYW1lYCxcblx0ICogYHBhcmVudGAgYW5kIGBleGVjdXRlcmAsIHdoaWNoIGFyZSBoYW5kZWQgb24gYXMgdGhleSBhcmUuXG5cdCAqXG5cdCAqIEBzdGF0aWNcblx0ICogQHBhcmFtIHtvYmplY3R9IGFyZyB0aGUgZmlsdGVyIGFyZ3VtZW50cywgcGx1cyB0aGUgd2hvbGUgY29uc3RydWN0b3Igb3B0aW9uIHNldFxuXHQgKiBAcGFyYW0ge29iamVjdH0gYXJnLmNvbnRleHQgdGhlIG9iamVjdCB0byBjb3B5OyBpdCBpcyBsZWZ0IHVudG91Y2hlZFxuXHQgKiBAcGFyYW0geyhuYW1lOiBzdHJpbmcsIHZhbHVlOiAqLCBob2xkZXI6IG9iamVjdCkgPT4gYm9vbGVhbn0gYXJnLnByb3BGaWx0ZXIgY2FsbGVkIHdpdGggbmFtZSxcblx0ICogdmFsdWUgYW5kIHRoZSBvYmplY3QgaG9sZGluZyBpdCBmb3IgZXZlcnkgZW51bWVyYWJsZSBwcm9wZXJ0eSwgaW5oZXJpdGVkIG9uZXMgaW5jbHVkZWQ7IGFcblx0ICogcHJvcGVydHkgaXQgYW5zd2VycyBmYWxzZSBmb3IgaXMgbGVmdCBvdXQgb2YgdGhlIGNvcHlcblx0ICogQHBhcmFtIHtvYmplY3R9IFthcmcub3B0aW9uPXsgZGVlcDogdHJ1ZSwgbmFtZTogbnVsbCwgcGFyZW50OiBudWxsLCBleGVjdXRlcjogbnVsbCB9XVxuXHQgKiBAcGFyYW0ge2Jvb2xlYW59IFthcmcub3B0aW9uLmRlZXA9dHJ1ZV0gZmlsdGVycyBzdWIgb2JqZWN0cyBhcyB3ZWxsXG5cdCAqIEBwYXJhbSB7P3N0cmluZ30gW2FyZy5vcHRpb24ubmFtZT1udWxsXVxuXHQgKiBAcGFyYW0gez9FeHByZXNzaW9uUmVzb2x2ZXJ9IFthcmcub3B0aW9uLnBhcmVudD1udWxsXVxuXHQgKiBAcGFyYW0gez8oc3RyaW5nfEV4ZWN1dGVyKX0gW2FyZy5vcHRpb24uZXhlY3V0ZXI9bnVsbF1cblx0ICogQHJldHVybnMge0V4cHJlc3Npb25SZXNvbHZlcn1cblx0ICogQHRocm93cyB7VHlwZUVycm9yfSB3aGVyZSBhIGNvbnN0cnVjdG9yIG9wdGlvbiBpcyBvZiB0aGUgd3Jvbmcga2luZCwgYXMgdGhlIGNvbnN0cnVjdG9yIHRocm93c1xuXHQgKi9cblx0c3RhdGljIGJ1aWxkRmlsdGVyZWQoeyBjb250ZXh0LCBwcm9wRmlsdGVyLCBvcHRpb24gPSB7IGRlZXA6IHRydWUsIG5hbWU6IG51bGwsIHBhcmVudDogbnVsbCwgZXhlY3V0ZXI6IG51bGwgfSB9KSB7XG5cdFx0Y29uc3QgeyBkZWVwID0gdHJ1ZSwgbmFtZSwgcGFyZW50LCBleGVjdXRlciB9ID0gb3B0aW9uO1xuXHRcdGNvbnRleHQgPSBPYmplY3RVdGlscy5maWx0ZXIoY29udGV4dCwgcHJvcEZpbHRlciwge2RlZXB9KTtcblx0XHRyZXR1cm4gbmV3IEV4cHJlc3Npb25SZXNvbHZlcih7IGNvbnRleHQsIG5hbWUsIHBhcmVudCwgZXhlY3V0ZXIgfSk7XG5cdH1cblxuXHQvKipcblx0ICogVGhlIGZvcm1lciBuYW1lIG9mIGBidWlsZEZpbHRlcmVkYC4gSXQgcHJvbWlzZWQgYSBzZWN1cml0eSB0aGUgbWV0aG9kIGRvZXMgbm90IGdpdmUuXG5cdCAqXG5cdCAqIEBkZXByZWNhdGVkIHVzZSBgYnVpbGRGaWx0ZXJlZGBcblx0ICogQHN0YXRpY1xuXHQgKiBAcGFyYW0ge1BhcmFtZXRlcnM8dHlwZW9mIEV4cHJlc3Npb25SZXNvbHZlci5idWlsZEZpbHRlcmVkPlswXX0gYXJnIHRoZSBhcmd1bWVudHMgb2Zcblx0ICogYGJ1aWxkRmlsdGVyZWRgXG5cdCAqIEByZXR1cm5zIHtFeHByZXNzaW9uUmVzb2x2ZXJ9XG5cdCAqL1xuXHRzdGF0aWMgYnVpbGRTZWN1cmUoYXJnKSB7XG5cdFx0cmV0dXJuIEV4cHJlc3Npb25SZXNvbHZlci5idWlsZEZpbHRlcmVkKGFyZyk7XG5cdH1cbn1cblxuIiwiLyoqXG4gKiBGaW5kcyB0aGUgZXhwcmVzc2lvbnMgb2YgYSB0ZXh0IGFuZCB0YWtlcyBhIHNpbmdsZSBleHByZXNzaW9uIGFwYXJ0LiBJdCByZWFkcyB3aGVyZSBhbiBleHByZXNzaW9uXG4gKiBiZWdpbnMgYW5kIGVuZHMsIHdoZXRoZXIgaXQgaXMgZXNjYXBlZCwgYW5kIHdoaWNoIHNjb3BlIHByZWZpeCBpdCBjYXJyaWVzOyBldmFsdWF0aW5nIGEgc3RhdGVtZW50XG4gKiBhbmQgYWRkcmVzc2luZyBhIHNjb3BlIGlzIEV4cHJlc3Npb25SZXNvbHZlcidzLlxuICpcbiAqIEludGVybmFsIHRvIHRoZSBwYWNrYWdlOiBpbmRleC5qcyBkb2VzIG5vdCBleHBvcnQgaXQuXG4gKi9cblxuaW1wb3J0IHsgV0hJVEVTUEFDRSwgaXNOYW1lQ2hhcmFjdGVyLCB0cmltVG9OdWxsIH0gZnJvbSBcIi4vVXRpbHMuanNcIjtcblxuY29uc3QgRVhQUkVTU0lPTl9TVEFSVCA9IFwiJHtcIjtcblxuLy8gdGhlIHNjYW5uZXIgc3RhdGVzIC0gZXZlcnl0aGluZyB0aGF0IGlzIG5vdCBjb2RlIGhpZGVzIHRoZSBicmFjZXMgaW5zaWRlIGl0XG5jb25zdCBDT0RFID0gMDtcbmNvbnN0IFNJTkdMRV9RVU9URUQgPSAxO1xuY29uc3QgRE9VQkxFX1FVT1RFRCA9IDI7XG5jb25zdCBURU1QTEFURSA9IDM7XG5jb25zdCBSRUdFWCA9IDQ7XG5jb25zdCBSRUdFWF9DTEFTUyA9IDU7XG5jb25zdCBCTE9DS19DT01NRU5UID0gNjtcbmNvbnN0IExJTkVfQ09NTUVOVCA9IDc7XG5cbi8vIGEgXCIvXCIgY29udGludWVzIGFuIGV4cHJlc3Npb24gaW5zdGVhZCBvZiBvcGVuaW5nIGEgcmVndWxhciBleHByZXNzaW9uIHdoZW4gaXQgZm9sbG93cyBvbmUgb2Zcbi8vIHRoZXNlIC0gdGhlIGNsYXNzaWMgZGl2aXNpb24tb3ItcmVnZXggcXVlc3Rpb24sIGRlY2lkZWQgb24gdGhlIGxhc3QgY2hhcmFjdGVyIHRoYXQgaXMgbmVpdGhlclxuLy8gd2hpdGVzcGFjZSBub3IgcGFydCBvZiBhIGNvbW1lbnRcbmNvbnN0IEJFRk9SRV9ESVZJU0lPTiA9IC9bYS16QS1aMC05XyQpXFxdXS87XG5cbi8vIHRoZSBjaGFyYWN0ZXJzIHRoZSBzY2FubmVyIGRlY2lkZXMgb24sIGNvbXBhcmVkIGFzIGNoYXIgY29kZXMgcmF0aGVyIHRoYW4gYXMgb25lLWNoYXJhY3RlciBzdHJpbmdzXG5jb25zdCBCQUNLU0xBU0ggPSAweDVjO1xuY29uc3QgRE9MTEFSID0gMHgyNDtcbmNvbnN0IE9QRU5fQlJBQ0UgPSAweDdiO1xuY29uc3QgQ0xPU0VfQlJBQ0UgPSAweDdkO1xuY29uc3QgU0lOR0xFX1FVT1RFID0gMHgyNztcbmNvbnN0IERPVUJMRV9RVU9URSA9IDB4MjI7XG5jb25zdCBCQUNLVElDSyA9IDB4NjA7XG5jb25zdCBTTEFTSCA9IDB4MmY7XG5jb25zdCBTVEFSID0gMHgyYTtcbmNvbnN0IExJTkVfRkVFRCA9IDB4MGE7XG5jb25zdCBDQVJSSUFHRV9SRVRVUk4gPSAweDBkO1xuY29uc3QgTElORV9TRVBBUkFUT1IgPSAweDIwMjg7XG5jb25zdCBQQVJBR1JBUEhfU0VQQVJBVE9SID0gMHgyMDI5O1xuY29uc3QgT1BFTl9CUkFDS0VUID0gMHg1YjtcbmNvbnN0IENMT1NFX0JSQUNLRVQgPSAweDVkO1xuY29uc3QgQ09MT04gPSAweDNhO1xuXG5jb25zdCBTQ09QRV9TRVBBUkFUT1IgPSBcIjo6XCI7XG5cbi8qKlxuICogV2hldGhlciB0aGUgXCIvXCIgYXQgYUluZGV4IG9wZW5zIGEgcmVndWxhciBleHByZXNzaW9uIGxpdGVyYWwsIGRlY2lkZWQgb24gdGhlIGNoYXJhY3RlciBiZWZvcmUgaXRcbiAqIHRoYXQgaXMgbmVpdGhlciB3aGl0ZXNwYWNlIG5vciBwYXJ0IG9mIGEgY29tbWVudC5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gYVRleHRcbiAqIEBwYXJhbSB7bnVtYmVyfSBhSW5kZXhcbiAqIEBwYXJhbSB7P0FycmF5PG51bWJlcj59IHRoZUNvbW1lbnRzIHRoZSBjb21tZW50cyByZWFkIHNvIGZhciBhcyBmbGF0IHN0YXJ0IGFuZCBlbmQgaW5kZXggcGFpcnMsIGluXG4gKiB0aGUgb3JkZXIgdGhleSBzdGFuZDsgbnVsbCB3aGVyZSB0aGUgZXhwcmVzc2lvbiBoYXMgbm9uZVxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbmNvbnN0IHNsYXNoT3BlbnNSZWdleCA9IChhVGV4dCwgYUluZGV4LCB0aGVDb21tZW50cykgPT4ge1xuXHRsZXQgaW5kZXggPSBhSW5kZXggLSAxO1xuXHRsZXQgY29tbWVudCA9IHRoZUNvbW1lbnRzID8gdGhlQ29tbWVudHMubGVuZ3RoIC0gMSA6IC0xO1xuXHR3aGlsZSAoaW5kZXggPj0gMCkge1xuXHRcdHdoaWxlIChpbmRleCA+PSAwICYmIFdISVRFU1BBQ0UudGVzdChhVGV4dFtpbmRleF0pKSBpbmRleC0tO1xuXHRcdC8vIGEgbGluZSBjb21tZW50IG1heSBlbmQgaW4gd2hpdGVzcGFjZSwgc28gdGhlIHdhbGsgY2FuIGxhbmQgaW5zaWRlIGl0IHJhdGhlciB0aGFuIG9uIGl0cyBlbmRcblx0XHRpZiAoY29tbWVudCA8IDAgfHwgaW5kZXggPCB0aGVDb21tZW50c1tjb21tZW50IC0gMV0gfHwgaW5kZXggPiB0aGVDb21tZW50c1tjb21tZW50XSkgYnJlYWs7XG5cblx0XHRpbmRleCA9IHRoZUNvbW1lbnRzW2NvbW1lbnQgLSAxXSAtIDE7XG5cdFx0Y29tbWVudCAtPSAyO1xuXHR9XG5cblx0cmV0dXJuIGluZGV4IDwgMCB8fCAhQkVGT1JFX0RJVklTSU9OLnRlc3QoYVRleHRbaW5kZXhdKTtcbn07XG5cbi8qKlxuICogV2hldGhlciBhIGNoYXIgY29kZSBlbmRzIGEgbGluZSBjb21tZW50IC0gYSBsaW5lIHRlcm1pbmF0b3IgaW4gdGhlIHNlbnNlIG9mIEVDTUFTY3JpcHQuXG4gKlxuICogQHBhcmFtIHtudW1iZXJ9IGFDb2RlXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuY29uc3QgaXNMaW5lVGVybWluYXRvciA9IChhQ29kZSkgPT4gYUNvZGUgPT09IExJTkVfRkVFRCB8fCBhQ29kZSA9PT0gQ0FSUklBR0VfUkVUVVJOIHx8IGFDb2RlID09PSBMSU5FX1NFUEFSQVRPUiB8fCBhQ29kZSA9PT0gUEFSQUdSQVBIX1NFUEFSQVRPUjtcblxuLypcbiAqIFR3byBzcGxpdHMgdGFrZSB0aGUgdGV4dCBiZXR3ZWVuIHRoZSBkZWxpbWl0ZXJzIGFwYXJ0IGludG8gdGhlIHNjb3BlIHByZWZpeCBhbmQgdGhlXG4gKiBzdGF0ZW1lbnQgLSB0aGlzIG9uZSBmb3IgYSB0ZXh0LCBgc3BsaXRTY29wZUFuZFN0YXRlbWVudEJ5U2VwYXJhdG9yYCBiZWhpbmQgYHBhcnNlRXhwcmVzc2lvbmAgZm9yXG4gKiB0aGUgc2luZ2xlIGV4cHJlc3Npb24gb2YgYHJlc29sdmVgLiBUaGV5IGFyZSB0d28gaW1wbGVtZW50YXRpb25zIG9mIHRoZSBvbmUgcnVsZSwgZWFjaCBtZWFzdXJlZFxuICogZmFzdGVyIGZvciBvdGhlciBzdGF0ZW1lbnRzOiBhIHRleHQgcmVhZHMgZm9yd2FyZHMsIHRoZSBzaW5nbGUgZXhwcmVzc2lvbiBmcm9tIHRoZSBmaXJzdCBcIjo6XCJcbiAqIGJhY2t3YXJkcy4gQm90aCBoYXZlIHRvIGFuc3dlciBldmVyeSBjYXNlIGFsaWtlLlxuICovXG5cbi8qKlxuICogVGhlIHNwbGl0IG9mIGEgdGV4dDogcmVhZHMgZm9yd2FyZHMgb25seSBhcyBmYXIgYXMgdGhlIGZpcnN0IGNoYXJhY3RlciBhIG5hbWUgY2Fubm90IGNhcnJ5LCB3aGljaFxuICogZm9yIG1vc3Qgc3RhdGVtZW50cyBpcyBhIGZldyBjaGFyYWN0ZXJzLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBhQ29udGVudCB0aGUgdGV4dCBiZXR3ZWVuIHRoZSBkZWxpbWl0ZXJzXG4gKiBAcmV0dXJucyB7eyBzY29wZTogP3N0cmluZywgc3RhdGVtZW50OiA/c3RyaW5nIH19IGJvdGggdHJpbW1lZCwgbnVsbCB3aGVyZSBlbXB0eVxuICovXG5jb25zdCBzcGxpdFNjb3BlQW5kU3RhdGVtZW50Rm9yd2FyZCA9IChhQ29udGVudCkgPT4ge1xuXHRjb25zdCBsZW5ndGggPSBhQ29udGVudC5sZW5ndGg7XG5cdGxldCBpbmRleCA9IDA7XG5cdHdoaWxlIChpbmRleCA8IGxlbmd0aCAmJiBpc05hbWVDaGFyYWN0ZXIoYUNvbnRlbnQuY2hhckNvZGVBdChpbmRleCkpKSBpbmRleCsrO1xuXG5cdGlmIChhQ29udGVudC5jaGFyQ29kZUF0KGluZGV4KSAhPT0gQ09MT04gfHwgYUNvbnRlbnQuY2hhckNvZGVBdChpbmRleCArIDEpICE9PSBDT0xPTilcblx0XHRyZXR1cm4geyBzY29wZTogbnVsbCwgc3RhdGVtZW50OiB0cmltVG9OdWxsKGFDb250ZW50KSB9O1xuXG5cdC8vIGFuIGVtcHR5IG5hbWUgaXMgbm8gbmFtZSwgYnV0IGl0cyBzZXBhcmF0b3IgZ29lcyB3aXRoIGl0IGFsbCB0aGUgc2FtZVxuXHRyZXR1cm4geyBzY29wZTogdHJpbVRvTnVsbChhQ29udGVudC5zdWJzdHJpbmcoMCwgaW5kZXgpKSwgc3RhdGVtZW50OiB0cmltVG9OdWxsKGFDb250ZW50LnN1YnN0cmluZyhpbmRleCArIDIpKSB9O1xufTtcblxuLyoqXG4gKiBUaGUgbnVtYmVyIG9mIGJhY2tzbGFzaGVzIHN0YW5kaW5nIGRpcmVjdGx5IGluIGZyb250IG9mIHRoZSBpbmRleC5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gYVRleHRcbiAqIEBwYXJhbSB7bnVtYmVyfSBhSW5kZXhcbiAqIEByZXR1cm5zIHtudW1iZXJ9XG4gKi9cbmNvbnN0IGNvdW50QmFja3NsYXNoZXNCZWZvcmUgPSAoYVRleHQsIGFJbmRleCkgPT4ge1xuXHRsZXQgY291bnQgPSAwO1xuXHR3aGlsZSAoYUluZGV4IC0gY291bnQgPiAwICYmIGFUZXh0LmNoYXJDb2RlQXQoYUluZGV4IC0gY291bnQgLSAxKSA9PT0gQkFDS1NMQVNIKSBjb3VudCsrO1xuXG5cdHJldHVybiBjb3VudDtcbn07XG5cbi8qKlxuICogUmVhZHMgdGhlIG9uZSBleHByZXNzaW9uIHdob3NlIFwiJHtcIiBzdGFuZHMgYXQgYVN0YXJ0LCBjb3VudGluZyBicmFjZXMgYnV0IG5vdCB0aGUgb25lcyBoaWRkZW5cbiAqIGluc2lkZSBhIGxpdGVyYWwgb3IgYSBjb21tZW50LCBhbmQgdGFrZXMgaXQgYXBhcnQgaW50byBzY29wZSBwcmVmaXggYW5kIHN0YXRlbWVudC5cbiAqXG4gKiBBbnN3ZXJzIHRoZSBvY2N1cnJlbmNlIGBzY2FuYCBoYW5kcyBvbiwgYGVuZGAgdGhlIGluZGV4IGRpcmVjdGx5IGFmdGVyIHRoZSBtYXRjaGluZyBjbG9zaW5nIGJyYWNlO1xuICogbnVsbCB3aGVyZSB0aGUgdGV4dCBlbmRzIGJlZm9yZSB0aGF0IGJyYWNlLCB3aGljaCBtZWFucyB0aGVyZSBpcyBub1xuICogZXhwcmVzc2lvbiBoZXJlIGF0IGFsbDsgYW5kLCB3aXRoIGBlbmRgIG5lZ2F0ZWQsIHRoZSBpbmRleCBvZiBhbm90aGVyIFwiJHtcIiBtZXQgb3V0c2lkZSBhIGxpdGVyYWxcbiAqIG9yIGEgY29tbWVudCwgd2hpY2ggc3RhcnRzIGFuIGV4cHJlc3Npb24gb2YgaXRzIG93biBhbmQgYWJhbmRvbnMgdGhpcyBvbmUuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGFUZXh0XG4gKiBAcGFyYW0ge251bWJlcn0gYVN0YXJ0XG4gKiBAcmV0dXJucyB7P3sgc3RhcnQ6IG51bWJlciwgZW5kOiBudW1iZXIsIGVzY2FwZWQ6IGJvb2xlYW4sIHNjb3BlOiA/c3RyaW5nLCBzdGF0ZW1lbnQ6ID9zdHJpbmcgfX1cbiAqL1xuY29uc3QgcmVhZEV4cHJlc3Npb24gPSAoYVRleHQsIGFTdGFydCkgPT4ge1xuXHRjb25zdCBsZW5ndGggPSBhVGV4dC5sZW5ndGg7XG5cdGNvbnN0IHN0YWNrID0gW0NPREVdO1xuXHRsZXQgY29tbWVudHMgPSBudWxsO1xuXHRsZXQgY29tbWVudFN0YXJ0ID0gMDtcblx0bGV0IGluZGV4ID0gYVN0YXJ0ICsgMjtcblxuXHR3aGlsZSAoaW5kZXggPCBsZW5ndGgpIHtcblx0XHRjb25zdCBjaGFyID0gYVRleHQuY2hhckNvZGVBdChpbmRleCk7XG5cdFx0c3dpdGNoIChzdGFja1tzdGFjay5sZW5ndGggLSAxXSkge1xuXHRcdFx0Y2FzZSBDT0RFOlxuXHRcdFx0XHRpZiAoY2hhciA9PT0gT1BFTl9CUkFDRSkgc3RhY2sucHVzaChDT0RFKTtcblx0XHRcdFx0ZWxzZSBpZiAoY2hhciA9PT0gQ0xPU0VfQlJBQ0UpIHtcblx0XHRcdFx0XHRzdGFjay5wb3AoKTtcblx0XHRcdFx0XHRpZiAoc3RhY2subGVuZ3RoID09PSAwKSB7XG5cdFx0XHRcdFx0XHRjb25zdCB7IHNjb3BlLCBzdGF0ZW1lbnQgfSA9IHNwbGl0U2NvcGVBbmRTdGF0ZW1lbnRGb3J3YXJkKGFUZXh0LnN1YnN0cmluZyhhU3RhcnQgKyAyLCBpbmRleCkpO1xuXHRcdFx0XHRcdFx0cmV0dXJuIHsgc3RhcnQ6IGFTdGFydCwgZW5kOiBpbmRleCArIDEsIGVzY2FwZWQ6IGZhbHNlLCBzY29wZTogc2NvcGUsIHN0YXRlbWVudDogc3RhdGVtZW50IH07XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9IGVsc2UgaWYgKGNoYXIgPT09IFNJTkdMRV9RVU9URSkgc3RhY2sucHVzaChTSU5HTEVfUVVPVEVEKTtcblx0XHRcdFx0ZWxzZSBpZiAoY2hhciA9PT0gRE9VQkxFX1FVT1RFKSBzdGFjay5wdXNoKERPVUJMRV9RVU9URUQpO1xuXHRcdFx0XHRlbHNlIGlmIChjaGFyID09PSBCQUNLVElDSykgc3RhY2sucHVzaChURU1QTEFURSk7XG5cdFx0XHRcdGVsc2UgaWYgKGNoYXIgPT09IERPTExBUiAmJiBhVGV4dC5jaGFyQ29kZUF0KGluZGV4ICsgMSkgPT09IE9QRU5fQlJBQ0UpIHJldHVybiB7IHN0YXJ0OiBhU3RhcnQsIGVuZDogLWluZGV4LCBlc2NhcGVkOiBmYWxzZSwgc2NvcGU6IG51bGwsIHN0YXRlbWVudDogbnVsbCB9O1xuXHRcdFx0XHRlbHNlIGlmIChjaGFyID09PSBTTEFTSCkge1xuXHRcdFx0XHRcdGNvbnN0IG5leHQgPSBhVGV4dC5jaGFyQ29kZUF0KGluZGV4ICsgMSk7XG5cdFx0XHRcdFx0aWYgKG5leHQgPT09IFNUQVIgfHwgbmV4dCA9PT0gU0xBU0gpIHtcblx0XHRcdFx0XHRcdHN0YWNrLnB1c2gobmV4dCA9PT0gU1RBUiA/IEJMT0NLX0NPTU1FTlQgOiBMSU5FX0NPTU1FTlQpO1xuXHRcdFx0XHRcdFx0Y29tbWVudFN0YXJ0ID0gaW5kZXg7XG5cdFx0XHRcdFx0XHRpbmRleCsrO1xuXHRcdFx0XHRcdH0gZWxzZSBpZiAoc2xhc2hPcGVuc1JlZ2V4KGFUZXh0LCBpbmRleCwgY29tbWVudHMpKSBzdGFjay5wdXNoKFJFR0VYKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgQkxPQ0tfQ09NTUVOVDpcblx0XHRcdFx0aWYgKGNoYXIgPT09IFNUQVIgJiYgYVRleHQuY2hhckNvZGVBdChpbmRleCArIDEpID09PSBTTEFTSCkge1xuXHRcdFx0XHRcdHN0YWNrLnBvcCgpO1xuXHRcdFx0XHRcdGluZGV4Kys7XG5cdFx0XHRcdFx0KGNvbW1lbnRzID8/PSBbXSkucHVzaChjb21tZW50U3RhcnQsIGluZGV4KTtcblx0XHRcdFx0fVxuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgTElORV9DT01NRU5UOlxuXHRcdFx0XHRpZiAoaXNMaW5lVGVybWluYXRvcihjaGFyKSkge1xuXHRcdFx0XHRcdHN0YWNrLnBvcCgpO1xuXHRcdFx0XHRcdChjb21tZW50cyA/Pz0gW10pLnB1c2goY29tbWVudFN0YXJ0LCBpbmRleCAtIDEpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSBTSU5HTEVfUVVPVEVEOlxuXHRcdFx0XHRpZiAoY2hhciA9PT0gQkFDS1NMQVNIKSBpbmRleCsrO1xuXHRcdFx0XHRlbHNlIGlmIChjaGFyID09PSBTSU5HTEVfUVVPVEUpIHN0YWNrLnBvcCgpO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgRE9VQkxFX1FVT1RFRDpcblx0XHRcdFx0aWYgKGNoYXIgPT09IEJBQ0tTTEFTSCkgaW5kZXgrKztcblx0XHRcdFx0ZWxzZSBpZiAoY2hhciA9PT0gRE9VQkxFX1FVT1RFKSBzdGFjay5wb3AoKTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlIFRFTVBMQVRFOlxuXHRcdFx0XHRpZiAoY2hhciA9PT0gQkFDS1NMQVNIKSBpbmRleCsrO1xuXHRcdFx0XHRlbHNlIGlmIChjaGFyID09PSBCQUNLVElDSykgc3RhY2sucG9wKCk7XG5cdFx0XHRcdGVsc2UgaWYgKGNoYXIgPT09IERPTExBUiAmJiBhVGV4dC5jaGFyQ29kZUF0KGluZGV4ICsgMSkgPT09IE9QRU5fQlJBQ0UpIHtcblx0XHRcdFx0XHRzdGFjay5wdXNoKENPREUpO1xuXHRcdFx0XHRcdGluZGV4Kys7XG5cdFx0XHRcdH1cblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlIFJFR0VYOlxuXHRcdFx0XHRpZiAoY2hhciA9PT0gQkFDS1NMQVNIKSBpbmRleCsrO1xuXHRcdFx0XHRlbHNlIGlmIChjaGFyID09PSBPUEVOX0JSQUNLRVQpIHN0YWNrLnB1c2goUkVHRVhfQ0xBU1MpO1xuXHRcdFx0XHRlbHNlIGlmIChjaGFyID09PSBTTEFTSCkgc3RhY2sucG9wKCk7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSBSRUdFWF9DTEFTUzpcblx0XHRcdFx0aWYgKGNoYXIgPT09IEJBQ0tTTEFTSCkgaW5kZXgrKztcblx0XHRcdFx0ZWxzZSBpZiAoY2hhciA9PT0gQ0xPU0VfQlJBQ0tFVCkgc3RhY2sucG9wKCk7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdH1cblx0XHRpbmRleCsrO1xuXHR9XG5cblx0cmV0dXJuIG51bGw7XG59O1xuXG4vKipcbiAqIEFuc3dlcnMgZXZlcnkgZXhwcmVzc2lvbiBvZiBhIHRleHQsIGluIHRoZSBvcmRlciB0aGV5IHN0YW5kLCBvciBudWxsIHdoZXJlIHRoZSB0ZXh0IGNhcnJpZXNcbiAqIG5vbmUuIGBzdGFydGAgaXMgdGhlIGluZGV4IG9mIHRoZSBcIiRcIiwgYGVuZGAgdGhlIGluZGV4IGFmdGVyIHRoZSBtYXRjaGluZyBjbG9zaW5nIGJyYWNlLCBzbyBhXG4gKiBjYWxsZXIgcmVwbGFjZXMgYnkgcG9zaXRpb24gYW5kIG5ldmVyIHRvdWNoZXMgYW4gb2NjdXJyZW5jZSB0d2ljZS4gVGhlIHRleHQgYmV0d2VlbiB0d29cbiAqIGV4cHJlc3Npb25zIGlzIHNraXBwZWQgYnkgYSBuYXRpdmUgc2VhcmNoIGZvciB0aGUgbmV4dCBcIiR7XCIuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGFUZXh0XG4gKiBAcmV0dXJucyB7P0FycmF5PHsgc3RhcnQ6IG51bWJlciwgZW5kOiBudW1iZXIsIGVzY2FwZWQ6IGJvb2xlYW4sIHNjb3BlOiA/c3RyaW5nLCBzdGF0ZW1lbnQ6ID9zdHJpbmcgfT59XG4gKi9cbmV4cG9ydCBjb25zdCBzY2FuID0gKGFUZXh0KSA9PiB7XG5cdGxldCBvY2N1cnJlbmNlcyA9IG51bGw7XG5cdGxldCBzdGFydCA9IGFUZXh0LmluZGV4T2YoRVhQUkVTU0lPTl9TVEFSVCk7XG5cblx0d2hpbGUgKHN0YXJ0ID49IDApIHtcblx0XHQvLyBhbiBvZGQgcnVuIG9mIGJhY2tzbGFzaGVzIGVzY2FwZXMgdGhlIGRlbGltaXRlciBpdHNlbGYuIEl0IG9wZW5zIG5vdGhpbmcsIHNvIG9ubHlcblx0XHQvLyB0aG9zZSB0d28gY2hhcmFjdGVycyBhcmUgdGFrZW4gb3V0IG9mIHRoZSB0ZXh0IGFuZCB0aGUgc2NhbiBjYXJyaWVzIG9uIGJlaGluZCB0aGVtIC1cblx0XHQvLyB3aGF0IHdvdWxkIGhhdmUgYmVlbiB0aGUgc3RhdGVtZW50IGlzIG9yZGluYXJ5IHRleHQgYW5kIG1heSBob2xkIGV4cHJlc3Npb25zIG9mIGl0cyBvd24uXG5cdFx0aWYgKGNvdW50QmFja3NsYXNoZXNCZWZvcmUoYVRleHQsIHN0YXJ0KSAlIDIgPT09IDEpIHtcblx0XHRcdGlmICghb2NjdXJyZW5jZXMpIG9jY3VycmVuY2VzID0gW107XG5cdFx0XHRvY2N1cnJlbmNlcy5wdXNoKHsgc3RhcnQ6IHN0YXJ0LCBlbmQ6IHN0YXJ0ICsgMiwgZXNjYXBlZDogdHJ1ZSwgc2NvcGU6IG51bGwsIHN0YXRlbWVudDogbnVsbCB9KTtcblx0XHRcdHN0YXJ0ID0gYVRleHQuaW5kZXhPZihFWFBSRVNTSU9OX1NUQVJULCBzdGFydCArIDIpO1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXG5cdFx0Y29uc3Qgb2NjdXJyZW5jZSA9IHJlYWRFeHByZXNzaW9uKGFUZXh0LCBzdGFydCk7XG5cdFx0Ly8gbm8gbWF0Y2hpbmcgYnJhY2U6IHRoZSB0ZXh0IHN0YW5kcyBhcyB3cml0dGVuLCBhbmQgbm90aGluZyBiZWhpbmQgaXQgY2FuIGJlIGFuXG5cdFx0Ly8gZXhwcmVzc2lvbiBlaXRoZXIgLSBhIFwiJHtcIiBvdXRzaWRlIGEgbGl0ZXJhbCBvciBhIGNvbW1lbnQgd291bGQgaGF2ZSByZXN0YXJ0ZWQgdGhlIHNjYW4gaW5zdGVhZFxuXHRcdGlmICghb2NjdXJyZW5jZSkgYnJlYWs7XG5cdFx0aWYgKG9jY3VycmVuY2UuZW5kIDwgMCkge1xuXHRcdFx0c3RhcnQgPSAtb2NjdXJyZW5jZS5lbmQ7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cblx0XHRpZiAoIW9jY3VycmVuY2VzKSBvY2N1cnJlbmNlcyA9IFtdO1xuXHRcdG9jY3VycmVuY2VzLnB1c2gob2NjdXJyZW5jZSk7XG5cdFx0c3RhcnQgPSBhVGV4dC5pbmRleE9mKEVYUFJFU1NJT05fU1RBUlQsIG9jY3VycmVuY2UuZW5kKTtcblx0fVxuXG5cdHJldHVybiBvY2N1cnJlbmNlcztcbn07XG5cbi8qKlxuICogVGFrZXMgdGhlIG9uZSBleHByZXNzaW9uIGByZXNvbHZlYCBpcyBoYW5kZWQgYXBhcnQuXG4gKlxuICogV2hpY2ggZm9ybSBpcyBpbiBoYW5kIGlzIGRlY2lkZWQgYnkgdGhlIHR3byBlbmRzIG9mIHRoZSB0cmltbWVkIGlucHV0OiBhbiBpbnB1dCB0aGF0IG9wZW5zIHdpdGhcbiAqIFwiJHtcIiBhbmQgZW5kcyB3aXRoIFwifVwiIGlzIHRoZSBkZWxpbWl0ZWQgZm9ybSwgYW55dGhpbmcgZWxzZSBpcyBhIGJhcmUgc3RhdGVtZW50LiBUaGUgd2hvbGUgaW5wdXRcbiAqIGlzIG9uZSBleHByZXNzaW9uLCBzbyBpdHMgZW5kIGlzIHRoZSBlbmQgb2YgdGhlIGlucHV0LiBFc2NhcGluZyBhIGRlbGltaXRlciBkb2VzIG5vdCBhcHBseSBoZXJlIC1cbiAqIGl0IGlzIGEgcnVsZSBvZiB0aGUgdGV4dCBmb3JtLCBhbmQgdGhlcmUgaXMgbm8gc3Vycm91bmRpbmcgdGV4dCwgc28gYSBiYWNrc2xhc2ggYmVsb25ncyB0byB0aGVcbiAqIHN0YXRlbWVudC5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gYUV4cHJlc3Npb25cbiAqIEByZXR1cm5zIHt7IHNjb3BlOiA/c3RyaW5nLCBzdGF0ZW1lbnQ6ID9zdHJpbmcgfX1cbiAqL1xuZXhwb3J0IGNvbnN0IHBhcnNlRXhwcmVzc2lvbiA9IChhRXhwcmVzc2lvbikgPT4ge1xuXHRhRXhwcmVzc2lvbiA9IGFFeHByZXNzaW9uLnRyaW0oKTtcblxuXHRpZiAoYUV4cHJlc3Npb24uc3RhcnRzV2l0aChFWFBSRVNTSU9OX1NUQVJUKSAmJiBhRXhwcmVzc2lvbi5lbmRzV2l0aChcIn1cIikpXG5cdFx0cmV0dXJuIHNwbGl0U2NvcGVBbmRTdGF0ZW1lbnRCeVNlcGFyYXRvcihhRXhwcmVzc2lvbi5zdWJzdHJpbmcoMiwgYUV4cHJlc3Npb24ubGVuZ3RoIC0gMSkpO1xuXG5cdC8vIGFueXRoaW5nIGVsc2UgaXMgYSBzdGF0ZW1lbnQgaW4gZnVsbCwgYW5kIGNhcnJpZXMgbm8gc2NvcGUgcHJlZml4XG5cdHJldHVybiB7IHNjb3BlOiBudWxsLCBzdGF0ZW1lbnQ6IHRyaW1Ub051bGwoYUV4cHJlc3Npb24pIH07XG59O1xuXG4vKipcbiAqIFRoZSBzcGxpdCBvZiB0aGUgc2luZ2xlIGV4cHJlc3Npb246IG1vc3Qgc3RhdGVtZW50cyBjYXJyeSBubyBcIjo6XCIgYXQgYWxsIGFuZCBhcmUgZG9uZSBhZnRlciBvbmVcbiAqIG5hdGl2ZSBzZWFyY2guIFdoZXJlIG9uZSBzdGFuZHMsIGV2ZXJ5dGhpbmcgYmVmb3JlIHRoZSBmaXJzdCBvZiB0aGVtIGhhcyB0byBiZSBhIG5hbWUsIGNoZWNrZWRcbiAqIGJhY2t3YXJkcyBmcm9tIGl0OiBhIFwiOjpcIiBpbnNpZGUgYSBzdGF0ZW1lbnQgLSBhIHF1b3RlZCBvbmUgLSB1c3VhbGx5IGhhcyBhIGNoYXJhY3RlciBubyBuYW1lXG4gKiBjYXJyaWVzIHJpZ2h0IGluIGZyb250IG9mIGl0LlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBhQ29udGVudCB0aGUgdGV4dCBiZXR3ZWVuIHRoZSBkZWxpbWl0ZXJzXG4gKiBAcmV0dXJucyB7eyBzY29wZTogP3N0cmluZywgc3RhdGVtZW50OiA/c3RyaW5nIH19IGJvdGggdHJpbW1lZCwgbnVsbCB3aGVyZSBlbXB0eVxuICovXG5jb25zdCBzcGxpdFNjb3BlQW5kU3RhdGVtZW50QnlTZXBhcmF0b3IgPSAoYUNvbnRlbnQpID0+IHtcblx0Y29uc3QgZW5kID0gYUNvbnRlbnQuaW5kZXhPZihTQ09QRV9TRVBBUkFUT1IpO1xuXHRpZiAoZW5kIDwgMCkgcmV0dXJuIHsgc2NvcGU6IG51bGwsIHN0YXRlbWVudDogdHJpbVRvTnVsbChhQ29udGVudCkgfTtcblxuXHRmb3IgKGxldCBpbmRleCA9IGVuZCAtIDE7IGluZGV4ID49IDA7IGluZGV4LS0pXG5cdFx0aWYgKCFpc05hbWVDaGFyYWN0ZXIoYUNvbnRlbnQuY2hhckNvZGVBdChpbmRleCkpKSByZXR1cm4geyBzY29wZTogbnVsbCwgc3RhdGVtZW50OiB0cmltVG9OdWxsKGFDb250ZW50KSB9O1xuXG5cdHJldHVybiB7IHNjb3BlOiB0cmltVG9OdWxsKGFDb250ZW50LnN1YnN0cmluZygwLCBlbmQpKSwgc3RhdGVtZW50OiB0cmltVG9OdWxsKGFDb250ZW50LnN1YnN0cmluZyhlbmQgKyAyKSkgfTtcbn07XG4iLCJpbXBvcnQgR0xPQkFMIGZyb20gXCJAZGVmYXVsdC1qcy9kZWZhdWx0anMtY29tbW9uLXV0aWxzL3NyYy9HbG9iYWwuanNcIjtcbmltcG9ydCB7IGlzTnVsbE9yVW5kZWZpbmVkIH0gZnJvbSBcIkBkZWZhdWx0LWpzL2RlZmF1bHRqcy1jb21tb24tdXRpbHMvc3JjL09iamVjdFV0aWxzLmpzXCI7XG5cbi8qKlxuICogVGhlIGRlc2NyaXB0b3IgYSBwcm9wZXJ0eSBoYXMgd2hlcmUgaXQgaXMgZGVmaW5lZCAtIG93biBvciBhbnl3aGVyZSB1cCB0aGUgcHJvdG90eXBlIGNoYWluIG9mXG4gKiB0aGUgb2JqZWN0IGhvbGRpbmcgaXQuXG4gKlxuICogQHBhcmFtIHtvYmplY3R9IGRhdGFcbiAqIEBwYXJhbSB7c3RyaW5nfHN5bWJvbH0gcHJvcGVydHlcbiAqIEByZXR1cm5zIHtQcm9wZXJ0eURlc2NyaXB0b3J8bnVsbH1cbiAqL1xuY29uc3QgZmluZFByb3BlcnR5RGVzY3JpcHRvciA9IChkYXRhLCBwcm9wZXJ0eSkgPT4ge1xuXHRsZXQgdHlwZSA9IGRhdGE7XG5cdHdoaWxlICghaXNOdWxsT3JVbmRlZmluZWQodHlwZSkpIHtcblx0XHRjb25zdCBkZXNjcmlwdG9yID0gUmVmbGVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodHlwZSwgcHJvcGVydHkpO1xuXHRcdGlmIChkZXNjcmlwdG9yKSByZXR1cm4gZGVzY3JpcHRvcjtcblx0XHR0eXBlID0gUmVmbGVjdC5nZXRQcm90b3R5cGVPZih0eXBlKTtcblx0fVxuXG5cdHJldHVybiBudWxsO1xufTtcblxuLyoqXG4gKiBUaGUgbmFtZXMgYSBoYW5kbGUgcHJvdmlkZXMsIGVhY2ggbWFwcGVkIHRvIHRoZSBoYW5kbGUgcHJvdmlkaW5nIGl0OiBhIE1hcCwgb3IgdGhlIHN0YW5kLWluIG9mXG4gKiBgY3JlYXRlR2xvYmFsTmFtZUNhY2hlYCBvdmVyIHRoZSBnbG9iYWwgb2JqZWN0LCB3aGljaCBhbnN3ZXJzIHRoZSBzYW1lIGNhbGxzLlxuICpcbiAqIEB0eXBlZGVmIHtvYmplY3R9IE5hbWVDYWNoZVxuICogQHByb3BlcnR5IHsoa2V5OiBzdHJpbmd8c3ltYm9sKSA9PiBib29sZWFufSBoYXNcbiAqIEBwcm9wZXJ0eSB7KGtleTogc3RyaW5nfHN5bWJvbCkgPT4gKFJlc29sdmVyQ29udGV4dEhhbmRsZXx1bmRlZmluZWQpfSBnZXRcbiAqIEBwcm9wZXJ0eSB7KGtleTogc3RyaW5nfHN5bWJvbCwgdmFsdWU6IFJlc29sdmVyQ29udGV4dEhhbmRsZSkgPT4gKn0gc2V0XG4gKiBAcHJvcGVydHkgeyhrZXk6IHN0cmluZ3xzeW1ib2wpID0+IGJvb2xlYW59IGRlbGV0ZVxuICogQHByb3BlcnR5IHsoKSA9PiBJdGVyYWJsZTxzdHJpbmd8c3ltYm9sPn0ga2V5c1xuICovXG5cbi8qKlxuICogTmFtZSBjYWNoZSBmb3IgYSBjb250ZXh0IHRoYXQgaXMgdGhlIGdsb2JhbCBvYmplY3QgaXRzZWxmLlxuICpcbiAqIEl0IGFuc3dlcnMgbGlrZSB0aGUgTWFwIGl0IHJlcGxhY2VzOiBldmVyeSBuYW1lIGlzIHByZXNlbnQsIGFuZCB0aGUgdmFsdWUgaXMgdGhlIGhhbmRsZVxuICogaG9sZGluZyBpdCAtIG5ldmVyIHRoZSB2YWx1ZSBvZiB0aGUgcHJvcGVydHkuIFRoYXQgaXMgdGhlIGNvbnRyYWN0IG9mICNmaW5kSGFuZGxlLFxuICogd2hvc2UgY2FsbGVyIHJlYWRzIHRoZSBwcm9wZXJ0eSBvZmYgdGhlIGhhbmRsZSBpdCBnZXRzIGJhY2suXG4gKlxuICogQmVjYXVzZSBldmVyeSBuYW1lIGlzIHByZXNlbnQsIHN1Y2ggYSByZXNvbHZlciBhbnN3ZXJzIGV2ZXJ5IGxvb2t1cCB0aGF0IHJlYWNoZXMgaXQsIGFuZCBub1xuICogaGFuZGxlIG5lYXJlciB0aGUgcm9vdCBpcyByZWFjaGVkLiBJdCBsaXN0cyBubyBuYW1lIG9mIGl0cyBvd24sIHNvIHRoZSBvd25LZXlzIHRyYXAgb2YgYSBoYW5kbGVcbiAqIGZ1cnRoZXIgZnJvbSB0aGUgcm9vdCByZXBvcnRzIG5vbmUgb2YgdGhlIGdsb2JhbCBvYmplY3Qncy5cbiAqXG4gKiBAcGFyYW0ge1Jlc29sdmVyQ29udGV4dEhhbmRsZX0gaGFuZGxlXG4gKiBAcmV0dXJucyB7TmFtZUNhY2hlfVxuICovXG5jb25zdCBjcmVhdGVHbG9iYWxOYW1lQ2FjaGUgPSAoaGFuZGxlKSA9PiB7XG5cdHJldHVybiB7XG5cdFx0aGFzOiAocHJvcGVydHkpID0+IHtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH0sXG5cdFx0Z2V0OiAocHJvcGVydHkpID0+IHtcblx0XHRcdHJldHVybiBoYW5kbGU7XG5cdFx0fSxcblx0XHRzZXQ6IChwcm9wZXJ0eSwgdmFsdWUpID0+IHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9LFxuXHRcdGRlbGV0ZTogKHByb3BlcnR5KSA9PiB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fSxcblx0XHRrZXlzOiAoKSA9PiB7XG5cdFx0XHQvLyBObyBuYW1lIG9mIGl0cyBvd24uIGBoYXNgIGFscmVhZHkgYW5zd2VycyBldmVyeSBsb29rdXAsIHNvIGEgbmFtZSBvZiB0aGUgZ2xvYmFsIG9iamVjdFxuXHRcdFx0Ly8gaXMgZm91bmQgZnJvbSBhbnl3aGVyZSBiZWxvdzsgbGlzdGluZyBpdCBhcyB3ZWxsIHdvdWxkIG9ubHkgaGFuZCBpdCB0byBhbiBleGVjdXRlciB0aGF0XG5cdFx0XHQvLyB0dXJucyBhIG5hbWUgaW50byBjb2RlLCB3aGljaCB0aGVuIGZhaWxzIG92ZXIgbmFtZXMgaXQgbmV2ZXIgbmVlZGVkIC0gdGhlIGluZGV4IFwiMFwiIG9mXG5cdFx0XHQvLyBhIGZyYW1lLCBhIHN5bWJvbCBhbm90aGVyIGxpYnJhcnkgcGxhbnRlZC4gQSBzdGF0ZW1lbnQgcmVhY2hlcyBhIGdsb2JhbCB0aHJvdWdoIHRoZVxuXHRcdFx0Ly8gb3JkaW5hcnkgc2NvcGUgY2hhaW4gYW55d2F5LlxuXHRcdFx0cmV0dXJuIFtdO1xuXHRcdH0sXG5cdH07XG59O1xuXG4vKipcbiAqIFdoYXQgc3RhbmRzIGJlaGluZCB0aGUgY29udGV4dCBvZiBvbmUgcmVzb2x2ZXI6IHRoZSBvYmplY3QgaGFuZGVkIHRvIGl0LCB0aGUgaGFuZGxlIG9mIGl0cyBwYXJlbnQsXG4gKiBhbmQgdGhlIG5hbWUgY2FjaGUgdGhhdCB0ZWxscyB3aGljaCBuYW1lcyB0aGlzIHJlc29sdmVyIHByb3ZpZGVzLiBJdCBoYW5kcyBvdXQgdGhlIGNvbnRleHQgYW5cbiAqIGV4cHJlc3Npb24gc2VlcywgYSBwcm94eSB0aGF0IGFuc3dlcnMgZm9yIHRoZSB3aG9sZSBjaGFpbi5cbiAqXG4gKiBJbnRlcm5hbCB0byB0aGUgcGFja2FnZTogaW5kZXguanMgZG9lcyBub3QgZXhwb3J0IGl0LlxuICpcbiAqIEBleHBvcnRcbiAqIEBjbGFzcyBSZXNvbHZlckNvbnRleHRIYW5kbGVcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVzb2x2ZXJDb250ZXh0SGFuZGxlIHtcblx0LyoqIEB0eXBlIHtvYmplY3R8bnVsbH0gKi9cblx0I2NvbnRleHQgPSBudWxsO1xuXHQvKiogQHR5cGUge1Jlc29sdmVyQ29udGV4dEhhbmRsZXxudWxsfSAqL1xuXHQjcGFyZW50ID0gbnVsbDtcblx0LyoqIEB0eXBlIHtvYmplY3R8bnVsbH0gKi9cblx0I2RhdGEgPSBudWxsO1xuXHQvKiogQHR5cGUge05hbWVDYWNoZXxudWxsfSAqL1xuXHQjY2FjaGUgPSBudWxsO1xuXHQvKiogQHR5cGUge2Jvb2xlYW59ICovXG5cdCNwcm92aWRlc0NvbnRleHQgPSBmYWxzZTtcblxuXHQvKipcblx0ICogQGNvbnN0cnVjdG9yXG5cdCAqIEBwYXJhbSB7P29iamVjdH0gY29udGV4dCB0aGUgb2JqZWN0IHRoZSBjYWxsZXIgaGFuZGVkIG92ZXIsIGtlcHQgcmF0aGVyIHRoYW4gY29waWVkLiBXaGVyZSBub25lXG5cdCAqIGlzIHBhc3NlZCwgdGhlIGhhbmRsZSBob2xkcyBubyBvYmplY3QgYXQgYWxsIGFuZCBjYXJyaWVzIG5vIG5hbWUsIG5vdCBldmVuIG9uZSBvZlxuXHQgKiBPYmplY3QucHJvdG90eXBlLiBJdCBnZXRzIGFuIG9iamVjdCBvbiB0aGUgZmlyc3Qgd3JpdGUuXG5cdCAqIEBwYXJhbSB7P1Jlc29sdmVyQ29udGV4dEhhbmRsZX0gcGFyZW50IHRoZSBoYW5kbGUgb2YgdGhlIHBhcmVudCByZXNvbHZlclxuXHQgKi9cblx0Y29uc3RydWN0b3IoY29udGV4dCwgcGFyZW50KSB7XG5cdFx0dGhpcy4jZGF0YSA9IGlzTnVsbE9yVW5kZWZpbmVkKGNvbnRleHQpID8gbnVsbCA6IGNvbnRleHQ7XG5cdFx0dGhpcy4jcGFyZW50ID0gcGFyZW50ID8gcGFyZW50IDogbnVsbDtcblx0XHR0aGlzLiNwcm92aWRlc0NvbnRleHQgPSAhaXNOdWxsT3JVbmRlZmluZWQoY29udGV4dCk7XG5cblx0XHR0aGlzLiNjYWNoZSA9IHRoaXMuI2J1aWxkTmFtZUNhY2hlKCk7XG5cblx0XHRpZiAoR0xPQkFMID09PSB0aGlzLiNkYXRhKVxuXHRcdFx0dGhpcy4jY29udGV4dCA9IHRoaXMuI2RhdGE7XG5cdFx0ZWxzZSB7XG5cdFx0XHQvLyBUaGUgcHJveHkgYW5zd2VycyBmb3IgdGhlIHdob2xlIGNoYWluLCB3aGljaCBpcyBtb3JlIHRoYW4gdGhlIG9iamVjdCBoYW5kZWQgdG8gdGhpc1xuXHRcdFx0Ly8gcmVzb2x2ZXIgaG9sZHMuIEEgcHJveHkgbWF5IG5vdCBzcGVhayB0aGF0IGZyZWVseSBmb3IgYSB0YXJnZXQgdGhhdCBndWFyYW50ZWVzXG5cdFx0XHQvLyBhbnl0aGluZyBhYm91dCBpdHMgb3duIGtleXMgLSBhIGZyb3plbiBvciBzZWFsZWQgY29udGV4dCBpcyB3aGVyZSB0aGF0IGVuZHMgaW4gYVxuXHRcdFx0Ly8gVHlwZUVycm9yIC0gc28gaXQgZ2V0cyBhbiBlbXB0eSB0YXJnZXQgb2YgaXRzIG93bi4gTm8gdHJhcCByZWFkcyBpdDsgZXZlcnkgb25lIG9mXG5cdFx0XHQvLyB0aGVtIHdvcmtzIG9uICNkYXRhIGFuZCAjY2FjaGUuXG5cdFx0XHR0aGlzLiNjb250ZXh0ID0gbmV3IFByb3h5KHt9LCB7XG5cdFx0XHRcdGhhczogKGRhdGEsIHByb3BlcnR5KSA9PiB7XG5cdFx0XHRcdFx0Ly9jb25zb2xlLmxvZyhcImhhcyBwcm9wZXJ0eTpcIiwgcHJvcGVydHkpO1xuXHRcdFx0XHRcdHJldHVybiB0aGlzLiNmaW5kSGFuZGxlKHByb3BlcnR5KSAhPSBudWxsO1xuXHRcdFx0XHR9LFxuXHRcdFx0XHRnZXQ6IChkYXRhLCBwcm9wZXJ0eSkgPT4ge1xuXHRcdFx0XHRcdC8vY29uc29sZS5sb2coXCJnZXQgcHJvcGVydHk6XCIsIHByb3BlcnR5KTtcblx0XHRcdFx0XHRjb25zdCBoYW5kbGUgPSB0aGlzLiNmaW5kSGFuZGxlKHByb3BlcnR5KTtcblx0XHRcdFx0XHRyZXR1cm4gaGFuZGxlID8gaGFuZGxlLiNkYXRhW3Byb3BlcnR5XSA6IHVuZGVmaW5lZDtcblx0XHRcdFx0fSxcblx0XHRcdFx0c2V0OiAoZGF0YSwgcHJvcGVydHksIHZhbHVlKSA9PiB7XG5cdFx0XHRcdFx0Ly9jb25zb2xlLmxvZyhcInNldCBwcm9wZXJ0eTpcIiwgcHJvcGVydHksIFwiPVwiLCB2YWx1ZSk7XG5cdFx0XHRcdFx0dGhpcy4jZGF0YSA/Pz0ge307XG5cdFx0XHRcdFx0dGhpcy4jZGF0YVtwcm9wZXJ0eV0gPSB2YWx1ZTtcblx0XHRcdFx0XHR0aGlzLiNjYWNoZS5zZXQocHJvcGVydHksIHRoaXMpO1xuXHRcdFx0XHRcdHRoaXMuI3Byb3ZpZGVzQ29udGV4dCA9IHRydWU7XG5cdFx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHRcdH0sXG5cdFx0XHRcdGRlbGV0ZVByb3BlcnR5OiAoZGF0YSwgcHJvcGVydHkpID0+IHtcblx0XHRcdFx0XHRjb25zdCBoYW5kbGUgPSB0aGlzLiNjYWNoZS5nZXQocHJvcGVydHkpO1xuXHRcdFx0XHRcdGlmIChoYW5kbGUpIHtcblx0XHRcdFx0XHRcdGRlbGV0ZSB0aGlzLiNkYXRhW3Byb3BlcnR5XTtcblx0XHRcdFx0XHRcdHRoaXMuI2NhY2hlLmRlbGV0ZShwcm9wZXJ0eSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0XHR9LFxuXHRcdFx0XHRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I6IChkYXRhLCBwcm9wZXJ0eSkgPT4ge1xuXHRcdFx0XHRcdGNvbnN0IGhhbmRsZSA9IHRoaXMuI2ZpbmRIYW5kbGUocHJvcGVydHkpO1xuXHRcdFx0XHRcdGlmICghaGFuZGxlKSByZXR1cm4gdW5kZWZpbmVkO1xuXG5cdFx0XHRcdFx0Ly8gUmVhZCB0aHJvdWdoIGEgZ2V0dGVyIHJhdGhlciB0aGFuIHVwIGZyb250LCBzbyBlbnVtZXJhdGluZyBhIGNvbnRleHQgZG9lcyBub3Rcblx0XHRcdFx0XHQvLyBldmFsdWF0ZSB3aGF0IG5vYm9keSBhc2tlZCBmb3IsIGFuZCBzbyBhIHZhbHVlIHN0YXlzIGxpdmUuIEVudW1lcmFiaWxpdHlcblx0XHRcdFx0XHQvLyBpcyB0YWtlbiBmcm9tIHdoZXJlIHRoZSBwcm9wZXJ0eSBpcyBkZWZpbmVkIC0gdGhhdCBpcyB3aGF0IGtlZXBzIHRoZSBtZW1iZXJzXG5cdFx0XHRcdFx0Ly8gb2YgT2JqZWN0LnByb3RvdHlwZSBvdXQgb2YgT2JqZWN0LmtleXMgLSB3aGlsZSBjb25maWd1cmFibGUgaGFzIHRvIGJlIHRydWU6XG5cdFx0XHRcdFx0Ly8gYSBwcm94eSBtYXkgbm90IGNsYWltIGEgZml4ZWQgcHJvcGVydHkgaXRzIHRhcmdldCBkb2VzIG5vdCBoYXZlLlxuXHRcdFx0XHRcdGNvbnN0IGRlc2NyaXB0b3IgPSBmaW5kUHJvcGVydHlEZXNjcmlwdG9yKGhhbmRsZS4jZGF0YSwgcHJvcGVydHkpO1xuXHRcdFx0XHRcdHJldHVybiB7XG5cdFx0XHRcdFx0XHRnZXQ6ICgpID0+IGhhbmRsZS4jZGF0YVtwcm9wZXJ0eV0sXG5cdFx0XHRcdFx0XHRlbnVtZXJhYmxlOiBkZXNjcmlwdG9yID8gZGVzY3JpcHRvci5lbnVtZXJhYmxlIDogdHJ1ZSxcblx0XHRcdFx0XHRcdGNvbmZpZ3VyYWJsZTogdHJ1ZVxuXHRcdFx0XHRcdH07XG5cdFx0XHRcdH0sXG5cdFx0XHRcdG93bktleXM6IChkYXRhKSA9PiB7XG5cdFx0XHRcdFx0Ly9jb25zb2xlLmxvZyhcIm93bktleXNcIik7XG5cdFx0XHRcdFx0Y29uc3QgcmVzdWx0ID0gbmV3IFNldCgpO1xuXHRcdFx0XHRcdGxldCBoYW5kbGUgPSB0aGlzO1xuXHRcdFx0XHRcdHdoaWxlIChoYW5kbGUpIHtcblx0XHRcdFx0XHRcdC8vIGEgaGFuZGxlIHdpdGhvdXQgYW4gb2JqZWN0IGNhcnJpZXMgbm8gbmFtZSAtIGl0cyBlbXB0eSBjYWNoZSBpcyBwYXNzZWQgYnlcblx0XHRcdFx0XHRcdGlmIChoYW5kbGUuI2RhdGEgIT09IG51bGwpIHtcblx0XHRcdFx0XHRcdFx0Zm9yIChsZXQga2V5IG9mIGhhbmRsZS4jY2FjaGUua2V5cygpKSB7XG5cdFx0XHRcdFx0XHRcdFx0cmVzdWx0LmFkZChrZXkpO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRoYW5kbGUgPSBoYW5kbGUuI3BhcmVudDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0cmV0dXJuIEFycmF5LmZyb20ocmVzdWx0KTtcblx0XHRcdFx0fSxcblx0XHRcdH0pO1xuXHRcdH1cblx0fVxuXG5cdC8qKlxuXHQgKiBUaGUgY29udGV4dCBhbiBleHByZXNzaW9uIHNlZXM6IGEgcHJveHkgdGhhdCBhbnN3ZXJzIGZvciB0aGUgd2hvbGUgY2hhaW4sIG9yIG92ZXIgdGhlIGdsb2JhbFxuXHQgKiBvYmplY3QgdGhlIGdsb2JhbCBvYmplY3QgaXRzZWxmLlxuXHQgKlxuXHQgKiBAdHlwZSB7b2JqZWN0fVxuXHQgKi9cblx0Z2V0IGNvbnRleHQoKSB7XG5cdFx0cmV0dXJuIHRoaXMuI2NvbnRleHQ7XG5cdH1cblxuXHQvKipcblx0ICogQHR5cGUge1Jlc29sdmVyQ29udGV4dEhhbmRsZXxudWxsfVxuXHQgKi9cblx0Z2V0IHBhcmVudCgpIHtcblx0XHRyZXR1cm4gdGhpcy4jcGFyZW50O1xuXHR9XG5cblx0LyoqXG5cdCAqIFdoZXRoZXIgdGhpcyBoYW5kbGUgcHJvdmlkZXMgdGhlIG5hbWUgaXRzZWxmLiBFdmVyeSBuYW1lIG9mIGl0cyBvd24gY29udGV4dCBjb3VudHMsIHRoZSBvbmVzXG5cdCAqIGluaGVyaXRlZCB0aHJvdWdoIHRoZSBwcm90b3R5cGUgY2hhaW4gaW5jbHVkZWQ7IGEgaGFuZGxlIG92ZXIgdGhlIGdsb2JhbCBvYmplY3Rcblx0ICogcHJvdmlkZXMgZXZlcnkgbmFtZS5cblx0ICpcblx0ICogQHBhcmFtIHtzdHJpbmd8c3ltYm9sfSBrZXlcblx0ICogQHJldHVybnMge2Jvb2xlYW59XG5cdCAqL1xuXHRoYXNOYW1lKGtleSkge1xuXHRcdHJldHVybiB0aGlzLiNjYWNoZS5oYXMoa2V5KTtcblx0fVxuXG5cdC8qKlxuXHQgKiBXaGV0aGVyIHRoaXMgaGFuZGxlIHByb3ZpZGVzIGEgY29udGV4dDogb25lIHdhcyBoYW5kZWQgdG8gdGhlIGNvbnN0cnVjdG9yLCBvciBhIHZhbHVlIGhhcyBiZWVuXG5cdCAqIHdyaXR0ZW4gc2luY2UuIFdoYXQgdGhlIGRhdGEgaG9sZHMgZGVjaWRlcyBub3RoaW5nLlxuXHQgKlxuXHQgKiBAdHlwZSB7Ym9vbGVhbn1cblx0ICovXG5cdGdldCBwcm92aWRlc0NvbnRleHQoKSB7XG5cdFx0cmV0dXJuIHRoaXMuI3Byb3ZpZGVzQ29udGV4dDtcblx0fVxuXG5cdC8qKlxuXHQgKiBBc3NpZ25zIHRoZSBrZXlzIG9mIGFuIG9iamVjdCBpbnRvIHRoZSBvbmUgdGhpcyBoYW5kbGUgaG9sZHMsIGtleSBieSBrZXksIGNyZWF0aW5nIHRoYXQgb2JqZWN0XG5cdCAqIHdoZXJlIHRoZXJlIGlzIG5vbmUuXG5cdCAqXG5cdCAqIEBwYXJhbSB7b2JqZWN0fSBkYXRhXG5cdCAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gd2hlcmUgdGhlIG9iamVjdCBoZWxkIHJlZnVzZXMgYSBrZXkgLSB0aGUga2V5cyBiZWZvcmUgaXQgYXJlIHdyaXR0ZW4gYnkgdGhlblxuXHQgKi9cblx0bWVyZ2VEYXRhKGRhdGEpIHtcblx0XHR0aGlzLiNkYXRhID8/PSB7fTtcblx0XHRPYmplY3QuYXNzaWduKHRoaXMuI2RhdGEsIGRhdGEpO1xuXHRcdHRoaXMuI3Byb3ZpZGVzQ29udGV4dCA9IHRydWU7XG5cdFx0dGhpcy4jY2FjaGUgPSB0aGlzLiNidWlsZE5hbWVDYWNoZSgpO1xuXHR9XG5cblx0LyoqXG5cdCAqIFRha2VzIHVwIHRoZSBrZXlzIGFkZGVkIHRvIHRoZSBoYW5kZWQtaW4gb2JqZWN0IHNpbmNlIHRoZSBoYW5kbGUgd2FzIGJ1aWx0LCB3aGljaCBhcmUgbm90XG5cdCAqIHByb3ZpZGVkIHVudGlsIHRoZW4uXG5cdCAqL1xuXHRyZXNldENhY2hlKCkge1xuXHRcdHRoaXMuI2NhY2hlID0gdGhpcy4jYnVpbGROYW1lQ2FjaGUoKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBBIG5ldyBuYW1lIGNhY2hlIGZvciB0aGUgb2JqZWN0IHRoaXMgaGFuZGxlIGhvbGRzOiBldmVyeSBrZXkgaXQgY2FycmllcywgaXRzIHByb3RvdHlwZSBjaGFpblxuXHQgKiBpbmNsdWRlZCwgZWFjaCBtYXBwZWQgdG8gdGhpcyBoYW5kbGUuIE92ZXIgdGhlIGdsb2JhbCBvYmplY3QgdGhlIHN0YW5kLWluIG9mXG5cdCAqIGBjcmVhdGVHbG9iYWxOYW1lQ2FjaGVgLCB3aGljaCBwcm92aWRlcyBldmVyeSBuYW1lLlxuXHQgKlxuXHQgKiBAcmV0dXJucyB7TmFtZUNhY2hlfVxuXHQgKi9cblx0I2J1aWxkTmFtZUNhY2hlKCkge1xuXHRcdGNvbnN0IGRhdGEgPSB0aGlzLiNkYXRhO1xuXHRcdGlmIChHTE9CQUwgPT09IGRhdGEpIFxuXHRcdFx0cmV0dXJuIGNyZWF0ZUdsb2JhbE5hbWVDYWNoZSh0aGlzKTtcblxuXHRcdC8vIGV2ZXJ5IGtleSBKYXZhU2NyaXB0IHNheXMgdGhlIG9iamVjdCBjYXJyaWVzLCBub3RoaW5nIGZpbHRlcmVkIC0gd2hpY2ggb2YgdGhlbSBhbiBleGVjdXRlclxuXHRcdC8vIGNhbiBwdXQgaW50byBpdHMgY29kZSBpcyB0aGUgZXhlY3V0ZXIncyBidXNpbmVzc1xuXHRcdGNvbnN0IGNhY2hlID0gbmV3IE1hcCgpO1xuXHRcdGxldCB0eXBlID0gZGF0YTtcblx0XHR3aGlsZSAoIWlzTnVsbE9yVW5kZWZpbmVkKHR5cGUpKSB7XG5cdFx0XHRmb3IgKGxldCBuYW1lIG9mIFJlZmxlY3Qub3duS2V5cyh0eXBlKSkgY2FjaGUuc2V0KG5hbWUsIHRoaXMpO1xuXHRcdFx0dHlwZSA9IFJlZmxlY3QuZ2V0UHJvdG90eXBlT2YodHlwZSk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGNhY2hlO1xuXHR9XG5cblx0LyoqXG5cdCAqIFRoZSBuZWFyZXN0IGhhbmRsZSBmcm9tIHRoaXMgb25lIHRvIHRoZSByb290IHRoYXQgcHJvdmlkZXMgdGhlIG5hbWUsIG9yIG51bGwgd2hlcmUgbm9uZSBkb2VzLlxuXHQgKlxuXHQgKiBAcGFyYW0ge3N0cmluZ3xzeW1ib2x9IHByb3BlcnR5XG5cdCAqIEByZXR1cm5zIHtSZXNvbHZlckNvbnRleHRIYW5kbGV8bnVsbH1cblx0ICovXG5cdCNmaW5kSGFuZGxlKHByb3BlcnR5KSB7XG5cdFx0Ly8gQSBoYW5kbGUgd2l0aG91dCBhbiBvYmplY3QgY2FycmllcyBubyBuYW1lLCBzbyBpdCBpcyBwYXNzZWQgYnkgd2l0aG91dCBhc2tpbmcgaXRzIGNhY2hlIC1cblx0XHQvLyBtb3N0IHJlc29sdmVycyBvZiBhIGNoYWluIGFyZSBidWlsdCB3aXRob3V0IGEgY29udGV4dC5cblx0XHRsZXQgaGFuZGxlID0gdGhpcztcblx0XHR3aGlsZSAoaGFuZGxlKSB7XG5cdFx0XHRpZiAoaGFuZGxlLiNkYXRhICE9PSBudWxsICYmIGhhbmRsZS4jY2FjaGUuaGFzKHByb3BlcnR5KSkgcmV0dXJuIGhhbmRsZS4jY2FjaGUuZ2V0KHByb3BlcnR5KTtcblx0XHRcdGhhbmRsZSA9IGhhbmRsZS4jcGFyZW50O1xuXHRcdH1cblx0XHRyZXR1cm4gbnVsbDtcblx0fVxufVxuIiwiLyoqXG4gKiBUaGUgaGVscGVycyBtb3JlIHRoYW4gb25lIGNvbXBvbmVudCB1c2VzLiBJbnRlcm5hbCB0byB0aGUgcGFja2FnZTogaW5kZXguanMgZG9lcyBub3QgZXhwb3J0XG4gKiB0aGVtLlxuICovXG5cbi8qKiBXaGl0ZXNwYWNlIGluIHRoZSBzZW5zZSBvZiBgXFxzYC4gKi9cbmV4cG9ydCBjb25zdCBXSElURVNQQUNFID0gL1xccy87XG5cbi8qKlxuICogV2hldGhlciBhIGNoYXJhY3RlciBtYXkgc3RhbmQgaW4gYSBzY29wZSBuYW1lOiBhbiBBU0NJSSBsZXR0ZXIsIGEgZGlnaXQsXG4gKiBcIi1cIiwgXCJfXCIsIG9yIHdoaXRlc3BhY2UgaW4gdGhlIHNlbnNlIG9mIGBcXHNgLCB3aGljaCBwYXN0IEFTQ0lJIGlzIGxlZnQgdG8gdGhlIHJlZ3VsYXIgZXhwcmVzc2lvbi5cbiAqXG4gKiBAcGFyYW0ge251bWJlcn0gYUNvZGUgdGhlIGNoYXIgY29kZVxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbmV4cG9ydCBjb25zdCBpc05hbWVDaGFyYWN0ZXIgPSAoYUNvZGUpID0+IHtcblx0aWYgKGFDb2RlIDwgMHg4MClcblx0XHRyZXR1cm4gKFxuXHRcdFx0KGFDb2RlID49IDB4NjEgJiYgYUNvZGUgPD0gMHg3YSkgfHxcblx0XHRcdChhQ29kZSA+PSAweDQxICYmIGFDb2RlIDw9IDB4NWEpIHx8XG5cdFx0XHQoYUNvZGUgPj0gMHgzMCAmJiBhQ29kZSA8PSAweDM5KSB8fFxuXHRcdFx0YUNvZGUgPT09IDB4MmQgfHxcblx0XHRcdGFDb2RlID09PSAweDVmIHx8XG5cdFx0XHRhQ29kZSA9PT0gMHgyMCB8fFxuXHRcdFx0KGFDb2RlID49IDB4MDkgJiYgYUNvZGUgPD0gMHgwZClcblx0XHQpO1xuXG5cdHJldHVybiBXSElURVNQQUNFLnRlc3QoU3RyaW5nLmZyb21DaGFyQ29kZShhQ29kZSkpO1xufTtcblxuLyoqXG4gKiBUcmltcyBhIHN0cmluZywgYW5kIGFuc3dlcnMgbnVsbCBmb3Igb25lIHRoYXQgaXMgZW1wdHkgYWZ0ZXIgdHJpbW1pbmcsIGFuZCBmb3Igbm9uZS5cbiAqXG4gKiBAcGFyYW0gez9zdHJpbmd9IHZhbHVlXG4gKiBAcmV0dXJucyB7P3N0cmluZ31cbiAqL1xuZXhwb3J0IGNvbnN0IHRyaW1Ub051bGwgPSAodmFsdWUpID0+IHtcblx0aWYgKHZhbHVlKSB7XG5cdFx0dmFsdWUgPSB2YWx1ZS50cmltKCk7XG5cdFx0cmV0dXJuIHZhbHVlLmxlbmd0aCA9PSAwID8gbnVsbCA6IHZhbHVlO1xuXHR9XG5cdHJldHVybiBudWxsO1xufTtcblxuLyoqXG4gKiBBIDMyIGJpdCBoYXNoIG9mIGEgc3RyaW5nLCBpbiB0aGUgbWFubmVyIG9mIEphdmEncyBgU3RyaW5nLmhhc2hDb2RlYC5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gYVN0cmluZ1xuICogQHJldHVybnMge251bWJlcn1cbiAqL1xuZXhwb3J0IGNvbnN0IHN0cmluZ1RvSGFzaGNvZGUgPSAoYVN0cmluZykgPT4ge1xuXHRsZXQgaGFzaCA9IDA7XG5cdGlmIChhU3RyaW5nLmxlbmd0aCA9PSAwKSByZXR1cm4gaGFzaDtcblx0Y29uc3QgbGVuZ3RoID0gYVN0cmluZy5sZW5ndGg7XG5cdGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcblx0XHRjb25zdCBjaGFyID0gYVN0cmluZy5jaGFyQ29kZUF0KGkpO1xuXHRcdGhhc2ggPSAoaGFzaCA8PCA1KSAtIGhhc2ggKyBjaGFyO1xuXHRcdGhhc2ggfD0gMDsgLy8gQ29udmVydCB0byAzMmJpdCBpbnRlZ2VyXG5cdH1cblx0cmV0dXJuIGhhc2g7XG59O1xuIiwiaW1wb3J0IHsgcmVnaXN0ZXIgfSBmcm9tIFwiLi4vRXhlY3V0ZXJSZWdpc3RyeS5qc1wiO1xuaW1wb3J0IEV4ZWN1dGVyIGZyb20gXCIuLi9FeGVjdXRlci5qc1wiO1xuaW1wb3J0IENvZGVDYWNoZSBmcm9tIFwiLi4vQ29kZUNhY2hlLmpzXCI7XG5pbXBvcnQgR0xPQkFMIGZyb20gXCJAZGVmYXVsdC1qcy9kZWZhdWx0anMtY29tbW9uLXV0aWxzL3NyYy9HbG9iYWwuanNcIjtcblxubGV0IERFQlVHID0gZmFsc2U7XG4vKiogVGhlIG5hbWUgdGhpcyBleGVjdXRlciBpcyByZWdpc3RlcmVkIHVuZGVyLCBhbmQgdGhlIGRlZmF1bHQgZXhlY3V0ZXIuICovXG5leHBvcnQgY29uc3QgRVhFQ1VURVJOQU1FID0gXCJjb250ZXh0LWRlY29uc3RydWN0aW9uLWV4ZWN1dGVyXCI7XG5jb25zdCBFWFBSRVNTSU9OX0NBQ0hFID0gbmV3IENvZGVDYWNoZSgpO1xuXG5cbi8qKlxuICogSG93IG1hbnkgbmFtZXMgYSBjb250ZXh0IG1heSBjYXJyeSBiZWZvcmUgdGhpcyBleGVjdXRlciBzYXlzIHRoYXQgYmluZGluZyB0aGVtIGFsbCBjb3N0cy4gRXZlcnlcbiAqIG9yZGluYXJ5IG9iamVjdCBicmluZ3Mgc2V2ZW4gb2YgdGhlbSBhbG9uZyBmcm9tIGBPYmplY3QucHJvdG90eXBlYCwgc28gdGhlIG51bWJlciBjb3VudHMgYSBnb29kXG4gKiBtYW55IG93biBrZXlzIGJlZm9yZSBpdCBpcyByZWFjaGVkLlxuICovXG5jb25zdCBISUdIX1BST1BFUlRZX0NPVU5UID0gMjU7XG5cbi8qKlxuICogVGhlIG5hbWVzIHRoYXQgbWFkZSB0aGUgZ2VuZXJhdGVkIGZ1bmN0aW9uIGZhaWwgdG8gY29tcGlsZSwgYXNrZWQgb2YgSmF2YVNjcmlwdCBpdHNlbGYgcmF0aGVyXG4gKiB0aGFuIG9mIGEgbGlzdCBrZXB0IGhlcmU6IGEgbmFtZSBpcyB1c2FibGUgd2hlbiBpdCBjYW4gc3RhbmQgaW4gYSBkZXN0cnVjdHVyaW5nIHBhdHRlcm4uXG4gKlxuICogT25seSBldmVyIGNhbGxlZCBvbiB0aGUgZmFpbHVyZSBwYXRoLCBzbyB0aGUgY29zdCBvZiBjb21waWxpbmcgb25lIHBhdHRlcm4gcGVyIG5hbWUgaXMgcGFpZCBieSBhXG4gKiBjb250ZXh0IHRoYXQgaXMgYnJva2VuIGZvciB0aGlzIGV4ZWN1dGVyIGFueXdheS5cbiAqXG4gKiBAcGFyYW0ge0FycmF5PHN0cmluZ3xzeW1ib2w+fSB0aGVOYW1lc1xuICogQHJldHVybnMge0FycmF5PHN0cmluZz59XG4gKi9cbmNvbnN0IHVudXNhYmxlTmFtZXMgPSAodGhlTmFtZXMpID0+XG5cdHRoZU5hbWVzXG5cdFx0LmZpbHRlcigobmFtZSkgPT4ge1xuXHRcdFx0aWYgKHR5cGVvZiBuYW1lID09PSBcInN5bWJvbFwiKSByZXR1cm4gdHJ1ZTtcblx0XHRcdHRyeSB7XG5cdFx0XHRcdG5ldyBGdW5jdGlvbihgeyR7bmFtZX19YCwgXCJcIik7XG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdH0gY2F0Y2ggKGUpIHtcblx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHR9XG5cdFx0fSlcblx0XHQubWFwKFN0cmluZyk7XG5cbi8qKlxuICogU3dpdGNoZXMgdGhlIGxvZ2dpbmcgb2YgZXZlcnkgZnVuY3Rpb24gdGhpcyBleGVjdXRlciBnZW5lcmF0ZXMgdG8gdGhlIGNvbnNvbGUuXG4gKlxuICogQHBhcmFtIHtib29sZWFufSB2YWx1ZVxuICovXG5leHBvcnQgY29uc3Qgc2V0RGVidWcgPSAodmFsdWUpID0+IHtcblx0REVCVUcgPSB2YWx1ZTtcbn07XG5cbi8qKlxuICogQ29uZmlndXJlcyB0aGUgY29kZSBjYWNoZSBvZiB0aGlzIGV4ZWN1dGVyLiBgc2l6ZWAgaXMgdGhlIG9ubHkgb3B0aW9uXG4gKiB0b2RheTsgYW4gb3B0aW9uIGxlZnQgb3V0IGNoYW5nZXMgbm90aGluZy5cbiAqXG4gKiBAcGFyYW0ge2ltcG9ydCgnLi4vQ29kZUNhY2hlLmpzJykuQ29kZUNhY2hlT3B0aW9uc30gW29wdGlvbnNdXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IHdoZXJlIHRoZSBzaXplIGlzIG5vdCBhIGZpbml0ZSBudW1iZXJcbiAqL1xuZXhwb3J0IGNvbnN0IHNldHVwRXhlY3V0ZXIgPSAob3B0aW9ucykgPT4ge1xuXHRFWFBSRVNTSU9OX0NBQ0hFLnNldHVwKG9wdGlvbnMpO1xufTtcblxuY29uc3QgZ2V0UHJvcGVydHlOYW1lcyA9IChhQ29udGV4dCkgPT4ge1xuXHRpZiAoR0xPQkFMID09PSBhQ29udGV4dCkgcmV0dXJuIFtdO1xuXHRyZXR1cm4gUmVmbGVjdC5vd25LZXlzKGFDb250ZXh0KTtcbn07XG5cbmNvbnN0IGdldE9yQ3JlYXRlRnVuY3Rpb24gPSAoYVN0YXRlbWVudCwgY29udGV4dFByb3BlcnRpZXMpID0+IHtcblx0Ly8gQSBzeW1ib2wgaGFzIHRvIGJlIHdyaXR0ZW4gb3V0IHJhdGhlciB0aGFuIGpvaW5lZCAtIGBqb2luYCBhbG9uZSByYWlzZXMgYSBUeXBlRXJyb3IgdGhhdCBzYXlzXG5cdC8vIG5vdGhpbmcgYWJvdXQgdGhlIGNvbnRleHQgaXQgY2FtZSBmcm9tLiBXcml0dGVuIG91dCBpdCByZWFjaGVzIHRoZSBwYXR0ZXJuLCB3aGVyZSBpdCBmYWlscyB0b1xuXHQvLyBjb21waWxlIGxpa2UgYW55IG90aGVyIG5hbWUgdGhhdCBpcyBubyBpZGVudGlmaWVyLCBhbmQgZ2VuZXJhdGUoKSBuYW1lcyBpdC5cblx0Y29uc3QgcHJvcGVydHlOYW1lcyA9IGNvbnRleHRQcm9wZXJ0aWVzLm1hcChTdHJpbmcpLmpvaW4oXCIsXCIpO1xuXHRjb25zdCBjYWNoZUtleSA9IGAke2FTdGF0ZW1lbnQubGVuZ3RofTo6JHtwcm9wZXJ0eU5hbWVzfTo6JHthU3RhdGVtZW50fWA7XG5cdGlmIChFWFBSRVNTSU9OX0NBQ0hFLmhhcyhjYWNoZUtleSkpIHtcblx0XHRyZXR1cm4gRVhQUkVTU0lPTl9DQUNIRS5nZXQoY2FjaGVLZXkpO1xuXHR9XG5cdGNvbnN0IGV4cHJlc3Npb24gPSBnZW5lcmF0ZShhU3RhdGVtZW50LCBwcm9wZXJ0eU5hbWVzLCBjb250ZXh0UHJvcGVydGllcyk7XG5cdEVYUFJFU1NJT05fQ0FDSEUuc2V0KGNhY2hlS2V5LCBleHByZXNzaW9uKTtcblx0cmV0dXJuIGV4cHJlc3Npb247XG59O1xuXG4vKipcbiAqIFRoZSBnZW5lcmF0ZWQgZnVuY3Rpb24gZGVzdHJ1Y3R1cmVzIHRoZSBjb250ZXh0IGluIGl0cyBwYXJhbWV0ZXIgbGlzdCBhbmQgcnVucyB0aGUgc3RhdGVtZW50IG92ZXJcbiAqIHRoZSBsb2NhbCBiaW5kaW5ncyB0aGF0IHByb2R1Y2VzLlxuICpcbiAqICoqTm90aGluZyBpcyBjYXJyaWVkIGJhY2suKiogQSBzdGF0ZW1lbnQgdGhhdCBhc3NpZ25zIHRvIGEgY29udGV4dCBuYW1lIHdyaXRlcyBpbnRvIGEgbG9jYWxcbiAqIGJpbmRpbmcsIGFuZCB0aGF0IGJpbmRpbmcgaXMgZ29uZSB3aGVuIHRoZSBmdW5jdGlvbiByZXR1cm5zIC0gc28gYSB3cml0ZSBpcyBub3QgcmVhZGFibGVcbiAqIGFmdGVyd2FyZHMsIHdoaWNoIHRoZSByZXNvbHZlciBsZWF2ZXMgdG8gZWFjaCBleGVjdXRlci4gVGhhdCBpcyBhIGRlY2lzaW9uIHJhdGhlciB0aGFuIGEgZ2FwOiB0aGVcbiAqIHdyaXRlLWJhY2sgdGhpcyBleGVjdXRlciBjYXJyaWVkIGJldHdlZW4gMjAyNi0wOS0wNyBhbmQgMjAyNi0wOS0yMCBjb3N0IGEgZmFjdG9yIG9mIGVsZXZlbiBvbiBhXG4gKiBjYWNoZSBtaXNzLCBiZWNhdXNlIGl0IG5lZWRzIGV2ZXJ5IGNvbnRleHQgbmFtZSBkZWNsYXJlZCBpbiB0aGUgYm9keSBpbnN0ZWFkIG9mIGxpc3RlZCBpbiB0aGVcbiAqIHBhcmFtZXRlciBsaXN0LiBTcGVlZCBpcyB3aGF0IHRoaXMgZXhlY3V0ZXIgaXMgZm9yLCBhbmQgYSBjb25zdW1lciB3aG8gbmVlZHMgYSB3cml0ZSB0byBwZXJzaXN0XG4gKiBwaWNrcyBgY29udGV4dC1vYmplY3QtZXhlY3V0ZXJgLlxuICpcbiAqIFdoYXQgc3RpbGwgcmVhY2hlcyB0aGUgY29udGV4dCBpcyBhICoqbXV0YXRpb24qKjogYGhvbGRlci5uYW1lID0gXCJhZnRlclwiYCBjaGFuZ2VzIGFuIG9iamVjdCB0aGVcbiAqIGJpbmRpbmcgYW5kIHRoZSBjb250ZXh0IGJvdGggcG9pbnQgYXQsIGFuZCBuZWVkcyBub3RoaW5nIGNhcnJpZWQgYmFjay5cbiAqXG4gKiBUaGUgY29udGV4dCBpcyBkZXN0cnVjdHVyZWQgaW4gdGhlIHBhcmFtZXRlciBsaXN0IHJhdGhlciB0aGFuIGRlY2xhcmVkIGluIHRoZSBib2R5IHNvIHRoYXQgdGhlXG4gKiBnZW5lcmF0ZWQgc291cmNlIHN0YXlzIG9uZSBsaW5lIHBlciBzdGF0ZW1lbnQgaW5zdGVhZCBvZiBvbmUgbGluZSBwZXIgY29udGV4dCBuYW1lIC0gYG5ldyBGdW5jdGlvbmBcbiAqIHBhcnNlcyB0aGF0IHNvdXJjZSBvbiBldmVyeSBjYWNoZSBtaXNzLCBhbmQgaXRzIGxlbmd0aCBpcyB3aGF0IHRoZSBtaXNzIGNvc3RzLiBJdCBhbHNvIGRlY2xhcmVzIG5vXG4gKiBuYW1lIG9mIGl0cyBvd246IHRoZSBzdGF0ZW1lbnQgY2FuIHRoZXJlZm9yZSBuZXZlciBjb2xsaWRlIHdpdGggYSBiaW5kaW5nIG9mIHRoaXMgZnVuY3Rpb24sIHdoaWNoXG4gKiBpcyB3aGF0IHRoZSByYW5kb20gc3VmZml4IHJlbW92ZWQgb24gMjAyNi0wOS0yMCB1c2VkIHRvIGd1YXJkLlxuICpcbiAqICoqTm90aGluZyBpcyBmaWx0ZXJlZCBvdXQgb2YgdGhlIHBhdHRlcm4uKiogRXZlcnkgbmFtZSB0aGUgY29udGV4dCBjYXJyaWVzIGlzIGJvdW5kLCBhIG5hbWUgdGhhdFxuICogY2Fubm90IGJlIGEgdmFyaWFibGUgaW5jbHVkZWQgLSBhIGtleSBsaWtlIGB0ZXN0LXRlc3RgLCBhIHJlc2VydmVkIHdvcmQsIGEgc3ltYm9sLCB0aGUgaW5kZXggb2YgYW5cbiAqIGFycmF5LiBTdWNoIGEgY29udGV4dCBjYW5ub3QgYmUgcnVuIG92ZXIgYnkgdGhpcyBleGVjdXRlciBhdCBhbGwsIGFuZCBkcm9wcGluZyB0aGUgbmFtZSBzaWxlbnRseVxuICogd291bGQgaGlkZSBhIHByb3BlcnR5IHRoZSBjYWxsZXIgZGVmaW5lZC4gV2hhdCB0aGlzIGV4ZWN1dGVyIG93ZXMgdGhlIGNhbGxlciBpbnN0ZWFkIGlzIGEgbWVzc2FnZVxuICogdGhhdCBzYXlzIHdoaWNoIHN0YXRlbWVudCBmYWlsZWQgYW5kIHdoaWNoIG5hbWUgZGlkIGl0LCBiZWNhdXNlIHRoZSBzdGF0ZW1lbnQgaXRzZWxmIG5lZWQgbm90XG4gKiBtZW50aW9uIHRoYXQgbmFtZS5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gYVN0YXRlbWVudFxuICogQHBhcmFtIHtzdHJpbmd9IHRoZVByb3BlcnR5TmFtZVN0cmluZyB0aGUgY29udGV4dCBuYW1lcywgY29tbWEgc2VwYXJhdGVkLCBhcyB0aGUgZGVzdHJ1Y3R1cmluZ1xuICogICAgICAgICAgICAgICAgIHBhdHRlcm4gc3BlbGxzIHRoZW1cbiAqIEBwYXJhbSB7QXJyYXk8c3RyaW5nfHN5bWJvbD59IHRoZU5hbWVzIHRoZSBzYW1lIG5hbWVzIHVud3JpdHRlbiwgZm9yIHRoZSBlcnJvciBtZXNzYWdlXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259XG4gKi9cbmNvbnN0IGdlbmVyYXRlID0gKGFTdGF0ZW1lbnQsIHRoZVByb3BlcnR5TmFtZVN0cmluZywgdGhlTmFtZXMpID0+IHtcblx0Ly8gT25seSBoZXJlLCBhbmQgdGhlcmVmb3JlIG9uY2UgcGVyIGNvbnRleHQgc2hhcGUgYW5kIHN0YXRlbWVudCByYXRoZXIgdGhhbiBvbiBldmVyeSBleGVjdXRpb246XG5cdC8vIGEgY29uc29sZSB3cml0ZSBpbiBhIGJyb3dzZXIgY29zdHMgbW9yZSB0aGFuIGEgcmVzb2x1dGlvbiBkb2VzLCBhbmQgd2FybmluZyBwZXIgZXhlY3V0aW9uIGNvc3Rcblx0Ly8gdGhpcyBleGVjdXRlciBhIGZhY3RvciBvZiBmb3VyIHRvIHR3ZW50eS1maXZlIChtZWFzdXJlZCAyMDI2LTA5LTIyLCBgbnBtIHJ1biBiZW5jaGApLlxuXHRpZiAodGhlTmFtZXMubGVuZ3RoID4gSElHSF9QUk9QRVJUWV9DT1VOVClcblx0XHRjb25zb2xlLndhcm4oXG5cdFx0XHRgSGlnaCBjb3VudCBvZiBwcm9wZXJ0aWVzIGF0IGZpcnN0IGxldmVsLCBjYW4gYmUgZGVjcmVhc2UgdGhlIHBlcmZvcm1lbmNlISBjb3VudDogJHt0aGVOYW1lcy5sZW5ndGh9YCxcblx0XHQpO1xuXG5cdGNvbnN0IGNvZGUgPSBgXG5yZXR1cm4gKGFzeW5jICh7JHt0aGVQcm9wZXJ0eU5hbWVTdHJpbmd9fSkgPT4ge1xuICAgIHRyeXtcbiAgICAgICByZXR1cm4gJHthU3RhdGVtZW50fVxuICAgIH1jYXRjaChlKXtcbiAgICAgICAgdGhyb3cgZTtcbiAgICB9XG59KShhcmd1bWVudHNbMF0gfHwge30pO2A7XG5cblx0aWYgKERFQlVHKSBjb25zb2xlLmxvZyhcImdlbmVyZXJhdGVkIGNvZGU6IFxcblwiLCBjb2RlKTtcblxuXHR0cnkge1xuXHRcdHJldHVybiBuZXcgRnVuY3Rpb24oY29kZSk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHQvLyBvbmx5IGEgc3ludGF4IGVycm9yIGNhbiBjb21lIGZyb20gYSBuYW1lLiBBbnl0aGluZyBlbHNlIC0gdGhlIEV2YWxFcnJvciBvZiBhIENvbnRlbnQgU2VjdXJpdHlcblx0XHQvLyBQb2xpY3kgd2l0aG91dCAndW5zYWZlLWV2YWwnIGFtb25nIHRoZW0gLSBpcyBoYW5kZWQgb246IGFza2luZyBhYm91dCB0aGUgbmFtZXMgd291bGQgYmVcblx0XHQvLyByZWZ1c2VkIGFzIHdlbGwsIGFuZCBldmVyeSBuYW1lIHdvdWxkIGJlIGJsYW1lZFxuXHRcdGlmICghKGUgaW5zdGFuY2VvZiBTeW50YXhFcnJvcikpIHRocm93IGU7XG5cblx0XHRjb25zdCB1bnVzYWJsZSA9IHVudXNhYmxlTmFtZXModGhlTmFtZXMpO1xuXHRcdC8vIG5vdGhpbmcgd3Jvbmcgd2l0aCB0aGUgbmFtZXM6IHRoZSBzdGF0ZW1lbnQgaXRzZWxmIGRvZXMgbm90IGNvbXBpbGUsIGFuZCB0aGF0IGVycm9yIHNheXNcblx0XHQvLyBtb3JlIHRoYW4gYW55dGhpbmcgdGhpcyBleGVjdXRlciBjb3VsZCBhZGRcblx0XHRpZiAodW51c2FibGUubGVuZ3RoID09PSAwKSB0aHJvdyBlO1xuXG5cdFx0dGhyb3cgbmV3IFN5bnRheEVycm9yKFxuXHRcdFx0YENvbnRleHQgcHJvcGVydHkgJHt1bnVzYWJsZS5sZW5ndGggPT09IDEgPyBcIm5hbWVcIiA6IFwibmFtZXNcIn0gXCIke3VudXNhYmxlLmpvaW4oJ1wiLCBcIicpfVwiIGNhbm5vdCBiZSB1c2VkIGFzIGEgdmFyaWFibGUgYnkgJHtFWEVDVVRFUk5BTUV9LCBzbyB0aGlzIHN0YXRlbWVudCBjYW5ub3QgcnVuIG92ZXIgdGhpcyBjb250ZXh0ISBzdGF0ZW1lbnQ6ICR7YVN0YXRlbWVudH1gLFxuXHRcdFx0eyBjYXVzZTogZSB9LFxuXHRcdCk7XG5cdH1cbn07XG5cbi8qKlxuICogVGhlIGV4ZWN1dGVyOiBkZXN0cnVjdHVyZXMgdGhlIGNvbnRleHQgaW50byB0aGUgcGFyYW1ldGVycyBvZiBhIGdlbmVyYXRlZCBmdW5jdGlvbiwgc28gYVxuICogc3RhdGVtZW50IGFkZHJlc3NlcyBhIGNvbnRleHQgdmFsdWUgYnkgaXRzIGJhcmUgbmFtZSAtIHNlZSBgUkVBRE1FLm1kYC5cbiAqIFJlZ2lzdGVyZWQgdW5kZXIgYEVYRUNVVEVSTkFNRWAgb24gaW1wb3J0LlxuICpcbiAqIEB0eXBlIHtFeGVjdXRlcn1cbiAqL1xuY29uc3QgRVhFQ1VURVIgPSBuZXcgRXhlY3V0ZXIoe1xuXHRleGVjdXRpb246IChhU3RhdGVtZW50LCBhQ29udGV4dCkgPT4ge1xuXHRcdGNvbnN0IHByb3BlcnR5TmFtZXMgPSBnZXRQcm9wZXJ0eU5hbWVzKGFDb250ZXh0KTtcblx0XHRjb25zdCBleHByZXNzaW9uID0gZ2V0T3JDcmVhdGVGdW5jdGlvbihhU3RhdGVtZW50LCBwcm9wZXJ0eU5hbWVzKTtcblx0XHRyZXR1cm4gZXhwcmVzc2lvbihhQ29udGV4dCk7XG5cdH0sXG59KTtcblxucmVnaXN0ZXIoRVhFQ1VURVJOQU1FLCBFWEVDVVRFUik7XG5cbmV4cG9ydCBkZWZhdWx0IEVYRUNVVEVSO1xuIiwiaW1wb3J0IHsgcmVnaXN0ZXIgfSBmcm9tIFwiLi4vRXhlY3V0ZXJSZWdpc3RyeS5qc1wiO1xuaW1wb3J0IEV4ZWN1dGVyIGZyb20gXCIuLi9FeGVjdXRlci5qc1wiO1xuaW1wb3J0IENvZGVDYWNoZSBmcm9tIFwiLi4vQ29kZUNhY2hlLmpzXCI7XG5cbi8qKiBUaGUgbmFtZSB0aGlzIGV4ZWN1dGVyIGlzIHJlZ2lzdGVyZWQgdW5kZXIuICovXG5leHBvcnQgY29uc3QgRVhFQ1VURVJOQU1FID0gXCJjb250ZXh0LW9iamVjdC1leGVjdXRlclwiO1xuY29uc3QgRVhQUkVTU0lPTl9DQUNIRSA9IG5ldyBDb2RlQ2FjaGUoKTtcbi8qKiBUaGUgbmFtZSBhIHN0YXRlbWVudCBhZGRyZXNzZXMgdGhlIGNvbnRleHQgYnkuICovXG5sZXQgQ09OVEVYVF9WQVIgPSBcImN0eFwiO1xuXG4vKipcbiAqIENvbmZpZ3VyZXMgdGhpcyBleGVjdXRlcjogdGhlIHNpemUgb2YgaXRzIGNvZGUgY2FjaGUgYW5kIHRoZSBuYW1lIGEgc3RhdGVtZW50IGFkZHJlc3NlcyB0aGVcbiAqIGNvbnRleHQgYnkuIEFuIG9wdGlvbiBsZWZ0IG91dCBjaGFuZ2VzIG5vdGhpbmcuXG4gKlxuICogQHBhcmFtIHtvYmplY3R9IFtvcHRpb25zXVxuICogQHBhcmFtIHtudW1iZXJ9IFtvcHRpb25zLnNpemVdIHRoZSBzaXplIG9mIHRoZSBjb2RlIGNhY2hlLCBhcyBgQ29kZUNhY2hlT3B0aW9uc2AgZGVzY3JpYmVzIGl0IGluXG4gKiBgQ29kZUNhY2hlLmpzYFxuICogQHBhcmFtIHs/c3RyaW5nfSBbb3B0aW9ucy5jb250ZXh0VmFyXSB0aGUgbmFtZSBhIHN0YXRlbWVudCBhZGRyZXNzZXMgdGhlIGNvbnRleHQgYnksIGBjdHhgIHVudGlsIGl0XG4gKiBpcyBzZXQsIHRha2VuIHRyaW1tZWQuIEl0IGhvbGRzIGZvciBldmVyeSBzdGF0ZW1lbnQgdGhpcyBleGVjdXRlciBydW5zIGZyb20gdGhlbiBvbiwgd2hpY2hldmVyXG4gKiByZXNvbHZlciBoYW5kcyBpdCBvdmVyLiBOdWxsLCB1bmRlZmluZWQgYW5kIGEgc3RyaW5nIHRoYXQgaXMgZW1wdHkgYWZ0ZXIgdHJpbW1pbmcgbGVhdmUgdGhlIG5hbWVcbiAqIGFzIGl0IGlzLiBBIG5hbWUgdGhhdCBjYW5ub3QgYmUgYSBwYXJhbWV0ZXIgbmFtZSBpcyBub3QgcmVqZWN0ZWQgaGVyZTogZXZlcnkgc3RhdGVtZW50IHRoZW5cbiAqIHRocm93cyBhIGBTeW50YXhFcnJvcmAuXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IHdoZXJlIHRoZSBzaXplIGlzIG5vdCBhIGZpbml0ZSBudW1iZXIsIG9yIHRoZSBuYW1lIGlzIG5laXRoZXIgYSBzdHJpbmcgbm9yXG4gKiBudWxsIG9yIHVuZGVmaW5lZFxuICovXG5leHBvcnQgY29uc3Qgc2V0dXBFeGVjdXRlciA9IChvcHRpb25zKSA9PiB7XG5cdEVYUFJFU1NJT05fQ0FDSEUuc2V0dXAob3B0aW9ucyk7XG5cdENPTlRFWFRfVkFSID1cblx0XHRvcHRpb25zPy5jb250ZXh0VmFyID09IG51bGwgfHwgb3B0aW9ucz8uY29udGV4dFZhci50cmltKCkubGVuZ3RoID09PSAwXG5cdFx0XHQ/IENPTlRFWFRfVkFSXG5cdFx0XHQ6IG9wdGlvbnM/LmNvbnRleHRWYXIudHJpbSgpO1xufTtcblxuLyoqXG4gKiBUaGUgbmFtZSBhIHN0YXRlbWVudCBhZGRyZXNzZXMgdGhlIGNvbnRleHQgYnk6IGBjdHhgLCBvciB0aGUgb25lIGBzZXR1cEV4ZWN1dGVyYCBzZXQgbGFzdC5cbiAqXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG5leHBvcnQgY29uc3QgZ2V0Q29udGV4dFZhciA9ICgpID0+IENPTlRFWFRfVkFSO1xuXG4vKipcbiAqIENvbXBpbGVzIGEgc3RhdGVtZW50IGludG8gYSBmdW5jdGlvbiB0aGF0IGhhbmRzIHRoZSBjb250ZXh0IG92ZXIgdW5kZXIgdGhlIG5hbWUgYSBzdGF0ZW1lbnRcbiAqIGFkZHJlc3NlcyBpdCBieS5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gYVN0YXRlbWVudFxuICogQHJldHVybnMge0Z1bmN0aW9ufVxuICovXG5jb25zdCBnZW5lcmF0ZSA9IChhU3RhdGVtZW50KSA9PiB7XG5cdGNvbnN0IGNvZGUgPSBgXG5yZXR1cm4gKGFzeW5jICgke0NPTlRFWFRfVkFSfSkgPT4ge1xuICAgIHRyeXtcbiAgICAgICAgcmV0dXJuICR7YVN0YXRlbWVudH1cbiAgICB9Y2F0Y2goZSl7XG4gICAgICAgIHRocm93IGU7XG4gICAgfVxufSkoYXJndW1lbnRzWzBdIHx8IHt9KTtgO1xuXG5cdC8vY29uc29sZS5sb2coXCJjb2RlXCIsIGNvZGUpO1xuXG5cdHJldHVybiBuZXcgRnVuY3Rpb24oY29kZSk7XG59O1xuXG4vKipcbiAqIFRoZSBjb21waWxlZCBmdW5jdGlvbiBmb3IgYSBzdGF0ZW1lbnQsIGZyb20gdGhlIGNhY2hlIG9yIGNvbXBpbGVkIG5vdyBhbmQgY2FjaGVkLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBhU3RhdGVtZW50XG4gKiBAcmV0dXJucyB7RnVuY3Rpb259XG4gKi9cbmNvbnN0IGdldE9yQ3JlYXRlRnVuY3Rpb24gPSAoYVN0YXRlbWVudCkgPT4ge1xuXHRjb25zdCBjYWNoZUtleSA9IGAke0NPTlRFWFRfVkFSfTo6JHthU3RhdGVtZW50fWA7XG5cblx0aWYgKEVYUFJFU1NJT05fQ0FDSEUuaGFzKGNhY2hlS2V5KSkge1xuXHRcdHJldHVybiBFWFBSRVNTSU9OX0NBQ0hFLmdldChjYWNoZUtleSk7XG5cdH1cblx0Y29uc3QgZXhwcmVzc2lvbiA9IGdlbmVyYXRlKGFTdGF0ZW1lbnQpO1xuXHRFWFBSRVNTSU9OX0NBQ0hFLnNldChjYWNoZUtleSwgZXhwcmVzc2lvbik7XG5cdHJldHVybiBleHByZXNzaW9uO1xufTtcblxuLyoqXG4gKiBUaGUgZXhlY3V0ZXI6IGhhbmRzIHRoZSBjb250ZXh0IG92ZXIgYXMgb25lIG9iamVjdCBuYW1lZCBgY3R4YCwgb3IgdGhlIG5hbWUgYHNldHVwRXhlY3V0ZXJgIHNldHMsXG4gKiBzbyBhIHN0YXRlbWVudCBhZGRyZXNzZXMgYSBjb250ZXh0IHZhbHVlIGFzIGBjdHgudmFsdWVgIC0gc2VlIGBSRUFETUUubWRgLiBSZWdpc3RlcmVkIHVuZGVyXG4gKiBgRVhFQ1VURVJOQU1FYCBvbiBpbXBvcnQuXG4gKlxuICogQHR5cGUge0V4ZWN1dGVyfVxuICovXG5jb25zdCBFWEVDVVRFUiA9IG5ldyBFeGVjdXRlcih7XG5cdGV4ZWN1dGlvbjogKGFTdGF0ZW1lbnQsIGFDb250ZXh0KSA9PiB7XG5cdFx0Y29uc3QgZXhwcmVzc2lvbiA9IGdldE9yQ3JlYXRlRnVuY3Rpb24oYVN0YXRlbWVudCk7XG5cdFx0cmV0dXJuIGV4cHJlc3Npb24oYUNvbnRleHQpO1xuXHR9LFxufSk7XG5cbnJlZ2lzdGVyKEVYRUNVVEVSTkFNRSwgRVhFQ1VURVIpO1xuXG5leHBvcnQgZGVmYXVsdCBFWEVDVVRFUjtcbiIsImltcG9ydCB7IHJlZ2lzdGVyIH0gZnJvbSBcIi4uL0V4ZWN1dGVyUmVnaXN0cnkuanNcIjtcbmltcG9ydCBFeGVjdXRlciBmcm9tIFwiLi4vRXhlY3V0ZXIuanNcIjtcbmltcG9ydCBDb2RlQ2FjaGUgZnJvbSBcIi4uL0NvZGVDYWNoZS5qc1wiO1xuXG4vKiogVGhlIG5hbWUgdGhpcyBleGVjdXRlciBpcyByZWdpc3RlcmVkIHVuZGVyLiAqL1xuZXhwb3J0IGNvbnN0IEVYRUNVVEVSTkFNRSA9IFwid2l0aC1zY29wZWQtZXhlY3V0ZXJcIjtcbmNvbnN0IEVYUFJFU1NJT05fQ0FDSEUgPSBuZXcgQ29kZUNhY2hlKCk7XG5cbi8qKlxuICogQ29uZmlndXJlcyB0aGUgY29kZSBjYWNoZSBvZiB0aGlzIGV4ZWN1dGVyLiBgc2l6ZWAgaXMgdGhlIG9ubHkgb3B0aW9uXG4gKiB0b2RheTsgYW4gb3B0aW9uIGxlZnQgb3V0IGNoYW5nZXMgbm90aGluZy5cbiAqXG4gKiBAcGFyYW0ge2ltcG9ydCgnLi4vQ29kZUNhY2hlLmpzJykuQ29kZUNhY2hlT3B0aW9uc30gW29wdGlvbnNdXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IHdoZXJlIHRoZSBzaXplIGlzIG5vdCBhIGZpbml0ZSBudW1iZXJcbiAqL1xuZXhwb3J0IGNvbnN0IHNldHVwRXhlY3V0ZXIgPSAob3B0aW9ucykgPT4ge1xuXHRFWFBSRVNTSU9OX0NBQ0hFLnNldHVwKG9wdGlvbnMpO1xufTtcblxubGV0IGluaXRpYWxDYWxsID0gdHJ1ZTtcblxuLyoqXG4gKiBDb21waWxlcyBhIHN0YXRlbWVudCBpbnRvIGEgZnVuY3Rpb24gdGhhdCBydW5zIGl0IGluc2lkZSBhIGB3aXRoYCBibG9jayBvdmVyIHRoZSBjb250ZXh0LlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBhU3RhdGVtZW50XG4gKiBAcmV0dXJucyB7RnVuY3Rpb259XG4gKi9cbmNvbnN0IGdlbmVyYXRlID0gKGFTdGF0ZW1lbnQpID0+IHtcblx0Y29uc3QgY29kZSA9IGBcblx0cmV0dXJuIChhc3luYyBmdW5jdGlvbiAoKXtcblx0XHR3aXRoKGFyZ3VtZW50c1swXSB8fCB7fSl7XG5cdFx0XHR0cnl7XG5cdFx0XHRcdHJldHVybiAke2FTdGF0ZW1lbnR9XG5cdFx0XHR9Y2F0Y2goZSl7XG5cdFx0XHRcdHRocm93IGU7XG5cdFx0XHR9XG5cdFx0fVxuXHR9KShhcmd1bWVudHNbMF0gfHwge30pO1xuYDtcblx0Ly9jb25zb2xlLmxvZyhcImNvZGVcIiwgY29kZSk7XG5cblx0cmV0dXJuIG5ldyBGdW5jdGlvbihjb2RlKTtcbn07XG5cbi8qKlxuICogVGhlIGNvbXBpbGVkIGZ1bmN0aW9uIGZvciBhIHN0YXRlbWVudCwgZnJvbSB0aGUgY2FjaGUgb3IgY29tcGlsZWQgbm93IGFuZCBjYWNoZWQuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGFTdGF0ZW1lbnRcbiAqIEByZXR1cm5zIHtGdW5jdGlvbn1cbiAqL1xuY29uc3QgZ2V0T3JDcmVhdGVGdW5jdGlvbiA9IChhU3RhdGVtZW50KSA9PiB7XG5cdGlmIChFWFBSRVNTSU9OX0NBQ0hFLmhhcyhhU3RhdGVtZW50KSkge1xuXHRcdHJldHVybiBFWFBSRVNTSU9OX0NBQ0hFLmdldChhU3RhdGVtZW50KTtcblx0fVxuXHRjb25zdCBleHByZXNzaW9uID0gZ2VuZXJhdGUoYVN0YXRlbWVudCk7XG5cdEVYUFJFU1NJT05fQ0FDSEUuc2V0KGFTdGF0ZW1lbnQsIGV4cHJlc3Npb24pO1xuXHRyZXR1cm4gZXhwcmVzc2lvbjtcbn07XG5cbi8qKlxuICogVGhlIGV4ZWN1dGVyOiBydW5zIGEgc3RhdGVtZW50IGluc2lkZSBhIGB3aXRoYCBibG9jayBvdmVyIHRoZSBjb250ZXh0LCBzbyBhIHN0YXRlbWVudCBhZGRyZXNzZXMgYVxuICogY29udGV4dCB2YWx1ZSBieSBpdHMgYmFyZSBuYW1lIC0gc2VlIGBSRUFETUUubWRgLiBSZWdpc3RlcmVkIHVuZGVyXG4gKiBgRVhFQ1VURVJOQU1FYCBvbiBpbXBvcnQuXG4gKlxuICogQGRlcHJlY2F0ZWQgYmVjYXVzZSBgd2l0aGAgaXM7IGFubm91bmNlcyBpdCBvbiB0aGUgZmlyc3Qgc3RhdGVtZW50IGl0IHJ1bnNcbiAqIEB0eXBlIHtFeGVjdXRlcn1cbiAqL1xuY29uc3QgRVhFQ1VURVIgPSBuZXcgRXhlY3V0ZXIoe1xuXHRleGVjdXRpb246IChhU3RhdGVtZW50LCBhQ29udGV4dCkgPT4ge1xuXHRcdGlmIChpbml0aWFsQ2FsbCkge1xuXHRcdFx0aW5pdGlhbENhbGwgPSBmYWxzZTtcblx0XHRcdGNvbnNvbGUud2Fybihcblx0XHRcdFx0bmV3IEVycm9yKGBXaXRoIFNjb3BlZCBleHByZXNzaW9uIGV4ZWN1dGlvbiBpcyBtYXJrZWQgYXMgZGVwcmVjYXRlZC5gKSxcblx0XHRcdCk7XG5cdFx0fVxuXG5cdFx0Y29uc3QgZXhwcmVzc2lvbiA9IGdldE9yQ3JlYXRlRnVuY3Rpb24oYVN0YXRlbWVudCk7XG5cdFx0cmV0dXJuIGV4cHJlc3Npb24oYUNvbnRleHQpO1xuXHR9LFxufSk7XG5yZWdpc3RlcihFWEVDVVRFUk5BTUUsIEVYRUNVVEVSKTtcblxuZXhwb3J0IGRlZmF1bHQgRVhFQ1VURVI7XG4iLCJpbXBvcnQgXCIuL1dpdGhTY29wZWRFeGVjdXRlci5qc1wiO1xuaW1wb3J0IFwiLi9Db250ZXh0T2JqZWN0RXhlY3V0ZXIuanNcIjtcbmltcG9ydCBcIi4vQ29udGV4dERlY29uc3RydWN0b3JFeGVjdXRlci5qc1wiO1xuIiwiaW1wb3J0IHsgbGF6eVByb21pc2UgfSBmcm9tIFwiQGRlZmF1bHQtanMvZGVmYXVsdGpzLWNvbW1vbi11dGlscy9zcmMvUHJvbWlzZVV0aWxzLmpzXCI7XG5pbXBvcnQgRGlyZWN0aXZlIGZyb20gXCIuL0RpcmVjdGl2ZS5qc1wiO1xuaW1wb3J0IFRlbXBsYXRlIGZyb20gXCIuL1RlbXBsYXRlLmpzXCI7XG5pbXBvcnQgeyBFeHByZXNzaW9uUmVzb2x2ZXIgfSBmcm9tIFwiQGRlZmF1bHQtanMvZGVmYXVsdGpzLWV4cHJlc3Npb24tbGFuZ3VhZ2UvaW5kZXguanNcIjtcblxuY29uc3QgdG9UZW1wbGF0ZSA9ICh0ZW1wbGF0ZSkgPT4ge1xuXHRpZiAodGVtcGxhdGUgaW5zdGFuY2VvZiBUZW1wbGF0ZSkgcmV0dXJuIHRlbXBsYXRlLmltcG9ydENvbnRlbnQoKTtcblx0ZWxzZSBpZiAodHlwZW9mIHRlbXBsYXRlID09PSBcInN0cmluZ1wiKSByZXR1cm4gY3JlYXRlKHRlbXBsYXRlKTtcblx0cmV0dXJuIHRlbXBsYXRlO1xufTtcblxubGV0IGlkID0gMDtcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbnRleHQge1xuXHQjaWQ7XG5cdCNkZXB0aDtcblx0I3BhcmVudDtcblx0I3JlbmRlcmVyO1xuXHQjcm9vdDtcblx0I3RlbXBsYXRlO1xuXHQjbW9kZTtcblx0I3N1YmNvbnRleHRzO1xuXHQjd2FpdDtcblx0I2lnbm9yZURpcmVjdGl2ZXM7XG5cdCNjYWxsYmFja3M7XG5cblx0XG5cdC8qKlxuXHQgKiBDcmVhdGVzIGFuIGluc3RhbmNlIG9mIENvbnRleHQuXG5cdCAqXG5cdCAqIEBjb25zdHJ1Y3RvclxuXHQgKiBAcGFyYW0ge29iamVjdH0gb3B0aW9uc1xuXHQgKiBAcGFyYW0ge05vZGVMaXN0fSBbb3B0aW9ucy5jb250ZW50PW51bGxdIFxuXHQgKiBAcGFyYW0ge0V4cHJlc3Npb25SZXNvbHZlcn0gb3B0aW9ucy5yZXNvbHZlciBcblx0ICogQHBhcmFtIHtpbXBvcnQoXCIuL1JlbmRlcmVyLmpzXCIpLmRlZmF1bHR9IG9wdGlvbnMucmVuZGVyZXIgXG5cdCAqIEBwYXJhbSB7VGVtcGxhdGV8c3RyaW5nfSBvcHRpb25zLnRlbXBsYXRlIFxuXHQgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBvcHRpb25zLmNvbnRhaW5lciBcblx0ICogQHBhcmFtIHtIVE1MRWxlbWVudH0gb3B0aW9ucy5yb290IFxuXHQgKiBAcGFyYW0ge3N0cmluZ30gW29wdGlvbnMubW9kZT1cInJlcGxhY2VcIl0gXG5cdCAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IFtvcHRpb25zLnRhcmdldD1udWxsXSBcblx0ICogQHBhcmFtIHtDb250ZXh0fSBbb3B0aW9ucy5wYXJlbnQ9bnVsbF0gXG5cdCAqIEBwYXJhbSB7UHJvbWlzZTw+fSBbb3B0aW9ucy53YWl0PW51bGxdIFxuXHQgKiBAcGFyYW0ge0FycmF5PEZ1bmN0aW9uPn0gW29wdGlvbnMuY2FsbGJhY2tzPW51bGxdIFxuXHQgKiBAcGFyYW0ge1NldDxEaXJlY3RpdmV8c3RyaW5nPn0gb3B0aW9ucy5pZ25vcmVEaXJlY3RpdmUgXG5cdCAqL1xuXHRjb25zdHJ1Y3Rvcih7IGNvbnRlbnQgPSBudWxsLCByZXNvbHZlciwgcmVuZGVyZXIsIHRlbXBsYXRlLCBjb250YWluZXIsIHJvb3QsIG1vZGUgPSBcInJlcGxhY2VcIiwgdGFyZ2V0ID0gbnVsbCwgcGFyZW50ID0gbnVsbCwgd2FpdCA9IG51bGwsIGNhbGxiYWNrcyA9IG51bGwsIGlnbm9yZURpcmVjdGl2ZSB9KSB7XG5cdFx0aWYgKCFyZXNvbHZlcikgdGhyb3cgbmV3IEVycm9yKCdQYXJhbWV0ZXIgXCJyZXNvbHZlclwiIGlzIHJlcXVpcmVkIScpO1xuXHRcdGlmICghcmVuZGVyZXIpIHRocm93IG5ldyBFcnJvcignUGFyYW1ldGVyIFwicmVuZGVyZXJcIiBpcyByZXF1aXJlZCEnKTtcblx0XHRpZiAoIXRlbXBsYXRlKSB0aHJvdyBuZXcgRXJyb3IoJ1BhcmFtZXRlciBcInRlbXBsYXRlXCIgaXMgcmVxdWlyZWQhJyk7XG5cdFx0aWYgKCFjb250YWluZXIpIHRocm93IG5ldyBFcnJvcignUGFyYW1ldGVyIFwiY29udGFpbmVyXCIgaXMgcmVxdWlyZWQhJyk7XG5cdFx0aWYgKCFyb290KSB0aHJvdyBuZXcgRXJyb3IoJ1BhcmFtZXRlciBcInJvb3RcIiBpcyByZXF1aXJlZCEnKTtcblxuXHRcdHRoaXMuI2lkID0gcGFyZW50ID8gYCR7cGFyZW50LmlkfS0+JHtpZCsrfWAgOiBgcm9vdDo6JHtpZCsrfWA7XG5cdFx0dGhpcy4jZGVwdGggPSBwYXJlbnQgPyBwYXJlbnQuZGVwdGggKyAxIDogMDtcblx0XHR0aGlzLiNwYXJlbnQgPSBwYXJlbnQ7XG5cdFx0dGhpcy4jcmVuZGVyZXIgPSByZW5kZXJlcjtcblx0XHR0aGlzLiNyb290ID0gcm9vdDtcblx0XHR0aGlzLiN0ZW1wbGF0ZSA9IHRvVGVtcGxhdGUodGVtcGxhdGUpO1xuXHRcdHRoaXMuI21vZGUgPSBtb2RlO1xuXHRcdHRoaXMuI3N1YmNvbnRleHRzID0gbmV3IFNldCgpO1xuXHRcdHRoaXMuI3dhaXQgPSB3YWl0ID8gd2FpdCA6IGxhenlQcm9taXNlKCk7XG5cdFx0dGhpcy4jaWdub3JlRGlyZWN0aXZlcyA9IGlnbm9yZURpcmVjdGl2ZSBpbnN0YW5jZW9mIFNldCA/IGlnbm9yZURpcmVjdGl2ZSA6IG5ldyBTZXQoKTtcblx0XHR0aGlzLiNjYWxsYmFja3MgPSBjYWxsYmFja3MgaW5zdGFuY2VvZiBBcnJheSA/IGNhbGxiYWNrcyA6IFtdO1xuXG5cdFx0dGhpcy5jb250ZW50ID0gY29udGVudDtcblx0XHR0aGlzLmNvbnRhaW5lciA9IGNvbnRhaW5lcjtcblx0XHR0aGlzLnRhcmdldCA9IHRhcmdldDtcblx0XHR0aGlzLnJlc29sdmVyID0gcmVzb2x2ZXI7XG5cblx0XHQvKiBleGVjdXRpb24gZmxhZ3MgKi9cblx0XHR0aGlzLnN0b3AgPSBmYWxzZTtcblx0XHR0aGlzLmlnbm9yZSA9IGZhbHNlO1xuXHRcdC8vY29uc29sZS5sb2coYGNvbnRleHQ9e1wiZGVwdGhcIjoke3RoaXMuZGVwdGh9IH0sIFwiaWRcIjogJHt0aGlzLmlkfWApO1xuXHRcdC8vdGhpcy5jcmVhdGV0QXQgPSBuZXcgRXJyb3IoKTtcblxuXHRcdGlmIChwYXJlbnQpIHtcblx0XHRcdHBhcmVudC5zdWJjb250ZXh0cy5hZGQodGhpcyk7XG5cdFx0fVxuXHR9XG5cblx0Z2V0IGlkKCkge1xuXHRcdHJldHVybiB0aGlzLiNpZDtcblx0fVxuXHRnZXQgZGVwdGgoKSB7XG5cdFx0cmV0dXJuIHRoaXMuI2RlcHRoO1xuXHR9XG5cdGdldCBwYXJlbnQoKSB7XG5cdFx0cmV0dXJuIHRoaXMuI3BhcmVudDtcblx0fVxuXHRnZXQgcmVuZGVyZXIoKSB7XG5cdFx0cmV0dXJuIHRoaXMuI3JlbmRlcmVyO1xuXHR9XG5cdGdldCByb290KCkge1xuXHRcdHJldHVybiB0aGlzLiNyb290O1xuXHR9XG5cdGdldCB0ZW1wbGF0ZSgpIHtcblx0XHRyZXR1cm4gdGhpcy4jdGVtcGxhdGU7XG5cdH1cblx0c2V0IHRlbXBsYXRlKHRlbXBsYXRlKXtcblx0XHR0aGlzLiN0ZW1wbGF0ZSA9IHRvVGVtcGxhdGUodGVtcGxhdGUpO1xuXHR9XG5cblx0Z2V0IG1vZGUoKSB7XG5cdFx0cmV0dXJuIHRoaXMuI21vZGU7XG5cdH1cblx0Z2V0IHN1YmNvbnRleHRzKCkge1xuXHRcdHJldHVybiB0aGlzLiNzdWJjb250ZXh0cztcblx0fVxuXG5cdGdldCBjbG9zZWQoKSB7XG5cdFx0cmV0dXJuIHRoaXMuI3dhaXQucmVzb2x2ZWQ7XG5cdH1cblxuXHRpZ25vcmVEaXJlY3RpdmUoZGlyZWN0aXZlKSB7XG5cdFx0Y29uc3QgaWdub3JlRGlyZWN0aXZlcyA9IHRoaXMuI2lnbm9yZURpcmVjdGl2ZXM7XG5cdFx0ZGlyZWN0aXZlIGluc3RhbmNlb2YgRGlyZWN0aXZlID8gaWdub3JlRGlyZWN0aXZlcy5hZGQoZGlyZWN0aXZlLm5hbWUpIDogaWdub3JlRGlyZWN0aXZlcy5hZGQoZGlyZWN0aXZlKTtcblx0fVxuXG5cdGFjY2VwdERpcmVjdGl2ZShkaXJlY3RpdmUpIHtcblx0XHRjb25zdCBpZ25vcmVEaXJlY3RpdmVzID0gdGhpcy4jaWdub3JlRGlyZWN0aXZlcztcblx0XHRpZiAoZGlyZWN0aXZlIGluc3RhbmNlb2YgRGlyZWN0aXZlKSByZXR1cm4gIShpZ25vcmVEaXJlY3RpdmVzLmhhcyhkaXJlY3RpdmUubmFtZSkgfHwgaWdub3JlRGlyZWN0aXZlcy5oYXMoZGlyZWN0aXZlKSk7XG5cblx0XHRyZXR1cm4gIWlnbm9yZURpcmVjdGl2ZXMuaGFzKGRpcmVjdGl2ZSk7XG5cdH1cblxuXHRmaW5pc2hlZChjYWxsYmFjaykge1xuXHRcdGlmICh0aGlzLnBhcmVudCkgdGhpcy5wYXJlbnQuZmluaXNoZWQoY2FsbGJhY2spO1xuXHRcdGVsc2UgdGhpcy5yZWFkeShjYWxsYmFjayk7XG5cdH1cblxuXHRhc3luYyByZWFkeShjYWxsYmFjaykge1xuXHRcdGNvbnN0IGNhbGxiYWNrcyA9IHRoaXMuI2NhbGxiYWNrcztcblx0XHRpZiAoY2FsbGJhY2spIHtcblx0XHRcdGlmIChjYWxsYmFjayBpbnN0YW5jZW9mIEFycmF5KSBjYWxsYmFjay5mb3JFYWNoKChjYWxsYmFjaykgPT4gdGhpcy5yZWFkeShjYWxsYmFjaykpO1xuXHRcdFx0ZWxzZSBpZiAoY2FsbGJhY2sgaW5zdGFuY2VvZiBQcm9taXNlKSBjYWxsYmFja3MucHVzaChhc3luYyAoKSA9PiBhd2FpdCBjYWxsYmFjayk7XG5cdFx0XHRlbHNlIGlmICh0eXBlb2YgY2FsbGJhY2sgPT09IFwiZnVuY3Rpb25cIikgY2FsbGJhY2tzLnB1c2goY2FsbGJhY2spO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRjb25zdCB3YWl0ID0gdGhpcy4jd2FpdDtcblx0XHRcdGlmICghd2FpdC5yZXNvbHZlZCkge1xuXHRcdFx0XHRpZiAoIXRoaXMuaWdub3JlKSBmb3IgKGxldCBjYWxsYmFjayBvZiBjYWxsYmFja3MpIGF3YWl0IGNhbGxiYWNrKHRoaXMpO1xuXG5cdFx0XHRcdGZvciAobGV0IGNoaWxkIG9mIHRoaXMuc3ViY29udGV4dHMpIGF3YWl0IGNoaWxkLnJlYWR5KCk7XG5cblx0XHRcdFx0aWYgKHRoaXMucGFyZW50KSB0aGlzLnBhcmVudC5zdWJjb250ZXh0cy5kZWxldGUodGhpcyk7XG5cblx0XHRcdFx0d2FpdC5yZXNvbHZlKHRoaXMpO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gd2FpdDtcblx0XHR9XG5cdH1cblxuXHRzdWJDb250ZXh0KHsgcmVzb2x2ZXIgPSB0aGlzLnJlc29sdmVyLCByZW5kZXJlciA9IHRoaXMucmVuZGVyZXIsIHRlbXBsYXRlID0gdGhpcy50ZW1wbGF0ZSwgY29udGFpbmVyID0gdGhpcy5jb250YWluZXIsIHJvb3QgPSB0aGlzLnJvb3QsIG1vZGUgPSB0aGlzLm1vZGUsIHRhcmdldCA9IHRoaXMudGFyZ2V0LCBpZ25vcmVEaXJlY3RpdmUgPSBudWxsIH0gPSB7fSkge1xuXHRcdHJldHVybiBuZXcgQ29udGV4dCh7IHJlc29sdmVyLCByZW5kZXJlciwgdGVtcGxhdGUsIGNvbnRhaW5lciwgbW9kZSwgcm9vdCwgdGFyZ2V0LCBwYXJlbnQ6IHRoaXMsIGlnbm9yZURpcmVjdGl2ZSB9KTtcblx0fVxuXG5cdGNsb25lKHsgY29udGVudCA9IHRoaXMuY29udGVudCwgdGVtcGxhdGUgPSB0aGlzLnRlbXBsYXRlLCBjb250YWluZXIgPSB0aGlzLmNvbnRhaW5lciwgcm9vdCA9IHRoaXMucm9vdCwgbW9kZSA9IHRoaXMubW9kZSwgdGFyZ2V0ID0gdGhpcy50YXJnZXQsIGlnbm9yZURpcmVjdGl2ZSA9IHRoaXMuI2lnbm9yZURpcmVjdGl2ZXMgfSA9IHt9KSB7XG5cdFx0cmV0dXJuIG5ldyBDb250ZXh0KHsgY29udGVudCwgXG5cdFx0XHRyZXNvbHZlcjogdGhpcy5yZXNvbHZlciwgXG5cdFx0XHRyZW5kZXJlcjogdGhpcy5yZW5kZXJlciwgXG5cdFx0XHR0ZW1wbGF0ZSwgXG5cdFx0XHRjb250YWluZXIsIFxuXHRcdFx0cm9vdCwgXG5cdFx0XHRtb2RlLCBcblx0XHRcdHRhcmdldCwgXG5cdFx0XHRpZ25vcmVEaXJlY3RpdmUsXG5cdFx0XHR3YWl0OiB0aGlzLiN3YWl0LFxuXHRcdFx0Y2FsbGJhY2tzOiB0aGlzLiNjYWxsYmFja3Ncblx0XHQgfSk7XG5cdH1cblxuXHR0b1JlbmRlck9wdGlvbih7IHJlc29sdmVyID0gdGhpcy5yZXNvbHZlciwgcmVuZGVyZXIgPSB0aGlzLnJlbmRlcmVyLCB0ZW1wbGF0ZSA9IHRoaXMudGVtcGxhdGUsIGNvbnRhaW5lciA9IHRoaXMuY29udGFpbmVyLCByb290ID0gdGhpcy5yb290LCBtb2RlID0gdGhpcy5tb2RlLCB0YXJnZXQgPSB0aGlzLnRhcmdldCwgaWdub3JlRGlyZWN0aXZlID0gbnVsbCB9ID0ge30pIHtcblx0XHRyZXR1cm4geyByZXNvbHZlciwgcmVuZGVyZXIsIHRlbXBsYXRlLCBjb250YWluZXIsIG1vZGUsIHJvb3QsIHRhcmdldCwgcGFyZW50OiBudWxsLCBpZ25vcmVEaXJlY3RpdmUgfTtcblx0fVxufVxuIiwiaW1wb3J0IENvbnRleHQgZnJvbSBcIi4vQ29udGV4dC5qc1wiO1xuXG5cbmNvbnN0IERFRklORURfRElSRUNUSVZFUyA9IFtdO1xuXG5cbi8qKlxuICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnNcbiAqIEBwYXJhbSB7RGlyZWN0aXZlfSBvcHRpb25zLmRpcmVjdGl2ZSBcbiAqL1xuY29uc3QgZGVmaW5lRGlyZWN0aXZlID0gKHsgZGlyZWN0aXZlIH0pID0+IHtcblx0aWYgKCEoZGlyZWN0aXZlIGluc3RhbmNlb2YgRGlyZWN0aXZlKSlcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJJbXBsZW1lbnRhdGlvbiBkb3NuJ3QgZXh0ZW5kIERpcmVjdGl2ZSBjbGFzcyFcIik7XG5cblx0aWYgKGRpcmVjdGl2ZS5yYW5rIDwgRGlyZWN0aXZlLk1JTl9SQU5LKVxuXHRcdHRocm93IG5ldyBFcnJvcihcIlRoZSByYW5rIG9mIGEgZGlyZWN0aXZlIGNhbid0IGJlIGxvd2VyIGFzIFwiICsgRGlyZWN0aXZlLk1JTl9SQU5LICsgXCIhXCIpO1xuXG5cdGlmIChkaXJlY3RpdmUucmFuayA+IERpcmVjdGl2ZS5NQVhfUkFOSylcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJUaGUgcmFuayBvZiBhIGRpcmVjdGl2ZSBjYW4ndCBiZSBncmF0ZXIgYXMgXCIgKyBEaXJlY3RpdmUuTUFYX1JBTksgKyBcIiFcIik7XG5cblx0REVGSU5FRF9ESVJFQ1RJVkVTLnB1c2goZGlyZWN0aXZlKTtcblx0REVGSU5FRF9ESVJFQ1RJVkVTLnNvcnQoKGEsIGIpID0+IHtcblx0XHRjb25zdCBwaGFzZSA9IGEucGhhc2UgLSBiLnBoYXNlO1xuXHRcdGlmKHBoYXNlID09IDApXG5cdFx0XHRyZXR1cm4gYS5yYW5rIC0gYi5yYW5rO1xuXHRcdFx0XG5cdFx0cmV0dXJuIHBoYXNlO1xuXHR9KTtcbn07XG5cbi8qKlxuICogQHJlYWRvbmx5XG4gKiBAZW51bSB7bnVtYmVyfVx0XG4gKi9cbmV4cG9ydCBjb25zdCBQSEFTRSA9IHtcblx0aW5pdDogMCxcblx0ZGF0YTogMSxcblx0dGVtcGxhdGU6IDIsXG5cdGNvbnRlbnQ6IDMsXG5cdGZpbmlzaDogNFxufTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGlyZWN0aXZlIHtcblxuXHQvKiogQGVudW0ge1BIQVNFfSAqL1xuXHRzdGF0aWMgZ2V0IFBIQVNFKCkgeyByZXR1cm4gUEhBU0UgfTtcblx0LyoqIEBlbnVtIHtudW1iZXJ9ICovXG5cdHN0YXRpYyBnZXQgTUlOX1JBTksoKSB7IHJldHVybiAwIH07XG5cdC8qKiBAZW51bSB7bnVtYmVyfSAqL1xuXHRzdGF0aWMgZ2V0IE1BWF9SQU5LKCkgeyByZXR1cm4gMTAwMDAwIH07XG5cblx0Y29uc3RydWN0b3IoKSB7IH07XG5cblx0LyoqXG5cdCAqIEBhYnN0cmFjdCBcblx0ICogQGVudW0ge3N0cmluZ30gXG5cdCAqL1xuXHRnZXQgbmFtZSgpIHsgfVxuXHQvKiogXG5cdCAqIEBhYnN0cmFjdFxuXHQgKiBAZW51bSB7bnVtYmVyfSBcblx0ICovXG5cdGdldCByYW5rKCkgeyB9XG5cdC8qKlxuXHQgKiBAYWJzdHJhY3QgXG5cdCAqIEBlbnVtIHtQSEFTRX0gXG5cdCAqL1xuXHRnZXQgcGhhc2UoKSB7cmV0dXJuIFBIQVNFLmZpbmlzaH1cblxuXHQvKipcblx0ICogQGFic3RyYWN0XG5cdCAqIEBwYXJhbSB7Q29udGV4dH0gY29udGV4dCBcblx0ICogQHJldHVybnMgXG5cdCAqL1xuXHRhc3luYyBleGVjdXRlKGNvbnRleHQpIHtcblx0XHRyZXR1cm4gY29udGV4dDtcblx0fVxuXG5cdC8qKlxuXHQgKiBAc3RhdGljXG5cdCAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zXG5cdCAqIEBwYXJhbSB7RGlyZWN0aXZlfSBvcHRpb25zLmRpcmVjdGl2ZSBcblx0ICovXG5cdHN0YXRpYyBkZWZpbmUob3B0aW9uKSB7XG5cdFx0ZGVmaW5lRGlyZWN0aXZlKG9wdGlvbik7XG5cdH1cblxuXHRcblx0LyoqXG5cdCAqIEBzdGF0aWNcblx0ICogQHJlYWRvbmx5XG5cdCAqIEB0eXBlIHtBcnJheTxEaXJlY3RpdmU+fVxuXHQgKi9cblx0c3RhdGljIGdldCBkaXJlY3RpdmVzKCkge1xuXHRcdHJldHVybiBERUZJTkVEX0RJUkVDVElWRVM7XG5cdH1cbn07IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGlyZWN0aXZlRWxlbWVudCBleHRlbmRzIEhUTUxFbGVtZW50e1xuXHRjb25zdHJ1Y3Rvcigpe1xuXHRcdHN1cGVyKCk7XG5cdFx0dGhpcy5oaWRkZW4gPSB0cnVlO1xuXHR9XG5cdFxuXHQvKipcblx0ICogbmVlZCB0byBiZSBpbXBsZW1lbnRlZFxuXHQgKiBcblx0ICovXG5cdGFzeW5jIGV4ZWN1dGUoe3RlbXBsYXRlLCBjb250ZXh0fSl7XG5cdFx0Y29udGV4dC5jb250ZW50ID0gdGVtcGxhdGUuY2xvbmVOb2RlKHRydWUpO1xuXHRcdHJldHVybiBjb250ZXh0O1xuXHR9O1x0XG59IiwiaW1wb3J0IFwiQGRlZmF1bHQtanMvZGVmYXVsdGpzLWV4dGRvbVwiO1xuaW1wb3J0IEV4cHJlc3Npb25SZXNvbHZlciBmcm9tIFwiQGRlZmF1bHQtanMvZGVmYXVsdGpzLWV4cHJlc3Npb24tbGFuZ3VhZ2Uvc3JjL0V4cHJlc3Npb25SZXNvbHZlci5qc1wiO1xuaW1wb3J0IFRlbXBsYXRlIGZyb20gXCIuL1RlbXBsYXRlLmpzXCI7XG5pbXBvcnQgQ29udGV4dCBmcm9tIFwiLi9Db250ZXh0LmpzXCI7XG5pbXBvcnQgRGlyZWN0aXZlIGZyb20gXCIuL0RpcmVjdGl2ZS5qc1wiO1xuaW1wb3J0IEVsZW1lbnQgZnJvbSBcIi4vRGlyZWN0aXZlRWxlbWVudC5qc1wiO1xuaW1wb3J0IFwiLi9kaXJlY3RpdmVzL2luZGV4LmpzXCI7XG5pbXBvcnQgXCIuL2VsZW1lbnRzL2luZGV4LmpzXCI7XG5cbmV4cG9ydCBjb25zdCBTQ09QRVMgPSB7XG5cdGFwcGxpY2F0aW9uOiBcImFwcGxpY2F0aW9uXCIsXG5cdGRhdGE6IFwiZGF0YVwiLFxuXHRyZW5kZXI6IFwicmVuZGVyXCIsXG5cdGNvbnRhaW5lcjogXCJjb250YWluZXJcIixcblx0bm9kZTogXCJub2RlXCIsXG59O1xuXG5jb25zdCBBUFBMSUNBVElPTl9TQ09QRV9SRVNPTFZFUiA9IG5ldyBFeHByZXNzaW9uUmVzb2x2ZXIoeyBuYW1lOiBTQ09QRVMuYXBwbGljYXRpb24gfSk7XG5cblxuLyoqXG4gKiBAcmVhZG9ubHlcbiAqIEBlbnVtIHtzdHJpbmd9XG4gKi9cbmNvbnN0IE1PREVUWVBFUyA9IFtcInJlcGxhY2VcIiwgXCJhcHBlbmRcIiwgXCJwcmVwZW5kXCJdO1xuXG5jb25zdCBNT0RFV09SS0VSID0ge1xuXHRyZXBsYWNlOiBhc3luYyAoeyBjb250YWluZXIsIHRhcmdldCA9IG51bGwsIGNvbnRlbnQgfSkgPT4ge1xuXHRcdGlmICh0YXJnZXQpIHtcblx0XHRcdHRhcmdldC5yZXBsYWNlKGNvbnRlbnQpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRjb250YWluZXIuZW1wdHkoKTtcblx0XHRcdGNvbnRhaW5lci5hcHBlbmQoY29udGVudCk7XG5cdFx0fVxuXHR9LFxuXHRhcHBlbmQ6IGFzeW5jICh7IGNvbnRhaW5lciwgdGFyZ2V0ID0gbnVsbCwgY29udGVudCB9KSA9PiB7XG5cdFx0aWYgKHRhcmdldCkgdGFyZ2V0LmFmdGVyKGNvbnRlbnQpO1xuXHRcdGVsc2UgY29udGFpbmVyLmFwcGVuZChjb250ZW50KTtcblx0fSxcblx0cHJlcGVuZDogYXN5bmMgKHsgY29udGFpbmVyLCB0YXJnZXQgPSBudWxsLCBjb250ZW50IH0pID0+IHtcblx0XHRpZiAodGFyZ2V0KSB0YXJnZXQuYmVmb3JlKGNvbnRlbnQpO1xuXHRcdGVsc2UgY29udGFpbmVyLnByZXBlbmQoY29udGVudCk7XG5cdH0sXG59O1xuXG5jb25zdCBsb2FkVGVtcGxhdGVDb250ZW50ID0gYXN5bmMgKHRlbXBsYXRlLCByZW5kZXJlcikgPT4ge1xuXHRpZiAodGVtcGxhdGUpIHtcblx0XHR0ZW1wbGF0ZSA9IGF3YWl0IFRlbXBsYXRlLmxvYWQodGVtcGxhdGUpO1xuXHRcdHJldHVybiB0ZW1wbGF0ZS5pbXBvcnRDb250ZW50KCk7XG5cdH0gZWxzZSBpZiAocmVuZGVyZXIudGVtcGxhdGUpIHtcblx0XHRyZXR1cm4gYXdhaXQgcmVuZGVyZXIudGVtcGxhdGUuaW1wb3J0Q29udGVudCgpO1xuXHR9XG5cblx0dGhyb3cgbmV3IEVycm9yKFwiTm8gY29udGVudCB0ZW1wbGF0ZSBzcGVjaWZpZWQhXCIpO1xufTtcblxuY29uc3QgYWRkQ29udGVudCA9IGFzeW5jIChjb250ZXh0KSA9PiB7XG5cdGlmIChjb250ZXh0LmNvbnRlbnQpIHtcblx0XHRjb25zdCBtb2Rld29ya2VyID0gTU9ERVdPUktFUltjb250ZXh0Lm1vZGVdO1xuXHRcdGlmICghbW9kZXdvcmtlcikgdGhyb3cgbmV3IEVycm9yKCdUaGUgXCInICsgY29udGV4dC5tb2RlICsgJ1wiIGlzIG5vdCBzdXBwb3J0ZWQhJyk7XG5cdFx0YXdhaXQgbW9kZXdvcmtlcihjb250ZXh0KTtcblx0fVxufTtcblxuY29uc3QgcmVuZGVyQ29udGFpbmVyID0gYXN5bmMgKGNvbnRleHQpID0+IHtcblx0bGV0IHsgdGVtcGxhdGUsIHJlc29sdmVyIH0gPSBjb250ZXh0O1xuXHRpZiAoIXRlbXBsYXRlIHx8IHRlbXBsYXRlLmxlbmd0aCA9PSAwKSByZXR1cm4gY29udGV4dDtcblxuXHRsZXQgY29udGVudCA9IFtdO1xuXHRmb3IgKGxldCBub2RlVGVtcGxhdGUgb2YgdGVtcGxhdGUpIHtcblx0XHRub2RlVGVtcGxhdGUubm9ybWFsaXplKCk7XG5cdFx0Y29uc3Qgbm9kZVJlc29sdmVyID0gbmV3IEV4cHJlc3Npb25SZXNvbHZlcih7IG5hbWU6IFNDT1BFUy5ub2RlLCBjb250ZXh0OiBudWxsLCBwYXJlbnQ6IHJlc29sdmVyIH0pO1xuXHRcdGNvbnN0IG5vZGVDb250ZXh0ID0gYXdhaXQgcmVuZGVyTm9kZShjb250ZXh0LnN1YkNvbnRleHQoeyB0ZW1wbGF0ZTogbm9kZVRlbXBsYXRlLCByZXNvbHZlcjogbm9kZVJlc29sdmVyIH0pKTtcblx0XHRhd2FpdCBub2RlQ29udGV4dC5yZWFkeSgpO1xuXHRcdGNvbnN0IG5vZGUgPSBub2RlQ29udGV4dC5jb250ZW50O1xuXHRcdGlmIChub2RlKSB7XG5cdFx0XHRpZiAobm9kZSBpbnN0YW5jZW9mIEFycmF5KSBjb250ZW50ID0gY29udGVudC5jb25jYXQobm9kZSk7XG5cdFx0XHRpZiAobm9kZSBpbnN0YW5jZW9mIE5vZGVMaXN0IHx8IG5vZGUgaW5zdGFuY2VvZiBIVE1MQ29sbGVjdGlvbikgY29udGVudCA9IGNvbnRlbnQuY29uY2F0KEFycmF5LmZyb20obm9kZSkpO1xuXHRcdFx0ZWxzZSBpZiAobm9kZSBpbnN0YW5jZW9mIE5vZGUpIGNvbnRlbnQucHVzaChub2RlKTtcblx0XHR9XG5cdH1cblxuXHRjb250ZXh0LmNvbnRlbnQgPSBjb250ZW50Lmxlbmd0aCAhPSAwID8gY29udGVudCA6IG51bGw7XG5cdHJldHVybiBjb250ZXh0O1xufTtcblxuY29uc3QgcmVuZGVyTm9kZSA9IGFzeW5jIChjb250ZXh0KSA9PiB7XG5cdHRyeSB7XG5cdFx0bGV0IHsgdGVtcGxhdGUsIHJlbmRlcmVyIH0gPSBjb250ZXh0O1xuXHRcdGlmICh0ZW1wbGF0ZSBpbnN0YW5jZW9mIEVsZW1lbnQpIGF3YWl0IHRlbXBsYXRlLmV4ZWN1dGUoY29udGV4dCk7XG5cdFx0ZWxzZSBhd2FpdCBleGVjdXRlRGlyZWN0aXZlcyhjb250ZXh0KTtcblxuXHRcdGNvbnN0IHsgaWdub3JlLCBjb250ZW50IH0gPSBjb250ZXh0O1xuXG5cdFx0aWYgKCFpZ25vcmUgJiYgY29udGVudCkge1xuXHRcdFx0bGV0IHsgcmVzb2x2ZXIgfSA9IGNvbnRleHQ7XG5cdFx0XHRjb25zdCBzdWJUZW1wbGF0ZSA9IGNvbnRleHQudGVtcGxhdGUuY2hpbGROb2Rlcztcblx0XHRcdGlmIChzdWJUZW1wbGF0ZSAmJiBzdWJUZW1wbGF0ZS5sZW5ndGggPiAwKSB7XG5cdFx0XHRcdGNvbnN0IGNvbnRhaW5lclJlc29sdmVyID0gbmV3IEV4cHJlc3Npb25SZXNvbHZlcih7IG5hbWU6IFNDT1BFUy5jb250YWluZXIsIGNvbnRleHQ6IG51bGwsIHBhcmVudDogcmVzb2x2ZXIgfSk7XG5cdFx0XHRcdGNvbnN0IHN1YkNvbnRleHQgPSBhd2FpdCByZW5kZXJlci5yZW5kZXIoY29udGV4dC5zdWJDb250ZXh0KHsgY29udGFpbmVyOiBjb250ZW50LCB0ZW1wbGF0ZTogc3ViVGVtcGxhdGUsIHJlc29sdmVyOiBjb250YWluZXJSZXNvbHZlciB9KSk7XG5cdFx0XHRcdGF3YWl0IHN1YkNvbnRleHQucmVhZHkoKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRpZiAoY29udGV4dC5jb250ZW50ICYmIGNvbnRleHQuY29udGVudC50YWdOYW1lICYmIGNvbnRleHQuY29udGVudC50YWdOYW1lID09IFwiSlNUTFwiKSBjb250ZXh0LmNvbnRlbnQgPSBjb250ZXh0LmNvbnRlbnQuY2hpbGROb2RlczsgLy9zcGVjaWFsIGNhc2UgdG8gc3VwcG9ydCB0aGUgb2xkIFwiPGpzdGw+XCIgdGFnLlxuXHR9IGNhdGNoIChlKSB7XG5cdFx0Y29uc29sZS5lcnJvcihcImVycm9yIGF0IHJlbmRlciBub2RlOlwiLCBlLCBjb250ZXh0KTtcblx0fVxuXHRyZXR1cm4gY29udGV4dDtcbn07XG5cbmNvbnN0IGV4ZWN1dGVEaXJlY3RpdmVzID0gYXN5bmMgKGNvbnRleHQpID0+IHtcblx0Y29uc3QgZGlyZWN0aXZlcyA9IERpcmVjdGl2ZS5kaXJlY3RpdmVzO1xuXHRjb25zdCBsZW5ndGggPSBkaXJlY3RpdmVzLmxlbmd0aDtcblx0Zm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGggJiYgIWNvbnRleHQuc3RvcDsgaSsrKSB7XG5cdFx0Y29uc3QgZGlyZWN0aXZlID0gZGlyZWN0aXZlc1tpXTtcblx0XHR0cnkge1xuXHRcdFx0aWYgKGNvbnRleHQuYWNjZXB0RGlyZWN0aXZlKGRpcmVjdGl2ZSkpIGF3YWl0IGRpcmVjdGl2ZS5leGVjdXRlKGNvbnRleHQpO1xuXHRcdH0gY2F0Y2ggKGUpIHtcblx0XHRcdGNvbnNvbGUuZXJyb3IoXCJlcnJvciBhdCBkaXJlY3RpdmU6XCIsIGUsIGRpcmVjdGl2ZSwgY29udGV4dCk7XG5cdFx0fVxuXHR9XG5cdHJldHVybiBjb250ZXh0O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVuZGVyZXIge1xuXHQvKipcblx0ICogQ3JlYXRlcyBhIHJlbmRlcmVyLlxuXHQgKlxuXHQgKiBAcGFyYW0ge29iamVjdH0gW2FuT3B0aW9uXVxuXHQgKiBAcGFyYW0ge1RlbXBsYXRlfSBbYW5PcHRpb24udGVtcGxhdGVdIC0gdGhlIHRlbXBsYXRlIHJlbmRlcmVkLCBpZiBgcmVuZGVyYCBnZXRzIG5vbmVcblx0ICogQHBhcmFtIHtvYmplY3R9IFthbk9wdGlvbi5kYXRhXSAtIGJhc2UgZGF0YSwgYXZhaWxhYmxlIGluIGV2ZXJ5IHJlbmRlcmluZ1xuXHQgKiBAdGhyb3dzIHtFcnJvcn0gaWYgYHRlbXBsYXRlYCBpcyBub3QgYSBgVGVtcGxhdGVgXG5cdCAqL1xuXHRjb25zdHJ1Y3Rvcih7IHRlbXBsYXRlLCBkYXRhIH0gPSB7fSkge1xuXHRcdGlmICh0ZW1wbGF0ZSAmJiAhKHRlbXBsYXRlIGluc3RhbmNlb2YgVGVtcGxhdGUpKSB0aHJvdyBuZXcgRXJyb3IoXCJ0ZW1wbGF0ZSBtdXN0IGJlIGFuIGluc3RhbmNlIG9mIFRlbXBsYXRlIVwiKTtcblxuXHRcdHRoaXMudGVtcGxhdGUgPSB0ZW1wbGF0ZTtcblx0XHR0aGlzLnJlc29sdmVyID0gbmV3IEV4cHJlc3Npb25SZXNvbHZlcih7IG5hbWU6IFNDT1BFUy5kYXRhLCBjb250ZXh0OiBkYXRhID8gZGF0YSA6IHt9LCBwYXJlbnQ6IEFQUExJQ0FUSU9OX1NDT1BFX1JFU09MVkVSIH0pO1xuXHR9XG5cblx0LyoqXG5cdCAqIFJlbmRlcnMgYSB0ZW1wbGF0ZSBpbnRvIGEgY29udGFpbmVyLlxuXHQgKiBcblx0ICogQHBhcmFtIHtvYmplY3R8Q29udGV4dH0gY29udGV4dCBcblx0ICogQHBhcmFtIHtIVE1MRWxlbWVudH0gY29udGV4dC5jb250YWluZXJcblx0ICogQHBhcmFtIHtvYmplY3R9IFtjb250ZXh0LmRhdGFdXG5cdCAqIEBwYXJhbSB7VGVtcGxhdGV8c3RyaW5nfFVSTHxOb2RlfE5vZGVMaXN0fEhUTUxDb2xsZWN0aW9ufSBbY29udGV4dC50ZW1wbGF0ZV1cblx0ICogQHBhcmFtIHtNT0RFVFlQRVN9IFtjb250ZXh0Lm1vZGVdXG5cdCAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IFtjb250ZXh0LnJvb3RdXG5cdCAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IFtjb250ZXh0LnRhcmdldF1cblx0ICogQHJldHVybnMge1Byb21pc2U8Q29udGV4dD59XG5cdCAqL1xuXHRhc3luYyByZW5kZXIoY29udGV4dCkge1xuXHRcdGNvbnN0IGNhbGxlZFdpdGhDb250ZXh0ID0gY29udGV4dCBpbnN0YW5jZW9mIENvbnRleHQ7XG5cdFx0aWYgKCFjYWxsZWRXaXRoQ29udGV4dCkge1xuXHRcdFx0bGV0IHsgdGVtcGxhdGUgPSBudWxsLCBkYXRhID0gbnVsbCwgY29udGFpbmVyLCByb290LCBtb2RlLCB0YXJnZXQgfSA9IGNvbnRleHQ7XG5cdFx0XHR0ZW1wbGF0ZSA9IGF3YWl0IGxvYWRUZW1wbGF0ZUNvbnRlbnQodGVtcGxhdGUsIHRoaXMpO1xuXHRcdFx0Y29uc3QgcmVzb2x2ZXIgPSBuZXcgRXhwcmVzc2lvblJlc29sdmVyKHsgbmFtZTogU0NPUEVTLnJlbmRlciwgY29udGV4dDogZGF0YSwgcGFyZW50OiB0aGlzLnJlc29sdmVyIH0pO1xuXHRcdFx0Y29udGV4dCA9IG5ldyBDb250ZXh0KHsgcmVzb2x2ZXIsIHJlbmRlcmVyOiB0aGlzLCB0ZW1wbGF0ZTogdGVtcGxhdGUsIGNvbnRhaW5lciwgcm9vdDogcm9vdCA/IHJvb3QgOiBjb250YWluZXIsIG1vZGU6IG1vZGUgPyBtb2RlIDogXCJyZXBsYWNlXCIsIHRhcmdldCB9KTtcblx0XHR9IGVsc2UgaWYgKGNvbnRleHQuY2xvc2VkKSB0aHJvdyBuZXcgRXJyb3IoXCJjYWxsaW5nIHdpdGggY2xvc2VkIGNvbnRleHRcIiwgY29udGV4dCk7XG5cblx0XHRjb25zdCB0ZW1wbGF0ZSA9IGNvbnRleHQudGVtcGxhdGU7XG5cdFx0aWYgKHRlbXBsYXRlIGluc3RhbmNlb2YgTm9kZSkgYXdhaXQgcmVuZGVyTm9kZShjb250ZXh0KTtcblx0XHRlbHNlIGF3YWl0IHJlbmRlckNvbnRhaW5lcihjb250ZXh0KTtcblx0XHRcblx0XHRhd2FpdCBhZGRDb250ZW50KGNvbnRleHQpO1xuXG5cdFx0aWYgKCFjYWxsZWRXaXRoQ29udGV4dClcblx0XHRcdGF3YWl0IGNvbnRleHQucmVhZHkoKTtcblxuXHRcdHJldHVybiBjb250ZXh0O1xuXHR9XG5cblx0LyoqXG5cdCAqIENyZWF0ZXMgYSByZW5kZXJlciBhbmQgbG9hZHMgaXRzIHRlbXBsYXRlIHdpdGggYFRlbXBsYXRlLmxvYWRgIGZpcnN0LlxuXHQgKlxuXHQgKiBAc3RhdGljXG5cdCAqIEBhc3luY1xuXHQgKiBAcGFyYW0ge29iamVjdH0gW2FuT3B0aW9uXVxuXHQgKiBAcGFyYW0ge1RlbXBsYXRlfHN0cmluZ3xVUkx8Tm9kZXxOb2RlTGlzdHxIVE1MQ29sbGVjdGlvbnxQcm9taXNlPFRlbXBsYXRlfHN0cmluZ3xVUkx8Tm9kZXxOb2RlTGlzdHxIVE1MQ29sbGVjdGlvbj59IFthbk9wdGlvbi50ZW1wbGF0ZV0gLSBzb3VyY2Ugb2YgdGhlIHRlbXBsYXRlXG5cdCAqIEBwYXJhbSB7b2JqZWN0fSBbYW5PcHRpb24uZGF0YV0gLSBiYXNlIGRhdGEsIGF2YWlsYWJsZSBpbiBldmVyeSByZW5kZXJpbmdcblx0ICogQHJldHVybnMge1Byb21pc2U8UmVuZGVyZXI+fVxuXHQgKi9cblx0c3RhdGljIGFzeW5jIGJ1aWxkKHsgdGVtcGxhdGUsIGRhdGEgfSA9IHt9KSB7XG5cdFx0aWYgKHRlbXBsYXRlICYmIHRlbXBsYXRlIGluc3RhbmNlb2YgUHJvbWlzZSkgdGVtcGxhdGUgPSBhd2FpdCB0ZW1wbGF0ZTtcblxuXHRcdHRlbXBsYXRlID0gdGVtcGxhdGUgPyBhd2FpdCBUZW1wbGF0ZS5sb2FkKHRlbXBsYXRlKSA6IG51bGw7XG5cdFx0cmV0dXJuIG5ldyBSZW5kZXJlcih7IHRlbXBsYXRlLCBkYXRhIH0pO1xuXHR9XG5cblx0LyoqXG5cdCAqIFJlbmRlcnMgYSB0ZW1wbGF0ZSBpbnRvIGEgY29udGFpbmVyIHdpdGhvdXQga2VlcGluZyBhIHJlbmRlcmVyLlxuXHQgKlxuXHQgKiBAc3RhdGljXG5cdCAqIEBhc3luY1xuXHQgKiBAcGFyYW0ge29iamVjdH0gY29udGV4dFxuXHQgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBjb250ZXh0LmNvbnRhaW5lclxuXHQgKiBAcGFyYW0ge29iamVjdH0gW2NvbnRleHQuZGF0YV1cblx0ICogQHBhcmFtIHtUZW1wbGF0ZX0gY29udGV4dC50ZW1wbGF0ZVxuXHQgKiBAcGFyYW0ge01PREVUWVBFU30gW2NvbnRleHQubW9kZV1cblx0ICogQHBhcmFtIHtIVE1MRWxlbWVudH0gW2NvbnRleHQudGFyZ2V0XVxuXHQgKiBAcmV0dXJucyB7UHJvbWlzZTxDb250ZXh0Pn1cblx0ICogQG1lbWJlcm9mIFJlbmRlcmVyXG5cdCAqL1xuXHRzdGF0aWMgYXN5bmMgcmVuZGVyKHsgY29udGFpbmVyLCBkYXRhLCB0ZW1wbGF0ZSwgbW9kZSwgdGFyZ2V0IH0pIHtcblx0XHRjb25zdCByZW5kZXJlciA9IG5ldyBSZW5kZXJlcih7IHRlbXBsYXRlLCBkYXRhIH0pO1xuXHRcdHJldHVybiByZW5kZXJlci5yZW5kZXIoeyBjb250YWluZXIsIG1vZGUsIHRhcmdldCB9KTtcblx0fVxufVxuIiwiaW1wb3J0IFwiQGRlZmF1bHQtanMvZGVmYXVsdGpzLWNvbW1vbi11dGlscy9zcmMvamF2YXNjcmlwdC9TdHJpbmcuanNcIjtcblxuZXhwb3J0IGNvbnN0IE5PREVfQVRUUklCVVRFX1RFTVBMQVRFID0gXCJ0ZW1wbGF0ZVwiO1xuY29uc3QgQ0FDSEUgPSB7fTtcbmNvbnN0IGdldEtleSA9ICh0ZW1wbGF0ZSwgY2FjaGUsIGFsaWFzKSA9PiB7XG5cdGlmICghY2FjaGUpIHJldHVybiBudWxsO1xuXG5cdGxldCBrZXkgPSBudWxsO1xuXHRpZiAoYWxpYXMpIGtleSA9IGFsaWFzO1xuXHRlbHNlIGlmICh0eXBlb2YgdGVtcGxhdGUgPT09IFwic3RyaW5nXCIpIGtleSA9IHRlbXBsYXRlO1xuXHRlbHNlIGlmICh0ZW1wbGF0ZSBpbnN0YW5jZW9mIFVSTCkga2V5ID0gdGVtcGxhdGUudG9TdHJpbmcoKTtcblx0ZWxzZSBpZiAodGVtcGxhdGUgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkga2V5ID0gdGVtcGxhdGUuc2VsZWN0b3IoKTtcblxuXHRpZiAoa2V5KSByZXR1cm4ga2V5Lmhhc2hjb2RlKCk7XG5cblx0cmV0dXJuIG51bGw7XG59O1xuXG5jb25zdCBmcm9tVVJMID0gYXN5bmMgKHVybCwgY2FjaGUsIGtleSkgPT4ge1xuXHRjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybC50b1N0cmluZygpKTtcblx0Y29uc3Qgc291cmNlID0gYXdhaXQgcmVzcG9uc2UudGV4dCgpO1xuXHRyZXR1cm4gZnJvbVNvdXJjZShzb3VyY2UsIGNhY2hlLCBrZXkpO1xufTtcblxuY29uc3QgZnJvbVNvdXJjZSA9IGFzeW5jIChzb3VyY2UsIGNhY2hlLCBrZXkpID0+IHtcblx0cmV0dXJuIGZyb21FbGVtZW50KGNyZWF0ZShzb3VyY2UsIHRydWUpLCBjYWNoZSwga2V5KTtcbn07XG5cbmNvbnN0IGZyb21FbGVtZW50ID0gYXN5bmMgKGVsZW1lbnQsIGNhY2hlLCBrZXkpID0+IHtcblx0bGV0IHRlbXBsYXRlID0gbnVsbDtcblx0aWYgKGVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MVGVtcGxhdGVFbGVtZW50KSB0ZW1wbGF0ZSA9IG5ldyBUZW1wbGF0ZShlbGVtZW50LCBrZXkpO1xuXHRlbHNlIHtcblx0XHR0ZW1wbGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZW1wbGF0ZVwiKTtcblx0XHRpZiAoZWxlbWVudCBpbnN0YW5jZW9mIE5vZGUgfHwgZWxlbWVudCBpbnN0YW5jZW9mIE5vZGVMaXN0IHx8IGVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MQ29sbGVjdGlvbiB8fCBlbGVtZW50IGluc3RhbmNlb2YgQXJyYXkpIHRlbXBsYXRlLmNvbnRlbnQuYXBwZW5kKGVsZW1lbnQuY2xvbmVOb2RlKHRydWUpKTtcblx0XHRlbHNlIHRocm93IG5ldyBFcnJvcihcIlRlbXBsYXRlIHR5cGUgaXMgbm90IHN1cHBvcnRlZCFcIik7XG5cblx0XHR0ZW1wbGF0ZSA9IG5ldyBUZW1wbGF0ZSh0ZW1wbGF0ZSwga2V5KTtcblx0fVxuXG5cdGlmICghdGVtcGxhdGUpIHRocm93IG5ldyBFcnJvcihcIlRlbXBsYXRlIGNhbid0IGxvYWRlZCFcIik7XG5cblx0aWYgKGNhY2hlICYmIGtleSkgQ0FDSEVba2V5XSA9IHRlbXBsYXRlO1xuXG5cdHJldHVybiB0ZW1wbGF0ZTtcbn07XG5cbmNvbnN0IGdldFRlbXBsYXRlID0gKG5vZGUpID0+IHtcblx0bGV0IHRlbXBsYXRlID0gbm9kZS5maW5kKFwiOnNjb3BlID4gdGVtcGxhdGVcIikuZmlyc3QoKTtcblx0aWYgKCEhdGVtcGxhdGUpIHJldHVybiB0ZW1wbGF0ZTtcblx0Y29uc3QgdmFsdWUgPSBub2RlLmF0dHIoTk9ERV9BVFRSSUJVVEVfVEVNUExBVEUpO1xuXHRpZiAoIXZhbHVlKSByZXR1cm4gbnVsbDtcblx0dHJ5IHtcblx0XHR0ZW1wbGF0ZSA9IGZpbmQodmFsdWUpLmZpcnN0KCk7XG5cdFx0aWYgKCEhdGVtcGxhdGUpIHJldHVybiB0ZW1wbGF0ZTtcblx0fSBjYXRjaCAoZSkge31cblx0cmV0dXJuIG5ldyBVUkwodmFsdWUsIGxvY2F0aW9uKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRlbXBsYXRlIHtcblxuXHQvKipcblx0ICogQ3JlYXRlIGFuIGluc3RhbmNlIG9mIHRlbXBsYXRlLlxuXHQgKiBcblx0ICogQHBhcmFtIHRlbXBsYXRlIHR5cGUgb2YgSFRNTFRlbXBsYXRlRWxlbWVudC4gTm90IG51bGwuXG5cdCAqIEBwYXJhbSBrZXkgaWRlbnRpZmllciBhdCBjYWNoZSwgaWYgdGVtcGxhdGUgdG8gYmUgY2FjaGVkLlxuXHQgKi9cblx0Y29uc3RydWN0b3IoLyoqIEB0eXBlIHtIVE1MVGVtcGxhdGVFbGVtZW50fSAqLyB0ZW1wbGF0ZSwvKiogQHR5cGUge3N0cmluZ30gKi8ga2V5KSB7XG5cdFx0dGhpcy50ZW1wbGF0ZSA9IHRlbXBsYXRlO1xuXHRcdHRoaXMua2V5ID0ga2V5O1xuXHR9XG5cblx0aW1wb3J0Q29udGVudChkb2MgPSBkb2N1bWVudCkge1xuXHRcdGxldCBpbXBvcnRlZCA9IGRvYy5pbXBvcnROb2RlKHRoaXMudGVtcGxhdGUsIHRydWUpO1xuXHRcdHJldHVybiBpbXBvcnRlZC5jb250ZW50LmNoaWxkTm9kZXM7XG5cdH1cblxuXHRyZW1vdmUoKSB7XG5cdFx0aWYgKHRoaXMua2V5ICYmIENBQ0hFW3RoaXMua2V5XSkgZGVsZXRlIENBQ0hFW3RoaXMua2V5XTtcblx0fVxuXG5cdHN0YXRpYyBhc3luYyBmZXRjaCh1cmwsIGNhY2hlID0gdHJ1ZSwgYWxpYXMgPSBudWxsKSB7XG5cdFx0aWYgKHR5cGVvZiB1cmwgPT09IFwic3RyaW5nXCIpIHtcblx0XHRcdHJldHVybiBUZW1wbGF0ZS5sb2FkKG5ldyBVUkwodXJsLCBsb2NhdGlvbiksIGNhY2hlLCBhbGlhcyk7XG5cdFx0fSBlbHNlIGlmICh1cmwgaW5zdGFuY2VvZiBVUkwpIHJldHVybiBUZW1wbGF0ZS5sb2FkKHVybCwgY2FjaGUsIGFsaWFzKTtcblxuXHRcdHRocm93IG5ldyBFcnJvcihcIlRoZSB1cmwgaXNuJ3QgYSBhbGxvd2VkIHR5cGUhIC0+IFtTdHJpbmd8VVJMXSByZXF1aXJlZCFcIik7XG5cdH1cblxuXHRzdGF0aWMgYXN5bmMgbG9hZCh0ZW1wbGF0ZSwgY2FjaGUgPSB0cnVlLCBhbGlhcyA9IG51bGwpIHtcblx0XHRpZiAodGVtcGxhdGUgaW5zdGFuY2VvZiBUZW1wbGF0ZSkgcmV0dXJuIHRlbXBsYXRlO1xuXG5cdFx0Y29uc3Qga2V5ID0gZ2V0S2V5KHRlbXBsYXRlLCBjYWNoZSwgYWxpYXMpO1xuXHRcdGlmIChrZXkgJiYgQ0FDSEVba2V5XSkgcmV0dXJuIENBQ0hFW2tleV07XG5cdFx0ZWxzZSBpZiAodHlwZW9mIHRlbXBsYXRlID09PSBcInN0cmluZ1wiKSB7XG5cdFx0XHRyZXR1cm4gZnJvbVNvdXJjZSh0ZW1wbGF0ZSwgY2FjaGUsIGtleSk7XG5cdFx0fSBlbHNlIGlmICh0ZW1wbGF0ZSBpbnN0YW5jZW9mIFVSTCkgcmV0dXJuIGF3YWl0IGZyb21VUkwodGVtcGxhdGUsIGNhY2hlLCBrZXkpO1xuXHRcdGVsc2UgaWYgKHRlbXBsYXRlIGluc3RhbmNlb2YgTm9kZSB8fCB0ZW1wbGF0ZSBpbnN0YW5jZW9mIE5vZGVMaXN0IHx8IHRlbXBsYXRlIGluc3RhbmNlb2YgSFRNTENvbGxlY3Rpb24gfHwgdGVtcGxhdGUgaW5zdGFuY2VvZiBIVE1MVGVtcGxhdGVFbGVtZW50KSByZXR1cm4gZnJvbUVsZW1lbnQodGVtcGxhdGUsIGNhY2hlLCBrZXkpO1xuXG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiVGhlIHRlbXBsYXRlIGlzbid0IGEgYWxsb3dlZCB0eXBlISAtPiBbU3RyaW5nfFVSTHxOb2RlfE5vZGVMaXN0fEhUTUxDb2xsZWN0aW9ufFRlbXBsYXRlXSByZXF1aXJlZCFcIik7XG5cdH1cblxuXHRzdGF0aWMgYXN5bmMgbG9hZE5vZGVUZW1wbGF0ZShub2RlLCBkZWZhdWx0VGVtcGxhdGUsIGNhY2hlLCBhbGlhcykge1xuXHRcdHRyeSB7XG5cdFx0XHRjb25zdCB0ZW1wbGF0ZSA9IGdldFRlbXBsYXRlKG5vZGUpO1xuXHRcdFx0aWYgKHRlbXBsYXRlKSByZXR1cm4gVGVtcGxhdGUubG9hZCh0ZW1wbGF0ZSwgY2FjaGUsIGFsaWFzKTtcblx0XHR9IGNhdGNoIChlKSB7XG5cdFx0XHRjb25zb2xlLndhcm4oXCJDYW4ndCBsb2FkIHRlbXBsYXRlIGZyb20gbm9kZSFcIiwgbm9kZSwgZSk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGRlZmF1bHRUZW1wbGF0ZTtcblx0fVxufTtcblxuZXhwb3J0IGNvbnN0IHRvQXN5bmNUZW1wbGF0ZUxvYWRlciA9ICgvKlVSTCovdXJsKSA9PiB7XG4gICAgbGV0IHRlbXBsYXRlID0gbnVsbDtcblxuICAgIHJldHVybiBhc3luYyAoKSA9PiB7XG4gICAgICAgIGlmKCF0ZW1wbGF0ZSl7XG5cdFx0XHRpZih0eXBlb2YgdXJsID09PSBcImZ1bmN0aW9uXCIpXG5cdFx0XHRcdHVybCA9IGF3YWl0IHVybCgpO1xuXHRcdFx0ZWxzZSBpZih1cmwgaW5zdGFuY2VvZiBQcm9taXNlKVxuXHRcdFx0XHR1cmwgPSBhd2FpdCB1cmw7XG4gICAgICAgICAgICB0ZW1wbGF0ZSA9IFRlbXBsYXRlLmxvYWQodXJsKTtcblx0XHR9XG5cbiAgICAgICAgcmV0dXJuIHRlbXBsYXRlO1xuICAgIH07XG59O1xuIiwiZXhwb3J0IGNvbnN0IGlzVW5kZWZpbmVkT3JOdWxsID0gKHZhbHVlKSA9PiB7XG4gICAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ3VuZGVmaW5lZCcgfHwgdmFsdWUgPT09IG51bGxcbn1cblxuZXhwb3J0IGNvbnN0IGlzVW5kZWZpbmVkT3JOdWxsT3JCbGFuayA9ICh2YWx1ZSkgPT4ge1xuICByZXR1cm4gaXNVbmRlZmluZWRPck51bGwodmFsdWUpIHx8IHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycgJiYgdmFsdWUudHJpbSgpLmxlbmd0aCA9PSAwO1xufTsiLCJpbXBvcnQgRGlyZWN0aXZlIGZyb20gXCIuLi9EaXJlY3RpdmUuanNcIjtcblxuY29uc3QgQVRUUklCVVRFX19BVFRBQ0hFTEVNRU5UID0gXCJqc3RsLWF0dGFjaC1lbGVtZW50XCI7XG5jb25zdCBBVFRSSUJVVEVfX0FUVEFDSEVMRU1FTlRfTU9ERSA9IFwianN0bC1hdHRhY2gtZWxlbWVudC1tb2RlXCI7XG5cbmNvbnN0IE1PREVfQVBQRU5EID0gXCJhcHBlbmRcIjtcbmNvbnN0IE1PREVfUFJFUEVORCA9IFwicHJlcGVuZFwiO1xuY29uc3QgTU9ERV9SRVBMQUNFID0gXCJyZXBsYWNlXCI7XG5cbmNvbnN0IFBSRUNIRUNLID0gL14jLiskLztcblxuY29uc3QgZ2V0RWxlbWVudCA9IGFzeW5jICh0ZW1wbGF0ZSwgcmVzb2x2ZXIpID0+IHtcblx0bGV0IGVsZW1lbnQgPSAodGVtcGxhdGUuYXR0cihBVFRSSUJVVEVfX0FUVEFDSEVMRU1FTlQpIHx8IFwiXCIpLnRyaW0oKTtcblx0aWYgKCFQUkVDSEVDSy50ZXN0KGVsZW1lbnQpKSB7XG5cdFx0dHJ5IHtcblx0XHRcdGVsZW1lbnQgPSBhd2FpdCByZXNvbHZlci5yZXNvbHZlKGVsZW1lbnQsIGVsZW1lbnQpO1xuXHRcdH0gY2F0Y2ggKGUpIHt9XG5cdFx0aWYgKGVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkgcmV0dXJuIGVsZW1lbnQ7XG5cdH1cblxuXHR0cnkge1xuXHRcdGVsZW1lbnQgPSBmaW5kKGVsZW1lbnQpO1xuXHR9IGNhdGNoIChlKSB7fVxuXG5cdGlmIChlbGVtZW50ICYmIGVsZW1lbnQubGVuZ3RoID4gMCkgcmV0dXJuIGVsZW1lbnQubGVuZ3RoID09IDAgPyBlbGVtZW50LmZpcnN0KCkgOiBlbGVtZW50O1xuXG5cdHJldHVybiBudWxsO1xufTtcblxuY2xhc3MgQXR0YWNoRWxlbWVudCBleHRlbmRzIERpcmVjdGl2ZSB7XG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHN1cGVyKCk7XG5cdH1cblxuXHRnZXQgbmFtZSgpIHtcblx0XHRyZXR1cm4gXCJhdHRhY2gtZWxlbWVudFwiO1xuXHR9XG5cdGdldCByYW5rKCkge1xuXHRcdHJldHVybiBEaXJlY3RpdmUuTUlOX1JBTksgKyAxO1xuXHR9XG5cdGdldCBwaGFzZSgpIHtcblx0XHRyZXR1cm4gRGlyZWN0aXZlLlBIQVNFLmNvbnRlbnQ7XG5cdH1cblxuXHRhc3luYyBleGVjdXRlKGNvbnRleHQpIHtcblx0XHRjb25zdCB7IHJlc29sdmVyLCB0ZW1wbGF0ZSwgY29udGVudCB9ID0gY29udGV4dDtcblx0XHRpZiAoISh0ZW1wbGF0ZSBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSB8fCAhdGVtcGxhdGUuYXR0cihBVFRSSUJVVEVfX0FUVEFDSEVMRU1FTlQpKSByZXR1cm4gY29udGV4dDtcblx0XHR0cnkge1xuXHRcdFx0bGV0IGVsZW1lbnQgPSBhd2FpdCBnZXRFbGVtZW50KHRlbXBsYXRlLCByZXNvbHZlcik7XG5cdFx0XHRpZiAoZWxlbWVudCkge1xuXHRcdFx0XHRjb25zdCBtb2RlID0gdGVtcGxhdGUuYXR0cihBVFRSSUJVVEVfX0FUVEFDSEVMRU1FTlRfTU9ERSkgfHwgTU9ERV9SRVBMQUNFO1xuXHRcdFx0XHRpZiAobW9kZSA9PSBNT0RFX1JFUExBQ0UpIHtcblx0XHRcdFx0XHRjb250ZW50LmVtcHR5KCkuYXBwZW5kKGVsZW1lbnQpO1xuXHRcdFx0XHRcdGNvbnRleHQuc3RvcCA9IHRydWU7XG5cdFx0XHRcdFx0Y29udGV4dC5pZ25vcmUgPSB0cnVlO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGNvbnRleHQucmVhZHkoKHsgY29udGVudCB9KSA9PiB7XG5cdFx0XHRcdFx0XHRpZiAoY29udGVudCkge1xuXHRcdFx0XHRcdFx0XHRpZiAobW9kZSA9PSBNT0RFX0FQUEVORCkgY29udGVudC5hcHBlbmQoZWxlbWVudCk7XG5cdFx0XHRcdFx0XHRcdGVsc2UgaWYgKG1vZGUgPT0gTU9ERV9QUkVQRU5EKSBjb250ZW50LnByZXBlbmQoZWxlbWVudCk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9IGNhdGNoIChlKSB7XG5cdFx0XHRjb25zb2xlLmxvZyhlLCB7IGNvbnRleHQgfSk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGNvbnRleHQ7XG5cdH1cbn1cbkRpcmVjdGl2ZS5kZWZpbmUoeyBkaXJlY3RpdmU6IG5ldyBBdHRhY2hFbGVtZW50KCkgfSk7XG4iLCJpbXBvcnQgR0xPQkFMIGZyb20gXCJAZGVmYXVsdC1qcy9kZWZhdWx0anMtY29tbW9uLXV0aWxzL3NyYy9HbG9iYWwuanNcIjtcbmltcG9ydCBEaXJlY3RpdmUgZnJvbSBcIi4uL0RpcmVjdGl2ZS5qc1wiO1xuXG5jb25zdCBBVFRSSUJVVEVfTkFNRSA9IC8oanN0bCk/KFxcPyk/KEApPyhbXlxcP0BdKykvaTtcblxuY29uc3QgREVGQVVMVF9FVkVOVF9GVU5DVElPTiA9IFwiZGVmYXVsdFwiO1xuY29uc3QgT1BUSU9OX1BSRVZFTlRfREVGQVVMVCA9IFwicHJldmVudC1kZWZhdWx0XCJcbmNvbnN0IElHTk9SRURfQVRUUklCVVRFUyA9IFtcImlzXCJdO1xuXG5jb25zdCBGVU5DVElPTl9TUExJVFRFUiA9IFwiOjpcIjtcbmNvbnN0IEZVTkNUSU9OX1NQTElUVEVSX09MRCA9IFwiOlwiO1xuXG5jb25zdCBFVkVOVEZVTkNUSU9OUyA9IHtcblx0ZGVsZWdhdGU6IGFzeW5jIChldmVudCwgaGFuZGxlLCBzZXR0aW5nLCB0eXBlLCByZXNvbHZlciwgY29udGVudCwgb3B0aW9ucywgY29udGV4dCkgPT4ge1xuXHRcdGNvbnN0IGV2ZW50aGFuZGxlID0gYXdhaXQgcmVzb2x2ZXIucmVzb2x2ZVRleHQoaGFuZGxlLCBoYW5kbGUpO1xuXHRcdGNvbnRlbnQub24oZXZlbnQsIGRlbGVnYXRlcihldmVudGhhbmRsZSwgc2V0dGluZykpO1xuXHR9LFxuXHR0b2dnbGVjbGFzczogYXN5bmMgKGV2ZW50LCBoYW5kbGUsIHNldHRpbmcsIHR5cGUsIHJlc29sdmVyLCBjb250ZW50LCBvcHRpb25zLCBjb250ZXh0KSA9PiB7XG5cdFx0Y29uc3QgY2xhenogPSBvcHRpb25zLnNoaWZ0KCk7XG5cdFx0Y29uc3QgcHJldmVudERlZmF1bHQgPSBvcHRpb25zLmluY2x1ZGVzKE9QVElPTl9QUkVWRU5UX0RFRkFVTFQpO1xuXHRcdGNvbnN0IHNlbGVjdG9yID0gaGFuZGxlID8gYXdhaXQgcmVzb2x2ZXIucmVzb2x2ZVRleHQoaGFuZGxlLCBoYW5kbGUpIDogbnVsbDtcdFx0XG5cdFx0Y29udGVudC5vbihldmVudCwgKGV2ZW50KSA9PiB7XG5cdFx0XHRpZihwcmV2ZW50RGVmYXVsdClcblx0XHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRcdGlmKHNlbGVjdG9yKVxuXHRcdFx0XHRjb250ZW50LmNsb3Nlc3RzKHNlbGVjdG9yKS50b2dnbGVDbGFzcyhjbGF6eik7XG5cdFx0XHRlbHNlXG5cdFx0XHRcdGNvbnRlbnQudG9nZ2xlQ2xhc3MoY2xhenopO1xuXHRcdH0pO1xuXHR9LFxuXHR0b2dnbGVhdHRyaWJ1dGU6IGFzeW5jIChldmVudCwgaGFuZGxlLCBzZXR0aW5nLCB0eXBlLCByZXNvbHZlciwgY29udGVudCwgb3B0aW9ucywgY29udGV4dCkgPT4ge1xuXHRcdGNvbnN0IGF0dHJpYnV0ZSA9IG9wdGlvbnMuc2hpZnQoKTtcblx0XHRjb25zdCBwcmV2ZW50RGVmYXVsdCA9IG9wdGlvbnMuaW5jbHVkZXMoT1BUSU9OX1BSRVZFTlRfREVGQVVMVCk7XG5cdFx0Y29uc3Qgc2VsZWN0b3IgPSBoYW5kbGUgPyBhd2FpdCByZXNvbHZlci5yZXNvbHZlVGV4dChoYW5kbGUsIGhhbmRsZSkgOiBudWxsO1x0XHRcblx0XHRjb250ZW50Lm9uKGV2ZW50LCAoZXZlbnQpID0+IHtcblx0XHRcdGlmKHByZXZlbnREZWZhdWx0KVxuXHRcdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0aWYoc2VsZWN0b3IpXG5cdFx0XHRcdGNvbnRlbnQuY2xvc2VzdHMoc2VsZWN0b3IpLmZvckVhY2goZWxlbWVudCA9PiB7XG5cdFx0XHRcdFx0ZWxlbWVudC50b2dnbGVBdHRyaWJ1dGUoYXR0cmlidXRlKVx0XHRcdFx0XG5cdFx0XHRcdH0pO1xuXHRcdFx0ZWxzZSBcblx0XHRcdFx0Y29udGVudC50b2dnbGVBdHRyaWJ1dGUoYXR0cmlidXRlKTtcblx0XHR9KTtcblx0fSxcblx0W0RFRkFVTFRfRVZFTlRfRlVOQ1RJT05dOiBhc3luYyAoZXZlbnQsIGhhbmRsZSwgc2V0dGluZywgdHlwZSwgcmVzb2x2ZXIsIGNvbnRlbnQsIG9wdGlvbnMsIGNvbnRleHQpID0+IHtcblx0XHRjb25zdCBldmVudGhhbmRsZSA9IGhhbmRsZSA/IGF3YWl0IHJlc29sdmVyLnJlc29sdmUoaGFuZGxlLCBoYW5kbGUpIDogbnVsbDtcblxuXHRcdGlmICghZXZlbnRoYW5kbGUpIGNvbnNvbGUuZXJyb3IobmV3IEVycm9yKFwiQ2FuJ3QgcmVzb2x2ZSBcXFwiXCIgKyBoYW5kbGUgKyAnXCIgdG8gZXZlbnQgaGFuZGxlIScpKTtcblx0XHRlbHNlIGlmICh0eXBlb2YgZXZlbnRoYW5kbGUgPT09IFwiZnVuY3Rpb25cIikgY29udGVudC5vbihldmVudCwgZXZlbnRoYW5kbGUpO1xuXHRcdGVsc2UgaWYgKHR5cGVvZiBldmVudGhhbmRsZSA9PT0gXCJzdHJpbmdcIikgY29udGVudC5vbihldmVudCwgZGVsZWdhdGVyKGV2ZW50aGFuZGxlLCBzZXR0aW5nKSk7XG5cdFx0ZWxzZSBpZiAodHlwZW9mIGV2ZW50aGFuZGxlID09PSBcIm9iamVjdFwiKSB7XG5cdFx0XHRjb25zdCB7IGNhcHR1cmUgPSBmYWxzZSwgcGFzc2l2ZSA9IGZhbHNlLCBvbmNlID0gZmFsc2UgfSA9IGV2ZW50aGFuZGxlO1xuXHRcdFx0Y29udGVudC5vbihldmVudCwgZXZlbnRoYW5kbGUuZXZlbnRIYW5kbGUsIHsgY2FwdHVyZSwgcGFzc2l2ZSwgb25jZSB9KTtcblx0XHR9XG5cdH0sXG59O1xuXG5jb25zdCBiaW5kQXR0cmlidXRlID0gYXN5bmMgKHsgY29uZGl0aW9uLCBuYW1lLCB2YWx1ZSwgY29udGV4dCB9KSA9PiB7XG5cdGNvbnN0IHsgcmVzb2x2ZXIsIGNvbnRlbnQsIHRlbXBsYXRlIH0gPSBjb250ZXh0O1xuXG5cdGxldCBhdHRyaWJ1dGUgPSAhY29uZGl0aW9uID8gdmFsdWUgOiB0ZW1wbGF0ZS5hdHRyKG5hbWUpO1xuXHRjb25kaXRpb24gPSBjb25kaXRpb24gPyB2YWx1ZSA6IHRlbXBsYXRlLmF0dHIoXCI/XCIgKyBuYW1lKTtcblx0Y29uc3QgaGFzVmFsdWUgPSBpc1ZhbHVlKGF0dHJpYnV0ZSk7XG5cblx0aWYgKGNvbmRpdGlvbiAmJiBoYXNWYWx1ZSkge1xuXHRcdGNvbmRpdGlvbiA9IGF3YWl0IHJlc29sdmVyLnJlc29sdmUoY29uZGl0aW9uLCBmYWxzZSk7XG5cdFx0aWYgKGNvbmRpdGlvbiA9PT0gdHJ1ZSkgY29udGVudC5hdHRyKG5hbWUsIGF3YWl0IHJlc29sdmVyLnJlc29sdmVUZXh0KGF0dHJpYnV0ZSwgYXR0cmlidXRlKSk7XG5cdH0gZWxzZSBpZiAoY29uZGl0aW9uKSB7XG5cdFx0Y29uZGl0aW9uID0gYXdhaXQgcmVzb2x2ZXIucmVzb2x2ZShjb25kaXRpb24sIGZhbHNlKTtcblx0XHRpZiAoY29uZGl0aW9uID09PSB0cnVlKSBjb250ZW50LmF0dHIobmFtZSwgdHJ1ZSk7XG5cdH0gZWxzZSBpZiAoaGFzVmFsdWUpIHtcblx0XHRjb250ZW50LmF0dHIobmFtZSwgYXdhaXQgcmVzb2x2ZXIucmVzb2x2ZVRleHQoYXR0cmlidXRlLCBhdHRyaWJ1dGUpKTtcblx0fVxufTtcblxuY29uc3QgaXNWYWx1ZSA9ICh2YWx1ZSkgPT4ge1xuXHRyZXR1cm4gdmFsdWUgIT0gbnVsbCAmJiB0eXBlb2YgdmFsdWUgIT09IFwidW5kZWZpbmVkXCI7XG59O1xuXG5jb25zdCBiaW5kRXZlbnQgPSBhc3luYyAoeyBjb25kaXRpb24sIG5hbWUsIHZhbHVlLCBjb250ZXh0IH0pID0+IHtcblx0Y29uc3QgeyByZXNvbHZlciwgdGVtcGxhdGUsIGNvbnRlbnQgfSA9IGNvbnRleHQ7XG5cblx0Y29uZGl0aW9uID0gY29uZGl0aW9uID8gdmFsdWUgOiB0ZW1wbGF0ZS5hdHRyKFwiP0BcIiArIG5hbWUpO1xuXHRsZXQgaGFuZGxlID0gIWNvbmRpdGlvbiA/IHZhbHVlIDogdGVtcGxhdGUuYXR0cihcIkBcIiArIG5hbWUpO1xuXHRsZXQgc3BsaXQgPSBuYW1lLnNwbGl0KEZVTkNUSU9OX1NQTElUVEVSKTtcblx0aWYoc3BsaXQubGVuZ3RoID09IDEpXG5cdFx0c3BsaXQgPSBuYW1lLnNwbGl0KEZVTkNUSU9OX1NQTElUVEVSX09MRCk7XG5cblx0Y29uc3QgZXZlbnQgPSBzcGxpdC5zaGlmdCgpO1xuXHRjb25zdCB0eXBlID0gKHNwbGl0LnNoaWZ0KCkgfHwgREVGQVVMVF9FVkVOVF9GVU5DVElPTikudG9Mb3dlckNhc2UoKTtcblx0XG5cdGlmKHR5cGVvZiBoYW5kbGUgPT09IFwidW5kZWZpbmVkXCIgfHwgaGFuZGxlID09IG51bGwpXG5cdFx0Y29uc29sZS5lcnJvcihgRGVmaW5pdGlvbiBvZiBcIiR7ZXZlbnR9XCIgLSBldmVudCBoYW5kbGUgYXRgLCBjb250ZW50LCBcImlzIGluY29ycmVjdCFcIik7XG5cblx0aGFuZGxlID0gaGFuZGxlLnRyaW0oKTtcblx0Y29uc3Qgc2V0dGluZyA9IHtcblx0XHRidWJibGU6IHRydWUsXG5cdH07XG5cblx0aWYgKGNvbmRpdGlvbiApIHtcblx0XHRpZiAoKGF3YWl0IHJlc29sdmVyLnJlc29sdmUoY29uZGl0aW9uLCBmYWxzZSkpID09IHRydWUpIGF3YWl0IGJpbmRpbmcoZXZlbnQsIGhhbmRsZSwgc2V0dGluZywgdHlwZSwgcmVzb2x2ZXIsIGNvbnRlbnQsIHNwbGl0LCBjb250ZXh0KTtcblx0fSBlbHNlIGF3YWl0IGJpbmRpbmcoZXZlbnQsIGhhbmRsZSwgc2V0dGluZywgdHlwZSwgcmVzb2x2ZXIsIGNvbnRlbnQsIHNwbGl0LCBjb250ZXh0KTtcbn07XG5cbmNvbnN0IGJpbmRpbmcgPSBhc3luYyAoZXZlbnQsIGhhbmRsZSwgc2V0dGluZywgdHlwZSwgcmVzb2x2ZXIsIGNvbnRlbnQsIG9wdGlvbnMsIGNvbnRleHQpID0+IHtcblx0Y29uc3QgYmluZGVyID0gRVZFTlRGVU5DVElPTlNbdHlwZV07XG5cdGlmIChiaW5kZXIpIHJldHVybiBiaW5kZXIoZXZlbnQsIGhhbmRsZSwgc2V0dGluZywgdHlwZSwgcmVzb2x2ZXIsIGNvbnRlbnQsIG9wdGlvbnMsIGNvbnRleHQpO1xufTtcblxuY29uc3QgZGVsZWdhdGVyID0gZnVuY3Rpb24gKGRlbGVnYXRlLCBzZXR0aW5nKSB7XG5cdHJldHVybiBmdW5jdGlvbiAoZXZlbnQpIHtcblx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXHRcdGlmIChldmVudC5jdXJyZW50VGFyZ2V0KSBldmVudC5jdXJyZW50VGFyZ2V0LnRyaWdnZXIoZGVsZWdhdGUsIGV2ZW50KTtcblx0XHRlbHNlIGV2ZW50LnRhcmdldC50cmlnZ2VyKGRlbGVnYXRlLCBldmVudCk7XG5cdH07XG59O1xuXG5jbGFzcyBBdHRyaWJ1dGUgZXh0ZW5kcyBEaXJlY3RpdmUge1xuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRzdXBlcigpO1xuXHR9XG5cblx0Z2V0IG5hbWUoKSB7XG5cdFx0cmV0dXJuIFwiYXR0cmlidXRlXCI7XG5cdH1cblx0Z2V0IHJhbmsoKSB7XG5cdFx0cmV0dXJuIERpcmVjdGl2ZS5NSU5fUkFOSztcblx0fVxuXHRnZXQgcGhhc2UoKSB7XG5cdFx0cmV0dXJuIERpcmVjdGl2ZS5QSEFTRS5jb250ZW50O1xuXHR9XG5cblx0YXN5bmMgZXhlY3V0ZShjb250ZXh0KSB7XG5cdFx0Y29uc3QgeyB0ZW1wbGF0ZSB9ID0gY29udGV4dDtcblx0XHRpZiAoISh0ZW1wbGF0ZSBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSkgcmV0dXJuIGNvbnRleHQ7XG5cblx0XHRjb25zdCBwcm9jZXNzZWQgPSBuZXcgU2V0KElHTk9SRURfQVRUUklCVVRFUyk7XG5cdFx0Zm9yIChjb25zdCBhdHRyaWJ1dGUgb2YgdGVtcGxhdGUuYXR0cmlidXRlcykge1xuXHRcdFx0Y29uc3QgWywganN0bCwgY29uZGl0aW9uLCBldmVudCwgbmFtZV0gPSBBVFRSSUJVVEVfTkFNRS5leGVjKGF0dHJpYnV0ZS5uYW1lKTtcblx0XHRcdGlmICghanN0bCAmJiAhcHJvY2Vzc2VkLmhhcyhuYW1lKSkge1xuXHRcdFx0XHRjb25zdCB2YWx1ZSA9IGF0dHJpYnV0ZS52YWx1ZTtcblxuXHRcdFx0XHRpZiAoZXZlbnQpIGF3YWl0IGJpbmRFdmVudCh7IGNvbmRpdGlvbiwgZXZlbnQsIG5hbWUsIHZhbHVlLCBjb250ZXh0IH0pO1xuXHRcdFx0XHRlbHNlIGF3YWl0IGJpbmRBdHRyaWJ1dGUoeyBjb25kaXRpb24sIG5hbWUsIHZhbHVlLCBjb250ZXh0IH0pO1xuXHRcdFx0fVxuXHRcdFx0cHJvY2Vzc2VkLmFkZChuYW1lKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gY29udGV4dDtcblx0fVxufVxuXG5EaXJlY3RpdmUuZGVmaW5lKHsgZGlyZWN0aXZlOiBuZXcgQXR0cmlidXRlKCkgfSk7XG4iLCJpbXBvcnQgRGlyZWN0aXZlIGZyb20gXCIuLi9EaXJlY3RpdmUuanNcIjtcblxuY2xhc3MgQ2hvb3NlIGV4dGVuZHMgRGlyZWN0aXZlIHtcblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0c3VwZXIoKTtcblx0fVxuXG5cdGdldCBuYW1lKCkgeyByZXR1cm4gXCJjaG9vc2VcIiB9XG5cdGdldCByYW5rKCkgeyByZXR1cm4gRGlyZWN0aXZlLk1JTl9SQU5LICsgMSB9XG5cdGdldCBwaGFzZSgpIHsgcmV0dXJuIERpcmVjdGl2ZS5QSEFTRS50ZW1wbGF0ZSB9XG5cblx0YXN5bmMgZXhlY3V0ZShjb250ZXh0KSB7XG5cdFx0aWYgKCEoY29udGV4dC50ZW1wbGF0ZSBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSB8fCAhY29udGV4dC50ZW1wbGF0ZS5oYXNBdHRyaWJ1dGUoXCJqc3RsLWNob29zZVwiKSB8fCBjb250ZXh0LnRlbXBsYXRlLmNoaWxkcmVuLmxlbmd0aCA9PSAwKVxuXHRcdFx0cmV0dXJuIGNvbnRleHQ7XG5cdFx0XG5cdFx0Ly9jbG9uZSB0ZW1wbGF0ZSwgYmVmb3JlIG1hbmlwdWxhdGUgdGVtcGxhdGVcblx0XHRjb250ZXh0LnRlbXBsYXRlID0gY29udGV4dC50ZW1wbGF0ZS5jbG9uZU5vZGUodHJ1ZSk7XG5cdFx0Y29uc3QgeyB0ZW1wbGF0ZSwgcmVzb2x2ZXIgfSA9IGNvbnRleHQ7XG5cdFx0bGV0IHJlc29sdmVkID0gZmFsc2U7XG5cdFx0Y29uc3Qgd2hlbnMgPSB0ZW1wbGF0ZS5maW5kKFwiOnNjb3BlID4gW2pzdGwtd2hlbl1cIik7XG5cdFx0Y29uc3QgbGVuZ3RoID0gd2hlbnMubGVuZ3RoO1xuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcblx0XHRcdGNvbnN0IG5vZGUgPSB3aGVuc1tpXTtcblx0XHRcdGlmICghcmVzb2x2ZWQgJiYgKGF3YWl0IHJlc29sdmVyLnJlc29sdmUobm9kZS5hdHRyKFwianN0bC13aGVuXCIpLCBmYWxzZSkpKVxuXHRcdFx0XHRyZXNvbHZlZCA9IHRydWU7XG5cdFx0XHRlbHNlXG5cdFx0XHRcdG5vZGUucmVtb3ZlKCk7XG5cdFx0fVxuXG5cdFx0aWYgKHJlc29sdmVkKVxuXHRcdFx0dGVtcGxhdGUuZmluZChcIjpzY29wZSA+IFtqc3RsLW90aGVyd2lzZV1cIikucmVtb3ZlKCk7XG5cblx0XHRyZXR1cm4gY29udGV4dDtcblx0fVxufVxuXG5EaXJlY3RpdmUuZGVmaW5lKHsgZGlyZWN0aXZlOiBuZXcgQ2hvb3NlKCkgfSk7IiwiaW1wb3J0IERpcmVjdGl2ZSBmcm9tIFwiLi4vRGlyZWN0aXZlLmpzXCI7XG5pbXBvcnQgRXhwcmVzc2lvblJlc29sdmVyIGZyb20gXCJAZGVmYXVsdC1qcy9kZWZhdWx0anMtZXhwcmVzc2lvbi1sYW5ndWFnZS9zcmMvRXhwcmVzc2lvblJlc29sdmVyLmpzXCI7XG5cbmNvbnN0IE1PREVTID0ge1xuXHRcInJlbW90ZVwiOiBhc3luYyAoeyBkYXRhLCBjb250ZXh0IH0pID0+IHtcdFx0XG5cdFx0Y29uc3Qge3Jlc29sdmVyLCB0ZW1wbGF0ZX0gPSBjb250ZXh0O1xuXHRcdGRhdGEgPSBhd2FpdCByZXNvbHZlci5yZXNvbHZlVGV4dChkYXRhKTtcblx0XHRkYXRhID0gbmV3IFVSTChkYXRhLCBsb2NhdGlvbik7XG5cdFx0bGV0IG9wdGlvbiA9IGF3YWl0IHJlc29sdmVyLnJlc29sdmVUZXh0KHRlbXBsYXRlLmF0dHIoXCJqc3RsLWRhdGEtb3B0aW9uXCIpIHx8IFwie31cIik7XG5cdFx0b3B0aW9uID0gSlNPTi5wYXJzZShvcHRpb24pO1xuXG5cdFx0ZGF0YSA9IGF3YWl0IGZldGNoKGRhdGEudG9TdHJpbmcoKSwgb3B0aW9uKTtcblx0XHRyZXR1cm4gZGF0YS5qc29uKCk7XG5cdH0sXHRcblx0XCJzZXRcIjogYXN5bmMgKHsgZGF0YSwgY29udGV4dCB9KSA9PiB7XG5cdFx0Y29uc3Qge3Jlc29sdmVyfSA9IGNvbnRleHQ7XG5cdFx0XG5cdFx0ZGF0YSA9IGF3YWl0IHJlc29sdmVyLnJlc29sdmUoZGF0YSk7XG5cdFx0cmV0dXJuIGRhdGE7XG5cdH0sXG5cdFwiZGlyZWN0XCI6IGFzeW5jICh7IGRhdGEsIGNvbnRleHQgfSkgPT4ge1xuXHRcdGNvbnN0IHtyZXNvbHZlcn0gPSBjb250ZXh0O1xuXHRcdFxuXHRcdGRhdGEgPSBhd2FpdCByZXNvbHZlci5yZXNvbHZlVGV4dChkYXRhKTtcblx0XHRyZXR1cm4gZGF0YTtcblx0fVxufTtcblxuY29uc3QgdXBkYXRlQ29udGV4dCA9ICh7IHZhcm5hbWUsIGRhdGEsIHNjb3BlLCBjb250ZXh0IH0pID0+IHtcblx0aWYgKHZhcm5hbWUpXG5cdFx0Y29udGV4dC5yZXNvbHZlci51cGRhdGVEYXRhKHZhcm5hbWUsIGRhdGEsIHNjb3BlKTtcblx0ZWxzZSBpZiAoc2NvcGUpXG5cdFx0Y29udGV4dC5yZXNvbHZlci5tZXJnZUNvbnRleHQoZGF0YSwgc2NvcGUpO1xuXHRlbHNle1xuXHRcdGNvbnN0IHJlc29sdmVyID0gbmV3IEV4cHJlc3Npb25SZXNvbHZlcih7IGNvbnRleHQ6IGRhdGEsIG5hbWU6IFwianN0bC1kYXRhXCIsIHBhcmVudDogY29udGV4dC5yZXNvbHZlciB9KTtcblx0XHQvL2NvbnRleHQgPSBjb250ZXh0LnN1YkNvbnRleHQoe3Jlc29sdmVyfSk7XG5cdFx0Y29udGV4dC5yZXNvbHZlciA9IHJlc29sdmVyO1xuXHR9XG5cdFxuXHRcdFxuXHRyZXR1cm4gY29udGV4dDtcbn07XG5cblxuXG5jbGFzcyBEYXRhIGV4dGVuZHMgRGlyZWN0aXZlIHtcblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0c3VwZXIoKTtcblx0fVxuXG5cdGdldCBuYW1lKCkgeyByZXR1cm4gXCJkYXRhXCIgfVxuXHRnZXQgcmFuaygpIHsgcmV0dXJuIDEwMDAgfVxuXHRnZXQgcGhhc2UoKXtyZXR1cm4gRGlyZWN0aXZlLlBIQVNFLmRhdGF9XG5cblx0YXN5bmMgZXhlY3V0ZShjb250ZXh0KSB7XG5cdFx0aWYgKCEoY29udGV4dC50ZW1wbGF0ZSBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSB8fCAhY29udGV4dC50ZW1wbGF0ZS5hdHRyKFwianN0bC1kYXRhXCIpKVxuXHRcdFx0cmV0dXJuIGNvbnRleHQ7XG5cdFx0XHRcblx0XHR0cnkge1xuXHRcdFx0Y29uc3QgeyB0ZW1wbGF0ZSB9ID0gY29udGV4dDtcdFx0XHRcblx0XHRcdGNvbnN0IG1vZGUgPSBNT0RFU1sodGVtcGxhdGUuYXR0cihcImpzdGwtZGF0YS1tb2RlXCIpIHx8IFwicmVtb3RlXCIpXTtcblx0XHRcdGlmICghbW9kZSlcblx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKFwiVGhlIGpzdGwtZGF0YS1tb2RlIGlzIHVuc3VwcG9ydGVkIVwiKTtcblxuXHRcdFx0bGV0IGRhdGEgPSB0ZW1wbGF0ZS5hdHRyKFwianN0bC1kYXRhXCIpO1xuXHRcdFx0ZGF0YSA9IGF3YWl0IG1vZGUoeyBkYXRhLCBjb250ZXh0IH0pO1xuXG5cdFx0XHRjb25zdCB2YXJuYW1lID0gdGVtcGxhdGUuYXR0cihcImpzdGwtZGF0YS12YXJcIik7XG5cdFx0XHRjb25zdCBzY29wZSA9IHRlbXBsYXRlLmF0dHIoXCJqc3RsLWRhdGEtc2NvcGVcIik7XG5cdFx0XHRjb250ZXh0ID0gdXBkYXRlQ29udGV4dCh7IHZhcm5hbWUsIGRhdGEsIHNjb3BlLCBjb250ZXh0IH0pO1xuXHRcdH0gY2F0Y2ggKGUpIHtcblx0XHRcdGNvbnNvbGUuZXJyb3IoZSwgY29udGV4dC50ZW1wbGF0ZSk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGNvbnRleHQ7XG5cblx0fVxufVxuXG5EaXJlY3RpdmUuZGVmaW5lKHsgZGlyZWN0aXZlOiBuZXcgRGF0YSgpIH0pOyIsImltcG9ydCBEaXJlY3RpdmUgZnJvbSBcIi4uL0RpcmVjdGl2ZS5qc1wiO1xuaW1wb3J0IEV4cHJlc3Npb25SZXNvbHZlciBmcm9tIFwiQGRlZmF1bHQtanMvZGVmYXVsdGpzLWV4cHJlc3Npb24tbGFuZ3VhZ2Uvc3JjL0V4cHJlc3Npb25SZXNvbHZlci5qc1wiO1xuaW1wb3J0IHtpc1VuZGVmaW5lZE9yTnVsbE9yQmxhbmssIGlzVW5kZWZpbmVkT3JOdWxsfSBmcm9tIFwiLi4vVXRpbHMuanNcIjtcblxuY29uc3QgQVRUUklCVVRFID0ge1xuXHREQVRBOiBcImpzdGwtZm9yZWFjaFwiLFxuXHRWQVI6IFwianN0bC1mb3JlYWNoLXZhclwiLFxuXHRTVEFUVVM6IFwianN0bC1mb3JlYWNoLXN0YXR1c1wiLFxuXHRDT1VOVDogXCJqc3RsLWZvcmVhY2gtY291bnRcIixcblx0U1RBUlQ6IFwianN0bC1mb3JlYWNoLXN0YXJ0XCIsXG5cdFNURVA6IFwianN0bC1mb3JlYWNoLXN0ZXBcIixcblx0Q09ORElUSU9OOiBcImpzdGwtZm9yZWFjaC1jb25kaXRpb25cIlxufTtcblxuXG4vKipcbiAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb24gXG4gKiBAcGFyYW0ge251bWJlcn0gb3B0aW9uLnN0YXJ0IFxuICogQHBhcmFtIHtudW1iZXJ9IG9wdGlvbi5zdGVwIFxuICogQHBhcmFtIHtudW1iZXJ9IG9wdGlvbi5jb3VudCBcbiAqIEBwYXJhbSB7c3RyaW5nfSBvcHRpb24udmFybmFtZSBcbiAqIEBwYXJhbSB7c3RyaW5nfSBvcHRpb24uc3RhdHVzIFxuICogQHBhcmFtIHtFeHByZXNzaW9uUmVzb2x2ZXJ9IG9wdGlvbi5yZXNvbHZlciBcbiAqIEByZXR1cm5zIHtQcm9taXNlPHZvaWQ+fVxuICovXG5jb25zdCBkb0NvdW50ID0gYXN5bmMgKG9wdGlvbikgPT4ge1xuXHRsZXQgeyBzdGFydCwgc3RlcCwgY291bnQsIHZhcm5hbWUsIHN0YXR1cywgcmVzb2x2ZXIgfSA9IG9wdGlvbjtcblxuXHRjb3VudCA9IGF3YWl0IHJlc29sdmVyLnJlc29sdmUoY291bnQpO1xuXHRjb25zdCBsZW5ndGggPSBzdGFydCArIChjb3VudCAqIHN0ZXApO1xuXHRsZXQgc3RvcCA9IGZhbHNlO1xuXHRmb3IgKGxldCBpID0gc3RhcnQ7IGkgPCBsZW5ndGggJiYgIXN0b3A7IGkgPSBpICsgc3RlcCkge1xuXHRcdGNvbnN0IGl0ZXJhdGlvbiA9IHt9XG5cdFx0aXRlcmF0aW9uW3Zhcm5hbWVdID0gaTtcblx0XHRpdGVyYXRpb25bc3RhdHVzXSA9IHtcblx0XHRcdGZpcnN0OiBpID09PSBzdGFydCxcblx0XHRcdGxhc3Q6IGkgPj0gbGVuZ3RoIC0gc3RlcCxcblx0XHRcdGluZGV4OiBpLFxuXHRcdFx0bnVtYmVyOiBpICsgMSxcblx0XHRcdHN0ZXAsXG5cdFx0XHRjb3VudFxuXHRcdH07XG5cdFx0c3RvcCA9ICEoYXdhaXQgaXRlcmF0ZShpdGVyYXRpb24sIG9wdGlvbikpO1xuXHR9XG59O1xuXG5cblxuLyoqXG4gKiBAcGFyYW0ge29iamVjdH0gb3B0aW9uIFxuICogQHBhcmFtIHtBcnJheTxhbnk+fGFueX0gb3B0aW9uLmRhdGEgXG4gKiBAcGFyYW0ge251bWJlcn0gb3B0aW9uLnN0YXJ0IFxuICogQHBhcmFtIHtudW1iZXJ9IG9wdGlvbi5zdGVwIFxuICogQHBhcmFtIHtudW1iZXJ9IG9wdGlvbi5jb3VudCBcbiAqIEBwYXJhbSB7c3RyaW5nfSBvcHRpb24udmFybmFtZSBcbiAqIEBwYXJhbSB7c3RyaW5nfSBvcHRpb24uc3RhdHVzIFxuICogQHBhcmFtIHtFeHByZXNzaW9uUmVzb2x2ZXJ9IG9wdGlvbi5yZXNvbHZlciBcbiAqIEByZXR1cm5zIHtQcm9taXNlPHZvaWQ+fVxuICovXG5jb25zdCBkb0ZvcmVhY2ggPSBhc3luYyAob3B0aW9uKSA9PiB7XG5cdGxldCB7IGRhdGEsIHN0YXJ0LCBzdGVwLCBjb3VudCwgdmFybmFtZSwgc3RhdHVzLCByZXNvbHZlciB9ID0gb3B0aW9uO1xuXG5cdGRhdGEgPSBhd2FpdCByZXNvbHZlci5yZXNvbHZlKGRhdGEsIFtdKTtcblx0bGV0IGFycmF5ID0gZGF0YTtcblx0Y29uc3QgaXNPYmplY3QgPSAhKGRhdGEgaW5zdGFuY2VvZiBBcnJheSk7XG5cdGlmIChpc09iamVjdCkgYXJyYXkgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhkYXRhKTtcblxuXHRjb3VudCA9IGNvdW50ICE9IFwiXCIgPyBhd2FpdCByZXNvbHZlci5yZXNvbHZlKGNvdW50LCAwKSA6IG51bGw7XG5cdGNvbnN0IGxlbmd0aCA9IGNvdW50ID8gTWF0aC5taW4oc3RhcnQgKyBjb3VudCwgYXJyYXkubGVuZ3RoKSA6IGFycmF5Lmxlbmd0aDtcblx0bGV0IHN0b3AgPSBmYWxzZTtcblx0Zm9yIChsZXQgaSA9IHN0YXJ0OyBpIDwgbGVuZ3RoICYmICFzdG9wOyBpID0gaSArIHN0ZXApIHtcblx0XHRjb25zdCBpdGVyYXRpb24gPSB7fVxuXHRcdGl0ZXJhdGlvblt2YXJuYW1lXSA9IGlzT2JqZWN0ID8gZGF0YVthcnJheVtpXV0gOiBkYXRhW2ldO1xuXHRcdGl0ZXJhdGlvbltzdGF0dXNdID0ge1xuXHRcdFx0Zmlyc3Q6IGkgPT09IHN0YXJ0LFxuXHRcdFx0bGFzdDogaSA+PSBsZW5ndGggLSBzdGVwLFxuXHRcdFx0c3RlcCxcblx0XHRcdGluZGV4OiBpLFxuXHRcdFx0bnVtYmVyOiBpICsgMSxcblx0XHRcdGNvdW50OiBsZW5ndGgsXG5cdFx0XHRrZXk6IGlzT2JqZWN0ID8gYXJyYXlbaV0gOiBpLFxuXHRcdFx0ZGF0YVxuXHRcdH07XG5cdFx0c3RvcCA9ICEoYXdhaXQgaXRlcmF0ZShpdGVyYXRpb24sIG9wdGlvbikpO1xuXHR9XG59O1xuXG5jb25zdCBpdGVyYXRlID0gYXN5bmMgKGRhdGEsIG9wdGlvbikgPT4ge1xuXHRsZXQgeyB0ZW1wbGF0ZSwgcmVzb2x2ZXIsIHJlbmRlcmVyLCBjb250YWluZXIsIGNvbmRpdGlvbiwgY29udGV4dCB9ID0gb3B0aW9uO1xuXHRyZXNvbHZlciA9IG5ldyBFeHByZXNzaW9uUmVzb2x2ZXIoeyBjb250ZXh0OiBkYXRhLCBuYW1lOiBcImpzdGwtZm9yZWFjaFwiLCBwYXJlbnQ6IHJlc29sdmVyIH0pO1xuXG5cdGNvbmRpdGlvbiA9IGNvbmRpdGlvbiA/IGF3YWl0IHJlc29sdmVyLnJlc29sdmUoY29uZGl0aW9uLCBmYWxzZSkgOiBmYWxzZTtcblx0aWYgKGNvbmRpdGlvbilcblx0XHRyZXR1cm4gZmFsc2U7XG5cdGNvbnN0IGl0ZW1Db250ZXh0ID0gY29udGV4dC5zdWJDb250ZXh0KHsgcmVzb2x2ZXIsIGNvbnRhaW5lciwgdGVtcGxhdGUsIG1vZGU6IFwiYXBwZW5kXCIgfSk7XG5cdGF3YWl0IHJlbmRlcmVyLnJlbmRlcihpdGVtQ29udGV4dCk7XG5cdGF3YWl0IGl0ZW1Db250ZXh0LnJlYWR5KCk7XG5cdHJldHVybiB0cnVlO1xufTtcblxuY2xhc3MgRm9yZWFjaCBleHRlbmRzIERpcmVjdGl2ZSB7XG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHN1cGVyKCk7XG5cdH1cblxuXHRnZXQgbmFtZSgpIHsgcmV0dXJuIFwiZm9yZWFjaFwiIH1cblx0Z2V0IHJhbmsoKSB7IHJldHVybiBEaXJlY3RpdmUuTUlOX1JBTksgKyAyIH1cblx0Z2V0IHBoYXNlKCkgeyByZXR1cm4gRGlyZWN0aXZlLlBIQVNFLnRlbXBsYXRlIH1cblxuXHRhc3luYyBleGVjdXRlKGNvbnRleHQpIHtcblx0XHRpZiAoIShjb250ZXh0LnRlbXBsYXRlIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpIHx8ICghY29udGV4dC50ZW1wbGF0ZS5hdHRyKEFUVFJJQlVURS5EQVRBKSAmJiAhY29udGV4dC50ZW1wbGF0ZS5hdHRyKEFUVFJJQlVURS5DT1VOVCkpKVxuXHRcdFx0cmV0dXJuIGNvbnRleHQ7XG5cblx0XHRjb250ZXh0Lmlnbm9yZSA9IHRydWU7XG5cdFx0dHJ5IHtcblx0XHRcdGNvbnN0IHsgdGVtcGxhdGUsIHJlc29sdmVyLCByZW5kZXJlciwgY29udGVudCB9ID0gY29udGV4dDtcblx0XHRcdGNvbnN0IGRhdGEgPSAodGVtcGxhdGUuYXR0cihBVFRSSUJVVEUuREFUQSkgfHwgXCJcIikudHJpbSgpO1xuXHRcdFx0Y29uc3QgY291bnQgPSAodGVtcGxhdGUuYXR0cihBVFRSSUJVVEUuQ09VTlQpIHx8IFwiXCIpLnRyaW0oKTtcblx0XHRcdGNvbnN0IG9wdGlvbiA9IHtcblx0XHRcdFx0ZGF0YSxcblx0XHRcdFx0Y291bnQsXG5cdFx0XHRcdHN0YXJ0OiBhd2FpdCByZXNvbHZlci5yZXNvbHZlKHRlbXBsYXRlLmF0dHIoQVRUUklCVVRFLlNUQVJUKSB8fCBcIjBcIiksXG5cdFx0XHRcdHN0ZXA6IGF3YWl0IHJlc29sdmVyLnJlc29sdmUodGVtcGxhdGUuYXR0cihBVFRSSUJVVEUuU1RFUCkgfHwgXCIxXCIpLFxuXHRcdFx0XHR2YXJuYW1lOiAodGVtcGxhdGUuYXR0cihBVFRSSUJVVEUuVkFSKSB8fCBcIml0ZW1cIikudHJpbSgpLFxuXHRcdFx0XHRzdGF0dXM6ICh0ZW1wbGF0ZS5hdHRyKEFUVFJJQlVURS5TVEFUVVMpIHx8IFwic3RhdHVzXCIpLnRyaW0oKSxcblx0XHRcdFx0Y29uZGl0aW9uOiB0ZW1wbGF0ZS5hdHRyKEFUVFJJQlVURS5DT05ESVRJT04pLFxuXHRcdFx0XHR0ZW1wbGF0ZTogdGVtcGxhdGUuY2hpbGROb2Rlcyxcblx0XHRcdFx0cmVzb2x2ZXIsXG5cdFx0XHRcdHJlbmRlcmVyLFxuXHRcdFx0XHRjb250YWluZXI6IGNvbnRlbnQsXG5cdFx0XHRcdGNvbnRleHRcblx0XHRcdH07XG5cdFx0XHRpZiAoaXNVbmRlZmluZWRPck51bGxPckJsYW5rKGRhdGEpICYmICFpc1VuZGVmaW5lZE9yTnVsbE9yQmxhbmsoY291bnQpKVxuXHRcdFx0XHRhd2FpdCBkb0NvdW50KG9wdGlvbik7XG5cdFx0XHRlbHNlIGlmKCFpc1VuZGVmaW5lZE9yTnVsbE9yQmxhbmsoZGF0YSkpXG5cdFx0XHRcdGF3YWl0IGRvRm9yZWFjaChvcHRpb24pO1xuXG5cdFx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRcdGNvbnNvbGUuZXJyb3IoXCJlcnJvciBhdCBqc3RsLWZvcmVhY2g6XCIsIGVycm9yKTtcblx0XHR9XG5cdFx0cmV0dXJuIGNvbnRleHQ7XG5cblx0fVxufTtcblxuRGlyZWN0aXZlLmRlZmluZSh7IGRpcmVjdGl2ZTogbmV3IEZvcmVhY2goKSB9KTsiLCJpbXBvcnQgRGlyZWN0aXZlIGZyb20gXCIuLi9EaXJlY3RpdmUuanNcIjtcblxuY2xhc3MgSWYgZXh0ZW5kcyBEaXJlY3RpdmUge1xuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRzdXBlcigpO1xuXHR9XG5cblx0Z2V0IG5hbWUoKSB7IHJldHVybiBcImlmXCIgfVxuXHRnZXQgcmFuaygpIHsgcmV0dXJuIERpcmVjdGl2ZS5NSU5fUkFOSyArIDEwMDAgfVxuXHRnZXQgcGhhc2UoKSB7IHJldHVybiBEaXJlY3RpdmUuUEhBU0UuaW5pdCB9XG5cblx0YXN5bmMgZXhlY3V0ZShjb250ZXh0KSB7XG5cdFx0Y29uc3QgeyB0ZW1wbGF0ZSB9ID0gY29udGV4dDtcblx0XHRpZiAoISh0ZW1wbGF0ZSBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSB8fCAhdGVtcGxhdGUuYXR0cihcImpzdGwtaWZcIikpXG5cdFx0XHRyZXR1cm4gY29udGV4dDtcblxuXHRcdGNvbnN0IGV4cHJlc3Npb24gPSB0ZW1wbGF0ZS5hdHRyKFwianN0bC1pZlwiKTtcblx0XHRjb25zdCByZXNvbHZlciA9IGNvbnRleHQucmVzb2x2ZXI7XG5cdFx0Y29uc3QgcmVzdWx0ID0gYXdhaXQgcmVzb2x2ZXIucmVzb2x2ZShleHByZXNzaW9uLCBmYWxzZSk7XG5cdFx0aWYgKCFyZXN1bHQpIHtcblx0XHRcdGNvbnRleHQuY29udGVudCA9IG51bGw7XG5cdFx0XHRjb250ZXh0LnN0b3AgPSB0cnVlO1xuXHRcdFx0Y29udGV4dC5pZ25vcmUgPSB0cnVlO1xuXHRcdH1cblxuXHRcdHJldHVybiBjb250ZXh0O1xuXHR9XG59XG5cbkRpcmVjdGl2ZS5kZWZpbmUoeyBkaXJlY3RpdmU6IG5ldyBJZigpIH0pOyIsImltcG9ydCBEaXJlY3RpdmUgZnJvbSBcIi4uL0RpcmVjdGl2ZS5qc1wiO1xuaW1wb3J0IFRlbXBsYXRlIGZyb20gXCIuLi9UZW1wbGF0ZS5qc1wiO1xuXG5jbGFzcyBJbmNsdWRlIGV4dGVuZHMgRGlyZWN0aXZlIHtcblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0c3VwZXIoKTtcblx0fVxuXG5cdGdldCBuYW1lKCkge1xuXHRcdHJldHVybiBcImluY2x1ZGVcIjtcblx0fVxuXHRnZXQgcmFuaygpIHtcblx0XHRyZXR1cm4gRGlyZWN0aXZlLk1JTl9SQU5LO1xuXHR9XG5cdGdldCBwaGFzZSgpIHtcblx0XHRyZXR1cm4gRGlyZWN0aXZlLlBIQVNFLnRlbXBsYXRlO1xuXHR9XG5cblx0YXN5bmMgZXhlY3V0ZShjb250ZXh0KSB7XG5cdFx0aWYgKCEoY29udGV4dC50ZW1wbGF0ZSBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSB8fCAhY29udGV4dC50ZW1wbGF0ZS5hdHRyKFwianN0bC1pbmNsdWRlXCIpKSByZXR1cm4gY29udGV4dDtcblx0XHR0cnkge1xuXHRcdFx0Y29uc3QgeyB0ZW1wbGF0ZSwgcmVzb2x2ZXIsIHJlbmRlcmVyIH0gPSBjb250ZXh0O1xuXHRcdFx0bGV0IGluY2x1ZGUgPSB0ZW1wbGF0ZS5hdHRyKFwianN0bC1pbmNsdWRlXCIpO1xuXHRcdFx0aW5jbHVkZSA9IGF3YWl0IHJlc29sdmVyLnJlc29sdmVUZXh0KGluY2x1ZGUpO1xuXHRcdFx0aW5jbHVkZSA9IG5ldyBVUkwoaW5jbHVkZSwgbG9jYXRpb24pO1xuXHRcdFx0aW5jbHVkZSA9IGF3YWl0IFRlbXBsYXRlLmxvYWQoaW5jbHVkZSk7XG5cblx0XHRcdGNvbnN0IG1vZGUgPSB0ZW1wbGF0ZS5hdHRyKFwianN0bC1pbmNsdWRlLW1vZGVcIikgfHwgXCJyZXBsYWNlXCI7XG5cblx0XHRcdGNvbnN0IHN1YkNvbnRleHQgPSBjb250ZXh0LnN1YkNvbnRleHQoeyB0ZW1wbGF0ZTogaW5jbHVkZSwgY29udGFpbmVyOiBjb250ZXh0LmNvbnRlbnQsIG1vZGV9KTtcblx0XHRcdGF3YWl0IHJlbmRlcmVyLnJlbmRlcihzdWJDb250ZXh0KTtcblx0XHRcdGF3YWl0IHN1YkNvbnRleHQucmVhZHkoKTtcblx0XHRcdGNvbnRleHQuaWdub3JlID0gdHJ1ZTtcblx0XHRcdGNvbnRleHQuc3RvcCA9IGZhbHNlO1xuXG5cdFx0XHRyZXR1cm4gY29udGV4dDtcblx0XHR9IGNhdGNoIChlKSB7XG5cdFx0XHRjb25zb2xlLmVycm9yKGUsIGNvbnRleHQudGVtcGxhdGUpO1xuXHRcdFx0cmV0dXJuIGNvbnRleHQ7XG5cdFx0fVxuXHR9XG59XG5cbkRpcmVjdGl2ZS5kZWZpbmUoeyBkaXJlY3RpdmU6IG5ldyBJbmNsdWRlKCkgfSk7XG4iLCJpbXBvcnQgRGlyZWN0aXZlIGZyb20gXCIuLi9EaXJlY3RpdmUuanNcIjtcbmltcG9ydCBSZXBsYWNlIGZyb20gXCIuLi9lbGVtZW50cy9SZXBsYWNlLmpzXCI7XG5cbmNvbnN0IE1BUktFUl9JR05PUkUgPSBcImpzdGwtaWdub3JlXCI7XG5jb25zdCBNQVJLRVJfSUdOT1JFX0NISUxEUyA9IFwianN0bC1pZ25vcmUtY2hpbGRzXCI7XG5jb25zdCBNQVJLRVJfQVNZTkMgPSBcImpzdGwtYXN5bmNcIjtcbmNvbnN0IE1BUktFUl9UQUdOQU1FID0gXCJqc3RsLXRhZ25hbWVcIjtcbmNvbnN0IE1BUktFUl9JUyA9IFwiaXNcIjtcblxuY2xhc3MgSW5pdGlhbCBleHRlbmRzIERpcmVjdGl2ZSB7XG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHN1cGVyKCk7XG5cdH1cblxuXHRnZXQgbmFtZSgpIHtcblx0XHRyZXR1cm4gXCJpbml0aWFsXCI7XG5cdH1cblx0Z2V0IHJhbmsoKSB7XG5cdFx0cmV0dXJuIERpcmVjdGl2ZS5NSU5fUkFOSztcblx0fVxuXHRnZXQgcGhhc2UoKSB7XG5cdFx0cmV0dXJuIERpcmVjdGl2ZS5QSEFTRS5pbml0O1xuXHR9XG5cblx0YXN5bmMgZXhlY3V0ZShjb250ZXh0KSB7XG5cdFx0Y29uc3QgeyB0ZW1wbGF0ZSwgcmVuZGVyZXIsIHJlc29sdmVyIH0gPSBjb250ZXh0O1xuXHRcdGlmICghKHRlbXBsYXRlIGluc3RhbmNlb2YgRWxlbWVudCkpIHtcblx0XHRcdGNvbnRleHQuY29udGVudCA9IGRvY3VtZW50LmltcG9ydE5vZGUodGVtcGxhdGUsIHRydWUpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRpZiAodGVtcGxhdGUuaGFzQXR0cmlidXRlKE1BUktFUl9JR05PUkUpKSB7XG5cdFx0XHRcdGNvbnRleHQuY29udGVudCA9IGRvY3VtZW50LmltcG9ydE5vZGUodGVtcGxhdGUsIHRydWUpO1xuXHRcdFx0XHRjb250ZXh0LmNvbnRlbnQucmVtb3ZlQXR0cmlidXRlKE1BUktFUl9JR05PUkUpO1xuXHRcdFx0XHRjb250ZXh0LnN0b3AgPSB0cnVlO1xuXHRcdFx0XHRjb250ZXh0Lmlnbm9yZSA9IHRydWU7XG5cdFx0XHR9IGVsc2UgaWYgKGZhbHNlICYmIHRlbXBsYXRlLmhhc0F0dHJpYnV0ZShNQVJLRVJfQVNZTkMpKSB7XG5cdFx0XHRcdGNvbnRleHQuY29udGVudCA9IG5ldyBSZXBsYWNlKCk7XG5cdFx0XHRcdHRlbXBsYXRlLmF0dHIoTUFSS0VSX0FTWU5DLCBudWxsKTtcblx0XHRcdFx0Y29uc3QgcmVuZGVyT3B0aW9uID0gY29udGV4dC50b1JlbmRlck9wdGlvbih7IG1vZGU6IFwicmVwbGFjZVwiLCB0YXJnZXQ6IGNvbnRleHQuY29udGVudCB9KTtcblx0XHRcdFx0c2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHRcdFx0cmVuZGVyZXIucmVuZGVyKHJlbmRlck9wdGlvbik7XG5cdFx0XHRcdH0sIHBhcnNlSW50KHRlbXBsYXRlLmF0dHIoTUFSS0VSX0FTWU5DKSB8fCBcIjI1MFwiKSB8fCAyNTApO1xuXHRcdFx0XHRjb250ZXh0LnN0b3AgPSB0cnVlO1xuXHRcdFx0XHRjb250ZXh0Lmlnbm9yZSA9IHRydWU7XG5cdFx0XHR9IGVsc2UgaWYgKHRlbXBsYXRlIGluc3RhbmNlb2YgSFRNTFRlbXBsYXRlRWxlbWVudCkge1xuXHRcdFx0XHRjb250ZXh0LmNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRlbXBsYXRlLnRhZ05hbWUpO1xuXHRcdFx0XHRjb25zdCBzdWJDb250ZXh0ID0gY29udGV4dC5zdWJDb250ZXh0KHsgdGVtcGxhdGU6IHRlbXBsYXRlLmNvbnRlbnQuY2hpbGROb2RlcywgY29udGFpbmVyOiBjb250ZXh0LmNvbnRlbnQuY29udGVudCB9KTtcblx0XHRcdFx0YXdhaXQgcmVuZGVyZXIucmVuZGVyKHN1YkNvbnRleHQpO1xuXHRcdFx0XHRjb250ZXh0LnN0b3AgPSBmYWxzZTtcblx0XHRcdFx0Y29udGV4dC5pZ25vcmUgPSB0cnVlO1xuXHRcdFx0fSBlbHNlIGlmICh0ZW1wbGF0ZS5oYXNBdHRyaWJ1dGUoTUFSS0VSX1RBR05BTUUpKSB7XG5cdFx0XHRcdGxldCB0YWduYW1lID0gdGVtcGxhdGUuYXR0cihNQVJLRVJfVEFHTkFNRSkudHJpbSgpO1xuXHRcdFx0XHRpZiAodGFnbmFtZS5sZW5ndGggPiAwKSBjb250ZXh0LmNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGF3YWl0IHJlc29sdmVyLnJlc29sdmVUZXh0KHRlbXBsYXRlLmF0dHIoTUFSS0VSX1RBR05BTUUpKSk7XG5cdFx0XHRcdGVsc2Uge1xuXHRcdFx0XHRcdGNvbnRleHQuY29udGVudCA9IGRvY3VtZW50LmltcG9ydE5vZGUodGVtcGxhdGUsIHRydWUpO1xuXHRcdFx0XHRcdGNvbnRleHQuc3RvcCA9IHRydWU7XG5cdFx0XHRcdFx0Y29udGV4dC5pZ25vcmUgPSB0cnVlO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2UgaWYgKHRlbXBsYXRlLnRhZ05hbWUpIHtcblx0XHRcdFx0bGV0IGlzID0gdGVtcGxhdGUuYXR0cihNQVJLRVJfSVMpO1xuXHRcdFx0XHRpZiAoaXMpIHtcblx0XHRcdFx0XHRpcyA9IGF3YWl0IHJlc29sdmVyLnJlc29sdmVUZXh0KGlzKTtcblx0XHRcdFx0XHRjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0ZW1wbGF0ZS50YWdOYW1lLCB7IGlzIH0pO1xuXHRcdFx0XHRcdGVsZW1lbnQuYXR0cihNQVJLRVJfSVMsIGlzKTtcblx0XHRcdFx0XHRjb250ZXh0LmNvbnRlbnQgPSBlbGVtZW50O1xuXHRcdFx0XHR9IGVsc2UgY29udGV4dC5jb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0ZW1wbGF0ZS50YWdOYW1lKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGNvbnRleHQuY29udGVudCA9IGRvY3VtZW50LmltcG9ydE5vZGUodGVtcGxhdGUsIHRydWUpO1xuXHRcdFx0XHRjb250ZXh0LnN0b3AgPSB0cnVlO1xuXHRcdFx0XHRjb250ZXh0Lmlnbm9yZSA9IHRydWU7XG5cdFx0XHR9XG5cblx0XHRcdGlmICghY29udGV4dC5zdG9wICYmIHRlbXBsYXRlLmhhc0F0dHJpYnV0ZShNQVJLRVJfSUdOT1JFX0NISUxEUykpIHtcblx0XHRcdFx0Y29udGV4dC5pZ25vcmUgPSB0cnVlO1xuXHRcdFx0XHRjb25zdCBjbG9uZSA9IGRvY3VtZW50LmltcG9ydE5vZGUodGVtcGxhdGUsIHRydWUpO1xuXHRcdFx0XHRpZiAodGVtcGxhdGUgaW5zdGFuY2VvZiBIVE1MVGVtcGxhdGVFbGVtZW50KSBjb250ZXh0LmNvbnRlbnQuY29udGVudC5hcHBlbmQoY2xvbmUuY29udGVudCk7XG5cdFx0XHRcdGVsc2UgY29udGV4dC5jb250ZW50LmFwcGVuZChjbG9uZS5jaGlsZE5vZGVzKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gY29udGV4dDtcblx0fVxufVxuXG5EaXJlY3RpdmUuZGVmaW5lKHsgZGlyZWN0aXZlOiBuZXcgSW5pdGlhbCgpIH0pO1xuIiwiaW1wb3J0IERpcmVjdGl2ZSBmcm9tIFwiLi4vRGlyZWN0aXZlLmpzXCI7XG5pbXBvcnQgRXhwcmVzc2lvblJlc29sdmVyIGZyb20gXCJAZGVmYXVsdC1qcy9kZWZhdWx0anMtZXhwcmVzc2lvbi1sYW5ndWFnZS9zcmMvRXhwcmVzc2lvblJlc29sdmVyLmpzXCI7XG5cbmNvbnN0IE5BTUUgPSBcIm9uLWZpbmlzaGVkXCI7XG5jb25zdCBBVFRSSUJVVEVfT05fRklOSVNIRUQgPSBganN0bC0ke05BTUV9YDtcbmNvbnN0IEFUVFJJQlVURV9PTl9GSU5JU0hFRF9BU1lOQyA9IGAke0FUVFJJQlVURV9PTl9GSU5JU0hFRH0tYXN5bmNgO1xuXG5jbGFzcyBPbkZpbmlzaGVkIGV4dGVuZHMgRGlyZWN0aXZlIHtcblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0c3VwZXIoKTtcblx0fVxuXG5cdGdldCBuYW1lKCkgeyByZXR1cm4gTkFNRSB9XG5cdGdldCByYW5rKCkgeyByZXR1cm4gRGlyZWN0aXZlLk1BWF9SQU5LIH1cblx0Z2V0IHBoYXNlKCkgeyByZXR1cm4gRGlyZWN0aXZlLlBIQVNFLmZpbmlzaCB9XG5cblxuXG5cdGFzeW5jIGV4ZWN1dGUoY29udGV4dCkge1xuXHRcdGNvbnN0IHsgdGVtcGxhdGUsIGNvbnRlbnQsIHJvb3QgfSA9IGNvbnRleHQ7XG5cdFx0aWYgKCEodGVtcGxhdGUgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkgfHwgIXRlbXBsYXRlLmhhc0F0dHJpYnV0ZShBVFRSSUJVVEVfT05fRklOSVNIRUQpKVxuXHRcdFx0cmV0dXJuIGNvbnRleHQ7XG5cblx0XHRjb25zdCBleHByZXNzaW9uID0gdGVtcGxhdGUuYXR0cihBVFRSSUJVVEVfT05fRklOSVNIRUQpO1xuXHRcdGNvbnN0IGFzeW5jQ2FsbCA9IHRlbXBsYXRlLmhhc0F0dHJpYnV0ZShBVFRSSUJVVEVfT05fRklOSVNIRURfQVNZTkMpO1xuXG5cdFx0Y29uc3QgZGF0YSA9IHtcblx0XHRcdCRlbGVtZW50OiBjb250ZW50LFxuXHRcdFx0JHJvb3Q6IHJvb3QsXG5cdFx0XHQkdGVtcGxhdGU6IHRlbXBsYXRlXG5cdFx0fTtcblx0XHRjb25zdCByZXNvbHZlciA9IG5ldyBFeHByZXNzaW9uUmVzb2x2ZXIoeyBjb250ZXh0OiBkYXRhLCBuYW1lOiBcImpzdGwtZGF0YVwiLCBwYXJlbnQ6IGNvbnRleHQucmVzb2x2ZXIgfSk7XG5cblxuXHRcdGNvbnRleHQuZmluaXNoZWQoYXN5bmMgKCkgPT4ge1xuXHRcdFx0dHJ5IHtcblx0XHRcdFx0aWYoIWFzeW5jQ2FsbClcblx0XHRcdFx0XHRyZXR1cm4gcmVzb2x2ZXIucmVzb2x2ZShleHByZXNzaW9uLCBudWxsKTtcblx0XHRcdFx0XHRcblx0XHRcdFx0cmVzb2x2ZXIucmVzb2x2ZShleHByZXNzaW9uLCBudWxsKTtcblx0XHRcdH0gY2F0Y2ggKGUpIHtcblx0XHRcdFx0Y29uc29sZS5lcnJvcihlKTtcblx0XHRcdH1cblx0XHR9KTtcblxuXHRcdHJldHVybiBjb250ZXh0O1xuXHR9XG59XG5cbkRpcmVjdGl2ZS5kZWZpbmUoeyBkaXJlY3RpdmU6IG5ldyBPbkZpbmlzaGVkKCkgfSk7IiwiaW1wb3J0IERpcmVjdGl2ZSBmcm9tIFwiLi4vRGlyZWN0aXZlLmpzXCI7XG5pbXBvcnQgRXhwcmVzc2lvblJlc29sdmVyIGZyb20gXCJAZGVmYXVsdC1qcy9kZWZhdWx0anMtZXhwcmVzc2lvbi1sYW5ndWFnZS9zcmMvRXhwcmVzc2lvblJlc29sdmVyLmpzXCI7XG5cbmNvbnN0IERJUkVDVElWRU5BTUUgPSBcImpzdGwtcmVwZWF0XCI7XG5jb25zdCBJR05PUkVESVJFQ1RJVkUgPSBuZXcgU2V0KFtESVJFQ1RJVkVOQU1FXSk7XG5cbmNvbnN0IEFUVFJJQlVURSA9IHtcblx0REFUQTogYCR7RElSRUNUSVZFTkFNRX1gLFxuXHRWQVI6IGAke0RJUkVDVElWRU5BTUV9LXZhcmAsXG5cdFNUQVRVUzogYCR7RElSRUNUSVZFTkFNRX0tc3RhdHVzYCxcblx0Q09VTlQ6IGAke0RJUkVDVElWRU5BTUV9LWNvdW50YCxcblx0U1RBUlQ6IGAke0RJUkVDVElWRU5BTUV9LXN0YXJ0YCxcblx0U1RFUDogYCR7RElSRUNUSVZFTkFNRX0tc3RlcGAsXG5cdENPTkRJVElPTjogYCR7RElSRUNUSVZFTkFNRX0tY29uZGl0aW9uYCxcbn07XG5cbmNvbnN0IGRvQ291bnQgPSBhc3luYyAob3B0aW9uKSA9PiB7XG5cdGxldCB7IHN0YXJ0LCBzdGVwLCBjb3VudCwgdmFybmFtZSwgc3RhdHVzLCByZXNvbHZlciB9ID0gb3B0aW9uO1xuXHRjb3VudCA9IGF3YWl0IHJlc29sdmVyLnJlc29sdmUoY291bnQpO1xuXHRjb25zdCBsZW5ndGggPSBzdGFydCArIGNvdW50ICogc3RlcDtcblx0bGV0IHN0b3AgPSBmYWxzZTtcblx0Zm9yIChsZXQgaSA9IHN0YXJ0OyBpIDwgbGVuZ3RoICYmICFzdG9wOyBpID0gaSArIHN0ZXApIHtcblx0XHRjb25zdCBpdGVyYXRpb24gPSB7fTtcblx0XHRpdGVyYXRpb25bdmFybmFtZV0gPSBpO1xuXHRcdGl0ZXJhdGlvbltzdGF0dXNdID0ge1xuXHRcdFx0Zmlyc3Q6IGkgPT09IHN0YXJ0LFxuXHRcdFx0bGFzdDogaSA+PSBsZW5ndGggLSBzdGVwLFxuXHRcdFx0aW5kZXg6IGksXG5cdFx0XHRudW1iZXI6IGkgKyAxLFxuXHRcdFx0c3RlcCxcblx0XHRcdGNvdW50LFxuXHRcdH07XG5cdFx0c3RvcCA9ICEoYXdhaXQgaXRlcmF0ZShpdGVyYXRpb24sIG9wdGlvbikpO1xuXHR9XG59O1xuXG5jb25zdCBkb1JlcGVhdCA9IGFzeW5jIChvcHRpb24pID0+IHtcblx0bGV0IHsgZGF0YSwgc3RhcnQsIHN0ZXAsIGNvdW50LCB2YXJuYW1lLCBzdGF0dXMsIHJlc29sdmVyIH0gPSBvcHRpb247XG5cblx0ZGF0YSA9IGF3YWl0IHJlc29sdmVyLnJlc29sdmUoZGF0YSk7XG5cdGNvbnN0IGlzT2JqZWN0ID0gIShkYXRhIGluc3RhbmNlb2YgQXJyYXkpO1xuXHRsZXQgYXJyYXkgPSBkYXRhO1xuXHRpZiAoaXNPYmplY3QpIGFycmF5ID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoZGF0YSk7XG5cblx0Y291bnQgPSBjb3VudCAhPSBcIlwiID8gYXdhaXQgcmVzb2x2ZXIucmVzb2x2ZShjb3VudCwgMCkgOiBudWxsO1xuXHRjb25zdCBsZW5ndGggPSBjb3VudCA/IE1hdGgubWluKHN0YXJ0ICsgY291bnQsIGFycmF5Lmxlbmd0aCkgOiBhcnJheS5sZW5ndGg7XG5cdGxldCBzdG9wID0gZmFsc2U7XG5cdGZvciAobGV0IGkgPSBzdGFydDsgaSA8IGxlbmd0aCAmJiAhc3RvcDsgaSA9IGkgKyBzdGVwKSB7XG5cdFx0Y29uc3QgaXRlcmF0aW9uID0ge307XG5cdFx0aXRlcmF0aW9uW3Zhcm5hbWVdID0gaXNPYmplY3QgPyBkYXRhW2FycmF5W2ldXSA6IGRhdGFbaV07XG5cdFx0aXRlcmF0aW9uW3N0YXR1c10gPSB7XG5cdFx0XHRmaXJzdDogaSA9PT0gc3RhcnQsXG5cdFx0XHRsYXN0OiBpID49IGxlbmd0aCAtIHN0ZXAsXG5cdFx0XHRzdGVwLFxuXHRcdFx0aW5kZXg6IGksXG5cdFx0XHRudW1iZXI6IGkgKyAxLFxuXHRcdFx0Y291bnQ6IGxlbmd0aCxcblx0XHRcdGtleTogaXNPYmplY3QgPyBhcnJheVtpXSA6IGksXG5cdFx0XHRkYXRhXG5cdFx0fTtcblx0XHRzdG9wID0gIShhd2FpdCBpdGVyYXRlKGl0ZXJhdGlvbiwgb3B0aW9uKSk7XG5cdH1cbn07XG5cbmNvbnN0IGl0ZXJhdGUgPSBhc3luYyAoZGF0YSwgb3B0aW9uKSA9PiB7XG5cdGxldCB7IHRlbXBsYXRlLCByZXNvbHZlciwgcmVuZGVyZXIsIGNvbmRpdGlvbiwgY29udGV4dCB9ID0gb3B0aW9uO1xuXHRyZXNvbHZlciA9IG5ldyBFeHByZXNzaW9uUmVzb2x2ZXIoeyBjb250ZXh0OiBkYXRhLCBuYW1lOiBESVJFQ1RJVkVOQU1FLCBwYXJlbnQ6IHJlc29sdmVyIH0pO1xuXG5cdGNvbmRpdGlvbiA9IGNvbmRpdGlvbiA/IGF3YWl0IHJlc29sdmVyLnJlc29sdmUoY29uZGl0aW9uLCBmYWxzZSkgOiBmYWxzZTtcblx0aWYgKGNvbmRpdGlvbikgcmV0dXJuIGZhbHNlO1xuXG5cdGNvbnN0IGl0ZW1Db250ZXh0ID0gIGNvbnRleHQuc3ViQ29udGV4dCh7IHJlc29sdmVyLCB0ZW1wbGF0ZSwgbW9kZTogXCJhcHBlbmRcIiwgaWdub3JlRGlyZWN0aXZlOiBJR05PUkVESVJFQ1RJVkUgfSlcblx0YXdhaXQgcmVuZGVyZXIucmVuZGVyKGl0ZW1Db250ZXh0KTtcblx0YXdhaXQgaXRlbUNvbnRleHQucmVhZHkoKTtcblxuXHRyZXR1cm4gdHJ1ZTtcbn07XG5cbmNsYXNzIFJlcGVhdCBleHRlbmRzIERpcmVjdGl2ZSB7XG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHN1cGVyKCk7XG5cdH1cblxuXHRnZXQgbmFtZSgpIHtcblx0XHRyZXR1cm4gRElSRUNUSVZFTkFNRTtcblx0fVxuXHRnZXQgcmFuaygpIHtcblx0XHRyZXR1cm4gRGlyZWN0aXZlLk1JTl9SQU5LICsgMztcblx0fVxuXHRnZXQgcGhhc2UoKSB7XG5cdFx0cmV0dXJuIERpcmVjdGl2ZS5QSEFTRS50ZW1wbGF0ZTtcblx0fVxuXG5cdGFzeW5jIGV4ZWN1dGUoY29udGV4dCkge1xuXHRcdGlmICghKGNvbnRleHQudGVtcGxhdGUgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkgfHwgKCFjb250ZXh0LnRlbXBsYXRlLmF0dHIoQVRUUklCVVRFLkRBVEEpICYmICFjb250ZXh0LnRlbXBsYXRlLmF0dHIoQVRUUklCVVRFLkNPVU5UKSkpIHJldHVybiBjb250ZXh0O1xuXG5cdFx0dHJ5IHtcblx0XHRcdGNvbnN0IHsgdGVtcGxhdGUsIHJlc29sdmVyLCByZW5kZXJlciwgY29udGVudCwgY29udGFpbmVyIH0gPSBjb250ZXh0O1xuXHRcdFx0Y29uc3Qgb3B0aW9uID0ge1xuXHRcdFx0XHRkYXRhOiAodGVtcGxhdGUuYXR0cihBVFRSSUJVVEUuREFUQSkgfHwgXCJcIikudHJpbSgpLFxuXHRcdFx0XHRjb3VudDogKHRlbXBsYXRlLmF0dHIoQVRUUklCVVRFLkNPVU5UKSB8fCBcIlwiKS50cmltKCksXG5cdFx0XHRcdHN0YXJ0OiBhd2FpdCByZXNvbHZlci5yZXNvbHZlKHRlbXBsYXRlLmF0dHIoQVRUUklCVVRFLlNUQVJUKSB8fCBcIjBcIiksXG5cdFx0XHRcdHN0ZXA6IGF3YWl0IHJlc29sdmVyLnJlc29sdmUodGVtcGxhdGUuYXR0cihBVFRSSUJVVEUuU1RFUCkgfHwgXCIxXCIpLFxuXHRcdFx0XHR2YXJuYW1lOiAodGVtcGxhdGUuYXR0cihBVFRSSUJVVEUuVkFSKSB8fCBcIml0ZW1cIikudHJpbSgpLFxuXHRcdFx0XHRzdGF0dXM6ICh0ZW1wbGF0ZS5hdHRyKEFUVFJJQlVURS5TVEFUVVMpIHx8IFwic3RhdHVzXCIpLnRyaW0oKSxcblx0XHRcdFx0Y29uZGl0aW9uOiB0ZW1wbGF0ZS5hdHRyKEFUVFJJQlVURS5DT05ESVRJT04pLFxuXHRcdFx0XHR0ZW1wbGF0ZTogdGVtcGxhdGUsXG5cdFx0XHRcdHRhZ25hbWU6IGNvbnRlbnQudGFnTmFtZSxcblx0XHRcdFx0cmVzb2x2ZXIsXG5cdFx0XHRcdHJlbmRlcmVyLFxuXHRcdFx0XHRjb250YWluZXIsXG5cdFx0XHRcdGNvbnRleHQsXG5cdFx0XHR9O1xuXHRcdFx0aWYgKCghb3B0aW9uLmRhdGEgfHwgb3B0aW9uLmRhdGEgPT0gXCJcIikgJiYgb3B0aW9uLmNvdW50KSBhd2FpdCBkb0NvdW50KG9wdGlvbik7XG5cdFx0XHRlbHNlIGF3YWl0IGRvUmVwZWF0KG9wdGlvbik7XG5cdFx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRcdGNvbnNvbGUuZXJyb3IoXCJlcnJvciBhdCBqc3RsLXJlcGVhdDpcIiwgZXJyb3IpO1xuXHRcdH1cblxuXHRcdGNvbnRleHQuY29udGVudCA9IG51bGw7XG5cdFx0Y29udGV4dC5zdG9wID0gdHJ1ZTtcblx0XHRjb250ZXh0Lmlnbm9yZSA9IHRydWU7XG5cdFx0cmV0dXJuIGNvbnRleHQ7XG5cdH1cbn1cblxuRGlyZWN0aXZlLmRlZmluZSh7IGRpcmVjdGl2ZTogbmV3IFJlcGVhdCgpIH0pO1xuIiwiaW1wb3J0IERpcmVjdGl2ZSBmcm9tIFwiLi4vRGlyZWN0aXZlLmpzXCI7XG5cbmNvbnN0IERFRkFVTFRfT1BUSU9OID0ge1xuXHRtb2RlOiBcInRleHRcIixcblx0dW5zZWN1cmU6IGZhbHNlLFxuXHRtYXhMZW5ndGg6IDBcdFxufTtcblxuY29uc3QgU0VDVVJFX0hUTUxfRklMVEVSID0gXCJzY3JpcHQsIHN0eWxlLCBib2R5LCBodG1sLCBoZWFkLCBvYmplY3QsIGxpbmtcIjtcblxuY29uc3QgcmVhZE9wdGlvbiA9IGFzeW5jIChwYXJlbnQsIGNvbnRleHQpID0+IHtcblx0Y29uc3QgcmVzb2x2ZXIgPSBjb250ZXh0LnJlc29sdmVyO1xuXHRyZXR1cm4ge1xuXHRcdG1vZGU6IGF3YWl0IHJlc29sdmVyLnJlc29sdmVUZXh0KChwYXJlbnQuYXR0cihcImpzdGwtdGV4dC1jb250ZW50LXR5cGVcIikgfHwgXCJ0ZXh0XCIpLnRyaW0oKS50b0xvd2VyQ2FzZSgpKSxcblx0XHR1bnNlY3VyZTogcGFyZW50Lmhhc0F0dHJpYnV0ZShcImpzdGwtdGV4dC11bnNlY3VyZVwiKSxcblx0XHRtYXhMZW5ndGg6IHBhcnNlSW50KGF3YWl0IHJlc29sdmVyLnJlc29sdmVUZXh0KHBhcmVudC5hdHRyKFwianN0bC10ZXh0LXRyaW0tbGVuZ3RoXCIpIHx8IFwiMFwiKSlcblx0fTtcbn07XG5cbmNvbnN0IHRyaW1UZXh0TGVuZ3RoID0gKHRleHQsIGxlbmd0aCkgPT4ge1xuXHRyZXR1cm4gdGV4dC5sZW5ndGggPiBsZW5ndGggPyB0ZXh0LnN1YnN0cmluZygwLCBsZW5ndGggLSAzKS50cmltKCkgKyBcIi4uLlwiIDogdGV4dDtcbn07XG5cbmNvbnN0IE1PREVTID0ge1xuXHRcInRleHRcIiA6IGFzeW5jIChvcHRpb24sIGNvbnRleHQpID0+IHtcblx0XHRjb25zdCB7Y29udGVudCwgcmVzb2x2ZXIsIHRlbXBsYXRlfSA9IGNvbnRleHQ7XG5cdFx0XG5cdFx0bGV0IHRleHQgPSBhd2FpdCByZXNvbHZlci5yZXNvbHZlVGV4dCh0ZW1wbGF0ZS50ZXh0Q29udGVudCk7XHRcdFxuXHRcdHRleHQgPSBjcmVhdGUodGV4dCx0cnVlKS5jb250ZW50LnRleHRDb250ZW50O1xuXHRcdGlmKG9wdGlvbi5tYXhMZW5ndGggPiAwKVxuXHRcdFx0dGV4dCA9IHRyaW1UZXh0TGVuZ3RoKHRleHQsIG9wdGlvbi5tYXhMZW5ndGgpO1x0XHRcblx0XHRcblx0XHRjb250ZW50LnRleHRDb250ZW50ID0gdGV4dDtcdFx0XG5cdH0sXG5cdFwiaHRtbFwiOiBhc3luYyAob3B0aW9uLCBjb250ZXh0KSA9PiB7XG5cdFx0Y29uc3Qge3Jlc29sdmVyLCB0ZW1wbGF0ZX0gPSBjb250ZXh0O1xuXHRcdFxuXHRcdGxldCBjb250ZW50ID0gYXdhaXQgcmVzb2x2ZXIucmVzb2x2ZVRleHQodGVtcGxhdGUudGV4dENvbnRlbnQpO1x0XHRcblx0XHRjb250ZW50ID0gY3JlYXRlKGNvbnRlbnQsdHJ1ZSk7XHRcdFxuXHRcdGNvbnRlbnQgPSBkb2N1bWVudC5pbXBvcnROb2RlKGNvbnRlbnQuY29udGVudCwgdHJ1ZSk7XG5cdFx0XG5cdFx0aWYob3B0aW9uLnVuc2VjdXJlKVxuXHRcdFx0Y29udGV4dC5jb250ZW50ID0gY29udGVudDtcdFx0XHRcblx0XHRlbHNle1xuXHRcdFx0Y29udGVudC5maW5kKFNFQ1VSRV9IVE1MX0ZJTFRFUikucmVtb3ZlKCk7XHRcdFx0XG5cdFx0XHRjb250ZXh0LmNvbnRlbnQgPSBjb250ZW50O1xuXHRcdH1cblx0fVxufTtcblxuXG5jbGFzcyBUZXh0Q29udGVudCBleHRlbmRzIERpcmVjdGl2ZSB7XG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHN1cGVyKCk7XG5cdH1cblxuXHRnZXQgbmFtZSgpIHsgcmV0dXJuIFwidGV4dFwiIH1cblx0Z2V0IHJhbmsoKSB7IHJldHVybiBEaXJlY3RpdmUuTUlOX1JBTksgKyAxIH1cblx0Z2V0IHBoYXNlKCkgeyByZXR1cm4gRGlyZWN0aXZlLlBIQVNFLmNvbnRlbnQgfVxuXG5cblxuXHRhc3luYyBleGVjdXRlKGNvbnRleHQpIHtcblx0XHRjb25zdCB7IHRlbXBsYXRlIH0gPSBjb250ZXh0O1xuXHRcdGlmICghKHRlbXBsYXRlIGluc3RhbmNlb2YgVGV4dCkgfHwgdGVtcGxhdGUudGV4dENvbnRlbnQudHJpbSgpLmxlbmd0aCA9PSAwIHx8ICh0ZW1wbGF0ZS5wYXJlbnRFbGVtZW50ICYmIHRlbXBsYXRlLnBhcmVudEVsZW1lbnQuaGFzQXR0cmlidXRlKFwianN0bC10ZXh0LWlnbm9yZVwiKSkpXG5cdFx0XHRyZXR1cm4gY29udGV4dDtcblxuXHRcdGNvbnN0IHBhcmVudCA9IHRlbXBsYXRlLnBhcmVudEVsZW1lbnQ7XG5cdFx0Y29uc3Qgb3B0aW9uID0gcGFyZW50ID8gYXdhaXQgcmVhZE9wdGlvbihwYXJlbnQsIGNvbnRleHQpIDogREVGQVVMVF9PUFRJT047XG5cdFx0XG5cdFx0Y29uc3QgIG1vZGUgPSBNT0RFU1tvcHRpb24ubW9kZV07XG5cdFx0aWYoIW1vZGUpXG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJUZXh0IG1vZGUgXFxcIlwiKyBvcHRpb24ubW9kZSArIFwiXFxcIiBpcyB1bnN1cHBvcnRlZCFcIik7XG5cdFx0XG5cdFx0YXdhaXQgbW9kZShvcHRpb24sIGNvbnRleHQpO1xuXHRcdFxuXHRcdHJldHVybiBjb250ZXh0O1xuXHR9XG59XG5cbkRpcmVjdGl2ZS5kZWZpbmUoeyBkaXJlY3RpdmU6IG5ldyBUZXh0Q29udGVudCgpIH0pOyIsImltcG9ydCBcIi4vSW5pdGlhbC5qc1wiO1xuaW1wb3J0IFwiLi9EYXRhLmpzXCI7XG5pbXBvcnQgXCIuL0lmLmpzXCI7XG5pbXBvcnQgXCIuL0Nob29zZS5qc1wiO1xuaW1wb3J0IFwiLi9JbmNsdWRlLmpzXCI7XG5pbXBvcnQgXCIuL0ZvcmVhY2guanNcIjtcbmltcG9ydCBcIi4vUmVwZWF0LmpzXCI7XG5pbXBvcnQgXCIuL1RleHQuanNcIjtcbmltcG9ydCBcIi4vQXR0cmlidXRlcy5qc1wiO1xuaW1wb3J0IFwiLi9BdHRhY2hFbGVtZW50LmpzXCI7XG5pbXBvcnQgXCIuL09uRmluaXNoZWQuanNcIjsiLCJpbXBvcnQgRWxlbWVudCBmcm9tIFwiLi4vRGlyZWN0aXZlRWxlbWVudC5qc1wiXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlcGxhY2VFbGVtZW50IGV4dGVuZHMgRWxlbWVudHtcblx0Y29uc3RydWN0b3IoKXtcblx0XHRzdXBlcigpO1xuXHRcdFxuXHRcdHRoaXMuYXR0YWNoU2hhZG93KHttb2RlOiAnb3Blbid9KTtcblx0fVxuXHRhc3luYyBleGVjdXRlKHt0ZW1wbGF0ZSwgY29udGV4dH0pe1xuXHRcdHJldHVybiBjb250ZXh0O1xuXHR9O1x0XHRcbn1cbnRyeXtjdXN0b21FbGVtZW50cy5kZWZpbmUoXCJqc3RsLXJlcGxhY2VcIiwgUmVwbGFjZUVsZW1lbnQpO31jYXRjaChlKXt9Ly9pZ25vcmUiLCJpbXBvcnQgXCIuL1JlcGxhY2UuanNcIiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbmNvbnN0IF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0Y29uc3QgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdGNvbnN0IG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0aWYgKCEobW9kdWxlSWQgaW4gX193ZWJwYWNrX21vZHVsZXNfXykpIHtcblx0XHRkZWxldGUgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0XHRjb25zdCBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIG1vZHVsZUlkICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlci92YWx1ZSBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpOyIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgXCJAZGVmYXVsdC1qcy9kZWZhdWx0anMtZXh0ZG9tXCI7XG5pbXBvcnQgR0xPQkFMIGZyb20gXCJAZGVmYXVsdC1qcy9kZWZhdWx0anMtY29tbW9uLXV0aWxzL3NyYy9HbG9iYWwuanNcIjtcbmltcG9ydCB7VGVtcGxhdGUsIFJlbmRlcmVyLCBDb250ZXh0LCBEaXJlY3RpdmUsIERpcmVjdGl2ZUVsZW1lbnR9IGZyb20gXCIuL2luZGV4LmpzXCJcblxuR0xPQkFMLmRlZmF1bHRqcyA9IEdMT0JBTC5kZWZhdWx0anMgfHwge307XG5HTE9CQUwuZGVmYXVsdGpzLmpzdGwgPSBHTE9CQUwuZGVmYXVsdGpzLnRsID0gR0xPQkFMLmRlZmF1bHRqcy50bCB8fCB7XG5cdFZFUlNJT04gOiBcIiR7dmVyc2lvbn1cIixcblx0VGVtcGxhdGUsXG5cdFJlbmRlcmVyLFxuXHRDb250ZXh0LFxuXHREaXJlY3RpdmUsXG5cdERpcmVjdGl2ZUVsZW1lbnRcbn07XG5cbmV4cG9ydCB7VGVtcGxhdGUsIFJlbmRlcmVyLCBDb250ZXh0LCBEaXJlY3RpdmUsIERpcmVjdGl2ZUVsZW1lbnR9O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9