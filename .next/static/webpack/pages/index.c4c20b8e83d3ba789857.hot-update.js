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
      height: 'fit-content'
    },
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_mui_material_Tabs__WEBPACK_IMPORTED_MODULE_8__.default, {
      orientation: "vertical",
      variant: "scrollable",
      value: value,
      onChange: handleChange,
      "aria-label": "Vertical tabs example",
      sx: {
        borderRight: 1,
        flex: '0, 0 ,30%',
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYzRjMjBiOGU4M2QzYmE3ODk4NTcuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBLFNBQVNNLFFBQVQsQ0FBa0JDLEtBQWxCLEVBQXlCO0FBQ3JCLE1BQVFDLFFBQVIsR0FBNkNELEtBQTdDLENBQVFDLFFBQVI7QUFBQSxNQUFrQkMsS0FBbEIsR0FBNkNGLEtBQTdDLENBQWtCRSxLQUFsQjtBQUFBLE1BQXlCQyxLQUF6QixHQUE2Q0gsS0FBN0MsQ0FBeUJHLEtBQXpCO0FBQUEsTUFBbUNDLEtBQW5DLDJJQUE2Q0osS0FBN0M7O0FBRUEsc0JBQ0k7QUFDSSxRQUFJLEVBQUMsVUFEVDtBQUVJLFVBQU0sRUFBRUUsS0FBSyxLQUFLQyxLQUZ0QjtBQUdJLE1BQUUsOEJBQXVCQSxLQUF2QixDQUhOO0FBSUksOENBQWlDQSxLQUFqQztBQUpKLEtBS1FDLEtBTFI7QUFBQSxjQU9LRixLQUFLLEtBQUtDLEtBQVYsaUJBQ0csOERBQUMsc0RBQUQ7QUFBSyxRQUFFLEVBQUU7QUFBRUUsUUFBQUEsQ0FBQyxFQUFFO0FBQUwsT0FBVDtBQUFBLDZCQUNJLDhEQUFDLDZEQUFEO0FBQUEsa0JBQWFKO0FBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFSUjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFlSDs7S0FsQlFGO0FBb0JUQSxRQUFRLENBQUNPLFNBQVQsR0FBcUI7QUFDakJMLEVBQUFBLFFBQVEsRUFBRVAsd0RBRE87QUFFakJTLEVBQUFBLEtBQUssRUFBRVQscUVBRlU7QUFHakJRLEVBQUFBLEtBQUssRUFBRVIscUVBQTJCZTtBQUhqQixDQUFyQjs7QUFNQSxTQUFTQyxTQUFULENBQW1CUCxLQUFuQixFQUEwQjtBQUN0QixTQUFPO0FBQ0hRLElB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QUEsWUEvQkosZUFrQ0ksOERBQUMsUUFBRDtBQUFVLFdBQUssRUFBRUEsS0FBakI7QUFBd0IsV0FBSyxFQUFFLENBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBbENKLGVBcUNJLDhEQUFDLFFBQUQ7QUFBVSxXQUFLLEVBQUVBLEtBQWpCO0FBQXdCLFdBQUssRUFBRSxDQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQXJDSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQTJDSDs7R0FsRHVCVTs7TUFBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvSG9tZS9OZXdzVGFicy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCBUYWJzIGZyb20gJ0BtdWkvbWF0ZXJpYWwvVGFicyc7XHJcbmltcG9ydCBUYWIgZnJvbSAnQG11aS9tYXRlcmlhbC9UYWInO1xyXG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICdAbXVpL21hdGVyaWFsL1R5cG9ncmFwaHknO1xyXG5pbXBvcnQgQm94IGZyb20gJ0BtdWkvbWF0ZXJpYWwvQm94JztcclxuXHJcbmZ1bmN0aW9uIFRhYlBhbmVsKHByb3BzKSB7XHJcbiAgICBjb25zdCB7IGNoaWxkcmVuLCB2YWx1ZSwgaW5kZXgsIC4uLm90aGVyIH0gPSBwcm9wcztcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgICAgcm9sZT1cInRhYnBhbmVsXCJcclxuICAgICAgICAgICAgaGlkZGVuPXt2YWx1ZSAhPT0gaW5kZXh9XHJcbiAgICAgICAgICAgIGlkPXtgdmVydGljYWwtdGFicGFuZWwtJHtpbmRleH1gfVxyXG4gICAgICAgICAgICBhcmlhLWxhYmVsbGVkYnk9e2B2ZXJ0aWNhbC10YWItJHtpbmRleH1gfVxyXG4gICAgICAgICAgICB7Li4ub3RoZXJ9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgICB7dmFsdWUgPT09IGluZGV4ICYmIChcclxuICAgICAgICAgICAgICAgIDxCb3ggc3g9e3sgcDogMyB9fT5cclxuICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeT57Y2hpbGRyZW59PC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59XHJcblxyXG5UYWJQYW5lbC5wcm9wVHlwZXMgPSB7XHJcbiAgICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXHJcbiAgICBpbmRleDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxyXG4gICAgdmFsdWU6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcclxufTtcclxuXHJcbmZ1bmN0aW9uIGExMXlQcm9wcyhpbmRleCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBpZDogYHZlcnRpY2FsLXRhYi0ke2luZGV4fWAsXHJcbiAgICAgICAgJ2FyaWEtY29udHJvbHMnOiBgdmVydGljYWwtdGFicGFuZWwtJHtpbmRleH1gLFxyXG4gICAgfTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTmV3c1RhYnMoKSB7XHJcbiAgICBjb25zdCBbdmFsdWUsIHNldFZhbHVlXSA9IFJlYWN0LnVzZVN0YXRlKDApO1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChldmVudCwgbmV3VmFsdWUpID0+IHtcclxuICAgICAgICBzZXRWYWx1ZShuZXdWYWx1ZSk7XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPEJveFxyXG4gICAgICAgICAgICBzeD17eyBmbGV4R3JvdzogMSwgYmdjb2xvcjogJ2JhY2tncm91bmQucGFwZXInLCBkaXNwbGF5OiAnZmxleCcsIGhlaWdodDogJ2ZpdC1jb250ZW50JyB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgICAgPFRhYnNcclxuICAgICAgICAgICAgICAgIG9yaWVudGF0aW9uPVwidmVydGljYWxcIlxyXG4gICAgICAgICAgICAgICAgdmFyaWFudD1cInNjcm9sbGFibGVcIlxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e3ZhbHVlfVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJWZXJ0aWNhbCB0YWJzIGV4YW1wbGVcIlxyXG4gICAgICAgICAgICAgICAgc3g9e3sgYm9yZGVyUmlnaHQ6IDEsIGZsZXg6ICcwLCAwICwzMCUnLCBib3JkZXJDb2xvcjogJ2RpdmlkZXInIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxUYWIgbGFiZWw9XCJJdGVtIE9uZVwiIHsuLi5hMTF5UHJvcHMoMCl9IC8+XHJcbiAgICAgICAgICAgICAgICA8VGFiIGxhYmVsPVwiSXRlbSBUd29cIiB7Li4uYTExeVByb3BzKDEpfSAvPlxyXG4gICAgICAgICAgICAgICAgPFRhYiBsYWJlbD1cIkl0ZW0gVGhyZWVcIiB7Li4uYTExeVByb3BzKDIpfSAvPlxyXG4gICAgICAgICAgICAgICAgPFRhYiBsYWJlbD1cIkl0ZW0gRm91clwiIHsuLi5hMTF5UHJvcHMoMyl9IC8+XHJcbiAgICAgICAgICAgICAgICA8VGFiIGxhYmVsPVwiSXRlbSBGaXZlXCIgey4uLmExMXlQcm9wcyg0KX0gLz5cclxuICAgICAgICAgICAgICAgIDxUYWIgbGFiZWw9XCJJdGVtIFNpeFwiIHsuLi5hMTF5UHJvcHMoNSl9IC8+XHJcbiAgICAgICAgICAgICAgICA8VGFiIGxhYmVsPVwiSXRlbSBTZXZlblwiIHsuLi5hMTF5UHJvcHMoNil9IC8+XHJcbiAgICAgICAgICAgIDwvVGFicz5cclxuICAgICAgICAgICAgPFRhYlBhbmVsIHZhbHVlPXt2YWx1ZX0gaW5kZXg9ezB9PlxyXG4gICAgICAgICAgICAgICAgSXRlbSBPbmVcclxuICAgICAgICAgICAgPC9UYWJQYW5lbD5cclxuICAgICAgICAgICAgPFRhYlBhbmVsIHZhbHVlPXt2YWx1ZX0gaW5kZXg9ezF9PlxyXG4gICAgICAgICAgICAgICAgSXRlbSBUd29cclxuICAgICAgICAgICAgPC9UYWJQYW5lbD5cclxuICAgICAgICAgICAgPFRhYlBhbmVsIHZhbHVlPXt2YWx1ZX0gaW5kZXg9ezJ9PlxyXG4gICAgICAgICAgICAgICAgSXRlbSBUaHJlZVxyXG4gICAgICAgICAgICA8L1RhYlBhbmVsPlxyXG4gICAgICAgICAgICA8VGFiUGFuZWwgdmFsdWU9e3ZhbHVlfSBpbmRleD17M30+XHJcbiAgICAgICAgICAgICAgICBJdGVtIEZvdXJcclxuICAgICAgICAgICAgPC9UYWJQYW5lbD5cclxuICAgICAgICAgICAgPFRhYlBhbmVsIHZhbHVlPXt2YWx1ZX0gaW5kZXg9ezR9PlxyXG4gICAgICAgICAgICAgICAgSXRlbSBGaXZlXHJcbiAgICAgICAgICAgIDwvVGFiUGFuZWw+XHJcbiAgICAgICAgICAgIDxUYWJQYW5lbCB2YWx1ZT17dmFsdWV9IGluZGV4PXs1fT5cclxuICAgICAgICAgICAgICAgIEl0ZW0gU2l4XHJcbiAgICAgICAgICAgIDwvVGFiUGFuZWw+XHJcbiAgICAgICAgICAgIDxUYWJQYW5lbCB2YWx1ZT17dmFsdWV9IGluZGV4PXs2fT5cclxuICAgICAgICAgICAgICAgIEl0ZW0gU2V2ZW5cclxuICAgICAgICAgICAgPC9UYWJQYW5lbD5cclxuICAgICAgICA8L0JveD5cclxuICAgICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiUHJvcFR5cGVzIiwiVGFicyIsIlRhYiIsIlR5cG9ncmFwaHkiLCJCb3giLCJUYWJQYW5lbCIsInByb3BzIiwiY2hpbGRyZW4iLCJ2YWx1ZSIsImluZGV4Iiwib3RoZXIiLCJwIiwicHJvcFR5cGVzIiwibm9kZSIsIm51bWJlciIsImlzUmVxdWlyZWQiLCJhMTF5UHJvcHMiLCJpZCIsIk5ld3NUYWJzIiwidXNlU3RhdGUiLCJzZXRWYWx1ZSIsImhhbmRsZUNoYW5nZSIsImV2ZW50IiwibmV3VmFsdWUiLCJmbGV4R3JvdyIsImJnY29sb3IiLCJkaXNwbGF5IiwiaGVpZ2h0IiwiYm9yZGVyUmlnaHQiLCJmbGV4IiwiYm9yZGVyQ29sb3IiXSwic291cmNlUm9vdCI6IiJ9