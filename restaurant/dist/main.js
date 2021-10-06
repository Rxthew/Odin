/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/pasta.js":
/*!**********************!*\
  !*** ./src/pasta.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ pasta)
/* harmony export */ });
function pasta(){

    const element = document.createElement('div');
    const header = document.createElement('h2');
    const para = document.createElement('p');
    const image = new Image();
    
    element.setAttribute('id', 'Pasta');
    header.textContent = 'Pasta';
    para.textContent = 'Got to watch those carbs';
    image.src = 'https://cdn.pixabay.com/photo/2015/07/27/19/44/spaghetti-863304_960_720.jpg';
    image.alt = 'pasta_image';
    
    element.appendChild(header);
    element.appendChild(para);
    element.appendChild(image);
    
    return element
    }
    
    

/***/ }),

/***/ "./src/pizza.js":
/*!**********************!*\
  !*** ./src/pizza.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ pizza)
/* harmony export */ });
function pizza(){

    const element = document.createElement('div');
    const header = document.createElement('h2');
    const para = document.createElement('p');
    const image = new Image();
    
    element.setAttribute('id', 'Pizza');
    header.textContent = 'Pizza';
    para.textContent = 'You know you want me';
    image.src = 'https://cdn.pixabay.com/photo/2021/07/19/16/04/pizza-6478478_960_720.jpg';
    image.alt = 'pizza_image';
    
    element.appendChild(header);
    element.appendChild(para);
    element.appendChild(image);
    
    return element
    }
    
    

/***/ }),

/***/ "./src/soup.js":
/*!*********************!*\
  !*** ./src/soup.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ soup)
/* harmony export */ });
function soup(){

  const element = document.createElement('div');
  const header = document.createElement('h2');
  const para = document.createElement('p');
  const image = new Image();

  element.setAttribute('id', 'Soup');
  header.textContent = 'Soup';
  para.textContent = 'I am good for you';
  image.src = 'https://cdn.pixabay.com/photo/2019/09/27/09/59/pumpkin-soup-4508015_960_720.jpg';
  image.alt = 'soup_image';

  element.appendChild(header);
  element.appendChild(para);
  element.appendChild(image);

return element
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
/******/ 			// no module.id needed
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
/* harmony import */ var _pizza__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pizza */ "./src/pizza.js");
/* harmony import */ var _pasta__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pasta */ "./src/pasta.js");
/* harmony import */ var _soup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./soup */ "./src/soup.js");





