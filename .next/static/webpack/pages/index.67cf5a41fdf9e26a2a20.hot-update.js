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
      lineNumber: 64,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(TabPanel, {
      value: value,
      index: 1,
      children: "Item Two"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 67,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNjdjZjVhNDFmZGY5ZTI2YTJhMjAuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBLFNBQVNNLFFBQVQsQ0FBa0JDLEtBQWxCLEVBQXlCO0FBQ3JCLE1BQVFDLFFBQVIsR0FBNkNELEtBQTdDLENBQVFDLFFBQVI7QUFBQSxNQUFrQkMsS0FBbEIsR0FBNkNGLEtBQTdDLENBQWtCRSxLQUFsQjtBQUFBLE1BQXlCQyxLQUF6QixHQUE2Q0gsS0FBN0MsQ0FBeUJHLEtBQXpCO0FBQUEsTUFBbUNDLEtBQW5DLDJJQUE2Q0osS0FBN0M7O0FBRUEsc0JBQ0k7QUFDSSxRQUFJLEVBQUMsVUFEVDtBQUVJLFVBQU0sRUFBRUUsS0FBSyxLQUFLQyxLQUZ0QjtBQUdJLE1BQUUsOEJBQXVCQSxLQUF2QixDQUhOO0FBSUksOENBQWlDQSxLQUFqQztBQUpKLEtBS1FDLEtBTFI7QUFBQSxjQU9LRixLQUFLLEtBQUtDLEtBQVYsaUJBQ0csOERBQUMsc0RBQUQ7QUFBSyxRQUFFLEVBQUU7QUFBRUUsUUFBQUEsQ0FBQyxFQUFFO0FBQUwsT0FBVDtBQUFBLDZCQUNJLDhEQUFDLDZEQUFEO0FBQUEsa0JBQWFKO0FBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFSUjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFlSDs7S0FsQlFGO0FBb0JUQSxRQUFRLENBQUNPLFNBQVQsR0FBcUI7QUFDakJMLEVBQUFBLFFBQVEsRUFBRVAsd0RBRE87QUFFakJTLEVBQUFBLEtBQUssRUFBRVQscUVBRlU7QUFHakJRLEVBQUFBLEtBQUssRUFBRVIscUVBQTJCZTtBQUhqQixDQUFyQjs7QUFNQSxTQUFTQyxTQUFULENBQW1CUCxLQUFuQixFQUEwQjtBQUN0QixTQUFPO0FBQ0hRLElBQUFBLEVBQUUseUJBQWtCUixLQUFsQixDQURDO0FBRUgsaURBQXNDQSxLQUF0QztBQUZHLEdBQVA7QUFJSDs7QUFFYyxTQUFTUyxRQUFULEdBQW9CO0FBQUE7O0FBQy9CLHdCQUEwQm5CLDJDQUFBLENBQWUsQ0FBZixDQUExQjtBQUFBO0FBQUEsTUFBT1MsS0FBUDtBQUFBLE1BQWNZLFFBQWQ7O0FBRUEsTUFBTUMsWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQ0MsS0FBRCxFQUFRQyxRQUFSLEVBQXFCO0FBQ3RDSCxJQUFBQSxRQUFRLENBQUNHLFFBQUQsQ0FBUjtBQUNILEdBRkQ7O0FBSUEsc0JBQ0ksOERBQUMsc0RBQUQ7QUFDSSxNQUFFLEVBQUU7QUFBRUMsTUFBQUEsUUFBUSxFQUFFLENBQVo7QUFBZUMsTUFBQUEsT0FBTyxFQUFFLGtCQUF4QjtBQUE0Q0MsTUFBQUEsT0FBTyxFQUFFLE1BQXJEO0FBQTZEQyxNQUFBQSxNQUFNLEVBQUUsYUFBckU7QUFBb0ZDLE1BQUFBLFlBQVksRUFBRTtBQUFsRyxLQURSO0FBQUEsNEJBR0ksOERBQUMsdURBQUQ7QUFDSSxpQkFBVyxFQUFDLFVBRGhCO0FBRUksYUFBTyxFQUFDLFlBRlo7QUFHSSxXQUFLLEVBQUVwQixLQUhYO0FBSUksY0FBUSxFQUFFYSxZQUpkO0FBS0ksb0JBQVcsdUJBTGY7QUFNSSxRQUFFLEVBQUU7QUFBRVEsUUFBQUEsV0FBVyxFQUFFLENBQWY7QUFBa0JDLFFBQUFBLElBQUksRUFBRSxTQUF4QjtBQUFtQ0MsUUFBQUEsV0FBVyxFQUFFO0FBQWhELE9BTlI7QUFBQSw4QkFRSSw4REFBQyxzREFBRDtBQUFLLGFBQUssRUFBQztBQUFYLFNBQTBCZixTQUFTLENBQUMsQ0FBRCxDQUFuQztBQUFBO0FBQUE7QUFBQTtBQUFBLGNBUkosZUFTSSw4REFBQyxzREFBRDtBQUFLLGFBQUssRUFBQztBQUFYLFNBQTBCQSxTQUFTLENBQUMsQ0FBRCxDQUFuQztBQUFBO0FBQUE7QUFBQTtBQUFBLGNBVEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSEosZUFlSSw4REFBQyxRQUFEO0FBQVUsV0FBSyxFQUFFUixLQUFqQjtBQUF3QixXQUFLLEVBQUUsQ0FBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFmSixlQWtCSSw4REFBQyxRQUFEO0FBQVUsV0FBSyxFQUFFQSxLQUFqQjtBQUF3QixXQUFLLEVBQUUsQ0FBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFsQko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUEwQkg7O0dBakN1QlU7O01BQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL0hvbWUvTmV3c1RhYnMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgVGFicyBmcm9tICdAbXVpL21hdGVyaWFsL1RhYnMnO1xyXG5pbXBvcnQgVGFiIGZyb20gJ0BtdWkvbWF0ZXJpYWwvVGFiJztcclxuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnQG11aS9tYXRlcmlhbC9UeXBvZ3JhcGh5JztcclxuaW1wb3J0IEJveCBmcm9tICdAbXVpL21hdGVyaWFsL0JveCc7XHJcblxyXG5mdW5jdGlvbiBUYWJQYW5lbChwcm9wcykge1xyXG4gICAgY29uc3QgeyBjaGlsZHJlbiwgdmFsdWUsIGluZGV4LCAuLi5vdGhlciB9ID0gcHJvcHM7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIHJvbGU9XCJ0YWJwYW5lbFwiXHJcbiAgICAgICAgICAgIGhpZGRlbj17dmFsdWUgIT09IGluZGV4fVxyXG4gICAgICAgICAgICBpZD17YHZlcnRpY2FsLXRhYnBhbmVsLSR7aW5kZXh9YH1cclxuICAgICAgICAgICAgYXJpYS1sYWJlbGxlZGJ5PXtgdmVydGljYWwtdGFiLSR7aW5kZXh9YH1cclxuICAgICAgICAgICAgey4uLm90aGVyfVxyXG4gICAgICAgID5cclxuICAgICAgICAgICAge3ZhbHVlID09PSBpbmRleCAmJiAoXHJcbiAgICAgICAgICAgICAgICA8Qm94IHN4PXt7IHA6IDMgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHk+e2NoaWxkcmVufTwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG5cclxuVGFiUGFuZWwucHJvcFR5cGVzID0ge1xyXG4gICAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxyXG4gICAgaW5kZXg6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcclxuICAgIHZhbHVlOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXHJcbn07XHJcblxyXG5mdW5jdGlvbiBhMTF5UHJvcHMoaW5kZXgpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgaWQ6IGB2ZXJ0aWNhbC10YWItJHtpbmRleH1gLFxyXG4gICAgICAgICdhcmlhLWNvbnRyb2xzJzogYHZlcnRpY2FsLXRhYnBhbmVsLSR7aW5kZXh9YCxcclxuICAgIH07XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE5ld3NUYWJzKCkge1xyXG4gICAgY29uc3QgW3ZhbHVlLCBzZXRWYWx1ZV0gPSBSZWFjdC51c2VTdGF0ZSgwKTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZXZlbnQsIG5ld1ZhbHVlKSA9PiB7XHJcbiAgICAgICAgc2V0VmFsdWUobmV3VmFsdWUpO1xyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxCb3hcclxuICAgICAgICAgICAgc3g9e3sgZmxleEdyb3c6IDEsIGJnY29sb3I6ICdiYWNrZ3JvdW5kLnBhcGVyJywgZGlzcGxheTogJ2ZsZXgnLCBoZWlnaHQ6ICdmaXQtY29udGVudCcsIG1hcmdpbkJvdHRvbTogMTAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICAgIDxUYWJzXHJcbiAgICAgICAgICAgICAgICBvcmllbnRhdGlvbj1cInZlcnRpY2FsXCJcclxuICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJzY3JvbGxhYmxlXCJcclxuICAgICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZX1cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwiVmVydGljYWwgdGFicyBleGFtcGxlXCJcclxuICAgICAgICAgICAgICAgIHN4PXt7IGJvcmRlclJpZ2h0OiAxLCBmbGV4OiAnMCAwIDIwJScsIGJvcmRlckNvbG9yOiAnZGl2aWRlcicgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPFRhYiBsYWJlbD1cIkl0ZW0gT25lXCIgey4uLmExMXlQcm9wcygwKX0gLz5cclxuICAgICAgICAgICAgICAgIDxUYWIgbGFiZWw9XCJJdGVtIFR3b1wiIHsuLi5hMTF5UHJvcHMoMSl9IC8+XHJcbiAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8L1RhYnM+XHJcbiAgICAgICAgICAgIDxUYWJQYW5lbCB2YWx1ZT17dmFsdWV9IGluZGV4PXswfT5cclxuICAgICAgICAgICAgICAgIEl0ZW0gT25lXHJcbiAgICAgICAgICAgIDwvVGFiUGFuZWw+XHJcbiAgICAgICAgICAgIDxUYWJQYW5lbCB2YWx1ZT17dmFsdWV9IGluZGV4PXsxfT5cclxuICAgICAgICAgICAgICAgIEl0ZW0gVHdvXHJcbiAgICAgICAgICAgIDwvVGFiUGFuZWw+XHJcbiAgICAgICAgICBcclxuICAgICAgICAgIFxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJQcm9wVHlwZXMiLCJUYWJzIiwiVGFiIiwiVHlwb2dyYXBoeSIsIkJveCIsIlRhYlBhbmVsIiwicHJvcHMiLCJjaGlsZHJlbiIsInZhbHVlIiwiaW5kZXgiLCJvdGhlciIsInAiLCJwcm9wVHlwZXMiLCJub2RlIiwibnVtYmVyIiwiaXNSZXF1aXJlZCIsImExMXlQcm9wcyIsImlkIiwiTmV3c1RhYnMiLCJ1c2VTdGF0ZSIsInNldFZhbHVlIiwiaGFuZGxlQ2hhbmdlIiwiZXZlbnQiLCJuZXdWYWx1ZSIsImZsZXhHcm93IiwiYmdjb2xvciIsImRpc3BsYXkiLCJoZWlnaHQiLCJtYXJnaW5Cb3R0b20iLCJib3JkZXJSaWdodCIsImZsZXgiLCJib3JkZXJDb2xvciJdLCJzb3VyY2VSb290IjoiIn0=