(self["webpackChunksource_map"] = self["webpackChunksource_map"] || []).push([["main"],{

/***/ "./src/app1.js":
/*!*********************!*\
  !*** ./src/app1.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);

console.log('app1')
console.log(lodash__WEBPACK_IMPORTED_MODULE_0___default().join(['a','p','p','1'], '-'))

/***/ }),

/***/ "./src/common.js":
/*!***********************!*\
  !*** ./src/common.js ***!
  \***********************/
/***/ (() => {

console.log('aaacommon')

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/app1.js"), __webpack_exec__("./src/common.js"));
/******/ }
]);
//# sourceMappingURL=main.js.map