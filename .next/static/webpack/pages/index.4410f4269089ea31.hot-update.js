"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./edreya/src/layouts/Settings.js":
/*!****************************************!*\
  !*** ./edreya/src/layouts/Settings.js ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _context_context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context/context */ \"./edreya/src/context/context.js\");\nvar _this = undefined;\n\n\n\nvar _s = $RefreshSig$();\nvar colors = [\n    \"#4169e1\",\n    \"#66B95C\",\n    \"#ff9800\",\n    \"#ff5e94\",\n    \"#fa5b0f\",\n    \"#f39977\",\n    \"#9200ee\",\n    \"#00D4BD\",\n    \"#5e9e9f\",\n    \"#EB4A4C\",\n    \"#666d41\",\n    \"#fe0000\", \n];\nvar Settings = function() {\n    var _this1 = _this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), toggle = ref[0], setToggle = ref[1];\n    var colorContext = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_context__WEBPACK_IMPORTED_MODULE_2__.context);\n    var colorChange = colorContext.colorChange, getColor = colorContext.getColor, changeCursor = colorContext.changeCursor, getMagicCursor = colorContext.getMagicCursor, megicCursor = colorContext.megicCursor;\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        getColor(\"#eb4a4c\");\n        getMagicCursor(\"show\");\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"edrea_tm_settings \".concat(toggle ? \"opened\" : \"\"),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"icon\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        className: \"svg\",\n                        src: \"setting.svg\",\n                        alt: \"\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\sirfo\\\\Downloads\\\\Compressed\\\\edrea-personal-portfolio-react-nextjs-template-2023-03-31-04-55-53-utc\\\\edreya\\\\src\\\\layouts\\\\Settings.js\",\n                        lineNumber: 31,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        className: \"link\",\n                        href: \"#\",\n                        onClick: function() {\n                            return setToggle(!toggle);\n                        }\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\sirfo\\\\Downloads\\\\Compressed\\\\edrea-personal-portfolio-react-nextjs-template-2023-03-31-04-55-53-utc\\\\edreya\\\\src\\\\layouts\\\\Settings.js\",\n                        lineNumber: 32,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\sirfo\\\\Downloads\\\\Compressed\\\\edrea-personal-portfolio-react-nextjs-template-2023-03-31-04-55-53-utc\\\\edreya\\\\src\\\\layouts\\\\Settings.js\",\n                lineNumber: 30,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"wrapper\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"title\",\n                        children: \"Unlimited Colors\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\sirfo\\\\Downloads\\\\Compressed\\\\edrea-personal-portfolio-react-nextjs-template-2023-03-31-04-55-53-utc\\\\edreya\\\\src\\\\layouts\\\\Settings.js\",\n                        lineNumber: 35,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                        className: \"colors\",\n                        children: colors.map(function(color, i) {\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    href: \"#\",\n                                    \"data-color\": color,\n                                    style: {\n                                        backgroundColor: color,\n                                        marginRight: \"5px\"\n                                    },\n                                    onClick: function() {\n                                        return colorChange(color);\n                                    }\n                                }, i, false, {\n                                    fileName: \"C:\\\\Users\\\\sirfo\\\\Downloads\\\\Compressed\\\\edrea-personal-portfolio-react-nextjs-template-2023-03-31-04-55-53-utc\\\\edreya\\\\src\\\\layouts\\\\Settings.js\",\n                                    lineNumber: 39,\n                                    columnNumber: 15\n                                }, _this1)\n                            }, i, false, {\n                                fileName: \"C:\\\\Users\\\\sirfo\\\\Downloads\\\\Compressed\\\\edrea-personal-portfolio-react-nextjs-template-2023-03-31-04-55-53-utc\\\\edreya\\\\src\\\\layouts\\\\Settings.js\",\n                                lineNumber: 38,\n                                columnNumber: 13\n                            }, _this1);\n                        })\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\sirfo\\\\Downloads\\\\Compressed\\\\edrea-personal-portfolio-react-nextjs-template-2023-03-31-04-55-53-utc\\\\edreya\\\\src\\\\layouts\\\\Settings.js\",\n                        lineNumber: 36,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"title\",\n                        children: \"Magic Cursor\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\sirfo\\\\Downloads\\\\Compressed\\\\edrea-personal-portfolio-react-nextjs-template-2023-03-31-04-55-53-utc\\\\edreya\\\\src\\\\layouts\\\\Settings.js\",\n                        lineNumber: 49,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                        className: \"cursor\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    className: \"\".concat(megicCursor == \"show\" ? \"showme\" : \"\", \" show\"),\n                                    onClick: function() {\n                                        return changeCursor(\"show\");\n                                    },\n                                    href: \"#\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\sirfo\\\\Downloads\\\\Compressed\\\\edrea-personal-portfolio-react-nextjs-template-2023-03-31-04-55-53-utc\\\\edreya\\\\src\\\\layouts\\\\Settings.js\",\n                                    lineNumber: 52,\n                                    columnNumber: 13\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\sirfo\\\\Downloads\\\\Compressed\\\\edrea-personal-portfolio-react-nextjs-template-2023-03-31-04-55-53-utc\\\\edreya\\\\src\\\\layouts\\\\Settings.js\",\n                                lineNumber: 51,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    className: \"\".concat(megicCursor != \"show\" ? \"showme\" : \"hide\"),\n                                    href: \"#\",\n                                    onClick: function() {\n                                        return changeCursor(\"hide\");\n                                    },\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                        className: \"svg\",\n                                        src: \"arrow.svg\",\n                                        alt: \"arrow\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\sirfo\\\\Downloads\\\\Compressed\\\\edrea-personal-portfolio-react-nextjs-template-2023-03-31-04-55-53-utc\\\\edreya\\\\src\\\\layouts\\\\Settings.js\",\n                                        lineNumber: 64,\n                                        columnNumber: 15\n                                    }, _this)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\sirfo\\\\Downloads\\\\Compressed\\\\edrea-personal-portfolio-react-nextjs-template-2023-03-31-04-55-53-utc\\\\edreya\\\\src\\\\layouts\\\\Settings.js\",\n                                    lineNumber: 59,\n                                    columnNumber: 13\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\sirfo\\\\Downloads\\\\Compressed\\\\edrea-personal-portfolio-react-nextjs-template-2023-03-31-04-55-53-utc\\\\edreya\\\\src\\\\layouts\\\\Settings.js\",\n                                lineNumber: 58,\n                                columnNumber: 11\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\sirfo\\\\Downloads\\\\Compressed\\\\edrea-personal-portfolio-react-nextjs-template-2023-03-31-04-55-53-utc\\\\edreya\\\\src\\\\layouts\\\\Settings.js\",\n                        lineNumber: 50,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\sirfo\\\\Downloads\\\\Compressed\\\\edrea-personal-portfolio-react-nextjs-template-2023-03-31-04-55-53-utc\\\\edreya\\\\src\\\\layouts\\\\Settings.js\",\n                lineNumber: 34,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\sirfo\\\\Downloads\\\\Compressed\\\\edrea-personal-portfolio-react-nextjs-template-2023-03-31-04-55-53-utc\\\\edreya\\\\src\\\\layouts\\\\Settings.js\",\n        lineNumber: 29,\n        columnNumber: 5\n    }, _this);\n};\n_s(Settings, \"Mb+ZywcASN0v2FMEX9rto1I9gfU=\");\n_c = Settings;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Settings);\nvar _c;\n$RefreshReg$(_c, \"Settings\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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WUFBWSxDQUFDLE1BQU0sQ0FBQztxQ0FBQTtvQ0FDbkNTLElBQUksRUFBQyxHQUFHOzs7Ozt5Q0FDUjs7Ozs7cUNBQ0M7MENBQ0wsOERBQUNPLElBQUU7MENBQ0QsNEVBQUNSLEdBQUM7b0NBQ0FKLFNBQVMsRUFBRSxFQUFDLENBQTRDLE9BQTFDRixXQUFXLElBQUksTUFBTSxHQUFHLFFBQVEsR0FBRyxNQUFNLENBQUU7b0NBQ3pETyxJQUFJLEVBQUMsR0FBRztvQ0FDUkMsT0FBTyxFQUFFOytDQUFNVixZQUFZLENBQUMsTUFBTSxDQUFDO3FDQUFBOzhDQUVuQyw0RUFBQ0ssS0FBRzt3Q0FBQ0QsU0FBUyxFQUFDLEtBQUs7d0NBQUNFLEdBQUcsRUFBQyxXQUFXO3dDQUFDQyxHQUFHLEVBQUMsT0FBTzs7Ozs7NkNBQUc7Ozs7O3lDQUNqRDs7Ozs7cUNBQ0Q7Ozs7Ozs2QkFDRjs7Ozs7O3FCQUNEOzs7Ozs7YUFDRixDQUNOO0NBQ0g7R0FwREtiLFFBQVE7QUFBUkEsS0FBQUEsUUFBUTtBQXFEZCwrREFBZUEsUUFBUSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2VkcmV5YS9zcmMvbGF5b3V0cy9TZXR0aW5ncy5qcz9kNGNhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUNvbnRleHQsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgY29udGV4dCB9IGZyb20gXCIuLi9jb250ZXh0L2NvbnRleHRcIjtcclxuXHJcbmNvbnN0IGNvbG9ycyA9IFtcclxuICBcIiM0MTY5ZTFcIixcclxuICBcIiM2NkI5NUNcIixcclxuICBcIiNmZjk4MDBcIixcclxuICBcIiNmZjVlOTRcIixcclxuICBcIiNmYTViMGZcIixcclxuICBcIiNmMzk5NzdcIixcclxuICBcIiM5MjAwZWVcIixcclxuICBcIiMwMEQ0QkRcIixcclxuICBcIiM1ZTllOWZcIixcclxuICBcIiNFQjRBNENcIixcclxuICBcIiM2NjZkNDFcIixcclxuICBcIiNmZTAwMDBcIixcclxuXTtcclxuXHJcbmNvbnN0IFNldHRpbmdzID0gKCkgPT4ge1xyXG4gIGNvbnN0IFt0b2dnbGUsIHNldFRvZ2dsZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgY29sb3JDb250ZXh0ID0gdXNlQ29udGV4dChjb250ZXh0KTtcclxuICBjb25zdCB7IGNvbG9yQ2hhbmdlLCBnZXRDb2xvciwgY2hhbmdlQ3Vyc29yLCBnZXRNYWdpY0N1cnNvciwgbWVnaWNDdXJzb3IgfSA9XHJcbiAgICBjb2xvckNvbnRleHQ7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGdldENvbG9yKFwiI2ViNGE0Y1wiKTtcclxuICAgIGdldE1hZ2ljQ3Vyc29yKFwic2hvd1wiKTtcclxuICB9LCBbXSk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtgZWRyZWFfdG1fc2V0dGluZ3MgJHt0b2dnbGUgPyBcIm9wZW5lZFwiIDogXCJcIn1gfT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJpY29uXCI+XHJcbiAgICAgICAgPGltZyBjbGFzc05hbWU9XCJzdmdcIiBzcmM9XCJzZXR0aW5nLnN2Z1wiIGFsdD1cIlwiIC8+XHJcbiAgICAgICAgPGEgY2xhc3NOYW1lPVwibGlua1wiIGhyZWY9XCIjXCIgb25DbGljaz17KCkgPT4gc2V0VG9nZ2xlKCF0b2dnbGUpfSAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3cmFwcGVyXCI+XHJcbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGl0bGVcIj5VbmxpbWl0ZWQgQ29sb3JzPC9zcGFuPlxyXG4gICAgICAgIDx1bCBjbGFzc05hbWU9XCJjb2xvcnNcIj5cclxuICAgICAgICAgIHtjb2xvcnMubWFwKChjb2xvciwgaSkgPT4gKFxyXG4gICAgICAgICAgICA8bGkga2V5PXtpfT5cclxuICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAga2V5PXtpfVxyXG4gICAgICAgICAgICAgICAgaHJlZj1cIiNcIlxyXG4gICAgICAgICAgICAgICAgZGF0YS1jb2xvcj17Y29sb3J9XHJcbiAgICAgICAgICAgICAgICBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6IGNvbG9yLCBtYXJnaW5SaWdodDogYDVweGAgfX1cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGNvbG9yQ2hhbmdlKGNvbG9yKX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPC91bD5cclxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0aXRsZVwiPk1hZ2ljIEN1cnNvcjwvc3Bhbj5cclxuICAgICAgICA8dWwgY2xhc3NOYW1lPVwiY3Vyc29yXCI+XHJcbiAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHttZWdpY0N1cnNvciA9PSBcInNob3dcIiA/IFwic2hvd21lXCIgOiBcIlwifSBzaG93YH1cclxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBjaGFuZ2VDdXJzb3IoXCJzaG93XCIpfVxyXG4gICAgICAgICAgICAgIGhyZWY9XCIjXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHttZWdpY0N1cnNvciAhPSBcInNob3dcIiA/IFwic2hvd21lXCIgOiBcImhpZGVcIn1gfVxyXG4gICAgICAgICAgICAgIGhyZWY9XCIjXCJcclxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBjaGFuZ2VDdXJzb3IoXCJoaWRlXCIpfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJzdmdcIiBzcmM9XCJhcnJvdy5zdmdcIiBhbHQ9XCJhcnJvd1wiIC8+XHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgPC91bD5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBTZXR0aW5ncztcclxuIl0sIm5hbWVzIjpbInVzZUNvbnRleHQiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsImNvbnRleHQiLCJjb2xvcnMiLCJTZXR0aW5ncyIsInRvZ2dsZSIsInNldFRvZ2dsZSIsImNvbG9yQ29udGV4dCIsImNvbG9yQ2hhbmdlIiwiZ2V0Q29sb3IiLCJjaGFuZ2VDdXJzb3IiLCJnZXRNYWdpY0N1cnNvciIsIm1lZ2ljQ3Vyc29yIiwiZGl2IiwiY2xhc3NOYW1lIiwiaW1nIiwic3JjIiwiYWx0IiwiYSIsImhyZWYiLCJvbkNsaWNrIiwic3BhbiIsInVsIiwibWFwIiwiY29sb3IiLCJpIiwibGkiLCJkYXRhLWNvbG9yIiwic3R5bGUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJtYXJnaW5SaWdodCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./edreya/src/layouts/Settings.js\n");

/***/ })

});