"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./src/components/Loading-Screen/loading-screen.jsx":
/*!**********************************************************!*\
  !*** ./src/components/Loading-Screen/loading-screen.jsx ***!
  \**********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_script__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/script */ \"./node_modules/next/script.js\");\n/* harmony import */ var next_script__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_script__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _common_loadingPace__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common/loadingPace */ \"./src/common/loadingPace.js\");\n/* harmony import */ var _data_app_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../data/app.json */ \"./src/data/app.json\");\n/* harmony import */ var typewriter_effect__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! typewriter-effect */ \"./node_modules/typewriter-effect/dist/react.js\");\n/* harmony import */ var typewriter_effect__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(typewriter_effect__WEBPACK_IMPORTED_MODULE_5__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\nvar _this = undefined;\nvar LoadingScreen = function() {\n    // React.useEffect(() => {\n    // \tlet bodyEl = document.querySelector(\"body\");\n    // \tif (appData.showLoading) {\n    // \t\tloadingPace();\n    // \t\tif (bodyEl.classList.contains(\"hideX\")) {\n    // \t\t\tbodyEl.classList.remove(\"hideX\");\n    // \t\t}\n    // \t} else {\n    // \t\tbodyEl.classList.add(\"hideX\");\n    // \t}\n    // });\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n            className: \"\".concat(_data_app_json__WEBPACK_IMPORTED_MODULE_4__.showLoading === true ? \"showX\" : \"hideX\"),\n            __source: {\n                fileName: \"C:\\\\Users\\\\Rohit\\\\Documents\\\\archo\\\\src\\\\components\\\\Loading-Screen\\\\loading-screen.jsx\",\n                lineNumber: 21,\n                columnNumber: 4\n            },\n            __self: _this,\n            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                id: \"preloader\",\n                className: \"App\",\n                __source: {\n                    fileName: \"C:\\\\Users\\\\Rohit\\\\Documents\\\\archo\\\\src\\\\components\\\\Loading-Screen\\\\loading-screen.jsx\",\n                    lineNumber: 22,\n                    columnNumber: 5\n                },\n                __self: _this,\n                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                    className: \"loading-text\",\n                    style: {\n                        display: \"flex\",\n                        alignContent: \"end\"\n                    },\n                    __source: {\n                        fileName: \"C:\\\\Users\\\\Rohit\\\\Documents\\\\archo\\\\src\\\\components\\\\Loading-Screen\\\\loading-screen.jsx\",\n                        lineNumber: 23,\n                        columnNumber: 6\n                    },\n                    __self: _this,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"img\", {\n                            src: \"/assets/img/loading_logo.png\",\n                            alt: \"logo\",\n                            style: {\n                                width: \"150px !important\",\n                                height: \"100px !important\",\n                                marginBottom: \"20px !important\"\n                            },\n                            className: \"logo\",\n                            __source: {\n                                fileName: \"C:\\\\Users\\\\Rohit\\\\Documents\\\\archo\\\\src\\\\components\\\\Loading-Screen\\\\loading-screen.jsx\",\n                                lineNumber: 31,\n                                columnNumber: 7\n                            },\n                            __self: _this\n                        }),\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((typewriter_effect__WEBPACK_IMPORTED_MODULE_5___default()), {\n                            onInit: function(typewriter) {\n                                typewriter.typeString(\"Peace Interiors\").pauseFor(10).deleteAll().start();\n                            },\n                            __source: {\n                                fileName: \"C:\\\\Users\\\\Rohit\\\\Documents\\\\archo\\\\src\\\\components\\\\Loading-Screen\\\\loading-screen.jsx\",\n                                lineNumber: 41,\n                                columnNumber: 7\n                            },\n                            __self: _this\n                        })\n                    ]\n                })\n            })\n        })\n    }));\n};\n_c = LoadingScreen;\n/* harmony default export */ __webpack_exports__[\"default\"] = (LoadingScreen);\nvar _c;\n$RefreshReg$(_c, \"LoadingScreen\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Mb2FkaW5nLVNjcmVlbi9sb2FkaW5nLXNjcmVlbi5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUF5QjtBQUNPO0FBQ2tCO0FBQ1Q7QUFDQzs7QUFFMUMsR0FBSyxDQUFDSyxhQUFhLEdBQUcsUUFBUSxHQUFGLENBQUM7SUFDNUIsRUFBMEI7SUFDMUIsRUFBZ0Q7SUFDaEQsRUFBOEI7SUFDOUIsRUFBbUI7SUFDbkIsRUFBOEM7SUFDOUMsRUFBdUM7SUFDdkMsRUFBTTtJQUNOLEVBQVk7SUFDWixFQUFtQztJQUNuQyxFQUFLO0lBQ0wsRUFBTTtJQUNOLE1BQU07dUZBRUhDLENBQUc7WUFBQ0MsU0FBUyxFQUFHLEdBQW1ELE9BQWpESix1REFBbUIsS0FBSyxJQUFJLEdBQUcsQ0FBTyxTQUFHLENBQU87Ozs7Ozs7MkZBQ2pFRyxDQUFHO2dCQUFDRyxFQUFFLEVBQUMsQ0FBVztnQkFBQ0YsU0FBUyxFQUFDLENBQUs7Ozs7Ozs7Z0dBQ2pDRCxDQUFHO29CQUNIQyxTQUFTLEVBQUMsQ0FBYztvQkFDeEJHLEtBQUssRUFBRSxDQUFDO3dCQUNQQyxPQUFPLEVBQUUsQ0FBTTt3QkFFZkMsWUFBWSxFQUFFLENBQUs7b0JBQ3BCLENBQUM7Ozs7Ozs7OzZGQUVBQyxDQUFHOzRCQUNIQyxHQUFHLEVBQUMsQ0FBOEI7NEJBQ2xDQyxHQUFHLEVBQUMsQ0FBTTs0QkFDVkwsS0FBSyxFQUFFLENBQUM7Z0NBQ1BNLEtBQUssRUFBRSxDQUFrQjtnQ0FDekJDLE1BQU0sRUFBRSxDQUFrQjtnQ0FDMUJDLFlBQVksRUFBRSxDQUFpQjs0QkFDaEMsQ0FBQzs0QkFDRFgsU0FBUyxFQUFDLENBQU07Ozs7Ozs7OzZGQUVoQkgsMERBQVU7NEJBQ1ZlLE1BQU0sRUFBRSxRQUFRLENBQVBDLFVBQVUsRUFBSyxDQUFDO2dDQUN4QkEsVUFBVSxDQUFDQyxVQUFVLENBQUMsQ0FBaUIsa0JBQUVDLFFBQVEsQ0FBQyxFQUFFLEVBQUVDLFNBQVMsR0FBR0MsS0FBSzs0QkFDeEUsQ0FBQzs7Ozs7Ozs7Ozs7OztBQVlSLENBQUM7S0FqREtuQixhQUFhO0FBbURuQiwrREFBZUEsYUFBYSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0xvYWRpbmctU2NyZWVuL2xvYWRpbmctc2NyZWVuLmpzeD9hYzUxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFNjcmlwdCBmcm9tIFwibmV4dC9zY3JpcHRcIjtcclxuaW1wb3J0IGxvYWRpbmdQYWNlIGZyb20gXCIuLi8uLi9jb21tb24vbG9hZGluZ1BhY2VcIjtcclxuaW1wb3J0IGFwcERhdGEgZnJvbSBcIi4uLy4uL2RhdGEvYXBwLmpzb25cIjtcclxuaW1wb3J0IFR5cGV3cml0ZXIgZnJvbSBcInR5cGV3cml0ZXItZWZmZWN0XCI7XHJcblxyXG5jb25zdCBMb2FkaW5nU2NyZWVuID0gKCkgPT4ge1xyXG5cdC8vIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcblx0Ly8gXHRsZXQgYm9keUVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIik7XHJcblx0Ly8gXHRpZiAoYXBwRGF0YS5zaG93TG9hZGluZykge1xyXG5cdC8vIFx0XHRsb2FkaW5nUGFjZSgpO1xyXG5cdC8vIFx0XHRpZiAoYm9keUVsLmNsYXNzTGlzdC5jb250YWlucyhcImhpZGVYXCIpKSB7XHJcblx0Ly8gXHRcdFx0Ym9keUVsLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRlWFwiKTtcclxuXHQvLyBcdFx0fVxyXG5cdC8vIFx0fSBlbHNlIHtcclxuXHQvLyBcdFx0Ym9keUVsLmNsYXNzTGlzdC5hZGQoXCJoaWRlWFwiKTtcclxuXHQvLyBcdH1cclxuXHQvLyB9KTtcclxuXHRyZXR1cm4gKFxyXG5cdFx0PD5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9e2Ake2FwcERhdGEuc2hvd0xvYWRpbmcgPT09IHRydWUgPyBcInNob3dYXCIgOiBcImhpZGVYXCJ9YH0+XHJcblx0XHRcdFx0PGRpdiBpZD1cInByZWxvYWRlclwiIGNsYXNzTmFtZT1cIkFwcFwiPlxyXG5cdFx0XHRcdFx0PGRpdlxyXG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJsb2FkaW5nLXRleHRcIlxyXG5cdFx0XHRcdFx0XHRzdHlsZT17e1xyXG5cdFx0XHRcdFx0XHRcdGRpc3BsYXk6IFwiZmxleFwiLFxyXG5cclxuXHRcdFx0XHRcdFx0XHRhbGlnbkNvbnRlbnQ6IFwiZW5kXCIsXHJcblx0XHRcdFx0XHRcdH19XHJcblx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdDxpbWdcclxuXHRcdFx0XHRcdFx0XHRzcmM9XCIvYXNzZXRzL2ltZy9sb2FkaW5nX2xvZ28ucG5nXCJcclxuXHRcdFx0XHRcdFx0XHRhbHQ9XCJsb2dvXCJcclxuXHRcdFx0XHRcdFx0XHRzdHlsZT17e1xyXG5cdFx0XHRcdFx0XHRcdFx0d2lkdGg6IFwiMTUwcHggIWltcG9ydGFudFwiLFxyXG5cdFx0XHRcdFx0XHRcdFx0aGVpZ2h0OiBcIjEwMHB4ICFpbXBvcnRhbnRcIixcclxuXHRcdFx0XHRcdFx0XHRcdG1hcmdpbkJvdHRvbTogXCIyMHB4ICFpbXBvcnRhbnRcIixcclxuXHRcdFx0XHRcdFx0XHR9fVxyXG5cdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImxvZ29cIlxyXG5cdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHQ8VHlwZXdyaXRlclxyXG5cdFx0XHRcdFx0XHRcdG9uSW5pdD17KHR5cGV3cml0ZXIpID0+IHtcclxuXHRcdFx0XHRcdFx0XHRcdHR5cGV3cml0ZXIudHlwZVN0cmluZyhcIlBlYWNlIEludGVyaW9yc1wiKS5wYXVzZUZvcigxMCkuZGVsZXRlQWxsKCkuc3RhcnQoKTtcclxuXHRcdFx0XHRcdFx0XHR9fVxyXG5cdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0XHR7Lyoge2FwcERhdGEuc2hvd0xvYWRpbmcgPyAoXHJcblx0XHRcdFx0PFNjcmlwdCBpZD1cInBhY2VcIiBzdHJhdGVneT1cImJlZm9yZUludGVyYWN0aXZlXCIgc3JjPVwiL2Fzc2V0cy9qcy9wYWNlLm1pbi5qc1wiPjwvU2NyaXB0PlxyXG5cdFx0XHQpIDogKFxyXG5cdFx0XHRcdFwiXCJcclxuXHRcdFx0KX0gKi99XHJcblx0XHQ8Lz5cclxuXHQpO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTG9hZGluZ1NjcmVlbjtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiU2NyaXB0IiwibG9hZGluZ1BhY2UiLCJhcHBEYXRhIiwiVHlwZXdyaXRlciIsIkxvYWRpbmdTY3JlZW4iLCJkaXYiLCJjbGFzc05hbWUiLCJzaG93TG9hZGluZyIsImlkIiwic3R5bGUiLCJkaXNwbGF5IiwiYWxpZ25Db250ZW50IiwiaW1nIiwic3JjIiwiYWx0Iiwid2lkdGgiLCJoZWlnaHQiLCJtYXJnaW5Cb3R0b20iLCJvbkluaXQiLCJ0eXBld3JpdGVyIiwidHlwZVN0cmluZyIsInBhdXNlRm9yIiwiZGVsZXRlQWxsIiwic3RhcnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Loading-Screen/loading-screen.jsx\n");

/***/ })

});