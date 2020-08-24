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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/theme-switch/style.scss":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/theme-switch/style.scss ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "/**--- Main Styles ----*/\nhtml.wp-dark-mode-theme-darkmode :not(.wp-dark-mode-ignore):not(mark):not(code):not(pre):not(ins):not(option):not(input):not(select):not(textarea):not(button):not(a):not(video):not(canvas):not(progress):not(iframe):not(svg):not(path):not(.mejs-iframe-overlay):not(.mejs-time-slider):not(.mejs-overlay-play):not(.block-editor-default-block-appender__content) {\n  background-color: #1B2836 !important;\n  color: #fff !important;\n  border-color: #3d5a7a !important; }\n\n/**--- Link Styles ----*/\nhtml.wp-dark-mode-theme-darkmode a:not(.wp-dark-mode-ignore),\nhtml.wp-dark-mode-theme-darkmode a *:not(.wp-dark-mode-ignore) {\n  background-color: transparent !important;\n  color: #459BE6 !important; }\n\n/**--- Link Pseoudo Styles ----*/\nhtml.wp-dark-mode-theme-darkmode a:active,\nhtml.wp-dark-mode-theme-darkmode a:active *,\nhtml.wp-dark-mode-theme-darkmode a:visited,\nhtml.wp-dark-mode-theme-darkmode a:visited * {\n  color: #459BE6 !important;\n  border-color: #3d5a7a !important; }\n\n/**--- Input Styles ----*/\nhtml.wp-dark-mode-theme-darkmode button:not(#collapse-button),\nhtml.wp-dark-mode-theme-darkmode iframe,\nhtml.wp-dark-mode-theme-darkmode iframe *,\nhtml.wp-dark-mode-theme-darkmode input,\nhtml.wp-dark-mode-theme-darkmode input[type=\"button\"],\nhtml.wp-dark-mode-theme-darkmode input[type=\"checkebox\"],\nhtml.wp-dark-mode-theme-darkmode input[type=\"date\"],\nhtml.wp-dark-mode-theme-darkmode input[type=\"datetime-local\"],\nhtml.wp-dark-mode-theme-darkmode input[type=\"email\"],\nhtml.wp-dark-mode-theme-darkmode input[type=\"image\"],\nhtml.wp-dark-mode-theme-darkmode input[type=\"month\"],\nhtml.wp-dark-mode-theme-darkmode input[type=\"number\"],\nhtml.wp-dark-mode-theme-darkmode input[type=\"range\"],\nhtml.wp-dark-mode-theme-darkmode input[type=\"reset\"],\nhtml.wp-dark-mode-theme-darkmode input[type=\"search\"],\nhtml.wp-dark-mode-theme-darkmode input[type=\"submit\"],\nhtml.wp-dark-mode-theme-darkmode input[type=\"tel\"],\nhtml.wp-dark-mode-theme-darkmode input[type=\"text\"],\nhtml.wp-dark-mode-theme-darkmode input[type=\"time\"],\nhtml.wp-dark-mode-theme-darkmode input[type=\"url\"],\nhtml.wp-dark-mode-theme-darkmode input[type=\"week\"],\nhtml.wp-dark-mode-theme-darkmode select,\nhtml.wp-dark-mode-theme-darkmode textarea:not(.block-editor-default-block-appender__content):not(.editor-post-title__input),\nhtml.wp-dark-mode-theme-darkmode i:not(.wp-dark-mode-ignore) {\n  background-color: #2c4158 !important;\n  color: #fff !important;\n  border-color: #3d5a7a !important; }\n  html.wp-dark-mode-theme-darkmode button:not(#collapse-button) *,\n  html.wp-dark-mode-theme-darkmode iframe *,\n  html.wp-dark-mode-theme-darkmode iframe * *,\n  html.wp-dark-mode-theme-darkmode input *,\n  html.wp-dark-mode-theme-darkmode input[type=\"button\"] *,\n  html.wp-dark-mode-theme-darkmode input[type=\"checkebox\"] *,\n  html.wp-dark-mode-theme-darkmode input[type=\"date\"] *,\n  html.wp-dark-mode-theme-darkmode input[type=\"datetime-local\"] *,\n  html.wp-dark-mode-theme-darkmode input[type=\"email\"] *,\n  html.wp-dark-mode-theme-darkmode input[type=\"image\"] *,\n  html.wp-dark-mode-theme-darkmode input[type=\"month\"] *,\n  html.wp-dark-mode-theme-darkmode input[type=\"number\"] *,\n  html.wp-dark-mode-theme-darkmode input[type=\"range\"] *,\n  html.wp-dark-mode-theme-darkmode input[type=\"reset\"] *,\n  html.wp-dark-mode-theme-darkmode input[type=\"search\"] *,\n  html.wp-dark-mode-theme-darkmode input[type=\"submit\"] *,\n  html.wp-dark-mode-theme-darkmode input[type=\"tel\"] *,\n  html.wp-dark-mode-theme-darkmode input[type=\"text\"] *,\n  html.wp-dark-mode-theme-darkmode input[type=\"time\"] *,\n  html.wp-dark-mode-theme-darkmode input[type=\"url\"] *,\n  html.wp-dark-mode-theme-darkmode input[type=\"week\"] *,\n  html.wp-dark-mode-theme-darkmode select *,\n  html.wp-dark-mode-theme-darkmode textarea:not(.block-editor-default-block-appender__content):not(.editor-post-title__input) *,\n  html.wp-dark-mode-theme-darkmode i:not(.wp-dark-mode-ignore) * {\n    background: transparent !important; }\n\n/**--- Main Styles ----*/\nhtml.wp-dark-mode-theme-chathams :not(.wp-dark-mode-ignore):not(mark):not(code):not(pre):not(ins):not(option):not(input):not(select):not(textarea):not(button):not(a):not(video):not(canvas):not(progress):not(iframe):not(svg):not(path):not(.mejs-iframe-overlay):not(.mejs-time-slider):not(.mejs-overlay-play):not(.block-editor-default-block-appender__content) {\n  background-color: #EDEBE8 !important;\n  color: #1e1e1e !important;\n  border-color: #c0b9af !important; }\n\n/**--- Link Styles ----*/\nhtml.wp-dark-mode-theme-chathams a:not(.wp-dark-mode-ignore),\nhtml.wp-dark-mode-theme-chathams a *:not(.wp-dark-mode-ignore) {\n  background-color: transparent !important;\n  color: #105d72 !important; }\n\n/**--- Link Pseoudo Styles ----*/\nhtml.wp-dark-mode-theme-chathams a:active,\nhtml.wp-dark-mode-theme-chathams a:active *,\nhtml.wp-dark-mode-theme-chathams a:visited,\nhtml.wp-dark-mode-theme-chathams a:visited * {\n  color: #105d72 !important;\n  border-color: #c0b9af !important; }\n\n/**--- Input Styles ----*/\nhtml.wp-dark-mode-theme-chathams button:not(#collapse-button),\nhtml.wp-dark-mode-theme-chathams iframe,\nhtml.wp-dark-mode-theme-chathams iframe *,\nhtml.wp-dark-mode-theme-chathams input,\nhtml.wp-dark-mode-theme-chathams input[type=\"button\"],\nhtml.wp-dark-mode-theme-chathams input[type=\"checkebox\"],\nhtml.wp-dark-mode-theme-chathams input[type=\"date\"],\nhtml.wp-dark-mode-theme-chathams input[type=\"datetime-local\"],\nhtml.wp-dark-mode-theme-chathams input[type=\"email\"],\nhtml.wp-dark-mode-theme-chathams input[type=\"image\"],\nhtml.wp-dark-mode-theme-chathams input[type=\"month\"],\nhtml.wp-dark-mode-theme-chathams input[type=\"number\"],\nhtml.wp-dark-mode-theme-chathams input[type=\"range\"],\nhtml.wp-dark-mode-theme-chathams input[type=\"reset\"],\nhtml.wp-dark-mode-theme-chathams input[type=\"search\"],\nhtml.wp-dark-mode-theme-chathams input[type=\"submit\"],\nhtml.wp-dark-mode-theme-chathams input[type=\"tel\"],\nhtml.wp-dark-mode-theme-chathams input[type=\"text\"],\nhtml.wp-dark-mode-theme-chathams input[type=\"time\"],\nhtml.wp-dark-mode-theme-chathams input[type=\"url\"],\nhtml.wp-dark-mode-theme-chathams input[type=\"week\"],\nhtml.wp-dark-mode-theme-chathams select,\nhtml.wp-dark-mode-theme-chathams textarea:not(.block-editor-default-block-appender__content):not(.editor-post-title__input),\nhtml.wp-dark-mode-theme-chathams i:not(.wp-dark-mode-ignore) {\n  background-color: #d7d2cb !important;\n  color: #1e1e1e !important;\n  border-color: #c0b9af !important; }\n  html.wp-dark-mode-theme-chathams button:not(#collapse-button) *,\n  html.wp-dark-mode-theme-chathams iframe *,\n  html.wp-dark-mode-theme-chathams iframe * *,\n  html.wp-dark-mode-theme-chathams input *,\n  html.wp-dark-mode-theme-chathams input[type=\"button\"] *,\n  html.wp-dark-mode-theme-chathams input[type=\"checkebox\"] *,\n  html.wp-dark-mode-theme-chathams input[type=\"date\"] *,\n  html.wp-dark-mode-theme-chathams input[type=\"datetime-local\"] *,\n  html.wp-dark-mode-theme-chathams input[type=\"email\"] *,\n  html.wp-dark-mode-theme-chathams input[type=\"image\"] *,\n  html.wp-dark-mode-theme-chathams input[type=\"month\"] *,\n  html.wp-dark-mode-theme-chathams input[type=\"number\"] *,\n  html.wp-dark-mode-theme-chathams input[type=\"range\"] *,\n  html.wp-dark-mode-theme-chathams input[type=\"reset\"] *,\n  html.wp-dark-mode-theme-chathams input[type=\"search\"] *,\n  html.wp-dark-mode-theme-chathams input[type=\"submit\"] *,\n  html.wp-dark-mode-theme-chathams input[type=\"tel\"] *,\n  html.wp-dark-mode-theme-chathams input[type=\"text\"] *,\n  html.wp-dark-mode-theme-chathams input[type=\"time\"] *,\n  html.wp-dark-mode-theme-chathams input[type=\"url\"] *,\n  html.wp-dark-mode-theme-chathams input[type=\"week\"] *,\n  html.wp-dark-mode-theme-chathams select *,\n  html.wp-dark-mode-theme-chathams textarea:not(.block-editor-default-block-appender__content):not(.editor-post-title__input) *,\n  html.wp-dark-mode-theme-chathams i:not(.wp-dark-mode-ignore) * {\n    background: transparent !important; }\n\n/**--- Main Styles ----*/\nhtml.wp-dark-mode-theme-pumpkin :not(.wp-dark-mode-ignore):not(mark):not(code):not(pre):not(ins):not(option):not(input):not(select):not(textarea):not(button):not(a):not(video):not(canvas):not(progress):not(iframe):not(svg):not(path):not(.mejs-iframe-overlay):not(.mejs-time-slider):not(.mejs-overlay-play):not(.block-editor-default-block-appender__content) {\n  background-color: #1e1d19 !important;\n  color: #d6cb99 !important;\n  border-color: #565347 !important; }\n\n/**--- Link Styles ----*/\nhtml.wp-dark-mode-theme-pumpkin a:not(.wp-dark-mode-ignore),\nhtml.wp-dark-mode-theme-pumpkin a *:not(.wp-dark-mode-ignore) {\n  background-color: transparent !important;\n  color: #ff9323 !important; }\n\n/**--- Link Pseoudo Styles ----*/\nhtml.wp-dark-mode-theme-pumpkin a:active,\nhtml.wp-dark-mode-theme-pumpkin a:active *,\nhtml.wp-dark-mode-theme-pumpkin a:visited,\nhtml.wp-dark-mode-theme-pumpkin a:visited * {\n  color: #ff9323 !important;\n  border-color: #565347 !important; }\n\n/**--- Input Styles ----*/\nhtml.wp-dark-mode-theme-pumpkin button:not(#collapse-button),\nhtml.wp-dark-mode-theme-pumpkin iframe,\nhtml.wp-dark-mode-theme-pumpkin iframe *,\nhtml.wp-dark-mode-theme-pumpkin input,\nhtml.wp-dark-mode-theme-pumpkin input[type=\"button\"],\nhtml.wp-dark-mode-theme-pumpkin input[type=\"checkebox\"],\nhtml.wp-dark-mode-theme-pumpkin input[type=\"date\"],\nhtml.wp-dark-mode-theme-pumpkin input[type=\"datetime-local\"],\nhtml.wp-dark-mode-theme-pumpkin input[type=\"email\"],\nhtml.wp-dark-mode-theme-pumpkin input[type=\"image\"],\nhtml.wp-dark-mode-theme-pumpkin input[type=\"month\"],\nhtml.wp-dark-mode-theme-pumpkin input[type=\"number\"],\nhtml.wp-dark-mode-theme-pumpkin input[type=\"range\"],\nhtml.wp-dark-mode-theme-pumpkin input[type=\"reset\"],\nhtml.wp-dark-mode-theme-pumpkin input[type=\"search\"],\nhtml.wp-dark-mode-theme-pumpkin input[type=\"submit\"],\nhtml.wp-dark-mode-theme-pumpkin input[type=\"tel\"],\nhtml.wp-dark-mode-theme-pumpkin input[type=\"text\"],\nhtml.wp-dark-mode-theme-pumpkin input[type=\"time\"],\nhtml.wp-dark-mode-theme-pumpkin input[type=\"url\"],\nhtml.wp-dark-mode-theme-pumpkin input[type=\"week\"],\nhtml.wp-dark-mode-theme-pumpkin select,\nhtml.wp-dark-mode-theme-pumpkin textarea:not(.block-editor-default-block-appender__content):not(.editor-post-title__input),\nhtml.wp-dark-mode-theme-pumpkin i:not(.wp-dark-mode-ignore) {\n  background-color: #3a3830 !important;\n  color: #d6cb99 !important;\n  border-color: #565347 !important; }\n  html.wp-dark-mode-theme-pumpkin button:not(#collapse-button) *,\n  html.wp-dark-mode-theme-pumpkin iframe *,\n  html.wp-dark-mode-theme-pumpkin iframe * *,\n  html.wp-dark-mode-theme-pumpkin input *,\n  html.wp-dark-mode-theme-pumpkin input[type=\"button\"] *,\n  html.wp-dark-mode-theme-pumpkin input[type=\"checkebox\"] *,\n  html.wp-dark-mode-theme-pumpkin input[type=\"date\"] *,\n  html.wp-dark-mode-theme-pumpkin input[type=\"datetime-local\"] *,\n  html.wp-dark-mode-theme-pumpkin input[type=\"email\"] *,\n  html.wp-dark-mode-theme-pumpkin input[type=\"image\"] *,\n  html.wp-dark-mode-theme-pumpkin input[type=\"month\"] *,\n  html.wp-dark-mode-theme-pumpkin input[type=\"number\"] *,\n  html.wp-dark-mode-theme-pumpkin input[type=\"range\"] *,\n  html.wp-dark-mode-theme-pumpkin input[type=\"reset\"] *,\n  html.wp-dark-mode-theme-pumpkin input[type=\"search\"] *,\n  html.wp-dark-mode-theme-pumpkin input[type=\"submit\"] *,\n  html.wp-dark-mode-theme-pumpkin input[type=\"tel\"] *,\n  html.wp-dark-mode-theme-pumpkin input[type=\"text\"] *,\n  html.wp-dark-mode-theme-pumpkin input[type=\"time\"] *,\n  html.wp-dark-mode-theme-pumpkin input[type=\"url\"] *,\n  html.wp-dark-mode-theme-pumpkin input[type=\"week\"] *,\n  html.wp-dark-mode-theme-pumpkin select *,\n  html.wp-dark-mode-theme-pumpkin textarea:not(.block-editor-default-block-appender__content):not(.editor-post-title__input) *,\n  html.wp-dark-mode-theme-pumpkin i:not(.wp-dark-mode-ignore) * {\n    background: transparent !important; }\n\n/**--- Main Styles ----*/\nhtml.wp-dark-mode-theme-mustard :not(.wp-dark-mode-ignore):not(mark):not(code):not(pre):not(ins):not(option):not(input):not(select):not(textarea):not(button):not(a):not(video):not(canvas):not(progress):not(iframe):not(svg):not(path):not(.mejs-iframe-overlay):not(.mejs-time-slider):not(.mejs-overlay-play):not(.block-editor-default-block-appender__content) {\n  background-color: #151819 !important;\n  color: #d5d6d7 !important;\n  border-color: #444d50 !important; }\n\n/**--- Link Styles ----*/\nhtml.wp-dark-mode-theme-mustard a:not(.wp-dark-mode-ignore),\nhtml.wp-dark-mode-theme-mustard a *:not(.wp-dark-mode-ignore) {\n  background-color: transparent !important;\n  color: #daa40b !important; }\n\n/**--- Link Pseoudo Styles ----*/\nhtml.wp-dark-mode-theme-mustard a:active,\nhtml.wp-dark-mode-theme-mustard a:active *,\nhtml.wp-dark-mode-theme-mustard a:visited,\nhtml.wp-dark-mode-theme-mustard a:visited * {\n  color: #daa40b !important;\n  border-color: #444d50 !important; }\n\n/**--- Input Styles ----*/\nhtml.wp-dark-mode-theme-mustard button:not(#collapse-button),\nhtml.wp-dark-mode-theme-mustard iframe,\nhtml.wp-dark-mode-theme-mustard iframe *,\nhtml.wp-dark-mode-theme-mustard input,\nhtml.wp-dark-mode-theme-mustard input[type=\"button\"],\nhtml.wp-dark-mode-theme-mustard input[type=\"checkebox\"],\nhtml.wp-dark-mode-theme-mustard input[type=\"date\"],\nhtml.wp-dark-mode-theme-mustard input[type=\"datetime-local\"],\nhtml.wp-dark-mode-theme-mustard input[type=\"email\"],\nhtml.wp-dark-mode-theme-mustard input[type=\"image\"],\nhtml.wp-dark-mode-theme-mustard input[type=\"month\"],\nhtml.wp-dark-mode-theme-mustard input[type=\"number\"],\nhtml.wp-dark-mode-theme-mustard input[type=\"range\"],\nhtml.wp-dark-mode-theme-mustard input[type=\"reset\"],\nhtml.wp-dark-mode-theme-mustard input[type=\"search\"],\nhtml.wp-dark-mode-theme-mustard input[type=\"submit\"],\nhtml.wp-dark-mode-theme-mustard input[type=\"tel\"],\nhtml.wp-dark-mode-theme-mustard input[type=\"text\"],\nhtml.wp-dark-mode-theme-mustard input[type=\"time\"],\nhtml.wp-dark-mode-theme-mustard input[type=\"url\"],\nhtml.wp-dark-mode-theme-mustard input[type=\"week\"],\nhtml.wp-dark-mode-theme-mustard select,\nhtml.wp-dark-mode-theme-mustard textarea:not(.block-editor-default-block-appender__content):not(.editor-post-title__input),\nhtml.wp-dark-mode-theme-mustard i:not(.wp-dark-mode-ignore) {\n  background-color: #2c3335 !important;\n  color: #d5d6d7 !important;\n  border-color: #444d50 !important; }\n  html.wp-dark-mode-theme-mustard button:not(#collapse-button) *,\n  html.wp-dark-mode-theme-mustard iframe *,\n  html.wp-dark-mode-theme-mustard iframe * *,\n  html.wp-dark-mode-theme-mustard input *,\n  html.wp-dark-mode-theme-mustard input[type=\"button\"] *,\n  html.wp-dark-mode-theme-mustard input[type=\"checkebox\"] *,\n  html.wp-dark-mode-theme-mustard input[type=\"date\"] *,\n  html.wp-dark-mode-theme-mustard input[type=\"datetime-local\"] *,\n  html.wp-dark-mode-theme-mustard input[type=\"email\"] *,\n  html.wp-dark-mode-theme-mustard input[type=\"image\"] *,\n  html.wp-dark-mode-theme-mustard input[type=\"month\"] *,\n  html.wp-dark-mode-theme-mustard input[type=\"number\"] *,\n  html.wp-dark-mode-theme-mustard input[type=\"range\"] *,\n  html.wp-dark-mode-theme-mustard input[type=\"reset\"] *,\n  html.wp-dark-mode-theme-mustard input[type=\"search\"] *,\n  html.wp-dark-mode-theme-mustard input[type=\"submit\"] *,\n  html.wp-dark-mode-theme-mustard input[type=\"tel\"] *,\n  html.wp-dark-mode-theme-mustard input[type=\"text\"] *,\n  html.wp-dark-mode-theme-mustard input[type=\"time\"] *,\n  html.wp-dark-mode-theme-mustard input[type=\"url\"] *,\n  html.wp-dark-mode-theme-mustard input[type=\"week\"] *,\n  html.wp-dark-mode-theme-mustard select *,\n  html.wp-dark-mode-theme-mustard textarea:not(.block-editor-default-block-appender__content):not(.editor-post-title__input) *,\n  html.wp-dark-mode-theme-mustard i:not(.wp-dark-mode-ignore) * {\n    background: transparent !important; }\n\n/**--- Main Styles ----*/\nhtml.wp-dark-mode-theme-concord :not(.wp-dark-mode-ignore):not(mark):not(code):not(pre):not(ins):not(option):not(input):not(select):not(textarea):not(button):not(a):not(video):not(canvas):not(progress):not(iframe):not(svg):not(path):not(.mejs-iframe-overlay):not(.mejs-time-slider):not(.mejs-overlay-play):not(.block-editor-default-block-appender__content) {\n  background-color: #171717 !important;\n  color: #bfb7c0 !important;\n  border-color: #4a4a4a !important; }\n\n/**--- Link Styles ----*/\nhtml.wp-dark-mode-theme-concord a:not(.wp-dark-mode-ignore),\nhtml.wp-dark-mode-theme-concord a *:not(.wp-dark-mode-ignore) {\n  background-color: transparent !important;\n  color: #f776f0 !important; }\n\n/**--- Link Pseoudo Styles ----*/\nhtml.wp-dark-mode-theme-concord a:active,\nhtml.wp-dark-mode-theme-concord a:active *,\nhtml.wp-dark-mode-theme-concord a:visited,\nhtml.wp-dark-mode-theme-concord a:visited * {\n  color: #f776f0 !important;\n  border-color: #4a4a4a !important; }\n\n/**--- Input Styles ----*/\nhtml.wp-dark-mode-theme-concord button:not(#collapse-button),\nhtml.wp-dark-mode-theme-concord iframe,\nhtml.wp-dark-mode-theme-concord iframe *,\nhtml.wp-dark-mode-theme-concord input,\nhtml.wp-dark-mode-theme-concord input[type=\"button\"],\nhtml.wp-dark-mode-theme-concord input[type=\"checkebox\"],\nhtml.wp-dark-mode-theme-concord input[type=\"date\"],\nhtml.wp-dark-mode-theme-concord input[type=\"datetime-local\"],\nhtml.wp-dark-mode-theme-concord input[type=\"email\"],\nhtml.wp-dark-mode-theme-concord input[type=\"image\"],\nhtml.wp-dark-mode-theme-concord input[type=\"month\"],\nhtml.wp-dark-mode-theme-concord input[type=\"number\"],\nhtml.wp-dark-mode-theme-concord input[type=\"range\"],\nhtml.wp-dark-mode-theme-concord input[type=\"reset\"],\nhtml.wp-dark-mode-theme-concord input[type=\"search\"],\nhtml.wp-dark-mode-theme-concord input[type=\"submit\"],\nhtml.wp-dark-mode-theme-concord input[type=\"tel\"],\nhtml.wp-dark-mode-theme-concord input[type=\"text\"],\nhtml.wp-dark-mode-theme-concord input[type=\"time\"],\nhtml.wp-dark-mode-theme-concord input[type=\"url\"],\nhtml.wp-dark-mode-theme-concord input[type=\"week\"],\nhtml.wp-dark-mode-theme-concord select,\nhtml.wp-dark-mode-theme-concord textarea:not(.block-editor-default-block-appender__content):not(.editor-post-title__input),\nhtml.wp-dark-mode-theme-concord i:not(.wp-dark-mode-ignore) {\n  background-color: #313131 !important;\n  color: #bfb7c0 !important;\n  border-color: #4a4a4a !important; }\n  html.wp-dark-mode-theme-concord button:not(#collapse-button) *,\n  html.wp-dark-mode-theme-concord iframe *,\n  html.wp-dark-mode-theme-concord iframe * *,\n  html.wp-dark-mode-theme-concord input *,\n  html.wp-dark-mode-theme-concord input[type=\"button\"] *,\n  html.wp-dark-mode-theme-concord input[type=\"checkebox\"] *,\n  html.wp-dark-mode-theme-concord input[type=\"date\"] *,\n  html.wp-dark-mode-theme-concord input[type=\"datetime-local\"] *,\n  html.wp-dark-mode-theme-concord input[type=\"email\"] *,\n  html.wp-dark-mode-theme-concord input[type=\"image\"] *,\n  html.wp-dark-mode-theme-concord input[type=\"month\"] *,\n  html.wp-dark-mode-theme-concord input[type=\"number\"] *,\n  html.wp-dark-mode-theme-concord input[type=\"range\"] *,\n  html.wp-dark-mode-theme-concord input[type=\"reset\"] *,\n  html.wp-dark-mode-theme-concord input[type=\"search\"] *,\n  html.wp-dark-mode-theme-concord input[type=\"submit\"] *,\n  html.wp-dark-mode-theme-concord input[type=\"tel\"] *,\n  html.wp-dark-mode-theme-concord input[type=\"text\"] *,\n  html.wp-dark-mode-theme-concord input[type=\"time\"] *,\n  html.wp-dark-mode-theme-concord input[type=\"url\"] *,\n  html.wp-dark-mode-theme-concord input[type=\"week\"] *,\n  html.wp-dark-mode-theme-concord select *,\n  html.wp-dark-mode-theme-concord textarea:not(.block-editor-default-block-appender__content):not(.editor-post-title__input) *,\n  html.wp-dark-mode-theme-concord i:not(.wp-dark-mode-ignore) * {\n    background: transparent !important; }\n\n.wpdm-theme-switch {\n  border-radius: 100%;\n  display: block;\n  height: 22px;\n  width: 22px;\n  margin-right: 5px;\n  cursor: pointer; }\n  .wpdm-theme-switch-wrapper {\n    position: relative;\n    margin-right: 10px;\n    cursor: pointer;\n    display: flex;\n    align-items: center; }\n    .wpdm-theme-switch-wrapper #wpDarkModeThemeSwitch {\n      display: flex;\n      align-items: center; }\n  .wpdm-theme-switch__default {\n    background-image: linear-gradient(130deg, #fff 48.75%, #000 50%); }\n  .wpdm-theme-switch__darkmode {\n    background-image: linear-gradient(130deg, #10161E 48.75%, #fff 50%); }\n  .wpdm-theme-switch__chathams {\n    background-image: linear-gradient(130deg, #edebe8 48.75%, #105d72 50%); }\n  .wpdm-theme-switch__pumpkin {\n    background-image: linear-gradient(130deg, #1e1d19 48.75%, #ff9323 50%); }\n  .wpdm-theme-switch__mustard {\n    background-image: linear-gradient(130deg, #151819 48.75%, #daa40b 50%); }\n  .wpdm-theme-switch__concord {\n    background-image: linear-gradient(130deg, #171717 48.75%, #f776f0 50%); }\n\n#wpdmColorPalettesContainer {\n  position: absolute;\n  top: 50px;\n  width: 170px;\n  background: #555;\n  left: -25px; }\n  #wpdmColorPalettesContainer .wpdm-color-palettes-wrapper {\n    padding: 10px;\n    border: 1px solid; }\n    #wpdmColorPalettesContainer .wpdm-color-palettes-wrapper a {\n      display: flex;\n      margin-bottom: 10px;\n      text-decoration: none;\n      color: #eee;\n      align-items: center; }\n      #wpdmColorPalettesContainer .wpdm-color-palettes-wrapper a:focus {\n        border: none;\n        box-shadow: none; }\n      #wpdmColorPalettesContainer .wpdm-color-palettes-wrapper a .tick {\n        margin-left: auto; }\n\n.wpdm-arrow {\n  border: solid black;\n  border-width: 0 1px 1px 0;\n  display: inline-block;\n  padding: 3px;\n  margin-top: -3px; }\n  .wpdm-arrow.down {\n    transform: rotate(45deg);\n    -webkit-transform: rotate(45deg); }\n", "",{"version":3,"sources":["C:/xampp/htdocs/test/wp-content/plugins/wp-dark-mode/block/src/theme-switch/css/_darkmode.scss","C:/xampp/htdocs/test/wp-content/plugins/wp-dark-mode/block/src/theme-switch/css/_chathams.scss","C:/xampp/htdocs/test/wp-content/plugins/wp-dark-mode/block/src/theme-switch/css/_pumpkin.scss","C:/xampp/htdocs/test/wp-content/plugins/wp-dark-mode/block/src/theme-switch/css/_mustard.scss","C:/xampp/htdocs/test/wp-content/plugins/wp-dark-mode/block/src/theme-switch/css/_concord.scss","C:/xampp/htdocs/test/wp-content/plugins/wp-dark-mode/block/src/theme-switch/css/_common.scss"],"names":[],"mappings":"AAMA,wBAAA;AACA;EACE,oCAAsC;EACtC,sBAA6B;EAC7B,gCAAsC,EAAA;;AAGxC,wBAAA;AACA;;EAGI,wCAAwC;EACxC,yBAA6B,EAAA;;AAKjC,gCAAA;AACA;;;;EAKI,yBAA6B;EAC7B,gCAAsC,EAAA;;AAI1C,yBAAA;AACA;;;;;;;;;;;;;;;;;;;;;;;;EAyBI,oCAAuC;EACvC,sBAA6B;EAC7B,gCAAsC,EAAA;EA3B1C;;;;;;;;;;;;;;;;;;;;;;;;IA8BM,kCAAkC,EAAA;;AC3DxC,wBAAA;AACA;EACE,oCAAsC;EACtC,yBAA6B;EAC7B,gCAAsC,EAAA;;AAGxC,wBAAA;AACA;;EAGI,wCAAwC;EACxC,yBAA6B,EAAA;;AAKjC,gCAAA;AACA;;;;EAKI,yBAA6B;EAC7B,gCAAsC,EAAA;;AAI1C,yBAAA;AACA;;;;;;;;;;;;;;;;;;;;;;;;EAyBI,oCAAuC;EACvC,yBAA6B;EAC7B,gCAAsC,EAAA;EA3B1C;;;;;;;;;;;;;;;;;;;;;;;;IA8BM,kCAAkC,EAAA;;AC3DxC,wBAAA;AACA;EACE,oCAAsC;EACtC,yBAA6B;EAC7B,gCAAsC,EAAA;;AAGxC,wBAAA;AACA;;EAGI,wCAAwC;EACxC,yBAA6B,EAAA;;AAKjC,gCAAA;AACA;;;;EAKI,yBAA6B;EAC7B,gCAAsC,EAAA;;AAI1C,yBAAA;AACA;;;;;;;;;;;;;;;;;;;;;;;;EAyBI,oCAAuC;EACvC,yBAA6B;EAC7B,gCAAsC,EAAA;EA3B1C;;;;;;;;;;;;;;;;;;;;;;;;IA8BM,kCAAkC,EAAA;;AC3DxC,wBAAA;AACA;EACE,oCAAsC;EACtC,yBAA6B;EAC7B,gCAAsC,EAAA;;AAGxC,wBAAA;AACA;;EAGI,wCAAwC;EACxC,yBAA6B,EAAA;;AAKjC,gCAAA;AACA;;;;EAKI,yBAA6B;EAC7B,gCAAsC,EAAA;;AAI1C,yBAAA;AACA;;;;;;;;;;;;;;;;;;;;;;;;EAyBI,oCAAuC;EACvC,yBAA6B;EAC7B,gCAAsC,EAAA;EA3B1C;;;;;;;;;;;;;;;;;;;;;;;;IA8BM,kCAAkC,EAAA;;AC3DxC,wBAAA;AACA;EACE,oCAAsC;EACtC,yBAA6B;EAC7B,gCAAsC,EAAA;;AAGxC,wBAAA;AACA;;EAGI,wCAAwC;EACxC,yBAA6B,EAAA;;AAKjC,gCAAA;AACA;;;;EAKI,yBAA6B;EAC7B,gCAAsC,EAAA;;AAI1C,yBAAA;AACA;;;;;;;;;;;;;;;;;;;;;;;;EAyBI,oCAAuC;EACvC,yBAA6B;EAC7B,gCAAsC,EAAA;EA3B1C;;;;;;;;;;;;;;;;;;;;;;;;IA8BM,kCAAkC,EAAA;;ACjExC;EACE,mBAAmB;EACnB,cAAc;EACd,YAAY;EACZ,WAAW;EACX,iBAAiB;EACjB,eAAe,EAAA;EAEf;IACE,kBAAkB;IAClB,kBAAkB;IAClB,eAAe;IACf,aAAa;IACb,mBAAmB,EAAA;IALpB;MAQG,aAAa;MACb,mBAAmB,EAAA;EAIvB;IACE,gEAAgE,EAAA;EAIlE;IACE,mEAAmE,EAAA;EAGrE;IACE,sEAA0F,EAAA;EAG5F;IACE,sEAAwF,EAAA;EAG1F;IACE,sEAAwF,EAAA;EAG1F;IACE,sEAAyF,EAAA;;AAK7F;EACE,kBAAkB;EAClB,SAAS;EACT,YAAY;EACZ,gBAAgB;EAChB,WAAW,EAAA;EALb;IAQI,aAAa;IACb,iBAAiB,EAAA;IATrB;MAYM,aAAa;MACb,mBAAmB;MACnB,qBAAqB;MACrB,WAAW;MACX,mBAAmB,EAAA;MAhBzB;QAmBQ,YAAY;QACZ,gBAAgB,EAAA;MApBxB;QAwBQ,iBAAiB,EAAA;;AAQzB;EACE,mBAAmB;EACnB,yBAAyB;EACzB,qBAAqB;EACrB,YAAY;EACZ,gBAAgB,EAAA;EALlB;IAQI,wBAAwB;IACxB,gCAAgC,EAAA","file":"style.scss","sourcesContent":["$bg_color: #1B2836;\r\n$text_color: #fff;\r\n$link_color: #459BE6;\r\n$border_color: lighten($bg_color, 20%);\r\n$btn_color: lighten($bg_color, 10%);\r\n\r\n/**--- Main Styles ----*/\r\nhtml.wp-dark-mode-theme-darkmode :not(.wp-dark-mode-ignore):not(mark):not(code):not(pre):not(ins):not(option):not(input):not(select):not(textarea):not(button):not(a):not(video):not(canvas):not(progress):not(iframe):not(svg):not(path):not(.mejs-iframe-overlay):not(.mejs-time-slider):not(.mejs-overlay-play):not(.block-editor-default-block-appender__content) {\r\n  background-color: $bg_color !important;\r\n  color: $text_color !important;\r\n  border-color: $border_color !important;\r\n}\r\n\r\n/**--- Link Styles ----*/\r\nhtml.wp-dark-mode-theme-darkmode {\r\n  a:not(.wp-dark-mode-ignore),\r\n  a *:not(.wp-dark-mode-ignore) {\r\n    background-color: transparent !important;\r\n    color: $link_color !important;\r\n  }\r\n}\r\n\r\n\r\n/**--- Link Pseoudo Styles ----*/\r\nhtml.wp-dark-mode-theme-darkmode {\r\n  a:active,\r\n  a:active *,\r\n  a:visited,\r\n  a:visited * {\r\n    color: $link_color !important;\r\n    border-color: $border_color !important;\r\n  }\r\n}\r\n\r\n/**--- Input Styles ----*/\r\nhtml.wp-dark-mode-theme-darkmode {\r\n  button:not(#collapse-button),\r\n  iframe,\r\n  iframe *,\r\n  input,\r\n  input[type=\"button\"],\r\n  input[type=\"checkebox\"],\r\n  input[type=\"date\"],\r\n  input[type=\"datetime-local\"],\r\n  input[type=\"email\"],\r\n  input[type=\"image\"],\r\n  input[type=\"month\"],\r\n  input[type=\"number\"],\r\n  input[type=\"range\"],\r\n  input[type=\"reset\"],\r\n  input[type=\"search\"],\r\n  input[type=\"submit\"],\r\n  input[type=\"tel\"],\r\n  input[type=\"text\"],\r\n  input[type=\"time\"],\r\n  input[type=\"url\"],\r\n  input[type=\"week\"],\r\n  select,\r\n  textarea:not(.block-editor-default-block-appender__content):not(.editor-post-title__input),\r\n  i:not(.wp-dark-mode-ignore) {\r\n    background-color: $btn_color !important;\r\n    color: $text_color !important;\r\n    border-color: $border_color !important;\r\n\r\n    * {\r\n      background: transparent !important;\r\n    }\r\n\r\n  }\r\n}","$bg_color: #EDEBE8;\r\n$text_color: #1e1e1e;\r\n$link_color: #105d72;\r\n$border_color: darken($bg_color, 20%);\r\n$btn_color: darken($bg_color, 10%);\r\n\r\n/**--- Main Styles ----*/\r\nhtml.wp-dark-mode-theme-chathams :not(.wp-dark-mode-ignore):not(mark):not(code):not(pre):not(ins):not(option):not(input):not(select):not(textarea):not(button):not(a):not(video):not(canvas):not(progress):not(iframe):not(svg):not(path):not(.mejs-iframe-overlay):not(.mejs-time-slider):not(.mejs-overlay-play):not(.block-editor-default-block-appender__content) {\r\n  background-color: $bg_color !important;\r\n  color: $text_color !important;\r\n  border-color: $border_color !important;\r\n}\r\n\r\n/**--- Link Styles ----*/\r\nhtml.wp-dark-mode-theme-chathams {\r\n  a:not(.wp-dark-mode-ignore),\r\n  a *:not(.wp-dark-mode-ignore) {\r\n    background-color: transparent !important;\r\n    color: $link_color !important;\r\n  }\r\n}\r\n\r\n\r\n/**--- Link Pseoudo Styles ----*/\r\nhtml.wp-dark-mode-theme-chathams {\r\n  a:active,\r\n  a:active *,\r\n  a:visited,\r\n  a:visited * {\r\n    color: $link_color !important;\r\n    border-color: $border_color !important;\r\n  }\r\n}\r\n\r\n/**--- Input Styles ----*/\r\nhtml.wp-dark-mode-theme-chathams {\r\n  button:not(#collapse-button),\r\n  iframe,\r\n  iframe *,\r\n  input,\r\n  input[type=\"button\"],\r\n  input[type=\"checkebox\"],\r\n  input[type=\"date\"],\r\n  input[type=\"datetime-local\"],\r\n  input[type=\"email\"],\r\n  input[type=\"image\"],\r\n  input[type=\"month\"],\r\n  input[type=\"number\"],\r\n  input[type=\"range\"],\r\n  input[type=\"reset\"],\r\n  input[type=\"search\"],\r\n  input[type=\"submit\"],\r\n  input[type=\"tel\"],\r\n  input[type=\"text\"],\r\n  input[type=\"time\"],\r\n  input[type=\"url\"],\r\n  input[type=\"week\"],\r\n  select,\r\n  textarea:not(.block-editor-default-block-appender__content):not(.editor-post-title__input),\r\n  i:not(.wp-dark-mode-ignore) {\r\n    background-color: $btn_color !important;\r\n    color: $text_color !important;\r\n    border-color: $border_color !important;\r\n\r\n    * {\r\n      background: transparent !important;\r\n    }\r\n\r\n  }\r\n}","$bg_color: #1e1d19;\r\n$text_color: #d6cb99;\r\n$link_color: #ff9323;\r\n$border_color: lighten($bg_color, 20%);\r\n$btn_color: lighten($bg_color, 10%);\r\n\r\n/**--- Main Styles ----*/\r\nhtml.wp-dark-mode-theme-pumpkin :not(.wp-dark-mode-ignore):not(mark):not(code):not(pre):not(ins):not(option):not(input):not(select):not(textarea):not(button):not(a):not(video):not(canvas):not(progress):not(iframe):not(svg):not(path):not(.mejs-iframe-overlay):not(.mejs-time-slider):not(.mejs-overlay-play):not(.block-editor-default-block-appender__content) {\r\n  background-color: $bg_color !important;\r\n  color: $text_color !important;\r\n  border-color: $border_color !important;\r\n}\r\n\r\n/**--- Link Styles ----*/\r\nhtml.wp-dark-mode-theme-pumpkin {\r\n  a:not(.wp-dark-mode-ignore),\r\n  a *:not(.wp-dark-mode-ignore) {\r\n    background-color: transparent !important;\r\n    color: $link_color !important;\r\n  }\r\n}\r\n\r\n\r\n/**--- Link Pseoudo Styles ----*/\r\nhtml.wp-dark-mode-theme-pumpkin {\r\n  a:active,\r\n  a:active *,\r\n  a:visited,\r\n  a:visited * {\r\n    color: $link_color !important;\r\n    border-color: $border_color !important;\r\n  }\r\n}\r\n\r\n/**--- Input Styles ----*/\r\nhtml.wp-dark-mode-theme-pumpkin {\r\n  button:not(#collapse-button),\r\n  iframe,\r\n  iframe *,\r\n  input,\r\n  input[type=\"button\"],\r\n  input[type=\"checkebox\"],\r\n  input[type=\"date\"],\r\n  input[type=\"datetime-local\"],\r\n  input[type=\"email\"],\r\n  input[type=\"image\"],\r\n  input[type=\"month\"],\r\n  input[type=\"number\"],\r\n  input[type=\"range\"],\r\n  input[type=\"reset\"],\r\n  input[type=\"search\"],\r\n  input[type=\"submit\"],\r\n  input[type=\"tel\"],\r\n  input[type=\"text\"],\r\n  input[type=\"time\"],\r\n  input[type=\"url\"],\r\n  input[type=\"week\"],\r\n  select,\r\n  textarea:not(.block-editor-default-block-appender__content):not(.editor-post-title__input),\r\n  i:not(.wp-dark-mode-ignore) {\r\n    background-color: $btn_color !important;\r\n    color: $text_color !important;\r\n    border-color: $border_color !important;\r\n\r\n    * {\r\n      background: transparent !important;\r\n    }\r\n\r\n  }\r\n}","$bg_color: #151819;\r\n$text_color: #d5d6d7;\r\n$link_color: #daa40b;\r\n$border_color: lighten($bg_color, 20%);\r\n$btn_color: lighten($bg_color, 10%);\r\n\r\n/**--- Main Styles ----*/\r\nhtml.wp-dark-mode-theme-mustard :not(.wp-dark-mode-ignore):not(mark):not(code):not(pre):not(ins):not(option):not(input):not(select):not(textarea):not(button):not(a):not(video):not(canvas):not(progress):not(iframe):not(svg):not(path):not(.mejs-iframe-overlay):not(.mejs-time-slider):not(.mejs-overlay-play):not(.block-editor-default-block-appender__content) {\r\n  background-color: $bg_color !important;\r\n  color: $text_color !important;\r\n  border-color: $border_color !important;\r\n}\r\n\r\n/**--- Link Styles ----*/\r\nhtml.wp-dark-mode-theme-mustard {\r\n  a:not(.wp-dark-mode-ignore),\r\n  a *:not(.wp-dark-mode-ignore) {\r\n    background-color: transparent !important;\r\n    color: $link_color !important;\r\n  }\r\n}\r\n\r\n\r\n/**--- Link Pseoudo Styles ----*/\r\nhtml.wp-dark-mode-theme-mustard {\r\n  a:active,\r\n  a:active *,\r\n  a:visited,\r\n  a:visited * {\r\n    color: $link_color !important;\r\n    border-color: $border_color !important;\r\n  }\r\n}\r\n\r\n/**--- Input Styles ----*/\r\nhtml.wp-dark-mode-theme-mustard {\r\n  button:not(#collapse-button),\r\n  iframe,\r\n  iframe *,\r\n  input,\r\n  input[type=\"button\"],\r\n  input[type=\"checkebox\"],\r\n  input[type=\"date\"],\r\n  input[type=\"datetime-local\"],\r\n  input[type=\"email\"],\r\n  input[type=\"image\"],\r\n  input[type=\"month\"],\r\n  input[type=\"number\"],\r\n  input[type=\"range\"],\r\n  input[type=\"reset\"],\r\n  input[type=\"search\"],\r\n  input[type=\"submit\"],\r\n  input[type=\"tel\"],\r\n  input[type=\"text\"],\r\n  input[type=\"time\"],\r\n  input[type=\"url\"],\r\n  input[type=\"week\"],\r\n  select,\r\n  textarea:not(.block-editor-default-block-appender__content):not(.editor-post-title__input),\r\n  i:not(.wp-dark-mode-ignore) {\r\n    background-color: $btn_color !important;\r\n    color: $text_color !important;\r\n    border-color: $border_color !important;\r\n\r\n    * {\r\n      background: transparent !important;\r\n    }\r\n\r\n  }\r\n}","$bg_color: #171717;\r\n$text_color: #bfb7c0;\r\n$link_color: #f776f0;\r\n$border_color: lighten($bg_color, 20%);\r\n$btn_color: lighten($bg_color, 10%);\r\n\r\n/**--- Main Styles ----*/\r\nhtml.wp-dark-mode-theme-concord :not(.wp-dark-mode-ignore):not(mark):not(code):not(pre):not(ins):not(option):not(input):not(select):not(textarea):not(button):not(a):not(video):not(canvas):not(progress):not(iframe):not(svg):not(path):not(.mejs-iframe-overlay):not(.mejs-time-slider):not(.mejs-overlay-play):not(.block-editor-default-block-appender__content) {\r\n  background-color: $bg_color !important;\r\n  color: $text_color !important;\r\n  border-color: $border_color !important;\r\n}\r\n\r\n/**--- Link Styles ----*/\r\nhtml.wp-dark-mode-theme-concord {\r\n  a:not(.wp-dark-mode-ignore),\r\n  a *:not(.wp-dark-mode-ignore) {\r\n    background-color: transparent !important;\r\n    color: $link_color !important;\r\n  }\r\n}\r\n\r\n\r\n/**--- Link Pseoudo Styles ----*/\r\nhtml.wp-dark-mode-theme-concord {\r\n  a:active,\r\n  a:active *,\r\n  a:visited,\r\n  a:visited * {\r\n    color: $link_color !important;\r\n    border-color: $border_color !important;\r\n  }\r\n}\r\n\r\n/**--- Input Styles ----*/\r\nhtml.wp-dark-mode-theme-concord {\r\n  button:not(#collapse-button),\r\n  iframe,\r\n  iframe *,\r\n  input,\r\n  input[type=\"button\"],\r\n  input[type=\"checkebox\"],\r\n  input[type=\"date\"],\r\n  input[type=\"datetime-local\"],\r\n  input[type=\"email\"],\r\n  input[type=\"image\"],\r\n  input[type=\"month\"],\r\n  input[type=\"number\"],\r\n  input[type=\"range\"],\r\n  input[type=\"reset\"],\r\n  input[type=\"search\"],\r\n  input[type=\"submit\"],\r\n  input[type=\"tel\"],\r\n  input[type=\"text\"],\r\n  input[type=\"time\"],\r\n  input[type=\"url\"],\r\n  input[type=\"week\"],\r\n  select,\r\n  textarea:not(.block-editor-default-block-appender__content):not(.editor-post-title__input),\r\n  i:not(.wp-dark-mode-ignore) {\r\n    background-color: $btn_color !important;\r\n    color: $text_color !important;\r\n    border-color: $border_color !important;\r\n\r\n    * {\r\n      background: transparent !important;\r\n    }\r\n\r\n  }\r\n}",".wpdm-theme-switch {\r\n  border-radius: 100%;\r\n  display: block;\r\n  height: 22px;\r\n  width: 22px;\r\n  margin-right: 5px;\r\n  cursor: pointer;\r\n\r\n  &-wrapper {\r\n    position: relative;\r\n    margin-right: 10px;\r\n    cursor: pointer;\r\n    display: flex;\r\n    align-items: center;\r\n\r\n    #wpDarkModeThemeSwitch {\r\n      display: flex;\r\n      align-items: center;\r\n    }\r\n  }\r\n\r\n  &__default {\r\n    background-image: linear-gradient(130deg, #fff 48.75%, #000 50%);\r\n  }\r\n\r\n\r\n  &__darkmode {\r\n    background-image: linear-gradient(130deg, #10161E 48.75%, #fff 50%);\r\n  }\r\n\r\n  &__chathams {\r\n    background-image: linear-gradient(130deg, rgb(237, 235, 232) 48.75%, rgb(16, 93, 114) 50%);\r\n  }\r\n\r\n  &__pumpkin {\r\n    background-image: linear-gradient(130deg, rgb(30, 29, 25) 48.75%, rgb(255, 147, 35) 50%);\r\n  }\r\n\r\n  &__mustard {\r\n    background-image: linear-gradient(130deg, rgb(21, 24, 25) 48.75%, rgb(218, 164, 11) 50%);\r\n  }\r\n\r\n  &__concord {\r\n    background-image: linear-gradient(130deg, rgb(23, 23, 23) 48.75%, rgb(247, 118, 240) 50%);\r\n  }\r\n\r\n}\r\n\r\n#wpdmColorPalettesContainer {\r\n  position: absolute;\r\n  top: 50px;\r\n  width: 170px;\r\n  background: #555;\r\n  left: -25px;\r\n\r\n  .wpdm-color-palettes-wrapper {\r\n    padding: 10px;\r\n    border: 1px solid;\r\n\r\n    a {\r\n      display: flex;\r\n      margin-bottom: 10px;\r\n      text-decoration: none;\r\n      color: #eee;\r\n      align-items: center;\r\n\r\n      &:focus {\r\n        border: none;\r\n        box-shadow: none;\r\n      }\r\n\r\n      .tick {\r\n        margin-left: auto;\r\n      }\r\n\r\n    }\r\n  }\r\n\r\n}\r\n\r\n.wpdm-arrow {\r\n  border: solid black;\r\n  border-width: 0 1px 1px 0;\r\n  display: inline-block;\r\n  padding: 3px;\r\n  margin-top: -3px;\r\n\r\n  &.down {\r\n    transform: rotate(45deg);\r\n    -webkit-transform: rotate(45deg);\r\n  }\r\n}"]}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./src/Edit.js":
/*!*********************!*\
  !*** ./src/Edit.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Image_Choose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Image-Choose */ "./src/Image-Choose.js");


