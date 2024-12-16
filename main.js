/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_home_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/home.js */ \"./src/modules/home.js\");\n/* harmony import */ var _modules_menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/menu.js */ \"./src/modules/menu.js\");\n/* harmony import */ var _modules_contact_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/contact.js */ \"./src/modules/contact.js\");\nalert(\"Webpack is running!\");\r\n\r\n\r\n\r\n\r\n\r\nfunction clearContent() {\r\n    const content = document.getElementById(\"content\");\r\n    content.textContent = \"\"; // Clears content\r\n}\r\n\r\n// Event Listeners for Tabs\r\ndocument.addEventListener(\"DOMContentLoaded\", () => {\r\n    const homeButton = document.getElementById(\"home-btn\");\r\n    const menuButton = document.getElementById(\"menu-btn\");\r\n    const contactButton = document.getElementById(\"contact-btn\");\r\n\r\n    homeButton.addEventListener(\"click\", () => {\r\n        clearContent();\r\n        (0,_modules_home_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n    });\r\n\r\n    menuButton.addEventListener(\"click\", () => {\r\n        clearContent();\r\n        (0,_modules_menu_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n    });\r\n\r\n    contactButton.addEventListener(\"click\", () => {\r\n        clearContent();\r\n        (0,_modules_contact_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n    });\r\n\r\n    // Additional logic for Menu and Contact buttons goes here\r\n    // e.g., similar calls to other modules\r\n});\r\n\r\n// Initial load for the home page\r\n(0,_modules_home_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n\n\n//# sourceURL=webpack://restaurant/./src/index.js?");

/***/ }),

/***/ "./src/modules/contact.js":
/*!********************************!*\
  !*** ./src/modules/contact.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ contact)\n/* harmony export */ });\nfunction contact() {\r\n    const content = document.getElementById(\"content\");\r\n\r\n    const headline = document.createElement(\"h1\");\r\n    headline.textContent = \"Please contact us!\";\r\n\r\n    const paragraph = document.createElement(\"p\");\r\n    paragraph.textContent = \"larrythelobster@gmail.com Larry the Lobster\";\r\n\r\n    content.appendChild(headline);\r\n    content.appendChild(paragraph);\r\n}\r\n\n\n//# sourceURL=webpack://restaurant/./src/modules/contact.js?");

/***/ }),

/***/ "./src/modules/home.js":
/*!*****************************!*\
  !*** ./src/modules/home.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initialLoad)\n/* harmony export */ });\nfunction initialLoad() {\r\n    const content = document.getElementById(\"content\");\r\n\r\n    const headline = document.createElement(\"h1\");\r\n    headline.textContent = \"Welcome to Our Amazing Restaurant!\";\r\n\r\n    const paragraph = document.createElement(\"p\");\r\n    paragraph.textContent =\r\n        \"We serve the best food in town. Come visit us today!\";\r\n\r\n    content.appendChild(headline);\r\n    content.appendChild(paragraph);\r\n}\r\n\n\n//# sourceURL=webpack://restaurant/./src/modules/home.js?");

/***/ }),

/***/ "./src/modules/menu.js":
/*!*****************************!*\
  !*** ./src/modules/menu.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ menu)\n/* harmony export */ });\nfunction menu() {\r\n    const content = document.getElementById(\"content\");\r\n\r\n    const headline = document.createElement(\"h1\");\r\n    headline.textContent = \"This is our awesome Menu!\";\r\n\r\n    const paragraph = document.createElement(\"p\");\r\n    paragraph.textContent = \"Lobster, Bolognese, Tiramisu and Pie\";\r\n\r\n    content.appendChild(headline);\r\n    content.appendChild(paragraph);\r\n}\r\n\n\n//# sourceURL=webpack://restaurant/./src/modules/menu.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;