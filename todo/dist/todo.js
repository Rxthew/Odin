/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "html {\n    box-sizing: border-box;\n\n}\n\n*, *:before, *:after{\n    box-sizing: inherit;\n    margin: 0;\n    padding: 0;\n}\n\nbody {\n    display: flex;\n    flex-direction: column;\n    flex-wrap: wrap;\n    min-height: 100vh;\n    width: 100vw;\n\n}\n\n.project {\n    display: flex;\n    flex-direction: column;\n    width: 44vw;\n    min-height: 10vh;\n    max-height: max-content;\n    border: 1px solid black;\n    padding: 1rem;\n    flex-wrap: wrap;\n    word-break: break-all;\n    box-shadow: 5px 10px;\n    cursor: pointer;\n    position: relative;\n    gap: 0.33rem;\n    margin: 1.5rem;\n    \n\n}\n\n.delProjBtn {\n    background-color: white;\n    position:absolute;\n    top: 0;\n    right: 0;\n    \n}\n\n.editProjTitleBtn {\n    font-size:larger\n    \n\n}\n\n.none {\n    display: none;\n}\n\n.move {\n    cursor: pointer;\n    background-color: white;\n    position: absolute;\n    bottom: 0;\n    right: 0\n}\n\n.toDoNoteInput {\n    border: 1px solid black;\n    position: relative;\n}\n\n.text {\n    white-space: pre-wrap;\n}\n\n.modInput {\n    white-space: pre-wrap;\n}\n\n.opaque {\n    opacity: 0.1;\n    \n}\n\n.opaqueColor {\n    color: rgba(0,0,0,0.1);\n    border-color: rgba(0,0,0,0.1)\n}\n\n.transitForm {\n    position: fixed;\n    z-index:100;\n    left: 50vw;\n    top: 35vh;\n    border: 1px solid black;\n    color: black;\n    padding: 2rem;\n}\n\n\n.hidden {\n    visibility: hidden;\n}\n\n.headerChild{\n    margin-left: auto;\n}\n\n.moving {\n    color: green;\n    background-color: red;\n    \n}\n\n#header {\n    display:flex;\n    justify-content: center;\n}\n\n#container {\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: space-around;\n\n}\n\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,sBAAsB;;AAE1B;;AAEA;IACI,mBAAmB;IACnB,SAAS;IACT,UAAU;AACd;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,eAAe;IACf,iBAAiB;IACjB,YAAY;;AAEhB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,WAAW;IACX,gBAAgB;IAChB,uBAAuB;IACvB,uBAAuB;IACvB,aAAa;IACb,eAAe;IACf,qBAAqB;IACrB,oBAAoB;IACpB,eAAe;IACf,kBAAkB;IAClB,YAAY;IACZ,cAAc;;;AAGlB;;AAEA;IACI,uBAAuB;IACvB,iBAAiB;IACjB,MAAM;IACN,QAAQ;;AAEZ;;AAEA;IACI;;;AAGJ;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,eAAe;IACf,uBAAuB;IACvB,kBAAkB;IAClB,SAAS;IACT;AACJ;;AAEA;IACI,uBAAuB;IACvB,kBAAkB;AACtB;;AAEA;IACI,qBAAqB;AACzB;;AAEA;IACI,qBAAqB;AACzB;;AAEA;IACI,YAAY;;AAEhB;;AAEA;IACI,sBAAsB;IACtB;AACJ;;AAEA;IACI,eAAe;IACf,WAAW;IACX,UAAU;IACV,SAAS;IACT,uBAAuB;IACvB,YAAY;IACZ,aAAa;AACjB;;;AAGA;IACI,kBAAkB;AACtB;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,YAAY;IACZ,qBAAqB;;AAEzB;;AAEA;IACI,YAAY;IACZ,uBAAuB;AAC3B;;AAEA;IACI,aAAa;IACb,eAAe;IACf,6BAA6B;;AAEjC","sourcesContent":["html {\n    box-sizing: border-box;\n\n}\n\n*, *:before, *:after{\n    box-sizing: inherit;\n    margin: 0;\n    padding: 0;\n}\n\nbody {\n    display: flex;\n    flex-direction: column;\n    flex-wrap: wrap;\n    min-height: 100vh;\n    width: 100vw;\n\n}\n\n.project {\n    display: flex;\n    flex-direction: column;\n    width: 44vw;\n    min-height: 10vh;\n    max-height: max-content;\n    border: 1px solid black;\n    padding: 1rem;\n    flex-wrap: wrap;\n    word-break: break-all;\n    box-shadow: 5px 10px;\n    cursor: pointer;\n    position: relative;\n    gap: 0.33rem;\n    margin: 1.5rem;\n    \n\n}\n\n.delProjBtn {\n    background-color: white;\n    position:absolute;\n    top: 0;\n    right: 0;\n    \n}\n\n.editProjTitleBtn {\n    font-size:larger\n    \n\n}\n\n.none {\n    display: none;\n}\n\n.move {\n    cursor: pointer;\n    background-color: white;\n    position: absolute;\n    bottom: 0;\n    right: 0\n}\n\n.toDoNoteInput {\n    border: 1px solid black;\n    position: relative;\n}\n\n.text {\n    white-space: pre-wrap;\n}\n\n.modInput {\n    white-space: pre-wrap;\n}\n\n.opaque {\n    opacity: 0.1;\n    \n}\n\n.opaqueColor {\n    color: rgba(0,0,0,0.1);\n    border-color: rgba(0,0,0,0.1)\n}\n\n.transitForm {\n    position: fixed;\n    z-index:100;\n    left: 50vw;\n    top: 35vh;\n    border: 1px solid black;\n    color: black;\n    padding: 2rem;\n}\n\n\n.hidden {\n    visibility: hidden;\n}\n\n.headerChild{\n    margin-left: auto;\n}\n\n.moving {\n    color: green;\n    background-color: red;\n    \n}\n\n#header {\n    display:flex;\n    justify-content: center;\n}\n\n#container {\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: space-around;\n\n}\n\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var _i = 0; _i < this.length; _i++) {
        var id = this[_i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i2 = 0; _i2 < modules.length; _i2++) {
      var item = [].concat(modules[_i2]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/helpers/DOM.js":
/*!****************************!*\
  !*** ./src/helpers/DOM.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DOMGeneral": () => (/* binding */ DOMGeneral)
/* harmony export */ });
const DOMGeneral = function(){
    
    const elementInit = function(elem, attrsObj={},textString=''){
        
        const element = document.createElement(elem);
        
        if (Object.keys(attrsObj).length > 0){
            Object.keys(attrsObj).forEach(function(att){
            element.setAttribute(att, attrsObj[att])
        })
    }   
        if (textString.length > 0){
            element.textContent = textString;
        }

        return element       

    };

   const selectElem = function(selectorString){

       if (selectorString[0] === '#'){
           return document.querySelector(selectorString)
       }
       else {
           return document.querySelectorAll(selectorString);
       }
       
   };

   return {
       elementInit, 
       selectElem,
   }

}





/***/ }),

/***/ "./src/helpers/base.js":
/*!*****************************!*\
  !*** ./src/helpers/base.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "baseCreate": () => (/* binding */ baseCreate)
/* harmony export */ });
const baseCreate = function(storage){
      
const _storage = storage || new Array();

(function(){
    if (!Array.isArray(_storage)){
        throw 'Error! Argument must be an array';
    }
    })()
    
const add = function(elem){
    _storage.push(elem);

};

const remove = function(elem, index=0){
    if (index === 0){
        for (let i = index; i < _storage.length; i++){
            if(_storage[i] === elem){
                _storage.splice(i,1);
                break;
           }
         }         
       }
       else if (index > 0 && index < _storage.length){
           _storage.splice(index, 1)
       }  
};

const updateByLocation = function(index, replace){
        if (index > 0 && index < _storage.length){
            _storage.splice(index,1,replace);
        }

};

const updateByElement = function(elem, replace){
        for (let x = index; x < _storage.length; x++){
            if(_storage[x] === elem){
                _storage.splice(x,1, replace);
                break;
            }}
};


const move = function(index, target){
    if (index >= 0 && index <_storage.length && target >= 0 && target <_storage.length){
        const moved = _storage[index];
        _storage.splice(index,1);
        _storage.splice(target,0,moved)
    
    }   
    else if(index >= 0 && index <_storage.length && target >= _storage.length) {
        const replacement = _storage[index];
        _storage.splice(index, 1);
        _storage.push(replacement);

    }    
};

const swap = function(indexA, indexB){
    if (indexA >= 0 && indexA <_storage.length && indexB >= 0 && indexB <_storage.length){
        
       [_storage[indexA], _storage[indexB]] = [_storage[indexB], _storage[indexA]]
    }

};

const copy = function (index){
    if (index >= 0 && index < _storage.length){
        let clone = _storage[index];
        _storage.push(clone);
    }
}
    
    return {
        add,
        remove,
        updateByLocation,
        updateByElement,
        move,
        swap,
        copy
    }   
}



/***/ }),

/***/ "./src/helpers/events.js":
/*!*******************************!*\
  !*** ./src/helpers/events.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "events": () => (/* binding */ events)
/* harmony export */ });
const events = function(){

    const _myEvents = {};

    const _isEventHere = function(name){
        return _myEvents.hasOwnProperty(name);
    }

    const _addHandler = function(name, newHandler){       
        
        if (!_isEventHere(name)){
                _myEvents[name] = [];
            }

        _myEvents[name].push(newHandler)                          
     };

    const removeHandler = function(name, toRemove){

        if (!_isEventHere(name)){
                return;
        }
            
        const index = _myEvents[name].indexOf(toRemove);
        _myEvents[name].splice(index, 1)

    };

    const _fireMe = function(name, ...optionalArg){
            
        if (!_isEventHere(name)){
            _myEvents[name] = [];
        }

        _myEvents[name].forEach(function(h){
               return h(...optionalArg)
        })
    };

    const publish = function(name, ...optionalArg){ 
       
        if (!_isEventHere(name)){
            _myEvents[name] = [];
        };

        _fireMe(name, ...optionalArg)
        
    };

    const subscribe = function(name, newHandler){

        if (!_isEventHere(name)){
            _myEvents[name] = [];
        };
   
        _addHandler(name, newHandler)
        
    }; 

            
    return {
        publish,
        subscribe,
        removeHandler
    }    
}



/***/ }),

/***/ "./src/projectevents.js":
/*!******************************!*\
  !*** ./src/projectevents.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "projectEvents": () => (/* binding */ projectEvents)
/* harmony export */ });
/* harmony import */ var _helpers_events__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers/events */ "./src/helpers/events.js");


let projectEvents = (0,_helpers_events__WEBPACK_IMPORTED_MODULE_0__.events)();

projectEvents.delegator = function(event){
      switch(true){
         case event.target.classList.contains('revealForm') : projectEvents.publish('reveal', event);
           break;
         case event.target.classList.contains('cancelNewProject') : projectEvents.publish('cancelCreateNote', event);
           break;
         case event.target.classList.contains('projectForm'): projectEvents.publish('create', document.querySelector('#titleInp').value);
                                                              projectEvents.publish('saved');
                                                              event.preventDefault();
           break;
         case event.target.classList.contains('project'): projectEvents.publish('view', event);
           break;
         case event.target.classList.contains('itemTitle'): projectEvents.publish('view', event);
           break;           
         case event.target.classList.contains('addtoDoList'): projectEvents.publish('chooseTitle', event)
           break;
         case event.target.classList.contains('chooseTitleForm'): projectEvents.publish('inputOrList', event)
           break;
         case event.target.classList.contains('chooseNoteType'): projectEvents.publish('noteToDoType', event);
                                                                 event.preventDefault();
           break;
         case event.target.classList.contains('cancelTitle') : projectEvents.publish('abortNoteTypeForm', event);
                                                               event.preventDefault();
           break; 
         case event.target.classList.contains('cancelChoice') : projectEvents.publish('abortNoteTypeForm',event);
                                                                event.preventDefault();
           break;
         case event.target.classList.contains('addCheck') : projectEvents.publish('newCheckItem', event);
           break;
         case event.target.classList.contains('cancel') : projectEvents.publish('cancelNote',event);
                                                          event.preventDefault()
           break;
         case event.target.classList.contains('cancelTrigger') : projectEvents.publish('trigger',event);
           break;
         case event.target.classList.contains('submitTrigger') : projectEvents.publish('trigger',event);
           break;
         case event.target.classList.contains('edit') : projectEvents.publish('modifyElem',event);
           break;
         case event.target.classList.contains('submitNote') : projectEvents.publish('submitNote', event);
                                                              event.preventDefault();
                                                              projectEvents.publish('saved');
           break;
         case event.target.classList.contains('revertMod') : projectEvents.publish('revert',event);
           break;
         case event.target.classList.contains('submitMod') : projectEvents.publish('submitMod',event);
                                                             projectEvents.publish('saved');
           break;
         case event.target.classList.contains('remove') : projectEvents.publish('delete', event);
                                                          projectEvents.publish('saved');
           break;
         case event.target.classList.contains('deleteCheck') : projectEvents.publish('deleteCheck', event);
                                                               projectEvents.publish('saved');
           break;
         case event.target.classList.contains('check') : projectEvents.publish('recordCheck', event);
                                                         projectEvents.publish('saved');
           break;
         case event.target.classList.contains('move') : projectEvents.publish('moveItem', event);                                                        
           break;

}}
 



/***/ }),

/***/ "./src/projects.js":
/*!*************************!*\
  !*** ./src/projects.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "singletoDoNote": () => (/* binding */ singletoDoNote),
/* harmony export */   "singleProj": () => (/* binding */ singleProj),
/* harmony export */   "mainInterface": () => (/* binding */ mainInterface)
/* harmony export */ });
/* harmony import */ var _helpers_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers/base */ "./src/helpers/base.js");
/* harmony import */ var _projectevents__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projectevents */ "./src/projectevents.js");




//Template for a todo-note 

const singletoDoNote = function(name){


   const noteStorage = new Array();
   const toDoNote = (0,_helpers_base__WEBPACK_IMPORTED_MODULE_0__.baseCreate)(noteStorage);
   
   const addNote = function(note){
      toDoNote.add(note);
   }
   
   return {toDoNote,
           name,
           noteStorage,
           addNote
           
}
}
//

//Template for a single project

const singleProj = function(name){

   const projStorage = new Array();
   const project = (0,_helpers_base__WEBPACK_IMPORTED_MODULE_0__.baseCreate)(projStorage);
   
   
   const addToProject = function(name){
      const todo = singletoDoNote(name)
      project.add(todo);
                                       
   }

   return {project,
           name,
           addToProject,
           projStorage 
   }

} 

//

//Overall Interface

const mainInterface = (function(){
   
   const _overallStorage = new Array();
   const allToDo = (0,_helpers_base__WEBPACK_IMPORTED_MODULE_0__.baseCreate)(_overallStorage);

   const newProj = function(name){
      const proj = singleProj(name);
      allToDo.add(proj);

   }
       
   const transferToLocalStorage = function(){
         return localStorage.setItem('access', JSON.stringify(_overallStorage))
   } 

   const _findProj = function(event){
      const containerChildren = Array.from(document.querySelector('#container').children) 
      const projIndex = containerChildren.filter(child => child.classList.contains('project')).indexOf(event.target.closest('.project'));   
      return projIndex
   }


   const _findToDo = function(event){
      const project = event.target.closest('.project');
      const projContainerChildren = Array.from(document.querySelector(`#container${project.dataset.id}`).children); 
      const toDoIndex = projContainerChildren.filter(child => child.classList.contains('toDoNoteInput')).indexOf(event.target.closest('.toDoNoteInput'));
      return toDoIndex
   }


   const appendToProj = function(event){
      
      const index = _findProj(event);
      const domProject = event.target.closest('.project');
      const currentProj = _overallStorage[index];

      const formRetriever = function(){
         const formsContainer = Array.from(domProject.children).filter(child => child.classList.contains('toDoContainer'))[0];
         const allForms = Array.from(formsContainer.children)
      return allForms
    }

      const projectForms =  formRetriever() 
      const form = event.target === document.querySelector('#submitNote') ? event.target.parentElement : projectForms[projectForms.length - 1];
      
      const formChildren = Array.from(form.children);
      const title = formChildren.filter(child =>  child.id === `itemTitle${domProject.dataset.id}${form.dataset.id}`)
      const name = title[0].firstChild.nodeValue;
      const formCount = projectForms.length - 1;
      
      if (currentProj.projStorage.length - 1 == formCount && event.target === document.querySelector('#submitNote')){ 
         return
      }
      
     currentProj.addToProject(name)
      return

   }

   const appendNoteToItem = function(event){

      const input = document.querySelector('#temporaryInput');
      if (input.value === ''){return};

      const projIndex = _findProj(event);
      const toDoIndex = _findToDo(event);
      const currentToDo = _overallStorage[projIndex].projStorage[toDoIndex];
      const form = event.target.parentElement;
      const formChildren = Array.from(form.children);
      

      const note = function(){ 
        if( form.classList.contains('checkbox')){

        const labels = formChildren.filter(child => child.classList.contains('edit'))
        const currentLabel = labels[labels.length - 1];

         return  {'check': false,
                   'label': currentLabel.firstChild.nodeValue}
        }
        else {

        const texts = formChildren.filter(child => child.classList.contains('text')) 
        const currentText = texts[0];
        
        return currentText.firstChild.nodeValue
       }}
      currentToDo.addNote(note());
      return   
      }

   const removeItem = function(event){
      const index = _findProj(event);
      const proj = _overallStorage[index];
      if (event.target.parentElement.classList.contains('project')){
         allToDo.remove(proj);
         return
         
      }
      else if (event.target.parentElement.classList.contains('toDoNoteInput')){
         const formIndex = _findToDo(event)
         proj.projStorage.splice(formIndex, 1);
         return 

      }

      return

   }


   const recordCheck = function(event){
      const check = event.target;
      const form = event.target.parentElement;
      const formChildren = Array.from(form.children);
      const formChecks = formChildren.filter(child => child.classList.contains('check'));
      
      const projIndex = _findProj(event);
      const toDoIndex = _findToDo(event);
      const checkboxIndex = formChecks.indexOf(check);
      

      const target = _overallStorage[projIndex].projStorage[toDoIndex].noteStorage[checkboxIndex]
      target.check === false ? target.check = true : target.check = false;
      return
   }

   const deleteCheckFromStorage = function(event){
      const projIndex = _findProj(event);
      const proj = _overallStorage[projIndex];
      const formIndex = _findToDo(event)

      const form = event.target.closest('.toDoNoteInput');
      const formChildren = Array.from(form.children);
      const formLabels = formChildren.filter(child => child.classList.contains('edit'));
      const itemIndex = formLabels.indexOf(event.target.parentElement);

      proj.projStorage[formIndex].noteStorage.splice(itemIndex, 1);
      return
   }

   const modifyInStorage = function(event){
      const input = document.querySelector('#modInput');
      const projIndex = _findProj(event);
      const proj = _overallStorage[projIndex];
      const toDoIndex = event.target.closest('.toDoNoteInput') ? _findToDo(event) : false;
      const toDoNote = toDoIndex || (toDoIndex === 0) ? proj.projStorage[toDoIndex]: false;
      const form = event.target.parentElement;
      const formChildren = Array.from(form.children);
      const buttonChecker = formChildren.filter(child => child.nodeName == 'BUTTON' && child.classList.contains('disabledEdit'))


      if (buttonChecker.length > 0){
         if (event.target.parentElement.classList.contains('project')){
            proj.name = input.value;
            return 
             
         }
         else if (event.target.parentElement.classList.contains('itemTitle')){
            toDoNote.name = input.value;
            return

         }}
         else {

//Explainer: targetIndex uses the submitMod button as the index of the element,
//because the modifyElem event, which fired prior to this one, replaced the original
//element (the one we're targeting) in the DOM with the 'mod' stuff including event.target (i.e submitMod).

            const targets =  form.classList.contains('freeForm') ? false : formChildren.filter(child => child.classList.contains('disabledEdit') || child === event.target)
            const targetIndex = form.classList.contains('freeForm') ? false : targets.indexOf(event.target)  
            
            form.classList.contains('freeForm') ? toDoNote.noteStorage[0] = input.value : toDoNote.noteStorage[targetIndex].label = input.value;
            return 
         }
               
   }

   const createCacheForMoving = function(event){
      
      if (event.type === 'mousedown' && event.button !== 0){
            return}

      if (event.type === 'click'){
         return
      }
      const cache = {};
      cache['projIndex'] = _findProj(event);
      event.target.classList.contains('moveNote') ? cache['noteIndex'] = _findToDo(event) : false
      allToDo.add(cache);
      return
    }

  const exhaustCacheForMoving = function(event){
         
      if (event.type === 'mousedown'){
         if (event.button !== 0){
            return
         }
         document.addEventListener('mouseup', exhaustCacheForMoving, {once:true})
         return
      }
      if (event.type === 'click'){
         return
      }
      
     const target = document.querySelector('.moved'); 
     const cache = _overallStorage[_overallStorage.length - 1];

     const findTarget = (function(){
          const projectsContainer = Array.from(document.querySelector('#container').children) 
          const projLocation = projectsContainer.filter(child => child.classList.contains('project')).indexOf(target.closest('.project'));
          return projLocation
     })()
     
     if (target.classList.contains('project')){
      cache.projIndex !== findTarget ? allToDo.move(cache.projIndex,findTarget) : false;
     }
     else if (target.classList.contains('toDoNoteInput')){
        const initProj = _overallStorage[cache.projIndex];
        const movedNote = initProj.projStorage[cache.noteIndex];
        const targetProj = _overallStorage[findTarget];
        const toDoLocation = (function(){
           const targetProject = target.closest('.project');
           const trgtProjContChildren = Array.from(document.querySelector(`#container${targetProject.dataset.id}`).children); 
           const targetToDoIndex = trgtProjContChildren.filter(child => child.classList.contains('toDoNoteInput')).indexOf(target.closest('.toDoNoteInput'));
           return targetToDoIndex
           })();

        if(cache.projIndex !== findTarget){
         
         //delete from previous project location
         initProj.projStorage.splice(cache.noteIndex,1);
         
         //insert in new project location
         targetProj.projStorage.splice(toDoLocation,0,movedNote);
           
        }

       else if (cache.noteIndex !== toDoLocation){
         targetProj.projStorage.splice(cache.noteIndex,1);
         targetProj.projStorage.splice(toDoLocation,0,movedNote);
              
      }}
     
    
     allToDo.remove(cache)
     _projectevents__WEBPACK_IMPORTED_MODULE_1__.projectEvents.publish('saved');
     target.classList.toggle('moved',false);

     return

  }
  
  const regenBackProj = function(){

          const accessAll = JSON.parse(localStorage.access);
          accessAll.forEach(function(elem){ 
             newProj(elem.name)
             const backProj = _overallStorage[_overallStorage.length - 1];

             const _regenBackToDoForms = (function(){
               if(elem.projStorage.length > 0){ 
               elem.projStorage.forEach(function(toDoForm){
                  backProj.addToProject(toDoForm.name) 
                  const backForm = backProj.projStorage[backProj.projStorage.length - 1]

                  const _regenBackNotes = (function(){
                     if(toDoForm.noteStorage.length > 0){
                     toDoForm.noteStorage.forEach(function(note){
                          backForm.addNote(note)
                     })}

                  })()
               })}})()             

         })
          
  }

  const retrieveData = function(event){
   const projIndex = _findProj(event);
   const backProj = _overallStorage[projIndex]  
   
   
   if(event.target.parentElement.classList.contains('project')){              
      return backProj.name
   }
   else {
         const toDoIndex = _findToDo(event);
         const backToDo = _overallStorage[projIndex].projStorage[toDoIndex];
         
         if(event.target.parentElement.classList.contains('itemTitle')){
            return backToDo.name
            
         }
         else {
            const frontToDo = event.target.parentElement;
            if (frontToDo.classList.contains('freeForm')){  
               return backToDo.noteStorage[0]
            }
            else if (frontToDo.classList.contains('checkbox')){
      
      //Array of all checkboxes including the activated button, and excluding the checkbox before the label (which is currently modInput)
      // so that the button's index position corresponds to the label in the backend which has not yet been modified and therefore we can
      // revert the modified data to its original state based on that. 
     
             const modInput = document.querySelector('#modInput');
             const initChildren = Array.from(frontToDo.children);
             const children = initChildren.filter(child => child === event.target || child.classList.contains('check') && child !== modInput.previousElementSibling);
             const noteIndex = children.indexOf(event.target);
             return backToDo.noteStorage[noteIndex].label
            }
      }}
  }
   
    
   return {
      newProj,
      transferToLocalStorage,
      appendToProj,
      removeItem,
      appendNoteToItem,
      recordCheck,
      deleteCheckFromStorage,
      modifyInStorage,
      createCacheForMoving,
      exhaustCacheForMoving,
      regenBackProj,
      retrieveData
      
   }
  
   
})()



/***/ }),

/***/ "./src/projectsDOM.js":
/*!****************************!*\
  !*** ./src/projectsDOM.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "templateDOMStructs": () => (/* binding */ templateDOMStructs)
/* harmony export */ });
/* harmony import */ var _helpers_DOM__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers/DOM */ "./src/helpers/DOM.js");
/* harmony import */ var _projectevents__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projectevents */ "./src/projectevents.js");
/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projects */ "./src/projects.js");