function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();

  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

var __ = wp.i18n.__;
var _wp$element = wp.element,
    Component = _wp$element.Component,
    Fragment = _wp$element.Fragment,
    createRef = _wp$element.createRef;
var _wp$components = wp.components,
    Placeholder = _wp$components.Placeholder,
    Spinner = _wp$components.Spinner,
    PanelBody = _wp$components.PanelBody,
    SelectControl = _wp$components.SelectControl;
var _wp$editor = wp.editor,
    InspectorControls = _wp$editor.InspectorControls,
    BlockControls = _wp$editor.BlockControls,
    AlignmentToolbar = _wp$editor.AlignmentToolbar;


var Edit = /*#__PURE__*/function (_Component) {
  _inherits(Edit, _Component);

  var _super = _createSuper(Edit);

  function Edit() {
    var _this;

    _classCallCheck(this, Edit);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {
      htmlView: '',
      switchInit: false,
      loadingSwitchView: true
    });

    return _this;
  }

  _createClass(Edit, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var attributes = this.props.attributes;

      if (attributes.style !== 0 && this.state.htmlView === '') {
        this.getSwitchView();
      }
    }
  }, {
    key: "getSwitchView",
    value: function () {
      var _getSwitchView = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var attributes, switch_view;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                attributes = this.props.attributes;
                _context.next = 3;
                return wp.apiFetch({
                  path: 'wp-dark-mode/v1/switch/' + attributes.style
                });

              case 3:
                switch_view = _context.sent;
                this.setState({
                  htmlView: switch_view.success !== undefined && switch_view.success === true ? switch_view.data : '',
                  loadingSwitchView: false
                });

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getSwitchView() {
        return _getSwitchView.apply(this, arguments);
      }

      return getSwitchView;
    }()
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      var attributes = this.props.attributes;

      if (attributes.style !== 0 && this.state.htmlView === '') {
        this.getSwitchView();
      }

      if (this.state.htmlView !== '' && !this.state.switchInit) {
        this.setState({
          switchInit: true
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          attributes = _this$props.attributes,
          setAttributes = _this$props.setAttributes;
      var _this$state = this.state,
          htmlView = _this$state.htmlView,
          loadingSwitchView = _this$state.loadingSwitchView;
      return wp.element.createElement(Fragment, null, wp.element.createElement(InspectorControls, null, wp.element.createElement(PanelBody, {
        title: __('Switch Style', 'wp-dark-mode')
      }, wp.element.createElement(_Image_Choose__WEBPACK_IMPORTED_MODULE_1__["default"], {
        value: attributes.style,
        onChange: function onChange(newValue) {
          _this2.setState({
            htmlView: '',
            switchInit: false,
            loadingSwitchView: true
          });

          setAttributes({
            style: parseInt(newValue)
          });
        }
      }))), wp.element.createElement(BlockControls, null, wp.element.createElement(AlignmentToolbar, {
        value: attributes.alignment,
        onChange: function onChange(val) {
          return setAttributes({
            alignment: val
          });
        }
      })), attributes.style === 0 ? wp.element.createElement(Placeholder, {
        icon: "admin-site-alt",
        label: __('Dark Mode Switch', 'wp-dark-mode')
      }, wp.element.createElement(Spinner, null)) : wp.element.createElement(Fragment, null, loadingSwitchView ? wp.element.createElement(Placeholder, {
        icon: "admin-site-alt",
        label: __('Dark Mode Switch', 'wp-dark-mode')
      }, wp.element.createElement(Spinner, null)) : wp.element.createElement("div", {
        style: {
          paddingTop: '1px',
          textAlign: attributes.alignment
        },
        dangerouslySetInnerHTML: {
          __html: htmlView
        }
      })));
    }
  }]);

  return Edit;
}(Component);

