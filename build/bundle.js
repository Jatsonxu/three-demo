(()=>{var e={682:(e,t,n)=>{"use strict";n.d(t,{Z:()=>i});var r=n(81),o=n.n(r),s=n(645),a=n.n(s)()(o());a.push([e.id,".title {\n  background: blue;\n  text-decoration: underline;\n}\n",""]);const i=a},390:(e,t,n)=>{"use strict";n.d(t,{Z:()=>i});var r=n(81),o=n.n(r),s=n(645),a=n.n(s)()(o());a.push([e.id,".title {\n    /*8 位透明度*/\n    color: rgba(18,52,86,0.47059);\n    font-weight: bold;\n    font-size: 30px;\n    -webkit-user-select: none;\n       -moz-user-select: none;\n            user-select: none;\n}\n",""]);const i=a},645:e=>{"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,o,s){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(r)for(var i=0;i<this.length;i++){var c=this[i][0];null!=c&&(a[c]=!0)}for(var u=0;u<e.length;u++){var l=[].concat(e[u]);r&&a[l[0]]||(void 0!==s&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=s),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),t.push(l))}},t}},81:e=>{"use strict";e.exports=function(e){return e[1]}},379:e=>{"use strict";var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var s={},a=[],i=0;i<e.length;i++){var c=e[i],u=r.base?c[0]+r.base:c[0],l=s[u]||0,d="".concat(u," ").concat(l);s[u]=l+1;var p=n(d),f={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)t[p].references++,t[p].updater(f);else{var v=o(f,r);r.byIndex=i,t.splice(i,0,{identifier:d,updater:v,references:1})}a.push(d)}return a}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var s=r(e=e||[],o=o||{});return function(e){e=e||[];for(var a=0;a<s.length;a++){var i=n(s[a]);t[i].references--}for(var c=r(e,o),u=0;u<s.length;u++){var l=n(s[u]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}s=c}}},569:e=>{"use strict";var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{"use strict";e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{"use strict";e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{"use strict";e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var s=n.sourceMap;s&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(s))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{"use strict";e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},466:e=>{e.exports={priceFormat:function(){return"$59.88"}}}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var s=t[r]={id:r,exports:{}};return e[r](s,s.exports,n),s.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.nc=void 0,(()=>{"use strict";var e=n(379),t=n.n(e),r=n(795),o=n.n(r),s=n(569),a=n.n(s),i=n(565),c=n.n(i),u=n(216),l=n.n(u),d=n(589),p=n.n(d),f=n(390),v={};v.styleTagTransform=p(),v.setAttributes=c(),v.insert=a().bind(null,"head"),v.domAPI=o(),v.insertStyleElement=l(),t()(f.Z,v),f.Z&&f.Z.locals&&f.Z.locals;var m=n(682),h={};h.styleTagTransform=p(),h.setAttributes=c(),h.insert=a().bind(null,"head"),h.domAPI=o(),h.insertStyleElement=l(),t()(m.Z,h),m.Z&&m.Z.locals&&m.Z.locals;const y=document.createElement("div");y.className="title",y.innerHTML="你好啊,Jetson",document.body.appendChild(y);const{priceFormat:b}=n(466);console.log(40),console.log(b())})()})();