"use strict";
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/AdminHeader.js":
/*!***********************************!*\
  !*** ./components/AdminHeader.js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Header; }
/* harmony export */ });
/* harmony import */ var D_nextjs_blog_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var D_nextjs_blog_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material/styles */ "./node_modules/@mui/material/styles/index.js");
/* harmony import */ var _mui_material_AppBar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @mui/material/AppBar */ "./node_modules/@mui/material/AppBar/index.js");
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @mui/material/Box */ "./node_modules/@mui/material/Box/index.js");
/* harmony import */ var _mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @mui/material/Toolbar */ "./node_modules/@mui/material/Toolbar/index.js");
/* harmony import */ var _mui_material_IconButton__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material/IconButton */ "./node_modules/@mui/material/IconButton/index.js");
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @mui/material/Typography */ "./node_modules/@mui/material/Typography/index.js");
/* harmony import */ var _mui_material_InputBase__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/InputBase */ "./node_modules/@mui/material/InputBase/index.js");
/* harmony import */ var _mui_material_Badge__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material/Badge */ "./node_modules/@mui/material/Badge/index.js");
/* harmony import */ var _mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material/MenuItem */ "./node_modules/@mui/material/MenuItem/index.js");
/* harmony import */ var _mui_material_Menu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material/Menu */ "./node_modules/@mui/material/Menu/index.js");
/* harmony import */ var _mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @mui/icons-material/Menu */ "./node_modules/@mui/icons-material/Menu.js");
/* harmony import */ var _mui_icons_material_Search__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @mui/icons-material/Search */ "./node_modules/@mui/icons-material/Search.js");
/* harmony import */ var _mui_icons_material_AccountCircle__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @mui/icons-material/AccountCircle */ "./node_modules/@mui/icons-material/AccountCircle.js");
/* harmony import */ var _mui_icons_material_Mail__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/icons-material/Mail */ "./node_modules/@mui/icons-material/Mail.js");
/* harmony import */ var _mui_icons_material_Notifications__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/icons-material/Notifications */ "./node_modules/@mui/icons-material/Notifications.js");
/* harmony import */ var _mui_icons_material_MoreVert__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @mui/icons-material/MoreVert */ "./node_modules/@mui/icons-material/MoreVert.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "D:\\nextjs-blog\\components\\AdminHeader.js",
    _s = $RefreshSig$();



