/* harmony default export */ __webpack_exports__["default"] = (Edit);

/***/ }),

/***/ "./src/Image-Choose.js":
/*!*****************************!*\
  !*** ./src/Image-Choose.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();

  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

var __ = wp.i18n.__;
var _wp$element = wp.element,
    Component = _wp$element.Component,
    Fragment = _wp$element.Fragment,
    createRef = _wp$element.createRef;
var _wp$components = wp.components,
    Placeholder = _wp$components.Placeholder,
    Spinner = _wp$components.Spinner,
    PanelBody = _wp$components.PanelBody,
    SelectControl = _wp$components.SelectControl;
var _wp$editor = wp.editor,
    InspectorControls = _wp$editor.InspectorControls,
    BlockControls = _wp$editor.BlockControls,
    AlignmentToolbar = _wp$editor.AlignmentToolbar;

var Image_Choose = /*#__PURE__*/function (_Component) {
  _inherits(Image_Choose, _Component);

  var _super = _createSuper(Image_Choose);

  function Image_Choose() {
    var _this;

    _classCallCheck(this, Image_Choose);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {
      value: _this.props.value
    });

    return _this;
  }

  _createClass(Image_Choose, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var images = ['btn-1-light.png', 'btn-2-light.png', 'btn-3-light.png', 'btn-4-light.png', 'btn-5-light.png', 'btn-6-light.png', 'btn-7.png'];
      return wp.element.createElement("div", {
        className: "image-choose-wrap"
      }, images.map(function (image, i) {
        i = i + 1;
        return wp.element.createElement("label", {
          className: "image-choose-opt ".concat(_this2.state.value == i ? 'active' : ''),
          htmlFor: "style_".concat(i)
        }, wp.element.createElement("input", {
          type: "radio",
          className: "radio",
          id: "style_".concat(i),
          name: "switch_style",
          value: i,
          onChange: function onChange() {
            var val = document.getElementById("style_".concat(i)).value;

            _this2.setState({
              value: val
            });

            _this2.props.onChange(val);
          }
        }), wp.element.createElement("img", {
          src: wpDarkModeAdmin.pluginUrl + 'assets/images/button-presets/' + image,
          className: "image-choose-img"
        }));
      }));
    }
  }]);

  return Image_Choose;
}(Component);

