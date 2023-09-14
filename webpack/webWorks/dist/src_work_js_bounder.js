/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!*********************!*\
  !*** ./src/work.js ***!
  \*********************/
// 接受主线程发送的信息
self.onmessage = (message) => {
    console.log('aaa233', message)
    self.postMessage({
      answer: 1111,
    });
  };
/******/ })()
;
//# sourceMappingURL=src_work_js_bounder.js.map