var Search = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_4__.styled)('div')(function (_ref) {
  var theme = _ref.theme;
  return (0,D_nextjs_blog_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_4__.alpha)(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_4__.alpha)(theme.palette.common.white, 0.25)
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%'
  }, theme.breakpoints.up('sm'), {
    marginLeft: theme.spacing(3),
    width: 'auto'
  });
});
var SearchIconWrapper = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_4__.styled)('div')(function (_ref3) {
  var theme = _ref3.theme;
  return {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  };
});
var StyledInputBase = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_4__.styled)(_mui_material_InputBase__WEBPACK_IMPORTED_MODULE_5__.default)(function (_ref4) {
  var theme = _ref4.theme;
  return {
    color: 'inherit',
    '& .MuiInputBase-input': (0,D_nextjs_blog_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)({
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: "calc(1em + ".concat(theme.spacing(4), ")"),
      transition: theme.transitions.create('width'),
      width: '100%'
    }, theme.breakpoints.up('md'), {
      width: '20ch'
    })
  };
});
function Header() {
  _s();

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_2__.useState(null),
      _React$useState2 = (0,D_nextjs_blog_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.default)(_React$useState, 2),
      anchorEl = _React$useState2[0],
      setAnchorEl = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_2__.useState(null),
      _React$useState4 = (0,D_nextjs_blog_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.default)(_React$useState3, 2),
      mobileMoreAnchorEl = _React$useState4[0],
      setMobileMoreAnchorEl = _React$useState4[1];

  var isMenuOpen = Boolean(anchorEl);
  var isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  var handleProfileMenuOpen = function handleProfileMenuOpen(event) {
    setAnchorEl(event.currentTarget);
  };

  var handleMobileMenuClose = function handleMobileMenuClose() {
    setMobileMoreAnchorEl(null);
  };

  var handleMenuClose = function handleMenuClose() {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  var handleMobileMenuOpen = function handleMobileMenuOpen(event) {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  var menuId = 'primary-search-account-menu';

  var renderMenu = /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_mui_material_Menu__WEBPACK_IMPORTED_MODULE_6__.default, {
    anchorEl: anchorEl,
    anchorOrigin: {
      vertical: 'top',
      horizontal: 'right'
    },
    id: menuId,
    keepMounted: true,
    transformOrigin: {
      vertical: 'top',
      horizontal: 'right'
    },
    open: isMenuOpen,
    onClose: handleMenuClose,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_7__.default, {
      onClick: handleMenuClose,
      children: "Profile"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_7__.default, {
      onClick: handleMenuClose,
      children: "My account"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 85,
    columnNumber: 9
  }, this);

  var mobileMenuId = 'primary-search-account-menu-mobile';

  var renderMobileMenu = /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_mui_material_Menu__WEBPACK_IMPORTED_MODULE_6__.default, {
    anchorEl: mobileMoreAnchorEl,
    anchorOrigin: {
      vertical: 'top',
      horizontal: 'right'
    },
    id: mobileMenuId,
    keepMounted: true,
    transformOrigin: {
      vertical: 'top',
      horizontal: 'right'
    },
    open: isMobileMenuOpen,
    onClose: handleMobileMenuClose,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_7__.default, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_8__.default, {
        size: "large",
        "aria-label": "show 4 new mails",
        color: "inherit",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_mui_material_Badge__WEBPACK_IMPORTED_MODULE_9__.default, {
          badgeContent: 4,
          color: "error",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_mui_icons_material_Mail__WEBPACK_IMPORTED_MODULE_10__.default, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 125,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 124,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 123,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("p", {
        children: "Messages"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 128,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_7__.default, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_8__.default, {
        size: "large",
        "aria-label": "show 17 new notifications",
        color: "inherit",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_mui_material_Badge__WEBPACK_IMPORTED_MODULE_9__.default, {
          badgeContent: 17,
          color: "error",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_mui_icons_material_Notifications__WEBPACK_IMPORTED_MODULE_11__.default, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 137,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 136,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 131,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("p", {
        children: "Notifications"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 140,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_7__.default, {
      onClick: handleProfileMenuOpen,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_8__.default, {
        size: "large",
        "aria-label": "account of current user",
        "aria-controls": "primary-search-account-menu",
        "aria-haspopup": "true",
        color: "inherit",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_mui_icons_material_AccountCircle__WEBPACK_IMPORTED_MODULE_12__.default, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 150,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 143,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("p", {
        children: "Profile"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 152,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 107,
    columnNumber: 9
  }, this);

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_13__.default, {
    sx: {
      flexGrow: 1,
      width: '100%'
    },
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_mui_material_AppBar__WEBPACK_IMPORTED_MODULE_14__.default, {
      position: "static",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_15__.default, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_8__.default, {
          size: "large",
          edge: "start",
          color: "inherit",
          "aria-label": "open drawer",
          sx: {
            mr: 2
          },
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_16__.default, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 168,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 161,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_17__.default, {
          variant: "h6",
          noWrap: true,
          component: "div",
          sx: {
            display: {
              xs: 'none',
              sm: 'block'
            }
          },
          children: "MUI"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 170,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(Search, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(SearchIconWrapper, {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_mui_icons_material_Search__WEBPACK_IMPORTED_MODULE_18__.default, {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 180,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 179,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(StyledInputBase, {
            placeholder: "Search\u2026",
            inputProps: {
              'aria-label': 'search'
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 182,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 178,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_13__.default, {
          sx: {
            flexGrow: 1
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 187,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_13__.default, {
          sx: {
            display: {
              xs: 'none',
              md: 'flex'
            }
          },
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_8__.default, {
            size: "large",
            "aria-label": "show 4 new mails",
            color: "inherit",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_mui_material_Badge__WEBPACK_IMPORTED_MODULE_9__.default, {
              badgeContent: 4,
              color: "error",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_mui_icons_material_Mail__WEBPACK_IMPORTED_MODULE_10__.default, {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 191,
                columnNumber: 33
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 190,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 189,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_8__.default, {
            size: "large",
            "aria-label": "show 17 new notifications",
            color: "inherit",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_mui_material_Badge__WEBPACK_IMPORTED_MODULE_9__.default, {
              badgeContent: 17,
              color: "error",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_mui_icons_material_Notifications__WEBPACK_IMPORTED_MODULE_11__.default, {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 200,
                columnNumber: 33
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 199,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 194,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_8__.default, {
            size: "large",
            edge: "end",
            "aria-label": "account of current user",
            "aria-controls": menuId,
            "aria-haspopup": "true",
            onClick: handleProfileMenuOpen,
            color: "inherit",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_mui_icons_material_AccountCircle__WEBPACK_IMPORTED_MODULE_12__.default, {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 212,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 203,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 188,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_13__.default, {
          sx: {
            display: {
              xs: 'flex',
              md: 'none'
            }
          },
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_8__.default, {
            size: "large",
            "aria-label": "show more",
            "aria-controls": mobileMenuId,
            "aria-haspopup": "true",
            onClick: handleMobileMenuOpen,
            color: "inherit",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_mui_icons_material_MoreVert__WEBPACK_IMPORTED_MODULE_19__.default, {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 224,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 216,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 215,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 160,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 159,
      columnNumber: 13
    }, this), renderMobileMenu, renderMenu]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 158,
    columnNumber: 9
  }, this);
}

_s(Header, "gp3ONob+XFGEzL/Hd3BDu+y29Hw=");

_c = Header;

var _c;

$RefreshReg$(_c, "Header");

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

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Layout; }
/* harmony export */ });
/* harmony import */ var D_nextjs_blog_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/styles */ "./node_modules/@mui/material/styles/index.js");
/* harmony import */ var _mui_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/styles */ "./node_modules/@mui/styles/index.js");
/* harmony import */ var _AdminHeader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AdminHeader */ "./components/AdminHeader.js");
/* harmony import */ var _Theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Theme */ "./components/Theme.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "D:\\nextjs-blog\\components\\Layout.js",
    _s = $RefreshSig$();






var useStyles = (0,_mui_styles__WEBPACK_IMPORTED_MODULE_4__.makeStyles)({
  root: (0,D_nextjs_blog_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)({
    background: 'rgb(247,233,233)'
  }, "background", 'linear-gradient(230deg, rgba(247,233,233,1) 0%, rgba(172,6,6,1) 100%)')
});
function Layout(_ref) {
  _s();

  var children = _ref.children;
  var classes = useStyles();
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_mui_material_styles__WEBPACK_IMPORTED_MODULE_5__.ThemeProvider, {
    theme: _Theme__WEBPACK_IMPORTED_MODULE_2__.theme,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_AdminHeader__WEBPACK_IMPORTED_MODULE_1__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
      className: classes.root,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("main", {
        children: children
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 9
  }, this);
}

_s(Layout, "8g5FPXexvSEOsxdmU7HicukHGqY=", false, function () {
  return [useStyles];
});

_c = Layout;

var _c;

$RefreshReg$(_c, "Layout");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYTY0YTNkYzFhZjk2MDkxNTk5MzkuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1rQixNQUFNLEdBQUdqQiw0REFBTSxDQUFDLEtBQUQsQ0FBTixDQUFjO0FBQUEsTUFBR2tCLEtBQUgsUUFBR0EsS0FBSDtBQUFBO0FBQ3pCQyxJQUFBQSxRQUFRLEVBQUUsVUFEZTtBQUV6QkMsSUFBQUEsWUFBWSxFQUFFRixLQUFLLENBQUNHLEtBQU4sQ0FBWUQsWUFGRDtBQUd6QkUsSUFBQUEsZUFBZSxFQUFFckIsMkRBQUssQ0FBQ2lCLEtBQUssQ0FBQ0ssT0FBTixDQUFjQyxNQUFkLENBQXFCQyxLQUF0QixFQUE2QixJQUE3QixDQUhHO0FBSXpCLGVBQVc7QUFDUEgsTUFBQUEsZUFBZSxFQUFFckIsMkRBQUssQ0FBQ2lCLEtBQUssQ0FBQ0ssT0FBTixDQUFjQyxNQUFkLENBQXFCQyxLQUF0QixFQUE2QixJQUE3QjtBQURmLEtBSmM7QUFPekJDLElBQUFBLFdBQVcsRUFBRVIsS0FBSyxDQUFDUyxPQUFOLENBQWMsQ0FBZCxDQVBZO0FBUXpCQyxJQUFBQSxVQUFVLEVBQUUsQ0FSYTtBQVN6QkMsSUFBQUEsS0FBSyxFQUFFO0FBVGtCLEtBVXhCWCxLQUFLLENBQUNZLFdBQU4sQ0FBa0JDLEVBQWxCLENBQXFCLElBQXJCLENBVndCLEVBVUs7QUFDMUJILElBQUFBLFVBQVUsRUFBRVYsS0FBSyxDQUFDUyxPQUFOLENBQWMsQ0FBZCxDQURjO0FBRTFCRSxJQUFBQSxLQUFLLEVBQUU7QUFGbUIsR0FWTDtBQUFBLENBQWQsQ0FBZjtBQWdCQSxJQUFNRyxpQkFBaUIsR0FBR2hDLDREQUFNLENB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LmpzIiwid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0xheW91dC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHN0eWxlZCwgYWxwaGEgfSBmcm9tICdAbXVpL21hdGVyaWFsL3N0eWxlcyc7XHJcbmltcG9ydCBBcHBCYXIgZnJvbSAnQG11aS9tYXRlcmlhbC9BcHBCYXInO1xyXG5pbXBvcnQgQm94IGZyb20gJ0BtdWkvbWF0ZXJpYWwvQm94JztcclxuaW1wb3J0IFRvb2xiYXIgZnJvbSAnQG11aS9tYXRlcmlhbC9Ub29sYmFyJztcclxuaW1wb3J0IEljb25CdXR0b24gZnJvbSAnQG11aS9tYXRlcmlhbC9JY29uQnV0dG9uJztcclxuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnQG11aS9tYXRlcmlhbC9UeXBvZ3JhcGh5JztcclxuaW1wb3J0IElucHV0QmFzZSBmcm9tICdAbXVpL21hdGVyaWFsL0lucHV0QmFzZSc7XHJcbmltcG9ydCBCYWRnZSBmcm9tICdAbXVpL21hdGVyaWFsL0JhZGdlJztcclxuaW1wb3J0IE1lbnVJdGVtIGZyb20gJ0BtdWkvbWF0ZXJpYWwvTWVudUl0ZW0nO1xyXG5pbXBvcnQgTWVudSBmcm9tICdAbXVpL21hdGVyaWFsL01lbnUnO1xyXG5pbXBvcnQgTWVudUljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9NZW51JztcclxuaW1wb3J0IFNlYXJjaEljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9TZWFyY2gnO1xyXG5pbXBvcnQgQWNjb3VudENpcmNsZSBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL0FjY291bnRDaXJjbGUnO1xyXG5pbXBvcnQgTWFpbEljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9NYWlsJztcclxuaW1wb3J0IE5vdGlmaWNhdGlvbnNJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvTm90aWZpY2F0aW9ucyc7XHJcbmltcG9ydCBNb3JlSWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL01vcmVWZXJ0JztcclxuXHJcbmNvbnN0IFNlYXJjaCA9IHN0eWxlZCgnZGl2JykoKHsgdGhlbWUgfSkgPT4gKHtcclxuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxyXG4gICAgYm9yZGVyUmFkaXVzOiB0aGVtZS5zaGFwZS5ib3JkZXJSYWRpdXMsXHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IGFscGhhKHRoZW1lLnBhbGV0dGUuY29tbW9uLndoaXRlLCAwLjE1KSxcclxuICAgICcmOmhvdmVyJzoge1xyXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogYWxwaGEodGhlbWUucGFsZXR0ZS5jb21tb24ud2hpdGUsIDAuMjUpLFxyXG4gICAgfSxcclxuICAgIG1hcmdpblJpZ2h0OiB0aGVtZS5zcGFjaW5nKDIpLFxyXG4gICAgbWFyZ2luTGVmdDogMCxcclxuICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMudXAoJ3NtJyldOiB7XHJcbiAgICAgICAgbWFyZ2luTGVmdDogdGhlbWUuc3BhY2luZygzKSxcclxuICAgICAgICB3aWR0aDogJ2F1dG8nLFxyXG4gICAgfSxcclxufSkpO1xyXG5cclxuY29uc3QgU2VhcmNoSWNvbldyYXBwZXIgPSBzdHlsZWQoJ2RpdicpKCh7IHRoZW1lIH0pID0+ICh7XHJcbiAgICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDAsIDIpLFxyXG4gICAgaGVpZ2h0OiAnMTAwJScsXHJcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICAgIHBvaW50ZXJFdmVudHM6ICdub25lJyxcclxuICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxyXG59KSk7XHJcblxyXG5jb25zdCBTdHlsZWRJbnB1dEJhc2UgPSBzdHlsZWQoSW5wdXRCYXNlKSgoeyB0aGVtZSB9KSA9PiAoe1xyXG4gICAgY29sb3I6ICdpbmhlcml0JyxcclxuICAgICcmIC5NdWlJbnB1dEJhc2UtaW5wdXQnOiB7XHJcbiAgICAgICAgcGFkZGluZzogdGhlbWUuc3BhY2luZygxLCAxLCAxLCAwKSxcclxuICAgICAgICAvLyB2ZXJ0aWNhbCBwYWRkaW5nICsgZm9udCBzaXplIGZyb20gc2VhcmNoSWNvblxyXG4gICAgICAgIHBhZGRpbmdMZWZ0OiBgY2FsYygxZW0gKyAke3RoZW1lLnNwYWNpbmcoNCl9KWAsXHJcbiAgICAgICAgdHJhbnNpdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuY3JlYXRlKCd3aWR0aCcpLFxyXG4gICAgICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICAgICAgW3RoZW1lLmJyZWFrcG9pbnRzLnVwKCdtZCcpXToge1xyXG4gICAgICAgICAgICB3aWR0aDogJzIwY2gnLFxyXG4gICAgICAgIH0sXHJcbiAgICB9LFxyXG59KSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIZWFkZXIoKSB7XHJcbiAgICBjb25zdCBbYW5jaG9yRWwsIHNldEFuY2hvckVsXSA9IFJlYWN0LnVzZVN0YXRlKG51bGwpO1xyXG4gICAgY29uc3QgW21vYmlsZU1vcmVBbmNob3JFbCwgc2V0TW9iaWxlTW9yZUFuY2hvckVsXSA9IFJlYWN0LnVzZVN0YXRlKG51bGwpO1xyXG5cclxuICAgIGNvbnN0IGlzTWVudU9wZW4gPSBCb29sZWFuKGFuY2hvckVsKTtcclxuICAgIGNvbnN0IGlzTW9iaWxlTWVudU9wZW4gPSBCb29sZWFuKG1vYmlsZU1vcmVBbmNob3JFbCk7XHJcblxyXG4gICAgY29uc3QgaGFuZGxlUHJvZmlsZU1lbnVPcGVuID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgc2V0QW5jaG9yRWwoZXZlbnQuY3VycmVudFRhcmdldCk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZU1vYmlsZU1lbnVDbG9zZSA9ICgpID0+IHtcclxuICAgICAgICBzZXRNb2JpbGVNb3JlQW5jaG9yRWwobnVsbCk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZU1lbnVDbG9zZSA9ICgpID0+IHtcclxuICAgICAgICBzZXRBbmNob3JFbChudWxsKTtcclxuICAgICAgICBoYW5kbGVNb2JpbGVNZW51Q2xvc2UoKTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgaGFuZGxlTW9iaWxlTWVudU9wZW4gPSAoZXZlbnQpID0+IHtcclxuICAgICAgICBzZXRNb2JpbGVNb3JlQW5jaG9yRWwoZXZlbnQuY3VycmVudFRhcmdldCk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IG1lbnVJZCA9ICdwcmltYXJ5LXNlYXJjaC1hY2NvdW50LW1lbnUnO1xyXG4gICAgY29uc3QgcmVuZGVyTWVudSA9IChcclxuICAgICAgICA8TWVudVxyXG4gICAgICAgICAgICBhbmNob3JFbD17YW5jaG9yRWx9XHJcbiAgICAgICAgICAgIGFuY2hvck9yaWdpbj17e1xyXG4gICAgICAgICAgICAgICAgdmVydGljYWw6ICd0b3AnLFxyXG4gICAgICAgICAgICAgICAgaG9yaXpvbnRhbDogJ3JpZ2h0JyxcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgaWQ9e21lbnVJZH1cclxuICAgICAgICAgICAga2VlcE1vdW50ZWRcclxuICAgICAgICAgICAgdHJhbnNmb3JtT3JpZ2luPXt7XHJcbiAgICAgICAgICAgICAgICB2ZXJ0aWNhbDogJ3RvcCcsXHJcbiAgICAgICAgICAgICAgICBob3Jpem9udGFsOiAncmlnaHQnLFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICBvcGVuPXtpc01lbnVPcGVufVxyXG4gICAgICAgICAgICBvbkNsb3NlPXtoYW5kbGVNZW51Q2xvc2V9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgICA8TWVudUl0ZW0gb25DbGljaz17aGFuZGxlTWVudUNsb3NlfT5Qcm9maWxlPC9NZW51SXRlbT5cclxuICAgICAgICAgICAgPE1lbnVJdGVtIG9uQ2xpY2s9e2hhbmRsZU1lbnVDbG9zZX0+TXkgYWNjb3VudDwvTWVudUl0ZW0+XHJcbiAgICAgICAgPC9NZW51PlxyXG4gICAgKTtcclxuXHJcbiAgICBjb25zdCBtb2JpbGVNZW51SWQgPSAncHJpbWFyeS1zZWFyY2gtYWNjb3VudC1tZW51LW1vYmlsZSc7XHJcbiAgICBjb25zdCByZW5kZXJNb2JpbGVNZW51ID0gKFxyXG4gICAgICAgIDxNZW51XHJcbiAgICAgICAgICAgIGFuY2hvckVsPXttb2JpbGVNb3JlQW5jaG9yRWx9XHJcbiAgICAgICAgICAgIGFuY2hvck9yaWdpbj17e1xyXG4gICAgICAgICAgICAgICAgdmVydGljYWw6ICd0b3AnLFxyXG4gICAgICAgICAgICAgICAgaG9yaXpvbnRhbDogJ3JpZ2h0JyxcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgaWQ9e21vYmlsZU1lbnVJZH1cclxuICAgICAgICAgICAga2VlcE1vdW50ZWRcclxuICAgICAgICAgICAgdHJhbnNmb3JtT3JpZ2luPXt7XHJcbiAgICAgICAgICAgICAgICB2ZXJ0aWNhbDogJ3RvcCcsXHJcbiAgICAgICAgICAgICAgICBob3Jpem9udGFsOiAncmlnaHQnLFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICBvcGVuPXtpc01vYmlsZU1lbnVPcGVufVxyXG4gICAgICAgICAgICBvbkNsb3NlPXtoYW5kbGVNb2JpbGVNZW51Q2xvc2V9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgICA8TWVudUl0ZW0+XHJcbiAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvbiBzaXplPVwibGFyZ2VcIiBhcmlhLWxhYmVsPVwic2hvdyA0IG5ldyBtYWlsc1wiIGNvbG9yPVwiaW5oZXJpdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxCYWRnZSBiYWRnZUNvbnRlbnQ9ezR9IGNvbG9yPVwiZXJyb3JcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPE1haWxJY29uIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9CYWRnZT5cclxuICAgICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxwPk1lc3NhZ2VzPC9wPlxyXG4gICAgICAgICAgICA8L01lbnVJdGVtPlxyXG4gICAgICAgICAgICA8TWVudUl0ZW0+XHJcbiAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgIHNpemU9XCJsYXJnZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cInNob3cgMTcgbmV3IG5vdGlmaWNhdGlvbnNcIlxyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yPVwiaW5oZXJpdFwiXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJhZGdlIGJhZGdlQ29udGVudD17MTd9IGNvbG9yPVwiZXJyb3JcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPE5vdGlmaWNhdGlvbnNJY29uIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9CYWRnZT5cclxuICAgICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxwPk5vdGlmaWNhdGlvbnM8L3A+XHJcbiAgICAgICAgICAgIDwvTWVudUl0ZW0+XHJcbiAgICAgICAgICAgIDxNZW51SXRlbSBvbkNsaWNrPXtoYW5kbGVQcm9maWxlTWVudU9wZW59PlxyXG4gICAgICAgICAgICAgICAgPEljb25CdXR0b25cclxuICAgICAgICAgICAgICAgICAgICBzaXplPVwibGFyZ2VcIlxyXG4gICAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJhY2NvdW50IG9mIGN1cnJlbnQgdXNlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgYXJpYS1jb250cm9scz1cInByaW1hcnktc2VhcmNoLWFjY291bnQtbWVudVwiXHJcbiAgICAgICAgICAgICAgICAgICAgYXJpYS1oYXNwb3B1cD1cInRydWVcIlxyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yPVwiaW5oZXJpdFwiXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPEFjY291bnRDaXJjbGUgLz5cclxuICAgICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxwPlByb2ZpbGU8L3A+XHJcbiAgICAgICAgICAgIDwvTWVudUl0ZW0+XHJcbiAgICAgICAgPC9NZW51PlxyXG4gICAgKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxCb3ggc3g9e3sgZmxleEdyb3c6IDEsIHdpZHRoOiAnMTAwJScgfX0+XHJcbiAgICAgICAgICAgIDxBcHBCYXIgcG9zaXRpb249XCJzdGF0aWNcIj5cclxuICAgICAgICAgICAgICAgIDxUb29sYmFyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJsYXJnZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVkZ2U9XCJzdGFydFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVwiaW5oZXJpdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJvcGVuIGRyYXdlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN4PXt7IG1yOiAyIH19XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TWVudUljb24gLz5cclxuICAgICAgICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHlcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cImg2XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgbm9XcmFwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cImRpdlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN4PXt7IGRpc3BsYXk6IHsgeHM6ICdub25lJywgc206ICdibG9jaycgfSB9fVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgTVVJXHJcbiAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgIDxTZWFyY2g+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxTZWFyY2hJY29uV3JhcHBlcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTZWFyY2hJY29uIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvU2VhcmNoSWNvbldyYXBwZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxTdHlsZWRJbnB1dEJhc2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2VhcmNo4oCmXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0UHJvcHM9e3sgJ2FyaWEtbGFiZWwnOiAnc2VhcmNoJyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvU2VhcmNoPlxyXG4gICAgICAgICAgICAgICAgICAgIDxCb3ggc3g9e3sgZmxleEdyb3c6IDEgfX0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8Qm94IHN4PXt7IGRpc3BsYXk6IHsgeHM6ICdub25lJywgbWQ6ICdmbGV4JyB9IH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvbiBzaXplPVwibGFyZ2VcIiBhcmlhLWxhYmVsPVwic2hvdyA0IG5ldyBtYWlsc1wiIGNvbG9yPVwiaW5oZXJpdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJhZGdlIGJhZGdlQ29udGVudD17NH0gY29sb3I9XCJlcnJvclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNYWlsSWNvbiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CYWRnZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cImxhcmdlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJzaG93IDE3IG5ldyBub3RpZmljYXRpb25zXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVwiaW5oZXJpdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCYWRnZSBiYWRnZUNvbnRlbnQ9ezE3fSBjb2xvcj1cImVycm9yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5vdGlmaWNhdGlvbnNJY29uIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0JhZGdlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwibGFyZ2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWRnZT1cImVuZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwiYWNjb3VudCBvZiBjdXJyZW50IHVzZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1jb250cm9scz17bWVudUlkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1oYXNwb3B1cD1cInRydWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlUHJvZmlsZU1lbnVPcGVufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJpbmhlcml0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFjY291bnRDaXJjbGUgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICAgICAgICAgIDxCb3ggc3g9e3sgZGlzcGxheTogeyB4czogJ2ZsZXgnLCBtZDogJ25vbmUnIH0gfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwibGFyZ2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cInNob3cgbW9yZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWNvbnRyb2xzPXttb2JpbGVNZW51SWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWhhc3BvcHVwPVwidHJ1ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVNb2JpbGVNZW51T3Blbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVwiaW5oZXJpdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNb3JlSWNvbiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgICAgICA8L1Rvb2xiYXI+XHJcbiAgICAgICAgICAgIDwvQXBwQmFyPlxyXG4gICAgICAgICAgICB7cmVuZGVyTW9iaWxlTWVudX1cclxuICAgICAgICAgICAge3JlbmRlck1lbnV9XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICApO1xyXG59XHJcbiIsImltcG9ydCB7IGNyZWF0ZVRoZW1lLCBUaGVtZVByb3ZpZGVyIH0gZnJvbSAnQG11aS9tYXRlcmlhbC9zdHlsZXMnO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG11aS9zdHlsZXMnO1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gXCIuL0FkbWluSGVhZGVyXCI7XHJcbmltcG9ydCB7IHRoZW1lIH0gZnJvbSBcIi4vVGhlbWVcIjtcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoe1xyXG4gICAgcm9vdDoge1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICdyZ2IoMjQ3LDIzMywyMzMpJyxcclxuICAgICAgICBiYWNrZ3JvdW5kOiAnbGluZWFyLWdyYWRpZW50KDIzMGRlZywgcmdiYSgyNDcsMjMzLDIzMywxKSAwJSwgcmdiYSgxNzIsNiw2LDEpIDEwMCUpJ1xyXG4gICAgfSxcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMYXlvdXQoeyBjaGlsZHJlbiB9KSB7XHJcbiAgICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxUaGVtZVByb3ZpZGVyIHRoZW1lPXt0aGVtZX0+XHJcbiAgICAgICAgICAgIDxIZWFkZXIgLz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0+XHJcbiAgICAgICAgICAgICAgICA8bWFpbj57Y2hpbGRyZW59PC9tYWluPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L1RoZW1lUHJvdmlkZXI+XHJcbiAgICApXHJcbn0iXSwibmFtZXMiOlsiUmVhY3QiLCJzdHlsZWQiLCJhbHBoYSIsIkFwcEJhciIsIkJveCIsIlRvb2xiYXIiLCJJY29uQnV0dG9uIiwiVHlwb2dyYXBoeSIsIklucHV0QmFzZSIsIkJhZGdlIiwiTWVudUl0ZW0iLCJNZW51IiwiTWVudUljb24iLCJTZWFyY2hJY29uIiwiQWNjb3VudENpcmNsZSIsIk1haWxJY29uIiwiTm90aWZpY2F0aW9uc0ljb24iLCJNb3JlSWNvbiIsIlNlYXJjaCIsInRoZW1lIiwicG9zaXRpb24iLCJib3JkZXJSYWRpdXMiLCJzaGFwZSIsImJhY2tncm91bmRDb2xvciIsInBhbGV0dGUiLCJjb21tb24iLCJ3aGl0ZSIsIm1hcmdpblJpZ2h0Iiwic3BhY2luZyIsIm1hcmdpbkxlZnQiLCJ3aWR0aCIsImJyZWFrcG9pbnRzIiwidXAiLCJTZWFyY2hJY29uV3JhcHBlciIsInBhZGRpbmciLCJoZWlnaHQiLCJwb2ludGVyRXZlbnRzIiwiZGlzcGxheSIsImFsaWduSXRlbXMiLCJqdXN0aWZ5Q29udGVudCIsIlN0eWxlZElucHV0QmFzZSIsImNvbG9yIiwicGFkZGluZ0xlZnQiLCJ0cmFuc2l0aW9uIiwidHJhbnNpdGlvbnMiLCJjcmVhdGUiLCJIZWFkZXIiLCJ1c2VTdGF0ZSIsImFuY2hvckVsIiwic2V0QW5jaG9yRWwiLCJtb2JpbGVNb3JlQW5jaG9yRWwiLCJzZXRNb2JpbGVNb3JlQW5jaG9yRWwiLCJpc01lbnVPcGVuIiwiQm9vbGVhbiIsImlzTW9iaWxlTWVudU9wZW4iLCJoYW5kbGVQcm9maWxlTWVudU9wZW4iLCJldmVudCIsImN1cnJlbnRUYXJnZXQiLCJoYW5kbGVNb2JpbGVNZW51Q2xvc2UiLCJoYW5kbGVNZW51Q2xvc2UiLCJoYW5kbGVNb2JpbGVNZW51T3BlbiIsIm1lbnVJZCIsInJlbmRlck1lbnUiLCJ2ZXJ0aWNhbCIsImhvcml6b250YWwiLCJtb2JpbGVNZW51SWQiLCJyZW5kZXJNb2JpbGVNZW51IiwiZmxleEdyb3ciLCJtciIsInhzIiwic20iLCJtZCIsImNyZWF0ZVRoZW1lIiwiVGhlbWVQcm92aWRlciIsIm1ha2VTdHlsZXMiLCJ1c2VTdHlsZXMiLCJyb290IiwiYmFja2dyb3VuZCIsIkxheW91dCIsImNoaWxkcmVuIiwiY2xhc3NlcyJdLCJzb3VyY2VSb290IjoiIn0=