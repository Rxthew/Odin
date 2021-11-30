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
      const projIndex = _findProj(event);
      const toDoIndex = _findToDo(event);
      const currentToDo = _overallStorage[projIndex].projStorage[toDoIndex];
      const form = event.target.parentElement;
      const formChildren = Array.from(form.children);
      

      const note = function(){ 
        if( form.classList.contains('checkbox')){

        const labels = formChildren.filter(child => child.classList.contains('edit'));
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

    const moveItem = function(event){
        const target = event.target.closest('.toDoNoteInput') || event.target.closest('.project')
        //let shiftX =
        //let shiftY = 

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
    const removeItem = main.removeItem;
    const appendNoteToItem = main.appendNoteToItem
    const recordCheck = main.recordCheck;
    const deleteCheckFromStorage = main.deleteCheckFromStorage;
    const modifyInStorage = main.modifyInStorage;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9kby5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0EsZ0RBQWdELDZCQUE2QixLQUFLLDJCQUEyQiwwQkFBMEIsZ0JBQWdCLGlCQUFpQixHQUFHLFVBQVUsb0JBQW9CLEdBQUcsYUFBYSwyQkFBMkIsY0FBYyw4QkFBOEIsc0JBQXNCLEdBQUcsV0FBVyxvQkFBb0IsR0FBRyxvQkFBb0IsOEJBQThCLEdBQUcsV0FBVyw0QkFBNEIsR0FBRyxlQUFlLDRCQUE0QixHQUFHLFdBQVcsZ0ZBQWdGLGFBQWEsUUFBUSxLQUFLLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLE9BQU8sS0FBSyxLQUFLLE1BQU0sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksZ0NBQWdDLDZCQUE2QixLQUFLLDJCQUEyQiwwQkFBMEIsZ0JBQWdCLGlCQUFpQixHQUFHLFVBQVUsb0JBQW9CLEdBQUcsYUFBYSwyQkFBMkIsY0FBYyw4QkFBOEIsc0JBQXNCLEdBQUcsV0FBVyxvQkFBb0IsR0FBRyxvQkFBb0IsOEJBQThCLEdBQUcsV0FBVyw0QkFBNEIsR0FBRyxlQUFlLDRCQUE0QixHQUFHLHVCQUF1QjtBQUNueEM7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7QUNQMUI7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjs7QUFFakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxxREFBcUQ7QUFDckQ7O0FBRUE7QUFDQSxnREFBZ0Q7QUFDaEQ7O0FBRUE7QUFDQSxxRkFBcUY7QUFDckY7O0FBRUE7O0FBRUE7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7QUFDQSxLQUFLO0FBQ0wsS0FBSzs7O0FBR0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSx1QkFBdUIsa0JBQWtCO0FBQ3pDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsc0JBQXNCLHNCQUFzQjtBQUM1Qzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNGQUFzRixxQkFBcUI7QUFDM0c7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixpREFBaUQscUJBQXFCO0FBQ3RFO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0RBQXNELHFCQUFxQjtBQUMzRTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7QUNyR2E7O0FBRWI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdURBQXVELGNBQWM7QUFDckU7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BCQSxNQUErRjtBQUMvRixNQUFxRjtBQUNyRixNQUE0RjtBQUM1RixNQUErRztBQUMvRyxNQUF3RztBQUN4RyxNQUF3RztBQUN4RyxNQUFtRztBQUNuRztBQUNBOztBQUVBOztBQUVBLDRCQUE0QixxR0FBbUI7QUFDL0Msd0JBQXdCLGtIQUFhOztBQUVyQyx1QkFBdUIsdUdBQWE7QUFDcEM7QUFDQSxpQkFBaUIsK0ZBQU07QUFDdkIsNkJBQTZCLHNHQUFrQjs7QUFFL0MsYUFBYSwwR0FBRyxDQUFDLHNGQUFPOzs7O0FBSTZDO0FBQ3JFLE9BQU8saUVBQWUsc0ZBQU8sSUFBSSw2RkFBYyxHQUFHLDZGQUFjLFlBQVksRUFBQzs7Ozs7Ozs7Ozs7QUMxQmhFOztBQUViOztBQUVBO0FBQ0E7O0FBRUEsa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGtCQUFrQixpQkFBaUI7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG9CQUFvQiw0QkFBNEI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEscUJBQXFCLDZCQUE2QjtBQUNsRDs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUN2R2E7O0FBRWI7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esc0RBQXNEOztBQUV0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDdENhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDVmE7O0FBRWI7QUFDQTtBQUNBLGNBQWMsS0FBd0MsR0FBRyxzQkFBaUIsR0FBRyxDQUFJOztBQUVqRjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ1hhOztBQUViO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGtEQUFrRDtBQUNsRDs7QUFFQTtBQUNBLDBDQUEwQztBQUMxQzs7QUFFQTs7QUFFQTtBQUNBLGlGQUFpRjtBQUNqRjs7QUFFQTs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTs7QUFFQTtBQUNBLHlEQUF5RDtBQUN6RCxJQUFJOztBQUVKOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUNyRWE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7QUNmTztBQUNQO0FBQ0Esa0RBQWtEO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuQ087QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsNEJBQTRCLHFCQUFxQjtBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLDRCQUE0QixxQkFBcUI7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ3BGTzs7QUFFUDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakUwQzs7QUFFMUMsb0JBQW9CLHVEQUFNOztBQUUxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzdENEM7OztBQUc1Qzs7QUFFTzs7O0FBR1A7QUFDQSxvQkFBb0IseURBQVU7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFTzs7QUFFUDtBQUNBLG1CQUFtQix5REFBVTtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRU87QUFDUDtBQUNBO0FBQ0EsbUJBQW1CLHlEQUFVOztBQUU3QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDJFQUEyRSxzQkFBc0IsRUFBRSxnQkFBZ0I7QUFDbkg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDblEyQztBQUNLOzs7QUFHekM7O0FBRVAsZ0JBQWdCLHdEQUFVO0FBQzFCLHNCQUFzQixtRUFBdUI7O0FBRTdDO0FBQ0EsMEJBQTBCO0FBQzFCO0FBQ0EsNkNBQTZDLFNBQVMsS0FBSyxFQUFFLGlCQUFpQjtBQUM5RSwwREFBMEQsaUJBQWlCO0FBQzNFLGdFQUFnRTtBQUNoRTtBQUNBLGtEQUFrRDtBQUNsRCxzREFBc0QsZ0JBQWdCLEVBQUU7QUFDeEU7QUFDQSwwREFBMEQ7QUFDMUQsdUVBQXVFLGtDQUFrQyxFQUFFO0FBQzNHLGtEQUFrRCxlQUFlO0FBQ2pFO0FBQ0E7QUFDQSxpREFBaUQ7QUFDakQsb0VBQW9FLGlCQUFpQixFQUFFO0FBQ3ZGOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzREFBc0QsbUJBQW1CO0FBQ3pFO0FBQ0EsNkNBQTZDO0FBQzdDLHNFQUFzRSxtQkFBbUIsRUFBRSxxQkFBcUI7QUFDaEgsK0RBQStELHFCQUFxQixHQUFHO0FBQ3ZGLGlEQUFpRDtBQUNqRDtBQUNBO0FBQ0Esb0RBQW9EO0FBQ3BELGtEQUFrRDtBQUNsRCxtRUFBbUU7QUFDbkU7QUFDQSxrREFBa0Q7QUFDbEQsaUVBQWlFLG1CQUFtQixFQUFFLHFCQUFxQixFQUFFO0FBQzdHO0FBQ0EsZ0RBQWdEO0FBQ2hEO0FBQ0E7QUFDQSxzRUFBc0UsbUJBQW1CLEVBQUUscUJBQXFCO0FBQ2hILHNEQUFzRCxJQUFJLGdCQUFnQjtBQUMxRSxrREFBa0QsZUFBZTs7QUFFakU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esa0RBQWtEO0FBQ2xELHFFQUFxRSxtQkFBbUIsRUFBRSxxQkFBcUI7QUFDL0csMEVBQTBFLHFCQUFxQjtBQUMvRixzREFBc0Q7QUFDdEQ7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMERBQTBEO0FBQzFEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5Qjs7QUFFekI7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5REFBeUQ7QUFDekQ7QUFDQTtBQUNBO0FBQ0EsOEJBQThCO0FBQzlCO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUwsa0RBQWtEO0FBQ2xEO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBLDRCQUE0QixrQ0FBa0M7QUFDOUQsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdEQUFnRCxVQUFVLFlBQVksa0JBQWtCLElBQUksWUFBWTtBQUN4RywyQ0FBMkMsb0JBQW9CLEtBQUssWUFBWTtBQUNoRiwrQ0FBK0MsNEJBQTRCOztBQUUzRTtBQUNBLCtCQUErQjs7QUFFL0I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdEQUFnRCxVQUFVLDhCQUE4QixrQkFBa0IsSUFBSSw4QkFBOEIsSUFBSTtBQUNoSiwyQ0FBMkMsb0JBQW9CLEtBQUssOEJBQThCLElBQUk7QUFDdEcsK0NBQStDLDRCQUE0Qjs7O0FBRzNFO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHlEQUF5RDtBQUN6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esb0RBQW9EO0FBQ3BELDZFQUE2RTtBQUM3RSxvREFBb0Qsd0JBQXdCO0FBQzVFO0FBQ0EseURBQXlEO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBLHNFQUFzRTtBQUN0RSwyREFBMkQsZ0JBQWdCO0FBQzNFLDJEQUEyRCxzQkFBc0I7QUFDakY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsZ0RBQWdEO0FBQ2hELCtGQUErRjtBQUMvRixnREFBZ0QsdUJBQXVCO0FBQ3ZFLGtEQUFrRDtBQUNsRCxvRUFBb0U7QUFDcEUsc0RBQXNELHdCQUF3QjtBQUM5RSx3REFBd0Q7QUFDeEQsOEVBQThFO0FBQzlFLG9EQUFvRDtBQUNwRCxzRUFBc0U7QUFDdEUsbURBQW1ELGdCQUFnQjtBQUNuRSxtREFBbUQsdUJBQXVCO0FBQzFFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLHNEQUFzRCx3QkFBd0I7QUFDOUU7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrRUFBa0UsZ0JBQWdCO0FBQ2xGO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBEQUEwRDtBQUMxRDtBQUNBO0FBQ0E7QUFDQSwwQ0FBMEM7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3REFBd0Q7QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCO0FBQy9CO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLFFBQVEsaUVBQXFCO0FBQzdCLFFBQVEsaUVBQXFCO0FBQzdCO0FBQ0E7QUFDQTs7OztBQUlBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUEsaURBQWlELG1CQUFtQixFQUFFLGdCQUFnQjs7QUFFdEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0EsaUVBQWlFLGdCQUFnQjtBQUNqRjs7QUFFQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0Esd0RBQXdEO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBLHVDQUF1Qzs7QUFFdkM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwwREFBMEQ7QUFDMUQ7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLGlFQUFxQjs7QUFFN0I7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsK0NBQStDLDRCQUE0QjtBQUMzRTtBQUNBLG1EQUFtRDtBQUNuRCxrRUFBa0UsbUJBQW1CLEVBQUUsZ0JBQWdCLEVBQUUsWUFBWTtBQUNySDtBQUNBLHlFQUF5RSxnQkFBZ0IsRUFBRTtBQUMzRixnREFBZ0QsVUFBVSxZQUFZO0FBQ3RFO0FBQ0EscUVBQXFFLGdCQUFnQixFQUFFLElBQUksWUFBWTtBQUN2Ryx5Q0FBeUMscUJBQXFCLGdCQUFnQixFQUFFOztBQUVoRjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0Q0FBNEMsK0JBQStCLEVBQUUsZ0JBQWdCOztBQUU3RjtBQUNBO0FBQ0EsNEJBQTRCOztBQUU1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVDQUF1QztBQUN2QywyREFBMkQsZ0JBQWdCLEVBQUUsS0FBSyxZQUFZOztBQUU5RjtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0VBQWdFLGdCQUFnQjtBQUNoRjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O1VDL29CQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7OztBQ051QztBQUNJO0FBQ1E7QUFDOUI7QUFDMkI7OztBQUdoRDtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0Isd0RBQVU7QUFDMUIsb0JBQW9CLGdFQUFrQjtBQUN0QyxpQkFBaUIsb0RBQXNCO0FBQ3ZDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixtRUFBdUI7O0FBRTdDO0FBQ0E7QUFDQTtBQUNBLElBQUksbUVBQXVCO0FBQzNCLElBQUksbUVBQXVCO0FBQzNCLElBQUksbUVBQXVCO0FBQzNCLElBQUksbUVBQXVCO0FBQzNCLElBQUksbUVBQXVCO0FBQzNCLElBQUksbUVBQXVCO0FBQzNCLElBQUksbUVBQXVCO0FBQzNCLElBQUksbUVBQXVCO0FBQzNCLElBQUksbUVBQXVCO0FBQzNCLElBQUksbUVBQXVCO0FBQzNCLElBQUksbUVBQXVCO0FBQzNCLElBQUksbUVBQXVCO0FBQzNCLElBQUksbUVBQXVCO0FBQzNCLElBQUksbUVBQXVCO0FBQzNCLElBQUksbUVBQXVCO0FBQzNCLElBQUksbUVBQXVCO0FBQzNCLElBQUksbUVBQXVCO0FBQzNCLElBQUksbUVBQXVCO0FBQzNCLElBQUksbUVBQXVCO0FBQzNCLElBQUksbUVBQXVCO0FBQzNCLElBQUksbUVBQXVCO0FBQzNCLElBQUksbUVBQXVCO0FBQzNCLElBQUksbUVBQXVCO0FBQzNCLElBQUksbUVBQXVCO0FBQzNCLElBQUksbUVBQXVCO0FBQzNCLElBQUksbUVBQXVCO0FBQzNCLElBQUksbUVBQXVCO0FBQzNCLElBQUksbUVBQXVCO0FBQzNCLElBQUksbUVBQXVCO0FBQzNCLElBQUksbUVBQXVCO0FBQzNCLElBQUksbUVBQXVCO0FBQzNCLElBQUksbUVBQXVCO0FBQzNCLElBQUksbUVBQXVCO0FBQzNCLElBQUksbUVBQXVCO0FBQzNCLElBQUksbUVBQXVCO0FBQzNCLElBQUksbUVBQXVCO0FBQzNCO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBLGtEQUFrRCxpQkFBaUI7QUFDbkU7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQSxnREFBZ0QsY0FBYztBQUM5RCw0Q0FBNEMsY0FBYztBQUMxRCxxREFBcUQscUJBQXFCO0FBQzFFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBLDhDQUE4QztBQUM5QztBQUNBLDZDQUE2QztBQUM3QztBQUNBLG1EQUFtRCxpQkFBaUI7QUFDcEU7QUFDQSxtREFBbUQ7QUFDbkQ7QUFDQTtBQUNBLHNFQUFzRTtBQUN0RSxvREFBb0Q7QUFDcEQ7QUFDQSxvRUFBb0U7QUFDcEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDs7QUFFQSxDQUFDOztBQUVELEkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvaGVscGVycy9ET00uanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9oZWxwZXJzL2Jhc2UuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9oZWxwZXJzL2V2ZW50cy5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL3Byb2plY3RldmVudHMuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9wcm9qZWN0cy5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL3Byb2plY3RzRE9NLmpzIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8vLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJodG1sIHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG5cXG59XFxuXFxuXFxuKiwgKjpiZWZvcmUsICo6YWZ0ZXJ7XFxuICAgIGJveC1zaXppbmc6IGluaGVyaXQ7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG59XFxuXFxuYm9keSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5oaWRkZW4ge1xcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW5cXG59XFxuXFxuLnByb2plY3Qge1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ubm9uZSB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi50b0RvTm90ZUlucHV0IHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxufVxcblxcbi50ZXh0IHtcXG4gICAgd2hpdGUtc3BhY2U6IHByZS13cmFwO1xcbn1cXG5cXG4ubW9kSW5wdXQge1xcbiAgICB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7XFxufVxcblxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxzQkFBc0I7O0FBRTFCOzs7QUFHQTtJQUNJLG1CQUFtQjtJQUNuQixTQUFTO0lBQ1QsVUFBVTtBQUNkOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJO0FBQ0o7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSx1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxxQkFBcUI7QUFDekJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiaHRtbCB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuXFxufVxcblxcblxcbiosICo6YmVmb3JlLCAqOmFmdGVye1xcbiAgICBib3gtc2l6aW5nOiBpbmhlcml0O1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxufVxcblxcbmJvZHkge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4uaGlkZGVuIHtcXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuXFxufVxcblxcbi5wcm9qZWN0IHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLm5vbmUge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4udG9Eb05vdGVJbnB1dCB7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG4udGV4dCB7XFxuICAgIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDtcXG59XFxuXFxuLm1vZElucHV0IHtcXG4gICAgd2hpdGUtc3BhY2U6IHByZS13cmFwO1xcbn1cXG5cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgdGhpcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1tfaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaTIgPSAwOyBfaTIgPCBtb2R1bGVzLmxlbmd0aDsgX2kyKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2kyXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiZXhwb3J0IGNvbnN0IERPTUdlbmVyYWwgPSBmdW5jdGlvbigpe1xuICAgIFxuICAgIGNvbnN0IGVsZW1lbnRJbml0ID0gZnVuY3Rpb24oZWxlbSwgYXR0cnNPYmo9e30sdGV4dFN0cmluZz0nJyl7XG4gICAgICAgIFxuICAgICAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChlbGVtKTtcbiAgICAgICAgXG4gICAgICAgIGlmIChPYmplY3Qua2V5cyhhdHRyc09iaikubGVuZ3RoID4gMCl7XG4gICAgICAgICAgICBPYmplY3Qua2V5cyhhdHRyc09iaikuZm9yRWFjaChmdW5jdGlvbihhdHQpe1xuICAgICAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoYXR0LCBhdHRyc09ialthdHRdKVxuICAgICAgICB9KVxuICAgIH0gICBcbiAgICAgICAgaWYgKHRleHRTdHJpbmcubGVuZ3RoID4gMCl7XG4gICAgICAgICAgICBlbGVtZW50LnRleHRDb250ZW50ID0gdGV4dFN0cmluZztcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBlbGVtZW50ICAgICAgIFxuXG4gICAgfTtcblxuICAgY29uc3Qgc2VsZWN0RWxlbSA9IGZ1bmN0aW9uKHNlbGVjdG9yU3RyaW5nKXtcblxuICAgICAgIGlmIChzZWxlY3RvclN0cmluZ1swXSA9PT0gJyMnKXtcbiAgICAgICAgICAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3JTdHJpbmcpXG4gICAgICAgfVxuICAgICAgIGVsc2Uge1xuICAgICAgICAgICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChzZWxlY3RvclN0cmluZyk7XG4gICAgICAgfVxuICAgICAgIFxuICAgfTtcblxuICAgcmV0dXJuIHtcbiAgICAgICBlbGVtZW50SW5pdCwgXG4gICAgICAgc2VsZWN0RWxlbSxcbiAgIH1cblxufVxuXG5cblxuIiwiZXhwb3J0IGNvbnN0IGJhc2VDcmVhdGUgPSBmdW5jdGlvbihzdG9yYWdlKXtcbiAgICAgIFxuY29uc3QgX3N0b3JhZ2UgPSBzdG9yYWdlIHx8IG5ldyBBcnJheSgpO1xuXG4oZnVuY3Rpb24oKXtcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoX3N0b3JhZ2UpKXtcbiAgICAgICAgdGhyb3cgJ0Vycm9yISBBcmd1bWVudCBtdXN0IGJlIGFuIGFycmF5JztcbiAgICB9XG4gICAgfSkoKVxuICAgIFxuY29uc3QgYWRkID0gZnVuY3Rpb24oZWxlbSl7XG4gICAgX3N0b3JhZ2UucHVzaChlbGVtKTtcblxufTtcblxuY29uc3QgcmVtb3ZlID0gZnVuY3Rpb24oZWxlbSwgaW5kZXg9MCl7XG4gICAgaWYgKGluZGV4ID09PSAwKXtcbiAgICAgICAgZm9yIChsZXQgaSA9IGluZGV4OyBpIDwgX3N0b3JhZ2UubGVuZ3RoOyBpKyspe1xuICAgICAgICAgICAgaWYoX3N0b3JhZ2VbaV0gPT09IGVsZW0pe1xuICAgICAgICAgICAgICAgIF9zdG9yYWdlLnNwbGljZShpLDEpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICB9XG4gICAgICAgICB9ICAgICAgICAgXG4gICAgICAgfVxuICAgICAgIGVsc2UgaWYgKGluZGV4ID4gMCAmJiBpbmRleCA8IF9zdG9yYWdlLmxlbmd0aCl7XG4gICAgICAgICAgIF9zdG9yYWdlLnNwbGljZShpbmRleCwgMSlcbiAgICAgICB9ICBcbn07XG5cbmNvbnN0IHVwZGF0ZUJ5TG9jYXRpb24gPSBmdW5jdGlvbihpbmRleCwgcmVwbGFjZSl7XG4gICAgICAgIGlmIChpbmRleCA+IDAgJiYgaW5kZXggPCBfc3RvcmFnZS5sZW5ndGgpe1xuICAgICAgICAgICAgX3N0b3JhZ2Uuc3BsaWNlKGluZGV4LDEscmVwbGFjZSk7XG4gICAgICAgIH1cblxufTtcblxuY29uc3QgdXBkYXRlQnlFbGVtZW50ID0gZnVuY3Rpb24oZWxlbSwgcmVwbGFjZSl7XG4gICAgICAgIGZvciAobGV0IHggPSBpbmRleDsgeCA8IF9zdG9yYWdlLmxlbmd0aDsgeCsrKXtcbiAgICAgICAgICAgIGlmKF9zdG9yYWdlW3hdID09PSBlbGVtKXtcbiAgICAgICAgICAgICAgICBfc3RvcmFnZS5zcGxpY2UoeCwxLCByZXBsYWNlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH19XG59O1xuXG5cbmNvbnN0IG1vdmUgPSBmdW5jdGlvbihpbmRleCwgdGFyZ2V0KXtcbiAgICBpZiAoaW5kZXggPj0gMCAmJiBpbmRleCA8X3N0b3JhZ2UubGVuZ3RoICYmIHRhcmdldCA+PSAwICYmIHRhcmdldCA8X3N0b3JhZ2UubGVuZ3RoKXtcbiAgICAgICAgY29uc3QgbW92ZWQgPSBfc3RvcmFnZVtpbmRleF07XG4gICAgICAgIF9zdG9yYWdlLnNwbGljZShpbmRleCwxKTtcbiAgICAgICAgX3N0b3JhZ2Uuc3BsaWNlKHRhcmdldCwwLG1vdmVkKVxuICAgIFxuICAgIH0gICBcbiAgICBlbHNlIGlmKGluZGV4ID49IDAgJiYgaW5kZXggPF9zdG9yYWdlLmxlbmd0aCAmJiB0YXJnZXQgPj0gX3N0b3JhZ2UubGVuZ3RoKSB7XG4gICAgICAgIGNvbnN0IHJlcGxhY2VtZW50ID0gX3N0b3JhZ2VbaW5kZXhdO1xuICAgICAgICBfc3RvcmFnZS5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICBfc3RvcmFnZS5wdXNoKHJlcGxhY2VtZW50KTtcblxuICAgIH0gICAgXG59O1xuXG5jb25zdCBzd2FwID0gZnVuY3Rpb24oaW5kZXhBLCBpbmRleEIpe1xuICAgIGlmIChpbmRleEEgPj0gMCAmJiBpbmRleEEgPF9zdG9yYWdlLmxlbmd0aCAmJiBpbmRleEIgPj0gMCAmJiBpbmRleEIgPF9zdG9yYWdlLmxlbmd0aCl7XG4gICAgICAgIFxuICAgICAgIFtfc3RvcmFnZVtpbmRleEFdLCBfc3RvcmFnZVtpbmRleEJdXSA9IFtfc3RvcmFnZVtpbmRleEJdLCBfc3RvcmFnZVtpbmRleEFdXVxuICAgIH1cblxufTtcblxuY29uc3QgY29weSA9IGZ1bmN0aW9uIChpbmRleCl7XG4gICAgaWYgKGluZGV4ID49IDAgJiYgaW5kZXggPCBfc3RvcmFnZS5sZW5ndGgpe1xuICAgICAgICBsZXQgY2xvbmUgPSBfc3RvcmFnZVtpbmRleF07XG4gICAgICAgIF9zdG9yYWdlLnB1c2goY2xvbmUpO1xuICAgIH1cbn1cbiAgICBcbiAgICByZXR1cm4ge1xuICAgICAgICBhZGQsXG4gICAgICAgIHJlbW92ZSxcbiAgICAgICAgdXBkYXRlQnlMb2NhdGlvbixcbiAgICAgICAgdXBkYXRlQnlFbGVtZW50LFxuICAgICAgICBtb3ZlLFxuICAgICAgICBzd2FwLFxuICAgICAgICBjb3B5XG4gICAgfSAgIFxufVxuXG4iLCJleHBvcnQgY29uc3QgZXZlbnRzID0gZnVuY3Rpb24oKXtcblxuICAgIGNvbnN0IF9teUV2ZW50cyA9IHt9O1xuXG4gICAgY29uc3QgX2lzRXZlbnRIZXJlID0gZnVuY3Rpb24obmFtZSl7XG4gICAgICAgIHJldHVybiBfbXlFdmVudHMuaGFzT3duUHJvcGVydHkobmFtZSk7XG4gICAgfVxuXG4gICAgY29uc3QgX2FkZEhhbmRsZXIgPSBmdW5jdGlvbihuYW1lLCBuZXdIYW5kbGVyKXsgICAgICAgXG4gICAgICAgIFxuICAgICAgICBpZiAoIV9pc0V2ZW50SGVyZShuYW1lKSl7XG4gICAgICAgICAgICAgICAgX215RXZlbnRzW25hbWVdID0gW107XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgX215RXZlbnRzW25hbWVdLnB1c2gobmV3SGFuZGxlcikgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICB9O1xuXG4gICAgY29uc3QgcmVtb3ZlSGFuZGxlciA9IGZ1bmN0aW9uKG5hbWUsIHRvUmVtb3ZlKXtcblxuICAgICAgICBpZiAoIV9pc0V2ZW50SGVyZShuYW1lKSl7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgY29uc3QgaW5kZXggPSBfbXlFdmVudHNbbmFtZV0uaW5kZXhPZih0b1JlbW92ZSk7XG4gICAgICAgIF9teUV2ZW50c1tuYW1lXS5zcGxpY2UoaW5kZXgsIDEpXG5cbiAgICB9O1xuXG4gICAgY29uc3QgX2ZpcmVNZSA9IGZ1bmN0aW9uKG5hbWUsIC4uLm9wdGlvbmFsQXJnKXtcbiAgICAgICAgICAgIFxuICAgICAgICBpZiAoIV9pc0V2ZW50SGVyZShuYW1lKSl7XG4gICAgICAgICAgICBfbXlFdmVudHNbbmFtZV0gPSBbXTtcbiAgICAgICAgfVxuXG4gICAgICAgIF9teUV2ZW50c1tuYW1lXS5mb3JFYWNoKGZ1bmN0aW9uKGgpe1xuICAgICAgICAgICAgICAgcmV0dXJuIGgoLi4ub3B0aW9uYWxBcmcpXG4gICAgICAgIH0pXG4gICAgfTtcblxuICAgIGNvbnN0IHB1Ymxpc2ggPSBmdW5jdGlvbihuYW1lLCAuLi5vcHRpb25hbEFyZyl7IFxuICAgICAgIFxuICAgICAgICBpZiAoIV9pc0V2ZW50SGVyZShuYW1lKSl7XG4gICAgICAgICAgICBfbXlFdmVudHNbbmFtZV0gPSBbXTtcbiAgICAgICAgfTtcblxuICAgICAgICBfZmlyZU1lKG5hbWUsIC4uLm9wdGlvbmFsQXJnKVxuICAgICAgICBcbiAgICB9O1xuXG4gICAgY29uc3Qgc3Vic2NyaWJlID0gZnVuY3Rpb24obmFtZSwgbmV3SGFuZGxlcil7XG5cbiAgICAgICAgaWYgKCFfaXNFdmVudEhlcmUobmFtZSkpe1xuICAgICAgICAgICAgX215RXZlbnRzW25hbWVdID0gW107XG4gICAgICAgIH07XG4gICBcbiAgICAgICAgX2FkZEhhbmRsZXIobmFtZSwgbmV3SGFuZGxlcilcbiAgICAgICAgXG4gICAgfTsgXG5cbiAgICAgICAgICAgIFxuICAgIHJldHVybiB7XG4gICAgICAgIHB1Ymxpc2gsXG4gICAgICAgIHN1YnNjcmliZSxcbiAgICAgICAgcmVtb3ZlSGFuZGxlclxuICAgIH0gICAgXG59XG5cbiIsImltcG9ydCB7IGV2ZW50cyB9IGZyb20gXCIuL2hlbHBlcnMvZXZlbnRzXCI7XG5cbmxldCBwcm9qZWN0RXZlbnRzID0gZXZlbnRzKCk7XG5cbnByb2plY3RFdmVudHMuZGVsZWdhdG9yID0gZnVuY3Rpb24oZXZlbnQpe1xuICAgICAgc3dpdGNoKHRydWUpe1xuICAgICAgICAgY2FzZSBldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdyZXZlYWxGb3JtJykgOiBwcm9qZWN0RXZlbnRzLnB1Ymxpc2goJ3JldmVhbCcpO1xuICAgICAgICAgICBicmVhaztcbiAgICAgICAgIGNhc2UgZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygncHJvamVjdEZvcm0nKTogcHJvamVjdEV2ZW50cy5wdWJsaXNoKCdjcmVhdGUnLCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGl0bGVJbnAnKS52YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3RFdmVudHMucHVibGlzaCgnc2F2ZWQnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICBjYXNlIGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ3Byb2plY3QnKTogcHJvamVjdEV2ZW50cy5wdWJsaXNoKCd2aWV3JywgZXZlbnQpO1xuICAgICAgICAgICBicmVhaztcbiAgICAgICAgIGNhc2UgZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnaXRlbVRpdGxlJyk6IHByb2plY3RFdmVudHMucHVibGlzaCgndmlldycsIGV2ZW50KTtcbiAgICAgICAgICAgYnJlYWs7ICAgICAgICAgICBcbiAgICAgICAgIGNhc2UgZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnYWRkdG9Eb0xpc3QnKTogcHJvamVjdEV2ZW50cy5wdWJsaXNoKCdjaG9vc2VUaXRsZScsIGV2ZW50KVxuICAgICAgICAgICBicmVhaztcbiAgICAgICAgIGNhc2UgZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnY2hvb3NlVGl0bGVGb3JtJyk6IHByb2plY3RFdmVudHMucHVibGlzaCgnaW5wdXRPckxpc3QnLCBldmVudClcbiAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICBjYXNlIGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2Nob29zZU5vdGVUeXBlJyk6IHByb2plY3RFdmVudHMucHVibGlzaCgnbm90ZVRvRG9UeXBlJywgZXZlbnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICBicmVhaztcbiAgICAgICAgIGNhc2UgZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnY2FuY2VsVGl0bGUnKSA6IHByb2plY3RFdmVudHMucHVibGlzaCgnYWJvcnROb3RlVHlwZUZvcm0nLCBldmVudCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICBicmVhazsgXG4gICAgICAgICBjYXNlIGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2NhbmNlbENob2ljZScpIDogcHJvamVjdEV2ZW50cy5wdWJsaXNoKCdhYm9ydE5vdGVUeXBlRm9ybScsZXZlbnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgY2FzZSBldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdhZGRDaGVjaycpIDogcHJvamVjdEV2ZW50cy5wdWJsaXNoKCduZXdDaGVja0l0ZW0nLCBldmVudCk7XG4gICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgY2FzZSBldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdhZGRDaGVja01vZCcpIDogcHJvamVjdEV2ZW50cy5wdWJsaXNoKCd1cGRhdGVDaGVja0l0ZW0nLCBldmVudCk7XG4gICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgY2FzZSBldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdjYW5jZWwnKSA6IHByb2plY3RFdmVudHMucHVibGlzaCgnY2FuY2VsTm90ZScsZXZlbnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICBjYXNlIGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2VkaXQnKSA6IHByb2plY3RFdmVudHMucHVibGlzaCgnbW9kaWZ5RWxlbScsZXZlbnQpO1xuICAgICAgICAgICBicmVhaztcbiAgICAgICAgIGNhc2UgZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnc3VibWl0Tm90ZScpIDogcHJvamVjdEV2ZW50cy5wdWJsaXNoKCdzdWJtaXROb3RlJywgZXZlbnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0RXZlbnRzLnB1Ymxpc2goJ3NhdmVkJyk7XG4gICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgY2FzZSBldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdyZXZlcnRNb2QnKSA6IHByb2plY3RFdmVudHMucHVibGlzaCgncmV2ZXJ0JyxldmVudCk7XG4gICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgY2FzZSBldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdzdWJtaXRNb2QnKSA6IHByb2plY3RFdmVudHMucHVibGlzaCgnc3VibWl0TW9kJyxldmVudCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdEV2ZW50cy5wdWJsaXNoKCdzYXZlZCcpO1xuICAgICAgICAgICBicmVhaztcbiAgICAgICAgIGNhc2UgZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygncmVtb3ZlJykgOiBwcm9qZWN0RXZlbnRzLnB1Ymxpc2goJ2RlbGV0ZScsIGV2ZW50KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0RXZlbnRzLnB1Ymxpc2goJ3NhdmVkJyk7XG4gICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgY2FzZSBldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdkZWxldGVDaGVjaycpIDogcHJvamVjdEV2ZW50cy5wdWJsaXNoKCdkZWxldGVDaGVjaycsIGV2ZW50KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3RFdmVudHMucHVibGlzaCgnc2F2ZWQnKTtcbiAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICBjYXNlIGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2NoZWNrJykgOiBwcm9qZWN0RXZlbnRzLnB1Ymxpc2goJ3JlY29yZENoZWNrJywgZXZlbnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdEV2ZW50cy5wdWJsaXNoKCdzYXZlZCcpO1xuICAgICAgICAgICBicmVhaztcblxuICAgICAgLy9hZGQgbW9yZS4gXG5cbn19XG4gXG4gICAgICAgXG5cblxuXG5leHBvcnQgeyBwcm9qZWN0RXZlbnRzIH0iLCJpbXBvcnQgeyBiYXNlQ3JlYXRlIH0gZnJvbSBcIi4vaGVscGVycy9iYXNlXCI7XG5cblxuLy9UZW1wbGF0ZSBmb3IgYSB0b2RvLW5vdGUgXG5cbmV4cG9ydCBjb25zdCBzaW5nbGV0b0RvTm90ZSA9IGZ1bmN0aW9uKG5hbWUpe1xuXG5cbiAgIGNvbnN0IG5vdGVTdG9yYWdlID0gbmV3IEFycmF5KCk7XG4gICBjb25zdCB0b0RvTm90ZSA9IGJhc2VDcmVhdGUobm90ZVN0b3JhZ2UpO1xuICAgXG4gICBjb25zdCBhZGROb3RlID0gZnVuY3Rpb24obm90ZSl7XG4gICAgICB0b0RvTm90ZS5hZGQobm90ZSk7XG4gICB9XG5cbiAgIGNvbnN0IHJlbW92ZU5vdGUgPSBmdW5jdGlvbihpbmRleCl7XG4gICAgICBjb25zdCBub3RlID0gX25vdGVzdG9yYWdlW2luZGV4XTtcbiAgICAgIHRvRG9Ob3RlLnJlbW92ZShub3RlLCBpbmRleCk7ICBcbiAgIH1cblxuICAgY29uc3QgbW92ZU5vdGUgPSBmdW5jdGlvbihpbmRleCwgdGFyZ2V0KXtcbiAgICAgIHRvRG9Ob3RlLm1vdmUoaW5kZXgsIHRhcmdldCk7XG4gICAgICAgIFxuICAgfVxuICAgXG4gICByZXR1cm4ge3RvRG9Ob3RlLFxuICAgICAgICAgICBuYW1lLFxuICAgICAgICAgICBub3RlU3RvcmFnZSxcbiAgICAgICAgICAgYWRkTm90ZVxuICAgICAgICAgICBcbn1cbn1cbi8vXG5cbi8vVGVtcGxhdGUgZm9yIGEgc2luZ2xlIHByb2plY3RcblxuZXhwb3J0IGNvbnN0IHNpbmdsZVByb2ogPSBmdW5jdGlvbihuYW1lKXtcblxuICAgY29uc3QgcHJvalN0b3JhZ2UgPSBuZXcgQXJyYXkoKTtcbiAgIGNvbnN0IHByb2plY3QgPSBiYXNlQ3JlYXRlKHByb2pTdG9yYWdlKTtcbiAgIFxuICAgXG4gICBjb25zdCBhZGRUb1Byb2plY3QgPSBmdW5jdGlvbihuYW1lKXtcbiAgICAgIGNvbnN0IHRvZG8gPSBzaW5nbGV0b0RvTm90ZShuYW1lKVxuICAgICAgcHJvamVjdC5hZGQodG9kbyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgIH1cblxuICAgY29uc3QgcmVtb3ZlRnJvbVByb2plY3QgPSBmdW5jdGlvbihpbmRleCl7XG4gICAgICBjb25zdCB0b2RvID0gcHJvalN0b3JhZ2VbaW5kZXhdO1xuICAgICAgcHJvamVjdC5yZW1vdmUodG9kbywgaW5kZXgpOyAgXG4gICB9IFxuXG4gICBjb25zdCBtb3ZldG9EbyA9IGZ1bmN0aW9uKGluZGV4LCB0YXJnZXQpe1xuICAgICAgcHJvamVjdC5tb3ZlKGluZGV4LCB0YXJnZXQpO1xuICAgICAgICAgXG4gICB9XG5cbiAgIHJldHVybiB7cHJvamVjdCxcbiAgICAgICAgICAgbmFtZSxcbiAgICAgICAgICAgYWRkVG9Qcm9qZWN0LFxuICAgICAgICAgICBwcm9qU3RvcmFnZSBcbiAgIH1cblxufSBcblxuLy9cblxuLy9PdmVyYWxsIEludGVyZmFjZVxuXG5leHBvcnQgY29uc3QgbWFpbkludGVyZmFjZSA9IGZ1bmN0aW9uKCl7XG4gICBcbiAgIGNvbnN0IF9vdmVyYWxsU3RvcmFnZSA9IG5ldyBBcnJheSgpO1xuICAgY29uc3QgYWxsVG9EbyA9IGJhc2VDcmVhdGUoX292ZXJhbGxTdG9yYWdlKTtcblxuICAgY29uc3QgbmV3UHJvaiA9IGZ1bmN0aW9uKG5hbWUpe1xuICAgICAgY29uc3QgcHJvaiA9IHNpbmdsZVByb2oobmFtZSk7XG4gICAgICBhbGxUb0RvLmFkZChwcm9qKTtcblxuICAgfVxuICAgIFxuICAgY29uc3QgbW92ZVByb2ogPSBmdW5jdGlvbihpbmRleCwgdGFyZ2V0KXtcbiAgICAgIGFsbFRvRG8ubW92ZShpbmRleCwgdGFyZ2V0KTtcblxuICAgfVxuICAgXG4gICBjb25zdCB0cmFuc2ZlclRvTG9jYWxTdG9yYWdlID0gZnVuY3Rpb24oKXtcbiAgICAgICAgIHJldHVybiBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnYWNjZXNzJywgSlNPTi5zdHJpbmdpZnkoX292ZXJhbGxTdG9yYWdlKSlcbiAgIH1cblxuICAgY29uc3QgX2ZpbmRQcm9qID0gZnVuY3Rpb24oZXZlbnQpe1xuICAgICAgY29uc3QgcHJvaiA9IGV2ZW50LnRhcmdldC5jbG9zZXN0KCcucHJvamVjdCcpXG4gICAgICByZXR1cm4gcHJvai5kYXRhc2V0LmlkXG4gICB9XG5cbiAgIGNvbnN0IF9maW5kVG9EbyA9IGZ1bmN0aW9uKGV2ZW50KXtcbiAgICAgIGNvbnN0IHRvRG8gPSBldmVudC50YXJnZXQuY2xvc2VzdCgnLnRvRG9Ob3RlSW5wdXQnKVxuICAgICAgcmV0dXJuIHRvRG8uZGF0YXNldC5pZFxuICAgfVxuXG5cbiAgIGNvbnN0IGFwcGVuZFRvUHJvaiA9IGZ1bmN0aW9uKGV2ZW50KXtcbiAgICAgIGNvbnN0IGluZGV4ID0gX2ZpbmRQcm9qKGV2ZW50KTtcbiAgICAgIGNvbnN0IGN1cnJlbnRQcm9qID0gX292ZXJhbGxTdG9yYWdlW2luZGV4XTtcbiAgICAgIGNvbnN0IGZvcm0gPSBldmVudC50YXJnZXQucGFyZW50RWxlbWVudDsgICAgICBcbiAgICAgIGNvbnN0IGRvbVByb2plY3QgPSBmb3JtLnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudDtcblxuICAgICAgY29uc3QgZm9ybUNoaWxkcmVuID0gQXJyYXkuZnJvbShmb3JtLmNoaWxkcmVuKTtcbiAgICAgIGNvbnN0IHRpdGxlID0gZm9ybUNoaWxkcmVuLmZpbHRlcihjaGlsZCA9PiAgY2hpbGQuaWQgPT09IGBpdGVtVGl0bGUke2RvbVByb2plY3QuZGF0YXNldC5pZH0ke2Zvcm0uZGF0YXNldC5pZH1gKVxuICAgICAgY29uc3QgbmFtZSA9IHRpdGxlWzBdLmZpcnN0Q2hpbGQubm9kZVZhbHVlO1xuICAgXG4gICAgICBjb25zdCBfZm9ybUNvdW50ID0gKGZ1bmN0aW9uKCl7XG4gICAgICBjb25zdCBjb250YWluZXJDaGlsZHJlbiA9IEFycmF5LmZyb20oZm9ybS5wYXJlbnRFbGVtZW50LmNoaWxkcmVuKTtcbiAgICAgIGNvbnN0IHByb2plY3RGb3JtcyA9IGNvbnRhaW5lckNoaWxkcmVuLmZpbHRlcihjaGlsZCA9PiBjaGlsZC5jbGFzc0xpc3QuY29udGFpbnMoJ3RvRG9Ob3RlSW5wdXQnKSk7XG4gICAgICBjb25zdCBfZm9ybXNDb3VudGVkID0gcHJvamVjdEZvcm1zLmxlbmd0aCAtIDE7XG4gICAgICByZXR1cm4gX2Zvcm1zQ291bnRlZCBcbiAgICAgIH0pKClcbiAgICAgIFxuICAgICAgaWYgKGN1cnJlbnRQcm9qLnByb2pTdG9yYWdlLmxlbmd0aCAtIDEgPT0gX2Zvcm1Db3VudCl7IFxuICAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgICBcbiAgICAgIGN1cnJlbnRQcm9qLmFkZFRvUHJvamVjdChuYW1lKVxuICAgICAgXG4gICAgICByZXR1cm5cblxuICAgfVxuXG4gICBjb25zdCBhcHBlbmROb3RlVG9JdGVtID0gZnVuY3Rpb24oZXZlbnQpe1xuICAgICAgY29uc3QgcHJvakluZGV4ID0gX2ZpbmRQcm9qKGV2ZW50KTtcbiAgICAgIGNvbnN0IHRvRG9JbmRleCA9IF9maW5kVG9EbyhldmVudCk7XG4gICAgICBjb25zdCBjdXJyZW50VG9EbyA9IF9vdmVyYWxsU3RvcmFnZVtwcm9qSW5kZXhdLnByb2pTdG9yYWdlW3RvRG9JbmRleF07XG4gICAgICBjb25zdCBmb3JtID0gZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQ7XG4gICAgICBjb25zdCBmb3JtQ2hpbGRyZW4gPSBBcnJheS5mcm9tKGZvcm0uY2hpbGRyZW4pO1xuICAgICAgXG5cbiAgICAgIGNvbnN0IG5vdGUgPSBmdW5jdGlvbigpeyBcbiAgICAgICAgaWYoIGZvcm0uY2xhc3NMaXN0LmNvbnRhaW5zKCdjaGVja2JveCcpKXtcblxuICAgICAgICBjb25zdCBsYWJlbHMgPSBmb3JtQ2hpbGRyZW4uZmlsdGVyKGNoaWxkID0+IGNoaWxkLmNsYXNzTGlzdC5jb250YWlucygnZWRpdCcpKTtcbiAgICAgICAgY29uc3QgY3VycmVudExhYmVsID0gbGFiZWxzW2xhYmVscy5sZW5ndGggLSAxXTtcblxuICAgICAgICAgcmV0dXJuICB7J2NoZWNrJzogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgJ2xhYmVsJzogY3VycmVudExhYmVsLmZpcnN0Q2hpbGQubm9kZVZhbHVlfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuXG4gICAgICAgIGNvbnN0IHRleHRzID0gZm9ybUNoaWxkcmVuLmZpbHRlcihjaGlsZCA9PiBjaGlsZC5jbGFzc0xpc3QuY29udGFpbnMoJ3RleHQnKSkgXG4gICAgICAgIGNvbnN0IGN1cnJlbnRUZXh0ID0gdGV4dHNbMF07XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gY3VycmVudFRleHQuZmlyc3RDaGlsZC5ub2RlVmFsdWVcbiAgICAgICB9fVxuICAgICAgY3VycmVudFRvRG8uYWRkTm90ZShub3RlKCkpO1xuICAgICAgcmV0dXJuICAgXG4gICAgICB9XG5cbiAgIGNvbnN0IHJlbW92ZUl0ZW0gPSBmdW5jdGlvbihldmVudCl7XG4gICAgICBjb25zdCBpbmRleCA9IF9maW5kUHJvaihldmVudCk7XG4gICAgICBjb25zdCBwcm9qID0gX292ZXJhbGxTdG9yYWdlW2luZGV4XTtcbiAgICAgIGlmIChldmVudC50YXJnZXQucGFyZW50RWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoJ3Byb2plY3QnKSl7XG4gICAgICAgICBhbGxUb0RvLnJlbW92ZShwcm9qKVxuICAgICAgICAgcmV0dXJuXG4gICAgICAgICBcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKGV2ZW50LnRhcmdldC5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygndG9Eb05vdGVJbnB1dCcpKXtcbiAgICAgICAgIGNvbnN0IGZvcm1JbmRleCA9IF9maW5kVG9EbyhldmVudClcbiAgICAgICAgIHByb2oucHJvalN0b3JhZ2Uuc3BsaWNlKGZvcm1JbmRleCwgMSk7XG4gICAgICAgICByZXR1cm4gXG5cbiAgICAgIH1cblxuICAgICAgcmV0dXJuXG5cbiAgIH1cblxuXG4gICBjb25zdCByZWNvcmRDaGVjayA9IGZ1bmN0aW9uKGV2ZW50KXtcbiAgICAgIGNvbnN0IGNoZWNrID0gZXZlbnQudGFyZ2V0O1xuICAgICAgY29uc3QgZm9ybSA9IGV2ZW50LnRhcmdldC5wYXJlbnRFbGVtZW50O1xuICAgICAgY29uc3QgZm9ybUNoaWxkcmVuID0gQXJyYXkuZnJvbShmb3JtLmNoaWxkcmVuKTtcbiAgICAgIGNvbnN0IGZvcm1DaGVja3MgPSBmb3JtQ2hpbGRyZW4uZmlsdGVyKGNoaWxkID0+IGNoaWxkLmNsYXNzTGlzdC5jb250YWlucygnY2hlY2snKSk7XG4gICAgICBcbiAgICAgIGNvbnN0IHByb2pJbmRleCA9IF9maW5kUHJvaihldmVudCk7XG4gICAgICBjb25zdCB0b0RvSW5kZXggPSBfZmluZFRvRG8oZXZlbnQpO1xuICAgICAgY29uc3QgY2hlY2tib3hJbmRleCA9IGZvcm1DaGVja3MuaW5kZXhPZihjaGVjayk7XG4gICAgICBcblxuICAgICAgY29uc3QgdGFyZ2V0ID0gX292ZXJhbGxTdG9yYWdlW3Byb2pJbmRleF0ucHJvalN0b3JhZ2VbdG9Eb0luZGV4XS5ub3RlU3RvcmFnZVtjaGVja2JveEluZGV4XVxuICAgICAgdGFyZ2V0LmNoZWNrID09PSBmYWxzZSA/IHRhcmdldC5jaGVjayA9IHRydWUgOiB0YXJnZXQuY2hlY2sgPSBmYWxzZTtcbiAgICAgIHJldHVyblxuICAgfVxuXG4gICBjb25zdCBkZWxldGVDaGVja0Zyb21TdG9yYWdlID0gZnVuY3Rpb24oZXZlbnQpe1xuICAgICAgY29uc3QgcHJvakluZGV4ID0gX2ZpbmRQcm9qKGV2ZW50KTtcbiAgICAgIGNvbnN0IHByb2ogPSBfb3ZlcmFsbFN0b3JhZ2VbcHJvakluZGV4XTtcbiAgICAgIGNvbnN0IGZvcm1JbmRleCA9IF9maW5kVG9EbyhldmVudClcblxuICAgICAgY29uc3QgZm9ybSA9IGV2ZW50LnRhcmdldC5jbG9zZXN0KCcudG9Eb05vdGVJbnB1dCcpO1xuICAgICAgY29uc3QgZm9ybUNoaWxkcmVuID0gQXJyYXkuZnJvbShmb3JtLmNoaWxkcmVuKTtcbiAgICAgIGNvbnN0IGZvcm1MYWJlbHMgPSBmb3JtQ2hpbGRyZW4uZmlsdGVyKGNoaWxkID0+IGNoaWxkLmNsYXNzTGlzdC5jb250YWlucygnZWRpdCcpKTtcbiAgICAgIGNvbnN0IGl0ZW1JbmRleCA9IGZvcm1MYWJlbHMuaW5kZXhPZihldmVudC50YXJnZXQucGFyZW50RWxlbWVudCk7XG5cbiAgICAgIHByb2oucHJvalN0b3JhZ2VbZm9ybUluZGV4XS5ub3RlU3RvcmFnZS5zcGxpY2UoaXRlbUluZGV4LCAxKTtcbiAgICAgIHJldHVyblxuICAgfVxuXG4gICBjb25zdCBtb2RpZnlJblN0b3JhZ2UgPSBmdW5jdGlvbihldmVudCl7XG4gICAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtb2RJbnB1dCcpO1xuICAgICAgY29uc3QgcHJvakluZGV4ID0gX2ZpbmRQcm9qKGV2ZW50KTtcbiAgICAgIGNvbnN0IHByb2ogPSBfb3ZlcmFsbFN0b3JhZ2VbcHJvakluZGV4XTtcbiAgICAgIGNvbnN0IHRvRG9JbmRleCA9IGV2ZW50LnRhcmdldC5jbG9zZXN0KCcudG9Eb05vdGVJbnB1dCcpID8gX2ZpbmRUb0RvKGV2ZW50KSA6IGZhbHNlO1xuICAgICAgY29uc3QgdG9Eb05vdGUgPSB0b0RvSW5kZXggPyBwcm9qLnByb2pTdG9yYWdlW3RvRG9JbmRleF06IGZhbHNlO1xuICAgICAgY29uc3QgZm9ybSA9IGV2ZW50LnRhcmdldC5wYXJlbnRFbGVtZW50O1xuICAgICAgY29uc3QgZm9ybUNoaWxkcmVuID0gQXJyYXkuZnJvbShmb3JtLmNoaWxkcmVuKTtcbiAgICAgIGNvbnN0IGJ1dHRvbkNoZWNrZXIgPSBmb3JtQ2hpbGRyZW4uZmlsdGVyKGNoaWxkID0+IGNoaWxkLm5vZGVOYW1lID09ICdCVVRUT04nICYmIGNoaWxkLmNsYXNzTGlzdC5jb250YWlucygnZGlzYWJsZWRFZGl0JykpXG5cblxuICAgICAgaWYgKGJ1dHRvbkNoZWNrZXIubGVuZ3RoID4gMCl7XG4gICAgICAgICBpZiAoZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdwcm9qZWN0Jykpe1xuICAgICAgICAgICAgcHJvai5uYW1lID0gaW5wdXQudmFsdWU7XG4gICAgICAgICAgICByZXR1cm4gXG4gICAgICAgICAgICAgXG4gICAgICAgICB9XG4gICAgICAgICBlbHNlIGlmIChldmVudC50YXJnZXQucGFyZW50RWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoJ2l0ZW1UaXRsZScpKXtcbiAgICAgICAgICAgIHRvRG9Ob3RlLm5hbWUgPSBpbnB1dC52YWx1ZTtcbiAgICAgICAgICAgIHJldHVyblxuXG4gICAgICAgICB9fVxuICAgICAgICAgZWxzZSB7XG5cbi8vRXhwbGFpbmVyOiB0YXJnZXRJbmRleCB1c2VzIHRoZSBzdWJtaXRNb2QgYnV0dG9uIGFzIHRoZSBpbmRleCBvZiB0aGUgZWxlbWVudCxcbi8vYmVjYXVzZSB0aGUgbW9kaWZ5RWxlbSBldmVudCwgd2hpY2ggZmlyZWQgcHJpb3IgdG8gdGhpcyBvbmUsIHJlcGxhY2VkIHRoZSBvcmlnaW5hbFxuLy9lbGVtZW50ICh0aGUgb25lIHdlJ3JlIHRhcmdldGluZykgaW4gdGhlIERPTSB3aXRoIHRoZSAnbW9kJyBzdHVmZiBpbmNsdWRpbmcgZXZlbnQudGFyZ2V0IChpLmUgc3VibWl0TW9kKS5cblxuICAgICAgICAgICAgY29uc3QgdGFyZ2V0cyA9ICBmb3JtLmNsYXNzTGlzdC5jb250YWlucygnZnJlZUZvcm0nKSA/IGZhbHNlIDogZm9ybUNoaWxkcmVuLmZpbHRlcihjaGlsZCA9PiBjaGlsZC5jbGFzc0xpc3QuY29udGFpbnMoJ2Rpc2FibGVkRWRpdCcpIHx8IGNoaWxkID09PSBldmVudC50YXJnZXQpXG4gICAgICAgICAgICBjb25zdCB0YXJnZXRJbmRleCA9IGZvcm0uY2xhc3NMaXN0LmNvbnRhaW5zKCdmcmVlRm9ybScpID8gZmFsc2UgOiB0YXJnZXRzLmluZGV4T2YoZXZlbnQudGFyZ2V0KSAgXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGZvcm0uY2xhc3NMaXN0LmNvbnRhaW5zKCdmcmVlRm9ybScpID8gdG9Eb05vdGUubm90ZVN0b3JhZ2VbMF0gPSBpbnB1dC52YWx1ZSA6IHRvRG9Ob3RlLm5vdGVTdG9yYWdlW3RhcmdldEluZGV4XS5sYWJlbCA9IGlucHV0LnZhbHVlO1xuICAgICAgICAgICAgcmV0dXJuIFxuICAgICAgICAgfSAgXG4gICAgICBcblxuICAgICAgXG4gICB9XG4gIFxuICAgXG4gICByZXR1cm4ge1xuICAgICAgbmV3UHJvaixcbiAgICAgIHRyYW5zZmVyVG9Mb2NhbFN0b3JhZ2UsXG4gICAgICBhcHBlbmRUb1Byb2osXG4gICAgICByZW1vdmVJdGVtLFxuICAgICAgYXBwZW5kTm90ZVRvSXRlbSxcbiAgICAgIHJlY29yZENoZWNrLFxuICAgICAgZGVsZXRlQ2hlY2tGcm9tU3RvcmFnZSxcbiAgICAgIG1vZGlmeUluU3RvcmFnZVxuICAgICAgLy9qdXN0IHRoaXMgZm9yIG5vdy5cbiAgIH1cbiAgXG4gICBcbn1cblxuIiwiaW1wb3J0IHsgRE9NR2VuZXJhbCB9IGZyb20gXCIuL2hlbHBlcnMvRE9NXCI7XG5pbXBvcnQgeyBwcm9qZWN0RXZlbnRzIH0gZnJvbSBcIi4vcHJvamVjdGV2ZW50c1wiO1xuXG5cbmV4cG9ydCBjb25zdCB0ZW1wbGF0ZURPTVN0cnVjdHMgPSBmdW5jdGlvbiAoKXtcblxuICAgIGNvbnN0IERPTSA9IERPTUdlbmVyYWwoKVxuICAgIGNvbnN0IGRlbGVnYXRvciA9IHByb2plY3RFdmVudHMuZGVsZWdhdG9yXG5cbiAgICBjb25zdCBjcmVhdGVQcm9qZWN0ID0gZnVuY3Rpb24obmFtZSl7XG4gICAgICAgICBpZiAobmFtZSA9PT0gJycpe3JldHVybn0gXG4gICAgICAgICBjb25zdCByZWZlcmVuY2UgPSBET00uc2VsZWN0RWxlbSgnLnByb2plY3QnKTsgXG4gICAgICAgICBjb25zdCBwcm9qID0gRE9NLmVsZW1lbnRJbml0KCdkaXYnLHsnaWQnOiBgJHtuYW1lfSR7cmVmZXJlbmNlLmxlbmd0aH1gLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2RhdGEtaWQnOmAke3JlZmVyZW5jZS5sZW5ndGh9YCwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnY2xhc3MnOiAncHJvamVjdCd9LG5hbWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgY29uc3QgcmVtb3ZlID0gRE9NLmVsZW1lbnRJbml0KCdidXR0b24nLCB7J2NsYXNzJzoncmVtb3ZlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnaWQnOmByZW1vdmUke3Byb2ouZGF0YXNldC5pZH1gfSwgJ1gnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICBjb25zdCBhZGRUb0RvTGlzdEJ0biA9IERPTS5lbGVtZW50SW5pdCgnYnV0dG9uJywgeydjbGFzcyc6ICdhZGR0b0RvTGlzdCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdpZCc6IGBhZGQke0RPTS5zZWxlY3RFbGVtKCcucHJvamVjdCcpLmxlbmd0aH1gfSwgJ0FkZCBUby1EbyBMaXN0Jyk7XG4gICAgICAgIGNvbnN0IG1vZGlmeSA9IERPTS5lbGVtZW50SW5pdCgnYnV0dG9uJywgeydjbGFzcyc6J2VkaXQnfSwnRWRpdCcpO1xuICAgICAgICBwcm9qLmFwcGVuZENoaWxkKHJlbW92ZSk7XG4gICAgICAgIHByb2ouYXBwZW5kQ2hpbGQobW9kaWZ5KTtcbiAgICAgICAgcHJvai5hcHBlbmRDaGlsZChET00uZWxlbWVudEluaXQoJ2RpdicseyAnY2xhc3MnOidub25lIHRvRG9Db250YWluZXInLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2lkJzpgY29udGFpbmVyJHtyZWZlcmVuY2UubGVuZ3RofWB9KSk7XG4gICAgICAgIHByb2ouYXBwZW5kQ2hpbGQoYWRkVG9Eb0xpc3RCdG4pO1xuXG4gICAgICAgIFxuICAgICAgICBwcm9qLm9uY2xpY2sgPSBkZWxlZ2F0b3I7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IERPTS5zZWxlY3RFbGVtKCcjY29udGFpbmVyJyk7XG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9qKTtcbiAgICAgICAgXG4gICAgIH1cbiAgICAgXG5cbiAgICAgY29uc3QgY3JlYXRlVG9Eb05vdGUgPSBmdW5jdGlvbihjaG9zZW5UeXBlKXtcbiAgICAgICAgY29uc3QgaW5wdXQgPSBET00uc2VsZWN0RWxlbSgnI3RlbXBvcmFyeUlucHV0JykgXG4gICAgICAgIGNvbnN0IHByb2plY3QgPSBpbnB1dC5wYXJlbnRFbGVtZW50O1xuICAgICAgICBjb25zdCBmb3JtUmVmZXJlbmNlID0gRE9NLnNlbGVjdEVsZW0oJy50b0RvTm90ZUlucHV0JylcbiAgICAgICAgY29uc3QgY29udGFpbmVyID0gRE9NLnNlbGVjdEVsZW0oYCNjb250YWluZXIke3Byb2plY3QuZGF0YXNldC5pZH1gKTtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IGZvcm0gPSBET00uZWxlbWVudEluaXQoJ2Zvcm0nLHsnY2xhc3MnOiAndG9Eb05vdGVJbnB1dCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2lkJzogYHRvRG9Ob3RlRm9ybSR7cHJvamVjdC5kYXRhc2V0LmlkfSR7Zm9ybVJlZmVyZW5jZS5sZW5ndGh9YCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2RhdGEtaWQnOmAke2Zvcm1SZWZlcmVuY2UubGVuZ3RofWAgfSlcbiAgICAgICAgY29uc3Qgc3VibWl0ID0gRE9NLmVsZW1lbnRJbml0KCdidXR0b24nLHsndHlwZSc6J3N1Ym1pdCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnaWQnOiAnc3VibWl0Tm90ZScsIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnY2xhc3MnOidzdWJtaXROb3RlIG5vbmUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwnU3VibWl0IE5vdGUnKVxuICAgICAgICBjb25zdCBjYW5jZWwgPSBET00uZWxlbWVudEluaXQoJ2J1dHRvbicsIHsnY2xhc3MnOidjYW5jZWwgbm9uZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2lkJzonY2FuY2VsTm90ZSd9LCAnQ2FuY2VsJyk7XG4gICAgICAgIFxuICAgICAgICBjb25zdCByZW1vdmUgPSBET00uZWxlbWVudEluaXQoJ2J1dHRvbicsIHsnY2xhc3MnOidyZW1vdmUgbm9uZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnaWQnOmByZW1vdmUke3Byb2plY3QuZGF0YXNldC5pZH0ke2Zvcm1SZWZlcmVuY2UubGVuZ3RofWB9LCAnWCcpO1xuICAgICAgICBjb25zdCBwcm92VGl0bGUgPSBET00uc2VsZWN0RWxlbSgnI3Byb3ZUaXRsZScpO1xuICAgICAgICBjb25zdCB0aXRsZSA9IERPTS5lbGVtZW50SW5pdCgnbGFiZWwnLCB7J2NsYXNzJzonaXRlbVRpdGxlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdmb3InOidpdGVtVGl0bGUnLCAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnbmFtZSc6J2l0ZW1UaXRsZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdpZCc6YGl0ZW1UaXRsZSR7cHJvamVjdC5kYXRhc2V0LmlkfSR7Zm9ybVJlZmVyZW5jZS5sZW5ndGh9YCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxgJHtwcm92VGl0bGUudmFsdWV9YCwpXG4gICAgICAgIGNvbnN0IG1vZGlmeSA9IERPTS5lbGVtZW50SW5pdCgnYnV0dG9uJywgeydjbGFzcyc6J2VkaXQnfSwnRWRpdCcpO1xuXG4gICAgICAgIFxuICAgICAgICBmb3JtLmFwcGVuZENoaWxkKHN1Ym1pdCk7XG4gICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQoY2FuY2VsKTtcbiAgICAgICAgZm9ybS5hcHBlbmRDaGlsZChyZW1vdmUpO1xuICAgICAgICBmb3JtLmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgICAgICAgdGl0bGUuYXBwZW5kQ2hpbGQobW9kaWZ5KVxuICAgICAgICBtb2RpZnkuZGlzYWJsZWQgPSB0cnVlO1xuICAgICAgICBwcm92VGl0bGUucmVtb3ZlKCk7ICBcbiAgICAgICAgXG5cbiAgICAgICAgZm9ybS5vbnN1Ym1pdCA9IGRlbGVnYXRvcjsgICBcbiAgICAgICAgIFxuICAgICAgICBjb250YWluZXIuY2xhc3NMaXN0LnRvZ2dsZSgnbm9uZScsIGZhbHNlKTtcbiAgICAgICAgXG4gICAgICAgIFxuICAgICAgICAgXG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChmb3JtKTtcblxuICAgICAgICBjb25zdCBfZ2VuZXJhdGVDaGVja2xpc3QgPSBmdW5jdGlvbigpeyBcbiAgICAgICAgICAgY29uc3QgYWRkID0gRE9NLmVsZW1lbnRJbml0KCdidXR0b24nLCB7J2NsYXNzJzonYWRkQ2hlY2snLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnaWQnOmBhZGRDaGVjayR7cHJvamVjdC5kYXRhc2V0LmlkfSR7Zm9ybVJlZmVyZW5jZS5sZW5ndGh9YCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2RhdGEtY2xhc3MnOmBjaGlsZCR7Zm9ybVJlZmVyZW5jZS5sZW5ndGh9YFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCAnQWRkIEl0ZW0nKTsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgZm9ybS5hcHBlbmRDaGlsZChhZGQpO1xuXG4gICAgICAgICAgICBmb3JtLmNsYXNzTGlzdC5hZGQoJ2NoZWNrYm94JylcbiAgICAgICB9XG5cbiAgICAgICBjb25zdCBfZ2VuZXJhdGVGcmVlRm9ybSA9IGZ1bmN0aW9uKCl7XG5cbiAgICAgICAgaW5wdXQudmFsdWUgPSAnJztcbiAgICAgICAgaW5wdXQuY2xhc3NMaXN0LnRvZ2dsZSgnbm9uZScsZmFsc2UpO1xuICAgICAgICBmb3JtLmNsYXNzTGlzdC5hZGQoJ2ZyZWVGb3JtJyk7XG5cbiAgICAgICAgc3VibWl0LmNsYXNzTGlzdC50b2dnbGUoJ25vbmUnLGZhbHNlKTtcbiAgICAgICAgY2FuY2VsLmNsYXNzTGlzdC50b2dnbGUoJ25vbmUnLGZhbHNlKTtcbiAgICAgICAgaW5wdXQuZm9jdXMoKTtcbiAgICAgICAgXG4gICAgICAgfVxuXG4gICAgICAgY2hvc2VuVHlwZSA9PT0gJ0NoZWNrbGlzdCcgPyBfZ2VuZXJhdGVDaGVja2xpc3QoKSA6IF9nZW5lcmF0ZUZyZWVGb3JtKCk7ICBcblxuICAgICAgIHJldHVybiBcblxuICAgICB9XG5cblxuICAgICBjb25zdCBkaXNhYmxlQnRucyA9IGZ1bmN0aW9uKHRyZ3Q9J24vYScpe1xuICAgICAgICBjb25zdCBhbGxCdG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnYnV0dG9uJyk7XG4gICAgICAgIGFsbEJ0bnMuZm9yRWFjaChidG4gPT4gIGJ0biA9PT0gdHJndCB8fCBidG4uY2xhc3NMaXN0LmNvbnRhaW5zKCdub25lJykgPyBidG4uZGlzYWJsZWQgPSBmYWxzZSA6IGJ0bi5kaXNhYmxlZCA9IHRydWUpO1xuXG4gICAgICAgIGNvbnN0IGFsbEVkaXRhYmxlcyA9IERPTS5zZWxlY3RFbGVtKCcuZWRpdCcpO1xuICAgICAgICBhbGxFZGl0YWJsZXMuZm9yRWFjaChpdG0gPT4gIGl0bSA9PT0gdHJndCB8fCBpdG0uY2xhc3NMaXN0LmNvbnRhaW5zKCdub25lJykgPyBmYWxzZSA6IGl0bS5jbGFzc0xpc3QudG9nZ2xlKCdkaXNhYmxlZEVkaXQnLCB0cnVlKSk7XG4gICAgICAgIGNvbnN0IGFsbERpc2FibGVkID0gRE9NLnNlbGVjdEVsZW0oJy5kaXNhYmxlZEVkaXQnKTtcbiAgICAgICAgYWxsRGlzYWJsZWQuZm9yRWFjaChpdG0gPT4gaXRtLmNsYXNzTGlzdC50b2dnbGUoJ2VkaXQnLGZhbHNlKSk7XG4gICAgfVxuICAgIFxuICAgIFxuICAgIGNvbnN0IGVuYWJsZUJ0bnMgPSBmdW5jdGlvbigpe1xuICAgICAgICBjb25zdCBhbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdidXR0b24nKTtcbiAgICAgICAgYWxsLmZvckVhY2goYnRuID0+IGJ0bi5kaXNhYmxlZCA9IGZhbHNlKTtcblxuICAgICAgICBjb25zdCBlZGl0cyA9IERPTS5zZWxlY3RFbGVtKCcuZGlzYWJsZWRFZGl0Jyk7XG4gICAgICAgIGVkaXRzLmZvckVhY2goaXRtID0+IGl0bS5jbGFzc0xpc3QudG9nZ2xlKCdlZGl0Jyx0cnVlKSk7XG4gICAgICAgIGVkaXRzLmZvckVhY2goaXRtID0+IGl0bS5jbGFzc0xpc3QudG9nZ2xlKCdkaXNhYmxlZEVkaXQnLGZhbHNlKSk7XG4gICAgICAgIGNvbnN0IGRlbGV0ZUJ0bnMgPSBET00uc2VsZWN0RWxlbSgnLmRlbGV0ZUNoZWNrJyk7XG4gICAgICAgIGRlbGV0ZUJ0bnMuZm9yRWFjaChidG4gPT4gYnRuLmNsYXNzTGlzdC50b2dnbGUoJ25vbmUnLGZhbHNlKSk7ICAgICAgICBcbiAgICB9XG5cbiAgICAgY29uc3QgbW9kaWZ5RWxlbWVudCA9IGZ1bmN0aW9uKGV2ZW50KXtcblxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIFxuICAgICAgICAgY29uc3QgZm9ybSA9IGV2ZW50LnRhcmdldC5wYXJlbnRFbGVtZW50O1xuICAgICAgICAgY29uc3QgbW9kSW5wdXQgPSAoZnVuY3Rpb24oKXtcbiAgICAgICAgIGlmIChmb3JtLmNsYXNzTGlzdC5jb250YWlucygnZnJlZUZvcm0nKSl7ICAgIFxuICAgICAgICAgICAgbGV0IG1vZFRleHRBcmVhID0gRE9NLmVsZW1lbnRJbml0KCd0ZXh0YXJlYScseydsYWJlbCc6J2ZyZWVGb3JtJyxcbiAgICAgICAgICAgICduYW1lJzonZnJlZUZvcm0nLFxuICAgICAgICAgICAgJ2F1dG9jb21wbGV0ZSc6J29mZicsXG4gICAgICAgICAgICAncmVxdWlyZWQnOidyZXF1aXJlZCcsXG4gICAgICAgICAgICAnaWQnOidtb2RJbnB1dCcsXG4gICAgICAgICAgICdjbGFzcyc6ICdtb2RJbnB1dCcsXG4gICAgICAgICAgICdyb3dzJyA6ICczJyxcbiAgICAgICAgICAgJ2NvbHMnIDogJzMwJ30pO1xuXG4gICAgICAgICAgIHJldHVybiBtb2RUZXh0QXJlYTsgIFxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGxldCBtb2RDaGVja0lucHV0ID0gRE9NLmVsZW1lbnRJbml0KCdpbnB1dCcseyd0eXBlJzondGV4dCcsXG4gICAgICAgICAgICAnYXV0b2NvbXBsZXRlJzonb2ZmJyxcbiAgICAgICAgICAgICdyZXF1aXJlZCc6J3JlcXVpcmVkJyxcbiAgICAgICAgICAgICdjbGFzcyc6ICdtb2RJbnB1dCcsXG4gICAgICAgICAgICAgJ2lkJzonbW9kSW5wdXQnLH0pO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAgcmV0dXJuIG1vZENoZWNrSW5wdXQgICBcbiAgICAgICAgfSBcbiAgICB9KSgpXG5cbiAgICAgICAgIGNvbnN0IHN1Ym1pdCA9IERPTS5lbGVtZW50SW5pdCgnYnV0dG9uJyx7J3R5cGUnOidzdWJtaXQnLFxuICAgICAgICAnY2xhc3MnOidzdWJtaXRNb2QnLFxuICAgICAgICAgJ2lkJzogJ3N1Ym1pdE1vZCdcbiAgICAgICAgIH0sJ1N1Ym1pdCBOb3RlJylcbiAgICAgICAgIGNvbnN0IHJldmVydCA9IERPTS5lbGVtZW50SW5pdCgnYnV0dG9uJyx7XG4gICAgICAgICAnY2xhc3MnOidyZXZlcnRNb2QnLFxuICAgICAgICAgJ2RhdGEtdHJhbnNmZXInOmAke2V2ZW50LnRhcmdldC5maXJzdENoaWxkLm5vZGVWYWx1ZX1gIC8vdGVtcG9yYXJ5LCB1cGRhdGUgdG8gdXNlIGxvY2FsIHN0b3JhZ2UgJiBiYWNrZW5kXG4gICAgICAgICAgfSwnUmV2ZXJ0IEJhY2snKSBcbiAgICAgICAgICAgICAgICAgXG4gICAgICAgICBpZiAoZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdpdGVtVGl0bGUnKSB8fCBldmVudC50YXJnZXQucGFyZW50RWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoJ3Byb2plY3QnKSl7XG4gICAgICAgICAgICAgcmV2ZXJ0LmRhdGFzZXQudHJhbnNmZXIgPSBldmVudC50YXJnZXQucGFyZW50RWxlbWVudC5maXJzdENoaWxkLm5vZGVWYWx1ZVxuICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIFxuXG4gICAgICAgIGRpc2FibGVCdG5zKCk7XG5cbiAgICAgICAgIGNvbnN0IF9yZXBsYWNlV2l0aElucHV0ID0gKGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICBpZihldmVudC50YXJnZXQucGFyZW50RWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoJ2l0ZW1UaXRsZScpIHx8IGV2ZW50LnRhcmdldC5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygncHJvamVjdCcpKXtcbiAgICAgICAgICAgICAgICBtb2RJbnB1dC52YWx1ZSA9IGV2ZW50LnRhcmdldC5wYXJlbnRFbGVtZW50LmZpcnN0Q2hpbGQubm9kZVZhbHVlO1xuICAgICAgICAgICAgICAgIGV2ZW50LnRhcmdldC5wYXJlbnRFbGVtZW50LmZpcnN0Q2hpbGQubm9kZVZhbHVlID0gJyc7XG4gICAgICAgICAgICAgICAgZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQuYXBwZW5kQ2hpbGQobW9kSW5wdXQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZXtcbiAgICAgICAgICAgICAgICBtb2RJbnB1dC52YWx1ZSA9IGV2ZW50LnRhcmdldC5maXJzdENoaWxkLm5vZGVWYWx1ZVxuICAgICAgICAgICAgICAgIGV2ZW50LnRhcmdldC5yZXBsYWNlV2l0aChtb2RJbnB1dCk7IFxuXG4gICAgICAgICAgICB9IFxuICAgICAgICAgICAgbW9kSW5wdXQuaW5zZXJ0QWRqYWNlbnRFbGVtZW50KCdhZnRlcmVuZCcsc3VibWl0KTtcbiAgICAgICAgICAgIHN1Ym1pdC5pbnNlcnRBZGphY2VudEVsZW1lbnQoJ2FmdGVyZW5kJyxyZXZlcnQpO1xuICAgICAgIH0pKClcbiAgICAgICAgXG4gICAgIH1cblxuICAgICBjb25zdCBzdWJtaXRNb2RpZmllZEVsZW1lbnQgPSBmdW5jdGlvbihldmVudCl7XG4gICAgICAgIFxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBjb25zdCBmb3JtID0gZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQ7XG4gICAgICAgIGNvbnN0IGlucHV0ID0gZXZlbnQudGFyZ2V0LnByZXZpb3VzRWxlbWVudFNpYmxpbmc7XG4gICAgICAgIGNvbnN0IHJldmVydCA9IGV2ZW50LnRhcmdldC5uZXh0RWxlbWVudFNpYmxpbmc7XG4gICAgICAgIGNvbnN0IGxhYmVsID0gRE9NLmVsZW1lbnRJbml0KCdsYWJlbCcsIHsnZm9yJzogYCR7aW5wdXQudmFsdWV9YCwgJ2NsYXNzJzonZWRpdCd9LGAke2lucHV0LnZhbHVlfWApO1xuICAgICAgICBjb25zdCB0ZXh0ID0gRE9NLmVsZW1lbnRJbml0KCdwJywgeydjbGFzcyc6J3RleHQgZWRpdCd9LCBgJHtpbnB1dC52YWx1ZX1gKTtcbiAgICAgICAgY29uc3QgZGVsID0gRE9NLmVsZW1lbnRJbml0KCdidXR0b24nLCB7J2NsYXNzJzogJ2RlbGV0ZUNoZWNrIG5vbmUnfSwnZGVsZXRlJyApIFxuXG4gICAgICAgIFxuICAgICAgICBpZihpbnB1dC52YWx1ZSA9PT0gJycpe3JldHVybn07XG5cbiAgICAgICAgaWYoZm9ybS5jbGFzc0xpc3QuY29udGFpbnMoJ2NoZWNrYm94Jykpe1xuICAgICAgICAgICAgaW5wdXQucmVwbGFjZVdpdGgobGFiZWwpO1xuICAgICAgICAgICAgbGFiZWwuYXBwZW5kQ2hpbGQoZGVsKTtcblxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGZvcm0uY2xhc3NMaXN0LmNvbnRhaW5zKCdmcmVlRm9ybScpKXtcbiAgICAgICAgICAgIGlucHV0LnJlcGxhY2VXaXRoKHRleHQpOyBcbiAgICAgICAgfVxuXG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgdmFsdWUgPSBpbnB1dC52YWx1ZVxuICAgICAgICAgICAgZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQuZmlyc3RDaGlsZC5ub2RlVmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgICAgIGlucHV0LnJlbW92ZSgpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBlbmFibGVCdG5zKCk7XG4gICAgXG4gICAgICAgIHJldmVydC5yZW1vdmUoKTtcbiAgICAgICAgZXZlbnQudGFyZ2V0LnJlbW92ZSgpO1xuXG5cbiAgICAgICAgcmV0dXJuICAgICAgICAgXG4gICAgIH1cblxuICAgICBjb25zdCByZXZlcnRNb2RpZmllZEVsZW1lbnQgPSBmdW5jdGlvbihldmVudCl7XG4gICAgICAgIFxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBjb25zdCBmb3JtID0gZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQ7XG4gICAgICAgIGNvbnN0IHN1Ym1pdCA9IGV2ZW50LnRhcmdldC5wcmV2aW91c0VsZW1lbnRTaWJsaW5nO1xuICAgICAgICBjb25zdCBpbnB1dCA9IHN1Ym1pdC5wcmV2aW91c0VsZW1lbnRTaWJsaW5nO1xuICAgICAgICBjb25zdCBsYWJlbCA9IERPTS5lbGVtZW50SW5pdCgnbGFiZWwnLCB7J2Zvcic6IGAke2V2ZW50LnRhcmdldC5kYXRhc2V0LnRyYW5zZmVyfWAsICdjbGFzcyc6J2VkaXQnfSxgJHtldmVudC50YXJnZXQuZGF0YXNldC50cmFuc2Zlcn1gKTsgLy90ZW1wb3JhcnksIHVwZGF0ZSB0byB1c2UgbG9jYWwgc3RvcmFnZSAmIGJhY2tlbmRcbiAgICAgICAgY29uc3QgdGV4dCA9IERPTS5lbGVtZW50SW5pdCgncCcsIHsnY2xhc3MnOid0ZXh0IGVkaXQnfSwgYCR7ZXZlbnQudGFyZ2V0LmRhdGFzZXQudHJhbnNmZXJ9YCk7IC8vdGVtcG9yYXJ5LCB1cGRhdGUgdG8gdXNlIGxvY2FsIHN0b3JhZ2UgJiBiYWNrZW5kXG4gICAgICAgIGNvbnN0IGRlbCA9IERPTS5lbGVtZW50SW5pdCgnYnV0dG9uJywgeydjbGFzcyc6ICdkZWxldGVDaGVjayBub25lJ30sJ2RlbGV0ZScgKSBcblxuXG4gICAgICAgIGlmKGZvcm0uY2xhc3NMaXN0LmNvbnRhaW5zKCdjaGVja2JveCcpKXtcbiAgICAgICAgICAgIGlucHV0LnJlcGxhY2VXaXRoKGxhYmVsKTtcbiAgICAgICAgICAgIGxhYmVsLmFwcGVuZENoaWxkKGRlbCk7XG5cbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChmb3JtLmNsYXNzTGlzdC5jb250YWlucygnZnJlZUZvcm0nKSl7XG4gICAgICAgICAgICBpbnB1dC5yZXBsYWNlV2l0aCh0ZXh0KTsgXG4gICAgICAgIH1cblxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gZXZlbnQudGFyZ2V0LmRhdGFzZXQudHJhbnNmZXI7IC8vdGVtcG9yYXJ5LCB1cGRhdGUgdG8gdXNlIGxvY2FsIHN0b3JhZ2UgJiBiYWNrZW5kXG4gICAgICAgICAgICBldmVudC50YXJnZXQucGFyZW50RWxlbWVudC5maXJzdENoaWxkLm5vZGVWYWx1ZSA9IHZhbHVlO1xuICAgICAgICAgICAgaW5wdXQucmVtb3ZlKCk7XG4gICAgICAgIH1cbiAgICAgICAgIFxuICAgICAgICBlbmFibGVCdG5zKCk7XG4gICAgXG4gICAgICAgIHN1Ym1pdC5yZW1vdmUoKTtcbiAgICAgICAgZXZlbnQudGFyZ2V0LnJlbW92ZSgpO1xuICAgICAgICByZXR1cm4gICAgICAgICBcbiAgICAgfVxuICAgICBcbiAgICAgXG4gICAgY29uc3QgY2hvb3NlVG9Eb1RpdGxlRm9ybSA9IGZ1bmN0aW9uKGV2ZW50KXtcbiAgICAgICAgY29uc3QgZG9tUHJvamVjdCA9IGV2ZW50LnRhcmdldC5wYXJlbnRFbGVtZW50O1xuXG4gICAgICAgIGNvbnN0IF9nZW5lcmF0ZVRpdGxlRm9ybSA9IChmdW5jdGlvbigpe1xuICAgICAgICAgICAgIGNvbnN0IGZvcm0gPSAgRE9NLmVsZW1lbnRJbml0KCdmb3JtJywgeydjbGFzcyc6ICdjaG9vc2VUaXRsZUZvcm0nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnaWQnOiAnY2hvb3NlVGl0bGVGb3JtJ30pXG4gICAgICAgICAgICAgY29uc3QgbGFiZWwgPSBET00uZWxlbWVudEluaXQoJ2xhYmVsJyx7J2Zvcic6J2Nob29zZVlvdXJUaXRsZSd9LCdDaG9vc2UgWW91ciBOb3RlXFwncyBUaXRsZScpO1xuICBcbiAgICAgICAgICAgICBjb25zdCB0aXRsZUlucHV0ID0gRE9NLmVsZW1lbnRJbml0KCdpbnB1dCcseyd0eXBlJzondGV4dCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnYXV0b2NvbXBsZXRlJzonb2ZmJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAncmVxdWlyZWQnOidyZXF1aXJlZCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2lkJzoncHJvdlRpdGxlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnY2xhc3MnOiAncHJvdlRpdGxlJ30sKTtcbiAgICAgICAgICAgIGNvbnN0IHN1Ym1pdFRpdGxlID0gRE9NLmVsZW1lbnRJbml0KCdidXR0b24nLCB7J3R5cGUnOidzdWJtaXQnfSwgJ1N1Ym1pdCcpO1xuICAgICAgICAgICAgY29uc3QgY2FuY2VsVGl0bGUgPSBET00uZWxlbWVudEluaXQoJ2J1dHRvbicsIHsnY2xhc3MnOidjYW5jZWxUaXRsZSd9LCAnQ2FuY2VsJyk7XG4gICAgICAgICAgICBmb3JtLmFwcGVuZENoaWxkKGxhYmVsKTtcbiAgICAgICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQodGl0bGVJbnB1dCk7XG4gICAgICAgICAgICBmb3JtLmFwcGVuZENoaWxkKHN1Ym1pdFRpdGxlKTtcbiAgICAgICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQoY2FuY2VsVGl0bGUpO1xuICAgICAgICAgICAgZm9ybS5vbnN1Ym1pdCA9IGRlbGVnYXRvcjtcbiAgICAgICAgICAgIHJldHVybiBmb3JtXG4gICAgICAgIH0pKCkgXG4gICAgICAgIFxuICAgICAgICBkb21Qcm9qZWN0LmFwcGVuZENoaWxkKF9nZW5lcmF0ZVRpdGxlRm9ybSlcbiAgICAgICAgcmV0dXJuXG5cbiAgICB9XG4gICAgY29uc3Qgc3VibWl0VG9Eb1RpdGxlID0gZnVuY3Rpb24oZXZlbnQpe1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpOyBcbiAgICAgICAgY29uc3QgcHJvdlRpdGxlID0gRE9NLnNlbGVjdEVsZW0oJyNwcm92VGl0bGUnKTtcbiAgICAgICAgY29uc3QgZG9tUHJvamVjdCA9IGV2ZW50LnRhcmdldC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQ7XG4gICAgICAgIGRvbVByb2plY3QuYXBwZW5kQ2hpbGQocHJvdlRpdGxlKTtcbiAgICAgICAgcHJvdlRpdGxlLmNsYXNzTGlzdC50b2dnbGUoJ25vbmUnLHRydWUpO1xuICAgICAgICBcbiAgICAgICAgZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC50b2dnbGUoJ25vbmUnLHRydWUpO1xuICAgICAgICByZXR1cm5cbiAgICAgICAgXG4gICAgfVxuICAgICBcbiAgICAgY29uc3QgY2hvb3NlTm90ZVR5cGUgPSBmdW5jdGlvbihldmVudCl7XG4gICAgICAgIGNvbnN0IGRvbVByb2plY3QgPSBldmVudC50YXJnZXQucGFyZW50RWxlbWVudDtcblxuICAgICAgICAgY29uc3QgZm9ybSA9ICBET00uZWxlbWVudEluaXQoJ2Zvcm0nLCB7J2NsYXNzJzogJ2Nob29zZU5vdGVUeXBlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnaWQnOiAnbm90ZVR5cGVGb3JtJyAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgY29uc3QgbGFiZWwgPSBET00uZWxlbWVudEluaXQoJ2xhYmVsJyx7J2Zvcic6J2Nob29zZU5vdGVUeXBlJ30sJ0Nob29zZSBZb3VyIE5vdGUgVHlwZScpO1xuICAgICAgICAgY29uc3Qgc2VsZWN0ID0gRE9NLmVsZW1lbnRJbml0KCdzZWxlY3QnLHsnY2xhc3MnOidzZWxlY3QnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdpZCc6ICdzZWxlY3QnIH0pO1xuICAgICAgICAgY29uc3Qgb3B0R3JvdXAgPSBET00uZWxlbWVudEluaXQoJ29wdGdyb3VwJyx7J2xhYmVsJzogJ05vdGUgT3B0aW9ucyd9LCAnQ2hvb3NlIHlvdXIgbm90ZSB0eXBlJyk7XG4gICAgICAgICBjb25zdCBjaGVja2xpc3RPcHQgPSBET00uZWxlbWVudEluaXQoJ29wdGlvbicseyduYW1lJzogJ2NoZWNrbGlzdCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnY2xhc3MnOiAnY2hlY2tsaXN0J30sJ0NoZWNrbGlzdCcpO1xuICAgICAgICAgY29uc3QgaW5wdXRPcHQgPSBET00uZWxlbWVudEluaXQoJ29wdGlvbicseyduYW1lJzogJ2lucHV0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2NsYXNzJzogJ2lucHV0J30sJ0ZyZWVmb3JtJyk7XG4gICAgICAgICBjb25zdCBjaG9pY2UgPSBET00uZWxlbWVudEluaXQoJ2J1dHRvbicsIHsndHlwZSc6J3N1Ym1pdCd9LCAnU3VibWl0Jyk7XG4gICAgICAgICBjb25zdCBjYW5jZWwgPSBET00uZWxlbWVudEluaXQoJ2J1dHRvbicsIHsnY2xhc3MnOidjYW5jZWxDaG9pY2UnfSwgJ0NhbmNlbCcpO1xuICAgICAgICAgXG4gICAgICAgICBzZWxlY3QuYXBwZW5kQ2hpbGQob3B0R3JvdXApO1xuICAgICAgICAgb3B0R3JvdXAuYXBwZW5kQ2hpbGQoY2hlY2tsaXN0T3B0KTtcbiAgICAgICAgIG9wdEdyb3VwLmFwcGVuZENoaWxkKGlucHV0T3B0KTtcbiAgICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQobGFiZWwpO1xuICAgICAgICAgZm9ybS5hcHBlbmRDaGlsZChzZWxlY3QpO1xuICAgICAgICAgZm9ybS5hcHBlbmRDaGlsZChET00uZWxlbWVudEluaXQoJ2JyJykpO1xuICAgICAgICAgZm9ybS5hcHBlbmRDaGlsZChjaG9pY2UpO1xuICAgICAgICAgZm9ybS5hcHBlbmRDaGlsZChjYW5jZWwpXG5cbiAgICAgICAgIGRpc2FibGVCdG5zKCk7XG4gICAgICAgICBmb3JtLm9uc3VibWl0ID0gZGVsZWdhdG9yO1xuICAgICAgICAgZG9tUHJvamVjdC5hcHBlbmRDaGlsZChmb3JtKTtcblxuICAgICAgICAgcmV0dXJuIGZvcm1cbiAgICB9XG4gICAgIFxuICAgICBjb25zdCByZXZlYWxDcmVhdGVGb3JtID0gZnVuY3Rpb24oKXtcbiAgICAgICAgbGV0IGhpZGRlbiA9IERPTS5zZWxlY3RFbGVtKCcjY3JlYXRlRm9ybScpO1xuICAgICAgICBoaWRkZW4uY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZGVuJywgZmFsc2UpO1xuICAgICAgICBcbiAgICAgfVxuXG4gICAgIGNvbnN0IHRvZ2dsZVNpemUgPSBmdW5jdGlvbihldmVudCl7XG4gICAgICAgIGlmIChldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdwcm9qZWN0Jykpe1xuXG4gICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IERPTS5zZWxlY3RFbGVtKGAjY29udGFpbmVyJHtldmVudC50YXJnZXQuZGF0YXNldC5pZH1gICkgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICBjb250YWluZXIuY2xhc3NMaXN0LnRvZ2dsZSgnbm9uZScpO1xuXG4gICAgICAgIH1cblxuICAgICAgICBlbHNlIHtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IGZvcm0gPSBldmVudC50YXJnZXQucGFyZW50RWxlbWVudDsgICAgXG4gICAgICAgIGNvbnN0IGZvcm1DaGlsZHJlbiA9IEFycmF5LmZyb20oZm9ybS5jaGlsZHJlbik7XG4gICAgICAgIGZvcm1DaGlsZHJlbi5mb3JFYWNoKGl0bSA9PiBpdG0uZGF0YXNldC5jbGFzcyA9PT0gYGNoaWxkJHtmb3JtLmRhdGFzZXQuaWR9YCA/IGl0bS5jbGFzc0xpc3QudG9nZ2xlKCdub25lJykgOiBmYWxzZSkgICAgICAgXG4gICAgICAgICAgICBcbiAgICAgICAgfVxuICAgICB9XG5cbiAgICAgY29uc3Qgbm90ZVR5cGVHZW5lcmF0b3IgPSBmdW5jdGlvbihldmVudCl7IFxuXG4gICAgICAgIGNvbnN0IGdldFNlbGVjdGVkID0gKGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAgY29uc3Qgc2VsZWN0ID0gIERPTS5zZWxlY3RFbGVtKCcjc2VsZWN0Jyk7XG4gICAgICAgICAgICAgcmV0dXJuIHNlbGVjdC5vcHRpb25zW3NlbGVjdC5zZWxlY3RlZEluZGV4XS52YWx1ZTtcbiAgICAgICAgfSkoKVxuICAgICAgICBcbiAgICAgICAgY29uc3QgX2dlbmVyYXRlVGVtcG9yYXJ5SW5wdXQgPSAoZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIGNvbnN0IHByb2plY3QgPSBET00uc2VsZWN0RWxlbSgnI25vdGVUeXBlRm9ybScpLnBhcmVudEVsZW1lbnQ7XG4gICAgICAgICAgIFxuICAgICAgICBpZiAoZ2V0U2VsZWN0ZWQgPT09ICdDaGVja2xpc3QnKXsgICAgXG4gICAgICAgICAgICBsZXQgdGVtcG9yYXJ5SW5wdXQgPSBET00uZWxlbWVudEluaXQoJ2lucHV0Jyx7J3R5cGUnOid0ZXh0JyxcbiAgICAgICAgICAgICdhdXRvY29tcGxldGUnOidvZmYnLFxuICAgICAgICAgICAgJ3JlcXVpcmVkJzoncmVxdWlyZWQnLFxuICAgICAgICAgICAgJ2lkJzondGVtcG9yYXJ5SW5wdXQnLFxuICAgICAgICAgICAnY2xhc3MnOiAndGVtcG9yYXJ5SW5wdXQgbm9uZSd9KTsgIFxuICAgICAgICAgICAgcHJvamVjdC5hcHBlbmRDaGlsZCh0ZW1wb3JhcnlJbnB1dCk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgbGV0IHRleHRBcmVhID0gRE9NLmVsZW1lbnRJbml0KCd0ZXh0YXJlYScsIHsnaWQnOid0ZW1wb3JhcnlJbnB1dCcsXG4gICAgICAgICAgICAgICAgJ25hbWUnOidmcmVlRm9ybScsXG4gICAgICAgICAgICAgICAgJ2xhYmVsJzonZnJlZUZvcm0nLFxuICAgICAgICAgICAgICAgICdjbGFzcyc6J3RlbXBvcmFyeUlucHV0IG5vbmUnLFxuICAgICAgICAgICAgICAgICdhdXRvY29tcGxldGUnOidvZmYnLFxuICAgICAgICAgICAgICAgICdyZXF1aXJlZCc6J3JlcXVpcmVkJyxcbiAgICAgICAgICAgICAgICAncm93cycgOiAnNCcsXG4gICAgICAgICAgICAgICAgJ2NvbHMnIDogJzUwJyB9KTtcbiAgICAgICAgICAgIHByb2plY3QuYXBwZW5kQ2hpbGQodGV4dEFyZWEpOyAgIFxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICB9KSgpXG4gICAgICAgIFxuICAgICAgICBwcm9qZWN0RXZlbnRzLnB1Ymxpc2goJ2RlbGV0ZU5vdGVUeXBlRm9ybScsIGV2ZW50KTtcbiAgICAgICAgcHJvamVjdEV2ZW50cy5wdWJsaXNoKCdjcmVhdGVOb3RlJywgZ2V0U2VsZWN0ZWQpO1xuICAgICAgICBcbiAgICAgICAgcmV0dXJuIGdldFNlbGVjdGVkXG4gICAgIH1cblxuXG5cbiAgICBjb25zdCBkZWxldGVGb3JtcyA9IGZ1bmN0aW9uKGV2ZW50KXtcblxuICAgICAgICAgXG4gICAgICAgIGNvbnN0IF9jYW5jZWxOb3RlVHlwZUZvcm0gPSBmdW5jdGlvbigpe1xuXG4gICAgICAgICAgICBjb25zdCBfZGVsZXRlUHJvdlRpdGxlID0gZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICAgICAgY29uc3QgcHJvdlRpdGxlID0gIERPTS5zZWxlY3RFbGVtKCcjcHJvdlRpdGxlJylcbiAgICAgICAgICAgICAgICAgcHJvdlRpdGxlID8gcHJvdlRpdGxlLnJlbW92ZSgpIDogZmFsc2VcbiAgICAgICAgICAgICAgICAgcmV0dXJuICAgXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBjb25zdCBfZGVsZXRlQWRkTm90ZUZvcm0gPSAoZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICAgICAgY29uc3Qgbm90ZVR5cGVGb3JtID0gRE9NLnNlbGVjdEVsZW0oJyNub3RlVHlwZUZvcm0nKTtcbiAgICAgICAgICAgICAgICAgbm90ZVR5cGVGb3JtID8gbm90ZVR5cGVGb3JtLnJlbW92ZSgpIDogZmFsc2U7XG4gICAgICAgICAgICAgICAgIHJldHVyblxuXG4gICAgICAgICAgICAgfSkoKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgZXZlbnQudGFyZ2V0LmNsYXNzTmFtZSA9PT0gJ2NhbmNlbENob2ljZScgPyBfZGVsZXRlUHJvdlRpdGxlKCkgOiBmYWxzZTsgXG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuXG5cbiAgICAgICAgIGxldCBkZWxldGVkID0gRE9NLnNlbGVjdEVsZW0oJyNjaG9vc2VUaXRsZUZvcm0nKTtcbiAgICAgICAgIGRlbGV0ZWQgPyBkZWxldGVkLnJlbW92ZSgpIDogX2NhbmNlbE5vdGVUeXBlRm9ybSgpXG4gICAgICAgICBcbiAgICAgICAgIHJldHVyblxuXG5cbiAgICB9XG5cbiAgICBjb25zdCBjbGVhblRvRG9Gb3JtID0gZnVuY3Rpb24oKXtcbiAgICAgIFxuICAgICAgY29uc3QgZm9ybSA9IERPTS5zZWxlY3RFbGVtKCcjc3VibWl0Tm90ZScpLnBhcmVudEVsZW1lbnQ7XG4gICAgICBjb25zdCBwcm9qZWN0ID0gRE9NLnNlbGVjdEVsZW0oJyN0ZW1wb3JhcnlJbnB1dCcpLnBhcmVudEVsZW1lbnQ7ICBcblxuICAgICAgY29uc3QgX2RlbGV0ZVRyYW5zaXRvcnlTdHVmZiA9IChmdW5jdGlvbigpeyAgXG4gICAgICAgIGxldCBkZWxldGVkID0gRE9NLnNlbGVjdEVsZW0oJyN0ZW1wb3JhcnlJbnB1dCcpO1xuICAgICAgICBkZWxldGVkLnJlbW92ZSgpO1xuXG4gICAgICAgIGRlbGV0ZWQgPSBET00uc2VsZWN0RWxlbSgnI3N1Ym1pdE5vdGUnKTtcbiAgICAgICAgZGVsZXRlZC5yZW1vdmUoKTtcblxuICAgICAgICBkZWxldGVkID0gRE9NLnNlbGVjdEVsZW0oJyNjYW5jZWxOb3RlJyk7XG4gICAgICAgIGRlbGV0ZWQucmVtb3ZlKCk7IFxuICAgIH0pKClcbiAgICAgIFxuICAgICAgY29uc3QgX2NvbnZlcnRBZGRDaGVjayA9IChmdW5jdGlvbigpeyBcblxuICAgICAgICBsZXQgY29udmVydCA9IERPTS5zZWxlY3RFbGVtKGAjYWRkQ2hlY2ske3Byb2plY3QuZGF0YXNldC5pZH0ke2Zvcm0uZGF0YXNldC5pZH1gKTtcblxuICAgICAgICBpZiAoY29udmVydCl7XG4gICAgICAgICAgICBjb252ZXJ0LnJlbW92ZUF0dHJpYnV0ZSgnY2xhc3MnKTtcbiAgICAgICAgICAgIGNvbnZlcnQuY2xhc3NOYW1lID0gJ2FkZENoZWNrTW9kJztcbiAgICAgIFxuICAgICAgICB9XG4gICAgfSkoKVxuXG4gICAgICBjb25zdCBfcmVtb3ZlV2hlcmVFbXB0eSA9IChmdW5jdGlvbigpe1xuICAgICAgICBcbiAgICAgICAgY29uc3QgZm9ybUNoaWxkcmVuID0gQXJyYXkuZnJvbShmb3JtLmNoaWxkcmVuKTtcbiAgICAgICAgY29uc3QgY2hpbGQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1jbGFzcz1jaGlsZCR7Zm9ybS5kYXRhc2V0LmlkfV1gKVxuICAgICAgICAhKGZvcm1DaGlsZHJlbi5pbmNsdWRlcyhjaGlsZCkpID8gZm9ybS5yZW1vdmUoKSA6IGZhbHNlO1xuXG4gICAgfSkoKVxuXG4gICAgICAgIHJldHVyblxuICAgIH1cbiAgICAgICAgXG5cbiAgICBjb25zdCBjYW5jZWxOb3RlID0gZnVuY3Rpb24oZXZlbnQpe1xuICAgICAgICBcbiAgICAgICAgY29uc3QgY2FuY2VsID0gZXZlbnQudGFyZ2V0O1xuICAgICAgICBjb25zdCBpbnB1dCA9IERPTS5zZWxlY3RFbGVtKCcjdGVtcG9yYXJ5SW5wdXQnKTtcblxuICAgICAgICBjYW5jZWwuY2xhc3NMaXN0LnRvZ2dsZSgnbm9uZScsdHJ1ZSk7XG4gICAgICAgIGlucHV0LnZhbHVlID0gJyc7XG4gICAgICAgIGlucHV0LmNsYXNzTGlzdC50b2dnbGUoJ25vbmUnLHRydWUpO1xuXG4gICAgICAgIHJldHVybiAgICAgICAgXG4gICAgfVxuXG4gICAgXG4gICAgY29uc3QgZ2VuZXJhdGVOZXdBZGRDaGVjayA9IGZ1bmN0aW9uKGV2ZW50KXtcbiAgICAgICAgXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGNvbnN0IGZvcm0gPSBldmVudC50YXJnZXQucGFyZW50RWxlbWVudDtcbiAgICAgICAgY29uc3QgcHJvamVjdCA9IGZvcm0ucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50O1xuXG4gICAgICAgIGlmKERPTS5zZWxlY3RFbGVtKCcjdGVtcG9yYXJ5SW5wdXQnKSAmJiBET00uc2VsZWN0RWxlbSgnI3RlbXBvcmFyeUlucHV0JykubGFiZWwgPT09ICdmcmVlRm9ybScpe1xuICAgICAgICAgICAgRE9NLnNlbGVjdEVsZW0oJyN0ZW1wb3JhcnlJbnB1dCcpLnJlbW92ZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFET00uc2VsZWN0RWxlbSgnI3RlbXBvcmFyeUlucHV0Jykpe1xuICAgICAgICBjb25zdCB0ZW1wb3JhcnlJbnB1dCA9IERPTS5lbGVtZW50SW5pdCgnaW5wdXQnLHsndHlwZSc6J3RleHQnLFxuICAgICAgICAnYXV0b2NvbXBsZXRlJzonb2ZmJyxcbiAgICAgICAgJ3JlcXVpcmVkJzoncmVxdWlyZWQnLFxuICAgICAgICAnaWQnOid0ZW1wb3JhcnlJbnB1dCcsXG4gICAgICAgICdjbGFzcyc6ICd0ZW1wb3JhcnlJbnB1dCBub25lJ30pO1xuXG4gICAgICAgIHByb2plY3QuYXBwZW5kQ2hpbGQodGVtcG9yYXJ5SW5wdXQpO1xuICAgICAgICBkaXNhYmxlQnRucyhldmVudC50YXJnZXQpO1xuICAgIFxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFET00uc2VsZWN0RWxlbSgnI3N1Ym1pdE5vdGUnKSl7ICAgICAgIFxuICAgICAgICAgY29uc3Qgb3JpZ2luYWxTdWJtaXQgPSBET00uZWxlbWVudEluaXQoJ2J1dHRvbicseyd0eXBlJzonc3VibWl0JyxcbiAgICAgICAgJ2lkJzogJ3N1Ym1pdE5vdGUnLCBcbiAgICAgICAgJ2NsYXNzJzonc3VibWl0Tm90ZSBub25lJyxcbiAgICAgICAgfSwnU3VibWl0IE5vdGUnKVxuXG4gICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQob3JpZ2luYWxTdWJtaXQpO1xuXG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGlmICghRE9NLnNlbGVjdEVsZW0oJyNjYW5jZWxOb3RlJykpeyAgICAgICBcbiAgICAgICAgICAgIGNvbnN0IGNhbmNlbCA9IERPTS5lbGVtZW50SW5pdCgnYnV0dG9uJyx7XG4gICAgICAgICAgICdpZCc6ICdjYW5jZWxOb3RlJywgXG4gICAgICAgICAgICdjbGFzcyc6J2NhbmNlbCBub25lJyxcbiAgICAgICAgICAgfSwnQ2FuY2VsJylcbiAgIFxuICAgICAgICAgICBmb3JtLmFwcGVuZENoaWxkKGNhbmNlbCk7XG4gICAgXG4gICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICBwcm9qZWN0RXZlbnRzLnB1Ymxpc2goJ25ld0NoZWNrSXRlbScsIGV2ZW50KTtcblxuICAgICAgICByZXR1cm5cblxuICAgIH1cblxuICAgIGNvbnN0IGFkZE5ld0NoZWNrID0gZnVuY3Rpb24oZXZlbnQpe1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBjb25zdCBpbnB1dCA9IERPTS5zZWxlY3RFbGVtKCcjdGVtcG9yYXJ5SW5wdXQnKTtcbiAgICAgICAgY29uc3Qgc3VibWl0ID0gRE9NLnNlbGVjdEVsZW0oJyNzdWJtaXROb3RlJyk7XG4gICAgICAgIGNvbnN0IGNhbmNlbCA9IERPTS5zZWxlY3RFbGVtKCcjY2FuY2VsTm90ZScpO1xuICAgICAgICBpbnB1dC5jbGFzc0xpc3QudG9nZ2xlKCdub25lJyxmYWxzZSk7XG4gICAgICAgIGlucHV0LmZvY3VzKCk7XG4gICAgICAgIGRpc2FibGVCdG5zKCk7XG4gICAgICAgIHN1Ym1pdC5jbGFzc0xpc3QudG9nZ2xlKCdub25lJyxmYWxzZSk7XG4gICAgICAgIGNhbmNlbC5jbGFzc0xpc3QudG9nZ2xlKCdub25lJyxmYWxzZSk7XG4gICAgICAgIHJldHVyblxuICAgIH1cblxuICAgIFxuICAgICAgY29uc3QgX2dlbmVyYXRlQ2hlY2tJdGVtID0gZnVuY3Rpb24oKXsgIFxuICAgICAgICBjb25zdCBpbnB1dCA9IERPTS5zZWxlY3RFbGVtKCcjdGVtcG9yYXJ5SW5wdXQnKTtcbiAgICAgICAgY29uc3QgcHJvamVjdCA9IGlucHV0LnBhcmVudEVsZW1lbnQ7XG4gICAgICAgIGNvbnN0IGZvcm0gPSBET00uc2VsZWN0RWxlbSgnI3N1Ym1pdE5vdGUnKS5wYXJlbnRFbGVtZW50O1xuXG4gICAgICAgIGNvbnN0IGRlbCA9IERPTS5lbGVtZW50SW5pdCgnYnV0dG9uJywgeydjbGFzcyc6ICdkZWxldGVDaGVjayBub25lJ30sJ2RlbGV0ZScgKSAvL3RvIGVkaXQgd2hlbiBjcmVhdGluZyBkcm9wZG93blxuICAgICAgIFxuICAgICAgICBjb25zdCBjaGVja2JveCA9IERPTS5lbGVtZW50SW5pdCgnaW5wdXQnLCB7J3R5cGUnOidjaGVja2JveCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2lkJzogYGNoZWNrJHtwcm9qZWN0LmRhdGFzZXQuaWR9JHtmb3JtLmRhdGFzZXQuaWR9JHtpbnB1dC52YWx1ZX1gLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdjbGFzcyc6J2NoZWNrJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnZGF0YS1jbGFzcyc6YGNoaWxkJHtmb3JtLmRhdGFzZXQuaWR9YH0pO1xuICAgICAgICBjb25zdCBsYWJlbCA9IERPTS5lbGVtZW50SW5pdCgnbGFiZWwnLCB7J2Zvcic6IGAke2lucHV0LnZhbHVlfWAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2NsYXNzJzogJ2VkaXQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2RhdGEtY2xhc3MnOmBjaGlsZCR7Zm9ybS5kYXRhc2V0LmlkfWB9LGAke2lucHV0LnZhbHVlfWApO1xuICAgICAgICBjb25zdCBiciA9IERPTS5lbGVtZW50SW5pdCgnYnInLHsnZGF0YS1jbGFzcyc6YGNoaWxkJHtmb3JtLmRhdGFzZXQuaWR9YH0pO1xuXG4gICAgICAgIGlucHV0LnZhbHVlID0gJyc7XG4gICAgICAgIGxhYmVsLmFwcGVuZENoaWxkKGRlbCk7XG4gICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQoY2hlY2tib3gpO1xuICAgICAgICBmb3JtLmFwcGVuZENoaWxkKGxhYmVsKTtcbiAgICAgICAgZm9ybS5hcHBlbmRDaGlsZChicik7XG5cbiAgICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3Qgc3VibWl0SXRlbSA9IGZ1bmN0aW9uKCl7XG4gICAgXG4gICAgY29uc3QgaW5wdXQgPSBET00uc2VsZWN0RWxlbSgnI3RlbXBvcmFyeUlucHV0Jyk7XG4gICAgY29uc3QgZm9ybSA9IERPTS5zZWxlY3RFbGVtKCcjc3VibWl0Tm90ZScpLnBhcmVudEVsZW1lbnQ7XG4gICAgY29uc3QgcmVtb3ZlID0gRE9NLnNlbGVjdEVsZW0oYCNyZW1vdmUke2lucHV0LnBhcmVudEVsZW1lbnQuZGF0YXNldC5pZH0ke2Zvcm0uZGF0YXNldC5pZH1gKTtcblxuICAgIFxuICAgIFxuICAgIGlmIChpbnB1dC52YWx1ZSA9PT0gJycpe3JldHVybn07XG5cbiAgICBpZiAoZm9ybS5jbGFzc0xpc3QuY29udGFpbnMoJ2NoZWNrYm94Jykpe1xuICAgICAgICBfZ2VuZXJhdGVDaGVja0l0ZW0oKTtcbiAgICAgICAgcmVtb3ZlLmNsYXNzTGlzdC50b2dnbGUoJ25vbmUnLGZhbHNlKTtcbiAgICAgICAgaW5wdXQuY2xhc3NMaXN0LnRvZ2dsZSgnbm9uZScsIHRydWUpOyAgICAgICAgXG4gICAgICAgIHJldHVyblxuICAgIH1cbiAgICBcbiAgICBjb25zdCB0ZXh0ID0gRE9NLmVsZW1lbnRJbml0KCdwJywgeydjbGFzcyc6J3RleHQgZWRpdCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdkYXRhLWNsYXNzJzpgY2hpbGQke2Zvcm0uZGF0YXNldC5pZH1gfSwgYCR7aW5wdXQudmFsdWV9YCk7XG5cbiAgICBmb3JtLmFwcGVuZENoaWxkKHRleHQpO1xuICAgIHJlbW92ZS5jbGFzc0xpc3QudG9nZ2xlKCdub25lJyxmYWxzZSk7XG5cbiAgICByZXR1cm5cblxuICAgfVxuXG4gICBjb25zdCBkZWxldGVJdGVtID0gZnVuY3Rpb24oZXZlbnQpe1xuICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQucmVtb3ZlKCk7XG4gICAgcmV0dXJuXG4gICB9XG4gICBcbiAgIFxuICAgY29uc3QgZGVsZXRlQ2hlY2sgPSBmdW5jdGlvbihldmVudCl7XG4gICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgIGNvbnN0IGxhYmVsID0gZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnRcbiAgICAgICBjb25zdCBiciA9IGxhYmVsLm5leHRFbGVtZW50U2libGluZztcbiAgICAgICBjb25zdCBjaGVjayA9IGxhYmVsLnByZXZpb3VzRWxlbWVudFNpYmxpbmc7XG4gICAgICAgY29uc3QgZm9ybSA9IGNoZWNrLnBhcmVudEVsZW1lbnQ7ICAgIFxuXG4gICAgICAgYnIucmVtb3ZlKCkgXG4gICAgICAgY2hlY2sucmVtb3ZlKCkgXG4gICAgICAgbGFiZWwucmVtb3ZlKClcbiAgICAgICBcbiAgICAgICBjb25zdCBmb3JtQ2hpbGRyZW4gPSBBcnJheS5mcm9tKGZvcm0uY2hpbGRyZW4pO1xuICAgICAgIGNvbnN0IGNoaWxkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtY2xhc3M9Y2hpbGQke2Zvcm0uZGF0YXNldC5pZH1dYClcbiAgICAgICAhKGZvcm1DaGlsZHJlbi5pbmNsdWRlcyhjaGlsZCkpID8gZm9ybS5yZW1vdmUoKSA6IGZhbHNlO1xuICAgICAgIFxuICAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IG1vdmVJdGVtID0gZnVuY3Rpb24oZXZlbnQpe1xuICAgICAgICBjb25zdCB0YXJnZXQgPSBldmVudC50YXJnZXQuY2xvc2VzdCgnLnRvRG9Ob3RlSW5wdXQnKSB8fCBldmVudC50YXJnZXQuY2xvc2VzdCgnLnByb2plY3QnKVxuICAgICAgICAvL2xldCBzaGlmdFggPVxuICAgICAgICAvL2xldCBzaGlmdFkgPSBcblxuICAgIH1cblxuICAgICByZXR1cm4ge1xuICAgICAgICAgY3JlYXRlUHJvamVjdCxcbiAgICAgICAgIGNyZWF0ZVRvRG9Ob3RlLFxuICAgICAgICAgcmV2ZWFsQ3JlYXRlRm9ybSxcbiAgICAgICAgIHRvZ2dsZVNpemUsXG4gICAgICAgICBjaG9vc2VUb0RvVGl0bGVGb3JtLFxuICAgICAgICAgc3VibWl0VG9Eb1RpdGxlLFxuICAgICAgICAgY2hvb3NlTm90ZVR5cGUsXG4gICAgICAgICBub3RlVHlwZUdlbmVyYXRvcixcbiAgICAgICAgIGRlbGV0ZUZvcm1zLFxuICAgICAgICAgZGlzYWJsZUJ0bnMsXG4gICAgICAgICBlbmFibGVCdG5zLFxuICAgICAgICAgY2xlYW5Ub0RvRm9ybSxcbiAgICAgICAgIG1vZGlmeUVsZW1lbnQsXG4gICAgICAgICBjYW5jZWxOb3RlLFxuICAgICAgICAgcmV2ZXJ0TW9kaWZpZWRFbGVtZW50LFxuICAgICAgICAgYWRkTmV3Q2hlY2ssXG4gICAgICAgICBnZW5lcmF0ZU5ld0FkZENoZWNrLFxuICAgICAgICAgc3VibWl0SXRlbSxcbiAgICAgICAgIHN1Ym1pdE1vZGlmaWVkRWxlbWVudCxcbiAgICAgICAgIGRlbGV0ZUl0ZW0sXG4gICAgICAgICBkZWxldGVDaGVjayxcbiAgICAgICAgIFxuICAgICB9XG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCAqIGFzIHByb2plY3RzIGZyb20gJy4vcHJvamVjdHMnO1xuaW1wb3J0IHsgRE9NR2VuZXJhbCB9IGZyb20gXCIuL2hlbHBlcnMvRE9NXCI7XG5pbXBvcnQgeyB0ZW1wbGF0ZURPTVN0cnVjdHMgfSBmcm9tICcuL3Byb2plY3RzRE9NJztcbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IHsgcHJvamVjdEV2ZW50cyB9IGZyb20gJy4vcHJvamVjdGV2ZW50cyc7XG5cblxuY29uc3QgcmV2ZWFsVG9EbyA9IChmdW5jdGlvbigpeyBcbiAgICBcbiAgICAvL0NhbGxpbmcgbW9kdWxlIE9iamVjdHNcbiAgICBjb25zdCBET00gPSBET01HZW5lcmFsKCk7XG4gICAgY29uc3Qgc3RydWN0cyA9IHRlbXBsYXRlRE9NU3RydWN0cygpO1xuICAgIGNvbnN0IG1haW4gPSBwcm9qZWN0cy5tYWluSW50ZXJmYWNlKCk7XG4gICAgXG5cbiAgICAvL01vZHVsZSBtZXRob2RzIHRvIGJlIHVzZWRcbiAgICBjb25zdCBuZXdQcm9qID0gbWFpbi5uZXdQcm9qO1xuICAgIGNvbnN0IGxvY2FsU3RvcmUgPSBtYWluLnRyYW5zZmVyVG9Mb2NhbFN0b3JhZ2U7XG4gICAgY29uc3QgYXBwZW5kVG9Qcm9qID0gbWFpbi5hcHBlbmRUb1Byb2o7XG4gICAgY29uc3QgcmVtb3ZlSXRlbSA9IG1haW4ucmVtb3ZlSXRlbTtcbiAgICBjb25zdCBhcHBlbmROb3RlVG9JdGVtID0gbWFpbi5hcHBlbmROb3RlVG9JdGVtXG4gICAgY29uc3QgcmVjb3JkQ2hlY2sgPSBtYWluLnJlY29yZENoZWNrO1xuICAgIGNvbnN0IGRlbGV0ZUNoZWNrRnJvbVN0b3JhZ2UgPSBtYWluLmRlbGV0ZUNoZWNrRnJvbVN0b3JhZ2U7XG4gICAgY29uc3QgbW9kaWZ5SW5TdG9yYWdlID0gbWFpbi5tb2RpZnlJblN0b3JhZ2U7XG4gICAgY29uc3QgY3JlYXRlUHJvamVjdCA9IHN0cnVjdHMuY3JlYXRlUHJvamVjdDtcbiAgICBjb25zdCByZXZlYWxDcmVhdGVGb3JtID0gc3RydWN0cy5yZXZlYWxDcmVhdGVGb3JtO1xuICAgIGNvbnN0IHRvZ2dsZVNpemUgPSBzdHJ1Y3RzLnRvZ2dsZVNpemU7XG4gICAgY29uc3QgY2hvb3NlVG9Eb1RpdGxlRm9ybSA9IHN0cnVjdHMuY2hvb3NlVG9Eb1RpdGxlRm9ybTtcbiAgICBjb25zdCBzdWJtaXRUb0RvVGl0bGUgPSBzdHJ1Y3RzLnN1Ym1pdFRvRG9UaXRsZTtcbiAgICBjb25zdCBjaG9vc2VOb3RlVHlwZSA9IHN0cnVjdHMuY2hvb3NlTm90ZVR5cGU7XG4gICAgY29uc3Qgbm90ZVR5cGVHZW5lcmF0b3IgPSBzdHJ1Y3RzLm5vdGVUeXBlR2VuZXJhdG9yO1xuICAgIGNvbnN0IGRlbGV0ZUZvcm1zID0gc3RydWN0cy5kZWxldGVGb3JtcztcbiAgICBjb25zdCBkaXNhYmxlQnRucyA9IHN0cnVjdHMuZGlzYWJsZUJ0bnM7XG4gICAgY29uc3QgY3JlYXRlVG9Eb05vdGUgPSBzdHJ1Y3RzLmNyZWF0ZVRvRG9Ob3RlO1xuICAgIGNvbnN0IGVuYWJsZUJ0bnMgPSBzdHJ1Y3RzLmVuYWJsZUJ0bnM7XG4gICAgY29uc3QgY2xlYW5Ub0RvRm9ybSA9IHN0cnVjdHMuY2xlYW5Ub0RvRm9ybTtcbiAgICBjb25zdCBhZGROZXdDaGVjayA9IHN0cnVjdHMuYWRkTmV3Q2hlY2s7XG4gICAgY29uc3QgY2FuY2VsTm90ZSA9IHN0cnVjdHMuY2FuY2VsTm90ZTtcbiAgICBjb25zdCByZXZlcnRNb2RpZmllZEVsZW1lbnQgPSBzdHJ1Y3RzLnJldmVydE1vZGlmaWVkRWxlbWVudDtcbiAgICBjb25zdCBtb2RpZnlFbGVtZW50ID0gc3RydWN0cy5tb2RpZnlFbGVtZW50O1xuICAgIGNvbnN0IHN1Ym1pdEl0ZW0gPSBzdHJ1Y3RzLnN1Ym1pdEl0ZW07XG4gICAgY29uc3QgZ2VuZXJhdGVOZXdBZGRDaGVjayA9IHN0cnVjdHMuZ2VuZXJhdGVOZXdBZGRDaGVjaztcbiAgICBjb25zdCBzdWJtaXRNb2RpZmllZEVsZW1lbnQgPSBzdHJ1Y3RzLnN1Ym1pdE1vZGlmaWVkRWxlbWVudDtcbiAgICBjb25zdCBkZWxldGVJdGVtID0gc3RydWN0cy5kZWxldGVJdGVtO1xuICAgIGNvbnN0IGRlbGV0ZUNoZWNrID0gc3RydWN0cy5kZWxldGVDaGVjaztcbiAgICBjb25zdCBkZWxlZ2F0b3IgPSBwcm9qZWN0RXZlbnRzLmRlbGVnYXRvcjtcblxuICAgIFxuICAgIFxuICAgIC8vRXZlbnQgU3Vic2NyaXB0aW9uc1xuICAgIHByb2plY3RFdmVudHMuc3Vic2NyaWJlKCd2aWV3JywgdG9nZ2xlU2l6ZSk7XG4gICAgcHJvamVjdEV2ZW50cy5zdWJzY3JpYmUoJ2NyZWF0ZScsIGNyZWF0ZVByb2plY3QpO1xuICAgIHByb2plY3RFdmVudHMuc3Vic2NyaWJlKCdjcmVhdGUnLCBuZXdQcm9qKTtcbiAgICBwcm9qZWN0RXZlbnRzLnN1YnNjcmliZSgnc2F2ZWQnLCBsb2NhbFN0b3JlKTtcbiAgICBwcm9qZWN0RXZlbnRzLnN1YnNjcmliZSgncmV2ZWFsJywgcmV2ZWFsQ3JlYXRlRm9ybSk7XG4gICAgcHJvamVjdEV2ZW50cy5zdWJzY3JpYmUoJ2Nob29zZVRpdGxlJywgZGlzYWJsZUJ0bnMpO1xuICAgIHByb2plY3RFdmVudHMuc3Vic2NyaWJlKCdjaG9vc2VUaXRsZScsIGNob29zZVRvRG9UaXRsZUZvcm0pO1xuICAgIHByb2plY3RFdmVudHMuc3Vic2NyaWJlKCdpbnB1dE9yTGlzdCcsIHN1Ym1pdFRvRG9UaXRsZSk7XG4gICAgcHJvamVjdEV2ZW50cy5zdWJzY3JpYmUoJ2lucHV0T3JMaXN0JywgY2hvb3NlTm90ZVR5cGUpO1xuICAgIHByb2plY3RFdmVudHMuc3Vic2NyaWJlKCdub3RlVG9Eb1R5cGUnLCBkZWxldGVGb3JtcylcbiAgICBwcm9qZWN0RXZlbnRzLnN1YnNjcmliZSgnbm90ZVRvRG9UeXBlJywgbm90ZVR5cGVHZW5lcmF0b3IpO1xuICAgIHByb2plY3RFdmVudHMuc3Vic2NyaWJlKCdkZWxldGVOb3RlVHlwZUZvcm0nLCBkaXNhYmxlQnRucyk7XG4gICAgcHJvamVjdEV2ZW50cy5zdWJzY3JpYmUoJ2RlbGV0ZU5vdGVUeXBlRm9ybScsIGRlbGV0ZUZvcm1zKTtcbiAgICBwcm9qZWN0RXZlbnRzLnN1YnNjcmliZSgnYWJvcnROb3RlVHlwZUZvcm0nLCBkZWxldGVGb3Jtcyk7XG4gICAgcHJvamVjdEV2ZW50cy5zdWJzY3JpYmUoJ2Fib3J0Tm90ZVR5cGVGb3JtJywgZW5hYmxlQnRucyk7XG4gICAgcHJvamVjdEV2ZW50cy5zdWJzY3JpYmUoJ2Fib3J0Tm90ZVR5cGVGb3JtJywgZGVsZXRlRm9ybXMpO1xuICAgIHByb2plY3RFdmVudHMuc3Vic2NyaWJlKCdjYW5jZWxOb3RlJywgY2FuY2VsTm90ZSk7XG4gICAgcHJvamVjdEV2ZW50cy5zdWJzY3JpYmUoJ2NhbmNlbE5vdGUnLCBlbmFibGVCdG5zKTtcbiAgICBwcm9qZWN0RXZlbnRzLnN1YnNjcmliZSgnY2FuY2VsTm90ZScsIGNsZWFuVG9Eb0Zvcm0pOyAgICAgICAgXG4gICAgcHJvamVjdEV2ZW50cy5zdWJzY3JpYmUoJ25ld0NoZWNrSXRlbScsIGFkZE5ld0NoZWNrKTtcbiAgICBwcm9qZWN0RXZlbnRzLnN1YnNjcmliZSgnY3JlYXRlTm90ZScsIGNyZWF0ZVRvRG9Ob3RlKTtcbiAgICBwcm9qZWN0RXZlbnRzLnN1YnNjcmliZSgnc3VibWl0Tm90ZScsIHN1Ym1pdEl0ZW0pO1xuICAgIHByb2plY3RFdmVudHMuc3Vic2NyaWJlKCdzdWJtaXROb3RlJywgZW5hYmxlQnRucyk7XG4gICAgcHJvamVjdEV2ZW50cy5zdWJzY3JpYmUoJ3N1Ym1pdE5vdGUnLCBhcHBlbmRUb1Byb2opO1xuICAgIHByb2plY3RFdmVudHMuc3Vic2NyaWJlKCdzdWJtaXROb3RlJywgYXBwZW5kTm90ZVRvSXRlbSk7XG4gICAgcHJvamVjdEV2ZW50cy5zdWJzY3JpYmUoJ3N1Ym1pdE5vdGUnLCBjbGVhblRvRG9Gb3JtKTtcbiAgICBwcm9qZWN0RXZlbnRzLnN1YnNjcmliZSgndXBkYXRlQ2hlY2tJdGVtJywgZ2VuZXJhdGVOZXdBZGRDaGVjayk7XG4gICAgcHJvamVjdEV2ZW50cy5zdWJzY3JpYmUoJ21vZGlmeUVsZW0nLCBtb2RpZnlFbGVtZW50KTtcbiAgICBwcm9qZWN0RXZlbnRzLnN1YnNjcmliZSgncmV2ZXJ0JywgcmV2ZXJ0TW9kaWZpZWRFbGVtZW50KTtcbiAgICBwcm9qZWN0RXZlbnRzLnN1YnNjcmliZSgnc3VibWl0TW9kJywgbW9kaWZ5SW5TdG9yYWdlKTtcbiAgICBwcm9qZWN0RXZlbnRzLnN1YnNjcmliZSgnc3VibWl0TW9kJywgc3VibWl0TW9kaWZpZWRFbGVtZW50KVxuICAgIHByb2plY3RFdmVudHMuc3Vic2NyaWJlKCdkZWxldGUnLCByZW1vdmVJdGVtKTsgICAgXG4gICAgcHJvamVjdEV2ZW50cy5zdWJzY3JpYmUoJ2RlbGV0ZScsIGRlbGV0ZUl0ZW0pO1xuICAgIHByb2plY3RFdmVudHMuc3Vic2NyaWJlKCdkZWxldGVDaGVjaycsIGRlbGV0ZUNoZWNrRnJvbVN0b3JhZ2UpO1xuICAgIHByb2plY3RFdmVudHMuc3Vic2NyaWJlKCdkZWxldGVDaGVjaycsIGRlbGV0ZUNoZWNrKTtcbiAgICBwcm9qZWN0RXZlbnRzLnN1YnNjcmliZSgncmVjb3JkQ2hlY2snLCByZWNvcmRDaGVjayk7XG4gICAgXG4gICAgXG5cblxuICAgIC8vSW5pdGlhbCBlbGVtZW50c1xuICAgIGNvbnN0IG1haW5Db250YWluZXIgPSAoZnVuY3Rpb24oKXtcbiAgICBcbiAgICAgICAgY29uc3QgY29udGFpbmVyID0gIERPTS5lbGVtZW50SW5pdCgnZGl2Jyx7J2lkJzonY29udGFpbmVyJ30pXG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY29udGFpbmVyKVxuICAgICAgICByZXR1cm4gY29udGFpbmVyXG4gICAgIFxufSkoKVxuXG4gICAgY29uc3QgaGVhZGVyID0gKGZ1bmN0aW9uKCl7XG4gICAgICAgIFxuICAgICAgICAvL0luaXRpYWxpc2UgZWxlbWVudHNcbiAgICAgICAgY29uc3QgaGVhZCA9IERPTS5lbGVtZW50SW5pdCgnaGVhZGVyJywgeydpZCc6J2hlYWRlcid9KTtcbiAgICAgICAgY29uc3QgdGl0bGUgPSBET00uZWxlbWVudEluaXQoJ2gxJyx7J2lkJzogJ3RpdGxlJ30sICdUaGlzIGlzIHlvdXIgVG8tRG8gbGlzdCcpO1xuICAgICAgICBjb25zdCByZXZlYWxGb3JtID0gRE9NLmVsZW1lbnRJbml0KCdidXR0b24nLHsnY2xhc3MnOidyZXZlYWxGb3JtJ30sJ05ldyBQcm9qZWN0Jyk7XG4gICAgICAgIFxuICAgICAgICAvL0FkZCBoZWFkZXIgZXZlbnQgbGlzdGVuZXJcbiAgICAgICAgaGVhZC5vbmNsaWNrID0gZGVsZWdhdG9yO1xuICAgICAgICBcbiAgICAgICAgLy9BcHBlbmQgdG8gZG9jdW1lbnRcbiAgICAgICAgaGVhZC5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gICAgICAgIGhlYWQuYXBwZW5kQ2hpbGQocmV2ZWFsRm9ybSk7XG4gICAgICAgIG1haW5Db250YWluZXIuYXBwZW5kQ2hpbGQoaGVhZCk7XG5cbiAgICAgICAgcmV0dXJuIGhlYWQ7XG59KSgpXG4gICAgXG4gICAgY29uc3QgZGVmYXVsdFByb2plY3QgPSAoZnVuY3Rpb24oKXtcbiAgICAgICAgXG4gICAgfSkoKVxuXG4gICAgXG4gICAgY29uc3QgcmVuZGVyTG9jYWxTdG9yYWdlID0gZnVuY3Rpb24oKXtcbiAgICAgICAgLy9UaGlzIHdpbGwgdXNlIGxvY2FsU3RvcmFnZSB0byBjaGVja1xuICAgICAgICAvL2lmIHRoZSB1c2VyIGhhcyBhbnkgc2F2ZWQgaW5zdGFuY2VzXG4gICAgICAgIC8vb2YgcHJvamVjdHMgYW5kIHJlbmRlciB0aGVtIGlmIHNvLiBcbiAgICAgICAgLy9SZW1lbWJlciB0byB0YWtlIGFjY291bnQgYW55IGRpZmZlcmVuY2VzIGluIGRhdGEgYmV0d2VlbiBiYWNrZW5kIGFuZCBET01cbiAgICB9XG5cblxuICAgICBcbiAgICBjb25zdCBjcmVhdGVGb3JtID0gKGZ1bmN0aW9uKCl7XG4gICAgICAgICBjb25zdCBmb3JtID0gRE9NLmVsZW1lbnRJbml0KCdmb3JtJyx7J2lkJzonY3JlYXRlRm9ybScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2NsYXNzJzonaGlkZGVuIHByb2plY3RGb3JtJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQoRE9NLmVsZW1lbnRJbml0KCdicicpKTsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgZm9ybS5hcHBlbmRDaGlsZChET00uZWxlbWVudEluaXQoJ2xhYmVsJyx7J2Zvcic6J3RpdGxlSW5wJ30sJ1Byb2plY3QgVGl0bGUnKSlcbiAgICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQoRE9NLmVsZW1lbnRJbml0KCdicicpKTtcbiAgICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQoRE9NLmVsZW1lbnRJbml0KCdpbnB1dCcseyd0eXBlJzondGV4dCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2lkJyA6ICd0aXRsZUlucCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2F1dG9jb21wbGV0ZSc6ICdvZmYnLCAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ25hbWUnOid0aXRsZUlucCd9KSk7XG4gICAgICAgICBmb3JtLmFwcGVuZENoaWxkKERPTS5lbGVtZW50SW5pdCgnYnV0dG9uJyx7J3R5cGUnOidzdWJtaXQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnY2xhc3MnOiAnc3VibWl0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdpZCc6J3N1Ym1pdCd9LCdzdWJtaXQnKSk7XG4gICAgICAgICBcbiBcbiAgICAgICAgIGZvcm0ub25zdWJtaXQgPSBkZWxlZ2F0b3I7XG4gICAgICAgICBtYWluQ29udGFpbmVyLmFwcGVuZENoaWxkKGZvcm0pO1xuICAgICAgICAgcmV0dXJuIGZvcm07IFxufSkoKVxuICAgICBcblxufSkoKVxuXG4gICAgIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9