/* harmony default export */ __webpack_exports__["default"] = (Image_Choose);

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Edit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Edit */ "./src/Edit.js");
/* harmony import */ var _logo_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./logo.svg */ "./src/logo.svg");
/* harmony import */ var _theme_switch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./theme-switch */ "./src/theme-switch/index.js");
var __ = wp.i18n.__;
var registerBlockType = wp.blocks.registerBlockType;


/**---- Editor Theme Switch ----*/


registerBlockType('wp-dark-mode/switcher', {
  title: __('Dark Mode Switch', 'wp-dark-mode'),
  icon: {
    src: _logo_svg__WEBPACK_IMPORTED_MODULE_1__["ReactComponent"]
  },
  category: 'common',
  attributes: {
    style: {
      type: 'number',
      default: 1
    },
    alignment: {
      type: 'string'
    }
  },
  supports: {
    align: ['center', 'wide', 'full']
  },
  edit: _Edit__WEBPACK_IMPORTED_MODULE_0__["default"],
  save: function save(_ref) {
    var attributes = _ref.attributes;
    var alignment = attributes.alignment,
        style = attributes.style;
    return wp.element.createElement("div", {
      style: {
        textAlign: alignment
      }
    }, "[wp_dark_mode style=".concat(style, "]"));
  }
});

