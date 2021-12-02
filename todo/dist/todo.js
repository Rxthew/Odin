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
___CSS_LOADER_EXPORT___.push([module.id, "html {\n    box-sizing: border-box;\n\n}\n\n*, *:before, *:after{\n    box-sizing: inherit;\n    margin: 0;\n    padding: 0;\n}\n\nbody {\n    display: flex;\n    flex-direction: column;\n    flex-wrap: wrap;\n    min-height: 100vh;\n    width: 100vw;\n\n}\n\n.project {\n    display: flex;\n    width: 20vw;\n    min-height: 10vh;\n    height: max-content;\n    border: 1px solid black;\n    padding: 1rem;\n    flex-wrap: wrap;\n    word-break: break-all;\n    box-shadow: 5px 10px;\n    cursor: pointer;\n\n}\n\n.none {\n    display: none;\n}\n\n.toDoNoteInput {\n    border: 1px solid black;\n}\n\n.text {\n    white-space: pre-wrap;\n}\n\n.modInput {\n    white-space: pre-wrap;\n}\n\n.transitForm {\n    position: absolute;\n    z-index:0;\n    left: 50vw;\n    top: 35vh;\n    border: 1px solid;\n    padding: 2rem;\n}\n\n.hidden {\n    visibility: hidden;\n}\n\n.headerChild{\n    margin-left: auto;\n}\n\n#header {\n    display:flex;\n    justify-content: center;\n}\n\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,sBAAsB;;AAE1B;;AAEA;IACI,mBAAmB;IACnB,SAAS;IACT,UAAU;AACd;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,eAAe;IACf,iBAAiB;IACjB,YAAY;;AAEhB;;AAEA;IACI,aAAa;IACb,WAAW;IACX,gBAAgB;IAChB,mBAAmB;IACnB,uBAAuB;IACvB,aAAa;IACb,eAAe;IACf,qBAAqB;IACrB,oBAAoB;IACpB,eAAe;;AAEnB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,uBAAuB;AAC3B;;AAEA;IACI,qBAAqB;AACzB;;AAEA;IACI,qBAAqB;AACzB;;AAEA;IACI,kBAAkB;IAClB,SAAS;IACT,UAAU;IACV,SAAS;IACT,iBAAiB;IACjB,aAAa;AACjB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,YAAY;IACZ,uBAAuB;AAC3B","sourcesContent":["html {\n    box-sizing: border-box;\n\n}\n\n*, *:before, *:after{\n    box-sizing: inherit;\n    margin: 0;\n    padding: 0;\n}\n\nbody {\n    display: flex;\n    flex-direction: column;\n    flex-wrap: wrap;\n    min-height: 100vh;\n    width: 100vw;\n\n}\n\n.project {\n    display: flex;\n    width: 20vw;\n    min-height: 10vh;\n    height: max-content;\n    border: 1px solid black;\n    padding: 1rem;\n    flex-wrap: wrap;\n    word-break: break-all;\n    box-shadow: 5px 10px;\n    cursor: pointer;\n\n}\n\n.none {\n    display: none;\n}\n\n.toDoNoteInput {\n    border: 1px solid black;\n}\n\n.text {\n    white-space: pre-wrap;\n}\n\n.modInput {\n    white-space: pre-wrap;\n}\n\n.transitForm {\n    position: absolute;\n    z-index:0;\n    left: 50vw;\n    top: 35vh;\n    border: 1px solid;\n    padding: 2rem;\n}\n\n.hidden {\n    visibility: hidden;\n}\n\n.headerChild{\n    margin-left: auto;\n}\n\n#header {\n    display:flex;\n    justify-content: center;\n}\n\n"],"sourceRoot":""}]);
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
         case event.target.classList.contains('revealForm') : projectEvents.publish('reveal');
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
         case event.target.classList.contains('addCheckMod') : projectEvents.publish('updateCheckItem', event);
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

      //add more. 

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



//Template for a todo-note 

