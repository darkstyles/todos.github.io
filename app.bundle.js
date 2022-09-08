(()=>{"use strict";var e={771:(e,t,n)=>{n.d(t,{Z:()=>u});var r=n(537),o=n.n(r),i=n(645),a=n.n(i)()(o());a.push([e.id,"* {\n    box-sizing: border-box;\n    font-family: sans-serif;\n}\n\n#app {\n    padding: 0 200px;\n    user-select: none;\n}\n\nul, li {\n    margin: 0;\n    padding: 0;\n    list-style: none;\n}\n\n.header__input {\n    width: 100%;\n    height: 50px;\n    padding-top: 5px;\n    border: 1px solid lightgray;\n    font-size: 25px;\n    text-indent: 10px;\n}\n\n.main__todo-item {\n    display: flex;\n    align-items: center;\n    height: 30px;\n    padding: 0 10px;\n    border: 1px solid lightgray;\n    border-top: none;\n    font-size: 15px;\n}\n\n.main__todo-item:first-child {\n    border-top: 1px solid lightgray;\n}\n\n.main__todo-item-status {\n    width: 15px;\n    height: 15px;\n    margin-right: 6px;\n}\n\n.main__todo-item-title {\n    padding-top: 2px;\n}\n\n.main__todo-item--completed {\n    text-decoration-line: line-through;\n    color: lightgray;\n}\n\n.footer {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding: 2px 10px;\n    border: 1px solid lightgray;\n    border-top: none;\n}\n\n.footer__tabs {\n    display: flex;\n}\n\n.footer__tab {\n    padding: 3px 10px 0;\n    cursor: pointer;\n}\n\n.footer__tab--active {\n    border: 1px solid red;\n    border-radius: 2px;\n}\n\n.footer__clear-btn {\n    cursor: pointer;\n}\n\n.guide-item {\n    position: absolute;\n    border: 1px solid lightgray;\n    z-index: 1000;\n}\n\n.guideline {\n    position: absolute;\n    display: none;\n    height: 1px;\n    border-top: 2px solid blue;\n}\n\n.guideline.show {\n    display: block;\n}\n","",{version:3,sources:["webpack://./src/styles/index.css"],names:[],mappings:"AAAA;IACI,sBAAsB;IACtB,uBAAuB;AAC3B;;AAEA;IACI,gBAAgB;IAChB,iBAAiB;AACrB;;AAEA;IACI,SAAS;IACT,UAAU;IACV,gBAAgB;AACpB;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,gBAAgB;IAChB,2BAA2B;IAC3B,eAAe;IACf,iBAAiB;AACrB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,YAAY;IACZ,eAAe;IACf,2BAA2B;IAC3B,gBAAgB;IAChB,eAAe;AACnB;;AAEA;IACI,+BAA+B;AACnC;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,iBAAiB;AACrB;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,kCAAkC;IAClC,gBAAgB;AACpB;;AAEA;IACI,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;IACnB,iBAAiB;IACjB,2BAA2B;IAC3B,gBAAgB;AACpB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,mBAAmB;IACnB,eAAe;AACnB;;AAEA;IACI,qBAAqB;IACrB,kBAAkB;AACtB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,kBAAkB;IAClB,2BAA2B;IAC3B,aAAa;AACjB;;AAEA;IACI,kBAAkB;IAClB,aAAa;IACb,WAAW;IACX,0BAA0B;AAC9B;;AAEA;IACI,cAAc;AAClB",sourcesContent:["* {\n    box-sizing: border-box;\n    font-family: sans-serif;\n}\n\n#app {\n    padding: 0 200px;\n    user-select: none;\n}\n\nul, li {\n    margin: 0;\n    padding: 0;\n    list-style: none;\n}\n\n.header__input {\n    width: 100%;\n    height: 50px;\n    padding-top: 5px;\n    border: 1px solid lightgray;\n    font-size: 25px;\n    text-indent: 10px;\n}\n\n.main__todo-item {\n    display: flex;\n    align-items: center;\n    height: 30px;\n    padding: 0 10px;\n    border: 1px solid lightgray;\n    border-top: none;\n    font-size: 15px;\n}\n\n.main__todo-item:first-child {\n    border-top: 1px solid lightgray;\n}\n\n.main__todo-item-status {\n    width: 15px;\n    height: 15px;\n    margin-right: 6px;\n}\n\n.main__todo-item-title {\n    padding-top: 2px;\n}\n\n.main__todo-item--completed {\n    text-decoration-line: line-through;\n    color: lightgray;\n}\n\n.footer {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding: 2px 10px;\n    border: 1px solid lightgray;\n    border-top: none;\n}\n\n.footer__tabs {\n    display: flex;\n}\n\n.footer__tab {\n    padding: 3px 10px 0;\n    cursor: pointer;\n}\n\n.footer__tab--active {\n    border: 1px solid red;\n    border-radius: 2px;\n}\n\n.footer__clear-btn {\n    cursor: pointer;\n}\n\n.guide-item {\n    position: absolute;\n    border: 1px solid lightgray;\n    z-index: 1000;\n}\n\n.guideline {\n    position: absolute;\n    display: none;\n    height: 1px;\n    border-top: 2px solid blue;\n}\n\n.guideline.show {\n    display: block;\n}\n"],sourceRoot:""}]);const u=a},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,o,i){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(r)for(var u=0;u<this.length;u++){var c=this[u][0];null!=c&&(a[c]=!0)}for(var s=0;s<e.length;s++){var l=[].concat(e[s]);r&&a[l[0]]||(void 0!==i&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=i),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),t.push(l))}},t}},537:e=>{e.exports=function(e){var t=e[1],n=e[3];if(!n)return t;if("function"==typeof btoa){var r=btoa(unescape(encodeURIComponent(JSON.stringify(n)))),o="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(r),i="/*# ".concat(o," */"),a=n.sources.map((function(e){return"/*# sourceURL=".concat(n.sourceRoot||"").concat(e," */")}));return[t].concat(a).concat([i]).join("\n")}return[t].join("\n")}},379:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var i={},a=[],u=0;u<e.length;u++){var c=e[u],s=r.base?c[0]+r.base:c[0],l=i[s]||0,f="".concat(s," ").concat(l);i[s]=l+1;var p=n(f),d={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)t[p].references++,t[p].updater(d);else{var y=o(d,r);r.byIndex=u,t.splice(u,0,{identifier:f,updater:y,references:1})}a.push(f)}return a}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var i=r(e=e||[],o=o||{});return function(e){e=e||[];for(var a=0;a<i.length;a++){var u=n(i[a]);t[u].references--}for(var c=r(e,o),s=0;s<i.length;s++){var l=n(i[s]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}i=c}}},569:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var i=n.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={id:r,exports:{}};return e[r](i,i.exports,n),i.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.nc=void 0,(()=>{var e=function(e,t){var n=null;if(o(e)?n=t&&i(t)?t.querySelector(e):document.querySelector(e):i(e)&&(n=e),r(n))throw new Error("does not exist element");return n},t=function(e,t){var n=[];return o(e)?n=t&&i(t)?t.querySelectorAll(e):document.querySelectorAll(e):i(e)&&(n=[e]),n},r=function(e){return null===e},o=function(e){return"string"==typeof e},i=function(e){return e instanceof Element},a=["el"];function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){d(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function f(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function p(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function d(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var y=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};f(this,e),d(this,"_el",null),d(this,"_props",{}),d(this,"_state",{});var n=t.el,r=l(t,a);this._el=n,this._props=r,this.setup()}var n,r;return n=e,(r=[{key:"setup",value:function(){}},{key:"setEvent",value:function(){}},{key:"mounted",value:function(){}},{key:"template",value:function(){return""}},{key:"render",value:function(){this._el&&(this._el.innerHTML=this.template(),this.setEvent(),this.mounted())}},{key:"el",get:function(){return this._el}},{key:"props",get:function(){return this._props}},{key:"setState",value:function(e){this._state=s(s({},this._state),e),this.render()}},{key:"addEvent",value:function(e,n,r){var o,i=function(e){if(Array.isArray(e))return u(e)}(o=t(n,this.el))||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(o)||function(e,t){if(e){if("string"==typeof e)return u(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?u(e,t):void 0}}(o)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}();this.el.addEventListener(e,(function(e){var t;t=e.target,i.includes(t)&&r(e)}))}}])&&p(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),e}();function m(e){return m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},m(e)}function b(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function h(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function v(e,t){return v=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},v(e,t)}function A(e,t){if(t&&("object"===m(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function g(e){return g=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},g(e)}var _=function(t){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&v(e,t)}(u,t);var n,r,o,i,a=(o=u,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=g(o);if(i){var n=g(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return A(this,e)});function u(){return b(this,u),a.apply(this,arguments)}return n=u,(r=[{key:"template",value:function(){return'\n      <input type="text" class="header__input" placeholder="What needs to be done?">\n    '}},{key:"mounted",value:function(){e(".header__input",this.el).focus()}},{key:"setEvent",value:function(){var e=this.props.addItem;this.addEvent("keypress",".header__input",(function(t){var n=t.key,r=t.target.value.trimStart();"Enter"===n&&""!==r&&e(r)}))}}])&&h(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),u}(y);function w(e){return w="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},w(e)}function O(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function I(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function C(e,t){return C=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},C(e,t)}function x(e,t){if(t&&("object"===w(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function B(e){return B=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},B(e)}var E=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&C(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=B(r);if(o){var n=B(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return x(this,e)});function a(){return O(this,a),i.apply(this,arguments)}return t=a,(n=[{key:"template",value:function(){var e=this.props,t=e.id,n=e.title,r=e.completed;return'\n      <li class="main__todo-item '.concat(r?"main__todo-item--completed":"",'">\n        <input type="checkbox" class="main__todo-item-status" data-id="').concat(t,'" ').concat(r?"checked":"",'>\n        <label class="main__todo-item-title">').concat(n,"</label>\n      </li>\n    ")}}])&&I(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(y),j=new Map,S=function(e){var t=j.get(e);return t||(t=j.set(e,new Map).get(e)),t},k=function(e,t){var n=S(e),r=n.get(t);return r||(r=n.set(t,[]).get(t)),r},P=function(e){if(!i(e)&&(t=e,"[object Object]"!==Object.prototype.toString.call(t)))throw new Error("mixin은 Element 또는 Object 에만 적용 가능합니다.");var t;e.on=function(t,n){return function(e,t,n){k(e,t).push(n)}(e,t,n)},e.off=function(t,n){return function(e,t,n){!function(e,t,n){S(e).set(t,n)}(e,t,k(e,t).filter((function(e){return e!==n})))}(e,t,n)},e.emit=function(t,n){return function(e,t,n){k(e,t).forEach((function(e){return e(n)}))}(e,t,n)}};function T(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var R=function(){function n(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n),this.isSetDropzone=!1,this.guideElement=null,this.guidelineElement=null,this.draggedElement=null,this.mappedCustomDataBySelector=new Map}var r,o;return r=n,(o=[{key:"draggable",value:function(e,n){var r=this,o=t(e);this.mappedCustomDataBySelector.has(e)||this.mappedCustomDataBySelector.set(e,n),o.forEach((function(e){if(function(e){return!!e.getAttribute("dropzone")}(e))throw new Error("dropzone 요소는 draggable 요소로 등록할 수 없습니다.");e.setAttribute("dnd-draggable",!0),e.addEventListener("mousedown",r.onMouseDown.bind(r))}))}},{key:"dropzone",value:function(t){if(this.isSetDropzone)throw new Error("이미 dropzone 이 등록 되어 있습니다.");var n=e(t);return n.setAttribute("dropzone",!0),P(n),this.isSetDropzone=!0,n}},{key:"getDropzoneElement",value:function(e,t){return document.elementsFromPoint(e,t).find((function(e){return!!e.getAttribute("dropzone")}))}},{key:"getDraggableElement",value:function(e,t){return document.elementsFromPoint(e,t).find((function(e){return!!e.getAttribute("dnd-draggable")&&!e.classList.contains("guide-item")}))}},{key:"getCustomData",value:function(e){var t=this,n=Array.from(e.classList);return this.mappedCustomDataBySelector.get(n.find((function(e){return t.mappedCustomDataBySelector.has(e)})))}},{key:"onMouseDown",value:function(e){var t=this,n=e.pageX,r=e.pageY,o=e.currentTarget;if("INPUT"!==e.target.tagName){var i=function e(n){"Escape"===n.key&&(document.removeEventListener("keyup",e),document.removeEventListener("mousemove",a),document.removeEventListener("mouseup",u),t.clear())},a=function(e){t.onMouseMove(e)},u=function e(n){document.removeEventListener("keyup",i),document.removeEventListener("mousemove",a),document.removeEventListener("mouseup",e),t.onMouseUp(n)},c=o.cloneNode(!0),s=document.createElement("div");s.classList.add("guideline"),c.classList.add("guide-item"),c.style.width="".concat(o.clientWidth,"px"),c.style.top="".concat(r,"px"),c.style.left="".concat(n,"px"),document.body.append(s),document.body.append(c),this.guideElement=c,this.guidelineElement=s,this.draggedElement=o,document.addEventListener("keyup",i),document.addEventListener("mousemove",a),document.addEventListener("mouseup",u)}}},{key:"onMouseMove",value:function(e){var t=e.pageX,n=e.pageY,r=this.guideElement,o=this.guidelineElement;r.style.top="".concat(n,"px"),r.style.left="".concat(t,"px");var i=this.getDraggableElement(t,n);if(i){var a=i.getBoundingClientRect(),u=a.top,c=a.left,s=a.width;o.style.width="".concat(s,"px"),o.style.top="".concat(u,"px"),o.style.left="".concat(c,"px"),o.classList.toggle("show",!0)}else o.classList.toggle("show",!1)}},{key:"onMouseUp",value:function(e){var t=e.pageX,n=e.pageY,r=this.getDraggableElement(t,n),o=this.getDropzoneElement(t,n);o?(o.emit("drop",{srcElement:this.draggedElement,destElement:r,customData:this.getCustomData(r)}),this.clear()):this.clear()}},{key:"clear",value:function(){document.body.removeChild(this.guidelineElement),document.body.removeChild(this.guideElement),this.guideElement=null,this.guidelineElement=null,this.draggedElement=null}}])&&T(r.prototype,o),Object.defineProperty(r,"prototype",{writable:!1}),n}();function D(e){return D="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},D(e)}function M(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function L(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function z(e,t){return z=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},z(e,t)}function U(e,t){if(t&&("object"===D(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function q(e){return q=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},q(e)}var Y=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&z(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=q(r);if(o){var n=q(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return U(this,e)});function a(){return M(this,a),i.apply(this,arguments)}return t=a,(n=[{key:"template",value:function(){var e=this.props.items;return'\n      <ul class="main__todo-list">\n          '.concat(e.map((function(e){return new E(e).template()})).join(""),"\n      </ul>\n    ")}},{key:"mounted",value:function(){var e=this.props,t=e.useDnd,n=e.insertBeforeItem;if(t){var r=new R,o=r.dropzone(".main__todo-list");r.draggable(".main__todo-item"),o.on("drop",(function(e){var t=e.srcElement,r=e.destElement;if(t&&r){var o=t.querySelector(".main__todo-item-status").dataset.id,i=r.querySelector(".main__todo-item-status").dataset.id;n(o,i)}}))}}},{key:"setEvent",value:function(){var e=this.props.updateItem;this.addEvent("change",".main__todo-item-status",(function(t){var n=t.target;e(n.dataset.id)}))}}])&&L(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(y);function F(e){return F="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},F(e)}function N(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function W(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Z(e,t){return Z=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},Z(e,t)}function X(e,t){if(t&&("object"===F(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function V(e){return V=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},V(e)}var H=["all","active","completed"],J=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&Z(e,t)}(u,e);var t,n,r,i,a=(r=u,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=V(r);if(i){var n=V(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return X(this,e)});function u(){return N(this,u),a.apply(this,arguments)}return t=u,(n=[{key:"template",value:function(){var e=this.props,t=e.viewType,n=e.activeCount,r=e.completedCount;return'\n      <div class="footer__items-left">'.concat(n," item").concat(n>1?"s":"",' left</div>\n      <div class="footer__tabs">\n        ').concat(H.map((function(e){return'<div data-status="'.concat(e,'" class="footer__tab').concat((r=e,r===t?" footer__tab--active":""),'">').concat(o(n=e)?n.charAt(0).toUpperCase()+n.slice(1):n,"</div>");var n,r})).join(""),'\n      </div>\n      <div class="footer__clear-btn">Clear Completed (').concat(r,")</div>\n    ")}},{key:"setEvent",value:function(){var e=this.props,t=e.updateViewType,n=e.removeCompletedItem;this.addEvent("click",".footer__tab",(function(e){var n=e.target;t(n.dataset.status)})),this.addEvent("click",".footer__clear-btn",(function(){n()}))}}])&&W(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(y),$=n(379),G=n.n($),K=n(795),Q=n.n(K),ee=n(569),te=n.n(ee),ne=n(565),re=n.n(ne),oe=n(216),ie=n.n(oe),ae=n(589),ue=n.n(ae),ce=n(771),se={};function le(e){return le="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},le(e)}function fe(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i=[],a=!0,u=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);a=!0);}catch(e){u=!0,o=e}finally{try{a||null==n.return||n.return()}finally{if(u)throw o}}return i}}(e,t)||de(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function pe(e){return function(e){if(Array.isArray(e))return ye(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||de(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function de(e,t){if(e){if("string"==typeof e)return ye(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?ye(e,t):void 0}}function ye(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function me(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function be(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function he(e,t){return he=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},he(e,t)}function ve(e,t){if(t&&("object"===le(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function Ae(e){return Ae=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},Ae(e)}se.styleTagTransform=ue(),se.setAttributes=re(),se.insert=te().bind(null,"head"),se.domAPI=Q(),se.insertStyleElement=ie(),G()(ce.Z,se),ce.Z&&ce.Z.locals&&ce.Z.locals,new(function(t){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&he(e,t)}(u,t);var n,r,o,i,a=(o=u,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=Ae(o);if(i){var n=Ae(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return ve(this,e)});function u(){return me(this,u),a.apply(this,arguments)}return n=u,r=[{key:"setup",value:function(){this._state={items:[],viewType:"all"}}},{key:"template",value:function(){return'\n      <div class="header"></div>\n      <div class="main"></div>\n      <div class="footer"></div>\n    '}},{key:"mounted",value:function(){var t=e(".header"),n=e(".main"),r=e(".footer"),o=this._state,i=o.viewType,a=o.items,u=this._props.useDnd;new _({el:t,addItem:this.addItem.bind(this)}).render(),new Y({el:n,useDnd:u,items:this.getFilteredItems(a,i),updateItem:this.updateItem.bind(this),insertBeforeItem:this.insertBeforeItem.bind(this)}).render(),new J({el:r,viewType:i,updateViewType:this.updateViewType.bind(this),removeCompletedItem:this.removeCompletedItem.bind(this),activeCount:this.getActiveItems(a).length,completedCount:this.getCompletedItems(a).length}).render()}},{key:"getActiveItems",value:function(e){return e.filter((function(e){return!e.completed}))}},{key:"getCompletedItems",value:function(e){return e.filter((function(e){return e.completed}))}},{key:"getFilteredItems",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"all",n=this.getActiveItems(e),r=this.getCompletedItems(e);return"active"===t?n:"completed"===t?r:[].concat(pe(n),pe(r))}},{key:"addItem",value:function(e){var t=this._state.items;this.setState({items:this.getFilteredItems([].concat(pe(t),[{id:Date.now().toString(36)+Math.random().toString(36).substring(2),title:e,completed:!1}]),"all")})}},{key:"removeCompletedItem",value:function(){var e=this._state.items;this.getCompletedItems(e).length&&this.setState({items:this.getActiveItems(e)})}},{key:"updateItem",value:function(e){var t=this._state.items,n=t.findIndex((function(t){return t.id===e}));if(-1!==n){var r=fe(t.splice(n,1),1)[0],o=this.getActiveItems(t),i=this.getCompletedItems(t);r.completed=!r.completed,r.completed?i.push(r):o.push(r),this.setState({items:[].concat(pe(o),pe(i))})}}},{key:"updateViewType",value:function(e){this.setState({viewType:e})}},{key:"insertBeforeItem",value:function(e,t){var n=this._state.items,r=n.findIndex((function(t){return t.id===e}));if(-1!==r){var o=fe(n.splice(r,1),1)[0],i=n.findIndex((function(e){return e.id===t}));o&&-1!==i&&(n.splice(i,0,o),this.setState({items:this.getFilteredItems(n,"all")}))}}}],r&&be(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),u}(y))({el:document.getElementById("app"),useDnd:!0}).render()})()})();
//# sourceMappingURL=app.bundle.js.map