/***/ }),

/***/ "./src/logo.svg":
/*!**********************!*\
  !*** ./src/logo.svg ***!
  \**********************/
/*! exports provided: default, ReactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReactComponent", function() { return SvgLogo; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var _ref = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  d: "M46.2 2C36.1 4.7 27 10.1 18.6 18.4 10 27.1 5.4 34.6 2.3 45.2c-4.6 15.9-2.4 37.4 5 50.1 6.9 11.7 18.6 22.5 29.9 27.6 11.2 5 29.8 6.6 42.6 3.6 21.9-5.2 40.2-23 46.3-45 3-11.2 2.4-28.6-1.4-39.5-6.9-19.3-23.9-35.1-43.3-40C71.2-.6 56.2-.6 46.2 2zm19.4 27.2c-8.3 8.2-11 14.9-10.4 25.8 1 17.3 13.2 29.7 30.2 30.8 3.9.2 8.9-.1 11-.7 2.2-.6 4.2-.9 4.4-.6.8.7-5.8 9.4-9.8 12.7-2.2 1.9-6.6 4.8-9.7 6.4-5.4 2.7-6.6 2.9-17.3 2.9-11.1 0-11.8-.1-18.5-3.4-20.9-10.3-29.7-34.7-20.1-55.7 2.5-5.4 9.7-13.9 15-17.7 5.7-4.1 14.6-6.6 23.3-6.6l8.2-.1-6.3 6.2z"
});

var SvgLogo = function SvgLogo(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", _extends({
    width: 170.667,
    height: 170.667,
    viewBox: "0 0 128 128"
  }, props), _ref);
};

/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/Pgo8IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDIwMDEwOTA0Ly9FTiIKICJodHRwOi8vd3d3LnczLm9yZy9UUi8yMDAxL1JFQy1TVkctMjAwMTA5MDQvRFREL3N2ZzEwLmR0ZCI+CjxzdmcgdmVyc2lvbj0iMS4wIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiB3aWR0aD0iMTI4LjAwMDAwMHB0IiBoZWlnaHQ9IjEyOC4wMDAwMDBwdCIgdmlld0JveD0iMCAwIDEyOC4wMDAwMDAgMTI4LjAwMDAwMCIKIHByZXNlcnZlQXNwZWN0UmF0aW89InhNaWRZTWlkIG1lZXQiPgo8bWV0YWRhdGE+CkNyZWF0ZWQgYnkgcG90cmFjZSAxLjE2LCB3cml0dGVuIGJ5IFBldGVyIFNlbGluZ2VyIDIwMDEtMjAxOQo8L21ldGFkYXRhPgo8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLjAwMDAwMCwxMjguMDAwMDAwKSBzY2FsZSgwLjEwMDAwMCwtMC4xMDAwMDApIgpmaWxsPSIjMDAwMDAwIiBzdHJva2U9Im5vbmUiPgo8cGF0aCBkPSJNNDYyIDEyNjAgYy0xMDEgLTI3IC0xOTIgLTgxIC0yNzYgLTE2NCAtODYgLTg3IC0xMzIgLTE2MiAtMTYzIC0yNjgKLTQ2IC0xNTkgLTI0IC0zNzQgNTAgLTUwMSA2OSAtMTE3IDE4NiAtMjI1IDI5OSAtMjc2IDExMiAtNTAgMjk4IC02NiA0MjYgLTM2CjIxOSA1MiA0MDIgMjMwIDQ2MyA0NTAgMzAgMTEyIDI0IDI4NiAtMTQgMzk1IC02OSAxOTMgLTIzOSAzNTEgLTQzMyA0MDAgLTEwMgoyNiAtMjUyIDI2IC0zNTIgMHogbTE5NCAtMjcyIGMtODMgLTgyIC0xMTAgLTE0OSAtMTA0IC0yNTggMTAgLTE3MyAxMzIgLTI5NwozMDIgLTMwOCAzOSAtMiA4OSAxIDExMCA3IDIyIDYgNDIgOSA0NCA2IDggLTcgLTU4IC05NCAtOTggLTEyNyAtMjIgLTE5IC02NgotNDggLTk3IC02NCAtNTQgLTI3IC02NiAtMjkgLTE3MyAtMjkgLTExMSAwIC0xMTggMSAtMTg1IDM0IC0yMDkgMTAzIC0yOTcKMzQ3IC0yMDEgNTU3IDI1IDU0IDk3IDEzOSAxNTAgMTc3IDU3IDQxIDE0NiA2NiAyMzMgNjYgbDgyIDEgLTYzIC02MnoiLz4KPC9nPgo8L3N2Zz4K");


/***/ }),

