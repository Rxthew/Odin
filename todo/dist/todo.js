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
           break;
         case event.target.classList.contains('revertMod') : projectEvents.publish('revert',event);
           break;
         case event.target.classList.contains('submitMod') : projectEvents.publish('submitMod',event);
           break;
         case event.target.classList.contains('remove') : projectEvents.publish('deleteToDoNote', event);
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


   const _notestorage = new Array();
   const toDoNote = (0,_helpers_base__WEBPACK_IMPORTED_MODULE_0__.baseCreate)(_notestorage);
   
   toDoNote.name = name;
   toDoNote.type = type();
   
   
   const type = function(type='checkbox'){
      return type
   }
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

   const _projstorage = new Array();
   const project = (0,_helpers_base__WEBPACK_IMPORTED_MODULE_0__.baseCreate)(_projstorage);
   project.name = name;

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

   const removeProj = function(index){
      const proj = _overallStorage[index];
      allToDo.remove(proj);
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

   const appendProj = function(event){
      const index = _findProj(event);
      const currentProj = _overallStorage[index];
      const container = document.querySelector(`#container${index}`);
      const form = container.lastElementChild; 
      const name = 'something'
      currentProj.addToProject(name)
      return

   }

  
   
   return {
      newProj,
      transferToLocalStorage,
      appendProj,
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

   const deleteToDoNote = function(event){
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
         deleteToDoNote,
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
    const deleteToDoNote = structs.deleteToDoNote;
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
    _projectevents__WEBPACK_IMPORTED_MODULE_4__.projectEvents.subscribe('submitNote', cleanToDoForm);
    _projectevents__WEBPACK_IMPORTED_MODULE_4__.projectEvents.subscribe('updateCheckItem', generateNewAddCheck);
    _projectevents__WEBPACK_IMPORTED_MODULE_4__.projectEvents.subscribe('modifyElem', modifyElement);
    _projectevents__WEBPACK_IMPORTED_MODULE_4__.projectEvents.subscribe('revert', revertModifiedElement);
    _projectevents__WEBPACK_IMPORTED_MODULE_4__.projectEvents.subscribe('submitMod', submitModifiedElement)
    _projectevents__WEBPACK_IMPORTED_MODULE_4__.projectEvents.subscribe('deleteToDoNote', deleteToDoNote);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFFUDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakUwQzs7QUFFMUMsb0JBQW9CLHVEQUFNOztBQUUxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0RDRDOzs7QUFHNUM7O0FBRU87OztBQUdQO0FBQ0Esb0JBQW9CLHlEQUFVO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRU87O0FBRVA7QUFDQSxtQkFBbUIseURBQVU7QUFDN0I7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsV0FBVztBQUNYO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRU87QUFDUDtBQUNBO0FBQ0EsbUJBQW1CLHlEQUFVOztBQUU3QjtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSw0REFBNEQsTUFBTTtBQUNsRTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6SDJDO0FBQ0s7OztBQUd6Qzs7QUFFUCxnQkFBZ0Isd0RBQVU7QUFDMUIsc0JBQXNCLG1FQUF1Qjs7QUFFN0M7QUFDQSwwQkFBMEI7QUFDMUI7QUFDQSw2Q0FBNkMsU0FBUyxLQUFLLEVBQUUsaUJBQWlCO0FBQzlFLDBEQUEwRCxpQkFBaUI7QUFDM0UsZ0VBQWdFO0FBQ2hFO0FBQ0Esa0RBQWtEO0FBQ2xELHNEQUFzRCxnQkFBZ0IsRUFBRTtBQUN4RTtBQUNBLDBEQUEwRDtBQUMxRCx1RUFBdUUsa0NBQWtDLEVBQUU7QUFDM0csa0RBQWtELGVBQWU7QUFDakU7QUFDQTtBQUNBLGlEQUFpRDtBQUNqRCxvRUFBb0UsaUJBQWlCLEVBQUU7QUFDdkY7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNEQUFzRCxtQkFBbUI7QUFDekU7QUFDQSw2Q0FBNkM7QUFDN0Msc0VBQXNFLG1CQUFtQixFQUFFLHFCQUFxQjtBQUNoSCwrREFBK0QscUJBQXFCLEdBQUc7QUFDdkYsaURBQWlEO0FBQ2pEO0FBQ0E7QUFDQSxvREFBb0Q7QUFDcEQsa0RBQWtEO0FBQ2xELG1FQUFtRTtBQUNuRTtBQUNBLGtEQUFrRDtBQUNsRCxpRUFBaUUsbUJBQW1CLEVBQUUscUJBQXFCLEVBQUU7QUFDN0c7QUFDQSxnREFBZ0Q7QUFDaEQ7QUFDQTtBQUNBLHNFQUFzRSxtQkFBbUIsRUFBRSxxQkFBcUI7QUFDaEgsc0RBQXNELElBQUksZ0JBQWdCO0FBQzFFLGtEQUFrRCxlQUFlOztBQUVqRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esa0RBQWtEO0FBQ2xELHFFQUFxRSxtQkFBbUIsRUFBRSxxQkFBcUI7QUFDL0csMEVBQTBFLHFCQUFxQjtBQUMvRixzREFBc0Q7QUFDdEQ7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMERBQTBEO0FBQzFEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5Qjs7QUFFekI7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5REFBeUQ7QUFDekQ7QUFDQTtBQUNBO0FBQ0EsOEJBQThCO0FBQzlCO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUwsa0RBQWtEO0FBQ2xEO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBLDRCQUE0QixrQ0FBa0M7QUFDOUQsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdEQUFnRCxVQUFVLFlBQVksa0JBQWtCLElBQUksWUFBWTtBQUN4RywyQ0FBMkMsb0JBQW9CLEtBQUssWUFBWTtBQUNoRiwrQ0FBK0MsNEJBQTRCOztBQUUzRTtBQUNBLCtCQUErQjs7QUFFL0I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdEQUFnRCxVQUFVLDhCQUE4QixrQkFBa0IsSUFBSSw4QkFBOEIsSUFBSTtBQUNoSiwyQ0FBMkMsb0JBQW9CLEtBQUssOEJBQThCLElBQUk7QUFDdEcsK0NBQStDLDRCQUE0Qjs7O0FBRzNFO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHlEQUF5RDtBQUN6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esb0RBQW9EO0FBQ3BELDZFQUE2RTtBQUM3RSxvREFBb0Qsd0JBQXdCO0FBQzVFO0FBQ0EseURBQXlEO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBLHNFQUFzRTtBQUN0RSwyREFBMkQsZ0JBQWdCO0FBQzNFLDJEQUEyRCxzQkFBc0I7QUFDakY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGdEQUFnRDtBQUNoRCwrRkFBK0Y7QUFDL0YsZ0RBQWdELHVCQUF1QjtBQUN2RSxrREFBa0Q7QUFDbEQsb0VBQW9FO0FBQ3BFLHNEQUFzRCx3QkFBd0I7QUFDOUUsd0RBQXdEO0FBQ3hELDhFQUE4RTtBQUM5RSxvREFBb0Q7QUFDcEQsc0VBQXNFO0FBQ3RFLG1EQUFtRCxnQkFBZ0I7QUFDbkUsbURBQW1ELHVCQUF1QjtBQUMxRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxzREFBc0Qsd0JBQXdCO0FBQzlFOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0VBQWtFLGdCQUFnQjtBQUNsRjtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwREFBMEQ7QUFDMUQ7QUFDQTtBQUNBO0FBQ0EsMENBQTBDO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0RBQXdEO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQjtBQUMvQjtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxRQUFRLGlFQUFxQjtBQUM3QixRQUFRLGlFQUFxQjs7O0FBRzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQSxpREFBaUQsbUJBQW1CLEVBQUUsZ0JBQWdCOztBQUV0RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQSxpRUFBaUUsZ0JBQWdCO0FBQ2pGOztBQUVBLEtBQUs7O0FBRUw7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx3REFBd0Q7QUFDeEQ7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDOztBQUV2QztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMERBQTBEO0FBQzFEO0FBQ0E7QUFDQSxTQUFTOztBQUVUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxpRUFBcUI7O0FBRTdCOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSwrQ0FBK0MsNEJBQTRCO0FBQzNFO0FBQ0EsbURBQW1EO0FBQ25ELHdFQUF3RSxnQkFBZ0IsRUFBRTtBQUMxRixnREFBZ0QsVUFBVSxZQUFZO0FBQ3RFO0FBQ0EscUVBQXFFLGdCQUFnQixFQUFFLElBQUksWUFBWTtBQUN2Ryx5Q0FBeUMscUJBQXFCLGdCQUFnQixFQUFFOztBQUVoRjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0Q0FBNEMsK0JBQStCLEVBQUUsZ0JBQWdCOztBQUU3RjtBQUNBO0FBQ0EsNEJBQTRCOztBQUU1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVDQUF1QztBQUN2QywyREFBMkQsZ0JBQWdCLEVBQUUsS0FBSyxZQUFZOztBQUU5RjtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0VBQWdFLGdCQUFnQjtBQUNoRjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O1VDNW9CQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7OztBQ051QztBQUNJO0FBQ1E7QUFDOUI7QUFDMkI7OztBQUdoRDtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0Isd0RBQVU7QUFDMUIsb0JBQW9CLGdFQUFrQjtBQUN0QyxpQkFBaUIsb0RBQXNCO0FBQ3ZDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixtRUFBdUI7O0FBRTdDO0FBQ0E7QUFDQTtBQUNBLElBQUksbUVBQXVCO0FBQzNCLElBQUksbUVBQXVCO0FBQzNCLElBQUksbUVBQXVCO0FBQzNCLElBQUksbUVBQXVCO0FBQzNCLElBQUksbUVBQXVCO0FBQzNCLElBQUksbUVBQXVCO0FBQzNCLElBQUksbUVBQXVCO0FBQzNCLElBQUksbUVBQXVCO0FBQzNCLElBQUksbUVBQXVCO0FBQzNCLElBQUksbUVBQXVCO0FBQzNCLElBQUksbUVBQXVCO0FBQzNCO0FBQ0EsSUFBSSxtRUFBdUI7QUFDM0IsSUFBSSxtRUFBdUI7QUFDM0IsSUFBSSxtRUFBdUI7QUFDM0IsSUFBSSxtRUFBdUI7QUFDM0IsSUFBSSxtRUFBdUI7QUFDM0IsSUFBSSxtRUFBdUI7QUFDM0IsSUFBSSxtRUFBdUI7QUFDM0IsSUFBSSxtRUFBdUI7QUFDM0IsSUFBSSxtRUFBdUI7QUFDM0I7QUFDQSxJQUFJLG1FQUF1QjtBQUMzQixJQUFJLG1FQUF1QjtBQUMzQixJQUFJLG1FQUF1QjtBQUMzQixJQUFJLG1FQUF1QjtBQUMzQixJQUFJLG1FQUF1QjtBQUMzQixJQUFJLG1FQUF1QjtBQUMzQixJQUFJLG1FQUF1QjtBQUMzQixJQUFJLG1FQUF1QjtBQUMzQixJQUFJLG1FQUF1QjtBQUMzQixJQUFJLG1FQUF1QjtBQUMzQjs7O0FBR0E7QUFDQTtBQUNBO0FBQ0Esa0RBQWtELGlCQUFpQjtBQUNuRTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBLGdEQUFnRCxjQUFjO0FBQzlELDRDQUE0QyxjQUFjO0FBQzFELHFEQUFxRCxxQkFBcUI7QUFDMUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0EsOENBQThDO0FBQzlDO0FBQ0EsNkNBQTZDO0FBQzdDO0FBQ0EsbURBQW1ELGlCQUFpQjtBQUNwRTtBQUNBLG1EQUFtRDtBQUNuRDtBQUNBO0FBQ0Esc0VBQXNFO0FBQ3RFLG9EQUFvRDtBQUNwRDtBQUNBLG9FQUFvRTtBQUNwRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEOztBQUVBLENBQUM7O0FBRUQsSSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8vLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9oZWxwZXJzL0RPTS5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL2hlbHBlcnMvYmFzZS5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL2hlbHBlcnMvZXZlbnRzLmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvcHJvamVjdGV2ZW50cy5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL3Byb2plY3RzLmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvcHJvamVjdHNET00uanMiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImh0bWwge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcblxcbn1cXG5cXG5cXG4qLCAqOmJlZm9yZSwgKjphZnRlcntcXG4gICAgYm94LXNpemluZzogaW5oZXJpdDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLmhpZGRlbiB7XFxuICAgIHZpc2liaWxpdHk6IGhpZGRlblxcbn1cXG5cXG4ucHJvamVjdCB7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5ub25lIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLnRvRG9Ob3RlSW5wdXQge1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG59XFxuXFxuLnRleHQge1xcbiAgICB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7XFxufVxcblxcbi5tb2RJbnB1dCB7XFxuICAgIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDtcXG59XFxuXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLHNCQUFzQjs7QUFFMUI7OztBQUdBO0lBQ0ksbUJBQW1CO0lBQ25CLFNBQVM7SUFDVCxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0k7QUFDSjs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixlQUFlO0FBQ25COztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLHFCQUFxQjtBQUN6QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJodG1sIHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG5cXG59XFxuXFxuXFxuKiwgKjpiZWZvcmUsICo6YWZ0ZXJ7XFxuICAgIGJveC1zaXppbmc6IGluaGVyaXQ7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG59XFxuXFxuYm9keSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5oaWRkZW4ge1xcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW5cXG59XFxuXFxuLnByb2plY3Qge1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ubm9uZSB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi50b0RvTm90ZUlucHV0IHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxufVxcblxcbi50ZXh0IHtcXG4gICAgd2hpdGUtc3BhY2U6IHByZS13cmFwO1xcbn1cXG5cXG4ubW9kSW5wdXQge1xcbiAgICB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7XFxufVxcblxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCB0aGlzLmxlbmd0aDsgX2krKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW19pXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pMiA9IDA7IF9pMiA8IG1vZHVsZXMubGVuZ3RoOyBfaTIrKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaTJdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJleHBvcnQgY29uc3QgRE9NR2VuZXJhbCA9IGZ1bmN0aW9uKCl7XG4gICAgXG4gICAgY29uc3QgZWxlbWVudEluaXQgPSBmdW5jdGlvbihlbGVtLCBhdHRyc09iaj17fSx0ZXh0U3RyaW5nPScnKXtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGVsZW0pO1xuICAgICAgICBcbiAgICAgICAgaWYgKE9iamVjdC5rZXlzKGF0dHJzT2JqKS5sZW5ndGggPiAwKXtcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKGF0dHJzT2JqKS5mb3JFYWNoKGZ1bmN0aW9uKGF0dCl7XG4gICAgICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZShhdHQsIGF0dHJzT2JqW2F0dF0pXG4gICAgICAgIH0pXG4gICAgfSAgIFxuICAgICAgICBpZiAodGV4dFN0cmluZy5sZW5ndGggPiAwKXtcbiAgICAgICAgICAgIGVsZW1lbnQudGV4dENvbnRlbnQgPSB0ZXh0U3RyaW5nO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGVsZW1lbnQgICAgICAgXG5cbiAgICB9O1xuXG4gICBjb25zdCBzZWxlY3RFbGVtID0gZnVuY3Rpb24oc2VsZWN0b3JTdHJpbmcpe1xuXG4gICAgICAgaWYgKHNlbGVjdG9yU3RyaW5nWzBdID09PSAnIycpe1xuICAgICAgICAgICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3RvclN0cmluZylcbiAgICAgICB9XG4gICAgICAgZWxzZSB7XG4gICAgICAgICAgIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yU3RyaW5nKTtcbiAgICAgICB9XG4gICAgICAgXG4gICB9O1xuXG4gICByZXR1cm4ge1xuICAgICAgIGVsZW1lbnRJbml0LCBcbiAgICAgICBzZWxlY3RFbGVtLFxuICAgfVxuXG59XG5cblxuXG4iLCJleHBvcnQgY29uc3QgYmFzZUNyZWF0ZSA9IGZ1bmN0aW9uKHN0b3JhZ2Upe1xuICAgICAgXG5jb25zdCBfc3RvcmFnZSA9IHN0b3JhZ2UgfHwgbmV3IEFycmF5KCk7XG5cbihmdW5jdGlvbigpe1xuICAgIGlmICghQXJyYXkuaXNBcnJheShfc3RvcmFnZSkpe1xuICAgICAgICB0aHJvdyAnRXJyb3IhIEFyZ3VtZW50IG11c3QgYmUgYW4gYXJyYXknO1xuICAgIH1cbiAgICB9KSgpXG4gICAgXG5jb25zdCBhZGQgPSBmdW5jdGlvbihlbGVtKXtcbiAgICBfc3RvcmFnZS5wdXNoKGVsZW0pO1xuXG59O1xuXG5jb25zdCByZW1vdmUgPSBmdW5jdGlvbihlbGVtLCBpbmRleD0wKXtcbiAgICBpZiAoaW5kZXggPT09IDApe1xuICAgICAgICBmb3IgKGxldCBpID0gaW5kZXg7IGkgPCBfc3RvcmFnZS5sZW5ndGg7IGkrKyl7XG4gICAgICAgICAgICBpZihfc3RvcmFnZVtpXSA9PT0gZWxlbSl7XG4gICAgICAgICAgICAgICAgX3N0b3JhZ2Uuc3BsaWNlKGksMSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgIH1cbiAgICAgICAgIH0gICAgICAgICBcbiAgICAgICB9XG4gICAgICAgZWxzZSBpZiAoaW5kZXggPiAwICYmIGluZGV4IDwgX3N0b3JhZ2UubGVuZ3RoKXtcbiAgICAgICAgICAgX3N0b3JhZ2Uuc3BsaWNlKGluZGV4LCAxKVxuICAgICAgIH0gIFxufTtcblxuY29uc3QgdXBkYXRlQnlMb2NhdGlvbiA9IGZ1bmN0aW9uKGluZGV4LCByZXBsYWNlKXtcbiAgICAgICAgaWYgKGluZGV4ID4gMCAmJiBpbmRleCA8IF9zdG9yYWdlLmxlbmd0aCl7XG4gICAgICAgICAgICBfc3RvcmFnZS5zcGxpY2UoaW5kZXgsMSxyZXBsYWNlKTtcbiAgICAgICAgfVxuXG59O1xuXG5jb25zdCB1cGRhdGVCeUVsZW1lbnQgPSBmdW5jdGlvbihlbGVtLCByZXBsYWNlKXtcbiAgICAgICAgZm9yIChsZXQgeCA9IGluZGV4OyB4IDwgX3N0b3JhZ2UubGVuZ3RoOyB4Kyspe1xuICAgICAgICAgICAgaWYoX3N0b3JhZ2VbeF0gPT09IGVsZW0pe1xuICAgICAgICAgICAgICAgIF9zdG9yYWdlLnNwbGljZSh4LDEsIHJlcGxhY2UpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfX1cbn07XG5cblxuY29uc3QgbW92ZSA9IGZ1bmN0aW9uKGluZGV4LCB0YXJnZXQpe1xuICAgIGlmIChpbmRleCA+PSAwICYmIGluZGV4IDxfc3RvcmFnZS5sZW5ndGggJiYgdGFyZ2V0ID49IDAgJiYgdGFyZ2V0IDxfc3RvcmFnZS5sZW5ndGgpe1xuICAgICAgICBjb25zdCBtb3ZlZCA9IF9zdG9yYWdlW2luZGV4XTtcbiAgICAgICAgX3N0b3JhZ2Uuc3BsaWNlKGluZGV4LDEpO1xuICAgICAgICBfc3RvcmFnZS5zcGxpY2UodGFyZ2V0LDAsbW92ZWQpXG4gICAgXG4gICAgfSAgIFxuICAgIGVsc2UgaWYoaW5kZXggPj0gMCAmJiBpbmRleCA8X3N0b3JhZ2UubGVuZ3RoICYmIHRhcmdldCA+PSBfc3RvcmFnZS5sZW5ndGgpIHtcbiAgICAgICAgY29uc3QgcmVwbGFjZW1lbnQgPSBfc3RvcmFnZVtpbmRleF07XG4gICAgICAgIF9zdG9yYWdlLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgIF9zdG9yYWdlLnB1c2gocmVwbGFjZW1lbnQpO1xuXG4gICAgfSAgICBcbn07XG5cbmNvbnN0IHN3YXAgPSBmdW5jdGlvbihpbmRleEEsIGluZGV4Qil7XG4gICAgaWYgKGluZGV4QSA+PSAwICYmIGluZGV4QSA8X3N0b3JhZ2UubGVuZ3RoICYmIGluZGV4QiA+PSAwICYmIGluZGV4QiA8X3N0b3JhZ2UubGVuZ3RoKXtcbiAgICAgICAgXG4gICAgICAgW19zdG9yYWdlW2luZGV4QV0sIF9zdG9yYWdlW2luZGV4Ql1dID0gW19zdG9yYWdlW2luZGV4Ql0sIF9zdG9yYWdlW2luZGV4QV1dXG4gICAgfVxuXG59O1xuXG5jb25zdCBjb3B5ID0gZnVuY3Rpb24gKGluZGV4KXtcbiAgICBpZiAoaW5kZXggPj0gMCAmJiBpbmRleCA8IF9zdG9yYWdlLmxlbmd0aCl7XG4gICAgICAgIGxldCBjbG9uZSA9IF9zdG9yYWdlW2luZGV4XTtcbiAgICAgICAgX3N0b3JhZ2UucHVzaChjbG9uZSk7XG4gICAgfVxufVxuICAgIFxuICAgIHJldHVybiB7XG4gICAgICAgIGFkZCxcbiAgICAgICAgcmVtb3ZlLFxuICAgICAgICB1cGRhdGVCeUxvY2F0aW9uLFxuICAgICAgICB1cGRhdGVCeUVsZW1lbnQsXG4gICAgICAgIG1vdmUsXG4gICAgICAgIHN3YXAsXG4gICAgICAgIGNvcHlcbiAgICB9ICAgXG59XG5cbiIsImV4cG9ydCBjb25zdCBldmVudHMgPSBmdW5jdGlvbigpe1xuXG4gICAgY29uc3QgX215RXZlbnRzID0ge307XG5cbiAgICBjb25zdCBfaXNFdmVudEhlcmUgPSBmdW5jdGlvbihuYW1lKXtcbiAgICAgICAgcmV0dXJuIF9teUV2ZW50cy5oYXNPd25Qcm9wZXJ0eShuYW1lKTtcbiAgICB9XG5cbiAgICBjb25zdCBfYWRkSGFuZGxlciA9IGZ1bmN0aW9uKG5hbWUsIG5ld0hhbmRsZXIpeyAgICAgICBcbiAgICAgICAgXG4gICAgICAgIGlmICghX2lzRXZlbnRIZXJlKG5hbWUpKXtcbiAgICAgICAgICAgICAgICBfbXlFdmVudHNbbmFtZV0gPSBbXTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICBfbXlFdmVudHNbbmFtZV0ucHVzaChuZXdIYW5kbGVyKSAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgIH07XG5cbiAgICBjb25zdCByZW1vdmVIYW5kbGVyID0gZnVuY3Rpb24obmFtZSwgdG9SZW1vdmUpe1xuXG4gICAgICAgIGlmICghX2lzRXZlbnRIZXJlKG5hbWUpKXtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICBjb25zdCBpbmRleCA9IF9teUV2ZW50c1tuYW1lXS5pbmRleE9mKHRvUmVtb3ZlKTtcbiAgICAgICAgX215RXZlbnRzW25hbWVdLnNwbGljZShpbmRleCwgMSlcblxuICAgIH07XG5cbiAgICBjb25zdCBfZmlyZU1lID0gZnVuY3Rpb24obmFtZSwgLi4ub3B0aW9uYWxBcmcpe1xuICAgICAgICAgICAgXG4gICAgICAgIGlmICghX2lzRXZlbnRIZXJlKG5hbWUpKXtcbiAgICAgICAgICAgIF9teUV2ZW50c1tuYW1lXSA9IFtdO1xuICAgICAgICB9XG5cbiAgICAgICAgX215RXZlbnRzW25hbWVdLmZvckVhY2goZnVuY3Rpb24oaCl7XG4gICAgICAgICAgICAgICByZXR1cm4gaCguLi5vcHRpb25hbEFyZylcbiAgICAgICAgfSlcbiAgICB9O1xuXG4gICAgY29uc3QgcHVibGlzaCA9IGZ1bmN0aW9uKG5hbWUsIC4uLm9wdGlvbmFsQXJnKXsgXG4gICAgICAgXG4gICAgICAgIGlmICghX2lzRXZlbnRIZXJlKG5hbWUpKXtcbiAgICAgICAgICAgIF9teUV2ZW50c1tuYW1lXSA9IFtdO1xuICAgICAgICB9O1xuXG4gICAgICAgIF9maXJlTWUobmFtZSwgLi4ub3B0aW9uYWxBcmcpXG4gICAgICAgIFxuICAgIH07XG5cbiAgICBjb25zdCBzdWJzY3JpYmUgPSBmdW5jdGlvbihuYW1lLCBuZXdIYW5kbGVyKXtcblxuICAgICAgICBpZiAoIV9pc0V2ZW50SGVyZShuYW1lKSl7XG4gICAgICAgICAgICBfbXlFdmVudHNbbmFtZV0gPSBbXTtcbiAgICAgICAgfTtcbiAgIFxuICAgICAgICBfYWRkSGFuZGxlcihuYW1lLCBuZXdIYW5kbGVyKVxuICAgICAgICBcbiAgICB9OyBcblxuICAgICAgICAgICAgXG4gICAgcmV0dXJuIHtcbiAgICAgICAgcHVibGlzaCxcbiAgICAgICAgc3Vic2NyaWJlLFxuICAgICAgICByZW1vdmVIYW5kbGVyXG4gICAgfSAgICBcbn1cblxuIiwiaW1wb3J0IHsgZXZlbnRzIH0gZnJvbSBcIi4vaGVscGVycy9ldmVudHNcIjtcblxubGV0IHByb2plY3RFdmVudHMgPSBldmVudHMoKTtcblxucHJvamVjdEV2ZW50cy5kZWxlZ2F0b3IgPSBmdW5jdGlvbihldmVudCl7XG4gICAgICBzd2l0Y2godHJ1ZSl7XG4gICAgICAgICBjYXNlIGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ3JldmVhbEZvcm0nKSA6IHByb2plY3RFdmVudHMucHVibGlzaCgncmV2ZWFsJyk7XG4gICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgY2FzZSBldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdwcm9qZWN0Rm9ybScpOiBwcm9qZWN0RXZlbnRzLnB1Ymxpc2goJ2NyZWF0ZScsIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0aXRsZUlucCcpLnZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdEV2ZW50cy5wdWJsaXNoKCdzYXZlZCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICBicmVhaztcbiAgICAgICAgIGNhc2UgZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygncHJvamVjdCcpOiBwcm9qZWN0RXZlbnRzLnB1Ymxpc2goJ3ZpZXcnLCBldmVudCk7XG4gICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgY2FzZSBldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdpdGVtVGl0bGUnKTogcHJvamVjdEV2ZW50cy5wdWJsaXNoKCd2aWV3JywgZXZlbnQpO1xuICAgICAgICAgICBicmVhazsgICAgICAgICAgIFxuICAgICAgICAgY2FzZSBldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdhZGR0b0RvTGlzdCcpOiBwcm9qZWN0RXZlbnRzLnB1Ymxpc2goJ2Nob29zZVRpdGxlJywgZXZlbnQpXG4gICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgY2FzZSBldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdjaG9vc2VUaXRsZUZvcm0nKTogcHJvamVjdEV2ZW50cy5wdWJsaXNoKCdpbnB1dE9yTGlzdCcsIGV2ZW50KVxuICAgICAgICAgICBicmVhaztcbiAgICAgICAgIGNhc2UgZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnY2hvb3NlTm90ZVR5cGUnKTogcHJvamVjdEV2ZW50cy5wdWJsaXNoKCdub3RlVG9Eb1R5cGUnLCBldmVudCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgY2FzZSBldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdjYW5jZWxUaXRsZScpIDogcHJvamVjdEV2ZW50cy5wdWJsaXNoKCdhYm9ydE5vdGVUeXBlRm9ybScsIGV2ZW50KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgIGJyZWFrOyBcbiAgICAgICAgIGNhc2UgZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnY2FuY2VsQ2hvaWNlJykgOiBwcm9qZWN0RXZlbnRzLnB1Ymxpc2goJ2Fib3J0Tm90ZVR5cGVGb3JtJyxldmVudCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICBjYXNlIGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2FkZENoZWNrJykgOiBwcm9qZWN0RXZlbnRzLnB1Ymxpc2goJ25ld0NoZWNrSXRlbScsIGV2ZW50KTtcbiAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICBjYXNlIGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2FkZENoZWNrTW9kJykgOiBwcm9qZWN0RXZlbnRzLnB1Ymxpc2goJ3VwZGF0ZUNoZWNrSXRlbScsIGV2ZW50KTtcbiAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICBjYXNlIGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2NhbmNlbCcpIDogcHJvamVjdEV2ZW50cy5wdWJsaXNoKCdjYW5jZWxOb3RlJyxldmVudCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICBicmVhaztcbiAgICAgICAgIGNhc2UgZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnZWRpdCcpIDogcHJvamVjdEV2ZW50cy5wdWJsaXNoKCdtb2RpZnlFbGVtJyxldmVudCk7XG4gICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgY2FzZSBldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdzdWJtaXROb3RlJykgOiBwcm9qZWN0RXZlbnRzLnB1Ymxpc2goJ3N1Ym1pdE5vdGUnLCBldmVudCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgY2FzZSBldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdyZXZlcnRNb2QnKSA6IHByb2plY3RFdmVudHMucHVibGlzaCgncmV2ZXJ0JyxldmVudCk7XG4gICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgY2FzZSBldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdzdWJtaXRNb2QnKSA6IHByb2plY3RFdmVudHMucHVibGlzaCgnc3VibWl0TW9kJyxldmVudCk7XG4gICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgY2FzZSBldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdyZW1vdmUnKSA6IHByb2plY3RFdmVudHMucHVibGlzaCgnZGVsZXRlVG9Eb05vdGUnLCBldmVudCk7XG4gICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgY2FzZSBldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdkZWxldGVDaGVjaycpIDogcHJvamVjdEV2ZW50cy5wdWJsaXNoKCdkZWxldGVDaGVjaycsIGV2ZW50KTtcbiAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgIC8vYWRkIG1vcmUuIFxuXG59fVxuIFxuICAgICAgIFxuXG5cblxuZXhwb3J0IHsgcHJvamVjdEV2ZW50cyB9IiwiaW1wb3J0IHsgYmFzZUNyZWF0ZSB9IGZyb20gXCIuL2hlbHBlcnMvYmFzZVwiO1xuXG5cbi8vVGVtcGxhdGUgZm9yIGEgdG9kby1ub3RlIFxuXG5leHBvcnQgY29uc3Qgc2luZ2xldG9Eb05vdGUgPSBmdW5jdGlvbihuYW1lKXtcblxuXG4gICBjb25zdCBfbm90ZXN0b3JhZ2UgPSBuZXcgQXJyYXkoKTtcbiAgIGNvbnN0IHRvRG9Ob3RlID0gYmFzZUNyZWF0ZShfbm90ZXN0b3JhZ2UpO1xuICAgXG4gICB0b0RvTm90ZS5uYW1lID0gbmFtZTtcbiAgIHRvRG9Ob3RlLnR5cGUgPSB0eXBlKCk7XG4gICBcbiAgIFxuICAgY29uc3QgdHlwZSA9IGZ1bmN0aW9uKHR5cGU9J2NoZWNrYm94Jyl7XG4gICAgICByZXR1cm4gdHlwZVxuICAgfVxuICAgY29uc3QgYWRkTm90ZSA9IGZ1bmN0aW9uKG5vdGUpe1xuICAgICAgdG9Eb05vdGUuYWRkKG5vdGUpO1xuICAgfVxuXG4gICBjb25zdCByZW1vdmVOb3RlID0gZnVuY3Rpb24oaW5kZXgpe1xuICAgICAgY29uc3Qgbm90ZSA9IF9ub3Rlc3RvcmFnZVtpbmRleF07XG4gICAgICB0b0RvTm90ZS5yZW1vdmUobm90ZSwgaW5kZXgpOyAgXG4gICB9XG5cbiAgIGNvbnN0IG1vdmVOb3RlID0gZnVuY3Rpb24oaW5kZXgsIHRhcmdldCl7XG4gICAgICB0b0RvTm90ZS5tb3ZlKGluZGV4LCB0YXJnZXQpO1xuICAgICAgICBcbiAgIH1cbiAgIFxuICAgcmV0dXJuIHRvRG9Ob3RlXG59XG5cbi8vXG5cbi8vVGVtcGxhdGUgZm9yIGEgc2luZ2xlIHByb2plY3RcblxuZXhwb3J0IGNvbnN0IHNpbmdsZVByb2ogPSBmdW5jdGlvbihuYW1lKXtcblxuICAgY29uc3QgX3Byb2pzdG9yYWdlID0gbmV3IEFycmF5KCk7XG4gICBjb25zdCBwcm9qZWN0ID0gYmFzZUNyZWF0ZShfcHJvanN0b3JhZ2UpO1xuICAgcHJvamVjdC5uYW1lID0gbmFtZTtcblxuICAgY29uc3QgYWRkVG9Qcm9qZWN0ID0gZnVuY3Rpb24obmFtZSl7XG4gICAgICBjb25zdCB0b2RvID0gc2luZ2xldG9Eb05vdGUobmFtZSlcbiAgICAgIHByb2plY3QuYWRkKHRvZG8pO1xuICAgfVxuXG4gICBjb25zdCByZW1vdmVGcm9tUHJvamVjdCA9IGZ1bmN0aW9uKGluZGV4KXtcbiAgICAgIGNvbnN0IHRvZG8gPSBwcm9qc3RvcmFnZVtpbmRleF07XG4gICAgICBwcm9qZWN0LnJlbW92ZSh0b2RvLCBpbmRleCk7ICBcbiAgIH0gXG5cbiAgIGNvbnN0IG1vdmV0b0RvID0gZnVuY3Rpb24oaW5kZXgsIHRhcmdldCl7XG4gICAgICBwcm9qZWN0Lm1vdmUoaW5kZXgsIHRhcmdldCk7XG4gICAgICAgICBcbiAgIH1cblxuICAgcmV0dXJuIHtwcm9qZWN0LFxuICAgICAgICAgIGFkZFRvUHJvamVjdCwgXG4gICB9XG5cbn0gXG5cbi8vXG5cbi8vT3ZlcmFsbCBJbnRlcmZhY2VcblxuZXhwb3J0IGNvbnN0IG1haW5JbnRlcmZhY2UgPSBmdW5jdGlvbigpe1xuICAgXG4gICBjb25zdCBfb3ZlcmFsbFN0b3JhZ2UgPSBuZXcgQXJyYXkoKTtcbiAgIGNvbnN0IGFsbFRvRG8gPSBiYXNlQ3JlYXRlKF9vdmVyYWxsU3RvcmFnZSk7XG5cbiAgIGNvbnN0IG5ld1Byb2ogPSBmdW5jdGlvbihuYW1lKXtcbiAgICAgIGNvbnN0IHByb2ogPSBzaW5nbGVQcm9qKG5hbWUpO1xuICAgICAgYWxsVG9Eby5hZGQocHJvaik7XG5cbiAgIH1cblxuICAgY29uc3QgcmVtb3ZlUHJvaiA9IGZ1bmN0aW9uKGluZGV4KXtcbiAgICAgIGNvbnN0IHByb2ogPSBfb3ZlcmFsbFN0b3JhZ2VbaW5kZXhdO1xuICAgICAgYWxsVG9Eby5yZW1vdmUocHJvaik7XG4gICB9XG4gICAgXG4gICBjb25zdCBtb3ZlUHJvaiA9IGZ1bmN0aW9uKGluZGV4LCB0YXJnZXQpe1xuICAgICAgYWxsVG9Eby5tb3ZlKGluZGV4LCB0YXJnZXQpO1xuXG4gICB9XG4gICBcbiAgIGNvbnN0IHRyYW5zZmVyVG9Mb2NhbFN0b3JhZ2UgPSBmdW5jdGlvbigpe1xuICAgICAgICAgcmV0dXJuIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdhY2Nlc3MnLCBKU09OLnN0cmluZ2lmeShfb3ZlcmFsbFN0b3JhZ2UpKVxuICAgfVxuXG4gICBjb25zdCBfZmluZFByb2ogPSBmdW5jdGlvbihldmVudCl7XG4gICAgICBjb25zdCBwcm9qID0gZXZlbnQudGFyZ2V0LmNsb3Nlc3QoJy5wcm9qZWN0JylcbiAgICAgIHJldHVybiBwcm9qLmRhdGFzZXQuaWRcbiAgIH1cblxuICAgY29uc3QgYXBwZW5kUHJvaiA9IGZ1bmN0aW9uKGV2ZW50KXtcbiAgICAgIGNvbnN0IGluZGV4ID0gX2ZpbmRQcm9qKGV2ZW50KTtcbiAgICAgIGNvbnN0IGN1cnJlbnRQcm9qID0gX292ZXJhbGxTdG9yYWdlW2luZGV4XTtcbiAgICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNjb250YWluZXIke2luZGV4fWApO1xuICAgICAgY29uc3QgZm9ybSA9IGNvbnRhaW5lci5sYXN0RWxlbWVudENoaWxkOyBcbiAgICAgIGNvbnN0IG5hbWUgPSAnc29tZXRoaW5nJ1xuICAgICAgY3VycmVudFByb2ouYWRkVG9Qcm9qZWN0KG5hbWUpXG4gICAgICByZXR1cm5cblxuICAgfVxuXG4gIFxuICAgXG4gICByZXR1cm4ge1xuICAgICAgbmV3UHJvaixcbiAgICAgIHRyYW5zZmVyVG9Mb2NhbFN0b3JhZ2UsXG4gICAgICBhcHBlbmRQcm9qLFxuICAgICAgLy9qdXN0IHRoaXMgZm9yIG5vdy5cbiAgIH1cbiAgXG4gICBcbn1cblxuIiwiaW1wb3J0IHsgRE9NR2VuZXJhbCB9IGZyb20gXCIuL2hlbHBlcnMvRE9NXCI7XG5pbXBvcnQgeyBwcm9qZWN0RXZlbnRzIH0gZnJvbSBcIi4vcHJvamVjdGV2ZW50c1wiO1xuXG5cbmV4cG9ydCBjb25zdCB0ZW1wbGF0ZURPTVN0cnVjdHMgPSBmdW5jdGlvbiAoKXtcblxuICAgIGNvbnN0IERPTSA9IERPTUdlbmVyYWwoKVxuICAgIGNvbnN0IGRlbGVnYXRvciA9IHByb2plY3RFdmVudHMuZGVsZWdhdG9yXG5cbiAgICBjb25zdCBjcmVhdGVQcm9qZWN0ID0gZnVuY3Rpb24obmFtZSl7XG4gICAgICAgICBpZiAobmFtZSA9PT0gJycpe3JldHVybn0gXG4gICAgICAgICBjb25zdCByZWZlcmVuY2UgPSBET00uc2VsZWN0RWxlbSgnLnByb2plY3QnKTsgXG4gICAgICAgICBjb25zdCBwcm9qID0gRE9NLmVsZW1lbnRJbml0KCdkaXYnLHsnaWQnOiBgJHtuYW1lfSR7cmVmZXJlbmNlLmxlbmd0aH1gLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2RhdGEtaWQnOmAke3JlZmVyZW5jZS5sZW5ndGh9YCwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnY2xhc3MnOiAncHJvamVjdCd9LG5hbWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgY29uc3QgcmVtb3ZlID0gRE9NLmVsZW1lbnRJbml0KCdidXR0b24nLCB7J2NsYXNzJzoncmVtb3ZlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnaWQnOmByZW1vdmUke3Byb2ouZGF0YXNldC5pZH1gfSwgJ1gnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICBjb25zdCBhZGRUb0RvTGlzdEJ0biA9IERPTS5lbGVtZW50SW5pdCgnYnV0dG9uJywgeydjbGFzcyc6ICdhZGR0b0RvTGlzdCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdpZCc6IGBhZGQke0RPTS5zZWxlY3RFbGVtKCcucHJvamVjdCcpLmxlbmd0aH1gfSwgJ0FkZCBUby1EbyBMaXN0Jyk7XG4gICAgICAgIGNvbnN0IG1vZGlmeSA9IERPTS5lbGVtZW50SW5pdCgnYnV0dG9uJywgeydjbGFzcyc6J2VkaXQnfSwnRWRpdCcpO1xuICAgICAgICBwcm9qLmFwcGVuZENoaWxkKHJlbW92ZSk7XG4gICAgICAgIHByb2ouYXBwZW5kQ2hpbGQobW9kaWZ5KTtcbiAgICAgICAgcHJvai5hcHBlbmRDaGlsZChET00uZWxlbWVudEluaXQoJ2RpdicseyAnY2xhc3MnOidub25lJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdpZCc6YGNvbnRhaW5lciR7cmVmZXJlbmNlLmxlbmd0aH1gfSkpO1xuICAgICAgICBwcm9qLmFwcGVuZENoaWxkKGFkZFRvRG9MaXN0QnRuKTtcblxuICAgICAgICBcbiAgICAgICAgcHJvai5vbmNsaWNrID0gZGVsZWdhdG9yO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICBjb25zdCBjb250YWluZXIgPSBET00uc2VsZWN0RWxlbSgnI2NvbnRhaW5lcicpO1xuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQocHJvaik7XG4gICAgICAgIFxuICAgICB9XG4gICAgIFxuXG4gICAgIGNvbnN0IGNyZWF0ZVRvRG9Ob3RlID0gZnVuY3Rpb24oY2hvc2VuVHlwZSl7XG4gICAgICAgIGNvbnN0IGlucHV0ID0gRE9NLnNlbGVjdEVsZW0oJyN0ZW1wb3JhcnlJbnB1dCcpIFxuICAgICAgICBjb25zdCBwcm9qZWN0ID0gaW5wdXQucGFyZW50RWxlbWVudDtcbiAgICAgICAgY29uc3QgZm9ybVJlZmVyZW5jZSA9IERPTS5zZWxlY3RFbGVtKCcudG9Eb05vdGVJbnB1dCcpXG4gICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IERPTS5zZWxlY3RFbGVtKGAjY29udGFpbmVyJHtwcm9qZWN0LmRhdGFzZXQuaWR9YCk7XG4gICAgICAgIFxuICAgICAgICBjb25zdCBmb3JtID0gRE9NLmVsZW1lbnRJbml0KCdmb3JtJyx7J2NsYXNzJzogJ3RvRG9Ob3RlSW5wdXQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdpZCc6IGB0b0RvTm90ZUZvcm0ke3Byb2plY3QuZGF0YXNldC5pZH0ke2Zvcm1SZWZlcmVuY2UubGVuZ3RofWAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdkYXRhLWlkJzpgJHtmb3JtUmVmZXJlbmNlLmxlbmd0aH1gIH0pXG4gICAgICAgIGNvbnN0IHN1Ym1pdCA9IERPTS5lbGVtZW50SW5pdCgnYnV0dG9uJyx7J3R5cGUnOidzdWJtaXQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2lkJzogJ3N1Ym1pdE5vdGUnLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2NsYXNzJzonc3VibWl0Tm90ZSBub25lJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sJ1N1Ym1pdCBOb3RlJylcbiAgICAgICAgY29uc3QgY2FuY2VsID0gRE9NLmVsZW1lbnRJbml0KCdidXR0b24nLCB7J2NsYXNzJzonY2FuY2VsIG5vbmUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdpZCc6J2NhbmNlbE5vdGUnfSwgJ0NhbmNlbCcpO1xuICAgICAgICBcbiAgICAgICAgY29uc3QgcmVtb3ZlID0gRE9NLmVsZW1lbnRJbml0KCdidXR0b24nLCB7J2NsYXNzJzoncmVtb3ZlIG5vbmUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2lkJzpgcmVtb3ZlJHtwcm9qZWN0LmRhdGFzZXQuaWR9JHtmb3JtUmVmZXJlbmNlLmxlbmd0aH1gfSwgJ1gnKTtcbiAgICAgICAgY29uc3QgcHJvdlRpdGxlID0gRE9NLnNlbGVjdEVsZW0oJyNwcm92VGl0bGUnKTtcbiAgICAgICAgY29uc3QgdGl0bGUgPSBET00uZWxlbWVudEluaXQoJ2xhYmVsJywgeydjbGFzcyc6J2l0ZW1UaXRsZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnZm9yJzonaXRlbVRpdGxlJywgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ25hbWUnOidpdGVtVGl0bGUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnaWQnOmBpdGVtVGl0bGUke3Byb2plY3QuZGF0YXNldC5pZH0ke2Zvcm1SZWZlcmVuY2UubGVuZ3RofWAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sYCR7cHJvdlRpdGxlLnZhbHVlfWAsKVxuICAgICAgICBjb25zdCBtb2RpZnkgPSBET00uZWxlbWVudEluaXQoJ2J1dHRvbicsIHsnY2xhc3MnOidlZGl0J30sJ0VkaXQnKTtcblxuICAgICAgICBcbiAgICAgICAgZm9ybS5hcHBlbmRDaGlsZChzdWJtaXQpO1xuICAgICAgICBmb3JtLmFwcGVuZENoaWxkKGNhbmNlbCk7XG4gICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQocmVtb3ZlKTtcbiAgICAgICAgZm9ybS5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gICAgICAgIHRpdGxlLmFwcGVuZENoaWxkKG1vZGlmeSlcbiAgICAgICAgcHJvdlRpdGxlLnJlbW92ZSgpOyAgXG4gICAgICAgIFxuXG4gICAgICAgIGZvcm0ub25zdWJtaXQgPSBkZWxlZ2F0b3I7ICAgXG4gICAgICAgICBcbiAgICAgICAgY29udGFpbmVyLmNsYXNzTGlzdC50b2dnbGUoJ25vbmUnLCBmYWxzZSk7XG4gICAgICAgIFxuICAgICAgICBcbiAgICAgICAgIFxuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZm9ybSk7XG5cbiAgICAgICAgY29uc3QgX2dlbmVyYXRlQ2hlY2tsaXN0ID0gZnVuY3Rpb24oKXsgXG4gICAgICAgICAgIGNvbnN0IGFkZCA9IERPTS5lbGVtZW50SW5pdCgnYnV0dG9uJywgeydjbGFzcyc6J2FkZENoZWNrJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2lkJzpgYWRkQ2hlY2ske3Byb2plY3QuZGF0YXNldC5pZH0ke2Zvcm1SZWZlcmVuY2UubGVuZ3RofWAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdkYXRhLWNsYXNzJzpgY2hpbGQke2Zvcm1SZWZlcmVuY2UubGVuZ3RofWBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgJ0FkZCBJdGVtJyk7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQoYWRkKTtcblxuICAgICAgICAgICAgZm9ybS5jbGFzc0xpc3QuYWRkKCdjaGVja2JveCcpXG4gICAgICAgfVxuXG4gICAgICAgY29uc3QgX2dlbmVyYXRlRnJlZUZvcm0gPSBmdW5jdGlvbigpe1xuXG4gICAgICAgIGlucHV0LnZhbHVlID0gJyc7XG4gICAgICAgIGlucHV0LmNsYXNzTGlzdC50b2dnbGUoJ25vbmUnLGZhbHNlKTtcbiAgICAgICAgZm9ybS5jbGFzc0xpc3QuYWRkKCdmcmVlRm9ybScpO1xuXG4gICAgICAgIHN1Ym1pdC5jbGFzc0xpc3QudG9nZ2xlKCdub25lJyxmYWxzZSk7XG4gICAgICAgIGNhbmNlbC5jbGFzc0xpc3QudG9nZ2xlKCdub25lJyxmYWxzZSk7XG4gICAgICAgIGlucHV0LmZvY3VzKCk7XG4gICAgICAgIFxuICAgICAgIH1cblxuICAgICAgIGNob3NlblR5cGUgPT09ICdDaGVja2xpc3QnID8gX2dlbmVyYXRlQ2hlY2tsaXN0KCkgOiBfZ2VuZXJhdGVGcmVlRm9ybSgpOyAgXG5cbiAgICAgICByZXR1cm4gXG5cbiAgICAgfVxuXG5cbiAgICAgY29uc3QgZGlzYWJsZUJ0bnMgPSBmdW5jdGlvbih0cmd0PSduL2EnKXtcbiAgICAgICAgY29uc3QgYWxsQnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2J1dHRvbicpO1xuICAgICAgICBhbGxCdG5zLmZvckVhY2goYnRuID0+ICBidG4gPT09IHRyZ3QgfHwgYnRuLmNsYXNzTGlzdC5jb250YWlucygnbm9uZScpID8gYnRuLmRpc2FibGVkID0gZmFsc2UgOiBidG4uZGlzYWJsZWQgPSB0cnVlKTtcblxuICAgICAgICBjb25zdCBhbGxFZGl0YWJsZXMgPSBET00uc2VsZWN0RWxlbSgnLmVkaXQnKTtcbiAgICAgICAgYWxsRWRpdGFibGVzLmZvckVhY2goaXRtID0+ICBpdG0gPT09IHRyZ3QgfHwgaXRtLmNsYXNzTGlzdC5jb250YWlucygnbm9uZScpID8gZmFsc2UgOiBpdG0uY2xhc3NMaXN0LnRvZ2dsZSgnZGlzYWJsZWRFZGl0JywgdHJ1ZSkpO1xuICAgICAgICBjb25zdCBhbGxEaXNhYmxlZCA9IERPTS5zZWxlY3RFbGVtKCcuZGlzYWJsZWRFZGl0Jyk7XG4gICAgICAgIGFsbERpc2FibGVkLmZvckVhY2goaXRtID0+IGl0bS5jbGFzc0xpc3QudG9nZ2xlKCdlZGl0JyxmYWxzZSkpO1xuICAgIH1cbiAgICBcbiAgICBcbiAgICBjb25zdCBlbmFibGVCdG5zID0gZnVuY3Rpb24oKXtcbiAgICAgICAgY29uc3QgYWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnYnV0dG9uJyk7XG4gICAgICAgIGFsbC5mb3JFYWNoKGJ0biA9PiBidG4uZGlzYWJsZWQgPSBmYWxzZSk7XG5cbiAgICAgICAgY29uc3QgZWRpdHMgPSBET00uc2VsZWN0RWxlbSgnLmRpc2FibGVkRWRpdCcpO1xuICAgICAgICBlZGl0cy5mb3JFYWNoKGl0bSA9PiBpdG0uY2xhc3NMaXN0LnRvZ2dsZSgnZWRpdCcsdHJ1ZSkpO1xuICAgICAgICBlZGl0cy5mb3JFYWNoKGl0bSA9PiBpdG0uY2xhc3NMaXN0LnRvZ2dsZSgnZGlzYWJsZWRFZGl0JyxmYWxzZSkpO1xuICAgICAgICBjb25zdCBkZWxldGVCdG5zID0gRE9NLnNlbGVjdEVsZW0oJy5kZWxldGVDaGVjaycpO1xuICAgICAgICBkZWxldGVCdG5zLmZvckVhY2goYnRuID0+IGJ0bi5jbGFzc0xpc3QudG9nZ2xlKCdub25lJyxmYWxzZSkpOyAgICAgICAgXG4gICAgfVxuXG4gICAgIGNvbnN0IG1vZGlmeUVsZW1lbnQgPSBmdW5jdGlvbihldmVudCl7XG5cbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICBcbiAgICAgICAgIGNvbnN0IGZvcm0gPSBldmVudC50YXJnZXQucGFyZW50RWxlbWVudDtcbiAgICAgICAgIGNvbnN0IG1vZElucHV0ID0gKGZ1bmN0aW9uKCl7XG4gICAgICAgICBpZiAoZm9ybS5jbGFzc0xpc3QuY29udGFpbnMoJ2ZyZWVGb3JtJykpeyAgICBcbiAgICAgICAgICAgIGxldCBtb2RUZXh0QXJlYSA9IERPTS5lbGVtZW50SW5pdCgndGV4dGFyZWEnLHsnbGFiZWwnOidmcmVlRm9ybScsXG4gICAgICAgICAgICAnbmFtZSc6J2ZyZWVGb3JtJyxcbiAgICAgICAgICAgICdhdXRvY29tcGxldGUnOidvZmYnLFxuICAgICAgICAgICAgJ3JlcXVpcmVkJzoncmVxdWlyZWQnLFxuICAgICAgICAgICAgJ2lkJzonbW9kSW5wdXQnLFxuICAgICAgICAgICAnY2xhc3MnOiAnbW9kSW5wdXQnLFxuICAgICAgICAgICAncm93cycgOiAnMycsXG4gICAgICAgICAgICdjb2xzJyA6ICczMCd9KTtcblxuICAgICAgICAgICByZXR1cm4gbW9kVGV4dEFyZWE7ICBcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBsZXQgbW9kQ2hlY2tJbnB1dCA9IERPTS5lbGVtZW50SW5pdCgnaW5wdXQnLHsndHlwZSc6J3RleHQnLFxuICAgICAgICAgICAgJ2F1dG9jb21wbGV0ZSc6J29mZicsXG4gICAgICAgICAgICAncmVxdWlyZWQnOidyZXF1aXJlZCcsXG4gICAgICAgICAgICAnY2xhc3MnOiAnbW9kSW5wdXQnLFxuICAgICAgICAgICAgICdpZCc6J21vZElucHV0Jyx9KTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgIHJldHVybiBtb2RDaGVja0lucHV0ICAgXG4gICAgICAgIH0gXG4gICAgfSkoKVxuXG4gICAgICAgICBjb25zdCBzdWJtaXQgPSBET00uZWxlbWVudEluaXQoJ2J1dHRvbicseyd0eXBlJzonc3VibWl0JyxcbiAgICAgICAgJ2NsYXNzJzonc3VibWl0TW9kJyxcbiAgICAgICAgICdpZCc6ICdzdWJtaXRNb2QnXG4gICAgICAgICB9LCdTdWJtaXQgTm90ZScpXG4gICAgICAgICBjb25zdCByZXZlcnQgPSBET00uZWxlbWVudEluaXQoJ2J1dHRvbicse1xuICAgICAgICAgJ2NsYXNzJzoncmV2ZXJ0TW9kJyxcbiAgICAgICAgICdkYXRhLXRyYW5zZmVyJzpgJHtldmVudC50YXJnZXQuZmlyc3RDaGlsZC5ub2RlVmFsdWV9YCAvL3RlbXBvcmFyeSwgdXBkYXRlIHRvIHVzZSBsb2NhbCBzdG9yYWdlICYgYmFja2VuZFxuICAgICAgICAgIH0sJ1JldmVydCBCYWNrJykgXG4gICAgICAgICAgICAgICAgIFxuICAgICAgICAgaWYgKGV2ZW50LnRhcmdldC5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygnaXRlbVRpdGxlJykgfHwgZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdwcm9qZWN0Jykpe1xuICAgICAgICAgICAgIHJldmVydC5kYXRhc2V0LnRyYW5zZmVyID0gZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQuZmlyc3RDaGlsZC5ub2RlVmFsdWVcbiAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBcblxuICAgICAgICBkaXNhYmxlQnRucygpO1xuXG4gICAgICAgICBjb25zdCBfcmVwbGFjZVdpdGhJbnB1dCA9IChmdW5jdGlvbigpe1xuICAgICAgICAgICAgaWYoZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdpdGVtVGl0bGUnKSB8fCBldmVudC50YXJnZXQucGFyZW50RWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoJ3Byb2plY3QnKSl7XG4gICAgICAgICAgICAgICAgbW9kSW5wdXQudmFsdWUgPSBldmVudC50YXJnZXQucGFyZW50RWxlbWVudC5maXJzdENoaWxkLm5vZGVWYWx1ZTtcbiAgICAgICAgICAgICAgICBldmVudC50YXJnZXQucGFyZW50RWxlbWVudC5maXJzdENoaWxkLm5vZGVWYWx1ZSA9ICcnO1xuICAgICAgICAgICAgICAgIGV2ZW50LnRhcmdldC5wYXJlbnRFbGVtZW50LmFwcGVuZENoaWxkKG1vZElucHV0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2V7XG4gICAgICAgICAgICAgICAgbW9kSW5wdXQudmFsdWUgPSBldmVudC50YXJnZXQuZmlyc3RDaGlsZC5ub2RlVmFsdWVcbiAgICAgICAgICAgICAgICBldmVudC50YXJnZXQucmVwbGFjZVdpdGgobW9kSW5wdXQpOyBcblxuICAgICAgICAgICAgfSBcbiAgICAgICAgICAgIG1vZElucHV0Lmluc2VydEFkamFjZW50RWxlbWVudCgnYWZ0ZXJlbmQnLHN1Ym1pdCk7XG4gICAgICAgICAgICBzdWJtaXQuaW5zZXJ0QWRqYWNlbnRFbGVtZW50KCdhZnRlcmVuZCcscmV2ZXJ0KTtcbiAgICAgICB9KSgpXG4gICAgICAgIFxuICAgICB9XG5cbiAgICAgY29uc3Qgc3VibWl0TW9kaWZpZWRFbGVtZW50ID0gZnVuY3Rpb24oZXZlbnQpe1xuICAgICAgICBcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgY29uc3QgZm9ybSA9IGV2ZW50LnRhcmdldC5wYXJlbnRFbGVtZW50O1xuICAgICAgICBjb25zdCBpbnB1dCA9IGV2ZW50LnRhcmdldC5wcmV2aW91c0VsZW1lbnRTaWJsaW5nO1xuICAgICAgICBjb25zdCByZXZlcnQgPSBldmVudC50YXJnZXQubmV4dEVsZW1lbnRTaWJsaW5nO1xuICAgICAgICBjb25zdCBsYWJlbCA9IERPTS5lbGVtZW50SW5pdCgnbGFiZWwnLCB7J2Zvcic6IGAke2lucHV0LnZhbHVlfWAsICdjbGFzcyc6J2VkaXQnfSxgJHtpbnB1dC52YWx1ZX1gKTtcbiAgICAgICAgY29uc3QgdGV4dCA9IERPTS5lbGVtZW50SW5pdCgncCcsIHsnY2xhc3MnOid0ZXh0IGVkaXQnfSwgYCR7aW5wdXQudmFsdWV9YCk7XG4gICAgICAgIGNvbnN0IGRlbCA9IERPTS5lbGVtZW50SW5pdCgnYnV0dG9uJywgeydjbGFzcyc6ICdkZWxldGVDaGVjayBub25lJ30sJ2RlbGV0ZScgKSBcblxuICAgICAgICBcbiAgICAgICAgaWYoaW5wdXQudmFsdWUgPT09ICcnKXtyZXR1cm59O1xuXG4gICAgICAgIGlmKGZvcm0uY2xhc3NMaXN0LmNvbnRhaW5zKCdjaGVja2JveCcpKXtcbiAgICAgICAgICAgIGlucHV0LnJlcGxhY2VXaXRoKGxhYmVsKTtcbiAgICAgICAgICAgIGxhYmVsLmFwcGVuZENoaWxkKGRlbCk7XG5cbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChmb3JtLmNsYXNzTGlzdC5jb250YWlucygnZnJlZUZvcm0nKSl7XG4gICAgICAgICAgICBpbnB1dC5yZXBsYWNlV2l0aCh0ZXh0KTsgXG4gICAgICAgIH1cblxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gaW5wdXQudmFsdWVcbiAgICAgICAgICAgIGV2ZW50LnRhcmdldC5wYXJlbnRFbGVtZW50LmZpcnN0Q2hpbGQubm9kZVZhbHVlID0gdmFsdWU7XG4gICAgICAgICAgICBpbnB1dC5yZW1vdmUoKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgZW5hYmxlQnRucygpO1xuICAgIFxuICAgICAgICByZXZlcnQucmVtb3ZlKCk7XG4gICAgICAgIGV2ZW50LnRhcmdldC5yZW1vdmUoKTtcblxuXG4gICAgICAgIHJldHVybiAgICAgICAgIFxuICAgICB9XG5cbiAgICAgY29uc3QgcmV2ZXJ0TW9kaWZpZWRFbGVtZW50ID0gZnVuY3Rpb24oZXZlbnQpe1xuICAgICAgICBcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgY29uc3QgZm9ybSA9IGV2ZW50LnRhcmdldC5wYXJlbnRFbGVtZW50O1xuICAgICAgICBjb25zdCBzdWJtaXQgPSBldmVudC50YXJnZXQucHJldmlvdXNFbGVtZW50U2libGluZztcbiAgICAgICAgY29uc3QgaW5wdXQgPSBzdWJtaXQucHJldmlvdXNFbGVtZW50U2libGluZztcbiAgICAgICAgY29uc3QgbGFiZWwgPSBET00uZWxlbWVudEluaXQoJ2xhYmVsJywgeydmb3InOiBgJHtldmVudC50YXJnZXQuZGF0YXNldC50cmFuc2Zlcn1gLCAnY2xhc3MnOidlZGl0J30sYCR7ZXZlbnQudGFyZ2V0LmRhdGFzZXQudHJhbnNmZXJ9YCk7IC8vdGVtcG9yYXJ5LCB1cGRhdGUgdG8gdXNlIGxvY2FsIHN0b3JhZ2UgJiBiYWNrZW5kXG4gICAgICAgIGNvbnN0IHRleHQgPSBET00uZWxlbWVudEluaXQoJ3AnLCB7J2NsYXNzJzondGV4dCBlZGl0J30sIGAke2V2ZW50LnRhcmdldC5kYXRhc2V0LnRyYW5zZmVyfWApOyAvL3RlbXBvcmFyeSwgdXBkYXRlIHRvIHVzZSBsb2NhbCBzdG9yYWdlICYgYmFja2VuZFxuICAgICAgICBjb25zdCBkZWwgPSBET00uZWxlbWVudEluaXQoJ2J1dHRvbicsIHsnY2xhc3MnOiAnZGVsZXRlQ2hlY2sgbm9uZSd9LCdkZWxldGUnICkgXG5cblxuICAgICAgICBpZihmb3JtLmNsYXNzTGlzdC5jb250YWlucygnY2hlY2tib3gnKSl7XG4gICAgICAgICAgICBpbnB1dC5yZXBsYWNlV2l0aChsYWJlbCk7XG4gICAgICAgICAgICBsYWJlbC5hcHBlbmRDaGlsZChkZWwpO1xuXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoZm9ybS5jbGFzc0xpc3QuY29udGFpbnMoJ2ZyZWVGb3JtJykpe1xuICAgICAgICAgICAgaW5wdXQucmVwbGFjZVdpdGgodGV4dCk7IFxuICAgICAgICB9XG5cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjb25zdCB2YWx1ZSA9IGV2ZW50LnRhcmdldC5kYXRhc2V0LnRyYW5zZmVyOyAvL3RlbXBvcmFyeSwgdXBkYXRlIHRvIHVzZSBsb2NhbCBzdG9yYWdlICYgYmFja2VuZFxuICAgICAgICAgICAgZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQuZmlyc3RDaGlsZC5ub2RlVmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgICAgIGlucHV0LnJlbW92ZSgpO1xuICAgICAgICB9XG4gICAgICAgICBcbiAgICAgICAgZW5hYmxlQnRucygpO1xuICAgIFxuICAgICAgICBzdWJtaXQucmVtb3ZlKCk7XG4gICAgICAgIGV2ZW50LnRhcmdldC5yZW1vdmUoKTtcbiAgICAgICAgcmV0dXJuICAgICAgICAgXG4gICAgIH1cbiAgICAgXG4gICAgIFxuICAgIGNvbnN0IGNob29zZVRvRG9UaXRsZUZvcm0gPSBmdW5jdGlvbihldmVudCl7XG4gICAgICAgIGNvbnN0IGRvbVByb2plY3QgPSBldmVudC50YXJnZXQucGFyZW50RWxlbWVudDtcblxuICAgICAgICBjb25zdCBfZ2VuZXJhdGVUaXRsZUZvcm0gPSAoZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICBjb25zdCBmb3JtID0gIERPTS5lbGVtZW50SW5pdCgnZm9ybScsIHsnY2xhc3MnOiAnY2hvb3NlVGl0bGVGb3JtJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2lkJzogJ2Nob29zZVRpdGxlRm9ybSd9KVxuICAgICAgICAgICAgIGNvbnN0IGxhYmVsID0gRE9NLmVsZW1lbnRJbml0KCdsYWJlbCcseydmb3InOidjaG9vc2VZb3VyVGl0bGUnfSwnQ2hvb3NlIFlvdXIgTm90ZVxcJ3MgVGl0bGUnKTtcbiAgXG4gICAgICAgICAgICAgY29uc3QgdGl0bGVJbnB1dCA9IERPTS5lbGVtZW50SW5pdCgnaW5wdXQnLHsndHlwZSc6J3RleHQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2F1dG9jb21wbGV0ZSc6J29mZicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3JlcXVpcmVkJzoncmVxdWlyZWQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdpZCc6J3Byb3ZUaXRsZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2NsYXNzJzogJ3Byb3ZUaXRsZSd9LCk7XG4gICAgICAgICAgICBjb25zdCBzdWJtaXRUaXRsZSA9IERPTS5lbGVtZW50SW5pdCgnYnV0dG9uJywgeyd0eXBlJzonc3VibWl0J30sICdTdWJtaXQnKTtcbiAgICAgICAgICAgIGNvbnN0IGNhbmNlbFRpdGxlID0gRE9NLmVsZW1lbnRJbml0KCdidXR0b24nLCB7J2NsYXNzJzonY2FuY2VsVGl0bGUnfSwgJ0NhbmNlbCcpO1xuICAgICAgICAgICAgZm9ybS5hcHBlbmRDaGlsZChsYWJlbCk7XG4gICAgICAgICAgICBmb3JtLmFwcGVuZENoaWxkKHRpdGxlSW5wdXQpO1xuICAgICAgICAgICAgZm9ybS5hcHBlbmRDaGlsZChzdWJtaXRUaXRsZSk7XG4gICAgICAgICAgICBmb3JtLmFwcGVuZENoaWxkKGNhbmNlbFRpdGxlKTtcbiAgICAgICAgICAgIGZvcm0ub25zdWJtaXQgPSBkZWxlZ2F0b3I7XG4gICAgICAgICAgICByZXR1cm4gZm9ybVxuICAgICAgICB9KSgpIFxuICAgICAgICBcbiAgICAgICAgZG9tUHJvamVjdC5hcHBlbmRDaGlsZChfZ2VuZXJhdGVUaXRsZUZvcm0pXG4gICAgICAgIHJldHVyblxuXG4gICAgfVxuICAgIGNvbnN0IHN1Ym1pdFRvRG9UaXRsZSA9IGZ1bmN0aW9uKGV2ZW50KXtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTsgXG4gICAgICAgIGNvbnN0IHByb3ZUaXRsZSA9IERPTS5zZWxlY3RFbGVtKCcjcHJvdlRpdGxlJyk7XG4gICAgICAgIGNvbnN0IGRvbVByb2plY3QgPSBldmVudC50YXJnZXQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50O1xuICAgICAgICBkb21Qcm9qZWN0LmFwcGVuZENoaWxkKHByb3ZUaXRsZSk7XG4gICAgICAgIHByb3ZUaXRsZS5jbGFzc0xpc3QudG9nZ2xlKCdub25lJyx0cnVlKTtcbiAgICAgICAgXG4gICAgICAgIGV2ZW50LnRhcmdldC5jbGFzc0xpc3QudG9nZ2xlKCdub25lJyx0cnVlKTtcblxuICAgICAgICByZXR1cm5cbiAgICAgICAgXG4gICAgfVxuICAgICBcbiAgICAgY29uc3QgY2hvb3NlTm90ZVR5cGUgPSBmdW5jdGlvbihldmVudCl7XG4gICAgICAgIGNvbnN0IGRvbVByb2plY3QgPSBldmVudC50YXJnZXQucGFyZW50RWxlbWVudDtcblxuICAgICAgICAgY29uc3QgZm9ybSA9ICBET00uZWxlbWVudEluaXQoJ2Zvcm0nLCB7J2NsYXNzJzogJ2Nob29zZU5vdGVUeXBlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnaWQnOiAnbm90ZVR5cGVGb3JtJyAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgY29uc3QgbGFiZWwgPSBET00uZWxlbWVudEluaXQoJ2xhYmVsJyx7J2Zvcic6J2Nob29zZU5vdGVUeXBlJ30sJ0Nob29zZSBZb3VyIE5vdGUgVHlwZScpO1xuICAgICAgICAgY29uc3Qgc2VsZWN0ID0gRE9NLmVsZW1lbnRJbml0KCdzZWxlY3QnLHsnY2xhc3MnOidzZWxlY3QnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdpZCc6ICdzZWxlY3QnIH0pO1xuICAgICAgICAgY29uc3Qgb3B0R3JvdXAgPSBET00uZWxlbWVudEluaXQoJ29wdGdyb3VwJyx7J2xhYmVsJzogJ05vdGUgT3B0aW9ucyd9LCAnQ2hvb3NlIHlvdXIgbm90ZSB0eXBlJyk7XG4gICAgICAgICBjb25zdCBjaGVja2xpc3RPcHQgPSBET00uZWxlbWVudEluaXQoJ29wdGlvbicseyduYW1lJzogJ2NoZWNrbGlzdCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnY2xhc3MnOiAnY2hlY2tsaXN0J30sJ0NoZWNrbGlzdCcpO1xuICAgICAgICAgY29uc3QgaW5wdXRPcHQgPSBET00uZWxlbWVudEluaXQoJ29wdGlvbicseyduYW1lJzogJ2lucHV0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2NsYXNzJzogJ2lucHV0J30sJ0ZyZWVmb3JtJyk7XG4gICAgICAgICBjb25zdCBjaG9pY2UgPSBET00uZWxlbWVudEluaXQoJ2J1dHRvbicsIHsndHlwZSc6J3N1Ym1pdCd9LCAnU3VibWl0Jyk7XG4gICAgICAgICBjb25zdCBjYW5jZWwgPSBET00uZWxlbWVudEluaXQoJ2J1dHRvbicsIHsnY2xhc3MnOidjYW5jZWxDaG9pY2UnfSwgJ0NhbmNlbCcpO1xuICAgICAgICAgXG4gICAgICAgICBzZWxlY3QuYXBwZW5kQ2hpbGQob3B0R3JvdXApO1xuICAgICAgICAgb3B0R3JvdXAuYXBwZW5kQ2hpbGQoY2hlY2tsaXN0T3B0KTtcbiAgICAgICAgIG9wdEdyb3VwLmFwcGVuZENoaWxkKGlucHV0T3B0KTtcbiAgICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQobGFiZWwpO1xuICAgICAgICAgZm9ybS5hcHBlbmRDaGlsZChzZWxlY3QpO1xuICAgICAgICAgZm9ybS5hcHBlbmRDaGlsZChET00uZWxlbWVudEluaXQoJ2JyJykpO1xuICAgICAgICAgZm9ybS5hcHBlbmRDaGlsZChjaG9pY2UpO1xuICAgICAgICAgZm9ybS5hcHBlbmRDaGlsZChjYW5jZWwpXG5cbiAgICAgICAgIGRpc2FibGVCdG5zKCk7XG4gICAgICAgICBmb3JtLm9uc3VibWl0ID0gZGVsZWdhdG9yO1xuICAgICAgICAgZG9tUHJvamVjdC5hcHBlbmRDaGlsZChmb3JtKTtcblxuICAgICAgICAgcmV0dXJuIGZvcm1cbiAgICB9XG4gICAgIFxuICAgICBjb25zdCByZXZlYWxDcmVhdGVGb3JtID0gZnVuY3Rpb24oKXtcbiAgICAgICAgbGV0IGhpZGRlbiA9IERPTS5zZWxlY3RFbGVtKCcjY3JlYXRlRm9ybScpO1xuICAgICAgICBoaWRkZW4uY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZGVuJywgZmFsc2UpO1xuICAgICAgICBcbiAgICAgfVxuXG4gICAgIGNvbnN0IHRvZ2dsZVNpemUgPSBmdW5jdGlvbihldmVudCl7XG4gICAgICAgIGlmIChldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdwcm9qZWN0Jykpe1xuXG4gICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IERPTS5zZWxlY3RFbGVtKGAjY29udGFpbmVyJHtldmVudC50YXJnZXQuZGF0YXNldC5pZH1gICkgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICBjb250YWluZXIuY2xhc3NMaXN0LnRvZ2dsZSgnbm9uZScpO1xuXG4gICAgICAgIH1cblxuICAgICAgICBlbHNlIHtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IGZvcm0gPSBldmVudC50YXJnZXQucGFyZW50RWxlbWVudDsgICAgXG4gICAgICAgIGNvbnN0IGZvcm1DaGlsZHJlbiA9IEFycmF5LmZyb20oZm9ybS5jaGlsZHJlbik7XG4gICAgICAgIGZvcm1DaGlsZHJlbi5mb3JFYWNoKGl0bSA9PiBpdG0uZGF0YXNldC5jbGFzcyA9PT0gYGNoaWxkJHtmb3JtLmRhdGFzZXQuaWR9YCA/IGl0bS5jbGFzc0xpc3QudG9nZ2xlKCdub25lJykgOiBmYWxzZSkgICAgICAgXG4gICAgICAgICAgICBcbiAgICAgICAgfVxuICAgICB9XG5cbiAgICAgY29uc3Qgbm90ZVR5cGVHZW5lcmF0b3IgPSBmdW5jdGlvbihldmVudCl7IFxuXG4gICAgICAgIGNvbnN0IGdldFNlbGVjdGVkID0gKGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAgY29uc3Qgc2VsZWN0ID0gIERPTS5zZWxlY3RFbGVtKCcjc2VsZWN0Jyk7XG4gICAgICAgICAgICAgcmV0dXJuIHNlbGVjdC5vcHRpb25zW3NlbGVjdC5zZWxlY3RlZEluZGV4XS52YWx1ZTtcbiAgICAgICAgfSkoKVxuICAgICAgICBcbiAgICAgICAgY29uc3QgX2dlbmVyYXRlVGVtcG9yYXJ5SW5wdXQgPSAoZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIGNvbnN0IHByb2plY3QgPSBET00uc2VsZWN0RWxlbSgnI25vdGVUeXBlRm9ybScpLnBhcmVudEVsZW1lbnQ7XG4gICAgICAgICAgIFxuICAgICAgICBpZiAoZ2V0U2VsZWN0ZWQgPT09ICdDaGVja2xpc3QnKXsgICAgXG4gICAgICAgICAgICBsZXQgdGVtcG9yYXJ5SW5wdXQgPSBET00uZWxlbWVudEluaXQoJ2lucHV0Jyx7J3R5cGUnOid0ZXh0JyxcbiAgICAgICAgICAgICdhdXRvY29tcGxldGUnOidvZmYnLFxuICAgICAgICAgICAgJ3JlcXVpcmVkJzoncmVxdWlyZWQnLFxuICAgICAgICAgICAgJ2lkJzondGVtcG9yYXJ5SW5wdXQnLFxuICAgICAgICAgICAnY2xhc3MnOiAndGVtcG9yYXJ5SW5wdXQgbm9uZSd9KTsgIFxuICAgICAgICAgICAgcHJvamVjdC5hcHBlbmRDaGlsZCh0ZW1wb3JhcnlJbnB1dCk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgbGV0IHRleHRBcmVhID0gRE9NLmVsZW1lbnRJbml0KCd0ZXh0YXJlYScsIHsnaWQnOid0ZW1wb3JhcnlJbnB1dCcsXG4gICAgICAgICAgICAgICAgJ25hbWUnOidmcmVlRm9ybScsXG4gICAgICAgICAgICAgICAgJ2xhYmVsJzonZnJlZUZvcm0nLFxuICAgICAgICAgICAgICAgICdjbGFzcyc6J3RlbXBvcmFyeUlucHV0IG5vbmUnLFxuICAgICAgICAgICAgICAgICdhdXRvY29tcGxldGUnOidvZmYnLFxuICAgICAgICAgICAgICAgICdyZXF1aXJlZCc6J3JlcXVpcmVkJyxcbiAgICAgICAgICAgICAgICAncm93cycgOiAnNCcsXG4gICAgICAgICAgICAgICAgJ2NvbHMnIDogJzUwJyB9KTtcbiAgICAgICAgICAgIHByb2plY3QuYXBwZW5kQ2hpbGQodGV4dEFyZWEpOyAgIFxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICB9KSgpXG4gICAgICAgIFxuICAgICAgICBwcm9qZWN0RXZlbnRzLnB1Ymxpc2goJ2RlbGV0ZU5vdGVUeXBlRm9ybScsIGV2ZW50KTtcbiAgICAgICAgcHJvamVjdEV2ZW50cy5wdWJsaXNoKCdjcmVhdGVOb3RlJywgZ2V0U2VsZWN0ZWQpO1xuXG5cbiAgICAgICAgLy9yZW1lbWJlciBjcmVhdGVub3RlIHRoaW5nIHdpbGwgYXBwbHkgdG8gdGhlIGJhY2tlbmQgYXMgd2VsbCxcbiAgICAgICAgLy8gc28gd2hlbiB5b3UgcGFzcyBpbiB0aGF0IGFyZ3VtZW50LCB0aGF0J3Mgd2hlbiB0aGUgJ3R5cGUnXG4gICAgICAgIC8vIG9mIHRoZSBub3RlIHdpbGwgYmUgc3RvcmVkIGluIHRoZXJlLiBcbiAgICAgICAgXG4gICAgICAgIFxuICAgICAgICByZXR1cm4gZ2V0U2VsZWN0ZWRcbiAgICAgfVxuXG5cblxuICAgIGNvbnN0IGRlbGV0ZUZvcm1zID0gZnVuY3Rpb24oZXZlbnQpe1xuXG4gICAgICAgICBcbiAgICAgICAgY29uc3QgX2NhbmNlbE5vdGVUeXBlRm9ybSA9IGZ1bmN0aW9uKCl7XG5cbiAgICAgICAgICAgIGNvbnN0IF9kZWxldGVQcm92VGl0bGUgPSBmdW5jdGlvbigpe1xuICAgICAgICAgICAgICAgICBjb25zdCBwcm92VGl0bGUgPSAgRE9NLnNlbGVjdEVsZW0oJyNwcm92VGl0bGUnKVxuICAgICAgICAgICAgICAgICBwcm92VGl0bGUgPyBwcm92VGl0bGUucmVtb3ZlKCkgOiBmYWxzZVxuICAgICAgICAgICAgICAgICByZXR1cm4gICBcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGNvbnN0IF9kZWxldGVBZGROb3RlRm9ybSA9IChmdW5jdGlvbigpe1xuICAgICAgICAgICAgICAgICBjb25zdCBub3RlVHlwZUZvcm0gPSBET00uc2VsZWN0RWxlbSgnI25vdGVUeXBlRm9ybScpO1xuICAgICAgICAgICAgICAgICBub3RlVHlwZUZvcm0gPyBub3RlVHlwZUZvcm0ucmVtb3ZlKCkgOiBmYWxzZTtcbiAgICAgICAgICAgICAgICAgcmV0dXJuXG5cbiAgICAgICAgICAgICB9KSgpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBldmVudC50YXJnZXQuY2xhc3NOYW1lID09PSAnY2FuY2VsQ2hvaWNlJyA/IF9kZWxldGVQcm92VGl0bGUoKSA6IGZhbHNlOyBcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG5cblxuICAgICAgICAgbGV0IGRlbGV0ZWQgPSBET00uc2VsZWN0RWxlbSgnI2Nob29zZVRpdGxlRm9ybScpO1xuICAgICAgICAgZGVsZXRlZCA/IGRlbGV0ZWQucmVtb3ZlKCkgOiBfY2FuY2VsTm90ZVR5cGVGb3JtKClcbiAgICAgICAgIFxuICAgICAgICAgcmV0dXJuXG5cblxuICAgIH1cblxuICAgIGNvbnN0IGNsZWFuVG9Eb0Zvcm0gPSBmdW5jdGlvbigpe1xuICAgICAgXG4gICAgICBjb25zdCBmb3JtID0gRE9NLnNlbGVjdEVsZW0oJyNzdWJtaXROb3RlJykucGFyZW50RWxlbWVudDtcbiAgICAgIGNvbnN0IHByb2plY3QgPSBET00uc2VsZWN0RWxlbSgnI3RlbXBvcmFyeUlucHV0JykucGFyZW50RWxlbWVudDsgIFxuXG4gICAgICBjb25zdCBfZGVsZXRlVHJhbnNpdG9yeVN0dWZmID0gKGZ1bmN0aW9uKCl7ICBcbiAgICAgICAgbGV0IGRlbGV0ZWQgPSBET00uc2VsZWN0RWxlbSgnI3RlbXBvcmFyeUlucHV0Jyk7XG4gICAgICAgIGRlbGV0ZWQucmVtb3ZlKCk7XG5cbiAgICAgICAgZGVsZXRlZCA9IERPTS5zZWxlY3RFbGVtKCcjc3VibWl0Tm90ZScpO1xuICAgICAgICBkZWxldGVkLnJlbW92ZSgpO1xuXG4gICAgICAgIGRlbGV0ZWQgPSBET00uc2VsZWN0RWxlbSgnI2NhbmNlbE5vdGUnKTtcbiAgICAgICAgZGVsZXRlZC5yZW1vdmUoKTsgXG4gICAgfSkoKVxuICAgICAgXG4gICAgICBjb25zdCBfY29udmVydEFkZENoZWNrID0gKGZ1bmN0aW9uKCl7IFxuXG4gICAgICAgIGxldCBjb252ZXJ0ID0gRE9NLnNlbGVjdEVsZW0oYCNhZGRDaGVjayR7cHJvamVjdC5kYXRhc2V0LmlkfSR7Zm9ybS5kYXRhc2V0LmlkfWApO1xuXG4gICAgICAgIGlmIChjb252ZXJ0KXtcbiAgICAgICAgICAgIGNvbnZlcnQucmVtb3ZlQXR0cmlidXRlKCdjbGFzcycpO1xuICAgICAgICAgICAgY29udmVydC5jbGFzc05hbWUgPSAnYWRkQ2hlY2tNb2QnO1xuICAgICAgXG4gICAgICAgIH1cbiAgICB9KSgpXG5cbiAgICAgIGNvbnN0IF9yZW1vdmVXaGVyZUVtcHR5ID0gKGZ1bmN0aW9uKCl7XG4gICAgICAgIFxuICAgICAgICBjb25zdCBmb3JtQ2hpbGRyZW4gPSBBcnJheS5mcm9tKGZvcm0uY2hpbGRyZW4pO1xuICAgICAgICBjb25zdCBjaGlsZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLWNsYXNzPWNoaWxkJHtmb3JtLmRhdGFzZXQuaWR9XWApXG4gICAgICAgICEoZm9ybUNoaWxkcmVuLmluY2x1ZGVzKGNoaWxkKSkgPyBmb3JtLnJlbW92ZSgpIDogZmFsc2U7XG5cbiAgICB9KSgpXG5cbiAgICAgICAgcmV0dXJuXG4gICAgfVxuICAgICAgICBcblxuICAgIGNvbnN0IGNhbmNlbE5vdGUgPSBmdW5jdGlvbihldmVudCl7XG4gICAgICAgIFxuICAgICAgICBjb25zdCBjYW5jZWwgPSBldmVudC50YXJnZXQ7XG4gICAgICAgIGNvbnN0IGlucHV0ID0gRE9NLnNlbGVjdEVsZW0oJyN0ZW1wb3JhcnlJbnB1dCcpO1xuXG4gICAgICAgIGNhbmNlbC5jbGFzc0xpc3QudG9nZ2xlKCdub25lJyx0cnVlKTtcbiAgICAgICAgaW5wdXQudmFsdWUgPSAnJztcbiAgICAgICAgaW5wdXQuY2xhc3NMaXN0LnRvZ2dsZSgnbm9uZScsdHJ1ZSk7XG5cbiAgICAgICAgcmV0dXJuICAgICAgICBcbiAgICB9XG5cbiAgICBcbiAgICBjb25zdCBnZW5lcmF0ZU5ld0FkZENoZWNrID0gZnVuY3Rpb24oZXZlbnQpe1xuICAgICAgICBcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgY29uc3QgZm9ybSA9IGV2ZW50LnRhcmdldC5wYXJlbnRFbGVtZW50O1xuICAgICAgICBjb25zdCBwcm9qZWN0ID0gZm9ybS5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQ7XG5cbiAgICAgICAgaWYoRE9NLnNlbGVjdEVsZW0oJyN0ZW1wb3JhcnlJbnB1dCcpICYmIERPTS5zZWxlY3RFbGVtKCcjdGVtcG9yYXJ5SW5wdXQnKS5sYWJlbCA9PT0gJ2ZyZWVGb3JtJyl7XG4gICAgICAgICAgICBET00uc2VsZWN0RWxlbSgnI3RlbXBvcmFyeUlucHV0JykucmVtb3ZlKCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIURPTS5zZWxlY3RFbGVtKCcjdGVtcG9yYXJ5SW5wdXQnKSl7XG4gICAgICAgIGNvbnN0IHRlbXBvcmFyeUlucHV0ID0gRE9NLmVsZW1lbnRJbml0KCdpbnB1dCcseyd0eXBlJzondGV4dCcsXG4gICAgICAgICdhdXRvY29tcGxldGUnOidvZmYnLFxuICAgICAgICAncmVxdWlyZWQnOidyZXF1aXJlZCcsXG4gICAgICAgICdpZCc6J3RlbXBvcmFyeUlucHV0JyxcbiAgICAgICAgJ2NsYXNzJzogJ3RlbXBvcmFyeUlucHV0IG5vbmUnfSk7XG5cbiAgICAgICAgcHJvamVjdC5hcHBlbmRDaGlsZCh0ZW1wb3JhcnlJbnB1dCk7XG4gICAgICAgIGRpc2FibGVCdG5zKGV2ZW50LnRhcmdldCk7XG4gICAgICAgIHRlbXBvcmFyeUlucHV0Lm9uaW5wdXQgPSBkZWxlZ2F0b3I7XG4gICAgXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIURPTS5zZWxlY3RFbGVtKCcjc3VibWl0Tm90ZScpKXsgICAgICAgXG4gICAgICAgICBjb25zdCBvcmlnaW5hbFN1Ym1pdCA9IERPTS5lbGVtZW50SW5pdCgnYnV0dG9uJyx7J3R5cGUnOidzdWJtaXQnLFxuICAgICAgICAnaWQnOiAnc3VibWl0Tm90ZScsIFxuICAgICAgICAnY2xhc3MnOidzdWJtaXROb3RlIG5vbmUnLFxuICAgICAgICB9LCdTdWJtaXQgTm90ZScpXG5cbiAgICAgICAgZm9ybS5hcHBlbmRDaGlsZChvcmlnaW5hbFN1Ym1pdCk7XG5cbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgaWYgKCFET00uc2VsZWN0RWxlbSgnI2NhbmNlbE5vdGUnKSl7ICAgICAgIFxuICAgICAgICAgICAgY29uc3QgY2FuY2VsID0gRE9NLmVsZW1lbnRJbml0KCdidXR0b24nLHtcbiAgICAgICAgICAgJ2lkJzogJ2NhbmNlbE5vdGUnLCBcbiAgICAgICAgICAgJ2NsYXNzJzonY2FuY2VsIG5vbmUnLFxuICAgICAgICAgICB9LCdDYW5jZWwnKVxuICAgXG4gICAgICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQoY2FuY2VsKTtcbiAgICBcbiAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgIHByb2plY3RFdmVudHMucHVibGlzaCgnbmV3Q2hlY2tJdGVtJywgZXZlbnQpO1xuXG4gICAgICAgIHJldHVyblxuXG4gICAgfVxuXG4gICAgY29uc3QgYWRkTmV3Q2hlY2sgPSBmdW5jdGlvbihldmVudCl7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGNvbnN0IGlucHV0ID0gRE9NLnNlbGVjdEVsZW0oJyN0ZW1wb3JhcnlJbnB1dCcpO1xuICAgICAgICBjb25zdCBzdWJtaXQgPSBET00uc2VsZWN0RWxlbSgnI3N1Ym1pdE5vdGUnKTtcbiAgICAgICAgY29uc3QgY2FuY2VsID0gRE9NLnNlbGVjdEVsZW0oJyNjYW5jZWxOb3RlJyk7XG4gICAgICAgIGlucHV0LmNsYXNzTGlzdC50b2dnbGUoJ25vbmUnLGZhbHNlKTtcbiAgICAgICAgaW5wdXQuZm9jdXMoKTtcbiAgICAgICAgZGlzYWJsZUJ0bnMoKTtcbiAgICAgICAgc3VibWl0LmNsYXNzTGlzdC50b2dnbGUoJ25vbmUnLGZhbHNlKTtcbiAgICAgICAgY2FuY2VsLmNsYXNzTGlzdC50b2dnbGUoJ25vbmUnLGZhbHNlKTtcbiAgICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgXG4gICAgICBjb25zdCBfZ2VuZXJhdGVDaGVja0l0ZW0gPSBmdW5jdGlvbigpe1xuICAgICAgICBjb25zdCBpbnB1dCA9IERPTS5zZWxlY3RFbGVtKCcjdGVtcG9yYXJ5SW5wdXQnKTtcbiAgICAgICAgY29uc3QgZm9ybSA9IERPTS5zZWxlY3RFbGVtKCcjc3VibWl0Tm90ZScpLnBhcmVudEVsZW1lbnQ7XG5cbiAgICAgICAgY29uc3QgZGVsID0gRE9NLmVsZW1lbnRJbml0KCdidXR0b24nLCB7J2NsYXNzJzogJ2RlbGV0ZUNoZWNrIG5vbmUnfSwnZGVsZXRlJyApIC8vdG8gZWRpdCB3aGVuIGNyZWF0aW5nIGRyb3Bkb3duXG4gICAgICAgXG4gICAgICAgIGNvbnN0IGNoZWNrYm94ID0gRE9NLmVsZW1lbnRJbml0KCdpbnB1dCcsIHsndHlwZSc6J2NoZWNrYm94JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdkYXRhLWNsYXNzJzpgY2hpbGQke2Zvcm0uZGF0YXNldC5pZH1gfSk7XG4gICAgICAgIGNvbnN0IGxhYmVsID0gRE9NLmVsZW1lbnRJbml0KCdsYWJlbCcsIHsnZm9yJzogYCR7aW5wdXQudmFsdWV9YCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnY2xhc3MnOiAnZWRpdCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnZGF0YS1jbGFzcyc6YGNoaWxkJHtmb3JtLmRhdGFzZXQuaWR9YH0sYCR7aW5wdXQudmFsdWV9YCk7XG4gICAgICAgIGNvbnN0IGJyID0gRE9NLmVsZW1lbnRJbml0KCdicicseydkYXRhLWNsYXNzJzpgY2hpbGQke2Zvcm0uZGF0YXNldC5pZH1gfSk7XG5cbiAgICAgICAgaW5wdXQudmFsdWUgPSAnJztcbiAgICAgICAgbGFiZWwuYXBwZW5kQ2hpbGQoZGVsKTtcbiAgICAgICAgZm9ybS5hcHBlbmRDaGlsZChjaGVja2JveCk7XG4gICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQobGFiZWwpO1xuICAgICAgICBmb3JtLmFwcGVuZENoaWxkKGJyKTtcblxuICAgICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCBzdWJtaXRJdGVtID0gZnVuY3Rpb24oKXtcbiAgICBcbiAgICBjb25zdCBpbnB1dCA9IERPTS5zZWxlY3RFbGVtKCcjdGVtcG9yYXJ5SW5wdXQnKTtcbiAgICBjb25zdCBmb3JtID0gRE9NLnNlbGVjdEVsZW0oJyNzdWJtaXROb3RlJykucGFyZW50RWxlbWVudDtcbiAgICBjb25zdCByZW1vdmUgPSBET00uc2VsZWN0RWxlbShgI3JlbW92ZSR7aW5wdXQucGFyZW50RWxlbWVudC5kYXRhc2V0LmlkfSR7Zm9ybS5kYXRhc2V0LmlkfWApO1xuXG4gICAgXG4gICAgXG4gICAgaWYgKGlucHV0LnZhbHVlID09PSAnJyl7cmV0dXJufTtcblxuICAgIGlmIChmb3JtLmNsYXNzTGlzdC5jb250YWlucygnY2hlY2tib3gnKSl7XG4gICAgICAgIF9nZW5lcmF0ZUNoZWNrSXRlbSgpO1xuICAgICAgICByZW1vdmUuY2xhc3NMaXN0LnRvZ2dsZSgnbm9uZScsZmFsc2UpO1xuICAgICAgICBpbnB1dC5jbGFzc0xpc3QudG9nZ2xlKCdub25lJywgdHJ1ZSk7ICAgICAgICBcbiAgICAgICAgcmV0dXJuXG4gICAgfVxuICAgIFxuICAgIGNvbnN0IHRleHQgPSBET00uZWxlbWVudEluaXQoJ3AnLCB7J2NsYXNzJzondGV4dCBlZGl0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2RhdGEtY2xhc3MnOmBjaGlsZCR7Zm9ybS5kYXRhc2V0LmlkfWB9LCBgJHtpbnB1dC52YWx1ZX1gKTtcblxuICAgIGZvcm0uYXBwZW5kQ2hpbGQodGV4dCk7XG4gICAgcmVtb3ZlLmNsYXNzTGlzdC50b2dnbGUoJ25vbmUnLGZhbHNlKTtcblxuICAgIHJldHVyblxuXG4gICB9XG5cbiAgIGNvbnN0IGRlbGV0ZVRvRG9Ob3RlID0gZnVuY3Rpb24oZXZlbnQpe1xuICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQucmVtb3ZlKCk7XG4gICAgcmV0dXJuXG4gICB9XG4gICBcbiAgIFxuICAgY29uc3QgZGVsZXRlQ2hlY2sgPSBmdW5jdGlvbihldmVudCl7XG4gICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgIGNvbnN0IGxhYmVsID0gZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnRcbiAgICAgICBjb25zdCBiciA9IGxhYmVsLm5leHRFbGVtZW50U2libGluZztcbiAgICAgICBjb25zdCBjaGVjayA9IGxhYmVsLnByZXZpb3VzRWxlbWVudFNpYmxpbmc7XG4gICAgICAgY29uc3QgZm9ybSA9IGNoZWNrLnBhcmVudEVsZW1lbnQ7ICAgIFxuXG4gICAgICAgYnIucmVtb3ZlKCkgXG4gICAgICAgY2hlY2sucmVtb3ZlKCkgXG4gICAgICAgbGFiZWwucmVtb3ZlKClcbiAgICAgICBcbiAgICAgICBjb25zdCBmb3JtQ2hpbGRyZW4gPSBBcnJheS5mcm9tKGZvcm0uY2hpbGRyZW4pO1xuICAgICAgIGNvbnN0IGNoaWxkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtY2xhc3M9Y2hpbGQke2Zvcm0uZGF0YXNldC5pZH1dYClcbiAgICAgICAhKGZvcm1DaGlsZHJlbi5pbmNsdWRlcyhjaGlsZCkpID8gZm9ybS5yZW1vdmUoKSA6IGZhbHNlO1xuICAgICAgIFxuICAgICAgIHJldHVyblxuICAgIH1cblxuICAgICByZXR1cm4ge1xuICAgICAgICAgY3JlYXRlUHJvamVjdCxcbiAgICAgICAgIGNyZWF0ZVRvRG9Ob3RlLFxuICAgICAgICAgcmV2ZWFsQ3JlYXRlRm9ybSxcbiAgICAgICAgIHRvZ2dsZVNpemUsXG4gICAgICAgICBjaG9vc2VUb0RvVGl0bGVGb3JtLFxuICAgICAgICAgc3VibWl0VG9Eb1RpdGxlLFxuICAgICAgICAgY2hvb3NlTm90ZVR5cGUsXG4gICAgICAgICBub3RlVHlwZUdlbmVyYXRvcixcbiAgICAgICAgIGRlbGV0ZUZvcm1zLFxuICAgICAgICAgZGlzYWJsZUJ0bnMsXG4gICAgICAgICBlbmFibGVCdG5zLFxuICAgICAgICAgY2xlYW5Ub0RvRm9ybSxcbiAgICAgICAgIG1vZGlmeUVsZW1lbnQsXG4gICAgICAgICBjYW5jZWxOb3RlLFxuICAgICAgICAgcmV2ZXJ0TW9kaWZpZWRFbGVtZW50LFxuICAgICAgICAgYWRkTmV3Q2hlY2ssXG4gICAgICAgICBnZW5lcmF0ZU5ld0FkZENoZWNrLFxuICAgICAgICAgc3VibWl0SXRlbSxcbiAgICAgICAgIHN1Ym1pdE1vZGlmaWVkRWxlbWVudCxcbiAgICAgICAgIGRlbGV0ZVRvRG9Ob3RlLFxuICAgICAgICAgZGVsZXRlQ2hlY2ssXG4gICAgICAgICBcbiAgICAgfVxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgKiBhcyBwcm9qZWN0cyBmcm9tICcuL3Byb2plY3RzJztcbmltcG9ydCB7IERPTUdlbmVyYWwgfSBmcm9tIFwiLi9oZWxwZXJzL0RPTVwiO1xuaW1wb3J0IHsgdGVtcGxhdGVET01TdHJ1Y3RzIH0gZnJvbSAnLi9wcm9qZWN0c0RPTSc7XG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCB7IHByb2plY3RFdmVudHMgfSBmcm9tICcuL3Byb2plY3RldmVudHMnO1xuXG5cbmNvbnN0IHJldmVhbFRvRG8gPSAoZnVuY3Rpb24oKXsgXG4gICAgXG4gICAgLy9DYWxsaW5nIG1vZHVsZSBPYmplY3RzXG4gICAgY29uc3QgRE9NID0gRE9NR2VuZXJhbCgpO1xuICAgIGNvbnN0IHN0cnVjdHMgPSB0ZW1wbGF0ZURPTVN0cnVjdHMoKTtcbiAgICBjb25zdCBtYWluID0gcHJvamVjdHMubWFpbkludGVyZmFjZSgpO1xuICAgIFxuXG4gICAgLy9Nb2R1bGUgbWV0aG9kcyB0byBiZSB1c2VkXG4gICAgY29uc3QgbmV3UHJvaiA9IG1haW4ubmV3UHJvajtcbiAgICBjb25zdCBsb2NhbFN0b3JlID0gbWFpbi50cmFuc2ZlclRvTG9jYWxTdG9yYWdlO1xuICAgIGNvbnN0IGNyZWF0ZVByb2plY3QgPSBzdHJ1Y3RzLmNyZWF0ZVByb2plY3Q7XG4gICAgY29uc3QgcmV2ZWFsQ3JlYXRlRm9ybSA9IHN0cnVjdHMucmV2ZWFsQ3JlYXRlRm9ybTtcbiAgICBjb25zdCB0b2dnbGVTaXplID0gc3RydWN0cy50b2dnbGVTaXplO1xuICAgIGNvbnN0IGNob29zZVRvRG9UaXRsZUZvcm0gPSBzdHJ1Y3RzLmNob29zZVRvRG9UaXRsZUZvcm07XG4gICAgY29uc3Qgc3VibWl0VG9Eb1RpdGxlID0gc3RydWN0cy5zdWJtaXRUb0RvVGl0bGU7XG4gICAgY29uc3QgY2hvb3NlTm90ZVR5cGUgPSBzdHJ1Y3RzLmNob29zZU5vdGVUeXBlO1xuICAgIGNvbnN0IG5vdGVUeXBlR2VuZXJhdG9yID0gc3RydWN0cy5ub3RlVHlwZUdlbmVyYXRvcjtcbiAgICBjb25zdCBkZWxldGVGb3JtcyA9IHN0cnVjdHMuZGVsZXRlRm9ybXM7XG4gICAgY29uc3QgZGlzYWJsZUJ0bnMgPSBzdHJ1Y3RzLmRpc2FibGVCdG5zO1xuICAgIGNvbnN0IGNyZWF0ZVRvRG9Ob3RlID0gc3RydWN0cy5jcmVhdGVUb0RvTm90ZTtcbiAgICBjb25zdCBlbmFibGVCdG5zID0gc3RydWN0cy5lbmFibGVCdG5zO1xuICAgIGNvbnN0IGNsZWFuVG9Eb0Zvcm0gPSBzdHJ1Y3RzLmNsZWFuVG9Eb0Zvcm07XG4gICAgY29uc3QgYWRkTmV3Q2hlY2sgPSBzdHJ1Y3RzLmFkZE5ld0NoZWNrO1xuICAgIGNvbnN0IGNhbmNlbE5vdGUgPSBzdHJ1Y3RzLmNhbmNlbE5vdGU7XG4gICAgY29uc3QgcmV2ZXJ0TW9kaWZpZWRFbGVtZW50ID0gc3RydWN0cy5yZXZlcnRNb2RpZmllZEVsZW1lbnQ7XG4gICAgY29uc3QgbW9kaWZ5RWxlbWVudCA9IHN0cnVjdHMubW9kaWZ5RWxlbWVudDtcbiAgICBjb25zdCBzdWJtaXRJdGVtID0gc3RydWN0cy5zdWJtaXRJdGVtO1xuICAgIGNvbnN0IGdlbmVyYXRlTmV3QWRkQ2hlY2sgPSBzdHJ1Y3RzLmdlbmVyYXRlTmV3QWRkQ2hlY2s7XG4gICAgY29uc3Qgc3VibWl0TW9kaWZpZWRFbGVtZW50ID0gc3RydWN0cy5zdWJtaXRNb2RpZmllZEVsZW1lbnQ7XG4gICAgY29uc3QgZGVsZXRlVG9Eb05vdGUgPSBzdHJ1Y3RzLmRlbGV0ZVRvRG9Ob3RlO1xuICAgIGNvbnN0IGRlbGV0ZUNoZWNrID0gc3RydWN0cy5kZWxldGVDaGVjaztcbiAgICBjb25zdCBkZWxlZ2F0b3IgPSBwcm9qZWN0RXZlbnRzLmRlbGVnYXRvcjtcblxuICAgIFxuICAgIFxuICAgIC8vRXZlbnQgU3Vic2NyaXB0aW9uc1xuICAgIHByb2plY3RFdmVudHMuc3Vic2NyaWJlKCd2aWV3JywgdG9nZ2xlU2l6ZSk7XG4gICAgcHJvamVjdEV2ZW50cy5zdWJzY3JpYmUoJ2NyZWF0ZScsIGNyZWF0ZVByb2plY3QpO1xuICAgIHByb2plY3RFdmVudHMuc3Vic2NyaWJlKCdjcmVhdGUnLCBuZXdQcm9qKTtcbiAgICBwcm9qZWN0RXZlbnRzLnN1YnNjcmliZSgnc2F2ZWQnLCBsb2NhbFN0b3JlKTtcbiAgICBwcm9qZWN0RXZlbnRzLnN1YnNjcmliZSgncmV2ZWFsJywgcmV2ZWFsQ3JlYXRlRm9ybSk7XG4gICAgcHJvamVjdEV2ZW50cy5zdWJzY3JpYmUoJ2Nob29zZVRpdGxlJywgZGlzYWJsZUJ0bnMpO1xuICAgIHByb2plY3RFdmVudHMuc3Vic2NyaWJlKCdjaG9vc2VUaXRsZScsIGNob29zZVRvRG9UaXRsZUZvcm0pO1xuICAgIHByb2plY3RFdmVudHMuc3Vic2NyaWJlKCdpbnB1dE9yTGlzdCcsIHN1Ym1pdFRvRG9UaXRsZSk7XG4gICAgcHJvamVjdEV2ZW50cy5zdWJzY3JpYmUoJ2lucHV0T3JMaXN0JywgY2hvb3NlTm90ZVR5cGUpO1xuICAgIHByb2plY3RFdmVudHMuc3Vic2NyaWJlKCdub3RlVG9Eb1R5cGUnLCBkZWxldGVGb3JtcylcbiAgICBwcm9qZWN0RXZlbnRzLnN1YnNjcmliZSgnbm90ZVRvRG9UeXBlJywgbm90ZVR5cGVHZW5lcmF0b3IpO1xuICAgIC8vcHJvamVjdEV2ZW50cy5zdWJzY3JpYmUoJ25vdGVUb0RvVHlwZScsIGZ1bmN0aW9uIFN0b3JlIHNlbGVjdGVkIHR5cGUgdG8gYmUgcmV0cmlldmVkIGJ5IGJhY2tlbmQgbGF0ZXIuKVxuICAgIHByb2plY3RFdmVudHMuc3Vic2NyaWJlKCdkZWxldGVOb3RlVHlwZUZvcm0nLCBkaXNhYmxlQnRucyk7XG4gICAgcHJvamVjdEV2ZW50cy5zdWJzY3JpYmUoJ2RlbGV0ZU5vdGVUeXBlRm9ybScsIGRlbGV0ZUZvcm1zKTtcbiAgICBwcm9qZWN0RXZlbnRzLnN1YnNjcmliZSgnYWJvcnROb3RlVHlwZUZvcm0nLCBkZWxldGVGb3Jtcyk7XG4gICAgcHJvamVjdEV2ZW50cy5zdWJzY3JpYmUoJ2Fib3J0Tm90ZVR5cGVGb3JtJywgZW5hYmxlQnRucyk7XG4gICAgcHJvamVjdEV2ZW50cy5zdWJzY3JpYmUoJ2Fib3J0Tm90ZVR5cGVGb3JtJywgZGVsZXRlRm9ybXMpO1xuICAgIHByb2plY3RFdmVudHMuc3Vic2NyaWJlKCdjYW5jZWxOb3RlJywgY2FuY2VsTm90ZSk7XG4gICAgcHJvamVjdEV2ZW50cy5zdWJzY3JpYmUoJ2NhbmNlbE5vdGUnLCBlbmFibGVCdG5zKTtcbiAgICBwcm9qZWN0RXZlbnRzLnN1YnNjcmliZSgnY2FuY2VsTm90ZScsIGNsZWFuVG9Eb0Zvcm0pOyAgICAgICAgXG4gICAgcHJvamVjdEV2ZW50cy5zdWJzY3JpYmUoJ25ld0NoZWNrSXRlbScsIGFkZE5ld0NoZWNrKTtcbiAgICAvL3Byb2plY3RFdmVudHMuc3Vic2NyaWJlKCdjcmVhdGVOb3RlJywgZnVuY3Rpb25SZTpCYWNrZW5kVXBkYXRlICB3aXRoIHVzZXIgc3VibWlzc2lvbiAmIGluY2x1ZGluZyB0eXBlIGNob3NlbiAmJiB3aGV0aGVyIGl0ZW1zIGFyZSBjaGVja2VkIG9yIG5vdCAoaWYgY2hlY2tib3gpLCByZW1lbWJlciBsb2NhbFN0b3JhZ2UgdXBkYXRlIGFzIHdlbGwuKVxuICAgIHByb2plY3RFdmVudHMuc3Vic2NyaWJlKCdjcmVhdGVOb3RlJywgY3JlYXRlVG9Eb05vdGUpO1xuICAgIHByb2plY3RFdmVudHMuc3Vic2NyaWJlKCdzdWJtaXROb3RlJywgc3VibWl0SXRlbSk7XG4gICAgcHJvamVjdEV2ZW50cy5zdWJzY3JpYmUoJ3N1Ym1pdE5vdGUnLCBlbmFibGVCdG5zKTtcbiAgICBwcm9qZWN0RXZlbnRzLnN1YnNjcmliZSgnc3VibWl0Tm90ZScsIGNsZWFuVG9Eb0Zvcm0pO1xuICAgIHByb2plY3RFdmVudHMuc3Vic2NyaWJlKCd1cGRhdGVDaGVja0l0ZW0nLCBnZW5lcmF0ZU5ld0FkZENoZWNrKTtcbiAgICBwcm9qZWN0RXZlbnRzLnN1YnNjcmliZSgnbW9kaWZ5RWxlbScsIG1vZGlmeUVsZW1lbnQpO1xuICAgIHByb2plY3RFdmVudHMuc3Vic2NyaWJlKCdyZXZlcnQnLCByZXZlcnRNb2RpZmllZEVsZW1lbnQpO1xuICAgIHByb2plY3RFdmVudHMuc3Vic2NyaWJlKCdzdWJtaXRNb2QnLCBzdWJtaXRNb2RpZmllZEVsZW1lbnQpXG4gICAgcHJvamVjdEV2ZW50cy5zdWJzY3JpYmUoJ2RlbGV0ZVRvRG9Ob3RlJywgZGVsZXRlVG9Eb05vdGUpO1xuICAgIHByb2plY3RFdmVudHMuc3Vic2NyaWJlKCdkZWxldGVDaGVjaycsIGRlbGV0ZUNoZWNrKTtcbiAgICBcblxuXG4gICAgLy9Jbml0aWFsIGVsZW1lbnRzXG4gICAgY29uc3QgbWFpbkNvbnRhaW5lciA9IChmdW5jdGlvbigpe1xuICAgIFxuICAgICAgICBjb25zdCBjb250YWluZXIgPSAgRE9NLmVsZW1lbnRJbml0KCdkaXYnLHsnaWQnOidjb250YWluZXInfSlcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjb250YWluZXIpXG4gICAgICAgIHJldHVybiBjb250YWluZXJcbiAgICAgXG59KSgpXG5cbiAgICBjb25zdCBoZWFkZXIgPSAoZnVuY3Rpb24oKXtcbiAgICAgICAgXG4gICAgICAgIC8vSW5pdGlhbGlzZSBlbGVtZW50c1xuICAgICAgICBjb25zdCBoZWFkID0gRE9NLmVsZW1lbnRJbml0KCdoZWFkZXInLCB7J2lkJzonaGVhZGVyJ30pO1xuICAgICAgICBjb25zdCB0aXRsZSA9IERPTS5lbGVtZW50SW5pdCgnaDEnLHsnaWQnOiAndGl0bGUnfSwgJ1RoaXMgaXMgeW91ciBUby1EbyBsaXN0Jyk7XG4gICAgICAgIGNvbnN0IHJldmVhbEZvcm0gPSBET00uZWxlbWVudEluaXQoJ2J1dHRvbicseydjbGFzcyc6J3JldmVhbEZvcm0nfSwnTmV3IFByb2plY3QnKTtcbiAgICAgICAgXG4gICAgICAgIC8vQWRkIGhlYWRlciBldmVudCBsaXN0ZW5lclxuICAgICAgICBoZWFkLm9uY2xpY2sgPSBkZWxlZ2F0b3I7XG4gICAgICAgIFxuICAgICAgICAvL0FwcGVuZCB0byBkb2N1bWVudFxuICAgICAgICBoZWFkLmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgICAgICAgaGVhZC5hcHBlbmRDaGlsZChyZXZlYWxGb3JtKTtcbiAgICAgICAgbWFpbkNvbnRhaW5lci5hcHBlbmRDaGlsZChoZWFkKTtcblxuICAgICAgICByZXR1cm4gaGVhZDtcbn0pKClcbiAgICBcbiAgICBjb25zdCBkZWZhdWx0UHJvamVjdCA9IChmdW5jdGlvbigpe1xuICAgICAgICBcbiAgICB9KSgpXG5cbiAgICBcbiAgICBjb25zdCByZW5kZXJMb2NhbFN0b3JhZ2UgPSBmdW5jdGlvbigpe1xuICAgICAgICAvL1RoaXMgd2lsbCB1c2UgbG9jYWxTdG9yYWdlIHRvIGNoZWNrXG4gICAgICAgIC8vaWYgdGhlIHVzZXIgaGFzIGFueSBzYXZlZCBpbnN0YW5jZXNcbiAgICAgICAgLy9vZiBwcm9qZWN0cyBhbmQgcmVuZGVyIHRoZW0gaWYgc28uIFxuICAgICAgICAvL1JlbWVtYmVyIHRvIHRha2UgYWNjb3VudCBhbnkgZGlmZmVyZW5jZXMgaW4gZGF0YSBiZXR3ZWVuIGJhY2tlbmQgYW5kIERPTVxuICAgIH1cblxuXG4gICAgIFxuICAgIGNvbnN0IGNyZWF0ZUZvcm0gPSAoZnVuY3Rpb24oKXtcbiAgICAgICAgIGNvbnN0IGZvcm0gPSBET00uZWxlbWVudEluaXQoJ2Zvcm0nLHsnaWQnOidjcmVhdGVGb3JtJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnY2xhc3MnOidoaWRkZW4gcHJvamVjdEZvcm0nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgZm9ybS5hcHBlbmRDaGlsZChET00uZWxlbWVudEluaXQoJ2JyJykpOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICBmb3JtLmFwcGVuZENoaWxkKERPTS5lbGVtZW50SW5pdCgnbGFiZWwnLHsnZm9yJzondGl0bGVJbnAnfSwnUHJvamVjdCBUaXRsZScpKVxuICAgICAgICAgZm9ybS5hcHBlbmRDaGlsZChET00uZWxlbWVudEluaXQoJ2JyJykpO1xuICAgICAgICAgZm9ybS5hcHBlbmRDaGlsZChET00uZWxlbWVudEluaXQoJ2lucHV0Jyx7J3R5cGUnOid0ZXh0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnaWQnIDogJ3RpdGxlSW5wJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnYXV0b2NvbXBsZXRlJzogJ29mZicsICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnbmFtZSc6J3RpdGxlSW5wJ30pKTtcbiAgICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQoRE9NLmVsZW1lbnRJbml0KCdidXR0b24nLHsndHlwZSc6J3N1Ym1pdCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdjbGFzcyc6ICdzdWJtaXQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2lkJzonc3VibWl0J30sJ3N1Ym1pdCcpKTtcbiAgICAgICAgIFxuIFxuICAgICAgICAgZm9ybS5vbnN1Ym1pdCA9IGRlbGVnYXRvcjtcbiAgICAgICAgIG1haW5Db250YWluZXIuYXBwZW5kQ2hpbGQoZm9ybSk7XG4gICAgICAgICByZXR1cm4gZm9ybTsgXG59KSgpXG4gICAgIFxuXG59KSgpXG5cbiAgICAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=