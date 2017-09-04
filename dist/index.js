!function(e){function t(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var r={};t.m=e,t.c=r,t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/",t(t.s=4)}([function(e,t){function r(e){throw new Error("Cannot find module '"+e+"'.")}r.keys=function(){return[]},r.resolve=r,e.exports=r,r.id=0},function(e,t,r){var n,o,i;!function(a){if("object"==typeof e&&"object"==typeof e.exports){var p=a(!function(){var e=new Error('Cannot find module "."');throw e.code="MODULE_NOT_FOUND",e}(),t);void 0!==p&&(e.exports=p)}else o=[r,t,r(5)],n=a,void 0!==(i="function"==typeof n?n.apply(t,o):n)&&(e.exports=i)}(function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=e("path-to-regexp"),n=function(){function e(){}return e.stringToRegexp=function(e){var t=[],n=r(e,t);return n.keys=t,n},e.parseQuery=function(e){var t={};if(""===e)return t;"?"===e.charAt(0)&&(e=e.slice(1));for(var r=e.split("&"),n=0,o=r;n<o.length;n++){var i=o[n],a=i.split("=");t[decodeURIComponent(a[0])]=decodeURIComponent(a[1])}return t},e.parsePath=function(t){var r;return"function"==typeof URL?r=new URL(t,"http://example.com"):(r=document.createElement("a"),r.href="http://example.com/"+t),{path:e.trimSlashes(r.pathname),queryString:r.search,query:e.parseQuery(r.search)}},e.trimSlashes=function(t){return t.replace(e.LEADING_SLASHES_STRIPPER,"")},e.obtainRequestProcessors=function(t,r){var n=e.parsePath(t),o=n;o.params={};for(var i=[],a=0,p=r;a<p.length;a++){var s=p[a];s.pathExp.test(o.path)&&(e.populateRequest(o,s.pathExp),i.push({callback:s.callback,request:o}))}return i},e.populateRequest=function(e,t){for(var r=t.exec(e.path),n=r?r.slice(1):[],o=t.keys,i=0;i<n.length;i++)void 0!==n[i]&&(e.params[o[i].name]=decodeURIComponent(n[i]));return e},e.LEADING_SLASHES_STRIPPER=/^\/+|\/+$/,e}();t.RouterHelper=n})},function(e,t,r){var n,o,i;!function(a){if("object"==typeof e&&"object"==typeof e.exports){var p=a(!function(){var e=new Error('Cannot find module "."');throw e.code="MODULE_NOT_FOUND",e}(),t);void 0!==p&&(e.exports=p)}else o=[r,t],n=a,void 0!==(i="function"==typeof n?n.apply(t,o):n)&&(e.exports=i)}(function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(){this._handlers=[]}return Object.defineProperty(e.prototype,"handlers",{get:function(){return this._handlers},enumerable:!0,configurable:!0}),e.prototype.use=function(e,t){return this._handlers.push({path:e,callback:t}),this},e}();t.RouterGroup=r})},function(e,t,r){var n,o,i;!function(a){if("object"==typeof e&&"object"==typeof e.exports){var p=a(!function(){var e=new Error('Cannot find module "."');throw e.code="MODULE_NOT_FOUND",e}(),t);void 0!==p&&(e.exports=p)}else o=[r,t,r(1),r(2)],n=a,void 0!==(i="function"==typeof n?n.apply(t,o):n)&&(e.exports=i)}(function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=e("./helper"),n=e("./router-group"),o=function(){function e(){this.handlers=[]}return e.prototype.use=function(e,t){if(t instanceof n.RouterGroup)for(var o=0,i=t.handlers;o<i.length;o++){var a=i[o],p=e+"/"+a.path,s=r.RouterHelper.stringToRegexp(p);this.handlers.push({path:p,pathExp:s,callback:a.callback})}else{var s=r.RouterHelper.stringToRegexp(e);this.handlers.push({path:e,pathExp:s,callback:t})}return this},e.prototype.listen=function(){if(this.listening)throw new Error("Already listening.");this.listening=!0},e.prototype.processPath=function(e){var t=this,n={send:this.send},o=r.RouterHelper.obtainRequestProcessors(e,this.handlers),i=0,a=function(){if(!(i>=o.length)){var e=o[i];e.request.listening=t.listening,i++,e.callback(e.request,n,a)}};a()},e}();t.Router=o})},function(e,t,r){var n,o,i;!function(a){if("object"==typeof e&&"object"==typeof e.exports){var p=a(!function(){var e=new Error('Cannot find module "."');throw e.code="MODULE_NOT_FOUND",e}(),t);void 0!==p&&(e.exports=p)}else o=[r,t,r(1),r(2),r(3),r(6)],n=a,void 0!==(i="function"==typeof n?n.apply(t,o):n)&&(e.exports=i)}(function(e,t){"use strict";function r(e){for(var r in e)t.hasOwnProperty(r)||(t[r]=e[r])}Object.defineProperty(t,"__esModule",{value:!0}),r(e("./helper")),r(e("./router-group")),r(e("./router")),r(e("./browser-router"))})},function(e,t){function r(e,t){for(var r,n=[],o=0,p=0,s="",u=t&&t.delimiter||"/",c=t&&t.delimiters||"./",f=!1;null!==(r=h.exec(e));){var l=r[0],d=r[1],v=r.index;if(s+=e.slice(p,v),p=v+l.length,d)s+=d[1],f=!0;else{var y="",g=e[p],x=r[2],m=r[3],b=r[4],E=r[5];if(!f&&s.length){var w=s.length-1;c.indexOf(s[w])>-1&&(y=s[w],s=s.slice(0,w))}s&&(n.push(s),s="",f=!1);var _=""!==y&&void 0!==g&&g!==y,R="+"===E||"*"===E,P="?"===E||"*"===E,O=y||u,j=m||b;n.push({name:x||o++,prefix:y,delimiter:O,optional:P,repeat:R,partial:_,pattern:j?a(j):"[^"+i(O)+"]+?"})}}return(s||p<e.length)&&n.push(s+e.substr(p)),n}function n(e,t){return o(r(e,t))}function o(e){for(var t=new Array(e.length),r=0;r<e.length;r++)"object"==typeof e[r]&&(t[r]=new RegExp("^(?:"+e[r].pattern+")$"));return function(r,n){for(var o="",i=n&&n.encode||encodeURIComponent,a=0;a<e.length;a++){var p=e[a];if("string"!=typeof p){var s,u=r?r[p.name]:void 0;if(Array.isArray(u)){if(!p.repeat)throw new TypeError('Expected "'+p.name+'" to not repeat, but got array');if(0===u.length){if(p.optional)continue;throw new TypeError('Expected "'+p.name+'" to not be empty')}for(var c=0;c<u.length;c++){if(s=i(u[c]),!t[a].test(s))throw new TypeError('Expected all "'+p.name+'" to match "'+p.pattern+'"');o+=(0===c?p.prefix:p.delimiter)+s}}else if("string"!=typeof u&&"number"!=typeof u&&"boolean"!=typeof u){if(!p.optional)throw new TypeError('Expected "'+p.name+'" to be '+(p.repeat?"an array":"a string"));p.partial&&(o+=p.prefix)}else{if(s=i(String(u)),!t[a].test(s))throw new TypeError('Expected "'+p.name+'" to match "'+p.pattern+'", but got "'+s+'"');o+=p.prefix+s}}else o+=p}return o}}function i(e){return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function a(e){return e.replace(/([=!:$\/()])/g,"\\$1")}function p(e){return e&&e.sensitive?"":"i"}function s(e,t){if(!t)return e;var r=e.source.match(/\((?!\?)/g);if(r)for(var n=0;n<r.length;n++)t.push({name:n,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,pattern:null});return e}function u(e,t,r){for(var n=[],o=0;o<e.length;o++)n.push(l(e[o],t,r).source);return new RegExp("(?:"+n.join("|")+")",p(r))}function c(e,t,n){return f(r(e,n),t,n)}function f(e,t,r){r=r||{};for(var n=r.strict,o=!1!==r.end,a=i(r.delimiter||"/"),s=[].concat(r.endsWith||[]).map(i).concat("$").join("|"),u="",c=0;c<e.length;c++){var f=e[c];if("string"==typeof f)u+=i(f);else{var l=i(f.prefix),h="(?:"+f.pattern+")";t&&t.push(f),f.repeat&&(h+="(?:"+l+h+")*"),h=f.optional?f.partial?l+"("+h+")?":"(?:"+l+"("+h+"))?":l+"("+h+")",u+=h}}return n||(u+="(?:"+a+"(?="+s+"))?"),u+=o?"$"===s?s:"(?="+s+")":"(?="+a+"|"+s+")",new RegExp("^"+u,p(r))}function l(e,t,r){return e instanceof RegExp?s(e,t):Array.isArray(e)?u(e,t,r):c(e,t,r)}e.exports=l,e.exports.parse=r,e.exports.compile=n,e.exports.tokensToFunction=o,e.exports.tokensToRegExp=f;var h=new RegExp(["(\\\\.)","(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?"].join("|"),"g")},function(e,t,r){var n,o,i,a=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])};return function(t,r){function n(){this.constructor=t}e(t,r),t.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}}();!function(a){if("object"==typeof e&&"object"==typeof e.exports){var p=a(!function(){var e=new Error('Cannot find module "."');throw e.code="MODULE_NOT_FOUND",e}(),t);void 0!==p&&(e.exports=p)}else o=[r,t,r(3),r(1)],n=a,void 0!==(i="function"==typeof n?n.apply(t,o):n)&&(e.exports=i)}(function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=e("./router"),n=e("./helper"),o=function(e){function t(t){var r=e.call(this)||this;return r.opts=t,r.sent={},r.send=r.send.bind(r),r.processCurrentPath=r.processCurrentPath.bind(r),r}return a(t,e),t.prototype.send=function(e,t){if(void 0===t&&(t=this.opts.defaultTarget),this.sent[t])throw new Error("Already sent data to the target '"+t+"'.");this.sent[t]=!0;var r=document.querySelector(t);if(!r)throw new Error("No match for the target '"+t+"'");r.innerHTML=e},t.prototype.listen=function(){this.processCurrentPath(),addEventListener("popstate",this.processCurrentPath),e.prototype.listen.call(this)},t.prototype.stop=function(){removeEventListener("popstate",this.processCurrentPath)},t.prototype.getPath=function(){var e=decodeURI(location.pathname+location.search);return n.RouterHelper.trimSlashes(e)},t.prototype.push=function(e){history.pushState(void 0,"",e),this.processPath(e)},t.prototype.processCurrentPath=function(){var e=this.getPath();this.processPath(e)},t.prototype.processPath=function(t){this.sent={},e.prototype.processPath.call(this,t)},t}(r.Router);t.BrowserRouter=o})}]);
//# sourceMappingURL=index.js.map