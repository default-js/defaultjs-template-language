/******/ var __webpack_modules__ = ({

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





/**
 * 
 * @param {Template|NodeList|Node|string} template 
 * @returns {Iterable<Node>|Node} - the template content as NodeList or Node
 */
const toTemplate = (template) => {
	if (template instanceof _Template_js__WEBPACK_IMPORTED_MODULE_2__["default"]) return template.importContent();
	else if (typeof template === "string") return create(template);
	else if (template instanceof Node) return template;
	else if (template instanceof NodeList) return template;
	else if (template instanceof HTMLCollection) return template;
	else throw new Error("Template type is not supported!");
};

let id = 0;
class Context {
	#id;
	#depth;
	#parent;
	#renderer;
	#root;
	/** @type {Iterable<Node>} */ 
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
	/**
	 * @returns {Iterable<Node>|Node} 
	 */
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
	constructor({hidden = true} = {}){
		super();
		this.hidden = hidden;
	}
	
	/**
	 * Execute the directive element.
	 * @param {import("./Context.js").default} aContext 
	 * @param {HTMLElement} aTemplate
	 * @param {import("./Renderer.js").default} aRenderer 
	 * 
	 * @returns {Promise<import("./Context.js").default>}
	 */
	async execute(aContext, aTemplate, aRenderer){
		throw new Error("execute method must be implemented!");
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

/**
 * 
 * @param {Template|string|URL|Node|NodeList|HTMLCollection} aTemplate - source of the template template 
 * @param {Renderer} aRenderer 
 * @returns {Promise<NodeList>} - the imported template content
 */
const loadTemplateContent = async (aTemplate, aRenderer) => {
	if (aTemplate) {
		aTemplate = await _Template_js__WEBPACK_IMPORTED_MODULE_2__["default"].load(aTemplate);
		return aTemplate.importContent();
	} else if (aRenderer.template) {
		return await aRenderer.template.importContent();
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

/**
 * Creates an element of the class of a custom tag, with the attributes of the tag and without its
 * children. The node itself is not an element of its class: it comes from the content of a
 * `<template>`, which has no custom element registry.
 *
 * @param {Node} aNode - a node of the template
 * @returns {DirectiveElement|null} the element, or `null` if the node is no custom tag
 */
const toDirectiveElement = (aNode) => {
	if (!(aNode instanceof Element)) return null;
	const type = customElements.get(aNode.localName);
	return type && type.prototype instanceof _DirectiveElement_js__WEBPACK_IMPORTED_MODULE_5__["default"] ? document.importNode(aNode) : null;
};

/**
 * @async
 * @param {Context} aContext 
 * @returns {Context} 
 */
const renderNode = async (aContext) => {
	try {
		const { template, renderer } = aContext;
		const directiveElement = toDirectiveElement(template);
		if (directiveElement) aContext = await directiveElement.execute(aContext, template, renderer);
		else  aContext = await executeDirectives(aContext);

		const { ignore, content } = aContext;

		if (!ignore && content) {
			const { resolver } = aContext;
			const subTemplate = aContext.template.childNodes;
			if (subTemplate && subTemplate.length > 0) {
				const containerResolver = new _default_js_defaultjs_expression_language_src_ExpressionResolver_js__WEBPACK_IMPORTED_MODULE_1__["default"]({ name: SCOPES.container, context: null, parent: resolver });
				const subContext = await renderer.render(aContext.subContext({ container: content, template: subTemplate, resolver: containerResolver, mode: "append" }));
				await subContext.ready();
			}
		}

		if (aContext.content && aContext.content.tagName && aContext.content.tagName == "JSTL") aContext.content = aContext.content.childNodes; //special case to support the old "<jstl>" tag.
	} catch (e) {
		console.error("error at render node:", e, aContext);
	}
	return aContext;
};



/**
 * @async
 * @param {Context} context 
 * @returns {Context} 
 */
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

	#template;
	#resolver;

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

		this.#template = template;
		this.#resolver = new _default_js_defaultjs_expression_language_src_ExpressionResolver_js__WEBPACK_IMPORTED_MODULE_1__["default"]({ name: SCOPES.data, context: data ? data : {}, parent: APPLICATION_SCOPE_RESOLVER });
	}

	get template() {
		return this.#template;
	}
	
	get resolver() {
		return this.#resolver;
	}

	/**
	 *  @typedef {object} RenderOptions
	 *  @property {HTMLElement} container - the container where the template is rendered
	 *  @property {object} [data] - base data, available in every rendering
	 *  @property {Template|string|URL|Node|NodeList|HTMLCollection} [template] - source of the template
	 *  @property {MODETYPES} [mode] - how to add the content to the container: "replace", "append" or "prepend"
	 *  @property {HTMLElement} [root] - the root element of the rendering, defaults to `container`
	 *  @property {HTMLElement} [target] - the target element of the rendering, defaults to `null`
	*/

	/**
	 * Renders a template into a container.
	 * 
	 * @param {RenderOptions|Context} aContext 
	 * @returns {Promise<Context>}
	 */
	async render(aContext) {
		/** @type {Context} */
		let context = null;
		const calledWithContext = aContext instanceof _Context_js__WEBPACK_IMPORTED_MODULE_3__["default"];
		if (!calledWithContext) {
			let { template = null, data = null, container, root, mode, target } = aContext;
			template = await loadTemplateContent(template, this);
			const resolver = new _default_js_defaultjs_expression_language_src_ExpressionResolver_js__WEBPACK_IMPORTED_MODULE_1__["default"]({ name: SCOPES.render, context: data, parent: this.resolver });
			context = new _Context_js__WEBPACK_IMPORTED_MODULE_3__["default"]({ resolver, renderer: this, template: template, container, root: root ? root : container, mode: mode ? mode : "replace", target });
		} else if (aContext.closed) throw new Error("calling with closed context", aContext);
		else context = aContext;

		

		const template = context.template;
		if (template instanceof Node) context = await renderNode(context);
		else context = await renderContainer(context);
		
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

	/**
	 * 
	 * @param {Document} [aDocument=document] - the document where the template is imported	
	 * @returns {NodeList} - the imported template content
	 */
	importContent(aDocument = document) {
		let imported = aDocument.importNode(this.template, true);
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
	/**
	 * Delivers no content.
	 *
	 * @param {import("../Context.js").default} aContext - the context of the tag
	 * @returns {Promise<import("../Context.js").default>} the context
	 */
	async execute(aContext){
		return aContext;
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

/******/ });
/************************************************************************/
/******/ // The module cache
/******/ const __webpack_module_cache__ = {};
/******/ 
/******/ // The require function
/******/ function __webpack_require__(moduleId) {
/******/ 	// Check if module is in cache
/******/ 	const cachedModule = __webpack_module_cache__[moduleId];
/******/ 	if (cachedModule !== undefined) {
/******/ 		return cachedModule.exports;
/******/ 	}
/******/ 	// Create a new module (and put it into the cache)
/******/ 	const module = __webpack_module_cache__[moduleId] = {
/******/ 		// no module.id needed
/******/ 		// no module.loaded needed
/******/ 		exports: {}
/******/ 	};
/******/ 
/******/ 	// Execute the module function
/******/ 	if (!(moduleId in __webpack_modules__)) {
/******/ 		delete __webpack_module_cache__[moduleId];
/******/ 		const e = new Error("Cannot find module '" + moduleId + "'");
/******/ 		e.code = 'MODULE_NOT_FOUND';
/******/ 		throw e;
/******/ 	}
/******/ 	__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 
/******/ 	// Return the exports of the module
/******/ 	return module.exports;
/******/ }
/******/ 
/************************************************************************/
/******/ /* webpack/runtime/define property getters */
/******/ // define getter/value functions for harmony exports
/******/ __webpack_require__.d = (exports, definition) => {
/******/ 	for(var key in definition) {
/******/ 		if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 			Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 		}
/******/ 	}
/******/ };
/******/ 
/******/ /* webpack/runtime/global */
/******/ __webpack_require__.g = (function() {
/******/ 	if (typeof globalThis === 'object') return globalThis;
/******/ 	try {
/******/ 		return this || new Function('return this')();
/******/ 	} catch (e) {
/******/ 		if (typeof window === 'object') return window;
/******/ 	}
/******/ })();
/******/ 
/******/ /* webpack/runtime/hasOwnProperty shorthand */
/******/ __webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop));
/******/ 
/******/ /* webpack/runtime/make namespace object */
/******/ // define __esModule on exports
/******/ __webpack_require__.r = (exports) => {
/******/ 	Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 	Object.defineProperty(exports, '__esModule', { value: true });
/******/ };
/******/ 
/************************************************************************/
let __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!******************!*\
  !*** ./index.js ***!
  \******************/
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








})();

const __webpack_exports__Context = __webpack_exports__.Context;
const __webpack_exports__Directive = __webpack_exports__.Directive;
const __webpack_exports__DirectiveElement = __webpack_exports__.DirectiveElement;
const __webpack_exports__Renderer = __webpack_exports__.Renderer;
const __webpack_exports__Template = __webpack_exports__.Template;
const __webpack_exports__toAsyncTemplateLoader = __webpack_exports__.toAsyncTemplateLoader;
export { __webpack_exports__Context as Context, __webpack_exports__Directive as Directive, __webpack_exports__DirectiveElement as DirectiveElement, __webpack_exports__Renderer as Renderer, __webpack_exports__Template as Template, __webpack_exports__toAsyncTemplateLoader as toAsyncTemplateLoader };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kdWxlLWRlZmF1bHRqcy10ZW1wbGF0ZS1sYW5ndWFnZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0E0QztBQUNvQjtBQUNoRTtBQUNBLGdEQUFNLGFBQWEsZ0RBQU07QUFDekIsZ0RBQU0sb0JBQW9CLGdEQUFNO0FBQ2hDLGNBQWMsUUFBUTtBQUN0QixjQUFjLHlFQUFVO0FBQ3hCO0FBQ0EsU0FBUyxvREFBSztBQUNkO0FBQ0E7QUFDQTtBQUNBLGdEQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0EsZ0RBQU07QUFDTjtBQUNBO0FBQ0E7QUFDQSxnREFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnREFBTTtBQUNOO0FBQ0EsdUNBQXVDLGdEQUFNO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEI7QUFDOUIsK0JBQStCO0FBQy9CO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEU7Ozs7Ozs7Ozs7Ozs7O0FDL0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ3VEO0FBQ0Y7QUFDMEI7QUFDL0U7QUFDQSxrRUFBZSxXQUFXLGdFQUFZLEVBQUUscUVBQWlCO0FBQ3pEO0FBQ0EscUVBQXFFLHFFQUFVO0FBQy9FO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDaEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUN1RDtBQUNGO0FBQ2M7QUFDbkU7QUFDQSxrRUFBZSxtQkFBbUIsZ0VBQVksRUFBRSx1RUFBbUI7QUFDbkU7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNkQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ3VEO0FBQ0Y7QUFDUTtBQUNNO0FBQ25FO0FBQ0Esa0VBQWUsU0FBUyxnRUFBWSxFQUFFLG9FQUFnQixFQUFFLHVFQUFtQixFOzs7Ozs7Ozs7Ozs7O0FDYjNFO0FBQ0E7QUFDQTtB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Ozs7Ozs7Ozs7Ozs7Ozs7U0VsQnJFO1NBQ0E7O1NBRUE7U0FDQTtTQUNBO1NBQ0E7U0FDQTtTQUNBO1NBQ0E7U0FDQTtTQUNBO1NBQ0E7U0FDQTtTQUNBO1NBQ0E7O1NBRUE7U0FDQTtTQUNBO1NBQ0E7U0FDQTtTQUNBO1NBQ0E7U0FDQTs7U0FFQTtTQUNBO1NBQ0E7Ozs7U0M1QkE7U0FDQTtTQUNBO1NBQ0E7U0FDQSx5Q0FBeUMsd0NBQXdDO1NBQ2pGO1NBQ0E7U0FDQSxFOzs7U0NQQTtTQUNBO1NBQ0E7U0FDQTtTQUNBLEdBQUc7U0FDSDtTQUNBO1NBQ0EsQ0FBQyxJOzs7U0NQRCx5Rjs7O1NDQUE7U0FDQTtTQUNBLHNEQUFzRCxpQkFBaUI7U0FDdkUsZ0RBQWdELGFBQWE7U0FDN0QsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNKa0U7QUFDekI7QUFDRjtBQUNJO0FBQ2M7O0FBRWdDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vQGRlZmF1bHQtanMvZGVmYXVsdGpzLXRlbXBsYXRlLWxhbmd1YWdlLy4vbm9kZV9tb2R1bGVzL0BkZWZhdWx0LWpzL2RlZmF1bHRqcy1leHRkb20vaW5kZXguanMiLCJ3ZWJwYWNrOi8vQGRlZmF1bHQtanMvZGVmYXVsdGpzLXRlbXBsYXRlLWxhbmd1YWdlLy4vbm9kZV9tb2R1bGVzL0BkZWZhdWx0LWpzL2RlZmF1bHRqcy1leHRkb20vc3JjL0dsb2JhbC5qcyIsIndlYnBhY2s6Ly9AZGVmYXVsdC1qcy9kZWZhdWx0anMtdGVtcGxhdGUtbGFuZ3VhZ2UvLi9ub2RlX21vZHVsZXMvQGRlZmF1bHQtanMvZGVmYXVsdGpzLWV4dGRvbS9zcmMvZG9tL0RvY3VtZW50LmpzIiwid2VicGFjazovL0BkZWZhdWx0LWpzL2RlZmF1bHRqcy10ZW1wbGF0ZS1sYW5ndWFnZS8uL25vZGVfbW9kdWxlcy9AZGVmYXVsdC1qcy9kZWZhdWx0anMtZXh0ZG9tL3NyYy9kb20vRG9jdW1lbnRGcmFnbWVudC5qcyIsIndlYnBhY2s6Ly9AZGVmYXVsdC1qcy9kZWZhdWx0anMtdGVtcGxhdGUtbGFuZ3VhZ2UvLi9ub2RlX21vZHVsZXMvQGRlZmF1bHQtanMvZGVmYXVsdGpzLWV4dGRvbS9zcmMvZG9tL0VsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vQGRlZmF1bHQtanMvZGVmYXVsdGpzLXRlbXBsYXRlLWxhbmd1YWdlLy4vbm9kZV9tb2R1bGVzL0BkZWZhdWx0LWpzL2RlZmF1bHRqcy1leHRkb20vc3JjL2RvbS9FdmVudFRhcmdldC5qcyIsIndlYnBhY2s6Ly9AZGVmYXVsdC1qcy9kZWZhdWx0anMtdGVtcGxhdGUtbGFuZ3VhZ2UvLi9ub2RlX21vZHVsZXMvQGRlZmF1bHQtanMvZGVmYXVsdGpzLWV4dGRvbS9zcmMvZG9tL0hUTUxFbGVtZW50LmpzIiwid2VicGFjazovL0BkZWZhdWx0LWpzL2RlZmF1bHRqcy10ZW1wbGF0ZS1sYW5ndWFnZS8uL25vZGVfbW9kdWxlcy9AZGVmYXVsdC1qcy9kZWZhdWx0anMtZXh0ZG9tL3NyYy9kb20vSFRNTElucHV0RWxlbWVudC5qcyIsIndlYnBhY2s6Ly9AZGVmYXVsdC1qcy9kZWZhdWx0anMtdGVtcGxhdGUtbGFuZ3VhZ2UvLi9ub2RlX21vZHVsZXMvQGRlZmF1bHQtanMvZGVmYXVsdGpzLWV4dGRvbS9zcmMvZG9tL0hUTUxTZWxlY3RFbGVtZW50LmpzIiwid2VicGFjazovL0BkZWZhdWx0LWpzL2RlZmF1bHRqcy10ZW1wbGF0ZS1sYW5ndWFnZS8uL25vZGVfbW9kdWxlcy9AZGVmYXVsdC1qcy9kZWZhdWx0anMtZXh0ZG9tL3NyYy9kb20vSFRNTFRleHRBcmVhRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9AZGVmYXVsdC1qcy9kZWZhdWx0anMtdGVtcGxhdGUtbGFuZ3VhZ2UvLi9ub2RlX21vZHVsZXMvQGRlZmF1bHQtanMvZGVmYXVsdGpzLWV4dGRvbS9zcmMvZG9tL0h0bWxDb2xsZWN0aW9uLmpzIiwid2VicGFjazovL0BkZWZhdWx0LWpzL2RlZmF1bHRqcy10ZW1wbGF0ZS1sYW5ndWFnZS8uL25vZGVfbW9kdWxlcy9AZGVmYXVsdC1qcy9kZWZhdWx0anMtZXh0ZG9tL3NyYy9kb20vTm9kZS5qcyIsIndlYnBhY2s6Ly9AZGVmYXVsdC1qcy9kZWZhdWx0anMtdGVtcGxhdGUtbGFuZ3VhZ2UvLi9ub2RlX21vZHVsZXMvQGRlZmF1bHQtanMvZGVmYXVsdGpzLWV4dGRvbS9zcmMvZG9tL05vZGVMaXN0LmpzIiwid2VicGFjazovL0BkZWZhdWx0LWpzL2RlZmF1bHRqcy10ZW1wbGF0ZS1sYW5ndWFnZS8uL25vZGVfbW9kdWxlcy9AZGVmYXVsdC1qcy9kZWZhdWx0anMtZXh0ZG9tL3NyYy9kb20vZXh0ZW50aW9ucy9BdHRyaWJ1dGVTdXBwb3J0LmpzIiwid2VicGFjazovL0BkZWZhdWx0LWpzL2RlZmF1bHRqcy10ZW1wbGF0ZS1sYW5ndWFnZS8uL25vZGVfbW9kdWxlcy9AZGVmYXVsdC1qcy9kZWZhdWx0anMtZXh0ZG9tL3NyYy9kb20vZXh0ZW50aW9ucy9EYXRhU3VwcG9ydC5qcyIsIndlYnBhY2s6Ly9AZGVmYXVsdC1qcy9kZWZhdWx0anMtdGVtcGxhdGUtbGFuZ3VhZ2UvLi9ub2RlX21vZHVsZXMvQGRlZmF1bHQtanMvZGVmYXVsdGpzLWV4dGRvbS9zcmMvZG9tL2V4dGVudGlvbnMvRXZlbnRTdXBwb3J0LmpzIiwid2VicGFjazovL0BkZWZhdWx0LWpzL2RlZmF1bHRqcy10ZW1wbGF0ZS1sYW5ndWFnZS8uL25vZGVfbW9kdWxlcy9AZGVmYXVsdC1qcy9kZWZhdWx0anMtZXh0ZG9tL3NyYy9kb20vZXh0ZW50aW9ucy9IdG1sQ2xhc3NTdXBwb3J0LmpzIiwid2VicGFjazovL0BkZWZhdWx0LWpzL2RlZmF1bHRqcy10ZW1wbGF0ZS1sYW5ndWFnZS8uL25vZGVfbW9kdWxlcy9AZGVmYXVsdC1qcy9kZWZhdWx0anMtZXh0ZG9tL3NyYy9kb20vZXh0ZW50aW9ucy9MaXN0U3VwcG9ydC5qcyIsIndlYnBhY2s6Ly9AZGVmYXVsdC1qcy9kZWZhdWx0anMtdGVtcGxhdGUtbGFuZ3VhZ2UvLi9ub2RlX21vZHVsZXMvQGRlZmF1bHQtanMvZGVmYXVsdGpzLWV4dGRvbS9zcmMvZG9tL2V4dGVudGlvbnMvTGlzdFR5cGVCdWlsZGVyLmpzIiwid2VicGFjazovL0BkZWZhdWx0LWpzL2RlZmF1bHRqcy10ZW1wbGF0ZS1sYW5ndWFnZS8uL25vZGVfbW9kdWxlcy9AZGVmYXVsdC1qcy9kZWZhdWx0anMtZXh0ZG9tL3NyYy9kb20vZXh0ZW50aW9ucy9NYW5pcHVsYXRpb25TdXBwb3J0LmpzIiwid2VicGFjazovL0BkZWZhdWx0LWpzL2RlZmF1bHRqcy10ZW1wbGF0ZS1sYW5ndWFnZS8uL25vZGVfbW9kdWxlcy9AZGVmYXVsdC1qcy9kZWZhdWx0anMtZXh0ZG9tL3NyYy9kb20vZXh0ZW50aW9ucy9RdWVyeVN1cHBvcnQuanMiLCJ3ZWJwYWNrOi8vQGRlZmF1bHQtanMvZGVmYXVsdGpzLXRlbXBsYXRlLWxhbmd1YWdlLy4vbm9kZV9tb2R1bGVzL0BkZWZhdWx0LWpzL2RlZmF1bHRqcy1leHRkb20vc3JjL2RvbS9leHRlbnRpb25zL1JlYWR5RXZlbnRTdXBwb3J0LmpzIiwid2VicGFjazovL0BkZWZhdWx0LWpzL2RlZmF1bHRqcy10ZW1wbGF0ZS1sYW5ndWFnZS8uL25vZGVfbW9kdWxlcy9AZGVmYXVsdC1qcy9kZWZhdWx0anMtZXh0ZG9tL3NyYy9kb20vZXh0ZW50aW9ucy9TaG93SGlkZVN1cHBvcnQuanMiLCJ3ZWJwYWNrOi8vQGRlZmF1bHQtanMvZGVmYXVsdGpzLXRlbXBsYXRlLWxhbmd1YWdlLy4vbm9kZV9tb2R1bGVzL0BkZWZhdWx0LWpzL2RlZmF1bHRqcy1leHRkb20vc3JjL2RvbS9leHRlbnRpb25zL1ZhbHVlU3VwcG9ydC5qcyIsIndlYnBhY2s6Ly9AZGVmYXVsdC1qcy9kZWZhdWx0anMtdGVtcGxhdGUtbGFuZ3VhZ2UvLi9ub2RlX21vZHVsZXMvQGRlZmF1bHQtanMvZGVmYXVsdGpzLWV4dGRvbS9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vQGRlZmF1bHQtanMvZGVmYXVsdGpzLXRlbXBsYXRlLWxhbmd1YWdlLy4vbm9kZV9tb2R1bGVzL0BkZWZhdWx0LWpzL2RlZmF1bHRqcy1leHRkb20vc3JjL3V0aWxzL0RlbGVnYXRlckJ1aWxkZXIuanMiLCJ3ZWJwYWNrOi8vQGRlZmF1bHQtanMvZGVmYXVsdGpzLXRlbXBsYXRlLWxhbmd1YWdlLy4vbm9kZV9tb2R1bGVzL0BkZWZhdWx0LWpzL2RlZmF1bHRqcy1leHRkb20vc3JjL3V0aWxzL0V4dGVuZFByb3RvdHlwZS5qcyIsIndlYnBhY2s6Ly9AZGVmYXVsdC1qcy9kZWZhdWx0anMtdGVtcGxhdGUtbGFuZ3VhZ2UvLi9ub2RlX21vZHVsZXMvQGRlZmF1bHQtanMvZGVmYXVsdGpzLWV4dGRvbS9zcmMvdXRpbHMvRXh0ZW5kZXIuanMiLCJ3ZWJwYWNrOi8vQGRlZmF1bHQtanMvZGVmYXVsdGpzLXRlbXBsYXRlLWxhbmd1YWdlLy4vbm9kZV9tb2R1bGVzL0BkZWZhdWx0LWpzL2RlZmF1bHRqcy1leHRkb20vc3JjL3V0aWxzL1V0aWxzLmpzIiwid2VicGFjazovL0BkZWZhdWx0LWpzL2RlZmF1bHRqcy10ZW1wbGF0ZS1sYW5ndWFnZS8uL25vZGVfbW9kdWxlcy9AZGVmYXVsdC1qcy9kZWZhdWx0anMtY29tbW9uLXV0aWxzL3NyYy9HbG9iYWwuanMiLCJ3ZWJwYWNrOi8vQGRlZmF1bHQtanMvZGVmYXVsdGpzLXRlbXBsYXRlLWxhbmd1YWdlLy4vbm9kZV9tb2R1bGVzL0BkZWZhdWx0LWpzL2RlZmF1bHRqcy1jb21tb24tdXRpbHMvc3JjL09iamVjdFByb3BlcnR5LmpzIiwid2VicGFjazovL0BkZWZhdWx0LWpzL2RlZmF1bHRqcy10ZW1wbGF0ZS1sYW5ndWFnZS8uL25vZGVfbW9kdWxlcy9AZGVmYXVsdC1qcy9kZWZhdWx0anMtY29tbW9uLXV0aWxzL3NyYy9PYmplY3RVdGlscy5qcyIsIndlYnBhY2s6Ly9AZGVmYXVsdC1qcy9kZWZhdWx0anMtdGVtcGxhdGUtbGFuZ3VhZ2UvLi9ub2RlX21vZHVsZXMvQGRlZmF1bHQtanMvZGVmYXVsdGpzLWNvbW1vbi11dGlscy9zcmMvUHJvbWlzZVV0aWxzLmpzIiwid2VicGFjazovL0BkZWZhdWx0LWpzL2RlZmF1bHRqcy10ZW1wbGF0ZS1sYW5ndWFnZS8uL25vZGVfbW9kdWxlcy9AZGVmYXVsdC1qcy9kZWZhdWx0anMtY29tbW9uLXV0aWxzL3NyYy9qYXZhc2NyaXB0L1N0cmluZy5qcyIsIndlYnBhY2s6Ly9AZGVmYXVsdC1qcy9kZWZhdWx0anMtdGVtcGxhdGUtbGFuZ3VhZ2UvLi9ub2RlX21vZHVsZXMvQGRlZmF1bHQtanMvZGVmYXVsdGpzLWV4cHJlc3Npb24tbGFuZ3VhZ2UvaW5kZXguanMiLCJ3ZWJwYWNrOi8vQGRlZmF1bHQtanMvZGVmYXVsdGpzLXRlbXBsYXRlLWxhbmd1YWdlLy4vbm9kZV9tb2R1bGVzL0BkZWZhdWx0LWpzL2RlZmF1bHRqcy1leHByZXNzaW9uLWxhbmd1YWdlL3NyYy9Db2RlQ2FjaGUuanMiLCJ3ZWJwYWNrOi8vQGRlZmF1bHQtanMvZGVmYXVsdGpzLXRlbXBsYXRlLWxhbmd1YWdlLy4vbm9kZV9tb2R1bGVzL0BkZWZhdWx0LWpzL2RlZmF1bHRqcy1leHByZXNzaW9uLWxhbmd1YWdlL3NyYy9EZWZhdWx0VmFsdWUuanMiLCJ3ZWJwYWNrOi8vQGRlZmF1bHQtanMvZGVmYXVsdGpzLXRlbXBsYXRlLWxhbmd1YWdlLy4vbm9kZV9tb2R1bGVzL0BkZWZhdWx0LWpzL2RlZmF1bHRqcy1leHByZXNzaW9uLWxhbmd1YWdlL3NyYy9FeGVjdXRlci5qcyIsIndlYnBhY2s6Ly9AZGVmYXVsdC1qcy9kZWZhdWx0anMtdGVtcGxhdGUtbGFuZ3VhZ2UvLi9ub2RlX21vZHVsZXMvQGRlZmF1bHQtanMvZGVmYXVsdGpzLWV4cHJlc3Npb24tbGFuZ3VhZ2Uvc3JjL0V4ZWN1dGVyUmVnaXN0cnkuanMiLCJ3ZWJwYWNrOi8vQGRlZmF1bHQtanMvZGVmYXVsdGpzLXRlbXBsYXRlLWxhbmd1YWdlLy4vbm9kZV9tb2R1bGVzL0BkZWZhdWx0LWpzL2RlZmF1bHRqcy1leHByZXNzaW9uLWxhbmd1YWdlL3NyYy9FeHByZXNzaW9uUmVzb2x2ZXIuanMiLCJ3ZWJwYWNrOi8vQGRlZmF1bHQtanMvZGVmYXVsdGpzLXRlbXBsYXRlLWxhbmd1YWdlLy4vbm9kZV9tb2R1bGVzL0BkZWZhdWx0LWpzL2RlZmF1bHRqcy1leHByZXNzaW9uLWxhbmd1YWdlL3NyYy9FeHByZXNzaW9uU2Nhbm5lci5qcyIsIndlYnBhY2s6Ly9AZGVmYXVsdC1qcy9kZWZhdWx0anMtdGVtcGxhdGUtbGFuZ3VhZ2UvLi9ub2RlX21vZHVsZXMvQGRlZmF1bHQtanMvZGVmYXVsdGpzLWV4cHJlc3Npb24tbGFuZ3VhZ2Uvc3JjL1Jlc29sdmVyQ29udGV4dEhhbmRsZS5qcyIsIndlYnBhY2s6Ly9AZGVmYXVsdC1qcy9kZWZhdWx0anMtdGVtcGxhdGUtbGFuZ3VhZ2UvLi9ub2RlX21vZHVsZXMvQGRlZmF1bHQtanMvZGVmYXVsdGpzLWV4cHJlc3Npb24tbGFuZ3VhZ2Uvc3JjL1V0aWxzLmpzIiwid2VicGFjazovL0BkZWZhdWx0LWpzL2RlZmF1bHRqcy10ZW1wbGF0ZS1sYW5ndWFnZS8uL25vZGVfbW9kdWxlcy9AZGVmYXVsdC1qcy9kZWZhdWx0anMtZXhwcmVzc2lvbi1sYW5ndWFnZS9zcmMvZXhlY3V0ZXIvQ29udGV4dERlY29uc3RydWN0b3JFeGVjdXRlci5qcyIsIndlYnBhY2s6Ly9AZGVmYXVsdC1qcy9kZWZhdWx0anMtdGVtcGxhdGUtbGFuZ3VhZ2UvLi9ub2RlX21vZHVsZXMvQGRlZmF1bHQtanMvZGVmYXVsdGpzLWV4cHJlc3Npb24tbGFuZ3VhZ2Uvc3JjL2V4ZWN1dGVyL0NvbnRleHRPYmplY3RFeGVjdXRlci5qcyIsIndlYnBhY2s6Ly9AZGVmYXVsdC1qcy9kZWZhdWx0anMtdGVtcGxhdGUtbGFuZ3VhZ2UvLi9ub2RlX21vZHVsZXMvQGRlZmF1bHQtanMvZGVmYXVsdGpzLWV4cHJlc3Npb24tbGFuZ3VhZ2Uvc3JjL2V4ZWN1dGVyL1dpdGhTY29wZWRFeGVjdXRlci5qcyIsIndlYnBhY2s6Ly9AZGVmYXVsdC1qcy9kZWZhdWx0anMtdGVtcGxhdGUtbGFuZ3VhZ2UvLi9ub2RlX21vZHVsZXMvQGRlZmF1bHQtanMvZGVmYXVsdGpzLWV4cHJlc3Npb24tbGFuZ3VhZ2Uvc3JjL2V4ZWN1dGVyL2luZGV4LmpzIiwid2VicGFjazovL0BkZWZhdWx0LWpzL2RlZmF1bHRqcy10ZW1wbGF0ZS1sYW5ndWFnZS8uL3NyYy9Db250ZXh0LmpzIiwid2VicGFjazovL0BkZWZhdWx0LWpzL2RlZmF1bHRqcy10ZW1wbGF0ZS1sYW5ndWFnZS8uL3NyYy9EaXJlY3RpdmUuanMiLCJ3ZWJwYWNrOi8vQGRlZmF1bHQtanMvZGVmYXVsdGpzLXRlbXBsYXRlLWxhbmd1YWdlLy4vc3JjL0RpcmVjdGl2ZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vQGRlZmF1bHQtanMvZGVmYXVsdGpzLXRlbXBsYXRlLWxhbmd1YWdlLy4vc3JjL1JlbmRlcmVyLmpzIiwid2VicGFjazovL0BkZWZhdWx0LWpzL2RlZmF1bHRqcy10ZW1wbGF0ZS1sYW5ndWFnZS8uL3NyYy9UZW1wbGF0ZS5qcyIsIndlYnBhY2s6Ly9AZGVmYXVsdC1qcy9kZWZhdWx0anMtdGVtcGxhdGUtbGFuZ3VhZ2UvLi9zcmMvVXRpbHMuanMiLCJ3ZWJwYWNrOi8vQGRlZmF1bHQtanMvZGVmYXVsdGpzLXRlbXBsYXRlLWxhbmd1YWdlLy4vc3JjL2RpcmVjdGl2ZXMvQXR0YWNoRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9AZGVmYXVsdC1qcy9kZWZhdWx0anMtdGVtcGxhdGUtbGFuZ3VhZ2UvLi9zcmMvZGlyZWN0aXZlcy9BdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL0BkZWZhdWx0LWpzL2RlZmF1bHRqcy10ZW1wbGF0ZS1sYW5ndWFnZS8uL3NyYy9kaXJlY3RpdmVzL0Nob29zZS5qcyIsIndlYnBhY2s6Ly9AZGVmYXVsdC1qcy9kZWZhdWx0anMtdGVtcGxhdGUtbGFuZ3VhZ2UvLi9zcmMvZGlyZWN0aXZlcy9EYXRhLmpzIiwid2VicGFjazovL0BkZWZhdWx0LWpzL2RlZmF1bHRqcy10ZW1wbGF0ZS1sYW5ndWFnZS8uL3NyYy9kaXJlY3RpdmVzL0ZvcmVhY2guanMiLCJ3ZWJwYWNrOi8vQGRlZmF1bHQtanMvZGVmYXVsdGpzLXRlbXBsYXRlLWxhbmd1YWdlLy4vc3JjL2RpcmVjdGl2ZXMvSWYuanMiLCJ3ZWJwYWNrOi8vQGRlZmF1bHQtanMvZGVmYXVsdGpzLXRlbXBsYXRlLWxhbmd1YWdlLy4vc3JjL2RpcmVjdGl2ZXMvSW5jbHVkZS5qcyIsIndlYnBhY2s6Ly9AZGVmYXVsdC1qcy9kZWZhdWx0anMtdGVtcGxhdGUtbGFuZ3VhZ2UvLi9zcmMvZGlyZWN0aXZlcy9Jbml0aWFsLmpzIiwid2VicGFjazovL0BkZWZhdWx0LWpzL2RlZmF1bHRqcy10ZW1wbGF0ZS1sYW5ndWFnZS8uL3NyYy9kaXJlY3RpdmVzL09uRmluaXNoZWQuanMiLCJ3ZWJwYWNrOi8vQGRlZmF1bHQtanMvZGVmYXVsdGpzLXRlbXBsYXRlLWxhbmd1YWdlLy4vc3JjL2RpcmVjdGl2ZXMvUmVwZWF0LmpzIiwid2VicGFjazovL0BkZWZhdWx0LWpzL2RlZmF1bHRqcy10ZW1wbGF0ZS1sYW5ndWFnZS8uL3NyYy9kaXJlY3RpdmVzL1RleHQuanMiLCJ3ZWJwYWNrOi8vQGRlZmF1bHQtanMvZGVmYXVsdGpzLXRlbXBsYXRlLWxhbmd1YWdlLy4vc3JjL2RpcmVjdGl2ZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vQGRlZmF1bHQtanMvZGVmYXVsdGpzLXRlbXBsYXRlLWxhbmd1YWdlLy4vc3JjL2VsZW1lbnRzL1JlcGxhY2UuanMiLCJ3ZWJwYWNrOi8vQGRlZmF1bHQtanMvZGVmYXVsdGpzLXRlbXBsYXRlLWxhbmd1YWdlLy4vc3JjL2VsZW1lbnRzL2luZGV4LmpzIiwid2VicGFjazovL0BkZWZhdWx0LWpzL2RlZmF1bHRqcy10ZW1wbGF0ZS1sYW5ndWFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9AZGVmYXVsdC1qcy9kZWZhdWx0anMtdGVtcGxhdGUtbGFuZ3VhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL0BkZWZhdWx0LWpzL2RlZmF1bHRqcy10ZW1wbGF0ZS1sYW5ndWFnZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL0BkZWZhdWx0LWpzL2RlZmF1bHRqcy10ZW1wbGF0ZS1sYW5ndWFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL0BkZWZhdWx0LWpzL2RlZmF1bHRqcy10ZW1wbGF0ZS1sYW5ndWFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL0BkZWZhdWx0LWpzL2RlZmF1bHRqcy10ZW1wbGF0ZS1sYW5ndWFnZS8uL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcIi4vc3JjXCI7IiwiaW1wb3J0IFV0aWxzLCB7R0xPQkFMfSBmcm9tIFwiLi91dGlscy9VdGlsc1wiO1xyXG5pbXBvcnQgeyBSRUFEWUVWRU5UIH0gZnJvbSBcIi4vZG9tL2V4dGVudGlvbnMvUmVhZHlFdmVudFN1cHBvcnRcIjtcclxuXHJcbkdMT0JBTC5kZWZhdWx0anMgPSBHTE9CQUwuZGVmYXVsdGpzIHx8IHt9O1xyXG5HTE9CQUwuZGVmYXVsdGpzLmV4dGRvbSA9IEdMT0JBTC5kZWZhdWx0anMuZXh0ZG9tIHx8IHtcclxuXHRWRVJTSU9OIDogXCIke3ZlcnNpb259XCIsXHJcblx0UkVBRFlFVkVOVCA6IFJFQURZRVZFTlQsXHJcblx0dXRpbHMgOiB7XHJcblx0XHRVdGlsczogVXRpbHNcclxuXHR9XHJcbn07XHJcblxyXG5HTE9CQUwuZmluZCA9IGZ1bmN0aW9uKCkge1xyXG5cdHJldHVybiBkb2N1bWVudC5maW5kLmFwcGx5KGRvY3VtZW50LCBhcmd1bWVudHMpO1xyXG59O1xyXG5cclxuR0xPQkFMLnJlYWR5ID0gZnVuY3Rpb24oKSB7XHJcblx0cmV0dXJuIGRvY3VtZW50LnJlYWR5LmFwcGx5KGRvY3VtZW50LCBhcmd1bWVudHMpO1xyXG59O1xyXG5cclxuR0xPQkFMLmNyZWF0ZSA9IGZ1bmN0aW9uKGFDb250ZW50LCBhc1RlbXBsYXRlKSB7XHJcblx0aWYgKHR5cGVvZiBhcmd1bWVudHNbMF0gIT09IFwic3RyaW5nXCIpXHJcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJUaGUgZmlyc3QgYXJndW1lbnQgbXVzdCBiZSBhIHN0cmluZyFcIik7XHJcblx0XHJcblx0Y29uc3QgdGVtcGxhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGVtcGxhdGVcIik7XHJcblx0dGVtcGxhdGUuaW5uZXJIVE1MID0gYUNvbnRlbnQ7XHJcblx0aWYoYXNUZW1wbGF0ZSlcclxuXHRcdHJldHVybiB0ZW1wbGF0ZTtcclxuXHRcclxuXHRyZXR1cm4gZG9jdW1lbnQuaW1wb3J0Tm9kZSh0ZW1wbGF0ZS5jb250ZW50LCB0cnVlKS5jaGlsZE5vZGVzO1xyXG59O1xyXG5cclxuR0xPQkFMLnNjcmlwdCA9IGZ1bmN0aW9uKGFGaWxlLCBhVGFyZ2V0KSB7XHJcblx0aWYoYUZpbGUgaW5zdGFuY2VvZiBBcnJheSlcclxuXHRcdHJldHVybiBQcm9taXNlLmFsbChhRmlsZS5tYXAoZmlsZSA9PiBHTE9CQUwuc2NyaXB0KGZpbGUsIGFUYXJnZXQpKSk7XHJcblx0XHJcblx0aWYodHlwZW9mIGFGaWxlID09PSBcInN0cmluZ1wiKVx0XHJcblx0XHRyZXR1cm4gbmV3IFByb21pc2UoKHIsZSkgPT4ge1xyXG5cdFx0XHRjb25zdCBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpO1xyXG5cdFx0XHRzY3JpcHQuYXN5bmMgPSB0cnVlO1xyXG5cdFx0XHRzY3JpcHQub25sb2FkID0gZnVuY3Rpb24oKXtyKCl9O1xyXG5cdFx0XHRzY3JpcHQub25lcnJvciA9IGZ1bmN0aW9uKCl7dGhyb3cgbmV3IEVycm9yKFwibG9hZCBlcnJvciFcIil9O1xyXG5cdFx0XHQhYVRhcmdldCA/IGRvY3VtZW50LmJvZHkuYXBwZW5kKHNjcmlwdCkgOiBhVGFyZ2V0LmFwcGVuZChzY3JpcHQpO1xyXG5cdFx0XHRzY3JpcHQuc3JjID0gYUZpbGU7XHJcblx0XHR9KTtcclxuXHRlbHNlXHJcblx0XHRyZXR1cm4gUHJvbWlzZS5yZWplY3QoXCJGaXJzdCBwYXJhbWV0ZXIgbXVzdCBiZSBhbiBhcnJheSBvZiBzdHJpbmdzIG9yIGEgc3RyaW5nIVwiKTtcclxufTsiLCIvKipcclxuICogQWRkcyBxdWVyeSBhbmQgcmVhZHkgZnVuY3Rpb25zIHRvIERvY3VtZW50LCBhbmQgdHJpZ2dlcnMgdGhlIHJlYWR5IGV2ZW50LlxyXG4gKlxyXG4gKiBUaGUgZXZlbnQgaXMgdHJpZ2dlcmVkIG9uY2UgdGhlIGRvbSBpcyBwYXJzZWQuIEEgcmVhZHkgZnVuY3Rpb24gcmVnaXN0ZXJlZFxyXG4gKiBhZnRlciB0aGF0IGlzIG5vdCBsb3N0LCBhcyByZWFkeSgpIHRyaWdnZXJzIHRoZSBldmVudCBhZ2FpbiB3aGVuIHRoZSBkb2N1bWVudFxyXG4gKiBpcyBhbHJlYWR5IGNvbXBsZXRlLlxyXG4gKi9cclxuaW1wb3J0IGV4dGVuZFByb3RvdHlwZSBmcm9tIFwiLi4vdXRpbHMvRXh0ZW5kUHJvdG90eXBlXCI7XHJcbmltcG9ydCBRdWVyeVN1cHBvcnQgZnJvbSBcIi4vZXh0ZW50aW9ucy9RdWVyeVN1cHBvcnRcIjtcclxuaW1wb3J0IFJlYWR5RXZlbnRTdXBwb3J0LCB7IFJFQURZRVZFTlQgfSBmcm9tIFwiLi9leHRlbnRpb25zL1JlYWR5RXZlbnRTdXBwb3J0XCI7XHJcblxyXG5leHRlbmRQcm90b3R5cGUoRG9jdW1lbnQsIFF1ZXJ5U3VwcG9ydCwgUmVhZHlFdmVudFN1cHBvcnQpO1xyXG5cclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4gZG9jdW1lbnQudHJpZ2dlcihSRUFEWUVWRU5UKSk7XHJcblxyXG5cclxuXHJcbiIsIi8qKlxyXG4gKiBBZGRzIHF1ZXJ5IGFuZCBjb250ZW50IGZ1bmN0aW9ucyB0byBEb2N1bWVudEZyYWdtZW50LlxyXG4gKlxyXG4gKiBBIFNoYWRvd1Jvb3QgaXMgYSBEb2N1bWVudEZyYWdtZW50LCBzbyBhIHNoYWRvdyByb290IGNhbiBiZSBzZWFyY2hlZCBhbmQgZmlsbGVkXHJcbiAqIHRoZSBzYW1lIHdheSBhcyB0aGUgZnJhZ21lbnQgY3JlYXRlKCkgcmV0dXJucy5cclxuICovXHJcbmltcG9ydCBleHRlbmRQcm90b3R5cGUgZnJvbSBcIi4uL3V0aWxzL0V4dGVuZFByb3RvdHlwZVwiO1xyXG5pbXBvcnQgUXVlcnlTdXBwb3J0IGZyb20gXCIuL2V4dGVudGlvbnMvUXVlcnlTdXBwb3J0XCI7XHJcbmltcG9ydCBNYW5pcHVsYXRpb25TdXBwb3J0IGZyb20gXCIuL2V4dGVudGlvbnMvTWFuaXB1bGF0aW9uU3VwcG9ydFwiO1xyXG5cclxuZXh0ZW5kUHJvdG90eXBlKERvY3VtZW50RnJhZ21lbnQsIFF1ZXJ5U3VwcG9ydCwgTWFuaXB1bGF0aW9uU3VwcG9ydCk7XHJcblxyXG5cclxuXHJcblxyXG4iLCIvKipcclxuICogQWRkcyBxdWVyeSwgYXR0cmlidXRlIGFuZCBjb250ZW50IGZ1bmN0aW9ucyB0byBFbGVtZW50LlxyXG4gKlxyXG4gKiBRdWVyeSBhbmQgYXR0cmlidXRlIGZ1bmN0aW9ucyBuZWVkIGEgc2VsZWN0YWJsZSBub2RlLCB3aGljaCBpcyB3aHkgdGhleSBzaXRcclxuICogaGVyZSBhbmQgbm90IG9uIE5vZGUuIE1hbmlwdWxhdGlvblN1cHBvcnQgaXMgYXBwbGllZCBhZ2FpbiBhbHRob3VnaCBFbGVtZW50XHJcbiAqIGluaGVyaXRzIGl0IGZyb20gTm9kZSAtIHRoYXQgcHV0cyB0aGUgZnVuY3Rpb25zIG9uIEVsZW1lbnQgYXMgb3duIHByb3BlcnRpZXMsXHJcbiAqIHdoZXJlIHRoZSBleHRlbnNpb25zIG9mIHRoZSBtb3JlIHNwZWNpZmljIGh0bWwgdHlwZXMgY2FuIGZpbmQgdGhlbS5cclxuICovXHJcbmltcG9ydCBleHRlbmRQcm90b3R5cGUgZnJvbSBcIi4uL3V0aWxzL0V4dGVuZFByb3RvdHlwZVwiO1xyXG5pbXBvcnQgUXVlcnlTdXBwb3J0IGZyb20gXCIuL2V4dGVudGlvbnMvUXVlcnlTdXBwb3J0XCI7XHJcbmltcG9ydCBBdHRyaWJ1dGVTdXBwb3J0IGZyb20gXCIuL2V4dGVudGlvbnMvQXR0cmlidXRlU3VwcG9ydFwiO1xyXG5pbXBvcnQgTWFuaXB1bGF0aW9uU3VwcG9ydCBmcm9tIFwiLi9leHRlbnRpb25zL01hbmlwdWxhdGlvblN1cHBvcnRcIjtcclxuXHJcbmV4dGVuZFByb3RvdHlwZShFbGVtZW50LFF1ZXJ5U3VwcG9ydCwgQXR0cmlidXRlU3VwcG9ydCwgTWFuaXB1bGF0aW9uU3VwcG9ydCk7IiwiLyoqXG4gKiBBZGRzIHRoZSBldmVudCBmdW5jdGlvbnMgdG8gRXZlbnRUYXJnZXQuXG4gKlxuICogRXZlbnRUYXJnZXQgaXMgdGhlIHJvb3Qgb2YgZXZlcnl0aGluZyBkaXNwYXRjaGluZyBldmVudHMsIG5vdCBvbmx5IG9mIHRoZSBkb20sXG4gKiBzbyBvbigpLCByZW1vdmVPbigpIGFuZCB0cmlnZ2VyKCkgYXJlIGF2YWlsYWJsZSBvbiBldmVyeSBub2RlLCBvbiB0aGUgZG9jdW1lbnRcbiAqIGFuZCBvbiB0aGUgd2luZG93IGFsaWtlLlxuICovXG5pbXBvcnQgZXh0ZW5kUHJvdG90eXBlIGZyb20gXCIuLi91dGlscy9FeHRlbmRQcm90b3R5cGVcIjtcbmltcG9ydCBFdmVudFN1cHBvcnQgZnJvbSBcIi4vZXh0ZW50aW9ucy9FdmVudFN1cHBvcnRcIjtcblxuZXh0ZW5kUHJvdG90eXBlKEV2ZW50VGFyZ2V0LCBFdmVudFN1cHBvcnQpOyIsIi8qKlxyXG4gKiBBZGRzIGNsYXNzIGFuZCB2aXNpYmlsaXR5IGZ1bmN0aW9ucyB0byBIVE1MRWxlbWVudC5cclxuICpcclxuICogQm90aCB3b3JrIG9uIHRoZSBzdHlsZSBhbmQgdGhlIGNsYXNzTGlzdCBvZiBhIGh0bWwgZWxlbWVudCwgd2hpY2ggaXMgd2h5IHRoZXlcclxuICogc2l0IGhlcmUgYW5kIG5vdCBvbiBFbGVtZW50IC0gYW4gc3ZnIGVsZW1lbnQgaGFzIG5laXRoZXIgaW4gdGhlIHNhbWUgd2F5LlxyXG4gKi9cclxuaW1wb3J0IGV4dGVuZFByb3RvdHlwZSBmcm9tIFwiLi4vdXRpbHMvRXh0ZW5kUHJvdG90eXBlXCI7XHJcbmltcG9ydCBIdG1sQ2xhc3NTdXBwb3J0IGZyb20gXCIuL2V4dGVudGlvbnMvSHRtbENsYXNzU3VwcG9ydFwiO1xyXG5pbXBvcnQgU2hvd0hpZGVTdXBwb3J0IGZyb20gXCIuL2V4dGVudGlvbnMvU2hvd0hpZGVTdXBwb3J0XCI7XHJcblxyXG5cclxuZXh0ZW5kUHJvdG90eXBlKEhUTUxFbGVtZW50LCBIdG1sQ2xhc3NTdXBwb3J0LCBTaG93SGlkZVN1cHBvcnQpOyIsIi8qKlxyXG4gKiBBZGRzIHZhbCgpIHRvIEhUTUxJbnB1dEVsZW1lbnQuXHJcbiAqXHJcbiAqIFZhbHVlU3VwcG9ydCBwaWNrcyB0aGUgaGFuZGxpbmcgYnkgdGhlIHR5cGUgb2YgdGhlIGlucHV0LCBzbyBhIGNoZWNrYm94IGFuZCBhXHJcbiAqIHJhZGlvIGFyZSByZWFkIGJ5IHRoZWlyIGNoZWNrZWQgc3RhdGUgd2hpbGUgZXZlcnkgb3RoZXIgaW5wdXQgaXMgcmVhZCBieSBpdHNcclxuICogdmFsdWUuXHJcbiAqL1xyXG5pbXBvcnQgZXh0ZW5kUHJvdG90eXBlIGZyb20gXCIuLi91dGlscy9FeHRlbmRQcm90b3R5cGVcIjtcclxuaW1wb3J0IFZhbHVlU3VwcG9ydCBmcm9tIFwiLi9leHRlbnRpb25zL1ZhbHVlU3VwcG9ydFwiO1xyXG5cclxuXHJcbmV4dGVuZFByb3RvdHlwZShIVE1MSW5wdXRFbGVtZW50LFZhbHVlU3VwcG9ydCk7IiwiLyoqXHJcbiAqIEFkZHMgdmFsKCkgdG8gSFRNTFNlbGVjdEVsZW1lbnQuXHJcbiAqXHJcbiAqIFZhbHVlU3VwcG9ydCByZWFkcyBhIHNlbGVjdCBieSBpdHMgc2VsZWN0ZWQgb3B0aW9ucywgc28gdmFsKCkgZ2l2ZXMgYW4gYXJyYXkgb2ZcclxuICogdGhlaXIgdmFsdWVzIGFuZCB0YWtlcyBvbmUgdG8gc2VsZWN0IHRoZW0gYWdhaW4uXHJcbiAqL1xyXG5pbXBvcnQgZXh0ZW5kUHJvdG90eXBlIGZyb20gXCIuLi91dGlscy9FeHRlbmRQcm90b3R5cGVcIjtcclxuaW1wb3J0IFZhbHVlU3VwcG9ydCBmcm9tIFwiLi9leHRlbnRpb25zL1ZhbHVlU3VwcG9ydFwiO1xyXG5cclxuXHJcbmV4dGVuZFByb3RvdHlwZShIVE1MU2VsZWN0RWxlbWVudCxWYWx1ZVN1cHBvcnQpOyIsIi8qKlxyXG4gKiBBZGRzIHZhbCgpIHRvIEhUTUxUZXh0QXJlYUVsZW1lbnQuXHJcbiAqXHJcbiAqIEEgdGV4dGFyZWEgbWF0Y2hlcyBub25lIG9mIHRoZSBzcGVjaWFsIGlucHV0IHR5cGVzLCBzbyBWYWx1ZVN1cHBvcnQgZmFsbHMgYmFja1xyXG4gKiB0byByZWFkaW5nIGFuZCB3cml0aW5nIGl0cyB2YWx1ZSAtIGFuZCB0cmlnZ2VycyBhbiBpbnB1dCBldmVudCB3aGVuIGl0IGlzIHNldCxcclxuICogdGhlIHNhbWUgYXMgYW55IG90aGVyIGZpZWxkLlxyXG4gKi9cclxuaW1wb3J0IGV4dGVuZFByb3RvdHlwZSBmcm9tIFwiLi4vdXRpbHMvRXh0ZW5kUHJvdG90eXBlXCI7XHJcbmltcG9ydCBWYWx1ZVN1cHBvcnQgZnJvbSBcIi4vZXh0ZW50aW9ucy9WYWx1ZVN1cHBvcnRcIjtcclxuXHJcblxyXG5leHRlbmRQcm90b3R5cGUoSFRNTFRleHRBcmVhRWxlbWVudCwgVmFsdWVTdXBwb3J0KTtcclxuIiwiLyoqXG4gKiBCdWlsZHMgSFRNTENvbGxlY3Rpb24gYXMgYSBsaXN0IG9mIGh0bWwgZWxlbWVudHMuXG4gKlxuICogU2FtZSBhcyBOb2RlTGlzdCwgb25seSBob2xkaW5nIGh0bWwgZWxlbWVudHMgLSBhIGxpdmUgY29sbGVjdGlvbiBsaWtlIGNoaWxkcmVuXG4gKiB0aGVyZWZvcmUga2VlcHMgaXRzIHR5cGUgd2hlbiBpdCBpcyBmaWx0ZXJlZC5cbiAqL1xuaW1wb3J0IGJ1aWxkTGlzdFR5cGUgZnJvbSBcIi4vZXh0ZW50aW9ucy9MaXN0VHlwZUJ1aWxkZXJcIjtcblxuYnVpbGRMaXN0VHlwZShIVE1MQ29sbGVjdGlvbiwgSFRNTEVsZW1lbnQpO1xuIiwiLyoqXHJcbiAqIEFkZHMgZGF0YSBhbmQgY29udGVudCBmdW5jdGlvbnMgdG8gTm9kZS5cclxuICpcclxuICogTm9kZSBpcyB0aGUgY29tbW9uIGJhc2Ugb2YgZWxlbWVudHMsIHRleHQgbm9kZXMgYW5kIGZyYWdtZW50cywgc28gZGF0YSgpIGFuZFxyXG4gKiB0aGUgaW5zZXJ0IGZ1bmN0aW9ucyB3b3JrIG9uIGFsbCBvZiB0aGVtLCBub3Qgb25seSBvbiBlbGVtZW50cy5cclxuICovXHJcbmltcG9ydCBleHRlbmRQcm90b3R5cGUgZnJvbSBcIi4uL3V0aWxzL0V4dGVuZFByb3RvdHlwZVwiO1xyXG5pbXBvcnQgRGF0YVN1cHBvcnQgZnJvbSBcIi4vZXh0ZW50aW9ucy9EYXRhU3VwcG9ydFwiO1xyXG5pbXBvcnQgTWFuaXB1bGF0aW9uU3VwcG9ydCBmcm9tIFwiLi9leHRlbnRpb25zL01hbmlwdWxhdGlvblN1cHBvcnRcIjtcclxuXHJcbmV4dGVuZFByb3RvdHlwZShOb2RlLERhdGFTdXBwb3J0LE1hbmlwdWxhdGlvblN1cHBvcnQpOyIsIi8qKlxuICogQnVpbGRzIE5vZGVMaXN0IGFzIGEgbGlzdCBvZiBub2Rlcy5cbiAqXG4gKiBCZXNpZGVzIHRoZSBsaXN0IGZ1bmN0aW9ucyB0aGlzIGdpdmVzIGEgTm9kZUxpc3QgZXZlcnkgZnVuY3Rpb24gb2YgYSBub2RlLCBieVxuICogZGVsZWdhdGlvbiAtIGNhbGxpbmcgb25lIGFwcGxpZXMgaXQgdG8gZWFjaCBub2RlIGFuZCBjb2xsZWN0cyB0aGUgcmVzdWx0cy5cbiAqL1xuaW1wb3J0IGJ1aWxkTGlzdFR5cGUgZnJvbSBcIi4vZXh0ZW50aW9ucy9MaXN0VHlwZUJ1aWxkZXJcIjtcblxuYnVpbGRMaXN0VHlwZShOb2RlTGlzdCwgTm9kZSk7XG4iLCJpbXBvcnQgRXh0ZW5kZXIgZnJvbSBcIi4uLy4uL3V0aWxzL0V4dGVuZGVyXCI7XHJcblxyXG5jb25zdCBzdXBwb3J0ID0gRXh0ZW5kZXIoXCJBdHRyaWJ1dGVTdXBwb3J0XCIsIChQcm90b3R5cGUpID0+IHtcclxuXHQvKipcclxuXHQgKiBHZXRzIG9yIHNldHMgYXR0cmlidXRlcyBvZiB0aGlzIGVsZW1lbnQuXHJcblx0ICpcclxuXHQgKiBhdHRyKCkgcmV0dXJucyBhbGwgYXR0cmlidXRlcyBhcyBhbiBvYmplY3QsIGF0dHIobmFtZSkgdGhlIHZhbHVlIG9mIGEgc2luZ2xlXHJcblx0ICogb25lLiBXaXRoIGEgc2Vjb25kIGFyZ3VtZW50IHRoZSBhdHRyaWJ1dGUgaXMgc2V0LCB3aXRoIG51bGwgb3IgdW5kZWZpbmVkIGl0XHJcblx0ICogZ2V0cyByZW1vdmVkLlxyXG5cdCAqXHJcblx0ICogVmFsdWVzIGFyZSBzdHJpbmdpZmllZCBieSBzZXRBdHRyaWJ1dGUsIHNvIGF0dHIobmFtZSwgMCkgc2V0cyBcIjBcIi4gT25seSBudWxsXHJcblx0ICogYW5kIHVuZGVmaW5lZCByZW1vdmUgYW4gYXR0cmlidXRlIC0gMCwgZmFsc2UgYW5kIFwiXCIgYXJlIHJlZ3VsYXIgdmFsdWVzLlxyXG5cdCAqXHJcblx0ICogQHBhcmFtIHtzdHJpbmd9IFthTmFtZV0gLSB0aGUgYXR0cmlidXRlIG5hbWVcclxuXHQgKiBAcGFyYW0geyp9IFthVmFsdWVdIC0gdGhlIG5ldyB2YWx1ZSwgbnVsbCBvciB1bmRlZmluZWQgcmVtb3ZlcyB0aGUgYXR0cmlidXRlXHJcblx0ICogQHJldHVybnMge09iamVjdDxzdHJpbmcsc3RyaW5nPnxzdHJpbmd8RWxlbWVudH0gYWxsIGF0dHJpYnV0ZXMsIHRoZSB2YWx1ZSBvZiB0aGUgcmVxdWVzdGVkIGF0dHJpYnV0ZSAobnVsbCB3aGVuIGl0IGRvZXMgbm90IGV4aXN0KSwgb3IgdGhpcyB3aGVuIGFuIGF0dHJpYnV0ZSB3YXMgc2V0IG9yIHJlbW92ZWRcclxuXHQgKi9cclxuXHRQcm90b3R5cGUuYXR0ciA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdGlmIChhcmd1bWVudHMubGVuZ3RoID09IDApIHtcclxuXHRcdFx0Y29uc3QgcmVzdWx0ID0ge307XHJcblx0XHRcdHRoaXMuZ2V0QXR0cmlidXRlTmFtZXMoKS5mb3JFYWNoKChuYW1lKSA9PiB7XHJcblx0XHRcdFx0cmVzdWx0W25hbWVdID0gdGhpcy5nZXRBdHRyaWJ1dGUobmFtZSk7XHJcblx0XHRcdH0pO1xyXG5cdFx0XHRyZXR1cm4gcmVzdWx0O1xyXG5cdFx0fSBlbHNlIGlmIChhcmd1bWVudHMubGVuZ3RoID09IDEpIHJldHVybiB0aGlzLmdldEF0dHJpYnV0ZShhcmd1bWVudHNbMF0pO1xyXG5cdFx0ZWxzZSBpZiAoYXJndW1lbnRzWzFdID09IG51bGwpIHRoaXMucmVtb3ZlQXR0cmlidXRlKGFyZ3VtZW50c1swXSk7XHJcblx0XHRlbHNlIHRoaXMuc2V0QXR0cmlidXRlKGFyZ3VtZW50c1swXSwgYXJndW1lbnRzWzFdKTtcclxuXHJcblx0XHRyZXR1cm4gdGhpcztcclxuXHR9O1xyXG59KTtcclxuZXhwb3J0IGRlZmF1bHQgc3VwcG9ydDtcclxuIiwiaW1wb3J0IEV4dGVuZGVyIGZyb20gXCIuLi8uLi91dGlscy9FeHRlbmRlclwiO1xyXG5jb25zdCBzdXBwb3J0ID0gRXh0ZW5kZXIoXCJEYXRhU3VwcG9ydFwiLCBQcm90b3R5cGUgPT4ge1xyXG5cclxuXHQvKipcclxuXHQgKiBSZWFkcyBhbGwgZGF0YS0gYXR0cmlidXRlcyBvZiBhIG5vZGUgaW50byBhIHBsYWluIG9iamVjdC5cclxuXHQgKlxyXG5cdCAqIEBwYXJhbSB7Tm9kZX0gZWxlbWVudFxyXG5cdCAqIEByZXR1cm5zIHtPYmplY3Q8c3RyaW5nLHN0cmluZz59IHRoZSBkYXRhc2V0IG9mIHRoZSBub2RlLCBlbXB0eSB3aGVuIGl0IGhhcyBub25lXHJcblx0ICovXHJcblx0Y29uc3QgbG9hZERhdGEgPSAoZWxlbWVudCkgPT4ge1xyXG5cdFx0Y29uc3QgZGF0YSA9IHt9O1xyXG5cdFx0aWYgKHR5cGVvZiBlbGVtZW50LmRhdGFzZXQgIT09IFwidW5kZWZpbmVkXCIpXHJcblx0XHRcdGZvciAoY29uc3QgbmFtZSBpbiBlbGVtZW50LmRhdGFzZXQpXHJcblx0XHRcdFx0ZGF0YVtuYW1lXSA9IGVsZW1lbnQuZGF0YXNldFtuYW1lXTtcclxuXHRcdHJldHVybiBkYXRhO1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogR2V0cyBvciBzZXRzIHRoZSBkYXRhIG9mIHRoaXMgbm9kZS5cclxuXHQgKlxyXG5cdCAqIFRoZSBmaXJzdCBjYWxsIHJlYWRzIHRoZSBkYXRhLSBhdHRyaWJ1dGVzIGludG8gYSBjYWNoZSwgd2hpY2ggaXMga2VwdCBvbiB0aGVcclxuXHQgKiBub2RlIGZyb20gdGhlbiBvbi4gVGhhdCBjYWNoZSBpcyBkZXRhY2hlZCBmcm9tIHRoZSBkb206IGxhdGVyIGF0dHJpYnV0ZVxyXG5cdCAqIGNoYW5nZXMgYXJlIG5vdCBzZWVuIGFuZCB3cml0dGVuIHZhbHVlcyBhcmUgbm90IHJlZmxlY3RlZCBiYWNrLiBkYXRhKHRydWUpXHJcblx0ICogcmVhZHMgdGhlIGF0dHJpYnV0ZXMgYWdhaW4uXHJcblx0ICpcclxuXHQgKiBSZWxvYWRpbmcgbWVyZ2VzLCBpdCBkb2VzIG5vdCBzeW5jIC0gYSB2YWx1ZSByZW1vdmVkIGZyb20gdGhlIGRvbSBzdGF5cyBpblxyXG5cdCAqIHRoZSBjYWNoZSwgYXMgaXQgY2FuIG5vdCBiZSB0b2xkIGFwYXJ0IGZyb20gYSB2YWx1ZSB0aGF0IG5ldmVyIGNhbWUgZnJvbSB0aGVcclxuXHQgKiBkb20uXHJcblx0ICpcclxuXHQgKiBAcGFyYW0ge3N0cmluZ3xib29sZWFufSBbYU5hbWVdIC0gYSBuYW1lIHRvIHJlYWQgb3Igd3JpdGUsIG9yIGEgYm9vbGVhbiB0byByZWFkIGFsbCBkYXRhLCByZWxvYWRpbmcgdGhlIGF0dHJpYnV0ZXMgZmlyc3Qgd2hlbiB0cnVlXHJcblx0ICogQHBhcmFtIHsqfSBbYVZhbHVlXSAtIHRoZSBuZXcgdmFsdWUsIG51bGwgb3IgdW5kZWZpbmVkIHJlbW92ZXMgdGhlIG5hbWVcclxuXHQgKiBAcmV0dXJucyB7T2JqZWN0PHN0cmluZywqPnwqfE5vZGV9IGFsbCBkYXRhLCB0aGUgdmFsdWUgb2YgdGhlIGdpdmVuIG5hbWUsIG9yIHRoaXMgd2hlbiBhIHZhbHVlIHdhcyB3cml0dGVuXHJcblx0ICogQHRocm93cyB7RXJyb3J9IHdoZW4gdGhlIGZpcnN0IGFyZ3VtZW50IGlzIG5laXRoZXIgYSBzdHJpbmcgbm9yIGEgYm9vbGVhblxyXG5cdCAqL1xyXG5cdFByb3RvdHlwZS5kYXRhID0gZnVuY3Rpb24oKSB7XHJcblx0XHRjb25zdCBkYXRhID0gbG9hZERhdGEodGhpcyk7XHJcblx0XHR0aGlzLmRhdGEgPSAoZnVuY3Rpb24oKSB7XHJcblx0XHRcdGlmIChhcmd1bWVudHMubGVuZ3RoID09IDApXHJcblx0XHRcdFx0cmV0dXJuIGRhdGE7XHJcblx0XHRcdGNvbnN0IGFyZzEgPSBhcmd1bWVudHNbMF07XHJcblx0XHRcdGNvbnN0IHR5cGUgPSB0eXBlb2YgYXJnMTtcclxuXHRcdFx0aWYodHlwZSA9PT0gXCJib29sZWFuXCIpe1xyXG5cdFx0XHRcdGlmKGFyZzEpXHJcblx0XHRcdFx0XHRPYmplY3QuYXNzaWduKGRhdGEsIGxvYWREYXRhKHRoaXMpKTtcclxuXHRcdFx0XHRyZXR1cm4gZGF0YTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0aWYodHlwZSAhPT0gXCJzdHJpbmdcIilcclxuXHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJkYXRhKCkgZXhwZWN0cyBhIHN0cmluZyBvciBib29sZWFuIGFzIGZpcnN0IGFyZ3VtZW50IG9yIG5vIGFyZ3VtZW50cyBhdCBhbGxcIik7XHJcblx0XHRcdFxyXG5cdFx0XHRpZiAoYXJndW1lbnRzLmxlbmd0aCA9PSAxKVxyXG5cdFx0XHRcdHJldHVybiBkYXRhW2FyZzFdO1xyXG5cdFx0XHRlbHNlIGlmIChhcmd1bWVudHNbMV0gPT0gbnVsbClcclxuXHRcdFx0XHRkZWxldGUgZGF0YVthcmd1bWVudHNbMF1dO1xyXG5cdFx0XHRlbHNlXHJcblx0XHRcdFx0ZGF0YVthcmd1bWVudHNbMF1dID0gYXJndW1lbnRzWzFdO1xyXG5cclxuXHRcdFx0cmV0dXJuIHRoaXM7XHJcblx0XHR9KS5iaW5kKHRoaXMpO1xyXG5cclxuXHRcdHJldHVybiB0aGlzLmRhdGEuYXBwbHkobnVsbCwgYXJndW1lbnRzKTtcclxuXHR9O1xyXG59KTtcclxuZXhwb3J0IGRlZmF1bHQgc3VwcG9ydDsiLCJpbXBvcnQgRXh0ZW5kZXIgZnJvbSBcIi4uLy4uL3V0aWxzL0V4dGVuZGVyXCI7XHJcblxyXG5jb25zdCBFVkVOVFNQTElURVIgPSAvXFxzKixcXHMqfFxccysvO1xyXG5jb25zdCBERUZBVUxUX09QVElPTlMgPSB7IGNhcHR1cmU6IGZhbHNlLCBvbmNlOiBmYWxzZSwgcGFzc2l2ZTogZmFsc2UsIHNpZ25hbDogdW5kZWZpbmVkIH07XHJcblxyXG4vKipcclxuICogRXZlcnl0aGluZyB0aGlzIGV4dGVuc2lvbiBrZWVwcyBwZXIgZWxlbWVudC4gQSBXZWFrTWFwIGhvbGRzIGl0IG91dHNpZGUgb2YgdGhlXHJcbiAqIGVsZW1lbnQsIHNvIG5vdGhpbmcgaXMgZXhwb3NlZCBvbiB0aGUgZG9tIGFuZCBpdCBpcyByZWxlYXNlZCB3aXRoIHRoZSBlbGVtZW50LlxyXG4gKlxyXG4gKiBXcmFwcGVycyBhbmQgaGFuZGxlcyBhcmUgbWFwcGVkIGluIGJvdGggZGlyZWN0aW9uczogYSB3cmFwcGVyIG5lZWRzIHRvIGZpbmQgaXRzXHJcbiAqIHJlZ2lzdHJhdGlvbiB3aGlsZSBhbiBldmVudCBydW5zLCBhbmQgcmVtb3ZlT24gbmVlZHMgdG8gZmluZCBhbGwgd3JhcHBlcnMgb2YgYVxyXG4gKiBoYW5kbGUuIEhhbmRsZXMgYXJlIG1hcHBlZCB0byBhIHNldCBvZiB3cmFwcGVycywgbm90IHRvIGEgc2luZ2xlIG9uZSwgc28gdGhlXHJcbiAqIHNhbWUgaGFuZGxlIGNhbiBiZSByZWdpc3RlcmVkIGFueSBudW1iZXIgb2YgdGltZXMgd2l0aG91dCB0aGUgcmVnaXN0cmF0aW9uc1xyXG4gKiBvdmVyd3JpdGluZyBlYWNoIG90aGVyLlxyXG4gKlxyXG4gKiBAdHlwZWRlZiB7T2JqZWN0fSBFbGVtZW50RGF0YVxyXG4gKiBAcHJvcGVydHkge01hcDxzdHJpbmcsbnVtYmVyPn0gZXZlbnRUcmlnZ2VyVGltZW91dHMgLSBydW5uaW5nIHRyaWdnZXIgdGltZW91dHMgYnkgZXZlbnQgdHlwZVxyXG4gKiBAcHJvcGVydHkge01hcDxGdW5jdGlvbixSZWdpc3RyYXRpb24+fSB3cmFwcGVySGFuZGxlTWFwIC0gcmVnaXN0cmF0aW9uIG9mIGVhY2ggd3JhcHBlclxyXG4gKiBAcHJvcGVydHkge01hcDxGdW5jdGlvbixTZXQ8RnVuY3Rpb24+Pn0gaGFuZGxlV3JhcHBlck1hcCAtIGFsbCB3cmFwcGVycyBvZiBhIGhhbmRsZVxyXG4gKi9cclxuXHJcbi8qKlxyXG4gKiBPbmUgY2FsbCBvZiBvbigpLlxyXG4gKlxyXG4gKiBAdHlwZWRlZiB7T2JqZWN0fSBSZWdpc3RyYXRpb25cclxuICogQHByb3BlcnR5IHtGdW5jdGlvbn0gaGFuZGxlIC0gdGhlIGZ1bmN0aW9uIGdpdmVuIHRvIG9uKClcclxuICogQHByb3BlcnR5IHtTZXQ8c3RyaW5nPn0gZXZlbnRzIC0gdGhlIGV2ZW50IHR5cGVzIHN0aWxsIHJlZ2lzdGVyZWQsIGxpc3RlbmVycyBnZXQgcmVtb3ZlZCBvbmUgYnkgb25lXHJcbiAqIEBwcm9wZXJ0eSB7T2JqZWN0fSBvcHRpb25zIC0gdGhlIG9wdGlvbnMgdGhlIGxpc3RlbmVyIHdhcyBhZGRlZCB3aXRoLCBuZWVkZWQgdG8gcmVtb3ZlIGl0IGFnYWluXHJcbiAqL1xyXG5cclxuY29uc3QgRUxFTUVOVERBVEEgPSBuZXcgV2Vha01hcCgpO1xyXG5cclxuLyoqXHJcbiAqIEBwYXJhbSB7RXZlbnRUYXJnZXR9IGVsZW1lbnRcclxuICogQHJldHVybnMge0VsZW1lbnREYXRhfSB0aGUgZGF0YSBvZiB0aGUgZWxlbWVudCwgY3JlYXRlZCBvbiBmaXJzdCBhY2Nlc3NcclxuICovXHJcbmNvbnN0IGdldEVsZW1lbnREYXRhID0gKGVsZW1lbnQpID0+IHtcclxuXHRpZiAoIUVMRU1FTlREQVRBLmhhcyhlbGVtZW50KSlcclxuXHRcdEVMRU1FTlREQVRBLnNldChlbGVtZW50LCB7XHJcblx0XHRcdGV2ZW50VHJpZ2dlclRpbWVvdXRzOiBuZXcgTWFwKCksXHJcblx0XHRcdHdyYXBwZXJIYW5kbGVNYXA6IG5ldyBNYXAoKSxcclxuXHRcdFx0aGFuZGxlV3JhcHBlck1hcDogbmV3IE1hcCgpXHJcblx0XHR9KTtcclxuXHJcblx0cmV0dXJuIEVMRU1FTlREQVRBLmdldChlbGVtZW50KTtcclxufTtcclxuXHJcbmNvbnN0IGdldFdyYXBwZXJIYW5kbGVNYXAgPSAoZWxlbWVudCkgPT4ge1xyXG5cdHJldHVybiBnZXRFbGVtZW50RGF0YShlbGVtZW50KS53cmFwcGVySGFuZGxlTWFwO1xyXG59O1xyXG5cclxuY29uc3QgZ2V0SGFuZGxlV3JhcHBlck1hcCA9IChlbGVtZW50KSA9PiB7XHJcblx0cmV0dXJuIGdldEVsZW1lbnREYXRhKGVsZW1lbnQpLmhhbmRsZVdyYXBwZXJNYXA7XHJcbn07XHJcblxyXG5jb25zdCBnZXRUcmlnZ2VyVGltZW91dHMgPSAoZWxlbWVudCkgPT4ge1xyXG5cdHJldHVybiBnZXRFbGVtZW50RGF0YShlbGVtZW50KS5ldmVudFRyaWdnZXJUaW1lb3V0cztcclxufTtcclxuXHJcbi8qKlxyXG4gKiBSZWdpc3RlcnMgYSB3cmFwcGVyIGluIGJvdGggZGlyZWN0aW9ucy5cclxuICpcclxuICogQHBhcmFtIHtFdmVudFRhcmdldH0gYW5FbGVtZW50XHJcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGFIYW5kbGUgLSB0aGUgZnVuY3Rpb24gZ2l2ZW4gdG8gb24oKVxyXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBhV3JhcHBlciAtIHRoZSBsaXN0ZW5lciBhY3R1YWxseSBhZGRlZCB0byB0aGUgZWxlbWVudFxyXG4gKiBAcGFyYW0ge0l0ZXJhYmxlPHN0cmluZz59IHRoZUV2ZW50c1xyXG4gKiBAcGFyYW0ge09iamVjdH0gdGhlT3B0aW9ucyAtIGtlcHQgdG8gcmVtb3ZlIHRoZSBsaXN0ZW5lciB3aXRoIHRoZSBzYW1lIG9wdGlvbnMgbGF0ZXJcclxuICogQHRocm93cyB7RXJyb3J9IHdoZW4gdGhlIHdyYXBwZXIgaXMgYWxyZWFkeSByZWdpc3RlcmVkLCB3aGljaCBjYW4gbm90IGhhcHBlbiBhcyBsb25nIGFzIG9uKCkgY3JlYXRlcyBhIG5ldyBvbmUgcGVyIGNhbGxcclxuICovXHJcbmNvbnN0IHJlZ2lzdHJhdGVIYW5kbGVXcmFwcGVyID0gKGFuRWxlbWVudCwgYUhhbmRsZSwgYVdyYXBwZXIsIHRoZUV2ZW50cywgdGhlT3B0aW9ucykgPT4ge1xyXG5cdGNvbnN0IHdyYXBwZXJIYW5kbGVNYXAgPSBnZXRXcmFwcGVySGFuZGxlTWFwKGFuRWxlbWVudCk7XHJcblx0aWYgKCF3cmFwcGVySGFuZGxlTWFwLmhhcyhhV3JhcHBlcikpIHdyYXBwZXJIYW5kbGVNYXAuc2V0KGFXcmFwcGVyLCB7IGhhbmRsZTogYUhhbmRsZSwgZXZlbnRzOiBuZXcgU2V0KHRoZUV2ZW50cyksIG9wdGlvbnM6IHRoZU9wdGlvbnMgfSk7XHJcblx0ZWxzZSB0aHJvdyBuZXcgRXJyb3IoXCJXcmFwcGVyIGFscmVhZHkgcmVnaXN0ZXJlZCBmb3IgdGhpcyBlbGVtZW50IVwiKTtcclxuXHJcblx0Y29uc3QgaGFuZGxlV3JhcHBlck1hcCA9IGdldEhhbmRsZVdyYXBwZXJNYXAoYW5FbGVtZW50KTtcclxuXHRsZXQgd3JhcHBlclNldCA9IGhhbmRsZVdyYXBwZXJNYXAuZ2V0KGFIYW5kbGUpO1xyXG5cdGlmICghd3JhcHBlclNldCkge1xyXG5cdFx0d3JhcHBlclNldCA9IG5ldyBTZXQoKTtcclxuXHRcdGhhbmRsZVdyYXBwZXJNYXAuc2V0KGFIYW5kbGUsIHdyYXBwZXJTZXQpO1xyXG5cdH1cdFxyXG5cdHdyYXBwZXJTZXQuYWRkKGFXcmFwcGVyKTtcdFxyXG59O1xyXG5cclxuLyoqXHJcbiAqIFJlbW92ZXMgYSB3cmFwcGVyIGZyb20gc29tZSBvciBhbGwgb2YgaXRzIGV2ZW50cy5cclxuICpcclxuICogVGhlIHJlZ2lzdHJhdGlvbiBpcyBkcm9wcGVkIGZyb20gYm90aCBtYXBzIGFzIHNvb24gYXMgbm8gZXZlbnQgaXMgbGVmdCwgc28gYVxyXG4gKiB3cmFwcGVyIHRoYXQgc3RpbGwgbGlzdGVucyB0byBvdGhlciBldmVudHMgc3RheXMga25vd24uXHJcbiAqXHJcbiAqIEBwYXJhbSB7RXZlbnRUYXJnZXR9IGFFbGVtZW50XHJcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGFXcmFwcGVyXHJcbiAqIEBwYXJhbSB7SXRlcmFibGU8c3RyaW5nPn0gW3RoZUV2ZW50c10gLSB0aGUgZXZlbnRzIHRvIHJlbW92ZSwgYWxsIG9mIHRoZW0gd2hlbiBvbWl0dGVkXHJcbiAqL1xyXG5jb25zdCByZW1vdmVXcmFwcGVyID0gKGFFbGVtZW50LCBhV3JhcHBlciwgdGhlRXZlbnRzKSA9PiB7XHJcblx0Y29uc3Qgd3JhcHBlckhhbmRsZU1hcCA9IGdldFdyYXBwZXJIYW5kbGVNYXAoYUVsZW1lbnQpO1xyXG5cdGlmKCF3cmFwcGVySGFuZGxlTWFwLmhhcyhhV3JhcHBlcikpIHRocm93IG5ldyBFcnJvcihcIldyYXBwZXIgbm90IHJlZ2lzdGVyZWQgZm9yIHRoaXMgZWxlbWVudCFcIik7XHJcblx0Y29uc3QgeyBldmVudHMsIG9wdGlvbnMsIGhhbmRsZSB9ID0gd3JhcHBlckhhbmRsZU1hcC5nZXQoYVdyYXBwZXIpO1xyXG5cdGNvbnN0IHJlbW92ZWRFdmVudHMgPSB0aGVFdmVudHMgfHwgZXZlbnRzO1xyXG5cdGZvciAobGV0IGV2ZW50IG9mIHJlbW92ZWRFdmVudHMpIHtcclxuXHRcdGlmIChldmVudHMuaGFzKGV2ZW50KSkge1xyXG5cdFx0XHRldmVudHMuZGVsZXRlKGV2ZW50KTtcclxuXHRcdFx0YUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudCwgYVdyYXBwZXIsIG9wdGlvbnMpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHQvL0NsZWFudXAgdGhlIHdyYXBwZXJIYW5kbGVNYXAgYW5kIGhhbmRsZVdyYXBwZXJNYXAgaWYgbm8gZXZlbnRzIGxlZnQgZm9yIHRoaXMgd3JhcHBlclxyXG5cdGlmIChldmVudHMuc2l6ZSA9PT0gMCl7XHJcblx0XHR3cmFwcGVySGFuZGxlTWFwLmRlbGV0ZShhV3JhcHBlcik7XHJcblx0XHRjb25zdCBoYW5kbGVXcmFwcGVyTWFwID0gZ2V0SGFuZGxlV3JhcHBlck1hcChhRWxlbWVudCk7XHJcblx0XHRjb25zdCB3cmFwcGVyU2V0ID0gaGFuZGxlV3JhcHBlck1hcC5nZXQoaGFuZGxlKTtcclxuXHRcdHdyYXBwZXJTZXQuZGVsZXRlKGFXcmFwcGVyKTtcclxuXHRcdGlmICh3cmFwcGVyU2V0LnNpemUgPT09IDApXHJcblx0XHRcdGhhbmRsZVdyYXBwZXJNYXAuZGVsZXRlKGhhbmRsZSk7XHJcblx0fVxyXG59O1xyXG5cclxuLyoqXHJcbiAqIEBwYXJhbSB7Ym9vbGVhbnxPYmplY3R9IFtvcHRpb25zXSAtIGEgYm9vbGVhbiBpcyB0YWtlbiBhcyBjYXB0dXJlLCBhbiBvYmplY3QgaXMgbWVyZ2VkIGludG8gdGhlIGRlZmF1bHRzXHJcbiAqIEByZXR1cm5zIHtPYmplY3R9IGFsd2F5cyBhIG5ldyBvYmplY3QsIG5ldmVyIHRoZSBzaGFyZWQgZGVmYXVsdHNcclxuICovXHJcbmNvbnN0IHRvRXZlbnRPcHRpb25zID0gKG9wdGlvbnMpID0+IHtcclxuXHRpZiAob3B0aW9ucyA9PSBudWxsKSByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgREVGQVVMVF9PUFRJT05TKTtcclxuXHRlbHNlIGlmICh0eXBlb2Ygb3B0aW9ucyA9PT0gXCJib29sZWFuXCIpIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBERUZBVUxUX09QVElPTlMsIHsgY2FwdHVyZTogb3B0aW9ucyB9KTtcclxuXHRlbHNlIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBERUZBVUxUX09QVElPTlMsIG9wdGlvbnMpO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIE5vcm1hbGl6ZXMgZXZlbnQgdHlwZXMgdG8gYSBmbGF0IGxpc3QuXHJcbiAqXHJcbiAqIFR5cGVzIGFyZSBzZXBhcmF0ZWQgYnkgd2hpdGVzcGFjZXMsIGNvbW1hcyBvciBib3RoLCBpbiBhIHN0cmluZyBhcyB3ZWxsIGFzXHJcbiAqIHdpdGhpbiB0aGUgZW50cmllcyBvZiBhbiBhcnJheSAtIHNvIFtcImNsaWNrXCIsIFwiZm9jdXMgYmx1clwiXSBnaXZlcyB0aHJlZSB0eXBlcy5cclxuICpcclxuICogQSBzdHJpbmcgZ2V0cyB0cmltbWVkIGJlZm9yZSBpdCBpcyBzcGxpdCwgYmVjYXVzZSB0aGUgZW1wdHkgZW50cmllcyBhIGxlYWRpbmdcclxuICogb3IgdHJhaWxpbmcgc2VwYXJhdG9yIHByb2R1Y2VzIGFyZSBhcnRpZmFjdHMgb2Ygc3BsaXR0aW5nLCBub3Qgc29tZXRoaW5nIHRoZVxyXG4gKiBjYWxsZXIgYXNrZWQgZm9yLiBBbiBlbXB0eSBlbnRyeSBpbnNpZGUgYW4gYXJyYXkgaXMgdGhlIG9wcG9zaXRlIGNhc2U6IGl0IHdhc1xyXG4gKiB3cml0dGVuIGRvd24gYW5kIHRoZXJlZm9yZSB0aHJvd3MuXHJcbiAqXHJcbiAqIEBwYXJhbSB7c3RyaW5nfEl0ZXJhYmxlPHN0cmluZz59IHRoZUV2ZW50c1xyXG4gKiBAcmV0dXJucyB7c3RyaW5nW119IHRoZSBldmVudCB0eXBlcywgbmV2ZXIgZW1wdHlcclxuICogQHRocm93cyB7RXJyb3J9IHdoZW4gbm8gdHlwZSBpcyBsZWZ0IG9yIGFuIGVudHJ5IGlzIG5vdCBhIG5vbiBlbXB0eSBzdHJpbmdcclxuICovXHJcbmNvbnN0IHRvRXZlbnRUeXBlcyA9ICh0aGVFdmVudHMpID0+IHtcclxuXHRpZih0aGVFdmVudHMgPT0gbnVsbCkgdGhyb3cgbmV3IEVycm9yKFwiRXZlbnQgdHlwZXMgYXJlIHJlcXVpcmVkIVwiKTtcdFxyXG5cdFxyXG5cdGNvbnN0IGV2ZW50cyA9IHR5cGVvZiB0aGVFdmVudHMgPT09IFwic3RyaW5nXCIgPyB0aGVFdmVudHMudHJpbSgpLnNwbGl0KEVWRU5UU1BMSVRFUikgOiB0aGVFdmVudHM7XHJcblx0aWYgKHR5cGVvZiBldmVudHNbU3ltYm9sLml0ZXJhdG9yXSAhPT0gXCJmdW5jdGlvblwiKSB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIGV2ZW50IHR5cGVzIVwiKTtcclxuXHRpZihldmVudHMubGVuZ3RoID09PSAwKSB0aHJvdyBuZXcgRXJyb3IoXCJFdmVudCB0eXBlcyBhcmUgcmVxdWlyZWQhXCIpO1xyXG5cclxuXHRjb25zdCByZXN1bHQgPSBbXTtcclxuXHJcblx0Zm9yIChsZXQgZXZlbnQgb2YgZXZlbnRzKSB7XHJcblx0XHRpZiAodHlwZW9mIGV2ZW50ICE9PSBcInN0cmluZ1wiKSB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIGV2ZW50IHR5cGVzIVwiKTtcclxuXHRcdGV2ZW50ID0gZXZlbnQudHJpbSgpO1xyXG5cdFx0aWYgKGV2ZW50Lmxlbmd0aCA9PT0gMCkgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBldmVudCB0eXBlcyFcIik7XHJcblx0XHRyZXN1bHQucHVzaCguLi5ldmVudC5zcGxpdChFVkVOVFNQTElURVIpKTtcclxuXHR9XHJcblx0cmV0dXJuIHJlc3VsdDtcclxufTtcclxuXHJcbmNvbnN0IHN1cHBvcnQgPSBFeHRlbmRlcihcIkV2ZW50U3VwcG9ydFwiLCAoUHJvdG90eXBlKSA9PiB7XHJcblx0LyoqXHJcblx0ICogQWRkcyBhIGhhbmRsZSB0byBvbmUgb3IgbW9yZSBldmVudHMuXHJcblx0ICpcclxuXHQgKiBUaGUgaGFuZGxlIGlzIG5vdCBhZGRlZCBhcyBsaXN0ZW5lciBpdHNlbGYsIGl0IGdldHMgd3JhcHBlZC4gVGhhdCB3cmFwcGVyXHJcblx0ICogYXBwbGllcyB0aGUgc2VsZWN0b3IgYW5kIGhhbmRsZXMgdGhlIG9uY2Ugb3B0aW9uLCB3aGljaCBrZWVwcyByZW1vdmVPbiBhYmxlXHJcblx0ICogdG8gZmluZCBldmVyeSByZWdpc3RyYXRpb24gb2YgYSBoYW5kbGUuXHJcblx0ICpcclxuXHQgKiBXaXRoIGEgc2VsZWN0b3IgdGhlIGhhbmRsZSBpcyBvbmx5IGNhbGxlZCB3aGVuIHRoZSB0YXJnZXQgb2YgdGhlIGV2ZW50XHJcblx0ICogbWF0Y2hlcyBpdC4gVG9nZXRoZXIgd2l0aCBvbmNlIHRoaXMgbmVlZHMgY2FyZTogdGhlIGJyb3dzZXIgY29uc3VtZXMgYSBvbmNlXHJcblx0ICogbGlzdGVuZXIgb24gdGhlIGZpcnN0IGV2ZW50LCBldmVuIHdoZW4gdGhlIHNlbGVjdG9yIGRpZCBub3QgbWF0Y2gsIHNvIHRoZVxyXG5cdCAqIHdyYXBwZXIgcmVnaXN0ZXJzIGl0c2VsZiBhZ2FpbiBpbiB0aGF0IGNhc2UgYW5kIHdhaXRzIGZvciBhIG1hdGNoaW5nIGV2ZW50LlxyXG5cdCAqXHJcblx0ICogQHBhcmFtIHtzdHJpbmd8SXRlcmFibGU8c3RyaW5nPn0gdGhlRXZlbnRzIC0gZXZlbnQgdHlwZXMsIHNlcGFyYXRlZCBieSB3aGl0ZXNwYWNlcyBvciBjb21tYXNcclxuXHQgKiBAcGFyYW0ge3N0cmluZ30gW2FTZWxlY3Rvcl0gLSBvbmx5IGNhbGwgdGhlIGhhbmRsZSB3aGVuIHRoZSB0YXJnZXQgb2YgdGhlIGV2ZW50IG1hdGNoZXNcclxuXHQgKiBAcGFyYW0ge0Z1bmN0aW9ufSBhSGFuZGxlIC0gY2FsbGVkIHdpdGggdGhlIGV2ZW50XHJcblx0ICogQHBhcmFtIHtib29sZWFufE9iamVjdH0gW3RoZU9wdGlvbnNdIC0gYSBib29sZWFuIGlzIHRha2VuIGFzIGNhcHR1cmUsIG90aGVyd2lzZSB0aGUgb3B0aW9ucyBvZiBhZGRFdmVudExpc3RlbmVyXHJcblx0ICogQHJldHVybnMge0V2ZW50VGFyZ2V0fSB0aGlzXHJcblx0ICogQHRocm93cyB7RXJyb3J9IGJ5IGxlc3MgdGhhbiB0d28gYXJndW1lbnRzIG9yIGludmFsaWQgZXZlbnQgdHlwZXNcclxuXHQgKi9cclxuXHRQcm90b3R5cGUub24gPSBmdW5jdGlvbiAoKSB7XHJcblx0XHRpZiAoYXJndW1lbnRzLmxlbmd0aCA8IDIpIHRocm93IG5ldyBFcnJvcihcIlRvbyBsZXNzIGFyZ3VtZW50cyFcIik7XHJcblxyXG5cdFx0Y29uc3QgYXJncyA9IEFycmF5LmZyb20oYXJndW1lbnRzKTtcclxuXHRcdGNvbnN0IGV2ZW50cyA9IHRvRXZlbnRUeXBlcyhhcmdzLnNoaWZ0KCkpO1xyXG5cdFx0Y29uc3QgZWxlbWVudFNlbGVjdG9yID0gdHlwZW9mIGFyZ3NbMF0gPT09IFwic3RyaW5nXCIgPyBhcmdzLnNoaWZ0KCkgOiBudWxsO1xyXG5cdFx0Y29uc3QgaGFuZGxlID0gYXJncy5zaGlmdCgpO1xyXG5cdFx0Y29uc3Qgb3B0aW9uID0gdG9FdmVudE9wdGlvbnMoYXJncy5zaGlmdCgpKTtcclxuXHRcdGNvbnN0IGVsZW1lbnQgPSB0aGlzO1xyXG5cdFx0Y29uc3Qgd3JhcHBlciA9IGZ1bmN0aW9uKGV2ZW50KSB7XHJcblx0XHRcdGNvbnN0IHsgdGFyZ2V0LCB0eXBlIH0gPSBldmVudDtcclxuXHRcdFx0aWYgKGVsZW1lbnRTZWxlY3RvciAmJiB0eXBlb2YgdGFyZ2V0LmlzID09PSBcImZ1bmN0aW9uXCIgJiYgIXRhcmdldC5pcyhlbGVtZW50U2VsZWN0b3IpKSB7XHJcblx0XHRcdFx0aWYgKG9wdGlvbi5vbmNlKSBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIodHlwZSwgd3JhcHBlciwgb3B0aW9uKTsgLy8gcmUtcmVnaXN0ZXIgdGhlIHdyYXBwZXIgZm9yIHRoZSBuZXh0IGV2ZW50XHJcblx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdGlmIChvcHRpb24ub25jZSkgcmVtb3ZlV3JhcHBlcihlbGVtZW50LCB3cmFwcGVyLCBbdHlwZV0pO1xyXG5cdFx0XHRcdGNvbnN0IHJlc3VsdCA9IGhhbmRsZS5hcHBseShudWxsLCBhcmd1bWVudHMpO1x0XHRcdFx0XHJcblx0XHRcdFx0cmV0dXJuIHJlc3VsdDtcclxuXHRcdFx0fVxyXG5cdFx0fTtcclxuXHJcblx0XHRyZWdpc3RyYXRlSGFuZGxlV3JhcHBlcih0aGlzLCBoYW5kbGUsIHdyYXBwZXIsIGV2ZW50cywgb3B0aW9uKTtcclxuXHJcblx0XHRmb3IgKGxldCBldmVudCBvZiBldmVudHMpIHtcclxuXHRcdFx0dGhpcy5hZGRFdmVudExpc3RlbmVyKGV2ZW50LCB3cmFwcGVyLCBvcHRpb24pO1xyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiB0aGlzO1xyXG5cdH07XHJcblxyXG5cdC8qKlxyXG5cdCAqIFJlbW92ZXMgYSBoYW5kbGUgZnJvbSBzb21lIG9yIGFsbCBvZiBpdHMgZXZlbnRzLlxyXG5cdCAqXHJcblx0ICogQSBoYW5kbGUgcmVnaXN0ZXJlZCBieSBzZXZlcmFsIGNhbGxzIG9mIG9uKCkgaXMgcmVtb3ZlZCBmcm9tIGFsbCBvZiB0aGVtLlxyXG5cdCAqXHJcblx0ICogQHBhcmFtIHtGdW5jdGlvbn0gYUhhbmRsZSAtIHRoZSBmdW5jdGlvbiBnaXZlbiB0byBvbigpXHJcblx0ICogQHBhcmFtIHtzdHJpbmd8SXRlcmFibGU8c3RyaW5nPn0gW3RoZUV2ZW50c10gLSB0aGUgZXZlbnRzIHRvIHJlbW92ZSwgYWxsIG9mIHRoZW0gd2hlbiBvbWl0dGVkXHJcblx0ICogQHJldHVybnMge0V2ZW50VGFyZ2V0fSB0aGlzXHJcblx0ICogQHRocm93cyB7RXJyb3J9IGJ5IGludmFsaWQgZXZlbnQgdHlwZXNcclxuXHQgKi9cclxuXHRQcm90b3R5cGUucmVtb3ZlT24gPSBmdW5jdGlvbiAoYUhhbmRsZSwgdGhlRXZlbnRzKSB7XHJcblx0XHRjb25zdCBldmVudHMgPSB0aGVFdmVudHMgPyB0b0V2ZW50VHlwZXModGhlRXZlbnRzKSA6IG51bGw7XHJcblx0XHRjb25zdCBoYW5kbGVXcmFwcGVyTWFwID0gZ2V0SGFuZGxlV3JhcHBlck1hcCh0aGlzKTtcclxuXHRcdGNvbnN0IHdyYXBwZXJTZXQgPSBoYW5kbGVXcmFwcGVyTWFwLmdldChhSGFuZGxlKTtcdFxyXG5cdFx0aWYgKHdyYXBwZXJTZXQpIHtcclxuXHRcdFx0Zm9yIChsZXQgd3JhcHBlciBvZiB3cmFwcGVyU2V0KVxyXG5cdFx0XHRcdHJlbW92ZVdyYXBwZXIodGhpcywgd3JhcHBlciwgZXZlbnRzKTtcclxuXHRcdH1cclxuXHJcblx0XHRyZXR1cm4gdGhpcztcclxuXHR9O1xyXG5cclxuXHQvKipcclxuXHQgKiBEaXNwYXRjaGVzIGEgYnViYmxpbmcsIGNhbmNlbGFibGUgYW5kIGNvbXBvc2VkIEN1c3RvbUV2ZW50LlxyXG5cdCAqXHJcblx0ICogQSBsZWFkaW5nIG51bWJlciBkZWxheXMgdGhlIGV2ZW50IGJ5IHRoYXQgbWFueSBtaWxsaXNlY29uZHMgYW5kIHJlcGxhY2VzIGFcclxuXHQgKiBkZWxheWVkIGV2ZW50IG9mIHRoZSBzYW1lIHR5cGUgdGhhdCBpcyBzdGlsbCBwZW5kaW5nLCBzbyBhIHJlcGVhdGVkbHlcclxuXHQgKiB0cmlnZ2VyZWQgZXZlbnQgaXMgZGlzcGF0Y2hlZCBvbmNlIGFmdGVyIHRoaW5ncyBjYW1lIHRvIHJlc3QuXHJcblx0ICpcclxuXHQgKiBPbmUgZGF0YSBhcmd1bWVudCBiZWNvbWVzIGV2ZW50LmRldGFpbCBhcyBpdCBpcywgc2V2ZXJhbCBiZWNvbWUgYW4gYXJyYXkgb2ZcclxuXHQgKiB0aGVtLiBBIGxlYWRpbmcgRXZlbnQgaXMgdGFrZW4gYXMgdGhlIGV2ZW50IHRoaXMgb25lIGlzIGRlbGVnYXRlZCBmcm9tIGFuZFxyXG5cdCAqIGlzIGF2YWlsYWJsZSBhcyBldmVudC5kZWxlZ2F0ZWRFdmVudC5cclxuXHQgKlxyXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSBbYVRpbWVvdXRdIC0gbWlsbGlzZWNvbmRzIHRvIGRlbGF5IHRoZSBldmVudFxyXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBhVHlwZSAtIHRoZSBldmVudCB0eXBlXHJcblx0ICogQHBhcmFtIHtFdmVudH0gW2FEZWxlZ2F0ZWRFdmVudF0gLSB0aGUgZXZlbnQgdGhpcyBvbmUgaXMgdHJpZ2dlcmVkIGZvclxyXG5cdCAqIEBwYXJhbSB7Li4uKn0gW3RoZURhdGFdIC0gYmVjb21lcyBldmVudC5kZXRhaWxcclxuXHQgKiBAcmV0dXJucyB7RXZlbnRUYXJnZXR9IHRoaXNcclxuXHQgKi9cclxuXHRQcm90b3R5cGUudHJpZ2dlciA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdGNvbnN0IGFyZ3MgPSBBcnJheS5mcm9tKGFyZ3VtZW50cyk7XHJcblx0XHRjb25zdCB0aW1lb3V0ID0gdHlwZW9mIGFyZ3NbMF0gPT09IFwibnVtYmVyXCIgPyBhcmdzLnNoaWZ0KCkgOiAtMTtcclxuXHRcdGlmICh0aW1lb3V0ID49IDApIHtcclxuXHRcdFx0Y29uc3QgdHlwZSA9IGFyZ3NbMF07XHJcblx0XHRcdGNvbnN0IHRpbWVvdXRzID0gZ2V0VHJpZ2dlclRpbWVvdXRzKHRoaXMpO1xyXG5cdFx0XHRjb25zdCB0aW1lb3V0aWQgPSB0aW1lb3V0cy5nZXQodHlwZSk7XHJcblx0XHRcdGlmICh0aW1lb3V0aWQpIGNsZWFyVGltZW91dCh0aW1lb3V0aWQpO1xyXG5cclxuXHRcdFx0dGltZW91dHMuc2V0KHR5cGUsIHNldFRpbWVvdXQoKCkgPT4ge1xyXG5cdFx0XHRcdHRpbWVvdXRzLmRlbGV0ZSh0eXBlKTtcclxuXHRcdFx0XHR0aGlzLnRyaWdnZXIuYXBwbHkodGhpcywgYXJncyk7XHJcblx0XHRcdH0sIHRpbWVvdXQpKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGNvbnN0IHR5cGUgPSBhcmdzLnNoaWZ0KCk7XHJcblx0XHRcdGNvbnN0IGRlbGVnYXRlID0gYXJnc1swXSBpbnN0YW5jZW9mIEV2ZW50ID8gYXJncy5zaGlmdCgpIDogbnVsbDtcclxuXHRcdFx0Y29uc3QgZGF0YSA9IGFyZ3MubGVuZ3RoID49IDEgPyAoYXJncy5sZW5ndGggPT0gMSA/IGFyZ3Muc2hpZnQoKSA6IGFyZ3MpIDogZGVsZWdhdGU7XHJcblx0XHRcdGNvbnN0IGV2ZW50ID0gbmV3IEN1c3RvbUV2ZW50KHR5cGUsIHsgYnViYmxlczogdHJ1ZSwgY2FuY2VsYWJsZTogdHJ1ZSwgY29tcG9zZWQ6IHRydWUsIGRldGFpbDogZGF0YSB9KTtcclxuXHJcblx0XHRcdGlmIChkZWxlZ2F0ZSkgZXZlbnQuZGVsZWdhdGVkRXZlbnQgPSBkZWxlZ2F0ZTtcclxuXHRcdFx0dGhpcy5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcclxuXHRcdH1cclxuXHRcdHJldHVybiB0aGlzO1xyXG5cdH07XHJcbn0pO1xyXG5leHBvcnQgZGVmYXVsdCBzdXBwb3J0O1xyXG4iLCJpbXBvcnQgRXh0ZW5kZXIgZnJvbSBcIi4uLy4uL3V0aWxzL0V4dGVuZGVyXCI7XHJcblxyXG5jb25zdCBDTEFTU1NQTElURVIgPSAvXFxzKy87XHJcblxyXG4vKipcclxuICogTm9ybWFsaXplcyBjbGFzcyBuYW1lcyB0byBhIGZsYXQgbGlzdC5cclxuICpcclxuICogTmFtZXMgYXJlIHNlcGFyYXRlZCBieSB3aGl0ZXNwYWNlcywgaW4gYSBzdHJpbmcgYXMgd2VsbCBhcyB3aXRoaW4gdGhlIGVudHJpZXNcclxuICogb2YgYW4gYXJyYXkgLSBzbyBbXCJhXCIsIFwiYiBjXCJdIGdpdmVzIHRocmVlIG5hbWVzLlxyXG4gKlxyXG4gKiBBIHN0cmluZyBnZXRzIHRyaW1tZWQgYmVmb3JlIGl0IGlzIHNwbGl0LCBiZWNhdXNlIHRoZSBlbXB0eSBlbnRyaWVzIGEgbGVhZGluZ1xyXG4gKiBvciB0cmFpbGluZyB3aGl0ZXNwYWNlIHByb2R1Y2VzIGFyZSBhcnRpZmFjdHMgb2Ygc3BsaXR0aW5nLiBBbiBlbXB0eSBlbnRyeVxyXG4gKiB3cml0dGVuIGRvd24gYnkgdGhlIGNhbGxlciB0aHJvd3MgaW5zdGVhZCwgYXMgZG9lcyBhbnl0aGluZyB0aGF0IGlzIG5vdCBhXHJcbiAqIHN0cmluZyAtIGNsYXNzTGlzdCB3b3VsZCBvbmx5IHJlcG9ydCB0aG9zZSBhcyBhbiB1bnVzYWJsZSB0b2tlbiwgb3Igc2lsZW50bHlcclxuICogdGFrZSBhIGJvb2xlYW4gYXMgYSBjbGFzcyBuYW1lZCBcInRydWVcIi5cclxuICpcclxuICogQHBhcmFtIHtzdHJpbmd8c3RyaW5nW119IHRoZUNsYXNzZXNcclxuICogQHJldHVybnMge0l0ZXJhYmxlPHN0cmluZz59IHRoZSBjbGFzcyBuYW1lcywgbmV2ZXIgZW1wdHlcclxuICogQHRocm93cyB7RXJyb3J9IHdoZW4gbm8gbmFtZSBpcyBsZWZ0IG9yIGFuIGVudHJ5IGlzIG5vdCBhIG5vbiBlbXB0eSBzdHJpbmdcclxuICovXHJcbmNvbnN0IHRvQ2xhc3NOYW1lcyA9ICh0aGVDbGFzc2VzKSA9PiB7XHJcblx0aWYgKHRoZUNsYXNzZXMgPT0gbnVsbCkgdGhyb3cgbmV3IEVycm9yKFwiQ2xhc3MgbmFtZXMgYXJlIHJlcXVpcmVkIVwiKTtcclxuXHJcblx0Y29uc3QgY2xhc3NlcyA9IHR5cGVvZiB0aGVDbGFzc2VzID09PSBcInN0cmluZ1wiID8gdGhlQ2xhc3Nlcy50cmltKCkuc3BsaXQoQ0xBU1NTUExJVEVSKSA6IHRoZUNsYXNzZXM7XHJcblx0aWYgKHR5cGVvZiBjbGFzc2VzW1N5bWJvbC5pdGVyYXRvcl0gIT09IFwiZnVuY3Rpb25cIikgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBjbGFzcyBuYW1lcyFcIik7XHJcblx0aWYgKGNsYXNzZXMubGVuZ3RoID09PSAwKSB0aHJvdyBuZXcgRXJyb3IoXCJDbGFzcyBuYW1lcyBhcmUgcmVxdWlyZWQhXCIpO1xyXG5cclxuXHRjb25zdCByZXN1bHQgPSBbXTtcclxuXHRmb3IgKGxldCBjbGF6eiBvZiBjbGFzc2VzKSB7XHJcblx0XHRpZiAodHlwZW9mIGNsYXp6ICE9PSBcInN0cmluZ1wiKSB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIGNsYXNzIG5hbWVzIVwiKTtcclxuXHRcdGNsYXp6ID0gY2xhenoudHJpbSgpO1xyXG5cdFx0aWYgKGNsYXp6Lmxlbmd0aCA9PT0gMCkgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBjbGFzcyBuYW1lcyFcIik7XHJcblx0XHRyZXN1bHQucHVzaCguLi5jbGF6ei5zcGxpdChDTEFTU1NQTElURVIpKTtcclxuXHR9XHJcblx0XHJcblx0cmV0dXJuIHJlc3VsdDtcclxufTtcclxuXHJcbi8qKlxyXG4gKiBCdWlsZHMgYSBjbGFzcyBmdW5jdGlvbiwgYXMgYWRkLCByZW1vdmUgYW5kIHRvZ2dsZSBvbmx5IGRpZmZlciBieSB0aGUgbWV0aG9kXHJcbiAqIHRoZXkgY2FsbCBvbiB0aGUgY2xhc3NMaXN0LlxyXG4gKlxyXG4gKiBAcGFyYW0ge3N0cmluZ30gYU5hbWUgLSB0aGUgbmFtZSBvZiB0aGUgY2xhc3NMaXN0IG1ldGhvZFxyXG4gKiBAcmV0dXJucyB7ZnVuY3Rpb24oLi4uKHN0cmluZ3xzdHJpbmdbXSkpOkVsZW1lbnR9IGEgZnVuY3Rpb24gdGFraW5nIGFueSBtaXggb2YgbmFtZXMsIGxpc3RzIG9mIG5hbWVzIGFuZCBhcnJheXMgb2YgYm90aFxyXG4gKi9cclxuY29uc3QgY2xhc3NMaXN0RnVuY3Rpb24gPSAoYU5hbWUpID0+XHJcblx0ZnVuY3Rpb24gKCkge1xyXG5cdFx0Y29uc3QgY2xhc3NlcyA9IHRvQ2xhc3NOYW1lcyhBcnJheS5mcm9tKGFyZ3VtZW50cykuZmxhdCgpKTtcclxuXHRcdGNsYXNzZXMuZm9yRWFjaCgoY2xhenopID0+IHRoaXMuY2xhc3NMaXN0W2FOYW1lXShjbGF6eikpO1xyXG5cclxuXHRcdHJldHVybiB0aGlzO1xyXG5cdH07XHJcblxyXG5jb25zdCBzdXBwb3J0ID0gRXh0ZW5kZXIoXCJIdG1sQ2xhc3NTdXBwb3J0XCIsIChQcm90b3R5cGUpID0+IHtcclxuXHQvKipcclxuXHQgKiBBZGRzIGNsYXNzIG5hbWVzIHRvIHRoaXMgZWxlbWVudC5cclxuXHQgKlxyXG5cdCAqIEBwYXJhbSB7Li4uKHN0cmluZ3xzdHJpbmdbXSl9IHRoZUNsYXNzZXMgLSBuYW1lcywgd2hpdGVzcGFjZSBzZXBhcmF0ZWQgbGlzdHMgb2YgbmFtZXMsIG9yIGFycmF5cyBvZiBib3RoXHJcblx0ICogQHJldHVybnMge0VsZW1lbnR9IHRoaXNcclxuXHQgKiBAdGhyb3dzIHtFcnJvcn0gYnkgaW52YWxpZCBjbGFzcyBuYW1lc1xyXG5cdCAqL1xyXG5cdFByb3RvdHlwZS5hZGRDbGFzcyA9IGNsYXNzTGlzdEZ1bmN0aW9uKFwiYWRkXCIpO1xyXG5cclxuXHQvKipcclxuXHQgKiBSZW1vdmVzIGNsYXNzIG5hbWVzIGZyb20gdGhpcyBlbGVtZW50LiBOYW1lcyBub3QgcHJlc2VudCBhcmUgaWdub3JlZC5cclxuXHQgKlxyXG5cdCAqIEBwYXJhbSB7Li4uKHN0cmluZ3xzdHJpbmdbXSl9IHRoZUNsYXNzZXMgLSBuYW1lcywgd2hpdGVzcGFjZSBzZXBhcmF0ZWQgbGlzdHMgb2YgbmFtZXMsIG9yIGFycmF5cyBvZiBib3RoXHJcblx0ICogQHJldHVybnMge0VsZW1lbnR9IHRoaXNcclxuXHQgKiBAdGhyb3dzIHtFcnJvcn0gYnkgaW52YWxpZCBjbGFzcyBuYW1lc1xyXG5cdCAqL1xyXG5cdFByb3RvdHlwZS5yZW1vdmVDbGFzcyA9IGNsYXNzTGlzdEZ1bmN0aW9uKFwicmVtb3ZlXCIpO1xyXG5cclxuXHQvKipcclxuXHQgKiBUb2dnbGVzIGNsYXNzIG5hbWVzIG9mIHRoaXMgZWxlbWVudCwgZWFjaCBvbmUgb24gaXRzIG93bi5cclxuXHQgKlxyXG5cdCAqIFRoZSBmb3JjZSBwYXJhbWV0ZXIgb2YgY2xhc3NMaXN0LnRvZ2dsZSBpcyBub3Qgc3VwcG9ydGVkIC0gYSBib29sZWFuIGlzIG5vdFxyXG5cdCAqIGEgY2xhc3MgbmFtZSBhbmQgdGhlcmVmb3JlIHRocm93cy5cclxuXHQgKlxyXG5cdCAqIEBwYXJhbSB7Li4uKHN0cmluZ3xzdHJpbmdbXSl9IHRoZUNsYXNzZXMgLSBuYW1lcywgd2hpdGVzcGFjZSBzZXBhcmF0ZWQgbGlzdHMgb2YgbmFtZXMsIG9yIGFycmF5cyBvZiBib3RoXHJcblx0ICogQHJldHVybnMge0VsZW1lbnR9IHRoaXNcclxuXHQgKiBAdGhyb3dzIHtFcnJvcn0gYnkgaW52YWxpZCBjbGFzcyBuYW1lc1xyXG5cdCAqL1xyXG5cdFByb3RvdHlwZS50b2dnbGVDbGFzcyA9IGNsYXNzTGlzdEZ1bmN0aW9uKFwidG9nZ2xlXCIpO1xyXG59KTtcclxuZXhwb3J0IGRlZmF1bHQgc3VwcG9ydDsiLCJpbXBvcnQgRXh0ZW5kZXIgZnJvbSBcIi4uLy4uL3V0aWxzL0V4dGVuZGVyXCI7XHJcblxyXG4vKipcclxuICogQnVpbGRzIGEgbGlzdCBmdW5jdGlvbiBieSBkZWxlZ2F0aW5nIHRvIHRoZSBhcnJheSBmdW5jdGlvbiBvZiB0aGUgc2FtZSBuYW1lLlxyXG4gKlxyXG4gKiBUaGUgbGlzdCBpcyBjb3BpZWQgaW50byBhbiBhcnJheSBmaXJzdC4gVGhhdCBjb3B5IGlzIHdoYXQgbWFrZXMgdGhlc2UgZnVuY3Rpb25zXHJcbiAqIHNhZmUgb24gYSBsaXZlIEhUTUxDb2xsZWN0aW9uOiBub2RlcyBtYXkgYmUgbW92ZWQgb3IgcmVtb3ZlZCB3aGlsZSBpdGVyYXRpbmcsXHJcbiAqIHdpdGhvdXQgdGhlIGl0ZXJhdGlvbiBza2lwcGluZyB0aGUgZW50cmllcyB0aGF0IHNoaWZ0IGludG8gdGhlaXIgcGxhY2UuXHJcbiAqXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBhTmFtZSAtIHRoZSBuYW1lIG9mIHRoZSBhcnJheSBmdW5jdGlvblxyXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IGEgZnVuY3Rpb24gYmVoYXZpbmcgbGlrZSB0aGUgYXJyYXkgZnVuY3Rpb24gb2YgdGhhdCBuYW1lXHJcbiAqL1xyXG5jb25zdCBhcnJheUZ1bmN0aW9uID0gKGFOYW1lKSA9PlxyXG5cdGZ1bmN0aW9uICgpIHtcclxuXHRcdHJldHVybiBBcnJheS5wcm90b3R5cGVbYU5hbWVdLmFwcGx5KEFycmF5LmZyb20odGhpcyksIGFyZ3VtZW50cyk7XHJcblx0fTtcclxuXHJcbmNvbnN0IHN1cHBvcnQgPSBFeHRlbmRlcihcIkxpc3RTdXBwb3J0XCIsIChQcm90b3R5cGUpID0+IHtcclxuXHQvKipcclxuXHQgKiBAcGFyYW0geyp9IGFOb2RlIC0gdGhlIG5vZGUgdG8gbG9vayBmb3JcclxuXHQgKiBAcGFyYW0ge251bWJlcn0gW2FTdGFydF0gLSB0aGUgaW5kZXggdG8gc3RhcnQgYXRcclxuXHQgKiBAcmV0dXJucyB7bnVtYmVyfSB0aGUgaW5kZXggb2YgdGhlIG5vZGUsIG9yIC0xXHJcblx0ICovXHJcblx0UHJvdG90eXBlLmluZGV4T2YgPSBhcnJheUZ1bmN0aW9uKFwiaW5kZXhPZlwiKTtcclxuXHJcblx0LyoqXHJcblx0ICogQHBhcmFtIHsqfSBhTm9kZSAtIHRoZSBub2RlIHRvIGxvb2sgZm9yXHJcblx0ICogQHBhcmFtIHtudW1iZXJ9IFthU3RhcnRdIC0gdGhlIGluZGV4IHRvIHN0YXJ0IGF0XHJcblx0ICogQHJldHVybnMge2Jvb2xlYW59IHdoZXRoZXIgdGhlIGxpc3QgY29udGFpbnMgdGhlIG5vZGVcclxuXHQgKi9cclxuXHRQcm90b3R5cGUuaW5jbHVkZXMgPSBhcnJheUZ1bmN0aW9uKFwiaW5jbHVkZXNcIik7XHJcblxyXG5cdC8qKlxyXG5cdCAqIENhbGxzIHRoZSBmdW5jdGlvbiBmb3IgZWFjaCBub2RlLlxyXG5cdCAqXHJcblx0ICogQHBhcmFtIHtmdW5jdGlvbihOb2RlLG51bWJlcixOb2RlW10pOnZvaWR9IGFGdW5jdGlvbiAtIGNhbGxlZCB3aXRoIG5vZGUsIGluZGV4IGFuZCB0aGUgY29waWVkIGxpc3RcclxuXHQgKi9cclxuXHRQcm90b3R5cGUuZm9yRWFjaCA9IGFycmF5RnVuY3Rpb24oXCJmb3JFYWNoXCIpO1xyXG5cclxuXHQvKipcclxuXHQgKiBAcGFyYW0ge2Z1bmN0aW9uKE5vZGUsbnVtYmVyLE5vZGVbXSk6Kn0gYUZ1bmN0aW9uXHJcblx0ICogQHJldHVybnMge0FycmF5fSB0aGUgcmVzdWx0cywgYW4gYXJyYXkgYXMgdGhlIHJlc3VsdHMgYXJlIG5vdCBub2RlcyBhbnltb3JlXHJcblx0ICovXHJcblx0UHJvdG90eXBlLm1hcCA9IGFycmF5RnVuY3Rpb24oXCJtYXBcIik7XHJcblxyXG5cdC8qKlxyXG5cdCAqIEBwYXJhbSB7ZnVuY3Rpb24oTm9kZSxudW1iZXIsTm9kZVtdKTpib29sZWFufSBhRnVuY3Rpb25cclxuXHQgKiBAcmV0dXJucyB7Ym9vbGVhbn0gd2hldGhlciB0aGUgZnVuY3Rpb24gbWF0Y2hlcyBhdCBsZWFzdCBvbmUgbm9kZVxyXG5cdCAqL1xyXG5cdFByb3RvdHlwZS5zb21lID0gYXJyYXlGdW5jdGlvbihcInNvbWVcIik7XHJcblxyXG5cdC8qKlxyXG5cdCAqIEBwYXJhbSB7ZnVuY3Rpb24oTm9kZSxudW1iZXIsTm9kZVtdKTpib29sZWFufSBhRnVuY3Rpb25cclxuXHQgKiBAcmV0dXJucyB7Ym9vbGVhbn0gd2hldGhlciB0aGUgZnVuY3Rpb24gbWF0Y2hlcyBldmVyeSBub2RlXHJcblx0ICovXHJcblx0UHJvdG90eXBlLmV2ZXJ5ID0gYXJyYXlGdW5jdGlvbihcImV2ZXJ5XCIpO1xyXG5cclxuXHQvKipcclxuXHQgKiBAcGFyYW0ge2Z1bmN0aW9uKCosTm9kZSxudW1iZXIsTm9kZVtdKToqfSBhRnVuY3Rpb25cclxuXHQgKiBAcGFyYW0geyp9IFthSW5pdGlhbFZhbHVlXVxyXG5cdCAqIEByZXR1cm5zIHsqfSB0aGUgYWNjdW11bGF0ZWQgcmVzdWx0XHJcblx0ICovXHJcblx0UHJvdG90eXBlLnJlZHVjZSA9IGFycmF5RnVuY3Rpb24oXCJyZWR1Y2VcIik7XHJcblxyXG5cdC8qKlxyXG5cdCAqIEZpbHRlcnMgdGhlIGxpc3QuXHJcblx0ICpcclxuXHQgKiBVbmxpa2UgbWFwIHRoaXMga2VlcHMgdGhlIHR5cGUgb2YgdGhlIGxpc3QgLSBhIE5vZGVMaXN0IHJldHVybnMgYSBOb2RlTGlzdCwgYVxyXG5cdCAqIEhUTUxDb2xsZWN0aW9uIHJldHVybnMgYSBIVE1MQ29sbGVjdGlvbiAtIHNvIGEgZmlsdGVyZWQgbGlzdCBjYW4gYmUgdXNlZCBsaWtlXHJcblx0ICogYW55IG90aGVyIG9uZS4gVGhlIHJlc3VsdCBpcyBhIG5ldyBsaXN0LCBpdCBpcyBub3QgbGl2ZSBhbnltb3JlLlxyXG5cdCAqXHJcblx0ICogQHBhcmFtIHtmdW5jdGlvbihOb2RlLG51bWJlcixOb2RlW10pOmJvb2xlYW59IGFGdW5jdGlvblxyXG5cdCAqIEByZXR1cm5zIHtOb2RlTGlzdHxIVE1MQ29sbGVjdGlvbn0gdGhlIG1hdGNoaW5nIG5vZGVzXHJcblx0ICovXHJcblx0UHJvdG90eXBlLmZpbHRlciA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdGNvbnN0IHJlc3VsdCA9IEFycmF5LnByb3RvdHlwZS5maWx0ZXIuYXBwbHkoQXJyYXkuZnJvbSh0aGlzKSwgYXJndW1lbnRzKTtcclxuXHJcblx0XHRyZXR1cm4gdGhpcy5jb25zdHJ1Y3Rvci5mcm9tKHJlc3VsdCk7XHJcblx0fTtcclxuXHJcblx0LyoqXHJcblx0ICogQHJldHVybnMge05vZGV8dW5kZWZpbmVkfSB0aGUgZmlyc3Qgbm9kZSwgb3IgdW5kZWZpbmVkIHdoZW4gdGhlIGxpc3QgaXMgZW1wdHlcclxuXHQgKi9cclxuXHRQcm90b3R5cGUuZmlyc3QgPSBmdW5jdGlvbiAoKSB7XHJcblx0XHRpZiAodGhpcy5sZW5ndGggPiAwKSByZXR1cm4gdGhpc1swXTtcclxuXHR9O1xyXG5cclxuXHQvKipcclxuXHQgKiBAcmV0dXJucyB7Tm9kZXx1bmRlZmluZWR9IHRoZSBsYXN0IG5vZGUsIG9yIHVuZGVmaW5lZCB3aGVuIHRoZSBsaXN0IGlzIGVtcHR5XHJcblx0ICovXHJcblx0UHJvdG90eXBlLmxhc3QgPSBmdW5jdGlvbiAoKSB7XHJcblx0XHRpZiAodGhpcy5sZW5ndGggPiAwKSByZXR1cm4gdGhpc1t0aGlzLmxlbmd0aCAtIDFdO1xyXG5cdH07XHJcbn0pO1xyXG5leHBvcnQgZGVmYXVsdCBzdXBwb3J0OyIsImltcG9ydCBleHRlbmRQcm90b3R5cGUgZnJvbSBcIi4uLy4uL3V0aWxzL0V4dGVuZFByb3RvdHlwZVwiO1xuaW1wb3J0IERlbGVnYXRlckJ1aWxkZXIgZnJvbSBcIi4uLy4uL3V0aWxzL0RlbGVnYXRlckJ1aWxkZXJcIjtcbmltcG9ydCBMaXN0U3VwcG9ydCBmcm9tIFwiLi9MaXN0U3VwcG9ydFwiO1xuXG4vKipcbiAqIFNldHMgdXAgYSBkb20gbGlzdCB0eXBlIC0gTm9kZUxpc3Qgb3IgSFRNTENvbGxlY3Rpb24gLSB0aGUgc2FtZSB3YXkuXG4gKlxuICogVGhlIHR3byBvbmx5IGRpZmZlciBieSB0aGVpciBvd24gdHlwZSBhbmQgdGhlIGVsZW1lbnQgdHlwZSB0aGV5IGhvbGQsIHNvIHRoaXNcbiAqIGJ1aWxkcyBib3RoIGZyb20gdGhvc2UgdHdvIHBhcmFtZXRlcnM6IGl0IGFwcGxpZXMgTGlzdFN1cHBvcnQsIGFkZHMgYXBwbHlUbyxcbiAqIHZhbCBhbmQgdGhlIHN0YXRpYyBmcm9tLCBhbmQgd2lyZXMgdGhlIGRlbGVnYXRpb24gdGhhdCBsZXRzIGEgbGlzdCBmb3J3YXJkXG4gKiBldmVyeSBtZXRob2Qgb2YgaXRzIGVsZW1lbnRzLlxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IExpc3RUeXBlIC0gdGhlIGxpc3QgdHlwZSwgTm9kZUxpc3Qgb3IgSFRNTENvbGxlY3Rpb25cbiAqIEBwYXJhbSB7RnVuY3Rpb259IEVsZW1lbnRUeXBlIC0gdGhlIHR5cGUgb2YgdGhlIGl0ZW1zLCBOb2RlIG9yIEhUTUxFbGVtZW50XG4gKi9cbmNvbnN0IGJ1aWxkTGlzdFR5cGUgPSAoTGlzdFR5cGUsIEVsZW1lbnRUeXBlKSA9PiB7XG5cdGV4dGVuZFByb3RvdHlwZShMaXN0VHlwZSwgTGlzdFN1cHBvcnQpO1xuXG5cdC8qKlxuXHQgKiBBcHBsaWVzIGEgZnVuY3Rpb24gb3IgYSBtZXRob2QgdG8gZWFjaCBpdGVtIGFuZCBjb2xsZWN0cyB0aGUgcmVzdWx0cy5cblx0ICpcblx0ICogQSBmdW5jdGlvbiBpcyBjYWxsZWQgd2l0aCB0aGUgaXRlbSBmb2xsb3dlZCBieSB0aGUgZXh0cmEgYXJndW1lbnRzLiBBIHN0cmluZ1xuXHQgKiBpcyB0YWtlbiBhcyB0aGUgbmFtZSBvZiBhIG1ldGhvZCB0byBjYWxsIG9uIGVhY2ggaXRlbSB3aXRoIHRob3NlIGFyZ3VtZW50cy5cblx0ICogTnVsbCByZXN1bHRzIGFyZSBza2lwcGVkLlxuXHQgKlxuXHQgKiBAcGFyYW0ge0Z1bmN0aW9ufHN0cmluZ30gY2FsbGluZyAtIGEgZnVuY3Rpb24gdG8gY2FsbCwgb3IgdGhlIG5hbWUgb2YgYSBtZXRob2Rcblx0ICogQHBhcmFtIHsuLi4qfSB0aGVBcmd1bWVudHMgLSBwYXNzZWQgdG8gdGhlIGZ1bmN0aW9uIG9yIG1ldGhvZFxuXHQgKiBAcmV0dXJucyB7QXJyYXl9IHRoZSBjb2xsZWN0ZWQgcmVzdWx0c1xuXHQgKi9cblx0TGlzdFR5cGUucHJvdG90eXBlLmFwcGx5VG8gPSBmdW5jdGlvbiAoKSB7XG5cdFx0Y29uc3QgYXJncyA9IEFycmF5LmZyb20oYXJndW1lbnRzKTtcblx0XHRjb25zdCBjYWxsaW5nID0gYXJncy5zaGlmdCgpO1xuXHRcdGNvbnN0IGlzRnVuY3Rpb24gPSB0eXBlb2YgY2FsbGluZyA9PT0gXCJmdW5jdGlvblwiO1xuXHRcdGNvbnN0IHJlc3VsdHMgPSBbXTtcblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdGNvbnN0IG5vZGUgPSB0aGlzW2ldO1xuXHRcdFx0bGV0IHJlc3VsdDtcblx0XHRcdGlmIChpc0Z1bmN0aW9uKSByZXN1bHQgPSBjYWxsaW5nLmFwcGx5KG51bGwsIFtub2RlXS5jb25jYXQoYXJncykpO1xuXHRcdFx0ZWxzZSBpZiAodHlwZW9mIG5vZGVbY2FsbGluZ10gPT09IFwiZnVuY3Rpb25cIikgcmVzdWx0ID0gbm9kZVtjYWxsaW5nXS5hcHBseShub2RlLCBhcmdzKTtcblxuXHRcdFx0aWYgKHJlc3VsdCAhPSBudWxsKSByZXN1bHRzLnB1c2gocmVzdWx0KTtcblx0XHR9XG5cblx0XHRyZXR1cm4gcmVzdWx0cztcblx0fTtcblxuXHQvKipcblx0ICogUmVhZHMgb3Igd3JpdGVzIHRoZSB2YWx1ZSBvZiB0aGUgaXRlbXMuXG5cdCAqXG5cdCAqIFdpdGhvdXQgYXJndW1lbnRzIHRoZSB2YWx1ZXMgYXJlIGNvbGxlY3RlZCBpbnRvIGEgTWFwLCBrZXllZCBieSB0aGUgbmFtZSwgaWRcblx0ICogb3Igc2VsZWN0b3Igb2YgZWFjaCBpdGVtIC0gaXRlbXMgd2l0aG91dCBhIHZhbHVlIGFyZSBsZWZ0IG91dCwgc28gYW4gdW5jaGVja2VkXG5cdCAqIHJhZGlvIGRvZXMgbm90IG92ZXJ3cml0ZSB0aGUgc2VsZWN0ZWQgb25lIG9mIGl0cyBncm91cC4gV2l0aCBhcmd1bWVudHMgdGhlXG5cdCAqIHZhbHVlIGlzIHNldCBvbiBldmVyeSBpdGVtLlxuXHQgKlxuXHQgKiBAcGFyYW0gey4uLip9IFt0aGVWYWx1ZV0gLSB0aGUgdmFsdWUgdG8gc2V0IG9uIHRoZSBpdGVtc1xuXHQgKiBAcmV0dXJucyB7TWFwPHN0cmluZywqPnxMaXN0VHlwZX0gdGhlIHZhbHVlcyBieSBrZXksIG9yIHRoaXMgd2hlbiBhIHZhbHVlIHdhcyBzZXRcblx0ICovXG5cdExpc3RUeXBlLnByb3RvdHlwZS52YWwgPSBmdW5jdGlvbiAoKSB7XG5cdFx0aWYgKGFyZ3VtZW50cy5sZW5ndGggPT0gMCkge1xuXHRcdFx0Y29uc3QgcmVzdWx0ID0gbmV3IE1hcCgpO1xuXHRcdFx0Zm9yIChjb25zdCBub2RlIG9mIHRoaXMpIHtcblx0XHRcdFx0aWYgKHR5cGVvZiBub2RlLnZhbCA9PT0gXCJmdW5jdGlvblwiKSB7XG5cdFx0XHRcdFx0Y29uc3QgdmFsdWUgPSBub2RlLnZhbCgpO1xuXHRcdFx0XHRcdGlmICh2YWx1ZSAhPSBudWxsKSByZXN1bHQuc2V0KG5vZGUubmFtZSB8fCBub2RlLmlkIHx8IG5vZGUuc2VsZWN0b3IoKSwgdmFsdWUpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gcmVzdWx0O1xuXHRcdH0gZWxzZSB0aGlzLmFwcGx5VG8oXCJ2YWxcIiwgLi4uYXJndW1lbnRzKTtcblxuXHRcdHJldHVybiB0aGlzO1xuXHR9O1xuXG5cdC8qKlxuXHQgKiBCdWlsZHMgYSBsaXN0IGZyb20gbm9kZXMsIG90aGVyIGxpc3RzIGFuZCBhcnJheXMgb2YgdGhlbS5cblx0ICpcblx0ICogRXZlcnkgYXJndW1lbnQgdGhhdCBpcyBhbiBpdGVtIGlzIHRha2VuLCBhbiBpdGVyYWJsZSBpcyByZWFkIGl0ZW0gYnkgaXRlbSwgc29cblx0ICogYW55IG1peCBjYW4gYmUgcGFzc2VkLiBBbnl0aGluZyB0aGF0IGlzIG5vdCBhbiBpdGVtIGlzIGxlZnQgb3V0LiBUaGUgcmVzdWx0IGlzXG5cdCAqIGEgcGxhaW4gbGlzdCwgbm90IGEgbGl2ZSBvbmUuXG5cdCAqXG5cdCAqIEBwYXJhbSB7Li4uKEVsZW1lbnRUeXBlfEl0ZXJhYmxlKX0gdGhlSXRlbXNcblx0ICogQHJldHVybnMge0xpc3RUeXBlfSBhIG5ldyBsaXN0IG9mIHRoZSBpdGVtc1xuXHQgKi9cblx0TGlzdFR5cGUuZnJvbSA9IGZ1bmN0aW9uICgpIHtcblx0XHRjb25zdCBhcmdzID0gQXJyYXkuZnJvbShhcmd1bWVudHMpO1xuXHRcdGNvbnN0IGRhdGEgPSB7fTtcblx0XHRsZXQgY291bnRlciA9IDA7XG5cblx0XHR3aGlsZSAoYXJncy5sZW5ndGggPiAwKSB7XG5cdFx0XHRjb25zdCBhcmcgPSBhcmdzLnNoaWZ0KCk7XG5cdFx0XHRpZiAoYXJnICE9IG51bGwpIHtcblx0XHRcdFx0aWYgKGFyZyBpbnN0YW5jZW9mIEVsZW1lbnRUeXBlKSBkYXRhW2NvdW50ZXIrK10gPSB7IHZhbHVlOiBhcmcsIGVudW1lcmFibGU6IHRydWUgfTtcblx0XHRcdFx0ZWxzZSBpZiAodHlwZW9mIGFyZ1tTeW1ib2wuaXRlcmF0b3JdID09PSBcImZ1bmN0aW9uXCIpIHtcblx0XHRcdFx0XHRmb3IgKGxldCBpdGVtIG9mIGFyZykge1xuXHRcdFx0XHRcdFx0aWYgKGl0ZW0gaW5zdGFuY2VvZiBFbGVtZW50VHlwZSkgZGF0YVtjb3VudGVyKytdID0geyB2YWx1ZTogaXRlbSwgZW51bWVyYWJsZTogdHJ1ZSB9O1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGRhdGEubGVuZ3RoID0geyB2YWx1ZTogY291bnRlciB9O1xuXHRcdHJldHVybiBPYmplY3QuY3JlYXRlKExpc3RUeXBlLnByb3RvdHlwZSwgZGF0YSk7XG5cdH07XG5cblx0RGVsZWdhdGVyQnVpbGRlcihcblx0XHRmdW5jdGlvbiAoYUZ1bmN0aW9uTmFtZSwgdGhlQXJndW1lbnRzKSB7XG5cdFx0XHRsZXQgcmVzdWx0cyA9IFtdO1xuXHRcdFx0dGhpcy5mb3JFYWNoKChub2RlKSA9PiB7XG5cdFx0XHRcdGlmIChub2RlICYmIHR5cGVvZiBub2RlW2FGdW5jdGlvbk5hbWVdID09PSBcImZ1bmN0aW9uXCIpIHtcblx0XHRcdFx0XHRjb25zdCByZXN1bHQgPSBub2RlW2FGdW5jdGlvbk5hbWVdLmFwcGx5KG5vZGUsIHRoZUFyZ3VtZW50cyk7XG5cdFx0XHRcdFx0aWYgKHJlc3VsdCAhPSBudWxsKSB7XG5cdFx0XHRcdFx0XHRpZiAocmVzdWx0IGluc3RhbmNlb2YgTGlzdFR5cGUpIHJlc3VsdHMgPSByZXN1bHRzLmNvbmNhdChBcnJheS5mcm9tKHJlc3VsdCkpO1xuXHRcdFx0XHRcdFx0ZWxzZSByZXN1bHRzLnB1c2gocmVzdWx0KTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXG5cdFx0XHRpZiAocmVzdWx0cy5sZW5ndGggPT09IDApIHJldHVybiB1bmRlZmluZWQ7XG5cdFx0XHRlbHNlIGlmIChyZXN1bHRzWzBdIGluc3RhbmNlb2YgRWxlbWVudFR5cGUgfHwgcmVzdWx0c1swXSBpbnN0YW5jZW9mIExpc3RUeXBlKSByZXR1cm4gTGlzdFR5cGUuZnJvbShyZXN1bHRzKTtcblx0XHRcdGVsc2UgcmV0dXJuIHJlc3VsdHM7XG5cdFx0fSxcblx0XHRMaXN0VHlwZS5wcm90b3R5cGUsXG5cdFx0Tm9kZS5wcm90b3R5cGUsXG5cdFx0SFRNTEVsZW1lbnQucHJvdG90eXBlLFxuXHRcdEhUTUxJbnB1dEVsZW1lbnQucHJvdG90eXBlLFxuXHRcdEVsZW1lbnQucHJvdG90eXBlLFxuXHRcdEV2ZW50VGFyZ2V0LnByb3RvdHlwZSxcblx0KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGJ1aWxkTGlzdFR5cGU7XG4iLCJpbXBvcnQgRXh0ZW5kZXIgZnJvbSBcIi4uLy4uL3V0aWxzL0V4dGVuZGVyXCI7XHJcblxyXG4vKipcclxuICogQ29udGVudCBhY2NlcHRlZCBieSB0aGUgaW5zZXJ0IGZ1bmN0aW9ucy5cclxuICpcclxuICogQHR5cGVkZWYge05vZGV8Tm9kZUxpc3R8SFRNTENvbGxlY3Rpb258Q29udGVudFtdfHN0cmluZ30gQ29udGVudFxyXG4gKi9cclxuXHJcbi8qKlxyXG4gKiBOb3JtYWxpemVzIGNvbnRlbnQgdG8gYSBmbGF0IGxpc3Qgb2Ygbm9kZXMuXHJcbiAqXHJcbiAqIFN0cmluZ3MgYXJlIHBhcnNlZCB0byBub2RlcyBieSB0aGUgZ2xvYmFsIGNyZWF0ZSgpLCBsaXN0cyBhbmQgYXJyYXlzIGFyZSB0YWtlblxyXG4gKiBpdGVtIGJ5IGl0ZW0sIHNvIGFueSBtaXggb2YgdGhlbSBjYW4gYmUgcGFzc2VkLiBMaXN0cyBhcmUgcmVhZCBpbnRvIGFuIGFycmF5XHJcbiAqIGJlZm9yZSBhbnl0aGluZyBpcyBpbnNlcnRlZCwgYmVjYXVzZSBpbnNlcnRpbmcgYSBub2RlIHJlbW92ZXMgaXQgZnJvbSB0aGUgbGlzdFxyXG4gKiBpdCBjYW1lIGZyb20gLSBpdGVyYXRpbmcgdGhhdCBsaXN0IHdoaWxlIGluc2VydGluZyB3b3VsZCBza2lwIGV2ZXJ5IG90aGVyIG5vZGUuXHJcbiAqXHJcbiAqIFN0cmluZ3MgYXJlIG5vdCB0cmltbWVkIGFuZCBhbiBlbXB0eSBvbmUgaXMgYWNjZXB0ZWQ6IHVubGlrZSBldmVudCB0eXBlcyBvclxyXG4gKiBjbGFzcyBuYW1lcywgd2hpdGVzcGFjZSBpcyBjb250ZW50LiBcIiAgIFwiIGJlY29tZXMgYSB0ZXh0IG5vZGUsIFwiXCIgYmVjb21lcyBub1xyXG4gKiBub2RlIGF0IGFsbC4gT25seSB0aGUgYWJzZW5jZSBvZiBhbnkgYXJndW1lbnQgaXMgYW4gZXJyb3IuXHJcbiAqXHJcbiAqIEBwYXJhbSB7Li4uQ29udGVudH0gdGhlQ29udGVudFxyXG4gKiBAcmV0dXJucyB7Tm9kZVtdfSB0aGUgbm9kZXMsIGVtcHR5IHdoZW4gdGhlIGNvbnRlbnQgcHJvZHVjZWQgbm9uZVxyXG4gKiBAdGhyb3dzIHtFcnJvcn0gd2hlbiB0aGVyZSBpcyBubyBjb250ZW50IGF0IGFsbCBvciBhbiBpdGVtIGlzIG5vdCBjb250ZW50XHJcbiAqL1xyXG5jb25zdCB0b05vZGVzID0gZnVuY3Rpb24gKCkge1xyXG5cdGNvbnN0IGNvbnRlbnQgPSBBcnJheS5mcm9tKGFyZ3VtZW50cykuZmxhdChJbmZpbml0eSk7XHJcblx0aWYgKGNvbnRlbnQubGVuZ3RoID09PSAwKSB0aHJvdyBuZXcgRXJyb3IoXCJDb250ZW50IGlzIHJlcXVpcmVkIVwiKTtcclxuXHJcblx0cmV0dXJuIGNvbnRlbnRcclxuXHRcdC5tYXAoKGl0ZW0pID0+IHtcclxuXHRcdFx0aWYgKGl0ZW0gaW5zdGFuY2VvZiBOb2RlKSByZXR1cm4gaXRlbTtcclxuXHRcdFx0aWYgKGl0ZW0gaW5zdGFuY2VvZiBOb2RlTGlzdCB8fCBpdGVtIGluc3RhbmNlb2YgSFRNTENvbGxlY3Rpb24pIHJldHVybiBBcnJheS5mcm9tKGl0ZW0pO1xyXG5cdFx0XHRpZiAodHlwZW9mIGl0ZW0gPT09IFwic3RyaW5nXCIpIHJldHVybiBBcnJheS5mcm9tKGNyZWF0ZShpdGVtKSk7XHJcblxyXG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIGNvbnRlbnQhXCIpO1xyXG5cdFx0fSlcclxuXHRcdC5mbGF0KCk7XHJcbn07XHJcblxyXG5jb25zdCBzdXBwb3J0ID0gRXh0ZW5kZXIoXCJNYW5pcHVsYXRpb25TdXBwb3J0XCIsIFByb3RvdHlwZSA9PiB7XHJcblx0LyoqXHJcblx0ICogUmVtb3ZlcyBhbGwgY2hpbGQgbm9kZXMuXHJcblx0ICpcclxuXHQgKiBAcmV0dXJucyB7Tm9kZX0gdGhpc1xyXG5cdCAqL1xyXG5cdFByb3RvdHlwZS5lbXB0eSA9IGZ1bmN0aW9uKCl7XHJcblx0XHRjb25zdCBub2RlcyA9IHRoaXMuY2hpbGROb2RlcztcclxuXHRcdHdoaWxlKG5vZGVzLmxlbmd0aCAhPSAwKVx0XHRcdFxyXG5cdFx0XHRub2Rlc1swXS5yZW1vdmUodHJ1ZSk7XHJcblx0XHRcclxuXHRcdHJldHVybiB0aGlzO1xyXG5cdH07XHJcblx0XHJcblx0LyoqXHJcblx0ICogQHJldHVybnMge05vZGVMaXN0fSB0aGUgbGl2ZSBsaXN0IG9mIGNoaWxkIG5vZGVzXHJcblx0ICovXHJcblx0UHJvdG90eXBlLmNvbnRlbnQgPSBmdW5jdGlvbigpe1xyXG5cdFx0cmV0dXJuIHRoaXMuY2hpbGROb2RlcztcclxuXHR9O1x0XHJcblx0XHJcblx0LyoqXHJcblx0ICogR2V0cyBvciBzZXRzIHRoZSBtYXJrdXAgb2YgdGhpcyBub2RlLlxyXG5cdCAqXHJcblx0ICogaHRtbCgpIHJldHVybnMgdGhlIGlubmVySFRNTCwgaHRtbCh0cnVlKSB0aGUgb3V0ZXJIVE1MIGFuZCBodG1sKGZhbHNlKSB0aGVcclxuXHQgKiBpbm5lckhUTUwuIEFueSBvdGhlciBhcmd1bWVudCByZXBsYWNlcyBhbGwgY2hpbGRyZW4gYnkgdGhlIGdpdmVuIGNvbnRlbnQuXHJcblx0ICpcclxuXHQgKiBAcGFyYW0gey4uLihib29sZWFufENvbnRlbnQpfSB0aGVDb250ZW50IC0gbnVsbCBvciB1bmRlZmluZWQgdGhyb3dzXHJcblx0ICogQHJldHVybnMge3N0cmluZ3xOb2RlfSB0aGUgbWFya3VwLCBvciB0aGlzIHdoZW4gY29udGVudCB3YXMgc2V0XHJcblx0ICovXHJcblx0UHJvdG90eXBlLmh0bWwgPSBmdW5jdGlvbigpe1xyXG5cdFx0aWYoYXJndW1lbnRzLmxlbmd0aCA9PSAwKVxyXG5cdFx0XHRyZXR1cm4gdGhpcy5pbm5lckhUTUw7XHJcblx0XHRlbHNlIGlmKGFyZ3VtZW50cy5sZW5ndGggPT0gMSAmJiB0eXBlb2YgYXJndW1lbnRzWzBdID09PSBcImJvb2xlYW5cIilcclxuXHRcdFx0aWYoYXJndW1lbnRzWzBdKVxyXG5cdFx0XHRcdHJldHVybiB0aGlzLm91dGVySFRNTDtcclxuXHRcdFx0ZWxzZVxyXG5cdFx0XHRcdHJldHVybiB0aGlzLmlubmVySFRNTDtcclxuXHRcdGVsc2Uge1xyXG5cdFx0XHRjb25zdCBub2RlcyA9IHRvTm9kZXMoQXJyYXkuZnJvbShhcmd1bWVudHMpKTtcclxuXHRcdFx0dGhpcy5lbXB0eSgpO1xyXG5cdFx0XHRub2Rlcy5mb3JFYWNoKG5vZGUgPT4gdGhpcy5hcHBlbmRDaGlsZChub2RlKSk7XHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIHRoaXM7XHJcblx0fTtcclxuXHRcclxuXHQvKipcclxuXHQgKiBBcHBlbmRzIHRoZSBjb250ZW50IGFzIGxhc3QgY2hpbGRyZW4uXHJcblx0ICpcclxuXHQgKiBAcGFyYW0gey4uLkNvbnRlbnR9IHRoZUNvbnRlbnRcclxuXHQgKiBAcmV0dXJucyB7Tm9kZX0gdGhpc1xyXG5cdCAqIEB0aHJvd3Mge0Vycm9yfSBieSBpbnZhbGlkIGNvbnRlbnRcclxuXHQgKi9cclxuXHRQcm90b3R5cGUuYXBwZW5kID0gZnVuY3Rpb24oKXtcclxuXHRcdHRvTm9kZXMoQXJyYXkuZnJvbShhcmd1bWVudHMpKS5mb3JFYWNoKG5vZGUgPT4gdGhpcy5hcHBlbmRDaGlsZChub2RlKSk7XHJcblxyXG5cdFx0cmV0dXJuIHRoaXM7XHJcblx0fTtcclxuXHJcblx0LyoqXHJcblx0ICogSW5zZXJ0cyB0aGUgY29udGVudCBhcyBmaXJzdCBjaGlsZHJlbi5cclxuXHQgKlxyXG5cdCAqIEBwYXJhbSB7Li4uQ29udGVudH0gdGhlQ29udGVudFxyXG5cdCAqIEByZXR1cm5zIHtOb2RlfSB0aGlzXHJcblx0ICogQHRocm93cyB7RXJyb3J9IGJ5IGludmFsaWQgY29udGVudFxyXG5cdCAqL1xyXG5cdFByb3RvdHlwZS5wcmVwZW5kID0gZnVuY3Rpb24oKXtcclxuXHRcdGNvbnN0IG5vZGVzID0gdG9Ob2RlcyhBcnJheS5mcm9tKGFyZ3VtZW50cykpO1xyXG5cdFx0Y29uc3QgZmlyc3QgPSB0aGlzLmZpcnN0Q2hpbGQ7XHJcblx0XHRub2Rlcy5mb3JFYWNoKG5vZGUgPT4gdGhpcy5pbnNlcnRCZWZvcmUobm9kZSwgZmlyc3QpKTtcclxuXHJcblx0XHRyZXR1cm4gdGhpcztcclxuXHR9O1xyXG5cclxuXHQvKipcclxuXHQgKiBSZXBsYWNlcyBhIG5vZGUgYnkgdGhlIGdpdmVuIGNvbnRlbnQuXHJcblx0ICpcclxuXHQgKiBDYWxsZWQgd2l0aCBvbmUgYXJndW1lbnQsIHRoaXMgbm9kZSBpcyByZXBsYWNlZCB3aXRoaW4gaXRzIHBhcmVudCBub2RlLlxyXG5cdCAqIENhbGxlZCB3aXRoIG1vcmUsIHRoZSBmaXJzdCBvbmUgLSBhIGNoaWxkIG9mIHRoaXMgbm9kZSAtIGlzIHJlcGxhY2VkIGJ5IHRoZVxyXG5cdCAqIGNvbnRlbnQgZm9sbG93aW5nIGl0LlxyXG5cdCAqXHJcblx0ICogQHBhcmFtIHsuLi5Db250ZW50fSB0aGVDb250ZW50IC0gdGhlIG5ldyBjb250ZW50LCBvciB0aGUgb2xkIG5vZGUgZm9sbG93ZWQgYnkgdGhlIG5ldyBjb250ZW50XHJcblx0ICogQHJldHVybnMge05vZGV9IHRoaXMsIGV2ZW4gd2hlbiB0aGlzIG5vZGUgd2FzIHRoZSByZXBsYWNlZCBvbmVcclxuXHQgKiBAdGhyb3dzIHtFcnJvcn0gd2hlbiBjYWxsZWQgd2l0aG91dCBhcmd1bWVudHMgb3IgYnkgaW52YWxpZCBjb250ZW50XHJcblx0ICovXHJcblx0UHJvdG90eXBlLnJlcGxhY2UgPSBmdW5jdGlvbigpe1xyXG5cdFx0aWYoYXJndW1lbnRzLmxlbmd0aCA8IDEpXHJcblx0XHRcdHRocm93IG5ldyBFcnJvcihcIkluc3VmZmljaWVudCBhcmd1bWVudHMhIE9uZSBvciB0d28gbm9kZXMgcmVxdWlyZWQhXCIpO1xyXG5cclxuXHRcdGNvbnN0IHBhcmVudCA9IGFyZ3VtZW50cy5sZW5ndGggPT0gMSA/IHRoaXMucGFyZW50Tm9kZSA6IHRoaXM7XHJcblx0XHRjb25zdCBvbGROb2RlID0gYXJndW1lbnRzLmxlbmd0aCA9PSAxID8gdGhpcyA6IGFyZ3VtZW50c1swXTtcclxuXHRcdGNvbnN0IG5vZGVzID0gdG9Ob2Rlcyhhcmd1bWVudHMubGVuZ3RoID09IDEgPyBhcmd1bWVudHNbMF0gOiBBcnJheS5mcm9tKGFyZ3VtZW50cykuc2xpY2UoMSkpO1xyXG5cclxuXHRcdG5vZGVzLmZvckVhY2gobm9kZSA9PiBwYXJlbnQuaW5zZXJ0QmVmb3JlKG5vZGUsIG9sZE5vZGUpKTtcclxuXHRcdG9sZE5vZGUucmVtb3ZlKCk7XHJcblxyXG5cdFx0cmV0dXJuIHRoaXM7XHJcblx0fTtcclxuXHJcblx0LyoqXHJcblx0ICogSW5zZXJ0cyB0aGUgY29udGVudCBkaXJlY3RseSBhZnRlciB0aGlzIG5vZGUuXHJcblx0ICpcclxuXHQgKiBAcGFyYW0gey4uLkNvbnRlbnR9IHRoZUNvbnRlbnRcclxuXHQgKiBAcmV0dXJucyB7Tm9kZX0gdGhpc1xyXG5cdCAqIEB0aHJvd3Mge0Vycm9yfSB3aGVuIHRoaXMgbm9kZSBoYXMgbm8gcGFyZW50IG5vZGUgb3IgYnkgaW52YWxpZCBjb250ZW50XHJcblx0ICovXHJcblx0UHJvdG90eXBlLmFmdGVyID0gZnVuY3Rpb24oKXtcclxuXHRcdGlmKHRoaXMucGFyZW50Tm9kZSA9PSBudWxsKVxyXG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJDYW4ndCBpbnNlcnQgbm9kZXMgYWZ0ZXIgdGhpcyBub2RlISBQYXJlbnQgbm9kZSBub3QgYXZhaWxhYmxlIVwiKTtcclxuXHJcblx0XHRjb25zdCBwYXJlbnQgPSB0aGlzLnBhcmVudE5vZGU7XHJcblx0XHRjb25zdCBuZXh0ID0gdGhpcy5uZXh0U2libGluZztcclxuXHRcdHRvTm9kZXMoQXJyYXkuZnJvbShhcmd1bWVudHMpKS5mb3JFYWNoKG5vZGUgPT4gcGFyZW50Lmluc2VydEJlZm9yZShub2RlLCBuZXh0KSk7XHJcblxyXG5cdFx0cmV0dXJuIHRoaXM7XHJcblx0fTtcclxuXHJcblx0LyoqXHJcblx0ICogSW5zZXJ0cyB0aGUgY29udGVudCBkaXJlY3RseSBiZWZvcmUgdGhpcyBub2RlLlxyXG5cdCAqXHJcblx0ICogQHBhcmFtIHsuLi5Db250ZW50fSB0aGVDb250ZW50XHJcblx0ICogQHJldHVybnMge05vZGV9IHRoaXNcclxuXHQgKiBAdGhyb3dzIHtFcnJvcn0gd2hlbiB0aGlzIG5vZGUgaGFzIG5vIHBhcmVudCBub2RlIG9yIGJ5IGludmFsaWQgY29udGVudFxyXG5cdCAqL1xyXG5cdFByb3RvdHlwZS5iZWZvcmUgPSBmdW5jdGlvbigpe1xyXG5cdFx0aWYodGhpcy5wYXJlbnROb2RlID09IG51bGwpXHJcblx0XHRcdHRocm93IG5ldyBFcnJvcihcIkNhbid0IGluc2VydCBub2RlcyBiZWZvcmUgdGhpcyBub2RlISBQYXJlbnQgbm9kZSBub3QgYXZhaWxhYmxlIVwiKTtcclxuXHJcblx0XHRjb25zdCBwYXJlbnQgPSB0aGlzLnBhcmVudE5vZGU7XHJcblx0XHR0b05vZGVzKEFycmF5LmZyb20oYXJndW1lbnRzKSkuZm9yRWFjaChub2RlID0+IHBhcmVudC5pbnNlcnRCZWZvcmUobm9kZSwgdGhpcykpO1xyXG5cclxuXHRcdHJldHVybiB0aGlzO1xyXG5cdH07XHJcbn0pO1xyXG5leHBvcnQgZGVmYXVsdCBzdXBwb3J0OyIsImltcG9ydCBFeHRlbmRlciBmcm9tIFwiLi4vLi4vdXRpbHMvRXh0ZW5kZXJcIjtcclxuXHJcbmNvbnN0IFBBUkVOVFRPS0VOID0gXCI6cGFyZW50XCI7XHJcbmNvbnN0IFFVT1RFUyA9IFtcIlxcXCJcIiwgXCInXCJdO1xyXG5cclxuLyoqXHJcbiAqIFN0cmlwcyB0aGUgb3B0aW9uYWwgcXVvdGVzIGFyb3VuZCBhIHN1YiBzZWxlY3Rvci5cclxuICpcclxuICogUXVvdGluZyBpcyBub3QgbmVlZGVkIGFueW1vcmUsIGFzIHRoZSBzZWxlY3RvciBpcyByZWFkIGJ5IGNvdW50aW5nIGJyYWNrZXRzXHJcbiAqIGluc3RlYWQgb2YgbWF0Y2hpbmcgYSBwYXR0ZXJuLCBidXQgaXQgc3RheXMgc3VwcG9ydGVkLlxyXG4gKlxyXG4gKiBAcGFyYW0ge3N0cmluZ30gc3VicXVlcnlcclxuICogQHJldHVybnMge3N0cmluZ30gdGhlIHN1YiBzZWxlY3RvciwgZW1wdHkgd2hlbiB0aGVyZSBpcyBub25lXHJcbiAqL1xyXG5jb25zdCBjbGVhbnVwU3ViU2VsZWN0b3IgPSAoc3VicXVlcnkpID0+IHtcclxuXHRpZiAodHlwZW9mIHN1YnF1ZXJ5ICE9PSBcInN0cmluZ1wiKSByZXR1cm4gXCJcIjtcclxuXHRzdWJxdWVyeSA9IHN1YnF1ZXJ5LnRyaW0oKTtcclxuXHRpZiAoKHN1YnF1ZXJ5LnN0YXJ0c1dpdGgoJ1wiJykgJiYgc3VicXVlcnkuZW5kc1dpdGgoJ1wiJykpIHx8IChzdWJxdWVyeS5zdGFydHNXaXRoKFwiJ1wiKSAmJiBzdWJxdWVyeS5lbmRzV2l0aChcIidcIikpKSBzdWJxdWVyeSA9IHN1YnF1ZXJ5LnN1YnN0cmluZygxLCBzdWJxdWVyeS5sZW5ndGggLSAxKTtcclxuXHRyZXR1cm4gc3VicXVlcnkudHJpbSgpO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIEZpbmRzIHRoZSA6cGFyZW50IHRva2VuIG9mIGEgc2VsZWN0b3IuXHJcbiAqXHJcbiAqIE9ubHkgYSB0b2tlbiBvbiBicmFja2V0IGxldmVsIHplcm8gYW5kIG91dHNpZGUgb2YgcXVvdGVzIGNvdW50cywgc28gbmVpdGhlclxyXG4gKiBbZGF0YT1cIjpwYXJlbnRcIl0gbm9yIDpub3QoOnBhcmVudCkgaXMgdGFrZW4gZm9yIG9uZS5cclxuICpcclxuICogQHBhcmFtIHtzdHJpbmd9IGFTZWxlY3RvclxyXG4gKiBAcmV0dXJucyB7bnVtYmVyfSB0aGUgaW5kZXggb2YgdGhlIHRva2VuLCBvciAtMVxyXG4gKi9cclxuY29uc3QgaW5kZXhPZlBhcmVudFRva2VuID0gKGFTZWxlY3RvcikgPT4ge1xyXG5cdGxldCBxdW90ZSA9IG51bGw7XHJcblx0bGV0IGRlcHRoID0gMDtcclxuXHRmb3IgKGxldCBpID0gMDsgaSA8IGFTZWxlY3Rvci5sZW5ndGg7IGkrKykge1xyXG5cdFx0Y29uc3QgY2hhciA9IGFTZWxlY3RvcltpXTtcclxuXHRcdGlmIChxdW90ZSkge1xyXG5cdFx0XHRpZiAoY2hhciA9PT0gcXVvdGUgJiYgYVNlbGVjdG9yW2kgLSAxXSAhPT0gXCJcXFxcXCIpIHF1b3RlID0gbnVsbDtcclxuXHRcdH0gZWxzZSBpZiAoUVVPVEVTLmluY2x1ZGVzKGNoYXIpKSBxdW90ZSA9IGNoYXI7XHJcblx0XHRlbHNlIGlmIChjaGFyID09PSBcIihcIikgZGVwdGgrKztcclxuXHRcdGVsc2UgaWYgKGNoYXIgPT09IFwiKVwiKSBkZXB0aC0tO1xyXG5cdFx0ZWxzZSBpZiAoZGVwdGggPT09IDAgJiYgYVNlbGVjdG9yLnN0YXJ0c1dpdGgoUEFSRU5UVE9LRU4sIGkpKSByZXR1cm4gaTtcclxuXHR9XHJcblxyXG5cdHJldHVybiAtMTtcclxufTtcclxuXHJcbi8qKlxyXG4gKiBSZWFkcyBhIGJyYWNrZXQgZ3JvdXAgYnkgY291bnRpbmcgYnJhY2tldHMsIHNvIGEgbmVzdGVkIGdyb3VwIGxpa2VcclxuICogZGl2OmhhcyhwKTpub3Qoc3BhbikgaXMgcmVhZCBhcyBhIHdob2xlLlxyXG4gKlxyXG4gKiBAcGFyYW0ge3N0cmluZ30gYVNlbGVjdG9yXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSBhU3RhcnQgLSB0aGUgaW5kZXggb2YgdGhlIG9wZW5pbmcgYnJhY2tldFxyXG4gKiBAcmV0dXJucyB7e2NvbnRlbnQ6IHN0cmluZywgZW5kOiBudW1iZXJ9fSB0aGUgY29udGVudCBvZiB0aGUgZ3JvdXAgYW5kIHRoZSBpbmRleCBiZWhpbmQgaXRcclxuICogQHRocm93cyB7RXJyb3J9IHdoZW4gdGhlIGdyb3VwIGlzIG5vdCBjbG9zZWRcclxuICovXHJcbmNvbnN0IHJlYWRHcm91cCA9IChhU2VsZWN0b3IsIGFTdGFydCkgPT4ge1xyXG5cdGxldCBxdW90ZSA9IG51bGw7XHJcblx0bGV0IGRlcHRoID0gMDtcclxuXHRmb3IgKGxldCBpID0gYVN0YXJ0OyBpIDwgYVNlbGVjdG9yLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRjb25zdCBjaGFyID0gYVNlbGVjdG9yW2ldO1xyXG5cdFx0aWYgKHF1b3RlKSB7XHJcblx0XHRcdGlmIChjaGFyID09PSBxdW90ZSAmJiBhU2VsZWN0b3JbaSAtIDFdICE9PSBcIlxcXFxcIikgcXVvdGUgPSBudWxsO1xyXG5cdFx0fSBlbHNlIGlmIChRVU9URVMuaW5jbHVkZXMoY2hhcikpIHF1b3RlID0gY2hhcjtcclxuXHRcdGVsc2UgaWYgKGNoYXIgPT09IFwiKFwiKSBkZXB0aCsrO1xyXG5cdFx0ZWxzZSBpZiAoY2hhciA9PT0gXCIpXCIgJiYgLS1kZXB0aCA9PT0gMCkgcmV0dXJuIHsgY29udGVudDogYVNlbGVjdG9yLnN1YnN0cmluZyhhU3RhcnQgKyAxLCBpKSwgZW5kOiBpICsgMSB9O1xyXG5cdH1cclxuXHJcblx0dGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBxdWVyeSFcIik7XHJcbn07XHJcblxyXG4vKipcclxuICogU3BsaXRzIGEgc2VsZWN0b3IgYXQgaXRzIDpwYXJlbnQgdG9rZW4uXHJcbiAqXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBhU2VsZWN0b3JcclxuICogQHJldHVybnMge3twcmVmaXg6IHN0cmluZywgc2VsZWN0b3I6IHN0cmluZywgc3VmZml4OiBzdHJpbmd9fG51bGx9IHRoZSBwYXJ0cywgb3IgbnVsbCB3aGVuIHRoZXJlIGlzIG5vIHRva2VuXHJcbiAqIEB0aHJvd3Mge0Vycm9yfSB3aGVuIHRoZSBicmFja2V0IGdyb3VwIG9mIHRoZSB0b2tlbiBpcyBub3QgY2xvc2VkXHJcbiAqL1xyXG5jb25zdCBzcGxpdFBhcmVudFF1ZXJ5ID0gKGFTZWxlY3RvcikgPT4ge1xyXG5cdGNvbnN0IGluZGV4ID0gaW5kZXhPZlBhcmVudFRva2VuKGFTZWxlY3Rvcik7XHJcblx0aWYgKGluZGV4IDwgMCkgcmV0dXJuIG51bGw7XHJcblxyXG5cdGNvbnN0IGFmdGVyID0gaW5kZXggKyBQQVJFTlRUT0tFTi5sZW5ndGg7XHJcblx0Y29uc3QgZ3JvdXAgPSBhU2VsZWN0b3JbYWZ0ZXJdID09PSBcIihcIiA/IHJlYWRHcm91cChhU2VsZWN0b3IsIGFmdGVyKSA6IHsgY29udGVudDogXCJcIiwgZW5kOiBhZnRlciB9O1xyXG5cclxuXHRyZXR1cm4ge1xyXG5cdFx0cHJlZml4OiBhU2VsZWN0b3Iuc3Vic3RyaW5nKDAsIGluZGV4KS50cmltKCksXHJcblx0XHRzZWxlY3RvcjogY2xlYW51cFN1YlNlbGVjdG9yKGdyb3VwLmNvbnRlbnQpLFxyXG5cdFx0c3VmZml4OiBhU2VsZWN0b3Iuc3Vic3RyaW5nKGdyb3VwLmVuZCkudHJpbSgpXHJcblx0fTtcclxufTtcclxuXHJcbi8qKlxyXG4gKiBFeGVjdXRlcyBhIHNlbGVjdG9yLCByZXNvbHZpbmcgdGhlIDpwYXJlbnQgcHNldWRvIHNlbGVjdG9yLlxyXG4gKlxyXG4gKiA6cGFyZW50IHJldHVybnMgdGhlIHBhcmVudCBvZiB0aGUgZWxlbWVudCwgOnBhcmVudChzZWxlY3RvcikgdGhlIG5leHQgYW5jZXN0b3JcclxuICogbWF0Y2hpbmcgdGhlIHNlbGVjdG9yLiBFdmVyeXRoaW5nIGJlZm9yZSB0aGUgdG9rZW4gc2VsZWN0cyB0aGUgZWxlbWVudHMgdG9cclxuICogc3RhcnQgZnJvbSwgZXZlcnl0aGluZyBiZWhpbmQgaXQgaXMgc2VhcmNoZWQgd2l0aGluIHRoZSBwYXJlbnRzIGZvdW5kLlxyXG4gKlxyXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBhRWxlbWVudFxyXG4gKiBAcGFyYW0ge3N0cmluZ30gYVNlbGVjdG9yXHJcbiAqIEByZXR1cm5zIHtOb2RlTGlzdHx1bmRlZmluZWR9IHRoZSByZXN1bHQsIHVuZGVmaW5lZCB3aGVuIGEgc3RlcCBmb3VuZCBub3RoaW5nXHJcbiAqL1xyXG5jb25zdCBxdWVyeUV4ZWN1dGVyID0gZnVuY3Rpb24gKGFFbGVtZW50LCBhU2VsZWN0b3IpIHtcclxuXHRjb25zdCBxdWVyeSA9IHNwbGl0UGFyZW50UXVlcnkoYVNlbGVjdG9yKTtcclxuXHRpZiAoIXF1ZXJ5KSByZXR1cm4gYUVsZW1lbnQucXVlcnlTZWxlY3RvckFsbChhU2VsZWN0b3IpO1xyXG5cclxuXHRsZXQgcmVzdWx0ID0gYUVsZW1lbnQ7XHJcblx0aWYgKHF1ZXJ5LnByZWZpeC5sZW5ndGggPiAwKSB7XHJcblx0XHRyZXN1bHQgPSBhRWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKHF1ZXJ5LnByZWZpeCk7XHJcblx0XHRpZiAocmVzdWx0Lmxlbmd0aCA9PSAwKSByZXR1cm47XHJcblx0fVxyXG5cclxuXHRyZXN1bHQgPSByZXN1bHQucGFyZW50KHF1ZXJ5LnNlbGVjdG9yLmxlbmd0aCA+IDAgPyBxdWVyeS5zZWxlY3RvciA6IG51bGwpO1xyXG5cdGlmICghcmVzdWx0KSByZXR1cm47XHJcblxyXG5cdHJldHVybiBxdWVyeS5zdWZmaXgubGVuZ3RoID4gMCA/IHJlc3VsdC5maW5kKHF1ZXJ5LnN1ZmZpeCkgOiByZXN1bHQ7XHJcbn07XHJcblxyXG4vKipcclxuICogTm9ybWFsaXplcyBzZWxlY3RvcnMgdG8gYSBsaXN0IG9mIG5vbiBlbXB0eSBzdHJpbmdzLlxyXG4gKlxyXG4gKiBFbXB0eSBzZWxlY3RvcnMgYXJlIHNraXBwZWQgcmF0aGVyIHRoYW4gdGhyb3duIGF0LCBvdGhlciB0aGFuIGluIHRoZSBzaWJsaW5nXHJcbiAqIGZ1bmN0aW9ucyBmb3IgZXZlbnQgdHlwZXMgYW5kIGNsYXNzIG5hbWVzOiBhbiBlbXB0eSBzZWxlY3RvciBjYXJyaWVzIG5vIGludGVudFxyXG4gKiBhbmQganVzdCBjb250cmlidXRlcyBub3RoaW5nLCB3aGlsZSBhIG5vbiBzdHJpbmcgaXMgYSBtaXN0YWtlIGFuZCB0aHJvd3MuXHJcbiAqIFNlbGVjdG9ycyBhcmUgbm90IHNwbGl0LCBjb21tYSBzZXBhcmF0ZWQgbGlzdHMgYXJlIGxlZnQgZm9yIHF1ZXJ5U2VsZWN0b3JBbGwuXHJcbiAqXHJcbiAqIEBwYXJhbSB7c3RyaW5nfEl0ZXJhYmxlPHN0cmluZz59IHRoZVNlbGVjdG9yc1xyXG4gKiBAcmV0dXJucyB7c3RyaW5nW119IHRoZSB0cmltbWVkIHNlbGVjdG9ycywgZW1wdHkgb25lcyByZW1vdmVkXHJcbiAqIEB0aHJvd3Mge0Vycm9yfSB3aGVuIHRoZXJlIGlzIG5vIHNlbGVjdG9yIG9yIG9uZSBpcyBub3QgYSBzdHJpbmdcclxuICovXHJcbmNvbnN0IHRvU2VsZWN0b3IgPSBmdW5jdGlvbiAodGhlU2VsZWN0b3JzKSB7XHJcblx0aWYodGhlU2VsZWN0b3JzID09IG51bGwpIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgcXVlcnkhXCIpO1xyXG5cclxuXHRjb25zdCBzZWxlY3RvcnMgPSB0eXBlb2YgdGhlU2VsZWN0b3JzID09PSBcInN0cmluZ1wiID8gW3RoZVNlbGVjdG9yc10gOiBBcnJheS5mcm9tKHRoZVNlbGVjdG9ycyk7XHJcblxyXG5cdHJldHVybiBzZWxlY3RvcnNcclxuXHRcdC5tYXAoKHNlbGVjdG9yKSA9PiB7XHJcblx0XHRcdFx0aWYodHlwZW9mIHNlbGVjdG9yICE9PSBcInN0cmluZ1wiKSB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIHF1ZXJ5IVwiKTtcclxuXHRcdFx0XHRyZXR1cm4gc2VsZWN0b3IudHJpbSgpO1xyXG5cdFx0XHR9KVxyXG5cdFx0LmZpbHRlcigoc2VsZWN0b3IpID0+IHNlbGVjdG9yLmxlbmd0aCA+IDApO1xyXG59XHJcblxyXG5cclxuY29uc3Qgc3VwcG9ydCA9IEV4dGVuZGVyKFwiUXVlcnlTdXBwb3J0XCIsIChQcm90b3R5cGUpID0+IHtcclxuXHQvKipcclxuXHQgKiBTZWFyY2hlcyBub2RlcyBieSBvbmUgb3IgbW9yZSBzZWxlY3RvcnMuXHJcblx0ICpcclxuXHQgKiBTZWxlY3RvciBsaXN0cyBzZXBhcmF0ZWQgYnkgY29tbWEgYXJlIGxlZnQgdG8gcXVlcnlTZWxlY3RvckFsbCwgd2hpY2gga25vd3NcclxuXHQgKiB0aGVtIGFuZCBnZXRzIHRoZSBjb21tYXMgaW5zaWRlIGJyYWNrZXRzIGFuZCBxdW90ZXMgcmlnaHQuIFRoZSByZXN1bHRzIG9mXHJcblx0ICogc2V2ZXJhbCBzZWxlY3RvcnMgYXJlIGNvbGxlY3RlZCBpbiB0aGUgb3JkZXIgdGhleSB3ZXJlIGdpdmVuLCB3aXRob3V0XHJcblx0ICogcmVtb3ZpbmcgdGhlIG5vZGVzIGEgc2Vjb25kIHNlbGVjdG9yIGZpbmRzIGFnYWluLlxyXG5cdCAqXHJcblx0ICogQHBhcmFtIHsuLi5zdHJpbmd9IHRoZVNlbGVjdG9ycyAtIHNlbGVjdG9ycywgZW1wdHkgb25lcyBhcmUgc2tpcHBlZFxyXG5cdCAqIEByZXR1cm5zIHtOb2RlTGlzdH0gdGhlIG5vZGVzIGZvdW5kLCBlbXB0eSB3aGVuIHRoZXJlIGFyZSBub25lXHJcblx0ICogQHRocm93cyB7RXJyb3J9IGJ5IGEgc2VsZWN0b3IgYmVzaWRlIGEgc3RyaW5nXHJcblx0ICovXHJcblx0UHJvdG90eXBlLmZpbmQgPSBmdW5jdGlvbiAoKSB7XHJcblx0XHRjb25zdCBub2RlcyA9IFtdO1xyXG5cdFx0Y29uc3Qgc2VsZWN0b3JzID0gdG9TZWxlY3Rvcihhcmd1bWVudHMpO1xyXG5cdFx0Zm9yKGxldCBzZWxlY3RvciBvZiBzZWxlY3RvcnMpe1xyXG5cdFx0XHRjb25zdCByZXN1bHQgPSBxdWVyeUV4ZWN1dGVyKHRoaXMsIHNlbGVjdG9yKTtcclxuXHRcdFx0aWYgKHJlc3VsdCkgbm9kZXMucHVzaChyZXN1bHQpO1xyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiBOb2RlTGlzdC5mcm9tKC4uLm5vZGVzKTtcclxuXHR9O1xyXG5cclxuXHQvKipcclxuXHQgKiBDaGVja3Mgd2hldGhlciB0aGlzIG5vZGUgbWF0Y2hlcyBhdCBsZWFzdCBvbmUgb2YgdGhlIHNlbGVjdG9ycy5cclxuXHQgKlxyXG5cdCAqIEEgRG9jdW1lbnQgYW5kIGEgRG9jdW1lbnRGcmFnbWVudCBuZXZlciBtYXRjaCwgYXMgdGhleSBjYW4gbm90IGJlIHNlbGVjdGVkIC1cclxuXHQgKiB0aGF0IGFsc28gY292ZXJzIGEgU2hhZG93Um9vdCwgd2hpY2ggaXMgYSBEb2N1bWVudEZyYWdtZW50LlxyXG5cdCAqXHJcblx0ICogQHBhcmFtIHsuLi4oc3RyaW5nfHN0cmluZ1tdKX0gdGhlU2VsZWN0b3JzIC0gc2VsZWN0b3JzLCBnaXZlbiBvbmUgYnkgb25lIG9yIGFzIGEgbGlzdFxyXG5cdCAqIEByZXR1cm5zIHtib29sZWFufSB3aGV0aGVyIG9uZSBvZiB0aGUgc2VsZWN0b3JzIG1hdGNoZXNcclxuXHQgKiBAdGhyb3dzIHtET01FeGNlcHRpb259IGJ5IGFuIGludmFsaWQgc2VsZWN0b3JcclxuXHQgKi9cclxuXHRQcm90b3R5cGUuaXMgPSBmdW5jdGlvbiAoKSB7XHJcblx0XHRpZiAodGhpcyBpbnN0YW5jZW9mIERvY3VtZW50IHx8IHRoaXMgaW5zdGFuY2VvZiBEb2N1bWVudEZyYWdtZW50KSByZXR1cm4gZmFsc2U7XHJcblx0XHRlbHNlIGlmIChhcmd1bWVudHMubGVuZ3RoID09IDEpIHtcclxuXHRcdFx0aWYgKHR5cGVvZiBhcmd1bWVudHNbMF0gPT09IFwic3RyaW5nXCIpIHJldHVybiB0aGlzLm1hdGNoZXMoYXJndW1lbnRzWzBdKTtcclxuXHRcdFx0ZWxzZSBpZiAodHlwZW9mIGFyZ3VtZW50c1swXS5sZW5ndGggPT09IFwibnVtYmVyXCIpIHtcclxuXHRcdFx0XHRsZXQgZmlsdGVyID0gYXJndW1lbnRzWzBdO1xyXG5cdFx0XHRcdGZvciAobGV0IGkgPSAwOyBpIDwgZmlsdGVyLmxlbmd0aDsgaSsrKSBpZiAodGhpcy5tYXRjaGVzKGZpbHRlcltpXSkpIHJldHVybiB0cnVlO1xyXG5cdFx0XHR9XHJcblx0XHR9IGVsc2UgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSByZXR1cm4gdGhpcy5pcyhBcnJheS5mcm9tKGFyZ3VtZW50cykpO1xyXG5cclxuXHRcdHJldHVybiBmYWxzZTtcclxuXHR9O1xyXG5cclxuXHQvKipcclxuXHQgKiBSZXR1cm5zIHRoZSBwYXJlbnQgb2YgdGhpcyBub2RlLCBvciB0aGUgbmV4dCBhbmNlc3RvciBtYXRjaGluZyBhIHNlbGVjdG9yLlxyXG5cdCAqXHJcblx0ICogQW4gaW52YWxpZCBzZWxlY3RvciBpcyBub3QgY2F1Z2h0OiBpdCB3b3VsZCByZXR1cm4gdGhlIHBhcmVudCByZWFjaGVkIHNvIGZhcixcclxuXHQgKiB3aGljaCBpcyBpbmRpc3Rpbmd1aXNoYWJsZSBmcm9tIGEgbWF0Y2gsIHdoaWxlIGEgc2VsZWN0b3IgbWF0Y2hpbmcgbm90aGluZ1xyXG5cdCAqIGNvcnJlY3RseSByZXR1cm5zIG51bGwuIExldHRpbmcgaXQgdGhyb3cga2VlcHMgdGhvc2UgdHdvIGFwYXJ0LlxyXG5cdCAqXHJcblx0ICogQHBhcmFtIHtzdHJpbmd8Ym9vbGVhbn0gW3NlbGVjdG9yXSAtIGEgc2VsZWN0b3IgdG8gbG9vayBmb3IsIG9yIHRoZSBpZ25vcmVTaGFkb3dSb290IGZsYWdcclxuXHQgKiBAcGFyYW0ge2Jvb2xlYW59IFtpZ25vcmVTaGFkb3dSb290XSAtIGNvbnRpbnVlIGF0IHRoZSBob3N0IG9mIGEgc2hhZG93IHJvb3QgaW5zdGVhZCBvZiBzdG9wcGluZ1xyXG5cdCAqIEByZXR1cm5zIHtOb2RlfG51bGx9IHRoZSBwYXJlbnQsIHRoZSBtYXRjaGluZyBhbmNlc3Rvciwgb3IgbnVsbCB3aGVuIHRoZXJlIGlzIG5vbmVcclxuXHQgKiBAdGhyb3dzIHtET01FeGNlcHRpb259IGJ5IGFuIGludmFsaWQgc2VsZWN0b3JcclxuXHQgKi9cclxuXHRQcm90b3R5cGUucGFyZW50ID0gZnVuY3Rpb24gKHNlbGVjdG9yLCBpZ25vcmVTaGFkb3dSb290KSB7XHJcblx0XHRpZiAoIXRoaXMucGFyZW50Tm9kZSkgcmV0dXJuIG51bGw7XHJcblx0XHRpZ25vcmVTaGFkb3dSb290ID0gdHlwZW9mIHNlbGVjdG9yID09PSBcImJvb2xlYW5cIiA/IHNlbGVjdG9yIDogaWdub3JlU2hhZG93Um9vdDtcclxuXHRcdHNlbGVjdG9yID0gdHlwZW9mIHNlbGVjdG9yID09PSBcInN0cmluZ1wiID8gc2VsZWN0b3IgOiBudWxsO1xyXG5cclxuXHRcdGxldCBwYXJlbnQgPSB0aGlzLnBhcmVudE5vZGU7XHJcblx0XHRpZiAocGFyZW50IGluc3RhbmNlb2YgU2hhZG93Um9vdCAmJiBpZ25vcmVTaGFkb3dSb290KSBwYXJlbnQgPSBwYXJlbnQuaG9zdDtcclxuXHJcblx0XHRpZiAoc2VsZWN0b3IpIHJldHVybiBwYXJlbnQuaXMoc2VsZWN0b3IpID8gcGFyZW50IDogcGFyZW50LnBhcmVudChzZWxlY3RvciwgaWdub3JlU2hhZG93Um9vdCk7XHJcblxyXG5cdFx0cmV0dXJuIHBhcmVudDtcclxuXHR9O1xyXG5cclxuXHQvKipcclxuXHQgKiBDb2xsZWN0cyB0aGUgYW5jZXN0b3JzIG9mIHRoaXMgbm9kZSwgZnJvbSB0aGUgbmVhcmVzdCBvbmUgdXB3YXJkcy5cclxuXHQgKlxyXG5cdCAqIFdpdGggYSBzZWxlY3RvciBvbmx5IHRoZSBtYXRjaGluZyBhbmNlc3RvcnMgYXJlIGNvbGxlY3RlZCwgYXMgZXZlcnkgc3RlcFxyXG5cdCAqIHdhbGtzIHVwIHRvIHRoZSBuZXh0IG1hdGNoLlxyXG5cdCAqXHJcblx0ICogQHBhcmFtIHtzdHJpbmd8Ym9vbGVhbn0gW3NlbGVjdG9yXSAtIGEgc2VsZWN0b3IgdG8gbG9vayBmb3IsIG9yIHRoZSBpZ25vcmVTaGFkb3dSb290IGZsYWdcclxuXHQgKiBAcGFyYW0ge2Jvb2xlYW59IFtpZ25vcmVTaGFkb3dSb290XSAtIGNvbnRpbnVlIGF0IHRoZSBob3N0IG9mIGEgc2hhZG93IHJvb3QgaW5zdGVhZCBvZiBzdG9wcGluZ1xyXG5cdCAqIEByZXR1cm5zIHtOb2RlTGlzdH0gdGhlIGFuY2VzdG9ycywgZW1wdHkgd2hlbiB0aGVyZSBhcmUgbm9uZVxyXG5cdCAqIEB0aHJvd3Mge0RPTUV4Y2VwdGlvbn0gYnkgYW4gaW52YWxpZCBzZWxlY3RvclxyXG5cdCAqL1xyXG5cdFByb3RvdHlwZS5wYXJlbnRzID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0Y29uc3QgcmVzdWx0ID0gbmV3IEFycmF5KCk7XHJcblx0XHRsZXQgcGFyZW50ID0gUHJvdG90eXBlLnBhcmVudC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG5cdFx0d2hpbGUgKHBhcmVudCkge1xyXG5cdFx0XHRyZXN1bHQucHVzaChwYXJlbnQpO1xyXG5cdFx0XHRwYXJlbnQgPSBQcm90b3R5cGUucGFyZW50LmFwcGx5KHBhcmVudCwgYXJndW1lbnRzKTtcclxuXHRcdH1cclxuXHJcblx0XHRyZXR1cm4gTm9kZUxpc3QuZnJvbShyZXN1bHQpO1xyXG5cdH07XHJcblxyXG5cdC8qKlxyXG5cdCAqIEJ1aWxkcyBhIHNlbGVjdG9yIGFkZHJlc3NpbmcgdGhpcyBub2RlLlxyXG5cdCAqXHJcblx0ICogQW4gaWQgZW5kcyB0aGUgc2VsZWN0b3IsIGFzIGl0IGFscmVhZHkgaWRlbnRpZmllcyB0aGUgbm9kZS4gT3RoZXJ3aXNlIHRoZSB0YWdcclxuXHQgKiBuYW1lIGlzIHVzZWQgYW5kIHRoZSBwYXRoIGNvbnRpbnVlcyBhdCB0aGUgcGFyZW50LiBBIHBvc2l0aW9uIGlzIG9ubHkgYWRkZWRcclxuXHQgKiB3aGVuIHRoZSBwYXJlbnQgaGFzIG1vcmUgdGhhbiBvbmUgZWxlbWVudCBjaGlsZCwgYW5kIGl0IGNvdW50cyBhbGwgb2YgdGhlbSAtXHJcblx0ICogdGhhdCBpcyB3aGF0IDpudGgtY2hpbGQgZG9lcywgdW5saWtlIDpudGgtb2YtdHlwZS5cclxuXHQgKlxyXG5cdCAqIFRoZSBpZCBpcyBub3QgZXNjYXBlZCwgc28gYW4gaWQgbmVlZGluZyBpdCBnaXZlcyBhbiBpbnZhbGlkIHNlbGVjdG9yLlxyXG5cdCAqXHJcblx0ICogQHJldHVybnMge3N0cmluZ3x1bmRlZmluZWR9IHRoZSBzZWxlY3RvciwgdW5kZWZpbmVkIGZvciBhIERvY3VtZW50IG9yIERvY3VtZW50RnJhZ21lbnRcclxuXHQgKi9cclxuXHRQcm90b3R5cGUuc2VsZWN0b3IgPSBmdW5jdGlvbiAoKSB7XHJcblx0XHRpZiAodGhpcyBpbnN0YW5jZW9mIERvY3VtZW50IHx8IHRoaXMgaW5zdGFuY2VvZiBEb2N1bWVudEZyYWdtZW50KSByZXR1cm4gdW5kZWZpbmVkO1xyXG5cdFx0ZWxzZSBpZiAodGhpcy5pZCkgcmV0dXJuIFwiI1wiICsgdGhpcy5pZDtcclxuXHRcdGVsc2Uge1xyXG5cdFx0XHRsZXQgc2VsZWN0b3IgPSB0aGlzLnRhZ05hbWUudG9Mb3dlckNhc2UoKTtcclxuXHRcdFx0Y29uc3QgcGFyZW50ID0gdGhpcy5wYXJlbnQoKTtcclxuXHRcdFx0aWYgKHBhcmVudCkge1xyXG5cdFx0XHRcdGlmKHBhcmVudC5jaGlsZHJlbi5sZW5ndGggPiAxKSB7XHJcblx0XHRcdFx0XHRjb25zdCBpbmRleCA9IHBhcmVudC5jaGlsZHJlbi5pbmRleE9mKHRoaXMpO1xyXG5cdFx0XHRcdFx0c2VsZWN0b3IgPSBgJHtzZWxlY3Rvcn06bnRoLWNoaWxkKCR7aW5kZXggKyAxfSlgO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRjb25zdCBwYXJlbnRTZWxlY3RvciA9IHBhcmVudC5zZWxlY3RvcigpO1xyXG5cdFx0XHRcdHJldHVybiBwYXJlbnRTZWxlY3RvciAhPSBudWxsID8gYCR7cGFyZW50U2VsZWN0b3J9ID4gJHtzZWxlY3Rvcn1gIDogc2VsZWN0b3I7XHJcblx0XHRcdH1cclxuXHRcdFx0cmV0dXJuIHNlbGVjdG9yO1xyXG5cdFx0fVxyXG5cdH07XHJcblxyXG5cdC8qKlxyXG5cdCAqIFJldHVybnMgdGhlIGZpcnN0IG5vZGUgb2YgY2xvc2VzdHMoKS5cclxuXHQgKlxyXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBhUXVlcnlcclxuXHQgKiBAcmV0dXJucyB7Tm9kZXx1bmRlZmluZWR9IHRoZSBmaXJzdCBub2RlIGZvdW5kLCBvciB1bmRlZmluZWRcclxuXHQgKi9cclxuXHRQcm90b3R5cGUuY2xvc2VzdCA9IGZ1bmN0aW9uIChhUXVlcnkpIHtcclxuXHRcdHJldHVybiB0aGlzLmNsb3Nlc3RzKGFRdWVyeSkuZmlyc3QoKTtcclxuXHR9O1xyXG5cclxuXHQvKipcclxuXHQgKiBTZWFyY2hlcyB0aGUgbm9kZXMgY2xvc2VzdCB0byB0aGlzIG9uZSBieSB0aGVpciBkaXN0YW5jZSBpbiB0aGUgdHJlZS5cclxuXHQgKlxyXG5cdCAqIFRoZSBzdWJ0cmVlIG9mIHRoaXMgbm9kZSBpcyBzZWFyY2hlZCBmaXJzdCwgdGhlbiB0aGUgc3VidHJlZSBvZiB0aGUgcGFyZW50LFxyXG5cdCAqIGFuZCBzbyBvbiB1cHdhcmRzIC0gdGhlIHNlYXJjaCB3aWRlbnMgaW4gcmluZ3MgdW50aWwgYSBsZXZlbCBoYXMgbWF0Y2hlcywgYW5kXHJcblx0ICogdGhvc2UgYXJlIHJldHVybmVkLiBTbyB0aGUgcmVzdWx0IG1heSBiZSBhIGNoaWxkLCBhIHNpYmxpbmcsIGEgY291c2luIG9yIGFuXHJcblx0ICogYW5jZXN0b3IsIGRlcGVuZGluZyBvbiB3aGVyZSB0aGUgZmlyc3QgbWF0Y2ggYXBwZWFycy5cclxuXHQgKlxyXG5cdCAqIERpc3RhbmNlIGlzIG1lYW50IGluIGJvdGggZGlyZWN0aW9ucyBoZXJlLCBvdGhlciB0aGFuIGluIHRoZSBuYXRpdmUgY2xvc2VzdCgpLFxyXG5cdCAqIHdoaWNoIG9ubHkgd2Fsa3MgdXAgYW5kIHJldHVybnMgYW4gYW5jZXN0b3IuXHJcblx0ICpcclxuXHQgKiBAcGFyYW0ge3N0cmluZ30gYVF1ZXJ5XHJcblx0ICogQHJldHVybnMge05vZGVMaXN0fSB0aGUgbWF0Y2hlcyBvZiB0aGUgY2xvc2VzdCBsZXZlbCBoYXZpbmcgYW55LCBlbXB0eSB3aGVuIHRoZXJlIGFyZSBub25lXHJcblx0ICovXHJcblx0UHJvdG90eXBlLmNsb3Nlc3RzID0gZnVuY3Rpb24gKGFRdWVyeSkge1xyXG5cdFx0Y29uc3QgcmVzdWx0ID0gdGhpcy5maW5kKGFRdWVyeSk7XHJcblx0XHRpZiAocmVzdWx0Lmxlbmd0aCAhPSAwKSByZXR1cm4gcmVzdWx0O1xyXG5cclxuXHRcdGNvbnN0IHBhcmVudCA9IHRoaXMucGFyZW50RWxlbWVudDtcclxuXHRcdGlmIChwYXJlbnQpIHJldHVybiBwYXJlbnQuY2xvc2VzdHMoYVF1ZXJ5KTtcclxuXHJcblx0XHRyZXR1cm4gTm9kZUxpc3QuZnJvbShbXSk7XHJcblx0fTtcclxuXHJcblx0LyoqXHJcblx0ICogU2VhcmNoZXMgdGhlIHF1ZXJ5IGF0IHRoaXMgbm9kZSwgYmVsb3cgaXQsIG9yIGFib3ZlIGl0IC0gaW4gdGhhdCBvcmRlci5cclxuXHQgKlxyXG5cdCAqIFRoaXMgbm9kZSBpdHNlbGYgaXMgY2hlY2tlZCBmaXJzdCwgdGhlbiBpdHMgc3VidHJlZSwgYW5kIG9ubHkgdGhlbiB0aGVcclxuXHQgKiBhbmNlc3RvcnMuIFVubGlrZSBjbG9zZXN0cygpIHRoZSBzZWFyY2ggZG9lcyBub3Qgd2lkZW4gaW4gcmluZ3M6IGl0IG5ldmVyXHJcblx0ICogbG9va3MgaW50byB0aGUgc3VidHJlZSBvZiBhbiBhbmNlc3Rvciwgc28gYSBzaWJsaW5nIGlzIG5vdCBmb3VuZC5cclxuXHQgKlxyXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBhUXVlcnlcclxuXHQgKiBAcmV0dXJucyB7Tm9kZUxpc3R9IHRoaXMgbm9kZSwgdGhlIG5vZGVzIGJlbG93IGl0LCBvciB0aGUgbWF0Y2hpbmcgYW5jZXN0b3IsIGVtcHR5IHdoZW4gdGhlcmUgaXMgbm9uZVxyXG5cdCAqL1xyXG5cdFByb3RvdHlwZS5uZXN0ZWQgPSBmdW5jdGlvbiAoYVF1ZXJ5KSB7XHJcblx0XHRpZiAodGhpcy5pcyhhUXVlcnkpKSByZXR1cm4gTm9kZUxpc3QuZnJvbSh0aGlzKTtcclxuXHJcblx0XHRsZXQgbmVzdGVkID0gdGhpcy5maW5kKGFRdWVyeSk7XHJcblx0XHRpZiAobmVzdGVkICYmIG5lc3RlZC5sZW5ndGggPiAwKSByZXR1cm4gbmVzdGVkO1xyXG5cdFx0ZWxzZSByZXR1cm4gTm9kZUxpc3QuZnJvbSh0aGlzLnBhcmVudChhUXVlcnkpKTtcclxuXHR9O1xyXG59KTtcclxuZXhwb3J0IGRlZmF1bHQgc3VwcG9ydDtcclxuIiwiaW1wb3J0IEV4dGVuZGVyIGZyb20gXCIuLi8uLi91dGlscy9FeHRlbmRlclwiO1xyXG5cclxuLyoqXHJcbiAqIFRoZSB0eXBlIG9mIHRoZSBldmVudCB0cmlnZ2VyZWQgb25jZSB0aGUgZG9jdW1lbnQgaXMgcmVhZHkuXHJcbiAqXHJcbiAqIEB0eXBlIHtzdHJpbmd9XHJcbiAqL1xyXG5leHBvcnQgY29uc3QgUkVBRFlFVkVOVCA9IFwiZGVmYXVsdGpzLS1ldmVudC0tcmVhZHlcIjtcclxuXHJcbmNvbnN0IHN1cHBvcnQgPSBFeHRlbmRlcihcIlJlYWR5RXZlbnRTdXBwb3J0XCIsIFByb3RvdHlwZSA9PiB7XHJcblx0LyoqXHJcblx0ICogUmVnaXN0ZXJzIGEgZnVuY3Rpb24gZm9yIHRoZSByZWFkeSBldmVudCBvZiB0aGUgZG9jdW1lbnQuXHJcblx0ICpcclxuXHQgKiBUaGUgcmVhZHkgZXZlbnQgaXMgdHJpZ2dlcmVkIG9uY2UgdGhlIGRvbSBpcyBwYXJzZWQuIFdoZW4gdGhlIGRvY3VtZW50IGlzXHJcblx0ICogYWxyZWFkeSBjb21wbGV0ZSB0aGUgZXZlbnQgaXMgdHJpZ2dlcmVkIHJpZ2h0IGF3YXksIHNvIGEgZnVuY3Rpb24gcmVnaXN0ZXJlZFxyXG5cdCAqIGxhdGUgc3RpbGwgcnVucy4gVGhhdCB0cmlnZ2VyIHJlYWNoZXMgZXZlcnkgcmVhZHkgbGlzdGVuZXIsIHNvIGZ1bmN0aW9uc1xyXG5cdCAqIHJlZ2lzdGVyZWQgZWFybGllciBydW4gYWdhaW4gb24gZWFjaCBsYXRlIHJlZ2lzdHJhdGlvbi5cclxuXHQgKlxyXG5cdCAqIEBwYXJhbSB7RnVuY3Rpb259IGFGdW5jdGlvbiAtIGNhbGxlZCBvbiB0aGUgcmVhZHkgZXZlbnRcclxuXHQgKiBAcGFyYW0ge2Jvb2xlYW59IFtvbmNlXSAtIHJlbW92ZSB0aGUgZnVuY3Rpb24gYWZ0ZXIgdGhlIG5leHQgcmVhZHkgZXZlbnRcclxuXHQgKiBAcmV0dXJucyB7RG9jdW1lbnR9IHRoaXNcclxuXHQgKi9cclxuXHRQcm90b3R5cGUucmVhZHkgPSBmdW5jdGlvbihhRnVuY3Rpb24sIG9uY2Upe1xyXG5cdFx0dGhpcy5vbihSRUFEWUVWRU5ULCBhRnVuY3Rpb24sIG9uY2UgPyB7IG9uY2U6IHRydWUgfSA6IHVuZGVmaW5lZCk7XHJcblx0XHRpZihkb2N1bWVudC5yZWFkeVN0YXRlID09IFwiY29tcGxldGVcIilcclxuXHRcdFx0dGhpcy50cmlnZ2VyKFJFQURZRVZFTlQpO1xyXG5cclxuXHRcdHJldHVybiB0aGlzO1xyXG5cdH07XHJcblxyXG59KTtcclxuZXhwb3J0IGRlZmF1bHQgc3VwcG9ydDsiLCJpbXBvcnQgRXh0ZW5kZXIgZnJvbSBcIi4uLy4uL3V0aWxzL0V4dGVuZGVyXCI7XHJcblxyXG5jb25zdCBISURFVkFMVUUgPSBcIm5vbmVcIjtcclxuXHJcbi8qKlxyXG4gKiBXaGV0aGVyIHRoZSBlbGVtZW50IGlzIGhpZGRlbiBieSBpdHMgb3duIGlubGluZSBkaXNwbGF5LCBhIGRpc3BsYXkgY29taW5nIGZyb21cclxuICogYSBjc3MgcnVsZSBpcyBub3Qgc2Vlbi5cclxuICpcclxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxlbWVudFxyXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cclxuICovXHJcbmNvbnN0IGlzSGlkZGVuID0gKGVsZW1lbnQpID0+IHtcclxuXHRyZXR1cm4gZWxlbWVudC5zdHlsZS5kaXNwbGF5ID09PSBISURFVkFMVUVcclxufTtcclxuXHJcbi8qKlxyXG4gKiBSZXBsYWNlcyBzaG93IGFuZCBoaWRlIG9uIHRoZSBlbGVtZW50IGJ5IHZlcnNpb25zIGJvdW5kIHRvIGl0LCBjYXB0dXJpbmcgdGhlXHJcbiAqIGRpc3BsYXkgdG8gcmVzdG9yZSBvbiBzaG93LlxyXG4gKlxyXG4gKiBUaGUgZGlzcGxheSBpcyByZWFkIG9uY2UsIG9uIHRoZSBmaXJzdCBzaG93IG9yIGhpZGUsIGFuZCBrZXB0IGZyb20gdGhlbiBvbiAtXHJcbiAqIHRoZSBib3VuZCBtZXRob2RzIHNoYWRvdyB0aGUgcHJvdG90eXBlLCBzbyBpbml0IGRvZXMgbm90IHJ1biBhZ2Fpbi4gQSBkaXNwbGF5XHJcbiAqIHNldCBkaXJlY3RseSBhZnRlcndhcmRzIGlzIG5vdCBwaWNrZWQgdXAuIFdoZW4gdGhlIGVsZW1lbnQgaXMgaGlkZGVuIGF0IHRoYXRcclxuICogZmlyc3QgY2FsbCB0aGUgY2FwdHVyZWQgdmFsdWUgaXMgdGhlIGVtcHR5IHN0cmluZywgZmFsbGluZyBiYWNrIHRvIHRoZSBjc3MuXHJcbiAqXHJcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsZW1lbnRcclxuICogQHJldHVybnMge0hUTUxFbGVtZW50fSB0aGUgZWxlbWVudFxyXG4gKi9cclxuY29uc3QgaW5pdCA9IChlbGVtZW50KSA9PiB7XHJcblx0bGV0IGRpc3BsYXkgPSAhaXNIaWRkZW4oZWxlbWVudCkgPyBlbGVtZW50LnN0eWxlLmRpc3BsYXkgOiBcIlwiO1xyXG5cclxuXHRlbGVtZW50LnNob3cgPSAoZnVuY3Rpb24oKXtcclxuXHRcdHRoaXMuc3R5bGUuZGlzcGxheSA9IGRpc3BsYXk7XHJcblx0XHRyZXR1cm4gdGhpcztcclxuXHR9KS5iaW5kKGVsZW1lbnQpO1xyXG5cclxuXHRlbGVtZW50LmhpZGUgPSAoZnVuY3Rpb24oKXtcclxuXHRcdHRoaXMuc3R5bGUuZGlzcGxheSA9IEhJREVWQUxVRTtcclxuXHRcdHJldHVybiB0aGlzO1xyXG5cdH0pLmJpbmQoZWxlbWVudCk7XHJcblxyXG5cdHJldHVybiBlbGVtZW50O1xyXG59O1xyXG5cclxuXHJcbmNvbnN0IHN1cHBvcnQgPSBFeHRlbmRlcihcIlNob3dIaWRlU3VwcG9ydFwiLCBQcm90b3R5cGUgPT4ge1xyXG5cdC8qKlxyXG5cdCAqIFNob3dzIHRoZSBlbGVtZW50IGJ5IHJlc3RvcmluZyB0aGUgZGlzcGxheSBjYXB0dXJlZCBiZWZvcmUgaXQgd2FzIGhpZGRlbi5cclxuXHQgKlxyXG5cdCAqIEByZXR1cm5zIHtIVE1MRWxlbWVudH0gdGhpc1xyXG5cdCAqL1xyXG5cdFByb3RvdHlwZS5zaG93ID0gZnVuY3Rpb24oKSB7XHJcblx0XHRyZXR1cm4gaW5pdCh0aGlzKS5zaG93LmFwcGx5KG51bGwsIGFyZ3VtZW50cylcclxuXHR9O1xyXG5cclxuXHQvKipcclxuXHQgKiBIaWRlcyB0aGUgZWxlbWVudCBieSBzZXR0aW5nIGl0cyBkaXNwbGF5IHRvIG5vbmUuXHJcblx0ICpcclxuXHQgKiBAcmV0dXJucyB7SFRNTEVsZW1lbnR9IHRoaXNcclxuXHQgKi9cclxuXHRQcm90b3R5cGUuaGlkZSA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0cmV0dXJuIGluaXQodGhpcykuaGlkZS5hcHBseShudWxsLCBhcmd1bWVudHMpXHJcblx0fTtcclxuXHJcblx0LyoqXHJcblx0ICogU2hvd3MgdGhlIGVsZW1lbnQgd2hlbiBpdCBpcyBoaWRkZW4sIGhpZGVzIGl0IG90aGVyd2lzZS5cclxuXHQgKlxyXG5cdCAqIE9ubHkgYW4gaW5saW5lIGRpc3BsYXkgb2Ygbm9uZSBjb3VudHMgYXMgaGlkZGVuLCBzbyBhbiBlbGVtZW50IGhpZGRlbiBieSBhXHJcblx0ICogY3NzIHJ1bGUgaXMgaGlkZGVuIGlubGluZSBmaXJzdCBiZWZvcmUgaXQgc2hvd3MuXHJcblx0ICpcclxuXHQgKiBAcmV0dXJucyB7SFRNTEVsZW1lbnR9IHRoaXNcclxuXHQgKi9cclxuXHRQcm90b3R5cGUudG9nZ2xlU2hvdyA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0cmV0dXJuIGlzSGlkZGVuKHRoaXMpID8gdGhpcy5zaG93KCkgOiB0aGlzLmhpZGUoKTtcclxuXHR9O1xyXG5cclxufSk7XHJcbmV4cG9ydCBkZWZhdWx0IHN1cHBvcnQ7IiwiaW1wb3J0IEV4dGVuZGVyIGZyb20gXCIuLi8uLi91dGlscy9FeHRlbmRlclwiO1xyXG5cclxuLyoqXHJcbiAqIFZhbHVlIGhhbmRsaW5nIGZvciBvbmUga2luZCBvZiBpbnB1dCBlbGVtZW50LlxyXG4gKlxyXG4gKiBAdHlwZWRlZiB7T2JqZWN0fSBJbnB1dFR5cGVcclxuICogQHByb3BlcnR5IHtzdHJpbmd9IHNlbGVjdG9yIC0gbWF0Y2hlcyB0aGUgZWxlbWVudHMgaGFuZGxlZCBieSB0aGlzIHR5cGVcclxuICogQHByb3BlcnR5IHtmdW5jdGlvbigpOip9IGdldCAtIHJlYWRzIHRoZSB2YWx1ZSBvZiB0aGUgZWxlbWVudFxyXG4gKiBAcHJvcGVydHkge2Z1bmN0aW9uKCopOnZvaWR9IHNldCAtIHdyaXRlcyB0aGUgdmFsdWUgdG8gdGhlIGVsZW1lbnRcclxuICovXHJcblxyXG4vKipcclxuICogU2hhcmVkIHNldHRlciBvZiBjaGVja2JveCBhbmQgcmFkaW8sIGJvdGggYXJlIHNldCBieSB0aGVpciBjaGVja2VkIHN0YXRlLlxyXG4gKlxyXG4gKiBAcGFyYW0ge2Jvb2xlYW58c3RyaW5nfHN0cmluZ1tdfSBhVmFsdWUgLSBhIGJvb2xlYW4gaXMgYXBwbGllZCBkaXJlY3RseSwgYSBzdHJpbmcgb3IgYW4gYXJyYXkgb2Ygc3RyaW5ncyBjaGVja3MgdGhlIGVsZW1lbnQgd2hlbiBpdHMgdmFsdWUgbWF0Y2hlc1xyXG4gKi9cclxuY29uc3QgY2hlY2tlZFNldHRlciA9IGZ1bmN0aW9uKGFWYWx1ZSl7XHJcblx0aWYodHlwZW9mIGFWYWx1ZSA9PT0gXCJib29sZWFuXCIpXHJcblx0XHR0aGlzLmNoZWNrZWQgPSBhVmFsdWU7XHJcblx0ZWxzZSBpZih0eXBlb2YgYVZhbHVlID09PSBcInN0cmluZ1wiKVxyXG5cdFx0dGhpcy5jaGVja2VkID0gdGhpcy52YWx1ZSA9PSBhVmFsdWU7XHJcblx0ZWxzZSBpZihBcnJheS5pc0FycmF5KGFWYWx1ZSkpXHJcblx0XHR0aGlzLmNoZWNrZWQgPSBhVmFsdWUuaW5kZXhPZih0aGlzLnZhbHVlKSA+PSAwO1xyXG5cclxuXHR0aGlzLnRyaWdnZXIoXCJjaGFuZ2VkXCIpO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIFRoZSBmaXJzdCB0eXBlIHdpdGggYSBtYXRjaGluZyBzZWxlY3RvciBoYW5kbGVzIHRoZSBlbGVtZW50LlxyXG4gKlxyXG4gKiBAdHlwZSB7SW5wdXRUeXBlW119XHJcbiAqL1xyXG5jb25zdCBJbnB1dFR5cGVzID0gW1xyXG5cdHtcclxuXHRcdHNlbGVjdG9yIDogXCJzZWxlY3RcIixcclxuXHRcdC8qKlxyXG5cdFx0ICogQHJldHVybnMge3N0cmluZ1tdfSB0aGUgdmFsdWVzIG9mIGFsbCBzZWxlY3RlZCBvcHRpb25zXHJcblx0XHQgKi9cclxuXHRcdGdldCA6IGZ1bmN0aW9uKCl7XHJcblx0XHRcdGNvbnN0IHJlc3VsdCA9IFtdO1xyXG5cdFx0XHR0aGlzLmZpbmQoXCJvcHRpb25cIikuZm9yRWFjaChvcHRpb24gPT4ge1xyXG5cdFx0XHRcdGlmKG9wdGlvbi5zZWxlY3RlZClcclxuXHRcdFx0XHRcdHJlc3VsdC5wdXNoKG9wdGlvbi52YWx1ZSk7XHJcblx0XHRcdH0pO1x0XHRcdFxyXG5cdFx0XHRyZXR1cm4gcmVzdWx0O1xyXG5cdFx0fSxcclxuXHRcdHNldCA6IGZ1bmN0aW9uKCl7XHRcdFx0XHRcclxuXHRcdFx0bGV0IHZhbHVlcyA9IFtdO1xyXG5cdFx0XHRjb25zdCBhcmdzID0gQXJyYXkuZnJvbShhcmd1bWVudHMpO1xyXG5cdFx0XHRsZXQgYXJnID0gYXJncy5zaGlmdCgpO1xyXG5cdFx0XHR3aGlsZShhcmcpe1xyXG5cdFx0XHRcdGlmKEFycmF5LmlzQXJyYXkoYXJnKSlcclxuXHRcdFx0XHRcdHZhbHVlcyA9IHZhbHVlcy5jb25jYXQoYXJnKTtcclxuXHRcdFx0XHRlbHNlXHJcblx0XHRcdFx0XHR2YWx1ZXMucHVzaChhcmcpO1xyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdGFyZyA9IGFyZ3Muc2hpZnQoKTtcclxuXHRcdFx0fVxyXG5cdFx0XHR0aGlzLnZhbHVlID0gdmFsdWVzO1xyXG5cdFx0XHR0aGlzLmZpbmQoXCJvcHRpb25cIikuZm9yRWFjaChvcHRpb24gPT4gb3B0aW9uLnNlbGVjdGVkID0gdmFsdWVzLmluZGV4T2Yob3B0aW9uLnZhbHVlKSA+PSAwKTtcclxuXHRcdFx0dGhpcy50cmlnZ2VyKFwiY2hhbmdlZFwiKTtcclxuXHRcdH1cclxuXHR9LFxyXG5cdHtcclxuXHRcdHNlbGVjdG9yIDogXCJpbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdXCIsXHJcblx0XHQvKipcclxuXHRcdCAqIEEgY2hlY2tib3ggaXMgaW5kZXBlbmRlbnQsIHNvIGFuIHVuY2hlY2tlZCBvbmUgcmVwb3J0cyBmYWxzZSAtIGl0IGlzIG9mZixcclxuXHRcdCAqIHdoaWNoIGlzIGEgdmFsdWUgb2YgaXRzIG93bi5cclxuXHRcdCAqXHJcblx0XHQgKiBAcmV0dXJucyB7Ym9vbGVhbnxzdHJpbmd8dW5kZWZpbmVkfSB0aGUgY2hlY2tlZCBzdGF0ZSB3aXRob3V0IGEgdmFsdWUgYXR0cmlidXRlLCBvdGhlcndpc2UgdGhlIHZhbHVlIHdoZW4gY2hlY2tlZFxyXG5cdFx0ICovXHJcblx0XHRnZXQgOiBmdW5jdGlvbigpe1xyXG5cdFx0XHRpZighdGhpcy5oYXNBdHRyaWJ1dGUoXCJ2YWx1ZVwiKSlcclxuXHRcdFx0XHRyZXR1cm4gdGhpcy5jaGVja2VkO1xyXG5cdFx0XHRlbHNlIGlmKHRoaXMuY2hlY2tlZClcclxuXHRcdFx0XHRyZXR1cm4gdGhpcy52YWx1ZTtcclxuXHRcdH0sXHJcblx0XHRzZXQgOiBjaGVja2VkU2V0dGVyXHJcblx0fSxcclxuXHR7XHJcblx0XHRzZWxlY3RvciA6IFwiaW5wdXRbdHlwZT1cXFwicmFkaW9cXFwiXVwiLFxyXG5cdFx0LyoqXHJcblx0XHQgKiBBbGwgcmFkaW9zIG9mIGEgZ3JvdXAgc2hhcmUgb25lIG5hbWUgYW5kIG9ubHkgb25lIG9mIHRoZW0gY2FuIGJlIGNoZWNrZWQsXHJcblx0XHQgKiBzbyBhbiB1bmNoZWNrZWQgcmFkaW8gcmV0dXJucyB1bmRlZmluZWQgaW5zdGVhZCBvZiBmYWxzZSAtIGl0IGNhcnJpZXMgbm9cclxuXHRcdCAqIHZhbHVlLCBpdCBqdXN0IGlzIG5vdCB0aGUgc2VsZWN0ZWQgb25lLiBUaGlzIGlzIHdoYXQga2VlcHMgdGhlIHVuY2hlY2tlZFxyXG5cdFx0ICogcmFkaW9zIGZyb20gb3ZlcndyaXRpbmcgdGhlIHZhbHVlIG9mIHRoZWlyIGdyb3VwLCBvbmNlIHRoZSByZXN1bHRzIG9mIGFcclxuXHRcdCAqIHdob2xlIGdyb3VwIGdldCBjb2xsZWN0ZWQgYnkgbmFtZS5cclxuXHRcdCAqXHJcblx0XHQgKiBAcmV0dXJucyB7Ym9vbGVhbnxzdHJpbmd8dW5kZWZpbmVkfSB0cnVlIG9yIHRoZSB2YWx1ZSB3aGVuIGNoZWNrZWQsIHVuZGVmaW5lZCBvdGhlcndpc2VcclxuXHRcdCAqL1xyXG5cdFx0Z2V0IDogZnVuY3Rpb24oKXtcclxuXHRcdFx0aWYodGhpcy5jaGVja2VkKVxyXG5cdFx0XHRcdHJldHVybiB0aGlzLmhhc0F0dHJpYnV0ZShcInZhbHVlXCIpID8gdGhpcy52YWx1ZSA6IHRydWU7XHJcblx0XHR9LFxyXG5cdFx0c2V0IDogY2hlY2tlZFNldHRlclxyXG5cdH1cclxuXTtcclxuXHJcbi8qKlxyXG4gKiBGYWxsYmFjayBmb3IgYWxsIGVsZW1lbnRzIHdpdGhvdXQgYSBtYXRjaGluZyBJbnB1dFR5cGUuXHJcbiAqXHJcbiAqIEB0eXBlIHtJbnB1dFR5cGV9XHJcbiAqL1xyXG5jb25zdCBEZWZhdWx0SW5wdXRUeXBlID0ge1xyXG5cdFx0Z2V0IDogZnVuY3Rpb24oKXtcclxuXHRcdFx0cmV0dXJuIHRoaXMudmFsdWU7XHJcblx0XHR9LFxyXG5cdFx0c2V0IDogZnVuY3Rpb24oYVZhbHVlKXtcclxuXHRcdFx0dGhpcy52YWx1ZSA9IGFWYWx1ZTtcclxuXHRcdFx0dGhpcy50cmlnZ2VyKFwiaW5wdXRcIik7XHJcblx0XHR9XHJcbn07XHJcblxyXG4vKipcclxuICogQHBhcmFtIHtFbGVtZW50fSBhRWxlbWVudFxyXG4gKiBAcmV0dXJucyB7SW5wdXRUeXBlfSB0aGUgZmlyc3QgbWF0Y2hpbmcgdHlwZSwgb3IgRGVmYXVsdElucHV0VHlwZVxyXG4gKi9cclxuY29uc3QgZ2V0SW5wdXRUeXBlID0gZnVuY3Rpb24oYUVsZW1lbnQpe1xyXG5cdGZvcihsZXQgaSA9IDA7IGkgPCBJbnB1dFR5cGVzLmxlbmd0aDsgaSsrKVxyXG5cdFx0aWYoYUVsZW1lbnQuaXMoSW5wdXRUeXBlc1tpXS5zZWxlY3RvcikpXHJcblx0XHRcdHJldHVybiBJbnB1dFR5cGVzW2ldO1x0XHRcclxuXHRyZXR1cm4gRGVmYXVsdElucHV0VHlwZTtcclxufTtcclxuXHJcblxyXG5jb25zdCBzdXBwb3J0ID0gRXh0ZW5kZXIoXCJWYWx1ZVN1cHBvcnRcIiwgUHJvdG90eXBlID0+IHtcclxuXHQvKipcclxuXHQgKiBHZXRzIG9yIHNldHMgdGhlIHZhbHVlIG9mIHRoaXMgZWxlbWVudC5cclxuXHQgKlxyXG5cdCAqIFdoYXQgYSB2YWx1ZSBpcyBkZXBlbmRzIG9uIHRoZSBlbGVtZW50OiBhIHNlbGVjdCByZXR1cm5zIHRoZSB2YWx1ZXMgb2YgYWxsXHJcblx0ICogaXRzIHNlbGVjdGVkIG9wdGlvbnMsIGEgY2hlY2tib3ggaXRzIGNoZWNrZWQgc3RhdGUgb3IgaXRzIHZhbHVlLCBhIHJhZGlvIGFcclxuXHQgKiB2YWx1ZSBvbmx5IHdoZW4gaXQgaXMgY2hlY2tlZCwgZXZlcnkgb3RoZXIgZWxlbWVudCBpdHMgdmFsdWUuXHJcblx0ICpcclxuXHQgKiBAcGFyYW0gey4uLip9IFthVmFsdWVdIC0gdGhlIG5ldyB2YWx1ZSwgdGhlIGFjY2VwdGVkIHR5cGVzIGRlcGVuZCBvbiB0aGUgZWxlbWVudFxyXG5cdCAqIEByZXR1cm5zIHsqfEVsZW1lbnR9IHRoZSB2YWx1ZSBvZiB0aGUgZWxlbWVudCwgb3IgdGhpcyB3aGVuIGEgdmFsdWUgd2FzIHNldFxyXG5cdCAqL1xyXG5cdFByb3RvdHlwZS52YWwgPSBmdW5jdGlvbigpIHtcclxuXHRcdGxldCB0eXBlID0gZ2V0SW5wdXRUeXBlKHRoaXMpO1xyXG5cdFx0aWYoYXJndW1lbnRzLmxlbmd0aCA9PSAwKVxyXG5cdFx0XHRyZXR1cm4gdHlwZS5nZXQuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxuXHRcdGVsc2VcclxuXHRcdFx0dHlwZS5zZXQuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxuXHRcdFx0XHJcblx0XHRyZXR1cm4gdGhpcztcclxuXHR9O1x0XHJcbn0pO1xyXG5leHBvcnQgZGVmYXVsdCBzdXBwb3J0OyIsImltcG9ydCBcIi4vZG9tL0V2ZW50VGFyZ2V0XCI7XHJcbmltcG9ydCBcIi4vZG9tL05vZGVcIjtcclxuaW1wb3J0IFwiLi9kb20vRWxlbWVudFwiO1xyXG5pbXBvcnQgXCIuL2RvbS9Eb2N1bWVudFwiO1xyXG5pbXBvcnQgXCIuL2RvbS9Eb2N1bWVudEZyYWdtZW50XCI7XHJcbmltcG9ydCBcIi4vZG9tL0hUTUxFbGVtZW50XCI7XHJcbmltcG9ydCBcIi4vZG9tL0hUTUxJbnB1dEVsZW1lbnRcIjtcclxuaW1wb3J0IFwiLi9kb20vSFRNTFRleHRBcmVhRWxlbWVudFwiO1xyXG5pbXBvcnQgXCIuL2RvbS9IVE1MU2VsZWN0RWxlbWVudFwiO1xyXG5pbXBvcnQgXCIuL2RvbS9Ob2RlTGlzdFwiO1xyXG5pbXBvcnQgXCIuL2RvbS9IdG1sQ29sbGVjdGlvblwiO1xyXG5pbXBvcnQgXCIuL0dsb2JhbFwiO1xyXG4iLCIvKipcclxuICogQWRkcyBkZWxlZ2F0aW5nIG1ldGhvZHMgdG8gYSBwcm90b3R5cGUsIG9uZSBmb3IgZWFjaCBtZXRob2Qgb2YgdGhlIHRhcmdldFxyXG4gKiBwcm90b3R5cGVzLlxyXG4gKlxyXG4gKiBUaGlzIGlzIGhvdyBhIE5vZGVMaXN0IGdldHMgdGhlIG1ldGhvZHMgb2YgYSBOb2RlOiBmb3IgZXZlcnkgbWV0aG9kIG5hbWUgZm91bmRcclxuICogb24gdGhlIHRhcmdldHMsIGEgZnVuY3Rpb24gaXMgcHV0IG9uIHRoZSBzb3VyY2UgdGhhdCBoYW5kcyB0aGUgY2FsbCB0byB0aGVcclxuICogY2FsbGJhY2ssIHRvZ2V0aGVyIHdpdGggdGhhdCBuYW1lLiBUaGUgY2FsbGJhY2sgdGhlbiBkZWNpZGVzIHdoYXQgdG8gZG8gLSBmb3IgYVxyXG4gKiBsaXN0IGl0IGFwcGxpZXMgdGhlIG1ldGhvZCB0byBlYWNoIG5vZGUgYW5kIGNvbGxlY3RzIHRoZSByZXN1bHRzLlxyXG4gKlxyXG4gKiBBIG5hbWUgYWxyZWFkeSBvbiB0aGUgc291cmNlIGlzIGxlZnQgYWxvbmUsIHNvIGl0cyBvd24gbWV0aG9kcyB3aW4uIE9ubHkgdmFsdWVcclxuICogbWV0aG9kcyBhcmUgdGFrZW4sIGFjY2Vzc29ycyBhcmUgc2tpcHBlZCwgYXMgdGhlaXIgZGVzY3JpcHRvciBoYXMgbm8gdmFsdWUuXHJcbiAqXHJcbiAqIEBwYXJhbSB7ZnVuY3Rpb24oc3RyaW5nLCBBcmd1bWVudHMpOip9IGNhbGxiYWNrIC0gY2FsbGVkIGFzIG1ldGhvZCwgd2l0aCB0aGUgbmFtZSBhbmQgdGhlIGFyZ3VtZW50c1xyXG4gKiBAcGFyYW0ge09iamVjdH0gc291cmNlIC0gdGhlIHByb3RvdHlwZSB0aGUgZGVsZWdhdGluZyBtZXRob2RzIGFyZSBhZGRlZCB0b1xyXG4gKiBAcGFyYW0gey4uLk9iamVjdH0gdGhlVGFyZ2V0cyAtIHRoZSBwcm90b3R5cGVzIHdob3NlIG1ldGhvZCBuYW1lcyBhcmUgZGVsZWdhdGVkXHJcbiAqL1xyXG5jb25zdCBEZWxlZ2F0ZXJCdWlsZGVyID0gZnVuY3Rpb24oKSB7XHJcblx0Y29uc3QgYXJncyA9IEFycmF5LmZyb20oYXJndW1lbnRzKTtcclxuXHRjb25zdCBjYWxsYmFjayA9IGFyZ3Muc2hpZnQoKTtcclxuXHRjb25zdCBzb3VyY2UgPSBhcmdzLnNoaWZ0KCk7XHJcblx0YXJncy5mb3JFYWNoKCB0YXJnZXQgPT57XHJcblx0XHRPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh0YXJnZXQpXHJcblx0XHQuZm9yRWFjaChuYW1lID0+IHtcclxuXHRcdFx0Y29uc3QgcHJvcCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBuYW1lKTtcclxuXHRcdFx0aWYgKHR5cGVvZiBzb3VyY2VbbmFtZV0gPT09IFwidW5kZWZpbmVkXCIgJiYgdHlwZW9mIHByb3AudmFsdWUgPT09IFwiZnVuY3Rpb25cIilcclxuXHRcdFx0XHRzb3VyY2VbbmFtZV0gPSBmdW5jdGlvbigpe1xyXG5cdFx0XHRcdFx0cmV0dXJuIGNhbGxiYWNrLmNhbGwodGhpcywgbmFtZSwgYXJndW1lbnRzKTtcclxuXHRcdFx0XHR9O1xyXG5cdFx0fSk7XHJcblx0fSk7XHJcblxyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBEZWxlZ2F0ZXJCdWlsZGVyOyIsIi8qKlxyXG4gKiBBcHBsaWVzIGV4dGVuc2lvbnMgdG8gdGhlIHByb3RvdHlwZSBvZiBhIHR5cGUuXHJcbiAqXHJcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGFUeXBlIC0gdGhlIHR5cGUgd2hvc2UgcHJvdG90eXBlIGdldHMgZXh0ZW5kZWRcclxuICogQHBhcmFtIHsuLi5mdW5jdGlvbihGdW5jdGlvbik6dm9pZH0gdGhlRXh0ZW5kZXJzIC0gdGhlIHdyYXBwZWQgZXh0ZW5zaW9ucyB0byBhcHBseSwgaW4gb3JkZXJcclxuICovXHJcbmNvbnN0IGV4dGVuZFByb3RvdHlwZSA9IGZ1bmN0aW9uKCl7XHJcblx0Y29uc3QgYXJncyA9IEFycmF5LmZyb20oYXJndW1lbnRzKTtcclxuXHRjb25zdCB0eXBlID0gYXJncy5zaGlmdCgpO1xyXG5cdHdoaWxlKGFyZ3MubGVuZ3RoID4gMCl7XHJcblx0XHRjb25zdCBleHRlbmRlciA9IGFyZ3Muc2hpZnQoKTtcclxuXHRcdGV4dGVuZGVyKHR5cGUpO1xyXG5cdH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGV4dGVuZFByb3RvdHlwZTsiLCJpbXBvcnQgVXRpbHMgZnJvbSBcIi4vVXRpbHNcIjtcclxuXHJcbi8qKlxyXG4gKiBXaGljaCBleHRlbnNpb24gaXMgYXBwbGllZCB0byB3aGljaCB0eXBlLCBrZXB0IG9uIHRoZSBnbG9iYWwgb2JqZWN0IHNvIGl0IGlzXHJcbiAqIHNoYXJlZCBhY3Jvc3Mgc2VwYXJhdGUgbG9hZHMgb2YgdGhlIGxpYnJhcnkuXHJcbiAqXHJcbiAqIEB0eXBlIHtPYmplY3Q8c3RyaW5nLCBPYmplY3Q8c3RyaW5nLCBib29sZWFuPj59XHJcbiAqL1xyXG5jb25zdCBFWFRFTlNJT05TX01BUCA9IFV0aWxzLmdsb2JhbFZhcihcIl9fX0RPTV9BUElfRVhURU5TSU9OX01BUF9fX1wiLCB7fSk7XHJcblxyXG4vKipcclxuICogV3JhcHMgYW4gZXh0ZW5zaW9uIHNvIGl0IGFwcGxpZXMgdG8gdGhlIHByb3RvdHlwZSBvZiBhIHR5cGUgb25seSBvbmNlLlxyXG4gKlxyXG4gKiBUaGUgcmV0dXJuZWQgZnVuY3Rpb24gaXMgd2hhdCBleHRlbmRQcm90b3R5cGUoKSBjYWxscyB3aXRoIGEgdHlwZS4gQXBwbHlpbmcgdGhlXHJcbiAqIHNhbWUgbmFtZWQgZXh0ZW5zaW9uIHRvIHRoZSBzYW1lIHR5cGUgYWdhaW4gaXMgYSBuby1vcCB3aXRoIGEgd2FybmluZywgc29cclxuICogbG9hZGluZyB0aGUgbGlicmFyeSB0d2ljZSBkb2VzIG5vdCBwYXRjaCB0aGUgcHJvdG90eXBlcyB0d2ljZS5cclxuICpcclxuICogQHBhcmFtIHtzdHJpbmd9IGFOYW1lIC0gdGhlIG5hbWUgb2YgdGhlIGV4dGVuc2lvbiwgdW5pcXVlIHBlciB0eXBlXHJcbiAqIEBwYXJhbSB7ZnVuY3Rpb24oT2JqZWN0KTp2b2lkfSBhRXh0ZW50aW9uIC0gYWRkcyB0aGUgbWVtYmVycyB0byB0aGUgcHJvdG90eXBlXHJcbiAqIEByZXR1cm5zIHtmdW5jdGlvbihGdW5jdGlvbik6dm9pZH0gYSBmdW5jdGlvbiBhcHBseWluZyB0aGUgZXh0ZW5zaW9uIHRvIGEgdHlwZVxyXG4gKi9cclxuY29uc3QgRXh0ZW5kZXIgPSBmdW5jdGlvbihhTmFtZSwgYUV4dGVudGlvbil7XHJcblx0cmV0dXJuIGZ1bmN0aW9uKGFUeXBlKXtcclxuXHRcdGNvbnN0IHtuYW1lLCBwcm90b3R5cGV9ID0gYVR5cGU7XHJcblx0XHRsZXQgZXh0ZW5zaW9ucyA9IEVYVEVOU0lPTlNfTUFQW25hbWVdO1xyXG5cdFx0aWYoIWV4dGVuc2lvbnMpXHJcblx0XHRcdGV4dGVuc2lvbnMgPSBFWFRFTlNJT05TX01BUFtuYW1lXSA9IHt9O1x0XHRcclxuXHRcdFxyXG5cdFx0aWYoIWV4dGVuc2lvbnNbYU5hbWVdKXtcclxuXHRcdFx0ZXh0ZW5zaW9uc1thTmFtZV0gPSB0cnVlO1xyXG5cdFx0XHRhRXh0ZW50aW9uKHByb3RvdHlwZSk7XHJcblx0XHR9XHJcblx0XHRlbHNlXHJcblx0XHRcdGNvbnNvbGUud2FybihgRHVwbGljYXRlZCBsb2FkIG9mIGV4dGVuc2lvbiBcXFwiJHthTmFtZX1cXFwiIWApO1xyXG5cdH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEV4dGVuZGVyOyIsIlxyXG4vKipcclxuICogVGhlIGdsb2JhbCBvYmplY3Qgb2YgdGhlIGN1cnJlbnQgZW52aXJvbm1lbnQuXHJcbiAqXHJcbiAqIERldGVjdGVkIHdpdGggdHlwZW9mIGd1YXJkcywgYmVjYXVzZSBhIGJhcmUgcmVmZXJlbmNlIHRvIGFuIHVuZGVjbGFyZWQgbmFtZVxyXG4gKiB0aHJvd3MgaW5zdGVhZCBvZiBiZWluZyBmYWxzeSAtIHNvIGEgcGxhaW4gd2luZG93IHx8IGdsb2JhbCBjaGFpbiB3b3VsZCBicmVha1xyXG4gKiBldmVyeXdoZXJlIHdpbmRvdyBpcyBtaXNzaW5nLCBub3QgZmFsbCB0aHJvdWdoLiBnbG9iYWxUaGlzIGNvdmVycyB0aGUgYnJvd3NlcixcclxuICogbm9kZSBhbmQgd29ya2VycywgdGhlIHJlc3Qgc3RheXMgYXMgYSBmYWxsYmFjayBmb3Igb2xkZXIgcnVudGltZXMuXHJcbiAqXHJcbiAqIEB0eXBlIHtPYmplY3R9XHJcbiAqL1xyXG5leHBvcnQgY29uc3QgR0xPQkFMID0gdHlwZW9mIGdsb2JhbFRoaXMgIT09IFwidW5kZWZpbmVkXCIgPyBnbG9iYWxUaGlzIDpcclxuXHR0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93IDpcclxuXHR0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiID8gZ2xvYmFsIDpcclxuXHR0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIiA/IHNlbGYgOiB7fTtcclxuXHJcbmNvbnN0IFV0aWxzID0ge1xyXG5cdC8qKlxyXG5cdCAqIFRoZSBnbG9iYWwgb2JqZWN0LCBzYW1lIGFzIEdMT0JBTC5cclxuXHQgKlxyXG5cdCAqIEB0eXBlIHtPYmplY3R9XHJcblx0ICovXHJcblx0Z2xvYmFsIDogR0xPQkFMLFxyXG5cclxuXHQvKipcclxuXHQgKiBSZWFkcyBhIHZhcmlhYmxlIGZyb20gdGhlIGdsb2JhbCBvYmplY3QsIGluaXRpYWxpemluZyBpdCBvbmNlIHdoZW4gYSB2YWx1ZVxyXG5cdCAqIGlzIGdpdmVuIGFuZCBub25lIGlzIHNldCB5ZXQuXHJcblx0ICpcclxuXHQgKiBVc2VkIHRvIHNoYXJlIHN0YXRlIGJldHdlZW4gc2VwYXJhdGUgbG9hZHMgb2YgdGhlIGxpYnJhcnksIHdoaWNoIGVhY2ggaGF2ZVxyXG5cdCAqIHRoZWlyIG93biBtb2R1bGUgc2NvcGUgYnV0IHRoZSBvbmUgZ2xvYmFsIG9iamVjdCBpbiBjb21tb24uXHJcblx0ICpcclxuXHQgKiBAcGFyYW0ge3N0cmluZ30gYU5hbWUgLSB0aGUgbmFtZSBvbiB0aGUgZ2xvYmFsIG9iamVjdFxyXG5cdCAqIEBwYXJhbSB7Kn0gW2FJbml0VmFsdWVdIC0gdGhlIHZhbHVlIHRvIHNldCB3aGVuIHRoZSBuYW1lIGlzIHN0aWxsIHVuZGVmaW5lZFxyXG5cdCAqIEByZXR1cm5zIHsqfSB0aGUgdmFsdWUgb24gdGhlIGdsb2JhbCBvYmplY3RcclxuXHQgKi9cclxuXHRnbG9iYWxWYXIgOiBmdW5jdGlvbihhTmFtZSwgYUluaXRWYWx1ZSl7XHJcblx0XHRpZihhcmd1bWVudHMubGVuZ3RoID09PSAyICYmIHR5cGVvZiBHTE9CQUxbYU5hbWVdID09PSBcInVuZGVmaW5lZFwiKVxyXG5cdFx0XHRHTE9CQUxbYU5hbWVdID0gYUluaXRWYWx1ZTtcclxuXHJcblx0XHRyZXR1cm4gR0xPQkFMW2FOYW1lXTtcclxuXHR9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBVdGlsczsiLCIvKipcbiAqIFRoZSBnbG9iYWwgc2NvcGUgb2YgdGhlIGN1cnJlbnQgZW52aXJvbm1lbnQuXG4gKlxuICogUmVzb2x2ZWQgb25jZSB3aGVuIHRoZSBtb2R1bGUgaXMgbG9hZGVkOiBnbG9iYWxUaGlzLCB0aGVuIGdsb2JhbCwgd2luZG93IGFuZCBzZWxmIGZvciBlbmdpbmVzIG5vdFxuICoga25vd2luZyBpdCB5ZXQuIEFuIGVtcHR5IG9iamVjdCB3aGVuIG5vbmUgb2YgdGhlbSBleGlzdHMsIHNvIHJlYWRpbmcgZnJvbSBpdCBuZXZlciB0aHJvd3MuXG4gKlxuICogQG1vZHVsZSBHbG9iYWxcbiAqXG4gKiBAZXhhbXBsZVxuICogR0xPQkFMLmNyeXB0by5nZXRSYW5kb21WYWx1ZXMoYnVmZmVyKTtcbiAqL1xuY29uc3QgR0xPQkFMID0gKCgpID0+IHtcblx0aWYodHlwZW9mIGdsb2JhbFRoaXMgIT09IFwidW5kZWZpbmVkXCIpIHJldHVybiBnbG9iYWxUaGlzO1xuXHRpZih0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiKSByZXR1cm4gZ2xvYmFsO1xuXHRpZih0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiKSByZXR1cm4gd2luZG93O1xuXHRpZih0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIikgcmV0dXJuIHNlbGY7XG5cdHJldHVybiB7fTtcbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IEdMT0JBTDtcbiIsIi8qKlxyXG4gKiBPbmx5IGFuIG9iamVjdCBjYW4gY2FycnkgYSBwcm9wZXJ0eSwgc28gYSBwYXRoIHN0b3BzIGF0IGEgcHJpbWl0aXZlIGluc3RlYWQgb2YgaGFuZGluZyBvdXQgYVxyXG4gKiBwcm9wZXJ0eSB0aGF0IGNhbm5vdCBiZSByZWFkIG9yIHdyaXR0ZW4uIEFuIEFycmF5LCBNYXAgb3IgRGF0ZSBwYXNzZXMgLSB0aGV5IGFyZSBvYmplY3RzIGFuZCB0YWtlXHJcbiAqIGEgcHJvcGVydHkgbGlrZSBhbnkgb3RoZXIgb25lLCB3aGljaCBpcyB3aGF0IG1ha2VzIGEgcGF0aCBsaWtlIFwibGlzdC4wXCIgd29yay5cclxuICpcclxuICogQHByaXZhdGVcclxuICogQHBhcmFtIHsqfSB2YWx1ZSB0aGUgdmFsdWUgYSBzdGVwIG9mIHRoZSBwYXRoIHJlc29sdmVkIHRvXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIHRoZSBuYW1lIG9mIHRoYXQgc3RlcFxyXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IHRoZSB3aG9sZSBwYXRoLCB0byB0ZWxsIHdoaWNoIG9uZSBvZiBzZXZlcmFsIHN0ZXBzIGZhaWxlZFxyXG4gKiBAcmV0dXJucyB7dm9pZH1cclxuICogQHRocm93cyB7VHlwZUVycm9yfSB3aGVuIHRoZSBzdGVwIGNhcnJpZXMgbm8gb2JqZWN0XHJcbiAqL1xyXG5jb25zdCBhc3NlcnREZXNjZW5kYWJsZSA9ICh2YWx1ZSwgbmFtZSwga2V5KSA9PiB7XHJcblx0aWYodmFsdWUgIT09IG51bGwgJiYgdHlwZW9mIHZhbHVlID09PSBcIm9iamVjdFwiKVxyXG5cdFx0cmV0dXJuO1xyXG5cclxuXHRjb25zdCB0eXBlID0gdmFsdWUgPT09IG51bGwgPyBcIm51bGxcIiA6IGBhICR7dHlwZW9mIHZhbHVlfWA7XHJcblx0dGhyb3cgbmV3IFR5cGVFcnJvcihgY2Fubm90IGRlc2NlbmQgaW50byBcIiR7bmFtZX1cIiBvZiBwYXRoIFwiJHtrZXl9XCIgLSAke3R5cGV9IGlzIG5vIG9iamVjdGApO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIE9uZSBwcm9wZXJ0eSBvZiBhbiBvYmplY3QsIGFkZHJlc3NlZCBieSBuYW1lLCB0b2dldGhlciB3aXRoIHRoZSBvYmplY3QgY2FycnlpbmcgaXQuXHJcbiAqXHJcbiAqIEJ1aWx0IHRocm91Z2gge0BsaW5rIE9iamVjdFByb3BlcnR5LmxvYWR9LCB3aGljaCB3YWxrcyBhIGRvdHRlZCBwYXRoIGFuZCBoYW5kcyBiYWNrIHRoZSBwcm9wZXJ0eSBhdFxyXG4gKiBpdHMgZW5kLlxyXG4gKlxyXG4gKiBAZXhhbXBsZVxyXG4gKiBjb25zdCBwcm9wZXJ0eSA9IE9iamVjdFByb3BlcnR5LmxvYWQoe2EgOiB7YiA6IDF9fSwgXCJhLmJcIik7XHJcbiAqIHByb3BlcnR5LnZhbHVlOyAgICAgIC8vIDFcclxuICogcHJvcGVydHkudmFsdWUgPSAyOyAgLy8gd3JpdGVzIGludG8gdGhlIG9iamVjdFxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgT2JqZWN0UHJvcGVydHkge1xyXG5cdC8qKlxyXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgbmFtZSBvZiB0aGUgcHJvcGVydHlcclxuXHQgKiBAcGFyYW0ge29iamVjdH0gY29udGV4dCB0aGUgb2JqZWN0IGNhcnJ5aW5nIGl0XHJcblx0ICovXHJcblx0Y29uc3RydWN0b3Ioa2V5LCBjb250ZXh0KXtcclxuXHRcdHRoaXMua2V5ID0ga2V5O1xyXG5cdFx0dGhpcy5jb250ZXh0ID0gY29udGV4dDtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIFdoZXRoZXIgdGhlIGtleSBpcyByZWFjaGFibGUgb24gdGhlIGNvbnRleHQgYXQgYWxsLlxyXG5cdCAqXHJcblx0ICogVGhpcyBhbnN3ZXJzIGZvciB0aGUgd2hvbGUgcHJvdG90eXBlIGNoYWluLCBub3Qgb25seSBmb3Igb3duIHByb3BlcnRpZXMgLSBsb2FkKHt9LCBcInRvU3RyaW5nXCIpXHJcblx0ICogcmVwb3J0cyB0cnVlLiBUaGF0IGlzIGRlbGliZXJhdGU6IGEgcGF0aCBtYXkgYWRkcmVzcyBhIHByb3RvdHlwZSBhbmQgZXh0ZW5kIGl0LCBzbyBhbiBpbmhlcml0ZWRcclxuXHQgKiBrZXkgaXMgYSBrZXkgbGlrZSBhbnkgb3RoZXIgaGVyZS4gVXNlIGhhc1ZhbHVlIHRvIGFzayB3aGV0aGVyIHNvbWV0aGluZyBpcyBhY3R1YWxseSBzdG9yZWQuXHJcblx0ICpcclxuXHQgKiBAcmV0dXJucyB7Ym9vbGVhbn1cclxuXHQgKi9cclxuXHRnZXQga2V5RGVmaW5lZCgpe1xyXG5cdFx0cmV0dXJuIHRoaXMua2V5IGluIHRoaXMuY29udGV4dDtcclxuXHR9XHJcblx0XHJcblx0LyoqXHJcblx0ICogV2hldGhlciBzb21ldGhpbmcgaXMgc3RvcmVkIHVuZGVyIHRoZSBrZXkuIE9ubHkgdW5kZWZpbmVkIGNvdW50cyBhcyBub3RoaW5nIC0gMCwgXCJcIiwgZmFsc2UgYW5kXHJcblx0ICogbnVsbCBhcmUgdmFsdWVzLlxyXG5cdCAqXHJcblx0ICogQHJldHVybnMge2Jvb2xlYW59XHJcblx0ICovXHJcblx0Z2V0IGhhc1ZhbHVlKCl7XHJcblx0XHRyZXR1cm4gdHlwZW9mIHRoaXMuY29udGV4dFt0aGlzLmtleV0gIT09IFwidW5kZWZpbmVkXCI7XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBAcmV0dXJucyB7Kn0gdGhlIHN0b3JlZCB2YWx1ZSwgdW5kZWZpbmVkIHdoZW4gdGhlcmUgaXMgbm9uZVxyXG5cdCAqL1xyXG5cdGdldCB2YWx1ZSgpe1xyXG5cdFx0cmV0dXJuIHRoaXMuY29udGV4dFt0aGlzLmtleV07XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBAcGFyYW0geyp9IGRhdGFcclxuXHQgKi9cclxuXHRzZXQgdmFsdWUoZGF0YSl7XHJcblx0XHR0aGlzLmNvbnRleHRbdGhpcy5rZXldID0gZGF0YTtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIEFkZHMgYSB2YWx1ZSBuZXh0IHRvIHdoYXQgaXMgYWxyZWFkeSB0aGVyZTogd3JpdGVzIGl0IHdoZW4gdGhlIGtleSBob2xkcyBub3RoaW5nLCB0dXJucyB0aGVcclxuXHQgKiB2YWx1ZSBpbnRvIGFuIGFycmF5IG9mIGJvdGggd2hlbiBpdCBob2xkcyBvbmUsIGFuZCBwdXNoZXMgb250byB0aGUgYXJyYXkgd2hlbiBpdCBob2xkcyBvbmVcclxuXHQgKiBhbHJlYWR5LlxyXG5cdCAqXHJcblx0ICogVGhlIHZhbHVlIGl0c2VsZiBpcyBub3QgbG9va2VkIGF0IC0gYXBwZW5kaW5nIHVuZGVmaW5lZCBwdXRzIHVuZGVmaW5lZCBpbnRvIHRoZSBhcnJheS5cclxuXHQgKlxyXG5cdCAqIEBwYXJhbSB7Kn0gZGF0YVxyXG5cdCAqXHJcblx0ICogQGV4YW1wbGVcclxuXHQgKiBwcm9wZXJ0eS5hcHBlbmQgPSAxOyAgIC8vIHtrZXkgOiAxfVxyXG5cdCAqIHByb3BlcnR5LmFwcGVuZCA9IDI7ICAgLy8ge2tleSA6IFsxLCAyXX1cclxuXHQgKiBwcm9wZXJ0eS5hcHBlbmQgPSAzOyAgIC8vIHtrZXkgOiBbMSwgMiwgM119XHJcblx0ICovXHJcblx0c2V0IGFwcGVuZChkYXRhKSB7XHJcblx0XHRpZighdGhpcy5oYXNWYWx1ZSlcclxuXHRcdFx0dGhpcy52YWx1ZSA9IGRhdGE7XHJcblx0XHRlbHNlIHtcclxuXHRcdFx0Y29uc3QgdmFsdWUgPSB0aGlzLnZhbHVlO1xyXG5cdFx0XHRpZih2YWx1ZSBpbnN0YW5jZW9mIEFycmF5KVxyXG5cdFx0XHRcdHZhbHVlLnB1c2goZGF0YSk7XHJcblx0XHRcdGVsc2VcclxuXHRcdFx0XHR0aGlzLnZhbHVlID0gW3RoaXMudmFsdWUsIGRhdGFdO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogRGVsZXRlcyB0aGUga2V5IGZyb20gdGhlIG9iamVjdC4gRG9lcyBub3RoaW5nIHdoZW4gaXQgaXMgbm90IHRoZXJlLlxyXG5cdCAqXHJcblx0ICogQHJldHVybnMge3ZvaWR9XHJcblx0ICovXHJcblx0cmVtb3ZlKCl7XHJcblx0XHRkZWxldGUgdGhpcy5jb250ZXh0W3RoaXMua2V5XTtcclxuXHR9XHJcblx0XHJcblx0LyoqXHJcblx0ICogTG9hZHMgdGhlIHByb3BlcnR5IGEgZG90dGVkIHBhdGggYWRkcmVzc2VzLiBFdmVyeSBwYXJ0IG9mIHRoZSBwYXRoIGlzIHRyaW1tZWQsIHNvIFwiIGEgLiBiIFwiXHJcblx0ICogYWRkcmVzc2VzIHRoZSBzYW1lIHByb3BlcnR5IGFzIFwiYS5iXCIuXHJcblx0ICpcclxuXHQgKiBBIG1pc3Npbmcgc3RlcCBpcyBjcmVhdGVkIHdpdGggY3JlYXRlLCBvdGhlcndpc2UgdGhlIHBhdGggaXMgcmVwb3J0ZWQgYXMgbm90IGxvYWRhYmxlLiBBIHN0ZXBcclxuXHQgKiBob2xkaW5nIHNvbWV0aGluZyB0aGF0IGlzIG5vIG9iamVjdCBjYW5ub3QgYmUgd2Fsa2VkIGludG8gYXQgYWxsIC0gdGhhdCBpcyBhIGJyb2tlbiBwYXRoLCBub3QgYVxyXG5cdCAqIG1pc3Npbmcgb25lLCBhbmQgaXQgaXMgcmVwb3J0ZWQgYXMgYW4gZXJyb3IgcmVnYXJkbGVzcyBvZiBjcmVhdGUuXHJcblx0ICpcclxuXHQgKiBAcGFyYW0ge29iamVjdH0gZGF0YSB0aGUgb2JqZWN0IHRvIHdhbGtcclxuXHQgKiBAcGFyYW0ge3N0cmluZ30ga2V5IG5hbWUgb2YgdGhlIHByb3BlcnR5LCBhIGRvdHRlZCBwYXRoIGFkZHJlc3NlcyBhIG5lc3RlZCBvbmVcclxuXHQgKiBAcGFyYW0ge2Jvb2xlYW59IFtjcmVhdGU9dHJ1ZV0gY3JlYXRlIGEgbWlzc2luZyBzdGVwIG9uIHRoZSB3YXlcclxuXHQgKiBAcmV0dXJucyB7T2JqZWN0UHJvcGVydHl8bnVsbH0gbnVsbCB3aGVuIGEgc3RlcCBpcyBtaXNzaW5nIGFuZCBjcmVhdGUgaXMgZmFsc2VcclxuXHQgKiBAdGhyb3dzIHtUeXBlRXJyb3J9IHdoZW4gYSBzdGVwIG9mIHRoZSBwYXRoIGhvbGRzIHNvbWV0aGluZyB0aGF0IGlzIG5vIG9iamVjdFxyXG5cdCAqXHJcblx0ICogQGV4YW1wbGVcclxuXHQgKiBPYmplY3RQcm9wZXJ0eS5sb2FkKHthIDoge2IgOiAxfX0sIFwiYS5iXCIpLnZhbHVlOyAgIC8vIDFcclxuXHQgKiBPYmplY3RQcm9wZXJ0eS5sb2FkKHtsaXN0IDogWzEsIDJdfSwgXCJsaXN0LjFcIikudmFsdWU7ICAgLy8gMiwgYW4gYXJyYXkgaXMgYW4gb2JqZWN0XHJcblx0ICogT2JqZWN0UHJvcGVydHkubG9hZCh7fSwgXCJhLmJcIiwgZmFsc2UpOyAgICAgICAgICAgICAvLyBudWxsXHJcblx0ICogT2JqZWN0UHJvcGVydHkubG9hZCh7YSA6IDB9LCBcImEuYlwiKTsgICAgICAgICAgICAgICAvLyB0aHJvd3MsIDAgaXMgbm8gb2JqZWN0XHJcblx0ICovXHJcblx0c3RhdGljIGxvYWQoZGF0YSwga2V5LCBjcmVhdGU9dHJ1ZSkge1xyXG5cdFx0bGV0IGNvbnRleHQgPSBkYXRhO1xyXG5cdFx0Y29uc3Qga2V5cyA9IGtleS5zcGxpdChcIi5cIik7XHJcblx0XHRsZXQgbmFtZSA9IGtleXMuc2hpZnQoKS50cmltKCk7XHJcblx0XHR3aGlsZShrZXlzLmxlbmd0aCA+IDApe1xyXG5cdFx0XHRpZih0eXBlb2YgY29udGV4dFtuYW1lXSA9PT0gXCJ1bmRlZmluZWRcIiB8fCBjb250ZXh0W25hbWVdID09PSBudWxsKXtcclxuXHRcdFx0XHRpZighY3JlYXRlKVxyXG5cdFx0XHRcdFx0cmV0dXJuIG51bGw7XHJcblxyXG5cdFx0XHRcdGNvbnRleHRbbmFtZV0gPSB7fVxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRhc3NlcnREZXNjZW5kYWJsZShjb250ZXh0W25hbWVdLCBuYW1lLCBrZXkpO1xyXG5cdFx0XHRjb250ZXh0ID0gY29udGV4dFtuYW1lXTtcclxuXHRcdFx0bmFtZSA9IGtleXMuc2hpZnQoKS50cmltKCk7XHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIG5ldyBPYmplY3RQcm9wZXJ0eShuYW1lLCBjb250ZXh0KTtcclxuXHR9XHJcbn07IiwiLyoqXHJcbiAqIFV0aWxpdGllcyB0byBpbnNwZWN0LCBjb21wYXJlLCBtZXJnZSBhbmQgZmlsdGVyIGphdmFzY3JpcHQgb2JqZWN0cy5cclxuICpcclxuICogU2V2ZXJhbCBmdW5jdGlvbnMgc2hhcmUgb25lIG5vdGlvbiBvZiBkYXRhOiBwcmltaXRpdmVzLCBzaW1wbGUgb2JqZWN0cywgQXJyYXksIERhdGUsIFJlZ0V4cCwgTWFwXHJcbiAqIGFuZCBTZXQuIHtAbGluayBpc1Bvam99IGRlY2lkZXMgd2hldGhlciBhIHZhbHVlIHN0YXlzIHdpdGhpbiBpdCwge0BsaW5rIGVxdWFsUG9qb30gY29tcGFyZXMgdGhvc2VcclxuICogdHlwZXMgYnkgdmFsdWUsIGFuZCB7QGxpbmsgbWVyZ2V9IHRyZWF0cyBldmVyeXRoaW5nIG91dHNpZGUgb2YgaXQgYXMgYSB2YWx1ZSB0byBiZSByZXBsYWNlZC5cclxuICpcclxuICogQG1vZHVsZSBPYmplY3RVdGlsc1xyXG4gKi9cclxuaW1wb3J0IE9iamVjdFByb3BlcnR5IGZyb20gXCIuL09iamVjdFByb3BlcnR5LmpzXCI7XHJcblxyXG4vKipcclxuICogQHByaXZhdGVcclxuICogQHBhcmFtIHtBcnJheX0gYVxyXG4gKiBAcGFyYW0ge0FycmF5fSBiXHJcbiAqIEBwYXJhbSB7V2Vha01hcH0gc2VlbiBwYWlycyBjdXJyZW50bHkgdW5kZXIgY29tcGFyaXNvblxyXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cclxuICovXHJcbmNvbnN0IGVxdWFsQXJyYXkgPSAoYSwgYiwgc2VlbikgPT4ge1xyXG5cdGlmIChhLmxlbmd0aCAhPT0gYi5sZW5ndGgpIHJldHVybiBmYWxzZTtcclxuXHJcblx0Y29uc3QgbGVuZ3RoID0gYS5sZW5ndGg7XHJcblx0Zm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykgaWYgKCFpbnRlcm5hbEVxdWFsUG9qbyhhW2ldLCBiW2ldLCBzZWVuKSkgcmV0dXJuIGZhbHNlO1xyXG5cclxuXHRyZXR1cm4gdHJ1ZTtcclxufTtcclxuXHJcbi8qKlxyXG4gKiBBIHNldCBpcyB1bm9yZGVyZWQsIHNvIGV2ZXJ5IGVudHJ5IG9mIGEgaGFzIHRvIGZpbmQgaXRzIG93biBwYXJ0bmVyIGluIGIuXHJcbiAqXHJcbiAqIEBwcml2YXRlXHJcbiAqIEBwYXJhbSB7U2V0fSBhXHJcbiAqIEBwYXJhbSB7U2V0fSBiXHJcbiAqIEBwYXJhbSB7V2Vha01hcH0gc2VlbiBwYWlycyBjdXJyZW50bHkgdW5kZXIgY29tcGFyaXNvblxyXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cclxuICovXHJcbmNvbnN0IGVxdWFsU2V0ID0gKGEsIGIsIHNlZW4pID0+IHtcclxuXHRpZiAoYS5zaXplICE9PSBiLnNpemUpIHJldHVybiBmYWxzZTtcclxuXHJcblx0Y29uc3QgcmVtYWluaW5nID0gQXJyYXkuZnJvbShiKTtcclxuXHRmb3IgKGNvbnN0IGVudHJ5QSBvZiBhKSB7XHJcblx0XHRjb25zdCBpbmRleCA9IHJlbWFpbmluZy5maW5kSW5kZXgoKGVudHJ5QikgPT4gaW50ZXJuYWxFcXVhbFBvam8oZW50cnlBLCBlbnRyeUIsIHNlZW4pKTtcclxuXHRcdGlmIChpbmRleCA8IDApIHJldHVybiBmYWxzZTtcclxuXHJcblx0XHRyZW1haW5pbmcuc3BsaWNlKGluZGV4LCAxKTtcclxuXHR9XHJcblxyXG5cdHJldHVybiB0cnVlO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIEEgbWFwIGlzIHVub3JkZXJlZCBhcyB3ZWxsIGFuZCBpdHMga2V5cyBtYXkgYmUgb2JqZWN0cywgc28gdGhlIGtleXMgZ2V0IGNvbXBhcmVkIGJ5IHZhbHVlIHRvby5cclxuICpcclxuICogQHByaXZhdGVcclxuICogQHBhcmFtIHtNYXB9IGFcclxuICogQHBhcmFtIHtNYXB9IGJcclxuICogQHBhcmFtIHtXZWFrTWFwfSBzZWVuIHBhaXJzIGN1cnJlbnRseSB1bmRlciBjb21wYXJpc29uXHJcbiAqIEByZXR1cm5zIHtib29sZWFufVxyXG4gKi9cclxuY29uc3QgZXF1YWxNYXAgPSAoYSwgYiwgc2VlbikgPT4ge1xyXG5cdGlmIChhLnNpemUgIT09IGIuc2l6ZSkgcmV0dXJuIGZhbHNlO1xyXG5cclxuXHRjb25zdCByZW1haW5pbmcgPSBBcnJheS5mcm9tKGIpO1xyXG5cdGZvciAoY29uc3QgW2tleUEsIHZhbHVlQV0gb2YgYSkge1xyXG5cdFx0Y29uc3QgaW5kZXggPSByZW1haW5pbmcuZmluZEluZGV4KChba2V5QiwgdmFsdWVCXSkgPT4gaW50ZXJuYWxFcXVhbFBvam8oa2V5QSwga2V5Qiwgc2VlbikgJiYgaW50ZXJuYWxFcXVhbFBvam8odmFsdWVBLCB2YWx1ZUIsIHNlZW4pKTtcclxuXHRcdGlmIChpbmRleCA8IDApIHJldHVybiBmYWxzZTtcclxuXHJcblx0XHRyZW1haW5pbmcuc3BsaWNlKGluZGV4LCAxKTtcclxuXHR9XHJcblxyXG5cdHJldHVybiB0cnVlO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIENvbXBhcmVzIHR3byBvYmplY3RzIGJ5IHByb3RvdHlwZSBhbmQgYnkgdGhlaXIgb3duIGVudW1lcmFibGUgcHJvcGVydGllcy5cclxuICpcclxuICogQHByaXZhdGVcclxuICogQHBhcmFtIHtvYmplY3R9IGFcclxuICogQHBhcmFtIHtvYmplY3R9IGJcclxuICogQHBhcmFtIHtXZWFrTWFwfSBzZWVuIHBhaXJzIGN1cnJlbnRseSB1bmRlciBjb21wYXJpc29uXHJcbiAqIEByZXR1cm5zIHtib29sZWFufVxyXG4gKi9cclxuY29uc3QgZXF1YWxPYmplY3QgPSAoYSwgYiwgc2VlbikgPT4ge1xyXG5cdGlmIChPYmplY3QuZ2V0UHJvdG90eXBlT2YoYSkgIT09IE9iamVjdC5nZXRQcm90b3R5cGVPZihiKSkgcmV0dXJuIGZhbHNlO1xyXG5cclxuXHRjb25zdCBwcm9wZXJ0aWVzQSA9IE9iamVjdC5rZXlzKGEpO1xyXG5cdGNvbnN0IHByb3BlcnRpZXNCID0gT2JqZWN0LmtleXMoYik7XHJcblx0aWYgKHByb3BlcnRpZXNBLmxlbmd0aCAhPT0gcHJvcGVydGllc0IubGVuZ3RoKSByZXR1cm4gZmFsc2U7XHJcblxyXG5cdGZvciAoY29uc3Qga2V5IG9mIHByb3BlcnRpZXNBKSB7XHJcblx0XHQvLyBlcXVhbCBrZXkgY291bnRzIGFsb25lIHdvdWxkIGxldCB7eDoxLCB5OnVuZGVmaW5lZH0gcGFzcyBhZ2FpbnN0IHt4OjEsIHo6dW5kZWZpbmVkfVxyXG5cdFx0aWYgKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYiwga2V5KSkgcmV0dXJuIGZhbHNlO1xyXG5cdFx0aWYgKCFpbnRlcm5hbEVxdWFsUG9qbyhhW2tleV0sIGJba2V5XSwgc2VlbikpIHJldHVybiBmYWxzZTtcclxuXHR9XHJcblxyXG5cdHJldHVybiB0cnVlO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIEEgY3ljbGljIHN0cnVjdHVyZSBjYW4gb25seSBiZSBkZWNpZGVkIGNvLWluZHVjdGl2ZWx5OiBhIHBhaXIgYWxyZWFkeSB1bmRlciBjb21wYXJpc29uIGNvdW50cyBhc1xyXG4gKiBlcXVhbCwgb3RoZXJ3aXNlIHRoZSB3YWxrIHdvdWxkIG5ldmVyIGNvbWUgYmFjay5cclxuICpcclxuICogQHByaXZhdGVcclxuICogQHBhcmFtIHtXZWFrTWFwfSBzZWVuIHBhaXJzIGN1cnJlbnRseSB1bmRlciBjb21wYXJpc29uXHJcbiAqIEBwYXJhbSB7b2JqZWN0fSBhXHJcbiAqIEBwYXJhbSB7b2JqZWN0fSBiXHJcbiAqIEByZXR1cm5zIHtib29sZWFufSB0cnVlIHdoZW4gdGhpcyBwYWlyIGlzIGFscmVhZHkgYmVpbmcgY29tcGFyZWQgZnVydGhlciB1cCB0aGUgc3RhY2tcclxuICovXHJcbmNvbnN0IGlzQ29tcGFyaW5nID0gKHNlZW4sIGEsIGIpID0+IHtcclxuXHRjb25zdCBwYXJ0bmVycyA9IHNlZW4uZ2V0KGEpO1xyXG5cdHJldHVybiAhIXBhcnRuZXJzICYmIHBhcnRuZXJzLmhhcyhiKTtcclxufTtcclxuXHJcbi8qKlxyXG4gKiBOb3RlcyBhIHBhaXIgYXMgYmVpbmcgY29tcGFyZWQsIHNvIGEgY3ljbGUgcnVubmluZyB0aHJvdWdoIGl0IHRlcm1pbmF0ZXMuXHJcbiAqXHJcbiAqIEBwcml2YXRlXHJcbiAqIEBwYXJhbSB7V2Vha01hcH0gc2VlbiBwYWlycyBjdXJyZW50bHkgdW5kZXIgY29tcGFyaXNvblxyXG4gKiBAcGFyYW0ge29iamVjdH0gYVxyXG4gKiBAcGFyYW0ge29iamVjdH0gYlxyXG4gKiBAcmV0dXJucyB7dm9pZH1cclxuICovXHJcbmNvbnN0IHJlbWVtYmVyQ29tcGFyaW5nID0gKHNlZW4sIGEsIGIpID0+IHtcclxuXHRjb25zdCBwYXJ0bmVycyA9IHNlZW4uZ2V0KGEpO1xyXG5cdGlmIChwYXJ0bmVycykgcGFydG5lcnMuYWRkKGIpO1xyXG5cdGVsc2Ugc2Vlbi5zZXQoYSwgbmV3IFdlYWtTZXQoW2JdKSk7XHJcbn07XHJcblxyXG4vKipcclxuICogQ2hlY2tzIHdoZXRoZXIgYSB2YWx1ZSBpcyBudWxsIG9yIHVuZGVmaW5lZC5cclxuICpcclxuICogVmFsdWVIZWxwZXIubm9WYWx1ZSBhbnN3ZXJzIHRoZSBzYW1lIHF1ZXN0aW9uLiBCb3RoIGFyZSBrZXB0IG9uIHB1cnBvc2UsIHNvIFZhbHVlSGVscGVyIHN0YXlzIGZyZWVcclxuICogb2YgYSBkZXBlbmRlbmN5IG9uIHRoaXMgbW9kdWxlIC0gc2VlIHRoZSBub3RlIHRoZXJlLlxyXG4gKlxyXG4gKiBAcGFyYW0geyp9IG9iamVjdCB0aGUgdmFsdWUgdG8gYmUgdGVzdGluZ1xyXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cclxuICovXHJcbmV4cG9ydCBjb25zdCBpc051bGxPclVuZGVmaW5lZCA9IChvYmplY3QpID0+IHtcclxuXHRyZXR1cm4gb2JqZWN0ID09IG51bGwgfHwgdHlwZW9mIG9iamVjdCA9PT0gXCJ1bmRlZmluZWRcIjtcclxufTtcclxuXHJcbi8qKlxyXG4gKiBDaGVja3Mgd2hldGhlciBhIHZhbHVlIGlzIGEgcHJpbWl0aXZlLlxyXG4gKlxyXG4gKiBudWxsIGFuZCB1bmRlZmluZWQgY291bnQgYXMgcHJpbWl0aXZlcy4gQSBzeW1ib2wgZG9lcyBub3QgLSBpdCBpcyB0cmVhdGVkIGFzIGFuIG9wYXF1ZSB2YWx1ZVxyXG4gKiB0aHJvdWdob3V0IHRoaXMgbW9kdWxlLCBzbyB0aGF0IHtAbGluayBpc1Bvam99IGtlZXBzIHJlamVjdGluZyBpdCBhcyBkYXRhLlxyXG4gKlxyXG4gKiBAcGFyYW0geyp9IG9iamVjdCB0aGUgdmFsdWUgdG8gYmUgdGVzdGluZ1xyXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cclxuICovXHJcbmV4cG9ydCBjb25zdCBpc1ByaW1pdGl2ZSA9IChvYmplY3QpID0+IHtcclxuXHRpZiAob2JqZWN0ID09IG51bGwpIHJldHVybiB0cnVlO1xyXG5cclxuXHRjb25zdCB0eXBlID0gdHlwZW9mIG9iamVjdDtcclxuXHRzd2l0Y2ggKHR5cGUpIHtcclxuXHRcdGNhc2UgXCJudW1iZXJcIjpcclxuXHRcdGNhc2UgXCJiaWdpbnRcIjpcclxuXHRcdGNhc2UgXCJib29sZWFuXCI6XHJcblx0XHRjYXNlIFwic3RyaW5nXCI6XHJcblx0XHRjYXNlIFwidW5kZWZpbmVkXCI6XHJcblx0XHRcdHJldHVybiB0cnVlO1xyXG5cdH1cclxuXHJcblx0cmV0dXJuIGZhbHNlO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIENoZWNrcyB3aGV0aGVyIGEgdmFsdWUgaXMgYW4gb2JqZWN0LlxyXG4gKlxyXG4gKiBFdmVyeSBvYmplY3QgY291bnRzLCBBcnJheSwgTWFwLCBEYXRlIGFuZCBjbGFzcyBpbnN0YW5jZXMgaW5jbHVkZWQuIFVzZSB7QGxpbmsgaXNQb2pvfSB0byBhc2sgZm9yXHJcbiAqIGEgc2ltcGxlIGRhdGEgb2JqZWN0IGluc3RlYWQuXHJcbiAqXHJcbiAqIEBwYXJhbSB7Kn0gb2JqZWN0IHRoZSB2YWx1ZSB0byBiZSB0ZXN0aW5nXHJcbiAqIEByZXR1cm5zIHtib29sZWFufVxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGlzT2JqZWN0ID0gKG9iamVjdCkgPT4ge1xyXG5cdGlmIChpc051bGxPclVuZGVmaW5lZChvYmplY3QpKSByZXR1cm4gZmFsc2U7XHJcblxyXG5cdHJldHVybiB0eXBlb2Ygb2JqZWN0ID09PSBcIm9iamVjdFwiO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIENvbXBhcmVzIHR3byB2YWx1ZXMgYnkgdmFsdWUuXHJcbiAqXHJcbiAqIFRoZSB0eXBlcyBjb21wYXJlZCBieSB2YWx1ZSBhcmUgdGhlIG9uZXMge0BsaW5rIGlzUG9qb30gYWNjZXB0cyBhcyBkYXRhOiBwcmltaXRpdmVzLCBzaW1wbGVcclxuICogb2JqZWN0cywgQXJyYXksIERhdGUsIFJlZ0V4cCwgTWFwIGFuZCBTZXQuIEEgRGF0ZSBpcyBjb21wYXJlZCBieSBpdHMgdGltZSwgYSBSZWdFeHAgYnkgc291cmNlIGFuZFxyXG4gKiBmbGFncy4gU2V0IGFuZCBNYXAgYXJlIHVub3JkZXJlZCwgc28gdGhlaXIgZW50cmllcyBhcmUgbWF0Y2hlZCBieSB2YWx1ZSBpbnN0ZWFkIG9mIGJ5IHBvc2l0aW9uLFxyXG4gKiBhbmQgdGhlIGtleXMgb2YgYSBNYXAgdGFrZSBwYXJ0IGluIHRoYXQgY29tcGFyaXNvbi5cclxuICpcclxuICogU2ltcGxlIG9iamVjdHMgYW5kIGNsYXNzIGluc3RhbmNlcyBuZWVkIHRoZSBzYW1lIHByb3RvdHlwZSBhbmQgdGhlIHNhbWUgb3duIGVudW1lcmFibGVcclxuICogcHJvcGVydGllcy4gRXZlcnkgb3RoZXIgb2JqZWN0IC0gRXJyb3IsIFByb21pc2UsIFdlYWtNYXAgYW5kIHRoZSBsaWtlIC0ga2VlcHMgaXRzIHN0YXRlIG91dCBvZlxyXG4gKiByZWFjaCwgc28gdGhvc2UgY29tcGFyZSBieSBpZGVudGl0eSBvbmx5LiBGdW5jdGlvbnMgYW5kIHN5bWJvbHMgZG8gYXMgd2VsbC5cclxuICpcclxuICogQ3ljbGljIHN0cnVjdHVyZXMgYXJlIHN1cHBvcnRlZC5cclxuICpcclxuICogQHBhcmFtIHsqfSBhXHJcbiAqIEBwYXJhbSB7Kn0gYlxyXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cclxuICpcclxuICogQGV4YW1wbGVcclxuICogZXF1YWxQb2pvKHthIDogWzEsIDJdfSwge2EgOiBbMSwgMl19KTsgICAgICAgICAgICAgICAvLyB0cnVlXHJcbiAqIGVxdWFsUG9qbyhuZXcgU2V0KFsxLCAyXSksIG5ldyBTZXQoWzIsIDFdKSk7ICAgICAgICAgLy8gdHJ1ZSwgYSBzZXQgaXMgdW5vcmRlcmVkXHJcbiAqIGVxdWFsUG9qbyhuZXcgRGF0ZSgwKSwgbmV3IERhdGUoMSkpOyAgICAgICAgICAgICAgICAgLy8gZmFsc2VcclxuICogZXF1YWxQb2pvKG5ldyBFcnJvcihcInhcIiksIG5ldyBFcnJvcihcInhcIikpOyAgICAgICAgICAgLy8gZmFsc2UsIGNvbXBhcmVkIGJ5IGlkZW50aXR5XHJcbiAqL1xyXG5leHBvcnQgY29uc3QgZXF1YWxQb2pvID0gKGEsIGIpID0+IGludGVybmFsRXF1YWxQb2pvKGEsIGIsIG5ldyBXZWFrTWFwKCkpO1xyXG5cclxuXHJcbi8qKlxyXG4qIEBwYXJhbSB7Kn0gYVxyXG4gKiBAcGFyYW0geyp9IGJcclxuICogQHBhcmFtIHtXZWFrTWFwfSBzZWVuIGludGVybmFsLCB0cmFja3MgdGhlIHBhaXJzIGN1cnJlbnRseSB1bmRlciBjb21wYXJpc29uXHJcbiAqIEByZXR1cm5zIHtib29sZWFufVxyXG4gKi9cclxuY29uc3QgaW50ZXJuYWxFcXVhbFBvam8gPSAoYSwgYiwgc2VlbikgPT4ge1xyXG5cdGlmIChpc051bGxPclVuZGVmaW5lZChhKSB8fCBpc051bGxPclVuZGVmaW5lZChiKSkgcmV0dXJuIGEgPT09IGI7XHJcblx0aWYgKGEgPT09IGIpIHJldHVybiB0cnVlO1xyXG5cdGlmIChpc1ByaW1pdGl2ZShhKSB8fCBpc1ByaW1pdGl2ZShiKSkgcmV0dXJuIGEgPT09IGI7XHJcblxyXG5cdGNvbnN0IHR5cGVBID0gdHlwZW9mIGE7XHJcblx0aWYgKHR5cGVBICE9PSB0eXBlb2YgYikgcmV0dXJuIGZhbHNlO1xyXG5cdGlmICh0eXBlQSAhPT0gXCJvYmplY3RcIikgcmV0dXJuIGEgPT09IGI7IC8vIGZ1bmN0aW9uIGFuZCBzeW1ib2xcclxuXHJcblx0aWYgKGlzQ29tcGFyaW5nKHNlZW4sIGEsIGIpKSByZXR1cm4gdHJ1ZTtcclxuXHRyZW1lbWJlckNvbXBhcmluZyhzZWVuLCBhLCBiKTtcclxuXHJcblx0aWYoYSBpbnN0YW5jZW9mIERhdGUpIHJldHVybiAgYiBpbnN0YW5jZW9mIERhdGUgPyBPYmplY3QuaXMoYS5nZXRUaW1lKCksIGIuZ2V0VGltZSgpKSA6IGZhbHNlO1xyXG5cdGVsc2UgaWYoYSBpbnN0YW5jZW9mIFJlZ0V4cCkgcmV0dXJuIGIgaW5zdGFuY2VvZiBSZWdFeHAgPyAoYS5zb3VyY2UgPT09IGIuc291cmNlICYmIGEuZmxhZ3MgPT09IGIuZmxhZ3MpIDogZmFsc2U7XHJcblx0ZWxzZSBpZihhIGluc3RhbmNlb2YgQXJyYXkpIHJldHVybiBiIGluc3RhbmNlb2YgQXJyYXkgPyBlcXVhbEFycmF5KGEsIGIsIHNlZW4pIDogZmFsc2U7XHJcblx0ZWxzZSBpZihhIGluc3RhbmNlb2YgU2V0KSByZXR1cm4gYiBpbnN0YW5jZW9mIFNldCA/IGVxdWFsU2V0KGEsIGIsIHNlZW4pIDogZmFsc2U7XHJcblx0ZWxzZSBpZihhIGluc3RhbmNlb2YgTWFwKSByZXR1cm4gYiBpbnN0YW5jZW9mIE1hcCA/IGVxdWFsTWFwKGEsIGIsIHNlZW4pIDogZmFsc2U7XHJcblx0ZWxzZSBpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGEpICE9PSBcIltvYmplY3QgT2JqZWN0XVwiKSByZXR1cm4gZmFsc2U7XHRcclxuXHRlbHNlIHJldHVybiBlcXVhbE9iamVjdChhLCBiLCBzZWVuKTtcclxufTtcclxuXHJcbi8qKlxyXG4gKiBBIHBsYWluIG9iamVjdCBvd25zIGVpdGhlciBubyBwcm90b3R5cGUgYXQgYWxsIG9yIGEgcHJvdG90eXBlIHRoYXQgaXRzZWxmIGhhcyBub25lLiBDaGVja2luZyB0aGVcclxuICogY2hhaW4gbGVuZ3RoIGluc3RlYWQgb2YgY29tcGFyaW5nIGFnYWluc3QgT2JqZWN0LnByb3RvdHlwZSBrZWVwcyB0aGlzIHdvcmtpbmcgYWNyb3NzIHJlYWxtcyxcclxuICogd2hlcmUgYW4gaWZyYW1lIGJyaW5ncyBpdHMgb3duIE9iamVjdC5wcm90b3R5cGUuXHJcbiAqXHJcbiAqIEBwcml2YXRlXHJcbiAqIEBwYXJhbSB7Kn0gb2JqZWN0XHJcbiAqIEByZXR1cm5zIHtib29sZWFufVxyXG4gKi9cclxuY29uc3QgaXNQbGFpbk9iamVjdCA9IChvYmplY3QpID0+IHtcclxuXHRpZiAob2JqZWN0ID09PSBudWxsIHx8IHR5cGVvZiBvYmplY3QgIT09IFwib2JqZWN0XCIpIHJldHVybiBmYWxzZTtcclxuXHRjb25zdCBwcm90b3R5cGUgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2Yob2JqZWN0KTtcclxuXHRyZXR1cm4gcHJvdG90eXBlID09PSBudWxsIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihwcm90b3R5cGUpID09PSBudWxsO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIFdhbGtzIGEgdmFsdWUgYW5kIGRlY2lkZXMgd2hldGhlciBldmVyeXRoaW5nIHJlYWNoYWJsZSBmcm9tIGl0IGlzIGRhdGEuXHJcbiAqXHJcbiAqIEBwcml2YXRlXHJcbiAqIEBwYXJhbSB7Kn0gdmFsdWVcclxuICogQHBhcmFtIHtXZWFrU2V0fSBbc2Vlbl0gdmFsdWVzIGFscmVhZHkgd2Fsa2VkLCBjbG9zZXMgY3ljbGVzXHJcbiAqIEByZXR1cm5zIHtib29sZWFufVxyXG4gKi9cclxuY29uc3QgaXNEYXRhVmFsdWUgPSAodmFsdWUsIHNlZW4gPSBuZXcgV2Vha1NldCgpKSA9PiB7XHJcblx0aWYgKGlzUHJpbWl0aXZlKHZhbHVlKSkgcmV0dXJuIHRydWU7XHJcblx0ZWxzZSBpZiAodmFsdWUgaW5zdGFuY2VvZiBEYXRlKSByZXR1cm4gdHJ1ZTtcclxuXHRlbHNlIGlmICh2YWx1ZSBpbnN0YW5jZW9mIFJlZ0V4cCkgcmV0dXJuIHRydWU7XHJcblxyXG5cdGlmIChzZWVuLmhhcyh2YWx1ZSkpIHJldHVybiB0cnVlO1xyXG5cdHNlZW4uYWRkKHZhbHVlKTtcclxuXHJcblx0aWYgKHZhbHVlIGluc3RhbmNlb2YgQXJyYXkpIHJldHVybiB2YWx1ZS5ldmVyeSgoZW50cnkpID0+IGlzRGF0YVZhbHVlKGVudHJ5LCBzZWVuKSk7XHJcblx0ZWxzZSBpZiAodmFsdWUgaW5zdGFuY2VvZiBNYXApIHtcclxuXHRcdGZvciAoY29uc3QgW2tleSwgZW50cnldIG9mIHZhbHVlKSB7XHJcblx0XHRcdGlmICghaXNEYXRhVmFsdWUoa2V5LCBzZWVuKSB8fCAhaXNEYXRhVmFsdWUoZW50cnksIHNlZW4pKSByZXR1cm4gZmFsc2U7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gdHJ1ZTtcclxuXHR9IGVsc2UgaWYgKHZhbHVlIGluc3RhbmNlb2YgU2V0KSB7XHJcblx0XHRmb3IgKGNvbnN0IGVudHJ5IG9mIHZhbHVlKSB7XHJcblx0XHRcdGlmICghaXNEYXRhVmFsdWUoZW50cnksIHNlZW4pKSByZXR1cm4gZmFsc2U7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gdHJ1ZTtcclxuXHR9IGVsc2UgaWYgKCFpc1BsYWluT2JqZWN0KHZhbHVlKSlcclxuXHRcdHJldHVybiBmYWxzZTsgLy8gY2xhc3MgaW5zdGFuY2VzIGFuZCBldmVyeSBvdGhlciBleG90aWMgb2JqZWN0XHJcblx0ZWxzZSB7XHJcblx0XHRmb3IgKGNvbnN0IGtleSBvZiBPYmplY3Qua2V5cyh2YWx1ZSkpIHtcclxuXHRcdFx0aWYgKCFpc0RhdGFWYWx1ZSh2YWx1ZVtrZXldLCBzZWVuKSkgcmV0dXJuIGZhbHNlO1xyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiB0cnVlO1xyXG5cdH1cclxufTtcclxuXHJcbi8qKlxyXG4gKiBDaGVja3Mgd2hldGhlciBhbiBvYmplY3QgaXMgYSBwdXJlIGRhdGEgb2JqZWN0LlxyXG4gKlxyXG4gKiBUaGUgb2JqZWN0IGl0c2VsZiBoYXMgdG8gYmUgYSBzaW1wbGUgb2JqZWN0IC0gbm8gQXJyYXksIE1hcCBvciBzb21ldGhpbmcgZWxzZS4gRXZlcnkgdmFsdWVcclxuICogcmVhY2hhYmxlIGZyb20gaXQgaGFzIHRvIGJlIGRhdGEgYXMgd2VsbDogcHJpbWl0aXZlcywgc2ltcGxlIG9iamVjdHMsIEFycmF5LCBEYXRlLCBSZWdFeHAsIE1hcCBvclxyXG4gKiBTZXQuIEZ1bmN0aW9ucyBhbmQgY2xhc3MgaW5zdGFuY2VzIGFyZSByZWplY3RlZCBhdCBhbnkgZGVwdGgsIGluY2x1ZGluZyBpbnNpZGUgYXJyYXlzIGFuZCBpbnNpZGVcclxuICogdGhlIGtleXMgYW5kIHZhbHVlcyBvZiBhIE1hcCBvciBTZXQuXHJcbiAqXHJcbiAqIE9ubHkgb3duIGVudW1lcmFibGUgcHJvcGVydGllcyBhcmUgaW5zcGVjdGVkLiBDeWNsaWMgcmVmZXJlbmNlcyBhcmUgYWxsb3dlZC5cclxuICpcclxuICogQHBhcmFtIHsqfSBvYmplY3QgdGhlIG9iamVjdCB0byBiZSB0ZXN0aW5nXHJcbiAqIEByZXR1cm5zIHtib29sZWFufVxyXG4gKlxyXG4gKiBAZXhhbXBsZVxyXG4gKiBpc1Bvam8oe2EgOiB7YiA6IFsxLCBuZXcgRGF0ZSgpXX19KTsgICAvLyB0cnVlXHJcbiAqIGlzUG9qbyh7YSA6ICgpID0+IHt9fSk7ICAgICAgICAgICAgICAgIC8vIGZhbHNlLCBhIGZ1bmN0aW9uIGlzIG5vIGRhdGFcclxuICogaXNQb2pvKHthIDogW3tiIDogbmV3IEZvbygpfV19KTsgICAgICAgLy8gZmFsc2UsIHJlamVjdGVkIGF0IGFueSBkZXB0aFxyXG4gKiBpc1Bvam8oW10pOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBmYWxzZSwgdGhlIG9iamVjdCBpdHNlbGYgaGFzIHRvIGJlIGEgc2ltcGxlIG9uZVxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGlzUG9qbyA9IChvYmplY3QpID0+IHtcclxuXHRpZiAoaXNOdWxsT3JVbmRlZmluZWQob2JqZWN0KSB8fCAhaXNQbGFpbk9iamVjdChvYmplY3QpKSByZXR1cm4gZmFsc2U7XHJcblxyXG5cdHJldHVybiBpc0RhdGFWYWx1ZShvYmplY3QpO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIEFwcGVuZHMgYSBwcm9wZXJ0eSB2YWx1ZSB0byBhbiBvYmplY3QuIElmIHRoZSBwcm9wZXJ0eSBhbHJlYWR5IGhvbGRzIGEgdmFsdWUsIGl0IGlzIGNvbnZlcnRlZFxyXG4gKiBpbnRvIGFuIGFycmF5IGNhcnJ5aW5nIGJvdGguIEFuIHVuZGVmaW5lZCB2YWx1ZSBpcyBpZ25vcmVkLlxyXG4gKlxyXG4gKiBUaGUga2V5IG1heSBhZGRyZXNzIGEgbmVzdGVkIHByb3BlcnR5IGJ5IGEgZG90dGVkIHBhdGgsIG1pc3Npbmcgc3RlcHMgYXJlIGNyZWF0ZWQgb24gdGhlIHdheS5cclxuICpcclxuICogQHBhcmFtIHtzdHJpbmd9IGFLZXkgbmFtZSBvZiB0aGUgcHJvcGVydHksIGEgZG90dGVkIHBhdGggYWRkcmVzc2VzIGEgbmVzdGVkIG9uZVxyXG4gKiBAcGFyYW0geyp9IGFEYXRhIHByb3BlcnR5IHZhbHVlXHJcbiAqIEBwYXJhbSB7b2JqZWN0fSBhT2JqZWN0IHRoZSBvYmplY3QgdG8gYXBwZW5kIHRoZSBwcm9wZXJ0eSB0b1xyXG4gKiBAcmV0dXJucyB7b2JqZWN0fSB0aGUgY2hhbmdlZCBvYmplY3RcclxuICpcclxuICogQGV4YW1wbGVcclxuICogYXBwZW5kKFwiYVwiLCAxLCB7fSk7ICAgICAgICAgICAgIC8vIHthIDogMX1cclxuICogYXBwZW5kKFwiYVwiLCAyLCB7YSA6IDF9KTsgICAgICAgIC8vIHthIDogWzEsIDJdfVxyXG4gKiBhcHBlbmQoXCJhLmJcIiwgMSwge30pOyAgICAgICAgICAgLy8ge2EgOiB7YiA6IDF9fVxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGFwcGVuZCA9IChhS2V5LCBhRGF0YSwgYU9iamVjdCkgPT4ge1xyXG5cdGlmICh0eXBlb2YgYURhdGEgIT09IFwidW5kZWZpbmVkXCIpIHtcclxuXHRcdGNvbnN0IHByb3BlcnR5ID0gT2JqZWN0UHJvcGVydHkubG9hZChhT2JqZWN0LCBhS2V5LCB0cnVlKTtcclxuXHRcdHByb3BlcnR5LmFwcGVuZCA9IGFEYXRhO1xyXG5cdH1cclxuXHRyZXR1cm4gYU9iamVjdDtcclxufTtcclxuXHJcbi8qKlxyXG4gKiBPd24gZW51bWVyYWJsZSBrZXlzLCBzdHJpbmdzIGFuZCBzeW1ib2xzIGFsaWtlIC0gdGhlIHNhbWUgc2V0IE9iamVjdC5hc3NpZ24gY29waWVzLlxyXG4gKlxyXG4gKiBAcHJpdmF0ZVxyXG4gKiBAcGFyYW0geyp9IHNvdXJjZVxyXG4gKiBAcmV0dXJucyB7QXJyYXk8c3RyaW5nfHN5bWJvbD59XHJcbiAqL1xyXG5jb25zdCBhc3NpZ25hYmxlS2V5cyA9IChzb3VyY2UpID0+IHtcclxuXHRjb25zdCBvYmplY3QgPSBPYmplY3Qoc291cmNlKTtcclxuXHRyZXR1cm4gUmVmbGVjdC5vd25LZXlzKG9iamVjdCkuZmlsdGVyKChrZXkpID0+IE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChvYmplY3QsIGtleSkpO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIE1lcmdlcyBvYmplY3RzIGludG8gYSB0YXJnZXQgb2JqZWN0IC0gYSByZWN1cnNpdmUgT2JqZWN0LmFzc2lnbi4gSXQgc3RlcHMgaW50byBvYmplY3RzIGFuZCBzdWJcclxuICogb2JqZWN0cy4gRXZlcnkgb3RoZXIgdmFsdWUgaXMgcmVwbGFjZWQgYnkgdGhlIHZhbHVlIGZyb20gdGhlIHNvdXJjZSBvYmplY3QuXHJcbiAqXHJcbiAqIExpa2UgT2JqZWN0LmFzc2lnbiBpdCBjb3BpZXMgb3duIGVudW1lcmFibGUgcHJvcGVydGllcyAtIHN0cmluZyBhbmQgc3ltYm9sIGtleXMgYWxpa2UgLSwgaWdub3Jlc1xyXG4gKiBudWxsIGFuZCB1bmRlZmluZWQgc291cmNlcyBhbmQgcmV0dXJucyB0aGUgdGFyZ2V0LiBVbmxpa2UgT2JqZWN0LmFzc2lnbiBpdCBzdGVwcyBpbnRvIGEgcHJvcGVydHlcclxuICogd2hlbiB0YXJnZXQgYW5kIHNvdXJjZSBib3RoIGhvbGQgYW4gb2JqZWN0LCBpbnN0ZWFkIG9mIHJlcGxhY2luZyBpdC5cclxuICpcclxuICogQSBjbGFzcyBpbnN0YW5jZSBjb3VudHMgYXMgYW4gb2JqZWN0IGhlcmUgYW5kIGlzIG1lcmdlZCBwcm9wZXJ0eSBieSBwcm9wZXJ0eSBqdXN0IGxpa2UgYSBzaW1wbGVcclxuICogb25lLiBUaGUgdGFyZ2V0IGtlZXBzIGl0cyBvd24gcHJvdG90eXBlLCBvbmx5IHRoZSBwcm9wZXJ0aWVzIG9mIHRoZSBzb3VyY2UgYXJlIGFwcGxpZWQgdG8gaXQgLSBhXHJcbiAqIG1lcmdlIG5ldmVyIHR1cm5zIHRoZSB0YXJnZXQgaW50byBhbiBpbnN0YW5jZSBvZiB0aGUgY2xhc3Mgb2YgdGhlIHNvdXJjZS5cclxuICpcclxuICogQW4gQXJyYXksIFNldCwgTWFwLCBEYXRlIG9yIFJlZ0V4cCBpcyBhbHdheXMgcmVwbGFjZWQgYXMgYSB3aG9sZSwgbmV2ZXIgbWVyZ2VkIGVudHJ5IGJ5IGVudHJ5LlxyXG4gKiBUaGF0IGFscmVhZHkgYXBwbGllcyB3aGVuIG9ubHkgb25lIG9mIGJvdGggc2lkZXMgaG9sZHMgb25lLiBUaGUgcmVzdWx0IHRoZXJlZm9yZSBjYXJyaWVzIHRoZVxyXG4gKiBjb250YWluZXIgb2YgdGhlIHNvdXJjZSB3aXRoIGl0cyBvd24gbGVuZ3RoIC0gbm90aGluZyBvZiB0aGUgdGFyZ2V0IHN1cnZpdmVzIGl0LCBub3QgZXZlbiBhblxyXG4gKiBvYmplY3Qgc2l0dGluZyBhdCB0aGUgc2FtZSBpbmRleCBvciB1bmRlciB0aGUgc2FtZSBrZXkuXHJcbiAqXHJcbiAqIEEga2V5IHdob3NlIHZhbHVlIGlzIGEgc3ltYm9sIGlzIHNraXBwZWQsIG9uIHRoZSB0YXJnZXQgc2lkZSBhcyB3ZWxsIGFzIG9uIHRoZSBzb3VyY2Ugc2lkZS4gQVxyXG4gKiBzeW1ib2wgY2FycmllcyBubyBkYXRhLCBzbyBzdWNoIGEgcHJvcGVydHkgaXMgbGVmdCB1bnRvdWNoZWQuXHJcbiAqXHJcbiAqIFRoZSBrZXkgX19wcm90b19fIGlzIHNraXBwZWQuIE9iamVjdC5hc3NpZ24gd291bGQgb25seSByZXBvaW50IHRoZSBwcm90b3R5cGUgb2YgdGhlIHRhcmdldCwgYnV0XHJcbiAqIG1lcmdpbmcgaW50byBpdCB3b3VsZCB3YWxrIGludG8gT2JqZWN0LnByb3RvdHlwZSBhbmQgbGVhayBpbnRvIGV2ZXJ5IG9iamVjdC5cclxuICpcclxuICogVGhlIHRhcmdldCBpcyBtb2RpZmllZCBpbiBwbGFjZS4gQSBzdWIgb2JqZWN0IG9mIGEgc291cmNlIHRoYXQgaGFzIG5vIGNvdW50ZXJwYXJ0IGluIHRoZSB0YXJnZXQgaXNcclxuICogdGFrZW4gb3ZlciBieSByZWZlcmVuY2UsIGp1c3QgbGlrZSBPYmplY3QuYXNzaWduIGRvZXMuXHJcbiAqXHJcbiAqIEBwYXJhbSB7b2JqZWN0fSB0YXJnZXQgdGhlIHRhcmdldCBvYmplY3QgdG8gbWVyZ2UgaW50bywgYSBuZXcgb2JqZWN0IHdoZW4gZmFsc3lcclxuICogQHBhcmFtIHsuLi5vYmplY3R9IHNvdXJjZXMgdGhlIHNvdXJjZSBvYmplY3RzLCBhcHBsaWVkIGluIG9yZGVyXHJcbiAqIEByZXR1cm5zIHtvYmplY3R9IHRoZSB0YXJnZXQgb2JqZWN0XHJcbiAqXHJcbiAqIEBleGFtcGxlXHJcbiAqIG1lcmdlKHthIDogMX0sIHtiIDogMn0pOyAgICAgICAgICAgICAgICAgICAgICAgICAgLy8ge2EgOiAxLCBiIDogMn1cclxuICogbWVyZ2Uoe2EgOiB7eCA6IDF9fSwge2EgOiB7eSA6IDJ9fSk7ICAgICAgICAgICAgICAvLyB7YSA6IHt4IDogMSwgeSA6IDJ9fVxyXG4gKiBtZXJnZSh7YSA6IFsxLCAyLCAzXX0sIHthIDogWzldfSk7ICAgICAgICAgICAgICAgIC8vIHthIDogWzldfSwgcmVwbGFjZWQgYXMgYSB3aG9sZVxyXG4gKiBtZXJnZSh7YSA6IG5ldyBGb28oMSl9LCB7YSA6IG5ldyBCYXIoMil9KTsgICAgICAgIC8vIGEgc3RheXMgYSBGb28sIGNhcnJ5aW5nIHRoZSBwcm9wZXJ0aWVzIG9mIGJvdGhcclxuICogbWVyZ2Uoe30sIHNvdXJjZTEsIHNvdXJjZTIsIHNvdXJjZTMpO1xyXG4gKi9cclxuZXhwb3J0IGNvbnN0IG1lcmdlID0gKHRhcmdldCwgLi4uc291cmNlcykgPT4ge1xyXG5cdGlmICghdGFyZ2V0KSB0YXJnZXQgPSB7fTtcclxuXHJcblx0c291cmNlc1xyXG5cdFx0LmZpbHRlcigoc291cmNlKSA9PiAhaXNOdWxsT3JVbmRlZmluZWQoc291cmNlKSlcclxuXHRcdC5mb3JFYWNoKChzb3VyY2UpID0+IHtcclxuXHRcdFx0Y29uc3Qga2V5cyA9IGFzc2lnbmFibGVLZXlzKHNvdXJjZSk7XHJcblx0XHRcdGtleXNcclxuXHRcdFx0XHQuZmlsdGVyKChrZXkpID0+IGtleSAhPSBcIl9fcHJvdG9fX1wiKVxyXG5cdFx0XHRcdC5maWx0ZXIoKGtleSkgPT4gdHlwZW9mIHRhcmdldFtrZXldICE9PSBcInN5bWJvbFwiKVxyXG5cdFx0XHRcdC5maWx0ZXIoKGtleSkgPT4gdHlwZW9mIHNvdXJjZVtrZXldICE9PSBcInN5bWJvbFwiKVxyXG5cdFx0XHRcdC5mb3JFYWNoKChrZXkpID0+IHtcclxuXHRcdFx0XHRcdGNvbnN0IHZhbHVlID0gc291cmNlW2tleV07XHJcblx0XHRcdFx0XHRjb25zdCBjdXJyZW50ID0gdGFyZ2V0W2tleV07XHJcblxyXG5cdFx0XHRcdFx0aWYoY3VycmVudCA9PSBudWxsICkgdGFyZ2V0W2tleV0gPSB2YWx1ZTtcclxuXHRcdFx0XHRcdGVsc2UgaWYoIHR5cGVvZiBjdXJyZW50ICE9PSB0eXBlb2YgdmFsdWUgKSB0YXJnZXRba2V5XSA9IHZhbHVlO1xyXG5cdFx0XHRcdFx0ZWxzZSBpZiAoY3VycmVudCBpbnN0YW5jZW9mIEFycmF5IHx8IHZhbHVlIGluc3RhbmNlb2YgQXJyYXkpIHRhcmdldFtrZXldID0gdmFsdWU7XHJcblx0XHRcdFx0XHRlbHNlIGlmIChjdXJyZW50IGluc3RhbmNlb2YgU2V0IHx8IHZhbHVlIGluc3RhbmNlb2YgU2V0KSB0YXJnZXRba2V5XSA9IHZhbHVlO1xyXG5cdFx0XHRcdFx0ZWxzZSBpZiAoY3VycmVudCBpbnN0YW5jZW9mIE1hcCB8fCB2YWx1ZSBpbnN0YW5jZW9mIE1hcCkgdGFyZ2V0W2tleV0gPSB2YWx1ZTtcclxuXHRcdFx0XHRcdGVsc2UgaWYgKGN1cnJlbnQgaW5zdGFuY2VvZiBEYXRlIHx8IHZhbHVlIGluc3RhbmNlb2YgRGF0ZSkgdGFyZ2V0W2tleV0gPSB2YWx1ZTtcclxuXHRcdFx0XHRcdGVsc2UgaWYgKGN1cnJlbnQgaW5zdGFuY2VvZiBSZWdFeHAgfHwgdmFsdWUgaW5zdGFuY2VvZiBSZWdFeHApIHRhcmdldFtrZXldID0gdmFsdWU7XHJcblx0XHRcdFx0XHRlbHNlIGlmIChpc09iamVjdChjdXJyZW50KSAmJiBpc09iamVjdCh2YWx1ZSkpIG1lcmdlKGN1cnJlbnQsIHZhbHVlKTtcclxuXHRcdFx0XHRcdGVsc2UgdGFyZ2V0W2tleV0gPSB2YWx1ZTtcclxuXHRcdFx0XHR9KTtcclxuXHRcdH0pO1xyXG5cclxuXHRyZXR1cm4gdGFyZ2V0O1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIERlY2lkZXMgd2hldGhlciBhIHNpbmdsZSBwcm9wZXJ0eSBpcyB0YWtlbiBvdmVyIGJ5IHtAbGluayBmaWx0ZXJ9LlxyXG4gKlxyXG4gKiBAY2FsbGJhY2sgUHJvcGVydHlGaWx0ZXJcclxuICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgbmFtZSBvZiB0aGUgcHJvcGVydHlcclxuICogQHBhcmFtIHsqfSB2YWx1ZSB2YWx1ZSBvZiB0aGUgcHJvcGVydHlcclxuICogQHBhcmFtIHtvYmplY3R9IGNvbnRleHQgdGhlIG9iamVjdCB0aGUgcHJvcGVydHkgYmVsb25ncyB0b1xyXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gdHJ1ZSB0byBrZWVwIHRoZSBwcm9wZXJ0eVxyXG4gKi9cclxuXHJcbi8qKlxyXG4gKiBCdWlsZHMgYSB7QGxpbmsgUHJvcGVydHlGaWx0ZXJ9IGFjY2VwdGluZyBvciByZWplY3RpbmcgYSBmaXhlZCBsaXN0IG9mIHByb3BlcnR5IG5hbWVzLlxyXG4gKlxyXG4gKiBAcGFyYW0ge29iamVjdH0gb3B0aW9uc1xyXG4gKiBAcGFyYW0ge0FycmF5PHN0cmluZz59IG9wdGlvbnMubmFtZXMgdGhlIHByb3BlcnR5IG5hbWVzIHRvIGRlY2lkZSBvblxyXG4gKiBAcGFyYW0ge2Jvb2xlYW59IG9wdGlvbnMuYWxsb3dlZCB0cnVlIHR1cm5zIHRoZSBsaXN0IGludG8gYW4gYWxsb3cgbGlzdCwgZmFsc2UgaW50byBhIGRlbnkgbGlzdFxyXG4gKiBAcmV0dXJucyB7UHJvcGVydHlGaWx0ZXJ9XHJcbiAqXHJcbiAqIEBleGFtcGxlXHJcbiAqIGNvbnN0IGRlbnkgPSBidWlsZFByb3BlcnR5RmlsdGVyKHtuYW1lcyA6IFtcInBhc3N3b3JkXCJdLCBhbGxvd2VkIDogZmFsc2V9KTtcclxuICogZmlsdGVyKHVzZXIsIGRlbnkpOyAgIC8vIGV2ZXJ5IHByb3BlcnR5IGJ1dCBwYXNzd29yZFxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGJ1aWxkUHJvcGVydHlGaWx0ZXIgPSAoeyBuYW1lcywgYWxsb3dlZCB9KSA9PiB7XHJcblx0cmV0dXJuIChuYW1lLCB2YWx1ZSwgY29udGV4dCkgPT4ge1xyXG5cdFx0cmV0dXJuIG5hbWVzLmluY2x1ZGVzKG5hbWUpID09PSBhbGxvd2VkO1xyXG5cdH07XHJcbn07XHJcblxyXG4vKipcclxuICogUmVidWlsZHMgYW4gQXJyYXksIFNldCBvciBNYXAgd2l0aCBpdHMgdmFsdWVzIGZpbHRlcmVkLiBBIGNvbnRhaW5lciBrZWVwcyBhbGwgb2YgaXRzIGVudHJpZXMgLVxyXG4gKiBvbmx5IHRoZSB2YWx1ZXMgaW5zaWRlIGdldCBmaWx0ZXJlZC4gVGhlIGtleXMgb2YgYSBNYXAgc3RheSB1bnRvdWNoZWQsIHJlcGxhY2luZyB0aGVtIHdvdWxkIGJyZWFrXHJcbiAqIGV2ZXJ5IGxvb2t1cCBhZ2FpbnN0IHRoZSByZXN1bHQuXHJcbiAqXHJcbiAqIEBwcml2YXRlXHJcbiAqIEBwYXJhbSB7QXJyYXl8U2V0fE1hcH0gdmFsdWVcclxuICogQHBhcmFtIHtQcm9wZXJ0eUZpbHRlcn0gcHJvcEZpbHRlclxyXG4gKiBAcGFyYW0ge2Jvb2xlYW59IGRlZXBcclxuICogQHBhcmFtIHtXZWFrTWFwfSBjb3BpZXMgbWFwcyBhbiBvcmlnaW5hbCBvbnRvIGl0cyBmaWx0ZXJlZCBjb3B5XHJcbiAqIEByZXR1cm5zIHtBcnJheXxTZXR8TWFwfVxyXG4gKi9cclxuY29uc3QgZmlsdGVyQ29udGFpbmVyID0gKHZhbHVlLCBwcm9wRmlsdGVyLCBkZWVwLCBjb3BpZXMpID0+IHtcclxuXHRpZiAodmFsdWUgaW5zdGFuY2VvZiBBcnJheSkge1xyXG5cdFx0Y29uc3QgY29weSA9IFtdO1xyXG5cdFx0Y29waWVzLnNldCh2YWx1ZSwgY29weSk7XHJcblx0XHRmb3IgKGNvbnN0IGVudHJ5IG9mIHZhbHVlKSBjb3B5LnB1c2goZmlsdGVyVmFsdWUoZW50cnksIHByb3BGaWx0ZXIsIGRlZXAsIGNvcGllcykpO1xyXG5cclxuXHRcdHJldHVybiBjb3B5O1xyXG5cdH1cclxuXHJcblx0aWYgKHZhbHVlIGluc3RhbmNlb2YgU2V0KSB7XHJcblx0XHRjb25zdCBjb3B5ID0gbmV3IFNldCgpO1xyXG5cdFx0Y29waWVzLnNldCh2YWx1ZSwgY29weSk7XHJcblx0XHRmb3IgKGNvbnN0IGVudHJ5IG9mIHZhbHVlKSBjb3B5LmFkZChmaWx0ZXJWYWx1ZShlbnRyeSwgcHJvcEZpbHRlciwgZGVlcCwgY29waWVzKSk7XHJcblxyXG5cdFx0cmV0dXJuIGNvcHk7XHJcblx0fVxyXG5cclxuXHRjb25zdCBjb3B5ID0gbmV3IE1hcCgpO1xyXG5cdGNvcGllcy5zZXQodmFsdWUsIGNvcHkpO1xyXG5cdGZvciAoY29uc3QgW2tleSwgZW50cnldIG9mIHZhbHVlKSBjb3B5LnNldChrZXksIGZpbHRlclZhbHVlKGVudHJ5LCBwcm9wRmlsdGVyLCBkZWVwLCBjb3BpZXMpKTtcclxuXHJcblx0cmV0dXJuIGNvcHk7XHJcbn07XHJcblxyXG4vKipcclxuICogRmlsdGVycyBhIHNpbmdsZSB2YWx1ZSwgZGlzcGF0Y2hpbmcgb24gd2hhdCBpdCBpcy5cclxuICpcclxuICogQHByaXZhdGVcclxuICogQHBhcmFtIHsqfSB2YWx1ZVxyXG4gKiBAcGFyYW0ge1Byb3BlcnR5RmlsdGVyfSBwcm9wRmlsdGVyXHJcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gZGVlcFxyXG4gKiBAcGFyYW0ge1dlYWtNYXB9IGNvcGllcyBtYXBzIGFuIG9yaWdpbmFsIG9udG8gaXRzIGZpbHRlcmVkIGNvcHlcclxuICogQHJldHVybnMgeyp9IHRoZSBmaWx0ZXJlZCB2YWx1ZSwgb3IgdGhlIHZhbHVlIGl0c2VsZiB3aGVuIHRoZXJlIGlzIG5vdGhpbmcgdG8gZmlsdGVyXHJcbiAqL1xyXG5jb25zdCBmaWx0ZXJWYWx1ZSA9ICh2YWx1ZSwgcHJvcEZpbHRlciwgZGVlcCwgY29waWVzKSA9PiB7XHJcblx0aWYgKHZhbHVlID09PSBudWxsIHx8IHR5cGVvZiB2YWx1ZSAhPT0gXCJvYmplY3RcIikgcmV0dXJuIHZhbHVlO1xyXG5cdGlmICh2YWx1ZSBpbnN0YW5jZW9mIERhdGUgfHwgdmFsdWUgaW5zdGFuY2VvZiBSZWdFeHApIHJldHVybiB2YWx1ZTsgLy8gY2Fycnkgbm8gcHJvcGVydGllcyB0byBmaWx0ZXJcclxuXHJcblx0Ly8gYSB2YWx1ZSBzZWVuIGJlZm9yZSBjbG9zZXMgYSBjeWNsZSAtIGl0cyBjb3B5IHN0YW5kcyBpbiwgc28gbm90aGluZyB1bmZpbHRlcmVkIGxlYWtzIGJhY2sgaW5cclxuXHRpZiAoY29waWVzLmhhcyh2YWx1ZSkpIHJldHVybiBjb3BpZXMuZ2V0KHZhbHVlKTtcclxuXHJcblx0aWYgKHZhbHVlIGluc3RhbmNlb2YgQXJyYXkgfHwgdmFsdWUgaW5zdGFuY2VvZiBTZXQgfHwgdmFsdWUgaW5zdGFuY2VvZiBNYXApIHJldHVybiBmaWx0ZXJDb250YWluZXIodmFsdWUsIHByb3BGaWx0ZXIsIGRlZXAsIGNvcGllcyk7XHJcblxyXG5cdHJldHVybiBmaWx0ZXJPYmplY3QodmFsdWUsIHByb3BGaWx0ZXIsIGRlZXAsIGNvcGllcyk7XHJcbn07XHJcblxyXG4vKipcclxuICogQnVpbGRzIHRoZSBmaWx0ZXJlZCBjb3B5IG9mIGFuIG9iamVjdC4gVGhlIGNvcHkgaXMgcmVnaXN0ZXJlZCBiZWZvcmUgaXQgaXMgZmlsbGVkLCBzbyBhIGN5Y2xlXHJcbiAqIHJ1bm5pbmcgYmFjayBpbnRvIGl0IHJlc29sdmVzIHRvIHRoZSBjb3B5IGluc3RlYWQgb2YgdGhlIG9yaWdpbmFsLlxyXG4gKlxyXG4gKiBAcHJpdmF0ZVxyXG4gKiBAcGFyYW0ge29iamVjdH0gZGF0YVxyXG4gKiBAcGFyYW0ge1Byb3BlcnR5RmlsdGVyfSBwcm9wRmlsdGVyXHJcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gZGVlcFxyXG4gKiBAcGFyYW0ge1dlYWtNYXB9IGNvcGllcyBtYXBzIGFuIG9yaWdpbmFsIG9udG8gaXRzIGZpbHRlcmVkIGNvcHlcclxuICogQHJldHVybnMge29iamVjdH1cclxuICovXHJcbmNvbnN0IGZpbHRlck9iamVjdCA9IChkYXRhLCBwcm9wRmlsdGVyLCBkZWVwLCBjb3BpZXMpID0+IHtcclxuXHRjb25zdCByZXN1bHQgPSB7fTtcclxuXHRjb3BpZXMuc2V0KGRhdGEsIHJlc3VsdCk7XHJcblxyXG5cdGZvciAoY29uc3QgbmFtZSBpbiBkYXRhKSB7XHJcblx0XHRjb25zdCB2YWx1ZSA9IGRhdGFbbmFtZV07XHJcblx0XHRpZiAocHJvcEZpbHRlcihuYW1lLCB2YWx1ZSwgZGF0YSkpe1xyXG5cdFx0XHRyZXN1bHRbbmFtZV0gPSBkZWVwID8gZmlsdGVyVmFsdWUodmFsdWUsIHByb3BGaWx0ZXIsIGRlZXAsIGNvcGllcykgOiB2YWx1ZTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHJldHVybiByZXN1bHQ7XHJcbn07XHJcblxyXG4vKipcclxuICogQnVpbGRzIGEgbmV3IG9iamVjdCBob2xkaW5nIHRoZSBwcm9wZXJ0aWVzIGEgZmlsdGVyIGFjY2VwdHMuXHJcbiAqXHJcbiAqIFRoZSBmaWx0ZXIgaXMgY2FsbGVkIGZvciBldmVyeSBlbnVtZXJhYmxlIHByb3BlcnR5LCBpbmhlcml0ZWQgb25lcyBpbmNsdWRlZCAtIGZpbHRlcmluZyBhIHdpbmRvd1xyXG4gKiByZWxpZXMgb24gdGhhdCwgc2luY2UgbW9zdCBvZiBpdHMgbWVtYmVycyBzaXQgb24gdGhlIHByb3RvdHlwZS5cclxuICpcclxuICogV2l0aCBkZWVwIHRoZSBmaWx0ZXIgaXMgYXBwbGllZCB0byBzdWIgb2JqZWN0cyBhcyB3ZWxsLiBBcnJheSwgU2V0IGFuZCBNYXAgYXJlIHJlYnVpbHQgd2l0aCB0aGVpclxyXG4gKiB2YWx1ZXMgZmlsdGVyZWQsIGtlZXBpbmcgYWxsIG9mIHRoZWlyIGVudHJpZXMgYW5kLCBmb3IgYSBNYXAsIGl0cyBrZXlzLiBEYXRlIGFuZCBSZWdFeHAgYXJlIHRha2VuXHJcbiAqIG92ZXIgYXMgdGhleSBhcmUuIEEgY3ljbGljIHJlZmVyZW5jZSByZXNvbHZlcyB0byB0aGUgZmlsdGVyZWQgY29weSwgc28gdGhlIHJlc3VsdCBuZXZlciBjYXJyaWVzIGFcclxuICogcmVmZXJlbmNlIGludG8gdGhlIHVudG91Y2hlZCBvcmlnaW5hbC5cclxuICpcclxuICogV2l0aG91dCBkZWVwIHRoZSBhY2NlcHRlZCB2YWx1ZXMgYXJlIHRha2VuIG92ZXIgYXMgdGhleSBhcmUsIHN1YiBvYmplY3RzIGJ5IHJlZmVyZW5jZS5cclxuICpcclxuICogQHBhcmFtIHtvYmplY3R9IGRhdGEgdGhlIG9iamVjdCB0byBiZSBmaWx0ZXJlZFxyXG4gKiBAcGFyYW0ge1Byb3BlcnR5RmlsdGVyfSBwcm9wRmlsdGVyIGRlY2lkZXMgcGVyIHByb3BlcnR5LCBzZWUge0BsaW5rIGJ1aWxkUHJvcGVydHlGaWx0ZXJ9XHJcbiAqIEBwYXJhbSB7b2JqZWN0fSBbb3B0aW9uc11cclxuICogQHBhcmFtIHtib29sZWFufSBbb3B0aW9ucy5kZWVwPWZhbHNlXSBmaWx0ZXIgc3ViIG9iamVjdHMgdG9vXHJcbiAqIEByZXR1cm5zIHtvYmplY3R9IGEgbmV3IG9iamVjdFxyXG4gKlxyXG4gKiBAZXhhbXBsZVxyXG4gKiBjb25zdCBkZW55ID0gYnVpbGRQcm9wZXJ0eUZpbHRlcih7bmFtZXMgOiBbXCJzZWNyZXRcIl0sIGFsbG93ZWQgOiBmYWxzZX0pO1xyXG4gKlxyXG4gKiBmaWx0ZXIoe3NlY3JldCA6IFwieFwiLCBhIDogMX0sIGRlbnkpOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8ge2EgOiAxfVxyXG4gKiBmaWx0ZXIoe3N1YiA6IHtzZWNyZXQgOiBcInhcIiwgYSA6IDF9fSwgZGVueSwge2RlZXAgOiB0cnVlfSk7ICAgICAgLy8ge3N1YiA6IHthIDogMX19XHJcbiAqL1xyXG5leHBvcnQgY29uc3QgZmlsdGVyID0gKGRhdGEsIHByb3BGaWx0ZXIsIHsgZGVlcCA9IGZhbHNlIH0gPSB7fSkgPT4gZmlsdGVyT2JqZWN0KGRhdGEsIHByb3BGaWx0ZXIsIGRlZXAsIG5ldyBXZWFrTWFwKCkpO1xyXG5cclxuLyoqXHJcbiAqIERlZmluZXMgYSBjb25zdGFudCwgbm9uIGVudW1lcmFibGUgcHJvcGVydHkuXHJcbiAqXHJcbiAqIEBwYXJhbSB7b2JqZWN0fSBvIHRoZSBvYmplY3QgdG8gZGVmaW5lIHRoZSBwcm9wZXJ0eSBvblxyXG4gKiBAcGFyYW0ge3N0cmluZ30gbmFtZSBuYW1lIG9mIHRoZSBwcm9wZXJ0eVxyXG4gKiBAcGFyYW0geyp9IHZhbHVlIHRoZSB2YWx1ZSwgbmVpdGhlciB3cml0YWJsZSBub3IgY29uZmlndXJhYmxlXHJcbiAqIEByZXR1cm5zIHt2b2lkfVxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGRlZlZhbHVlID0gKG8sIG5hbWUsIHZhbHVlKSA9PiB7XHJcblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIG5hbWUsIHtcclxuXHRcdHZhbHVlLFxyXG5cdFx0d3JpdGFibGU6IGZhbHNlLFxyXG5cdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcclxuXHRcdGVudW1lcmFibGU6IGZhbHNlLFxyXG5cdH0pO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIERlZmluZXMgYSByZWFkIG9ubHksIG5vbiBlbnVtZXJhYmxlIHByb3BlcnR5IGJhY2tlZCBieSBhIGdldHRlci5cclxuICpcclxuICogQHBhcmFtIHtvYmplY3R9IG8gdGhlIG9iamVjdCB0byBkZWZpbmUgdGhlIHByb3BlcnR5IG9uXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIG5hbWUgb2YgdGhlIHByb3BlcnR5XHJcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGdldCByZXR1cm5zIHRoZSB2YWx1ZSBvZiB0aGUgcHJvcGVydHlcclxuICogQHJldHVybnMge3ZvaWR9XHJcbiAqL1xyXG5leHBvcnQgY29uc3QgZGVmR2V0ID0gKG8sIG5hbWUsIGdldCkgPT4ge1xyXG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBuYW1lLCB7XHJcblx0XHRnZXQsXHJcblx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxyXG5cdFx0ZW51bWVyYWJsZTogZmFsc2UsXHJcblx0fSk7XHJcbn07XHJcblxyXG4vKipcclxuICogRGVmaW5lcyBhIG5vbiBlbnVtZXJhYmxlIHByb3BlcnR5IGJhY2tlZCBieSBhIGdldHRlciBhbmQgYSBzZXR0ZXIuXHJcbiAqXHJcbiAqIEBwYXJhbSB7b2JqZWN0fSBvIHRoZSBvYmplY3QgdG8gZGVmaW5lIHRoZSBwcm9wZXJ0eSBvblxyXG4gKiBAcGFyYW0ge3N0cmluZ30gbmFtZSBuYW1lIG9mIHRoZSBwcm9wZXJ0eVxyXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBnZXQgcmV0dXJucyB0aGUgdmFsdWUgb2YgdGhlIHByb3BlcnR5XHJcbiAqIEBwYXJhbSB7RnVuY3Rpb259IHNldCB0YWtlcyB0aGUgbmV3IHZhbHVlIG9mIHRoZSBwcm9wZXJ0eVxyXG4gKiBAcmV0dXJucyB7dm9pZH1cclxuICovXHJcbmV4cG9ydCBjb25zdCBkZWZHZXRTZXQgPSAobywgbmFtZSwgZ2V0LCBzZXQpID0+IHtcclxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkobywgbmFtZSwge1xyXG5cdFx0Z2V0LFxyXG5cdFx0c2V0LFxyXG5cdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcclxuXHRcdGVudW1lcmFibGU6IGZhbHNlLFxyXG5cdH0pO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG5cdGlzTnVsbE9yVW5kZWZpbmVkLFxyXG5cdGlzT2JqZWN0LFxyXG5cdGlzUHJpbWl0aXZlLFxyXG5cdGVxdWFsUG9qbyxcclxuXHRpc1Bvam8sXHJcblx0YXBwZW5kLFxyXG5cdG1lcmdlLFxyXG5cdGZpbHRlcixcclxuXHRidWlsZFByb3BlcnR5RmlsdGVyLFxyXG5cdGRlZlZhbHVlLFxyXG5cdGRlZkdldCxcclxuXHRkZWZHZXRTZXQsXHJcbn07XHJcbiIsIi8qKlxuICogVHdvIHdheXMgb2YgYnVpbGRpbmcgYSBwcm9taXNlIHRoYXQgc29tZXRoaW5nIG91dHNpZGUgb2YgaXQgc2V0dGxlcy5cbiAqXG4gKiB7QGxpbmsgdGltZW91dFByb21pc2V9IHJ1bnMgYSBmdW5jdGlvbiBvbmNlIGEgdGltZW91dCBoYXMgcGFzc2VkIGFuZCBsZXRzIHRoZSB3aG9sZSBjaGFpbiBiZWhpbmRcbiAqIGl0IGJlIGNhbmNlbGVkLiB7QGxpbmsgbGF6eVByb21pc2V9IGhhbmRzIG91dCBhIHByb21pc2UgdG9nZXRoZXIgd2l0aCBpdHMgcmVzb2x2ZSBhbmQgcmVqZWN0LCBmb3JcbiAqIHRoZSBjYXNlcyB3aGVyZSB0aGUgc2V0dGxpbmcgaXMgZHJpdmVuIGZyb20gc29tZXdoZXJlIGVsc2UgLSBhIGZyYW1ld29yayBjYWxsYmFjaywgYW4gZXZlbnQsXG4gKiBmb3JlaWduIGNvZGUgLSBhbmQgcGFja2luZyBhbGwgb2YgdGhhdCBpbnRvIHRoZSBleGVjdXRvciB3b3VsZCBvbmx5IGJsb3cgdGhlIGNvZGUgdXAgb3IgaXMgbm90XG4gKiBwb3NzaWJsZSBhdCBhbGwuXG4gKlxuICogVGhlIHR3byBjYXJyeSBkaWZmZXJlbnQgc3RhdGUgb24gcHVycG9zZTogYSB0aW1lb3V0UHJvbWlzZSByZXBvcnRzIGl0cyBjYW5jZWxsYXRpb24gdGhyb3VnaCBhXG4gKiByZWplY3Rpb24gYW5kIGFuIEFib3J0U2lnbmFsLCBhIGxhenlQcm9taXNlIHJlcG9ydHMgaXRzIG91dGNvbWUgdGhyb3VnaCByZXNvbHZlZCwgZXJyb3IgYW5kIHZhbHVlLlxuICpcbiAqIEBtb2R1bGUgUHJvbWlzZVV0aWxzXG4gKi9cbmltcG9ydCB7IGRlZlZhbHVlLCBkZWZHZXQgfSBmcm9tIFwiLi9PYmplY3RVdGlscy5qc1wiO1xuXG4vKipcbiAqIFRoZSByZWFzb24gYW4gYWJvcnRlZCBvcGVyYXRpb24gcmVqZWN0cyB3aXRoLiBBIERPTUV4Y2VwdGlvbiBuYW1lZCBBYm9ydEVycm9yIGlzIHdoYXRcbiAqIEFib3J0Q29udHJvbGxlciBpdHNlbGYgdXNlcywgYW4gRXJyb3IgY2FycnlpbmcgdGhlIHNhbWUgbmFtZSBzdGFuZHMgaW4gd2hlcmUgaXQgaXMgbWlzc2luZy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHJldHVybnMge0Vycm9yfERPTUV4Y2VwdGlvbn1cbiAqL1xuY29uc3QgYWJvcnRFcnJvciA9ICgpID0+IHtcblx0aWYgKHR5cGVvZiBET01FeGNlcHRpb24gIT09IFwidW5kZWZpbmVkXCIpIHJldHVybiBuZXcgRE9NRXhjZXB0aW9uKFwiVGhlIG9wZXJhdGlvbiB3YXMgYWJvcnRlZC5cIiwgXCJBYm9ydEVycm9yXCIpO1xuXG5cdC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0IC0gZXZlcnkgYnJvd3NlciB0aGUgc3VpdGUgcnVucyBpbiBicmluZ3MgRE9NRXhjZXB0aW9uLCBzbyB0aGlzIGxpbmUgb25seVxuXHQgICBzdGFuZHMgaW4gZm9yIGVudmlyb25tZW50cyB0aGUgdGVzdCBydW4gY2Fubm90IHJlYWNoICovXG5cdHJldHVybiBPYmplY3QuYXNzaWduKG5ldyBFcnJvcihcIlRoZSBvcGVyYXRpb24gd2FzIGFib3J0ZWQuXCIpLCB7IG5hbWU6IFwiQWJvcnRFcnJvclwiIH0pO1xufTtcblxuLyoqXG4gKiBUaGUgcmVhc29uIGEgc2lnbmFsIGNhcnJpZXMuIGFib3J0KCkgZmlsbHMgaXQgaW4gb24gaXRzIG93biwgb2xkZXIgaW1wbGVtZW50YXRpb25zIGtub3cgdGhlXG4gKiBtZXRob2QgYnV0IG5vdCB0aGUgcHJvcGVydHkuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QWJvcnRTaWduYWx9IHNpZ25hbFxuICogQHJldHVybnMgeyp9XG4gKi9cbmNvbnN0IGFib3J0UmVhc29uID0gKHNpZ25hbCkgPT4gKHR5cGVvZiBzaWduYWwucmVhc29uID09PSBcInVuZGVmaW5lZFwiID8gYWJvcnRFcnJvcigpIDogc2lnbmFsLnJlYXNvbik7XG5cbi8qKlxuICogQWRkcyB0aGUgY2FuY2VsIGFwaSB0byBhIHByb21pc2UgYW5kIHRvIGV2ZXJ5IHByb21pc2UgZGVyaXZlZCBmcm9tIGl0LiBBbGwgb2YgdGhlbSBzaGFyZSBvbmVcbiAqIGNvbnRyb2xsZXIsIHNvIGEgY2hhaW4gY2FuIGJlIGNhbmNlbGVkIGZyb20gYW55IG9mIGl0cyBsaW5rcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtQcm9taXNlfSBwcm9taXNlXG4gKiBAcGFyYW0ge0Fib3J0Q29udHJvbGxlcn0gY29udHJvbGxlclxuICogQHBhcmFtIHtGdW5jdGlvbn0gY2FuY2VsXG4gKiBAcmV0dXJucyB7UHJvbWlzZX0gdGhlIHByb21pc2UgaXRzZWxmXG4gKi9cbmNvbnN0IGNhbmNlbGFibGUgPSAocHJvbWlzZSwgY29udHJvbGxlciwgY2FuY2VsKSA9PiB7XG5cdGRlZlZhbHVlKHByb21pc2UsIFwiY2FuY2VsXCIsIGNhbmNlbCk7XG5cdGRlZkdldChwcm9taXNlLCBcInNpZ25hbFwiLCAoKSA9PiBjb250cm9sbGVyLnNpZ25hbCk7XG5cdGRlZkdldChwcm9taXNlLCBcImNhbmNlbGVkXCIsICgpID0+IGNvbnRyb2xsZXIuc2lnbmFsLmFib3J0ZWQpO1xuXG5cdC8vIHRoZW4gaGFzIHRvIGhhbmQgYm90aCBoYW5kbGVycyB0aHJvdWdoIGFuZCByZXR1cm4gdGhlIGRlcml2ZWQgcHJvbWlzZSAtIGNhdGNoLCBmaW5hbGx5IGFuZFxuXHQvLyBhd2FpdCBhcmUgZGVmaW5lZCBpbiB0ZXJtcyBvZiB0aGVuLCBzbyBhbnl0aGluZyBsZXNzIHNpbGVudGx5IGJyZWFrcyB0aG9zZSBhcyB3ZWxsXG5cdGNvbnN0IHRoZW4gPSBwcm9taXNlLnRoZW47XG5cdGRlZlZhbHVlKHByb21pc2UsIFwidGhlblwiLCAob25GdWxmaWxsZWQsIG9uUmVqZWN0ZWQpID0+IGNhbmNlbGFibGUodGhlbi5jYWxsKHByb21pc2UsIG9uRnVsZmlsbGVkLCBvblJlamVjdGVkKSwgY29udHJvbGxlciwgY2FuY2VsKSk7XG5cblx0cmV0dXJuIHByb21pc2U7XG59O1xuXG4vKipcbiAqIENhbGxzIGEgZnVuY3Rpb24gYWZ0ZXIgYSB0aW1lb3V0IGFuZCBzZXR0bGVzIHdpdGggd2hhdGV2ZXIgaXQgcHJvZHVjZXMuXG4gKlxuICogVGhlIGZ1bmN0aW9uIGlzIGNhbGxlZCB3aXRoIHJlc29sdmUsIHJlamVjdCBhbmQgdGhlIEFib3J0U2lnbmFsIG9mIHRoZSBwcm9taXNlLCBzbyB3b3JrIHN0YXJ0ZWRcbiAqIGluc2lkZSBpdCBjYW4gYmUgYWJvcnRlZCBhbG9uZyB3aXRoIGl0LiBBbiBleGNlcHRpb24gdGhyb3duIGJ5IHRoZSBmdW5jdGlvbiByZWplY3RzIHRoZSBwcm9taXNlXG4gKiBpbnN0ZWFkIG9mIGVzY2FwaW5nIGludG8gdGhlIHRpbWVyLlxuICpcbiAqIFRoZSBwcm9taXNlIGJyaW5ncyBpdHMgb3duIEFib3J0Q29udHJvbGxlci4gY2FuY2VsKCkgY2xlYXJzIGEgcGVuZGluZyB0aW1lb3V0IGFuZCByZWplY3RzIHdpdGggYW5cbiAqIEFib3J0RXJyb3IsIHdoaWNoIHRyYXZlbHMgZG93biB0aGUgd2hvbGUgY2hhaW4gLSBubyB0aGVuIGhhbmRsZXIgYmVoaW5kIGl0IHJ1bnMuIGNhbmNlbCgpIHNpdHMgb25cbiAqIGV2ZXJ5IHByb21pc2UgZGVyaXZlZCBmcm9tIGl0IGFuZCBkb2VzIG5vdGhpbmcgb25jZSB0aGUgcHJvbWlzZSBoYXMgc2V0dGxlZC5cbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmbiBjYWxsZWQgd2l0aCAocmVzb2x2ZSwgcmVqZWN0LCBzaWduYWwpIG9uY2UgdGhlIHRpbWVvdXQgaGFzIHBhc3NlZFxuICogQHBhcmFtIHtudW1iZXJ9IG1zIHRoZSB0aW1lb3V0IGluIG1pbGxpc2Vjb25kc1xuICogQHJldHVybnMge1Byb21pc2V9IGEgcHJvbWlzZSBjYXJyeWluZyBjYW5jZWwoKSwgc2lnbmFsIGFuZCBjYW5jZWxlZFxuICpcbiAqIEBleGFtcGxlXG4gKiBjb25zdCBwcm9taXNlID0gdGltZW91dFByb21pc2UoKHJlc29sdmUpID0+IHJlc29sdmUoXCJkb25lXCIpLCAxMDAwKTtcbiAqIGF3YWl0IHByb21pc2U7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFwiZG9uZVwiXG4gKlxuICogQGV4YW1wbGVcbiAqIGNvbnN0IHByb21pc2UgPSB0aW1lb3V0UHJvbWlzZSgocmVzb2x2ZSkgPT4gcmVzb2x2ZShcImRvbmVcIiksIDEwMDApO1xuICogcHJvbWlzZS50aGVuKCgpID0+IGNvbnNvbGUubG9nKFwibmV2ZXIgcnVuc1wiKSk7XG4gKiBwcm9taXNlLmNhbmNlbCgpO1xuICogYXdhaXQgcHJvbWlzZTsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gdGhyb3dzIEFib3J0RXJyb3JcbiAqL1xuZXhwb3J0IGNvbnN0IHRpbWVvdXRQcm9taXNlID0gKGZuLCBtcykgPT4ge1xuXHRjb25zdCBjb250cm9sbGVyID0gbmV3IEFib3J0Q29udHJvbGxlcigpO1xuXHRjb25zdCBzaWduYWwgPSBjb250cm9sbGVyLnNpZ25hbDtcblx0bGV0IHRpbWVvdXQgPSBudWxsO1xuXHRsZXQgc2V0dGxlZCA9IGZhbHNlO1xuXG5cdGNvbnN0IHByb21pc2UgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG5cdFx0Ly8gdGhlIHRpbWVvdXQgaXMgY2xlYXJlZCBvbiBldmVyeSB3YXkgb3V0LCBhIGNhbmNlbGVkIHByb21pc2UgbXVzdCBub3Qga2VlcCB0aGUgdGltZXIgYWxpdmVcblx0XHRjb25zdCBzZXR0bGUgPSAoaGFuZGxlcikgPT4gKHZhbHVlKSA9PiB7XG5cdFx0XHRpZiAoc2V0dGxlZCkgcmV0dXJuO1xuXG5cdFx0XHRzZXR0bGVkID0gdHJ1ZTtcblx0XHRcdGlmICh0aW1lb3V0ICE9PSBudWxsKSB7XG5cdFx0XHRcdGNsZWFyVGltZW91dCh0aW1lb3V0KTtcblx0XHRcdFx0dGltZW91dCA9IG51bGw7XG5cdFx0XHR9XG5cdFx0XHRoYW5kbGVyKHZhbHVlKTtcblx0XHR9O1xuXG5cdFx0Y29uc3Qgb25SZXNvbHZlID0gc2V0dGxlKHJlc29sdmUpO1xuXHRcdGNvbnN0IG9uUmVqZWN0ID0gc2V0dGxlKHJlamVjdCk7XG5cblx0XHRzaWduYWwuYWRkRXZlbnRMaXN0ZW5lcihcImFib3J0XCIsICgpID0+IG9uUmVqZWN0KGFib3J0UmVhc29uKHNpZ25hbCkpLCB7IG9uY2U6IHRydWUgfSk7XG5cblx0XHR0aW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHR0aW1lb3V0ID0gbnVsbDtcblx0XHRcdHRyeSB7XG5cdFx0XHRcdGZuKG9uUmVzb2x2ZSwgb25SZWplY3QsIHNpZ25hbCk7XG5cdFx0XHR9IGNhdGNoIChlcnJvcikge1xuXHRcdFx0XHRvblJlamVjdChlcnJvcik7XG5cdFx0XHR9XG5cdFx0fSwgbXMpO1xuXHR9KTtcblxuXHRyZXR1cm4gY2FuY2VsYWJsZShwcm9taXNlLCBjb250cm9sbGVyLCAocmVhc29uKSA9PiB7XG5cdFx0aWYgKHNldHRsZWQgfHwgc2lnbmFsLmFib3J0ZWQpIHJldHVybjtcblxuXHRcdGNvbnRyb2xsZXIuYWJvcnQodHlwZW9mIHJlYXNvbiA9PT0gXCJ1bmRlZmluZWRcIiA/IGFib3J0RXJyb3IoKSA6IHJlYXNvbik7XG5cdH0pO1xufTtcblxuLyoqXG4gKiBCdWlsZHMgYSBwcm9taXNlIHRvZ2V0aGVyIHdpdGggdGhlIHR3byBmdW5jdGlvbnMgc2V0dGxpbmcgaXQuXG4gKlxuICogVGhlIHBvaW50IGlzIHRvIGhhdmUgdGhlIHByb21pc2UgYW5kIGl0cyByZXNvbHZlIGFuZCByZWplY3QgYXBhcnQgZnJvbSBlYWNoIG90aGVyOiB3aGF0ZXZlclxuICogc2V0dGxlcyBpdCBkb2VzIG5vdCBoYXZlIHRvIHNpdCBpbnNpZGUgdGhlIGV4ZWN1dG9yLiBUaGF0IGtlZXBzIGEgcHJvbWlzZSB1c2FibGUgd2hlcmUgdGhlXG4gKiBzZXR0bGluZyBpcyBkcml2ZW4gYnkgYSBmcmFtZXdvcmsgY2FsbGJhY2ssIGFuIGV2ZW50IG9yIGFueSBvdGhlciBmb3JlaWduIGNvZGUgdGhlIGV4ZWN1dG9yIGhhcyBub1xuICogd2F5IG9mIHJlYWNoaW5nLlxuICpcbiAqIFRoZSBwcm9taXNlIGNhcnJpZXMgdGhyZWUgcmVhZCBvbmx5IHByb3BlcnRpZXM6XG4gKlxuICogLSByZXNvbHZlZCBzYXlzIHRoZSBwcm9taXNlIGhhcyBiZWVuIHNldHRsZWQuIEl0IHNheXMgbm90aGluZyBhYm91dCB0aGUgb3V0Y29tZSAtIGl0IGlzIHRydWUgZm9yIGFcbiAqICAgZmFpbHVyZSBqdXN0IGFzIHdlbGwuXG4gKiAtIGVycm9yIHRlbGxzIHRoZSB0d28gYXBhcnQuXG4gKiAtIHZhbHVlIGhvbGRzIHdoYXRldmVyIHRoZSBwcm9taXNlIHdhcyBzZXR0bGVkIHdpdGg6IHRoZSByZXN1bHQgYWZ0ZXIgYSByZXNvbHZlLCB0aGUgcmVhc29uIGFmdGVyXG4gKiAgIGEgcmVqZWN0LiBlcnJvciBpcyB3aGF0IGRlY2lkZXMgaG93IHRvIHJlYWQgaXQuXG4gKlxuICogQW4gRXJyb3IgYWx3YXlzIGxlYWRzIHRvIGEgcmVqZWN0aW9uLCBpbiBib3RoIGRpcmVjdGlvbnMgLSBoYW5kaW5nIG9uZSB0byByZXNvbHZlIHJlamVjdHMgdGhlXG4gKiBwcm9taXNlIGp1c3QgbGlrZSByZWplY3Qgd291bGQuIEEgcmVhc29uIHRoYXQgaXMgbm8gRXJyb3IgaXMgd3JhcHBlZCBpbnRvIG9uZSwgYW5kIGEgcmVqZWN0XG4gKiB3aXRob3V0IGEgcmVhc29uIGdldHMgYW4gRXJyb3Igb2YgaXRzIG93biwgc28gdGhlcmUgaXMgYWx3YXlzIGEgbWVzc2FnZSB0byByZWFkLlxuICpcbiAqIEJvdGggZnVuY3Rpb25zIHNldHRsZSB0aGUgcHJvbWlzZSBvbmNlLiBBIHNlY29uZCBjYWxsIHRocm93cyBpbnN0ZWFkIG9mIHNldHRsaW5nIGFnYWluLCBzbyB0aGVcbiAqIHRocmVlIHByb3BlcnRpZXMgY2FuIG5ldmVyIGVuZCB1cCBkaXNhZ3JlZWluZyB3aXRoIHRoZSBwcm9taXNlLlxuICpcbiAqIEByZXR1cm5zIHtQcm9taXNlfSBhIHByb21pc2UgY2FycnlpbmcgcmVzb2x2ZSgpLCByZWplY3QoKSwgdmFsdWUsIGVycm9yIGFuZCByZXNvbHZlZFxuICogQHRocm93cyB7RXJyb3J9IGZyb20gcmVzb2x2ZSBvciByZWplY3Qgd2hlbiB0aGUgcHJvbWlzZSBoYXMgYWxyZWFkeSBiZWVuIHNldHRsZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogY29uc3QgcHJvbWlzZSA9IGxhenlQcm9taXNlKCk7XG4gKiBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsICgpID0+IHByb21pc2UucmVzb2x2ZShlbGVtZW50KSwge29uY2UgOiB0cnVlfSk7XG4gKiBhd2FpdCBwcm9taXNlO1xuICpcbiAqIEBleGFtcGxlXG4gKiBjb25zdCBwcm9taXNlID0gbGF6eVByb21pc2UoKTtcbiAqIHByb21pc2UucmVqZWN0KFwibm8gY29ubmVjdGlvblwiKTsgICAvLyByZWplY3RzIHdpdGggYW4gRXJyb3IgY2FycnlpbmcgdGhhdCBtZXNzYWdlXG4gKiBwcm9taXNlLnJlc29sdmVkOyAgICAgICAgICAgICAgICAgIC8vIHRydWUgLSBzZXR0bGVkLCBub3Qgc3VjY2Vzc2Z1bFxuICogcHJvbWlzZS5lcnJvcjsgICAgICAgICAgICAgICAgICAgICAvLyB0cnVlXG4gKiBwcm9taXNlLnZhbHVlOyAgICAgICAgICAgICAgICAgICAgIC8vIFwibm8gY29ubmVjdGlvblwiXG4gKi9cbmV4cG9ydCBjb25zdCBsYXp5UHJvbWlzZSA9ICgpID0+IHtcblx0bGV0IHByb21pc2VSZXNvbHZlID0gbnVsbDtcblx0bGV0IHByb21pc2VSZWplY3QgPSBudWxsO1xuXHRsZXQgcmVzb2x2ZWQgPSBmYWxzZTtcblx0bGV0IGVycm9yID0gZmFsc2U7XG5cdGxldCB2YWx1ZSA9IHVuZGVmaW5lZDtcblxuXHRjb25zdCBwcm9taXNlID0gbmV3IFByb21pc2UoKHIsIGUpID0+IHtcblx0XHRwcm9taXNlUmVzb2x2ZSA9IHI7XG5cdFx0cHJvbWlzZVJlamVjdCA9IChhbkVycm9yKSA9PiBlKGFuRXJyb3IgaW5zdGFuY2VvZiBFcnJvciA/IGFuRXJyb3IgOiBuZXcgRXJyb3IoYW5FcnJvciA9PSBudWxsID8gXCJQcm9taXNlIHJlamVjdGVkIHdpdGggbm8gcmVhc29uXCIgOiBhbkVycm9yKSk7XG5cdH0pO1xuXG5cdGRlZlZhbHVlKHByb21pc2UsIFwicmVzb2x2ZVwiLCAocmVzdWx0KSA9PiB7XG5cdFx0aWYgKHJlc29sdmVkKSB0aHJvdyBuZXcgRXJyb3IoXCJQcm9taXNlIGFscmVhZHkgcmVzb2x2ZWQhXCIpO1xuXHRcdHJlc29sdmVkID0gdHJ1ZTtcblx0XHR2YWx1ZSA9IHJlc3VsdDtcblx0XHRpZiAodmFsdWUgaW5zdGFuY2VvZiBFcnJvcikge1xuXHRcdFx0ZXJyb3IgPSB0cnVlO1xuXHRcdFx0cHJvbWlzZVJlamVjdCh2YWx1ZSk7XG5cdFx0fSBlbHNlIHByb21pc2VSZXNvbHZlKHZhbHVlKTtcblx0fSk7XG5cdGRlZlZhbHVlKHByb21pc2UsIFwicmVqZWN0XCIsIChyZXN1bHQpID0+IHtcblx0XHRpZiAocmVzb2x2ZWQpIHRocm93IG5ldyBFcnJvcihcIlByb21pc2UgYWxyZWFkeSByZXNvbHZlZCFcIik7XG5cdFx0cmVzb2x2ZWQgPSB0cnVlO1xuXHRcdHZhbHVlID0gcmVzdWx0O1xuXHRcdGVycm9yID0gdHJ1ZTtcblx0XHRwcm9taXNlUmVqZWN0KHJlc3VsdCk7XG5cdH0pO1xuXG5cdGRlZkdldChwcm9taXNlLCBcInZhbHVlXCIsICgpID0+IHZhbHVlKTtcblx0ZGVmR2V0KHByb21pc2UsIFwiZXJyb3JcIiwgKCkgPT4gZXJyb3IpO1xuXHRkZWZHZXQocHJvbWlzZSwgXCJyZXNvbHZlZFwiLCAoKSA9PiByZXNvbHZlZCk7XG5cblx0cmV0dXJuIHByb21pc2U7XG59O1xuZXhwb3J0IGRlZmF1bHQge1xuXHRsYXp5UHJvbWlzZSxcblx0dGltZW91dFByb21pc2UsXG59O1xuIiwiLyoqXHJcbiAqIEFkZHMgaGFzaGNvZGUoKSB0byBldmVyeSBzdHJpbmcgLSBzZWUgdGhlIG5vdGUgb24gcGF0Y2hpbmcgcHJvdG90eXBlcyBpbiAuL2luZGV4LmpzLlxyXG4gKlxyXG4gKiBUaGUgaGFzaCBpcyB0aGUgb25lIGphdmEgdXNlcyBmb3IgaXRzIHN0cmluZ3M6IGggPSAzMSAqIGggKyBjaGFyLCBrZXB0IGluc2lkZSAzMiBzaWduZWQgYml0cy4gSXRcclxuICogaXMgbWVhbnQgZm9yIGJ1Y2tldGluZyBhbmQgZm9yIHRlbGxpbmcgdGV4dHMgYXBhcnQgY2hlYXBseSwgbm90IGZvciBhbnl0aGluZyB3aGVyZSBjb2xsaXNpb25zXHJcbiAqIG1hdHRlciAtIHR3byBkaWZmZXJlbnQgdGV4dHMgY2FuIHNoYXJlIGEgaGFzaCwgYW5kIGl0IGlzIG5vIGNyeXB0b2dyYXBoaWMgZGlnZXN0LlxyXG4gKlxyXG4gKiBPbmx5IGRlZmluZWQgd2hlbiBub3RoaW5nIGVsc2UgY2FycmllcyB0aGF0IG5hbWUgYWxyZWFkeS5cclxuICpcclxuICogQHJldHVybnMge251bWJlcn0gYSAzMiBiaXQgc2lnbmVkIGludGVnZXIsIDAgZm9yIHRoZSBlbXB0eSBzdHJpbmdcclxuICpcclxuICogQGV4YW1wbGVcclxuICogXCJ0ZXN0XCIuaGFzaGNvZGUoKTsgICAvLyAzNTU2NDk4XHJcbiAqL1xyXG5pZiAoIVN0cmluZy5wcm90b3R5cGUuaGFzaGNvZGUpXHJcblx0U3RyaW5nLnByb3RvdHlwZS5oYXNoY29kZSA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0aWYgKHRoaXMubGVuZ3RoID09PSAwKVxyXG5cdFx0XHRyZXR1cm4gMDtcclxuXHRcdFxyXG5cdFx0bGV0IGhhc2ggPSAwO1xyXG5cdFx0Y29uc3QgbGVuZ3RoID0gdGhpcy5sZW5ndGg7XHJcblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdGNvbnN0IGMgPSB0aGlzLmNoYXJDb2RlQXQoaSk7XHJcblx0XHRcdGhhc2ggPSAoKGhhc2ggPDwgNSkgLSBoYXNoKSArIGM7XHJcblx0XHRcdGhhc2ggfD0gMDsgLy8gQ29udmVydCB0byAzMmJpdCBpbnRlZ2VyXHJcblx0XHR9XHJcblx0XHRyZXR1cm4gaGFzaDtcclxuXHR9OyIsImltcG9ydCBFeHByZXNzaW9uUmVzb2x2ZXIgZnJvbSBcIi4vc3JjL0V4cHJlc3Npb25SZXNvbHZlci5qc1wiO1xuaW1wb3J0IFwiLi9zcmMvZXhlY3V0ZXIvaW5kZXguanNcIjtcbmltcG9ydCAqIGFzIEV4ZWN1dGVyUmVnaXN0cnkgZnJvbSBcIi4vc3JjL0V4ZWN1dGVyUmVnaXN0cnkuanNcIlxuXG5leHBvcnQgeyBFeHByZXNzaW9uUmVzb2x2ZXIsIEV4ZWN1dGVyUmVnaXN0cnkgfTtcbiIsIi8qKlxuICogQHR5cGVkZWYge09iamVjdH0gQ2FjaGVFbnRyeVxuICogQHByb3BlcnR5IHtudW1iZXJ9IGxhc3RIaXQgLSBNb25vdG9uaWMgbWFya2VyIG9mIHRoZSBsYXN0IHJlYWQgb3Igd3JpdGUsIHRoZSBldmljdGlvbiBvcmRlci5cbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBrZXlcbiAqIEBwcm9wZXJ0eSB7RnVuY3Rpb259IHZhbHVlXG4gKi9cblxuLyoqXG4gKiBAdHlwZWRlZiB7T2JqZWN0fSBDb2RlQ2FjaGVPcHRpb25zXG4gKiBAcHJvcGVydHkge251bWJlcn0gW3NpemVdIC0gTWF4aW11bSBudW1iZXIgb2YgZW50cmllcyBpbiB0aGUgY2FjaGUsIGEgZnJhY3Rpb24gcm91bmRlZCBkb3duLiBJZiBzZXRcbiAqIHRvIDAgb3IgbGVzcywgY2FjaGluZyBpcyBkaXNhYmxlZC4gTGVmdCBvdXQsIHRoZSBzaXplIHN0YXlzIGFzIGl0IGlzLlxuICovXG5cbi8qKiBUaGUgc2l6ZSBldmVyeSBjYWNoZSBzdGFydHMgd2l0aC4gKi9cbmNvbnN0IFNUQVJUX1NJWkUgPSA1MDAwO1xuXG4vKipcbiAqIENvZGVDYWNoZSBjbGFzcyB0byBtYW5hZ2UgY2FjaGluZyBvZiBnZW5lcmF0ZWQgY29kZSBzbmlwcGV0cy5cbiAqXG4gKiBFbnRyaWVzIGFyZSBldmljdGVkIGxlYXN0IHJlY2VudGx5IHVzZWQgZmlyc3Q6IGV2ZXJ5IGhpdCByZWZyZXNoZXMgdGhlIGVudHJ5LCBzbyBhblxuICogZXhwcmVzc2lvbiB0aGF0IGtlZXBzIGJlaW5nIHJlc29sdmVkIG91dGxpdmVzIG9uZSB0aGF0IHdhcyBjb21waWxlZCBvbmNlIGFuZCBkcm9wcGVkLlxuICogVGhlIG1hcmtlciBpcyBhIGNvdW50ZXIgcmF0aGVyIHRoYW4gYSB0aW1lc3RhbXAg4oCUIGEgYnVyc3Qgb2YgZmlyc3QtdGltZSBjb21waWxhdGlvbnNcbiAqIGZhbGxzIGludG8gYSBzaW5nbGUgbWlsbGlzZWNvbmQsIHdoaWNoIHdvdWxkIGxlYXZlIHRoZSBldmljdGlvbiBvcmRlciB0byBjaGFuY2UuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvZGVDYWNoZSB7XG5cdC8qKiBAdHlwZSB7Ym9vbGVhbn0gKi9cblx0I2Rpc2FibGVkID0gZmFsc2U7XG5cdC8qKiBAdHlwZSB7bnVtYmVyfSAqL1xuXHQjc2l6ZSA9IDA7XG5cdC8qKiBAdHlwZSB7bnVtYmVyfSAqL1xuXHQjbWF4U2l6ZSA9IDA7XG5cdC8qKiBAdHlwZSB7QXJyYXk8Q2FjaGVFbnRyeT59ICovXG5cdCNlbnRyaWVzID0gW107XG5cdC8qKiBAdHlwZSB7TWFwPHN0cmluZyxDYWNoZUVudHJ5Pn0gKi9cblx0I2VudHJ5TWFwID0gbmV3IE1hcCgpO1xuXHQvKiogQHR5cGUge251bWJlcn0gLSBIYW5kcyBvdXQgdGhlIGBsYXN0SGl0YCBtYXJrZXJzLCBuZXZlciByZXNldC4gKi9cblx0I2Nsb2NrID0gMDtcblxuXG5cdC8qKlxuXHQgKiBTdGFydHMgd2l0aCBhIHNpemUgb2YgNTAwMCwgdGhlbiBhcHBsaWVzIHRoZSBvcHRpb25zLlxuXHQgKlxuXHQgKiBAcGFyYW0ge0NvZGVDYWNoZU9wdGlvbnN9IG9wdGlvbnNcblx0ICovXG5cdGNvbnN0cnVjdG9yKG9wdGlvbnMgPSB7fSkge1xuXHRcdHRoaXMuI3Jlc2l6ZShTVEFSVF9TSVpFKTtcblx0XHR0aGlzLnNldHVwKG9wdGlvbnMpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEFwcGxpZXMgd2hhdCB0aGUgb3B0aW9ucyBjYXJyeSBhbmQgbGVhdmVzIGV2ZXJ5dGhpbmcgZWxzZSBhcyBpdCBpcy4gQSBzaXplIG9mIDAgb3IgbGVzc1xuXHQgKiBkaXNhYmxlcyB0aGUgY2FjaGUgYW5kIHJlbGVhc2VzIGl0cyBlbnRyaWVzLCBhIGxhdGVyIHBvc2l0aXZlIHNpemUgZW5hYmxlcyBpdCBhZ2FpbiBhbmQgc3RhcnRzXG5cdCAqIGVtcHR5LlxuXHQgKlxuXHQgKiBAcGFyYW0ge0NvZGVDYWNoZU9wdGlvbnN9IG9wdGlvbnNcblx0ICogQHRocm93cyB7VHlwZUVycm9yfSB3aGVyZSB0aGUgc2l6ZSBpcyBub3QgYSBmaW5pdGUgbnVtYmVyXG5cdCAqL1xuXHRzZXR1cCh7IHNpemUgfSA9IHt9KSB7XG5cdFx0aWYgKHNpemUgPT09IHVuZGVmaW5lZCkgcmV0dXJuO1xuXHRcdGlmICh0eXBlb2Ygc2l6ZSAhPT0gXCJudW1iZXJcIiB8fCAhTnVtYmVyLmlzRmluaXRlKHNpemUpKSB0aHJvdyBuZXcgVHlwZUVycm9yKGBUaGUgc2l6ZSBvZiBhIGNvZGUgY2FjaGUgaXMgYSBmaW5pdGUgbnVtYmVyLCBub3QgJHtTdHJpbmcoc2l6ZSl9IWApO1xuXG5cdFx0dGhpcy4jcmVzaXplKE1hdGguZmxvb3Ioc2l6ZSkpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSBhU2l6ZSBhIHdob2xlIG51bWJlclxuXHQgKi9cblx0I3Jlc2l6ZShhU2l6ZSkge1xuXHRcdHRoaXMuI2Rpc2FibGVkID0gYVNpemUgPD0gMDtcblx0XHRpZiAodGhpcy4jZGlzYWJsZWQpIHtcblx0XHRcdHRoaXMuI3NpemUgPSAwO1xuXHRcdFx0dGhpcy4jbWF4U2l6ZSA9IDA7XG5cdFx0XHR0aGlzLmNsZWFyKCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuI3NpemUgPSBhU2l6ZTtcblx0XHRcdHRoaXMuI21heFNpemUgPSBNYXRoLmZsb29yKGFTaXplICogMS4xKTtcblx0XHRcdHRoaXMuI3RyaW0oKTtcblx0XHR9XG5cdH1cblxuXHQvKipcblx0ICogV2hldGhlciBhbiBlbnRyeSBpcyBoZWxkIHVuZGVyIHRoZSBrZXkuIEEgZGlzYWJsZWQgY2FjaGUgaG9sZHMgbm9uZS4gQXNraW5nIGRvZXMgbm90IGNvdW50IGFzIGFcblx0ICogaGl0LCBzbyBpdCBsZWF2ZXMgdGhlIGV2aWN0aW9uIG9yZGVyIGFsb25lLlxuXHQgKlxuXHQgKiBAcGFyYW0ge3N0cmluZ30ga2V5XG5cdCAqIEByZXR1cm5zIHtib29sZWFufVxuXHQgKi9cblx0aGFzKGtleSkge1xuXHRcdGlmKHRoaXMuI2Rpc2FibGVkKSByZXR1cm4gZmFsc2U7XG5cdFx0cmV0dXJuIHRoaXMuI2VudHJ5TWFwLmhhcyhrZXkpO1xuXHR9XG5cblx0LyoqXG5cdCAqIFRoZSBjb2RlIGhlbGQgdW5kZXIgdGhlIGtleSwgb3IgbnVsbCB3aGVyZSBub25lIGlzIGhlbGQgb3IgdGhlIGNhY2hlIGlzIGRpc2FibGVkLiBBIGhpdFxuXHQgKiByZWZyZXNoZXMgdGhlIGVudHJ5LCBzbyBpdCBpcyBldmljdGVkIGxhc3QuXG5cdCAqXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBrZXlcblx0ICogQHJldHVybnMgez9GdW5jdGlvbn1cblx0ICovXG5cdGdldChrZXkpIHtcblx0XHRpZih0aGlzLiNkaXNhYmxlZCkgcmV0dXJuIG51bGw7XG5cdFx0Y29uc3QgZW50cnkgPSB0aGlzLiNlbnRyeU1hcC5nZXQoa2V5KTtcblx0XHRpZiAoZW50cnkpIHtcblx0XHRcdGVudHJ5Lmxhc3RIaXQgPSArK3RoaXMuI2Nsb2NrO1xuXHRcdFx0cmV0dXJuIGVudHJ5LnZhbHVlO1xuXHRcdH1cblx0XHRyZXR1cm4gbnVsbDtcblx0fVxuXG5cdC8qKlxuXHQgKiBIb2xkcyB0aGUgY29kZSB1bmRlciB0aGUga2V5LCByZXBsYWNpbmcgd2hhdCB3YXMgaGVsZCB0aGVyZSwgYW5kIHJlZnJlc2hlcyB0aGUgZW50cnkuIE9uY2UgdGhlXG5cdCAqIGNhY2hlIHJlYWNoZXMgYSB0ZW50aCBwYXN0IGl0cyBzaXplLCB0aGUgbGVhc3QgcmVjZW50bHkgdXNlZCBlbnRyaWVzIGFyZSBldmljdGVkIGRvd24gdG8gdGhlXG5cdCAqIHNpemUuXG5cdCAqIEEgZGlzYWJsZWQgY2FjaGUga2VlcHMgbm90aGluZy5cblx0ICpcblx0ICogQHBhcmFtIHtzdHJpbmd9IGtleVxuXHQgKiBAcGFyYW0ge0Z1bmN0aW9ufSBjb2RlXG5cdCAqL1xuXHRzZXQoa2V5LCBjb2RlKSB7XG5cdFx0aWYodGhpcy4jZGlzYWJsZWQpIHJldHVybjtcblx0XHRsZXQgZW50cnkgPSB0aGlzLiNlbnRyeU1hcC5nZXQoa2V5KTtcblx0XHRpZiAoZW50cnkpIHtcblx0XHRcdGVudHJ5Lmxhc3RIaXQgPSArK3RoaXMuI2Nsb2NrO1xuXHRcdFx0ZW50cnkudmFsdWUgPSBjb2RlO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRlbnRyeSA9IHtcblx0XHRcdFx0bGFzdEhpdDogKyt0aGlzLiNjbG9jayxcblx0XHRcdFx0a2V5LFxuXHRcdFx0XHR2YWx1ZTogY29kZSxcblx0XHRcdH07XG5cdFx0XHR0aGlzLiNlbnRyaWVzLnB1c2goZW50cnkpO1xuXHRcdFx0dGhpcy4jZW50cnlNYXAuc2V0KGtleSwgZW50cnkpO1xuXHRcdH1cblxuXHRcdGlmICh0aGlzLiNlbnRyeU1hcC5zaXplID49IHRoaXMuI21heFNpemUpIHRoaXMuI3RyaW0oKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBEcm9wcyBldmVyeSBlbnRyeS4gVGhlIHNpemUgc3RheXMgYXMgaXQgaXMuXG5cdCAqL1xuXHRjbGVhcigpIHtcblx0XHR0aGlzLiNlbnRyaWVzID0gW107XG5cdFx0dGhpcy4jZW50cnlNYXAgPSBuZXcgTWFwKCk7XG5cdH1cblxuXHQjdHJpbSgpIHtcblx0XHR0aGlzLiNlbnRyaWVzLnNvcnQoKGEsIGIpID0+IGIubGFzdEhpdCAtIGEubGFzdEhpdCk7XG5cdFx0aWYgKHRoaXMuI2VudHJpZXMubGVuZ3RoID4gdGhpcy4jc2l6ZSkge1xuXHRcdFx0Y29uc3QgZW50cmllc1RvUmVtb3ZlID0gdGhpcy4jZW50cmllcy5zcGxpY2UodGhpcy4jc2l6ZSk7XG5cdFx0XHRmb3IgKGNvbnN0IGVudHJ5IG9mIGVudHJpZXNUb1JlbW92ZSkge1xuXHRcdFx0XHR0aGlzLiNlbnRyeU1hcC5kZWxldGUoZW50cnkua2V5KTtcblx0XHRcdH1cblx0XHR9XG5cdH1cbn07XG4iLCIvKipcbiAqIEEgZGVmYXVsdCB2YWx1ZSBhcyB0aGUgcmVzb2x2ZXIgY2FycmllcyBpdCwgd2hpY2ggdGVsbHMgXCJubyBkZWZhdWx0IHBhc3NlZFwiIGFwYXJ0IGZyb20gXCJ0aGVcbiAqIGRlZmF1bHQgaXMgdW5kZWZpbmVkXCIuXG4gKlxuICogQGV4cG9ydFxuICogQGNsYXNzIERlZmF1bHRWYWx1ZVxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEZWZhdWx0VmFsdWUge1xuXHQvKipcblx0ICogQ3JlYXRlZCB3aXRob3V0IGFuIGFyZ3VtZW50LCBpdCBjYXJyaWVzIG5vIGRlZmF1bHQ7IGNyZWF0ZWQgd2l0aCBvbmUsIGl0IGNhcnJpZXMgdGhhdFxuXHQgKiBhcmd1bWVudCwgdW5kZWZpbmVkIGluY2x1ZGVkLlxuXHQgKlxuXHQgKiBAY29uc3RydWN0b3Jcblx0ICogQHBhcmFtIHsqfSBbdmFsdWVdXG5cdCAqL1xuXHRjb25zdHJ1Y3Rvcih2YWx1ZSl7XG5cdFx0LyoqIEB0eXBlIHtib29sZWFufSB3aGV0aGVyIGEgZGVmYXVsdCB3YXMgcGFzc2VkICovXG5cdFx0dGhpcy5oYXNWYWx1ZSA9IGFyZ3VtZW50cy5sZW5ndGggPT0gMTtcblx0XHQvKiogQHR5cGUgeyp9IHRoZSBkZWZhdWx0LCBtZWFuaW5nZnVsIG9ubHkgd2hlcmUgaGFzVmFsdWUgaXMgdHJ1ZSAqL1xuXHRcdHRoaXMudmFsdWUgPSB2YWx1ZTtcblx0fVxufTtcbiIsIi8qKlxuICogVGhlIGludGVyZmFjZSBldmVyeSBleGVjdXRlciBpbXBsZW1lbnRzLiBBbiBleGVjdXRlciBydW5zIHN0YXRlbWVudHMgYW5kXG4gKiBob2xkcyBubyBjb250ZXh0IG9mIGl0cyBvd246IHRoZSBjb250ZXh0IGFsd2F5cyBjb21lcyBmcm9tIHRoZSByZXNvbHZlci5cbiAqXG4gKiBBbiBvd24gaW1wbGVtZW50YXRpb24gaXMgYnVpbHQgZnJvbSBpdCBieSBoYW5kaW5nIG92ZXIgdGhlIGZ1bmN0aW9uIHRoYXQgZG9lcyB0aGUgd29yay5cbiAqXG4gKiBAZXhwb3J0XG4gKiBAY2xhc3MgRXhlY3V0ZXJcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXhlY3V0ZXJ7XG5cblx0I2V4ZWN1dGlvbjtcblxuXHQvKipcblx0ICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25dXG5cdCAqIEBwYXJhbSB7KGFTdGF0ZW1lbnQ6IHN0cmluZywgYUNvbnRleHQ6IG9iamVjdCkgPT4gKn0gW29wdGlvbi5leGVjdXRpb25dIHJ1bnMgYSBzdGF0ZW1lbnQgb3ZlclxuXHQgKiBhIGNvbnRleHQgYW5kIGFuc3dlcnMgdGhlIHJlc3VsdCwgYSBwcm9taXNlIGluY2x1ZGVkLiBXaXRob3V0IG9uZSwgZXZlcnkgZXhlY3V0aW9uIHRocm93cy5cblx0ICovXG5cdGNvbnN0cnVjdG9yKHtleGVjdXRpb259ID0ge30pe1xuXHRcdHRoaXMuI2V4ZWN1dGlvbiA9IGV4ZWN1dGlvbiB8fCAoKCkgPT4ge3Rocm93IG5ldyBFcnJvcihcIm5vdCBpbXBsZW1lbnRlZFwiKX0pO1xuXHR9XG5cblx0LyoqXG5cdCAqIFJ1bnMgYSBzdGF0ZW1lbnQgb3ZlciBhIGNvbnRleHQuXG5cdCAqXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBhU3RhdGVtZW50IHRoZSBzdGF0ZW1lbnQsIHdpdGhvdXQgZGVsaW1pdGVycyBhbmQgc2NvcGUgcHJlZml4XG5cdCAqIEBwYXJhbSB7b2JqZWN0fSBhQ29udGV4dCB0aGUgY29udGV4dCBvZiB0aGUgcmVzb2x2ZXIgdGhlIHN0YXRlbWVudCBpcyBldmFsdWF0ZWQgb25cblx0ICogQHJldHVybnMgeyp9IHdoYXQgdGhlIGV4ZWN1dGlvbiBhbnN3ZXJzLCBhIHByb21pc2UgaW5jbHVkZWRcblx0ICovXG5cdGV4ZWN1dGUoYVN0YXRlbWVudCwgYUNvbnRleHQpe1xuXHRcdHJldHVybiB0aGlzLiNleGVjdXRpb24oYVN0YXRlbWVudCwgYUNvbnRleHQpO1xuXHR9XG59O1xuIiwiaW1wb3J0IEV4ZWN1dGVyIGZyb20gXCIuL0V4ZWN1dGVyLmpzXCI7XG5cbmNvbnN0IEVYRUNVVEVSUyA9IG5ldyBNYXAoKTtcblxuLyoqXG4gKiBLZWVwcyBhbiBleGVjdXRlciB1bmRlciBhIG5hbWUsIHNvIGEgcmVzb2x2ZXIgY2FuIGJlIGdpdmVuIHRoZSBuYW1lIGluc3RlYWQgb2YgdGhlIGluc3RhbmNlLlxuICogQW4gZXhlY3V0ZXIgYWxyZWFkeSBrZXB0IHVuZGVyIHRoZSBuYW1lIGlzIHJlcGxhY2VkLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBhTmFtZVxuICogQHBhcmFtIHtFeGVjdXRlcn0gYW5FeGVjdXRlclxuICovXG5leHBvcnQgY29uc3QgcmVnaXN0ZXIgPSAoYU5hbWUsIGFuRXhlY3V0ZXIpID0+IHtcblx0RVhFQ1VURVJTLnNldChhTmFtZSwgYW5FeGVjdXRlcik7XG59O1xuXG4vKipcbiAqIFRoZSBleGVjdXRlciBrZXB0IHVuZGVyIGEgbmFtZS4gQWxzbyB0aGUgZGVmYXVsdCBleHBvcnQgb2YgdGhpcyBtb2R1bGUuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGFOYW1lXG4gKiBAcmV0dXJucyB7RXhlY3V0ZXJ9XG4gKiBAdGhyb3dzIHtFcnJvcn0gd2hlcmUgbm8gZXhlY3V0ZXIgaXMga2VwdCB1bmRlciB0aGUgbmFtZVxuICovXG5leHBvcnQgY29uc3QgZ2V0RXhlY3V0ZXIgPSAoYU5hbWUpID0+IHtcblx0Y29uc3QgZXhlY3V0ZXIgPSBFWEVDVVRFUlMuZ2V0KGFOYW1lKTtcblx0aWYgKCFleGVjdXRlcikgdGhyb3cgbmV3IEVycm9yKGBFeGVjdXRlciBcIiR7YU5hbWV9XCIgaXMgbm90IHJlZ2lzdGVyZWQhYCk7XG5cdHJldHVybiBleGVjdXRlcjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGdldEV4ZWN1dGVyO1xuIiwiaW1wb3J0IE9iamVjdFV0aWxzIGZyb20gXCJAZGVmYXVsdC1qcy9kZWZhdWx0anMtY29tbW9uLXV0aWxzL3NyYy9PYmplY3RVdGlscy5qc1wiO1xuaW1wb3J0IERlZmF1bHRWYWx1ZSBmcm9tIFwiLi9EZWZhdWx0VmFsdWUuanNcIjtcbmltcG9ydCB7IGdldEV4ZWN1dGVyIH0gZnJvbSBcIi4vRXhlY3V0ZXJSZWdpc3RyeS5qc1wiO1xuaW1wb3J0IERlZmF1bHRFeGVjdXRlciBmcm9tIFwiLi9leGVjdXRlci9Db250ZXh0RGVjb25zdHJ1Y3RvckV4ZWN1dGVyLmpzXCI7XG5pbXBvcnQgUmVzb2x2ZXJDb250ZXh0SGFuZGxlIGZyb20gXCIuL1Jlc29sdmVyQ29udGV4dEhhbmRsZS5qc1wiO1xuaW1wb3J0IEV4ZWN1dGVyIGZyb20gXCIuL0V4ZWN1dGVyLmpzXCI7XG5pbXBvcnQgeyBzY2FuLCBwYXJzZUV4cHJlc3Npb24gfSBmcm9tIFwiLi9FeHByZXNzaW9uU2Nhbm5lci5qc1wiO1xuaW1wb3J0IHsgaXNOYW1lQ2hhcmFjdGVyLCB0cmltVG9OdWxsIH0gZnJvbSBcIi4vVXRpbHMuanNcIjtcblxuLyoqIEB0eXBlIHtFeGVjdXRlcn0gKi9cbmxldCBERUZBVUxUX0VYRUNVVEVSID0gRGVmYXVsdEV4ZWN1dGVyO1xuXG5jb25zdCBERUZBVUxUX05PVF9ERUZJTkVEID0gbmV3IERlZmF1bHRWYWx1ZSgpO1xuY29uc3QgdG9EZWZhdWx0VmFsdWUgPSAodmFsdWUpID0+IHtcblx0aWYgKHZhbHVlIGluc3RhbmNlb2YgRGVmYXVsdFZhbHVlKSByZXR1cm4gdmFsdWU7XG5cblx0cmV0dXJuIG5ldyBEZWZhdWx0VmFsdWUodmFsdWUpO1xufTtcblxubGV0IE5BTUVfQ09VTlRFUiA9IDA7XG4vKipcbiAqIFRoZSBuYW1lIGEgcmVzb2x2ZXIgY2FycmllcyB3aGVyZSB0aGUgY2FsbGVyIHBhc3NlZCBub25lLiBPbmx5IHVuaXF1ZW5lc3MgaXMgcHJvbWlzZWQsIHRoZSBzaGFwZVxuICogaXMgbm90LlxuICpcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbmNvbnN0IGdlbmVyYXRlTmFtZSA9ICgpID0+IGBFUiR7KytOQU1FX0NPVU5URVJ9YDtcblxuLyoqXG4gKiBUaGUgbmFtZSBhIHJlc29sdmVyIGtlZXBzOiB0aGUgb25lIHBhc3NlZCwgdHJpbW1lZCBhbmQgaGVsZCB0byB0aGUgY2hhcmFjdGVycyBhIHNjb3BlIG5hbWUgbWF5XG4gKiBjYXJyeSwgb3IgYSBnZW5lcmF0ZWQgb25lIHdoZXJlIG5vbmUgd2FzIHBhc3NlZC5cbiAqXG4gKiBAcGFyYW0gez9zdHJpbmd9IGFOYW1lXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICogQHRocm93cyB7VHlwZUVycm9yfSB3aGVyZSB0aGUgbmFtZSBpcyBubyBzdHJpbmcsIGVtcHR5LCBvciBjYXJyaWVzIGEgY2hhcmFjdGVyIGEgc2NvcGUgbmFtZSBjYW5ub3RcbiAqIGNhcnJ5XG4gKi9cbmNvbnN0IHRvTmFtZSA9IChhTmFtZSkgPT4ge1xuXHRpZiAoYU5hbWUgPT0gbnVsbCkgcmV0dXJuIGdlbmVyYXRlTmFtZSgpO1xuXHRpZiAodHlwZW9mIGFOYW1lICE9PSBcInN0cmluZ1wiKSB0aHJvdyBuZXcgVHlwZUVycm9yKGBUaGUgb3B0aW9uIG5hbWUgdGFrZXMgYSBzdHJpbmcsIG5vdCBhICR7dHlwZW9mIGFOYW1lfSFgKTtcblxuXHRjb25zdCBuYW1lID0gdHJpbVRvTnVsbChhTmFtZSk7XG5cdGlmIChuYW1lID09IG51bGwpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJUaGUgb3B0aW9uIG5hbWUgdGFrZXMgYSBuYW1lLCBub3QgYW4gZW1wdHkgc3RyaW5nIVwiKTtcblx0Zm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IG5hbWUubGVuZ3RoOyBpbmRleCsrKVxuXHRcdGlmICghaXNOYW1lQ2hhcmFjdGVyKG5hbWUuY2hhckNvZGVBdChpbmRleCkpKSB0aHJvdyBuZXcgVHlwZUVycm9yKGBUaGUgbmFtZSBcIiR7bmFtZX1cIiBjYXJyaWVzIGEgY2hhcmFjdGVyIGEgc2NvcGUgbmFtZSBjYW5ub3QgY2FycnkgLSBvbmx5IEFTQ0lJIGxldHRlcnMsIGRpZ2l0cywgXCItXCIsIFwiX1wiIGFuZCB3aGl0ZXNwYWNlIGFyZSBhbGxvd2VkIWApO1xuXG5cdHJldHVybiBuYW1lO1xufTtcblxuLyoqXG4gKiBUaGUgc2NvcGUgbmFtZSBhIGZpbHRlciBvZiB0aGUgZGF0YSBtZXRob2RzIHNlbGVjdHMsIHJlYWQgbGlrZSBhIHNjb3BlIHByZWZpeDogdHJpbW1lZCwgYW5kIG51bGxcbiAqIHdoZXJlIHRoZXJlIGlzIG5vbmUuXG4gKlxuICogQHBhcmFtIHs/c3RyaW5nfSBhRmlsdGVyXG4gKiBAcmV0dXJucyB7P3N0cmluZ31cbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gd2hlcmUgdGhlIGZpbHRlciBpcyBubyBzdHJpbmdcbiAqL1xuY29uc3QgdG9TY29wZSA9IChhRmlsdGVyKSA9PiB7XG5cdGlmIChhRmlsdGVyID09IG51bGwpIHJldHVybiBudWxsO1xuXHRpZiAodHlwZW9mIGFGaWx0ZXIgIT09IFwic3RyaW5nXCIpIHRocm93IG5ldyBUeXBlRXJyb3IoYEEgZmlsdGVyIGlzIGEgc2NvcGUgbmFtZSwgbm90IGEgJHt0eXBlb2YgYUZpbHRlcn0hYCk7XG5cblx0cmV0dXJuIHRyaW1Ub051bGwoYUZpbHRlcik7XG59O1xuXG4vKipcbiAqIFRoZSBwcm9wZXJ0eSBrZXkgYSBkYXRhIG1ldGhvZCB3b3JrcyB3aXRoIC0gYSBzdHJpbmcsIFwiXCIgaW5jbHVkZWQsIGEgc3ltYm9sLCBvciBhIG51bWJlciwgd2hpY2hcbiAqIG5hbWVzIHRoZSBzYW1lIHByb3BlcnR5IGFzIGl0cyBzdHJpbmcgYW5kIGlzIGxvb2tlZCB1cCBhcyBvbmUuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd8bnVtYmVyfHN5bWJvbH0gYUtleVxuICogQHJldHVybnMge3N0cmluZ3xzeW1ib2x9XG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IHdoZXJlIHRoZSBrZXkgaXMgbm9uZSwgb3Igb2YgYSB0eXBlIG5vIHByb3BlcnR5IGtleSBoYXNcbiAqL1xuY29uc3QgdG9LZXkgPSAoYUtleSkgPT4ge1xuXHRjb25zdCB0eXBlID0gdHlwZW9mIGFLZXk7XG5cdGlmICh0eXBlID09PSBcInN0cmluZ1wiIHx8IHR5cGUgPT09IFwic3ltYm9sXCIpIHJldHVybiBhS2V5O1xuXHRpZiAodHlwZSA9PT0gXCJudW1iZXJcIikgcmV0dXJuIFN0cmluZyhhS2V5KTtcblxuXHR0aHJvdyBuZXcgVHlwZUVycm9yKGBBIGtleSBpcyBhIHN0cmluZywgYSBudW1iZXIgb3IgYSBzeW1ib2wsIG5vdCAke2FLZXkgPT0gbnVsbCA/IFwibWlzc2luZ1wiIDogYGEgJHt0eXBlfWB9IWApO1xufTtcblxuY29uc3Qgd2FybkZhaWxlZFN0YXRlbWVudCA9IChhU3RhdGVtZW50LCBhbkVycm9yKSA9PiB7XG5cdGNvbnNvbGUud2FybihgRXhlY3V0aW9uIGVycm9yIG9uIHN0YXRlbWVudCFcblx0XHRzdGF0ZW1lbnQ6XG5cdFx0JHthU3RhdGVtZW50fVxuXHRcdGVycm9yOlxuXHRcdCR7YW5FcnJvcn1cblx0XHRgKTtcbn07XG5cbi8qKlxuICogQHBhcmFtIHsqfSBhUmVzdWx0XG4gKiBAcGFyYW0ge0RlZmF1bHRWYWx1ZX0gYURlZmF1bHRcbiAqIEByZXR1cm5zIHsqfVxuICovXG5jb25zdCB3aXRoRGVmYXVsdCA9IChhUmVzdWx0LCBhRGVmYXVsdCkgPT4ge1xuXHRpZiAoYVJlc3VsdCAhPT0gbnVsbCAmJiB0eXBlb2YgYVJlc3VsdCAhPT0gXCJ1bmRlZmluZWRcIikgcmV0dXJuIGFSZXN1bHQ7XG5cdGVsc2UgaWYgKGFEZWZhdWx0Lmhhc1ZhbHVlKSByZXR1cm4gYURlZmF1bHQudmFsdWU7XG5cdHJldHVybiBhUmVzdWx0O1xufTtcblxuLy8gdGhlIGZpcnN0IGFyZ3VtZW50IG9mIGEgc3RhdGljIGVudHJ5IHBvaW50IGlzIGEgc3RyaW5nLCBvciBhIGNvbmZpZ3VyYXRpb24gb2JqZWN0XG5jb25zdCBpc0NvbmZpZ3VyYXRpb24gPSAoYVZhbHVlKSA9PiBhVmFsdWUgIT09IG51bGwgJiYgdHlwZW9mIGFWYWx1ZSA9PT0gXCJvYmplY3RcIjtcblxuLy8gYSBjb25maWd1cmF0aW9uIGNvdW50cyBhcyBwYXNzaW5nIGEgZGVmYXVsdCB3aGVyZSBpdCBjYXJyaWVzIHRoZSBrZXksIHdoYXRldmVyIGl0IGhvbGRzXG5jb25zdCBkZWZhdWx0T2YgPSAoYUNvbmZpZ3VyYXRpb24pID0+IChcImRlZmF1bHRWYWx1ZVwiIGluIGFDb25maWd1cmF0aW9uID8gYUNvbmZpZ3VyYXRpb24uZGVmYXVsdFZhbHVlIDogREVGQVVMVF9OT1RfREVGSU5FRCk7XG5cbi8qKlxuICogUmVzb2x2ZXMgYCR7Li4ufWAgZXhwcmVzc2lvbnMgYWdhaW5zdCBhIGNvbnRleHQuIEEgcmVzb2x2ZXIgbWF5IGhhdmUgYSBwYXJlbnQsIGFuZCB0aGUgcmVzb2x2ZXJzXG4gKiBmcm9tIGl0IHVwIHRvIHRoZSByb290IGZvcm0gYSBjaGFpbjogYSBuYW1lIGlzIGxvb2tlZCB1cCBmcm9tIHRoaXMgcmVzb2x2ZXIgdG93YXJkcyB0aGUgcm9vdCwgYW5kXG4gKiBhIHNjb3BlIHByZWZpeCBgJHtuYW1lOjpzdGF0ZW1lbnR9YCBhZGRyZXNzZXMgb25lIHJlc29sdmVyIG9mIHRoZSBjaGFpbi5cbiAqXG4gKiBVc2VkIHN0YXRpY2FsbHkgd2l0aCBhbiBhZC1ob2MgY29udGV4dCAoYHJlc29sdmVgLCBgcmVzb2x2ZVRleHRgKSwgb3IgYXMgYW4gaW5zdGFuY2Ugd2l0aGluIGFcbiAqIGNoYWluLlxuICpcbiAqIEBleHBvcnRcbiAqIEBjbGFzcyBFeHByZXNzaW9uUmVzb2x2ZXJcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXhwcmVzc2lvblJlc29sdmVyIHtcblx0LyoqXG5cdCAqIFNldHMgdGhlIGV4ZWN1dGVyIGEgcmVzb2x2ZXIgd2l0aG91dCBhIHBhcmVudCB0YWtlcyB3aGVyZSB0aGUgYGV4ZWN1dGVyYCBvcHRpb24gaXMgbGVmdCBvdXQsXG5cdCAqIGFuZCBzbyB0aGUgZXhlY3V0ZXIgb2YgdGhlIHN0YXRpYyBlbnRyeSBwb2ludHMuXG5cdCAqXG5cdCAqIEBwYXJhbSB7c3RyaW5nfEV4ZWN1dGVyfSBhbkV4ZWN1dGVyIGEgcmVnaXN0ZXJlZCBuYW1lIG9yIGFuIGBFeGVjdXRlcmAgaW5zdGFuY2Vcblx0ICogQHRocm93cyB7VHlwZUVycm9yfSB3aGVyZSB0aGUgdmFsdWUgaXMgbmVpdGhlciBhIHN0cmluZyBub3IgYW4gYEV4ZWN1dGVyYCBpbnN0YW5jZVxuXHQgKiBAdGhyb3dzIHtFcnJvcn0gd2hlcmUgYSBuYW1lIGlzIG5vdCByZWdpc3RlcmVkXG5cdCAqL1xuXHRzdGF0aWMgc2V0IGRlZmF1bHRFeGVjdXRlcihhbkV4ZWN1dGVyKSB7XG5cdFx0aWYgKGFuRXhlY3V0ZXIgaW5zdGFuY2VvZiBFeGVjdXRlcikgREVGQVVMVF9FWEVDVVRFUiA9IGFuRXhlY3V0ZXI7XG5cdFx0ZWxzZSBpZiAodHlwZW9mIGFuRXhlY3V0ZXIgPT09IFwic3RyaW5nXCIpIERFRkFVTFRfRVhFQ1VURVIgPSBnZXRFeGVjdXRlcihhbkV4ZWN1dGVyKTtcblx0XHRlbHNlIHRocm93IG5ldyBUeXBlRXJyb3IoYEV4cHJlc3Npb25SZXNvbHZlci5kZWZhdWx0RXhlY3V0ZXIgdGFrZXMgYSByZWdpc3RlcmVkIG5hbWUgb3IgYW4gRXhlY3V0ZXIsIG5vdCBhICR7dHlwZW9mIGFuRXhlY3V0ZXJ9IWApO1xuXHRcdGNvbnNvbGUuaW5mbyhgQ2hhbmdlZCBkZWZhdWx0IGV4ZWN1dGVyIGZvciBFeHByZXNzaW9uUmVzb2x2ZXIhYCk7XG5cdH1cblxuXHQvKipcblx0ICogVGhlIGV4ZWN1dGVyIGEgcmVzb2x2ZXIgd2l0aG91dCBhIHBhcmVudCB0YWtlcyB3aGVyZSB0aGUgYGV4ZWN1dGVyYCBvcHRpb24gaXMgbGVmdCBvdXQ7XG5cdCAqIGBjb250ZXh0LWRlY29uc3RydWN0aW9uLWV4ZWN1dGVyYCB1bnRpbCBpdCBpcyBzZXQuXG5cdCAqXG5cdCAqIEB0eXBlIHtFeGVjdXRlcn1cblx0ICovXG5cdHN0YXRpYyBnZXQgZGVmYXVsdEV4ZWN1dGVyKCkge1xuXHRcdHJldHVybiBERUZBVUxUX0VYRUNVVEVSO1xuXHR9XG5cblx0LyoqIEB0eXBlIHtzdHJpbmd8bnVsbH0gKi9cblx0I25hbWUgPSBudWxsO1xuXHQvKiogQHR5cGUge0V4cHJlc3Npb25SZXNvbHZlcnxudWxsfSAqL1xuXHQjcGFyZW50ID0gbnVsbDtcblx0LyoqIEB0eXBlIHtFeGVjdXRlcnxudWxsfSAqL1xuXHQjZXhlY3V0ZXIgPSBudWxsO1xuXHQvKiogQHR5cGUge29iamVjdHxudWxsfSAqL1xuXHQjY29udGV4dCA9IG51bGw7XG5cdC8qKiBAdHlwZSB7UmVzb2x2ZXJDb250ZXh0SGFuZGxlfG51bGx9ICovXG5cdCNjb250ZXh0SGFuZGxlID0gbnVsbDtcblxuXHQvKipcblx0ICogQGNvbnN0cnVjdG9yXG5cdCAqIEBwYXJhbSB7b2JqZWN0fSBbb3B0aW9uc11cblx0ICogQHBhcmFtIHs/b2JqZWN0fSBbb3B0aW9ucy5jb250ZXh0XSBhbnkgb2JqZWN0OyB3aGVyZSBub25lIGlzIHBhc3NlZCAtIGxlZnQgb3V0LCBudWxsIG9yXG5cdCAqIHVuZGVmaW5lZCAtIHRoZSByZXNvbHZlciBoYXMgbm8gY29udGV4dCBvZiBpdHMgb3duXG5cdCAqIEBwYXJhbSB7P0V4cHJlc3Npb25SZXNvbHZlcn0gW29wdGlvbnMucGFyZW50PW51bGxdXG5cdCAqIEBwYXJhbSB7P3N0cmluZ30gW29wdGlvbnMubmFtZT1udWxsXSBrZXB0IHRyaW1tZWQ7IHdoZXJlIG5vbmUgaXMgcGFzc2VkLCBvbmUgaXMgZ2VuZXJhdGVkXG5cdCAqIEBwYXJhbSB7PyhzdHJpbmd8RXhlY3V0ZXIpfSBbb3B0aW9ucy5leGVjdXRlcl0gdGhlIHJlZ2lzdGVyZWQgbmFtZSBvZiBhbiBleGVjdXRlciwgb3IgYW5cblx0ICogYEV4ZWN1dGVyYCBpbnN0YW5jZS4gQSBuYW1lIHRoYXQgaXMgbm90IHJlZ2lzdGVyZWQgdGhyb3dzOyBhbiBpbnN0YW5jZSBuZWVkcyBubyByZWdpc3RyYXRpb24sXG5cdCAqIGJlY2F1c2UgaXQgYWRkcmVzc2VzIHRoZSBleGVjdXRlciBkaXJlY3RseS4gTnVsbCBhbmQgdW5kZWZpbmVkIGNvdW50IGFzIGxlZnQgb3V0LiBXaXRob3V0IHRoZVxuXHQgKiBvcHRpb24gdGhlIHJlc29sdmVyIHRha2VzIHRoZSBleGVjdXRlciBvZiBpdHMgcGFyZW50LCBhbmQgb25lIHdpdGhvdXQgYSBwYXJlbnRcblx0ICogYEV4cHJlc3Npb25SZXNvbHZlci5kZWZhdWx0RXhlY3V0ZXJgLlxuXHQgKiBAdGhyb3dzIHtUeXBlRXJyb3J9IHdoZXJlIHRoZSBwYXJlbnQgaXMgbm8gcmVzb2x2ZXIsIHRoZSBjb250ZXh0IGEgcHJpbWl0aXZlLCB0aGUgbmFtZSBub1xuXHQgKiBzdHJpbmcsIGVtcHR5LCBvciBjYXJyeWluZyBhIGNoYXJhY3RlciBhIHNjb3BlIG5hbWUgY2Fubm90IGNhcnJ5LCBvciB0aGUgZXhlY3V0ZXIgbmVpdGhlciBhXG5cdCAqIHN0cmluZyBub3IgYW4gYEV4ZWN1dGVyYCBpbnN0YW5jZVxuXHQgKiBAdGhyb3dzIHtFcnJvcn0gd2hlcmUgdGhlIGV4ZWN1dGVyIGlzIG5hbWVkIGFuZCB0aGUgbmFtZSBpcyBub3QgcmVnaXN0ZXJlZFxuXHQgKi9cblx0Y29uc3RydWN0b3IoeyBjb250ZXh0LCBwYXJlbnQgPSBudWxsLCBuYW1lID0gbnVsbCwgZXhlY3V0ZXIgfSA9IHt9KSB7XG5cdFx0aWYgKHBhcmVudCAhPSBudWxsICYmICEocGFyZW50IGluc3RhbmNlb2YgRXhwcmVzc2lvblJlc29sdmVyKSkgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlRoZSBvcHRpb24gcGFyZW50IHRha2VzIGFuIEV4cHJlc3Npb25SZXNvbHZlciFcIik7XG5cdFx0aWYgKGNvbnRleHQgIT0gbnVsbCAmJiB0eXBlb2YgY29udGV4dCAhPT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgY29udGV4dCAhPT0gXCJmdW5jdGlvblwiKSB0aHJvdyBuZXcgVHlwZUVycm9yKGBUaGUgb3B0aW9uIGNvbnRleHQgdGFrZXMgYW4gb2JqZWN0LCBub3QgYSAke3R5cGVvZiBjb250ZXh0fSFgKTtcblx0XHRpZiAoZXhlY3V0ZXIgIT0gbnVsbCAmJiB0eXBlb2YgZXhlY3V0ZXIgIT09IFwic3RyaW5nXCIgJiYgIShleGVjdXRlciBpbnN0YW5jZW9mIEV4ZWN1dGVyKSkgdGhyb3cgbmV3IFR5cGVFcnJvcihgVGhlIG9wdGlvbiBleGVjdXRlciB0YWtlcyBhIHJlZ2lzdGVyZWQgbmFtZSBvciBhbiBFeGVjdXRlciwgbm90IGEgJHt0eXBlb2YgZXhlY3V0ZXJ9IWApO1xuXHRcdHRoaXMuI25hbWUgPSB0b05hbWUobmFtZSk7XG5cblx0XHRpZihleGVjdXRlciBpbnN0YW5jZW9mIEV4ZWN1dGVyKSB0aGlzLiNleGVjdXRlciA9ICBleGVjdXRlcjtcblx0XHRlbHNlIGlmICh0eXBlb2YgZXhlY3V0ZXIgPT09IFwic3RyaW5nXCIpIHRoaXMuI2V4ZWN1dGVyID0gZ2V0RXhlY3V0ZXIoZXhlY3V0ZXIpO1xuXHRcdGVsc2UgaWYocGFyZW50ICE9IG51bGwpIHRoaXMuI2V4ZWN1dGVyID0gcGFyZW50LmV4ZWN1dGVyO1xuXHRcdGVsc2UgdGhpcy4jZXhlY3V0ZXIgPSBFeHByZXNzaW9uUmVzb2x2ZXIuZGVmYXVsdEV4ZWN1dGVyO1xuXG5cdFx0dGhpcy4jcGFyZW50ID0gcGFyZW50O1xuXHRcdHRoaXMuI2NvbnRleHRIYW5kbGUgPSBuZXcgUmVzb2x2ZXJDb250ZXh0SGFuZGxlKGNvbnRleHQgLCB0aGlzLiNwYXJlbnQgPyB0aGlzLiNwYXJlbnQuY29udGV4dEhhbmRsZSA6IG51bGwpO1xuXHRcdHRoaXMuI2NvbnRleHQgPSB0aGlzLiNjb250ZXh0SGFuZGxlLmNvbnRleHQ7XG5cdH1cblxuXHQvKipcblx0ICogVGhlIG5hbWUgdGhpcyByZXNvbHZlciBpcyBhZGRyZXNzZWQgYnkgaW4gYSBzY29wZSBwcmVmaXggYW5kIGEgZmlsdGVyLlxuXHQgKlxuXHQgKiBAdHlwZSB7c3RyaW5nfVxuXHQgKi9cblx0Z2V0IG5hbWUoKSB7XG5cdFx0cmV0dXJuIHRoaXMuI25hbWU7XG5cdH1cblxuXHQvKipcblx0ICogQHR5cGUge0V4cHJlc3Npb25SZXNvbHZlcnxudWxsfVxuXHQgKi9cblx0Z2V0IHBhcmVudCgpIHtcblx0XHRyZXR1cm4gdGhpcy4jcGFyZW50O1xuXHR9XG5cblx0LyoqXG5cdCAqIFRoZSBjb250ZXh0IG9mIHRoaXMgcmVzb2x2ZXIgYXMgYW4gZXhwcmVzc2lvbiBzZWVzIGl0LiBJdCBpcyBub3QgdGhlIG9iamVjdCBwYXNzZWQgdG8gdGhlXG5cdCAqIGNvbnN0cnVjdG9yIGFuZCBpdCBhbnN3ZXJzIGZvciB0aGUgd2hvbGUgY2hhaW4uIE92ZXIgdGhlIGdsb2JhbCBvYmplY3QgaXQgaXMgdGhlIGdsb2JhbFxuXHQgKiBvYmplY3QgaXRzZWxmLlxuXHQgKlxuXHQgKiBAdHlwZSB7UmVjb3JkPHN0cmluZ3xzeW1ib2wsICo+fVxuXHQgKi9cblx0Z2V0IGNvbnRleHQoKSB7XG5cdFx0cmV0dXJuIHRoaXMuI2NvbnRleHQ7XG5cdH1cblxuXHQvKipcblx0ICogVGhlIGV4ZWN1dGVyIGluIHVzZSwgY2hvc2VuIG9uY2UgaW4gdGhlIGNvbnN0cnVjdG9yLlxuXHQgKlxuXHQgKiBAdHlwZSB7RXhlY3V0ZXJ9XG5cdCAqL1xuXHRnZXQgZXhlY3V0ZXIoKSB7XG5cdFx0cmV0dXJuIHRoaXMuI2V4ZWN1dGVyO1xuXHR9XG5cblx0LyoqXG5cdCAqIFRoZSBpbnRlcm5hbCBoYW5kbGUgYmVoaW5kIHRoZSBjb250ZXh0LCBwdWJsaWMgZm9yIGByZXNldENhY2hlYC5cblx0ICpcblx0ICogQHR5cGUge1Jlc29sdmVyQ29udGV4dEhhbmRsZX1cblx0ICovXG5cdGdldCBjb250ZXh0SGFuZGxlKCkge1xuXHRcdHJldHVybiB0aGlzLiNjb250ZXh0SGFuZGxlO1xuXHR9XG5cblx0LyoqXG5cdCAqIFRoZSBuYW1lcyBvZiBldmVyeSByZXNvbHZlciBmcm9tIHRoZSByb290IGRvd24gdG8gdGhpcyBvbmUsIGFzIGEgcGF0aCAtIGAvcm9vdC/igKYvdGhpc2AuIEl0XG5cdCAqIGRlc2NyaWJlcyB0aGUgc3RydWN0dXJlIGFuZCBkb2VzIG5vdCBjaGFuZ2UuXG5cdCAqXG5cdCAqIEB0eXBlIHtzdHJpbmd9XG5cdCAqL1xuXHRnZXQgY2hhaW4oKSB7XG5cdFx0Ly8gYSBsb29wLCBub3QgYSByZWN1cnNpb24gaW50byB0aGUgcGFyZW50OiBhIGRlZXAgY2hhaW4gb3ZlcmZsb3dlZCB0aGUgc3RhY2tcblx0XHRsZXQgcGF0aCA9IFwiXCI7XG5cdFx0bGV0IHJlc29sdmVyID0gdGhpcztcblx0XHR3aGlsZSAocmVzb2x2ZXIpIHtcblx0XHRcdHBhdGggPSBgLyR7cmVzb2x2ZXIubmFtZX0ke3BhdGh9YDtcblx0XHRcdHJlc29sdmVyID0gcmVzb2x2ZXIucGFyZW50O1xuXHRcdH1cblxuXHRcdHJldHVybiBwYXRoO1xuXHR9XG5cblx0LyoqXG5cdCAqIFRoZSBuYW1lcyBvZiB0aGUgcmVzb2x2ZXJzIGZyb20gdGhlIHJvb3QgZG93biB0byB0aGlzIG9uZSB0aGF0IHByb3ZpZGUgYSBjb250ZXh0LCBhcyBhIHBhdGhcblx0ICogbGlrZSBgY2hhaW5gLiBBIHJlc29sdmVyIGJ1aWx0IHdpdGhvdXQgYSBjb250ZXh0IGpvaW5zIGl0IHRoZSBtb21lbnQgYSB2YWx1ZSBpcyBzZXQgb24gaXQsIHNvXG5cdCAqIHRoaXMgZGVzY3JpYmVzIGEgc3RhdGUgYW5kIG5vdCB0aGUgc3RydWN0dXJlLiBXaGVyZSBub25lIHByb3ZpZGVzIG9uZSxcblx0ICogdGhlIGFuc3dlciBpcyB0aGUgZW1wdHkgc3RyaW5nLlxuXHQgKlxuXHQgKiBAdHlwZSB7c3RyaW5nfVxuXHQgKi9cblx0Z2V0IGVmZmVjdGl2ZUNoYWluKCkge1xuXHRcdC8vIGEgbG9vcCwgbm90IGEgcmVjdXJzaW9uIGludG8gdGhlIHBhcmVudDogYSBkZWVwIGNoYWluIG92ZXJmbG93ZWQgdGhlIHN0YWNrXG5cdFx0bGV0IHBhdGggPSBcIlwiO1xuXHRcdGxldCByZXNvbHZlciA9IHRoaXM7XG5cdFx0d2hpbGUgKHJlc29sdmVyKSB7XG5cdFx0XHRpZiAocmVzb2x2ZXIuY29udGV4dEhhbmRsZS5wcm92aWRlc0NvbnRleHQpIHBhdGggPSBgLyR7cmVzb2x2ZXIubmFtZX0ke3BhdGh9YDtcblx0XHRcdHJlc29sdmVyID0gcmVzb2x2ZXIucGFyZW50O1xuXHRcdH1cblxuXHRcdHJldHVybiBwYXRoO1xuXHR9XG5cblx0LyoqXG5cdCAqIFRoZSBjb250ZXh0cyBvZiBleGFjdGx5IHRoZSByZXNvbHZlcnMgYGVmZmVjdGl2ZUNoYWluYCBuYW1lcywgYXMgYW4gYXJyYXksIHRoaXMgcmVzb2x2ZXInc1xuXHQgKiBmaXJzdCBhbmQgdGhlIHJvb3QncyBsYXN0LiBBIHN0YXRlIGxpa2UgYGVmZmVjdGl2ZUNoYWluYC5cblx0ICpcblx0ICogQHR5cGUge0FycmF5PFJlY29yZDxzdHJpbmd8c3ltYm9sLCAqPj59XG5cdCAqL1xuXHRnZXQgY29udGV4dENoYWluKCkge1xuXHRcdGNvbnN0IHJlc3VsdCA9IFtdO1xuXHRcdGxldCByZXNvbHZlciA9IHRoaXM7XG5cdFx0d2hpbGUgKHJlc29sdmVyKSB7XG5cdFx0XHRpZiAocmVzb2x2ZXIuY29udGV4dEhhbmRsZS5wcm92aWRlc0NvbnRleHQpIHJlc3VsdC5wdXNoKHJlc29sdmVyLmNvbnRleHQpO1xuXG5cdFx0XHRyZXNvbHZlciA9IHJlc29sdmVyLnBhcmVudDtcblx0XHR9XG5cblx0XHRyZXR1cm4gcmVzdWx0O1xuXHR9XG5cblx0LyoqXG5cdCAqIFRoZSByZXNvbHZlciBhIGNhbGwgYWRkcmVzc2VzOiB0aGUgb25lIHRoZSBmaWx0ZXIgbmFtZXMsIG9yIHRoZSByZXNvbHZlciB0aGUgY2FsbCB3YXMgbWFkZSBvblxuXHQgKiB3aGVyZSBubyBmaWx0ZXIgaXMgZ2l2ZW4uXG5cdCAqXG5cdCAqIEEgZmlsdGVyIHNlbGVjdHMgZXhhY3RseSBvbmUgcmVzb2x2ZXIsIHRoZSBuZWFyZXN0IG9mIHRoYXQgbmFtZSBmcm9tIGhlcmUgdG93YXJkcyB0aGUgcm9vdCwgYW5kXG5cdCAqIGEgZmlsdGVyIG1hdGNoaW5nIG5vbmUgdGhyb3dzIC0gYSB3cm9uZyBuYW1lIGluIGFuIEFQSSBjYWxsIGlzIGEgbWlzdGFrZSBpbiB0aGUgY2FsbGluZyBjb2RlLFxuXHQgKiB1bmxpa2UgYSBzY29wZSBwcmVmaXggaW5zaWRlIGFuIGV4cHJlc3Npb24sIHdoaWNoIGFuc3dlcnMgdW5kZWZpbmVkLlxuXHQgKlxuXHQgKiBAcGFyYW0gez9zdHJpbmd9IGFTY29wZSB0aGUgZmlsdGVyIGFzIGB0b1Njb3BlYCByZWFkcyBpdFxuXHQgKiBAcmV0dXJucyB7RXhwcmVzc2lvblJlc29sdmVyfVxuXHQgKi9cblx0I2ZpbmRSZXNvbHZlcihhU2NvcGUpIHtcblx0XHRpZiAoIWFTY29wZSkgcmV0dXJuIHRoaXM7XG5cblx0XHRjb25zdCByZXNvbHZlciA9IHRoaXMuI3Jlc29sdmVyRm9yU2NvcGUoYVNjb3BlKTtcblx0XHRpZiAocmVzb2x2ZXIpIHJldHVybiByZXNvbHZlcjtcblxuXHRcdHRocm93IG5ldyBFcnJvcihgRmlsdGVyIFwiJHthU2NvcGV9XCIgbWF0Y2hlcyBubyByZXNvbHZlciBvZiB0aGUgY2hhaW4hYCk7XG5cdH1cblxuXHQvKipcblx0ICogVGhlIG5lYXJlc3QgcmVzb2x2ZXIgZnJvbSBoZXJlIHRvIHRoZSByb290IHRoYXQgY2FycmllcyB0aGUgc2NvcGUgbmFtZSwgb3IgbnVsbCB3aGVyZSBub25lXG5cdCAqIGNhcnJpZXMgaXQuIEEgZmlsdGVyIGFuZCBhIHNjb3BlIHByZWZpeCBhbnN3ZXIgYSBtaXNzIGRpZmZlcmVudGx5LCBzbyBlYWNoIGNhbGxlciBkb2VzIHRoYXRcblx0ICogZm9yIGl0c2VsZi5cblx0ICpcblx0ICogQHBhcmFtIHtzdHJpbmd9IGFTY29wZVxuXHQgKiBAcmV0dXJucyB7RXhwcmVzc2lvblJlc29sdmVyfG51bGx9XG5cdCAqL1xuXHQjcmVzb2x2ZXJGb3JTY29wZShhU2NvcGUpIHtcblx0XHQvLyBhIGxvb3AsIG5vdCBhIHJlY3Vyc2lvbiBpbnRvIHRoZSBwYXJlbnQ6IG9uZSBjYWxsIHBlciByZXNvbHZlciBjbGltYmVkIG92ZXJmbG93ZWQgdGhlXG5cdFx0Ly8gc3RhY2sgb24gYSBkZWVwIGNoYWluXG5cdFx0bGV0IHJlc29sdmVyID0gdGhpcztcblx0XHR3aGlsZSAocmVzb2x2ZXIpIHtcblx0XHRcdGlmIChyZXNvbHZlci4jbmFtZSA9PT0gYVNjb3BlKSByZXR1cm4gcmVzb2x2ZXI7XG5cdFx0XHRyZXNvbHZlciA9IHJlc29sdmVyLiNwYXJlbnQ7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cblxuXHQvKipcblx0ICogSGFuZHMgYSBzdGF0ZW1lbnQgdG8gdGhlIHJlc29sdmVyIGl0IGFkZHJlc3NlcyAtIHRoZSBvbmUgaXRzIHNjb3BlIHByZWZpeCBuYW1lcywgb3IgdGhpcyBvbmVcblx0ICogd2l0aG91dCBhIHByZWZpeCAtIGFuZCBhbnN3ZXJzIHdoYXQgdGhhdCByZXNvbHZlcidzIGV4ZWN1dGVyIGFuc3dlcnMsIGEgcHJvbWlzZSBpbmNsdWRlZC4gQW5cblx0ICogZW1wdHkgc3RhdGVtZW50IGFuZCBhIHByZWZpeCBubyByZXNvbHZlciBvZiB0aGUgY2hhaW4gY2FycmllcyBhbnN3ZXIgdW5kZWZpbmVkLCBhbmQgdGhlIGRlZmF1bHRcblx0ICogYXBwbGllcyB0byBpdCBsaWtlIHRvIGFueSBvdGhlciByZXN1bHQuXG5cdCAqXG5cdCAqIERlbGliZXJhdGVseSBub3QgYXN5bmM6IHRoZSBlbnRyeSBwb2ludCBhd2FpdHMgdGhlIGFuc3dlciBvbmNlLCBhbmQgYSBzeW5jaHJvbm91cyB0aHJvdyBvZiB0aGVcblx0ICogZXhlY3V0ZXIgbGFuZHMgaW4gaXRzIGB0cnlgIGFsbCB0aGUgc2FtZS4gQW4gZXJyb3IgaXMgbm90IGNhdWdodCBoZXJlLCBiZWNhdXNlIHRoZSB0d28gZW50cnlcblx0ICogcG9pbnRzIGFuc3dlciBpdCBkaWZmZXJlbnRseS5cblx0ICpcblx0ICogQHBhcmFtIHs/c3RyaW5nfSBhU3RhdGVtZW50IHRyaW1tZWQsIGFuZCBudWxsIHdoZXJlIGl0IGlzIGVtcHR5XG5cdCAqIEBwYXJhbSB7P3N0cmluZ30gYVNjb3BlIHRoZSBzY29wZSBwcmVmaXgsIG51bGwgd2hlcmUgdGhlcmUgaXMgbm9uZVxuXHQgKiBAcmV0dXJucyB7Kn1cblx0ICovXG5cdCNleGVjdXRlKGFTdGF0ZW1lbnQsIGFTY29wZSkge1xuXHRcdGNvbnN0IHJlc29sdmVyID0gYVNjb3BlID8gdGhpcy4jcmVzb2x2ZXJGb3JTY29wZShhU2NvcGUpIDogdGhpcztcblx0XHQvLyBhbiBlbXB0eSBzdGF0ZW1lbnQgYW5zd2VycyB1bmRlZmluZWQsIHRoZSBzYW1lIGFzIGByZXR1cm47YCBpbiBKYXZhU2NyaXB0XG5cdFx0aWYgKHJlc29sdmVyID09PSBudWxsIHx8IGFTdGF0ZW1lbnQgPT0gbnVsbCkgcmV0dXJuIHVuZGVmaW5lZDtcblxuXHRcdHJldHVybiByZXNvbHZlci4jZXhlY3V0ZXIuZXhlY3V0ZShhU3RhdGVtZW50LCByZXNvbHZlci4jY29udGV4dCk7XG5cdH1cblxuXHQvKipcblx0ICogVGhlIG5lYXJlc3QgcmVzb2x2ZXIgZnJvbSBoZXJlIHRvIHRoZSByb290IHRoYXQgY2FycmllcyB0aGUga2V5IGl0c2VsZiwgb3IgbnVsbCB3aGVyZSBub25lXG5cdCAqIGNhcnJpZXMgaXQuIFdoYXQgZGVjaWRlcyBpcyB3aGV0aGVyIGEgcmVzb2x2ZXIgcHJvdmlkZXMgdGhlIG5hbWUsIG5vdCB3aGF0IGl0IGhvbGRzLlxuXHQgKlxuXHQgKiBAcGFyYW0ge3N0cmluZ3xzeW1ib2x9IGtleVxuXHQgKiBAcmV0dXJucyB7RXhwcmVzc2lvblJlc29sdmVyfG51bGx9XG5cdCAqL1xuXHQjcmVzb2x2ZXJGb3JLZXkoa2V5KSB7XG5cdFx0bGV0IHJlc29sdmVyID0gdGhpcztcblx0XHR3aGlsZSAocmVzb2x2ZXIpIHtcblx0XHRcdGlmIChyZXNvbHZlci5jb250ZXh0SGFuZGxlLmhhc05hbWUoa2V5KSkgcmV0dXJuIHJlc29sdmVyO1xuXHRcdFx0cmVzb2x2ZXIgPSByZXNvbHZlci5wYXJlbnQ7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cblxuXHQvKipcblx0ICogUmVhZHMgYSB2YWx1ZSBhbG9uZyB0aGUgY2hhaW4sIGZyb20gdGhlIGFkZHJlc3NlZCByZXNvbHZlciB0b3dhcmRzIHRoZSByb290LiBXaXRob3V0IGEga2V5IC1cblx0ICogbnVsbCBvciB1bmRlZmluZWQgLSBpdCBhbnN3ZXJzIHRoZSB3aG9sZSBjb250ZXh0IG9mIHRoYXQgcmVzb2x2ZXIsIHdoaWNoIHN0aWxsIHNlZXMgdGhlIGNoYWluIG9uXG5cdCAqIGV2ZXJ5IGFjY2Vzcy5cblx0ICpcblx0ICogQHBhcmFtIHs/KHN0cmluZ3xudW1iZXJ8c3ltYm9sKX0gW2tleV0gYSBwcm9wZXJ0eSBrZXk7IGEgbnVtYmVyIGlzIGxvb2tlZCB1cCBhcyBpdHMgc3RyaW5nXG5cdCAqIEBwYXJhbSB7P3N0cmluZ30gW2ZpbHRlcl0gdGhlIHNjb3BlIG5hbWUgb2YgdGhlIHJlc29sdmVyIHRoZSBjYWxsIGFkZHJlc3Nlczsgd2l0aG91dCBvbmUsIHRoaXNcblx0ICogcmVzb2x2ZXJcblx0ICogQHJldHVybnMgeyp9IHRoZSB2YWx1ZSwgb3IgdGhlIHdob2xlIGNvbnRleHQgd2l0aG91dCBhIGtleVxuXHQgKiBAdGhyb3dzIHtUeXBlRXJyb3J9IHdoZXJlIHRoZSBrZXkgaXMgb2YgYSB0eXBlIG5vIHByb3BlcnR5IGtleSBoYXMsIG9yIHRoZSBmaWx0ZXIgbm8gc3RyaW5nXG5cdCAqIEB0aHJvd3Mge0Vycm9yfSB3aGVyZSB0aGUgZmlsdGVyIG1hdGNoZXMgbm8gcmVzb2x2ZXIgb2YgdGhlIGNoYWluXG5cdCAqL1xuXHRnZXREYXRhKGtleSwgZmlsdGVyKSB7XG5cdFx0Y29uc3QgcmVzb2x2ZXIgPSB0aGlzLiNmaW5kUmVzb2x2ZXIodG9TY29wZShmaWx0ZXIpKTtcblx0XHRpZiAoa2V5ID09IG51bGwpIHJldHVybiByZXNvbHZlci5jb250ZXh0O1xuXG5cdFx0cmV0dXJuIHJlc29sdmVyLmNvbnRleHRbdG9LZXkoa2V5KV07XG5cdH1cblxuXHQvKipcblx0ICogU2V0cyBhIHZhbHVlLCBpbiB0aGUgb2JqZWN0IHRoZSBjYWxsZXIgaGFuZGVkIG92ZXIuIFdpdGhvdXQgYSBmaWx0ZXIgdGhlIHZhbHVlIGlzIGNoYW5nZWQgd2hlcmVcblx0ICogdGhlIGtleSBsaXZlcywgY291bnRpbmcgZnJvbSBoZXJlIHRvd2FyZHMgdGhlIHJvb3QsIGFuZCBjcmVhdGVkIGhlcmUgd2hlcmUgbm8gcmVzb2x2ZXIgY2Fycmllc1xuXHQgKiBpdC4gV2l0aCBhIGZpbHRlciB0aGUgYWRkcmVzc2VkIHJlc29sdmVyIGlzIHRoZSB0YXJnZXQgb3V0cmlnaHQuXG5cdCAqXG5cdCAqIEBwYXJhbSB7c3RyaW5nfG51bWJlcnxzeW1ib2x9IGtleSBhIHByb3BlcnR5IGtleTsgYSBudW1iZXIgaXMgbG9va2VkIHVwIGFzIGl0cyBzdHJpbmdcblx0ICogQHBhcmFtIHsqfSB2YWx1ZVxuXHQgKiBAcGFyYW0gez9zdHJpbmd9IFtmaWx0ZXJdIHRoZSBzY29wZSBuYW1lIG9mIHRoZSByZXNvbHZlciB0aGUgY2FsbCBhZGRyZXNzZXNcblx0ICogQHRocm93cyB7VHlwZUVycm9yfSB3aGVyZSB0aGUga2V5IGlzIG1pc3Npbmcgb3Igb2YgYSB0eXBlIG5vIHByb3BlcnR5IGtleSBoYXMsIHRoZSBmaWx0ZXIgbm9cblx0ICogc3RyaW5nLCBvciB0aGUgb2JqZWN0IHJlZnVzZXMgdGhlIHdyaXRlXG5cdCAqIEB0aHJvd3Mge0Vycm9yfSB3aGVyZSB0aGUgZmlsdGVyIG1hdGNoZXMgbm8gcmVzb2x2ZXIgb2YgdGhlIGNoYWluXG5cdCAqL1xuXHR1cGRhdGVEYXRhKGtleSwgdmFsdWUsIGZpbHRlcikge1xuXHRcdGNvbnN0IHByb3BlcnR5ID0gdG9LZXkoa2V5KTtcblx0XHRjb25zdCBzY29wZSA9IHRvU2NvcGUoZmlsdGVyKTtcblx0XHRjb25zdCByZXNvbHZlciA9IHRoaXMuI2ZpbmRSZXNvbHZlcihzY29wZSk7XG5cblx0XHRjb25zdCB0YXJnZXQgPSBzY29wZSA/IHJlc29sdmVyIDogdGhpcy4jcmVzb2x2ZXJGb3JLZXkocHJvcGVydHkpIHx8IHRoaXM7XG5cdFx0dGFyZ2V0LmNvbnRleHRbcHJvcGVydHldID0gdmFsdWU7XG5cdH1cblxuXHQvKipcblx0ICogUmVtb3ZlcyB0aGUga2V5IGZyb20gb25lIHJlc29sdmVyIC0gdGhlIGFkZHJlc3NlZCBvbmUgd2l0aCBhIGZpbHRlciwgYW5kIHdpdGhvdXQgb25lIHRoZSBmaXJzdFxuXHQgKiByZXNvbHZlciBjYXJyeWluZyBpdCwgY291bnRpbmcgZnJvbSBoZXJlIHRvd2FyZHMgdGhlIHJvb3QuIFJlbW92aW5nIGl0IHVuY292ZXJzIHRoZSB2YWx1ZSBvZlxuXHQgKiB0aGUgbmV4dCByZXNvbHZlciB0aGF0IGNhcnJpZXMgdGhlIHNhbWUga2V5LlxuXHQgKlxuXHQgKiBAcGFyYW0ge3N0cmluZ3xudW1iZXJ8c3ltYm9sfSBrZXkgYSBwcm9wZXJ0eSBrZXk7IGEgbnVtYmVyIGlzIGxvb2tlZCB1cCBhcyBpdHMgc3RyaW5nXG5cdCAqIEBwYXJhbSB7P3N0cmluZ30gW2ZpbHRlcl0gdGhlIHNjb3BlIG5hbWUgb2YgdGhlIHJlc29sdmVyIHRoZSBjYWxsIGFkZHJlc3Nlc1xuXHQgKiBAdGhyb3dzIHtUeXBlRXJyb3J9IHdoZXJlIHRoZSBrZXkgaXMgbWlzc2luZyBvciBvZiBhIHR5cGUgbm8gcHJvcGVydHkga2V5IGhhcywgdGhlIGZpbHRlciBub1xuXHQgKiBzdHJpbmcsIG9yIHRoZSBvYmplY3QgcmVmdXNlcyB0aGUgZGVsZXRpb25cblx0ICogQHRocm93cyB7RXJyb3J9IHdoZXJlIHRoZSBmaWx0ZXIgbWF0Y2hlcyBubyByZXNvbHZlciBvZiB0aGUgY2hhaW5cblx0ICovXG5cdGRlbGV0ZURhdGEoa2V5LCBmaWx0ZXIpIHtcblx0XHRjb25zdCBwcm9wZXJ0eSA9IHRvS2V5KGtleSk7XG5cdFx0Y29uc3Qgc2NvcGUgPSB0b1Njb3BlKGZpbHRlcik7XG5cdFx0Y29uc3QgcmVzb2x2ZXIgPSB0aGlzLiNmaW5kUmVzb2x2ZXIoc2NvcGUpO1xuXG5cdFx0Y29uc3QgdGFyZ2V0ID0gc2NvcGUgPyByZXNvbHZlciA6IHRoaXMuI3Jlc29sdmVyRm9yS2V5KHByb3BlcnR5KTtcblx0XHRpZiAodGFyZ2V0KSBkZWxldGUgdGFyZ2V0LmNvbnRleHRbcHJvcGVydHldO1xuXHR9XG5cblx0LyoqXG5cdCAqIEEgc2hhbGxvdyBhc3NpZ25tZW50LCBrZXkgYnkga2V5LCBpbnRvIHRoZSBjb250ZXh0IG9mIHRoZSBhZGRyZXNzZWQgcmVzb2x2ZXIsIHJlcGxhY2luZyB3aGF0IGlzXG5cdCAqIHRoZXJlIGFuZCBhZGRpbmcgd2hhdCBpcyBub3QuIE5vIHNlYXJjaCBhbG9uZyB0aGUgY2hhaW46IGEgbWVyZ2VkIGtleSBzaGFkb3dzIHRoZSByZXNvbHZlcnNcblx0ICogYWJvdmUgZnJvbSBoZXJlIG9uLlxuXHQgKlxuXHQgKiBAcGFyYW0gez9vYmplY3R9IGNvbnRleHQgdGhlIGtleXMgdG8gYXNzaWduOyBudWxsIG9yIHVuZGVmaW5lZCBjaGFuZ2VzIG5vdGhpbmdcblx0ICogQHBhcmFtIHs/c3RyaW5nfSBbZmlsdGVyXSB0aGUgc2NvcGUgbmFtZSBvZiB0aGUgcmVzb2x2ZXIgdGhlIGNhbGwgYWRkcmVzc2VzXG5cdCAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gd2hlcmUgdGhlIGNvbnRleHQgaXMgYSBwcmltaXRpdmUsIHRoZSBmaWx0ZXIgbm8gc3RyaW5nLCBvciB0aGUgb2JqZWN0XG5cdCAqIHJlZnVzZXMgYSBrZXkgLSB0aGUga2V5cyBiZWZvcmUgaXQgYXJlIHdyaXR0ZW4gYnkgdGhlblxuXHQgKiBAdGhyb3dzIHtFcnJvcn0gd2hlcmUgdGhlIGZpbHRlciBtYXRjaGVzIG5vIHJlc29sdmVyIG9mIHRoZSBjaGFpblxuXHQgKi9cblx0bWVyZ2VDb250ZXh0KGNvbnRleHQsIGZpbHRlcikge1xuXHRcdGNvbnN0IHJlc29sdmVyID0gdGhpcy4jZmluZFJlc29sdmVyKHRvU2NvcGUoZmlsdGVyKSk7XG5cdFx0aWYgKGNvbnRleHQgPT0gbnVsbCkgcmV0dXJuO1xuXHRcdGlmICh0eXBlb2YgY29udGV4dCAhPT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgY29udGV4dCAhPT0gXCJmdW5jdGlvblwiKSB0aHJvdyBuZXcgVHlwZUVycm9yKGBtZXJnZUNvbnRleHQgdGFrZXMgYW4gb2JqZWN0LCBub3QgYSAke3R5cGVvZiBjb250ZXh0fSFgKTtcblxuXHRcdHJlc29sdmVyLmNvbnRleHRIYW5kbGUubWVyZ2VEYXRhKGNvbnRleHQpO1xuXHR9XG5cblx0LyoqXG5cdCAqIFJlc29sdmVzIG9uZSBleHByZXNzaW9uIHRvIGl0cyB2YWx1ZSwgb2Ygd2hhdGV2ZXIgdHlwZSB0aGUgc3RhdGVtZW50IGFuc3dlcnMuIFRha2VzIHRoZVxuXHQgKiBkZWxpbWl0ZWQgZm9ybSBgJHsuLi59YCwgYSBzY29wZSBwcmVmaXggaW5jbHVkZWQsIG9yIGEgYmFyZSBzdGF0ZW1lbnQ7IGFuIGlucHV0IHRoYXQgZG9lcyBub3Rcblx0ICogYm90aCBvcGVuIHdpdGggYCR7YCBhbmQgZW5kIHdpdGggYH1gIGlzIGEgYmFyZSBzdGF0ZW1lbnQuIEFuIGVycm9yIG9mIHRoZSBzdGF0ZW1lbnQgaXMgbG9nZ2VkXG5cdCAqIGFuZCBoYW5kZWQgb24sIGFuZCB0aGUgZGVmYXVsdCBuZXZlciBjb3ZlcnMgaXQuXG5cdCAqXG5cdCAqIEBhc3luY1xuXHQgKiBAcGFyYW0ge3N0cmluZ30gYUV4cHJlc3Npb25cblx0ICogQHBhcmFtIHsqfSBbYURlZmF1bHRdIHJlcGxhY2VzIGEgcmVzdWx0IG9mIG51bGwgb3IgdW5kZWZpbmVkIHdoZXJlIGl0IGlzIHBhc3NlZCwgdW5kZWZpbmVkXG5cdCAqIGluY2x1ZGVkXG5cdCAqIEByZXR1cm5zIHtQcm9taXNlPCo+fVxuXHQgKiBAdGhyb3dzIHtUeXBlRXJyb3J9IHdoZXJlIHRoZSBleHByZXNzaW9uIGlzIG5vIHN0cmluZ1xuXHQgKi9cblx0YXN5bmMgcmVzb2x2ZShhRXhwcmVzc2lvbiwgYURlZmF1bHQpIHtcblx0XHQvLyBhIG1pc3Rha2UgaW4gdGhlIGNhbGxpbmcgY29kZSwgbm90IGEgZmFpbGVkIHN0YXRlbWVudCAtIHNvIG5vIHdhcm5pbmcgYW5kIG5vIGRlZmF1bHRcblx0XHRpZiAodHlwZW9mIGFFeHByZXNzaW9uICE9PSBcInN0cmluZ1wiKSB0aHJvdyBuZXcgVHlwZUVycm9yKGByZXNvbHZlIHRha2VzIGFuIGV4cHJlc3Npb24gYXMgYSBzdHJpbmcsIG5vdCBhICR7dHlwZW9mIGFFeHByZXNzaW9ufSFgKTtcblx0XHRjb25zdCBkZWZhdWx0VmFsdWUgPSBhcmd1bWVudHMubGVuZ3RoID09IDIgPyB0b0RlZmF1bHRWYWx1ZShhRGVmYXVsdCkgOiBERUZBVUxUX05PVF9ERUZJTkVEO1xuXHRcdHRyeSB7XG5cdFx0XHQvLyB0aGUgZGVsaW1pdGVkIGZvcm0gb3IgYSBiYXJlIHN0YXRlbWVudCwgdG9sZCBhcGFydCBieSB0aGUgc2Nhbm5lclxuXHRcdFx0Y29uc3QgeyBzY29wZSwgc3RhdGVtZW50IH0gPSBwYXJzZUV4cHJlc3Npb24oYUV4cHJlc3Npb24pO1xuXHRcdFx0cmV0dXJuIHdpdGhEZWZhdWx0KGF3YWl0IHRoaXMuI2V4ZWN1dGUoc3RhdGVtZW50LCBzY29wZSksIGRlZmF1bHRWYWx1ZSk7XG5cdFx0fSBjYXRjaCAoZSkge1xuXHRcdFx0Ly8gdGhlIGVycm9yIGlzIGxvZ2dlZCBhbmQgaGFuZGVkIG9uLiByZXNvbHZlIGFuc3dlcnMgYSB2YWx1ZSBvciBzYXlzIHdoeSBpdCBjYW5ub3QsXG5cdFx0XHQvLyBhbmQgYSBkZWZhdWx0IHZhbHVlIGNvdmVycyBhIG1pc3NpbmcgcmVzdWx0LCBuZXZlciBhbiBlcnJvci5cblx0XHRcdHdhcm5GYWlsZWRTdGF0ZW1lbnQoYUV4cHJlc3Npb24sIGUpO1xuXHRcdFx0dGhyb3cgZTtcblx0XHR9XG5cdH1cblxuXHQvKipcblx0ICogUmVwbGFjZXMgZXZlcnkgZXhwcmVzc2lvbiBvZiBhIHRleHQgYnkgaXRzIHZhbHVlIGFuZCBhbnN3ZXJzIHRoZSB0ZXh0LiBBbiBleHByZXNzaW9uIHdob3NlXG5cdCAqIHN0YXRlbWVudCBmYWlscyBzdGFuZHMgYXMgd3JpdHRlbiwgYSB3YXJuaW5nIG5hbWVzIGl0LCBhbmQgdGhlIHJlc3Qgb2YgdGhlIHRleHQga2VlcHMgcmVuZGVyaW5nLlxuXHQgKlxuXHQgKiBAYXN5bmNcblx0ICogQHBhcmFtIHtzdHJpbmd9IGFUZXh0XG5cdCAqIEBwYXJhbSB7Kn0gW2FEZWZhdWx0XSByZXBsYWNlcyBhIHJlc3VsdCBvZiBudWxsIG9yIHVuZGVmaW5lZCwgcGVyIGV4cHJlc3Npb24sIHdoZXJlIGl0IGlzXG5cdCAqIHBhc3NlZFxuXHQgKiBAcmV0dXJucyB7UHJvbWlzZTxzdHJpbmc+fVxuXHQgKiBAdGhyb3dzIHtUeXBlRXJyb3J9IHdoZXJlIHRoZSB0ZXh0IGlzIG5vIHN0cmluZ1xuXHQgKi9cblx0YXN5bmMgcmVzb2x2ZVRleHQoYVRleHQsIGFEZWZhdWx0KSB7XG5cdFx0aWYgKHR5cGVvZiBhVGV4dCAhPT0gXCJzdHJpbmdcIikgdGhyb3cgbmV3IFR5cGVFcnJvcihgcmVzb2x2ZVRleHQgdGFrZXMgYSB0ZXh0IGFzIGEgc3RyaW5nLCBub3QgYSAke3R5cGVvZiBhVGV4dH0hYCk7XG5cdFx0Y29uc3QgZGVmYXVsdFZhbHVlID0gYXJndW1lbnRzLmxlbmd0aCA9PSAyID8gdG9EZWZhdWx0VmFsdWUoYURlZmF1bHQpIDogREVGQVVMVF9OT1RfREVGSU5FRDtcblxuXHRcdGNvbnN0IG9jY3VycmVuY2VzID0gc2NhbihhVGV4dCk7XG5cdFx0aWYgKCFvY2N1cnJlbmNlcykgcmV0dXJuIGFUZXh0O1xuXG5cdFx0bGV0IHRleHQgPSBcIlwiO1xuXHRcdGxldCBwb3NpdGlvbiA9IDA7XG5cdFx0Zm9yIChjb25zdCBvY2N1cnJlbmNlIG9mIG9jY3VycmVuY2VzKSB7XG5cdFx0XHQvLyBhbiBlc2NhcGluZyBiYWNrc2xhc2ggaXMgY29uc3VtZWQsIGV2ZXJ5dGhpbmcgZWxzZSBpbiBmcm9udCBvZiB0aGUgZXhwcmVzc2lvblxuXHRcdFx0Ly8gc3RhbmRzIGFzIHdyaXR0ZW5cblx0XHRcdHRleHQgKz0gYVRleHQuc3Vic3RyaW5nKHBvc2l0aW9uLCBvY2N1cnJlbmNlLmVzY2FwZWQgPyBvY2N1cnJlbmNlLnN0YXJ0IC0gMSA6IG9jY3VycmVuY2Uuc3RhcnQpO1xuXHRcdFx0cG9zaXRpb24gPSBvY2N1cnJlbmNlLmVuZDtcblxuXHRcdFx0aWYgKG9jY3VycmVuY2UuZXNjYXBlZCkge1xuXHRcdFx0XHR0ZXh0ICs9IGFUZXh0LnN1YnN0cmluZyhvY2N1cnJlbmNlLnN0YXJ0LCBvY2N1cnJlbmNlLmVuZCk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdHRleHQgKz0gd2l0aERlZmF1bHQoYXdhaXQgdGhpcy4jZXhlY3V0ZShvY2N1cnJlbmNlLnN0YXRlbWVudCwgb2NjdXJyZW5jZS5zY29wZSksIGRlZmF1bHRWYWx1ZSk7XG5cdFx0XHRcdH0gY2F0Y2ggKGUpIHtcblx0XHRcdFx0XHQvLyBhbiBleHByZXNzaW9uIHdob3NlIHN0YXRlbWVudCBmYWlsZWQgc3RhbmRzIGFzIHdyaXR0ZW4sIGFuZCB0aGUgZGVmYXVsdCB2YWx1ZVxuXHRcdFx0XHRcdC8vIGRvZXMgbm90IGNvdmVyIGl0LiBUaGUgcmVzdCBvZiB0aGUgdGV4dCBrZWVwcyByZW5kZXJpbmcuXG5cdFx0XHRcdFx0d2FybkZhaWxlZFN0YXRlbWVudChvY2N1cnJlbmNlLnN0YXRlbWVudCwgZSk7XG5cdFx0XHRcdFx0dGV4dCArPSBhVGV4dC5zdWJzdHJpbmcob2NjdXJyZW5jZS5zdGFydCwgb2NjdXJyZW5jZS5lbmQpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRleHQgKyBhVGV4dC5zdWJzdHJpbmcocG9zaXRpb24pO1xuXHR9XG5cblx0LyoqXG5cdCAqIFJlc29sdmVzIG9uZSBleHByZXNzaW9uIGFnYWluc3QgYW4gYWQtaG9jIGNvbnRleHQsIHRocm91Z2ggYSByZXNvbHZlciBvZiBpdHMgb3duLCBhcyB0aGUgaW5zdGFuY2Vcblx0ICogYHJlc29sdmVgIGRvZXMuXG5cdCAqXG5cdCAqIEBvdmVybG9hZFxuXHQgKiBAcGFyYW0ge3N0cmluZ30gYUV4cHJlc3Npb25cblx0ICogQHBhcmFtIHs/b2JqZWN0fSBbYUNvbnRleHRdXG5cdCAqIEBwYXJhbSB7Kn0gW2FEZWZhdWx0XSByZXBsYWNlcyBhIHJlc3VsdCBvZiBudWxsIG9yIHVuZGVmaW5lZCB3aGVyZSBpdCBpcyBwYXNzZWRcblx0ICogQHBhcmFtIHs/bnVtYmVyfSBbYVRpbWVvdXRdIGRlbGF5cyB0aGUgc3RhcnQgYnkgdGhhdCBtYW55IG1pbGxpc2Vjb25kczsgbm8gZGVhZGxpbmVcblx0ICogQHJldHVybnMge1Byb21pc2U8Kj59XG5cdCAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gd2hlcmUgdGhlIGV4cHJlc3Npb24gaXMgbm8gc3RyaW5nLCBvciB0aGUgY29udGV4dCBpcyBhIHByaW1pdGl2ZVxuXHQgKi9cblx0LyoqXG5cdCAqIFJlc29sdmVzIG9uZSBleHByZXNzaW9uIGFnYWluc3QgYW4gYWQtaG9jIGNvbnRleHQsIGFzIHRoZSBwb3NpdGlvbmFsIGZvcm0gZG9lcywgd2l0aCB0aGVcblx0ICogYXJndW1lbnRzIGluIG9uZSBjb25maWd1cmF0aW9uIG9iamVjdC4gQSBkZWZhdWx0IGNvdW50cyBhcyBwYXNzZWQgd2hlcmUgdGhlIGtleSBgZGVmYXVsdFZhbHVlYFxuXHQgKiBpcyBwcmVzZW50LCB3aGF0ZXZlciBpdCBob2xkcy5cblx0ICpcblx0ICogQG92ZXJsb2FkXG5cdCAqIEBwYXJhbSB7eyBleHByZXNzaW9uOiBzdHJpbmcsIGNvbnRleHQ/OiA/b2JqZWN0LCBkZWZhdWx0VmFsdWU/OiAqLCB0aW1lb3V0PzogP251bWJlciB9fSBhQ29uZmlndXJhdGlvblxuXHQgKiBAcmV0dXJucyB7UHJvbWlzZTwqPn1cblx0ICogQHRocm93cyB7VHlwZUVycm9yfSB3aGVyZSB0aGUgY29uZmlndXJhdGlvbiBjYXJyaWVzIG5vIHN0cmluZyB1bmRlciBgZXhwcmVzc2lvbmAsIG9yIHRoZVxuXHQgKiBjb250ZXh0IGlzIGEgcHJpbWl0aXZlXG5cdCAqL1xuXHQvKipcblx0ICogVGFrZXMgdGhlIGFyZ3VtZW50cyBwb3NpdGlvbmFsbHksIG9yIG9uZSBjb25maWd1cmF0aW9uIG9iamVjdFxuXHQgKiBgeyBleHByZXNzaW9uLCBjb250ZXh0LCBkZWZhdWx0VmFsdWUsIHRpbWVvdXQgfWAsIGJlaGluZCB3aGljaCBldmVyeSBhcmd1bWVudCBpcyBpZ25vcmVkLiBBIGZpcnN0XG5cdCAqIGFyZ3VtZW50IHRoYXQgaXMgbmVpdGhlciBhIHN0cmluZyBub3IgYW4gb2JqZWN0LCBhbmQgYSBjb25maWd1cmF0aW9uIHdpdGhvdXQgYSBzdHJpbmcgdW5kZXJcblx0ICogYGV4cHJlc3Npb25gLCByZWplY3Qgd2l0aCBhIGBUeXBlRXJyb3JgLlxuXHQgKlxuXHQgKiBAc3RhdGljXG5cdCAqIEBhc3luY1xuXHQgKiBAcGFyYW0ge3N0cmluZ3x7IGV4cHJlc3Npb246IHN0cmluZywgY29udGV4dD86ID9vYmplY3QsIGRlZmF1bHRWYWx1ZT86ICosIHRpbWVvdXQ/OiA/bnVtYmVyIH19IGFFeHByZXNzaW9uXG5cdCAqIEBwYXJhbSB7P29iamVjdH0gW2FDb250ZXh0XVxuXHQgKiBAcGFyYW0geyp9IFthRGVmYXVsdF1cblx0ICogQHBhcmFtIHs/bnVtYmVyfSBbYVRpbWVvdXRdXG5cdCAqIEByZXR1cm5zIHtQcm9taXNlPCo+fVxuXHQgKi9cblx0c3RhdGljIGFzeW5jIHJlc29sdmUoYUV4cHJlc3Npb24sIGFDb250ZXh0LCBhRGVmYXVsdCwgYVRpbWVvdXQpIHtcblx0XHRpZiAoaXNDb25maWd1cmF0aW9uKGFyZ3VtZW50c1swXSkpIHtcblx0XHRcdGNvbnN0IHsgZXhwcmVzc2lvbiwgY29udGV4dCwgdGltZW91dCB9ID0gYXJndW1lbnRzWzBdO1xuXHRcdFx0aWYgKHR5cGVvZiBleHByZXNzaW9uICE9PSBcInN0cmluZ1wiKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRXhwcmVzc2lvblJlc29sdmVyLnJlc29sdmUgdGFrZXMgYSBjb25maWd1cmF0aW9uIGNhcnJ5aW5nIHRoZSBleHByZXNzaW9uIGFzIGEgc3RyaW5nIHVuZGVyIHRoZSBrZXkgZXhwcmVzc2lvbiFcIik7XG5cdFx0XHRyZXR1cm4gRXhwcmVzc2lvblJlc29sdmVyLnJlc29sdmUoZXhwcmVzc2lvbiwgY29udGV4dCwgZGVmYXVsdE9mKGFyZ3VtZW50c1swXSksIHRpbWVvdXQpO1xuXHRcdH1cblx0XHRpZiAodHlwZW9mIGFFeHByZXNzaW9uICE9PSBcInN0cmluZ1wiKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRXhwcmVzc2lvblJlc29sdmVyLnJlc29sdmUgdGFrZXMgYSBzdHJpbmcgb3IgYSBjb25maWd1cmF0aW9uIG9iamVjdCFcIik7XG5cblx0XHRjb25zdCByZXNvbHZlciA9IG5ldyBFeHByZXNzaW9uUmVzb2x2ZXIoeyBjb250ZXh0OiBhQ29udGV4dCB9KTtcblx0XHRjb25zdCBkZWZhdWx0VmFsdWUgPSBhcmd1bWVudHMubGVuZ3RoID4gMiA/IHRvRGVmYXVsdFZhbHVlKGFEZWZhdWx0KSA6IERFRkFVTFRfTk9UX0RFRklORUQ7XG5cdFx0aWYgKHR5cGVvZiBhVGltZW91dCA9PT0gXCJudW1iZXJcIiAmJiBhVGltZW91dCA+IDApXG5cdFx0XHRyZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcblx0XHRcdFx0c2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHRcdFx0cmVzb2x2ZShyZXNvbHZlci5yZXNvbHZlKGFFeHByZXNzaW9uLCBkZWZhdWx0VmFsdWUpKTtcblx0XHRcdFx0fSwgYVRpbWVvdXQpO1xuXHRcdFx0fSk7XG5cblx0XHRyZXR1cm4gcmVzb2x2ZXIucmVzb2x2ZShhRXhwcmVzc2lvbiwgZGVmYXVsdFZhbHVlKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBSZXBsYWNlcyBldmVyeSBleHByZXNzaW9uIG9mIGEgdGV4dCBhZ2FpbnN0IGFuIGFkLWhvYyBjb250ZXh0LCB0aHJvdWdoIGEgcmVzb2x2ZXIgb2YgaXRzIG93biwgYXNcblx0ICogdGhlIGluc3RhbmNlIGByZXNvbHZlVGV4dGAgZG9lcy5cblx0ICpcblx0ICogQG92ZXJsb2FkXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBhVGV4dFxuXHQgKiBAcGFyYW0gez9vYmplY3R9IFthQ29udGV4dF1cblx0ICogQHBhcmFtIHsqfSBbYURlZmF1bHRdIHJlcGxhY2VzIGEgcmVzdWx0IG9mIG51bGwgb3IgdW5kZWZpbmVkLCBwZXIgZXhwcmVzc2lvbiwgd2hlcmUgaXQgaXNcblx0ICogcGFzc2VkXG5cdCAqIEBwYXJhbSB7P251bWJlcn0gW2FUaW1lb3V0XSBkZWxheXMgdGhlIHN0YXJ0IGJ5IHRoYXQgbWFueSBtaWxsaXNlY29uZHM7IG5vIGRlYWRsaW5lXG5cdCAqIEByZXR1cm5zIHtQcm9taXNlPHN0cmluZz59XG5cdCAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gd2hlcmUgdGhlIHRleHQgaXMgbm8gc3RyaW5nLCBvciB0aGUgY29udGV4dCBpcyBhIHByaW1pdGl2ZVxuXHQgKi9cblx0LyoqXG5cdCAqIFJlcGxhY2VzIGV2ZXJ5IGV4cHJlc3Npb24gb2YgYSB0ZXh0IGFnYWluc3QgYW4gYWQtaG9jIGNvbnRleHQsIGFzIHRoZSBwb3NpdGlvbmFsIGZvcm0gZG9lcyxcblx0ICogd2l0aCB0aGUgYXJndW1lbnRzIGluIG9uZSBjb25maWd1cmF0aW9uIG9iamVjdC4gQSBkZWZhdWx0IGNvdW50cyBhcyBwYXNzZWQgd2hlcmUgdGhlIGtleVxuXHQgKiBgZGVmYXVsdFZhbHVlYCBpcyBwcmVzZW50LCB3aGF0ZXZlciBpdCBob2xkcy5cblx0ICpcblx0ICogQG92ZXJsb2FkXG5cdCAqIEBwYXJhbSB7eyB0ZXh0OiBzdHJpbmcsIGNvbnRleHQ/OiA/b2JqZWN0LCBkZWZhdWx0VmFsdWU/OiAqLCB0aW1lb3V0PzogP251bWJlciB9fSBhQ29uZmlndXJhdGlvblxuXHQgKiBAcmV0dXJucyB7UHJvbWlzZTxzdHJpbmc+fVxuXHQgKiBAdGhyb3dzIHtUeXBlRXJyb3J9IHdoZXJlIHRoZSBjb25maWd1cmF0aW9uIGNhcnJpZXMgbm8gc3RyaW5nIHVuZGVyIGB0ZXh0YCwgb3IgdGhlIGNvbnRleHQgaXNcblx0ICogYSBwcmltaXRpdmVcblx0ICovXG5cdC8qKlxuXHQgKiBUYWtlcyB0aGUgYXJndW1lbnRzIHBvc2l0aW9uYWxseSwgb3Igb25lIGNvbmZpZ3VyYXRpb24gb2JqZWN0XG5cdCAqIGB7IHRleHQsIGNvbnRleHQsIGRlZmF1bHRWYWx1ZSwgdGltZW91dCB9YCwgYmVoaW5kIHdoaWNoIGV2ZXJ5IGFyZ3VtZW50IGlzIGlnbm9yZWQuIEEgZmlyc3Rcblx0ICogYXJndW1lbnQgdGhhdCBpcyBuZWl0aGVyIGEgc3RyaW5nIG5vciBhbiBvYmplY3QsIGFuZCBhIGNvbmZpZ3VyYXRpb24gd2l0aG91dCBhIHN0cmluZyB1bmRlclxuXHQgKiBgdGV4dGAsIHJlamVjdCB3aXRoIGEgYFR5cGVFcnJvcmAuXG5cdCAqXG5cdCAqIEBzdGF0aWNcblx0ICogQGFzeW5jXG5cdCAqIEBwYXJhbSB7c3RyaW5nfHsgdGV4dDogc3RyaW5nLCBjb250ZXh0PzogP29iamVjdCwgZGVmYXVsdFZhbHVlPzogKiwgdGltZW91dD86ID9udW1iZXIgfX0gYVRleHRcblx0ICogQHBhcmFtIHs/b2JqZWN0fSBbYUNvbnRleHRdXG5cdCAqIEBwYXJhbSB7Kn0gW2FEZWZhdWx0XVxuXHQgKiBAcGFyYW0gez9udW1iZXJ9IFthVGltZW91dF1cblx0ICogQHJldHVybnMge1Byb21pc2U8c3RyaW5nPn1cblx0ICovXG5cdHN0YXRpYyBhc3luYyByZXNvbHZlVGV4dChhVGV4dCwgYUNvbnRleHQsIGFEZWZhdWx0LCBhVGltZW91dCkge1x0XHRcblx0XHRpZiAoaXNDb25maWd1cmF0aW9uKGFyZ3VtZW50c1swXSkpIHtcblx0XHRcdGNvbnN0IHsgdGV4dCwgY29udGV4dCwgdGltZW91dCB9ID0gYXJndW1lbnRzWzBdO1xuXHRcdFx0aWYgKHR5cGVvZiB0ZXh0ICE9PSBcInN0cmluZ1wiKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRXhwcmVzc2lvblJlc29sdmVyLnJlc29sdmVUZXh0IHRha2VzIGEgY29uZmlndXJhdGlvbiBjYXJyeWluZyB0aGUgdGV4dCBhcyBhIHN0cmluZyB1bmRlciB0aGUga2V5IHRleHQhXCIpO1xuXHRcdFx0cmV0dXJuIEV4cHJlc3Npb25SZXNvbHZlci5yZXNvbHZlVGV4dCh0ZXh0LCBjb250ZXh0LCBkZWZhdWx0T2YoYXJndW1lbnRzWzBdKSwgdGltZW91dCk7XG5cdFx0fVxuXHRcdGlmICh0eXBlb2YgYVRleHQgIT09IFwic3RyaW5nXCIpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJFeHByZXNzaW9uUmVzb2x2ZXIucmVzb2x2ZVRleHQgdGFrZXMgYSBzdHJpbmcgb3IgYSBjb25maWd1cmF0aW9uIG9iamVjdCFcIik7XG5cblx0XHRjb25zdCByZXNvbHZlciA9IG5ldyBFeHByZXNzaW9uUmVzb2x2ZXIoeyBjb250ZXh0OiBhQ29udGV4dCB9KTtcblx0XHRjb25zdCBkZWZhdWx0VmFsdWUgPSBhcmd1bWVudHMubGVuZ3RoID4gMiA/IHRvRGVmYXVsdFZhbHVlKGFEZWZhdWx0KSA6IERFRkFVTFRfTk9UX0RFRklORUQ7XG5cdFx0aWYgKHR5cGVvZiBhVGltZW91dCA9PT0gXCJudW1iZXJcIiAmJiBhVGltZW91dCA+IDApXG5cdFx0XHRyZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcblx0XHRcdFx0c2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHRcdFx0cmVzb2x2ZShyZXNvbHZlci5yZXNvbHZlVGV4dChhVGV4dCwgZGVmYXVsdFZhbHVlKSk7XG5cdFx0XHRcdH0sIGFUaW1lb3V0KTtcblx0XHRcdH0pO1xuXG5cdFx0cmV0dXJuIHJlc29sdmVyLnJlc29sdmVUZXh0KGFUZXh0LCBkZWZhdWx0VmFsdWUpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEJ1aWxkcyBhIHJlc29sdmVyIG92ZXIgYSBmaWx0ZXJlZCBjb3B5IG9mIHRoZSBjb250ZXh0LlxuXHQgKlxuXHQgKiBUaGUgZmlsdGVyIGlzIGFwcGxpZWQgdG8gdGhlIGNvbnRleHQgb25seSwgbmV2ZXIgdG8gdGhlIGdsb2JhbHMsIHNvIHRoaXMgaXMgYSB3YXkgdG8gaGFuZFxuXHQgKiBvdmVyIGEgY2xlYW5lZCBjb250ZXh0IGFuZCBub3QgYSBzYW5kYm94LlxuXHQgKlxuXHQgKiBgb3B0aW9uYCBjYXJyaWVzIHRoZSBmaWx0ZXIncyBvd24gYGRlZXBgIHRvZ2V0aGVyIHdpdGggdGhlIGNvbnN0cnVjdG9yIG9wdGlvbnMgYG5hbWVgLFxuXHQgKiBgcGFyZW50YCBhbmQgYGV4ZWN1dGVyYCwgd2hpY2ggYXJlIGhhbmRlZCBvbiBhcyB0aGV5IGFyZS5cblx0ICpcblx0ICogQHN0YXRpY1xuXHQgKiBAcGFyYW0ge29iamVjdH0gYXJnIHRoZSBmaWx0ZXIgYXJndW1lbnRzLCBwbHVzIHRoZSB3aG9sZSBjb25zdHJ1Y3RvciBvcHRpb24gc2V0XG5cdCAqIEBwYXJhbSB7b2JqZWN0fSBhcmcuY29udGV4dCB0aGUgb2JqZWN0IHRvIGNvcHk7IGl0IGlzIGxlZnQgdW50b3VjaGVkXG5cdCAqIEBwYXJhbSB7KG5hbWU6IHN0cmluZywgdmFsdWU6ICosIGhvbGRlcjogb2JqZWN0KSA9PiBib29sZWFufSBhcmcucHJvcEZpbHRlciBjYWxsZWQgd2l0aCBuYW1lLFxuXHQgKiB2YWx1ZSBhbmQgdGhlIG9iamVjdCBob2xkaW5nIGl0IGZvciBldmVyeSBlbnVtZXJhYmxlIHByb3BlcnR5LCBpbmhlcml0ZWQgb25lcyBpbmNsdWRlZDsgYVxuXHQgKiBwcm9wZXJ0eSBpdCBhbnN3ZXJzIGZhbHNlIGZvciBpcyBsZWZ0IG91dCBvZiB0aGUgY29weVxuXHQgKiBAcGFyYW0ge29iamVjdH0gW2FyZy5vcHRpb249eyBkZWVwOiB0cnVlLCBuYW1lOiBudWxsLCBwYXJlbnQ6IG51bGwsIGV4ZWN1dGVyOiBudWxsIH1dXG5cdCAqIEBwYXJhbSB7Ym9vbGVhbn0gW2FyZy5vcHRpb24uZGVlcD10cnVlXSBmaWx0ZXJzIHN1YiBvYmplY3RzIGFzIHdlbGxcblx0ICogQHBhcmFtIHs/c3RyaW5nfSBbYXJnLm9wdGlvbi5uYW1lPW51bGxdXG5cdCAqIEBwYXJhbSB7P0V4cHJlc3Npb25SZXNvbHZlcn0gW2FyZy5vcHRpb24ucGFyZW50PW51bGxdXG5cdCAqIEBwYXJhbSB7PyhzdHJpbmd8RXhlY3V0ZXIpfSBbYXJnLm9wdGlvbi5leGVjdXRlcj1udWxsXVxuXHQgKiBAcmV0dXJucyB7RXhwcmVzc2lvblJlc29sdmVyfVxuXHQgKiBAdGhyb3dzIHtUeXBlRXJyb3J9IHdoZXJlIGEgY29uc3RydWN0b3Igb3B0aW9uIGlzIG9mIHRoZSB3cm9uZyBraW5kLCBhcyB0aGUgY29uc3RydWN0b3IgdGhyb3dzXG5cdCAqL1xuXHRzdGF0aWMgYnVpbGRGaWx0ZXJlZCh7IGNvbnRleHQsIHByb3BGaWx0ZXIsIG9wdGlvbiA9IHsgZGVlcDogdHJ1ZSwgbmFtZTogbnVsbCwgcGFyZW50OiBudWxsLCBleGVjdXRlcjogbnVsbCB9IH0pIHtcblx0XHRjb25zdCB7IGRlZXAgPSB0cnVlLCBuYW1lLCBwYXJlbnQsIGV4ZWN1dGVyIH0gPSBvcHRpb247XG5cdFx0Y29udGV4dCA9IE9iamVjdFV0aWxzLmZpbHRlcihjb250ZXh0LCBwcm9wRmlsdGVyLCB7ZGVlcH0pO1xuXHRcdHJldHVybiBuZXcgRXhwcmVzc2lvblJlc29sdmVyKHsgY29udGV4dCwgbmFtZSwgcGFyZW50LCBleGVjdXRlciB9KTtcblx0fVxuXG5cdC8qKlxuXHQgKiBUaGUgZm9ybWVyIG5hbWUgb2YgYGJ1aWxkRmlsdGVyZWRgLiBJdCBwcm9taXNlZCBhIHNlY3VyaXR5IHRoZSBtZXRob2QgZG9lcyBub3QgZ2l2ZS5cblx0ICpcblx0ICogQGRlcHJlY2F0ZWQgdXNlIGBidWlsZEZpbHRlcmVkYFxuXHQgKiBAc3RhdGljXG5cdCAqIEBwYXJhbSB7UGFyYW1ldGVyczx0eXBlb2YgRXhwcmVzc2lvblJlc29sdmVyLmJ1aWxkRmlsdGVyZWQ+WzBdfSBhcmcgdGhlIGFyZ3VtZW50cyBvZlxuXHQgKiBgYnVpbGRGaWx0ZXJlZGBcblx0ICogQHJldHVybnMge0V4cHJlc3Npb25SZXNvbHZlcn1cblx0ICovXG5cdHN0YXRpYyBidWlsZFNlY3VyZShhcmcpIHtcblx0XHRyZXR1cm4gRXhwcmVzc2lvblJlc29sdmVyLmJ1aWxkRmlsdGVyZWQoYXJnKTtcblx0fVxufVxuXG4iLCIvKipcbiAqIEZpbmRzIHRoZSBleHByZXNzaW9ucyBvZiBhIHRleHQgYW5kIHRha2VzIGEgc2luZ2xlIGV4cHJlc3Npb24gYXBhcnQuIEl0IHJlYWRzIHdoZXJlIGFuIGV4cHJlc3Npb25cbiAqIGJlZ2lucyBhbmQgZW5kcywgd2hldGhlciBpdCBpcyBlc2NhcGVkLCBhbmQgd2hpY2ggc2NvcGUgcHJlZml4IGl0IGNhcnJpZXM7IGV2YWx1YXRpbmcgYSBzdGF0ZW1lbnRcbiAqIGFuZCBhZGRyZXNzaW5nIGEgc2NvcGUgaXMgRXhwcmVzc2lvblJlc29sdmVyJ3MuXG4gKlxuICogSW50ZXJuYWwgdG8gdGhlIHBhY2thZ2U6IGluZGV4LmpzIGRvZXMgbm90IGV4cG9ydCBpdC5cbiAqL1xuXG5pbXBvcnQgeyBXSElURVNQQUNFLCBpc05hbWVDaGFyYWN0ZXIsIHRyaW1Ub051bGwgfSBmcm9tIFwiLi9VdGlscy5qc1wiO1xuXG5jb25zdCBFWFBSRVNTSU9OX1NUQVJUID0gXCIke1wiO1xuXG4vLyB0aGUgc2Nhbm5lciBzdGF0ZXMgLSBldmVyeXRoaW5nIHRoYXQgaXMgbm90IGNvZGUgaGlkZXMgdGhlIGJyYWNlcyBpbnNpZGUgaXRcbmNvbnN0IENPREUgPSAwO1xuY29uc3QgU0lOR0xFX1FVT1RFRCA9IDE7XG5jb25zdCBET1VCTEVfUVVPVEVEID0gMjtcbmNvbnN0IFRFTVBMQVRFID0gMztcbmNvbnN0IFJFR0VYID0gNDtcbmNvbnN0IFJFR0VYX0NMQVNTID0gNTtcbmNvbnN0IEJMT0NLX0NPTU1FTlQgPSA2O1xuY29uc3QgTElORV9DT01NRU5UID0gNztcblxuLy8gYSBcIi9cIiBjb250aW51ZXMgYW4gZXhwcmVzc2lvbiBpbnN0ZWFkIG9mIG9wZW5pbmcgYSByZWd1bGFyIGV4cHJlc3Npb24gd2hlbiBpdCBmb2xsb3dzIG9uZSBvZlxuLy8gdGhlc2UgLSB0aGUgY2xhc3NpYyBkaXZpc2lvbi1vci1yZWdleCBxdWVzdGlvbiwgZGVjaWRlZCBvbiB0aGUgbGFzdCBjaGFyYWN0ZXIgdGhhdCBpcyBuZWl0aGVyXG4vLyB3aGl0ZXNwYWNlIG5vciBwYXJ0IG9mIGEgY29tbWVudFxuY29uc3QgQkVGT1JFX0RJVklTSU9OID0gL1thLXpBLVowLTlfJClcXF1dLztcblxuLy8gdGhlIGNoYXJhY3RlcnMgdGhlIHNjYW5uZXIgZGVjaWRlcyBvbiwgY29tcGFyZWQgYXMgY2hhciBjb2RlcyByYXRoZXIgdGhhbiBhcyBvbmUtY2hhcmFjdGVyIHN0cmluZ3NcbmNvbnN0IEJBQ0tTTEFTSCA9IDB4NWM7XG5jb25zdCBET0xMQVIgPSAweDI0O1xuY29uc3QgT1BFTl9CUkFDRSA9IDB4N2I7XG5jb25zdCBDTE9TRV9CUkFDRSA9IDB4N2Q7XG5jb25zdCBTSU5HTEVfUVVPVEUgPSAweDI3O1xuY29uc3QgRE9VQkxFX1FVT1RFID0gMHgyMjtcbmNvbnN0IEJBQ0tUSUNLID0gMHg2MDtcbmNvbnN0IFNMQVNIID0gMHgyZjtcbmNvbnN0IFNUQVIgPSAweDJhO1xuY29uc3QgTElORV9GRUVEID0gMHgwYTtcbmNvbnN0IENBUlJJQUdFX1JFVFVSTiA9IDB4MGQ7XG5jb25zdCBMSU5FX1NFUEFSQVRPUiA9IDB4MjAyODtcbmNvbnN0IFBBUkFHUkFQSF9TRVBBUkFUT1IgPSAweDIwMjk7XG5jb25zdCBPUEVOX0JSQUNLRVQgPSAweDViO1xuY29uc3QgQ0xPU0VfQlJBQ0tFVCA9IDB4NWQ7XG5jb25zdCBDT0xPTiA9IDB4M2E7XG5cbmNvbnN0IFNDT1BFX1NFUEFSQVRPUiA9IFwiOjpcIjtcblxuLyoqXG4gKiBXaGV0aGVyIHRoZSBcIi9cIiBhdCBhSW5kZXggb3BlbnMgYSByZWd1bGFyIGV4cHJlc3Npb24gbGl0ZXJhbCwgZGVjaWRlZCBvbiB0aGUgY2hhcmFjdGVyIGJlZm9yZSBpdFxuICogdGhhdCBpcyBuZWl0aGVyIHdoaXRlc3BhY2Ugbm9yIHBhcnQgb2YgYSBjb21tZW50LlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBhVGV4dFxuICogQHBhcmFtIHtudW1iZXJ9IGFJbmRleFxuICogQHBhcmFtIHs/QXJyYXk8bnVtYmVyPn0gdGhlQ29tbWVudHMgdGhlIGNvbW1lbnRzIHJlYWQgc28gZmFyIGFzIGZsYXQgc3RhcnQgYW5kIGVuZCBpbmRleCBwYWlycywgaW5cbiAqIHRoZSBvcmRlciB0aGV5IHN0YW5kOyBudWxsIHdoZXJlIHRoZSBleHByZXNzaW9uIGhhcyBub25lXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuY29uc3Qgc2xhc2hPcGVuc1JlZ2V4ID0gKGFUZXh0LCBhSW5kZXgsIHRoZUNvbW1lbnRzKSA9PiB7XG5cdGxldCBpbmRleCA9IGFJbmRleCAtIDE7XG5cdGxldCBjb21tZW50ID0gdGhlQ29tbWVudHMgPyB0aGVDb21tZW50cy5sZW5ndGggLSAxIDogLTE7XG5cdHdoaWxlIChpbmRleCA+PSAwKSB7XG5cdFx0d2hpbGUgKGluZGV4ID49IDAgJiYgV0hJVEVTUEFDRS50ZXN0KGFUZXh0W2luZGV4XSkpIGluZGV4LS07XG5cdFx0Ly8gYSBsaW5lIGNvbW1lbnQgbWF5IGVuZCBpbiB3aGl0ZXNwYWNlLCBzbyB0aGUgd2FsayBjYW4gbGFuZCBpbnNpZGUgaXQgcmF0aGVyIHRoYW4gb24gaXRzIGVuZFxuXHRcdGlmIChjb21tZW50IDwgMCB8fCBpbmRleCA8IHRoZUNvbW1lbnRzW2NvbW1lbnQgLSAxXSB8fCBpbmRleCA+IHRoZUNvbW1lbnRzW2NvbW1lbnRdKSBicmVhaztcblxuXHRcdGluZGV4ID0gdGhlQ29tbWVudHNbY29tbWVudCAtIDFdIC0gMTtcblx0XHRjb21tZW50IC09IDI7XG5cdH1cblxuXHRyZXR1cm4gaW5kZXggPCAwIHx8ICFCRUZPUkVfRElWSVNJT04udGVzdChhVGV4dFtpbmRleF0pO1xufTtcblxuLyoqXG4gKiBXaGV0aGVyIGEgY2hhciBjb2RlIGVuZHMgYSBsaW5lIGNvbW1lbnQgLSBhIGxpbmUgdGVybWluYXRvciBpbiB0aGUgc2Vuc2Ugb2YgRUNNQVNjcmlwdC5cbiAqXG4gKiBAcGFyYW0ge251bWJlcn0gYUNvZGVcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5jb25zdCBpc0xpbmVUZXJtaW5hdG9yID0gKGFDb2RlKSA9PiBhQ29kZSA9PT0gTElORV9GRUVEIHx8IGFDb2RlID09PSBDQVJSSUFHRV9SRVRVUk4gfHwgYUNvZGUgPT09IExJTkVfU0VQQVJBVE9SIHx8IGFDb2RlID09PSBQQVJBR1JBUEhfU0VQQVJBVE9SO1xuXG4vKlxuICogVHdvIHNwbGl0cyB0YWtlIHRoZSB0ZXh0IGJldHdlZW4gdGhlIGRlbGltaXRlcnMgYXBhcnQgaW50byB0aGUgc2NvcGUgcHJlZml4IGFuZCB0aGVcbiAqIHN0YXRlbWVudCAtIHRoaXMgb25lIGZvciBhIHRleHQsIGBzcGxpdFNjb3BlQW5kU3RhdGVtZW50QnlTZXBhcmF0b3JgIGJlaGluZCBgcGFyc2VFeHByZXNzaW9uYCBmb3JcbiAqIHRoZSBzaW5nbGUgZXhwcmVzc2lvbiBvZiBgcmVzb2x2ZWAuIFRoZXkgYXJlIHR3byBpbXBsZW1lbnRhdGlvbnMgb2YgdGhlIG9uZSBydWxlLCBlYWNoIG1lYXN1cmVkXG4gKiBmYXN0ZXIgZm9yIG90aGVyIHN0YXRlbWVudHM6IGEgdGV4dCByZWFkcyBmb3J3YXJkcywgdGhlIHNpbmdsZSBleHByZXNzaW9uIGZyb20gdGhlIGZpcnN0IFwiOjpcIlxuICogYmFja3dhcmRzLiBCb3RoIGhhdmUgdG8gYW5zd2VyIGV2ZXJ5IGNhc2UgYWxpa2UuXG4gKi9cblxuLyoqXG4gKiBUaGUgc3BsaXQgb2YgYSB0ZXh0OiByZWFkcyBmb3J3YXJkcyBvbmx5IGFzIGZhciBhcyB0aGUgZmlyc3QgY2hhcmFjdGVyIGEgbmFtZSBjYW5ub3QgY2FycnksIHdoaWNoXG4gKiBmb3IgbW9zdCBzdGF0ZW1lbnRzIGlzIGEgZmV3IGNoYXJhY3RlcnMuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGFDb250ZW50IHRoZSB0ZXh0IGJldHdlZW4gdGhlIGRlbGltaXRlcnNcbiAqIEByZXR1cm5zIHt7IHNjb3BlOiA/c3RyaW5nLCBzdGF0ZW1lbnQ6ID9zdHJpbmcgfX0gYm90aCB0cmltbWVkLCBudWxsIHdoZXJlIGVtcHR5XG4gKi9cbmNvbnN0IHNwbGl0U2NvcGVBbmRTdGF0ZW1lbnRGb3J3YXJkID0gKGFDb250ZW50KSA9PiB7XG5cdGNvbnN0IGxlbmd0aCA9IGFDb250ZW50Lmxlbmd0aDtcblx0bGV0IGluZGV4ID0gMDtcblx0d2hpbGUgKGluZGV4IDwgbGVuZ3RoICYmIGlzTmFtZUNoYXJhY3RlcihhQ29udGVudC5jaGFyQ29kZUF0KGluZGV4KSkpIGluZGV4Kys7XG5cblx0aWYgKGFDb250ZW50LmNoYXJDb2RlQXQoaW5kZXgpICE9PSBDT0xPTiB8fCBhQ29udGVudC5jaGFyQ29kZUF0KGluZGV4ICsgMSkgIT09IENPTE9OKVxuXHRcdHJldHVybiB7IHNjb3BlOiBudWxsLCBzdGF0ZW1lbnQ6IHRyaW1Ub051bGwoYUNvbnRlbnQpIH07XG5cblx0Ly8gYW4gZW1wdHkgbmFtZSBpcyBubyBuYW1lLCBidXQgaXRzIHNlcGFyYXRvciBnb2VzIHdpdGggaXQgYWxsIHRoZSBzYW1lXG5cdHJldHVybiB7IHNjb3BlOiB0cmltVG9OdWxsKGFDb250ZW50LnN1YnN0cmluZygwLCBpbmRleCkpLCBzdGF0ZW1lbnQ6IHRyaW1Ub051bGwoYUNvbnRlbnQuc3Vic3RyaW5nKGluZGV4ICsgMikpIH07XG59O1xuXG4vKipcbiAqIFRoZSBudW1iZXIgb2YgYmFja3NsYXNoZXMgc3RhbmRpbmcgZGlyZWN0bHkgaW4gZnJvbnQgb2YgdGhlIGluZGV4LlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBhVGV4dFxuICogQHBhcmFtIHtudW1iZXJ9IGFJbmRleFxuICogQHJldHVybnMge251bWJlcn1cbiAqL1xuY29uc3QgY291bnRCYWNrc2xhc2hlc0JlZm9yZSA9IChhVGV4dCwgYUluZGV4KSA9PiB7XG5cdGxldCBjb3VudCA9IDA7XG5cdHdoaWxlIChhSW5kZXggLSBjb3VudCA+IDAgJiYgYVRleHQuY2hhckNvZGVBdChhSW5kZXggLSBjb3VudCAtIDEpID09PSBCQUNLU0xBU0gpIGNvdW50Kys7XG5cblx0cmV0dXJuIGNvdW50O1xufTtcblxuLyoqXG4gKiBSZWFkcyB0aGUgb25lIGV4cHJlc3Npb24gd2hvc2UgXCIke1wiIHN0YW5kcyBhdCBhU3RhcnQsIGNvdW50aW5nIGJyYWNlcyBidXQgbm90IHRoZSBvbmVzIGhpZGRlblxuICogaW5zaWRlIGEgbGl0ZXJhbCBvciBhIGNvbW1lbnQsIGFuZCB0YWtlcyBpdCBhcGFydCBpbnRvIHNjb3BlIHByZWZpeCBhbmQgc3RhdGVtZW50LlxuICpcbiAqIEFuc3dlcnMgdGhlIG9jY3VycmVuY2UgYHNjYW5gIGhhbmRzIG9uLCBgZW5kYCB0aGUgaW5kZXggZGlyZWN0bHkgYWZ0ZXIgdGhlIG1hdGNoaW5nIGNsb3NpbmcgYnJhY2U7XG4gKiBudWxsIHdoZXJlIHRoZSB0ZXh0IGVuZHMgYmVmb3JlIHRoYXQgYnJhY2UsIHdoaWNoIG1lYW5zIHRoZXJlIGlzIG5vXG4gKiBleHByZXNzaW9uIGhlcmUgYXQgYWxsOyBhbmQsIHdpdGggYGVuZGAgbmVnYXRlZCwgdGhlIGluZGV4IG9mIGFub3RoZXIgXCIke1wiIG1ldCBvdXRzaWRlIGEgbGl0ZXJhbFxuICogb3IgYSBjb21tZW50LCB3aGljaCBzdGFydHMgYW4gZXhwcmVzc2lvbiBvZiBpdHMgb3duIGFuZCBhYmFuZG9ucyB0aGlzIG9uZS5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gYVRleHRcbiAqIEBwYXJhbSB7bnVtYmVyfSBhU3RhcnRcbiAqIEByZXR1cm5zIHs/eyBzdGFydDogbnVtYmVyLCBlbmQ6IG51bWJlciwgZXNjYXBlZDogYm9vbGVhbiwgc2NvcGU6ID9zdHJpbmcsIHN0YXRlbWVudDogP3N0cmluZyB9fVxuICovXG5jb25zdCByZWFkRXhwcmVzc2lvbiA9IChhVGV4dCwgYVN0YXJ0KSA9PiB7XG5cdGNvbnN0IGxlbmd0aCA9IGFUZXh0Lmxlbmd0aDtcblx0Y29uc3Qgc3RhY2sgPSBbQ09ERV07XG5cdGxldCBjb21tZW50cyA9IG51bGw7XG5cdGxldCBjb21tZW50U3RhcnQgPSAwO1xuXHRsZXQgaW5kZXggPSBhU3RhcnQgKyAyO1xuXG5cdHdoaWxlIChpbmRleCA8IGxlbmd0aCkge1xuXHRcdGNvbnN0IGNoYXIgPSBhVGV4dC5jaGFyQ29kZUF0KGluZGV4KTtcblx0XHRzd2l0Y2ggKHN0YWNrW3N0YWNrLmxlbmd0aCAtIDFdKSB7XG5cdFx0XHRjYXNlIENPREU6XG5cdFx0XHRcdGlmIChjaGFyID09PSBPUEVOX0JSQUNFKSBzdGFjay5wdXNoKENPREUpO1xuXHRcdFx0XHRlbHNlIGlmIChjaGFyID09PSBDTE9TRV9CUkFDRSkge1xuXHRcdFx0XHRcdHN0YWNrLnBvcCgpO1xuXHRcdFx0XHRcdGlmIChzdGFjay5sZW5ndGggPT09IDApIHtcblx0XHRcdFx0XHRcdGNvbnN0IHsgc2NvcGUsIHN0YXRlbWVudCB9ID0gc3BsaXRTY29wZUFuZFN0YXRlbWVudEZvcndhcmQoYVRleHQuc3Vic3RyaW5nKGFTdGFydCArIDIsIGluZGV4KSk7XG5cdFx0XHRcdFx0XHRyZXR1cm4geyBzdGFydDogYVN0YXJ0LCBlbmQ6IGluZGV4ICsgMSwgZXNjYXBlZDogZmFsc2UsIHNjb3BlOiBzY29wZSwgc3RhdGVtZW50OiBzdGF0ZW1lbnQgfTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0gZWxzZSBpZiAoY2hhciA9PT0gU0lOR0xFX1FVT1RFKSBzdGFjay5wdXNoKFNJTkdMRV9RVU9URUQpO1xuXHRcdFx0XHRlbHNlIGlmIChjaGFyID09PSBET1VCTEVfUVVPVEUpIHN0YWNrLnB1c2goRE9VQkxFX1FVT1RFRCk7XG5cdFx0XHRcdGVsc2UgaWYgKGNoYXIgPT09IEJBQ0tUSUNLKSBzdGFjay5wdXNoKFRFTVBMQVRFKTtcblx0XHRcdFx0ZWxzZSBpZiAoY2hhciA9PT0gRE9MTEFSICYmIGFUZXh0LmNoYXJDb2RlQXQoaW5kZXggKyAxKSA9PT0gT1BFTl9CUkFDRSkgcmV0dXJuIHsgc3RhcnQ6IGFTdGFydCwgZW5kOiAtaW5kZXgsIGVzY2FwZWQ6IGZhbHNlLCBzY29wZTogbnVsbCwgc3RhdGVtZW50OiBudWxsIH07XG5cdFx0XHRcdGVsc2UgaWYgKGNoYXIgPT09IFNMQVNIKSB7XG5cdFx0XHRcdFx0Y29uc3QgbmV4dCA9IGFUZXh0LmNoYXJDb2RlQXQoaW5kZXggKyAxKTtcblx0XHRcdFx0XHRpZiAobmV4dCA9PT0gU1RBUiB8fCBuZXh0ID09PSBTTEFTSCkge1xuXHRcdFx0XHRcdFx0c3RhY2sucHVzaChuZXh0ID09PSBTVEFSID8gQkxPQ0tfQ09NTUVOVCA6IExJTkVfQ09NTUVOVCk7XG5cdFx0XHRcdFx0XHRjb21tZW50U3RhcnQgPSBpbmRleDtcblx0XHRcdFx0XHRcdGluZGV4Kys7XG5cdFx0XHRcdFx0fSBlbHNlIGlmIChzbGFzaE9wZW5zUmVnZXgoYVRleHQsIGluZGV4LCBjb21tZW50cykpIHN0YWNrLnB1c2goUkVHRVgpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSBCTE9DS19DT01NRU5UOlxuXHRcdFx0XHRpZiAoY2hhciA9PT0gU1RBUiAmJiBhVGV4dC5jaGFyQ29kZUF0KGluZGV4ICsgMSkgPT09IFNMQVNIKSB7XG5cdFx0XHRcdFx0c3RhY2sucG9wKCk7XG5cdFx0XHRcdFx0aW5kZXgrKztcblx0XHRcdFx0XHQoY29tbWVudHMgPz89IFtdKS5wdXNoKGNvbW1lbnRTdGFydCwgaW5kZXgpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSBMSU5FX0NPTU1FTlQ6XG5cdFx0XHRcdGlmIChpc0xpbmVUZXJtaW5hdG9yKGNoYXIpKSB7XG5cdFx0XHRcdFx0c3RhY2sucG9wKCk7XG5cdFx0XHRcdFx0KGNvbW1lbnRzID8/PSBbXSkucHVzaChjb21tZW50U3RhcnQsIGluZGV4IC0gMSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlIFNJTkdMRV9RVU9URUQ6XG5cdFx0XHRcdGlmIChjaGFyID09PSBCQUNLU0xBU0gpIGluZGV4Kys7XG5cdFx0XHRcdGVsc2UgaWYgKGNoYXIgPT09IFNJTkdMRV9RVU9URSkgc3RhY2sucG9wKCk7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSBET1VCTEVfUVVPVEVEOlxuXHRcdFx0XHRpZiAoY2hhciA9PT0gQkFDS1NMQVNIKSBpbmRleCsrO1xuXHRcdFx0XHRlbHNlIGlmIChjaGFyID09PSBET1VCTEVfUVVPVEUpIHN0YWNrLnBvcCgpO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgVEVNUExBVEU6XG5cdFx0XHRcdGlmIChjaGFyID09PSBCQUNLU0xBU0gpIGluZGV4Kys7XG5cdFx0XHRcdGVsc2UgaWYgKGNoYXIgPT09IEJBQ0tUSUNLKSBzdGFjay5wb3AoKTtcblx0XHRcdFx0ZWxzZSBpZiAoY2hhciA9PT0gRE9MTEFSICYmIGFUZXh0LmNoYXJDb2RlQXQoaW5kZXggKyAxKSA9PT0gT1BFTl9CUkFDRSkge1xuXHRcdFx0XHRcdHN0YWNrLnB1c2goQ09ERSk7XG5cdFx0XHRcdFx0aW5kZXgrKztcblx0XHRcdFx0fVxuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgUkVHRVg6XG5cdFx0XHRcdGlmIChjaGFyID09PSBCQUNLU0xBU0gpIGluZGV4Kys7XG5cdFx0XHRcdGVsc2UgaWYgKGNoYXIgPT09IE9QRU5fQlJBQ0tFVCkgc3RhY2sucHVzaChSRUdFWF9DTEFTUyk7XG5cdFx0XHRcdGVsc2UgaWYgKGNoYXIgPT09IFNMQVNIKSBzdGFjay5wb3AoKTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlIFJFR0VYX0NMQVNTOlxuXHRcdFx0XHRpZiAoY2hhciA9PT0gQkFDS1NMQVNIKSBpbmRleCsrO1xuXHRcdFx0XHRlbHNlIGlmIChjaGFyID09PSBDTE9TRV9CUkFDS0VUKSBzdGFjay5wb3AoKTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0fVxuXHRcdGluZGV4Kys7XG5cdH1cblxuXHRyZXR1cm4gbnVsbDtcbn07XG5cbi8qKlxuICogQW5zd2VycyBldmVyeSBleHByZXNzaW9uIG9mIGEgdGV4dCwgaW4gdGhlIG9yZGVyIHRoZXkgc3RhbmQsIG9yIG51bGwgd2hlcmUgdGhlIHRleHQgY2Fycmllc1xuICogbm9uZS4gYHN0YXJ0YCBpcyB0aGUgaW5kZXggb2YgdGhlIFwiJFwiLCBgZW5kYCB0aGUgaW5kZXggYWZ0ZXIgdGhlIG1hdGNoaW5nIGNsb3NpbmcgYnJhY2UsIHNvIGFcbiAqIGNhbGxlciByZXBsYWNlcyBieSBwb3NpdGlvbiBhbmQgbmV2ZXIgdG91Y2hlcyBhbiBvY2N1cnJlbmNlIHR3aWNlLiBUaGUgdGV4dCBiZXR3ZWVuIHR3b1xuICogZXhwcmVzc2lvbnMgaXMgc2tpcHBlZCBieSBhIG5hdGl2ZSBzZWFyY2ggZm9yIHRoZSBuZXh0IFwiJHtcIi5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gYVRleHRcbiAqIEByZXR1cm5zIHs/QXJyYXk8eyBzdGFydDogbnVtYmVyLCBlbmQ6IG51bWJlciwgZXNjYXBlZDogYm9vbGVhbiwgc2NvcGU6ID9zdHJpbmcsIHN0YXRlbWVudDogP3N0cmluZyB9Pn1cbiAqL1xuZXhwb3J0IGNvbnN0IHNjYW4gPSAoYVRleHQpID0+IHtcblx0bGV0IG9jY3VycmVuY2VzID0gbnVsbDtcblx0bGV0IHN0YXJ0ID0gYVRleHQuaW5kZXhPZihFWFBSRVNTSU9OX1NUQVJUKTtcblxuXHR3aGlsZSAoc3RhcnQgPj0gMCkge1xuXHRcdC8vIGFuIG9kZCBydW4gb2YgYmFja3NsYXNoZXMgZXNjYXBlcyB0aGUgZGVsaW1pdGVyIGl0c2VsZi4gSXQgb3BlbnMgbm90aGluZywgc28gb25seVxuXHRcdC8vIHRob3NlIHR3byBjaGFyYWN0ZXJzIGFyZSB0YWtlbiBvdXQgb2YgdGhlIHRleHQgYW5kIHRoZSBzY2FuIGNhcnJpZXMgb24gYmVoaW5kIHRoZW0gLVxuXHRcdC8vIHdoYXQgd291bGQgaGF2ZSBiZWVuIHRoZSBzdGF0ZW1lbnQgaXMgb3JkaW5hcnkgdGV4dCBhbmQgbWF5IGhvbGQgZXhwcmVzc2lvbnMgb2YgaXRzIG93bi5cblx0XHRpZiAoY291bnRCYWNrc2xhc2hlc0JlZm9yZShhVGV4dCwgc3RhcnQpICUgMiA9PT0gMSkge1xuXHRcdFx0aWYgKCFvY2N1cnJlbmNlcykgb2NjdXJyZW5jZXMgPSBbXTtcblx0XHRcdG9jY3VycmVuY2VzLnB1c2goeyBzdGFydDogc3RhcnQsIGVuZDogc3RhcnQgKyAyLCBlc2NhcGVkOiB0cnVlLCBzY29wZTogbnVsbCwgc3RhdGVtZW50OiBudWxsIH0pO1xuXHRcdFx0c3RhcnQgPSBhVGV4dC5pbmRleE9mKEVYUFJFU1NJT05fU1RBUlQsIHN0YXJ0ICsgMik7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cblx0XHRjb25zdCBvY2N1cnJlbmNlID0gcmVhZEV4cHJlc3Npb24oYVRleHQsIHN0YXJ0KTtcblx0XHQvLyBubyBtYXRjaGluZyBicmFjZTogdGhlIHRleHQgc3RhbmRzIGFzIHdyaXR0ZW4sIGFuZCBub3RoaW5nIGJlaGluZCBpdCBjYW4gYmUgYW5cblx0XHQvLyBleHByZXNzaW9uIGVpdGhlciAtIGEgXCIke1wiIG91dHNpZGUgYSBsaXRlcmFsIG9yIGEgY29tbWVudCB3b3VsZCBoYXZlIHJlc3RhcnRlZCB0aGUgc2NhbiBpbnN0ZWFkXG5cdFx0aWYgKCFvY2N1cnJlbmNlKSBicmVhaztcblx0XHRpZiAob2NjdXJyZW5jZS5lbmQgPCAwKSB7XG5cdFx0XHRzdGFydCA9IC1vY2N1cnJlbmNlLmVuZDtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblxuXHRcdGlmICghb2NjdXJyZW5jZXMpIG9jY3VycmVuY2VzID0gW107XG5cdFx0b2NjdXJyZW5jZXMucHVzaChvY2N1cnJlbmNlKTtcblx0XHRzdGFydCA9IGFUZXh0LmluZGV4T2YoRVhQUkVTU0lPTl9TVEFSVCwgb2NjdXJyZW5jZS5lbmQpO1xuXHR9XG5cblx0cmV0dXJuIG9jY3VycmVuY2VzO1xufTtcblxuLyoqXG4gKiBUYWtlcyB0aGUgb25lIGV4cHJlc3Npb24gYHJlc29sdmVgIGlzIGhhbmRlZCBhcGFydC5cbiAqXG4gKiBXaGljaCBmb3JtIGlzIGluIGhhbmQgaXMgZGVjaWRlZCBieSB0aGUgdHdvIGVuZHMgb2YgdGhlIHRyaW1tZWQgaW5wdXQ6IGFuIGlucHV0IHRoYXQgb3BlbnMgd2l0aFxuICogXCIke1wiIGFuZCBlbmRzIHdpdGggXCJ9XCIgaXMgdGhlIGRlbGltaXRlZCBmb3JtLCBhbnl0aGluZyBlbHNlIGlzIGEgYmFyZSBzdGF0ZW1lbnQuIFRoZSB3aG9sZSBpbnB1dFxuICogaXMgb25lIGV4cHJlc3Npb24sIHNvIGl0cyBlbmQgaXMgdGhlIGVuZCBvZiB0aGUgaW5wdXQuIEVzY2FwaW5nIGEgZGVsaW1pdGVyIGRvZXMgbm90IGFwcGx5IGhlcmUgLVxuICogaXQgaXMgYSBydWxlIG9mIHRoZSB0ZXh0IGZvcm0sIGFuZCB0aGVyZSBpcyBubyBzdXJyb3VuZGluZyB0ZXh0LCBzbyBhIGJhY2tzbGFzaCBiZWxvbmdzIHRvIHRoZVxuICogc3RhdGVtZW50LlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBhRXhwcmVzc2lvblxuICogQHJldHVybnMge3sgc2NvcGU6ID9zdHJpbmcsIHN0YXRlbWVudDogP3N0cmluZyB9fVxuICovXG5leHBvcnQgY29uc3QgcGFyc2VFeHByZXNzaW9uID0gKGFFeHByZXNzaW9uKSA9PiB7XG5cdGFFeHByZXNzaW9uID0gYUV4cHJlc3Npb24udHJpbSgpO1xuXG5cdGlmIChhRXhwcmVzc2lvbi5zdGFydHNXaXRoKEVYUFJFU1NJT05fU1RBUlQpICYmIGFFeHByZXNzaW9uLmVuZHNXaXRoKFwifVwiKSlcblx0XHRyZXR1cm4gc3BsaXRTY29wZUFuZFN0YXRlbWVudEJ5U2VwYXJhdG9yKGFFeHByZXNzaW9uLnN1YnN0cmluZygyLCBhRXhwcmVzc2lvbi5sZW5ndGggLSAxKSk7XG5cblx0Ly8gYW55dGhpbmcgZWxzZSBpcyBhIHN0YXRlbWVudCBpbiBmdWxsLCBhbmQgY2FycmllcyBubyBzY29wZSBwcmVmaXhcblx0cmV0dXJuIHsgc2NvcGU6IG51bGwsIHN0YXRlbWVudDogdHJpbVRvTnVsbChhRXhwcmVzc2lvbikgfTtcbn07XG5cbi8qKlxuICogVGhlIHNwbGl0IG9mIHRoZSBzaW5nbGUgZXhwcmVzc2lvbjogbW9zdCBzdGF0ZW1lbnRzIGNhcnJ5IG5vIFwiOjpcIiBhdCBhbGwgYW5kIGFyZSBkb25lIGFmdGVyIG9uZVxuICogbmF0aXZlIHNlYXJjaC4gV2hlcmUgb25lIHN0YW5kcywgZXZlcnl0aGluZyBiZWZvcmUgdGhlIGZpcnN0IG9mIHRoZW0gaGFzIHRvIGJlIGEgbmFtZSwgY2hlY2tlZFxuICogYmFja3dhcmRzIGZyb20gaXQ6IGEgXCI6OlwiIGluc2lkZSBhIHN0YXRlbWVudCAtIGEgcXVvdGVkIG9uZSAtIHVzdWFsbHkgaGFzIGEgY2hhcmFjdGVyIG5vIG5hbWVcbiAqIGNhcnJpZXMgcmlnaHQgaW4gZnJvbnQgb2YgaXQuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGFDb250ZW50IHRoZSB0ZXh0IGJldHdlZW4gdGhlIGRlbGltaXRlcnNcbiAqIEByZXR1cm5zIHt7IHNjb3BlOiA/c3RyaW5nLCBzdGF0ZW1lbnQ6ID9zdHJpbmcgfX0gYm90aCB0cmltbWVkLCBudWxsIHdoZXJlIGVtcHR5XG4gKi9cbmNvbnN0IHNwbGl0U2NvcGVBbmRTdGF0ZW1lbnRCeVNlcGFyYXRvciA9IChhQ29udGVudCkgPT4ge1xuXHRjb25zdCBlbmQgPSBhQ29udGVudC5pbmRleE9mKFNDT1BFX1NFUEFSQVRPUik7XG5cdGlmIChlbmQgPCAwKSByZXR1cm4geyBzY29wZTogbnVsbCwgc3RhdGVtZW50OiB0cmltVG9OdWxsKGFDb250ZW50KSB9O1xuXG5cdGZvciAobGV0IGluZGV4ID0gZW5kIC0gMTsgaW5kZXggPj0gMDsgaW5kZXgtLSlcblx0XHRpZiAoIWlzTmFtZUNoYXJhY3RlcihhQ29udGVudC5jaGFyQ29kZUF0KGluZGV4KSkpIHJldHVybiB7IHNjb3BlOiBudWxsLCBzdGF0ZW1lbnQ6IHRyaW1Ub051bGwoYUNvbnRlbnQpIH07XG5cblx0cmV0dXJuIHsgc2NvcGU6IHRyaW1Ub051bGwoYUNvbnRlbnQuc3Vic3RyaW5nKDAsIGVuZCkpLCBzdGF0ZW1lbnQ6IHRyaW1Ub051bGwoYUNvbnRlbnQuc3Vic3RyaW5nKGVuZCArIDIpKSB9O1xufTtcbiIsImltcG9ydCBHTE9CQUwgZnJvbSBcIkBkZWZhdWx0LWpzL2RlZmF1bHRqcy1jb21tb24tdXRpbHMvc3JjL0dsb2JhbC5qc1wiO1xuaW1wb3J0IHsgaXNOdWxsT3JVbmRlZmluZWQgfSBmcm9tIFwiQGRlZmF1bHQtanMvZGVmYXVsdGpzLWNvbW1vbi11dGlscy9zcmMvT2JqZWN0VXRpbHMuanNcIjtcblxuLyoqXG4gKiBUaGUgZGVzY3JpcHRvciBhIHByb3BlcnR5IGhhcyB3aGVyZSBpdCBpcyBkZWZpbmVkIC0gb3duIG9yIGFueXdoZXJlIHVwIHRoZSBwcm90b3R5cGUgY2hhaW4gb2ZcbiAqIHRoZSBvYmplY3QgaG9sZGluZyBpdC5cbiAqXG4gKiBAcGFyYW0ge29iamVjdH0gZGF0YVxuICogQHBhcmFtIHtzdHJpbmd8c3ltYm9sfSBwcm9wZXJ0eVxuICogQHJldHVybnMge1Byb3BlcnR5RGVzY3JpcHRvcnxudWxsfVxuICovXG5jb25zdCBmaW5kUHJvcGVydHlEZXNjcmlwdG9yID0gKGRhdGEsIHByb3BlcnR5KSA9PiB7XG5cdGxldCB0eXBlID0gZGF0YTtcblx0d2hpbGUgKCFpc051bGxPclVuZGVmaW5lZCh0eXBlKSkge1xuXHRcdGNvbnN0IGRlc2NyaXB0b3IgPSBSZWZsZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0eXBlLCBwcm9wZXJ0eSk7XG5cdFx0aWYgKGRlc2NyaXB0b3IpIHJldHVybiBkZXNjcmlwdG9yO1xuXHRcdHR5cGUgPSBSZWZsZWN0LmdldFByb3RvdHlwZU9mKHR5cGUpO1xuXHR9XG5cblx0cmV0dXJuIG51bGw7XG59O1xuXG4vKipcbiAqIFRoZSBuYW1lcyBhIGhhbmRsZSBwcm92aWRlcywgZWFjaCBtYXBwZWQgdG8gdGhlIGhhbmRsZSBwcm92aWRpbmcgaXQ6IGEgTWFwLCBvciB0aGUgc3RhbmQtaW4gb2ZcbiAqIGBjcmVhdGVHbG9iYWxOYW1lQ2FjaGVgIG92ZXIgdGhlIGdsb2JhbCBvYmplY3QsIHdoaWNoIGFuc3dlcnMgdGhlIHNhbWUgY2FsbHMuXG4gKlxuICogQHR5cGVkZWYge29iamVjdH0gTmFtZUNhY2hlXG4gKiBAcHJvcGVydHkgeyhrZXk6IHN0cmluZ3xzeW1ib2wpID0+IGJvb2xlYW59IGhhc1xuICogQHByb3BlcnR5IHsoa2V5OiBzdHJpbmd8c3ltYm9sKSA9PiAoUmVzb2x2ZXJDb250ZXh0SGFuZGxlfHVuZGVmaW5lZCl9IGdldFxuICogQHByb3BlcnR5IHsoa2V5OiBzdHJpbmd8c3ltYm9sLCB2YWx1ZTogUmVzb2x2ZXJDb250ZXh0SGFuZGxlKSA9PiAqfSBzZXRcbiAqIEBwcm9wZXJ0eSB7KGtleTogc3RyaW5nfHN5bWJvbCkgPT4gYm9vbGVhbn0gZGVsZXRlXG4gKiBAcHJvcGVydHkgeygpID0+IEl0ZXJhYmxlPHN0cmluZ3xzeW1ib2w+fSBrZXlzXG4gKi9cblxuLyoqXG4gKiBOYW1lIGNhY2hlIGZvciBhIGNvbnRleHQgdGhhdCBpcyB0aGUgZ2xvYmFsIG9iamVjdCBpdHNlbGYuXG4gKlxuICogSXQgYW5zd2VycyBsaWtlIHRoZSBNYXAgaXQgcmVwbGFjZXM6IGV2ZXJ5IG5hbWUgaXMgcHJlc2VudCwgYW5kIHRoZSB2YWx1ZSBpcyB0aGUgaGFuZGxlXG4gKiBob2xkaW5nIGl0IC0gbmV2ZXIgdGhlIHZhbHVlIG9mIHRoZSBwcm9wZXJ0eS4gVGhhdCBpcyB0aGUgY29udHJhY3Qgb2YgI2ZpbmRIYW5kbGUsXG4gKiB3aG9zZSBjYWxsZXIgcmVhZHMgdGhlIHByb3BlcnR5IG9mZiB0aGUgaGFuZGxlIGl0IGdldHMgYmFjay5cbiAqXG4gKiBCZWNhdXNlIGV2ZXJ5IG5hbWUgaXMgcHJlc2VudCwgc3VjaCBhIHJlc29sdmVyIGFuc3dlcnMgZXZlcnkgbG9va3VwIHRoYXQgcmVhY2hlcyBpdCwgYW5kIG5vXG4gKiBoYW5kbGUgbmVhcmVyIHRoZSByb290IGlzIHJlYWNoZWQuIEl0IGxpc3RzIG5vIG5hbWUgb2YgaXRzIG93biwgc28gdGhlIG93bktleXMgdHJhcCBvZiBhIGhhbmRsZVxuICogZnVydGhlciBmcm9tIHRoZSByb290IHJlcG9ydHMgbm9uZSBvZiB0aGUgZ2xvYmFsIG9iamVjdCdzLlxuICpcbiAqIEBwYXJhbSB7UmVzb2x2ZXJDb250ZXh0SGFuZGxlfSBoYW5kbGVcbiAqIEByZXR1cm5zIHtOYW1lQ2FjaGV9XG4gKi9cbmNvbnN0IGNyZWF0ZUdsb2JhbE5hbWVDYWNoZSA9IChoYW5kbGUpID0+IHtcblx0cmV0dXJuIHtcblx0XHRoYXM6IChwcm9wZXJ0eSkgPT4ge1xuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fSxcblx0XHRnZXQ6IChwcm9wZXJ0eSkgPT4ge1xuXHRcdFx0cmV0dXJuIGhhbmRsZTtcblx0XHR9LFxuXHRcdHNldDogKHByb3BlcnR5LCB2YWx1ZSkgPT4ge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH0sXG5cdFx0ZGVsZXRlOiAocHJvcGVydHkpID0+IHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9LFxuXHRcdGtleXM6ICgpID0+IHtcblx0XHRcdC8vIE5vIG5hbWUgb2YgaXRzIG93bi4gYGhhc2AgYWxyZWFkeSBhbnN3ZXJzIGV2ZXJ5IGxvb2t1cCwgc28gYSBuYW1lIG9mIHRoZSBnbG9iYWwgb2JqZWN0XG5cdFx0XHQvLyBpcyBmb3VuZCBmcm9tIGFueXdoZXJlIGJlbG93OyBsaXN0aW5nIGl0IGFzIHdlbGwgd291bGQgb25seSBoYW5kIGl0IHRvIGFuIGV4ZWN1dGVyIHRoYXRcblx0XHRcdC8vIHR1cm5zIGEgbmFtZSBpbnRvIGNvZGUsIHdoaWNoIHRoZW4gZmFpbHMgb3ZlciBuYW1lcyBpdCBuZXZlciBuZWVkZWQgLSB0aGUgaW5kZXggXCIwXCIgb2Zcblx0XHRcdC8vIGEgZnJhbWUsIGEgc3ltYm9sIGFub3RoZXIgbGlicmFyeSBwbGFudGVkLiBBIHN0YXRlbWVudCByZWFjaGVzIGEgZ2xvYmFsIHRocm91Z2ggdGhlXG5cdFx0XHQvLyBvcmRpbmFyeSBzY29wZSBjaGFpbiBhbnl3YXkuXG5cdFx0XHRyZXR1cm4gW107XG5cdFx0fSxcblx0fTtcbn07XG5cbi8qKlxuICogV2hhdCBzdGFuZHMgYmVoaW5kIHRoZSBjb250ZXh0IG9mIG9uZSByZXNvbHZlcjogdGhlIG9iamVjdCBoYW5kZWQgdG8gaXQsIHRoZSBoYW5kbGUgb2YgaXRzIHBhcmVudCxcbiAqIGFuZCB0aGUgbmFtZSBjYWNoZSB0aGF0IHRlbGxzIHdoaWNoIG5hbWVzIHRoaXMgcmVzb2x2ZXIgcHJvdmlkZXMuIEl0IGhhbmRzIG91dCB0aGUgY29udGV4dCBhblxuICogZXhwcmVzc2lvbiBzZWVzLCBhIHByb3h5IHRoYXQgYW5zd2VycyBmb3IgdGhlIHdob2xlIGNoYWluLlxuICpcbiAqIEludGVybmFsIHRvIHRoZSBwYWNrYWdlOiBpbmRleC5qcyBkb2VzIG5vdCBleHBvcnQgaXQuXG4gKlxuICogQGV4cG9ydFxuICogQGNsYXNzIFJlc29sdmVyQ29udGV4dEhhbmRsZVxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZXNvbHZlckNvbnRleHRIYW5kbGUge1xuXHQvKiogQHR5cGUge29iamVjdHxudWxsfSAqL1xuXHQjY29udGV4dCA9IG51bGw7XG5cdC8qKiBAdHlwZSB7UmVzb2x2ZXJDb250ZXh0SGFuZGxlfG51bGx9ICovXG5cdCNwYXJlbnQgPSBudWxsO1xuXHQvKiogQHR5cGUge29iamVjdHxudWxsfSAqL1xuXHQjZGF0YSA9IG51bGw7XG5cdC8qKiBAdHlwZSB7TmFtZUNhY2hlfG51bGx9ICovXG5cdCNjYWNoZSA9IG51bGw7XG5cdC8qKiBAdHlwZSB7Ym9vbGVhbn0gKi9cblx0I3Byb3ZpZGVzQ29udGV4dCA9IGZhbHNlO1xuXG5cdC8qKlxuXHQgKiBAY29uc3RydWN0b3Jcblx0ICogQHBhcmFtIHs/b2JqZWN0fSBjb250ZXh0IHRoZSBvYmplY3QgdGhlIGNhbGxlciBoYW5kZWQgb3Zlciwga2VwdCByYXRoZXIgdGhhbiBjb3BpZWQuIFdoZXJlIG5vbmVcblx0ICogaXMgcGFzc2VkLCB0aGUgaGFuZGxlIGhvbGRzIG5vIG9iamVjdCBhdCBhbGwgYW5kIGNhcnJpZXMgbm8gbmFtZSwgbm90IGV2ZW4gb25lIG9mXG5cdCAqIE9iamVjdC5wcm90b3R5cGUuIEl0IGdldHMgYW4gb2JqZWN0IG9uIHRoZSBmaXJzdCB3cml0ZS5cblx0ICogQHBhcmFtIHs/UmVzb2x2ZXJDb250ZXh0SGFuZGxlfSBwYXJlbnQgdGhlIGhhbmRsZSBvZiB0aGUgcGFyZW50IHJlc29sdmVyXG5cdCAqL1xuXHRjb25zdHJ1Y3Rvcihjb250ZXh0LCBwYXJlbnQpIHtcblx0XHR0aGlzLiNkYXRhID0gaXNOdWxsT3JVbmRlZmluZWQoY29udGV4dCkgPyBudWxsIDogY29udGV4dDtcblx0XHR0aGlzLiNwYXJlbnQgPSBwYXJlbnQgPyBwYXJlbnQgOiBudWxsO1xuXHRcdHRoaXMuI3Byb3ZpZGVzQ29udGV4dCA9ICFpc051bGxPclVuZGVmaW5lZChjb250ZXh0KTtcblxuXHRcdHRoaXMuI2NhY2hlID0gdGhpcy4jYnVpbGROYW1lQ2FjaGUoKTtcblxuXHRcdGlmIChHTE9CQUwgPT09IHRoaXMuI2RhdGEpXG5cdFx0XHR0aGlzLiNjb250ZXh0ID0gdGhpcy4jZGF0YTtcblx0XHRlbHNlIHtcblx0XHRcdC8vIFRoZSBwcm94eSBhbnN3ZXJzIGZvciB0aGUgd2hvbGUgY2hhaW4sIHdoaWNoIGlzIG1vcmUgdGhhbiB0aGUgb2JqZWN0IGhhbmRlZCB0byB0aGlzXG5cdFx0XHQvLyByZXNvbHZlciBob2xkcy4gQSBwcm94eSBtYXkgbm90IHNwZWFrIHRoYXQgZnJlZWx5IGZvciBhIHRhcmdldCB0aGF0IGd1YXJhbnRlZXNcblx0XHRcdC8vIGFueXRoaW5nIGFib3V0IGl0cyBvd24ga2V5cyAtIGEgZnJvemVuIG9yIHNlYWxlZCBjb250ZXh0IGlzIHdoZXJlIHRoYXQgZW5kcyBpbiBhXG5cdFx0XHQvLyBUeXBlRXJyb3IgLSBzbyBpdCBnZXRzIGFuIGVtcHR5IHRhcmdldCBvZiBpdHMgb3duLiBObyB0cmFwIHJlYWRzIGl0OyBldmVyeSBvbmUgb2Zcblx0XHRcdC8vIHRoZW0gd29ya3Mgb24gI2RhdGEgYW5kICNjYWNoZS5cblx0XHRcdHRoaXMuI2NvbnRleHQgPSBuZXcgUHJveHkoe30sIHtcblx0XHRcdFx0aGFzOiAoZGF0YSwgcHJvcGVydHkpID0+IHtcblx0XHRcdFx0XHQvL2NvbnNvbGUubG9nKFwiaGFzIHByb3BlcnR5OlwiLCBwcm9wZXJ0eSk7XG5cdFx0XHRcdFx0cmV0dXJuIHRoaXMuI2ZpbmRIYW5kbGUocHJvcGVydHkpICE9IG51bGw7XG5cdFx0XHRcdH0sXG5cdFx0XHRcdGdldDogKGRhdGEsIHByb3BlcnR5KSA9PiB7XG5cdFx0XHRcdFx0Ly9jb25zb2xlLmxvZyhcImdldCBwcm9wZXJ0eTpcIiwgcHJvcGVydHkpO1xuXHRcdFx0XHRcdGNvbnN0IGhhbmRsZSA9IHRoaXMuI2ZpbmRIYW5kbGUocHJvcGVydHkpO1xuXHRcdFx0XHRcdHJldHVybiBoYW5kbGUgPyBoYW5kbGUuI2RhdGFbcHJvcGVydHldIDogdW5kZWZpbmVkO1xuXHRcdFx0XHR9LFxuXHRcdFx0XHRzZXQ6IChkYXRhLCBwcm9wZXJ0eSwgdmFsdWUpID0+IHtcblx0XHRcdFx0XHQvL2NvbnNvbGUubG9nKFwic2V0IHByb3BlcnR5OlwiLCBwcm9wZXJ0eSwgXCI9XCIsIHZhbHVlKTtcblx0XHRcdFx0XHR0aGlzLiNkYXRhID8/PSB7fTtcblx0XHRcdFx0XHR0aGlzLiNkYXRhW3Byb3BlcnR5XSA9IHZhbHVlO1xuXHRcdFx0XHRcdHRoaXMuI2NhY2hlLnNldChwcm9wZXJ0eSwgdGhpcyk7XG5cdFx0XHRcdFx0dGhpcy4jcHJvdmlkZXNDb250ZXh0ID0gdHJ1ZTtcblx0XHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdFx0fSxcblx0XHRcdFx0ZGVsZXRlUHJvcGVydHk6IChkYXRhLCBwcm9wZXJ0eSkgPT4ge1xuXHRcdFx0XHRcdGNvbnN0IGhhbmRsZSA9IHRoaXMuI2NhY2hlLmdldChwcm9wZXJ0eSk7XG5cdFx0XHRcdFx0aWYgKGhhbmRsZSkge1xuXHRcdFx0XHRcdFx0ZGVsZXRlIHRoaXMuI2RhdGFbcHJvcGVydHldO1xuXHRcdFx0XHRcdFx0dGhpcy4jY2FjaGUuZGVsZXRlKHByb3BlcnR5KTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHRcdH0sXG5cdFx0XHRcdGdldE93blByb3BlcnR5RGVzY3JpcHRvcjogKGRhdGEsIHByb3BlcnR5KSA9PiB7XG5cdFx0XHRcdFx0Y29uc3QgaGFuZGxlID0gdGhpcy4jZmluZEhhbmRsZShwcm9wZXJ0eSk7XG5cdFx0XHRcdFx0aWYgKCFoYW5kbGUpIHJldHVybiB1bmRlZmluZWQ7XG5cblx0XHRcdFx0XHQvLyBSZWFkIHRocm91Z2ggYSBnZXR0ZXIgcmF0aGVyIHRoYW4gdXAgZnJvbnQsIHNvIGVudW1lcmF0aW5nIGEgY29udGV4dCBkb2VzIG5vdFxuXHRcdFx0XHRcdC8vIGV2YWx1YXRlIHdoYXQgbm9ib2R5IGFza2VkIGZvciwgYW5kIHNvIGEgdmFsdWUgc3RheXMgbGl2ZS4gRW51bWVyYWJpbGl0eVxuXHRcdFx0XHRcdC8vIGlzIHRha2VuIGZyb20gd2hlcmUgdGhlIHByb3BlcnR5IGlzIGRlZmluZWQgLSB0aGF0IGlzIHdoYXQga2VlcHMgdGhlIG1lbWJlcnNcblx0XHRcdFx0XHQvLyBvZiBPYmplY3QucHJvdG90eXBlIG91dCBvZiBPYmplY3Qua2V5cyAtIHdoaWxlIGNvbmZpZ3VyYWJsZSBoYXMgdG8gYmUgdHJ1ZTpcblx0XHRcdFx0XHQvLyBhIHByb3h5IG1heSBub3QgY2xhaW0gYSBmaXhlZCBwcm9wZXJ0eSBpdHMgdGFyZ2V0IGRvZXMgbm90IGhhdmUuXG5cdFx0XHRcdFx0Y29uc3QgZGVzY3JpcHRvciA9IGZpbmRQcm9wZXJ0eURlc2NyaXB0b3IoaGFuZGxlLiNkYXRhLCBwcm9wZXJ0eSk7XG5cdFx0XHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0XHRcdGdldDogKCkgPT4gaGFuZGxlLiNkYXRhW3Byb3BlcnR5XSxcblx0XHRcdFx0XHRcdGVudW1lcmFibGU6IGRlc2NyaXB0b3IgPyBkZXNjcmlwdG9yLmVudW1lcmFibGUgOiB0cnVlLFxuXHRcdFx0XHRcdFx0Y29uZmlndXJhYmxlOiB0cnVlXG5cdFx0XHRcdFx0fTtcblx0XHRcdFx0fSxcblx0XHRcdFx0b3duS2V5czogKGRhdGEpID0+IHtcblx0XHRcdFx0XHQvL2NvbnNvbGUubG9nKFwib3duS2V5c1wiKTtcblx0XHRcdFx0XHRjb25zdCByZXN1bHQgPSBuZXcgU2V0KCk7XG5cdFx0XHRcdFx0bGV0IGhhbmRsZSA9IHRoaXM7XG5cdFx0XHRcdFx0d2hpbGUgKGhhbmRsZSkge1xuXHRcdFx0XHRcdFx0Ly8gYSBoYW5kbGUgd2l0aG91dCBhbiBvYmplY3QgY2FycmllcyBubyBuYW1lIC0gaXRzIGVtcHR5IGNhY2hlIGlzIHBhc3NlZCBieVxuXHRcdFx0XHRcdFx0aWYgKGhhbmRsZS4jZGF0YSAhPT0gbnVsbCkge1xuXHRcdFx0XHRcdFx0XHRmb3IgKGxldCBrZXkgb2YgaGFuZGxlLiNjYWNoZS5rZXlzKCkpIHtcblx0XHRcdFx0XHRcdFx0XHRyZXN1bHQuYWRkKGtleSk7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdGhhbmRsZSA9IGhhbmRsZS4jcGFyZW50O1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRyZXR1cm4gQXJyYXkuZnJvbShyZXN1bHQpO1xuXHRcdFx0XHR9LFxuXHRcdFx0fSk7XG5cdFx0fVxuXHR9XG5cblx0LyoqXG5cdCAqIFRoZSBjb250ZXh0IGFuIGV4cHJlc3Npb24gc2VlczogYSBwcm94eSB0aGF0IGFuc3dlcnMgZm9yIHRoZSB3aG9sZSBjaGFpbiwgb3Igb3ZlciB0aGUgZ2xvYmFsXG5cdCAqIG9iamVjdCB0aGUgZ2xvYmFsIG9iamVjdCBpdHNlbGYuXG5cdCAqXG5cdCAqIEB0eXBlIHtvYmplY3R9XG5cdCAqL1xuXHRnZXQgY29udGV4dCgpIHtcblx0XHRyZXR1cm4gdGhpcy4jY29udGV4dDtcblx0fVxuXG5cdC8qKlxuXHQgKiBAdHlwZSB7UmVzb2x2ZXJDb250ZXh0SGFuZGxlfG51bGx9XG5cdCAqL1xuXHRnZXQgcGFyZW50KCkge1xuXHRcdHJldHVybiB0aGlzLiNwYXJlbnQ7XG5cdH1cblxuXHQvKipcblx0ICogV2hldGhlciB0aGlzIGhhbmRsZSBwcm92aWRlcyB0aGUgbmFtZSBpdHNlbGYuIEV2ZXJ5IG5hbWUgb2YgaXRzIG93biBjb250ZXh0IGNvdW50cywgdGhlIG9uZXNcblx0ICogaW5oZXJpdGVkIHRocm91Z2ggdGhlIHByb3RvdHlwZSBjaGFpbiBpbmNsdWRlZDsgYSBoYW5kbGUgb3ZlciB0aGUgZ2xvYmFsIG9iamVjdFxuXHQgKiBwcm92aWRlcyBldmVyeSBuYW1lLlxuXHQgKlxuXHQgKiBAcGFyYW0ge3N0cmluZ3xzeW1ib2x9IGtleVxuXHQgKiBAcmV0dXJucyB7Ym9vbGVhbn1cblx0ICovXG5cdGhhc05hbWUoa2V5KSB7XG5cdFx0cmV0dXJuIHRoaXMuI2NhY2hlLmhhcyhrZXkpO1xuXHR9XG5cblx0LyoqXG5cdCAqIFdoZXRoZXIgdGhpcyBoYW5kbGUgcHJvdmlkZXMgYSBjb250ZXh0OiBvbmUgd2FzIGhhbmRlZCB0byB0aGUgY29uc3RydWN0b3IsIG9yIGEgdmFsdWUgaGFzIGJlZW5cblx0ICogd3JpdHRlbiBzaW5jZS4gV2hhdCB0aGUgZGF0YSBob2xkcyBkZWNpZGVzIG5vdGhpbmcuXG5cdCAqXG5cdCAqIEB0eXBlIHtib29sZWFufVxuXHQgKi9cblx0Z2V0IHByb3ZpZGVzQ29udGV4dCgpIHtcblx0XHRyZXR1cm4gdGhpcy4jcHJvdmlkZXNDb250ZXh0O1xuXHR9XG5cblx0LyoqXG5cdCAqIEFzc2lnbnMgdGhlIGtleXMgb2YgYW4gb2JqZWN0IGludG8gdGhlIG9uZSB0aGlzIGhhbmRsZSBob2xkcywga2V5IGJ5IGtleSwgY3JlYXRpbmcgdGhhdCBvYmplY3Rcblx0ICogd2hlcmUgdGhlcmUgaXMgbm9uZS5cblx0ICpcblx0ICogQHBhcmFtIHtvYmplY3R9IGRhdGFcblx0ICogQHRocm93cyB7VHlwZUVycm9yfSB3aGVyZSB0aGUgb2JqZWN0IGhlbGQgcmVmdXNlcyBhIGtleSAtIHRoZSBrZXlzIGJlZm9yZSBpdCBhcmUgd3JpdHRlbiBieSB0aGVuXG5cdCAqL1xuXHRtZXJnZURhdGEoZGF0YSkge1xuXHRcdHRoaXMuI2RhdGEgPz89IHt9O1xuXHRcdE9iamVjdC5hc3NpZ24odGhpcy4jZGF0YSwgZGF0YSk7XG5cdFx0dGhpcy4jcHJvdmlkZXNDb250ZXh0ID0gdHJ1ZTtcblx0XHR0aGlzLiNjYWNoZSA9IHRoaXMuI2J1aWxkTmFtZUNhY2hlKCk7XG5cdH1cblxuXHQvKipcblx0ICogVGFrZXMgdXAgdGhlIGtleXMgYWRkZWQgdG8gdGhlIGhhbmRlZC1pbiBvYmplY3Qgc2luY2UgdGhlIGhhbmRsZSB3YXMgYnVpbHQsIHdoaWNoIGFyZSBub3Rcblx0ICogcHJvdmlkZWQgdW50aWwgdGhlbi5cblx0ICovXG5cdHJlc2V0Q2FjaGUoKSB7XG5cdFx0dGhpcy4jY2FjaGUgPSB0aGlzLiNidWlsZE5hbWVDYWNoZSgpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEEgbmV3IG5hbWUgY2FjaGUgZm9yIHRoZSBvYmplY3QgdGhpcyBoYW5kbGUgaG9sZHM6IGV2ZXJ5IGtleSBpdCBjYXJyaWVzLCBpdHMgcHJvdG90eXBlIGNoYWluXG5cdCAqIGluY2x1ZGVkLCBlYWNoIG1hcHBlZCB0byB0aGlzIGhhbmRsZS4gT3ZlciB0aGUgZ2xvYmFsIG9iamVjdCB0aGUgc3RhbmQtaW4gb2Zcblx0ICogYGNyZWF0ZUdsb2JhbE5hbWVDYWNoZWAsIHdoaWNoIHByb3ZpZGVzIGV2ZXJ5IG5hbWUuXG5cdCAqXG5cdCAqIEByZXR1cm5zIHtOYW1lQ2FjaGV9XG5cdCAqL1xuXHQjYnVpbGROYW1lQ2FjaGUoKSB7XG5cdFx0Y29uc3QgZGF0YSA9IHRoaXMuI2RhdGE7XG5cdFx0aWYgKEdMT0JBTCA9PT0gZGF0YSkgXG5cdFx0XHRyZXR1cm4gY3JlYXRlR2xvYmFsTmFtZUNhY2hlKHRoaXMpO1xuXG5cdFx0Ly8gZXZlcnkga2V5IEphdmFTY3JpcHQgc2F5cyB0aGUgb2JqZWN0IGNhcnJpZXMsIG5vdGhpbmcgZmlsdGVyZWQgLSB3aGljaCBvZiB0aGVtIGFuIGV4ZWN1dGVyXG5cdFx0Ly8gY2FuIHB1dCBpbnRvIGl0cyBjb2RlIGlzIHRoZSBleGVjdXRlcidzIGJ1c2luZXNzXG5cdFx0Y29uc3QgY2FjaGUgPSBuZXcgTWFwKCk7XG5cdFx0bGV0IHR5cGUgPSBkYXRhO1xuXHRcdHdoaWxlICghaXNOdWxsT3JVbmRlZmluZWQodHlwZSkpIHtcblx0XHRcdGZvciAobGV0IG5hbWUgb2YgUmVmbGVjdC5vd25LZXlzKHR5cGUpKSBjYWNoZS5zZXQobmFtZSwgdGhpcyk7XG5cdFx0XHR0eXBlID0gUmVmbGVjdC5nZXRQcm90b3R5cGVPZih0eXBlKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gY2FjaGU7XG5cdH1cblxuXHQvKipcblx0ICogVGhlIG5lYXJlc3QgaGFuZGxlIGZyb20gdGhpcyBvbmUgdG8gdGhlIHJvb3QgdGhhdCBwcm92aWRlcyB0aGUgbmFtZSwgb3IgbnVsbCB3aGVyZSBub25lIGRvZXMuXG5cdCAqXG5cdCAqIEBwYXJhbSB7c3RyaW5nfHN5bWJvbH0gcHJvcGVydHlcblx0ICogQHJldHVybnMge1Jlc29sdmVyQ29udGV4dEhhbmRsZXxudWxsfVxuXHQgKi9cblx0I2ZpbmRIYW5kbGUocHJvcGVydHkpIHtcblx0XHQvLyBBIGhhbmRsZSB3aXRob3V0IGFuIG9iamVjdCBjYXJyaWVzIG5vIG5hbWUsIHNvIGl0IGlzIHBhc3NlZCBieSB3aXRob3V0IGFza2luZyBpdHMgY2FjaGUgLVxuXHRcdC8vIG1vc3QgcmVzb2x2ZXJzIG9mIGEgY2hhaW4gYXJlIGJ1aWx0IHdpdGhvdXQgYSBjb250ZXh0LlxuXHRcdGxldCBoYW5kbGUgPSB0aGlzO1xuXHRcdHdoaWxlIChoYW5kbGUpIHtcblx0XHRcdGlmIChoYW5kbGUuI2RhdGEgIT09IG51bGwgJiYgaGFuZGxlLiNjYWNoZS5oYXMocHJvcGVydHkpKSByZXR1cm4gaGFuZGxlLiNjYWNoZS5nZXQocHJvcGVydHkpO1xuXHRcdFx0aGFuZGxlID0gaGFuZGxlLiNwYXJlbnQ7XG5cdFx0fVxuXHRcdHJldHVybiBudWxsO1xuXHR9XG59XG4iLCIvKipcbiAqIFRoZSBoZWxwZXJzIG1vcmUgdGhhbiBvbmUgY29tcG9uZW50IHVzZXMuIEludGVybmFsIHRvIHRoZSBwYWNrYWdlOiBpbmRleC5qcyBkb2VzIG5vdCBleHBvcnRcbiAqIHRoZW0uXG4gKi9cblxuLyoqIFdoaXRlc3BhY2UgaW4gdGhlIHNlbnNlIG9mIGBcXHNgLiAqL1xuZXhwb3J0IGNvbnN0IFdISVRFU1BBQ0UgPSAvXFxzLztcblxuLyoqXG4gKiBXaGV0aGVyIGEgY2hhcmFjdGVyIG1heSBzdGFuZCBpbiBhIHNjb3BlIG5hbWU6IGFuIEFTQ0lJIGxldHRlciwgYSBkaWdpdCxcbiAqIFwiLVwiLCBcIl9cIiwgb3Igd2hpdGVzcGFjZSBpbiB0aGUgc2Vuc2Ugb2YgYFxcc2AsIHdoaWNoIHBhc3QgQVNDSUkgaXMgbGVmdCB0byB0aGUgcmVndWxhciBleHByZXNzaW9uLlxuICpcbiAqIEBwYXJhbSB7bnVtYmVyfSBhQ29kZSB0aGUgY2hhciBjb2RlXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuZXhwb3J0IGNvbnN0IGlzTmFtZUNoYXJhY3RlciA9IChhQ29kZSkgPT4ge1xuXHRpZiAoYUNvZGUgPCAweDgwKVxuXHRcdHJldHVybiAoXG5cdFx0XHQoYUNvZGUgPj0gMHg2MSAmJiBhQ29kZSA8PSAweDdhKSB8fFxuXHRcdFx0KGFDb2RlID49IDB4NDEgJiYgYUNvZGUgPD0gMHg1YSkgfHxcblx0XHRcdChhQ29kZSA+PSAweDMwICYmIGFDb2RlIDw9IDB4MzkpIHx8XG5cdFx0XHRhQ29kZSA9PT0gMHgyZCB8fFxuXHRcdFx0YUNvZGUgPT09IDB4NWYgfHxcblx0XHRcdGFDb2RlID09PSAweDIwIHx8XG5cdFx0XHQoYUNvZGUgPj0gMHgwOSAmJiBhQ29kZSA8PSAweDBkKVxuXHRcdCk7XG5cblx0cmV0dXJuIFdISVRFU1BBQ0UudGVzdChTdHJpbmcuZnJvbUNoYXJDb2RlKGFDb2RlKSk7XG59O1xuXG4vKipcbiAqIFRyaW1zIGEgc3RyaW5nLCBhbmQgYW5zd2VycyBudWxsIGZvciBvbmUgdGhhdCBpcyBlbXB0eSBhZnRlciB0cmltbWluZywgYW5kIGZvciBub25lLlxuICpcbiAqIEBwYXJhbSB7P3N0cmluZ30gdmFsdWVcbiAqIEByZXR1cm5zIHs/c3RyaW5nfVxuICovXG5leHBvcnQgY29uc3QgdHJpbVRvTnVsbCA9ICh2YWx1ZSkgPT4ge1xuXHRpZiAodmFsdWUpIHtcblx0XHR2YWx1ZSA9IHZhbHVlLnRyaW0oKTtcblx0XHRyZXR1cm4gdmFsdWUubGVuZ3RoID09IDAgPyBudWxsIDogdmFsdWU7XG5cdH1cblx0cmV0dXJuIG51bGw7XG59O1xuXG4vKipcbiAqIEEgMzIgYml0IGhhc2ggb2YgYSBzdHJpbmcsIGluIHRoZSBtYW5uZXIgb2YgSmF2YSdzIGBTdHJpbmcuaGFzaENvZGVgLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBhU3RyaW5nXG4gKiBAcmV0dXJucyB7bnVtYmVyfVxuICovXG5leHBvcnQgY29uc3Qgc3RyaW5nVG9IYXNoY29kZSA9IChhU3RyaW5nKSA9PiB7XG5cdGxldCBoYXNoID0gMDtcblx0aWYgKGFTdHJpbmcubGVuZ3RoID09IDApIHJldHVybiBoYXNoO1xuXHRjb25zdCBsZW5ndGggPSBhU3RyaW5nLmxlbmd0aDtcblx0Zm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuXHRcdGNvbnN0IGNoYXIgPSBhU3RyaW5nLmNoYXJDb2RlQXQoaSk7XG5cdFx0aGFzaCA9IChoYXNoIDw8IDUpIC0gaGFzaCArIGNoYXI7XG5cdFx0aGFzaCB8PSAwOyAvLyBDb252ZXJ0IHRvIDMyYml0IGludGVnZXJcblx0fVxuXHRyZXR1cm4gaGFzaDtcbn07XG4iLCJpbXBvcnQgeyByZWdpc3RlciB9IGZyb20gXCIuLi9FeGVjdXRlclJlZ2lzdHJ5LmpzXCI7XG5pbXBvcnQgRXhlY3V0ZXIgZnJvbSBcIi4uL0V4ZWN1dGVyLmpzXCI7XG5pbXBvcnQgQ29kZUNhY2hlIGZyb20gXCIuLi9Db2RlQ2FjaGUuanNcIjtcbmltcG9ydCBHTE9CQUwgZnJvbSBcIkBkZWZhdWx0LWpzL2RlZmF1bHRqcy1jb21tb24tdXRpbHMvc3JjL0dsb2JhbC5qc1wiO1xuXG5sZXQgREVCVUcgPSBmYWxzZTtcbi8qKiBUaGUgbmFtZSB0aGlzIGV4ZWN1dGVyIGlzIHJlZ2lzdGVyZWQgdW5kZXIsIGFuZCB0aGUgZGVmYXVsdCBleGVjdXRlci4gKi9cbmV4cG9ydCBjb25zdCBFWEVDVVRFUk5BTUUgPSBcImNvbnRleHQtZGVjb25zdHJ1Y3Rpb24tZXhlY3V0ZXJcIjtcbmNvbnN0IEVYUFJFU1NJT05fQ0FDSEUgPSBuZXcgQ29kZUNhY2hlKCk7XG5cblxuLyoqXG4gKiBIb3cgbWFueSBuYW1lcyBhIGNvbnRleHQgbWF5IGNhcnJ5IGJlZm9yZSB0aGlzIGV4ZWN1dGVyIHNheXMgdGhhdCBiaW5kaW5nIHRoZW0gYWxsIGNvc3RzLiBFdmVyeVxuICogb3JkaW5hcnkgb2JqZWN0IGJyaW5ncyBzZXZlbiBvZiB0aGVtIGFsb25nIGZyb20gYE9iamVjdC5wcm90b3R5cGVgLCBzbyB0aGUgbnVtYmVyIGNvdW50cyBhIGdvb2RcbiAqIG1hbnkgb3duIGtleXMgYmVmb3JlIGl0IGlzIHJlYWNoZWQuXG4gKi9cbmNvbnN0IEhJR0hfUFJPUEVSVFlfQ09VTlQgPSAyNTtcblxuLyoqXG4gKiBUaGUgbmFtZXMgdGhhdCBtYWRlIHRoZSBnZW5lcmF0ZWQgZnVuY3Rpb24gZmFpbCB0byBjb21waWxlLCBhc2tlZCBvZiBKYXZhU2NyaXB0IGl0c2VsZiByYXRoZXJcbiAqIHRoYW4gb2YgYSBsaXN0IGtlcHQgaGVyZTogYSBuYW1lIGlzIHVzYWJsZSB3aGVuIGl0IGNhbiBzdGFuZCBpbiBhIGRlc3RydWN0dXJpbmcgcGF0dGVybi5cbiAqXG4gKiBPbmx5IGV2ZXIgY2FsbGVkIG9uIHRoZSBmYWlsdXJlIHBhdGgsIHNvIHRoZSBjb3N0IG9mIGNvbXBpbGluZyBvbmUgcGF0dGVybiBwZXIgbmFtZSBpcyBwYWlkIGJ5IGFcbiAqIGNvbnRleHQgdGhhdCBpcyBicm9rZW4gZm9yIHRoaXMgZXhlY3V0ZXIgYW55d2F5LlxuICpcbiAqIEBwYXJhbSB7QXJyYXk8c3RyaW5nfHN5bWJvbD59IHRoZU5hbWVzXG4gKiBAcmV0dXJucyB7QXJyYXk8c3RyaW5nPn1cbiAqL1xuY29uc3QgdW51c2FibGVOYW1lcyA9ICh0aGVOYW1lcykgPT5cblx0dGhlTmFtZXNcblx0XHQuZmlsdGVyKChuYW1lKSA9PiB7XG5cdFx0XHRpZiAodHlwZW9mIG5hbWUgPT09IFwic3ltYm9sXCIpIHJldHVybiB0cnVlO1xuXHRcdFx0dHJ5IHtcblx0XHRcdFx0bmV3IEZ1bmN0aW9uKGB7JHtuYW1lfX1gLCBcIlwiKTtcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0fSBjYXRjaCAoZSkge1xuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdH1cblx0XHR9KVxuXHRcdC5tYXAoU3RyaW5nKTtcblxuLyoqXG4gKiBTd2l0Y2hlcyB0aGUgbG9nZ2luZyBvZiBldmVyeSBmdW5jdGlvbiB0aGlzIGV4ZWN1dGVyIGdlbmVyYXRlcyB0byB0aGUgY29uc29sZS5cbiAqXG4gKiBAcGFyYW0ge2Jvb2xlYW59IHZhbHVlXG4gKi9cbmV4cG9ydCBjb25zdCBzZXREZWJ1ZyA9ICh2YWx1ZSkgPT4ge1xuXHRERUJVRyA9IHZhbHVlO1xufTtcblxuLyoqXG4gKiBDb25maWd1cmVzIHRoZSBjb2RlIGNhY2hlIG9mIHRoaXMgZXhlY3V0ZXIuIGBzaXplYCBpcyB0aGUgb25seSBvcHRpb25cbiAqIHRvZGF5OyBhbiBvcHRpb24gbGVmdCBvdXQgY2hhbmdlcyBub3RoaW5nLlxuICpcbiAqIEBwYXJhbSB7aW1wb3J0KCcuLi9Db2RlQ2FjaGUuanMnKS5Db2RlQ2FjaGVPcHRpb25zfSBbb3B0aW9uc11cbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gd2hlcmUgdGhlIHNpemUgaXMgbm90IGEgZmluaXRlIG51bWJlclxuICovXG5leHBvcnQgY29uc3Qgc2V0dXBFeGVjdXRlciA9IChvcHRpb25zKSA9PiB7XG5cdEVYUFJFU1NJT05fQ0FDSEUuc2V0dXAob3B0aW9ucyk7XG59O1xuXG5jb25zdCBnZXRQcm9wZXJ0eU5hbWVzID0gKGFDb250ZXh0KSA9PiB7XG5cdGlmIChHTE9CQUwgPT09IGFDb250ZXh0KSByZXR1cm4gW107XG5cdHJldHVybiBSZWZsZWN0Lm93bktleXMoYUNvbnRleHQpO1xufTtcblxuY29uc3QgZ2V0T3JDcmVhdGVGdW5jdGlvbiA9IChhU3RhdGVtZW50LCBjb250ZXh0UHJvcGVydGllcykgPT4ge1xuXHQvLyBBIHN5bWJvbCBoYXMgdG8gYmUgd3JpdHRlbiBvdXQgcmF0aGVyIHRoYW4gam9pbmVkIC0gYGpvaW5gIGFsb25lIHJhaXNlcyBhIFR5cGVFcnJvciB0aGF0IHNheXNcblx0Ly8gbm90aGluZyBhYm91dCB0aGUgY29udGV4dCBpdCBjYW1lIGZyb20uIFdyaXR0ZW4gb3V0IGl0IHJlYWNoZXMgdGhlIHBhdHRlcm4sIHdoZXJlIGl0IGZhaWxzIHRvXG5cdC8vIGNvbXBpbGUgbGlrZSBhbnkgb3RoZXIgbmFtZSB0aGF0IGlzIG5vIGlkZW50aWZpZXIsIGFuZCBnZW5lcmF0ZSgpIG5hbWVzIGl0LlxuXHRjb25zdCBwcm9wZXJ0eU5hbWVzID0gY29udGV4dFByb3BlcnRpZXMubWFwKFN0cmluZykuam9pbihcIixcIik7XG5cdGNvbnN0IGNhY2hlS2V5ID0gYCR7YVN0YXRlbWVudC5sZW5ndGh9Ojoke3Byb3BlcnR5TmFtZXN9Ojoke2FTdGF0ZW1lbnR9YDtcblx0aWYgKEVYUFJFU1NJT05fQ0FDSEUuaGFzKGNhY2hlS2V5KSkge1xuXHRcdHJldHVybiBFWFBSRVNTSU9OX0NBQ0hFLmdldChjYWNoZUtleSk7XG5cdH1cblx0Y29uc3QgZXhwcmVzc2lvbiA9IGdlbmVyYXRlKGFTdGF0ZW1lbnQsIHByb3BlcnR5TmFtZXMsIGNvbnRleHRQcm9wZXJ0aWVzKTtcblx0RVhQUkVTU0lPTl9DQUNIRS5zZXQoY2FjaGVLZXksIGV4cHJlc3Npb24pO1xuXHRyZXR1cm4gZXhwcmVzc2lvbjtcbn07XG5cbi8qKlxuICogVGhlIGdlbmVyYXRlZCBmdW5jdGlvbiBkZXN0cnVjdHVyZXMgdGhlIGNvbnRleHQgaW4gaXRzIHBhcmFtZXRlciBsaXN0IGFuZCBydW5zIHRoZSBzdGF0ZW1lbnQgb3ZlclxuICogdGhlIGxvY2FsIGJpbmRpbmdzIHRoYXQgcHJvZHVjZXMuXG4gKlxuICogKipOb3RoaW5nIGlzIGNhcnJpZWQgYmFjay4qKiBBIHN0YXRlbWVudCB0aGF0IGFzc2lnbnMgdG8gYSBjb250ZXh0IG5hbWUgd3JpdGVzIGludG8gYSBsb2NhbFxuICogYmluZGluZywgYW5kIHRoYXQgYmluZGluZyBpcyBnb25lIHdoZW4gdGhlIGZ1bmN0aW9uIHJldHVybnMgLSBzbyBhIHdyaXRlIGlzIG5vdCByZWFkYWJsZVxuICogYWZ0ZXJ3YXJkcywgd2hpY2ggdGhlIHJlc29sdmVyIGxlYXZlcyB0byBlYWNoIGV4ZWN1dGVyLiBUaGF0IGlzIGEgZGVjaXNpb24gcmF0aGVyIHRoYW4gYSBnYXA6IHRoZVxuICogd3JpdGUtYmFjayB0aGlzIGV4ZWN1dGVyIGNhcnJpZWQgYmV0d2VlbiAyMDI2LTA5LTA3IGFuZCAyMDI2LTA5LTIwIGNvc3QgYSBmYWN0b3Igb2YgZWxldmVuIG9uIGFcbiAqIGNhY2hlIG1pc3MsIGJlY2F1c2UgaXQgbmVlZHMgZXZlcnkgY29udGV4dCBuYW1lIGRlY2xhcmVkIGluIHRoZSBib2R5IGluc3RlYWQgb2YgbGlzdGVkIGluIHRoZVxuICogcGFyYW1ldGVyIGxpc3QuIFNwZWVkIGlzIHdoYXQgdGhpcyBleGVjdXRlciBpcyBmb3IsIGFuZCBhIGNvbnN1bWVyIHdobyBuZWVkcyBhIHdyaXRlIHRvIHBlcnNpc3RcbiAqIHBpY2tzIGBjb250ZXh0LW9iamVjdC1leGVjdXRlcmAuXG4gKlxuICogV2hhdCBzdGlsbCByZWFjaGVzIHRoZSBjb250ZXh0IGlzIGEgKiptdXRhdGlvbioqOiBgaG9sZGVyLm5hbWUgPSBcImFmdGVyXCJgIGNoYW5nZXMgYW4gb2JqZWN0IHRoZVxuICogYmluZGluZyBhbmQgdGhlIGNvbnRleHQgYm90aCBwb2ludCBhdCwgYW5kIG5lZWRzIG5vdGhpbmcgY2FycmllZCBiYWNrLlxuICpcbiAqIFRoZSBjb250ZXh0IGlzIGRlc3RydWN0dXJlZCBpbiB0aGUgcGFyYW1ldGVyIGxpc3QgcmF0aGVyIHRoYW4gZGVjbGFyZWQgaW4gdGhlIGJvZHkgc28gdGhhdCB0aGVcbiAqIGdlbmVyYXRlZCBzb3VyY2Ugc3RheXMgb25lIGxpbmUgcGVyIHN0YXRlbWVudCBpbnN0ZWFkIG9mIG9uZSBsaW5lIHBlciBjb250ZXh0IG5hbWUgLSBgbmV3IEZ1bmN0aW9uYFxuICogcGFyc2VzIHRoYXQgc291cmNlIG9uIGV2ZXJ5IGNhY2hlIG1pc3MsIGFuZCBpdHMgbGVuZ3RoIGlzIHdoYXQgdGhlIG1pc3MgY29zdHMuIEl0IGFsc28gZGVjbGFyZXMgbm9cbiAqIG5hbWUgb2YgaXRzIG93bjogdGhlIHN0YXRlbWVudCBjYW4gdGhlcmVmb3JlIG5ldmVyIGNvbGxpZGUgd2l0aCBhIGJpbmRpbmcgb2YgdGhpcyBmdW5jdGlvbiwgd2hpY2hcbiAqIGlzIHdoYXQgdGhlIHJhbmRvbSBzdWZmaXggcmVtb3ZlZCBvbiAyMDI2LTA5LTIwIHVzZWQgdG8gZ3VhcmQuXG4gKlxuICogKipOb3RoaW5nIGlzIGZpbHRlcmVkIG91dCBvZiB0aGUgcGF0dGVybi4qKiBFdmVyeSBuYW1lIHRoZSBjb250ZXh0IGNhcnJpZXMgaXMgYm91bmQsIGEgbmFtZSB0aGF0XG4gKiBjYW5ub3QgYmUgYSB2YXJpYWJsZSBpbmNsdWRlZCAtIGEga2V5IGxpa2UgYHRlc3QtdGVzdGAsIGEgcmVzZXJ2ZWQgd29yZCwgYSBzeW1ib2wsIHRoZSBpbmRleCBvZiBhblxuICogYXJyYXkuIFN1Y2ggYSBjb250ZXh0IGNhbm5vdCBiZSBydW4gb3ZlciBieSB0aGlzIGV4ZWN1dGVyIGF0IGFsbCwgYW5kIGRyb3BwaW5nIHRoZSBuYW1lIHNpbGVudGx5XG4gKiB3b3VsZCBoaWRlIGEgcHJvcGVydHkgdGhlIGNhbGxlciBkZWZpbmVkLiBXaGF0IHRoaXMgZXhlY3V0ZXIgb3dlcyB0aGUgY2FsbGVyIGluc3RlYWQgaXMgYSBtZXNzYWdlXG4gKiB0aGF0IHNheXMgd2hpY2ggc3RhdGVtZW50IGZhaWxlZCBhbmQgd2hpY2ggbmFtZSBkaWQgaXQsIGJlY2F1c2UgdGhlIHN0YXRlbWVudCBpdHNlbGYgbmVlZCBub3RcbiAqIG1lbnRpb24gdGhhdCBuYW1lLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBhU3RhdGVtZW50XG4gKiBAcGFyYW0ge3N0cmluZ30gdGhlUHJvcGVydHlOYW1lU3RyaW5nIHRoZSBjb250ZXh0IG5hbWVzLCBjb21tYSBzZXBhcmF0ZWQsIGFzIHRoZSBkZXN0cnVjdHVyaW5nXG4gKiAgICAgICAgICAgICAgICAgcGF0dGVybiBzcGVsbHMgdGhlbVxuICogQHBhcmFtIHtBcnJheTxzdHJpbmd8c3ltYm9sPn0gdGhlTmFtZXMgdGhlIHNhbWUgbmFtZXMgdW53cml0dGVuLCBmb3IgdGhlIGVycm9yIG1lc3NhZ2VcbiAqIEByZXR1cm5zIHtGdW5jdGlvbn1cbiAqL1xuY29uc3QgZ2VuZXJhdGUgPSAoYVN0YXRlbWVudCwgdGhlUHJvcGVydHlOYW1lU3RyaW5nLCB0aGVOYW1lcykgPT4ge1xuXHQvLyBPbmx5IGhlcmUsIGFuZCB0aGVyZWZvcmUgb25jZSBwZXIgY29udGV4dCBzaGFwZSBhbmQgc3RhdGVtZW50IHJhdGhlciB0aGFuIG9uIGV2ZXJ5IGV4ZWN1dGlvbjpcblx0Ly8gYSBjb25zb2xlIHdyaXRlIGluIGEgYnJvd3NlciBjb3N0cyBtb3JlIHRoYW4gYSByZXNvbHV0aW9uIGRvZXMsIGFuZCB3YXJuaW5nIHBlciBleGVjdXRpb24gY29zdFxuXHQvLyB0aGlzIGV4ZWN1dGVyIGEgZmFjdG9yIG9mIGZvdXIgdG8gdHdlbnR5LWZpdmUgKG1lYXN1cmVkIDIwMjYtMDktMjIsIGBucG0gcnVuIGJlbmNoYCkuXG5cdGlmICh0aGVOYW1lcy5sZW5ndGggPiBISUdIX1BST1BFUlRZX0NPVU5UKVxuXHRcdGNvbnNvbGUud2Fybihcblx0XHRcdGBIaWdoIGNvdW50IG9mIHByb3BlcnRpZXMgYXQgZmlyc3QgbGV2ZWwsIGNhbiBiZSBkZWNyZWFzZSB0aGUgcGVyZm9ybWVuY2UhIGNvdW50OiAke3RoZU5hbWVzLmxlbmd0aH1gLFxuXHRcdCk7XG5cblx0Y29uc3QgY29kZSA9IGBcbnJldHVybiAoYXN5bmMgKHske3RoZVByb3BlcnR5TmFtZVN0cmluZ319KSA9PiB7XG4gICAgdHJ5e1xuICAgICAgIHJldHVybiAke2FTdGF0ZW1lbnR9XG4gICAgfWNhdGNoKGUpe1xuICAgICAgICB0aHJvdyBlO1xuICAgIH1cbn0pKGFyZ3VtZW50c1swXSB8fCB7fSk7YDtcblxuXHRpZiAoREVCVUcpIGNvbnNvbGUubG9nKFwiZ2VuZXJlcmF0ZWQgY29kZTogXFxuXCIsIGNvZGUpO1xuXG5cdHRyeSB7XG5cdFx0cmV0dXJuIG5ldyBGdW5jdGlvbihjb2RlKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdC8vIG9ubHkgYSBzeW50YXggZXJyb3IgY2FuIGNvbWUgZnJvbSBhIG5hbWUuIEFueXRoaW5nIGVsc2UgLSB0aGUgRXZhbEVycm9yIG9mIGEgQ29udGVudCBTZWN1cml0eVxuXHRcdC8vIFBvbGljeSB3aXRob3V0ICd1bnNhZmUtZXZhbCcgYW1vbmcgdGhlbSAtIGlzIGhhbmRlZCBvbjogYXNraW5nIGFib3V0IHRoZSBuYW1lcyB3b3VsZCBiZVxuXHRcdC8vIHJlZnVzZWQgYXMgd2VsbCwgYW5kIGV2ZXJ5IG5hbWUgd291bGQgYmUgYmxhbWVkXG5cdFx0aWYgKCEoZSBpbnN0YW5jZW9mIFN5bnRheEVycm9yKSkgdGhyb3cgZTtcblxuXHRcdGNvbnN0IHVudXNhYmxlID0gdW51c2FibGVOYW1lcyh0aGVOYW1lcyk7XG5cdFx0Ly8gbm90aGluZyB3cm9uZyB3aXRoIHRoZSBuYW1lczogdGhlIHN0YXRlbWVudCBpdHNlbGYgZG9lcyBub3QgY29tcGlsZSwgYW5kIHRoYXQgZXJyb3Igc2F5c1xuXHRcdC8vIG1vcmUgdGhhbiBhbnl0aGluZyB0aGlzIGV4ZWN1dGVyIGNvdWxkIGFkZFxuXHRcdGlmICh1bnVzYWJsZS5sZW5ndGggPT09IDApIHRocm93IGU7XG5cblx0XHR0aHJvdyBuZXcgU3ludGF4RXJyb3IoXG5cdFx0XHRgQ29udGV4dCBwcm9wZXJ0eSAke3VudXNhYmxlLmxlbmd0aCA9PT0gMSA/IFwibmFtZVwiIDogXCJuYW1lc1wifSBcIiR7dW51c2FibGUuam9pbignXCIsIFwiJyl9XCIgY2Fubm90IGJlIHVzZWQgYXMgYSB2YXJpYWJsZSBieSAke0VYRUNVVEVSTkFNRX0sIHNvIHRoaXMgc3RhdGVtZW50IGNhbm5vdCBydW4gb3ZlciB0aGlzIGNvbnRleHQhIHN0YXRlbWVudDogJHthU3RhdGVtZW50fWAsXG5cdFx0XHR7IGNhdXNlOiBlIH0sXG5cdFx0KTtcblx0fVxufTtcblxuLyoqXG4gKiBUaGUgZXhlY3V0ZXI6IGRlc3RydWN0dXJlcyB0aGUgY29udGV4dCBpbnRvIHRoZSBwYXJhbWV0ZXJzIG9mIGEgZ2VuZXJhdGVkIGZ1bmN0aW9uLCBzbyBhXG4gKiBzdGF0ZW1lbnQgYWRkcmVzc2VzIGEgY29udGV4dCB2YWx1ZSBieSBpdHMgYmFyZSBuYW1lIC0gc2VlIGBSRUFETUUubWRgLlxuICogUmVnaXN0ZXJlZCB1bmRlciBgRVhFQ1VURVJOQU1FYCBvbiBpbXBvcnQuXG4gKlxuICogQHR5cGUge0V4ZWN1dGVyfVxuICovXG5jb25zdCBFWEVDVVRFUiA9IG5ldyBFeGVjdXRlcih7XG5cdGV4ZWN1dGlvbjogKGFTdGF0ZW1lbnQsIGFDb250ZXh0KSA9PiB7XG5cdFx0Y29uc3QgcHJvcGVydHlOYW1lcyA9IGdldFByb3BlcnR5TmFtZXMoYUNvbnRleHQpO1xuXHRcdGNvbnN0IGV4cHJlc3Npb24gPSBnZXRPckNyZWF0ZUZ1bmN0aW9uKGFTdGF0ZW1lbnQsIHByb3BlcnR5TmFtZXMpO1xuXHRcdHJldHVybiBleHByZXNzaW9uKGFDb250ZXh0KTtcblx0fSxcbn0pO1xuXG5yZWdpc3RlcihFWEVDVVRFUk5BTUUsIEVYRUNVVEVSKTtcblxuZXhwb3J0IGRlZmF1bHQgRVhFQ1VURVI7XG4iLCJpbXBvcnQgeyByZWdpc3RlciB9IGZyb20gXCIuLi9FeGVjdXRlclJlZ2lzdHJ5LmpzXCI7XG5pbXBvcnQgRXhlY3V0ZXIgZnJvbSBcIi4uL0V4ZWN1dGVyLmpzXCI7XG5pbXBvcnQgQ29kZUNhY2hlIGZyb20gXCIuLi9Db2RlQ2FjaGUuanNcIjtcblxuLyoqIFRoZSBuYW1lIHRoaXMgZXhlY3V0ZXIgaXMgcmVnaXN0ZXJlZCB1bmRlci4gKi9cbmV4cG9ydCBjb25zdCBFWEVDVVRFUk5BTUUgPSBcImNvbnRleHQtb2JqZWN0LWV4ZWN1dGVyXCI7XG5jb25zdCBFWFBSRVNTSU9OX0NBQ0hFID0gbmV3IENvZGVDYWNoZSgpO1xuLyoqIFRoZSBuYW1lIGEgc3RhdGVtZW50IGFkZHJlc3NlcyB0aGUgY29udGV4dCBieS4gKi9cbmxldCBDT05URVhUX1ZBUiA9IFwiY3R4XCI7XG5cbi8qKlxuICogQ29uZmlndXJlcyB0aGlzIGV4ZWN1dGVyOiB0aGUgc2l6ZSBvZiBpdHMgY29kZSBjYWNoZSBhbmQgdGhlIG5hbWUgYSBzdGF0ZW1lbnQgYWRkcmVzc2VzIHRoZVxuICogY29udGV4dCBieS4gQW4gb3B0aW9uIGxlZnQgb3V0IGNoYW5nZXMgbm90aGluZy5cbiAqXG4gKiBAcGFyYW0ge29iamVjdH0gW29wdGlvbnNdXG4gKiBAcGFyYW0ge251bWJlcn0gW29wdGlvbnMuc2l6ZV0gdGhlIHNpemUgb2YgdGhlIGNvZGUgY2FjaGUsIGFzIGBDb2RlQ2FjaGVPcHRpb25zYCBkZXNjcmliZXMgaXQgaW5cbiAqIGBDb2RlQ2FjaGUuanNgXG4gKiBAcGFyYW0gez9zdHJpbmd9IFtvcHRpb25zLmNvbnRleHRWYXJdIHRoZSBuYW1lIGEgc3RhdGVtZW50IGFkZHJlc3NlcyB0aGUgY29udGV4dCBieSwgYGN0eGAgdW50aWwgaXRcbiAqIGlzIHNldCwgdGFrZW4gdHJpbW1lZC4gSXQgaG9sZHMgZm9yIGV2ZXJ5IHN0YXRlbWVudCB0aGlzIGV4ZWN1dGVyIHJ1bnMgZnJvbSB0aGVuIG9uLCB3aGljaGV2ZXJcbiAqIHJlc29sdmVyIGhhbmRzIGl0IG92ZXIuIE51bGwsIHVuZGVmaW5lZCBhbmQgYSBzdHJpbmcgdGhhdCBpcyBlbXB0eSBhZnRlciB0cmltbWluZyBsZWF2ZSB0aGUgbmFtZVxuICogYXMgaXQgaXMuIEEgbmFtZSB0aGF0IGNhbm5vdCBiZSBhIHBhcmFtZXRlciBuYW1lIGlzIG5vdCByZWplY3RlZCBoZXJlOiBldmVyeSBzdGF0ZW1lbnQgdGhlblxuICogdGhyb3dzIGEgYFN5bnRheEVycm9yYC5cbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gd2hlcmUgdGhlIHNpemUgaXMgbm90IGEgZmluaXRlIG51bWJlciwgb3IgdGhlIG5hbWUgaXMgbmVpdGhlciBhIHN0cmluZyBub3JcbiAqIG51bGwgb3IgdW5kZWZpbmVkXG4gKi9cbmV4cG9ydCBjb25zdCBzZXR1cEV4ZWN1dGVyID0gKG9wdGlvbnMpID0+IHtcblx0RVhQUkVTU0lPTl9DQUNIRS5zZXR1cChvcHRpb25zKTtcblx0Q09OVEVYVF9WQVIgPVxuXHRcdG9wdGlvbnM/LmNvbnRleHRWYXIgPT0gbnVsbCB8fCBvcHRpb25zPy5jb250ZXh0VmFyLnRyaW0oKS5sZW5ndGggPT09IDBcblx0XHRcdD8gQ09OVEVYVF9WQVJcblx0XHRcdDogb3B0aW9ucz8uY29udGV4dFZhci50cmltKCk7XG59O1xuXG4vKipcbiAqIFRoZSBuYW1lIGEgc3RhdGVtZW50IGFkZHJlc3NlcyB0aGUgY29udGV4dCBieTogYGN0eGAsIG9yIHRoZSBvbmUgYHNldHVwRXhlY3V0ZXJgIHNldCBsYXN0LlxuICpcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbmV4cG9ydCBjb25zdCBnZXRDb250ZXh0VmFyID0gKCkgPT4gQ09OVEVYVF9WQVI7XG5cbi8qKlxuICogQ29tcGlsZXMgYSBzdGF0ZW1lbnQgaW50byBhIGZ1bmN0aW9uIHRoYXQgaGFuZHMgdGhlIGNvbnRleHQgb3ZlciB1bmRlciB0aGUgbmFtZSBhIHN0YXRlbWVudFxuICogYWRkcmVzc2VzIGl0IGJ5LlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBhU3RhdGVtZW50XG4gKiBAcmV0dXJucyB7RnVuY3Rpb259XG4gKi9cbmNvbnN0IGdlbmVyYXRlID0gKGFTdGF0ZW1lbnQpID0+IHtcblx0Y29uc3QgY29kZSA9IGBcbnJldHVybiAoYXN5bmMgKCR7Q09OVEVYVF9WQVJ9KSA9PiB7XG4gICAgdHJ5e1xuICAgICAgICByZXR1cm4gJHthU3RhdGVtZW50fVxuICAgIH1jYXRjaChlKXtcbiAgICAgICAgdGhyb3cgZTtcbiAgICB9XG59KShhcmd1bWVudHNbMF0gfHwge30pO2A7XG5cblx0Ly9jb25zb2xlLmxvZyhcImNvZGVcIiwgY29kZSk7XG5cblx0cmV0dXJuIG5ldyBGdW5jdGlvbihjb2RlKTtcbn07XG5cbi8qKlxuICogVGhlIGNvbXBpbGVkIGZ1bmN0aW9uIGZvciBhIHN0YXRlbWVudCwgZnJvbSB0aGUgY2FjaGUgb3IgY29tcGlsZWQgbm93IGFuZCBjYWNoZWQuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGFTdGF0ZW1lbnRcbiAqIEByZXR1cm5zIHtGdW5jdGlvbn1cbiAqL1xuY29uc3QgZ2V0T3JDcmVhdGVGdW5jdGlvbiA9IChhU3RhdGVtZW50KSA9PiB7XG5cdGNvbnN0IGNhY2hlS2V5ID0gYCR7Q09OVEVYVF9WQVJ9Ojoke2FTdGF0ZW1lbnR9YDtcblxuXHRpZiAoRVhQUkVTU0lPTl9DQUNIRS5oYXMoY2FjaGVLZXkpKSB7XG5cdFx0cmV0dXJuIEVYUFJFU1NJT05fQ0FDSEUuZ2V0KGNhY2hlS2V5KTtcblx0fVxuXHRjb25zdCBleHByZXNzaW9uID0gZ2VuZXJhdGUoYVN0YXRlbWVudCk7XG5cdEVYUFJFU1NJT05fQ0FDSEUuc2V0KGNhY2hlS2V5LCBleHByZXNzaW9uKTtcblx0cmV0dXJuIGV4cHJlc3Npb247XG59O1xuXG4vKipcbiAqIFRoZSBleGVjdXRlcjogaGFuZHMgdGhlIGNvbnRleHQgb3ZlciBhcyBvbmUgb2JqZWN0IG5hbWVkIGBjdHhgLCBvciB0aGUgbmFtZSBgc2V0dXBFeGVjdXRlcmAgc2V0cyxcbiAqIHNvIGEgc3RhdGVtZW50IGFkZHJlc3NlcyBhIGNvbnRleHQgdmFsdWUgYXMgYGN0eC52YWx1ZWAgLSBzZWUgYFJFQURNRS5tZGAuIFJlZ2lzdGVyZWQgdW5kZXJcbiAqIGBFWEVDVVRFUk5BTUVgIG9uIGltcG9ydC5cbiAqXG4gKiBAdHlwZSB7RXhlY3V0ZXJ9XG4gKi9cbmNvbnN0IEVYRUNVVEVSID0gbmV3IEV4ZWN1dGVyKHtcblx0ZXhlY3V0aW9uOiAoYVN0YXRlbWVudCwgYUNvbnRleHQpID0+IHtcblx0XHRjb25zdCBleHByZXNzaW9uID0gZ2V0T3JDcmVhdGVGdW5jdGlvbihhU3RhdGVtZW50KTtcblx0XHRyZXR1cm4gZXhwcmVzc2lvbihhQ29udGV4dCk7XG5cdH0sXG59KTtcblxucmVnaXN0ZXIoRVhFQ1VURVJOQU1FLCBFWEVDVVRFUik7XG5cbmV4cG9ydCBkZWZhdWx0IEVYRUNVVEVSO1xuIiwiaW1wb3J0IHsgcmVnaXN0ZXIgfSBmcm9tIFwiLi4vRXhlY3V0ZXJSZWdpc3RyeS5qc1wiO1xuaW1wb3J0IEV4ZWN1dGVyIGZyb20gXCIuLi9FeGVjdXRlci5qc1wiO1xuaW1wb3J0IENvZGVDYWNoZSBmcm9tIFwiLi4vQ29kZUNhY2hlLmpzXCI7XG5cbi8qKiBUaGUgbmFtZSB0aGlzIGV4ZWN1dGVyIGlzIHJlZ2lzdGVyZWQgdW5kZXIuICovXG5leHBvcnQgY29uc3QgRVhFQ1VURVJOQU1FID0gXCJ3aXRoLXNjb3BlZC1leGVjdXRlclwiO1xuY29uc3QgRVhQUkVTU0lPTl9DQUNIRSA9IG5ldyBDb2RlQ2FjaGUoKTtcblxuLyoqXG4gKiBDb25maWd1cmVzIHRoZSBjb2RlIGNhY2hlIG9mIHRoaXMgZXhlY3V0ZXIuIGBzaXplYCBpcyB0aGUgb25seSBvcHRpb25cbiAqIHRvZGF5OyBhbiBvcHRpb24gbGVmdCBvdXQgY2hhbmdlcyBub3RoaW5nLlxuICpcbiAqIEBwYXJhbSB7aW1wb3J0KCcuLi9Db2RlQ2FjaGUuanMnKS5Db2RlQ2FjaGVPcHRpb25zfSBbb3B0aW9uc11cbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gd2hlcmUgdGhlIHNpemUgaXMgbm90IGEgZmluaXRlIG51bWJlclxuICovXG5leHBvcnQgY29uc3Qgc2V0dXBFeGVjdXRlciA9IChvcHRpb25zKSA9PiB7XG5cdEVYUFJFU1NJT05fQ0FDSEUuc2V0dXAob3B0aW9ucyk7XG59O1xuXG5sZXQgaW5pdGlhbENhbGwgPSB0cnVlO1xuXG4vKipcbiAqIENvbXBpbGVzIGEgc3RhdGVtZW50IGludG8gYSBmdW5jdGlvbiB0aGF0IHJ1bnMgaXQgaW5zaWRlIGEgYHdpdGhgIGJsb2NrIG92ZXIgdGhlIGNvbnRleHQuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGFTdGF0ZW1lbnRcbiAqIEByZXR1cm5zIHtGdW5jdGlvbn1cbiAqL1xuY29uc3QgZ2VuZXJhdGUgPSAoYVN0YXRlbWVudCkgPT4ge1xuXHRjb25zdCBjb2RlID0gYFxuXHRyZXR1cm4gKGFzeW5jIGZ1bmN0aW9uICgpe1xuXHRcdHdpdGgoYXJndW1lbnRzWzBdIHx8IHt9KXtcblx0XHRcdHRyeXtcblx0XHRcdFx0cmV0dXJuICR7YVN0YXRlbWVudH1cblx0XHRcdH1jYXRjaChlKXtcblx0XHRcdFx0dGhyb3cgZTtcblx0XHRcdH1cblx0XHR9XG5cdH0pKGFyZ3VtZW50c1swXSB8fCB7fSk7XG5gO1xuXHQvL2NvbnNvbGUubG9nKFwiY29kZVwiLCBjb2RlKTtcblxuXHRyZXR1cm4gbmV3IEZ1bmN0aW9uKGNvZGUpO1xufTtcblxuLyoqXG4gKiBUaGUgY29tcGlsZWQgZnVuY3Rpb24gZm9yIGEgc3RhdGVtZW50LCBmcm9tIHRoZSBjYWNoZSBvciBjb21waWxlZCBub3cgYW5kIGNhY2hlZC5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gYVN0YXRlbWVudFxuICogQHJldHVybnMge0Z1bmN0aW9ufVxuICovXG5jb25zdCBnZXRPckNyZWF0ZUZ1bmN0aW9uID0gKGFTdGF0ZW1lbnQpID0+IHtcblx0aWYgKEVYUFJFU1NJT05fQ0FDSEUuaGFzKGFTdGF0ZW1lbnQpKSB7XG5cdFx0cmV0dXJuIEVYUFJFU1NJT05fQ0FDSEUuZ2V0KGFTdGF0ZW1lbnQpO1xuXHR9XG5cdGNvbnN0IGV4cHJlc3Npb24gPSBnZW5lcmF0ZShhU3RhdGVtZW50KTtcblx0RVhQUkVTU0lPTl9DQUNIRS5zZXQoYVN0YXRlbWVudCwgZXhwcmVzc2lvbik7XG5cdHJldHVybiBleHByZXNzaW9uO1xufTtcblxuLyoqXG4gKiBUaGUgZXhlY3V0ZXI6IHJ1bnMgYSBzdGF0ZW1lbnQgaW5zaWRlIGEgYHdpdGhgIGJsb2NrIG92ZXIgdGhlIGNvbnRleHQsIHNvIGEgc3RhdGVtZW50IGFkZHJlc3NlcyBhXG4gKiBjb250ZXh0IHZhbHVlIGJ5IGl0cyBiYXJlIG5hbWUgLSBzZWUgYFJFQURNRS5tZGAuIFJlZ2lzdGVyZWQgdW5kZXJcbiAqIGBFWEVDVVRFUk5BTUVgIG9uIGltcG9ydC5cbiAqXG4gKiBAZGVwcmVjYXRlZCBiZWNhdXNlIGB3aXRoYCBpczsgYW5ub3VuY2VzIGl0IG9uIHRoZSBmaXJzdCBzdGF0ZW1lbnQgaXQgcnVuc1xuICogQHR5cGUge0V4ZWN1dGVyfVxuICovXG5jb25zdCBFWEVDVVRFUiA9IG5ldyBFeGVjdXRlcih7XG5cdGV4ZWN1dGlvbjogKGFTdGF0ZW1lbnQsIGFDb250ZXh0KSA9PiB7XG5cdFx0aWYgKGluaXRpYWxDYWxsKSB7XG5cdFx0XHRpbml0aWFsQ2FsbCA9IGZhbHNlO1xuXHRcdFx0Y29uc29sZS53YXJuKFxuXHRcdFx0XHRuZXcgRXJyb3IoYFdpdGggU2NvcGVkIGV4cHJlc3Npb24gZXhlY3V0aW9uIGlzIG1hcmtlZCBhcyBkZXByZWNhdGVkLmApLFxuXHRcdFx0KTtcblx0XHR9XG5cblx0XHRjb25zdCBleHByZXNzaW9uID0gZ2V0T3JDcmVhdGVGdW5jdGlvbihhU3RhdGVtZW50KTtcblx0XHRyZXR1cm4gZXhwcmVzc2lvbihhQ29udGV4dCk7XG5cdH0sXG59KTtcbnJlZ2lzdGVyKEVYRUNVVEVSTkFNRSwgRVhFQ1VURVIpO1xuXG5leHBvcnQgZGVmYXVsdCBFWEVDVVRFUjtcbiIsImltcG9ydCBcIi4vV2l0aFNjb3BlZEV4ZWN1dGVyLmpzXCI7XG5pbXBvcnQgXCIuL0NvbnRleHRPYmplY3RFeGVjdXRlci5qc1wiO1xuaW1wb3J0IFwiLi9Db250ZXh0RGVjb25zdHJ1Y3RvckV4ZWN1dGVyLmpzXCI7XG4iLCJpbXBvcnQgeyBsYXp5UHJvbWlzZSB9IGZyb20gXCJAZGVmYXVsdC1qcy9kZWZhdWx0anMtY29tbW9uLXV0aWxzL3NyYy9Qcm9taXNlVXRpbHMuanNcIjtcbmltcG9ydCBEaXJlY3RpdmUgZnJvbSBcIi4vRGlyZWN0aXZlLmpzXCI7XG5pbXBvcnQgVGVtcGxhdGUgZnJvbSBcIi4vVGVtcGxhdGUuanNcIjtcbmltcG9ydCB7IEV4cHJlc3Npb25SZXNvbHZlciB9IGZyb20gXCJAZGVmYXVsdC1qcy9kZWZhdWx0anMtZXhwcmVzc2lvbi1sYW5ndWFnZS9pbmRleC5qc1wiO1xuXG4vKipcbiAqIFxuICogQHBhcmFtIHtUZW1wbGF0ZXxOb2RlTGlzdHxOb2RlfHN0cmluZ30gdGVtcGxhdGUgXG4gKiBAcmV0dXJucyB7SXRlcmFibGU8Tm9kZT58Tm9kZX0gLSB0aGUgdGVtcGxhdGUgY29udGVudCBhcyBOb2RlTGlzdCBvciBOb2RlXG4gKi9cbmNvbnN0IHRvVGVtcGxhdGUgPSAodGVtcGxhdGUpID0+IHtcblx0aWYgKHRlbXBsYXRlIGluc3RhbmNlb2YgVGVtcGxhdGUpIHJldHVybiB0ZW1wbGF0ZS5pbXBvcnRDb250ZW50KCk7XG5cdGVsc2UgaWYgKHR5cGVvZiB0ZW1wbGF0ZSA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIGNyZWF0ZSh0ZW1wbGF0ZSk7XG5cdGVsc2UgaWYgKHRlbXBsYXRlIGluc3RhbmNlb2YgTm9kZSkgcmV0dXJuIHRlbXBsYXRlO1xuXHRlbHNlIGlmICh0ZW1wbGF0ZSBpbnN0YW5jZW9mIE5vZGVMaXN0KSByZXR1cm4gdGVtcGxhdGU7XG5cdGVsc2UgaWYgKHRlbXBsYXRlIGluc3RhbmNlb2YgSFRNTENvbGxlY3Rpb24pIHJldHVybiB0ZW1wbGF0ZTtcblx0ZWxzZSB0aHJvdyBuZXcgRXJyb3IoXCJUZW1wbGF0ZSB0eXBlIGlzIG5vdCBzdXBwb3J0ZWQhXCIpO1xufTtcblxubGV0IGlkID0gMDtcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbnRleHQge1xuXHQjaWQ7XG5cdCNkZXB0aDtcblx0I3BhcmVudDtcblx0I3JlbmRlcmVyO1xuXHQjcm9vdDtcblx0LyoqIEB0eXBlIHtJdGVyYWJsZTxOb2RlPn0gKi8gXG5cdCN0ZW1wbGF0ZTtcblx0I21vZGU7XG5cdCNzdWJjb250ZXh0cztcblx0I3dhaXQ7XG5cdCNpZ25vcmVEaXJlY3RpdmVzO1xuXHQjY2FsbGJhY2tzO1xuXG5cdFxuXHQvKipcblx0ICogQ3JlYXRlcyBhbiBpbnN0YW5jZSBvZiBDb250ZXh0LlxuXHQgKlxuXHQgKiBAY29uc3RydWN0b3Jcblx0ICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnNcblx0ICogQHBhcmFtIHtOb2RlTGlzdH0gW29wdGlvbnMuY29udGVudD1udWxsXSBcblx0ICogQHBhcmFtIHtFeHByZXNzaW9uUmVzb2x2ZXJ9IG9wdGlvbnMucmVzb2x2ZXIgXG5cdCAqIEBwYXJhbSB7aW1wb3J0KFwiLi9SZW5kZXJlci5qc1wiKS5kZWZhdWx0fSBvcHRpb25zLnJlbmRlcmVyIFxuXHQgKiBAcGFyYW0ge1RlbXBsYXRlfHN0cmluZ30gb3B0aW9ucy50ZW1wbGF0ZSBcblx0ICogQHBhcmFtIHtIVE1MRWxlbWVudH0gb3B0aW9ucy5jb250YWluZXIgXG5cdCAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IG9wdGlvbnMucm9vdCBcblx0ICogQHBhcmFtIHtzdHJpbmd9IFtvcHRpb25zLm1vZGU9XCJyZXBsYWNlXCJdIFxuXHQgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBbb3B0aW9ucy50YXJnZXQ9bnVsbF0gXG5cdCAqIEBwYXJhbSB7Q29udGV4dH0gW29wdGlvbnMucGFyZW50PW51bGxdIFxuXHQgKiBAcGFyYW0ge1Byb21pc2U8Pn0gW29wdGlvbnMud2FpdD1udWxsXSBcblx0ICogQHBhcmFtIHtBcnJheTxGdW5jdGlvbj59IFtvcHRpb25zLmNhbGxiYWNrcz1udWxsXSBcblx0ICogQHBhcmFtIHtTZXQ8RGlyZWN0aXZlfHN0cmluZz59IG9wdGlvbnMuaWdub3JlRGlyZWN0aXZlIFxuXHQgKi9cblx0Y29uc3RydWN0b3IoeyBjb250ZW50ID0gbnVsbCwgcmVzb2x2ZXIsIHJlbmRlcmVyLCB0ZW1wbGF0ZSwgY29udGFpbmVyLCByb290LCBtb2RlID0gXCJyZXBsYWNlXCIsIHRhcmdldCA9IG51bGwsIHBhcmVudCA9IG51bGwsIHdhaXQgPSBudWxsLCBjYWxsYmFja3MgPSBudWxsLCBpZ25vcmVEaXJlY3RpdmUgfSkge1xuXHRcdGlmICghcmVzb2x2ZXIpIHRocm93IG5ldyBFcnJvcignUGFyYW1ldGVyIFwicmVzb2x2ZXJcIiBpcyByZXF1aXJlZCEnKTtcblx0XHRpZiAoIXJlbmRlcmVyKSB0aHJvdyBuZXcgRXJyb3IoJ1BhcmFtZXRlciBcInJlbmRlcmVyXCIgaXMgcmVxdWlyZWQhJyk7XG5cdFx0aWYgKCF0ZW1wbGF0ZSkgdGhyb3cgbmV3IEVycm9yKCdQYXJhbWV0ZXIgXCJ0ZW1wbGF0ZVwiIGlzIHJlcXVpcmVkIScpO1xuXHRcdGlmICghY29udGFpbmVyKSB0aHJvdyBuZXcgRXJyb3IoJ1BhcmFtZXRlciBcImNvbnRhaW5lclwiIGlzIHJlcXVpcmVkIScpO1xuXHRcdGlmICghcm9vdCkgdGhyb3cgbmV3IEVycm9yKCdQYXJhbWV0ZXIgXCJyb290XCIgaXMgcmVxdWlyZWQhJyk7XG5cblx0XHR0aGlzLiNpZCA9IHBhcmVudCA/IGAke3BhcmVudC5pZH0tPiR7aWQrK31gIDogYHJvb3Q6OiR7aWQrK31gO1xuXHRcdHRoaXMuI2RlcHRoID0gcGFyZW50ID8gcGFyZW50LmRlcHRoICsgMSA6IDA7XG5cdFx0dGhpcy4jcGFyZW50ID0gcGFyZW50O1xuXHRcdHRoaXMuI3JlbmRlcmVyID0gcmVuZGVyZXI7XG5cdFx0dGhpcy4jcm9vdCA9IHJvb3Q7XG5cdFx0dGhpcy4jdGVtcGxhdGUgPSB0b1RlbXBsYXRlKHRlbXBsYXRlKTtcblx0XHR0aGlzLiNtb2RlID0gbW9kZTtcblx0XHR0aGlzLiNzdWJjb250ZXh0cyA9IG5ldyBTZXQoKTtcblx0XHR0aGlzLiN3YWl0ID0gd2FpdCA/IHdhaXQgOiBsYXp5UHJvbWlzZSgpO1xuXHRcdHRoaXMuI2lnbm9yZURpcmVjdGl2ZXMgPSBpZ25vcmVEaXJlY3RpdmUgaW5zdGFuY2VvZiBTZXQgPyBpZ25vcmVEaXJlY3RpdmUgOiBuZXcgU2V0KCk7XG5cdFx0dGhpcy4jY2FsbGJhY2tzID0gY2FsbGJhY2tzIGluc3RhbmNlb2YgQXJyYXkgPyBjYWxsYmFja3MgOiBbXTtcblxuXHRcdHRoaXMuY29udGVudCA9IGNvbnRlbnQ7XG5cdFx0dGhpcy5jb250YWluZXIgPSBjb250YWluZXI7XG5cdFx0dGhpcy50YXJnZXQgPSB0YXJnZXQ7XG5cdFx0dGhpcy5yZXNvbHZlciA9IHJlc29sdmVyO1xuXG5cdFx0LyogZXhlY3V0aW9uIGZsYWdzICovXG5cdFx0dGhpcy5zdG9wID0gZmFsc2U7XG5cdFx0dGhpcy5pZ25vcmUgPSBmYWxzZTtcblx0XHQvL2NvbnNvbGUubG9nKGBjb250ZXh0PXtcImRlcHRoXCI6JHt0aGlzLmRlcHRofSB9LCBcImlkXCI6ICR7dGhpcy5pZH1gKTtcblx0XHQvL3RoaXMuY3JlYXRldEF0ID0gbmV3IEVycm9yKCk7XG5cblx0XHRpZiAocGFyZW50KSB7XG5cdFx0XHRwYXJlbnQuc3ViY29udGV4dHMuYWRkKHRoaXMpO1xuXHRcdH1cblx0fVxuXG5cdGdldCBpZCgpIHtcblx0XHRyZXR1cm4gdGhpcy4jaWQ7XG5cdH1cblx0Z2V0IGRlcHRoKCkge1xuXHRcdHJldHVybiB0aGlzLiNkZXB0aDtcblx0fVxuXHRnZXQgcGFyZW50KCkge1xuXHRcdHJldHVybiB0aGlzLiNwYXJlbnQ7XG5cdH1cblx0Z2V0IHJlbmRlcmVyKCkge1xuXHRcdHJldHVybiB0aGlzLiNyZW5kZXJlcjtcblx0fVxuXHRnZXQgcm9vdCgpIHtcblx0XHRyZXR1cm4gdGhpcy4jcm9vdDtcblx0fVxuXHQvKipcblx0ICogQHJldHVybnMge0l0ZXJhYmxlPE5vZGU+fE5vZGV9IFxuXHQgKi9cblx0Z2V0IHRlbXBsYXRlKCkge1xuXHRcdHJldHVybiB0aGlzLiN0ZW1wbGF0ZTtcblx0fVxuXHRzZXQgdGVtcGxhdGUodGVtcGxhdGUpe1xuXHRcdHRoaXMuI3RlbXBsYXRlID0gdG9UZW1wbGF0ZSh0ZW1wbGF0ZSk7XG5cdH1cblxuXHRnZXQgbW9kZSgpIHtcblx0XHRyZXR1cm4gdGhpcy4jbW9kZTtcblx0fVxuXHRnZXQgc3ViY29udGV4dHMoKSB7XG5cdFx0cmV0dXJuIHRoaXMuI3N1YmNvbnRleHRzO1xuXHR9XG5cblx0Z2V0IGNsb3NlZCgpIHtcblx0XHRyZXR1cm4gdGhpcy4jd2FpdC5yZXNvbHZlZDtcblx0fVxuXG5cdGlnbm9yZURpcmVjdGl2ZShkaXJlY3RpdmUpIHtcblx0XHRjb25zdCBpZ25vcmVEaXJlY3RpdmVzID0gdGhpcy4jaWdub3JlRGlyZWN0aXZlcztcblx0XHRkaXJlY3RpdmUgaW5zdGFuY2VvZiBEaXJlY3RpdmUgPyBpZ25vcmVEaXJlY3RpdmVzLmFkZChkaXJlY3RpdmUubmFtZSkgOiBpZ25vcmVEaXJlY3RpdmVzLmFkZChkaXJlY3RpdmUpO1xuXHR9XG5cblx0YWNjZXB0RGlyZWN0aXZlKGRpcmVjdGl2ZSkge1xuXHRcdGNvbnN0IGlnbm9yZURpcmVjdGl2ZXMgPSB0aGlzLiNpZ25vcmVEaXJlY3RpdmVzO1xuXHRcdGlmIChkaXJlY3RpdmUgaW5zdGFuY2VvZiBEaXJlY3RpdmUpIHJldHVybiAhKGlnbm9yZURpcmVjdGl2ZXMuaGFzKGRpcmVjdGl2ZS5uYW1lKSB8fCBpZ25vcmVEaXJlY3RpdmVzLmhhcyhkaXJlY3RpdmUpKTtcblxuXHRcdHJldHVybiAhaWdub3JlRGlyZWN0aXZlcy5oYXMoZGlyZWN0aXZlKTtcblx0fVxuXG5cdGZpbmlzaGVkKGNhbGxiYWNrKSB7XG5cdFx0aWYgKHRoaXMucGFyZW50KSB0aGlzLnBhcmVudC5maW5pc2hlZChjYWxsYmFjayk7XG5cdFx0ZWxzZSB0aGlzLnJlYWR5KGNhbGxiYWNrKTtcblx0fVxuXG5cdGFzeW5jIHJlYWR5KGNhbGxiYWNrKSB7XG5cdFx0Y29uc3QgY2FsbGJhY2tzID0gdGhpcy4jY2FsbGJhY2tzO1xuXHRcdGlmIChjYWxsYmFjaykge1xuXHRcdFx0aWYgKGNhbGxiYWNrIGluc3RhbmNlb2YgQXJyYXkpIGNhbGxiYWNrLmZvckVhY2goKGNhbGxiYWNrKSA9PiB0aGlzLnJlYWR5KGNhbGxiYWNrKSk7XG5cdFx0XHRlbHNlIGlmIChjYWxsYmFjayBpbnN0YW5jZW9mIFByb21pc2UpIGNhbGxiYWNrcy5wdXNoKGFzeW5jICgpID0+IGF3YWl0IGNhbGxiYWNrKTtcblx0XHRcdGVsc2UgaWYgKHR5cGVvZiBjYWxsYmFjayA9PT0gXCJmdW5jdGlvblwiKSBjYWxsYmFja3MucHVzaChjYWxsYmFjayk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGNvbnN0IHdhaXQgPSB0aGlzLiN3YWl0O1xuXHRcdFx0aWYgKCF3YWl0LnJlc29sdmVkKSB7XG5cdFx0XHRcdGlmICghdGhpcy5pZ25vcmUpIGZvciAobGV0IGNhbGxiYWNrIG9mIGNhbGxiYWNrcykgYXdhaXQgY2FsbGJhY2sodGhpcyk7XG5cblx0XHRcdFx0Zm9yIChsZXQgY2hpbGQgb2YgdGhpcy5zdWJjb250ZXh0cykgYXdhaXQgY2hpbGQucmVhZHkoKTtcblxuXHRcdFx0XHRpZiAodGhpcy5wYXJlbnQpIHRoaXMucGFyZW50LnN1YmNvbnRleHRzLmRlbGV0ZSh0aGlzKTtcblxuXHRcdFx0XHR3YWl0LnJlc29sdmUodGhpcyk7XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiB3YWl0O1xuXHRcdH1cblx0fVxuXG5cdHN1YkNvbnRleHQoeyByZXNvbHZlciA9IHRoaXMucmVzb2x2ZXIsIHJlbmRlcmVyID0gdGhpcy5yZW5kZXJlciwgdGVtcGxhdGUgPSB0aGlzLnRlbXBsYXRlLCBjb250YWluZXIgPSB0aGlzLmNvbnRhaW5lciwgcm9vdCA9IHRoaXMucm9vdCwgbW9kZSA9IHRoaXMubW9kZSwgdGFyZ2V0ID0gdGhpcy50YXJnZXQsIGlnbm9yZURpcmVjdGl2ZSA9IG51bGwgfSA9IHt9KSB7XG5cdFx0cmV0dXJuIG5ldyBDb250ZXh0KHsgcmVzb2x2ZXIsIHJlbmRlcmVyLCB0ZW1wbGF0ZSwgY29udGFpbmVyLCBtb2RlLCByb290LCB0YXJnZXQsIHBhcmVudDogdGhpcywgaWdub3JlRGlyZWN0aXZlIH0pO1xuXHR9XG5cblx0Y2xvbmUoeyBjb250ZW50ID0gdGhpcy5jb250ZW50LCB0ZW1wbGF0ZSA9IHRoaXMudGVtcGxhdGUsIGNvbnRhaW5lciA9IHRoaXMuY29udGFpbmVyLCByb290ID0gdGhpcy5yb290LCBtb2RlID0gdGhpcy5tb2RlLCB0YXJnZXQgPSB0aGlzLnRhcmdldCwgaWdub3JlRGlyZWN0aXZlID0gdGhpcy4jaWdub3JlRGlyZWN0aXZlcyB9ID0ge30pIHtcblx0XHRyZXR1cm4gbmV3IENvbnRleHQoeyBjb250ZW50LCBcblx0XHRcdHJlc29sdmVyOiB0aGlzLnJlc29sdmVyLCBcblx0XHRcdHJlbmRlcmVyOiB0aGlzLnJlbmRlcmVyLCBcblx0XHRcdHRlbXBsYXRlLCBcblx0XHRcdGNvbnRhaW5lciwgXG5cdFx0XHRyb290LCBcblx0XHRcdG1vZGUsIFxuXHRcdFx0dGFyZ2V0LCBcblx0XHRcdGlnbm9yZURpcmVjdGl2ZSxcblx0XHRcdHdhaXQ6IHRoaXMuI3dhaXQsXG5cdFx0XHRjYWxsYmFja3M6IHRoaXMuI2NhbGxiYWNrc1xuXHRcdCB9KTtcblx0fVxuXG5cdHRvUmVuZGVyT3B0aW9uKHsgcmVzb2x2ZXIgPSB0aGlzLnJlc29sdmVyLCByZW5kZXJlciA9IHRoaXMucmVuZGVyZXIsIHRlbXBsYXRlID0gdGhpcy50ZW1wbGF0ZSwgY29udGFpbmVyID0gdGhpcy5jb250YWluZXIsIHJvb3QgPSB0aGlzLnJvb3QsIG1vZGUgPSB0aGlzLm1vZGUsIHRhcmdldCA9IHRoaXMudGFyZ2V0LCBpZ25vcmVEaXJlY3RpdmUgPSBudWxsIH0gPSB7fSkge1xuXHRcdHJldHVybiB7IHJlc29sdmVyLCByZW5kZXJlciwgdGVtcGxhdGUsIGNvbnRhaW5lciwgbW9kZSwgcm9vdCwgdGFyZ2V0LCBwYXJlbnQ6IG51bGwsIGlnbm9yZURpcmVjdGl2ZSB9O1xuXHR9XG59XG4iLCJpbXBvcnQgQ29udGV4dCBmcm9tIFwiLi9Db250ZXh0LmpzXCI7XG5cblxuY29uc3QgREVGSU5FRF9ESVJFQ1RJVkVTID0gW107XG5cblxuLyoqXG4gKiBAcGFyYW0ge29iamVjdH0gb3B0aW9uc1xuICogQHBhcmFtIHtEaXJlY3RpdmV9IG9wdGlvbnMuZGlyZWN0aXZlIFxuICovXG5jb25zdCBkZWZpbmVEaXJlY3RpdmUgPSAoeyBkaXJlY3RpdmUgfSkgPT4ge1xuXHRpZiAoIShkaXJlY3RpdmUgaW5zdGFuY2VvZiBEaXJlY3RpdmUpKVxuXHRcdHRocm93IG5ldyBFcnJvcihcIkltcGxlbWVudGF0aW9uIGRvc24ndCBleHRlbmQgRGlyZWN0aXZlIGNsYXNzIVwiKTtcblxuXHRpZiAoZGlyZWN0aXZlLnJhbmsgPCBEaXJlY3RpdmUuTUlOX1JBTkspXG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiVGhlIHJhbmsgb2YgYSBkaXJlY3RpdmUgY2FuJ3QgYmUgbG93ZXIgYXMgXCIgKyBEaXJlY3RpdmUuTUlOX1JBTksgKyBcIiFcIik7XG5cblx0aWYgKGRpcmVjdGl2ZS5yYW5rID4gRGlyZWN0aXZlLk1BWF9SQU5LKVxuXHRcdHRocm93IG5ldyBFcnJvcihcIlRoZSByYW5rIG9mIGEgZGlyZWN0aXZlIGNhbid0IGJlIGdyYXRlciBhcyBcIiArIERpcmVjdGl2ZS5NQVhfUkFOSyArIFwiIVwiKTtcblxuXHRERUZJTkVEX0RJUkVDVElWRVMucHVzaChkaXJlY3RpdmUpO1xuXHRERUZJTkVEX0RJUkVDVElWRVMuc29ydCgoYSwgYikgPT4ge1xuXHRcdGNvbnN0IHBoYXNlID0gYS5waGFzZSAtIGIucGhhc2U7XG5cdFx0aWYocGhhc2UgPT0gMClcblx0XHRcdHJldHVybiBhLnJhbmsgLSBiLnJhbms7XG5cdFx0XHRcblx0XHRyZXR1cm4gcGhhc2U7XG5cdH0pO1xufTtcblxuLyoqXG4gKiBAcmVhZG9ubHlcbiAqIEBlbnVtIHtudW1iZXJ9XHRcbiAqL1xuZXhwb3J0IGNvbnN0IFBIQVNFID0ge1xuXHRpbml0OiAwLFxuXHRkYXRhOiAxLFxuXHR0ZW1wbGF0ZTogMixcblx0Y29udGVudDogMyxcblx0ZmluaXNoOiA0XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEaXJlY3RpdmUge1xuXG5cdC8qKiBAZW51bSB7UEhBU0V9ICovXG5cdHN0YXRpYyBnZXQgUEhBU0UoKSB7IHJldHVybiBQSEFTRSB9O1xuXHQvKiogQGVudW0ge251bWJlcn0gKi9cblx0c3RhdGljIGdldCBNSU5fUkFOSygpIHsgcmV0dXJuIDAgfTtcblx0LyoqIEBlbnVtIHtudW1iZXJ9ICovXG5cdHN0YXRpYyBnZXQgTUFYX1JBTksoKSB7IHJldHVybiAxMDAwMDAgfTtcblxuXHRjb25zdHJ1Y3RvcigpIHsgfTtcblxuXHQvKipcblx0ICogQGFic3RyYWN0IFxuXHQgKiBAZW51bSB7c3RyaW5nfSBcblx0ICovXG5cdGdldCBuYW1lKCkgeyB9XG5cdC8qKiBcblx0ICogQGFic3RyYWN0XG5cdCAqIEBlbnVtIHtudW1iZXJ9IFxuXHQgKi9cblx0Z2V0IHJhbmsoKSB7IH1cblx0LyoqXG5cdCAqIEBhYnN0cmFjdCBcblx0ICogQGVudW0ge1BIQVNFfSBcblx0ICovXG5cdGdldCBwaGFzZSgpIHtyZXR1cm4gUEhBU0UuZmluaXNofVxuXG5cdC8qKlxuXHQgKiBAYWJzdHJhY3Rcblx0ICogQHBhcmFtIHtDb250ZXh0fSBjb250ZXh0IFxuXHQgKiBAcmV0dXJucyBcblx0ICovXG5cdGFzeW5jIGV4ZWN1dGUoY29udGV4dCkge1xuXHRcdHJldHVybiBjb250ZXh0O1xuXHR9XG5cblx0LyoqXG5cdCAqIEBzdGF0aWNcblx0ICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnNcblx0ICogQHBhcmFtIHtEaXJlY3RpdmV9IG9wdGlvbnMuZGlyZWN0aXZlIFxuXHQgKi9cblx0c3RhdGljIGRlZmluZShvcHRpb24pIHtcblx0XHRkZWZpbmVEaXJlY3RpdmUob3B0aW9uKTtcblx0fVxuXG5cdFxuXHQvKipcblx0ICogQHN0YXRpY1xuXHQgKiBAcmVhZG9ubHlcblx0ICogQHR5cGUge0FycmF5PERpcmVjdGl2ZT59XG5cdCAqL1xuXHRzdGF0aWMgZ2V0IGRpcmVjdGl2ZXMoKSB7XG5cdFx0cmV0dXJuIERFRklORURfRElSRUNUSVZFUztcblx0fVxufTsiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBEaXJlY3RpdmVFbGVtZW50IGV4dGVuZHMgSFRNTEVsZW1lbnR7XG5cdGNvbnN0cnVjdG9yKHtoaWRkZW4gPSB0cnVlfSA9IHt9KXtcblx0XHRzdXBlcigpO1xuXHRcdHRoaXMuaGlkZGVuID0gaGlkZGVuO1xuXHR9XG5cdFxuXHQvKipcblx0ICogRXhlY3V0ZSB0aGUgZGlyZWN0aXZlIGVsZW1lbnQuXG5cdCAqIEBwYXJhbSB7aW1wb3J0KFwiLi9Db250ZXh0LmpzXCIpLmRlZmF1bHR9IGFDb250ZXh0IFxuXHQgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBhVGVtcGxhdGVcblx0ICogQHBhcmFtIHtpbXBvcnQoXCIuL1JlbmRlcmVyLmpzXCIpLmRlZmF1bHR9IGFSZW5kZXJlciBcblx0ICogXG5cdCAqIEByZXR1cm5zIHtQcm9taXNlPGltcG9ydChcIi4vQ29udGV4dC5qc1wiKS5kZWZhdWx0Pn1cblx0ICovXG5cdGFzeW5jIGV4ZWN1dGUoYUNvbnRleHQsIGFUZW1wbGF0ZSwgYVJlbmRlcmVyKXtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJleGVjdXRlIG1ldGhvZCBtdXN0IGJlIGltcGxlbWVudGVkIVwiKTtcblx0fTtcdFxufSIsImltcG9ydCBcIkBkZWZhdWx0LWpzL2RlZmF1bHRqcy1leHRkb21cIjtcbmltcG9ydCBFeHByZXNzaW9uUmVzb2x2ZXIgZnJvbSBcIkBkZWZhdWx0LWpzL2RlZmF1bHRqcy1leHByZXNzaW9uLWxhbmd1YWdlL3NyYy9FeHByZXNzaW9uUmVzb2x2ZXIuanNcIjtcbmltcG9ydCBUZW1wbGF0ZSBmcm9tIFwiLi9UZW1wbGF0ZS5qc1wiO1xuaW1wb3J0IENvbnRleHQgZnJvbSBcIi4vQ29udGV4dC5qc1wiO1xuaW1wb3J0IERpcmVjdGl2ZSBmcm9tIFwiLi9EaXJlY3RpdmUuanNcIjtcbmltcG9ydCBEaXJlY3RpdmVFbGVtZW50IGZyb20gXCIuL0RpcmVjdGl2ZUVsZW1lbnQuanNcIjtcbmltcG9ydCBcIi4vZGlyZWN0aXZlcy9pbmRleC5qc1wiO1xuaW1wb3J0IFwiLi9lbGVtZW50cy9pbmRleC5qc1wiO1xuXG5leHBvcnQgY29uc3QgU0NPUEVTID0ge1xuXHRhcHBsaWNhdGlvbjogXCJhcHBsaWNhdGlvblwiLFxuXHRkYXRhOiBcImRhdGFcIixcblx0cmVuZGVyOiBcInJlbmRlclwiLFxuXHRjb250YWluZXI6IFwiY29udGFpbmVyXCIsXG5cdG5vZGU6IFwibm9kZVwiLFxufTtcblxuY29uc3QgQVBQTElDQVRJT05fU0NPUEVfUkVTT0xWRVIgPSBuZXcgRXhwcmVzc2lvblJlc29sdmVyKHsgbmFtZTogU0NPUEVTLmFwcGxpY2F0aW9uIH0pO1xuXG5cbi8qKlxuICogQHJlYWRvbmx5XG4gKiBAZW51bSB7c3RyaW5nfVxuICovXG5jb25zdCBNT0RFVFlQRVMgPSBbXCJyZXBsYWNlXCIsIFwiYXBwZW5kXCIsIFwicHJlcGVuZFwiXTtcblxuY29uc3QgTU9ERVdPUktFUiA9IHtcblx0cmVwbGFjZTogYXN5bmMgKHsgY29udGFpbmVyLCB0YXJnZXQgPSBudWxsLCBjb250ZW50IH0pID0+IHtcblx0XHRpZiAodGFyZ2V0KSB7XG5cdFx0XHR0YXJnZXQucmVwbGFjZShjb250ZW50KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Y29udGFpbmVyLmVtcHR5KCk7XG5cdFx0XHRjb250YWluZXIuYXBwZW5kKGNvbnRlbnQpO1xuXHRcdH1cblx0fSxcblx0YXBwZW5kOiBhc3luYyAoeyBjb250YWluZXIsIHRhcmdldCA9IG51bGwsIGNvbnRlbnQgfSkgPT4ge1xuXHRcdGlmICh0YXJnZXQpIHRhcmdldC5hZnRlcihjb250ZW50KTtcblx0XHRlbHNlIGNvbnRhaW5lci5hcHBlbmQoY29udGVudCk7XG5cdH0sXG5cdHByZXBlbmQ6IGFzeW5jICh7IGNvbnRhaW5lciwgdGFyZ2V0ID0gbnVsbCwgY29udGVudCB9KSA9PiB7XG5cdFx0aWYgKHRhcmdldCkgdGFyZ2V0LmJlZm9yZShjb250ZW50KTtcblx0XHRlbHNlIGNvbnRhaW5lci5wcmVwZW5kKGNvbnRlbnQpO1xuXHR9LFxufTtcblxuLyoqXG4gKiBcbiAqIEBwYXJhbSB7VGVtcGxhdGV8c3RyaW5nfFVSTHxOb2RlfE5vZGVMaXN0fEhUTUxDb2xsZWN0aW9ufSBhVGVtcGxhdGUgLSBzb3VyY2Ugb2YgdGhlIHRlbXBsYXRlIHRlbXBsYXRlIFxuICogQHBhcmFtIHtSZW5kZXJlcn0gYVJlbmRlcmVyIFxuICogQHJldHVybnMge1Byb21pc2U8Tm9kZUxpc3Q+fSAtIHRoZSBpbXBvcnRlZCB0ZW1wbGF0ZSBjb250ZW50XG4gKi9cbmNvbnN0IGxvYWRUZW1wbGF0ZUNvbnRlbnQgPSBhc3luYyAoYVRlbXBsYXRlLCBhUmVuZGVyZXIpID0+IHtcblx0aWYgKGFUZW1wbGF0ZSkge1xuXHRcdGFUZW1wbGF0ZSA9IGF3YWl0IFRlbXBsYXRlLmxvYWQoYVRlbXBsYXRlKTtcblx0XHRyZXR1cm4gYVRlbXBsYXRlLmltcG9ydENvbnRlbnQoKTtcblx0fSBlbHNlIGlmIChhUmVuZGVyZXIudGVtcGxhdGUpIHtcblx0XHRyZXR1cm4gYXdhaXQgYVJlbmRlcmVyLnRlbXBsYXRlLmltcG9ydENvbnRlbnQoKTtcblx0fVxuXG5cdHRocm93IG5ldyBFcnJvcihcIk5vIGNvbnRlbnQgdGVtcGxhdGUgc3BlY2lmaWVkIVwiKTtcbn07XG5cbmNvbnN0IGFkZENvbnRlbnQgPSBhc3luYyAoY29udGV4dCkgPT4ge1xuXHRpZiAoY29udGV4dC5jb250ZW50KSB7XG5cdFx0Y29uc3QgbW9kZXdvcmtlciA9IE1PREVXT1JLRVJbY29udGV4dC5tb2RlXTtcblx0XHRpZiAoIW1vZGV3b3JrZXIpIHRocm93IG5ldyBFcnJvcignVGhlIFwiJyArIGNvbnRleHQubW9kZSArICdcIiBpcyBub3Qgc3VwcG9ydGVkIScpO1xuXHRcdGF3YWl0IG1vZGV3b3JrZXIoY29udGV4dCk7XG5cdH1cbn07XG5cbmNvbnN0IHJlbmRlckNvbnRhaW5lciA9IGFzeW5jIChjb250ZXh0KSA9PiB7XG5cdGxldCB7IHRlbXBsYXRlLCByZXNvbHZlciB9ID0gY29udGV4dDtcblx0aWYgKCF0ZW1wbGF0ZSB8fCB0ZW1wbGF0ZS5sZW5ndGggPT0gMCkgcmV0dXJuIGNvbnRleHQ7XG5cblx0bGV0IGNvbnRlbnQgPSBbXTtcblx0Zm9yIChsZXQgbm9kZVRlbXBsYXRlIG9mIHRlbXBsYXRlKSB7XG5cdFx0bm9kZVRlbXBsYXRlLm5vcm1hbGl6ZSgpO1xuXHRcdGNvbnN0IG5vZGVSZXNvbHZlciA9IG5ldyBFeHByZXNzaW9uUmVzb2x2ZXIoeyBuYW1lOiBTQ09QRVMubm9kZSwgY29udGV4dDogbnVsbCwgcGFyZW50OiByZXNvbHZlciB9KTtcblx0XHRjb25zdCBub2RlQ29udGV4dCA9IGF3YWl0IHJlbmRlck5vZGUoY29udGV4dC5zdWJDb250ZXh0KHsgdGVtcGxhdGU6IG5vZGVUZW1wbGF0ZSwgcmVzb2x2ZXI6IG5vZGVSZXNvbHZlciB9KSk7XG5cdFx0YXdhaXQgbm9kZUNvbnRleHQucmVhZHkoKTtcblx0XHRjb25zdCBub2RlID0gbm9kZUNvbnRleHQuY29udGVudDtcblx0XHRpZiAobm9kZSkge1xuXHRcdFx0aWYgKG5vZGUgaW5zdGFuY2VvZiBBcnJheSkgY29udGVudCA9IGNvbnRlbnQuY29uY2F0KG5vZGUpO1xuXHRcdFx0aWYgKG5vZGUgaW5zdGFuY2VvZiBOb2RlTGlzdCB8fCBub2RlIGluc3RhbmNlb2YgSFRNTENvbGxlY3Rpb24pIGNvbnRlbnQgPSBjb250ZW50LmNvbmNhdChBcnJheS5mcm9tKG5vZGUpKTtcblx0XHRcdGVsc2UgaWYgKG5vZGUgaW5zdGFuY2VvZiBOb2RlKSBjb250ZW50LnB1c2gobm9kZSk7XG5cdFx0fVxuXHR9XG5cblx0Y29udGV4dC5jb250ZW50ID0gY29udGVudC5sZW5ndGggIT0gMCA/IGNvbnRlbnQgOiBudWxsO1xuXHRyZXR1cm4gY29udGV4dDtcbn07XG5cbi8qKlxuICogQ3JlYXRlcyBhbiBlbGVtZW50IG9mIHRoZSBjbGFzcyBvZiBhIGN1c3RvbSB0YWcsIHdpdGggdGhlIGF0dHJpYnV0ZXMgb2YgdGhlIHRhZyBhbmQgd2l0aG91dCBpdHNcbiAqIGNoaWxkcmVuLiBUaGUgbm9kZSBpdHNlbGYgaXMgbm90IGFuIGVsZW1lbnQgb2YgaXRzIGNsYXNzOiBpdCBjb21lcyBmcm9tIHRoZSBjb250ZW50IG9mIGFcbiAqIGA8dGVtcGxhdGU+YCwgd2hpY2ggaGFzIG5vIGN1c3RvbSBlbGVtZW50IHJlZ2lzdHJ5LlxuICpcbiAqIEBwYXJhbSB7Tm9kZX0gYU5vZGUgLSBhIG5vZGUgb2YgdGhlIHRlbXBsYXRlXG4gKiBAcmV0dXJucyB7RGlyZWN0aXZlRWxlbWVudHxudWxsfSB0aGUgZWxlbWVudCwgb3IgYG51bGxgIGlmIHRoZSBub2RlIGlzIG5vIGN1c3RvbSB0YWdcbiAqL1xuY29uc3QgdG9EaXJlY3RpdmVFbGVtZW50ID0gKGFOb2RlKSA9PiB7XG5cdGlmICghKGFOb2RlIGluc3RhbmNlb2YgRWxlbWVudCkpIHJldHVybiBudWxsO1xuXHRjb25zdCB0eXBlID0gY3VzdG9tRWxlbWVudHMuZ2V0KGFOb2RlLmxvY2FsTmFtZSk7XG5cdHJldHVybiB0eXBlICYmIHR5cGUucHJvdG90eXBlIGluc3RhbmNlb2YgRGlyZWN0aXZlRWxlbWVudCA/IGRvY3VtZW50LmltcG9ydE5vZGUoYU5vZGUpIDogbnVsbDtcbn07XG5cbi8qKlxuICogQGFzeW5jXG4gKiBAcGFyYW0ge0NvbnRleHR9IGFDb250ZXh0IFxuICogQHJldHVybnMge0NvbnRleHR9IFxuICovXG5jb25zdCByZW5kZXJOb2RlID0gYXN5bmMgKGFDb250ZXh0KSA9PiB7XG5cdHRyeSB7XG5cdFx0Y29uc3QgeyB0ZW1wbGF0ZSwgcmVuZGVyZXIgfSA9IGFDb250ZXh0O1xuXHRcdGNvbnN0IGRpcmVjdGl2ZUVsZW1lbnQgPSB0b0RpcmVjdGl2ZUVsZW1lbnQodGVtcGxhdGUpO1xuXHRcdGlmIChkaXJlY3RpdmVFbGVtZW50KSBhQ29udGV4dCA9IGF3YWl0IGRpcmVjdGl2ZUVsZW1lbnQuZXhlY3V0ZShhQ29udGV4dCwgdGVtcGxhdGUsIHJlbmRlcmVyKTtcblx0XHRlbHNlICBhQ29udGV4dCA9IGF3YWl0IGV4ZWN1dGVEaXJlY3RpdmVzKGFDb250ZXh0KTtcblxuXHRcdGNvbnN0IHsgaWdub3JlLCBjb250ZW50IH0gPSBhQ29udGV4dDtcblxuXHRcdGlmICghaWdub3JlICYmIGNvbnRlbnQpIHtcblx0XHRcdGNvbnN0IHsgcmVzb2x2ZXIgfSA9IGFDb250ZXh0O1xuXHRcdFx0Y29uc3Qgc3ViVGVtcGxhdGUgPSBhQ29udGV4dC50ZW1wbGF0ZS5jaGlsZE5vZGVzO1xuXHRcdFx0aWYgKHN1YlRlbXBsYXRlICYmIHN1YlRlbXBsYXRlLmxlbmd0aCA+IDApIHtcblx0XHRcdFx0Y29uc3QgY29udGFpbmVyUmVzb2x2ZXIgPSBuZXcgRXhwcmVzc2lvblJlc29sdmVyKHsgbmFtZTogU0NPUEVTLmNvbnRhaW5lciwgY29udGV4dDogbnVsbCwgcGFyZW50OiByZXNvbHZlciB9KTtcblx0XHRcdFx0Y29uc3Qgc3ViQ29udGV4dCA9IGF3YWl0IHJlbmRlcmVyLnJlbmRlcihhQ29udGV4dC5zdWJDb250ZXh0KHsgY29udGFpbmVyOiBjb250ZW50LCB0ZW1wbGF0ZTogc3ViVGVtcGxhdGUsIHJlc29sdmVyOiBjb250YWluZXJSZXNvbHZlciwgbW9kZTogXCJhcHBlbmRcIiB9KSk7XG5cdFx0XHRcdGF3YWl0IHN1YkNvbnRleHQucmVhZHkoKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRpZiAoYUNvbnRleHQuY29udGVudCAmJiBhQ29udGV4dC5jb250ZW50LnRhZ05hbWUgJiYgYUNvbnRleHQuY29udGVudC50YWdOYW1lID09IFwiSlNUTFwiKSBhQ29udGV4dC5jb250ZW50ID0gYUNvbnRleHQuY29udGVudC5jaGlsZE5vZGVzOyAvL3NwZWNpYWwgY2FzZSB0byBzdXBwb3J0IHRoZSBvbGQgXCI8anN0bD5cIiB0YWcuXG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRjb25zb2xlLmVycm9yKFwiZXJyb3IgYXQgcmVuZGVyIG5vZGU6XCIsIGUsIGFDb250ZXh0KTtcblx0fVxuXHRyZXR1cm4gYUNvbnRleHQ7XG59O1xuXG5cblxuLyoqXG4gKiBAYXN5bmNcbiAqIEBwYXJhbSB7Q29udGV4dH0gY29udGV4dCBcbiAqIEByZXR1cm5zIHtDb250ZXh0fSBcbiAqL1xuY29uc3QgZXhlY3V0ZURpcmVjdGl2ZXMgPSBhc3luYyAoY29udGV4dCkgPT4ge1xuXHRjb25zdCBkaXJlY3RpdmVzID0gRGlyZWN0aXZlLmRpcmVjdGl2ZXM7XG5cdGNvbnN0IGxlbmd0aCA9IGRpcmVjdGl2ZXMubGVuZ3RoO1xuXHRmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aCAmJiAhY29udGV4dC5zdG9wOyBpKyspIHtcblx0XHRjb25zdCBkaXJlY3RpdmUgPSBkaXJlY3RpdmVzW2ldO1xuXHRcdHRyeSB7XG5cdFx0XHRpZiAoY29udGV4dC5hY2NlcHREaXJlY3RpdmUoZGlyZWN0aXZlKSkgYXdhaXQgZGlyZWN0aXZlLmV4ZWN1dGUoY29udGV4dCk7XG5cdFx0fSBjYXRjaCAoZSkge1xuXHRcdFx0Y29uc29sZS5lcnJvcihcImVycm9yIGF0IGRpcmVjdGl2ZTpcIiwgZSwgZGlyZWN0aXZlLCBjb250ZXh0KTtcblx0XHR9XG5cdH1cblx0cmV0dXJuIGNvbnRleHQ7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZW5kZXJlciB7XG5cblx0I3RlbXBsYXRlO1xuXHQjcmVzb2x2ZXI7XG5cblx0LyoqXG5cdCAqIENyZWF0ZXMgYSByZW5kZXJlci5cblx0ICpcblx0ICogQHBhcmFtIHtvYmplY3R9IFthbk9wdGlvbl1cblx0ICogQHBhcmFtIHtUZW1wbGF0ZX0gW2FuT3B0aW9uLnRlbXBsYXRlXSAtIHRoZSB0ZW1wbGF0ZSByZW5kZXJlZCwgaWYgYHJlbmRlcmAgZ2V0cyBub25lXG5cdCAqIEBwYXJhbSB7b2JqZWN0fSBbYW5PcHRpb24uZGF0YV0gLSBiYXNlIGRhdGEsIGF2YWlsYWJsZSBpbiBldmVyeSByZW5kZXJpbmdcblx0ICogQHRocm93cyB7RXJyb3J9IGlmIGB0ZW1wbGF0ZWAgaXMgbm90IGEgYFRlbXBsYXRlYFxuXHQgKi9cblx0Y29uc3RydWN0b3IoeyB0ZW1wbGF0ZSwgZGF0YSB9ID0ge30pIHtcblx0XHRpZiAodGVtcGxhdGUgJiYgISh0ZW1wbGF0ZSBpbnN0YW5jZW9mIFRlbXBsYXRlKSkgdGhyb3cgbmV3IEVycm9yKFwidGVtcGxhdGUgbXVzdCBiZSBhbiBpbnN0YW5jZSBvZiBUZW1wbGF0ZSFcIik7XG5cblx0XHR0aGlzLiN0ZW1wbGF0ZSA9IHRlbXBsYXRlO1xuXHRcdHRoaXMuI3Jlc29sdmVyID0gbmV3IEV4cHJlc3Npb25SZXNvbHZlcih7IG5hbWU6IFNDT1BFUy5kYXRhLCBjb250ZXh0OiBkYXRhID8gZGF0YSA6IHt9LCBwYXJlbnQ6IEFQUExJQ0FUSU9OX1NDT1BFX1JFU09MVkVSIH0pO1xuXHR9XG5cblx0Z2V0IHRlbXBsYXRlKCkge1xuXHRcdHJldHVybiB0aGlzLiN0ZW1wbGF0ZTtcblx0fVxuXHRcblx0Z2V0IHJlc29sdmVyKCkge1xuXHRcdHJldHVybiB0aGlzLiNyZXNvbHZlcjtcblx0fVxuXG5cdC8qKlxuXHQgKiAgQHR5cGVkZWYge29iamVjdH0gUmVuZGVyT3B0aW9uc1xuXHQgKiAgQHByb3BlcnR5IHtIVE1MRWxlbWVudH0gY29udGFpbmVyIC0gdGhlIGNvbnRhaW5lciB3aGVyZSB0aGUgdGVtcGxhdGUgaXMgcmVuZGVyZWRcblx0ICogIEBwcm9wZXJ0eSB7b2JqZWN0fSBbZGF0YV0gLSBiYXNlIGRhdGEsIGF2YWlsYWJsZSBpbiBldmVyeSByZW5kZXJpbmdcblx0ICogIEBwcm9wZXJ0eSB7VGVtcGxhdGV8c3RyaW5nfFVSTHxOb2RlfE5vZGVMaXN0fEhUTUxDb2xsZWN0aW9ufSBbdGVtcGxhdGVdIC0gc291cmNlIG9mIHRoZSB0ZW1wbGF0ZVxuXHQgKiAgQHByb3BlcnR5IHtNT0RFVFlQRVN9IFttb2RlXSAtIGhvdyB0byBhZGQgdGhlIGNvbnRlbnQgdG8gdGhlIGNvbnRhaW5lcjogXCJyZXBsYWNlXCIsIFwiYXBwZW5kXCIgb3IgXCJwcmVwZW5kXCJcblx0ICogIEBwcm9wZXJ0eSB7SFRNTEVsZW1lbnR9IFtyb290XSAtIHRoZSByb290IGVsZW1lbnQgb2YgdGhlIHJlbmRlcmluZywgZGVmYXVsdHMgdG8gYGNvbnRhaW5lcmBcblx0ICogIEBwcm9wZXJ0eSB7SFRNTEVsZW1lbnR9IFt0YXJnZXRdIC0gdGhlIHRhcmdldCBlbGVtZW50IG9mIHRoZSByZW5kZXJpbmcsIGRlZmF1bHRzIHRvIGBudWxsYFxuXHQqL1xuXG5cdC8qKlxuXHQgKiBSZW5kZXJzIGEgdGVtcGxhdGUgaW50byBhIGNvbnRhaW5lci5cblx0ICogXG5cdCAqIEBwYXJhbSB7UmVuZGVyT3B0aW9uc3xDb250ZXh0fSBhQ29udGV4dCBcblx0ICogQHJldHVybnMge1Byb21pc2U8Q29udGV4dD59XG5cdCAqL1xuXHRhc3luYyByZW5kZXIoYUNvbnRleHQpIHtcblx0XHQvKiogQHR5cGUge0NvbnRleHR9ICovXG5cdFx0bGV0IGNvbnRleHQgPSBudWxsO1xuXHRcdGNvbnN0IGNhbGxlZFdpdGhDb250ZXh0ID0gYUNvbnRleHQgaW5zdGFuY2VvZiBDb250ZXh0O1xuXHRcdGlmICghY2FsbGVkV2l0aENvbnRleHQpIHtcblx0XHRcdGxldCB7IHRlbXBsYXRlID0gbnVsbCwgZGF0YSA9IG51bGwsIGNvbnRhaW5lciwgcm9vdCwgbW9kZSwgdGFyZ2V0IH0gPSBhQ29udGV4dDtcblx0XHRcdHRlbXBsYXRlID0gYXdhaXQgbG9hZFRlbXBsYXRlQ29udGVudCh0ZW1wbGF0ZSwgdGhpcyk7XG5cdFx0XHRjb25zdCByZXNvbHZlciA9IG5ldyBFeHByZXNzaW9uUmVzb2x2ZXIoeyBuYW1lOiBTQ09QRVMucmVuZGVyLCBjb250ZXh0OiBkYXRhLCBwYXJlbnQ6IHRoaXMucmVzb2x2ZXIgfSk7XG5cdFx0XHRjb250ZXh0ID0gbmV3IENvbnRleHQoeyByZXNvbHZlciwgcmVuZGVyZXI6IHRoaXMsIHRlbXBsYXRlOiB0ZW1wbGF0ZSwgY29udGFpbmVyLCByb290OiByb290ID8gcm9vdCA6IGNvbnRhaW5lciwgbW9kZTogbW9kZSA/IG1vZGUgOiBcInJlcGxhY2VcIiwgdGFyZ2V0IH0pO1xuXHRcdH0gZWxzZSBpZiAoYUNvbnRleHQuY2xvc2VkKSB0aHJvdyBuZXcgRXJyb3IoXCJjYWxsaW5nIHdpdGggY2xvc2VkIGNvbnRleHRcIiwgYUNvbnRleHQpO1xuXHRcdGVsc2UgY29udGV4dCA9IGFDb250ZXh0O1xuXG5cdFx0XG5cblx0XHRjb25zdCB0ZW1wbGF0ZSA9IGNvbnRleHQudGVtcGxhdGU7XG5cdFx0aWYgKHRlbXBsYXRlIGluc3RhbmNlb2YgTm9kZSkgY29udGV4dCA9IGF3YWl0IHJlbmRlck5vZGUoY29udGV4dCk7XG5cdFx0ZWxzZSBjb250ZXh0ID0gYXdhaXQgcmVuZGVyQ29udGFpbmVyKGNvbnRleHQpO1xuXHRcdFxuXHRcdGF3YWl0IGFkZENvbnRlbnQoY29udGV4dCk7XG5cblx0XHRpZiAoIWNhbGxlZFdpdGhDb250ZXh0KVxuXHRcdFx0YXdhaXQgY29udGV4dC5yZWFkeSgpO1xuXG5cdFx0cmV0dXJuIGNvbnRleHQ7XG5cdH1cblxuXHQvKipcblx0ICogQ3JlYXRlcyBhIHJlbmRlcmVyIGFuZCBsb2FkcyBpdHMgdGVtcGxhdGUgd2l0aCBgVGVtcGxhdGUubG9hZGAgZmlyc3QuXG5cdCAqXG5cdCAqIEBzdGF0aWNcblx0ICogQGFzeW5jXG5cdCAqIEBwYXJhbSB7b2JqZWN0fSBbYW5PcHRpb25dXG5cdCAqIEBwYXJhbSB7VGVtcGxhdGV8c3RyaW5nfFVSTHxOb2RlfE5vZGVMaXN0fEhUTUxDb2xsZWN0aW9ufFByb21pc2U8VGVtcGxhdGV8c3RyaW5nfFVSTHxOb2RlfE5vZGVMaXN0fEhUTUxDb2xsZWN0aW9uPn0gW2FuT3B0aW9uLnRlbXBsYXRlXSAtIHNvdXJjZSBvZiB0aGUgdGVtcGxhdGVcblx0ICogQHBhcmFtIHtvYmplY3R9IFthbk9wdGlvbi5kYXRhXSAtIGJhc2UgZGF0YSwgYXZhaWxhYmxlIGluIGV2ZXJ5IHJlbmRlcmluZ1xuXHQgKiBAcmV0dXJucyB7UHJvbWlzZTxSZW5kZXJlcj59XG5cdCAqL1xuXHRzdGF0aWMgYXN5bmMgYnVpbGQoeyB0ZW1wbGF0ZSwgZGF0YSB9ID0ge30pIHtcblx0XHRpZiAodGVtcGxhdGUgJiYgdGVtcGxhdGUgaW5zdGFuY2VvZiBQcm9taXNlKSB0ZW1wbGF0ZSA9IGF3YWl0IHRlbXBsYXRlO1xuXG5cdFx0dGVtcGxhdGUgPSB0ZW1wbGF0ZSA/IGF3YWl0IFRlbXBsYXRlLmxvYWQodGVtcGxhdGUpIDogbnVsbDtcblx0XHRyZXR1cm4gbmV3IFJlbmRlcmVyKHsgdGVtcGxhdGUsIGRhdGEgfSk7XG5cdH1cblxuXHQvKipcblx0ICogUmVuZGVycyBhIHRlbXBsYXRlIGludG8gYSBjb250YWluZXIgd2l0aG91dCBrZWVwaW5nIGEgcmVuZGVyZXIuXG5cdCAqXG5cdCAqIEBzdGF0aWNcblx0ICogQGFzeW5jXG5cdCAqIEBwYXJhbSB7b2JqZWN0fSBjb250ZXh0XG5cdCAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGNvbnRleHQuY29udGFpbmVyXG5cdCAqIEBwYXJhbSB7b2JqZWN0fSBbY29udGV4dC5kYXRhXVxuXHQgKiBAcGFyYW0ge1RlbXBsYXRlfSBjb250ZXh0LnRlbXBsYXRlXG5cdCAqIEBwYXJhbSB7TU9ERVRZUEVTfSBbY29udGV4dC5tb2RlXVxuXHQgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBbY29udGV4dC50YXJnZXRdXG5cdCAqIEByZXR1cm5zIHtQcm9taXNlPENvbnRleHQ+fVxuXHQgKiBAbWVtYmVyb2YgUmVuZGVyZXJcblx0ICovXG5cdHN0YXRpYyBhc3luYyByZW5kZXIoeyBjb250YWluZXIsIGRhdGEsIHRlbXBsYXRlLCBtb2RlLCB0YXJnZXQgfSkge1xuXHRcdGNvbnN0IHJlbmRlcmVyID0gbmV3IFJlbmRlcmVyKHsgdGVtcGxhdGUsIGRhdGEgfSk7XG5cdFx0cmV0dXJuIHJlbmRlcmVyLnJlbmRlcih7IGNvbnRhaW5lciwgbW9kZSwgdGFyZ2V0IH0pO1xuXHR9XG59XG4iLCJpbXBvcnQgXCJAZGVmYXVsdC1qcy9kZWZhdWx0anMtY29tbW9uLXV0aWxzL3NyYy9qYXZhc2NyaXB0L1N0cmluZy5qc1wiO1xuXG5leHBvcnQgY29uc3QgTk9ERV9BVFRSSUJVVEVfVEVNUExBVEUgPSBcInRlbXBsYXRlXCI7XG5jb25zdCBDQUNIRSA9IHt9O1xuY29uc3QgZ2V0S2V5ID0gKHRlbXBsYXRlLCBjYWNoZSwgYWxpYXMpID0+IHtcblx0aWYgKCFjYWNoZSkgcmV0dXJuIG51bGw7XG5cblx0bGV0IGtleSA9IG51bGw7XG5cdGlmIChhbGlhcykga2V5ID0gYWxpYXM7XG5cdGVsc2UgaWYgKHR5cGVvZiB0ZW1wbGF0ZSA9PT0gXCJzdHJpbmdcIikga2V5ID0gdGVtcGxhdGU7XG5cdGVsc2UgaWYgKHRlbXBsYXRlIGluc3RhbmNlb2YgVVJMKSBrZXkgPSB0ZW1wbGF0ZS50b1N0cmluZygpO1xuXHRlbHNlIGlmICh0ZW1wbGF0ZSBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSBrZXkgPSB0ZW1wbGF0ZS5zZWxlY3RvcigpO1xuXG5cdGlmIChrZXkpIHJldHVybiBrZXkuaGFzaGNvZGUoKTtcblxuXHRyZXR1cm4gbnVsbDtcbn07XG5cbmNvbnN0IGZyb21VUkwgPSBhc3luYyAodXJsLCBjYWNoZSwga2V5KSA9PiB7XG5cdGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsLnRvU3RyaW5nKCkpO1xuXHRjb25zdCBzb3VyY2UgPSBhd2FpdCByZXNwb25zZS50ZXh0KCk7XG5cdHJldHVybiBmcm9tU291cmNlKHNvdXJjZSwgY2FjaGUsIGtleSk7XG59O1xuXG5jb25zdCBmcm9tU291cmNlID0gYXN5bmMgKHNvdXJjZSwgY2FjaGUsIGtleSkgPT4ge1xuXHRyZXR1cm4gZnJvbUVsZW1lbnQoY3JlYXRlKHNvdXJjZSwgdHJ1ZSksIGNhY2hlLCBrZXkpO1xufTtcblxuY29uc3QgZnJvbUVsZW1lbnQgPSBhc3luYyAoZWxlbWVudCwgY2FjaGUsIGtleSkgPT4ge1xuXHRsZXQgdGVtcGxhdGUgPSBudWxsO1xuXHRpZiAoZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxUZW1wbGF0ZUVsZW1lbnQpIHRlbXBsYXRlID0gbmV3IFRlbXBsYXRlKGVsZW1lbnQsIGtleSk7XG5cdGVsc2Uge1xuXHRcdHRlbXBsYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRlbXBsYXRlXCIpO1xuXHRcdGlmIChlbGVtZW50IGluc3RhbmNlb2YgTm9kZSB8fCBlbGVtZW50IGluc3RhbmNlb2YgTm9kZUxpc3QgfHwgZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxDb2xsZWN0aW9uIHx8IGVsZW1lbnQgaW5zdGFuY2VvZiBBcnJheSkgdGVtcGxhdGUuY29udGVudC5hcHBlbmQoZWxlbWVudC5jbG9uZU5vZGUodHJ1ZSkpO1xuXHRcdGVsc2UgdGhyb3cgbmV3IEVycm9yKFwiVGVtcGxhdGUgdHlwZSBpcyBub3Qgc3VwcG9ydGVkIVwiKTtcblxuXHRcdHRlbXBsYXRlID0gbmV3IFRlbXBsYXRlKHRlbXBsYXRlLCBrZXkpO1xuXHR9XG5cblx0aWYgKCF0ZW1wbGF0ZSkgdGhyb3cgbmV3IEVycm9yKFwiVGVtcGxhdGUgY2FuJ3QgbG9hZGVkIVwiKTtcblxuXHRpZiAoY2FjaGUgJiYga2V5KSBDQUNIRVtrZXldID0gdGVtcGxhdGU7XG5cblx0cmV0dXJuIHRlbXBsYXRlO1xufTtcblxuY29uc3QgZ2V0VGVtcGxhdGUgPSAobm9kZSkgPT4ge1xuXHRsZXQgdGVtcGxhdGUgPSBub2RlLmZpbmQoXCI6c2NvcGUgPiB0ZW1wbGF0ZVwiKS5maXJzdCgpO1xuXHRpZiAoISF0ZW1wbGF0ZSkgcmV0dXJuIHRlbXBsYXRlO1xuXHRjb25zdCB2YWx1ZSA9IG5vZGUuYXR0cihOT0RFX0FUVFJJQlVURV9URU1QTEFURSk7XG5cdGlmICghdmFsdWUpIHJldHVybiBudWxsO1xuXHR0cnkge1xuXHRcdHRlbXBsYXRlID0gZmluZCh2YWx1ZSkuZmlyc3QoKTtcblx0XHRpZiAoISF0ZW1wbGF0ZSkgcmV0dXJuIHRlbXBsYXRlO1xuXHR9IGNhdGNoIChlKSB7fVxuXHRyZXR1cm4gbmV3IFVSTCh2YWx1ZSwgbG9jYXRpb24pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGVtcGxhdGUge1xuXG5cdC8qKlxuXHQgKiBDcmVhdGUgYW4gaW5zdGFuY2Ugb2YgdGVtcGxhdGUuXG5cdCAqIFxuXHQgKiBAcGFyYW0gdGVtcGxhdGUgdHlwZSBvZiBIVE1MVGVtcGxhdGVFbGVtZW50LiBOb3QgbnVsbC5cblx0ICogQHBhcmFtIGtleSBpZGVudGlmaWVyIGF0IGNhY2hlLCBpZiB0ZW1wbGF0ZSB0byBiZSBjYWNoZWQuXG5cdCAqL1xuXHRjb25zdHJ1Y3RvcigvKiogQHR5cGUge0hUTUxUZW1wbGF0ZUVsZW1lbnR9ICovIHRlbXBsYXRlLC8qKiBAdHlwZSB7c3RyaW5nfSAqLyBrZXkpIHtcblx0XHR0aGlzLnRlbXBsYXRlID0gdGVtcGxhdGU7XG5cdFx0dGhpcy5rZXkgPSBrZXk7XG5cdH1cblxuXHQvKipcblx0ICogXG5cdCAqIEBwYXJhbSB7RG9jdW1lbnR9IFthRG9jdW1lbnQ9ZG9jdW1lbnRdIC0gdGhlIGRvY3VtZW50IHdoZXJlIHRoZSB0ZW1wbGF0ZSBpcyBpbXBvcnRlZFx0XG5cdCAqIEByZXR1cm5zIHtOb2RlTGlzdH0gLSB0aGUgaW1wb3J0ZWQgdGVtcGxhdGUgY29udGVudFxuXHQgKi9cblx0aW1wb3J0Q29udGVudChhRG9jdW1lbnQgPSBkb2N1bWVudCkge1xuXHRcdGxldCBpbXBvcnRlZCA9IGFEb2N1bWVudC5pbXBvcnROb2RlKHRoaXMudGVtcGxhdGUsIHRydWUpO1xuXHRcdHJldHVybiBpbXBvcnRlZC5jb250ZW50LmNoaWxkTm9kZXM7XG5cdH1cblxuXHRyZW1vdmUoKSB7XG5cdFx0aWYgKHRoaXMua2V5ICYmIENBQ0hFW3RoaXMua2V5XSkgZGVsZXRlIENBQ0hFW3RoaXMua2V5XTtcblx0fVxuXG5cdHN0YXRpYyBhc3luYyBmZXRjaCh1cmwsIGNhY2hlID0gdHJ1ZSwgYWxpYXMgPSBudWxsKSB7XG5cdFx0aWYgKHR5cGVvZiB1cmwgPT09IFwic3RyaW5nXCIpIHtcblx0XHRcdHJldHVybiBUZW1wbGF0ZS5sb2FkKG5ldyBVUkwodXJsLCBsb2NhdGlvbiksIGNhY2hlLCBhbGlhcyk7XG5cdFx0fSBlbHNlIGlmICh1cmwgaW5zdGFuY2VvZiBVUkwpIHJldHVybiBUZW1wbGF0ZS5sb2FkKHVybCwgY2FjaGUsIGFsaWFzKTtcblxuXHRcdHRocm93IG5ldyBFcnJvcihcIlRoZSB1cmwgaXNuJ3QgYSBhbGxvd2VkIHR5cGUhIC0+IFtTdHJpbmd8VVJMXSByZXF1aXJlZCFcIik7XG5cdH1cblxuXHRzdGF0aWMgYXN5bmMgbG9hZCh0ZW1wbGF0ZSwgY2FjaGUgPSB0cnVlLCBhbGlhcyA9IG51bGwpIHtcblx0XHRpZiAodGVtcGxhdGUgaW5zdGFuY2VvZiBUZW1wbGF0ZSkgcmV0dXJuIHRlbXBsYXRlO1xuXG5cdFx0Y29uc3Qga2V5ID0gZ2V0S2V5KHRlbXBsYXRlLCBjYWNoZSwgYWxpYXMpO1xuXHRcdGlmIChrZXkgJiYgQ0FDSEVba2V5XSkgcmV0dXJuIENBQ0hFW2tleV07XG5cdFx0ZWxzZSBpZiAodHlwZW9mIHRlbXBsYXRlID09PSBcInN0cmluZ1wiKSB7XG5cdFx0XHRyZXR1cm4gZnJvbVNvdXJjZSh0ZW1wbGF0ZSwgY2FjaGUsIGtleSk7XG5cdFx0fSBlbHNlIGlmICh0ZW1wbGF0ZSBpbnN0YW5jZW9mIFVSTCkgcmV0dXJuIGF3YWl0IGZyb21VUkwodGVtcGxhdGUsIGNhY2hlLCBrZXkpO1xuXHRcdGVsc2UgaWYgKHRlbXBsYXRlIGluc3RhbmNlb2YgTm9kZSB8fCB0ZW1wbGF0ZSBpbnN0YW5jZW9mIE5vZGVMaXN0IHx8IHRlbXBsYXRlIGluc3RhbmNlb2YgSFRNTENvbGxlY3Rpb24gfHwgdGVtcGxhdGUgaW5zdGFuY2VvZiBIVE1MVGVtcGxhdGVFbGVtZW50KSByZXR1cm4gZnJvbUVsZW1lbnQodGVtcGxhdGUsIGNhY2hlLCBrZXkpO1xuXG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiVGhlIHRlbXBsYXRlIGlzbid0IGEgYWxsb3dlZCB0eXBlISAtPiBbU3RyaW5nfFVSTHxOb2RlfE5vZGVMaXN0fEhUTUxDb2xsZWN0aW9ufFRlbXBsYXRlXSByZXF1aXJlZCFcIik7XG5cdH1cblxuXHRzdGF0aWMgYXN5bmMgbG9hZE5vZGVUZW1wbGF0ZShub2RlLCBkZWZhdWx0VGVtcGxhdGUsIGNhY2hlLCBhbGlhcykge1xuXHRcdHRyeSB7XG5cdFx0XHRjb25zdCB0ZW1wbGF0ZSA9IGdldFRlbXBsYXRlKG5vZGUpO1xuXHRcdFx0aWYgKHRlbXBsYXRlKSByZXR1cm4gVGVtcGxhdGUubG9hZCh0ZW1wbGF0ZSwgY2FjaGUsIGFsaWFzKTtcblx0XHR9IGNhdGNoIChlKSB7XG5cdFx0XHRjb25zb2xlLndhcm4oXCJDYW4ndCBsb2FkIHRlbXBsYXRlIGZyb20gbm9kZSFcIiwgbm9kZSwgZSk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGRlZmF1bHRUZW1wbGF0ZTtcblx0fVxufTtcblxuZXhwb3J0IGNvbnN0IHRvQXN5bmNUZW1wbGF0ZUxvYWRlciA9ICgvKlVSTCovdXJsKSA9PiB7XG4gICAgbGV0IHRlbXBsYXRlID0gbnVsbDtcblxuICAgIHJldHVybiBhc3luYyAoKSA9PiB7XG4gICAgICAgIGlmKCF0ZW1wbGF0ZSl7XG5cdFx0XHRpZih0eXBlb2YgdXJsID09PSBcImZ1bmN0aW9uXCIpXG5cdFx0XHRcdHVybCA9IGF3YWl0IHVybCgpO1xuXHRcdFx0ZWxzZSBpZih1cmwgaW5zdGFuY2VvZiBQcm9taXNlKVxuXHRcdFx0XHR1cmwgPSBhd2FpdCB1cmw7XG4gICAgICAgICAgICB0ZW1wbGF0ZSA9IFRlbXBsYXRlLmxvYWQodXJsKTtcblx0XHR9XG5cbiAgICAgICAgcmV0dXJuIHRlbXBsYXRlO1xuICAgIH07XG59O1xuIiwiZXhwb3J0IGNvbnN0IGlzVW5kZWZpbmVkT3JOdWxsID0gKHZhbHVlKSA9PiB7XG4gICAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ3VuZGVmaW5lZCcgfHwgdmFsdWUgPT09IG51bGxcbn1cblxuZXhwb3J0IGNvbnN0IGlzVW5kZWZpbmVkT3JOdWxsT3JCbGFuayA9ICh2YWx1ZSkgPT4ge1xuICByZXR1cm4gaXNVbmRlZmluZWRPck51bGwodmFsdWUpIHx8IHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycgJiYgdmFsdWUudHJpbSgpLmxlbmd0aCA9PSAwO1xufTsiLCJpbXBvcnQgRGlyZWN0aXZlIGZyb20gXCIuLi9EaXJlY3RpdmUuanNcIjtcblxuY29uc3QgQVRUUklCVVRFX19BVFRBQ0hFTEVNRU5UID0gXCJqc3RsLWF0dGFjaC1lbGVtZW50XCI7XG5jb25zdCBBVFRSSUJVVEVfX0FUVEFDSEVMRU1FTlRfTU9ERSA9IFwianN0bC1hdHRhY2gtZWxlbWVudC1tb2RlXCI7XG5cbmNvbnN0IE1PREVfQVBQRU5EID0gXCJhcHBlbmRcIjtcbmNvbnN0IE1PREVfUFJFUEVORCA9IFwicHJlcGVuZFwiO1xuY29uc3QgTU9ERV9SRVBMQUNFID0gXCJyZXBsYWNlXCI7XG5cbmNvbnN0IFBSRUNIRUNLID0gL14jLiskLztcblxuY29uc3QgZ2V0RWxlbWVudCA9IGFzeW5jICh0ZW1wbGF0ZSwgcmVzb2x2ZXIpID0+IHtcblx0bGV0IGVsZW1lbnQgPSAodGVtcGxhdGUuYXR0cihBVFRSSUJVVEVfX0FUVEFDSEVMRU1FTlQpIHx8IFwiXCIpLnRyaW0oKTtcblx0aWYgKCFQUkVDSEVDSy50ZXN0KGVsZW1lbnQpKSB7XG5cdFx0dHJ5IHtcblx0XHRcdGVsZW1lbnQgPSBhd2FpdCByZXNvbHZlci5yZXNvbHZlKGVsZW1lbnQsIGVsZW1lbnQpO1xuXHRcdH0gY2F0Y2ggKGUpIHt9XG5cdFx0aWYgKGVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkgcmV0dXJuIGVsZW1lbnQ7XG5cdH1cblxuXHR0cnkge1xuXHRcdGVsZW1lbnQgPSBmaW5kKGVsZW1lbnQpO1xuXHR9IGNhdGNoIChlKSB7fVxuXG5cdGlmIChlbGVtZW50ICYmIGVsZW1lbnQubGVuZ3RoID4gMCkgcmV0dXJuIGVsZW1lbnQubGVuZ3RoID09IDAgPyBlbGVtZW50LmZpcnN0KCkgOiBlbGVtZW50O1xuXG5cdHJldHVybiBudWxsO1xufTtcblxuY2xhc3MgQXR0YWNoRWxlbWVudCBleHRlbmRzIERpcmVjdGl2ZSB7XG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHN1cGVyKCk7XG5cdH1cblxuXHRnZXQgbmFtZSgpIHtcblx0XHRyZXR1cm4gXCJhdHRhY2gtZWxlbWVudFwiO1xuXHR9XG5cdGdldCByYW5rKCkge1xuXHRcdHJldHVybiBEaXJlY3RpdmUuTUlOX1JBTksgKyAxO1xuXHR9XG5cdGdldCBwaGFzZSgpIHtcblx0XHRyZXR1cm4gRGlyZWN0aXZlLlBIQVNFLmNvbnRlbnQ7XG5cdH1cblxuXHRhc3luYyBleGVjdXRlKGNvbnRleHQpIHtcblx0XHRjb25zdCB7IHJlc29sdmVyLCB0ZW1wbGF0ZSwgY29udGVudCB9ID0gY29udGV4dDtcblx0XHRpZiAoISh0ZW1wbGF0ZSBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSB8fCAhdGVtcGxhdGUuYXR0cihBVFRSSUJVVEVfX0FUVEFDSEVMRU1FTlQpKSByZXR1cm4gY29udGV4dDtcblx0XHR0cnkge1xuXHRcdFx0bGV0IGVsZW1lbnQgPSBhd2FpdCBnZXRFbGVtZW50KHRlbXBsYXRlLCByZXNvbHZlcik7XG5cdFx0XHRpZiAoZWxlbWVudCkge1xuXHRcdFx0XHRjb25zdCBtb2RlID0gdGVtcGxhdGUuYXR0cihBVFRSSUJVVEVfX0FUVEFDSEVMRU1FTlRfTU9ERSkgfHwgTU9ERV9SRVBMQUNFO1xuXHRcdFx0XHRpZiAobW9kZSA9PSBNT0RFX1JFUExBQ0UpIHtcblx0XHRcdFx0XHRjb250ZW50LmVtcHR5KCkuYXBwZW5kKGVsZW1lbnQpO1xuXHRcdFx0XHRcdGNvbnRleHQuc3RvcCA9IHRydWU7XG5cdFx0XHRcdFx0Y29udGV4dC5pZ25vcmUgPSB0cnVlO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGNvbnRleHQucmVhZHkoKHsgY29udGVudCB9KSA9PiB7XG5cdFx0XHRcdFx0XHRpZiAoY29udGVudCkge1xuXHRcdFx0XHRcdFx0XHRpZiAobW9kZSA9PSBNT0RFX0FQUEVORCkgY29udGVudC5hcHBlbmQoZWxlbWVudCk7XG5cdFx0XHRcdFx0XHRcdGVsc2UgaWYgKG1vZGUgPT0gTU9ERV9QUkVQRU5EKSBjb250ZW50LnByZXBlbmQoZWxlbWVudCk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9IGNhdGNoIChlKSB7XG5cdFx0XHRjb25zb2xlLmxvZyhlLCB7IGNvbnRleHQgfSk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGNvbnRleHQ7XG5cdH1cbn1cbkRpcmVjdGl2ZS5kZWZpbmUoeyBkaXJlY3RpdmU6IG5ldyBBdHRhY2hFbGVtZW50KCkgfSk7XG4iLCJpbXBvcnQgR0xPQkFMIGZyb20gXCJAZGVmYXVsdC1qcy9kZWZhdWx0anMtY29tbW9uLXV0aWxzL3NyYy9HbG9iYWwuanNcIjtcbmltcG9ydCBEaXJlY3RpdmUgZnJvbSBcIi4uL0RpcmVjdGl2ZS5qc1wiO1xuXG5jb25zdCBBVFRSSUJVVEVfTkFNRSA9IC8oanN0bCk/KFxcPyk/KEApPyhbXlxcP0BdKykvaTtcblxuY29uc3QgREVGQVVMVF9FVkVOVF9GVU5DVElPTiA9IFwiZGVmYXVsdFwiO1xuY29uc3QgT1BUSU9OX1BSRVZFTlRfREVGQVVMVCA9IFwicHJldmVudC1kZWZhdWx0XCJcbmNvbnN0IElHTk9SRURfQVRUUklCVVRFUyA9IFtcImlzXCJdO1xuXG5jb25zdCBGVU5DVElPTl9TUExJVFRFUiA9IFwiOjpcIjtcbmNvbnN0IEZVTkNUSU9OX1NQTElUVEVSX09MRCA9IFwiOlwiO1xuXG5jb25zdCBFVkVOVEZVTkNUSU9OUyA9IHtcblx0ZGVsZWdhdGU6IGFzeW5jIChldmVudCwgaGFuZGxlLCBzZXR0aW5nLCB0eXBlLCByZXNvbHZlciwgY29udGVudCwgb3B0aW9ucywgY29udGV4dCkgPT4ge1xuXHRcdGNvbnN0IGV2ZW50aGFuZGxlID0gYXdhaXQgcmVzb2x2ZXIucmVzb2x2ZVRleHQoaGFuZGxlLCBoYW5kbGUpO1xuXHRcdGNvbnRlbnQub24oZXZlbnQsIGRlbGVnYXRlcihldmVudGhhbmRsZSwgc2V0dGluZykpO1xuXHR9LFxuXHR0b2dnbGVjbGFzczogYXN5bmMgKGV2ZW50LCBoYW5kbGUsIHNldHRpbmcsIHR5cGUsIHJlc29sdmVyLCBjb250ZW50LCBvcHRpb25zLCBjb250ZXh0KSA9PiB7XG5cdFx0Y29uc3QgY2xhenogPSBvcHRpb25zLnNoaWZ0KCk7XG5cdFx0Y29uc3QgcHJldmVudERlZmF1bHQgPSBvcHRpb25zLmluY2x1ZGVzKE9QVElPTl9QUkVWRU5UX0RFRkFVTFQpO1xuXHRcdGNvbnN0IHNlbGVjdG9yID0gaGFuZGxlID8gYXdhaXQgcmVzb2x2ZXIucmVzb2x2ZVRleHQoaGFuZGxlLCBoYW5kbGUpIDogbnVsbDtcdFx0XG5cdFx0Y29udGVudC5vbihldmVudCwgKGV2ZW50KSA9PiB7XG5cdFx0XHRpZihwcmV2ZW50RGVmYXVsdClcblx0XHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRcdGlmKHNlbGVjdG9yKVxuXHRcdFx0XHRjb250ZW50LmNsb3Nlc3RzKHNlbGVjdG9yKS50b2dnbGVDbGFzcyhjbGF6eik7XG5cdFx0XHRlbHNlXG5cdFx0XHRcdGNvbnRlbnQudG9nZ2xlQ2xhc3MoY2xhenopO1xuXHRcdH0pO1xuXHR9LFxuXHR0b2dnbGVhdHRyaWJ1dGU6IGFzeW5jIChldmVudCwgaGFuZGxlLCBzZXR0aW5nLCB0eXBlLCByZXNvbHZlciwgY29udGVudCwgb3B0aW9ucywgY29udGV4dCkgPT4ge1xuXHRcdGNvbnN0IGF0dHJpYnV0ZSA9IG9wdGlvbnMuc2hpZnQoKTtcblx0XHRjb25zdCBwcmV2ZW50RGVmYXVsdCA9IG9wdGlvbnMuaW5jbHVkZXMoT1BUSU9OX1BSRVZFTlRfREVGQVVMVCk7XG5cdFx0Y29uc3Qgc2VsZWN0b3IgPSBoYW5kbGUgPyBhd2FpdCByZXNvbHZlci5yZXNvbHZlVGV4dChoYW5kbGUsIGhhbmRsZSkgOiBudWxsO1x0XHRcblx0XHRjb250ZW50Lm9uKGV2ZW50LCAoZXZlbnQpID0+IHtcblx0XHRcdGlmKHByZXZlbnREZWZhdWx0KVxuXHRcdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0aWYoc2VsZWN0b3IpXG5cdFx0XHRcdGNvbnRlbnQuY2xvc2VzdHMoc2VsZWN0b3IpLmZvckVhY2goZWxlbWVudCA9PiB7XG5cdFx0XHRcdFx0ZWxlbWVudC50b2dnbGVBdHRyaWJ1dGUoYXR0cmlidXRlKVx0XHRcdFx0XG5cdFx0XHRcdH0pO1xuXHRcdFx0ZWxzZSBcblx0XHRcdFx0Y29udGVudC50b2dnbGVBdHRyaWJ1dGUoYXR0cmlidXRlKTtcblx0XHR9KTtcblx0fSxcblx0W0RFRkFVTFRfRVZFTlRfRlVOQ1RJT05dOiBhc3luYyAoZXZlbnQsIGhhbmRsZSwgc2V0dGluZywgdHlwZSwgcmVzb2x2ZXIsIGNvbnRlbnQsIG9wdGlvbnMsIGNvbnRleHQpID0+IHtcblx0XHRjb25zdCBldmVudGhhbmRsZSA9IGhhbmRsZSA/IGF3YWl0IHJlc29sdmVyLnJlc29sdmUoaGFuZGxlLCBoYW5kbGUpIDogbnVsbDtcblxuXHRcdGlmICghZXZlbnRoYW5kbGUpIGNvbnNvbGUuZXJyb3IobmV3IEVycm9yKFwiQ2FuJ3QgcmVzb2x2ZSBcXFwiXCIgKyBoYW5kbGUgKyAnXCIgdG8gZXZlbnQgaGFuZGxlIScpKTtcblx0XHRlbHNlIGlmICh0eXBlb2YgZXZlbnRoYW5kbGUgPT09IFwiZnVuY3Rpb25cIikgY29udGVudC5vbihldmVudCwgZXZlbnRoYW5kbGUpO1xuXHRcdGVsc2UgaWYgKHR5cGVvZiBldmVudGhhbmRsZSA9PT0gXCJzdHJpbmdcIikgY29udGVudC5vbihldmVudCwgZGVsZWdhdGVyKGV2ZW50aGFuZGxlLCBzZXR0aW5nKSk7XG5cdFx0ZWxzZSBpZiAodHlwZW9mIGV2ZW50aGFuZGxlID09PSBcIm9iamVjdFwiKSB7XG5cdFx0XHRjb25zdCB7IGNhcHR1cmUgPSBmYWxzZSwgcGFzc2l2ZSA9IGZhbHNlLCBvbmNlID0gZmFsc2UgfSA9IGV2ZW50aGFuZGxlO1xuXHRcdFx0Y29udGVudC5vbihldmVudCwgZXZlbnRoYW5kbGUuZXZlbnRIYW5kbGUsIHsgY2FwdHVyZSwgcGFzc2l2ZSwgb25jZSB9KTtcblx0XHR9XG5cdH0sXG59O1xuXG5jb25zdCBiaW5kQXR0cmlidXRlID0gYXN5bmMgKHsgY29uZGl0aW9uLCBuYW1lLCB2YWx1ZSwgY29udGV4dCB9KSA9PiB7XG5cdGNvbnN0IHsgcmVzb2x2ZXIsIGNvbnRlbnQsIHRlbXBsYXRlIH0gPSBjb250ZXh0O1xuXG5cdGxldCBhdHRyaWJ1dGUgPSAhY29uZGl0aW9uID8gdmFsdWUgOiB0ZW1wbGF0ZS5hdHRyKG5hbWUpO1xuXHRjb25kaXRpb24gPSBjb25kaXRpb24gPyB2YWx1ZSA6IHRlbXBsYXRlLmF0dHIoXCI/XCIgKyBuYW1lKTtcblx0Y29uc3QgaGFzVmFsdWUgPSBpc1ZhbHVlKGF0dHJpYnV0ZSk7XG5cblx0aWYgKGNvbmRpdGlvbiAmJiBoYXNWYWx1ZSkge1xuXHRcdGNvbmRpdGlvbiA9IGF3YWl0IHJlc29sdmVyLnJlc29sdmUoY29uZGl0aW9uLCBmYWxzZSk7XG5cdFx0aWYgKGNvbmRpdGlvbiA9PT0gdHJ1ZSkgY29udGVudC5hdHRyKG5hbWUsIGF3YWl0IHJlc29sdmVyLnJlc29sdmVUZXh0KGF0dHJpYnV0ZSwgYXR0cmlidXRlKSk7XG5cdH0gZWxzZSBpZiAoY29uZGl0aW9uKSB7XG5cdFx0Y29uZGl0aW9uID0gYXdhaXQgcmVzb2x2ZXIucmVzb2x2ZShjb25kaXRpb24sIGZhbHNlKTtcblx0XHRpZiAoY29uZGl0aW9uID09PSB0cnVlKSBjb250ZW50LmF0dHIobmFtZSwgdHJ1ZSk7XG5cdH0gZWxzZSBpZiAoaGFzVmFsdWUpIHtcblx0XHRjb250ZW50LmF0dHIobmFtZSwgYXdhaXQgcmVzb2x2ZXIucmVzb2x2ZVRleHQoYXR0cmlidXRlLCBhdHRyaWJ1dGUpKTtcblx0fVxufTtcblxuY29uc3QgaXNWYWx1ZSA9ICh2YWx1ZSkgPT4ge1xuXHRyZXR1cm4gdmFsdWUgIT0gbnVsbCAmJiB0eXBlb2YgdmFsdWUgIT09IFwidW5kZWZpbmVkXCI7XG59O1xuXG5jb25zdCBiaW5kRXZlbnQgPSBhc3luYyAoeyBjb25kaXRpb24sIG5hbWUsIHZhbHVlLCBjb250ZXh0IH0pID0+IHtcblx0Y29uc3QgeyByZXNvbHZlciwgdGVtcGxhdGUsIGNvbnRlbnQgfSA9IGNvbnRleHQ7XG5cblx0Y29uZGl0aW9uID0gY29uZGl0aW9uID8gdmFsdWUgOiB0ZW1wbGF0ZS5hdHRyKFwiP0BcIiArIG5hbWUpO1xuXHRsZXQgaGFuZGxlID0gIWNvbmRpdGlvbiA/IHZhbHVlIDogdGVtcGxhdGUuYXR0cihcIkBcIiArIG5hbWUpO1xuXHRsZXQgc3BsaXQgPSBuYW1lLnNwbGl0KEZVTkNUSU9OX1NQTElUVEVSKTtcblx0aWYoc3BsaXQubGVuZ3RoID09IDEpXG5cdFx0c3BsaXQgPSBuYW1lLnNwbGl0KEZVTkNUSU9OX1NQTElUVEVSX09MRCk7XG5cblx0Y29uc3QgZXZlbnQgPSBzcGxpdC5zaGlmdCgpO1xuXHRjb25zdCB0eXBlID0gKHNwbGl0LnNoaWZ0KCkgfHwgREVGQVVMVF9FVkVOVF9GVU5DVElPTikudG9Mb3dlckNhc2UoKTtcblx0XG5cdGlmKHR5cGVvZiBoYW5kbGUgPT09IFwidW5kZWZpbmVkXCIgfHwgaGFuZGxlID09IG51bGwpXG5cdFx0Y29uc29sZS5lcnJvcihgRGVmaW5pdGlvbiBvZiBcIiR7ZXZlbnR9XCIgLSBldmVudCBoYW5kbGUgYXRgLCBjb250ZW50LCBcImlzIGluY29ycmVjdCFcIik7XG5cblx0aGFuZGxlID0gaGFuZGxlLnRyaW0oKTtcblx0Y29uc3Qgc2V0dGluZyA9IHtcblx0XHRidWJibGU6IHRydWUsXG5cdH07XG5cblx0aWYgKGNvbmRpdGlvbiApIHtcblx0XHRpZiAoKGF3YWl0IHJlc29sdmVyLnJlc29sdmUoY29uZGl0aW9uLCBmYWxzZSkpID09IHRydWUpIGF3YWl0IGJpbmRpbmcoZXZlbnQsIGhhbmRsZSwgc2V0dGluZywgdHlwZSwgcmVzb2x2ZXIsIGNvbnRlbnQsIHNwbGl0LCBjb250ZXh0KTtcblx0fSBlbHNlIGF3YWl0IGJpbmRpbmcoZXZlbnQsIGhhbmRsZSwgc2V0dGluZywgdHlwZSwgcmVzb2x2ZXIsIGNvbnRlbnQsIHNwbGl0LCBjb250ZXh0KTtcbn07XG5cbmNvbnN0IGJpbmRpbmcgPSBhc3luYyAoZXZlbnQsIGhhbmRsZSwgc2V0dGluZywgdHlwZSwgcmVzb2x2ZXIsIGNvbnRlbnQsIG9wdGlvbnMsIGNvbnRleHQpID0+IHtcblx0Y29uc3QgYmluZGVyID0gRVZFTlRGVU5DVElPTlNbdHlwZV07XG5cdGlmIChiaW5kZXIpIHJldHVybiBiaW5kZXIoZXZlbnQsIGhhbmRsZSwgc2V0dGluZywgdHlwZSwgcmVzb2x2ZXIsIGNvbnRlbnQsIG9wdGlvbnMsIGNvbnRleHQpO1xufTtcblxuY29uc3QgZGVsZWdhdGVyID0gZnVuY3Rpb24gKGRlbGVnYXRlLCBzZXR0aW5nKSB7XG5cdHJldHVybiBmdW5jdGlvbiAoZXZlbnQpIHtcblx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXHRcdGlmIChldmVudC5jdXJyZW50VGFyZ2V0KSBldmVudC5jdXJyZW50VGFyZ2V0LnRyaWdnZXIoZGVsZWdhdGUsIGV2ZW50KTtcblx0XHRlbHNlIGV2ZW50LnRhcmdldC50cmlnZ2VyKGRlbGVnYXRlLCBldmVudCk7XG5cdH07XG59O1xuXG5jbGFzcyBBdHRyaWJ1dGUgZXh0ZW5kcyBEaXJlY3RpdmUge1xuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRzdXBlcigpO1xuXHR9XG5cblx0Z2V0IG5hbWUoKSB7XG5cdFx0cmV0dXJuIFwiYXR0cmlidXRlXCI7XG5cdH1cblx0Z2V0IHJhbmsoKSB7XG5cdFx0cmV0dXJuIERpcmVjdGl2ZS5NSU5fUkFOSztcblx0fVxuXHRnZXQgcGhhc2UoKSB7XG5cdFx0cmV0dXJuIERpcmVjdGl2ZS5QSEFTRS5jb250ZW50O1xuXHR9XG5cblx0YXN5bmMgZXhlY3V0ZShjb250ZXh0KSB7XG5cdFx0Y29uc3QgeyB0ZW1wbGF0ZSB9ID0gY29udGV4dDtcblx0XHRpZiAoISh0ZW1wbGF0ZSBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSkgcmV0dXJuIGNvbnRleHQ7XG5cblx0XHRjb25zdCBwcm9jZXNzZWQgPSBuZXcgU2V0KElHTk9SRURfQVRUUklCVVRFUyk7XG5cdFx0Zm9yIChjb25zdCBhdHRyaWJ1dGUgb2YgdGVtcGxhdGUuYXR0cmlidXRlcykge1xuXHRcdFx0Y29uc3QgWywganN0bCwgY29uZGl0aW9uLCBldmVudCwgbmFtZV0gPSBBVFRSSUJVVEVfTkFNRS5leGVjKGF0dHJpYnV0ZS5uYW1lKTtcblx0XHRcdGlmICghanN0bCAmJiAhcHJvY2Vzc2VkLmhhcyhuYW1lKSkge1xuXHRcdFx0XHRjb25zdCB2YWx1ZSA9IGF0dHJpYnV0ZS52YWx1ZTtcblxuXHRcdFx0XHRpZiAoZXZlbnQpIGF3YWl0IGJpbmRFdmVudCh7IGNvbmRpdGlvbiwgZXZlbnQsIG5hbWUsIHZhbHVlLCBjb250ZXh0IH0pO1xuXHRcdFx0XHRlbHNlIGF3YWl0IGJpbmRBdHRyaWJ1dGUoeyBjb25kaXRpb24sIG5hbWUsIHZhbHVlLCBjb250ZXh0IH0pO1xuXHRcdFx0fVxuXHRcdFx0cHJvY2Vzc2VkLmFkZChuYW1lKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gY29udGV4dDtcblx0fVxufVxuXG5EaXJlY3RpdmUuZGVmaW5lKHsgZGlyZWN0aXZlOiBuZXcgQXR0cmlidXRlKCkgfSk7XG4iLCJpbXBvcnQgRGlyZWN0aXZlIGZyb20gXCIuLi9EaXJlY3RpdmUuanNcIjtcblxuY2xhc3MgQ2hvb3NlIGV4dGVuZHMgRGlyZWN0aXZlIHtcblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0c3VwZXIoKTtcblx0fVxuXG5cdGdldCBuYW1lKCkgeyByZXR1cm4gXCJjaG9vc2VcIiB9XG5cdGdldCByYW5rKCkgeyByZXR1cm4gRGlyZWN0aXZlLk1JTl9SQU5LICsgMSB9XG5cdGdldCBwaGFzZSgpIHsgcmV0dXJuIERpcmVjdGl2ZS5QSEFTRS50ZW1wbGF0ZSB9XG5cblx0YXN5bmMgZXhlY3V0ZShjb250ZXh0KSB7XG5cdFx0aWYgKCEoY29udGV4dC50ZW1wbGF0ZSBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSB8fCAhY29udGV4dC50ZW1wbGF0ZS5oYXNBdHRyaWJ1dGUoXCJqc3RsLWNob29zZVwiKSB8fCBjb250ZXh0LnRlbXBsYXRlLmNoaWxkcmVuLmxlbmd0aCA9PSAwKVxuXHRcdFx0cmV0dXJuIGNvbnRleHQ7XG5cdFx0XG5cdFx0Ly9jbG9uZSB0ZW1wbGF0ZSwgYmVmb3JlIG1hbmlwdWxhdGUgdGVtcGxhdGVcblx0XHRjb250ZXh0LnRlbXBsYXRlID0gY29udGV4dC50ZW1wbGF0ZS5jbG9uZU5vZGUodHJ1ZSk7XG5cdFx0Y29uc3QgeyB0ZW1wbGF0ZSwgcmVzb2x2ZXIgfSA9IGNvbnRleHQ7XG5cdFx0bGV0IHJlc29sdmVkID0gZmFsc2U7XG5cdFx0Y29uc3Qgd2hlbnMgPSB0ZW1wbGF0ZS5maW5kKFwiOnNjb3BlID4gW2pzdGwtd2hlbl1cIik7XG5cdFx0Y29uc3QgbGVuZ3RoID0gd2hlbnMubGVuZ3RoO1xuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcblx0XHRcdGNvbnN0IG5vZGUgPSB3aGVuc1tpXTtcblx0XHRcdGlmICghcmVzb2x2ZWQgJiYgKGF3YWl0IHJlc29sdmVyLnJlc29sdmUobm9kZS5hdHRyKFwianN0bC13aGVuXCIpLCBmYWxzZSkpKVxuXHRcdFx0XHRyZXNvbHZlZCA9IHRydWU7XG5cdFx0XHRlbHNlXG5cdFx0XHRcdG5vZGUucmVtb3ZlKCk7XG5cdFx0fVxuXG5cdFx0aWYgKHJlc29sdmVkKVxuXHRcdFx0dGVtcGxhdGUuZmluZChcIjpzY29wZSA+IFtqc3RsLW90aGVyd2lzZV1cIikucmVtb3ZlKCk7XG5cblx0XHRyZXR1cm4gY29udGV4dDtcblx0fVxufVxuXG5EaXJlY3RpdmUuZGVmaW5lKHsgZGlyZWN0aXZlOiBuZXcgQ2hvb3NlKCkgfSk7IiwiaW1wb3J0IERpcmVjdGl2ZSBmcm9tIFwiLi4vRGlyZWN0aXZlLmpzXCI7XG5pbXBvcnQgRXhwcmVzc2lvblJlc29sdmVyIGZyb20gXCJAZGVmYXVsdC1qcy9kZWZhdWx0anMtZXhwcmVzc2lvbi1sYW5ndWFnZS9zcmMvRXhwcmVzc2lvblJlc29sdmVyLmpzXCI7XG5cbmNvbnN0IE1PREVTID0ge1xuXHRcInJlbW90ZVwiOiBhc3luYyAoeyBkYXRhLCBjb250ZXh0IH0pID0+IHtcdFx0XG5cdFx0Y29uc3Qge3Jlc29sdmVyLCB0ZW1wbGF0ZX0gPSBjb250ZXh0O1xuXHRcdGRhdGEgPSBhd2FpdCByZXNvbHZlci5yZXNvbHZlVGV4dChkYXRhKTtcblx0XHRkYXRhID0gbmV3IFVSTChkYXRhLCBsb2NhdGlvbik7XG5cdFx0bGV0IG9wdGlvbiA9IGF3YWl0IHJlc29sdmVyLnJlc29sdmVUZXh0KHRlbXBsYXRlLmF0dHIoXCJqc3RsLWRhdGEtb3B0aW9uXCIpIHx8IFwie31cIik7XG5cdFx0b3B0aW9uID0gSlNPTi5wYXJzZShvcHRpb24pO1xuXG5cdFx0ZGF0YSA9IGF3YWl0IGZldGNoKGRhdGEudG9TdHJpbmcoKSwgb3B0aW9uKTtcblx0XHRyZXR1cm4gZGF0YS5qc29uKCk7XG5cdH0sXHRcblx0XCJzZXRcIjogYXN5bmMgKHsgZGF0YSwgY29udGV4dCB9KSA9PiB7XG5cdFx0Y29uc3Qge3Jlc29sdmVyfSA9IGNvbnRleHQ7XG5cdFx0XG5cdFx0ZGF0YSA9IGF3YWl0IHJlc29sdmVyLnJlc29sdmUoZGF0YSk7XG5cdFx0cmV0dXJuIGRhdGE7XG5cdH0sXG5cdFwiZGlyZWN0XCI6IGFzeW5jICh7IGRhdGEsIGNvbnRleHQgfSkgPT4ge1xuXHRcdGNvbnN0IHtyZXNvbHZlcn0gPSBjb250ZXh0O1xuXHRcdFxuXHRcdGRhdGEgPSBhd2FpdCByZXNvbHZlci5yZXNvbHZlVGV4dChkYXRhKTtcblx0XHRyZXR1cm4gZGF0YTtcblx0fVxufTtcblxuY29uc3QgdXBkYXRlQ29udGV4dCA9ICh7IHZhcm5hbWUsIGRhdGEsIHNjb3BlLCBjb250ZXh0IH0pID0+IHtcblx0aWYgKHZhcm5hbWUpXG5cdFx0Y29udGV4dC5yZXNvbHZlci51cGRhdGVEYXRhKHZhcm5hbWUsIGRhdGEsIHNjb3BlKTtcblx0ZWxzZSBpZiAoc2NvcGUpXG5cdFx0Y29udGV4dC5yZXNvbHZlci5tZXJnZUNvbnRleHQoZGF0YSwgc2NvcGUpO1xuXHRlbHNle1xuXHRcdGNvbnN0IHJlc29sdmVyID0gbmV3IEV4cHJlc3Npb25SZXNvbHZlcih7IGNvbnRleHQ6IGRhdGEsIG5hbWU6IFwianN0bC1kYXRhXCIsIHBhcmVudDogY29udGV4dC5yZXNvbHZlciB9KTtcblx0XHQvL2NvbnRleHQgPSBjb250ZXh0LnN1YkNvbnRleHQoe3Jlc29sdmVyfSk7XG5cdFx0Y29udGV4dC5yZXNvbHZlciA9IHJlc29sdmVyO1xuXHR9XG5cdFxuXHRcdFxuXHRyZXR1cm4gY29udGV4dDtcbn07XG5cblxuXG5jbGFzcyBEYXRhIGV4dGVuZHMgRGlyZWN0aXZlIHtcblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0c3VwZXIoKTtcblx0fVxuXG5cdGdldCBuYW1lKCkgeyByZXR1cm4gXCJkYXRhXCIgfVxuXHRnZXQgcmFuaygpIHsgcmV0dXJuIDEwMDAgfVxuXHRnZXQgcGhhc2UoKXtyZXR1cm4gRGlyZWN0aXZlLlBIQVNFLmRhdGF9XG5cblx0YXN5bmMgZXhlY3V0ZShjb250ZXh0KSB7XG5cdFx0aWYgKCEoY29udGV4dC50ZW1wbGF0ZSBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSB8fCAhY29udGV4dC50ZW1wbGF0ZS5hdHRyKFwianN0bC1kYXRhXCIpKVxuXHRcdFx0cmV0dXJuIGNvbnRleHQ7XG5cdFx0XHRcblx0XHR0cnkge1xuXHRcdFx0Y29uc3QgeyB0ZW1wbGF0ZSB9ID0gY29udGV4dDtcdFx0XHRcblx0XHRcdGNvbnN0IG1vZGUgPSBNT0RFU1sodGVtcGxhdGUuYXR0cihcImpzdGwtZGF0YS1tb2RlXCIpIHx8IFwicmVtb3RlXCIpXTtcblx0XHRcdGlmICghbW9kZSlcblx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKFwiVGhlIGpzdGwtZGF0YS1tb2RlIGlzIHVuc3VwcG9ydGVkIVwiKTtcblxuXHRcdFx0bGV0IGRhdGEgPSB0ZW1wbGF0ZS5hdHRyKFwianN0bC1kYXRhXCIpO1xuXHRcdFx0ZGF0YSA9IGF3YWl0IG1vZGUoeyBkYXRhLCBjb250ZXh0IH0pO1xuXG5cdFx0XHRjb25zdCB2YXJuYW1lID0gdGVtcGxhdGUuYXR0cihcImpzdGwtZGF0YS12YXJcIik7XG5cdFx0XHRjb25zdCBzY29wZSA9IHRlbXBsYXRlLmF0dHIoXCJqc3RsLWRhdGEtc2NvcGVcIik7XG5cdFx0XHRjb250ZXh0ID0gdXBkYXRlQ29udGV4dCh7IHZhcm5hbWUsIGRhdGEsIHNjb3BlLCBjb250ZXh0IH0pO1xuXHRcdH0gY2F0Y2ggKGUpIHtcblx0XHRcdGNvbnNvbGUuZXJyb3IoZSwgY29udGV4dC50ZW1wbGF0ZSk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGNvbnRleHQ7XG5cblx0fVxufVxuXG5EaXJlY3RpdmUuZGVmaW5lKHsgZGlyZWN0aXZlOiBuZXcgRGF0YSgpIH0pOyIsImltcG9ydCBEaXJlY3RpdmUgZnJvbSBcIi4uL0RpcmVjdGl2ZS5qc1wiO1xuaW1wb3J0IEV4cHJlc3Npb25SZXNvbHZlciBmcm9tIFwiQGRlZmF1bHQtanMvZGVmYXVsdGpzLWV4cHJlc3Npb24tbGFuZ3VhZ2Uvc3JjL0V4cHJlc3Npb25SZXNvbHZlci5qc1wiO1xuaW1wb3J0IHtpc1VuZGVmaW5lZE9yTnVsbE9yQmxhbmssIGlzVW5kZWZpbmVkT3JOdWxsfSBmcm9tIFwiLi4vVXRpbHMuanNcIjtcblxuY29uc3QgQVRUUklCVVRFID0ge1xuXHREQVRBOiBcImpzdGwtZm9yZWFjaFwiLFxuXHRWQVI6IFwianN0bC1mb3JlYWNoLXZhclwiLFxuXHRTVEFUVVM6IFwianN0bC1mb3JlYWNoLXN0YXR1c1wiLFxuXHRDT1VOVDogXCJqc3RsLWZvcmVhY2gtY291bnRcIixcblx0U1RBUlQ6IFwianN0bC1mb3JlYWNoLXN0YXJ0XCIsXG5cdFNURVA6IFwianN0bC1mb3JlYWNoLXN0ZXBcIixcblx0Q09ORElUSU9OOiBcImpzdGwtZm9yZWFjaC1jb25kaXRpb25cIlxufTtcblxuXG4vKipcbiAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb24gXG4gKiBAcGFyYW0ge251bWJlcn0gb3B0aW9uLnN0YXJ0IFxuICogQHBhcmFtIHtudW1iZXJ9IG9wdGlvbi5zdGVwIFxuICogQHBhcmFtIHtudW1iZXJ9IG9wdGlvbi5jb3VudCBcbiAqIEBwYXJhbSB7c3RyaW5nfSBvcHRpb24udmFybmFtZSBcbiAqIEBwYXJhbSB7c3RyaW5nfSBvcHRpb24uc3RhdHVzIFxuICogQHBhcmFtIHtFeHByZXNzaW9uUmVzb2x2ZXJ9IG9wdGlvbi5yZXNvbHZlciBcbiAqIEByZXR1cm5zIHtQcm9taXNlPHZvaWQ+fVxuICovXG5jb25zdCBkb0NvdW50ID0gYXN5bmMgKG9wdGlvbikgPT4ge1xuXHRsZXQgeyBzdGFydCwgc3RlcCwgY291bnQsIHZhcm5hbWUsIHN0YXR1cywgcmVzb2x2ZXIgfSA9IG9wdGlvbjtcblxuXHRjb3VudCA9IGF3YWl0IHJlc29sdmVyLnJlc29sdmUoY291bnQpO1xuXHRjb25zdCBsZW5ndGggPSBzdGFydCArIChjb3VudCAqIHN0ZXApO1xuXHRsZXQgc3RvcCA9IGZhbHNlO1xuXHRmb3IgKGxldCBpID0gc3RhcnQ7IGkgPCBsZW5ndGggJiYgIXN0b3A7IGkgPSBpICsgc3RlcCkge1xuXHRcdGNvbnN0IGl0ZXJhdGlvbiA9IHt9XG5cdFx0aXRlcmF0aW9uW3Zhcm5hbWVdID0gaTtcblx0XHRpdGVyYXRpb25bc3RhdHVzXSA9IHtcblx0XHRcdGZpcnN0OiBpID09PSBzdGFydCxcblx0XHRcdGxhc3Q6IGkgPj0gbGVuZ3RoIC0gc3RlcCxcblx0XHRcdGluZGV4OiBpLFxuXHRcdFx0bnVtYmVyOiBpICsgMSxcblx0XHRcdHN0ZXAsXG5cdFx0XHRjb3VudFxuXHRcdH07XG5cdFx0c3RvcCA9ICEoYXdhaXQgaXRlcmF0ZShpdGVyYXRpb24sIG9wdGlvbikpO1xuXHR9XG59O1xuXG5cblxuLyoqXG4gKiBAcGFyYW0ge29iamVjdH0gb3B0aW9uIFxuICogQHBhcmFtIHtBcnJheTxhbnk+fGFueX0gb3B0aW9uLmRhdGEgXG4gKiBAcGFyYW0ge251bWJlcn0gb3B0aW9uLnN0YXJ0IFxuICogQHBhcmFtIHtudW1iZXJ9IG9wdGlvbi5zdGVwIFxuICogQHBhcmFtIHtudW1iZXJ9IG9wdGlvbi5jb3VudCBcbiAqIEBwYXJhbSB7c3RyaW5nfSBvcHRpb24udmFybmFtZSBcbiAqIEBwYXJhbSB7c3RyaW5nfSBvcHRpb24uc3RhdHVzIFxuICogQHBhcmFtIHtFeHByZXNzaW9uUmVzb2x2ZXJ9IG9wdGlvbi5yZXNvbHZlciBcbiAqIEByZXR1cm5zIHtQcm9taXNlPHZvaWQ+fVxuICovXG5jb25zdCBkb0ZvcmVhY2ggPSBhc3luYyAob3B0aW9uKSA9PiB7XG5cdGxldCB7IGRhdGEsIHN0YXJ0LCBzdGVwLCBjb3VudCwgdmFybmFtZSwgc3RhdHVzLCByZXNvbHZlciB9ID0gb3B0aW9uO1xuXG5cdGRhdGEgPSBhd2FpdCByZXNvbHZlci5yZXNvbHZlKGRhdGEsIFtdKTtcblx0bGV0IGFycmF5ID0gZGF0YTtcblx0Y29uc3QgaXNPYmplY3QgPSAhKGRhdGEgaW5zdGFuY2VvZiBBcnJheSk7XG5cdGlmIChpc09iamVjdCkgYXJyYXkgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhkYXRhKTtcblxuXHRjb3VudCA9IGNvdW50ICE9IFwiXCIgPyBhd2FpdCByZXNvbHZlci5yZXNvbHZlKGNvdW50LCAwKSA6IG51bGw7XG5cdGNvbnN0IGxlbmd0aCA9IGNvdW50ID8gTWF0aC5taW4oc3RhcnQgKyBjb3VudCwgYXJyYXkubGVuZ3RoKSA6IGFycmF5Lmxlbmd0aDtcblx0bGV0IHN0b3AgPSBmYWxzZTtcblx0Zm9yIChsZXQgaSA9IHN0YXJ0OyBpIDwgbGVuZ3RoICYmICFzdG9wOyBpID0gaSArIHN0ZXApIHtcblx0XHRjb25zdCBpdGVyYXRpb24gPSB7fVxuXHRcdGl0ZXJhdGlvblt2YXJuYW1lXSA9IGlzT2JqZWN0ID8gZGF0YVthcnJheVtpXV0gOiBkYXRhW2ldO1xuXHRcdGl0ZXJhdGlvbltzdGF0dXNdID0ge1xuXHRcdFx0Zmlyc3Q6IGkgPT09IHN0YXJ0LFxuXHRcdFx0bGFzdDogaSA+PSBsZW5ndGggLSBzdGVwLFxuXHRcdFx0c3RlcCxcblx0XHRcdGluZGV4OiBpLFxuXHRcdFx0bnVtYmVyOiBpICsgMSxcblx0XHRcdGNvdW50OiBsZW5ndGgsXG5cdFx0XHRrZXk6IGlzT2JqZWN0ID8gYXJyYXlbaV0gOiBpLFxuXHRcdFx0ZGF0YVxuXHRcdH07XG5cdFx0c3RvcCA9ICEoYXdhaXQgaXRlcmF0ZShpdGVyYXRpb24sIG9wdGlvbikpO1xuXHR9XG59O1xuXG5jb25zdCBpdGVyYXRlID0gYXN5bmMgKGRhdGEsIG9wdGlvbikgPT4ge1xuXHRsZXQgeyB0ZW1wbGF0ZSwgcmVzb2x2ZXIsIHJlbmRlcmVyLCBjb250YWluZXIsIGNvbmRpdGlvbiwgY29udGV4dCB9ID0gb3B0aW9uO1xuXHRyZXNvbHZlciA9IG5ldyBFeHByZXNzaW9uUmVzb2x2ZXIoeyBjb250ZXh0OiBkYXRhLCBuYW1lOiBcImpzdGwtZm9yZWFjaFwiLCBwYXJlbnQ6IHJlc29sdmVyIH0pO1xuXG5cdGNvbmRpdGlvbiA9IGNvbmRpdGlvbiA/IGF3YWl0IHJlc29sdmVyLnJlc29sdmUoY29uZGl0aW9uLCBmYWxzZSkgOiBmYWxzZTtcblx0aWYgKGNvbmRpdGlvbilcblx0XHRyZXR1cm4gZmFsc2U7XG5cdGNvbnN0IGl0ZW1Db250ZXh0ID0gY29udGV4dC5zdWJDb250ZXh0KHsgcmVzb2x2ZXIsIGNvbnRhaW5lciwgdGVtcGxhdGUsIG1vZGU6IFwiYXBwZW5kXCIgfSk7XG5cdGF3YWl0IHJlbmRlcmVyLnJlbmRlcihpdGVtQ29udGV4dCk7XG5cdGF3YWl0IGl0ZW1Db250ZXh0LnJlYWR5KCk7XG5cdHJldHVybiB0cnVlO1xufTtcblxuY2xhc3MgRm9yZWFjaCBleHRlbmRzIERpcmVjdGl2ZSB7XG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHN1cGVyKCk7XG5cdH1cblxuXHRnZXQgbmFtZSgpIHsgcmV0dXJuIFwiZm9yZWFjaFwiIH1cblx0Z2V0IHJhbmsoKSB7IHJldHVybiBEaXJlY3RpdmUuTUlOX1JBTksgKyAyIH1cblx0Z2V0IHBoYXNlKCkgeyByZXR1cm4gRGlyZWN0aXZlLlBIQVNFLnRlbXBsYXRlIH1cblxuXHRhc3luYyBleGVjdXRlKGNvbnRleHQpIHtcblx0XHRpZiAoIShjb250ZXh0LnRlbXBsYXRlIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpIHx8ICghY29udGV4dC50ZW1wbGF0ZS5hdHRyKEFUVFJJQlVURS5EQVRBKSAmJiAhY29udGV4dC50ZW1wbGF0ZS5hdHRyKEFUVFJJQlVURS5DT1VOVCkpKVxuXHRcdFx0cmV0dXJuIGNvbnRleHQ7XG5cblx0XHRjb250ZXh0Lmlnbm9yZSA9IHRydWU7XG5cdFx0dHJ5IHtcblx0XHRcdGNvbnN0IHsgdGVtcGxhdGUsIHJlc29sdmVyLCByZW5kZXJlciwgY29udGVudCB9ID0gY29udGV4dDtcblx0XHRcdGNvbnN0IGRhdGEgPSAodGVtcGxhdGUuYXR0cihBVFRSSUJVVEUuREFUQSkgfHwgXCJcIikudHJpbSgpO1xuXHRcdFx0Y29uc3QgY291bnQgPSAodGVtcGxhdGUuYXR0cihBVFRSSUJVVEUuQ09VTlQpIHx8IFwiXCIpLnRyaW0oKTtcblx0XHRcdGNvbnN0IG9wdGlvbiA9IHtcblx0XHRcdFx0ZGF0YSxcblx0XHRcdFx0Y291bnQsXG5cdFx0XHRcdHN0YXJ0OiBhd2FpdCByZXNvbHZlci5yZXNvbHZlKHRlbXBsYXRlLmF0dHIoQVRUUklCVVRFLlNUQVJUKSB8fCBcIjBcIiksXG5cdFx0XHRcdHN0ZXA6IGF3YWl0IHJlc29sdmVyLnJlc29sdmUodGVtcGxhdGUuYXR0cihBVFRSSUJVVEUuU1RFUCkgfHwgXCIxXCIpLFxuXHRcdFx0XHR2YXJuYW1lOiAodGVtcGxhdGUuYXR0cihBVFRSSUJVVEUuVkFSKSB8fCBcIml0ZW1cIikudHJpbSgpLFxuXHRcdFx0XHRzdGF0dXM6ICh0ZW1wbGF0ZS5hdHRyKEFUVFJJQlVURS5TVEFUVVMpIHx8IFwic3RhdHVzXCIpLnRyaW0oKSxcblx0XHRcdFx0Y29uZGl0aW9uOiB0ZW1wbGF0ZS5hdHRyKEFUVFJJQlVURS5DT05ESVRJT04pLFxuXHRcdFx0XHR0ZW1wbGF0ZTogdGVtcGxhdGUuY2hpbGROb2Rlcyxcblx0XHRcdFx0cmVzb2x2ZXIsXG5cdFx0XHRcdHJlbmRlcmVyLFxuXHRcdFx0XHRjb250YWluZXI6IGNvbnRlbnQsXG5cdFx0XHRcdGNvbnRleHRcblx0XHRcdH07XG5cdFx0XHRpZiAoaXNVbmRlZmluZWRPck51bGxPckJsYW5rKGRhdGEpICYmICFpc1VuZGVmaW5lZE9yTnVsbE9yQmxhbmsoY291bnQpKVxuXHRcdFx0XHRhd2FpdCBkb0NvdW50KG9wdGlvbik7XG5cdFx0XHRlbHNlIGlmKCFpc1VuZGVmaW5lZE9yTnVsbE9yQmxhbmsoZGF0YSkpXG5cdFx0XHRcdGF3YWl0IGRvRm9yZWFjaChvcHRpb24pO1xuXG5cdFx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRcdGNvbnNvbGUuZXJyb3IoXCJlcnJvciBhdCBqc3RsLWZvcmVhY2g6XCIsIGVycm9yKTtcblx0XHR9XG5cdFx0cmV0dXJuIGNvbnRleHQ7XG5cblx0fVxufTtcblxuRGlyZWN0aXZlLmRlZmluZSh7IGRpcmVjdGl2ZTogbmV3IEZvcmVhY2goKSB9KTsiLCJpbXBvcnQgRGlyZWN0aXZlIGZyb20gXCIuLi9EaXJlY3RpdmUuanNcIjtcblxuY2xhc3MgSWYgZXh0ZW5kcyBEaXJlY3RpdmUge1xuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRzdXBlcigpO1xuXHR9XG5cblx0Z2V0IG5hbWUoKSB7IHJldHVybiBcImlmXCIgfVxuXHRnZXQgcmFuaygpIHsgcmV0dXJuIERpcmVjdGl2ZS5NSU5fUkFOSyArIDEwMDAgfVxuXHRnZXQgcGhhc2UoKSB7IHJldHVybiBEaXJlY3RpdmUuUEhBU0UuaW5pdCB9XG5cblx0YXN5bmMgZXhlY3V0ZShjb250ZXh0KSB7XG5cdFx0Y29uc3QgeyB0ZW1wbGF0ZSB9ID0gY29udGV4dDtcblx0XHRpZiAoISh0ZW1wbGF0ZSBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSB8fCAhdGVtcGxhdGUuYXR0cihcImpzdGwtaWZcIikpXG5cdFx0XHRyZXR1cm4gY29udGV4dDtcblxuXHRcdGNvbnN0IGV4cHJlc3Npb24gPSB0ZW1wbGF0ZS5hdHRyKFwianN0bC1pZlwiKTtcblx0XHRjb25zdCByZXNvbHZlciA9IGNvbnRleHQucmVzb2x2ZXI7XG5cdFx0Y29uc3QgcmVzdWx0ID0gYXdhaXQgcmVzb2x2ZXIucmVzb2x2ZShleHByZXNzaW9uLCBmYWxzZSk7XG5cdFx0aWYgKCFyZXN1bHQpIHtcblx0XHRcdGNvbnRleHQuY29udGVudCA9IG51bGw7XG5cdFx0XHRjb250ZXh0LnN0b3AgPSB0cnVlO1xuXHRcdFx0Y29udGV4dC5pZ25vcmUgPSB0cnVlO1xuXHRcdH1cblxuXHRcdHJldHVybiBjb250ZXh0O1xuXHR9XG59XG5cbkRpcmVjdGl2ZS5kZWZpbmUoeyBkaXJlY3RpdmU6IG5ldyBJZigpIH0pOyIsImltcG9ydCBEaXJlY3RpdmUgZnJvbSBcIi4uL0RpcmVjdGl2ZS5qc1wiO1xuaW1wb3J0IFRlbXBsYXRlIGZyb20gXCIuLi9UZW1wbGF0ZS5qc1wiO1xuXG5jbGFzcyBJbmNsdWRlIGV4dGVuZHMgRGlyZWN0aXZlIHtcblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0c3VwZXIoKTtcblx0fVxuXG5cdGdldCBuYW1lKCkge1xuXHRcdHJldHVybiBcImluY2x1ZGVcIjtcblx0fVxuXHRnZXQgcmFuaygpIHtcblx0XHRyZXR1cm4gRGlyZWN0aXZlLk1JTl9SQU5LO1xuXHR9XG5cdGdldCBwaGFzZSgpIHtcblx0XHRyZXR1cm4gRGlyZWN0aXZlLlBIQVNFLnRlbXBsYXRlO1xuXHR9XG5cblx0YXN5bmMgZXhlY3V0ZShjb250ZXh0KSB7XG5cdFx0aWYgKCEoY29udGV4dC50ZW1wbGF0ZSBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSB8fCAhY29udGV4dC50ZW1wbGF0ZS5hdHRyKFwianN0bC1pbmNsdWRlXCIpKSByZXR1cm4gY29udGV4dDtcblx0XHR0cnkge1xuXHRcdFx0Y29uc3QgeyB0ZW1wbGF0ZSwgcmVzb2x2ZXIsIHJlbmRlcmVyIH0gPSBjb250ZXh0O1xuXHRcdFx0bGV0IGluY2x1ZGUgPSB0ZW1wbGF0ZS5hdHRyKFwianN0bC1pbmNsdWRlXCIpO1xuXHRcdFx0aW5jbHVkZSA9IGF3YWl0IHJlc29sdmVyLnJlc29sdmVUZXh0KGluY2x1ZGUpO1xuXHRcdFx0aW5jbHVkZSA9IG5ldyBVUkwoaW5jbHVkZSwgbG9jYXRpb24pO1xuXHRcdFx0aW5jbHVkZSA9IGF3YWl0IFRlbXBsYXRlLmxvYWQoaW5jbHVkZSk7XG5cblx0XHRcdGNvbnN0IG1vZGUgPSB0ZW1wbGF0ZS5hdHRyKFwianN0bC1pbmNsdWRlLW1vZGVcIikgfHwgXCJyZXBsYWNlXCI7XG5cblx0XHRcdGNvbnN0IHN1YkNvbnRleHQgPSBjb250ZXh0LnN1YkNvbnRleHQoeyB0ZW1wbGF0ZTogaW5jbHVkZSwgY29udGFpbmVyOiBjb250ZXh0LmNvbnRlbnQsIG1vZGV9KTtcblx0XHRcdGF3YWl0IHJlbmRlcmVyLnJlbmRlcihzdWJDb250ZXh0KTtcblx0XHRcdGF3YWl0IHN1YkNvbnRleHQucmVhZHkoKTtcblx0XHRcdGNvbnRleHQuaWdub3JlID0gdHJ1ZTtcblx0XHRcdGNvbnRleHQuc3RvcCA9IGZhbHNlO1xuXG5cdFx0XHRyZXR1cm4gY29udGV4dDtcblx0XHR9IGNhdGNoIChlKSB7XG5cdFx0XHRjb25zb2xlLmVycm9yKGUsIGNvbnRleHQudGVtcGxhdGUpO1xuXHRcdFx0cmV0dXJuIGNvbnRleHQ7XG5cdFx0fVxuXHR9XG59XG5cbkRpcmVjdGl2ZS5kZWZpbmUoeyBkaXJlY3RpdmU6IG5ldyBJbmNsdWRlKCkgfSk7XG4iLCJpbXBvcnQgRGlyZWN0aXZlIGZyb20gXCIuLi9EaXJlY3RpdmUuanNcIjtcbmltcG9ydCBSZXBsYWNlIGZyb20gXCIuLi9lbGVtZW50cy9SZXBsYWNlLmpzXCI7XG5cbmNvbnN0IE1BUktFUl9JR05PUkUgPSBcImpzdGwtaWdub3JlXCI7XG5jb25zdCBNQVJLRVJfSUdOT1JFX0NISUxEUyA9IFwianN0bC1pZ25vcmUtY2hpbGRzXCI7XG5jb25zdCBNQVJLRVJfQVNZTkMgPSBcImpzdGwtYXN5bmNcIjtcbmNvbnN0IE1BUktFUl9UQUdOQU1FID0gXCJqc3RsLXRhZ25hbWVcIjtcbmNvbnN0IE1BUktFUl9JUyA9IFwiaXNcIjtcblxuY2xhc3MgSW5pdGlhbCBleHRlbmRzIERpcmVjdGl2ZSB7XG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHN1cGVyKCk7XG5cdH1cblxuXHRnZXQgbmFtZSgpIHtcblx0XHRyZXR1cm4gXCJpbml0aWFsXCI7XG5cdH1cblx0Z2V0IHJhbmsoKSB7XG5cdFx0cmV0dXJuIERpcmVjdGl2ZS5NSU5fUkFOSztcblx0fVxuXHRnZXQgcGhhc2UoKSB7XG5cdFx0cmV0dXJuIERpcmVjdGl2ZS5QSEFTRS5pbml0O1xuXHR9XG5cblx0YXN5bmMgZXhlY3V0ZShjb250ZXh0KSB7XG5cdFx0Y29uc3QgeyB0ZW1wbGF0ZSwgcmVuZGVyZXIsIHJlc29sdmVyIH0gPSBjb250ZXh0O1xuXHRcdGlmICghKHRlbXBsYXRlIGluc3RhbmNlb2YgRWxlbWVudCkpIHtcblx0XHRcdGNvbnRleHQuY29udGVudCA9IGRvY3VtZW50LmltcG9ydE5vZGUodGVtcGxhdGUsIHRydWUpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRpZiAodGVtcGxhdGUuaGFzQXR0cmlidXRlKE1BUktFUl9JR05PUkUpKSB7XG5cdFx0XHRcdGNvbnRleHQuY29udGVudCA9IGRvY3VtZW50LmltcG9ydE5vZGUodGVtcGxhdGUsIHRydWUpO1xuXHRcdFx0XHRjb250ZXh0LmNvbnRlbnQucmVtb3ZlQXR0cmlidXRlKE1BUktFUl9JR05PUkUpO1xuXHRcdFx0XHRjb250ZXh0LnN0b3AgPSB0cnVlO1xuXHRcdFx0XHRjb250ZXh0Lmlnbm9yZSA9IHRydWU7XG5cdFx0XHR9IGVsc2UgaWYgKGZhbHNlICYmIHRlbXBsYXRlLmhhc0F0dHJpYnV0ZShNQVJLRVJfQVNZTkMpKSB7XG5cdFx0XHRcdGNvbnRleHQuY29udGVudCA9IG5ldyBSZXBsYWNlKCk7XG5cdFx0XHRcdHRlbXBsYXRlLmF0dHIoTUFSS0VSX0FTWU5DLCBudWxsKTtcblx0XHRcdFx0Y29uc3QgcmVuZGVyT3B0aW9uID0gY29udGV4dC50b1JlbmRlck9wdGlvbih7IG1vZGU6IFwicmVwbGFjZVwiLCB0YXJnZXQ6IGNvbnRleHQuY29udGVudCB9KTtcblx0XHRcdFx0c2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHRcdFx0cmVuZGVyZXIucmVuZGVyKHJlbmRlck9wdGlvbik7XG5cdFx0XHRcdH0sIHBhcnNlSW50KHRlbXBsYXRlLmF0dHIoTUFSS0VSX0FTWU5DKSB8fCBcIjI1MFwiKSB8fCAyNTApO1xuXHRcdFx0XHRjb250ZXh0LnN0b3AgPSB0cnVlO1xuXHRcdFx0XHRjb250ZXh0Lmlnbm9yZSA9IHRydWU7XG5cdFx0XHR9IGVsc2UgaWYgKHRlbXBsYXRlIGluc3RhbmNlb2YgSFRNTFRlbXBsYXRlRWxlbWVudCkge1xuXHRcdFx0XHRjb250ZXh0LmNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRlbXBsYXRlLnRhZ05hbWUpO1xuXHRcdFx0XHRjb25zdCBzdWJDb250ZXh0ID0gY29udGV4dC5zdWJDb250ZXh0KHsgdGVtcGxhdGU6IHRlbXBsYXRlLmNvbnRlbnQuY2hpbGROb2RlcywgY29udGFpbmVyOiBjb250ZXh0LmNvbnRlbnQuY29udGVudCB9KTtcblx0XHRcdFx0YXdhaXQgcmVuZGVyZXIucmVuZGVyKHN1YkNvbnRleHQpO1xuXHRcdFx0XHRjb250ZXh0LnN0b3AgPSBmYWxzZTtcblx0XHRcdFx0Y29udGV4dC5pZ25vcmUgPSB0cnVlO1xuXHRcdFx0fSBlbHNlIGlmICh0ZW1wbGF0ZS5oYXNBdHRyaWJ1dGUoTUFSS0VSX1RBR05BTUUpKSB7XG5cdFx0XHRcdGxldCB0YWduYW1lID0gdGVtcGxhdGUuYXR0cihNQVJLRVJfVEFHTkFNRSkudHJpbSgpO1xuXHRcdFx0XHRpZiAodGFnbmFtZS5sZW5ndGggPiAwKSBjb250ZXh0LmNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGF3YWl0IHJlc29sdmVyLnJlc29sdmVUZXh0KHRlbXBsYXRlLmF0dHIoTUFSS0VSX1RBR05BTUUpKSk7XG5cdFx0XHRcdGVsc2Uge1xuXHRcdFx0XHRcdGNvbnRleHQuY29udGVudCA9IGRvY3VtZW50LmltcG9ydE5vZGUodGVtcGxhdGUsIHRydWUpO1xuXHRcdFx0XHRcdGNvbnRleHQuc3RvcCA9IHRydWU7XG5cdFx0XHRcdFx0Y29udGV4dC5pZ25vcmUgPSB0cnVlO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2UgaWYgKHRlbXBsYXRlLnRhZ05hbWUpIHtcblx0XHRcdFx0bGV0IGlzID0gdGVtcGxhdGUuYXR0cihNQVJLRVJfSVMpO1xuXHRcdFx0XHRpZiAoaXMpIHtcblx0XHRcdFx0XHRpcyA9IGF3YWl0IHJlc29sdmVyLnJlc29sdmVUZXh0KGlzKTtcblx0XHRcdFx0XHRjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0ZW1wbGF0ZS50YWdOYW1lLCB7IGlzIH0pO1xuXHRcdFx0XHRcdGVsZW1lbnQuYXR0cihNQVJLRVJfSVMsIGlzKTtcblx0XHRcdFx0XHRjb250ZXh0LmNvbnRlbnQgPSBlbGVtZW50O1xuXHRcdFx0XHR9IGVsc2UgY29udGV4dC5jb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0ZW1wbGF0ZS50YWdOYW1lKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGNvbnRleHQuY29udGVudCA9IGRvY3VtZW50LmltcG9ydE5vZGUodGVtcGxhdGUsIHRydWUpO1xuXHRcdFx0XHRjb250ZXh0LnN0b3AgPSB0cnVlO1xuXHRcdFx0XHRjb250ZXh0Lmlnbm9yZSA9IHRydWU7XG5cdFx0XHR9XG5cblx0XHRcdGlmICghY29udGV4dC5zdG9wICYmIHRlbXBsYXRlLmhhc0F0dHJpYnV0ZShNQVJLRVJfSUdOT1JFX0NISUxEUykpIHtcblx0XHRcdFx0Y29udGV4dC5pZ25vcmUgPSB0cnVlO1xuXHRcdFx0XHRjb25zdCBjbG9uZSA9IGRvY3VtZW50LmltcG9ydE5vZGUodGVtcGxhdGUsIHRydWUpO1xuXHRcdFx0XHRpZiAodGVtcGxhdGUgaW5zdGFuY2VvZiBIVE1MVGVtcGxhdGVFbGVtZW50KSBjb250ZXh0LmNvbnRlbnQuY29udGVudC5hcHBlbmQoY2xvbmUuY29udGVudCk7XG5cdFx0XHRcdGVsc2UgY29udGV4dC5jb250ZW50LmFwcGVuZChjbG9uZS5jaGlsZE5vZGVzKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gY29udGV4dDtcblx0fVxufVxuXG5EaXJlY3RpdmUuZGVmaW5lKHsgZGlyZWN0aXZlOiBuZXcgSW5pdGlhbCgpIH0pO1xuIiwiaW1wb3J0IERpcmVjdGl2ZSBmcm9tIFwiLi4vRGlyZWN0aXZlLmpzXCI7XG5pbXBvcnQgRXhwcmVzc2lvblJlc29sdmVyIGZyb20gXCJAZGVmYXVsdC1qcy9kZWZhdWx0anMtZXhwcmVzc2lvbi1sYW5ndWFnZS9zcmMvRXhwcmVzc2lvblJlc29sdmVyLmpzXCI7XG5cbmNvbnN0IE5BTUUgPSBcIm9uLWZpbmlzaGVkXCI7XG5jb25zdCBBVFRSSUJVVEVfT05fRklOSVNIRUQgPSBganN0bC0ke05BTUV9YDtcbmNvbnN0IEFUVFJJQlVURV9PTl9GSU5JU0hFRF9BU1lOQyA9IGAke0FUVFJJQlVURV9PTl9GSU5JU0hFRH0tYXN5bmNgO1xuXG5jbGFzcyBPbkZpbmlzaGVkIGV4dGVuZHMgRGlyZWN0aXZlIHtcblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0c3VwZXIoKTtcblx0fVxuXG5cdGdldCBuYW1lKCkgeyByZXR1cm4gTkFNRSB9XG5cdGdldCByYW5rKCkgeyByZXR1cm4gRGlyZWN0aXZlLk1BWF9SQU5LIH1cblx0Z2V0IHBoYXNlKCkgeyByZXR1cm4gRGlyZWN0aXZlLlBIQVNFLmZpbmlzaCB9XG5cblxuXG5cdGFzeW5jIGV4ZWN1dGUoY29udGV4dCkge1xuXHRcdGNvbnN0IHsgdGVtcGxhdGUsIGNvbnRlbnQsIHJvb3QgfSA9IGNvbnRleHQ7XG5cdFx0aWYgKCEodGVtcGxhdGUgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkgfHwgIXRlbXBsYXRlLmhhc0F0dHJpYnV0ZShBVFRSSUJVVEVfT05fRklOSVNIRUQpKVxuXHRcdFx0cmV0dXJuIGNvbnRleHQ7XG5cblx0XHRjb25zdCBleHByZXNzaW9uID0gdGVtcGxhdGUuYXR0cihBVFRSSUJVVEVfT05fRklOSVNIRUQpO1xuXHRcdGNvbnN0IGFzeW5jQ2FsbCA9IHRlbXBsYXRlLmhhc0F0dHJpYnV0ZShBVFRSSUJVVEVfT05fRklOSVNIRURfQVNZTkMpO1xuXG5cdFx0Y29uc3QgZGF0YSA9IHtcblx0XHRcdCRlbGVtZW50OiBjb250ZW50LFxuXHRcdFx0JHJvb3Q6IHJvb3QsXG5cdFx0XHQkdGVtcGxhdGU6IHRlbXBsYXRlXG5cdFx0fTtcblx0XHRjb25zdCByZXNvbHZlciA9IG5ldyBFeHByZXNzaW9uUmVzb2x2ZXIoeyBjb250ZXh0OiBkYXRhLCBuYW1lOiBcImpzdGwtZGF0YVwiLCBwYXJlbnQ6IGNvbnRleHQucmVzb2x2ZXIgfSk7XG5cblxuXHRcdGNvbnRleHQuZmluaXNoZWQoYXN5bmMgKCkgPT4ge1xuXHRcdFx0dHJ5IHtcblx0XHRcdFx0aWYoIWFzeW5jQ2FsbClcblx0XHRcdFx0XHRyZXR1cm4gcmVzb2x2ZXIucmVzb2x2ZShleHByZXNzaW9uLCBudWxsKTtcblx0XHRcdFx0XHRcblx0XHRcdFx0cmVzb2x2ZXIucmVzb2x2ZShleHByZXNzaW9uLCBudWxsKTtcblx0XHRcdH0gY2F0Y2ggKGUpIHtcblx0XHRcdFx0Y29uc29sZS5lcnJvcihlKTtcblx0XHRcdH1cblx0XHR9KTtcblxuXHRcdHJldHVybiBjb250ZXh0O1xuXHR9XG59XG5cbkRpcmVjdGl2ZS5kZWZpbmUoeyBkaXJlY3RpdmU6IG5ldyBPbkZpbmlzaGVkKCkgfSk7IiwiaW1wb3J0IERpcmVjdGl2ZSBmcm9tIFwiLi4vRGlyZWN0aXZlLmpzXCI7XG5pbXBvcnQgRXhwcmVzc2lvblJlc29sdmVyIGZyb20gXCJAZGVmYXVsdC1qcy9kZWZhdWx0anMtZXhwcmVzc2lvbi1sYW5ndWFnZS9zcmMvRXhwcmVzc2lvblJlc29sdmVyLmpzXCI7XG5cbmNvbnN0IERJUkVDVElWRU5BTUUgPSBcImpzdGwtcmVwZWF0XCI7XG5jb25zdCBJR05PUkVESVJFQ1RJVkUgPSBuZXcgU2V0KFtESVJFQ1RJVkVOQU1FXSk7XG5cbmNvbnN0IEFUVFJJQlVURSA9IHtcblx0REFUQTogYCR7RElSRUNUSVZFTkFNRX1gLFxuXHRWQVI6IGAke0RJUkVDVElWRU5BTUV9LXZhcmAsXG5cdFNUQVRVUzogYCR7RElSRUNUSVZFTkFNRX0tc3RhdHVzYCxcblx0Q09VTlQ6IGAke0RJUkVDVElWRU5BTUV9LWNvdW50YCxcblx0U1RBUlQ6IGAke0RJUkVDVElWRU5BTUV9LXN0YXJ0YCxcblx0U1RFUDogYCR7RElSRUNUSVZFTkFNRX0tc3RlcGAsXG5cdENPTkRJVElPTjogYCR7RElSRUNUSVZFTkFNRX0tY29uZGl0aW9uYCxcbn07XG5cbmNvbnN0IGRvQ291bnQgPSBhc3luYyAob3B0aW9uKSA9PiB7XG5cdGxldCB7IHN0YXJ0LCBzdGVwLCBjb3VudCwgdmFybmFtZSwgc3RhdHVzLCByZXNvbHZlciB9ID0gb3B0aW9uO1xuXHRjb3VudCA9IGF3YWl0IHJlc29sdmVyLnJlc29sdmUoY291bnQpO1xuXHRjb25zdCBsZW5ndGggPSBzdGFydCArIGNvdW50ICogc3RlcDtcblx0bGV0IHN0b3AgPSBmYWxzZTtcblx0Zm9yIChsZXQgaSA9IHN0YXJ0OyBpIDwgbGVuZ3RoICYmICFzdG9wOyBpID0gaSArIHN0ZXApIHtcblx0XHRjb25zdCBpdGVyYXRpb24gPSB7fTtcblx0XHRpdGVyYXRpb25bdmFybmFtZV0gPSBpO1xuXHRcdGl0ZXJhdGlvbltzdGF0dXNdID0ge1xuXHRcdFx0Zmlyc3Q6IGkgPT09IHN0YXJ0LFxuXHRcdFx0bGFzdDogaSA+PSBsZW5ndGggLSBzdGVwLFxuXHRcdFx0aW5kZXg6IGksXG5cdFx0XHRudW1iZXI6IGkgKyAxLFxuXHRcdFx0c3RlcCxcblx0XHRcdGNvdW50LFxuXHRcdH07XG5cdFx0c3RvcCA9ICEoYXdhaXQgaXRlcmF0ZShpdGVyYXRpb24sIG9wdGlvbikpO1xuXHR9XG59O1xuXG5jb25zdCBkb1JlcGVhdCA9IGFzeW5jIChvcHRpb24pID0+IHtcblx0bGV0IHsgZGF0YSwgc3RhcnQsIHN0ZXAsIGNvdW50LCB2YXJuYW1lLCBzdGF0dXMsIHJlc29sdmVyIH0gPSBvcHRpb247XG5cblx0ZGF0YSA9IGF3YWl0IHJlc29sdmVyLnJlc29sdmUoZGF0YSk7XG5cdGNvbnN0IGlzT2JqZWN0ID0gIShkYXRhIGluc3RhbmNlb2YgQXJyYXkpO1xuXHRsZXQgYXJyYXkgPSBkYXRhO1xuXHRpZiAoaXNPYmplY3QpIGFycmF5ID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoZGF0YSk7XG5cblx0Y291bnQgPSBjb3VudCAhPSBcIlwiID8gYXdhaXQgcmVzb2x2ZXIucmVzb2x2ZShjb3VudCwgMCkgOiBudWxsO1xuXHRjb25zdCBsZW5ndGggPSBjb3VudCA/IE1hdGgubWluKHN0YXJ0ICsgY291bnQsIGFycmF5Lmxlbmd0aCkgOiBhcnJheS5sZW5ndGg7XG5cdGxldCBzdG9wID0gZmFsc2U7XG5cdGZvciAobGV0IGkgPSBzdGFydDsgaSA8IGxlbmd0aCAmJiAhc3RvcDsgaSA9IGkgKyBzdGVwKSB7XG5cdFx0Y29uc3QgaXRlcmF0aW9uID0ge307XG5cdFx0aXRlcmF0aW9uW3Zhcm5hbWVdID0gaXNPYmplY3QgPyBkYXRhW2FycmF5W2ldXSA6IGRhdGFbaV07XG5cdFx0aXRlcmF0aW9uW3N0YXR1c10gPSB7XG5cdFx0XHRmaXJzdDogaSA9PT0gc3RhcnQsXG5cdFx0XHRsYXN0OiBpID49IGxlbmd0aCAtIHN0ZXAsXG5cdFx0XHRzdGVwLFxuXHRcdFx0aW5kZXg6IGksXG5cdFx0XHRudW1iZXI6IGkgKyAxLFxuXHRcdFx0Y291bnQ6IGxlbmd0aCxcblx0XHRcdGtleTogaXNPYmplY3QgPyBhcnJheVtpXSA6IGksXG5cdFx0XHRkYXRhXG5cdFx0fTtcblx0XHRzdG9wID0gIShhd2FpdCBpdGVyYXRlKGl0ZXJhdGlvbiwgb3B0aW9uKSk7XG5cdH1cbn07XG5cbmNvbnN0IGl0ZXJhdGUgPSBhc3luYyAoZGF0YSwgb3B0aW9uKSA9PiB7XG5cdGxldCB7IHRlbXBsYXRlLCByZXNvbHZlciwgcmVuZGVyZXIsIGNvbmRpdGlvbiwgY29udGV4dCB9ID0gb3B0aW9uO1xuXHRyZXNvbHZlciA9IG5ldyBFeHByZXNzaW9uUmVzb2x2ZXIoeyBjb250ZXh0OiBkYXRhLCBuYW1lOiBESVJFQ1RJVkVOQU1FLCBwYXJlbnQ6IHJlc29sdmVyIH0pO1xuXG5cdGNvbmRpdGlvbiA9IGNvbmRpdGlvbiA/IGF3YWl0IHJlc29sdmVyLnJlc29sdmUoY29uZGl0aW9uLCBmYWxzZSkgOiBmYWxzZTtcblx0aWYgKGNvbmRpdGlvbikgcmV0dXJuIGZhbHNlO1xuXG5cdGNvbnN0IGl0ZW1Db250ZXh0ID0gIGNvbnRleHQuc3ViQ29udGV4dCh7IHJlc29sdmVyLCB0ZW1wbGF0ZSwgbW9kZTogXCJhcHBlbmRcIiwgaWdub3JlRGlyZWN0aXZlOiBJR05PUkVESVJFQ1RJVkUgfSlcblx0YXdhaXQgcmVuZGVyZXIucmVuZGVyKGl0ZW1Db250ZXh0KTtcblx0YXdhaXQgaXRlbUNvbnRleHQucmVhZHkoKTtcblxuXHRyZXR1cm4gdHJ1ZTtcbn07XG5cbmNsYXNzIFJlcGVhdCBleHRlbmRzIERpcmVjdGl2ZSB7XG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHN1cGVyKCk7XG5cdH1cblxuXHRnZXQgbmFtZSgpIHtcblx0XHRyZXR1cm4gRElSRUNUSVZFTkFNRTtcblx0fVxuXHRnZXQgcmFuaygpIHtcblx0XHRyZXR1cm4gRGlyZWN0aXZlLk1JTl9SQU5LICsgMztcblx0fVxuXHRnZXQgcGhhc2UoKSB7XG5cdFx0cmV0dXJuIERpcmVjdGl2ZS5QSEFTRS50ZW1wbGF0ZTtcblx0fVxuXG5cdGFzeW5jIGV4ZWN1dGUoY29udGV4dCkge1xuXHRcdGlmICghKGNvbnRleHQudGVtcGxhdGUgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkgfHwgKCFjb250ZXh0LnRlbXBsYXRlLmF0dHIoQVRUUklCVVRFLkRBVEEpICYmICFjb250ZXh0LnRlbXBsYXRlLmF0dHIoQVRUUklCVVRFLkNPVU5UKSkpIHJldHVybiBjb250ZXh0O1xuXG5cdFx0dHJ5IHtcblx0XHRcdGNvbnN0IHsgdGVtcGxhdGUsIHJlc29sdmVyLCByZW5kZXJlciwgY29udGVudCwgY29udGFpbmVyIH0gPSBjb250ZXh0O1xuXHRcdFx0Y29uc3Qgb3B0aW9uID0ge1xuXHRcdFx0XHRkYXRhOiAodGVtcGxhdGUuYXR0cihBVFRSSUJVVEUuREFUQSkgfHwgXCJcIikudHJpbSgpLFxuXHRcdFx0XHRjb3VudDogKHRlbXBsYXRlLmF0dHIoQVRUUklCVVRFLkNPVU5UKSB8fCBcIlwiKS50cmltKCksXG5cdFx0XHRcdHN0YXJ0OiBhd2FpdCByZXNvbHZlci5yZXNvbHZlKHRlbXBsYXRlLmF0dHIoQVRUUklCVVRFLlNUQVJUKSB8fCBcIjBcIiksXG5cdFx0XHRcdHN0ZXA6IGF3YWl0IHJlc29sdmVyLnJlc29sdmUodGVtcGxhdGUuYXR0cihBVFRSSUJVVEUuU1RFUCkgfHwgXCIxXCIpLFxuXHRcdFx0XHR2YXJuYW1lOiAodGVtcGxhdGUuYXR0cihBVFRSSUJVVEUuVkFSKSB8fCBcIml0ZW1cIikudHJpbSgpLFxuXHRcdFx0XHRzdGF0dXM6ICh0ZW1wbGF0ZS5hdHRyKEFUVFJJQlVURS5TVEFUVVMpIHx8IFwic3RhdHVzXCIpLnRyaW0oKSxcblx0XHRcdFx0Y29uZGl0aW9uOiB0ZW1wbGF0ZS5hdHRyKEFUVFJJQlVURS5DT05ESVRJT04pLFxuXHRcdFx0XHR0ZW1wbGF0ZTogdGVtcGxhdGUsXG5cdFx0XHRcdHRhZ25hbWU6IGNvbnRlbnQudGFnTmFtZSxcblx0XHRcdFx0cmVzb2x2ZXIsXG5cdFx0XHRcdHJlbmRlcmVyLFxuXHRcdFx0XHRjb250YWluZXIsXG5cdFx0XHRcdGNvbnRleHQsXG5cdFx0XHR9O1xuXHRcdFx0aWYgKCghb3B0aW9uLmRhdGEgfHwgb3B0aW9uLmRhdGEgPT0gXCJcIikgJiYgb3B0aW9uLmNvdW50KSBhd2FpdCBkb0NvdW50KG9wdGlvbik7XG5cdFx0XHRlbHNlIGF3YWl0IGRvUmVwZWF0KG9wdGlvbik7XG5cdFx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRcdGNvbnNvbGUuZXJyb3IoXCJlcnJvciBhdCBqc3RsLXJlcGVhdDpcIiwgZXJyb3IpO1xuXHRcdH1cblxuXHRcdGNvbnRleHQuY29udGVudCA9IG51bGw7XG5cdFx0Y29udGV4dC5zdG9wID0gdHJ1ZTtcblx0XHRjb250ZXh0Lmlnbm9yZSA9IHRydWU7XG5cdFx0cmV0dXJuIGNvbnRleHQ7XG5cdH1cbn1cblxuRGlyZWN0aXZlLmRlZmluZSh7IGRpcmVjdGl2ZTogbmV3IFJlcGVhdCgpIH0pO1xuIiwiaW1wb3J0IERpcmVjdGl2ZSBmcm9tIFwiLi4vRGlyZWN0aXZlLmpzXCI7XG5cbmNvbnN0IERFRkFVTFRfT1BUSU9OID0ge1xuXHRtb2RlOiBcInRleHRcIixcblx0dW5zZWN1cmU6IGZhbHNlLFxuXHRtYXhMZW5ndGg6IDBcdFxufTtcblxuY29uc3QgU0VDVVJFX0hUTUxfRklMVEVSID0gXCJzY3JpcHQsIHN0eWxlLCBib2R5LCBodG1sLCBoZWFkLCBvYmplY3QsIGxpbmtcIjtcblxuY29uc3QgcmVhZE9wdGlvbiA9IGFzeW5jIChwYXJlbnQsIGNvbnRleHQpID0+IHtcblx0Y29uc3QgcmVzb2x2ZXIgPSBjb250ZXh0LnJlc29sdmVyO1xuXHRyZXR1cm4ge1xuXHRcdG1vZGU6IGF3YWl0IHJlc29sdmVyLnJlc29sdmVUZXh0KChwYXJlbnQuYXR0cihcImpzdGwtdGV4dC1jb250ZW50LXR5cGVcIikgfHwgXCJ0ZXh0XCIpLnRyaW0oKS50b0xvd2VyQ2FzZSgpKSxcblx0XHR1bnNlY3VyZTogcGFyZW50Lmhhc0F0dHJpYnV0ZShcImpzdGwtdGV4dC11bnNlY3VyZVwiKSxcblx0XHRtYXhMZW5ndGg6IHBhcnNlSW50KGF3YWl0IHJlc29sdmVyLnJlc29sdmVUZXh0KHBhcmVudC5hdHRyKFwianN0bC10ZXh0LXRyaW0tbGVuZ3RoXCIpIHx8IFwiMFwiKSlcblx0fTtcbn07XG5cbmNvbnN0IHRyaW1UZXh0TGVuZ3RoID0gKHRleHQsIGxlbmd0aCkgPT4ge1xuXHRyZXR1cm4gdGV4dC5sZW5ndGggPiBsZW5ndGggPyB0ZXh0LnN1YnN0cmluZygwLCBsZW5ndGggLSAzKS50cmltKCkgKyBcIi4uLlwiIDogdGV4dDtcbn07XG5cbmNvbnN0IE1PREVTID0ge1xuXHRcInRleHRcIiA6IGFzeW5jIChvcHRpb24sIGNvbnRleHQpID0+IHtcblx0XHRjb25zdCB7Y29udGVudCwgcmVzb2x2ZXIsIHRlbXBsYXRlfSA9IGNvbnRleHQ7XG5cdFx0XG5cdFx0bGV0IHRleHQgPSBhd2FpdCByZXNvbHZlci5yZXNvbHZlVGV4dCh0ZW1wbGF0ZS50ZXh0Q29udGVudCk7XHRcdFxuXHRcdHRleHQgPSBjcmVhdGUodGV4dCx0cnVlKS5jb250ZW50LnRleHRDb250ZW50O1xuXHRcdGlmKG9wdGlvbi5tYXhMZW5ndGggPiAwKVxuXHRcdFx0dGV4dCA9IHRyaW1UZXh0TGVuZ3RoKHRleHQsIG9wdGlvbi5tYXhMZW5ndGgpO1x0XHRcblx0XHRcblx0XHRjb250ZW50LnRleHRDb250ZW50ID0gdGV4dDtcdFx0XG5cdH0sXG5cdFwiaHRtbFwiOiBhc3luYyAob3B0aW9uLCBjb250ZXh0KSA9PiB7XG5cdFx0Y29uc3Qge3Jlc29sdmVyLCB0ZW1wbGF0ZX0gPSBjb250ZXh0O1xuXHRcdFxuXHRcdGxldCBjb250ZW50ID0gYXdhaXQgcmVzb2x2ZXIucmVzb2x2ZVRleHQodGVtcGxhdGUudGV4dENvbnRlbnQpO1x0XHRcblx0XHRjb250ZW50ID0gY3JlYXRlKGNvbnRlbnQsdHJ1ZSk7XHRcdFxuXHRcdGNvbnRlbnQgPSBkb2N1bWVudC5pbXBvcnROb2RlKGNvbnRlbnQuY29udGVudCwgdHJ1ZSk7XG5cdFx0XG5cdFx0aWYob3B0aW9uLnVuc2VjdXJlKVxuXHRcdFx0Y29udGV4dC5jb250ZW50ID0gY29udGVudDtcdFx0XHRcblx0XHRlbHNle1xuXHRcdFx0Y29udGVudC5maW5kKFNFQ1VSRV9IVE1MX0ZJTFRFUikucmVtb3ZlKCk7XHRcdFx0XG5cdFx0XHRjb250ZXh0LmNvbnRlbnQgPSBjb250ZW50O1xuXHRcdH1cblx0fVxufTtcblxuXG5jbGFzcyBUZXh0Q29udGVudCBleHRlbmRzIERpcmVjdGl2ZSB7XG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHN1cGVyKCk7XG5cdH1cblxuXHRnZXQgbmFtZSgpIHsgcmV0dXJuIFwidGV4dFwiIH1cblx0Z2V0IHJhbmsoKSB7IHJldHVybiBEaXJlY3RpdmUuTUlOX1JBTksgKyAxIH1cblx0Z2V0IHBoYXNlKCkgeyByZXR1cm4gRGlyZWN0aXZlLlBIQVNFLmNvbnRlbnQgfVxuXG5cblxuXHRhc3luYyBleGVjdXRlKGNvbnRleHQpIHtcblx0XHRjb25zdCB7IHRlbXBsYXRlIH0gPSBjb250ZXh0O1xuXHRcdGlmICghKHRlbXBsYXRlIGluc3RhbmNlb2YgVGV4dCkgfHwgdGVtcGxhdGUudGV4dENvbnRlbnQudHJpbSgpLmxlbmd0aCA9PSAwIHx8ICh0ZW1wbGF0ZS5wYXJlbnRFbGVtZW50ICYmIHRlbXBsYXRlLnBhcmVudEVsZW1lbnQuaGFzQXR0cmlidXRlKFwianN0bC10ZXh0LWlnbm9yZVwiKSkpXG5cdFx0XHRyZXR1cm4gY29udGV4dDtcblxuXHRcdGNvbnN0IHBhcmVudCA9IHRlbXBsYXRlLnBhcmVudEVsZW1lbnQ7XG5cdFx0Y29uc3Qgb3B0aW9uID0gcGFyZW50ID8gYXdhaXQgcmVhZE9wdGlvbihwYXJlbnQsIGNvbnRleHQpIDogREVGQVVMVF9PUFRJT047XG5cdFx0XG5cdFx0Y29uc3QgIG1vZGUgPSBNT0RFU1tvcHRpb24ubW9kZV07XG5cdFx0aWYoIW1vZGUpXG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJUZXh0IG1vZGUgXFxcIlwiKyBvcHRpb24ubW9kZSArIFwiXFxcIiBpcyB1bnN1cHBvcnRlZCFcIik7XG5cdFx0XG5cdFx0YXdhaXQgbW9kZShvcHRpb24sIGNvbnRleHQpO1xuXHRcdFxuXHRcdHJldHVybiBjb250ZXh0O1xuXHR9XG59XG5cbkRpcmVjdGl2ZS5kZWZpbmUoeyBkaXJlY3RpdmU6IG5ldyBUZXh0Q29udGVudCgpIH0pOyIsImltcG9ydCBcIi4vSW5pdGlhbC5qc1wiO1xuaW1wb3J0IFwiLi9EYXRhLmpzXCI7XG5pbXBvcnQgXCIuL0lmLmpzXCI7XG5pbXBvcnQgXCIuL0Nob29zZS5qc1wiO1xuaW1wb3J0IFwiLi9JbmNsdWRlLmpzXCI7XG5pbXBvcnQgXCIuL0ZvcmVhY2guanNcIjtcbmltcG9ydCBcIi4vUmVwZWF0LmpzXCI7XG5pbXBvcnQgXCIuL1RleHQuanNcIjtcbmltcG9ydCBcIi4vQXR0cmlidXRlcy5qc1wiO1xuaW1wb3J0IFwiLi9BdHRhY2hFbGVtZW50LmpzXCI7XG5pbXBvcnQgXCIuL09uRmluaXNoZWQuanNcIjsiLCJpbXBvcnQgRGlyZWN0aXZlRWxlbWVudCBmcm9tIFwiLi4vRGlyZWN0aXZlRWxlbWVudC5qc1wiXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlcGxhY2VFbGVtZW50IGV4dGVuZHMgRGlyZWN0aXZlRWxlbWVudHtcblx0Y29uc3RydWN0b3IoKXtcblx0XHRzdXBlcigpO1xuXHRcdFxuXHRcdHRoaXMuYXR0YWNoU2hhZG93KHttb2RlOiAnb3Blbid9KTtcblx0fVxuXHQvKipcblx0ICogRGVsaXZlcnMgbm8gY29udGVudC5cblx0ICpcblx0ICogQHBhcmFtIHtpbXBvcnQoXCIuLi9Db250ZXh0LmpzXCIpLmRlZmF1bHR9IGFDb250ZXh0IC0gdGhlIGNvbnRleHQgb2YgdGhlIHRhZ1xuXHQgKiBAcmV0dXJucyB7UHJvbWlzZTxpbXBvcnQoXCIuLi9Db250ZXh0LmpzXCIpLmRlZmF1bHQ+fSB0aGUgY29udGV4dFxuXHQgKi9cblx0YXN5bmMgZXhlY3V0ZShhQ29udGV4dCl7XG5cdFx0cmV0dXJuIGFDb250ZXh0O1xuXHR9O1x0XHRcbn1cbnRyeXtjdXN0b21FbGVtZW50cy5kZWZpbmUoXCJqc3RsLXJlcGxhY2VcIiwgUmVwbGFjZUVsZW1lbnQpO31jYXRjaChlKXt9Ly9pZ25vcmUiLCJpbXBvcnQgXCIuL1JlcGxhY2UuanNcIiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbmNvbnN0IF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0Y29uc3QgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdGNvbnN0IG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0aWYgKCEobW9kdWxlSWQgaW4gX193ZWJwYWNrX21vZHVsZXNfXykpIHtcblx0XHRkZWxldGUgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0XHRjb25zdCBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIG1vZHVsZUlkICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlci92YWx1ZSBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpOyIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgVGVtcGxhdGUsIHt0b0FzeW5jVGVtcGxhdGVMb2FkZXJ9IGZyb20gXCIuL3NyYy9UZW1wbGF0ZS5qc1wiO1xuaW1wb3J0IFJlbmRlcmVyIGZyb20gXCIuL3NyYy9SZW5kZXJlci5qc1wiO1xuaW1wb3J0IENvbnRleHQgZnJvbSBcIi4vc3JjL0NvbnRleHQuanNcIjtcbmltcG9ydCBEaXJlY3RpdmUgZnJvbSBcIi4vc3JjL0RpcmVjdGl2ZS5qc1wiO1xuaW1wb3J0IERpcmVjdGl2ZUVsZW1lbnQgZnJvbSBcIi4vc3JjL0RpcmVjdGl2ZUVsZW1lbnQuanNcIjtcblxuZXhwb3J0IHtUZW1wbGF0ZSwgUmVuZGVyZXIsIENvbnRleHQsIERpcmVjdGl2ZSwgRGlyZWN0aXZlRWxlbWVudCwgdG9Bc3luY1RlbXBsYXRlTG9hZGVyfTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==