const singletoDoNote = function(name){


   const noteStorage = new Array();
   const toDoNote = (0,_helpers_base__WEBPACK_IMPORTED_MODULE_0__.baseCreate)(noteStorage);
   
   const addNote = function(note){
      toDoNote.add(note);
   }

   const removeNote = function(index){
      const note = _notestorage[index];
      toDoNote.remove(note, index);  
   }

   const moveNote = function(index, target){
      toDoNote.move(index, target);
        
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

   const removeFromProject = function(index){
      const todo = projStorage[index];
      project.remove(todo, index);  
   } 

   const movetoDo = function(index, target){
      project.move(index, target);
         
   }

   return {project,
           name,
           addToProject,
           projStorage 
   }

} 

//

//Overall Interface

const mainInterface = function(){
   
   const _overallStorage = new Array();
   const allToDo = (0,_helpers_base__WEBPACK_IMPORTED_MODULE_0__.baseCreate)(_overallStorage);

   const newProj = function(name){
      const proj = singleProj(name);
      allToDo.add(proj);

   }
    
   const moveProj = function(index, target){
      allToDo.move(index, target);

   }
   
   const transferToLocalStorage = function(){
         return localStorage.setItem('access', JSON.stringify(_overallStorage))
   }

   const _findProj = function(event){
      const proj = event.target.closest('.project')
      return proj.dataset.id
   }

   const _findToDo = function(event){
      const toDo = event.target.closest('.toDoNoteInput')
      return toDo.dataset.id
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
         allToDo.remove(proj)
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
      const toDoNote = toDoIndex ? proj.projStorage[toDoIndex]: false;
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
  
   
   return {
      newProj,
      transferToLocalStorage,
      appendToProj,
      removeItem,
      appendNoteToItem,
      recordCheck,
      deleteCheckFromStorage,
      modifyInStorage
      //just this for now.
   }
  
   
}



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




const templateDOMStructs = function (){

    const DOM = (0,_helpers_DOM__WEBPACK_IMPORTED_MODULE_0__.DOMGeneral)()
    const delegator = _projectevents__WEBPACK_IMPORTED_MODULE_1__.projectEvents.delegator

    const createProject = function(name){
         if (name === ''){return} 
         const reference = DOM.selectElem('.project'); 
         const proj = DOM.elementInit('div',{'id': `${name}${reference.length}`,
                                             'data-id':`${reference.length}`, 
                                             'class': 'project'},name
                                             )
        const remove = DOM.elementInit('button', {'class':'remove',
                                        'id':`remove${proj.dataset.id}`}, 'X');
                                             
        const addToDoListBtn = DOM.elementInit('button', {'class': 'addtoDoList',
                                                           'id': `add${DOM.selectElem('.project').length}`}, 'Add To-Do List');
        const modify = DOM.elementInit('button', {'class':'edit'},'Edit');
        proj.appendChild(remove);
        proj.appendChild(modify);
        proj.appendChild(DOM.elementInit('div',{ 'class':'none toDoContainer',
                                                   'id':`container${reference.length}`}));
        proj.appendChild(addToDoListBtn);

        
        proj.onclick = delegator;
                                                                      
        const container = DOM.selectElem('#container');
        container.appendChild(proj);
        
     }
     

     const createToDoNote = function(chosenType){
        const input = DOM.selectElem('#temporaryInput')
        const submitTrigger = DOM.selectElem('#submitTrigger');
        const cancelTrigger = DOM.selectElem('#cancelTrigger');
         
        const project = input.parentElement;
        const container = DOM.selectElem(`#container${project.dataset.id}`);
        const formReference = Array.from(container.children);
        
        const form = DOM.elementInit('form',{'class': 'toDoNoteInput',
                                                 'id': `toDoNoteForm${project.dataset.id}${formReference.length}`,
                                                  'data-id':`${formReference.length}` })
        const submit = DOM.elementInit('button',{'type':'submit',
                                                   'id': 'submitNote', 
                                                  'class':'submitNote hidden',
                                                   },'')
        const cancel = DOM.elementInit('button', {'class':'cancel hidden',
                                                 'id':'cancelNote'}, '');
        
        const remove = DOM.elementInit('button', {'class':'remove none',
                                                   'id':`remove${project.dataset.id}${formReference.length}`}, 'X');
        const provTitle = DOM.selectElem('#provTitle');
        const title = DOM.elementInit('label', {'class':'itemTitle',
                                                   'for':'itemTitle',                       
                                                   'name':'itemTitle',
                                                     'id':`itemTitle${project.dataset.id}${formReference.length}`,
                                                     },`${provTitle.value}`,)
        const modify = DOM.elementInit('button', {'class':'edit'},'Edit');

        
        form.appendChild(submit);
        form.appendChild(cancel);
        form.appendChild(remove);
        form.appendChild(title);
        title.appendChild(modify)
        modify.disabled = true;
        provTitle.remove();  
        

        form.onsubmit = delegator;   
         
        container.classList.toggle('none', false);
        
         
        container.appendChild(form);

        const _generateChecklist = function(){ 
           const add = DOM.elementInit('button', {'class':'addCheck',
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

       chosenType === 'Checklist' ? _generateChecklist() : _generateFreeForm();  

       return 

     }


     const disableBtns = function(trgt='n/a'){
        const allBtns = document.querySelectorAll('button');
        allBtns.forEach(btn =>  btn === trgt || btn.classList.contains('none') || btn.classList.contains('hidden') ? btn.disabled = false : btn.disabled = true);

        const allEditables = DOM.selectElem('.edit');
        allEditables.forEach(itm =>  itm === trgt || itm.classList.contains('none') ? false : itm.classList.toggle('disabledEdit', true));
        const allDisabled = DOM.selectElem('.disabledEdit');
        allDisabled.forEach(itm => itm.classList.toggle('edit',false));
    }
    
    
    const enableBtns = function(){
        const all = document.querySelectorAll('button');
        all.forEach(btn => btn.disabled = false);

        const edits = DOM.selectElem('.disabledEdit');
        edits.forEach(itm => itm.classList.toggle('edit',true));
        edits.forEach(itm => itm.classList.toggle('disabledEdit',false));
        const deleteBtns = DOM.selectElem('.deleteCheck');
        deleteBtns.forEach(btn => btn.classList.toggle('none',false));        
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
         'data-transfer':`${event.target.firstChild.nodeValue}` //temporary, update to use local storage & backend
          },'Revert Back') 
                 
         if (event.target.parentElement.classList.contains('itemTitle') || event.target.parentElement.classList.contains('project')){
             revert.dataset.transfer = event.target.parentElement.firstChild.nodeValue
        }
                    

        disableBtns();

         const _replaceWithInput = (function(){
            if(event.target.parentElement.classList.contains('itemTitle') || event.target.parentElement.classList.contains('project')){
                modInput.value = event.target.parentElement.firstChild.nodeValue;
                event.target.parentElement.firstChild.nodeValue = '';
                event.target.parentElement.appendChild(modInput);
            }
            else{
                modInput.value = event.target.firstChild.nodeValue
                event.target.replaceWith(modInput); 

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
            const value = input.value
            event.target.parentElement.firstChild.nodeValue = value;
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
        const label = DOM.elementInit('label', {'for': `${event.target.dataset.transfer}`, 'class':'edit'},`${event.target.dataset.transfer}`); //temporary, update to use local storage & backend
        const text = DOM.elementInit('p', {'class':'text edit'}, `${event.target.dataset.transfer}`); //temporary, update to use local storage & backend
        const del = DOM.elementInit('button', {'class': 'deleteCheck none'},'delete' ) 


        if(form.classList.contains('checkbox')){
            input.replaceWith(label);
            label.appendChild(del);

        }
        else if (form.classList.contains('freeForm')){
            input.replaceWith(text); 
        }

        else {
            const value = event.target.dataset.transfer; //temporary, update to use local storage & backend
            event.target.parentElement.firstChild.nodeValue = value;
            input.remove();
        }
         
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
        
     }

     const resetCreateForm = function(){
         let createForm = DOM.selectElem('#createForm');
         createForm.classList.toggle('none', true);

         let titleInp = DOM.selectElem('#titleInp');
         titleInp.value = '';
     }

     const toggleSize = function(event){
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
      
      const _convertAddCheck = (function(){ 

        let convert = DOM.selectElem(`#addCheck${project.dataset.id}${form.dataset.id}`);

        if (convert){
            convert.removeAttribute('class');
            convert.className = 'addCheckMod';
      
        }
    })()

      const _removeWhereEmpty = (function(){
        
        const formChildren = Array.from(form.children);
        const child = document.querySelector(`[data-class=child${project.dataset.id}${form.dataset.id}]`)
        !(formChildren.includes(child)) ? form.remove() : false;

    })()

        return
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
            
        _projectevents__WEBPACK_IMPORTED_MODULE_1__.projectEvents.publish('newCheckItem', event);

        return

    }

    const addNewCheck = function(event){
        event.preventDefault();
        const input = DOM.selectElem('#temporaryInput');
        const submit = DOM.selectElem('#submitTrigger');
        const cancel = DOM.selectElem('#cancelTrigger');
        input.classList.toggle('none',false);
        input.focus();
        disableBtns();
        submit.classList.toggle('none',false);
        cancel.classList.toggle('none',false);
        return
    }

    
      const _generateCheckItem = function(){  
        const input = DOM.selectElem('#temporaryInput');
        const project = input.parentElement;
        const form = DOM.selectElem('#submitNote').parentElement;

        const del = DOM.elementInit('button', {'class': 'deleteCheck none'},'delete' ) //to edit when creating dropdown
       
        const checkbox = DOM.elementInit('input', {'type':'checkbox',
                                                    'id': `check${project.dataset.id}${form.dataset.id}${input.value}`,
                                                    'class':'check',
                                                    'data-class':`child${project.dataset.id}${form.dataset.id}`});
        const label = DOM.elementInit('label', {'for': `${input.value}`,
                                                 'class': 'edit',
                                                'data-class':`child${project.dataset.id}${form.dataset.id}`},`${input.value}`);
        const br = DOM.elementInit('br',{'data-class':`child${project.dataset.id}${form.dataset.id}`});

       
        label.appendChild(del);
        form.appendChild(checkbox);
        form.appendChild(label);
        form.appendChild(br);

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

    const moveItem = function(event){
        const target = event.target.closest('.toDoNoteInput') || event.target.closest('.project')
        //let shiftX =
        //let shiftY = 

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
         deleteForms,
         disableBtns,
         enableBtns,
         cleanToDoForm,
         modifyElement,
         triggerEvents,
         revertModifiedElement,
         addNewCheck,
         generateNewAddCheck,
         submitItem,
         submitModifiedElement,
         deleteItem,
         deleteCheck,
         
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
    const main = _projects__WEBPACK_IMPORTED_MODULE_0__.mainInterface();
    

    //Module methods to be used
    const newProj = main.newProj;
    const localStore = main.transferToLocalStorage;
    const appendToProj = main.appendToProj;
    const removeItem = main.removeItem;
    const appendNoteToItem = main.appendNoteToItem
    const recordCheck = main.recordCheck;
    const deleteCheckFromStorage = main.deleteCheckFromStorage;
    const modifyInStorage = main.modifyInStorage;
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
    const addNewCheck = structs.addNewCheck;
    const revertModifiedElement = structs.revertModifiedElement;
    const modifyElement = structs.modifyElement;
    const submitItem = structs.submitItem;
    const generateNewAddCheck = structs.generateNewAddCheck;
    const submitModifiedElement = structs.submitModifiedElement;
    const deleteItem = structs.deleteItem;
    const deleteCheck = structs.deleteCheck
    const triggerEvents = structs.triggerEvents;
    const delegator = _projectevents__WEBPACK_IMPORTED_MODULE_4__.projectEvents.delegator;

    
    
    //Event Subscriptions
    _projectevents__WEBPACK_IMPORTED_MODULE_4__.projectEvents.subscribe('view', toggleSize);
    _projectevents__WEBPACK_IMPORTED_MODULE_4__.projectEvents.subscribe('create', createProject);
    _projectevents__WEBPACK_IMPORTED_MODULE_4__.projectEvents.subscribe('create', resetCreateForm);
    _projectevents__WEBPACK_IMPORTED_MODULE_4__.projectEvents.subscribe('cancelCreateNote', resetCreateForm);
    _projectevents__WEBPACK_IMPORTED_MODULE_4__.projectEvents.subscribe('create', newProj);
    _projectevents__WEBPACK_IMPORTED_MODULE_4__.projectEvents.subscribe('saved', localStore);
    _projectevents__WEBPACK_IMPORTED_MODULE_4__.projectEvents.subscribe('reveal', revealCreateForm);
    _projectevents__WEBPACK_IMPORTED_MODULE_4__.projectEvents.subscribe('chooseTitle', disableBtns);
    _projectevents__WEBPACK_IMPORTED_MODULE_4__.projectEvents.subscribe('chooseTitle', chooseToDoTitleForm);
    _projectevents__WEBPACK_IMPORTED_MODULE_4__.projectEvents.subscribe('inputOrList', submitToDoTitle);
    _projectevents__WEBPACK_IMPORTED_MODULE_4__.projectEvents.subscribe('inputOrList', chooseNoteType);
    _projectevents__WEBPACK_IMPORTED_MODULE_4__.projectEvents.subscribe('noteToDoType', deleteForms)
    _projectevents__WEBPACK_IMPORTED_MODULE_4__.projectEvents.subscribe('noteToDoType', noteTypeGenerator);
    _projectevents__WEBPACK_IMPORTED_MODULE_4__.projectEvents.subscribe('deleteNoteTypeForm', appendToProj);
    _projectevents__WEBPACK_IMPORTED_MODULE_4__.projectEvents.subscribe('deleteNoteTypeForm', deleteForms);
    _projectevents__WEBPACK_IMPORTED_MODULE_4__.projectEvents.subscribe('abortNoteTypeForm', deleteForms);
    _projectevents__WEBPACK_IMPORTED_MODULE_4__.projectEvents.subscribe('abortNoteTypeForm', enableBtns);
    _projectevents__WEBPACK_IMPORTED_MODULE_4__.projectEvents.subscribe('abortNoteTypeForm', deleteForms);
    _projectevents__WEBPACK_IMPORTED_MODULE_4__.projectEvents.subscribe('trigger',triggerEvents);
    _projectevents__WEBPACK_IMPORTED_MODULE_4__.projectEvents.subscribe('cancelNote', enableBtns);
    _projectevents__WEBPACK_IMPORTED_MODULE_4__.projectEvents.subscribe('cancelNote', cleanToDoForm);        
    _projectevents__WEBPACK_IMPORTED_MODULE_4__.projectEvents.subscribe('newCheckItem', addNewCheck);
    _projectevents__WEBPACK_IMPORTED_MODULE_4__.projectEvents.subscribe('createNote', createToDoNote);
    _projectevents__WEBPACK_IMPORTED_MODULE_4__.projectEvents.subscribe('submitNote', submitItem);
    _projectevents__WEBPACK_IMPORTED_MODULE_4__.projectEvents.subscribe('submitNote', enableBtns);
    _projectevents__WEBPACK_IMPORTED_MODULE_4__.projectEvents.subscribe('submitNote', appendToProj);
    _projectevents__WEBPACK_IMPORTED_MODULE_4__.projectEvents.subscribe('submitNote', appendNoteToItem);
    _projectevents__WEBPACK_IMPORTED_MODULE_4__.projectEvents.subscribe('submitNote', cleanToDoForm);
    _projectevents__WEBPACK_IMPORTED_MODULE_4__.projectEvents.subscribe('updateCheckItem', generateNewAddCheck);
    _projectevents__WEBPACK_IMPORTED_MODULE_4__.projectEvents.subscribe('modifyElem', modifyElement);
    _projectevents__WEBPACK_IMPORTED_MODULE_4__.projectEvents.subscribe('revert', revertModifiedElement);
    _projectevents__WEBPACK_IMPORTED_MODULE_4__.projectEvents.subscribe('submitMod', modifyInStorage);
    _projectevents__WEBPACK_IMPORTED_MODULE_4__.projectEvents.subscribe('submitMod', submitModifiedElement)
    _projectevents__WEBPACK_IMPORTED_MODULE_4__.projectEvents.subscribe('delete', removeItem);    
    _projectevents__WEBPACK_IMPORTED_MODULE_4__.projectEvents.subscribe('delete', deleteItem);
    _projectevents__WEBPACK_IMPORTED_MODULE_4__.projectEvents.subscribe('deleteCheck', deleteCheckFromStorage);
    _projectevents__WEBPACK_IMPORTED_MODULE_4__.projectEvents.subscribe('deleteCheck', deleteCheck);
    _projectevents__WEBPACK_IMPORTED_MODULE_4__.projectEvents.subscribe('recordCheck', recordCheck);
    
    


    //Initial elements
    const mainContainer = (function(){
    
        const container =  DOM.elementInit('div',{'id':'container'})
        document.body.appendChild(container)
        return container
     
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
    
    const defaultProject = (function(){
        
    })()

    
    const renderLocalStorage = function(){
        //This will use localStorage to check
        //if the user has any saved instances
        //of projects and render them if so. 
        //Remember to take account any differences in data between backend and DOM
    }


     
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
                                                     'class': 'submit',
                                                      'id':'submit'},'submit'));
         form.appendChild(DOM.elementInit('button', {  'type' : 'button',
                                                       'class':'cancelNewProject',
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuQ087QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsNEJBQTRCLHFCQUFxQjtBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLDRCQUE0QixxQkFBcUI7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ3BGTzs7QUFFUDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakUwQzs7QUFFMUMsb0JBQW9CLHVEQUFNOztBQUUxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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QXVCO0FBQzNCLElBQUksbUVBQXVCO0FBQzNCLElBQUksbUVBQXVCO0FBQzNCLElBQUksbUVBQXVCO0FBQzNCLElBQUksbUVBQXVCO0FBQzNCLElBQUksbUVBQXVCO0FBQzNCLElBQUksbUVBQXVCO0FBQzNCLElBQUksbUVBQXVCO0FBQzNCLElBQUksbUVBQXVCO0FBQzNCLElBQUksbUVBQXVCO0FBQzNCLElBQUksbUVBQXVCO0FBQzNCLElBQUksbUVBQXVCO0FBQzNCLElBQUksbUVBQXVCO0FBQzNCLElBQUksbUVBQXVCO0FBQzNCLElBQUksbUVBQXVCO0FBQzNCLElBQUksbUVBQXVCO0FBQzNCLElBQUksbUVBQXVCO0FBQzNCO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBLGtEQUFrRCxpQkFBaUI7QUFDbkU7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQSxnREFBZ0QsY0FBYztBQUM5RCw0Q0FBNEM7QUFDNUMsbUVBQW1FO0FBQ25FLHFEQUFxRCxpQ0FBaUM7QUFDdEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0EsOENBQThDO0FBQzlDO0FBQ0EsNkNBQTZDO0FBQzdDO0FBQ0EsbURBQW1ELGlCQUFpQjtBQUNwRTtBQUNBLG1EQUFtRDtBQUNuRDtBQUNBO0FBQ0Esc0VBQXNFO0FBQ3RFLG9EQUFvRDtBQUNwRDtBQUNBLG9FQUFvRTtBQUNwRSx1REFBdUQ7QUFDdkQ7QUFDQSwrRUFBK0U7QUFDL0U7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsQ0FBQzs7O0FBR0QsQ0FBQzs7QUFFRCxJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL2hlbHBlcnMvRE9NLmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvaGVscGVycy9iYXNlLmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvaGVscGVycy9ldmVudHMuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9wcm9qZWN0ZXZlbnRzLmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvcHJvamVjdHMuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9wcm9qZWN0c0RPTS5qcyIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiaHRtbCB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuXFxufVxcblxcbiosICo6YmVmb3JlLCAqOmFmdGVye1xcbiAgICBib3gtc2l6aW5nOiBpbmhlcml0O1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxufVxcblxcbmJvZHkge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgICB3aWR0aDogMTAwdnc7XFxuXFxufVxcblxcbi5wcm9qZWN0IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgd2lkdGg6IDIwdnc7XFxuICAgIG1pbi1oZWlnaHQ6IDEwdmg7XFxuICAgIGhlaWdodDogbWF4LWNvbnRlbnQ7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAgIHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcXG4gICAgYm94LXNoYWRvdzogNXB4IDEwcHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG5cXG59XFxuXFxuLm5vbmUge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4udG9Eb05vdGVJbnB1dCB7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG4udGV4dCB7XFxuICAgIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDtcXG59XFxuXFxuLm1vZElucHV0IHtcXG4gICAgd2hpdGUtc3BhY2U6IHByZS13cmFwO1xcbn1cXG5cXG4udHJhbnNpdEZvcm0ge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHotaW5kZXg6MDtcXG4gICAgbGVmdDogNTB2dztcXG4gICAgdG9wOiAzNXZoO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZDtcXG4gICAgcGFkZGluZzogMnJlbTtcXG59XFxuXFxuLmhpZGRlbiB7XFxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXG59XFxuXFxuLmhlYWRlckNoaWxke1xcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcXG59XFxuXFxuI2hlYWRlciB7XFxuICAgIGRpc3BsYXk6ZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxzQkFBc0I7O0FBRTFCOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLFNBQVM7SUFDVCxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsWUFBWTs7QUFFaEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsV0FBVztJQUNYLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLGFBQWE7SUFDYixlQUFlO0lBQ2YscUJBQXFCO0lBQ3JCLG9CQUFvQjtJQUNwQixlQUFlOztBQUVuQjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSx1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsU0FBUztJQUNULFVBQVU7SUFDVixTQUFTO0lBQ1QsaUJBQWlCO0lBQ2pCLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osdUJBQXVCO0FBQzNCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImh0bWwge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcblxcbn1cXG5cXG4qLCAqOmJlZm9yZSwgKjphZnRlcntcXG4gICAgYm94LXNpemluZzogaW5oZXJpdDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcblxcbn1cXG5cXG4ucHJvamVjdCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHdpZHRoOiAyMHZ3O1xcbiAgICBtaW4taGVpZ2h0OiAxMHZoO1xcbiAgICBoZWlnaHQ6IG1heC1jb250ZW50O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gICAgcGFkZGluZzogMXJlbTtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XFxuICAgIGJveC1zaGFkb3c6IDVweCAxMHB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuXFxufVxcblxcbi5ub25lIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLnRvRG9Ob3RlSW5wdXQge1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG59XFxuXFxuLnRleHQge1xcbiAgICB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7XFxufVxcblxcbi5tb2RJbnB1dCB7XFxuICAgIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDtcXG59XFxuXFxuLnRyYW5zaXRGb3JtIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB6LWluZGV4OjA7XFxuICAgIGxlZnQ6IDUwdnc7XFxuICAgIHRvcDogMzV2aDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQ7XFxuICAgIHBhZGRpbmc6IDJyZW07XFxufVxcblxcbi5oaWRkZW4ge1xcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxufVxcblxcbi5oZWFkZXJDaGlsZHtcXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxufVxcblxcbiNoZWFkZXIge1xcbiAgICBkaXNwbGF5OmZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgdGhpcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1tfaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaTIgPSAwOyBfaTIgPCBtb2R1bGVzLmxlbmd0aDsgX2kyKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2kyXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiZXhwb3J0IGNvbnN0IERPTUdlbmVyYWwgPSBmdW5jdGlvbigpe1xuICAgIFxuICAgIGNvbnN0IGVsZW1lbnRJbml0ID0gZnVuY3Rpb24oZWxlbSwgYXR0cnNPYmo9e30sdGV4dFN0cmluZz0nJyl7XG4gICAgICAgIFxuICAgICAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChlbGVtKTtcbiAgICAgICAgXG4gICAgICAgIGlmIChPYmplY3Qua2V5cyhhdHRyc09iaikubGVuZ3RoID4gMCl7XG4gICAgICAgICAgICBPYmplY3Qua2V5cyhhdHRyc09iaikuZm9yRWFjaChmdW5jdGlvbihhdHQpe1xuICAgICAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoYXR0LCBhdHRyc09ialthdHRdKVxuICAgICAgICB9KVxuICAgIH0gICBcbiAgICAgICAgaWYgKHRleHRTdHJpbmcubGVuZ3RoID4gMCl7XG4gICAgICAgICAgICBlbGVtZW50LnRleHRDb250ZW50ID0gdGV4dFN0cmluZztcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBlbGVtZW50ICAgICAgIFxuXG4gICAgfTtcblxuICAgY29uc3Qgc2VsZWN0RWxlbSA9IGZ1bmN0aW9uKHNlbGVjdG9yU3RyaW5nKXtcblxuICAgICAgIGlmIChzZWxlY3RvclN0cmluZ1swXSA9PT0gJyMnKXtcbiAgICAgICAgICAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3JTdHJpbmcpXG4gICAgICAgfVxuICAgICAgIGVsc2Uge1xuICAgICAgICAgICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChzZWxlY3RvclN0cmluZyk7XG4gICAgICAgfVxuICAgICAgIFxuICAgfTtcblxuICAgcmV0dXJuIHtcbiAgICAgICBlbGVtZW50SW5pdCwgXG4gICAgICAgc2VsZWN0RWxlbSxcbiAgIH1cblxufVxuXG5cblxuIiwiZXhwb3J0IGNvbnN0IGJhc2VDcmVhdGUgPSBmdW5jdGlvbihzdG9yYWdlKXtcbiAgICAgIFxuY29uc3QgX3N0b3JhZ2UgPSBzdG9yYWdlIHx8IG5ldyBBcnJheSgpO1xuXG4oZnVuY3Rpb24oKXtcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoX3N0b3JhZ2UpKXtcbiAgICAgICAgdGhyb3cgJ0Vycm9yISBBcmd1bWVudCBtdXN0IGJlIGFuIGFycmF5JztcbiAgICB9XG4gICAgfSkoKVxuICAgIFxuY29uc3QgYWRkID0gZnVuY3Rpb24oZWxlbSl7XG4gICAgX3N0b3JhZ2UucHVzaChlbGVtKTtcblxufTtcblxuY29uc3QgcmVtb3ZlID0gZnVuY3Rpb24oZWxlbSwgaW5kZXg9MCl7XG4gICAgaWYgKGluZGV4ID09PSAwKXtcbiAgICAgICAgZm9yIChsZXQgaSA9IGluZGV4OyBpIDwgX3N0b3JhZ2UubGVuZ3RoOyBpKyspe1xuICAgICAgICAgICAgaWYoX3N0b3JhZ2VbaV0gPT09IGVsZW0pe1xuICAgICAgICAgICAgICAgIF9zdG9yYWdlLnNwbGljZShpLDEpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICB9XG4gICAgICAgICB9ICAgICAgICAgXG4gICAgICAgfVxuICAgICAgIGVsc2UgaWYgKGluZGV4ID4gMCAmJiBpbmRleCA8IF9zdG9yYWdlLmxlbmd0aCl7XG4gICAgICAgICAgIF9zdG9yYWdlLnNwbGljZShpbmRleCwgMSlcbiAgICAgICB9ICBcbn07XG5cbmNvbnN0IHVwZGF0ZUJ5TG9jYXRpb24gPSBmdW5jdGlvbihpbmRleCwgcmVwbGFjZSl7XG4gICAgICAgIGlmIChpbmRleCA+IDAgJiYgaW5kZXggPCBfc3RvcmFnZS5sZW5ndGgpe1xuICAgICAgICAgICAgX3N0b3JhZ2Uuc3BsaWNlKGluZGV4LDEscmVwbGFjZSk7XG4gICAgICAgIH1cblxufTtcblxuY29uc3QgdXBkYXRlQnlFbGVtZW50ID0gZnVuY3Rpb24oZWxlbSwgcmVwbGFjZSl7XG4gICAgICAgIGZvciAobGV0IHggPSBpbmRleDsgeCA8IF9zdG9yYWdlLmxlbmd0aDsgeCsrKXtcbiAgICAgICAgICAgIGlmKF9zdG9yYWdlW3hdID09PSBlbGVtKXtcbiAgICAgICAgICAgICAgICBfc3RvcmFnZS5zcGxpY2UoeCwxLCByZXBsYWNlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH19XG59O1xuXG5cbmNvbnN0IG1vdmUgPSBmdW5jdGlvbihpbmRleCwgdGFyZ2V0KXtcbiAgICBpZiAoaW5kZXggPj0gMCAmJiBpbmRleCA8X3N0b3JhZ2UubGVuZ3RoICYmIHRhcmdldCA+PSAwICYmIHRhcmdldCA8X3N0b3JhZ2UubGVuZ3RoKXtcbiAgICAgICAgY29uc3QgbW92ZWQgPSBfc3RvcmFnZVtpbmRleF07XG4gICAgICAgIF9zdG9yYWdlLnNwbGljZShpbmRleCwxKTtcbiAgICAgICAgX3N0b3JhZ2Uuc3BsaWNlKHRhcmdldCwwLG1vdmVkKVxuICAgIFxuICAgIH0gICBcbiAgICBlbHNlIGlmKGluZGV4ID49IDAgJiYgaW5kZXggPF9zdG9yYWdlLmxlbmd0aCAmJiB0YXJnZXQgPj0gX3N0b3JhZ2UubGVuZ3RoKSB7XG4gICAgICAgIGNvbnN0IHJlcGxhY2VtZW50ID0gX3N0b3JhZ2VbaW5kZXhdO1xuICAgICAgICBfc3RvcmFnZS5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICBfc3RvcmFnZS5wdXNoKHJlcGxhY2VtZW50KTtcblxuICAgIH0gICAgXG59O1xuXG5jb25zdCBzd2FwID0gZnVuY3Rpb24oaW5kZXhBLCBpbmRleEIpe1xuICAgIGlmIChpbmRleEEgPj0gMCAmJiBpbmRleEEgPF9zdG9yYWdlLmxlbmd0aCAmJiBpbmRleEIgPj0gMCAmJiBpbmRleEIgPF9zdG9yYWdlLmxlbmd0aCl7XG4gICAgICAgIFxuICAgICAgIFtfc3RvcmFnZVtpbmRleEFdLCBfc3RvcmFnZVtpbmRleEJdXSA9IFtfc3RvcmFnZVtpbmRleEJdLCBfc3RvcmFnZVtpbmRleEFdXVxuICAgIH1cblxufTtcblxuY29uc3QgY29weSA9IGZ1bmN0aW9uIChpbmRleCl7XG4gICAgaWYgKGluZGV4ID49IDAgJiYgaW5kZXggPCBfc3RvcmFnZS5sZW5ndGgpe1xuICAgICAgICBsZXQgY2xvbmUgPSBfc3RvcmFnZVtpbmRleF07XG4gICAgICAgIF9zdG9yYWdlLnB1c2goY2xvbmUpO1xuICAgIH1cbn1cbiAgICBcbiAgICByZXR1cm4ge1xuICAgICAgICBhZGQsXG4gICAgICAgIHJlbW92ZSxcbiAgICAgICAgdXBkYXRlQnlMb2NhdGlvbixcbiAgICAgICAgdXBkYXRlQnlFbGVtZW50LFxuICAgICAgICBtb3ZlLFxuICAgICAgICBzd2FwLFxuICAgICAgICBjb3B5XG4gICAgfSAgIFxufVxuXG4iLCJleHBvcnQgY29uc3QgZXZlbnRzID0gZnVuY3Rpb24oKXtcblxuICAgIGNvbnN0IF9teUV2ZW50cyA9IHt9O1xuXG4gICAgY29uc3QgX2lzRXZlbnRIZXJlID0gZnVuY3Rpb24obmFtZSl7XG4gICAgICAgIHJldHVybiBfbXlFdmVudHMuaGFzT3duUHJvcGVydHkobmFtZSk7XG4gICAgfVxuXG4gICAgY29uc3QgX2FkZEhhbmRsZXIgPSBmdW5jdGlvbihuYW1lLCBuZXdIYW5kbGVyKXsgICAgICAgXG4gICAgICAgIFxuICAgICAgICBpZiAoIV9pc0V2ZW50SGVyZShuYW1lKSl7XG4gICAgICAgICAgICAgICAgX215RXZlbnRzW25hbWVdID0gW107XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgX215RXZlbnRzW25hbWVdLnB1c2gobmV3SGFuZGxlcikgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICB9O1xuXG4gICAgY29uc3QgcmVtb3ZlSGFuZGxlciA9IGZ1bmN0aW9uKG5hbWUsIHRvUmVtb3ZlKXtcblxuICAgICAgICBpZiAoIV9pc0V2ZW50SGVyZShuYW1lKSl7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgY29uc3QgaW5kZXggPSBfbXlFdmVudHNbbmFtZV0uaW5kZXhPZih0b1JlbW92ZSk7XG4gICAgICAgIF9teUV2ZW50c1tuYW1lXS5zcGxpY2UoaW5kZXgsIDEpXG5cbiAgICB9O1xuXG4gICAgY29uc3QgX2ZpcmVNZSA9IGZ1bmN0aW9uKG5hbWUsIC4uLm9wdGlvbmFsQXJnKXtcbiAgICAgICAgICAgIFxuICAgICAgICBpZiAoIV9pc0V2ZW50SGVyZShuYW1lKSl7XG4gICAgICAgICAgICBfbXlFdmVudHNbbmFtZV0gPSBbXTtcbiAgICAgICAgfVxuXG4gICAgICAgIF9teUV2ZW50c1tuYW1lXS5mb3JFYWNoKGZ1bmN0aW9uKGgpe1xuICAgICAgICAgICAgICAgcmV0dXJuIGgoLi4ub3B0aW9uYWxBcmcpXG4gICAgICAgIH0pXG4gICAgfTtcblxuICAgIGNvbnN0IHB1Ymxpc2ggPSBmdW5jdGlvbihuYW1lLCAuLi5vcHRpb25hbEFyZyl7IFxuICAgICAgIFxuICAgICAgICBpZiAoIV9pc0V2ZW50SGVyZShuYW1lKSl7XG4gICAgICAgICAgICBfbXlFdmVudHNbbmFtZV0gPSBbXTtcbiAgICAgICAgfTtcblxuICAgICAgICBfZmlyZU1lKG5hbWUsIC4uLm9wdGlvbmFsQXJnKVxuICAgICAgICBcbiAgICB9O1xuXG4gICAgY29uc3Qgc3Vic2NyaWJlID0gZnVuY3Rpb24obmFtZSwgbmV3SGFuZGxlcil7XG5cbiAgICAgICAgaWYgKCFfaXNFdmVudEhlcmUobmFtZSkpe1xuICAgICAgICAgICAgX215RXZlbnRzW25hbWVdID0gW107XG4gICAgICAgIH07XG4gICBcbiAgICAgICAgX2FkZEhhbmRsZXIobmFtZSwgbmV3SGFuZGxlcilcbiAgICAgICAgXG4gICAgfTsgXG5cbiAgICAgICAgICAgIFxuICAgIHJldHVybiB7XG4gICAgICAgIHB1Ymxpc2gsXG4gICAgICAgIHN1YnNjcmliZSxcbiAgICAgICAgcmVtb3ZlSGFuZGxlclxuICAgIH0gICAgXG59XG5cbiIsImltcG9ydCB7IGV2ZW50cyB9IGZyb20gXCIuL2hlbHBlcnMvZXZlbnRzXCI7XG5cbmxldCBwcm9qZWN0RXZlbnRzID0gZXZlbnRzKCk7XG5cbnByb2plY3RFdmVudHMuZGVsZWdhdG9yID0gZnVuY3Rpb24oZXZlbnQpe1xuICAgICAgc3dpdGNoKHRydWUpe1xuICAgICAgICAgY2FzZSBldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdyZXZlYWxGb3JtJykgOiBwcm9qZWN0RXZlbnRzLnB1Ymxpc2goJ3JldmVhbCcpO1xuICAgICAgICAgICBicmVhaztcbiAgICAgICAgIGNhc2UgZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnY2FuY2VsTmV3UHJvamVjdCcpIDogcHJvamVjdEV2ZW50cy5wdWJsaXNoKCdjYW5jZWxDcmVhdGVOb3RlJywgZXZlbnQpO1xuICAgICAgICAgICBicmVhaztcbiAgICAgICAgIGNhc2UgZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygncHJvamVjdEZvcm0nKTogcHJvamVjdEV2ZW50cy5wdWJsaXNoKCdjcmVhdGUnLCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGl0bGVJbnAnKS52YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3RFdmVudHMucHVibGlzaCgnc2F2ZWQnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICBjYXNlIGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ3Byb2plY3QnKTogcHJvamVjdEV2ZW50cy5wdWJsaXNoKCd2aWV3JywgZXZlbnQpO1xuICAgICAgICAgICBicmVhaztcbiAgICAgICAgIGNhc2UgZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnaXRlbVRpdGxlJyk6IHByb2plY3RFdmVudHMucHVibGlzaCgndmlldycsIGV2ZW50KTtcbiAgICAgICAgICAgYnJlYWs7ICAgICAgICAgICBcbiAgICAgICAgIGNhc2UgZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnYWRkdG9Eb0xpc3QnKTogcHJvamVjdEV2ZW50cy5wdWJsaXNoKCdjaG9vc2VUaXRsZScsIGV2ZW50KVxuICAgICAgICAgICBicmVhaztcbiAgICAgICAgIGNhc2UgZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnY2hvb3NlVGl0bGVGb3JtJyk6IHByb2plY3RFdmVudHMucHVibGlzaCgnaW5wdXRPckxpc3QnLCBldmVudClcbiAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICBjYXNlIGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2Nob29zZU5vdGVUeXBlJyk6IHByb2plY3RFdmVudHMucHVibGlzaCgnbm90ZVRvRG9UeXBlJywgZXZlbnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICBicmVhaztcbiAgICAgICAgIGNhc2UgZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnY2FuY2VsVGl0bGUnKSA6IHByb2plY3RFdmVudHMucHVibGlzaCgnYWJvcnROb3RlVHlwZUZvcm0nLCBldmVudCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICBicmVhazsgXG4gICAgICAgICBjYXNlIGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2NhbmNlbENob2ljZScpIDogcHJvamVjdEV2ZW50cy5wdWJsaXNoKCdhYm9ydE5vdGVUeXBlRm9ybScsZXZlbnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgY2FzZSBldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdhZGRDaGVjaycpIDogcHJvamVjdEV2ZW50cy5wdWJsaXNoKCduZXdDaGVja0l0ZW0nLCBldmVudCk7XG4gICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgY2FzZSBldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdhZGRDaGVja01vZCcpIDogcHJvamVjdEV2ZW50cy5wdWJsaXNoKCd1cGRhdGVDaGVja0l0ZW0nLCBldmVudCk7XG4gICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgY2FzZSBldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdjYW5jZWwnKSA6IHByb2plY3RFdmVudHMucHVibGlzaCgnY2FuY2VsTm90ZScsZXZlbnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICBjYXNlIGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2NhbmNlbFRyaWdnZXInKSA6IHByb2plY3RFdmVudHMucHVibGlzaCgndHJpZ2dlcicsZXZlbnQpO1xuICAgICAgICAgICBicmVhaztcbiAgICAgICAgIGNhc2UgZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnc3VibWl0VHJpZ2dlcicpIDogcHJvamVjdEV2ZW50cy5wdWJsaXNoKCd0cmlnZ2VyJyxldmVudCk7XG4gICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgY2FzZSBldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdlZGl0JykgOiBwcm9qZWN0RXZlbnRzLnB1Ymxpc2goJ21vZGlmeUVsZW0nLGV2ZW50KTtcbiAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICBjYXNlIGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ3N1Ym1pdE5vdGUnKSA6IHByb2plY3RFdmVudHMucHVibGlzaCgnc3VibWl0Tm90ZScsIGV2ZW50KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdEV2ZW50cy5wdWJsaXNoKCdzYXZlZCcpO1xuICAgICAgICAgICBicmVhaztcbiAgICAgICAgIGNhc2UgZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygncmV2ZXJ0TW9kJykgOiBwcm9qZWN0RXZlbnRzLnB1Ymxpc2goJ3JldmVydCcsZXZlbnQpO1xuICAgICAgICAgICBicmVhaztcbiAgICAgICAgIGNhc2UgZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnc3VibWl0TW9kJykgOiBwcm9qZWN0RXZlbnRzLnB1Ymxpc2goJ3N1Ym1pdE1vZCcsZXZlbnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3RFdmVudHMucHVibGlzaCgnc2F2ZWQnKTtcbiAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICBjYXNlIGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ3JlbW92ZScpIDogcHJvamVjdEV2ZW50cy5wdWJsaXNoKCdkZWxldGUnLCBldmVudCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdEV2ZW50cy5wdWJsaXNoKCdzYXZlZCcpO1xuICAgICAgICAgICBicmVhaztcbiAgICAgICAgIGNhc2UgZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnZGVsZXRlQ2hlY2snKSA6IHByb2plY3RFdmVudHMucHVibGlzaCgnZGVsZXRlQ2hlY2snLCBldmVudCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0RXZlbnRzLnB1Ymxpc2goJ3NhdmVkJyk7XG4gICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgY2FzZSBldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdjaGVjaycpIDogcHJvamVjdEV2ZW50cy5wdWJsaXNoKCdyZWNvcmRDaGVjaycsIGV2ZW50KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3RFdmVudHMucHVibGlzaCgnc2F2ZWQnKTtcbiAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgIC8vYWRkIG1vcmUuIFxuXG59fVxuIFxuICAgICAgIFxuXG5cblxuZXhwb3J0IHsgcHJvamVjdEV2ZW50cyB9IiwiaW1wb3J0IHsgYmFzZUNyZWF0ZSB9IGZyb20gXCIuL2hlbHBlcnMvYmFzZVwiO1xuXG5cbi8vVGVtcGxhdGUgZm9yIGEgdG9kby1ub3RlIFxuXG5leHBvcnQgY29uc3Qgc2luZ2xldG9Eb05vdGUgPSBmdW5jdGlvbihuYW1lKXtcblxuXG4gICBjb25zdCBub3RlU3RvcmFnZSA9IG5ldyBBcnJheSgpO1xuICAgY29uc3QgdG9Eb05vdGUgPSBiYXNlQ3JlYXRlKG5vdGVTdG9yYWdlKTtcbiAgIFxuICAgY29uc3QgYWRkTm90ZSA9IGZ1bmN0aW9uKG5vdGUpe1xuICAgICAgdG9Eb05vdGUuYWRkKG5vdGUpO1xuICAgfVxuXG4gICBjb25zdCByZW1vdmVOb3RlID0gZnVuY3Rpb24oaW5kZXgpe1xuICAgICAgY29uc3Qgbm90ZSA9IF9ub3Rlc3RvcmFnZVtpbmRleF07XG4gICAgICB0b0RvTm90ZS5yZW1vdmUobm90ZSwgaW5kZXgpOyAgXG4gICB9XG5cbiAgIGNvbnN0IG1vdmVOb3RlID0gZnVuY3Rpb24oaW5kZXgsIHRhcmdldCl7XG4gICAgICB0b0RvTm90ZS5tb3ZlKGluZGV4LCB0YXJnZXQpO1xuICAgICAgICBcbiAgIH1cbiAgIFxuICAgcmV0dXJuIHt0b0RvTm90ZSxcbiAgICAgICAgICAgbmFtZSxcbiAgICAgICAgICAgbm90ZVN0b3JhZ2UsXG4gICAgICAgICAgIGFkZE5vdGVcbiAgICAgICAgICAgXG59XG59XG4vL1xuXG4vL1RlbXBsYXRlIGZvciBhIHNpbmdsZSBwcm9qZWN0XG5cbmV4cG9ydCBjb25zdCBzaW5nbGVQcm9qID0gZnVuY3Rpb24obmFtZSl7XG5cbiAgIGNvbnN0IHByb2pTdG9yYWdlID0gbmV3IEFycmF5KCk7XG4gICBjb25zdCBwcm9qZWN0ID0gYmFzZUNyZWF0ZShwcm9qU3RvcmFnZSk7XG4gICBcbiAgIFxuICAgY29uc3QgYWRkVG9Qcm9qZWN0ID0gZnVuY3Rpb24obmFtZSl7XG4gICAgICBjb25zdCB0b2RvID0gc2luZ2xldG9Eb05vdGUobmFtZSlcbiAgICAgIHByb2plY3QuYWRkKHRvZG8pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICB9XG5cbiAgIGNvbnN0IHJlbW92ZUZyb21Qcm9qZWN0ID0gZnVuY3Rpb24oaW5kZXgpe1xuICAgICAgY29uc3QgdG9kbyA9IHByb2pTdG9yYWdlW2luZGV4XTtcbiAgICAgIHByb2plY3QucmVtb3ZlKHRvZG8sIGluZGV4KTsgIFxuICAgfSBcblxuICAgY29uc3QgbW92ZXRvRG8gPSBmdW5jdGlvbihpbmRleCwgdGFyZ2V0KXtcbiAgICAgIHByb2plY3QubW92ZShpbmRleCwgdGFyZ2V0KTtcbiAgICAgICAgIFxuICAgfVxuXG4gICByZXR1cm4ge3Byb2plY3QsXG4gICAgICAgICAgIG5hbWUsXG4gICAgICAgICAgIGFkZFRvUHJvamVjdCxcbiAgICAgICAgICAgcHJvalN0b3JhZ2UgXG4gICB9XG5cbn0gXG5cbi8vXG5cbi8vT3ZlcmFsbCBJbnRlcmZhY2VcblxuZXhwb3J0IGNvbnN0IG1haW5JbnRlcmZhY2UgPSBmdW5jdGlvbigpe1xuICAgXG4gICBjb25zdCBfb3ZlcmFsbFN0b3JhZ2UgPSBuZXcgQXJyYXkoKTtcbiAgIGNvbnN0IGFsbFRvRG8gPSBiYXNlQ3JlYXRlKF9vdmVyYWxsU3RvcmFnZSk7XG5cbiAgIGNvbnN0IG5ld1Byb2ogPSBmdW5jdGlvbihuYW1lKXtcbiAgICAgIGNvbnN0IHByb2ogPSBzaW5nbGVQcm9qKG5hbWUpO1xuICAgICAgYWxsVG9Eby5hZGQocHJvaik7XG5cbiAgIH1cbiAgICBcbiAgIGNvbnN0IG1vdmVQcm9qID0gZnVuY3Rpb24oaW5kZXgsIHRhcmdldCl7XG4gICAgICBhbGxUb0RvLm1vdmUoaW5kZXgsIHRhcmdldCk7XG5cbiAgIH1cbiAgIFxuICAgY29uc3QgdHJhbnNmZXJUb0xvY2FsU3RvcmFnZSA9IGZ1bmN0aW9uKCl7XG4gICAgICAgICByZXR1cm4gbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2FjY2VzcycsIEpTT04uc3RyaW5naWZ5KF9vdmVyYWxsU3RvcmFnZSkpXG4gICB9XG5cbiAgIGNvbnN0IF9maW5kUHJvaiA9IGZ1bmN0aW9uKGV2ZW50KXtcbiAgICAgIGNvbnN0IHByb2ogPSBldmVudC50YXJnZXQuY2xvc2VzdCgnLnByb2plY3QnKVxuICAgICAgcmV0dXJuIHByb2ouZGF0YXNldC5pZFxuICAgfVxuXG4gICBjb25zdCBfZmluZFRvRG8gPSBmdW5jdGlvbihldmVudCl7XG4gICAgICBjb25zdCB0b0RvID0gZXZlbnQudGFyZ2V0LmNsb3Nlc3QoJy50b0RvTm90ZUlucHV0JylcbiAgICAgIHJldHVybiB0b0RvLmRhdGFzZXQuaWRcbiAgIH1cblxuXG4gICBjb25zdCBhcHBlbmRUb1Byb2ogPSBmdW5jdGlvbihldmVudCl7XG4gICAgICBjb25zdCBpbmRleCA9IF9maW5kUHJvaihldmVudCk7XG4gICAgICBjb25zdCBkb21Qcm9qZWN0ID0gZXZlbnQudGFyZ2V0LmNsb3Nlc3QoJy5wcm9qZWN0Jyk7XG4gICAgICBjb25zdCBjdXJyZW50UHJvaiA9IF9vdmVyYWxsU3RvcmFnZVtpbmRleF07XG5cbiAgICAgIGNvbnN0IGZvcm1SZXRyaWV2ZXIgPSBmdW5jdGlvbigpe1xuICAgICAgICAgY29uc3QgZm9ybXNDb250YWluZXIgPSBBcnJheS5mcm9tKGRvbVByb2plY3QuY2hpbGRyZW4pLmZpbHRlcihjaGlsZCA9PiBjaGlsZC5jbGFzc0xpc3QuY29udGFpbnMoJ3RvRG9Db250YWluZXInKSlbMF07XG4gICAgICAgICBjb25zdCBhbGxGb3JtcyA9IEFycmF5LmZyb20oZm9ybXNDb250YWluZXIuY2hpbGRyZW4pXG4gICAgICByZXR1cm4gYWxsRm9ybXNcbiAgICB9XG5cbiAgICAgIGNvbnN0IHByb2plY3RGb3JtcyA9ICBmb3JtUmV0cmlldmVyKCkgXG4gICAgICBjb25zdCBmb3JtID0gZXZlbnQudGFyZ2V0ID09PSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc3VibWl0Tm90ZScpID8gZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQgOiBwcm9qZWN0Rm9ybXNbcHJvamVjdEZvcm1zLmxlbmd0aCAtIDFdO1xuICAgICAgXG4gICAgICBjb25zdCBmb3JtQ2hpbGRyZW4gPSBBcnJheS5mcm9tKGZvcm0uY2hpbGRyZW4pO1xuICAgICAgY29uc3QgdGl0bGUgPSBmb3JtQ2hpbGRyZW4uZmlsdGVyKGNoaWxkID0+ICBjaGlsZC5pZCA9PT0gYGl0ZW1UaXRsZSR7ZG9tUHJvamVjdC5kYXRhc2V0LmlkfSR7Zm9ybS5kYXRhc2V0LmlkfWApXG4gICAgICBjb25zdCBuYW1lID0gdGl0bGVbMF0uZmlyc3RDaGlsZC5ub2RlVmFsdWU7XG4gICAgICBjb25zdCBmb3JtQ291bnQgPSBwcm9qZWN0Rm9ybXMubGVuZ3RoIC0gMTtcbiAgICAgIFxuICAgICAgaWYgKGN1cnJlbnRQcm9qLnByb2pTdG9yYWdlLmxlbmd0aCAtIDEgPT0gZm9ybUNvdW50ICYmIGV2ZW50LnRhcmdldCA9PT0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3N1Ym1pdE5vdGUnKSl7IFxuICAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgICBcbiAgICAgY3VycmVudFByb2ouYWRkVG9Qcm9qZWN0KG5hbWUpXG4gICAgICByZXR1cm5cblxuICAgfVxuXG4gICBjb25zdCBhcHBlbmROb3RlVG9JdGVtID0gZnVuY3Rpb24oZXZlbnQpe1xuXG4gICAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0ZW1wb3JhcnlJbnB1dCcpO1xuICAgICAgaWYgKGlucHV0LnZhbHVlID09PSAnJyl7cmV0dXJufTtcblxuICAgICAgY29uc3QgcHJvakluZGV4ID0gX2ZpbmRQcm9qKGV2ZW50KTtcbiAgICAgIGNvbnN0IHRvRG9JbmRleCA9IF9maW5kVG9EbyhldmVudCk7XG4gICAgICBjb25zdCBjdXJyZW50VG9EbyA9IF9vdmVyYWxsU3RvcmFnZVtwcm9qSW5kZXhdLnByb2pTdG9yYWdlW3RvRG9JbmRleF07XG4gICAgICBjb25zdCBmb3JtID0gZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQ7XG4gICAgICBjb25zdCBmb3JtQ2hpbGRyZW4gPSBBcnJheS5mcm9tKGZvcm0uY2hpbGRyZW4pO1xuICAgICAgXG5cbiAgICAgIGNvbnN0IG5vdGUgPSBmdW5jdGlvbigpeyBcbiAgICAgICAgaWYoIGZvcm0uY2xhc3NMaXN0LmNvbnRhaW5zKCdjaGVja2JveCcpKXtcblxuICAgICAgICBjb25zdCBsYWJlbHMgPSBmb3JtQ2hpbGRyZW4uZmlsdGVyKGNoaWxkID0+IGNoaWxkLmNsYXNzTGlzdC5jb250YWlucygnZWRpdCcpKVxuICAgICAgICBjb25zdCBjdXJyZW50TGFiZWwgPSBsYWJlbHNbbGFiZWxzLmxlbmd0aCAtIDFdO1xuXG4gICAgICAgICByZXR1cm4gIHsnY2hlY2snOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAnbGFiZWwnOiBjdXJyZW50TGFiZWwuZmlyc3RDaGlsZC5ub2RlVmFsdWV9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG5cbiAgICAgICAgY29uc3QgdGV4dHMgPSBmb3JtQ2hpbGRyZW4uZmlsdGVyKGNoaWxkID0+IGNoaWxkLmNsYXNzTGlzdC5jb250YWlucygndGV4dCcpKSBcbiAgICAgICAgY29uc3QgY3VycmVudFRleHQgPSB0ZXh0c1swXTtcbiAgICAgICAgXG4gICAgICAgIHJldHVybiBjdXJyZW50VGV4dC5maXJzdENoaWxkLm5vZGVWYWx1ZVxuICAgICAgIH19XG4gICAgICBjdXJyZW50VG9Eby5hZGROb3RlKG5vdGUoKSk7XG4gICAgICByZXR1cm4gICBcbiAgICAgIH1cblxuICAgY29uc3QgcmVtb3ZlSXRlbSA9IGZ1bmN0aW9uKGV2ZW50KXtcbiAgICAgIGNvbnN0IGluZGV4ID0gX2ZpbmRQcm9qKGV2ZW50KTtcbiAgICAgIGNvbnN0IHByb2ogPSBfb3ZlcmFsbFN0b3JhZ2VbaW5kZXhdO1xuICAgICAgaWYgKGV2ZW50LnRhcmdldC5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygncHJvamVjdCcpKXtcbiAgICAgICAgIGFsbFRvRG8ucmVtb3ZlKHByb2opXG4gICAgICAgICByZXR1cm5cbiAgICAgICAgIFxuICAgICAgfVxuICAgICAgZWxzZSBpZiAoZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCd0b0RvTm90ZUlucHV0Jykpe1xuICAgICAgICAgY29uc3QgZm9ybUluZGV4ID0gX2ZpbmRUb0RvKGV2ZW50KVxuICAgICAgICAgcHJvai5wcm9qU3RvcmFnZS5zcGxpY2UoZm9ybUluZGV4LCAxKTtcbiAgICAgICAgIHJldHVybiBcblxuICAgICAgfVxuXG4gICAgICByZXR1cm5cblxuICAgfVxuXG5cbiAgIGNvbnN0IHJlY29yZENoZWNrID0gZnVuY3Rpb24oZXZlbnQpe1xuICAgICAgY29uc3QgY2hlY2sgPSBldmVudC50YXJnZXQ7XG4gICAgICBjb25zdCBmb3JtID0gZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQ7XG4gICAgICBjb25zdCBmb3JtQ2hpbGRyZW4gPSBBcnJheS5mcm9tKGZvcm0uY2hpbGRyZW4pO1xuICAgICAgY29uc3QgZm9ybUNoZWNrcyA9IGZvcm1DaGlsZHJlbi5maWx0ZXIoY2hpbGQgPT4gY2hpbGQuY2xhc3NMaXN0LmNvbnRhaW5zKCdjaGVjaycpKTtcbiAgICAgIFxuICAgICAgY29uc3QgcHJvakluZGV4ID0gX2ZpbmRQcm9qKGV2ZW50KTtcbiAgICAgIGNvbnN0IHRvRG9JbmRleCA9IF9maW5kVG9EbyhldmVudCk7XG4gICAgICBjb25zdCBjaGVja2JveEluZGV4ID0gZm9ybUNoZWNrcy5pbmRleE9mKGNoZWNrKTtcbiAgICAgIFxuXG4gICAgICBjb25zdCB0YXJnZXQgPSBfb3ZlcmFsbFN0b3JhZ2VbcHJvakluZGV4XS5wcm9qU3RvcmFnZVt0b0RvSW5kZXhdLm5vdGVTdG9yYWdlW2NoZWNrYm94SW5kZXhdXG4gICAgICB0YXJnZXQuY2hlY2sgPT09IGZhbHNlID8gdGFyZ2V0LmNoZWNrID0gdHJ1ZSA6IHRhcmdldC5jaGVjayA9IGZhbHNlO1xuICAgICAgcmV0dXJuXG4gICB9XG5cbiAgIGNvbnN0IGRlbGV0ZUNoZWNrRnJvbVN0b3JhZ2UgPSBmdW5jdGlvbihldmVudCl7XG4gICAgICBjb25zdCBwcm9qSW5kZXggPSBfZmluZFByb2ooZXZlbnQpO1xuICAgICAgY29uc3QgcHJvaiA9IF9vdmVyYWxsU3RvcmFnZVtwcm9qSW5kZXhdO1xuICAgICAgY29uc3QgZm9ybUluZGV4ID0gX2ZpbmRUb0RvKGV2ZW50KVxuXG4gICAgICBjb25zdCBmb3JtID0gZXZlbnQudGFyZ2V0LmNsb3Nlc3QoJy50b0RvTm90ZUlucHV0Jyk7XG4gICAgICBjb25zdCBmb3JtQ2hpbGRyZW4gPSBBcnJheS5mcm9tKGZvcm0uY2hpbGRyZW4pO1xuICAgICAgY29uc3QgZm9ybUxhYmVscyA9IGZvcm1DaGlsZHJlbi5maWx0ZXIoY2hpbGQgPT4gY2hpbGQuY2xhc3NMaXN0LmNvbnRhaW5zKCdlZGl0JykpO1xuICAgICAgY29uc3QgaXRlbUluZGV4ID0gZm9ybUxhYmVscy5pbmRleE9mKGV2ZW50LnRhcmdldC5wYXJlbnRFbGVtZW50KTtcblxuICAgICAgcHJvai5wcm9qU3RvcmFnZVtmb3JtSW5kZXhdLm5vdGVTdG9yYWdlLnNwbGljZShpdGVtSW5kZXgsIDEpO1xuICAgICAgcmV0dXJuXG4gICB9XG5cbiAgIGNvbnN0IG1vZGlmeUluU3RvcmFnZSA9IGZ1bmN0aW9uKGV2ZW50KXtcbiAgICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21vZElucHV0Jyk7XG4gICAgICBjb25zdCBwcm9qSW5kZXggPSBfZmluZFByb2ooZXZlbnQpO1xuICAgICAgY29uc3QgcHJvaiA9IF9vdmVyYWxsU3RvcmFnZVtwcm9qSW5kZXhdO1xuICAgICAgY29uc3QgdG9Eb0luZGV4ID0gZXZlbnQudGFyZ2V0LmNsb3Nlc3QoJy50b0RvTm90ZUlucHV0JykgPyBfZmluZFRvRG8oZXZlbnQpIDogZmFsc2U7XG4gICAgICBjb25zdCB0b0RvTm90ZSA9IHRvRG9JbmRleCA/IHByb2oucHJvalN0b3JhZ2VbdG9Eb0luZGV4XTogZmFsc2U7XG4gICAgICBjb25zdCBmb3JtID0gZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQ7XG4gICAgICBjb25zdCBmb3JtQ2hpbGRyZW4gPSBBcnJheS5mcm9tKGZvcm0uY2hpbGRyZW4pO1xuICAgICAgY29uc3QgYnV0dG9uQ2hlY2tlciA9IGZvcm1DaGlsZHJlbi5maWx0ZXIoY2hpbGQgPT4gY2hpbGQubm9kZU5hbWUgPT0gJ0JVVFRPTicgJiYgY2hpbGQuY2xhc3NMaXN0LmNvbnRhaW5zKCdkaXNhYmxlZEVkaXQnKSlcblxuXG4gICAgICBpZiAoYnV0dG9uQ2hlY2tlci5sZW5ndGggPiAwKXtcbiAgICAgICAgIGlmIChldmVudC50YXJnZXQucGFyZW50RWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoJ3Byb2plY3QnKSl7XG4gICAgICAgICAgICBwcm9qLm5hbWUgPSBpbnB1dC52YWx1ZTtcbiAgICAgICAgICAgIHJldHVybiBcbiAgICAgICAgICAgICBcbiAgICAgICAgIH1cbiAgICAgICAgIGVsc2UgaWYgKGV2ZW50LnRhcmdldC5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygnaXRlbVRpdGxlJykpe1xuICAgICAgICAgICAgdG9Eb05vdGUubmFtZSA9IGlucHV0LnZhbHVlO1xuICAgICAgICAgICAgcmV0dXJuXG5cbiAgICAgICAgIH19XG4gICAgICAgICBlbHNlIHtcblxuLy9FeHBsYWluZXI6IHRhcmdldEluZGV4IHVzZXMgdGhlIHN1Ym1pdE1vZCBidXR0b24gYXMgdGhlIGluZGV4IG9mIHRoZSBlbGVtZW50LFxuLy9iZWNhdXNlIHRoZSBtb2RpZnlFbGVtIGV2ZW50LCB3aGljaCBmaXJlZCBwcmlvciB0byB0aGlzIG9uZSwgcmVwbGFjZWQgdGhlIG9yaWdpbmFsXG4vL2VsZW1lbnQgKHRoZSBvbmUgd2UncmUgdGFyZ2V0aW5nKSBpbiB0aGUgRE9NIHdpdGggdGhlICdtb2QnIHN0dWZmIGluY2x1ZGluZyBldmVudC50YXJnZXQgKGkuZSBzdWJtaXRNb2QpLlxuXG4gICAgICAgICAgICBjb25zdCB0YXJnZXRzID0gIGZvcm0uY2xhc3NMaXN0LmNvbnRhaW5zKCdmcmVlRm9ybScpID8gZmFsc2UgOiBmb3JtQ2hpbGRyZW4uZmlsdGVyKGNoaWxkID0+IGNoaWxkLmNsYXNzTGlzdC5jb250YWlucygnZGlzYWJsZWRFZGl0JykgfHwgY2hpbGQgPT09IGV2ZW50LnRhcmdldClcbiAgICAgICAgICAgIGNvbnN0IHRhcmdldEluZGV4ID0gZm9ybS5jbGFzc0xpc3QuY29udGFpbnMoJ2ZyZWVGb3JtJykgPyBmYWxzZSA6IHRhcmdldHMuaW5kZXhPZihldmVudC50YXJnZXQpICBcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgZm9ybS5jbGFzc0xpc3QuY29udGFpbnMoJ2ZyZWVGb3JtJykgPyB0b0RvTm90ZS5ub3RlU3RvcmFnZVswXSA9IGlucHV0LnZhbHVlIDogdG9Eb05vdGUubm90ZVN0b3JhZ2VbdGFyZ2V0SW5kZXhdLmxhYmVsID0gaW5wdXQudmFsdWU7XG4gICAgICAgICAgICByZXR1cm4gXG4gICAgICAgICB9ICBcbiAgICAgIFxuXG4gICAgICBcbiAgIH1cbiAgXG4gICBcbiAgIHJldHVybiB7XG4gICAgICBuZXdQcm9qLFxuICAgICAgdHJhbnNmZXJUb0xvY2FsU3RvcmFnZSxcbiAgICAgIGFwcGVuZFRvUHJvaixcbiAgICAgIHJlbW92ZUl0ZW0sXG4gICAgICBhcHBlbmROb3RlVG9JdGVtLFxuICAgICAgcmVjb3JkQ2hlY2ssXG4gICAgICBkZWxldGVDaGVja0Zyb21TdG9yYWdlLFxuICAgICAgbW9kaWZ5SW5TdG9yYWdlXG4gICAgICAvL2p1c3QgdGhpcyBmb3Igbm93LlxuICAgfVxuICBcbiAgIFxufVxuXG4iLCJpbXBvcnQgeyBET01HZW5lcmFsIH0gZnJvbSBcIi4vaGVscGVycy9ET01cIjtcbmltcG9ydCB7IHByb2plY3RFdmVudHMgfSBmcm9tIFwiLi9wcm9qZWN0ZXZlbnRzXCI7XG5cblxuZXhwb3J0IGNvbnN0IHRlbXBsYXRlRE9NU3RydWN0cyA9IGZ1bmN0aW9uICgpe1xuXG4gICAgY29uc3QgRE9NID0gRE9NR2VuZXJhbCgpXG4gICAgY29uc3QgZGVsZWdhdG9yID0gcHJvamVjdEV2ZW50cy5kZWxlZ2F0b3JcblxuICAgIGNvbnN0IGNyZWF0ZVByb2plY3QgPSBmdW5jdGlvbihuYW1lKXtcbiAgICAgICAgIGlmIChuYW1lID09PSAnJyl7cmV0dXJufSBcbiAgICAgICAgIGNvbnN0IHJlZmVyZW5jZSA9IERPTS5zZWxlY3RFbGVtKCcucHJvamVjdCcpOyBcbiAgICAgICAgIGNvbnN0IHByb2ogPSBET00uZWxlbWVudEluaXQoJ2RpdicseydpZCc6IGAke25hbWV9JHtyZWZlcmVuY2UubGVuZ3RofWAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnZGF0YS1pZCc6YCR7cmVmZXJlbmNlLmxlbmd0aH1gLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdjbGFzcyc6ICdwcm9qZWN0J30sbmFtZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICBjb25zdCByZW1vdmUgPSBET00uZWxlbWVudEluaXQoJ2J1dHRvbicsIHsnY2xhc3MnOidyZW1vdmUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdpZCc6YHJlbW92ZSR7cHJvai5kYXRhc2V0LmlkfWB9LCAnWCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgIGNvbnN0IGFkZFRvRG9MaXN0QnRuID0gRE9NLmVsZW1lbnRJbml0KCdidXR0b24nLCB7J2NsYXNzJzogJ2FkZHRvRG9MaXN0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2lkJzogYGFkZCR7RE9NLnNlbGVjdEVsZW0oJy5wcm9qZWN0JykubGVuZ3RofWB9LCAnQWRkIFRvLURvIExpc3QnKTtcbiAgICAgICAgY29uc3QgbW9kaWZ5ID0gRE9NLmVsZW1lbnRJbml0KCdidXR0b24nLCB7J2NsYXNzJzonZWRpdCd9LCdFZGl0Jyk7XG4gICAgICAgIHByb2ouYXBwZW5kQ2hpbGQocmVtb3ZlKTtcbiAgICAgICAgcHJvai5hcHBlbmRDaGlsZChtb2RpZnkpO1xuICAgICAgICBwcm9qLmFwcGVuZENoaWxkKERPTS5lbGVtZW50SW5pdCgnZGl2Jyx7ICdjbGFzcyc6J25vbmUgdG9Eb0NvbnRhaW5lcicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnaWQnOmBjb250YWluZXIke3JlZmVyZW5jZS5sZW5ndGh9YH0pKTtcbiAgICAgICAgcHJvai5hcHBlbmRDaGlsZChhZGRUb0RvTGlzdEJ0bik7XG5cbiAgICAgICAgXG4gICAgICAgIHByb2oub25jbGljayA9IGRlbGVnYXRvcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgY29uc3QgY29udGFpbmVyID0gRE9NLnNlbGVjdEVsZW0oJyNjb250YWluZXInKTtcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHByb2opO1xuICAgICAgICBcbiAgICAgfVxuICAgICBcblxuICAgICBjb25zdCBjcmVhdGVUb0RvTm90ZSA9IGZ1bmN0aW9uKGNob3NlblR5cGUpe1xuICAgICAgICBjb25zdCBpbnB1dCA9IERPTS5zZWxlY3RFbGVtKCcjdGVtcG9yYXJ5SW5wdXQnKVxuICAgICAgICBjb25zdCBzdWJtaXRUcmlnZ2VyID0gRE9NLnNlbGVjdEVsZW0oJyNzdWJtaXRUcmlnZ2VyJyk7XG4gICAgICAgIGNvbnN0IGNhbmNlbFRyaWdnZXIgPSBET00uc2VsZWN0RWxlbSgnI2NhbmNlbFRyaWdnZXInKTtcbiAgICAgICAgIFxuICAgICAgICBjb25zdCBwcm9qZWN0ID0gaW5wdXQucGFyZW50RWxlbWVudDtcbiAgICAgICAgY29uc3QgY29udGFpbmVyID0gRE9NLnNlbGVjdEVsZW0oYCNjb250YWluZXIke3Byb2plY3QuZGF0YXNldC5pZH1gKTtcbiAgICAgICAgY29uc3QgZm9ybVJlZmVyZW5jZSA9IEFycmF5LmZyb20oY29udGFpbmVyLmNoaWxkcmVuKTtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IGZvcm0gPSBET00uZWxlbWVudEluaXQoJ2Zvcm0nLHsnY2xhc3MnOiAndG9Eb05vdGVJbnB1dCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2lkJzogYHRvRG9Ob3RlRm9ybSR7cHJvamVjdC5kYXRhc2V0LmlkfSR7Zm9ybVJlZmVyZW5jZS5sZW5ndGh9YCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2RhdGEtaWQnOmAke2Zvcm1SZWZlcmVuY2UubGVuZ3RofWAgfSlcbiAgICAgICAgY29uc3Qgc3VibWl0ID0gRE9NLmVsZW1lbnRJbml0KCdidXR0b24nLHsndHlwZSc6J3N1Ym1pdCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnaWQnOiAnc3VibWl0Tm90ZScsIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnY2xhc3MnOidzdWJtaXROb3RlIGhpZGRlbicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCcnKVxuICAgICAgICBjb25zdCBjYW5jZWwgPSBET00uZWxlbWVudEluaXQoJ2J1dHRvbicsIHsnY2xhc3MnOidjYW5jZWwgaGlkZGVuJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnaWQnOidjYW5jZWxOb3RlJ30sICcnKTtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IHJlbW92ZSA9IERPTS5lbGVtZW50SW5pdCgnYnV0dG9uJywgeydjbGFzcyc6J3JlbW92ZSBub25lJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdpZCc6YHJlbW92ZSR7cHJvamVjdC5kYXRhc2V0LmlkfSR7Zm9ybVJlZmVyZW5jZS5sZW5ndGh9YH0sICdYJyk7XG4gICAgICAgIGNvbnN0IHByb3ZUaXRsZSA9IERPTS5zZWxlY3RFbGVtKCcjcHJvdlRpdGxlJyk7XG4gICAgICAgIGNvbnN0IHRpdGxlID0gRE9NLmVsZW1lbnRJbml0KCdsYWJlbCcsIHsnY2xhc3MnOidpdGVtVGl0bGUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2Zvcic6J2l0ZW1UaXRsZScsICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICduYW1lJzonaXRlbVRpdGxlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2lkJzpgaXRlbVRpdGxlJHtwcm9qZWN0LmRhdGFzZXQuaWR9JHtmb3JtUmVmZXJlbmNlLmxlbmd0aH1gLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LGAke3Byb3ZUaXRsZS52YWx1ZX1gLClcbiAgICAgICAgY29uc3QgbW9kaWZ5ID0gRE9NLmVsZW1lbnRJbml0KCdidXR0b24nLCB7J2NsYXNzJzonZWRpdCd9LCdFZGl0Jyk7XG5cbiAgICAgICAgXG4gICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQoc3VibWl0KTtcbiAgICAgICAgZm9ybS5hcHBlbmRDaGlsZChjYW5jZWwpO1xuICAgICAgICBmb3JtLmFwcGVuZENoaWxkKHJlbW92ZSk7XG4gICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQodGl0bGUpO1xuICAgICAgICB0aXRsZS5hcHBlbmRDaGlsZChtb2RpZnkpXG4gICAgICAgIG1vZGlmeS5kaXNhYmxlZCA9IHRydWU7XG4gICAgICAgIHByb3ZUaXRsZS5yZW1vdmUoKTsgIFxuICAgICAgICBcblxuICAgICAgICBmb3JtLm9uc3VibWl0ID0gZGVsZWdhdG9yOyAgIFxuICAgICAgICAgXG4gICAgICAgIGNvbnRhaW5lci5jbGFzc0xpc3QudG9nZ2xlKCdub25lJywgZmFsc2UpO1xuICAgICAgICBcbiAgICAgICAgIFxuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZm9ybSk7XG5cbiAgICAgICAgY29uc3QgX2dlbmVyYXRlQ2hlY2tsaXN0ID0gZnVuY3Rpb24oKXsgXG4gICAgICAgICAgIGNvbnN0IGFkZCA9IERPTS5lbGVtZW50SW5pdCgnYnV0dG9uJywgeydjbGFzcyc6J2FkZENoZWNrJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2lkJzpgYWRkQ2hlY2ske3Byb2plY3QuZGF0YXNldC5pZH0ke2Zvcm1SZWZlcmVuY2UubGVuZ3RofWAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdkYXRhLWNsYXNzJzpgY2hpbGQke3Byb2plY3QuZGF0YXNldC5pZH0ke2Zvcm1SZWZlcmVuY2UubGVuZ3RofWAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sICdBZGQgSXRlbScpOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICBmb3JtLmFwcGVuZENoaWxkKGFkZCk7XG5cbiAgICAgICAgICAgIGZvcm0uY2xhc3NMaXN0LmFkZCgnY2hlY2tib3gnKVxuICAgICAgICAgICAgcmVtb3ZlLmNsYXNzTGlzdC50b2dnbGUoJ25vbmUnLGZhbHNlKTtcbiAgICAgICAgICAgIGVuYWJsZUJ0bnMoKTtcbiAgICAgICB9XG5cbiAgICAgICBjb25zdCBfZ2VuZXJhdGVGcmVlRm9ybSA9IGZ1bmN0aW9uKCl7XG5cbiAgICAgICAgaW5wdXQudmFsdWUgPSAnJztcbiAgICAgICAgaW5wdXQuY2xhc3NMaXN0LnRvZ2dsZSgnbm9uZScsZmFsc2UpO1xuICAgICAgICBmb3JtLmNsYXNzTGlzdC5hZGQoJ2ZyZWVGb3JtJyk7XG5cbiAgICAgICAgc3VibWl0VHJpZ2dlci5jbGFzc0xpc3QudG9nZ2xlKCdub25lJyxmYWxzZSk7XG4gICAgICAgIGNhbmNlbFRyaWdnZXIuY2xhc3NMaXN0LnRvZ2dsZSgnbm9uZScsZmFsc2UpO1xuICAgICAgICBpbnB1dC5mb2N1cygpO1xuICAgICAgICBcbiAgICAgICB9XG5cbiAgICAgICBjaG9zZW5UeXBlID09PSAnQ2hlY2tsaXN0JyA/IF9nZW5lcmF0ZUNoZWNrbGlzdCgpIDogX2dlbmVyYXRlRnJlZUZvcm0oKTsgIFxuXG4gICAgICAgcmV0dXJuIFxuXG4gICAgIH1cblxuXG4gICAgIGNvbnN0IGRpc2FibGVCdG5zID0gZnVuY3Rpb24odHJndD0nbi9hJyl7XG4gICAgICAgIGNvbnN0IGFsbEJ0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdidXR0b24nKTtcbiAgICAgICAgYWxsQnRucy5mb3JFYWNoKGJ0biA9PiAgYnRuID09PSB0cmd0IHx8IGJ0bi5jbGFzc0xpc3QuY29udGFpbnMoJ25vbmUnKSB8fCBidG4uY2xhc3NMaXN0LmNvbnRhaW5zKCdoaWRkZW4nKSA/IGJ0bi5kaXNhYmxlZCA9IGZhbHNlIDogYnRuLmRpc2FibGVkID0gdHJ1ZSk7XG5cbiAgICAgICAgY29uc3QgYWxsRWRpdGFibGVzID0gRE9NLnNlbGVjdEVsZW0oJy5lZGl0Jyk7XG4gICAgICAgIGFsbEVkaXRhYmxlcy5mb3JFYWNoKGl0bSA9PiAgaXRtID09PSB0cmd0IHx8IGl0bS5jbGFzc0xpc3QuY29udGFpbnMoJ25vbmUnKSA/IGZhbHNlIDogaXRtLmNsYXNzTGlzdC50b2dnbGUoJ2Rpc2FibGVkRWRpdCcsIHRydWUpKTtcbiAgICAgICAgY29uc3QgYWxsRGlzYWJsZWQgPSBET00uc2VsZWN0RWxlbSgnLmRpc2FibGVkRWRpdCcpO1xuICAgICAgICBhbGxEaXNhYmxlZC5mb3JFYWNoKGl0bSA9PiBpdG0uY2xhc3NMaXN0LnRvZ2dsZSgnZWRpdCcsZmFsc2UpKTtcbiAgICB9XG4gICAgXG4gICAgXG4gICAgY29uc3QgZW5hYmxlQnRucyA9IGZ1bmN0aW9uKCl7XG4gICAgICAgIGNvbnN0IGFsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2J1dHRvbicpO1xuICAgICAgICBhbGwuZm9yRWFjaChidG4gPT4gYnRuLmRpc2FibGVkID0gZmFsc2UpO1xuXG4gICAgICAgIGNvbnN0IGVkaXRzID0gRE9NLnNlbGVjdEVsZW0oJy5kaXNhYmxlZEVkaXQnKTtcbiAgICAgICAgZWRpdHMuZm9yRWFjaChpdG0gPT4gaXRtLmNsYXNzTGlzdC50b2dnbGUoJ2VkaXQnLHRydWUpKTtcbiAgICAgICAgZWRpdHMuZm9yRWFjaChpdG0gPT4gaXRtLmNsYXNzTGlzdC50b2dnbGUoJ2Rpc2FibGVkRWRpdCcsZmFsc2UpKTtcbiAgICAgICAgY29uc3QgZGVsZXRlQnRucyA9IERPTS5zZWxlY3RFbGVtKCcuZGVsZXRlQ2hlY2snKTtcbiAgICAgICAgZGVsZXRlQnRucy5mb3JFYWNoKGJ0biA9PiBidG4uY2xhc3NMaXN0LnRvZ2dsZSgnbm9uZScsZmFsc2UpKTsgICAgICAgIFxuICAgIH1cblxuICAgICBjb25zdCBtb2RpZnlFbGVtZW50ID0gZnVuY3Rpb24oZXZlbnQpe1xuXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgXG4gICAgICAgICBjb25zdCBmb3JtID0gZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQ7XG4gICAgICAgICBjb25zdCBtb2RJbnB1dCA9IChmdW5jdGlvbigpe1xuICAgICAgICAgaWYgKGZvcm0uY2xhc3NMaXN0LmNvbnRhaW5zKCdmcmVlRm9ybScpKXsgICAgXG4gICAgICAgICAgICBsZXQgbW9kVGV4dEFyZWEgPSBET00uZWxlbWVudEluaXQoJ3RleHRhcmVhJyx7J2xhYmVsJzonZnJlZUZvcm0nLFxuICAgICAgICAgICAgJ25hbWUnOidmcmVlRm9ybScsXG4gICAgICAgICAgICAnYXV0b2NvbXBsZXRlJzonb2ZmJyxcbiAgICAgICAgICAgICdyZXF1aXJlZCc6J3JlcXVpcmVkJyxcbiAgICAgICAgICAgICdpZCc6J21vZElucHV0JyxcbiAgICAgICAgICAgJ2NsYXNzJzogJ21vZElucHV0JyxcbiAgICAgICAgICAgJ3Jvd3MnIDogJzMnLFxuICAgICAgICAgICAnY29scycgOiAnMzAnfSk7XG5cbiAgICAgICAgICAgcmV0dXJuIG1vZFRleHRBcmVhOyAgXG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgbGV0IG1vZENoZWNrSW5wdXQgPSBET00uZWxlbWVudEluaXQoJ2lucHV0Jyx7J3R5cGUnOid0ZXh0JyxcbiAgICAgICAgICAgICdhdXRvY29tcGxldGUnOidvZmYnLFxuICAgICAgICAgICAgJ3JlcXVpcmVkJzoncmVxdWlyZWQnLFxuICAgICAgICAgICAgJ2NsYXNzJzogJ21vZElucHV0JyxcbiAgICAgICAgICAgICAnaWQnOidtb2RJbnB1dCcsfSk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgICByZXR1cm4gbW9kQ2hlY2tJbnB1dCAgIFxuICAgICAgICB9IFxuICAgIH0pKClcblxuICAgICAgICAgY29uc3Qgc3VibWl0ID0gRE9NLmVsZW1lbnRJbml0KCdidXR0b24nLHsndHlwZSc6J3N1Ym1pdCcsXG4gICAgICAgICdjbGFzcyc6J3N1Ym1pdE1vZCcsXG4gICAgICAgICAnaWQnOiAnc3VibWl0TW9kJ1xuICAgICAgICAgfSwnU3VibWl0IE5vdGUnKVxuICAgICAgICAgY29uc3QgcmV2ZXJ0ID0gRE9NLmVsZW1lbnRJbml0KCdidXR0b24nLHtcbiAgICAgICAgICdjbGFzcyc6J3JldmVydE1vZCcsXG4gICAgICAgICAnZGF0YS10cmFuc2Zlcic6YCR7ZXZlbnQudGFyZ2V0LmZpcnN0Q2hpbGQubm9kZVZhbHVlfWAgLy90ZW1wb3JhcnksIHVwZGF0ZSB0byB1c2UgbG9jYWwgc3RvcmFnZSAmIGJhY2tlbmRcbiAgICAgICAgICB9LCdSZXZlcnQgQmFjaycpIFxuICAgICAgICAgICAgICAgICBcbiAgICAgICAgIGlmIChldmVudC50YXJnZXQucGFyZW50RWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoJ2l0ZW1UaXRsZScpIHx8IGV2ZW50LnRhcmdldC5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygncHJvamVjdCcpKXtcbiAgICAgICAgICAgICByZXZlcnQuZGF0YXNldC50cmFuc2ZlciA9IGV2ZW50LnRhcmdldC5wYXJlbnRFbGVtZW50LmZpcnN0Q2hpbGQubm9kZVZhbHVlXG4gICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXG5cbiAgICAgICAgZGlzYWJsZUJ0bnMoKTtcblxuICAgICAgICAgY29uc3QgX3JlcGxhY2VXaXRoSW5wdXQgPSAoZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIGlmKGV2ZW50LnRhcmdldC5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygnaXRlbVRpdGxlJykgfHwgZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdwcm9qZWN0Jykpe1xuICAgICAgICAgICAgICAgIG1vZElucHV0LnZhbHVlID0gZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQuZmlyc3RDaGlsZC5ub2RlVmFsdWU7XG4gICAgICAgICAgICAgICAgZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQuZmlyc3RDaGlsZC5ub2RlVmFsdWUgPSAnJztcbiAgICAgICAgICAgICAgICBldmVudC50YXJnZXQucGFyZW50RWxlbWVudC5hcHBlbmRDaGlsZChtb2RJbnB1dCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNle1xuICAgICAgICAgICAgICAgIG1vZElucHV0LnZhbHVlID0gZXZlbnQudGFyZ2V0LmZpcnN0Q2hpbGQubm9kZVZhbHVlXG4gICAgICAgICAgICAgICAgZXZlbnQudGFyZ2V0LnJlcGxhY2VXaXRoKG1vZElucHV0KTsgXG5cbiAgICAgICAgICAgIH0gXG4gICAgICAgICAgICBtb2RJbnB1dC5pbnNlcnRBZGphY2VudEVsZW1lbnQoJ2FmdGVyZW5kJyxzdWJtaXQpO1xuICAgICAgICAgICAgc3VibWl0Lmluc2VydEFkamFjZW50RWxlbWVudCgnYWZ0ZXJlbmQnLHJldmVydCk7XG4gICAgICAgfSkoKVxuICAgICAgICBcbiAgICAgfVxuXG4gICAgIGNvbnN0IHN1Ym1pdE1vZGlmaWVkRWxlbWVudCA9IGZ1bmN0aW9uKGV2ZW50KXtcbiAgICAgICAgXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGNvbnN0IGZvcm0gPSBldmVudC50YXJnZXQucGFyZW50RWxlbWVudDtcbiAgICAgICAgY29uc3QgaW5wdXQgPSBldmVudC50YXJnZXQucHJldmlvdXNFbGVtZW50U2libGluZztcbiAgICAgICAgY29uc3QgcmV2ZXJ0ID0gZXZlbnQudGFyZ2V0Lm5leHRFbGVtZW50U2libGluZztcbiAgICAgICAgY29uc3QgbGFiZWwgPSBET00uZWxlbWVudEluaXQoJ2xhYmVsJywgeydmb3InOiBgJHtpbnB1dC52YWx1ZX1gLCAnY2xhc3MnOidlZGl0J30sYCR7aW5wdXQudmFsdWV9YCk7XG4gICAgICAgIGNvbnN0IHRleHQgPSBET00uZWxlbWVudEluaXQoJ3AnLCB7J2NsYXNzJzondGV4dCBlZGl0J30sIGAke2lucHV0LnZhbHVlfWApO1xuICAgICAgICBjb25zdCBkZWwgPSBET00uZWxlbWVudEluaXQoJ2J1dHRvbicsIHsnY2xhc3MnOiAnZGVsZXRlQ2hlY2sgbm9uZSd9LCdkZWxldGUnICkgXG5cbiAgICAgICAgXG4gICAgICAgIGlmKGlucHV0LnZhbHVlID09PSAnJyl7cmV0dXJufTtcblxuICAgICAgICBpZihmb3JtLmNsYXNzTGlzdC5jb250YWlucygnY2hlY2tib3gnKSl7XG4gICAgICAgICAgICBpbnB1dC5yZXBsYWNlV2l0aChsYWJlbCk7XG4gICAgICAgICAgICBsYWJlbC5hcHBlbmRDaGlsZChkZWwpO1xuXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoZm9ybS5jbGFzc0xpc3QuY29udGFpbnMoJ2ZyZWVGb3JtJykpe1xuICAgICAgICAgICAgaW5wdXQucmVwbGFjZVdpdGgodGV4dCk7IFxuICAgICAgICB9XG5cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjb25zdCB2YWx1ZSA9IGlucHV0LnZhbHVlXG4gICAgICAgICAgICBldmVudC50YXJnZXQucGFyZW50RWxlbWVudC5maXJzdENoaWxkLm5vZGVWYWx1ZSA9IHZhbHVlO1xuICAgICAgICAgICAgaW5wdXQucmVtb3ZlKCk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGVuYWJsZUJ0bnMoKTtcbiAgICBcbiAgICAgICAgcmV2ZXJ0LnJlbW92ZSgpO1xuICAgICAgICBldmVudC50YXJnZXQucmVtb3ZlKCk7XG5cblxuICAgICAgICByZXR1cm4gICAgICAgICBcbiAgICAgfVxuXG4gICAgIGNvbnN0IHJldmVydE1vZGlmaWVkRWxlbWVudCA9IGZ1bmN0aW9uKGV2ZW50KXtcbiAgICAgICAgXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGNvbnN0IGZvcm0gPSBldmVudC50YXJnZXQucGFyZW50RWxlbWVudDtcbiAgICAgICAgY29uc3Qgc3VibWl0ID0gZXZlbnQudGFyZ2V0LnByZXZpb3VzRWxlbWVudFNpYmxpbmc7XG4gICAgICAgIGNvbnN0IGlucHV0ID0gc3VibWl0LnByZXZpb3VzRWxlbWVudFNpYmxpbmc7XG4gICAgICAgIGNvbnN0IGxhYmVsID0gRE9NLmVsZW1lbnRJbml0KCdsYWJlbCcsIHsnZm9yJzogYCR7ZXZlbnQudGFyZ2V0LmRhdGFzZXQudHJhbnNmZXJ9YCwgJ2NsYXNzJzonZWRpdCd9LGAke2V2ZW50LnRhcmdldC5kYXRhc2V0LnRyYW5zZmVyfWApOyAvL3RlbXBvcmFyeSwgdXBkYXRlIHRvIHVzZSBsb2NhbCBzdG9yYWdlICYgYmFja2VuZFxuICAgICAgICBjb25zdCB0ZXh0ID0gRE9NLmVsZW1lbnRJbml0KCdwJywgeydjbGFzcyc6J3RleHQgZWRpdCd9LCBgJHtldmVudC50YXJnZXQuZGF0YXNldC50cmFuc2Zlcn1gKTsgLy90ZW1wb3JhcnksIHVwZGF0ZSB0byB1c2UgbG9jYWwgc3RvcmFnZSAmIGJhY2tlbmRcbiAgICAgICAgY29uc3QgZGVsID0gRE9NLmVsZW1lbnRJbml0KCdidXR0b24nLCB7J2NsYXNzJzogJ2RlbGV0ZUNoZWNrIG5vbmUnfSwnZGVsZXRlJyApIFxuXG5cbiAgICAgICAgaWYoZm9ybS5jbGFzc0xpc3QuY29udGFpbnMoJ2NoZWNrYm94Jykpe1xuICAgICAgICAgICAgaW5wdXQucmVwbGFjZVdpdGgobGFiZWwpO1xuICAgICAgICAgICAgbGFiZWwuYXBwZW5kQ2hpbGQoZGVsKTtcblxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGZvcm0uY2xhc3NMaXN0LmNvbnRhaW5zKCdmcmVlRm9ybScpKXtcbiAgICAgICAgICAgIGlucHV0LnJlcGxhY2VXaXRoKHRleHQpOyBcbiAgICAgICAgfVxuXG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgdmFsdWUgPSBldmVudC50YXJnZXQuZGF0YXNldC50cmFuc2ZlcjsgLy90ZW1wb3JhcnksIHVwZGF0ZSB0byB1c2UgbG9jYWwgc3RvcmFnZSAmIGJhY2tlbmRcbiAgICAgICAgICAgIGV2ZW50LnRhcmdldC5wYXJlbnRFbGVtZW50LmZpcnN0Q2hpbGQubm9kZVZhbHVlID0gdmFsdWU7XG4gICAgICAgICAgICBpbnB1dC5yZW1vdmUoKTtcbiAgICAgICAgfVxuICAgICAgICAgXG4gICAgICAgIGVuYWJsZUJ0bnMoKTtcbiAgICBcbiAgICAgICAgc3VibWl0LnJlbW92ZSgpO1xuICAgICAgICBldmVudC50YXJnZXQucmVtb3ZlKCk7XG4gICAgICAgIHJldHVybiAgICAgICAgIFxuICAgICB9XG4gICAgIFxuICAgICBcbiAgICBjb25zdCBjaG9vc2VUb0RvVGl0bGVGb3JtID0gZnVuY3Rpb24oZXZlbnQpe1xuICAgICAgICBjb25zdCBkb21Qcm9qZWN0ID0gZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQ7XG5cbiAgICAgICAgY29uc3QgX2dlbmVyYXRlVGl0bGVGb3JtID0gKGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAgY29uc3QgZm9ybSA9ICBET00uZWxlbWVudEluaXQoJ2Zvcm0nLCB7J2NsYXNzJzogJ2Nob29zZVRpdGxlRm9ybSB0cmFuc2l0Rm9ybScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdpZCc6ICdjaG9vc2VUaXRsZUZvcm0nfSlcbiAgICAgICAgICAgICBjb25zdCBsYWJlbCA9IERPTS5lbGVtZW50SW5pdCgnbGFiZWwnLHsnZm9yJzonY2hvb3NlWW91clRpdGxlJ30sJ0Nob29zZSBZb3VyIE5vdGVcXCdzIFRpdGxlJyk7XG4gIFxuICAgICAgICAgICAgIGNvbnN0IHRpdGxlSW5wdXQgPSBET00uZWxlbWVudEluaXQoJ2lucHV0Jyx7J3R5cGUnOid0ZXh0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdhdXRvY29tcGxldGUnOidvZmYnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdyZXF1aXJlZCc6J3JlcXVpcmVkJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnaWQnOidwcm92VGl0bGUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdjbGFzcyc6ICdwcm92VGl0bGUnfSwpO1xuICAgICAgICAgICAgY29uc3Qgc3VibWl0VGl0bGUgPSBET00uZWxlbWVudEluaXQoJ2J1dHRvbicsIHsndHlwZSc6J3N1Ym1pdCd9LCAnU3VibWl0Jyk7XG4gICAgICAgICAgICBjb25zdCBjYW5jZWxUaXRsZSA9IERPTS5lbGVtZW50SW5pdCgnYnV0dG9uJywgeydjbGFzcyc6J2NhbmNlbFRpdGxlJ30sICdDYW5jZWwnKTtcbiAgICAgICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQobGFiZWwpO1xuICAgICAgICAgICAgZm9ybS5hcHBlbmRDaGlsZCh0aXRsZUlucHV0KTtcbiAgICAgICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQoc3VibWl0VGl0bGUpO1xuICAgICAgICAgICAgZm9ybS5hcHBlbmRDaGlsZChjYW5jZWxUaXRsZSk7XG4gICAgICAgICAgICBmb3JtLm9uc3VibWl0ID0gZGVsZWdhdG9yO1xuICAgICAgICAgICAgcmV0dXJuIGZvcm1cbiAgICAgICAgfSkoKSBcbiAgICAgICAgXG4gICAgICAgIGRvbVByb2plY3QuYXBwZW5kQ2hpbGQoX2dlbmVyYXRlVGl0bGVGb3JtKVxuICAgICAgICByZXR1cm5cblxuICAgIH1cbiAgICBjb25zdCBzdWJtaXRUb0RvVGl0bGUgPSBmdW5jdGlvbihldmVudCl7XG4gICAgICAgXG4gICAgICAgIGlmKGV2ZW50LnR5cGUgPT09ICdjbGljaycpe3JldHVybn1cbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTsgXG4gICAgICAgIGNvbnN0IHByb3ZUaXRsZSA9IERPTS5zZWxlY3RFbGVtKCcjcHJvdlRpdGxlJyk7XG4gICAgICAgIGNvbnN0IGRvbVByb2plY3QgPSBldmVudC50YXJnZXQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50O1xuICAgICAgICBkb21Qcm9qZWN0LmFwcGVuZENoaWxkKHByb3ZUaXRsZSk7XG4gICAgICAgIHByb3ZUaXRsZS5jbGFzc0xpc3QudG9nZ2xlKCdub25lJyx0cnVlKTtcbiAgICAgICAgXG4gICAgICAgIGV2ZW50LnRhcmdldC5jbGFzc0xpc3QudG9nZ2xlKCdub25lJyx0cnVlKTtcbiAgICAgICAgcmV0dXJuXG4gICAgICAgIFxuICAgIH1cbiAgICAgXG4gICAgIGNvbnN0IGNob29zZU5vdGVUeXBlID0gZnVuY3Rpb24oZXZlbnQpe1xuICAgICAgICBpZihldmVudC50eXBlID09PSAnY2xpY2snKXtyZXR1cm59XG4gICAgICAgIGNvbnN0IGRvbVByb2plY3QgPSBldmVudC50YXJnZXQucGFyZW50RWxlbWVudDtcblxuICAgICAgICAgY29uc3QgZm9ybSA9ICBET00uZWxlbWVudEluaXQoJ2Zvcm0nLCB7J2NsYXNzJzogJ2Nob29zZU5vdGVUeXBlIHRyYW5zaXRGb3JtJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnaWQnOiAnbm90ZVR5cGVGb3JtJyAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgY29uc3QgbGFiZWwgPSBET00uZWxlbWVudEluaXQoJ2xhYmVsJyx7J2Zvcic6J2Nob29zZU5vdGVUeXBlJ30sJ0Nob29zZSBZb3VyIE5vdGUgVHlwZScpO1xuICAgICAgICAgY29uc3Qgc2VsZWN0ID0gRE9NLmVsZW1lbnRJbml0KCdzZWxlY3QnLHsnY2xhc3MnOidzZWxlY3QnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdpZCc6ICdzZWxlY3QnIH0pO1xuICAgICAgICAgY29uc3Qgb3B0R3JvdXAgPSBET00uZWxlbWVudEluaXQoJ29wdGdyb3VwJyx7J2xhYmVsJzogJ05vdGUgT3B0aW9ucyd9LCAnQ2hvb3NlIHlvdXIgbm90ZSB0eXBlJyk7XG4gICAgICAgICBjb25zdCBjaGVja2xpc3RPcHQgPSBET00uZWxlbWVudEluaXQoJ29wdGlvbicseyduYW1lJzogJ2NoZWNrbGlzdCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnY2xhc3MnOiAnY2hlY2tsaXN0J30sJ0NoZWNrbGlzdCcpO1xuICAgICAgICAgY29uc3QgaW5wdXRPcHQgPSBET00uZWxlbWVudEluaXQoJ29wdGlvbicseyduYW1lJzogJ2lucHV0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2NsYXNzJzogJ2lucHV0J30sJ0ZyZWVmb3JtJyk7XG4gICAgICAgICBjb25zdCBjaG9pY2UgPSBET00uZWxlbWVudEluaXQoJ2J1dHRvbicsIHsndHlwZSc6J3N1Ym1pdCd9LCAnU3VibWl0Jyk7XG4gICAgICAgICBjb25zdCBjYW5jZWwgPSBET00uZWxlbWVudEluaXQoJ2J1dHRvbicsIHsnY2xhc3MnOidjYW5jZWxDaG9pY2UnfSwgJ0NhbmNlbCcpO1xuICAgICAgICAgXG4gICAgICAgICBzZWxlY3QuYXBwZW5kQ2hpbGQob3B0R3JvdXApO1xuICAgICAgICAgb3B0R3JvdXAuYXBwZW5kQ2hpbGQoY2hlY2tsaXN0T3B0KTtcbiAgICAgICAgIG9wdEdyb3VwLmFwcGVuZENoaWxkKGlucHV0T3B0KTtcbiAgICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQobGFiZWwpO1xuICAgICAgICAgZm9ybS5hcHBlbmRDaGlsZChzZWxlY3QpO1xuICAgICAgICAgZm9ybS5hcHBlbmRDaGlsZChET00uZWxlbWVudEluaXQoJ2JyJykpO1xuICAgICAgICAgZm9ybS5hcHBlbmRDaGlsZChjaG9pY2UpO1xuICAgICAgICAgZm9ybS5hcHBlbmRDaGlsZChjYW5jZWwpXG5cbiAgICAgICAgIGRpc2FibGVCdG5zKCk7XG4gICAgICAgICBmb3JtLm9uc3VibWl0ID0gZGVsZWdhdG9yO1xuICAgICAgICAgZG9tUHJvamVjdC5hcHBlbmRDaGlsZChmb3JtKTtcblxuICAgICAgICAgcmV0dXJuIGZvcm1cbiAgICB9XG4gICAgIFxuICAgICBjb25zdCByZXZlYWxDcmVhdGVGb3JtID0gZnVuY3Rpb24oKXtcbiAgICAgICAgbGV0IGNyZWF0ZUZvcm0gPSBET00uc2VsZWN0RWxlbSgnI2NyZWF0ZUZvcm0nKTtcbiAgICAgICAgY3JlYXRlRm9ybS5jbGFzc0xpc3QudG9nZ2xlKCdub25lJywgZmFsc2UpO1xuICAgICAgICBcbiAgICAgfVxuXG4gICAgIGNvbnN0IHJlc2V0Q3JlYXRlRm9ybSA9IGZ1bmN0aW9uKCl7XG4gICAgICAgICBsZXQgY3JlYXRlRm9ybSA9IERPTS5zZWxlY3RFbGVtKCcjY3JlYXRlRm9ybScpO1xuICAgICAgICAgY3JlYXRlRm9ybS5jbGFzc0xpc3QudG9nZ2xlKCdub25lJywgdHJ1ZSk7XG5cbiAgICAgICAgIGxldCB0aXRsZUlucCA9IERPTS5zZWxlY3RFbGVtKCcjdGl0bGVJbnAnKTtcbiAgICAgICAgIHRpdGxlSW5wLnZhbHVlID0gJyc7XG4gICAgIH1cblxuICAgICBjb25zdCB0b2dnbGVTaXplID0gZnVuY3Rpb24oZXZlbnQpe1xuICAgICAgICBpZiAoZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygncHJvamVjdCcpKXtcblxuICAgICAgICBjb25zdCBjb250YWluZXIgPSBET00uc2VsZWN0RWxlbShgI2NvbnRhaW5lciR7ZXZlbnQudGFyZ2V0LmRhdGFzZXQuaWR9YCApICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgY29udGFpbmVyLmNsYXNzTGlzdC50b2dnbGUoJ25vbmUnKTtcblxuICAgICAgICB9XG5cbiAgICAgICAgZWxzZSB7XG4gICAgICAgIFxuICAgICAgICBjb25zdCBmb3JtID0gZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQ7XG4gICAgICAgIGNvbnN0IHByb2plY3QgPSBldmVudC50YXJnZXQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50OyAgICBcbiAgICAgICAgY29uc3QgZm9ybUNoaWxkcmVuID0gQXJyYXkuZnJvbShmb3JtLmNoaWxkcmVuKTtcbiAgICAgICAgZm9ybUNoaWxkcmVuLmZvckVhY2goaXRtID0+IGl0bS5kYXRhc2V0LmNsYXNzID09PSBgY2hpbGQke3Byb2plY3QuZGF0YXNldC5pZH0ke2Zvcm0uZGF0YXNldC5pZH1gID8gaXRtLmNsYXNzTGlzdC50b2dnbGUoJ25vbmUnKSA6IGZhbHNlKSAgICAgICBcbiAgICAgICAgICAgIFxuICAgICAgICB9XG4gICAgIH1cblxuICAgICBjb25zdCBub3RlVHlwZUdlbmVyYXRvciA9IGZ1bmN0aW9uKGV2ZW50KXsgXG5cbiAgICAgICAgaWYoZXZlbnQudHlwZSA9PT0gJ2NsaWNrJyl7cmV0dXJufVxuXG4gICAgICAgIGNvbnN0IGdldFNlbGVjdGVkID0gKGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAgY29uc3Qgc2VsZWN0ID0gIERPTS5zZWxlY3RFbGVtKCcjc2VsZWN0Jyk7XG4gICAgICAgICAgICAgcmV0dXJuIHNlbGVjdC5vcHRpb25zW3NlbGVjdC5zZWxlY3RlZEluZGV4XS52YWx1ZTtcbiAgICAgICAgfSkoKVxuICAgICAgICBcbiAgICAgICAgY29uc3QgX2dlbmVyYXRlVGVtcG9yYXJ5SW5wdXQgPSAoZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIGNvbnN0IHByb2plY3QgPSBET00uc2VsZWN0RWxlbSgnI25vdGVUeXBlRm9ybScpLnBhcmVudEVsZW1lbnQ7XG4gICAgICAgICAgIFxuICAgICAgICBpZiAoZ2V0U2VsZWN0ZWQgPT09ICdDaGVja2xpc3QnKXsgICAgXG4gICAgICAgICAgICBsZXQgdGVtcG9yYXJ5SW5wdXQgPSBET00uZWxlbWVudEluaXQoJ2lucHV0Jyx7J3R5cGUnOid0ZXh0JyxcbiAgICAgICAgICAgICdhdXRvY29tcGxldGUnOidvZmYnLFxuICAgICAgICAgICAgJ3JlcXVpcmVkJzoncmVxdWlyZWQnLFxuICAgICAgICAgICAgJ2lkJzondGVtcG9yYXJ5SW5wdXQnLFxuICAgICAgICAgICAnY2xhc3MnOiAndGVtcG9yYXJ5SW5wdXQgbm9uZSd9KTsgIFxuICAgICAgICAgICAgcHJvamVjdC5hcHBlbmRDaGlsZCh0ZW1wb3JhcnlJbnB1dCk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgbGV0IHRleHRBcmVhID0gRE9NLmVsZW1lbnRJbml0KCd0ZXh0YXJlYScsIHsnaWQnOid0ZW1wb3JhcnlJbnB1dCcsXG4gICAgICAgICAgICAgICAgJ25hbWUnOidmcmVlRm9ybScsXG4gICAgICAgICAgICAgICAgJ2xhYmVsJzonZnJlZUZvcm0nLFxuICAgICAgICAgICAgICAgICdjbGFzcyc6J3RlbXBvcmFyeUlucHV0IG5vbmUnLFxuICAgICAgICAgICAgICAgICdhdXRvY29tcGxldGUnOidvZmYnLFxuICAgICAgICAgICAgICAgICdyZXF1aXJlZCc6J3JlcXVpcmVkJyxcbiAgICAgICAgICAgICAgICAncm93cycgOiAnNCcsXG4gICAgICAgICAgICAgICAgJ2NvbHMnIDogJzUwJyB9KTtcbiAgICAgICAgICAgIHByb2plY3QuYXBwZW5kQ2hpbGQodGV4dEFyZWEpO1xuICAgICAgICAgICAgIFxuICAgICAgICB9XG4gICAgICAgIGNvbnN0IF9nZW5lcmF0ZVRyaWdnZXJCdXR0b25zID0gKGZ1bmN0aW9uKCl7XG5cbiAgICAgICAgICAgIGNvbnN0IHN1Ym1pdCA9IERPTS5lbGVtZW50SW5pdCgnYnV0dG9uJyx7J3R5cGUnOididXR0b24nLFxuICAgICAgICAgICAgJ2lkJzogJ3N1Ym1pdFRyaWdnZXInLCBcbiAgICAgICAgICAgJ2NsYXNzJzonc3VibWl0VHJpZ2dlciBub25lJyxcbiAgICAgICAgICAgIH0sJ1N1Ym1pdCBOb3RlJylcbiAgICAgICAgICAgIGNvbnN0IGNhbmNlbCA9IERPTS5lbGVtZW50SW5pdCgnYnV0dG9uJywgeydjbGFzcyc6J2NhbmNlbFRyaWdnZXIgbm9uZScsXG4gICAgICAgICAgJ2lkJzonY2FuY2VsVHJpZ2dlcid9LCAnQ2FuY2VsJyk7XG5cbiAgICAgICAgICBwcm9qZWN0LmFwcGVuZENoaWxkKHN1Ym1pdCk7XG4gICAgICAgICAgcHJvamVjdC5hcHBlbmRDaGlsZChjYW5jZWwpO1xuXG4gICAgICAgIH0pKClcbiAgICAgICAgXG4gICAgICAgIFxuICAgICAgICB9KSgpXG5cblxuICAgICAgICBcbiAgICAgICAgcHJvamVjdEV2ZW50cy5wdWJsaXNoKCdjcmVhdGVOb3RlJywgZ2V0U2VsZWN0ZWQpO1xuICAgICAgICBwcm9qZWN0RXZlbnRzLnB1Ymxpc2goJ2RlbGV0ZU5vdGVUeXBlRm9ybScsIGV2ZW50KTtcbiAgICAgICAgcHJvamVjdEV2ZW50cy5wdWJsaXNoKCdzYXZlZCcpO1xuICAgICAgICBcbiAgICAgICAgXG4gICAgICAgIHJldHVybiBnZXRTZWxlY3RlZFxuICAgICB9XG5cblxuXG4gICAgY29uc3QgZGVsZXRlRm9ybXMgPSBmdW5jdGlvbihldmVudCl7XG5cbiAgICAgICAgaWYoZXZlbnQudGFyZ2V0Lm5vZGVOYW1lICE9ICdCVVRUT04nICYmIGV2ZW50LnR5cGUgPT09ICdjbGljaycpe3JldHVybn0gIFxuICAgICAgICAgICAgICBcbiAgICAgICAgY29uc3QgX2NhbmNlbE5vdGVUeXBlRm9ybSA9IGZ1bmN0aW9uKCl7XG5cbiAgICAgICAgICAgIGNvbnN0IF9kZWxldGVQcm92VGl0bGUgPSBmdW5jdGlvbigpe1xuICAgICAgICAgICAgICAgICBjb25zdCBwcm92VGl0bGUgPSAgRE9NLnNlbGVjdEVsZW0oJyNwcm92VGl0bGUnKVxuICAgICAgICAgICAgICAgICBwcm92VGl0bGUgPyBwcm92VGl0bGUucmVtb3ZlKCkgOiBmYWxzZVxuICAgICAgICAgICAgICAgICByZXR1cm4gICBcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGNvbnN0IF9kZWxldGVBZGROb3RlRm9ybSA9IChmdW5jdGlvbigpe1xuICAgICAgICAgICAgICAgICBjb25zdCBub3RlVHlwZUZvcm0gPSBET00uc2VsZWN0RWxlbSgnI25vdGVUeXBlRm9ybScpO1xuICAgICAgICAgICAgICAgICBub3RlVHlwZUZvcm0gPyBub3RlVHlwZUZvcm0ucmVtb3ZlKCkgOiBmYWxzZTtcbiAgICAgICAgICAgICAgICAgcmV0dXJuXG5cbiAgICAgICAgICAgICB9KSgpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBldmVudC50YXJnZXQuY2xhc3NOYW1lID09PSAnY2FuY2VsQ2hvaWNlJyA/IF9kZWxldGVQcm92VGl0bGUoKSA6IGZhbHNlOyBcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG5cblxuICAgICAgICAgbGV0IGRlbGV0ZWQgPSBET00uc2VsZWN0RWxlbSgnI2Nob29zZVRpdGxlRm9ybScpO1xuICAgICAgICAgZGVsZXRlZCA/IGRlbGV0ZWQucmVtb3ZlKCkgOiBfY2FuY2VsTm90ZVR5cGVGb3JtKClcbiAgICAgICAgIFxuICAgICAgICAgcmV0dXJuXG5cblxuICAgIH1cblxuXG4gICAgY29uc3QgY2xlYW5Ub0RvRm9ybSA9IGZ1bmN0aW9uKCl7XG4gICAgICBcbiAgICAgIGNvbnN0IGZvcm0gPSBET00uc2VsZWN0RWxlbSgnI3N1Ym1pdE5vdGUnKS5wYXJlbnRFbGVtZW50O1xuICAgICAgY29uc3QgcHJvamVjdCA9IERPTS5zZWxlY3RFbGVtKCcjdGVtcG9yYXJ5SW5wdXQnKS5wYXJlbnRFbGVtZW50OyAgXG5cbiAgICAgIGNvbnN0IF9kZWxldGVUcmFuc2l0b3J5U3R1ZmYgPSAoZnVuY3Rpb24oKXsgIFxuICAgICAgICBsZXQgZGVsZXRlZCA9IERPTS5zZWxlY3RFbGVtKCcjdGVtcG9yYXJ5SW5wdXQnKTtcbiAgICAgICAgZGVsZXRlZC5yZW1vdmUoKTtcblxuICAgICAgICBkZWxldGVkID0gRE9NLnNlbGVjdEVsZW0oJyNzdWJtaXRUcmlnZ2VyJyk7XG4gICAgICAgIGRlbGV0ZWQucmVtb3ZlKCk7XG5cbiAgICAgICAgZGVsZXRlZCA9IERPTS5zZWxlY3RFbGVtKCcjY2FuY2VsVHJpZ2dlcicpO1xuICAgICAgICBkZWxldGVkLnJlbW92ZSgpO1xuXG4gICAgICAgIGRlbGV0ZWQgPSBET00uc2VsZWN0RWxlbSgnI3N1Ym1pdE5vdGUnKTtcbiAgICAgICAgZGVsZXRlZC5yZW1vdmUoKTtcblxuICAgICAgICBkZWxldGVkID0gRE9NLnNlbGVjdEVsZW0oJyNjYW5jZWxOb3RlJyk7XG4gICAgICAgIGRlbGV0ZWQucmVtb3ZlKCk7IFxuICAgIH0pKClcbiAgICAgIFxuICAgICAgY29uc3QgX2NvbnZlcnRBZGRDaGVjayA9IChmdW5jdGlvbigpeyBcblxuICAgICAgICBsZXQgY29udmVydCA9IERPTS5zZWxlY3RFbGVtKGAjYWRkQ2hlY2ske3Byb2plY3QuZGF0YXNldC5pZH0ke2Zvcm0uZGF0YXNldC5pZH1gKTtcblxuICAgICAgICBpZiAoY29udmVydCl7XG4gICAgICAgICAgICBjb252ZXJ0LnJlbW92ZUF0dHJpYnV0ZSgnY2xhc3MnKTtcbiAgICAgICAgICAgIGNvbnZlcnQuY2xhc3NOYW1lID0gJ2FkZENoZWNrTW9kJztcbiAgICAgIFxuICAgICAgICB9XG4gICAgfSkoKVxuXG4gICAgICBjb25zdCBfcmVtb3ZlV2hlcmVFbXB0eSA9IChmdW5jdGlvbigpe1xuICAgICAgICBcbiAgICAgICAgY29uc3QgZm9ybUNoaWxkcmVuID0gQXJyYXkuZnJvbShmb3JtLmNoaWxkcmVuKTtcbiAgICAgICAgY29uc3QgY2hpbGQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1jbGFzcz1jaGlsZCR7cHJvamVjdC5kYXRhc2V0LmlkfSR7Zm9ybS5kYXRhc2V0LmlkfV1gKVxuICAgICAgICAhKGZvcm1DaGlsZHJlbi5pbmNsdWRlcyhjaGlsZCkpID8gZm9ybS5yZW1vdmUoKSA6IGZhbHNlO1xuXG4gICAgfSkoKVxuXG4gICAgICAgIHJldHVyblxuICAgIH1cbiAgICAgICAgXG4gICAgXG4gICAgY29uc3QgZ2VuZXJhdGVOZXdBZGRDaGVjayA9IGZ1bmN0aW9uKGV2ZW50KXtcbiAgICAgICAgXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGNvbnN0IGZvcm0gPSBldmVudC50YXJnZXQucGFyZW50RWxlbWVudDtcbiAgICAgICAgY29uc3QgcHJvamVjdCA9IGZvcm0ucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50O1xuXG4gICAgICAgIGlmKERPTS5zZWxlY3RFbGVtKCcjdGVtcG9yYXJ5SW5wdXQnKSAmJiBET00uc2VsZWN0RWxlbSgnI3RlbXBvcmFyeUlucHV0JykubGFiZWwgPT09ICdmcmVlRm9ybScpe1xuICAgICAgICAgICAgRE9NLnNlbGVjdEVsZW0oJyN0ZW1wb3JhcnlJbnB1dCcpLnJlbW92ZSgpO1xuICAgICAgICAgICAgRE9NLnNlbGVjdEVsZW0oJyNzdWJtaXRUcmlnZ2VyJykucmVtb3ZlKCk7XG4gICAgICAgICAgICBET00uc2VsZWN0RWxlbSgnI2NhbmNlbFRyaWdnZXInKS5yZW1vdmUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghRE9NLnNlbGVjdEVsZW0oJyN0ZW1wb3JhcnlJbnB1dCcpKXtcbiAgICAgICAgY29uc3QgdGVtcG9yYXJ5SW5wdXQgPSBET00uZWxlbWVudEluaXQoJ2lucHV0Jyx7J3R5cGUnOid0ZXh0JyxcbiAgICAgICAgJ2F1dG9jb21wbGV0ZSc6J29mZicsXG4gICAgICAgICdyZXF1aXJlZCc6J3JlcXVpcmVkJyxcbiAgICAgICAgJ2lkJzondGVtcG9yYXJ5SW5wdXQnLFxuICAgICAgICAnY2xhc3MnOiAndGVtcG9yYXJ5SW5wdXQgbm9uZSd9KTtcblxuXG4gICAgICAgIHByb2plY3QuYXBwZW5kQ2hpbGQodGVtcG9yYXJ5SW5wdXQpO1xuXG4gICAgICAgIGNvbnN0IF9nZW5lcmF0ZVRyaWdnZXJCdXR0b25zID0gKGZ1bmN0aW9uKCl7XG5cbiAgICAgICAgICAgIGNvbnN0IHN1Ym1pdCA9IERPTS5lbGVtZW50SW5pdCgnYnV0dG9uJyx7J3R5cGUnOididXR0b24nLFxuICAgICAgICAgICAgJ2lkJzogJ3N1Ym1pdFRyaWdnZXInLCBcbiAgICAgICAgICAgJ2NsYXNzJzonc3VibWl0VHJpZ2dlciBub25lJyxcbiAgICAgICAgICAgIH0sJ1N1Ym1pdCBOb3RlJylcbiAgICAgICAgICAgIGNvbnN0IGNhbmNlbCA9IERPTS5lbGVtZW50SW5pdCgnYnV0dG9uJywgeydjbGFzcyc6J2NhbmNlbFRyaWdnZXIgbm9uZScsXG4gICAgICAgICAgJ2lkJzonY2FuY2VsVHJpZ2dlcid9LCAnQ2FuY2VsJyk7XG5cbiAgICAgICAgICBwcm9qZWN0LmFwcGVuZENoaWxkKHN1Ym1pdCk7XG4gICAgICAgICAgcHJvamVjdC5hcHBlbmRDaGlsZChjYW5jZWwpO1xuXG4gICAgICAgIH0pKClcblxuICAgICAgICBkaXNhYmxlQnRucyhldmVudC50YXJnZXQpO1xuICAgIFxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFET00uc2VsZWN0RWxlbSgnI3N1Ym1pdE5vdGUnKSl7ICAgICAgIFxuICAgICAgICAgY29uc3Qgb3JpZ2luYWxTdWJtaXQgPSBET00uZWxlbWVudEluaXQoJ2J1dHRvbicseyd0eXBlJzonc3VibWl0JyxcbiAgICAgICAgJ2lkJzogJ3N1Ym1pdE5vdGUnLCBcbiAgICAgICAgJ2NsYXNzJzonc3VibWl0Tm90ZSBoaWRkZW4nLFxuICAgICAgICB9LCcnKVxuXG4gICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQob3JpZ2luYWxTdWJtaXQpO1xuXG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGlmICghRE9NLnNlbGVjdEVsZW0oJyNjYW5jZWxOb3RlJykpeyAgICAgICBcbiAgICAgICAgICAgIGNvbnN0IGNhbmNlbCA9IERPTS5lbGVtZW50SW5pdCgnYnV0dG9uJyx7XG4gICAgICAgICAgICdpZCc6ICdjYW5jZWxOb3RlJywgXG4gICAgICAgICAgICdjbGFzcyc6J2NhbmNlbCBoaWRkZW4nLFxuICAgICAgICAgICB9LCcnKVxuICAgXG4gICAgICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQoY2FuY2VsKTtcbiAgICBcbiAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgIHByb2plY3RFdmVudHMucHVibGlzaCgnbmV3Q2hlY2tJdGVtJywgZXZlbnQpO1xuXG4gICAgICAgIHJldHVyblxuXG4gICAgfVxuXG4gICAgY29uc3QgYWRkTmV3Q2hlY2sgPSBmdW5jdGlvbihldmVudCl7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGNvbnN0IGlucHV0ID0gRE9NLnNlbGVjdEVsZW0oJyN0ZW1wb3JhcnlJbnB1dCcpO1xuICAgICAgICBjb25zdCBzdWJtaXQgPSBET00uc2VsZWN0RWxlbSgnI3N1Ym1pdFRyaWdnZXInKTtcbiAgICAgICAgY29uc3QgY2FuY2VsID0gRE9NLnNlbGVjdEVsZW0oJyNjYW5jZWxUcmlnZ2VyJyk7XG4gICAgICAgIGlucHV0LmNsYXNzTGlzdC50b2dnbGUoJ25vbmUnLGZhbHNlKTtcbiAgICAgICAgaW5wdXQuZm9jdXMoKTtcbiAgICAgICAgZGlzYWJsZUJ0bnMoKTtcbiAgICAgICAgc3VibWl0LmNsYXNzTGlzdC50b2dnbGUoJ25vbmUnLGZhbHNlKTtcbiAgICAgICAgY2FuY2VsLmNsYXNzTGlzdC50b2dnbGUoJ25vbmUnLGZhbHNlKTtcbiAgICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgXG4gICAgICBjb25zdCBfZ2VuZXJhdGVDaGVja0l0ZW0gPSBmdW5jdGlvbigpeyAgXG4gICAgICAgIGNvbnN0IGlucHV0ID0gRE9NLnNlbGVjdEVsZW0oJyN0ZW1wb3JhcnlJbnB1dCcpO1xuICAgICAgICBjb25zdCBwcm9qZWN0ID0gaW5wdXQucGFyZW50RWxlbWVudDtcbiAgICAgICAgY29uc3QgZm9ybSA9IERPTS5zZWxlY3RFbGVtKCcjc3VibWl0Tm90ZScpLnBhcmVudEVsZW1lbnQ7XG5cbiAgICAgICAgY29uc3QgZGVsID0gRE9NLmVsZW1lbnRJbml0KCdidXR0b24nLCB7J2NsYXNzJzogJ2RlbGV0ZUNoZWNrIG5vbmUnfSwnZGVsZXRlJyApIC8vdG8gZWRpdCB3aGVuIGNyZWF0aW5nIGRyb3Bkb3duXG4gICAgICAgXG4gICAgICAgIGNvbnN0IGNoZWNrYm94ID0gRE9NLmVsZW1lbnRJbml0KCdpbnB1dCcsIHsndHlwZSc6J2NoZWNrYm94JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnaWQnOiBgY2hlY2ske3Byb2plY3QuZGF0YXNldC5pZH0ke2Zvcm0uZGF0YXNldC5pZH0ke2lucHV0LnZhbHVlfWAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2NsYXNzJzonY2hlY2snLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdkYXRhLWNsYXNzJzpgY2hpbGQke3Byb2plY3QuZGF0YXNldC5pZH0ke2Zvcm0uZGF0YXNldC5pZH1gfSk7XG4gICAgICAgIGNvbnN0IGxhYmVsID0gRE9NLmVsZW1lbnRJbml0KCdsYWJlbCcsIHsnZm9yJzogYCR7aW5wdXQudmFsdWV9YCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnY2xhc3MnOiAnZWRpdCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnZGF0YS1jbGFzcyc6YGNoaWxkJHtwcm9qZWN0LmRhdGFzZXQuaWR9JHtmb3JtLmRhdGFzZXQuaWR9YH0sYCR7aW5wdXQudmFsdWV9YCk7XG4gICAgICAgIGNvbnN0IGJyID0gRE9NLmVsZW1lbnRJbml0KCdicicseydkYXRhLWNsYXNzJzpgY2hpbGQke3Byb2plY3QuZGF0YXNldC5pZH0ke2Zvcm0uZGF0YXNldC5pZH1gfSk7XG5cbiAgICAgICBcbiAgICAgICAgbGFiZWwuYXBwZW5kQ2hpbGQoZGVsKTtcbiAgICAgICAgZm9ybS5hcHBlbmRDaGlsZChjaGVja2JveCk7XG4gICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQobGFiZWwpO1xuICAgICAgICBmb3JtLmFwcGVuZENoaWxkKGJyKTtcblxuICAgICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCBzdWJtaXRJdGVtID0gZnVuY3Rpb24oKXtcbiAgICBcbiAgICBjb25zdCBpbnB1dCA9IERPTS5zZWxlY3RFbGVtKCcjdGVtcG9yYXJ5SW5wdXQnKTtcbiAgICBjb25zdCBwcm9qZWN0ID0gaW5wdXQucGFyZW50RWxlbWVudDtcbiAgICBjb25zdCBmb3JtID0gRE9NLnNlbGVjdEVsZW0oJyNzdWJtaXROb3RlJykucGFyZW50RWxlbWVudDtcbiAgICBjb25zdCByZW1vdmUgPSBET00uc2VsZWN0RWxlbShgI3JlbW92ZSR7aW5wdXQucGFyZW50RWxlbWVudC5kYXRhc2V0LmlkfSR7Zm9ybS5kYXRhc2V0LmlkfWApO1xuICAgIFxuICAgIGlmIChpbnB1dC52YWx1ZSA9PT0gJycpe3JldHVybn07XG5cbiAgICBpZiAoZm9ybS5jbGFzc0xpc3QuY29udGFpbnMoJ2NoZWNrYm94Jykpe1xuICAgICAgICBfZ2VuZXJhdGVDaGVja0l0ZW0oKTtcbiAgICAgICAgaW5wdXQuY2xhc3NMaXN0LnRvZ2dsZSgnbm9uZScsIHRydWUpOyAgICAgICAgXG4gICAgICAgIHJldHVyblxuICAgIH1cblxuICAgIFxuICAgIGNvbnN0IHRleHQgPSBET00uZWxlbWVudEluaXQoJ3AnLCB7J2NsYXNzJzondGV4dCBlZGl0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2RhdGEtY2xhc3MnOmBjaGlsZCR7cHJvamVjdC5kYXRhc2V0LmlkfSR7Zm9ybS5kYXRhc2V0LmlkfWB9LCBgJHtpbnB1dC52YWx1ZX1gKTtcblxuICAgIGZvcm0uYXBwZW5kQ2hpbGQodGV4dCk7XG4gICAgcmVtb3ZlLmNsYXNzTGlzdC50b2dnbGUoJ25vbmUnLGZhbHNlKTtcblxuICAgIHJldHVyblxuXG4gICB9XG5cbiAgIGNvbnN0IHRyaWdnZXJFdmVudHMgPSBmdW5jdGlvbihldmVudCl7XG4gICAgICAgY29uc3QgY2FuY2VsID0gRE9NLnNlbGVjdEVsZW0oJyNjYW5jZWxOb3RlJylcbiAgICAgICBjb25zdCBzdWJtaXQgPSBET00uc2VsZWN0RWxlbSgnI3N1Ym1pdE5vdGUnKVxuXG4gICAgICAgZXZlbnQudGFyZ2V0ID09PSBET00uc2VsZWN0RWxlbSgnI3N1Ym1pdFRyaWdnZXInKSA/IHN1Ym1pdC5jbGljaygpIDogY2FuY2VsLmNsaWNrKClcblxuICAgfVxuXG4gICBjb25zdCBkZWxldGVJdGVtID0gZnVuY3Rpb24oZXZlbnQpe1xuICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQucmVtb3ZlKCk7XG4gICAgcmV0dXJuXG4gICB9XG4gICBcbiAgIFxuICAgY29uc3QgZGVsZXRlQ2hlY2sgPSBmdW5jdGlvbihldmVudCl7XG4gICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgIGNvbnN0IGxhYmVsID0gZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnRcbiAgICAgICBjb25zdCBiciA9IGxhYmVsLm5leHRFbGVtZW50U2libGluZztcbiAgICAgICBjb25zdCBjaGVjayA9IGxhYmVsLnByZXZpb3VzRWxlbWVudFNpYmxpbmc7XG4gICAgICAgY29uc3QgZm9ybSA9IGNoZWNrLnBhcmVudEVsZW1lbnQ7XG4gICAgICAgY29uc3QgcHJvamVjdCA9IGZvcm0ucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50O1xuXG5cbiAgICAgICBici5yZW1vdmUoKSBcbiAgICAgICBjaGVjay5yZW1vdmUoKSBcbiAgICAgICBsYWJlbC5yZW1vdmUoKVxuICAgICAgIFxuICAgICAgIGNvbnN0IGZvcm1DaGlsZHJlbiA9IEFycmF5LmZyb20oZm9ybS5jaGlsZHJlbik7XG4gICAgICAgY29uc3QgY2hpbGQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1jbGFzcz1jaGlsZCR7cHJvamVjdC5kYXRhc2V0LmlkfSR7Zm9ybS5kYXRhc2V0LmlkfV1gKVxuICAgICAgICEoZm9ybUNoaWxkcmVuLmluY2x1ZGVzKGNoaWxkKSkgPyBmb3JtLnJlbW92ZSgpIDogZmFsc2U7XG4gICAgICAgXG4gICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgbW92ZUl0ZW0gPSBmdW5jdGlvbihldmVudCl7XG4gICAgICAgIGNvbnN0IHRhcmdldCA9IGV2ZW50LnRhcmdldC5jbG9zZXN0KCcudG9Eb05vdGVJbnB1dCcpIHx8IGV2ZW50LnRhcmdldC5jbG9zZXN0KCcucHJvamVjdCcpXG4gICAgICAgIC8vbGV0IHNoaWZ0WCA9XG4gICAgICAgIC8vbGV0IHNoaWZ0WSA9IFxuXG4gICAgfVxuXG4gICAgIHJldHVybiB7XG4gICAgICAgICBjcmVhdGVQcm9qZWN0LFxuICAgICAgICAgY3JlYXRlVG9Eb05vdGUsXG4gICAgICAgICByZXZlYWxDcmVhdGVGb3JtLFxuICAgICAgICAgcmVzZXRDcmVhdGVGb3JtLFxuICAgICAgICAgdG9nZ2xlU2l6ZSxcbiAgICAgICAgIGNob29zZVRvRG9UaXRsZUZvcm0sXG4gICAgICAgICBzdWJtaXRUb0RvVGl0bGUsXG4gICAgICAgICBjaG9vc2VOb3RlVHlwZSxcbiAgICAgICAgIG5vdGVUeXBlR2VuZXJhdG9yLFxuICAgICAgICAgZGVsZXRlRm9ybXMsXG4gICAgICAgICBkaXNhYmxlQnRucyxcbiAgICAgICAgIGVuYWJsZUJ0bnMsXG4gICAgICAgICBjbGVhblRvRG9Gb3JtLFxuICAgICAgICAgbW9kaWZ5RWxlbWVudCxcbiAgICAgICAgIHRyaWdnZXJFdmVudHMsXG4gICAgICAgICByZXZlcnRNb2RpZmllZEVsZW1lbnQsXG4gICAgICAgICBhZGROZXdDaGVjayxcbiAgICAgICAgIGdlbmVyYXRlTmV3QWRkQ2hlY2ssXG4gICAgICAgICBzdWJtaXRJdGVtLFxuICAgICAgICAgc3VibWl0TW9kaWZpZWRFbGVtZW50LFxuICAgICAgICAgZGVsZXRlSXRlbSxcbiAgICAgICAgIGRlbGV0ZUNoZWNrLFxuICAgICAgICAgXG4gICAgIH1cbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0ICogYXMgcHJvamVjdHMgZnJvbSAnLi9wcm9qZWN0cyc7XG5pbXBvcnQgeyBET01HZW5lcmFsIH0gZnJvbSBcIi4vaGVscGVycy9ET01cIjtcbmltcG9ydCB7IHRlbXBsYXRlRE9NU3RydWN0cyB9IGZyb20gJy4vcHJvamVjdHNET00nO1xuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgeyBwcm9qZWN0RXZlbnRzIH0gZnJvbSAnLi9wcm9qZWN0ZXZlbnRzJztcblxuXG5jb25zdCByZXZlYWxUb0RvID0gKGZ1bmN0aW9uKCl7IFxuICAgIFxuICAgIC8vQ2FsbGluZyBtb2R1bGUgT2JqZWN0c1xuICAgIGNvbnN0IERPTSA9IERPTUdlbmVyYWwoKTtcbiAgICBjb25zdCBzdHJ1Y3RzID0gdGVtcGxhdGVET01TdHJ1Y3RzKCk7XG4gICAgY29uc3QgbWFpbiA9IHByb2plY3RzLm1haW5JbnRlcmZhY2UoKTtcbiAgICBcblxuICAgIC8vTW9kdWxlIG1ldGhvZHMgdG8gYmUgdXNlZFxuICAgIGNvbnN0IG5ld1Byb2ogPSBtYWluLm5ld1Byb2o7XG4gICAgY29uc3QgbG9jYWxTdG9yZSA9IG1haW4udHJhbnNmZXJUb0xvY2FsU3RvcmFnZTtcbiAgICBjb25zdCBhcHBlbmRUb1Byb2ogPSBtYWluLmFwcGVuZFRvUHJvajtcbiAgICBjb25zdCByZW1vdmVJdGVtID0gbWFpbi5yZW1vdmVJdGVtO1xuICAgIGNvbnN0IGFwcGVuZE5vdGVUb0l0ZW0gPSBtYWluLmFwcGVuZE5vdGVUb0l0ZW1cbiAgICBjb25zdCByZWNvcmRDaGVjayA9IG1haW4ucmVjb3JkQ2hlY2s7XG4gICAgY29uc3QgZGVsZXRlQ2hlY2tGcm9tU3RvcmFnZSA9IG1haW4uZGVsZXRlQ2hlY2tGcm9tU3RvcmFnZTtcbiAgICBjb25zdCBtb2RpZnlJblN0b3JhZ2UgPSBtYWluLm1vZGlmeUluU3RvcmFnZTtcbiAgICBjb25zdCBjcmVhdGVQcm9qZWN0ID0gc3RydWN0cy5jcmVhdGVQcm9qZWN0O1xuICAgIGNvbnN0IHJldmVhbENyZWF0ZUZvcm0gPSBzdHJ1Y3RzLnJldmVhbENyZWF0ZUZvcm07XG4gICAgY29uc3QgcmVzZXRDcmVhdGVGb3JtID0gc3RydWN0cy5yZXNldENyZWF0ZUZvcm07XG4gICAgY29uc3QgdG9nZ2xlU2l6ZSA9IHN0cnVjdHMudG9nZ2xlU2l6ZTtcbiAgICBjb25zdCBjaG9vc2VUb0RvVGl0bGVGb3JtID0gc3RydWN0cy5jaG9vc2VUb0RvVGl0bGVGb3JtO1xuICAgIGNvbnN0IHN1Ym1pdFRvRG9UaXRsZSA9IHN0cnVjdHMuc3VibWl0VG9Eb1RpdGxlO1xuICAgIGNvbnN0IGNob29zZU5vdGVUeXBlID0gc3RydWN0cy5jaG9vc2VOb3RlVHlwZTtcbiAgICBjb25zdCBub3RlVHlwZUdlbmVyYXRvciA9IHN0cnVjdHMubm90ZVR5cGVHZW5lcmF0b3I7XG4gICAgY29uc3QgZGVsZXRlRm9ybXMgPSBzdHJ1Y3RzLmRlbGV0ZUZvcm1zO1xuICAgIGNvbnN0IGRpc2FibGVCdG5zID0gc3RydWN0cy5kaXNhYmxlQnRucztcbiAgICBjb25zdCBjcmVhdGVUb0RvTm90ZSA9IHN0cnVjdHMuY3JlYXRlVG9Eb05vdGU7XG4gICAgY29uc3QgZW5hYmxlQnRucyA9IHN0cnVjdHMuZW5hYmxlQnRucztcbiAgICBjb25zdCBjbGVhblRvRG9Gb3JtID0gc3RydWN0cy5jbGVhblRvRG9Gb3JtO1xuICAgIGNvbnN0IGFkZE5ld0NoZWNrID0gc3RydWN0cy5hZGROZXdDaGVjaztcbiAgICBjb25zdCByZXZlcnRNb2RpZmllZEVsZW1lbnQgPSBzdHJ1Y3RzLnJldmVydE1vZGlmaWVkRWxlbWVudDtcbiAgICBjb25zdCBtb2RpZnlFbGVtZW50ID0gc3RydWN0cy5tb2RpZnlFbGVtZW50O1xuICAgIGNvbnN0IHN1Ym1pdEl0ZW0gPSBzdHJ1Y3RzLnN1Ym1pdEl0ZW07XG4gICAgY29uc3QgZ2VuZXJhdGVOZXdBZGRDaGVjayA9IHN0cnVjdHMuZ2VuZXJhdGVOZXdBZGRDaGVjaztcbiAgICBjb25zdCBzdWJtaXRNb2RpZmllZEVsZW1lbnQgPSBzdHJ1Y3RzLnN1Ym1pdE1vZGlmaWVkRWxlbWVudDtcbiAgICBjb25zdCBkZWxldGVJdGVtID0gc3RydWN0cy5kZWxldGVJdGVtO1xuICAgIGNvbnN0IGRlbGV0ZUNoZWNrID0gc3RydWN0cy5kZWxldGVDaGVja1xuICAgIGNvbnN0IHRyaWdnZXJFdmVudHMgPSBzdHJ1Y3RzLnRyaWdnZXJFdmVudHM7XG4gICAgY29uc3QgZGVsZWdhdG9yID0gcHJvamVjdEV2ZW50cy5kZWxlZ2F0b3I7XG5cbiAgICBcbiAgICBcbiAgICAvL0V2ZW50IFN1YnNjcmlwdGlvbnNcbiAgICBwcm9qZWN0RXZlbnRzLnN1YnNjcmliZSgndmlldycsIHRvZ2dsZVNpemUpO1xuICAgIHByb2plY3RFdmVudHMuc3Vic2NyaWJlKCdjcmVhdGUnLCBjcmVhdGVQcm9qZWN0KTtcbiAgICBwcm9qZWN0RXZlbnRzLnN1YnNjcmliZSgnY3JlYXRlJywgcmVzZXRDcmVhdGVGb3JtKTtcbiAgICBwcm9qZWN0RXZlbnRzLnN1YnNjcmliZSgnY2FuY2VsQ3JlYXRlTm90ZScsIHJlc2V0Q3JlYXRlRm9ybSk7XG4gICAgcHJvamVjdEV2ZW50cy5zdWJzY3JpYmUoJ2NyZWF0ZScsIG5ld1Byb2opO1xuICAgIHByb2plY3RFdmVudHMuc3Vic2NyaWJlKCdzYXZlZCcsIGxvY2FsU3RvcmUpO1xuICAgIHByb2plY3RFdmVudHMuc3Vic2NyaWJlKCdyZXZlYWwnLCByZXZlYWxDcmVhdGVGb3JtKTtcbiAgICBwcm9qZWN0RXZlbnRzLnN1YnNjcmliZSgnY2hvb3NlVGl0bGUnLCBkaXNhYmxlQnRucyk7XG4gICAgcHJvamVjdEV2ZW50cy5zdWJzY3JpYmUoJ2Nob29zZVRpdGxlJywgY2hvb3NlVG9Eb1RpdGxlRm9ybSk7XG4gICAgcHJvamVjdEV2ZW50cy5zdWJzY3JpYmUoJ2lucHV0T3JMaXN0Jywgc3VibWl0VG9Eb1RpdGxlKTtcbiAgICBwcm9qZWN0RXZlbnRzLnN1YnNjcmliZSgnaW5wdXRPckxpc3QnLCBjaG9vc2VOb3RlVHlwZSk7XG4gICAgcHJvamVjdEV2ZW50cy5zdWJzY3JpYmUoJ25vdGVUb0RvVHlwZScsIGRlbGV0ZUZvcm1zKVxuICAgIHByb2plY3RFdmVudHMuc3Vic2NyaWJlKCdub3RlVG9Eb1R5cGUnLCBub3RlVHlwZUdlbmVyYXRvcik7XG4gICAgcHJvamVjdEV2ZW50cy5zdWJzY3JpYmUoJ2RlbGV0ZU5vdGVUeXBlRm9ybScsIGFwcGVuZFRvUHJvaik7XG4gICAgcHJvamVjdEV2ZW50cy5zdWJzY3JpYmUoJ2RlbGV0ZU5vdGVUeXBlRm9ybScsIGRlbGV0ZUZvcm1zKTtcbiAgICBwcm9qZWN0RXZlbnRzLnN1YnNjcmliZSgnYWJvcnROb3RlVHlwZUZvcm0nLCBkZWxldGVGb3Jtcyk7XG4gICAgcHJvamVjdEV2ZW50cy5zdWJzY3JpYmUoJ2Fib3J0Tm90ZVR5cGVGb3JtJywgZW5hYmxlQnRucyk7XG4gICAgcHJvamVjdEV2ZW50cy5zdWJzY3JpYmUoJ2Fib3J0Tm90ZVR5cGVGb3JtJywgZGVsZXRlRm9ybXMpO1xuICAgIHByb2plY3RFdmVudHMuc3Vic2NyaWJlKCd0cmlnZ2VyJyx0cmlnZ2VyRXZlbnRzKTtcbiAgICBwcm9qZWN0RXZlbnRzLnN1YnNjcmliZSgnY2FuY2VsTm90ZScsIGVuYWJsZUJ0bnMpO1xuICAgIHByb2plY3RFdmVudHMuc3Vic2NyaWJlKCdjYW5jZWxOb3RlJywgY2xlYW5Ub0RvRm9ybSk7ICAgICAgICBcbiAgICBwcm9qZWN0RXZlbnRzLnN1YnNjcmliZSgnbmV3Q2hlY2tJdGVtJywgYWRkTmV3Q2hlY2spO1xuICAgIHByb2plY3RFdmVudHMuc3Vic2NyaWJlKCdjcmVhdGVOb3RlJywgY3JlYXRlVG9Eb05vdGUpO1xuICAgIHByb2plY3RFdmVudHMuc3Vic2NyaWJlKCdzdWJtaXROb3RlJywgc3VibWl0SXRlbSk7XG4gICAgcHJvamVjdEV2ZW50cy5zdWJzY3JpYmUoJ3N1Ym1pdE5vdGUnLCBlbmFibGVCdG5zKTtcbiAgICBwcm9qZWN0RXZlbnRzLnN1YnNjcmliZSgnc3VibWl0Tm90ZScsIGFwcGVuZFRvUHJvaik7XG4gICAgcHJvamVjdEV2ZW50cy5zdWJzY3JpYmUoJ3N1Ym1pdE5vdGUnLCBhcHBlbmROb3RlVG9JdGVtKTtcbiAgICBwcm9qZWN0RXZlbnRzLnN1YnNjcmliZSgnc3VibWl0Tm90ZScsIGNsZWFuVG9Eb0Zvcm0pO1xuICAgIHByb2plY3RFdmVudHMuc3Vic2NyaWJlKCd1cGRhdGVDaGVja0l0ZW0nLCBnZW5lcmF0ZU5ld0FkZENoZWNrKTtcbiAgICBwcm9qZWN0RXZlbnRzLnN1YnNjcmliZSgnbW9kaWZ5RWxlbScsIG1vZGlmeUVsZW1lbnQpO1xuICAgIHByb2plY3RFdmVudHMuc3Vic2NyaWJlKCdyZXZlcnQnLCByZXZlcnRNb2RpZmllZEVsZW1lbnQpO1xuICAgIHByb2plY3RFdmVudHMuc3Vic2NyaWJlKCdzdWJtaXRNb2QnLCBtb2RpZnlJblN0b3JhZ2UpO1xuICAgIHByb2plY3RFdmVudHMuc3Vic2NyaWJlKCdzdWJtaXRNb2QnLCBzdWJtaXRNb2RpZmllZEVsZW1lbnQpXG4gICAgcHJvamVjdEV2ZW50cy5zdWJzY3JpYmUoJ2RlbGV0ZScsIHJlbW92ZUl0ZW0pOyAgICBcbiAgICBwcm9qZWN0RXZlbnRzLnN1YnNjcmliZSgnZGVsZXRlJywgZGVsZXRlSXRlbSk7XG4gICAgcHJvamVjdEV2ZW50cy5zdWJzY3JpYmUoJ2RlbGV0ZUNoZWNrJywgZGVsZXRlQ2hlY2tGcm9tU3RvcmFnZSk7XG4gICAgcHJvamVjdEV2ZW50cy5zdWJzY3JpYmUoJ2RlbGV0ZUNoZWNrJywgZGVsZXRlQ2hlY2spO1xuICAgIHByb2plY3RFdmVudHMuc3Vic2NyaWJlKCdyZWNvcmRDaGVjaycsIHJlY29yZENoZWNrKTtcbiAgICBcbiAgICBcblxuXG4gICAgLy9Jbml0aWFsIGVsZW1lbnRzXG4gICAgY29uc3QgbWFpbkNvbnRhaW5lciA9IChmdW5jdGlvbigpe1xuICAgIFxuICAgICAgICBjb25zdCBjb250YWluZXIgPSAgRE9NLmVsZW1lbnRJbml0KCdkaXYnLHsnaWQnOidjb250YWluZXInfSlcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjb250YWluZXIpXG4gICAgICAgIHJldHVybiBjb250YWluZXJcbiAgICAgXG59KSgpXG5cbiAgICBjb25zdCBoZWFkZXIgPSAoZnVuY3Rpb24oKXtcbiAgICAgICAgXG4gICAgICAgIC8vSW5pdGlhbGlzZSBlbGVtZW50c1xuICAgICAgICBjb25zdCBoZWFkID0gRE9NLmVsZW1lbnRJbml0KCdoZWFkZXInLCB7J2lkJzonaGVhZGVyJ30pO1xuICAgICAgICBjb25zdCB0aXRsZSA9IERPTS5lbGVtZW50SW5pdCgnaDEnLHsnaWQnOiAndGl0bGUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnY2xhc3MnOiAnaGVhZGVyQ2hpbGQnfSwgJ1Byb2plY3QgTWFuYWdlcicpO1xuICAgICAgICBjb25zdCByZXZlYWxGb3JtID0gRE9NLmVsZW1lbnRJbml0KCdidXR0b24nLHsnY2xhc3MnOidyZXZlYWxGb3JtIGhlYWRlckNoaWxkJ30sJ05ldyBQcm9qZWN0Jyk7XG4gICAgICAgIFxuICAgICAgICAvL0FkZCBoZWFkZXIgZXZlbnQgbGlzdGVuZXJcbiAgICAgICAgaGVhZC5vbmNsaWNrID0gZGVsZWdhdG9yO1xuICAgICAgICBcbiAgICAgICAgLy9BcHBlbmQgdG8gZG9jdW1lbnRcbiAgICAgICAgaGVhZC5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gICAgICAgIGhlYWQuYXBwZW5kQ2hpbGQocmV2ZWFsRm9ybSk7XG4gICAgICAgIG1haW5Db250YWluZXIuYXBwZW5kQ2hpbGQoaGVhZCk7XG5cbiAgICAgICAgcmV0dXJuIGhlYWQ7XG59KSgpXG4gICAgXG4gICAgY29uc3QgZGVmYXVsdFByb2plY3QgPSAoZnVuY3Rpb24oKXtcbiAgICAgICAgXG4gICAgfSkoKVxuXG4gICAgXG4gICAgY29uc3QgcmVuZGVyTG9jYWxTdG9yYWdlID0gZnVuY3Rpb24oKXtcbiAgICAgICAgLy9UaGlzIHdpbGwgdXNlIGxvY2FsU3RvcmFnZSB0byBjaGVja1xuICAgICAgICAvL2lmIHRoZSB1c2VyIGhhcyBhbnkgc2F2ZWQgaW5zdGFuY2VzXG4gICAgICAgIC8vb2YgcHJvamVjdHMgYW5kIHJlbmRlciB0aGVtIGlmIHNvLiBcbiAgICAgICAgLy9SZW1lbWJlciB0byB0YWtlIGFjY291bnQgYW55IGRpZmZlcmVuY2VzIGluIGRhdGEgYmV0d2VlbiBiYWNrZW5kIGFuZCBET01cbiAgICB9XG5cblxuICAgICBcbiAgICBjb25zdCBjcmVhdGVGb3JtID0gKGZ1bmN0aW9uKCl7XG4gICAgICAgICBjb25zdCBmb3JtID0gRE9NLmVsZW1lbnRJbml0KCdmb3JtJyx7J2lkJzonY3JlYXRlRm9ybScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2NsYXNzJzonbm9uZSBwcm9qZWN0Rm9ybSB0cmFuc2l0Rm9ybSdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICBmb3JtLmFwcGVuZENoaWxkKERPTS5lbGVtZW50SW5pdCgnYnInKSk7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQoRE9NLmVsZW1lbnRJbml0KCdsYWJlbCcseydmb3InOid0aXRsZUlucCd9LCdQcm9qZWN0IFRpdGxlJykpXG4gICAgICAgICBmb3JtLmFwcGVuZENoaWxkKERPTS5lbGVtZW50SW5pdCgnYnInKSk7XG4gICAgICAgICBmb3JtLmFwcGVuZENoaWxkKERPTS5lbGVtZW50SW5pdCgnaW5wdXQnLHsndHlwZSc6J3RleHQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdpZCcgOiAndGl0bGVJbnAnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdhdXRvY29tcGxldGUnOiAnb2ZmJywgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICduYW1lJzondGl0bGVJbnAnfSkpO1xuICAgICAgICAgZm9ybS5hcHBlbmRDaGlsZChET00uZWxlbWVudEluaXQoJ2J1dHRvbicseyd0eXBlJzonc3VibWl0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2NsYXNzJzogJ3N1Ym1pdCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnaWQnOidzdWJtaXQnfSwnc3VibWl0JykpO1xuICAgICAgICAgZm9ybS5hcHBlbmRDaGlsZChET00uZWxlbWVudEluaXQoJ2J1dHRvbicsIHsgICd0eXBlJyA6ICdidXR0b24nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdjbGFzcyc6J2NhbmNlbE5ld1Byb2plY3QnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdpZCc6J2NhbmNlbE5ld1Byb2plY3QnfSwgJ2NhbmNlbCcgKSlcbiAgICAgICAgIFxuIFxuICAgICAgICAgZm9ybS5vbnN1Ym1pdCA9IGRlbGVnYXRvcjtcblxuICAgICAgICAgbWFpbkNvbnRhaW5lci5hcHBlbmRDaGlsZChmb3JtKTtcbiAgICAgICAgIFxuICAgICAgICAgY29uc3QgY2FuY2VsID0gRE9NLnNlbGVjdEVsZW0oJyNjYW5jZWxOZXdQcm9qZWN0Jyk7XG4gICAgICAgICBjYW5jZWwub25jbGljayA9IGRlbGVnYXRvcjtcblxuICAgICAgICAgcmV0dXJuIGZvcm07IFxufSkoKVxuXG5cbn0pKClcblxuICAgICJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==