const templateDOMStructs = function (){

    const DOM = (0,_helpers_DOM__WEBPACK_IMPORTED_MODULE_0__.DOMGeneral)()
    const delegator = _projectevents__WEBPACK_IMPORTED_MODULE_1__.projectEvents.delegator

    const createProject = function(name){
         if (name === ''){return}

         const reference = (function(){
            const _allDOMProjs =  Array.from(DOM.selectElem('.project'));
            if(_allDOMProjs.length === 0){
                return 0
            }
            const lastProj = _allDOMProjs[_allDOMProjs.length - 1]
            return parseInt(lastProj.dataset.id) + 1
            })()

         const proj = DOM.elementInit('div',{'id': `${name}${reference}`,
                                             'data-id':`${reference}`,
                                             'data-name': `${name}`,
                                             'class': 'project'},name
                                             )
        const remove = DOM.elementInit('button', {'class':'remove delProjBtn',
                                        'id':`remove${proj.dataset.id}`,
                                         'data-name': 'remove' }, 'X');
                                             
        const addToDoListBtn = DOM.elementInit('button', {'class': 'addtoDoList',
                                                           'data-name': 'add',
                                                           'id': `add${reference}`}, 'Add To-Do List');
        const modify = DOM.elementInit('button', {'class':'edit editProjTitleBtn'},'\u{270D}');
        const moveProject = DOM.elementInit('button', {'class':'move moveProject',
                                                        'type': 'button'},'\u{21F2}')
        proj.appendChild(remove);
        proj.appendChild(modify);
        proj.appendChild(DOM.elementInit('div',{ 'class':'none toDoContainer',
                                                  'data-name': 'container',
                                                   'id':`container${reference}`}));
        proj.appendChild(addToDoListBtn);
        proj.appendChild(moveProject);

        
        proj.onclick = delegator;
        moveProject.onmousedown = delegator;
                                                                      
        const container = DOM.selectElem('#container');
        container.appendChild(proj);
        
     }
     

     const createToDoNote = function(chosenSource){
        

        const input = DOM.selectElem('#temporaryInput'); 
        const submitTrigger = DOM.selectElem('#submitTrigger');
        const cancelTrigger = DOM.selectElem('#cancelTrigger');

        const project = (function(){
            if (chosenSource !== 'Checklist' && chosenSource !== 'Freeform'){
                const projs = Array.from(DOM.selectElem('.project'));
                return projs[projs.length - 1];
                
            }
            else {
                return input.parentElement;
            }

        })()


        const container = DOM.selectElem(`#container${project.dataset.id}`);
        const formReference = Array.from(container.children);
        
        const form = DOM.elementInit('form',{'class': 'toDoNoteInput',
                                                 'data-name': 'toDoNoteForm',
                                                 'id': `toDoNoteForm${project.dataset.id}${formReference.length}`,
                                                  'data-id':`${formReference.length}` })
        const submit = DOM.elementInit('button',{'type':'submit',
                                                   'id': 'submitNote', 
                                                  'class':'submitNote hidden',
                                                   },'')
        const cancel = DOM.elementInit('button', {'class':'cancel hidden',
                                                 'id':'cancelNote'}, '');
        
        const remove = DOM.elementInit('button', {'class':'remove none',
                                                   'data-name': 'remove',
                                                   'id':`remove${project.dataset.id}${formReference.length}`}, 'X');
       
        const provTitle = DOM.selectElem('#provTitle');
        const name = provTitle ? provTitle.value : chosenSource.name
        const title =   DOM.elementInit('label', {'class':'itemTitle',
                                                   'for':'itemTitle',
                                                   'data-name': 'itemTitle',                       
                                                   'name':'itemTitle',
                                                     'id':`itemTitle${project.dataset.id}${formReference.length}`,
                                                     },`${name}`,)
        const modify = DOM.elementInit('button', {'class':'edit'},'Edit');
        const moveNote = DOM.elementInit('button', {'class':'move moveNote',
                                                    'type': 'button'},'\u{21F2}')

        
        form.appendChild(submit);
        form.appendChild(cancel);
        form.appendChild(remove);
        form.appendChild(moveNote);
        form.appendChild(title);
        title.appendChild(modify)
        modify.disabled = true;
        provTitle ? provTitle.remove() : false
        
        moveNote.onmousedown = delegator;
        form.onsubmit = delegator;   
         
        container.classList.toggle('none', false);
        
         
        container.appendChild(form);


        const _generateChecklist = function(){ 
           const add = DOM.elementInit('button', {'class':'addCheck',
                                                     'data-name': 'addCheck',
                                                     'id':`addCheck${project.dataset.id}${formReference.length}`,
                                                     'data-class':`child${project.dataset.id}${formReference.length}` 
                                                     }, 'Add Item');                                                     
            form.appendChild(add);

            form.classList.add('checkbox')
            remove.classList.toggle('none',false);
            enableBtns();
       }


       const _generateFreeForm = function(){

        input.value = '';
        input.classList.toggle('none',false);
        form.classList.add('freeForm');

        submitTrigger.classList.toggle('none',false);
        cancelTrigger.classList.toggle('none',false);
        input.focus();
        
       }

       const _regenPrep = function(){
            
        submit.remove();
        cancel.remove();
        remove.classList.toggle('none', false);
        if (typeof chosenSource.noteStorage[0] === 'object' || chosenSource.noteStorage.length === 0){
             _generateChecklist()} 
       
        
    }
       
       switch(chosenSource){
           case 'Checklist' : _generateChecklist();
           break;
           case 'Freeform' : _generateFreeForm();
           break;
           default : _regenPrep();
           break;
       }

       return form

     }


     const disableBtns = function(trgt='n/a'){
        const allBtns = document.querySelectorAll('button');
        allBtns.forEach(btn =>  btn === trgt || btn.classList.contains('none') || btn.classList.contains('hidden') ? btn.disabled = false : btn.disabled = true);

        const allEditables = DOM.selectElem('.edit');
        allEditables.forEach(itm =>  itm === trgt || itm.classList.contains('none') ? false : itm.classList.toggle('disabledEdit', true));
        const allDisabled = DOM.selectElem('.disabledEdit');
        allDisabled.forEach(itm => itm.classList.toggle('edit',false));

        const projs = DOM.selectElem('.project')
        projs.forEach(proj => proj.classList.toggle('disabledToggle',true))

    }
    
    
    const enableBtns = function(){
        const all = document.querySelectorAll('button');
        all.forEach(btn => btn.disabled = false);

        const edits = DOM.selectElem('.disabledEdit');
        edits.forEach(itm => itm.classList.toggle('edit',true));
        edits.forEach(itm => itm.classList.toggle('disabledEdit',false));
        const deleteBtns = DOM.selectElem('.deleteCheck');
        deleteBtns.forEach(btn => btn.classList.toggle('none',false));        

        const projs = DOM.selectElem('.project')
        projs.forEach(proj => proj.classList.toggle('disabledToggle',false))
    }

     const modifyElement = function(event){

        event.preventDefault();
          
         const form = event.target.parentElement;
         const modInput = (function(){
         if (form.classList.contains('freeForm')){    
            let modTextArea = DOM.elementInit('textarea',{'label':'freeForm',
            'name':'freeForm',
            'autocomplete':'off',
            'required':'required',
            'id':'modInput',
           'class': 'modInput',
           'rows' : '3',
           'cols' : '30'});

           return modTextArea;  
        }
        
        else {
            let modCheckInput = DOM.elementInit('input',{'type':'text',
            'autocomplete':'off',
            'required':'required',
            'class': 'modInput',
             'id':'modInput',});
            
             return modCheckInput   
        } 
    })()

         const submit = DOM.elementInit('button',{'type':'submit',
        'class':'submitMod',
         'id': 'submitMod'
         },'Submit Note')
         const revert = DOM.elementInit('button',{
         'class':'revertMod',
          },'Revert Back') 
                                     
        disableBtns();

         const _replaceWithInput = (function(){
            if(event.target.parentElement.classList.contains('itemTitle') || event.target.parentElement.classList.contains('project')){
                const titleToEdit = event.target.parentElement;
                modInput.value = titleToEdit.firstChild.nodeValue;
                titleToEdit.firstChild.nodeValue = '';
                titleToEdit.appendChild(modInput);
            }
            else{
                const textToEdit = event.target
                modInput.value = textToEdit.firstChild.nodeValue
                textToEdit.replaceWith(modInput); 

            } 
            modInput.insertAdjacentElement('afterend',submit);
            submit.insertAdjacentElement('afterend',revert);
       })()
        
     }

     const submitModifiedElement = function(event){
        
        event.preventDefault();
        const form = event.target.parentElement;
        const input = event.target.previousElementSibling;
        const revert = event.target.nextElementSibling;
        const label = DOM.elementInit('label', {'for': `${input.value}`, 'class':'edit'},`${input.value}`);
        const text = DOM.elementInit('p', {'class':'text edit'}, `${input.value}`);
        const del = DOM.elementInit('button', {'class': 'deleteCheck none'},'delete' ) 

        
        if(input.value === ''){return};

        if(form.classList.contains('checkbox')){
            input.replaceWith(label);
            label.appendChild(del);

        }
        else if (form.classList.contains('freeForm')){
            input.replaceWith(text); 
        }

        else {
            const value = input.value;
            const newTitle = event.target.parentElement;
            newTitle.firstChild.nodeValue = value;
            input.remove();
        }
        
        enableBtns();
    
        revert.remove();
        event.target.remove();


        return         
     }

     const revertModifiedElement = function(event){
        
        event.preventDefault();
        const form = event.target.parentElement;
        const submit = event.target.previousElementSibling;
        const input = submit.previousElementSibling;
        const retrieveData =  _projects__WEBPACK_IMPORTED_MODULE_2__.mainInterface.retrieveData(event);
        const originalLabel = DOM.elementInit('label', {'for': `${retrieveData}`, 'class':'edit'},`${retrieveData}`); 
        const originalText = DOM.elementInit('p', {'class':'text edit'}, `${retrieveData}`); 
        const del = DOM.elementInit('button', {'class': 'deleteCheck none'},'delete' ) 


        if(form.classList.contains('checkbox')){
            input.replaceWith(originalLabel);
            originalLabel.appendChild(del);

        }
        else if (form.classList.contains('freeForm')){
            input.replaceWith(originalText); 
        }

        else {
            const value = retrieveData; 
            const originalTitle = event.target.parentElement
            originalTitle.firstChild.nodeValue = value;
            input.remove();
        };
         
        enableBtns();
    
        submit.remove();
        event.target.remove();
        return         
     }
     
     
    const chooseToDoTitleForm = function(event){
        const domProject = event.target.parentElement;

        const _generateTitleForm = (function(){
             const form =  DOM.elementInit('form', {'class': 'chooseTitleForm transitForm',
                                                     'id': 'chooseTitleForm'})
             const label = DOM.elementInit('label',{'for':'chooseYourTitle'},'Choose Your Note\'s Title');
  
             const titleInput = DOM.elementInit('input',{'type':'text',
                                                'autocomplete':'off',
                                                 'required':'required',
                                                 'id':'provTitle',
                                                 'class': 'provTitle'},);
            const submitTitle = DOM.elementInit('button', {'type':'submit'}, 'Submit');
            const cancelTitle = DOM.elementInit('button', {'class':'cancelTitle'}, 'Cancel');
            form.appendChild(label);
            form.appendChild(titleInput);
            form.appendChild(submitTitle);
            form.appendChild(cancelTitle);
            form.onsubmit = delegator;
            return form
        })() 
        
        domProject.appendChild(_generateTitleForm)
        return

    }
    const submitToDoTitle = function(event){
       
        if(event.type === 'click'){return}
        event.preventDefault(); 
        const provTitle = DOM.selectElem('#provTitle');
        const domProject = event.target.parentElement.parentElement;
        domProject.appendChild(provTitle);
        provTitle.classList.toggle('none',true);
        
        event.target.classList.toggle('none',true);
        return
        
    }
     
     const chooseNoteType = function(event){
        if(event.type === 'click'){return}
        const domProject = event.target.parentElement;

         const form =  DOM.elementInit('form', {'class': 'chooseNoteType transitForm',
                                                    'id': 'noteTypeForm'                      })
         const label = DOM.elementInit('label',{'for':'chooseNoteType'},'Choose Your Note Type');
         const select = DOM.elementInit('select',{'class':'select',
                                                    'id': 'select' });
         const optGroup = DOM.elementInit('optgroup',{'label': 'Note Options'}, 'Choose your note type');
         const checklistOpt = DOM.elementInit('option',{'name': 'checklist',
                                                         'class': 'checklist'},'Checklist');
         const inputOpt = DOM.elementInit('option',{'name': 'input',
                                                     'class': 'input'},'Freeform');
         const choice = DOM.elementInit('button', {'type':'submit'}, 'Submit');
         const cancel = DOM.elementInit('button', {'class':'cancelChoice'}, 'Cancel');
         
         select.appendChild(optGroup);
         optGroup.appendChild(checklistOpt);
         optGroup.appendChild(inputOpt);
         form.appendChild(label);
         form.appendChild(select);
         form.appendChild(DOM.elementInit('br'));
         form.appendChild(choice);
         form.appendChild(cancel)

         disableBtns();
         form.onsubmit = delegator;
         domProject.appendChild(form);

         return form
    }
     
     const revealCreateForm = function(){
        let createForm = DOM.selectElem('#createForm');
        createForm.classList.toggle('none', false);

        let submitCreateForm = DOM.selectElem('#submitCreateForm');
        submitCreateForm.classList.toggle('none', false);

        let cancelNewProject = DOM.selectElem('#cancelNewProject');
        cancelNewProject.classList.toggle('none',false);
        
     }

     const resetCreateForm = function(){
         let createForm = DOM.selectElem('#createForm');
         createForm.classList.toggle('none', true);

        let submitCreateForm = DOM.selectElem('#submitCreateForm');
        submitCreateForm.classList.toggle('none', true);

        let cancelNewProject = DOM.selectElem('#cancelNewProject');
        cancelNewProject.classList.toggle('none',true);

         let titleInp = DOM.selectElem('#titleInp');
         titleInp.value = '';
     }

     const toggleSize = function(event){
        if (event.target.classList.contains('disabledToggle')){
            return
        }
        if (event.target.classList.contains('project')){

        const container = DOM.selectElem(`#container${event.target.dataset.id}` )                          
        container.classList.toggle('none');

        }

        else {
        
        const form = event.target.parentElement;
        const project = event.target.parentElement.parentElement;    
        const formChildren = Array.from(form.children);
        formChildren.forEach(itm => itm.dataset.class === `child${project.dataset.id}${form.dataset.id}` ? itm.classList.toggle('none') : false)       
            
        }
     }

     const noteTypeGenerator = function(event){ 

        if(event.type === 'click'){return}

        const getSelected = (function(){
             const select =  DOM.selectElem('#select');
             return select.options[select.selectedIndex].value;
        })()
        
        const _generateTemporaryInput = (function(){
            const project = DOM.selectElem('#noteTypeForm').parentElement;
           
        if (getSelected === 'Checklist'){    
            let temporaryInput = DOM.elementInit('input',{'type':'text',
            'autocomplete':'off',
            'required':'required',
            'id':'temporaryInput',
           'class': 'temporaryInput none'});  
            project.appendChild(temporaryInput);
        }
        
        else {
            let textArea = DOM.elementInit('textarea', {'id':'temporaryInput',
                'name':'freeForm',
                'label':'freeForm',
                'class':'temporaryInput none',
                'autocomplete':'off',
                'required':'required',
                'rows' : '4',
                'cols' : '50' });
            project.appendChild(textArea);
             
        }
        const _generateTriggerButtons = (function(){

            const submit = DOM.elementInit('button',{'type':'button',
            'id': 'submitTrigger', 
           'class':'submitTrigger none',
            },'Submit Note')
            const cancel = DOM.elementInit('button', {'class':'cancelTrigger none',
          'id':'cancelTrigger'}, 'Cancel');

          project.appendChild(submit);
          project.appendChild(cancel);

        })()
        
        
        })()
   
        _projectevents__WEBPACK_IMPORTED_MODULE_1__.projectEvents.publish('createNote', getSelected);
        _projectevents__WEBPACK_IMPORTED_MODULE_1__.projectEvents.publish('deleteNoteTypeForm', event);
        getSelected === 'Checklist' ? _projectevents__WEBPACK_IMPORTED_MODULE_1__.projectEvents.publish('cleanForm',event): false;
        _projectevents__WEBPACK_IMPORTED_MODULE_1__.projectEvents.publish('saved');
        
        
        return getSelected
     }



    const deleteForms = function(event){

        if(event.target.nodeName != 'BUTTON' && event.type === 'click'){return}  
              
        const _cancelNoteTypeForm = function(){

            const _deleteProvTitle = function(){
                 const provTitle =  DOM.selectElem('#provTitle')
                 provTitle ? provTitle.remove() : false
                 return   
            };

            const _deleteAddNoteForm = (function(){
                 const noteTypeForm = DOM.selectElem('#noteTypeForm');
                 noteTypeForm ? noteTypeForm.remove() : false;
                 return

             })();
            
            event.target.className === 'cancelChoice' ? _deleteProvTitle() : false; 
            return
        }


         let deleted = DOM.selectElem('#chooseTitleForm');
         deleted ? deleted.remove() : _cancelNoteTypeForm()
         
         return


    }


    const cleanToDoForm = function(){
      
      const form = DOM.selectElem('#submitNote').parentElement;
      const project = DOM.selectElem('#temporaryInput').parentElement;  

      const _deleteTransitoryStuff = (function(){  
        let deleted = DOM.selectElem('#temporaryInput');
        deleted.remove();

        deleted = DOM.selectElem('#submitTrigger');
        deleted.remove();

        deleted = DOM.selectElem('#cancelTrigger');
        deleted.remove();

        deleted = DOM.selectElem('#submitNote');
        deleted.remove();

        deleted = DOM.selectElem('#cancelNote');
        deleted.remove(); 
    })()
      

      const _removeWhereEmpty = (function(){
        
        const formChildren = Array.from(form.children);
        const child = document.querySelector(`[data-class=child${project.dataset.id}${form.dataset.id}]`)
        !(formChildren.includes(child)) ? form.remove() : false;

    })()

        return
    }

    const toggleOpaque = function(event){
        const mainContChildren = Array.from(DOM.selectElem('#mainContainer').children);
        const containerChildren = Array.from(DOM.selectElem('#container').children);
        const header = DOM.selectElem('#header');
        const headerChildren = Array.from(header.children)
        const projs = function(){
                const projs = Array.from(DOM.selectElem('.project'));
                return projs
        }

        if(DOM.selectElem('#createForm').classList.contains('none') && headerChildren[0].classList.contains('opaque')){
            headerChildren.forEach(child => child.classList.toggle('opaque'), false )
            if(document.querySelector('.project')){
                projs().forEach(proj => proj.classList.toggle('opaque', false))
            }
            return

        }

       else if (event.target.classList.contains('revealForm')){
            headerChildren.forEach(child => child.classList.toggle('opaque', true))
            if(document.querySelector('.project')){
                projs().forEach(proj => proj.classList.toggle('opaque', true))
            }
            return
        }

        else {
        
        const projectChildren = Array.from(event.target.closest('.project').children);

        if(header.classList.contains('opaque')){
            mainContChildren.forEach(child => child.classList.toggle('opaque',false));
            containerChildren.forEach(child => child === event.target.closest('.project') ? child.classList.toggle('opaqueColor',false) : child.classList.toggle('opaque', false));
            projectChildren.forEach(child => child.classList.toggle('opaque', false))
            return
        }
        else{
            mainContChildren.forEach(child => child === DOM.selectElem('#container') ? false : child.classList.toggle('opaque'),true);
            containerChildren.forEach(child => child === event.target.closest('.project') ? child.classList.toggle('opaqueColor',true) : child.classList.toggle('opaque', true));
            projectChildren.forEach(child => child.classList.contains('transitForm') ? false : child.classList.toggle('opaque',true));
        }

    }
        
    }
        
    
    const generateNewAddCheck = function(event){
        
        event.preventDefault();
        const form = event.target.parentElement;
        const project = form.parentElement.parentElement;

        if(DOM.selectElem('#temporaryInput') && DOM.selectElem('#temporaryInput').label === 'freeForm'){
            DOM.selectElem('#temporaryInput').remove();
            DOM.selectElem('#submitTrigger').remove();
            DOM.selectElem('#cancelTrigger').remove();
        }

        if (!DOM.selectElem('#temporaryInput')){
        const temporaryInput = DOM.elementInit('input',{'type':'text',
        'autocomplete':'off',
        'required':'required',
        'id':'temporaryInput',
        'class': 'temporaryInput none'});


        project.appendChild(temporaryInput);

        const _generateTriggerButtons = (function(){

            const submit = DOM.elementInit('button',{'type':'button',
            'id': 'submitTrigger', 
           'class':'submitTrigger none',
            },'Submit Note')
            const cancel = DOM.elementInit('button', {'class':'cancelTrigger none',
          'id':'cancelTrigger'}, 'Cancel');

          project.appendChild(submit);
          project.appendChild(cancel);

        })()

        disableBtns(event.target);
    
        }

        if (!DOM.selectElem('#submitNote')){       
         const originalSubmit = DOM.elementInit('button',{'type':'submit',
        'id': 'submitNote', 
        'class':'submitNote hidden',
        },'')

        form.appendChild(originalSubmit);

        }
        
        if (!DOM.selectElem('#cancelNote')){       
            const cancel = DOM.elementInit('button',{
           'id': 'cancelNote', 
           'class':'cancel hidden',
           },'')
   
           form.appendChild(cancel);
    
        }

        const _revealCheckItem = (function(){
        const input = DOM.selectElem('#temporaryInput');
        const submit = DOM.selectElem('#submitTrigger');
        const cancel = DOM.selectElem('#cancelTrigger');
        input.classList.toggle('none',false);
        input.focus();
        disableBtns();
        submit.classList.toggle('none',false);
        cancel.classList.toggle('none',false);
        })()


        return

    }

    
      const _generateCheckItem = function(storedNote=false){  
        const input = DOM.selectElem('#temporaryInput');
        const project = (function(){
            if (storedNote){
                const projs = Array.from(DOM.selectElem('.project'));
                return projs[projs.length - 1];
                
            }
            else {
                return input.parentElement;
            }

        })()
        
        const form = (function(){
            if (storedNote){
                const container = Array.from(DOM.selectElem(`#container${project.dataset.id}`).children).filter(elem => elem.classList.contains('toDoNoteInput'))
                return container[container.length - 1];
                
            }
            else {
                return DOM.selectElem('#submitNote').parentElement;
            }

        })()

        const name = storedNote ? storedNote.label : input.value

        const del = DOM.elementInit('button', {'class': 'deleteCheck none'},'delete' ) 
        const totalChecks = DOM.selectElem('.check').length
       
        const checkbox = DOM.elementInit('input', {'type':'checkbox',
                                                    'id': `check${totalChecks + 1}`, 
                                                    'class':'check',
                                                    'data-class':`child${project.dataset.id}${form.dataset.id}`});
        const label = DOM.elementInit('label', {'for': `${name}`,
                                                 'class': 'edit',
                                                'data-class':`child${project.dataset.id}${form.dataset.id}`},`${name}`);
        const br = DOM.elementInit('br',{'data-class':`child${project.dataset.id}${form.dataset.id}`});

       
        label.appendChild(del);
        form.appendChild(checkbox);
        form.appendChild(label);
        form.appendChild(br);

        const _retrieveCheckValue = (function(){
            if (storedNote && storedNote.check){
                checkbox.checked = true;
            }
        })()

        return
    }

    const submitItem = function(){
    
    const input = DOM.selectElem('#temporaryInput');
    const project = input.parentElement;
    const form = DOM.selectElem('#submitNote').parentElement;
    const remove = DOM.selectElem(`#remove${input.parentElement.dataset.id}${form.dataset.id}`);
    
    if (input.value === ''){return};

    if (form.classList.contains('checkbox')){
        _generateCheckItem();
        input.classList.toggle('none', true);        
        return
    }

    
    const text = DOM.elementInit('p', {'class':'text edit',
                                      'data-class':`child${project.dataset.id}${form.dataset.id}`}, `${input.value}`);

    form.appendChild(text);
    remove.classList.toggle('none',false);

    return

   }

   const triggerEvents = function(event){
       const cancel = DOM.selectElem('#cancelNote')
       const submit = DOM.selectElem('#submitNote')

       event.target === DOM.selectElem('#submitTrigger') ? submit.click() : cancel.click()

   }

   const deleteItem = function(event){
       event.preventDefault();
       event.target.parentElement.remove();
    return
   }
   
   
   const deleteCheck = function(event){
       event.preventDefault();

       const label = event.target.parentElement
       const br = label.nextElementSibling;
       const check = label.previousElementSibling;
       const form = check.parentElement;
       const project = form.parentElement.parentElement;


       br.remove() 
       check.remove() 
       label.remove()
       
       const formChildren = Array.from(form.children);
       const child = document.querySelector(`[data-class=child${project.dataset.id}${form.dataset.id}]`)
       !(formChildren.includes(child)) ? form.remove() : false;
       
       return
    }

    const moveConstruct = function(event){ 
        
        if(event.type === 'click'){
            return
        }
        if(event.button !== 0){
            
            return
        }
        
        let currentDroppable = null;

        const target = event.target.classList.contains('moveNote') ? event.target.closest('.toDoNoteInput') : event.target.closest('.project')
        target.classList.toggle('moved',true);
        const clonedTarget = target.cloneNode(true);
        
        const _eventReplicator = function(){
            if (clonedTarget.classList.contains('project')){
                clonedTarget.onclick = delegator;
            }
            const moveBtns = Array.from(DOM.selectElem('.move')).filter(child => child.closest('.project').id === clonedTarget.closest('.project').id);
            
            moveBtns.forEach(btn => btn.onmousedown = delegator)
        }

        const _returnToDefault = function(){
            target.remove();
            clonedTarget.classList.toggle('none',false);
            _eventReplicator()
            
        }

        clonedTarget.classList.toggle('none',true);        
        target.parentElement.appendChild(clonedTarget);
        
        let shiftX = event.clientX - target.getBoundingClientRect().left;
        let shiftY = event.clientY - target.getBoundingClientRect().top;
        const moveBtn = event.target;

        const _commenceMove = (function(){
            
            target.style.position = 'absolute';
            target.style.zIndex = 1000;
            target.classList.contains('toDoNoteInput') ? target.style.width = '42vw' : false;
            event.target.classList.toggle('moving',true);
            document.body.appendChild(target);           

        })()
        

        const _moveAt = function(pageX, pageY){
            target.style.left = pageX - shiftX + 'px';
            target.style.top = pageY - shiftY + 'px'
        }

        const _onMouseMove = function(event){

            _moveAt(event.pageX,event.pageY);
            
            target.classList.toggle('none',true);
            let elem = document.elementFromPoint(event.clientX, event.clientY);
            target.classList.toggle('none',false);
            if(!elem){return _returnToDefault()}

            //Opens projects when todonote moves over them, and closes them should it leave.
            if(elem.closest('.project') && target.classList.contains('toDoNoteInput')){
                const currentProj = elem.closest('.project');
                const container = DOM.selectElem(`#container${currentProj.dataset.id}`);
                if (currentDroppable && currentDroppable !== currentProj){
                    DOM.selectElem(`#container${currentDroppable.dataset.id}`).classList.toggle('none',true);
                    currentDroppable = null;
                    return
                }
                container.classList.toggle('none',false);
                currentDroppable = currentProj;
            }

            
        }      

        const placeItem = function(event){

            document.removeEventListener('mousemove', _onMouseMove);

            target.classList.toggle('none',true);
            let elemBelow = document.elementFromPoint(event.clientX, event.clientY);
            target.classList.toggle('none',false);

            if(!elemBelow){return _returnToDefault()}            
 
            const container = DOM.selectElem('#container');
            

            const _regulariseNoteData = function(){

               if(elemBelow.closest('.project') === clonedTarget.parentElement.parentElement && clonedTarget.nextElementSibling === target){
                   return _returnToDefault()
               }
                clonedTarget.remove()
                const project = elemBelow.closest('.project');
                const formContainer = Array.from(DOM.selectElem(`#container${project.dataset.id}`).children)
                formContainer.forEach(function(element){ 
                   const elementChildren = Array.from(element.children);               
                   const dataClasses = elementChildren.filter(child => child.hasAttribute('data-class'));
                   const dataNames = elementChildren.filter(child => child.hasAttribute('data-name'));
                   dataClasses.forEach(elem => elem.dataset.class = `child${project.dataset.id}${formContainer.indexOf(element)}`);
                   dataNames.forEach(elem => elem.id = `${elem.dataset.name}${project.dataset.id}${formContainer.indexOf(element)}`)
                   element.id = `${element.dataset.name}${project.dataset.id}${formContainer.indexOf(element)}` 
                   element.dataset.id = `${formContainer.indexOf(element)}`
                })
                   
            }

            
            if (elemBelow.closest('.toDoNoteInput') && target.classList.contains('toDoNoteInput')){

                elemBelow.closest('.toDoNoteInput').parentElement.insertBefore(target,elemBelow.closest('.toDoNoteInput'));
                target.removeAttribute('style');
                _regulariseNoteData();
            }
            
            else if (elemBelow.closest('.project')){
                  if(target.classList.contains('project')){
                      container.insertBefore(target,elemBelow.closest('.project'))
                      target.removeAttribute('style');
                      clonedTarget.remove();
                  
                }
                  else if (target.classList.contains('toDoNoteInput')) {
                     const toDoNotesContainer =  DOM.selectElem(`#container${elemBelow.closest('.project').dataset.id}`);
                     toDoNotesContainer.classList.toggle('none',false);
                     toDoNotesContainer.appendChild(target);
                     target.removeAttribute('style');
                      _regulariseNoteData()
                      
                      
                
                }
            }

            else {
                _returnToDefault()
                 
            }
            
            moveBtn.classList.toggle('moving',false)
            
        } 
           
          _moveAt(event.pageX,event.pageY);
          document.addEventListener('mousemove', _onMouseMove);
          document.addEventListener('mouseup', placeItem, {once: true})   

        return 

    }

    const regenFrontProj = function(){
        const accessAll = JSON.parse(localStorage.access);
        accessAll.forEach(function(elem){
            if(accessAll.length > 0){
            createProject(elem.name);
            const allDomProjs = Array.from(DOM.selectElem('.project'));
            const frontProj = allDomProjs[allDomProjs.length - 1];

            const _regenFrontToDoForms = (function(){
                  if(elem.projStorage.length > 0){
                      elem.projStorage.forEach(function(toDoForm){
                      const form = createToDoNote(toDoForm)
          
                      const _regenFrontNotes = (function(){
                          if (toDoForm.noteStorage.length > 0){
                          toDoForm.noteStorage.forEach(function(note){
                              if (typeof note === 'object'){
                                  _generateCheckItem(note)
                              }
                              else {
                                const text = DOM.elementInit('p', {'class':'text edit',
                                'data-class':`child${frontProj.dataset.id}${form.dataset.id}`}, `${note}`);
                                
                                form.classList.add('freeForm'); 
                                form.appendChild(text);
                              }
                          })}

                      })()
                      })
                  }
            })()
        }})
    }

     return {
         createProject,
         createToDoNote,
         revealCreateForm,
         resetCreateForm,
         toggleSize,
         chooseToDoTitleForm,
         submitToDoTitle,
         chooseNoteType,
         noteTypeGenerator,
         toggleOpaque,
         deleteForms,
         disableBtns,
         enableBtns,
         cleanToDoForm,
         modifyElement,
         triggerEvents,
         revertModifiedElement,
         generateNewAddCheck,
         submitItem,
         submitModifiedElement,
         deleteItem,
         deleteCheck,
         moveConstruct,
         regenFrontProj
         
     }
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projects */ "./src/projects.js");
/* harmony import */ var _helpers_DOM__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers/DOM */ "./src/helpers/DOM.js");
/* harmony import */ var _projectsDOM__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projectsDOM */ "./src/projectsDOM.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _projectevents__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./projectevents */ "./src/projectevents.js");