(function restaurant(){

const container = document.createElement('div');
container.setAttribute('id','contents');
document.body.appendChild(container);


const addHeader = (function (){
    const headerCont = document.createElement('span');
    const header = document.createElement('h1');
    header.textContent = 'Welcome to the Restaurant';

    headerCont.appendChild(header);
    container.appendChild(headerCont);

})();

const tabs = (function (){
    const tabContainer = document.createElement('div');

    let pizzaTab = document.createElement('button');
    let pastaTab = document.createElement('button');
    let soupTab =  document.createElement('button');

    pizzaTab.textContent = 'Pizza';
    pastaTab.textContent = 'Pasta';
    soupTab.textContent = 'Soup';

    pizzaTab.setAttribute('id', 'pizzaBtn');
    pastaTab.setAttribute('id', 'pastaBtn');
    soupTab.setAttribute('id', 'soupBtn');

    tabContainer.appendChild(pizzaTab);
    tabContainer.appendChild(pastaTab);
    tabContainer.appendChild(soupTab);

    container.appendChild(tabContainer);

    return {
          'pizzaBtn': [pizzaTab, _pizza__WEBPACK_IMPORTED_MODULE_0__["default"]],
          'pastaBtn': [pastaTab, _pasta__WEBPACK_IMPORTED_MODULE_1__["default"]], 
          'soupBtn': [soupTab,_soup__WEBPACK_IMPORTED_MODULE_2__["default"]], 
        }
})()

const defaultIsSoup = (function(){
    const s = (0,_soup__WEBPACK_IMPORTED_MODULE_2__["default"])();
    s.setAttribute('class', 'active');
    container.appendChild(s);
})()

const removeContents = function(elem){
    elem.parentNode.removeChild(elem);

};

const generateContents = function(event){
    const active = tabs[`${event.target.id}`][1]();
    active.setAttribute('class', 'active');
    container.appendChild(active);

};

const addTabEvents = (function(){
    const remove = () => document.querySelector('.active');
    Object.keys(tabs).forEach(
        function(key){
                tabs[key][0].onclick = function(button){
                if (remove().id !== button.target.textContent){
                 removeContents(remove());
                 generateContents(button);
                }
            }
        })

})();

})();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFlOztBQUVmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ3BCZTs7QUFFZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNwQmU7O0FBRWY7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7VUNsQkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7O0FDTjRCO0FBQ0E7QUFDRjs7O0FBRzFCOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxDQUFDOztBQUVEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsaUNBQWlDLDhDQUFLO0FBQ3RDLGlDQUFpQyw4Q0FBSztBQUN0Qyw4QkFBOEIsNkNBQUk7QUFDbEM7QUFDQSxDQUFDOztBQUVEO0FBQ0EsY0FBYyxpREFBSTtBQUNsQjtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBOztBQUVBOztBQUVBO0FBQ0EsMkJBQTJCLGdCQUFnQjtBQUMzQztBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVCxDQUFDOztBQUVELENBQUMsSSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvcGFzdGEuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9waXp6YS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL3NvdXAuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcGFzdGEoKXtcblxuICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIGNvbnN0IHBhcmEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgY29uc3QgaW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgICBcbiAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgnaWQnLCAnUGFzdGEnKTtcbiAgICBoZWFkZXIudGV4dENvbnRlbnQgPSAnUGFzdGEnO1xuICAgIHBhcmEudGV4dENvbnRlbnQgPSAnR290IHRvIHdhdGNoIHRob3NlIGNhcmJzJztcbiAgICBpbWFnZS5zcmMgPSAnaHR0cHM6Ly9jZG4ucGl4YWJheS5jb20vcGhvdG8vMjAxNS8wNy8yNy8xOS80NC9zcGFnaGV0dGktODYzMzA0Xzk2MF83MjAuanBnJztcbiAgICBpbWFnZS5hbHQgPSAncGFzdGFfaW1hZ2UnO1xuICAgIFxuICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcbiAgICBlbGVtZW50LmFwcGVuZENoaWxkKHBhcmEpO1xuICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoaW1hZ2UpO1xuICAgIFxuICAgIHJldHVybiBlbGVtZW50XG4gICAgfVxuICAgIFxuICAgICIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHBpenphKCl7XG5cbiAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICBjb25zdCBwYXJhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGNvbnN0IGltYWdlID0gbmV3IEltYWdlKCk7XG4gICAgXG4gICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ1BpenphJyk7XG4gICAgaGVhZGVyLnRleHRDb250ZW50ID0gJ1BpenphJztcbiAgICBwYXJhLnRleHRDb250ZW50ID0gJ1lvdSBrbm93IHlvdSB3YW50IG1lJztcbiAgICBpbWFnZS5zcmMgPSAnaHR0cHM6Ly9jZG4ucGl4YWJheS5jb20vcGhvdG8vMjAyMS8wNy8xOS8xNi8wNC9waXp6YS02NDc4NDc4Xzk2MF83MjAuanBnJztcbiAgICBpbWFnZS5hbHQgPSAncGl6emFfaW1hZ2UnO1xuICAgIFxuICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcbiAgICBlbGVtZW50LmFwcGVuZENoaWxkKHBhcmEpO1xuICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoaW1hZ2UpO1xuICAgIFxuICAgIHJldHVybiBlbGVtZW50XG4gICAgfVxuICAgIFxuICAgICIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNvdXAoKXtcblxuICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gIGNvbnN0IHBhcmEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIGNvbnN0IGltYWdlID0gbmV3IEltYWdlKCk7XG5cbiAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ1NvdXAnKTtcbiAgaGVhZGVyLnRleHRDb250ZW50ID0gJ1NvdXAnO1xuICBwYXJhLnRleHRDb250ZW50ID0gJ0kgYW0gZ29vZCBmb3IgeW91JztcbiAgaW1hZ2Uuc3JjID0gJ2h0dHBzOi8vY2RuLnBpeGFiYXkuY29tL3Bob3RvLzIwMTkvMDkvMjcvMDkvNTkvcHVtcGtpbi1zb3VwLTQ1MDgwMTVfOTYwXzcyMC5qcGcnO1xuICBpbWFnZS5hbHQgPSAnc291cF9pbWFnZSc7XG5cbiAgZWxlbWVudC5hcHBlbmRDaGlsZChoZWFkZXIpO1xuICBlbGVtZW50LmFwcGVuZENoaWxkKHBhcmEpO1xuICBlbGVtZW50LmFwcGVuZENoaWxkKGltYWdlKTtcblxucmV0dXJuIGVsZW1lbnRcbn1cblxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgcGl6emEgZnJvbSAnLi9waXp6YSc7XG5pbXBvcnQgcGFzdGEgZnJvbSAnLi9wYXN0YSc7XG5pbXBvcnQgc291cCBmcm9tICcuL3NvdXAnO1xuXG5cbihmdW5jdGlvbiByZXN0YXVyYW50KCl7XG5cbmNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuY29udGFpbmVyLnNldEF0dHJpYnV0ZSgnaWQnLCdjb250ZW50cycpO1xuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjb250YWluZXIpO1xuXG5cbmNvbnN0IGFkZEhlYWRlciA9IChmdW5jdGlvbiAoKXtcbiAgICBjb25zdCBoZWFkZXJDb250ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgaGVhZGVyLnRleHRDb250ZW50ID0gJ1dlbGNvbWUgdG8gdGhlIFJlc3RhdXJhbnQnO1xuXG4gICAgaGVhZGVyQ29udC5hcHBlbmRDaGlsZChoZWFkZXIpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChoZWFkZXJDb250KTtcblxufSkoKTtcblxuY29uc3QgdGFicyA9IChmdW5jdGlvbiAoKXtcbiAgICBjb25zdCB0YWJDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgIGxldCBwaXp6YVRhYiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGxldCBwYXN0YVRhYiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGxldCBzb3VwVGFiID0gIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuXG4gICAgcGl6emFUYWIudGV4dENvbnRlbnQgPSAnUGl6emEnO1xuICAgIHBhc3RhVGFiLnRleHRDb250ZW50ID0gJ1Bhc3RhJztcbiAgICBzb3VwVGFiLnRleHRDb250ZW50ID0gJ1NvdXAnO1xuXG4gICAgcGl6emFUYWIuc2V0QXR0cmlidXRlKCdpZCcsICdwaXp6YUJ0bicpO1xuICAgIHBhc3RhVGFiLnNldEF0dHJpYnV0ZSgnaWQnLCAncGFzdGFCdG4nKTtcbiAgICBzb3VwVGFiLnNldEF0dHJpYnV0ZSgnaWQnLCAnc291cEJ0bicpO1xuXG4gICAgdGFiQ29udGFpbmVyLmFwcGVuZENoaWxkKHBpenphVGFiKTtcbiAgICB0YWJDb250YWluZXIuYXBwZW5kQ2hpbGQocGFzdGFUYWIpO1xuICAgIHRhYkNvbnRhaW5lci5hcHBlbmRDaGlsZChzb3VwVGFiKTtcblxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh0YWJDb250YWluZXIpO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgICAncGl6emFCdG4nOiBbcGl6emFUYWIsIHBpenphXSxcbiAgICAgICAgICAncGFzdGFCdG4nOiBbcGFzdGFUYWIsIHBhc3RhXSwgXG4gICAgICAgICAgJ3NvdXBCdG4nOiBbc291cFRhYixzb3VwXSwgXG4gICAgICAgIH1cbn0pKClcblxuY29uc3QgZGVmYXVsdElzU291cCA9IChmdW5jdGlvbigpe1xuICAgIGNvbnN0IHMgPSBzb3VwKCk7XG4gICAgcy5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2FjdGl2ZScpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChzKTtcbn0pKClcblxuY29uc3QgcmVtb3ZlQ29udGVudHMgPSBmdW5jdGlvbihlbGVtKXtcbiAgICBlbGVtLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZWxlbSk7XG5cbn07XG5cbmNvbnN0IGdlbmVyYXRlQ29udGVudHMgPSBmdW5jdGlvbihldmVudCl7XG4gICAgY29uc3QgYWN0aXZlID0gdGFic1tgJHtldmVudC50YXJnZXQuaWR9YF1bMV0oKTtcbiAgICBhY3RpdmUuc2V0QXR0cmlidXRlKCdjbGFzcycsICdhY3RpdmUnKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoYWN0aXZlKTtcblxufTtcblxuY29uc3QgYWRkVGFiRXZlbnRzID0gKGZ1bmN0aW9uKCl7XG4gICAgY29uc3QgcmVtb3ZlID0gKCkgPT4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFjdGl2ZScpO1xuICAgIE9iamVjdC5rZXlzKHRhYnMpLmZvckVhY2goXG4gICAgICAgIGZ1bmN0aW9uKGtleSl7XG4gICAgICAgICAgICAgICAgdGFic1trZXldWzBdLm9uY2xpY2sgPSBmdW5jdGlvbihidXR0b24pe1xuICAgICAgICAgICAgICAgIGlmIChyZW1vdmUoKS5pZCAhPT0gYnV0dG9uLnRhcmdldC50ZXh0Q29udGVudCl7XG4gICAgICAgICAgICAgICAgIHJlbW92ZUNvbnRlbnRzKHJlbW92ZSgpKTtcbiAgICAgICAgICAgICAgICAgZ2VuZXJhdGVDb250ZW50cyhidXR0b24pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcblxufSkoKTtcblxufSkoKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=