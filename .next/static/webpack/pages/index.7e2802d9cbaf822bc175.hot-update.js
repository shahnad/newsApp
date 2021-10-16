"use strict";
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/Home/NewsTabs/index.js":
/*!**************************************!*\
  !*** ./pages/Home/NewsTabs/index.js ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ NewsTabs; }
/* harmony export */ });
/* harmony import */ var D_nextjs_blog_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var D_nextjs_blog_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var D_nextjs_blog_node_modules_next_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _mui_material_Tabs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material/Tabs */ "./node_modules/@mui/material/Tabs/index.js");
/* harmony import */ var _mui_material_Tab__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material/Tab */ "./node_modules/@mui/material/Tab/index.js");
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material/Typography */ "./node_modules/@mui/material/Typography/index.js");
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material/Box */ "./node_modules/@mui/material/Box/index.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);
/* module decorator */ module = __webpack_require__.hmd(module);



var _excluded = ["children", "value", "index"];

var _jsxFileName = "D:\\nextjs-blog\\pages\\Home\\NewsTabs\\index.js",
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,D_nextjs_blog_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }









function TabPanel(props) {
  var children = props.children,
      value = props.value,
      index = props.index,
      other = (0,D_nextjs_blog_node_modules_next_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__.default)(props, _excluded);

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", _objectSpread(_objectSpread({
    role: "tabpanel",
    hidden: value !== index,
    id: "vertical-tabpanel-".concat(index),
    "aria-labelledby": "vertical-tab-".concat(index)
  }, other), {}, {
    children: value === index && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_6__.default, {
      sx: {
        p: 3
      },
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_7__.default, {
        children: children
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 11
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 9
    }, this)
  }), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 5
  }, this);
}

_c = TabPanel;
TabPanel.propTypes = {
  children: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().node),
  index: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().number.isRequired),
  value: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().number.isRequired)
};

function a11yProps(index) {
  return {
    id: "vertical-tab-".concat(index),
    'aria-controls': "vertical-tabpanel-".concat(index)
  };
}

