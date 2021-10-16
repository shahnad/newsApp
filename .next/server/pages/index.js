(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Header)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/material/styles */ "@mui/material/styles");
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material_AppBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material/AppBar */ "@mui/material/AppBar");
/* harmony import */ var _mui_material_AppBar__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material_AppBar__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material/Box */ "@mui/material/Box");
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Box__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material/Toolbar */ "@mui/material/Toolbar");
/* harmony import */ var _mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _mui_material_IconButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/IconButton */ "@mui/material/IconButton");
/* harmony import */ var _mui_material_IconButton__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material/Typography */ "@mui/material/Typography");
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _mui_material_InputBase__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material/InputBase */ "@mui/material/InputBase");
/* harmony import */ var _mui_material_InputBase__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_mui_material_InputBase__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _mui_material_Badge__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material/Badge */ "@mui/material/Badge");
/* harmony import */ var _mui_material_Badge__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Badge__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material/MenuItem */ "@mui/material/MenuItem");
/* harmony import */ var _mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _mui_material_Menu__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/material/Menu */ "@mui/material/Menu");
/* harmony import */ var _mui_material_Menu__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Menu__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/icons-material/Menu */ "@mui/icons-material/Menu");
/* harmony import */ var _mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _mui_icons_material_Search__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @mui/icons-material/Search */ "@mui/icons-material/Search");
/* harmony import */ var _mui_icons_material_Search__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Search__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _mui_icons_material_AccountCircle__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @mui/icons-material/AccountCircle */ "@mui/icons-material/AccountCircle");
/* harmony import */ var _mui_icons_material_AccountCircle__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_AccountCircle__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _mui_icons_material_Mail__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @mui/icons-material/Mail */ "@mui/icons-material/Mail");
/* harmony import */ var _mui_icons_material_Mail__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Mail__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _mui_icons_material_Notifications__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @mui/icons-material/Notifications */ "@mui/icons-material/Notifications");
/* harmony import */ var _mui_icons_material_Notifications__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Notifications__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _mui_icons_material_MoreVert__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @mui/icons-material/MoreVert */ "@mui/icons-material/MoreVert");
/* harmony import */ var _mui_icons_material_MoreVert__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_MoreVert__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__);
var _jsxFileName = "D:\\nextjs-blog\\components\\Header.js";


















