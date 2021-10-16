"use strict";
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./node_modules/@mui/styles/ServerStyleSheets/ServerStyleSheets.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@mui/styles/ServerStyleSheets/ServerStyleSheets.js ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ ServerStyleSheets; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var jss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jss */ "./node_modules/jss/dist/jss.esm.js");
/* harmony import */ var _StylesProvider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../StylesProvider */ "./node_modules/@mui/styles/StylesProvider/index.js");
/* harmony import */ var _createGenerateClassName__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../createGenerateClassName */ "./node_modules/@mui/styles/createGenerateClassName/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);






class ServerStyleSheets {
  constructor(options = {}) {
    this.options = options;
  }

  collect(children) {
    // This is needed in order to deduplicate the injection of CSS in the page.
    const sheetsManager = new Map(); // This is needed in order to inject the critical CSS.

    this.sheetsRegistry = new jss__WEBPACK_IMPORTED_MODULE_3__.SheetsRegistry(); // A new class name generator

    const generateClassName = (0,_createGenerateClassName__WEBPACK_IMPORTED_MODULE_4__.default)();
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_StylesProvider__WEBPACK_IMPORTED_MODULE_5__.default, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({
      sheetsManager: sheetsManager,
      serverGenerateClassName: generateClassName,
      sheetsRegistry: this.sheetsRegistry
    }, this.options, {
      children: children
    }));
  }

  toString() {
    return this.sheetsRegistry ? this.sheetsRegistry.toString() : '';
  }

  getStyleElement(props) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement('style', (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({
      id: 'jss-server-side',
      key: 'jss-server-side',
      dangerouslySetInnerHTML: {
        __html: this.toString()
      }
    }, props));
  }

}

/***/ }),

/***/ "./node_modules/@mui/styles/ServerStyleSheets/index.js":
/*!*************************************************************!*\
  !*** ./node_modules/@mui/styles/ServerStyleSheets/index.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* reexport safe */ _ServerStyleSheets__WEBPACK_IMPORTED_MODULE_0__.default; }
/* harmony export */ });
/* harmony import */ var _ServerStyleSheets__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ServerStyleSheets */ "./node_modules/@mui/styles/ServerStyleSheets/ServerStyleSheets.js");


/***/ }),

/***/ "./node_modules/@mui/styles/StylesProvider/StylesProvider.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@mui/styles/StylesProvider/StylesProvider.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "sheetsManager": function() { return /* binding */ sheetsManager; },
/* harmony export */   "StylesContext": function() { return /* binding */ StylesContext; },
/* harmony export */   "default": function() { return /* binding */ StylesProvider; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/utils */ "./node_modules/@mui/utils/esm/index.js");
/* harmony import */ var jss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jss */ "./node_modules/jss/dist/jss.esm.js");
/* harmony import */ var _createGenerateClassName__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../createGenerateClassName */ "./node_modules/@mui/styles/createGenerateClassName/index.js");
/* harmony import */ var _jssPreset__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../jssPreset */ "./node_modules/@mui/styles/jssPreset/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);


const _excluded = ["children", "injectFirst", "disableGeneration"];





 // Default JSS instance.


const jss = (0,jss__WEBPACK_IMPORTED_MODULE_5__.create)((0,_jssPreset__WEBPACK_IMPORTED_MODULE_6__.default)()); // Use a singleton or the provided one by the context.
//
// The counter-based approach doesn't tolerate any mistake.
// It's much safer to use the same counter everywhere.

const generateClassName = (0,_createGenerateClassName__WEBPACK_IMPORTED_MODULE_7__.default)(); // Exported for test purposes

const sheetsManager = new Map();
const defaultOptions = {
  disableGeneration: false,
  generateClassName,
  jss,
  sheetsCache: null,
  sheetsManager,
  sheetsRegistry: null
};
const StylesContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createContext(defaultOptions);

if (true) {
  StylesContext.displayName = 'StylesContext';
}

let injectFirstNode;
function StylesProvider(props) {
  const {
    children,
    injectFirst = false,
    disableGeneration = false
  } = props,
        localOptions = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__.default)(props, _excluded);

  const outerOptions = react__WEBPACK_IMPORTED_MODULE_2__.useContext(StylesContext);

  const context = (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({}, outerOptions, {
    disableGeneration
  }, localOptions);

  if (true) {
    if (typeof window === 'undefined' && !context.sheetsManager) {
      console.error('MUI: You need to use the ServerStyleSheets API when rendering on the server.');
    }
  }

  if (true) {
    if (context.jss.options.insertionPoint && injectFirst) {
      console.error('MUI: You cannot use a custom insertionPoint and <StylesContext injectFirst> at the same time.');
    }
  }

  if (true) {
    if (injectFirst && localOptions.jss) {
      console.error('MUI: You cannot use the jss and injectFirst props at the same time.');
    }
  }

  if (!context.jss.options.insertionPoint && injectFirst && typeof window !== 'undefined') {
    if (!injectFirstNode) {
      const head = document.head;
      injectFirstNode = document.createComment('mui-inject-first');
      head.insertBefore(injectFirstNode, head.firstChild);
    }

    context.jss = (0,jss__WEBPACK_IMPORTED_MODULE_5__.create)({
      plugins: (0,_jssPreset__WEBPACK_IMPORTED_MODULE_6__.default)().plugins,
      insertionPoint: injectFirstNode
    });
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(StylesContext.Provider, {
    value: context,
    children: children
  });
}
 true ? StylesProvider.propTypes = {
  /**
   * Your component tree.
   */
  children: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().node),

  /**
   * You can disable the generation of the styles with this option.
   * It can be useful when traversing the React tree outside of the HTML
   * rendering step on the server.
   * Let's say you are using react-apollo to extract all
   * the queries made by the interface server-side - you can significantly speed up the traversal with this prop.
   */
  disableGeneration: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),

  /**
   * JSS's class name generator.
   */
  generateClassName: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func),

  /**
   * By default, the styles are injected last in the <head> element of the page.
   * As a result, they gain more specificity than any other style sheet.
   * If you want to override MUI's styles, set this prop.
   */
  injectFirst: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),

  /**
   * JSS's instance.
   */
  jss: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().object),

  /**
   * @ignore
   */
  serverGenerateClassName: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func),

  /**
   * @ignore
   *
   * Beta feature.
   *
   * Cache for the sheets.
   */
  sheetsCache: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().object),

  /**
   * @ignore
   *
   * The sheetsManager is used to deduplicate style sheet injection in the page.
   * It's deduplicating using the (theme, styles) couple.
   * On the server, you should provide a new instance for each request.
   */
  sheetsManager: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().object),

  /**
   * @ignore
   *
   * Collect the sheets.
   */
  sheetsRegistry: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().object)
} : 0;

if (true) {
   true ? StylesProvider.propTypes = (0,_mui_utils__WEBPACK_IMPORTED_MODULE_8__.exactProp)(StylesProvider.propTypes) : 0;
}

/***/ }),

/***/ "./node_modules/@mui/styles/StylesProvider/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@mui/styles/StylesProvider/index.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* reexport safe */ _StylesProvider__WEBPACK_IMPORTED_MODULE_0__.default; }
/* harmony export */ });
/* harmony import */ var _StylesProvider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./StylesProvider */ "./node_modules/@mui/styles/StylesProvider/StylesProvider.js");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _StylesProvider__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = function(key) { return _StylesProvider__WEBPACK_IMPORTED_MODULE_0__[key]; }.bind(0, __WEBPACK_IMPORT_KEY__)
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);



/***/ }),

/***/ "./node_modules/@mui/styles/ThemeProvider/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/@mui/styles/ThemeProvider/index.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* reexport safe */ _mui_private_theming_ThemeProvider__WEBPACK_IMPORTED_MODULE_0__.default; }
/* harmony export */ });
/* harmony import */ var _mui_private_theming_ThemeProvider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @mui/private-theming/ThemeProvider */ "./node_modules/@mui/private-theming/ThemeProvider/index.js");


/***/ }),

/***/ "./node_modules/@mui/styles/createGenerateClassName/createGenerateClassName.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/@mui/styles/createGenerateClassName/createGenerateClassName.js ***!
  \*************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ createGenerateClassName; }
/* harmony export */ });
/* harmony import */ var _mui_private_theming_ThemeProvider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @mui/private-theming/ThemeProvider */ "./node_modules/@mui/private-theming/ThemeProvider/index.js");

/**
 * This is the list of the style rule name we use as drop in replacement for the built-in
 * pseudo classes (:checked, :disabled, :focused, etc.).
 *
 * Why do they exist in the first place?
 * These classes are used at a specificity of 2.
 * It allows them to override previously defined styles as well as
 * being untouched by simple user overrides.
 */

const stateClasses = ['checked', 'disabled', 'error', 'focused', 'focusVisible', 'required', 'expanded', 'selected']; // Returns a function which generates unique class names based on counters.
// When new generator function is created, rule counter is reset.
// We need to reset the rule counter for SSR for each request.
//
// It's inspired by
// https://github.com/cssinjs/jss/blob/4e6a05dd3f7b6572fdd3ab216861d9e446c20331/src/utils/createGenerateClassName.js

function createGenerateClassName(options = {}) {
  const {
    disableGlobal = false,
    productionPrefix = 'jss',
    seed = ''
  } = options;
  const seedPrefix = seed === '' ? '' : `${seed}-`;
  let ruleCounter = 0;

  const getNextCounterId = () => {
    ruleCounter += 1;

    if (true) {
      if (ruleCounter >= 1e10) {
        console.warn(['MUI: You might have a memory leak.', 'The ruleCounter is not supposed to grow that much.'].join(''));
      }
    }

    return ruleCounter;
  };

  return (rule, styleSheet) => {
    const name = styleSheet.options.name; // Is a global static MUI style?

    if (name && name.indexOf('Mui') === 0 && !styleSheet.options.link && !disableGlobal) {
      // We can use a shorthand class name, we never use the keys to style the components.
      if (stateClasses.indexOf(rule.key) !== -1) {
        return `Mui-${rule.key}`;
      }

      const prefix = `${seedPrefix}${name}-${rule.key}`;

      if (!styleSheet.options.theme[_mui_private_theming_ThemeProvider__WEBPACK_IMPORTED_MODULE_0__.unstable_nested] || seed !== '') {
        return prefix;
      }

      return `${prefix}-${getNextCounterId()}`;
    }

    if (false) {}

    const suffix = `${rule.key}-${getNextCounterId()}`; // Help with debuggability.

    if (styleSheet.options.classNamePrefix) {
      return `${seedPrefix}${styleSheet.options.classNamePrefix}-${suffix}`;
    }

    return `${seedPrefix}${suffix}`;
  };
}

/***/ }),

/***/ "./node_modules/@mui/styles/createGenerateClassName/index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@mui/styles/createGenerateClassName/index.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* reexport safe */ _createGenerateClassName__WEBPACK_IMPORTED_MODULE_0__.default; }
/* harmony export */ });
/* harmony import */ var _createGenerateClassName__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createGenerateClassName */ "./node_modules/@mui/styles/createGenerateClassName/createGenerateClassName.js");


/***/ }),

/***/ "./node_modules/@mui/styles/createStyles/createStyles.js":
/*!***************************************************************!*\
  !*** ./node_modules/@mui/styles/createStyles/createStyles.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ createStyles; }
/* harmony export */ });
function createStyles(styles) {
  return styles;
}

/***/ }),

/***/ "./node_modules/@mui/styles/createStyles/index.js":
/*!********************************************************!*\
  !*** ./node_modules/@mui/styles/createStyles/index.js ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* reexport safe */ _createStyles__WEBPACK_IMPORTED_MODULE_0__.default; }
/* harmony export */ });
/* harmony import */ var _createStyles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createStyles */ "./node_modules/@mui/styles/createStyles/createStyles.js");


/***/ }),

/***/ "./node_modules/@mui/styles/getStylesCreator/getStylesCreator.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@mui/styles/getStylesCreator/getStylesCreator.js ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ getStylesCreator; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _mui_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/utils */ "./node_modules/@mui/utils/esm/index.js");
/* harmony import */ var _propsToClassKey__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../propsToClassKey */ "./node_modules/@mui/styles/propsToClassKey/index.js");
/* harmony import */ var _noopTheme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./noopTheme */ "./node_modules/@mui/styles/getStylesCreator/noopTheme.js");




function getStylesCreator(stylesOrCreator) {
  const themingEnabled = typeof stylesOrCreator === 'function';

  if (true) {
    if (typeof stylesOrCreator !== 'object' && !themingEnabled) {
      console.error(['MUI: The `styles` argument provided is invalid.', 'You need to provide a function generating the styles or a styles object.'].join('\n'));
    }
  }

  return {
    create: (theme, name) => {
      let styles;

      try {
        styles = themingEnabled ? stylesOrCreator(theme) : stylesOrCreator;
      } catch (err) {
        if (true) {
          if (themingEnabled === true && theme === _noopTheme__WEBPACK_IMPORTED_MODULE_1__.default) {
            // TODO: prepend error message/name instead
            console.error(['MUI: The `styles` argument provided is invalid.', 'You are providing a function without a theme in the context.', 'One of the parent elements needs to use a ThemeProvider.'].join('\n'));
          }
        }

        throw err;
      }

      if (!name || !theme.components || !theme.components[name] || !theme.components[name].styleOverrides && !theme.components[name].variants) {
        return styles;
      }

      const overrides = theme.components[name].styleOverrides || {};
      const variants = theme.components[name].variants || [];

      const stylesWithOverrides = (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({}, styles);

      Object.keys(overrides).forEach(key => {
        if (true) {
          if (!stylesWithOverrides[key]) {
            console.warn(['MUI: You are trying to override a style that does not exist.', `Fix the \`${key}\` key of \`theme.components.${name}.styleOverrides\`.`, '', `If you intentionally wanted to add a new key, please use the theme.components[${name}].variants option.`].join('\n'));
          }
        }

        stylesWithOverrides[key] = (0,_mui_utils__WEBPACK_IMPORTED_MODULE_2__.deepmerge)(stylesWithOverrides[key] || {}, overrides[key]);
      });
      variants.forEach(definition => {
        const classKey = (0,_propsToClassKey__WEBPACK_IMPORTED_MODULE_3__.default)(definition.props);
        stylesWithOverrides[classKey] = (0,_mui_utils__WEBPACK_IMPORTED_MODULE_2__.deepmerge)(stylesWithOverrides[classKey] || {}, definition.style);
      });
      return stylesWithOverrides;
    },
    options: {}
  };
}

/***/ }),

/***/ "./node_modules/@mui/styles/getStylesCreator/index.js":
/*!************************************************************!*\
  !*** ./node_modules/@mui/styles/getStylesCreator/index.js ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* reexport safe */ _getStylesCreator__WEBPACK_IMPORTED_MODULE_0__.default; }
/* harmony export */ });
/* harmony import */ var _getStylesCreator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getStylesCreator */ "./node_modules/@mui/styles/getStylesCreator/getStylesCreator.js");


/***/ }),

/***/ "./node_modules/@mui/styles/getStylesCreator/noopTheme.js":
/*!****************************************************************!*\
  !*** ./node_modules/@mui/styles/getStylesCreator/noopTheme.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// We use the same empty object to ref count the styles that don't need a theme object.
const noopTheme = {};
/* harmony default export */ __webpack_exports__["default"] = (noopTheme);

/***/ }),

/***/ "./node_modules/@mui/styles/getThemeProps/getThemeProps.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@mui/styles/getThemeProps/getThemeProps.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ getThemeProps; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");


/* eslint-disable no-restricted-syntax */
function getThemeProps(params) {
  const {
    theme,
    name,
    props
  } = params;

  if (!theme || !theme.components || !theme.components[name] || !theme.components[name].defaultProps) {
    return props;
  }

  const output = (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({}, props); // Resolve default props, code borrow from React source.
  // https://github.com/facebook/react/blob/15a8f031838a553e41c0b66eb1bcf1da8448104d/packages/react/src/ReactElement.js#L221


  const defaultProps = theme.components[name].defaultProps;
  let propName;

  for (propName in defaultProps) {
    if (output[propName] === undefined) {
      output[propName] = defaultProps[propName];
    }
  }

  return output;
}

/***/ }),

/***/ "./node_modules/@mui/styles/getThemeProps/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/@mui/styles/getThemeProps/index.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* reexport safe */ _getThemeProps__WEBPACK_IMPORTED_MODULE_0__.default; }
/* harmony export */ });
/* harmony import */ var _getThemeProps__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getThemeProps */ "./node_modules/@mui/styles/getThemeProps/getThemeProps.js");


/***/ }),

/***/ "./node_modules/@mui/styles/index.js":
/*!*******************************************!*\
  !*** ./node_modules/@mui/styles/index.js ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createGenerateClassName": function() { return /* reexport safe */ _createGenerateClassName__WEBPACK_IMPORTED_MODULE_1__.default; },
/* harmony export */   "createStyles": function() { return /* reexport safe */ _createStyles__WEBPACK_IMPORTED_MODULE_2__.default; },
/* harmony export */   "getThemeProps": function() { return /* reexport safe */ _getThemeProps__WEBPACK_IMPORTED_MODULE_3__.default; },
/* harmony export */   "jssPreset": function() { return /* reexport safe */ _jssPreset__WEBPACK_IMPORTED_MODULE_4__.default; },
/* harmony export */   "makeStyles": function() { return /* reexport safe */ _makeStyles__WEBPACK_IMPORTED_MODULE_5__.default; },
/* harmony export */   "mergeClasses": function() { return /* reexport safe */ _mergeClasses__WEBPACK_IMPORTED_MODULE_6__.default; },
/* harmony export */   "ServerStyleSheets": function() { return /* reexport safe */ _ServerStyleSheets__WEBPACK_IMPORTED_MODULE_7__.default; },
/* harmony export */   "styled": function() { return /* reexport safe */ _styled__WEBPACK_IMPORTED_MODULE_8__.default; },
/* harmony export */   "StylesProvider": function() { return /* reexport safe */ _StylesProvider__WEBPACK_IMPORTED_MODULE_9__.default; },
/* harmony export */   "ThemeProvider": function() { return /* reexport safe */ _ThemeProvider__WEBPACK_IMPORTED_MODULE_10__.default; },
/* harmony export */   "useTheme": function() { return /* reexport safe */ _useTheme__WEBPACK_IMPORTED_MODULE_11__.default; },
/* harmony export */   "useThemeVariants": function() { return /* reexport safe */ _useThemeVariants__WEBPACK_IMPORTED_MODULE_12__.default; },
/* harmony export */   "propsToClassKey": function() { return /* reexport safe */ _propsToClassKey__WEBPACK_IMPORTED_MODULE_13__.default; },
/* harmony export */   "withStyles": function() { return /* reexport safe */ _withStyles__WEBPACK_IMPORTED_MODULE_14__.default; },
/* harmony export */   "withTheme": function() { return /* reexport safe */ _withTheme__WEBPACK_IMPORTED_MODULE_15__.default; }
/* harmony export */ });
/* harmony import */ var _mui_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @mui/utils */ "./node_modules/@mui/utils/esm/index.js");
/* harmony import */ var _createGenerateClassName__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createGenerateClassName */ "./node_modules/@mui/styles/createGenerateClassName/index.js");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _createGenerateClassName__WEBPACK_IMPORTED_MODULE_1__) if(["default","createGenerateClassName","createStyles","getThemeProps","jssPreset","makeStyles","mergeClasses","ServerStyleSheets","styled","StylesProvider","ThemeProvider","useTheme","useThemeVariants","propsToClassKey","withStyles","withTheme"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = function(key) { return _createGenerateClassName__WEBPACK_IMPORTED_MODULE_1__[key]; }.bind(0, __WEBPACK_IMPORT_KEY__)
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
/* harmony import */ var _createStyles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./createStyles */ "./node_modules/@mui/styles/createStyles/index.js");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _createStyles__WEBPACK_IMPORTED_MODULE_2__) if(["default","createGenerateClassName","createStyles","getThemeProps","jssPreset","makeStyles","mergeClasses","ServerStyleSheets","styled","StylesProvider","ThemeProvider","useTheme","useThemeVariants","propsToClassKey","withStyles","withTheme"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = function(key) { return _createStyles__WEBPACK_IMPORTED_MODULE_2__[key]; }.bind(0, __WEBPACK_IMPORT_KEY__)
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
/* harmony import */ var _getThemeProps__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./getThemeProps */ "./node_modules/@mui/styles/getThemeProps/index.js");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _getThemeProps__WEBPACK_IMPORTED_MODULE_3__) if(["default","createGenerateClassName","createStyles","getThemeProps","jssPreset","makeStyles","mergeClasses","ServerStyleSheets","styled","StylesProvider","ThemeProvider","useTheme","useThemeVariants","propsToClassKey","withStyles","withTheme"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = function(key) { return _getThemeProps__WEBPACK_IMPORTED_MODULE_3__[key]; }.bind(0, __WEBPACK_IMPORT_KEY__)
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
/* harmony import */ var _jssPreset__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./jssPreset */ "./node_modules/@mui/styles/jssPreset/index.js");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _jssPreset__WEBPACK_IMPORTED_MODULE_4__) if(["default","createGenerateClassName","createStyles","getThemeProps","jssPreset","makeStyles","mergeClasses","ServerStyleSheets","styled","StylesProvider","ThemeProvider","useTheme","useThemeVariants","propsToClassKey","withStyles","withTheme"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = function(key) { return _jssPreset__WEBPACK_IMPORTED_MODULE_4__[key]; }.bind(0, __WEBPACK_IMPORT_KEY__)
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
/* harmony import */ var _makeStyles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./makeStyles */ "./node_modules/@mui/styles/makeStyles/index.js");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _makeStyles__WEBPACK_IMPORTED_MODULE_5__) if(["default","createGenerateClassName","createStyles","getThemeProps","jssPreset","makeStyles","mergeClasses","ServerStyleSheets","styled","StylesProvider","ThemeProvider","useTheme","useThemeVariants","propsToClassKey","withStyles","withTheme"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = function(key) { return _makeStyles__WEBPACK_IMPORTED_MODULE_5__[key]; }.bind(0, __WEBPACK_IMPORT_KEY__)
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
/* harmony import */ var _mergeClasses__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./mergeClasses */ "./node_modules/@mui/styles/mergeClasses/index.js");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _mergeClasses__WEBPACK_IMPORTED_MODULE_6__) if(["default","createGenerateClassName","createStyles","getThemeProps","jssPreset","makeStyles","mergeClasses","ServerStyleSheets","styled","StylesProvider","ThemeProvider","useTheme","useThemeVariants","propsToClassKey","withStyles","withTheme"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = function(key) { return _mergeClasses__WEBPACK_IMPORTED_MODULE_6__[key]; }.bind(0, __WEBPACK_IMPORT_KEY__)
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
/* harmony import */ var _ServerStyleSheets__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ServerStyleSheets */ "./node_modules/@mui/styles/ServerStyleSheets/index.js");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _ServerStyleSheets__WEBPACK_IMPORTED_MODULE_7__) if(["default","createGenerateClassName","createStyles","getThemeProps","jssPreset","makeStyles","mergeClasses","ServerStyleSheets","styled","StylesProvider","ThemeProvider","useTheme","useThemeVariants","propsToClassKey","withStyles","withTheme"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = function(key) { return _ServerStyleSheets__WEBPACK_IMPORTED_MODULE_7__[key]; }.bind(0, __WEBPACK_IMPORT_KEY__)
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./styled */ "./node_modules/@mui/styles/styled/index.js");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _styled__WEBPACK_IMPORTED_MODULE_8__) if(["default","createGenerateClassName","createStyles","getThemeProps","jssPreset","makeStyles","mergeClasses","ServerStyleSheets","styled","StylesProvider","ThemeProvider","useTheme","useThemeVariants","propsToClassKey","withStyles","withTheme"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = function(key) { return _styled__WEBPACK_IMPORTED_MODULE_8__[key]; }.bind(0, __WEBPACK_IMPORT_KEY__)
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
/* harmony import */ var _StylesProvider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./StylesProvider */ "./node_modules/@mui/styles/StylesProvider/index.js");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _StylesProvider__WEBPACK_IMPORTED_MODULE_9__) if(["default","createGenerateClassName","createStyles","getThemeProps","jssPreset","makeStyles","mergeClasses","ServerStyleSheets","styled","StylesProvider","ThemeProvider","useTheme","useThemeVariants","propsToClassKey","withStyles","withTheme"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = function(key) { return _StylesProvider__WEBPACK_IMPORTED_MODULE_9__[key]; }.bind(0, __WEBPACK_IMPORT_KEY__)
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
/* harmony import */ var _ThemeProvider__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./ThemeProvider */ "./node_modules/@mui/styles/ThemeProvider/index.js");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _ThemeProvider__WEBPACK_IMPORTED_MODULE_10__) if(["default","createGenerateClassName","createStyles","getThemeProps","jssPreset","makeStyles","mergeClasses","ServerStyleSheets","styled","StylesProvider","ThemeProvider","useTheme","useThemeVariants","propsToClassKey","withStyles","withTheme"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = function(key) { return _ThemeProvider__WEBPACK_IMPORTED_MODULE_10__[key]; }.bind(0, __WEBPACK_IMPORT_KEY__)
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
/* harmony import */ var _useTheme__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./useTheme */ "./node_modules/@mui/styles/useTheme/index.js");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _useTheme__WEBPACK_IMPORTED_MODULE_11__) if(["default","createGenerateClassName","createStyles","getThemeProps","jssPreset","makeStyles","mergeClasses","ServerStyleSheets","styled","StylesProvider","ThemeProvider","useTheme","useThemeVariants","propsToClassKey","withStyles","withTheme"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = function(key) { return _useTheme__WEBPACK_IMPORTED_MODULE_11__[key]; }.bind(0, __WEBPACK_IMPORT_KEY__)
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
/* harmony import */ var _useThemeVariants__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./useThemeVariants */ "./node_modules/@mui/styles/useThemeVariants/index.js");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _useThemeVariants__WEBPACK_IMPORTED_MODULE_12__) if(["default","createGenerateClassName","createStyles","getThemeProps","jssPreset","makeStyles","mergeClasses","ServerStyleSheets","styled","StylesProvider","ThemeProvider","useTheme","useThemeVariants","propsToClassKey","withStyles","withTheme"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = function(key) { return _useThemeVariants__WEBPACK_IMPORTED_MODULE_12__[key]; }.bind(0, __WEBPACK_IMPORT_KEY__)
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
/* harmony import */ var _propsToClassKey__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./propsToClassKey */ "./node_modules/@mui/styles/propsToClassKey/index.js");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _propsToClassKey__WEBPACK_IMPORTED_MODULE_13__) if(["default","createGenerateClassName","createStyles","getThemeProps","jssPreset","makeStyles","mergeClasses","ServerStyleSheets","styled","StylesProvider","ThemeProvider","useTheme","useThemeVariants","propsToClassKey","withStyles","withTheme"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = function(key) { return _propsToClassKey__WEBPACK_IMPORTED_MODULE_13__[key]; }.bind(0, __WEBPACK_IMPORT_KEY__)
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
/* harmony import */ var _withStyles__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./withStyles */ "./node_modules/@mui/styles/withStyles/index.js");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _withStyles__WEBPACK_IMPORTED_MODULE_14__) if(["default","createGenerateClassName","createStyles","getThemeProps","jssPreset","makeStyles","mergeClasses","ServerStyleSheets","styled","StylesProvider","ThemeProvider","useTheme","useThemeVariants","propsToClassKey","withStyles","withTheme"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = function(key) { return _withStyles__WEBPACK_IMPORTED_MODULE_14__[key]; }.bind(0, __WEBPACK_IMPORT_KEY__)
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
/* harmony import */ var _withTheme__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./withTheme */ "./node_modules/@mui/styles/withTheme/index.js");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _withTheme__WEBPACK_IMPORTED_MODULE_15__) if(["default","createGenerateClassName","createStyles","getThemeProps","jssPreset","makeStyles","mergeClasses","ServerStyleSheets","styled","StylesProvider","ThemeProvider","useTheme","useThemeVariants","propsToClassKey","withStyles","withTheme"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = function(key) { return _withTheme__WEBPACK_IMPORTED_MODULE_15__[key]; }.bind(0, __WEBPACK_IMPORT_KEY__)
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
/** @license MUI v5.0.1
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
/* eslint-disable import/export */

/* Warning if there are several instances of @mui/styles */

if ( true && typeof window !== 'undefined') {
  _mui_utils__WEBPACK_IMPORTED_MODULE_0__.ponyfillGlobal["__@mui/styles-init__"] = _mui_utils__WEBPACK_IMPORTED_MODULE_0__.ponyfillGlobal["__@mui/styles-init__"] || 0;

  if (_mui_utils__WEBPACK_IMPORTED_MODULE_0__.ponyfillGlobal["__@mui/styles-init__"] === 1) {
    console.warn(['It looks like there are several instances of `@mui/styles` initialized in this application.', 'This may cause theme propagation issues, broken class names, ' + 'specificity issues, and makes your application bigger without a good reason.', '', 'See https://mui.com/r/styles-instance-warning for more info.'].join('\n'));
  }

  _mui_utils__WEBPACK_IMPORTED_MODULE_0__.ponyfillGlobal["__@mui/styles-init__"] += 1;
}
































/***/ }),

/***/ "./node_modules/@mui/styles/jssPreset/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/@mui/styles/jssPreset/index.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* reexport safe */ _jssPreset__WEBPACK_IMPORTED_MODULE_0__.default; }
/* harmony export */ });
/* harmony import */ var _jssPreset__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./jssPreset */ "./node_modules/@mui/styles/jssPreset/jssPreset.js");


/***/ }),

/***/ "./node_modules/@mui/styles/jssPreset/jssPreset.js":
/*!*********************************************************!*\
  !*** ./node_modules/@mui/styles/jssPreset/jssPreset.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ jssPreset; }
/* harmony export */ });
/* harmony import */ var jss_plugin_rule_value_function__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jss-plugin-rule-value-function */ "./node_modules/jss-plugin-rule-value-function/dist/jss-plugin-rule-value-function.esm.js");
/* harmony import */ var jss_plugin_global__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jss-plugin-global */ "./node_modules/jss-plugin-global/dist/jss-plugin-global.esm.js");
/* harmony import */ var jss_plugin_nested__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jss-plugin-nested */ "./node_modules/jss-plugin-nested/dist/jss-plugin-nested.esm.js");
/* harmony import */ var jss_plugin_camel_case__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jss-plugin-camel-case */ "./node_modules/jss-plugin-camel-case/dist/jss-plugin-camel-case.esm.js");
/* harmony import */ var jss_plugin_default_unit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jss-plugin-default-unit */ "./node_modules/jss-plugin-default-unit/dist/jss-plugin-default-unit.esm.js");
/* harmony import */ var jss_plugin_vendor_prefixer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jss-plugin-vendor-prefixer */ "./node_modules/jss-plugin-vendor-prefixer/dist/jss-plugin-vendor-prefixer.esm.js");
/* harmony import */ var jss_plugin_props_sort__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! jss-plugin-props-sort */ "./node_modules/jss-plugin-props-sort/dist/jss-plugin-props-sort.esm.js");






 // Subset of jss-preset-default with only the plugins the MUI components are using.

function jssPreset() {
  return {
    plugins: [(0,jss_plugin_rule_value_function__WEBPACK_IMPORTED_MODULE_0__.default)(), (0,jss_plugin_global__WEBPACK_IMPORTED_MODULE_1__.default)(), (0,jss_plugin_nested__WEBPACK_IMPORTED_MODULE_2__.default)(), (0,jss_plugin_camel_case__WEBPACK_IMPORTED_MODULE_3__.default)(), (0,jss_plugin_default_unit__WEBPACK_IMPORTED_MODULE_4__.default)(), // Disable the vendor prefixer server-side, it does nothing.
    // This way, we can get a performance boost.
    // In the documentation, we are using `autoprefixer` to solve this problem.
    typeof window === 'undefined' ? null : (0,jss_plugin_vendor_prefixer__WEBPACK_IMPORTED_MODULE_5__.default)(), (0,jss_plugin_props_sort__WEBPACK_IMPORTED_MODULE_6__.default)()]
  };
}

/***/ }),

/***/ "./node_modules/@mui/styles/makeStyles/index.js":
/*!******************************************************!*\
  !*** ./node_modules/@mui/styles/makeStyles/index.js ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* reexport safe */ _makeStyles__WEBPACK_IMPORTED_MODULE_0__.default; }
/* harmony export */ });
/* harmony import */ var _makeStyles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./makeStyles */ "./node_modules/@mui/styles/makeStyles/makeStyles.js");


/***/ }),

/***/ "./node_modules/@mui/styles/makeStyles/indexCounter.js":
/*!*************************************************************!*\
  !*** ./node_modules/@mui/styles/makeStyles/indexCounter.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "increment": function() { return /* binding */ increment; }
/* harmony export */ });
/* eslint-disable import/prefer-default-export */
// Global index counter to preserve source order.
// We create the style sheet during the creation of the component,
// children are handled after the parents, so the order of style elements would be parent->child.
// It is a problem though when a parent passes a className
// which needs to override any child's styles.
// StyleSheet of the child has a higher specificity, because of the source order.
// So our solution is to render sheets them in the reverse order child->sheet, so
// that parent has a higher specificity.
let indexCounter = -1e9;
function increment() {
  indexCounter += 1;

  if (true) {
    if (indexCounter >= 0) {
      console.warn(['MUI: You might have a memory leak.', 'The indexCounter is not supposed to grow that much.'].join('\n'));
    }
  }

  return indexCounter;
}

/***/ }),

/***/ "./node_modules/@mui/styles/makeStyles/makeStyles.js":
/*!***********************************************************!*\
  !*** ./node_modules/@mui/styles/makeStyles/makeStyles.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ makeStyles; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var jss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jss */ "./node_modules/jss/dist/jss.esm.js");
/* harmony import */ var _mergeClasses__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../mergeClasses */ "./node_modules/@mui/styles/mergeClasses/index.js");
/* harmony import */ var _multiKeyStore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./multiKeyStore */ "./node_modules/@mui/styles/makeStyles/multiKeyStore.js");
/* harmony import */ var _useTheme__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../useTheme */ "./node_modules/@mui/styles/useTheme/index.js");
/* harmony import */ var _StylesProvider__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../StylesProvider */ "./node_modules/@mui/styles/StylesProvider/index.js");
/* harmony import */ var _indexCounter__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./indexCounter */ "./node_modules/@mui/styles/makeStyles/indexCounter.js");
/* harmony import */ var _getStylesCreator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../getStylesCreator */ "./node_modules/@mui/styles/getStylesCreator/index.js");
/* harmony import */ var _getStylesCreator_noopTheme__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../getStylesCreator/noopTheme */ "./node_modules/@mui/styles/getStylesCreator/noopTheme.js");


const _excluded = ["name", "classNamePrefix", "Component", "defaultTheme"];










function getClasses({
  state,
  stylesOptions
}, classes, Component) {
  if (stylesOptions.disableGeneration) {
    return classes || {};
  }

  if (!state.cacheClasses) {
    state.cacheClasses = {
      // Cache for the finalized classes value.
      value: null,
      // Cache for the last used classes prop pointer.
      lastProp: null,
      // Cache for the last used rendered classes pointer.
      lastJSS: {}
    };
  } // Tracks if either the rendered classes or classes prop has changed,
  // requiring the generation of a new finalized classes object.


  let generate = false;

  if (state.classes !== state.cacheClasses.lastJSS) {
    state.cacheClasses.lastJSS = state.classes;
    generate = true;
  }

  if (classes !== state.cacheClasses.lastProp) {
    state.cacheClasses.lastProp = classes;
    generate = true;
  }

  if (generate) {
    state.cacheClasses.value = (0,_mergeClasses__WEBPACK_IMPORTED_MODULE_3__.default)({
      baseClasses: state.cacheClasses.lastJSS,
      newClasses: classes,
      Component
    });
  }

  return state.cacheClasses.value;
}

function attach({
  state,
  theme,
  stylesOptions,
  stylesCreator,
  name
}, props) {
  if (stylesOptions.disableGeneration) {
    return;
  }

  let sheetManager = _multiKeyStore__WEBPACK_IMPORTED_MODULE_4__.default.get(stylesOptions.sheetsManager, stylesCreator, theme);

  if (!sheetManager) {
    sheetManager = {
      refs: 0,
      staticSheet: null,
      dynamicStyles: null
    };
    _multiKeyStore__WEBPACK_IMPORTED_MODULE_4__.default.set(stylesOptions.sheetsManager, stylesCreator, theme, sheetManager);
  }

  const options = (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__.default)({}, stylesCreator.options, stylesOptions, {
    theme,
    flip: typeof stylesOptions.flip === 'boolean' ? stylesOptions.flip : theme.direction === 'rtl'
  });

  options.generateId = options.serverGenerateClassName || options.generateClassName;
  const sheetsRegistry = stylesOptions.sheetsRegistry;

  if (sheetManager.refs === 0) {
    let staticSheet;

    if (stylesOptions.sheetsCache) {
      staticSheet = _multiKeyStore__WEBPACK_IMPORTED_MODULE_4__.default.get(stylesOptions.sheetsCache, stylesCreator, theme);
    }

    const styles = stylesCreator.create(theme, name);

    if (!staticSheet) {
      staticSheet = stylesOptions.jss.createStyleSheet(styles, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__.default)({
        link: false
      }, options));
      staticSheet.attach();

      if (stylesOptions.sheetsCache) {
        _multiKeyStore__WEBPACK_IMPORTED_MODULE_4__.default.set(stylesOptions.sheetsCache, stylesCreator, theme, staticSheet);
      }
    }

    if (sheetsRegistry) {
      sheetsRegistry.add(staticSheet);
    }

    sheetManager.staticSheet = staticSheet;
    sheetManager.dynamicStyles = (0,jss__WEBPACK_IMPORTED_MODULE_5__.getDynamicStyles)(styles);
  }

  if (sheetManager.dynamicStyles) {
    const dynamicSheet = stylesOptions.jss.createStyleSheet(sheetManager.dynamicStyles, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__.default)({
      link: true
    }, options));
    dynamicSheet.update(props);
    dynamicSheet.attach();
    state.dynamicSheet = dynamicSheet;
    state.classes = (0,_mergeClasses__WEBPACK_IMPORTED_MODULE_3__.default)({
      baseClasses: sheetManager.staticSheet.classes,
      newClasses: dynamicSheet.classes
    });

    if (sheetsRegistry) {
      sheetsRegistry.add(dynamicSheet);
    }
  } else {
    state.classes = sheetManager.staticSheet.classes;
  }

  sheetManager.refs += 1;
}

function update({
  state
}, props) {
  if (state.dynamicSheet) {
    state.dynamicSheet.update(props);
  }
}

function detach({
  state,
  theme,
  stylesOptions,
  stylesCreator
}) {
  if (stylesOptions.disableGeneration) {
    return;
  }

  const sheetManager = _multiKeyStore__WEBPACK_IMPORTED_MODULE_4__.default.get(stylesOptions.sheetsManager, stylesCreator, theme);
  sheetManager.refs -= 1;
  const sheetsRegistry = stylesOptions.sheetsRegistry;

  if (sheetManager.refs === 0) {
    _multiKeyStore__WEBPACK_IMPORTED_MODULE_4__.default.delete(stylesOptions.sheetsManager, stylesCreator, theme);
    stylesOptions.jss.removeStyleSheet(sheetManager.staticSheet);

    if (sheetsRegistry) {
      sheetsRegistry.remove(sheetManager.staticSheet);
    }
  }

  if (state.dynamicSheet) {
    stylesOptions.jss.removeStyleSheet(state.dynamicSheet);

    if (sheetsRegistry) {
      sheetsRegistry.remove(state.dynamicSheet);
    }
  }
}

function useSynchronousEffect(func, values) {
  const key = react__WEBPACK_IMPORTED_MODULE_2__.useRef([]);
  let output; // Store "generation" key. Just returns a new object every time

  const currentKey = react__WEBPACK_IMPORTED_MODULE_2__.useMemo(() => ({}), values); // eslint-disable-line react-hooks/exhaustive-deps
  // "the first render", or "memo dropped the value"

  if (key.current !== currentKey) {
    key.current = currentKey;
    output = func();
  }

  react__WEBPACK_IMPORTED_MODULE_2__.useEffect(() => () => {
    if (output) {
      output();
    }
  }, [currentKey] // eslint-disable-line react-hooks/exhaustive-deps
  );
}

function makeStyles(stylesOrCreator, options = {}) {
  const {
    // alias for classNamePrefix, if provided will listen to theme (required for theme.components[name].styleOverrides)
    name,
    // Help with debuggability.
    classNamePrefix: classNamePrefixOption,
    Component,
    defaultTheme = _getStylesCreator_noopTheme__WEBPACK_IMPORTED_MODULE_6__.default
  } = options,
        stylesOptions2 = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__.default)(options, _excluded);

  const stylesCreator = (0,_getStylesCreator__WEBPACK_IMPORTED_MODULE_7__.default)(stylesOrCreator);
  const classNamePrefix = name || classNamePrefixOption || 'makeStyles';
  stylesCreator.options = {
    index: (0,_indexCounter__WEBPACK_IMPORTED_MODULE_8__.increment)(),
    name,
    meta: classNamePrefix,
    classNamePrefix
  };

  const useStyles = (props = {}) => {
    const theme = (0,_useTheme__WEBPACK_IMPORTED_MODULE_9__.default)() || defaultTheme;

    const stylesOptions = (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__.default)({}, react__WEBPACK_IMPORTED_MODULE_2__.useContext(_StylesProvider__WEBPACK_IMPORTED_MODULE_10__.StylesContext), stylesOptions2);

    const instance = react__WEBPACK_IMPORTED_MODULE_2__.useRef();
    const shouldUpdate = react__WEBPACK_IMPORTED_MODULE_2__.useRef();
    useSynchronousEffect(() => {
      const current = {
        name,
        state: {},
        stylesCreator,
        stylesOptions,
        theme
      };
      attach(current, props);
      shouldUpdate.current = false;
      instance.current = current;
      return () => {
        detach(current);
      };
    }, [theme, stylesCreator]);
    react__WEBPACK_IMPORTED_MODULE_2__.useEffect(() => {
      if (shouldUpdate.current) {
        update(instance.current, props);
      }

      shouldUpdate.current = true;
    });
    const classes = getClasses(instance.current, props.classes, Component);

    if (true) {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      react__WEBPACK_IMPORTED_MODULE_2__.useDebugValue(classes);
    }

    if (true) {
      const supportedComponents = ['MuiAvatar', 'MuiBadge', 'MuiButton', 'MuiButtonGroup', 'MuiChip', 'MuiDivider', 'MuiFab', 'MuiPaper', 'MuiToolbar', 'MuiTypography', 'MuiAlert', 'MuiPagination', 'MuiPaginationItem', 'MuiSkeleton', 'MuiTimelineDot'];

      if (name && supportedComponents.indexOf(name) >= 0 && props.variant && !classes[props.variant]) {
        console.error([`MUI: You are using a variant value \`${props.variant}\` for which you didn't define styles.`, `Please create a new variant matcher in your theme for this variant. To learn more about matchers visit https://mui.com/r/custom-component-variants.`].join('\n'));
      }
    }

    return classes;
  };

  return useStyles;
}

/***/ }),

/***/ "./node_modules/@mui/styles/makeStyles/multiKeyStore.js":
/*!**************************************************************!*\
  !*** ./node_modules/@mui/styles/makeStyles/multiKeyStore.js ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// Used https://github.com/thinkloop/multi-key-cache as inspiration
const multiKeyStore = {
  set: (cache, key1, key2, value) => {
    let subCache = cache.get(key1);

    if (!subCache) {
      subCache = new Map();
      cache.set(key1, subCache);
    }

    subCache.set(key2, value);
  },
  get: (cache, key1, key2) => {
    const subCache = cache.get(key1);
    return subCache ? subCache.get(key2) : undefined;
  },
  delete: (cache, key1, key2) => {
    const subCache = cache.get(key1);
    subCache.delete(key2);
  }
};
/* harmony default export */ __webpack_exports__["default"] = (multiKeyStore);

/***/ }),

/***/ "./node_modules/@mui/styles/mergeClasses/index.js":
/*!********************************************************!*\
  !*** ./node_modules/@mui/styles/mergeClasses/index.js ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* reexport safe */ _mergeClasses__WEBPACK_IMPORTED_MODULE_0__.default; }
/* harmony export */ });
/* harmony import */ var _mergeClasses__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mergeClasses */ "./node_modules/@mui/styles/mergeClasses/mergeClasses.js");


/***/ }),

/***/ "./node_modules/@mui/styles/mergeClasses/mergeClasses.js":
/*!***************************************************************!*\
  !*** ./node_modules/@mui/styles/mergeClasses/mergeClasses.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ mergeClasses; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _mui_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/utils */ "./node_modules/@mui/utils/esm/index.js");


function mergeClasses(options = {}) {
  const {
    baseClasses,
    newClasses,
    Component
  } = options;

  if (!newClasses) {
    return baseClasses;
  }

  const nextClasses = (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({}, baseClasses);

  if (true) {
    if (typeof newClasses === 'string') {
      console.error([`MUI: The value \`${newClasses}\` ` + `provided to the classes prop of ${(0,_mui_utils__WEBPACK_IMPORTED_MODULE_1__.getDisplayName)(Component)} is incorrect.`, 'You might want to use the className prop instead.'].join('\n'));
      return baseClasses;
    }
  }

  Object.keys(newClasses).forEach(key => {
    if (true) {
      if (!baseClasses[key] && newClasses[key]) {
        console.error([`MUI: The key \`${key}\` ` + `provided to the classes prop is not implemented in ${(0,_mui_utils__WEBPACK_IMPORTED_MODULE_1__.getDisplayName)(Component)}.`, `You can only override one of the following: ${Object.keys(baseClasses).join(',')}.`].join('\n'));
      }

      if (newClasses[key] && typeof newClasses[key] !== 'string') {
        console.error([`MUI: The key \`${key}\` ` + `provided to the classes prop is not valid for ${(0,_mui_utils__WEBPACK_IMPORTED_MODULE_1__.getDisplayName)(Component)}.`, `You need to provide a non empty string instead of: ${newClasses[key]}.`].join('\n'));
      }
    }

    if (newClasses[key]) {
      nextClasses[key] = `${baseClasses[key]} ${newClasses[key]}`;
    }
  });
  return nextClasses;
}

/***/ }),

/***/ "./node_modules/@mui/styles/propsToClassKey/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/@mui/styles/propsToClassKey/index.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* reexport safe */ _propsToClassKey__WEBPACK_IMPORTED_MODULE_0__.default; }
/* harmony export */ });
/* harmony import */ var _propsToClassKey__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./propsToClassKey */ "./node_modules/@mui/styles/propsToClassKey/propsToClassKey.js");


/***/ }),

/***/ "./node_modules/@mui/styles/propsToClassKey/propsToClassKey.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@mui/styles/propsToClassKey/propsToClassKey.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ propsToClassKey; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var _mui_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/utils */ "./node_modules/@mui/utils/esm/index.js");

const _excluded = ["variant"];


function isEmpty(string) {
  return string.length === 0;
}
/**
 * Generates string classKey based on the properties provided. It starts with the
 * variant if defined, and then it appends all other properties in alphabetical order.
 * @param {object} props - the properties for which the classKey should be created
 */


function propsToClassKey(props) {
  const {
    variant
  } = props,
        other = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__.default)(props, _excluded);

  let classKey = variant || '';
  Object.keys(other).sort().forEach(key => {
    if (key === 'color') {
      classKey += isEmpty(classKey) ? props[key] : (0,_mui_utils__WEBPACK_IMPORTED_MODULE_1__.unstable_capitalize)(props[key]);
    } else {
      classKey += `${isEmpty(classKey) ? key : (0,_mui_utils__WEBPACK_IMPORTED_MODULE_1__.unstable_capitalize)(key)}${(0,_mui_utils__WEBPACK_IMPORTED_MODULE_1__.unstable_capitalize)(props[key].toString())}`;
    }
  });
  return classKey;
}

/***/ }),

/***/ "./node_modules/@mui/styles/styled/index.js":
/*!**************************************************!*\
  !*** ./node_modules/@mui/styles/styled/index.js ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* reexport safe */ _styled__WEBPACK_IMPORTED_MODULE_0__.default; }
/* harmony export */ });
/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styled */ "./node_modules/@mui/styles/styled/styled.js");


/***/ }),

/***/ "./node_modules/@mui/styles/styled/styled.js":
/*!***************************************************!*\
  !*** ./node_modules/@mui/styles/styled/styled.js ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ styled; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _mui_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/utils */ "./node_modules/@mui/utils/esm/index.js");
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! hoist-non-react-statics */ "./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js");
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _makeStyles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../makeStyles */ "./node_modules/@mui/styles/makeStyles/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__);


const _excluded = ["name"],
      _excluded2 = ["children", "className", "clone", "component"];








function omit(input, fields) {
  const output = {};
  Object.keys(input).forEach(prop => {
    if (fields.indexOf(prop) === -1) {
      output[prop] = input[prop];
    }
  });
  return output;
} // styled-components's API removes the mapping between components and styles.
// Using components as a low-level styling construct can be simpler.


function styled(Component) {
  const componentCreator = (style, options = {}) => {
    const {
      name
    } = options,
          stylesOptions = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__.default)(options, _excluded);

    if ( true && Component === undefined) {
      throw new Error(['You are calling styled(Component)(style) with an undefined component.', 'You may have forgotten to import it.'].join('\n'));
    }

    let classNamePrefix = name;

    if (true) {
      if (!name) {
        // Provide a better DX outside production.
        const displayName = (0,_mui_utils__WEBPACK_IMPORTED_MODULE_7__.getDisplayName)(Component);

        if (displayName !== undefined) {
          classNamePrefix = displayName;
        }
      }
    }

    const stylesOrCreator = typeof style === 'function' ? theme => ({
      root: props => style((0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({
        theme
      }, props))
    }) : {
      root: style
    };
    const useStyles = (0,_makeStyles__WEBPACK_IMPORTED_MODULE_8__.default)(stylesOrCreator, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({
      Component,
      name: name || Component.displayName,
      classNamePrefix
    }, stylesOptions));
    let filterProps;
    let propTypes = {};

    if (style.filterProps) {
      filterProps = style.filterProps;
      delete style.filterProps;
    }
    /* eslint-disable react/forbid-foreign-prop-types */


    if (style.propTypes) {
      propTypes = style.propTypes;
      delete style.propTypes;
    }
    /* eslint-enable react/forbid-foreign-prop-types */


    const StyledComponent = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.forwardRef(function StyledComponent(props, ref) {
      const {
        children,
        className: classNameProp,
        clone,
        component: ComponentProp
      } = props,
            other = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__.default)(props, _excluded2);

      const classes = useStyles(props);
      const className = (0,clsx__WEBPACK_IMPORTED_MODULE_3__.default)(classes.root, classNameProp);
      let spread = other;

      if (filterProps) {
        spread = omit(spread, filterProps);
      }

      if (clone) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.cloneElement(children, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({
          className: (0,clsx__WEBPACK_IMPORTED_MODULE_3__.default)(children.props.className, className)
        }, spread));
      }

      if (typeof children === 'function') {
        return children((0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({
          className
        }, spread));
      }

      const FinalComponent = ComponentProp || Component;
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(FinalComponent, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({
        ref: ref,
        className: className
      }, spread, {
        children: children
      }));
    });
     true ? StyledComponent.propTypes = (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({
      /**
       * A render function or node.
       */
      children: prop_types__WEBPACK_IMPORTED_MODULE_4___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_4___default().node), (prop_types__WEBPACK_IMPORTED_MODULE_4___default().func)]),

      /**
       * @ignore
       */
      className: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().string),

      /**
       * If `true`, the component will recycle it's children HTML element.
       * It's using `React.cloneElement` internally.
       *
       * This prop will be deprecated and removed in v5
       */
      clone: (0,_mui_utils__WEBPACK_IMPORTED_MODULE_7__.chainPropTypes)((prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool), props => {
        if (props.clone && props.component) {
          return new Error('You can not use the clone and component prop at the same time.');
        }

        return null;
      }),

      /**
       * The component used for the root node.
       * Either a string to use a HTML element or a component.
       */
      component: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().elementType)
    }, propTypes) : 0;

    if (true) {
      StyledComponent.displayName = `Styled(${classNamePrefix})`;
    }

    hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_5___default()(StyledComponent, Component);
    return StyledComponent;
  };

  return componentCreator;
}

/***/ }),

/***/ "./node_modules/@mui/styles/useThemeVariants/index.js":
/*!************************************************************!*\
  !*** ./node_modules/@mui/styles/useThemeVariants/index.js ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* reexport safe */ _useThemeVariants__WEBPACK_IMPORTED_MODULE_0__.default; }
/* harmony export */ });
/* harmony import */ var _useThemeVariants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./useThemeVariants */ "./node_modules/@mui/styles/useThemeVariants/useThemeVariants.js");


/***/ }),

/***/ "./node_modules/@mui/styles/useThemeVariants/useThemeVariants.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@mui/styles/useThemeVariants/useThemeVariants.js ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _useTheme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../useTheme */ "./node_modules/@mui/styles/useTheme/index.js");
/* harmony import */ var _propsToClassKey__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../propsToClassKey */ "./node_modules/@mui/styles/propsToClassKey/index.js");



const useThemeVariants = (props, name) => {
  const {
    classes = {}
  } = props;
  const theme = (0,_useTheme__WEBPACK_IMPORTED_MODULE_0__.default)();
  let variantsClasses = '';

  if (theme && theme.components && theme.components[name] && theme.components[name].variants) {
    const themeVariants = theme.components[name].variants;
    themeVariants.forEach(themeVariant => {
      let isMatch = true;
      Object.keys(themeVariant.props).forEach(key => {
        if (props[key] !== themeVariant.props[key]) {
          isMatch = false;
        }
      });

      if (isMatch) {
        variantsClasses = `${variantsClasses}${classes[(0,_propsToClassKey__WEBPACK_IMPORTED_MODULE_1__.default)(themeVariant.props)]} `;
      }
    });
  }

  return variantsClasses;
};

/* harmony default export */ __webpack_exports__["default"] = (useThemeVariants);

/***/ }),

/***/ "./node_modules/@mui/styles/useTheme/index.js":
/*!****************************************************!*\
  !*** ./node_modules/@mui/styles/useTheme/index.js ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* reexport safe */ _mui_private_theming_useTheme__WEBPACK_IMPORTED_MODULE_0__.default; }
/* harmony export */ });
/* harmony import */ var _mui_private_theming_useTheme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @mui/private-theming/useTheme */ "./node_modules/@mui/private-theming/useTheme/index.js");


/***/ }),

/***/ "./node_modules/@mui/styles/withStyles/index.js":
/*!******************************************************!*\
  !*** ./node_modules/@mui/styles/withStyles/index.js ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* reexport safe */ _withStyles__WEBPACK_IMPORTED_MODULE_0__.default; }
/* harmony export */ });
/* harmony import */ var _withStyles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./withStyles */ "./node_modules/@mui/styles/withStyles/withStyles.js");


/***/ }),

/***/ "./node_modules/@mui/styles/withStyles/withStyles.js":
/*!***********************************************************!*\
  !*** ./node_modules/@mui/styles/withStyles/withStyles.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! hoist-non-react-statics */ "./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js");
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _mui_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/utils */ "./node_modules/@mui/utils/esm/index.js");
/* harmony import */ var _makeStyles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../makeStyles */ "./node_modules/@mui/styles/makeStyles/index.js");
/* harmony import */ var _getThemeProps__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../getThemeProps */ "./node_modules/@mui/styles/getThemeProps/index.js");
/* harmony import */ var _useTheme__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../useTheme */ "./node_modules/@mui/styles/useTheme/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);


const _excluded = ["defaultTheme", "withTheme", "name"],
      _excluded2 = ["classes"];






 // Link a style sheet with a component.
// It does not modify the component passed to it;
// instead, it returns a new component, with a `classes` property.



const withStyles = (stylesOrCreator, options = {}) => Component => {
  const {
    defaultTheme,
    withTheme = false,
    name
  } = options,
        stylesOptions = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__.default)(options, _excluded);

  if (true) {
    if (Component === undefined) {
      throw new Error(['You are calling withStyles(styles)(Component) with an undefined component.', 'You may have forgotten to import it.'].join('\n'));
    }
  }

  let classNamePrefix = name;

  if (true) {
    if (!name) {
      // Provide a better DX outside production.
      const displayName = (0,_mui_utils__WEBPACK_IMPORTED_MODULE_6__.getDisplayName)(Component);

      if (displayName !== undefined) {
        classNamePrefix = displayName;
      }
    }
  }

  const useStyles = (0,_makeStyles__WEBPACK_IMPORTED_MODULE_7__.default)(stylesOrCreator, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({
    defaultTheme,
    Component,
    name: name || Component.displayName,
    classNamePrefix
  }, stylesOptions));
  const WithStyles = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.forwardRef(function WithStyles(props, ref) {
    const other = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__.default)(props, _excluded2); // The wrapper receives only user supplied props, which could be a subset of
    // the actual props Component might receive due to merging with defaultProps.
    // So copying it here would give us the same result in the wrapper as well.


    const classes = useStyles((0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({}, Component.defaultProps, props));
    let theme;
    let more = other;

    if (typeof name === 'string' || withTheme) {
      // name and withTheme are invariant in the outer scope
      // eslint-disable-next-line react-hooks/rules-of-hooks
      theme = (0,_useTheme__WEBPACK_IMPORTED_MODULE_8__.default)() || defaultTheme;

      if (name) {
        more = (0,_getThemeProps__WEBPACK_IMPORTED_MODULE_9__.default)({
          theme,
          name,
          props: other
        });
      } // Provide the theme to the wrapped component.
      // So we don't have to use the `withTheme()` Higher-order Component.


      if (withTheme && !more.theme) {
        more.theme = theme;
      }
    }

    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(Component, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({
      ref: ref,
      classes: classes
    }, more));
  });
   true ? WithStyles.propTypes = {
    /**
     * Override or extend the styles applied to the component.
     */
    classes: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().object)
  } : 0;

  if (true) {
    WithStyles.displayName = `WithStyles(${(0,_mui_utils__WEBPACK_IMPORTED_MODULE_6__.getDisplayName)(Component)})`;
  }

  hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_4___default()(WithStyles, Component);

  if (true) {
    // Exposed for test purposes.
    WithStyles.Naked = Component;
    WithStyles.options = options;
    WithStyles.useStyles = useStyles;
  }

  return WithStyles;
};

/* harmony default export */ __webpack_exports__["default"] = (withStyles);

/***/ }),

/***/ "./node_modules/@mui/styles/withTheme/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/@mui/styles/withTheme/index.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* reexport safe */ _withTheme__WEBPACK_IMPORTED_MODULE_0__.default; }
/* harmony export */ });
/* harmony import */ var _withTheme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./withTheme */ "./node_modules/@mui/styles/withTheme/withTheme.js");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _withTheme__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = function(key) { return _withTheme__WEBPACK_IMPORTED_MODULE_0__[key]; }.bind(0, __WEBPACK_IMPORT_KEY__)
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);



/***/ }),

/***/ "./node_modules/@mui/styles/withTheme/withTheme.js":
/*!*********************************************************!*\
  !*** ./node_modules/@mui/styles/withTheme/withTheme.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "withThemeCreator": function() { return /* binding */ withThemeCreator; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! hoist-non-react-statics */ "./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js");
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/utils */ "./node_modules/@mui/utils/esm/index.js");
/* harmony import */ var _useTheme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../useTheme */ "./node_modules/@mui/styles/useTheme/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);






function withThemeCreator(options = {}) {
  const {
    defaultTheme
  } = options;

  const withTheme = Component => {
    if (true) {
      if (Component === undefined) {
        throw new Error(['You are calling withTheme(Component) with an undefined component.', 'You may have forgotten to import it.'].join('\n'));
      }
    }

    const WithTheme = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(function WithTheme(props, ref) {
      const theme = (0,_useTheme__WEBPACK_IMPORTED_MODULE_4__.default)() || defaultTheme;
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(Component, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({
        theme: theme,
        ref: ref
      }, props));
    });

    if (true) {
      WithTheme.displayName = `WithTheme(${(0,_mui_utils__WEBPACK_IMPORTED_MODULE_5__.getDisplayName)(Component)})`;
    }

    hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_2___default()(WithTheme, Component);

    if (true) {
      // Exposed for test purposes.
      WithTheme.Naked = Component;
    }

    return WithTheme;
  };

  return withTheme;
} // Provide the theme object as a prop to the input component.
// It's an alternative API to useTheme().
// We encourage the usage of useTheme() where possible.

const withTheme = withThemeCreator();
/* harmony default export */ __webpack_exports__["default"] = (withTheme);

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
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Header */ "./components/Header.js");
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
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_Header__WEBPACK_IMPORTED_MODULE_1__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
      className: classes.root,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("main", {
        children: children
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 19,
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


/***/ }),

/***/ "./node_modules/css-vendor/dist/css-vendor.esm.js":
/*!********************************************************!*\
  !*** ./node_modules/css-vendor/dist/css-vendor.esm.js ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "prefix": function() { return /* binding */ prefix; },
/* harmony export */   "supportedKeyframes": function() { return /* binding */ supportedKeyframes; },
/* harmony export */   "supportedProperty": function() { return /* binding */ supportedProperty; },
/* harmony export */   "supportedValue": function() { return /* binding */ supportedValue; }
/* harmony export */ });
/* harmony import */ var is_in_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! is-in-browser */ "./node_modules/is-in-browser/dist/module.js");
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");



// Export javascript style and css style vendor prefixes.
var js = '';
var css = '';
var vendor = '';
var browser = '';
var isTouch = is_in_browser__WEBPACK_IMPORTED_MODULE_0__.default && 'ontouchstart' in document.documentElement; // We should not do anything if required serverside.

if (is_in_browser__WEBPACK_IMPORTED_MODULE_0__.default) {
  // Order matters. We need to check Webkit the last one because
  // other vendors use to add Webkit prefixes to some properties
  var jsCssMap = {
    Moz: '-moz-',
    ms: '-ms-',
    O: '-o-',
    Webkit: '-webkit-'
  };

  var _document$createEleme = document.createElement('p'),
      style = _document$createEleme.style;

  var testProp = 'Transform';

  for (var key in jsCssMap) {
    if (key + testProp in style) {
      js = key;
      css = jsCssMap[key];
      break;
    }
  } // Correctly detect the Edge browser.


  if (js === 'Webkit' && 'msHyphens' in style) {
    js = 'ms';
    css = jsCssMap.ms;
    browser = 'edge';
  } // Correctly detect the Safari browser.


  if (js === 'Webkit' && '-apple-trailing-word' in style) {
    vendor = 'apple';
  }
}
/**
 * Vendor prefix string for the current browser.
 *
 * @type {{js: String, css: String, vendor: String, browser: String}}
 * @api public
 */


var prefix = {
  js: js,
  css: css,
  vendor: vendor,
  browser: browser,
  isTouch: isTouch
};

/**
 * Test if a keyframe at-rule should be prefixed or not
 *
 * @param {String} vendor prefix string for the current browser.
 * @return {String}
 * @api public
 */

function supportedKeyframes(key) {
  // Keyframes is already prefixed. e.g. key = '@-webkit-keyframes a'
  if (key[1] === '-') return key; // No need to prefix IE/Edge. Older browsers will ignore unsupported rules.
  // https://caniuse.com/#search=keyframes

  if (prefix.js === 'ms') return key;
  return "@" + prefix.css + "keyframes" + key.substr(10);
}

// https://caniuse.com/#search=appearance

var appearence = {
  noPrefill: ['appearance'],
  supportedProperty: function supportedProperty(prop) {
    if (prop !== 'appearance') return false;
    if (prefix.js === 'ms') return "-webkit-" + prop;
    return prefix.css + prop;
  }
};

// https://caniuse.com/#search=color-adjust

var colorAdjust = {
  noPrefill: ['color-adjust'],
  supportedProperty: function supportedProperty(prop) {
    if (prop !== 'color-adjust') return false;
    if (prefix.js === 'Webkit') return prefix.css + "print-" + prop;
    return prop;
  }
};

var regExp = /[-\s]+(.)?/g;
/**
 * Replaces the letter with the capital letter
 *
 * @param {String} match
 * @param {String} c
 * @return {String}
 * @api private
 */

function toUpper(match, c) {
  return c ? c.toUpperCase() : '';
}
/**
 * Convert dash separated strings to camel-cased.
 *
 * @param {String} str
 * @return {String}
 * @api private
 */


function camelize(str) {
  return str.replace(regExp, toUpper);
}

/**
 * Convert dash separated strings to pascal cased.
 *
 * @param {String} str
 * @return {String}
 * @api private
 */

function pascalize(str) {
  return camelize("-" + str);
}

// but we can use a longhand property instead.
// https://caniuse.com/#search=mask

var mask = {
  noPrefill: ['mask'],
  supportedProperty: function supportedProperty(prop, style) {
    if (!/^mask/.test(prop)) return false;

    if (prefix.js === 'Webkit') {
      var longhand = 'mask-image';

      if (camelize(longhand) in style) {
        return prop;
      }

      if (prefix.js + pascalize(longhand) in style) {
        return prefix.css + prop;
      }
    }

    return prop;
  }
};

// https://caniuse.com/#search=text-orientation

var textOrientation = {
  noPrefill: ['text-orientation'],
  supportedProperty: function supportedProperty(prop) {
    if (prop !== 'text-orientation') return false;

    if (prefix.vendor === 'apple' && !prefix.isTouch) {
      return prefix.css + prop;
    }

    return prop;
  }
};

// https://caniuse.com/#search=transform

var transform = {
  noPrefill: ['transform'],
  supportedProperty: function supportedProperty(prop, style, options) {
    if (prop !== 'transform') return false;

    if (options.transform) {
      return prop;
    }

    return prefix.css + prop;
  }
};

// https://caniuse.com/#search=transition

var transition = {
  noPrefill: ['transition'],
  supportedProperty: function supportedProperty(prop, style, options) {
    if (prop !== 'transition') return false;

    if (options.transition) {
      return prop;
    }

    return prefix.css + prop;
  }
};

// https://caniuse.com/#search=writing-mode

var writingMode = {
  noPrefill: ['writing-mode'],
  supportedProperty: function supportedProperty(prop) {
    if (prop !== 'writing-mode') return false;

    if (prefix.js === 'Webkit' || prefix.js === 'ms' && prefix.browser !== 'edge') {
      return prefix.css + prop;
    }

    return prop;
  }
};

// https://caniuse.com/#search=user-select

var userSelect = {
  noPrefill: ['user-select'],
  supportedProperty: function supportedProperty(prop) {
    if (prop !== 'user-select') return false;

    if (prefix.js === 'Moz' || prefix.js === 'ms' || prefix.vendor === 'apple') {
      return prefix.css + prop;
    }

    return prop;
  }
};

// https://caniuse.com/#search=multicolumn
// https://github.com/postcss/autoprefixer/issues/491
// https://github.com/postcss/autoprefixer/issues/177

var breakPropsOld = {
  supportedProperty: function supportedProperty(prop, style) {
    if (!/^break-/.test(prop)) return false;

    if (prefix.js === 'Webkit') {
      var jsProp = "WebkitColumn" + pascalize(prop);
      return jsProp in style ? prefix.css + "column-" + prop : false;
    }

    if (prefix.js === 'Moz') {
      var _jsProp = "page" + pascalize(prop);

      return _jsProp in style ? "page-" + prop : false;
    }

    return false;
  }
};

// See https://github.com/postcss/autoprefixer/issues/324.

var inlineLogicalOld = {
  supportedProperty: function supportedProperty(prop, style) {
    if (!/^(border|margin|padding)-inline/.test(prop)) return false;
    if (prefix.js === 'Moz') return prop;
    var newProp = prop.replace('-inline', '');
    return prefix.js + pascalize(newProp) in style ? prefix.css + newProp : false;
  }
};

// Camelization is required because we can't test using.
// CSS syntax for e.g. in FF.

var unprefixed = {
  supportedProperty: function supportedProperty(prop, style) {
    return camelize(prop) in style ? prop : false;
  }
};

var prefixed = {
  supportedProperty: function supportedProperty(prop, style) {
    var pascalized = pascalize(prop); // Return custom CSS variable without prefixing.

    if (prop[0] === '-') return prop; // Return already prefixed value without prefixing.

    if (prop[0] === '-' && prop[1] === '-') return prop;
    if (prefix.js + pascalized in style) return prefix.css + prop; // Try webkit fallback.

    if (prefix.js !== 'Webkit' && "Webkit" + pascalized in style) return "-webkit-" + prop;
    return false;
  }
};

// https://caniuse.com/#search=scroll-snap

var scrollSnap = {
  supportedProperty: function supportedProperty(prop) {
    if (prop.substring(0, 11) !== 'scroll-snap') return false;

    if (prefix.js === 'ms') {
      return "" + prefix.css + prop;
    }

    return prop;
  }
};

// https://caniuse.com/#search=overscroll-behavior

var overscrollBehavior = {
  supportedProperty: function supportedProperty(prop) {
    if (prop !== 'overscroll-behavior') return false;

    if (prefix.js === 'ms') {
      return prefix.css + "scroll-chaining";
    }

    return prop;
  }
};

var propMap = {
  'flex-grow': 'flex-positive',
  'flex-shrink': 'flex-negative',
  'flex-basis': 'flex-preferred-size',
  'justify-content': 'flex-pack',
  order: 'flex-order',
  'align-items': 'flex-align',
  'align-content': 'flex-line-pack' // 'align-self' is handled by 'align-self' plugin.

}; // Support old flex spec from 2012.

var flex2012 = {
  supportedProperty: function supportedProperty(prop, style) {
    var newProp = propMap[prop];
    if (!newProp) return false;
    return prefix.js + pascalize(newProp) in style ? prefix.css + newProp : false;
  }
};

var propMap$1 = {
  flex: 'box-flex',
  'flex-grow': 'box-flex',
  'flex-direction': ['box-orient', 'box-direction'],
  order: 'box-ordinal-group',
  'align-items': 'box-align',
  'flex-flow': ['box-orient', 'box-direction'],
  'justify-content': 'box-pack'
};
var propKeys = Object.keys(propMap$1);

var prefixCss = function prefixCss(p) {
  return prefix.css + p;
}; // Support old flex spec from 2009.


var flex2009 = {
  supportedProperty: function supportedProperty(prop, style, _ref) {
    var multiple = _ref.multiple;

    if (propKeys.indexOf(prop) > -1) {
      var newProp = propMap$1[prop];

      if (!Array.isArray(newProp)) {
        return prefix.js + pascalize(newProp) in style ? prefix.css + newProp : false;
      }

      if (!multiple) return false;

      for (var i = 0; i < newProp.length; i++) {
        if (!(prefix.js + pascalize(newProp[0]) in style)) {
          return false;
        }
      }

      return newProp.map(prefixCss);
    }

    return false;
  }
};

// plugins = [
//   ...plugins,
//    breakPropsOld,
//    inlineLogicalOld,
//    unprefixed,
//    prefixed,
//    scrollSnap,
//    flex2012,
//    flex2009
// ]
// Plugins without 'noPrefill' value, going last.
// 'flex-*' plugins should be at the bottom.
// 'flex2009' going after 'flex2012'.
// 'prefixed' going after 'unprefixed'

var plugins = [appearence, colorAdjust, mask, textOrientation, transform, transition, writingMode, userSelect, breakPropsOld, inlineLogicalOld, unprefixed, prefixed, scrollSnap, overscrollBehavior, flex2012, flex2009];
var propertyDetectors = plugins.filter(function (p) {
  return p.supportedProperty;
}).map(function (p) {
  return p.supportedProperty;
});
var noPrefill = plugins.filter(function (p) {
  return p.noPrefill;
}).reduce(function (a, p) {
  a.push.apply(a, (0,_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__.default)(p.noPrefill));
  return a;
}, []);

var el;
var cache = {};

if (is_in_browser__WEBPACK_IMPORTED_MODULE_0__.default) {
  el = document.createElement('p'); // We test every property on vendor prefix requirement.
  // Once tested, result is cached. It gives us up to 70% perf boost.
  // http://jsperf.com/element-style-object-access-vs-plain-object
  //
  // Prefill cache with known css properties to reduce amount of
  // properties we need to feature test at runtime.
  // http://davidwalsh.name/vendor-prefix

  var computed = window.getComputedStyle(document.documentElement, '');

  for (var key$1 in computed) {
    // eslint-disable-next-line no-restricted-globals
    if (!isNaN(key$1)) cache[computed[key$1]] = computed[key$1];
  } // Properties that cannot be correctly detected using the
  // cache prefill method.


  noPrefill.forEach(function (x) {
    return delete cache[x];
  });
}
/**
 * Test if a property is supported, returns supported property with vendor
 * prefix if required. Returns `false` if not supported.
 *
 * @param {String} prop dash separated
 * @param {Object} [options]
 * @return {String|Boolean}
 * @api public
 */


function supportedProperty(prop, options) {
  if (options === void 0) {
    options = {};
  }

  // For server-side rendering.
  if (!el) return prop; // Remove cache for benchmark tests or return property from the cache.

  if ( true && cache[prop] != null) {
    return cache[prop];
  } // Check if 'transition' or 'transform' natively supported in browser.


  if (prop === 'transition' || prop === 'transform') {
    options[prop] = prop in el.style;
  } // Find a plugin for current prefix property.


  for (var i = 0; i < propertyDetectors.length; i++) {
    cache[prop] = propertyDetectors[i](prop, el.style, options); // Break loop, if value found.

    if (cache[prop]) break;
  } // Reset styles for current property.
  // Firefox can even throw an error for invalid properties, e.g., "0".


  try {
    el.style[prop] = '';
  } catch (err) {
    return false;
  }

  return cache[prop];
}

var cache$1 = {};
var transitionProperties = {
  transition: 1,
  'transition-property': 1,
  '-webkit-transition': 1,
  '-webkit-transition-property': 1
};
var transPropsRegExp = /(^\s*[\w-]+)|, (\s*[\w-]+)(?![^()]*\))/g;
var el$1;
/**
 * Returns prefixed value transition/transform if needed.
 *
 * @param {String} match
 * @param {String} p1
 * @param {String} p2
 * @return {String}
 * @api private
 */

function prefixTransitionCallback(match, p1, p2) {
  if (p1 === 'var') return 'var';
  if (p1 === 'all') return 'all';
  if (p2 === 'all') return ', all';
  var prefixedValue = p1 ? supportedProperty(p1) : ", " + supportedProperty(p2);
  if (!prefixedValue) return p1 || p2;
  return prefixedValue;
}

if (is_in_browser__WEBPACK_IMPORTED_MODULE_0__.default) el$1 = document.createElement('p');
/**
 * Returns prefixed value if needed. Returns `false` if value is not supported.
 *
 * @param {String} property
 * @param {String} value
 * @return {String|Boolean}
 * @api public
 */

function supportedValue(property, value) {
  // For server-side rendering.
  var prefixedValue = value;
  if (!el$1 || property === 'content') return value; // It is a string or a number as a string like '1'.
  // We want only prefixable values here.
  // eslint-disable-next-line no-restricted-globals

  if (typeof prefixedValue !== 'string' || !isNaN(parseInt(prefixedValue, 10))) {
    return prefixedValue;
  } // Create cache key for current value.


  var cacheKey = property + prefixedValue; // Remove cache for benchmark tests or return value from cache.

  if ( true && cache$1[cacheKey] != null) {
    return cache$1[cacheKey];
  } // IE can even throw an error in some cases, for e.g. style.content = 'bar'.


  try {
    // Test value as it is.
    el$1.style[property] = prefixedValue;
  } catch (err) {
    // Return false if value not supported.
    cache$1[cacheKey] = false;
    return false;
  } // If 'transition' or 'transition-property' property.


  if (transitionProperties[property]) {
    prefixedValue = prefixedValue.replace(transPropsRegExp, prefixTransitionCallback);
  } else if (el$1.style[property] === '') {
    // Value with a vendor prefix.
    prefixedValue = prefix.css + prefixedValue; // Hardcode test to convert "flex" to "-ms-flexbox" for IE10.

    if (prefixedValue === '-ms-flex') el$1.style[property] = '-ms-flexbox'; // Test prefixed value.

    el$1.style[property] = prefixedValue; // Return false if value not supported.

    if (el$1.style[property] === '') {
      cache$1[cacheKey] = false;
      return false;
    }
  } // Reset styles for current property.


  el$1.style[property] = ''; // Write current value to cache.

  cache$1[cacheKey] = prefixedValue;
  return cache$1[cacheKey];
}




/***/ }),

/***/ "./node_modules/hyphenate-style-name/index.js":
/*!****************************************************!*\
  !*** ./node_modules/hyphenate-style-name/index.js ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* eslint-disable no-var, prefer-template */
var uppercasePattern = /[A-Z]/g
var msPattern = /^ms-/
var cache = {}

function toHyphenLower(match) {
  return '-' + match.toLowerCase()
}

function hyphenateStyleName(name) {
  if (cache.hasOwnProperty(name)) {
    return cache[name]
  }

  var hName = name.replace(uppercasePattern, toHyphenLower)
  return (cache[name] = msPattern.test(hName) ? '-' + hName : hName)
}

/* harmony default export */ __webpack_exports__["default"] = (hyphenateStyleName);


/***/ }),

/***/ "./node_modules/is-in-browser/dist/module.js":
/*!***************************************************!*\
  !*** ./node_modules/is-in-browser/dist/module.js ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isBrowser": function() { return /* binding */ isBrowser; }
/* harmony export */ });
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var isBrowser = (typeof window === "undefined" ? "undefined" : _typeof(window)) === "object" && (typeof document === "undefined" ? "undefined" : _typeof(document)) === 'object' && document.nodeType === 9;

/* harmony default export */ __webpack_exports__["default"] = (isBrowser);


/***/ }),

/***/ "./node_modules/jss-plugin-camel-case/dist/jss-plugin-camel-case.esm.js":
/*!******************************************************************************!*\
  !*** ./node_modules/jss-plugin-camel-case/dist/jss-plugin-camel-case.esm.js ***!
  \******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var hyphenate_style_name__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hyphenate-style-name */ "./node_modules/hyphenate-style-name/index.js");


/**
 * Convert camel cased property names to dash separated.
 */

function convertCase(style) {
  var converted = {};

  for (var prop in style) {
    var key = prop.indexOf('--') === 0 ? prop : (0,hyphenate_style_name__WEBPACK_IMPORTED_MODULE_0__.default)(prop);
    converted[key] = style[prop];
  }

  if (style.fallbacks) {
    if (Array.isArray(style.fallbacks)) converted.fallbacks = style.fallbacks.map(convertCase);else converted.fallbacks = convertCase(style.fallbacks);
  }

  return converted;
}
/**
 * Allow camel cased property names by converting them back to dasherized.
 */


function camelCase() {
  function onProcessStyle(style) {
    if (Array.isArray(style)) {
      // Handle rules like @font-face, which can have multiple styles in an array
      for (var index = 0; index < style.length; index++) {
        style[index] = convertCase(style[index]);
      }

      return style;
    }

    return convertCase(style);
  }

  function onChangeValue(value, prop, rule) {
    if (prop.indexOf('--') === 0) {
      return value;
    }

    var hyphenatedProp = (0,hyphenate_style_name__WEBPACK_IMPORTED_MODULE_0__.default)(prop); // There was no camel case in place

    if (prop === hyphenatedProp) return value;
    rule.prop(hyphenatedProp, value); // Core will ignore that property value we set the proper one above.

    return null;
  }

  return {
    onProcessStyle: onProcessStyle,
    onChangeValue: onChangeValue
  };
}

/* harmony default export */ __webpack_exports__["default"] = (camelCase);


/***/ }),

/***/ "./node_modules/jss-plugin-default-unit/dist/jss-plugin-default-unit.esm.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/jss-plugin-default-unit/dist/jss-plugin-default-unit.esm.js ***!
  \**********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jss */ "./node_modules/jss/dist/jss.esm.js");


var px = jss__WEBPACK_IMPORTED_MODULE_0__.hasCSSTOMSupport && CSS ? CSS.px : 'px';
var ms = jss__WEBPACK_IMPORTED_MODULE_0__.hasCSSTOMSupport && CSS ? CSS.ms : 'ms';
var percent = jss__WEBPACK_IMPORTED_MODULE_0__.hasCSSTOMSupport && CSS ? CSS.percent : '%';
/**
 * Generated jss-plugin-default-unit CSS property units
 */

var defaultUnits = {
  // Animation properties
  'animation-delay': ms,
  'animation-duration': ms,
  // Background properties
  'background-position': px,
  'background-position-x': px,
  'background-position-y': px,
  'background-size': px,
  // Border Properties
  border: px,
  'border-bottom': px,
  'border-bottom-left-radius': px,
  'border-bottom-right-radius': px,
  'border-bottom-width': px,
  'border-left': px,
  'border-left-width': px,
  'border-radius': px,
  'border-right': px,
  'border-right-width': px,
  'border-top': px,
  'border-top-left-radius': px,
  'border-top-right-radius': px,
  'border-top-width': px,
  'border-width': px,
  'border-block': px,
  'border-block-end': px,
  'border-block-end-width': px,
  'border-block-start': px,
  'border-block-start-width': px,
  'border-block-width': px,
  'border-inline': px,
  'border-inline-end': px,
  'border-inline-end-width': px,
  'border-inline-start': px,
  'border-inline-start-width': px,
  'border-inline-width': px,
  'border-start-start-radius': px,
  'border-start-end-radius': px,
  'border-end-start-radius': px,
  'border-end-end-radius': px,
  // Margin properties
  margin: px,
  'margin-bottom': px,
  'margin-left': px,
  'margin-right': px,
  'margin-top': px,
  'margin-block': px,
  'margin-block-end': px,
  'margin-block-start': px,
  'margin-inline': px,
  'margin-inline-end': px,
  'margin-inline-start': px,
  // Padding properties
  padding: px,
  'padding-bottom': px,
  'padding-left': px,
  'padding-right': px,
  'padding-top': px,
  'padding-block': px,
  'padding-block-end': px,
  'padding-block-start': px,
  'padding-inline': px,
  'padding-inline-end': px,
  'padding-inline-start': px,
  // Mask properties
  'mask-position-x': px,
  'mask-position-y': px,
  'mask-size': px,
  // Width and height properties
  height: px,
  width: px,
  'min-height': px,
  'max-height': px,
  'min-width': px,
  'max-width': px,
  // Position properties
  bottom: px,
  left: px,
  top: px,
  right: px,
  inset: px,
  'inset-block': px,
  'inset-block-end': px,
  'inset-block-start': px,
  'inset-inline': px,
  'inset-inline-end': px,
  'inset-inline-start': px,
  // Shadow properties
  'box-shadow': px,
  'text-shadow': px,
  // Column properties
  'column-gap': px,
  'column-rule': px,
  'column-rule-width': px,
  'column-width': px,
  // Font and text properties
  'font-size': px,
  'font-size-delta': px,
  'letter-spacing': px,
  'text-decoration-thickness': px,
  'text-indent': px,
  'text-stroke': px,
  'text-stroke-width': px,
  'word-spacing': px,
  // Motion properties
  motion: px,
  'motion-offset': px,
  // Outline properties
  outline: px,
  'outline-offset': px,
  'outline-width': px,
  // Perspective properties
  perspective: px,
  'perspective-origin-x': percent,
  'perspective-origin-y': percent,
  // Transform properties
  'transform-origin': percent,
  'transform-origin-x': percent,
  'transform-origin-y': percent,
  'transform-origin-z': percent,
  // Transition properties
  'transition-delay': ms,
  'transition-duration': ms,
  // Alignment properties
  'vertical-align': px,
  'flex-basis': px,
  // Some random properties
  'shape-margin': px,
  size: px,
  gap: px,
  // Grid properties
  grid: px,
  'grid-gap': px,
  'row-gap': px,
  'grid-row-gap': px,
  'grid-column-gap': px,
  'grid-template-rows': px,
  'grid-template-columns': px,
  'grid-auto-rows': px,
  'grid-auto-columns': px,
  // Not existing properties.
  // Used to avoid issues with jss-plugin-expand integration.
  'box-shadow-x': px,
  'box-shadow-y': px,
  'box-shadow-blur': px,
  'box-shadow-spread': px,
  'font-line-height': px,
  'text-shadow-x': px,
  'text-shadow-y': px,
  'text-shadow-blur': px
};

/**
 * Clones the object and adds a camel cased property version.
 */

function addCamelCasedVersion(obj) {
  var regExp = /(-[a-z])/g;

  var replace = function replace(str) {
    return str[1].toUpperCase();
  };

  var newObj = {};

  for (var key in obj) {
    newObj[key] = obj[key];
    newObj[key.replace(regExp, replace)] = obj[key];
  }

  return newObj;
}

var units = addCamelCasedVersion(defaultUnits);
/**
 * Recursive deep style passing function
 */

function iterate(prop, value, options) {
  if (value == null) return value;

  if (Array.isArray(value)) {
    for (var i = 0; i < value.length; i++) {
      value[i] = iterate(prop, value[i], options);
    }
  } else if (typeof value === 'object') {
    if (prop === 'fallbacks') {
      for (var innerProp in value) {
        value[innerProp] = iterate(innerProp, value[innerProp], options);
      }
    } else {
      for (var _innerProp in value) {
        value[_innerProp] = iterate(prop + "-" + _innerProp, value[_innerProp], options);
      }
    } // eslint-disable-next-line no-restricted-globals

  } else if (typeof value === 'number' && isNaN(value) === false) {
    var unit = options[prop] || units[prop]; // Add the unit if available, except for the special case of 0px.

    if (unit && !(value === 0 && unit === px)) {
      return typeof unit === 'function' ? unit(value).toString() : "" + value + unit;
    }

    return value.toString();
  }

  return value;
}
/**
 * Add unit to numeric values.
 */


function defaultUnit(options) {
  if (options === void 0) {
    options = {};
  }

  var camelCasedOptions = addCamelCasedVersion(options);

  function onProcessStyle(style, rule) {
    if (rule.type !== 'style') return style;

    for (var prop in style) {
      style[prop] = iterate(prop, style[prop], camelCasedOptions);
    }

    return style;
  }

  function onChangeValue(value, prop) {
    return iterate(prop, value, camelCasedOptions);
  }

  return {
    onProcessStyle: onProcessStyle,
    onChangeValue: onChangeValue
  };
}

/* harmony default export */ __webpack_exports__["default"] = (defaultUnit);


/***/ }),

/***/ "./node_modules/jss-plugin-global/dist/jss-plugin-global.esm.js":
/*!**********************************************************************!*\
  !*** ./node_modules/jss-plugin-global/dist/jss-plugin-global.esm.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var jss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jss */ "./node_modules/jss/dist/jss.esm.js");



var at = '@global';
var atPrefix = '@global ';

var GlobalContainerRule =
/*#__PURE__*/
function () {
  function GlobalContainerRule(key, styles, options) {
    this.type = 'global';
    this.at = at;
    this.isProcessed = false;
    this.key = key;
    this.options = options;
    this.rules = new jss__WEBPACK_IMPORTED_MODULE_1__.RuleList((0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({}, options, {
      parent: this
    }));

    for (var selector in styles) {
      this.rules.add(selector, styles[selector]);
    }

    this.rules.process();
  }
  /**
   * Get a rule.
   */


  var _proto = GlobalContainerRule.prototype;

  _proto.getRule = function getRule(name) {
    return this.rules.get(name);
  }
  /**
   * Create and register rule, run plugins.
   */
  ;

  _proto.addRule = function addRule(name, style, options) {
    var rule = this.rules.add(name, style, options);
    if (rule) this.options.jss.plugins.onProcessRule(rule);
    return rule;
  }
  /**
   * Get index of a rule.
   */
  ;

  _proto.indexOf = function indexOf(rule) {
    return this.rules.indexOf(rule);
  }
  /**
   * Generates a CSS string.
   */
  ;

  _proto.toString = function toString() {
    return this.rules.toString();
  };

  return GlobalContainerRule;
}();

var GlobalPrefixedRule =
/*#__PURE__*/
function () {
  function GlobalPrefixedRule(key, style, options) {
    this.type = 'global';
    this.at = at;
    this.isProcessed = false;
    this.key = key;
    this.options = options;
    var selector = key.substr(atPrefix.length);
    this.rule = options.jss.createRule(selector, style, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({}, options, {
      parent: this
    }));
  }

  var _proto2 = GlobalPrefixedRule.prototype;

  _proto2.toString = function toString(options) {
    return this.rule ? this.rule.toString(options) : '';
  };

  return GlobalPrefixedRule;
}();

var separatorRegExp = /\s*,\s*/g;

function addScope(selector, scope) {
  var parts = selector.split(separatorRegExp);
  var scoped = '';

  for (var i = 0; i < parts.length; i++) {
    scoped += scope + " " + parts[i].trim();
    if (parts[i + 1]) scoped += ', ';
  }

  return scoped;
}

function handleNestedGlobalContainerRule(rule, sheet) {
  var options = rule.options,
      style = rule.style;
  var rules = style ? style[at] : null;
  if (!rules) return;

  for (var name in rules) {
    sheet.addRule(name, rules[name], (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({}, options, {
      selector: addScope(name, rule.selector)
    }));
  }

  delete style[at];
}

function handlePrefixedGlobalRule(rule, sheet) {
  var options = rule.options,
      style = rule.style;

  for (var prop in style) {
    if (prop[0] !== '@' || prop.substr(0, at.length) !== at) continue;
    var selector = addScope(prop.substr(at.length), rule.selector);
    sheet.addRule(selector, style[prop], (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({}, options, {
      selector: selector
    }));
    delete style[prop];
  }
}
/**
 * Convert nested rules to separate, remove them from original styles.
 */


function jssGlobal() {
  function onCreateRule(name, styles, options) {
    if (!name) return null;

    if (name === at) {
      return new GlobalContainerRule(name, styles, options);
    }

    if (name[0] === '@' && name.substr(0, atPrefix.length) === atPrefix) {
      return new GlobalPrefixedRule(name, styles, options);
    }

    var parent = options.parent;

    if (parent) {
      if (parent.type === 'global' || parent.options.parent && parent.options.parent.type === 'global') {
        options.scoped = false;
      }
    }

    if (options.scoped === false) {
      options.selector = name;
    }

    return null;
  }

  function onProcessRule(rule, sheet) {
    if (rule.type !== 'style' || !sheet) return;
    handleNestedGlobalContainerRule(rule, sheet);
    handlePrefixedGlobalRule(rule, sheet);
  }

  return {
    onCreateRule: onCreateRule,
    onProcessRule: onProcessRule
  };
}

/* harmony default export */ __webpack_exports__["default"] = (jssGlobal);


/***/ }),

/***/ "./node_modules/jss-plugin-nested/dist/jss-plugin-nested.esm.js":
/*!**********************************************************************!*\
  !*** ./node_modules/jss-plugin-nested/dist/jss-plugin-nested.esm.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var tiny_warning__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tiny-warning */ "./node_modules/tiny-warning/dist/tiny-warning.esm.js");



var separatorRegExp = /\s*,\s*/g;
var parentRegExp = /&/g;
var refRegExp = /\$([\w-]+)/g;
/**
 * Convert nested rules to separate, remove them from original styles.
 */

function jssNested() {
  // Get a function to be used for $ref replacement.
  function getReplaceRef(container, sheet) {
    return function (match, key) {
      var rule = container.getRule(key) || sheet && sheet.getRule(key);

      if (rule) {
        return rule.selector;
      }

       true ? (0,tiny_warning__WEBPACK_IMPORTED_MODULE_1__.default)(false, "[JSS] Could not find the referenced rule \"" + key + "\" in \"" + (container.options.meta || container.toString()) + "\".") : 0;
      return key;
    };
  }

  function replaceParentRefs(nestedProp, parentProp) {
    var parentSelectors = parentProp.split(separatorRegExp);
    var nestedSelectors = nestedProp.split(separatorRegExp);
    var result = '';

    for (var i = 0; i < parentSelectors.length; i++) {
      var parent = parentSelectors[i];

      for (var j = 0; j < nestedSelectors.length; j++) {
        var nested = nestedSelectors[j];
        if (result) result += ', '; // Replace all & by the parent or prefix & with the parent.

        result += nested.indexOf('&') !== -1 ? nested.replace(parentRegExp, parent) : parent + " " + nested;
      }
    }

    return result;
  }

  function getOptions(rule, container, prevOptions) {
    // Options has been already created, now we only increase index.
    if (prevOptions) return (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({}, prevOptions, {
      index: prevOptions.index + 1
    });
    var nestingLevel = rule.options.nestingLevel;
    nestingLevel = nestingLevel === undefined ? 1 : nestingLevel + 1;

    var options = (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({}, rule.options, {
      nestingLevel: nestingLevel,
      index: container.indexOf(rule) + 1 // We don't need the parent name to be set options for chlid.

    });

    delete options.name;
    return options;
  }

  function onProcessStyle(style, rule, sheet) {
    if (rule.type !== 'style') return style;
    var styleRule = rule;
    var container = styleRule.options.parent;
    var options;
    var replaceRef;

    for (var prop in style) {
      var isNested = prop.indexOf('&') !== -1;
      var isNestedConditional = prop[0] === '@';
      if (!isNested && !isNestedConditional) continue;
      options = getOptions(styleRule, container, options);

      if (isNested) {
        var selector = replaceParentRefs(prop, styleRule.selector); // Lazily create the ref replacer function just once for
        // all nested rules within the sheet.

        if (!replaceRef) replaceRef = getReplaceRef(container, sheet); // Replace all $refs.

        selector = selector.replace(refRegExp, replaceRef);
        container.addRule(selector, style[prop], (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({}, options, {
          selector: selector
        }));
      } else if (isNestedConditional) {
        // Place conditional right after the parent rule to ensure right ordering.
        container.addRule(prop, {}, options).addRule(styleRule.key, style[prop], {
          selector: styleRule.selector
        });
      }

      delete style[prop];
    }

    return style;
  }

  return {
    onProcessStyle: onProcessStyle
  };
}

/* harmony default export */ __webpack_exports__["default"] = (jssNested);


/***/ }),

/***/ "./node_modules/jss-plugin-props-sort/dist/jss-plugin-props-sort.esm.js":
/*!******************************************************************************!*\
  !*** ./node_modules/jss-plugin-props-sort/dist/jss-plugin-props-sort.esm.js ***!
  \******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/**
 * Sort props by length.
 */
function jssPropsSort() {
  var sort = function sort(prop0, prop1) {
    if (prop0.length === prop1.length) {
      return prop0 > prop1 ? 1 : -1;
    }

    return prop0.length - prop1.length;
  };

  return {
    onProcessStyle: function onProcessStyle(style, rule) {
      if (rule.type !== 'style') return style;
      var newStyle = {};
      var props = Object.keys(style).sort(sort);

      for (var i = 0; i < props.length; i++) {
        newStyle[props[i]] = style[props[i]];
      }

      return newStyle;
    }
  };
}

/* harmony default export */ __webpack_exports__["default"] = (jssPropsSort);


/***/ }),

/***/ "./node_modules/jss-plugin-rule-value-function/dist/jss-plugin-rule-value-function.esm.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/jss-plugin-rule-value-function/dist/jss-plugin-rule-value-function.esm.js ***!
  \************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tiny_warning__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tiny-warning */ "./node_modules/tiny-warning/dist/tiny-warning.esm.js");
/* harmony import */ var jss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jss */ "./node_modules/jss/dist/jss.esm.js");



var now = Date.now();
var fnValuesNs = "fnValues" + now;
var fnRuleNs = "fnStyle" + ++now;

var functionPlugin = function functionPlugin() {
  return {
    onCreateRule: function onCreateRule(name, decl, options) {
      if (typeof decl !== 'function') return null;
      var rule = (0,jss__WEBPACK_IMPORTED_MODULE_0__.createRule)(name, {}, options);
      rule[fnRuleNs] = decl;
      return rule;
    },
    onProcessStyle: function onProcessStyle(style, rule) {
      // We need to extract function values from the declaration, so that we can keep core unaware of them.
      // We need to do that only once.
      // We don't need to extract functions on each style update, since this can happen only once.
      // We don't support function values inside of function rules.
      if (fnValuesNs in rule || fnRuleNs in rule) return style;
      var fnValues = {};

      for (var prop in style) {
        var value = style[prop];
        if (typeof value !== 'function') continue;
        delete style[prop];
        fnValues[prop] = value;
      }

      rule[fnValuesNs] = fnValues;
      return style;
    },
    onUpdate: function onUpdate(data, rule, sheet, options) {
      var styleRule = rule;
      var fnRule = styleRule[fnRuleNs]; // If we have a style function, the entire rule is dynamic and style object
      // will be returned from that function.

      if (fnRule) {
        // Empty object will remove all currently defined props
        // in case function rule returns a falsy value.
        styleRule.style = fnRule(data) || {};

        if (true) {
          for (var prop in styleRule.style) {
            if (typeof styleRule.style[prop] === 'function') {
               true ? (0,tiny_warning__WEBPACK_IMPORTED_MODULE_1__.default)(false, '[JSS] Function values inside function rules are not supported.') : 0;
              break;
            }
          }
        }
      }

      var fnValues = styleRule[fnValuesNs]; // If we have a fn values map, it is a rule with function values.

      if (fnValues) {
        for (var _prop in fnValues) {
          styleRule.prop(_prop, fnValues[_prop](data), options);
        }
      }
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (functionPlugin);


/***/ }),

/***/ "./node_modules/jss-plugin-vendor-prefixer/dist/jss-plugin-vendor-prefixer.esm.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/jss-plugin-vendor-prefixer/dist/jss-plugin-vendor-prefixer.esm.js ***!
  \****************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var css_vendor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! css-vendor */ "./node_modules/css-vendor/dist/css-vendor.esm.js");
/* harmony import */ var jss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jss */ "./node_modules/jss/dist/jss.esm.js");



/**
 * Add vendor prefix to a property name when needed.
 */

function jssVendorPrefixer() {
  function onProcessRule(rule) {
    if (rule.type === 'keyframes') {
      var atRule = rule;
      atRule.at = (0,css_vendor__WEBPACK_IMPORTED_MODULE_0__.supportedKeyframes)(atRule.at);
    }
  }

  function prefixStyle(style) {
    for (var prop in style) {
      var value = style[prop];

      if (prop === 'fallbacks' && Array.isArray(value)) {
        style[prop] = value.map(prefixStyle);
        continue;
      }

      var changeProp = false;
      var supportedProp = (0,css_vendor__WEBPACK_IMPORTED_MODULE_0__.supportedProperty)(prop);
      if (supportedProp && supportedProp !== prop) changeProp = true;
      var changeValue = false;
      var supportedValue$1 = (0,css_vendor__WEBPACK_IMPORTED_MODULE_0__.supportedValue)(supportedProp, (0,jss__WEBPACK_IMPORTED_MODULE_1__.toCssValue)(value));
      if (supportedValue$1 && supportedValue$1 !== value) changeValue = true;

      if (changeProp || changeValue) {
        if (changeProp) delete style[prop];
        style[supportedProp || prop] = supportedValue$1 || value;
      }
    }

    return style;
  }

  function onProcessStyle(style, rule) {
    if (rule.type !== 'style') return style;
    return prefixStyle(style);
  }

  function onChangeValue(value, prop) {
    return (0,css_vendor__WEBPACK_IMPORTED_MODULE_0__.supportedValue)(prop, (0,jss__WEBPACK_IMPORTED_MODULE_1__.toCssValue)(value)) || value;
  }

  return {
    onProcessRule: onProcessRule,
    onProcessStyle: onProcessStyle,
    onChangeValue: onChangeValue
  };
}

/* harmony default export */ __webpack_exports__["default"] = (jssVendorPrefixer);


/***/ }),

/***/ "./node_modules/jss/dist/jss.esm.js":
/*!******************************************!*\
  !*** ./node_modules/jss/dist/jss.esm.js ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RuleList": function() { return /* binding */ RuleList; },
/* harmony export */   "SheetsManager": function() { return /* binding */ SheetsManager; },
/* harmony export */   "SheetsRegistry": function() { return /* binding */ SheetsRegistry; },
/* harmony export */   "create": function() { return /* binding */ createJss; },
/* harmony export */   "createGenerateId": function() { return /* binding */ createGenerateId; },
/* harmony export */   "createRule": function() { return /* binding */ createRule; },
/* harmony export */   "getDynamicStyles": function() { return /* binding */ getDynamicStyles; },
/* harmony export */   "hasCSSTOMSupport": function() { return /* binding */ hasCSSTOMSupport; },
/* harmony export */   "sheets": function() { return /* binding */ sheets; },
/* harmony export */   "toCssValue": function() { return /* binding */ toCssValue; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var is_in_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! is-in-browser */ "./node_modules/is-in-browser/dist/module.js");
/* harmony import */ var tiny_warning__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tiny-warning */ "./node_modules/tiny-warning/dist/tiny-warning.esm.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");








var plainObjectConstrurctor = {}.constructor;
function cloneStyle(style) {
  if (style == null || typeof style !== 'object') return style;
  if (Array.isArray(style)) return style.map(cloneStyle);
  if (style.constructor !== plainObjectConstrurctor) return style;
  var newStyle = {};

  for (var name in style) {
    newStyle[name] = cloneStyle(style[name]);
  }

  return newStyle;
}

/**
 * Create a rule instance.
 */

function createRule(name, decl, options) {
  if (name === void 0) {
    name = 'unnamed';
  }

  var jss = options.jss;
  var declCopy = cloneStyle(decl);
  var rule = jss.plugins.onCreateRule(name, declCopy, options);
  if (rule) return rule; // It is an at-rule and it has no instance.

  if (name[0] === '@') {
     true ? (0,tiny_warning__WEBPACK_IMPORTED_MODULE_6__.default)(false, "[JSS] Unknown rule " + name) : 0;
  }

  return null;
}

var join = function join(value, by) {
  var result = '';

  for (var i = 0; i < value.length; i++) {
    // Remove !important from the value, it will be readded later.
    if (value[i] === '!important') break;
    if (result) result += by;
    result += value[i];
  }

  return result;
};
/**
 * Converts JSS array value to a CSS string.
 *
 * `margin: [['5px', '10px']]` > `margin: 5px 10px;`
 * `border: ['1px', '2px']` > `border: 1px, 2px;`
 * `margin: [['5px', '10px'], '!important']` > `margin: 5px 10px !important;`
 * `color: ['red', !important]` > `color: red !important;`
 */


var toCssValue = function toCssValue(value, ignoreImportant) {
  if (ignoreImportant === void 0) {
    ignoreImportant = false;
  }

  if (!Array.isArray(value)) return value;
  var cssValue = ''; // Support space separated values via `[['5px', '10px']]`.

  if (Array.isArray(value[0])) {
    for (var i = 0; i < value.length; i++) {
      if (value[i] === '!important') break;
      if (cssValue) cssValue += ', ';
      cssValue += join(value[i], ' ');
    }
  } else cssValue = join(value, ', '); // Add !important, because it was ignored.


  if (!ignoreImportant && value[value.length - 1] === '!important') {
    cssValue += ' !important';
  }

  return cssValue;
};

function getWhitespaceSymbols(options) {
  if (options && options.format === false) {
    return {
      linebreak: '',
      space: ''
    };
  }

  return {
    linebreak: '\n',
    space: ' '
  };
}

/**
 * Indent a string.
 * http://jsperf.com/array-join-vs-for
 */

function indentStr(str, indent) {
  var result = '';

  for (var index = 0; index < indent; index++) {
    result += '  ';
  }

  return result + str;
}
/**
 * Converts a Rule to CSS string.
 */


function toCss(selector, style, options) {
  if (options === void 0) {
    options = {};
  }

  var result = '';
  if (!style) return result;
  var _options = options,
      _options$indent = _options.indent,
      indent = _options$indent === void 0 ? 0 : _options$indent;
  var fallbacks = style.fallbacks;

  if (options.format === false) {
    indent = -Infinity;
  }

  var _getWhitespaceSymbols = getWhitespaceSymbols(options),
      linebreak = _getWhitespaceSymbols.linebreak,
      space = _getWhitespaceSymbols.space;

  if (selector) indent++; // Apply fallbacks first.

  if (fallbacks) {
    // Array syntax {fallbacks: [{prop: value}]}
    if (Array.isArray(fallbacks)) {
      for (var index = 0; index < fallbacks.length; index++) {
        var fallback = fallbacks[index];

        for (var prop in fallback) {
          var value = fallback[prop];

          if (value != null) {
            if (result) result += linebreak;
            result += indentStr(prop + ":" + space + toCssValue(value) + ";", indent);
          }
        }
      }
    } else {
      // Object syntax {fallbacks: {prop: value}}
      for (var _prop in fallbacks) {
        var _value = fallbacks[_prop];

        if (_value != null) {
          if (result) result += linebreak;
          result += indentStr(_prop + ":" + space + toCssValue(_value) + ";", indent);
        }
      }
    }
  }

  for (var _prop2 in style) {
    var _value2 = style[_prop2];

    if (_value2 != null && _prop2 !== 'fallbacks') {
      if (result) result += linebreak;
      result += indentStr(_prop2 + ":" + space + toCssValue(_value2) + ";", indent);
    }
  } // Allow empty style in this case, because properties will be added dynamically.


  if (!result && !options.allowEmpty) return result; // When rule is being stringified before selector was defined.

  if (!selector) return result;
  indent--;
  if (result) result = "" + linebreak + result + linebreak;
  return indentStr("" + selector + space + "{" + result, indent) + indentStr('}', indent);
}

var escapeRegex = /([[\].#*$><+~=|^:(),"'`\s])/g;
var nativeEscape = typeof CSS !== 'undefined' && CSS.escape;
var escape = (function (str) {
  return nativeEscape ? nativeEscape(str) : str.replace(escapeRegex, '\\$1');
});

var BaseStyleRule =
/*#__PURE__*/
function () {
  function BaseStyleRule(key, style, options) {
    this.type = 'style';
    this.isProcessed = false;
    var sheet = options.sheet,
        Renderer = options.Renderer;
    this.key = key;
    this.options = options;
    this.style = style;
    if (sheet) this.renderer = sheet.renderer;else if (Renderer) this.renderer = new Renderer();
  }
  /**
   * Get or set a style property.
   */


  var _proto = BaseStyleRule.prototype;

  _proto.prop = function prop(name, value, options) {
    // It's a getter.
    if (value === undefined) return this.style[name]; // Don't do anything if the value has not changed.

    var force = options ? options.force : false;
    if (!force && this.style[name] === value) return this;
    var newValue = value;

    if (!options || options.process !== false) {
      newValue = this.options.jss.plugins.onChangeValue(value, name, this);
    }

    var isEmpty = newValue == null || newValue === false;
    var isDefined = name in this.style; // Value is empty and wasn't defined before.

    if (isEmpty && !isDefined && !force) return this; // We are going to remove this value.

    var remove = isEmpty && isDefined;
    if (remove) delete this.style[name];else this.style[name] = newValue; // Renderable is defined if StyleSheet option `link` is true.

    if (this.renderable && this.renderer) {
      if (remove) this.renderer.removeProperty(this.renderable, name);else this.renderer.setProperty(this.renderable, name, newValue);
      return this;
    }

    var sheet = this.options.sheet;

    if (sheet && sheet.attached) {
       true ? (0,tiny_warning__WEBPACK_IMPORTED_MODULE_6__.default)(false, '[JSS] Rule is not linked. Missing sheet option "link: true".') : 0;
    }

    return this;
  };

  return BaseStyleRule;
}();
var StyleRule =
/*#__PURE__*/
function (_BaseStyleRule) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_3__.default)(StyleRule, _BaseStyleRule);

  function StyleRule(key, style, options) {
    var _this;

    _this = _BaseStyleRule.call(this, key, style, options) || this;
    var selector = options.selector,
        scoped = options.scoped,
        sheet = options.sheet,
        generateId = options.generateId;

    if (selector) {
      _this.selectorText = selector;
    } else if (scoped !== false) {
      _this.id = generateId((0,_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__.default)((0,_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__.default)(_this)), sheet);
      _this.selectorText = "." + escape(_this.id);
    }

    return _this;
  }
  /**
   * Set selector string.
   * Attention: use this with caution. Most browsers didn't implement
   * selectorText setter, so this may result in rerendering of entire Style Sheet.
   */


  var _proto2 = StyleRule.prototype;

  /**
   * Apply rule to an element inline.
   */
  _proto2.applyTo = function applyTo(renderable) {
    var renderer = this.renderer;

    if (renderer) {
      var json = this.toJSON();

      for (var prop in json) {
        renderer.setProperty(renderable, prop, json[prop]);
      }
    }

    return this;
  }
  /**
   * Returns JSON representation of the rule.
   * Fallbacks are not supported.
   * Useful for inline styles.
   */
  ;

  _proto2.toJSON = function toJSON() {
    var json = {};

    for (var prop in this.style) {
      var value = this.style[prop];
      if (typeof value !== 'object') json[prop] = value;else if (Array.isArray(value)) json[prop] = toCssValue(value);
    }

    return json;
  }
  /**
   * Generates a CSS string.
   */
  ;

  _proto2.toString = function toString(options) {
    var sheet = this.options.sheet;
    var link = sheet ? sheet.options.link : false;
    var opts = link ? (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({}, options, {
      allowEmpty: true
    }) : options;
    return toCss(this.selectorText, this.style, opts);
  };

  (0,_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__.default)(StyleRule, [{
    key: "selector",
    set: function set(selector) {
      if (selector === this.selectorText) return;
      this.selectorText = selector;
      var renderer = this.renderer,
          renderable = this.renderable;
      if (!renderable || !renderer) return;
      var hasChanged = renderer.setSelector(renderable, selector); // If selector setter is not implemented, rerender the rule.

      if (!hasChanged) {
        renderer.replaceRule(renderable, this);
      }
    }
    /**
     * Get selector string.
     */
    ,
    get: function get() {
      return this.selectorText;
    }
  }]);

  return StyleRule;
}(BaseStyleRule);
var pluginStyleRule = {
  onCreateRule: function onCreateRule(key, style, options) {
    if (key[0] === '@' || options.parent && options.parent.type === 'keyframes') {
      return null;
    }

    return new StyleRule(key, style, options);
  }
};

var defaultToStringOptions = {
  indent: 1,
  children: true
};
var atRegExp = /@([\w-]+)/;
/**
 * Conditional rule for @media, @supports
 */

var ConditionalRule =
/*#__PURE__*/
function () {
  function ConditionalRule(key, styles, options) {
    this.type = 'conditional';
    this.isProcessed = false;
    this.key = key;
    var atMatch = key.match(atRegExp);
    this.at = atMatch ? atMatch[1] : 'unknown'; // Key might contain a unique suffix in case the `name` passed by user was duplicate.

    this.query = options.name || "@" + this.at;
    this.options = options;
    this.rules = new RuleList((0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({}, options, {
      parent: this
    }));

    for (var name in styles) {
      this.rules.add(name, styles[name]);
    }

    this.rules.process();
  }
  /**
   * Get a rule.
   */


  var _proto = ConditionalRule.prototype;

  _proto.getRule = function getRule(name) {
    return this.rules.get(name);
  }
  /**
   * Get index of a rule.
   */
  ;

  _proto.indexOf = function indexOf(rule) {
    return this.rules.indexOf(rule);
  }
  /**
   * Create and register rule, run plugins.
   */
  ;

  _proto.addRule = function addRule(name, style, options) {
    var rule = this.rules.add(name, style, options);
    if (!rule) return null;
    this.options.jss.plugins.onProcessRule(rule);
    return rule;
  }
  /**
   * Generates a CSS string.
   */
  ;

  _proto.toString = function toString(options) {
    if (options === void 0) {
      options = defaultToStringOptions;
    }

    var _getWhitespaceSymbols = getWhitespaceSymbols(options),
        linebreak = _getWhitespaceSymbols.linebreak;

    if (options.indent == null) options.indent = defaultToStringOptions.indent;
    if (options.children == null) options.children = defaultToStringOptions.children;

    if (options.children === false) {
      return this.query + " {}";
    }

    var children = this.rules.toString(options);
    return children ? this.query + " {" + linebreak + children + linebreak + "}" : '';
  };

  return ConditionalRule;
}();
var keyRegExp = /@media|@supports\s+/;
var pluginConditionalRule = {
  onCreateRule: function onCreateRule(key, styles, options) {
    return keyRegExp.test(key) ? new ConditionalRule(key, styles, options) : null;
  }
};

var defaultToStringOptions$1 = {
  indent: 1,
  children: true
};
var nameRegExp = /@keyframes\s+([\w-]+)/;
/**
 * Rule for @keyframes
 */

var KeyframesRule =
/*#__PURE__*/
function () {
  function KeyframesRule(key, frames, options) {
    this.type = 'keyframes';
    this.at = '@keyframes';
    this.isProcessed = false;
    var nameMatch = key.match(nameRegExp);

    if (nameMatch && nameMatch[1]) {
      this.name = nameMatch[1];
    } else {
      this.name = 'noname';
       true ? (0,tiny_warning__WEBPACK_IMPORTED_MODULE_6__.default)(false, "[JSS] Bad keyframes name " + key) : 0;
    }

    this.key = this.type + "-" + this.name;
    this.options = options;
    var scoped = options.scoped,
        sheet = options.sheet,
        generateId = options.generateId;
    this.id = scoped === false ? this.name : escape(generateId(this, sheet));
    this.rules = new RuleList((0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({}, options, {
      parent: this
    }));

    for (var name in frames) {
      this.rules.add(name, frames[name], (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({}, options, {
        parent: this
      }));
    }

    this.rules.process();
  }
  /**
   * Generates a CSS string.
   */


  var _proto = KeyframesRule.prototype;

  _proto.toString = function toString(options) {
    if (options === void 0) {
      options = defaultToStringOptions$1;
    }

    var _getWhitespaceSymbols = getWhitespaceSymbols(options),
        linebreak = _getWhitespaceSymbols.linebreak;

    if (options.indent == null) options.indent = defaultToStringOptions$1.indent;
    if (options.children == null) options.children = defaultToStringOptions$1.children;

    if (options.children === false) {
      return this.at + " " + this.id + " {}";
    }

    var children = this.rules.toString(options);
    if (children) children = "" + linebreak + children + linebreak;
    return this.at + " " + this.id + " {" + children + "}";
  };

  return KeyframesRule;
}();
var keyRegExp$1 = /@keyframes\s+/;
var refRegExp = /\$([\w-]+)/g;

var findReferencedKeyframe = function findReferencedKeyframe(val, keyframes) {
  if (typeof val === 'string') {
    return val.replace(refRegExp, function (match, name) {
      if (name in keyframes) {
        return keyframes[name];
      }

       true ? (0,tiny_warning__WEBPACK_IMPORTED_MODULE_6__.default)(false, "[JSS] Referenced keyframes rule \"" + name + "\" is not defined.") : 0;
      return match;
    });
  }

  return val;
};
/**
 * Replace the reference for a animation name.
 */


var replaceRef = function replaceRef(style, prop, keyframes) {
  var value = style[prop];
  var refKeyframe = findReferencedKeyframe(value, keyframes);

  if (refKeyframe !== value) {
    style[prop] = refKeyframe;
  }
};

var pluginKeyframesRule = {
  onCreateRule: function onCreateRule(key, frames, options) {
    return typeof key === 'string' && keyRegExp$1.test(key) ? new KeyframesRule(key, frames, options) : null;
  },
  // Animation name ref replacer.
  onProcessStyle: function onProcessStyle(style, rule, sheet) {
    if (rule.type !== 'style' || !sheet) return style;
    if ('animation-name' in style) replaceRef(style, 'animation-name', sheet.keyframes);
    if ('animation' in style) replaceRef(style, 'animation', sheet.keyframes);
    return style;
  },
  onChangeValue: function onChangeValue(val, prop, rule) {
    var sheet = rule.options.sheet;

    if (!sheet) {
      return val;
    }

    switch (prop) {
      case 'animation':
        return findReferencedKeyframe(val, sheet.keyframes);

      case 'animation-name':
        return findReferencedKeyframe(val, sheet.keyframes);

      default:
        return val;
    }
  }
};

var KeyframeRule =
/*#__PURE__*/
function (_BaseStyleRule) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_3__.default)(KeyframeRule, _BaseStyleRule);

  function KeyframeRule() {
    return _BaseStyleRule.apply(this, arguments) || this;
  }

  var _proto = KeyframeRule.prototype;

  /**
   * Generates a CSS string.
   */
  _proto.toString = function toString(options) {
    var sheet = this.options.sheet;
    var link = sheet ? sheet.options.link : false;
    var opts = link ? (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({}, options, {
      allowEmpty: true
    }) : options;
    return toCss(this.key, this.style, opts);
  };

  return KeyframeRule;
}(BaseStyleRule);
var pluginKeyframeRule = {
  onCreateRule: function onCreateRule(key, style, options) {
    if (options.parent && options.parent.type === 'keyframes') {
      return new KeyframeRule(key, style, options);
    }

    return null;
  }
};

var FontFaceRule =
/*#__PURE__*/
function () {
  function FontFaceRule(key, style, options) {
    this.type = 'font-face';
    this.at = '@font-face';
    this.isProcessed = false;
    this.key = key;
    this.style = style;
    this.options = options;
  }
  /**
   * Generates a CSS string.
   */


  var _proto = FontFaceRule.prototype;

  _proto.toString = function toString(options) {
    var _getWhitespaceSymbols = getWhitespaceSymbols(options),
        linebreak = _getWhitespaceSymbols.linebreak;

    if (Array.isArray(this.style)) {
      var str = '';

      for (var index = 0; index < this.style.length; index++) {
        str += toCss(this.at, this.style[index]);
        if (this.style[index + 1]) str += linebreak;
      }

      return str;
    }

    return toCss(this.at, this.style, options);
  };

  return FontFaceRule;
}();
var keyRegExp$2 = /@font-face/;
var pluginFontFaceRule = {
  onCreateRule: function onCreateRule(key, style, options) {
    return keyRegExp$2.test(key) ? new FontFaceRule(key, style, options) : null;
  }
};

var ViewportRule =
/*#__PURE__*/
function () {
  function ViewportRule(key, style, options) {
    this.type = 'viewport';
    this.at = '@viewport';
    this.isProcessed = false;
    this.key = key;
    this.style = style;
    this.options = options;
  }
  /**
   * Generates a CSS string.
   */


  var _proto = ViewportRule.prototype;

  _proto.toString = function toString(options) {
    return toCss(this.key, this.style, options);
  };

  return ViewportRule;
}();
var pluginViewportRule = {
  onCreateRule: function onCreateRule(key, style, options) {
    return key === '@viewport' || key === '@-ms-viewport' ? new ViewportRule(key, style, options) : null;
  }
};

var SimpleRule =
/*#__PURE__*/
function () {
  function SimpleRule(key, value, options) {
    this.type = 'simple';
    this.isProcessed = false;
    this.key = key;
    this.value = value;
    this.options = options;
  }
  /**
   * Generates a CSS string.
   */
  // eslint-disable-next-line no-unused-vars


  var _proto = SimpleRule.prototype;

  _proto.toString = function toString(options) {
    if (Array.isArray(this.value)) {
      var str = '';

      for (var index = 0; index < this.value.length; index++) {
        str += this.key + " " + this.value[index] + ";";
        if (this.value[index + 1]) str += '\n';
      }

      return str;
    }

    return this.key + " " + this.value + ";";
  };

  return SimpleRule;
}();
var keysMap = {
  '@charset': true,
  '@import': true,
  '@namespace': true
};
var pluginSimpleRule = {
  onCreateRule: function onCreateRule(key, value, options) {
    return key in keysMap ? new SimpleRule(key, value, options) : null;
  }
};

var plugins = [pluginStyleRule, pluginConditionalRule, pluginKeyframesRule, pluginKeyframeRule, pluginFontFaceRule, pluginViewportRule, pluginSimpleRule];

var defaultUpdateOptions = {
  process: true
};
var forceUpdateOptions = {
  force: true,
  process: true
  /**
   * Contains rules objects and allows adding/removing etc.
   * Is used for e.g. by `StyleSheet` or `ConditionalRule`.
   */

};

var RuleList =
/*#__PURE__*/
function () {
  // Rules registry for access by .get() method.
  // It contains the same rule registered by name and by selector.
  // Original styles object.
  // Used to ensure correct rules order.
  function RuleList(options) {
    this.map = {};
    this.raw = {};
    this.index = [];
    this.counter = 0;
    this.options = options;
    this.classes = options.classes;
    this.keyframes = options.keyframes;
  }
  /**
   * Create and register rule.
   *
   * Will not render after Style Sheet was rendered the first time.
   */


  var _proto = RuleList.prototype;

  _proto.add = function add(name, decl, ruleOptions) {
    var _this$options = this.options,
        parent = _this$options.parent,
        sheet = _this$options.sheet,
        jss = _this$options.jss,
        Renderer = _this$options.Renderer,
        generateId = _this$options.generateId,
        scoped = _this$options.scoped;

    var options = (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({
      classes: this.classes,
      parent: parent,
      sheet: sheet,
      jss: jss,
      Renderer: Renderer,
      generateId: generateId,
      scoped: scoped,
      name: name,
      keyframes: this.keyframes,
      selector: undefined
    }, ruleOptions); // When user uses .createStyleSheet(), duplicate names are not possible, but
    // `sheet.addRule()` opens the door for any duplicate rule name. When this happens
    // we need to make the key unique within this RuleList instance scope.


    var key = name;

    if (name in this.raw) {
      key = name + "-d" + this.counter++;
    } // We need to save the original decl before creating the rule
    // because cache plugin needs to use it as a key to return a cached rule.


    this.raw[key] = decl;

    if (key in this.classes) {
      // E.g. rules inside of @media container
      options.selector = "." + escape(this.classes[key]);
    }

    var rule = createRule(key, decl, options);
    if (!rule) return null;
    this.register(rule);
    var index = options.index === undefined ? this.index.length : options.index;
    this.index.splice(index, 0, rule);
    return rule;
  }
  /**
   * Get a rule.
   */
  ;

  _proto.get = function get(name) {
    return this.map[name];
  }
  /**
   * Delete a rule.
   */
  ;

  _proto.remove = function remove(rule) {
    this.unregister(rule);
    delete this.raw[rule.key];
    this.index.splice(this.index.indexOf(rule), 1);
  }
  /**
   * Get index of a rule.
   */
  ;

  _proto.indexOf = function indexOf(rule) {
    return this.index.indexOf(rule);
  }
  /**
   * Run `onProcessRule()` plugins on every rule.
   */
  ;

  _proto.process = function process() {
    var plugins = this.options.jss.plugins; // We need to clone array because if we modify the index somewhere else during a loop
    // we end up with very hard-to-track-down side effects.

    this.index.slice(0).forEach(plugins.onProcessRule, plugins);
  }
  /**
   * Register a rule in `.map`, `.classes` and `.keyframes` maps.
   */
  ;

  _proto.register = function register(rule) {
    this.map[rule.key] = rule;

    if (rule instanceof StyleRule) {
      this.map[rule.selector] = rule;
      if (rule.id) this.classes[rule.key] = rule.id;
    } else if (rule instanceof KeyframesRule && this.keyframes) {
      this.keyframes[rule.name] = rule.id;
    }
  }
  /**
   * Unregister a rule.
   */
  ;

  _proto.unregister = function unregister(rule) {
    delete this.map[rule.key];

    if (rule instanceof StyleRule) {
      delete this.map[rule.selector];
      delete this.classes[rule.key];
    } else if (rule instanceof KeyframesRule) {
      delete this.keyframes[rule.name];
    }
  }
  /**
   * Update the function values with a new data.
   */
  ;

  _proto.update = function update() {
    var name;
    var data;
    var options;

    if (typeof (arguments.length <= 0 ? undefined : arguments[0]) === 'string') {
      name = arguments.length <= 0 ? undefined : arguments[0];
      data = arguments.length <= 1 ? undefined : arguments[1];
      options = arguments.length <= 2 ? undefined : arguments[2];
    } else {
      data = arguments.length <= 0 ? undefined : arguments[0];
      options = arguments.length <= 1 ? undefined : arguments[1];
      name = null;
    }

    if (name) {
      this.updateOne(this.map[name], data, options);
    } else {
      for (var index = 0; index < this.index.length; index++) {
        this.updateOne(this.index[index], data, options);
      }
    }
  }
  /**
   * Execute plugins, update rule props.
   */
  ;

  _proto.updateOne = function updateOne(rule, data, options) {
    if (options === void 0) {
      options = defaultUpdateOptions;
    }

    var _this$options2 = this.options,
        plugins = _this$options2.jss.plugins,
        sheet = _this$options2.sheet; // It is a rules container like for e.g. ConditionalRule.

    if (rule.rules instanceof RuleList) {
      rule.rules.update(data, options);
      return;
    }

    var style = rule.style;
    plugins.onUpdate(data, rule, sheet, options); // We rely on a new `style` ref in case it was mutated during onUpdate hook.

    if (options.process && style && style !== rule.style) {
      // We need to run the plugins in case new `style` relies on syntax plugins.
      plugins.onProcessStyle(rule.style, rule, sheet); // Update and add props.

      for (var prop in rule.style) {
        var nextValue = rule.style[prop];
        var prevValue = style[prop]; // We need to use `force: true` because `rule.style` has been updated during onUpdate hook, so `rule.prop()` will not update the CSSOM rule.
        // We do this comparison to avoid unneeded `rule.prop()` calls, since we have the old `style` object here.

        if (nextValue !== prevValue) {
          rule.prop(prop, nextValue, forceUpdateOptions);
        }
      } // Remove props.


      for (var _prop in style) {
        var _nextValue = rule.style[_prop];
        var _prevValue = style[_prop]; // We need to use `force: true` because `rule.style` has been updated during onUpdate hook, so `rule.prop()` will not update the CSSOM rule.
        // We do this comparison to avoid unneeded `rule.prop()` calls, since we have the old `style` object here.

        if (_nextValue == null && _nextValue !== _prevValue) {
          rule.prop(_prop, null, forceUpdateOptions);
        }
      }
    }
  }
  /**
   * Convert rules to a CSS string.
   */
  ;

  _proto.toString = function toString(options) {
    var str = '';
    var sheet = this.options.sheet;
    var link = sheet ? sheet.options.link : false;

    var _getWhitespaceSymbols = getWhitespaceSymbols(options),
        linebreak = _getWhitespaceSymbols.linebreak;

    for (var index = 0; index < this.index.length; index++) {
      var rule = this.index[index];
      var css = rule.toString(options); // No need to render an empty rule.

      if (!css && !link) continue;
      if (str) str += linebreak;
      str += css;
    }

    return str;
  };

  return RuleList;
}();

var StyleSheet =
/*#__PURE__*/
function () {
  function StyleSheet(styles, options) {
    this.attached = false;
    this.deployed = false;
    this.classes = {};
    this.keyframes = {};
    this.options = (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({}, options, {
      sheet: this,
      parent: this,
      classes: this.classes,
      keyframes: this.keyframes
    });

    if (options.Renderer) {
      this.renderer = new options.Renderer(this);
    }

    this.rules = new RuleList(this.options);

    for (var name in styles) {
      this.rules.add(name, styles[name]);
    }

    this.rules.process();
  }
  /**
   * Attach renderable to the render tree.
   */


  var _proto = StyleSheet.prototype;

  _proto.attach = function attach() {
    if (this.attached) return this;
    if (this.renderer) this.renderer.attach();
    this.attached = true; // Order is important, because we can't use insertRule API if style element is not attached.

    if (!this.deployed) this.deploy();
    return this;
  }
  /**
   * Remove renderable from render tree.
   */
  ;

  _proto.detach = function detach() {
    if (!this.attached) return this;
    if (this.renderer) this.renderer.detach();
    this.attached = false;
    return this;
  }
  /**
   * Add a rule to the current stylesheet.
   * Will insert a rule also after the stylesheet has been rendered first time.
   */
  ;

  _proto.addRule = function addRule(name, decl, options) {
    var queue = this.queue; // Plugins can create rules.
    // In order to preserve the right order, we need to queue all `.addRule` calls,
    // which happen after the first `rules.add()` call.

    if (this.attached && !queue) this.queue = [];
    var rule = this.rules.add(name, decl, options);
    if (!rule) return null;
    this.options.jss.plugins.onProcessRule(rule);

    if (this.attached) {
      if (!this.deployed) return rule; // Don't insert rule directly if there is no stringified version yet.
      // It will be inserted all together when .attach is called.

      if (queue) queue.push(rule);else {
        this.insertRule(rule);

        if (this.queue) {
          this.queue.forEach(this.insertRule, this);
          this.queue = undefined;
        }
      }
      return rule;
    } // We can't add rules to a detached style node.
    // We will redeploy the sheet once user will attach it.


    this.deployed = false;
    return rule;
  }
  /**
   * Insert rule into the StyleSheet
   */
  ;

  _proto.insertRule = function insertRule(rule) {
    if (this.renderer) {
      this.renderer.insertRule(rule);
    }
  }
  /**
   * Create and add rules.
   * Will render also after Style Sheet was rendered the first time.
   */
  ;

  _proto.addRules = function addRules(styles, options) {
    var added = [];

    for (var name in styles) {
      var rule = this.addRule(name, styles[name], options);
      if (rule) added.push(rule);
    }

    return added;
  }
  /**
   * Get a rule by name.
   */
  ;

  _proto.getRule = function getRule(name) {
    return this.rules.get(name);
  }
  /**
   * Delete a rule by name.
   * Returns `true`: if rule has been deleted from the DOM.
   */
  ;

  _proto.deleteRule = function deleteRule(name) {
    var rule = typeof name === 'object' ? name : this.rules.get(name);

    if (!rule || // Style sheet was created without link: true and attached, in this case we
    // won't be able to remove the CSS rule from the DOM.
    this.attached && !rule.renderable) {
      return false;
    }

    this.rules.remove(rule);

    if (this.attached && rule.renderable && this.renderer) {
      return this.renderer.deleteRule(rule.renderable);
    }

    return true;
  }
  /**
   * Get index of a rule.
   */
  ;

  _proto.indexOf = function indexOf(rule) {
    return this.rules.indexOf(rule);
  }
  /**
   * Deploy pure CSS string to a renderable.
   */
  ;

  _proto.deploy = function deploy() {
    if (this.renderer) this.renderer.deploy();
    this.deployed = true;
    return this;
  }
  /**
   * Update the function values with a new data.
   */
  ;

  _proto.update = function update() {
    var _this$rules;

    (_this$rules = this.rules).update.apply(_this$rules, arguments);

    return this;
  }
  /**
   * Updates a single rule.
   */
  ;

  _proto.updateOne = function updateOne(rule, data, options) {
    this.rules.updateOne(rule, data, options);
    return this;
  }
  /**
   * Convert rules to a CSS string.
   */
  ;

  _proto.toString = function toString(options) {
    return this.rules.toString(options);
  };

  return StyleSheet;
}();

var PluginsRegistry =
/*#__PURE__*/
function () {
  function PluginsRegistry() {
    this.plugins = {
      internal: [],
      external: []
    };
    this.registry = {};
  }

  var _proto = PluginsRegistry.prototype;

  /**
   * Call `onCreateRule` hooks and return an object if returned by a hook.
   */
  _proto.onCreateRule = function onCreateRule(name, decl, options) {
    for (var i = 0; i < this.registry.onCreateRule.length; i++) {
      var rule = this.registry.onCreateRule[i](name, decl, options);
      if (rule) return rule;
    }

    return null;
  }
  /**
   * Call `onProcessRule` hooks.
   */
  ;

  _proto.onProcessRule = function onProcessRule(rule) {
    if (rule.isProcessed) return;
    var sheet = rule.options.sheet;

    for (var i = 0; i < this.registry.onProcessRule.length; i++) {
      this.registry.onProcessRule[i](rule, sheet);
    }

    if (rule.style) this.onProcessStyle(rule.style, rule, sheet);
    rule.isProcessed = true;
  }
  /**
   * Call `onProcessStyle` hooks.
   */
  ;

  _proto.onProcessStyle = function onProcessStyle(style, rule, sheet) {
    for (var i = 0; i < this.registry.onProcessStyle.length; i++) {
      rule.style = this.registry.onProcessStyle[i](rule.style, rule, sheet);
    }
  }
  /**
   * Call `onProcessSheet` hooks.
   */
  ;

  _proto.onProcessSheet = function onProcessSheet(sheet) {
    for (var i = 0; i < this.registry.onProcessSheet.length; i++) {
      this.registry.onProcessSheet[i](sheet);
    }
  }
  /**
   * Call `onUpdate` hooks.
   */
  ;

  _proto.onUpdate = function onUpdate(data, rule, sheet, options) {
    for (var i = 0; i < this.registry.onUpdate.length; i++) {
      this.registry.onUpdate[i](data, rule, sheet, options);
    }
  }
  /**
   * Call `onChangeValue` hooks.
   */
  ;

  _proto.onChangeValue = function onChangeValue(value, prop, rule) {
    var processedValue = value;

    for (var i = 0; i < this.registry.onChangeValue.length; i++) {
      processedValue = this.registry.onChangeValue[i](processedValue, prop, rule);
    }

    return processedValue;
  }
  /**
   * Register a plugin.
   */
  ;

  _proto.use = function use(newPlugin, options) {
    if (options === void 0) {
      options = {
        queue: 'external'
      };
    }

    var plugins = this.plugins[options.queue]; // Avoids applying same plugin twice, at least based on ref.

    if (plugins.indexOf(newPlugin) !== -1) {
      return;
    }

    plugins.push(newPlugin);
    this.registry = [].concat(this.plugins.external, this.plugins.internal).reduce(function (registry, plugin) {
      for (var name in plugin) {
        if (name in registry) {
          registry[name].push(plugin[name]);
        } else {
           true ? (0,tiny_warning__WEBPACK_IMPORTED_MODULE_6__.default)(false, "[JSS] Unknown hook \"" + name + "\".") : 0;
        }
      }

      return registry;
    }, {
      onCreateRule: [],
      onProcessRule: [],
      onProcessStyle: [],
      onProcessSheet: [],
      onChangeValue: [],
      onUpdate: []
    });
  };

  return PluginsRegistry;
}();

/**
 * Sheets registry to access all instances in one place.
 */

var SheetsRegistry =
/*#__PURE__*/
function () {
  function SheetsRegistry() {
    this.registry = [];
  }

  var _proto = SheetsRegistry.prototype;

  /**
   * Register a Style Sheet.
   */
  _proto.add = function add(sheet) {
    var registry = this.registry;
    var index = sheet.options.index;
    if (registry.indexOf(sheet) !== -1) return;

    if (registry.length === 0 || index >= this.index) {
      registry.push(sheet);
      return;
    } // Find a position.


    for (var i = 0; i < registry.length; i++) {
      if (registry[i].options.index > index) {
        registry.splice(i, 0, sheet);
        return;
      }
    }
  }
  /**
   * Reset the registry.
   */
  ;

  _proto.reset = function reset() {
    this.registry = [];
  }
  /**
   * Remove a Style Sheet.
   */
  ;

  _proto.remove = function remove(sheet) {
    var index = this.registry.indexOf(sheet);
    this.registry.splice(index, 1);
  }
  /**
   * Convert all attached sheets to a CSS string.
   */
  ;

  _proto.toString = function toString(_temp) {
    var _ref = _temp === void 0 ? {} : _temp,
        attached = _ref.attached,
        options = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_5__.default)(_ref, ["attached"]);

    var _getWhitespaceSymbols = getWhitespaceSymbols(options),
        linebreak = _getWhitespaceSymbols.linebreak;

    var css = '';

    for (var i = 0; i < this.registry.length; i++) {
      var sheet = this.registry[i];

      if (attached != null && sheet.attached !== attached) {
        continue;
      }

      if (css) css += linebreak;
      css += sheet.toString(options);
    }

    return css;
  };

  (0,_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__.default)(SheetsRegistry, [{
    key: "index",

    /**
     * Current highest index number.
     */
    get: function get() {
      return this.registry.length === 0 ? 0 : this.registry[this.registry.length - 1].options.index;
    }
  }]);

  return SheetsRegistry;
}();

/**
 * This is a global sheets registry. Only DomRenderer will add sheets to it.
 * On the server one should use an own SheetsRegistry instance and add the
 * sheets to it, because you need to make sure to create a new registry for
 * each request in order to not leak sheets across requests.
 */

var sheets = new SheetsRegistry();

/* eslint-disable */

/**
 * Now that `globalThis` is available on most platforms
 * (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/globalThis#browser_compatibility)
 * we check for `globalThis` first. `globalThis` is necessary for jss
 * to run in Agoric's secure version of JavaScript (SES). Under SES,
 * `globalThis` exists, but `window`, `self`, and `Function('return
 * this')()` are all undefined for security reasons.
 *
 * https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
 */
var globalThis$1 = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' && window.Math === Math ? window : typeof self !== 'undefined' && self.Math === Math ? self : Function('return this')();

var ns = '2f1acc6c3a606b082e5eef5e54414ffb';
if (globalThis$1[ns] == null) globalThis$1[ns] = 0; // Bundle may contain multiple JSS versions at the same time. In order to identify
// the current version with just one short number and use it for classes generation
// we use a counter. Also it is more accurate, because user can manually reevaluate
// the module.

var moduleId = globalThis$1[ns]++;

var maxRules = 1e10;
/**
 * Returns a function which generates unique class names based on counters.
 * When new generator function is created, rule counter is reseted.
 * We need to reset the rule counter for SSR for each request.
 */

var createGenerateId = function createGenerateId(options) {
  if (options === void 0) {
    options = {};
  }

  var ruleCounter = 0;

  var generateId = function generateId(rule, sheet) {
    ruleCounter += 1;

    if (ruleCounter > maxRules) {
       true ? (0,tiny_warning__WEBPACK_IMPORTED_MODULE_6__.default)(false, "[JSS] You might have a memory leak. Rule counter is at " + ruleCounter + ".") : 0;
    }

    var jssId = '';
    var prefix = '';

    if (sheet) {
      if (sheet.options.classNamePrefix) {
        prefix = sheet.options.classNamePrefix;
      }

      if (sheet.options.jss.id != null) {
        jssId = String(sheet.options.jss.id);
      }
    }

    if (options.minify) {
      // Using "c" because a number can't be the first char in a class name.
      return "" + (prefix || 'c') + moduleId + jssId + ruleCounter;
    }

    return prefix + rule.key + "-" + moduleId + (jssId ? "-" + jssId : '') + "-" + ruleCounter;
  };

  return generateId;
};

/**
 * Cache the value from the first time a function is called.
 */

var memoize = function memoize(fn) {
  var value;
  return function () {
    if (!value) value = fn();
    return value;
  };
};
/**
 * Get a style property value.
 */


var getPropertyValue = function getPropertyValue(cssRule, prop) {
  try {
    // Support CSSTOM.
    if (cssRule.attributeStyleMap) {
      return cssRule.attributeStyleMap.get(prop);
    }

    return cssRule.style.getPropertyValue(prop);
  } catch (err) {
    // IE may throw if property is unknown.
    return '';
  }
};
/**
 * Set a style property.
 */


var setProperty = function setProperty(cssRule, prop, value) {
  try {
    var cssValue = value;

    if (Array.isArray(value)) {
      cssValue = toCssValue(value, true);

      if (value[value.length - 1] === '!important') {
        cssRule.style.setProperty(prop, cssValue, 'important');
        return true;
      }
    } // Support CSSTOM.


    if (cssRule.attributeStyleMap) {
      cssRule.attributeStyleMap.set(prop, cssValue);
    } else {
      cssRule.style.setProperty(prop, cssValue);
    }
  } catch (err) {
    // IE may throw if property is unknown.
    return false;
  }

  return true;
};
/**
 * Remove a style property.
 */


var removeProperty = function removeProperty(cssRule, prop) {
  try {
    // Support CSSTOM.
    if (cssRule.attributeStyleMap) {
      cssRule.attributeStyleMap.delete(prop);
    } else {
      cssRule.style.removeProperty(prop);
    }
  } catch (err) {
     true ? (0,tiny_warning__WEBPACK_IMPORTED_MODULE_6__.default)(false, "[JSS] DOMException \"" + err.message + "\" was thrown. Tried to remove property \"" + prop + "\".") : 0;
  }
};
/**
 * Set the selector.
 */


var setSelector = function setSelector(cssRule, selectorText) {
  cssRule.selectorText = selectorText; // Return false if setter was not successful.
  // Currently works in chrome only.

  return cssRule.selectorText === selectorText;
};
/**
 * Gets the `head` element upon the first call and caches it.
 * We assume it can't be null.
 */


var getHead = memoize(function () {
  return document.querySelector('head');
});
/**
 * Find attached sheet with an index higher than the passed one.
 */

function findHigherSheet(registry, options) {
  for (var i = 0; i < registry.length; i++) {
    var sheet = registry[i];

    if (sheet.attached && sheet.options.index > options.index && sheet.options.insertionPoint === options.insertionPoint) {
      return sheet;
    }
  }

  return null;
}
/**
 * Find attached sheet with the highest index.
 */


function findHighestSheet(registry, options) {
  for (var i = registry.length - 1; i >= 0; i--) {
    var sheet = registry[i];

    if (sheet.attached && sheet.options.insertionPoint === options.insertionPoint) {
      return sheet;
    }
  }

  return null;
}
/**
 * Find a comment with "jss" inside.
 */


function findCommentNode(text) {
  var head = getHead();

  for (var i = 0; i < head.childNodes.length; i++) {
    var node = head.childNodes[i];

    if (node.nodeType === 8 && node.nodeValue.trim() === text) {
      return node;
    }
  }

  return null;
}
/**
 * Find a node before which we can insert the sheet.
 */


function findPrevNode(options) {
  var registry = sheets.registry;

  if (registry.length > 0) {
    // Try to insert before the next higher sheet.
    var sheet = findHigherSheet(registry, options);

    if (sheet && sheet.renderer) {
      return {
        parent: sheet.renderer.element.parentNode,
        node: sheet.renderer.element
      };
    } // Otherwise insert after the last attached.


    sheet = findHighestSheet(registry, options);

    if (sheet && sheet.renderer) {
      return {
        parent: sheet.renderer.element.parentNode,
        node: sheet.renderer.element.nextSibling
      };
    }
  } // Try to find a comment placeholder if registry is empty.


  var insertionPoint = options.insertionPoint;

  if (insertionPoint && typeof insertionPoint === 'string') {
    var comment = findCommentNode(insertionPoint);

    if (comment) {
      return {
        parent: comment.parentNode,
        node: comment.nextSibling
      };
    } // If user specifies an insertion point and it can't be found in the document -
    // bad specificity issues may appear.


     true ? (0,tiny_warning__WEBPACK_IMPORTED_MODULE_6__.default)(false, "[JSS] Insertion point \"" + insertionPoint + "\" not found.") : 0;
  }

  return false;
}
/**
 * Insert style element into the DOM.
 */


function insertStyle(style, options) {
  var insertionPoint = options.insertionPoint;
  var nextNode = findPrevNode(options);

  if (nextNode !== false && nextNode.parent) {
    nextNode.parent.insertBefore(style, nextNode.node);
    return;
  } // Works with iframes and any node types.


  if (insertionPoint && typeof insertionPoint.nodeType === 'number') {
    var insertionPointElement = insertionPoint;
    var parentNode = insertionPointElement.parentNode;
    if (parentNode) parentNode.insertBefore(style, insertionPointElement.nextSibling);else  true ? (0,tiny_warning__WEBPACK_IMPORTED_MODULE_6__.default)(false, '[JSS] Insertion point is not in the DOM.') : 0;
    return;
  }

  getHead().appendChild(style);
}
/**
 * Read jss nonce setting from the page if the user has set it.
 */


var getNonce = memoize(function () {
  var node = document.querySelector('meta[property="csp-nonce"]');
  return node ? node.getAttribute('content') : null;
});

var _insertRule = function insertRule(container, rule, index) {
  try {
    if ('insertRule' in container) {
      container.insertRule(rule, index);
    } // Keyframes rule.
    else if ('appendRule' in container) {
        container.appendRule(rule);
      }
  } catch (err) {
     true ? (0,tiny_warning__WEBPACK_IMPORTED_MODULE_6__.default)(false, "[JSS] " + err.message) : 0;
    return false;
  }

  return container.cssRules[index];
};

var getValidRuleInsertionIndex = function getValidRuleInsertionIndex(container, index) {
  var maxIndex = container.cssRules.length; // In case previous insertion fails, passed index might be wrong

  if (index === undefined || index > maxIndex) {
    // eslint-disable-next-line no-param-reassign
    return maxIndex;
  }

  return index;
};

var createStyle = function createStyle() {
  var el = document.createElement('style'); // Without it, IE will have a broken source order specificity if we
  // insert rules after we insert the style tag.
  // It seems to kick-off the source order specificity algorithm.

  el.textContent = '\n';
  return el;
};

var DomRenderer =
/*#__PURE__*/
function () {
  // Will be empty if link: true option is not set, because
  // it is only for use together with insertRule API.
  function DomRenderer(sheet) {
    this.getPropertyValue = getPropertyValue;
    this.setProperty = setProperty;
    this.removeProperty = removeProperty;
    this.setSelector = setSelector;
    this.hasInsertedRules = false;
    this.cssRules = [];
    // There is no sheet when the renderer is used from a standalone StyleRule.
    if (sheet) sheets.add(sheet);
    this.sheet = sheet;

    var _ref = this.sheet ? this.sheet.options : {},
        media = _ref.media,
        meta = _ref.meta,
        element = _ref.element;

    this.element = element || createStyle();
    this.element.setAttribute('data-jss', '');
    if (media) this.element.setAttribute('media', media);
    if (meta) this.element.setAttribute('data-meta', meta);
    var nonce = getNonce();
    if (nonce) this.element.setAttribute('nonce', nonce);
  }
  /**
   * Insert style element into render tree.
   */


  var _proto = DomRenderer.prototype;

  _proto.attach = function attach() {
    // In the case the element node is external and it is already in the DOM.
    if (this.element.parentNode || !this.sheet) return;
    insertStyle(this.element, this.sheet.options); // When rules are inserted using `insertRule` API, after `sheet.detach().attach()`
    // most browsers create a new CSSStyleSheet, except of all IEs.

    var deployed = Boolean(this.sheet && this.sheet.deployed);

    if (this.hasInsertedRules && deployed) {
      this.hasInsertedRules = false;
      this.deploy();
    }
  }
  /**
   * Remove style element from render tree.
   */
  ;

  _proto.detach = function detach() {
    if (!this.sheet) return;
    var parentNode = this.element.parentNode;
    if (parentNode) parentNode.removeChild(this.element); // In the most browsers, rules inserted using insertRule() API will be lost when style element is removed.
    // Though IE will keep them and we need a consistent behavior.

    if (this.sheet.options.link) {
      this.cssRules = [];
      this.element.textContent = '\n';
    }
  }
  /**
   * Inject CSS string into element.
   */
  ;

  _proto.deploy = function deploy() {
    var sheet = this.sheet;
    if (!sheet) return;

    if (sheet.options.link) {
      this.insertRules(sheet.rules);
      return;
    }

    this.element.textContent = "\n" + sheet.toString() + "\n";
  }
  /**
   * Insert RuleList into an element.
   */
  ;

  _proto.insertRules = function insertRules(rules, nativeParent) {
    for (var i = 0; i < rules.index.length; i++) {
      this.insertRule(rules.index[i], i, nativeParent);
    }
  }
  /**
   * Insert a rule into element.
   */
  ;

  _proto.insertRule = function insertRule(rule, index, nativeParent) {
    if (nativeParent === void 0) {
      nativeParent = this.element.sheet;
    }

    if (rule.rules) {
      var parent = rule;
      var latestNativeParent = nativeParent;

      if (rule.type === 'conditional' || rule.type === 'keyframes') {
        var _insertionIndex = getValidRuleInsertionIndex(nativeParent, index); // We need to render the container without children first.


        latestNativeParent = _insertRule(nativeParent, parent.toString({
          children: false
        }), _insertionIndex);

        if (latestNativeParent === false) {
          return false;
        }

        this.refCssRule(rule, _insertionIndex, latestNativeParent);
      }

      this.insertRules(parent.rules, latestNativeParent);
      return latestNativeParent;
    }

    var ruleStr = rule.toString();
    if (!ruleStr) return false;
    var insertionIndex = getValidRuleInsertionIndex(nativeParent, index);

    var nativeRule = _insertRule(nativeParent, ruleStr, insertionIndex);

    if (nativeRule === false) {
      return false;
    }

    this.hasInsertedRules = true;
    this.refCssRule(rule, insertionIndex, nativeRule);
    return nativeRule;
  };

  _proto.refCssRule = function refCssRule(rule, index, cssRule) {
    rule.renderable = cssRule; // We only want to reference the top level rules, deleteRule API doesn't support removing nested rules
    // like rules inside media queries or keyframes

    if (rule.options.parent instanceof StyleSheet) {
      this.cssRules[index] = cssRule;
    }
  }
  /**
   * Delete a rule.
   */
  ;

  _proto.deleteRule = function deleteRule(cssRule) {
    var sheet = this.element.sheet;
    var index = this.indexOf(cssRule);
    if (index === -1) return false;
    sheet.deleteRule(index);
    this.cssRules.splice(index, 1);
    return true;
  }
  /**
   * Get index of a CSS Rule.
   */
  ;

  _proto.indexOf = function indexOf(cssRule) {
    return this.cssRules.indexOf(cssRule);
  }
  /**
   * Generate a new CSS rule and replace the existing one.
   *
   * Only used for some old browsers because they can't set a selector.
   */
  ;

  _proto.replaceRule = function replaceRule(cssRule, rule) {
    var index = this.indexOf(cssRule);
    if (index === -1) return false;
    this.element.sheet.deleteRule(index);
    this.cssRules.splice(index, 1);
    return this.insertRule(rule, index);
  }
  /**
   * Get all rules elements.
   */
  ;

  _proto.getRules = function getRules() {
    return this.element.sheet.cssRules;
  };

  return DomRenderer;
}();

var instanceCounter = 0;

var Jss =
/*#__PURE__*/
function () {
  function Jss(options) {
    this.id = instanceCounter++;
    this.version = "10.8.0";
    this.plugins = new PluginsRegistry();
    this.options = {
      id: {
        minify: false
      },
      createGenerateId: createGenerateId,
      Renderer: is_in_browser__WEBPACK_IMPORTED_MODULE_1__.default ? DomRenderer : null,
      plugins: []
    };
    this.generateId = createGenerateId({
      minify: false
    });

    for (var i = 0; i < plugins.length; i++) {
      this.plugins.use(plugins[i], {
        queue: 'internal'
      });
    }

    this.setup(options);
  }
  /**
   * Prepares various options, applies plugins.
   * Should not be used twice on the same instance, because there is no plugins
   * deduplication logic.
   */


  var _proto = Jss.prototype;

  _proto.setup = function setup(options) {
    if (options === void 0) {
      options = {};
    }

    if (options.createGenerateId) {
      this.options.createGenerateId = options.createGenerateId;
    }

    if (options.id) {
      this.options.id = (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({}, this.options.id, options.id);
    }

    if (options.createGenerateId || options.id) {
      this.generateId = this.options.createGenerateId(this.options.id);
    }

    if (options.insertionPoint != null) this.options.insertionPoint = options.insertionPoint;

    if ('Renderer' in options) {
      this.options.Renderer = options.Renderer;
    } // eslint-disable-next-line prefer-spread


    if (options.plugins) this.use.apply(this, options.plugins);
    return this;
  }
  /**
   * Create a Style Sheet.
   */
  ;

  _proto.createStyleSheet = function createStyleSheet(styles, options) {
    if (options === void 0) {
      options = {};
    }

    var _options = options,
        index = _options.index;

    if (typeof index !== 'number') {
      index = sheets.index === 0 ? 0 : sheets.index + 1;
    }

    var sheet = new StyleSheet(styles, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({}, options, {
      jss: this,
      generateId: options.generateId || this.generateId,
      insertionPoint: this.options.insertionPoint,
      Renderer: this.options.Renderer,
      index: index
    }));
    this.plugins.onProcessSheet(sheet);
    return sheet;
  }
  /**
   * Detach the Style Sheet and remove it from the registry.
   */
  ;

  _proto.removeStyleSheet = function removeStyleSheet(sheet) {
    sheet.detach();
    sheets.remove(sheet);
    return this;
  }
  /**
   * Create a rule without a Style Sheet.
   * [Deprecated] will be removed in the next major version.
   */
  ;

  _proto.createRule = function createRule$1(name, style, options) {
    if (style === void 0) {
      style = {};
    }

    if (options === void 0) {
      options = {};
    }

    // Enable rule without name for inline styles.
    if (typeof name === 'object') {
      return this.createRule(undefined, name, style);
    }

    var ruleOptions = (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({}, options, {
      name: name,
      jss: this,
      Renderer: this.options.Renderer
    });

    if (!ruleOptions.generateId) ruleOptions.generateId = this.generateId;
    if (!ruleOptions.classes) ruleOptions.classes = {};
    if (!ruleOptions.keyframes) ruleOptions.keyframes = {};

    var rule = createRule(name, style, ruleOptions);

    if (rule) this.plugins.onProcessRule(rule);
    return rule;
  }
  /**
   * Register plugin. Passed function will be invoked with a rule instance.
   */
  ;

  _proto.use = function use() {
    var _this = this;

    for (var _len = arguments.length, plugins = new Array(_len), _key = 0; _key < _len; _key++) {
      plugins[_key] = arguments[_key];
    }

    plugins.forEach(function (plugin) {
      _this.plugins.use(plugin);
    });
    return this;
  };

  return Jss;
}();

var createJss = function createJss(options) {
  return new Jss(options);
};

/**
 * SheetsManager is like a WeakMap which is designed to count StyleSheet
 * instances and attach/detach automatically.
 * Used in react-jss.
 */

var SheetsManager =
/*#__PURE__*/
function () {
  function SheetsManager() {
    this.length = 0;
    this.sheets = new WeakMap();
  }

  var _proto = SheetsManager.prototype;

  _proto.get = function get(key) {
    var entry = this.sheets.get(key);
    return entry && entry.sheet;
  };

  _proto.add = function add(key, sheet) {
    if (this.sheets.has(key)) return;
    this.length++;
    this.sheets.set(key, {
      sheet: sheet,
      refs: 0
    });
  };

  _proto.manage = function manage(key) {
    var entry = this.sheets.get(key);

    if (entry) {
      if (entry.refs === 0) {
        entry.sheet.attach();
      }

      entry.refs++;
      return entry.sheet;
    }

    (0,tiny_warning__WEBPACK_IMPORTED_MODULE_6__.default)(false, "[JSS] SheetsManager: can't find sheet to manage");
    return undefined;
  };

  _proto.unmanage = function unmanage(key) {
    var entry = this.sheets.get(key);

    if (entry) {
      if (entry.refs > 0) {
        entry.refs--;
        if (entry.refs === 0) entry.sheet.detach();
      }
    } else {
      (0,tiny_warning__WEBPACK_IMPORTED_MODULE_6__.default)(false, "SheetsManager: can't find sheet to unmanage");
    }
  };

  (0,_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__.default)(SheetsManager, [{
    key: "size",
    get: function get() {
      return this.length;
    }
  }]);

  return SheetsManager;
}();

/**
* Export a constant indicating if this browser has CSSTOM support.
* https://developers.google.com/web/updates/2018/03/cssom
*/
var hasCSSTOMSupport = typeof CSS === 'object' && CSS != null && 'number' in CSS;

/**
 * Extracts a styles object with only props that contain function values.
 */
function getDynamicStyles(styles) {
  var to = null;

  for (var key in styles) {
    var value = styles[key];
    var type = typeof value;

    if (type === 'function') {
      if (!to) to = {};
      to[key] = value;
    } else if (type === 'object' && value !== null && !Array.isArray(value)) {
      var extracted = getDynamicStyles(value);

      if (extracted) {
        if (!to) to = {};
        to[key] = extracted;
      }
    }
  }

  return to;
}

/**
 * A better abstraction over CSS.
 *
 * @copyright Oleg Isonen (Slobodskoi) / Isonen 2014-present
 * @website https://github.com/cssinjs/jss
 * @license MIT
 */
var index = createJss();

/* harmony default export */ __webpack_exports__["default"] = (index);



/***/ }),

/***/ "./node_modules/tiny-warning/dist/tiny-warning.esm.js":
/*!************************************************************!*\
  !*** ./node_modules/tiny-warning/dist/tiny-warning.esm.js ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
var isProduction = "development" === 'production';
function warning(condition, message) {
  if (!isProduction) {
    if (condition) {
      return;
    }

    var text = "Warning: " + message;

    if (typeof console !== 'undefined') {
      console.warn(text);
    }

    try {
      throw Error(text);
    } catch (x) {}
  }
}

/* harmony default export */ __webpack_exports__["default"] = (warning);


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _arrayLikeToArray; }
/* harmony export */ });
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _arrayWithoutHoles; }
/* harmony export */ });
/* harmony import */ var _arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayLikeToArray.js */ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return (0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__.default)(arr);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/createClass.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/createClass.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _createClass; }
/* harmony export */ });
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/iterableToArray.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/iterableToArray.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _iterableToArray; }
/* harmony export */ });
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _nonIterableSpread; }
/* harmony export */ });
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _toConsumableArray; }
/* harmony export */ });
/* harmony import */ var _arrayWithoutHoles_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithoutHoles.js */ "./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js");
/* harmony import */ var _iterableToArray_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArray.js */ "./node_modules/@babel/runtime/helpers/esm/iterableToArray.js");
/* harmony import */ var _unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./unsupportedIterableToArray.js */ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");
/* harmony import */ var _nonIterableSpread_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nonIterableSpread.js */ "./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js");




function _toConsumableArray(arr) {
  return (0,_arrayWithoutHoles_js__WEBPACK_IMPORTED_MODULE_0__.default)(arr) || (0,_iterableToArray_js__WEBPACK_IMPORTED_MODULE_1__.default)(arr) || (0,_unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__.default)(arr) || (0,_nonIterableSpread_js__WEBPACK_IMPORTED_MODULE_3__.default)();
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js ***!
  \*******************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _unsupportedIterableToArray; }
/* harmony export */ });
/* harmony import */ var _arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayLikeToArray.js */ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return (0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__.default)(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return (0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__.default)(o, minLen);
}

/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNGYxNWQ4ZjRhZGY0Y2JkY2U5ZWEuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBMEQ7QUFDM0I7QUFDTTtBQUNVO0FBQ2tCO0FBQ2pCO0FBQ2pDO0FBQ2YsMEJBQTBCO0FBQzFCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHFDQUFxQzs7QUFFckMsOEJBQThCLCtDQUFjLElBQUk7O0FBRWhELDhCQUE4QixpRUFBdUI7QUFDckQsd0JBQXdCLHNEQUFJLENBQUMsb0RBQWMsRUFBRSwyRUFBUTtBQUNyRDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0Esd0JBQXdCLGdEQUFtQixVQUFVLDJFQUFRO0FBQzdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6QzBEO0FBQzBDO0FBQ3BHO0FBQytCO0FBQ0k7QUFDSTtBQUNWO0FBQ29DO0FBQzVCLENBQUM7O0FBRVU7QUFDaEQsWUFBWSwyQ0FBTSxDQUFDLG1EQUFTLEtBQUs7QUFDakM7QUFDQTtBQUNBOztBQUVBLDBCQUEwQixpRUFBdUIsSUFBSTs7QUFFOUM7QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ08sbUNBQW1DLGdEQUFtQjs7QUFFN0QsSUFBSSxJQUFxQztBQUN6QztBQUNBOztBQUVBO0FBQ2U7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSix1QkFBdUIsZ0dBQTZCOztBQUVwRCx1QkFBdUIsNkNBQWdCOztBQUV2QyxrQkFBa0IsMkVBQVEsR0FBRztBQUM3QjtBQUNBLEdBQUc7O0FBRUgsTUFBTSxJQUFxQztBQUMzQztBQUNBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNLElBQXFDO0FBQzNDO0FBQ0E7QUFD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Q0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxRQUFRO0FBQ25CLFdBQVcsUUFBUTtBQUNuQixZQUFZO0FBQ1o7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFFBQVE7QUFDbkIsWUFBWTtBQUNaO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFFBQVE7QUFDbkIsWUFBWTtBQUNaO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHNDQUFzQzs7QUFFdEMsc0NBQXNDOztBQUV0QztBQUNBLG1FQUFt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RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLGlGQUFjOztBQUVoQjtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLDJFQUFRLEdBQUc7QUFDakM7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSwwQkFBMEIsMkJBQTJCO0FBQ3JEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSwwQkFBMEIsMkJBQTJCO0FBQ3JELHNEQUFzRDtBQUN0RDtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsMkNBQTJDO0FBQzNDOztBQUVBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxrQkFBa0IsMkVBQVE7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLLGdCQUFnQjtBQUNyQjtBQUNBOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0EsTUFBTTtBQUNOOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDRDQUE0QztBQUM1Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE1BQU07QUFDTiwwQkFBMEIsMkJBQTJCO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHNDQUFzQzs7QUFFdEM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxrREFBa0Q7O0FBRWxEO0FBQ0E7QUFDQSx1REFB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MkVBQVEsR0FBRztBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxzQkFBc0IsMkVBQVEsR0FBRztBQUNqQztBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLDJFQUEyRSxhQUFhO0FBQ3hGO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsSUFBSSxxREFBTztBQUNYO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOLE1BQU0scURBQU87QUFDYjtBQUNBOztBQUVBLEVBQUUsK0VBQVk7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsK0RBQWUsS0FBSyxFQUFDO0FBQ3lJOzs7Ozs7Ozs7Ozs7QUN4ckU5SixtQkFBbUIsYUFBb0I7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBOztBQUVBLCtEQUFlLE9BQU8sRUFBQzs7Ozs7Ozs7Ozs7Ozs7O0FDbkJSO0FBQ2Y7O0FBRUEseUNBQXlDLFNBQVM7QUFDbEQ7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNScUQ7QUFDdEM7QUFDZixpQ0FBaUMsNkRBQWdCO0FBQ2pEOzs7Ozs7Ozs7Ozs7OztBQ0hBO0FBQ0Esa0JBQWtCLGtCQUFrQjtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFZTtBQUNmO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ2RlO0FBQ2Y7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNGZTtBQUNmO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0Z1RDtBQUNKO0FBQ3NCO0FBQ2xCO0FBQ3hDO0FBQ2YsU0FBUyw4REFBaUIsU0FBUyw0REFBZSxTQUFTLHVFQUEwQixTQUFTLDhEQUFpQjtBQUMvRzs7Ozs7Ozs7Ozs7Ozs7O0FDTnFEO0FBQ3RDO0FBQ2Y7QUFDQSxvQ0FBb0MsNkRBQWdCO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBLHNGQUFzRiw2REFBZ0I7QUFDdEciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BtdWkvc3R5bGVzL1NlcnZlclN0eWxlU2hlZXRzL1NlcnZlclN0eWxlU2hlZXRzLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQG11aS9zdHlsZXMvU3R5bGVzUHJvdmlkZXIvU3R5bGVzUHJvdmlkZXIuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AbXVpL3N0eWxlcy9TdHlsZXNQcm92aWRlci9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BtdWkvc3R5bGVzL2NyZWF0ZUdlbmVyYXRlQ2xhc3NOYW1lL2NyZWF0ZUdlbmVyYXRlQ2xhc3NOYW1lLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQG11aS9zdHlsZXMvY3JlYXRlU3R5bGVzL2NyZWF0ZVN0eWxlcy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BtdWkvc3R5bGVzL2dldFN0eWxlc0NyZWF0b3IvZ2V0U3R5bGVzQ3JlYXRvci5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BtdWkvc3R5bGVzL2dldFN0eWxlc0NyZWF0b3Ivbm9vcFRoZW1lLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQG11aS9zdHlsZXMvZ2V0VGhlbWVQcm9wcy9nZXRUaGVtZVByb3BzLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQG11aS9zdHlsZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AbXVpL3N0eWxlcy9qc3NQcmVzZXQvanNzUHJlc2V0LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQG11aS9zdHlsZXMvbWFrZVN0eWxlcy9pbmRleENvdW50ZXIuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AbXVpL3N0eWxlcy9tYWtlU3R5bGVzL21ha2VTdHlsZXMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AbXVpL3N0eWxlcy9tYWtlU3R5bGVzL211bHRpS2V5U3RvcmUuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AbXVpL3N0eWxlcy9tZXJnZUNsYXNzZXMvbWVyZ2VDbGFzc2VzLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQG11aS9zdHlsZXMvcHJvcHNUb0NsYXNzS2V5L3Byb3BzVG9DbGFzc0tleS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BtdWkvc3R5bGVzL3N0eWxlZC9zdHlsZWQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AbXVpL3N0eWxlcy91c2VUaGVtZVZhcmlhbnRzL3VzZVRoZW1lVmFyaWFudHMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AbXVpL3N0eWxlcy93aXRoU3R5bGVzL3dpdGhTdHlsZXMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AbXVpL3N0eWxlcy93aXRoVGhlbWUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AbXVpL3N0eWxlcy93aXRoVGhlbWUvd2l0aFRoZW1lLmpzIiwid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0xheW91dC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2Nzcy12ZW5kb3IvZGlzdC9jc3MtdmVuZG9yLmVzbS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2h5cGhlbmF0ZS1zdHlsZS1uYW1lL2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvaXMtaW4tYnJvd3Nlci9kaXN0L21vZHVsZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2pzcy1wbHVnaW4tY2FtZWwtY2FzZS9kaXN0L2pzcy1wbHVnaW4tY2FtZWwtY2FzZS5lc20uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9qc3MtcGx1Z2luLWRlZmF1bHQtdW5pdC9kaXN0L2pzcy1wbHVnaW4tZGVmYXVsdC11bml0LmVzbS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2pzcy1wbHVnaW4tZ2xvYmFsL2Rpc3QvanNzLXBsdWdpbi1nbG9iYWwuZXNtLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvanNzLXBsdWdpbi1uZXN0ZWQvZGlzdC9qc3MtcGx1Z2luLW5lc3RlZC5lc20uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9qc3MtcGx1Z2luLXByb3BzLXNvcnQvZGlzdC9qc3MtcGx1Z2luLXByb3BzLXNvcnQuZXNtLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvanNzLXBsdWdpbi1ydWxlLXZhbHVlLWZ1bmN0aW9uL2Rpc3QvanNzLXBsdWdpbi1ydWxlLXZhbHVlLWZ1bmN0aW9uLmVzbS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2pzcy1wbHVnaW4tdmVuZG9yLXByZWZpeGVyL2Rpc3QvanNzLXBsdWdpbi12ZW5kb3ItcHJlZml4ZXIuZXNtLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvanNzL2Rpc3QvanNzLmVzbS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3Rpbnktd2FybmluZy9kaXN0L3Rpbnktd2FybmluZy5lc20uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9hcnJheUxpa2VUb0FycmF5LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vYXJyYXlXaXRob3V0SG9sZXMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9jcmVhdGVDbGFzcy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2l0ZXJhYmxlVG9BcnJheS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL25vbkl0ZXJhYmxlU3ByZWFkLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vdG9Db25zdW1hYmxlQXJyYXkuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgX2V4dGVuZHMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2V4dGVuZHNcIjtcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFNoZWV0c1JlZ2lzdHJ5IH0gZnJvbSAnanNzJztcbmltcG9ydCBTdHlsZXNQcm92aWRlciBmcm9tICcuLi9TdHlsZXNQcm92aWRlcic7XG5pbXBvcnQgY3JlYXRlR2VuZXJhdGVDbGFzc05hbWUgZnJvbSAnLi4vY3JlYXRlR2VuZXJhdGVDbGFzc05hbWUnO1xuaW1wb3J0IHsganN4IGFzIF9qc3ggfSBmcm9tIFwicmVhY3QvanN4LXJ1bnRpbWVcIjtcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlcnZlclN0eWxlU2hlZXRzIHtcbiAgY29uc3RydWN0b3Iob3B0aW9ucyA9IHt9KSB7XG4gICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcbiAgfVxuXG4gIGNvbGxlY3QoY2hpbGRyZW4pIHtcbiAgICAvLyBUaGlzIGlzIG5lZWRlZCBpbiBvcmRlciB0byBkZWR1cGxpY2F0ZSB0aGUgaW5qZWN0aW9uIG9mIENTUyBpbiB0aGUgcGFnZS5cbiAgICBjb25zdCBzaGVldHNNYW5hZ2VyID0gbmV3IE1hcCgpOyAvLyBUaGlzIGlzIG5lZWRlZCBpbiBvcmRlciB0byBpbmplY3QgdGhlIGNyaXRpY2FsIENTUy5cblxuICAgIHRoaXMuc2hlZXRzUmVnaXN0cnkgPSBuZXcgU2hlZXRzUmVnaXN0cnkoKTsgLy8gQSBuZXcgY2xhc3MgbmFtZSBnZW5lcmF0b3JcblxuICAgIGNvbnN0IGdlbmVyYXRlQ2xhc3NOYW1lID0gY3JlYXRlR2VuZXJhdGVDbGFzc05hbWUoKTtcbiAgICByZXR1cm4gLyojX19QVVJFX18qL19qc3goU3R5bGVzUHJvdmlkZXIsIF9leHRlbmRzKHtcbiAgICAgIHNoZWV0c01hbmFnZXI6IHNoZWV0c01hbmFnZXIsXG4gICAgICBzZXJ2ZXJHZW5lcmF0ZUNsYXNzTmFtZTogZ2VuZXJhdGVDbGFzc05hbWUsXG4gICAgICBzaGVldHNSZWdpc3RyeTogdGhpcy5zaGVldHNSZWdpc3RyeVxuICAgIH0sIHRoaXMub3B0aW9ucywge1xuICAgICAgY2hpbGRyZW46IGNoaWxkcmVuXG4gICAgfSkpO1xuICB9XG5cbiAgdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuc2hlZXRzUmVnaXN0cnkgPyB0aGlzLnNoZWV0c1JlZ2lzdHJ5LnRvU3RyaW5nKCkgOiAnJztcbiAgfVxuXG4gIGdldFN0eWxlRWxlbWVudChwcm9wcykge1xuICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudCgnc3R5bGUnLCBfZXh0ZW5kcyh7XG4gICAgICBpZDogJ2pzcy1zZXJ2ZXItc2lkZScsXG4gICAgICBrZXk6ICdqc3Mtc2VydmVyLXNpZGUnLFxuICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw6IHtcbiAgICAgICAgX19odG1sOiB0aGlzLnRvU3RyaW5nKClcbiAgICAgIH1cbiAgICB9LCBwcm9wcykpO1xuICB9XG5cbn0iLCJpbXBvcnQgX2V4dGVuZHMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2V4dGVuZHNcIjtcbmltcG9ydCBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZSBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZVwiO1xuY29uc3QgX2V4Y2x1ZGVkID0gW1wiY2hpbGRyZW5cIiwgXCJpbmplY3RGaXJzdFwiLCBcImRpc2FibGVHZW5lcmF0aW9uXCJdO1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IGV4YWN0UHJvcCB9IGZyb20gJ0BtdWkvdXRpbHMnO1xuaW1wb3J0IHsgY3JlYXRlIH0gZnJvbSAnanNzJztcbmltcG9ydCBjcmVhdGVHZW5lcmF0ZUNsYXNzTmFtZSBmcm9tICcuLi9jcmVhdGVHZW5lcmF0ZUNsYXNzTmFtZSc7XG5pbXBvcnQganNzUHJlc2V0IGZyb20gJy4uL2pzc1ByZXNldCc7IC8vIERlZmF1bHQgSlNTIGluc3RhbmNlLlxuXG5pbXBvcnQgeyBqc3ggYXMgX2pzeCB9IGZyb20gXCJyZWFjdC9qc3gtcnVudGltZVwiO1xuY29uc3QganNzID0gY3JlYXRlKGpzc1ByZXNldCgpKTsgLy8gVXNlIGEgc2luZ2xldG9uIG9yIHRoZSBwcm92aWRlZCBvbmUgYnkgdGhlIGNvbnRleHQuXG4vL1xuLy8gVGhlIGNvdW50ZXItYmFzZWQgYXBwcm9hY2ggZG9lc24ndCB0b2xlcmF0ZSBhbnkgbWlzdGFrZS5cbi8vIEl0J3MgbXVjaCBzYWZlciB0byB1c2UgdGhlIHNhbWUgY291bnRlciBldmVyeXdoZXJlLlxuXG5jb25zdCBnZW5lcmF0ZUNsYXNzTmFtZSA9IGNyZWF0ZUdlbmVyYXRlQ2xhc3NOYW1lKCk7IC8vIEV4cG9ydGVkIGZvciB0ZXN0IHB1cnBvc2VzXG5cbmV4cG9ydCBjb25zdCBzaGVldHNNYW5hZ2VyID0gbmV3IE1hcCgpO1xuY29uc3QgZGVmYXVsdE9wdGlvbnMgPSB7XG4gIGRpc2FibGVHZW5lcmF0aW9uOiBmYWxzZSxcbiAgZ2VuZXJhdGVDbGFzc05hbWUsXG4gIGpzcyxcbiAgc2hlZXRzQ2FjaGU6IG51bGwsXG4gIHNoZWV0c01hbmFnZXIsXG4gIHNoZWV0c1JlZ2lzdHJ5OiBudWxsXG59O1xuZXhwb3J0IGNvbnN0IFN0eWxlc0NvbnRleHQgPSAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlQ29udGV4dChkZWZhdWx0T3B0aW9ucyk7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIFN0eWxlc0NvbnRleHQuZGlzcGxheU5hbWUgPSAnU3R5bGVzQ29udGV4dCc7XG59XG5cbmxldCBpbmplY3RGaXJzdE5vZGU7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTdHlsZXNQcm92aWRlcihwcm9wcykge1xuICBjb25zdCB7XG4gICAgY2hpbGRyZW4sXG4gICAgaW5qZWN0Rmlyc3QgPSBmYWxzZSxcbiAgICBkaXNhYmxlR2VuZXJhdGlvbiA9IGZhbHNlXG4gIH0gPSBwcm9wcyxcbiAgICAgICAgbG9jYWxPcHRpb25zID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UocHJvcHMsIF9leGNsdWRlZCk7XG5cbiAgY29uc3Qgb3V0ZXJPcHRpb25zID0gUmVhY3QudXNlQ29udGV4dChTdHlsZXNDb250ZXh0KTtcblxuICBjb25zdCBjb250ZXh0ID0gX2V4dGVuZHMoe30sIG91dGVyT3B0aW9ucywge1xuICAgIGRpc2FibGVHZW5lcmF0aW9uXG4gIH0sIGxvY2FsT3B0aW9ucyk7XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcgJiYgIWNvbnRleHQuc2hlZXRzTWFuYWdlcikge1xuICAgICAgY29uc29sZS5lcnJvcignTVVJOiBZb3UgbmVlZCB0byB1c2UgdGhlIFNlcnZlclN0eWxlU2hlZXRzIEFQSSB3aGVuIHJlbmRlcmluZyBvbiB0aGUgc2VydmVyLicpO1xuICAgIH1cbiAgfVxuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgaWYgKGNvbnRleHQuanNzLm9wdGlvbnMuaW5zZXJ0aW9uUG9pbnQgJiYgaW5qZWN0Rmlyc3QpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ01VSTogWW91IGNhbm5vdCB1c2UgYSBjdXN0b20gaW5zZXJ0aW9uUG9pbnQgYW5kIDxTdHlsZXNDb250ZXh0IGluamVjdEZpcnN0PiBhdCB0aGUgc2FtZSB0aW1lLicpO1xuICAgIH1cbiAgfVxuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgaWYgKGluamVjdEZpcnN0ICYmIGxvY2FsT3B0aW9ucy5qc3MpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ01VSTogWW91IGNhbm5vdCB1c2UgdGhlIGpzcyBhbmQgaW5qZWN0Rmlyc3QgcHJvcHMgYXQgdGhlIHNhbWUgdGltZS4nKTtcbiAgICB9XG4gIH1cblxuICBpZiAoIWNvbnRleHQuanNzLm9wdGlvbnMuaW5zZXJ0aW9uUG9pbnQgJiYgaW5qZWN0Rmlyc3QgJiYgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBpZiAoIWluamVjdEZpcnN0Tm9kZSkge1xuICAgICAgY29uc3QgaGVhZCA9IGRvY3VtZW50LmhlYWQ7XG4gICAgICBpbmplY3RGaXJzdE5vZGUgPSBkb2N1bWVudC5jcmVhdGVDb21tZW50KCdtdWktaW5qZWN0LWZpcnN0Jyk7XG4gICAgICBoZWFkLmluc2VydEJlZm9yZShpbmplY3RGaXJzdE5vZGUsIGhlYWQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgY29udGV4dC5qc3MgPSBjcmVhdGUoe1xuICAgICAgcGx1Z2luczoganNzUHJlc2V0KCkucGx1Z2lucyxcbiAgICAgIGluc2VydGlvblBvaW50OiBpbmplY3RGaXJzdE5vZGVcbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiAvKiNfX1BVUkVfXyovX2pzeChTdHlsZXNDb250ZXh0LlByb3ZpZGVyLCB7XG4gICAgdmFsdWU6IGNvbnRleHQsXG4gICAgY2hpbGRyZW46IGNoaWxkcmVuXG4gIH0pO1xufVxucHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gU3R5bGVzUHJvdmlkZXIucHJvcFR5cGVzID0ge1xuICAvKipcbiAgICogWW91ciBjb21wb25lbnQgdHJlZS5cbiAgICovXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcblxuICAvKipcbiAgICogWW91IGNhbiBkaXNhYmxlIHRoZSBnZW5lcmF0aW9uIG9mIHRoZSBzdHlsZXMgd2l0aCB0aGlzIG9wdGlvbi5cbiAgICogSXQgY2FuIGJlIHVzZWZ1bCB3aGVuIHRyYXZlcnNpbmcgdGhlIFJlYWN0IHRyZWUgb3V0c2lkZSBvZiB0aGUgSFRNTFxuICAgKiByZW5kZXJpbmcgc3RlcCBvbiB0aGUgc2VydmVyLlxuICAgKiBMZXQncyBzYXkgeW91IGFyZSB1c2luZyByZWFjdC1hcG9sbG8gdG8gZXh0cmFjdCBhbGxcbiAgICogdGhlIHF1ZXJpZXMgbWFkZSBieSB0aGUgaW50ZXJmYWNlIHNlcnZlci1zaWRlIC0geW91IGNhbiBzaWduaWZpY2FudGx5IHNwZWVkIHVwIHRoZSB0cmF2ZXJzYWwgd2l0aCB0aGlzIHByb3AuXG4gICAqL1xuICBkaXNhYmxlR2VuZXJhdGlvbjogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIEpTUydzIGNsYXNzIG5hbWUgZ2VuZXJhdG9yLlxuICAgKi9cbiAgZ2VuZXJhdGVDbGFzc05hbWU6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBCeSBkZWZhdWx0LCB0aGUgc3R5bGVzIGFyZSBpbmplY3RlZCBsYXN0IGluIHRoZSA8aGVhZD4gZWxlbWVudCBvZiB0aGUgcGFnZS5cbiAgICogQXMgYSByZXN1bHQsIHRoZXkgZ2FpbiBtb3JlIHNwZWNpZmljaXR5IHRoYW4gYW55IG90aGVyIHN0eWxlIHNoZWV0LlxuICAgKiBJZiB5b3Ugd2FudCB0byBvdmVycmlkZSBNVUkncyBzdHlsZXMsIHNldCB0aGlzIHByb3AuXG4gICAqL1xuICBpbmplY3RGaXJzdDogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIEpTUydzIGluc3RhbmNlLlxuICAgKi9cbiAganNzOiBQcm9wVHlwZXMub2JqZWN0LFxuXG4gIC8qKlxuICAgKiBAaWdub3JlXG4gICAqL1xuICBzZXJ2ZXJHZW5lcmF0ZUNsYXNzTmFtZTogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIEBpZ25vcmVcbiAgICpcbiAgICogQmV0YSBmZWF0dXJlLlxuICAgKlxuICAgKiBDYWNoZSBmb3IgdGhlIHNoZWV0cy5cbiAgICovXG4gIHNoZWV0c0NhY2hlOiBQcm9wVHlwZXMub2JqZWN0LFxuXG4gIC8qKlxuICAgKiBAaWdub3JlXG4gICAqXG4gICAqIFRoZSBzaGVldHNNYW5hZ2VyIGlzIHVzZWQgdG8gZGVkdXBsaWNhdGUgc3R5bGUgc2hlZXQgaW5qZWN0aW9uIGluIHRoZSBwYWdlLlxuICAgKiBJdCdzIGRlZHVwbGljYXRpbmcgdXNpbmcgdGhlICh0aGVtZSwgc3R5bGVzKSBjb3VwbGUuXG4gICAqIE9uIHRoZSBzZXJ2ZXIsIHlvdSBzaG91bGQgcHJvdmlkZSBhIG5ldyBpbnN0YW5jZSBmb3IgZWFjaCByZXF1ZXN0LlxuICAgKi9cbiAgc2hlZXRzTWFuYWdlcjogUHJvcFR5cGVzLm9iamVjdCxcblxuICAvKipcbiAgICogQGlnbm9yZVxuICAgKlxuICAgKiBDb2xsZWN0IHRoZSBzaGVldHMuXG4gICAqL1xuICBzaGVldHNSZWdpc3RyeTogUHJvcFR5cGVzLm9iamVjdFxufSA6IHZvaWQgMDtcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gU3R5bGVzUHJvdmlkZXIucHJvcFR5cGVzID0gZXhhY3RQcm9wKFN0eWxlc1Byb3ZpZGVyLnByb3BUeXBlcykgOiB2b2lkIDA7XG59IiwiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gJy4vU3R5bGVzUHJvdmlkZXInO1xuZXhwb3J0ICogZnJvbSAnLi9TdHlsZXNQcm92aWRlcic7IiwiaW1wb3J0IHsgdW5zdGFibGVfbmVzdGVkIGFzIG5lc3RlZCB9IGZyb20gJ0BtdWkvcHJpdmF0ZS10aGVtaW5nL1RoZW1lUHJvdmlkZXInO1xuLyoqXG4gKiBUaGlzIGlzIHRoZSBsaXN0IG9mIHRoZSBzdHlsZSBydWxlIG5hbWUgd2UgdXNlIGFzIGRyb3AgaW4gcmVwbGFjZW1lbnQgZm9yIHRoZSBidWlsdC1pblxuICogcHNldWRvIGNsYXNzZXMgKDpjaGVja2VkLCA6ZGlzYWJsZWQsIDpmb2N1c2VkLCBldGMuKS5cbiAqXG4gKiBXaHkgZG8gdGhleSBleGlzdCBpbiB0aGUgZmlyc3QgcGxhY2U/XG4gKiBUaGVzZSBjbGFzc2VzIGFyZSB1c2VkIGF0IGEgc3BlY2lmaWNpdHkgb2YgMi5cbiAqIEl0IGFsbG93cyB0aGVtIHRvIG92ZXJyaWRlIHByZXZpb3VzbHkgZGVmaW5lZCBzdHlsZXMgYXMgd2VsbCBhc1xuICogYmVpbmcgdW50b3VjaGVkIGJ5IHNpbXBsZSB1c2VyIG92ZXJyaWRlcy5cbiAqL1xuXG5jb25zdCBzdGF0ZUNsYXNzZXMgPSBbJ2NoZWNrZWQnLCAnZGlzYWJsZWQnLCAnZXJyb3InLCAnZm9jdXNlZCcsICdmb2N1c1Zpc2libGUnLCAncmVxdWlyZWQnLCAnZXhwYW5kZWQnLCAnc2VsZWN0ZWQnXTsgLy8gUmV0dXJucyBhIGZ1bmN0aW9uIHdoaWNoIGdlbmVyYXRlcyB1bmlxdWUgY2xhc3MgbmFtZXMgYmFzZWQgb24gY291bnRlcnMuXG4vLyBXaGVuIG5ldyBnZW5lcmF0b3IgZnVuY3Rpb24gaXMgY3JlYXRlZCwgcnVsZSBjb3VudGVyIGlzIHJlc2V0LlxuLy8gV2UgbmVlZCB0byByZXNldCB0aGUgcnVsZSBjb3VudGVyIGZvciBTU1IgZm9yIGVhY2ggcmVxdWVzdC5cbi8vXG4vLyBJdCdzIGluc3BpcmVkIGJ5XG4vLyBodHRwczovL2dpdGh1Yi5jb20vY3NzaW5qcy9qc3MvYmxvYi80ZTZhMDVkZDNmN2I2NTcyZmRkM2FiMjE2ODYxZDllNDQ2YzIwMzMxL3NyYy91dGlscy9jcmVhdGVHZW5lcmF0ZUNsYXNzTmFtZS5qc1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVHZW5lcmF0ZUNsYXNzTmFtZShvcHRpb25zID0ge30pIHtcbiAgY29uc3Qge1xuICAgIGRpc2FibGVHbG9iYWwgPSBmYWxzZSxcbiAgICBwcm9kdWN0aW9uUHJlZml4ID0gJ2pzcycsXG4gICAgc2VlZCA9ICcnXG4gIH0gPSBvcHRpb25zO1xuICBjb25zdCBzZWVkUHJlZml4ID0gc2VlZCA9PT0gJycgPyAnJyA6IGAke3NlZWR9LWA7XG4gIGxldCBydWxlQ291bnRlciA9IDA7XG5cbiAgY29uc3QgZ2V0TmV4dENvdW50ZXJJZCA9ICgpID0+IHtcbiAgICBydWxlQ291bnRlciArPSAxO1xuXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGlmIChydWxlQ291bnRlciA+PSAxZTEwKSB7XG4gICAgICAgIGNvbnNvbGUud2FybihbJ01VSTogWW91IG1pZ2h0IGhhdmUgYSBtZW1vcnkgbGVhay4nLCAnVGhlIHJ1bGVDb3VudGVyIGlzIG5vdCBzdXBwb3NlZCB0byBncm93IHRoYXQgbXVjaC4nXS5qb2luKCcnKSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHJ1bGVDb3VudGVyO1xuICB9O1xuXG4gIHJldHVybiAocnVsZSwgc3R5bGVTaGVldCkgPT4ge1xuICAgIGNvbnN0IG5hbWUgPSBzdHlsZVNoZWV0Lm9wdGlvbnMubmFtZTsgLy8gSXMgYSBnbG9iYWwgc3RhdGljIE1VSSBzdHlsZT9cblxuICAgIGlmIChuYW1lICYmIG5hbWUuaW5kZXhPZignTXVpJykgPT09IDAgJiYgIXN0eWxlU2hlZXQub3B0aW9ucy5saW5rICYmICFkaXNhYmxlR2xvYmFsKSB7XG4gICAgICAvLyBXZSBjYW4gdXNlIGEgc2hvcnRoYW5kIGNsYXNzIG5hbWUsIHdlIG5ldmVyIHVzZSB0aGUga2V5cyB0byBzdHlsZSB0aGUgY29tcG9uZW50cy5cbiAgICAgIGlmIChzdGF0ZUNsYXNzZXMuaW5kZXhPZihydWxlLmtleSkgIT09IC0xKSB7XG4gICAgICAgIHJldHVybiBgTXVpLSR7cnVsZS5rZXl9YDtcbiAgICAgIH1cblxuICAgICAgY29uc3QgcHJlZml4ID0gYCR7c2VlZFByZWZpeH0ke25hbWV9LSR7cnVsZS5rZXl9YDtcblxuICAgICAgaWYgKCFzdHlsZVNoZWV0Lm9wdGlvbnMudGhlbWVbbmVzdGVkXSB8fCBzZWVkICE9PSAnJykge1xuICAgICAgICByZXR1cm4gcHJlZml4O1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gYCR7cHJlZml4fS0ke2dldE5leHRDb3VudGVySWQoKX1gO1xuICAgIH1cblxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICByZXR1cm4gYCR7c2VlZFByZWZpeH0ke3Byb2R1Y3Rpb25QcmVmaXh9JHtnZXROZXh0Q291bnRlcklkKCl9YDtcbiAgICB9XG5cbiAgICBjb25zdCBzdWZmaXggPSBgJHtydWxlLmtleX0tJHtnZXROZXh0Q291bnRlcklkKCl9YDsgLy8gSGVscCB3aXRoIGRlYnVnZ2FiaWxpdHkuXG5cbiAgICBpZiAoc3R5bGVTaGVldC5vcHRpb25zLmNsYXNzTmFtZVByZWZpeCkge1xuICAgICAgcmV0dXJuIGAke3NlZWRQcmVmaXh9JHtzdHlsZVNoZWV0Lm9wdGlvbnMuY2xhc3NOYW1lUHJlZml4fS0ke3N1ZmZpeH1gO1xuICAgIH1cblxuICAgIHJldHVybiBgJHtzZWVkUHJlZml4fSR7c3VmZml4fWA7XG4gIH07XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlU3R5bGVzKHN0eWxlcykge1xuICByZXR1cm4gc3R5bGVzO1xufSIsImltcG9ydCBfZXh0ZW5kcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZXh0ZW5kc1wiO1xuaW1wb3J0IHsgZGVlcG1lcmdlIH0gZnJvbSAnQG11aS91dGlscyc7XG5pbXBvcnQgcHJvcHNUb0NsYXNzS2V5IGZyb20gJy4uL3Byb3BzVG9DbGFzc0tleSc7XG5pbXBvcnQgbm9vcFRoZW1lIGZyb20gJy4vbm9vcFRoZW1lJztcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFN0eWxlc0NyZWF0b3Ioc3R5bGVzT3JDcmVhdG9yKSB7XG4gIGNvbnN0IHRoZW1pbmdFbmFibGVkID0gdHlwZW9mIHN0eWxlc09yQ3JlYXRvciA9PT0gJ2Z1bmN0aW9uJztcblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGlmICh0eXBlb2Ygc3R5bGVzT3JDcmVhdG9yICE9PSAnb2JqZWN0JyAmJiAhdGhlbWluZ0VuYWJsZWQpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoWydNVUk6IFRoZSBgc3R5bGVzYCBhcmd1bWVudCBwcm92aWRlZCBpcyBpbnZhbGlkLicsICdZb3UgbmVlZCB0byBwcm92aWRlIGEgZnVuY3Rpb24gZ2VuZXJhdGluZyB0aGUgc3R5bGVzIG9yIGEgc3R5bGVzIG9iamVjdC4nXS5qb2luKCdcXG4nKSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBjcmVhdGU6ICh0aGVtZSwgbmFtZSkgPT4ge1xuICAgICAgbGV0IHN0eWxlcztcblxuICAgICAgdHJ5IHtcbiAgICAgICAgc3R5bGVzID0gdGhlbWluZ0VuYWJsZWQgPyBzdHlsZXNPckNyZWF0b3IodGhlbWUpIDogc3R5bGVzT3JDcmVhdG9yO1xuICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgaWYgKHRoZW1pbmdFbmFibGVkID09PSB0cnVlICYmIHRoZW1lID09PSBub29wVGhlbWUpIHtcbiAgICAgICAgICAgIC8vIFRPRE86IHByZXBlbmQgZXJyb3IgbWVzc2FnZS9uYW1lIGluc3RlYWRcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoWydNVUk6IFRoZSBgc3R5bGVzYCBhcmd1bWVudCBwcm92aWRlZCBpcyBpbnZhbGlkLicsICdZb3UgYXJlIHByb3ZpZGluZyBhIGZ1bmN0aW9uIHdpdGhvdXQgYSB0aGVtZSBpbiB0aGUgY29udGV4dC4nLCAnT25lIG9mIHRoZSBwYXJlbnQgZWxlbWVudHMgbmVlZHMgdG8gdXNlIGEgVGhlbWVQcm92aWRlci4nXS5qb2luKCdcXG4nKSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgfVxuXG4gICAgICBpZiAoIW5hbWUgfHwgIXRoZW1lLmNvbXBvbmVudHMgfHwgIXRoZW1lLmNvbXBvbmVudHNbbmFtZV0gfHwgIXRoZW1lLmNvbXBvbmVudHNbbmFtZV0uc3R5bGVPdmVycmlkZXMgJiYgIXRoZW1lLmNvbXBvbmVudHNbbmFtZV0udmFyaWFudHMpIHtcbiAgICAgICAgcmV0dXJuIHN0eWxlcztcbiAgICAgIH1cblxuICAgICAgY29uc3Qgb3ZlcnJpZGVzID0gdGhlbWUuY29tcG9uZW50c1tuYW1lXS5zdHlsZU92ZXJyaWRlcyB8fCB7fTtcbiAgICAgIGNvbnN0IHZhcmlhbnRzID0gdGhlbWUuY29tcG9uZW50c1tuYW1lXS52YXJpYW50cyB8fCBbXTtcblxuICAgICAgY29uc3Qgc3R5bGVzV2l0aE92ZXJyaWRlcyA9IF9leHRlbmRzKHt9LCBzdHlsZXMpO1xuXG4gICAgICBPYmplY3Qua2V5cyhvdmVycmlkZXMpLmZvckVhY2goa2V5ID0+IHtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICBpZiAoIXN0eWxlc1dpdGhPdmVycmlkZXNba2V5XSkge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKFsnTVVJOiBZb3UgYXJlIHRyeWluZyB0byBvdmVycmlkZSBhIHN0eWxlIHRoYXQgZG9lcyBub3QgZXhpc3QuJywgYEZpeCB0aGUgXFxgJHtrZXl9XFxgIGtleSBvZiBcXGB0aGVtZS5jb21wb25lbnRzLiR7bmFtZX0uc3R5bGVPdmVycmlkZXNcXGAuYCwgJycsIGBJZiB5b3UgaW50ZW50aW9uYWxseSB3YW50ZWQgdG8gYWRkIGEgbmV3IGtleSwgcGxlYXNlIHVzZSB0aGUgdGhlbWUuY29tcG9uZW50c1ske25hbWV9XS52YXJpYW50cyBvcHRpb24uYF0uam9pbignXFxuJykpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHN0eWxlc1dpdGhPdmVycmlkZXNba2V5XSA9IGRlZXBtZXJnZShzdHlsZXNXaXRoT3ZlcnJpZGVzW2tleV0gfHwge30sIG92ZXJyaWRlc1trZXldKTtcbiAgICAgIH0pO1xuICAgICAgdmFyaWFudHMuZm9yRWFjaChkZWZpbml0aW9uID0+IHtcbiAgICAgICAgY29uc3QgY2xhc3NLZXkgPSBwcm9wc1RvQ2xhc3NLZXkoZGVmaW5pdGlvbi5wcm9wcyk7XG4gICAgICAgIHN0eWxlc1dpdGhPdmVycmlkZXNbY2xhc3NLZXldID0gZGVlcG1lcmdlKHN0eWxlc1dpdGhPdmVycmlkZXNbY2xhc3NLZXldIHx8IHt9LCBkZWZpbml0aW9uLnN0eWxlKTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIHN0eWxlc1dpdGhPdmVycmlkZXM7XG4gICAgfSxcbiAgICBvcHRpb25zOiB7fVxuICB9O1xufSIsIi8vIFdlIHVzZSB0aGUgc2FtZSBlbXB0eSBvYmplY3QgdG8gcmVmIGNvdW50IHRoZSBzdHlsZXMgdGhhdCBkb24ndCBuZWVkIGEgdGhlbWUgb2JqZWN0LlxuY29uc3Qgbm9vcFRoZW1lID0ge307XG5leHBvcnQgZGVmYXVsdCBub29wVGhlbWU7IiwiaW1wb3J0IF9leHRlbmRzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9leHRlbmRzXCI7XG5cbi8qIGVzbGludC1kaXNhYmxlIG5vLXJlc3RyaWN0ZWQtc3ludGF4ICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRUaGVtZVByb3BzKHBhcmFtcykge1xuICBjb25zdCB7XG4gICAgdGhlbWUsXG4gICAgbmFtZSxcbiAgICBwcm9wc1xuICB9ID0gcGFyYW1zO1xuXG4gIGlmICghdGhlbWUgfHwgIXRoZW1lLmNvbXBvbmVudHMgfHwgIXRoZW1lLmNvbXBvbmVudHNbbmFtZV0gfHwgIXRoZW1lLmNvbXBvbmVudHNbbmFtZV0uZGVmYXVsdFByb3BzKSB7XG4gICAgcmV0dXJuIHByb3BzO1xuICB9XG5cbiAgY29uc3Qgb3V0cHV0ID0gX2V4dGVuZHMoe30sIHByb3BzKTsgLy8gUmVzb2x2ZSBkZWZhdWx0IHByb3BzLCBjb2RlIGJvcnJvdyBmcm9tIFJlYWN0IHNvdXJjZS5cbiAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlYWN0L2Jsb2IvMTVhOGYwMzE4MzhhNTUzZTQxYzBiNjZlYjFiY2YxZGE4NDQ4MTA0ZC9wYWNrYWdlcy9yZWFjdC9zcmMvUmVhY3RFbGVtZW50LmpzI0wyMjFcblxuXG4gIGNvbnN0IGRlZmF1bHRQcm9wcyA9IHRoZW1lLmNvbXBvbmVudHNbbmFtZV0uZGVmYXVsdFByb3BzO1xuICBsZXQgcHJvcE5hbWU7XG5cbiAgZm9yIChwcm9wTmFtZSBpbiBkZWZhdWx0UHJvcHMpIHtcbiAgICBpZiAob3V0cHV0W3Byb3BOYW1lXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBvdXRwdXRbcHJvcE5hbWVdID0gZGVmYXVsdFByb3BzW3Byb3BOYW1lXTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gb3V0cHV0O1xufSIsIi8qKiBAbGljZW5zZSBNVUkgdjUuMC4xXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cbi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9leHBvcnQgKi9cbmltcG9ydCB7IHBvbnlmaWxsR2xvYmFsIH0gZnJvbSAnQG11aS91dGlscyc7XG4vKiBXYXJuaW5nIGlmIHRoZXJlIGFyZSBzZXZlcmFsIGluc3RhbmNlcyBvZiBAbXVpL3N0eWxlcyAqL1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Rlc3QnICYmIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gIHBvbnlmaWxsR2xvYmFsWydfX0BtdWkvc3R5bGVzLWluaXRfXyddID0gcG9ueWZpbGxHbG9iYWxbJ19fQG11aS9zdHlsZXMtaW5pdF9fJ10gfHwgMDtcblxuICBpZiAocG9ueWZpbGxHbG9iYWxbJ19fQG11aS9zdHlsZXMtaW5pdF9fJ10gPT09IDEpIHtcbiAgICBjb25zb2xlLndhcm4oWydJdCBsb29rcyBsaWtlIHRoZXJlIGFyZSBzZXZlcmFsIGluc3RhbmNlcyBvZiBgQG11aS9zdHlsZXNgIGluaXRpYWxpemVkIGluIHRoaXMgYXBwbGljYXRpb24uJywgJ1RoaXMgbWF5IGNhdXNlIHRoZW1lIHByb3BhZ2F0aW9uIGlzc3VlcywgYnJva2VuIGNsYXNzIG5hbWVzLCAnICsgJ3NwZWNpZmljaXR5IGlzc3VlcywgYW5kIG1ha2VzIHlvdXIgYXBwbGljYXRpb24gYmlnZ2VyIHdpdGhvdXQgYSBnb29kIHJlYXNvbi4nLCAnJywgJ1NlZSBodHRwczovL211aS5jb20vci9zdHlsZXMtaW5zdGFuY2Utd2FybmluZyBmb3IgbW9yZSBpbmZvLiddLmpvaW4oJ1xcbicpKTtcbiAgfVxuXG4gIHBvbnlmaWxsR2xvYmFsWydfX0BtdWkvc3R5bGVzLWluaXRfXyddICs9IDE7XG59XG5cbmV4cG9ydCB7IGRlZmF1bHQgYXMgY3JlYXRlR2VuZXJhdGVDbGFzc05hbWUgfSBmcm9tICcuL2NyZWF0ZUdlbmVyYXRlQ2xhc3NOYW1lJztcbmV4cG9ydCAqIGZyb20gJy4vY3JlYXRlR2VuZXJhdGVDbGFzc05hbWUnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBjcmVhdGVTdHlsZXMgfSBmcm9tICcuL2NyZWF0ZVN0eWxlcyc7XG5leHBvcnQgKiBmcm9tICcuL2NyZWF0ZVN0eWxlcyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIGdldFRoZW1lUHJvcHMgfSBmcm9tICcuL2dldFRoZW1lUHJvcHMnO1xuZXhwb3J0ICogZnJvbSAnLi9nZXRUaGVtZVByb3BzJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMganNzUHJlc2V0IH0gZnJvbSAnLi9qc3NQcmVzZXQnO1xuZXhwb3J0ICogZnJvbSAnLi9qc3NQcmVzZXQnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBtYWtlU3R5bGVzIH0gZnJvbSAnLi9tYWtlU3R5bGVzJztcbmV4cG9ydCAqIGZyb20gJy4vbWFrZVN0eWxlcyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIG1lcmdlQ2xhc3NlcyB9IGZyb20gJy4vbWVyZ2VDbGFzc2VzJztcbmV4cG9ydCAqIGZyb20gJy4vbWVyZ2VDbGFzc2VzJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgU2VydmVyU3R5bGVTaGVldHMgfSBmcm9tICcuL1NlcnZlclN0eWxlU2hlZXRzJztcbmV4cG9ydCAqIGZyb20gJy4vU2VydmVyU3R5bGVTaGVldHMnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBzdHlsZWQgfSBmcm9tICcuL3N0eWxlZCc7XG5leHBvcnQgKiBmcm9tICcuL3N0eWxlZCc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFN0eWxlc1Byb3ZpZGVyIH0gZnJvbSAnLi9TdHlsZXNQcm92aWRlcic7XG5leHBvcnQgKiBmcm9tICcuL1N0eWxlc1Byb3ZpZGVyJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgVGhlbWVQcm92aWRlciB9IGZyb20gJy4vVGhlbWVQcm92aWRlcic7XG5leHBvcnQgKiBmcm9tICcuL1RoZW1lUHJvdmlkZXInO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyB1c2VUaGVtZSB9IGZyb20gJy4vdXNlVGhlbWUnO1xuZXhwb3J0ICogZnJvbSAnLi91c2VUaGVtZSc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIHVzZVRoZW1lVmFyaWFudHMgfSBmcm9tICcuL3VzZVRoZW1lVmFyaWFudHMnO1xuZXhwb3J0ICogZnJvbSAnLi91c2VUaGVtZVZhcmlhbnRzJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgcHJvcHNUb0NsYXNzS2V5IH0gZnJvbSAnLi9wcm9wc1RvQ2xhc3NLZXknO1xuZXhwb3J0ICogZnJvbSAnLi9wcm9wc1RvQ2xhc3NLZXknO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyB3aXRoU3R5bGVzIH0gZnJvbSAnLi93aXRoU3R5bGVzJztcbmV4cG9ydCAqIGZyb20gJy4vd2l0aFN0eWxlcyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIHdpdGhUaGVtZSB9IGZyb20gJy4vd2l0aFRoZW1lJztcbmV4cG9ydCAqIGZyb20gJy4vd2l0aFRoZW1lJzsiLCJpbXBvcnQgZnVuY3Rpb25zIGZyb20gJ2pzcy1wbHVnaW4tcnVsZS12YWx1ZS1mdW5jdGlvbic7XG5pbXBvcnQgZ2xvYmFsIGZyb20gJ2pzcy1wbHVnaW4tZ2xvYmFsJztcbmltcG9ydCBuZXN0ZWQgZnJvbSAnanNzLXBsdWdpbi1uZXN0ZWQnO1xuaW1wb3J0IGNhbWVsQ2FzZSBmcm9tICdqc3MtcGx1Z2luLWNhbWVsLWNhc2UnO1xuaW1wb3J0IGRlZmF1bHRVbml0IGZyb20gJ2pzcy1wbHVnaW4tZGVmYXVsdC11bml0JztcbmltcG9ydCB2ZW5kb3JQcmVmaXhlciBmcm9tICdqc3MtcGx1Z2luLXZlbmRvci1wcmVmaXhlcic7XG5pbXBvcnQgcHJvcHNTb3J0IGZyb20gJ2pzcy1wbHVnaW4tcHJvcHMtc29ydCc7IC8vIFN1YnNldCBvZiBqc3MtcHJlc2V0LWRlZmF1bHQgd2l0aCBvbmx5IHRoZSBwbHVnaW5zIHRoZSBNVUkgY29tcG9uZW50cyBhcmUgdXNpbmcuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGpzc1ByZXNldCgpIHtcbiAgcmV0dXJuIHtcbiAgICBwbHVnaW5zOiBbZnVuY3Rpb25zKCksIGdsb2JhbCgpLCBuZXN0ZWQoKSwgY2FtZWxDYXNlKCksIGRlZmF1bHRVbml0KCksIC8vIERpc2FibGUgdGhlIHZlbmRvciBwcmVmaXhlciBzZXJ2ZXItc2lkZSwgaXQgZG9lcyBub3RoaW5nLlxuICAgIC8vIFRoaXMgd2F5LCB3ZSBjYW4gZ2V0IGEgcGVyZm9ybWFuY2UgYm9vc3QuXG4gICAgLy8gSW4gdGhlIGRvY3VtZW50YXRpb24sIHdlIGFyZSB1c2luZyBgYXV0b3ByZWZpeGVyYCB0byBzb2x2ZSB0aGlzIHByb2JsZW0uXG4gICAgdHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcgPyBudWxsIDogdmVuZG9yUHJlZml4ZXIoKSwgcHJvcHNTb3J0KCldXG4gIH07XG59IiwiLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L3ByZWZlci1kZWZhdWx0LWV4cG9ydCAqL1xuLy8gR2xvYmFsIGluZGV4IGNvdW50ZXIgdG8gcHJlc2VydmUgc291cmNlIG9yZGVyLlxuLy8gV2UgY3JlYXRlIHRoZSBzdHlsZSBzaGVldCBkdXJpbmcgdGhlIGNyZWF0aW9uIG9mIHRoZSBjb21wb25lbnQsXG4vLyBjaGlsZHJlbiBhcmUgaGFuZGxlZCBhZnRlciB0aGUgcGFyZW50cywgc28gdGhlIG9yZGVyIG9mIHN0eWxlIGVsZW1lbnRzIHdvdWxkIGJlIHBhcmVudC0+Y2hpbGQuXG4vLyBJdCBpcyBhIHByb2JsZW0gdGhvdWdoIHdoZW4gYSBwYXJlbnQgcGFzc2VzIGEgY2xhc3NOYW1lXG4vLyB3aGljaCBuZWVkcyB0byBvdmVycmlkZSBhbnkgY2hpbGQncyBzdHlsZXMuXG4vLyBTdHlsZVNoZWV0IG9mIHRoZSBjaGlsZCBoYXMgYSBoaWdoZXIgc3BlY2lmaWNpdHksIGJlY2F1c2Ugb2YgdGhlIHNvdXJjZSBvcmRlci5cbi8vIFNvIG91ciBzb2x1dGlvbiBpcyB0byByZW5kZXIgc2hlZXRzIHRoZW0gaW4gdGhlIHJldmVyc2Ugb3JkZXIgY2hpbGQtPnNoZWV0LCBzb1xuLy8gdGhhdCBwYXJlbnQgaGFzIGEgaGlnaGVyIHNwZWNpZmljaXR5LlxubGV0IGluZGV4Q291bnRlciA9IC0xZTk7XG5leHBvcnQgZnVuY3Rpb24gaW5jcmVtZW50KCkge1xuICBpbmRleENvdW50ZXIgKz0gMTtcblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGlmIChpbmRleENvdW50ZXIgPj0gMCkge1xuICAgICAgY29uc29sZS53YXJuKFsnTVVJOiBZb3UgbWlnaHQgaGF2ZSBhIG1lbW9yeSBsZWFrLicsICdUaGUgaW5kZXhDb3VudGVyIGlzIG5vdCBzdXBwb3NlZCB0byBncm93IHRoYXQgbXVjaC4nXS5qb2luKCdcXG4nKSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGluZGV4Q291bnRlcjtcbn0iLCJpbXBvcnQgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2VcIjtcbmltcG9ydCBfZXh0ZW5kcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZXh0ZW5kc1wiO1xuY29uc3QgX2V4Y2x1ZGVkID0gW1wibmFtZVwiLCBcImNsYXNzTmFtZVByZWZpeFwiLCBcIkNvbXBvbmVudFwiLCBcImRlZmF1bHRUaGVtZVwiXTtcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGdldER5bmFtaWNTdHlsZXMgfSBmcm9tICdqc3MnO1xuaW1wb3J0IG1lcmdlQ2xhc3NlcyBmcm9tICcuLi9tZXJnZUNsYXNzZXMnO1xuaW1wb3J0IG11bHRpS2V5U3RvcmUgZnJvbSAnLi9tdWx0aUtleVN0b3JlJztcbmltcG9ydCB1c2VUaGVtZSBmcm9tICcuLi91c2VUaGVtZSc7XG5pbXBvcnQgeyBTdHlsZXNDb250ZXh0IH0gZnJvbSAnLi4vU3R5bGVzUHJvdmlkZXInO1xuaW1wb3J0IHsgaW5jcmVtZW50IH0gZnJvbSAnLi9pbmRleENvdW50ZXInO1xuaW1wb3J0IGdldFN0eWxlc0NyZWF0b3IgZnJvbSAnLi4vZ2V0U3R5bGVzQ3JlYXRvcic7XG5pbXBvcnQgbm9vcFRoZW1lIGZyb20gJy4uL2dldFN0eWxlc0NyZWF0b3Ivbm9vcFRoZW1lJztcblxuZnVuY3Rpb24gZ2V0Q2xhc3Nlcyh7XG4gIHN0YXRlLFxuICBzdHlsZXNPcHRpb25zXG59LCBjbGFzc2VzLCBDb21wb25lbnQpIHtcbiAgaWYgKHN0eWxlc09wdGlvbnMuZGlzYWJsZUdlbmVyYXRpb24pIHtcbiAgICByZXR1cm4gY2xhc3NlcyB8fCB7fTtcbiAgfVxuXG4gIGlmICghc3RhdGUuY2FjaGVDbGFzc2VzKSB7XG4gICAgc3RhdGUuY2FjaGVDbGFzc2VzID0ge1xuICAgICAgLy8gQ2FjaGUgZm9yIHRoZSBmaW5hbGl6ZWQgY2xhc3NlcyB2YWx1ZS5cbiAgICAgIHZhbHVlOiBudWxsLFxuICAgICAgLy8gQ2FjaGUgZm9yIHRoZSBsYXN0IHVzZWQgY2xhc3NlcyBwcm9wIHBvaW50ZXIuXG4gICAgICBsYXN0UHJvcDogbnVsbCxcbiAgICAgIC8vIENhY2hlIGZvciB0aGUgbGFzdCB1c2VkIHJlbmRlcmVkIGNsYXNzZXMgcG9pbnRlci5cbiAgICAgIGxhc3RKU1M6IHt9XG4gICAgfTtcbiAgfSAvLyBUcmFja3MgaWYgZWl0aGVyIHRoZSByZW5kZXJlZCBjbGFzc2VzIG9yIGNsYXNzZXMgcHJvcCBoYXMgY2hhbmdlZCxcbiAgLy8gcmVxdWlyaW5nIHRoZSBnZW5lcmF0aW9uIG9mIGEgbmV3IGZpbmFsaXplZCBjbGFzc2VzIG9iamVjdC5cblxuXG4gIGxldCBnZW5lcmF0ZSA9IGZhbHNlO1xuXG4gIGlmIChzdGF0ZS5jbGFzc2VzICE9PSBzdGF0ZS5jYWNoZUNsYXNzZXMubGFzdEpTUykge1xuICAgIHN0YXRlLmNhY2hlQ2xhc3Nlcy5sYXN0SlNTID0gc3RhdGUuY2xhc3NlcztcbiAgICBnZW5lcmF0ZSA9IHRydWU7XG4gIH1cblxuICBpZiAoY2xhc3NlcyAhPT0gc3RhdGUuY2FjaGVDbGFzc2VzLmxhc3RQcm9wKSB7XG4gICAgc3RhdGUuY2FjaGVDbGFzc2VzLmxhc3RQcm9wID0gY2xhc3NlcztcbiAgICBnZW5lcmF0ZSA9IHRydWU7XG4gIH1cblxuICBpZiAoZ2VuZXJhdGUpIHtcbiAgICBzdGF0ZS5jYWNoZUNsYXNzZXMudmFsdWUgPSBtZXJnZUNsYXNzZXMoe1xuICAgICAgYmFzZUNsYXNzZXM6IHN0YXRlLmNhY2hlQ2xhc3Nlcy5sYXN0SlNTLFxuICAgICAgbmV3Q2xhc3NlczogY2xhc3NlcyxcbiAgICAgIENvbXBvbmVudFxuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIHN0YXRlLmNhY2hlQ2xhc3Nlcy52YWx1ZTtcbn1cblxuZnVuY3Rpb24gYXR0YWNoKHtcbiAgc3RhdGUsXG4gIHRoZW1lLFxuICBzdHlsZXNPcHRpb25zLFxuICBzdHlsZXNDcmVhdG9yLFxuICBuYW1lXG59LCBwcm9wcykge1xuICBpZiAoc3R5bGVzT3B0aW9ucy5kaXNhYmxlR2VuZXJhdGlvbikge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGxldCBzaGVldE1hbmFnZXIgPSBtdWx0aUtleVN0b3JlLmdldChzdHlsZXNPcHRpb25zLnNoZWV0c01hbmFnZXIsIHN0eWxlc0NyZWF0b3IsIHRoZW1lKTtcblxuICBpZiAoIXNoZWV0TWFuYWdlcikge1xuICAgIHNoZWV0TWFuYWdlciA9IHtcbiAgICAgIHJlZnM6IDAsXG4gICAgICBzdGF0aWNTaGVldDogbnVsbCxcbiAgICAgIGR5bmFtaWNTdHlsZXM6IG51bGxcbiAgICB9O1xuICAgIG11bHRpS2V5U3RvcmUuc2V0KHN0eWxlc09wdGlvbnMuc2hlZXRzTWFuYWdlciwgc3R5bGVzQ3JlYXRvciwgdGhlbWUsIHNoZWV0TWFuYWdlcik7XG4gIH1cblxuICBjb25zdCBvcHRpb25zID0gX2V4dGVuZHMoe30sIHN0eWxlc0NyZWF0b3Iub3B0aW9ucywgc3R5bGVzT3B0aW9ucywge1xuICAgIHRoZW1lLFxuICAgIGZsaXA6IHR5cGVvZiBzdHlsZXNPcHRpb25zLmZsaXAgPT09ICdib29sZWFuJyA/IHN0eWxlc09wdGlvbnMuZmxpcCA6IHRoZW1lLmRpcmVjdGlvbiA9PT0gJ3J0bCdcbiAgfSk7XG5cbiAgb3B0aW9ucy5nZW5lcmF0ZUlkID0gb3B0aW9ucy5zZXJ2ZXJHZW5lcmF0ZUNsYXNzTmFtZSB8fCBvcHRpb25zLmdlbmVyYXRlQ2xhc3NOYW1lO1xuICBjb25zdCBzaGVldHNSZWdpc3RyeSA9IHN0eWxlc09wdGlvbnMuc2hlZXRzUmVnaXN0cnk7XG5cbiAgaWYgKHNoZWV0TWFuYWdlci5yZWZzID09PSAwKSB7XG4gICAgbGV0IHN0YXRpY1NoZWV0O1xuXG4gICAgaWYgKHN0eWxlc09wdGlvbnMuc2hlZXRzQ2FjaGUpIHtcbiAgICAgIHN0YXRpY1NoZWV0ID0gbXVsdGlLZXlTdG9yZS5nZXQoc3R5bGVzT3B0aW9ucy5zaGVldHNDYWNoZSwgc3R5bGVzQ3JlYXRvciwgdGhlbWUpO1xuICAgIH1cblxuICAgIGNvbnN0IHN0eWxlcyA9IHN0eWxlc0NyZWF0b3IuY3JlYXRlKHRoZW1lLCBuYW1lKTtcblxuICAgIGlmICghc3RhdGljU2hlZXQpIHtcbiAgICAgIHN0YXRpY1NoZWV0ID0gc3R5bGVzT3B0aW9ucy5qc3MuY3JlYXRlU3R5bGVTaGVldChzdHlsZXMsIF9leHRlbmRzKHtcbiAgICAgICAgbGluazogZmFsc2VcbiAgICAgIH0sIG9wdGlvbnMpKTtcbiAgICAgIHN0YXRpY1NoZWV0LmF0dGFjaCgpO1xuXG4gICAgICBpZiAoc3R5bGVzT3B0aW9ucy5zaGVldHNDYWNoZSkge1xuICAgICAgICBtdWx0aUtleVN0b3JlLnNldChzdHlsZXNPcHRpb25zLnNoZWV0c0NhY2hlLCBzdHlsZXNDcmVhdG9yLCB0aGVtZSwgc3RhdGljU2hlZXQpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChzaGVldHNSZWdpc3RyeSkge1xuICAgICAgc2hlZXRzUmVnaXN0cnkuYWRkKHN0YXRpY1NoZWV0KTtcbiAgICB9XG5cbiAgICBzaGVldE1hbmFnZXIuc3RhdGljU2hlZXQgPSBzdGF0aWNTaGVldDtcbiAgICBzaGVldE1hbmFnZXIuZHluYW1pY1N0eWxlcyA9IGdldER5bmFtaWNTdHlsZXMoc3R5bGVzKTtcbiAgfVxuXG4gIGlmIChzaGVldE1hbmFnZXIuZHluYW1pY1N0eWxlcykge1xuICAgIGNvbnN0IGR5bmFtaWNTaGVldCA9IHN0eWxlc09wdGlvbnMuanNzLmNyZWF0ZVN0eWxlU2hlZXQoc2hlZXRNYW5hZ2VyLmR5bmFtaWNTdHlsZXMsIF9leHRlbmRzKHtcbiAgICAgIGxpbms6IHRydWVcbiAgICB9LCBvcHRpb25zKSk7XG4gICAgZHluYW1pY1NoZWV0LnVwZGF0ZShwcm9wcyk7XG4gICAgZHluYW1pY1NoZWV0LmF0dGFjaCgpO1xuICAgIHN0YXRlLmR5bmFtaWNTaGVldCA9IGR5bmFtaWNTaGVldDtcbiAgICBzdGF0ZS5jbGFzc2VzID0gbWVyZ2VDbGFzc2VzKHtcbiAgICAgIGJhc2VDbGFzc2VzOiBzaGVldE1hbmFnZXIuc3RhdGljU2hlZXQuY2xhc3NlcyxcbiAgICAgIG5ld0NsYXNzZXM6IGR5bmFtaWNTaGVldC5jbGFzc2VzXG4gICAgfSk7XG5cbiAgICBpZiAoc2hlZXRzUmVnaXN0cnkpIHtcbiAgICAgIHNoZWV0c1JlZ2lzdHJ5LmFkZChkeW5hbWljU2hlZXQpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBzdGF0ZS5jbGFzc2VzID0gc2hlZXRNYW5hZ2VyLnN0YXRpY1NoZWV0LmNsYXNzZXM7XG4gIH1cblxuICBzaGVldE1hbmFnZXIucmVmcyArPSAxO1xufVxuXG5mdW5jdGlvbiB1cGRhdGUoe1xuICBzdGF0ZVxufSwgcHJvcHMpIHtcbiAgaWYgKHN0YXRlLmR5bmFtaWNTaGVldCkge1xuICAgIHN0YXRlLmR5bmFtaWNTaGVldC51cGRhdGUocHJvcHMpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGRldGFjaCh7XG4gIHN0YXRlLFxuICB0aGVtZSxcbiAgc3R5bGVzT3B0aW9ucyxcbiAgc3R5bGVzQ3JlYXRvclxufSkge1xuICBpZiAoc3R5bGVzT3B0aW9ucy5kaXNhYmxlR2VuZXJhdGlvbikge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGNvbnN0IHNoZWV0TWFuYWdlciA9IG11bHRpS2V5U3RvcmUuZ2V0KHN0eWxlc09wdGlvbnMuc2hlZXRzTWFuYWdlciwgc3R5bGVzQ3JlYXRvciwgdGhlbWUpO1xuICBzaGVldE1hbmFnZXIucmVmcyAtPSAxO1xuICBjb25zdCBzaGVldHNSZWdpc3RyeSA9IHN0eWxlc09wdGlvbnMuc2hlZXRzUmVnaXN0cnk7XG5cbiAgaWYgKHNoZWV0TWFuYWdlci5yZWZzID09PSAwKSB7XG4gICAgbXVsdGlLZXlTdG9yZS5kZWxldGUoc3R5bGVzT3B0aW9ucy5zaGVldHNNYW5hZ2VyLCBzdHlsZXNDcmVhdG9yLCB0aGVtZSk7XG4gICAgc3R5bGVzT3B0aW9ucy5qc3MucmVtb3ZlU3R5bGVTaGVldChzaGVldE1hbmFnZXIuc3RhdGljU2hlZXQpO1xuXG4gICAgaWYgKHNoZWV0c1JlZ2lzdHJ5KSB7XG4gICAgICBzaGVldHNSZWdpc3RyeS5yZW1vdmUoc2hlZXRNYW5hZ2VyLnN0YXRpY1NoZWV0KTtcbiAgICB9XG4gIH1cblxuICBpZiAoc3RhdGUuZHluYW1pY1NoZWV0KSB7XG4gICAgc3R5bGVzT3B0aW9ucy5qc3MucmVtb3ZlU3R5bGVTaGVldChzdGF0ZS5keW5hbWljU2hlZXQpO1xuXG4gICAgaWYgKHNoZWV0c1JlZ2lzdHJ5KSB7XG4gICAgICBzaGVldHNSZWdpc3RyeS5yZW1vdmUoc3RhdGUuZHluYW1pY1NoZWV0KTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gdXNlU3luY2hyb25vdXNFZmZlY3QoZnVuYywgdmFsdWVzKSB7XG4gIGNvbnN0IGtleSA9IFJlYWN0LnVzZVJlZihbXSk7XG4gIGxldCBvdXRwdXQ7IC8vIFN0b3JlIFwiZ2VuZXJhdGlvblwiIGtleS4gSnVzdCByZXR1cm5zIGEgbmV3IG9iamVjdCBldmVyeSB0aW1lXG5cbiAgY29uc3QgY3VycmVudEtleSA9IFJlYWN0LnVzZU1lbW8oKCkgPT4gKHt9KSwgdmFsdWVzKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSByZWFjdC1ob29rcy9leGhhdXN0aXZlLWRlcHNcbiAgLy8gXCJ0aGUgZmlyc3QgcmVuZGVyXCIsIG9yIFwibWVtbyBkcm9wcGVkIHRoZSB2YWx1ZVwiXG5cbiAgaWYgKGtleS5jdXJyZW50ICE9PSBjdXJyZW50S2V5KSB7XG4gICAga2V5LmN1cnJlbnQgPSBjdXJyZW50S2V5O1xuICAgIG91dHB1dCA9IGZ1bmMoKTtcbiAgfVxuXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiAoKSA9PiB7XG4gICAgaWYgKG91dHB1dCkge1xuICAgICAgb3V0cHV0KCk7XG4gICAgfVxuICB9LCBbY3VycmVudEtleV0gLy8gZXNsaW50LWRpc2FibGUtbGluZSByZWFjdC1ob29rcy9leGhhdXN0aXZlLWRlcHNcbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWFrZVN0eWxlcyhzdHlsZXNPckNyZWF0b3IsIG9wdGlvbnMgPSB7fSkge1xuICBjb25zdCB7XG4gICAgLy8gYWxpYXMgZm9yIGNsYXNzTmFtZVByZWZpeCwgaWYgcHJvdmlkZWQgd2lsbCBsaXN0ZW4gdG8gdGhlbWUgKHJlcXVpcmVkIGZvciB0aGVtZS5jb21wb25lbnRzW25hbWVdLnN0eWxlT3ZlcnJpZGVzKVxuICAgIG5hbWUsXG4gICAgLy8gSGVscCB3aXRoIGRlYnVnZ2FiaWxpdHkuXG4gICAgY2xhc3NOYW1lUHJlZml4OiBjbGFzc05hbWVQcmVmaXhPcHRpb24sXG4gICAgQ29tcG9uZW50LFxuICAgIGRlZmF1bHRUaGVtZSA9IG5vb3BUaGVtZVxuICB9ID0gb3B0aW9ucyxcbiAgICAgICAgc3R5bGVzT3B0aW9uczIgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShvcHRpb25zLCBfZXhjbHVkZWQpO1xuXG4gIGNvbnN0IHN0eWxlc0NyZWF0b3IgPSBnZXRTdHlsZXNDcmVhdG9yKHN0eWxlc09yQ3JlYXRvcik7XG4gIGNvbnN0IGNsYXNzTmFtZVByZWZpeCA9IG5hbWUgfHwgY2xhc3NOYW1lUHJlZml4T3B0aW9uIHx8ICdtYWtlU3R5bGVzJztcbiAgc3R5bGVzQ3JlYXRvci5vcHRpb25zID0ge1xuICAgIGluZGV4OiBpbmNyZW1lbnQoKSxcbiAgICBuYW1lLFxuICAgIG1ldGE6IGNsYXNzTmFtZVByZWZpeCxcbiAgICBjbGFzc05hbWVQcmVmaXhcbiAgfTtcblxuICBjb25zdCB1c2VTdHlsZXMgPSAocHJvcHMgPSB7fSkgPT4ge1xuICAgIGNvbnN0IHRoZW1lID0gdXNlVGhlbWUoKSB8fCBkZWZhdWx0VGhlbWU7XG5cbiAgICBjb25zdCBzdHlsZXNPcHRpb25zID0gX2V4dGVuZHMoe30sIFJlYWN0LnVzZUNvbnRleHQoU3R5bGVzQ29udGV4dCksIHN0eWxlc09wdGlvbnMyKTtcblxuICAgIGNvbnN0IGluc3RhbmNlID0gUmVhY3QudXNlUmVmKCk7XG4gICAgY29uc3Qgc2hvdWxkVXBkYXRlID0gUmVhY3QudXNlUmVmKCk7XG4gICAgdXNlU3luY2hyb25vdXNFZmZlY3QoKCkgPT4ge1xuICAgICAgY29uc3QgY3VycmVudCA9IHtcbiAgICAgICAgbmFtZSxcbiAgICAgICAgc3RhdGU6IHt9LFxuICAgICAgICBzdHlsZXNDcmVhdG9yLFxuICAgICAgICBzdHlsZXNPcHRpb25zLFxuICAgICAgICB0aGVtZVxuICAgICAgfTtcbiAgICAgIGF0dGFjaChjdXJyZW50LCBwcm9wcyk7XG4gICAgICBzaG91bGRVcGRhdGUuY3VycmVudCA9IGZhbHNlO1xuICAgICAgaW5zdGFuY2UuY3VycmVudCA9IGN1cnJlbnQ7XG4gICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICBkZXRhY2goY3VycmVudCk7XG4gICAgICB9O1xuICAgIH0sIFt0aGVtZSwgc3R5bGVzQ3JlYXRvcl0pO1xuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICBpZiAoc2hvdWxkVXBkYXRlLmN1cnJlbnQpIHtcbiAgICAgICAgdXBkYXRlKGluc3RhbmNlLmN1cnJlbnQsIHByb3BzKTtcbiAgICAgIH1cblxuICAgICAgc2hvdWxkVXBkYXRlLmN1cnJlbnQgPSB0cnVlO1xuICAgIH0pO1xuICAgIGNvbnN0IGNsYXNzZXMgPSBnZXRDbGFzc2VzKGluc3RhbmNlLmN1cnJlbnQsIHByb3BzLmNsYXNzZXMsIENvbXBvbmVudCk7XG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL3J1bGVzLW9mLWhvb2tzXG4gICAgICBSZWFjdC51c2VEZWJ1Z1ZhbHVlKGNsYXNzZXMpO1xuICAgIH1cblxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBjb25zdCBzdXBwb3J0ZWRDb21wb25lbnRzID0gWydNdWlBdmF0YXInLCAnTXVpQmFkZ2UnLCAnTXVpQnV0dG9uJywgJ011aUJ1dHRvbkdyb3VwJywgJ011aUNoaXAnLCAnTXVpRGl2aWRlcicsICdNdWlGYWInLCAnTXVpUGFwZXInLCAnTXVpVG9vbGJhcicsICdNdWlUeXBvZ3JhcGh5JywgJ011aUFsZXJ0JywgJ011aVBhZ2luYXRpb24nLCAnTXVpUGFnaW5hdGlvbkl0ZW0nLCAnTXVpU2tlbGV0b24nLCAnTXVpVGltZWxpbmVEb3QnXTtcblxuICAgICAgaWYgKG5hbWUgJiYgc3VwcG9ydGVkQ29tcG9uZW50cy5pbmRleE9mKG5hbWUpID49IDAgJiYgcHJvcHMudmFyaWFudCAmJiAhY2xhc3Nlc1twcm9wcy52YXJpYW50XSkge1xuICAgICAgICBjb25zb2xlLmVycm9yKFtgTVVJOiBZb3UgYXJlIHVzaW5nIGEgdmFyaWFudCB2YWx1ZSBcXGAke3Byb3BzLnZhcmlhbnR9XFxgIGZvciB3aGljaCB5b3UgZGlkbid0IGRlZmluZSBzdHlsZXMuYCwgYFBsZWFzZSBjcmVhdGUgYSBuZXcgdmFyaWFudCBtYXRjaGVyIGluIHlvdXIgdGhlbWUgZm9yIHRoaXMgdmFyaWFudC4gVG8gbGVhcm4gbW9yZSBhYm91dCBtYXRjaGVycyB2aXNpdCBodHRwczovL211aS5jb20vci9jdXN0b20tY29tcG9uZW50LXZhcmlhbnRzLmBdLmpvaW4oJ1xcbicpKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gY2xhc3NlcztcbiAgfTtcblxuICByZXR1cm4gdXNlU3R5bGVzO1xufSIsIi8vIFVzZWQgaHR0cHM6Ly9naXRodWIuY29tL3RoaW5rbG9vcC9tdWx0aS1rZXktY2FjaGUgYXMgaW5zcGlyYXRpb25cbmNvbnN0IG11bHRpS2V5U3RvcmUgPSB7XG4gIHNldDogKGNhY2hlLCBrZXkxLCBrZXkyLCB2YWx1ZSkgPT4ge1xuICAgIGxldCBzdWJDYWNoZSA9IGNhY2hlLmdldChrZXkxKTtcblxuICAgIGlmICghc3ViQ2FjaGUpIHtcbiAgICAgIHN1YkNhY2hlID0gbmV3IE1hcCgpO1xuICAgICAgY2FjaGUuc2V0KGtleTEsIHN1YkNhY2hlKTtcbiAgICB9XG5cbiAgICBzdWJDYWNoZS5zZXQoa2V5MiwgdmFsdWUpO1xuICB9LFxuICBnZXQ6IChjYWNoZSwga2V5MSwga2V5MikgPT4ge1xuICAgIGNvbnN0IHN1YkNhY2hlID0gY2FjaGUuZ2V0KGtleTEpO1xuICAgIHJldHVybiBzdWJDYWNoZSA/IHN1YkNhY2hlLmdldChrZXkyKSA6IHVuZGVmaW5lZDtcbiAgfSxcbiAgZGVsZXRlOiAoY2FjaGUsIGtleTEsIGtleTIpID0+IHtcbiAgICBjb25zdCBzdWJDYWNoZSA9IGNhY2hlLmdldChrZXkxKTtcbiAgICBzdWJDYWNoZS5kZWxldGUoa2V5Mik7XG4gIH1cbn07XG5leHBvcnQgZGVmYXVsdCBtdWx0aUtleVN0b3JlOyIsImltcG9ydCBfZXh0ZW5kcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZXh0ZW5kc1wiO1xuaW1wb3J0IHsgZ2V0RGlzcGxheU5hbWUgfSBmcm9tICdAbXVpL3V0aWxzJztcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1lcmdlQ2xhc3NlcyhvcHRpb25zID0ge30pIHtcbiAgY29uc3Qge1xuICAgIGJhc2VDbGFzc2VzLFxuICAgIG5ld0NsYXNzZXMsXG4gICAgQ29tcG9uZW50XG4gIH0gPSBvcHRpb25zO1xuXG4gIGlmICghbmV3Q2xhc3Nlcykge1xuICAgIHJldHVybiBiYXNlQ2xhc3NlcztcbiAgfVxuXG4gIGNvbnN0IG5leHRDbGFzc2VzID0gX2V4dGVuZHMoe30sIGJhc2VDbGFzc2VzKTtcblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGlmICh0eXBlb2YgbmV3Q2xhc3NlcyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoW2BNVUk6IFRoZSB2YWx1ZSBcXGAke25ld0NsYXNzZXN9XFxgIGAgKyBgcHJvdmlkZWQgdG8gdGhlIGNsYXNzZXMgcHJvcCBvZiAke2dldERpc3BsYXlOYW1lKENvbXBvbmVudCl9IGlzIGluY29ycmVjdC5gLCAnWW91IG1pZ2h0IHdhbnQgdG8gdXNlIHRoZSBjbGFzc05hbWUgcHJvcCBpbnN0ZWFkLiddLmpvaW4oJ1xcbicpKTtcbiAgICAgIHJldHVybiBiYXNlQ2xhc3NlcztcbiAgICB9XG4gIH1cblxuICBPYmplY3Qua2V5cyhuZXdDbGFzc2VzKS5mb3JFYWNoKGtleSA9PiB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGlmICghYmFzZUNsYXNzZXNba2V5XSAmJiBuZXdDbGFzc2VzW2tleV0pIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihbYE1VSTogVGhlIGtleSBcXGAke2tleX1cXGAgYCArIGBwcm92aWRlZCB0byB0aGUgY2xhc3NlcyBwcm9wIGlzIG5vdCBpbXBsZW1lbnRlZCBpbiAke2dldERpc3BsYXlOYW1lKENvbXBvbmVudCl9LmAsIGBZb3UgY2FuIG9ubHkgb3ZlcnJpZGUgb25lIG9mIHRoZSBmb2xsb3dpbmc6ICR7T2JqZWN0LmtleXMoYmFzZUNsYXNzZXMpLmpvaW4oJywnKX0uYF0uam9pbignXFxuJykpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmV3Q2xhc3Nlc1trZXldICYmIHR5cGVvZiBuZXdDbGFzc2VzW2tleV0gIT09ICdzdHJpbmcnKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoW2BNVUk6IFRoZSBrZXkgXFxgJHtrZXl9XFxgIGAgKyBgcHJvdmlkZWQgdG8gdGhlIGNsYXNzZXMgcHJvcCBpcyBub3QgdmFsaWQgZm9yICR7Z2V0RGlzcGxheU5hbWUoQ29tcG9uZW50KX0uYCwgYFlvdSBuZWVkIHRvIHByb3ZpZGUgYSBub24gZW1wdHkgc3RyaW5nIGluc3RlYWQgb2Y6ICR7bmV3Q2xhc3Nlc1trZXldfS5gXS5qb2luKCdcXG4nKSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKG5ld0NsYXNzZXNba2V5XSkge1xuICAgICAgbmV4dENsYXNzZXNba2V5XSA9IGAke2Jhc2VDbGFzc2VzW2tleV19ICR7bmV3Q2xhc3Nlc1trZXldfWA7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIG5leHRDbGFzc2VzO1xufSIsImltcG9ydCBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZSBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZVwiO1xuY29uc3QgX2V4Y2x1ZGVkID0gW1widmFyaWFudFwiXTtcbmltcG9ydCB7IHVuc3RhYmxlX2NhcGl0YWxpemUgYXMgY2FwaXRhbGl6ZSB9IGZyb20gJ0BtdWkvdXRpbHMnO1xuXG5mdW5jdGlvbiBpc0VtcHR5KHN0cmluZykge1xuICByZXR1cm4gc3RyaW5nLmxlbmd0aCA9PT0gMDtcbn1cbi8qKlxuICogR2VuZXJhdGVzIHN0cmluZyBjbGFzc0tleSBiYXNlZCBvbiB0aGUgcHJvcGVydGllcyBwcm92aWRlZC4gSXQgc3RhcnRzIHdpdGggdGhlXG4gKiB2YXJpYW50IGlmIGRlZmluZWQsIGFuZCB0aGVuIGl0IGFwcGVuZHMgYWxsIG90aGVyIHByb3BlcnRpZXMgaW4gYWxwaGFiZXRpY2FsIG9yZGVyLlxuICogQHBhcmFtIHtvYmplY3R9IHByb3BzIC0gdGhlIHByb3BlcnRpZXMgZm9yIHdoaWNoIHRoZSBjbGFzc0tleSBzaG91bGQgYmUgY3JlYXRlZFxuICovXG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcHJvcHNUb0NsYXNzS2V5KHByb3BzKSB7XG4gIGNvbnN0IHtcbiAgICB2YXJpYW50XG4gIH0gPSBwcm9wcyxcbiAgICAgICAgb3RoZXIgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShwcm9wcywgX2V4Y2x1ZGVkKTtcblxuICBsZXQgY2xhc3NLZXkgPSB2YXJpYW50IHx8ICcnO1xuICBPYmplY3Qua2V5cyhvdGhlcikuc29ydCgpLmZvckVhY2goa2V5ID0+IHtcbiAgICBpZiAoa2V5ID09PSAnY29sb3InKSB7XG4gICAgICBjbGFzc0tleSArPSBpc0VtcHR5KGNsYXNzS2V5KSA/IHByb3BzW2tleV0gOiBjYXBpdGFsaXplKHByb3BzW2tleV0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBjbGFzc0tleSArPSBgJHtpc0VtcHR5KGNsYXNzS2V5KSA/IGtleSA6IGNhcGl0YWxpemUoa2V5KX0ke2NhcGl0YWxpemUocHJvcHNba2V5XS50b1N0cmluZygpKX1gO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiBjbGFzc0tleTtcbn0iLCJpbXBvcnQgX2V4dGVuZHMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2V4dGVuZHNcIjtcbmltcG9ydCBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZSBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZVwiO1xuY29uc3QgX2V4Y2x1ZGVkID0gW1wibmFtZVwiXSxcbiAgICAgIF9leGNsdWRlZDIgPSBbXCJjaGlsZHJlblwiLCBcImNsYXNzTmFtZVwiLCBcImNsb25lXCIsIFwiY29tcG9uZW50XCJdO1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IGNsc3ggZnJvbSAnY2xzeCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgY2hhaW5Qcm9wVHlwZXMsIGdldERpc3BsYXlOYW1lIH0gZnJvbSAnQG11aS91dGlscyc7XG5pbXBvcnQgaG9pc3ROb25SZWFjdFN0YXRpY3MgZnJvbSAnaG9pc3Qtbm9uLXJlYWN0LXN0YXRpY3MnO1xuaW1wb3J0IG1ha2VTdHlsZXMgZnJvbSAnLi4vbWFrZVN0eWxlcyc7XG5pbXBvcnQgeyBqc3ggYXMgX2pzeCB9IGZyb20gXCJyZWFjdC9qc3gtcnVudGltZVwiO1xuXG5mdW5jdGlvbiBvbWl0KGlucHV0LCBmaWVsZHMpIHtcbiAgY29uc3Qgb3V0cHV0ID0ge307XG4gIE9iamVjdC5rZXlzKGlucHV0KS5mb3JFYWNoKHByb3AgPT4ge1xuICAgIGlmIChmaWVsZHMuaW5kZXhPZihwcm9wKSA9PT0gLTEpIHtcbiAgICAgIG91dHB1dFtwcm9wXSA9IGlucHV0W3Byb3BdO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiBvdXRwdXQ7XG59IC8vIHN0eWxlZC1jb21wb25lbnRzJ3MgQVBJIHJlbW92ZXMgdGhlIG1hcHBpbmcgYmV0d2VlbiBjb21wb25lbnRzIGFuZCBzdHlsZXMuXG4vLyBVc2luZyBjb21wb25lbnRzIGFzIGEgbG93LWxldmVsIHN0eWxpbmcgY29uc3RydWN0IGNhbiBiZSBzaW1wbGVyLlxuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHN0eWxlZChDb21wb25lbnQpIHtcbiAgY29uc3QgY29tcG9uZW50Q3JlYXRvciA9IChzdHlsZSwgb3B0aW9ucyA9IHt9KSA9PiB7XG4gICAgY29uc3Qge1xuICAgICAgbmFtZVxuICAgIH0gPSBvcHRpb25zLFxuICAgICAgICAgIHN0eWxlc09wdGlvbnMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShvcHRpb25zLCBfZXhjbHVkZWQpO1xuXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgQ29tcG9uZW50ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihbJ1lvdSBhcmUgY2FsbGluZyBzdHlsZWQoQ29tcG9uZW50KShzdHlsZSkgd2l0aCBhbiB1bmRlZmluZWQgY29tcG9uZW50LicsICdZb3UgbWF5IGhhdmUgZm9yZ290dGVuIHRvIGltcG9ydCBpdC4nXS5qb2luKCdcXG4nKSk7XG4gICAgfVxuXG4gICAgbGV0IGNsYXNzTmFtZVByZWZpeCA9IG5hbWU7XG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgaWYgKCFuYW1lKSB7XG4gICAgICAgIC8vIFByb3ZpZGUgYSBiZXR0ZXIgRFggb3V0c2lkZSBwcm9kdWN0aW9uLlxuICAgICAgICBjb25zdCBkaXNwbGF5TmFtZSA9IGdldERpc3BsYXlOYW1lKENvbXBvbmVudCk7XG5cbiAgICAgICAgaWYgKGRpc3BsYXlOYW1lICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBjbGFzc05hbWVQcmVmaXggPSBkaXNwbGF5TmFtZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IHN0eWxlc09yQ3JlYXRvciA9IHR5cGVvZiBzdHlsZSA9PT0gJ2Z1bmN0aW9uJyA/IHRoZW1lID0+ICh7XG4gICAgICByb290OiBwcm9wcyA9PiBzdHlsZShfZXh0ZW5kcyh7XG4gICAgICAgIHRoZW1lXG4gICAgICB9LCBwcm9wcykpXG4gICAgfSkgOiB7XG4gICAgICByb290OiBzdHlsZVxuICAgIH07XG4gICAgY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyhzdHlsZXNPckNyZWF0b3IsIF9leHRlbmRzKHtcbiAgICAgIENvbXBvbmVudCxcbiAgICAgIG5hbWU6IG5hbWUgfHwgQ29tcG9uZW50LmRpc3BsYXlOYW1lLFxuICAgICAgY2xhc3NOYW1lUHJlZml4XG4gICAgfSwgc3R5bGVzT3B0aW9ucykpO1xuICAgIGxldCBmaWx0ZXJQcm9wcztcbiAgICBsZXQgcHJvcFR5cGVzID0ge307XG5cbiAgICBpZiAoc3R5bGUuZmlsdGVyUHJvcHMpIHtcbiAgICAgIGZpbHRlclByb3BzID0gc3R5bGUuZmlsdGVyUHJvcHM7XG4gICAgICBkZWxldGUgc3R5bGUuZmlsdGVyUHJvcHM7XG4gICAgfVxuICAgIC8qIGVzbGludC1kaXNhYmxlIHJlYWN0L2ZvcmJpZC1mb3JlaWduLXByb3AtdHlwZXMgKi9cblxuXG4gICAgaWYgKHN0eWxlLnByb3BUeXBlcykge1xuICAgICAgcHJvcFR5cGVzID0gc3R5bGUucHJvcFR5cGVzO1xuICAgICAgZGVsZXRlIHN0eWxlLnByb3BUeXBlcztcbiAgICB9XG4gICAgLyogZXNsaW50LWVuYWJsZSByZWFjdC9mb3JiaWQtZm9yZWlnbi1wcm9wLXR5cGVzICovXG5cblxuICAgIGNvbnN0IFN0eWxlZENvbXBvbmVudCA9IC8qI19fUFVSRV9fKi9SZWFjdC5mb3J3YXJkUmVmKGZ1bmN0aW9uIFN0eWxlZENvbXBvbmVudChwcm9wcywgcmVmKSB7XG4gICAgICBjb25zdCB7XG4gICAgICAgIGNoaWxkcmVuLFxuICAgICAgICBjbGFzc05hbWU6IGNsYXNzTmFtZVByb3AsXG4gICAgICAgIGNsb25lLFxuICAgICAgICBjb21wb25lbnQ6IENvbXBvbmVudFByb3BcbiAgICAgIH0gPSBwcm9wcyxcbiAgICAgICAgICAgIG90aGVyID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UocHJvcHMsIF9leGNsdWRlZDIpO1xuXG4gICAgICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKHByb3BzKTtcbiAgICAgIGNvbnN0IGNsYXNzTmFtZSA9IGNsc3goY2xhc3Nlcy5yb290LCBjbGFzc05hbWVQcm9wKTtcbiAgICAgIGxldCBzcHJlYWQgPSBvdGhlcjtcblxuICAgICAgaWYgKGZpbHRlclByb3BzKSB7XG4gICAgICAgIHNwcmVhZCA9IG9taXQoc3ByZWFkLCBmaWx0ZXJQcm9wcyk7XG4gICAgICB9XG5cbiAgICAgIGlmIChjbG9uZSkge1xuICAgICAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNsb25lRWxlbWVudChjaGlsZHJlbiwgX2V4dGVuZHMoe1xuICAgICAgICAgIGNsYXNzTmFtZTogY2xzeChjaGlsZHJlbi5wcm9wcy5jbGFzc05hbWUsIGNsYXNzTmFtZSlcbiAgICAgICAgfSwgc3ByZWFkKSk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgY2hpbGRyZW4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcmV0dXJuIGNoaWxkcmVuKF9leHRlbmRzKHtcbiAgICAgICAgICBjbGFzc05hbWVcbiAgICAgICAgfSwgc3ByZWFkKSk7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IEZpbmFsQ29tcG9uZW50ID0gQ29tcG9uZW50UHJvcCB8fCBDb21wb25lbnQ7XG4gICAgICByZXR1cm4gLyojX19QVVJFX18qL19qc3goRmluYWxDb21wb25lbnQsIF9leHRlbmRzKHtcbiAgICAgICAgcmVmOiByZWYsXG4gICAgICAgIGNsYXNzTmFtZTogY2xhc3NOYW1lXG4gICAgICB9LCBzcHJlYWQsIHtcbiAgICAgICAgY2hpbGRyZW46IGNoaWxkcmVuXG4gICAgICB9KSk7XG4gICAgfSk7XG4gICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gU3R5bGVkQ29tcG9uZW50LnByb3BUeXBlcyA9IF9leHRlbmRzKHtcbiAgICAgIC8qKlxuICAgICAgICogQSByZW5kZXIgZnVuY3Rpb24gb3Igbm9kZS5cbiAgICAgICAqL1xuICAgICAgY2hpbGRyZW46IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5ub2RlLCBQcm9wVHlwZXMuZnVuY10pLFxuXG4gICAgICAvKipcbiAgICAgICAqIEBpZ25vcmVcbiAgICAgICAqL1xuICAgICAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gICAgICAvKipcbiAgICAgICAqIElmIGB0cnVlYCwgdGhlIGNvbXBvbmVudCB3aWxsIHJlY3ljbGUgaXQncyBjaGlsZHJlbiBIVE1MIGVsZW1lbnQuXG4gICAgICAgKiBJdCdzIHVzaW5nIGBSZWFjdC5jbG9uZUVsZW1lbnRgIGludGVybmFsbHkuXG4gICAgICAgKlxuICAgICAgICogVGhpcyBwcm9wIHdpbGwgYmUgZGVwcmVjYXRlZCBhbmQgcmVtb3ZlZCBpbiB2NVxuICAgICAgICovXG4gICAgICBjbG9uZTogY2hhaW5Qcm9wVHlwZXMoUHJvcFR5cGVzLmJvb2wsIHByb3BzID0+IHtcbiAgICAgICAgaWYgKHByb3BzLmNsb25lICYmIHByb3BzLmNvbXBvbmVudCkge1xuICAgICAgICAgIHJldHVybiBuZXcgRXJyb3IoJ1lvdSBjYW4gbm90IHVzZSB0aGUgY2xvbmUgYW5kIGNvbXBvbmVudCBwcm9wIGF0IHRoZSBzYW1lIHRpbWUuJyk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH0pLFxuXG4gICAgICAvKipcbiAgICAgICAqIFRoZSBjb21wb25lbnQgdXNlZCBmb3IgdGhlIHJvb3Qgbm9kZS5cbiAgICAgICAqIEVpdGhlciBhIHN0cmluZyB0byB1c2UgYSBIVE1MIGVsZW1lbnQgb3IgYSBjb21wb25lbnQuXG4gICAgICAgKi9cbiAgICAgIGNvbXBvbmVudDogUHJvcFR5cGVzXG4gICAgICAvKiBAdHlwZXNjcmlwdC10by1wcm9wdHlwZXMtaWdub3JlICovXG4gICAgICAuZWxlbWVudFR5cGVcbiAgICB9LCBwcm9wVHlwZXMpIDogdm9pZCAwO1xuXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIFN0eWxlZENvbXBvbmVudC5kaXNwbGF5TmFtZSA9IGBTdHlsZWQoJHtjbGFzc05hbWVQcmVmaXh9KWA7XG4gICAgfVxuXG4gICAgaG9pc3ROb25SZWFjdFN0YXRpY3MoU3R5bGVkQ29tcG9uZW50LCBDb21wb25lbnQpO1xuICAgIHJldHVybiBTdHlsZWRDb21wb25lbnQ7XG4gIH07XG5cbiAgcmV0dXJuIGNvbXBvbmVudENyZWF0b3I7XG59IiwiaW1wb3J0IHVzZVRoZW1lIGZyb20gJy4uL3VzZVRoZW1lJztcbmltcG9ydCBwcm9wc1RvQ2xhc3NLZXkgZnJvbSAnLi4vcHJvcHNUb0NsYXNzS2V5JztcblxuY29uc3QgdXNlVGhlbWVWYXJpYW50cyA9IChwcm9wcywgbmFtZSkgPT4ge1xuICBjb25zdCB7XG4gICAgY2xhc3NlcyA9IHt9XG4gIH0gPSBwcm9wcztcbiAgY29uc3QgdGhlbWUgPSB1c2VUaGVtZSgpO1xuICBsZXQgdmFyaWFudHNDbGFzc2VzID0gJyc7XG5cbiAgaWYgKHRoZW1lICYmIHRoZW1lLmNvbXBvbmVudHMgJiYgdGhlbWUuY29tcG9uZW50c1tuYW1lXSAmJiB0aGVtZS5jb21wb25lbnRzW25hbWVdLnZhcmlhbnRzKSB7XG4gICAgY29uc3QgdGhlbWVWYXJpYW50cyA9IHRoZW1lLmNvbXBvbmVudHNbbmFtZV0udmFyaWFudHM7XG4gICAgdGhlbWVWYXJpYW50cy5mb3JFYWNoKHRoZW1lVmFyaWFudCA9PiB7XG4gICAgICBsZXQgaXNNYXRjaCA9IHRydWU7XG4gICAgICBPYmplY3Qua2V5cyh0aGVtZVZhcmlhbnQucHJvcHMpLmZvckVhY2goa2V5ID0+IHtcbiAgICAgICAgaWYgKHByb3BzW2tleV0gIT09IHRoZW1lVmFyaWFudC5wcm9wc1trZXldKSB7XG4gICAgICAgICAgaXNNYXRjaCA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgaWYgKGlzTWF0Y2gpIHtcbiAgICAgICAgdmFyaWFudHNDbGFzc2VzID0gYCR7dmFyaWFudHNDbGFzc2VzfSR7Y2xhc3Nlc1twcm9wc1RvQ2xhc3NLZXkodGhlbWVWYXJpYW50LnByb3BzKV19IGA7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gdmFyaWFudHNDbGFzc2VzO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgdXNlVGhlbWVWYXJpYW50czsiLCJpbXBvcnQgX2V4dGVuZHMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2V4dGVuZHNcIjtcbmltcG9ydCBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZSBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZVwiO1xuY29uc3QgX2V4Y2x1ZGVkID0gW1wiZGVmYXVsdFRoZW1lXCIsIFwid2l0aFRoZW1lXCIsIFwibmFtZVwiXSxcbiAgICAgIF9leGNsdWRlZDIgPSBbXCJjbGFzc2VzXCJdO1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBob2lzdE5vblJlYWN0U3RhdGljcyBmcm9tICdob2lzdC1ub24tcmVhY3Qtc3RhdGljcyc7XG5pbXBvcnQgeyBnZXREaXNwbGF5TmFtZSB9IGZyb20gJ0BtdWkvdXRpbHMnO1xuaW1wb3J0IG1ha2VTdHlsZXMgZnJvbSAnLi4vbWFrZVN0eWxlcyc7XG5pbXBvcnQgZ2V0VGhlbWVQcm9wcyBmcm9tICcuLi9nZXRUaGVtZVByb3BzJztcbmltcG9ydCB1c2VUaGVtZSBmcm9tICcuLi91c2VUaGVtZSc7IC8vIExpbmsgYSBzdHlsZSBzaGVldCB3aXRoIGEgY29tcG9uZW50LlxuLy8gSXQgZG9lcyBub3QgbW9kaWZ5IHRoZSBjb21wb25lbnQgcGFzc2VkIHRvIGl0O1xuLy8gaW5zdGVhZCwgaXQgcmV0dXJucyBhIG5ldyBjb21wb25lbnQsIHdpdGggYSBgY2xhc3Nlc2AgcHJvcGVydHkuXG5cbmltcG9ydCB7IGpzeCBhcyBfanN4IH0gZnJvbSBcInJlYWN0L2pzeC1ydW50aW1lXCI7XG5cbmNvbnN0IHdpdGhTdHlsZXMgPSAoc3R5bGVzT3JDcmVhdG9yLCBvcHRpb25zID0ge30pID0+IENvbXBvbmVudCA9PiB7XG4gIGNvbnN0IHtcbiAgICBkZWZhdWx0VGhlbWUsXG4gICAgd2l0aFRoZW1lID0gZmFsc2UsXG4gICAgbmFtZVxuICB9ID0gb3B0aW9ucyxcbiAgICAgICAgc3R5bGVzT3B0aW9ucyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKG9wdGlvbnMsIF9leGNsdWRlZCk7XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBpZiAoQ29tcG9uZW50ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihbJ1lvdSBhcmUgY2FsbGluZyB3aXRoU3R5bGVzKHN0eWxlcykoQ29tcG9uZW50KSB3aXRoIGFuIHVuZGVmaW5lZCBjb21wb25lbnQuJywgJ1lvdSBtYXkgaGF2ZSBmb3Jnb3R0ZW4gdG8gaW1wb3J0IGl0LiddLmpvaW4oJ1xcbicpKTtcbiAgICB9XG4gIH1cblxuICBsZXQgY2xhc3NOYW1lUHJlZml4ID0gbmFtZTtcblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGlmICghbmFtZSkge1xuICAgICAgLy8gUHJvdmlkZSBhIGJldHRlciBEWCBvdXRzaWRlIHByb2R1Y3Rpb24uXG4gICAgICBjb25zdCBkaXNwbGF5TmFtZSA9IGdldERpc3BsYXlOYW1lKENvbXBvbmVudCk7XG5cbiAgICAgIGlmIChkaXNwbGF5TmFtZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGNsYXNzTmFtZVByZWZpeCA9IGRpc3BsYXlOYW1lO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoc3R5bGVzT3JDcmVhdG9yLCBfZXh0ZW5kcyh7XG4gICAgZGVmYXVsdFRoZW1lLFxuICAgIENvbXBvbmVudCxcbiAgICBuYW1lOiBuYW1lIHx8IENvbXBvbmVudC5kaXNwbGF5TmFtZSxcbiAgICBjbGFzc05hbWVQcmVmaXhcbiAgfSwgc3R5bGVzT3B0aW9ucykpO1xuICBjb25zdCBXaXRoU3R5bGVzID0gLyojX19QVVJFX18qL1JlYWN0LmZvcndhcmRSZWYoZnVuY3Rpb24gV2l0aFN0eWxlcyhwcm9wcywgcmVmKSB7XG4gICAgY29uc3Qgb3RoZXIgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShwcm9wcywgX2V4Y2x1ZGVkMik7IC8vIFRoZSB3cmFwcGVyIHJlY2VpdmVzIG9ubHkgdXNlciBzdXBwbGllZCBwcm9wcywgd2hpY2ggY291bGQgYmUgYSBzdWJzZXQgb2ZcbiAgICAvLyB0aGUgYWN0dWFsIHByb3BzIENvbXBvbmVudCBtaWdodCByZWNlaXZlIGR1ZSB0byBtZXJnaW5nIHdpdGggZGVmYXVsdFByb3BzLlxuICAgIC8vIFNvIGNvcHlpbmcgaXQgaGVyZSB3b3VsZCBnaXZlIHVzIHRoZSBzYW1lIHJlc3VsdCBpbiB0aGUgd3JhcHBlciBhcyB3ZWxsLlxuXG5cbiAgICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKF9leHRlbmRzKHt9LCBDb21wb25lbnQuZGVmYXVsdFByb3BzLCBwcm9wcykpO1xuICAgIGxldCB0aGVtZTtcbiAgICBsZXQgbW9yZSA9IG90aGVyO1xuXG4gICAgaWYgKHR5cGVvZiBuYW1lID09PSAnc3RyaW5nJyB8fCB3aXRoVGhlbWUpIHtcbiAgICAgIC8vIG5hbWUgYW5kIHdpdGhUaGVtZSBhcmUgaW52YXJpYW50IGluIHRoZSBvdXRlciBzY29wZVxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL3J1bGVzLW9mLWhvb2tzXG4gICAgICB0aGVtZSA9IHVzZVRoZW1lKCkgfHwgZGVmYXVsdFRoZW1lO1xuXG4gICAgICBpZiAobmFtZSkge1xuICAgICAgICBtb3JlID0gZ2V0VGhlbWVQcm9wcyh7XG4gICAgICAgICAgdGhlbWUsXG4gICAgICAgICAgbmFtZSxcbiAgICAgICAgICBwcm9wczogb3RoZXJcbiAgICAgICAgfSk7XG4gICAgICB9IC8vIFByb3ZpZGUgdGhlIHRoZW1lIHRvIHRoZSB3cmFwcGVkIGNvbXBvbmVudC5cbiAgICAgIC8vIFNvIHdlIGRvbid0IGhhdmUgdG8gdXNlIHRoZSBgd2l0aFRoZW1lKClgIEhpZ2hlci1vcmRlciBDb21wb25lbnQuXG5cblxuICAgICAgaWYgKHdpdGhUaGVtZSAmJiAhbW9yZS50aGVtZSkge1xuICAgICAgICBtb3JlLnRoZW1lID0gdGhlbWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIC8qI19fUFVSRV9fKi9fanN4KENvbXBvbmVudCwgX2V4dGVuZHMoe1xuICAgICAgcmVmOiByZWYsXG4gICAgICBjbGFzc2VzOiBjbGFzc2VzXG4gICAgfSwgbW9yZSkpO1xuICB9KTtcbiAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gV2l0aFN0eWxlcy5wcm9wVHlwZXMgPSB7XG4gICAgLyoqXG4gICAgICogT3ZlcnJpZGUgb3IgZXh0ZW5kIHRoZSBzdHlsZXMgYXBwbGllZCB0byB0aGUgY29tcG9uZW50LlxuICAgICAqL1xuICAgIGNsYXNzZXM6IFByb3BUeXBlcy5vYmplY3RcbiAgfSA6IHZvaWQgMDtcblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIFdpdGhTdHlsZXMuZGlzcGxheU5hbWUgPSBgV2l0aFN0eWxlcygke2dldERpc3BsYXlOYW1lKENvbXBvbmVudCl9KWA7XG4gIH1cblxuICBob2lzdE5vblJlYWN0U3RhdGljcyhXaXRoU3R5bGVzLCBDb21wb25lbnQpO1xuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgLy8gRXhwb3NlZCBmb3IgdGVzdCBwdXJwb3Nlcy5cbiAgICBXaXRoU3R5bGVzLk5ha2VkID0gQ29tcG9uZW50O1xuICAgIFdpdGhTdHlsZXMub3B0aW9ucyA9IG9wdGlvbnM7XG4gICAgV2l0aFN0eWxlcy51c2VTdHlsZXMgPSB1c2VTdHlsZXM7XG4gIH1cblxuICByZXR1cm4gV2l0aFN0eWxlcztcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZXM7IiwiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gJy4vd2l0aFRoZW1lJztcbmV4cG9ydCAqIGZyb20gJy4vd2l0aFRoZW1lJzsiLCJpbXBvcnQgX2V4dGVuZHMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2V4dGVuZHNcIjtcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBob2lzdE5vblJlYWN0U3RhdGljcyBmcm9tICdob2lzdC1ub24tcmVhY3Qtc3RhdGljcyc7XG5pbXBvcnQgeyBnZXREaXNwbGF5TmFtZSB9IGZyb20gJ0BtdWkvdXRpbHMnO1xuaW1wb3J0IHVzZVRoZW1lIGZyb20gJy4uL3VzZVRoZW1lJztcbmltcG9ydCB7IGpzeCBhcyBfanN4IH0gZnJvbSBcInJlYWN0L2pzeC1ydW50aW1lXCI7XG5leHBvcnQgZnVuY3Rpb24gd2l0aFRoZW1lQ3JlYXRvcihvcHRpb25zID0ge30pIHtcbiAgY29uc3Qge1xuICAgIGRlZmF1bHRUaGVtZVxuICB9ID0gb3B0aW9ucztcblxuICBjb25zdCB3aXRoVGhlbWUgPSBDb21wb25lbnQgPT4ge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBpZiAoQ29tcG9uZW50ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFsnWW91IGFyZSBjYWxsaW5nIHdpdGhUaGVtZShDb21wb25lbnQpIHdpdGggYW4gdW5kZWZpbmVkIGNvbXBvbmVudC4nLCAnWW91IG1heSBoYXZlIGZvcmdvdHRlbiB0byBpbXBvcnQgaXQuJ10uam9pbignXFxuJykpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IFdpdGhUaGVtZSA9IC8qI19fUFVSRV9fKi9SZWFjdC5mb3J3YXJkUmVmKGZ1bmN0aW9uIFdpdGhUaGVtZShwcm9wcywgcmVmKSB7XG4gICAgICBjb25zdCB0aGVtZSA9IHVzZVRoZW1lKCkgfHwgZGVmYXVsdFRoZW1lO1xuICAgICAgcmV0dXJuIC8qI19fUFVSRV9fKi9fanN4KENvbXBvbmVudCwgX2V4dGVuZHMoe1xuICAgICAgICB0aGVtZTogdGhlbWUsXG4gICAgICAgIHJlZjogcmVmXG4gICAgICB9LCBwcm9wcykpO1xuICAgIH0pO1xuXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIFdpdGhUaGVtZS5kaXNwbGF5TmFtZSA9IGBXaXRoVGhlbWUoJHtnZXREaXNwbGF5TmFtZShDb21wb25lbnQpfSlgO1xuICAgIH1cblxuICAgIGhvaXN0Tm9uUmVhY3RTdGF0aWNzKFdpdGhUaGVtZSwgQ29tcG9uZW50KTtcblxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAvLyBFeHBvc2VkIGZvciB0ZXN0IHB1cnBvc2VzLlxuICAgICAgV2l0aFRoZW1lLk5ha2VkID0gQ29tcG9uZW50O1xuICAgIH1cblxuICAgIHJldHVybiBXaXRoVGhlbWU7XG4gIH07XG5cbiAgcmV0dXJuIHdpdGhUaGVtZTtcbn0gLy8gUHJvdmlkZSB0aGUgdGhlbWUgb2JqZWN0IGFzIGEgcHJvcCB0byB0aGUgaW5wdXQgY29tcG9uZW50LlxuLy8gSXQncyBhbiBhbHRlcm5hdGl2ZSBBUEkgdG8gdXNlVGhlbWUoKS5cbi8vIFdlIGVuY291cmFnZSB0aGUgdXNhZ2Ugb2YgdXNlVGhlbWUoKSB3aGVyZSBwb3NzaWJsZS5cblxuY29uc3Qgd2l0aFRoZW1lID0gd2l0aFRoZW1lQ3JlYXRvcigpO1xuZXhwb3J0IGRlZmF1bHQgd2l0aFRoZW1lOyIsImltcG9ydCB7IGNyZWF0ZVRoZW1lLCBUaGVtZVByb3ZpZGVyIH0gZnJvbSAnQG11aS9tYXRlcmlhbC9zdHlsZXMnO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG11aS9zdHlsZXMnO1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gXCIuL0hlYWRlclwiO1xyXG5pbXBvcnQgeyB0aGVtZSB9IGZyb20gXCIuL1RoZW1lXCI7XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHtcclxuICAgIHJvb3Q6IHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAncmdiKDI0NywyMzMsMjMzKScsXHJcbiAgICAgICAgYmFja2dyb3VuZDogJ2xpbmVhci1ncmFkaWVudCgyMzBkZWcsIHJnYmEoMjQ3LDIzMywyMzMsMSkgMCUsIHJnYmEoMTcyLDYsNiwxKSAxMDAlKSdcclxuICAgIH0sXHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTGF5b3V0KHsgY2hpbGRyZW4gfSkge1xyXG4gICAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8VGhlbWVQcm92aWRlciB0aGVtZT17dGhlbWV9PlxyXG4gICAgICAgICAgICA8SGVhZGVyIC8+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fT5cclxuICAgICAgICAgICAgICAgIDxtYWluPntjaGlsZHJlbn08L21haW4+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvVGhlbWVQcm92aWRlcj5cclxuICAgIClcclxufSIsImltcG9ydCBpc0luQnJvd3NlciBmcm9tICdpcy1pbi1icm93c2VyJztcbmltcG9ydCBfdG9Db25zdW1hYmxlQXJyYXkgZnJvbSAnQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vdG9Db25zdW1hYmxlQXJyYXknO1xuXG4vLyBFeHBvcnQgamF2YXNjcmlwdCBzdHlsZSBhbmQgY3NzIHN0eWxlIHZlbmRvciBwcmVmaXhlcy5cbnZhciBqcyA9ICcnO1xudmFyIGNzcyA9ICcnO1xudmFyIHZlbmRvciA9ICcnO1xudmFyIGJyb3dzZXIgPSAnJztcbnZhciBpc1RvdWNoID0gaXNJbkJyb3dzZXIgJiYgJ29udG91Y2hzdGFydCcgaW4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50OyAvLyBXZSBzaG91bGQgbm90IGRvIGFueXRoaW5nIGlmIHJlcXVpcmVkIHNlcnZlcnNpZGUuXG5cbmlmIChpc0luQnJvd3Nlcikge1xuICAvLyBPcmRlciBtYXR0ZXJzLiBXZSBuZWVkIHRvIGNoZWNrIFdlYmtpdCB0aGUgbGFzdCBvbmUgYmVjYXVzZVxuICAvLyBvdGhlciB2ZW5kb3JzIHVzZSB0byBhZGQgV2Via2l0IHByZWZpeGVzIHRvIHNvbWUgcHJvcGVydGllc1xuICB2YXIganNDc3NNYXAgPSB7XG4gICAgTW96OiAnLW1vei0nLFxuICAgIG1zOiAnLW1zLScsXG4gICAgTzogJy1vLScsXG4gICAgV2Via2l0OiAnLXdlYmtpdC0nXG4gIH07XG5cbiAgdmFyIF9kb2N1bWVudCRjcmVhdGVFbGVtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKSxcbiAgICAgIHN0eWxlID0gX2RvY3VtZW50JGNyZWF0ZUVsZW1lLnN0eWxlO1xuXG4gIHZhciB0ZXN0UHJvcCA9ICdUcmFuc2Zvcm0nO1xuXG4gIGZvciAodmFyIGtleSBpbiBqc0Nzc01hcCkge1xuICAgIGlmIChrZXkgKyB0ZXN0UHJvcCBpbiBzdHlsZSkge1xuICAgICAganMgPSBrZXk7XG4gICAgICBjc3MgPSBqc0Nzc01hcFtrZXldO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9IC8vIENvcnJlY3RseSBkZXRlY3QgdGhlIEVkZ2UgYnJvd3Nlci5cblxuXG4gIGlmIChqcyA9PT0gJ1dlYmtpdCcgJiYgJ21zSHlwaGVucycgaW4gc3R5bGUpIHtcbiAgICBqcyA9ICdtcyc7XG4gICAgY3NzID0ganNDc3NNYXAubXM7XG4gICAgYnJvd3NlciA9ICdlZGdlJztcbiAgfSAvLyBDb3JyZWN0bHkgZGV0ZWN0IHRoZSBTYWZhcmkgYnJvd3Nlci5cblxuXG4gIGlmIChqcyA9PT0gJ1dlYmtpdCcgJiYgJy1hcHBsZS10cmFpbGluZy13b3JkJyBpbiBzdHlsZSkge1xuICAgIHZlbmRvciA9ICdhcHBsZSc7XG4gIH1cbn1cbi8qKlxuICogVmVuZG9yIHByZWZpeCBzdHJpbmcgZm9yIHRoZSBjdXJyZW50IGJyb3dzZXIuXG4gKlxuICogQHR5cGUge3tqczogU3RyaW5nLCBjc3M6IFN0cmluZywgdmVuZG9yOiBTdHJpbmcsIGJyb3dzZXI6IFN0cmluZ319XG4gKiBAYXBpIHB1YmxpY1xuICovXG5cblxudmFyIHByZWZpeCA9IHtcbiAganM6IGpzLFxuICBjc3M6IGNzcyxcbiAgdmVuZG9yOiB2ZW5kb3IsXG4gIGJyb3dzZXI6IGJyb3dzZXIsXG4gIGlzVG91Y2g6IGlzVG91Y2hcbn07XG5cbi8qKlxuICogVGVzdCBpZiBhIGtleWZyYW1lIGF0LXJ1bGUgc2hvdWxkIGJlIHByZWZpeGVkIG9yIG5vdFxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSB2ZW5kb3IgcHJlZml4IHN0cmluZyBmb3IgdGhlIGN1cnJlbnQgYnJvd3Nlci5cbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqIEBhcGkgcHVibGljXG4gKi9cblxuZnVuY3Rpb24gc3VwcG9ydGVkS2V5ZnJhbWVzKGtleSkge1xuICAvLyBLZXlmcmFtZXMgaXMgYWxyZWFkeSBwcmVmaXhlZC4gZS5nLiBrZXkgPSAnQC13ZWJraXQta2V5ZnJhbWVzIGEnXG4gIGlmIChrZXlbMV0gPT09ICctJykgcmV0dXJuIGtleTsgLy8gTm8gbmVlZCB0byBwcmVmaXggSUUvRWRnZS4gT2xkZXIgYnJvd3NlcnMgd2lsbCBpZ25vcmUgdW5zdXBwb3J0ZWQgcnVsZXMuXG4gIC8vIGh0dHBzOi8vY2FuaXVzZS5jb20vI3NlYXJjaD1rZXlmcmFtZXNcblxuICBpZiAocHJlZml4LmpzID09PSAnbXMnKSByZXR1cm4ga2V5O1xuICByZXR1cm4gXCJAXCIgKyBwcmVmaXguY3NzICsgXCJrZXlmcmFtZXNcIiArIGtleS5zdWJzdHIoMTApO1xufVxuXG4vLyBodHRwczovL2Nhbml1c2UuY29tLyNzZWFyY2g9YXBwZWFyYW5jZVxuXG52YXIgYXBwZWFyZW5jZSA9IHtcbiAgbm9QcmVmaWxsOiBbJ2FwcGVhcmFuY2UnXSxcbiAgc3VwcG9ydGVkUHJvcGVydHk6IGZ1bmN0aW9uIHN1cHBvcnRlZFByb3BlcnR5KHByb3ApIHtcbiAgICBpZiAocHJvcCAhPT0gJ2FwcGVhcmFuY2UnKSByZXR1cm4gZmFsc2U7XG4gICAgaWYgKHByZWZpeC5qcyA9PT0gJ21zJykgcmV0dXJuIFwiLXdlYmtpdC1cIiArIHByb3A7XG4gICAgcmV0dXJuIHByZWZpeC5jc3MgKyBwcm9wO1xuICB9XG59O1xuXG4vLyBodHRwczovL2Nhbml1c2UuY29tLyNzZWFyY2g9Y29sb3ItYWRqdXN0XG5cbnZhciBjb2xvckFkanVzdCA9IHtcbiAgbm9QcmVmaWxsOiBbJ2NvbG9yLWFkanVzdCddLFxuICBzdXBwb3J0ZWRQcm9wZXJ0eTogZnVuY3Rpb24gc3VwcG9ydGVkUHJvcGVydHkocHJvcCkge1xuICAgIGlmIChwcm9wICE9PSAnY29sb3ItYWRqdXN0JykgcmV0dXJuIGZhbHNlO1xuICAgIGlmIChwcmVmaXguanMgPT09ICdXZWJraXQnKSByZXR1cm4gcHJlZml4LmNzcyArIFwicHJpbnQtXCIgKyBwcm9wO1xuICAgIHJldHVybiBwcm9wO1xuICB9XG59O1xuXG52YXIgcmVnRXhwID0gL1stXFxzXSsoLik/L2c7XG4vKipcbiAqIFJlcGxhY2VzIHRoZSBsZXR0ZXIgd2l0aCB0aGUgY2FwaXRhbCBsZXR0ZXJcbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gbWF0Y2hcbiAqIEBwYXJhbSB7U3RyaW5nfSBjXG4gKiBAcmV0dXJuIHtTdHJpbmd9XG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiB0b1VwcGVyKG1hdGNoLCBjKSB7XG4gIHJldHVybiBjID8gYy50b1VwcGVyQ2FzZSgpIDogJyc7XG59XG4vKipcbiAqIENvbnZlcnQgZGFzaCBzZXBhcmF0ZWQgc3RyaW5ncyB0byBjYW1lbC1jYXNlZC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gc3RyXG4gKiBAcmV0dXJuIHtTdHJpbmd9XG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5cbmZ1bmN0aW9uIGNhbWVsaXplKHN0cikge1xuICByZXR1cm4gc3RyLnJlcGxhY2UocmVnRXhwLCB0b1VwcGVyKTtcbn1cblxuLyoqXG4gKiBDb252ZXJ0IGRhc2ggc2VwYXJhdGVkIHN0cmluZ3MgdG8gcGFzY2FsIGNhc2VkLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdHJcbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIHBhc2NhbGl6ZShzdHIpIHtcbiAgcmV0dXJuIGNhbWVsaXplKFwiLVwiICsgc3RyKTtcbn1cblxuLy8gYnV0IHdlIGNhbiB1c2UgYSBsb25naGFuZCBwcm9wZXJ0eSBpbnN0ZWFkLlxuLy8gaHR0cHM6Ly9jYW5pdXNlLmNvbS8jc2VhcmNoPW1hc2tcblxudmFyIG1hc2sgPSB7XG4gIG5vUHJlZmlsbDogWydtYXNrJ10sXG4gIHN1cHBvcnRlZFByb3BlcnR5OiBmdW5jdGlvbiBzdXBwb3J0ZWRQcm9wZXJ0eShwcm9wLCBzdHlsZSkge1xuICAgIGlmICghL15tYXNrLy50ZXN0KHByb3ApKSByZXR1cm4gZmFsc2U7XG5cbiAgICBpZiAocHJlZml4LmpzID09PSAnV2Via2l0Jykge1xuICAgICAgdmFyIGxvbmdoYW5kID0gJ21hc2staW1hZ2UnO1xuXG4gICAgICBpZiAoY2FtZWxpemUobG9uZ2hhbmQpIGluIHN0eWxlKSB7XG4gICAgICAgIHJldHVybiBwcm9wO1xuICAgICAgfVxuXG4gICAgICBpZiAocHJlZml4LmpzICsgcGFzY2FsaXplKGxvbmdoYW5kKSBpbiBzdHlsZSkge1xuICAgICAgICByZXR1cm4gcHJlZml4LmNzcyArIHByb3A7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHByb3A7XG4gIH1cbn07XG5cbi8vIGh0dHBzOi8vY2FuaXVzZS5jb20vI3NlYXJjaD10ZXh0LW9yaWVudGF0aW9uXG5cbnZhciB0ZXh0T3JpZW50YXRpb24gPSB7XG4gIG5vUHJlZmlsbDogWyd0ZXh0LW9yaWVudGF0aW9uJ10sXG4gIHN1cHBvcnRlZFByb3BlcnR5OiBmdW5jdGlvbiBzdXBwb3J0ZWRQcm9wZXJ0eShwcm9wKSB7XG4gICAgaWYgKHByb3AgIT09ICd0ZXh0LW9yaWVudGF0aW9uJykgcmV0dXJuIGZhbHNlO1xuXG4gICAgaWYgKHByZWZpeC52ZW5kb3IgPT09ICdhcHBsZScgJiYgIXByZWZpeC5pc1RvdWNoKSB7XG4gICAgICByZXR1cm4gcHJlZml4LmNzcyArIHByb3A7XG4gICAgfVxuXG4gICAgcmV0dXJuIHByb3A7XG4gIH1cbn07XG5cbi8vIGh0dHBzOi8vY2FuaXVzZS5jb20vI3NlYXJjaD10cmFuc2Zvcm1cblxudmFyIHRyYW5zZm9ybSA9IHtcbiAgbm9QcmVmaWxsOiBbJ3RyYW5zZm9ybSddLFxuICBzdXBwb3J0ZWRQcm9wZXJ0eTogZnVuY3Rpb24gc3VwcG9ydGVkUHJvcGVydHkocHJvcCwgc3R5bGUsIG9wdGlvbnMpIHtcbiAgICBpZiAocHJvcCAhPT0gJ3RyYW5zZm9ybScpIHJldHVybiBmYWxzZTtcblxuICAgIGlmIChvcHRpb25zLnRyYW5zZm9ybSkge1xuICAgICAgcmV0dXJuIHByb3A7XG4gICAgfVxuXG4gICAgcmV0dXJuIHByZWZpeC5jc3MgKyBwcm9wO1xuICB9XG59O1xuXG4vLyBodHRwczovL2Nhbml1c2UuY29tLyNzZWFyY2g9dHJhbnNpdGlvblxuXG52YXIgdHJhbnNpdGlvbiA9IHtcbiAgbm9QcmVmaWxsOiBbJ3RyYW5zaXRpb24nXSxcbiAgc3VwcG9ydGVkUHJvcGVydHk6IGZ1bmN0aW9uIHN1cHBvcnRlZFByb3BlcnR5KHByb3AsIHN0eWxlLCBvcHRpb25zKSB7XG4gICAgaWYgKHByb3AgIT09ICd0cmFuc2l0aW9uJykgcmV0dXJuIGZhbHNlO1xuXG4gICAgaWYgKG9wdGlvbnMudHJhbnNpdGlvbikge1xuICAgICAgcmV0dXJuIHByb3A7XG4gICAgfVxuXG4gICAgcmV0dXJuIHByZWZpeC5jc3MgKyBwcm9wO1xuICB9XG59O1xuXG4vLyBodHRwczovL2Nhbml1c2UuY29tLyNzZWFyY2g9d3JpdGluZy1tb2RlXG5cbnZhciB3cml0aW5nTW9kZSA9IHtcbiAgbm9QcmVmaWxsOiBbJ3dyaXRpbmctbW9kZSddLFxuICBzdXBwb3J0ZWRQcm9wZXJ0eTogZnVuY3Rpb24gc3VwcG9ydGVkUHJvcGVydHkocHJvcCkge1xuICAgIGlmIChwcm9wICE9PSAnd3JpdGluZy1tb2RlJykgcmV0dXJuIGZhbHNlO1xuXG4gICAgaWYgKHByZWZpeC5qcyA9PT0gJ1dlYmtpdCcgfHwgcHJlZml4LmpzID09PSAnbXMnICYmIHByZWZpeC5icm93c2VyICE9PSAnZWRnZScpIHtcbiAgICAgIHJldHVybiBwcmVmaXguY3NzICsgcHJvcDtcbiAgICB9XG5cbiAgICByZXR1cm4gcHJvcDtcbiAgfVxufTtcblxuLy8gaHR0cHM6Ly9jYW5pdXNlLmNvbS8jc2VhcmNoPXVzZXItc2VsZWN0XG5cbnZhciB1c2VyU2VsZWN0ID0ge1xuICBub1ByZWZpbGw6IFsndXNlci1zZWxlY3QnXSxcbiAgc3VwcG9ydGVkUHJvcGVydHk6IGZ1bmN0aW9uIHN1cHBvcnRlZFByb3BlcnR5KHByb3ApIHtcbiAgICBpZiAocHJvcCAhPT0gJ3VzZXItc2VsZWN0JykgcmV0dXJuIGZhbHNlO1xuXG4gICAgaWYgKHByZWZpeC5qcyA9PT0gJ01veicgfHwgcHJlZml4LmpzID09PSAnbXMnIHx8IHByZWZpeC52ZW5kb3IgPT09ICdhcHBsZScpIHtcbiAgICAgIHJldHVybiBwcmVmaXguY3NzICsgcHJvcDtcbiAgICB9XG5cbiAgICByZXR1cm4gcHJvcDtcbiAgfVxufTtcblxuLy8gaHR0cHM6Ly9jYW5pdXNlLmNvbS8jc2VhcmNoPW11bHRpY29sdW1uXG4vLyBodHRwczovL2dpdGh1Yi5jb20vcG9zdGNzcy9hdXRvcHJlZml4ZXIvaXNzdWVzLzQ5MVxuLy8gaHR0cHM6Ly9naXRodWIuY29tL3Bvc3Rjc3MvYXV0b3ByZWZpeGVyL2lzc3Vlcy8xNzdcblxudmFyIGJyZWFrUHJvcHNPbGQgPSB7XG4gIHN1cHBvcnRlZFByb3BlcnR5OiBmdW5jdGlvbiBzdXBwb3J0ZWRQcm9wZXJ0eShwcm9wLCBzdHlsZSkge1xuICAgIGlmICghL15icmVhay0vLnRlc3QocHJvcCkpIHJldHVybiBmYWxzZTtcblxuICAgIGlmIChwcmVmaXguanMgPT09ICdXZWJraXQnKSB7XG4gICAgICB2YXIganNQcm9wID0gXCJXZWJraXRDb2x1bW5cIiArIHBhc2NhbGl6ZShwcm9wKTtcbiAgICAgIHJldHVybiBqc1Byb3AgaW4gc3R5bGUgPyBwcmVmaXguY3NzICsgXCJjb2x1bW4tXCIgKyBwcm9wIDogZmFsc2U7XG4gICAgfVxuXG4gICAgaWYgKHByZWZpeC5qcyA9PT0gJ01veicpIHtcbiAgICAgIHZhciBfanNQcm9wID0gXCJwYWdlXCIgKyBwYXNjYWxpemUocHJvcCk7XG5cbiAgICAgIHJldHVybiBfanNQcm9wIGluIHN0eWxlID8gXCJwYWdlLVwiICsgcHJvcCA6IGZhbHNlO1xuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufTtcblxuLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9wb3N0Y3NzL2F1dG9wcmVmaXhlci9pc3N1ZXMvMzI0LlxuXG52YXIgaW5saW5lTG9naWNhbE9sZCA9IHtcbiAgc3VwcG9ydGVkUHJvcGVydHk6IGZ1bmN0aW9uIHN1cHBvcnRlZFByb3BlcnR5KHByb3AsIHN0eWxlKSB7XG4gICAgaWYgKCEvXihib3JkZXJ8bWFyZ2lufHBhZGRpbmcpLWlubGluZS8udGVzdChwcm9wKSkgcmV0dXJuIGZhbHNlO1xuICAgIGlmIChwcmVmaXguanMgPT09ICdNb3onKSByZXR1cm4gcHJvcDtcbiAgICB2YXIgbmV3UHJvcCA9IHByb3AucmVwbGFjZSgnLWlubGluZScsICcnKTtcbiAgICByZXR1cm4gcHJlZml4LmpzICsgcGFzY2FsaXplKG5ld1Byb3ApIGluIHN0eWxlID8gcHJlZml4LmNzcyArIG5ld1Byb3AgOiBmYWxzZTtcbiAgfVxufTtcblxuLy8gQ2FtZWxpemF0aW9uIGlzIHJlcXVpcmVkIGJlY2F1c2Ugd2UgY2FuJ3QgdGVzdCB1c2luZy5cbi8vIENTUyBzeW50YXggZm9yIGUuZy4gaW4gRkYuXG5cbnZhciB1bnByZWZpeGVkID0ge1xuICBzdXBwb3J0ZWRQcm9wZXJ0eTogZnVuY3Rpb24gc3VwcG9ydGVkUHJvcGVydHkocHJvcCwgc3R5bGUpIHtcbiAgICByZXR1cm4gY2FtZWxpemUocHJvcCkgaW4gc3R5bGUgPyBwcm9wIDogZmFsc2U7XG4gIH1cbn07XG5cbnZhciBwcmVmaXhlZCA9IHtcbiAgc3VwcG9ydGVkUHJvcGVydHk6IGZ1bmN0aW9uIHN1cHBvcnRlZFByb3BlcnR5KHByb3AsIHN0eWxlKSB7XG4gICAgdmFyIHBhc2NhbGl6ZWQgPSBwYXNjYWxpemUocHJvcCk7IC8vIFJldHVybiBjdXN0b20gQ1NTIHZhcmlhYmxlIHdpdGhvdXQgcHJlZml4aW5nLlxuXG4gICAgaWYgKHByb3BbMF0gPT09ICctJykgcmV0dXJuIHByb3A7IC8vIFJldHVybiBhbHJlYWR5IHByZWZpeGVkIHZhbHVlIHdpdGhvdXQgcHJlZml4aW5nLlxuXG4gICAgaWYgKHByb3BbMF0gPT09ICctJyAmJiBwcm9wWzFdID09PSAnLScpIHJldHVybiBwcm9wO1xuICAgIGlmIChwcmVmaXguanMgKyBwYXNjYWxpemVkIGluIHN0eWxlKSByZXR1cm4gcHJlZml4LmNzcyArIHByb3A7IC8vIFRyeSB3ZWJraXQgZmFsbGJhY2suXG5cbiAgICBpZiAocHJlZml4LmpzICE9PSAnV2Via2l0JyAmJiBcIldlYmtpdFwiICsgcGFzY2FsaXplZCBpbiBzdHlsZSkgcmV0dXJuIFwiLXdlYmtpdC1cIiArIHByb3A7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59O1xuXG4vLyBodHRwczovL2Nhbml1c2UuY29tLyNzZWFyY2g9c2Nyb2xsLXNuYXBcblxudmFyIHNjcm9sbFNuYXAgPSB7XG4gIHN1cHBvcnRlZFByb3BlcnR5OiBmdW5jdGlvbiBzdXBwb3J0ZWRQcm9wZXJ0eShwcm9wKSB7XG4gICAgaWYgKHByb3Auc3Vic3RyaW5nKDAsIDExKSAhPT0gJ3Njcm9sbC1zbmFwJykgcmV0dXJuIGZhbHNlO1xuXG4gICAgaWYgKHByZWZpeC5qcyA9PT0gJ21zJykge1xuICAgICAgcmV0dXJuIFwiXCIgKyBwcmVmaXguY3NzICsgcHJvcDtcbiAgICB9XG5cbiAgICByZXR1cm4gcHJvcDtcbiAgfVxufTtcblxuLy8gaHR0cHM6Ly9jYW5pdXNlLmNvbS8jc2VhcmNoPW92ZXJzY3JvbGwtYmVoYXZpb3JcblxudmFyIG92ZXJzY3JvbGxCZWhhdmlvciA9IHtcbiAgc3VwcG9ydGVkUHJvcGVydHk6IGZ1bmN0aW9uIHN1cHBvcnRlZFByb3BlcnR5KHByb3ApIHtcbiAgICBpZiAocHJvcCAhPT0gJ292ZXJzY3JvbGwtYmVoYXZpb3InKSByZXR1cm4gZmFsc2U7XG5cbiAgICBpZiAocHJlZml4LmpzID09PSAnbXMnKSB7XG4gICAgICByZXR1cm4gcHJlZml4LmNzcyArIFwic2Nyb2xsLWNoYWluaW5nXCI7XG4gICAgfVxuXG4gICAgcmV0dXJuIHByb3A7XG4gIH1cbn07XG5cbnZhciBwcm9wTWFwID0ge1xuICAnZmxleC1ncm93JzogJ2ZsZXgtcG9zaXRpdmUnLFxuICAnZmxleC1zaHJpbmsnOiAnZmxleC1uZWdhdGl2ZScsXG4gICdmbGV4LWJhc2lzJzogJ2ZsZXgtcHJlZmVycmVkLXNpemUnLFxuICAnanVzdGlmeS1jb250ZW50JzogJ2ZsZXgtcGFjaycsXG4gIG9yZGVyOiAnZmxleC1vcmRlcicsXG4gICdhbGlnbi1pdGVtcyc6ICdmbGV4LWFsaWduJyxcbiAgJ2FsaWduLWNvbnRlbnQnOiAnZmxleC1saW5lLXBhY2snIC8vICdhbGlnbi1zZWxmJyBpcyBoYW5kbGVkIGJ5ICdhbGlnbi1zZWxmJyBwbHVnaW4uXG5cbn07IC8vIFN1cHBvcnQgb2xkIGZsZXggc3BlYyBmcm9tIDIwMTIuXG5cbnZhciBmbGV4MjAxMiA9IHtcbiAgc3VwcG9ydGVkUHJvcGVydHk6IGZ1bmN0aW9uIHN1cHBvcnRlZFByb3BlcnR5KHByb3AsIHN0eWxlKSB7XG4gICAgdmFyIG5ld1Byb3AgPSBwcm9wTWFwW3Byb3BdO1xuICAgIGlmICghbmV3UHJvcCkgcmV0dXJuIGZhbHNlO1xuICAgIHJldHVybiBwcmVmaXguanMgKyBwYXNjYWxpemUobmV3UHJvcCkgaW4gc3R5bGUgPyBwcmVmaXguY3NzICsgbmV3UHJvcCA6IGZhbHNlO1xuICB9XG59O1xuXG52YXIgcHJvcE1hcCQxID0ge1xuICBmbGV4OiAnYm94LWZsZXgnLFxuICAnZmxleC1ncm93JzogJ2JveC1mbGV4JyxcbiAgJ2ZsZXgtZGlyZWN0aW9uJzogWydib3gtb3JpZW50JywgJ2JveC1kaXJlY3Rpb24nXSxcbiAgb3JkZXI6ICdib3gtb3JkaW5hbC1ncm91cCcsXG4gICdhbGlnbi1pdGVtcyc6ICdib3gtYWxpZ24nLFxuICAnZmxleC1mbG93JzogWydib3gtb3JpZW50JywgJ2JveC1kaXJlY3Rpb24nXSxcbiAgJ2p1c3RpZnktY29udGVudCc6ICdib3gtcGFjaydcbn07XG52YXIgcHJvcEtleXMgPSBPYmplY3Qua2V5cyhwcm9wTWFwJDEpO1xuXG52YXIgcHJlZml4Q3NzID0gZnVuY3Rpb24gcHJlZml4Q3NzKHApIHtcbiAgcmV0dXJuIHByZWZpeC5jc3MgKyBwO1xufTsgLy8gU3VwcG9ydCBvbGQgZmxleCBzcGVjIGZyb20gMjAwOS5cblxuXG52YXIgZmxleDIwMDkgPSB7XG4gIHN1cHBvcnRlZFByb3BlcnR5OiBmdW5jdGlvbiBzdXBwb3J0ZWRQcm9wZXJ0eShwcm9wLCBzdHlsZSwgX3JlZikge1xuICAgIHZhciBtdWx0aXBsZSA9IF9yZWYubXVsdGlwbGU7XG5cbiAgICBpZiAocHJvcEtleXMuaW5kZXhPZihwcm9wKSA+IC0xKSB7XG4gICAgICB2YXIgbmV3UHJvcCA9IHByb3BNYXAkMVtwcm9wXTtcblxuICAgICAgaWYgKCFBcnJheS5pc0FycmF5KG5ld1Byb3ApKSB7XG4gICAgICAgIHJldHVybiBwcmVmaXguanMgKyBwYXNjYWxpemUobmV3UHJvcCkgaW4gc3R5bGUgPyBwcmVmaXguY3NzICsgbmV3UHJvcCA6IGZhbHNlO1xuICAgICAgfVxuXG4gICAgICBpZiAoIW11bHRpcGxlKSByZXR1cm4gZmFsc2U7XG5cbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbmV3UHJvcC5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoIShwcmVmaXguanMgKyBwYXNjYWxpemUobmV3UHJvcFswXSkgaW4gc3R5bGUpKSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBuZXdQcm9wLm1hcChwcmVmaXhDc3MpO1xuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufTtcblxuLy8gcGx1Z2lucyA9IFtcbi8vICAgLi4ucGx1Z2lucyxcbi8vICAgIGJyZWFrUHJvcHNPbGQsXG4vLyAgICBpbmxpbmVMb2dpY2FsT2xkLFxuLy8gICAgdW5wcmVmaXhlZCxcbi8vICAgIHByZWZpeGVkLFxuLy8gICAgc2Nyb2xsU25hcCxcbi8vICAgIGZsZXgyMDEyLFxuLy8gICAgZmxleDIwMDlcbi8vIF1cbi8vIFBsdWdpbnMgd2l0aG91dCAnbm9QcmVmaWxsJyB2YWx1ZSwgZ29pbmcgbGFzdC5cbi8vICdmbGV4LSonIHBsdWdpbnMgc2hvdWxkIGJlIGF0IHRoZSBib3R0b20uXG4vLyAnZmxleDIwMDknIGdvaW5nIGFmdGVyICdmbGV4MjAxMicuXG4vLyAncHJlZml4ZWQnIGdvaW5nIGFmdGVyICd1bnByZWZpeGVkJ1xuXG52YXIgcGx1Z2lucyA9IFthcHBlYXJlbmNlLCBjb2xvckFkanVzdCwgbWFzaywgdGV4dE9yaWVudGF0aW9uLCB0cmFuc2Zvcm0sIHRyYW5zaXRpb24sIHdyaXRpbmdNb2RlLCB1c2VyU2VsZWN0LCBicmVha1Byb3BzT2xkLCBpbmxpbmVMb2dpY2FsT2xkLCB1bnByZWZpeGVkLCBwcmVmaXhlZCwgc2Nyb2xsU25hcCwgb3ZlcnNjcm9sbEJlaGF2aW9yLCBmbGV4MjAxMiwgZmxleDIwMDldO1xudmFyIHByb3BlcnR5RGV0ZWN0b3JzID0gcGx1Z2lucy5maWx0ZXIoZnVuY3Rpb24gKHApIHtcbiAgcmV0dXJuIHAuc3VwcG9ydGVkUHJvcGVydHk7XG59KS5tYXAoZnVuY3Rpb24gKHApIHtcbiAgcmV0dXJuIHAuc3VwcG9ydGVkUHJvcGVydHk7XG59KTtcbnZhciBub1ByZWZpbGwgPSBwbHVnaW5zLmZpbHRlcihmdW5jdGlvbiAocCkge1xuICByZXR1cm4gcC5ub1ByZWZpbGw7XG59KS5yZWR1Y2UoZnVuY3Rpb24gKGEsIHApIHtcbiAgYS5wdXNoLmFwcGx5KGEsIF90b0NvbnN1bWFibGVBcnJheShwLm5vUHJlZmlsbCkpO1xuICByZXR1cm4gYTtcbn0sIFtdKTtcblxudmFyIGVsO1xudmFyIGNhY2hlID0ge307XG5cbmlmIChpc0luQnJvd3Nlcikge1xuICBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTsgLy8gV2UgdGVzdCBldmVyeSBwcm9wZXJ0eSBvbiB2ZW5kb3IgcHJlZml4IHJlcXVpcmVtZW50LlxuICAvLyBPbmNlIHRlc3RlZCwgcmVzdWx0IGlzIGNhY2hlZC4gSXQgZ2l2ZXMgdXMgdXAgdG8gNzAlIHBlcmYgYm9vc3QuXG4gIC8vIGh0dHA6Ly9qc3BlcmYuY29tL2VsZW1lbnQtc3R5bGUtb2JqZWN0LWFjY2Vzcy12cy1wbGFpbi1vYmplY3RcbiAgLy9cbiAgLy8gUHJlZmlsbCBjYWNoZSB3aXRoIGtub3duIGNzcyBwcm9wZXJ0aWVzIHRvIHJlZHVjZSBhbW91bnQgb2ZcbiAgLy8gcHJvcGVydGllcyB3ZSBuZWVkIHRvIGZlYXR1cmUgdGVzdCBhdCBydW50aW1lLlxuICAvLyBodHRwOi8vZGF2aWR3YWxzaC5uYW1lL3ZlbmRvci1wcmVmaXhcblxuICB2YXIgY29tcHV0ZWQgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQsICcnKTtcblxuICBmb3IgKHZhciBrZXkkMSBpbiBjb21wdXRlZCkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1yZXN0cmljdGVkLWdsb2JhbHNcbiAgICBpZiAoIWlzTmFOKGtleSQxKSkgY2FjaGVbY29tcHV0ZWRba2V5JDFdXSA9IGNvbXB1dGVkW2tleSQxXTtcbiAgfSAvLyBQcm9wZXJ0aWVzIHRoYXQgY2Fubm90IGJlIGNvcnJlY3RseSBkZXRlY3RlZCB1c2luZyB0aGVcbiAgLy8gY2FjaGUgcHJlZmlsbCBtZXRob2QuXG5cblxuICBub1ByZWZpbGwuZm9yRWFjaChmdW5jdGlvbiAoeCkge1xuICAgIHJldHVybiBkZWxldGUgY2FjaGVbeF07XG4gIH0pO1xufVxuLyoqXG4gKiBUZXN0IGlmIGEgcHJvcGVydHkgaXMgc3VwcG9ydGVkLCByZXR1cm5zIHN1cHBvcnRlZCBwcm9wZXJ0eSB3aXRoIHZlbmRvclxuICogcHJlZml4IGlmIHJlcXVpcmVkLiBSZXR1cm5zIGBmYWxzZWAgaWYgbm90IHN1cHBvcnRlZC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gcHJvcCBkYXNoIHNlcGFyYXRlZFxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXVxuICogQHJldHVybiB7U3RyaW5nfEJvb2xlYW59XG4gKiBAYXBpIHB1YmxpY1xuICovXG5cblxuZnVuY3Rpb24gc3VwcG9ydGVkUHJvcGVydHkocHJvcCwgb3B0aW9ucykge1xuICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgLy8gRm9yIHNlcnZlci1zaWRlIHJlbmRlcmluZy5cbiAgaWYgKCFlbCkgcmV0dXJuIHByb3A7IC8vIFJlbW92ZSBjYWNoZSBmb3IgYmVuY2htYXJrIHRlc3RzIG9yIHJldHVybiBwcm9wZXJ0eSBmcm9tIHRoZSBjYWNoZS5cblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdiZW5jaG1hcmsnICYmIGNhY2hlW3Byb3BdICE9IG51bGwpIHtcbiAgICByZXR1cm4gY2FjaGVbcHJvcF07XG4gIH0gLy8gQ2hlY2sgaWYgJ3RyYW5zaXRpb24nIG9yICd0cmFuc2Zvcm0nIG5hdGl2ZWx5IHN1cHBvcnRlZCBpbiBicm93c2VyLlxuXG5cbiAgaWYgKHByb3AgPT09ICd0cmFuc2l0aW9uJyB8fCBwcm9wID09PSAndHJhbnNmb3JtJykge1xuICAgIG9wdGlvbnNbcHJvcF0gPSBwcm9wIGluIGVsLnN0eWxlO1xuICB9IC8vIEZpbmQgYSBwbHVnaW4gZm9yIGN1cnJlbnQgcHJlZml4IHByb3BlcnR5LlxuXG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wZXJ0eURldGVjdG9ycy5sZW5ndGg7IGkrKykge1xuICAgIGNhY2hlW3Byb3BdID0gcHJvcGVydHlEZXRlY3RvcnNbaV0ocHJvcCwgZWwuc3R5bGUsIG9wdGlvbnMpOyAvLyBCcmVhayBsb29wLCBpZiB2YWx1ZSBmb3VuZC5cblxuICAgIGlmIChjYWNoZVtwcm9wXSkgYnJlYWs7XG4gIH0gLy8gUmVzZXQgc3R5bGVzIGZvciBjdXJyZW50IHByb3BlcnR5LlxuICAvLyBGaXJlZm94IGNhbiBldmVuIHRocm93IGFuIGVycm9yIGZvciBpbnZhbGlkIHByb3BlcnRpZXMsIGUuZy4sIFwiMFwiLlxuXG5cbiAgdHJ5IHtcbiAgICBlbC5zdHlsZVtwcm9wXSA9ICcnO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICByZXR1cm4gY2FjaGVbcHJvcF07XG59XG5cbnZhciBjYWNoZSQxID0ge307XG52YXIgdHJhbnNpdGlvblByb3BlcnRpZXMgPSB7XG4gIHRyYW5zaXRpb246IDEsXG4gICd0cmFuc2l0aW9uLXByb3BlcnR5JzogMSxcbiAgJy13ZWJraXQtdHJhbnNpdGlvbic6IDEsXG4gICctd2Via2l0LXRyYW5zaXRpb24tcHJvcGVydHknOiAxXG59O1xudmFyIHRyYW5zUHJvcHNSZWdFeHAgPSAvKF5cXHMqW1xcdy1dKyl8LCAoXFxzKltcXHctXSspKD8hW14oKV0qXFwpKS9nO1xudmFyIGVsJDE7XG4vKipcbiAqIFJldHVybnMgcHJlZml4ZWQgdmFsdWUgdHJhbnNpdGlvbi90cmFuc2Zvcm0gaWYgbmVlZGVkLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBtYXRjaFxuICogQHBhcmFtIHtTdHJpbmd9IHAxXG4gKiBAcGFyYW0ge1N0cmluZ30gcDJcbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIHByZWZpeFRyYW5zaXRpb25DYWxsYmFjayhtYXRjaCwgcDEsIHAyKSB7XG4gIGlmIChwMSA9PT0gJ3ZhcicpIHJldHVybiAndmFyJztcbiAgaWYgKHAxID09PSAnYWxsJykgcmV0dXJuICdhbGwnO1xuICBpZiAocDIgPT09ICdhbGwnKSByZXR1cm4gJywgYWxsJztcbiAgdmFyIHByZWZpeGVkVmFsdWUgPSBwMSA/IHN1cHBvcnRlZFByb3BlcnR5KHAxKSA6IFwiLCBcIiArIHN1cHBvcnRlZFByb3BlcnR5KHAyKTtcbiAgaWYgKCFwcmVmaXhlZFZhbHVlKSByZXR1cm4gcDEgfHwgcDI7XG4gIHJldHVybiBwcmVmaXhlZFZhbHVlO1xufVxuXG5pZiAoaXNJbkJyb3dzZXIpIGVsJDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4vKipcbiAqIFJldHVybnMgcHJlZml4ZWQgdmFsdWUgaWYgbmVlZGVkLiBSZXR1cm5zIGBmYWxzZWAgaWYgdmFsdWUgaXMgbm90IHN1cHBvcnRlZC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gcHJvcGVydHlcbiAqIEBwYXJhbSB7U3RyaW5nfSB2YWx1ZVxuICogQHJldHVybiB7U3RyaW5nfEJvb2xlYW59XG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmZ1bmN0aW9uIHN1cHBvcnRlZFZhbHVlKHByb3BlcnR5LCB2YWx1ZSkge1xuICAvLyBGb3Igc2VydmVyLXNpZGUgcmVuZGVyaW5nLlxuICB2YXIgcHJlZml4ZWRWYWx1ZSA9IHZhbHVlO1xuICBpZiAoIWVsJDEgfHwgcHJvcGVydHkgPT09ICdjb250ZW50JykgcmV0dXJuIHZhbHVlOyAvLyBJdCBpcyBhIHN0cmluZyBvciBhIG51bWJlciBhcyBhIHN0cmluZyBsaWtlICcxJy5cbiAgLy8gV2Ugd2FudCBvbmx5IHByZWZpeGFibGUgdmFsdWVzIGhlcmUuXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1yZXN0cmljdGVkLWdsb2JhbHNcblxuICBpZiAodHlwZW9mIHByZWZpeGVkVmFsdWUgIT09ICdzdHJpbmcnIHx8ICFpc05hTihwYXJzZUludChwcmVmaXhlZFZhbHVlLCAxMCkpKSB7XG4gICAgcmV0dXJuIHByZWZpeGVkVmFsdWU7XG4gIH0gLy8gQ3JlYXRlIGNhY2hlIGtleSBmb3IgY3VycmVudCB2YWx1ZS5cblxuXG4gIHZhciBjYWNoZUtleSA9IHByb3BlcnR5ICsgcHJlZml4ZWRWYWx1ZTsgLy8gUmVtb3ZlIGNhY2hlIGZvciBiZW5jaG1hcmsgdGVzdHMgb3IgcmV0dXJuIHZhbHVlIGZyb20gY2FjaGUuXG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAnYmVuY2htYXJrJyAmJiBjYWNoZSQxW2NhY2hlS2V5XSAhPSBudWxsKSB7XG4gICAgcmV0dXJuIGNhY2hlJDFbY2FjaGVLZXldO1xuICB9IC8vIElFIGNhbiBldmVuIHRocm93IGFuIGVycm9yIGluIHNvbWUgY2FzZXMsIGZvciBlLmcuIHN0eWxlLmNvbnRlbnQgPSAnYmFyJy5cblxuXG4gIHRyeSB7XG4gICAgLy8gVGVzdCB2YWx1ZSBhcyBpdCBpcy5cbiAgICBlbCQxLnN0eWxlW3Byb3BlcnR5XSA9IHByZWZpeGVkVmFsdWU7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIC8vIFJldHVybiBmYWxzZSBpZiB2YWx1ZSBub3Qgc3VwcG9ydGVkLlxuICAgIGNhY2hlJDFbY2FjaGVLZXldID0gZmFsc2U7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9IC8vIElmICd0cmFuc2l0aW9uJyBvciAndHJhbnNpdGlvbi1wcm9wZXJ0eScgcHJvcGVydHkuXG5cblxuICBpZiAodHJhbnNpdGlvblByb3BlcnRpZXNbcHJvcGVydHldKSB7XG4gICAgcHJlZml4ZWRWYWx1ZSA9IHByZWZpeGVkVmFsdWUucmVwbGFjZSh0cmFuc1Byb3BzUmVnRXhwLCBwcmVmaXhUcmFuc2l0aW9uQ2FsbGJhY2spO1xuICB9IGVsc2UgaWYgKGVsJDEuc3R5bGVbcHJvcGVydHldID09PSAnJykge1xuICAgIC8vIFZhbHVlIHdpdGggYSB2ZW5kb3IgcHJlZml4LlxuICAgIHByZWZpeGVkVmFsdWUgPSBwcmVmaXguY3NzICsgcHJlZml4ZWRWYWx1ZTsgLy8gSGFyZGNvZGUgdGVzdCB0byBjb252ZXJ0IFwiZmxleFwiIHRvIFwiLW1zLWZsZXhib3hcIiBmb3IgSUUxMC5cblxuICAgIGlmIChwcmVmaXhlZFZhbHVlID09PSAnLW1zLWZsZXgnKSBlbCQxLnN0eWxlW3Byb3BlcnR5XSA9ICctbXMtZmxleGJveCc7IC8vIFRlc3QgcHJlZml4ZWQgdmFsdWUuXG5cbiAgICBlbCQxLnN0eWxlW3Byb3BlcnR5XSA9IHByZWZpeGVkVmFsdWU7IC8vIFJldHVybiBmYWxzZSBpZiB2YWx1ZSBub3Qgc3VwcG9ydGVkLlxuXG4gICAgaWYgKGVsJDEuc3R5bGVbcHJvcGVydHldID09PSAnJykge1xuICAgICAgY2FjaGUkMVtjYWNoZUtleV0gPSBmYWxzZTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH0gLy8gUmVzZXQgc3R5bGVzIGZvciBjdXJyZW50IHByb3BlcnR5LlxuXG5cbiAgZWwkMS5zdHlsZVtwcm9wZXJ0eV0gPSAnJzsgLy8gV3JpdGUgY3VycmVudCB2YWx1ZSB0byBjYWNoZS5cblxuICBjYWNoZSQxW2NhY2hlS2V5XSA9IHByZWZpeGVkVmFsdWU7XG4gIHJldHVybiBjYWNoZSQxW2NhY2hlS2V5XTtcbn1cblxuZXhwb3J0IHsgcHJlZml4LCBzdXBwb3J0ZWRLZXlmcmFtZXMsIHN1cHBvcnRlZFByb3BlcnR5LCBzdXBwb3J0ZWRWYWx1ZSB9O1xuIiwiLyogZXNsaW50LWRpc2FibGUgbm8tdmFyLCBwcmVmZXItdGVtcGxhdGUgKi9cbnZhciB1cHBlcmNhc2VQYXR0ZXJuID0gL1tBLVpdL2dcbnZhciBtc1BhdHRlcm4gPSAvXm1zLS9cbnZhciBjYWNoZSA9IHt9XG5cbmZ1bmN0aW9uIHRvSHlwaGVuTG93ZXIobWF0Y2gpIHtcbiAgcmV0dXJuICctJyArIG1hdGNoLnRvTG93ZXJDYXNlKClcbn1cblxuZnVuY3Rpb24gaHlwaGVuYXRlU3R5bGVOYW1lKG5hbWUpIHtcbiAgaWYgKGNhY2hlLmhhc093blByb3BlcnR5KG5hbWUpKSB7XG4gICAgcmV0dXJuIGNhY2hlW25hbWVdXG4gIH1cblxuICB2YXIgaE5hbWUgPSBuYW1lLnJlcGxhY2UodXBwZXJjYXNlUGF0dGVybiwgdG9IeXBoZW5Mb3dlcilcbiAgcmV0dXJuIChjYWNoZVtuYW1lXSA9IG1zUGF0dGVybi50ZXN0KGhOYW1lKSA/ICctJyArIGhOYW1lIDogaE5hbWUpXG59XG5cbmV4cG9ydCBkZWZhdWx0IGh5cGhlbmF0ZVN0eWxlTmFtZVxuIiwidmFyIF90eXBlb2YgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIiA/IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH0gOiBmdW5jdGlvbiAob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9O1xuXG5leHBvcnQgdmFyIGlzQnJvd3NlciA9ICh0eXBlb2Ygd2luZG93ID09PSBcInVuZGVmaW5lZFwiID8gXCJ1bmRlZmluZWRcIiA6IF90eXBlb2Yod2luZG93KSkgPT09IFwib2JqZWN0XCIgJiYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIiA/IFwidW5kZWZpbmVkXCIgOiBfdHlwZW9mKGRvY3VtZW50KSkgPT09ICdvYmplY3QnICYmIGRvY3VtZW50Lm5vZGVUeXBlID09PSA5O1xuXG5leHBvcnQgZGVmYXVsdCBpc0Jyb3dzZXI7XG4iLCJpbXBvcnQgaHlwaGVuYXRlIGZyb20gJ2h5cGhlbmF0ZS1zdHlsZS1uYW1lJztcblxuLyoqXG4gKiBDb252ZXJ0IGNhbWVsIGNhc2VkIHByb3BlcnR5IG5hbWVzIHRvIGRhc2ggc2VwYXJhdGVkLlxuICovXG5cbmZ1bmN0aW9uIGNvbnZlcnRDYXNlKHN0eWxlKSB7XG4gIHZhciBjb252ZXJ0ZWQgPSB7fTtcblxuICBmb3IgKHZhciBwcm9wIGluIHN0eWxlKSB7XG4gICAgdmFyIGtleSA9IHByb3AuaW5kZXhPZignLS0nKSA9PT0gMCA/IHByb3AgOiBoeXBoZW5hdGUocHJvcCk7XG4gICAgY29udmVydGVkW2tleV0gPSBzdHlsZVtwcm9wXTtcbiAgfVxuXG4gIGlmIChzdHlsZS5mYWxsYmFja3MpIHtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShzdHlsZS5mYWxsYmFja3MpKSBjb252ZXJ0ZWQuZmFsbGJhY2tzID0gc3R5bGUuZmFsbGJhY2tzLm1hcChjb252ZXJ0Q2FzZSk7ZWxzZSBjb252ZXJ0ZWQuZmFsbGJhY2tzID0gY29udmVydENhc2Uoc3R5bGUuZmFsbGJhY2tzKTtcbiAgfVxuXG4gIHJldHVybiBjb252ZXJ0ZWQ7XG59XG4vKipcbiAqIEFsbG93IGNhbWVsIGNhc2VkIHByb3BlcnR5IG5hbWVzIGJ5IGNvbnZlcnRpbmcgdGhlbSBiYWNrIHRvIGRhc2hlcml6ZWQuXG4gKi9cblxuXG5mdW5jdGlvbiBjYW1lbENhc2UoKSB7XG4gIGZ1bmN0aW9uIG9uUHJvY2Vzc1N0eWxlKHN0eWxlKSB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkoc3R5bGUpKSB7XG4gICAgICAvLyBIYW5kbGUgcnVsZXMgbGlrZSBAZm9udC1mYWNlLCB3aGljaCBjYW4gaGF2ZSBtdWx0aXBsZSBzdHlsZXMgaW4gYW4gYXJyYXlcbiAgICAgIGZvciAodmFyIGluZGV4ID0gMDsgaW5kZXggPCBzdHlsZS5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgc3R5bGVbaW5kZXhdID0gY29udmVydENhc2Uoc3R5bGVbaW5kZXhdKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHN0eWxlO1xuICAgIH1cblxuICAgIHJldHVybiBjb252ZXJ0Q2FzZShzdHlsZSk7XG4gIH1cblxuICBmdW5jdGlvbiBvbkNoYW5nZVZhbHVlKHZhbHVlLCBwcm9wLCBydWxlKSB7XG4gICAgaWYgKHByb3AuaW5kZXhPZignLS0nKSA9PT0gMCkge1xuICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cblxuICAgIHZhciBoeXBoZW5hdGVkUHJvcCA9IGh5cGhlbmF0ZShwcm9wKTsgLy8gVGhlcmUgd2FzIG5vIGNhbWVsIGNhc2UgaW4gcGxhY2VcblxuICAgIGlmIChwcm9wID09PSBoeXBoZW5hdGVkUHJvcCkgcmV0dXJuIHZhbHVlO1xuICAgIHJ1bGUucHJvcChoeXBoZW5hdGVkUHJvcCwgdmFsdWUpOyAvLyBDb3JlIHdpbGwgaWdub3JlIHRoYXQgcHJvcGVydHkgdmFsdWUgd2Ugc2V0IHRoZSBwcm9wZXIgb25lIGFib3ZlLlxuXG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIG9uUHJvY2Vzc1N0eWxlOiBvblByb2Nlc3NTdHlsZSxcbiAgICBvbkNoYW5nZVZhbHVlOiBvbkNoYW5nZVZhbHVlXG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNhbWVsQ2FzZTtcbiIsImltcG9ydCB7IGhhc0NTU1RPTVN1cHBvcnQgfSBmcm9tICdqc3MnO1xuXG52YXIgcHggPSBoYXNDU1NUT01TdXBwb3J0ICYmIENTUyA/IENTUy5weCA6ICdweCc7XG52YXIgbXMgPSBoYXNDU1NUT01TdXBwb3J0ICYmIENTUyA/IENTUy5tcyA6ICdtcyc7XG52YXIgcGVyY2VudCA9IGhhc0NTU1RPTVN1cHBvcnQgJiYgQ1NTID8gQ1NTLnBlcmNlbnQgOiAnJSc7XG4vKipcbiAqIEdlbmVyYXRlZCBqc3MtcGx1Z2luLWRlZmF1bHQtdW5pdCBDU1MgcHJvcGVydHkgdW5pdHNcbiAqL1xuXG52YXIgZGVmYXVsdFVuaXRzID0ge1xuICAvLyBBbmltYXRpb24gcHJvcGVydGllc1xuICAnYW5pbWF0aW9uLWRlbGF5JzogbXMsXG4gICdhbmltYXRpb24tZHVyYXRpb24nOiBtcyxcbiAgLy8gQmFja2dyb3VuZCBwcm9wZXJ0aWVzXG4gICdiYWNrZ3JvdW5kLXBvc2l0aW9uJzogcHgsXG4gICdiYWNrZ3JvdW5kLXBvc2l0aW9uLXgnOiBweCxcbiAgJ2JhY2tncm91bmQtcG9zaXRpb24teSc6IHB4LFxuICAnYmFja2dyb3VuZC1zaXplJzogcHgsXG4gIC8vIEJvcmRlciBQcm9wZXJ0aWVzXG4gIGJvcmRlcjogcHgsXG4gICdib3JkZXItYm90dG9tJzogcHgsXG4gICdib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzJzogcHgsXG4gICdib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1cyc6IHB4LFxuICAnYm9yZGVyLWJvdHRvbS13aWR0aCc6IHB4LFxuICAnYm9yZGVyLWxlZnQnOiBweCxcbiAgJ2JvcmRlci1sZWZ0LXdpZHRoJzogcHgsXG4gICdib3JkZXItcmFkaXVzJzogcHgsXG4gICdib3JkZXItcmlnaHQnOiBweCxcbiAgJ2JvcmRlci1yaWdodC13aWR0aCc6IHB4LFxuICAnYm9yZGVyLXRvcCc6IHB4LFxuICAnYm9yZGVyLXRvcC1sZWZ0LXJhZGl1cyc6IHB4LFxuICAnYm9yZGVyLXRvcC1yaWdodC1yYWRpdXMnOiBweCxcbiAgJ2JvcmRlci10b3Atd2lkdGgnOiBweCxcbiAgJ2JvcmRlci13aWR0aCc6IHB4LFxuICAnYm9yZGVyLWJsb2NrJzogcHgsXG4gICdib3JkZXItYmxvY2stZW5kJzogcHgsXG4gICdib3JkZXItYmxvY2stZW5kLXdpZHRoJzogcHgsXG4gICdib3JkZXItYmxvY2stc3RhcnQnOiBweCxcbiAgJ2JvcmRlci1ibG9jay1zdGFydC13aWR0aCc6IHB4LFxuICAnYm9yZGVyLWJsb2NrLXdpZHRoJzogcHgsXG4gICdib3JkZXItaW5saW5lJzogcHgsXG4gICdib3JkZXItaW5saW5lLWVuZCc6IHB4LFxuICAnYm9yZGVyLWlubGluZS1lbmQtd2lkdGgnOiBweCxcbiAgJ2JvcmRlci1pbmxpbmUtc3RhcnQnOiBweCxcbiAgJ2JvcmRlci1pbmxpbmUtc3RhcnQtd2lkdGgnOiBweCxcbiAgJ2JvcmRlci1pbmxpbmUtd2lkdGgnOiBweCxcbiAgJ2JvcmRlci1zdGFydC1zdGFydC1yYWRpdXMnOiBweCxcbiAgJ2JvcmRlci1zdGFydC1lbmQtcmFkaXVzJzogcHgsXG4gICdib3JkZXItZW5kLXN0YXJ0LXJhZGl1cyc6IHB4LFxuICAnYm9yZGVyLWVuZC1lbmQtcmFkaXVzJzogcHgsXG4gIC8vIE1hcmdpbiBwcm9wZXJ0aWVzXG4gIG1hcmdpbjogcHgsXG4gICdtYXJnaW4tYm90dG9tJzogcHgsXG4gICdtYXJnaW4tbGVmdCc6IHB4LFxuICAnbWFyZ2luLXJpZ2h0JzogcHgsXG4gICdtYXJnaW4tdG9wJzogcHgsXG4gICdtYXJnaW4tYmxvY2snOiBweCxcbiAgJ21hcmdpbi1ibG9jay1lbmQnOiBweCxcbiAgJ21hcmdpbi1ibG9jay1zdGFydCc6IHB4LFxuICAnbWFyZ2luLWlubGluZSc6IHB4LFxuICAnbWFyZ2luLWlubGluZS1lbmQnOiBweCxcbiAgJ21hcmdpbi1pbmxpbmUtc3RhcnQnOiBweCxcbiAgLy8gUGFkZGluZyBwcm9wZXJ0aWVzXG4gIHBhZGRpbmc6IHB4LFxuICAncGFkZGluZy1ib3R0b20nOiBweCxcbiAgJ3BhZGRpbmctbGVmdCc6IHB4LFxuICAncGFkZGluZy1yaWdodCc6IHB4LFxuICAncGFkZGluZy10b3AnOiBweCxcbiAgJ3BhZGRpbmctYmxvY2snOiBweCxcbiAgJ3BhZGRpbmctYmxvY2stZW5kJzogcHgsXG4gICdwYWRkaW5nLWJsb2NrLXN0YXJ0JzogcHgsXG4gICdwYWRkaW5nLWlubGluZSc6IHB4LFxuICAncGFkZGluZy1pbmxpbmUtZW5kJzogcHgsXG4gICdwYWRkaW5nLWlubGluZS1zdGFydCc6IHB4LFxuICAvLyBNYXNrIHByb3BlcnRpZXNcbiAgJ21hc2stcG9zaXRpb24teCc6IHB4LFxuICAnbWFzay1wb3NpdGlvbi15JzogcHgsXG4gICdtYXNrLXNpemUnOiBweCxcbiAgLy8gV2lkdGggYW5kIGhlaWdodCBwcm9wZXJ0aWVzXG4gIGhlaWdodDogcHgsXG4gIHdpZHRoOiBweCxcbiAgJ21pbi1oZWlnaHQnOiBweCxcbiAgJ21heC1oZWlnaHQnOiBweCxcbiAgJ21pbi13aWR0aCc6IHB4LFxuICAnbWF4LXdpZHRoJzogcHgsXG4gIC8vIFBvc2l0aW9uIHByb3BlcnRpZXNcbiAgYm90dG9tOiBweCxcbiAgbGVmdDogcHgsXG4gIHRvcDogcHgsXG4gIHJpZ2h0OiBweCxcbiAgaW5zZXQ6IHB4LFxuICAnaW5zZXQtYmxvY2snOiBweCxcbiAgJ2luc2V0LWJsb2NrLWVuZCc6IHB4LFxuICAnaW5zZXQtYmxvY2stc3RhcnQnOiBweCxcbiAgJ2luc2V0LWlubGluZSc6IHB4LFxuICAnaW5zZXQtaW5saW5lLWVuZCc6IHB4LFxuICAnaW5zZXQtaW5saW5lLXN0YXJ0JzogcHgsXG4gIC8vIFNoYWRvdyBwcm9wZXJ0aWVzXG4gICdib3gtc2hhZG93JzogcHgsXG4gICd0ZXh0LXNoYWRvdyc6IHB4LFxuICAvLyBDb2x1bW4gcHJvcGVydGllc1xuICAnY29sdW1uLWdhcCc6IHB4LFxuICAnY29sdW1uLXJ1bGUnOiBweCxcbiAgJ2NvbHVtbi1ydWxlLXdpZHRoJzogcHgsXG4gICdjb2x1bW4td2lkdGgnOiBweCxcbiAgLy8gRm9udCBhbmQgdGV4dCBwcm9wZXJ0aWVzXG4gICdmb250LXNpemUnOiBweCxcbiAgJ2ZvbnQtc2l6ZS1kZWx0YSc6IHB4LFxuICAnbGV0dGVyLXNwYWNpbmcnOiBweCxcbiAgJ3RleHQtZGVjb3JhdGlvbi10aGlja25lc3MnOiBweCxcbiAgJ3RleHQtaW5kZW50JzogcHgsXG4gICd0ZXh0LXN0cm9rZSc6IHB4LFxuICAndGV4dC1zdHJva2Utd2lkdGgnOiBweCxcbiAgJ3dvcmQtc3BhY2luZyc6IHB4LFxuICAvLyBNb3Rpb24gcHJvcGVydGllc1xuICBtb3Rpb246IHB4LFxuICAnbW90aW9uLW9mZnNldCc6IHB4LFxuICAvLyBPdXRsaW5lIHByb3BlcnRpZXNcbiAgb3V0bGluZTogcHgsXG4gICdvdXRsaW5lLW9mZnNldCc6IHB4LFxuICAnb3V0bGluZS13aWR0aCc6IHB4LFxuICAvLyBQZXJzcGVjdGl2ZSBwcm9wZXJ0aWVzXG4gIHBlcnNwZWN0aXZlOiBweCxcbiAgJ3BlcnNwZWN0aXZlLW9yaWdpbi14JzogcGVyY2VudCxcbiAgJ3BlcnNwZWN0aXZlLW9yaWdpbi15JzogcGVyY2VudCxcbiAgLy8gVHJhbnNmb3JtIHByb3BlcnRpZXNcbiAgJ3RyYW5zZm9ybS1vcmlnaW4nOiBwZXJjZW50LFxuICAndHJhbnNmb3JtLW9yaWdpbi14JzogcGVyY2VudCxcbiAgJ3RyYW5zZm9ybS1vcmlnaW4teSc6IHBlcmNlbnQsXG4gICd0cmFuc2Zvcm0tb3JpZ2luLXonOiBwZXJjZW50LFxuICAvLyBUcmFuc2l0aW9uIHByb3BlcnRpZXNcbiAgJ3RyYW5zaXRpb24tZGVsYXknOiBtcyxcbiAgJ3RyYW5zaXRpb24tZHVyYXRpb24nOiBtcyxcbiAgLy8gQWxpZ25tZW50IHByb3BlcnRpZXNcbiAgJ3ZlcnRpY2FsLWFsaWduJzogcHgsXG4gICdmbGV4LWJhc2lzJzogcHgsXG4gIC8vIFNvbWUgcmFuZG9tIHByb3BlcnRpZXNcbiAgJ3NoYXBlLW1hcmdpbic6IHB4LFxuICBzaXplOiBweCxcbiAgZ2FwOiBweCxcbiAgLy8gR3JpZCBwcm9wZXJ0aWVzXG4gIGdyaWQ6IHB4LFxuICAnZ3JpZC1nYXAnOiBweCxcbiAgJ3Jvdy1nYXAnOiBweCxcbiAgJ2dyaWQtcm93LWdhcCc6IHB4LFxuICAnZ3JpZC1jb2x1bW4tZ2FwJzogcHgsXG4gICdncmlkLXRlbXBsYXRlLXJvd3MnOiBweCxcbiAgJ2dyaWQtdGVtcGxhdGUtY29sdW1ucyc6IHB4LFxuICAnZ3JpZC1hdXRvLXJvd3MnOiBweCxcbiAgJ2dyaWQtYXV0by1jb2x1bW5zJzogcHgsXG4gIC8vIE5vdCBleGlzdGluZyBwcm9wZXJ0aWVzLlxuICAvLyBVc2VkIHRvIGF2b2lkIGlzc3VlcyB3aXRoIGpzcy1wbHVnaW4tZXhwYW5kIGludGVncmF0aW9uLlxuICAnYm94LXNoYWRvdy14JzogcHgsXG4gICdib3gtc2hhZG93LXknOiBweCxcbiAgJ2JveC1zaGFkb3ctYmx1cic6IHB4LFxuICAnYm94LXNoYWRvdy1zcHJlYWQnOiBweCxcbiAgJ2ZvbnQtbGluZS1oZWlnaHQnOiBweCxcbiAgJ3RleHQtc2hhZG93LXgnOiBweCxcbiAgJ3RleHQtc2hhZG93LXknOiBweCxcbiAgJ3RleHQtc2hhZG93LWJsdXInOiBweFxufTtcblxuLyoqXG4gKiBDbG9uZXMgdGhlIG9iamVjdCBhbmQgYWRkcyBhIGNhbWVsIGNhc2VkIHByb3BlcnR5IHZlcnNpb24uXG4gKi9cblxuZnVuY3Rpb24gYWRkQ2FtZWxDYXNlZFZlcnNpb24ob2JqKSB7XG4gIHZhciByZWdFeHAgPSAvKC1bYS16XSkvZztcblxuICB2YXIgcmVwbGFjZSA9IGZ1bmN0aW9uIHJlcGxhY2Uoc3RyKSB7XG4gICAgcmV0dXJuIHN0clsxXS50b1VwcGVyQ2FzZSgpO1xuICB9O1xuXG4gIHZhciBuZXdPYmogPSB7fTtcblxuICBmb3IgKHZhciBrZXkgaW4gb2JqKSB7XG4gICAgbmV3T2JqW2tleV0gPSBvYmpba2V5XTtcbiAgICBuZXdPYmpba2V5LnJlcGxhY2UocmVnRXhwLCByZXBsYWNlKV0gPSBvYmpba2V5XTtcbiAgfVxuXG4gIHJldHVybiBuZXdPYmo7XG59XG5cbnZhciB1bml0cyA9IGFkZENhbWVsQ2FzZWRWZXJzaW9uKGRlZmF1bHRVbml0cyk7XG4vKipcbiAqIFJlY3Vyc2l2ZSBkZWVwIHN0eWxlIHBhc3NpbmcgZnVuY3Rpb25cbiAqL1xuXG5mdW5jdGlvbiBpdGVyYXRlKHByb3AsIHZhbHVlLCBvcHRpb25zKSB7XG4gIGlmICh2YWx1ZSA9PSBudWxsKSByZXR1cm4gdmFsdWU7XG5cbiAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB2YWx1ZS5sZW5ndGg7IGkrKykge1xuICAgICAgdmFsdWVbaV0gPSBpdGVyYXRlKHByb3AsIHZhbHVlW2ldLCBvcHRpb25zKTtcbiAgICB9XG4gIH0gZWxzZSBpZiAodHlwZW9mIHZhbHVlID09PSAnb2JqZWN0Jykge1xuICAgIGlmIChwcm9wID09PSAnZmFsbGJhY2tzJykge1xuICAgICAgZm9yICh2YXIgaW5uZXJQcm9wIGluIHZhbHVlKSB7XG4gICAgICAgIHZhbHVlW2lubmVyUHJvcF0gPSBpdGVyYXRlKGlubmVyUHJvcCwgdmFsdWVbaW5uZXJQcm9wXSwgb3B0aW9ucyk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGZvciAodmFyIF9pbm5lclByb3AgaW4gdmFsdWUpIHtcbiAgICAgICAgdmFsdWVbX2lubmVyUHJvcF0gPSBpdGVyYXRlKHByb3AgKyBcIi1cIiArIF9pbm5lclByb3AsIHZhbHVlW19pbm5lclByb3BdLCBvcHRpb25zKTtcbiAgICAgIH1cbiAgICB9IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1yZXN0cmljdGVkLWdsb2JhbHNcblxuICB9IGVsc2UgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicgJiYgaXNOYU4odmFsdWUpID09PSBmYWxzZSkge1xuICAgIHZhciB1bml0ID0gb3B0aW9uc1twcm9wXSB8fCB1bml0c1twcm9wXTsgLy8gQWRkIHRoZSB1bml0IGlmIGF2YWlsYWJsZSwgZXhjZXB0IGZvciB0aGUgc3BlY2lhbCBjYXNlIG9mIDBweC5cblxuICAgIGlmICh1bml0ICYmICEodmFsdWUgPT09IDAgJiYgdW5pdCA9PT0gcHgpKSB7XG4gICAgICByZXR1cm4gdHlwZW9mIHVuaXQgPT09ICdmdW5jdGlvbicgPyB1bml0KHZhbHVlKS50b1N0cmluZygpIDogXCJcIiArIHZhbHVlICsgdW5pdDtcbiAgICB9XG5cbiAgICByZXR1cm4gdmFsdWUudG9TdHJpbmcoKTtcbiAgfVxuXG4gIHJldHVybiB2YWx1ZTtcbn1cbi8qKlxuICogQWRkIHVuaXQgdG8gbnVtZXJpYyB2YWx1ZXMuXG4gKi9cblxuXG5mdW5jdGlvbiBkZWZhdWx0VW5pdChvcHRpb25zKSB7XG4gIGlmIChvcHRpb25zID09PSB2b2lkIDApIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICB2YXIgY2FtZWxDYXNlZE9wdGlvbnMgPSBhZGRDYW1lbENhc2VkVmVyc2lvbihvcHRpb25zKTtcblxuICBmdW5jdGlvbiBvblByb2Nlc3NTdHlsZShzdHlsZSwgcnVsZSkge1xuICAgIGlmIChydWxlLnR5cGUgIT09ICdzdHlsZScpIHJldHVybiBzdHlsZTtcblxuICAgIGZvciAodmFyIHByb3AgaW4gc3R5bGUpIHtcbiAgICAgIHN0eWxlW3Byb3BdID0gaXRlcmF0ZShwcm9wLCBzdHlsZVtwcm9wXSwgY2FtZWxDYXNlZE9wdGlvbnMpO1xuICAgIH1cblxuICAgIHJldHVybiBzdHlsZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIG9uQ2hhbmdlVmFsdWUodmFsdWUsIHByb3ApIHtcbiAgICByZXR1cm4gaXRlcmF0ZShwcm9wLCB2YWx1ZSwgY2FtZWxDYXNlZE9wdGlvbnMpO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBvblByb2Nlc3NTdHlsZTogb25Qcm9jZXNzU3R5bGUsXG4gICAgb25DaGFuZ2VWYWx1ZTogb25DaGFuZ2VWYWx1ZVxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBkZWZhdWx0VW5pdDtcbiIsImltcG9ydCBfZXh0ZW5kcyBmcm9tICdAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9leHRlbmRzJztcbmltcG9ydCB7IFJ1bGVMaXN0IH0gZnJvbSAnanNzJztcblxudmFyIGF0ID0gJ0BnbG9iYWwnO1xudmFyIGF0UHJlZml4ID0gJ0BnbG9iYWwgJztcblxudmFyIEdsb2JhbENvbnRhaW5lclJ1bGUgPVxuLyojX19QVVJFX18qL1xuZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBHbG9iYWxDb250YWluZXJSdWxlKGtleSwgc3R5bGVzLCBvcHRpb25zKSB7XG4gICAgdGhpcy50eXBlID0gJ2dsb2JhbCc7XG4gICAgdGhpcy5hdCA9IGF0O1xuICAgIHRoaXMuaXNQcm9jZXNzZWQgPSBmYWxzZTtcbiAgICB0aGlzLmtleSA9IGtleTtcbiAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuICAgIHRoaXMucnVsZXMgPSBuZXcgUnVsZUxpc3QoX2V4dGVuZHMoe30sIG9wdGlvbnMsIHtcbiAgICAgIHBhcmVudDogdGhpc1xuICAgIH0pKTtcblxuICAgIGZvciAodmFyIHNlbGVjdG9yIGluIHN0eWxlcykge1xuICAgICAgdGhpcy5ydWxlcy5hZGQoc2VsZWN0b3IsIHN0eWxlc1tzZWxlY3Rvcl0pO1xuICAgIH1cblxuICAgIHRoaXMucnVsZXMucHJvY2VzcygpO1xuICB9XG4gIC8qKlxuICAgKiBHZXQgYSBydWxlLlxuICAgKi9cblxuXG4gIHZhciBfcHJvdG8gPSBHbG9iYWxDb250YWluZXJSdWxlLnByb3RvdHlwZTtcblxuICBfcHJvdG8uZ2V0UnVsZSA9IGZ1bmN0aW9uIGdldFJ1bGUobmFtZSkge1xuICAgIHJldHVybiB0aGlzLnJ1bGVzLmdldChuYW1lKTtcbiAgfVxuICAvKipcbiAgICogQ3JlYXRlIGFuZCByZWdpc3RlciBydWxlLCBydW4gcGx1Z2lucy5cbiAgICovXG4gIDtcblxuICBfcHJvdG8uYWRkUnVsZSA9IGZ1bmN0aW9uIGFkZFJ1bGUobmFtZSwgc3R5bGUsIG9wdGlvbnMpIHtcbiAgICB2YXIgcnVsZSA9IHRoaXMucnVsZXMuYWRkKG5hbWUsIHN0eWxlLCBvcHRpb25zKTtcbiAgICBpZiAocnVsZSkgdGhpcy5vcHRpb25zLmpzcy5wbHVnaW5zLm9uUHJvY2Vzc1J1bGUocnVsZSk7XG4gICAgcmV0dXJuIHJ1bGU7XG4gIH1cbiAgLyoqXG4gICAqIEdldCBpbmRleCBvZiBhIHJ1bGUuXG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLmluZGV4T2YgPSBmdW5jdGlvbiBpbmRleE9mKHJ1bGUpIHtcbiAgICByZXR1cm4gdGhpcy5ydWxlcy5pbmRleE9mKHJ1bGUpO1xuICB9XG4gIC8qKlxuICAgKiBHZW5lcmF0ZXMgYSBDU1Mgc3RyaW5nLlxuICAgKi9cbiAgO1xuXG4gIF9wcm90by50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLnJ1bGVzLnRvU3RyaW5nKCk7XG4gIH07XG5cbiAgcmV0dXJuIEdsb2JhbENvbnRhaW5lclJ1bGU7XG59KCk7XG5cbnZhciBHbG9iYWxQcmVmaXhlZFJ1bGUgPVxuLyojX19QVVJFX18qL1xuZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBHbG9iYWxQcmVmaXhlZFJ1bGUoa2V5LCBzdHlsZSwgb3B0aW9ucykge1xuICAgIHRoaXMudHlwZSA9ICdnbG9iYWwnO1xuICAgIHRoaXMuYXQgPSBhdDtcbiAgICB0aGlzLmlzUHJvY2Vzc2VkID0gZmFsc2U7XG4gICAgdGhpcy5rZXkgPSBrZXk7XG4gICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcbiAgICB2YXIgc2VsZWN0b3IgPSBrZXkuc3Vic3RyKGF0UHJlZml4Lmxlbmd0aCk7XG4gICAgdGhpcy5ydWxlID0gb3B0aW9ucy5qc3MuY3JlYXRlUnVsZShzZWxlY3Rvciwgc3R5bGUsIF9leHRlbmRzKHt9LCBvcHRpb25zLCB7XG4gICAgICBwYXJlbnQ6IHRoaXNcbiAgICB9KSk7XG4gIH1cblxuICB2YXIgX3Byb3RvMiA9IEdsb2JhbFByZWZpeGVkUnVsZS5wcm90b3R5cGU7XG5cbiAgX3Byb3RvMi50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKG9wdGlvbnMpIHtcbiAgICByZXR1cm4gdGhpcy5ydWxlID8gdGhpcy5ydWxlLnRvU3RyaW5nKG9wdGlvbnMpIDogJyc7XG4gIH07XG5cbiAgcmV0dXJuIEdsb2JhbFByZWZpeGVkUnVsZTtcbn0oKTtcblxudmFyIHNlcGFyYXRvclJlZ0V4cCA9IC9cXHMqLFxccyovZztcblxuZnVuY3Rpb24gYWRkU2NvcGUoc2VsZWN0b3IsIHNjb3BlKSB7XG4gIHZhciBwYXJ0cyA9IHNlbGVjdG9yLnNwbGl0KHNlcGFyYXRvclJlZ0V4cCk7XG4gIHZhciBzY29wZWQgPSAnJztcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHBhcnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgc2NvcGVkICs9IHNjb3BlICsgXCIgXCIgKyBwYXJ0c1tpXS50cmltKCk7XG4gICAgaWYgKHBhcnRzW2kgKyAxXSkgc2NvcGVkICs9ICcsICc7XG4gIH1cblxuICByZXR1cm4gc2NvcGVkO1xufVxuXG5mdW5jdGlvbiBoYW5kbGVOZXN0ZWRHbG9iYWxDb250YWluZXJSdWxlKHJ1bGUsIHNoZWV0KSB7XG4gIHZhciBvcHRpb25zID0gcnVsZS5vcHRpb25zLFxuICAgICAgc3R5bGUgPSBydWxlLnN0eWxlO1xuICB2YXIgcnVsZXMgPSBzdHlsZSA/IHN0eWxlW2F0XSA6IG51bGw7XG4gIGlmICghcnVsZXMpIHJldHVybjtcblxuICBmb3IgKHZhciBuYW1lIGluIHJ1bGVzKSB7XG4gICAgc2hlZXQuYWRkUnVsZShuYW1lLCBydWxlc1tuYW1lXSwgX2V4dGVuZHMoe30sIG9wdGlvbnMsIHtcbiAgICAgIHNlbGVjdG9yOiBhZGRTY29wZShuYW1lLCBydWxlLnNlbGVjdG9yKVxuICAgIH0pKTtcbiAgfVxuXG4gIGRlbGV0ZSBzdHlsZVthdF07XG59XG5cbmZ1bmN0aW9uIGhhbmRsZVByZWZpeGVkR2xvYmFsUnVsZShydWxlLCBzaGVldCkge1xuICB2YXIgb3B0aW9ucyA9IHJ1bGUub3B0aW9ucyxcbiAgICAgIHN0eWxlID0gcnVsZS5zdHlsZTtcblxuICBmb3IgKHZhciBwcm9wIGluIHN0eWxlKSB7XG4gICAgaWYgKHByb3BbMF0gIT09ICdAJyB8fCBwcm9wLnN1YnN0cigwLCBhdC5sZW5ndGgpICE9PSBhdCkgY29udGludWU7XG4gICAgdmFyIHNlbGVjdG9yID0gYWRkU2NvcGUocHJvcC5zdWJzdHIoYXQubGVuZ3RoKSwgcnVsZS5zZWxlY3Rvcik7XG4gICAgc2hlZXQuYWRkUnVsZShzZWxlY3Rvciwgc3R5bGVbcHJvcF0sIF9leHRlbmRzKHt9LCBvcHRpb25zLCB7XG4gICAgICBzZWxlY3Rvcjogc2VsZWN0b3JcbiAgICB9KSk7XG4gICAgZGVsZXRlIHN0eWxlW3Byb3BdO1xuICB9XG59XG4vKipcbiAqIENvbnZlcnQgbmVzdGVkIHJ1bGVzIHRvIHNlcGFyYXRlLCByZW1vdmUgdGhlbSBmcm9tIG9yaWdpbmFsIHN0eWxlcy5cbiAqL1xuXG5cbmZ1bmN0aW9uIGpzc0dsb2JhbCgpIHtcbiAgZnVuY3Rpb24gb25DcmVhdGVSdWxlKG5hbWUsIHN0eWxlcywgb3B0aW9ucykge1xuICAgIGlmICghbmFtZSkgcmV0dXJuIG51bGw7XG5cbiAgICBpZiAobmFtZSA9PT0gYXQpIHtcbiAgICAgIHJldHVybiBuZXcgR2xvYmFsQ29udGFpbmVyUnVsZShuYW1lLCBzdHlsZXMsIG9wdGlvbnMpO1xuICAgIH1cblxuICAgIGlmIChuYW1lWzBdID09PSAnQCcgJiYgbmFtZS5zdWJzdHIoMCwgYXRQcmVmaXgubGVuZ3RoKSA9PT0gYXRQcmVmaXgpIHtcbiAgICAgIHJldHVybiBuZXcgR2xvYmFsUHJlZml4ZWRSdWxlKG5hbWUsIHN0eWxlcywgb3B0aW9ucyk7XG4gICAgfVxuXG4gICAgdmFyIHBhcmVudCA9IG9wdGlvbnMucGFyZW50O1xuXG4gICAgaWYgKHBhcmVudCkge1xuICAgICAgaWYgKHBhcmVudC50eXBlID09PSAnZ2xvYmFsJyB8fCBwYXJlbnQub3B0aW9ucy5wYXJlbnQgJiYgcGFyZW50Lm9wdGlvbnMucGFyZW50LnR5cGUgPT09ICdnbG9iYWwnKSB7XG4gICAgICAgIG9wdGlvbnMuc2NvcGVkID0gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKG9wdGlvbnMuc2NvcGVkID09PSBmYWxzZSkge1xuICAgICAgb3B0aW9ucy5zZWxlY3RvciA9IG5hbWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBmdW5jdGlvbiBvblByb2Nlc3NSdWxlKHJ1bGUsIHNoZWV0KSB7XG4gICAgaWYgKHJ1bGUudHlwZSAhPT0gJ3N0eWxlJyB8fCAhc2hlZXQpIHJldHVybjtcbiAgICBoYW5kbGVOZXN0ZWRHbG9iYWxDb250YWluZXJSdWxlKHJ1bGUsIHNoZWV0KTtcbiAgICBoYW5kbGVQcmVmaXhlZEdsb2JhbFJ1bGUocnVsZSwgc2hlZXQpO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBvbkNyZWF0ZVJ1bGU6IG9uQ3JlYXRlUnVsZSxcbiAgICBvblByb2Nlc3NSdWxlOiBvblByb2Nlc3NSdWxlXG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGpzc0dsb2JhbDtcbiIsImltcG9ydCBfZXh0ZW5kcyBmcm9tICdAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9leHRlbmRzJztcbmltcG9ydCB3YXJuaW5nIGZyb20gJ3Rpbnktd2FybmluZyc7XG5cbnZhciBzZXBhcmF0b3JSZWdFeHAgPSAvXFxzKixcXHMqL2c7XG52YXIgcGFyZW50UmVnRXhwID0gLyYvZztcbnZhciByZWZSZWdFeHAgPSAvXFwkKFtcXHctXSspL2c7XG4vKipcbiAqIENvbnZlcnQgbmVzdGVkIHJ1bGVzIHRvIHNlcGFyYXRlLCByZW1vdmUgdGhlbSBmcm9tIG9yaWdpbmFsIHN0eWxlcy5cbiAqL1xuXG5mdW5jdGlvbiBqc3NOZXN0ZWQoKSB7XG4gIC8vIEdldCBhIGZ1bmN0aW9uIHRvIGJlIHVzZWQgZm9yICRyZWYgcmVwbGFjZW1lbnQuXG4gIGZ1bmN0aW9uIGdldFJlcGxhY2VSZWYoY29udGFpbmVyLCBzaGVldCkge1xuICAgIHJldHVybiBmdW5jdGlvbiAobWF0Y2gsIGtleSkge1xuICAgICAgdmFyIHJ1bGUgPSBjb250YWluZXIuZ2V0UnVsZShrZXkpIHx8IHNoZWV0ICYmIHNoZWV0LmdldFJ1bGUoa2V5KTtcblxuICAgICAgaWYgKHJ1bGUpIHtcbiAgICAgICAgcmV0dXJuIHJ1bGUuc2VsZWN0b3I7XG4gICAgICB9XG5cbiAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IHdhcm5pbmcoZmFsc2UsIFwiW0pTU10gQ291bGQgbm90IGZpbmQgdGhlIHJlZmVyZW5jZWQgcnVsZSBcXFwiXCIgKyBrZXkgKyBcIlxcXCIgaW4gXFxcIlwiICsgKGNvbnRhaW5lci5vcHRpb25zLm1ldGEgfHwgY29udGFpbmVyLnRvU3RyaW5nKCkpICsgXCJcXFwiLlwiKSA6IHZvaWQgMDtcbiAgICAgIHJldHVybiBrZXk7XG4gICAgfTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlcGxhY2VQYXJlbnRSZWZzKG5lc3RlZFByb3AsIHBhcmVudFByb3ApIHtcbiAgICB2YXIgcGFyZW50U2VsZWN0b3JzID0gcGFyZW50UHJvcC5zcGxpdChzZXBhcmF0b3JSZWdFeHApO1xuICAgIHZhciBuZXN0ZWRTZWxlY3RvcnMgPSBuZXN0ZWRQcm9wLnNwbGl0KHNlcGFyYXRvclJlZ0V4cCk7XG4gICAgdmFyIHJlc3VsdCA9ICcnO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwYXJlbnRTZWxlY3RvcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBwYXJlbnQgPSBwYXJlbnRTZWxlY3RvcnNbaV07XG5cbiAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgbmVzdGVkU2VsZWN0b3JzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgIHZhciBuZXN0ZWQgPSBuZXN0ZWRTZWxlY3RvcnNbal07XG4gICAgICAgIGlmIChyZXN1bHQpIHJlc3VsdCArPSAnLCAnOyAvLyBSZXBsYWNlIGFsbCAmIGJ5IHRoZSBwYXJlbnQgb3IgcHJlZml4ICYgd2l0aCB0aGUgcGFyZW50LlxuXG4gICAgICAgIHJlc3VsdCArPSBuZXN0ZWQuaW5kZXhPZignJicpICE9PSAtMSA/IG5lc3RlZC5yZXBsYWNlKHBhcmVudFJlZ0V4cCwgcGFyZW50KSA6IHBhcmVudCArIFwiIFwiICsgbmVzdGVkO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRPcHRpb25zKHJ1bGUsIGNvbnRhaW5lciwgcHJldk9wdGlvbnMpIHtcbiAgICAvLyBPcHRpb25zIGhhcyBiZWVuIGFscmVhZHkgY3JlYXRlZCwgbm93IHdlIG9ubHkgaW5jcmVhc2UgaW5kZXguXG4gICAgaWYgKHByZXZPcHRpb25zKSByZXR1cm4gX2V4dGVuZHMoe30sIHByZXZPcHRpb25zLCB7XG4gICAgICBpbmRleDogcHJldk9wdGlvbnMuaW5kZXggKyAxXG4gICAgfSk7XG4gICAgdmFyIG5lc3RpbmdMZXZlbCA9IHJ1bGUub3B0aW9ucy5uZXN0aW5nTGV2ZWw7XG4gICAgbmVzdGluZ0xldmVsID0gbmVzdGluZ0xldmVsID09PSB1bmRlZmluZWQgPyAxIDogbmVzdGluZ0xldmVsICsgMTtcblxuICAgIHZhciBvcHRpb25zID0gX2V4dGVuZHMoe30sIHJ1bGUub3B0aW9ucywge1xuICAgICAgbmVzdGluZ0xldmVsOiBuZXN0aW5nTGV2ZWwsXG4gICAgICBpbmRleDogY29udGFpbmVyLmluZGV4T2YocnVsZSkgKyAxIC8vIFdlIGRvbid0IG5lZWQgdGhlIHBhcmVudCBuYW1lIHRvIGJlIHNldCBvcHRpb25zIGZvciBjaGxpZC5cblxuICAgIH0pO1xuXG4gICAgZGVsZXRlIG9wdGlvbnMubmFtZTtcbiAgICByZXR1cm4gb3B0aW9ucztcbiAgfVxuXG4gIGZ1bmN0aW9uIG9uUHJvY2Vzc1N0eWxlKHN0eWxlLCBydWxlLCBzaGVldCkge1xuICAgIGlmIChydWxlLnR5cGUgIT09ICdzdHlsZScpIHJldHVybiBzdHlsZTtcbiAgICB2YXIgc3R5bGVSdWxlID0gcnVsZTtcbiAgICB2YXIgY29udGFpbmVyID0gc3R5bGVSdWxlLm9wdGlvbnMucGFyZW50O1xuICAgIHZhciBvcHRpb25zO1xuICAgIHZhciByZXBsYWNlUmVmO1xuXG4gICAgZm9yICh2YXIgcHJvcCBpbiBzdHlsZSkge1xuICAgICAgdmFyIGlzTmVzdGVkID0gcHJvcC5pbmRleE9mKCcmJykgIT09IC0xO1xuICAgICAgdmFyIGlzTmVzdGVkQ29uZGl0aW9uYWwgPSBwcm9wWzBdID09PSAnQCc7XG4gICAgICBpZiAoIWlzTmVzdGVkICYmICFpc05lc3RlZENvbmRpdGlvbmFsKSBjb250aW51ZTtcbiAgICAgIG9wdGlvbnMgPSBnZXRPcHRpb25zKHN0eWxlUnVsZSwgY29udGFpbmVyLCBvcHRpb25zKTtcblxuICAgICAgaWYgKGlzTmVzdGVkKSB7XG4gICAgICAgIHZhciBzZWxlY3RvciA9IHJlcGxhY2VQYXJlbnRSZWZzKHByb3AsIHN0eWxlUnVsZS5zZWxlY3Rvcik7IC8vIExhemlseSBjcmVhdGUgdGhlIHJlZiByZXBsYWNlciBmdW5jdGlvbiBqdXN0IG9uY2UgZm9yXG4gICAgICAgIC8vIGFsbCBuZXN0ZWQgcnVsZXMgd2l0aGluIHRoZSBzaGVldC5cblxuICAgICAgICBpZiAoIXJlcGxhY2VSZWYpIHJlcGxhY2VSZWYgPSBnZXRSZXBsYWNlUmVmKGNvbnRhaW5lciwgc2hlZXQpOyAvLyBSZXBsYWNlIGFsbCAkcmVmcy5cblxuICAgICAgICBzZWxlY3RvciA9IHNlbGVjdG9yLnJlcGxhY2UocmVmUmVnRXhwLCByZXBsYWNlUmVmKTtcbiAgICAgICAgY29udGFpbmVyLmFkZFJ1bGUoc2VsZWN0b3IsIHN0eWxlW3Byb3BdLCBfZXh0ZW5kcyh7fSwgb3B0aW9ucywge1xuICAgICAgICAgIHNlbGVjdG9yOiBzZWxlY3RvclxuICAgICAgICB9KSk7XG4gICAgICB9IGVsc2UgaWYgKGlzTmVzdGVkQ29uZGl0aW9uYWwpIHtcbiAgICAgICAgLy8gUGxhY2UgY29uZGl0aW9uYWwgcmlnaHQgYWZ0ZXIgdGhlIHBhcmVudCBydWxlIHRvIGVuc3VyZSByaWdodCBvcmRlcmluZy5cbiAgICAgICAgY29udGFpbmVyLmFkZFJ1bGUocHJvcCwge30sIG9wdGlvbnMpLmFkZFJ1bGUoc3R5bGVSdWxlLmtleSwgc3R5bGVbcHJvcF0sIHtcbiAgICAgICAgICBzZWxlY3Rvcjogc3R5bGVSdWxlLnNlbGVjdG9yXG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICBkZWxldGUgc3R5bGVbcHJvcF07XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0eWxlO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBvblByb2Nlc3NTdHlsZTogb25Qcm9jZXNzU3R5bGVcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQganNzTmVzdGVkO1xuIiwiLyoqXG4gKiBTb3J0IHByb3BzIGJ5IGxlbmd0aC5cbiAqL1xuZnVuY3Rpb24ganNzUHJvcHNTb3J0KCkge1xuICB2YXIgc29ydCA9IGZ1bmN0aW9uIHNvcnQocHJvcDAsIHByb3AxKSB7XG4gICAgaWYgKHByb3AwLmxlbmd0aCA9PT0gcHJvcDEubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gcHJvcDAgPiBwcm9wMSA/IDEgOiAtMTtcbiAgICB9XG5cbiAgICByZXR1cm4gcHJvcDAubGVuZ3RoIC0gcHJvcDEubGVuZ3RoO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgb25Qcm9jZXNzU3R5bGU6IGZ1bmN0aW9uIG9uUHJvY2Vzc1N0eWxlKHN0eWxlLCBydWxlKSB7XG4gICAgICBpZiAocnVsZS50eXBlICE9PSAnc3R5bGUnKSByZXR1cm4gc3R5bGU7XG4gICAgICB2YXIgbmV3U3R5bGUgPSB7fTtcbiAgICAgIHZhciBwcm9wcyA9IE9iamVjdC5rZXlzKHN0eWxlKS5zb3J0KHNvcnQpO1xuXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIG5ld1N0eWxlW3Byb3BzW2ldXSA9IHN0eWxlW3Byb3BzW2ldXTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG5ld1N0eWxlO1xuICAgIH1cbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQganNzUHJvcHNTb3J0O1xuIiwiaW1wb3J0IHdhcm5pbmcgZnJvbSAndGlueS13YXJuaW5nJztcbmltcG9ydCB7IGNyZWF0ZVJ1bGUgfSBmcm9tICdqc3MnO1xuXG52YXIgbm93ID0gRGF0ZS5ub3coKTtcbnZhciBmblZhbHVlc05zID0gXCJmblZhbHVlc1wiICsgbm93O1xudmFyIGZuUnVsZU5zID0gXCJmblN0eWxlXCIgKyArK25vdztcblxudmFyIGZ1bmN0aW9uUGx1Z2luID0gZnVuY3Rpb24gZnVuY3Rpb25QbHVnaW4oKSB7XG4gIHJldHVybiB7XG4gICAgb25DcmVhdGVSdWxlOiBmdW5jdGlvbiBvbkNyZWF0ZVJ1bGUobmFtZSwgZGVjbCwgb3B0aW9ucykge1xuICAgICAgaWYgKHR5cGVvZiBkZWNsICE9PSAnZnVuY3Rpb24nKSByZXR1cm4gbnVsbDtcbiAgICAgIHZhciBydWxlID0gY3JlYXRlUnVsZShuYW1lLCB7fSwgb3B0aW9ucyk7XG4gICAgICBydWxlW2ZuUnVsZU5zXSA9IGRlY2w7XG4gICAgICByZXR1cm4gcnVsZTtcbiAgICB9LFxuICAgIG9uUHJvY2Vzc1N0eWxlOiBmdW5jdGlvbiBvblByb2Nlc3NTdHlsZShzdHlsZSwgcnVsZSkge1xuICAgICAgLy8gV2UgbmVlZCB0byBleHRyYWN0IGZ1bmN0aW9uIHZhbHVlcyBmcm9tIHRoZSBkZWNsYXJhdGlvbiwgc28gdGhhdCB3ZSBjYW4ga2VlcCBjb3JlIHVuYXdhcmUgb2YgdGhlbS5cbiAgICAgIC8vIFdlIG5lZWQgdG8gZG8gdGhhdCBvbmx5IG9uY2UuXG4gICAgICAvLyBXZSBkb24ndCBuZWVkIHRvIGV4dHJhY3QgZnVuY3Rpb25zIG9uIGVhY2ggc3R5bGUgdXBkYXRlLCBzaW5jZSB0aGlzIGNhbiBoYXBwZW4gb25seSBvbmNlLlxuICAgICAgLy8gV2UgZG9uJ3Qgc3VwcG9ydCBmdW5jdGlvbiB2YWx1ZXMgaW5zaWRlIG9mIGZ1bmN0aW9uIHJ1bGVzLlxuICAgICAgaWYgKGZuVmFsdWVzTnMgaW4gcnVsZSB8fCBmblJ1bGVOcyBpbiBydWxlKSByZXR1cm4gc3R5bGU7XG4gICAgICB2YXIgZm5WYWx1ZXMgPSB7fTtcblxuICAgICAgZm9yICh2YXIgcHJvcCBpbiBzdHlsZSkge1xuICAgICAgICB2YXIgdmFsdWUgPSBzdHlsZVtwcm9wXTtcbiAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gJ2Z1bmN0aW9uJykgY29udGludWU7XG4gICAgICAgIGRlbGV0ZSBzdHlsZVtwcm9wXTtcbiAgICAgICAgZm5WYWx1ZXNbcHJvcF0gPSB2YWx1ZTtcbiAgICAgIH1cblxuICAgICAgcnVsZVtmblZhbHVlc05zXSA9IGZuVmFsdWVzO1xuICAgICAgcmV0dXJuIHN0eWxlO1xuICAgIH0sXG4gICAgb25VcGRhdGU6IGZ1bmN0aW9uIG9uVXBkYXRlKGRhdGEsIHJ1bGUsIHNoZWV0LCBvcHRpb25zKSB7XG4gICAgICB2YXIgc3R5bGVSdWxlID0gcnVsZTtcbiAgICAgIHZhciBmblJ1bGUgPSBzdHlsZVJ1bGVbZm5SdWxlTnNdOyAvLyBJZiB3ZSBoYXZlIGEgc3R5bGUgZnVuY3Rpb24sIHRoZSBlbnRpcmUgcnVsZSBpcyBkeW5hbWljIGFuZCBzdHlsZSBvYmplY3RcbiAgICAgIC8vIHdpbGwgYmUgcmV0dXJuZWQgZnJvbSB0aGF0IGZ1bmN0aW9uLlxuXG4gICAgICBpZiAoZm5SdWxlKSB7XG4gICAgICAgIC8vIEVtcHR5IG9iamVjdCB3aWxsIHJlbW92ZSBhbGwgY3VycmVudGx5IGRlZmluZWQgcHJvcHNcbiAgICAgICAgLy8gaW4gY2FzZSBmdW5jdGlvbiBydWxlIHJldHVybnMgYSBmYWxzeSB2YWx1ZS5cbiAgICAgICAgc3R5bGVSdWxlLnN0eWxlID0gZm5SdWxlKGRhdGEpIHx8IHt9O1xuXG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICAgICAgICAgIGZvciAodmFyIHByb3AgaW4gc3R5bGVSdWxlLnN0eWxlKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIHN0eWxlUnVsZS5zdHlsZVtwcm9wXSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyB3YXJuaW5nKGZhbHNlLCAnW0pTU10gRnVuY3Rpb24gdmFsdWVzIGluc2lkZSBmdW5jdGlvbiBydWxlcyBhcmUgbm90IHN1cHBvcnRlZC4nKSA6IHZvaWQgMDtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHZhciBmblZhbHVlcyA9IHN0eWxlUnVsZVtmblZhbHVlc05zXTsgLy8gSWYgd2UgaGF2ZSBhIGZuIHZhbHVlcyBtYXAsIGl0IGlzIGEgcnVsZSB3aXRoIGZ1bmN0aW9uIHZhbHVlcy5cblxuICAgICAgaWYgKGZuVmFsdWVzKSB7XG4gICAgICAgIGZvciAodmFyIF9wcm9wIGluIGZuVmFsdWVzKSB7XG4gICAgICAgICAgc3R5bGVSdWxlLnByb3AoX3Byb3AsIGZuVmFsdWVzW19wcm9wXShkYXRhKSwgb3B0aW9ucyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvblBsdWdpbjtcbiIsImltcG9ydCB7IHN1cHBvcnRlZEtleWZyYW1lcywgc3VwcG9ydGVkVmFsdWUsIHN1cHBvcnRlZFByb3BlcnR5IH0gZnJvbSAnY3NzLXZlbmRvcic7XG5pbXBvcnQgeyB0b0Nzc1ZhbHVlIH0gZnJvbSAnanNzJztcblxuLyoqXG4gKiBBZGQgdmVuZG9yIHByZWZpeCB0byBhIHByb3BlcnR5IG5hbWUgd2hlbiBuZWVkZWQuXG4gKi9cblxuZnVuY3Rpb24ganNzVmVuZG9yUHJlZml4ZXIoKSB7XG4gIGZ1bmN0aW9uIG9uUHJvY2Vzc1J1bGUocnVsZSkge1xuICAgIGlmIChydWxlLnR5cGUgPT09ICdrZXlmcmFtZXMnKSB7XG4gICAgICB2YXIgYXRSdWxlID0gcnVsZTtcbiAgICAgIGF0UnVsZS5hdCA9IHN1cHBvcnRlZEtleWZyYW1lcyhhdFJ1bGUuYXQpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHByZWZpeFN0eWxlKHN0eWxlKSB7XG4gICAgZm9yICh2YXIgcHJvcCBpbiBzdHlsZSkge1xuICAgICAgdmFyIHZhbHVlID0gc3R5bGVbcHJvcF07XG5cbiAgICAgIGlmIChwcm9wID09PSAnZmFsbGJhY2tzJyAmJiBBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgICBzdHlsZVtwcm9wXSA9IHZhbHVlLm1hcChwcmVmaXhTdHlsZSk7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICB2YXIgY2hhbmdlUHJvcCA9IGZhbHNlO1xuICAgICAgdmFyIHN1cHBvcnRlZFByb3AgPSBzdXBwb3J0ZWRQcm9wZXJ0eShwcm9wKTtcbiAgICAgIGlmIChzdXBwb3J0ZWRQcm9wICYmIHN1cHBvcnRlZFByb3AgIT09IHByb3ApIGNoYW5nZVByb3AgPSB0cnVlO1xuICAgICAgdmFyIGNoYW5nZVZhbHVlID0gZmFsc2U7XG4gICAgICB2YXIgc3VwcG9ydGVkVmFsdWUkMSA9IHN1cHBvcnRlZFZhbHVlKHN1cHBvcnRlZFByb3AsIHRvQ3NzVmFsdWUodmFsdWUpKTtcbiAgICAgIGlmIChzdXBwb3J0ZWRWYWx1ZSQxICYmIHN1cHBvcnRlZFZhbHVlJDEgIT09IHZhbHVlKSBjaGFuZ2VWYWx1ZSA9IHRydWU7XG5cbiAgICAgIGlmIChjaGFuZ2VQcm9wIHx8IGNoYW5nZVZhbHVlKSB7XG4gICAgICAgIGlmIChjaGFuZ2VQcm9wKSBkZWxldGUgc3R5bGVbcHJvcF07XG4gICAgICAgIHN0eWxlW3N1cHBvcnRlZFByb3AgfHwgcHJvcF0gPSBzdXBwb3J0ZWRWYWx1ZSQxIHx8IHZhbHVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBzdHlsZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIG9uUHJvY2Vzc1N0eWxlKHN0eWxlLCBydWxlKSB7XG4gICAgaWYgKHJ1bGUudHlwZSAhPT0gJ3N0eWxlJykgcmV0dXJuIHN0eWxlO1xuICAgIHJldHVybiBwcmVmaXhTdHlsZShzdHlsZSk7XG4gIH1cblxuICBmdW5jdGlvbiBvbkNoYW5nZVZhbHVlKHZhbHVlLCBwcm9wKSB7XG4gICAgcmV0dXJuIHN1cHBvcnRlZFZhbHVlKHByb3AsIHRvQ3NzVmFsdWUodmFsdWUpKSB8fCB2YWx1ZTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgb25Qcm9jZXNzUnVsZTogb25Qcm9jZXNzUnVsZSxcbiAgICBvblByb2Nlc3NTdHlsZTogb25Qcm9jZXNzU3R5bGUsXG4gICAgb25DaGFuZ2VWYWx1ZTogb25DaGFuZ2VWYWx1ZVxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBqc3NWZW5kb3JQcmVmaXhlcjtcbiIsImltcG9ydCBfZXh0ZW5kcyBmcm9tICdAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9leHRlbmRzJztcbmltcG9ydCBpc0luQnJvd3NlciBmcm9tICdpcy1pbi1icm93c2VyJztcbmltcG9ydCB3YXJuaW5nIGZyb20gJ3Rpbnktd2FybmluZyc7XG5pbXBvcnQgX2NyZWF0ZUNsYXNzIGZyb20gJ0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2NyZWF0ZUNsYXNzJztcbmltcG9ydCBfaW5oZXJpdHNMb29zZSBmcm9tICdAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9pbmhlcml0c0xvb3NlJztcbmltcG9ydCBfYXNzZXJ0VGhpc0luaXRpYWxpemVkIGZyb20gJ0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2Fzc2VydFRoaXNJbml0aWFsaXplZCc7XG5pbXBvcnQgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UgZnJvbSAnQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZSc7XG5cbnZhciBwbGFpbk9iamVjdENvbnN0cnVyY3RvciA9IHt9LmNvbnN0cnVjdG9yO1xuZnVuY3Rpb24gY2xvbmVTdHlsZShzdHlsZSkge1xuICBpZiAoc3R5bGUgPT0gbnVsbCB8fCB0eXBlb2Ygc3R5bGUgIT09ICdvYmplY3QnKSByZXR1cm4gc3R5bGU7XG4gIGlmIChBcnJheS5pc0FycmF5KHN0eWxlKSkgcmV0dXJuIHN0eWxlLm1hcChjbG9uZVN0eWxlKTtcbiAgaWYgKHN0eWxlLmNvbnN0cnVjdG9yICE9PSBwbGFpbk9iamVjdENvbnN0cnVyY3RvcikgcmV0dXJuIHN0eWxlO1xuICB2YXIgbmV3U3R5bGUgPSB7fTtcblxuICBmb3IgKHZhciBuYW1lIGluIHN0eWxlKSB7XG4gICAgbmV3U3R5bGVbbmFtZV0gPSBjbG9uZVN0eWxlKHN0eWxlW25hbWVdKTtcbiAgfVxuXG4gIHJldHVybiBuZXdTdHlsZTtcbn1cblxuLyoqXG4gKiBDcmVhdGUgYSBydWxlIGluc3RhbmNlLlxuICovXG5cbmZ1bmN0aW9uIGNyZWF0ZVJ1bGUobmFtZSwgZGVjbCwgb3B0aW9ucykge1xuICBpZiAobmFtZSA9PT0gdm9pZCAwKSB7XG4gICAgbmFtZSA9ICd1bm5hbWVkJztcbiAgfVxuXG4gIHZhciBqc3MgPSBvcHRpb25zLmpzcztcbiAgdmFyIGRlY2xDb3B5ID0gY2xvbmVTdHlsZShkZWNsKTtcbiAgdmFyIHJ1bGUgPSBqc3MucGx1Z2lucy5vbkNyZWF0ZVJ1bGUobmFtZSwgZGVjbENvcHksIG9wdGlvbnMpO1xuICBpZiAocnVsZSkgcmV0dXJuIHJ1bGU7IC8vIEl0IGlzIGFuIGF0LXJ1bGUgYW5kIGl0IGhhcyBubyBpbnN0YW5jZS5cblxuICBpZiAobmFtZVswXSA9PT0gJ0AnKSB7XG4gICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gd2FybmluZyhmYWxzZSwgXCJbSlNTXSBVbmtub3duIHJ1bGUgXCIgKyBuYW1lKSA6IHZvaWQgMDtcbiAgfVxuXG4gIHJldHVybiBudWxsO1xufVxuXG52YXIgam9pbiA9IGZ1bmN0aW9uIGpvaW4odmFsdWUsIGJ5KSB7XG4gIHZhciByZXN1bHQgPSAnJztcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHZhbHVlLmxlbmd0aDsgaSsrKSB7XG4gICAgLy8gUmVtb3ZlICFpbXBvcnRhbnQgZnJvbSB0aGUgdmFsdWUsIGl0IHdpbGwgYmUgcmVhZGRlZCBsYXRlci5cbiAgICBpZiAodmFsdWVbaV0gPT09ICchaW1wb3J0YW50JykgYnJlYWs7XG4gICAgaWYgKHJlc3VsdCkgcmVzdWx0ICs9IGJ5O1xuICAgIHJlc3VsdCArPSB2YWx1ZVtpXTtcbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59O1xuLyoqXG4gKiBDb252ZXJ0cyBKU1MgYXJyYXkgdmFsdWUgdG8gYSBDU1Mgc3RyaW5nLlxuICpcbiAqIGBtYXJnaW46IFtbJzVweCcsICcxMHB4J11dYCA+IGBtYXJnaW46IDVweCAxMHB4O2BcbiAqIGBib3JkZXI6IFsnMXB4JywgJzJweCddYCA+IGBib3JkZXI6IDFweCwgMnB4O2BcbiAqIGBtYXJnaW46IFtbJzVweCcsICcxMHB4J10sICchaW1wb3J0YW50J11gID4gYG1hcmdpbjogNXB4IDEwcHggIWltcG9ydGFudDtgXG4gKiBgY29sb3I6IFsncmVkJywgIWltcG9ydGFudF1gID4gYGNvbG9yOiByZWQgIWltcG9ydGFudDtgXG4gKi9cblxuXG52YXIgdG9Dc3NWYWx1ZSA9IGZ1bmN0aW9uIHRvQ3NzVmFsdWUodmFsdWUsIGlnbm9yZUltcG9ydGFudCkge1xuICBpZiAoaWdub3JlSW1wb3J0YW50ID09PSB2b2lkIDApIHtcbiAgICBpZ25vcmVJbXBvcnRhbnQgPSBmYWxzZTtcbiAgfVxuXG4gIGlmICghQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHJldHVybiB2YWx1ZTtcbiAgdmFyIGNzc1ZhbHVlID0gJyc7IC8vIFN1cHBvcnQgc3BhY2Ugc2VwYXJhdGVkIHZhbHVlcyB2aWEgYFtbJzVweCcsICcxMHB4J11dYC5cblxuICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZVswXSkpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHZhbHVlLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAodmFsdWVbaV0gPT09ICchaW1wb3J0YW50JykgYnJlYWs7XG4gICAgICBpZiAoY3NzVmFsdWUpIGNzc1ZhbHVlICs9ICcsICc7XG4gICAgICBjc3NWYWx1ZSArPSBqb2luKHZhbHVlW2ldLCAnICcpO1xuICAgIH1cbiAgfSBlbHNlIGNzc1ZhbHVlID0gam9pbih2YWx1ZSwgJywgJyk7IC8vIEFkZCAhaW1wb3J0YW50LCBiZWNhdXNlIGl0IHdhcyBpZ25vcmVkLlxuXG5cbiAgaWYgKCFpZ25vcmVJbXBvcnRhbnQgJiYgdmFsdWVbdmFsdWUubGVuZ3RoIC0gMV0gPT09ICchaW1wb3J0YW50Jykge1xuICAgIGNzc1ZhbHVlICs9ICcgIWltcG9ydGFudCc7XG4gIH1cblxuICByZXR1cm4gY3NzVmFsdWU7XG59O1xuXG5mdW5jdGlvbiBnZXRXaGl0ZXNwYWNlU3ltYm9scyhvcHRpb25zKSB7XG4gIGlmIChvcHRpb25zICYmIG9wdGlvbnMuZm9ybWF0ID09PSBmYWxzZSkge1xuICAgIHJldHVybiB7XG4gICAgICBsaW5lYnJlYWs6ICcnLFxuICAgICAgc3BhY2U6ICcnXG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgbGluZWJyZWFrOiAnXFxuJyxcbiAgICBzcGFjZTogJyAnXG4gIH07XG59XG5cbi8qKlxuICogSW5kZW50IGEgc3RyaW5nLlxuICogaHR0cDovL2pzcGVyZi5jb20vYXJyYXktam9pbi12cy1mb3JcbiAqL1xuXG5mdW5jdGlvbiBpbmRlbnRTdHIoc3RyLCBpbmRlbnQpIHtcbiAgdmFyIHJlc3VsdCA9ICcnO1xuXG4gIGZvciAodmFyIGluZGV4ID0gMDsgaW5kZXggPCBpbmRlbnQ7IGluZGV4KyspIHtcbiAgICByZXN1bHQgKz0gJyAgJztcbiAgfVxuXG4gIHJldHVybiByZXN1bHQgKyBzdHI7XG59XG4vKipcbiAqIENvbnZlcnRzIGEgUnVsZSB0byBDU1Mgc3RyaW5nLlxuICovXG5cblxuZnVuY3Rpb24gdG9Dc3Moc2VsZWN0b3IsIHN0eWxlLCBvcHRpb25zKSB7XG4gIGlmIChvcHRpb25zID09PSB2b2lkIDApIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICB2YXIgcmVzdWx0ID0gJyc7XG4gIGlmICghc3R5bGUpIHJldHVybiByZXN1bHQ7XG4gIHZhciBfb3B0aW9ucyA9IG9wdGlvbnMsXG4gICAgICBfb3B0aW9ucyRpbmRlbnQgPSBfb3B0aW9ucy5pbmRlbnQsXG4gICAgICBpbmRlbnQgPSBfb3B0aW9ucyRpbmRlbnQgPT09IHZvaWQgMCA/IDAgOiBfb3B0aW9ucyRpbmRlbnQ7XG4gIHZhciBmYWxsYmFja3MgPSBzdHlsZS5mYWxsYmFja3M7XG5cbiAgaWYgKG9wdGlvbnMuZm9ybWF0ID09PSBmYWxzZSkge1xuICAgIGluZGVudCA9IC1JbmZpbml0eTtcbiAgfVxuXG4gIHZhciBfZ2V0V2hpdGVzcGFjZVN5bWJvbHMgPSBnZXRXaGl0ZXNwYWNlU3ltYm9scyhvcHRpb25zKSxcbiAgICAgIGxpbmVicmVhayA9IF9nZXRXaGl0ZXNwYWNlU3ltYm9scy5saW5lYnJlYWssXG4gICAgICBzcGFjZSA9IF9nZXRXaGl0ZXNwYWNlU3ltYm9scy5zcGFjZTtcblxuICBpZiAoc2VsZWN0b3IpIGluZGVudCsrOyAvLyBBcHBseSBmYWxsYmFja3MgZmlyc3QuXG5cbiAgaWYgKGZhbGxiYWNrcykge1xuICAgIC8vIEFycmF5IHN5bnRheCB7ZmFsbGJhY2tzOiBbe3Byb3A6IHZhbHVlfV19XG4gICAgaWYgKEFycmF5LmlzQXJyYXkoZmFsbGJhY2tzKSkge1xuICAgICAgZm9yICh2YXIgaW5kZXggPSAwOyBpbmRleCA8IGZhbGxiYWNrcy5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgdmFyIGZhbGxiYWNrID0gZmFsbGJhY2tzW2luZGV4XTtcblxuICAgICAgICBmb3IgKHZhciBwcm9wIGluIGZhbGxiYWNrKSB7XG4gICAgICAgICAgdmFyIHZhbHVlID0gZmFsbGJhY2tbcHJvcF07XG5cbiAgICAgICAgICBpZiAodmFsdWUgIT0gbnVsbCkge1xuICAgICAgICAgICAgaWYgKHJlc3VsdCkgcmVzdWx0ICs9IGxpbmVicmVhaztcbiAgICAgICAgICAgIHJlc3VsdCArPSBpbmRlbnRTdHIocHJvcCArIFwiOlwiICsgc3BhY2UgKyB0b0Nzc1ZhbHVlKHZhbHVlKSArIFwiO1wiLCBpbmRlbnQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBPYmplY3Qgc3ludGF4IHtmYWxsYmFja3M6IHtwcm9wOiB2YWx1ZX19XG4gICAgICBmb3IgKHZhciBfcHJvcCBpbiBmYWxsYmFja3MpIHtcbiAgICAgICAgdmFyIF92YWx1ZSA9IGZhbGxiYWNrc1tfcHJvcF07XG5cbiAgICAgICAgaWYgKF92YWx1ZSAhPSBudWxsKSB7XG4gICAgICAgICAgaWYgKHJlc3VsdCkgcmVzdWx0ICs9IGxpbmVicmVhaztcbiAgICAgICAgICByZXN1bHQgKz0gaW5kZW50U3RyKF9wcm9wICsgXCI6XCIgKyBzcGFjZSArIHRvQ3NzVmFsdWUoX3ZhbHVlKSArIFwiO1wiLCBpbmRlbnQpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZm9yICh2YXIgX3Byb3AyIGluIHN0eWxlKSB7XG4gICAgdmFyIF92YWx1ZTIgPSBzdHlsZVtfcHJvcDJdO1xuXG4gICAgaWYgKF92YWx1ZTIgIT0gbnVsbCAmJiBfcHJvcDIgIT09ICdmYWxsYmFja3MnKSB7XG4gICAgICBpZiAocmVzdWx0KSByZXN1bHQgKz0gbGluZWJyZWFrO1xuICAgICAgcmVzdWx0ICs9IGluZGVudFN0cihfcHJvcDIgKyBcIjpcIiArIHNwYWNlICsgdG9Dc3NWYWx1ZShfdmFsdWUyKSArIFwiO1wiLCBpbmRlbnQpO1xuICAgIH1cbiAgfSAvLyBBbGxvdyBlbXB0eSBzdHlsZSBpbiB0aGlzIGNhc2UsIGJlY2F1c2UgcHJvcGVydGllcyB3aWxsIGJlIGFkZGVkIGR5bmFtaWNhbGx5LlxuXG5cbiAgaWYgKCFyZXN1bHQgJiYgIW9wdGlvbnMuYWxsb3dFbXB0eSkgcmV0dXJuIHJlc3VsdDsgLy8gV2hlbiBydWxlIGlzIGJlaW5nIHN0cmluZ2lmaWVkIGJlZm9yZSBzZWxlY3RvciB3YXMgZGVmaW5lZC5cblxuICBpZiAoIXNlbGVjdG9yKSByZXR1cm4gcmVzdWx0O1xuICBpbmRlbnQtLTtcbiAgaWYgKHJlc3VsdCkgcmVzdWx0ID0gXCJcIiArIGxpbmVicmVhayArIHJlc3VsdCArIGxpbmVicmVhaztcbiAgcmV0dXJuIGluZGVudFN0cihcIlwiICsgc2VsZWN0b3IgKyBzcGFjZSArIFwie1wiICsgcmVzdWx0LCBpbmRlbnQpICsgaW5kZW50U3RyKCd9JywgaW5kZW50KTtcbn1cblxudmFyIGVzY2FwZVJlZ2V4ID0gLyhbW1xcXS4jKiQ+PCt+PXxeOigpLFwiJ2BcXHNdKS9nO1xudmFyIG5hdGl2ZUVzY2FwZSA9IHR5cGVvZiBDU1MgIT09ICd1bmRlZmluZWQnICYmIENTUy5lc2NhcGU7XG52YXIgZXNjYXBlID0gKGZ1bmN0aW9uIChzdHIpIHtcbiAgcmV0dXJuIG5hdGl2ZUVzY2FwZSA/IG5hdGl2ZUVzY2FwZShzdHIpIDogc3RyLnJlcGxhY2UoZXNjYXBlUmVnZXgsICdcXFxcJDEnKTtcbn0pO1xuXG52YXIgQmFzZVN0eWxlUnVsZSA9XG4vKiNfX1BVUkVfXyovXG5mdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIEJhc2VTdHlsZVJ1bGUoa2V5LCBzdHlsZSwgb3B0aW9ucykge1xuICAgIHRoaXMudHlwZSA9ICdzdHlsZSc7XG4gICAgdGhpcy5pc1Byb2Nlc3NlZCA9IGZhbHNlO1xuICAgIHZhciBzaGVldCA9IG9wdGlvbnMuc2hlZXQsXG4gICAgICAgIFJlbmRlcmVyID0gb3B0aW9ucy5SZW5kZXJlcjtcbiAgICB0aGlzLmtleSA9IGtleTtcbiAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuICAgIHRoaXMuc3R5bGUgPSBzdHlsZTtcbiAgICBpZiAoc2hlZXQpIHRoaXMucmVuZGVyZXIgPSBzaGVldC5yZW5kZXJlcjtlbHNlIGlmIChSZW5kZXJlcikgdGhpcy5yZW5kZXJlciA9IG5ldyBSZW5kZXJlcigpO1xuICB9XG4gIC8qKlxuICAgKiBHZXQgb3Igc2V0IGEgc3R5bGUgcHJvcGVydHkuXG4gICAqL1xuXG5cbiAgdmFyIF9wcm90byA9IEJhc2VTdHlsZVJ1bGUucHJvdG90eXBlO1xuXG4gIF9wcm90by5wcm9wID0gZnVuY3Rpb24gcHJvcChuYW1lLCB2YWx1ZSwgb3B0aW9ucykge1xuICAgIC8vIEl0J3MgYSBnZXR0ZXIuXG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHJldHVybiB0aGlzLnN0eWxlW25hbWVdOyAvLyBEb24ndCBkbyBhbnl0aGluZyBpZiB0aGUgdmFsdWUgaGFzIG5vdCBjaGFuZ2VkLlxuXG4gICAgdmFyIGZvcmNlID0gb3B0aW9ucyA/IG9wdGlvbnMuZm9yY2UgOiBmYWxzZTtcbiAgICBpZiAoIWZvcmNlICYmIHRoaXMuc3R5bGVbbmFtZV0gPT09IHZhbHVlKSByZXR1cm4gdGhpcztcbiAgICB2YXIgbmV3VmFsdWUgPSB2YWx1ZTtcblxuICAgIGlmICghb3B0aW9ucyB8fCBvcHRpb25zLnByb2Nlc3MgIT09IGZhbHNlKSB7XG4gICAgICBuZXdWYWx1ZSA9IHRoaXMub3B0aW9ucy5qc3MucGx1Z2lucy5vbkNoYW5nZVZhbHVlKHZhbHVlLCBuYW1lLCB0aGlzKTtcbiAgICB9XG5cbiAgICB2YXIgaXNFbXB0eSA9IG5ld1ZhbHVlID09IG51bGwgfHwgbmV3VmFsdWUgPT09IGZhbHNlO1xuICAgIHZhciBpc0RlZmluZWQgPSBuYW1lIGluIHRoaXMuc3R5bGU7IC8vIFZhbHVlIGlzIGVtcHR5IGFuZCB3YXNuJ3QgZGVmaW5lZCBiZWZvcmUuXG5cbiAgICBpZiAoaXNFbXB0eSAmJiAhaXNEZWZpbmVkICYmICFmb3JjZSkgcmV0dXJuIHRoaXM7IC8vIFdlIGFyZSBnb2luZyB0byByZW1vdmUgdGhpcyB2YWx1ZS5cblxuICAgIHZhciByZW1vdmUgPSBpc0VtcHR5ICYmIGlzRGVmaW5lZDtcbiAgICBpZiAocmVtb3ZlKSBkZWxldGUgdGhpcy5zdHlsZVtuYW1lXTtlbHNlIHRoaXMuc3R5bGVbbmFtZV0gPSBuZXdWYWx1ZTsgLy8gUmVuZGVyYWJsZSBpcyBkZWZpbmVkIGlmIFN0eWxlU2hlZXQgb3B0aW9uIGBsaW5rYCBpcyB0cnVlLlxuXG4gICAgaWYgKHRoaXMucmVuZGVyYWJsZSAmJiB0aGlzLnJlbmRlcmVyKSB7XG4gICAgICBpZiAocmVtb3ZlKSB0aGlzLnJlbmRlcmVyLnJlbW92ZVByb3BlcnR5KHRoaXMucmVuZGVyYWJsZSwgbmFtZSk7ZWxzZSB0aGlzLnJlbmRlcmVyLnNldFByb3BlcnR5KHRoaXMucmVuZGVyYWJsZSwgbmFtZSwgbmV3VmFsdWUpO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgdmFyIHNoZWV0ID0gdGhpcy5vcHRpb25zLnNoZWV0O1xuXG4gICAgaWYgKHNoZWV0ICYmIHNoZWV0LmF0dGFjaGVkKSB7XG4gICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyB3YXJuaW5nKGZhbHNlLCAnW0pTU10gUnVsZSBpcyBub3QgbGlua2VkLiBNaXNzaW5nIHNoZWV0IG9wdGlvbiBcImxpbms6IHRydWVcIi4nKSA6IHZvaWQgMDtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICByZXR1cm4gQmFzZVN0eWxlUnVsZTtcbn0oKTtcbnZhciBTdHlsZVJ1bGUgPVxuLyojX19QVVJFX18qL1xuZnVuY3Rpb24gKF9CYXNlU3R5bGVSdWxlKSB7XG4gIF9pbmhlcml0c0xvb3NlKFN0eWxlUnVsZSwgX0Jhc2VTdHlsZVJ1bGUpO1xuXG4gIGZ1bmN0aW9uIFN0eWxlUnVsZShrZXksIHN0eWxlLCBvcHRpb25zKSB7XG4gICAgdmFyIF90aGlzO1xuXG4gICAgX3RoaXMgPSBfQmFzZVN0eWxlUnVsZS5jYWxsKHRoaXMsIGtleSwgc3R5bGUsIG9wdGlvbnMpIHx8IHRoaXM7XG4gICAgdmFyIHNlbGVjdG9yID0gb3B0aW9ucy5zZWxlY3RvcixcbiAgICAgICAgc2NvcGVkID0gb3B0aW9ucy5zY29wZWQsXG4gICAgICAgIHNoZWV0ID0gb3B0aW9ucy5zaGVldCxcbiAgICAgICAgZ2VuZXJhdGVJZCA9IG9wdGlvbnMuZ2VuZXJhdGVJZDtcblxuICAgIGlmIChzZWxlY3Rvcikge1xuICAgICAgX3RoaXMuc2VsZWN0b3JUZXh0ID0gc2VsZWN0b3I7XG4gICAgfSBlbHNlIGlmIChzY29wZWQgIT09IGZhbHNlKSB7XG4gICAgICBfdGhpcy5pZCA9IGdlbmVyYXRlSWQoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSksIHNoZWV0KTtcbiAgICAgIF90aGlzLnNlbGVjdG9yVGV4dCA9IFwiLlwiICsgZXNjYXBlKF90aGlzLmlkKTtcbiAgICB9XG5cbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cbiAgLyoqXG4gICAqIFNldCBzZWxlY3RvciBzdHJpbmcuXG4gICAqIEF0dGVudGlvbjogdXNlIHRoaXMgd2l0aCBjYXV0aW9uLiBNb3N0IGJyb3dzZXJzIGRpZG4ndCBpbXBsZW1lbnRcbiAgICogc2VsZWN0b3JUZXh0IHNldHRlciwgc28gdGhpcyBtYXkgcmVzdWx0IGluIHJlcmVuZGVyaW5nIG9mIGVudGlyZSBTdHlsZSBTaGVldC5cbiAgICovXG5cblxuICB2YXIgX3Byb3RvMiA9IFN0eWxlUnVsZS5wcm90b3R5cGU7XG5cbiAgLyoqXG4gICAqIEFwcGx5IHJ1bGUgdG8gYW4gZWxlbWVudCBpbmxpbmUuXG4gICAqL1xuICBfcHJvdG8yLmFwcGx5VG8gPSBmdW5jdGlvbiBhcHBseVRvKHJlbmRlcmFibGUpIHtcbiAgICB2YXIgcmVuZGVyZXIgPSB0aGlzLnJlbmRlcmVyO1xuXG4gICAgaWYgKHJlbmRlcmVyKSB7XG4gICAgICB2YXIganNvbiA9IHRoaXMudG9KU09OKCk7XG5cbiAgICAgIGZvciAodmFyIHByb3AgaW4ganNvbikge1xuICAgICAgICByZW5kZXJlci5zZXRQcm9wZXJ0eShyZW5kZXJhYmxlLCBwcm9wLCBqc29uW3Byb3BdKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuICAvKipcbiAgICogUmV0dXJucyBKU09OIHJlcHJlc2VudGF0aW9uIG9mIHRoZSBydWxlLlxuICAgKiBGYWxsYmFja3MgYXJlIG5vdCBzdXBwb3J0ZWQuXG4gICAqIFVzZWZ1bCBmb3IgaW5saW5lIHN0eWxlcy5cbiAgICovXG4gIDtcblxuICBfcHJvdG8yLnRvSlNPTiA9IGZ1bmN0aW9uIHRvSlNPTigpIHtcbiAgICB2YXIganNvbiA9IHt9O1xuXG4gICAgZm9yICh2YXIgcHJvcCBpbiB0aGlzLnN0eWxlKSB7XG4gICAgICB2YXIgdmFsdWUgPSB0aGlzLnN0eWxlW3Byb3BdO1xuICAgICAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gJ29iamVjdCcpIGpzb25bcHJvcF0gPSB2YWx1ZTtlbHNlIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkganNvbltwcm9wXSA9IHRvQ3NzVmFsdWUodmFsdWUpO1xuICAgIH1cblxuICAgIHJldHVybiBqc29uO1xuICB9XG4gIC8qKlxuICAgKiBHZW5lcmF0ZXMgYSBDU1Mgc3RyaW5nLlxuICAgKi9cbiAgO1xuXG4gIF9wcm90bzIudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZyhvcHRpb25zKSB7XG4gICAgdmFyIHNoZWV0ID0gdGhpcy5vcHRpb25zLnNoZWV0O1xuICAgIHZhciBsaW5rID0gc2hlZXQgPyBzaGVldC5vcHRpb25zLmxpbmsgOiBmYWxzZTtcbiAgICB2YXIgb3B0cyA9IGxpbmsgPyBfZXh0ZW5kcyh7fSwgb3B0aW9ucywge1xuICAgICAgYWxsb3dFbXB0eTogdHJ1ZVxuICAgIH0pIDogb3B0aW9ucztcbiAgICByZXR1cm4gdG9Dc3ModGhpcy5zZWxlY3RvclRleHQsIHRoaXMuc3R5bGUsIG9wdHMpO1xuICB9O1xuXG4gIF9jcmVhdGVDbGFzcyhTdHlsZVJ1bGUsIFt7XG4gICAga2V5OiBcInNlbGVjdG9yXCIsXG4gICAgc2V0OiBmdW5jdGlvbiBzZXQoc2VsZWN0b3IpIHtcbiAgICAgIGlmIChzZWxlY3RvciA9PT0gdGhpcy5zZWxlY3RvclRleHQpIHJldHVybjtcbiAgICAgIHRoaXMuc2VsZWN0b3JUZXh0ID0gc2VsZWN0b3I7XG4gICAgICB2YXIgcmVuZGVyZXIgPSB0aGlzLnJlbmRlcmVyLFxuICAgICAgICAgIHJlbmRlcmFibGUgPSB0aGlzLnJlbmRlcmFibGU7XG4gICAgICBpZiAoIXJlbmRlcmFibGUgfHwgIXJlbmRlcmVyKSByZXR1cm47XG4gICAgICB2YXIgaGFzQ2hhbmdlZCA9IHJlbmRlcmVyLnNldFNlbGVjdG9yKHJlbmRlcmFibGUsIHNlbGVjdG9yKTsgLy8gSWYgc2VsZWN0b3Igc2V0dGVyIGlzIG5vdCBpbXBsZW1lbnRlZCwgcmVyZW5kZXIgdGhlIHJ1bGUuXG5cbiAgICAgIGlmICghaGFzQ2hhbmdlZCkge1xuICAgICAgICByZW5kZXJlci5yZXBsYWNlUnVsZShyZW5kZXJhYmxlLCB0aGlzKTtcbiAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICogR2V0IHNlbGVjdG9yIHN0cmluZy5cbiAgICAgKi9cbiAgICAsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5zZWxlY3RvclRleHQ7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIFN0eWxlUnVsZTtcbn0oQmFzZVN0eWxlUnVsZSk7XG52YXIgcGx1Z2luU3R5bGVSdWxlID0ge1xuICBvbkNyZWF0ZVJ1bGU6IGZ1bmN0aW9uIG9uQ3JlYXRlUnVsZShrZXksIHN0eWxlLCBvcHRpb25zKSB7XG4gICAgaWYgKGtleVswXSA9PT0gJ0AnIHx8IG9wdGlvbnMucGFyZW50ICYmIG9wdGlvbnMucGFyZW50LnR5cGUgPT09ICdrZXlmcmFtZXMnKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICByZXR1cm4gbmV3IFN0eWxlUnVsZShrZXksIHN0eWxlLCBvcHRpb25zKTtcbiAgfVxufTtcblxudmFyIGRlZmF1bHRUb1N0cmluZ09wdGlvbnMgPSB7XG4gIGluZGVudDogMSxcbiAgY2hpbGRyZW46IHRydWVcbn07XG52YXIgYXRSZWdFeHAgPSAvQChbXFx3LV0rKS87XG4vKipcbiAqIENvbmRpdGlvbmFsIHJ1bGUgZm9yIEBtZWRpYSwgQHN1cHBvcnRzXG4gKi9cblxudmFyIENvbmRpdGlvbmFsUnVsZSA9XG4vKiNfX1BVUkVfXyovXG5mdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIENvbmRpdGlvbmFsUnVsZShrZXksIHN0eWxlcywgb3B0aW9ucykge1xuICAgIHRoaXMudHlwZSA9ICdjb25kaXRpb25hbCc7XG4gICAgdGhpcy5pc1Byb2Nlc3NlZCA9IGZhbHNlO1xuICAgIHRoaXMua2V5ID0ga2V5O1xuICAgIHZhciBhdE1hdGNoID0ga2V5Lm1hdGNoKGF0UmVnRXhwKTtcbiAgICB0aGlzLmF0ID0gYXRNYXRjaCA/IGF0TWF0Y2hbMV0gOiAndW5rbm93bic7IC8vIEtleSBtaWdodCBjb250YWluIGEgdW5pcXVlIHN1ZmZpeCBpbiBjYXNlIHRoZSBgbmFtZWAgcGFzc2VkIGJ5IHVzZXIgd2FzIGR1cGxpY2F0ZS5cblxuICAgIHRoaXMucXVlcnkgPSBvcHRpb25zLm5hbWUgfHwgXCJAXCIgKyB0aGlzLmF0O1xuICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG4gICAgdGhpcy5ydWxlcyA9IG5ldyBSdWxlTGlzdChfZXh0ZW5kcyh7fSwgb3B0aW9ucywge1xuICAgICAgcGFyZW50OiB0aGlzXG4gICAgfSkpO1xuXG4gICAgZm9yICh2YXIgbmFtZSBpbiBzdHlsZXMpIHtcbiAgICAgIHRoaXMucnVsZXMuYWRkKG5hbWUsIHN0eWxlc1tuYW1lXSk7XG4gICAgfVxuXG4gICAgdGhpcy5ydWxlcy5wcm9jZXNzKCk7XG4gIH1cbiAgLyoqXG4gICAqIEdldCBhIHJ1bGUuXG4gICAqL1xuXG5cbiAgdmFyIF9wcm90byA9IENvbmRpdGlvbmFsUnVsZS5wcm90b3R5cGU7XG5cbiAgX3Byb3RvLmdldFJ1bGUgPSBmdW5jdGlvbiBnZXRSdWxlKG5hbWUpIHtcbiAgICByZXR1cm4gdGhpcy5ydWxlcy5nZXQobmFtZSk7XG4gIH1cbiAgLyoqXG4gICAqIEdldCBpbmRleCBvZiBhIHJ1bGUuXG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLmluZGV4T2YgPSBmdW5jdGlvbiBpbmRleE9mKHJ1bGUpIHtcbiAgICByZXR1cm4gdGhpcy5ydWxlcy5pbmRleE9mKHJ1bGUpO1xuICB9XG4gIC8qKlxuICAgKiBDcmVhdGUgYW5kIHJlZ2lzdGVyIHJ1bGUsIHJ1biBwbHVnaW5zLlxuICAgKi9cbiAgO1xuXG4gIF9wcm90by5hZGRSdWxlID0gZnVuY3Rpb24gYWRkUnVsZShuYW1lLCBzdHlsZSwgb3B0aW9ucykge1xuICAgIHZhciBydWxlID0gdGhpcy5ydWxlcy5hZGQobmFtZSwgc3R5bGUsIG9wdGlvbnMpO1xuICAgIGlmICghcnVsZSkgcmV0dXJuIG51bGw7XG4gICAgdGhpcy5vcHRpb25zLmpzcy5wbHVnaW5zLm9uUHJvY2Vzc1J1bGUocnVsZSk7XG4gICAgcmV0dXJuIHJ1bGU7XG4gIH1cbiAgLyoqXG4gICAqIEdlbmVyYXRlcyBhIENTUyBzdHJpbmcuXG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcob3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHtcbiAgICAgIG9wdGlvbnMgPSBkZWZhdWx0VG9TdHJpbmdPcHRpb25zO1xuICAgIH1cblxuICAgIHZhciBfZ2V0V2hpdGVzcGFjZVN5bWJvbHMgPSBnZXRXaGl0ZXNwYWNlU3ltYm9scyhvcHRpb25zKSxcbiAgICAgICAgbGluZWJyZWFrID0gX2dldFdoaXRlc3BhY2VTeW1ib2xzLmxpbmVicmVhaztcblxuICAgIGlmIChvcHRpb25zLmluZGVudCA9PSBudWxsKSBvcHRpb25zLmluZGVudCA9IGRlZmF1bHRUb1N0cmluZ09wdGlvbnMuaW5kZW50O1xuICAgIGlmIChvcHRpb25zLmNoaWxkcmVuID09IG51bGwpIG9wdGlvbnMuY2hpbGRyZW4gPSBkZWZhdWx0VG9TdHJpbmdPcHRpb25zLmNoaWxkcmVuO1xuXG4gICAgaWYgKG9wdGlvbnMuY2hpbGRyZW4gPT09IGZhbHNlKSB7XG4gICAgICByZXR1cm4gdGhpcy5xdWVyeSArIFwiIHt9XCI7XG4gICAgfVxuXG4gICAgdmFyIGNoaWxkcmVuID0gdGhpcy5ydWxlcy50b1N0cmluZyhvcHRpb25zKTtcbiAgICByZXR1cm4gY2hpbGRyZW4gPyB0aGlzLnF1ZXJ5ICsgXCIge1wiICsgbGluZWJyZWFrICsgY2hpbGRyZW4gKyBsaW5lYnJlYWsgKyBcIn1cIiA6ICcnO1xuICB9O1xuXG4gIHJldHVybiBDb25kaXRpb25hbFJ1bGU7XG59KCk7XG52YXIga2V5UmVnRXhwID0gL0BtZWRpYXxAc3VwcG9ydHNcXHMrLztcbnZhciBwbHVnaW5Db25kaXRpb25hbFJ1bGUgPSB7XG4gIG9uQ3JlYXRlUnVsZTogZnVuY3Rpb24gb25DcmVhdGVSdWxlKGtleSwgc3R5bGVzLCBvcHRpb25zKSB7XG4gICAgcmV0dXJuIGtleVJlZ0V4cC50ZXN0KGtleSkgPyBuZXcgQ29uZGl0aW9uYWxSdWxlKGtleSwgc3R5bGVzLCBvcHRpb25zKSA6IG51bGw7XG4gIH1cbn07XG5cbnZhciBkZWZhdWx0VG9TdHJpbmdPcHRpb25zJDEgPSB7XG4gIGluZGVudDogMSxcbiAgY2hpbGRyZW46IHRydWVcbn07XG52YXIgbmFtZVJlZ0V4cCA9IC9Aa2V5ZnJhbWVzXFxzKyhbXFx3LV0rKS87XG4vKipcbiAqIFJ1bGUgZm9yIEBrZXlmcmFtZXNcbiAqL1xuXG52YXIgS2V5ZnJhbWVzUnVsZSA9XG4vKiNfX1BVUkVfXyovXG5mdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIEtleWZyYW1lc1J1bGUoa2V5LCBmcmFtZXMsIG9wdGlvbnMpIHtcbiAgICB0aGlzLnR5cGUgPSAna2V5ZnJhbWVzJztcbiAgICB0aGlzLmF0ID0gJ0BrZXlmcmFtZXMnO1xuICAgIHRoaXMuaXNQcm9jZXNzZWQgPSBmYWxzZTtcbiAgICB2YXIgbmFtZU1hdGNoID0ga2V5Lm1hdGNoKG5hbWVSZWdFeHApO1xuXG4gICAgaWYgKG5hbWVNYXRjaCAmJiBuYW1lTWF0Y2hbMV0pIHtcbiAgICAgIHRoaXMubmFtZSA9IG5hbWVNYXRjaFsxXTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5uYW1lID0gJ25vbmFtZSc7XG4gICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyB3YXJuaW5nKGZhbHNlLCBcIltKU1NdIEJhZCBrZXlmcmFtZXMgbmFtZSBcIiArIGtleSkgOiB2b2lkIDA7XG4gICAgfVxuXG4gICAgdGhpcy5rZXkgPSB0aGlzLnR5cGUgKyBcIi1cIiArIHRoaXMubmFtZTtcbiAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuICAgIHZhciBzY29wZWQgPSBvcHRpb25zLnNjb3BlZCxcbiAgICAgICAgc2hlZXQgPSBvcHRpb25zLnNoZWV0LFxuICAgICAgICBnZW5lcmF0ZUlkID0gb3B0aW9ucy5nZW5lcmF0ZUlkO1xuICAgIHRoaXMuaWQgPSBzY29wZWQgPT09IGZhbHNlID8gdGhpcy5uYW1lIDogZXNjYXBlKGdlbmVyYXRlSWQodGhpcywgc2hlZXQpKTtcbiAgICB0aGlzLnJ1bGVzID0gbmV3IFJ1bGVMaXN0KF9leHRlbmRzKHt9LCBvcHRpb25zLCB7XG4gICAgICBwYXJlbnQ6IHRoaXNcbiAgICB9KSk7XG5cbiAgICBmb3IgKHZhciBuYW1lIGluIGZyYW1lcykge1xuICAgICAgdGhpcy5ydWxlcy5hZGQobmFtZSwgZnJhbWVzW25hbWVdLCBfZXh0ZW5kcyh7fSwgb3B0aW9ucywge1xuICAgICAgICBwYXJlbnQ6IHRoaXNcbiAgICAgIH0pKTtcbiAgICB9XG5cbiAgICB0aGlzLnJ1bGVzLnByb2Nlc3MoKTtcbiAgfVxuICAvKipcbiAgICogR2VuZXJhdGVzIGEgQ1NTIHN0cmluZy5cbiAgICovXG5cblxuICB2YXIgX3Byb3RvID0gS2V5ZnJhbWVzUnVsZS5wcm90b3R5cGU7XG5cbiAgX3Byb3RvLnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcob3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHtcbiAgICAgIG9wdGlvbnMgPSBkZWZhdWx0VG9TdHJpbmdPcHRpb25zJDE7XG4gICAgfVxuXG4gICAgdmFyIF9nZXRXaGl0ZXNwYWNlU3ltYm9scyA9IGdldFdoaXRlc3BhY2VTeW1ib2xzKG9wdGlvbnMpLFxuICAgICAgICBsaW5lYnJlYWsgPSBfZ2V0V2hpdGVzcGFjZVN5bWJvbHMubGluZWJyZWFrO1xuXG4gICAgaWYgKG9wdGlvbnMuaW5kZW50ID09IG51bGwpIG9wdGlvbnMuaW5kZW50ID0gZGVmYXVsdFRvU3RyaW5nT3B0aW9ucyQxLmluZGVudDtcbiAgICBpZiAob3B0aW9ucy5jaGlsZHJlbiA9PSBudWxsKSBvcHRpb25zLmNoaWxkcmVuID0gZGVmYXVsdFRvU3RyaW5nT3B0aW9ucyQxLmNoaWxkcmVuO1xuXG4gICAgaWYgKG9wdGlvbnMuY2hpbGRyZW4gPT09IGZhbHNlKSB7XG4gICAgICByZXR1cm4gdGhpcy5hdCArIFwiIFwiICsgdGhpcy5pZCArIFwiIHt9XCI7XG4gICAgfVxuXG4gICAgdmFyIGNoaWxkcmVuID0gdGhpcy5ydWxlcy50b1N0cmluZyhvcHRpb25zKTtcbiAgICBpZiAoY2hpbGRyZW4pIGNoaWxkcmVuID0gXCJcIiArIGxpbmVicmVhayArIGNoaWxkcmVuICsgbGluZWJyZWFrO1xuICAgIHJldHVybiB0aGlzLmF0ICsgXCIgXCIgKyB0aGlzLmlkICsgXCIge1wiICsgY2hpbGRyZW4gKyBcIn1cIjtcbiAgfTtcblxuICByZXR1cm4gS2V5ZnJhbWVzUnVsZTtcbn0oKTtcbnZhciBrZXlSZWdFeHAkMSA9IC9Aa2V5ZnJhbWVzXFxzKy87XG52YXIgcmVmUmVnRXhwID0gL1xcJChbXFx3LV0rKS9nO1xuXG52YXIgZmluZFJlZmVyZW5jZWRLZXlmcmFtZSA9IGZ1bmN0aW9uIGZpbmRSZWZlcmVuY2VkS2V5ZnJhbWUodmFsLCBrZXlmcmFtZXMpIHtcbiAgaWYgKHR5cGVvZiB2YWwgPT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIHZhbC5yZXBsYWNlKHJlZlJlZ0V4cCwgZnVuY3Rpb24gKG1hdGNoLCBuYW1lKSB7XG4gICAgICBpZiAobmFtZSBpbiBrZXlmcmFtZXMpIHtcbiAgICAgICAgcmV0dXJuIGtleWZyYW1lc1tuYW1lXTtcbiAgICAgIH1cblxuICAgICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gd2FybmluZyhmYWxzZSwgXCJbSlNTXSBSZWZlcmVuY2VkIGtleWZyYW1lcyBydWxlIFxcXCJcIiArIG5hbWUgKyBcIlxcXCIgaXMgbm90IGRlZmluZWQuXCIpIDogdm9pZCAwO1xuICAgICAgcmV0dXJuIG1hdGNoO1xuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIHZhbDtcbn07XG4vKipcbiAqIFJlcGxhY2UgdGhlIHJlZmVyZW5jZSBmb3IgYSBhbmltYXRpb24gbmFtZS5cbiAqL1xuXG5cbnZhciByZXBsYWNlUmVmID0gZnVuY3Rpb24gcmVwbGFjZVJlZihzdHlsZSwgcHJvcCwga2V5ZnJhbWVzKSB7XG4gIHZhciB2YWx1ZSA9IHN0eWxlW3Byb3BdO1xuICB2YXIgcmVmS2V5ZnJhbWUgPSBmaW5kUmVmZXJlbmNlZEtleWZyYW1lKHZhbHVlLCBrZXlmcmFtZXMpO1xuXG4gIGlmIChyZWZLZXlmcmFtZSAhPT0gdmFsdWUpIHtcbiAgICBzdHlsZVtwcm9wXSA9IHJlZktleWZyYW1lO1xuICB9XG59O1xuXG52YXIgcGx1Z2luS2V5ZnJhbWVzUnVsZSA9IHtcbiAgb25DcmVhdGVSdWxlOiBmdW5jdGlvbiBvbkNyZWF0ZVJ1bGUoa2V5LCBmcmFtZXMsIG9wdGlvbnMpIHtcbiAgICByZXR1cm4gdHlwZW9mIGtleSA9PT0gJ3N0cmluZycgJiYga2V5UmVnRXhwJDEudGVzdChrZXkpID8gbmV3IEtleWZyYW1lc1J1bGUoa2V5LCBmcmFtZXMsIG9wdGlvbnMpIDogbnVsbDtcbiAgfSxcbiAgLy8gQW5pbWF0aW9uIG5hbWUgcmVmIHJlcGxhY2VyLlxuICBvblByb2Nlc3NTdHlsZTogZnVuY3Rpb24gb25Qcm9jZXNzU3R5bGUoc3R5bGUsIHJ1bGUsIHNoZWV0KSB7XG4gICAgaWYgKHJ1bGUudHlwZSAhPT0gJ3N0eWxlJyB8fCAhc2hlZXQpIHJldHVybiBzdHlsZTtcbiAgICBpZiAoJ2FuaW1hdGlvbi1uYW1lJyBpbiBzdHlsZSkgcmVwbGFjZVJlZihzdHlsZSwgJ2FuaW1hdGlvbi1uYW1lJywgc2hlZXQua2V5ZnJhbWVzKTtcbiAgICBpZiAoJ2FuaW1hdGlvbicgaW4gc3R5bGUpIHJlcGxhY2VSZWYoc3R5bGUsICdhbmltYXRpb24nLCBzaGVldC5rZXlmcmFtZXMpO1xuICAgIHJldHVybiBzdHlsZTtcbiAgfSxcbiAgb25DaGFuZ2VWYWx1ZTogZnVuY3Rpb24gb25DaGFuZ2VWYWx1ZSh2YWwsIHByb3AsIHJ1bGUpIHtcbiAgICB2YXIgc2hlZXQgPSBydWxlLm9wdGlvbnMuc2hlZXQ7XG5cbiAgICBpZiAoIXNoZWV0KSB7XG4gICAgICByZXR1cm4gdmFsO1xuICAgIH1cblxuICAgIHN3aXRjaCAocHJvcCkge1xuICAgICAgY2FzZSAnYW5pbWF0aW9uJzpcbiAgICAgICAgcmV0dXJuIGZpbmRSZWZlcmVuY2VkS2V5ZnJhbWUodmFsLCBzaGVldC5rZXlmcmFtZXMpO1xuXG4gICAgICBjYXNlICdhbmltYXRpb24tbmFtZSc6XG4gICAgICAgIHJldHVybiBmaW5kUmVmZXJlbmNlZEtleWZyYW1lKHZhbCwgc2hlZXQua2V5ZnJhbWVzKTtcblxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIHZhbDtcbiAgICB9XG4gIH1cbn07XG5cbnZhciBLZXlmcmFtZVJ1bGUgPVxuLyojX19QVVJFX18qL1xuZnVuY3Rpb24gKF9CYXNlU3R5bGVSdWxlKSB7XG4gIF9pbmhlcml0c0xvb3NlKEtleWZyYW1lUnVsZSwgX0Jhc2VTdHlsZVJ1bGUpO1xuXG4gIGZ1bmN0aW9uIEtleWZyYW1lUnVsZSgpIHtcbiAgICByZXR1cm4gX0Jhc2VTdHlsZVJ1bGUuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xuICB9XG5cbiAgdmFyIF9wcm90byA9IEtleWZyYW1lUnVsZS5wcm90b3R5cGU7XG5cbiAgLyoqXG4gICAqIEdlbmVyYXRlcyBhIENTUyBzdHJpbmcuXG4gICAqL1xuICBfcHJvdG8udG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZyhvcHRpb25zKSB7XG4gICAgdmFyIHNoZWV0ID0gdGhpcy5vcHRpb25zLnNoZWV0O1xuICAgIHZhciBsaW5rID0gc2hlZXQgPyBzaGVldC5vcHRpb25zLmxpbmsgOiBmYWxzZTtcbiAgICB2YXIgb3B0cyA9IGxpbmsgPyBfZXh0ZW5kcyh7fSwgb3B0aW9ucywge1xuICAgICAgYWxsb3dFbXB0eTogdHJ1ZVxuICAgIH0pIDogb3B0aW9ucztcbiAgICByZXR1cm4gdG9Dc3ModGhpcy5rZXksIHRoaXMuc3R5bGUsIG9wdHMpO1xuICB9O1xuXG4gIHJldHVybiBLZXlmcmFtZVJ1bGU7XG59KEJhc2VTdHlsZVJ1bGUpO1xudmFyIHBsdWdpbktleWZyYW1lUnVsZSA9IHtcbiAgb25DcmVhdGVSdWxlOiBmdW5jdGlvbiBvbkNyZWF0ZVJ1bGUoa2V5LCBzdHlsZSwgb3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zLnBhcmVudCAmJiBvcHRpb25zLnBhcmVudC50eXBlID09PSAna2V5ZnJhbWVzJykge1xuICAgICAgcmV0dXJuIG5ldyBLZXlmcmFtZVJ1bGUoa2V5LCBzdHlsZSwgb3B0aW9ucyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbn07XG5cbnZhciBGb250RmFjZVJ1bGUgPVxuLyojX19QVVJFX18qL1xuZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBGb250RmFjZVJ1bGUoa2V5LCBzdHlsZSwgb3B0aW9ucykge1xuICAgIHRoaXMudHlwZSA9ICdmb250LWZhY2UnO1xuICAgIHRoaXMuYXQgPSAnQGZvbnQtZmFjZSc7XG4gICAgdGhpcy5pc1Byb2Nlc3NlZCA9IGZhbHNlO1xuICAgIHRoaXMua2V5ID0ga2V5O1xuICAgIHRoaXMuc3R5bGUgPSBzdHlsZTtcbiAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuICB9XG4gIC8qKlxuICAgKiBHZW5lcmF0ZXMgYSBDU1Mgc3RyaW5nLlxuICAgKi9cblxuXG4gIHZhciBfcHJvdG8gPSBGb250RmFjZVJ1bGUucHJvdG90eXBlO1xuXG4gIF9wcm90by50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKG9wdGlvbnMpIHtcbiAgICB2YXIgX2dldFdoaXRlc3BhY2VTeW1ib2xzID0gZ2V0V2hpdGVzcGFjZVN5bWJvbHMob3B0aW9ucyksXG4gICAgICAgIGxpbmVicmVhayA9IF9nZXRXaGl0ZXNwYWNlU3ltYm9scy5saW5lYnJlYWs7XG5cbiAgICBpZiAoQXJyYXkuaXNBcnJheSh0aGlzLnN0eWxlKSkge1xuICAgICAgdmFyIHN0ciA9ICcnO1xuXG4gICAgICBmb3IgKHZhciBpbmRleCA9IDA7IGluZGV4IDwgdGhpcy5zdHlsZS5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgc3RyICs9IHRvQ3NzKHRoaXMuYXQsIHRoaXMuc3R5bGVbaW5kZXhdKTtcbiAgICAgICAgaWYgKHRoaXMuc3R5bGVbaW5kZXggKyAxXSkgc3RyICs9IGxpbmVicmVhaztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHN0cjtcbiAgICB9XG5cbiAgICByZXR1cm4gdG9Dc3ModGhpcy5hdCwgdGhpcy5zdHlsZSwgb3B0aW9ucyk7XG4gIH07XG5cbiAgcmV0dXJuIEZvbnRGYWNlUnVsZTtcbn0oKTtcbnZhciBrZXlSZWdFeHAkMiA9IC9AZm9udC1mYWNlLztcbnZhciBwbHVnaW5Gb250RmFjZVJ1bGUgPSB7XG4gIG9uQ3JlYXRlUnVsZTogZnVuY3Rpb24gb25DcmVhdGVSdWxlKGtleSwgc3R5bGUsIG9wdGlvbnMpIHtcbiAgICByZXR1cm4ga2V5UmVnRXhwJDIudGVzdChrZXkpID8gbmV3IEZvbnRGYWNlUnVsZShrZXksIHN0eWxlLCBvcHRpb25zKSA6IG51bGw7XG4gIH1cbn07XG5cbnZhciBWaWV3cG9ydFJ1bGUgPVxuLyojX19QVVJFX18qL1xuZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBWaWV3cG9ydFJ1bGUoa2V5LCBzdHlsZSwgb3B0aW9ucykge1xuICAgIHRoaXMudHlwZSA9ICd2aWV3cG9ydCc7XG4gICAgdGhpcy5hdCA9ICdAdmlld3BvcnQnO1xuICAgIHRoaXMuaXNQcm9jZXNzZWQgPSBmYWxzZTtcbiAgICB0aGlzLmtleSA9IGtleTtcbiAgICB0aGlzLnN0eWxlID0gc3R5bGU7XG4gICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcbiAgfVxuICAvKipcbiAgICogR2VuZXJhdGVzIGEgQ1NTIHN0cmluZy5cbiAgICovXG5cblxuICB2YXIgX3Byb3RvID0gVmlld3BvcnRSdWxlLnByb3RvdHlwZTtcblxuICBfcHJvdG8udG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZyhvcHRpb25zKSB7XG4gICAgcmV0dXJuIHRvQ3NzKHRoaXMua2V5LCB0aGlzLnN0eWxlLCBvcHRpb25zKTtcbiAgfTtcblxuICByZXR1cm4gVmlld3BvcnRSdWxlO1xufSgpO1xudmFyIHBsdWdpblZpZXdwb3J0UnVsZSA9IHtcbiAgb25DcmVhdGVSdWxlOiBmdW5jdGlvbiBvbkNyZWF0ZVJ1bGUoa2V5LCBzdHlsZSwgb3B0aW9ucykge1xuICAgIHJldHVybiBrZXkgPT09ICdAdmlld3BvcnQnIHx8IGtleSA9PT0gJ0AtbXMtdmlld3BvcnQnID8gbmV3IFZpZXdwb3J0UnVsZShrZXksIHN0eWxlLCBvcHRpb25zKSA6IG51bGw7XG4gIH1cbn07XG5cbnZhciBTaW1wbGVSdWxlID1cbi8qI19fUFVSRV9fKi9cbmZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gU2ltcGxlUnVsZShrZXksIHZhbHVlLCBvcHRpb25zKSB7XG4gICAgdGhpcy50eXBlID0gJ3NpbXBsZSc7XG4gICAgdGhpcy5pc1Byb2Nlc3NlZCA9IGZhbHNlO1xuICAgIHRoaXMua2V5ID0ga2V5O1xuICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuICB9XG4gIC8qKlxuICAgKiBHZW5lcmF0ZXMgYSBDU1Mgc3RyaW5nLlxuICAgKi9cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG5cblxuICB2YXIgX3Byb3RvID0gU2ltcGxlUnVsZS5wcm90b3R5cGU7XG5cbiAgX3Byb3RvLnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcob3B0aW9ucykge1xuICAgIGlmIChBcnJheS5pc0FycmF5KHRoaXMudmFsdWUpKSB7XG4gICAgICB2YXIgc3RyID0gJyc7XG5cbiAgICAgIGZvciAodmFyIGluZGV4ID0gMDsgaW5kZXggPCB0aGlzLnZhbHVlLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICBzdHIgKz0gdGhpcy5rZXkgKyBcIiBcIiArIHRoaXMudmFsdWVbaW5kZXhdICsgXCI7XCI7XG4gICAgICAgIGlmICh0aGlzLnZhbHVlW2luZGV4ICsgMV0pIHN0ciArPSAnXFxuJztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHN0cjtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5rZXkgKyBcIiBcIiArIHRoaXMudmFsdWUgKyBcIjtcIjtcbiAgfTtcblxuICByZXR1cm4gU2ltcGxlUnVsZTtcbn0oKTtcbnZhciBrZXlzTWFwID0ge1xuICAnQGNoYXJzZXQnOiB0cnVlLFxuICAnQGltcG9ydCc6IHRydWUsXG4gICdAbmFtZXNwYWNlJzogdHJ1ZVxufTtcbnZhciBwbHVnaW5TaW1wbGVSdWxlID0ge1xuICBvbkNyZWF0ZVJ1bGU6IGZ1bmN0aW9uIG9uQ3JlYXRlUnVsZShrZXksIHZhbHVlLCBvcHRpb25zKSB7XG4gICAgcmV0dXJuIGtleSBpbiBrZXlzTWFwID8gbmV3IFNpbXBsZVJ1bGUoa2V5LCB2YWx1ZSwgb3B0aW9ucykgOiBudWxsO1xuICB9XG59O1xuXG52YXIgcGx1Z2lucyA9IFtwbHVnaW5TdHlsZVJ1bGUsIHBsdWdpbkNvbmRpdGlvbmFsUnVsZSwgcGx1Z2luS2V5ZnJhbWVzUnVsZSwgcGx1Z2luS2V5ZnJhbWVSdWxlLCBwbHVnaW5Gb250RmFjZVJ1bGUsIHBsdWdpblZpZXdwb3J0UnVsZSwgcGx1Z2luU2ltcGxlUnVsZV07XG5cbnZhciBkZWZhdWx0VXBkYXRlT3B0aW9ucyA9IHtcbiAgcHJvY2VzczogdHJ1ZVxufTtcbnZhciBmb3JjZVVwZGF0ZU9wdGlvbnMgPSB7XG4gIGZvcmNlOiB0cnVlLFxuICBwcm9jZXNzOiB0cnVlXG4gIC8qKlxuICAgKiBDb250YWlucyBydWxlcyBvYmplY3RzIGFuZCBhbGxvd3MgYWRkaW5nL3JlbW92aW5nIGV0Yy5cbiAgICogSXMgdXNlZCBmb3IgZS5nLiBieSBgU3R5bGVTaGVldGAgb3IgYENvbmRpdGlvbmFsUnVsZWAuXG4gICAqL1xuXG59O1xuXG52YXIgUnVsZUxpc3QgPVxuLyojX19QVVJFX18qL1xuZnVuY3Rpb24gKCkge1xuICAvLyBSdWxlcyByZWdpc3RyeSBmb3IgYWNjZXNzIGJ5IC5nZXQoKSBtZXRob2QuXG4gIC8vIEl0IGNvbnRhaW5zIHRoZSBzYW1lIHJ1bGUgcmVnaXN0ZXJlZCBieSBuYW1lIGFuZCBieSBzZWxlY3Rvci5cbiAgLy8gT3JpZ2luYWwgc3R5bGVzIG9iamVjdC5cbiAgLy8gVXNlZCB0byBlbnN1cmUgY29ycmVjdCBydWxlcyBvcmRlci5cbiAgZnVuY3Rpb24gUnVsZUxpc3Qob3B0aW9ucykge1xuICAgIHRoaXMubWFwID0ge307XG4gICAgdGhpcy5yYXcgPSB7fTtcbiAgICB0aGlzLmluZGV4ID0gW107XG4gICAgdGhpcy5jb3VudGVyID0gMDtcbiAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuICAgIHRoaXMuY2xhc3NlcyA9IG9wdGlvbnMuY2xhc3NlcztcbiAgICB0aGlzLmtleWZyYW1lcyA9IG9wdGlvbnMua2V5ZnJhbWVzO1xuICB9XG4gIC8qKlxuICAgKiBDcmVhdGUgYW5kIHJlZ2lzdGVyIHJ1bGUuXG4gICAqXG4gICAqIFdpbGwgbm90IHJlbmRlciBhZnRlciBTdHlsZSBTaGVldCB3YXMgcmVuZGVyZWQgdGhlIGZpcnN0IHRpbWUuXG4gICAqL1xuXG5cbiAgdmFyIF9wcm90byA9IFJ1bGVMaXN0LnByb3RvdHlwZTtcblxuICBfcHJvdG8uYWRkID0gZnVuY3Rpb24gYWRkKG5hbWUsIGRlY2wsIHJ1bGVPcHRpb25zKSB7XG4gICAgdmFyIF90aGlzJG9wdGlvbnMgPSB0aGlzLm9wdGlvbnMsXG4gICAgICAgIHBhcmVudCA9IF90aGlzJG9wdGlvbnMucGFyZW50LFxuICAgICAgICBzaGVldCA9IF90aGlzJG9wdGlvbnMuc2hlZXQsXG4gICAgICAgIGpzcyA9IF90aGlzJG9wdGlvbnMuanNzLFxuICAgICAgICBSZW5kZXJlciA9IF90aGlzJG9wdGlvbnMuUmVuZGVyZXIsXG4gICAgICAgIGdlbmVyYXRlSWQgPSBfdGhpcyRvcHRpb25zLmdlbmVyYXRlSWQsXG4gICAgICAgIHNjb3BlZCA9IF90aGlzJG9wdGlvbnMuc2NvcGVkO1xuXG4gICAgdmFyIG9wdGlvbnMgPSBfZXh0ZW5kcyh7XG4gICAgICBjbGFzc2VzOiB0aGlzLmNsYXNzZXMsXG4gICAgICBwYXJlbnQ6IHBhcmVudCxcbiAgICAgIHNoZWV0OiBzaGVldCxcbiAgICAgIGpzczoganNzLFxuICAgICAgUmVuZGVyZXI6IFJlbmRlcmVyLFxuICAgICAgZ2VuZXJhdGVJZDogZ2VuZXJhdGVJZCxcbiAgICAgIHNjb3BlZDogc2NvcGVkLFxuICAgICAgbmFtZTogbmFtZSxcbiAgICAgIGtleWZyYW1lczogdGhpcy5rZXlmcmFtZXMsXG4gICAgICBzZWxlY3RvcjogdW5kZWZpbmVkXG4gICAgfSwgcnVsZU9wdGlvbnMpOyAvLyBXaGVuIHVzZXIgdXNlcyAuY3JlYXRlU3R5bGVTaGVldCgpLCBkdXBsaWNhdGUgbmFtZXMgYXJlIG5vdCBwb3NzaWJsZSwgYnV0XG4gICAgLy8gYHNoZWV0LmFkZFJ1bGUoKWAgb3BlbnMgdGhlIGRvb3IgZm9yIGFueSBkdXBsaWNhdGUgcnVsZSBuYW1lLiBXaGVuIHRoaXMgaGFwcGVuc1xuICAgIC8vIHdlIG5lZWQgdG8gbWFrZSB0aGUga2V5IHVuaXF1ZSB3aXRoaW4gdGhpcyBSdWxlTGlzdCBpbnN0YW5jZSBzY29wZS5cblxuXG4gICAgdmFyIGtleSA9IG5hbWU7XG5cbiAgICBpZiAobmFtZSBpbiB0aGlzLnJhdykge1xuICAgICAga2V5ID0gbmFtZSArIFwiLWRcIiArIHRoaXMuY291bnRlcisrO1xuICAgIH0gLy8gV2UgbmVlZCB0byBzYXZlIHRoZSBvcmlnaW5hbCBkZWNsIGJlZm9yZSBjcmVhdGluZyB0aGUgcnVsZVxuICAgIC8vIGJlY2F1c2UgY2FjaGUgcGx1Z2luIG5lZWRzIHRvIHVzZSBpdCBhcyBhIGtleSB0byByZXR1cm4gYSBjYWNoZWQgcnVsZS5cblxuXG4gICAgdGhpcy5yYXdba2V5XSA9IGRlY2w7XG5cbiAgICBpZiAoa2V5IGluIHRoaXMuY2xhc3Nlcykge1xuICAgICAgLy8gRS5nLiBydWxlcyBpbnNpZGUgb2YgQG1lZGlhIGNvbnRhaW5lclxuICAgICAgb3B0aW9ucy5zZWxlY3RvciA9IFwiLlwiICsgZXNjYXBlKHRoaXMuY2xhc3Nlc1trZXldKTtcbiAgICB9XG5cbiAgICB2YXIgcnVsZSA9IGNyZWF0ZVJ1bGUoa2V5LCBkZWNsLCBvcHRpb25zKTtcbiAgICBpZiAoIXJ1bGUpIHJldHVybiBudWxsO1xuICAgIHRoaXMucmVnaXN0ZXIocnVsZSk7XG4gICAgdmFyIGluZGV4ID0gb3B0aW9ucy5pbmRleCA9PT0gdW5kZWZpbmVkID8gdGhpcy5pbmRleC5sZW5ndGggOiBvcHRpb25zLmluZGV4O1xuICAgIHRoaXMuaW5kZXguc3BsaWNlKGluZGV4LCAwLCBydWxlKTtcbiAgICByZXR1cm4gcnVsZTtcbiAgfVxuICAvKipcbiAgICogR2V0IGEgcnVsZS5cbiAgICovXG4gIDtcblxuICBfcHJvdG8uZ2V0ID0gZnVuY3Rpb24gZ2V0KG5hbWUpIHtcbiAgICByZXR1cm4gdGhpcy5tYXBbbmFtZV07XG4gIH1cbiAgLyoqXG4gICAqIERlbGV0ZSBhIHJ1bGUuXG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLnJlbW92ZSA9IGZ1bmN0aW9uIHJlbW92ZShydWxlKSB7XG4gICAgdGhpcy51bnJlZ2lzdGVyKHJ1bGUpO1xuICAgIGRlbGV0ZSB0aGlzLnJhd1tydWxlLmtleV07XG4gICAgdGhpcy5pbmRleC5zcGxpY2UodGhpcy5pbmRleC5pbmRleE9mKHJ1bGUpLCAxKTtcbiAgfVxuICAvKipcbiAgICogR2V0IGluZGV4IG9mIGEgcnVsZS5cbiAgICovXG4gIDtcblxuICBfcHJvdG8uaW5kZXhPZiA9IGZ1bmN0aW9uIGluZGV4T2YocnVsZSkge1xuICAgIHJldHVybiB0aGlzLmluZGV4LmluZGV4T2YocnVsZSk7XG4gIH1cbiAgLyoqXG4gICAqIFJ1biBgb25Qcm9jZXNzUnVsZSgpYCBwbHVnaW5zIG9uIGV2ZXJ5IHJ1bGUuXG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLnByb2Nlc3MgPSBmdW5jdGlvbiBwcm9jZXNzKCkge1xuICAgIHZhciBwbHVnaW5zID0gdGhpcy5vcHRpb25zLmpzcy5wbHVnaW5zOyAvLyBXZSBuZWVkIHRvIGNsb25lIGFycmF5IGJlY2F1c2UgaWYgd2UgbW9kaWZ5IHRoZSBpbmRleCBzb21ld2hlcmUgZWxzZSBkdXJpbmcgYSBsb29wXG4gICAgLy8gd2UgZW5kIHVwIHdpdGggdmVyeSBoYXJkLXRvLXRyYWNrLWRvd24gc2lkZSBlZmZlY3RzLlxuXG4gICAgdGhpcy5pbmRleC5zbGljZSgwKS5mb3JFYWNoKHBsdWdpbnMub25Qcm9jZXNzUnVsZSwgcGx1Z2lucyk7XG4gIH1cbiAgLyoqXG4gICAqIFJlZ2lzdGVyIGEgcnVsZSBpbiBgLm1hcGAsIGAuY2xhc3Nlc2AgYW5kIGAua2V5ZnJhbWVzYCBtYXBzLlxuICAgKi9cbiAgO1xuXG4gIF9wcm90by5yZWdpc3RlciA9IGZ1bmN0aW9uIHJlZ2lzdGVyKHJ1bGUpIHtcbiAgICB0aGlzLm1hcFtydWxlLmtleV0gPSBydWxlO1xuXG4gICAgaWYgKHJ1bGUgaW5zdGFuY2VvZiBTdHlsZVJ1bGUpIHtcbiAgICAgIHRoaXMubWFwW3J1bGUuc2VsZWN0b3JdID0gcnVsZTtcbiAgICAgIGlmIChydWxlLmlkKSB0aGlzLmNsYXNzZXNbcnVsZS5rZXldID0gcnVsZS5pZDtcbiAgICB9IGVsc2UgaWYgKHJ1bGUgaW5zdGFuY2VvZiBLZXlmcmFtZXNSdWxlICYmIHRoaXMua2V5ZnJhbWVzKSB7XG4gICAgICB0aGlzLmtleWZyYW1lc1tydWxlLm5hbWVdID0gcnVsZS5pZDtcbiAgICB9XG4gIH1cbiAgLyoqXG4gICAqIFVucmVnaXN0ZXIgYSBydWxlLlxuICAgKi9cbiAgO1xuXG4gIF9wcm90by51bnJlZ2lzdGVyID0gZnVuY3Rpb24gdW5yZWdpc3RlcihydWxlKSB7XG4gICAgZGVsZXRlIHRoaXMubWFwW3J1bGUua2V5XTtcblxuICAgIGlmIChydWxlIGluc3RhbmNlb2YgU3R5bGVSdWxlKSB7XG4gICAgICBkZWxldGUgdGhpcy5tYXBbcnVsZS5zZWxlY3Rvcl07XG4gICAgICBkZWxldGUgdGhpcy5jbGFzc2VzW3J1bGUua2V5XTtcbiAgICB9IGVsc2UgaWYgKHJ1bGUgaW5zdGFuY2VvZiBLZXlmcmFtZXNSdWxlKSB7XG4gICAgICBkZWxldGUgdGhpcy5rZXlmcmFtZXNbcnVsZS5uYW1lXTtcbiAgICB9XG4gIH1cbiAgLyoqXG4gICAqIFVwZGF0ZSB0aGUgZnVuY3Rpb24gdmFsdWVzIHdpdGggYSBuZXcgZGF0YS5cbiAgICovXG4gIDtcblxuICBfcHJvdG8udXBkYXRlID0gZnVuY3Rpb24gdXBkYXRlKCkge1xuICAgIHZhciBuYW1lO1xuICAgIHZhciBkYXRhO1xuICAgIHZhciBvcHRpb25zO1xuXG4gICAgaWYgKHR5cGVvZiAoYXJndW1lbnRzLmxlbmd0aCA8PSAwID8gdW5kZWZpbmVkIDogYXJndW1lbnRzWzBdKSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIG5hbWUgPSBhcmd1bWVudHMubGVuZ3RoIDw9IDAgPyB1bmRlZmluZWQgOiBhcmd1bWVudHNbMF07XG4gICAgICBkYXRhID0gYXJndW1lbnRzLmxlbmd0aCA8PSAxID8gdW5kZWZpbmVkIDogYXJndW1lbnRzWzFdO1xuICAgICAgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPD0gMiA/IHVuZGVmaW5lZCA6IGFyZ3VtZW50c1syXTtcbiAgICB9IGVsc2Uge1xuICAgICAgZGF0YSA9IGFyZ3VtZW50cy5sZW5ndGggPD0gMCA/IHVuZGVmaW5lZCA6IGFyZ3VtZW50c1swXTtcbiAgICAgIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoIDw9IDEgPyB1bmRlZmluZWQgOiBhcmd1bWVudHNbMV07XG4gICAgICBuYW1lID0gbnVsbDtcbiAgICB9XG5cbiAgICBpZiAobmFtZSkge1xuICAgICAgdGhpcy51cGRhdGVPbmUodGhpcy5tYXBbbmFtZV0sIGRhdGEsIG9wdGlvbnMpO1xuICAgIH0gZWxzZSB7XG4gICAgICBmb3IgKHZhciBpbmRleCA9IDA7IGluZGV4IDwgdGhpcy5pbmRleC5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgdGhpcy51cGRhdGVPbmUodGhpcy5pbmRleFtpbmRleF0sIGRhdGEsIG9wdGlvbnMpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICAvKipcbiAgICogRXhlY3V0ZSBwbHVnaW5zLCB1cGRhdGUgcnVsZSBwcm9wcy5cbiAgICovXG4gIDtcblxuICBfcHJvdG8udXBkYXRlT25lID0gZnVuY3Rpb24gdXBkYXRlT25lKHJ1bGUsIGRhdGEsIG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7XG4gICAgICBvcHRpb25zID0gZGVmYXVsdFVwZGF0ZU9wdGlvbnM7XG4gICAgfVxuXG4gICAgdmFyIF90aGlzJG9wdGlvbnMyID0gdGhpcy5vcHRpb25zLFxuICAgICAgICBwbHVnaW5zID0gX3RoaXMkb3B0aW9uczIuanNzLnBsdWdpbnMsXG4gICAgICAgIHNoZWV0ID0gX3RoaXMkb3B0aW9uczIuc2hlZXQ7IC8vIEl0IGlzIGEgcnVsZXMgY29udGFpbmVyIGxpa2UgZm9yIGUuZy4gQ29uZGl0aW9uYWxSdWxlLlxuXG4gICAgaWYgKHJ1bGUucnVsZXMgaW5zdGFuY2VvZiBSdWxlTGlzdCkge1xuICAgICAgcnVsZS5ydWxlcy51cGRhdGUoZGF0YSwgb3B0aW9ucyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIHN0eWxlID0gcnVsZS5zdHlsZTtcbiAgICBwbHVnaW5zLm9uVXBkYXRlKGRhdGEsIHJ1bGUsIHNoZWV0LCBvcHRpb25zKTsgLy8gV2UgcmVseSBvbiBhIG5ldyBgc3R5bGVgIHJlZiBpbiBjYXNlIGl0IHdhcyBtdXRhdGVkIGR1cmluZyBvblVwZGF0ZSBob29rLlxuXG4gICAgaWYgKG9wdGlvbnMucHJvY2VzcyAmJiBzdHlsZSAmJiBzdHlsZSAhPT0gcnVsZS5zdHlsZSkge1xuICAgICAgLy8gV2UgbmVlZCB0byBydW4gdGhlIHBsdWdpbnMgaW4gY2FzZSBuZXcgYHN0eWxlYCByZWxpZXMgb24gc3ludGF4IHBsdWdpbnMuXG4gICAgICBwbHVnaW5zLm9uUHJvY2Vzc1N0eWxlKHJ1bGUuc3R5bGUsIHJ1bGUsIHNoZWV0KTsgLy8gVXBkYXRlIGFuZCBhZGQgcHJvcHMuXG5cbiAgICAgIGZvciAodmFyIHByb3AgaW4gcnVsZS5zdHlsZSkge1xuICAgICAgICB2YXIgbmV4dFZhbHVlID0gcnVsZS5zdHlsZVtwcm9wXTtcbiAgICAgICAgdmFyIHByZXZWYWx1ZSA9IHN0eWxlW3Byb3BdOyAvLyBXZSBuZWVkIHRvIHVzZSBgZm9yY2U6IHRydWVgIGJlY2F1c2UgYHJ1bGUuc3R5bGVgIGhhcyBiZWVuIHVwZGF0ZWQgZHVyaW5nIG9uVXBkYXRlIGhvb2ssIHNvIGBydWxlLnByb3AoKWAgd2lsbCBub3QgdXBkYXRlIHRoZSBDU1NPTSBydWxlLlxuICAgICAgICAvLyBXZSBkbyB0aGlzIGNvbXBhcmlzb24gdG8gYXZvaWQgdW5uZWVkZWQgYHJ1bGUucHJvcCgpYCBjYWxscywgc2luY2Ugd2UgaGF2ZSB0aGUgb2xkIGBzdHlsZWAgb2JqZWN0IGhlcmUuXG5cbiAgICAgICAgaWYgKG5leHRWYWx1ZSAhPT0gcHJldlZhbHVlKSB7XG4gICAgICAgICAgcnVsZS5wcm9wKHByb3AsIG5leHRWYWx1ZSwgZm9yY2VVcGRhdGVPcHRpb25zKTtcbiAgICAgICAgfVxuICAgICAgfSAvLyBSZW1vdmUgcHJvcHMuXG5cblxuICAgICAgZm9yICh2YXIgX3Byb3AgaW4gc3R5bGUpIHtcbiAgICAgICAgdmFyIF9uZXh0VmFsdWUgPSBydWxlLnN0eWxlW19wcm9wXTtcbiAgICAgICAgdmFyIF9wcmV2VmFsdWUgPSBzdHlsZVtfcHJvcF07IC8vIFdlIG5lZWQgdG8gdXNlIGBmb3JjZTogdHJ1ZWAgYmVjYXVzZSBgcnVsZS5zdHlsZWAgaGFzIGJlZW4gdXBkYXRlZCBkdXJpbmcgb25VcGRhdGUgaG9vaywgc28gYHJ1bGUucHJvcCgpYCB3aWxsIG5vdCB1cGRhdGUgdGhlIENTU09NIHJ1bGUuXG4gICAgICAgIC8vIFdlIGRvIHRoaXMgY29tcGFyaXNvbiB0byBhdm9pZCB1bm5lZWRlZCBgcnVsZS5wcm9wKClgIGNhbGxzLCBzaW5jZSB3ZSBoYXZlIHRoZSBvbGQgYHN0eWxlYCBvYmplY3QgaGVyZS5cblxuICAgICAgICBpZiAoX25leHRWYWx1ZSA9PSBudWxsICYmIF9uZXh0VmFsdWUgIT09IF9wcmV2VmFsdWUpIHtcbiAgICAgICAgICBydWxlLnByb3AoX3Byb3AsIG51bGwsIGZvcmNlVXBkYXRlT3B0aW9ucyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgLyoqXG4gICAqIENvbnZlcnQgcnVsZXMgdG8gYSBDU1Mgc3RyaW5nLlxuICAgKi9cbiAgO1xuXG4gIF9wcm90by50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKG9wdGlvbnMpIHtcbiAgICB2YXIgc3RyID0gJyc7XG4gICAgdmFyIHNoZWV0ID0gdGhpcy5vcHRpb25zLnNoZWV0O1xuICAgIHZhciBsaW5rID0gc2hlZXQgPyBzaGVldC5vcHRpb25zLmxpbmsgOiBmYWxzZTtcblxuICAgIHZhciBfZ2V0V2hpdGVzcGFjZVN5bWJvbHMgPSBnZXRXaGl0ZXNwYWNlU3ltYm9scyhvcHRpb25zKSxcbiAgICAgICAgbGluZWJyZWFrID0gX2dldFdoaXRlc3BhY2VTeW1ib2xzLmxpbmVicmVhaztcblxuICAgIGZvciAodmFyIGluZGV4ID0gMDsgaW5kZXggPCB0aGlzLmluZGV4Lmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgdmFyIHJ1bGUgPSB0aGlzLmluZGV4W2luZGV4XTtcbiAgICAgIHZhciBjc3MgPSBydWxlLnRvU3RyaW5nKG9wdGlvbnMpOyAvLyBObyBuZWVkIHRvIHJlbmRlciBhbiBlbXB0eSBydWxlLlxuXG4gICAgICBpZiAoIWNzcyAmJiAhbGluaykgY29udGludWU7XG4gICAgICBpZiAoc3RyKSBzdHIgKz0gbGluZWJyZWFrO1xuICAgICAgc3RyICs9IGNzcztcbiAgICB9XG5cbiAgICByZXR1cm4gc3RyO1xuICB9O1xuXG4gIHJldHVybiBSdWxlTGlzdDtcbn0oKTtcblxudmFyIFN0eWxlU2hlZXQgPVxuLyojX19QVVJFX18qL1xuZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBTdHlsZVNoZWV0KHN0eWxlcywgb3B0aW9ucykge1xuICAgIHRoaXMuYXR0YWNoZWQgPSBmYWxzZTtcbiAgICB0aGlzLmRlcGxveWVkID0gZmFsc2U7XG4gICAgdGhpcy5jbGFzc2VzID0ge307XG4gICAgdGhpcy5rZXlmcmFtZXMgPSB7fTtcbiAgICB0aGlzLm9wdGlvbnMgPSBfZXh0ZW5kcyh7fSwgb3B0aW9ucywge1xuICAgICAgc2hlZXQ6IHRoaXMsXG4gICAgICBwYXJlbnQ6IHRoaXMsXG4gICAgICBjbGFzc2VzOiB0aGlzLmNsYXNzZXMsXG4gICAgICBrZXlmcmFtZXM6IHRoaXMua2V5ZnJhbWVzXG4gICAgfSk7XG5cbiAgICBpZiAob3B0aW9ucy5SZW5kZXJlcikge1xuICAgICAgdGhpcy5yZW5kZXJlciA9IG5ldyBvcHRpb25zLlJlbmRlcmVyKHRoaXMpO1xuICAgIH1cblxuICAgIHRoaXMucnVsZXMgPSBuZXcgUnVsZUxpc3QodGhpcy5vcHRpb25zKTtcblxuICAgIGZvciAodmFyIG5hbWUgaW4gc3R5bGVzKSB7XG4gICAgICB0aGlzLnJ1bGVzLmFkZChuYW1lLCBzdHlsZXNbbmFtZV0pO1xuICAgIH1cblxuICAgIHRoaXMucnVsZXMucHJvY2VzcygpO1xuICB9XG4gIC8qKlxuICAgKiBBdHRhY2ggcmVuZGVyYWJsZSB0byB0aGUgcmVuZGVyIHRyZWUuXG4gICAqL1xuXG5cbiAgdmFyIF9wcm90byA9IFN0eWxlU2hlZXQucHJvdG90eXBlO1xuXG4gIF9wcm90by5hdHRhY2ggPSBmdW5jdGlvbiBhdHRhY2goKSB7XG4gICAgaWYgKHRoaXMuYXR0YWNoZWQpIHJldHVybiB0aGlzO1xuICAgIGlmICh0aGlzLnJlbmRlcmVyKSB0aGlzLnJlbmRlcmVyLmF0dGFjaCgpO1xuICAgIHRoaXMuYXR0YWNoZWQgPSB0cnVlOyAvLyBPcmRlciBpcyBpbXBvcnRhbnQsIGJlY2F1c2Ugd2UgY2FuJ3QgdXNlIGluc2VydFJ1bGUgQVBJIGlmIHN0eWxlIGVsZW1lbnQgaXMgbm90IGF0dGFjaGVkLlxuXG4gICAgaWYgKCF0aGlzLmRlcGxveWVkKSB0aGlzLmRlcGxveSgpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG4gIC8qKlxuICAgKiBSZW1vdmUgcmVuZGVyYWJsZSBmcm9tIHJlbmRlciB0cmVlLlxuICAgKi9cbiAgO1xuXG4gIF9wcm90by5kZXRhY2ggPSBmdW5jdGlvbiBkZXRhY2goKSB7XG4gICAgaWYgKCF0aGlzLmF0dGFjaGVkKSByZXR1cm4gdGhpcztcbiAgICBpZiAodGhpcy5yZW5kZXJlcikgdGhpcy5yZW5kZXJlci5kZXRhY2goKTtcbiAgICB0aGlzLmF0dGFjaGVkID0gZmFsc2U7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbiAgLyoqXG4gICAqIEFkZCBhIHJ1bGUgdG8gdGhlIGN1cnJlbnQgc3R5bGVzaGVldC5cbiAgICogV2lsbCBpbnNlcnQgYSBydWxlIGFsc28gYWZ0ZXIgdGhlIHN0eWxlc2hlZXQgaGFzIGJlZW4gcmVuZGVyZWQgZmlyc3QgdGltZS5cbiAgICovXG4gIDtcblxuICBfcHJvdG8uYWRkUnVsZSA9IGZ1bmN0aW9uIGFkZFJ1bGUobmFtZSwgZGVjbCwgb3B0aW9ucykge1xuICAgIHZhciBxdWV1ZSA9IHRoaXMucXVldWU7IC8vIFBsdWdpbnMgY2FuIGNyZWF0ZSBydWxlcy5cbiAgICAvLyBJbiBvcmRlciB0byBwcmVzZXJ2ZSB0aGUgcmlnaHQgb3JkZXIsIHdlIG5lZWQgdG8gcXVldWUgYWxsIGAuYWRkUnVsZWAgY2FsbHMsXG4gICAgLy8gd2hpY2ggaGFwcGVuIGFmdGVyIHRoZSBmaXJzdCBgcnVsZXMuYWRkKClgIGNhbGwuXG5cbiAgICBpZiAodGhpcy5hdHRhY2hlZCAmJiAhcXVldWUpIHRoaXMucXVldWUgPSBbXTtcbiAgICB2YXIgcnVsZSA9IHRoaXMucnVsZXMuYWRkKG5hbWUsIGRlY2wsIG9wdGlvbnMpO1xuICAgIGlmICghcnVsZSkgcmV0dXJuIG51bGw7XG4gICAgdGhpcy5vcHRpb25zLmpzcy5wbHVnaW5zLm9uUHJvY2Vzc1J1bGUocnVsZSk7XG5cbiAgICBpZiAodGhpcy5hdHRhY2hlZCkge1xuICAgICAgaWYgKCF0aGlzLmRlcGxveWVkKSByZXR1cm4gcnVsZTsgLy8gRG9uJ3QgaW5zZXJ0IHJ1bGUgZGlyZWN0bHkgaWYgdGhlcmUgaXMgbm8gc3RyaW5naWZpZWQgdmVyc2lvbiB5ZXQuXG4gICAgICAvLyBJdCB3aWxsIGJlIGluc2VydGVkIGFsbCB0b2dldGhlciB3aGVuIC5hdHRhY2ggaXMgY2FsbGVkLlxuXG4gICAgICBpZiAocXVldWUpIHF1ZXVlLnB1c2gocnVsZSk7ZWxzZSB7XG4gICAgICAgIHRoaXMuaW5zZXJ0UnVsZShydWxlKTtcblxuICAgICAgICBpZiAodGhpcy5xdWV1ZSkge1xuICAgICAgICAgIHRoaXMucXVldWUuZm9yRWFjaCh0aGlzLmluc2VydFJ1bGUsIHRoaXMpO1xuICAgICAgICAgIHRoaXMucXVldWUgPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBydWxlO1xuICAgIH0gLy8gV2UgY2FuJ3QgYWRkIHJ1bGVzIHRvIGEgZGV0YWNoZWQgc3R5bGUgbm9kZS5cbiAgICAvLyBXZSB3aWxsIHJlZGVwbG95IHRoZSBzaGVldCBvbmNlIHVzZXIgd2lsbCBhdHRhY2ggaXQuXG5cblxuICAgIHRoaXMuZGVwbG95ZWQgPSBmYWxzZTtcbiAgICByZXR1cm4gcnVsZTtcbiAgfVxuICAvKipcbiAgICogSW5zZXJ0IHJ1bGUgaW50byB0aGUgU3R5bGVTaGVldFxuICAgKi9cbiAgO1xuXG4gIF9wcm90by5pbnNlcnRSdWxlID0gZnVuY3Rpb24gaW5zZXJ0UnVsZShydWxlKSB7XG4gICAgaWYgKHRoaXMucmVuZGVyZXIpIHtcbiAgICAgIHRoaXMucmVuZGVyZXIuaW5zZXJ0UnVsZShydWxlKTtcbiAgICB9XG4gIH1cbiAgLyoqXG4gICAqIENyZWF0ZSBhbmQgYWRkIHJ1bGVzLlxuICAgKiBXaWxsIHJlbmRlciBhbHNvIGFmdGVyIFN0eWxlIFNoZWV0IHdhcyByZW5kZXJlZCB0aGUgZmlyc3QgdGltZS5cbiAgICovXG4gIDtcblxuICBfcHJvdG8uYWRkUnVsZXMgPSBmdW5jdGlvbiBhZGRSdWxlcyhzdHlsZXMsIG9wdGlvbnMpIHtcbiAgICB2YXIgYWRkZWQgPSBbXTtcblxuICAgIGZvciAodmFyIG5hbWUgaW4gc3R5bGVzKSB7XG4gICAgICB2YXIgcnVsZSA9IHRoaXMuYWRkUnVsZShuYW1lLCBzdHlsZXNbbmFtZV0sIG9wdGlvbnMpO1xuICAgICAgaWYgKHJ1bGUpIGFkZGVkLnB1c2gocnVsZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFkZGVkO1xuICB9XG4gIC8qKlxuICAgKiBHZXQgYSBydWxlIGJ5IG5hbWUuXG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLmdldFJ1bGUgPSBmdW5jdGlvbiBnZXRSdWxlKG5hbWUpIHtcbiAgICByZXR1cm4gdGhpcy5ydWxlcy5nZXQobmFtZSk7XG4gIH1cbiAgLyoqXG4gICAqIERlbGV0ZSBhIHJ1bGUgYnkgbmFtZS5cbiAgICogUmV0dXJucyBgdHJ1ZWA6IGlmIHJ1bGUgaGFzIGJlZW4gZGVsZXRlZCBmcm9tIHRoZSBET00uXG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLmRlbGV0ZVJ1bGUgPSBmdW5jdGlvbiBkZWxldGVSdWxlKG5hbWUpIHtcbiAgICB2YXIgcnVsZSA9IHR5cGVvZiBuYW1lID09PSAnb2JqZWN0JyA/IG5hbWUgOiB0aGlzLnJ1bGVzLmdldChuYW1lKTtcblxuICAgIGlmICghcnVsZSB8fCAvLyBTdHlsZSBzaGVldCB3YXMgY3JlYXRlZCB3aXRob3V0IGxpbms6IHRydWUgYW5kIGF0dGFjaGVkLCBpbiB0aGlzIGNhc2Ugd2VcbiAgICAvLyB3b24ndCBiZSBhYmxlIHRvIHJlbW92ZSB0aGUgQ1NTIHJ1bGUgZnJvbSB0aGUgRE9NLlxuICAgIHRoaXMuYXR0YWNoZWQgJiYgIXJ1bGUucmVuZGVyYWJsZSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHRoaXMucnVsZXMucmVtb3ZlKHJ1bGUpO1xuXG4gICAgaWYgKHRoaXMuYXR0YWNoZWQgJiYgcnVsZS5yZW5kZXJhYmxlICYmIHRoaXMucmVuZGVyZXIpIHtcbiAgICAgIHJldHVybiB0aGlzLnJlbmRlcmVyLmRlbGV0ZVJ1bGUocnVsZS5yZW5kZXJhYmxlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICAvKipcbiAgICogR2V0IGluZGV4IG9mIGEgcnVsZS5cbiAgICovXG4gIDtcblxuICBfcHJvdG8uaW5kZXhPZiA9IGZ1bmN0aW9uIGluZGV4T2YocnVsZSkge1xuICAgIHJldHVybiB0aGlzLnJ1bGVzLmluZGV4T2YocnVsZSk7XG4gIH1cbiAgLyoqXG4gICAqIERlcGxveSBwdXJlIENTUyBzdHJpbmcgdG8gYSByZW5kZXJhYmxlLlxuICAgKi9cbiAgO1xuXG4gIF9wcm90by5kZXBsb3kgPSBmdW5jdGlvbiBkZXBsb3koKSB7XG4gICAgaWYgKHRoaXMucmVuZGVyZXIpIHRoaXMucmVuZGVyZXIuZGVwbG95KCk7XG4gICAgdGhpcy5kZXBsb3llZCA9IHRydWU7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbiAgLyoqXG4gICAqIFVwZGF0ZSB0aGUgZnVuY3Rpb24gdmFsdWVzIHdpdGggYSBuZXcgZGF0YS5cbiAgICovXG4gIDtcblxuICBfcHJvdG8udXBkYXRlID0gZnVuY3Rpb24gdXBkYXRlKCkge1xuICAgIHZhciBfdGhpcyRydWxlcztcblxuICAgIChfdGhpcyRydWxlcyA9IHRoaXMucnVsZXMpLnVwZGF0ZS5hcHBseShfdGhpcyRydWxlcywgYXJndW1lbnRzKTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9XG4gIC8qKlxuICAgKiBVcGRhdGVzIGEgc2luZ2xlIHJ1bGUuXG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLnVwZGF0ZU9uZSA9IGZ1bmN0aW9uIHVwZGF0ZU9uZShydWxlLCBkYXRhLCBvcHRpb25zKSB7XG4gICAgdGhpcy5ydWxlcy51cGRhdGVPbmUocnVsZSwgZGF0YSwgb3B0aW9ucyk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbiAgLyoqXG4gICAqIENvbnZlcnQgcnVsZXMgdG8gYSBDU1Mgc3RyaW5nLlxuICAgKi9cbiAgO1xuXG4gIF9wcm90by50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKG9wdGlvbnMpIHtcbiAgICByZXR1cm4gdGhpcy5ydWxlcy50b1N0cmluZyhvcHRpb25zKTtcbiAgfTtcblxuICByZXR1cm4gU3R5bGVTaGVldDtcbn0oKTtcblxudmFyIFBsdWdpbnNSZWdpc3RyeSA9XG4vKiNfX1BVUkVfXyovXG5mdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIFBsdWdpbnNSZWdpc3RyeSgpIHtcbiAgICB0aGlzLnBsdWdpbnMgPSB7XG4gICAgICBpbnRlcm5hbDogW10sXG4gICAgICBleHRlcm5hbDogW11cbiAgICB9O1xuICAgIHRoaXMucmVnaXN0cnkgPSB7fTtcbiAgfVxuXG4gIHZhciBfcHJvdG8gPSBQbHVnaW5zUmVnaXN0cnkucHJvdG90eXBlO1xuXG4gIC8qKlxuICAgKiBDYWxsIGBvbkNyZWF0ZVJ1bGVgIGhvb2tzIGFuZCByZXR1cm4gYW4gb2JqZWN0IGlmIHJldHVybmVkIGJ5IGEgaG9vay5cbiAgICovXG4gIF9wcm90by5vbkNyZWF0ZVJ1bGUgPSBmdW5jdGlvbiBvbkNyZWF0ZVJ1bGUobmFtZSwgZGVjbCwgb3B0aW9ucykge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5yZWdpc3RyeS5vbkNyZWF0ZVJ1bGUubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBydWxlID0gdGhpcy5yZWdpc3RyeS5vbkNyZWF0ZVJ1bGVbaV0obmFtZSwgZGVjbCwgb3B0aW9ucyk7XG4gICAgICBpZiAocnVsZSkgcmV0dXJuIHJ1bGU7XG4gICAgfVxuXG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAgLyoqXG4gICAqIENhbGwgYG9uUHJvY2Vzc1J1bGVgIGhvb2tzLlxuICAgKi9cbiAgO1xuXG4gIF9wcm90by5vblByb2Nlc3NSdWxlID0gZnVuY3Rpb24gb25Qcm9jZXNzUnVsZShydWxlKSB7XG4gICAgaWYgKHJ1bGUuaXNQcm9jZXNzZWQpIHJldHVybjtcbiAgICB2YXIgc2hlZXQgPSBydWxlLm9wdGlvbnMuc2hlZXQ7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMucmVnaXN0cnkub25Qcm9jZXNzUnVsZS5sZW5ndGg7IGkrKykge1xuICAgICAgdGhpcy5yZWdpc3RyeS5vblByb2Nlc3NSdWxlW2ldKHJ1bGUsIHNoZWV0KTtcbiAgICB9XG5cbiAgICBpZiAocnVsZS5zdHlsZSkgdGhpcy5vblByb2Nlc3NTdHlsZShydWxlLnN0eWxlLCBydWxlLCBzaGVldCk7XG4gICAgcnVsZS5pc1Byb2Nlc3NlZCA9IHRydWU7XG4gIH1cbiAgLyoqXG4gICAqIENhbGwgYG9uUHJvY2Vzc1N0eWxlYCBob29rcy5cbiAgICovXG4gIDtcblxuICBfcHJvdG8ub25Qcm9jZXNzU3R5bGUgPSBmdW5jdGlvbiBvblByb2Nlc3NTdHlsZShzdHlsZSwgcnVsZSwgc2hlZXQpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMucmVnaXN0cnkub25Qcm9jZXNzU3R5bGUubGVuZ3RoOyBpKyspIHtcbiAgICAgIHJ1bGUuc3R5bGUgPSB0aGlzLnJlZ2lzdHJ5Lm9uUHJvY2Vzc1N0eWxlW2ldKHJ1bGUuc3R5bGUsIHJ1bGUsIHNoZWV0KTtcbiAgICB9XG4gIH1cbiAgLyoqXG4gICAqIENhbGwgYG9uUHJvY2Vzc1NoZWV0YCBob29rcy5cbiAgICovXG4gIDtcblxuICBfcHJvdG8ub25Qcm9jZXNzU2hlZXQgPSBmdW5jdGlvbiBvblByb2Nlc3NTaGVldChzaGVldCkge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5yZWdpc3RyeS5vblByb2Nlc3NTaGVldC5sZW5ndGg7IGkrKykge1xuICAgICAgdGhpcy5yZWdpc3RyeS5vblByb2Nlc3NTaGVldFtpXShzaGVldCk7XG4gICAgfVxuICB9XG4gIC8qKlxuICAgKiBDYWxsIGBvblVwZGF0ZWAgaG9va3MuXG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLm9uVXBkYXRlID0gZnVuY3Rpb24gb25VcGRhdGUoZGF0YSwgcnVsZSwgc2hlZXQsIG9wdGlvbnMpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMucmVnaXN0cnkub25VcGRhdGUubGVuZ3RoOyBpKyspIHtcbiAgICAgIHRoaXMucmVnaXN0cnkub25VcGRhdGVbaV0oZGF0YSwgcnVsZSwgc2hlZXQsIG9wdGlvbnMpO1xuICAgIH1cbiAgfVxuICAvKipcbiAgICogQ2FsbCBgb25DaGFuZ2VWYWx1ZWAgaG9va3MuXG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLm9uQ2hhbmdlVmFsdWUgPSBmdW5jdGlvbiBvbkNoYW5nZVZhbHVlKHZhbHVlLCBwcm9wLCBydWxlKSB7XG4gICAgdmFyIHByb2Nlc3NlZFZhbHVlID0gdmFsdWU7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMucmVnaXN0cnkub25DaGFuZ2VWYWx1ZS5sZW5ndGg7IGkrKykge1xuICAgICAgcHJvY2Vzc2VkVmFsdWUgPSB0aGlzLnJlZ2lzdHJ5Lm9uQ2hhbmdlVmFsdWVbaV0ocHJvY2Vzc2VkVmFsdWUsIHByb3AsIHJ1bGUpO1xuICAgIH1cblxuICAgIHJldHVybiBwcm9jZXNzZWRWYWx1ZTtcbiAgfVxuICAvKipcbiAgICogUmVnaXN0ZXIgYSBwbHVnaW4uXG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLnVzZSA9IGZ1bmN0aW9uIHVzZShuZXdQbHVnaW4sIG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7XG4gICAgICBvcHRpb25zID0ge1xuICAgICAgICBxdWV1ZTogJ2V4dGVybmFsJ1xuICAgICAgfTtcbiAgICB9XG5cbiAgICB2YXIgcGx1Z2lucyA9IHRoaXMucGx1Z2luc1tvcHRpb25zLnF1ZXVlXTsgLy8gQXZvaWRzIGFwcGx5aW5nIHNhbWUgcGx1Z2luIHR3aWNlLCBhdCBsZWFzdCBiYXNlZCBvbiByZWYuXG5cbiAgICBpZiAocGx1Z2lucy5pbmRleE9mKG5ld1BsdWdpbikgIT09IC0xKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgcGx1Z2lucy5wdXNoKG5ld1BsdWdpbik7XG4gICAgdGhpcy5yZWdpc3RyeSA9IFtdLmNvbmNhdCh0aGlzLnBsdWdpbnMuZXh0ZXJuYWwsIHRoaXMucGx1Z2lucy5pbnRlcm5hbCkucmVkdWNlKGZ1bmN0aW9uIChyZWdpc3RyeSwgcGx1Z2luKSB7XG4gICAgICBmb3IgKHZhciBuYW1lIGluIHBsdWdpbikge1xuICAgICAgICBpZiAobmFtZSBpbiByZWdpc3RyeSkge1xuICAgICAgICAgIHJlZ2lzdHJ5W25hbWVdLnB1c2gocGx1Z2luW25hbWVdKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyB3YXJuaW5nKGZhbHNlLCBcIltKU1NdIFVua25vd24gaG9vayBcXFwiXCIgKyBuYW1lICsgXCJcXFwiLlwiKSA6IHZvaWQgMDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gcmVnaXN0cnk7XG4gICAgfSwge1xuICAgICAgb25DcmVhdGVSdWxlOiBbXSxcbiAgICAgIG9uUHJvY2Vzc1J1bGU6IFtdLFxuICAgICAgb25Qcm9jZXNzU3R5bGU6IFtdLFxuICAgICAgb25Qcm9jZXNzU2hlZXQ6IFtdLFxuICAgICAgb25DaGFuZ2VWYWx1ZTogW10sXG4gICAgICBvblVwZGF0ZTogW11cbiAgICB9KTtcbiAgfTtcblxuICByZXR1cm4gUGx1Z2luc1JlZ2lzdHJ5O1xufSgpO1xuXG4vKipcbiAqIFNoZWV0cyByZWdpc3RyeSB0byBhY2Nlc3MgYWxsIGluc3RhbmNlcyBpbiBvbmUgcGxhY2UuXG4gKi9cblxudmFyIFNoZWV0c1JlZ2lzdHJ5ID1cbi8qI19fUFVSRV9fKi9cbmZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gU2hlZXRzUmVnaXN0cnkoKSB7XG4gICAgdGhpcy5yZWdpc3RyeSA9IFtdO1xuICB9XG5cbiAgdmFyIF9wcm90byA9IFNoZWV0c1JlZ2lzdHJ5LnByb3RvdHlwZTtcblxuICAvKipcbiAgICogUmVnaXN0ZXIgYSBTdHlsZSBTaGVldC5cbiAgICovXG4gIF9wcm90by5hZGQgPSBmdW5jdGlvbiBhZGQoc2hlZXQpIHtcbiAgICB2YXIgcmVnaXN0cnkgPSB0aGlzLnJlZ2lzdHJ5O1xuICAgIHZhciBpbmRleCA9IHNoZWV0Lm9wdGlvbnMuaW5kZXg7XG4gICAgaWYgKHJlZ2lzdHJ5LmluZGV4T2Yoc2hlZXQpICE9PSAtMSkgcmV0dXJuO1xuXG4gICAgaWYgKHJlZ2lzdHJ5Lmxlbmd0aCA9PT0gMCB8fCBpbmRleCA+PSB0aGlzLmluZGV4KSB7XG4gICAgICByZWdpc3RyeS5wdXNoKHNoZWV0KTtcbiAgICAgIHJldHVybjtcbiAgICB9IC8vIEZpbmQgYSBwb3NpdGlvbi5cblxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCByZWdpc3RyeS5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKHJlZ2lzdHJ5W2ldLm9wdGlvbnMuaW5kZXggPiBpbmRleCkge1xuICAgICAgICByZWdpc3RyeS5zcGxpY2UoaSwgMCwgc2hlZXQpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfVxuICB9XG4gIC8qKlxuICAgKiBSZXNldCB0aGUgcmVnaXN0cnkuXG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLnJlc2V0ID0gZnVuY3Rpb24gcmVzZXQoKSB7XG4gICAgdGhpcy5yZWdpc3RyeSA9IFtdO1xuICB9XG4gIC8qKlxuICAgKiBSZW1vdmUgYSBTdHlsZSBTaGVldC5cbiAgICovXG4gIDtcblxuICBfcHJvdG8ucmVtb3ZlID0gZnVuY3Rpb24gcmVtb3ZlKHNoZWV0KSB7XG4gICAgdmFyIGluZGV4ID0gdGhpcy5yZWdpc3RyeS5pbmRleE9mKHNoZWV0KTtcbiAgICB0aGlzLnJlZ2lzdHJ5LnNwbGljZShpbmRleCwgMSk7XG4gIH1cbiAgLyoqXG4gICAqIENvbnZlcnQgYWxsIGF0dGFjaGVkIHNoZWV0cyB0byBhIENTUyBzdHJpbmcuXG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoX3RlbXApIHtcbiAgICB2YXIgX3JlZiA9IF90ZW1wID09PSB2b2lkIDAgPyB7fSA6IF90ZW1wLFxuICAgICAgICBhdHRhY2hlZCA9IF9yZWYuYXR0YWNoZWQsXG4gICAgICAgIG9wdGlvbnMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShfcmVmLCBbXCJhdHRhY2hlZFwiXSk7XG5cbiAgICB2YXIgX2dldFdoaXRlc3BhY2VTeW1ib2xzID0gZ2V0V2hpdGVzcGFjZVN5bWJvbHMob3B0aW9ucyksXG4gICAgICAgIGxpbmVicmVhayA9IF9nZXRXaGl0ZXNwYWNlU3ltYm9scy5saW5lYnJlYWs7XG5cbiAgICB2YXIgY3NzID0gJyc7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMucmVnaXN0cnkubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBzaGVldCA9IHRoaXMucmVnaXN0cnlbaV07XG5cbiAgICAgIGlmIChhdHRhY2hlZCAhPSBudWxsICYmIHNoZWV0LmF0dGFjaGVkICE9PSBhdHRhY2hlZCkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKGNzcykgY3NzICs9IGxpbmVicmVhaztcbiAgICAgIGNzcyArPSBzaGVldC50b1N0cmluZyhvcHRpb25zKTtcbiAgICB9XG5cbiAgICByZXR1cm4gY3NzO1xuICB9O1xuXG4gIF9jcmVhdGVDbGFzcyhTaGVldHNSZWdpc3RyeSwgW3tcbiAgICBrZXk6IFwiaW5kZXhcIixcblxuICAgIC8qKlxuICAgICAqIEN1cnJlbnQgaGlnaGVzdCBpbmRleCBudW1iZXIuXG4gICAgICovXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5yZWdpc3RyeS5sZW5ndGggPT09IDAgPyAwIDogdGhpcy5yZWdpc3RyeVt0aGlzLnJlZ2lzdHJ5Lmxlbmd0aCAtIDFdLm9wdGlvbnMuaW5kZXg7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIFNoZWV0c1JlZ2lzdHJ5O1xufSgpO1xuXG4vKipcbiAqIFRoaXMgaXMgYSBnbG9iYWwgc2hlZXRzIHJlZ2lzdHJ5LiBPbmx5IERvbVJlbmRlcmVyIHdpbGwgYWRkIHNoZWV0cyB0byBpdC5cbiAqIE9uIHRoZSBzZXJ2ZXIgb25lIHNob3VsZCB1c2UgYW4gb3duIFNoZWV0c1JlZ2lzdHJ5IGluc3RhbmNlIGFuZCBhZGQgdGhlXG4gKiBzaGVldHMgdG8gaXQsIGJlY2F1c2UgeW91IG5lZWQgdG8gbWFrZSBzdXJlIHRvIGNyZWF0ZSBhIG5ldyByZWdpc3RyeSBmb3JcbiAqIGVhY2ggcmVxdWVzdCBpbiBvcmRlciB0byBub3QgbGVhayBzaGVldHMgYWNyb3NzIHJlcXVlc3RzLlxuICovXG5cbnZhciBzaGVldHMgPSBuZXcgU2hlZXRzUmVnaXN0cnkoKTtcblxuLyogZXNsaW50LWRpc2FibGUgKi9cblxuLyoqXG4gKiBOb3cgdGhhdCBgZ2xvYmFsVGhpc2AgaXMgYXZhaWxhYmxlIG9uIG1vc3QgcGxhdGZvcm1zXG4gKiAoaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvR2xvYmFsX09iamVjdHMvZ2xvYmFsVGhpcyNicm93c2VyX2NvbXBhdGliaWxpdHkpXG4gKiB3ZSBjaGVjayBmb3IgYGdsb2JhbFRoaXNgIGZpcnN0LiBgZ2xvYmFsVGhpc2AgaXMgbmVjZXNzYXJ5IGZvciBqc3NcbiAqIHRvIHJ1biBpbiBBZ29yaWMncyBzZWN1cmUgdmVyc2lvbiBvZiBKYXZhU2NyaXB0IChTRVMpLiBVbmRlciBTRVMsXG4gKiBgZ2xvYmFsVGhpc2AgZXhpc3RzLCBidXQgYHdpbmRvd2AsIGBzZWxmYCwgYW5kIGBGdW5jdGlvbigncmV0dXJuXG4gKiB0aGlzJykoKWAgYXJlIGFsbCB1bmRlZmluZWQgZm9yIHNlY3VyaXR5IHJlYXNvbnMuXG4gKlxuICogaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMvaXNzdWVzLzg2I2lzc3VlY29tbWVudC0xMTU3NTkwMjhcbiAqL1xudmFyIGdsb2JhbFRoaXMkMSA9IHR5cGVvZiBnbG9iYWxUaGlzICE9PSAndW5kZWZpbmVkJyA/IGdsb2JhbFRoaXMgOiB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuTWF0aCA9PT0gTWF0aCA/IHdpbmRvdyA6IHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyAmJiBzZWxmLk1hdGggPT09IE1hdGggPyBzZWxmIDogRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblxudmFyIG5zID0gJzJmMWFjYzZjM2E2MDZiMDgyZTVlZWY1ZTU0NDE0ZmZiJztcbmlmIChnbG9iYWxUaGlzJDFbbnNdID09IG51bGwpIGdsb2JhbFRoaXMkMVtuc10gPSAwOyAvLyBCdW5kbGUgbWF5IGNvbnRhaW4gbXVsdGlwbGUgSlNTIHZlcnNpb25zIGF0IHRoZSBzYW1lIHRpbWUuIEluIG9yZGVyIHRvIGlkZW50aWZ5XG4vLyB0aGUgY3VycmVudCB2ZXJzaW9uIHdpdGgganVzdCBvbmUgc2hvcnQgbnVtYmVyIGFuZCB1c2UgaXQgZm9yIGNsYXNzZXMgZ2VuZXJhdGlvblxuLy8gd2UgdXNlIGEgY291bnRlci4gQWxzbyBpdCBpcyBtb3JlIGFjY3VyYXRlLCBiZWNhdXNlIHVzZXIgY2FuIG1hbnVhbGx5IHJlZXZhbHVhdGVcbi8vIHRoZSBtb2R1bGUuXG5cbnZhciBtb2R1bGVJZCA9IGdsb2JhbFRoaXMkMVtuc10rKztcblxudmFyIG1heFJ1bGVzID0gMWUxMDtcbi8qKlxuICogUmV0dXJucyBhIGZ1bmN0aW9uIHdoaWNoIGdlbmVyYXRlcyB1bmlxdWUgY2xhc3MgbmFtZXMgYmFzZWQgb24gY291bnRlcnMuXG4gKiBXaGVuIG5ldyBnZW5lcmF0b3IgZnVuY3Rpb24gaXMgY3JlYXRlZCwgcnVsZSBjb3VudGVyIGlzIHJlc2V0ZWQuXG4gKiBXZSBuZWVkIHRvIHJlc2V0IHRoZSBydWxlIGNvdW50ZXIgZm9yIFNTUiBmb3IgZWFjaCByZXF1ZXN0LlxuICovXG5cbnZhciBjcmVhdGVHZW5lcmF0ZUlkID0gZnVuY3Rpb24gY3JlYXRlR2VuZXJhdGVJZChvcHRpb25zKSB7XG4gIGlmIChvcHRpb25zID09PSB2b2lkIDApIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICB2YXIgcnVsZUNvdW50ZXIgPSAwO1xuXG4gIHZhciBnZW5lcmF0ZUlkID0gZnVuY3Rpb24gZ2VuZXJhdGVJZChydWxlLCBzaGVldCkge1xuICAgIHJ1bGVDb3VudGVyICs9IDE7XG5cbiAgICBpZiAocnVsZUNvdW50ZXIgPiBtYXhSdWxlcykge1xuICAgICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gd2FybmluZyhmYWxzZSwgXCJbSlNTXSBZb3UgbWlnaHQgaGF2ZSBhIG1lbW9yeSBsZWFrLiBSdWxlIGNvdW50ZXIgaXMgYXQgXCIgKyBydWxlQ291bnRlciArIFwiLlwiKSA6IHZvaWQgMDtcbiAgICB9XG5cbiAgICB2YXIganNzSWQgPSAnJztcbiAgICB2YXIgcHJlZml4ID0gJyc7XG5cbiAgICBpZiAoc2hlZXQpIHtcbiAgICAgIGlmIChzaGVldC5vcHRpb25zLmNsYXNzTmFtZVByZWZpeCkge1xuICAgICAgICBwcmVmaXggPSBzaGVldC5vcHRpb25zLmNsYXNzTmFtZVByZWZpeDtcbiAgICAgIH1cblxuICAgICAgaWYgKHNoZWV0Lm9wdGlvbnMuanNzLmlkICE9IG51bGwpIHtcbiAgICAgICAganNzSWQgPSBTdHJpbmcoc2hlZXQub3B0aW9ucy5qc3MuaWQpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChvcHRpb25zLm1pbmlmeSkge1xuICAgICAgLy8gVXNpbmcgXCJjXCIgYmVjYXVzZSBhIG51bWJlciBjYW4ndCBiZSB0aGUgZmlyc3QgY2hhciBpbiBhIGNsYXNzIG5hbWUuXG4gICAgICByZXR1cm4gXCJcIiArIChwcmVmaXggfHwgJ2MnKSArIG1vZHVsZUlkICsganNzSWQgKyBydWxlQ291bnRlcjtcbiAgICB9XG5cbiAgICByZXR1cm4gcHJlZml4ICsgcnVsZS5rZXkgKyBcIi1cIiArIG1vZHVsZUlkICsgKGpzc0lkID8gXCItXCIgKyBqc3NJZCA6ICcnKSArIFwiLVwiICsgcnVsZUNvdW50ZXI7XG4gIH07XG5cbiAgcmV0dXJuIGdlbmVyYXRlSWQ7XG59O1xuXG4vKipcbiAqIENhY2hlIHRoZSB2YWx1ZSBmcm9tIHRoZSBmaXJzdCB0aW1lIGEgZnVuY3Rpb24gaXMgY2FsbGVkLlxuICovXG5cbnZhciBtZW1vaXplID0gZnVuY3Rpb24gbWVtb2l6ZShmbikge1xuICB2YXIgdmFsdWU7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKCF2YWx1ZSkgdmFsdWUgPSBmbigpO1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfTtcbn07XG4vKipcbiAqIEdldCBhIHN0eWxlIHByb3BlcnR5IHZhbHVlLlxuICovXG5cblxudmFyIGdldFByb3BlcnR5VmFsdWUgPSBmdW5jdGlvbiBnZXRQcm9wZXJ0eVZhbHVlKGNzc1J1bGUsIHByb3ApIHtcbiAgdHJ5IHtcbiAgICAvLyBTdXBwb3J0IENTU1RPTS5cbiAgICBpZiAoY3NzUnVsZS5hdHRyaWJ1dGVTdHlsZU1hcCkge1xuICAgICAgcmV0dXJuIGNzc1J1bGUuYXR0cmlidXRlU3R5bGVNYXAuZ2V0KHByb3ApO1xuICAgIH1cblxuICAgIHJldHVybiBjc3NSdWxlLnN0eWxlLmdldFByb3BlcnR5VmFsdWUocHJvcCk7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIC8vIElFIG1heSB0aHJvdyBpZiBwcm9wZXJ0eSBpcyB1bmtub3duLlxuICAgIHJldHVybiAnJztcbiAgfVxufTtcbi8qKlxuICogU2V0IGEgc3R5bGUgcHJvcGVydHkuXG4gKi9cblxuXG52YXIgc2V0UHJvcGVydHkgPSBmdW5jdGlvbiBzZXRQcm9wZXJ0eShjc3NSdWxlLCBwcm9wLCB2YWx1ZSkge1xuICB0cnkge1xuICAgIHZhciBjc3NWYWx1ZSA9IHZhbHVlO1xuXG4gICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICBjc3NWYWx1ZSA9IHRvQ3NzVmFsdWUodmFsdWUsIHRydWUpO1xuXG4gICAgICBpZiAodmFsdWVbdmFsdWUubGVuZ3RoIC0gMV0gPT09ICchaW1wb3J0YW50Jykge1xuICAgICAgICBjc3NSdWxlLnN0eWxlLnNldFByb3BlcnR5KHByb3AsIGNzc1ZhbHVlLCAnaW1wb3J0YW50Jyk7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0gLy8gU3VwcG9ydCBDU1NUT00uXG5cblxuICAgIGlmIChjc3NSdWxlLmF0dHJpYnV0ZVN0eWxlTWFwKSB7XG4gICAgICBjc3NSdWxlLmF0dHJpYnV0ZVN0eWxlTWFwLnNldChwcm9wLCBjc3NWYWx1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNzc1J1bGUuc3R5bGUuc2V0UHJvcGVydHkocHJvcCwgY3NzVmFsdWUpO1xuICAgIH1cbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgLy8gSUUgbWF5IHRocm93IGlmIHByb3BlcnR5IGlzIHVua25vd24uXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59O1xuLyoqXG4gKiBSZW1vdmUgYSBzdHlsZSBwcm9wZXJ0eS5cbiAqL1xuXG5cbnZhciByZW1vdmVQcm9wZXJ0eSA9IGZ1bmN0aW9uIHJlbW92ZVByb3BlcnR5KGNzc1J1bGUsIHByb3ApIHtcbiAgdHJ5IHtcbiAgICAvLyBTdXBwb3J0IENTU1RPTS5cbiAgICBpZiAoY3NzUnVsZS5hdHRyaWJ1dGVTdHlsZU1hcCkge1xuICAgICAgY3NzUnVsZS5hdHRyaWJ1dGVTdHlsZU1hcC5kZWxldGUocHJvcCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNzc1J1bGUuc3R5bGUucmVtb3ZlUHJvcGVydHkocHJvcCk7XG4gICAgfVxuICB9IGNhdGNoIChlcnIpIHtcbiAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyB3YXJuaW5nKGZhbHNlLCBcIltKU1NdIERPTUV4Y2VwdGlvbiBcXFwiXCIgKyBlcnIubWVzc2FnZSArIFwiXFxcIiB3YXMgdGhyb3duLiBUcmllZCB0byByZW1vdmUgcHJvcGVydHkgXFxcIlwiICsgcHJvcCArIFwiXFxcIi5cIikgOiB2b2lkIDA7XG4gIH1cbn07XG4vKipcbiAqIFNldCB0aGUgc2VsZWN0b3IuXG4gKi9cblxuXG52YXIgc2V0U2VsZWN0b3IgPSBmdW5jdGlvbiBzZXRTZWxlY3Rvcihjc3NSdWxlLCBzZWxlY3RvclRleHQpIHtcbiAgY3NzUnVsZS5zZWxlY3RvclRleHQgPSBzZWxlY3RvclRleHQ7IC8vIFJldHVybiBmYWxzZSBpZiBzZXR0ZXIgd2FzIG5vdCBzdWNjZXNzZnVsLlxuICAvLyBDdXJyZW50bHkgd29ya3MgaW4gY2hyb21lIG9ubHkuXG5cbiAgcmV0dXJuIGNzc1J1bGUuc2VsZWN0b3JUZXh0ID09PSBzZWxlY3RvclRleHQ7XG59O1xuLyoqXG4gKiBHZXRzIHRoZSBgaGVhZGAgZWxlbWVudCB1cG9uIHRoZSBmaXJzdCBjYWxsIGFuZCBjYWNoZXMgaXQuXG4gKiBXZSBhc3N1bWUgaXQgY2FuJ3QgYmUgbnVsbC5cbiAqL1xuXG5cbnZhciBnZXRIZWFkID0gbWVtb2l6ZShmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdoZWFkJyk7XG59KTtcbi8qKlxuICogRmluZCBhdHRhY2hlZCBzaGVldCB3aXRoIGFuIGluZGV4IGhpZ2hlciB0aGFuIHRoZSBwYXNzZWQgb25lLlxuICovXG5cbmZ1bmN0aW9uIGZpbmRIaWdoZXJTaGVldChyZWdpc3RyeSwgb3B0aW9ucykge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHJlZ2lzdHJ5Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIHNoZWV0ID0gcmVnaXN0cnlbaV07XG5cbiAgICBpZiAoc2hlZXQuYXR0YWNoZWQgJiYgc2hlZXQub3B0aW9ucy5pbmRleCA+IG9wdGlvbnMuaW5kZXggJiYgc2hlZXQub3B0aW9ucy5pbnNlcnRpb25Qb2ludCA9PT0gb3B0aW9ucy5pbnNlcnRpb25Qb2ludCkge1xuICAgICAgcmV0dXJuIHNoZWV0O1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBudWxsO1xufVxuLyoqXG4gKiBGaW5kIGF0dGFjaGVkIHNoZWV0IHdpdGggdGhlIGhpZ2hlc3QgaW5kZXguXG4gKi9cblxuXG5mdW5jdGlvbiBmaW5kSGlnaGVzdFNoZWV0KHJlZ2lzdHJ5LCBvcHRpb25zKSB7XG4gIGZvciAodmFyIGkgPSByZWdpc3RyeS5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgIHZhciBzaGVldCA9IHJlZ2lzdHJ5W2ldO1xuXG4gICAgaWYgKHNoZWV0LmF0dGFjaGVkICYmIHNoZWV0Lm9wdGlvbnMuaW5zZXJ0aW9uUG9pbnQgPT09IG9wdGlvbnMuaW5zZXJ0aW9uUG9pbnQpIHtcbiAgICAgIHJldHVybiBzaGVldDtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gbnVsbDtcbn1cbi8qKlxuICogRmluZCBhIGNvbW1lbnQgd2l0aCBcImpzc1wiIGluc2lkZS5cbiAqL1xuXG5cbmZ1bmN0aW9uIGZpbmRDb21tZW50Tm9kZSh0ZXh0KSB7XG4gIHZhciBoZWFkID0gZ2V0SGVhZCgpO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgaGVhZC5jaGlsZE5vZGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIG5vZGUgPSBoZWFkLmNoaWxkTm9kZXNbaV07XG5cbiAgICBpZiAobm9kZS5ub2RlVHlwZSA9PT0gOCAmJiBub2RlLm5vZGVWYWx1ZS50cmltKCkgPT09IHRleHQpIHtcbiAgICAgIHJldHVybiBub2RlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBudWxsO1xufVxuLyoqXG4gKiBGaW5kIGEgbm9kZSBiZWZvcmUgd2hpY2ggd2UgY2FuIGluc2VydCB0aGUgc2hlZXQuXG4gKi9cblxuXG5mdW5jdGlvbiBmaW5kUHJldk5vZGUob3B0aW9ucykge1xuICB2YXIgcmVnaXN0cnkgPSBzaGVldHMucmVnaXN0cnk7XG5cbiAgaWYgKHJlZ2lzdHJ5Lmxlbmd0aCA+IDApIHtcbiAgICAvLyBUcnkgdG8gaW5zZXJ0IGJlZm9yZSB0aGUgbmV4dCBoaWdoZXIgc2hlZXQuXG4gICAgdmFyIHNoZWV0ID0gZmluZEhpZ2hlclNoZWV0KHJlZ2lzdHJ5LCBvcHRpb25zKTtcblxuICAgIGlmIChzaGVldCAmJiBzaGVldC5yZW5kZXJlcikge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgcGFyZW50OiBzaGVldC5yZW5kZXJlci5lbGVtZW50LnBhcmVudE5vZGUsXG4gICAgICAgIG5vZGU6IHNoZWV0LnJlbmRlcmVyLmVsZW1lbnRcbiAgICAgIH07XG4gICAgfSAvLyBPdGhlcndpc2UgaW5zZXJ0IGFmdGVyIHRoZSBsYXN0IGF0dGFjaGVkLlxuXG5cbiAgICBzaGVldCA9IGZpbmRIaWdoZXN0U2hlZXQocmVnaXN0cnksIG9wdGlvbnMpO1xuXG4gICAgaWYgKHNoZWV0ICYmIHNoZWV0LnJlbmRlcmVyKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBwYXJlbnQ6IHNoZWV0LnJlbmRlcmVyLmVsZW1lbnQucGFyZW50Tm9kZSxcbiAgICAgICAgbm9kZTogc2hlZXQucmVuZGVyZXIuZWxlbWVudC5uZXh0U2libGluZ1xuICAgICAgfTtcbiAgICB9XG4gIH0gLy8gVHJ5IHRvIGZpbmQgYSBjb21tZW50IHBsYWNlaG9sZGVyIGlmIHJlZ2lzdHJ5IGlzIGVtcHR5LlxuXG5cbiAgdmFyIGluc2VydGlvblBvaW50ID0gb3B0aW9ucy5pbnNlcnRpb25Qb2ludDtcblxuICBpZiAoaW5zZXJ0aW9uUG9pbnQgJiYgdHlwZW9mIGluc2VydGlvblBvaW50ID09PSAnc3RyaW5nJykge1xuICAgIHZhciBjb21tZW50ID0gZmluZENvbW1lbnROb2RlKGluc2VydGlvblBvaW50KTtcblxuICAgIGlmIChjb21tZW50KSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBwYXJlbnQ6IGNvbW1lbnQucGFyZW50Tm9kZSxcbiAgICAgICAgbm9kZTogY29tbWVudC5uZXh0U2libGluZ1xuICAgICAgfTtcbiAgICB9IC8vIElmIHVzZXIgc3BlY2lmaWVzIGFuIGluc2VydGlvbiBwb2ludCBhbmQgaXQgY2FuJ3QgYmUgZm91bmQgaW4gdGhlIGRvY3VtZW50IC1cbiAgICAvLyBiYWQgc3BlY2lmaWNpdHkgaXNzdWVzIG1heSBhcHBlYXIuXG5cblxuICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IHdhcm5pbmcoZmFsc2UsIFwiW0pTU10gSW5zZXJ0aW9uIHBvaW50IFxcXCJcIiArIGluc2VydGlvblBvaW50ICsgXCJcXFwiIG5vdCBmb3VuZC5cIikgOiB2b2lkIDA7XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59XG4vKipcbiAqIEluc2VydCBzdHlsZSBlbGVtZW50IGludG8gdGhlIERPTS5cbiAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlKHN0eWxlLCBvcHRpb25zKSB7XG4gIHZhciBpbnNlcnRpb25Qb2ludCA9IG9wdGlvbnMuaW5zZXJ0aW9uUG9pbnQ7XG4gIHZhciBuZXh0Tm9kZSA9IGZpbmRQcmV2Tm9kZShvcHRpb25zKTtcblxuICBpZiAobmV4dE5vZGUgIT09IGZhbHNlICYmIG5leHROb2RlLnBhcmVudCkge1xuICAgIG5leHROb2RlLnBhcmVudC5pbnNlcnRCZWZvcmUoc3R5bGUsIG5leHROb2RlLm5vZGUpO1xuICAgIHJldHVybjtcbiAgfSAvLyBXb3JrcyB3aXRoIGlmcmFtZXMgYW5kIGFueSBub2RlIHR5cGVzLlxuXG5cbiAgaWYgKGluc2VydGlvblBvaW50ICYmIHR5cGVvZiBpbnNlcnRpb25Qb2ludC5ub2RlVHlwZSA9PT0gJ251bWJlcicpIHtcbiAgICB2YXIgaW5zZXJ0aW9uUG9pbnRFbGVtZW50ID0gaW5zZXJ0aW9uUG9pbnQ7XG4gICAgdmFyIHBhcmVudE5vZGUgPSBpbnNlcnRpb25Qb2ludEVsZW1lbnQucGFyZW50Tm9kZTtcbiAgICBpZiAocGFyZW50Tm9kZSkgcGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoc3R5bGUsIGluc2VydGlvblBvaW50RWxlbWVudC5uZXh0U2libGluZyk7ZWxzZSBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyB3YXJuaW5nKGZhbHNlLCAnW0pTU10gSW5zZXJ0aW9uIHBvaW50IGlzIG5vdCBpbiB0aGUgRE9NLicpIDogdm9pZCAwO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGdldEhlYWQoKS5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG4vKipcbiAqIFJlYWQganNzIG5vbmNlIHNldHRpbmcgZnJvbSB0aGUgcGFnZSBpZiB0aGUgdXNlciBoYXMgc2V0IGl0LlxuICovXG5cblxudmFyIGdldE5vbmNlID0gbWVtb2l6ZShmdW5jdGlvbiAoKSB7XG4gIHZhciBub2RlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWV0YVtwcm9wZXJ0eT1cImNzcC1ub25jZVwiXScpO1xuICByZXR1cm4gbm9kZSA/IG5vZGUuZ2V0QXR0cmlidXRlKCdjb250ZW50JykgOiBudWxsO1xufSk7XG5cbnZhciBfaW5zZXJ0UnVsZSA9IGZ1bmN0aW9uIGluc2VydFJ1bGUoY29udGFpbmVyLCBydWxlLCBpbmRleCkge1xuICB0cnkge1xuICAgIGlmICgnaW5zZXJ0UnVsZScgaW4gY29udGFpbmVyKSB7XG4gICAgICBjb250YWluZXIuaW5zZXJ0UnVsZShydWxlLCBpbmRleCk7XG4gICAgfSAvLyBLZXlmcmFtZXMgcnVsZS5cbiAgICBlbHNlIGlmICgnYXBwZW5kUnVsZScgaW4gY29udGFpbmVyKSB7XG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRSdWxlKHJ1bGUpO1xuICAgICAgfVxuICB9IGNhdGNoIChlcnIpIHtcbiAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyB3YXJuaW5nKGZhbHNlLCBcIltKU1NdIFwiICsgZXJyLm1lc3NhZ2UpIDogdm9pZCAwO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHJldHVybiBjb250YWluZXIuY3NzUnVsZXNbaW5kZXhdO1xufTtcblxudmFyIGdldFZhbGlkUnVsZUluc2VydGlvbkluZGV4ID0gZnVuY3Rpb24gZ2V0VmFsaWRSdWxlSW5zZXJ0aW9uSW5kZXgoY29udGFpbmVyLCBpbmRleCkge1xuICB2YXIgbWF4SW5kZXggPSBjb250YWluZXIuY3NzUnVsZXMubGVuZ3RoOyAvLyBJbiBjYXNlIHByZXZpb3VzIGluc2VydGlvbiBmYWlscywgcGFzc2VkIGluZGV4IG1pZ2h0IGJlIHdyb25nXG5cbiAgaWYgKGluZGV4ID09PSB1bmRlZmluZWQgfHwgaW5kZXggPiBtYXhJbmRleCkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgIHJldHVybiBtYXhJbmRleDtcbiAgfVxuXG4gIHJldHVybiBpbmRleDtcbn07XG5cbnZhciBjcmVhdGVTdHlsZSA9IGZ1bmN0aW9uIGNyZWF0ZVN0eWxlKCkge1xuICB2YXIgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpOyAvLyBXaXRob3V0IGl0LCBJRSB3aWxsIGhhdmUgYSBicm9rZW4gc291cmNlIG9yZGVyIHNwZWNpZmljaXR5IGlmIHdlXG4gIC8vIGluc2VydCBydWxlcyBhZnRlciB3ZSBpbnNlcnQgdGhlIHN0eWxlIHRhZy5cbiAgLy8gSXQgc2VlbXMgdG8ga2ljay1vZmYgdGhlIHNvdXJjZSBvcmRlciBzcGVjaWZpY2l0eSBhbGdvcml0aG0uXG5cbiAgZWwudGV4dENvbnRlbnQgPSAnXFxuJztcbiAgcmV0dXJuIGVsO1xufTtcblxudmFyIERvbVJlbmRlcmVyID1cbi8qI19fUFVSRV9fKi9cbmZ1bmN0aW9uICgpIHtcbiAgLy8gV2lsbCBiZSBlbXB0eSBpZiBsaW5rOiB0cnVlIG9wdGlvbiBpcyBub3Qgc2V0LCBiZWNhdXNlXG4gIC8vIGl0IGlzIG9ubHkgZm9yIHVzZSB0b2dldGhlciB3aXRoIGluc2VydFJ1bGUgQVBJLlxuICBmdW5jdGlvbiBEb21SZW5kZXJlcihzaGVldCkge1xuICAgIHRoaXMuZ2V0UHJvcGVydHlWYWx1ZSA9IGdldFByb3BlcnR5VmFsdWU7XG4gICAgdGhpcy5zZXRQcm9wZXJ0eSA9IHNldFByb3BlcnR5O1xuICAgIHRoaXMucmVtb3ZlUHJvcGVydHkgPSByZW1vdmVQcm9wZXJ0eTtcbiAgICB0aGlzLnNldFNlbGVjdG9yID0gc2V0U2VsZWN0b3I7XG4gICAgdGhpcy5oYXNJbnNlcnRlZFJ1bGVzID0gZmFsc2U7XG4gICAgdGhpcy5jc3NSdWxlcyA9IFtdO1xuICAgIC8vIFRoZXJlIGlzIG5vIHNoZWV0IHdoZW4gdGhlIHJlbmRlcmVyIGlzIHVzZWQgZnJvbSBhIHN0YW5kYWxvbmUgU3R5bGVSdWxlLlxuICAgIGlmIChzaGVldCkgc2hlZXRzLmFkZChzaGVldCk7XG4gICAgdGhpcy5zaGVldCA9IHNoZWV0O1xuXG4gICAgdmFyIF9yZWYgPSB0aGlzLnNoZWV0ID8gdGhpcy5zaGVldC5vcHRpb25zIDoge30sXG4gICAgICAgIG1lZGlhID0gX3JlZi5tZWRpYSxcbiAgICAgICAgbWV0YSA9IF9yZWYubWV0YSxcbiAgICAgICAgZWxlbWVudCA9IF9yZWYuZWxlbWVudDtcblxuICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQgfHwgY3JlYXRlU3R5bGUoKTtcbiAgICB0aGlzLmVsZW1lbnQuc2V0QXR0cmlidXRlKCdkYXRhLWpzcycsICcnKTtcbiAgICBpZiAobWVkaWEpIHRoaXMuZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ21lZGlhJywgbWVkaWEpO1xuICAgIGlmIChtZXRhKSB0aGlzLmVsZW1lbnQuc2V0QXR0cmlidXRlKCdkYXRhLW1ldGEnLCBtZXRhKTtcbiAgICB2YXIgbm9uY2UgPSBnZXROb25jZSgpO1xuICAgIGlmIChub25jZSkgdGhpcy5lbGVtZW50LnNldEF0dHJpYnV0ZSgnbm9uY2UnLCBub25jZSk7XG4gIH1cbiAgLyoqXG4gICAqIEluc2VydCBzdHlsZSBlbGVtZW50IGludG8gcmVuZGVyIHRyZWUuXG4gICAqL1xuXG5cbiAgdmFyIF9wcm90byA9IERvbVJlbmRlcmVyLnByb3RvdHlwZTtcblxuICBfcHJvdG8uYXR0YWNoID0gZnVuY3Rpb24gYXR0YWNoKCkge1xuICAgIC8vIEluIHRoZSBjYXNlIHRoZSBlbGVtZW50IG5vZGUgaXMgZXh0ZXJuYWwgYW5kIGl0IGlzIGFscmVhZHkgaW4gdGhlIERPTS5cbiAgICBpZiAodGhpcy5lbGVtZW50LnBhcmVudE5vZGUgfHwgIXRoaXMuc2hlZXQpIHJldHVybjtcbiAgICBpbnNlcnRTdHlsZSh0aGlzLmVsZW1lbnQsIHRoaXMuc2hlZXQub3B0aW9ucyk7IC8vIFdoZW4gcnVsZXMgYXJlIGluc2VydGVkIHVzaW5nIGBpbnNlcnRSdWxlYCBBUEksIGFmdGVyIGBzaGVldC5kZXRhY2goKS5hdHRhY2goKWBcbiAgICAvLyBtb3N0IGJyb3dzZXJzIGNyZWF0ZSBhIG5ldyBDU1NTdHlsZVNoZWV0LCBleGNlcHQgb2YgYWxsIElFcy5cblxuICAgIHZhciBkZXBsb3llZCA9IEJvb2xlYW4odGhpcy5zaGVldCAmJiB0aGlzLnNoZWV0LmRlcGxveWVkKTtcblxuICAgIGlmICh0aGlzLmhhc0luc2VydGVkUnVsZXMgJiYgZGVwbG95ZWQpIHtcbiAgICAgIHRoaXMuaGFzSW5zZXJ0ZWRSdWxlcyA9IGZhbHNlO1xuICAgICAgdGhpcy5kZXBsb3koKTtcbiAgICB9XG4gIH1cbiAgLyoqXG4gICAqIFJlbW92ZSBzdHlsZSBlbGVtZW50IGZyb20gcmVuZGVyIHRyZWUuXG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLmRldGFjaCA9IGZ1bmN0aW9uIGRldGFjaCgpIHtcbiAgICBpZiAoIXRoaXMuc2hlZXQpIHJldHVybjtcbiAgICB2YXIgcGFyZW50Tm9kZSA9IHRoaXMuZWxlbWVudC5wYXJlbnROb2RlO1xuICAgIGlmIChwYXJlbnROb2RlKSBwYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRoaXMuZWxlbWVudCk7IC8vIEluIHRoZSBtb3N0IGJyb3dzZXJzLCBydWxlcyBpbnNlcnRlZCB1c2luZyBpbnNlcnRSdWxlKCkgQVBJIHdpbGwgYmUgbG9zdCB3aGVuIHN0eWxlIGVsZW1lbnQgaXMgcmVtb3ZlZC5cbiAgICAvLyBUaG91Z2ggSUUgd2lsbCBrZWVwIHRoZW0gYW5kIHdlIG5lZWQgYSBjb25zaXN0ZW50IGJlaGF2aW9yLlxuXG4gICAgaWYgKHRoaXMuc2hlZXQub3B0aW9ucy5saW5rKSB7XG4gICAgICB0aGlzLmNzc1J1bGVzID0gW107XG4gICAgICB0aGlzLmVsZW1lbnQudGV4dENvbnRlbnQgPSAnXFxuJztcbiAgICB9XG4gIH1cbiAgLyoqXG4gICAqIEluamVjdCBDU1Mgc3RyaW5nIGludG8gZWxlbWVudC5cbiAgICovXG4gIDtcblxuICBfcHJvdG8uZGVwbG95ID0gZnVuY3Rpb24gZGVwbG95KCkge1xuICAgIHZhciBzaGVldCA9IHRoaXMuc2hlZXQ7XG4gICAgaWYgKCFzaGVldCkgcmV0dXJuO1xuXG4gICAgaWYgKHNoZWV0Lm9wdGlvbnMubGluaykge1xuICAgICAgdGhpcy5pbnNlcnRSdWxlcyhzaGVldC5ydWxlcyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5lbGVtZW50LnRleHRDb250ZW50ID0gXCJcXG5cIiArIHNoZWV0LnRvU3RyaW5nKCkgKyBcIlxcblwiO1xuICB9XG4gIC8qKlxuICAgKiBJbnNlcnQgUnVsZUxpc3QgaW50byBhbiBlbGVtZW50LlxuICAgKi9cbiAgO1xuXG4gIF9wcm90by5pbnNlcnRSdWxlcyA9IGZ1bmN0aW9uIGluc2VydFJ1bGVzKHJ1bGVzLCBuYXRpdmVQYXJlbnQpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHJ1bGVzLmluZGV4Lmxlbmd0aDsgaSsrKSB7XG4gICAgICB0aGlzLmluc2VydFJ1bGUocnVsZXMuaW5kZXhbaV0sIGksIG5hdGl2ZVBhcmVudCk7XG4gICAgfVxuICB9XG4gIC8qKlxuICAgKiBJbnNlcnQgYSBydWxlIGludG8gZWxlbWVudC5cbiAgICovXG4gIDtcblxuICBfcHJvdG8uaW5zZXJ0UnVsZSA9IGZ1bmN0aW9uIGluc2VydFJ1bGUocnVsZSwgaW5kZXgsIG5hdGl2ZVBhcmVudCkge1xuICAgIGlmIChuYXRpdmVQYXJlbnQgPT09IHZvaWQgMCkge1xuICAgICAgbmF0aXZlUGFyZW50ID0gdGhpcy5lbGVtZW50LnNoZWV0O1xuICAgIH1cblxuICAgIGlmIChydWxlLnJ1bGVzKSB7XG4gICAgICB2YXIgcGFyZW50ID0gcnVsZTtcbiAgICAgIHZhciBsYXRlc3ROYXRpdmVQYXJlbnQgPSBuYXRpdmVQYXJlbnQ7XG5cbiAgICAgIGlmIChydWxlLnR5cGUgPT09ICdjb25kaXRpb25hbCcgfHwgcnVsZS50eXBlID09PSAna2V5ZnJhbWVzJykge1xuICAgICAgICB2YXIgX2luc2VydGlvbkluZGV4ID0gZ2V0VmFsaWRSdWxlSW5zZXJ0aW9uSW5kZXgobmF0aXZlUGFyZW50LCBpbmRleCk7IC8vIFdlIG5lZWQgdG8gcmVuZGVyIHRoZSBjb250YWluZXIgd2l0aG91dCBjaGlsZHJlbiBmaXJzdC5cblxuXG4gICAgICAgIGxhdGVzdE5hdGl2ZVBhcmVudCA9IF9pbnNlcnRSdWxlKG5hdGl2ZVBhcmVudCwgcGFyZW50LnRvU3RyaW5nKHtcbiAgICAgICAgICBjaGlsZHJlbjogZmFsc2VcbiAgICAgICAgfSksIF9pbnNlcnRpb25JbmRleCk7XG5cbiAgICAgICAgaWYgKGxhdGVzdE5hdGl2ZVBhcmVudCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnJlZkNzc1J1bGUocnVsZSwgX2luc2VydGlvbkluZGV4LCBsYXRlc3ROYXRpdmVQYXJlbnQpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLmluc2VydFJ1bGVzKHBhcmVudC5ydWxlcywgbGF0ZXN0TmF0aXZlUGFyZW50KTtcbiAgICAgIHJldHVybiBsYXRlc3ROYXRpdmVQYXJlbnQ7XG4gICAgfVxuXG4gICAgdmFyIHJ1bGVTdHIgPSBydWxlLnRvU3RyaW5nKCk7XG4gICAgaWYgKCFydWxlU3RyKSByZXR1cm4gZmFsc2U7XG4gICAgdmFyIGluc2VydGlvbkluZGV4ID0gZ2V0VmFsaWRSdWxlSW5zZXJ0aW9uSW5kZXgobmF0aXZlUGFyZW50LCBpbmRleCk7XG5cbiAgICB2YXIgbmF0aXZlUnVsZSA9IF9pbnNlcnRSdWxlKG5hdGl2ZVBhcmVudCwgcnVsZVN0ciwgaW5zZXJ0aW9uSW5kZXgpO1xuXG4gICAgaWYgKG5hdGl2ZVJ1bGUgPT09IGZhbHNlKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgdGhpcy5oYXNJbnNlcnRlZFJ1bGVzID0gdHJ1ZTtcbiAgICB0aGlzLnJlZkNzc1J1bGUocnVsZSwgaW5zZXJ0aW9uSW5kZXgsIG5hdGl2ZVJ1bGUpO1xuICAgIHJldHVybiBuYXRpdmVSdWxlO1xuICB9O1xuXG4gIF9wcm90by5yZWZDc3NSdWxlID0gZnVuY3Rpb24gcmVmQ3NzUnVsZShydWxlLCBpbmRleCwgY3NzUnVsZSkge1xuICAgIHJ1bGUucmVuZGVyYWJsZSA9IGNzc1J1bGU7IC8vIFdlIG9ubHkgd2FudCB0byByZWZlcmVuY2UgdGhlIHRvcCBsZXZlbCBydWxlcywgZGVsZXRlUnVsZSBBUEkgZG9lc24ndCBzdXBwb3J0IHJlbW92aW5nIG5lc3RlZCBydWxlc1xuICAgIC8vIGxpa2UgcnVsZXMgaW5zaWRlIG1lZGlhIHF1ZXJpZXMgb3Iga2V5ZnJhbWVzXG5cbiAgICBpZiAocnVsZS5vcHRpb25zLnBhcmVudCBpbnN0YW5jZW9mIFN0eWxlU2hlZXQpIHtcbiAgICAgIHRoaXMuY3NzUnVsZXNbaW5kZXhdID0gY3NzUnVsZTtcbiAgICB9XG4gIH1cbiAgLyoqXG4gICAqIERlbGV0ZSBhIHJ1bGUuXG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLmRlbGV0ZVJ1bGUgPSBmdW5jdGlvbiBkZWxldGVSdWxlKGNzc1J1bGUpIHtcbiAgICB2YXIgc2hlZXQgPSB0aGlzLmVsZW1lbnQuc2hlZXQ7XG4gICAgdmFyIGluZGV4ID0gdGhpcy5pbmRleE9mKGNzc1J1bGUpO1xuICAgIGlmIChpbmRleCA9PT0gLTEpIHJldHVybiBmYWxzZTtcbiAgICBzaGVldC5kZWxldGVSdWxlKGluZGV4KTtcbiAgICB0aGlzLmNzc1J1bGVzLnNwbGljZShpbmRleCwgMSk7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgLyoqXG4gICAqIEdldCBpbmRleCBvZiBhIENTUyBSdWxlLlxuICAgKi9cbiAgO1xuXG4gIF9wcm90by5pbmRleE9mID0gZnVuY3Rpb24gaW5kZXhPZihjc3NSdWxlKSB7XG4gICAgcmV0dXJuIHRoaXMuY3NzUnVsZXMuaW5kZXhPZihjc3NSdWxlKTtcbiAgfVxuICAvKipcbiAgICogR2VuZXJhdGUgYSBuZXcgQ1NTIHJ1bGUgYW5kIHJlcGxhY2UgdGhlIGV4aXN0aW5nIG9uZS5cbiAgICpcbiAgICogT25seSB1c2VkIGZvciBzb21lIG9sZCBicm93c2VycyBiZWNhdXNlIHRoZXkgY2FuJ3Qgc2V0IGEgc2VsZWN0b3IuXG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLnJlcGxhY2VSdWxlID0gZnVuY3Rpb24gcmVwbGFjZVJ1bGUoY3NzUnVsZSwgcnVsZSkge1xuICAgIHZhciBpbmRleCA9IHRoaXMuaW5kZXhPZihjc3NSdWxlKTtcbiAgICBpZiAoaW5kZXggPT09IC0xKSByZXR1cm4gZmFsc2U7XG4gICAgdGhpcy5lbGVtZW50LnNoZWV0LmRlbGV0ZVJ1bGUoaW5kZXgpO1xuICAgIHRoaXMuY3NzUnVsZXMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICByZXR1cm4gdGhpcy5pbnNlcnRSdWxlKHJ1bGUsIGluZGV4KTtcbiAgfVxuICAvKipcbiAgICogR2V0IGFsbCBydWxlcyBlbGVtZW50cy5cbiAgICovXG4gIDtcblxuICBfcHJvdG8uZ2V0UnVsZXMgPSBmdW5jdGlvbiBnZXRSdWxlcygpIHtcbiAgICByZXR1cm4gdGhpcy5lbGVtZW50LnNoZWV0LmNzc1J1bGVzO1xuICB9O1xuXG4gIHJldHVybiBEb21SZW5kZXJlcjtcbn0oKTtcblxudmFyIGluc3RhbmNlQ291bnRlciA9IDA7XG5cbnZhciBKc3MgPVxuLyojX19QVVJFX18qL1xuZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBKc3Mob3B0aW9ucykge1xuICAgIHRoaXMuaWQgPSBpbnN0YW5jZUNvdW50ZXIrKztcbiAgICB0aGlzLnZlcnNpb24gPSBcIjEwLjguMFwiO1xuICAgIHRoaXMucGx1Z2lucyA9IG5ldyBQbHVnaW5zUmVnaXN0cnkoKTtcbiAgICB0aGlzLm9wdGlvbnMgPSB7XG4gICAgICBpZDoge1xuICAgICAgICBtaW5pZnk6IGZhbHNlXG4gICAgICB9LFxuICAgICAgY3JlYXRlR2VuZXJhdGVJZDogY3JlYXRlR2VuZXJhdGVJZCxcbiAgICAgIFJlbmRlcmVyOiBpc0luQnJvd3NlciA/IERvbVJlbmRlcmVyIDogbnVsbCxcbiAgICAgIHBsdWdpbnM6IFtdXG4gICAgfTtcbiAgICB0aGlzLmdlbmVyYXRlSWQgPSBjcmVhdGVHZW5lcmF0ZUlkKHtcbiAgICAgIG1pbmlmeTogZmFsc2VcbiAgICB9KTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcGx1Z2lucy5sZW5ndGg7IGkrKykge1xuICAgICAgdGhpcy5wbHVnaW5zLnVzZShwbHVnaW5zW2ldLCB7XG4gICAgICAgIHF1ZXVlOiAnaW50ZXJuYWwnXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICB0aGlzLnNldHVwKG9wdGlvbnMpO1xuICB9XG4gIC8qKlxuICAgKiBQcmVwYXJlcyB2YXJpb3VzIG9wdGlvbnMsIGFwcGxpZXMgcGx1Z2lucy5cbiAgICogU2hvdWxkIG5vdCBiZSB1c2VkIHR3aWNlIG9uIHRoZSBzYW1lIGluc3RhbmNlLCBiZWNhdXNlIHRoZXJlIGlzIG5vIHBsdWdpbnNcbiAgICogZGVkdXBsaWNhdGlvbiBsb2dpYy5cbiAgICovXG5cblxuICB2YXIgX3Byb3RvID0gSnNzLnByb3RvdHlwZTtcblxuICBfcHJvdG8uc2V0dXAgPSBmdW5jdGlvbiBzZXR1cChvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkge1xuICAgICAgb3B0aW9ucyA9IHt9O1xuICAgIH1cblxuICAgIGlmIChvcHRpb25zLmNyZWF0ZUdlbmVyYXRlSWQpIHtcbiAgICAgIHRoaXMub3B0aW9ucy5jcmVhdGVHZW5lcmF0ZUlkID0gb3B0aW9ucy5jcmVhdGVHZW5lcmF0ZUlkO1xuICAgIH1cblxuICAgIGlmIChvcHRpb25zLmlkKSB7XG4gICAgICB0aGlzLm9wdGlvbnMuaWQgPSBfZXh0ZW5kcyh7fSwgdGhpcy5vcHRpb25zLmlkLCBvcHRpb25zLmlkKTtcbiAgICB9XG5cbiAgICBpZiAob3B0aW9ucy5jcmVhdGVHZW5lcmF0ZUlkIHx8IG9wdGlvbnMuaWQpIHtcbiAgICAgIHRoaXMuZ2VuZXJhdGVJZCA9IHRoaXMub3B0aW9ucy5jcmVhdGVHZW5lcmF0ZUlkKHRoaXMub3B0aW9ucy5pZCk7XG4gICAgfVxuXG4gICAgaWYgKG9wdGlvbnMuaW5zZXJ0aW9uUG9pbnQgIT0gbnVsbCkgdGhpcy5vcHRpb25zLmluc2VydGlvblBvaW50ID0gb3B0aW9ucy5pbnNlcnRpb25Qb2ludDtcblxuICAgIGlmICgnUmVuZGVyZXInIGluIG9wdGlvbnMpIHtcbiAgICAgIHRoaXMub3B0aW9ucy5SZW5kZXJlciA9IG9wdGlvbnMuUmVuZGVyZXI7XG4gICAgfSAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLXNwcmVhZFxuXG5cbiAgICBpZiAob3B0aW9ucy5wbHVnaW5zKSB0aGlzLnVzZS5hcHBseSh0aGlzLCBvcHRpb25zLnBsdWdpbnMpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG4gIC8qKlxuICAgKiBDcmVhdGUgYSBTdHlsZSBTaGVldC5cbiAgICovXG4gIDtcblxuICBfcHJvdG8uY3JlYXRlU3R5bGVTaGVldCA9IGZ1bmN0aW9uIGNyZWF0ZVN0eWxlU2hlZXQoc3R5bGVzLCBvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkge1xuICAgICAgb3B0aW9ucyA9IHt9O1xuICAgIH1cblxuICAgIHZhciBfb3B0aW9ucyA9IG9wdGlvbnMsXG4gICAgICAgIGluZGV4ID0gX29wdGlvbnMuaW5kZXg7XG5cbiAgICBpZiAodHlwZW9mIGluZGV4ICE9PSAnbnVtYmVyJykge1xuICAgICAgaW5kZXggPSBzaGVldHMuaW5kZXggPT09IDAgPyAwIDogc2hlZXRzLmluZGV4ICsgMTtcbiAgICB9XG5cbiAgICB2YXIgc2hlZXQgPSBuZXcgU3R5bGVTaGVldChzdHlsZXMsIF9leHRlbmRzKHt9LCBvcHRpb25zLCB7XG4gICAgICBqc3M6IHRoaXMsXG4gICAgICBnZW5lcmF0ZUlkOiBvcHRpb25zLmdlbmVyYXRlSWQgfHwgdGhpcy5nZW5lcmF0ZUlkLFxuICAgICAgaW5zZXJ0aW9uUG9pbnQ6IHRoaXMub3B0aW9ucy5pbnNlcnRpb25Qb2ludCxcbiAgICAgIFJlbmRlcmVyOiB0aGlzLm9wdGlvbnMuUmVuZGVyZXIsXG4gICAgICBpbmRleDogaW5kZXhcbiAgICB9KSk7XG4gICAgdGhpcy5wbHVnaW5zLm9uUHJvY2Vzc1NoZWV0KHNoZWV0KTtcbiAgICByZXR1cm4gc2hlZXQ7XG4gIH1cbiAgLyoqXG4gICAqIERldGFjaCB0aGUgU3R5bGUgU2hlZXQgYW5kIHJlbW92ZSBpdCBmcm9tIHRoZSByZWdpc3RyeS5cbiAgICovXG4gIDtcblxuICBfcHJvdG8ucmVtb3ZlU3R5bGVTaGVldCA9IGZ1bmN0aW9uIHJlbW92ZVN0eWxlU2hlZXQoc2hlZXQpIHtcbiAgICBzaGVldC5kZXRhY2goKTtcbiAgICBzaGVldHMucmVtb3ZlKHNoZWV0KTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuICAvKipcbiAgICogQ3JlYXRlIGEgcnVsZSB3aXRob3V0IGEgU3R5bGUgU2hlZXQuXG4gICAqIFtEZXByZWNhdGVkXSB3aWxsIGJlIHJlbW92ZWQgaW4gdGhlIG5leHQgbWFqb3IgdmVyc2lvbi5cbiAgICovXG4gIDtcblxuICBfcHJvdG8uY3JlYXRlUnVsZSA9IGZ1bmN0aW9uIGNyZWF0ZVJ1bGUkMShuYW1lLCBzdHlsZSwgb3B0aW9ucykge1xuICAgIGlmIChzdHlsZSA9PT0gdm9pZCAwKSB7XG4gICAgICBzdHlsZSA9IHt9O1xuICAgIH1cblxuICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHtcbiAgICAgIG9wdGlvbnMgPSB7fTtcbiAgICB9XG5cbiAgICAvLyBFbmFibGUgcnVsZSB3aXRob3V0IG5hbWUgZm9yIGlubGluZSBzdHlsZXMuXG4gICAgaWYgKHR5cGVvZiBuYW1lID09PSAnb2JqZWN0Jykge1xuICAgICAgcmV0dXJuIHRoaXMuY3JlYXRlUnVsZSh1bmRlZmluZWQsIG5hbWUsIHN0eWxlKTtcbiAgICB9XG5cbiAgICB2YXIgcnVsZU9wdGlvbnMgPSBfZXh0ZW5kcyh7fSwgb3B0aW9ucywge1xuICAgICAgbmFtZTogbmFtZSxcbiAgICAgIGpzczogdGhpcyxcbiAgICAgIFJlbmRlcmVyOiB0aGlzLm9wdGlvbnMuUmVuZGVyZXJcbiAgICB9KTtcblxuICAgIGlmICghcnVsZU9wdGlvbnMuZ2VuZXJhdGVJZCkgcnVsZU9wdGlvbnMuZ2VuZXJhdGVJZCA9IHRoaXMuZ2VuZXJhdGVJZDtcbiAgICBpZiAoIXJ1bGVPcHRpb25zLmNsYXNzZXMpIHJ1bGVPcHRpb25zLmNsYXNzZXMgPSB7fTtcbiAgICBpZiAoIXJ1bGVPcHRpb25zLmtleWZyYW1lcykgcnVsZU9wdGlvbnMua2V5ZnJhbWVzID0ge307XG5cbiAgICB2YXIgcnVsZSA9IGNyZWF0ZVJ1bGUobmFtZSwgc3R5bGUsIHJ1bGVPcHRpb25zKTtcblxuICAgIGlmIChydWxlKSB0aGlzLnBsdWdpbnMub25Qcm9jZXNzUnVsZShydWxlKTtcbiAgICByZXR1cm4gcnVsZTtcbiAgfVxuICAvKipcbiAgICogUmVnaXN0ZXIgcGx1Z2luLiBQYXNzZWQgZnVuY3Rpb24gd2lsbCBiZSBpbnZva2VkIHdpdGggYSBydWxlIGluc3RhbmNlLlxuICAgKi9cbiAgO1xuXG4gIF9wcm90by51c2UgPSBmdW5jdGlvbiB1c2UoKSB7XG4gICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBwbHVnaW5zID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgcGx1Z2luc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICBwbHVnaW5zLmZvckVhY2goZnVuY3Rpb24gKHBsdWdpbikge1xuICAgICAgX3RoaXMucGx1Z2lucy51c2UocGx1Z2luKTtcbiAgICB9KTtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICByZXR1cm4gSnNzO1xufSgpO1xuXG52YXIgY3JlYXRlSnNzID0gZnVuY3Rpb24gY3JlYXRlSnNzKG9wdGlvbnMpIHtcbiAgcmV0dXJuIG5ldyBKc3Mob3B0aW9ucyk7XG59O1xuXG4vKipcbiAqIFNoZWV0c01hbmFnZXIgaXMgbGlrZSBhIFdlYWtNYXAgd2hpY2ggaXMgZGVzaWduZWQgdG8gY291bnQgU3R5bGVTaGVldFxuICogaW5zdGFuY2VzIGFuZCBhdHRhY2gvZGV0YWNoIGF1dG9tYXRpY2FsbHkuXG4gKiBVc2VkIGluIHJlYWN0LWpzcy5cbiAqL1xuXG52YXIgU2hlZXRzTWFuYWdlciA9XG4vKiNfX1BVUkVfXyovXG5mdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIFNoZWV0c01hbmFnZXIoKSB7XG4gICAgdGhpcy5sZW5ndGggPSAwO1xuICAgIHRoaXMuc2hlZXRzID0gbmV3IFdlYWtNYXAoKTtcbiAgfVxuXG4gIHZhciBfcHJvdG8gPSBTaGVldHNNYW5hZ2VyLnByb3RvdHlwZTtcblxuICBfcHJvdG8uZ2V0ID0gZnVuY3Rpb24gZ2V0KGtleSkge1xuICAgIHZhciBlbnRyeSA9IHRoaXMuc2hlZXRzLmdldChrZXkpO1xuICAgIHJldHVybiBlbnRyeSAmJiBlbnRyeS5zaGVldDtcbiAgfTtcblxuICBfcHJvdG8uYWRkID0gZnVuY3Rpb24gYWRkKGtleSwgc2hlZXQpIHtcbiAgICBpZiAodGhpcy5zaGVldHMuaGFzKGtleSkpIHJldHVybjtcbiAgICB0aGlzLmxlbmd0aCsrO1xuICAgIHRoaXMuc2hlZXRzLnNldChrZXksIHtcbiAgICAgIHNoZWV0OiBzaGVldCxcbiAgICAgIHJlZnM6IDBcbiAgICB9KTtcbiAgfTtcblxuICBfcHJvdG8ubWFuYWdlID0gZnVuY3Rpb24gbWFuYWdlKGtleSkge1xuICAgIHZhciBlbnRyeSA9IHRoaXMuc2hlZXRzLmdldChrZXkpO1xuXG4gICAgaWYgKGVudHJ5KSB7XG4gICAgICBpZiAoZW50cnkucmVmcyA9PT0gMCkge1xuICAgICAgICBlbnRyeS5zaGVldC5hdHRhY2goKTtcbiAgICAgIH1cblxuICAgICAgZW50cnkucmVmcysrO1xuICAgICAgcmV0dXJuIGVudHJ5LnNoZWV0O1xuICAgIH1cblxuICAgIHdhcm5pbmcoZmFsc2UsIFwiW0pTU10gU2hlZXRzTWFuYWdlcjogY2FuJ3QgZmluZCBzaGVldCB0byBtYW5hZ2VcIik7XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfTtcblxuICBfcHJvdG8udW5tYW5hZ2UgPSBmdW5jdGlvbiB1bm1hbmFnZShrZXkpIHtcbiAgICB2YXIgZW50cnkgPSB0aGlzLnNoZWV0cy5nZXQoa2V5KTtcblxuICAgIGlmIChlbnRyeSkge1xuICAgICAgaWYgKGVudHJ5LnJlZnMgPiAwKSB7XG4gICAgICAgIGVudHJ5LnJlZnMtLTtcbiAgICAgICAgaWYgKGVudHJ5LnJlZnMgPT09IDApIGVudHJ5LnNoZWV0LmRldGFjaCgpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB3YXJuaW5nKGZhbHNlLCBcIlNoZWV0c01hbmFnZXI6IGNhbid0IGZpbmQgc2hlZXQgdG8gdW5tYW5hZ2VcIik7XG4gICAgfVxuICB9O1xuXG4gIF9jcmVhdGVDbGFzcyhTaGVldHNNYW5hZ2VyLCBbe1xuICAgIGtleTogXCJzaXplXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5sZW5ndGg7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIFNoZWV0c01hbmFnZXI7XG59KCk7XG5cbi8qKlxuKiBFeHBvcnQgYSBjb25zdGFudCBpbmRpY2F0aW5nIGlmIHRoaXMgYnJvd3NlciBoYXMgQ1NTVE9NIHN1cHBvcnQuXG4qIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3dlYi91cGRhdGVzLzIwMTgvMDMvY3Nzb21cbiovXG52YXIgaGFzQ1NTVE9NU3VwcG9ydCA9IHR5cGVvZiBDU1MgPT09ICdvYmplY3QnICYmIENTUyAhPSBudWxsICYmICdudW1iZXInIGluIENTUztcblxuLyoqXG4gKiBFeHRyYWN0cyBhIHN0eWxlcyBvYmplY3Qgd2l0aCBvbmx5IHByb3BzIHRoYXQgY29udGFpbiBmdW5jdGlvbiB2YWx1ZXMuXG4gKi9cbmZ1bmN0aW9uIGdldER5bmFtaWNTdHlsZXMoc3R5bGVzKSB7XG4gIHZhciB0byA9IG51bGw7XG5cbiAgZm9yICh2YXIga2V5IGluIHN0eWxlcykge1xuICAgIHZhciB2YWx1ZSA9IHN0eWxlc1trZXldO1xuICAgIHZhciB0eXBlID0gdHlwZW9mIHZhbHVlO1xuXG4gICAgaWYgKHR5cGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGlmICghdG8pIHRvID0ge307XG4gICAgICB0b1trZXldID0gdmFsdWU7XG4gICAgfSBlbHNlIGlmICh0eXBlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAhPT0gbnVsbCAmJiAhQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgIHZhciBleHRyYWN0ZWQgPSBnZXREeW5hbWljU3R5bGVzKHZhbHVlKTtcblxuICAgICAgaWYgKGV4dHJhY3RlZCkge1xuICAgICAgICBpZiAoIXRvKSB0byA9IHt9O1xuICAgICAgICB0b1trZXldID0gZXh0cmFjdGVkO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0bztcbn1cblxuLyoqXG4gKiBBIGJldHRlciBhYnN0cmFjdGlvbiBvdmVyIENTUy5cbiAqXG4gKiBAY29weXJpZ2h0IE9sZWcgSXNvbmVuIChTbG9ib2Rza29pKSAvIElzb25lbiAyMDE0LXByZXNlbnRcbiAqIEB3ZWJzaXRlIGh0dHBzOi8vZ2l0aHViLmNvbS9jc3NpbmpzL2pzc1xuICogQGxpY2Vuc2UgTUlUXG4gKi9cbnZhciBpbmRleCA9IGNyZWF0ZUpzcygpO1xuXG5leHBvcnQgZGVmYXVsdCBpbmRleDtcbmV4cG9ydCB7IFJ1bGVMaXN0LCBTaGVldHNNYW5hZ2VyLCBTaGVldHNSZWdpc3RyeSwgY3JlYXRlSnNzIGFzIGNyZWF0ZSwgY3JlYXRlR2VuZXJhdGVJZCwgY3JlYXRlUnVsZSwgZ2V0RHluYW1pY1N0eWxlcywgaGFzQ1NTVE9NU3VwcG9ydCwgc2hlZXRzLCB0b0Nzc1ZhbHVlIH07XG4iLCJ2YXIgaXNQcm9kdWN0aW9uID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJztcbmZ1bmN0aW9uIHdhcm5pbmcoY29uZGl0aW9uLCBtZXNzYWdlKSB7XG4gIGlmICghaXNQcm9kdWN0aW9uKSB7XG4gICAgaWYgKGNvbmRpdGlvbikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciB0ZXh0ID0gXCJXYXJuaW5nOiBcIiArIG1lc3NhZ2U7XG5cbiAgICBpZiAodHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBjb25zb2xlLndhcm4odGV4dCk7XG4gICAgfVxuXG4gICAgdHJ5IHtcbiAgICAgIHRocm93IEVycm9yKHRleHQpO1xuICAgIH0gY2F0Y2ggKHgpIHt9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgd2FybmluZztcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7XG4gIGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoO1xuXG4gIGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykge1xuICAgIGFycjJbaV0gPSBhcnJbaV07XG4gIH1cblxuICByZXR1cm4gYXJyMjtcbn0iLCJpbXBvcnQgYXJyYXlMaWtlVG9BcnJheSBmcm9tIFwiLi9hcnJheUxpa2VUb0FycmF5LmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfYXJyYXlXaXRob3V0SG9sZXMoYXJyKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnJheUxpa2VUb0FycmF5KGFycik7XG59IiwiZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTtcbiAgICBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7XG4gICAgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlO1xuICAgIGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHtcbiAgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7XG4gIGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTtcbiAgcmV0dXJuIENvbnN0cnVjdG9yO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXkoaXRlcikge1xuICBpZiAodHlwZW9mIFN5bWJvbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBpdGVyW1N5bWJvbC5pdGVyYXRvcl0gIT0gbnVsbCB8fCBpdGVyW1wiQEBpdGVyYXRvclwiXSAhPSBudWxsKSByZXR1cm4gQXJyYXkuZnJvbShpdGVyKTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfbm9uSXRlcmFibGVTcHJlYWQoKSB7XG4gIHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gc3ByZWFkIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpO1xufSIsImltcG9ydCBhcnJheVdpdGhvdXRIb2xlcyBmcm9tIFwiLi9hcnJheVdpdGhvdXRIb2xlcy5qc1wiO1xuaW1wb3J0IGl0ZXJhYmxlVG9BcnJheSBmcm9tIFwiLi9pdGVyYWJsZVRvQXJyYXkuanNcIjtcbmltcG9ydCB1bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheSBmcm9tIFwiLi91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheS5qc1wiO1xuaW1wb3J0IG5vbkl0ZXJhYmxlU3ByZWFkIGZyb20gXCIuL25vbkl0ZXJhYmxlU3ByZWFkLmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfdG9Db25zdW1hYmxlQXJyYXkoYXJyKSB7XG4gIHJldHVybiBhcnJheVdpdGhvdXRIb2xlcyhhcnIpIHx8IGl0ZXJhYmxlVG9BcnJheShhcnIpIHx8IHVuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFycikgfHwgbm9uSXRlcmFibGVTcHJlYWQoKTtcbn0iLCJpbXBvcnQgYXJyYXlMaWtlVG9BcnJheSBmcm9tIFwiLi9hcnJheUxpa2VUb0FycmF5LmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7XG4gIGlmICghbykgcmV0dXJuO1xuICBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBhcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7XG4gIHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTtcbiAgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTtcbiAgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7XG4gIGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pO1xufSJdLCJuYW1lcyI6WyJjcmVhdGVUaGVtZSIsIlRoZW1lUHJvdmlkZXIiLCJtYWtlU3R5bGVzIiwiSGVhZGVyIiwidGhlbWUiLCJ1c2VTdHlsZXMiLCJyb290IiwiYmFja2dyb3VuZCIsIkxheW91dCIsImNoaWxkcmVuIiwiY2xhc3NlcyJdLCJzb3VyY2VSb290IjoiIn0=