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
___CSS_LOADER_EXPORT___.push([module.id, "html {\n    box-sizing: border-box;\n\n}\n\n\n*, *:before, *:after{\n    box-sizing: inherit;\n    margin: 0;\n    padding: 0;\n}\n\nbody {\n    display: flex;\n}\n\n.hidden {\n    visibility: hidden\n}\n\n.project {\n    border: 1px solid black;\n}\n\n.none {\n    display: none;\n}\n\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,sBAAsB;;AAE1B;;;AAGA;IACI,mBAAmB;IACnB,SAAS;IACT,UAAU;AACd;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI;AACJ;;AAEA;IACI,uBAAuB;AAC3B;;AAEA;IACI,aAAa;AACjB","sourcesContent":["html {\n    box-sizing: border-box;\n\n}\n\n\n*, *:before, *:after{\n    box-sizing: inherit;\n    margin: 0;\n    padding: 0;\n}\n\nbody {\n    display: flex;\n}\n\n.hidden {\n    visibility: hidden\n}\n\n.project {\n    border: 1px solid black;\n}\n\n.none {\n    display: none;\n}\n\n"],"sourceRoot":""}]);
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
         case 'viewProject': projectEvents.publish('viewProject', event);
           break;
         case 'addtoDoList': projectEvents.publish('inputOrList', event)
           break;
         case 'chooseNoteType': projectEvents.publish('noteToDoType', event);
                                event.preventDefault();
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

    const projButtons = function(){
        
        const viewProjectBtn = DOM.elementInit('button', {'class': 'viewProject'}, 'View Inside');
        const addToDoListBtn = DOM.elementInit('button', {'class': 'addtoDoList',
                                                           'id': `add${DOM.selectElem('.project').length}`}, 'Add To-Do List');
        
        return {
            viewProjectBtn,
            addToDoListBtn
        }
        
        //template for project buttons to be
        //used below. Remember data-attribute
        //event delegation to be used. 
    }

    const createProject = function(name){
         const reference = DOM.selectElem('.project'); 
         const proj = DOM.elementInit('div',{'id': `${name}${reference.length}`,
                                             'data-id':`${reference.length}`, 
                                             'class': 'project'},name
                                             )
        proj.appendChild(projButtons().viewProjectBtn);
        proj.appendChild(DOM.elementInit('div',{ 'class':'none',
                                                   'id':`container${reference.length}`}));
        proj.appendChild(projButtons().addToDoListBtn);

        
        proj.onclick = delegator;
                                                                      
        const container = DOM.selectElem('#container');
        container.appendChild(proj);
        return proj

     }

     const createToDoNote = function(chosenType){
        const input = DOM.selectElem('#temporaryInput');
 
        const project = DOM.selectElem('#temporaryInput').parentElement;
        const container = DOM.selectElem(`#container${project.dataset.id}`);
        
        const form = DOM.elementInit('form',{'class': 'toDoNoteInput'})//continue
        const submit = DOM.elementInit('button',{'type':'submit',
                                                  'class':'submitNote'},'Submit Note')
        
        
        form.appendChild(submit);
        form.onsubmit = delegator; //(event here: submits note, removes temp, reenables add)   
         
        container.classList.toggle('none', false);
        submit.classList.toggle('none', true);
         
        container.appendChild(form);
 
        const checkContent = function(){
            input.value === '' ? submit.classList.toggle('none',true) : submit.classList.toggle('none',false)
        }
 
        input.oninput = checkContent;
 
        const generateCheckItem = function(){
            const checkbox = DOM.elementInit('input', {'type':'checkbox'});
            const label = DOM.elementInit('label', {'for': `${input.value}`},`${input.value}`);
            const br = DOM.elementInit('br');
 
            input.value = '';
            form.appendChild(checkbox);
            form.appendChild(label);
            form.appendChild(br);
            return
        }

       const generateChecklist = function(){ 
           const add = DOM.elementInit('button', {'class':'addCheck'}, 'Submit Item');
           
        const convertCheckButton = function(){
             return  input.value === '' ? add.textContent = 'Add Item' : add.textContent = 'Submit Item';  
        }

           input.addEventListener('input',convertCheckButton) ;
          
           const submitCheck = function(event){
               event.preventDefault();
               if (add.textContent === 'Submit Item'){
                generateCheckItem();
                input.classList.toggle('none', true);
                add.textContent = 'Add Item';
           }
               else {
                input.classList.toggle('none',false);
                add.textContent = 'Submit Item'
           }
               return
        }
           add.onclick =  submitCheck;   
           form.appendChild(add)
       }

       return chosenType === 'Checklist' ? generateChecklist() : generateChecklist;  

     }

     const chooseNoteType = function(event){
        const domProject = event.target.parentElement;

        if (domProject.lastElementChild.className === 'chooseNoteType') {
            return
        }

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
         
         select.appendChild(optGroup);
         optGroup.appendChild(checklistOpt);
         optGroup.appendChild(inputOpt);
         form.appendChild(label);
         form.appendChild(select);
         form.appendChild(DOM.elementInit('br'));
         form.appendChild(choice);

         
         form.onsubmit = delegator;
         domProject.appendChild(form);

         return form
 }
     
     const revealCreateForm = function(){
        let hidden = DOM.selectElem('#createForm');
        hidden.classList.toggle('hidden', false);
        
     }

     const toggleProjectSize = function(event){
            event.target.nextElementSibling.classList.toggle('none');
     }

     const noteTypeGenerator = function(){

        const getSelected = (function(){
             const select =  DOM.selectElem('#select');
             return select.options[select.selectedIndex].value;
        })()
        
        const generateTemporaryInput = (function(){
            const project = DOM.selectElem('#noteTypeForm').parentElement;
            const temporaryInput = DOM.elementInit('input',{'type':'text',
                                                            'autocomplete':'off',
                                                            'id':'temporaryInput'}); 
            project.appendChild(temporaryInput);      
        })()
        
        _projectevents__WEBPACK_IMPORTED_MODULE_1__.projectEvents.publish('deleteNoteTypeForm');
        _projectevents__WEBPACK_IMPORTED_MODULE_1__.projectEvents.publish('createNote', getSelected);


        //remember createnote thing will apply to the backend as well,
        // so when you pass in that argument, that's when the 'type'
        // of the note will be stored in there. 
        
        
        return getSelected
     }



    const deleteAddNoteForm = function(){
         const deleted = DOM.selectElem('#noteTypeForm');
         deleted.remove();
    }

    const disableBtns = function(){
        const  project = DOM.selectElem('#temporaryInput').parentElement;

        const addtoDoButton = DOM.selectElem(`#add${project.dataset.id}`);
        const newProjectButton = DOM.selectElem('#submit');

        addtoDoButton.disabled = true;
        newProjectButton.disabled = true;
        return 
     }
    

     return {
         createProject,
         createToDoNote,
         revealCreateForm,
         toggleProjectSize,
         chooseNoteType,
         noteTypeGenerator,
         deleteAddNoteForm,
         disableBtns,
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
    const toggleProjectSize = structs.toggleProjectSize;
    const chooseNoteType = structs.chooseNoteType;
    const noteTypeGenerator = structs.noteTypeGenerator;
    const deleteAddNoteForm = structs.deleteAddNoteForm;
    const disableBtns = structs.disableBtns;
    const createToDoNote = structs.createToDoNote;
    const delegator = _projectevents__WEBPACK_IMPORTED_MODULE_4__.projectEvents.delegator;

    
    
    //Event Subscriptions
    _projectevents__WEBPACK_IMPORTED_MODULE_4__.projectEvents.subscribe('viewProject', toggleProjectSize);
    _projectevents__WEBPACK_IMPORTED_MODULE_4__.projectEvents.subscribe('create', createProject);
    _projectevents__WEBPACK_IMPORTED_MODULE_4__.projectEvents.subscribe('create', newProj);
    _projectevents__WEBPACK_IMPORTED_MODULE_4__.projectEvents.subscribe('saved', localStore);
    _projectevents__WEBPACK_IMPORTED_MODULE_4__.projectEvents.subscribe('reveal', revealCreateForm);
    _projectevents__WEBPACK_IMPORTED_MODULE_4__.projectEvents.subscribe('inputOrList', chooseNoteType);
    _projectevents__WEBPACK_IMPORTED_MODULE_4__.projectEvents.subscribe('noteToDoType', noteTypeGenerator);
    //projectEvents.subscribe('noteToDoType', function Store selected type to be retrieved by backend later.)
    _projectevents__WEBPACK_IMPORTED_MODULE_4__.projectEvents.subscribe('deleteNoteTypeForm', disableBtns);
    _projectevents__WEBPACK_IMPORTED_MODULE_4__.projectEvents.subscribe('deleteNoteTypeForm', deleteAddNoteForm);
    //projectEvents.subscribe('createNote', functionRe:BackendUpdate  with user submission & including type chosen && whether items are checked or not (if checkbox), remember localStorage update as well.)
    _projectevents__WEBPACK_IMPORTED_MODULE_4__.projectEvents.subscribe('createNote', createToDoNote)
    

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFJLG1FQUF1QjtBQUMzQixJQUFJLG1FQUF1QjtBQUMzQixJQUFJLG1FQUF1QjtBQUMzQixJQUFJLG1FQUF1QjtBQUMzQixJQUFJLG1FQUF1QjtBQUMzQjtBQUNBLElBQUksbUVBQXVCO0FBQzNCLElBQUksbUVBQXVCO0FBQzNCO0FBQ0EsSUFBSSxtRUFBdUI7QUFDM0I7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQWtELGlCQUFpQjtBQUNuRTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBLGdEQUFnRCxjQUFjO0FBQzlELDRDQUE0QyxjQUFjO0FBQzFELHFEQUFxRCxxQkFBcUI7QUFDMUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0EsOENBQThDO0FBQzlDO0FBQ0EsNkNBQTZDO0FBQzdDO0FBQ0EsbURBQW1ELGlCQUFpQjtBQUNwRTtBQUNBLG1EQUFtRDtBQUNuRDtBQUNBO0FBQ0Esc0VBQXNFO0FBQ3RFLG9EQUFvRDtBQUNwRDtBQUNBLG9FQUFvRTtBQUNwRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEOztBQUVBLENBQUM7O0FBRUQsSSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8vLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9oZWxwZXJzL0RPTS5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL2hlbHBlcnMvYmFzZS5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL2hlbHBlcnMvZXZlbnRzLmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvcHJvamVjdGV2ZW50cy5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL3Byb2plY3RzLmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvcHJvamVjdHNET00uanMiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImh0bWwge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcblxcbn1cXG5cXG5cXG4qLCAqOmJlZm9yZSwgKjphZnRlcntcXG4gICAgYm94LXNpemluZzogaW5oZXJpdDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLmhpZGRlbiB7XFxuICAgIHZpc2liaWxpdHk6IGhpZGRlblxcbn1cXG5cXG4ucHJvamVjdCB7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG4ubm9uZSB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxzQkFBc0I7O0FBRTFCOzs7QUFHQTtJQUNJLG1CQUFtQjtJQUNuQixTQUFTO0lBQ1QsVUFBVTtBQUNkOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJO0FBQ0o7O0FBRUE7SUFDSSx1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImh0bWwge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcblxcbn1cXG5cXG5cXG4qLCAqOmJlZm9yZSwgKjphZnRlcntcXG4gICAgYm94LXNpemluZzogaW5oZXJpdDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLmhpZGRlbiB7XFxuICAgIHZpc2liaWxpdHk6IGhpZGRlblxcbn1cXG5cXG4ucHJvamVjdCB7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG4ubm9uZSB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCB0aGlzLmxlbmd0aDsgX2krKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW19pXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pMiA9IDA7IF9pMiA8IG1vZHVsZXMubGVuZ3RoOyBfaTIrKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaTJdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJleHBvcnQgY29uc3QgRE9NR2VuZXJhbCA9IGZ1bmN0aW9uKCl7XG4gICAgXG4gICAgY29uc3QgZWxlbWVudEluaXQgPSBmdW5jdGlvbihlbGVtLCBhdHRyc09iaj17fSx0ZXh0U3RyaW5nPScnKXtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGVsZW0pO1xuICAgICAgICBcbiAgICAgICAgaWYgKE9iamVjdC5rZXlzKGF0dHJzT2JqKS5sZW5ndGggPiAwKXtcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKGF0dHJzT2JqKS5mb3JFYWNoKGZ1bmN0aW9uKGF0dCl7XG4gICAgICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZShhdHQsIGF0dHJzT2JqW2F0dF0pXG4gICAgICAgIH0pXG4gICAgfSAgIFxuICAgICAgICBpZiAodGV4dFN0cmluZy5sZW5ndGggPiAwKXtcbiAgICAgICAgICAgIGVsZW1lbnQudGV4dENvbnRlbnQgPSB0ZXh0U3RyaW5nO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGVsZW1lbnQgICAgICAgXG5cbiAgICB9O1xuXG4gICBjb25zdCBzZWxlY3RFbGVtID0gZnVuY3Rpb24oc2VsZWN0b3JTdHJpbmcpe1xuXG4gICAgICAgaWYgKHNlbGVjdG9yU3RyaW5nWzBdID09PSAnIycpe1xuICAgICAgICAgICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3RvclN0cmluZylcbiAgICAgICB9XG4gICAgICAgZWxzZSB7XG4gICAgICAgICAgIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yU3RyaW5nKTtcbiAgICAgICB9XG4gICAgICAgXG4gICB9O1xuXG4gICByZXR1cm4ge1xuICAgICAgIGVsZW1lbnRJbml0LCBcbiAgICAgICBzZWxlY3RFbGVtLFxuICAgfVxuXG59XG5cblxuXG4iLCJleHBvcnQgY29uc3QgYmFzZUNyZWF0ZSA9IGZ1bmN0aW9uKHN0b3JhZ2Upe1xuICAgICAgXG5jb25zdCBfc3RvcmFnZSA9IHN0b3JhZ2UgfHwgbmV3IEFycmF5KCk7XG5cbihmdW5jdGlvbigpe1xuICAgIGlmICghQXJyYXkuaXNBcnJheShfc3RvcmFnZSkpe1xuICAgICAgICB0aHJvdyAnRXJyb3IhIEFyZ3VtZW50IG11c3QgYmUgYW4gYXJyYXknO1xuICAgIH1cbiAgICB9KSgpXG4gICAgXG5jb25zdCBhZGQgPSBmdW5jdGlvbihlbGVtKXtcbiAgICBfc3RvcmFnZS5wdXNoKGVsZW0pO1xuXG59O1xuXG5jb25zdCByZW1vdmUgPSBmdW5jdGlvbihlbGVtLCBpbmRleD0wKXtcbiAgICBpZiAoaW5kZXggPT09IDApe1xuICAgICAgICBmb3IgKGxldCBpID0gaW5kZXg7IGkgPCBfc3RvcmFnZS5sZW5ndGg7IGkrKyl7XG4gICAgICAgICAgICBpZihfc3RvcmFnZVtpXSA9PT0gZWxlbSl7XG4gICAgICAgICAgICAgICAgX3N0b3JhZ2Uuc3BsaWNlKGksMSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgIH1cbiAgICAgICAgIH0gICAgICAgICBcbiAgICAgICB9XG4gICAgICAgZWxzZSBpZiAoaW5kZXggPiAwICYmIGluZGV4IDwgX3N0b3JhZ2UubGVuZ3RoKXtcbiAgICAgICAgICAgX3N0b3JhZ2Uuc3BsaWNlKGluZGV4LCAxKVxuICAgICAgIH0gIFxufTtcblxuY29uc3QgdXBkYXRlQnlMb2NhdGlvbiA9IGZ1bmN0aW9uKGluZGV4LCByZXBsYWNlKXtcbiAgICAgICAgaWYgKGluZGV4ID4gMCAmJiBpbmRleCA8IF9zdG9yYWdlLmxlbmd0aCl7XG4gICAgICAgICAgICBfc3RvcmFnZS5zcGxpY2UoaW5kZXgsMSxyZXBsYWNlKTtcbiAgICAgICAgfVxuXG59O1xuXG5jb25zdCB1cGRhdGVCeUVsZW1lbnQgPSBmdW5jdGlvbihlbGVtLCByZXBsYWNlKXtcbiAgICAgICAgZm9yIChsZXQgeCA9IGluZGV4OyB4IDwgX3N0b3JhZ2UubGVuZ3RoOyB4Kyspe1xuICAgICAgICAgICAgaWYoX3N0b3JhZ2VbeF0gPT09IGVsZW0pe1xuICAgICAgICAgICAgICAgIF9zdG9yYWdlLnNwbGljZSh4LDEsIHJlcGxhY2UpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfX1cbn07XG5cblxuY29uc3QgbW92ZSA9IGZ1bmN0aW9uKGluZGV4LCB0YXJnZXQpe1xuICAgIGlmIChpbmRleCA+PSAwICYmIGluZGV4IDxfc3RvcmFnZS5sZW5ndGggJiYgdGFyZ2V0ID49IDAgJiYgdGFyZ2V0IDxfc3RvcmFnZS5sZW5ndGgpe1xuICAgICAgICBjb25zdCBtb3ZlZCA9IF9zdG9yYWdlW2luZGV4XTtcbiAgICAgICAgX3N0b3JhZ2Uuc3BsaWNlKGluZGV4LDEpO1xuICAgICAgICBfc3RvcmFnZS5zcGxpY2UodGFyZ2V0LDAsbW92ZWQpXG4gICAgXG4gICAgfSAgIFxuICAgIGVsc2UgaWYoaW5kZXggPj0gMCAmJiBpbmRleCA8X3N0b3JhZ2UubGVuZ3RoICYmIHRhcmdldCA+PSBfc3RvcmFnZS5sZW5ndGgpIHtcbiAgICAgICAgY29uc3QgcmVwbGFjZW1lbnQgPSBfc3RvcmFnZVtpbmRleF07XG4gICAgICAgIF9zdG9yYWdlLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgIF9zdG9yYWdlLnB1c2gocmVwbGFjZW1lbnQpO1xuXG4gICAgfSAgICBcbn07XG5cbmNvbnN0IHN3YXAgPSBmdW5jdGlvbihpbmRleEEsIGluZGV4Qil7XG4gICAgaWYgKGluZGV4QSA+PSAwICYmIGluZGV4QSA8X3N0b3JhZ2UubGVuZ3RoICYmIGluZGV4QiA+PSAwICYmIGluZGV4QiA8X3N0b3JhZ2UubGVuZ3RoKXtcbiAgICAgICAgXG4gICAgICAgW19zdG9yYWdlW2luZGV4QV0sIF9zdG9yYWdlW2luZGV4Ql1dID0gW19zdG9yYWdlW2luZGV4Ql0sIF9zdG9yYWdlW2luZGV4QV1dXG4gICAgfVxuXG59O1xuXG5jb25zdCBjb3B5ID0gZnVuY3Rpb24gKGluZGV4KXtcbiAgICBpZiAoaW5kZXggPj0gMCAmJiBpbmRleCA8IF9zdG9yYWdlLmxlbmd0aCl7XG4gICAgICAgIGxldCBjbG9uZSA9IF9zdG9yYWdlW2luZGV4XTtcbiAgICAgICAgX3N0b3JhZ2UucHVzaChjbG9uZSk7XG4gICAgfVxufVxuICAgIFxuICAgIHJldHVybiB7XG4gICAgICAgIGFkZCxcbiAgICAgICAgcmVtb3ZlLFxuICAgICAgICB1cGRhdGVCeUxvY2F0aW9uLFxuICAgICAgICB1cGRhdGVCeUVsZW1lbnQsXG4gICAgICAgIG1vdmUsXG4gICAgICAgIHN3YXAsXG4gICAgICAgIGNvcHlcbiAgICB9ICAgXG59XG5cbiIsImV4cG9ydCBjb25zdCBldmVudHMgPSBmdW5jdGlvbigpe1xuXG4gICAgY29uc3QgX215RXZlbnRzID0ge307XG5cbiAgICBjb25zdCBfaXNFdmVudEhlcmUgPSBmdW5jdGlvbihuYW1lKXtcbiAgICAgICAgcmV0dXJuIF9teUV2ZW50cy5oYXNPd25Qcm9wZXJ0eShuYW1lKTtcbiAgICB9XG5cbiAgICBjb25zdCBfYWRkSGFuZGxlciA9IGZ1bmN0aW9uKG5hbWUsIG5ld0hhbmRsZXIpeyAgICAgICBcbiAgICAgICAgXG4gICAgICAgIGlmICghX2lzRXZlbnRIZXJlKG5hbWUpKXtcbiAgICAgICAgICAgICAgICBfbXlFdmVudHNbbmFtZV0gPSBbXTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICBfbXlFdmVudHNbbmFtZV0ucHVzaChuZXdIYW5kbGVyKSAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgIH07XG5cbiAgICBjb25zdCByZW1vdmVIYW5kbGVyID0gZnVuY3Rpb24obmFtZSwgdG9SZW1vdmUpe1xuXG4gICAgICAgIGlmICghX2lzRXZlbnRIZXJlKG5hbWUpKXtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICBjb25zdCBpbmRleCA9IF9teUV2ZW50c1tuYW1lXS5pbmRleE9mKHRvUmVtb3ZlKTtcbiAgICAgICAgX215RXZlbnRzW25hbWVdLnNwbGljZShpbmRleCwgMSlcblxuICAgIH07XG5cbiAgICBjb25zdCBfZmlyZU1lID0gZnVuY3Rpb24obmFtZSwgLi4ub3B0aW9uYWxBcmcpe1xuICAgICAgICAgICAgXG4gICAgICAgIGlmICghX2lzRXZlbnRIZXJlKG5hbWUpKXtcbiAgICAgICAgICAgIF9teUV2ZW50c1tuYW1lXSA9IFtdO1xuICAgICAgICB9XG5cbiAgICAgICAgX215RXZlbnRzW25hbWVdLmZvckVhY2goZnVuY3Rpb24oaCl7XG4gICAgICAgICAgICAgICByZXR1cm4gaCguLi5vcHRpb25hbEFyZylcbiAgICAgICAgfSlcbiAgICB9O1xuXG4gICAgY29uc3QgcHVibGlzaCA9IGZ1bmN0aW9uKG5hbWUsIC4uLm9wdGlvbmFsQXJnKXsgXG4gICAgICAgXG4gICAgICAgIGlmICghX2lzRXZlbnRIZXJlKG5hbWUpKXtcbiAgICAgICAgICAgIF9teUV2ZW50c1tuYW1lXSA9IFtdO1xuICAgICAgICB9O1xuXG4gICAgICAgIF9maXJlTWUobmFtZSwgLi4ub3B0aW9uYWxBcmcpXG4gICAgICAgIFxuICAgIH07XG5cbiAgICBjb25zdCBzdWJzY3JpYmUgPSBmdW5jdGlvbihuYW1lLCBuZXdIYW5kbGVyKXtcblxuICAgICAgICBpZiAoIV9pc0V2ZW50SGVyZShuYW1lKSl7XG4gICAgICAgICAgICBfbXlFdmVudHNbbmFtZV0gPSBbXTtcbiAgICAgICAgfTtcbiAgIFxuICAgICAgICBfYWRkSGFuZGxlcihuYW1lLCBuZXdIYW5kbGVyKVxuICAgICAgICBcbiAgICB9OyBcblxuICAgICAgICAgICAgXG4gICAgcmV0dXJuIHtcbiAgICAgICAgcHVibGlzaCxcbiAgICAgICAgc3Vic2NyaWJlLFxuICAgICAgICByZW1vdmVIYW5kbGVyXG4gICAgfSAgICBcbn1cblxuIiwiaW1wb3J0IHsgZXZlbnRzIH0gZnJvbSBcIi4vaGVscGVycy9ldmVudHNcIjtcblxubGV0IHByb2plY3RFdmVudHMgPSBldmVudHMoKTtcblxucHJvamVjdEV2ZW50cy5kZWxlZ2F0b3IgPSBmdW5jdGlvbihldmVudCl7XG4gICAgICBzd2l0Y2goZXZlbnQudGFyZ2V0LmNsYXNzTmFtZSl7XG4gICAgICAgICBjYXNlICdyZXZlYWxGb3JtJzogcHJvamVjdEV2ZW50cy5wdWJsaXNoKCdyZXZlYWwnKTtcbiAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICBjYXNlICdwcm9qZWN0Rm9ybSc6IHByb2plY3RFdmVudHMucHVibGlzaCgnY3JlYXRlJywgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RpdGxlSW5wJykudmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0RXZlbnRzLnB1Ymxpc2goJ3NhdmVkJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgY2FzZSAndmlld1Byb2plY3QnOiBwcm9qZWN0RXZlbnRzLnB1Ymxpc2goJ3ZpZXdQcm9qZWN0JywgZXZlbnQpO1xuICAgICAgICAgICBicmVhaztcbiAgICAgICAgIGNhc2UgJ2FkZHRvRG9MaXN0JzogcHJvamVjdEV2ZW50cy5wdWJsaXNoKCdpbnB1dE9yTGlzdCcsIGV2ZW50KVxuICAgICAgICAgICBicmVhaztcbiAgICAgICAgIGNhc2UgJ2Nob29zZU5vdGVUeXBlJzogcHJvamVjdEV2ZW50cy5wdWJsaXNoKCdub3RlVG9Eb1R5cGUnLCBldmVudCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICBicmVhaztcbiAgICAgIC8vYWRkIG1vcmUuIFxuXG59fVxuIFxuICAgICAgIFxuXG5cblxuZXhwb3J0IHsgcHJvamVjdEV2ZW50cyB9IiwiaW1wb3J0IHsgYmFzZUNyZWF0ZSB9IGZyb20gXCIuL2hlbHBlcnMvYmFzZVwiO1xuXG5cbi8vVGVtcGxhdGUgZm9yIGEgdG9kby1ub3RlIFxuXG5leHBvcnQgY29uc3Qgc2luZ2xldG9Eb05vdGUgPSBmdW5jdGlvbihuYW1lKXtcblxuXG4gICBjb25zdCBfbm90ZXN0b3JhZ2UgPSBuZXcgQXJyYXkoKTtcbiAgIGNvbnN0IHRvRG9Ob3RlID0gYmFzZUNyZWF0ZShfbm90ZXN0b3JhZ2UpO1xuICAgXG4gICB0b0RvTm90ZS5uYW1lID0gbmFtZTtcbiAgIHRvRG9Ob3RlLnR5cGUgPSB0eXBlKCk7XG4gICBcbiAgIFxuICAgY29uc3QgdHlwZSA9IGZ1bmN0aW9uKHR5cGU9J2lucHV0Jyl7XG4gICAgICByZXR1cm4gdHlwZVxuICAgfVxuICAgY29uc3QgYWRkTm90ZSA9IGZ1bmN0aW9uKG5vdGUpe1xuICAgICAgdG9Eb05vdGUuYWRkKG5vdGUpO1xuICAgfVxuXG4gICBjb25zdCByZW1vdmVOb3RlID0gZnVuY3Rpb24oaW5kZXgpe1xuICAgICAgY29uc3Qgbm90ZSA9IF9ub3Rlc3RvcmFnZVtpbmRleF07XG4gICAgICB0b0RvTm90ZS5yZW1vdmUobm90ZSwgaW5kZXgpOyAgXG4gICB9XG5cbiAgIGNvbnN0IG1vdmVOb3RlID0gZnVuY3Rpb24oaW5kZXgsIHRhcmdldCl7XG4gICAgICB0b0RvTm90ZS5tb3ZlKGluZGV4LCB0YXJnZXQpO1xuICAgICAgICBcbiAgIH1cbiAgIFxuICAgcmV0dXJuIHRvRG9Ob3RlXG59XG5cbi8vXG5cbi8vVGVtcGxhdGUgZm9yIGEgc2luZ2xlIHByb2plY3RcblxuZXhwb3J0IGNvbnN0IHNpbmdsZVByb2ogPSBmdW5jdGlvbihuYW1lKXtcblxuICAgY29uc3QgX3Byb2pzdG9yYWdlID0gbmV3IEFycmF5KCk7XG4gICBjb25zdCBwcm9qZWN0ID0gYmFzZUNyZWF0ZShfcHJvanN0b3JhZ2UpO1xuICAgcHJvamVjdC5uYW1lID0gbmFtZTtcblxuICAgY29uc3QgYWRkVG9Qcm9qZWN0ID0gZnVuY3Rpb24obmFtZSl7XG4gICAgICBjb25zdCB0b2RvID0gc2luZ2xldG9Eb05vdGUobmFtZSlcbiAgICAgIHByb2plY3QuYWRkKHRvZG8pO1xuICAgfVxuXG4gICBjb25zdCByZW1vdmVGcm9tUHJvamVjdCA9IGZ1bmN0aW9uKGluZGV4KXtcbiAgICAgIGNvbnN0IHRvZG8gPSBwcm9qc3RvcmFnZVtpbmRleF07XG4gICAgICBwcm9qZWN0LnJlbW92ZSh0b2RvLCBpbmRleCk7ICBcbiAgIH0gXG5cbiAgIGNvbnN0IG1vdmV0b0RvID0gZnVuY3Rpb24oaW5kZXgsIHRhcmdldCl7XG4gICAgICBwcm9qZWN0Lm1vdmUoaW5kZXgsIHRhcmdldCk7XG4gICAgICAgICBcbiAgIH1cblxuICAgcmV0dXJuIHByb2plY3RcblxufSBcblxuLy9cblxuLy9PdmVyYWxsIEludGVyZmFjZVxuXG5leHBvcnQgY29uc3QgbWFpbkludGVyZmFjZSA9IGZ1bmN0aW9uKCl7XG4gICBcbiAgIGNvbnN0IF9vdmVyYWxsU3RvcmFnZSA9IG5ldyBBcnJheSgpO1xuICAgY29uc3QgYWxsVG9EbyA9IGJhc2VDcmVhdGUoX292ZXJhbGxTdG9yYWdlKTtcblxuICAgY29uc3QgbmV3UHJvaiA9IGZ1bmN0aW9uKG5hbWUpe1xuICAgICAgY29uc3QgcHJvaiA9IHNpbmdsZVByb2oobmFtZSk7XG4gICAgICBhbGxUb0RvLmFkZChwcm9qKTtcblxuICAgfVxuXG5cbiAgIGNvbnN0IHJlbW92ZVByb2ogPSBmdW5jdGlvbihpbmRleCl7XG4gICAgICBjb25zdCBwcm9qID0gX292ZXJhbGxTdG9yYWdlW2luZGV4XTtcbiAgICAgIGFsbFRvRG8ucmVtb3ZlKHByb2opO1xuICAgfVxuICAgIFxuICAgY29uc3QgbW92ZVByb2ogPSBmdW5jdGlvbihpbmRleCwgdGFyZ2V0KXtcbiAgICAgIGFsbFRvRG8ubW92ZShpbmRleCwgdGFyZ2V0KTtcblxuICAgfVxuICAgXG4gICBjb25zdCB0cmFuc2ZlclRvTG9jYWxTdG9yYWdlID0gZnVuY3Rpb24oKXtcbiAgICAgICAgIHJldHVybiBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnYWNjZXNzJywgSlNPTi5zdHJpbmdpZnkoX292ZXJhbGxTdG9yYWdlKSlcbiAgIH1cblxuICBcbiAgIFxuICAgcmV0dXJuIHtcbiAgICAgIG5ld1Byb2osXG4gICAgICB0cmFuc2ZlclRvTG9jYWxTdG9yYWdlXG4gICAgICAvL2p1c3QgdGhpcyBmb3Igbm93LlxuICAgfVxuICBcbiAgIFxufVxuXG4iLCJpbXBvcnQgeyBET01HZW5lcmFsIH0gZnJvbSBcIi4vaGVscGVycy9ET01cIjtcbmltcG9ydCB7IHByb2plY3RFdmVudHMgfSBmcm9tIFwiLi9wcm9qZWN0ZXZlbnRzXCI7XG5cblxuZXhwb3J0IGNvbnN0IHRlbXBsYXRlRE9NU3RydWN0cyA9IGZ1bmN0aW9uICgpe1xuXG4gICAgY29uc3QgRE9NID0gRE9NR2VuZXJhbCgpXG4gICAgY29uc3QgZGVsZWdhdG9yID0gcHJvamVjdEV2ZW50cy5kZWxlZ2F0b3JcblxuICAgIGNvbnN0IHByb2pCdXR0b25zID0gZnVuY3Rpb24oKXtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IHZpZXdQcm9qZWN0QnRuID0gRE9NLmVsZW1lbnRJbml0KCdidXR0b24nLCB7J2NsYXNzJzogJ3ZpZXdQcm9qZWN0J30sICdWaWV3IEluc2lkZScpO1xuICAgICAgICBjb25zdCBhZGRUb0RvTGlzdEJ0biA9IERPTS5lbGVtZW50SW5pdCgnYnV0dG9uJywgeydjbGFzcyc6ICdhZGR0b0RvTGlzdCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdpZCc6IGBhZGQke0RPTS5zZWxlY3RFbGVtKCcucHJvamVjdCcpLmxlbmd0aH1gfSwgJ0FkZCBUby1EbyBMaXN0Jyk7XG4gICAgICAgIFxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdmlld1Byb2plY3RCdG4sXG4gICAgICAgICAgICBhZGRUb0RvTGlzdEJ0blxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAvL3RlbXBsYXRlIGZvciBwcm9qZWN0IGJ1dHRvbnMgdG8gYmVcbiAgICAgICAgLy91c2VkIGJlbG93LiBSZW1lbWJlciBkYXRhLWF0dHJpYnV0ZVxuICAgICAgICAvL2V2ZW50IGRlbGVnYXRpb24gdG8gYmUgdXNlZC4gXG4gICAgfVxuXG4gICAgY29uc3QgY3JlYXRlUHJvamVjdCA9IGZ1bmN0aW9uKG5hbWUpe1xuICAgICAgICAgY29uc3QgcmVmZXJlbmNlID0gRE9NLnNlbGVjdEVsZW0oJy5wcm9qZWN0Jyk7IFxuICAgICAgICAgY29uc3QgcHJvaiA9IERPTS5lbGVtZW50SW5pdCgnZGl2Jyx7J2lkJzogYCR7bmFtZX0ke3JlZmVyZW5jZS5sZW5ndGh9YCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdkYXRhLWlkJzpgJHtyZWZlcmVuY2UubGVuZ3RofWAsIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2NsYXNzJzogJ3Byb2plY3QnfSxuYW1lXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgIHByb2ouYXBwZW5kQ2hpbGQocHJvakJ1dHRvbnMoKS52aWV3UHJvamVjdEJ0bik7XG4gICAgICAgIHByb2ouYXBwZW5kQ2hpbGQoRE9NLmVsZW1lbnRJbml0KCdkaXYnLHsgJ2NsYXNzJzonbm9uZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnaWQnOmBjb250YWluZXIke3JlZmVyZW5jZS5sZW5ndGh9YH0pKTtcbiAgICAgICAgcHJvai5hcHBlbmRDaGlsZChwcm9qQnV0dG9ucygpLmFkZFRvRG9MaXN0QnRuKTtcblxuICAgICAgICBcbiAgICAgICAgcHJvai5vbmNsaWNrID0gZGVsZWdhdG9yO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICBjb25zdCBjb250YWluZXIgPSBET00uc2VsZWN0RWxlbSgnI2NvbnRhaW5lcicpO1xuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQocHJvaik7XG4gICAgICAgIHJldHVybiBwcm9qXG5cbiAgICAgfVxuXG4gICAgIGNvbnN0IGNyZWF0ZVRvRG9Ob3RlID0gZnVuY3Rpb24oY2hvc2VuVHlwZSl7XG4gICAgICAgIGNvbnN0IGlucHV0ID0gRE9NLnNlbGVjdEVsZW0oJyN0ZW1wb3JhcnlJbnB1dCcpO1xuIFxuICAgICAgICBjb25zdCBwcm9qZWN0ID0gRE9NLnNlbGVjdEVsZW0oJyN0ZW1wb3JhcnlJbnB1dCcpLnBhcmVudEVsZW1lbnQ7XG4gICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IERPTS5zZWxlY3RFbGVtKGAjY29udGFpbmVyJHtwcm9qZWN0LmRhdGFzZXQuaWR9YCk7XG4gICAgICAgIFxuICAgICAgICBjb25zdCBmb3JtID0gRE9NLmVsZW1lbnRJbml0KCdmb3JtJyx7J2NsYXNzJzogJ3RvRG9Ob3RlSW5wdXQnfSkvL2NvbnRpbnVlXG4gICAgICAgIGNvbnN0IHN1Ym1pdCA9IERPTS5lbGVtZW50SW5pdCgnYnV0dG9uJyx7J3R5cGUnOidzdWJtaXQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnY2xhc3MnOidzdWJtaXROb3RlJ30sJ1N1Ym1pdCBOb3RlJylcbiAgICAgICAgXG4gICAgICAgIFxuICAgICAgICBmb3JtLmFwcGVuZENoaWxkKHN1Ym1pdCk7XG4gICAgICAgIGZvcm0ub25zdWJtaXQgPSBkZWxlZ2F0b3I7IC8vKGV2ZW50IGhlcmU6IHN1Ym1pdHMgbm90ZSwgcmVtb3ZlcyB0ZW1wLCByZWVuYWJsZXMgYWRkKSAgIFxuICAgICAgICAgXG4gICAgICAgIGNvbnRhaW5lci5jbGFzc0xpc3QudG9nZ2xlKCdub25lJywgZmFsc2UpO1xuICAgICAgICBzdWJtaXQuY2xhc3NMaXN0LnRvZ2dsZSgnbm9uZScsIHRydWUpO1xuICAgICAgICAgXG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChmb3JtKTtcbiBcbiAgICAgICAgY29uc3QgY2hlY2tDb250ZW50ID0gZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIGlucHV0LnZhbHVlID09PSAnJyA/IHN1Ym1pdC5jbGFzc0xpc3QudG9nZ2xlKCdub25lJyx0cnVlKSA6IHN1Ym1pdC5jbGFzc0xpc3QudG9nZ2xlKCdub25lJyxmYWxzZSlcbiAgICAgICAgfVxuIFxuICAgICAgICBpbnB1dC5vbmlucHV0ID0gY2hlY2tDb250ZW50O1xuIFxuICAgICAgICBjb25zdCBnZW5lcmF0ZUNoZWNrSXRlbSA9IGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICBjb25zdCBjaGVja2JveCA9IERPTS5lbGVtZW50SW5pdCgnaW5wdXQnLCB7J3R5cGUnOidjaGVja2JveCd9KTtcbiAgICAgICAgICAgIGNvbnN0IGxhYmVsID0gRE9NLmVsZW1lbnRJbml0KCdsYWJlbCcsIHsnZm9yJzogYCR7aW5wdXQudmFsdWV9YH0sYCR7aW5wdXQudmFsdWV9YCk7XG4gICAgICAgICAgICBjb25zdCBiciA9IERPTS5lbGVtZW50SW5pdCgnYnInKTtcbiBcbiAgICAgICAgICAgIGlucHV0LnZhbHVlID0gJyc7XG4gICAgICAgICAgICBmb3JtLmFwcGVuZENoaWxkKGNoZWNrYm94KTtcbiAgICAgICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQobGFiZWwpO1xuICAgICAgICAgICAgZm9ybS5hcHBlbmRDaGlsZChicik7XG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuXG4gICAgICAgY29uc3QgZ2VuZXJhdGVDaGVja2xpc3QgPSBmdW5jdGlvbigpeyBcbiAgICAgICAgICAgY29uc3QgYWRkID0gRE9NLmVsZW1lbnRJbml0KCdidXR0b24nLCB7J2NsYXNzJzonYWRkQ2hlY2snfSwgJ1N1Ym1pdCBJdGVtJyk7XG4gICAgICAgICAgIFxuICAgICAgICBjb25zdCBjb252ZXJ0Q2hlY2tCdXR0b24gPSBmdW5jdGlvbigpe1xuICAgICAgICAgICAgIHJldHVybiAgaW5wdXQudmFsdWUgPT09ICcnID8gYWRkLnRleHRDb250ZW50ID0gJ0FkZCBJdGVtJyA6IGFkZC50ZXh0Q29udGVudCA9ICdTdWJtaXQgSXRlbSc7ICBcbiAgICAgICAgfVxuXG4gICAgICAgICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0Jyxjb252ZXJ0Q2hlY2tCdXR0b24pIDtcbiAgICAgICAgICBcbiAgICAgICAgICAgY29uc3Qgc3VibWl0Q2hlY2sgPSBmdW5jdGlvbihldmVudCl7XG4gICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgaWYgKGFkZC50ZXh0Q29udGVudCA9PT0gJ1N1Ym1pdCBJdGVtJyl7XG4gICAgICAgICAgICAgICAgZ2VuZXJhdGVDaGVja0l0ZW0oKTtcbiAgICAgICAgICAgICAgICBpbnB1dC5jbGFzc0xpc3QudG9nZ2xlKCdub25lJywgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgYWRkLnRleHRDb250ZW50ID0gJ0FkZCBJdGVtJztcbiAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgaW5wdXQuY2xhc3NMaXN0LnRvZ2dsZSgnbm9uZScsZmFsc2UpO1xuICAgICAgICAgICAgICAgIGFkZC50ZXh0Q29udGVudCA9ICdTdWJtaXQgSXRlbSdcbiAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICAgICAgICAgYWRkLm9uY2xpY2sgPSAgc3VibWl0Q2hlY2s7ICAgXG4gICAgICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQoYWRkKVxuICAgICAgIH1cblxuICAgICAgIHJldHVybiBjaG9zZW5UeXBlID09PSAnQ2hlY2tsaXN0JyA/IGdlbmVyYXRlQ2hlY2tsaXN0KCkgOiBnZW5lcmF0ZUNoZWNrbGlzdDsgIFxuXG4gICAgIH1cblxuICAgICBjb25zdCBjaG9vc2VOb3RlVHlwZSA9IGZ1bmN0aW9uKGV2ZW50KXtcbiAgICAgICAgY29uc3QgZG9tUHJvamVjdCA9IGV2ZW50LnRhcmdldC5wYXJlbnRFbGVtZW50O1xuXG4gICAgICAgIGlmIChkb21Qcm9qZWN0Lmxhc3RFbGVtZW50Q2hpbGQuY2xhc3NOYW1lID09PSAnY2hvb3NlTm90ZVR5cGUnKSB7XG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuXG4gICAgICAgICBjb25zdCBmb3JtID0gIERPTS5lbGVtZW50SW5pdCgnZm9ybScsIHsnY2xhc3MnOiAnY2hvb3NlTm90ZVR5cGUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdpZCc6ICdub3RlVHlwZUZvcm0nICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICBjb25zdCBsYWJlbCA9IERPTS5lbGVtZW50SW5pdCgnbGFiZWwnLHsnZm9yJzonY2hvb3NlTm90ZVR5cGUnfSwnQ2hvb3NlIFlvdXIgTm90ZSBUeXBlJyk7XG4gICAgICAgICBjb25zdCBzZWxlY3QgPSBET00uZWxlbWVudEluaXQoJ3NlbGVjdCcseydjbGFzcyc6J3NlbGVjdCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2lkJzogJ3NlbGVjdCcgfSk7XG4gICAgICAgICBjb25zdCBvcHRHcm91cCA9IERPTS5lbGVtZW50SW5pdCgnb3B0Z3JvdXAnLHsnbGFiZWwnOiAnTm90ZSBPcHRpb25zJ30sICdDaG9vc2UgeW91ciBub3RlIHR5cGUnKTtcbiAgICAgICAgIGNvbnN0IGNoZWNrbGlzdE9wdCA9IERPTS5lbGVtZW50SW5pdCgnb3B0aW9uJyx7J25hbWUnOiAnY2hlY2tsaXN0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdjbGFzcyc6ICdjaGVja2xpc3QnfSwnQ2hlY2tsaXN0Jyk7XG4gICAgICAgICBjb25zdCBpbnB1dE9wdCA9IERPTS5lbGVtZW50SW5pdCgnb3B0aW9uJyx7J25hbWUnOiAnaW5wdXQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnY2xhc3MnOiAnaW5wdXQnfSwnRnJlZWZvcm0nKTtcbiAgICAgICAgIGNvbnN0IGNob2ljZSA9IERPTS5lbGVtZW50SW5pdCgnYnV0dG9uJywgeyd0eXBlJzonc3VibWl0J30sICdTdWJtaXQnKTtcbiAgICAgICAgIFxuICAgICAgICAgc2VsZWN0LmFwcGVuZENoaWxkKG9wdEdyb3VwKTtcbiAgICAgICAgIG9wdEdyb3VwLmFwcGVuZENoaWxkKGNoZWNrbGlzdE9wdCk7XG4gICAgICAgICBvcHRHcm91cC5hcHBlbmRDaGlsZChpbnB1dE9wdCk7XG4gICAgICAgICBmb3JtLmFwcGVuZENoaWxkKGxhYmVsKTtcbiAgICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQoc2VsZWN0KTtcbiAgICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQoRE9NLmVsZW1lbnRJbml0KCdicicpKTtcbiAgICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQoY2hvaWNlKTtcblxuICAgICAgICAgXG4gICAgICAgICBmb3JtLm9uc3VibWl0ID0gZGVsZWdhdG9yO1xuICAgICAgICAgZG9tUHJvamVjdC5hcHBlbmRDaGlsZChmb3JtKTtcblxuICAgICAgICAgcmV0dXJuIGZvcm1cbiB9XG4gICAgIFxuICAgICBjb25zdCByZXZlYWxDcmVhdGVGb3JtID0gZnVuY3Rpb24oKXtcbiAgICAgICAgbGV0IGhpZGRlbiA9IERPTS5zZWxlY3RFbGVtKCcjY3JlYXRlRm9ybScpO1xuICAgICAgICBoaWRkZW4uY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZGVuJywgZmFsc2UpO1xuICAgICAgICBcbiAgICAgfVxuXG4gICAgIGNvbnN0IHRvZ2dsZVByb2plY3RTaXplID0gZnVuY3Rpb24oZXZlbnQpe1xuICAgICAgICAgICAgZXZlbnQudGFyZ2V0Lm5leHRFbGVtZW50U2libGluZy5jbGFzc0xpc3QudG9nZ2xlKCdub25lJyk7XG4gICAgIH1cblxuICAgICBjb25zdCBub3RlVHlwZUdlbmVyYXRvciA9IGZ1bmN0aW9uKCl7XG5cbiAgICAgICAgY29uc3QgZ2V0U2VsZWN0ZWQgPSAoZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICBjb25zdCBzZWxlY3QgPSAgRE9NLnNlbGVjdEVsZW0oJyNzZWxlY3QnKTtcbiAgICAgICAgICAgICByZXR1cm4gc2VsZWN0Lm9wdGlvbnNbc2VsZWN0LnNlbGVjdGVkSW5kZXhdLnZhbHVlO1xuICAgICAgICB9KSgpXG4gICAgICAgIFxuICAgICAgICBjb25zdCBnZW5lcmF0ZVRlbXBvcmFyeUlucHV0ID0gKGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0ID0gRE9NLnNlbGVjdEVsZW0oJyNub3RlVHlwZUZvcm0nKS5wYXJlbnRFbGVtZW50O1xuICAgICAgICAgICAgY29uc3QgdGVtcG9yYXJ5SW5wdXQgPSBET00uZWxlbWVudEluaXQoJ2lucHV0Jyx7J3R5cGUnOid0ZXh0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdhdXRvY29tcGxldGUnOidvZmYnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2lkJzondGVtcG9yYXJ5SW5wdXQnfSk7IFxuICAgICAgICAgICAgcHJvamVjdC5hcHBlbmRDaGlsZCh0ZW1wb3JhcnlJbnB1dCk7ICAgICAgXG4gICAgICAgIH0pKClcbiAgICAgICAgXG4gICAgICAgIHByb2plY3RFdmVudHMucHVibGlzaCgnZGVsZXRlTm90ZVR5cGVGb3JtJyk7XG4gICAgICAgIHByb2plY3RFdmVudHMucHVibGlzaCgnY3JlYXRlTm90ZScsIGdldFNlbGVjdGVkKTtcblxuXG4gICAgICAgIC8vcmVtZW1iZXIgY3JlYXRlbm90ZSB0aGluZyB3aWxsIGFwcGx5IHRvIHRoZSBiYWNrZW5kIGFzIHdlbGwsXG4gICAgICAgIC8vIHNvIHdoZW4geW91IHBhc3MgaW4gdGhhdCBhcmd1bWVudCwgdGhhdCdzIHdoZW4gdGhlICd0eXBlJ1xuICAgICAgICAvLyBvZiB0aGUgbm90ZSB3aWxsIGJlIHN0b3JlZCBpbiB0aGVyZS4gXG4gICAgICAgIFxuICAgICAgICBcbiAgICAgICAgcmV0dXJuIGdldFNlbGVjdGVkXG4gICAgIH1cblxuXG5cbiAgICBjb25zdCBkZWxldGVBZGROb3RlRm9ybSA9IGZ1bmN0aW9uKCl7XG4gICAgICAgICBjb25zdCBkZWxldGVkID0gRE9NLnNlbGVjdEVsZW0oJyNub3RlVHlwZUZvcm0nKTtcbiAgICAgICAgIGRlbGV0ZWQucmVtb3ZlKCk7XG4gICAgfVxuXG4gICAgY29uc3QgZGlzYWJsZUJ0bnMgPSBmdW5jdGlvbigpe1xuICAgICAgICBjb25zdCAgcHJvamVjdCA9IERPTS5zZWxlY3RFbGVtKCcjdGVtcG9yYXJ5SW5wdXQnKS5wYXJlbnRFbGVtZW50O1xuXG4gICAgICAgIGNvbnN0IGFkZHRvRG9CdXR0b24gPSBET00uc2VsZWN0RWxlbShgI2FkZCR7cHJvamVjdC5kYXRhc2V0LmlkfWApO1xuICAgICAgICBjb25zdCBuZXdQcm9qZWN0QnV0dG9uID0gRE9NLnNlbGVjdEVsZW0oJyNzdWJtaXQnKTtcblxuICAgICAgICBhZGR0b0RvQnV0dG9uLmRpc2FibGVkID0gdHJ1ZTtcbiAgICAgICAgbmV3UHJvamVjdEJ1dHRvbi5kaXNhYmxlZCA9IHRydWU7XG4gICAgICAgIHJldHVybiBcbiAgICAgfVxuICAgIFxuXG4gICAgIHJldHVybiB7XG4gICAgICAgICBjcmVhdGVQcm9qZWN0LFxuICAgICAgICAgY3JlYXRlVG9Eb05vdGUsXG4gICAgICAgICByZXZlYWxDcmVhdGVGb3JtLFxuICAgICAgICAgdG9nZ2xlUHJvamVjdFNpemUsXG4gICAgICAgICBjaG9vc2VOb3RlVHlwZSxcbiAgICAgICAgIG5vdGVUeXBlR2VuZXJhdG9yLFxuICAgICAgICAgZGVsZXRlQWRkTm90ZUZvcm0sXG4gICAgICAgICBkaXNhYmxlQnRucyxcbiAgICAgfVxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgKiBhcyBwcm9qZWN0cyBmcm9tICcuL3Byb2plY3RzJztcbmltcG9ydCB7IERPTUdlbmVyYWwgfSBmcm9tIFwiLi9oZWxwZXJzL0RPTVwiO1xuaW1wb3J0IHsgdGVtcGxhdGVET01TdHJ1Y3RzIH0gZnJvbSAnLi9wcm9qZWN0c0RPTSc7XG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCB7IHByb2plY3RFdmVudHMgfSBmcm9tICcuL3Byb2plY3RldmVudHMnO1xuXG5cbmNvbnN0IHJldmVhbFRvRG8gPSAoZnVuY3Rpb24oKXsgXG4gICAgXG4gICAgLy9DYWxsaW5nIG1vZHVsZSBPYmplY3RzXG4gICAgY29uc3QgRE9NID0gRE9NR2VuZXJhbCgpO1xuICAgIGNvbnN0IHN0cnVjdHMgPSB0ZW1wbGF0ZURPTVN0cnVjdHMoKTtcbiAgICBjb25zdCBtYWluID0gcHJvamVjdHMubWFpbkludGVyZmFjZSgpO1xuXG4gICAgLy9Nb2R1bGUgbWV0aG9kcyB0byBiZSB1c2VkXG4gICAgY29uc3QgbmV3UHJvaiA9IG1haW4ubmV3UHJvajtcbiAgICBjb25zdCBsb2NhbFN0b3JlID0gbWFpbi50cmFuc2ZlclRvTG9jYWxTdG9yYWdlO1xuICAgIGNvbnN0IGNyZWF0ZVByb2plY3QgPSBzdHJ1Y3RzLmNyZWF0ZVByb2plY3Q7XG4gICAgY29uc3QgcmV2ZWFsQ3JlYXRlRm9ybSA9IHN0cnVjdHMucmV2ZWFsQ3JlYXRlRm9ybTtcbiAgICBjb25zdCB0b2dnbGVQcm9qZWN0U2l6ZSA9IHN0cnVjdHMudG9nZ2xlUHJvamVjdFNpemU7XG4gICAgY29uc3QgY2hvb3NlTm90ZVR5cGUgPSBzdHJ1Y3RzLmNob29zZU5vdGVUeXBlO1xuICAgIGNvbnN0IG5vdGVUeXBlR2VuZXJhdG9yID0gc3RydWN0cy5ub3RlVHlwZUdlbmVyYXRvcjtcbiAgICBjb25zdCBkZWxldGVBZGROb3RlRm9ybSA9IHN0cnVjdHMuZGVsZXRlQWRkTm90ZUZvcm07XG4gICAgY29uc3QgZGlzYWJsZUJ0bnMgPSBzdHJ1Y3RzLmRpc2FibGVCdG5zO1xuICAgIGNvbnN0IGNyZWF0ZVRvRG9Ob3RlID0gc3RydWN0cy5jcmVhdGVUb0RvTm90ZTtcbiAgICBjb25zdCBkZWxlZ2F0b3IgPSBwcm9qZWN0RXZlbnRzLmRlbGVnYXRvcjtcblxuICAgIFxuICAgIFxuICAgIC8vRXZlbnQgU3Vic2NyaXB0aW9uc1xuICAgIHByb2plY3RFdmVudHMuc3Vic2NyaWJlKCd2aWV3UHJvamVjdCcsIHRvZ2dsZVByb2plY3RTaXplKTtcbiAgICBwcm9qZWN0RXZlbnRzLnN1YnNjcmliZSgnY3JlYXRlJywgY3JlYXRlUHJvamVjdCk7XG4gICAgcHJvamVjdEV2ZW50cy5zdWJzY3JpYmUoJ2NyZWF0ZScsIG5ld1Byb2opO1xuICAgIHByb2plY3RFdmVudHMuc3Vic2NyaWJlKCdzYXZlZCcsIGxvY2FsU3RvcmUpO1xuICAgIHByb2plY3RFdmVudHMuc3Vic2NyaWJlKCdyZXZlYWwnLCByZXZlYWxDcmVhdGVGb3JtKTtcbiAgICBwcm9qZWN0RXZlbnRzLnN1YnNjcmliZSgnaW5wdXRPckxpc3QnLCBjaG9vc2VOb3RlVHlwZSk7XG4gICAgcHJvamVjdEV2ZW50cy5zdWJzY3JpYmUoJ25vdGVUb0RvVHlwZScsIG5vdGVUeXBlR2VuZXJhdG9yKTtcbiAgICAvL3Byb2plY3RFdmVudHMuc3Vic2NyaWJlKCdub3RlVG9Eb1R5cGUnLCBmdW5jdGlvbiBTdG9yZSBzZWxlY3RlZCB0eXBlIHRvIGJlIHJldHJpZXZlZCBieSBiYWNrZW5kIGxhdGVyLilcbiAgICBwcm9qZWN0RXZlbnRzLnN1YnNjcmliZSgnZGVsZXRlTm90ZVR5cGVGb3JtJywgZGlzYWJsZUJ0bnMpO1xuICAgIHByb2plY3RFdmVudHMuc3Vic2NyaWJlKCdkZWxldGVOb3RlVHlwZUZvcm0nLCBkZWxldGVBZGROb3RlRm9ybSk7XG4gICAgLy9wcm9qZWN0RXZlbnRzLnN1YnNjcmliZSgnY3JlYXRlTm90ZScsIGZ1bmN0aW9uUmU6QmFja2VuZFVwZGF0ZSAgd2l0aCB1c2VyIHN1Ym1pc3Npb24gJiBpbmNsdWRpbmcgdHlwZSBjaG9zZW4gJiYgd2hldGhlciBpdGVtcyBhcmUgY2hlY2tlZCBvciBub3QgKGlmIGNoZWNrYm94KSwgcmVtZW1iZXIgbG9jYWxTdG9yYWdlIHVwZGF0ZSBhcyB3ZWxsLilcbiAgICBwcm9qZWN0RXZlbnRzLnN1YnNjcmliZSgnY3JlYXRlTm90ZScsIGNyZWF0ZVRvRG9Ob3RlKVxuICAgIFxuXG4gICAgLy9Jbml0aWFsIGVsZW1lbnRzXG4gICAgY29uc3QgbWFpbkNvbnRhaW5lciA9IChmdW5jdGlvbigpe1xuICAgIFxuICAgICAgICBjb25zdCBjb250YWluZXIgPSAgRE9NLmVsZW1lbnRJbml0KCdkaXYnLHsnaWQnOidjb250YWluZXInfSlcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjb250YWluZXIpXG4gICAgICAgIHJldHVybiBjb250YWluZXJcbiAgICAgXG59KSgpXG5cbiAgICBjb25zdCBoZWFkZXIgPSAoZnVuY3Rpb24oKXtcbiAgICAgICAgXG4gICAgICAgIC8vSW5pdGlhbGlzZSBlbGVtZW50c1xuICAgICAgICBjb25zdCBoZWFkID0gRE9NLmVsZW1lbnRJbml0KCdoZWFkZXInLCB7J2lkJzonaGVhZGVyJ30pO1xuICAgICAgICBjb25zdCB0aXRsZSA9IERPTS5lbGVtZW50SW5pdCgnaDEnLHsnaWQnOiAndGl0bGUnfSwgJ1RoaXMgaXMgeW91ciBUby1EbyBsaXN0Jyk7XG4gICAgICAgIGNvbnN0IHJldmVhbEZvcm0gPSBET00uZWxlbWVudEluaXQoJ2J1dHRvbicseydjbGFzcyc6J3JldmVhbEZvcm0nfSwnTmV3IFByb2plY3QnKTtcbiAgICAgICAgXG4gICAgICAgIC8vQWRkIGhlYWRlciBldmVudCBsaXN0ZW5lclxuICAgICAgICBoZWFkLm9uY2xpY2sgPSBkZWxlZ2F0b3I7XG4gICAgICAgIFxuICAgICAgICAvL0FwcGVuZCB0byBkb2N1bWVudFxuICAgICAgICBoZWFkLmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgICAgICAgaGVhZC5hcHBlbmRDaGlsZChyZXZlYWxGb3JtKTtcbiAgICAgICAgbWFpbkNvbnRhaW5lci5hcHBlbmRDaGlsZChoZWFkKTtcblxuICAgICAgICByZXR1cm4gaGVhZDtcbn0pKClcbiAgICBcbiAgICBjb25zdCBkZWZhdWx0UHJvamVjdCA9IChmdW5jdGlvbigpe1xuICAgICAgICBcbiAgICB9KSgpXG5cbiAgICBcbiAgICBjb25zdCByZW5kZXJMb2NhbFN0b3JhZ2UgPSBmdW5jdGlvbigpe1xuICAgICAgICAvL1RoaXMgd2lsbCB1c2UgbG9jYWxTdG9yYWdlIHRvIGNoZWNrXG4gICAgICAgIC8vaWYgdGhlIHVzZXIgaGFzIGFueSBzYXZlZCBpbnN0YW5jZXNcbiAgICAgICAgLy9vZiBwcm9qZWN0cyBhbmQgcmVuZGVyIHRoZW0gaWYgc28uIFxuICAgICAgICAvL1JlbWVtYmVyIHRvIHRha2UgYWNjb3VudCBhbnkgZGlmZmVyZW5jZXMgaW4gZGF0YSBiZXR3ZWVuIGJhY2tlbmQgYW5kIERPTVxuICAgIH1cblxuXG4gICAgIFxuICAgIGNvbnN0IGNyZWF0ZUZvcm0gPSAoZnVuY3Rpb24oKXtcbiAgICAgICAgIGNvbnN0IGZvcm0gPSBET00uZWxlbWVudEluaXQoJ2Zvcm0nLHsnaWQnOidjcmVhdGVGb3JtJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnY2xhc3MnOidoaWRkZW4gcHJvamVjdEZvcm0nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgZm9ybS5hcHBlbmRDaGlsZChET00uZWxlbWVudEluaXQoJ2JyJykpOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICBmb3JtLmFwcGVuZENoaWxkKERPTS5lbGVtZW50SW5pdCgnbGFiZWwnLHsnZm9yJzondGl0bGVJbnAnfSwnUHJvamVjdCBUaXRsZScpKVxuICAgICAgICAgZm9ybS5hcHBlbmRDaGlsZChET00uZWxlbWVudEluaXQoJ2JyJykpO1xuICAgICAgICAgZm9ybS5hcHBlbmRDaGlsZChET00uZWxlbWVudEluaXQoJ2lucHV0Jyx7J3R5cGUnOid0ZXh0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnaWQnIDogJ3RpdGxlSW5wJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnYXV0b2NvbXBsZXRlJzogJ29mZicsICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnbmFtZSc6J3RpdGxlSW5wJ30pKTtcbiAgICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQoRE9NLmVsZW1lbnRJbml0KCdidXR0b24nLHsndHlwZSc6J3N1Ym1pdCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdjbGFzcyc6ICdzdWJtaXQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2lkJzonc3VibWl0J30sJ3N1Ym1pdCcpKTtcbiAgICAgICAgIFxuIFxuICAgICAgICAgZm9ybS5vbnN1Ym1pdCA9IGRlbGVnYXRvcjtcbiAgICAgICAgIG1haW5Db250YWluZXIuYXBwZW5kQ2hpbGQoZm9ybSk7XG4gICAgICAgICByZXR1cm4gZm9ybTsgXG59KSgpXG4gICAgIFxuXG59KSgpXG5cbiAgICAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=