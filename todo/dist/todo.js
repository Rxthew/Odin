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
___CSS_LOADER_EXPORT___.push([module.id, "html {\n    box-sizing: border-box;\n\n}\n\n\n*, *:before, *:after{\n    box-sizing: inherit;\n    margin: 0;\n    padding: 0;\n}\n\nbody {\n    display: flex;\n}\n\n.hidden {\n    visibility: hidden\n}\n\n.project {\n    border: 1px solid black;\n    cursor: pointer;\n}\n\n.none {\n    display: none;\n}\n\n.toDoNoteInput {\n    border: 1px solid black;\n}\n\n.text {\n    white-space: pre-wrap;\n}\n\n.modInput {\n    white-space: pre-wrap;\n}\n\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,sBAAsB;;AAE1B;;;AAGA;IACI,mBAAmB;IACnB,SAAS;IACT,UAAU;AACd;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI;AACJ;;AAEA;IACI,uBAAuB;IACvB,eAAe;AACnB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,uBAAuB;AAC3B;;AAEA;IACI,qBAAqB;AACzB;;AAEA;IACI,qBAAqB;AACzB","sourcesContent":["html {\n    box-sizing: border-box;\n\n}\n\n\n*, *:before, *:after{\n    box-sizing: inherit;\n    margin: 0;\n    padding: 0;\n}\n\nbody {\n    display: flex;\n}\n\n.hidden {\n    visibility: hidden\n}\n\n.project {\n    border: 1px solid black;\n    cursor: pointer;\n}\n\n.none {\n    display: none;\n}\n\n.toDoNoteInput {\n    border: 1px solid black;\n}\n\n.text {\n    white-space: pre-wrap;\n}\n\n.modInput {\n    white-space: pre-wrap;\n}\n\n"],"sourceRoot":""}]);
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
           break;
         case event.target.classList.contains('remove') : projectEvents.publish('delete', event);
                                                          projectEvents.publish('saved');
           break;
         case event.target.classList.contains('deleteCheck') : projectEvents.publish('deleteCheck', event);
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
   toDoNote.noteStorage = noteStorage;

   const type = function(type='checkbox'){
      return type
   }
   
   toDoNote.name = name;
   toDoNote.type = type();
   
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
   
   return toDoNote
}

//

//Template for a single project