function NewsTabs() {
  _s();

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_3__.useState(0),
      _React$useState2 = (0,D_nextjs_blog_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.default)(_React$useState, 2),
      value = _React$useState2[0],
      setValue = _React$useState2[1];

  var handleChange = function handleChange(event, newValue) {
    setValue(newValue);
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_6__.default, {
    sx: {
      flexGrow: 1,
      bgcolor: 'background.paper',
      display: 'flex',
      height: 224
    },
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_mui_material_Tabs__WEBPACK_IMPORTED_MODULE_8__.default, {
      orientation: "vertical",
      variant: "scrollable",
      value: value,
      onChange: handleChange,
      "aria-label": "Vertical tabs example",
      sx: {
        borderRight: 1,
        borderColor: 'divider'
      },
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_mui_material_Tab__WEBPACK_IMPORTED_MODULE_9__.default, _objectSpread({
        label: "Item One"
      }, a11yProps(0)), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_mui_material_Tab__WEBPACK_IMPORTED_MODULE_9__.default, _objectSpread({
        label: "Item Two"
      }, a11yProps(1)), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_mui_material_Tab__WEBPACK_IMPORTED_MODULE_9__.default, _objectSpread({
        label: "Item Three"
      }, a11yProps(2)), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_mui_material_Tab__WEBPACK_IMPORTED_MODULE_9__.default, _objectSpread({
        label: "Item Four"
      }, a11yProps(3)), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_mui_material_Tab__WEBPACK_IMPORTED_MODULE_9__.default, _objectSpread({
        label: "Item Five"
      }, a11yProps(4)), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_mui_material_Tab__WEBPACK_IMPORTED_MODULE_9__.default, _objectSpread({
        label: "Item Six"
      }, a11yProps(5)), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_mui_material_Tab__WEBPACK_IMPORTED_MODULE_9__.default, _objectSpread({
        label: "Item Seven"
      }, a11yProps(6)), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(TabPanel, {
      value: value,
      index: 0,
      children: "Item One"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(TabPanel, {
      value: value,
      index: 1,
      children: "Item Two"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(TabPanel, {
      value: value,
      index: 2,
      children: "Item Three"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(TabPanel, {
      value: value,
      index: 3,
      children: "Item Four"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(TabPanel, {
      value: value,
      index: 4,
      children: "Item Five"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(TabPanel, {
      value: value,
      index: 5,
      children: "Item Six"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(TabPanel, {
      value: value,
      index: 6,
      children: "Item Seven"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 49,
    columnNumber: 5
  }, this);
}

_s(NewsTabs, "qPBOvRc2Co1iWTsdTL0g7j/rpjU=");

_c2 = NewsTabs;

var _c, _c2;

$RefreshReg$(_c, "TabPanel");
$RefreshReg$(_c2, "NewsTabs");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./pages/Home/index.js":
/*!*****************************!*\
  !*** ./pages/Home/index.js ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Home; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/index.js");
/* harmony import */ var _MainNewsPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MainNewsPage */ "./pages/Home/MainNewsPage/index.js");
/* harmony import */ var _NewsList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./NewsList */ "./pages/Home/NewsList/index.js");
/* harmony import */ var _NewsTabs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./NewsTabs */ "./pages/Home/NewsTabs/index.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "D:\\nextjs-blog\\pages\\Home\\index.js";






function Home() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Box, {
    sx: {
      flexGrow: 1,
      padding: 2
    },
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Grid, {
      container: true,
      spacing: 2,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Grid, {
        item: true,
        xs: 12,
        sm: 12,
        md: 8,
        lg: 8,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_MainNewsPage__WEBPACK_IMPORTED_MODULE_1__.default, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 12,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Grid, {
        item: true,
        xs: 12,
        sm: 12,
        md: 4,
        lg: 4,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_NewsList__WEBPACK_IMPORTED_MODULE_2__.default, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 15,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Grid, {
        item: true,
        xs: 12,
        sm: 12,
        md: 12,
        lg: 12,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_NewsTabs__WEBPACK_IMPORTED_MODULE_3__.default, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 9
  }, this);
}
_c = Home;

var _c;

$RefreshReg$(_c, "Home");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js ***!
  \**********************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _objectWithoutProperties; }
/* harmony export */ });
/* harmony import */ var _objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./objectWithoutPropertiesLoose.js */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = (0,_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_0__.default)(source, excluded);
  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js":
/*!***************************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js ***!
  \***************************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _objectWithoutPropertiesLoose; }
/* harmony export */ });
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguN2UyODAyZDljYmFmODIyYmMxNzUuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBLFNBQVNNLFFBQVQsQ0FBa0JDLEtBQWxCLEVBQXlCO0FBQ3ZCLE1BQVFDLFFBQVIsR0FBNkNELEtBQTdDLENBQVFDLFFBQVI7QUFBQSxNQUFrQkMsS0FBbEIsR0FBNkNGLEtBQTdDLENBQWtCRSxLQUFsQjtBQUFBLE1BQXlCQyxLQUF6QixHQUE2Q0gsS0FBN0MsQ0FBeUJHLEtBQXpCO0FBQUEsTUFBbUNDLEtBQW5DLDJJQUE2Q0osS0FBN0M7O0FBRUEsc0JBQ0U7QUFDRSxRQUFJLEVBQUMsVUFEUDtBQUVFLFVBQU0sRUFBRUUsS0FBSyxLQUFLQyxLQUZwQjtBQUdFLE1BQUUsOEJBQXVCQSxLQUF2QixDQUhKO0FBSUUsOENBQWlDQSxLQUFqQztBQUpGLEtBS01DLEtBTE47QUFBQSxjQU9HRixLQUFLLEtBQUtDLEtBQVYsaUJBQ0MsOERBQUMsc0RBQUQ7QUFBSyxRQUFFLEVBQUU7QUFBRUUsUUFBQUEsQ0FBQyxFQUFFO0FBQUwsT0FBVDtBQUFBLDZCQUNFLDhEQUFDLDZEQUFEO0FBQUEsa0JBQWFKO0FBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFSSjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFlRDs7S0FsQlFGO0FBb0JUQSxRQUFRLENBQUNPLFNBQVQsR0FBcUI7QUFDbkJMLEVBQUFBLFFBQVEsRUFBRVAsd0RBRFM7QUFFbkJTLEVBQUFBLEtBQUssRUFBRVQscUVBRlk7QUFHbkJRLEVBQUFBLEtBQUssRUFBRVIscUVBQTJCZTtBQUhmLENBQXJCOztBQU1BLFNBQVNDLFNBQVQsQ0FBbUJQLEtBQW5CLEVBQTBCO0FBQ3hCLFNBQU87QUFDTFEsSUFBQUEsRUFBRSx5QkFBa0JSLEtBQWxCLENBREc7QUFFTCxpREFBc0NBLEtBQXRDO0FBRkssR0FBUDtBQUlEOztBQUVjLFNBQVNTLFFBQVQsR0FBb0I7QUFBQTs7QUFDakMsd0JBQTBCbkIsMkNBQUEsQ0FBZSxDQUFmLENBQTFCO0FBQUE7QUFBQSxNQUFPUyxLQUFQO0FBQUEsTUFBY1ksUUFBZDs7QUFFQSxNQUFNQyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFDQyxLQUFELEVBQVFDLFFBQVIsRUFBcUI7QUFDeENILElBQUFBLFFBQVEsQ0FBQ0csUUFBRCxDQUFSO0FBQ0QsR0FGRDs7QUFJQSxzQkFDRSw4REFBQyxzREFBRDtBQUNFLE1BQUUsRUFBRTtBQUFFQyxNQUFBQSxRQUFRLEVBQUUsQ0FBWjtBQUFlQyxNQUFBQSxPQUFPLEVBQUUsa0JBQXhCO0FBQTRDQyxNQUFBQSxPQUFPLEVBQUUsTUFBckQ7QUFBNkRDLE1BQUFBLE1BQU0sRUFBRTtBQUFyRSxLQUROO0FBQUEsNEJBR0UsOERBQUMsdURBQUQ7QUFDRSxpQkFBVyxFQUFDLFVBRGQ7QUFFRSxhQUFPLEVBQUMsWUFGVjtBQUdFLFdBQUssRUFBRW5CLEtBSFQ7QUFJRSxjQUFRLEVBQUVhLFlBSlo7QUFLRSxvQkFBVyx1QkFMYjtBQU1FLFFBQUUsRUFBRTtBQUFFTyxRQUFBQSxXQUFXLEVBQUUsQ0FBZjtBQUFrQkMsUUFBQUEsV0FBVyxFQUFFO0FBQS9CLE9BTk47QUFBQSw4QkFRRSw4REFBQyxzREFBRDtBQUFLLGFBQUssRUFBQztBQUFYLFNBQTBCYixTQUFTLENBQUMsQ0FBRCxDQUFuQztBQUFBO0FBQUE7QUFBQTtBQUFBLGNBUkYsZUFTRSw4REFBQyxzREFBRDtBQUFLLGFBQUssRUFBQztBQUFYLFNBQTBCQSxTQUFTLENBQUMsQ0FBRCxDQUFuQztBQUFBO0FBQUE7QUFBQTtBQUFBLGNBVEYsZUFVRSw4REFBQyxzREFBRDtBQUFLLGFBQUssRUFBQztBQUFYLFNBQTRCQSxTQUFTLENBQUMsQ0FBRCxDQUFyQztBQUFBO0FBQUE7QUFBQTtBQUFBLGNBVkYsZUFXRSw4REFBQyxzREFBRDtBQUFLLGFBQUssRUFBQztBQUFYLFNBQTJCQSxTQUFTLENBQUMsQ0FBRCxDQUFwQztBQUFBO0FBQUE7QUFBQTtBQUFBLGNBWEYsZUFZRSw4REFBQyxzREFBRDtBQUFLLGFBQUssRUFBQztBQUFYLFNBQTJCQSxTQUFTLENBQUMsQ0FBRCxDQUFwQztBQUFBO0FBQUE7QUFBQTtBQUFBLGNBWkYsZUFhRSw4REFBQyxzREFBRDtBQUFLLGFBQUssRUFBQztBQUFYLFNBQTBCQSxTQUFTLENBQUMsQ0FBRCxDQUFuQztBQUFBO0FBQUE7QUFBQTtBQUFBLGNBYkYsZUFjRSw4REFBQyxzREFBRDtBQUFLLGFBQUssRUFBQztBQUFYLFNBQTRCQSxTQUFTLENBQUMsQ0FBRCxDQUFyQztBQUFBO0FBQUE7QUFBQTtBQUFBLGNBZEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSEYsZUFtQkUsOERBQUMsUUFBRDtBQUFVLFdBQUssRUFBRVIsS0FBakI7QUFBd0IsV0FBSyxFQUFFLENBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBbkJGLGVBc0JFLDhEQUFDLFFBQUQ7QUFBVSxXQUFLLEVBQUVBLEtBQWpCO0FBQXdCLFdBQUssRUFBRSxDQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQXRCRixlQXlCRSw4REFBQyxRQUFEO0FBQVUsV0FBSyxFQUFFQSxLQUFqQjtBQUF3QixXQUFLLEVBQUUsQ0FBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUF6QkYsZUE0QkUsOERBQUMsUUFBRDtBQUFVLFdBQUssRUFBRUEsS0FBakI7QUFBd0IsV0FBSyxFQUFFLENBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBNUJGLGVBK0JFLDhEQUFDLFFBQUQ7QUFBVSxXQUFLLEVBQUVBLEtBQWpCO0FBQXdCLFdBQUssRUFBRSxDQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQS9CRixlQWtDRSw4REFBQyxRQUFEO0FBQVUsV0FBSyxFQUFFQSxLQUFqQjtBQUF3QixXQUFLLEVBQUUsQ0FBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFsQ0YsZUFxQ0UsOERBQUMsUUFBRDtBQUFVLFdBQUssRUFBRUEsS0FBakI7QUFBd0IsV0FBSyxFQUFFLENBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBckNGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBMkNEOztHQWxEdUJVOztNQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFZSxTQUFTZSxJQUFULEdBQWdCO0FBQzNCLHNCQUNJLDhEQUFDLDhDQUFEO0FBQUssTUFBRSxFQUFFO0FBQUVULE1BQUFBLFFBQVEsRUFBRSxDQUFaO0FBQWVVLE1BQUFBLE9BQU8sRUFBRTtBQUF4QixLQUFUO0FBQUEsMkJBQ0ksOERBQUMsK0NBQUQ7QUFBTSxlQUFTLE1BQWY7QUFBZ0IsYUFBTyxFQUFFLENBQXpCO0FBQUEsOEJBQ0ksOERBQUMsK0NBQUQ7QUFBTSxZQUFJLE1BQVY7QUFBVyxVQUFFLEVBQUUsRUFBZjtBQUFtQixVQUFFLEVBQUUsRUFBdkI7QUFBMkIsVUFBRSxFQUFFLENBQS9CO0FBQWtDLFVBQUUsRUFBRSxDQUF0QztBQUFBLCtCQUNJLDhEQUFDLGtEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREosZUFJSSw4REFBQywrQ0FBRDtBQUFNLFlBQUksTUFBVjtBQUFXLFVBQUUsRUFBRSxFQUFmO0FBQW1CLFVBQUUsRUFBRSxFQUF2QjtBQUEyQixVQUFFLEVBQUUsQ0FBL0I7QUFBa0MsVUFBRSxFQUFFLENBQXRDO0FBQUEsK0JBQ0ksOERBQUMsOENBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FKSixlQU9JLDhEQUFDLCtDQUFEO0FBQU0sWUFBSSxNQUFWO0FBQVcsVUFBRSxFQUFFLEVBQWY7QUFBbUIsVUFBRSxFQUFFLEVBQXZCO0FBQTJCLFVBQUUsRUFBRSxFQUEvQjtBQUFtQyxVQUFFLEVBQUUsRUFBdkM7QUFBQSwrQkFDSSw4REFBQyw4Q0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVBKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQWVIO0tBaEJ1QkQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ05xRDtBQUM5RDtBQUNmO0FBQ0EsZUFBZSx5RUFBNEI7QUFDM0M7O0FBRUE7QUFDQTs7QUFFQSxnQkFBZ0IsNkJBQTZCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ2xCZTtBQUNmO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGNBQWMsdUJBQXVCO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvSG9tZS9OZXdzVGFicy9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvSG9tZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCBUYWJzIGZyb20gJ0BtdWkvbWF0ZXJpYWwvVGFicyc7XHJcbmltcG9ydCBUYWIgZnJvbSAnQG11aS9tYXRlcmlhbC9UYWInO1xyXG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICdAbXVpL21hdGVyaWFsL1R5cG9ncmFwaHknO1xyXG5pbXBvcnQgQm94IGZyb20gJ0BtdWkvbWF0ZXJpYWwvQm94JztcclxuXHJcbmZ1bmN0aW9uIFRhYlBhbmVsKHByb3BzKSB7XHJcbiAgY29uc3QgeyBjaGlsZHJlbiwgdmFsdWUsIGluZGV4LCAuLi5vdGhlciB9ID0gcHJvcHM7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2XHJcbiAgICAgIHJvbGU9XCJ0YWJwYW5lbFwiXHJcbiAgICAgIGhpZGRlbj17dmFsdWUgIT09IGluZGV4fVxyXG4gICAgICBpZD17YHZlcnRpY2FsLXRhYnBhbmVsLSR7aW5kZXh9YH1cclxuICAgICAgYXJpYS1sYWJlbGxlZGJ5PXtgdmVydGljYWwtdGFiLSR7aW5kZXh9YH1cclxuICAgICAgey4uLm90aGVyfVxyXG4gICAgPlxyXG4gICAgICB7dmFsdWUgPT09IGluZGV4ICYmIChcclxuICAgICAgICA8Qm94IHN4PXt7IHA6IDMgfX0+XHJcbiAgICAgICAgICA8VHlwb2dyYXBoeT57Y2hpbGRyZW59PC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgICApfVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuVGFiUGFuZWwucHJvcFR5cGVzID0ge1xyXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcclxuICBpbmRleDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxyXG4gIHZhbHVlOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXHJcbn07XHJcblxyXG5mdW5jdGlvbiBhMTF5UHJvcHMoaW5kZXgpIHtcclxuICByZXR1cm4ge1xyXG4gICAgaWQ6IGB2ZXJ0aWNhbC10YWItJHtpbmRleH1gLFxyXG4gICAgJ2FyaWEtY29udHJvbHMnOiBgdmVydGljYWwtdGFicGFuZWwtJHtpbmRleH1gLFxyXG4gIH07XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE5ld3NUYWJzKCkge1xyXG4gIGNvbnN0IFt2YWx1ZSwgc2V0VmFsdWVdID0gUmVhY3QudXNlU3RhdGUoMCk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChldmVudCwgbmV3VmFsdWUpID0+IHtcclxuICAgIHNldFZhbHVlKG5ld1ZhbHVlKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEJveFxyXG4gICAgICBzeD17eyBmbGV4R3JvdzogMSwgYmdjb2xvcjogJ2JhY2tncm91bmQucGFwZXInLCBkaXNwbGF5OiAnZmxleCcsIGhlaWdodDogMjI0IH19XHJcbiAgICA+XHJcbiAgICAgIDxUYWJzXHJcbiAgICAgICAgb3JpZW50YXRpb249XCJ2ZXJ0aWNhbFwiXHJcbiAgICAgICAgdmFyaWFudD1cInNjcm9sbGFibGVcIlxyXG4gICAgICAgIHZhbHVlPXt2YWx1ZX1cclxuICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgIGFyaWEtbGFiZWw9XCJWZXJ0aWNhbCB0YWJzIGV4YW1wbGVcIlxyXG4gICAgICAgIHN4PXt7IGJvcmRlclJpZ2h0OiAxLCBib3JkZXJDb2xvcjogJ2RpdmlkZXInIH19XHJcbiAgICAgID5cclxuICAgICAgICA8VGFiIGxhYmVsPVwiSXRlbSBPbmVcIiB7Li4uYTExeVByb3BzKDApfSAvPlxyXG4gICAgICAgIDxUYWIgbGFiZWw9XCJJdGVtIFR3b1wiIHsuLi5hMTF5UHJvcHMoMSl9IC8+XHJcbiAgICAgICAgPFRhYiBsYWJlbD1cIkl0ZW0gVGhyZWVcIiB7Li4uYTExeVByb3BzKDIpfSAvPlxyXG4gICAgICAgIDxUYWIgbGFiZWw9XCJJdGVtIEZvdXJcIiB7Li4uYTExeVByb3BzKDMpfSAvPlxyXG4gICAgICAgIDxUYWIgbGFiZWw9XCJJdGVtIEZpdmVcIiB7Li4uYTExeVByb3BzKDQpfSAvPlxyXG4gICAgICAgIDxUYWIgbGFiZWw9XCJJdGVtIFNpeFwiIHsuLi5hMTF5UHJvcHMoNSl9IC8+XHJcbiAgICAgICAgPFRhYiBsYWJlbD1cIkl0ZW0gU2V2ZW5cIiB7Li4uYTExeVByb3BzKDYpfSAvPlxyXG4gICAgICA8L1RhYnM+XHJcbiAgICAgIDxUYWJQYW5lbCB2YWx1ZT17dmFsdWV9IGluZGV4PXswfT5cclxuICAgICAgICBJdGVtIE9uZVxyXG4gICAgICA8L1RhYlBhbmVsPlxyXG4gICAgICA8VGFiUGFuZWwgdmFsdWU9e3ZhbHVlfSBpbmRleD17MX0+XHJcbiAgICAgICAgSXRlbSBUd29cclxuICAgICAgPC9UYWJQYW5lbD5cclxuICAgICAgPFRhYlBhbmVsIHZhbHVlPXt2YWx1ZX0gaW5kZXg9ezJ9PlxyXG4gICAgICAgIEl0ZW0gVGhyZWVcclxuICAgICAgPC9UYWJQYW5lbD5cclxuICAgICAgPFRhYlBhbmVsIHZhbHVlPXt2YWx1ZX0gaW5kZXg9ezN9PlxyXG4gICAgICAgIEl0ZW0gRm91clxyXG4gICAgICA8L1RhYlBhbmVsPlxyXG4gICAgICA8VGFiUGFuZWwgdmFsdWU9e3ZhbHVlfSBpbmRleD17NH0+XHJcbiAgICAgICAgSXRlbSBGaXZlXHJcbiAgICAgIDwvVGFiUGFuZWw+XHJcbiAgICAgIDxUYWJQYW5lbCB2YWx1ZT17dmFsdWV9IGluZGV4PXs1fT5cclxuICAgICAgICBJdGVtIFNpeFxyXG4gICAgICA8L1RhYlBhbmVsPlxyXG4gICAgICA8VGFiUGFuZWwgdmFsdWU9e3ZhbHVlfSBpbmRleD17Nn0+XHJcbiAgICAgICAgSXRlbSBTZXZlblxyXG4gICAgICA8L1RhYlBhbmVsPlxyXG4gICAgPC9Cb3g+XHJcbiAgKTtcclxufVxyXG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEJveCwgR3JpZCB9IGZyb20gJ0BtdWkvbWF0ZXJpYWwnO1xyXG5pbXBvcnQgTWFpbk5ld3NQYWdlIGZyb20gJy4vTWFpbk5ld3NQYWdlJztcclxuaW1wb3J0IE5ld3NMaXN0SXRlbXMgZnJvbSAnLi9OZXdzTGlzdCc7XHJcbmltcG9ydCBOZXdzVGFicyBmcm9tICcuL05ld3NUYWJzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxCb3ggc3g9e3sgZmxleEdyb3c6IDEsIHBhZGRpbmc6IDIgfX0+XHJcbiAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXsyfT5cclxuICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBzbT17MTJ9IG1kPXs4fSBsZz17OH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPE1haW5OZXdzUGFnZSAvPlxyXG4gICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IHNtPXsxMn0gbWQ9ezR9IGxnPXs0fT5cclxuICAgICAgICAgICAgICAgICAgICA8TmV3c0xpc3RJdGVtcyAvPlxyXG4gICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IHNtPXsxMn0gbWQ9ezEyfSBsZz17MTJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxOZXdzVGFicyAvPlxyXG4gICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICApO1xyXG59XHJcbiIsImltcG9ydCBvYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlIGZyb20gXCIuL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UuanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhzb3VyY2UsIGV4Y2x1ZGVkKSB7XG4gIGlmIChzb3VyY2UgPT0gbnVsbCkgcmV0dXJuIHt9O1xuICB2YXIgdGFyZ2V0ID0gb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShzb3VyY2UsIGV4Y2x1ZGVkKTtcbiAgdmFyIGtleSwgaTtcblxuICBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scykge1xuICAgIHZhciBzb3VyY2VTeW1ib2xLZXlzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzb3VyY2UpO1xuXG4gICAgZm9yIChpID0gMDsgaSA8IHNvdXJjZVN5bWJvbEtleXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGtleSA9IHNvdXJjZVN5bWJvbEtleXNbaV07XG4gICAgICBpZiAoZXhjbHVkZWQuaW5kZXhPZihrZXkpID49IDApIGNvbnRpbnVlO1xuICAgICAgaWYgKCFPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwoc291cmNlLCBrZXkpKSBjb250aW51ZTtcbiAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRhcmdldDtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShzb3VyY2UsIGV4Y2x1ZGVkKSB7XG4gIGlmIChzb3VyY2UgPT0gbnVsbCkgcmV0dXJuIHt9O1xuICB2YXIgdGFyZ2V0ID0ge307XG4gIHZhciBzb3VyY2VLZXlzID0gT2JqZWN0LmtleXMoc291cmNlKTtcbiAgdmFyIGtleSwgaTtcblxuICBmb3IgKGkgPSAwOyBpIDwgc291cmNlS2V5cy5sZW5ndGg7IGkrKykge1xuICAgIGtleSA9IHNvdXJjZUtleXNbaV07XG4gICAgaWYgKGV4Y2x1ZGVkLmluZGV4T2Yoa2V5KSA+PSAwKSBjb250aW51ZTtcbiAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICB9XG5cbiAgcmV0dXJuIHRhcmdldDtcbn0iXSwibmFtZXMiOlsiUmVhY3QiLCJQcm9wVHlwZXMiLCJUYWJzIiwiVGFiIiwiVHlwb2dyYXBoeSIsIkJveCIsIlRhYlBhbmVsIiwicHJvcHMiLCJjaGlsZHJlbiIsInZhbHVlIiwiaW5kZXgiLCJvdGhlciIsInAiLCJwcm9wVHlwZXMiLCJub2RlIiwibnVtYmVyIiwiaXNSZXF1aXJlZCIsImExMXlQcm9wcyIsImlkIiwiTmV3c1RhYnMiLCJ1c2VTdGF0ZSIsInNldFZhbHVlIiwiaGFuZGxlQ2hhbmdlIiwiZXZlbnQiLCJuZXdWYWx1ZSIsImZsZXhHcm93IiwiYmdjb2xvciIsImRpc3BsYXkiLCJoZWlnaHQiLCJib3JkZXJSaWdodCIsImJvcmRlckNvbG9yIiwiR3JpZCIsIk1haW5OZXdzUGFnZSIsIk5ld3NMaXN0SXRlbXMiLCJIb21lIiwicGFkZGluZyJdLCJzb3VyY2VSb290IjoiIn0=