/***/ "./src/theme-switch/Color-Palettes.js":
/*!********************************************!*\
  !*** ./src/theme-switch/Color-Palettes.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();

  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

var _wp$element = wp.element,
    Component = _wp$element.Component,
    Fragment = _wp$element.Fragment;

var Palette = /*#__PURE__*/function (_Component) {
  _inherits(Palette, _Component);

  var _super = _createSuper(Palette);

  function Palette() {
    var _this;

    _classCallCheck(this, Palette);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {
      type: 'default'
    });

    return _this;
  }

  _createClass(Palette, [{
    key: "handleColorPalegtte",
    value: function handleColorPalegtte(type) {
      var elm = document.getElementsByTagName('html')[0];
      var btn = document.getElementById('wpDarkModeThemeSwitchBtn');
      elm.classList.remove('wp-dark-mode-theme-defaul', 'wp-dark-mode-theme-darkmode', 'wp-dark-mode-theme-chathams', 'wp-dark-mode-theme-pumpkin', 'wp-dark-mode-theme-mustard', 'wp-dark-mode-theme-concord');
      elm.classList.add("wp-dark-mode-theme-".concat(type));
      btn.classList.remove('wpdm-theme-switch__default', 'wpdm-theme-switch__darkmode', 'wpdm-theme-switch__chathams', 'wpdm-theme-switch__pumpkin', 'wpdm-theme-switch__mustard', 'wpdm-theme-switch__concord');
      btn.classList.add("wpdm-theme-switch__".concat(type));
      this.setState({
        type: type
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var type = this.state.type;
      var labels = {
        default: 'Default',
        darkmode: 'Darkmode',
        chathams: 'Chathams',
        pumpkin: 'Pumpkin Spice',
        mustard: 'Mustard Seed',
        concord: 'Concord Jam'
      };
      return wp.element.createElement("div", null, Object.entries(labels).map(function (_ref, i) {
        var _ref2 = _slicedToArray(_ref, 2),
            key = _ref2[0],
            label = _ref2[1];

        return wp.element.createElement("a", {
          href: "#",
          className: type == key ? 'active' : '',
          onClick: function onClick() {
            return _this2.handleColorPalegtte(key);
          }
        }, wp.element.createElement("span", {
          className: "wpdm-theme-switch wpdm-theme-switch__".concat(key)
        }), " ", label, type == key ? wp.element.createElement("span", {
          className: "tick"
        }, "\u2713") : '', " ");
      }));
    }
  }]);

  return Palette;
}(Component);

var ColorPalettes = /*#__PURE__*/function (_Component2) {
  _inherits(ColorPalettes, _Component2);

  var _super2 = _createSuper(ColorPalettes);

  function ColorPalettes() {
    _classCallCheck(this, ColorPalettes);

    return _super2.apply(this, arguments);
  }

  _createClass(ColorPalettes, [{
    key: "render",
    value: function render() {
      var active = this.props.active;
      return wp.element.createElement(Fragment, null, active ? wp.element.createElement("div", {
        className: "wpdm-color-palettes-wrapper"
      }, wp.element.createElement(Palette, null)) : '');
    }
  }]);

  return ColorPalettes;
}(Component);

/* harmony default export */ __webpack_exports__["default"] = (ColorPalettes);

/***/ }),

