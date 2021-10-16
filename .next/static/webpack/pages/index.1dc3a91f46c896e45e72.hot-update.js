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
        columnNumber: 21
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 17
    }, this)
  }), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 9
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
      height: 'fit-content',
      marginBottom: 10
    },
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_mui_material_Tabs__WEBPACK_IMPORTED_MODULE_8__.default, {
      orientation: "vertical",
      variant: "scrollable",
      value: value,
      onChange: handleChange,
      "aria-label": "Vertical tabs example",
      sx: {
        borderRight: 1,
        flex: '0 0 20%',
        borderColor: 'divider'
      },
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_mui_material_Tab__WEBPACK_IMPORTED_MODULE_9__.default, _objectSpread({
        label: "Item One"
      }, a11yProps(0)), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_mui_material_Tab__WEBPACK_IMPORTED_MODULE_9__.default, _objectSpread({
        label: "Item Two"
      }, a11yProps(1)), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_mui_material_Tab__WEBPACK_IMPORTED_MODULE_9__.default, _objectSpread({
        label: "Item Three"
      }, a11yProps(2)), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_mui_material_Tab__WEBPACK_IMPORTED_MODULE_9__.default, _objectSpread({
        label: "Item Four"
      }, a11yProps(3)), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_mui_material_Tab__WEBPACK_IMPORTED_MODULE_9__.default, _objectSpread({
        label: "Item Five"
      }, a11yProps(4)), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_mui_material_Tab__WEBPACK_IMPORTED_MODULE_9__.default, _objectSpread({
        label: "Item Six"
      }, a11yProps(5)), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_mui_material_Tab__WEBPACK_IMPORTED_MODULE_9__.default, _objectSpread({
        label: "Item Seven"
      }, a11yProps(6)), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(TabPanel, {
      value: value,
      index: 0,
      children: "Item One"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(TabPanel, {
      value: value,
      index: 1,
      children: "Item Two"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(TabPanel, {
      value: value,
      index: 2,
      children: "Item Three"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(TabPanel, {
      value: value,
      index: 3,
      children: "Item Four"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(TabPanel, {
      value: value,
      index: 4,
      children: "Item Five"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(TabPanel, {
      value: value,
      index: 5,
      children: "Item Six"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(TabPanel, {
      value: value,
      index: 6,
      children: "Item Seven"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 49,
    columnNumber: 9
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


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMWRjM2E5MWY0NmM4OTZlNDVlNzIuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBLFNBQVNNLFFBQVQsQ0FBa0JDLEtBQWxCLEVBQXlCO0FBQ3JCLE1BQVFDLFFBQVIsR0FBNkNELEtBQTdDLENBQVFDLFFBQVI7QUFBQSxNQUFrQkMsS0FBbEIsR0FBNkNGLEtBQTdDLENBQWtCRSxLQUFsQjtBQUFBLE1BQXlCQyxLQUF6QixHQUE2Q0gsS0FBN0MsQ0FBeUJHLEtBQXpCO0FBQUEsTUFBbUNDLEtBQW5DLDJJQUE2Q0osS0FBN0M7O0FBRUEsc0JBQ0k7QUFDSSxRQUFJLEVBQUMsVUFEVDtBQUVJLFVBQU0sRUFBRUUsS0FBSyxLQUFLQyxLQUZ0QjtBQUdJLE1BQUUsOEJBQXVCQSxLQUF2QixDQUhOO0FBSUksOENBQWlDQSxLQUFqQztBQUpKLEtBS1FDLEtBTFI7QUFBQSxjQU9LRixLQUFLLEtBQUtDLEtBQVYsaUJBQ0csOERBQUMsc0RBQUQ7QUFBSyxRQUFFLEVBQUU7QUFBRUUsUUFBQUEsQ0FBQyxFQUFFO0FBQUwsT0FBVDtBQUFBLDZCQUNJLDhEQUFDLDZEQUFEO0FBQUEsa0JBQWFKO0FBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFSUjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFlSDs7S0FsQlFGO0FBb0JUQSxRQUFRLENBQUNPLFNBQVQsR0FBcUI7QUFDakJMLEVBQUFBLFFBQVEsRUFBRVAsd0RBRE87QUFFakJTLEVBQUFBLEtBQUssRUFBRVQscUVBRlU7QUFHakJRLEVBQUFBLEtBQUssRUFBRVIscUVBQTJCZTtBQUhqQixDQUFyQjs7QUFNQSxTQUFTQyxTQUFULENBQW1CUCxLQUFuQixFQUEwQjtBQUN0QixTQUFPO0FBQ0hRLElB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QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQS9CSixlQWtDSSw4REFBQyxRQUFEO0FBQVUsV0FBSyxFQUFFQSxLQUFqQjtBQUF3QixXQUFLLEVBQUUsQ0FBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFsQ0osZUFxQ0ksOERBQUMsUUFBRDtBQUFVLFdBQUssRUFBRUEsS0FBakI7QUFBd0IsV0FBSyxFQUFFLENBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBckNKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBMkNIOztHQWxEdUJVOztNQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9Ib21lL05ld3NUYWJzL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IFRhYnMgZnJvbSAnQG11aS9tYXRlcmlhbC9UYWJzJztcclxuaW1wb3J0IFRhYiBmcm9tICdAbXVpL21hdGVyaWFsL1RhYic7XHJcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJ0BtdWkvbWF0ZXJpYWwvVHlwb2dyYXBoeSc7XHJcbmltcG9ydCBCb3ggZnJvbSAnQG11aS9tYXRlcmlhbC9Cb3gnO1xyXG5cclxuZnVuY3Rpb24gVGFiUGFuZWwocHJvcHMpIHtcclxuICAgIGNvbnN0IHsgY2hpbGRyZW4sIHZhbHVlLCBpbmRleCwgLi4ub3RoZXIgfSA9IHByb3BzO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICByb2xlPVwidGFicGFuZWxcIlxyXG4gICAgICAgICAgICBoaWRkZW49e3ZhbHVlICE9PSBpbmRleH1cclxuICAgICAgICAgICAgaWQ9e2B2ZXJ0aWNhbC10YWJwYW5lbC0ke2luZGV4fWB9XHJcbiAgICAgICAgICAgIGFyaWEtbGFiZWxsZWRieT17YHZlcnRpY2FsLXRhYi0ke2luZGV4fWB9XHJcbiAgICAgICAgICAgIHsuLi5vdGhlcn1cclxuICAgICAgICA+XHJcbiAgICAgICAgICAgIHt2YWx1ZSA9PT0gaW5kZXggJiYgKFxyXG4gICAgICAgICAgICAgICAgPEJveCBzeD17eyBwOiAzIH19PlxyXG4gICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5PntjaGlsZHJlbn08L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuXHJcblRhYlBhbmVsLnByb3BUeXBlcyA9IHtcclxuICAgIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcclxuICAgIGluZGV4OiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXHJcbiAgICB2YWx1ZTogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxyXG59O1xyXG5cclxuZnVuY3Rpb24gYTExeVByb3BzKGluZGV4KSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGlkOiBgdmVydGljYWwtdGFiLSR7aW5kZXh9YCxcclxuICAgICAgICAnYXJpYS1jb250cm9scyc6IGB2ZXJ0aWNhbC10YWJwYW5lbC0ke2luZGV4fWAsXHJcbiAgICB9O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBOZXdzVGFicygpIHtcclxuICAgIGNvbnN0IFt2YWx1ZSwgc2V0VmFsdWVdID0gUmVhY3QudXNlU3RhdGUoMCk7XHJcblxyXG4gICAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGV2ZW50LCBuZXdWYWx1ZSkgPT4ge1xyXG4gICAgICAgIHNldFZhbHVlKG5ld1ZhbHVlKTtcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8Qm94XHJcbiAgICAgICAgICAgIHN4PXt7IGZsZXhHcm93OiAxLCBiZ2NvbG9yOiAnYmFja2dyb3VuZC5wYXBlcicsIGRpc3BsYXk6ICdmbGV4JywgaGVpZ2h0OiAnZml0LWNvbnRlbnQnLG1hcmdpbkJvdHRvbToxMCB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgICAgPFRhYnNcclxuICAgICAgICAgICAgICAgIG9yaWVudGF0aW9uPVwidmVydGljYWxcIlxyXG4gICAgICAgICAgICAgICAgdmFyaWFudD1cInNjcm9sbGFibGVcIlxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e3ZhbHVlfVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJWZXJ0aWNhbCB0YWJzIGV4YW1wbGVcIlxyXG4gICAgICAgICAgICAgICAgc3g9e3sgYm9yZGVyUmlnaHQ6IDEsIGZsZXg6ICcwIDAgMjAlJywgYm9yZGVyQ29sb3I6ICdkaXZpZGVyJyB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8VGFiIGxhYmVsPVwiSXRlbSBPbmVcIiB7Li4uYTExeVByb3BzKDApfSAvPlxyXG4gICAgICAgICAgICAgICAgPFRhYiBsYWJlbD1cIkl0ZW0gVHdvXCIgey4uLmExMXlQcm9wcygxKX0gLz5cclxuICAgICAgICAgICAgICAgIDxUYWIgbGFiZWw9XCJJdGVtIFRocmVlXCIgey4uLmExMXlQcm9wcygyKX0gLz5cclxuICAgICAgICAgICAgICAgIDxUYWIgbGFiZWw9XCJJdGVtIEZvdXJcIiB7Li4uYTExeVByb3BzKDMpfSAvPlxyXG4gICAgICAgICAgICAgICAgPFRhYiBsYWJlbD1cIkl0ZW0gRml2ZVwiIHsuLi5hMTF5UHJvcHMoNCl9IC8+XHJcbiAgICAgICAgICAgICAgICA8VGFiIGxhYmVsPVwiSXRlbSBTaXhcIiB7Li4uYTExeVByb3BzKDUpfSAvPlxyXG4gICAgICAgICAgICAgICAgPFRhYiBsYWJlbD1cIkl0ZW0gU2V2ZW5cIiB7Li4uYTExeVByb3BzKDYpfSAvPlxyXG4gICAgICAgICAgICA8L1RhYnM+XHJcbiAgICAgICAgICAgIDxUYWJQYW5lbCB2YWx1ZT17dmFsdWV9IGluZGV4PXswfT5cclxuICAgICAgICAgICAgICAgIEl0ZW0gT25lXHJcbiAgICAgICAgICAgIDwvVGFiUGFuZWw+XHJcbiAgICAgICAgICAgIDxUYWJQYW5lbCB2YWx1ZT17dmFsdWV9IGluZGV4PXsxfT5cclxuICAgICAgICAgICAgICAgIEl0ZW0gVHdvXHJcbiAgICAgICAgICAgIDwvVGFiUGFuZWw+XHJcbiAgICAgICAgICAgIDxUYWJQYW5lbCB2YWx1ZT17dmFsdWV9IGluZGV4PXsyfT5cclxuICAgICAgICAgICAgICAgIEl0ZW0gVGhyZWVcclxuICAgICAgICAgICAgPC9UYWJQYW5lbD5cclxuICAgICAgICAgICAgPFRhYlBhbmVsIHZhbHVlPXt2YWx1ZX0gaW5kZXg9ezN9PlxyXG4gICAgICAgICAgICAgICAgSXRlbSBGb3VyXHJcbiAgICAgICAgICAgIDwvVGFiUGFuZWw+XHJcbiAgICAgICAgICAgIDxUYWJQYW5lbCB2YWx1ZT17dmFsdWV9IGluZGV4PXs0fT5cclxuICAgICAgICAgICAgICAgIEl0ZW0gRml2ZVxyXG4gICAgICAgICAgICA8L1RhYlBhbmVsPlxyXG4gICAgICAgICAgICA8VGFiUGFuZWwgdmFsdWU9e3ZhbHVlfSBpbmRleD17NX0+XHJcbiAgICAgICAgICAgICAgICBJdGVtIFNpeFxyXG4gICAgICAgICAgICA8L1RhYlBhbmVsPlxyXG4gICAgICAgICAgICA8VGFiUGFuZWwgdmFsdWU9e3ZhbHVlfSBpbmRleD17Nn0+XHJcbiAgICAgICAgICAgICAgICBJdGVtIFNldmVuXHJcbiAgICAgICAgICAgIDwvVGFiUGFuZWw+XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIlByb3BUeXBlcyIsIlRhYnMiLCJUYWIiLCJUeXBvZ3JhcGh5IiwiQm94IiwiVGFiUGFuZWwiLCJwcm9wcyIsImNoaWxkcmVuIiwidmFsdWUiLCJpbmRleCIsIm90aGVyIiwicCIsInByb3BUeXBlcyIsIm5vZGUiLCJudW1iZXIiLCJpc1JlcXVpcmVkIiwiYTExeVByb3BzIiwiaWQiLCJOZXdzVGFicyIsInVzZVN0YXRlIiwic2V0VmFsdWUiLCJoYW5kbGVDaGFuZ2UiLCJldmVudCIsIm5ld1ZhbHVlIiwiZmxleEdyb3ciLCJiZ2NvbG9yIiwiZGlzcGxheSIsImhlaWdodCIsIm1hcmdpbkJvdHRvbSIsImJvcmRlclJpZ2h0IiwiZmxleCIsImJvcmRlckNvbG9yIl0sInNvdXJjZVJvb3QiOiIifQ==