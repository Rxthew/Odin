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
      switch(event.target.className){
         case 'revealForm': projectEvents.publish('reveal');
           break;
         case 'projectForm': projectEvents.publish('create', document.querySelector('#titleInp').value);
                             projectEvents.publish('saved');
                             event.preventDefault();
           break;
         case 'project': projectEvents.publish('view', event);
           break;
         case 'addtoDoList': projectEvents.publish('chooseTitle', event)
           break;
         case 'chooseTitleForm': projectEvents.publish('inputOrList', event)
           break;
         case 'chooseNoteType': projectEvents.publish('noteToDoType', event);
                                event.preventDefault();
         break;
         case 'cancelTitle' : projectEvents.publish('abortNoteTypeForm', event);
                              event.preventDefault();
         break; 
         case 'cancelChoice' : projectEvents.publish('abortNoteTypeForm',event);
                               event.preventDefault();
         break;
         case 'addCheck': projectEvents.publish('newCheckItem', event);
         break;
         case 'addCheckMod': projectEvents.publish('updateCheckItem', event);
         break;
         case 'cancel':projectEvents.publish('cancelNote',event);
                       event.preventDefault()
         break;
         case 'edit': projectEvents.publish('modifyElem',event);
         break;
         case 'submitNote' : projectEvents.publish('submitNote', event);
                             event.preventDefault();
         break;
         case 'revertMod' : projectEvents.publish('revert',event);
         break;
         case 'submitMod': projectEvents.publish('submitMod',event);
         break;
         case 'remove': projectEvents.publish('deleteToDoNote', event);
         break;
         case 'deleteCheck': projectEvents.publish('deleteCheck', event);
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
   
   
   const type = function(type='input'){
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

   return project

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

  
   
   return {
      newProj,
      transferToLocalStorage
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDM0IsSUFBSSxtRUFBdUI7QUFDM0IsSUFBSSxtRUFBdUI7QUFDM0IsSUFBSSxtRUFBdUI7QUFDM0IsSUFBSSxtRUFBdUI7QUFDM0IsSUFBSSxtRUFBdUI7QUFDM0I7OztBQUdBO0FBQ0E7QUFDQTtBQUNBLGtEQUFrRCxpQkFBaUI7QUFDbkU7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQSxnREFBZ0QsY0FBYztBQUM5RCw0Q0FBNEMsY0FBYztBQUMxRCxxREFBcUQscUJBQXFCO0FBQzFFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBLDhDQUE4QztBQUM5QztBQUNBLDZDQUE2QztBQUM3QztBQUNBLG1EQUFtRCxpQkFBaUI7QUFDcEU7QUFDQSxtREFBbUQ7QUFDbkQ7QUFDQTtBQUNBLHNFQUFzRTtBQUN0RSxvREFBb0Q7QUFDcEQ7QUFDQSxvRUFBb0U7QUFDcEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDs7QUFFQSxDQUFDOztBQUVELEkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvaGVscGVycy9ET00uanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9oZWxwZXJzL2Jhc2UuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9oZWxwZXJzL2V2ZW50cy5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL3Byb2plY3RldmVudHMuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9wcm9qZWN0cy5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL3Byb2plY3RzRE9NLmpzIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8vLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJodG1sIHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG5cXG59XFxuXFxuXFxuKiwgKjpiZWZvcmUsICo6YWZ0ZXJ7XFxuICAgIGJveC1zaXppbmc6IGluaGVyaXQ7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG59XFxuXFxuYm9keSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5oaWRkZW4ge1xcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW5cXG59XFxuXFxuLnByb2plY3Qge1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ubm9uZSB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi50b0RvTm90ZUlucHV0IHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxufVxcblxcbi50ZXh0IHtcXG4gICAgd2hpdGUtc3BhY2U6IHByZS13cmFwO1xcbn1cXG5cXG4ubW9kSW5wdXQge1xcbiAgICB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7XFxufVxcblxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxzQkFBc0I7O0FBRTFCOzs7QUFHQTtJQUNJLG1CQUFtQjtJQUNuQixTQUFTO0lBQ1QsVUFBVTtBQUNkOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJO0FBQ0o7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSx1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxxQkFBcUI7QUFDekJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiaHRtbCB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuXFxufVxcblxcblxcbiosICo6YmVmb3JlLCAqOmFmdGVye1xcbiAgICBib3gtc2l6aW5nOiBpbmhlcml0O1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxufVxcblxcbmJvZHkge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4uaGlkZGVuIHtcXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuXFxufVxcblxcbi5wcm9qZWN0IHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLm5vbmUge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4udG9Eb05vdGVJbnB1dCB7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG4udGV4dCB7XFxuICAgIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDtcXG59XFxuXFxuLm1vZElucHV0IHtcXG4gICAgd2hpdGUtc3BhY2U6IHByZS13cmFwO1xcbn1cXG5cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgdGhpcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1tfaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaTIgPSAwOyBfaTIgPCBtb2R1bGVzLmxlbmd0aDsgX2kyKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2kyXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiZXhwb3J0IGNvbnN0IERPTUdlbmVyYWwgPSBmdW5jdGlvbigpe1xuICAgIFxuICAgIGNvbnN0IGVsZW1lbnRJbml0ID0gZnVuY3Rpb24oZWxlbSwgYXR0cnNPYmo9e30sdGV4dFN0cmluZz0nJyl7XG4gICAgICAgIFxuICAgICAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChlbGVtKTtcbiAgICAgICAgXG4gICAgICAgIGlmIChPYmplY3Qua2V5cyhhdHRyc09iaikubGVuZ3RoID4gMCl7XG4gICAgICAgICAgICBPYmplY3Qua2V5cyhhdHRyc09iaikuZm9yRWFjaChmdW5jdGlvbihhdHQpe1xuICAgICAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoYXR0LCBhdHRyc09ialthdHRdKVxuICAgICAgICB9KVxuICAgIH0gICBcbiAgICAgICAgaWYgKHRleHRTdHJpbmcubGVuZ3RoID4gMCl7XG4gICAgICAgICAgICBlbGVtZW50LnRleHRDb250ZW50ID0gdGV4dFN0cmluZztcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBlbGVtZW50ICAgICAgIFxuXG4gICAgfTtcblxuICAgY29uc3Qgc2VsZWN0RWxlbSA9IGZ1bmN0aW9uKHNlbGVjdG9yU3RyaW5nKXtcblxuICAgICAgIGlmIChzZWxlY3RvclN0cmluZ1swXSA9PT0gJyMnKXtcbiAgICAgICAgICAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3JTdHJpbmcpXG4gICAgICAgfVxuICAgICAgIGVsc2Uge1xuICAgICAgICAgICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChzZWxlY3RvclN0cmluZyk7XG4gICAgICAgfVxuICAgICAgIFxuICAgfTtcblxuICAgcmV0dXJuIHtcbiAgICAgICBlbGVtZW50SW5pdCwgXG4gICAgICAgc2VsZWN0RWxlbSxcbiAgIH1cblxufVxuXG5cblxuIiwiZXhwb3J0IGNvbnN0IGJhc2VDcmVhdGUgPSBmdW5jdGlvbihzdG9yYWdlKXtcbiAgICAgIFxuY29uc3QgX3N0b3JhZ2UgPSBzdG9yYWdlIHx8IG5ldyBBcnJheSgpO1xuXG4oZnVuY3Rpb24oKXtcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoX3N0b3JhZ2UpKXtcbiAgICAgICAgdGhyb3cgJ0Vycm9yISBBcmd1bWVudCBtdXN0IGJlIGFuIGFycmF5JztcbiAgICB9XG4gICAgfSkoKVxuICAgIFxuY29uc3QgYWRkID0gZnVuY3Rpb24oZWxlbSl7XG4gICAgX3N0b3JhZ2UucHVzaChlbGVtKTtcblxufTtcblxuY29uc3QgcmVtb3ZlID0gZnVuY3Rpb24oZWxlbSwgaW5kZXg9MCl7XG4gICAgaWYgKGluZGV4ID09PSAwKXtcbiAgICAgICAgZm9yIChsZXQgaSA9IGluZGV4OyBpIDwgX3N0b3JhZ2UubGVuZ3RoOyBpKyspe1xuICAgICAgICAgICAgaWYoX3N0b3JhZ2VbaV0gPT09IGVsZW0pe1xuICAgICAgICAgICAgICAgIF9zdG9yYWdlLnNwbGljZShpLDEpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICB9XG4gICAgICAgICB9ICAgICAgICAgXG4gICAgICAgfVxuICAgICAgIGVsc2UgaWYgKGluZGV4ID4gMCAmJiBpbmRleCA8IF9zdG9yYWdlLmxlbmd0aCl7XG4gICAgICAgICAgIF9zdG9yYWdlLnNwbGljZShpbmRleCwgMSlcbiAgICAgICB9ICBcbn07XG5cbmNvbnN0IHVwZGF0ZUJ5TG9jYXRpb24gPSBmdW5jdGlvbihpbmRleCwgcmVwbGFjZSl7XG4gICAgICAgIGlmIChpbmRleCA+IDAgJiYgaW5kZXggPCBfc3RvcmFnZS5sZW5ndGgpe1xuICAgICAgICAgICAgX3N0b3JhZ2Uuc3BsaWNlKGluZGV4LDEscmVwbGFjZSk7XG4gICAgICAgIH1cblxufTtcblxuY29uc3QgdXBkYXRlQnlFbGVtZW50ID0gZnVuY3Rpb24oZWxlbSwgcmVwbGFjZSl7XG4gICAgICAgIGZvciAobGV0IHggPSBpbmRleDsgeCA8IF9zdG9yYWdlLmxlbmd0aDsgeCsrKXtcbiAgICAgICAgICAgIGlmKF9zdG9yYWdlW3hdID09PSBlbGVtKXtcbiAgICAgICAgICAgICAgICBfc3RvcmFnZS5zcGxpY2UoeCwxLCByZXBsYWNlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH19XG59O1xuXG5cbmNvbnN0IG1vdmUgPSBmdW5jdGlvbihpbmRleCwgdGFyZ2V0KXtcbiAgICBpZiAoaW5kZXggPj0gMCAmJiBpbmRleCA8X3N0b3JhZ2UubGVuZ3RoICYmIHRhcmdldCA+PSAwICYmIHRhcmdldCA8X3N0b3JhZ2UubGVuZ3RoKXtcbiAgICAgICAgY29uc3QgbW92ZWQgPSBfc3RvcmFnZVtpbmRleF07XG4gICAgICAgIF9zdG9yYWdlLnNwbGljZShpbmRleCwxKTtcbiAgICAgICAgX3N0b3JhZ2Uuc3BsaWNlKHRhcmdldCwwLG1vdmVkKVxuICAgIFxuICAgIH0gICBcbiAgICBlbHNlIGlmKGluZGV4ID49IDAgJiYgaW5kZXggPF9zdG9yYWdlLmxlbmd0aCAmJiB0YXJnZXQgPj0gX3N0b3JhZ2UubGVuZ3RoKSB7XG4gICAgICAgIGNvbnN0IHJlcGxhY2VtZW50ID0gX3N0b3JhZ2VbaW5kZXhdO1xuICAgICAgICBfc3RvcmFnZS5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICBfc3RvcmFnZS5wdXNoKHJlcGxhY2VtZW50KTtcblxuICAgIH0gICAgXG59O1xuXG5jb25zdCBzd2FwID0gZnVuY3Rpb24oaW5kZXhBLCBpbmRleEIpe1xuICAgIGlmIChpbmRleEEgPj0gMCAmJiBpbmRleEEgPF9zdG9yYWdlLmxlbmd0aCAmJiBpbmRleEIgPj0gMCAmJiBpbmRleEIgPF9zdG9yYWdlLmxlbmd0aCl7XG4gICAgICAgIFxuICAgICAgIFtfc3RvcmFnZVtpbmRleEFdLCBfc3RvcmFnZVtpbmRleEJdXSA9IFtfc3RvcmFnZVtpbmRleEJdLCBfc3RvcmFnZVtpbmRleEFdXVxuICAgIH1cblxufTtcblxuY29uc3QgY29weSA9IGZ1bmN0aW9uIChpbmRleCl7XG4gICAgaWYgKGluZGV4ID49IDAgJiYgaW5kZXggPCBfc3RvcmFnZS5sZW5ndGgpe1xuICAgICAgICBsZXQgY2xvbmUgPSBfc3RvcmFnZVtpbmRleF07XG4gICAgICAgIF9zdG9yYWdlLnB1c2goY2xvbmUpO1xuICAgIH1cbn1cbiAgICBcbiAgICByZXR1cm4ge1xuICAgICAgICBhZGQsXG4gICAgICAgIHJlbW92ZSxcbiAgICAgICAgdXBkYXRlQnlMb2NhdGlvbixcbiAgICAgICAgdXBkYXRlQnlFbGVtZW50LFxuICAgICAgICBtb3ZlLFxuICAgICAgICBzd2FwLFxuICAgICAgICBjb3B5XG4gICAgfSAgIFxufVxuXG4iLCJleHBvcnQgY29uc3QgZXZlbnRzID0gZnVuY3Rpb24oKXtcblxuICAgIGNvbnN0IF9teUV2ZW50cyA9IHt9O1xuXG4gICAgY29uc3QgX2lzRXZlbnRIZXJlID0gZnVuY3Rpb24obmFtZSl7XG4gICAgICAgIHJldHVybiBfbXlFdmVudHMuaGFzT3duUHJvcGVydHkobmFtZSk7XG4gICAgfVxuXG4gICAgY29uc3QgX2FkZEhhbmRsZXIgPSBmdW5jdGlvbihuYW1lLCBuZXdIYW5kbGVyKXsgICAgICAgXG4gICAgICAgIFxuICAgICAgICBpZiAoIV9pc0V2ZW50SGVyZShuYW1lKSl7XG4gICAgICAgICAgICAgICAgX215RXZlbnRzW25hbWVdID0gW107XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgX215RXZlbnRzW25hbWVdLnB1c2gobmV3SGFuZGxlcikgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICB9O1xuXG4gICAgY29uc3QgcmVtb3ZlSGFuZGxlciA9IGZ1bmN0aW9uKG5hbWUsIHRvUmVtb3ZlKXtcblxuICAgICAgICBpZiAoIV9pc0V2ZW50SGVyZShuYW1lKSl7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgY29uc3QgaW5kZXggPSBfbXlFdmVudHNbbmFtZV0uaW5kZXhPZih0b1JlbW92ZSk7XG4gICAgICAgIF9teUV2ZW50c1tuYW1lXS5zcGxpY2UoaW5kZXgsIDEpXG5cbiAgICB9O1xuXG4gICAgY29uc3QgX2ZpcmVNZSA9IGZ1bmN0aW9uKG5hbWUsIC4uLm9wdGlvbmFsQXJnKXtcbiAgICAgICAgICAgIFxuICAgICAgICBpZiAoIV9pc0V2ZW50SGVyZShuYW1lKSl7XG4gICAgICAgICAgICBfbXlFdmVudHNbbmFtZV0gPSBbXTtcbiAgICAgICAgfVxuXG4gICAgICAgIF9teUV2ZW50c1tuYW1lXS5mb3JFYWNoKGZ1bmN0aW9uKGgpe1xuICAgICAgICAgICAgICAgcmV0dXJuIGgoLi4ub3B0aW9uYWxBcmcpXG4gICAgICAgIH0pXG4gICAgfTtcblxuICAgIGNvbnN0IHB1Ymxpc2ggPSBmdW5jdGlvbihuYW1lLCAuLi5vcHRpb25hbEFyZyl7IFxuICAgICAgIFxuICAgICAgICBpZiAoIV9pc0V2ZW50SGVyZShuYW1lKSl7XG4gICAgICAgICAgICBfbXlFdmVudHNbbmFtZV0gPSBbXTtcbiAgICAgICAgfTtcblxuICAgICAgICBfZmlyZU1lKG5hbWUsIC4uLm9wdGlvbmFsQXJnKVxuICAgICAgICBcbiAgICB9O1xuXG4gICAgY29uc3Qgc3Vic2NyaWJlID0gZnVuY3Rpb24obmFtZSwgbmV3SGFuZGxlcil7XG5cbiAgICAgICAgaWYgKCFfaXNFdmVudEhlcmUobmFtZSkpe1xuICAgICAgICAgICAgX215RXZlbnRzW25hbWVdID0gW107XG4gICAgICAgIH07XG4gICBcbiAgICAgICAgX2FkZEhhbmRsZXIobmFtZSwgbmV3SGFuZGxlcilcbiAgICAgICAgXG4gICAgfTsgXG5cbiAgICAgICAgICAgIFxuICAgIHJldHVybiB7XG4gICAgICAgIHB1Ymxpc2gsXG4gICAgICAgIHN1YnNjcmliZSxcbiAgICAgICAgcmVtb3ZlSGFuZGxlclxuICAgIH0gICAgXG59XG5cbiIsImltcG9ydCB7IGV2ZW50cyB9IGZyb20gXCIuL2hlbHBlcnMvZXZlbnRzXCI7XG5cbmxldCBwcm9qZWN0RXZlbnRzID0gZXZlbnRzKCk7XG5cbnByb2plY3RFdmVudHMuZGVsZWdhdG9yID0gZnVuY3Rpb24oZXZlbnQpe1xuICAgICAgc3dpdGNoKGV2ZW50LnRhcmdldC5jbGFzc05hbWUpe1xuICAgICAgICAgY2FzZSAncmV2ZWFsRm9ybSc6IHByb2plY3RFdmVudHMucHVibGlzaCgncmV2ZWFsJyk7XG4gICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgY2FzZSAncHJvamVjdEZvcm0nOiBwcm9qZWN0RXZlbnRzLnB1Ymxpc2goJ2NyZWF0ZScsIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0aXRsZUlucCcpLnZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdEV2ZW50cy5wdWJsaXNoKCdzYXZlZCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICBicmVhaztcbiAgICAgICAgIGNhc2UgJ3Byb2plY3QnOiBwcm9qZWN0RXZlbnRzLnB1Ymxpc2goJ3ZpZXcnLCBldmVudCk7XG4gICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgY2FzZSAnYWRkdG9Eb0xpc3QnOiBwcm9qZWN0RXZlbnRzLnB1Ymxpc2goJ2Nob29zZVRpdGxlJywgZXZlbnQpXG4gICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgY2FzZSAnY2hvb3NlVGl0bGVGb3JtJzogcHJvamVjdEV2ZW50cy5wdWJsaXNoKCdpbnB1dE9yTGlzdCcsIGV2ZW50KVxuICAgICAgICAgICBicmVhaztcbiAgICAgICAgIGNhc2UgJ2Nob29zZU5vdGVUeXBlJzogcHJvamVjdEV2ZW50cy5wdWJsaXNoKCdub3RlVG9Eb1R5cGUnLCBldmVudCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICBicmVhaztcbiAgICAgICAgIGNhc2UgJ2NhbmNlbFRpdGxlJyA6IHByb2plY3RFdmVudHMucHVibGlzaCgnYWJvcnROb3RlVHlwZUZvcm0nLCBldmVudCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgYnJlYWs7IFxuICAgICAgICAgY2FzZSAnY2FuY2VsQ2hvaWNlJyA6IHByb2plY3RFdmVudHMucHVibGlzaCgnYWJvcnROb3RlVHlwZUZvcm0nLGV2ZW50KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgYnJlYWs7XG4gICAgICAgICBjYXNlICdhZGRDaGVjayc6IHByb2plY3RFdmVudHMucHVibGlzaCgnbmV3Q2hlY2tJdGVtJywgZXZlbnQpO1xuICAgICAgICAgYnJlYWs7XG4gICAgICAgICBjYXNlICdhZGRDaGVja01vZCc6IHByb2plY3RFdmVudHMucHVibGlzaCgndXBkYXRlQ2hlY2tJdGVtJywgZXZlbnQpO1xuICAgICAgICAgYnJlYWs7XG4gICAgICAgICBjYXNlICdjYW5jZWwnOnByb2plY3RFdmVudHMucHVibGlzaCgnY2FuY2VsTm90ZScsZXZlbnQpO1xuICAgICAgICAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICBicmVhaztcbiAgICAgICAgIGNhc2UgJ2VkaXQnOiBwcm9qZWN0RXZlbnRzLnB1Ymxpc2goJ21vZGlmeUVsZW0nLGV2ZW50KTtcbiAgICAgICAgIGJyZWFrO1xuICAgICAgICAgY2FzZSAnc3VibWl0Tm90ZScgOiBwcm9qZWN0RXZlbnRzLnB1Ymxpc2goJ3N1Ym1pdE5vdGUnLCBldmVudCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICBicmVhaztcbiAgICAgICAgIGNhc2UgJ3JldmVydE1vZCcgOiBwcm9qZWN0RXZlbnRzLnB1Ymxpc2goJ3JldmVydCcsZXZlbnQpO1xuICAgICAgICAgYnJlYWs7XG4gICAgICAgICBjYXNlICdzdWJtaXRNb2QnOiBwcm9qZWN0RXZlbnRzLnB1Ymxpc2goJ3N1Ym1pdE1vZCcsZXZlbnQpO1xuICAgICAgICAgYnJlYWs7XG4gICAgICAgICBjYXNlICdyZW1vdmUnOiBwcm9qZWN0RXZlbnRzLnB1Ymxpc2goJ2RlbGV0ZVRvRG9Ob3RlJywgZXZlbnQpO1xuICAgICAgICAgYnJlYWs7XG4gICAgICAgICBjYXNlICdkZWxldGVDaGVjayc6IHByb2plY3RFdmVudHMucHVibGlzaCgnZGVsZXRlQ2hlY2snLCBldmVudCk7XG4gICAgICAgICBicmVhaztcblxuICAgICAgLy9hZGQgbW9yZS4gXG5cbn19XG4gXG4gICAgICAgXG5cblxuXG5leHBvcnQgeyBwcm9qZWN0RXZlbnRzIH0iLCJpbXBvcnQgeyBiYXNlQ3JlYXRlIH0gZnJvbSBcIi4vaGVscGVycy9iYXNlXCI7XG5cblxuLy9UZW1wbGF0ZSBmb3IgYSB0b2RvLW5vdGUgXG5cbmV4cG9ydCBjb25zdCBzaW5nbGV0b0RvTm90ZSA9IGZ1bmN0aW9uKG5hbWUpe1xuXG5cbiAgIGNvbnN0IF9ub3Rlc3RvcmFnZSA9IG5ldyBBcnJheSgpO1xuICAgY29uc3QgdG9Eb05vdGUgPSBiYXNlQ3JlYXRlKF9ub3Rlc3RvcmFnZSk7XG4gICBcbiAgIHRvRG9Ob3RlLm5hbWUgPSBuYW1lO1xuICAgdG9Eb05vdGUudHlwZSA9IHR5cGUoKTtcbiAgIFxuICAgXG4gICBjb25zdCB0eXBlID0gZnVuY3Rpb24odHlwZT0naW5wdXQnKXtcbiAgICAgIHJldHVybiB0eXBlXG4gICB9XG4gICBjb25zdCBhZGROb3RlID0gZnVuY3Rpb24obm90ZSl7XG4gICAgICB0b0RvTm90ZS5hZGQobm90ZSk7XG4gICB9XG5cbiAgIGNvbnN0IHJlbW92ZU5vdGUgPSBmdW5jdGlvbihpbmRleCl7XG4gICAgICBjb25zdCBub3RlID0gX25vdGVzdG9yYWdlW2luZGV4XTtcbiAgICAgIHRvRG9Ob3RlLnJlbW92ZShub3RlLCBpbmRleCk7ICBcbiAgIH1cblxuICAgY29uc3QgbW92ZU5vdGUgPSBmdW5jdGlvbihpbmRleCwgdGFyZ2V0KXtcbiAgICAgIHRvRG9Ob3RlLm1vdmUoaW5kZXgsIHRhcmdldCk7XG4gICAgICAgIFxuICAgfVxuICAgXG4gICByZXR1cm4gdG9Eb05vdGVcbn1cblxuLy9cblxuLy9UZW1wbGF0ZSBmb3IgYSBzaW5nbGUgcHJvamVjdFxuXG5leHBvcnQgY29uc3Qgc2luZ2xlUHJvaiA9IGZ1bmN0aW9uKG5hbWUpe1xuXG4gICBjb25zdCBfcHJvanN0b3JhZ2UgPSBuZXcgQXJyYXkoKTtcbiAgIGNvbnN0IHByb2plY3QgPSBiYXNlQ3JlYXRlKF9wcm9qc3RvcmFnZSk7XG4gICBwcm9qZWN0Lm5hbWUgPSBuYW1lO1xuXG4gICBjb25zdCBhZGRUb1Byb2plY3QgPSBmdW5jdGlvbihuYW1lKXtcbiAgICAgIGNvbnN0IHRvZG8gPSBzaW5nbGV0b0RvTm90ZShuYW1lKVxuICAgICAgcHJvamVjdC5hZGQodG9kbyk7XG4gICB9XG5cbiAgIGNvbnN0IHJlbW92ZUZyb21Qcm9qZWN0ID0gZnVuY3Rpb24oaW5kZXgpe1xuICAgICAgY29uc3QgdG9kbyA9IHByb2pzdG9yYWdlW2luZGV4XTtcbiAgICAgIHByb2plY3QucmVtb3ZlKHRvZG8sIGluZGV4KTsgIFxuICAgfSBcblxuICAgY29uc3QgbW92ZXRvRG8gPSBmdW5jdGlvbihpbmRleCwgdGFyZ2V0KXtcbiAgICAgIHByb2plY3QubW92ZShpbmRleCwgdGFyZ2V0KTtcbiAgICAgICAgIFxuICAgfVxuXG4gICByZXR1cm4gcHJvamVjdFxuXG59IFxuXG4vL1xuXG4vL092ZXJhbGwgSW50ZXJmYWNlXG5cbmV4cG9ydCBjb25zdCBtYWluSW50ZXJmYWNlID0gZnVuY3Rpb24oKXtcbiAgIFxuICAgY29uc3QgX292ZXJhbGxTdG9yYWdlID0gbmV3IEFycmF5KCk7XG4gICBjb25zdCBhbGxUb0RvID0gYmFzZUNyZWF0ZShfb3ZlcmFsbFN0b3JhZ2UpO1xuXG4gICBjb25zdCBuZXdQcm9qID0gZnVuY3Rpb24obmFtZSl7XG4gICAgICBjb25zdCBwcm9qID0gc2luZ2xlUHJvaihuYW1lKTtcbiAgICAgIGFsbFRvRG8uYWRkKHByb2opO1xuXG4gICB9XG5cblxuICAgY29uc3QgcmVtb3ZlUHJvaiA9IGZ1bmN0aW9uKGluZGV4KXtcbiAgICAgIGNvbnN0IHByb2ogPSBfb3ZlcmFsbFN0b3JhZ2VbaW5kZXhdO1xuICAgICAgYWxsVG9Eby5yZW1vdmUocHJvaik7XG4gICB9XG4gICAgXG4gICBjb25zdCBtb3ZlUHJvaiA9IGZ1bmN0aW9uKGluZGV4LCB0YXJnZXQpe1xuICAgICAgYWxsVG9Eby5tb3ZlKGluZGV4LCB0YXJnZXQpO1xuXG4gICB9XG4gICBcbiAgIGNvbnN0IHRyYW5zZmVyVG9Mb2NhbFN0b3JhZ2UgPSBmdW5jdGlvbigpe1xuICAgICAgICAgcmV0dXJuIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdhY2Nlc3MnLCBKU09OLnN0cmluZ2lmeShfb3ZlcmFsbFN0b3JhZ2UpKVxuICAgfVxuXG4gIFxuICAgXG4gICByZXR1cm4ge1xuICAgICAgbmV3UHJvaixcbiAgICAgIHRyYW5zZmVyVG9Mb2NhbFN0b3JhZ2VcbiAgICAgIC8vanVzdCB0aGlzIGZvciBub3cuXG4gICB9XG4gIFxuICAgXG59XG5cbiIsImltcG9ydCB7IERPTUdlbmVyYWwgfSBmcm9tIFwiLi9oZWxwZXJzL0RPTVwiO1xuaW1wb3J0IHsgcHJvamVjdEV2ZW50cyB9IGZyb20gXCIuL3Byb2plY3RldmVudHNcIjtcblxuXG5leHBvcnQgY29uc3QgdGVtcGxhdGVET01TdHJ1Y3RzID0gZnVuY3Rpb24gKCl7XG5cbiAgICBjb25zdCBET00gPSBET01HZW5lcmFsKClcbiAgICBjb25zdCBkZWxlZ2F0b3IgPSBwcm9qZWN0RXZlbnRzLmRlbGVnYXRvclxuXG4gICAgY29uc3QgY3JlYXRlUHJvamVjdCA9IGZ1bmN0aW9uKG5hbWUpe1xuICAgICAgICAgaWYgKG5hbWUgPT09ICcnKXtyZXR1cm59IFxuICAgICAgICAgY29uc3QgcmVmZXJlbmNlID0gRE9NLnNlbGVjdEVsZW0oJy5wcm9qZWN0Jyk7IFxuICAgICAgICAgY29uc3QgcHJvaiA9IERPTS5lbGVtZW50SW5pdCgnZGl2Jyx7J2lkJzogYCR7bmFtZX0ke3JlZmVyZW5jZS5sZW5ndGh9YCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdkYXRhLWlkJzpgJHtyZWZlcmVuY2UubGVuZ3RofWAsIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2NsYXNzJzogJ3Byb2plY3QnfSxuYW1lXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgIGNvbnN0IHJlbW92ZSA9IERPTS5lbGVtZW50SW5pdCgnYnV0dG9uJywgeydjbGFzcyc6J3JlbW92ZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2lkJzpgcmVtb3ZlJHtwcm9qLmRhdGFzZXQuaWR9YH0sICdYJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgY29uc3QgYWRkVG9Eb0xpc3RCdG4gPSBET00uZWxlbWVudEluaXQoJ2J1dHRvbicsIHsnY2xhc3MnOiAnYWRkdG9Eb0xpc3QnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnaWQnOiBgYWRkJHtET00uc2VsZWN0RWxlbSgnLnByb2plY3QnKS5sZW5ndGh9YH0sICdBZGQgVG8tRG8gTGlzdCcpO1xuICAgICAgICBjb25zdCBtb2RpZnkgPSBET00uZWxlbWVudEluaXQoJ2J1dHRvbicsIHsnY2xhc3MnOidlZGl0J30sJ0VkaXQnKTtcbiAgICAgICAgcHJvai5hcHBlbmRDaGlsZChyZW1vdmUpO1xuICAgICAgICBwcm9qLmFwcGVuZENoaWxkKG1vZGlmeSk7XG4gICAgICAgIHByb2ouYXBwZW5kQ2hpbGQoRE9NLmVsZW1lbnRJbml0KCdkaXYnLHsgJ2NsYXNzJzonbm9uZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnaWQnOmBjb250YWluZXIke3JlZmVyZW5jZS5sZW5ndGh9YH0pKTtcbiAgICAgICAgcHJvai5hcHBlbmRDaGlsZChhZGRUb0RvTGlzdEJ0bik7XG5cbiAgICAgICAgXG4gICAgICAgIHByb2oub25jbGljayA9IGRlbGVnYXRvcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgY29uc3QgY29udGFpbmVyID0gRE9NLnNlbGVjdEVsZW0oJyNjb250YWluZXInKTtcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHByb2opO1xuICAgICAgICBcbiAgICAgfVxuICAgICBcblxuICAgICBjb25zdCBjcmVhdGVUb0RvTm90ZSA9IGZ1bmN0aW9uKGNob3NlblR5cGUpe1xuICAgICAgICBjb25zdCBpbnB1dCA9IERPTS5zZWxlY3RFbGVtKCcjdGVtcG9yYXJ5SW5wdXQnKSBcbiAgICAgICAgY29uc3QgcHJvamVjdCA9IGlucHV0LnBhcmVudEVsZW1lbnQ7XG4gICAgICAgIGNvbnN0IGZvcm1SZWZlcmVuY2UgPSBET00uc2VsZWN0RWxlbSgnLnRvRG9Ob3RlSW5wdXQnKVxuICAgICAgICBjb25zdCBjb250YWluZXIgPSBET00uc2VsZWN0RWxlbShgI2NvbnRhaW5lciR7cHJvamVjdC5kYXRhc2V0LmlkfWApO1xuICAgICAgICBcbiAgICAgICAgY29uc3QgZm9ybSA9IERPTS5lbGVtZW50SW5pdCgnZm9ybScseydjbGFzcyc6ICd0b0RvTm90ZUlucHV0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnaWQnOiBgdG9Eb05vdGVGb3JtJHtwcm9qZWN0LmRhdGFzZXQuaWR9JHtmb3JtUmVmZXJlbmNlLmxlbmd0aH1gLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnZGF0YS1pZCc6YCR7Zm9ybVJlZmVyZW5jZS5sZW5ndGh9YCB9KVxuICAgICAgICBjb25zdCBzdWJtaXQgPSBET00uZWxlbWVudEluaXQoJ2J1dHRvbicseyd0eXBlJzonc3VibWl0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdpZCc6ICdzdWJtaXROb3RlJywgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdjbGFzcyc6J3N1Ym1pdE5vdGUgbm9uZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCdTdWJtaXQgTm90ZScpXG4gICAgICAgIGNvbnN0IGNhbmNlbCA9IERPTS5lbGVtZW50SW5pdCgnYnV0dG9uJywgeydjbGFzcyc6J2NhbmNlbCBub25lJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnaWQnOidjYW5jZWxOb3RlJ30sICdDYW5jZWwnKTtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IHJlbW92ZSA9IERPTS5lbGVtZW50SW5pdCgnYnV0dG9uJywgeydjbGFzcyc6J3JlbW92ZSBub25lJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdpZCc6YHJlbW92ZSR7cHJvamVjdC5kYXRhc2V0LmlkfSR7Zm9ybVJlZmVyZW5jZS5sZW5ndGh9YH0sICdYJyk7XG4gICAgICAgIGNvbnN0IHByb3ZUaXRsZSA9IERPTS5zZWxlY3RFbGVtKCcjcHJvdlRpdGxlJyk7XG4gICAgICAgIGNvbnN0IHRpdGxlID0gRE9NLmVsZW1lbnRJbml0KCdsYWJlbCcsIHsnY2xhc3MnOidpdGVtVGl0bGUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2Zvcic6J2l0ZW1UaXRsZScsICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICduYW1lJzonaXRlbVRpdGxlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2lkJzpgaXRlbVRpdGxlJHtwcm9qZWN0LmRhdGFzZXQuaWR9JHtmb3JtUmVmZXJlbmNlLmxlbmd0aH1gLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LGAke3Byb3ZUaXRsZS52YWx1ZX1gLClcbiAgICAgICAgY29uc3QgbW9kaWZ5ID0gRE9NLmVsZW1lbnRJbml0KCdidXR0b24nLCB7J2NsYXNzJzonZWRpdCd9LCdFZGl0Jyk7XG5cbiAgICAgICAgXG4gICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQoc3VibWl0KTtcbiAgICAgICAgZm9ybS5hcHBlbmRDaGlsZChjYW5jZWwpO1xuICAgICAgICBmb3JtLmFwcGVuZENoaWxkKHJlbW92ZSk7XG4gICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQodGl0bGUpO1xuICAgICAgICB0aXRsZS5hcHBlbmRDaGlsZChtb2RpZnkpXG4gICAgICAgIHByb3ZUaXRsZS5yZW1vdmUoKTsgIFxuICAgICAgICBcblxuICAgICAgICBmb3JtLm9uc3VibWl0ID0gZGVsZWdhdG9yOyAgIFxuICAgICAgICAgXG4gICAgICAgIGNvbnRhaW5lci5jbGFzc0xpc3QudG9nZ2xlKCdub25lJywgZmFsc2UpO1xuICAgICAgICBcbiAgICAgICAgXG4gICAgICAgICBcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGZvcm0pO1xuXG4gICAgICAgIGNvbnN0IF9nZW5lcmF0ZUNoZWNrbGlzdCA9IGZ1bmN0aW9uKCl7IFxuICAgICAgICAgICBjb25zdCBhZGQgPSBET00uZWxlbWVudEluaXQoJ2J1dHRvbicsIHsnY2xhc3MnOidhZGRDaGVjaycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdpZCc6YGFkZENoZWNrJHtwcm9qZWN0LmRhdGFzZXQuaWR9JHtmb3JtUmVmZXJlbmNlLmxlbmd0aH1gLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnZGF0YS1jbGFzcyc6YGNoaWxkJHtmb3JtUmVmZXJlbmNlLmxlbmd0aH1gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sICdBZGQgSXRlbScpOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICBmb3JtLmFwcGVuZENoaWxkKGFkZCk7XG5cbiAgICAgICAgICAgIGZvcm0uY2xhc3NMaXN0LmFkZCgnY2hlY2tib3gnKVxuICAgICAgIH1cblxuICAgICAgIGNvbnN0IF9nZW5lcmF0ZUZyZWVGb3JtID0gZnVuY3Rpb24oKXtcblxuICAgICAgICBpbnB1dC52YWx1ZSA9ICcnO1xuICAgICAgICBpbnB1dC5jbGFzc0xpc3QudG9nZ2xlKCdub25lJyxmYWxzZSk7XG4gICAgICAgIGZvcm0uY2xhc3NMaXN0LmFkZCgnZnJlZUZvcm0nKTtcblxuICAgICAgICBzdWJtaXQuY2xhc3NMaXN0LnRvZ2dsZSgnbm9uZScsZmFsc2UpO1xuICAgICAgICBjYW5jZWwuY2xhc3NMaXN0LnRvZ2dsZSgnbm9uZScsZmFsc2UpO1xuICAgICAgICBpbnB1dC5mb2N1cygpO1xuICAgICAgICBcbiAgICAgICB9XG5cbiAgICAgICBjaG9zZW5UeXBlID09PSAnQ2hlY2tsaXN0JyA/IF9nZW5lcmF0ZUNoZWNrbGlzdCgpIDogX2dlbmVyYXRlRnJlZUZvcm0oKTsgIFxuXG4gICAgICAgcmV0dXJuIFxuXG4gICAgIH1cblxuXG4gICAgIGNvbnN0IGRpc2FibGVCdG5zID0gZnVuY3Rpb24odHJndD0nbi9hJyl7XG4gICAgICAgIGNvbnN0IGFsbEJ0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdidXR0b24nKTtcbiAgICAgICAgYWxsQnRucy5mb3JFYWNoKGJ0biA9PiAgYnRuID09PSB0cmd0IHx8IGJ0bi5jbGFzc0xpc3QuY29udGFpbnMoJ25vbmUnKSA/IGJ0bi5kaXNhYmxlZCA9IGZhbHNlIDogYnRuLmRpc2FibGVkID0gdHJ1ZSk7XG5cbiAgICAgICAgY29uc3QgYWxsRWRpdGFibGVzID0gRE9NLnNlbGVjdEVsZW0oJy5lZGl0Jyk7XG4gICAgICAgIGFsbEVkaXRhYmxlcy5mb3JFYWNoKGl0bSA9PiAgaXRtID09PSB0cmd0IHx8IGl0bS5jbGFzc0xpc3QuY29udGFpbnMoJ25vbmUnKSA/IGZhbHNlIDogaXRtLmNsYXNzTGlzdC50b2dnbGUoJ2Rpc2FibGVkRWRpdCcsIHRydWUpKTtcbiAgICAgICAgY29uc3QgYWxsRGlzYWJsZWQgPSBET00uc2VsZWN0RWxlbSgnLmRpc2FibGVkRWRpdCcpO1xuICAgICAgICBhbGxEaXNhYmxlZC5mb3JFYWNoKGl0bSA9PiBpdG0uY2xhc3NMaXN0LnRvZ2dsZSgnZWRpdCcsZmFsc2UpKTtcbiAgICB9XG4gICAgXG4gICAgXG4gICAgY29uc3QgZW5hYmxlQnRucyA9IGZ1bmN0aW9uKCl7XG4gICAgICAgIGNvbnN0IGFsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2J1dHRvbicpO1xuICAgICAgICBhbGwuZm9yRWFjaChidG4gPT4gYnRuLmRpc2FibGVkID0gZmFsc2UpO1xuXG4gICAgICAgIGNvbnN0IGVkaXRzID0gRE9NLnNlbGVjdEVsZW0oJy5kaXNhYmxlZEVkaXQnKTtcbiAgICAgICAgZWRpdHMuZm9yRWFjaChpdG0gPT4gaXRtLmNsYXNzTGlzdC50b2dnbGUoJ2VkaXQnLHRydWUpKTtcbiAgICAgICAgZWRpdHMuZm9yRWFjaChpdG0gPT4gaXRtLmNsYXNzTGlzdC50b2dnbGUoJ2Rpc2FibGVkRWRpdCcsZmFsc2UpKTtcbiAgICAgICAgY29uc3QgZGVsZXRlQnRucyA9IERPTS5zZWxlY3RFbGVtKCcuZGVsZXRlQ2hlY2snKTtcbiAgICAgICAgZGVsZXRlQnRucy5mb3JFYWNoKGJ0biA9PiBidG4uY2xhc3NMaXN0LnRvZ2dsZSgnbm9uZScsZmFsc2UpKTsgICAgICAgIFxuICAgIH1cblxuICAgICBjb25zdCBtb2RpZnlFbGVtZW50ID0gZnVuY3Rpb24oZXZlbnQpe1xuXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgXG4gICAgICAgICBjb25zdCBmb3JtID0gZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQ7XG4gICAgICAgICBjb25zdCBtb2RJbnB1dCA9IChmdW5jdGlvbigpe1xuICAgICAgICAgaWYgKGZvcm0uY2xhc3NMaXN0LmNvbnRhaW5zKCdmcmVlRm9ybScpKXsgICAgXG4gICAgICAgICAgICBsZXQgbW9kVGV4dEFyZWEgPSBET00uZWxlbWVudEluaXQoJ3RleHRhcmVhJyx7J2xhYmVsJzonZnJlZUZvcm0nLFxuICAgICAgICAgICAgJ25hbWUnOidmcmVlRm9ybScsXG4gICAgICAgICAgICAnYXV0b2NvbXBsZXRlJzonb2ZmJyxcbiAgICAgICAgICAgICdyZXF1aXJlZCc6J3JlcXVpcmVkJyxcbiAgICAgICAgICAgICdpZCc6J21vZElucHV0JyxcbiAgICAgICAgICAgJ2NsYXNzJzogJ21vZElucHV0JyxcbiAgICAgICAgICAgJ3Jvd3MnIDogJzMnLFxuICAgICAgICAgICAnY29scycgOiAnMzAnfSk7XG5cbiAgICAgICAgICAgcmV0dXJuIG1vZFRleHRBcmVhOyAgXG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgbGV0IG1vZENoZWNrSW5wdXQgPSBET00uZWxlbWVudEluaXQoJ2lucHV0Jyx7J3R5cGUnOid0ZXh0JyxcbiAgICAgICAgICAgICdhdXRvY29tcGxldGUnOidvZmYnLFxuICAgICAgICAgICAgJ3JlcXVpcmVkJzoncmVxdWlyZWQnLFxuICAgICAgICAgICAgJ2NsYXNzJzogJ21vZElucHV0JyxcbiAgICAgICAgICAgICAnaWQnOidtb2RJbnB1dCcsfSk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgICByZXR1cm4gbW9kQ2hlY2tJbnB1dCAgIFxuICAgICAgICB9IFxuICAgIH0pKClcblxuICAgICAgICAgY29uc3Qgc3VibWl0ID0gRE9NLmVsZW1lbnRJbml0KCdidXR0b24nLHsndHlwZSc6J3N1Ym1pdCcsXG4gICAgICAgICdjbGFzcyc6J3N1Ym1pdE1vZCcsXG4gICAgICAgICAnaWQnOiAnc3VibWl0TW9kJ1xuICAgICAgICAgfSwnU3VibWl0IE5vdGUnKVxuICAgICAgICAgY29uc3QgcmV2ZXJ0ID0gRE9NLmVsZW1lbnRJbml0KCdidXR0b24nLHtcbiAgICAgICAgICdjbGFzcyc6J3JldmVydE1vZCcsXG4gICAgICAgICAnZGF0YS10cmFuc2Zlcic6YCR7ZXZlbnQudGFyZ2V0LmZpcnN0Q2hpbGQubm9kZVZhbHVlfWAgLy90ZW1wb3JhcnksIHVwZGF0ZSB0byB1c2UgbG9jYWwgc3RvcmFnZSAmIGJhY2tlbmRcbiAgICAgICAgICB9LCdSZXZlcnQgQmFjaycpIFxuICAgICAgICAgICAgICAgICBcbiAgICAgICAgIGlmIChldmVudC50YXJnZXQucGFyZW50RWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoJ2l0ZW1UaXRsZScpIHx8IGV2ZW50LnRhcmdldC5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygncHJvamVjdCcpKXtcbiAgICAgICAgICAgICByZXZlcnQuZGF0YXNldC50cmFuc2ZlciA9IGV2ZW50LnRhcmdldC5wYXJlbnRFbGVtZW50LmZpcnN0Q2hpbGQubm9kZVZhbHVlXG4gICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXG5cbiAgICAgICAgZGlzYWJsZUJ0bnMoKTtcblxuICAgICAgICAgY29uc3QgX3JlcGxhY2VXaXRoSW5wdXQgPSAoZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIGlmKGV2ZW50LnRhcmdldC5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygnaXRlbVRpdGxlJykgfHwgZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdwcm9qZWN0Jykpe1xuICAgICAgICAgICAgICAgIG1vZElucHV0LnZhbHVlID0gZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQuZmlyc3RDaGlsZC5ub2RlVmFsdWU7XG4gICAgICAgICAgICAgICAgZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQuZmlyc3RDaGlsZC5ub2RlVmFsdWUgPSAnJztcbiAgICAgICAgICAgICAgICBldmVudC50YXJnZXQucGFyZW50RWxlbWVudC5hcHBlbmRDaGlsZChtb2RJbnB1dCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNle1xuICAgICAgICAgICAgICAgIG1vZElucHV0LnZhbHVlID0gZXZlbnQudGFyZ2V0LmZpcnN0Q2hpbGQubm9kZVZhbHVlXG4gICAgICAgICAgICAgICAgZXZlbnQudGFyZ2V0LnJlcGxhY2VXaXRoKG1vZElucHV0KTsgXG5cbiAgICAgICAgICAgIH0gXG4gICAgICAgICAgICBtb2RJbnB1dC5pbnNlcnRBZGphY2VudEVsZW1lbnQoJ2FmdGVyZW5kJyxzdWJtaXQpO1xuICAgICAgICAgICAgc3VibWl0Lmluc2VydEFkamFjZW50RWxlbWVudCgnYWZ0ZXJlbmQnLHJldmVydCk7XG4gICAgICAgfSkoKVxuICAgICAgICBcbiAgICAgfVxuXG4gICAgIGNvbnN0IHN1Ym1pdE1vZGlmaWVkRWxlbWVudCA9IGZ1bmN0aW9uKGV2ZW50KXtcbiAgICAgICAgXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGNvbnN0IGZvcm0gPSBldmVudC50YXJnZXQucGFyZW50RWxlbWVudDtcbiAgICAgICAgY29uc3QgaW5wdXQgPSBldmVudC50YXJnZXQucHJldmlvdXNFbGVtZW50U2libGluZztcbiAgICAgICAgY29uc3QgcmV2ZXJ0ID0gZXZlbnQudGFyZ2V0Lm5leHRFbGVtZW50U2libGluZztcbiAgICAgICAgY29uc3QgbGFiZWwgPSBET00uZWxlbWVudEluaXQoJ2xhYmVsJywgeydmb3InOiBgJHtpbnB1dC52YWx1ZX1gLCAnY2xhc3MnOidlZGl0J30sYCR7aW5wdXQudmFsdWV9YCk7XG4gICAgICAgIGNvbnN0IHRleHQgPSBET00uZWxlbWVudEluaXQoJ3AnLCB7J2NsYXNzJzondGV4dCBlZGl0J30sIGAke2lucHV0LnZhbHVlfWApO1xuICAgICAgICBjb25zdCBkZWwgPSBET00uZWxlbWVudEluaXQoJ2J1dHRvbicsIHsnY2xhc3MnOiAnZGVsZXRlQ2hlY2sgbm9uZSd9LCdkZWxldGUnICkgXG5cbiAgICAgICAgXG4gICAgICAgIGlmKGlucHV0LnZhbHVlID09PSAnJyl7cmV0dXJufTtcblxuICAgICAgICBpZihmb3JtLmNsYXNzTGlzdC5jb250YWlucygnY2hlY2tib3gnKSl7XG4gICAgICAgICAgICBpbnB1dC5yZXBsYWNlV2l0aChsYWJlbCk7XG4gICAgICAgICAgICBsYWJlbC5hcHBlbmRDaGlsZChkZWwpO1xuXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoZm9ybS5jbGFzc0xpc3QuY29udGFpbnMoJ2ZyZWVGb3JtJykpe1xuICAgICAgICAgICAgaW5wdXQucmVwbGFjZVdpdGgodGV4dCk7IFxuICAgICAgICB9XG5cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjb25zdCB2YWx1ZSA9IGlucHV0LnZhbHVlXG4gICAgICAgICAgICBldmVudC50YXJnZXQucGFyZW50RWxlbWVudC5maXJzdENoaWxkLm5vZGVWYWx1ZSA9IHZhbHVlO1xuICAgICAgICAgICAgaW5wdXQucmVtb3ZlKCk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGVuYWJsZUJ0bnMoKTtcbiAgICBcbiAgICAgICAgcmV2ZXJ0LnJlbW92ZSgpO1xuICAgICAgICBldmVudC50YXJnZXQucmVtb3ZlKCk7XG5cblxuICAgICAgICByZXR1cm4gICAgICAgICBcbiAgICAgfVxuXG4gICAgIGNvbnN0IHJldmVydE1vZGlmaWVkRWxlbWVudCA9IGZ1bmN0aW9uKGV2ZW50KXtcbiAgICAgICAgXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGNvbnN0IGZvcm0gPSBldmVudC50YXJnZXQucGFyZW50RWxlbWVudDtcbiAgICAgICAgY29uc3Qgc3VibWl0ID0gZXZlbnQudGFyZ2V0LnByZXZpb3VzRWxlbWVudFNpYmxpbmc7XG4gICAgICAgIGNvbnN0IGlucHV0ID0gc3VibWl0LnByZXZpb3VzRWxlbWVudFNpYmxpbmc7XG4gICAgICAgIGNvbnN0IGxhYmVsID0gRE9NLmVsZW1lbnRJbml0KCdsYWJlbCcsIHsnZm9yJzogYCR7ZXZlbnQudGFyZ2V0LmRhdGFzZXQudHJhbnNmZXJ9YCwgJ2NsYXNzJzonZWRpdCd9LGAke2V2ZW50LnRhcmdldC5kYXRhc2V0LnRyYW5zZmVyfWApOyAvL3RlbXBvcmFyeSwgdXBkYXRlIHRvIHVzZSBsb2NhbCBzdG9yYWdlICYgYmFja2VuZFxuICAgICAgICBjb25zdCB0ZXh0ID0gRE9NLmVsZW1lbnRJbml0KCdwJywgeydjbGFzcyc6J3RleHQgZWRpdCd9LCBgJHtldmVudC50YXJnZXQuZGF0YXNldC50cmFuc2Zlcn1gKTsgLy90ZW1wb3JhcnksIHVwZGF0ZSB0byB1c2UgbG9jYWwgc3RvcmFnZSAmIGJhY2tlbmRcbiAgICAgICAgY29uc3QgZGVsID0gRE9NLmVsZW1lbnRJbml0KCdidXR0b24nLCB7J2NsYXNzJzogJ2RlbGV0ZUNoZWNrIG5vbmUnfSwnZGVsZXRlJyApIFxuXG5cbiAgICAgICAgaWYoZm9ybS5jbGFzc0xpc3QuY29udGFpbnMoJ2NoZWNrYm94Jykpe1xuICAgICAgICAgICAgaW5wdXQucmVwbGFjZVdpdGgobGFiZWwpO1xuICAgICAgICAgICAgbGFiZWwuYXBwZW5kQ2hpbGQoZGVsKTtcblxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGZvcm0uY2xhc3NMaXN0LmNvbnRhaW5zKCdmcmVlRm9ybScpKXtcbiAgICAgICAgICAgIGlucHV0LnJlcGxhY2VXaXRoKHRleHQpOyBcbiAgICAgICAgfVxuXG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgdmFsdWUgPSBldmVudC50YXJnZXQuZGF0YXNldC50cmFuc2ZlcjsgLy90ZW1wb3JhcnksIHVwZGF0ZSB0byB1c2UgbG9jYWwgc3RvcmFnZSAmIGJhY2tlbmRcbiAgICAgICAgICAgIGV2ZW50LnRhcmdldC5wYXJlbnRFbGVtZW50LmZpcnN0Q2hpbGQubm9kZVZhbHVlID0gdmFsdWU7XG4gICAgICAgICAgICBpbnB1dC5yZW1vdmUoKTtcbiAgICAgICAgfVxuICAgICAgICAgXG4gICAgICAgIGVuYWJsZUJ0bnMoKTtcbiAgICBcbiAgICAgICAgc3VibWl0LnJlbW92ZSgpO1xuICAgICAgICBldmVudC50YXJnZXQucmVtb3ZlKCk7XG4gICAgICAgIHJldHVybiAgICAgICAgIFxuICAgICB9XG4gICAgIFxuICAgICBcbiAgICBjb25zdCBjaG9vc2VUb0RvVGl0bGVGb3JtID0gZnVuY3Rpb24oZXZlbnQpe1xuICAgICAgICBjb25zdCBkb21Qcm9qZWN0ID0gZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQ7XG5cbiAgICAgICAgY29uc3QgX2dlbmVyYXRlVGl0bGVGb3JtID0gKGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAgY29uc3QgZm9ybSA9ICBET00uZWxlbWVudEluaXQoJ2Zvcm0nLCB7J2NsYXNzJzogJ2Nob29zZVRpdGxlRm9ybScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdpZCc6ICdjaG9vc2VUaXRsZUZvcm0nfSlcbiAgICAgICAgICAgICBjb25zdCBsYWJlbCA9IERPTS5lbGVtZW50SW5pdCgnbGFiZWwnLHsnZm9yJzonY2hvb3NlWW91clRpdGxlJ30sJ0Nob29zZSBZb3VyIE5vdGVcXCdzIFRpdGxlJyk7XG4gIFxuICAgICAgICAgICAgIGNvbnN0IHRpdGxlSW5wdXQgPSBET00uZWxlbWVudEluaXQoJ2lucHV0Jyx7J3R5cGUnOid0ZXh0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdhdXRvY29tcGxldGUnOidvZmYnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdyZXF1aXJlZCc6J3JlcXVpcmVkJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnaWQnOidwcm92VGl0bGUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdjbGFzcyc6ICdwcm92VGl0bGUnfSwpO1xuICAgICAgICAgICAgY29uc3Qgc3VibWl0VGl0bGUgPSBET00uZWxlbWVudEluaXQoJ2J1dHRvbicsIHsndHlwZSc6J3N1Ym1pdCd9LCAnU3VibWl0Jyk7XG4gICAgICAgICAgICBjb25zdCBjYW5jZWxUaXRsZSA9IERPTS5lbGVtZW50SW5pdCgnYnV0dG9uJywgeydjbGFzcyc6J2NhbmNlbFRpdGxlJ30sICdDYW5jZWwnKTtcbiAgICAgICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQobGFiZWwpO1xuICAgICAgICAgICAgZm9ybS5hcHBlbmRDaGlsZCh0aXRsZUlucHV0KTtcbiAgICAgICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQoc3VibWl0VGl0bGUpO1xuICAgICAgICAgICAgZm9ybS5hcHBlbmRDaGlsZChjYW5jZWxUaXRsZSk7XG4gICAgICAgICAgICBmb3JtLm9uc3VibWl0ID0gZGVsZWdhdG9yO1xuICAgICAgICAgICAgcmV0dXJuIGZvcm1cbiAgICAgICAgfSkoKSBcbiAgICAgICAgXG4gICAgICAgIGRvbVByb2plY3QuYXBwZW5kQ2hpbGQoX2dlbmVyYXRlVGl0bGVGb3JtKVxuICAgICAgICByZXR1cm5cblxuICAgIH1cbiAgICBjb25zdCBzdWJtaXRUb0RvVGl0bGUgPSBmdW5jdGlvbihldmVudCl7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7IFxuICAgICAgICBjb25zdCBwcm92VGl0bGUgPSBET00uc2VsZWN0RWxlbSgnI3Byb3ZUaXRsZScpO1xuICAgICAgICBjb25zdCBkb21Qcm9qZWN0ID0gZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudDtcbiAgICAgICAgZG9tUHJvamVjdC5hcHBlbmRDaGlsZChwcm92VGl0bGUpO1xuICAgICAgICBwcm92VGl0bGUuY2xhc3NMaXN0LnRvZ2dsZSgnbm9uZScsdHJ1ZSk7XG4gICAgICAgIFxuICAgICAgICBldmVudC50YXJnZXQuY2xhc3NMaXN0LnRvZ2dsZSgnbm9uZScsdHJ1ZSk7XG5cbiAgICAgICAgcmV0dXJuXG4gICAgICAgIFxuICAgIH1cbiAgICAgXG4gICAgIGNvbnN0IGNob29zZU5vdGVUeXBlID0gZnVuY3Rpb24oZXZlbnQpe1xuICAgICAgICBjb25zdCBkb21Qcm9qZWN0ID0gZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQ7XG5cbiAgICAgICAgIGNvbnN0IGZvcm0gPSAgRE9NLmVsZW1lbnRJbml0KCdmb3JtJywgeydjbGFzcyc6ICdjaG9vc2VOb3RlVHlwZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2lkJzogJ25vdGVUeXBlRm9ybScgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgIGNvbnN0IGxhYmVsID0gRE9NLmVsZW1lbnRJbml0KCdsYWJlbCcseydmb3InOidjaG9vc2VOb3RlVHlwZSd9LCdDaG9vc2UgWW91ciBOb3RlIFR5cGUnKTtcbiAgICAgICAgIGNvbnN0IHNlbGVjdCA9IERPTS5lbGVtZW50SW5pdCgnc2VsZWN0Jyx7J2NsYXNzJzonc2VsZWN0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnaWQnOiAnc2VsZWN0JyB9KTtcbiAgICAgICAgIGNvbnN0IG9wdEdyb3VwID0gRE9NLmVsZW1lbnRJbml0KCdvcHRncm91cCcseydsYWJlbCc6ICdOb3RlIE9wdGlvbnMnfSwgJ0Nob29zZSB5b3VyIG5vdGUgdHlwZScpO1xuICAgICAgICAgY29uc3QgY2hlY2tsaXN0T3B0ID0gRE9NLmVsZW1lbnRJbml0KCdvcHRpb24nLHsnbmFtZSc6ICdjaGVja2xpc3QnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2NsYXNzJzogJ2NoZWNrbGlzdCd9LCdDaGVja2xpc3QnKTtcbiAgICAgICAgIGNvbnN0IGlucHV0T3B0ID0gRE9NLmVsZW1lbnRJbml0KCdvcHRpb24nLHsnbmFtZSc6ICdpbnB1dCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdjbGFzcyc6ICdpbnB1dCd9LCdGcmVlZm9ybScpO1xuICAgICAgICAgY29uc3QgY2hvaWNlID0gRE9NLmVsZW1lbnRJbml0KCdidXR0b24nLCB7J3R5cGUnOidzdWJtaXQnfSwgJ1N1Ym1pdCcpO1xuICAgICAgICAgY29uc3QgY2FuY2VsID0gRE9NLmVsZW1lbnRJbml0KCdidXR0b24nLCB7J2NsYXNzJzonY2FuY2VsQ2hvaWNlJ30sICdDYW5jZWwnKTtcbiAgICAgICAgIFxuICAgICAgICAgc2VsZWN0LmFwcGVuZENoaWxkKG9wdEdyb3VwKTtcbiAgICAgICAgIG9wdEdyb3VwLmFwcGVuZENoaWxkKGNoZWNrbGlzdE9wdCk7XG4gICAgICAgICBvcHRHcm91cC5hcHBlbmRDaGlsZChpbnB1dE9wdCk7XG4gICAgICAgICBmb3JtLmFwcGVuZENoaWxkKGxhYmVsKTtcbiAgICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQoc2VsZWN0KTtcbiAgICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQoRE9NLmVsZW1lbnRJbml0KCdicicpKTtcbiAgICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQoY2hvaWNlKTtcbiAgICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQoY2FuY2VsKVxuXG4gICAgICAgICBkaXNhYmxlQnRucygpO1xuICAgICAgICAgZm9ybS5vbnN1Ym1pdCA9IGRlbGVnYXRvcjtcbiAgICAgICAgIGRvbVByb2plY3QuYXBwZW5kQ2hpbGQoZm9ybSk7XG5cbiAgICAgICAgIHJldHVybiBmb3JtXG4gICAgfVxuICAgICBcbiAgICAgY29uc3QgcmV2ZWFsQ3JlYXRlRm9ybSA9IGZ1bmN0aW9uKCl7XG4gICAgICAgIGxldCBoaWRkZW4gPSBET00uc2VsZWN0RWxlbSgnI2NyZWF0ZUZvcm0nKTtcbiAgICAgICAgaGlkZGVuLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGRlbicsIGZhbHNlKTtcbiAgICAgICAgXG4gICAgIH1cblxuICAgICBjb25zdCB0b2dnbGVTaXplID0gZnVuY3Rpb24oZXZlbnQpe1xuICAgICAgICBpZiAoZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygncHJvamVjdCcpKXtcblxuICAgICAgICBjb25zdCBjb250YWluZXIgPSBET00uc2VsZWN0RWxlbShgI2NvbnRhaW5lciR7ZXZlbnQudGFyZ2V0LmRhdGFzZXQuaWR9YCApICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgY29udGFpbmVyLmNsYXNzTGlzdC50b2dnbGUoJ25vbmUnKTtcblxuICAgICAgICB9XG5cbiAgICAgICAgZWxzZSB7XG4gICAgICAgIFxuICAgICAgICBjb25zdCBmb3JtID0gZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQ7ICAgIFxuICAgICAgICBjb25zdCBmb3JtQ2hpbGRyZW4gPSBBcnJheS5mcm9tKGZvcm0uY2hpbGRyZW4pO1xuICAgICAgICBmb3JtQ2hpbGRyZW4uZm9yRWFjaChpdG0gPT4gaXRtLmRhdGFzZXQuY2xhc3MgPT09IGBjaGlsZCR7Zm9ybS5kYXRhc2V0LmlkfWAgPyBpdG0uY2xhc3NMaXN0LnRvZ2dsZSgnbm9uZScpIDogZmFsc2UpICAgICAgIFxuICAgICAgICAgICAgXG4gICAgICAgIH1cbiAgICAgfVxuXG4gICAgIGNvbnN0IG5vdGVUeXBlR2VuZXJhdG9yID0gZnVuY3Rpb24oZXZlbnQpeyBcblxuICAgICAgICBjb25zdCBnZXRTZWxlY3RlZCA9IChmdW5jdGlvbigpe1xuICAgICAgICAgICAgIGNvbnN0IHNlbGVjdCA9ICBET00uc2VsZWN0RWxlbSgnI3NlbGVjdCcpO1xuICAgICAgICAgICAgIHJldHVybiBzZWxlY3Qub3B0aW9uc1tzZWxlY3Quc2VsZWN0ZWRJbmRleF0udmFsdWU7XG4gICAgICAgIH0pKClcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IF9nZW5lcmF0ZVRlbXBvcmFyeUlucHV0ID0gKGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0ID0gRE9NLnNlbGVjdEVsZW0oJyNub3RlVHlwZUZvcm0nKS5wYXJlbnRFbGVtZW50O1xuICAgICAgICAgICBcbiAgICAgICAgaWYgKGdldFNlbGVjdGVkID09PSAnQ2hlY2tsaXN0Jyl7ICAgIFxuICAgICAgICAgICAgbGV0IHRlbXBvcmFyeUlucHV0ID0gRE9NLmVsZW1lbnRJbml0KCdpbnB1dCcseyd0eXBlJzondGV4dCcsXG4gICAgICAgICAgICAnYXV0b2NvbXBsZXRlJzonb2ZmJyxcbiAgICAgICAgICAgICdyZXF1aXJlZCc6J3JlcXVpcmVkJyxcbiAgICAgICAgICAgICdpZCc6J3RlbXBvcmFyeUlucHV0JyxcbiAgICAgICAgICAgJ2NsYXNzJzogJ3RlbXBvcmFyeUlucHV0IG5vbmUnfSk7ICBcbiAgICAgICAgICAgIHByb2plY3QuYXBwZW5kQ2hpbGQodGVtcG9yYXJ5SW5wdXQpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGxldCB0ZXh0QXJlYSA9IERPTS5lbGVtZW50SW5pdCgndGV4dGFyZWEnLCB7J2lkJzondGVtcG9yYXJ5SW5wdXQnLFxuICAgICAgICAgICAgICAgICduYW1lJzonZnJlZUZvcm0nLFxuICAgICAgICAgICAgICAgICdsYWJlbCc6J2ZyZWVGb3JtJyxcbiAgICAgICAgICAgICAgICAnY2xhc3MnOid0ZW1wb3JhcnlJbnB1dCBub25lJyxcbiAgICAgICAgICAgICAgICAnYXV0b2NvbXBsZXRlJzonb2ZmJyxcbiAgICAgICAgICAgICAgICAncmVxdWlyZWQnOidyZXF1aXJlZCcsXG4gICAgICAgICAgICAgICAgJ3Jvd3MnIDogJzQnLFxuICAgICAgICAgICAgICAgICdjb2xzJyA6ICc1MCcgfSk7XG4gICAgICAgICAgICBwcm9qZWN0LmFwcGVuZENoaWxkKHRleHRBcmVhKTsgICBcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgfSkoKVxuICAgICAgICBcbiAgICAgICAgcHJvamVjdEV2ZW50cy5wdWJsaXNoKCdkZWxldGVOb3RlVHlwZUZvcm0nLCBldmVudCk7XG4gICAgICAgIHByb2plY3RFdmVudHMucHVibGlzaCgnY3JlYXRlTm90ZScsIGdldFNlbGVjdGVkKTtcblxuXG4gICAgICAgIC8vcmVtZW1iZXIgY3JlYXRlbm90ZSB0aGluZyB3aWxsIGFwcGx5IHRvIHRoZSBiYWNrZW5kIGFzIHdlbGwsXG4gICAgICAgIC8vIHNvIHdoZW4geW91IHBhc3MgaW4gdGhhdCBhcmd1bWVudCwgdGhhdCdzIHdoZW4gdGhlICd0eXBlJ1xuICAgICAgICAvLyBvZiB0aGUgbm90ZSB3aWxsIGJlIHN0b3JlZCBpbiB0aGVyZS4gXG4gICAgICAgIFxuICAgICAgICBcbiAgICAgICAgcmV0dXJuIGdldFNlbGVjdGVkXG4gICAgIH1cblxuXG5cbiAgICBjb25zdCBkZWxldGVGb3JtcyA9IGZ1bmN0aW9uKGV2ZW50KXtcblxuICAgICAgICAgXG4gICAgICAgIGNvbnN0IF9jYW5jZWxOb3RlVHlwZUZvcm0gPSBmdW5jdGlvbigpe1xuXG4gICAgICAgICAgICBjb25zdCBfZGVsZXRlUHJvdlRpdGxlID0gZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICAgICAgY29uc3QgcHJvdlRpdGxlID0gIERPTS5zZWxlY3RFbGVtKCcjcHJvdlRpdGxlJylcbiAgICAgICAgICAgICAgICAgcHJvdlRpdGxlID8gcHJvdlRpdGxlLnJlbW92ZSgpIDogZmFsc2VcbiAgICAgICAgICAgICAgICAgcmV0dXJuICAgXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBjb25zdCBfZGVsZXRlQWRkTm90ZUZvcm0gPSAoZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICAgICAgY29uc3Qgbm90ZVR5cGVGb3JtID0gRE9NLnNlbGVjdEVsZW0oJyNub3RlVHlwZUZvcm0nKTtcbiAgICAgICAgICAgICAgICAgbm90ZVR5cGVGb3JtID8gbm90ZVR5cGVGb3JtLnJlbW92ZSgpIDogZmFsc2U7XG4gICAgICAgICAgICAgICAgIHJldHVyblxuXG4gICAgICAgICAgICAgfSkoKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgZXZlbnQudGFyZ2V0LmNsYXNzTmFtZSA9PT0gJ2NhbmNlbENob2ljZScgPyBfZGVsZXRlUHJvdlRpdGxlKCkgOiBmYWxzZTsgXG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuXG5cbiAgICAgICAgIGxldCBkZWxldGVkID0gRE9NLnNlbGVjdEVsZW0oJyNjaG9vc2VUaXRsZUZvcm0nKTtcbiAgICAgICAgIGRlbGV0ZWQgPyBkZWxldGVkLnJlbW92ZSgpIDogX2NhbmNlbE5vdGVUeXBlRm9ybSgpXG4gICAgICAgICBcbiAgICAgICAgIHJldHVyblxuXG5cbiAgICB9XG5cbiAgICBjb25zdCBjbGVhblRvRG9Gb3JtID0gZnVuY3Rpb24oKXtcbiAgICAgIFxuICAgICAgY29uc3QgZm9ybSA9IERPTS5zZWxlY3RFbGVtKCcjc3VibWl0Tm90ZScpLnBhcmVudEVsZW1lbnQ7XG4gICAgICBjb25zdCBwcm9qZWN0ID0gRE9NLnNlbGVjdEVsZW0oJyN0ZW1wb3JhcnlJbnB1dCcpLnBhcmVudEVsZW1lbnQ7ICBcblxuICAgICAgY29uc3QgX2RlbGV0ZVRyYW5zaXRvcnlTdHVmZiA9IChmdW5jdGlvbigpeyAgXG4gICAgICAgIGxldCBkZWxldGVkID0gRE9NLnNlbGVjdEVsZW0oJyN0ZW1wb3JhcnlJbnB1dCcpO1xuICAgICAgICBkZWxldGVkLnJlbW92ZSgpO1xuXG4gICAgICAgIGRlbGV0ZWQgPSBET00uc2VsZWN0RWxlbSgnI3N1Ym1pdE5vdGUnKTtcbiAgICAgICAgZGVsZXRlZC5yZW1vdmUoKTtcblxuICAgICAgICBkZWxldGVkID0gRE9NLnNlbGVjdEVsZW0oJyNjYW5jZWxOb3RlJyk7XG4gICAgICAgIGRlbGV0ZWQucmVtb3ZlKCk7IFxuICAgIH0pKClcbiAgICAgIFxuICAgICAgY29uc3QgX2NvbnZlcnRBZGRDaGVjayA9IChmdW5jdGlvbigpeyBcblxuICAgICAgICBsZXQgY29udmVydCA9IERPTS5zZWxlY3RFbGVtKGAjYWRkQ2hlY2ske3Byb2plY3QuZGF0YXNldC5pZH0ke2Zvcm0uZGF0YXNldC5pZH1gKTtcblxuICAgICAgICBpZiAoY29udmVydCl7XG4gICAgICAgICAgICBjb252ZXJ0LnJlbW92ZUF0dHJpYnV0ZSgnY2xhc3MnKTtcbiAgICAgICAgICAgIGNvbnZlcnQuY2xhc3NOYW1lID0gJ2FkZENoZWNrTW9kJztcbiAgICAgIFxuICAgICAgICB9XG4gICAgfSkoKVxuXG4gICAgICBjb25zdCBfcmVtb3ZlV2hlcmVFbXB0eSA9IChmdW5jdGlvbigpe1xuICAgICAgICBcbiAgICAgICAgY29uc3QgZm9ybUNoaWxkcmVuID0gQXJyYXkuZnJvbShmb3JtLmNoaWxkcmVuKTtcbiAgICAgICAgY29uc3QgY2hpbGQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1jbGFzcz1jaGlsZCR7Zm9ybS5kYXRhc2V0LmlkfV1gKVxuICAgICAgICAhKGZvcm1DaGlsZHJlbi5pbmNsdWRlcyhjaGlsZCkpID8gZm9ybS5yZW1vdmUoKSA6IGZhbHNlO1xuXG4gICAgfSkoKVxuXG4gICAgICAgIHJldHVyblxuICAgIH1cbiAgICAgICAgXG5cbiAgICBjb25zdCBjYW5jZWxOb3RlID0gZnVuY3Rpb24oZXZlbnQpe1xuICAgICAgICBcbiAgICAgICAgY29uc3QgY2FuY2VsID0gZXZlbnQudGFyZ2V0O1xuICAgICAgICBjb25zdCBpbnB1dCA9IERPTS5zZWxlY3RFbGVtKCcjdGVtcG9yYXJ5SW5wdXQnKTtcblxuICAgICAgICBjYW5jZWwuY2xhc3NMaXN0LnRvZ2dsZSgnbm9uZScsdHJ1ZSk7XG4gICAgICAgIGlucHV0LnZhbHVlID0gJyc7XG4gICAgICAgIGlucHV0LmNsYXNzTGlzdC50b2dnbGUoJ25vbmUnLHRydWUpO1xuXG4gICAgICAgIHJldHVybiAgICAgICAgXG4gICAgfVxuXG4gICAgXG4gICAgY29uc3QgZ2VuZXJhdGVOZXdBZGRDaGVjayA9IGZ1bmN0aW9uKGV2ZW50KXtcbiAgICAgICAgXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGNvbnN0IGZvcm0gPSBldmVudC50YXJnZXQucGFyZW50RWxlbWVudDtcbiAgICAgICAgY29uc3QgcHJvamVjdCA9IGZvcm0ucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50O1xuXG4gICAgICAgIGlmKERPTS5zZWxlY3RFbGVtKCcjdGVtcG9yYXJ5SW5wdXQnKSAmJiBET00uc2VsZWN0RWxlbSgnI3RlbXBvcmFyeUlucHV0JykubGFiZWwgPT09ICdmcmVlRm9ybScpe1xuICAgICAgICAgICAgRE9NLnNlbGVjdEVsZW0oJyN0ZW1wb3JhcnlJbnB1dCcpLnJlbW92ZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFET00uc2VsZWN0RWxlbSgnI3RlbXBvcmFyeUlucHV0Jykpe1xuICAgICAgICBjb25zdCB0ZW1wb3JhcnlJbnB1dCA9IERPTS5lbGVtZW50SW5pdCgnaW5wdXQnLHsndHlwZSc6J3RleHQnLFxuICAgICAgICAnYXV0b2NvbXBsZXRlJzonb2ZmJyxcbiAgICAgICAgJ3JlcXVpcmVkJzoncmVxdWlyZWQnLFxuICAgICAgICAnaWQnOid0ZW1wb3JhcnlJbnB1dCcsXG4gICAgICAgICdjbGFzcyc6ICd0ZW1wb3JhcnlJbnB1dCBub25lJ30pO1xuXG4gICAgICAgIHByb2plY3QuYXBwZW5kQ2hpbGQodGVtcG9yYXJ5SW5wdXQpO1xuICAgICAgICBkaXNhYmxlQnRucyhldmVudC50YXJnZXQpO1xuICAgICAgICB0ZW1wb3JhcnlJbnB1dC5vbmlucHV0ID0gZGVsZWdhdG9yO1xuICAgIFxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFET00uc2VsZWN0RWxlbSgnI3N1Ym1pdE5vdGUnKSl7ICAgICAgIFxuICAgICAgICAgY29uc3Qgb3JpZ2luYWxTdWJtaXQgPSBET00uZWxlbWVudEluaXQoJ2J1dHRvbicseyd0eXBlJzonc3VibWl0JyxcbiAgICAgICAgJ2lkJzogJ3N1Ym1pdE5vdGUnLCBcbiAgICAgICAgJ2NsYXNzJzonc3VibWl0Tm90ZSBub25lJyxcbiAgICAgICAgfSwnU3VibWl0IE5vdGUnKVxuXG4gICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQob3JpZ2luYWxTdWJtaXQpO1xuXG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGlmICghRE9NLnNlbGVjdEVsZW0oJyNjYW5jZWxOb3RlJykpeyAgICAgICBcbiAgICAgICAgICAgIGNvbnN0IGNhbmNlbCA9IERPTS5lbGVtZW50SW5pdCgnYnV0dG9uJyx7XG4gICAgICAgICAgICdpZCc6ICdjYW5jZWxOb3RlJywgXG4gICAgICAgICAgICdjbGFzcyc6J2NhbmNlbCBub25lJyxcbiAgICAgICAgICAgfSwnQ2FuY2VsJylcbiAgIFxuICAgICAgICAgICBmb3JtLmFwcGVuZENoaWxkKGNhbmNlbCk7XG4gICAgXG4gICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICBwcm9qZWN0RXZlbnRzLnB1Ymxpc2goJ25ld0NoZWNrSXRlbScsIGV2ZW50KTtcblxuICAgICAgICByZXR1cm5cblxuICAgIH1cblxuICAgIGNvbnN0IGFkZE5ld0NoZWNrID0gZnVuY3Rpb24oZXZlbnQpe1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBjb25zdCBpbnB1dCA9IERPTS5zZWxlY3RFbGVtKCcjdGVtcG9yYXJ5SW5wdXQnKTtcbiAgICAgICAgY29uc3Qgc3VibWl0ID0gRE9NLnNlbGVjdEVsZW0oJyNzdWJtaXROb3RlJyk7XG4gICAgICAgIGNvbnN0IGNhbmNlbCA9IERPTS5zZWxlY3RFbGVtKCcjY2FuY2VsTm90ZScpO1xuICAgICAgICBpbnB1dC5jbGFzc0xpc3QudG9nZ2xlKCdub25lJyxmYWxzZSk7XG4gICAgICAgIGlucHV0LmZvY3VzKCk7XG4gICAgICAgIGRpc2FibGVCdG5zKCk7XG4gICAgICAgIHN1Ym1pdC5jbGFzc0xpc3QudG9nZ2xlKCdub25lJyxmYWxzZSk7XG4gICAgICAgIGNhbmNlbC5jbGFzc0xpc3QudG9nZ2xlKCdub25lJyxmYWxzZSk7XG4gICAgICAgIHJldHVyblxuICAgIH1cblxuICAgIFxuICAgICAgY29uc3QgX2dlbmVyYXRlQ2hlY2tJdGVtID0gZnVuY3Rpb24oKXtcbiAgICAgICAgY29uc3QgaW5wdXQgPSBET00uc2VsZWN0RWxlbSgnI3RlbXBvcmFyeUlucHV0Jyk7XG4gICAgICAgIGNvbnN0IGZvcm0gPSBET00uc2VsZWN0RWxlbSgnI3N1Ym1pdE5vdGUnKS5wYXJlbnRFbGVtZW50O1xuXG4gICAgICAgIGNvbnN0IGRlbCA9IERPTS5lbGVtZW50SW5pdCgnYnV0dG9uJywgeydjbGFzcyc6ICdkZWxldGVDaGVjayBub25lJ30sJ2RlbGV0ZScgKSAvL3RvIGVkaXQgd2hlbiBjcmVhdGluZyBkcm9wZG93blxuICAgICAgIFxuICAgICAgICBjb25zdCBjaGVja2JveCA9IERPTS5lbGVtZW50SW5pdCgnaW5wdXQnLCB7J3R5cGUnOidjaGVja2JveCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnZGF0YS1jbGFzcyc6YGNoaWxkJHtmb3JtLmRhdGFzZXQuaWR9YH0pO1xuICAgICAgICBjb25zdCBsYWJlbCA9IERPTS5lbGVtZW50SW5pdCgnbGFiZWwnLCB7J2Zvcic6IGAke2lucHV0LnZhbHVlfWAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2NsYXNzJzogJ2VkaXQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2RhdGEtY2xhc3MnOmBjaGlsZCR7Zm9ybS5kYXRhc2V0LmlkfWB9LGAke2lucHV0LnZhbHVlfWApO1xuICAgICAgICBjb25zdCBiciA9IERPTS5lbGVtZW50SW5pdCgnYnInLHsnZGF0YS1jbGFzcyc6YGNoaWxkJHtmb3JtLmRhdGFzZXQuaWR9YH0pO1xuXG4gICAgICAgIGlucHV0LnZhbHVlID0gJyc7XG4gICAgICAgIGxhYmVsLmFwcGVuZENoaWxkKGRlbCk7XG4gICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQoY2hlY2tib3gpO1xuICAgICAgICBmb3JtLmFwcGVuZENoaWxkKGxhYmVsKTtcbiAgICAgICAgZm9ybS5hcHBlbmRDaGlsZChicik7XG5cbiAgICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3Qgc3VibWl0SXRlbSA9IGZ1bmN0aW9uKCl7XG4gICAgXG4gICAgY29uc3QgaW5wdXQgPSBET00uc2VsZWN0RWxlbSgnI3RlbXBvcmFyeUlucHV0Jyk7XG4gICAgY29uc3QgZm9ybSA9IERPTS5zZWxlY3RFbGVtKCcjc3VibWl0Tm90ZScpLnBhcmVudEVsZW1lbnQ7XG4gICAgY29uc3QgcmVtb3ZlID0gRE9NLnNlbGVjdEVsZW0oYCNyZW1vdmUke2lucHV0LnBhcmVudEVsZW1lbnQuZGF0YXNldC5pZH0ke2Zvcm0uZGF0YXNldC5pZH1gKTtcblxuICAgIFxuICAgIFxuICAgIGlmIChpbnB1dC52YWx1ZSA9PT0gJycpe3JldHVybn07XG5cbiAgICBpZiAoZm9ybS5jbGFzc0xpc3QuY29udGFpbnMoJ2NoZWNrYm94Jykpe1xuICAgICAgICBfZ2VuZXJhdGVDaGVja0l0ZW0oKTtcbiAgICAgICAgcmVtb3ZlLmNsYXNzTGlzdC50b2dnbGUoJ25vbmUnLGZhbHNlKTtcbiAgICAgICAgaW5wdXQuY2xhc3NMaXN0LnRvZ2dsZSgnbm9uZScsIHRydWUpOyAgICAgICAgXG4gICAgICAgIHJldHVyblxuICAgIH1cbiAgICBcbiAgICBjb25zdCB0ZXh0ID0gRE9NLmVsZW1lbnRJbml0KCdwJywgeydjbGFzcyc6J3RleHQgZWRpdCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdkYXRhLWNsYXNzJzpgY2hpbGQke2Zvcm0uZGF0YXNldC5pZH1gfSwgYCR7aW5wdXQudmFsdWV9YCk7XG5cbiAgICBmb3JtLmFwcGVuZENoaWxkKHRleHQpO1xuICAgIHJlbW92ZS5jbGFzc0xpc3QudG9nZ2xlKCdub25lJyxmYWxzZSk7XG5cbiAgICByZXR1cm5cblxuICAgfVxuXG4gICBjb25zdCBkZWxldGVUb0RvTm90ZSA9IGZ1bmN0aW9uKGV2ZW50KXtcbiAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgIGV2ZW50LnRhcmdldC5wYXJlbnRFbGVtZW50LnJlbW92ZSgpO1xuICAgIHJldHVyblxuICAgfVxuICAgXG4gICBcbiAgIGNvbnN0IGRlbGV0ZUNoZWNrID0gZnVuY3Rpb24oZXZlbnQpe1xuICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICBjb25zdCBsYWJlbCA9IGV2ZW50LnRhcmdldC5wYXJlbnRFbGVtZW50XG4gICAgICAgY29uc3QgYnIgPSBsYWJlbC5uZXh0RWxlbWVudFNpYmxpbmc7XG4gICAgICAgY29uc3QgY2hlY2sgPSBsYWJlbC5wcmV2aW91c0VsZW1lbnRTaWJsaW5nO1xuICAgICAgIGNvbnN0IGZvcm0gPSBjaGVjay5wYXJlbnRFbGVtZW50OyAgICBcblxuICAgICAgIGJyLnJlbW92ZSgpIFxuICAgICAgIGNoZWNrLnJlbW92ZSgpIFxuICAgICAgIGxhYmVsLnJlbW92ZSgpXG4gICAgICAgXG4gICAgICAgY29uc3QgZm9ybUNoaWxkcmVuID0gQXJyYXkuZnJvbShmb3JtLmNoaWxkcmVuKTtcbiAgICAgICBjb25zdCBjaGlsZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLWNsYXNzPWNoaWxkJHtmb3JtLmRhdGFzZXQuaWR9XWApXG4gICAgICAgIShmb3JtQ2hpbGRyZW4uaW5jbHVkZXMoY2hpbGQpKSA/IGZvcm0ucmVtb3ZlKCkgOiBmYWxzZTtcbiAgICAgICBcbiAgICAgICByZXR1cm5cbiAgICB9XG5cbiAgICAgcmV0dXJuIHtcbiAgICAgICAgIGNyZWF0ZVByb2plY3QsXG4gICAgICAgICBjcmVhdGVUb0RvTm90ZSxcbiAgICAgICAgIHJldmVhbENyZWF0ZUZvcm0sXG4gICAgICAgICB0b2dnbGVTaXplLFxuICAgICAgICAgY2hvb3NlVG9Eb1RpdGxlRm9ybSxcbiAgICAgICAgIHN1Ym1pdFRvRG9UaXRsZSxcbiAgICAgICAgIGNob29zZU5vdGVUeXBlLFxuICAgICAgICAgbm90ZVR5cGVHZW5lcmF0b3IsXG4gICAgICAgICBkZWxldGVGb3JtcyxcbiAgICAgICAgIGRpc2FibGVCdG5zLFxuICAgICAgICAgZW5hYmxlQnRucyxcbiAgICAgICAgIGNsZWFuVG9Eb0Zvcm0sXG4gICAgICAgICBtb2RpZnlFbGVtZW50LFxuICAgICAgICAgY2FuY2VsTm90ZSxcbiAgICAgICAgIHJldmVydE1vZGlmaWVkRWxlbWVudCxcbiAgICAgICAgIGFkZE5ld0NoZWNrLFxuICAgICAgICAgZ2VuZXJhdGVOZXdBZGRDaGVjayxcbiAgICAgICAgIHN1Ym1pdEl0ZW0sXG4gICAgICAgICBzdWJtaXRNb2RpZmllZEVsZW1lbnQsXG4gICAgICAgICBkZWxldGVUb0RvTm90ZSxcbiAgICAgICAgIGRlbGV0ZUNoZWNrLFxuICAgICAgICAgXG4gICAgIH1cbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0ICogYXMgcHJvamVjdHMgZnJvbSAnLi9wcm9qZWN0cyc7XG5pbXBvcnQgeyBET01HZW5lcmFsIH0gZnJvbSBcIi4vaGVscGVycy9ET01cIjtcbmltcG9ydCB7IHRlbXBsYXRlRE9NU3RydWN0cyB9IGZyb20gJy4vcHJvamVjdHNET00nO1xuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgeyBwcm9qZWN0RXZlbnRzIH0gZnJvbSAnLi9wcm9qZWN0ZXZlbnRzJztcblxuXG5jb25zdCByZXZlYWxUb0RvID0gKGZ1bmN0aW9uKCl7IFxuICAgIFxuICAgIC8vQ2FsbGluZyBtb2R1bGUgT2JqZWN0c1xuICAgIGNvbnN0IERPTSA9IERPTUdlbmVyYWwoKTtcbiAgICBjb25zdCBzdHJ1Y3RzID0gdGVtcGxhdGVET01TdHJ1Y3RzKCk7XG4gICAgY29uc3QgbWFpbiA9IHByb2plY3RzLm1haW5JbnRlcmZhY2UoKTtcbiAgICBcblxuICAgIC8vTW9kdWxlIG1ldGhvZHMgdG8gYmUgdXNlZFxuICAgIGNvbnN0IG5ld1Byb2ogPSBtYWluLm5ld1Byb2o7XG4gICAgY29uc3QgbG9jYWxTdG9yZSA9IG1haW4udHJhbnNmZXJUb0xvY2FsU3RvcmFnZTtcbiAgICBjb25zdCBjcmVhdGVQcm9qZWN0ID0gc3RydWN0cy5jcmVhdGVQcm9qZWN0O1xuICAgIGNvbnN0IHJldmVhbENyZWF0ZUZvcm0gPSBzdHJ1Y3RzLnJldmVhbENyZWF0ZUZvcm07XG4gICAgY29uc3QgdG9nZ2xlU2l6ZSA9IHN0cnVjdHMudG9nZ2xlU2l6ZTtcbiAgICBjb25zdCBjaG9vc2VUb0RvVGl0bGVGb3JtID0gc3RydWN0cy5jaG9vc2VUb0RvVGl0bGVGb3JtO1xuICAgIGNvbnN0IHN1Ym1pdFRvRG9UaXRsZSA9IHN0cnVjdHMuc3VibWl0VG9Eb1RpdGxlO1xuICAgIGNvbnN0IGNob29zZU5vdGVUeXBlID0gc3RydWN0cy5jaG9vc2VOb3RlVHlwZTtcbiAgICBjb25zdCBub3RlVHlwZUdlbmVyYXRvciA9IHN0cnVjdHMubm90ZVR5cGVHZW5lcmF0b3I7XG4gICAgY29uc3QgZGVsZXRlRm9ybXMgPSBzdHJ1Y3RzLmRlbGV0ZUZvcm1zO1xuICAgIGNvbnN0IGRpc2FibGVCdG5zID0gc3RydWN0cy5kaXNhYmxlQnRucztcbiAgICBjb25zdCBjcmVhdGVUb0RvTm90ZSA9IHN0cnVjdHMuY3JlYXRlVG9Eb05vdGU7XG4gICAgY29uc3QgZW5hYmxlQnRucyA9IHN0cnVjdHMuZW5hYmxlQnRucztcbiAgICBjb25zdCBjbGVhblRvRG9Gb3JtID0gc3RydWN0cy5jbGVhblRvRG9Gb3JtO1xuICAgIGNvbnN0IGFkZE5ld0NoZWNrID0gc3RydWN0cy5hZGROZXdDaGVjaztcbiAgICBjb25zdCBjYW5jZWxOb3RlID0gc3RydWN0cy5jYW5jZWxOb3RlO1xuICAgIGNvbnN0IHJldmVydE1vZGlmaWVkRWxlbWVudCA9IHN0cnVjdHMucmV2ZXJ0TW9kaWZpZWRFbGVtZW50O1xuICAgIGNvbnN0IG1vZGlmeUVsZW1lbnQgPSBzdHJ1Y3RzLm1vZGlmeUVsZW1lbnQ7XG4gICAgY29uc3Qgc3VibWl0SXRlbSA9IHN0cnVjdHMuc3VibWl0SXRlbTtcbiAgICBjb25zdCBnZW5lcmF0ZU5ld0FkZENoZWNrID0gc3RydWN0cy5nZW5lcmF0ZU5ld0FkZENoZWNrO1xuICAgIGNvbnN0IHN1Ym1pdE1vZGlmaWVkRWxlbWVudCA9IHN0cnVjdHMuc3VibWl0TW9kaWZpZWRFbGVtZW50O1xuICAgIGNvbnN0IGRlbGV0ZVRvRG9Ob3RlID0gc3RydWN0cy5kZWxldGVUb0RvTm90ZTtcbiAgICBjb25zdCBkZWxldGVDaGVjayA9IHN0cnVjdHMuZGVsZXRlQ2hlY2s7XG4gICAgY29uc3QgZGVsZWdhdG9yID0gcHJvamVjdEV2ZW50cy5kZWxlZ2F0b3I7XG5cbiAgICBcbiAgICBcbiAgICAvL0V2ZW50IFN1YnNjcmlwdGlvbnNcbiAgICBwcm9qZWN0RXZlbnRzLnN1YnNjcmliZSgndmlldycsIHRvZ2dsZVNpemUpO1xuICAgIHByb2plY3RFdmVudHMuc3Vic2NyaWJlKCdjcmVhdGUnLCBjcmVhdGVQcm9qZWN0KTtcbiAgICBwcm9qZWN0RXZlbnRzLnN1YnNjcmliZSgnY3JlYXRlJywgbmV3UHJvaik7XG4gICAgcHJvamVjdEV2ZW50cy5zdWJzY3JpYmUoJ3NhdmVkJywgbG9jYWxTdG9yZSk7XG4gICAgcHJvamVjdEV2ZW50cy5zdWJzY3JpYmUoJ3JldmVhbCcsIHJldmVhbENyZWF0ZUZvcm0pO1xuICAgIHByb2plY3RFdmVudHMuc3Vic2NyaWJlKCdjaG9vc2VUaXRsZScsIGRpc2FibGVCdG5zKTtcbiAgICBwcm9qZWN0RXZlbnRzLnN1YnNjcmliZSgnY2hvb3NlVGl0bGUnLCBjaG9vc2VUb0RvVGl0bGVGb3JtKTtcbiAgICBwcm9qZWN0RXZlbnRzLnN1YnNjcmliZSgnaW5wdXRPckxpc3QnLCBzdWJtaXRUb0RvVGl0bGUpO1xuICAgIHByb2plY3RFdmVudHMuc3Vic2NyaWJlKCdpbnB1dE9yTGlzdCcsIGNob29zZU5vdGVUeXBlKTtcbiAgICBwcm9qZWN0RXZlbnRzLnN1YnNjcmliZSgnbm90ZVRvRG9UeXBlJywgZGVsZXRlRm9ybXMpXG4gICAgcHJvamVjdEV2ZW50cy5zdWJzY3JpYmUoJ25vdGVUb0RvVHlwZScsIG5vdGVUeXBlR2VuZXJhdG9yKTtcbiAgICAvL3Byb2plY3RFdmVudHMuc3Vic2NyaWJlKCdub3RlVG9Eb1R5cGUnLCBmdW5jdGlvbiBTdG9yZSBzZWxlY3RlZCB0eXBlIHRvIGJlIHJldHJpZXZlZCBieSBiYWNrZW5kIGxhdGVyLilcbiAgICBwcm9qZWN0RXZlbnRzLnN1YnNjcmliZSgnZGVsZXRlTm90ZVR5cGVGb3JtJywgZGlzYWJsZUJ0bnMpO1xuICAgIHByb2plY3RFdmVudHMuc3Vic2NyaWJlKCdkZWxldGVOb3RlVHlwZUZvcm0nLCBkZWxldGVGb3Jtcyk7XG4gICAgcHJvamVjdEV2ZW50cy5zdWJzY3JpYmUoJ2Fib3J0Tm90ZVR5cGVGb3JtJywgZGVsZXRlRm9ybXMpO1xuICAgIHByb2plY3RFdmVudHMuc3Vic2NyaWJlKCdhYm9ydE5vdGVUeXBlRm9ybScsIGVuYWJsZUJ0bnMpO1xuICAgIHByb2plY3RFdmVudHMuc3Vic2NyaWJlKCdhYm9ydE5vdGVUeXBlRm9ybScsIGRlbGV0ZUZvcm1zKTtcbiAgICBwcm9qZWN0RXZlbnRzLnN1YnNjcmliZSgnY2FuY2VsTm90ZScsIGNhbmNlbE5vdGUpO1xuICAgIHByb2plY3RFdmVudHMuc3Vic2NyaWJlKCdjYW5jZWxOb3RlJywgZW5hYmxlQnRucyk7XG4gICAgcHJvamVjdEV2ZW50cy5zdWJzY3JpYmUoJ2NhbmNlbE5vdGUnLCBjbGVhblRvRG9Gb3JtKTsgICAgICAgIFxuICAgIHByb2plY3RFdmVudHMuc3Vic2NyaWJlKCduZXdDaGVja0l0ZW0nLCBhZGROZXdDaGVjayk7XG4gICAgLy9wcm9qZWN0RXZlbnRzLnN1YnNjcmliZSgnY3JlYXRlTm90ZScsIGZ1bmN0aW9uUmU6QmFja2VuZFVwZGF0ZSAgd2l0aCB1c2VyIHN1Ym1pc3Npb24gJiBpbmNsdWRpbmcgdHlwZSBjaG9zZW4gJiYgd2hldGhlciBpdGVtcyBhcmUgY2hlY2tlZCBvciBub3QgKGlmIGNoZWNrYm94KSwgcmVtZW1iZXIgbG9jYWxTdG9yYWdlIHVwZGF0ZSBhcyB3ZWxsLilcbiAgICBwcm9qZWN0RXZlbnRzLnN1YnNjcmliZSgnY3JlYXRlTm90ZScsIGNyZWF0ZVRvRG9Ob3RlKTtcbiAgICBwcm9qZWN0RXZlbnRzLnN1YnNjcmliZSgnc3VibWl0Tm90ZScsIHN1Ym1pdEl0ZW0pO1xuICAgIHByb2plY3RFdmVudHMuc3Vic2NyaWJlKCdzdWJtaXROb3RlJywgZW5hYmxlQnRucyk7XG4gICAgcHJvamVjdEV2ZW50cy5zdWJzY3JpYmUoJ3N1Ym1pdE5vdGUnLCBjbGVhblRvRG9Gb3JtKTtcbiAgICBwcm9qZWN0RXZlbnRzLnN1YnNjcmliZSgndXBkYXRlQ2hlY2tJdGVtJywgZ2VuZXJhdGVOZXdBZGRDaGVjayk7XG4gICAgcHJvamVjdEV2ZW50cy5zdWJzY3JpYmUoJ21vZGlmeUVsZW0nLCBtb2RpZnlFbGVtZW50KTtcbiAgICBwcm9qZWN0RXZlbnRzLnN1YnNjcmliZSgncmV2ZXJ0JywgcmV2ZXJ0TW9kaWZpZWRFbGVtZW50KTtcbiAgICBwcm9qZWN0RXZlbnRzLnN1YnNjcmliZSgnc3VibWl0TW9kJywgc3VibWl0TW9kaWZpZWRFbGVtZW50KVxuICAgIHByb2plY3RFdmVudHMuc3Vic2NyaWJlKCdkZWxldGVUb0RvTm90ZScsIGRlbGV0ZVRvRG9Ob3RlKTtcbiAgICBwcm9qZWN0RXZlbnRzLnN1YnNjcmliZSgnZGVsZXRlQ2hlY2snLCBkZWxldGVDaGVjayk7XG4gICAgXG5cblxuICAgIC8vSW5pdGlhbCBlbGVtZW50c1xuICAgIGNvbnN0IG1haW5Db250YWluZXIgPSAoZnVuY3Rpb24oKXtcbiAgICBcbiAgICAgICAgY29uc3QgY29udGFpbmVyID0gIERPTS5lbGVtZW50SW5pdCgnZGl2Jyx7J2lkJzonY29udGFpbmVyJ30pXG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY29udGFpbmVyKVxuICAgICAgICByZXR1cm4gY29udGFpbmVyXG4gICAgIFxufSkoKVxuXG4gICAgY29uc3QgaGVhZGVyID0gKGZ1bmN0aW9uKCl7XG4gICAgICAgIFxuICAgICAgICAvL0luaXRpYWxpc2UgZWxlbWVudHNcbiAgICAgICAgY29uc3QgaGVhZCA9IERPTS5lbGVtZW50SW5pdCgnaGVhZGVyJywgeydpZCc6J2hlYWRlcid9KTtcbiAgICAgICAgY29uc3QgdGl0bGUgPSBET00uZWxlbWVudEluaXQoJ2gxJyx7J2lkJzogJ3RpdGxlJ30sICdUaGlzIGlzIHlvdXIgVG8tRG8gbGlzdCcpO1xuICAgICAgICBjb25zdCByZXZlYWxGb3JtID0gRE9NLmVsZW1lbnRJbml0KCdidXR0b24nLHsnY2xhc3MnOidyZXZlYWxGb3JtJ30sJ05ldyBQcm9qZWN0Jyk7XG4gICAgICAgIFxuICAgICAgICAvL0FkZCBoZWFkZXIgZXZlbnQgbGlzdGVuZXJcbiAgICAgICAgaGVhZC5vbmNsaWNrID0gZGVsZWdhdG9yO1xuICAgICAgICBcbiAgICAgICAgLy9BcHBlbmQgdG8gZG9jdW1lbnRcbiAgICAgICAgaGVhZC5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gICAgICAgIGhlYWQuYXBwZW5kQ2hpbGQocmV2ZWFsRm9ybSk7XG4gICAgICAgIG1haW5Db250YWluZXIuYXBwZW5kQ2hpbGQoaGVhZCk7XG5cbiAgICAgICAgcmV0dXJuIGhlYWQ7XG59KSgpXG4gICAgXG4gICAgY29uc3QgZGVmYXVsdFByb2plY3QgPSAoZnVuY3Rpb24oKXtcbiAgICAgICAgXG4gICAgfSkoKVxuXG4gICAgXG4gICAgY29uc3QgcmVuZGVyTG9jYWxTdG9yYWdlID0gZnVuY3Rpb24oKXtcbiAgICAgICAgLy9UaGlzIHdpbGwgdXNlIGxvY2FsU3RvcmFnZSB0byBjaGVja1xuICAgICAgICAvL2lmIHRoZSB1c2VyIGhhcyBhbnkgc2F2ZWQgaW5zdGFuY2VzXG4gICAgICAgIC8vb2YgcHJvamVjdHMgYW5kIHJlbmRlciB0aGVtIGlmIHNvLiBcbiAgICAgICAgLy9SZW1lbWJlciB0byB0YWtlIGFjY291bnQgYW55IGRpZmZlcmVuY2VzIGluIGRhdGEgYmV0d2VlbiBiYWNrZW5kIGFuZCBET01cbiAgICB9XG5cblxuICAgICBcbiAgICBjb25zdCBjcmVhdGVGb3JtID0gKGZ1bmN0aW9uKCl7XG4gICAgICAgICBjb25zdCBmb3JtID0gRE9NLmVsZW1lbnRJbml0KCdmb3JtJyx7J2lkJzonY3JlYXRlRm9ybScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2NsYXNzJzonaGlkZGVuIHByb2plY3RGb3JtJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQoRE9NLmVsZW1lbnRJbml0KCdicicpKTsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgZm9ybS5hcHBlbmRDaGlsZChET00uZWxlbWVudEluaXQoJ2xhYmVsJyx7J2Zvcic6J3RpdGxlSW5wJ30sJ1Byb2plY3QgVGl0bGUnKSlcbiAgICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQoRE9NLmVsZW1lbnRJbml0KCdicicpKTtcbiAgICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQoRE9NLmVsZW1lbnRJbml0KCdpbnB1dCcseyd0eXBlJzondGV4dCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2lkJyA6ICd0aXRsZUlucCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2F1dG9jb21wbGV0ZSc6ICdvZmYnLCAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ25hbWUnOid0aXRsZUlucCd9KSk7XG4gICAgICAgICBmb3JtLmFwcGVuZENoaWxkKERPTS5lbGVtZW50SW5pdCgnYnV0dG9uJyx7J3R5cGUnOidzdWJtaXQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnY2xhc3MnOiAnc3VibWl0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdpZCc6J3N1Ym1pdCd9LCdzdWJtaXQnKSk7XG4gICAgICAgICBcbiBcbiAgICAgICAgIGZvcm0ub25zdWJtaXQgPSBkZWxlZ2F0b3I7XG4gICAgICAgICBtYWluQ29udGFpbmVyLmFwcGVuZENoaWxkKGZvcm0pO1xuICAgICAgICAgcmV0dXJuIGZvcm07IFxufSkoKVxuICAgICBcblxufSkoKVxuXG4gICAgIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9