const Search = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_1__.styled)('div')(({
  theme
}) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_1__.alpha)(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_1__.alpha)(theme.palette.common.white, 0.25)
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto'
  }
}));
const SearchIconWrapper = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_1__.styled)('div')(({
  theme
}) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
}));
const StyledInputBase = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_1__.styled)((_mui_material_InputBase__WEBPACK_IMPORTED_MODULE_7___default()))(({
  theme
}) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch'
    }
  }
}));
function Header() {
  const [anchorEl, setAnchorEl] = react__WEBPACK_IMPORTED_MODULE_0__.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = react__WEBPACK_IMPORTED_MODULE_0__.useState(null);
  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = event => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';

  const renderMenu = /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxDEV)((_mui_material_Menu__WEBPACK_IMPORTED_MODULE_10___default()), {
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
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxDEV)((_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_9___default()), {
      onClick: handleMenuClose,
      children: "Profile"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxDEV)((_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_9___default()), {
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

  const mobileMenuId = 'primary-search-account-menu-mobile';

  const renderMobileMenu = /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxDEV)((_mui_material_Menu__WEBPACK_IMPORTED_MODULE_10___default()), {
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
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxDEV)((_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_9___default()), {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxDEV)((_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_5___default()), {
        size: "large",
        "aria-label": "show 4 new mails",
        color: "inherit",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxDEV)((_mui_material_Badge__WEBPACK_IMPORTED_MODULE_8___default()), {
          badgeContent: 4,
          color: "error",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxDEV)((_mui_icons_material_Mail__WEBPACK_IMPORTED_MODULE_14___default()), {}, void 0, false, {
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
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxDEV)("p", {
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
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxDEV)((_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_9___default()), {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxDEV)((_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_5___default()), {
        size: "large",
        "aria-label": "show 17 new notifications",
        color: "inherit",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxDEV)((_mui_material_Badge__WEBPACK_IMPORTED_MODULE_8___default()), {
          badgeContent: 17,
          color: "error",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxDEV)((_mui_icons_material_Notifications__WEBPACK_IMPORTED_MODULE_15___default()), {}, void 0, false, {
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
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxDEV)("p", {
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
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxDEV)((_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_9___default()), {
      onClick: handleProfileMenuOpen,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxDEV)((_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_5___default()), {
        size: "large",
        "aria-label": "account of current user",
        "aria-controls": "primary-search-account-menu",
        "aria-haspopup": "true",
        color: "inherit",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxDEV)((_mui_icons_material_AccountCircle__WEBPACK_IMPORTED_MODULE_13___default()), {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 150,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 143,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxDEV)("p", {
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

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxDEV)((_mui_material_Box__WEBPACK_IMPORTED_MODULE_3___default()), {
    sx: {
      flexGrow: 1,
      width: '100%'
    },
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxDEV)((_mui_material_AppBar__WEBPACK_IMPORTED_MODULE_2___default()), {
      position: "static",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxDEV)((_mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_4___default()), {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxDEV)((_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_5___default()), {
          size: "large",
          edge: "start",
          color: "inherit",
          "aria-label": "open drawer",
          sx: {
            mr: 2
          },
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxDEV)((_mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_11___default()), {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 168,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 161,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxDEV)((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_6___default()), {
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
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxDEV)(Search, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxDEV)(SearchIconWrapper, {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxDEV)((_mui_icons_material_Search__WEBPACK_IMPORTED_MODULE_12___default()), {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 180,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 179,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxDEV)(StyledInputBase, {
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
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxDEV)((_mui_material_Box__WEBPACK_IMPORTED_MODULE_3___default()), {
          sx: {
            flexGrow: 1
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 187,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxDEV)((_mui_material_Box__WEBPACK_IMPORTED_MODULE_3___default()), {
          sx: {
            display: {
              xs: 'none',
              md: 'flex'
            }
          },
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxDEV)((_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_5___default()), {
            size: "large",
            "aria-label": "show 4 new mails",
            color: "inherit",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxDEV)((_mui_material_Badge__WEBPACK_IMPORTED_MODULE_8___default()), {
              badgeContent: 4,
              color: "error",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxDEV)((_mui_icons_material_Mail__WEBPACK_IMPORTED_MODULE_14___default()), {}, void 0, false, {
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
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxDEV)((_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_5___default()), {
            size: "large",
            "aria-label": "show 17 new notifications",
            color: "inherit",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxDEV)((_mui_material_Badge__WEBPACK_IMPORTED_MODULE_8___default()), {
              badgeContent: 17,
              color: "error",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxDEV)((_mui_icons_material_Notifications__WEBPACK_IMPORTED_MODULE_15___default()), {}, void 0, false, {
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
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxDEV)((_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_5___default()), {
            size: "large",
            edge: "end",
            "aria-label": "account of current user",
            "aria-controls": menuId,
            "aria-haspopup": "true",
            onClick: handleProfileMenuOpen,
            color: "inherit",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxDEV)((_mui_icons_material_AccountCircle__WEBPACK_IMPORTED_MODULE_13___default()), {}, void 0, false, {
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
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxDEV)((_mui_material_Box__WEBPACK_IMPORTED_MODULE_3___default()), {
          sx: {
            display: {
              xs: 'flex',
              md: 'none'
            }
          },
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxDEV)((_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_5___default()), {
            size: "large",
            "aria-label": "show more",
            "aria-controls": mobileMenuId,
            "aria-haspopup": "true",
            onClick: handleMobileMenuOpen,
            color: "inherit",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxDEV)((_mui_icons_material_MoreVert__WEBPACK_IMPORTED_MODULE_16___default()), {}, void 0, false, {
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

/***/ }),

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Layout)
/* harmony export */ });
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @mui/material/styles */ "@mui/material/styles");
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/styles */ "@mui/styles");
/* harmony import */ var _mui_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_styles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Header */ "./components/Header.js");
/* harmony import */ var _Theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Theme */ "./components/Theme.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "D:\\nextjs-blog\\components\\Layout.js";





const useStyles = (0,_mui_styles__WEBPACK_IMPORTED_MODULE_1__.makeStyles)({
  root: {
    background: 'rgb(247,233,233)',
    background: 'linear-gradient(230deg, rgba(247,233,233,1) 0%, rgba(172,6,6,1) 100%)'
  }
});
function Layout({
  children
}) {
  const classes = useStyles();
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__.ThemeProvider, {
    theme: _Theme__WEBPACK_IMPORTED_MODULE_3__.theme,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_Header__WEBPACK_IMPORTED_MODULE_2__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
      className: classes.root,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("main", {
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

/***/ }),

/***/ "./components/Theme.js":
/*!*****************************!*\
  !*** ./components/Theme.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "theme": () => (/* binding */ theme)
/* harmony export */ });
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @mui/material/styles */ "@mui/material/styles");
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material_colors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/material/colors */ "@mui/material/colors");
/* harmony import */ var _mui_material_colors__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material_colors__WEBPACK_IMPORTED_MODULE_1__);


const theme = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__.createTheme)({
  palette: {
    primary: {
      main: '#d11f11'
    },
    secondary: {
      main: _mui_material_colors__WEBPACK_IMPORTED_MODULE_1__.green[500]
    }
  }
});

/***/ }),

/***/ "./pages/Home/MainNewsPage/index.js":
/*!******************************************!*\
  !*** ./pages/Home/MainNewsPage/index.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MainNewsPage)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/material */ "@mui/material");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-slick */ "react-slick");
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "D:\\nextjs-blog\\pages\\Home\\MainNewsPage\\index.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





function MainNewsPage() {
  const settings = {
    infinite: true,
    speed: 300,
    // slidesToShow: 1,
    // slidesToScroll: 1,
    autoplay: true,
    dots: false,
    fade: true
  };
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Card, {
    sx: {
      width: '100%'
    },
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)((react_slick__WEBPACK_IMPORTED_MODULE_2___default()), _objectSpread(_objectSpread({}, settings), {}, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.CardMedia, {
          component: "img",
          alt: "green iguana",
          height: "340",
          image: "https://mui.com/static/images/cards/contemplative-reptile.jpg"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.CardContent, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Typography, {
            gutterBottom: true,
            variant: "h5",
            component: "div",
            children: "Lizard"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 27,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Typography, {
            variant: "body2",
            color: "text.secondary",
            children: "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 30,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.CardActions, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Button, {
            size: "small",
            children: "Share"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 36,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Button, {
            size: "small",
            children: "Learn More"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 37,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.CardMedia, {
          component: "img",
          alt: "green iguana",
          height: "340",
          image: "https://images.unsplash.com/photo-1634141428581-ff1358a4a130?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=774&q=80"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.CardContent, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Typography, {
            gutterBottom: true,
            variant: "h5",
            component: "div",
            children: "Lizard"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 48,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Typography, {
            variant: "body2",
            color: "text.secondary",
            children: "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 51,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.CardActions, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Button, {
            size: "small",
            children: "Share"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 57,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Button, {
            size: "small",
            children: "Learn More"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 58,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.CardMedia, {
          component: "img",
          alt: "green iguana",
          height: "340",
          image: "https://images.unsplash.com/photo-1593642702909-dec73df255d7?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=869&q=80"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.CardContent, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Typography, {
            gutterBottom: true,
            variant: "h5",
            component: "div",
            children: "Lizard"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 69,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Typography, {
            variant: "body2",
            color: "text.secondary",
            children: "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 72,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 68,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.CardActions, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Button, {
            size: "small",
            children: "Share"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 78,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Button, {
            size: "small",
            children: "Learn More"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 79,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 77,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 17
      }, this)]
    }), void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 17,
    columnNumber: 9
  }, this);
}

/***/ }),

/***/ "./pages/Home/NewsList/index.js":
/*!**************************************!*\
  !*** ./pages/Home/NewsList/index.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ NewsListItems)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material_List__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/material/List */ "@mui/material/List");
/* harmony import */ var _mui_material_List__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material_List__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material_ListItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material/ListItem */ "@mui/material/ListItem");
/* harmony import */ var _mui_material_ListItem__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material_ListItem__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material_Divider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material/Divider */ "@mui/material/Divider");
/* harmony import */ var _mui_material_Divider__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Divider__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_material_ListItemText__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material/ListItemText */ "@mui/material/ListItemText");
/* harmony import */ var _mui_material_ListItemText__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material_ListItemText__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _mui_material_ListItemAvatar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/ListItemAvatar */ "@mui/material/ListItemAvatar");
/* harmony import */ var _mui_material_ListItemAvatar__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_material_ListItemAvatar__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _mui_material_Avatar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material/Avatar */ "@mui/material/Avatar");
/* harmony import */ var _mui_material_Avatar__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Avatar__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material/Typography */ "@mui/material/Typography");
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__);
var _jsxFileName = "D:\\nextjs-blog\\pages\\Home\\NewsList\\index.js";










function NewsListItems() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_7___default()), {
      gutterBottom: true,
      variant: "h5",
      component: "div",
      children: "Main Headlines"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)((_mui_material_List__WEBPACK_IMPORTED_MODULE_1___default()), {
      sx: {
        width: '100%',
        maxHeight: 420,
        overflow: 'auto',
        bgcolor: 'background.paper'
      },
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)((_mui_material_ListItem__WEBPACK_IMPORTED_MODULE_2___default()), {
        alignItems: "flex-start",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)((_mui_material_ListItemAvatar__WEBPACK_IMPORTED_MODULE_5___default()), {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)((_mui_material_Avatar__WEBPACK_IMPORTED_MODULE_6___default()), {
            alt: "Remy Sharp",
            src: "https://mui.com/static/images/avatar/1.jpg"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 19,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)((_mui_material_ListItemText__WEBPACK_IMPORTED_MODULE_4___default()), {
          primary: "Brunch this weekend?",
          secondary: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_7___default()), {
              sx: {
                display: 'inline'
              },
              component: "span",
              variant: "body2",
              color: "text.primary",
              children: "Ali Connors"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 25,
              columnNumber: 33
            }, this), " — I'll be in your neighborhood doing errands this…"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 24,
            columnNumber: 29
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)((_mui_material_Divider__WEBPACK_IMPORTED_MODULE_3___default()), {
        variant: "inset",
        component: "li"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)((_mui_material_ListItem__WEBPACK_IMPORTED_MODULE_2___default()), {
        alignItems: "flex-start",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)((_mui_material_ListItemAvatar__WEBPACK_IMPORTED_MODULE_5___default()), {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)((_mui_material_Avatar__WEBPACK_IMPORTED_MODULE_6___default()), {
            alt: "Travis Howard",
            src: "https://mui.com/static/images/avatar/2.jpg"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 41,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)((_mui_material_ListItemText__WEBPACK_IMPORTED_MODULE_4___default()), {
          primary: "Summer BBQ",
          secondary: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_7___default()), {
              sx: {
                display: 'inline'
              },
              component: "span",
              variant: "body2",
              color: "text.primary",
              children: "to Scott, Alex, Jennifer"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 47,
              columnNumber: 33
            }, this), " — Wish I could come, but I'm out of town this…"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 46,
            columnNumber: 29
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)((_mui_material_Divider__WEBPACK_IMPORTED_MODULE_3___default()), {
        variant: "inset",
        component: "li"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)((_mui_material_ListItem__WEBPACK_IMPORTED_MODULE_2___default()), {
        alignItems: "flex-start",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)((_mui_material_ListItemAvatar__WEBPACK_IMPORTED_MODULE_5___default()), {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)((_mui_material_Avatar__WEBPACK_IMPORTED_MODULE_6___default()), {
            alt: "Cindy Baker",
            src: "https://mui.com/static/images/avatar/3.jpg"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 63,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)((_mui_material_ListItemText__WEBPACK_IMPORTED_MODULE_4___default()), {
          primary: "Oui Oui",
          secondary: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_7___default()), {
              sx: {
                display: 'inline'
              },
              component: "span",
              variant: "body2",
              color: "text.primary",
              children: "Sandra Adams"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 69,
              columnNumber: 33
            }, this), ' — Do you have Paris recommendations? Have you ever…']
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 68,
            columnNumber: 29
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)((_mui_material_ListItem__WEBPACK_IMPORTED_MODULE_2___default()), {
        alignItems: "flex-start",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)((_mui_material_ListItemAvatar__WEBPACK_IMPORTED_MODULE_5___default()), {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)((_mui_material_Avatar__WEBPACK_IMPORTED_MODULE_6___default()), {
            alt: "Remy Sharp",
            src: "https://mui.com/static/images/avatar/1.jpg"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 84,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 83,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)((_mui_material_ListItemText__WEBPACK_IMPORTED_MODULE_4___default()), {
          primary: "Brunch this weekend?",
          secondary: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_7___default()), {
              sx: {
                display: 'inline'
              },
              component: "span",
              variant: "body2",
              color: "text.primary",
              children: "Ali Connors"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 90,
              columnNumber: 33
            }, this), " — I'll be in your neighborhood doing errands this…"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 89,
            columnNumber: 29
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 86,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)((_mui_material_Divider__WEBPACK_IMPORTED_MODULE_3___default()), {
        variant: "inset",
        component: "li"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 103,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)((_mui_material_ListItem__WEBPACK_IMPORTED_MODULE_2___default()), {
        alignItems: "flex-start",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)((_mui_material_ListItemAvatar__WEBPACK_IMPORTED_MODULE_5___default()), {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)((_mui_material_Avatar__WEBPACK_IMPORTED_MODULE_6___default()), {
            alt: "Remy Sharp",
            src: "https://mui.com/static/images/avatar/1.jpg"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 106,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 105,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)((_mui_material_ListItemText__WEBPACK_IMPORTED_MODULE_4___default()), {
          primary: "Brunch this weekend?",
          secondary: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_7___default()), {
              sx: {
                display: 'inline'
              },
              component: "span",
              variant: "body2",
              color: "text.primary",
              children: "Ali Connors"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 112,
              columnNumber: 33
            }, this), " — I'll be in your neighborhood doing errands this…"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 111,
            columnNumber: 29
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 108,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 104,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)((_mui_material_Divider__WEBPACK_IMPORTED_MODULE_3___default()), {
        variant: "inset",
        component: "li"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 125,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 13
    }, this)]
  }, void 0, true);
}

/***/ }),

/***/ "./pages/Home/NewsTabs/index.js":
/*!**************************************!*\
  !*** ./pages/Home/NewsTabs/index.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ NewsTabs)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material_Tabs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material/Tabs */ "@mui/material/Tabs");
/* harmony import */ var _mui_material_Tabs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Tabs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material_Tab__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material/Tab */ "@mui/material/Tab");
/* harmony import */ var _mui_material_Tab__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Tab__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material/Typography */ "@mui/material/Typography");
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/Box */ "@mui/material/Box");
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Box__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);
const _excluded = ["children", "value", "index"];
var _jsxFileName = "D:\\nextjs-blog\\pages\\Home\\NewsTabs\\index.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }









function TabPanel(props) {
  const {
    children,
    value,
    index
  } = props,
        other = _objectWithoutProperties(props, _excluded);

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", _objectSpread(_objectSpread({
    role: "tabpanel",
    hidden: value !== index,
    id: `vertical-tabpanel-${index}`,
    "aria-labelledby": `vertical-tab-${index}`
  }, other), {}, {
    children: value === index && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)((_mui_material_Box__WEBPACK_IMPORTED_MODULE_5___default()), {
      sx: {
        p: 3
      },
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_4___default()), {
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

TabPanel.propTypes = {
  children: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().node),
  index: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number.isRequired),
  value: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number.isRequired)
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`
  };
}

function NewsTabs() {
  const [value, setValue] = react__WEBPACK_IMPORTED_MODULE_0__.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)((_mui_material_Box__WEBPACK_IMPORTED_MODULE_5___default()), {
    sx: {
      flexGrow: 1,
      bgcolor: 'background.paper',
      display: 'flex',
      height: 'fit-content',
      marginBottom: 10
    },
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)((_mui_material_Tabs__WEBPACK_IMPORTED_MODULE_2___default()), {
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
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)((_mui_material_Tab__WEBPACK_IMPORTED_MODULE_3___default()), _objectSpread({
        label: "Item One"
      }, a11yProps(0)), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)((_mui_material_Tab__WEBPACK_IMPORTED_MODULE_3___default()), _objectSpread({
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
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(TabPanel, {
      value: value,
      index: 0,
      children: "Item One"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(TabPanel, {
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

/***/ }),

/***/ "./pages/Home/index.js":
/*!*****************************!*\
  !*** ./pages/Home/index.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Home)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/material */ "@mui/material");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _MainNewsPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MainNewsPage */ "./pages/Home/MainNewsPage/index.js");
/* harmony import */ var _NewsList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./NewsList */ "./pages/Home/NewsList/index.js");
/* harmony import */ var _NewsTabs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./NewsTabs */ "./pages/Home/NewsTabs/index.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "D:\\nextjs-blog\\pages\\Home\\index.js";






function Home() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
    sx: {
      flexGrow: 1,
      padding: 2
    },
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Grid, {
      container: true,
      spacing: 2,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Grid, {
        item: true,
        xs: 12,
        sm: 12,
        md: 8,
        lg: 8,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_MainNewsPage__WEBPACK_IMPORTED_MODULE_2__.default, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 12,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Grid, {
        item: true,
        xs: 12,
        sm: 12,
        md: 4,
        lg: 4,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_NewsList__WEBPACK_IMPORTED_MODULE_3__.default, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 15,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Grid, {
        item: true,
        xs: 12,
        sm: 12,
        md: 12,
        lg: 12,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_NewsTabs__WEBPACK_IMPORTED_MODULE_4__.default, {}, void 0, false, {
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

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Index)
/* harmony export */ });
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var _Home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Home */ "./pages/Home/index.js");
/* harmony import */ var _node_modules_slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/slick-carousel/slick/slick.css */ "./node_modules/slick-carousel/slick/slick.css");
/* harmony import */ var _node_modules_slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../node_modules/slick-carousel/slick/slick-theme.css */ "./node_modules/slick-carousel/slick/slick-theme.css");
/* harmony import */ var _node_modules_slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "D:\\nextjs-blog\\pages\\index.js";





function Index() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_0__.default, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_Home__WEBPACK_IMPORTED_MODULE_1__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./node_modules/slick-carousel/slick/slick-theme.css":
/*!***********************************************************!*\
  !*** ./node_modules/slick-carousel/slick/slick-theme.css ***!
  \***********************************************************/
/***/ (() => {



/***/ }),

/***/ "./node_modules/slick-carousel/slick/slick.css":
/*!*****************************************************!*\
  !*** ./node_modules/slick-carousel/slick/slick.css ***!
  \*****************************************************/
/***/ (() => {



/***/ }),

/***/ "@mui/icons-material/AccountCircle":
/*!****************************************************!*\
  !*** external "@mui/icons-material/AccountCircle" ***!
  \****************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/icons-material/AccountCircle");

/***/ }),

/***/ "@mui/icons-material/Mail":
/*!*******************************************!*\
  !*** external "@mui/icons-material/Mail" ***!
  \*******************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/icons-material/Mail");

/***/ }),

/***/ "@mui/icons-material/Menu":
/*!*******************************************!*\
  !*** external "@mui/icons-material/Menu" ***!
  \*******************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/icons-material/Menu");

/***/ }),

/***/ "@mui/icons-material/MoreVert":
/*!***********************************************!*\
  !*** external "@mui/icons-material/MoreVert" ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/icons-material/MoreVert");

/***/ }),

/***/ "@mui/icons-material/Notifications":
/*!****************************************************!*\
  !*** external "@mui/icons-material/Notifications" ***!
  \****************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/icons-material/Notifications");

/***/ }),

/***/ "@mui/icons-material/Search":
/*!*********************************************!*\
  !*** external "@mui/icons-material/Search" ***!
  \*********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/icons-material/Search");

/***/ }),

/***/ "@mui/material":
/*!********************************!*\
  !*** external "@mui/material" ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material");

/***/ }),

/***/ "@mui/material/AppBar":
/*!***************************************!*\
  !*** external "@mui/material/AppBar" ***!
  \***************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/AppBar");

/***/ }),

/***/ "@mui/material/Avatar":
/*!***************************************!*\
  !*** external "@mui/material/Avatar" ***!
  \***************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/Avatar");

/***/ }),

/***/ "@mui/material/Badge":
/*!**************************************!*\
  !*** external "@mui/material/Badge" ***!
  \**************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/Badge");

/***/ }),

/***/ "@mui/material/Box":
/*!************************************!*\
  !*** external "@mui/material/Box" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/Box");

/***/ }),

/***/ "@mui/material/Divider":
/*!****************************************!*\
  !*** external "@mui/material/Divider" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/Divider");

/***/ }),

/***/ "@mui/material/IconButton":
/*!*******************************************!*\
  !*** external "@mui/material/IconButton" ***!
  \*******************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/IconButton");

/***/ }),

/***/ "@mui/material/InputBase":
/*!******************************************!*\
  !*** external "@mui/material/InputBase" ***!
  \******************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/InputBase");

/***/ }),

/***/ "@mui/material/List":
/*!*************************************!*\
  !*** external "@mui/material/List" ***!
  \*************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/List");

/***/ }),

/***/ "@mui/material/ListItem":
/*!*****************************************!*\
  !*** external "@mui/material/ListItem" ***!
  \*****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/ListItem");

/***/ }),

/***/ "@mui/material/ListItemAvatar":
/*!***********************************************!*\
  !*** external "@mui/material/ListItemAvatar" ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/ListItemAvatar");

/***/ }),

/***/ "@mui/material/ListItemText":
/*!*********************************************!*\
  !*** external "@mui/material/ListItemText" ***!
  \*********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/ListItemText");

/***/ }),

/***/ "@mui/material/Menu":
/*!*************************************!*\
  !*** external "@mui/material/Menu" ***!
  \*************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/Menu");

/***/ }),

/***/ "@mui/material/MenuItem":
/*!*****************************************!*\
  !*** external "@mui/material/MenuItem" ***!
  \*****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/MenuItem");

/***/ }),

/***/ "@mui/material/Tab":
/*!************************************!*\
  !*** external "@mui/material/Tab" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/Tab");

/***/ }),

/***/ "@mui/material/Tabs":
/*!*************************************!*\
  !*** external "@mui/material/Tabs" ***!
  \*************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/Tabs");

/***/ }),

/***/ "@mui/material/Toolbar":
/*!****************************************!*\
  !*** external "@mui/material/Toolbar" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/Toolbar");

/***/ }),

/***/ "@mui/material/Typography":
/*!*******************************************!*\
  !*** external "@mui/material/Typography" ***!
  \*******************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/Typography");

/***/ }),

/***/ "@mui/material/colors":
/*!***************************************!*\
  !*** external "@mui/material/colors" ***!
  \***************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/colors");

/***/ }),

/***/ "@mui/material/styles":
/*!***************************************!*\
  !*** external "@mui/material/styles" ***!
  \***************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/styles");

/***/ }),

/***/ "@mui/styles":
/*!******************************!*\
  !*** external "@mui/styles" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/styles");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/***/ ((module) => {

"use strict";
module.exports = require("prop-types");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-slick":
/*!******************************!*\
  !*** external "react-slick" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-slick");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9sZWFybi1zdGFydGVyLy4vY29tcG9uZW50cy9IZWFkZXIuanMiLCJ3ZWJwYWNrOi8vbGVhcm4tc3RhcnRlci8uL2NvbXBvbmVudHMvTGF5b3V0LmpzIiwid2VicGFjazovL2xlYXJuLXN0YXJ0ZXIvLi9jb21wb25lbnRzL1RoZW1lLmpzIiwid2VicGFjazovL2xlYXJuLXN0YXJ0ZXIvLi9wYWdlcy9Ib21lL01haW5OZXdzUGFnZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9sZWFybi1zdGFydGVyLy4vcGFnZXMvSG9tZS9OZXdzTGlzdC9pbmRleC5qcyIsIndlYnBhY2s6Ly9sZWFybi1zdGFydGVyLy4vcGFnZXMvSG9tZS9OZXdzVGFicy9pbmRleC5qcyIsIndlYnBhY2s6Ly9sZWFybi1zdGFydGVyLy4vcGFnZXMvSG9tZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9sZWFybi1zdGFydGVyLy4vcGFnZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vbGVhcm4tc3RhcnRlci9leHRlcm5hbCBcIkBtdWkvaWNvbnMtbWF0ZXJpYWwvQWNjb3VudENpcmNsZVwiIiwid2VicGFjazovL2xlYXJuLXN0YXJ0ZXIvZXh0ZXJuYWwgXCJAbXVpL2ljb25zLW1hdGVyaWFsL01haWxcIiIsIndlYnBhY2s6Ly9sZWFybi1zdGFydGVyL2V4dGVybmFsIFwiQG11aS9pY29ucy1tYXRlcmlhbC9NZW51XCIiLCJ3ZWJwYWNrOi8vbGVhcm4tc3RhcnRlci9leHRlcm5hbCBcIkBtdWkvaWNvbnMtbWF0ZXJpYWwvTW9yZVZlcnRcIiIsIndlYnBhY2s6Ly9sZWFybi1zdGFydGVyL2V4dGVybmFsIFwiQG11aS9pY29ucy1tYXRlcmlhbC9Ob3RpZmljYXRpb25zXCIiLCJ3ZWJwYWNrOi8vbGVhcm4tc3RhcnRlci9leHRlcm5hbCBcIkBtdWkvaWNvbnMtbWF0ZXJpYWwvU2VhcmNoXCIiLCJ3ZWJwYWNrOi8vbGVhcm4tc3RhcnRlci9leHRlcm5hbCBcIkBtdWkvbWF0ZXJpYWxcIiIsIndlYnBhY2s6Ly9sZWFybi1zdGFydGVyL2V4dGVybmFsIFwiQG11aS9tYXRlcmlhbC9BcHBCYXJcIiIsIndlYnBhY2s6Ly9sZWFybi1zdGFydGVyL2V4dGVybmFsIFwiQG11aS9tYXRlcmlhbC9BdmF0YXJcIiIsIndlYnBhY2s6Ly9sZWFybi1zdGFydGVyL2V4dGVybmFsIFwiQG11aS9tYXRlcmlhbC9CYWRnZVwiIiwid2VicGFjazovL2xlYXJuLXN0YXJ0ZXIvZXh0ZXJuYWwgXCJAbXVpL21hdGVyaWFsL0JveFwiIiwid2VicGFjazovL2xlYXJuLXN0YXJ0ZXIvZXh0ZXJuYWwgXCJAbXVpL21hdGVyaWFsL0RpdmlkZXJcIiIsIndlYnBhY2s6Ly9sZWFybi1zdGFydGVyL2V4dGVybmFsIFwiQG11aS9tYXRlcmlhbC9JY29uQnV0dG9uXCIiLCJ3ZWJwYWNrOi8vbGVhcm4tc3RhcnRlci9leHRlcm5hbCBcIkBtdWkvbWF0ZXJpYWwvSW5wdXRCYXNlXCIiLCJ3ZWJwYWNrOi8vbGVhcm4tc3RhcnRlci9leHRlcm5hbCBcIkBtdWkvbWF0ZXJpYWwvTGlzdFwiIiwid2VicGFjazovL2xlYXJuLXN0YXJ0ZXIvZXh0ZXJuYWwgXCJAbXVpL21hdGVyaWFsL0xpc3RJdGVtXCIiLCJ3ZWJwYWNrOi8vbGVhcm4tc3RhcnRlci9leHRlcm5hbCBcIkBtdWkvbWF0ZXJpYWwvTGlzdEl0ZW1BdmF0YXJcIiIsIndlYnBhY2s6Ly9sZWFybi1zdGFydGVyL2V4dGVybmFsIFwiQG11aS9tYXRlcmlhbC9MaXN0SXRlbVRleHRcIiIsIndlYnBhY2s6Ly9sZWFybi1zdGFydGVyL2V4dGVybmFsIFwiQG11aS9tYXRlcmlhbC9NZW51XCIiLCJ3ZWJwYWNrOi8vbGVhcm4tc3RhcnRlci9leHRlcm5hbCBcIkBtdWkvbWF0ZXJpYWwvTWVudUl0ZW1cIiIsIndlYnBhY2s6Ly9sZWFybi1zdGFydGVyL2V4dGVybmFsIFwiQG11aS9tYXRlcmlhbC9UYWJcIiIsIndlYnBhY2s6Ly9sZWFybi1zdGFydGVyL2V4dGVybmFsIFwiQG11aS9tYXRlcmlhbC9UYWJzXCIiLCJ3ZWJwYWNrOi8vbGVhcm4tc3RhcnRlci9leHRlcm5hbCBcIkBtdWkvbWF0ZXJpYWwvVG9vbGJhclwiIiwid2VicGFjazovL2xlYXJuLXN0YXJ0ZXIvZXh0ZXJuYWwgXCJAbXVpL21hdGVyaWFsL1R5cG9ncmFwaHlcIiIsIndlYnBhY2s6Ly9sZWFybi1zdGFydGVyL2V4dGVybmFsIFwiQG11aS9tYXRlcmlhbC9jb2xvcnNcIiIsIndlYnBhY2s6Ly9sZWFybi1zdGFydGVyL2V4dGVybmFsIFwiQG11aS9tYXRlcmlhbC9zdHlsZXNcIiIsIndlYnBhY2s6Ly9sZWFybi1zdGFydGVyL2V4dGVybmFsIFwiQG11aS9zdHlsZXNcIiIsIndlYnBhY2s6Ly9sZWFybi1zdGFydGVyL2V4dGVybmFsIFwicHJvcC10eXBlc1wiIiwid2VicGFjazovL2xlYXJuLXN0YXJ0ZXIvZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL2xlYXJuLXN0YXJ0ZXIvZXh0ZXJuYWwgXCJyZWFjdC1zbGlja1wiIiwid2VicGFjazovL2xlYXJuLXN0YXJ0ZXIvZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHN0eWxlZCwgYWxwaGEgfSBmcm9tICdAbXVpL21hdGVyaWFsL3N0eWxlcyc7XHJcbmltcG9ydCBBcHBCYXIgZnJvbSAnQG11aS9tYXRlcmlhbC9BcHBCYXInO1xyXG5pbXBvcnQgQm94IGZyb20gJ0BtdWkvbWF0ZXJpYWwvQm94JztcclxuaW1wb3J0IFRvb2xiYXIgZnJvbSAnQG11aS9tYXRlcmlhbC9Ub29sYmFyJztcclxuaW1wb3J0IEljb25CdXR0b24gZnJvbSAnQG11aS9tYXRlcmlhbC9JY29uQnV0dG9uJztcclxuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnQG11aS9tYXRlcmlhbC9UeXBvZ3JhcGh5JztcclxuaW1wb3J0IElucHV0QmFzZSBmcm9tICdAbXVpL21hdGVyaWFsL0lucHV0QmFzZSc7XHJcbmltcG9ydCBCYWRnZSBmcm9tICdAbXVpL21hdGVyaWFsL0JhZGdlJztcclxuaW1wb3J0IE1lbnVJdGVtIGZyb20gJ0BtdWkvbWF0ZXJpYWwvTWVudUl0ZW0nO1xyXG5pbXBvcnQgTWVudSBmcm9tICdAbXVpL21hdGVyaWFsL01lbnUnO1xyXG5pbXBvcnQgTWVudUljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9NZW51JztcclxuaW1wb3J0IFNlYXJjaEljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9TZWFyY2gnO1xyXG5pbXBvcnQgQWNjb3VudENpcmNsZSBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL0FjY291bnRDaXJjbGUnO1xyXG5pbXBvcnQgTWFpbEljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9NYWlsJztcclxuaW1wb3J0IE5vdGlmaWNhdGlvbnNJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvTm90aWZpY2F0aW9ucyc7XHJcbmltcG9ydCBNb3JlSWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL01vcmVWZXJ0JztcclxuXHJcbmNvbnN0IFNlYXJjaCA9IHN0eWxlZCgnZGl2JykoKHsgdGhlbWUgfSkgPT4gKHtcclxuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxyXG4gICAgYm9yZGVyUmFkaXVzOiB0aGVtZS5zaGFwZS5ib3JkZXJSYWRpdXMsXHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IGFscGhhKHRoZW1lLnBhbGV0dGUuY29tbW9uLndoaXRlLCAwLjE1KSxcclxuICAgICcmOmhvdmVyJzoge1xyXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogYWxwaGEodGhlbWUucGFsZXR0ZS5jb21tb24ud2hpdGUsIDAuMjUpLFxyXG4gICAgfSxcclxuICAgIG1hcmdpblJpZ2h0OiB0aGVtZS5zcGFjaW5nKDIpLFxyXG4gICAgbWFyZ2luTGVmdDogMCxcclxuICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMudXAoJ3NtJyldOiB7XHJcbiAgICAgICAgbWFyZ2luTGVmdDogdGhlbWUuc3BhY2luZygzKSxcclxuICAgICAgICB3aWR0aDogJ2F1dG8nLFxyXG4gICAgfSxcclxufSkpO1xyXG5cclxuY29uc3QgU2VhcmNoSWNvbldyYXBwZXIgPSBzdHlsZWQoJ2RpdicpKCh7IHRoZW1lIH0pID0+ICh7XHJcbiAgICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDAsIDIpLFxyXG4gICAgaGVpZ2h0OiAnMTAwJScsXHJcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICAgIHBvaW50ZXJFdmVudHM6ICdub25lJyxcclxuICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxyXG59KSk7XHJcblxyXG5jb25zdCBTdHlsZWRJbnB1dEJhc2UgPSBzdHlsZWQoSW5wdXRCYXNlKSgoeyB0aGVtZSB9KSA9PiAoe1xyXG4gICAgY29sb3I6ICdpbmhlcml0JyxcclxuICAgICcmIC5NdWlJbnB1dEJhc2UtaW5wdXQnOiB7XHJcbiAgICAgICAgcGFkZGluZzogdGhlbWUuc3BhY2luZygxLCAxLCAxLCAwKSxcclxuICAgICAgICAvLyB2ZXJ0aWNhbCBwYWRkaW5nICsgZm9udCBzaXplIGZyb20gc2VhcmNoSWNvblxyXG4gICAgICAgIHBhZGRpbmdMZWZ0OiBgY2FsYygxZW0gKyAke3RoZW1lLnNwYWNpbmcoNCl9KWAsXHJcbiAgICAgICAgdHJhbnNpdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuY3JlYXRlKCd3aWR0aCcpLFxyXG4gICAgICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICAgICAgW3RoZW1lLmJyZWFrcG9pbnRzLnVwKCdtZCcpXToge1xyXG4gICAgICAgICAgICB3aWR0aDogJzIwY2gnLFxyXG4gICAgICAgIH0sXHJcbiAgICB9LFxyXG59KSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIZWFkZXIoKSB7XHJcbiAgICBjb25zdCBbYW5jaG9yRWwsIHNldEFuY2hvckVsXSA9IFJlYWN0LnVzZVN0YXRlKG51bGwpO1xyXG4gICAgY29uc3QgW21vYmlsZU1vcmVBbmNob3JFbCwgc2V0TW9iaWxlTW9yZUFuY2hvckVsXSA9IFJlYWN0LnVzZVN0YXRlKG51bGwpO1xyXG5cclxuICAgIGNvbnN0IGlzTWVudU9wZW4gPSBCb29sZWFuKGFuY2hvckVsKTtcclxuICAgIGNvbnN0IGlzTW9iaWxlTWVudU9wZW4gPSBCb29sZWFuKG1vYmlsZU1vcmVBbmNob3JFbCk7XHJcblxyXG4gICAgY29uc3QgaGFuZGxlUHJvZmlsZU1lbnVPcGVuID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgc2V0QW5jaG9yRWwoZXZlbnQuY3VycmVudFRhcmdldCk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZU1vYmlsZU1lbnVDbG9zZSA9ICgpID0+IHtcclxuICAgICAgICBzZXRNb2JpbGVNb3JlQW5jaG9yRWwobnVsbCk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZU1lbnVDbG9zZSA9ICgpID0+IHtcclxuICAgICAgICBzZXRBbmNob3JFbChudWxsKTtcclxuICAgICAgICBoYW5kbGVNb2JpbGVNZW51Q2xvc2UoKTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgaGFuZGxlTW9iaWxlTWVudU9wZW4gPSAoZXZlbnQpID0+IHtcclxuICAgICAgICBzZXRNb2JpbGVNb3JlQW5jaG9yRWwoZXZlbnQuY3VycmVudFRhcmdldCk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IG1lbnVJZCA9ICdwcmltYXJ5LXNlYXJjaC1hY2NvdW50LW1lbnUnO1xyXG4gICAgY29uc3QgcmVuZGVyTWVudSA9IChcclxuICAgICAgICA8TWVudVxyXG4gICAgICAgICAgICBhbmNob3JFbD17YW5jaG9yRWx9XHJcbiAgICAgICAgICAgIGFuY2hvck9yaWdpbj17e1xyXG4gICAgICAgICAgICAgICAgdmVydGljYWw6ICd0b3AnLFxyXG4gICAgICAgICAgICAgICAgaG9yaXpvbnRhbDogJ3JpZ2h0JyxcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgaWQ9e21lbnVJZH1cclxuICAgICAgICAgICAga2VlcE1vdW50ZWRcclxuICAgICAgICAgICAgdHJhbnNmb3JtT3JpZ2luPXt7XHJcbiAgICAgICAgICAgICAgICB2ZXJ0aWNhbDogJ3RvcCcsXHJcbiAgICAgICAgICAgICAgICBob3Jpem9udGFsOiAncmlnaHQnLFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICBvcGVuPXtpc01lbnVPcGVufVxyXG4gICAgICAgICAgICBvbkNsb3NlPXtoYW5kbGVNZW51Q2xvc2V9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgICA8TWVudUl0ZW0gb25DbGljaz17aGFuZGxlTWVudUNsb3NlfT5Qcm9maWxlPC9NZW51SXRlbT5cclxuICAgICAgICAgICAgPE1lbnVJdGVtIG9uQ2xpY2s9e2hhbmRsZU1lbnVDbG9zZX0+TXkgYWNjb3VudDwvTWVudUl0ZW0+XHJcbiAgICAgICAgPC9NZW51PlxyXG4gICAgKTtcclxuXHJcbiAgICBjb25zdCBtb2JpbGVNZW51SWQgPSAncHJpbWFyeS1zZWFyY2gtYWNjb3VudC1tZW51LW1vYmlsZSc7XHJcbiAgICBjb25zdCByZW5kZXJNb2JpbGVNZW51ID0gKFxyXG4gICAgICAgIDxNZW51XHJcbiAgICAgICAgICAgIGFuY2hvckVsPXttb2JpbGVNb3JlQW5jaG9yRWx9XHJcbiAgICAgICAgICAgIGFuY2hvck9yaWdpbj17e1xyXG4gICAgICAgICAgICAgICAgdmVydGljYWw6ICd0b3AnLFxyXG4gICAgICAgICAgICAgICAgaG9yaXpvbnRhbDogJ3JpZ2h0JyxcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgaWQ9e21vYmlsZU1lbnVJZH1cclxuICAgICAgICAgICAga2VlcE1vdW50ZWRcclxuICAgICAgICAgICAgdHJhbnNmb3JtT3JpZ2luPXt7XHJcbiAgICAgICAgICAgICAgICB2ZXJ0aWNhbDogJ3RvcCcsXHJcbiAgICAgICAgICAgICAgICBob3Jpem9udGFsOiAncmlnaHQnLFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICBvcGVuPXtpc01vYmlsZU1lbnVPcGVufVxyXG4gICAgICAgICAgICBvbkNsb3NlPXtoYW5kbGVNb2JpbGVNZW51Q2xvc2V9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgICA8TWVudUl0ZW0+XHJcbiAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvbiBzaXplPVwibGFyZ2VcIiBhcmlhLWxhYmVsPVwic2hvdyA0IG5ldyBtYWlsc1wiIGNvbG9yPVwiaW5oZXJpdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxCYWRnZSBiYWRnZUNvbnRlbnQ9ezR9IGNvbG9yPVwiZXJyb3JcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPE1haWxJY29uIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9CYWRnZT5cclxuICAgICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxwPk1lc3NhZ2VzPC9wPlxyXG4gICAgICAgICAgICA8L01lbnVJdGVtPlxyXG4gICAgICAgICAgICA8TWVudUl0ZW0+XHJcbiAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgIHNpemU9XCJsYXJnZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cInNob3cgMTcgbmV3IG5vdGlmaWNhdGlvbnNcIlxyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yPVwiaW5oZXJpdFwiXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJhZGdlIGJhZGdlQ29udGVudD17MTd9IGNvbG9yPVwiZXJyb3JcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPE5vdGlmaWNhdGlvbnNJY29uIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9CYWRnZT5cclxuICAgICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxwPk5vdGlmaWNhdGlvbnM8L3A+XHJcbiAgICAgICAgICAgIDwvTWVudUl0ZW0+XHJcbiAgICAgICAgICAgIDxNZW51SXRlbSBvbkNsaWNrPXtoYW5kbGVQcm9maWxlTWVudU9wZW59PlxyXG4gICAgICAgICAgICAgICAgPEljb25CdXR0b25cclxuICAgICAgICAgICAgICAgICAgICBzaXplPVwibGFyZ2VcIlxyXG4gICAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJhY2NvdW50IG9mIGN1cnJlbnQgdXNlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgYXJpYS1jb250cm9scz1cInByaW1hcnktc2VhcmNoLWFjY291bnQtbWVudVwiXHJcbiAgICAgICAgICAgICAgICAgICAgYXJpYS1oYXNwb3B1cD1cInRydWVcIlxyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yPVwiaW5oZXJpdFwiXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPEFjY291bnRDaXJjbGUgLz5cclxuICAgICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxwPlByb2ZpbGU8L3A+XHJcbiAgICAgICAgICAgIDwvTWVudUl0ZW0+XHJcbiAgICAgICAgPC9NZW51PlxyXG4gICAgKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxCb3ggc3g9e3sgZmxleEdyb3c6IDEsIHdpZHRoOiAnMTAwJScgfX0+XHJcbiAgICAgICAgICAgIDxBcHBCYXIgcG9zaXRpb249XCJzdGF0aWNcIj5cclxuICAgICAgICAgICAgICAgIDxUb29sYmFyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJsYXJnZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVkZ2U9XCJzdGFydFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVwiaW5oZXJpdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJvcGVuIGRyYXdlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN4PXt7IG1yOiAyIH19XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TWVudUljb24gLz5cclxuICAgICAgICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHlcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cImg2XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgbm9XcmFwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cImRpdlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN4PXt7IGRpc3BsYXk6IHsgeHM6ICdub25lJywgc206ICdibG9jaycgfSB9fVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgTVVJXHJcbiAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgIDxTZWFyY2g+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxTZWFyY2hJY29uV3JhcHBlcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTZWFyY2hJY29uIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvU2VhcmNoSWNvbldyYXBwZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxTdHlsZWRJbnB1dEJhc2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2VhcmNo4oCmXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0UHJvcHM9e3sgJ2FyaWEtbGFiZWwnOiAnc2VhcmNoJyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvU2VhcmNoPlxyXG4gICAgICAgICAgICAgICAgICAgIDxCb3ggc3g9e3sgZmxleEdyb3c6IDEgfX0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8Qm94IHN4PXt7IGRpc3BsYXk6IHsgeHM6ICdub25lJywgbWQ6ICdmbGV4JyB9IH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvbiBzaXplPVwibGFyZ2VcIiBhcmlhLWxhYmVsPVwic2hvdyA0IG5ldyBtYWlsc1wiIGNvbG9yPVwiaW5oZXJpdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJhZGdlIGJhZGdlQ29udGVudD17NH0gY29sb3I9XCJlcnJvclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNYWlsSWNvbiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CYWRnZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cImxhcmdlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJzaG93IDE3IG5ldyBub3RpZmljYXRpb25zXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVwiaW5oZXJpdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCYWRnZSBiYWRnZUNvbnRlbnQ9ezE3fSBjb2xvcj1cImVycm9yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5vdGlmaWNhdGlvbnNJY29uIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0JhZGdlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwibGFyZ2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWRnZT1cImVuZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwiYWNjb3VudCBvZiBjdXJyZW50IHVzZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1jb250cm9scz17bWVudUlkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1oYXNwb3B1cD1cInRydWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlUHJvZmlsZU1lbnVPcGVufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJpbmhlcml0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFjY291bnRDaXJjbGUgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICAgICAgICAgIDxCb3ggc3g9e3sgZGlzcGxheTogeyB4czogJ2ZsZXgnLCBtZDogJ25vbmUnIH0gfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwibGFyZ2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cInNob3cgbW9yZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWNvbnRyb2xzPXttb2JpbGVNZW51SWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWhhc3BvcHVwPVwidHJ1ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVNb2JpbGVNZW51T3Blbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVwiaW5oZXJpdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNb3JlSWNvbiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgICAgICA8L1Rvb2xiYXI+XHJcbiAgICAgICAgICAgIDwvQXBwQmFyPlxyXG4gICAgICAgICAgICB7cmVuZGVyTW9iaWxlTWVudX1cclxuICAgICAgICAgICAge3JlbmRlck1lbnV9XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICApO1xyXG59XHJcbiIsImltcG9ydCB7IGNyZWF0ZVRoZW1lLCBUaGVtZVByb3ZpZGVyIH0gZnJvbSAnQG11aS9tYXRlcmlhbC9zdHlsZXMnO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG11aS9zdHlsZXMnO1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gXCIuL0hlYWRlclwiO1xyXG5pbXBvcnQgeyB0aGVtZSB9IGZyb20gXCIuL1RoZW1lXCI7XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHtcclxuICAgIHJvb3Q6IHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAncmdiKDI0NywyMzMsMjMzKScsXHJcbiAgICAgICAgYmFja2dyb3VuZDogJ2xpbmVhci1ncmFkaWVudCgyMzBkZWcsIHJnYmEoMjQ3LDIzMywyMzMsMSkgMCUsIHJnYmEoMTcyLDYsNiwxKSAxMDAlKSdcclxuICAgIH0sXHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTGF5b3V0KHsgY2hpbGRyZW4gfSkge1xyXG4gICAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8VGhlbWVQcm92aWRlciB0aGVtZT17dGhlbWV9PlxyXG4gICAgICAgICAgICA8SGVhZGVyIC8+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9PlxyXG4gICAgICAgICAgICAgICAgPG1haW4+e2NoaWxkcmVufTwvbWFpbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9UaGVtZVByb3ZpZGVyPlxyXG4gICAgKVxyXG59IiwiaW1wb3J0IHsgY3JlYXRlVGhlbWUgfSBmcm9tICdAbXVpL21hdGVyaWFsL3N0eWxlcyc7XHJcbmltcG9ydCB7IGdyZWVuLCBwdXJwbGUgfSBmcm9tICdAbXVpL21hdGVyaWFsL2NvbG9ycyc7XHJcblxyXG5leHBvcnQgY29uc3QgdGhlbWUgPSBjcmVhdGVUaGVtZSh7XHJcbiAgICBwYWxldHRlOiB7XHJcbiAgICAgICAgcHJpbWFyeToge1xyXG4gICAgICAgICAgICBtYWluOiAnI2QxMWYxMScsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBzZWNvbmRhcnk6IHtcclxuICAgICAgICAgICAgbWFpbjogZ3JlZW5bNTAwXSxcclxuICAgICAgICB9LFxyXG4gICAgfSxcclxufSk7IiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBDYXJkLCBDYXJkQWN0aW9ucywgQ2FyZENvbnRlbnQsIENhcmRNZWRpYSwgQnV0dG9uLCBUeXBvZ3JhcGh5IH0gZnJvbSAnQG11aS9tYXRlcmlhbCc7XHJcbmltcG9ydCBTbGlkZXIgZnJvbSBcInJlYWN0LXNsaWNrXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNYWluTmV3c1BhZ2UoKSB7XHJcblxyXG4gICAgY29uc3Qgc2V0dGluZ3MgPSB7XHJcbiAgICAgICAgaW5maW5pdGU6IHRydWUsXHJcbiAgICAgICAgc3BlZWQ6IDMwMCxcclxuICAgICAgICAvLyBzbGlkZXNUb1Nob3c6IDEsXHJcbiAgICAgICAgLy8gc2xpZGVzVG9TY3JvbGw6IDEsXHJcbiAgICAgICAgYXV0b3BsYXk6IHRydWUsXHJcbiAgICAgICAgZG90czogZmFsc2UsXHJcbiAgICAgICAgZmFkZTogdHJ1ZVxyXG4gICAgfTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPENhcmQgc3g9e3sgd2lkdGg6ICcxMDAlJyB9fT5cclxuICAgICAgICAgICAgPFNsaWRlciB7Li4uc2V0dGluZ3N9PlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8Q2FyZE1lZGlhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cImltZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cImdyZWVuIGlndWFuYVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjM0MFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlPVwiaHR0cHM6Ly9tdWkuY29tL3N0YXRpYy9pbWFnZXMvY2FyZHMvY29udGVtcGxhdGl2ZS1yZXB0aWxlLmpwZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8Q2FyZENvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGd1dHRlckJvdHRvbSB2YXJpYW50PVwiaDVcIiBjb21wb25lbnQ9XCJkaXZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIExpemFyZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJib2R5MlwiIGNvbG9yPVwidGV4dC5zZWNvbmRhcnlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIExpemFyZHMgYXJlIGEgd2lkZXNwcmVhZCBncm91cCBvZiBzcXVhbWF0ZSByZXB0aWxlcywgd2l0aCBvdmVyIDYsMDAwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcGVjaWVzLCByYW5naW5nIGFjcm9zcyBhbGwgY29udGluZW50cyBleGNlcHQgQW50YXJjdGljYVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9DYXJkQ29udGVudD5cclxuICAgICAgICAgICAgICAgICAgICA8Q2FyZEFjdGlvbnM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gc2l6ZT1cInNtYWxsXCI+U2hhcmU8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBzaXplPVwic21hbGxcIj5MZWFybiBNb3JlPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9DYXJkQWN0aW9ucz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8Q2FyZE1lZGlhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cImltZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cImdyZWVuIGlndWFuYVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjM0MFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlPVwiaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE2MzQxNDE0Mjg1ODEtZmYxMzU4YTRhMTMwP2l4aWQ9TW53eE1qQTNmREI4TUh4d2FHOTBieTF3WVdkbGZIeDhmR1Z1ZkRCOGZIeDgmaXhsaWI9cmItMS4yLjEmYXV0bz1mb3JtYXQmZml0PWNyb3Amdz03NzQmcT04MFwiXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8Q2FyZENvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGd1dHRlckJvdHRvbSB2YXJpYW50PVwiaDVcIiBjb21wb25lbnQ9XCJkaXZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIExpemFyZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJib2R5MlwiIGNvbG9yPVwidGV4dC5zZWNvbmRhcnlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIExpemFyZHMgYXJlIGEgd2lkZXNwcmVhZCBncm91cCBvZiBzcXVhbWF0ZSByZXB0aWxlcywgd2l0aCBvdmVyIDYsMDAwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcGVjaWVzLCByYW5naW5nIGFjcm9zcyBhbGwgY29udGluZW50cyBleGNlcHQgQW50YXJjdGljYVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9DYXJkQ29udGVudD5cclxuICAgICAgICAgICAgICAgICAgICA8Q2FyZEFjdGlvbnM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gc2l6ZT1cInNtYWxsXCI+U2hhcmU8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBzaXplPVwic21hbGxcIj5MZWFybiBNb3JlPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9DYXJkQWN0aW9ucz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8Q2FyZE1lZGlhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cImltZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cImdyZWVuIGlndWFuYVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjM0MFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlPVwiaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE1OTM2NDI3MDI5MDktZGVjNzNkZjI1NWQ3P2l4aWQ9TW53eE1qQTNmREY4TUh4d2FHOTBieTF3WVdkbGZIeDhmR1Z1ZkRCOGZIeDgmaXhsaWI9cmItMS4yLjEmYXV0bz1mb3JtYXQmZml0PWNyb3Amdz04NjkmcT04MFwiXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8Q2FyZENvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGd1dHRlckJvdHRvbSB2YXJpYW50PVwiaDVcIiBjb21wb25lbnQ9XCJkaXZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIExpemFyZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJib2R5MlwiIGNvbG9yPVwidGV4dC5zZWNvbmRhcnlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIExpemFyZHMgYXJlIGEgd2lkZXNwcmVhZCBncm91cCBvZiBzcXVhbWF0ZSByZXB0aWxlcywgd2l0aCBvdmVyIDYsMDAwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcGVjaWVzLCByYW5naW5nIGFjcm9zcyBhbGwgY29udGluZW50cyBleGNlcHQgQW50YXJjdGljYVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9DYXJkQ29udGVudD5cclxuICAgICAgICAgICAgICAgICAgICA8Q2FyZEFjdGlvbnM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gc2l6ZT1cInNtYWxsXCI+U2hhcmU8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBzaXplPVwic21hbGxcIj5MZWFybiBNb3JlPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9DYXJkQWN0aW9ucz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L1NsaWRlcj5cclxuICAgICAgICA8L0NhcmQ+XHJcbiAgICApO1xyXG59XHJcbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IExpc3QgZnJvbSAnQG11aS9tYXRlcmlhbC9MaXN0JztcclxuaW1wb3J0IExpc3RJdGVtIGZyb20gJ0BtdWkvbWF0ZXJpYWwvTGlzdEl0ZW0nO1xyXG5pbXBvcnQgRGl2aWRlciBmcm9tICdAbXVpL21hdGVyaWFsL0RpdmlkZXInO1xyXG5pbXBvcnQgTGlzdEl0ZW1UZXh0IGZyb20gJ0BtdWkvbWF0ZXJpYWwvTGlzdEl0ZW1UZXh0JztcclxuaW1wb3J0IExpc3RJdGVtQXZhdGFyIGZyb20gJ0BtdWkvbWF0ZXJpYWwvTGlzdEl0ZW1BdmF0YXInO1xyXG5pbXBvcnQgQXZhdGFyIGZyb20gJ0BtdWkvbWF0ZXJpYWwvQXZhdGFyJztcclxuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnQG11aS9tYXRlcmlhbC9UeXBvZ3JhcGh5JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE5ld3NMaXN0SXRlbXMoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGd1dHRlckJvdHRvbSB2YXJpYW50PVwiaDVcIiBjb21wb25lbnQ9XCJkaXZcIj5cclxuICAgICAgICAgICAgICAgIE1haW4gSGVhZGxpbmVzXHJcbiAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgPExpc3Qgc3g9e3sgd2lkdGg6ICcxMDAlJywgbWF4SGVpZ2h0OiA0MjAsIG92ZXJmbG93OiAnYXV0bycsIGJnY29sb3I6ICdiYWNrZ3JvdW5kLnBhcGVyJyB9fT5cclxuICAgICAgICAgICAgICAgIDxMaXN0SXRlbSBhbGlnbkl0ZW1zPVwiZmxleC1zdGFydFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbUF2YXRhcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEF2YXRhciBhbHQ9XCJSZW15IFNoYXJwXCIgc3JjPVwiaHR0cHM6Ly9tdWkuY29tL3N0YXRpYy9pbWFnZXMvYXZhdGFyLzEuanBnXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L0xpc3RJdGVtQXZhdGFyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbVRleHRcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJpbWFyeT1cIkJydW5jaCB0aGlzIHdlZWtlbmQ/XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2Vjb25kYXJ5PXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzeD17eyBkaXNwbGF5OiAnaW5saW5lJyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJzcGFuXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cImJvZHkyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJ0ZXh0LnByaW1hcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQWxpIENvbm5vcnNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1wiIOKAlCBJJ2xsIGJlIGluIHlvdXIgbmVpZ2hib3Job29kIGRvaW5nIGVycmFuZHMgdGhpc+KAplwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L0xpc3RJdGVtPlxyXG4gICAgICAgICAgICAgICAgPERpdmlkZXIgdmFyaWFudD1cImluc2V0XCIgY29tcG9uZW50PVwibGlcIiAvPlxyXG4gICAgICAgICAgICAgICAgPExpc3RJdGVtIGFsaWduSXRlbXM9XCJmbGV4LXN0YXJ0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtQXZhdGFyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QXZhdGFyIGFsdD1cIlRyYXZpcyBIb3dhcmRcIiBzcmM9XCJodHRwczovL211aS5jb20vc3RhdGljL2ltYWdlcy9hdmF0YXIvMi5qcGdcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW1BdmF0YXI+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtVGV4dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcmltYXJ5PVwiU3VtbWVyIEJCUVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlY29uZGFyeT17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3g9e3sgZGlzcGxheTogJ2lubGluZScgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PVwic3BhblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJib2R5MlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVwidGV4dC5wcmltYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvIFNjb3R0LCBBbGV4LCBKZW5uaWZlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XCIg4oCUIFdpc2ggSSBjb3VsZCBjb21lLCBidXQgSSdtIG91dCBvZiB0b3duIHRoaXPigKZcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9MaXN0SXRlbT5cclxuICAgICAgICAgICAgICAgIDxEaXZpZGVyIHZhcmlhbnQ9XCJpbnNldFwiIGNvbXBvbmVudD1cImxpXCIgLz5cclxuICAgICAgICAgICAgICAgIDxMaXN0SXRlbSBhbGlnbkl0ZW1zPVwiZmxleC1zdGFydFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbUF2YXRhcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEF2YXRhciBhbHQ9XCJDaW5keSBCYWtlclwiIHNyYz1cImh0dHBzOi8vbXVpLmNvbS9zdGF0aWMvaW1hZ2VzL2F2YXRhci8zLmpwZ1wiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaXN0SXRlbUF2YXRhcj5cclxuICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW1UZXh0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByaW1hcnk9XCJPdWkgT3VpXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2Vjb25kYXJ5PXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzeD17eyBkaXNwbGF5OiAnaW5saW5lJyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJzcGFuXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cImJvZHkyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJ0ZXh0LnByaW1hcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU2FuZHJhIEFkYW1zXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsnIOKAlCBEbyB5b3UgaGF2ZSBQYXJpcyByZWNvbW1lbmRhdGlvbnM/IEhhdmUgeW91IGV2ZXLigKYnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L0xpc3RJdGVtPlxyXG4gICAgICAgICAgICAgICAgPExpc3RJdGVtIGFsaWduSXRlbXM9XCJmbGV4LXN0YXJ0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtQXZhdGFyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QXZhdGFyIGFsdD1cIlJlbXkgU2hhcnBcIiBzcmM9XCJodHRwczovL211aS5jb20vc3RhdGljL2ltYWdlcy9hdmF0YXIvMS5qcGdcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW1BdmF0YXI+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtVGV4dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcmltYXJ5PVwiQnJ1bmNoIHRoaXMgd2Vla2VuZD9cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWNvbmRhcnk9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN4PXt7IGRpc3BsYXk6ICdpbmxpbmUnIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cInNwYW5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwiYm9keTJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cInRleHQucHJpbWFyeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBBbGkgQ29ubm9yc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XCIg4oCUIEknbGwgYmUgaW4geW91ciBuZWlnaGJvcmhvb2QgZG9pbmcgZXJyYW5kcyB0aGlz4oCmXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW0+XHJcbiAgICAgICAgICAgICAgICA8RGl2aWRlciB2YXJpYW50PVwiaW5zZXRcIiBjb21wb25lbnQ9XCJsaVwiIC8+XHJcbiAgICAgICAgICAgICAgICA8TGlzdEl0ZW0gYWxpZ25JdGVtcz1cImZsZXgtc3RhcnRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW1BdmF0YXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxBdmF0YXIgYWx0PVwiUmVteSBTaGFycFwiIHNyYz1cImh0dHBzOi8vbXVpLmNvbS9zdGF0aWMvaW1hZ2VzL2F2YXRhci8xLmpwZ1wiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaXN0SXRlbUF2YXRhcj5cclxuICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW1UZXh0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByaW1hcnk9XCJCcnVuY2ggdGhpcyB3ZWVrZW5kP1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlY29uZGFyeT17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3g9e3sgZGlzcGxheTogJ2lubGluZScgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PVwic3BhblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJib2R5MlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVwidGV4dC5wcmltYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFsaSBDb25ub3JzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcIiDigJQgSSdsbCBiZSBpbiB5b3VyIG5laWdoYm9yaG9vZCBkb2luZyBlcnJhbmRzIHRoaXPigKZcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9MaXN0SXRlbT5cclxuICAgICAgICAgICAgICAgIDxEaXZpZGVyIHZhcmlhbnQ9XCJpbnNldFwiIGNvbXBvbmVudD1cImxpXCIgLz5cclxuICAgICAgICAgICAgPC9MaXN0PlxyXG4gICAgICAgIDwvPlxyXG4gICAgKTtcclxufVxyXG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCBUYWJzIGZyb20gJ0BtdWkvbWF0ZXJpYWwvVGFicyc7XHJcbmltcG9ydCBUYWIgZnJvbSAnQG11aS9tYXRlcmlhbC9UYWInO1xyXG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICdAbXVpL21hdGVyaWFsL1R5cG9ncmFwaHknO1xyXG5pbXBvcnQgQm94IGZyb20gJ0BtdWkvbWF0ZXJpYWwvQm94JztcclxuXHJcbmZ1bmN0aW9uIFRhYlBhbmVsKHByb3BzKSB7XHJcbiAgICBjb25zdCB7IGNoaWxkcmVuLCB2YWx1ZSwgaW5kZXgsIC4uLm90aGVyIH0gPSBwcm9wcztcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgICAgcm9sZT1cInRhYnBhbmVsXCJcclxuICAgICAgICAgICAgaGlkZGVuPXt2YWx1ZSAhPT0gaW5kZXh9XHJcbiAgICAgICAgICAgIGlkPXtgdmVydGljYWwtdGFicGFuZWwtJHtpbmRleH1gfVxyXG4gICAgICAgICAgICBhcmlhLWxhYmVsbGVkYnk9e2B2ZXJ0aWNhbC10YWItJHtpbmRleH1gfVxyXG4gICAgICAgICAgICB7Li4ub3RoZXJ9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgICB7dmFsdWUgPT09IGluZGV4ICYmIChcclxuICAgICAgICAgICAgICAgIDxCb3ggc3g9e3sgcDogMyB9fT5cclxuICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeT57Y2hpbGRyZW59PC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59XHJcblxyXG5UYWJQYW5lbC5wcm9wVHlwZXMgPSB7XHJcbiAgICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXHJcbiAgICBpbmRleDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxyXG4gICAgdmFsdWU6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcclxufTtcclxuXHJcbmZ1bmN0aW9uIGExMXlQcm9wcyhpbmRleCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBpZDogYHZlcnRpY2FsLXRhYi0ke2luZGV4fWAsXHJcbiAgICAgICAgJ2FyaWEtY29udHJvbHMnOiBgdmVydGljYWwtdGFicGFuZWwtJHtpbmRleH1gLFxyXG4gICAgfTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTmV3c1RhYnMoKSB7XHJcbiAgICBjb25zdCBbdmFsdWUsIHNldFZhbHVlXSA9IFJlYWN0LnVzZVN0YXRlKDApO1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChldmVudCwgbmV3VmFsdWUpID0+IHtcclxuICAgICAgICBzZXRWYWx1ZShuZXdWYWx1ZSk7XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPEJveFxyXG4gICAgICAgICAgICBzeD17eyBmbGV4R3JvdzogMSwgYmdjb2xvcjogJ2JhY2tncm91bmQucGFwZXInLCBkaXNwbGF5OiAnZmxleCcsIGhlaWdodDogJ2ZpdC1jb250ZW50JywgbWFyZ2luQm90dG9tOiAxMCB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgICAgPFRhYnNcclxuICAgICAgICAgICAgICAgIG9yaWVudGF0aW9uPVwidmVydGljYWxcIlxyXG4gICAgICAgICAgICAgICAgdmFyaWFudD1cInNjcm9sbGFibGVcIlxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e3ZhbHVlfVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJWZXJ0aWNhbCB0YWJzIGV4YW1wbGVcIlxyXG4gICAgICAgICAgICAgICAgc3g9e3sgYm9yZGVyUmlnaHQ6IDEsIGZsZXg6ICcwIDAgMjAlJywgYm9yZGVyQ29sb3I6ICdkaXZpZGVyJyB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8VGFiIGxhYmVsPVwiSXRlbSBPbmVcIiB7Li4uYTExeVByb3BzKDApfSAvPlxyXG4gICAgICAgICAgICAgICAgPFRhYiBsYWJlbD1cIkl0ZW0gVHdvXCIgey4uLmExMXlQcm9wcygxKX0gLz5cclxuICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDwvVGFicz5cclxuICAgICAgICAgICAgPFRhYlBhbmVsIHZhbHVlPXt2YWx1ZX0gaW5kZXg9ezB9PlxyXG4gICAgICAgICAgICAgICAgSXRlbSBPbmVcclxuICAgICAgICAgICAgPC9UYWJQYW5lbD5cclxuICAgICAgICAgICAgPFRhYlBhbmVsIHZhbHVlPXt2YWx1ZX0gaW5kZXg9ezF9PlxyXG4gICAgICAgICAgICAgICAgSXRlbSBUd29cclxuICAgICAgICAgICAgPC9UYWJQYW5lbD5cclxuICAgICAgICAgIFxyXG4gICAgICAgICAgXHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICApO1xyXG59XHJcbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgQm94LCBHcmlkIH0gZnJvbSAnQG11aS9tYXRlcmlhbCc7XHJcbmltcG9ydCBNYWluTmV3c1BhZ2UgZnJvbSAnLi9NYWluTmV3c1BhZ2UnO1xyXG5pbXBvcnQgTmV3c0xpc3RJdGVtcyBmcm9tICcuL05ld3NMaXN0JztcclxuaW1wb3J0IE5ld3NUYWJzIGZyb20gJy4vTmV3c1RhYnMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPEJveCBzeD17eyBmbGV4R3JvdzogMSwgcGFkZGluZzogMiB9fT5cclxuICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezJ9PlxyXG4gICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IHNtPXsxMn0gbWQ9ezh9IGxnPXs4fT5cclxuICAgICAgICAgICAgICAgICAgICA8TWFpbk5ld3NQYWdlIC8+XHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gc209ezEyfSBtZD17NH0gbGc9ezR9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxOZXdzTGlzdEl0ZW1zIC8+XHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gc209ezEyfSBtZD17MTJ9IGxnPXsxMn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPE5ld3NUYWJzIC8+XHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICA8L0JveD5cclxuICAgICk7XHJcbn1cclxuIiwiaW1wb3J0IExheW91dCBmcm9tIFwiLi4vY29tcG9uZW50cy9MYXlvdXRcIjtcbmltcG9ydCBIb21lIGZyb20gJy4vSG9tZSdcbmltcG9ydCBcIi4uL25vZGVfbW9kdWxlcy9zbGljay1jYXJvdXNlbC9zbGljay9zbGljay5jc3NcIjtcbmltcG9ydCBcIi4uL25vZGVfbW9kdWxlcy9zbGljay1jYXJvdXNlbC9zbGljay9zbGljay10aGVtZS5jc3NcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW5kZXgoKSB7XG4gIHJldHVybiAoXG4gICAgPExheW91dD5cbiAgICAgIDxIb21lIC8+XG4gICAgPC9MYXlvdXQ+XG4gIClcbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtdWkvaWNvbnMtbWF0ZXJpYWwvQWNjb3VudENpcmNsZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbXVpL2ljb25zLW1hdGVyaWFsL01haWxcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG11aS9pY29ucy1tYXRlcmlhbC9NZW51XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtdWkvaWNvbnMtbWF0ZXJpYWwvTW9yZVZlcnRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG11aS9pY29ucy1tYXRlcmlhbC9Ob3RpZmljYXRpb25zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtdWkvaWNvbnMtbWF0ZXJpYWwvU2VhcmNoXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtdWkvbWF0ZXJpYWxcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG11aS9tYXRlcmlhbC9BcHBCYXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG11aS9tYXRlcmlhbC9BdmF0YXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG11aS9tYXRlcmlhbC9CYWRnZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbXVpL21hdGVyaWFsL0JveFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbXVpL21hdGVyaWFsL0RpdmlkZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG11aS9tYXRlcmlhbC9JY29uQnV0dG9uXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtdWkvbWF0ZXJpYWwvSW5wdXRCYXNlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtdWkvbWF0ZXJpYWwvTGlzdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbXVpL21hdGVyaWFsL0xpc3RJdGVtXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtdWkvbWF0ZXJpYWwvTGlzdEl0ZW1BdmF0YXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG11aS9tYXRlcmlhbC9MaXN0SXRlbVRleHRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG11aS9tYXRlcmlhbC9NZW51XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtdWkvbWF0ZXJpYWwvTWVudUl0ZW1cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG11aS9tYXRlcmlhbC9UYWJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG11aS9tYXRlcmlhbC9UYWJzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtdWkvbWF0ZXJpYWwvVG9vbGJhclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbXVpL21hdGVyaWFsL1R5cG9ncmFwaHlcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG11aS9tYXRlcmlhbC9jb2xvcnNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG11aS9tYXRlcmlhbC9zdHlsZXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG11aS9zdHlsZXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicHJvcC10eXBlc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1zbGlja1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7Il0sIm5hbWVzIjpbIlJlYWN0Iiwic3R5bGVkIiwiYWxwaGEiLCJBcHBCYXIiLCJCb3giLCJUb29sYmFyIiwiSWNvbkJ1dHRvbiIsIlR5cG9ncmFwaHkiLCJJbnB1dEJhc2UiLCJCYWRnZSIsIk1lbnVJdGVtIiwiTWVudSIsIk1lbnVJY29uIiwiU2VhcmNoSWNvbiIsIkFjY291bnRDaXJjbGUiLCJNYWlsSWNvbiIsIk5vdGlmaWNhdGlvbnNJY29uIiwiTW9yZUljb24iLCJTZWFyY2giLCJ0aGVtZSIsInBvc2l0aW9uIiwiYm9yZGVyUmFkaXVzIiwic2hhcGUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJwYWxldHRlIiwiY29tbW9uIiwid2hpdGUiLCJtYXJnaW5SaWdodCIsInNwYWNpbmciLCJtYXJnaW5MZWZ0Iiwid2lkdGgiLCJicmVha3BvaW50cyIsInVwIiwiU2VhcmNoSWNvbldyYXBwZXIiLCJwYWRkaW5nIiwiaGVpZ2h0IiwicG9pbnRlckV2ZW50cyIsImRpc3BsYXkiLCJhbGlnbkl0ZW1zIiwianVzdGlmeUNvbnRlbnQiLCJTdHlsZWRJbnB1dEJhc2UiLCJjb2xvciIsInBhZGRpbmdMZWZ0IiwidHJhbnNpdGlvbiIsInRyYW5zaXRpb25zIiwiY3JlYXRlIiwiSGVhZGVyIiwiYW5jaG9yRWwiLCJzZXRBbmNob3JFbCIsInVzZVN0YXRlIiwibW9iaWxlTW9yZUFuY2hvckVsIiwic2V0TW9iaWxlTW9yZUFuY2hvckVsIiwiaXNNZW51T3BlbiIsIkJvb2xlYW4iLCJpc01vYmlsZU1lbnVPcGVuIiwiaGFuZGxlUHJvZmlsZU1lbnVPcGVuIiwiZXZlbnQiLCJjdXJyZW50VGFyZ2V0IiwiaGFuZGxlTW9iaWxlTWVudUNsb3NlIiwiaGFuZGxlTWVudUNsb3NlIiwiaGFuZGxlTW9iaWxlTWVudU9wZW4iLCJtZW51SWQiLCJyZW5kZXJNZW51IiwidmVydGljYWwiLCJob3Jpem9udGFsIiwibW9iaWxlTWVudUlkIiwicmVuZGVyTW9iaWxlTWVudSIsImZsZXhHcm93IiwibXIiLCJ4cyIsInNtIiwibWQiLCJjcmVhdGVUaGVtZSIsIlRoZW1lUHJvdmlkZXIiLCJtYWtlU3R5bGVzIiwidXNlU3R5bGVzIiwicm9vdCIsImJhY2tncm91bmQiLCJMYXlvdXQiLCJjaGlsZHJlbiIsImNsYXNzZXMiLCJncmVlbiIsInB1cnBsZSIsInByaW1hcnkiLCJtYWluIiwic2Vjb25kYXJ5IiwiQ2FyZCIsIkNhcmRBY3Rpb25zIiwiQ2FyZENvbnRlbnQiLCJDYXJkTWVkaWEiLCJCdXR0b24iLCJTbGlkZXIiLCJNYWluTmV3c1BhZ2UiLCJzZXR0aW5ncyIsImluZmluaXRlIiwic3BlZWQiLCJhdXRvcGxheSIsImRvdHMiLCJmYWRlIiwiTGlzdCIsIkxpc3RJdGVtIiwiRGl2aWRlciIsIkxpc3RJdGVtVGV4dCIsIkxpc3RJdGVtQXZhdGFyIiwiQXZhdGFyIiwiTmV3c0xpc3RJdGVtcyIsIm1heEhlaWdodCIsIm92ZXJmbG93IiwiYmdjb2xvciIsIlByb3BUeXBlcyIsIlRhYnMiLCJUYWIiLCJUYWJQYW5lbCIsInByb3BzIiwidmFsdWUiLCJpbmRleCIsIm90aGVyIiwicCIsInByb3BUeXBlcyIsIm5vZGUiLCJudW1iZXIiLCJpc1JlcXVpcmVkIiwiYTExeVByb3BzIiwiaWQiLCJOZXdzVGFicyIsInNldFZhbHVlIiwiaGFuZGxlQ2hhbmdlIiwibmV3VmFsdWUiLCJtYXJnaW5Cb3R0b20iLCJib3JkZXJSaWdodCIsImZsZXgiLCJib3JkZXJDb2xvciIsIkdyaWQiLCJIb21lIiwiSW5kZXgiXSwic291cmNlUm9vdCI6IiJ9