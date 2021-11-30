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
___CSS_LOADER_EXPORT___.push([module.id, "html {\n    box-sizing: border-box;\n\n}\n\n*, *:before, *:after{\n    box-sizing: inherit;\n    margin: 0;\n    padding: 0;\n}\n\nbody {\n    display: flex;\n    flex-direction: column;\n    min-height: 100vh;\n    width: 100vw;\n\n}\n\n.project {\n    border: 1px solid black;\n    cursor: pointer;\n}\n\n.none {\n    display: none;\n}\n\n.toDoNoteInput {\n    border: 1px solid black;\n}\n\n.text {\n    white-space: pre-wrap;\n}\n\n.modInput {\n    white-space: pre-wrap;\n}\n\n.transitForm {\n    position: absolute;\n    z-index:0;\n    left: 50vw;\n    top: 35vh;\n    border: 1px solid;\n    padding: 2rem;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,sBAAsB;;AAE1B;;AAEA;IACI,mBAAmB;IACnB,SAAS;IACT,UAAU;AACd;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,iBAAiB;IACjB,YAAY;;AAEhB;;AAEA;IACI,uBAAuB;IACvB,eAAe;AACnB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,uBAAuB;AAC3B;;AAEA;IACI,qBAAqB;AACzB;;AAEA;IACI,qBAAqB;AACzB;;AAEA;IACI,kBAAkB;IAClB,SAAS;IACT,UAAU;IACV,SAAS;IACT,iBAAiB;IACjB,aAAa;AACjB","sourcesContent":["html {\n    box-sizing: border-box;\n\n}\n\n*, *:before, *:after{\n    box-sizing: inherit;\n    margin: 0;\n    padding: 0;\n}\n\nbody {\n    display: flex;\n    flex-direction: column;\n    min-height: 100vh;\n    width: 100vw;\n\n}\n\n.project {\n    border: 1px solid black;\n    cursor: pointer;\n}\n\n.none {\n    display: none;\n}\n\n.toDoNoteInput {\n    border: 1px solid black;\n}\n\n.text {\n    white-space: pre-wrap;\n}\n\n.modInput {\n    white-space: pre-wrap;\n}\n\n.transitForm {\n    position: absolute;\n    z-index:0;\n    left: 50vw;\n    top: 35vh;\n    border: 1px solid;\n    padding: 2rem;\n}"],"sourceRoot":""}]);
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
      const currentProj = _overallStorage[index];
      const form = event.target.parentElement;      
      const domProject = form.parentElement.parentElement;

      const formChildren = Array.from(form.children);
      const title = formChildren.filter(child =>  child.id === `itemTitle${domProject.dataset.id}${form.dataset.id}`)
      const name = title[0].firstChild.nodeValue;
   
      const _formCount = (function(){
      const containerChildren = Array.from(form.parentElement.children);
      const projectForms = containerChildren.filter(child => child.classList.contains('toDoNoteInput'));
      const _formsCounted = projectForms.length - 1;
      return _formsCounted 
      })()
      
      if (currentProj.projStorage.length - 1 == _formCount){ 
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
        const project = input.parentElement;
        const formReference = DOM.selectElem('.toDoNoteInput')
        const container = DOM.selectElem(`#container${project.dataset.id}`);
        
        const form = DOM.elementInit('form',{'class': 'toDoNoteInput',
                                                 'id': `toDoNoteForm${project.dataset.id}${formReference.length}`,
                                                  'data-id':`${formReference.length}` })
        const submit = DOM.elementInit('button',{'type':'submit',
                                                   'id': 'submitNote', 
                                                  'class':'submitNote none',
                                                   },'Submit Note')
        const cancel = DOM.elementInit('button', {'class':'cancel none',
                                                 'id':'cancelNote'}, 'Cancel');
        
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
                                                     'data-class':`child${formReference.length}` 
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

        submit.classList.toggle('none',false);
        cancel.classList.toggle('none',false);
        input.focus();
        
       }

       chosenType === 'Checklist' ? _generateChecklist() : _generateFreeForm();  

       return 

     }


     const disableBtns = function(trgt='n/a'){
        const allBtns = document.querySelectorAll('button');
        allBtns.forEach(btn =>  btn === trgt || btn.classList.contains('none') ? btn.disabled = false : btn.disabled = true);

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
        event.preventDefault(); 
        const provTitle = DOM.selectElem('#provTitle');
        const domProject = event.target.parentElement.parentElement;
        domProject.appendChild(provTitle);
        provTitle.classList.toggle('none',true);
        
        event.target.classList.toggle('none',true);
        return
        
    }
     
     const chooseNoteType = function(event){
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
        const formChildren = Array.from(form.children);
        formChildren.forEach(itm => itm.dataset.class === `child${form.dataset.id}` ? itm.classList.toggle('none') : false)       
            
        }
     }

     const noteTypeGenerator = function(event){ 

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
        
        })()
        
        _projectevents__WEBPACK_IMPORTED_MODULE_1__.projectEvents.publish('deleteNoteTypeForm', event);
        _projectevents__WEBPACK_IMPORTED_MODULE_1__.projectEvents.publish('createNote', getSelected);
        
        return getSelected
     }



    const deleteForms = function(event){

         
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
        const child = document.querySelector(`[data-class=child${form.dataset.id}]`)
        !(formChildren.includes(child)) ? form.remove() : false;

    })()

        return
    }
        

    const cancelNote = function(event){
        
        const cancel = event.target;
        const input = DOM.selectElem('#temporaryInput');

        cancel.classList.toggle('none',true);
        input.value = '';
        input.classList.toggle('none',true);

        return        
    }

    
    const generateNewAddCheck = function(event){
        
        event.preventDefault();
        const form = event.target.parentElement;
        const project = form.parentElement.parentElement;

        if(DOM.selectElem('#temporaryInput') && DOM.selectElem('#temporaryInput').label === 'freeForm'){
            DOM.selectElem('#temporaryInput').remove();
        }

        if (!DOM.selectElem('#temporaryInput')){
        const temporaryInput = DOM.elementInit('input',{'type':'text',
        'autocomplete':'off',
        'required':'required',
        'id':'temporaryInput',
        'class': 'temporaryInput none'});

        project.appendChild(temporaryInput);
        disableBtns(event.target);
    
        }

        if (!DOM.selectElem('#submitNote')){       
         const originalSubmit = DOM.elementInit('button',{'type':'submit',
        'id': 'submitNote', 
        'class':'submitNote none',
        },'Submit Note')

        form.appendChild(originalSubmit);

        }
        
        if (!DOM.selectElem('#cancelNote')){       
            const cancel = DOM.elementInit('button',{
           'id': 'cancelNote', 
           'class':'cancel none',
           },'Cancel')
   
           form.appendChild(cancel);
    
        }
            
        _projectevents__WEBPACK_IMPORTED_MODULE_1__.projectEvents.publish('newCheckItem', event);

        return

    }

    const addNewCheck = function(event){
        event.preventDefault();
        const input = DOM.selectElem('#temporaryInput');
        const submit = DOM.selectElem('#submitNote');
        const cancel = DOM.selectElem('#cancelNote');
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
                                                    'data-class':`child${form.dataset.id}`});
        const label = DOM.elementInit('label', {'for': `${input.value}`,
                                                 'class': 'edit',
                                                'data-class':`child${form.dataset.id}`},`${input.value}`);
        const br = DOM.elementInit('br',{'data-class':`child${form.dataset.id}`});

       
        label.appendChild(del);
        form.appendChild(checkbox);
        form.appendChild(label);
        form.appendChild(br);

        return
    }

    const submitItem = function(){
    
    const input = DOM.selectElem('#temporaryInput');
    const form = DOM.selectElem('#submitNote').parentElement;
    const remove = DOM.selectElem(`#remove${input.parentElement.dataset.id}${form.dataset.id}`);
    
    if (input.value === ''){return};

    if (form.classList.contains('checkbox')){
        _generateCheckItem();
        input.classList.toggle('none', true);        
        return
    }
    
    const text = DOM.elementInit('p', {'class':'text edit',
                                      'data-class':`child${form.dataset.id}`}, `${input.value}`);

    form.appendChild(text);
    remove.classList.toggle('none',false);

    return

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

       br.remove() 
       check.remove() 
       label.remove()
       
       const formChildren = Array.from(form.children);
       const child = document.querySelector(`[data-class=child${form.dataset.id}]`)
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
         cancelNote,
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
    const cancelNote = structs.cancelNote;
    const revertModifiedElement = structs.revertModifiedElement;
    const modifyElement = structs.modifyElement;
    const submitItem = structs.submitItem;
    const generateNewAddCheck = structs.generateNewAddCheck;
    const submitModifiedElement = structs.submitModifiedElement;
    const deleteItem = structs.deleteItem;
    const deleteCheck = structs.deleteCheck;
    const delegator = _projectevents__WEBPACK_IMPORTED_MODULE_4__.projectEvents.delegator;

    
    
    //Event Subscriptions
    _projectevents__WEBPACK_IMPORTED_MODULE_4__.projectEvents.subscribe('view', toggleSize);
    _projectevents__WEBPACK_IMPORTED_MODULE_4__.projectEvents.subscribe('create', createProject);
    _projectevents__WEBPACK_IMPORTED_MODULE_4__.projectEvents.subscribe('create', resetCreateForm);
    _projectevents__WEBPACK_IMPORTED_MODULE_4__.projectEvents.subscribe('create', newProj);
    _projectevents__WEBPACK_IMPORTED_MODULE_4__.projectEvents.subscribe('saved', localStore);
    _projectevents__WEBPACK_IMPORTED_MODULE_4__.projectEvents.subscribe('reveal', revealCreateForm);
    _projectevents__WEBPACK_IMPORTED_MODULE_4__.projectEvents.subscribe('chooseTitle', disableBtns);
    _projectevents__WEBPACK_IMPORTED_MODULE_4__.projectEvents.subscribe('chooseTitle', chooseToDoTitleForm);
    _projectevents__WEBPACK_IMPORTED_MODULE_4__.projectEvents.subscribe('inputOrList', submitToDoTitle);
    _projectevents__WEBPACK_IMPORTED_MODULE_4__.projectEvents.subscribe('inputOrList', chooseNoteType);
    _projectevents__WEBPACK_IMPORTED_MODULE_4__.projectEvents.subscribe('noteToDoType', deleteForms)
    _projectevents__WEBPACK_IMPORTED_MODULE_4__.projectEvents.subscribe('noteToDoType', noteTypeGenerator);
    _projectevents__WEBPACK_IMPORTED_MODULE_4__.projectEvents.subscribe('deleteNoteTypeForm', disableBtns);
    _projectevents__WEBPACK_IMPORTED_MODULE_4__.projectEvents.subscribe('deleteNoteTypeForm', deleteForms);
    _projectevents__WEBPACK_IMPORTED_MODULE_4__.projectEvents.subscribe('abortNoteTypeForm', deleteForms);
    _projectevents__WEBPACK_IMPORTED_MODULE_4__.projectEvents.subscribe('abortNoteTypeForm', enableBtns);
    _projectevents__WEBPACK_IMPORTED_MODULE_4__.projectEvents.subscribe('abortNoteTypeForm', deleteForms);
    _projectevents__WEBPACK_IMPORTED_MODULE_4__.projectEvents.subscribe('cancelNote', cancelNote);
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
        const title = DOM.elementInit('h1',{'id': 'title'}, 'This is your To-Do list');
        const revealForm = DOM.elementInit('button',{'class':'revealForm'},'New Project');
        
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
         
 
         form.onsubmit = delegator;
         mainContainer.appendChild(form);
         return form; 
})()
     

})()

    
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwRk87O0FBRVA7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ2pFMEM7O0FBRTFDLG9CQUFvQix1REFBTTs7QUFFMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3RDRDOzs7QUFHNUM7O0FBRU87OztBQUdQO0FBQ0Esb0JBQW9CLHlEQUFVO0FBQzlCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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c3MiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL2hlbHBlcnMvRE9NLmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvaGVscGVycy9iYXNlLmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvaGVscGVycy9ldmVudHMuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9wcm9qZWN0ZXZlbnRzLmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvcHJvamVjdHMuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9wcm9qZWN0c0RPTS5qcyIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiaHRtbCB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuXFxufVxcblxcbiosICo6YmVmb3JlLCAqOmFmdGVye1xcbiAgICBib3gtc2l6aW5nOiBpbmhlcml0O1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxufVxcblxcbmJvZHkge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcblxcbn1cXG5cXG4ucHJvamVjdCB7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5ub25lIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLnRvRG9Ob3RlSW5wdXQge1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG59XFxuXFxuLnRleHQge1xcbiAgICB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7XFxufVxcblxcbi5tb2RJbnB1dCB7XFxuICAgIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDtcXG59XFxuXFxuLnRyYW5zaXRGb3JtIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB6LWluZGV4OjA7XFxuICAgIGxlZnQ6IDUwdnc7XFxuICAgIHRvcDogMzV2aDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQ7XFxuICAgIHBhZGRpbmc6IDJyZW07XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxzQkFBc0I7O0FBRTFCOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLFNBQVM7SUFDVCxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLGlCQUFpQjtJQUNqQixZQUFZOztBQUVoQjs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixlQUFlO0FBQ25COztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsVUFBVTtJQUNWLFNBQVM7SUFDVCxpQkFBaUI7SUFDakIsYUFBYTtBQUNqQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJodG1sIHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG5cXG59XFxuXFxuKiwgKjpiZWZvcmUsICo6YWZ0ZXJ7XFxuICAgIGJveC1zaXppbmc6IGluaGVyaXQ7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG59XFxuXFxuYm9keSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgICB3aWR0aDogMTAwdnc7XFxuXFxufVxcblxcbi5wcm9qZWN0IHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLm5vbmUge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4udG9Eb05vdGVJbnB1dCB7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG4udGV4dCB7XFxuICAgIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDtcXG59XFxuXFxuLm1vZElucHV0IHtcXG4gICAgd2hpdGUtc3BhY2U6IHByZS13cmFwO1xcbn1cXG5cXG4udHJhbnNpdEZvcm0ge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHotaW5kZXg6MDtcXG4gICAgbGVmdDogNTB2dztcXG4gICAgdG9wOiAzNXZoO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZDtcXG4gICAgcGFkZGluZzogMnJlbTtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IHRoaXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNbX2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kyID0gMDsgX2kyIDwgbW9kdWxlcy5sZW5ndGg7IF9pMisrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pMl0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImV4cG9ydCBjb25zdCBET01HZW5lcmFsID0gZnVuY3Rpb24oKXtcbiAgICBcbiAgICBjb25zdCBlbGVtZW50SW5pdCA9IGZ1bmN0aW9uKGVsZW0sIGF0dHJzT2JqPXt9LHRleHRTdHJpbmc9Jycpe1xuICAgICAgICBcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoZWxlbSk7XG4gICAgICAgIFxuICAgICAgICBpZiAoT2JqZWN0LmtleXMoYXR0cnNPYmopLmxlbmd0aCA+IDApe1xuICAgICAgICAgICAgT2JqZWN0LmtleXMoYXR0cnNPYmopLmZvckVhY2goZnVuY3Rpb24oYXR0KXtcbiAgICAgICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKGF0dCwgYXR0cnNPYmpbYXR0XSlcbiAgICAgICAgfSlcbiAgICB9ICAgXG4gICAgICAgIGlmICh0ZXh0U3RyaW5nLmxlbmd0aCA+IDApe1xuICAgICAgICAgICAgZWxlbWVudC50ZXh0Q29udGVudCA9IHRleHRTdHJpbmc7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZWxlbWVudCAgICAgICBcblxuICAgIH07XG5cbiAgIGNvbnN0IHNlbGVjdEVsZW0gPSBmdW5jdGlvbihzZWxlY3RvclN0cmluZyl7XG5cbiAgICAgICBpZiAoc2VsZWN0b3JTdHJpbmdbMF0gPT09ICcjJyl7XG4gICAgICAgICAgIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yU3RyaW5nKVxuICAgICAgIH1cbiAgICAgICBlbHNlIHtcbiAgICAgICAgICAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3JTdHJpbmcpO1xuICAgICAgIH1cbiAgICAgICBcbiAgIH07XG5cbiAgIHJldHVybiB7XG4gICAgICAgZWxlbWVudEluaXQsIFxuICAgICAgIHNlbGVjdEVsZW0sXG4gICB9XG5cbn1cblxuXG5cbiIsImV4cG9ydCBjb25zdCBiYXNlQ3JlYXRlID0gZnVuY3Rpb24oc3RvcmFnZSl7XG4gICAgICBcbmNvbnN0IF9zdG9yYWdlID0gc3RvcmFnZSB8fCBuZXcgQXJyYXkoKTtcblxuKGZ1bmN0aW9uKCl7XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KF9zdG9yYWdlKSl7XG4gICAgICAgIHRocm93ICdFcnJvciEgQXJndW1lbnQgbXVzdCBiZSBhbiBhcnJheSc7XG4gICAgfVxuICAgIH0pKClcbiAgICBcbmNvbnN0IGFkZCA9IGZ1bmN0aW9uKGVsZW0pe1xuICAgIF9zdG9yYWdlLnB1c2goZWxlbSk7XG5cbn07XG5cbmNvbnN0IHJlbW92ZSA9IGZ1bmN0aW9uKGVsZW0sIGluZGV4PTApe1xuICAgIGlmIChpbmRleCA9PT0gMCl7XG4gICAgICAgIGZvciAobGV0IGkgPSBpbmRleDsgaSA8IF9zdG9yYWdlLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgICAgIGlmKF9zdG9yYWdlW2ldID09PSBlbGVtKXtcbiAgICAgICAgICAgICAgICBfc3RvcmFnZS5zcGxpY2UoaSwxKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgfVxuICAgICAgICAgfSAgICAgICAgIFxuICAgICAgIH1cbiAgICAgICBlbHNlIGlmIChpbmRleCA+IDAgJiYgaW5kZXggPCBfc3RvcmFnZS5sZW5ndGgpe1xuICAgICAgICAgICBfc3RvcmFnZS5zcGxpY2UoaW5kZXgsIDEpXG4gICAgICAgfSAgXG59O1xuXG5jb25zdCB1cGRhdGVCeUxvY2F0aW9uID0gZnVuY3Rpb24oaW5kZXgsIHJlcGxhY2Upe1xuICAgICAgICBpZiAoaW5kZXggPiAwICYmIGluZGV4IDwgX3N0b3JhZ2UubGVuZ3RoKXtcbiAgICAgICAgICAgIF9zdG9yYWdlLnNwbGljZShpbmRleCwxLHJlcGxhY2UpO1xuICAgICAgICB9XG5cbn07XG5cbmNvbnN0IHVwZGF0ZUJ5RWxlbWVudCA9IGZ1bmN0aW9uKGVsZW0sIHJlcGxhY2Upe1xuICAgICAgICBmb3IgKGxldCB4ID0gaW5kZXg7IHggPCBfc3RvcmFnZS5sZW5ndGg7IHgrKyl7XG4gICAgICAgICAgICBpZihfc3RvcmFnZVt4XSA9PT0gZWxlbSl7XG4gICAgICAgICAgICAgICAgX3N0b3JhZ2Uuc3BsaWNlKHgsMSwgcmVwbGFjZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9fVxufTtcblxuXG5jb25zdCBtb3ZlID0gZnVuY3Rpb24oaW5kZXgsIHRhcmdldCl7XG4gICAgaWYgKGluZGV4ID49IDAgJiYgaW5kZXggPF9zdG9yYWdlLmxlbmd0aCAmJiB0YXJnZXQgPj0gMCAmJiB0YXJnZXQgPF9zdG9yYWdlLmxlbmd0aCl7XG4gICAgICAgIGNvbnN0IG1vdmVkID0gX3N0b3JhZ2VbaW5kZXhdO1xuICAgICAgICBfc3RvcmFnZS5zcGxpY2UoaW5kZXgsMSk7XG4gICAgICAgIF9zdG9yYWdlLnNwbGljZSh0YXJnZXQsMCxtb3ZlZClcbiAgICBcbiAgICB9ICAgXG4gICAgZWxzZSBpZihpbmRleCA+PSAwICYmIGluZGV4IDxfc3RvcmFnZS5sZW5ndGggJiYgdGFyZ2V0ID49IF9zdG9yYWdlLmxlbmd0aCkge1xuICAgICAgICBjb25zdCByZXBsYWNlbWVudCA9IF9zdG9yYWdlW2luZGV4XTtcbiAgICAgICAgX3N0b3JhZ2Uuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgX3N0b3JhZ2UucHVzaChyZXBsYWNlbWVudCk7XG5cbiAgICB9ICAgIFxufTtcblxuY29uc3Qgc3dhcCA9IGZ1bmN0aW9uKGluZGV4QSwgaW5kZXhCKXtcbiAgICBpZiAoaW5kZXhBID49IDAgJiYgaW5kZXhBIDxfc3RvcmFnZS5sZW5ndGggJiYgaW5kZXhCID49IDAgJiYgaW5kZXhCIDxfc3RvcmFnZS5sZW5ndGgpe1xuICAgICAgICBcbiAgICAgICBbX3N0b3JhZ2VbaW5kZXhBXSwgX3N0b3JhZ2VbaW5kZXhCXV0gPSBbX3N0b3JhZ2VbaW5kZXhCXSwgX3N0b3JhZ2VbaW5kZXhBXV1cbiAgICB9XG5cbn07XG5cbmNvbnN0IGNvcHkgPSBmdW5jdGlvbiAoaW5kZXgpe1xuICAgIGlmIChpbmRleCA+PSAwICYmIGluZGV4IDwgX3N0b3JhZ2UubGVuZ3RoKXtcbiAgICAgICAgbGV0IGNsb25lID0gX3N0b3JhZ2VbaW5kZXhdO1xuICAgICAgICBfc3RvcmFnZS5wdXNoKGNsb25lKTtcbiAgICB9XG59XG4gICAgXG4gICAgcmV0dXJuIHtcbiAgICAgICAgYWRkLFxuICAgICAgICByZW1vdmUsXG4gICAgICAgIHVwZGF0ZUJ5TG9jYXRpb24sXG4gICAgICAgIHVwZGF0ZUJ5RWxlbWVudCxcbiAgICAgICAgbW92ZSxcbiAgICAgICAgc3dhcCxcbiAgICAgICAgY29weVxuICAgIH0gICBcbn1cblxuIiwiZXhwb3J0IGNvbnN0IGV2ZW50cyA9IGZ1bmN0aW9uKCl7XG5cbiAgICBjb25zdCBfbXlFdmVudHMgPSB7fTtcblxuICAgIGNvbnN0IF9pc0V2ZW50SGVyZSA9IGZ1bmN0aW9uKG5hbWUpe1xuICAgICAgICByZXR1cm4gX215RXZlbnRzLmhhc093blByb3BlcnR5KG5hbWUpO1xuICAgIH1cblxuICAgIGNvbnN0IF9hZGRIYW5kbGVyID0gZnVuY3Rpb24obmFtZSwgbmV3SGFuZGxlcil7ICAgICAgIFxuICAgICAgICBcbiAgICAgICAgaWYgKCFfaXNFdmVudEhlcmUobmFtZSkpe1xuICAgICAgICAgICAgICAgIF9teUV2ZW50c1tuYW1lXSA9IFtdO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIF9teUV2ZW50c1tuYW1lXS5wdXNoKG5ld0hhbmRsZXIpICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgfTtcblxuICAgIGNvbnN0IHJlbW92ZUhhbmRsZXIgPSBmdW5jdGlvbihuYW1lLCB0b1JlbW92ZSl7XG5cbiAgICAgICAgaWYgKCFfaXNFdmVudEhlcmUobmFtZSkpe1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgIGNvbnN0IGluZGV4ID0gX215RXZlbnRzW25hbWVdLmluZGV4T2YodG9SZW1vdmUpO1xuICAgICAgICBfbXlFdmVudHNbbmFtZV0uc3BsaWNlKGluZGV4LCAxKVxuXG4gICAgfTtcblxuICAgIGNvbnN0IF9maXJlTWUgPSBmdW5jdGlvbihuYW1lLCAuLi5vcHRpb25hbEFyZyl7XG4gICAgICAgICAgICBcbiAgICAgICAgaWYgKCFfaXNFdmVudEhlcmUobmFtZSkpe1xuICAgICAgICAgICAgX215RXZlbnRzW25hbWVdID0gW107XG4gICAgICAgIH1cblxuICAgICAgICBfbXlFdmVudHNbbmFtZV0uZm9yRWFjaChmdW5jdGlvbihoKXtcbiAgICAgICAgICAgICAgIHJldHVybiBoKC4uLm9wdGlvbmFsQXJnKVxuICAgICAgICB9KVxuICAgIH07XG5cbiAgICBjb25zdCBwdWJsaXNoID0gZnVuY3Rpb24obmFtZSwgLi4ub3B0aW9uYWxBcmcpeyBcbiAgICAgICBcbiAgICAgICAgaWYgKCFfaXNFdmVudEhlcmUobmFtZSkpe1xuICAgICAgICAgICAgX215RXZlbnRzW25hbWVdID0gW107XG4gICAgICAgIH07XG5cbiAgICAgICAgX2ZpcmVNZShuYW1lLCAuLi5vcHRpb25hbEFyZylcbiAgICAgICAgXG4gICAgfTtcblxuICAgIGNvbnN0IHN1YnNjcmliZSA9IGZ1bmN0aW9uKG5hbWUsIG5ld0hhbmRsZXIpe1xuXG4gICAgICAgIGlmICghX2lzRXZlbnRIZXJlKG5hbWUpKXtcbiAgICAgICAgICAgIF9teUV2ZW50c1tuYW1lXSA9IFtdO1xuICAgICAgICB9O1xuICAgXG4gICAgICAgIF9hZGRIYW5kbGVyKG5hbWUsIG5ld0hhbmRsZXIpXG4gICAgICAgIFxuICAgIH07IFxuXG4gICAgICAgICAgICBcbiAgICByZXR1cm4ge1xuICAgICAgICBwdWJsaXNoLFxuICAgICAgICBzdWJzY3JpYmUsXG4gICAgICAgIHJlbW92ZUhhbmRsZXJcbiAgICB9ICAgIFxufVxuXG4iLCJpbXBvcnQgeyBldmVudHMgfSBmcm9tIFwiLi9oZWxwZXJzL2V2ZW50c1wiO1xuXG5sZXQgcHJvamVjdEV2ZW50cyA9IGV2ZW50cygpO1xuXG5wcm9qZWN0RXZlbnRzLmRlbGVnYXRvciA9IGZ1bmN0aW9uKGV2ZW50KXtcbiAgICAgIHN3aXRjaCh0cnVlKXtcbiAgICAgICAgIGNhc2UgZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygncmV2ZWFsRm9ybScpIDogcHJvamVjdEV2ZW50cy5wdWJsaXNoKCdyZXZlYWwnKTtcbiAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICBjYXNlIGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ3Byb2plY3RGb3JtJyk6IHByb2plY3RFdmVudHMucHVibGlzaCgnY3JlYXRlJywgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RpdGxlSW5wJykudmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0RXZlbnRzLnB1Ymxpc2goJ3NhdmVkJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgY2FzZSBldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdwcm9qZWN0Jyk6IHByb2plY3RFdmVudHMucHVibGlzaCgndmlldycsIGV2ZW50KTtcbiAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICBjYXNlIGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2l0ZW1UaXRsZScpOiBwcm9qZWN0RXZlbnRzLnB1Ymxpc2goJ3ZpZXcnLCBldmVudCk7XG4gICAgICAgICAgIGJyZWFrOyAgICAgICAgICAgXG4gICAgICAgICBjYXNlIGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2FkZHRvRG9MaXN0Jyk6IHByb2plY3RFdmVudHMucHVibGlzaCgnY2hvb3NlVGl0bGUnLCBldmVudClcbiAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICBjYXNlIGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2Nob29zZVRpdGxlRm9ybScpOiBwcm9qZWN0RXZlbnRzLnB1Ymxpc2goJ2lucHV0T3JMaXN0JywgZXZlbnQpXG4gICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgY2FzZSBldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdjaG9vc2VOb3RlVHlwZScpOiBwcm9qZWN0RXZlbnRzLnB1Ymxpc2goJ25vdGVUb0RvVHlwZScsIGV2ZW50KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICBjYXNlIGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2NhbmNlbFRpdGxlJykgOiBwcm9qZWN0RXZlbnRzLnB1Ymxpc2goJ2Fib3J0Tm90ZVR5cGVGb3JtJywgZXZlbnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgYnJlYWs7IFxuICAgICAgICAgY2FzZSBldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdjYW5jZWxDaG9pY2UnKSA6IHByb2plY3RFdmVudHMucHVibGlzaCgnYWJvcnROb3RlVHlwZUZvcm0nLGV2ZW50KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICBicmVhaztcbiAgICAgICAgIGNhc2UgZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnYWRkQ2hlY2snKSA6IHByb2plY3RFdmVudHMucHVibGlzaCgnbmV3Q2hlY2tJdGVtJywgZXZlbnQpO1xuICAgICAgICAgICBicmVhaztcbiAgICAgICAgIGNhc2UgZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnYWRkQ2hlY2tNb2QnKSA6IHByb2plY3RFdmVudHMucHVibGlzaCgndXBkYXRlQ2hlY2tJdGVtJywgZXZlbnQpO1xuICAgICAgICAgICBicmVhaztcbiAgICAgICAgIGNhc2UgZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnY2FuY2VsJykgOiBwcm9qZWN0RXZlbnRzLnB1Ymxpc2goJ2NhbmNlbE5vdGUnLGV2ZW50KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgY2FzZSBldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdlZGl0JykgOiBwcm9qZWN0RXZlbnRzLnB1Ymxpc2goJ21vZGlmeUVsZW0nLGV2ZW50KTtcbiAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICBjYXNlIGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ3N1Ym1pdE5vdGUnKSA6IHByb2plY3RFdmVudHMucHVibGlzaCgnc3VibWl0Tm90ZScsIGV2ZW50KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdEV2ZW50cy5wdWJsaXNoKCdzYXZlZCcpO1xuICAgICAgICAgICBicmVhaztcbiAgICAgICAgIGNhc2UgZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygncmV2ZXJ0TW9kJykgOiBwcm9qZWN0RXZlbnRzLnB1Ymxpc2goJ3JldmVydCcsZXZlbnQpO1xuICAgICAgICAgICBicmVhaztcbiAgICAgICAgIGNhc2UgZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnc3VibWl0TW9kJykgOiBwcm9qZWN0RXZlbnRzLnB1Ymxpc2goJ3N1Ym1pdE1vZCcsZXZlbnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3RFdmVudHMucHVibGlzaCgnc2F2ZWQnKTtcbiAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICBjYXNlIGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ3JlbW92ZScpIDogcHJvamVjdEV2ZW50cy5wdWJsaXNoKCdkZWxldGUnLCBldmVudCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdEV2ZW50cy5wdWJsaXNoKCdzYXZlZCcpO1xuICAgICAgICAgICBicmVhaztcbiAgICAgICAgIGNhc2UgZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnZGVsZXRlQ2hlY2snKSA6IHByb2plY3RFdmVudHMucHVibGlzaCgnZGVsZXRlQ2hlY2snLCBldmVudCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0RXZlbnRzLnB1Ymxpc2goJ3NhdmVkJyk7XG4gICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgY2FzZSBldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdjaGVjaycpIDogcHJvamVjdEV2ZW50cy5wdWJsaXNoKCdyZWNvcmRDaGVjaycsIGV2ZW50KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3RFdmVudHMucHVibGlzaCgnc2F2ZWQnKTtcbiAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgIC8vYWRkIG1vcmUuIFxuXG59fVxuIFxuICAgICAgIFxuXG5cblxuZXhwb3J0IHsgcHJvamVjdEV2ZW50cyB9IiwiaW1wb3J0IHsgYmFzZUNyZWF0ZSB9IGZyb20gXCIuL2hlbHBlcnMvYmFzZVwiO1xuXG5cbi8vVGVtcGxhdGUgZm9yIGEgdG9kby1ub3RlIFxuXG5leHBvcnQgY29uc3Qgc2luZ2xldG9Eb05vdGUgPSBmdW5jdGlvbihuYW1lKXtcblxuXG4gICBjb25zdCBub3RlU3RvcmFnZSA9IG5ldyBBcnJheSgpO1xuICAgY29uc3QgdG9Eb05vdGUgPSBiYXNlQ3JlYXRlKG5vdGVTdG9yYWdlKTtcbiAgIFxuICAgY29uc3QgYWRkTm90ZSA9IGZ1bmN0aW9uKG5vdGUpe1xuICAgICAgdG9Eb05vdGUuYWRkKG5vdGUpO1xuICAgfVxuXG4gICBjb25zdCByZW1vdmVOb3RlID0gZnVuY3Rpb24oaW5kZXgpe1xuICAgICAgY29uc3Qgbm90ZSA9IF9ub3Rlc3RvcmFnZVtpbmRleF07XG4gICAgICB0b0RvTm90ZS5yZW1vdmUobm90ZSwgaW5kZXgpOyAgXG4gICB9XG5cbiAgIGNvbnN0IG1vdmVOb3RlID0gZnVuY3Rpb24oaW5kZXgsIHRhcmdldCl7XG4gICAgICB0b0RvTm90ZS5tb3ZlKGluZGV4LCB0YXJnZXQpO1xuICAgICAgICBcbiAgIH1cbiAgIFxuICAgcmV0dXJuIHt0b0RvTm90ZSxcbiAgICAgICAgICAgbmFtZSxcbiAgICAgICAgICAgbm90ZVN0b3JhZ2UsXG4gICAgICAgICAgIGFkZE5vdGVcbiAgICAgICAgICAgXG59XG59XG4vL1xuXG4vL1RlbXBsYXRlIGZvciBhIHNpbmdsZSBwcm9qZWN0XG5cbmV4cG9ydCBjb25zdCBzaW5nbGVQcm9qID0gZnVuY3Rpb24obmFtZSl7XG5cbiAgIGNvbnN0IHByb2pTdG9yYWdlID0gbmV3IEFycmF5KCk7XG4gICBjb25zdCBwcm9qZWN0ID0gYmFzZUNyZWF0ZShwcm9qU3RvcmFnZSk7XG4gICBcbiAgIFxuICAgY29uc3QgYWRkVG9Qcm9qZWN0ID0gZnVuY3Rpb24obmFtZSl7XG4gICAgICBjb25zdCB0b2RvID0gc2luZ2xldG9Eb05vdGUobmFtZSlcbiAgICAgIHByb2plY3QuYWRkKHRvZG8pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICB9XG5cbiAgIGNvbnN0IHJlbW92ZUZyb21Qcm9qZWN0ID0gZnVuY3Rpb24oaW5kZXgpe1xuICAgICAgY29uc3QgdG9kbyA9IHByb2pTdG9yYWdlW2luZGV4XTtcbiAgICAgIHByb2plY3QucmVtb3ZlKHRvZG8sIGluZGV4KTsgIFxuICAgfSBcblxuICAgY29uc3QgbW92ZXRvRG8gPSBmdW5jdGlvbihpbmRleCwgdGFyZ2V0KXtcbiAgICAgIHByb2plY3QubW92ZShpbmRleCwgdGFyZ2V0KTtcbiAgICAgICAgIFxuICAgfVxuXG4gICByZXR1cm4ge3Byb2plY3QsXG4gICAgICAgICAgIG5hbWUsXG4gICAgICAgICAgIGFkZFRvUHJvamVjdCxcbiAgICAgICAgICAgcHJvalN0b3JhZ2UgXG4gICB9XG5cbn0gXG5cbi8vXG5cbi8vT3ZlcmFsbCBJbnRlcmZhY2VcblxuZXhwb3J0IGNvbnN0IG1haW5JbnRlcmZhY2UgPSBmdW5jdGlvbigpe1xuICAgXG4gICBjb25zdCBfb3ZlcmFsbFN0b3JhZ2UgPSBuZXcgQXJyYXkoKTtcbiAgIGNvbnN0IGFsbFRvRG8gPSBiYXNlQ3JlYXRlKF9vdmVyYWxsU3RvcmFnZSk7XG5cbiAgIGNvbnN0IG5ld1Byb2ogPSBmdW5jdGlvbihuYW1lKXtcbiAgICAgIGNvbnN0IHByb2ogPSBzaW5nbGVQcm9qKG5hbWUpO1xuICAgICAgYWxsVG9Eby5hZGQocHJvaik7XG5cbiAgIH1cbiAgICBcbiAgIGNvbnN0IG1vdmVQcm9qID0gZnVuY3Rpb24oaW5kZXgsIHRhcmdldCl7XG4gICAgICBhbGxUb0RvLm1vdmUoaW5kZXgsIHRhcmdldCk7XG5cbiAgIH1cbiAgIFxuICAgY29uc3QgdHJhbnNmZXJUb0xvY2FsU3RvcmFnZSA9IGZ1bmN0aW9uKCl7XG4gICAgICAgICByZXR1cm4gbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2FjY2VzcycsIEpTT04uc3RyaW5naWZ5KF9vdmVyYWxsU3RvcmFnZSkpXG4gICB9XG5cbiAgIGNvbnN0IF9maW5kUHJvaiA9IGZ1bmN0aW9uKGV2ZW50KXtcbiAgICAgIGNvbnN0IHByb2ogPSBldmVudC50YXJnZXQuY2xvc2VzdCgnLnByb2plY3QnKVxuICAgICAgcmV0dXJuIHByb2ouZGF0YXNldC5pZFxuICAgfVxuXG4gICBjb25zdCBfZmluZFRvRG8gPSBmdW5jdGlvbihldmVudCl7XG4gICAgICBjb25zdCB0b0RvID0gZXZlbnQudGFyZ2V0LmNsb3Nlc3QoJy50b0RvTm90ZUlucHV0JylcbiAgICAgIHJldHVybiB0b0RvLmRhdGFzZXQuaWRcbiAgIH1cblxuXG4gICBjb25zdCBhcHBlbmRUb1Byb2ogPSBmdW5jdGlvbihldmVudCl7XG5cbiAgICAgIGNvbnN0IGluZGV4ID0gX2ZpbmRQcm9qKGV2ZW50KTtcbiAgICAgIGNvbnN0IGN1cnJlbnRQcm9qID0gX292ZXJhbGxTdG9yYWdlW2luZGV4XTtcbiAgICAgIGNvbnN0IGZvcm0gPSBldmVudC50YXJnZXQucGFyZW50RWxlbWVudDsgICAgICBcbiAgICAgIGNvbnN0IGRvbVByb2plY3QgPSBmb3JtLnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudDtcblxuICAgICAgY29uc3QgZm9ybUNoaWxkcmVuID0gQXJyYXkuZnJvbShmb3JtLmNoaWxkcmVuKTtcbiAgICAgIGNvbnN0IHRpdGxlID0gZm9ybUNoaWxkcmVuLmZpbHRlcihjaGlsZCA9PiAgY2hpbGQuaWQgPT09IGBpdGVtVGl0bGUke2RvbVByb2plY3QuZGF0YXNldC5pZH0ke2Zvcm0uZGF0YXNldC5pZH1gKVxuICAgICAgY29uc3QgbmFtZSA9IHRpdGxlWzBdLmZpcnN0Q2hpbGQubm9kZVZhbHVlO1xuICAgXG4gICAgICBjb25zdCBfZm9ybUNvdW50ID0gKGZ1bmN0aW9uKCl7XG4gICAgICBjb25zdCBjb250YWluZXJDaGlsZHJlbiA9IEFycmF5LmZyb20oZm9ybS5wYXJlbnRFbGVtZW50LmNoaWxkcmVuKTtcbiAgICAgIGNvbnN0IHByb2plY3RGb3JtcyA9IGNvbnRhaW5lckNoaWxkcmVuLmZpbHRlcihjaGlsZCA9PiBjaGlsZC5jbGFzc0xpc3QuY29udGFpbnMoJ3RvRG9Ob3RlSW5wdXQnKSk7XG4gICAgICBjb25zdCBfZm9ybXNDb3VudGVkID0gcHJvamVjdEZvcm1zLmxlbmd0aCAtIDE7XG4gICAgICByZXR1cm4gX2Zvcm1zQ291bnRlZCBcbiAgICAgIH0pKClcbiAgICAgIFxuICAgICAgaWYgKGN1cnJlbnRQcm9qLnByb2pTdG9yYWdlLmxlbmd0aCAtIDEgPT0gX2Zvcm1Db3VudCl7IFxuICAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgICBcbiAgICAgIGN1cnJlbnRQcm9qLmFkZFRvUHJvamVjdChuYW1lKVxuICAgICAgXG4gICAgICByZXR1cm5cblxuICAgfVxuXG4gICBjb25zdCBhcHBlbmROb3RlVG9JdGVtID0gZnVuY3Rpb24oZXZlbnQpe1xuXG4gICAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0ZW1wb3JhcnlJbnB1dCcpO1xuICAgICAgaWYgKGlucHV0LnZhbHVlID09PSAnJyl7cmV0dXJufTtcblxuICAgICAgY29uc3QgcHJvakluZGV4ID0gX2ZpbmRQcm9qKGV2ZW50KTtcbiAgICAgIGNvbnN0IHRvRG9JbmRleCA9IF9maW5kVG9EbyhldmVudCk7XG4gICAgICBjb25zdCBjdXJyZW50VG9EbyA9IF9vdmVyYWxsU3RvcmFnZVtwcm9qSW5kZXhdLnByb2pTdG9yYWdlW3RvRG9JbmRleF07XG4gICAgICBjb25zdCBmb3JtID0gZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQ7XG4gICAgICBjb25zdCBmb3JtQ2hpbGRyZW4gPSBBcnJheS5mcm9tKGZvcm0uY2hpbGRyZW4pO1xuICAgICAgXG5cbiAgICAgIGNvbnN0IG5vdGUgPSBmdW5jdGlvbigpeyBcbiAgICAgICAgaWYoIGZvcm0uY2xhc3NMaXN0LmNvbnRhaW5zKCdjaGVja2JveCcpKXtcblxuICAgICAgICBjb25zdCBsYWJlbHMgPSBmb3JtQ2hpbGRyZW4uZmlsdGVyKGNoaWxkID0+IGNoaWxkLmNsYXNzTGlzdC5jb250YWlucygnZWRpdCcpKVxuICAgICAgICBjb25zdCBjdXJyZW50TGFiZWwgPSBsYWJlbHNbbGFiZWxzLmxlbmd0aCAtIDFdO1xuXG4gICAgICAgICByZXR1cm4gIHsnY2hlY2snOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAnbGFiZWwnOiBjdXJyZW50TGFiZWwuZmlyc3RDaGlsZC5ub2RlVmFsdWV9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG5cbiAgICAgICAgY29uc3QgdGV4dHMgPSBmb3JtQ2hpbGRyZW4uZmlsdGVyKGNoaWxkID0+IGNoaWxkLmNsYXNzTGlzdC5jb250YWlucygndGV4dCcpKSBcbiAgICAgICAgY29uc3QgY3VycmVudFRleHQgPSB0ZXh0c1swXTtcbiAgICAgICAgXG4gICAgICAgIHJldHVybiBjdXJyZW50VGV4dC5maXJzdENoaWxkLm5vZGVWYWx1ZVxuICAgICAgIH19XG4gICAgICBjdXJyZW50VG9Eby5hZGROb3RlKG5vdGUoKSk7XG4gICAgICByZXR1cm4gICBcbiAgICAgIH1cblxuICAgY29uc3QgcmVtb3ZlSXRlbSA9IGZ1bmN0aW9uKGV2ZW50KXtcbiAgICAgIGNvbnN0IGluZGV4ID0gX2ZpbmRQcm9qKGV2ZW50KTtcbiAgICAgIGNvbnN0IHByb2ogPSBfb3ZlcmFsbFN0b3JhZ2VbaW5kZXhdO1xuICAgICAgaWYgKGV2ZW50LnRhcmdldC5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygncHJvamVjdCcpKXtcbiAgICAgICAgIGFsbFRvRG8ucmVtb3ZlKHByb2opXG4gICAgICAgICByZXR1cm5cbiAgICAgICAgIFxuICAgICAgfVxuICAgICAgZWxzZSBpZiAoZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCd0b0RvTm90ZUlucHV0Jykpe1xuICAgICAgICAgY29uc3QgZm9ybUluZGV4ID0gX2ZpbmRUb0RvKGV2ZW50KVxuICAgICAgICAgcHJvai5wcm9qU3RvcmFnZS5zcGxpY2UoZm9ybUluZGV4LCAxKTtcbiAgICAgICAgIHJldHVybiBcblxuICAgICAgfVxuXG4gICAgICByZXR1cm5cblxuICAgfVxuXG5cbiAgIGNvbnN0IHJlY29yZENoZWNrID0gZnVuY3Rpb24oZXZlbnQpe1xuICAgICAgY29uc3QgY2hlY2sgPSBldmVudC50YXJnZXQ7XG4gICAgICBjb25zdCBmb3JtID0gZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQ7XG4gICAgICBjb25zdCBmb3JtQ2hpbGRyZW4gPSBBcnJheS5mcm9tKGZvcm0uY2hpbGRyZW4pO1xuICAgICAgY29uc3QgZm9ybUNoZWNrcyA9IGZvcm1DaGlsZHJlbi5maWx0ZXIoY2hpbGQgPT4gY2hpbGQuY2xhc3NMaXN0LmNvbnRhaW5zKCdjaGVjaycpKTtcbiAgICAgIFxuICAgICAgY29uc3QgcHJvakluZGV4ID0gX2ZpbmRQcm9qKGV2ZW50KTtcbiAgICAgIGNvbnN0IHRvRG9JbmRleCA9IF9maW5kVG9EbyhldmVudCk7XG4gICAgICBjb25zdCBjaGVja2JveEluZGV4ID0gZm9ybUNoZWNrcy5pbmRleE9mKGNoZWNrKTtcbiAgICAgIFxuXG4gICAgICBjb25zdCB0YXJnZXQgPSBfb3ZlcmFsbFN0b3JhZ2VbcHJvakluZGV4XS5wcm9qU3RvcmFnZVt0b0RvSW5kZXhdLm5vdGVTdG9yYWdlW2NoZWNrYm94SW5kZXhdXG4gICAgICB0YXJnZXQuY2hlY2sgPT09IGZhbHNlID8gdGFyZ2V0LmNoZWNrID0gdHJ1ZSA6IHRhcmdldC5jaGVjayA9IGZhbHNlO1xuICAgICAgcmV0dXJuXG4gICB9XG5cbiAgIGNvbnN0IGRlbGV0ZUNoZWNrRnJvbVN0b3JhZ2UgPSBmdW5jdGlvbihldmVudCl7XG4gICAgICBjb25zdCBwcm9qSW5kZXggPSBfZmluZFByb2ooZXZlbnQpO1xuICAgICAgY29uc3QgcHJvaiA9IF9vdmVyYWxsU3RvcmFnZVtwcm9qSW5kZXhdO1xuICAgICAgY29uc3QgZm9ybUluZGV4ID0gX2ZpbmRUb0RvKGV2ZW50KVxuXG4gICAgICBjb25zdCBmb3JtID0gZXZlbnQudGFyZ2V0LmNsb3Nlc3QoJy50b0RvTm90ZUlucHV0Jyk7XG4gICAgICBjb25zdCBmb3JtQ2hpbGRyZW4gPSBBcnJheS5mcm9tKGZvcm0uY2hpbGRyZW4pO1xuICAgICAgY29uc3QgZm9ybUxhYmVscyA9IGZvcm1DaGlsZHJlbi5maWx0ZXIoY2hpbGQgPT4gY2hpbGQuY2xhc3NMaXN0LmNvbnRhaW5zKCdlZGl0JykpO1xuICAgICAgY29uc3QgaXRlbUluZGV4ID0gZm9ybUxhYmVscy5pbmRleE9mKGV2ZW50LnRhcmdldC5wYXJlbnRFbGVtZW50KTtcblxuICAgICAgcHJvai5wcm9qU3RvcmFnZVtmb3JtSW5kZXhdLm5vdGVTdG9yYWdlLnNwbGljZShpdGVtSW5kZXgsIDEpO1xuICAgICAgcmV0dXJuXG4gICB9XG5cbiAgIGNvbnN0IG1vZGlmeUluU3RvcmFnZSA9IGZ1bmN0aW9uKGV2ZW50KXtcbiAgICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21vZElucHV0Jyk7XG4gICAgICBjb25zdCBwcm9qSW5kZXggPSBfZmluZFByb2ooZXZlbnQpO1xuICAgICAgY29uc3QgcHJvaiA9IF9vdmVyYWxsU3RvcmFnZVtwcm9qSW5kZXhdO1xuICAgICAgY29uc3QgdG9Eb0luZGV4ID0gZXZlbnQudGFyZ2V0LmNsb3Nlc3QoJy50b0RvTm90ZUlucHV0JykgPyBfZmluZFRvRG8oZXZlbnQpIDogZmFsc2U7XG4gICAgICBjb25zdCB0b0RvTm90ZSA9IHRvRG9JbmRleCA/IHByb2oucHJvalN0b3JhZ2VbdG9Eb0luZGV4XTogZmFsc2U7XG4gICAgICBjb25zdCBmb3JtID0gZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQ7XG4gICAgICBjb25zdCBmb3JtQ2hpbGRyZW4gPSBBcnJheS5mcm9tKGZvcm0uY2hpbGRyZW4pO1xuICAgICAgY29uc3QgYnV0dG9uQ2hlY2tlciA9IGZvcm1DaGlsZHJlbi5maWx0ZXIoY2hpbGQgPT4gY2hpbGQubm9kZU5hbWUgPT0gJ0JVVFRPTicgJiYgY2hpbGQuY2xhc3NMaXN0LmNvbnRhaW5zKCdkaXNhYmxlZEVkaXQnKSlcblxuXG4gICAgICBpZiAoYnV0dG9uQ2hlY2tlci5sZW5ndGggPiAwKXtcbiAgICAgICAgIGlmIChldmVudC50YXJnZXQucGFyZW50RWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoJ3Byb2plY3QnKSl7XG4gICAgICAgICAgICBwcm9qLm5hbWUgPSBpbnB1dC52YWx1ZTtcbiAgICAgICAgICAgIHJldHVybiBcbiAgICAgICAgICAgICBcbiAgICAgICAgIH1cbiAgICAgICAgIGVsc2UgaWYgKGV2ZW50LnRhcmdldC5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygnaXRlbVRpdGxlJykpe1xuICAgICAgICAgICAgdG9Eb05vdGUubmFtZSA9IGlucHV0LnZhbHVlO1xuICAgICAgICAgICAgcmV0dXJuXG5cbiAgICAgICAgIH19XG4gICAgICAgICBlbHNlIHtcblxuLy9FeHBsYWluZXI6IHRhcmdldEluZGV4IHVzZXMgdGhlIHN1Ym1pdE1vZCBidXR0b24gYXMgdGhlIGluZGV4IG9mIHRoZSBlbGVtZW50LFxuLy9iZWNhdXNlIHRoZSBtb2RpZnlFbGVtIGV2ZW50LCB3aGljaCBmaXJlZCBwcmlvciB0byB0aGlzIG9uZSwgcmVwbGFjZWQgdGhlIG9yaWdpbmFsXG4vL2VsZW1lbnQgKHRoZSBvbmUgd2UncmUgdGFyZ2V0aW5nKSBpbiB0aGUgRE9NIHdpdGggdGhlICdtb2QnIHN0dWZmIGluY2x1ZGluZyBldmVudC50YXJnZXQgKGkuZSBzdWJtaXRNb2QpLlxuXG4gICAgICAgICAgICBjb25zdCB0YXJnZXRzID0gIGZvcm0uY2xhc3NMaXN0LmNvbnRhaW5zKCdmcmVlRm9ybScpID8gZmFsc2UgOiBmb3JtQ2hpbGRyZW4uZmlsdGVyKGNoaWxkID0+IGNoaWxkLmNsYXNzTGlzdC5jb250YWlucygnZGlzYWJsZWRFZGl0JykgfHwgY2hpbGQgPT09IGV2ZW50LnRhcmdldClcbiAgICAgICAgICAgIGNvbnN0IHRhcmdldEluZGV4ID0gZm9ybS5jbGFzc0xpc3QuY29udGFpbnMoJ2ZyZWVGb3JtJykgPyBmYWxzZSA6IHRhcmdldHMuaW5kZXhPZihldmVudC50YXJnZXQpICBcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgZm9ybS5jbGFzc0xpc3QuY29udGFpbnMoJ2ZyZWVGb3JtJykgPyB0b0RvTm90ZS5ub3RlU3RvcmFnZVswXSA9IGlucHV0LnZhbHVlIDogdG9Eb05vdGUubm90ZVN0b3JhZ2VbdGFyZ2V0SW5kZXhdLmxhYmVsID0gaW5wdXQudmFsdWU7XG4gICAgICAgICAgICByZXR1cm4gXG4gICAgICAgICB9ICBcbiAgICAgIFxuXG4gICAgICBcbiAgIH1cbiAgXG4gICBcbiAgIHJldHVybiB7XG4gICAgICBuZXdQcm9qLFxuICAgICAgdHJhbnNmZXJUb0xvY2FsU3RvcmFnZSxcbiAgICAgIGFwcGVuZFRvUHJvaixcbiAgICAgIHJlbW92ZUl0ZW0sXG4gICAgICBhcHBlbmROb3RlVG9JdGVtLFxuICAgICAgcmVjb3JkQ2hlY2ssXG4gICAgICBkZWxldGVDaGVja0Zyb21TdG9yYWdlLFxuICAgICAgbW9kaWZ5SW5TdG9yYWdlXG4gICAgICAvL2p1c3QgdGhpcyBmb3Igbm93LlxuICAgfVxuICBcbiAgIFxufVxuXG4iLCJpbXBvcnQgeyBET01HZW5lcmFsIH0gZnJvbSBcIi4vaGVscGVycy9ET01cIjtcbmltcG9ydCB7IHByb2plY3RFdmVudHMgfSBmcm9tIFwiLi9wcm9qZWN0ZXZlbnRzXCI7XG5cblxuZXhwb3J0IGNvbnN0IHRlbXBsYXRlRE9NU3RydWN0cyA9IGZ1bmN0aW9uICgpe1xuXG4gICAgY29uc3QgRE9NID0gRE9NR2VuZXJhbCgpXG4gICAgY29uc3QgZGVsZWdhdG9yID0gcHJvamVjdEV2ZW50cy5kZWxlZ2F0b3JcblxuICAgIGNvbnN0IGNyZWF0ZVByb2plY3QgPSBmdW5jdGlvbihuYW1lKXtcbiAgICAgICAgIGlmIChuYW1lID09PSAnJyl7cmV0dXJufSBcbiAgICAgICAgIGNvbnN0IHJlZmVyZW5jZSA9IERPTS5zZWxlY3RFbGVtKCcucHJvamVjdCcpOyBcbiAgICAgICAgIGNvbnN0IHByb2ogPSBET00uZWxlbWVudEluaXQoJ2RpdicseydpZCc6IGAke25hbWV9JHtyZWZlcmVuY2UubGVuZ3RofWAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnZGF0YS1pZCc6YCR7cmVmZXJlbmNlLmxlbmd0aH1gLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdjbGFzcyc6ICdwcm9qZWN0J30sbmFtZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICBjb25zdCByZW1vdmUgPSBET00uZWxlbWVudEluaXQoJ2J1dHRvbicsIHsnY2xhc3MnOidyZW1vdmUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdpZCc6YHJlbW92ZSR7cHJvai5kYXRhc2V0LmlkfWB9LCAnWCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgIGNvbnN0IGFkZFRvRG9MaXN0QnRuID0gRE9NLmVsZW1lbnRJbml0KCdidXR0b24nLCB7J2NsYXNzJzogJ2FkZHRvRG9MaXN0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2lkJzogYGFkZCR7RE9NLnNlbGVjdEVsZW0oJy5wcm9qZWN0JykubGVuZ3RofWB9LCAnQWRkIFRvLURvIExpc3QnKTtcbiAgICAgICAgY29uc3QgbW9kaWZ5ID0gRE9NLmVsZW1lbnRJbml0KCdidXR0b24nLCB7J2NsYXNzJzonZWRpdCd9LCdFZGl0Jyk7XG4gICAgICAgIHByb2ouYXBwZW5kQ2hpbGQocmVtb3ZlKTtcbiAgICAgICAgcHJvai5hcHBlbmRDaGlsZChtb2RpZnkpO1xuICAgICAgICBwcm9qLmFwcGVuZENoaWxkKERPTS5lbGVtZW50SW5pdCgnZGl2Jyx7ICdjbGFzcyc6J25vbmUgdG9Eb0NvbnRhaW5lcicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnaWQnOmBjb250YWluZXIke3JlZmVyZW5jZS5sZW5ndGh9YH0pKTtcbiAgICAgICAgcHJvai5hcHBlbmRDaGlsZChhZGRUb0RvTGlzdEJ0bik7XG5cbiAgICAgICAgXG4gICAgICAgIHByb2oub25jbGljayA9IGRlbGVnYXRvcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgY29uc3QgY29udGFpbmVyID0gRE9NLnNlbGVjdEVsZW0oJyNjb250YWluZXInKTtcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHByb2opO1xuICAgICAgICBcbiAgICAgfVxuICAgICBcblxuICAgICBjb25zdCBjcmVhdGVUb0RvTm90ZSA9IGZ1bmN0aW9uKGNob3NlblR5cGUpe1xuICAgICAgICBjb25zdCBpbnB1dCA9IERPTS5zZWxlY3RFbGVtKCcjdGVtcG9yYXJ5SW5wdXQnKSBcbiAgICAgICAgY29uc3QgcHJvamVjdCA9IGlucHV0LnBhcmVudEVsZW1lbnQ7XG4gICAgICAgIGNvbnN0IGZvcm1SZWZlcmVuY2UgPSBET00uc2VsZWN0RWxlbSgnLnRvRG9Ob3RlSW5wdXQnKVxuICAgICAgICBjb25zdCBjb250YWluZXIgPSBET00uc2VsZWN0RWxlbShgI2NvbnRhaW5lciR7cHJvamVjdC5kYXRhc2V0LmlkfWApO1xuICAgICAgICBcbiAgICAgICAgY29uc3QgZm9ybSA9IERPTS5lbGVtZW50SW5pdCgnZm9ybScseydjbGFzcyc6ICd0b0RvTm90ZUlucHV0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnaWQnOiBgdG9Eb05vdGVGb3JtJHtwcm9qZWN0LmRhdGFzZXQuaWR9JHtmb3JtUmVmZXJlbmNlLmxlbmd0aH1gLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnZGF0YS1pZCc6YCR7Zm9ybVJlZmVyZW5jZS5sZW5ndGh9YCB9KVxuICAgICAgICBjb25zdCBzdWJtaXQgPSBET00uZWxlbWVudEluaXQoJ2J1dHRvbicseyd0eXBlJzonc3VibWl0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdpZCc6ICdzdWJtaXROb3RlJywgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdjbGFzcyc6J3N1Ym1pdE5vdGUgbm9uZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCdTdWJtaXQgTm90ZScpXG4gICAgICAgIGNvbnN0IGNhbmNlbCA9IERPTS5lbGVtZW50SW5pdCgnYnV0dG9uJywgeydjbGFzcyc6J2NhbmNlbCBub25lJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnaWQnOidjYW5jZWxOb3RlJ30sICdDYW5jZWwnKTtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IHJlbW92ZSA9IERPTS5lbGVtZW50SW5pdCgnYnV0dG9uJywgeydjbGFzcyc6J3JlbW92ZSBub25lJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdpZCc6YHJlbW92ZSR7cHJvamVjdC5kYXRhc2V0LmlkfSR7Zm9ybVJlZmVyZW5jZS5sZW5ndGh9YH0sICdYJyk7XG4gICAgICAgIGNvbnN0IHByb3ZUaXRsZSA9IERPTS5zZWxlY3RFbGVtKCcjcHJvdlRpdGxlJyk7XG4gICAgICAgIGNvbnN0IHRpdGxlID0gRE9NLmVsZW1lbnRJbml0KCdsYWJlbCcsIHsnY2xhc3MnOidpdGVtVGl0bGUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2Zvcic6J2l0ZW1UaXRsZScsICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICduYW1lJzonaXRlbVRpdGxlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2lkJzpgaXRlbVRpdGxlJHtwcm9qZWN0LmRhdGFzZXQuaWR9JHtmb3JtUmVmZXJlbmNlLmxlbmd0aH1gLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LGAke3Byb3ZUaXRsZS52YWx1ZX1gLClcbiAgICAgICAgY29uc3QgbW9kaWZ5ID0gRE9NLmVsZW1lbnRJbml0KCdidXR0b24nLCB7J2NsYXNzJzonZWRpdCd9LCdFZGl0Jyk7XG5cbiAgICAgICAgXG4gICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQoc3VibWl0KTtcbiAgICAgICAgZm9ybS5hcHBlbmRDaGlsZChjYW5jZWwpO1xuICAgICAgICBmb3JtLmFwcGVuZENoaWxkKHJlbW92ZSk7XG4gICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQodGl0bGUpO1xuICAgICAgICB0aXRsZS5hcHBlbmRDaGlsZChtb2RpZnkpXG4gICAgICAgIG1vZGlmeS5kaXNhYmxlZCA9IHRydWU7XG4gICAgICAgIHByb3ZUaXRsZS5yZW1vdmUoKTsgIFxuICAgICAgICBcblxuICAgICAgICBmb3JtLm9uc3VibWl0ID0gZGVsZWdhdG9yOyAgIFxuICAgICAgICAgXG4gICAgICAgIGNvbnRhaW5lci5jbGFzc0xpc3QudG9nZ2xlKCdub25lJywgZmFsc2UpO1xuICAgICAgICBcbiAgICAgICAgIFxuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZm9ybSk7XG5cbiAgICAgICAgY29uc3QgX2dlbmVyYXRlQ2hlY2tsaXN0ID0gZnVuY3Rpb24oKXsgXG4gICAgICAgICAgIGNvbnN0IGFkZCA9IERPTS5lbGVtZW50SW5pdCgnYnV0dG9uJywgeydjbGFzcyc6J2FkZENoZWNrJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2lkJzpgYWRkQ2hlY2ske3Byb2plY3QuZGF0YXNldC5pZH0ke2Zvcm1SZWZlcmVuY2UubGVuZ3RofWAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdkYXRhLWNsYXNzJzpgY2hpbGQke2Zvcm1SZWZlcmVuY2UubGVuZ3RofWAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sICdBZGQgSXRlbScpOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICBmb3JtLmFwcGVuZENoaWxkKGFkZCk7XG5cbiAgICAgICAgICAgIGZvcm0uY2xhc3NMaXN0LmFkZCgnY2hlY2tib3gnKVxuICAgICAgICAgICAgcmVtb3ZlLmNsYXNzTGlzdC50b2dnbGUoJ25vbmUnLGZhbHNlKTtcbiAgICAgICAgICAgIGVuYWJsZUJ0bnMoKTtcbiAgICAgICB9XG5cbiAgICAgICBjb25zdCBfZ2VuZXJhdGVGcmVlRm9ybSA9IGZ1bmN0aW9uKCl7XG5cbiAgICAgICAgaW5wdXQudmFsdWUgPSAnJztcbiAgICAgICAgaW5wdXQuY2xhc3NMaXN0LnRvZ2dsZSgnbm9uZScsZmFsc2UpO1xuICAgICAgICBmb3JtLmNsYXNzTGlzdC5hZGQoJ2ZyZWVGb3JtJyk7XG5cbiAgICAgICAgc3VibWl0LmNsYXNzTGlzdC50b2dnbGUoJ25vbmUnLGZhbHNlKTtcbiAgICAgICAgY2FuY2VsLmNsYXNzTGlzdC50b2dnbGUoJ25vbmUnLGZhbHNlKTtcbiAgICAgICAgaW5wdXQuZm9jdXMoKTtcbiAgICAgICAgXG4gICAgICAgfVxuXG4gICAgICAgY2hvc2VuVHlwZSA9PT0gJ0NoZWNrbGlzdCcgPyBfZ2VuZXJhdGVDaGVja2xpc3QoKSA6IF9nZW5lcmF0ZUZyZWVGb3JtKCk7ICBcblxuICAgICAgIHJldHVybiBcblxuICAgICB9XG5cblxuICAgICBjb25zdCBkaXNhYmxlQnRucyA9IGZ1bmN0aW9uKHRyZ3Q9J24vYScpe1xuICAgICAgICBjb25zdCBhbGxCdG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnYnV0dG9uJyk7XG4gICAgICAgIGFsbEJ0bnMuZm9yRWFjaChidG4gPT4gIGJ0biA9PT0gdHJndCB8fCBidG4uY2xhc3NMaXN0LmNvbnRhaW5zKCdub25lJykgPyBidG4uZGlzYWJsZWQgPSBmYWxzZSA6IGJ0bi5kaXNhYmxlZCA9IHRydWUpO1xuXG4gICAgICAgIGNvbnN0IGFsbEVkaXRhYmxlcyA9IERPTS5zZWxlY3RFbGVtKCcuZWRpdCcpO1xuICAgICAgICBhbGxFZGl0YWJsZXMuZm9yRWFjaChpdG0gPT4gIGl0bSA9PT0gdHJndCB8fCBpdG0uY2xhc3NMaXN0LmNvbnRhaW5zKCdub25lJykgPyBmYWxzZSA6IGl0bS5jbGFzc0xpc3QudG9nZ2xlKCdkaXNhYmxlZEVkaXQnLCB0cnVlKSk7XG4gICAgICAgIGNvbnN0IGFsbERpc2FibGVkID0gRE9NLnNlbGVjdEVsZW0oJy5kaXNhYmxlZEVkaXQnKTtcbiAgICAgICAgYWxsRGlzYWJsZWQuZm9yRWFjaChpdG0gPT4gaXRtLmNsYXNzTGlzdC50b2dnbGUoJ2VkaXQnLGZhbHNlKSk7XG4gICAgfVxuICAgIFxuICAgIFxuICAgIGNvbnN0IGVuYWJsZUJ0bnMgPSBmdW5jdGlvbigpe1xuICAgICAgICBjb25zdCBhbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdidXR0b24nKTtcbiAgICAgICAgYWxsLmZvckVhY2goYnRuID0+IGJ0bi5kaXNhYmxlZCA9IGZhbHNlKTtcblxuICAgICAgICBjb25zdCBlZGl0cyA9IERPTS5zZWxlY3RFbGVtKCcuZGlzYWJsZWRFZGl0Jyk7XG4gICAgICAgIGVkaXRzLmZvckVhY2goaXRtID0+IGl0bS5jbGFzc0xpc3QudG9nZ2xlKCdlZGl0Jyx0cnVlKSk7XG4gICAgICAgIGVkaXRzLmZvckVhY2goaXRtID0+IGl0bS5jbGFzc0xpc3QudG9nZ2xlKCdkaXNhYmxlZEVkaXQnLGZhbHNlKSk7XG4gICAgICAgIGNvbnN0IGRlbGV0ZUJ0bnMgPSBET00uc2VsZWN0RWxlbSgnLmRlbGV0ZUNoZWNrJyk7XG4gICAgICAgIGRlbGV0ZUJ0bnMuZm9yRWFjaChidG4gPT4gYnRuLmNsYXNzTGlzdC50b2dnbGUoJ25vbmUnLGZhbHNlKSk7ICAgICAgICBcbiAgICB9XG5cbiAgICAgY29uc3QgbW9kaWZ5RWxlbWVudCA9IGZ1bmN0aW9uKGV2ZW50KXtcblxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIFxuICAgICAgICAgY29uc3QgZm9ybSA9IGV2ZW50LnRhcmdldC5wYXJlbnRFbGVtZW50O1xuICAgICAgICAgY29uc3QgbW9kSW5wdXQgPSAoZnVuY3Rpb24oKXtcbiAgICAgICAgIGlmIChmb3JtLmNsYXNzTGlzdC5jb250YWlucygnZnJlZUZvcm0nKSl7ICAgIFxuICAgICAgICAgICAgbGV0IG1vZFRleHRBcmVhID0gRE9NLmVsZW1lbnRJbml0KCd0ZXh0YXJlYScseydsYWJlbCc6J2ZyZWVGb3JtJyxcbiAgICAgICAgICAgICduYW1lJzonZnJlZUZvcm0nLFxuICAgICAgICAgICAgJ2F1dG9jb21wbGV0ZSc6J29mZicsXG4gICAgICAgICAgICAncmVxdWlyZWQnOidyZXF1aXJlZCcsXG4gICAgICAgICAgICAnaWQnOidtb2RJbnB1dCcsXG4gICAgICAgICAgICdjbGFzcyc6ICdtb2RJbnB1dCcsXG4gICAgICAgICAgICdyb3dzJyA6ICczJyxcbiAgICAgICAgICAgJ2NvbHMnIDogJzMwJ30pO1xuXG4gICAgICAgICAgIHJldHVybiBtb2RUZXh0QXJlYTsgIFxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGxldCBtb2RDaGVja0lucHV0ID0gRE9NLmVsZW1lbnRJbml0KCdpbnB1dCcseyd0eXBlJzondGV4dCcsXG4gICAgICAgICAgICAnYXV0b2NvbXBsZXRlJzonb2ZmJyxcbiAgICAgICAgICAgICdyZXF1aXJlZCc6J3JlcXVpcmVkJyxcbiAgICAgICAgICAgICdjbGFzcyc6ICdtb2RJbnB1dCcsXG4gICAgICAgICAgICAgJ2lkJzonbW9kSW5wdXQnLH0pO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAgcmV0dXJuIG1vZENoZWNrSW5wdXQgICBcbiAgICAgICAgfSBcbiAgICB9KSgpXG5cbiAgICAgICAgIGNvbnN0IHN1Ym1pdCA9IERPTS5lbGVtZW50SW5pdCgnYnV0dG9uJyx7J3R5cGUnOidzdWJtaXQnLFxuICAgICAgICAnY2xhc3MnOidzdWJtaXRNb2QnLFxuICAgICAgICAgJ2lkJzogJ3N1Ym1pdE1vZCdcbiAgICAgICAgIH0sJ1N1Ym1pdCBOb3RlJylcbiAgICAgICAgIGNvbnN0IHJldmVydCA9IERPTS5lbGVtZW50SW5pdCgnYnV0dG9uJyx7XG4gICAgICAgICAnY2xhc3MnOidyZXZlcnRNb2QnLFxuICAgICAgICAgJ2RhdGEtdHJhbnNmZXInOmAke2V2ZW50LnRhcmdldC5maXJzdENoaWxkLm5vZGVWYWx1ZX1gIC8vdGVtcG9yYXJ5LCB1cGRhdGUgdG8gdXNlIGxvY2FsIHN0b3JhZ2UgJiBiYWNrZW5kXG4gICAgICAgICAgfSwnUmV2ZXJ0IEJhY2snKSBcbiAgICAgICAgICAgICAgICAgXG4gICAgICAgICBpZiAoZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdpdGVtVGl0bGUnKSB8fCBldmVudC50YXJnZXQucGFyZW50RWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoJ3Byb2plY3QnKSl7XG4gICAgICAgICAgICAgcmV2ZXJ0LmRhdGFzZXQudHJhbnNmZXIgPSBldmVudC50YXJnZXQucGFyZW50RWxlbWVudC5maXJzdENoaWxkLm5vZGVWYWx1ZVxuICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIFxuXG4gICAgICAgIGRpc2FibGVCdG5zKCk7XG5cbiAgICAgICAgIGNvbnN0IF9yZXBsYWNlV2l0aElucHV0ID0gKGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICBpZihldmVudC50YXJnZXQucGFyZW50RWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoJ2l0ZW1UaXRsZScpIHx8IGV2ZW50LnRhcmdldC5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygncHJvamVjdCcpKXtcbiAgICAgICAgICAgICAgICBtb2RJbnB1dC52YWx1ZSA9IGV2ZW50LnRhcmdldC5wYXJlbnRFbGVtZW50LmZpcnN0Q2hpbGQubm9kZVZhbHVlO1xuICAgICAgICAgICAgICAgIGV2ZW50LnRhcmdldC5wYXJlbnRFbGVtZW50LmZpcnN0Q2hpbGQubm9kZVZhbHVlID0gJyc7XG4gICAgICAgICAgICAgICAgZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQuYXBwZW5kQ2hpbGQobW9kSW5wdXQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZXtcbiAgICAgICAgICAgICAgICBtb2RJbnB1dC52YWx1ZSA9IGV2ZW50LnRhcmdldC5maXJzdENoaWxkLm5vZGVWYWx1ZVxuICAgICAgICAgICAgICAgIGV2ZW50LnRhcmdldC5yZXBsYWNlV2l0aChtb2RJbnB1dCk7IFxuXG4gICAgICAgICAgICB9IFxuICAgICAgICAgICAgbW9kSW5wdXQuaW5zZXJ0QWRqYWNlbnRFbGVtZW50KCdhZnRlcmVuZCcsc3VibWl0KTtcbiAgICAgICAgICAgIHN1Ym1pdC5pbnNlcnRBZGphY2VudEVsZW1lbnQoJ2FmdGVyZW5kJyxyZXZlcnQpO1xuICAgICAgIH0pKClcbiAgICAgICAgXG4gICAgIH1cblxuICAgICBjb25zdCBzdWJtaXRNb2RpZmllZEVsZW1lbnQgPSBmdW5jdGlvbihldmVudCl7XG4gICAgICAgIFxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBjb25zdCBmb3JtID0gZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQ7XG4gICAgICAgIGNvbnN0IGlucHV0ID0gZXZlbnQudGFyZ2V0LnByZXZpb3VzRWxlbWVudFNpYmxpbmc7XG4gICAgICAgIGNvbnN0IHJldmVydCA9IGV2ZW50LnRhcmdldC5uZXh0RWxlbWVudFNpYmxpbmc7XG4gICAgICAgIGNvbnN0IGxhYmVsID0gRE9NLmVsZW1lbnRJbml0KCdsYWJlbCcsIHsnZm9yJzogYCR7aW5wdXQudmFsdWV9YCwgJ2NsYXNzJzonZWRpdCd9LGAke2lucHV0LnZhbHVlfWApO1xuICAgICAgICBjb25zdCB0ZXh0ID0gRE9NLmVsZW1lbnRJbml0KCdwJywgeydjbGFzcyc6J3RleHQgZWRpdCd9LCBgJHtpbnB1dC52YWx1ZX1gKTtcbiAgICAgICAgY29uc3QgZGVsID0gRE9NLmVsZW1lbnRJbml0KCdidXR0b24nLCB7J2NsYXNzJzogJ2RlbGV0ZUNoZWNrIG5vbmUnfSwnZGVsZXRlJyApIFxuXG4gICAgICAgIFxuICAgICAgICBpZihpbnB1dC52YWx1ZSA9PT0gJycpe3JldHVybn07XG5cbiAgICAgICAgaWYoZm9ybS5jbGFzc0xpc3QuY29udGFpbnMoJ2NoZWNrYm94Jykpe1xuICAgICAgICAgICAgaW5wdXQucmVwbGFjZVdpdGgobGFiZWwpO1xuICAgICAgICAgICAgbGFiZWwuYXBwZW5kQ2hpbGQoZGVsKTtcblxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGZvcm0uY2xhc3NMaXN0LmNvbnRhaW5zKCdmcmVlRm9ybScpKXtcbiAgICAgICAgICAgIGlucHV0LnJlcGxhY2VXaXRoKHRleHQpOyBcbiAgICAgICAgfVxuXG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgdmFsdWUgPSBpbnB1dC52YWx1ZVxuICAgICAgICAgICAgZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQuZmlyc3RDaGlsZC5ub2RlVmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgICAgIGlucHV0LnJlbW92ZSgpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBlbmFibGVCdG5zKCk7XG4gICAgXG4gICAgICAgIHJldmVydC5yZW1vdmUoKTtcbiAgICAgICAgZXZlbnQudGFyZ2V0LnJlbW92ZSgpO1xuXG5cbiAgICAgICAgcmV0dXJuICAgICAgICAgXG4gICAgIH1cblxuICAgICBjb25zdCByZXZlcnRNb2RpZmllZEVsZW1lbnQgPSBmdW5jdGlvbihldmVudCl7XG4gICAgICAgIFxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBjb25zdCBmb3JtID0gZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQ7XG4gICAgICAgIGNvbnN0IHN1Ym1pdCA9IGV2ZW50LnRhcmdldC5wcmV2aW91c0VsZW1lbnRTaWJsaW5nO1xuICAgICAgICBjb25zdCBpbnB1dCA9IHN1Ym1pdC5wcmV2aW91c0VsZW1lbnRTaWJsaW5nO1xuICAgICAgICBjb25zdCBsYWJlbCA9IERPTS5lbGVtZW50SW5pdCgnbGFiZWwnLCB7J2Zvcic6IGAke2V2ZW50LnRhcmdldC5kYXRhc2V0LnRyYW5zZmVyfWAsICdjbGFzcyc6J2VkaXQnfSxgJHtldmVudC50YXJnZXQuZGF0YXNldC50cmFuc2Zlcn1gKTsgLy90ZW1wb3JhcnksIHVwZGF0ZSB0byB1c2UgbG9jYWwgc3RvcmFnZSAmIGJhY2tlbmRcbiAgICAgICAgY29uc3QgdGV4dCA9IERPTS5lbGVtZW50SW5pdCgncCcsIHsnY2xhc3MnOid0ZXh0IGVkaXQnfSwgYCR7ZXZlbnQudGFyZ2V0LmRhdGFzZXQudHJhbnNmZXJ9YCk7IC8vdGVtcG9yYXJ5LCB1cGRhdGUgdG8gdXNlIGxvY2FsIHN0b3JhZ2UgJiBiYWNrZW5kXG4gICAgICAgIGNvbnN0IGRlbCA9IERPTS5lbGVtZW50SW5pdCgnYnV0dG9uJywgeydjbGFzcyc6ICdkZWxldGVDaGVjayBub25lJ30sJ2RlbGV0ZScgKSBcblxuXG4gICAgICAgIGlmKGZvcm0uY2xhc3NMaXN0LmNvbnRhaW5zKCdjaGVja2JveCcpKXtcbiAgICAgICAgICAgIGlucHV0LnJlcGxhY2VXaXRoKGxhYmVsKTtcbiAgICAgICAgICAgIGxhYmVsLmFwcGVuZENoaWxkKGRlbCk7XG5cbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChmb3JtLmNsYXNzTGlzdC5jb250YWlucygnZnJlZUZvcm0nKSl7XG4gICAgICAgICAgICBpbnB1dC5yZXBsYWNlV2l0aCh0ZXh0KTsgXG4gICAgICAgIH1cblxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gZXZlbnQudGFyZ2V0LmRhdGFzZXQudHJhbnNmZXI7IC8vdGVtcG9yYXJ5LCB1cGRhdGUgdG8gdXNlIGxvY2FsIHN0b3JhZ2UgJiBiYWNrZW5kXG4gICAgICAgICAgICBldmVudC50YXJnZXQucGFyZW50RWxlbWVudC5maXJzdENoaWxkLm5vZGVWYWx1ZSA9IHZhbHVlO1xuICAgICAgICAgICAgaW5wdXQucmVtb3ZlKCk7XG4gICAgICAgIH1cbiAgICAgICAgIFxuICAgICAgICBlbmFibGVCdG5zKCk7XG4gICAgXG4gICAgICAgIHN1Ym1pdC5yZW1vdmUoKTtcbiAgICAgICAgZXZlbnQudGFyZ2V0LnJlbW92ZSgpO1xuICAgICAgICByZXR1cm4gICAgICAgICBcbiAgICAgfVxuICAgICBcbiAgICAgXG4gICAgY29uc3QgY2hvb3NlVG9Eb1RpdGxlRm9ybSA9IGZ1bmN0aW9uKGV2ZW50KXtcbiAgICAgICAgY29uc3QgZG9tUHJvamVjdCA9IGV2ZW50LnRhcmdldC5wYXJlbnRFbGVtZW50O1xuXG4gICAgICAgIGNvbnN0IF9nZW5lcmF0ZVRpdGxlRm9ybSA9IChmdW5jdGlvbigpe1xuICAgICAgICAgICAgIGNvbnN0IGZvcm0gPSAgRE9NLmVsZW1lbnRJbml0KCdmb3JtJywgeydjbGFzcyc6ICdjaG9vc2VUaXRsZUZvcm0gdHJhbnNpdEZvcm0nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnaWQnOiAnY2hvb3NlVGl0bGVGb3JtJ30pXG4gICAgICAgICAgICAgY29uc3QgbGFiZWwgPSBET00uZWxlbWVudEluaXQoJ2xhYmVsJyx7J2Zvcic6J2Nob29zZVlvdXJUaXRsZSd9LCdDaG9vc2UgWW91ciBOb3RlXFwncyBUaXRsZScpO1xuICBcbiAgICAgICAgICAgICBjb25zdCB0aXRsZUlucHV0ID0gRE9NLmVsZW1lbnRJbml0KCdpbnB1dCcseyd0eXBlJzondGV4dCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnYXV0b2NvbXBsZXRlJzonb2ZmJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAncmVxdWlyZWQnOidyZXF1aXJlZCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2lkJzoncHJvdlRpdGxlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnY2xhc3MnOiAncHJvdlRpdGxlJ30sKTtcbiAgICAgICAgICAgIGNvbnN0IHN1Ym1pdFRpdGxlID0gRE9NLmVsZW1lbnRJbml0KCdidXR0b24nLCB7J3R5cGUnOidzdWJtaXQnfSwgJ1N1Ym1pdCcpO1xuICAgICAgICAgICAgY29uc3QgY2FuY2VsVGl0bGUgPSBET00uZWxlbWVudEluaXQoJ2J1dHRvbicsIHsnY2xhc3MnOidjYW5jZWxUaXRsZSd9LCAnQ2FuY2VsJyk7XG4gICAgICAgICAgICBmb3JtLmFwcGVuZENoaWxkKGxhYmVsKTtcbiAgICAgICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQodGl0bGVJbnB1dCk7XG4gICAgICAgICAgICBmb3JtLmFwcGVuZENoaWxkKHN1Ym1pdFRpdGxlKTtcbiAgICAgICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQoY2FuY2VsVGl0bGUpO1xuICAgICAgICAgICAgZm9ybS5vbnN1Ym1pdCA9IGRlbGVnYXRvcjtcbiAgICAgICAgICAgIHJldHVybiBmb3JtXG4gICAgICAgIH0pKCkgXG4gICAgICAgIFxuICAgICAgICBkb21Qcm9qZWN0LmFwcGVuZENoaWxkKF9nZW5lcmF0ZVRpdGxlRm9ybSlcbiAgICAgICAgcmV0dXJuXG5cbiAgICB9XG4gICAgY29uc3Qgc3VibWl0VG9Eb1RpdGxlID0gZnVuY3Rpb24oZXZlbnQpe1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpOyBcbiAgICAgICAgY29uc3QgcHJvdlRpdGxlID0gRE9NLnNlbGVjdEVsZW0oJyNwcm92VGl0bGUnKTtcbiAgICAgICAgY29uc3QgZG9tUHJvamVjdCA9IGV2ZW50LnRhcmdldC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQ7XG4gICAgICAgIGRvbVByb2plY3QuYXBwZW5kQ2hpbGQocHJvdlRpdGxlKTtcbiAgICAgICAgcHJvdlRpdGxlLmNsYXNzTGlzdC50b2dnbGUoJ25vbmUnLHRydWUpO1xuICAgICAgICBcbiAgICAgICAgZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC50b2dnbGUoJ25vbmUnLHRydWUpO1xuICAgICAgICByZXR1cm5cbiAgICAgICAgXG4gICAgfVxuICAgICBcbiAgICAgY29uc3QgY2hvb3NlTm90ZVR5cGUgPSBmdW5jdGlvbihldmVudCl7XG4gICAgICAgIGNvbnN0IGRvbVByb2plY3QgPSBldmVudC50YXJnZXQucGFyZW50RWxlbWVudDtcblxuICAgICAgICAgY29uc3QgZm9ybSA9ICBET00uZWxlbWVudEluaXQoJ2Zvcm0nLCB7J2NsYXNzJzogJ2Nob29zZU5vdGVUeXBlIHRyYW5zaXRGb3JtJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnaWQnOiAnbm90ZVR5cGVGb3JtJyAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgY29uc3QgbGFiZWwgPSBET00uZWxlbWVudEluaXQoJ2xhYmVsJyx7J2Zvcic6J2Nob29zZU5vdGVUeXBlJ30sJ0Nob29zZSBZb3VyIE5vdGUgVHlwZScpO1xuICAgICAgICAgY29uc3Qgc2VsZWN0ID0gRE9NLmVsZW1lbnRJbml0KCdzZWxlY3QnLHsnY2xhc3MnOidzZWxlY3QnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdpZCc6ICdzZWxlY3QnIH0pO1xuICAgICAgICAgY29uc3Qgb3B0R3JvdXAgPSBET00uZWxlbWVudEluaXQoJ29wdGdyb3VwJyx7J2xhYmVsJzogJ05vdGUgT3B0aW9ucyd9LCAnQ2hvb3NlIHlvdXIgbm90ZSB0eXBlJyk7XG4gICAgICAgICBjb25zdCBjaGVja2xpc3RPcHQgPSBET00uZWxlbWVudEluaXQoJ29wdGlvbicseyduYW1lJzogJ2NoZWNrbGlzdCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnY2xhc3MnOiAnY2hlY2tsaXN0J30sJ0NoZWNrbGlzdCcpO1xuICAgICAgICAgY29uc3QgaW5wdXRPcHQgPSBET00uZWxlbWVudEluaXQoJ29wdGlvbicseyduYW1lJzogJ2lucHV0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2NsYXNzJzogJ2lucHV0J30sJ0ZyZWVmb3JtJyk7XG4gICAgICAgICBjb25zdCBjaG9pY2UgPSBET00uZWxlbWVudEluaXQoJ2J1dHRvbicsIHsndHlwZSc6J3N1Ym1pdCd9LCAnU3VibWl0Jyk7XG4gICAgICAgICBjb25zdCBjYW5jZWwgPSBET00uZWxlbWVudEluaXQoJ2J1dHRvbicsIHsnY2xhc3MnOidjYW5jZWxDaG9pY2UnfSwgJ0NhbmNlbCcpO1xuICAgICAgICAgXG4gICAgICAgICBzZWxlY3QuYXBwZW5kQ2hpbGQob3B0R3JvdXApO1xuICAgICAgICAgb3B0R3JvdXAuYXBwZW5kQ2hpbGQoY2hlY2tsaXN0T3B0KTtcbiAgICAgICAgIG9wdEdyb3VwLmFwcGVuZENoaWxkKGlucHV0T3B0KTtcbiAgICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQobGFiZWwpO1xuICAgICAgICAgZm9ybS5hcHBlbmRDaGlsZChzZWxlY3QpO1xuICAgICAgICAgZm9ybS5hcHBlbmRDaGlsZChET00uZWxlbWVudEluaXQoJ2JyJykpO1xuICAgICAgICAgZm9ybS5hcHBlbmRDaGlsZChjaG9pY2UpO1xuICAgICAgICAgZm9ybS5hcHBlbmRDaGlsZChjYW5jZWwpXG5cbiAgICAgICAgIGRpc2FibGVCdG5zKCk7XG4gICAgICAgICBmb3JtLm9uc3VibWl0ID0gZGVsZWdhdG9yO1xuICAgICAgICAgZG9tUHJvamVjdC5hcHBlbmRDaGlsZChmb3JtKTtcblxuICAgICAgICAgcmV0dXJuIGZvcm1cbiAgICB9XG4gICAgIFxuICAgICBjb25zdCByZXZlYWxDcmVhdGVGb3JtID0gZnVuY3Rpb24oKXtcbiAgICAgICAgbGV0IGNyZWF0ZUZvcm0gPSBET00uc2VsZWN0RWxlbSgnI2NyZWF0ZUZvcm0nKTtcbiAgICAgICAgY3JlYXRlRm9ybS5jbGFzc0xpc3QudG9nZ2xlKCdub25lJywgZmFsc2UpO1xuICAgICAgICBcbiAgICAgfVxuXG4gICAgIGNvbnN0IHJlc2V0Q3JlYXRlRm9ybSA9IGZ1bmN0aW9uKCl7XG4gICAgICAgICBsZXQgY3JlYXRlRm9ybSA9IERPTS5zZWxlY3RFbGVtKCcjY3JlYXRlRm9ybScpO1xuICAgICAgICAgY3JlYXRlRm9ybS5jbGFzc0xpc3QudG9nZ2xlKCdub25lJywgdHJ1ZSk7XG5cbiAgICAgICAgIGxldCB0aXRsZUlucCA9IERPTS5zZWxlY3RFbGVtKCcjdGl0bGVJbnAnKTtcbiAgICAgICAgIHRpdGxlSW5wLnZhbHVlID0gJyc7XG4gICAgIH1cblxuICAgICBjb25zdCB0b2dnbGVTaXplID0gZnVuY3Rpb24oZXZlbnQpe1xuICAgICAgICBpZiAoZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygncHJvamVjdCcpKXtcblxuICAgICAgICBjb25zdCBjb250YWluZXIgPSBET00uc2VsZWN0RWxlbShgI2NvbnRhaW5lciR7ZXZlbnQudGFyZ2V0LmRhdGFzZXQuaWR9YCApICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgY29udGFpbmVyLmNsYXNzTGlzdC50b2dnbGUoJ25vbmUnKTtcblxuICAgICAgICB9XG5cbiAgICAgICAgZWxzZSB7XG4gICAgICAgIFxuICAgICAgICBjb25zdCBmb3JtID0gZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQ7ICAgIFxuICAgICAgICBjb25zdCBmb3JtQ2hpbGRyZW4gPSBBcnJheS5mcm9tKGZvcm0uY2hpbGRyZW4pO1xuICAgICAgICBmb3JtQ2hpbGRyZW4uZm9yRWFjaChpdG0gPT4gaXRtLmRhdGFzZXQuY2xhc3MgPT09IGBjaGlsZCR7Zm9ybS5kYXRhc2V0LmlkfWAgPyBpdG0uY2xhc3NMaXN0LnRvZ2dsZSgnbm9uZScpIDogZmFsc2UpICAgICAgIFxuICAgICAgICAgICAgXG4gICAgICAgIH1cbiAgICAgfVxuXG4gICAgIGNvbnN0IG5vdGVUeXBlR2VuZXJhdG9yID0gZnVuY3Rpb24oZXZlbnQpeyBcblxuICAgICAgICBjb25zdCBnZXRTZWxlY3RlZCA9IChmdW5jdGlvbigpe1xuICAgICAgICAgICAgIGNvbnN0IHNlbGVjdCA9ICBET00uc2VsZWN0RWxlbSgnI3NlbGVjdCcpO1xuICAgICAgICAgICAgIHJldHVybiBzZWxlY3Qub3B0aW9uc1tzZWxlY3Quc2VsZWN0ZWRJbmRleF0udmFsdWU7XG4gICAgICAgIH0pKClcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IF9nZW5lcmF0ZVRlbXBvcmFyeUlucHV0ID0gKGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0ID0gRE9NLnNlbGVjdEVsZW0oJyNub3RlVHlwZUZvcm0nKS5wYXJlbnRFbGVtZW50O1xuICAgICAgICAgICBcbiAgICAgICAgaWYgKGdldFNlbGVjdGVkID09PSAnQ2hlY2tsaXN0Jyl7ICAgIFxuICAgICAgICAgICAgbGV0IHRlbXBvcmFyeUlucHV0ID0gRE9NLmVsZW1lbnRJbml0KCdpbnB1dCcseyd0eXBlJzondGV4dCcsXG4gICAgICAgICAgICAnYXV0b2NvbXBsZXRlJzonb2ZmJyxcbiAgICAgICAgICAgICdyZXF1aXJlZCc6J3JlcXVpcmVkJyxcbiAgICAgICAgICAgICdpZCc6J3RlbXBvcmFyeUlucHV0JyxcbiAgICAgICAgICAgJ2NsYXNzJzogJ3RlbXBvcmFyeUlucHV0IG5vbmUnfSk7ICBcbiAgICAgICAgICAgIHByb2plY3QuYXBwZW5kQ2hpbGQodGVtcG9yYXJ5SW5wdXQpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGxldCB0ZXh0QXJlYSA9IERPTS5lbGVtZW50SW5pdCgndGV4dGFyZWEnLCB7J2lkJzondGVtcG9yYXJ5SW5wdXQnLFxuICAgICAgICAgICAgICAgICduYW1lJzonZnJlZUZvcm0nLFxuICAgICAgICAgICAgICAgICdsYWJlbCc6J2ZyZWVGb3JtJyxcbiAgICAgICAgICAgICAgICAnY2xhc3MnOid0ZW1wb3JhcnlJbnB1dCBub25lJyxcbiAgICAgICAgICAgICAgICAnYXV0b2NvbXBsZXRlJzonb2ZmJyxcbiAgICAgICAgICAgICAgICAncmVxdWlyZWQnOidyZXF1aXJlZCcsXG4gICAgICAgICAgICAgICAgJ3Jvd3MnIDogJzQnLFxuICAgICAgICAgICAgICAgICdjb2xzJyA6ICc1MCcgfSk7XG4gICAgICAgICAgICBwcm9qZWN0LmFwcGVuZENoaWxkKHRleHRBcmVhKTsgICBcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgfSkoKVxuICAgICAgICBcbiAgICAgICAgcHJvamVjdEV2ZW50cy5wdWJsaXNoKCdkZWxldGVOb3RlVHlwZUZvcm0nLCBldmVudCk7XG4gICAgICAgIHByb2plY3RFdmVudHMucHVibGlzaCgnY3JlYXRlTm90ZScsIGdldFNlbGVjdGVkKTtcbiAgICAgICAgXG4gICAgICAgIHJldHVybiBnZXRTZWxlY3RlZFxuICAgICB9XG5cblxuXG4gICAgY29uc3QgZGVsZXRlRm9ybXMgPSBmdW5jdGlvbihldmVudCl7XG5cbiAgICAgICAgIFxuICAgICAgICBjb25zdCBfY2FuY2VsTm90ZVR5cGVGb3JtID0gZnVuY3Rpb24oKXtcblxuICAgICAgICAgICAgY29uc3QgX2RlbGV0ZVByb3ZUaXRsZSA9IGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAgICAgIGNvbnN0IHByb3ZUaXRsZSA9ICBET00uc2VsZWN0RWxlbSgnI3Byb3ZUaXRsZScpXG4gICAgICAgICAgICAgICAgIHByb3ZUaXRsZSA/IHByb3ZUaXRsZS5yZW1vdmUoKSA6IGZhbHNlXG4gICAgICAgICAgICAgICAgIHJldHVybiAgIFxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgY29uc3QgX2RlbGV0ZUFkZE5vdGVGb3JtID0gKGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAgICAgIGNvbnN0IG5vdGVUeXBlRm9ybSA9IERPTS5zZWxlY3RFbGVtKCcjbm90ZVR5cGVGb3JtJyk7XG4gICAgICAgICAgICAgICAgIG5vdGVUeXBlRm9ybSA/IG5vdGVUeXBlRm9ybS5yZW1vdmUoKSA6IGZhbHNlO1xuICAgICAgICAgICAgICAgICByZXR1cm5cblxuICAgICAgICAgICAgIH0pKCk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGV2ZW50LnRhcmdldC5jbGFzc05hbWUgPT09ICdjYW5jZWxDaG9pY2UnID8gX2RlbGV0ZVByb3ZUaXRsZSgpIDogZmFsc2U7IFxuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cblxuXG4gICAgICAgICBsZXQgZGVsZXRlZCA9IERPTS5zZWxlY3RFbGVtKCcjY2hvb3NlVGl0bGVGb3JtJyk7XG4gICAgICAgICBkZWxldGVkID8gZGVsZXRlZC5yZW1vdmUoKSA6IF9jYW5jZWxOb3RlVHlwZUZvcm0oKVxuICAgICAgICAgXG4gICAgICAgICByZXR1cm5cblxuXG4gICAgfVxuXG4gICAgY29uc3QgY2xlYW5Ub0RvRm9ybSA9IGZ1bmN0aW9uKCl7XG4gICAgICBcbiAgICAgIGNvbnN0IGZvcm0gPSBET00uc2VsZWN0RWxlbSgnI3N1Ym1pdE5vdGUnKS5wYXJlbnRFbGVtZW50O1xuICAgICAgY29uc3QgcHJvamVjdCA9IERPTS5zZWxlY3RFbGVtKCcjdGVtcG9yYXJ5SW5wdXQnKS5wYXJlbnRFbGVtZW50OyAgXG5cbiAgICAgIGNvbnN0IF9kZWxldGVUcmFuc2l0b3J5U3R1ZmYgPSAoZnVuY3Rpb24oKXsgIFxuICAgICAgICBsZXQgZGVsZXRlZCA9IERPTS5zZWxlY3RFbGVtKCcjdGVtcG9yYXJ5SW5wdXQnKTtcbiAgICAgICAgZGVsZXRlZC5yZW1vdmUoKTtcblxuICAgICAgICBkZWxldGVkID0gRE9NLnNlbGVjdEVsZW0oJyNzdWJtaXROb3RlJyk7XG4gICAgICAgIGRlbGV0ZWQucmVtb3ZlKCk7XG5cbiAgICAgICAgZGVsZXRlZCA9IERPTS5zZWxlY3RFbGVtKCcjY2FuY2VsTm90ZScpO1xuICAgICAgICBkZWxldGVkLnJlbW92ZSgpOyBcbiAgICB9KSgpXG4gICAgICBcbiAgICAgIGNvbnN0IF9jb252ZXJ0QWRkQ2hlY2sgPSAoZnVuY3Rpb24oKXsgXG5cbiAgICAgICAgbGV0IGNvbnZlcnQgPSBET00uc2VsZWN0RWxlbShgI2FkZENoZWNrJHtwcm9qZWN0LmRhdGFzZXQuaWR9JHtmb3JtLmRhdGFzZXQuaWR9YCk7XG5cbiAgICAgICAgaWYgKGNvbnZlcnQpe1xuICAgICAgICAgICAgY29udmVydC5yZW1vdmVBdHRyaWJ1dGUoJ2NsYXNzJyk7XG4gICAgICAgICAgICBjb252ZXJ0LmNsYXNzTmFtZSA9ICdhZGRDaGVja01vZCc7XG4gICAgICBcbiAgICAgICAgfVxuICAgIH0pKClcblxuICAgICAgY29uc3QgX3JlbW92ZVdoZXJlRW1wdHkgPSAoZnVuY3Rpb24oKXtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IGZvcm1DaGlsZHJlbiA9IEFycmF5LmZyb20oZm9ybS5jaGlsZHJlbik7XG4gICAgICAgIGNvbnN0IGNoaWxkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtY2xhc3M9Y2hpbGQke2Zvcm0uZGF0YXNldC5pZH1dYClcbiAgICAgICAgIShmb3JtQ2hpbGRyZW4uaW5jbHVkZXMoY2hpbGQpKSA/IGZvcm0ucmVtb3ZlKCkgOiBmYWxzZTtcblxuICAgIH0pKClcblxuICAgICAgICByZXR1cm5cbiAgICB9XG4gICAgICAgIFxuXG4gICAgY29uc3QgY2FuY2VsTm90ZSA9IGZ1bmN0aW9uKGV2ZW50KXtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IGNhbmNlbCA9IGV2ZW50LnRhcmdldDtcbiAgICAgICAgY29uc3QgaW5wdXQgPSBET00uc2VsZWN0RWxlbSgnI3RlbXBvcmFyeUlucHV0Jyk7XG5cbiAgICAgICAgY2FuY2VsLmNsYXNzTGlzdC50b2dnbGUoJ25vbmUnLHRydWUpO1xuICAgICAgICBpbnB1dC52YWx1ZSA9ICcnO1xuICAgICAgICBpbnB1dC5jbGFzc0xpc3QudG9nZ2xlKCdub25lJyx0cnVlKTtcblxuICAgICAgICByZXR1cm4gICAgICAgIFxuICAgIH1cblxuICAgIFxuICAgIGNvbnN0IGdlbmVyYXRlTmV3QWRkQ2hlY2sgPSBmdW5jdGlvbihldmVudCl7XG4gICAgICAgIFxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBjb25zdCBmb3JtID0gZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQ7XG4gICAgICAgIGNvbnN0IHByb2plY3QgPSBmb3JtLnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudDtcblxuICAgICAgICBpZihET00uc2VsZWN0RWxlbSgnI3RlbXBvcmFyeUlucHV0JykgJiYgRE9NLnNlbGVjdEVsZW0oJyN0ZW1wb3JhcnlJbnB1dCcpLmxhYmVsID09PSAnZnJlZUZvcm0nKXtcbiAgICAgICAgICAgIERPTS5zZWxlY3RFbGVtKCcjdGVtcG9yYXJ5SW5wdXQnKS5yZW1vdmUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghRE9NLnNlbGVjdEVsZW0oJyN0ZW1wb3JhcnlJbnB1dCcpKXtcbiAgICAgICAgY29uc3QgdGVtcG9yYXJ5SW5wdXQgPSBET00uZWxlbWVudEluaXQoJ2lucHV0Jyx7J3R5cGUnOid0ZXh0JyxcbiAgICAgICAgJ2F1dG9jb21wbGV0ZSc6J29mZicsXG4gICAgICAgICdyZXF1aXJlZCc6J3JlcXVpcmVkJyxcbiAgICAgICAgJ2lkJzondGVtcG9yYXJ5SW5wdXQnLFxuICAgICAgICAnY2xhc3MnOiAndGVtcG9yYXJ5SW5wdXQgbm9uZSd9KTtcblxuICAgICAgICBwcm9qZWN0LmFwcGVuZENoaWxkKHRlbXBvcmFyeUlucHV0KTtcbiAgICAgICAgZGlzYWJsZUJ0bnMoZXZlbnQudGFyZ2V0KTtcbiAgICBcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghRE9NLnNlbGVjdEVsZW0oJyNzdWJtaXROb3RlJykpeyAgICAgICBcbiAgICAgICAgIGNvbnN0IG9yaWdpbmFsU3VibWl0ID0gRE9NLmVsZW1lbnRJbml0KCdidXR0b24nLHsndHlwZSc6J3N1Ym1pdCcsXG4gICAgICAgICdpZCc6ICdzdWJtaXROb3RlJywgXG4gICAgICAgICdjbGFzcyc6J3N1Ym1pdE5vdGUgbm9uZScsXG4gICAgICAgIH0sJ1N1Ym1pdCBOb3RlJylcblxuICAgICAgICBmb3JtLmFwcGVuZENoaWxkKG9yaWdpbmFsU3VibWl0KTtcblxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBpZiAoIURPTS5zZWxlY3RFbGVtKCcjY2FuY2VsTm90ZScpKXsgICAgICAgXG4gICAgICAgICAgICBjb25zdCBjYW5jZWwgPSBET00uZWxlbWVudEluaXQoJ2J1dHRvbicse1xuICAgICAgICAgICAnaWQnOiAnY2FuY2VsTm90ZScsIFxuICAgICAgICAgICAnY2xhc3MnOidjYW5jZWwgbm9uZScsXG4gICAgICAgICAgIH0sJ0NhbmNlbCcpXG4gICBcbiAgICAgICAgICAgZm9ybS5hcHBlbmRDaGlsZChjYW5jZWwpO1xuICAgIFxuICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgcHJvamVjdEV2ZW50cy5wdWJsaXNoKCduZXdDaGVja0l0ZW0nLCBldmVudCk7XG5cbiAgICAgICAgcmV0dXJuXG5cbiAgICB9XG5cbiAgICBjb25zdCBhZGROZXdDaGVjayA9IGZ1bmN0aW9uKGV2ZW50KXtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgY29uc3QgaW5wdXQgPSBET00uc2VsZWN0RWxlbSgnI3RlbXBvcmFyeUlucHV0Jyk7XG4gICAgICAgIGNvbnN0IHN1Ym1pdCA9IERPTS5zZWxlY3RFbGVtKCcjc3VibWl0Tm90ZScpO1xuICAgICAgICBjb25zdCBjYW5jZWwgPSBET00uc2VsZWN0RWxlbSgnI2NhbmNlbE5vdGUnKTtcbiAgICAgICAgaW5wdXQuY2xhc3NMaXN0LnRvZ2dsZSgnbm9uZScsZmFsc2UpO1xuICAgICAgICBpbnB1dC5mb2N1cygpO1xuICAgICAgICBkaXNhYmxlQnRucygpO1xuICAgICAgICBzdWJtaXQuY2xhc3NMaXN0LnRvZ2dsZSgnbm9uZScsZmFsc2UpO1xuICAgICAgICBjYW5jZWwuY2xhc3NMaXN0LnRvZ2dsZSgnbm9uZScsZmFsc2UpO1xuICAgICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBcbiAgICAgIGNvbnN0IF9nZW5lcmF0ZUNoZWNrSXRlbSA9IGZ1bmN0aW9uKCl7ICBcbiAgICAgICAgY29uc3QgaW5wdXQgPSBET00uc2VsZWN0RWxlbSgnI3RlbXBvcmFyeUlucHV0Jyk7XG4gICAgICAgIGNvbnN0IHByb2plY3QgPSBpbnB1dC5wYXJlbnRFbGVtZW50O1xuICAgICAgICBjb25zdCBmb3JtID0gRE9NLnNlbGVjdEVsZW0oJyNzdWJtaXROb3RlJykucGFyZW50RWxlbWVudDtcblxuICAgICAgICBjb25zdCBkZWwgPSBET00uZWxlbWVudEluaXQoJ2J1dHRvbicsIHsnY2xhc3MnOiAnZGVsZXRlQ2hlY2sgbm9uZSd9LCdkZWxldGUnICkgLy90byBlZGl0IHdoZW4gY3JlYXRpbmcgZHJvcGRvd25cbiAgICAgICBcbiAgICAgICAgY29uc3QgY2hlY2tib3ggPSBET00uZWxlbWVudEluaXQoJ2lucHV0Jywgeyd0eXBlJzonY2hlY2tib3gnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdpZCc6IGBjaGVjayR7cHJvamVjdC5kYXRhc2V0LmlkfSR7Zm9ybS5kYXRhc2V0LmlkfSR7aW5wdXQudmFsdWV9YCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnY2xhc3MnOidjaGVjaycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2RhdGEtY2xhc3MnOmBjaGlsZCR7Zm9ybS5kYXRhc2V0LmlkfWB9KTtcbiAgICAgICAgY29uc3QgbGFiZWwgPSBET00uZWxlbWVudEluaXQoJ2xhYmVsJywgeydmb3InOiBgJHtpbnB1dC52YWx1ZX1gLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdjbGFzcyc6ICdlZGl0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdkYXRhLWNsYXNzJzpgY2hpbGQke2Zvcm0uZGF0YXNldC5pZH1gfSxgJHtpbnB1dC52YWx1ZX1gKTtcbiAgICAgICAgY29uc3QgYnIgPSBET00uZWxlbWVudEluaXQoJ2JyJyx7J2RhdGEtY2xhc3MnOmBjaGlsZCR7Zm9ybS5kYXRhc2V0LmlkfWB9KTtcblxuICAgICAgIFxuICAgICAgICBsYWJlbC5hcHBlbmRDaGlsZChkZWwpO1xuICAgICAgICBmb3JtLmFwcGVuZENoaWxkKGNoZWNrYm94KTtcbiAgICAgICAgZm9ybS5hcHBlbmRDaGlsZChsYWJlbCk7XG4gICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQoYnIpO1xuXG4gICAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IHN1Ym1pdEl0ZW0gPSBmdW5jdGlvbigpe1xuICAgIFxuICAgIGNvbnN0IGlucHV0ID0gRE9NLnNlbGVjdEVsZW0oJyN0ZW1wb3JhcnlJbnB1dCcpO1xuICAgIGNvbnN0IGZvcm0gPSBET00uc2VsZWN0RWxlbSgnI3N1Ym1pdE5vdGUnKS5wYXJlbnRFbGVtZW50O1xuICAgIGNvbnN0IHJlbW92ZSA9IERPTS5zZWxlY3RFbGVtKGAjcmVtb3ZlJHtpbnB1dC5wYXJlbnRFbGVtZW50LmRhdGFzZXQuaWR9JHtmb3JtLmRhdGFzZXQuaWR9YCk7XG4gICAgXG4gICAgaWYgKGlucHV0LnZhbHVlID09PSAnJyl7cmV0dXJufTtcblxuICAgIGlmIChmb3JtLmNsYXNzTGlzdC5jb250YWlucygnY2hlY2tib3gnKSl7XG4gICAgICAgIF9nZW5lcmF0ZUNoZWNrSXRlbSgpO1xuICAgICAgICBpbnB1dC5jbGFzc0xpc3QudG9nZ2xlKCdub25lJywgdHJ1ZSk7ICAgICAgICBcbiAgICAgICAgcmV0dXJuXG4gICAgfVxuICAgIFxuICAgIGNvbnN0IHRleHQgPSBET00uZWxlbWVudEluaXQoJ3AnLCB7J2NsYXNzJzondGV4dCBlZGl0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2RhdGEtY2xhc3MnOmBjaGlsZCR7Zm9ybS5kYXRhc2V0LmlkfWB9LCBgJHtpbnB1dC52YWx1ZX1gKTtcblxuICAgIGZvcm0uYXBwZW5kQ2hpbGQodGV4dCk7XG4gICAgcmVtb3ZlLmNsYXNzTGlzdC50b2dnbGUoJ25vbmUnLGZhbHNlKTtcblxuICAgIHJldHVyblxuXG4gICB9XG5cbiAgIGNvbnN0IGRlbGV0ZUl0ZW0gPSBmdW5jdGlvbihldmVudCl7XG4gICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICBldmVudC50YXJnZXQucGFyZW50RWxlbWVudC5yZW1vdmUoKTtcbiAgICByZXR1cm5cbiAgIH1cbiAgIFxuICAgXG4gICBjb25zdCBkZWxldGVDaGVjayA9IGZ1bmN0aW9uKGV2ZW50KXtcbiAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgY29uc3QgbGFiZWwgPSBldmVudC50YXJnZXQucGFyZW50RWxlbWVudFxuICAgICAgIGNvbnN0IGJyID0gbGFiZWwubmV4dEVsZW1lbnRTaWJsaW5nO1xuICAgICAgIGNvbnN0IGNoZWNrID0gbGFiZWwucHJldmlvdXNFbGVtZW50U2libGluZztcbiAgICAgICBjb25zdCBmb3JtID0gY2hlY2sucGFyZW50RWxlbWVudDsgICAgXG5cbiAgICAgICBici5yZW1vdmUoKSBcbiAgICAgICBjaGVjay5yZW1vdmUoKSBcbiAgICAgICBsYWJlbC5yZW1vdmUoKVxuICAgICAgIFxuICAgICAgIGNvbnN0IGZvcm1DaGlsZHJlbiA9IEFycmF5LmZyb20oZm9ybS5jaGlsZHJlbik7XG4gICAgICAgY29uc3QgY2hpbGQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1jbGFzcz1jaGlsZCR7Zm9ybS5kYXRhc2V0LmlkfV1gKVxuICAgICAgICEoZm9ybUNoaWxkcmVuLmluY2x1ZGVzKGNoaWxkKSkgPyBmb3JtLnJlbW92ZSgpIDogZmFsc2U7XG4gICAgICAgXG4gICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgbW92ZUl0ZW0gPSBmdW5jdGlvbihldmVudCl7XG4gICAgICAgIGNvbnN0IHRhcmdldCA9IGV2ZW50LnRhcmdldC5jbG9zZXN0KCcudG9Eb05vdGVJbnB1dCcpIHx8IGV2ZW50LnRhcmdldC5jbG9zZXN0KCcucHJvamVjdCcpXG4gICAgICAgIC8vbGV0IHNoaWZ0WCA9XG4gICAgICAgIC8vbGV0IHNoaWZ0WSA9IFxuXG4gICAgfVxuXG4gICAgIHJldHVybiB7XG4gICAgICAgICBjcmVhdGVQcm9qZWN0LFxuICAgICAgICAgY3JlYXRlVG9Eb05vdGUsXG4gICAgICAgICByZXZlYWxDcmVhdGVGb3JtLFxuICAgICAgICAgcmVzZXRDcmVhdGVGb3JtLFxuICAgICAgICAgdG9nZ2xlU2l6ZSxcbiAgICAgICAgIGNob29zZVRvRG9UaXRsZUZvcm0sXG4gICAgICAgICBzdWJtaXRUb0RvVGl0bGUsXG4gICAgICAgICBjaG9vc2VOb3RlVHlwZSxcbiAgICAgICAgIG5vdGVUeXBlR2VuZXJhdG9yLFxuICAgICAgICAgZGVsZXRlRm9ybXMsXG4gICAgICAgICBkaXNhYmxlQnRucyxcbiAgICAgICAgIGVuYWJsZUJ0bnMsXG4gICAgICAgICBjbGVhblRvRG9Gb3JtLFxuICAgICAgICAgbW9kaWZ5RWxlbWVudCxcbiAgICAgICAgIGNhbmNlbE5vdGUsXG4gICAgICAgICByZXZlcnRNb2RpZmllZEVsZW1lbnQsXG4gICAgICAgICBhZGROZXdDaGVjayxcbiAgICAgICAgIGdlbmVyYXRlTmV3QWRkQ2hlY2ssXG4gICAgICAgICBzdWJtaXRJdGVtLFxuICAgICAgICAgc3VibWl0TW9kaWZpZWRFbGVtZW50LFxuICAgICAgICAgZGVsZXRlSXRlbSxcbiAgICAgICAgIGRlbGV0ZUNoZWNrLFxuICAgICAgICAgXG4gICAgIH1cbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0ICogYXMgcHJvamVjdHMgZnJvbSAnLi9wcm9qZWN0cyc7XG5pbXBvcnQgeyBET01HZW5lcmFsIH0gZnJvbSBcIi4vaGVscGVycy9ET01cIjtcbmltcG9ydCB7IHRlbXBsYXRlRE9NU3RydWN0cyB9IGZyb20gJy4vcHJvamVjdHNET00nO1xuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgeyBwcm9qZWN0RXZlbnRzIH0gZnJvbSAnLi9wcm9qZWN0ZXZlbnRzJztcblxuXG5jb25zdCByZXZlYWxUb0RvID0gKGZ1bmN0aW9uKCl7IFxuICAgIFxuICAgIC8vQ2FsbGluZyBtb2R1bGUgT2JqZWN0c1xuICAgIGNvbnN0IERPTSA9IERPTUdlbmVyYWwoKTtcbiAgICBjb25zdCBzdHJ1Y3RzID0gdGVtcGxhdGVET01TdHJ1Y3RzKCk7XG4gICAgY29uc3QgbWFpbiA9IHByb2plY3RzLm1haW5JbnRlcmZhY2UoKTtcbiAgICBcblxuICAgIC8vTW9kdWxlIG1ldGhvZHMgdG8gYmUgdXNlZFxuICAgIGNvbnN0IG5ld1Byb2ogPSBtYWluLm5ld1Byb2o7XG4gICAgY29uc3QgbG9jYWxTdG9yZSA9IG1haW4udHJhbnNmZXJUb0xvY2FsU3RvcmFnZTtcbiAgICBjb25zdCBhcHBlbmRUb1Byb2ogPSBtYWluLmFwcGVuZFRvUHJvajtcbiAgICBjb25zdCByZW1vdmVJdGVtID0gbWFpbi5yZW1vdmVJdGVtO1xuICAgIGNvbnN0IGFwcGVuZE5vdGVUb0l0ZW0gPSBtYWluLmFwcGVuZE5vdGVUb0l0ZW1cbiAgICBjb25zdCByZWNvcmRDaGVjayA9IG1haW4ucmVjb3JkQ2hlY2s7XG4gICAgY29uc3QgZGVsZXRlQ2hlY2tGcm9tU3RvcmFnZSA9IG1haW4uZGVsZXRlQ2hlY2tGcm9tU3RvcmFnZTtcbiAgICBjb25zdCBtb2RpZnlJblN0b3JhZ2UgPSBtYWluLm1vZGlmeUluU3RvcmFnZTtcbiAgICBjb25zdCBjcmVhdGVQcm9qZWN0ID0gc3RydWN0cy5jcmVhdGVQcm9qZWN0O1xuICAgIGNvbnN0IHJldmVhbENyZWF0ZUZvcm0gPSBzdHJ1Y3RzLnJldmVhbENyZWF0ZUZvcm07XG4gICAgY29uc3QgcmVzZXRDcmVhdGVGb3JtID0gc3RydWN0cy5yZXNldENyZWF0ZUZvcm07XG4gICAgY29uc3QgdG9nZ2xlU2l6ZSA9IHN0cnVjdHMudG9nZ2xlU2l6ZTtcbiAgICBjb25zdCBjaG9vc2VUb0RvVGl0bGVGb3JtID0gc3RydWN0cy5jaG9vc2VUb0RvVGl0bGVGb3JtO1xuICAgIGNvbnN0IHN1Ym1pdFRvRG9UaXRsZSA9IHN0cnVjdHMuc3VibWl0VG9Eb1RpdGxlO1xuICAgIGNvbnN0IGNob29zZU5vdGVUeXBlID0gc3RydWN0cy5jaG9vc2VOb3RlVHlwZTtcbiAgICBjb25zdCBub3RlVHlwZUdlbmVyYXRvciA9IHN0cnVjdHMubm90ZVR5cGVHZW5lcmF0b3I7XG4gICAgY29uc3QgZGVsZXRlRm9ybXMgPSBzdHJ1Y3RzLmRlbGV0ZUZvcm1zO1xuICAgIGNvbnN0IGRpc2FibGVCdG5zID0gc3RydWN0cy5kaXNhYmxlQnRucztcbiAgICBjb25zdCBjcmVhdGVUb0RvTm90ZSA9IHN0cnVjdHMuY3JlYXRlVG9Eb05vdGU7XG4gICAgY29uc3QgZW5hYmxlQnRucyA9IHN0cnVjdHMuZW5hYmxlQnRucztcbiAgICBjb25zdCBjbGVhblRvRG9Gb3JtID0gc3RydWN0cy5jbGVhblRvRG9Gb3JtO1xuICAgIGNvbnN0IGFkZE5ld0NoZWNrID0gc3RydWN0cy5hZGROZXdDaGVjaztcbiAgICBjb25zdCBjYW5jZWxOb3RlID0gc3RydWN0cy5jYW5jZWxOb3RlO1xuICAgIGNvbnN0IHJldmVydE1vZGlmaWVkRWxlbWVudCA9IHN0cnVjdHMucmV2ZXJ0TW9kaWZpZWRFbGVtZW50O1xuICAgIGNvbnN0IG1vZGlmeUVsZW1lbnQgPSBzdHJ1Y3RzLm1vZGlmeUVsZW1lbnQ7XG4gICAgY29uc3Qgc3VibWl0SXRlbSA9IHN0cnVjdHMuc3VibWl0SXRlbTtcbiAgICBjb25zdCBnZW5lcmF0ZU5ld0FkZENoZWNrID0gc3RydWN0cy5nZW5lcmF0ZU5ld0FkZENoZWNrO1xuICAgIGNvbnN0IHN1Ym1pdE1vZGlmaWVkRWxlbWVudCA9IHN0cnVjdHMuc3VibWl0TW9kaWZpZWRFbGVtZW50O1xuICAgIGNvbnN0IGRlbGV0ZUl0ZW0gPSBzdHJ1Y3RzLmRlbGV0ZUl0ZW07XG4gICAgY29uc3QgZGVsZXRlQ2hlY2sgPSBzdHJ1Y3RzLmRlbGV0ZUNoZWNrO1xuICAgIGNvbnN0IGRlbGVnYXRvciA9IHByb2plY3RFdmVudHMuZGVsZWdhdG9yO1xuXG4gICAgXG4gICAgXG4gICAgLy9FdmVudCBTdWJzY3JpcHRpb25zXG4gICAgcHJvamVjdEV2ZW50cy5zdWJzY3JpYmUoJ3ZpZXcnLCB0b2dnbGVTaXplKTtcbiAgICBwcm9qZWN0RXZlbnRzLnN1YnNjcmliZSgnY3JlYXRlJywgY3JlYXRlUHJvamVjdCk7XG4gICAgcHJvamVjdEV2ZW50cy5zdWJzY3JpYmUoJ2NyZWF0ZScsIHJlc2V0Q3JlYXRlRm9ybSk7XG4gICAgcHJvamVjdEV2ZW50cy5zdWJzY3JpYmUoJ2NyZWF0ZScsIG5ld1Byb2opO1xuICAgIHByb2plY3RFdmVudHMuc3Vic2NyaWJlKCdzYXZlZCcsIGxvY2FsU3RvcmUpO1xuICAgIHByb2plY3RFdmVudHMuc3Vic2NyaWJlKCdyZXZlYWwnLCByZXZlYWxDcmVhdGVGb3JtKTtcbiAgICBwcm9qZWN0RXZlbnRzLnN1YnNjcmliZSgnY2hvb3NlVGl0bGUnLCBkaXNhYmxlQnRucyk7XG4gICAgcHJvamVjdEV2ZW50cy5zdWJzY3JpYmUoJ2Nob29zZVRpdGxlJywgY2hvb3NlVG9Eb1RpdGxlRm9ybSk7XG4gICAgcHJvamVjdEV2ZW50cy5zdWJzY3JpYmUoJ2lucHV0T3JMaXN0Jywgc3VibWl0VG9Eb1RpdGxlKTtcbiAgICBwcm9qZWN0RXZlbnRzLnN1YnNjcmliZSgnaW5wdXRPckxpc3QnLCBjaG9vc2VOb3RlVHlwZSk7XG4gICAgcHJvamVjdEV2ZW50cy5zdWJzY3JpYmUoJ25vdGVUb0RvVHlwZScsIGRlbGV0ZUZvcm1zKVxuICAgIHByb2plY3RFdmVudHMuc3Vic2NyaWJlKCdub3RlVG9Eb1R5cGUnLCBub3RlVHlwZUdlbmVyYXRvcik7XG4gICAgcHJvamVjdEV2ZW50cy5zdWJzY3JpYmUoJ2RlbGV0ZU5vdGVUeXBlRm9ybScsIGRpc2FibGVCdG5zKTtcbiAgICBwcm9qZWN0RXZlbnRzLnN1YnNjcmliZSgnZGVsZXRlTm90ZVR5cGVGb3JtJywgZGVsZXRlRm9ybXMpO1xuICAgIHByb2plY3RFdmVudHMuc3Vic2NyaWJlKCdhYm9ydE5vdGVUeXBlRm9ybScsIGRlbGV0ZUZvcm1zKTtcbiAgICBwcm9qZWN0RXZlbnRzLnN1YnNjcmliZSgnYWJvcnROb3RlVHlwZUZvcm0nLCBlbmFibGVCdG5zKTtcbiAgICBwcm9qZWN0RXZlbnRzLnN1YnNjcmliZSgnYWJvcnROb3RlVHlwZUZvcm0nLCBkZWxldGVGb3Jtcyk7XG4gICAgcHJvamVjdEV2ZW50cy5zdWJzY3JpYmUoJ2NhbmNlbE5vdGUnLCBjYW5jZWxOb3RlKTtcbiAgICBwcm9qZWN0RXZlbnRzLnN1YnNjcmliZSgnY2FuY2VsTm90ZScsIGVuYWJsZUJ0bnMpO1xuICAgIHByb2plY3RFdmVudHMuc3Vic2NyaWJlKCdjYW5jZWxOb3RlJywgY2xlYW5Ub0RvRm9ybSk7ICAgICAgICBcbiAgICBwcm9qZWN0RXZlbnRzLnN1YnNjcmliZSgnbmV3Q2hlY2tJdGVtJywgYWRkTmV3Q2hlY2spO1xuICAgIHByb2plY3RFdmVudHMuc3Vic2NyaWJlKCdjcmVhdGVOb3RlJywgY3JlYXRlVG9Eb05vdGUpO1xuICAgIHByb2plY3RFdmVudHMuc3Vic2NyaWJlKCdzdWJtaXROb3RlJywgc3VibWl0SXRlbSk7XG4gICAgcHJvamVjdEV2ZW50cy5zdWJzY3JpYmUoJ3N1Ym1pdE5vdGUnLCBlbmFibGVCdG5zKTtcbiAgICBwcm9qZWN0RXZlbnRzLnN1YnNjcmliZSgnc3VibWl0Tm90ZScsIGFwcGVuZFRvUHJvaik7XG4gICAgcHJvamVjdEV2ZW50cy5zdWJzY3JpYmUoJ3N1Ym1pdE5vdGUnLCBhcHBlbmROb3RlVG9JdGVtKTtcbiAgICBwcm9qZWN0RXZlbnRzLnN1YnNjcmliZSgnc3VibWl0Tm90ZScsIGNsZWFuVG9Eb0Zvcm0pO1xuICAgIHByb2plY3RFdmVudHMuc3Vic2NyaWJlKCd1cGRhdGVDaGVja0l0ZW0nLCBnZW5lcmF0ZU5ld0FkZENoZWNrKTtcbiAgICBwcm9qZWN0RXZlbnRzLnN1YnNjcmliZSgnbW9kaWZ5RWxlbScsIG1vZGlmeUVsZW1lbnQpO1xuICAgIHByb2plY3RFdmVudHMuc3Vic2NyaWJlKCdyZXZlcnQnLCByZXZlcnRNb2RpZmllZEVsZW1lbnQpO1xuICAgIHByb2plY3RFdmVudHMuc3Vic2NyaWJlKCdzdWJtaXRNb2QnLCBtb2RpZnlJblN0b3JhZ2UpO1xuICAgIHByb2plY3RFdmVudHMuc3Vic2NyaWJlKCdzdWJtaXRNb2QnLCBzdWJtaXRNb2RpZmllZEVsZW1lbnQpXG4gICAgcHJvamVjdEV2ZW50cy5zdWJzY3JpYmUoJ2RlbGV0ZScsIHJlbW92ZUl0ZW0pOyAgICBcbiAgICBwcm9qZWN0RXZlbnRzLnN1YnNjcmliZSgnZGVsZXRlJywgZGVsZXRlSXRlbSk7XG4gICAgcHJvamVjdEV2ZW50cy5zdWJzY3JpYmUoJ2RlbGV0ZUNoZWNrJywgZGVsZXRlQ2hlY2tGcm9tU3RvcmFnZSk7XG4gICAgcHJvamVjdEV2ZW50cy5zdWJzY3JpYmUoJ2RlbGV0ZUNoZWNrJywgZGVsZXRlQ2hlY2spO1xuICAgIHByb2plY3RFdmVudHMuc3Vic2NyaWJlKCdyZWNvcmRDaGVjaycsIHJlY29yZENoZWNrKTtcbiAgICBcbiAgICBcblxuXG4gICAgLy9Jbml0aWFsIGVsZW1lbnRzXG4gICAgY29uc3QgbWFpbkNvbnRhaW5lciA9IChmdW5jdGlvbigpe1xuICAgIFxuICAgICAgICBjb25zdCBjb250YWluZXIgPSAgRE9NLmVsZW1lbnRJbml0KCdkaXYnLHsnaWQnOidjb250YWluZXInfSlcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjb250YWluZXIpXG4gICAgICAgIHJldHVybiBjb250YWluZXJcbiAgICAgXG59KSgpXG5cbiAgICBjb25zdCBoZWFkZXIgPSAoZnVuY3Rpb24oKXtcbiAgICAgICAgXG4gICAgICAgIC8vSW5pdGlhbGlzZSBlbGVtZW50c1xuICAgICAgICBjb25zdCBoZWFkID0gRE9NLmVsZW1lbnRJbml0KCdoZWFkZXInLCB7J2lkJzonaGVhZGVyJ30pO1xuICAgICAgICBjb25zdCB0aXRsZSA9IERPTS5lbGVtZW50SW5pdCgnaDEnLHsnaWQnOiAndGl0bGUnfSwgJ1RoaXMgaXMgeW91ciBUby1EbyBsaXN0Jyk7XG4gICAgICAgIGNvbnN0IHJldmVhbEZvcm0gPSBET00uZWxlbWVudEluaXQoJ2J1dHRvbicseydjbGFzcyc6J3JldmVhbEZvcm0nfSwnTmV3IFByb2plY3QnKTtcbiAgICAgICAgXG4gICAgICAgIC8vQWRkIGhlYWRlciBldmVudCBsaXN0ZW5lclxuICAgICAgICBoZWFkLm9uY2xpY2sgPSBkZWxlZ2F0b3I7XG4gICAgICAgIFxuICAgICAgICAvL0FwcGVuZCB0byBkb2N1bWVudFxuICAgICAgICBoZWFkLmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgICAgICAgaGVhZC5hcHBlbmRDaGlsZChyZXZlYWxGb3JtKTtcbiAgICAgICAgbWFpbkNvbnRhaW5lci5hcHBlbmRDaGlsZChoZWFkKTtcblxuICAgICAgICByZXR1cm4gaGVhZDtcbn0pKClcbiAgICBcbiAgICBjb25zdCBkZWZhdWx0UHJvamVjdCA9IChmdW5jdGlvbigpe1xuICAgICAgICBcbiAgICB9KSgpXG5cbiAgICBcbiAgICBjb25zdCByZW5kZXJMb2NhbFN0b3JhZ2UgPSBmdW5jdGlvbigpe1xuICAgICAgICAvL1RoaXMgd2lsbCB1c2UgbG9jYWxTdG9yYWdlIHRvIGNoZWNrXG4gICAgICAgIC8vaWYgdGhlIHVzZXIgaGFzIGFueSBzYXZlZCBpbnN0YW5jZXNcbiAgICAgICAgLy9vZiBwcm9qZWN0cyBhbmQgcmVuZGVyIHRoZW0gaWYgc28uIFxuICAgICAgICAvL1JlbWVtYmVyIHRvIHRha2UgYWNjb3VudCBhbnkgZGlmZmVyZW5jZXMgaW4gZGF0YSBiZXR3ZWVuIGJhY2tlbmQgYW5kIERPTVxuICAgIH1cblxuXG4gICAgIFxuICAgIGNvbnN0IGNyZWF0ZUZvcm0gPSAoZnVuY3Rpb24oKXtcbiAgICAgICAgIGNvbnN0IGZvcm0gPSBET00uZWxlbWVudEluaXQoJ2Zvcm0nLHsnaWQnOidjcmVhdGVGb3JtJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnY2xhc3MnOidub25lIHByb2plY3RGb3JtIHRyYW5zaXRGb3JtJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQoRE9NLmVsZW1lbnRJbml0KCdicicpKTsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgZm9ybS5hcHBlbmRDaGlsZChET00uZWxlbWVudEluaXQoJ2xhYmVsJyx7J2Zvcic6J3RpdGxlSW5wJ30sJ1Byb2plY3QgVGl0bGUnKSlcbiAgICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQoRE9NLmVsZW1lbnRJbml0KCdicicpKTtcbiAgICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQoRE9NLmVsZW1lbnRJbml0KCdpbnB1dCcseyd0eXBlJzondGV4dCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2lkJyA6ICd0aXRsZUlucCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2F1dG9jb21wbGV0ZSc6ICdvZmYnLCAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ25hbWUnOid0aXRsZUlucCd9KSk7XG4gICAgICAgICBmb3JtLmFwcGVuZENoaWxkKERPTS5lbGVtZW50SW5pdCgnYnV0dG9uJyx7J3R5cGUnOidzdWJtaXQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnY2xhc3MnOiAnc3VibWl0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdpZCc6J3N1Ym1pdCd9LCdzdWJtaXQnKSk7XG4gICAgICAgICBcbiBcbiAgICAgICAgIGZvcm0ub25zdWJtaXQgPSBkZWxlZ2F0b3I7XG4gICAgICAgICBtYWluQ29udGFpbmVyLmFwcGVuZENoaWxkKGZvcm0pO1xuICAgICAgICAgcmV0dXJuIGZvcm07IFxufSkoKVxuICAgICBcblxufSkoKVxuXG4gICAgIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9