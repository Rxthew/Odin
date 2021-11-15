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
___CSS_LOADER_EXPORT___.push([module.id, "html {\n    box-sizing: border-box;\n\n}\n\n\n*, *:before, *:after{\n    box-sizing: inherit;\n    margin: 0;\n    padding: 0;\n}\n\nbody {\n    display: flex;\n}\n\n.hidden {\n    visibility: hidden\n}\n\n.project {\n    border: 1px solid black;\n}\n\n.none {\n    display: none;\n}\n\n.toDoNoteInput {\n    border: 1px solid black;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,sBAAsB;;AAE1B;;;AAGA;IACI,mBAAmB;IACnB,SAAS;IACT,UAAU;AACd;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI;AACJ;;AAEA;IACI,uBAAuB;AAC3B;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,uBAAuB;AAC3B","sourcesContent":["html {\n    box-sizing: border-box;\n\n}\n\n\n*, *:before, *:after{\n    box-sizing: inherit;\n    margin: 0;\n    padding: 0;\n}\n\nbody {\n    display: flex;\n}\n\n.hidden {\n    visibility: hidden\n}\n\n.project {\n    border: 1px solid black;\n}\n\n.none {\n    display: none;\n}\n\n.toDoNoteInput {\n    border: 1px solid black;\n}"],"sourceRoot":""}]);
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
         case 'edit': projectEvents.publish('modifyNote',event);
         break;
         case 'submitNote' : projectEvents.publish('submitNote', event);
                             event.preventDefault();
         break;
         case 'revertMod' : projectEvents.publish('revert',event);
         break;
         case 'submitMod': projectEvents.publish('submitModNote',event);
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
         const reference = DOM.selectElem('.project'); 
         const proj = DOM.elementInit('div',{'id': `${name}${reference.length}`,
                                             'data-id':`${reference.length}`, 
                                             'class': 'project'},name
                                             )
        const viewProjectBtn = DOM.elementInit('button', {'class': 'viewProject'}, 'View Inside');
        const addToDoListBtn = DOM.elementInit('button', {'class': 'addtoDoList',
                                                           'id': `add${DOM.selectElem('.project').length}`}, 'Add To-Do List');
        proj.appendChild(viewProjectBtn);
        proj.appendChild(DOM.elementInit('div',{ 'class':'none',
                                                   'id':`container${reference.length}`}));
        proj.appendChild(addToDoListBtn);

        
        proj.onclick = delegator;
                                                                      
        const container = DOM.selectElem('#container');
        container.appendChild(proj);
        
        return proj

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

        
        form.appendChild(submit);
        form.appendChild(cancel);
        form.appendChild(remove);
        

        form.onsubmit = delegator;   
         
        container.classList.toggle('none', false);
        
         
        container.appendChild(form);

        const _generateChecklist = function(){ 
           const add = DOM.elementInit('button', {'class':'addCheck',
                                                     'id':`addCheck${project.dataset.id}${formReference.length}`,
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
        const all = document.querySelectorAll('button');
        all.forEach(btn => btn.className === 'viewProject' || btn === trgt || btn.classList.contains('none') ? btn.disabled = false : btn.disabled = true);
    }
    
    
    const enableBtns = function(){
        const all = document.querySelectorAll('button');
        all.forEach(btn => btn.disabled = false);

        const modifyBtns = DOM.selectElem('.edit');
        modifyBtns.forEach(btn => btn.classList.toggle('none',false));
        const deleteBtns = DOM.selectElem('.deleteCheck');
        deleteBtns.forEach(btn => btn.classList.toggle('none',false));        
    }

     const modifyToDoNote = function(event){
         
         event.preventDefault();
         const form = event.target.parentElement.parentElement;
         
         const modInput = DOM.elementInit('input',{'type':'text',
         'autocomplete':'off',
         'required':'required',
         'class': 'modInput',
          'id':'modInput'});
         const submit = DOM.elementInit('button',{'type':'submit',
        'class':'submitMod',
         'id': 'submitMod'
         },'Submit Note')
         const revert = DOM.elementInit('button',{
         'class':'revertMod',
         'data-transfer':`${event.target.parentElement.firstChild.nodeValue}` //temporary, update to use local storage & backend
          },'Revert Back')

        disableBtns();

         const _replaceWithInput = (function(){
            modInput.value = event.target.parentElement.firstChild.nodeValue; 
            event.target.parentElement.replaceWith(modInput);
            modInput.insertAdjacentElement('afterend',submit);
            submit.insertAdjacentElement('afterend',revert);
       })() 
        return   

     }

     const submitModifiedNote = function(event){
        
        event.preventDefault();
        const form = event.target.parentElement;
        const input = event.target.previousElementSibling;
        const revert = event.target.nextElementSibling;
        const label = DOM.elementInit('label', {'for': `${input.value}`},`${input.value}`);
        const text = DOM.elementInit('p', {'class':'text'}, `${input.value}`);
        const modify = DOM.elementInit('button', {'class':'edit'},
        'Edit');
        
        if(input.value === ''){return};

        if(form.classList.contains('checkbox')){
            label.appendChild(modify);
            input.replaceWith(label);

        }
        else{
            text.appendChild(modify);
            input.replaceWith(text); 
        }
        
        enableBtns();
    
        revert.remove();
        event.target.remove();


        return         
     }

     const revertModifiedNote = function(event){
        
        event.preventDefault();
        const form = event.target.parentElement;
        const submit = event.target.previousElementSibling;
        const input = submit.previousElementSibling;
        const label = DOM.elementInit('label', {'for': `${event.target.dataset.transfer}`},`${event.target.dataset.transfer}`); //temporary, update to use local storage & backend
        const text = DOM.elementInit('p', {'class':'text'}, `${event.target.dataset.transfer}`); //temporary, update to use local storage & backend
        const modify = DOM.elementInit('button', {'class':'edit'},
        'Edit');        

        if(form.classList.contains('checkbox')){
            label.appendChild(modify);
            input.replaceWith(label);

        }
        else{
            text.appendChild(modify);
            input.replaceWith(text); 
        }
         
        enableBtns();
    
        submit.remove();
        event.target.remove()


        return         
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
            'required':'required',
            'id':'temporaryInput',
           'class': 'temporaryInput none'});  
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
        if(form.classList.contains('checkbox')){
           form.children.length <= 2 ? form.remove() : false;  
        }
        else {
        form.children.length <= 1 ? form.remove() : false;
        }
    })()

        return
    }
        

    const cancelNote = function(event){
        
        const cancel = event.target;
        const form = cancel.parentElement;
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
        const modify = DOM.elementInit('button', {'class':'edit none'},
        'Edit');
        const del = DOM.elementInit('button', {'class': 'deleteCheck none'},'delete' )
       
        const checkbox = DOM.elementInit('input', {'type':'checkbox'});
        const label = DOM.elementInit('label', {'for': `${input.value}`},`${input.value}`);
        const br = DOM.elementInit('br');

        input.value = '';
        label.appendChild(modify);
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
    const modify = DOM.elementInit('button', {'class':'edit'},
    'Edit');
    
    if (input.value === ''){return};

    if (form.classList.contains('checkbox')){
        _generateCheckItem();
        remove.classList.toggle('none',false);
        input.classList.toggle('none', true);        
        return
    }
    
    const text = DOM.elementInit('p', {'class':'text'}, `${input.value}`);
    text.appendChild(modify);
    form.appendChild(text);
    remove.classList.toggle('none',false);

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
         enableBtns,
         cleanToDoForm,
         modifyToDoNote,
         cancelNote,
         revertModifiedNote,
         addNewCheck,
         generateNewAddCheck,
         submitItem,
         submitModifiedNote
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
    const enableBtns = structs.enableBtns;
    const cleanToDoForm = structs.cleanToDoForm;
    const addNewCheck = structs.addNewCheck;
    const cancelNote = structs.cancelNote;
    const revertModifiedNote = structs.revertModifiedNote;
    const modifyToDoNote = structs.modifyToDoNote;
    const submitItem = structs.submitItem;
    const generateNewAddCheck = structs.generateNewAddCheck;
    const submitModifiedNote = structs.submitModifiedNote;
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
    _projectevents__WEBPACK_IMPORTED_MODULE_4__.projectEvents.subscribe('abortNoteTypeForm', deleteAddNoteForm);
    _projectevents__WEBPACK_IMPORTED_MODULE_4__.projectEvents.subscribe('abortNoteTypeForm', enableBtns);
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
    _projectevents__WEBPACK_IMPORTED_MODULE_4__.projectEvents.subscribe('modifyNote', modifyToDoNote);
    _projectevents__WEBPACK_IMPORTED_MODULE_4__.projectEvents.subscribe('revert', revertModifiedNote);
    _projectevents__WEBPACK_IMPORTED_MODULE_4__.projectEvents.subscribe('submitModNote', submitModifiedNote)
    


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUNyRWE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7QUNmTztBQUNQO0FBQ0Esa0RBQWtEO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuQ087QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsNEJBQTRCLHFCQUFxQjtBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLDRCQUE0QixxQkFBcUI7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ3BGTzs7QUFFUDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7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ZG8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9oZWxwZXJzL0RPTS5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL2hlbHBlcnMvYmFzZS5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL2hlbHBlcnMvZXZlbnRzLmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvcHJvamVjdGV2ZW50cy5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL3Byb2plY3RzLmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvcHJvamVjdHNET00uanMiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImh0bWwge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcblxcbn1cXG5cXG5cXG4qLCAqOmJlZm9yZSwgKjphZnRlcntcXG4gICAgYm94LXNpemluZzogaW5oZXJpdDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLmhpZGRlbiB7XFxuICAgIHZpc2liaWxpdHk6IGhpZGRlblxcbn1cXG5cXG4ucHJvamVjdCB7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG4ubm9uZSB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi50b0RvTm90ZUlucHV0IHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxzQkFBc0I7O0FBRTFCOzs7QUFHQTtJQUNJLG1CQUFtQjtJQUNuQixTQUFTO0lBQ1QsVUFBVTtBQUNkOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJO0FBQ0o7O0FBRUE7SUFDSSx1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksdUJBQXVCO0FBQzNCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImh0bWwge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcblxcbn1cXG5cXG5cXG4qLCAqOmJlZm9yZSwgKjphZnRlcntcXG4gICAgYm94LXNpemluZzogaW5oZXJpdDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLmhpZGRlbiB7XFxuICAgIHZpc2liaWxpdHk6IGhpZGRlblxcbn1cXG5cXG4ucHJvamVjdCB7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG4ubm9uZSB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi50b0RvTm90ZUlucHV0IHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCB0aGlzLmxlbmd0aDsgX2krKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW19pXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pMiA9IDA7IF9pMiA8IG1vZHVsZXMubGVuZ3RoOyBfaTIrKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaTJdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJleHBvcnQgY29uc3QgRE9NR2VuZXJhbCA9IGZ1bmN0aW9uKCl7XG4gICAgXG4gICAgY29uc3QgZWxlbWVudEluaXQgPSBmdW5jdGlvbihlbGVtLCBhdHRyc09iaj17fSx0ZXh0U3RyaW5nPScnKXtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGVsZW0pO1xuICAgICAgICBcbiAgICAgICAgaWYgKE9iamVjdC5rZXlzKGF0dHJzT2JqKS5sZW5ndGggPiAwKXtcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKGF0dHJzT2JqKS5mb3JFYWNoKGZ1bmN0aW9uKGF0dCl7XG4gICAgICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZShhdHQsIGF0dHJzT2JqW2F0dF0pXG4gICAgICAgIH0pXG4gICAgfSAgIFxuICAgICAgICBpZiAodGV4dFN0cmluZy5sZW5ndGggPiAwKXtcbiAgICAgICAgICAgIGVsZW1lbnQudGV4dENvbnRlbnQgPSB0ZXh0U3RyaW5nO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGVsZW1lbnQgICAgICAgXG5cbiAgICB9O1xuXG4gICBjb25zdCBzZWxlY3RFbGVtID0gZnVuY3Rpb24oc2VsZWN0b3JTdHJpbmcpe1xuXG4gICAgICAgaWYgKHNlbGVjdG9yU3RyaW5nWzBdID09PSAnIycpe1xuICAgICAgICAgICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3RvclN0cmluZylcbiAgICAgICB9XG4gICAgICAgZWxzZSB7XG4gICAgICAgICAgIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yU3RyaW5nKTtcbiAgICAgICB9XG4gICAgICAgXG4gICB9O1xuXG4gICByZXR1cm4ge1xuICAgICAgIGVsZW1lbnRJbml0LCBcbiAgICAgICBzZWxlY3RFbGVtLFxuICAgfVxuXG59XG5cblxuXG4iLCJleHBvcnQgY29uc3QgYmFzZUNyZWF0ZSA9IGZ1bmN0aW9uKHN0b3JhZ2Upe1xuICAgICAgXG5jb25zdCBfc3RvcmFnZSA9IHN0b3JhZ2UgfHwgbmV3IEFycmF5KCk7XG5cbihmdW5jdGlvbigpe1xuICAgIGlmICghQXJyYXkuaXNBcnJheShfc3RvcmFnZSkpe1xuICAgICAgICB0aHJvdyAnRXJyb3IhIEFyZ3VtZW50IG11c3QgYmUgYW4gYXJyYXknO1xuICAgIH1cbiAgICB9KSgpXG4gICAgXG5jb25zdCBhZGQgPSBmdW5jdGlvbihlbGVtKXtcbiAgICBfc3RvcmFnZS5wdXNoKGVsZW0pO1xuXG59O1xuXG5jb25zdCByZW1vdmUgPSBmdW5jdGlvbihlbGVtLCBpbmRleD0wKXtcbiAgICBpZiAoaW5kZXggPT09IDApe1xuICAgICAgICBmb3IgKGxldCBpID0gaW5kZXg7IGkgPCBfc3RvcmFnZS5sZW5ndGg7IGkrKyl7XG4gICAgICAgICAgICBpZihfc3RvcmFnZVtpXSA9PT0gZWxlbSl7XG4gICAgICAgICAgICAgICAgX3N0b3JhZ2Uuc3BsaWNlKGksMSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgIH1cbiAgICAgICAgIH0gICAgICAgICBcbiAgICAgICB9XG4gICAgICAgZWxzZSBpZiAoaW5kZXggPiAwICYmIGluZGV4IDwgX3N0b3JhZ2UubGVuZ3RoKXtcbiAgICAgICAgICAgX3N0b3JhZ2Uuc3BsaWNlKGluZGV4LCAxKVxuICAgICAgIH0gIFxufTtcblxuY29uc3QgdXBkYXRlQnlMb2NhdGlvbiA9IGZ1bmN0aW9uKGluZGV4LCByZXBsYWNlKXtcbiAgICAgICAgaWYgKGluZGV4ID4gMCAmJiBpbmRleCA8IF9zdG9yYWdlLmxlbmd0aCl7XG4gICAgICAgICAgICBfc3RvcmFnZS5zcGxpY2UoaW5kZXgsMSxyZXBsYWNlKTtcbiAgICAgICAgfVxuXG59O1xuXG5jb25zdCB1cGRhdGVCeUVsZW1lbnQgPSBmdW5jdGlvbihlbGVtLCByZXBsYWNlKXtcbiAgICAgICAgZm9yIChsZXQgeCA9IGluZGV4OyB4IDwgX3N0b3JhZ2UubGVuZ3RoOyB4Kyspe1xuICAgICAgICAgICAgaWYoX3N0b3JhZ2VbeF0gPT09IGVsZW0pe1xuICAgICAgICAgICAgICAgIF9zdG9yYWdlLnNwbGljZSh4LDEsIHJlcGxhY2UpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfX1cbn07XG5cblxuY29uc3QgbW92ZSA9IGZ1bmN0aW9uKGluZGV4LCB0YXJnZXQpe1xuICAgIGlmIChpbmRleCA+PSAwICYmIGluZGV4IDxfc3RvcmFnZS5sZW5ndGggJiYgdGFyZ2V0ID49IDAgJiYgdGFyZ2V0IDxfc3RvcmFnZS5sZW5ndGgpe1xuICAgICAgICBjb25zdCBtb3ZlZCA9IF9zdG9yYWdlW2luZGV4XTtcbiAgICAgICAgX3N0b3JhZ2Uuc3BsaWNlKGluZGV4LDEpO1xuICAgICAgICBfc3RvcmFnZS5zcGxpY2UodGFyZ2V0LDAsbW92ZWQpXG4gICAgXG4gICAgfSAgIFxuICAgIGVsc2UgaWYoaW5kZXggPj0gMCAmJiBpbmRleCA8X3N0b3JhZ2UubGVuZ3RoICYmIHRhcmdldCA+PSBfc3RvcmFnZS5sZW5ndGgpIHtcbiAgICAgICAgY29uc3QgcmVwbGFjZW1lbnQgPSBfc3RvcmFnZVtpbmRleF07XG4gICAgICAgIF9zdG9yYWdlLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgIF9zdG9yYWdlLnB1c2gocmVwbGFjZW1lbnQpO1xuXG4gICAgfSAgICBcbn07XG5cbmNvbnN0IHN3YXAgPSBmdW5jdGlvbihpbmRleEEsIGluZGV4Qil7XG4gICAgaWYgKGluZGV4QSA+PSAwICYmIGluZGV4QSA8X3N0b3JhZ2UubGVuZ3RoICYmIGluZGV4QiA+PSAwICYmIGluZGV4QiA8X3N0b3JhZ2UubGVuZ3RoKXtcbiAgICAgICAgXG4gICAgICAgW19zdG9yYWdlW2luZGV4QV0sIF9zdG9yYWdlW2luZGV4Ql1dID0gW19zdG9yYWdlW2luZGV4Ql0sIF9zdG9yYWdlW2luZGV4QV1dXG4gICAgfVxuXG59O1xuXG5jb25zdCBjb3B5ID0gZnVuY3Rpb24gKGluZGV4KXtcbiAgICBpZiAoaW5kZXggPj0gMCAmJiBpbmRleCA8IF9zdG9yYWdlLmxlbmd0aCl7XG4gICAgICAgIGxldCBjbG9uZSA9IF9zdG9yYWdlW2luZGV4XTtcbiAgICAgICAgX3N0b3JhZ2UucHVzaChjbG9uZSk7XG4gICAgfVxufVxuICAgIFxuICAgIHJldHVybiB7XG4gICAgICAgIGFkZCxcbiAgICAgICAgcmVtb3ZlLFxuICAgICAgICB1cGRhdGVCeUxvY2F0aW9uLFxuICAgICAgICB1cGRhdGVCeUVsZW1lbnQsXG4gICAgICAgIG1vdmUsXG4gICAgICAgIHN3YXAsXG4gICAgICAgIGNvcHlcbiAgICB9ICAgXG59XG5cbiIsImV4cG9ydCBjb25zdCBldmVudHMgPSBmdW5jdGlvbigpe1xuXG4gICAgY29uc3QgX215RXZlbnRzID0ge307XG5cbiAgICBjb25zdCBfaXNFdmVudEhlcmUgPSBmdW5jdGlvbihuYW1lKXtcbiAgICAgICAgcmV0dXJuIF9teUV2ZW50cy5oYXNPd25Qcm9wZXJ0eShuYW1lKTtcbiAgICB9XG5cbiAgICBjb25zdCBfYWRkSGFuZGxlciA9IGZ1bmN0aW9uKG5hbWUsIG5ld0hhbmRsZXIpeyAgICAgICBcbiAgICAgICAgXG4gICAgICAgIGlmICghX2lzRXZlbnRIZXJlKG5hbWUpKXtcbiAgICAgICAgICAgICAgICBfbXlFdmVudHNbbmFtZV0gPSBbXTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICBfbXlFdmVudHNbbmFtZV0ucHVzaChuZXdIYW5kbGVyKSAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgIH07XG5cbiAgICBjb25zdCByZW1vdmVIYW5kbGVyID0gZnVuY3Rpb24obmFtZSwgdG9SZW1vdmUpe1xuXG4gICAgICAgIGlmICghX2lzRXZlbnRIZXJlKG5hbWUpKXtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICBjb25zdCBpbmRleCA9IF9teUV2ZW50c1tuYW1lXS5pbmRleE9mKHRvUmVtb3ZlKTtcbiAgICAgICAgX215RXZlbnRzW25hbWVdLnNwbGljZShpbmRleCwgMSlcblxuICAgIH07XG5cbiAgICBjb25zdCBfZmlyZU1lID0gZnVuY3Rpb24obmFtZSwgLi4ub3B0aW9uYWxBcmcpe1xuICAgICAgICAgICAgXG4gICAgICAgIGlmICghX2lzRXZlbnRIZXJlKG5hbWUpKXtcbiAgICAgICAgICAgIF9teUV2ZW50c1tuYW1lXSA9IFtdO1xuICAgICAgICB9XG5cbiAgICAgICAgX215RXZlbnRzW25hbWVdLmZvckVhY2goZnVuY3Rpb24oaCl7XG4gICAgICAgICAgICAgICByZXR1cm4gaCguLi5vcHRpb25hbEFyZylcbiAgICAgICAgfSlcbiAgICB9O1xuXG4gICAgY29uc3QgcHVibGlzaCA9IGZ1bmN0aW9uKG5hbWUsIC4uLm9wdGlvbmFsQXJnKXsgXG4gICAgICAgXG4gICAgICAgIGlmICghX2lzRXZlbnRIZXJlKG5hbWUpKXtcbiAgICAgICAgICAgIF9teUV2ZW50c1tuYW1lXSA9IFtdO1xuICAgICAgICB9O1xuXG4gICAgICAgIF9maXJlTWUobmFtZSwgLi4ub3B0aW9uYWxBcmcpXG4gICAgICAgIFxuICAgIH07XG5cbiAgICBjb25zdCBzdWJzY3JpYmUgPSBmdW5jdGlvbihuYW1lLCBuZXdIYW5kbGVyKXtcblxuICAgICAgICBpZiAoIV9pc0V2ZW50SGVyZShuYW1lKSl7XG4gICAgICAgICAgICBfbXlFdmVudHNbbmFtZV0gPSBbXTtcbiAgICAgICAgfTtcbiAgIFxuICAgICAgICBfYWRkSGFuZGxlcihuYW1lLCBuZXdIYW5kbGVyKVxuICAgICAgICBcbiAgICB9OyBcblxuICAgICAgICAgICAgXG4gICAgcmV0dXJuIHtcbiAgICAgICAgcHVibGlzaCxcbiAgICAgICAgc3Vic2NyaWJlLFxuICAgICAgICByZW1vdmVIYW5kbGVyXG4gICAgfSAgICBcbn1cblxuIiwiaW1wb3J0IHsgZXZlbnRzIH0gZnJvbSBcIi4vaGVscGVycy9ldmVudHNcIjtcblxubGV0IHByb2plY3RFdmVudHMgPSBldmVudHMoKTtcblxucHJvamVjdEV2ZW50cy5kZWxlZ2F0b3IgPSBmdW5jdGlvbihldmVudCl7XG4gICAgICBzd2l0Y2goZXZlbnQudGFyZ2V0LmNsYXNzTmFtZSl7XG4gICAgICAgICBjYXNlICdyZXZlYWxGb3JtJzogcHJvamVjdEV2ZW50cy5wdWJsaXNoKCdyZXZlYWwnKTtcbiAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICBjYXNlICdwcm9qZWN0Rm9ybSc6IHByb2plY3RFdmVudHMucHVibGlzaCgnY3JlYXRlJywgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RpdGxlSW5wJykudmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0RXZlbnRzLnB1Ymxpc2goJ3NhdmVkJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgY2FzZSAndmlld1Byb2plY3QnOiBwcm9qZWN0RXZlbnRzLnB1Ymxpc2goJ3ZpZXdQcm9qZWN0JywgZXZlbnQpO1xuICAgICAgICAgICBicmVhaztcbiAgICAgICAgIGNhc2UgJ2FkZHRvRG9MaXN0JzogcHJvamVjdEV2ZW50cy5wdWJsaXNoKCdpbnB1dE9yTGlzdCcsIGV2ZW50KVxuICAgICAgICAgICBicmVhaztcbiAgICAgICAgIGNhc2UgJ2Nob29zZU5vdGVUeXBlJzogcHJvamVjdEV2ZW50cy5wdWJsaXNoKCdub3RlVG9Eb1R5cGUnLCBldmVudCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICBicmVhaztcbiAgICAgICAgIGNhc2UgJ2NhbmNlbENob2ljZScgOiBwcm9qZWN0RXZlbnRzLnB1Ymxpc2goJ2Fib3J0Tm90ZVR5cGVGb3JtJyxldmVudCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgIGJyZWFrO1xuICAgICAgICAgY2FzZSAnYWRkQ2hlY2snOiBwcm9qZWN0RXZlbnRzLnB1Ymxpc2goJ25ld0NoZWNrSXRlbScsIGV2ZW50KTtcbiAgICAgICAgIGJyZWFrO1xuICAgICAgICAgY2FzZSAnYWRkQ2hlY2tNb2QnOiBwcm9qZWN0RXZlbnRzLnB1Ymxpc2goJ3VwZGF0ZUNoZWNrSXRlbScsIGV2ZW50KTtcbiAgICAgICAgIGJyZWFrO1xuICAgICAgICAgY2FzZSAnY2FuY2VsJzpwcm9qZWN0RXZlbnRzLnB1Ymxpc2goJ2NhbmNlbE5vdGUnLGV2ZW50KTtcbiAgICAgICAgICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgYnJlYWs7XG4gICAgICAgICBjYXNlICdlZGl0JzogcHJvamVjdEV2ZW50cy5wdWJsaXNoKCdtb2RpZnlOb3RlJyxldmVudCk7XG4gICAgICAgICBicmVhaztcbiAgICAgICAgIGNhc2UgJ3N1Ym1pdE5vdGUnIDogcHJvamVjdEV2ZW50cy5wdWJsaXNoKCdzdWJtaXROb3RlJywgZXZlbnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgYnJlYWs7XG4gICAgICAgICBjYXNlICdyZXZlcnRNb2QnIDogcHJvamVjdEV2ZW50cy5wdWJsaXNoKCdyZXZlcnQnLGV2ZW50KTtcbiAgICAgICAgIGJyZWFrO1xuICAgICAgICAgY2FzZSAnc3VibWl0TW9kJzogcHJvamVjdEV2ZW50cy5wdWJsaXNoKCdzdWJtaXRNb2ROb3RlJyxldmVudCk7XG4gICAgICAgICBicmVhazsgIFxuICAgICAgLy9hZGQgbW9yZS4gXG5cbn19XG4gXG4gICAgICAgXG5cblxuXG5leHBvcnQgeyBwcm9qZWN0RXZlbnRzIH0iLCJpbXBvcnQgeyBiYXNlQ3JlYXRlIH0gZnJvbSBcIi4vaGVscGVycy9iYXNlXCI7XG5cblxuLy9UZW1wbGF0ZSBmb3IgYSB0b2RvLW5vdGUgXG5cbmV4cG9ydCBjb25zdCBzaW5nbGV0b0RvTm90ZSA9IGZ1bmN0aW9uKG5hbWUpe1xuXG5cbiAgIGNvbnN0IF9ub3Rlc3RvcmFnZSA9IG5ldyBBcnJheSgpO1xuICAgY29uc3QgdG9Eb05vdGUgPSBiYXNlQ3JlYXRlKF9ub3Rlc3RvcmFnZSk7XG4gICBcbiAgIHRvRG9Ob3RlLm5hbWUgPSBuYW1lO1xuICAgdG9Eb05vdGUudHlwZSA9IHR5cGUoKTtcbiAgIFxuICAgXG4gICBjb25zdCB0eXBlID0gZnVuY3Rpb24odHlwZT0naW5wdXQnKXtcbiAgICAgIHJldHVybiB0eXBlXG4gICB9XG4gICBjb25zdCBhZGROb3RlID0gZnVuY3Rpb24obm90ZSl7XG4gICAgICB0b0RvTm90ZS5hZGQobm90ZSk7XG4gICB9XG5cbiAgIGNvbnN0IHJlbW92ZU5vdGUgPSBmdW5jdGlvbihpbmRleCl7XG4gICAgICBjb25zdCBub3RlID0gX25vdGVzdG9yYWdlW2luZGV4XTtcbiAgICAgIHRvRG9Ob3RlLnJlbW92ZShub3RlLCBpbmRleCk7ICBcbiAgIH1cblxuICAgY29uc3QgbW92ZU5vdGUgPSBmdW5jdGlvbihpbmRleCwgdGFyZ2V0KXtcbiAgICAgIHRvRG9Ob3RlLm1vdmUoaW5kZXgsIHRhcmdldCk7XG4gICAgICAgIFxuICAgfVxuICAgXG4gICByZXR1cm4gdG9Eb05vdGVcbn1cblxuLy9cblxuLy9UZW1wbGF0ZSBmb3IgYSBzaW5nbGUgcHJvamVjdFxuXG5leHBvcnQgY29uc3Qgc2luZ2xlUHJvaiA9IGZ1bmN0aW9uKG5hbWUpe1xuXG4gICBjb25zdCBfcHJvanN0b3JhZ2UgPSBuZXcgQXJyYXkoKTtcbiAgIGNvbnN0IHByb2plY3QgPSBiYXNlQ3JlYXRlKF9wcm9qc3RvcmFnZSk7XG4gICBwcm9qZWN0Lm5hbWUgPSBuYW1lO1xuXG4gICBjb25zdCBhZGRUb1Byb2plY3QgPSBmdW5jdGlvbihuYW1lKXtcbiAgICAgIGNvbnN0IHRvZG8gPSBzaW5nbGV0b0RvTm90ZShuYW1lKVxuICAgICAgcHJvamVjdC5hZGQodG9kbyk7XG4gICB9XG5cbiAgIGNvbnN0IHJlbW92ZUZyb21Qcm9qZWN0ID0gZnVuY3Rpb24oaW5kZXgpe1xuICAgICAgY29uc3QgdG9kbyA9IHByb2pzdG9yYWdlW2luZGV4XTtcbiAgICAgIHByb2plY3QucmVtb3ZlKHRvZG8sIGluZGV4KTsgIFxuICAgfSBcblxuICAgY29uc3QgbW92ZXRvRG8gPSBmdW5jdGlvbihpbmRleCwgdGFyZ2V0KXtcbiAgICAgIHByb2plY3QubW92ZShpbmRleCwgdGFyZ2V0KTtcbiAgICAgICAgIFxuICAgfVxuXG4gICByZXR1cm4gcHJvamVjdFxuXG59IFxuXG4vL1xuXG4vL092ZXJhbGwgSW50ZXJmYWNlXG5cbmV4cG9ydCBjb25zdCBtYWluSW50ZXJmYWNlID0gZnVuY3Rpb24oKXtcbiAgIFxuICAgY29uc3QgX292ZXJhbGxTdG9yYWdlID0gbmV3IEFycmF5KCk7XG4gICBjb25zdCBhbGxUb0RvID0gYmFzZUNyZWF0ZShfb3ZlcmFsbFN0b3JhZ2UpO1xuXG4gICBjb25zdCBuZXdQcm9qID0gZnVuY3Rpb24obmFtZSl7XG4gICAgICBjb25zdCBwcm9qID0gc2luZ2xlUHJvaihuYW1lKTtcbiAgICAgIGFsbFRvRG8uYWRkKHByb2opO1xuXG4gICB9XG5cblxuICAgY29uc3QgcmVtb3ZlUHJvaiA9IGZ1bmN0aW9uKGluZGV4KXtcbiAgICAgIGNvbnN0IHByb2ogPSBfb3ZlcmFsbFN0b3JhZ2VbaW5kZXhdO1xuICAgICAgYWxsVG9Eby5yZW1vdmUocHJvaik7XG4gICB9XG4gICAgXG4gICBjb25zdCBtb3ZlUHJvaiA9IGZ1bmN0aW9uKGluZGV4LCB0YXJnZXQpe1xuICAgICAgYWxsVG9Eby5tb3ZlKGluZGV4LCB0YXJnZXQpO1xuXG4gICB9XG4gICBcbiAgIGNvbnN0IHRyYW5zZmVyVG9Mb2NhbFN0b3JhZ2UgPSBmdW5jdGlvbigpe1xuICAgICAgICAgcmV0dXJuIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdhY2Nlc3MnLCBKU09OLnN0cmluZ2lmeShfb3ZlcmFsbFN0b3JhZ2UpKVxuICAgfVxuXG4gIFxuICAgXG4gICByZXR1cm4ge1xuICAgICAgbmV3UHJvaixcbiAgICAgIHRyYW5zZmVyVG9Mb2NhbFN0b3JhZ2VcbiAgICAgIC8vanVzdCB0aGlzIGZvciBub3cuXG4gICB9XG4gIFxuICAgXG59XG5cbiIsImltcG9ydCB7IERPTUdlbmVyYWwgfSBmcm9tIFwiLi9oZWxwZXJzL0RPTVwiO1xuaW1wb3J0IHsgcHJvamVjdEV2ZW50cyB9IGZyb20gXCIuL3Byb2plY3RldmVudHNcIjtcblxuXG5leHBvcnQgY29uc3QgdGVtcGxhdGVET01TdHJ1Y3RzID0gZnVuY3Rpb24gKCl7XG5cbiAgICBjb25zdCBET00gPSBET01HZW5lcmFsKClcbiAgICBjb25zdCBkZWxlZ2F0b3IgPSBwcm9qZWN0RXZlbnRzLmRlbGVnYXRvclxuXG4gICAgY29uc3QgY3JlYXRlUHJvamVjdCA9IGZ1bmN0aW9uKG5hbWUpe1xuICAgICAgICAgY29uc3QgcmVmZXJlbmNlID0gRE9NLnNlbGVjdEVsZW0oJy5wcm9qZWN0Jyk7IFxuICAgICAgICAgY29uc3QgcHJvaiA9IERPTS5lbGVtZW50SW5pdCgnZGl2Jyx7J2lkJzogYCR7bmFtZX0ke3JlZmVyZW5jZS5sZW5ndGh9YCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdkYXRhLWlkJzpgJHtyZWZlcmVuY2UubGVuZ3RofWAsIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2NsYXNzJzogJ3Byb2plY3QnfSxuYW1lXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgIGNvbnN0IHZpZXdQcm9qZWN0QnRuID0gRE9NLmVsZW1lbnRJbml0KCdidXR0b24nLCB7J2NsYXNzJzogJ3ZpZXdQcm9qZWN0J30sICdWaWV3IEluc2lkZScpO1xuICAgICAgICBjb25zdCBhZGRUb0RvTGlzdEJ0biA9IERPTS5lbGVtZW50SW5pdCgnYnV0dG9uJywgeydjbGFzcyc6ICdhZGR0b0RvTGlzdCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdpZCc6IGBhZGQke0RPTS5zZWxlY3RFbGVtKCcucHJvamVjdCcpLmxlbmd0aH1gfSwgJ0FkZCBUby1EbyBMaXN0Jyk7XG4gICAgICAgIHByb2ouYXBwZW5kQ2hpbGQodmlld1Byb2plY3RCdG4pO1xuICAgICAgICBwcm9qLmFwcGVuZENoaWxkKERPTS5lbGVtZW50SW5pdCgnZGl2Jyx7ICdjbGFzcyc6J25vbmUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2lkJzpgY29udGFpbmVyJHtyZWZlcmVuY2UubGVuZ3RofWB9KSk7XG4gICAgICAgIHByb2ouYXBwZW5kQ2hpbGQoYWRkVG9Eb0xpc3RCdG4pO1xuXG4gICAgICAgIFxuICAgICAgICBwcm9qLm9uY2xpY2sgPSBkZWxlZ2F0b3I7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IERPTS5zZWxlY3RFbGVtKCcjY29udGFpbmVyJyk7XG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9qKTtcbiAgICAgICAgXG4gICAgICAgIHJldHVybiBwcm9qXG5cbiAgICAgfVxuICAgICBcblxuICAgICBjb25zdCBjcmVhdGVUb0RvTm90ZSA9IGZ1bmN0aW9uKGNob3NlblR5cGUpe1xuICAgICAgICBjb25zdCBpbnB1dCA9IERPTS5zZWxlY3RFbGVtKCcjdGVtcG9yYXJ5SW5wdXQnKSBcbiAgICAgICAgY29uc3QgcHJvamVjdCA9IGlucHV0LnBhcmVudEVsZW1lbnQ7XG4gICAgICAgIGNvbnN0IGZvcm1SZWZlcmVuY2UgPSBET00uc2VsZWN0RWxlbSgnLnRvRG9Ob3RlSW5wdXQnKVxuICAgICAgICBjb25zdCBjb250YWluZXIgPSBET00uc2VsZWN0RWxlbShgI2NvbnRhaW5lciR7cHJvamVjdC5kYXRhc2V0LmlkfWApO1xuICAgICAgICBcbiAgICAgICAgY29uc3QgZm9ybSA9IERPTS5lbGVtZW50SW5pdCgnZm9ybScseydjbGFzcyc6ICd0b0RvTm90ZUlucHV0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnaWQnOiBgdG9Eb05vdGVGb3JtJHtwcm9qZWN0LmRhdGFzZXQuaWR9JHtmb3JtUmVmZXJlbmNlLmxlbmd0aH1gLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnZGF0YS1pZCc6YCR7Zm9ybVJlZmVyZW5jZS5sZW5ndGh9YCB9KVxuICAgICAgICBjb25zdCBzdWJtaXQgPSBET00uZWxlbWVudEluaXQoJ2J1dHRvbicseyd0eXBlJzonc3VibWl0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdpZCc6ICdzdWJtaXROb3RlJywgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdjbGFzcyc6J3N1Ym1pdE5vdGUgbm9uZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCdTdWJtaXQgTm90ZScpXG4gICAgICAgIGNvbnN0IGNhbmNlbCA9IERPTS5lbGVtZW50SW5pdCgnYnV0dG9uJywgeydjbGFzcyc6J2NhbmNlbCBub25lJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnaWQnOidjYW5jZWxOb3RlJ30sICdDYW5jZWwnKTtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IHJlbW92ZSA9IERPTS5lbGVtZW50SW5pdCgnYnV0dG9uJywgeydjbGFzcyc6J3JlbW92ZSBub25lJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdpZCc6YHJlbW92ZSR7cHJvamVjdC5kYXRhc2V0LmlkfSR7Zm9ybVJlZmVyZW5jZS5sZW5ndGh9YH0sICdYJyk7XG5cbiAgICAgICAgXG4gICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQoc3VibWl0KTtcbiAgICAgICAgZm9ybS5hcHBlbmRDaGlsZChjYW5jZWwpO1xuICAgICAgICBmb3JtLmFwcGVuZENoaWxkKHJlbW92ZSk7XG4gICAgICAgIFxuXG4gICAgICAgIGZvcm0ub25zdWJtaXQgPSBkZWxlZ2F0b3I7ICAgXG4gICAgICAgICBcbiAgICAgICAgY29udGFpbmVyLmNsYXNzTGlzdC50b2dnbGUoJ25vbmUnLCBmYWxzZSk7XG4gICAgICAgIFxuICAgICAgICAgXG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChmb3JtKTtcblxuICAgICAgICBjb25zdCBfZ2VuZXJhdGVDaGVja2xpc3QgPSBmdW5jdGlvbigpeyBcbiAgICAgICAgICAgY29uc3QgYWRkID0gRE9NLmVsZW1lbnRJbml0KCdidXR0b24nLCB7J2NsYXNzJzonYWRkQ2hlY2snLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnaWQnOmBhZGRDaGVjayR7cHJvamVjdC5kYXRhc2V0LmlkfSR7Zm9ybVJlZmVyZW5jZS5sZW5ndGh9YCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgJ0FkZCBJdGVtJyk7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQoYWRkKTtcblxuICAgICAgICAgICAgZm9ybS5jbGFzc0xpc3QuYWRkKCdjaGVja2JveCcpXG4gICAgICAgfVxuXG4gICAgICAgY29uc3QgX2dlbmVyYXRlRnJlZUZvcm0gPSBmdW5jdGlvbigpe1xuXG4gICAgICAgIGlucHV0LnZhbHVlID0gJyc7XG4gICAgICAgIGlucHV0LmNsYXNzTGlzdC50b2dnbGUoJ25vbmUnLGZhbHNlKTtcbiAgICAgICAgZm9ybS5jbGFzc0xpc3QuYWRkKCdmcmVlRm9ybScpO1xuXG4gICAgICAgIHN1Ym1pdC5jbGFzc0xpc3QudG9nZ2xlKCdub25lJyxmYWxzZSk7XG4gICAgICAgIGNhbmNlbC5jbGFzc0xpc3QudG9nZ2xlKCdub25lJyxmYWxzZSk7XG4gICAgICAgIGlucHV0LmZvY3VzKCk7XG4gICAgICAgIFxuICAgICAgIH1cblxuICAgICAgIGNob3NlblR5cGUgPT09ICdDaGVja2xpc3QnID8gX2dlbmVyYXRlQ2hlY2tsaXN0KCkgOiBfZ2VuZXJhdGVGcmVlRm9ybSgpOyAgXG5cbiAgICAgICByZXR1cm4gXG5cbiAgICAgfVxuXG5cbiAgICAgY29uc3QgZGlzYWJsZUJ0bnMgPSBmdW5jdGlvbih0cmd0PSduL2EnKXtcbiAgICAgICAgY29uc3QgYWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnYnV0dG9uJyk7XG4gICAgICAgIGFsbC5mb3JFYWNoKGJ0biA9PiBidG4uY2xhc3NOYW1lID09PSAndmlld1Byb2plY3QnIHx8IGJ0biA9PT0gdHJndCB8fCBidG4uY2xhc3NMaXN0LmNvbnRhaW5zKCdub25lJykgPyBidG4uZGlzYWJsZWQgPSBmYWxzZSA6IGJ0bi5kaXNhYmxlZCA9IHRydWUpO1xuICAgIH1cbiAgICBcbiAgICBcbiAgICBjb25zdCBlbmFibGVCdG5zID0gZnVuY3Rpb24oKXtcbiAgICAgICAgY29uc3QgYWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnYnV0dG9uJyk7XG4gICAgICAgIGFsbC5mb3JFYWNoKGJ0biA9PiBidG4uZGlzYWJsZWQgPSBmYWxzZSk7XG5cbiAgICAgICAgY29uc3QgbW9kaWZ5QnRucyA9IERPTS5zZWxlY3RFbGVtKCcuZWRpdCcpO1xuICAgICAgICBtb2RpZnlCdG5zLmZvckVhY2goYnRuID0+IGJ0bi5jbGFzc0xpc3QudG9nZ2xlKCdub25lJyxmYWxzZSkpO1xuICAgICAgICBjb25zdCBkZWxldGVCdG5zID0gRE9NLnNlbGVjdEVsZW0oJy5kZWxldGVDaGVjaycpO1xuICAgICAgICBkZWxldGVCdG5zLmZvckVhY2goYnRuID0+IGJ0bi5jbGFzc0xpc3QudG9nZ2xlKCdub25lJyxmYWxzZSkpOyAgICAgICAgXG4gICAgfVxuXG4gICAgIGNvbnN0IG1vZGlmeVRvRG9Ob3RlID0gZnVuY3Rpb24oZXZlbnQpe1xuICAgICAgICAgXG4gICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgY29uc3QgZm9ybSA9IGV2ZW50LnRhcmdldC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQ7XG4gICAgICAgICBcbiAgICAgICAgIGNvbnN0IG1vZElucHV0ID0gRE9NLmVsZW1lbnRJbml0KCdpbnB1dCcseyd0eXBlJzondGV4dCcsXG4gICAgICAgICAnYXV0b2NvbXBsZXRlJzonb2ZmJyxcbiAgICAgICAgICdyZXF1aXJlZCc6J3JlcXVpcmVkJyxcbiAgICAgICAgICdjbGFzcyc6ICdtb2RJbnB1dCcsXG4gICAgICAgICAgJ2lkJzonbW9kSW5wdXQnfSk7XG4gICAgICAgICBjb25zdCBzdWJtaXQgPSBET00uZWxlbWVudEluaXQoJ2J1dHRvbicseyd0eXBlJzonc3VibWl0JyxcbiAgICAgICAgJ2NsYXNzJzonc3VibWl0TW9kJyxcbiAgICAgICAgICdpZCc6ICdzdWJtaXRNb2QnXG4gICAgICAgICB9LCdTdWJtaXQgTm90ZScpXG4gICAgICAgICBjb25zdCByZXZlcnQgPSBET00uZWxlbWVudEluaXQoJ2J1dHRvbicse1xuICAgICAgICAgJ2NsYXNzJzoncmV2ZXJ0TW9kJyxcbiAgICAgICAgICdkYXRhLXRyYW5zZmVyJzpgJHtldmVudC50YXJnZXQucGFyZW50RWxlbWVudC5maXJzdENoaWxkLm5vZGVWYWx1ZX1gIC8vdGVtcG9yYXJ5LCB1cGRhdGUgdG8gdXNlIGxvY2FsIHN0b3JhZ2UgJiBiYWNrZW5kXG4gICAgICAgICAgfSwnUmV2ZXJ0IEJhY2snKVxuXG4gICAgICAgIGRpc2FibGVCdG5zKCk7XG5cbiAgICAgICAgIGNvbnN0IF9yZXBsYWNlV2l0aElucHV0ID0gKGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICBtb2RJbnB1dC52YWx1ZSA9IGV2ZW50LnRhcmdldC5wYXJlbnRFbGVtZW50LmZpcnN0Q2hpbGQubm9kZVZhbHVlOyBcbiAgICAgICAgICAgIGV2ZW50LnRhcmdldC5wYXJlbnRFbGVtZW50LnJlcGxhY2VXaXRoKG1vZElucHV0KTtcbiAgICAgICAgICAgIG1vZElucHV0Lmluc2VydEFkamFjZW50RWxlbWVudCgnYWZ0ZXJlbmQnLHN1Ym1pdCk7XG4gICAgICAgICAgICBzdWJtaXQuaW5zZXJ0QWRqYWNlbnRFbGVtZW50KCdhZnRlcmVuZCcscmV2ZXJ0KTtcbiAgICAgICB9KSgpIFxuICAgICAgICByZXR1cm4gICBcblxuICAgICB9XG5cbiAgICAgY29uc3Qgc3VibWl0TW9kaWZpZWROb3RlID0gZnVuY3Rpb24oZXZlbnQpe1xuICAgICAgICBcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgY29uc3QgZm9ybSA9IGV2ZW50LnRhcmdldC5wYXJlbnRFbGVtZW50O1xuICAgICAgICBjb25zdCBpbnB1dCA9IGV2ZW50LnRhcmdldC5wcmV2aW91c0VsZW1lbnRTaWJsaW5nO1xuICAgICAgICBjb25zdCByZXZlcnQgPSBldmVudC50YXJnZXQubmV4dEVsZW1lbnRTaWJsaW5nO1xuICAgICAgICBjb25zdCBsYWJlbCA9IERPTS5lbGVtZW50SW5pdCgnbGFiZWwnLCB7J2Zvcic6IGAke2lucHV0LnZhbHVlfWB9LGAke2lucHV0LnZhbHVlfWApO1xuICAgICAgICBjb25zdCB0ZXh0ID0gRE9NLmVsZW1lbnRJbml0KCdwJywgeydjbGFzcyc6J3RleHQnfSwgYCR7aW5wdXQudmFsdWV9YCk7XG4gICAgICAgIGNvbnN0IG1vZGlmeSA9IERPTS5lbGVtZW50SW5pdCgnYnV0dG9uJywgeydjbGFzcyc6J2VkaXQnfSxcbiAgICAgICAgJ0VkaXQnKTtcbiAgICAgICAgXG4gICAgICAgIGlmKGlucHV0LnZhbHVlID09PSAnJyl7cmV0dXJufTtcblxuICAgICAgICBpZihmb3JtLmNsYXNzTGlzdC5jb250YWlucygnY2hlY2tib3gnKSl7XG4gICAgICAgICAgICBsYWJlbC5hcHBlbmRDaGlsZChtb2RpZnkpO1xuICAgICAgICAgICAgaW5wdXQucmVwbGFjZVdpdGgobGFiZWwpO1xuXG4gICAgICAgIH1cbiAgICAgICAgZWxzZXtcbiAgICAgICAgICAgIHRleHQuYXBwZW5kQ2hpbGQobW9kaWZ5KTtcbiAgICAgICAgICAgIGlucHV0LnJlcGxhY2VXaXRoKHRleHQpOyBcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgZW5hYmxlQnRucygpO1xuICAgIFxuICAgICAgICByZXZlcnQucmVtb3ZlKCk7XG4gICAgICAgIGV2ZW50LnRhcmdldC5yZW1vdmUoKTtcblxuXG4gICAgICAgIHJldHVybiAgICAgICAgIFxuICAgICB9XG5cbiAgICAgY29uc3QgcmV2ZXJ0TW9kaWZpZWROb3RlID0gZnVuY3Rpb24oZXZlbnQpe1xuICAgICAgICBcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgY29uc3QgZm9ybSA9IGV2ZW50LnRhcmdldC5wYXJlbnRFbGVtZW50O1xuICAgICAgICBjb25zdCBzdWJtaXQgPSBldmVudC50YXJnZXQucHJldmlvdXNFbGVtZW50U2libGluZztcbiAgICAgICAgY29uc3QgaW5wdXQgPSBzdWJtaXQucHJldmlvdXNFbGVtZW50U2libGluZztcbiAgICAgICAgY29uc3QgbGFiZWwgPSBET00uZWxlbWVudEluaXQoJ2xhYmVsJywgeydmb3InOiBgJHtldmVudC50YXJnZXQuZGF0YXNldC50cmFuc2Zlcn1gfSxgJHtldmVudC50YXJnZXQuZGF0YXNldC50cmFuc2Zlcn1gKTsgLy90ZW1wb3JhcnksIHVwZGF0ZSB0byB1c2UgbG9jYWwgc3RvcmFnZSAmIGJhY2tlbmRcbiAgICAgICAgY29uc3QgdGV4dCA9IERPTS5lbGVtZW50SW5pdCgncCcsIHsnY2xhc3MnOid0ZXh0J30sIGAke2V2ZW50LnRhcmdldC5kYXRhc2V0LnRyYW5zZmVyfWApOyAvL3RlbXBvcmFyeSwgdXBkYXRlIHRvIHVzZSBsb2NhbCBzdG9yYWdlICYgYmFja2VuZFxuICAgICAgICBjb25zdCBtb2RpZnkgPSBET00uZWxlbWVudEluaXQoJ2J1dHRvbicsIHsnY2xhc3MnOidlZGl0J30sXG4gICAgICAgICdFZGl0Jyk7ICAgICAgICBcblxuICAgICAgICBpZihmb3JtLmNsYXNzTGlzdC5jb250YWlucygnY2hlY2tib3gnKSl7XG4gICAgICAgICAgICBsYWJlbC5hcHBlbmRDaGlsZChtb2RpZnkpO1xuICAgICAgICAgICAgaW5wdXQucmVwbGFjZVdpdGgobGFiZWwpO1xuXG4gICAgICAgIH1cbiAgICAgICAgZWxzZXtcbiAgICAgICAgICAgIHRleHQuYXBwZW5kQ2hpbGQobW9kaWZ5KTtcbiAgICAgICAgICAgIGlucHV0LnJlcGxhY2VXaXRoKHRleHQpOyBcbiAgICAgICAgfVxuICAgICAgICAgXG4gICAgICAgIGVuYWJsZUJ0bnMoKTtcbiAgICBcbiAgICAgICAgc3VibWl0LnJlbW92ZSgpO1xuICAgICAgICBldmVudC50YXJnZXQucmVtb3ZlKClcblxuXG4gICAgICAgIHJldHVybiAgICAgICAgIFxuICAgICB9ICAgICBcblxuXG4gICAgIGNvbnN0IGNob29zZU5vdGVUeXBlID0gZnVuY3Rpb24oZXZlbnQpe1xuICAgICAgICBjb25zdCBkb21Qcm9qZWN0ID0gZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQ7XG5cbiAgICAgICAgaWYgKGRvbVByb2plY3QubGFzdEVsZW1lbnRDaGlsZC5jbGFzc05hbWUgPT09ICdjaG9vc2VOb3RlVHlwZScpIHtcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG5cbiAgICAgICAgIGNvbnN0IGZvcm0gPSAgRE9NLmVsZW1lbnRJbml0KCdmb3JtJywgeydjbGFzcyc6ICdjaG9vc2VOb3RlVHlwZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2lkJzogJ25vdGVUeXBlRm9ybScgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgIGNvbnN0IGxhYmVsID0gRE9NLmVsZW1lbnRJbml0KCdsYWJlbCcseydmb3InOidjaG9vc2VOb3RlVHlwZSd9LCdDaG9vc2UgWW91ciBOb3RlIFR5cGUnKTtcbiAgICAgICAgIGNvbnN0IHNlbGVjdCA9IERPTS5lbGVtZW50SW5pdCgnc2VsZWN0Jyx7J2NsYXNzJzonc2VsZWN0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnaWQnOiAnc2VsZWN0JyB9KTtcbiAgICAgICAgIGNvbnN0IG9wdEdyb3VwID0gRE9NLmVsZW1lbnRJbml0KCdvcHRncm91cCcseydsYWJlbCc6ICdOb3RlIE9wdGlvbnMnfSwgJ0Nob29zZSB5b3VyIG5vdGUgdHlwZScpO1xuICAgICAgICAgY29uc3QgY2hlY2tsaXN0T3B0ID0gRE9NLmVsZW1lbnRJbml0KCdvcHRpb24nLHsnbmFtZSc6ICdjaGVja2xpc3QnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2NsYXNzJzogJ2NoZWNrbGlzdCd9LCdDaGVja2xpc3QnKTtcbiAgICAgICAgIGNvbnN0IGlucHV0T3B0ID0gRE9NLmVsZW1lbnRJbml0KCdvcHRpb24nLHsnbmFtZSc6ICdpbnB1dCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdjbGFzcyc6ICdpbnB1dCd9LCdGcmVlZm9ybScpO1xuICAgICAgICAgY29uc3QgY2hvaWNlID0gRE9NLmVsZW1lbnRJbml0KCdidXR0b24nLCB7J3R5cGUnOidzdWJtaXQnfSwgJ1N1Ym1pdCcpO1xuICAgICAgICAgY29uc3QgY2FuY2VsID0gRE9NLmVsZW1lbnRJbml0KCdidXR0b24nLCB7J2NsYXNzJzonY2FuY2VsQ2hvaWNlJ30sICdDYW5jZWwnKTtcbiAgICAgICAgIFxuICAgICAgICAgc2VsZWN0LmFwcGVuZENoaWxkKG9wdEdyb3VwKTtcbiAgICAgICAgIG9wdEdyb3VwLmFwcGVuZENoaWxkKGNoZWNrbGlzdE9wdCk7XG4gICAgICAgICBvcHRHcm91cC5hcHBlbmRDaGlsZChpbnB1dE9wdCk7XG4gICAgICAgICBmb3JtLmFwcGVuZENoaWxkKGxhYmVsKTtcbiAgICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQoc2VsZWN0KTtcbiAgICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQoRE9NLmVsZW1lbnRJbml0KCdicicpKTtcbiAgICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQoY2hvaWNlKTtcbiAgICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQoY2FuY2VsKVxuXG4gICAgICAgICBkaXNhYmxlQnRucygpO1xuICAgICAgICAgZm9ybS5vbnN1Ym1pdCA9IGRlbGVnYXRvcjtcbiAgICAgICAgIGRvbVByb2plY3QuYXBwZW5kQ2hpbGQoZm9ybSk7XG5cbiAgICAgICAgIHJldHVybiBmb3JtXG4gICAgfVxuICAgICBcbiAgICAgY29uc3QgcmV2ZWFsQ3JlYXRlRm9ybSA9IGZ1bmN0aW9uKCl7XG4gICAgICAgIGxldCBoaWRkZW4gPSBET00uc2VsZWN0RWxlbSgnI2NyZWF0ZUZvcm0nKTtcbiAgICAgICAgaGlkZGVuLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGRlbicsIGZhbHNlKTtcbiAgICAgICAgXG4gICAgIH1cblxuICAgICBjb25zdCB0b2dnbGVQcm9qZWN0U2l6ZSA9IGZ1bmN0aW9uKGV2ZW50KXtcbiAgICAgICAgICAgIGV2ZW50LnRhcmdldC5uZXh0RWxlbWVudFNpYmxpbmcuY2xhc3NMaXN0LnRvZ2dsZSgnbm9uZScpO1xuICAgICB9XG5cbiAgICAgY29uc3Qgbm90ZVR5cGVHZW5lcmF0b3IgPSBmdW5jdGlvbigpe1xuXG4gICAgICAgIGNvbnN0IGdldFNlbGVjdGVkID0gKGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAgY29uc3Qgc2VsZWN0ID0gIERPTS5zZWxlY3RFbGVtKCcjc2VsZWN0Jyk7XG4gICAgICAgICAgICAgcmV0dXJuIHNlbGVjdC5vcHRpb25zW3NlbGVjdC5zZWxlY3RlZEluZGV4XS52YWx1ZTtcbiAgICAgICAgfSkoKVxuICAgICAgICBcbiAgICAgICAgY29uc3QgZ2VuZXJhdGVUZW1wb3JhcnlJbnB1dCA9IChmdW5jdGlvbigpe1xuICAgICAgICAgICAgY29uc3QgcHJvamVjdCA9IERPTS5zZWxlY3RFbGVtKCcjbm90ZVR5cGVGb3JtJykucGFyZW50RWxlbWVudDtcbiAgICAgICAgICAgIGNvbnN0IHRlbXBvcmFyeUlucHV0ID0gRE9NLmVsZW1lbnRJbml0KCdpbnB1dCcseyd0eXBlJzondGV4dCcsXG4gICAgICAgICAgICAnYXV0b2NvbXBsZXRlJzonb2ZmJyxcbiAgICAgICAgICAgICdyZXF1aXJlZCc6J3JlcXVpcmVkJyxcbiAgICAgICAgICAgICdpZCc6J3RlbXBvcmFyeUlucHV0JyxcbiAgICAgICAgICAgJ2NsYXNzJzogJ3RlbXBvcmFyeUlucHV0IG5vbmUnfSk7ICBcbiAgICAgICAgICAgIHByb2plY3QuYXBwZW5kQ2hpbGQodGVtcG9yYXJ5SW5wdXQpOyAgICAgIFxuICAgICAgICB9KSgpXG4gICAgICAgIFxuICAgICAgICBwcm9qZWN0RXZlbnRzLnB1Ymxpc2goJ2RlbGV0ZU5vdGVUeXBlRm9ybScpO1xuICAgICAgICBwcm9qZWN0RXZlbnRzLnB1Ymxpc2goJ2NyZWF0ZU5vdGUnLCBnZXRTZWxlY3RlZCk7XG5cblxuICAgICAgICAvL3JlbWVtYmVyIGNyZWF0ZW5vdGUgdGhpbmcgd2lsbCBhcHBseSB0byB0aGUgYmFja2VuZCBhcyB3ZWxsLFxuICAgICAgICAvLyBzbyB3aGVuIHlvdSBwYXNzIGluIHRoYXQgYXJndW1lbnQsIHRoYXQncyB3aGVuIHRoZSAndHlwZSdcbiAgICAgICAgLy8gb2YgdGhlIG5vdGUgd2lsbCBiZSBzdG9yZWQgaW4gdGhlcmUuIFxuICAgICAgICBcbiAgICAgICAgXG4gICAgICAgIHJldHVybiBnZXRTZWxlY3RlZFxuICAgICB9XG5cblxuXG4gICAgY29uc3QgZGVsZXRlQWRkTm90ZUZvcm0gPSBmdW5jdGlvbigpe1xuICAgICAgICAgY29uc3QgZGVsZXRlZCA9IERPTS5zZWxlY3RFbGVtKCcjbm90ZVR5cGVGb3JtJyk7XG4gICAgICAgICBkZWxldGVkLnJlbW92ZSgpO1xuXG4gICAgfVxuXG4gICAgY29uc3QgY2xlYW5Ub0RvRm9ybSA9IGZ1bmN0aW9uKCl7XG4gICAgICBcbiAgICAgIGNvbnN0IGZvcm0gPSBET00uc2VsZWN0RWxlbSgnI3N1Ym1pdE5vdGUnKS5wYXJlbnRFbGVtZW50O1xuICAgICAgY29uc3QgcHJvamVjdCA9IERPTS5zZWxlY3RFbGVtKCcjdGVtcG9yYXJ5SW5wdXQnKS5wYXJlbnRFbGVtZW50OyAgXG5cbiAgICAgIGNvbnN0IF9kZWxldGVUcmFuc2l0b3J5U3R1ZmYgPSAoZnVuY3Rpb24oKXsgIFxuICAgICAgICBsZXQgZGVsZXRlZCA9IERPTS5zZWxlY3RFbGVtKCcjdGVtcG9yYXJ5SW5wdXQnKTtcbiAgICAgICAgZGVsZXRlZC5yZW1vdmUoKTtcblxuICAgICAgICBkZWxldGVkID0gRE9NLnNlbGVjdEVsZW0oJyNzdWJtaXROb3RlJyk7XG4gICAgICAgIGRlbGV0ZWQucmVtb3ZlKCk7XG5cbiAgICAgICAgZGVsZXRlZCA9IERPTS5zZWxlY3RFbGVtKCcjY2FuY2VsTm90ZScpO1xuICAgICAgICBkZWxldGVkLnJlbW92ZSgpOyBcbiAgICB9KSgpXG4gICAgICBcbiAgICAgIGNvbnN0IF9jb252ZXJ0QWRkQ2hlY2sgPSAoZnVuY3Rpb24oKXsgXG5cbiAgICAgICAgbGV0IGNvbnZlcnQgPSBET00uc2VsZWN0RWxlbShgI2FkZENoZWNrJHtwcm9qZWN0LmRhdGFzZXQuaWR9JHtmb3JtLmRhdGFzZXQuaWR9YCk7XG5cbiAgICAgICAgaWYgKGNvbnZlcnQpe1xuICAgICAgICAgICAgY29udmVydC5yZW1vdmVBdHRyaWJ1dGUoJ2NsYXNzJyk7XG4gICAgICAgICAgICBjb252ZXJ0LmNsYXNzTmFtZSA9ICdhZGRDaGVja01vZCc7XG4gICAgICBcbiAgICAgICAgfVxuICAgIH0pKClcblxuICAgICAgY29uc3QgX3JlbW92ZVdoZXJlRW1wdHkgPSAoZnVuY3Rpb24oKXtcbiAgICAgICAgaWYoZm9ybS5jbGFzc0xpc3QuY29udGFpbnMoJ2NoZWNrYm94Jykpe1xuICAgICAgICAgICBmb3JtLmNoaWxkcmVuLmxlbmd0aCA8PSAyID8gZm9ybS5yZW1vdmUoKSA6IGZhbHNlOyAgXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgIGZvcm0uY2hpbGRyZW4ubGVuZ3RoIDw9IDEgPyBmb3JtLnJlbW92ZSgpIDogZmFsc2U7XG4gICAgICAgIH1cbiAgICB9KSgpXG5cbiAgICAgICAgcmV0dXJuXG4gICAgfVxuICAgICAgICBcblxuICAgIGNvbnN0IGNhbmNlbE5vdGUgPSBmdW5jdGlvbihldmVudCl7XG4gICAgICAgIFxuICAgICAgICBjb25zdCBjYW5jZWwgPSBldmVudC50YXJnZXQ7XG4gICAgICAgIGNvbnN0IGZvcm0gPSBjYW5jZWwucGFyZW50RWxlbWVudDtcbiAgICAgICAgY29uc3QgaW5wdXQgPSBET00uc2VsZWN0RWxlbSgnI3RlbXBvcmFyeUlucHV0Jyk7XG5cbiAgICAgICAgY2FuY2VsLmNsYXNzTGlzdC50b2dnbGUoJ25vbmUnLHRydWUpO1xuICAgICAgICBpbnB1dC52YWx1ZSA9ICcnO1xuICAgICAgICBpbnB1dC5jbGFzc0xpc3QudG9nZ2xlKCdub25lJyx0cnVlKTtcblxuICAgICAgICByZXR1cm4gICAgICAgIFxuICAgIH1cblxuICAgIFxuICAgIGNvbnN0IGdlbmVyYXRlTmV3QWRkQ2hlY2sgPSBmdW5jdGlvbihldmVudCl7IFxuICAgICAgICBcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgY29uc3QgZm9ybSA9IGV2ZW50LnRhcmdldC5wYXJlbnRFbGVtZW50O1xuICAgICAgICBjb25zdCBwcm9qZWN0ID0gZm9ybS5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQ7XG5cbiAgICAgICAgaWYgKCFET00uc2VsZWN0RWxlbSgnI3RlbXBvcmFyeUlucHV0Jykpe1xuICAgICAgICBjb25zdCB0ZW1wb3JhcnlJbnB1dCA9IERPTS5lbGVtZW50SW5pdCgnaW5wdXQnLHsndHlwZSc6J3RleHQnLFxuICAgICAgICAnYXV0b2NvbXBsZXRlJzonb2ZmJyxcbiAgICAgICAgJ3JlcXVpcmVkJzoncmVxdWlyZWQnLFxuICAgICAgICAnaWQnOid0ZW1wb3JhcnlJbnB1dCcsXG4gICAgICAgICdjbGFzcyc6ICd0ZW1wb3JhcnlJbnB1dCBub25lJ30pO1xuXG4gICAgICAgIHByb2plY3QuYXBwZW5kQ2hpbGQodGVtcG9yYXJ5SW5wdXQpO1xuICAgICAgICBkaXNhYmxlQnRucyhldmVudC50YXJnZXQpO1xuICAgICAgICB0ZW1wb3JhcnlJbnB1dC5vbmlucHV0ID0gZGVsZWdhdG9yO1xuICAgIFxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFET00uc2VsZWN0RWxlbSgnI3N1Ym1pdE5vdGUnKSl7ICAgICAgIFxuICAgICAgICAgY29uc3Qgb3JpZ2luYWxTdWJtaXQgPSBET00uZWxlbWVudEluaXQoJ2J1dHRvbicseyd0eXBlJzonc3VibWl0JyxcbiAgICAgICAgJ2lkJzogJ3N1Ym1pdE5vdGUnLCBcbiAgICAgICAgJ2NsYXNzJzonc3VibWl0Tm90ZSBub25lJyxcbiAgICAgICAgfSwnU3VibWl0IE5vdGUnKVxuXG4gICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQob3JpZ2luYWxTdWJtaXQpO1xuXG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGlmICghRE9NLnNlbGVjdEVsZW0oJyNjYW5jZWxOb3RlJykpeyAgICAgICBcbiAgICAgICAgICAgIGNvbnN0IGNhbmNlbCA9IERPTS5lbGVtZW50SW5pdCgnYnV0dG9uJyx7XG4gICAgICAgICAgICdpZCc6ICdjYW5jZWxOb3RlJywgXG4gICAgICAgICAgICdjbGFzcyc6J2NhbmNlbCBub25lJyxcbiAgICAgICAgICAgfSwnQ2FuY2VsJylcbiAgIFxuICAgICAgICAgICBmb3JtLmFwcGVuZENoaWxkKGNhbmNlbCk7XG4gICAgXG4gICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICBwcm9qZWN0RXZlbnRzLnB1Ymxpc2goJ25ld0NoZWNrSXRlbScsIGV2ZW50KTtcblxuICAgICAgICByZXR1cm5cblxuICAgIH1cblxuICAgIGNvbnN0IGFkZE5ld0NoZWNrID0gZnVuY3Rpb24oZXZlbnQpe1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBjb25zdCBpbnB1dCA9IERPTS5zZWxlY3RFbGVtKCcjdGVtcG9yYXJ5SW5wdXQnKTtcbiAgICAgICAgY29uc3Qgc3VibWl0ID0gRE9NLnNlbGVjdEVsZW0oJyNzdWJtaXROb3RlJyk7XG4gICAgICAgIGNvbnN0IGNhbmNlbCA9IERPTS5zZWxlY3RFbGVtKCcjY2FuY2VsTm90ZScpO1xuICAgICAgICBpbnB1dC5jbGFzc0xpc3QudG9nZ2xlKCdub25lJyxmYWxzZSk7XG4gICAgICAgIGlucHV0LmZvY3VzKCk7XG4gICAgICAgIGRpc2FibGVCdG5zKCk7XG4gICAgICAgIHN1Ym1pdC5jbGFzc0xpc3QudG9nZ2xlKCdub25lJyxmYWxzZSk7XG4gICAgICAgIGNhbmNlbC5jbGFzc0xpc3QudG9nZ2xlKCdub25lJyxmYWxzZSk7XG4gICAgICAgIHJldHVyblxuICAgIH1cbiAgICAgICAgICAgXG5cbiAgICBcbiAgICAgIGNvbnN0IF9nZW5lcmF0ZUNoZWNrSXRlbSA9IGZ1bmN0aW9uKCl7XG4gICAgICAgIGNvbnN0IGlucHV0ID0gRE9NLnNlbGVjdEVsZW0oJyN0ZW1wb3JhcnlJbnB1dCcpO1xuICAgICAgICBjb25zdCBmb3JtID0gRE9NLnNlbGVjdEVsZW0oJyNzdWJtaXROb3RlJykucGFyZW50RWxlbWVudDtcbiAgICAgICAgY29uc3QgbW9kaWZ5ID0gRE9NLmVsZW1lbnRJbml0KCdidXR0b24nLCB7J2NsYXNzJzonZWRpdCBub25lJ30sXG4gICAgICAgICdFZGl0Jyk7XG4gICAgICAgIGNvbnN0IGRlbCA9IERPTS5lbGVtZW50SW5pdCgnYnV0dG9uJywgeydjbGFzcyc6ICdkZWxldGVDaGVjayBub25lJ30sJ2RlbGV0ZScgKVxuICAgICAgIFxuICAgICAgICBjb25zdCBjaGVja2JveCA9IERPTS5lbGVtZW50SW5pdCgnaW5wdXQnLCB7J3R5cGUnOidjaGVja2JveCd9KTtcbiAgICAgICAgY29uc3QgbGFiZWwgPSBET00uZWxlbWVudEluaXQoJ2xhYmVsJywgeydmb3InOiBgJHtpbnB1dC52YWx1ZX1gfSxgJHtpbnB1dC52YWx1ZX1gKTtcbiAgICAgICAgY29uc3QgYnIgPSBET00uZWxlbWVudEluaXQoJ2JyJyk7XG5cbiAgICAgICAgaW5wdXQudmFsdWUgPSAnJztcbiAgICAgICAgbGFiZWwuYXBwZW5kQ2hpbGQobW9kaWZ5KTtcbiAgICAgICAgbGFiZWwuYXBwZW5kQ2hpbGQoZGVsKTtcbiAgICAgICAgZm9ybS5hcHBlbmRDaGlsZChjaGVja2JveCk7XG4gICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQobGFiZWwpO1xuICAgICAgICBmb3JtLmFwcGVuZENoaWxkKGJyKTtcbiAgICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3Qgc3VibWl0SXRlbSA9IGZ1bmN0aW9uKCl7XG4gICAgXG4gICAgY29uc3QgaW5wdXQgPSBET00uc2VsZWN0RWxlbSgnI3RlbXBvcmFyeUlucHV0Jyk7XG4gICAgY29uc3QgZm9ybSA9IERPTS5zZWxlY3RFbGVtKCcjc3VibWl0Tm90ZScpLnBhcmVudEVsZW1lbnQ7XG4gICAgY29uc3QgcmVtb3ZlID0gRE9NLnNlbGVjdEVsZW0oYCNyZW1vdmUke2lucHV0LnBhcmVudEVsZW1lbnQuZGF0YXNldC5pZH0ke2Zvcm0uZGF0YXNldC5pZH1gKTtcbiAgICBjb25zdCBtb2RpZnkgPSBET00uZWxlbWVudEluaXQoJ2J1dHRvbicsIHsnY2xhc3MnOidlZGl0J30sXG4gICAgJ0VkaXQnKTtcbiAgICBcbiAgICBpZiAoaW5wdXQudmFsdWUgPT09ICcnKXtyZXR1cm59O1xuXG4gICAgaWYgKGZvcm0uY2xhc3NMaXN0LmNvbnRhaW5zKCdjaGVja2JveCcpKXtcbiAgICAgICAgX2dlbmVyYXRlQ2hlY2tJdGVtKCk7XG4gICAgICAgIHJlbW92ZS5jbGFzc0xpc3QudG9nZ2xlKCdub25lJyxmYWxzZSk7XG4gICAgICAgIGlucHV0LmNsYXNzTGlzdC50b2dnbGUoJ25vbmUnLCB0cnVlKTsgICAgICAgIFxuICAgICAgICByZXR1cm5cbiAgICB9XG4gICAgXG4gICAgY29uc3QgdGV4dCA9IERPTS5lbGVtZW50SW5pdCgncCcsIHsnY2xhc3MnOid0ZXh0J30sIGAke2lucHV0LnZhbHVlfWApO1xuICAgIHRleHQuYXBwZW5kQ2hpbGQobW9kaWZ5KTtcbiAgICBmb3JtLmFwcGVuZENoaWxkKHRleHQpO1xuICAgIHJlbW92ZS5jbGFzc0xpc3QudG9nZ2xlKCdub25lJyxmYWxzZSk7XG5cbiAgICByZXR1cm5cbiAgICBcbiAgICB9XG4gICAgIHJldHVybiB7XG4gICAgICAgICBjcmVhdGVQcm9qZWN0LFxuICAgICAgICAgY3JlYXRlVG9Eb05vdGUsXG4gICAgICAgICByZXZlYWxDcmVhdGVGb3JtLFxuICAgICAgICAgdG9nZ2xlUHJvamVjdFNpemUsXG4gICAgICAgICBjaG9vc2VOb3RlVHlwZSxcbiAgICAgICAgIG5vdGVUeXBlR2VuZXJhdG9yLFxuICAgICAgICAgZGVsZXRlQWRkTm90ZUZvcm0sXG4gICAgICAgICBkaXNhYmxlQnRucyxcbiAgICAgICAgIGVuYWJsZUJ0bnMsXG4gICAgICAgICBjbGVhblRvRG9Gb3JtLFxuICAgICAgICAgbW9kaWZ5VG9Eb05vdGUsXG4gICAgICAgICBjYW5jZWxOb3RlLFxuICAgICAgICAgcmV2ZXJ0TW9kaWZpZWROb3RlLFxuICAgICAgICAgYWRkTmV3Q2hlY2ssXG4gICAgICAgICBnZW5lcmF0ZU5ld0FkZENoZWNrLFxuICAgICAgICAgc3VibWl0SXRlbSxcbiAgICAgICAgIHN1Ym1pdE1vZGlmaWVkTm90ZVxuICAgICB9XG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCAqIGFzIHByb2plY3RzIGZyb20gJy4vcHJvamVjdHMnO1xuaW1wb3J0IHsgRE9NR2VuZXJhbCB9IGZyb20gXCIuL2hlbHBlcnMvRE9NXCI7XG5pbXBvcnQgeyB0ZW1wbGF0ZURPTVN0cnVjdHMgfSBmcm9tICcuL3Byb2plY3RzRE9NJztcbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IHsgcHJvamVjdEV2ZW50cyB9IGZyb20gJy4vcHJvamVjdGV2ZW50cyc7XG5cblxuY29uc3QgcmV2ZWFsVG9EbyA9IChmdW5jdGlvbigpeyBcbiAgICBcbiAgICAvL0NhbGxpbmcgbW9kdWxlIE9iamVjdHNcbiAgICBjb25zdCBET00gPSBET01HZW5lcmFsKCk7XG4gICAgY29uc3Qgc3RydWN0cyA9IHRlbXBsYXRlRE9NU3RydWN0cygpO1xuICAgIGNvbnN0IG1haW4gPSBwcm9qZWN0cy5tYWluSW50ZXJmYWNlKCk7XG4gICAgXG5cbiAgICAvL01vZHVsZSBtZXRob2RzIHRvIGJlIHVzZWRcbiAgICBjb25zdCBuZXdQcm9qID0gbWFpbi5uZXdQcm9qO1xuICAgIGNvbnN0IGxvY2FsU3RvcmUgPSBtYWluLnRyYW5zZmVyVG9Mb2NhbFN0b3JhZ2U7XG4gICAgY29uc3QgY3JlYXRlUHJvamVjdCA9IHN0cnVjdHMuY3JlYXRlUHJvamVjdDtcbiAgICBjb25zdCByZXZlYWxDcmVhdGVGb3JtID0gc3RydWN0cy5yZXZlYWxDcmVhdGVGb3JtO1xuICAgIGNvbnN0IHRvZ2dsZVByb2plY3RTaXplID0gc3RydWN0cy50b2dnbGVQcm9qZWN0U2l6ZTtcbiAgICBjb25zdCBjaG9vc2VOb3RlVHlwZSA9IHN0cnVjdHMuY2hvb3NlTm90ZVR5cGU7XG4gICAgY29uc3Qgbm90ZVR5cGVHZW5lcmF0b3IgPSBzdHJ1Y3RzLm5vdGVUeXBlR2VuZXJhdG9yO1xuICAgIGNvbnN0IGRlbGV0ZUFkZE5vdGVGb3JtID0gc3RydWN0cy5kZWxldGVBZGROb3RlRm9ybTtcbiAgICBjb25zdCBkaXNhYmxlQnRucyA9IHN0cnVjdHMuZGlzYWJsZUJ0bnM7XG4gICAgY29uc3QgY3JlYXRlVG9Eb05vdGUgPSBzdHJ1Y3RzLmNyZWF0ZVRvRG9Ob3RlO1xuICAgIGNvbnN0IGVuYWJsZUJ0bnMgPSBzdHJ1Y3RzLmVuYWJsZUJ0bnM7XG4gICAgY29uc3QgY2xlYW5Ub0RvRm9ybSA9IHN0cnVjdHMuY2xlYW5Ub0RvRm9ybTtcbiAgICBjb25zdCBhZGROZXdDaGVjayA9IHN0cnVjdHMuYWRkTmV3Q2hlY2s7XG4gICAgY29uc3QgY2FuY2VsTm90ZSA9IHN0cnVjdHMuY2FuY2VsTm90ZTtcbiAgICBjb25zdCByZXZlcnRNb2RpZmllZE5vdGUgPSBzdHJ1Y3RzLnJldmVydE1vZGlmaWVkTm90ZTtcbiAgICBjb25zdCBtb2RpZnlUb0RvTm90ZSA9IHN0cnVjdHMubW9kaWZ5VG9Eb05vdGU7XG4gICAgY29uc3Qgc3VibWl0SXRlbSA9IHN0cnVjdHMuc3VibWl0SXRlbTtcbiAgICBjb25zdCBnZW5lcmF0ZU5ld0FkZENoZWNrID0gc3RydWN0cy5nZW5lcmF0ZU5ld0FkZENoZWNrO1xuICAgIGNvbnN0IHN1Ym1pdE1vZGlmaWVkTm90ZSA9IHN0cnVjdHMuc3VibWl0TW9kaWZpZWROb3RlO1xuICAgIGNvbnN0IGRlbGVnYXRvciA9IHByb2plY3RFdmVudHMuZGVsZWdhdG9yO1xuXG4gICAgXG4gICAgXG4gICAgLy9FdmVudCBTdWJzY3JpcHRpb25zXG4gICAgcHJvamVjdEV2ZW50cy5zdWJzY3JpYmUoJ3ZpZXdQcm9qZWN0JywgdG9nZ2xlUHJvamVjdFNpemUpO1xuICAgIHByb2plY3RFdmVudHMuc3Vic2NyaWJlKCdjcmVhdGUnLCBjcmVhdGVQcm9qZWN0KTtcbiAgICBwcm9qZWN0RXZlbnRzLnN1YnNjcmliZSgnY3JlYXRlJywgbmV3UHJvaik7XG4gICAgcHJvamVjdEV2ZW50cy5zdWJzY3JpYmUoJ3NhdmVkJywgbG9jYWxTdG9yZSk7XG4gICAgcHJvamVjdEV2ZW50cy5zdWJzY3JpYmUoJ3JldmVhbCcsIHJldmVhbENyZWF0ZUZvcm0pO1xuICAgIHByb2plY3RFdmVudHMuc3Vic2NyaWJlKCdpbnB1dE9yTGlzdCcsIGNob29zZU5vdGVUeXBlKTtcbiAgICBwcm9qZWN0RXZlbnRzLnN1YnNjcmliZSgnbm90ZVRvRG9UeXBlJywgbm90ZVR5cGVHZW5lcmF0b3IpO1xuICAgIC8vcHJvamVjdEV2ZW50cy5zdWJzY3JpYmUoJ25vdGVUb0RvVHlwZScsIGZ1bmN0aW9uIFN0b3JlIHNlbGVjdGVkIHR5cGUgdG8gYmUgcmV0cmlldmVkIGJ5IGJhY2tlbmQgbGF0ZXIuKVxuICAgIHByb2plY3RFdmVudHMuc3Vic2NyaWJlKCdkZWxldGVOb3RlVHlwZUZvcm0nLCBkaXNhYmxlQnRucyk7XG4gICAgcHJvamVjdEV2ZW50cy5zdWJzY3JpYmUoJ2RlbGV0ZU5vdGVUeXBlRm9ybScsIGRlbGV0ZUFkZE5vdGVGb3JtKTtcbiAgICBwcm9qZWN0RXZlbnRzLnN1YnNjcmliZSgnYWJvcnROb3RlVHlwZUZvcm0nLCBkZWxldGVBZGROb3RlRm9ybSk7XG4gICAgcHJvamVjdEV2ZW50cy5zdWJzY3JpYmUoJ2Fib3J0Tm90ZVR5cGVGb3JtJywgZW5hYmxlQnRucyk7XG4gICAgcHJvamVjdEV2ZW50cy5zdWJzY3JpYmUoJ2NhbmNlbE5vdGUnLCBjYW5jZWxOb3RlKTtcbiAgICBwcm9qZWN0RXZlbnRzLnN1YnNjcmliZSgnY2FuY2VsTm90ZScsIGVuYWJsZUJ0bnMpO1xuICAgIHByb2plY3RFdmVudHMuc3Vic2NyaWJlKCdjYW5jZWxOb3RlJywgY2xlYW5Ub0RvRm9ybSk7ICAgICAgICBcbiAgICBwcm9qZWN0RXZlbnRzLnN1YnNjcmliZSgnbmV3Q2hlY2tJdGVtJywgYWRkTmV3Q2hlY2spO1xuICAgIC8vcHJvamVjdEV2ZW50cy5zdWJzY3JpYmUoJ2NyZWF0ZU5vdGUnLCBmdW5jdGlvblJlOkJhY2tlbmRVcGRhdGUgIHdpdGggdXNlciBzdWJtaXNzaW9uICYgaW5jbHVkaW5nIHR5cGUgY2hvc2VuICYmIHdoZXRoZXIgaXRlbXMgYXJlIGNoZWNrZWQgb3Igbm90IChpZiBjaGVja2JveCksIHJlbWVtYmVyIGxvY2FsU3RvcmFnZSB1cGRhdGUgYXMgd2VsbC4pXG4gICAgcHJvamVjdEV2ZW50cy5zdWJzY3JpYmUoJ2NyZWF0ZU5vdGUnLCBjcmVhdGVUb0RvTm90ZSk7XG4gICAgcHJvamVjdEV2ZW50cy5zdWJzY3JpYmUoJ3N1Ym1pdE5vdGUnLCBzdWJtaXRJdGVtKTtcbiAgICBwcm9qZWN0RXZlbnRzLnN1YnNjcmliZSgnc3VibWl0Tm90ZScsIGVuYWJsZUJ0bnMpO1xuICAgIHByb2plY3RFdmVudHMuc3Vic2NyaWJlKCdzdWJtaXROb3RlJywgY2xlYW5Ub0RvRm9ybSk7XG4gICAgcHJvamVjdEV2ZW50cy5zdWJzY3JpYmUoJ3VwZGF0ZUNoZWNrSXRlbScsIGdlbmVyYXRlTmV3QWRkQ2hlY2spO1xuICAgIHByb2plY3RFdmVudHMuc3Vic2NyaWJlKCdtb2RpZnlOb3RlJywgbW9kaWZ5VG9Eb05vdGUpO1xuICAgIHByb2plY3RFdmVudHMuc3Vic2NyaWJlKCdyZXZlcnQnLCByZXZlcnRNb2RpZmllZE5vdGUpO1xuICAgIHByb2plY3RFdmVudHMuc3Vic2NyaWJlKCdzdWJtaXRNb2ROb3RlJywgc3VibWl0TW9kaWZpZWROb3RlKVxuICAgIFxuXG5cbiAgICAvL0luaXRpYWwgZWxlbWVudHNcbiAgICBjb25zdCBtYWluQ29udGFpbmVyID0gKGZ1bmN0aW9uKCl7XG4gICAgXG4gICAgICAgIGNvbnN0IGNvbnRhaW5lciA9ICBET00uZWxlbWVudEluaXQoJ2RpdicseydpZCc6J2NvbnRhaW5lcid9KVxuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNvbnRhaW5lcilcbiAgICAgICAgcmV0dXJuIGNvbnRhaW5lclxuICAgICBcbn0pKClcblxuICAgIGNvbnN0IGhlYWRlciA9IChmdW5jdGlvbigpe1xuICAgICAgICBcbiAgICAgICAgLy9Jbml0aWFsaXNlIGVsZW1lbnRzXG4gICAgICAgIGNvbnN0IGhlYWQgPSBET00uZWxlbWVudEluaXQoJ2hlYWRlcicsIHsnaWQnOidoZWFkZXInfSk7XG4gICAgICAgIGNvbnN0IHRpdGxlID0gRE9NLmVsZW1lbnRJbml0KCdoMScseydpZCc6ICd0aXRsZSd9LCAnVGhpcyBpcyB5b3VyIFRvLURvIGxpc3QnKTtcbiAgICAgICAgY29uc3QgcmV2ZWFsRm9ybSA9IERPTS5lbGVtZW50SW5pdCgnYnV0dG9uJyx7J2NsYXNzJzoncmV2ZWFsRm9ybSd9LCdOZXcgUHJvamVjdCcpO1xuICAgICAgICBcbiAgICAgICAgLy9BZGQgaGVhZGVyIGV2ZW50IGxpc3RlbmVyXG4gICAgICAgIGhlYWQub25jbGljayA9IGRlbGVnYXRvcjtcbiAgICAgICAgXG4gICAgICAgIC8vQXBwZW5kIHRvIGRvY3VtZW50XG4gICAgICAgIGhlYWQuYXBwZW5kQ2hpbGQodGl0bGUpO1xuICAgICAgICBoZWFkLmFwcGVuZENoaWxkKHJldmVhbEZvcm0pO1xuICAgICAgICBtYWluQ29udGFpbmVyLmFwcGVuZENoaWxkKGhlYWQpO1xuXG4gICAgICAgIHJldHVybiBoZWFkO1xufSkoKVxuICAgIFxuICAgIGNvbnN0IGRlZmF1bHRQcm9qZWN0ID0gKGZ1bmN0aW9uKCl7XG4gICAgICAgIFxuICAgIH0pKClcblxuICAgIFxuICAgIGNvbnN0IHJlbmRlckxvY2FsU3RvcmFnZSA9IGZ1bmN0aW9uKCl7XG4gICAgICAgIC8vVGhpcyB3aWxsIHVzZSBsb2NhbFN0b3JhZ2UgdG8gY2hlY2tcbiAgICAgICAgLy9pZiB0aGUgdXNlciBoYXMgYW55IHNhdmVkIGluc3RhbmNlc1xuICAgICAgICAvL29mIHByb2plY3RzIGFuZCByZW5kZXIgdGhlbSBpZiBzby4gXG4gICAgICAgIC8vUmVtZW1iZXIgdG8gdGFrZSBhY2NvdW50IGFueSBkaWZmZXJlbmNlcyBpbiBkYXRhIGJldHdlZW4gYmFja2VuZCBhbmQgRE9NXG4gICAgfVxuXG5cbiAgICAgXG4gICAgY29uc3QgY3JlYXRlRm9ybSA9IChmdW5jdGlvbigpe1xuICAgICAgICAgY29uc3QgZm9ybSA9IERPTS5lbGVtZW50SW5pdCgnZm9ybScseydpZCc6J2NyZWF0ZUZvcm0nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdjbGFzcyc6J2hpZGRlbiBwcm9qZWN0Rm9ybSdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICBmb3JtLmFwcGVuZENoaWxkKERPTS5lbGVtZW50SW5pdCgnYnInKSk7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQoRE9NLmVsZW1lbnRJbml0KCdsYWJlbCcseydmb3InOid0aXRsZUlucCd9LCdQcm9qZWN0IFRpdGxlJykpXG4gICAgICAgICBmb3JtLmFwcGVuZENoaWxkKERPTS5lbGVtZW50SW5pdCgnYnInKSk7XG4gICAgICAgICBmb3JtLmFwcGVuZENoaWxkKERPTS5lbGVtZW50SW5pdCgnaW5wdXQnLHsndHlwZSc6J3RleHQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdpZCcgOiAndGl0bGVJbnAnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdhdXRvY29tcGxldGUnOiAnb2ZmJywgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICduYW1lJzondGl0bGVJbnAnfSkpO1xuICAgICAgICAgZm9ybS5hcHBlbmRDaGlsZChET00uZWxlbWVudEluaXQoJ2J1dHRvbicseyd0eXBlJzonc3VibWl0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2NsYXNzJzogJ3N1Ym1pdCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnaWQnOidzdWJtaXQnfSwnc3VibWl0JykpO1xuICAgICAgICAgXG4gXG4gICAgICAgICBmb3JtLm9uc3VibWl0ID0gZGVsZWdhdG9yO1xuICAgICAgICAgbWFpbkNvbnRhaW5lci5hcHBlbmRDaGlsZChmb3JtKTtcbiAgICAgICAgIHJldHVybiBmb3JtOyBcbn0pKClcbiAgICAgXG5cbn0pKClcblxuICAgICJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==