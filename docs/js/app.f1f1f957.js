(function(){"use strict";var __webpack_modules__={6418:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){var vue__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(3396);__webpack_exports__.Z=(0,vue__WEBPACK_IMPORTED_MODULE_0__.aZ)({name:"App",data(){return{display:"",theme:localStorage.getItem("theme")||"theme-one",newInput:!1}},methods:{append(e){this.newInput&&(this.display="",this.newInput=!1),this.display+=e},deleteLast(){this.display=this.display.slice(0,-1)},calculate(){try{this.display=eval(this.display)}catch{this.display="Error"}this.newInput=!0},clear(){this.display=""},toggleTheme(){const e=["theme-one","theme-two","theme-three"],_=e.indexOf(this.theme);this.theme=e[(_+1)%e.length],localStorage.setItem("theme",this.theme)}}})},7539:function(e,_,t){var n=t(9242),a=t(3396),r=t(7139);const c={class:"container"},i={class:"calculator"},o={class:"header"},u=(0,a._)("h1",null,"calc",-1),l={class:"theme-switch"},p=(0,a._)("p",null,"THEME",-1),s=(0,a._)("div",{class:"theme-labels"},[(0,a._)("span",null,"1"),(0,a._)("span",null,"2"),(0,a._)("span",null,"3")],-1),b=(0,a._)("div",{class:"toggle-ball"},null,-1),d=[b],k={class:"display"},h={class:"buttons"},w={class:"small-buttons"},f={class:"large-buttons"};function v(e,_,t,n,b,v){return(0,a.wg)(),(0,a.iD)("div",{class:(0,r.C_)(["app",e.theme])},[(0,a._)("div",c,[(0,a._)("div",i,[(0,a._)("div",o,[u,(0,a._)("div",l,[p,(0,a._)("div",null,[s,(0,a._)("div",{class:"toggle-input",onClick:_[0]||(_[0]=(..._)=>e.toggleTheme&&e.toggleTheme(..._))},d)])])]),(0,a._)("div",k,(0,r.zw)(e.display),1),(0,a._)("div",h,[(0,a._)("div",w,[(0,a._)("button",{onClick:_[1]||(_[1]=_=>e.append(7))},"7"),(0,a._)("button",{onClick:_[2]||(_[2]=_=>e.append(8))},"8"),(0,a._)("button",{onClick:_[3]||(_[3]=_=>e.append(9))},"9"),(0,a._)("button",{class:"del",onClick:_[4]||(_[4]=(..._)=>e.deleteLast&&e.deleteLast(..._))},"DEL"),(0,a._)("button",{onClick:_[5]||(_[5]=_=>e.append(4))},"4"),(0,a._)("button",{onClick:_[6]||(_[6]=_=>e.append(5))},"5"),(0,a._)("button",{onClick:_[7]||(_[7]=_=>e.append(6))},"6"),(0,a._)("button",{onClick:_[8]||(_[8]=_=>e.append("+"))},"+"),(0,a._)("button",{onClick:_[9]||(_[9]=_=>e.append(1))},"1"),(0,a._)("button",{onClick:_[10]||(_[10]=_=>e.append(2))},"2"),(0,a._)("button",{onClick:_[11]||(_[11]=_=>e.append(3))},"3"),(0,a._)("button",{onClick:_[12]||(_[12]=_=>e.append("-"))},"-"),(0,a._)("button",{onClick:_[13]||(_[13]=_=>e.append("."))},"."),(0,a._)("button",{onClick:_[14]||(_[14]=_=>e.append(0))},"0"),(0,a._)("button",{onClick:_[15]||(_[15]=_=>e.append("/"))},"/"),(0,a._)("button",{onClick:_[16]||(_[16]=_=>e.append("*"))},"x")]),(0,a._)("div",f,[(0,a._)("button",{class:"reset",onClick:_[17]||(_[17]=_=>e.clear())},"RESET"),(0,a._)("button",{class:"equals",onClick:_[18]||(_[18]=_=>e.calculate())},"=")])])])])],2)}var m=t(6418),q=t(89);const g=(0,q.Z)(m.Z,[["render",v]]);var C=g;(0,n.ri)(C).mount("#app")}},__webpack_module_cache__={};function __webpack_require__(e){var _=__webpack_module_cache__[e];if(void 0!==_)return _.exports;var t=__webpack_module_cache__[e]={exports:{}};return __webpack_modules__[e].call(t.exports,t,t.exports,__webpack_require__),t.exports}__webpack_require__.m=__webpack_modules__,function(){var e=[];__webpack_require__.O=function(_,t,n,a){if(!t){var r=1/0;for(u=0;u<e.length;u++){t=e[u][0],n=e[u][1],a=e[u][2];for(var c=!0,i=0;i<t.length;i++)(!1&a||r>=a)&&Object.keys(__webpack_require__.O).every((function(e){return __webpack_require__.O[e](t[i])}))?t.splice(i--,1):(c=!1,a<r&&(r=a));if(c){e.splice(u--,1);var o=n();void 0!==o&&(_=o)}}return _}a=a||0;for(var u=e.length;u>0&&e[u-1][2]>a;u--)e[u]=e[u-1];e[u]=[t,n,a]}}(),function(){__webpack_require__.n=function(e){var _=e&&e.__esModule?function(){return e["default"]}:function(){return e};return __webpack_require__.d(_,{a:_}),_}}(),function(){__webpack_require__.d=function(e,_){for(var t in _)__webpack_require__.o(_,t)&&!__webpack_require__.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:_[t]})}}(),function(){__webpack_require__.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){__webpack_require__.o=function(e,_){return Object.prototype.hasOwnProperty.call(e,_)}}(),function(){var e={143:0};__webpack_require__.O.j=function(_){return 0===e[_]};var _=function(_,t){var n,a,r=t[0],c=t[1],i=t[2],o=0;if(r.some((function(_){return 0!==e[_]}))){for(n in c)__webpack_require__.o(c,n)&&(__webpack_require__.m[n]=c[n]);if(i)var u=i(__webpack_require__)}for(_&&_(t);o<r.length;o++)a=r[o],__webpack_require__.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return __webpack_require__.O(u)},t=self["webpackChunkcalculator_app"]=self["webpackChunkcalculator_app"]||[];t.forEach(_.bind(null,0)),t.push=_.bind(null,t.push.bind(t))}();var __webpack_exports__=__webpack_require__.O(void 0,[998],(function(){return __webpack_require__(7539)}));__webpack_exports__=__webpack_require__.O(__webpack_exports__)})();
//# sourceMappingURL=app.f1f1f957.js.map