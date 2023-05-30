/*! For license information please see 365.31dd4611.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[365],{365:function(t,e,r){r.r(e),r.d(e,{default:function(){return L}});var n,o,i,a,c=r(861),u=r(439),l=r(791),s=r(168),f=r(444),h=f.ZP.form(n||(n=(0,s.Z)(["\n  display: flex;\n  gap: 10px;\n  margin-bottom: 20px;\n  & .input {\n    background: -webkit-linear-gradient(90deg, #282f45, #040c25);\n    background: linear-gradient(90deg, #282f45, #040c25);\n    margin: 0;\n    padding: 10px;\n    color: white;\n    border: none;\n    width: 100%;\n    height: 50px;\n    font-family: inherit;\n    font-size: 16px;\n    border-radius: 0.4rem;\n  }\n\n  & .input::placeholder {\n    color: #b0bec5;\n  }\n\n  & .input:focus {\n    outline: none;\n  }\n\n  & .btn {\n    background: -webkit-linear-gradient(90deg, #282f45, #040c25);\n    background: linear-gradient(90deg, #282f45, #040c25);\n    color: white;\n    border: none;\n    border-radius: 4px;\n    cursor: pointer;\n    max-width: 100%;\n    height: 50px;\n    padding-left: 15px;\n    padding-right: 15px;\n    text-align: center;\n    text-decoration: none;\n    font-size: inherit;\n  }\n\n  & .btn:focus,\n  .btn:hover {\n    color: orange;\n  }\n"]))),p=r(184),d=function(t){var e=t.onSubmit;return(0,p.jsxs)(h,{onSubmit:e,children:[(0,p.jsx)("input",{type:"text",name:"query",className:"input",autoFocus:!0,placeholder:"Search movie"}),(0,p.jsx)("button",{className:"btn",type:"submit",children:"Search"})]})},v=r(87),g=r(689),y=r(787),m=f.ZP.div(o||(o=(0,s.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n"]))),x=f.ZP.ul(i||(i=(0,s.Z)(["\n  display: flex;\n  gap: 20px;\n  flex-wrap: wrap;\n"]))),w=f.ZP.li(a||(a=(0,s.Z)(["\n  width: calc((100% - 60px) / 4);\n  transition: 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\n  &:hover,\n  &:focus {\n    box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),\n      1px 4px 6px rgba(0, 0, 0, 0.16);\n    transform: scale(1.03);\n  }\n"])));function b(){b=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,n=Object.defineProperty||function(t,e,r){t[e]=r.value},o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(N){u=function(t,e,r){return t[e]=r}}function l(t,e,r,o){var i=e&&e.prototype instanceof h?e:h,a=Object.create(i.prototype),c=new k(o||[]);return n(a,"_invoke",{value:L(t,r,c)}),a}function s(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(N){return{type:"throw",arg:N}}}t.wrap=l;var f={};function h(){}function p(){}function d(){}var v={};u(v,i,(function(){return this}));var g=Object.getPrototypeOf,y=g&&g(g(O([])));y&&y!==e&&r.call(y,i)&&(v=y);var m=d.prototype=h.prototype=Object.create(v);function x(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function w(t,e){function o(n,i,a,c){var u=s(t[n],t,i);if("throw"!==u.type){var l=u.arg,f=l.value;return f&&"object"==typeof f&&r.call(f,"__await")?e.resolve(f.__await).then((function(t){o("next",t,a,c)}),(function(t){o("throw",t,a,c)})):e.resolve(f).then((function(t){l.value=t,a(l)}),(function(t){return o("throw",t,a,c)}))}c(u.arg)}var i;n(this,"_invoke",{value:function(t,r){function n(){return new e((function(e,n){o(t,r,e,n)}))}return i=i?i.then(n,n):n()}})}function L(t,e,r){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return S()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var c=j(a,r);if(c){if(c===f)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var u=s(t,e,r);if("normal"===u.type){if(n=r.done?"completed":"suspendedYield",u.arg===f)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n="completed",r.method="throw",r.arg=u.arg)}}}function j(t,e){var r=e.method,n=t.iterator[r];if(void 0===n)return e.delegate=null,"throw"===r&&t.iterator.return&&(e.method="return",e.arg=void 0,j(t,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),f;var o=s(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,f;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,f):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,f)}function _(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function E(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function k(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(_,this),this.reset(!0)}function O(t){if(t){var e=t[i];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:S}}function S(){return{value:void 0,done:!0}}return p.prototype=d,n(m,"constructor",{value:d,configurable:!0}),n(d,"constructor",{value:p,configurable:!0}),p.displayName=u(d,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===p||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,d):(t.__proto__=d,u(t,c,"GeneratorFunction")),t.prototype=Object.create(m),t},t.awrap=function(t){return{__await:t}},x(w.prototype),u(w.prototype,a,(function(){return this})),t.AsyncIterator=w,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new w(l(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},x(m),u(m,c,"Generator"),u(m,i,(function(){return this})),u(m,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},t.values=O,k.prototype={constructor:k,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(E),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return a.type="throw",a.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var c=r.call(i,"catchLoc"),u=r.call(i,"finallyLoc");if(c&&u){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,f):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),f},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),E(r),f}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;E(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:O(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),f}},t}var L=function(){var t,e=(0,v.lr)(),r=(0,u.Z)(e,2),n=r[0],o=r[1],i=(0,l.useState)(null),a=(0,u.Z)(i,2),s=a[0],f=a[1],h=(0,g.TH)();console.log(h);var L=null!==(t=n.get("query"))&&void 0!==t?t:"";(0,l.useEffect)((function(){if(L){var t=function(){var t=(0,c.Z)(b().mark((function t(){var e,r;return b().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,y.Wf)(L);case 2:e=t.sent,r=e.data,f(r.results),console.log(r.results);case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();L&&t()}}),[L]);return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(d,{onSubmit:function(t){t.preventDefault();var e=t.target,r=e.elements.query.value;o(r?{query:r}:{}),e.reset()}}),s&&(0,p.jsx)(m,{children:(0,p.jsx)(x,{children:s.map((function(t){var e=t.id,r=t.title,n=t.name,o=t.poster_path;return(0,p.jsx)(w,{children:(0,p.jsx)(v.rU,{to:"".concat(e),state:{from:h},children:(0,p.jsx)("div",{className:"card",children:(0,p.jsx)("img",{className:"img",src:o?"https://image.tmdb.org/t/p/w500".concat(o):"https://placehold.co/400x600?text=".concat(null!==r&&void 0!==r?r:n,"&font=roboto"),alt:null!==r&&void 0!==r?r:n})})})},e)}))})})]})}}}]);
//# sourceMappingURL=365.31dd4611.chunk.js.map