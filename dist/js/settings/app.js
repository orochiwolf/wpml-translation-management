!function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:r})},n.r=function(t){Object.defineProperty(t,"__esModule",{value:!0})},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=12)}([function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r,o=n(8),i=(r=o)&&r.__esModule?r:{default:r};e.default=function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.restUrl=WPML_TM_SETTINGS.restUrl,this.restNonce=WPML_TM_SETTINGS.restNonce,this.ateSettings=WPML_TM_SETTINGS.ate,this.currentUser=new i.default(WPML_TM_SETTINGS.currentUser)}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r,o=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),i=n(0),s=(r=i)&&r.__esModule?r:{default:r};var a=function(t){function e(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);var t=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(e.__proto__||Object.getPrototypeOf(e)).call(this));return t.options=[],t.form=document.getElementById("icl_doc_translation_method"),t.form&&(t.options=t.form.querySelectorAll('.t_method [name="t_method"]'),t.submitButton=t.form.querySelector(".button-primary"),t.submitButton&&t.initEventHandlers()),t}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,s.default),o(e,[{key:"initEventHandlers",value:function(){for(var t=this,e=0;e<this.options.length;++e){this.options[e].onclick=function(){return t.submitButton.click()}}}}]),e}();e.default=a},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}();var o=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t)}return r(t,[{key:"show",value:function(t){arguments.length>1&&void 0!==arguments[1]&&arguments[1]&&(t.style.display=null),t.classList.remove("hidden")}},{key:"hide",value:function(t){arguments.length>1&&void 0!==arguments[1]&&arguments[1]&&(t.style.display="none"),t.classList.add("hidden")}},{key:"showSpinner",value:function(t){t.classList.add("is-active")}},{key:"hideSpinner",value:function(t){t.classList.remove("is-active")}},{key:"enableElement",value:function(t){t.classList.remove("disabled")}},{key:"disableElement",value:function(t){t.classList.add("disabled")}}]),t}();e.default=o},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.default={nonActive:"non-active",enabled:"enabled",active:"active"}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),o=a(n(3)),i=a(n(0)),s=a(n(2));function a(t){return t&&t.__esModule?t:{default:t}}var u=function(t){function e(t){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);var n=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(e.__proto__||Object.getPrototypeOf(e)).call(this));return n.visible=!1,n.tools=new s.default,n.amsAPI=t,n.ateControls=document.getElementById("ate-controls"),n.ateControls&&(n.toggleATE=n.ateControls.querySelector(".js-toggle-ate"),n.synchronizeWithAMS=n.ateControls.querySelector(".js-synchronize-with-ams"),n.status=n.ateControls.querySelector(".otgs-notice__status"),n.errors=n.ateControls.querySelector(".otgs-notice__errors"),n.spinner=n.ateControls.querySelector(".spinner"),n.ateConsole=n.ateControls.querySelector(".js-ate-console")),n.statusTypes=Object.keys(n.ateSettings.statuses).map(function(t){return n.ateSettings.statuses[t].type}),n}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,i.default),r(e,[{key:"init",value:function(){this.ateControls&&(this.initUI(),this.checkActivation(),this.initEventHandlers())}},{key:"isStatusOnly",value:function(){return this.ateControls&&this.ateControls.hasAttribute("data-status-only")}},{key:"initUI",value:function(){this.status&&this.tools.hide(this.status),this.errors&&this.tools.hide(this.errors),this.hideToggleATEButton(),this.hideSynchronizeWithAMSButton()}},{key:"show",value:function(){this.visibility(!0)}},{key:"hide",value:function(){this.visibility(!1)}},{key:"visibility",value:function(t){this.visible=t,this.ateControls&&(t?this.tools.show(this.ateControls):this.tools.hide(this.ateControls))}},{key:"updateControlsStatus",value:function(){this.visible&&(this.ATERequiresActivation()?this.enableATE():(this.ATEIsActive()&&this.updateSynchronizeWithAMSButton(),this.updateATEButton(),this.updateStatusMessage()))}},{key:"updateStatusMessage",value:function(){var t;this.tools.show(this.status),this.status.querySelector("p").innerHTML=this.getStatusHTML(),(t=this.status.classList).remove.apply(t,function(t){if(Array.isArray(t)){for(var e=0,n=Array(t.length);e<t.length;e++)n[e]=t[e];return n}return Array.from(t)}(this.statusTypes)),this.status.classList.add(this.getStatus().type)}},{key:"getStatusHTML",value:function(){return"<strong>"+this.getStatus().message.status+"</strong> "+this.getStatus().message.text}},{key:"updateSynchronizeWithAMSButton",value:function(){this.ATEIsActive()&&this.ateSettings.hasTranslators?this.showSynchronizeWithAMSButton():this.hideSynchronizeWithAMSButton()}},{key:"updateATEButton",value:function(){this.toggleATE.innerHTML=this.getStatus().button,this.ATEIsActive()?this.hideToggleATEButton():this.showToggleATEButton()}},{key:"getStatus",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return null===t&&(t=this.ateSettings.currentStatus),this.ateSettings.statuses[t]}},{key:"ATERequiresActivation",value:function(){return this.ateSettings.currentStatus===o.default.nonActive}},{key:"ATEIsActive",value:function(){return this.ateSettings.currentStatus===o.default.active}},{key:"initEventHandlers",value:function(){var t=this;this.toggleATE&&(this.toggleATE.onclick=function(e){e.preventDefault(),t.enableATE()}),this.synchronizeWithAMS&&(this.synchronizeWithAMS.onclick=function(e){e.preventDefault(),t.synchronizeData()}),this.ateConsole&&(this.ateConsole.onclick=function(){return window.location.reload(!0)})}},{key:"checkActivation",value:function(){var t=this;this.ateSettings.currentStatus===o.default.enabled&&(this.tools.disableElement(this.toggleATE),this.updateError(),this.showSpinner(),this.amsAPI.checkStatus().then(function(){(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{activated:!1}).activated&&(t.ateSettings.currentStatus=o.default.active,t.updateControlsStatus())}).finally(function(){t.toggleATE.classList.remove("disabled"),t.hideSpinner()}))}},{key:"enableATE",value:function(t){var e=this;this.enablingATE||(this.enablingATE=!0,this.updateError(),this.tools.disableElement(this.toggleATE),this.showSpinner(),this.amsAPI.registerClient().then(function(t){return t.enabled}).then(function(n){n&&(e.ateSettings.currentStatus=o.default.enabled),e.updateControlsStatus(),e.hideToggleATEButton(),t&&t()}).catch(function(t){e.updateError(t)}).finally(function(){e.hideSpinner(),e.enablingATE=!1}))}},{key:"synchronizeData",value:function(){var t=this;this.updateError(),this.showSpinner(),this.handleSynchronize().catch(function(e){t.updateError(e)}).finally(function(){t.tools.disableElement(t.synchronizeWithAMS),t.hideSpinner()})}},{key:"updateError",value:function(t){t?(this.errors.querySelector("p").innerHTML=t,this.tools.show(this.errors)):this.tools.hide(this.errors)}},{key:"handleSynchronize",value:function(){return this.amsAPI.synchronize()}},{key:"showSpinner",value:function(){this.spinner&&this.spinner.classList.add("is-active")}},{key:"hideSpinner",value:function(){this.spinner&&this.spinner.classList.remove("is-active")}},{key:"showSynchronizeWithAMSButton",value:function(){this.synchronizeWithAMS&&this.tools.show(this.synchronizeWithAMS,!0)}},{key:"hideSynchronizeWithAMSButton",value:function(){this.synchronizeWithAMS&&this.tools.hide(this.synchronizeWithAMS,!0)}},{key:"hideToggleATEButton",value:function(){this.toggleATE&&this.tools.hide(this.toggleATE,!0)}},{key:"showToggleATEButton",value:function(){this.toggleATE&&this.tools.show(this.toggleATE,!0)}}]),e}();e.default=u},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r,o=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),i=n(0),s=(r=i)&&r.__esModule?r:{default:r};var a=function(t){function e(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,s.default),o(e,[{key:"get",value:function(t){return this.request(t,"GET")}},{key:"post",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return this.request(t,"POST",e)}},{key:"request",value:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,r={method:e.toUpperCase(),headers:{Accept:"application/json","Content-Type":"application/json","X-WP-Nonce":this.restNonce},credentials:"same-origin"};return"GET"!==r.method&&n&&(r.body="string"==typeof n?n:JSON.stringify(n)),this.handleRequest(this.restUrl+t,r)}},{key:"handleRequest",value:function(t,e){return fetch(t,e).then(function(t){if(!t.ok)throw new Error(t.statusText);return t.json()})}}]),e}();e.default=a},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.default={registerClient:"/wpml/tm/v1/ams/register_manager",checkStatus:"/wpml/tm/v1/ams/status",synchronizeTranslators:"/wpml/tm/v1/ams/synchronize/translators",synchronizeManagers:"/wpml/tm/v1/ams/synchronize/managers"}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r,o=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),i=n(6),s=(r=i)&&r.__esModule?r:{default:r};var a=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.request=e}return o(t,[{key:"registerClient",value:function(){return this.request.post(s.default.registerClient)}},{key:"checkStatus",value:function(){return this.request.get(s.default.checkStatus)}},{key:"synchronize",value:function(){var t=this;return this.request.get(s.default.synchronizeTranslators).then(function(){return t.request.get(s.default.synchronizeManagers)})}}]),t}();e.default=a},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.default=function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.ID=e.ID,this.caps=e.caps,this.roles=e.roles,this.user_email=e.data,this.user_login=e.data.user_email,this.user_nicename=e.data.user_login}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r,o=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),i=n(0),s=(r=i)&&r.__esModule?r:{default:r};var a=function(t){function e(t){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);var n=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(e.__proto__||Object.getPrototypeOf(e)).call(this));return n.ateControls=t,n.translationMethodForm=document.getElementById("icl_doc_translation_method"),n}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,s.default),o(e,[{key:"init",value:function(){this.updateSelectedOption(),this.initEventHandlers(),this.ateControls.init(),this.currentOptionIsATE()?(this.ateControls.visibility(!0),this.ateControls.updateControlsStatus()):this.ateControls.visibility(!1)}},{key:"updateSelectedOption",value:function(){var t=this;this.translationMethodForm&&(this.translationMethodOptions=this.translationMethodForm.querySelectorAll('input[type="radio"]'),Array.from(this.translationMethodOptions).map(function(e){e.checked&&(t.selectedOptionValue=e.value)}))}},{key:"currentOptionIsATE",value:function(){return"ATE"===this.selectedOptionValue}},{key:"initEventHandlers",value:function(){var t=this;if(this.translationMethodOptions)for(var e=0;e<this.translationMethodOptions.length;e++)this.translationMethodOptions[e].onchange=function(){t.updateSelectedOption(),t.ateControls.visibility(t.currentOptionIsATE()),t.ateControls.updateControlsStatus()}}}]),e}();e.default=a},function(t,e,n){"use strict";var r=u(n(9)),o=u(n(7)),i=u(n(5)),s=u(n(4)),a=u(n(1));function u(t){return t&&t.__esModule?t:{default:t}}document.addEventListener("DOMContentLoaded",function(){var t=new i.default;new a.default;var e=new o.default(t),n=new s.default(e);n.isStatusOnly()?n.initEventHandlers():new r.default(n).init()})},function(t,e){!function(t){"use strict";if(!t.fetch){var e={searchParams:"URLSearchParams"in t,iterable:"Symbol"in t&&"iterator"in Symbol,blob:"FileReader"in t&&"Blob"in t&&function(){try{return new Blob,!0}catch(t){return!1}}(),formData:"FormData"in t,arrayBuffer:"ArrayBuffer"in t};if(e.arrayBuffer)var n=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],r=function(t){return t&&DataView.prototype.isPrototypeOf(t)},o=ArrayBuffer.isView||function(t){return t&&n.indexOf(Object.prototype.toString.call(t))>-1};c.prototype.append=function(t,e){t=a(t),e=u(e);var n=this.map[t];this.map[t]=n?n+","+e:e},c.prototype.delete=function(t){delete this.map[a(t)]},c.prototype.get=function(t){return t=a(t),this.has(t)?this.map[t]:null},c.prototype.has=function(t){return this.map.hasOwnProperty(a(t))},c.prototype.set=function(t,e){this.map[a(t)]=u(e)},c.prototype.forEach=function(t,e){for(var n in this.map)this.map.hasOwnProperty(n)&&t.call(e,this.map[n],n,this)},c.prototype.keys=function(){var t=[];return this.forEach(function(e,n){t.push(n)}),l(t)},c.prototype.values=function(){var t=[];return this.forEach(function(e){t.push(e)}),l(t)},c.prototype.entries=function(){var t=[];return this.forEach(function(e,n){t.push([n,e])}),l(t)},e.iterable&&(c.prototype[Symbol.iterator]=c.prototype.entries);var i=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];b.prototype.clone=function(){return new b(this,{body:this._bodyInit})},p.call(b.prototype),p.call(m.prototype),m.prototype.clone=function(){return new m(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new c(this.headers),url:this.url})},m.error=function(){var t=new m(null,{status:0,statusText:""});return t.type="error",t};var s=[301,302,303,307,308];m.redirect=function(t,e){if(-1===s.indexOf(e))throw new RangeError("Invalid status code");return new m(null,{status:e,headers:{location:t}})},t.Headers=c,t.Request=b,t.Response=m,t.fetch=function(t,n){return new Promise(function(r,o){var i=new b(t,n),s=new XMLHttpRequest;s.onload=function(){var t,e,n={status:s.status,statusText:s.statusText,headers:(t=s.getAllResponseHeaders()||"",e=new c,t.split(/\r?\n/).forEach(function(t){var n=t.split(":"),r=n.shift().trim();if(r){var o=n.join(":").trim();e.append(r,o)}}),e)};n.url="responseURL"in s?s.responseURL:n.headers.get("X-Request-URL");var o="response"in s?s.response:s.responseText;r(new m(o,n))},s.onerror=function(){o(new TypeError("Network request failed"))},s.ontimeout=function(){o(new TypeError("Network request failed"))},s.open(i.method,i.url,!0),"include"===i.credentials&&(s.withCredentials=!0),"responseType"in s&&e.blob&&(s.responseType="blob"),i.headers.forEach(function(t,e){s.setRequestHeader(e,t)}),s.send(void 0===i._bodyInit?null:i._bodyInit)})},t.fetch.polyfill=!0}function a(t){if("string"!=typeof t&&(t=String(t)),/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(t))throw new TypeError("Invalid character in header field name");return t.toLowerCase()}function u(t){return"string"!=typeof t&&(t=String(t)),t}function l(t){var n={next:function(){var e=t.shift();return{done:void 0===e,value:e}}};return e.iterable&&(n[Symbol.iterator]=function(){return n}),n}function c(t){this.map={},t instanceof c?t.forEach(function(t,e){this.append(e,t)},this):Array.isArray(t)?t.forEach(function(t){this.append(t[0],t[1])},this):t&&Object.getOwnPropertyNames(t).forEach(function(e){this.append(e,t[e])},this)}function h(t){if(t.bodyUsed)return Promise.reject(new TypeError("Already read"));t.bodyUsed=!0}function f(t){return new Promise(function(e,n){t.onload=function(){e(t.result)},t.onerror=function(){n(t.error)}})}function d(t){var e=new FileReader,n=f(e);return e.readAsArrayBuffer(t),n}function y(t){if(t.slice)return t.slice(0);var e=new Uint8Array(t.byteLength);return e.set(new Uint8Array(t)),e.buffer}function p(){return this.bodyUsed=!1,this._initBody=function(t){if(this._bodyInit=t,t)if("string"==typeof t)this._bodyText=t;else if(e.blob&&Blob.prototype.isPrototypeOf(t))this._bodyBlob=t;else if(e.formData&&FormData.prototype.isPrototypeOf(t))this._bodyFormData=t;else if(e.searchParams&&URLSearchParams.prototype.isPrototypeOf(t))this._bodyText=t.toString();else if(e.arrayBuffer&&e.blob&&r(t))this._bodyArrayBuffer=y(t.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer]);else{if(!e.arrayBuffer||!ArrayBuffer.prototype.isPrototypeOf(t)&&!o(t))throw new Error("unsupported BodyInit type");this._bodyArrayBuffer=y(t)}else this._bodyText="";this.headers.get("content-type")||("string"==typeof t?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):e.searchParams&&URLSearchParams.prototype.isPrototypeOf(t)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},e.blob&&(this.blob=function(){var t=h(this);if(t)return t;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return Promise.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){return this._bodyArrayBuffer?h(this)||Promise.resolve(this._bodyArrayBuffer):this.blob().then(d)}),this.text=function(){var t,e,n,r=h(this);if(r)return r;if(this._bodyBlob)return t=this._bodyBlob,e=new FileReader,n=f(e),e.readAsText(t),n;if(this._bodyArrayBuffer)return Promise.resolve(function(t){for(var e=new Uint8Array(t),n=new Array(e.length),r=0;r<e.length;r++)n[r]=String.fromCharCode(e[r]);return n.join("")}(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return Promise.resolve(this._bodyText)},e.formData&&(this.formData=function(){return this.text().then(v)}),this.json=function(){return this.text().then(JSON.parse)},this}function b(t,e){var n,r,o=(e=e||{}).body;if(t instanceof b){if(t.bodyUsed)throw new TypeError("Already read");this.url=t.url,this.credentials=t.credentials,e.headers||(this.headers=new c(t.headers)),this.method=t.method,this.mode=t.mode,o||null==t._bodyInit||(o=t._bodyInit,t.bodyUsed=!0)}else this.url=String(t);if(this.credentials=e.credentials||this.credentials||"omit",!e.headers&&this.headers||(this.headers=new c(e.headers)),this.method=(n=e.method||this.method||"GET",r=n.toUpperCase(),i.indexOf(r)>-1?r:n),this.mode=e.mode||this.mode||null,this.referrer=null,("GET"===this.method||"HEAD"===this.method)&&o)throw new TypeError("Body not allowed for GET or HEAD requests");this._initBody(o)}function v(t){var e=new FormData;return t.trim().split("&").forEach(function(t){if(t){var n=t.split("="),r=n.shift().replace(/\+/g," "),o=n.join("=").replace(/\+/g," ");e.append(decodeURIComponent(r),decodeURIComponent(o))}}),e}function m(t,e){e||(e={}),this.type="default",this.status="status"in e?e.status:200,this.ok=this.status>=200&&this.status<300,this.statusText="statusText"in e?e.statusText:"OK",this.headers=new c(e.headers),this.url=e.url||"",this._initBody(t)}}("undefined"!=typeof self?self:this)},function(t,e,n){n(11),t.exports=n(10)}]);