const singleProj = function(name){

   const projStorage = new Array();
   const project = (0,_helpers_base__WEBPACK_IMPORTED_MODULE_0__.baseCreate)(projStorage);
   project.name = name;
   project.projStorage = projStorage

   const addToProject = function(name){
      const todo = singletoDoNote(name)
      project.add(todo);
                                       
   }

   const removeFromProject = function(index){
      const todo = projstorage[index];
      project.remove(todo, index);  
   } 

   const movetoDo = function(index, target){
      project.move(index, target);
         
   }

   return {project,
          addToProject, 
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

   const appendToProj = function(event){
      const index = _findProj(event);
      const currentProj = _overallStorage[index];

      const form = event.target.parentElement;
      const formChildren = Array.from(form.children);
      const title = formChildren.filter(child =>  child.classList.contains('itemTitle'))
      const name = title[0].firstChild.nodeValue;
      currentProj.addToProject(name)
      
      return

   }

   const removeProj = function(event){
      const index = _findProj(event);
      const proj = _overallStorage[index];
      event.target.parentElement.classList.contains('project') ? allToDo.remove(proj): false;

      return

   }
  
   
   return {
      newProj,
      transferToLocalStorage,
      appendToProj,
      removeProj,
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
        proj.appendChild(DOM.elementInit('div',{ 'class':'none',
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
             const form =  DOM.elementInit('form', {'class': 'chooseTitleForm',
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

         const form =  DOM.elementInit('form', {'class': 'chooseNoteType',
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
        let hidden = DOM.selectElem('#createForm');
        hidden.classList.toggle('hidden', false);
        
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


        //remember createnote thing will apply to the backend as well,
        // so when you pass in that argument, that's when the 'type'
        // of the note will be stored in there. 
        
        
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
        temporaryInput.oninput = delegator;
    
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
        const form = DOM.selectElem('#submitNote').parentElement;

        const del = DOM.elementInit('button', {'class': 'deleteCheck none'},'delete' ) //to edit when creating dropdown
       
        const checkbox = DOM.elementInit('input', {'type':'checkbox',
                                                   'data-class':`child${form.dataset.id}`});
        const label = DOM.elementInit('label', {'for': `${input.value}`,
                                                 'class': 'edit',
                                                'data-class':`child${form.dataset.id}`},`${input.value}`);
        const br = DOM.elementInit('br',{'data-class':`child${form.dataset.id}`});

        input.value = '';
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
        remove.classList.toggle('none',false);
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

     return {
         createProject,
         createToDoNote,
         revealCreateForm,
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
    const removeProj = main.removeProj;
    const createProject = structs.createProject;
    const revealCreateForm = structs.revealCreateForm;
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
    _projectevents__WEBPACK_IMPORTED_MODULE_4__.projectEvents.subscribe('create', newProj);
    _projectevents__WEBPACK_IMPORTED_MODULE_4__.projectEvents.subscribe('saved', localStore);
    _projectevents__WEBPACK_IMPORTED_MODULE_4__.projectEvents.subscribe('reveal', revealCreateForm);
    _projectevents__WEBPACK_IMPORTED_MODULE_4__.projectEvents.subscribe('chooseTitle', disableBtns);
    _projectevents__WEBPACK_IMPORTED_MODULE_4__.projectEvents.subscribe('chooseTitle', chooseToDoTitleForm);
    _projectevents__WEBPACK_IMPORTED_MODULE_4__.projectEvents.subscribe('inputOrList', submitToDoTitle);
    _projectevents__WEBPACK_IMPORTED_MODULE_4__.projectEvents.subscribe('inputOrList', chooseNoteType);
    _projectevents__WEBPACK_IMPORTED_MODULE_4__.projectEvents.subscribe('noteToDoType', deleteForms)
    _projectevents__WEBPACK_IMPORTED_MODULE_4__.projectEvents.subscribe('noteToDoType', noteTypeGenerator);
    //projectEvents.subscribe('noteToDoType', function Store selected type to be retrieved by backend later.)
    _projectevents__WEBPACK_IMPORTED_MODULE_4__.projectEvents.subscribe('deleteNoteTypeForm', disableBtns);
    _projectevents__WEBPACK_IMPORTED_MODULE_4__.projectEvents.subscribe('deleteNoteTypeForm', deleteForms);
    _projectevents__WEBPACK_IMPORTED_MODULE_4__.projectEvents.subscribe('abortNoteTypeForm', deleteForms);
    _projectevents__WEBPACK_IMPORTED_MODULE_4__.projectEvents.subscribe('abortNoteTypeForm', enableBtns);
    _projectevents__WEBPACK_IMPORTED_MODULE_4__.projectEvents.subscribe('abortNoteTypeForm', deleteForms);
    _projectevents__WEBPACK_IMPORTED_MODULE_4__.projectEvents.subscribe('cancelNote', cancelNote);
    _projectevents__WEBPACK_IMPORTED_MODULE_4__.projectEvents.subscribe('cancelNote', enableBtns);
    _projectevents__WEBPACK_IMPORTED_MODULE_4__.projectEvents.subscribe('cancelNote', cleanToDoForm);        
    _projectevents__WEBPACK_IMPORTED_MODULE_4__.projectEvents.subscribe('newCheckItem', addNewCheck);
    //projectEvents.subscribe('createNote', functionRe:BackendUpdate  with user submission & including type chosen && whether items are checked or not (if checkbox), remember localStorage update as well.)
    _projectevents__WEBPACK_IMPORTED_MODULE_4__.projectEvents.subscribe('createNote', createToDoNote);
    _projectevents__WEBPACK_IMPORTED_MODULE_4__.projectEvents.subscribe('submitNote', submitItem);
    _projectevents__WEBPACK_IMPORTED_MODULE_4__.projectEvents.subscribe('submitNote', enableBtns);
    _projectevents__WEBPACK_IMPORTED_MODULE_4__.projectEvents.subscribe('submitNote', appendToProj)
    _projectevents__WEBPACK_IMPORTED_MODULE_4__.projectEvents.subscribe('submitNote', cleanToDoForm);
    _projectevents__WEBPACK_IMPORTED_MODULE_4__.projectEvents.subscribe('updateCheckItem', generateNewAddCheck);
    _projectevents__WEBPACK_IMPORTED_MODULE_4__.projectEvents.subscribe('modifyElem', modifyElement);
    _projectevents__WEBPACK_IMPORTED_MODULE_4__.projectEvents.subscribe('revert', revertModifiedElement);
    _projectevents__WEBPACK_IMPORTED_MODULE_4__.projectEvents.subscribe('submitMod', submitModifiedElement)
    _projectevents__WEBPACK_IMPORTED_MODULE_4__.projectEvents.subscribe('delete', deleteItem);
    _projectevents__WEBPACK_IMPORTED_MODULE_4__.projectEvents.subscribe('delete', removeProj);
    _projectevents__WEBPACK_IMPORTED_MODULE_4__.projectEvents.subscribe('deleteCheck', deleteCheck);
    


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
                                              'class':'hidden projectForm'
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFFUDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakUwQzs7QUFFMUMsb0JBQW9CLHVEQUFNOztBQUUxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEQ0Qzs7O0FBRzVDOztBQUVPOzs7QUFHUDtBQUNBLG9CQUFvQix5REFBVTtBQUM5Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFTzs7QUFFUDtBQUNBLG1CQUFtQix5REFBVTtBQUM3QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsV0FBVztBQUNYO0FBQ0E7O0FB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RUFBdUI7QUFDM0IsSUFBSSxtRUFBdUI7QUFDM0IsSUFBSSxtRUFBdUI7QUFDM0IsSUFBSSxtRUFBdUI7QUFDM0I7QUFDQSxJQUFJLG1FQUF1QjtBQUMzQixJQUFJLG1FQUF1QjtBQUMzQixJQUFJLG1FQUF1QjtBQUMzQixJQUFJLG1FQUF1QjtBQUMzQixJQUFJLG1FQUF1QjtBQUMzQixJQUFJLG1FQUF1QjtBQUMzQixJQUFJLG1FQUF1QjtBQUMzQixJQUFJLG1FQUF1QjtBQUMzQixJQUFJLG1FQUF1QjtBQUMzQixJQUFJLG1FQUF1QjtBQUMzQixJQUFJLG1FQUF1QjtBQUMzQixJQUFJLG1FQUF1QjtBQUMzQjs7O0FBR0E7QUFDQTtBQUNBO0FBQ0Esa0RBQWtELGlCQUFpQjtBQUNuRTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBLGdEQUFnRCxjQUFjO0FBQzlELDRDQUE0QyxjQUFjO0FBQzFELHFEQUFxRCxxQkFBcUI7QUFDMUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0EsOENBQThDO0FBQzlDO0FBQ0EsNkNBQTZDO0FBQzdDO0FBQ0EsbURBQW1ELGlCQUFpQjtBQUNwRTtBQUNBLG1EQUFtRDtBQUNuRDtBQUNBO0FBQ0Esc0VBQXNFO0FBQ3RFLG9EQUFvRDtBQUNwRDtBQUNBLG9FQUFvRTtBQUNwRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEOztBQUVBLENBQUM7O0FBRUQsSSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8vLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9oZWxwZXJzL0RPTS5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL2hlbHBlcnMvYmFzZS5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL2hlbHBlcnMvZXZlbnRzLmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvcHJvamVjdGV2ZW50cy5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL3Byb2plY3RzLmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvcHJvamVjdHNET00uanMiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImh0bWwge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcblxcbn1cXG5cXG5cXG4qLCAqOmJlZm9yZSwgKjphZnRlcntcXG4gICAgYm94LXNpemluZzogaW5oZXJpdDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLmhpZGRlbiB7XFxuICAgIHZpc2liaWxpdHk6IGhpZGRlblxcbn1cXG5cXG4ucHJvamVjdCB7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5ub25lIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLnRvRG9Ob3RlSW5wdXQge1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG59XFxuXFxuLnRleHQge1xcbiAgICB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7XFxufVxcblxcbi5tb2RJbnB1dCB7XFxuICAgIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDtcXG59XFxuXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLHNCQUFzQjs7QUFFMUI7OztBQUdBO0lBQ0ksbUJBQW1CO0lBQ25CLFNBQVM7SUFDVCxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0k7QUFDSjs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixlQUFlO0FBQ25COztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLHFCQUFxQjtBQUN6QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJodG1sIHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG5cXG59XFxuXFxuXFxuKiwgKjpiZWZvcmUsICo6YWZ0ZXJ7XFxuICAgIGJveC1zaXppbmc6IGluaGVyaXQ7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG59XFxuXFxuYm9keSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5oaWRkZW4ge1xcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW5cXG59XFxuXFxuLnByb2plY3Qge1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ubm9uZSB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi50b0RvTm90ZUlucHV0IHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxufVxcblxcbi50ZXh0IHtcXG4gICAgd2hpdGUtc3BhY2U6IHByZS13cmFwO1xcbn1cXG5cXG4ubW9kSW5wdXQge1xcbiAgICB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7XFxufVxcblxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCB0aGlzLmxlbmd0aDsgX2krKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW19pXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pMiA9IDA7IF9pMiA8IG1vZHVsZXMubGVuZ3RoOyBfaTIrKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaTJdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJleHBvcnQgY29uc3QgRE9NR2VuZXJhbCA9IGZ1bmN0aW9uKCl7XG4gICAgXG4gICAgY29uc3QgZWxlbWVudEluaXQgPSBmdW5jdGlvbihlbGVtLCBhdHRyc09iaj17fSx0ZXh0U3RyaW5nPScnKXtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGVsZW0pO1xuICAgICAgICBcbiAgICAgICAgaWYgKE9iamVjdC5rZXlzKGF0dHJzT2JqKS5sZW5ndGggPiAwKXtcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKGF0dHJzT2JqKS5mb3JFYWNoKGZ1bmN0aW9uKGF0dCl7XG4gICAgICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZShhdHQsIGF0dHJzT2JqW2F0dF0pXG4gICAgICAgIH0pXG4gICAgfSAgIFxuICAgICAgICBpZiAodGV4dFN0cmluZy5sZW5ndGggPiAwKXtcbiAgICAgICAgICAgIGVsZW1lbnQudGV4dENvbnRlbnQgPSB0ZXh0U3RyaW5nO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGVsZW1lbnQgICAgICAgXG5cbiAgICB9O1xuXG4gICBjb25zdCBzZWxlY3RFbGVtID0gZnVuY3Rpb24oc2VsZWN0b3JTdHJpbmcpe1xuXG4gICAgICAgaWYgKHNlbGVjdG9yU3RyaW5nWzBdID09PSAnIycpe1xuICAgICAgICAgICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3RvclN0cmluZylcbiAgICAgICB9XG4gICAgICAgZWxzZSB7XG4gICAgICAgICAgIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yU3RyaW5nKTtcbiAgICAgICB9XG4gICAgICAgXG4gICB9O1xuXG4gICByZXR1cm4ge1xuICAgICAgIGVsZW1lbnRJbml0LCBcbiAgICAgICBzZWxlY3RFbGVtLFxuICAgfVxuXG59XG5cblxuXG4iLCJleHBvcnQgY29uc3QgYmFzZUNyZWF0ZSA9IGZ1bmN0aW9uKHN0b3JhZ2Upe1xuICAgICAgXG5jb25zdCBfc3RvcmFnZSA9IHN0b3JhZ2UgfHwgbmV3IEFycmF5KCk7XG5cbihmdW5jdGlvbigpe1xuICAgIGlmICghQXJyYXkuaXNBcnJheShfc3RvcmFnZSkpe1xuICAgICAgICB0aHJvdyAnRXJyb3IhIEFyZ3VtZW50IG11c3QgYmUgYW4gYXJyYXknO1xuICAgIH1cbiAgICB9KSgpXG4gICAgXG5jb25zdCBhZGQgPSBmdW5jdGlvbihlbGVtKXtcbiAgICBfc3RvcmFnZS5wdXNoKGVsZW0pO1xuXG59O1xuXG5jb25zdCByZW1vdmUgPSBmdW5jdGlvbihlbGVtLCBpbmRleD0wKXtcbiAgICBpZiAoaW5kZXggPT09IDApe1xuICAgICAgICBmb3IgKGxldCBpID0gaW5kZXg7IGkgPCBfc3RvcmFnZS5sZW5ndGg7IGkrKyl7XG4gICAgICAgICAgICBpZihfc3RvcmFnZVtpXSA9PT0gZWxlbSl7XG4gICAgICAgICAgICAgICAgX3N0b3JhZ2Uuc3BsaWNlKGksMSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgIH1cbiAgICAgICAgIH0gICAgICAgICBcbiAgICAgICB9XG4gICAgICAgZWxzZSBpZiAoaW5kZXggPiAwICYmIGluZGV4IDwgX3N0b3JhZ2UubGVuZ3RoKXtcbiAgICAgICAgICAgX3N0b3JhZ2Uuc3BsaWNlKGluZGV4LCAxKVxuICAgICAgIH0gIFxufTtcblxuY29uc3QgdXBkYXRlQnlMb2NhdGlvbiA9IGZ1bmN0aW9uKGluZGV4LCByZXBsYWNlKXtcbiAgICAgICAgaWYgKGluZGV4ID4gMCAmJiBpbmRleCA8IF9zdG9yYWdlLmxlbmd0aCl7XG4gICAgICAgICAgICBfc3RvcmFnZS5zcGxpY2UoaW5kZXgsMSxyZXBsYWNlKTtcbiAgICAgICAgfVxuXG59O1xuXG5jb25zdCB1cGRhdGVCeUVsZW1lbnQgPSBmdW5jdGlvbihlbGVtLCByZXBsYWNlKXtcbiAgICAgICAgZm9yIChsZXQgeCA9IGluZGV4OyB4IDwgX3N0b3JhZ2UubGVuZ3RoOyB4Kyspe1xuICAgICAgICAgICAgaWYoX3N0b3JhZ2VbeF0gPT09IGVsZW0pe1xuICAgICAgICAgICAgICAgIF9zdG9yYWdlLnNwbGljZSh4LDEsIHJlcGxhY2UpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfX1cbn07XG5cblxuY29uc3QgbW92ZSA9IGZ1bmN0aW9uKGluZGV4LCB0YXJnZXQpe1xuICAgIGlmIChpbmRleCA+PSAwICYmIGluZGV4IDxfc3RvcmFnZS5sZW5ndGggJiYgdGFyZ2V0ID49IDAgJiYgdGFyZ2V0IDxfc3RvcmFnZS5sZW5ndGgpe1xuICAgICAgICBjb25zdCBtb3ZlZCA9IF9zdG9yYWdlW2luZGV4XTtcbiAgICAgICAgX3N0b3JhZ2Uuc3BsaWNlKGluZGV4LDEpO1xuICAgICAgICBfc3RvcmFnZS5zcGxpY2UodGFyZ2V0LDAsbW92ZWQpXG4gICAgXG4gICAgfSAgIFxuICAgIGVsc2UgaWYoaW5kZXggPj0gMCAmJiBpbmRleCA8X3N0b3JhZ2UubGVuZ3RoICYmIHRhcmdldCA+PSBfc3RvcmFnZS5sZW5ndGgpIHtcbiAgICAgICAgY29uc3QgcmVwbGFjZW1lbnQgPSBfc3RvcmFnZVtpbmRleF07XG4gICAgICAgIF9zdG9yYWdlLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgIF9zdG9yYWdlLnB1c2gocmVwbGFjZW1lbnQpO1xuXG4gICAgfSAgICBcbn07XG5cbmNvbnN0IHN3YXAgPSBmdW5jdGlvbihpbmRleEEsIGluZGV4Qil7XG4gICAgaWYgKGluZGV4QSA+PSAwICYmIGluZGV4QSA8X3N0b3JhZ2UubGVuZ3RoICYmIGluZGV4QiA+PSAwICYmIGluZGV4QiA8X3N0b3JhZ2UubGVuZ3RoKXtcbiAgICAgICAgXG4gICAgICAgW19zdG9yYWdlW2luZGV4QV0sIF9zdG9yYWdlW2luZGV4Ql1dID0gW19zdG9yYWdlW2luZGV4Ql0sIF9zdG9yYWdlW2luZGV4QV1dXG4gICAgfVxuXG59O1xuXG5jb25zdCBjb3B5ID0gZnVuY3Rpb24gKGluZGV4KXtcbiAgICBpZiAoaW5kZXggPj0gMCAmJiBpbmRleCA8IF9zdG9yYWdlLmxlbmd0aCl7XG4gICAgICAgIGxldCBjbG9uZSA9IF9zdG9yYWdlW2luZGV4XTtcbiAgICAgICAgX3N0b3JhZ2UucHVzaChjbG9uZSk7XG4gICAgfVxufVxuICAgIFxuICAgIHJldHVybiB7XG4gICAgICAgIGFkZCxcbiAgICAgICAgcmVtb3ZlLFxuICAgICAgICB1cGRhdGVCeUxvY2F0aW9uLFxuICAgICAgICB1cGRhdGVCeUVsZW1lbnQsXG4gICAgICAgIG1vdmUsXG4gICAgICAgIHN3YXAsXG4gICAgICAgIGNvcHlcbiAgICB9ICAgXG59XG5cbiIsImV4cG9ydCBjb25zdCBldmVudHMgPSBmdW5jdGlvbigpe1xuXG4gICAgY29uc3QgX215RXZlbnRzID0ge307XG5cbiAgICBjb25zdCBfaXNFdmVudEhlcmUgPSBmdW5jdGlvbihuYW1lKXtcbiAgICAgICAgcmV0dXJuIF9teUV2ZW50cy5oYXNPd25Qcm9wZXJ0eShuYW1lKTtcbiAgICB9XG5cbiAgICBjb25zdCBfYWRkSGFuZGxlciA9IGZ1bmN0aW9uKG5hbWUsIG5ld0hhbmRsZXIpeyAgICAgICBcbiAgICAgICAgXG4gICAgICAgIGlmICghX2lzRXZlbnRIZXJlKG5hbWUpKXtcbiAgICAgICAgICAgICAgICBfbXlFdmVudHNbbmFtZV0gPSBbXTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICBfbXlFdmVudHNbbmFtZV0ucHVzaChuZXdIYW5kbGVyKSAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgIH07XG5cbiAgICBjb25zdCByZW1vdmVIYW5kbGVyID0gZnVuY3Rpb24obmFtZSwgdG9SZW1vdmUpe1xuXG4gICAgICAgIGlmICghX2lzRXZlbnRIZXJlKG5hbWUpKXtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICBjb25zdCBpbmRleCA9IF9teUV2ZW50c1tuYW1lXS5pbmRleE9mKHRvUmVtb3ZlKTtcbiAgICAgICAgX215RXZlbnRzW25hbWVdLnNwbGljZShpbmRleCwgMSlcblxuICAgIH07XG5cbiAgICBjb25zdCBfZmlyZU1lID0gZnVuY3Rpb24obmFtZSwgLi4ub3B0aW9uYWxBcmcpe1xuICAgICAgICAgICAgXG4gICAgICAgIGlmICghX2lzRXZlbnRIZXJlKG5hbWUpKXtcbiAgICAgICAgICAgIF9teUV2ZW50c1tuYW1lXSA9IFtdO1xuICAgICAgICB9XG5cbiAgICAgICAgX215RXZlbnRzW25hbWVdLmZvckVhY2goZnVuY3Rpb24oaCl7XG4gICAgICAgICAgICAgICByZXR1cm4gaCguLi5vcHRpb25hbEFyZylcbiAgICAgICAgfSlcbiAgICB9O1xuXG4gICAgY29uc3QgcHVibGlzaCA9IGZ1bmN0aW9uKG5hbWUsIC4uLm9wdGlvbmFsQXJnKXsgXG4gICAgICAgXG4gICAgICAgIGlmICghX2lzRXZlbnRIZXJlKG5hbWUpKXtcbiAgICAgICAgICAgIF9teUV2ZW50c1tuYW1lXSA9IFtdO1xuICAgICAgICB9O1xuXG4gICAgICAgIF9maXJlTWUobmFtZSwgLi4ub3B0aW9uYWxBcmcpXG4gICAgICAgIFxuICAgIH07XG5cbiAgICBjb25zdCBzdWJzY3JpYmUgPSBmdW5jdGlvbihuYW1lLCBuZXdIYW5kbGVyKXtcblxuICAgICAgICBpZiAoIV9pc0V2ZW50SGVyZShuYW1lKSl7XG4gICAgICAgICAgICBfbXlFdmVudHNbbmFtZV0gPSBbXTtcbiAgICAgICAgfTtcbiAgIFxuICAgICAgICBfYWRkSGFuZGxlcihuYW1lLCBuZXdIYW5kbGVyKVxuICAgICAgICBcbiAgICB9OyBcblxuICAgICAgICAgICAgXG4gICAgcmV0dXJuIHtcbiAgICAgICAgcHVibGlzaCxcbiAgICAgICAgc3Vic2NyaWJlLFxuICAgICAgICByZW1vdmVIYW5kbGVyXG4gICAgfSAgICBcbn1cblxuIiwiaW1wb3J0IHsgZXZlbnRzIH0gZnJvbSBcIi4vaGVscGVycy9ldmVudHNcIjtcblxubGV0IHByb2plY3RFdmVudHMgPSBldmVudHMoKTtcblxucHJvamVjdEV2ZW50cy5kZWxlZ2F0b3IgPSBmdW5jdGlvbihldmVudCl7XG4gICAgICBzd2l0Y2godHJ1ZSl7XG4gICAgICAgICBjYXNlIGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ3JldmVhbEZvcm0nKSA6IHByb2plY3RFdmVudHMucHVibGlzaCgncmV2ZWFsJyk7XG4gICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgY2FzZSBldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdwcm9qZWN0Rm9ybScpOiBwcm9qZWN0RXZlbnRzLnB1Ymxpc2goJ2NyZWF0ZScsIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0aXRsZUlucCcpLnZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdEV2ZW50cy5wdWJsaXNoKCdzYXZlZCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICBicmVhaztcbiAgICAgICAgIGNhc2UgZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygncHJvamVjdCcpOiBwcm9qZWN0RXZlbnRzLnB1Ymxpc2goJ3ZpZXcnLCBldmVudCk7XG4gICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgY2FzZSBldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdpdGVtVGl0bGUnKTogcHJvamVjdEV2ZW50cy5wdWJsaXNoKCd2aWV3JywgZXZlbnQpO1xuICAgICAgICAgICBicmVhazsgICAgICAgICAgIFxuICAgICAgICAgY2FzZSBldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdhZGR0b0RvTGlzdCcpOiBwcm9qZWN0RXZlbnRzLnB1Ymxpc2goJ2Nob29zZVRpdGxlJywgZXZlbnQpXG4gICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgY2FzZSBldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdjaG9vc2VUaXRsZUZvcm0nKTogcHJvamVjdEV2ZW50cy5wdWJsaXNoKCdpbnB1dE9yTGlzdCcsIGV2ZW50KVxuICAgICAgICAgICBicmVhaztcbiAgICAgICAgIGNhc2UgZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnY2hvb3NlTm90ZVR5cGUnKTogcHJvamVjdEV2ZW50cy5wdWJsaXNoKCdub3RlVG9Eb1R5cGUnLCBldmVudCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgY2FzZSBldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdjYW5jZWxUaXRsZScpIDogcHJvamVjdEV2ZW50cy5wdWJsaXNoKCdhYm9ydE5vdGVUeXBlRm9ybScsIGV2ZW50KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgIGJyZWFrOyBcbiAgICAgICAgIGNhc2UgZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnY2FuY2VsQ2hvaWNlJykgOiBwcm9qZWN0RXZlbnRzLnB1Ymxpc2goJ2Fib3J0Tm90ZVR5cGVGb3JtJyxldmVudCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICBjYXNlIGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2FkZENoZWNrJykgOiBwcm9qZWN0RXZlbnRzLnB1Ymxpc2goJ25ld0NoZWNrSXRlbScsIGV2ZW50KTtcbiAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICBjYXNlIGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2FkZENoZWNrTW9kJykgOiBwcm9qZWN0RXZlbnRzLnB1Ymxpc2goJ3VwZGF0ZUNoZWNrSXRlbScsIGV2ZW50KTtcbiAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICBjYXNlIGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2NhbmNlbCcpIDogcHJvamVjdEV2ZW50cy5wdWJsaXNoKCdjYW5jZWxOb3RlJyxldmVudCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICBicmVhaztcbiAgICAgICAgIGNhc2UgZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnZWRpdCcpIDogcHJvamVjdEV2ZW50cy5wdWJsaXNoKCdtb2RpZnlFbGVtJyxldmVudCk7XG4gICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgY2FzZSBldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdzdWJtaXROb3RlJykgOiBwcm9qZWN0RXZlbnRzLnB1Ymxpc2goJ3N1Ym1pdE5vdGUnLCBldmVudCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3RFdmVudHMucHVibGlzaCgnc2F2ZWQnKTtcbiAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICBjYXNlIGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ3JldmVydE1vZCcpIDogcHJvamVjdEV2ZW50cy5wdWJsaXNoKCdyZXZlcnQnLGV2ZW50KTtcbiAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICBjYXNlIGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ3N1Ym1pdE1vZCcpIDogcHJvamVjdEV2ZW50cy5wdWJsaXNoKCdzdWJtaXRNb2QnLGV2ZW50KTtcbiAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICBjYXNlIGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ3JlbW92ZScpIDogcHJvamVjdEV2ZW50cy5wdWJsaXNoKCdkZWxldGUnLCBldmVudCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdEV2ZW50cy5wdWJsaXNoKCdzYXZlZCcpO1xuICAgICAgICAgICBicmVhaztcbiAgICAgICAgIGNhc2UgZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnZGVsZXRlQ2hlY2snKSA6IHByb2plY3RFdmVudHMucHVibGlzaCgnZGVsZXRlQ2hlY2snLCBldmVudCk7XG4gICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAvL2FkZCBtb3JlLiBcblxufX1cbiBcbiAgICAgICBcblxuXG5cbmV4cG9ydCB7IHByb2plY3RFdmVudHMgfSIsImltcG9ydCB7IGJhc2VDcmVhdGUgfSBmcm9tIFwiLi9oZWxwZXJzL2Jhc2VcIjtcblxuXG4vL1RlbXBsYXRlIGZvciBhIHRvZG8tbm90ZSBcblxuZXhwb3J0IGNvbnN0IHNpbmdsZXRvRG9Ob3RlID0gZnVuY3Rpb24obmFtZSl7XG5cblxuICAgY29uc3Qgbm90ZVN0b3JhZ2UgPSBuZXcgQXJyYXkoKTtcbiAgIGNvbnN0IHRvRG9Ob3RlID0gYmFzZUNyZWF0ZShub3RlU3RvcmFnZSk7XG4gICB0b0RvTm90ZS5ub3RlU3RvcmFnZSA9IG5vdGVTdG9yYWdlO1xuXG4gICBjb25zdCB0eXBlID0gZnVuY3Rpb24odHlwZT0nY2hlY2tib3gnKXtcbiAgICAgIHJldHVybiB0eXBlXG4gICB9XG4gICBcbiAgIHRvRG9Ob3RlLm5hbWUgPSBuYW1lO1xuICAgdG9Eb05vdGUudHlwZSA9IHR5cGUoKTtcbiAgIFxuICAgY29uc3QgYWRkTm90ZSA9IGZ1bmN0aW9uKG5vdGUpe1xuICAgICAgdG9Eb05vdGUuYWRkKG5vdGUpO1xuICAgfVxuXG4gICBjb25zdCByZW1vdmVOb3RlID0gZnVuY3Rpb24oaW5kZXgpe1xuICAgICAgY29uc3Qgbm90ZSA9IF9ub3Rlc3RvcmFnZVtpbmRleF07XG4gICAgICB0b0RvTm90ZS5yZW1vdmUobm90ZSwgaW5kZXgpOyAgXG4gICB9XG5cbiAgIGNvbnN0IG1vdmVOb3RlID0gZnVuY3Rpb24oaW5kZXgsIHRhcmdldCl7XG4gICAgICB0b0RvTm90ZS5tb3ZlKGluZGV4LCB0YXJnZXQpO1xuICAgICAgICBcbiAgIH1cbiAgIFxuICAgcmV0dXJuIHRvRG9Ob3RlXG59XG5cbi8vXG5cbi8vVGVtcGxhdGUgZm9yIGEgc2luZ2xlIHByb2plY3RcblxuZXhwb3J0IGNvbnN0IHNpbmdsZVByb2ogPSBmdW5jdGlvbihuYW1lKXtcblxuICAgY29uc3QgcHJvalN0b3JhZ2UgPSBuZXcgQXJyYXkoKTtcbiAgIGNvbnN0IHByb2plY3QgPSBiYXNlQ3JlYXRlKHByb2pTdG9yYWdlKTtcbiAgIHByb2plY3QubmFtZSA9IG5hbWU7XG4gICBwcm9qZWN0LnByb2pTdG9yYWdlID0gcHJvalN0b3JhZ2VcblxuICAgY29uc3QgYWRkVG9Qcm9qZWN0ID0gZnVuY3Rpb24obmFtZSl7XG4gICAgICBjb25zdCB0b2RvID0gc2luZ2xldG9Eb05vdGUobmFtZSlcbiAgICAgIHByb2plY3QuYWRkKHRvZG8pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICB9XG5cbiAgIGNvbnN0IHJlbW92ZUZyb21Qcm9qZWN0ID0gZnVuY3Rpb24oaW5kZXgpe1xuICAgICAgY29uc3QgdG9kbyA9IHByb2pzdG9yYWdlW2luZGV4XTtcbiAgICAgIHByb2plY3QucmVtb3ZlKHRvZG8sIGluZGV4KTsgIFxuICAgfSBcblxuICAgY29uc3QgbW92ZXRvRG8gPSBmdW5jdGlvbihpbmRleCwgdGFyZ2V0KXtcbiAgICAgIHByb2plY3QubW92ZShpbmRleCwgdGFyZ2V0KTtcbiAgICAgICAgIFxuICAgfVxuXG4gICByZXR1cm4ge3Byb2plY3QsXG4gICAgICAgICAgYWRkVG9Qcm9qZWN0LCBcbiAgIH1cblxufSBcblxuLy9cblxuLy9PdmVyYWxsIEludGVyZmFjZVxuXG5leHBvcnQgY29uc3QgbWFpbkludGVyZmFjZSA9IGZ1bmN0aW9uKCl7XG4gICBcbiAgIGNvbnN0IF9vdmVyYWxsU3RvcmFnZSA9IG5ldyBBcnJheSgpO1xuICAgY29uc3QgYWxsVG9EbyA9IGJhc2VDcmVhdGUoX292ZXJhbGxTdG9yYWdlKTtcblxuICAgY29uc3QgbmV3UHJvaiA9IGZ1bmN0aW9uKG5hbWUpe1xuICAgICAgY29uc3QgcHJvaiA9IHNpbmdsZVByb2oobmFtZSk7XG4gICAgICBhbGxUb0RvLmFkZChwcm9qKTtcblxuICAgfVxuICAgIFxuICAgY29uc3QgbW92ZVByb2ogPSBmdW5jdGlvbihpbmRleCwgdGFyZ2V0KXtcbiAgICAgIGFsbFRvRG8ubW92ZShpbmRleCwgdGFyZ2V0KTtcblxuICAgfVxuICAgXG4gICBjb25zdCB0cmFuc2ZlclRvTG9jYWxTdG9yYWdlID0gZnVuY3Rpb24oKXtcbiAgICAgICAgIHJldHVybiBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnYWNjZXNzJywgSlNPTi5zdHJpbmdpZnkoX292ZXJhbGxTdG9yYWdlKSlcbiAgIH1cblxuICAgY29uc3QgX2ZpbmRQcm9qID0gZnVuY3Rpb24oZXZlbnQpe1xuICAgICAgY29uc3QgcHJvaiA9IGV2ZW50LnRhcmdldC5jbG9zZXN0KCcucHJvamVjdCcpXG4gICAgICByZXR1cm4gcHJvai5kYXRhc2V0LmlkXG4gICB9XG5cbiAgIGNvbnN0IGFwcGVuZFRvUHJvaiA9IGZ1bmN0aW9uKGV2ZW50KXtcbiAgICAgIGNvbnN0IGluZGV4ID0gX2ZpbmRQcm9qKGV2ZW50KTtcbiAgICAgIGNvbnN0IGN1cnJlbnRQcm9qID0gX292ZXJhbGxTdG9yYWdlW2luZGV4XTtcblxuICAgICAgY29uc3QgZm9ybSA9IGV2ZW50LnRhcmdldC5wYXJlbnRFbGVtZW50O1xuICAgICAgY29uc3QgZm9ybUNoaWxkcmVuID0gQXJyYXkuZnJvbShmb3JtLmNoaWxkcmVuKTtcbiAgICAgIGNvbnN0IHRpdGxlID0gZm9ybUNoaWxkcmVuLmZpbHRlcihjaGlsZCA9PiAgY2hpbGQuY2xhc3NMaXN0LmNvbnRhaW5zKCdpdGVtVGl0bGUnKSlcbiAgICAgIGNvbnN0IG5hbWUgPSB0aXRsZVswXS5maXJzdENoaWxkLm5vZGVWYWx1ZTtcbiAgICAgIGN1cnJlbnRQcm9qLmFkZFRvUHJvamVjdChuYW1lKVxuICAgICAgXG4gICAgICByZXR1cm5cblxuICAgfVxuXG4gICBjb25zdCByZW1vdmVQcm9qID0gZnVuY3Rpb24oZXZlbnQpe1xuICAgICAgY29uc3QgaW5kZXggPSBfZmluZFByb2ooZXZlbnQpO1xuICAgICAgY29uc3QgcHJvaiA9IF9vdmVyYWxsU3RvcmFnZVtpbmRleF07XG4gICAgICBldmVudC50YXJnZXQucGFyZW50RWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoJ3Byb2plY3QnKSA/IGFsbFRvRG8ucmVtb3ZlKHByb2opOiBmYWxzZTtcblxuICAgICAgcmV0dXJuXG5cbiAgIH1cbiAgXG4gICBcbiAgIHJldHVybiB7XG4gICAgICBuZXdQcm9qLFxuICAgICAgdHJhbnNmZXJUb0xvY2FsU3RvcmFnZSxcbiAgICAgIGFwcGVuZFRvUHJvaixcbiAgICAgIHJlbW92ZVByb2osXG4gICAgICAvL2p1c3QgdGhpcyBmb3Igbm93LlxuICAgfVxuICBcbiAgIFxufVxuXG4iLCJpbXBvcnQgeyBET01HZW5lcmFsIH0gZnJvbSBcIi4vaGVscGVycy9ET01cIjtcbmltcG9ydCB7IHByb2plY3RFdmVudHMgfSBmcm9tIFwiLi9wcm9qZWN0ZXZlbnRzXCI7XG5cblxuZXhwb3J0IGNvbnN0IHRlbXBsYXRlRE9NU3RydWN0cyA9IGZ1bmN0aW9uICgpe1xuXG4gICAgY29uc3QgRE9NID0gRE9NR2VuZXJhbCgpXG4gICAgY29uc3QgZGVsZWdhdG9yID0gcHJvamVjdEV2ZW50cy5kZWxlZ2F0b3JcblxuICAgIGNvbnN0IGNyZWF0ZVByb2plY3QgPSBmdW5jdGlvbihuYW1lKXtcbiAgICAgICAgIGlmIChuYW1lID09PSAnJyl7cmV0dXJufSBcbiAgICAgICAgIGNvbnN0IHJlZmVyZW5jZSA9IERPTS5zZWxlY3RFbGVtKCcucHJvamVjdCcpOyBcbiAgICAgICAgIGNvbnN0IHByb2ogPSBET00uZWxlbWVudEluaXQoJ2RpdicseydpZCc6IGAke25hbWV9JHtyZWZlcmVuY2UubGVuZ3RofWAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnZGF0YS1pZCc6YCR7cmVmZXJlbmNlLmxlbmd0aH1gLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdjbGFzcyc6ICdwcm9qZWN0J30sbmFtZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICBjb25zdCByZW1vdmUgPSBET00uZWxlbWVudEluaXQoJ2J1dHRvbicsIHsnY2xhc3MnOidyZW1vdmUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdpZCc6YHJlbW92ZSR7cHJvai5kYXRhc2V0LmlkfWB9LCAnWCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgIGNvbnN0IGFkZFRvRG9MaXN0QnRuID0gRE9NLmVsZW1lbnRJbml0KCdidXR0b24nLCB7J2NsYXNzJzogJ2FkZHRvRG9MaXN0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2lkJzogYGFkZCR7RE9NLnNlbGVjdEVsZW0oJy5wcm9qZWN0JykubGVuZ3RofWB9LCAnQWRkIFRvLURvIExpc3QnKTtcbiAgICAgICAgY29uc3QgbW9kaWZ5ID0gRE9NLmVsZW1lbnRJbml0KCdidXR0b24nLCB7J2NsYXNzJzonZWRpdCd9LCdFZGl0Jyk7XG4gICAgICAgIHByb2ouYXBwZW5kQ2hpbGQocmVtb3ZlKTtcbiAgICAgICAgcHJvai5hcHBlbmRDaGlsZChtb2RpZnkpO1xuICAgICAgICBwcm9qLmFwcGVuZENoaWxkKERPTS5lbGVtZW50SW5pdCgnZGl2Jyx7ICdjbGFzcyc6J25vbmUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2lkJzpgY29udGFpbmVyJHtyZWZlcmVuY2UubGVuZ3RofWB9KSk7XG4gICAgICAgIHByb2ouYXBwZW5kQ2hpbGQoYWRkVG9Eb0xpc3RCdG4pO1xuXG4gICAgICAgIFxuICAgICAgICBwcm9qLm9uY2xpY2sgPSBkZWxlZ2F0b3I7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IERPTS5zZWxlY3RFbGVtKCcjY29udGFpbmVyJyk7XG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9qKTtcbiAgICAgICAgXG4gICAgIH1cbiAgICAgXG5cbiAgICAgY29uc3QgY3JlYXRlVG9Eb05vdGUgPSBmdW5jdGlvbihjaG9zZW5UeXBlKXtcbiAgICAgICAgY29uc3QgaW5wdXQgPSBET00uc2VsZWN0RWxlbSgnI3RlbXBvcmFyeUlucHV0JykgXG4gICAgICAgIGNvbnN0IHByb2plY3QgPSBpbnB1dC5wYXJlbnRFbGVtZW50O1xuICAgICAgICBjb25zdCBmb3JtUmVmZXJlbmNlID0gRE9NLnNlbGVjdEVsZW0oJy50b0RvTm90ZUlucHV0JylcbiAgICAgICAgY29uc3QgY29udGFpbmVyID0gRE9NLnNlbGVjdEVsZW0oYCNjb250YWluZXIke3Byb2plY3QuZGF0YXNldC5pZH1gKTtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IGZvcm0gPSBET00uZWxlbWVudEluaXQoJ2Zvcm0nLHsnY2xhc3MnOiAndG9Eb05vdGVJbnB1dCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2lkJzogYHRvRG9Ob3RlRm9ybSR7cHJvamVjdC5kYXRhc2V0LmlkfSR7Zm9ybVJlZmVyZW5jZS5sZW5ndGh9YCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2RhdGEtaWQnOmAke2Zvcm1SZWZlcmVuY2UubGVuZ3RofWAgfSlcbiAgICAgICAgY29uc3Qgc3VibWl0ID0gRE9NLmVsZW1lbnRJbml0KCdidXR0b24nLHsndHlwZSc6J3N1Ym1pdCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnaWQnOiAnc3VibWl0Tm90ZScsIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnY2xhc3MnOidzdWJtaXROb3RlIG5vbmUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwnU3VibWl0IE5vdGUnKVxuICAgICAgICBjb25zdCBjYW5jZWwgPSBET00uZWxlbWVudEluaXQoJ2J1dHRvbicsIHsnY2xhc3MnOidjYW5jZWwgbm9uZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2lkJzonY2FuY2VsTm90ZSd9LCAnQ2FuY2VsJyk7XG4gICAgICAgIFxuICAgICAgICBjb25zdCByZW1vdmUgPSBET00uZWxlbWVudEluaXQoJ2J1dHRvbicsIHsnY2xhc3MnOidyZW1vdmUgbm9uZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnaWQnOmByZW1vdmUke3Byb2plY3QuZGF0YXNldC5pZH0ke2Zvcm1SZWZlcmVuY2UubGVuZ3RofWB9LCAnWCcpO1xuICAgICAgICBjb25zdCBwcm92VGl0bGUgPSBET00uc2VsZWN0RWxlbSgnI3Byb3ZUaXRsZScpO1xuICAgICAgICBjb25zdCB0aXRsZSA9IERPTS5lbGVtZW50SW5pdCgnbGFiZWwnLCB7J2NsYXNzJzonaXRlbVRpdGxlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdmb3InOidpdGVtVGl0bGUnLCAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnbmFtZSc6J2l0ZW1UaXRsZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdpZCc6YGl0ZW1UaXRsZSR7cHJvamVjdC5kYXRhc2V0LmlkfSR7Zm9ybVJlZmVyZW5jZS5sZW5ndGh9YCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxgJHtwcm92VGl0bGUudmFsdWV9YCwpXG4gICAgICAgIGNvbnN0IG1vZGlmeSA9IERPTS5lbGVtZW50SW5pdCgnYnV0dG9uJywgeydjbGFzcyc6J2VkaXQnfSwnRWRpdCcpO1xuXG4gICAgICAgIFxuICAgICAgICBmb3JtLmFwcGVuZENoaWxkKHN1Ym1pdCk7XG4gICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQoY2FuY2VsKTtcbiAgICAgICAgZm9ybS5hcHBlbmRDaGlsZChyZW1vdmUpO1xuICAgICAgICBmb3JtLmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgICAgICAgdGl0bGUuYXBwZW5kQ2hpbGQobW9kaWZ5KVxuICAgICAgICBwcm92VGl0bGUucmVtb3ZlKCk7ICBcbiAgICAgICAgXG5cbiAgICAgICAgZm9ybS5vbnN1Ym1pdCA9IGRlbGVnYXRvcjsgICBcbiAgICAgICAgIFxuICAgICAgICBjb250YWluZXIuY2xhc3NMaXN0LnRvZ2dsZSgnbm9uZScsIGZhbHNlKTtcbiAgICAgICAgXG4gICAgICAgIFxuICAgICAgICAgXG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChmb3JtKTtcblxuICAgICAgICBjb25zdCBfZ2VuZXJhdGVDaGVja2xpc3QgPSBmdW5jdGlvbigpeyBcbiAgICAgICAgICAgY29uc3QgYWRkID0gRE9NLmVsZW1lbnRJbml0KCdidXR0b24nLCB7J2NsYXNzJzonYWRkQ2hlY2snLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnaWQnOmBhZGRDaGVjayR7cHJvamVjdC5kYXRhc2V0LmlkfSR7Zm9ybVJlZmVyZW5jZS5sZW5ndGh9YCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2RhdGEtY2xhc3MnOmBjaGlsZCR7Zm9ybVJlZmVyZW5jZS5sZW5ndGh9YFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCAnQWRkIEl0ZW0nKTsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgZm9ybS5hcHBlbmRDaGlsZChhZGQpO1xuXG4gICAgICAgICAgICBmb3JtLmNsYXNzTGlzdC5hZGQoJ2NoZWNrYm94JylcbiAgICAgICB9XG5cbiAgICAgICBjb25zdCBfZ2VuZXJhdGVGcmVlRm9ybSA9IGZ1bmN0aW9uKCl7XG5cbiAgICAgICAgaW5wdXQudmFsdWUgPSAnJztcbiAgICAgICAgaW5wdXQuY2xhc3NMaXN0LnRvZ2dsZSgnbm9uZScsZmFsc2UpO1xuICAgICAgICBmb3JtLmNsYXNzTGlzdC5hZGQoJ2ZyZWVGb3JtJyk7XG5cbiAgICAgICAgc3VibWl0LmNsYXNzTGlzdC50b2dnbGUoJ25vbmUnLGZhbHNlKTtcbiAgICAgICAgY2FuY2VsLmNsYXNzTGlzdC50b2dnbGUoJ25vbmUnLGZhbHNlKTtcbiAgICAgICAgaW5wdXQuZm9jdXMoKTtcbiAgICAgICAgXG4gICAgICAgfVxuXG4gICAgICAgY2hvc2VuVHlwZSA9PT0gJ0NoZWNrbGlzdCcgPyBfZ2VuZXJhdGVDaGVja2xpc3QoKSA6IF9nZW5lcmF0ZUZyZWVGb3JtKCk7ICBcblxuICAgICAgIHJldHVybiBcblxuICAgICB9XG5cblxuICAgICBjb25zdCBkaXNhYmxlQnRucyA9IGZ1bmN0aW9uKHRyZ3Q9J24vYScpe1xuICAgICAgICBjb25zdCBhbGxCdG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnYnV0dG9uJyk7XG4gICAgICAgIGFsbEJ0bnMuZm9yRWFjaChidG4gPT4gIGJ0biA9PT0gdHJndCB8fCBidG4uY2xhc3NMaXN0LmNvbnRhaW5zKCdub25lJykgPyBidG4uZGlzYWJsZWQgPSBmYWxzZSA6IGJ0bi5kaXNhYmxlZCA9IHRydWUpO1xuXG4gICAgICAgIGNvbnN0IGFsbEVkaXRhYmxlcyA9IERPTS5zZWxlY3RFbGVtKCcuZWRpdCcpO1xuICAgICAgICBhbGxFZGl0YWJsZXMuZm9yRWFjaChpdG0gPT4gIGl0bSA9PT0gdHJndCB8fCBpdG0uY2xhc3NMaXN0LmNvbnRhaW5zKCdub25lJykgPyBmYWxzZSA6IGl0bS5jbGFzc0xpc3QudG9nZ2xlKCdkaXNhYmxlZEVkaXQnLCB0cnVlKSk7XG4gICAgICAgIGNvbnN0IGFsbERpc2FibGVkID0gRE9NLnNlbGVjdEVsZW0oJy5kaXNhYmxlZEVkaXQnKTtcbiAgICAgICAgYWxsRGlzYWJsZWQuZm9yRWFjaChpdG0gPT4gaXRtLmNsYXNzTGlzdC50b2dnbGUoJ2VkaXQnLGZhbHNlKSk7XG4gICAgfVxuICAgIFxuICAgIFxuICAgIGNvbnN0IGVuYWJsZUJ0bnMgPSBmdW5jdGlvbigpe1xuICAgICAgICBjb25zdCBhbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdidXR0b24nKTtcbiAgICAgICAgYWxsLmZvckVhY2goYnRuID0+IGJ0bi5kaXNhYmxlZCA9IGZhbHNlKTtcblxuICAgICAgICBjb25zdCBlZGl0cyA9IERPTS5zZWxlY3RFbGVtKCcuZGlzYWJsZWRFZGl0Jyk7XG4gICAgICAgIGVkaXRzLmZvckVhY2goaXRtID0+IGl0bS5jbGFzc0xpc3QudG9nZ2xlKCdlZGl0Jyx0cnVlKSk7XG4gICAgICAgIGVkaXRzLmZvckVhY2goaXRtID0+IGl0bS5jbGFzc0xpc3QudG9nZ2xlKCdkaXNhYmxlZEVkaXQnLGZhbHNlKSk7XG4gICAgICAgIGNvbnN0IGRlbGV0ZUJ0bnMgPSBET00uc2VsZWN0RWxlbSgnLmRlbGV0ZUNoZWNrJyk7XG4gICAgICAgIGRlbGV0ZUJ0bnMuZm9yRWFjaChidG4gPT4gYnRuLmNsYXNzTGlzdC50b2dnbGUoJ25vbmUnLGZhbHNlKSk7ICAgICAgICBcbiAgICB9XG5cbiAgICAgY29uc3QgbW9kaWZ5RWxlbWVudCA9IGZ1bmN0aW9uKGV2ZW50KXtcblxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIFxuICAgICAgICAgY29uc3QgZm9ybSA9IGV2ZW50LnRhcmdldC5wYXJlbnRFbGVtZW50O1xuICAgICAgICAgY29uc3QgbW9kSW5wdXQgPSAoZnVuY3Rpb24oKXtcbiAgICAgICAgIGlmIChmb3JtLmNsYXNzTGlzdC5jb250YWlucygnZnJlZUZvcm0nKSl7ICAgIFxuICAgICAgICAgICAgbGV0IG1vZFRleHRBcmVhID0gRE9NLmVsZW1lbnRJbml0KCd0ZXh0YXJlYScseydsYWJlbCc6J2ZyZWVGb3JtJyxcbiAgICAgICAgICAgICduYW1lJzonZnJlZUZvcm0nLFxuICAgICAgICAgICAgJ2F1dG9jb21wbGV0ZSc6J29mZicsXG4gICAgICAgICAgICAncmVxdWlyZWQnOidyZXF1aXJlZCcsXG4gICAgICAgICAgICAnaWQnOidtb2RJbnB1dCcsXG4gICAgICAgICAgICdjbGFzcyc6ICdtb2RJbnB1dCcsXG4gICAgICAgICAgICdyb3dzJyA6ICczJyxcbiAgICAgICAgICAgJ2NvbHMnIDogJzMwJ30pO1xuXG4gICAgICAgICAgIHJldHVybiBtb2RUZXh0QXJlYTsgIFxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGxldCBtb2RDaGVja0lucHV0ID0gRE9NLmVsZW1lbnRJbml0KCdpbnB1dCcseyd0eXBlJzondGV4dCcsXG4gICAgICAgICAgICAnYXV0b2NvbXBsZXRlJzonb2ZmJyxcbiAgICAgICAgICAgICdyZXF1aXJlZCc6J3JlcXVpcmVkJyxcbiAgICAgICAgICAgICdjbGFzcyc6ICdtb2RJbnB1dCcsXG4gICAgICAgICAgICAgJ2lkJzonbW9kSW5wdXQnLH0pO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAgcmV0dXJuIG1vZENoZWNrSW5wdXQgICBcbiAgICAgICAgfSBcbiAgICB9KSgpXG5cbiAgICAgICAgIGNvbnN0IHN1Ym1pdCA9IERPTS5lbGVtZW50SW5pdCgnYnV0dG9uJyx7J3R5cGUnOidzdWJtaXQnLFxuICAgICAgICAnY2xhc3MnOidzdWJtaXRNb2QnLFxuICAgICAgICAgJ2lkJzogJ3N1Ym1pdE1vZCdcbiAgICAgICAgIH0sJ1N1Ym1pdCBOb3RlJylcbiAgICAgICAgIGNvbnN0IHJldmVydCA9IERPTS5lbGVtZW50SW5pdCgnYnV0dG9uJyx7XG4gICAgICAgICAnY2xhc3MnOidyZXZlcnRNb2QnLFxuICAgICAgICAgJ2RhdGEtdHJhbnNmZXInOmAke2V2ZW50LnRhcmdldC5maXJzdENoaWxkLm5vZGVWYWx1ZX1gIC8vdGVtcG9yYXJ5LCB1cGRhdGUgdG8gdXNlIGxvY2FsIHN0b3JhZ2UgJiBiYWNrZW5kXG4gICAgICAgICAgfSwnUmV2ZXJ0IEJhY2snKSBcbiAgICAgICAgICAgICAgICAgXG4gICAgICAgICBpZiAoZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdpdGVtVGl0bGUnKSB8fCBldmVudC50YXJnZXQucGFyZW50RWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoJ3Byb2plY3QnKSl7XG4gICAgICAgICAgICAgcmV2ZXJ0LmRhdGFzZXQudHJhbnNmZXIgPSBldmVudC50YXJnZXQucGFyZW50RWxlbWVudC5maXJzdENoaWxkLm5vZGVWYWx1ZVxuICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIFxuXG4gICAgICAgIGRpc2FibGVCdG5zKCk7XG5cbiAgICAgICAgIGNvbnN0IF9yZXBsYWNlV2l0aElucHV0ID0gKGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICBpZihldmVudC50YXJnZXQucGFyZW50RWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoJ2l0ZW1UaXRsZScpIHx8IGV2ZW50LnRhcmdldC5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygncHJvamVjdCcpKXtcbiAgICAgICAgICAgICAgICBtb2RJbnB1dC52YWx1ZSA9IGV2ZW50LnRhcmdldC5wYXJlbnRFbGVtZW50LmZpcnN0Q2hpbGQubm9kZVZhbHVlO1xuICAgICAgICAgICAgICAgIGV2ZW50LnRhcmdldC5wYXJlbnRFbGVtZW50LmZpcnN0Q2hpbGQubm9kZVZhbHVlID0gJyc7XG4gICAgICAgICAgICAgICAgZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQuYXBwZW5kQ2hpbGQobW9kSW5wdXQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZXtcbiAgICAgICAgICAgICAgICBtb2RJbnB1dC52YWx1ZSA9IGV2ZW50LnRhcmdldC5maXJzdENoaWxkLm5vZGVWYWx1ZVxuICAgICAgICAgICAgICAgIGV2ZW50LnRhcmdldC5yZXBsYWNlV2l0aChtb2RJbnB1dCk7IFxuXG4gICAgICAgICAgICB9IFxuICAgICAgICAgICAgbW9kSW5wdXQuaW5zZXJ0QWRqYWNlbnRFbGVtZW50KCdhZnRlcmVuZCcsc3VibWl0KTtcbiAgICAgICAgICAgIHN1Ym1pdC5pbnNlcnRBZGphY2VudEVsZW1lbnQoJ2FmdGVyZW5kJyxyZXZlcnQpO1xuICAgICAgIH0pKClcbiAgICAgICAgXG4gICAgIH1cblxuICAgICBjb25zdCBzdWJtaXRNb2RpZmllZEVsZW1lbnQgPSBmdW5jdGlvbihldmVudCl7XG4gICAgICAgIFxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBjb25zdCBmb3JtID0gZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQ7XG4gICAgICAgIGNvbnN0IGlucHV0ID0gZXZlbnQudGFyZ2V0LnByZXZpb3VzRWxlbWVudFNpYmxpbmc7XG4gICAgICAgIGNvbnN0IHJldmVydCA9IGV2ZW50LnRhcmdldC5uZXh0RWxlbWVudFNpYmxpbmc7XG4gICAgICAgIGNvbnN0IGxhYmVsID0gRE9NLmVsZW1lbnRJbml0KCdsYWJlbCcsIHsnZm9yJzogYCR7aW5wdXQudmFsdWV9YCwgJ2NsYXNzJzonZWRpdCd9LGAke2lucHV0LnZhbHVlfWApO1xuICAgICAgICBjb25zdCB0ZXh0ID0gRE9NLmVsZW1lbnRJbml0KCdwJywgeydjbGFzcyc6J3RleHQgZWRpdCd9LCBgJHtpbnB1dC52YWx1ZX1gKTtcbiAgICAgICAgY29uc3QgZGVsID0gRE9NLmVsZW1lbnRJbml0KCdidXR0b24nLCB7J2NsYXNzJzogJ2RlbGV0ZUNoZWNrIG5vbmUnfSwnZGVsZXRlJyApIFxuXG4gICAgICAgIFxuICAgICAgICBpZihpbnB1dC52YWx1ZSA9PT0gJycpe3JldHVybn07XG5cbiAgICAgICAgaWYoZm9ybS5jbGFzc0xpc3QuY29udGFpbnMoJ2NoZWNrYm94Jykpe1xuICAgICAgICAgICAgaW5wdXQucmVwbGFjZVdpdGgobGFiZWwpO1xuICAgICAgICAgICAgbGFiZWwuYXBwZW5kQ2hpbGQoZGVsKTtcblxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGZvcm0uY2xhc3NMaXN0LmNvbnRhaW5zKCdmcmVlRm9ybScpKXtcbiAgICAgICAgICAgIGlucHV0LnJlcGxhY2VXaXRoKHRleHQpOyBcbiAgICAgICAgfVxuXG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgdmFsdWUgPSBpbnB1dC52YWx1ZVxuICAgICAgICAgICAgZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQuZmlyc3RDaGlsZC5ub2RlVmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgICAgIGlucHV0LnJlbW92ZSgpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBlbmFibGVCdG5zKCk7XG4gICAgXG4gICAgICAgIHJldmVydC5yZW1vdmUoKTtcbiAgICAgICAgZXZlbnQudGFyZ2V0LnJlbW92ZSgpO1xuXG5cbiAgICAgICAgcmV0dXJuICAgICAgICAgXG4gICAgIH1cblxuICAgICBjb25zdCByZXZlcnRNb2RpZmllZEVsZW1lbnQgPSBmdW5jdGlvbihldmVudCl7XG4gICAgICAgIFxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBjb25zdCBmb3JtID0gZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQ7XG4gICAgICAgIGNvbnN0IHN1Ym1pdCA9IGV2ZW50LnRhcmdldC5wcmV2aW91c0VsZW1lbnRTaWJsaW5nO1xuICAgICAgICBjb25zdCBpbnB1dCA9IHN1Ym1pdC5wcmV2aW91c0VsZW1lbnRTaWJsaW5nO1xuICAgICAgICBjb25zdCBsYWJlbCA9IERPTS5lbGVtZW50SW5pdCgnbGFiZWwnLCB7J2Zvcic6IGAke2V2ZW50LnRhcmdldC5kYXRhc2V0LnRyYW5zZmVyfWAsICdjbGFzcyc6J2VkaXQnfSxgJHtldmVudC50YXJnZXQuZGF0YXNldC50cmFuc2Zlcn1gKTsgLy90ZW1wb3JhcnksIHVwZGF0ZSB0byB1c2UgbG9jYWwgc3RvcmFnZSAmIGJhY2tlbmRcbiAgICAgICAgY29uc3QgdGV4dCA9IERPTS5lbGVtZW50SW5pdCgncCcsIHsnY2xhc3MnOid0ZXh0IGVkaXQnfSwgYCR7ZXZlbnQudGFyZ2V0LmRhdGFzZXQudHJhbnNmZXJ9YCk7IC8vdGVtcG9yYXJ5LCB1cGRhdGUgdG8gdXNlIGxvY2FsIHN0b3JhZ2UgJiBiYWNrZW5kXG4gICAgICAgIGNvbnN0IGRlbCA9IERPTS5lbGVtZW50SW5pdCgnYnV0dG9uJywgeydjbGFzcyc6ICdkZWxldGVDaGVjayBub25lJ30sJ2RlbGV0ZScgKSBcblxuXG4gICAgICAgIGlmKGZvcm0uY2xhc3NMaXN0LmNvbnRhaW5zKCdjaGVja2JveCcpKXtcbiAgICAgICAgICAgIGlucHV0LnJlcGxhY2VXaXRoKGxhYmVsKTtcbiAgICAgICAgICAgIGxhYmVsLmFwcGVuZENoaWxkKGRlbCk7XG5cbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChmb3JtLmNsYXNzTGlzdC5jb250YWlucygnZnJlZUZvcm0nKSl7XG4gICAgICAgICAgICBpbnB1dC5yZXBsYWNlV2l0aCh0ZXh0KTsgXG4gICAgICAgIH1cblxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gZXZlbnQudGFyZ2V0LmRhdGFzZXQudHJhbnNmZXI7IC8vdGVtcG9yYXJ5LCB1cGRhdGUgdG8gdXNlIGxvY2FsIHN0b3JhZ2UgJiBiYWNrZW5kXG4gICAgICAgICAgICBldmVudC50YXJnZXQucGFyZW50RWxlbWVudC5maXJzdENoaWxkLm5vZGVWYWx1ZSA9IHZhbHVlO1xuICAgICAgICAgICAgaW5wdXQucmVtb3ZlKCk7XG4gICAgICAgIH1cbiAgICAgICAgIFxuICAgICAgICBlbmFibGVCdG5zKCk7XG4gICAgXG4gICAgICAgIHN1Ym1pdC5yZW1vdmUoKTtcbiAgICAgICAgZXZlbnQudGFyZ2V0LnJlbW92ZSgpO1xuICAgICAgICByZXR1cm4gICAgICAgICBcbiAgICAgfVxuICAgICBcbiAgICAgXG4gICAgY29uc3QgY2hvb3NlVG9Eb1RpdGxlRm9ybSA9IGZ1bmN0aW9uKGV2ZW50KXtcbiAgICAgICAgY29uc3QgZG9tUHJvamVjdCA9IGV2ZW50LnRhcmdldC5wYXJlbnRFbGVtZW50O1xuXG4gICAgICAgIGNvbnN0IF9nZW5lcmF0ZVRpdGxlRm9ybSA9IChmdW5jdGlvbigpe1xuICAgICAgICAgICAgIGNvbnN0IGZvcm0gPSAgRE9NLmVsZW1lbnRJbml0KCdmb3JtJywgeydjbGFzcyc6ICdjaG9vc2VUaXRsZUZvcm0nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnaWQnOiAnY2hvb3NlVGl0bGVGb3JtJ30pXG4gICAgICAgICAgICAgY29uc3QgbGFiZWwgPSBET00uZWxlbWVudEluaXQoJ2xhYmVsJyx7J2Zvcic6J2Nob29zZVlvdXJUaXRsZSd9LCdDaG9vc2UgWW91ciBOb3RlXFwncyBUaXRsZScpO1xuICBcbiAgICAgICAgICAgICBjb25zdCB0aXRsZUlucHV0ID0gRE9NLmVsZW1lbnRJbml0KCdpbnB1dCcseyd0eXBlJzondGV4dCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnYXV0b2NvbXBsZXRlJzonb2ZmJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAncmVxdWlyZWQnOidyZXF1aXJlZCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2lkJzoncHJvdlRpdGxlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnY2xhc3MnOiAncHJvdlRpdGxlJ30sKTtcbiAgICAgICAgICAgIGNvbnN0IHN1Ym1pdFRpdGxlID0gRE9NLmVsZW1lbnRJbml0KCdidXR0b24nLCB7J3R5cGUnOidzdWJtaXQnfSwgJ1N1Ym1pdCcpO1xuICAgICAgICAgICAgY29uc3QgY2FuY2VsVGl0bGUgPSBET00uZWxlbWVudEluaXQoJ2J1dHRvbicsIHsnY2xhc3MnOidjYW5jZWxUaXRsZSd9LCAnQ2FuY2VsJyk7XG4gICAgICAgICAgICBmb3JtLmFwcGVuZENoaWxkKGxhYmVsKTtcbiAgICAgICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQodGl0bGVJbnB1dCk7XG4gICAgICAgICAgICBmb3JtLmFwcGVuZENoaWxkKHN1Ym1pdFRpdGxlKTtcbiAgICAgICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQoY2FuY2VsVGl0bGUpO1xuICAgICAgICAgICAgZm9ybS5vbnN1Ym1pdCA9IGRlbGVnYXRvcjtcbiAgICAgICAgICAgIHJldHVybiBmb3JtXG4gICAgICAgIH0pKCkgXG4gICAgICAgIFxuICAgICAgICBkb21Qcm9qZWN0LmFwcGVuZENoaWxkKF9nZW5lcmF0ZVRpdGxlRm9ybSlcbiAgICAgICAgcmV0dXJuXG5cbiAgICB9XG4gICAgY29uc3Qgc3VibWl0VG9Eb1RpdGxlID0gZnVuY3Rpb24oZXZlbnQpe1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpOyBcbiAgICAgICAgY29uc3QgcHJvdlRpdGxlID0gRE9NLnNlbGVjdEVsZW0oJyNwcm92VGl0bGUnKTtcbiAgICAgICAgY29uc3QgZG9tUHJvamVjdCA9IGV2ZW50LnRhcmdldC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQ7XG4gICAgICAgIGRvbVByb2plY3QuYXBwZW5kQ2hpbGQocHJvdlRpdGxlKTtcbiAgICAgICAgcHJvdlRpdGxlLmNsYXNzTGlzdC50b2dnbGUoJ25vbmUnLHRydWUpO1xuICAgICAgICBcbiAgICAgICAgZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC50b2dnbGUoJ25vbmUnLHRydWUpO1xuXG4gICAgICAgIHJldHVyblxuICAgICAgICBcbiAgICB9XG4gICAgIFxuICAgICBjb25zdCBjaG9vc2VOb3RlVHlwZSA9IGZ1bmN0aW9uKGV2ZW50KXtcbiAgICAgICAgY29uc3QgZG9tUHJvamVjdCA9IGV2ZW50LnRhcmdldC5wYXJlbnRFbGVtZW50O1xuXG4gICAgICAgICBjb25zdCBmb3JtID0gIERPTS5lbGVtZW50SW5pdCgnZm9ybScsIHsnY2xhc3MnOiAnY2hvb3NlTm90ZVR5cGUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdpZCc6ICdub3RlVHlwZUZvcm0nICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICBjb25zdCBsYWJlbCA9IERPTS5lbGVtZW50SW5pdCgnbGFiZWwnLHsnZm9yJzonY2hvb3NlTm90ZVR5cGUnfSwnQ2hvb3NlIFlvdXIgTm90ZSBUeXBlJyk7XG4gICAgICAgICBjb25zdCBzZWxlY3QgPSBET00uZWxlbWVudEluaXQoJ3NlbGVjdCcseydjbGFzcyc6J3NlbGVjdCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2lkJzogJ3NlbGVjdCcgfSk7XG4gICAgICAgICBjb25zdCBvcHRHcm91cCA9IERPTS5lbGVtZW50SW5pdCgnb3B0Z3JvdXAnLHsnbGFiZWwnOiAnTm90ZSBPcHRpb25zJ30sICdDaG9vc2UgeW91ciBub3RlIHR5cGUnKTtcbiAgICAgICAgIGNvbnN0IGNoZWNrbGlzdE9wdCA9IERPTS5lbGVtZW50SW5pdCgnb3B0aW9uJyx7J25hbWUnOiAnY2hlY2tsaXN0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdjbGFzcyc6ICdjaGVja2xpc3QnfSwnQ2hlY2tsaXN0Jyk7XG4gICAgICAgICBjb25zdCBpbnB1dE9wdCA9IERPTS5lbGVtZW50SW5pdCgnb3B0aW9uJyx7J25hbWUnOiAnaW5wdXQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnY2xhc3MnOiAnaW5wdXQnfSwnRnJlZWZvcm0nKTtcbiAgICAgICAgIGNvbnN0IGNob2ljZSA9IERPTS5lbGVtZW50SW5pdCgnYnV0dG9uJywgeyd0eXBlJzonc3VibWl0J30sICdTdWJtaXQnKTtcbiAgICAgICAgIGNvbnN0IGNhbmNlbCA9IERPTS5lbGVtZW50SW5pdCgnYnV0dG9uJywgeydjbGFzcyc6J2NhbmNlbENob2ljZSd9LCAnQ2FuY2VsJyk7XG4gICAgICAgICBcbiAgICAgICAgIHNlbGVjdC5hcHBlbmRDaGlsZChvcHRHcm91cCk7XG4gICAgICAgICBvcHRHcm91cC5hcHBlbmRDaGlsZChjaGVja2xpc3RPcHQpO1xuICAgICAgICAgb3B0R3JvdXAuYXBwZW5kQ2hpbGQoaW5wdXRPcHQpO1xuICAgICAgICAgZm9ybS5hcHBlbmRDaGlsZChsYWJlbCk7XG4gICAgICAgICBmb3JtLmFwcGVuZENoaWxkKHNlbGVjdCk7XG4gICAgICAgICBmb3JtLmFwcGVuZENoaWxkKERPTS5lbGVtZW50SW5pdCgnYnInKSk7XG4gICAgICAgICBmb3JtLmFwcGVuZENoaWxkKGNob2ljZSk7XG4gICAgICAgICBmb3JtLmFwcGVuZENoaWxkKGNhbmNlbClcblxuICAgICAgICAgZGlzYWJsZUJ0bnMoKTtcbiAgICAgICAgIGZvcm0ub25zdWJtaXQgPSBkZWxlZ2F0b3I7XG4gICAgICAgICBkb21Qcm9qZWN0LmFwcGVuZENoaWxkKGZvcm0pO1xuXG4gICAgICAgICByZXR1cm4gZm9ybVxuICAgIH1cbiAgICAgXG4gICAgIGNvbnN0IHJldmVhbENyZWF0ZUZvcm0gPSBmdW5jdGlvbigpe1xuICAgICAgICBsZXQgaGlkZGVuID0gRE9NLnNlbGVjdEVsZW0oJyNjcmVhdGVGb3JtJyk7XG4gICAgICAgIGhpZGRlbi5jbGFzc0xpc3QudG9nZ2xlKCdoaWRkZW4nLCBmYWxzZSk7XG4gICAgICAgIFxuICAgICB9XG5cbiAgICAgY29uc3QgdG9nZ2xlU2l6ZSA9IGZ1bmN0aW9uKGV2ZW50KXtcbiAgICAgICAgaWYgKGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ3Byb2plY3QnKSl7XG5cbiAgICAgICAgY29uc3QgY29udGFpbmVyID0gRE9NLnNlbGVjdEVsZW0oYCNjb250YWluZXIke2V2ZW50LnRhcmdldC5kYXRhc2V0LmlkfWAgKSAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgIGNvbnRhaW5lci5jbGFzc0xpc3QudG9nZ2xlKCdub25lJyk7XG5cbiAgICAgICAgfVxuXG4gICAgICAgIGVsc2Uge1xuICAgICAgICBcbiAgICAgICAgY29uc3QgZm9ybSA9IGV2ZW50LnRhcmdldC5wYXJlbnRFbGVtZW50OyAgICBcbiAgICAgICAgY29uc3QgZm9ybUNoaWxkcmVuID0gQXJyYXkuZnJvbShmb3JtLmNoaWxkcmVuKTtcbiAgICAgICAgZm9ybUNoaWxkcmVuLmZvckVhY2goaXRtID0+IGl0bS5kYXRhc2V0LmNsYXNzID09PSBgY2hpbGQke2Zvcm0uZGF0YXNldC5pZH1gID8gaXRtLmNsYXNzTGlzdC50b2dnbGUoJ25vbmUnKSA6IGZhbHNlKSAgICAgICBcbiAgICAgICAgICAgIFxuICAgICAgICB9XG4gICAgIH1cblxuICAgICBjb25zdCBub3RlVHlwZUdlbmVyYXRvciA9IGZ1bmN0aW9uKGV2ZW50KXsgXG5cbiAgICAgICAgY29uc3QgZ2V0U2VsZWN0ZWQgPSAoZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICBjb25zdCBzZWxlY3QgPSAgRE9NLnNlbGVjdEVsZW0oJyNzZWxlY3QnKTtcbiAgICAgICAgICAgICByZXR1cm4gc2VsZWN0Lm9wdGlvbnNbc2VsZWN0LnNlbGVjdGVkSW5kZXhdLnZhbHVlO1xuICAgICAgICB9KSgpXG4gICAgICAgIFxuICAgICAgICBjb25zdCBfZ2VuZXJhdGVUZW1wb3JhcnlJbnB1dCA9IChmdW5jdGlvbigpe1xuICAgICAgICAgICAgY29uc3QgcHJvamVjdCA9IERPTS5zZWxlY3RFbGVtKCcjbm90ZVR5cGVGb3JtJykucGFyZW50RWxlbWVudDtcbiAgICAgICAgICAgXG4gICAgICAgIGlmIChnZXRTZWxlY3RlZCA9PT0gJ0NoZWNrbGlzdCcpeyAgICBcbiAgICAgICAgICAgIGxldCB0ZW1wb3JhcnlJbnB1dCA9IERPTS5lbGVtZW50SW5pdCgnaW5wdXQnLHsndHlwZSc6J3RleHQnLFxuICAgICAgICAgICAgJ2F1dG9jb21wbGV0ZSc6J29mZicsXG4gICAgICAgICAgICAncmVxdWlyZWQnOidyZXF1aXJlZCcsXG4gICAgICAgICAgICAnaWQnOid0ZW1wb3JhcnlJbnB1dCcsXG4gICAgICAgICAgICdjbGFzcyc6ICd0ZW1wb3JhcnlJbnB1dCBub25lJ30pOyAgXG4gICAgICAgICAgICBwcm9qZWN0LmFwcGVuZENoaWxkKHRlbXBvcmFyeUlucHV0KTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBsZXQgdGV4dEFyZWEgPSBET00uZWxlbWVudEluaXQoJ3RleHRhcmVhJywgeydpZCc6J3RlbXBvcmFyeUlucHV0JyxcbiAgICAgICAgICAgICAgICAnbmFtZSc6J2ZyZWVGb3JtJyxcbiAgICAgICAgICAgICAgICAnbGFiZWwnOidmcmVlRm9ybScsXG4gICAgICAgICAgICAgICAgJ2NsYXNzJzondGVtcG9yYXJ5SW5wdXQgbm9uZScsXG4gICAgICAgICAgICAgICAgJ2F1dG9jb21wbGV0ZSc6J29mZicsXG4gICAgICAgICAgICAgICAgJ3JlcXVpcmVkJzoncmVxdWlyZWQnLFxuICAgICAgICAgICAgICAgICdyb3dzJyA6ICc0JyxcbiAgICAgICAgICAgICAgICAnY29scycgOiAnNTAnIH0pO1xuICAgICAgICAgICAgcHJvamVjdC5hcHBlbmRDaGlsZCh0ZXh0QXJlYSk7ICAgXG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIH0pKClcbiAgICAgICAgXG4gICAgICAgIHByb2plY3RFdmVudHMucHVibGlzaCgnZGVsZXRlTm90ZVR5cGVGb3JtJywgZXZlbnQpO1xuICAgICAgICBwcm9qZWN0RXZlbnRzLnB1Ymxpc2goJ2NyZWF0ZU5vdGUnLCBnZXRTZWxlY3RlZCk7XG5cblxuICAgICAgICAvL3JlbWVtYmVyIGNyZWF0ZW5vdGUgdGhpbmcgd2lsbCBhcHBseSB0byB0aGUgYmFja2VuZCBhcyB3ZWxsLFxuICAgICAgICAvLyBzbyB3aGVuIHlvdSBwYXNzIGluIHRoYXQgYXJndW1lbnQsIHRoYXQncyB3aGVuIHRoZSAndHlwZSdcbiAgICAgICAgLy8gb2YgdGhlIG5vdGUgd2lsbCBiZSBzdG9yZWQgaW4gdGhlcmUuIFxuICAgICAgICBcbiAgICAgICAgXG4gICAgICAgIHJldHVybiBnZXRTZWxlY3RlZFxuICAgICB9XG5cblxuXG4gICAgY29uc3QgZGVsZXRlRm9ybXMgPSBmdW5jdGlvbihldmVudCl7XG5cbiAgICAgICAgIFxuICAgICAgICBjb25zdCBfY2FuY2VsTm90ZVR5cGVGb3JtID0gZnVuY3Rpb24oKXtcblxuICAgICAgICAgICAgY29uc3QgX2RlbGV0ZVByb3ZUaXRsZSA9IGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAgICAgIGNvbnN0IHByb3ZUaXRsZSA9ICBET00uc2VsZWN0RWxlbSgnI3Byb3ZUaXRsZScpXG4gICAgICAgICAgICAgICAgIHByb3ZUaXRsZSA/IHByb3ZUaXRsZS5yZW1vdmUoKSA6IGZhbHNlXG4gICAgICAgICAgICAgICAgIHJldHVybiAgIFxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgY29uc3QgX2RlbGV0ZUFkZE5vdGVGb3JtID0gKGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAgICAgIGNvbnN0IG5vdGVUeXBlRm9ybSA9IERPTS5zZWxlY3RFbGVtKCcjbm90ZVR5cGVGb3JtJyk7XG4gICAgICAgICAgICAgICAgIG5vdGVUeXBlRm9ybSA/IG5vdGVUeXBlRm9ybS5yZW1vdmUoKSA6IGZhbHNlO1xuICAgICAgICAgICAgICAgICByZXR1cm5cblxuICAgICAgICAgICAgIH0pKCk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGV2ZW50LnRhcmdldC5jbGFzc05hbWUgPT09ICdjYW5jZWxDaG9pY2UnID8gX2RlbGV0ZVByb3ZUaXRsZSgpIDogZmFsc2U7IFxuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cblxuXG4gICAgICAgICBsZXQgZGVsZXRlZCA9IERPTS5zZWxlY3RFbGVtKCcjY2hvb3NlVGl0bGVGb3JtJyk7XG4gICAgICAgICBkZWxldGVkID8gZGVsZXRlZC5yZW1vdmUoKSA6IF9jYW5jZWxOb3RlVHlwZUZvcm0oKVxuICAgICAgICAgXG4gICAgICAgICByZXR1cm5cblxuXG4gICAgfVxuXG4gICAgY29uc3QgY2xlYW5Ub0RvRm9ybSA9IGZ1bmN0aW9uKCl7XG4gICAgICBcbiAgICAgIGNvbnN0IGZvcm0gPSBET00uc2VsZWN0RWxlbSgnI3N1Ym1pdE5vdGUnKS5wYXJlbnRFbGVtZW50O1xuICAgICAgY29uc3QgcHJvamVjdCA9IERPTS5zZWxlY3RFbGVtKCcjdGVtcG9yYXJ5SW5wdXQnKS5wYXJlbnRFbGVtZW50OyAgXG5cbiAgICAgIGNvbnN0IF9kZWxldGVUcmFuc2l0b3J5U3R1ZmYgPSAoZnVuY3Rpb24oKXsgIFxuICAgICAgICBsZXQgZGVsZXRlZCA9IERPTS5zZWxlY3RFbGVtKCcjdGVtcG9yYXJ5SW5wdXQnKTtcbiAgICAgICAgZGVsZXRlZC5yZW1vdmUoKTtcblxuICAgICAgICBkZWxldGVkID0gRE9NLnNlbGVjdEVsZW0oJyNzdWJtaXROb3RlJyk7XG4gICAgICAgIGRlbGV0ZWQucmVtb3ZlKCk7XG5cbiAgICAgICAgZGVsZXRlZCA9IERPTS5zZWxlY3RFbGVtKCcjY2FuY2VsTm90ZScpO1xuICAgICAgICBkZWxldGVkLnJlbW92ZSgpOyBcbiAgICB9KSgpXG4gICAgICBcbiAgICAgIGNvbnN0IF9jb252ZXJ0QWRkQ2hlY2sgPSAoZnVuY3Rpb24oKXsgXG5cbiAgICAgICAgbGV0IGNvbnZlcnQgPSBET00uc2VsZWN0RWxlbShgI2FkZENoZWNrJHtwcm9qZWN0LmRhdGFzZXQuaWR9JHtmb3JtLmRhdGFzZXQuaWR9YCk7XG5cbiAgICAgICAgaWYgKGNvbnZlcnQpe1xuICAgICAgICAgICAgY29udmVydC5yZW1vdmVBdHRyaWJ1dGUoJ2NsYXNzJyk7XG4gICAgICAgICAgICBjb252ZXJ0LmNsYXNzTmFtZSA9ICdhZGRDaGVja01vZCc7XG4gICAgICBcbiAgICAgICAgfVxuICAgIH0pKClcblxuICAgICAgY29uc3QgX3JlbW92ZVdoZXJlRW1wdHkgPSAoZnVuY3Rpb24oKXtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IGZvcm1DaGlsZHJlbiA9IEFycmF5LmZyb20oZm9ybS5jaGlsZHJlbik7XG4gICAgICAgIGNvbnN0IGNoaWxkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtY2xhc3M9Y2hpbGQke2Zvcm0uZGF0YXNldC5pZH1dYClcbiAgICAgICAgIShmb3JtQ2hpbGRyZW4uaW5jbHVkZXMoY2hpbGQpKSA/IGZvcm0ucmVtb3ZlKCkgOiBmYWxzZTtcblxuICAgIH0pKClcblxuICAgICAgICByZXR1cm5cbiAgICB9XG4gICAgICAgIFxuXG4gICAgY29uc3QgY2FuY2VsTm90ZSA9IGZ1bmN0aW9uKGV2ZW50KXtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IGNhbmNlbCA9IGV2ZW50LnRhcmdldDtcbiAgICAgICAgY29uc3QgaW5wdXQgPSBET00uc2VsZWN0RWxlbSgnI3RlbXBvcmFyeUlucHV0Jyk7XG5cbiAgICAgICAgY2FuY2VsLmNsYXNzTGlzdC50b2dnbGUoJ25vbmUnLHRydWUpO1xuICAgICAgICBpbnB1dC52YWx1ZSA9ICcnO1xuICAgICAgICBpbnB1dC5jbGFzc0xpc3QudG9nZ2xlKCdub25lJyx0cnVlKTtcblxuICAgICAgICByZXR1cm4gICAgICAgIFxuICAgIH1cblxuICAgIFxuICAgIGNvbnN0IGdlbmVyYXRlTmV3QWRkQ2hlY2sgPSBmdW5jdGlvbihldmVudCl7XG4gICAgICAgIFxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBjb25zdCBmb3JtID0gZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQ7XG4gICAgICAgIGNvbnN0IHByb2plY3QgPSBmb3JtLnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudDtcblxuICAgICAgICBpZihET00uc2VsZWN0RWxlbSgnI3RlbXBvcmFyeUlucHV0JykgJiYgRE9NLnNlbGVjdEVsZW0oJyN0ZW1wb3JhcnlJbnB1dCcpLmxhYmVsID09PSAnZnJlZUZvcm0nKXtcbiAgICAgICAgICAgIERPTS5zZWxlY3RFbGVtKCcjdGVtcG9yYXJ5SW5wdXQnKS5yZW1vdmUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghRE9NLnNlbGVjdEVsZW0oJyN0ZW1wb3JhcnlJbnB1dCcpKXtcbiAgICAgICAgY29uc3QgdGVtcG9yYXJ5SW5wdXQgPSBET00uZWxlbWVudEluaXQoJ2lucHV0Jyx7J3R5cGUnOid0ZXh0JyxcbiAgICAgICAgJ2F1dG9jb21wbGV0ZSc6J29mZicsXG4gICAgICAgICdyZXF1aXJlZCc6J3JlcXVpcmVkJyxcbiAgICAgICAgJ2lkJzondGVtcG9yYXJ5SW5wdXQnLFxuICAgICAgICAnY2xhc3MnOiAndGVtcG9yYXJ5SW5wdXQgbm9uZSd9KTtcblxuICAgICAgICBwcm9qZWN0LmFwcGVuZENoaWxkKHRlbXBvcmFyeUlucHV0KTtcbiAgICAgICAgZGlzYWJsZUJ0bnMoZXZlbnQudGFyZ2V0KTtcbiAgICAgICAgdGVtcG9yYXJ5SW5wdXQub25pbnB1dCA9IGRlbGVnYXRvcjtcbiAgICBcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghRE9NLnNlbGVjdEVsZW0oJyNzdWJtaXROb3RlJykpeyAgICAgICBcbiAgICAgICAgIGNvbnN0IG9yaWdpbmFsU3VibWl0ID0gRE9NLmVsZW1lbnRJbml0KCdidXR0b24nLHsndHlwZSc6J3N1Ym1pdCcsXG4gICAgICAgICdpZCc6ICdzdWJtaXROb3RlJywgXG4gICAgICAgICdjbGFzcyc6J3N1Ym1pdE5vdGUgbm9uZScsXG4gICAgICAgIH0sJ1N1Ym1pdCBOb3RlJylcblxuICAgICAgICBmb3JtLmFwcGVuZENoaWxkKG9yaWdpbmFsU3VibWl0KTtcblxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBpZiAoIURPTS5zZWxlY3RFbGVtKCcjY2FuY2VsTm90ZScpKXsgICAgICAgXG4gICAgICAgICAgICBjb25zdCBjYW5jZWwgPSBET00uZWxlbWVudEluaXQoJ2J1dHRvbicse1xuICAgICAgICAgICAnaWQnOiAnY2FuY2VsTm90ZScsIFxuICAgICAgICAgICAnY2xhc3MnOidjYW5jZWwgbm9uZScsXG4gICAgICAgICAgIH0sJ0NhbmNlbCcpXG4gICBcbiAgICAgICAgICAgZm9ybS5hcHBlbmRDaGlsZChjYW5jZWwpO1xuICAgIFxuICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgcHJvamVjdEV2ZW50cy5wdWJsaXNoKCduZXdDaGVja0l0ZW0nLCBldmVudCk7XG5cbiAgICAgICAgcmV0dXJuXG5cbiAgICB9XG5cbiAgICBjb25zdCBhZGROZXdDaGVjayA9IGZ1bmN0aW9uKGV2ZW50KXtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgY29uc3QgaW5wdXQgPSBET00uc2VsZWN0RWxlbSgnI3RlbXBvcmFyeUlucHV0Jyk7XG4gICAgICAgIGNvbnN0IHN1Ym1pdCA9IERPTS5zZWxlY3RFbGVtKCcjc3VibWl0Tm90ZScpO1xuICAgICAgICBjb25zdCBjYW5jZWwgPSBET00uc2VsZWN0RWxlbSgnI2NhbmNlbE5vdGUnKTtcbiAgICAgICAgaW5wdXQuY2xhc3NMaXN0LnRvZ2dsZSgnbm9uZScsZmFsc2UpO1xuICAgICAgICBpbnB1dC5mb2N1cygpO1xuICAgICAgICBkaXNhYmxlQnRucygpO1xuICAgICAgICBzdWJtaXQuY2xhc3NMaXN0LnRvZ2dsZSgnbm9uZScsZmFsc2UpO1xuICAgICAgICBjYW5jZWwuY2xhc3NMaXN0LnRvZ2dsZSgnbm9uZScsZmFsc2UpO1xuICAgICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBcbiAgICAgIGNvbnN0IF9nZW5lcmF0ZUNoZWNrSXRlbSA9IGZ1bmN0aW9uKCl7XG4gICAgICAgIGNvbnN0IGlucHV0ID0gRE9NLnNlbGVjdEVsZW0oJyN0ZW1wb3JhcnlJbnB1dCcpO1xuICAgICAgICBjb25zdCBmb3JtID0gRE9NLnNlbGVjdEVsZW0oJyNzdWJtaXROb3RlJykucGFyZW50RWxlbWVudDtcblxuICAgICAgICBjb25zdCBkZWwgPSBET00uZWxlbWVudEluaXQoJ2J1dHRvbicsIHsnY2xhc3MnOiAnZGVsZXRlQ2hlY2sgbm9uZSd9LCdkZWxldGUnICkgLy90byBlZGl0IHdoZW4gY3JlYXRpbmcgZHJvcGRvd25cbiAgICAgICBcbiAgICAgICAgY29uc3QgY2hlY2tib3ggPSBET00uZWxlbWVudEluaXQoJ2lucHV0Jywgeyd0eXBlJzonY2hlY2tib3gnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2RhdGEtY2xhc3MnOmBjaGlsZCR7Zm9ybS5kYXRhc2V0LmlkfWB9KTtcbiAgICAgICAgY29uc3QgbGFiZWwgPSBET00uZWxlbWVudEluaXQoJ2xhYmVsJywgeydmb3InOiBgJHtpbnB1dC52YWx1ZX1gLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdjbGFzcyc6ICdlZGl0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdkYXRhLWNsYXNzJzpgY2hpbGQke2Zvcm0uZGF0YXNldC5pZH1gfSxgJHtpbnB1dC52YWx1ZX1gKTtcbiAgICAgICAgY29uc3QgYnIgPSBET00uZWxlbWVudEluaXQoJ2JyJyx7J2RhdGEtY2xhc3MnOmBjaGlsZCR7Zm9ybS5kYXRhc2V0LmlkfWB9KTtcblxuICAgICAgICBpbnB1dC52YWx1ZSA9ICcnO1xuICAgICAgICBsYWJlbC5hcHBlbmRDaGlsZChkZWwpO1xuICAgICAgICBmb3JtLmFwcGVuZENoaWxkKGNoZWNrYm94KTtcbiAgICAgICAgZm9ybS5hcHBlbmRDaGlsZChsYWJlbCk7XG4gICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQoYnIpO1xuXG4gICAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IHN1Ym1pdEl0ZW0gPSBmdW5jdGlvbigpe1xuICAgIFxuICAgIGNvbnN0IGlucHV0ID0gRE9NLnNlbGVjdEVsZW0oJyN0ZW1wb3JhcnlJbnB1dCcpO1xuICAgIGNvbnN0IGZvcm0gPSBET00uc2VsZWN0RWxlbSgnI3N1Ym1pdE5vdGUnKS5wYXJlbnRFbGVtZW50O1xuICAgIGNvbnN0IHJlbW92ZSA9IERPTS5zZWxlY3RFbGVtKGAjcmVtb3ZlJHtpbnB1dC5wYXJlbnRFbGVtZW50LmRhdGFzZXQuaWR9JHtmb3JtLmRhdGFzZXQuaWR9YCk7XG5cbiAgICBcbiAgICBcbiAgICBpZiAoaW5wdXQudmFsdWUgPT09ICcnKXtyZXR1cm59O1xuXG4gICAgaWYgKGZvcm0uY2xhc3NMaXN0LmNvbnRhaW5zKCdjaGVja2JveCcpKXtcbiAgICAgICAgX2dlbmVyYXRlQ2hlY2tJdGVtKCk7XG4gICAgICAgIHJlbW92ZS5jbGFzc0xpc3QudG9nZ2xlKCdub25lJyxmYWxzZSk7XG4gICAgICAgIGlucHV0LmNsYXNzTGlzdC50b2dnbGUoJ25vbmUnLCB0cnVlKTsgICAgICAgIFxuICAgICAgICByZXR1cm5cbiAgICB9XG4gICAgXG4gICAgY29uc3QgdGV4dCA9IERPTS5lbGVtZW50SW5pdCgncCcsIHsnY2xhc3MnOid0ZXh0IGVkaXQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnZGF0YS1jbGFzcyc6YGNoaWxkJHtmb3JtLmRhdGFzZXQuaWR9YH0sIGAke2lucHV0LnZhbHVlfWApO1xuXG4gICAgZm9ybS5hcHBlbmRDaGlsZCh0ZXh0KTtcbiAgICByZW1vdmUuY2xhc3NMaXN0LnRvZ2dsZSgnbm9uZScsZmFsc2UpO1xuXG4gICAgcmV0dXJuXG5cbiAgIH1cblxuICAgY29uc3QgZGVsZXRlSXRlbSA9IGZ1bmN0aW9uKGV2ZW50KXtcbiAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgIGV2ZW50LnRhcmdldC5wYXJlbnRFbGVtZW50LnJlbW92ZSgpO1xuICAgIHJldHVyblxuICAgfVxuICAgXG4gICBcbiAgIGNvbnN0IGRlbGV0ZUNoZWNrID0gZnVuY3Rpb24oZXZlbnQpe1xuICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICBjb25zdCBsYWJlbCA9IGV2ZW50LnRhcmdldC5wYXJlbnRFbGVtZW50XG4gICAgICAgY29uc3QgYnIgPSBsYWJlbC5uZXh0RWxlbWVudFNpYmxpbmc7XG4gICAgICAgY29uc3QgY2hlY2sgPSBsYWJlbC5wcmV2aW91c0VsZW1lbnRTaWJsaW5nO1xuICAgICAgIGNvbnN0IGZvcm0gPSBjaGVjay5wYXJlbnRFbGVtZW50OyAgICBcblxuICAgICAgIGJyLnJlbW92ZSgpIFxuICAgICAgIGNoZWNrLnJlbW92ZSgpIFxuICAgICAgIGxhYmVsLnJlbW92ZSgpXG4gICAgICAgXG4gICAgICAgY29uc3QgZm9ybUNoaWxkcmVuID0gQXJyYXkuZnJvbShmb3JtLmNoaWxkcmVuKTtcbiAgICAgICBjb25zdCBjaGlsZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLWNsYXNzPWNoaWxkJHtmb3JtLmRhdGFzZXQuaWR9XWApXG4gICAgICAgIShmb3JtQ2hpbGRyZW4uaW5jbHVkZXMoY2hpbGQpKSA/IGZvcm0ucmVtb3ZlKCkgOiBmYWxzZTtcbiAgICAgICBcbiAgICAgICByZXR1cm5cbiAgICB9XG5cbiAgICAgcmV0dXJuIHtcbiAgICAgICAgIGNyZWF0ZVByb2plY3QsXG4gICAgICAgICBjcmVhdGVUb0RvTm90ZSxcbiAgICAgICAgIHJldmVhbENyZWF0ZUZvcm0sXG4gICAgICAgICB0b2dnbGVTaXplLFxuICAgICAgICAgY2hvb3NlVG9Eb1RpdGxlRm9ybSxcbiAgICAgICAgIHN1Ym1pdFRvRG9UaXRsZSxcbiAgICAgICAgIGNob29zZU5vdGVUeXBlLFxuICAgICAgICAgbm90ZVR5cGVHZW5lcmF0b3IsXG4gICAgICAgICBkZWxldGVGb3JtcyxcbiAgICAgICAgIGRpc2FibGVCdG5zLFxuICAgICAgICAgZW5hYmxlQnRucyxcbiAgICAgICAgIGNsZWFuVG9Eb0Zvcm0sXG4gICAgICAgICBtb2RpZnlFbGVtZW50LFxuICAgICAgICAgY2FuY2VsTm90ZSxcbiAgICAgICAgIHJldmVydE1vZGlmaWVkRWxlbWVudCxcbiAgICAgICAgIGFkZE5ld0NoZWNrLFxuICAgICAgICAgZ2VuZXJhdGVOZXdBZGRDaGVjayxcbiAgICAgICAgIHN1Ym1pdEl0ZW0sXG4gICAgICAgICBzdWJtaXRNb2RpZmllZEVsZW1lbnQsXG4gICAgICAgICBkZWxldGVJdGVtLFxuICAgICAgICAgZGVsZXRlQ2hlY2ssXG4gICAgICAgICBcbiAgICAgfVxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgKiBhcyBwcm9qZWN0cyBmcm9tICcuL3Byb2plY3RzJztcbmltcG9ydCB7IERPTUdlbmVyYWwgfSBmcm9tIFwiLi9oZWxwZXJzL0RPTVwiO1xuaW1wb3J0IHsgdGVtcGxhdGVET01TdHJ1Y3RzIH0gZnJvbSAnLi9wcm9qZWN0c0RPTSc7XG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCB7IHByb2plY3RFdmVudHMgfSBmcm9tICcuL3Byb2plY3RldmVudHMnO1xuXG5cbmNvbnN0IHJldmVhbFRvRG8gPSAoZnVuY3Rpb24oKXsgXG4gICAgXG4gICAgLy9DYWxsaW5nIG1vZHVsZSBPYmplY3RzXG4gICAgY29uc3QgRE9NID0gRE9NR2VuZXJhbCgpO1xuICAgIGNvbnN0IHN0cnVjdHMgPSB0ZW1wbGF0ZURPTVN0cnVjdHMoKTtcbiAgICBjb25zdCBtYWluID0gcHJvamVjdHMubWFpbkludGVyZmFjZSgpO1xuICAgIFxuXG4gICAgLy9Nb2R1bGUgbWV0aG9kcyB0byBiZSB1c2VkXG4gICAgY29uc3QgbmV3UHJvaiA9IG1haW4ubmV3UHJvajtcbiAgICBjb25zdCBsb2NhbFN0b3JlID0gbWFpbi50cmFuc2ZlclRvTG9jYWxTdG9yYWdlO1xuICAgIGNvbnN0IGFwcGVuZFRvUHJvaiA9IG1haW4uYXBwZW5kVG9Qcm9qO1xuICAgIGNvbnN0IHJlbW92ZVByb2ogPSBtYWluLnJlbW92ZVByb2o7XG4gICAgY29uc3QgY3JlYXRlUHJvamVjdCA9IHN0cnVjdHMuY3JlYXRlUHJvamVjdDtcbiAgICBjb25zdCByZXZlYWxDcmVhdGVGb3JtID0gc3RydWN0cy5yZXZlYWxDcmVhdGVGb3JtO1xuICAgIGNvbnN0IHRvZ2dsZVNpemUgPSBzdHJ1Y3RzLnRvZ2dsZVNpemU7XG4gICAgY29uc3QgY2hvb3NlVG9Eb1RpdGxlRm9ybSA9IHN0cnVjdHMuY2hvb3NlVG9Eb1RpdGxlRm9ybTtcbiAgICBjb25zdCBzdWJtaXRUb0RvVGl0bGUgPSBzdHJ1Y3RzLnN1Ym1pdFRvRG9UaXRsZTtcbiAgICBjb25zdCBjaG9vc2VOb3RlVHlwZSA9IHN0cnVjdHMuY2hvb3NlTm90ZVR5cGU7XG4gICAgY29uc3Qgbm90ZVR5cGVHZW5lcmF0b3IgPSBzdHJ1Y3RzLm5vdGVUeXBlR2VuZXJhdG9yO1xuICAgIGNvbnN0IGRlbGV0ZUZvcm1zID0gc3RydWN0cy5kZWxldGVGb3JtcztcbiAgICBjb25zdCBkaXNhYmxlQnRucyA9IHN0cnVjdHMuZGlzYWJsZUJ0bnM7XG4gICAgY29uc3QgY3JlYXRlVG9Eb05vdGUgPSBzdHJ1Y3RzLmNyZWF0ZVRvRG9Ob3RlO1xuICAgIGNvbnN0IGVuYWJsZUJ0bnMgPSBzdHJ1Y3RzLmVuYWJsZUJ0bnM7XG4gICAgY29uc3QgY2xlYW5Ub0RvRm9ybSA9IHN0cnVjdHMuY2xlYW5Ub0RvRm9ybTtcbiAgICBjb25zdCBhZGROZXdDaGVjayA9IHN0cnVjdHMuYWRkTmV3Q2hlY2s7XG4gICAgY29uc3QgY2FuY2VsTm90ZSA9IHN0cnVjdHMuY2FuY2VsTm90ZTtcbiAgICBjb25zdCByZXZlcnRNb2RpZmllZEVsZW1lbnQgPSBzdHJ1Y3RzLnJldmVydE1vZGlmaWVkRWxlbWVudDtcbiAgICBjb25zdCBtb2RpZnlFbGVtZW50ID0gc3RydWN0cy5tb2RpZnlFbGVtZW50O1xuICAgIGNvbnN0IHN1Ym1pdEl0ZW0gPSBzdHJ1Y3RzLnN1Ym1pdEl0ZW07XG4gICAgY29uc3QgZ2VuZXJhdGVOZXdBZGRDaGVjayA9IHN0cnVjdHMuZ2VuZXJhdGVOZXdBZGRDaGVjaztcbiAgICBjb25zdCBzdWJtaXRNb2RpZmllZEVsZW1lbnQgPSBzdHJ1Y3RzLnN1Ym1pdE1vZGlmaWVkRWxlbWVudDtcbiAgICBjb25zdCBkZWxldGVJdGVtID0gc3RydWN0cy5kZWxldGVJdGVtO1xuICAgIGNvbnN0IGRlbGV0ZUNoZWNrID0gc3RydWN0cy5kZWxldGVDaGVjaztcbiAgICBjb25zdCBkZWxlZ2F0b3IgPSBwcm9qZWN0RXZlbnRzLmRlbGVnYXRvcjtcblxuICAgIFxuICAgIFxuICAgIC8vRXZlbnQgU3Vic2NyaXB0aW9uc1xuICAgIHByb2plY3RFdmVudHMuc3Vic2NyaWJlKCd2aWV3JywgdG9nZ2xlU2l6ZSk7XG4gICAgcHJvamVjdEV2ZW50cy5zdWJzY3JpYmUoJ2NyZWF0ZScsIGNyZWF0ZVByb2plY3QpO1xuICAgIHByb2plY3RFdmVudHMuc3Vic2NyaWJlKCdjcmVhdGUnLCBuZXdQcm9qKTtcbiAgICBwcm9qZWN0RXZlbnRzLnN1YnNjcmliZSgnc2F2ZWQnLCBsb2NhbFN0b3JlKTtcbiAgICBwcm9qZWN0RXZlbnRzLnN1YnNjcmliZSgncmV2ZWFsJywgcmV2ZWFsQ3JlYXRlRm9ybSk7XG4gICAgcHJvamVjdEV2ZW50cy5zdWJzY3JpYmUoJ2Nob29zZVRpdGxlJywgZGlzYWJsZUJ0bnMpO1xuICAgIHByb2plY3RFdmVudHMuc3Vic2NyaWJlKCdjaG9vc2VUaXRsZScsIGNob29zZVRvRG9UaXRsZUZvcm0pO1xuICAgIHByb2plY3RFdmVudHMuc3Vic2NyaWJlKCdpbnB1dE9yTGlzdCcsIHN1Ym1pdFRvRG9UaXRsZSk7XG4gICAgcHJvamVjdEV2ZW50cy5zdWJzY3JpYmUoJ2lucHV0T3JMaXN0JywgY2hvb3NlTm90ZVR5cGUpO1xuICAgIHByb2plY3RFdmVudHMuc3Vic2NyaWJlKCdub3RlVG9Eb1R5cGUnLCBkZWxldGVGb3JtcylcbiAgICBwcm9qZWN0RXZlbnRzLnN1YnNjcmliZSgnbm90ZVRvRG9UeXBlJywgbm90ZVR5cGVHZW5lcmF0b3IpO1xuICAgIC8vcHJvamVjdEV2ZW50cy5zdWJzY3JpYmUoJ25vdGVUb0RvVHlwZScsIGZ1bmN0aW9uIFN0b3JlIHNlbGVjdGVkIHR5cGUgdG8gYmUgcmV0cmlldmVkIGJ5IGJhY2tlbmQgbGF0ZXIuKVxuICAgIHByb2plY3RFdmVudHMuc3Vic2NyaWJlKCdkZWxldGVOb3RlVHlwZUZvcm0nLCBkaXNhYmxlQnRucyk7XG4gICAgcHJvamVjdEV2ZW50cy5zdWJzY3JpYmUoJ2RlbGV0ZU5vdGVUeXBlRm9ybScsIGRlbGV0ZUZvcm1zKTtcbiAgICBwcm9qZWN0RXZlbnRzLnN1YnNjcmliZSgnYWJvcnROb3RlVHlwZUZvcm0nLCBkZWxldGVGb3Jtcyk7XG4gICAgcHJvamVjdEV2ZW50cy5zdWJzY3JpYmUoJ2Fib3J0Tm90ZVR5cGVGb3JtJywgZW5hYmxlQnRucyk7XG4gICAgcHJvamVjdEV2ZW50cy5zdWJzY3JpYmUoJ2Fib3J0Tm90ZVR5cGVGb3JtJywgZGVsZXRlRm9ybXMpO1xuICAgIHByb2plY3RFdmVudHMuc3Vic2NyaWJlKCdjYW5jZWxOb3RlJywgY2FuY2VsTm90ZSk7XG4gICAgcHJvamVjdEV2ZW50cy5zdWJzY3JpYmUoJ2NhbmNlbE5vdGUnLCBlbmFibGVCdG5zKTtcbiAgICBwcm9qZWN0RXZlbnRzLnN1YnNjcmliZSgnY2FuY2VsTm90ZScsIGNsZWFuVG9Eb0Zvcm0pOyAgICAgICAgXG4gICAgcHJvamVjdEV2ZW50cy5zdWJzY3JpYmUoJ25ld0NoZWNrSXRlbScsIGFkZE5ld0NoZWNrKTtcbiAgICAvL3Byb2plY3RFdmVudHMuc3Vic2NyaWJlKCdjcmVhdGVOb3RlJywgZnVuY3Rpb25SZTpCYWNrZW5kVXBkYXRlICB3aXRoIHVzZXIgc3VibWlzc2lvbiAmIGluY2x1ZGluZyB0eXBlIGNob3NlbiAmJiB3aGV0aGVyIGl0ZW1zIGFyZSBjaGVja2VkIG9yIG5vdCAoaWYgY2hlY2tib3gpLCByZW1lbWJlciBsb2NhbFN0b3JhZ2UgdXBkYXRlIGFzIHdlbGwuKVxuICAgIHByb2plY3RFdmVudHMuc3Vic2NyaWJlKCdjcmVhdGVOb3RlJywgY3JlYXRlVG9Eb05vdGUpO1xuICAgIHByb2plY3RFdmVudHMuc3Vic2NyaWJlKCdzdWJtaXROb3RlJywgc3VibWl0SXRlbSk7XG4gICAgcHJvamVjdEV2ZW50cy5zdWJzY3JpYmUoJ3N1Ym1pdE5vdGUnLCBlbmFibGVCdG5zKTtcbiAgICBwcm9qZWN0RXZlbnRzLnN1YnNjcmliZSgnc3VibWl0Tm90ZScsIGFwcGVuZFRvUHJvailcbiAgICBwcm9qZWN0RXZlbnRzLnN1YnNjcmliZSgnc3VibWl0Tm90ZScsIGNsZWFuVG9Eb0Zvcm0pO1xuICAgIHByb2plY3RFdmVudHMuc3Vic2NyaWJlKCd1cGRhdGVDaGVja0l0ZW0nLCBnZW5lcmF0ZU5ld0FkZENoZWNrKTtcbiAgICBwcm9qZWN0RXZlbnRzLnN1YnNjcmliZSgnbW9kaWZ5RWxlbScsIG1vZGlmeUVsZW1lbnQpO1xuICAgIHByb2plY3RFdmVudHMuc3Vic2NyaWJlKCdyZXZlcnQnLCByZXZlcnRNb2RpZmllZEVsZW1lbnQpO1xuICAgIHByb2plY3RFdmVudHMuc3Vic2NyaWJlKCdzdWJtaXRNb2QnLCBzdWJtaXRNb2RpZmllZEVsZW1lbnQpXG4gICAgcHJvamVjdEV2ZW50cy5zdWJzY3JpYmUoJ2RlbGV0ZScsIGRlbGV0ZUl0ZW0pO1xuICAgIHByb2plY3RFdmVudHMuc3Vic2NyaWJlKCdkZWxldGUnLCByZW1vdmVQcm9qKTtcbiAgICBwcm9qZWN0RXZlbnRzLnN1YnNjcmliZSgnZGVsZXRlQ2hlY2snLCBkZWxldGVDaGVjayk7XG4gICAgXG5cblxuICAgIC8vSW5pdGlhbCBlbGVtZW50c1xuICAgIGNvbnN0IG1haW5Db250YWluZXIgPSAoZnVuY3Rpb24oKXtcbiAgICBcbiAgICAgICAgY29uc3QgY29udGFpbmVyID0gIERPTS5lbGVtZW50SW5pdCgnZGl2Jyx7J2lkJzonY29udGFpbmVyJ30pXG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY29udGFpbmVyKVxuICAgICAgICByZXR1cm4gY29udGFpbmVyXG4gICAgIFxufSkoKVxuXG4gICAgY29uc3QgaGVhZGVyID0gKGZ1bmN0aW9uKCl7XG4gICAgICAgIFxuICAgICAgICAvL0luaXRpYWxpc2UgZWxlbWVudHNcbiAgICAgICAgY29uc3QgaGVhZCA9IERPTS5lbGVtZW50SW5pdCgnaGVhZGVyJywgeydpZCc6J2hlYWRlcid9KTtcbiAgICAgICAgY29uc3QgdGl0bGUgPSBET00uZWxlbWVudEluaXQoJ2gxJyx7J2lkJzogJ3RpdGxlJ30sICdUaGlzIGlzIHlvdXIgVG8tRG8gbGlzdCcpO1xuICAgICAgICBjb25zdCByZXZlYWxGb3JtID0gRE9NLmVsZW1lbnRJbml0KCdidXR0b24nLHsnY2xhc3MnOidyZXZlYWxGb3JtJ30sJ05ldyBQcm9qZWN0Jyk7XG4gICAgICAgIFxuICAgICAgICAvL0FkZCBoZWFkZXIgZXZlbnQgbGlzdGVuZXJcbiAgICAgICAgaGVhZC5vbmNsaWNrID0gZGVsZWdhdG9yO1xuICAgICAgICBcbiAgICAgICAgLy9BcHBlbmQgdG8gZG9jdW1lbnRcbiAgICAgICAgaGVhZC5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gICAgICAgIGhlYWQuYXBwZW5kQ2hpbGQocmV2ZWFsRm9ybSk7XG4gICAgICAgIG1haW5Db250YWluZXIuYXBwZW5kQ2hpbGQoaGVhZCk7XG5cbiAgICAgICAgcmV0dXJuIGhlYWQ7XG59KSgpXG4gICAgXG4gICAgY29uc3QgZGVmYXVsdFByb2plY3QgPSAoZnVuY3Rpb24oKXtcbiAgICAgICAgXG4gICAgfSkoKVxuXG4gICAgXG4gICAgY29uc3QgcmVuZGVyTG9jYWxTdG9yYWdlID0gZnVuY3Rpb24oKXtcbiAgICAgICAgLy9UaGlzIHdpbGwgdXNlIGxvY2FsU3RvcmFnZSB0byBjaGVja1xuICAgICAgICAvL2lmIHRoZSB1c2VyIGhhcyBhbnkgc2F2ZWQgaW5zdGFuY2VzXG4gICAgICAgIC8vb2YgcHJvamVjdHMgYW5kIHJlbmRlciB0aGVtIGlmIHNvLiBcbiAgICAgICAgLy9SZW1lbWJlciB0byB0YWtlIGFjY291bnQgYW55IGRpZmZlcmVuY2VzIGluIGRhdGEgYmV0d2VlbiBiYWNrZW5kIGFuZCBET01cbiAgICB9XG5cblxuICAgICBcbiAgICBjb25zdCBjcmVhdGVGb3JtID0gKGZ1bmN0aW9uKCl7XG4gICAgICAgICBjb25zdCBmb3JtID0gRE9NLmVsZW1lbnRJbml0KCdmb3JtJyx7J2lkJzonY3JlYXRlRm9ybScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2NsYXNzJzonaGlkZGVuIHByb2plY3RGb3JtJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQoRE9NLmVsZW1lbnRJbml0KCdicicpKTsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgZm9ybS5hcHBlbmRDaGlsZChET00uZWxlbWVudEluaXQoJ2xhYmVsJyx7J2Zvcic6J3RpdGxlSW5wJ30sJ1Byb2plY3QgVGl0bGUnKSlcbiAgICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQoRE9NLmVsZW1lbnRJbml0KCdicicpKTtcbiAgICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQoRE9NLmVsZW1lbnRJbml0KCdpbnB1dCcseyd0eXBlJzondGV4dCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2lkJyA6ICd0aXRsZUlucCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2F1dG9jb21wbGV0ZSc6ICdvZmYnLCAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ25hbWUnOid0aXRsZUlucCd9KSk7XG4gICAgICAgICBmb3JtLmFwcGVuZENoaWxkKERPTS5lbGVtZW50SW5pdCgnYnV0dG9uJyx7J3R5cGUnOidzdWJtaXQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnY2xhc3MnOiAnc3VibWl0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdpZCc6J3N1Ym1pdCd9LCdzdWJtaXQnKSk7XG4gICAgICAgICBcbiBcbiAgICAgICAgIGZvcm0ub25zdWJtaXQgPSBkZWxlZ2F0b3I7XG4gICAgICAgICBtYWluQ29udGFpbmVyLmFwcGVuZENoaWxkKGZvcm0pO1xuICAgICAgICAgcmV0dXJuIGZvcm07IFxufSkoKVxuICAgICBcblxufSkoKVxuXG4gICAgIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9