/***/ "./src/theme-switch/index.js":
/*!***********************************!*\
  !*** ./src/theme-switch/index.js ***!
  \***********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Color_Palettes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Color-Palettes */ "./src/theme-switch/Color-Palettes.js");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ "./src/theme-switch/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_1__);
var render = wp.element.render;


document.addEventListener("DOMContentLoaded", function () {
  setTimeout(function () {
    appendThemeSwitch();
  }, 1);
});

function appendThemeSwitch() {
  var node = document.querySelector('.edit-post-header__toolbar');
  var newElem = document.createElement('div');
  newElem.classList.add('wpdm-theme-switch-wrapper');
  var html = "<div id=\"wpDarkModeThemeSwitch\"><button id=\"wpDarkModeThemeSwitchBtn\" class=\"wpdm-theme-switch wpdm-theme-switch__default\"></button> <i class=\"wpdm-arrow down\"></i> </div>";
  html += "<div id=\"wpdmColorPalettesContainer\"></div> ";
  newElem.innerHTML = html;
  node.insertBefore(newElem, node.childNodes[0]);
  document.getElementById('wpDarkModeThemeSwitch').addEventListener('click', editorColorPalettes);
}

var themeChooseActive = false;

function editorColorPalettes() {
  themeChooseActive = !themeChooseActive;
  render(wp.element.createElement(_Color_Palettes__WEBPACK_IMPORTED_MODULE_0__["default"], {
    active: themeChooseActive
  }), document.getElementById('wpdmColorPalettesContainer'));
}

/***/ }),

/***/ "./src/theme-switch/style.scss":
/*!*************************************!*\
  !*** ./src/theme-switch/style.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./style.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/theme-switch/style.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "@babel/runtime/regenerator":
/*!**********************************************!*\
  !*** external {"this":"regeneratorRuntime"} ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["regeneratorRuntime"]; }());

/***/ }),

/***/ "react":
/*!*********************************!*\
  !*** external {"this":"React"} ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["React"]; }());

/***/ })

/******/ });
//# sourceMappingURL=index.js.map