const revealToDo = (function(){ 
    
    //Calling module Objects
    const DOM = (0,_helpers_DOM__WEBPACK_IMPORTED_MODULE_1__.DOMGeneral)();
    const structs = (0,_projectsDOM__WEBPACK_IMPORTED_MODULE_2__.templateDOMStructs)();
    const main = _projects__WEBPACK_IMPORTED_MODULE_0__.mainInterface;
    
    

    //Module methods to be used
    const newProj = main.newProj;
    const localStore = main.transferToLocalStorage;
    const appendToProj = main.appendToProj;
    const removeItem = main.removeItem;
    const appendNoteToItem = main.appendNoteToItem
    const recordCheck = main.recordCheck;
    const deleteCheckFromStorage = main.deleteCheckFromStorage;
    const modifyInStorage = main.modifyInStorage;
    const createCacheForMoving = main.createCacheForMoving;
    const exhaustCacheForMoving = main.exhaustCacheForMoving;
    const regenBackProj = main.regenBackProj;
    const createProject = structs.createProject;
    const revealCreateForm = structs.revealCreateForm;
    const resetCreateForm = structs.resetCreateForm;
    const toggleSize = structs.toggleSize;
    const chooseToDoTitleForm = structs.chooseToDoTitleForm;
    const submitToDoTitle = structs.submitToDoTitle;
    const chooseNoteType = structs.chooseNoteType;
    const noteTypeGenerator = structs.noteTypeGenerator;
    const deleteForms = structs.deleteForms;
    const disableBtns = structs.disableBtns;
    const createToDoNote = structs.createToDoNote;
    const enableBtns = structs.enableBtns;
    const cleanToDoForm = structs.cleanToDoForm;
    const revertModifiedElement = structs.revertModifiedElement;
    const modifyElement = structs.modifyElement;
    const submitItem = structs.submitItem;
    const generateNewAddCheck = structs.generateNewAddCheck;
    const submitModifiedElement = structs.submitModifiedElement;
    const deleteItem = structs.deleteItem;
    const deleteCheck = structs.deleteCheck
    const triggerEvents = structs.triggerEvents;
    const toggleOpaque = structs.toggleOpaque;
    const moveConstruct = structs.moveConstruct;
    const regenFrontProj = structs.regenFrontProj;
    
    const delegator = _projectevents__WEBPACK_IMPORTED_MODULE_4__.projectEvents.delegator;

    
    
    //Event Subscriptions
    _projectevents__WEBPACK_IMPORTED_MODULE_4__.projectEvents.subscribe('view', toggleSize);
    _projectevents__WEBPACK_IMPORTED_MODULE_4__.projectEvents.subscribe('create', createProject);
    _projectevents__WEBPACK_IMPORTED_MODULE_4__.projectEvents.subscribe('create', resetCreateForm);
    _projectevents__WEBPACK_IMPORTED_MODULE_4__.projectEvents.subscribe('create', toggleOpaque);
    _projectevents__WEBPACK_IMPORTED_MODULE_4__.projectEvents.subscribe('create', newProj);
    _projectevents__WEBPACK_IMPORTED_MODULE_4__.projectEvents.subscribe('create', enableBtns);   
    _projectevents__WEBPACK_IMPORTED_MODULE_4__.projectEvents.subscribe('cancelCreateNote', resetCreateForm);
    _projectevents__WEBPACK_IMPORTED_MODULE_4__.projectEvents.subscribe('cancelCreateNote', toggleOpaque); 
    _projectevents__WEBPACK_IMPORTED_MODULE_4__.projectEvents.subscribe('cancelCreateNote', enableBtns); 
    _projectevents__WEBPACK_IMPORTED_MODULE_4__.projectEvents.subscribe('saved', localStore);
    _projectevents__WEBPACK_IMPORTED_MODULE_4__.projectEvents.subscribe('reveal', disableBtns);
    _projectevents__WEBPACK_IMPORTED_MODULE_4__.projectEvents.subscribe('reveal', revealCreateForm);
    _projectevents__WEBPACK_IMPORTED_MODULE_4__.projectEvents.subscribe('reveal', toggleOpaque);
    _projectevents__WEBPACK_IMPORTED_MODULE_4__.projectEvents.subscribe('chooseTitle', disableBtns);
    _projectevents__WEBPACK_IMPORTED_MODULE_4__.projectEvents.subscribe('chooseTitle', chooseToDoTitleForm);
    _projectevents__WEBPACK_IMPORTED_MODULE_4__.projectEvents.subscribe('chooseTitle', toggleOpaque);
    _projectevents__WEBPACK_IMPORTED_MODULE_4__.projectEvents.subscribe('inputOrList', submitToDoTitle);
    _projectevents__WEBPACK_IMPORTED_MODULE_4__.projectEvents.subscribe('inputOrList', chooseNoteType);
    _projectevents__WEBPACK_IMPORTED_MODULE_4__.projectEvents.subscribe('noteToDoType', deleteForms)
    _projectevents__WEBPACK_IMPORTED_MODULE_4__.projectEvents.subscribe('noteToDoType', noteTypeGenerator);
    _projectevents__WEBPACK_IMPORTED_MODULE_4__.projectEvents.subscribe('deleteNoteTypeForm', appendToProj);
    _projectevents__WEBPACK_IMPORTED_MODULE_4__.projectEvents.subscribe('deleteNoteTypeForm', toggleOpaque);
    _projectevents__WEBPACK_IMPORTED_MODULE_4__.projectEvents.subscribe('deleteNoteTypeForm', deleteForms);
    _projectevents__WEBPACK_IMPORTED_MODULE_4__.projectEvents.subscribe('cleanForm', cleanToDoForm);
    _projectevents__WEBPACK_IMPORTED_MODULE_4__.projectEvents.subscribe('abortNoteTypeForm', toggleOpaque);
    _projectevents__WEBPACK_IMPORTED_MODULE_4__.projectEvents.subscribe('abortNoteTypeForm', deleteForms);
    _projectevents__WEBPACK_IMPORTED_MODULE_4__.projectEvents.subscribe('abortNoteTypeForm', enableBtns);
    _projectevents__WEBPACK_IMPORTED_MODULE_4__.projectEvents.subscribe('abortNoteTypeForm', deleteForms);
    _projectevents__WEBPACK_IMPORTED_MODULE_4__.projectEvents.subscribe('trigger',triggerEvents);
    _projectevents__WEBPACK_IMPORTED_MODULE_4__.projectEvents.subscribe('cancelNote', enableBtns);
    _projectevents__WEBPACK_IMPORTED_MODULE_4__.projectEvents.subscribe('cancelNote', cleanToDoForm);        
    _projectevents__WEBPACK_IMPORTED_MODULE_4__.projectEvents.subscribe('newCheckItem', generateNewAddCheck);
    _projectevents__WEBPACK_IMPORTED_MODULE_4__.projectEvents.subscribe('createNote', createToDoNote);
    _projectevents__WEBPACK_IMPORTED_MODULE_4__.projectEvents.subscribe('submitNote', submitItem);
    _projectevents__WEBPACK_IMPORTED_MODULE_4__.projectEvents.subscribe('submitNote', enableBtns);
    _projectevents__WEBPACK_IMPORTED_MODULE_4__.projectEvents.subscribe('submitNote', appendToProj);
    _projectevents__WEBPACK_IMPORTED_MODULE_4__.projectEvents.subscribe('submitNote', appendNoteToItem);
    _projectevents__WEBPACK_IMPORTED_MODULE_4__.projectEvents.subscribe('submitNote', cleanToDoForm);
    _projectevents__WEBPACK_IMPORTED_MODULE_4__.projectEvents.subscribe('modifyElem', modifyElement);
    _projectevents__WEBPACK_IMPORTED_MODULE_4__.projectEvents.subscribe('revert', revertModifiedElement);
    _projectevents__WEBPACK_IMPORTED_MODULE_4__.projectEvents.subscribe('submitMod', modifyInStorage);
    _projectevents__WEBPACK_IMPORTED_MODULE_4__.projectEvents.subscribe('submitMod', submitModifiedElement)
    _projectevents__WEBPACK_IMPORTED_MODULE_4__.projectEvents.subscribe('delete', removeItem);    
    _projectevents__WEBPACK_IMPORTED_MODULE_4__.projectEvents.subscribe('delete', deleteItem);
    _projectevents__WEBPACK_IMPORTED_MODULE_4__.projectEvents.subscribe('deleteCheck', deleteCheckFromStorage);
    _projectevents__WEBPACK_IMPORTED_MODULE_4__.projectEvents.subscribe('deleteCheck', deleteCheck);
    _projectevents__WEBPACK_IMPORTED_MODULE_4__.projectEvents.subscribe('recordCheck', recordCheck);
    _projectevents__WEBPACK_IMPORTED_MODULE_4__.projectEvents.subscribe('moveItem', createCacheForMoving);
    _projectevents__WEBPACK_IMPORTED_MODULE_4__.projectEvents.subscribe('moveItem', moveConstruct);
    _projectevents__WEBPACK_IMPORTED_MODULE_4__.projectEvents.subscribe('moveItem', exhaustCacheForMoving);
    _projectevents__WEBPACK_IMPORTED_MODULE_4__.projectEvents.subscribe('regen', regenBackProj);
    _projectevents__WEBPACK_IMPORTED_MODULE_4__.projectEvents.subscribe('regen', regenFrontProj);
    _projectevents__WEBPACK_IMPORTED_MODULE_4__.projectEvents.subscribe('regen', enableBtns);
    


    //Initial elements
    const mainContainer = (function(){
    
        const mainCont =  DOM.elementInit('div',{'id':'mainContainer'})
        document.body.appendChild(mainCont)
        return mainCont
     
})()

    const header = (function(){
        
        //Initialise elements
        const head = DOM.elementInit('header', {'id':'header'});
        const title = DOM.elementInit('h1',{'id': 'title',
                                            'class': 'headerChild'}, 'Project Manager');
        const revealForm = DOM.elementInit('button',{'class':'revealForm headerChild'},'New Project');
        
        //Add header event listener
        head.onclick = delegator;
        
        //Append to document
        head.appendChild(title);
        head.appendChild(revealForm);
        mainContainer.appendChild(head);

        return head;
})()

const projectsContainer = (function(){
        
    const container =  DOM.elementInit('div',{'id':'container'})

    mainContainer.appendChild(container)
    return container
})()
    
    const defaultProject = (function(){
        
    })()

    
    //The below will use localStorage to check
    //if the user has any saved instances
    //of projects and render them if so. 

    const renderLocalStorage = (function(){
        if (localStorage.access){
            if (localStorage.access.length > 0){
                _projectevents__WEBPACK_IMPORTED_MODULE_4__.projectEvents.publish('regen')
            } 
        } 

    })()


     
    const createForm = (function(){
         const form = DOM.elementInit('form',{'id':'createForm',
                                              'class':'none projectForm transitForm'
                                            });
         form.appendChild(DOM.elementInit('br'));                                   
         form.appendChild(DOM.elementInit('label',{'for':'titleInp'},'Project Title'))
         form.appendChild(DOM.elementInit('br'));
         form.appendChild(DOM.elementInit('input',{'type':'text',
                                                    'id' : 'titleInp',
                                                    'autocomplete': 'off',        
                                                    'name':'titleInp'}));
         form.appendChild(DOM.elementInit('button',{'type':'submit',
                                                     'class': 'submit none',
                                                      'id':'submitCreateForm'},'submit'));
         form.appendChild(DOM.elementInit('button', {  'type' : 'button',
                                                       'class':'cancelNewProject none',
                                                       'id':'cancelNewProject'}, 'cancel' ))
         
 
         form.onsubmit = delegator;

         mainContainer.appendChild(form);
         
         const cancel = DOM.selectElem('#cancelNewProject');
         cancel.onclick = delegator;

         return form; 
})()


})()

    
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0EsNEJBQTRCLHFCQUFxQjtBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDcEZPOztBQUVQOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqRTBDOztBQUUxQyxvQkFBb0IsdURBQU07O0FBRTFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEU0QztBQUNJ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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLG1FQUF1Qjs7QUFFN0M7QUFDQTtBQUNBO0FBQ0EsSUFBSSxtRUFBdUI7QUFDM0IsSUFBSSxtRUFBdUI7QUFDM0IsSUFBSSxtRUFBdUI7QUFDM0IsSUFBSSxtRUFBdUI7QUFDM0IsSUFBSSxtRUFBdUI7QUFDM0IsSUFBSSxtRUFBdUI7QUFDM0IsSUFBSSxtRUFBdUI7QUFDM0IsSUFBSSxtRUFBdUI7QUFDM0IsSUFBSSxtRUFBdUI7QUFDM0IsSUFBSSxtRUFBdUI7QUFDM0IsSUFBSSxtRUFBdUI7QUFDM0IsSUFBSSxtRUFBdUI7QUFDM0IsSUFBSSxtRUFBdUI7QUFDM0IsSUFBSSxtRUFBdUI7QUFDM0IsSUFBSSxtRUFBdUI7QUFDM0IsSUFBSSxtRUFBdUI7QUFDM0IsSUFBSSxtRUFBdUI7QUFDM0IsSUFBSSxtRUFBdUI7QUFDM0IsSUFBSSxtRUFBdUI7QUFDM0IsSUFBSSxtRUFBdUI7QUFDM0IsSUFBSSxtRUFBdUI7QUFDM0IsSUFBSSxtRUFBdUI7QUFDM0IsSUFBSSxtRUFBdUI7QUFDM0IsSUFBSSxtRUFBdUI7QUFDM0IsSUFBSSxtRUFBdUI7QUFDM0IsSUFBSSxtRUFBdUI7QUFDM0IsSUFBSSxtRUFBdUI7QUFDM0IsSUFBSSxtRUFBdUI7QUFDM0IsSUFBSSxtRUFBdUI7QUFDM0IsSUFBSSxtRUFBdUI7QUFDM0IsSUFBSSxtRUFBdUI7QUFDM0IsSUFBSSxtRUFBdUI7QUFDM0IsSUFBSSxtRUFBdUI7QUFDM0IsSUFBSSxtRUFBdUI7QUFDM0IsSUFBSSxtRUFBdUI7QUFDM0IsSUFBSSxtRUFBdUI7QUFDM0IsSUFBSSxtRUFBdUI7QUFDM0IsSUFBSSxtRUFBdUI7QUFDM0IsSUFBSSxtRUFBdUI7QUFDM0IsSUFBSSxtRUFBdUI7QUFDM0IsSUFBSSxtRUFBdUI7QUFDM0IsSUFBSSxtRUFBdUI7QUFDM0IsSUFBSSxtRUFBdUI7QUFDM0IsSUFBSSxtRUFBdUI7QUFDM0IsSUFBSSxtRUFBdUI7QUFDM0IsSUFBSSxtRUFBdUI7QUFDM0IsSUFBSSxtRUFBdUI7QUFDM0IsSUFBSSxtRUFBdUI7QUFDM0IsSUFBSSxtRUFBdUI7QUFDM0IsSUFBSSxtRUFBdUI7QUFDM0IsSUFBSSxtRUFBdUI7QUFDM0IsSUFBSSxtRUFBdUI7QUFDM0IsSUFBSSxtRUFBdUI7QUFDM0I7OztBQUdBO0FBQ0E7QUFDQTtBQUNBLGlEQUFpRCxxQkFBcUI7QUFDdEU7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQSxnREFBZ0QsY0FBYztBQUM5RCw0Q0FBNEM7QUFDNUMsbUVBQW1FO0FBQ25FLHFEQUFxRCxpQ0FBaUM7QUFDdEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBLDhDQUE4QyxpQkFBaUI7O0FBRS9EO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsaUVBQXFCO0FBQ3JDO0FBQ0E7O0FBRUEsS0FBSzs7O0FBR0w7QUFDQTtBQUNBLDhDQUE4QztBQUM5QztBQUNBLDZDQUE2QztBQUM3QztBQUNBLG1EQUFtRCxpQkFBaUI7QUFDcEU7QUFDQSxtREFBbUQ7QUFDbkQ7QUFDQTtBQUNBLHNFQUFzRTtBQUN0RSxvREFBb0Q7QUFDcEQ7QUFDQSw4RUFBOEU7QUFDOUUsdURBQXVEO0FBQ3ZEO0FBQ0EsK0VBQStFO0FBQy9FO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLENBQUM7OztBQUdELENBQUM7O0FBRUQsSSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8vLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9oZWxwZXJzL0RPTS5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL2hlbHBlcnMvYmFzZS5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL2hlbHBlcnMvZXZlbnRzLmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvcHJvamVjdGV2ZW50cy5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL3Byb2plY3RzLmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvcHJvamVjdHNET00uanMiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImh0bWwge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcblxcbn1cXG5cXG4qLCAqOmJlZm9yZSwgKjphZnRlcntcXG4gICAgYm94LXNpemluZzogaW5oZXJpdDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcblxcbn1cXG5cXG4ucHJvamVjdCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHdpZHRoOiA0NHZ3O1xcbiAgICBtaW4taGVpZ2h0OiAxMHZoO1xcbiAgICBtYXgtaGVpZ2h0OiBtYXgtY29udGVudDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICAgIHBhZGRpbmc6IDFyZW07XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gICAgd29yZC1icmVhazogYnJlYWstYWxsO1xcbiAgICBib3gtc2hhZG93OiA1cHggMTBweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGdhcDogMC4zM3JlbTtcXG4gICAgbWFyZ2luOiAxLjVyZW07XFxuICAgIFxcblxcbn1cXG5cXG4uZGVsUHJvakJ0biB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBwb3NpdGlvbjphYnNvbHV0ZTtcXG4gICAgdG9wOiAwO1xcbiAgICByaWdodDogMDtcXG4gICAgXFxufVxcblxcbi5lZGl0UHJvalRpdGxlQnRuIHtcXG4gICAgZm9udC1zaXplOmxhcmdlclxcbiAgICBcXG5cXG59XFxuXFxuLm5vbmUge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4ubW92ZSB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgYm90dG9tOiAwO1xcbiAgICByaWdodDogMFxcbn1cXG5cXG4udG9Eb05vdGVJbnB1dCB7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi50ZXh0IHtcXG4gICAgd2hpdGUtc3BhY2U6IHByZS13cmFwO1xcbn1cXG5cXG4ubW9kSW5wdXQge1xcbiAgICB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7XFxufVxcblxcbi5vcGFxdWUge1xcbiAgICBvcGFjaXR5OiAwLjE7XFxuICAgIFxcbn1cXG5cXG4ub3BhcXVlQ29sb3Ige1xcbiAgICBjb2xvcjogcmdiYSgwLDAsMCwwLjEpO1xcbiAgICBib3JkZXItY29sb3I6IHJnYmEoMCwwLDAsMC4xKVxcbn1cXG5cXG4udHJhbnNpdEZvcm0ge1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHotaW5kZXg6MTAwO1xcbiAgICBsZWZ0OiA1MHZ3O1xcbiAgICB0b3A6IDM1dmg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgICBjb2xvcjogYmxhY2s7XFxuICAgIHBhZGRpbmc6IDJyZW07XFxufVxcblxcblxcbi5oaWRkZW4ge1xcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxufVxcblxcbi5oZWFkZXJDaGlsZHtcXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxufVxcblxcbi5tb3Zpbmcge1xcbiAgICBjb2xvcjogZ3JlZW47XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG4gICAgXFxufVxcblxcbiNoZWFkZXIge1xcbiAgICBkaXNwbGF5OmZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4jY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG5cXG59XFxuXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLHNCQUFzQjs7QUFFMUI7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsU0FBUztJQUNULFVBQVU7QUFDZDs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixZQUFZOztBQUVoQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsV0FBVztJQUNYLGdCQUFnQjtJQUNoQix1QkFBdUI7SUFDdkIsdUJBQXVCO0lBQ3ZCLGFBQWE7SUFDYixlQUFlO0lBQ2YscUJBQXFCO0lBQ3JCLG9CQUFvQjtJQUNwQixlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixjQUFjOzs7QUFHbEI7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsaUJBQWlCO0lBQ2pCLE1BQU07SUFDTixRQUFROztBQUVaOztBQUVBO0lBQ0k7OztBQUdKOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGVBQWU7SUFDZix1QkFBdUI7SUFDdkIsa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVDtBQUNKOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLFlBQVk7O0FBRWhCOztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCO0FBQ0o7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsV0FBVztJQUNYLFVBQVU7SUFDVixTQUFTO0lBQ1QsdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWixhQUFhO0FBQ2pCOzs7QUFHQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixxQkFBcUI7O0FBRXpCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixlQUFlO0lBQ2YsNkJBQTZCOztBQUVqQ1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCJodG1sIHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG5cXG59XFxuXFxuKiwgKjpiZWZvcmUsICo6YWZ0ZXJ7XFxuICAgIGJveC1zaXppbmc6IGluaGVyaXQ7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG59XFxuXFxuYm9keSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gICAgbWluLWhlaWdodDogMTAwdmg7XFxuICAgIHdpZHRoOiAxMDB2dztcXG5cXG59XFxuXFxuLnByb2plY3Qge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICB3aWR0aDogNDR2dztcXG4gICAgbWluLWhlaWdodDogMTB2aDtcXG4gICAgbWF4LWhlaWdodDogbWF4LWNvbnRlbnQ7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAgIHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcXG4gICAgYm94LXNoYWRvdzogNXB4IDEwcHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBnYXA6IDAuMzNyZW07XFxuICAgIG1hcmdpbjogMS41cmVtO1xcbiAgICBcXG5cXG59XFxuXFxuLmRlbFByb2pCdG4ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgcG9zaXRpb246YWJzb2x1dGU7XFxuICAgIHRvcDogMDtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIFxcbn1cXG5cXG4uZWRpdFByb2pUaXRsZUJ0biB7XFxuICAgIGZvbnQtc2l6ZTpsYXJnZXJcXG4gICAgXFxuXFxufVxcblxcbi5ub25lIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLm1vdmUge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgcmlnaHQ6IDBcXG59XFxuXFxuLnRvRG9Ob3RlSW5wdXQge1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4udGV4dCB7XFxuICAgIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDtcXG59XFxuXFxuLm1vZElucHV0IHtcXG4gICAgd2hpdGUtc3BhY2U6IHByZS13cmFwO1xcbn1cXG5cXG4ub3BhcXVlIHtcXG4gICAgb3BhY2l0eTogMC4xO1xcbiAgICBcXG59XFxuXFxuLm9wYXF1ZUNvbG9yIHtcXG4gICAgY29sb3I6IHJnYmEoMCwwLDAsMC4xKTtcXG4gICAgYm9yZGVyLWNvbG9yOiByZ2JhKDAsMCwwLDAuMSlcXG59XFxuXFxuLnRyYW5zaXRGb3JtIHtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB6LWluZGV4OjEwMDtcXG4gICAgbGVmdDogNTB2dztcXG4gICAgdG9wOiAzNXZoO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgICBwYWRkaW5nOiAycmVtO1xcbn1cXG5cXG5cXG4uaGlkZGVuIHtcXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbn1cXG5cXG4uaGVhZGVyQ2hpbGR7XFxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbn1cXG5cXG4ubW92aW5nIHtcXG4gICAgY29sb3I6IGdyZWVuO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxuICAgIFxcbn1cXG5cXG4jaGVhZGVyIHtcXG4gICAgZGlzcGxheTpmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuI2NvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuXFxufVxcblxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCB0aGlzLmxlbmd0aDsgX2krKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW19pXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pMiA9IDA7IF9pMiA8IG1vZHVsZXMubGVuZ3RoOyBfaTIrKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaTJdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJleHBvcnQgY29uc3QgRE9NR2VuZXJhbCA9IGZ1bmN0aW9uKCl7XG4gICAgXG4gICAgY29uc3QgZWxlbWVudEluaXQgPSBmdW5jdGlvbihlbGVtLCBhdHRyc09iaj17fSx0ZXh0U3RyaW5nPScnKXtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGVsZW0pO1xuICAgICAgICBcbiAgICAgICAgaWYgKE9iamVjdC5rZXlzKGF0dHJzT2JqKS5sZW5ndGggPiAwKXtcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKGF0dHJzT2JqKS5mb3JFYWNoKGZ1bmN0aW9uKGF0dCl7XG4gICAgICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZShhdHQsIGF0dHJzT2JqW2F0dF0pXG4gICAgICAgIH0pXG4gICAgfSAgIFxuICAgICAgICBpZiAodGV4dFN0cmluZy5sZW5ndGggPiAwKXtcbiAgICAgICAgICAgIGVsZW1lbnQudGV4dENvbnRlbnQgPSB0ZXh0U3RyaW5nO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGVsZW1lbnQgICAgICAgXG5cbiAgICB9O1xuXG4gICBjb25zdCBzZWxlY3RFbGVtID0gZnVuY3Rpb24oc2VsZWN0b3JTdHJpbmcpe1xuXG4gICAgICAgaWYgKHNlbGVjdG9yU3RyaW5nWzBdID09PSAnIycpe1xuICAgICAgICAgICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3RvclN0cmluZylcbiAgICAgICB9XG4gICAgICAgZWxzZSB7XG4gICAgICAgICAgIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yU3RyaW5nKTtcbiAgICAgICB9XG4gICAgICAgXG4gICB9O1xuXG4gICByZXR1cm4ge1xuICAgICAgIGVsZW1lbnRJbml0LCBcbiAgICAgICBzZWxlY3RFbGVtLFxuICAgfVxuXG59XG5cblxuXG4iLCJleHBvcnQgY29uc3QgYmFzZUNyZWF0ZSA9IGZ1bmN0aW9uKHN0b3JhZ2Upe1xuICAgICAgXG5jb25zdCBfc3RvcmFnZSA9IHN0b3JhZ2UgfHwgbmV3IEFycmF5KCk7XG5cbihmdW5jdGlvbigpe1xuICAgIGlmICghQXJyYXkuaXNBcnJheShfc3RvcmFnZSkpe1xuICAgICAgICB0aHJvdyAnRXJyb3IhIEFyZ3VtZW50IG11c3QgYmUgYW4gYXJyYXknO1xuICAgIH1cbiAgICB9KSgpXG4gICAgXG5jb25zdCBhZGQgPSBmdW5jdGlvbihlbGVtKXtcbiAgICBfc3RvcmFnZS5wdXNoKGVsZW0pO1xuXG59O1xuXG5jb25zdCByZW1vdmUgPSBmdW5jdGlvbihlbGVtLCBpbmRleD0wKXtcbiAgICBpZiAoaW5kZXggPT09IDApe1xuICAgICAgICBmb3IgKGxldCBpID0gaW5kZXg7IGkgPCBfc3RvcmFnZS5sZW5ndGg7IGkrKyl7XG4gICAgICAgICAgICBpZihfc3RvcmFnZVtpXSA9PT0gZWxlbSl7XG4gICAgICAgICAgICAgICAgX3N0b3JhZ2Uuc3BsaWNlKGksMSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgIH1cbiAgICAgICAgIH0gICAgICAgICBcbiAgICAgICB9XG4gICAgICAgZWxzZSBpZiAoaW5kZXggPiAwICYmIGluZGV4IDwgX3N0b3JhZ2UubGVuZ3RoKXtcbiAgICAgICAgICAgX3N0b3JhZ2Uuc3BsaWNlKGluZGV4LCAxKVxuICAgICAgIH0gIFxufTtcblxuY29uc3QgdXBkYXRlQnlMb2NhdGlvbiA9IGZ1bmN0aW9uKGluZGV4LCByZXBsYWNlKXtcbiAgICAgICAgaWYgKGluZGV4ID4gMCAmJiBpbmRleCA8IF9zdG9yYWdlLmxlbmd0aCl7XG4gICAgICAgICAgICBfc3RvcmFnZS5zcGxpY2UoaW5kZXgsMSxyZXBsYWNlKTtcbiAgICAgICAgfVxuXG59O1xuXG5jb25zdCB1cGRhdGVCeUVsZW1lbnQgPSBmdW5jdGlvbihlbGVtLCByZXBsYWNlKXtcbiAgICAgICAgZm9yIChsZXQgeCA9IGluZGV4OyB4IDwgX3N0b3JhZ2UubGVuZ3RoOyB4Kyspe1xuICAgICAgICAgICAgaWYoX3N0b3JhZ2VbeF0gPT09IGVsZW0pe1xuICAgICAgICAgICAgICAgIF9zdG9yYWdlLnNwbGljZSh4LDEsIHJlcGxhY2UpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfX1cbn07XG5cblxuY29uc3QgbW92ZSA9IGZ1bmN0aW9uKGluZGV4LCB0YXJnZXQpe1xuICAgIGlmIChpbmRleCA+PSAwICYmIGluZGV4IDxfc3RvcmFnZS5sZW5ndGggJiYgdGFyZ2V0ID49IDAgJiYgdGFyZ2V0IDxfc3RvcmFnZS5sZW5ndGgpe1xuICAgICAgICBjb25zdCBtb3ZlZCA9IF9zdG9yYWdlW2luZGV4XTtcbiAgICAgICAgX3N0b3JhZ2Uuc3BsaWNlKGluZGV4LDEpO1xuICAgICAgICBfc3RvcmFnZS5zcGxpY2UodGFyZ2V0LDAsbW92ZWQpXG4gICAgXG4gICAgfSAgIFxuICAgIGVsc2UgaWYoaW5kZXggPj0gMCAmJiBpbmRleCA8X3N0b3JhZ2UubGVuZ3RoICYmIHRhcmdldCA+PSBfc3RvcmFnZS5sZW5ndGgpIHtcbiAgICAgICAgY29uc3QgcmVwbGFjZW1lbnQgPSBfc3RvcmFnZVtpbmRleF07XG4gICAgICAgIF9zdG9yYWdlLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgIF9zdG9yYWdlLnB1c2gocmVwbGFjZW1lbnQpO1xuXG4gICAgfSAgICBcbn07XG5cbmNvbnN0IHN3YXAgPSBmdW5jdGlvbihpbmRleEEsIGluZGV4Qil7XG4gICAgaWYgKGluZGV4QSA+PSAwICYmIGluZGV4QSA8X3N0b3JhZ2UubGVuZ3RoICYmIGluZGV4QiA+PSAwICYmIGluZGV4QiA8X3N0b3JhZ2UubGVuZ3RoKXtcbiAgICAgICAgXG4gICAgICAgW19zdG9yYWdlW2luZGV4QV0sIF9zdG9yYWdlW2luZGV4Ql1dID0gW19zdG9yYWdlW2luZGV4Ql0sIF9zdG9yYWdlW2luZGV4QV1dXG4gICAgfVxuXG59O1xuXG5jb25zdCBjb3B5ID0gZnVuY3Rpb24gKGluZGV4KXtcbiAgICBpZiAoaW5kZXggPj0gMCAmJiBpbmRleCA8IF9zdG9yYWdlLmxlbmd0aCl7XG4gICAgICAgIGxldCBjbG9uZSA9IF9zdG9yYWdlW2luZGV4XTtcbiAgICAgICAgX3N0b3JhZ2UucHVzaChjbG9uZSk7XG4gICAgfVxufVxuICAgIFxuICAgIHJldHVybiB7XG4gICAgICAgIGFkZCxcbiAgICAgICAgcmVtb3ZlLFxuICAgICAgICB1cGRhdGVCeUxvY2F0aW9uLFxuICAgICAgICB1cGRhdGVCeUVsZW1lbnQsXG4gICAgICAgIG1vdmUsXG4gICAgICAgIHN3YXAsXG4gICAgICAgIGNvcHlcbiAgICB9ICAgXG59XG5cbiIsImV4cG9ydCBjb25zdCBldmVudHMgPSBmdW5jdGlvbigpe1xuXG4gICAgY29uc3QgX215RXZlbnRzID0ge307XG5cbiAgICBjb25zdCBfaXNFdmVudEhlcmUgPSBmdW5jdGlvbihuYW1lKXtcbiAgICAgICAgcmV0dXJuIF9teUV2ZW50cy5oYXNPd25Qcm9wZXJ0eShuYW1lKTtcbiAgICB9XG5cbiAgICBjb25zdCBfYWRkSGFuZGxlciA9IGZ1bmN0aW9uKG5hbWUsIG5ld0hhbmRsZXIpeyAgICAgICBcbiAgICAgICAgXG4gICAgICAgIGlmICghX2lzRXZlbnRIZXJlKG5hbWUpKXtcbiAgICAgICAgICAgICAgICBfbXlFdmVudHNbbmFtZV0gPSBbXTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICBfbXlFdmVudHNbbmFtZV0ucHVzaChuZXdIYW5kbGVyKSAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgIH07XG5cbiAgICBjb25zdCByZW1vdmVIYW5kbGVyID0gZnVuY3Rpb24obmFtZSwgdG9SZW1vdmUpe1xuXG4gICAgICAgIGlmICghX2lzRXZlbnRIZXJlKG5hbWUpKXtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICBjb25zdCBpbmRleCA9IF9teUV2ZW50c1tuYW1lXS5pbmRleE9mKHRvUmVtb3ZlKTtcbiAgICAgICAgX215RXZlbnRzW25hbWVdLnNwbGljZShpbmRleCwgMSlcblxuICAgIH07XG5cbiAgICBjb25zdCBfZmlyZU1lID0gZnVuY3Rpb24obmFtZSwgLi4ub3B0aW9uYWxBcmcpe1xuICAgICAgICAgICAgXG4gICAgICAgIGlmICghX2lzRXZlbnRIZXJlKG5hbWUpKXtcbiAgICAgICAgICAgIF9teUV2ZW50c1tuYW1lXSA9IFtdO1xuICAgICAgICB9XG5cbiAgICAgICAgX215RXZlbnRzW25hbWVdLmZvckVhY2goZnVuY3Rpb24oaCl7XG4gICAgICAgICAgICAgICByZXR1cm4gaCguLi5vcHRpb25hbEFyZylcbiAgICAgICAgfSlcbiAgICB9O1xuXG4gICAgY29uc3QgcHVibGlzaCA9IGZ1bmN0aW9uKG5hbWUsIC4uLm9wdGlvbmFsQXJnKXsgXG4gICAgICAgXG4gICAgICAgIGlmICghX2lzRXZlbnRIZXJlKG5hbWUpKXtcbiAgICAgICAgICAgIF9teUV2ZW50c1tuYW1lXSA9IFtdO1xuICAgICAgICB9O1xuXG4gICAgICAgIF9maXJlTWUobmFtZSwgLi4ub3B0aW9uYWxBcmcpXG4gICAgICAgIFxuICAgIH07XG5cbiAgICBjb25zdCBzdWJzY3JpYmUgPSBmdW5jdGlvbihuYW1lLCBuZXdIYW5kbGVyKXtcblxuICAgICAgICBpZiAoIV9pc0V2ZW50SGVyZShuYW1lKSl7XG4gICAgICAgICAgICBfbXlFdmVudHNbbmFtZV0gPSBbXTtcbiAgICAgICAgfTtcbiAgIFxuICAgICAgICBfYWRkSGFuZGxlcihuYW1lLCBuZXdIYW5kbGVyKVxuICAgICAgICBcbiAgICB9OyBcblxuICAgICAgICAgICAgXG4gICAgcmV0dXJuIHtcbiAgICAgICAgcHVibGlzaCxcbiAgICAgICAgc3Vic2NyaWJlLFxuICAgICAgICByZW1vdmVIYW5kbGVyXG4gICAgfSAgICBcbn1cblxuIiwiaW1wb3J0IHsgZXZlbnRzIH0gZnJvbSBcIi4vaGVscGVycy9ldmVudHNcIjtcblxubGV0IHByb2plY3RFdmVudHMgPSBldmVudHMoKTtcblxucHJvamVjdEV2ZW50cy5kZWxlZ2F0b3IgPSBmdW5jdGlvbihldmVudCl7XG4gICAgICBzd2l0Y2godHJ1ZSl7XG4gICAgICAgICBjYXNlIGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ3JldmVhbEZvcm0nKSA6IHByb2plY3RFdmVudHMucHVibGlzaCgncmV2ZWFsJywgZXZlbnQpO1xuICAgICAgICAgICBicmVhaztcbiAgICAgICAgIGNhc2UgZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnY2FuY2VsTmV3UHJvamVjdCcpIDogcHJvamVjdEV2ZW50cy5wdWJsaXNoKCdjYW5jZWxDcmVhdGVOb3RlJywgZXZlbnQpO1xuICAgICAgICAgICBicmVhaztcbiAgICAgICAgIGNhc2UgZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygncHJvamVjdEZvcm0nKTogcHJvamVjdEV2ZW50cy5wdWJsaXNoKCdjcmVhdGUnLCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGl0bGVJbnAnKS52YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3RFdmVudHMucHVibGlzaCgnc2F2ZWQnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICBjYXNlIGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ3Byb2plY3QnKTogcHJvamVjdEV2ZW50cy5wdWJsaXNoKCd2aWV3JywgZXZlbnQpO1xuICAgICAgICAgICBicmVhaztcbiAgICAgICAgIGNhc2UgZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnaXRlbVRpdGxlJyk6IHByb2plY3RFdmVudHMucHVibGlzaCgndmlldycsIGV2ZW50KTtcbiAgICAgICAgICAgYnJlYWs7ICAgICAgICAgICBcbiAgICAgICAgIGNhc2UgZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnYWRkdG9Eb0xpc3QnKTogcHJvamVjdEV2ZW50cy5wdWJsaXNoKCdjaG9vc2VUaXRsZScsIGV2ZW50KVxuICAgICAgICAgICBicmVhaztcbiAgICAgICAgIGNhc2UgZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnY2hvb3NlVGl0bGVGb3JtJyk6IHByb2plY3RFdmVudHMucHVibGlzaCgnaW5wdXRPckxpc3QnLCBldmVudClcbiAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICBjYXNlIGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2Nob29zZU5vdGVUeXBlJyk6IHByb2plY3RFdmVudHMucHVibGlzaCgnbm90ZVRvRG9UeXBlJywgZXZlbnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICBicmVhaztcbiAgICAgICAgIGNhc2UgZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnY2FuY2VsVGl0bGUnKSA6IHByb2plY3RFdmVudHMucHVibGlzaCgnYWJvcnROb3RlVHlwZUZvcm0nLCBldmVudCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICBicmVhazsgXG4gICAgICAgICBjYXNlIGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2NhbmNlbENob2ljZScpIDogcHJvamVjdEV2ZW50cy5wdWJsaXNoKCdhYm9ydE5vdGVUeXBlRm9ybScsZXZlbnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgY2FzZSBldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdhZGRDaGVjaycpIDogcHJvamVjdEV2ZW50cy5wdWJsaXNoKCduZXdDaGVja0l0ZW0nLCBldmVudCk7XG4gICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgY2FzZSBldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdjYW5jZWwnKSA6IHByb2plY3RFdmVudHMucHVibGlzaCgnY2FuY2VsTm90ZScsZXZlbnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICBjYXNlIGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2NhbmNlbFRyaWdnZXInKSA6IHByb2plY3RFdmVudHMucHVibGlzaCgndHJpZ2dlcicsZXZlbnQpO1xuICAgICAgICAgICBicmVhaztcbiAgICAgICAgIGNhc2UgZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnc3VibWl0VHJpZ2dlcicpIDogcHJvamVjdEV2ZW50cy5wdWJsaXNoKCd0cmlnZ2VyJyxldmVudCk7XG4gICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgY2FzZSBldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdlZGl0JykgOiBwcm9qZWN0RXZlbnRzLnB1Ymxpc2goJ21vZGlmeUVsZW0nLGV2ZW50KTtcbiAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICBjYXNlIGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ3N1Ym1pdE5vdGUnKSA6IHByb2plY3RFdmVudHMucHVibGlzaCgnc3VibWl0Tm90ZScsIGV2ZW50KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdEV2ZW50cy5wdWJsaXNoKCdzYXZlZCcpO1xuICAgICAgICAgICBicmVhaztcbiAgICAgICAgIGNhc2UgZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygncmV2ZXJ0TW9kJykgOiBwcm9qZWN0RXZlbnRzLnB1Ymxpc2goJ3JldmVydCcsZXZlbnQpO1xuICAgICAgICAgICBicmVhaztcbiAgICAgICAgIGNhc2UgZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnc3VibWl0TW9kJykgOiBwcm9qZWN0RXZlbnRzLnB1Ymxpc2goJ3N1Ym1pdE1vZCcsZXZlbnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3RFdmVudHMucHVibGlzaCgnc2F2ZWQnKTtcbiAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICBjYXNlIGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ3JlbW92ZScpIDogcHJvamVjdEV2ZW50cy5wdWJsaXNoKCdkZWxldGUnLCBldmVudCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdEV2ZW50cy5wdWJsaXNoKCdzYXZlZCcpO1xuICAgICAgICAgICBicmVhaztcbiAgICAgICAgIGNhc2UgZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnZGVsZXRlQ2hlY2snKSA6IHByb2plY3RFdmVudHMucHVibGlzaCgnZGVsZXRlQ2hlY2snLCBldmVudCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0RXZlbnRzLnB1Ymxpc2goJ3NhdmVkJyk7XG4gICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgY2FzZSBldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdjaGVjaycpIDogcHJvamVjdEV2ZW50cy5wdWJsaXNoKCdyZWNvcmRDaGVjaycsIGV2ZW50KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3RFdmVudHMucHVibGlzaCgnc2F2ZWQnKTtcbiAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICBjYXNlIGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ21vdmUnKSA6IHByb2plY3RFdmVudHMucHVibGlzaCgnbW92ZUl0ZW0nLCBldmVudCk7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgYnJlYWs7XG5cbn19XG4gXG5cbmV4cG9ydCB7IHByb2plY3RFdmVudHMgfSIsImltcG9ydCB7IGJhc2VDcmVhdGUgfSBmcm9tIFwiLi9oZWxwZXJzL2Jhc2VcIjtcbmltcG9ydCB7IHByb2plY3RFdmVudHMgfSBmcm9tIFwiLi9wcm9qZWN0ZXZlbnRzXCI7XG5cblxuLy9UZW1wbGF0ZSBmb3IgYSB0b2RvLW5vdGUgXG5cbmV4cG9ydCBjb25zdCBzaW5nbGV0b0RvTm90ZSA9IGZ1bmN0aW9uKG5hbWUpe1xuXG5cbiAgIGNvbnN0IG5vdGVTdG9yYWdlID0gbmV3IEFycmF5KCk7XG4gICBjb25zdCB0b0RvTm90ZSA9IGJhc2VDcmVhdGUobm90ZVN0b3JhZ2UpO1xuICAgXG4gICBjb25zdCBhZGROb3RlID0gZnVuY3Rpb24obm90ZSl7XG4gICAgICB0b0RvTm90ZS5hZGQobm90ZSk7XG4gICB9XG4gICBcbiAgIHJldHVybiB7dG9Eb05vdGUsXG4gICAgICAgICAgIG5hbWUsXG4gICAgICAgICAgIG5vdGVTdG9yYWdlLFxuICAgICAgICAgICBhZGROb3RlXG4gICAgICAgICAgIFxufVxufVxuLy9cblxuLy9UZW1wbGF0ZSBmb3IgYSBzaW5nbGUgcHJvamVjdFxuXG5leHBvcnQgY29uc3Qgc2luZ2xlUHJvaiA9IGZ1bmN0aW9uKG5hbWUpe1xuXG4gICBjb25zdCBwcm9qU3RvcmFnZSA9IG5ldyBBcnJheSgpO1xuICAgY29uc3QgcHJvamVjdCA9IGJhc2VDcmVhdGUocHJvalN0b3JhZ2UpO1xuICAgXG4gICBcbiAgIGNvbnN0IGFkZFRvUHJvamVjdCA9IGZ1bmN0aW9uKG5hbWUpe1xuICAgICAgY29uc3QgdG9kbyA9IHNpbmdsZXRvRG9Ob3RlKG5hbWUpXG4gICAgICBwcm9qZWN0LmFkZCh0b2RvKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgfVxuXG4gICByZXR1cm4ge3Byb2plY3QsXG4gICAgICAgICAgIG5hbWUsXG4gICAgICAgICAgIGFkZFRvUHJvamVjdCxcbiAgICAgICAgICAgcHJvalN0b3JhZ2UgXG4gICB9XG5cbn0gXG5cbi8vXG5cbi8vT3ZlcmFsbCBJbnRlcmZhY2VcblxuZXhwb3J0IGNvbnN0IG1haW5JbnRlcmZhY2UgPSAoZnVuY3Rpb24oKXtcbiAgIFxuICAgY29uc3QgX292ZXJhbGxTdG9yYWdlID0gbmV3IEFycmF5KCk7XG4gICBjb25zdCBhbGxUb0RvID0gYmFzZUNyZWF0ZShfb3ZlcmFsbFN0b3JhZ2UpO1xuXG4gICBjb25zdCBuZXdQcm9qID0gZnVuY3Rpb24obmFtZSl7XG4gICAgICBjb25zdCBwcm9qID0gc2luZ2xlUHJvaihuYW1lKTtcbiAgICAgIGFsbFRvRG8uYWRkKHByb2opO1xuXG4gICB9XG4gICAgICAgXG4gICBjb25zdCB0cmFuc2ZlclRvTG9jYWxTdG9yYWdlID0gZnVuY3Rpb24oKXtcbiAgICAgICAgIHJldHVybiBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnYWNjZXNzJywgSlNPTi5zdHJpbmdpZnkoX292ZXJhbGxTdG9yYWdlKSlcbiAgIH0gXG5cbiAgIGNvbnN0IF9maW5kUHJvaiA9IGZ1bmN0aW9uKGV2ZW50KXtcbiAgICAgIGNvbnN0IGNvbnRhaW5lckNoaWxkcmVuID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGFpbmVyJykuY2hpbGRyZW4pIFxuICAgICAgY29uc3QgcHJvakluZGV4ID0gY29udGFpbmVyQ2hpbGRyZW4uZmlsdGVyKGNoaWxkID0+IGNoaWxkLmNsYXNzTGlzdC5jb250YWlucygncHJvamVjdCcpKS5pbmRleE9mKGV2ZW50LnRhcmdldC5jbG9zZXN0KCcucHJvamVjdCcpKTsgICBcbiAgICAgIHJldHVybiBwcm9qSW5kZXhcbiAgIH1cblxuXG4gICBjb25zdCBfZmluZFRvRG8gPSBmdW5jdGlvbihldmVudCl7XG4gICAgICBjb25zdCBwcm9qZWN0ID0gZXZlbnQudGFyZ2V0LmNsb3Nlc3QoJy5wcm9qZWN0Jyk7XG4gICAgICBjb25zdCBwcm9qQ29udGFpbmVyQ2hpbGRyZW4gPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNjb250YWluZXIke3Byb2plY3QuZGF0YXNldC5pZH1gKS5jaGlsZHJlbik7IFxuICAgICAgY29uc3QgdG9Eb0luZGV4ID0gcHJvakNvbnRhaW5lckNoaWxkcmVuLmZpbHRlcihjaGlsZCA9PiBjaGlsZC5jbGFzc0xpc3QuY29udGFpbnMoJ3RvRG9Ob3RlSW5wdXQnKSkuaW5kZXhPZihldmVudC50YXJnZXQuY2xvc2VzdCgnLnRvRG9Ob3RlSW5wdXQnKSk7XG4gICAgICByZXR1cm4gdG9Eb0luZGV4XG4gICB9XG5cblxuICAgY29uc3QgYXBwZW5kVG9Qcm9qID0gZnVuY3Rpb24oZXZlbnQpe1xuICAgICAgXG4gICAgICBjb25zdCBpbmRleCA9IF9maW5kUHJvaihldmVudCk7XG4gICAgICBjb25zdCBkb21Qcm9qZWN0ID0gZXZlbnQudGFyZ2V0LmNsb3Nlc3QoJy5wcm9qZWN0Jyk7XG4gICAgICBjb25zdCBjdXJyZW50UHJvaiA9IF9vdmVyYWxsU3RvcmFnZVtpbmRleF07XG5cbiAgICAgIGNvbnN0IGZvcm1SZXRyaWV2ZXIgPSBmdW5jdGlvbigpe1xuICAgICAgICAgY29uc3QgZm9ybXNDb250YWluZXIgPSBBcnJheS5mcm9tKGRvbVByb2plY3QuY2hpbGRyZW4pLmZpbHRlcihjaGlsZCA9PiBjaGlsZC5jbGFzc0xpc3QuY29udGFpbnMoJ3RvRG9Db250YWluZXInKSlbMF07XG4gICAgICAgICBjb25zdCBhbGxGb3JtcyA9IEFycmF5LmZyb20oZm9ybXNDb250YWluZXIuY2hpbGRyZW4pXG4gICAgICByZXR1cm4gYWxsRm9ybXNcbiAgICB9XG5cbiAgICAgIGNvbnN0IHByb2plY3RGb3JtcyA9ICBmb3JtUmV0cmlldmVyKCkgXG4gICAgICBjb25zdCBmb3JtID0gZXZlbnQudGFyZ2V0ID09PSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc3VibWl0Tm90ZScpID8gZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQgOiBwcm9qZWN0Rm9ybXNbcHJvamVjdEZvcm1zLmxlbmd0aCAtIDFdO1xuICAgICAgXG4gICAgICBjb25zdCBmb3JtQ2hpbGRyZW4gPSBBcnJheS5mcm9tKGZvcm0uY2hpbGRyZW4pO1xuICAgICAgY29uc3QgdGl0bGUgPSBmb3JtQ2hpbGRyZW4uZmlsdGVyKGNoaWxkID0+ICBjaGlsZC5pZCA9PT0gYGl0ZW1UaXRsZSR7ZG9tUHJvamVjdC5kYXRhc2V0LmlkfSR7Zm9ybS5kYXRhc2V0LmlkfWApXG4gICAgICBjb25zdCBuYW1lID0gdGl0bGVbMF0uZmlyc3RDaGlsZC5ub2RlVmFsdWU7XG4gICAgICBjb25zdCBmb3JtQ291bnQgPSBwcm9qZWN0Rm9ybXMubGVuZ3RoIC0gMTtcbiAgICAgIFxuICAgICAgaWYgKGN1cnJlbnRQcm9qLnByb2pTdG9yYWdlLmxlbmd0aCAtIDEgPT0gZm9ybUNvdW50ICYmIGV2ZW50LnRhcmdldCA9PT0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3N1Ym1pdE5vdGUnKSl7IFxuICAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgICBcbiAgICAgY3VycmVudFByb2ouYWRkVG9Qcm9qZWN0KG5hbWUpXG4gICAgICByZXR1cm5cblxuICAgfVxuXG4gICBjb25zdCBhcHBlbmROb3RlVG9JdGVtID0gZnVuY3Rpb24oZXZlbnQpe1xuXG4gICAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0ZW1wb3JhcnlJbnB1dCcpO1xuICAgICAgaWYgKGlucHV0LnZhbHVlID09PSAnJyl7cmV0dXJufTtcblxuICAgICAgY29uc3QgcHJvakluZGV4ID0gX2ZpbmRQcm9qKGV2ZW50KTtcbiAgICAgIGNvbnN0IHRvRG9JbmRleCA9IF9maW5kVG9EbyhldmVudCk7XG4gICAgICBjb25zdCBjdXJyZW50VG9EbyA9IF9vdmVyYWxsU3RvcmFnZVtwcm9qSW5kZXhdLnByb2pTdG9yYWdlW3RvRG9JbmRleF07XG4gICAgICBjb25zdCBmb3JtID0gZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQ7XG4gICAgICBjb25zdCBmb3JtQ2hpbGRyZW4gPSBBcnJheS5mcm9tKGZvcm0uY2hpbGRyZW4pO1xuICAgICAgXG5cbiAgICAgIGNvbnN0IG5vdGUgPSBmdW5jdGlvbigpeyBcbiAgICAgICAgaWYoIGZvcm0uY2xhc3NMaXN0LmNvbnRhaW5zKCdjaGVja2JveCcpKXtcblxuICAgICAgICBjb25zdCBsYWJlbHMgPSBmb3JtQ2hpbGRyZW4uZmlsdGVyKGNoaWxkID0+IGNoaWxkLmNsYXNzTGlzdC5jb250YWlucygnZWRpdCcpKVxuICAgICAgICBjb25zdCBjdXJyZW50TGFiZWwgPSBsYWJlbHNbbGFiZWxzLmxlbmd0aCAtIDFdO1xuXG4gICAgICAgICByZXR1cm4gIHsnY2hlY2snOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAnbGFiZWwnOiBjdXJyZW50TGFiZWwuZmlyc3RDaGlsZC5ub2RlVmFsdWV9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG5cbiAgICAgICAgY29uc3QgdGV4dHMgPSBmb3JtQ2hpbGRyZW4uZmlsdGVyKGNoaWxkID0+IGNoaWxkLmNsYXNzTGlzdC5jb250YWlucygndGV4dCcpKSBcbiAgICAgICAgY29uc3QgY3VycmVudFRleHQgPSB0ZXh0c1swXTtcbiAgICAgICAgXG4gICAgICAgIHJldHVybiBjdXJyZW50VGV4dC5maXJzdENoaWxkLm5vZGVWYWx1ZVxuICAgICAgIH19XG4gICAgICBjdXJyZW50VG9Eby5hZGROb3RlKG5vdGUoKSk7XG4gICAgICByZXR1cm4gICBcbiAgICAgIH1cblxuICAgY29uc3QgcmVtb3ZlSXRlbSA9IGZ1bmN0aW9uKGV2ZW50KXtcbiAgICAgIGNvbnN0IGluZGV4ID0gX2ZpbmRQcm9qKGV2ZW50KTtcbiAgICAgIGNvbnN0IHByb2ogPSBfb3ZlcmFsbFN0b3JhZ2VbaW5kZXhdO1xuICAgICAgaWYgKGV2ZW50LnRhcmdldC5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygncHJvamVjdCcpKXtcbiAgICAgICAgIGFsbFRvRG8ucmVtb3ZlKHByb2opO1xuICAgICAgICAgcmV0dXJuXG4gICAgICAgICBcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKGV2ZW50LnRhcmdldC5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygndG9Eb05vdGVJbnB1dCcpKXtcbiAgICAgICAgIGNvbnN0IGZvcm1JbmRleCA9IF9maW5kVG9EbyhldmVudClcbiAgICAgICAgIHByb2oucHJvalN0b3JhZ2Uuc3BsaWNlKGZvcm1JbmRleCwgMSk7XG4gICAgICAgICByZXR1cm4gXG5cbiAgICAgIH1cblxuICAgICAgcmV0dXJuXG5cbiAgIH1cblxuXG4gICBjb25zdCByZWNvcmRDaGVjayA9IGZ1bmN0aW9uKGV2ZW50KXtcbiAgICAgIGNvbnN0IGNoZWNrID0gZXZlbnQudGFyZ2V0O1xuICAgICAgY29uc3QgZm9ybSA9IGV2ZW50LnRhcmdldC5wYXJlbnRFbGVtZW50O1xuICAgICAgY29uc3QgZm9ybUNoaWxkcmVuID0gQXJyYXkuZnJvbShmb3JtLmNoaWxkcmVuKTtcbiAgICAgIGNvbnN0IGZvcm1DaGVja3MgPSBmb3JtQ2hpbGRyZW4uZmlsdGVyKGNoaWxkID0+IGNoaWxkLmNsYXNzTGlzdC5jb250YWlucygnY2hlY2snKSk7XG4gICAgICBcbiAgICAgIGNvbnN0IHByb2pJbmRleCA9IF9maW5kUHJvaihldmVudCk7XG4gICAgICBjb25zdCB0b0RvSW5kZXggPSBfZmluZFRvRG8oZXZlbnQpO1xuICAgICAgY29uc3QgY2hlY2tib3hJbmRleCA9IGZvcm1DaGVja3MuaW5kZXhPZihjaGVjayk7XG4gICAgICBcblxuICAgICAgY29uc3QgdGFyZ2V0ID0gX292ZXJhbGxTdG9yYWdlW3Byb2pJbmRleF0ucHJvalN0b3JhZ2VbdG9Eb0luZGV4XS5ub3RlU3RvcmFnZVtjaGVja2JveEluZGV4XVxuICAgICAgdGFyZ2V0LmNoZWNrID09PSBmYWxzZSA/IHRhcmdldC5jaGVjayA9IHRydWUgOiB0YXJnZXQuY2hlY2sgPSBmYWxzZTtcbiAgICAgIHJldHVyblxuICAgfVxuXG4gICBjb25zdCBkZWxldGVDaGVja0Zyb21TdG9yYWdlID0gZnVuY3Rpb24oZXZlbnQpe1xuICAgICAgY29uc3QgcHJvakluZGV4ID0gX2ZpbmRQcm9qKGV2ZW50KTtcbiAgICAgIGNvbnN0IHByb2ogPSBfb3ZlcmFsbFN0b3JhZ2VbcHJvakluZGV4XTtcbiAgICAgIGNvbnN0IGZvcm1JbmRleCA9IF9maW5kVG9EbyhldmVudClcblxuICAgICAgY29uc3QgZm9ybSA9IGV2ZW50LnRhcmdldC5jbG9zZXN0KCcudG9Eb05vdGVJbnB1dCcpO1xuICAgICAgY29uc3QgZm9ybUNoaWxkcmVuID0gQXJyYXkuZnJvbShmb3JtLmNoaWxkcmVuKTtcbiAgICAgIGNvbnN0IGZvcm1MYWJlbHMgPSBmb3JtQ2hpbGRyZW4uZmlsdGVyKGNoaWxkID0+IGNoaWxkLmNsYXNzTGlzdC5jb250YWlucygnZWRpdCcpKTtcbiAgICAgIGNvbnN0IGl0ZW1JbmRleCA9IGZvcm1MYWJlbHMuaW5kZXhPZihldmVudC50YXJnZXQucGFyZW50RWxlbWVudCk7XG5cbiAgICAgIHByb2oucHJvalN0b3JhZ2VbZm9ybUluZGV4XS5ub3RlU3RvcmFnZS5zcGxpY2UoaXRlbUluZGV4LCAxKTtcbiAgICAgIHJldHVyblxuICAgfVxuXG4gICBjb25zdCBtb2RpZnlJblN0b3JhZ2UgPSBmdW5jdGlvbihldmVudCl7XG4gICAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtb2RJbnB1dCcpO1xuICAgICAgY29uc3QgcHJvakluZGV4ID0gX2ZpbmRQcm9qKGV2ZW50KTtcbiAgICAgIGNvbnN0IHByb2ogPSBfb3ZlcmFsbFN0b3JhZ2VbcHJvakluZGV4XTtcbiAgICAgIGNvbnN0IHRvRG9JbmRleCA9IGV2ZW50LnRhcmdldC5jbG9zZXN0KCcudG9Eb05vdGVJbnB1dCcpID8gX2ZpbmRUb0RvKGV2ZW50KSA6IGZhbHNlO1xuICAgICAgY29uc3QgdG9Eb05vdGUgPSB0b0RvSW5kZXggfHwgKHRvRG9JbmRleCA9PT0gMCkgPyBwcm9qLnByb2pTdG9yYWdlW3RvRG9JbmRleF06IGZhbHNlO1xuICAgICAgY29uc3QgZm9ybSA9IGV2ZW50LnRhcmdldC5wYXJlbnRFbGVtZW50O1xuICAgICAgY29uc3QgZm9ybUNoaWxkcmVuID0gQXJyYXkuZnJvbShmb3JtLmNoaWxkcmVuKTtcbiAgICAgIGNvbnN0IGJ1dHRvbkNoZWNrZXIgPSBmb3JtQ2hpbGRyZW4uZmlsdGVyKGNoaWxkID0+IGNoaWxkLm5vZGVOYW1lID09ICdCVVRUT04nICYmIGNoaWxkLmNsYXNzTGlzdC5jb250YWlucygnZGlzYWJsZWRFZGl0JykpXG5cblxuICAgICAgaWYgKGJ1dHRvbkNoZWNrZXIubGVuZ3RoID4gMCl7XG4gICAgICAgICBpZiAoZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdwcm9qZWN0Jykpe1xuICAgICAgICAgICAgcHJvai5uYW1lID0gaW5wdXQudmFsdWU7XG4gICAgICAgICAgICByZXR1cm4gXG4gICAgICAgICAgICAgXG4gICAgICAgICB9XG4gICAgICAgICBlbHNlIGlmIChldmVudC50YXJnZXQucGFyZW50RWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoJ2l0ZW1UaXRsZScpKXtcbiAgICAgICAgICAgIHRvRG9Ob3RlLm5hbWUgPSBpbnB1dC52YWx1ZTtcbiAgICAgICAgICAgIHJldHVyblxuXG4gICAgICAgICB9fVxuICAgICAgICAgZWxzZSB7XG5cbi8vRXhwbGFpbmVyOiB0YXJnZXRJbmRleCB1c2VzIHRoZSBzdWJtaXRNb2QgYnV0dG9uIGFzIHRoZSBpbmRleCBvZiB0aGUgZWxlbWVudCxcbi8vYmVjYXVzZSB0aGUgbW9kaWZ5RWxlbSBldmVudCwgd2hpY2ggZmlyZWQgcHJpb3IgdG8gdGhpcyBvbmUsIHJlcGxhY2VkIHRoZSBvcmlnaW5hbFxuLy9lbGVtZW50ICh0aGUgb25lIHdlJ3JlIHRhcmdldGluZykgaW4gdGhlIERPTSB3aXRoIHRoZSAnbW9kJyBzdHVmZiBpbmNsdWRpbmcgZXZlbnQudGFyZ2V0IChpLmUgc3VibWl0TW9kKS5cblxuICAgICAgICAgICAgY29uc3QgdGFyZ2V0cyA9ICBmb3JtLmNsYXNzTGlzdC5jb250YWlucygnZnJlZUZvcm0nKSA/IGZhbHNlIDogZm9ybUNoaWxkcmVuLmZpbHRlcihjaGlsZCA9PiBjaGlsZC5jbGFzc0xpc3QuY29udGFpbnMoJ2Rpc2FibGVkRWRpdCcpIHx8IGNoaWxkID09PSBldmVudC50YXJnZXQpXG4gICAgICAgICAgICBjb25zdCB0YXJnZXRJbmRleCA9IGZvcm0uY2xhc3NMaXN0LmNvbnRhaW5zKCdmcmVlRm9ybScpID8gZmFsc2UgOiB0YXJnZXRzLmluZGV4T2YoZXZlbnQudGFyZ2V0KSAgXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGZvcm0uY2xhc3NMaXN0LmNvbnRhaW5zKCdmcmVlRm9ybScpID8gdG9Eb05vdGUubm90ZVN0b3JhZ2VbMF0gPSBpbnB1dC52YWx1ZSA6IHRvRG9Ob3RlLm5vdGVTdG9yYWdlW3RhcmdldEluZGV4XS5sYWJlbCA9IGlucHV0LnZhbHVlO1xuICAgICAgICAgICAgcmV0dXJuIFxuICAgICAgICAgfVxuICAgICAgICAgICAgICAgXG4gICB9XG5cbiAgIGNvbnN0IGNyZWF0ZUNhY2hlRm9yTW92aW5nID0gZnVuY3Rpb24oZXZlbnQpe1xuICAgICAgXG4gICAgICBpZiAoZXZlbnQudHlwZSA9PT0gJ21vdXNlZG93bicgJiYgZXZlbnQuYnV0dG9uICE9PSAwKXtcbiAgICAgICAgICAgIHJldHVybn1cblxuICAgICAgaWYgKGV2ZW50LnR5cGUgPT09ICdjbGljaycpe1xuICAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgICBjb25zdCBjYWNoZSA9IHt9O1xuICAgICAgY2FjaGVbJ3Byb2pJbmRleCddID0gX2ZpbmRQcm9qKGV2ZW50KTtcbiAgICAgIGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ21vdmVOb3RlJykgPyBjYWNoZVsnbm90ZUluZGV4J10gPSBfZmluZFRvRG8oZXZlbnQpIDogZmFsc2VcbiAgICAgIGFsbFRvRG8uYWRkKGNhY2hlKTtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICBjb25zdCBleGhhdXN0Q2FjaGVGb3JNb3ZpbmcgPSBmdW5jdGlvbihldmVudCl7XG4gICAgICAgICBcbiAgICAgIGlmIChldmVudC50eXBlID09PSAnbW91c2Vkb3duJyl7XG4gICAgICAgICBpZiAoZXZlbnQuYnV0dG9uICE9PSAwKXtcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgfVxuICAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIGV4aGF1c3RDYWNoZUZvck1vdmluZywge29uY2U6dHJ1ZX0pXG4gICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICAgIGlmIChldmVudC50eXBlID09PSAnY2xpY2snKXtcbiAgICAgICAgIHJldHVyblxuICAgICAgfVxuICAgICAgXG4gICAgIGNvbnN0IHRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb3ZlZCcpOyBcbiAgICAgY29uc3QgY2FjaGUgPSBfb3ZlcmFsbFN0b3JhZ2VbX292ZXJhbGxTdG9yYWdlLmxlbmd0aCAtIDFdO1xuXG4gICAgIGNvbnN0IGZpbmRUYXJnZXQgPSAoZnVuY3Rpb24oKXtcbiAgICAgICAgICBjb25zdCBwcm9qZWN0c0NvbnRhaW5lciA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRhaW5lcicpLmNoaWxkcmVuKSBcbiAgICAgICAgICBjb25zdCBwcm9qTG9jYXRpb24gPSBwcm9qZWN0c0NvbnRhaW5lci5maWx0ZXIoY2hpbGQgPT4gY2hpbGQuY2xhc3NMaXN0LmNvbnRhaW5zKCdwcm9qZWN0JykpLmluZGV4T2YodGFyZ2V0LmNsb3Nlc3QoJy5wcm9qZWN0JykpO1xuICAgICAgICAgIHJldHVybiBwcm9qTG9jYXRpb25cbiAgICAgfSkoKVxuICAgICBcbiAgICAgaWYgKHRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ3Byb2plY3QnKSl7XG4gICAgICBjYWNoZS5wcm9qSW5kZXggIT09IGZpbmRUYXJnZXQgPyBhbGxUb0RvLm1vdmUoY2FjaGUucHJvakluZGV4LGZpbmRUYXJnZXQpIDogZmFsc2U7XG4gICAgIH1cbiAgICAgZWxzZSBpZiAodGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygndG9Eb05vdGVJbnB1dCcpKXtcbiAgICAgICAgY29uc3QgaW5pdFByb2ogPSBfb3ZlcmFsbFN0b3JhZ2VbY2FjaGUucHJvakluZGV4XTtcbiAgICAgICAgY29uc3QgbW92ZWROb3RlID0gaW5pdFByb2oucHJvalN0b3JhZ2VbY2FjaGUubm90ZUluZGV4XTtcbiAgICAgICAgY29uc3QgdGFyZ2V0UHJvaiA9IF9vdmVyYWxsU3RvcmFnZVtmaW5kVGFyZ2V0XTtcbiAgICAgICAgY29uc3QgdG9Eb0xvY2F0aW9uID0gKGZ1bmN0aW9uKCl7XG4gICAgICAgICAgIGNvbnN0IHRhcmdldFByb2plY3QgPSB0YXJnZXQuY2xvc2VzdCgnLnByb2plY3QnKTtcbiAgICAgICAgICAgY29uc3QgdHJndFByb2pDb250Q2hpbGRyZW4gPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNjb250YWluZXIke3RhcmdldFByb2plY3QuZGF0YXNldC5pZH1gKS5jaGlsZHJlbik7IFxuICAgICAgICAgICBjb25zdCB0YXJnZXRUb0RvSW5kZXggPSB0cmd0UHJvakNvbnRDaGlsZHJlbi5maWx0ZXIoY2hpbGQgPT4gY2hpbGQuY2xhc3NMaXN0LmNvbnRhaW5zKCd0b0RvTm90ZUlucHV0JykpLmluZGV4T2YodGFyZ2V0LmNsb3Nlc3QoJy50b0RvTm90ZUlucHV0JykpO1xuICAgICAgICAgICByZXR1cm4gdGFyZ2V0VG9Eb0luZGV4XG4gICAgICAgICAgIH0pKCk7XG5cbiAgICAgICAgaWYoY2FjaGUucHJvakluZGV4ICE9PSBmaW5kVGFyZ2V0KXtcbiAgICAgICAgIFxuICAgICAgICAgLy9kZWxldGUgZnJvbSBwcmV2aW91cyBwcm9qZWN0IGxvY2F0aW9uXG4gICAgICAgICBpbml0UHJvai5wcm9qU3RvcmFnZS5zcGxpY2UoY2FjaGUubm90ZUluZGV4LDEpO1xuICAgICAgICAgXG4gICAgICAgICAvL2luc2VydCBpbiBuZXcgcHJvamVjdCBsb2NhdGlvblxuICAgICAgICAgdGFyZ2V0UHJvai5wcm9qU3RvcmFnZS5zcGxpY2UodG9Eb0xvY2F0aW9uLDAsbW92ZWROb3RlKTtcbiAgICAgICAgICAgXG4gICAgICAgIH1cblxuICAgICAgIGVsc2UgaWYgKGNhY2hlLm5vdGVJbmRleCAhPT0gdG9Eb0xvY2F0aW9uKXtcbiAgICAgICAgIHRhcmdldFByb2oucHJvalN0b3JhZ2Uuc3BsaWNlKGNhY2hlLm5vdGVJbmRleCwxKTtcbiAgICAgICAgIHRhcmdldFByb2oucHJvalN0b3JhZ2Uuc3BsaWNlKHRvRG9Mb2NhdGlvbiwwLG1vdmVkTm90ZSk7XG4gICAgICAgICAgICAgIFxuICAgICAgfX1cbiAgICAgXG4gICAgXG4gICAgIGFsbFRvRG8ucmVtb3ZlKGNhY2hlKVxuICAgICBwcm9qZWN0RXZlbnRzLnB1Ymxpc2goJ3NhdmVkJyk7XG4gICAgIHRhcmdldC5jbGFzc0xpc3QudG9nZ2xlKCdtb3ZlZCcsZmFsc2UpO1xuXG4gICAgIHJldHVyblxuXG4gIH1cbiAgXG4gIGNvbnN0IHJlZ2VuQmFja1Byb2ogPSBmdW5jdGlvbigpe1xuXG4gICAgICAgICAgY29uc3QgYWNjZXNzQWxsID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuYWNjZXNzKTtcbiAgICAgICAgICBhY2Nlc3NBbGwuZm9yRWFjaChmdW5jdGlvbihlbGVtKXsgXG4gICAgICAgICAgICAgbmV3UHJvaihlbGVtLm5hbWUpXG4gICAgICAgICAgICAgY29uc3QgYmFja1Byb2ogPSBfb3ZlcmFsbFN0b3JhZ2VbX292ZXJhbGxTdG9yYWdlLmxlbmd0aCAtIDFdO1xuXG4gICAgICAgICAgICAgY29uc3QgX3JlZ2VuQmFja1RvRG9Gb3JtcyA9IChmdW5jdGlvbigpe1xuICAgICAgICAgICAgICAgaWYoZWxlbS5wcm9qU3RvcmFnZS5sZW5ndGggPiAwKXsgXG4gICAgICAgICAgICAgICBlbGVtLnByb2pTdG9yYWdlLmZvckVhY2goZnVuY3Rpb24odG9Eb0Zvcm0pe1xuICAgICAgICAgICAgICAgICAgYmFja1Byb2ouYWRkVG9Qcm9qZWN0KHRvRG9Gb3JtLm5hbWUpIFxuICAgICAgICAgICAgICAgICAgY29uc3QgYmFja0Zvcm0gPSBiYWNrUHJvai5wcm9qU3RvcmFnZVtiYWNrUHJvai5wcm9qU3RvcmFnZS5sZW5ndGggLSAxXVxuXG4gICAgICAgICAgICAgICAgICBjb25zdCBfcmVnZW5CYWNrTm90ZXMgPSAoZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICAgICAgICAgIGlmKHRvRG9Gb3JtLm5vdGVTdG9yYWdlLmxlbmd0aCA+IDApe1xuICAgICAgICAgICAgICAgICAgICAgdG9Eb0Zvcm0ubm90ZVN0b3JhZ2UuZm9yRWFjaChmdW5jdGlvbihub3RlKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja0Zvcm0uYWRkTm90ZShub3RlKVxuICAgICAgICAgICAgICAgICAgICAgfSl9XG5cbiAgICAgICAgICAgICAgICAgIH0pKClcbiAgICAgICAgICAgICAgIH0pfX0pKCkgICAgICAgICAgICAgXG5cbiAgICAgICAgIH0pXG4gICAgICAgICAgXG4gIH1cblxuICBjb25zdCByZXRyaWV2ZURhdGEgPSBmdW5jdGlvbihldmVudCl7XG4gICBjb25zdCBwcm9qSW5kZXggPSBfZmluZFByb2ooZXZlbnQpO1xuICAgY29uc3QgYmFja1Byb2ogPSBfb3ZlcmFsbFN0b3JhZ2VbcHJvakluZGV4XSAgXG4gICBcbiAgIFxuICAgaWYoZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdwcm9qZWN0JykpeyAgICAgICAgICAgICAgXG4gICAgICByZXR1cm4gYmFja1Byb2oubmFtZVxuICAgfVxuICAgZWxzZSB7XG4gICAgICAgICBjb25zdCB0b0RvSW5kZXggPSBfZmluZFRvRG8oZXZlbnQpO1xuICAgICAgICAgY29uc3QgYmFja1RvRG8gPSBfb3ZlcmFsbFN0b3JhZ2VbcHJvakluZGV4XS5wcm9qU3RvcmFnZVt0b0RvSW5kZXhdO1xuICAgICAgICAgXG4gICAgICAgICBpZihldmVudC50YXJnZXQucGFyZW50RWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoJ2l0ZW1UaXRsZScpKXtcbiAgICAgICAgICAgIHJldHVybiBiYWNrVG9Eby5uYW1lXG4gICAgICAgICAgICBcbiAgICAgICAgIH1cbiAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgZnJvbnRUb0RvID0gZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQ7XG4gICAgICAgICAgICBpZiAoZnJvbnRUb0RvLmNsYXNzTGlzdC5jb250YWlucygnZnJlZUZvcm0nKSl7ICBcbiAgICAgICAgICAgICAgIHJldHVybiBiYWNrVG9Eby5ub3RlU3RvcmFnZVswXVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoZnJvbnRUb0RvLmNsYXNzTGlzdC5jb250YWlucygnY2hlY2tib3gnKSl7XG4gICAgICBcbiAgICAgIC8vQXJyYXkgb2YgYWxsIGNoZWNrYm94ZXMgaW5jbHVkaW5nIHRoZSBhY3RpdmF0ZWQgYnV0dG9uLCBhbmQgZXhjbHVkaW5nIHRoZSBjaGVja2JveCBiZWZvcmUgdGhlIGxhYmVsICh3aGljaCBpcyBjdXJyZW50bHkgbW9kSW5wdXQpXG4gICAgICAvLyBzbyB0aGF0IHRoZSBidXR0b24ncyBpbmRleCBwb3NpdGlvbiBjb3JyZXNwb25kcyB0byB0aGUgbGFiZWwgaW4gdGhlIGJhY2tlbmQgd2hpY2ggaGFzIG5vdCB5ZXQgYmVlbiBtb2RpZmllZCBhbmQgdGhlcmVmb3JlIHdlIGNhblxuICAgICAgLy8gcmV2ZXJ0IHRoZSBtb2RpZmllZCBkYXRhIHRvIGl0cyBvcmlnaW5hbCBzdGF0ZSBiYXNlZCBvbiB0aGF0LiBcbiAgICAgXG4gICAgICAgICAgICAgY29uc3QgbW9kSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbW9kSW5wdXQnKTtcbiAgICAgICAgICAgICBjb25zdCBpbml0Q2hpbGRyZW4gPSBBcnJheS5mcm9tKGZyb250VG9Eby5jaGlsZHJlbik7XG4gICAgICAgICAgICAgY29uc3QgY2hpbGRyZW4gPSBpbml0Q2hpbGRyZW4uZmlsdGVyKGNoaWxkID0+IGNoaWxkID09PSBldmVudC50YXJnZXQgfHwgY2hpbGQuY2xhc3NMaXN0LmNvbnRhaW5zKCdjaGVjaycpICYmIGNoaWxkICE9PSBtb2RJbnB1dC5wcmV2aW91c0VsZW1lbnRTaWJsaW5nKTtcbiAgICAgICAgICAgICBjb25zdCBub3RlSW5kZXggPSBjaGlsZHJlbi5pbmRleE9mKGV2ZW50LnRhcmdldCk7XG4gICAgICAgICAgICAgcmV0dXJuIGJhY2tUb0RvLm5vdGVTdG9yYWdlW25vdGVJbmRleF0ubGFiZWxcbiAgICAgICAgICAgIH1cbiAgICAgIH19XG4gIH1cbiAgIFxuICAgIFxuICAgcmV0dXJuIHtcbiAgICAgIG5ld1Byb2osXG4gICAgICB0cmFuc2ZlclRvTG9jYWxTdG9yYWdlLFxuICAgICAgYXBwZW5kVG9Qcm9qLFxuICAgICAgcmVtb3ZlSXRlbSxcbiAgICAgIGFwcGVuZE5vdGVUb0l0ZW0sXG4gICAgICByZWNvcmRDaGVjayxcbiAgICAgIGRlbGV0ZUNoZWNrRnJvbVN0b3JhZ2UsXG4gICAgICBtb2RpZnlJblN0b3JhZ2UsXG4gICAgICBjcmVhdGVDYWNoZUZvck1vdmluZyxcbiAgICAgIGV4aGF1c3RDYWNoZUZvck1vdmluZyxcbiAgICAgIHJlZ2VuQmFja1Byb2osXG4gICAgICByZXRyaWV2ZURhdGFcbiAgICAgIFxuICAgfVxuICBcbiAgIFxufSkoKVxuXG4iLCJpbXBvcnQgeyBET01HZW5lcmFsIH0gZnJvbSBcIi4vaGVscGVycy9ET01cIjtcbmltcG9ydCB7IHByb2plY3RFdmVudHMgfSBmcm9tIFwiLi9wcm9qZWN0ZXZlbnRzXCI7XG5pbXBvcnQgKiBhcyBwcm9qZWN0cyBmcm9tIFwiLi9wcm9qZWN0c1wiXG5cblxuXG5cblxuZXhwb3J0IGNvbnN0IHRlbXBsYXRlRE9NU3RydWN0cyA9IGZ1bmN0aW9uICgpe1xuXG4gICAgY29uc3QgRE9NID0gRE9NR2VuZXJhbCgpXG4gICAgY29uc3QgZGVsZWdhdG9yID0gcHJvamVjdEV2ZW50cy5kZWxlZ2F0b3JcblxuICAgIGNvbnN0IGNyZWF0ZVByb2plY3QgPSBmdW5jdGlvbihuYW1lKXtcbiAgICAgICAgIGlmIChuYW1lID09PSAnJyl7cmV0dXJufVxuXG4gICAgICAgICBjb25zdCByZWZlcmVuY2UgPSAoZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIGNvbnN0IF9hbGxET01Qcm9qcyA9ICBBcnJheS5mcm9tKERPTS5zZWxlY3RFbGVtKCcucHJvamVjdCcpKTtcbiAgICAgICAgICAgIGlmKF9hbGxET01Qcm9qcy5sZW5ndGggPT09IDApe1xuICAgICAgICAgICAgICAgIHJldHVybiAwXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBsYXN0UHJvaiA9IF9hbGxET01Qcm9qc1tfYWxsRE9NUHJvanMubGVuZ3RoIC0gMV1cbiAgICAgICAgICAgIHJldHVybiBwYXJzZUludChsYXN0UHJvai5kYXRhc2V0LmlkKSArIDFcbiAgICAgICAgICAgIH0pKClcblxuICAgICAgICAgY29uc3QgcHJvaiA9IERPTS5lbGVtZW50SW5pdCgnZGl2Jyx7J2lkJzogYCR7bmFtZX0ke3JlZmVyZW5jZX1gLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2RhdGEtaWQnOmAke3JlZmVyZW5jZX1gLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2RhdGEtbmFtZSc6IGAke25hbWV9YCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdjbGFzcyc6ICdwcm9qZWN0J30sbmFtZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICBjb25zdCByZW1vdmUgPSBET00uZWxlbWVudEluaXQoJ2J1dHRvbicsIHsnY2xhc3MnOidyZW1vdmUgZGVsUHJvakJ0bicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2lkJzpgcmVtb3ZlJHtwcm9qLmRhdGFzZXQuaWR9YCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2RhdGEtbmFtZSc6ICdyZW1vdmUnIH0sICdYJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgY29uc3QgYWRkVG9Eb0xpc3RCdG4gPSBET00uZWxlbWVudEluaXQoJ2J1dHRvbicsIHsnY2xhc3MnOiAnYWRkdG9Eb0xpc3QnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnZGF0YS1uYW1lJzogJ2FkZCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdpZCc6IGBhZGQke3JlZmVyZW5jZX1gfSwgJ0FkZCBUby1EbyBMaXN0Jyk7XG4gICAgICAgIGNvbnN0IG1vZGlmeSA9IERPTS5lbGVtZW50SW5pdCgnYnV0dG9uJywgeydjbGFzcyc6J2VkaXQgZWRpdFByb2pUaXRsZUJ0bid9LCdcXHV7MjcwRH0nKTtcbiAgICAgICAgY29uc3QgbW92ZVByb2plY3QgPSBET00uZWxlbWVudEluaXQoJ2J1dHRvbicsIHsnY2xhc3MnOidtb3ZlIG1vdmVQcm9qZWN0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3R5cGUnOiAnYnV0dG9uJ30sJ1xcdXsyMUYyfScpXG4gICAgICAgIHByb2ouYXBwZW5kQ2hpbGQocmVtb3ZlKTtcbiAgICAgICAgcHJvai5hcHBlbmRDaGlsZChtb2RpZnkpO1xuICAgICAgICBwcm9qLmFwcGVuZENoaWxkKERPTS5lbGVtZW50SW5pdCgnZGl2Jyx7ICdjbGFzcyc6J25vbmUgdG9Eb0NvbnRhaW5lcicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdkYXRhLW5hbWUnOiAnY29udGFpbmVyJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdpZCc6YGNvbnRhaW5lciR7cmVmZXJlbmNlfWB9KSk7XG4gICAgICAgIHByb2ouYXBwZW5kQ2hpbGQoYWRkVG9Eb0xpc3RCdG4pO1xuICAgICAgICBwcm9qLmFwcGVuZENoaWxkKG1vdmVQcm9qZWN0KTtcblxuICAgICAgICBcbiAgICAgICAgcHJvai5vbmNsaWNrID0gZGVsZWdhdG9yO1xuICAgICAgICBtb3ZlUHJvamVjdC5vbm1vdXNlZG93biA9IGRlbGVnYXRvcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgY29uc3QgY29udGFpbmVyID0gRE9NLnNlbGVjdEVsZW0oJyNjb250YWluZXInKTtcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHByb2opO1xuICAgICAgICBcbiAgICAgfVxuICAgICBcblxuICAgICBjb25zdCBjcmVhdGVUb0RvTm90ZSA9IGZ1bmN0aW9uKGNob3NlblNvdXJjZSl7XG4gICAgICAgIFxuXG4gICAgICAgIGNvbnN0IGlucHV0ID0gRE9NLnNlbGVjdEVsZW0oJyN0ZW1wb3JhcnlJbnB1dCcpOyBcbiAgICAgICAgY29uc3Qgc3VibWl0VHJpZ2dlciA9IERPTS5zZWxlY3RFbGVtKCcjc3VibWl0VHJpZ2dlcicpO1xuICAgICAgICBjb25zdCBjYW5jZWxUcmlnZ2VyID0gRE9NLnNlbGVjdEVsZW0oJyNjYW5jZWxUcmlnZ2VyJyk7XG5cbiAgICAgICAgY29uc3QgcHJvamVjdCA9IChmdW5jdGlvbigpe1xuICAgICAgICAgICAgaWYgKGNob3NlblNvdXJjZSAhPT0gJ0NoZWNrbGlzdCcgJiYgY2hvc2VuU291cmNlICE9PSAnRnJlZWZvcm0nKXtcbiAgICAgICAgICAgICAgICBjb25zdCBwcm9qcyA9IEFycmF5LmZyb20oRE9NLnNlbGVjdEVsZW0oJy5wcm9qZWN0JykpO1xuICAgICAgICAgICAgICAgIHJldHVybiBwcm9qc1twcm9qcy5sZW5ndGggLSAxXTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiBpbnB1dC5wYXJlbnRFbGVtZW50O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0pKClcblxuXG4gICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IERPTS5zZWxlY3RFbGVtKGAjY29udGFpbmVyJHtwcm9qZWN0LmRhdGFzZXQuaWR9YCk7XG4gICAgICAgIGNvbnN0IGZvcm1SZWZlcmVuY2UgPSBBcnJheS5mcm9tKGNvbnRhaW5lci5jaGlsZHJlbik7XG4gICAgICAgIFxuICAgICAgICBjb25zdCBmb3JtID0gRE9NLmVsZW1lbnRJbml0KCdmb3JtJyx7J2NsYXNzJzogJ3RvRG9Ob3RlSW5wdXQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdkYXRhLW5hbWUnOiAndG9Eb05vdGVGb3JtJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnaWQnOiBgdG9Eb05vdGVGb3JtJHtwcm9qZWN0LmRhdGFzZXQuaWR9JHtmb3JtUmVmZXJlbmNlLmxlbmd0aH1gLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnZGF0YS1pZCc6YCR7Zm9ybVJlZmVyZW5jZS5sZW5ndGh9YCB9KVxuICAgICAgICBjb25zdCBzdWJtaXQgPSBET00uZWxlbWVudEluaXQoJ2J1dHRvbicseyd0eXBlJzonc3VibWl0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdpZCc6ICdzdWJtaXROb3RlJywgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdjbGFzcyc6J3N1Ym1pdE5vdGUgaGlkZGVuJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sJycpXG4gICAgICAgIGNvbnN0IGNhbmNlbCA9IERPTS5lbGVtZW50SW5pdCgnYnV0dG9uJywgeydjbGFzcyc6J2NhbmNlbCBoaWRkZW4nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdpZCc6J2NhbmNlbE5vdGUnfSwgJycpO1xuICAgICAgICBcbiAgICAgICAgY29uc3QgcmVtb3ZlID0gRE9NLmVsZW1lbnRJbml0KCdidXR0b24nLCB7J2NsYXNzJzoncmVtb3ZlIG5vbmUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2RhdGEtbmFtZSc6ICdyZW1vdmUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2lkJzpgcmVtb3ZlJHtwcm9qZWN0LmRhdGFzZXQuaWR9JHtmb3JtUmVmZXJlbmNlLmxlbmd0aH1gfSwgJ1gnKTtcbiAgICAgICBcbiAgICAgICAgY29uc3QgcHJvdlRpdGxlID0gRE9NLnNlbGVjdEVsZW0oJyNwcm92VGl0bGUnKTtcbiAgICAgICAgY29uc3QgbmFtZSA9IHByb3ZUaXRsZSA/IHByb3ZUaXRsZS52YWx1ZSA6IGNob3NlblNvdXJjZS5uYW1lXG4gICAgICAgIGNvbnN0IHRpdGxlID0gICBET00uZWxlbWVudEluaXQoJ2xhYmVsJywgeydjbGFzcyc6J2l0ZW1UaXRsZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnZm9yJzonaXRlbVRpdGxlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdkYXRhLW5hbWUnOiAnaXRlbVRpdGxlJywgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ25hbWUnOidpdGVtVGl0bGUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnaWQnOmBpdGVtVGl0bGUke3Byb2plY3QuZGF0YXNldC5pZH0ke2Zvcm1SZWZlcmVuY2UubGVuZ3RofWAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sYCR7bmFtZX1gLClcbiAgICAgICAgY29uc3QgbW9kaWZ5ID0gRE9NLmVsZW1lbnRJbml0KCdidXR0b24nLCB7J2NsYXNzJzonZWRpdCd9LCdFZGl0Jyk7XG4gICAgICAgIGNvbnN0IG1vdmVOb3RlID0gRE9NLmVsZW1lbnRJbml0KCdidXR0b24nLCB7J2NsYXNzJzonbW92ZSBtb3ZlTm90ZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3R5cGUnOiAnYnV0dG9uJ30sJ1xcdXsyMUYyfScpXG5cbiAgICAgICAgXG4gICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQoc3VibWl0KTtcbiAgICAgICAgZm9ybS5hcHBlbmRDaGlsZChjYW5jZWwpO1xuICAgICAgICBmb3JtLmFwcGVuZENoaWxkKHJlbW92ZSk7XG4gICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQobW92ZU5vdGUpO1xuICAgICAgICBmb3JtLmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgICAgICAgdGl0bGUuYXBwZW5kQ2hpbGQobW9kaWZ5KVxuICAgICAgICBtb2RpZnkuZGlzYWJsZWQgPSB0cnVlO1xuICAgICAgICBwcm92VGl0bGUgPyBwcm92VGl0bGUucmVtb3ZlKCkgOiBmYWxzZVxuICAgICAgICBcbiAgICAgICAgbW92ZU5vdGUub25tb3VzZWRvd24gPSBkZWxlZ2F0b3I7XG4gICAgICAgIGZvcm0ub25zdWJtaXQgPSBkZWxlZ2F0b3I7ICAgXG4gICAgICAgICBcbiAgICAgICAgY29udGFpbmVyLmNsYXNzTGlzdC50b2dnbGUoJ25vbmUnLCBmYWxzZSk7XG4gICAgICAgIFxuICAgICAgICAgXG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChmb3JtKTtcblxuXG4gICAgICAgIGNvbnN0IF9nZW5lcmF0ZUNoZWNrbGlzdCA9IGZ1bmN0aW9uKCl7IFxuICAgICAgICAgICBjb25zdCBhZGQgPSBET00uZWxlbWVudEluaXQoJ2J1dHRvbicsIHsnY2xhc3MnOidhZGRDaGVjaycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdkYXRhLW5hbWUnOiAnYWRkQ2hlY2snLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnaWQnOmBhZGRDaGVjayR7cHJvamVjdC5kYXRhc2V0LmlkfSR7Zm9ybVJlZmVyZW5jZS5sZW5ndGh9YCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2RhdGEtY2xhc3MnOmBjaGlsZCR7cHJvamVjdC5kYXRhc2V0LmlkfSR7Zm9ybVJlZmVyZW5jZS5sZW5ndGh9YCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgJ0FkZCBJdGVtJyk7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQoYWRkKTtcblxuICAgICAgICAgICAgZm9ybS5jbGFzc0xpc3QuYWRkKCdjaGVja2JveCcpXG4gICAgICAgICAgICByZW1vdmUuY2xhc3NMaXN0LnRvZ2dsZSgnbm9uZScsZmFsc2UpO1xuICAgICAgICAgICAgZW5hYmxlQnRucygpO1xuICAgICAgIH1cblxuXG4gICAgICAgY29uc3QgX2dlbmVyYXRlRnJlZUZvcm0gPSBmdW5jdGlvbigpe1xuXG4gICAgICAgIGlucHV0LnZhbHVlID0gJyc7XG4gICAgICAgIGlucHV0LmNsYXNzTGlzdC50b2dnbGUoJ25vbmUnLGZhbHNlKTtcbiAgICAgICAgZm9ybS5jbGFzc0xpc3QuYWRkKCdmcmVlRm9ybScpO1xuXG4gICAgICAgIHN1Ym1pdFRyaWdnZXIuY2xhc3NMaXN0LnRvZ2dsZSgnbm9uZScsZmFsc2UpO1xuICAgICAgICBjYW5jZWxUcmlnZ2VyLmNsYXNzTGlzdC50b2dnbGUoJ25vbmUnLGZhbHNlKTtcbiAgICAgICAgaW5wdXQuZm9jdXMoKTtcbiAgICAgICAgXG4gICAgICAgfVxuXG4gICAgICAgY29uc3QgX3JlZ2VuUHJlcCA9IGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICBcbiAgICAgICAgc3VibWl0LnJlbW92ZSgpO1xuICAgICAgICBjYW5jZWwucmVtb3ZlKCk7XG4gICAgICAgIHJlbW92ZS5jbGFzc0xpc3QudG9nZ2xlKCdub25lJywgZmFsc2UpO1xuICAgICAgICBpZiAodHlwZW9mIGNob3NlblNvdXJjZS5ub3RlU3RvcmFnZVswXSA9PT0gJ29iamVjdCcgfHwgY2hvc2VuU291cmNlLm5vdGVTdG9yYWdlLmxlbmd0aCA9PT0gMCl7XG4gICAgICAgICAgICAgX2dlbmVyYXRlQ2hlY2tsaXN0KCl9IFxuICAgICAgIFxuICAgICAgICBcbiAgICB9XG4gICAgICAgXG4gICAgICAgc3dpdGNoKGNob3NlblNvdXJjZSl7XG4gICAgICAgICAgIGNhc2UgJ0NoZWNrbGlzdCcgOiBfZ2VuZXJhdGVDaGVja2xpc3QoKTtcbiAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgIGNhc2UgJ0ZyZWVmb3JtJyA6IF9nZW5lcmF0ZUZyZWVGb3JtKCk7XG4gICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICBkZWZhdWx0IDogX3JlZ2VuUHJlcCgpO1xuICAgICAgICAgICBicmVhaztcbiAgICAgICB9XG5cbiAgICAgICByZXR1cm4gZm9ybVxuXG4gICAgIH1cblxuXG4gICAgIGNvbnN0IGRpc2FibGVCdG5zID0gZnVuY3Rpb24odHJndD0nbi9hJyl7XG4gICAgICAgIGNvbnN0IGFsbEJ0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdidXR0b24nKTtcbiAgICAgICAgYWxsQnRucy5mb3JFYWNoKGJ0biA9PiAgYnRuID09PSB0cmd0IHx8IGJ0bi5jbGFzc0xpc3QuY29udGFpbnMoJ25vbmUnKSB8fCBidG4uY2xhc3NMaXN0LmNvbnRhaW5zKCdoaWRkZW4nKSA/IGJ0bi5kaXNhYmxlZCA9IGZhbHNlIDogYnRuLmRpc2FibGVkID0gdHJ1ZSk7XG5cbiAgICAgICAgY29uc3QgYWxsRWRpdGFibGVzID0gRE9NLnNlbGVjdEVsZW0oJy5lZGl0Jyk7XG4gICAgICAgIGFsbEVkaXRhYmxlcy5mb3JFYWNoKGl0bSA9PiAgaXRtID09PSB0cmd0IHx8IGl0bS5jbGFzc0xpc3QuY29udGFpbnMoJ25vbmUnKSA/IGZhbHNlIDogaXRtLmNsYXNzTGlzdC50b2dnbGUoJ2Rpc2FibGVkRWRpdCcsIHRydWUpKTtcbiAgICAgICAgY29uc3QgYWxsRGlzYWJsZWQgPSBET00uc2VsZWN0RWxlbSgnLmRpc2FibGVkRWRpdCcpO1xuICAgICAgICBhbGxEaXNhYmxlZC5mb3JFYWNoKGl0bSA9PiBpdG0uY2xhc3NMaXN0LnRvZ2dsZSgnZWRpdCcsZmFsc2UpKTtcblxuICAgICAgICBjb25zdCBwcm9qcyA9IERPTS5zZWxlY3RFbGVtKCcucHJvamVjdCcpXG4gICAgICAgIHByb2pzLmZvckVhY2gocHJvaiA9PiBwcm9qLmNsYXNzTGlzdC50b2dnbGUoJ2Rpc2FibGVkVG9nZ2xlJyx0cnVlKSlcblxuICAgIH1cbiAgICBcbiAgICBcbiAgICBjb25zdCBlbmFibGVCdG5zID0gZnVuY3Rpb24oKXtcbiAgICAgICAgY29uc3QgYWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnYnV0dG9uJyk7XG4gICAgICAgIGFsbC5mb3JFYWNoKGJ0biA9PiBidG4uZGlzYWJsZWQgPSBmYWxzZSk7XG5cbiAgICAgICAgY29uc3QgZWRpdHMgPSBET00uc2VsZWN0RWxlbSgnLmRpc2FibGVkRWRpdCcpO1xuICAgICAgICBlZGl0cy5mb3JFYWNoKGl0bSA9PiBpdG0uY2xhc3NMaXN0LnRvZ2dsZSgnZWRpdCcsdHJ1ZSkpO1xuICAgICAgICBlZGl0cy5mb3JFYWNoKGl0bSA9PiBpdG0uY2xhc3NMaXN0LnRvZ2dsZSgnZGlzYWJsZWRFZGl0JyxmYWxzZSkpO1xuICAgICAgICBjb25zdCBkZWxldGVCdG5zID0gRE9NLnNlbGVjdEVsZW0oJy5kZWxldGVDaGVjaycpO1xuICAgICAgICBkZWxldGVCdG5zLmZvckVhY2goYnRuID0+IGJ0bi5jbGFzc0xpc3QudG9nZ2xlKCdub25lJyxmYWxzZSkpOyAgICAgICAgXG5cbiAgICAgICAgY29uc3QgcHJvanMgPSBET00uc2VsZWN0RWxlbSgnLnByb2plY3QnKVxuICAgICAgICBwcm9qcy5mb3JFYWNoKHByb2ogPT4gcHJvai5jbGFzc0xpc3QudG9nZ2xlKCdkaXNhYmxlZFRvZ2dsZScsZmFsc2UpKVxuICAgIH1cblxuICAgICBjb25zdCBtb2RpZnlFbGVtZW50ID0gZnVuY3Rpb24oZXZlbnQpe1xuXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgXG4gICAgICAgICBjb25zdCBmb3JtID0gZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQ7XG4gICAgICAgICBjb25zdCBtb2RJbnB1dCA9IChmdW5jdGlvbigpe1xuICAgICAgICAgaWYgKGZvcm0uY2xhc3NMaXN0LmNvbnRhaW5zKCdmcmVlRm9ybScpKXsgICAgXG4gICAgICAgICAgICBsZXQgbW9kVGV4dEFyZWEgPSBET00uZWxlbWVudEluaXQoJ3RleHRhcmVhJyx7J2xhYmVsJzonZnJlZUZvcm0nLFxuICAgICAgICAgICAgJ25hbWUnOidmcmVlRm9ybScsXG4gICAgICAgICAgICAnYXV0b2NvbXBsZXRlJzonb2ZmJyxcbiAgICAgICAgICAgICdyZXF1aXJlZCc6J3JlcXVpcmVkJyxcbiAgICAgICAgICAgICdpZCc6J21vZElucHV0JyxcbiAgICAgICAgICAgJ2NsYXNzJzogJ21vZElucHV0JyxcbiAgICAgICAgICAgJ3Jvd3MnIDogJzMnLFxuICAgICAgICAgICAnY29scycgOiAnMzAnfSk7XG5cbiAgICAgICAgICAgcmV0dXJuIG1vZFRleHRBcmVhOyAgXG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgbGV0IG1vZENoZWNrSW5wdXQgPSBET00uZWxlbWVudEluaXQoJ2lucHV0Jyx7J3R5cGUnOid0ZXh0JyxcbiAgICAgICAgICAgICdhdXRvY29tcGxldGUnOidvZmYnLFxuICAgICAgICAgICAgJ3JlcXVpcmVkJzoncmVxdWlyZWQnLFxuICAgICAgICAgICAgJ2NsYXNzJzogJ21vZElucHV0JyxcbiAgICAgICAgICAgICAnaWQnOidtb2RJbnB1dCcsfSk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgICByZXR1cm4gbW9kQ2hlY2tJbnB1dCAgIFxuICAgICAgICB9IFxuICAgIH0pKClcblxuICAgICAgICAgY29uc3Qgc3VibWl0ID0gRE9NLmVsZW1lbnRJbml0KCdidXR0b24nLHsndHlwZSc6J3N1Ym1pdCcsXG4gICAgICAgICdjbGFzcyc6J3N1Ym1pdE1vZCcsXG4gICAgICAgICAnaWQnOiAnc3VibWl0TW9kJ1xuICAgICAgICAgfSwnU3VibWl0IE5vdGUnKVxuICAgICAgICAgY29uc3QgcmV2ZXJ0ID0gRE9NLmVsZW1lbnRJbml0KCdidXR0b24nLHtcbiAgICAgICAgICdjbGFzcyc6J3JldmVydE1vZCcsXG4gICAgICAgICAgfSwnUmV2ZXJ0IEJhY2snKSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgZGlzYWJsZUJ0bnMoKTtcblxuICAgICAgICAgY29uc3QgX3JlcGxhY2VXaXRoSW5wdXQgPSAoZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIGlmKGV2ZW50LnRhcmdldC5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygnaXRlbVRpdGxlJykgfHwgZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdwcm9qZWN0Jykpe1xuICAgICAgICAgICAgICAgIGNvbnN0IHRpdGxlVG9FZGl0ID0gZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQ7XG4gICAgICAgICAgICAgICAgbW9kSW5wdXQudmFsdWUgPSB0aXRsZVRvRWRpdC5maXJzdENoaWxkLm5vZGVWYWx1ZTtcbiAgICAgICAgICAgICAgICB0aXRsZVRvRWRpdC5maXJzdENoaWxkLm5vZGVWYWx1ZSA9ICcnO1xuICAgICAgICAgICAgICAgIHRpdGxlVG9FZGl0LmFwcGVuZENoaWxkKG1vZElucHV0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2V7XG4gICAgICAgICAgICAgICAgY29uc3QgdGV4dFRvRWRpdCA9IGV2ZW50LnRhcmdldFxuICAgICAgICAgICAgICAgIG1vZElucHV0LnZhbHVlID0gdGV4dFRvRWRpdC5maXJzdENoaWxkLm5vZGVWYWx1ZVxuICAgICAgICAgICAgICAgIHRleHRUb0VkaXQucmVwbGFjZVdpdGgobW9kSW5wdXQpOyBcblxuICAgICAgICAgICAgfSBcbiAgICAgICAgICAgIG1vZElucHV0Lmluc2VydEFkamFjZW50RWxlbWVudCgnYWZ0ZXJlbmQnLHN1Ym1pdCk7XG4gICAgICAgICAgICBzdWJtaXQuaW5zZXJ0QWRqYWNlbnRFbGVtZW50KCdhZnRlcmVuZCcscmV2ZXJ0KTtcbiAgICAgICB9KSgpXG4gICAgICAgIFxuICAgICB9XG5cbiAgICAgY29uc3Qgc3VibWl0TW9kaWZpZWRFbGVtZW50ID0gZnVuY3Rpb24oZXZlbnQpe1xuICAgICAgICBcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgY29uc3QgZm9ybSA9IGV2ZW50LnRhcmdldC5wYXJlbnRFbGVtZW50O1xuICAgICAgICBjb25zdCBpbnB1dCA9IGV2ZW50LnRhcmdldC5wcmV2aW91c0VsZW1lbnRTaWJsaW5nO1xuICAgICAgICBjb25zdCByZXZlcnQgPSBldmVudC50YXJnZXQubmV4dEVsZW1lbnRTaWJsaW5nO1xuICAgICAgICBjb25zdCBsYWJlbCA9IERPTS5lbGVtZW50SW5pdCgnbGFiZWwnLCB7J2Zvcic6IGAke2lucHV0LnZhbHVlfWAsICdjbGFzcyc6J2VkaXQnfSxgJHtpbnB1dC52YWx1ZX1gKTtcbiAgICAgICAgY29uc3QgdGV4dCA9IERPTS5lbGVtZW50SW5pdCgncCcsIHsnY2xhc3MnOid0ZXh0IGVkaXQnfSwgYCR7aW5wdXQudmFsdWV9YCk7XG4gICAgICAgIGNvbnN0IGRlbCA9IERPTS5lbGVtZW50SW5pdCgnYnV0dG9uJywgeydjbGFzcyc6ICdkZWxldGVDaGVjayBub25lJ30sJ2RlbGV0ZScgKSBcblxuICAgICAgICBcbiAgICAgICAgaWYoaW5wdXQudmFsdWUgPT09ICcnKXtyZXR1cm59O1xuXG4gICAgICAgIGlmKGZvcm0uY2xhc3NMaXN0LmNvbnRhaW5zKCdjaGVja2JveCcpKXtcbiAgICAgICAgICAgIGlucHV0LnJlcGxhY2VXaXRoKGxhYmVsKTtcbiAgICAgICAgICAgIGxhYmVsLmFwcGVuZENoaWxkKGRlbCk7XG5cbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChmb3JtLmNsYXNzTGlzdC5jb250YWlucygnZnJlZUZvcm0nKSl7XG4gICAgICAgICAgICBpbnB1dC5yZXBsYWNlV2l0aCh0ZXh0KTsgXG4gICAgICAgIH1cblxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gaW5wdXQudmFsdWU7XG4gICAgICAgICAgICBjb25zdCBuZXdUaXRsZSA9IGV2ZW50LnRhcmdldC5wYXJlbnRFbGVtZW50O1xuICAgICAgICAgICAgbmV3VGl0bGUuZmlyc3RDaGlsZC5ub2RlVmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgICAgIGlucHV0LnJlbW92ZSgpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBlbmFibGVCdG5zKCk7XG4gICAgXG4gICAgICAgIHJldmVydC5yZW1vdmUoKTtcbiAgICAgICAgZXZlbnQudGFyZ2V0LnJlbW92ZSgpO1xuXG5cbiAgICAgICAgcmV0dXJuICAgICAgICAgXG4gICAgIH1cblxuICAgICBjb25zdCByZXZlcnRNb2RpZmllZEVsZW1lbnQgPSBmdW5jdGlvbihldmVudCl7XG4gICAgICAgIFxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBjb25zdCBmb3JtID0gZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQ7XG4gICAgICAgIGNvbnN0IHN1Ym1pdCA9IGV2ZW50LnRhcmdldC5wcmV2aW91c0VsZW1lbnRTaWJsaW5nO1xuICAgICAgICBjb25zdCBpbnB1dCA9IHN1Ym1pdC5wcmV2aW91c0VsZW1lbnRTaWJsaW5nO1xuICAgICAgICBjb25zdCByZXRyaWV2ZURhdGEgPSAgcHJvamVjdHMubWFpbkludGVyZmFjZS5yZXRyaWV2ZURhdGEoZXZlbnQpO1xuICAgICAgICBjb25zdCBvcmlnaW5hbExhYmVsID0gRE9NLmVsZW1lbnRJbml0KCdsYWJlbCcsIHsnZm9yJzogYCR7cmV0cmlldmVEYXRhfWAsICdjbGFzcyc6J2VkaXQnfSxgJHtyZXRyaWV2ZURhdGF9YCk7IFxuICAgICAgICBjb25zdCBvcmlnaW5hbFRleHQgPSBET00uZWxlbWVudEluaXQoJ3AnLCB7J2NsYXNzJzondGV4dCBlZGl0J30sIGAke3JldHJpZXZlRGF0YX1gKTsgXG4gICAgICAgIGNvbnN0IGRlbCA9IERPTS5lbGVtZW50SW5pdCgnYnV0dG9uJywgeydjbGFzcyc6ICdkZWxldGVDaGVjayBub25lJ30sJ2RlbGV0ZScgKSBcblxuXG4gICAgICAgIGlmKGZvcm0uY2xhc3NMaXN0LmNvbnRhaW5zKCdjaGVja2JveCcpKXtcbiAgICAgICAgICAgIGlucHV0LnJlcGxhY2VXaXRoKG9yaWdpbmFsTGFiZWwpO1xuICAgICAgICAgICAgb3JpZ2luYWxMYWJlbC5hcHBlbmRDaGlsZChkZWwpO1xuXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoZm9ybS5jbGFzc0xpc3QuY29udGFpbnMoJ2ZyZWVGb3JtJykpe1xuICAgICAgICAgICAgaW5wdXQucmVwbGFjZVdpdGgob3JpZ2luYWxUZXh0KTsgXG4gICAgICAgIH1cblxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gcmV0cmlldmVEYXRhOyBcbiAgICAgICAgICAgIGNvbnN0IG9yaWdpbmFsVGl0bGUgPSBldmVudC50YXJnZXQucGFyZW50RWxlbWVudFxuICAgICAgICAgICAgb3JpZ2luYWxUaXRsZS5maXJzdENoaWxkLm5vZGVWYWx1ZSA9IHZhbHVlO1xuICAgICAgICAgICAgaW5wdXQucmVtb3ZlKCk7XG4gICAgICAgIH07XG4gICAgICAgICBcbiAgICAgICAgZW5hYmxlQnRucygpO1xuICAgIFxuICAgICAgICBzdWJtaXQucmVtb3ZlKCk7XG4gICAgICAgIGV2ZW50LnRhcmdldC5yZW1vdmUoKTtcbiAgICAgICAgcmV0dXJuICAgICAgICAgXG4gICAgIH1cbiAgICAgXG4gICAgIFxuICAgIGNvbnN0IGNob29zZVRvRG9UaXRsZUZvcm0gPSBmdW5jdGlvbihldmVudCl7XG4gICAgICAgIGNvbnN0IGRvbVByb2plY3QgPSBldmVudC50YXJnZXQucGFyZW50RWxlbWVudDtcblxuICAgICAgICBjb25zdCBfZ2VuZXJhdGVUaXRsZUZvcm0gPSAoZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICBjb25zdCBmb3JtID0gIERPTS5lbGVtZW50SW5pdCgnZm9ybScsIHsnY2xhc3MnOiAnY2hvb3NlVGl0bGVGb3JtIHRyYW5zaXRGb3JtJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2lkJzogJ2Nob29zZVRpdGxlRm9ybSd9KVxuICAgICAgICAgICAgIGNvbnN0IGxhYmVsID0gRE9NLmVsZW1lbnRJbml0KCdsYWJlbCcseydmb3InOidjaG9vc2VZb3VyVGl0bGUnfSwnQ2hvb3NlIFlvdXIgTm90ZVxcJ3MgVGl0bGUnKTtcbiAgXG4gICAgICAgICAgICAgY29uc3QgdGl0bGVJbnB1dCA9IERPTS5lbGVtZW50SW5pdCgnaW5wdXQnLHsndHlwZSc6J3RleHQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2F1dG9jb21wbGV0ZSc6J29mZicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3JlcXVpcmVkJzoncmVxdWlyZWQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdpZCc6J3Byb3ZUaXRsZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2NsYXNzJzogJ3Byb3ZUaXRsZSd9LCk7XG4gICAgICAgICAgICBjb25zdCBzdWJtaXRUaXRsZSA9IERPTS5lbGVtZW50SW5pdCgnYnV0dG9uJywgeyd0eXBlJzonc3VibWl0J30sICdTdWJtaXQnKTtcbiAgICAgICAgICAgIGNvbnN0IGNhbmNlbFRpdGxlID0gRE9NLmVsZW1lbnRJbml0KCdidXR0b24nLCB7J2NsYXNzJzonY2FuY2VsVGl0bGUnfSwgJ0NhbmNlbCcpO1xuICAgICAgICAgICAgZm9ybS5hcHBlbmRDaGlsZChsYWJlbCk7XG4gICAgICAgICAgICBmb3JtLmFwcGVuZENoaWxkKHRpdGxlSW5wdXQpO1xuICAgICAgICAgICAgZm9ybS5hcHBlbmRDaGlsZChzdWJtaXRUaXRsZSk7XG4gICAgICAgICAgICBmb3JtLmFwcGVuZENoaWxkKGNhbmNlbFRpdGxlKTtcbiAgICAgICAgICAgIGZvcm0ub25zdWJtaXQgPSBkZWxlZ2F0b3I7XG4gICAgICAgICAgICByZXR1cm4gZm9ybVxuICAgICAgICB9KSgpIFxuICAgICAgICBcbiAgICAgICAgZG9tUHJvamVjdC5hcHBlbmRDaGlsZChfZ2VuZXJhdGVUaXRsZUZvcm0pXG4gICAgICAgIHJldHVyblxuXG4gICAgfVxuICAgIGNvbnN0IHN1Ym1pdFRvRG9UaXRsZSA9IGZ1bmN0aW9uKGV2ZW50KXtcbiAgICAgICBcbiAgICAgICAgaWYoZXZlbnQudHlwZSA9PT0gJ2NsaWNrJyl7cmV0dXJufVxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpOyBcbiAgICAgICAgY29uc3QgcHJvdlRpdGxlID0gRE9NLnNlbGVjdEVsZW0oJyNwcm92VGl0bGUnKTtcbiAgICAgICAgY29uc3QgZG9tUHJvamVjdCA9IGV2ZW50LnRhcmdldC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQ7XG4gICAgICAgIGRvbVByb2plY3QuYXBwZW5kQ2hpbGQocHJvdlRpdGxlKTtcbiAgICAgICAgcHJvdlRpdGxlLmNsYXNzTGlzdC50b2dnbGUoJ25vbmUnLHRydWUpO1xuICAgICAgICBcbiAgICAgICAgZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC50b2dnbGUoJ25vbmUnLHRydWUpO1xuICAgICAgICByZXR1cm5cbiAgICAgICAgXG4gICAgfVxuICAgICBcbiAgICAgY29uc3QgY2hvb3NlTm90ZVR5cGUgPSBmdW5jdGlvbihldmVudCl7XG4gICAgICAgIGlmKGV2ZW50LnR5cGUgPT09ICdjbGljaycpe3JldHVybn1cbiAgICAgICAgY29uc3QgZG9tUHJvamVjdCA9IGV2ZW50LnRhcmdldC5wYXJlbnRFbGVtZW50O1xuXG4gICAgICAgICBjb25zdCBmb3JtID0gIERPTS5lbGVtZW50SW5pdCgnZm9ybScsIHsnY2xhc3MnOiAnY2hvb3NlTm90ZVR5cGUgdHJhbnNpdEZvcm0nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdpZCc6ICdub3RlVHlwZUZvcm0nICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICBjb25zdCBsYWJlbCA9IERPTS5lbGVtZW50SW5pdCgnbGFiZWwnLHsnZm9yJzonY2hvb3NlTm90ZVR5cGUnfSwnQ2hvb3NlIFlvdXIgTm90ZSBUeXBlJyk7XG4gICAgICAgICBjb25zdCBzZWxlY3QgPSBET00uZWxlbWVudEluaXQoJ3NlbGVjdCcseydjbGFzcyc6J3NlbGVjdCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2lkJzogJ3NlbGVjdCcgfSk7XG4gICAgICAgICBjb25zdCBvcHRHcm91cCA9IERPTS5lbGVtZW50SW5pdCgnb3B0Z3JvdXAnLHsnbGFiZWwnOiAnTm90ZSBPcHRpb25zJ30sICdDaG9vc2UgeW91ciBub3RlIHR5cGUnKTtcbiAgICAgICAgIGNvbnN0IGNoZWNrbGlzdE9wdCA9IERPTS5lbGVtZW50SW5pdCgnb3B0aW9uJyx7J25hbWUnOiAnY2hlY2tsaXN0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdjbGFzcyc6ICdjaGVja2xpc3QnfSwnQ2hlY2tsaXN0Jyk7XG4gICAgICAgICBjb25zdCBpbnB1dE9wdCA9IERPTS5lbGVtZW50SW5pdCgnb3B0aW9uJyx7J25hbWUnOiAnaW5wdXQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnY2xhc3MnOiAnaW5wdXQnfSwnRnJlZWZvcm0nKTtcbiAgICAgICAgIGNvbnN0IGNob2ljZSA9IERPTS5lbGVtZW50SW5pdCgnYnV0dG9uJywgeyd0eXBlJzonc3VibWl0J30sICdTdWJtaXQnKTtcbiAgICAgICAgIGNvbnN0IGNhbmNlbCA9IERPTS5lbGVtZW50SW5pdCgnYnV0dG9uJywgeydjbGFzcyc6J2NhbmNlbENob2ljZSd9LCAnQ2FuY2VsJyk7XG4gICAgICAgICBcbiAgICAgICAgIHNlbGVjdC5hcHBlbmRDaGlsZChvcHRHcm91cCk7XG4gICAgICAgICBvcHRHcm91cC5hcHBlbmRDaGlsZChjaGVja2xpc3RPcHQpO1xuICAgICAgICAgb3B0R3JvdXAuYXBwZW5kQ2hpbGQoaW5wdXRPcHQpO1xuICAgICAgICAgZm9ybS5hcHBlbmRDaGlsZChsYWJlbCk7XG4gICAgICAgICBmb3JtLmFwcGVuZENoaWxkKHNlbGVjdCk7XG4gICAgICAgICBmb3JtLmFwcGVuZENoaWxkKERPTS5lbGVtZW50SW5pdCgnYnInKSk7XG4gICAgICAgICBmb3JtLmFwcGVuZENoaWxkKGNob2ljZSk7XG4gICAgICAgICBmb3JtLmFwcGVuZENoaWxkKGNhbmNlbClcblxuICAgICAgICAgZGlzYWJsZUJ0bnMoKTtcbiAgICAgICAgIGZvcm0ub25zdWJtaXQgPSBkZWxlZ2F0b3I7XG4gICAgICAgICBkb21Qcm9qZWN0LmFwcGVuZENoaWxkKGZvcm0pO1xuXG4gICAgICAgICByZXR1cm4gZm9ybVxuICAgIH1cbiAgICAgXG4gICAgIGNvbnN0IHJldmVhbENyZWF0ZUZvcm0gPSBmdW5jdGlvbigpe1xuICAgICAgICBsZXQgY3JlYXRlRm9ybSA9IERPTS5zZWxlY3RFbGVtKCcjY3JlYXRlRm9ybScpO1xuICAgICAgICBjcmVhdGVGb3JtLmNsYXNzTGlzdC50b2dnbGUoJ25vbmUnLCBmYWxzZSk7XG5cbiAgICAgICAgbGV0IHN1Ym1pdENyZWF0ZUZvcm0gPSBET00uc2VsZWN0RWxlbSgnI3N1Ym1pdENyZWF0ZUZvcm0nKTtcbiAgICAgICAgc3VibWl0Q3JlYXRlRm9ybS5jbGFzc0xpc3QudG9nZ2xlKCdub25lJywgZmFsc2UpO1xuXG4gICAgICAgIGxldCBjYW5jZWxOZXdQcm9qZWN0ID0gRE9NLnNlbGVjdEVsZW0oJyNjYW5jZWxOZXdQcm9qZWN0Jyk7XG4gICAgICAgIGNhbmNlbE5ld1Byb2plY3QuY2xhc3NMaXN0LnRvZ2dsZSgnbm9uZScsZmFsc2UpO1xuICAgICAgICBcbiAgICAgfVxuXG4gICAgIGNvbnN0IHJlc2V0Q3JlYXRlRm9ybSA9IGZ1bmN0aW9uKCl7XG4gICAgICAgICBsZXQgY3JlYXRlRm9ybSA9IERPTS5zZWxlY3RFbGVtKCcjY3JlYXRlRm9ybScpO1xuICAgICAgICAgY3JlYXRlRm9ybS5jbGFzc0xpc3QudG9nZ2xlKCdub25lJywgdHJ1ZSk7XG5cbiAgICAgICAgbGV0IHN1Ym1pdENyZWF0ZUZvcm0gPSBET00uc2VsZWN0RWxlbSgnI3N1Ym1pdENyZWF0ZUZvcm0nKTtcbiAgICAgICAgc3VibWl0Q3JlYXRlRm9ybS5jbGFzc0xpc3QudG9nZ2xlKCdub25lJywgdHJ1ZSk7XG5cbiAgICAgICAgbGV0IGNhbmNlbE5ld1Byb2plY3QgPSBET00uc2VsZWN0RWxlbSgnI2NhbmNlbE5ld1Byb2plY3QnKTtcbiAgICAgICAgY2FuY2VsTmV3UHJvamVjdC5jbGFzc0xpc3QudG9nZ2xlKCdub25lJyx0cnVlKTtcblxuICAgICAgICAgbGV0IHRpdGxlSW5wID0gRE9NLnNlbGVjdEVsZW0oJyN0aXRsZUlucCcpO1xuICAgICAgICAgdGl0bGVJbnAudmFsdWUgPSAnJztcbiAgICAgfVxuXG4gICAgIGNvbnN0IHRvZ2dsZVNpemUgPSBmdW5jdGlvbihldmVudCl7XG4gICAgICAgIGlmIChldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdkaXNhYmxlZFRvZ2dsZScpKXtcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgICAgIGlmIChldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdwcm9qZWN0Jykpe1xuXG4gICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IERPTS5zZWxlY3RFbGVtKGAjY29udGFpbmVyJHtldmVudC50YXJnZXQuZGF0YXNldC5pZH1gICkgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICBjb250YWluZXIuY2xhc3NMaXN0LnRvZ2dsZSgnbm9uZScpO1xuXG4gICAgICAgIH1cblxuICAgICAgICBlbHNlIHtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IGZvcm0gPSBldmVudC50YXJnZXQucGFyZW50RWxlbWVudDtcbiAgICAgICAgY29uc3QgcHJvamVjdCA9IGV2ZW50LnRhcmdldC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQ7ICAgIFxuICAgICAgICBjb25zdCBmb3JtQ2hpbGRyZW4gPSBBcnJheS5mcm9tKGZvcm0uY2hpbGRyZW4pO1xuICAgICAgICBmb3JtQ2hpbGRyZW4uZm9yRWFjaChpdG0gPT4gaXRtLmRhdGFzZXQuY2xhc3MgPT09IGBjaGlsZCR7cHJvamVjdC5kYXRhc2V0LmlkfSR7Zm9ybS5kYXRhc2V0LmlkfWAgPyBpdG0uY2xhc3NMaXN0LnRvZ2dsZSgnbm9uZScpIDogZmFsc2UpICAgICAgIFxuICAgICAgICAgICAgXG4gICAgICAgIH1cbiAgICAgfVxuXG4gICAgIGNvbnN0IG5vdGVUeXBlR2VuZXJhdG9yID0gZnVuY3Rpb24oZXZlbnQpeyBcblxuICAgICAgICBpZihldmVudC50eXBlID09PSAnY2xpY2snKXtyZXR1cm59XG5cbiAgICAgICAgY29uc3QgZ2V0U2VsZWN0ZWQgPSAoZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICBjb25zdCBzZWxlY3QgPSAgRE9NLnNlbGVjdEVsZW0oJyNzZWxlY3QnKTtcbiAgICAgICAgICAgICByZXR1cm4gc2VsZWN0Lm9wdGlvbnNbc2VsZWN0LnNlbGVjdGVkSW5kZXhdLnZhbHVlO1xuICAgICAgICB9KSgpXG4gICAgICAgIFxuICAgICAgICBjb25zdCBfZ2VuZXJhdGVUZW1wb3JhcnlJbnB1dCA9IChmdW5jdGlvbigpe1xuICAgICAgICAgICAgY29uc3QgcHJvamVjdCA9IERPTS5zZWxlY3RFbGVtKCcjbm90ZVR5cGVGb3JtJykucGFyZW50RWxlbWVudDtcbiAgICAgICAgICAgXG4gICAgICAgIGlmIChnZXRTZWxlY3RlZCA9PT0gJ0NoZWNrbGlzdCcpeyAgICBcbiAgICAgICAgICAgIGxldCB0ZW1wb3JhcnlJbnB1dCA9IERPTS5lbGVtZW50SW5pdCgnaW5wdXQnLHsndHlwZSc6J3RleHQnLFxuICAgICAgICAgICAgJ2F1dG9jb21wbGV0ZSc6J29mZicsXG4gICAgICAgICAgICAncmVxdWlyZWQnOidyZXF1aXJlZCcsXG4gICAgICAgICAgICAnaWQnOid0ZW1wb3JhcnlJbnB1dCcsXG4gICAgICAgICAgICdjbGFzcyc6ICd0ZW1wb3JhcnlJbnB1dCBub25lJ30pOyAgXG4gICAgICAgICAgICBwcm9qZWN0LmFwcGVuZENoaWxkKHRlbXBvcmFyeUlucHV0KTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBsZXQgdGV4dEFyZWEgPSBET00uZWxlbWVudEluaXQoJ3RleHRhcmVhJywgeydpZCc6J3RlbXBvcmFyeUlucHV0JyxcbiAgICAgICAgICAgICAgICAnbmFtZSc6J2ZyZWVGb3JtJyxcbiAgICAgICAgICAgICAgICAnbGFiZWwnOidmcmVlRm9ybScsXG4gICAgICAgICAgICAgICAgJ2NsYXNzJzondGVtcG9yYXJ5SW5wdXQgbm9uZScsXG4gICAgICAgICAgICAgICAgJ2F1dG9jb21wbGV0ZSc6J29mZicsXG4gICAgICAgICAgICAgICAgJ3JlcXVpcmVkJzoncmVxdWlyZWQnLFxuICAgICAgICAgICAgICAgICdyb3dzJyA6ICc0JyxcbiAgICAgICAgICAgICAgICAnY29scycgOiAnNTAnIH0pO1xuICAgICAgICAgICAgcHJvamVjdC5hcHBlbmRDaGlsZCh0ZXh0QXJlYSk7XG4gICAgICAgICAgICAgXG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgX2dlbmVyYXRlVHJpZ2dlckJ1dHRvbnMgPSAoZnVuY3Rpb24oKXtcblxuICAgICAgICAgICAgY29uc3Qgc3VibWl0ID0gRE9NLmVsZW1lbnRJbml0KCdidXR0b24nLHsndHlwZSc6J2J1dHRvbicsXG4gICAgICAgICAgICAnaWQnOiAnc3VibWl0VHJpZ2dlcicsIFxuICAgICAgICAgICAnY2xhc3MnOidzdWJtaXRUcmlnZ2VyIG5vbmUnLFxuICAgICAgICAgICAgfSwnU3VibWl0IE5vdGUnKVxuICAgICAgICAgICAgY29uc3QgY2FuY2VsID0gRE9NLmVsZW1lbnRJbml0KCdidXR0b24nLCB7J2NsYXNzJzonY2FuY2VsVHJpZ2dlciBub25lJyxcbiAgICAgICAgICAnaWQnOidjYW5jZWxUcmlnZ2VyJ30sICdDYW5jZWwnKTtcblxuICAgICAgICAgIHByb2plY3QuYXBwZW5kQ2hpbGQoc3VibWl0KTtcbiAgICAgICAgICBwcm9qZWN0LmFwcGVuZENoaWxkKGNhbmNlbCk7XG5cbiAgICAgICAgfSkoKVxuICAgICAgICBcbiAgICAgICAgXG4gICAgICAgIH0pKClcbiAgIFxuICAgICAgICBwcm9qZWN0RXZlbnRzLnB1Ymxpc2goJ2NyZWF0ZU5vdGUnLCBnZXRTZWxlY3RlZCk7XG4gICAgICAgIHByb2plY3RFdmVudHMucHVibGlzaCgnZGVsZXRlTm90ZVR5cGVGb3JtJywgZXZlbnQpO1xuICAgICAgICBnZXRTZWxlY3RlZCA9PT0gJ0NoZWNrbGlzdCcgPyBwcm9qZWN0RXZlbnRzLnB1Ymxpc2goJ2NsZWFuRm9ybScsZXZlbnQpOiBmYWxzZTtcbiAgICAgICAgcHJvamVjdEV2ZW50cy5wdWJsaXNoKCdzYXZlZCcpO1xuICAgICAgICBcbiAgICAgICAgXG4gICAgICAgIHJldHVybiBnZXRTZWxlY3RlZFxuICAgICB9XG5cblxuXG4gICAgY29uc3QgZGVsZXRlRm9ybXMgPSBmdW5jdGlvbihldmVudCl7XG5cbiAgICAgICAgaWYoZXZlbnQudGFyZ2V0Lm5vZGVOYW1lICE9ICdCVVRUT04nICYmIGV2ZW50LnR5cGUgPT09ICdjbGljaycpe3JldHVybn0gIFxuICAgICAgICAgICAgICBcbiAgICAgICAgY29uc3QgX2NhbmNlbE5vdGVUeXBlRm9ybSA9IGZ1bmN0aW9uKCl7XG5cbiAgICAgICAgICAgIGNvbnN0IF9kZWxldGVQcm92VGl0bGUgPSBmdW5jdGlvbigpe1xuICAgICAgICAgICAgICAgICBjb25zdCBwcm92VGl0bGUgPSAgRE9NLnNlbGVjdEVsZW0oJyNwcm92VGl0bGUnKVxuICAgICAgICAgICAgICAgICBwcm92VGl0bGUgPyBwcm92VGl0bGUucmVtb3ZlKCkgOiBmYWxzZVxuICAgICAgICAgICAgICAgICByZXR1cm4gICBcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGNvbnN0IF9kZWxldGVBZGROb3RlRm9ybSA9IChmdW5jdGlvbigpe1xuICAgICAgICAgICAgICAgICBjb25zdCBub3RlVHlwZUZvcm0gPSBET00uc2VsZWN0RWxlbSgnI25vdGVUeXBlRm9ybScpO1xuICAgICAgICAgICAgICAgICBub3RlVHlwZUZvcm0gPyBub3RlVHlwZUZvcm0ucmVtb3ZlKCkgOiBmYWxzZTtcbiAgICAgICAgICAgICAgICAgcmV0dXJuXG5cbiAgICAgICAgICAgICB9KSgpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBldmVudC50YXJnZXQuY2xhc3NOYW1lID09PSAnY2FuY2VsQ2hvaWNlJyA/IF9kZWxldGVQcm92VGl0bGUoKSA6IGZhbHNlOyBcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG5cblxuICAgICAgICAgbGV0IGRlbGV0ZWQgPSBET00uc2VsZWN0RWxlbSgnI2Nob29zZVRpdGxlRm9ybScpO1xuICAgICAgICAgZGVsZXRlZCA/IGRlbGV0ZWQucmVtb3ZlKCkgOiBfY2FuY2VsTm90ZVR5cGVGb3JtKClcbiAgICAgICAgIFxuICAgICAgICAgcmV0dXJuXG5cblxuICAgIH1cblxuXG4gICAgY29uc3QgY2xlYW5Ub0RvRm9ybSA9IGZ1bmN0aW9uKCl7XG4gICAgICBcbiAgICAgIGNvbnN0IGZvcm0gPSBET00uc2VsZWN0RWxlbSgnI3N1Ym1pdE5vdGUnKS5wYXJlbnRFbGVtZW50O1xuICAgICAgY29uc3QgcHJvamVjdCA9IERPTS5zZWxlY3RFbGVtKCcjdGVtcG9yYXJ5SW5wdXQnKS5wYXJlbnRFbGVtZW50OyAgXG5cbiAgICAgIGNvbnN0IF9kZWxldGVUcmFuc2l0b3J5U3R1ZmYgPSAoZnVuY3Rpb24oKXsgIFxuICAgICAgICBsZXQgZGVsZXRlZCA9IERPTS5zZWxlY3RFbGVtKCcjdGVtcG9yYXJ5SW5wdXQnKTtcbiAgICAgICAgZGVsZXRlZC5yZW1vdmUoKTtcblxuICAgICAgICBkZWxldGVkID0gRE9NLnNlbGVjdEVsZW0oJyNzdWJtaXRUcmlnZ2VyJyk7XG4gICAgICAgIGRlbGV0ZWQucmVtb3ZlKCk7XG5cbiAgICAgICAgZGVsZXRlZCA9IERPTS5zZWxlY3RFbGVtKCcjY2FuY2VsVHJpZ2dlcicpO1xuICAgICAgICBkZWxldGVkLnJlbW92ZSgpO1xuXG4gICAgICAgIGRlbGV0ZWQgPSBET00uc2VsZWN0RWxlbSgnI3N1Ym1pdE5vdGUnKTtcbiAgICAgICAgZGVsZXRlZC5yZW1vdmUoKTtcblxuICAgICAgICBkZWxldGVkID0gRE9NLnNlbGVjdEVsZW0oJyNjYW5jZWxOb3RlJyk7XG4gICAgICAgIGRlbGV0ZWQucmVtb3ZlKCk7IFxuICAgIH0pKClcbiAgICAgIFxuXG4gICAgICBjb25zdCBfcmVtb3ZlV2hlcmVFbXB0eSA9IChmdW5jdGlvbigpe1xuICAgICAgICBcbiAgICAgICAgY29uc3QgZm9ybUNoaWxkcmVuID0gQXJyYXkuZnJvbShmb3JtLmNoaWxkcmVuKTtcbiAgICAgICAgY29uc3QgY2hpbGQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1jbGFzcz1jaGlsZCR7cHJvamVjdC5kYXRhc2V0LmlkfSR7Zm9ybS5kYXRhc2V0LmlkfV1gKVxuICAgICAgICAhKGZvcm1DaGlsZHJlbi5pbmNsdWRlcyhjaGlsZCkpID8gZm9ybS5yZW1vdmUoKSA6IGZhbHNlO1xuXG4gICAgfSkoKVxuXG4gICAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IHRvZ2dsZU9wYXF1ZSA9IGZ1bmN0aW9uKGV2ZW50KXtcbiAgICAgICAgY29uc3QgbWFpbkNvbnRDaGlsZHJlbiA9IEFycmF5LmZyb20oRE9NLnNlbGVjdEVsZW0oJyNtYWluQ29udGFpbmVyJykuY2hpbGRyZW4pO1xuICAgICAgICBjb25zdCBjb250YWluZXJDaGlsZHJlbiA9IEFycmF5LmZyb20oRE9NLnNlbGVjdEVsZW0oJyNjb250YWluZXInKS5jaGlsZHJlbik7XG4gICAgICAgIGNvbnN0IGhlYWRlciA9IERPTS5zZWxlY3RFbGVtKCcjaGVhZGVyJyk7XG4gICAgICAgIGNvbnN0IGhlYWRlckNoaWxkcmVuID0gQXJyYXkuZnJvbShoZWFkZXIuY2hpbGRyZW4pXG4gICAgICAgIGNvbnN0IHByb2pzID0gZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICAgICBjb25zdCBwcm9qcyA9IEFycmF5LmZyb20oRE9NLnNlbGVjdEVsZW0oJy5wcm9qZWN0JykpO1xuICAgICAgICAgICAgICAgIHJldHVybiBwcm9qc1xuICAgICAgICB9XG5cbiAgICAgICAgaWYoRE9NLnNlbGVjdEVsZW0oJyNjcmVhdGVGb3JtJykuY2xhc3NMaXN0LmNvbnRhaW5zKCdub25lJykgJiYgaGVhZGVyQ2hpbGRyZW5bMF0uY2xhc3NMaXN0LmNvbnRhaW5zKCdvcGFxdWUnKSl7XG4gICAgICAgICAgICBoZWFkZXJDaGlsZHJlbi5mb3JFYWNoKGNoaWxkID0+IGNoaWxkLmNsYXNzTGlzdC50b2dnbGUoJ29wYXF1ZScpLCBmYWxzZSApXG4gICAgICAgICAgICBpZihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdCcpKXtcbiAgICAgICAgICAgICAgICBwcm9qcygpLmZvckVhY2gocHJvaiA9PiBwcm9qLmNsYXNzTGlzdC50b2dnbGUoJ29wYXF1ZScsIGZhbHNlKSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVyblxuXG4gICAgICAgIH1cblxuICAgICAgIGVsc2UgaWYgKGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ3JldmVhbEZvcm0nKSl7XG4gICAgICAgICAgICBoZWFkZXJDaGlsZHJlbi5mb3JFYWNoKGNoaWxkID0+IGNoaWxkLmNsYXNzTGlzdC50b2dnbGUoJ29wYXF1ZScsIHRydWUpKVxuICAgICAgICAgICAgaWYoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QnKSl7XG4gICAgICAgICAgICAgICAgcHJvanMoKS5mb3JFYWNoKHByb2ogPT4gcHJvai5jbGFzc0xpc3QudG9nZ2xlKCdvcGFxdWUnLCB0cnVlKSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG5cbiAgICAgICAgZWxzZSB7XG4gICAgICAgIFxuICAgICAgICBjb25zdCBwcm9qZWN0Q2hpbGRyZW4gPSBBcnJheS5mcm9tKGV2ZW50LnRhcmdldC5jbG9zZXN0KCcucHJvamVjdCcpLmNoaWxkcmVuKTtcblxuICAgICAgICBpZihoZWFkZXIuY2xhc3NMaXN0LmNvbnRhaW5zKCdvcGFxdWUnKSl7XG4gICAgICAgICAgICBtYWluQ29udENoaWxkcmVuLmZvckVhY2goY2hpbGQgPT4gY2hpbGQuY2xhc3NMaXN0LnRvZ2dsZSgnb3BhcXVlJyxmYWxzZSkpO1xuICAgICAgICAgICAgY29udGFpbmVyQ2hpbGRyZW4uZm9yRWFjaChjaGlsZCA9PiBjaGlsZCA9PT0gZXZlbnQudGFyZ2V0LmNsb3Nlc3QoJy5wcm9qZWN0JykgPyBjaGlsZC5jbGFzc0xpc3QudG9nZ2xlKCdvcGFxdWVDb2xvcicsZmFsc2UpIDogY2hpbGQuY2xhc3NMaXN0LnRvZ2dsZSgnb3BhcXVlJywgZmFsc2UpKTtcbiAgICAgICAgICAgIHByb2plY3RDaGlsZHJlbi5mb3JFYWNoKGNoaWxkID0+IGNoaWxkLmNsYXNzTGlzdC50b2dnbGUoJ29wYXF1ZScsIGZhbHNlKSlcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgICAgIGVsc2V7XG4gICAgICAgICAgICBtYWluQ29udENoaWxkcmVuLmZvckVhY2goY2hpbGQgPT4gY2hpbGQgPT09IERPTS5zZWxlY3RFbGVtKCcjY29udGFpbmVyJykgPyBmYWxzZSA6IGNoaWxkLmNsYXNzTGlzdC50b2dnbGUoJ29wYXF1ZScpLHRydWUpO1xuICAgICAgICAgICAgY29udGFpbmVyQ2hpbGRyZW4uZm9yRWFjaChjaGlsZCA9PiBjaGlsZCA9PT0gZXZlbnQudGFyZ2V0LmNsb3Nlc3QoJy5wcm9qZWN0JykgPyBjaGlsZC5jbGFzc0xpc3QudG9nZ2xlKCdvcGFxdWVDb2xvcicsdHJ1ZSkgOiBjaGlsZC5jbGFzc0xpc3QudG9nZ2xlKCdvcGFxdWUnLCB0cnVlKSk7XG4gICAgICAgICAgICBwcm9qZWN0Q2hpbGRyZW4uZm9yRWFjaChjaGlsZCA9PiBjaGlsZC5jbGFzc0xpc3QuY29udGFpbnMoJ3RyYW5zaXRGb3JtJykgPyBmYWxzZSA6IGNoaWxkLmNsYXNzTGlzdC50b2dnbGUoJ29wYXF1ZScsdHJ1ZSkpO1xuICAgICAgICB9XG5cbiAgICB9XG4gICAgICAgIFxuICAgIH1cbiAgICAgICAgXG4gICAgXG4gICAgY29uc3QgZ2VuZXJhdGVOZXdBZGRDaGVjayA9IGZ1bmN0aW9uKGV2ZW50KXtcbiAgICAgICAgXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGNvbnN0IGZvcm0gPSBldmVudC50YXJnZXQucGFyZW50RWxlbWVudDtcbiAgICAgICAgY29uc3QgcHJvamVjdCA9IGZvcm0ucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50O1xuXG4gICAgICAgIGlmKERPTS5zZWxlY3RFbGVtKCcjdGVtcG9yYXJ5SW5wdXQnKSAmJiBET00uc2VsZWN0RWxlbSgnI3RlbXBvcmFyeUlucHV0JykubGFiZWwgPT09ICdmcmVlRm9ybScpe1xuICAgICAgICAgICAgRE9NLnNlbGVjdEVsZW0oJyN0ZW1wb3JhcnlJbnB1dCcpLnJlbW92ZSgpO1xuICAgICAgICAgICAgRE9NLnNlbGVjdEVsZW0oJyNzdWJtaXRUcmlnZ2VyJykucmVtb3ZlKCk7XG4gICAgICAgICAgICBET00uc2VsZWN0RWxlbSgnI2NhbmNlbFRyaWdnZXInKS5yZW1vdmUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghRE9NLnNlbGVjdEVsZW0oJyN0ZW1wb3JhcnlJbnB1dCcpKXtcbiAgICAgICAgY29uc3QgdGVtcG9yYXJ5SW5wdXQgPSBET00uZWxlbWVudEluaXQoJ2lucHV0Jyx7J3R5cGUnOid0ZXh0JyxcbiAgICAgICAgJ2F1dG9jb21wbGV0ZSc6J29mZicsXG4gICAgICAgICdyZXF1aXJlZCc6J3JlcXVpcmVkJyxcbiAgICAgICAgJ2lkJzondGVtcG9yYXJ5SW5wdXQnLFxuICAgICAgICAnY2xhc3MnOiAndGVtcG9yYXJ5SW5wdXQgbm9uZSd9KTtcblxuXG4gICAgICAgIHByb2plY3QuYXBwZW5kQ2hpbGQodGVtcG9yYXJ5SW5wdXQpO1xuXG4gICAgICAgIGNvbnN0IF9nZW5lcmF0ZVRyaWdnZXJCdXR0b25zID0gKGZ1bmN0aW9uKCl7XG5cbiAgICAgICAgICAgIGNvbnN0IHN1Ym1pdCA9IERPTS5lbGVtZW50SW5pdCgnYnV0dG9uJyx7J3R5cGUnOididXR0b24nLFxuICAgICAgICAgICAgJ2lkJzogJ3N1Ym1pdFRyaWdnZXInLCBcbiAgICAgICAgICAgJ2NsYXNzJzonc3VibWl0VHJpZ2dlciBub25lJyxcbiAgICAgICAgICAgIH0sJ1N1Ym1pdCBOb3RlJylcbiAgICAgICAgICAgIGNvbnN0IGNhbmNlbCA9IERPTS5lbGVtZW50SW5pdCgnYnV0dG9uJywgeydjbGFzcyc6J2NhbmNlbFRyaWdnZXIgbm9uZScsXG4gICAgICAgICAgJ2lkJzonY2FuY2VsVHJpZ2dlcid9LCAnQ2FuY2VsJyk7XG5cbiAgICAgICAgICBwcm9qZWN0LmFwcGVuZENoaWxkKHN1Ym1pdCk7XG4gICAgICAgICAgcHJvamVjdC5hcHBlbmRDaGlsZChjYW5jZWwpO1xuXG4gICAgICAgIH0pKClcblxuICAgICAgICBkaXNhYmxlQnRucyhldmVudC50YXJnZXQpO1xuICAgIFxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFET00uc2VsZWN0RWxlbSgnI3N1Ym1pdE5vdGUnKSl7ICAgICAgIFxuICAgICAgICAgY29uc3Qgb3JpZ2luYWxTdWJtaXQgPSBET00uZWxlbWVudEluaXQoJ2J1dHRvbicseyd0eXBlJzonc3VibWl0JyxcbiAgICAgICAgJ2lkJzogJ3N1Ym1pdE5vdGUnLCBcbiAgICAgICAgJ2NsYXNzJzonc3VibWl0Tm90ZSBoaWRkZW4nLFxuICAgICAgICB9LCcnKVxuXG4gICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQob3JpZ2luYWxTdWJtaXQpO1xuXG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGlmICghRE9NLnNlbGVjdEVsZW0oJyNjYW5jZWxOb3RlJykpeyAgICAgICBcbiAgICAgICAgICAgIGNvbnN0IGNhbmNlbCA9IERPTS5lbGVtZW50SW5pdCgnYnV0dG9uJyx7XG4gICAgICAgICAgICdpZCc6ICdjYW5jZWxOb3RlJywgXG4gICAgICAgICAgICdjbGFzcyc6J2NhbmNlbCBoaWRkZW4nLFxuICAgICAgICAgICB9LCcnKVxuICAgXG4gICAgICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQoY2FuY2VsKTtcbiAgICBcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IF9yZXZlYWxDaGVja0l0ZW0gPSAoZnVuY3Rpb24oKXtcbiAgICAgICAgY29uc3QgaW5wdXQgPSBET00uc2VsZWN0RWxlbSgnI3RlbXBvcmFyeUlucHV0Jyk7XG4gICAgICAgIGNvbnN0IHN1Ym1pdCA9IERPTS5zZWxlY3RFbGVtKCcjc3VibWl0VHJpZ2dlcicpO1xuICAgICAgICBjb25zdCBjYW5jZWwgPSBET00uc2VsZWN0RWxlbSgnI2NhbmNlbFRyaWdnZXInKTtcbiAgICAgICAgaW5wdXQuY2xhc3NMaXN0LnRvZ2dsZSgnbm9uZScsZmFsc2UpO1xuICAgICAgICBpbnB1dC5mb2N1cygpO1xuICAgICAgICBkaXNhYmxlQnRucygpO1xuICAgICAgICBzdWJtaXQuY2xhc3NMaXN0LnRvZ2dsZSgnbm9uZScsZmFsc2UpO1xuICAgICAgICBjYW5jZWwuY2xhc3NMaXN0LnRvZ2dsZSgnbm9uZScsZmFsc2UpO1xuICAgICAgICB9KSgpXG5cblxuICAgICAgICByZXR1cm5cblxuICAgIH1cblxuICAgIFxuICAgICAgY29uc3QgX2dlbmVyYXRlQ2hlY2tJdGVtID0gZnVuY3Rpb24oc3RvcmVkTm90ZT1mYWxzZSl7ICBcbiAgICAgICAgY29uc3QgaW5wdXQgPSBET00uc2VsZWN0RWxlbSgnI3RlbXBvcmFyeUlucHV0Jyk7XG4gICAgICAgIGNvbnN0IHByb2plY3QgPSAoZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIGlmIChzdG9yZWROb3RlKXtcbiAgICAgICAgICAgICAgICBjb25zdCBwcm9qcyA9IEFycmF5LmZyb20oRE9NLnNlbGVjdEVsZW0oJy5wcm9qZWN0JykpO1xuICAgICAgICAgICAgICAgIHJldHVybiBwcm9qc1twcm9qcy5sZW5ndGggLSAxXTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiBpbnB1dC5wYXJlbnRFbGVtZW50O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0pKClcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IGZvcm0gPSAoZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIGlmIChzdG9yZWROb3RlKXtcbiAgICAgICAgICAgICAgICBjb25zdCBjb250YWluZXIgPSBBcnJheS5mcm9tKERPTS5zZWxlY3RFbGVtKGAjY29udGFpbmVyJHtwcm9qZWN0LmRhdGFzZXQuaWR9YCkuY2hpbGRyZW4pLmZpbHRlcihlbGVtID0+IGVsZW0uY2xhc3NMaXN0LmNvbnRhaW5zKCd0b0RvTm90ZUlucHV0JykpXG4gICAgICAgICAgICAgICAgcmV0dXJuIGNvbnRhaW5lcltjb250YWluZXIubGVuZ3RoIC0gMV07XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gRE9NLnNlbGVjdEVsZW0oJyNzdWJtaXROb3RlJykucGFyZW50RWxlbWVudDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9KSgpXG5cbiAgICAgICAgY29uc3QgbmFtZSA9IHN0b3JlZE5vdGUgPyBzdG9yZWROb3RlLmxhYmVsIDogaW5wdXQudmFsdWVcblxuICAgICAgICBjb25zdCBkZWwgPSBET00uZWxlbWVudEluaXQoJ2J1dHRvbicsIHsnY2xhc3MnOiAnZGVsZXRlQ2hlY2sgbm9uZSd9LCdkZWxldGUnICkgXG4gICAgICAgIGNvbnN0IHRvdGFsQ2hlY2tzID0gRE9NLnNlbGVjdEVsZW0oJy5jaGVjaycpLmxlbmd0aFxuICAgICAgIFxuICAgICAgICBjb25zdCBjaGVja2JveCA9IERPTS5lbGVtZW50SW5pdCgnaW5wdXQnLCB7J3R5cGUnOidjaGVja2JveCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2lkJzogYGNoZWNrJHt0b3RhbENoZWNrcyArIDF9YCwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2NsYXNzJzonY2hlY2snLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdkYXRhLWNsYXNzJzpgY2hpbGQke3Byb2plY3QuZGF0YXNldC5pZH0ke2Zvcm0uZGF0YXNldC5pZH1gfSk7XG4gICAgICAgIGNvbnN0IGxhYmVsID0gRE9NLmVsZW1lbnRJbml0KCdsYWJlbCcsIHsnZm9yJzogYCR7bmFtZX1gLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdjbGFzcyc6ICdlZGl0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdkYXRhLWNsYXNzJzpgY2hpbGQke3Byb2plY3QuZGF0YXNldC5pZH0ke2Zvcm0uZGF0YXNldC5pZH1gfSxgJHtuYW1lfWApO1xuICAgICAgICBjb25zdCBiciA9IERPTS5lbGVtZW50SW5pdCgnYnInLHsnZGF0YS1jbGFzcyc6YGNoaWxkJHtwcm9qZWN0LmRhdGFzZXQuaWR9JHtmb3JtLmRhdGFzZXQuaWR9YH0pO1xuXG4gICAgICAgXG4gICAgICAgIGxhYmVsLmFwcGVuZENoaWxkKGRlbCk7XG4gICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQoY2hlY2tib3gpO1xuICAgICAgICBmb3JtLmFwcGVuZENoaWxkKGxhYmVsKTtcbiAgICAgICAgZm9ybS5hcHBlbmRDaGlsZChicik7XG5cbiAgICAgICAgY29uc3QgX3JldHJpZXZlQ2hlY2tWYWx1ZSA9IChmdW5jdGlvbigpe1xuICAgICAgICAgICAgaWYgKHN0b3JlZE5vdGUgJiYgc3RvcmVkTm90ZS5jaGVjayl7XG4gICAgICAgICAgICAgICAgY2hlY2tib3guY2hlY2tlZCA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pKClcblxuICAgICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCBzdWJtaXRJdGVtID0gZnVuY3Rpb24oKXtcbiAgICBcbiAgICBjb25zdCBpbnB1dCA9IERPTS5zZWxlY3RFbGVtKCcjdGVtcG9yYXJ5SW5wdXQnKTtcbiAgICBjb25zdCBwcm9qZWN0ID0gaW5wdXQucGFyZW50RWxlbWVudDtcbiAgICBjb25zdCBmb3JtID0gRE9NLnNlbGVjdEVsZW0oJyNzdWJtaXROb3RlJykucGFyZW50RWxlbWVudDtcbiAgICBjb25zdCByZW1vdmUgPSBET00uc2VsZWN0RWxlbShgI3JlbW92ZSR7aW5wdXQucGFyZW50RWxlbWVudC5kYXRhc2V0LmlkfSR7Zm9ybS5kYXRhc2V0LmlkfWApO1xuICAgIFxuICAgIGlmIChpbnB1dC52YWx1ZSA9PT0gJycpe3JldHVybn07XG5cbiAgICBpZiAoZm9ybS5jbGFzc0xpc3QuY29udGFpbnMoJ2NoZWNrYm94Jykpe1xuICAgICAgICBfZ2VuZXJhdGVDaGVja0l0ZW0oKTtcbiAgICAgICAgaW5wdXQuY2xhc3NMaXN0LnRvZ2dsZSgnbm9uZScsIHRydWUpOyAgICAgICAgXG4gICAgICAgIHJldHVyblxuICAgIH1cblxuICAgIFxuICAgIGNvbnN0IHRleHQgPSBET00uZWxlbWVudEluaXQoJ3AnLCB7J2NsYXNzJzondGV4dCBlZGl0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2RhdGEtY2xhc3MnOmBjaGlsZCR7cHJvamVjdC5kYXRhc2V0LmlkfSR7Zm9ybS5kYXRhc2V0LmlkfWB9LCBgJHtpbnB1dC52YWx1ZX1gKTtcblxuICAgIGZvcm0uYXBwZW5kQ2hpbGQodGV4dCk7XG4gICAgcmVtb3ZlLmNsYXNzTGlzdC50b2dnbGUoJ25vbmUnLGZhbHNlKTtcblxuICAgIHJldHVyblxuXG4gICB9XG5cbiAgIGNvbnN0IHRyaWdnZXJFdmVudHMgPSBmdW5jdGlvbihldmVudCl7XG4gICAgICAgY29uc3QgY2FuY2VsID0gRE9NLnNlbGVjdEVsZW0oJyNjYW5jZWxOb3RlJylcbiAgICAgICBjb25zdCBzdWJtaXQgPSBET00uc2VsZWN0RWxlbSgnI3N1Ym1pdE5vdGUnKVxuXG4gICAgICAgZXZlbnQudGFyZ2V0ID09PSBET00uc2VsZWN0RWxlbSgnI3N1Ym1pdFRyaWdnZXInKSA/IHN1Ym1pdC5jbGljaygpIDogY2FuY2VsLmNsaWNrKClcblxuICAgfVxuXG4gICBjb25zdCBkZWxldGVJdGVtID0gZnVuY3Rpb24oZXZlbnQpe1xuICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQucmVtb3ZlKCk7XG4gICAgcmV0dXJuXG4gICB9XG4gICBcbiAgIFxuICAgY29uc3QgZGVsZXRlQ2hlY2sgPSBmdW5jdGlvbihldmVudCl7XG4gICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgIGNvbnN0IGxhYmVsID0gZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnRcbiAgICAgICBjb25zdCBiciA9IGxhYmVsLm5leHRFbGVtZW50U2libGluZztcbiAgICAgICBjb25zdCBjaGVjayA9IGxhYmVsLnByZXZpb3VzRWxlbWVudFNpYmxpbmc7XG4gICAgICAgY29uc3QgZm9ybSA9IGNoZWNrLnBhcmVudEVsZW1lbnQ7XG4gICAgICAgY29uc3QgcHJvamVjdCA9IGZvcm0ucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50O1xuXG5cbiAgICAgICBici5yZW1vdmUoKSBcbiAgICAgICBjaGVjay5yZW1vdmUoKSBcbiAgICAgICBsYWJlbC5yZW1vdmUoKVxuICAgICAgIFxuICAgICAgIGNvbnN0IGZvcm1DaGlsZHJlbiA9IEFycmF5LmZyb20oZm9ybS5jaGlsZHJlbik7XG4gICAgICAgY29uc3QgY2hpbGQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1jbGFzcz1jaGlsZCR7cHJvamVjdC5kYXRhc2V0LmlkfSR7Zm9ybS5kYXRhc2V0LmlkfV1gKVxuICAgICAgICEoZm9ybUNoaWxkcmVuLmluY2x1ZGVzKGNoaWxkKSkgPyBmb3JtLnJlbW92ZSgpIDogZmFsc2U7XG4gICAgICAgXG4gICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgbW92ZUNvbnN0cnVjdCA9IGZ1bmN0aW9uKGV2ZW50KXsgXG4gICAgICAgIFxuICAgICAgICBpZihldmVudC50eXBlID09PSAnY2xpY2snKXtcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgICAgIGlmKGV2ZW50LmJ1dHRvbiAhPT0gMCl7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBsZXQgY3VycmVudERyb3BwYWJsZSA9IG51bGw7XG5cbiAgICAgICAgY29uc3QgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnbW92ZU5vdGUnKSA/IGV2ZW50LnRhcmdldC5jbG9zZXN0KCcudG9Eb05vdGVJbnB1dCcpIDogZXZlbnQudGFyZ2V0LmNsb3Nlc3QoJy5wcm9qZWN0JylcbiAgICAgICAgdGFyZ2V0LmNsYXNzTGlzdC50b2dnbGUoJ21vdmVkJyx0cnVlKTtcbiAgICAgICAgY29uc3QgY2xvbmVkVGFyZ2V0ID0gdGFyZ2V0LmNsb25lTm9kZSh0cnVlKTtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IF9ldmVudFJlcGxpY2F0b3IgPSBmdW5jdGlvbigpe1xuICAgICAgICAgICAgaWYgKGNsb25lZFRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ3Byb2plY3QnKSl7XG4gICAgICAgICAgICAgICAgY2xvbmVkVGFyZ2V0Lm9uY2xpY2sgPSBkZWxlZ2F0b3I7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBtb3ZlQnRucyA9IEFycmF5LmZyb20oRE9NLnNlbGVjdEVsZW0oJy5tb3ZlJykpLmZpbHRlcihjaGlsZCA9PiBjaGlsZC5jbG9zZXN0KCcucHJvamVjdCcpLmlkID09PSBjbG9uZWRUYXJnZXQuY2xvc2VzdCgnLnByb2plY3QnKS5pZCk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIG1vdmVCdG5zLmZvckVhY2goYnRuID0+IGJ0bi5vbm1vdXNlZG93biA9IGRlbGVnYXRvcilcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IF9yZXR1cm5Ub0RlZmF1bHQgPSBmdW5jdGlvbigpe1xuICAgICAgICAgICAgdGFyZ2V0LnJlbW92ZSgpO1xuICAgICAgICAgICAgY2xvbmVkVGFyZ2V0LmNsYXNzTGlzdC50b2dnbGUoJ25vbmUnLGZhbHNlKTtcbiAgICAgICAgICAgIF9ldmVudFJlcGxpY2F0b3IoKVxuICAgICAgICAgICAgXG4gICAgICAgIH1cblxuICAgICAgICBjbG9uZWRUYXJnZXQuY2xhc3NMaXN0LnRvZ2dsZSgnbm9uZScsdHJ1ZSk7ICAgICAgICBcbiAgICAgICAgdGFyZ2V0LnBhcmVudEVsZW1lbnQuYXBwZW5kQ2hpbGQoY2xvbmVkVGFyZ2V0KTtcbiAgICAgICAgXG4gICAgICAgIGxldCBzaGlmdFggPSBldmVudC5jbGllbnRYIC0gdGFyZ2V0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmxlZnQ7XG4gICAgICAgIGxldCBzaGlmdFkgPSBldmVudC5jbGllbnRZIC0gdGFyZ2V0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcDtcbiAgICAgICAgY29uc3QgbW92ZUJ0biA9IGV2ZW50LnRhcmdldDtcblxuICAgICAgICBjb25zdCBfY29tbWVuY2VNb3ZlID0gKGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHRhcmdldC5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XG4gICAgICAgICAgICB0YXJnZXQuc3R5bGUuekluZGV4ID0gMTAwMDtcbiAgICAgICAgICAgIHRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ3RvRG9Ob3RlSW5wdXQnKSA/IHRhcmdldC5zdHlsZS53aWR0aCA9ICc0MnZ3JyA6IGZhbHNlO1xuICAgICAgICAgICAgZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC50b2dnbGUoJ21vdmluZycsdHJ1ZSk7XG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRhcmdldCk7ICAgICAgICAgICBcblxuICAgICAgICB9KSgpXG4gICAgICAgIFxuXG4gICAgICAgIGNvbnN0IF9tb3ZlQXQgPSBmdW5jdGlvbihwYWdlWCwgcGFnZVkpe1xuICAgICAgICAgICAgdGFyZ2V0LnN0eWxlLmxlZnQgPSBwYWdlWCAtIHNoaWZ0WCArICdweCc7XG4gICAgICAgICAgICB0YXJnZXQuc3R5bGUudG9wID0gcGFnZVkgLSBzaGlmdFkgKyAncHgnXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBfb25Nb3VzZU1vdmUgPSBmdW5jdGlvbihldmVudCl7XG5cbiAgICAgICAgICAgIF9tb3ZlQXQoZXZlbnQucGFnZVgsZXZlbnQucGFnZVkpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICB0YXJnZXQuY2xhc3NMaXN0LnRvZ2dsZSgnbm9uZScsdHJ1ZSk7XG4gICAgICAgICAgICBsZXQgZWxlbSA9IGRvY3VtZW50LmVsZW1lbnRGcm9tUG9pbnQoZXZlbnQuY2xpZW50WCwgZXZlbnQuY2xpZW50WSk7XG4gICAgICAgICAgICB0YXJnZXQuY2xhc3NMaXN0LnRvZ2dsZSgnbm9uZScsZmFsc2UpO1xuICAgICAgICAgICAgaWYoIWVsZW0pe3JldHVybiBfcmV0dXJuVG9EZWZhdWx0KCl9XG5cbiAgICAgICAgICAgIC8vT3BlbnMgcHJvamVjdHMgd2hlbiB0b2Rvbm90ZSBtb3ZlcyBvdmVyIHRoZW0sIGFuZCBjbG9zZXMgdGhlbSBzaG91bGQgaXQgbGVhdmUuXG4gICAgICAgICAgICBpZihlbGVtLmNsb3Nlc3QoJy5wcm9qZWN0JykgJiYgdGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygndG9Eb05vdGVJbnB1dCcpKXtcbiAgICAgICAgICAgICAgICBjb25zdCBjdXJyZW50UHJvaiA9IGVsZW0uY2xvc2VzdCgnLnByb2plY3QnKTtcbiAgICAgICAgICAgICAgICBjb25zdCBjb250YWluZXIgPSBET00uc2VsZWN0RWxlbShgI2NvbnRhaW5lciR7Y3VycmVudFByb2ouZGF0YXNldC5pZH1gKTtcbiAgICAgICAgICAgICAgICBpZiAoY3VycmVudERyb3BwYWJsZSAmJiBjdXJyZW50RHJvcHBhYmxlICE9PSBjdXJyZW50UHJvail7XG4gICAgICAgICAgICAgICAgICAgIERPTS5zZWxlY3RFbGVtKGAjY29udGFpbmVyJHtjdXJyZW50RHJvcHBhYmxlLmRhdGFzZXQuaWR9YCkuY2xhc3NMaXN0LnRvZ2dsZSgnbm9uZScsdHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnREcm9wcGFibGUgPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29udGFpbmVyLmNsYXNzTGlzdC50b2dnbGUoJ25vbmUnLGZhbHNlKTtcbiAgICAgICAgICAgICAgICBjdXJyZW50RHJvcHBhYmxlID0gY3VycmVudFByb2o7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIFxuICAgICAgICB9ICAgICAgXG5cbiAgICAgICAgY29uc3QgcGxhY2VJdGVtID0gZnVuY3Rpb24oZXZlbnQpe1xuXG4gICAgICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBfb25Nb3VzZU1vdmUpO1xuXG4gICAgICAgICAgICB0YXJnZXQuY2xhc3NMaXN0LnRvZ2dsZSgnbm9uZScsdHJ1ZSk7XG4gICAgICAgICAgICBsZXQgZWxlbUJlbG93ID0gZG9jdW1lbnQuZWxlbWVudEZyb21Qb2ludChldmVudC5jbGllbnRYLCBldmVudC5jbGllbnRZKTtcbiAgICAgICAgICAgIHRhcmdldC5jbGFzc0xpc3QudG9nZ2xlKCdub25lJyxmYWxzZSk7XG5cbiAgICAgICAgICAgIGlmKCFlbGVtQmVsb3cpe3JldHVybiBfcmV0dXJuVG9EZWZhdWx0KCl9ICAgICAgICAgICAgXG4gXG4gICAgICAgICAgICBjb25zdCBjb250YWluZXIgPSBET00uc2VsZWN0RWxlbSgnI2NvbnRhaW5lcicpO1xuICAgICAgICAgICAgXG5cbiAgICAgICAgICAgIGNvbnN0IF9yZWd1bGFyaXNlTm90ZURhdGEgPSBmdW5jdGlvbigpe1xuXG4gICAgICAgICAgICAgICBpZihlbGVtQmVsb3cuY2xvc2VzdCgnLnByb2plY3QnKSA9PT0gY2xvbmVkVGFyZ2V0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudCAmJiBjbG9uZWRUYXJnZXQubmV4dEVsZW1lbnRTaWJsaW5nID09PSB0YXJnZXQpe1xuICAgICAgICAgICAgICAgICAgIHJldHVybiBfcmV0dXJuVG9EZWZhdWx0KClcbiAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjbG9uZWRUYXJnZXQucmVtb3ZlKClcbiAgICAgICAgICAgICAgICBjb25zdCBwcm9qZWN0ID0gZWxlbUJlbG93LmNsb3Nlc3QoJy5wcm9qZWN0Jyk7XG4gICAgICAgICAgICAgICAgY29uc3QgZm9ybUNvbnRhaW5lciA9IEFycmF5LmZyb20oRE9NLnNlbGVjdEVsZW0oYCNjb250YWluZXIke3Byb2plY3QuZGF0YXNldC5pZH1gKS5jaGlsZHJlbilcbiAgICAgICAgICAgICAgICBmb3JtQ29udGFpbmVyLmZvckVhY2goZnVuY3Rpb24oZWxlbWVudCl7IFxuICAgICAgICAgICAgICAgICAgIGNvbnN0IGVsZW1lbnRDaGlsZHJlbiA9IEFycmF5LmZyb20oZWxlbWVudC5jaGlsZHJlbik7ICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgY29uc3QgZGF0YUNsYXNzZXMgPSBlbGVtZW50Q2hpbGRyZW4uZmlsdGVyKGNoaWxkID0+IGNoaWxkLmhhc0F0dHJpYnV0ZSgnZGF0YS1jbGFzcycpKTtcbiAgICAgICAgICAgICAgICAgICBjb25zdCBkYXRhTmFtZXMgPSBlbGVtZW50Q2hpbGRyZW4uZmlsdGVyKGNoaWxkID0+IGNoaWxkLmhhc0F0dHJpYnV0ZSgnZGF0YS1uYW1lJykpO1xuICAgICAgICAgICAgICAgICAgIGRhdGFDbGFzc2VzLmZvckVhY2goZWxlbSA9PiBlbGVtLmRhdGFzZXQuY2xhc3MgPSBgY2hpbGQke3Byb2plY3QuZGF0YXNldC5pZH0ke2Zvcm1Db250YWluZXIuaW5kZXhPZihlbGVtZW50KX1gKTtcbiAgICAgICAgICAgICAgICAgICBkYXRhTmFtZXMuZm9yRWFjaChlbGVtID0+IGVsZW0uaWQgPSBgJHtlbGVtLmRhdGFzZXQubmFtZX0ke3Byb2plY3QuZGF0YXNldC5pZH0ke2Zvcm1Db250YWluZXIuaW5kZXhPZihlbGVtZW50KX1gKVxuICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuaWQgPSBgJHtlbGVtZW50LmRhdGFzZXQubmFtZX0ke3Byb2plY3QuZGF0YXNldC5pZH0ke2Zvcm1Db250YWluZXIuaW5kZXhPZihlbGVtZW50KX1gIFxuICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuZGF0YXNldC5pZCA9IGAke2Zvcm1Db250YWluZXIuaW5kZXhPZihlbGVtZW50KX1gXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZiAoZWxlbUJlbG93LmNsb3Nlc3QoJy50b0RvTm90ZUlucHV0JykgJiYgdGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygndG9Eb05vdGVJbnB1dCcpKXtcblxuICAgICAgICAgICAgICAgIGVsZW1CZWxvdy5jbG9zZXN0KCcudG9Eb05vdGVJbnB1dCcpLnBhcmVudEVsZW1lbnQuaW5zZXJ0QmVmb3JlKHRhcmdldCxlbGVtQmVsb3cuY2xvc2VzdCgnLnRvRG9Ob3RlSW5wdXQnKSk7XG4gICAgICAgICAgICAgICAgdGFyZ2V0LnJlbW92ZUF0dHJpYnV0ZSgnc3R5bGUnKTtcbiAgICAgICAgICAgICAgICBfcmVndWxhcmlzZU5vdGVEYXRhKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGVsc2UgaWYgKGVsZW1CZWxvdy5jbG9zZXN0KCcucHJvamVjdCcpKXtcbiAgICAgICAgICAgICAgICAgIGlmKHRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ3Byb2plY3QnKSl7XG4gICAgICAgICAgICAgICAgICAgICAgY29udGFpbmVyLmluc2VydEJlZm9yZSh0YXJnZXQsZWxlbUJlbG93LmNsb3Nlc3QoJy5wcm9qZWN0JykpXG4gICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0LnJlbW92ZUF0dHJpYnV0ZSgnc3R5bGUnKTtcbiAgICAgICAgICAgICAgICAgICAgICBjbG9uZWRUYXJnZXQucmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBlbHNlIGlmICh0YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCd0b0RvTm90ZUlucHV0JykpIHtcbiAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRvRG9Ob3Rlc0NvbnRhaW5lciA9ICBET00uc2VsZWN0RWxlbShgI2NvbnRhaW5lciR7ZWxlbUJlbG93LmNsb3Nlc3QoJy5wcm9qZWN0JykuZGF0YXNldC5pZH1gKTtcbiAgICAgICAgICAgICAgICAgICAgIHRvRG9Ob3Rlc0NvbnRhaW5lci5jbGFzc0xpc3QudG9nZ2xlKCdub25lJyxmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgICB0b0RvTm90ZXNDb250YWluZXIuYXBwZW5kQ2hpbGQodGFyZ2V0KTtcbiAgICAgICAgICAgICAgICAgICAgIHRhcmdldC5yZW1vdmVBdHRyaWJ1dGUoJ3N0eWxlJyk7XG4gICAgICAgICAgICAgICAgICAgICAgX3JlZ3VsYXJpc2VOb3RlRGF0YSgpXG4gICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBfcmV0dXJuVG9EZWZhdWx0KClcbiAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIG1vdmVCdG4uY2xhc3NMaXN0LnRvZ2dsZSgnbW92aW5nJyxmYWxzZSlcbiAgICAgICAgICAgIFxuICAgICAgICB9IFxuICAgICAgICAgICBcbiAgICAgICAgICBfbW92ZUF0KGV2ZW50LnBhZ2VYLGV2ZW50LnBhZ2VZKTtcbiAgICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBfb25Nb3VzZU1vdmUpO1xuICAgICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBwbGFjZUl0ZW0sIHtvbmNlOiB0cnVlfSkgICBcblxuICAgICAgICByZXR1cm4gXG5cbiAgICB9XG5cbiAgICBjb25zdCByZWdlbkZyb250UHJvaiA9IGZ1bmN0aW9uKCl7XG4gICAgICAgIGNvbnN0IGFjY2Vzc0FsbCA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmFjY2Vzcyk7XG4gICAgICAgIGFjY2Vzc0FsbC5mb3JFYWNoKGZ1bmN0aW9uKGVsZW0pe1xuICAgICAgICAgICAgaWYoYWNjZXNzQWxsLmxlbmd0aCA+IDApe1xuICAgICAgICAgICAgY3JlYXRlUHJvamVjdChlbGVtLm5hbWUpO1xuICAgICAgICAgICAgY29uc3QgYWxsRG9tUHJvanMgPSBBcnJheS5mcm9tKERPTS5zZWxlY3RFbGVtKCcucHJvamVjdCcpKTtcbiAgICAgICAgICAgIGNvbnN0IGZyb250UHJvaiA9IGFsbERvbVByb2pzW2FsbERvbVByb2pzLmxlbmd0aCAtIDFdO1xuXG4gICAgICAgICAgICBjb25zdCBfcmVnZW5Gcm9udFRvRG9Gb3JtcyA9IChmdW5jdGlvbigpe1xuICAgICAgICAgICAgICAgICAgaWYoZWxlbS5wcm9qU3RvcmFnZS5sZW5ndGggPiAwKXtcbiAgICAgICAgICAgICAgICAgICAgICBlbGVtLnByb2pTdG9yYWdlLmZvckVhY2goZnVuY3Rpb24odG9Eb0Zvcm0pe1xuICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGZvcm0gPSBjcmVhdGVUb0RvTm90ZSh0b0RvRm9ybSlcbiAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICBjb25zdCBfcmVnZW5Gcm9udE5vdGVzID0gKGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0b0RvRm9ybS5ub3RlU3RvcmFnZS5sZW5ndGggPiAwKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdG9Eb0Zvcm0ubm90ZVN0b3JhZ2UuZm9yRWFjaChmdW5jdGlvbihub3RlKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2Ygbm90ZSA9PT0gJ29iamVjdCcpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9nZW5lcmF0ZUNoZWNrSXRlbShub3RlKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRleHQgPSBET00uZWxlbWVudEluaXQoJ3AnLCB7J2NsYXNzJzondGV4dCBlZGl0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2RhdGEtY2xhc3MnOmBjaGlsZCR7ZnJvbnRQcm9qLmRhdGFzZXQuaWR9JHtmb3JtLmRhdGFzZXQuaWR9YH0sIGAke25vdGV9YCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3JtLmNsYXNzTGlzdC5hZGQoJ2ZyZWVGb3JtJyk7IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3JtLmFwcGVuZENoaWxkKHRleHQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KX1cblxuICAgICAgICAgICAgICAgICAgICAgIH0pKClcbiAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSkoKVxuICAgICAgICB9fSlcbiAgICB9XG5cbiAgICAgcmV0dXJuIHtcbiAgICAgICAgIGNyZWF0ZVByb2plY3QsXG4gICAgICAgICBjcmVhdGVUb0RvTm90ZSxcbiAgICAgICAgIHJldmVhbENyZWF0ZUZvcm0sXG4gICAgICAgICByZXNldENyZWF0ZUZvcm0sXG4gICAgICAgICB0b2dnbGVTaXplLFxuICAgICAgICAgY2hvb3NlVG9Eb1RpdGxlRm9ybSxcbiAgICAgICAgIHN1Ym1pdFRvRG9UaXRsZSxcbiAgICAgICAgIGNob29zZU5vdGVUeXBlLFxuICAgICAgICAgbm90ZVR5cGVHZW5lcmF0b3IsXG4gICAgICAgICB0b2dnbGVPcGFxdWUsXG4gICAgICAgICBkZWxldGVGb3JtcyxcbiAgICAgICAgIGRpc2FibGVCdG5zLFxuICAgICAgICAgZW5hYmxlQnRucyxcbiAgICAgICAgIGNsZWFuVG9Eb0Zvcm0sXG4gICAgICAgICBtb2RpZnlFbGVtZW50LFxuICAgICAgICAgdHJpZ2dlckV2ZW50cyxcbiAgICAgICAgIHJldmVydE1vZGlmaWVkRWxlbWVudCxcbiAgICAgICAgIGdlbmVyYXRlTmV3QWRkQ2hlY2ssXG4gICAgICAgICBzdWJtaXRJdGVtLFxuICAgICAgICAgc3VibWl0TW9kaWZpZWRFbGVtZW50LFxuICAgICAgICAgZGVsZXRlSXRlbSxcbiAgICAgICAgIGRlbGV0ZUNoZWNrLFxuICAgICAgICAgbW92ZUNvbnN0cnVjdCxcbiAgICAgICAgIHJlZ2VuRnJvbnRQcm9qXG4gICAgICAgICBcbiAgICAgfVxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgKiBhcyBwcm9qZWN0cyBmcm9tICcuL3Byb2plY3RzJztcbmltcG9ydCB7IERPTUdlbmVyYWwgfSBmcm9tIFwiLi9oZWxwZXJzL0RPTVwiO1xuaW1wb3J0IHsgdGVtcGxhdGVET01TdHJ1Y3RzIH0gZnJvbSAnLi9wcm9qZWN0c0RPTSc7XG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCB7IHByb2plY3RFdmVudHMgfSBmcm9tICcuL3Byb2plY3RldmVudHMnO1xuXG5cbmNvbnN0IHJldmVhbFRvRG8gPSAoZnVuY3Rpb24oKXsgXG4gICAgXG4gICAgLy9DYWxsaW5nIG1vZHVsZSBPYmplY3RzXG4gICAgY29uc3QgRE9NID0gRE9NR2VuZXJhbCgpO1xuICAgIGNvbnN0IHN0cnVjdHMgPSB0ZW1wbGF0ZURPTVN0cnVjdHMoKTtcbiAgICBjb25zdCBtYWluID0gcHJvamVjdHMubWFpbkludGVyZmFjZTtcbiAgICBcbiAgICBcblxuICAgIC8vTW9kdWxlIG1ldGhvZHMgdG8gYmUgdXNlZFxuICAgIGNvbnN0IG5ld1Byb2ogPSBtYWluLm5ld1Byb2o7XG4gICAgY29uc3QgbG9jYWxTdG9yZSA9IG1haW4udHJhbnNmZXJUb0xvY2FsU3RvcmFnZTtcbiAgICBjb25zdCBhcHBlbmRUb1Byb2ogPSBtYWluLmFwcGVuZFRvUHJvajtcbiAgICBjb25zdCByZW1vdmVJdGVtID0gbWFpbi5yZW1vdmVJdGVtO1xuICAgIGNvbnN0IGFwcGVuZE5vdGVUb0l0ZW0gPSBtYWluLmFwcGVuZE5vdGVUb0l0ZW1cbiAgICBjb25zdCByZWNvcmRDaGVjayA9IG1haW4ucmVjb3JkQ2hlY2s7XG4gICAgY29uc3QgZGVsZXRlQ2hlY2tGcm9tU3RvcmFnZSA9IG1haW4uZGVsZXRlQ2hlY2tGcm9tU3RvcmFnZTtcbiAgICBjb25zdCBtb2RpZnlJblN0b3JhZ2UgPSBtYWluLm1vZGlmeUluU3RvcmFnZTtcbiAgICBjb25zdCBjcmVhdGVDYWNoZUZvck1vdmluZyA9IG1haW4uY3JlYXRlQ2FjaGVGb3JNb3Zpbmc7XG4gICAgY29uc3QgZXhoYXVzdENhY2hlRm9yTW92aW5nID0gbWFpbi5leGhhdXN0Q2FjaGVGb3JNb3Zpbmc7XG4gICAgY29uc3QgcmVnZW5CYWNrUHJvaiA9IG1haW4ucmVnZW5CYWNrUHJvajtcbiAgICBjb25zdCBjcmVhdGVQcm9qZWN0ID0gc3RydWN0cy5jcmVhdGVQcm9qZWN0O1xuICAgIGNvbnN0IHJldmVhbENyZWF0ZUZvcm0gPSBzdHJ1Y3RzLnJldmVhbENyZWF0ZUZvcm07XG4gICAgY29uc3QgcmVzZXRDcmVhdGVGb3JtID0gc3RydWN0cy5yZXNldENyZWF0ZUZvcm07XG4gICAgY29uc3QgdG9nZ2xlU2l6ZSA9IHN0cnVjdHMudG9nZ2xlU2l6ZTtcbiAgICBjb25zdCBjaG9vc2VUb0RvVGl0bGVGb3JtID0gc3RydWN0cy5jaG9vc2VUb0RvVGl0bGVGb3JtO1xuICAgIGNvbnN0IHN1Ym1pdFRvRG9UaXRsZSA9IHN0cnVjdHMuc3VibWl0VG9Eb1RpdGxlO1xuICAgIGNvbnN0IGNob29zZU5vdGVUeXBlID0gc3RydWN0cy5jaG9vc2VOb3RlVHlwZTtcbiAgICBjb25zdCBub3RlVHlwZUdlbmVyYXRvciA9IHN0cnVjdHMubm90ZVR5cGVHZW5lcmF0b3I7XG4gICAgY29uc3QgZGVsZXRlRm9ybXMgPSBzdHJ1Y3RzLmRlbGV0ZUZvcm1zO1xuICAgIGNvbnN0IGRpc2FibGVCdG5zID0gc3RydWN0cy5kaXNhYmxlQnRucztcbiAgICBjb25zdCBjcmVhdGVUb0RvTm90ZSA9IHN0cnVjdHMuY3JlYXRlVG9Eb05vdGU7XG4gICAgY29uc3QgZW5hYmxlQnRucyA9IHN0cnVjdHMuZW5hYmxlQnRucztcbiAgICBjb25zdCBjbGVhblRvRG9Gb3JtID0gc3RydWN0cy5jbGVhblRvRG9Gb3JtO1xuICAgIGNvbnN0IHJldmVydE1vZGlmaWVkRWxlbWVudCA9IHN0cnVjdHMucmV2ZXJ0TW9kaWZpZWRFbGVtZW50O1xuICAgIGNvbnN0IG1vZGlmeUVsZW1lbnQgPSBzdHJ1Y3RzLm1vZGlmeUVsZW1lbnQ7XG4gICAgY29uc3Qgc3VibWl0SXRlbSA9IHN0cnVjdHMuc3VibWl0SXRlbTtcbiAgICBjb25zdCBnZW5lcmF0ZU5ld0FkZENoZWNrID0gc3RydWN0cy5nZW5lcmF0ZU5ld0FkZENoZWNrO1xuICAgIGNvbnN0IHN1Ym1pdE1vZGlmaWVkRWxlbWVudCA9IHN0cnVjdHMuc3VibWl0TW9kaWZpZWRFbGVtZW50O1xuICAgIGNvbnN0IGRlbGV0ZUl0ZW0gPSBzdHJ1Y3RzLmRlbGV0ZUl0ZW07XG4gICAgY29uc3QgZGVsZXRlQ2hlY2sgPSBzdHJ1Y3RzLmRlbGV0ZUNoZWNrXG4gICAgY29uc3QgdHJpZ2dlckV2ZW50cyA9IHN0cnVjdHMudHJpZ2dlckV2ZW50cztcbiAgICBjb25zdCB0b2dnbGVPcGFxdWUgPSBzdHJ1Y3RzLnRvZ2dsZU9wYXF1ZTtcbiAgICBjb25zdCBtb3ZlQ29uc3RydWN0ID0gc3RydWN0cy5tb3ZlQ29uc3RydWN0O1xuICAgIGNvbnN0IHJlZ2VuRnJvbnRQcm9qID0gc3RydWN0cy5yZWdlbkZyb250UHJvajtcbiAgICBcbiAgICBjb25zdCBkZWxlZ2F0b3IgPSBwcm9qZWN0RXZlbnRzLmRlbGVnYXRvcjtcblxuICAgIFxuICAgIFxuICAgIC8vRXZlbnQgU3Vic2NyaXB0aW9uc1xuICAgIHByb2plY3RFdmVudHMuc3Vic2NyaWJlKCd2aWV3JywgdG9nZ2xlU2l6ZSk7XG4gICAgcHJvamVjdEV2ZW50cy5zdWJzY3JpYmUoJ2NyZWF0ZScsIGNyZWF0ZVByb2plY3QpO1xuICAgIHByb2plY3RFdmVudHMuc3Vic2NyaWJlKCdjcmVhdGUnLCByZXNldENyZWF0ZUZvcm0pO1xuICAgIHByb2plY3RFdmVudHMuc3Vic2NyaWJlKCdjcmVhdGUnLCB0b2dnbGVPcGFxdWUpO1xuICAgIHByb2plY3RFdmVudHMuc3Vic2NyaWJlKCdjcmVhdGUnLCBuZXdQcm9qKTtcbiAgICBwcm9qZWN0RXZlbnRzLnN1YnNjcmliZSgnY3JlYXRlJywgZW5hYmxlQnRucyk7ICAgXG4gICAgcHJvamVjdEV2ZW50cy5zdWJzY3JpYmUoJ2NhbmNlbENyZWF0ZU5vdGUnLCByZXNldENyZWF0ZUZvcm0pO1xuICAgIHByb2plY3RFdmVudHMuc3Vic2NyaWJlKCdjYW5jZWxDcmVhdGVOb3RlJywgdG9nZ2xlT3BhcXVlKTsgXG4gICAgcHJvamVjdEV2ZW50cy5zdWJzY3JpYmUoJ2NhbmNlbENyZWF0ZU5vdGUnLCBlbmFibGVCdG5zKTsgXG4gICAgcHJvamVjdEV2ZW50cy5zdWJzY3JpYmUoJ3NhdmVkJywgbG9jYWxTdG9yZSk7XG4gICAgcHJvamVjdEV2ZW50cy5zdWJzY3JpYmUoJ3JldmVhbCcsIGRpc2FibGVCdG5zKTtcbiAgICBwcm9qZWN0RXZlbnRzLnN1YnNjcmliZSgncmV2ZWFsJywgcmV2ZWFsQ3JlYXRlRm9ybSk7XG4gICAgcHJvamVjdEV2ZW50cy5zdWJzY3JpYmUoJ3JldmVhbCcsIHRvZ2dsZU9wYXF1ZSk7XG4gICAgcHJvamVjdEV2ZW50cy5zdWJzY3JpYmUoJ2Nob29zZVRpdGxlJywgZGlzYWJsZUJ0bnMpO1xuICAgIHByb2plY3RFdmVudHMuc3Vic2NyaWJlKCdjaG9vc2VUaXRsZScsIGNob29zZVRvRG9UaXRsZUZvcm0pO1xuICAgIHByb2plY3RFdmVudHMuc3Vic2NyaWJlKCdjaG9vc2VUaXRsZScsIHRvZ2dsZU9wYXF1ZSk7XG4gICAgcHJvamVjdEV2ZW50cy5zdWJzY3JpYmUoJ2lucHV0T3JMaXN0Jywgc3VibWl0VG9Eb1RpdGxlKTtcbiAgICBwcm9qZWN0RXZlbnRzLnN1YnNjcmliZSgnaW5wdXRPckxpc3QnLCBjaG9vc2VOb3RlVHlwZSk7XG4gICAgcHJvamVjdEV2ZW50cy5zdWJzY3JpYmUoJ25vdGVUb0RvVHlwZScsIGRlbGV0ZUZvcm1zKVxuICAgIHByb2plY3RFdmVudHMuc3Vic2NyaWJlKCdub3RlVG9Eb1R5cGUnLCBub3RlVHlwZUdlbmVyYXRvcik7XG4gICAgcHJvamVjdEV2ZW50cy5zdWJzY3JpYmUoJ2RlbGV0ZU5vdGVUeXBlRm9ybScsIGFwcGVuZFRvUHJvaik7XG4gICAgcHJvamVjdEV2ZW50cy5zdWJzY3JpYmUoJ2RlbGV0ZU5vdGVUeXBlRm9ybScsIHRvZ2dsZU9wYXF1ZSk7XG4gICAgcHJvamVjdEV2ZW50cy5zdWJzY3JpYmUoJ2RlbGV0ZU5vdGVUeXBlRm9ybScsIGRlbGV0ZUZvcm1zKTtcbiAgICBwcm9qZWN0RXZlbnRzLnN1YnNjcmliZSgnY2xlYW5Gb3JtJywgY2xlYW5Ub0RvRm9ybSk7XG4gICAgcHJvamVjdEV2ZW50cy5zdWJzY3JpYmUoJ2Fib3J0Tm90ZVR5cGVGb3JtJywgdG9nZ2xlT3BhcXVlKTtcbiAgICBwcm9qZWN0RXZlbnRzLnN1YnNjcmliZSgnYWJvcnROb3RlVHlwZUZvcm0nLCBkZWxldGVGb3Jtcyk7XG4gICAgcHJvamVjdEV2ZW50cy5zdWJzY3JpYmUoJ2Fib3J0Tm90ZVR5cGVGb3JtJywgZW5hYmxlQnRucyk7XG4gICAgcHJvamVjdEV2ZW50cy5zdWJzY3JpYmUoJ2Fib3J0Tm90ZVR5cGVGb3JtJywgZGVsZXRlRm9ybXMpO1xuICAgIHByb2plY3RFdmVudHMuc3Vic2NyaWJlKCd0cmlnZ2VyJyx0cmlnZ2VyRXZlbnRzKTtcbiAgICBwcm9qZWN0RXZlbnRzLnN1YnNjcmliZSgnY2FuY2VsTm90ZScsIGVuYWJsZUJ0bnMpO1xuICAgIHByb2plY3RFdmVudHMuc3Vic2NyaWJlKCdjYW5jZWxOb3RlJywgY2xlYW5Ub0RvRm9ybSk7ICAgICAgICBcbiAgICBwcm9qZWN0RXZlbnRzLnN1YnNjcmliZSgnbmV3Q2hlY2tJdGVtJywgZ2VuZXJhdGVOZXdBZGRDaGVjayk7XG4gICAgcHJvamVjdEV2ZW50cy5zdWJzY3JpYmUoJ2NyZWF0ZU5vdGUnLCBjcmVhdGVUb0RvTm90ZSk7XG4gICAgcHJvamVjdEV2ZW50cy5zdWJzY3JpYmUoJ3N1Ym1pdE5vdGUnLCBzdWJtaXRJdGVtKTtcbiAgICBwcm9qZWN0RXZlbnRzLnN1YnNjcmliZSgnc3VibWl0Tm90ZScsIGVuYWJsZUJ0bnMpO1xuICAgIHByb2plY3RFdmVudHMuc3Vic2NyaWJlKCdzdWJtaXROb3RlJywgYXBwZW5kVG9Qcm9qKTtcbiAgICBwcm9qZWN0RXZlbnRzLnN1YnNjcmliZSgnc3VibWl0Tm90ZScsIGFwcGVuZE5vdGVUb0l0ZW0pO1xuICAgIHByb2plY3RFdmVudHMuc3Vic2NyaWJlKCdzdWJtaXROb3RlJywgY2xlYW5Ub0RvRm9ybSk7XG4gICAgcHJvamVjdEV2ZW50cy5zdWJzY3JpYmUoJ21vZGlmeUVsZW0nLCBtb2RpZnlFbGVtZW50KTtcbiAgICBwcm9qZWN0RXZlbnRzLnN1YnNjcmliZSgncmV2ZXJ0JywgcmV2ZXJ0TW9kaWZpZWRFbGVtZW50KTtcbiAgICBwcm9qZWN0RXZlbnRzLnN1YnNjcmliZSgnc3VibWl0TW9kJywgbW9kaWZ5SW5TdG9yYWdlKTtcbiAgICBwcm9qZWN0RXZlbnRzLnN1YnNjcmliZSgnc3VibWl0TW9kJywgc3VibWl0TW9kaWZpZWRFbGVtZW50KVxuICAgIHByb2plY3RFdmVudHMuc3Vic2NyaWJlKCdkZWxldGUnLCByZW1vdmVJdGVtKTsgICAgXG4gICAgcHJvamVjdEV2ZW50cy5zdWJzY3JpYmUoJ2RlbGV0ZScsIGRlbGV0ZUl0ZW0pO1xuICAgIHByb2plY3RFdmVudHMuc3Vic2NyaWJlKCdkZWxldGVDaGVjaycsIGRlbGV0ZUNoZWNrRnJvbVN0b3JhZ2UpO1xuICAgIHByb2plY3RFdmVudHMuc3Vic2NyaWJlKCdkZWxldGVDaGVjaycsIGRlbGV0ZUNoZWNrKTtcbiAgICBwcm9qZWN0RXZlbnRzLnN1YnNjcmliZSgncmVjb3JkQ2hlY2snLCByZWNvcmRDaGVjayk7XG4gICAgcHJvamVjdEV2ZW50cy5zdWJzY3JpYmUoJ21vdmVJdGVtJywgY3JlYXRlQ2FjaGVGb3JNb3ZpbmcpO1xuICAgIHByb2plY3RFdmVudHMuc3Vic2NyaWJlKCdtb3ZlSXRlbScsIG1vdmVDb25zdHJ1Y3QpO1xuICAgIHByb2plY3RFdmVudHMuc3Vic2NyaWJlKCdtb3ZlSXRlbScsIGV4aGF1c3RDYWNoZUZvck1vdmluZyk7XG4gICAgcHJvamVjdEV2ZW50cy5zdWJzY3JpYmUoJ3JlZ2VuJywgcmVnZW5CYWNrUHJvaik7XG4gICAgcHJvamVjdEV2ZW50cy5zdWJzY3JpYmUoJ3JlZ2VuJywgcmVnZW5Gcm9udFByb2opO1xuICAgIHByb2plY3RFdmVudHMuc3Vic2NyaWJlKCdyZWdlbicsIGVuYWJsZUJ0bnMpO1xuICAgIFxuXG5cbiAgICAvL0luaXRpYWwgZWxlbWVudHNcbiAgICBjb25zdCBtYWluQ29udGFpbmVyID0gKGZ1bmN0aW9uKCl7XG4gICAgXG4gICAgICAgIGNvbnN0IG1haW5Db250ID0gIERPTS5lbGVtZW50SW5pdCgnZGl2Jyx7J2lkJzonbWFpbkNvbnRhaW5lcid9KVxuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG1haW5Db250KVxuICAgICAgICByZXR1cm4gbWFpbkNvbnRcbiAgICAgXG59KSgpXG5cbiAgICBjb25zdCBoZWFkZXIgPSAoZnVuY3Rpb24oKXtcbiAgICAgICAgXG4gICAgICAgIC8vSW5pdGlhbGlzZSBlbGVtZW50c1xuICAgICAgICBjb25zdCBoZWFkID0gRE9NLmVsZW1lbnRJbml0KCdoZWFkZXInLCB7J2lkJzonaGVhZGVyJ30pO1xuICAgICAgICBjb25zdCB0aXRsZSA9IERPTS5lbGVtZW50SW5pdCgnaDEnLHsnaWQnOiAndGl0bGUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnY2xhc3MnOiAnaGVhZGVyQ2hpbGQnfSwgJ1Byb2plY3QgTWFuYWdlcicpO1xuICAgICAgICBjb25zdCByZXZlYWxGb3JtID0gRE9NLmVsZW1lbnRJbml0KCdidXR0b24nLHsnY2xhc3MnOidyZXZlYWxGb3JtIGhlYWRlckNoaWxkJ30sJ05ldyBQcm9qZWN0Jyk7XG4gICAgICAgIFxuICAgICAgICAvL0FkZCBoZWFkZXIgZXZlbnQgbGlzdGVuZXJcbiAgICAgICAgaGVhZC5vbmNsaWNrID0gZGVsZWdhdG9yO1xuICAgICAgICBcbiAgICAgICAgLy9BcHBlbmQgdG8gZG9jdW1lbnRcbiAgICAgICAgaGVhZC5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gICAgICAgIGhlYWQuYXBwZW5kQ2hpbGQocmV2ZWFsRm9ybSk7XG4gICAgICAgIG1haW5Db250YWluZXIuYXBwZW5kQ2hpbGQoaGVhZCk7XG5cbiAgICAgICAgcmV0dXJuIGhlYWQ7XG59KSgpXG5cbmNvbnN0IHByb2plY3RzQ29udGFpbmVyID0gKGZ1bmN0aW9uKCl7XG4gICAgICAgIFxuICAgIGNvbnN0IGNvbnRhaW5lciA9ICBET00uZWxlbWVudEluaXQoJ2RpdicseydpZCc6J2NvbnRhaW5lcid9KVxuXG4gICAgbWFpbkNvbnRhaW5lci5hcHBlbmRDaGlsZChjb250YWluZXIpXG4gICAgcmV0dXJuIGNvbnRhaW5lclxufSkoKVxuICAgIFxuICAgIGNvbnN0IGRlZmF1bHRQcm9qZWN0ID0gKGZ1bmN0aW9uKCl7XG4gICAgICAgIFxuICAgIH0pKClcblxuICAgIFxuICAgIC8vVGhlIGJlbG93IHdpbGwgdXNlIGxvY2FsU3RvcmFnZSB0byBjaGVja1xuICAgIC8vaWYgdGhlIHVzZXIgaGFzIGFueSBzYXZlZCBpbnN0YW5jZXNcbiAgICAvL29mIHByb2plY3RzIGFuZCByZW5kZXIgdGhlbSBpZiBzby4gXG5cbiAgICBjb25zdCByZW5kZXJMb2NhbFN0b3JhZ2UgPSAoZnVuY3Rpb24oKXtcbiAgICAgICAgaWYgKGxvY2FsU3RvcmFnZS5hY2Nlc3Mpe1xuICAgICAgICAgICAgaWYgKGxvY2FsU3RvcmFnZS5hY2Nlc3MubGVuZ3RoID4gMCl7XG4gICAgICAgICAgICAgICAgcHJvamVjdEV2ZW50cy5wdWJsaXNoKCdyZWdlbicpXG4gICAgICAgICAgICB9IFxuICAgICAgICB9IFxuXG4gICAgfSkoKVxuXG5cbiAgICAgXG4gICAgY29uc3QgY3JlYXRlRm9ybSA9IChmdW5jdGlvbigpe1xuICAgICAgICAgY29uc3QgZm9ybSA9IERPTS5lbGVtZW50SW5pdCgnZm9ybScseydpZCc6J2NyZWF0ZUZvcm0nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdjbGFzcyc6J25vbmUgcHJvamVjdEZvcm0gdHJhbnNpdEZvcm0nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgZm9ybS5hcHBlbmRDaGlsZChET00uZWxlbWVudEluaXQoJ2JyJykpOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICBmb3JtLmFwcGVuZENoaWxkKERPTS5lbGVtZW50SW5pdCgnbGFiZWwnLHsnZm9yJzondGl0bGVJbnAnfSwnUHJvamVjdCBUaXRsZScpKVxuICAgICAgICAgZm9ybS5hcHBlbmRDaGlsZChET00uZWxlbWVudEluaXQoJ2JyJykpO1xuICAgICAgICAgZm9ybS5hcHBlbmRDaGlsZChET00uZWxlbWVudEluaXQoJ2lucHV0Jyx7J3R5cGUnOid0ZXh0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnaWQnIDogJ3RpdGxlSW5wJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnYXV0b2NvbXBsZXRlJzogJ29mZicsICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnbmFtZSc6J3RpdGxlSW5wJ30pKTtcbiAgICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQoRE9NLmVsZW1lbnRJbml0KCdidXR0b24nLHsndHlwZSc6J3N1Ym1pdCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdjbGFzcyc6ICdzdWJtaXQgbm9uZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnaWQnOidzdWJtaXRDcmVhdGVGb3JtJ30sJ3N1Ym1pdCcpKTtcbiAgICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQoRE9NLmVsZW1lbnRJbml0KCdidXR0b24nLCB7ICAndHlwZScgOiAnYnV0dG9uJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnY2xhc3MnOidjYW5jZWxOZXdQcm9qZWN0IG5vbmUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdpZCc6J2NhbmNlbE5ld1Byb2plY3QnfSwgJ2NhbmNlbCcgKSlcbiAgICAgICAgIFxuIFxuICAgICAgICAgZm9ybS5vbnN1Ym1pdCA9IGRlbGVnYXRvcjtcblxuICAgICAgICAgbWFpbkNvbnRhaW5lci5hcHBlbmRDaGlsZChmb3JtKTtcbiAgICAgICAgIFxuICAgICAgICAgY29uc3QgY2FuY2VsID0gRE9NLnNlbGVjdEVsZW0oJyNjYW5jZWxOZXdQcm9qZWN0Jyk7XG4gICAgICAgICBjYW5jZWwub25jbGljayA9IGRlbGVnYXRvcjtcblxuICAgICAgICAgcmV0dXJuIGZvcm07IFxufSkoKVxuXG5cbn0pKClcblxuICAgICJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==