import{E as ce,C as fe,S as de,i as pe,s as X,e as C,b as R,t as F,d as he,f as H,h as A,R as K,T as ve,H as L,V as me,g as ye,v as I,a3 as Q,G as te,a4 as ge,a5 as be,m as q,a6 as J,K as D,L as ie,M as ne,N as re,O as W,P as V,Q as x,k as ae,l as se,a7 as z,I as B,_ as _e}from"./paths-b28eb7b3.js";const Qe=ce(`${fe}/`);var E=function(a,t){return E=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,i){e.__proto__=i}||function(e,i){for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])},E(a,t)};function Ae(a,t){if(typeof t!="function"&&t!==null)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");E(a,t);function e(){this.constructor=a}a.prototype=t===null?Object.create(t):(e.prototype=t.prototype,new e)}var M=function(){return M=Object.assign||function(t){for(var e,i=1,n=arguments.length;i<n;i++){e=arguments[i];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])}return t},M.apply(this,arguments)};function Je(a,t,e,i){function n(r){return r instanceof e?r:new e(function(s){s(r)})}return new(e||(e=Promise))(function(r,s){function o(l){try{u(i.next(l))}catch(c){s(c)}}function f(l){try{u(i.throw(l))}catch(c){s(c)}}function u(l){l.done?r(l.value):n(l.value).then(o,f)}u((i=i.apply(a,t||[])).next())})}function Te(a,t){var e={label:0,sent:function(){if(r[0]&1)throw r[1];return r[1]},trys:[],ops:[]},i,n,r,s;return s={next:o(0),throw:o(1),return:o(2)},typeof Symbol=="function"&&(s[Symbol.iterator]=function(){return this}),s;function o(u){return function(l){return f([u,l])}}function f(u){if(i)throw new TypeError("Generator is already executing.");for(;s&&(s=0,u[0]&&(e=0)),e;)try{if(i=1,n&&(r=u[0]&2?n.return:u[0]?n.throw||((r=n.return)&&r.call(n),0):n.next)&&!(r=r.call(n,u[1])).done)return r;switch(n=0,r&&(u=[u[0]&2,r.value]),u[0]){case 0:case 1:r=u;break;case 4:return e.label++,{value:u[1],done:!1};case 5:e.label++,n=u[1],u=[0];continue;case 7:u=e.ops.pop(),e.trys.pop();continue;default:if(r=e.trys,!(r=r.length>0&&r[r.length-1])&&(u[0]===6||u[0]===2)){e=0;continue}if(u[0]===3&&(!r||u[1]>r[0]&&u[1]<r[3])){e.label=u[1];break}if(u[0]===6&&e.label<r[1]){e.label=r[1],r=u;break}if(r&&e.label<r[2]){e.label=r[2],e.ops.push(u);break}r[2]&&e.ops.pop(),e.trys.pop();continue}u=t.call(a,e)}catch(l){u=[6,l],n=0}finally{i=r=0}if(u[0]&5)throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}}function U(a){var t=typeof Symbol=="function"&&Symbol.iterator,e=t&&a[t],i=0;if(e)return e.call(a);if(a&&typeof a.length=="number")return{next:function(){return a&&i>=a.length&&(a=void 0),{value:a&&a[i++],done:!a}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function $e(a,t){var e=typeof Symbol=="function"&&a[Symbol.iterator];if(!e)return a;var i=e.call(a),n,r=[],s;try{for(;(t===void 0||t-- >0)&&!(n=i.next()).done;)r.push(n.value)}catch(o){s={error:o}}finally{try{n&&!n.done&&(e=i.return)&&e.call(i)}finally{if(s)throw s.error}}return r}function Ne(a,t,e){if(e||arguments.length===2)for(var i=0,n=t.length,r;i<n;i++)(r||!(i in t))&&(r||(r=Array.prototype.slice.call(t,0,i)),r[i]=t[i]);return a.concat(r||Array.prototype.slice.call(t))}/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var we=function(){function a(t){t===void 0&&(t={}),this.adapter=t}return Object.defineProperty(a,"cssClasses",{get:function(){return{}},enumerable:!1,configurable:!0}),Object.defineProperty(a,"strings",{get:function(){return{}},enumerable:!1,configurable:!0}),Object.defineProperty(a,"numbers",{get:function(){return{}},enumerable:!1,configurable:!0}),Object.defineProperty(a,"defaultAdapter",{get:function(){return{}},enumerable:!1,configurable:!0}),a.prototype.init=function(){},a.prototype.destroy=function(){},a}();/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */function Se(a){return a===void 0&&(a=window),Ce(a)?{passive:!0}:!1}function Ce(a){a===void 0&&(a=window);var t=!1;try{var e={get passive(){return t=!0,!1}},i=function(){};a.document.addEventListener("test",i,e),a.document.removeEventListener("test",i,e)}catch{t=!1}return t}const De=Object.freeze(Object.defineProperty({__proto__:null,applyPassive:Se},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */function Re(a,t){if(a.closest)return a.closest(t);for(var e=a;e;){if(oe(e,t))return e;e=e.parentElement}return null}function oe(a,t){var e=a.matches||a.webkitMatchesSelector||a.msMatchesSelector;return e.call(a,t)}function Me(a){var t=a;if(t.offsetParent!==null)return t.scrollWidth;var e=t.cloneNode(!0);e.style.setProperty("position","absolute"),e.style.setProperty("transform","translate(-9999px, -9999px)"),document.documentElement.appendChild(e);var i=e.scrollWidth;return document.documentElement.removeChild(e),i}const Fe=Object.freeze(Object.defineProperty({__proto__:null,closest:Re,estimateScrollWidth:Me,matches:oe},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var He={BG_FOCUSED:"mdc-ripple-upgraded--background-focused",FG_ACTIVATION:"mdc-ripple-upgraded--foreground-activation",FG_DEACTIVATION:"mdc-ripple-upgraded--foreground-deactivation",ROOT:"mdc-ripple-upgraded",UNBOUNDED:"mdc-ripple-upgraded--unbounded"},Le={VAR_FG_SCALE:"--mdc-ripple-fg-scale",VAR_FG_SIZE:"--mdc-ripple-fg-size",VAR_FG_TRANSLATE_END:"--mdc-ripple-fg-translate-end",VAR_FG_TRANSLATE_START:"--mdc-ripple-fg-translate-start",VAR_LEFT:"--mdc-ripple-left",VAR_TOP:"--mdc-ripple-top"},T={DEACTIVATION_TIMEOUT_MS:225,FG_DEACTIVATION_MS:150,INITIAL_ORIGIN_SCALE:.6,PADDING:10,TAP_DELAY_MS:300},k;function Ue(a,t){t===void 0&&(t=!1);var e=a.CSS,i=k;if(typeof k=="boolean"&&!t)return k;var n=e&&typeof e.supports=="function";if(!n)return!1;var r=e.supports("--css-vars","yes"),s=e.supports("(--css-vars: yes)")&&e.supports("color","#00000000");return i=r||s,t||(k=i),i}function ke(a,t,e){if(!a)return{x:0,y:0};var i=t.x,n=t.y,r=i+e.left,s=n+e.top,o,f;if(a.type==="touchstart"){var u=a;o=u.changedTouches[0].pageX-r,f=u.changedTouches[0].pageY-s}else{var l=a;o=l.pageX-r,f=l.pageY-s}return{x:o,y:f}}/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var $=["touchstart","pointerdown","mousedown","keydown"],N=["touchend","pointerup","mouseup","contextmenu"],G=[],Ge=function(a){Ae(t,a);function t(e){var i=a.call(this,M(M({},t.defaultAdapter),e))||this;return i.activationAnimationHasEnded=!1,i.activationTimer=0,i.fgDeactivationRemovalTimer=0,i.fgScale="0",i.frame={width:0,height:0},i.initialSize=0,i.layoutFrame=0,i.maxRadius=0,i.unboundedCoords={left:0,top:0},i.activationState=i.defaultActivationState(),i.activationTimerCallback=function(){i.activationAnimationHasEnded=!0,i.runDeactivationUXLogicIfReady()},i.activateHandler=function(n){i.activateImpl(n)},i.deactivateHandler=function(){i.deactivateImpl()},i.focusHandler=function(){i.handleFocus()},i.blurHandler=function(){i.handleBlur()},i.resizeHandler=function(){i.layout()},i}return Object.defineProperty(t,"cssClasses",{get:function(){return He},enumerable:!1,configurable:!0}),Object.defineProperty(t,"strings",{get:function(){return Le},enumerable:!1,configurable:!0}),Object.defineProperty(t,"numbers",{get:function(){return T},enumerable:!1,configurable:!0}),Object.defineProperty(t,"defaultAdapter",{get:function(){return{addClass:function(){},browserSupportsCssVars:function(){return!0},computeBoundingRect:function(){return{top:0,right:0,bottom:0,left:0,width:0,height:0}},containsEventTarget:function(){return!0},deregisterDocumentInteractionHandler:function(){},deregisterInteractionHandler:function(){},deregisterResizeHandler:function(){},getWindowPageOffset:function(){return{x:0,y:0}},isSurfaceActive:function(){return!0},isSurfaceDisabled:function(){return!0},isUnbounded:function(){return!0},registerDocumentInteractionHandler:function(){},registerInteractionHandler:function(){},registerResizeHandler:function(){},removeClass:function(){},updateCssVariable:function(){}}},enumerable:!1,configurable:!0}),t.prototype.init=function(){var e=this,i=this.supportsPressRipple();if(this.registerRootHandlers(i),i){var n=t.cssClasses,r=n.ROOT,s=n.UNBOUNDED;requestAnimationFrame(function(){e.adapter.addClass(r),e.adapter.isUnbounded()&&(e.adapter.addClass(s),e.layoutInternal())})}},t.prototype.destroy=function(){var e=this;if(this.supportsPressRipple()){this.activationTimer&&(clearTimeout(this.activationTimer),this.activationTimer=0,this.adapter.removeClass(t.cssClasses.FG_ACTIVATION)),this.fgDeactivationRemovalTimer&&(clearTimeout(this.fgDeactivationRemovalTimer),this.fgDeactivationRemovalTimer=0,this.adapter.removeClass(t.cssClasses.FG_DEACTIVATION));var i=t.cssClasses,n=i.ROOT,r=i.UNBOUNDED;requestAnimationFrame(function(){e.adapter.removeClass(n),e.adapter.removeClass(r),e.removeCssVars()})}this.deregisterRootHandlers(),this.deregisterDeactivationHandlers()},t.prototype.activate=function(e){this.activateImpl(e)},t.prototype.deactivate=function(){this.deactivateImpl()},t.prototype.layout=function(){var e=this;this.layoutFrame&&cancelAnimationFrame(this.layoutFrame),this.layoutFrame=requestAnimationFrame(function(){e.layoutInternal(),e.layoutFrame=0})},t.prototype.setUnbounded=function(e){var i=t.cssClasses.UNBOUNDED;e?this.adapter.addClass(i):this.adapter.removeClass(i)},t.prototype.handleFocus=function(){var e=this;requestAnimationFrame(function(){return e.adapter.addClass(t.cssClasses.BG_FOCUSED)})},t.prototype.handleBlur=function(){var e=this;requestAnimationFrame(function(){return e.adapter.removeClass(t.cssClasses.BG_FOCUSED)})},t.prototype.supportsPressRipple=function(){return this.adapter.browserSupportsCssVars()},t.prototype.defaultActivationState=function(){return{activationEvent:void 0,hasDeactivationUXRun:!1,isActivated:!1,isProgrammatic:!1,wasActivatedByPointer:!1,wasElementMadeActive:!1}},t.prototype.registerRootHandlers=function(e){var i,n;if(e){try{for(var r=U($),s=r.next();!s.done;s=r.next()){var o=s.value;this.adapter.registerInteractionHandler(o,this.activateHandler)}}catch(f){i={error:f}}finally{try{s&&!s.done&&(n=r.return)&&n.call(r)}finally{if(i)throw i.error}}this.adapter.isUnbounded()&&this.adapter.registerResizeHandler(this.resizeHandler)}this.adapter.registerInteractionHandler("focus",this.focusHandler),this.adapter.registerInteractionHandler("blur",this.blurHandler)},t.prototype.registerDeactivationHandlers=function(e){var i,n;if(e.type==="keydown")this.adapter.registerInteractionHandler("keyup",this.deactivateHandler);else try{for(var r=U(N),s=r.next();!s.done;s=r.next()){var o=s.value;this.adapter.registerDocumentInteractionHandler(o,this.deactivateHandler)}}catch(f){i={error:f}}finally{try{s&&!s.done&&(n=r.return)&&n.call(r)}finally{if(i)throw i.error}}},t.prototype.deregisterRootHandlers=function(){var e,i;try{for(var n=U($),r=n.next();!r.done;r=n.next()){var s=r.value;this.adapter.deregisterInteractionHandler(s,this.activateHandler)}}catch(o){e={error:o}}finally{try{r&&!r.done&&(i=n.return)&&i.call(n)}finally{if(e)throw e.error}}this.adapter.deregisterInteractionHandler("focus",this.focusHandler),this.adapter.deregisterInteractionHandler("blur",this.blurHandler),this.adapter.isUnbounded()&&this.adapter.deregisterResizeHandler(this.resizeHandler)},t.prototype.deregisterDeactivationHandlers=function(){var e,i;this.adapter.deregisterInteractionHandler("keyup",this.deactivateHandler);try{for(var n=U(N),r=n.next();!r.done;r=n.next()){var s=r.value;this.adapter.deregisterDocumentInteractionHandler(s,this.deactivateHandler)}}catch(o){e={error:o}}finally{try{r&&!r.done&&(i=n.return)&&i.call(n)}finally{if(e)throw e.error}}},t.prototype.removeCssVars=function(){var e=this,i=t.strings,n=Object.keys(i);n.forEach(function(r){r.indexOf("VAR_")===0&&e.adapter.updateCssVariable(i[r],null)})},t.prototype.activateImpl=function(e){var i=this;if(!this.adapter.isSurfaceDisabled()){var n=this.activationState;if(!n.isActivated){var r=this.previousActivationEvent,s=r&&e!==void 0&&r.type!==e.type;if(!s){n.isActivated=!0,n.isProgrammatic=e===void 0,n.activationEvent=e,n.wasActivatedByPointer=n.isProgrammatic?!1:e!==void 0&&(e.type==="mousedown"||e.type==="touchstart"||e.type==="pointerdown");var o=e!==void 0&&G.length>0&&G.some(function(f){return i.adapter.containsEventTarget(f)});if(o){this.resetActivationState();return}e!==void 0&&(G.push(e.target),this.registerDeactivationHandlers(e)),n.wasElementMadeActive=this.checkElementMadeActive(e),n.wasElementMadeActive&&this.animateActivation(),requestAnimationFrame(function(){G=[],!n.wasElementMadeActive&&e!==void 0&&(e.key===" "||e.keyCode===32)&&(n.wasElementMadeActive=i.checkElementMadeActive(e),n.wasElementMadeActive&&i.animateActivation()),n.wasElementMadeActive||(i.activationState=i.defaultActivationState())})}}}},t.prototype.checkElementMadeActive=function(e){return e!==void 0&&e.type==="keydown"?this.adapter.isSurfaceActive():!0},t.prototype.animateActivation=function(){var e=this,i=t.strings,n=i.VAR_FG_TRANSLATE_START,r=i.VAR_FG_TRANSLATE_END,s=t.cssClasses,o=s.FG_DEACTIVATION,f=s.FG_ACTIVATION,u=t.numbers.DEACTIVATION_TIMEOUT_MS;this.layoutInternal();var l="",c="";if(!this.adapter.isUnbounded()){var b=this.getFgTranslationCoordinates(),_=b.startPoint,d=b.endPoint;l=_.x+"px, "+_.y+"px",c=d.x+"px, "+d.y+"px"}this.adapter.updateCssVariable(n,l),this.adapter.updateCssVariable(r,c),clearTimeout(this.activationTimer),clearTimeout(this.fgDeactivationRemovalTimer),this.rmBoundedActivationClasses(),this.adapter.removeClass(o),this.adapter.computeBoundingRect(),this.adapter.addClass(f),this.activationTimer=setTimeout(function(){e.activationTimerCallback()},u)},t.prototype.getFgTranslationCoordinates=function(){var e=this.activationState,i=e.activationEvent,n=e.wasActivatedByPointer,r;n?r=ke(i,this.adapter.getWindowPageOffset(),this.adapter.computeBoundingRect()):r={x:this.frame.width/2,y:this.frame.height/2},r={x:r.x-this.initialSize/2,y:r.y-this.initialSize/2};var s={x:this.frame.width/2-this.initialSize/2,y:this.frame.height/2-this.initialSize/2};return{startPoint:r,endPoint:s}},t.prototype.runDeactivationUXLogicIfReady=function(){var e=this,i=t.cssClasses.FG_DEACTIVATION,n=this.activationState,r=n.hasDeactivationUXRun,s=n.isActivated,o=r||!s;o&&this.activationAnimationHasEnded&&(this.rmBoundedActivationClasses(),this.adapter.addClass(i),this.fgDeactivationRemovalTimer=setTimeout(function(){e.adapter.removeClass(i)},T.FG_DEACTIVATION_MS))},t.prototype.rmBoundedActivationClasses=function(){var e=t.cssClasses.FG_ACTIVATION;this.adapter.removeClass(e),this.activationAnimationHasEnded=!1,this.adapter.computeBoundingRect()},t.prototype.resetActivationState=function(){var e=this;this.previousActivationEvent=this.activationState.activationEvent,this.activationState=this.defaultActivationState(),setTimeout(function(){return e.previousActivationEvent=void 0},t.numbers.TAP_DELAY_MS)},t.prototype.deactivateImpl=function(){var e=this,i=this.activationState;if(i.isActivated){var n=M({},i);i.isProgrammatic?(requestAnimationFrame(function(){e.animateDeactivation(n)}),this.resetActivationState()):(this.deregisterDeactivationHandlers(),requestAnimationFrame(function(){e.activationState.hasDeactivationUXRun=!0,e.animateDeactivation(n),e.resetActivationState()}))}},t.prototype.animateDeactivation=function(e){var i=e.wasActivatedByPointer,n=e.wasElementMadeActive;(i||n)&&this.runDeactivationUXLogicIfReady()},t.prototype.layoutInternal=function(){var e=this;this.frame=this.adapter.computeBoundingRect();var i=Math.max(this.frame.height,this.frame.width),n=function(){var s=Math.sqrt(Math.pow(e.frame.width,2)+Math.pow(e.frame.height,2));return s+t.numbers.PADDING};this.maxRadius=this.adapter.isUnbounded()?i:n();var r=Math.floor(i*t.numbers.INITIAL_ORIGIN_SCALE);this.adapter.isUnbounded()&&r%2!==0?this.initialSize=r-1:this.initialSize=r,this.fgScale=""+this.maxRadius/this.initialSize,this.updateLayoutCssVars()},t.prototype.updateLayoutCssVars=function(){var e=t.strings,i=e.VAR_FG_SIZE,n=e.VAR_LEFT,r=e.VAR_TOP,s=e.VAR_FG_SCALE;this.adapter.updateCssVariable(i,this.initialSize+"px"),this.adapter.updateCssVariable(s,this.fgScale),this.adapter.isUnbounded()&&(this.unboundedCoords={left:Math.round(this.frame.width/2-this.initialSize/2),top:Math.round(this.frame.height/2-this.initialSize/2)},this.adapter.updateCssVariable(n,this.unboundedCoords.left+"px"),this.adapter.updateCssVariable(r,this.unboundedCoords.top+"px"))},t}(we);function Ye(a){return Object.entries(a).filter(([t,e])=>t!==""&&e).map(([t])=>t).join(" ")}function et(a,t,e,i={bubbles:!0},n=!1){if(typeof Event>"u")throw new Error("Event not defined.");if(!a)throw new Error("Tried to dipatch event without element.");const r=new CustomEvent(t,Object.assign(Object.assign({},i),{detail:e}));if(a==null||a.dispatchEvent(r),n&&t.startsWith("SMUI")){const s=new CustomEvent(t.replace(/^SMUI/g,()=>"MDC"),Object.assign(Object.assign({},i),{detail:e}));a==null||a.dispatchEvent(s),s.defaultPrevented&&r.preventDefault()}return r}const Y=/^[a-z]+(?::(?:preventDefault|stopPropagation|passive|nonpassive|capture|once|self))+$/,Oe=/^[^$]+(?:\$(?:preventDefault|stopPropagation|passive|nonpassive|capture|once|self))+$/;function ze(a){let t,e=[];a.$on=(n,r)=>{let s=n,o=()=>{};return t?o=t(s,r):e.push([s,r]),s.match(Y)&&console&&console.warn('Event modifiers in SMUI now use "$" instead of ":", so that all events can be bound with modifiers. Please update your event binding: ',s),()=>{o()}};function i(n){const r=a.$$.callbacks[n.type];r&&r.slice().forEach(s=>s.call(this,n))}return n=>{const r=[],s={};t=(o,f)=>{let u=o,l=f,c=!1;const b=u.match(Y),_=u.match(Oe),d=b||_;if(u.match(/^SMUI:\w+:/)){const m=u.split(":");let h="";for(let g=0;g<m.length;g++)h+=g===m.length-1?":"+m[g]:m[g].split("-").map(S=>S.slice(0,1).toUpperCase()+S.slice(1)).join("");console.warn(`The event ${u.split("$")[0]} has been renamed to ${h.split("$")[0]}.`),u=h}if(d){const m=u.split(b?":":"$");u=m[0];const h=m.slice(1).reduce((g,S)=>(g[S]=!0,g),{});h.passive&&(c=c||{},c.passive=!0),h.nonpassive&&(c=c||{},c.passive=!1),h.capture&&(c=c||{},c.capture=!0),h.once&&(c=c||{},c.once=!0),h.preventDefault&&(l=Be(l)),h.stopPropagation&&(l=Ie(l)),h.stopImmediatePropagation&&(l=Pe(l)),h.self&&(l=je(n,l)),h.trusted&&(l=Ee(l))}const w=ee(n,u,l,c),p=()=>{w();const m=r.indexOf(p);m>-1&&r.splice(m,1)};return r.push(p),u in s||(s[u]=ee(n,u,i)),p};for(let o=0;o<e.length;o++)t(e[o][0],e[o][1]);return{destroy:()=>{for(let o=0;o<r.length;o++)r[o]();for(let o of Object.entries(s))o[1]()}}}}function ee(a,t,e,i){return a.addEventListener(t,e,i),()=>a.removeEventListener(t,e,i)}function Be(a){return function(t){return t.preventDefault(),a.call(this,t)}}function Ie(a){return function(t){return t.stopPropagation(),a.call(this,t)}}function Pe(a){return function(t){return t.stopImmediatePropagation(),a.call(this,t)}}function je(a,t){return function(e){if(e.target===a)return t.call(this,e)}}function Ee(a){return function(t){if(t.isTrusted)return a.call(this,t)}}function Z(a,t){let e=[];if(t)for(let i=0;i<t.length;i++){const n=t[i],r=Array.isArray(n)?n[0]:n;Array.isArray(n)&&n.length>1?e.push(r(a,n[1])):e.push(r(a))}return{update(i){if((i&&i.length||0)!=e.length)throw new Error("You must not change the length of an actions array.");if(i)for(let n=0;n<i.length;n++){const r=e[n];if(r&&r.update){const s=i[n];Array.isArray(s)&&s.length>1?r.update(s[1]):r.update()}}},destroy(){for(let i=0;i<e.length;i++){const n=e[i];n&&n.destroy&&n.destroy()}}}}function Xe(a){let t=a[1],e,i,n=a[1]&&P(a);return{c(){n&&n.c(),e=C()},l(r){n&&n.l(r),e=C()},m(r,s){n&&n.m(r,s),R(r,e,s),i=!0},p(r,s){r[1]?t?X(t,r[1])?(n.d(1),n=P(r),n.c(),n.m(e.parentNode,e)):n.p(r,s):(n=P(r),n.c(),n.m(e.parentNode,e)):t&&(n.d(1),n=null),t=r[1]},i(r){i||(H(n),i=!0)},o(r){F(n),i=!1},d(r){r&&A(e),n&&n.d(r)}}}function qe(a){let t=a[1],e,i=a[1]&&j(a);return{c(){i&&i.c(),e=C()},l(n){i&&i.l(n),e=C()},m(n,r){i&&i.m(n,r),R(n,e,r)},p(n,r){n[1]?t?X(t,n[1])?(i.d(1),i=j(n),i.c(),i.m(e.parentNode,e)):i.p(n,r):(i=j(n),i.c(),i.m(e.parentNode,e)):t&&(i.d(1),i=null),t=n[1]},i:Q,o:Q,d(n){n&&A(e),i&&i.d(n)}}}function We(a){let t,e,i,n,r;const s=a[8].default,o=te(s,a,a[7],null);let f=[a[5]],u={};for(let l=0;l<f.length;l+=1)u=L(u,f[l]);return{c(){t=ge("svg"),o&&o.c(),this.h()},l(l){t=be(l,"svg",{});var c=q(t);o&&o.l(c),c.forEach(A),this.h()},h(){J(t,u)},m(l,c){R(l,t,c),o&&o.m(t,null),a[9](t),i=!0,n||(r=[D(e=Z.call(null,t,a[0])),D(a[4].call(null,t))],n=!0)},p(l,c){o&&o.p&&(!i||c&128)&&ie(o,s,l,l[7],i?re(s,l[7],c,null):ne(l[7]),null),J(t,u=W(f,[c&32&&l[5]])),e&&V(e.update)&&c&1&&e.update.call(null,l[0])},i(l){i||(H(o,l),i=!0)},o(l){F(o,l),i=!1},d(l){l&&A(t),o&&o.d(l),a[9](null),n=!1,x(r)}}}function P(a){let t,e,i,n,r;const s=a[8].default,o=te(s,a,a[7],null);let f=[a[5]],u={};for(let l=0;l<f.length;l+=1)u=L(u,f[l]);return{c(){t=ae(a[1]),o&&o.c(),this.h()},l(l){t=se(l,(a[1]||"null").toUpperCase(),{});var c=q(t);o&&o.l(c),c.forEach(A),this.h()},h(){/-/.test(a[1])?z(t,u):B(t,u)},m(l,c){R(l,t,c),o&&o.m(t,null),a[11](t),i=!0,n||(r=[D(e=Z.call(null,t,a[0])),D(a[4].call(null,t))],n=!0)},p(l,c){o&&o.p&&(!i||c&128)&&ie(o,s,l,l[7],i?re(s,l[7],c,null):ne(l[7]),null),u=W(f,[c&32&&l[5]]),/-/.test(l[1])?z(t,u):B(t,u),e&&V(e.update)&&c&1&&e.update.call(null,l[0])},i(l){i||(H(o,l),i=!0)},o(l){F(o,l),i=!1},d(l){l&&A(t),o&&o.d(l),a[11](null),n=!1,x(r)}}}function j(a){let t,e,i,n,r=[a[5]],s={};for(let o=0;o<r.length;o+=1)s=L(s,r[o]);return{c(){t=ae(a[1]),this.h()},l(o){t=se(o,(a[1]||"null").toUpperCase(),{}),q(t).forEach(A),this.h()},h(){/-/.test(a[1])?z(t,s):B(t,s)},m(o,f){R(o,t,f),a[10](t),i||(n=[D(e=Z.call(null,t,a[0])),D(a[4].call(null,t))],i=!0)},p(o,f){s=W(r,[f&32&&o[5]]),/-/.test(o[1])?z(t,s):B(t,s),e&&V(e.update)&&f&1&&e.update.call(null,o[0])},d(o){o&&A(t),a[10](null),i=!1,x(n)}}}function Ve(a){let t,e,i,n;const r=[We,qe,Xe],s=[];function o(f,u){return f[1]==="svg"?0:f[3]?1:2}return t=o(a),e=s[t]=r[t](a),{c(){e.c(),i=C()},l(f){e.l(f),i=C()},m(f,u){s[t].m(f,u),R(f,i,u),n=!0},p(f,[u]){let l=t;t=o(f),t===l?s[t].p(f,u):(ye(),F(s[l],1,1,()=>{s[l]=null}),he(),e=s[t],e?e.p(f,u):(e=s[t]=r[t](f),e.c()),H(e,1),e.m(i.parentNode,i))},i(f){n||(H(e),n=!0)},o(f){F(e),n=!1},d(f){s[t].d(f),f&&A(i)}}}function xe(a,t,e){let i;const n=["use","tag","getElement"];let r=K(t,n),{$$slots:s={},$$scope:o}=t,{use:f=[]}=t,{tag:u}=t;const l=ze(ve());let c;function b(){return c}function _(p){I[p?"unshift":"push"](()=>{c=p,e(2,c)})}function d(p){I[p?"unshift":"push"](()=>{c=p,e(2,c)})}function w(p){I[p?"unshift":"push"](()=>{c=p,e(2,c)})}return a.$$set=p=>{t=L(L({},t),me(p)),e(5,r=K(t,n)),"use"in p&&e(0,f=p.use),"tag"in p&&e(1,u=p.tag),"$$scope"in p&&e(7,o=p.$$scope)},a.$$.update=()=>{a.$$.dirty&2&&e(3,i=["area","base","br","col","embed","hr","img","input","link","meta","param","source","track","wbr"].indexOf(u)>-1)},[f,u,c,i,l,r,b,o,s,_,d,w]}class tt extends de{constructor(t){super(),pe(this,t,xe,Ve,X,{use:0,tag:1,getElement:6})}get getElement(){return this.$$.ctx[6]}}const{applyPassive:O}=De,{matches:Ze}=Fe;function it(a,{ripple:t=!0,surface:e=!1,unbounded:i=!1,disabled:n=!1,color:r,active:s,rippleElement:o,eventTarget:f,activeTarget:u,addClass:l=d=>a.classList.add(d),removeClass:c=d=>a.classList.remove(d),addStyle:b=(d,w)=>a.style.setProperty(d,w),initPromise:_=Promise.resolve()}={}){let d,w=_e("SMUI:addLayoutListener"),p,m=s,h=f,g=u;function S(){e?(l("mdc-ripple-surface"),r==="primary"?(l("smui-ripple-surface--primary"),c("smui-ripple-surface--secondary")):r==="secondary"?(c("smui-ripple-surface--primary"),l("smui-ripple-surface--secondary")):(c("smui-ripple-surface--primary"),c("smui-ripple-surface--secondary"))):(c("mdc-ripple-surface"),c("smui-ripple-surface--primary"),c("smui-ripple-surface--secondary")),d&&m!==s&&(m=s,s?d.activate():s===!1&&d.deactivate()),t&&!d?(d=new Ge({addClass:l,browserSupportsCssVars:()=>Ue(window),computeBoundingRect:()=>(o||a).getBoundingClientRect(),containsEventTarget:v=>a.contains(v),deregisterDocumentInteractionHandler:(v,y)=>document.documentElement.removeEventListener(v,y,O()),deregisterInteractionHandler:(v,y)=>(f||a).removeEventListener(v,y,O()),deregisterResizeHandler:v=>window.removeEventListener("resize",v),getWindowPageOffset:()=>({x:window.pageXOffset,y:window.pageYOffset}),isSurfaceActive:()=>s??Ze(u||a,":active"),isSurfaceDisabled:()=>!!n,isUnbounded:()=>!!i,registerDocumentInteractionHandler:(v,y)=>document.documentElement.addEventListener(v,y,O()),registerInteractionHandler:(v,y)=>(f||a).addEventListener(v,y,O()),registerResizeHandler:v=>window.addEventListener("resize",v),removeClass:c,updateCssVariable:b}),_.then(()=>{d&&(d.init(),d.setUnbounded(i))})):d&&!t&&_.then(()=>{d&&(d.destroy(),d=void 0)}),d&&(h!==f||g!==u)&&(h=f,g=u,d.destroy(),requestAnimationFrame(()=>{d&&(d.init(),d.setUnbounded(i))})),!t&&i&&l("mdc-ripple-upgraded--unbounded")}S(),w&&(p=w(le));function le(){d&&d.layout()}return{update(v){({ripple:t,surface:e,unbounded:i,disabled:n,color:r,active:s,rippleElement:o,eventTarget:f,activeTarget:u,addClass:l,removeClass:c,addStyle:b,initPromise:_}=Object.assign({ripple:!0,surface:!1,unbounded:!1,disabled:!1,color:void 0,active:void 0,rippleElement:void 0,eventTarget:void 0,activeTarget:void 0,addClass:y=>a.classList.add(y),removeClass:y=>a.classList.remove(y),addStyle:(y,ue)=>a.style.setProperty(y,ue),initPromise:Promise.resolve()},v)),S()},destroy(){d&&(d.destroy(),d=void 0,c("mdc-ripple-surface"),c("smui-ripple-surface--primary"),c("smui-ripple-surface--secondary")),p&&p()}}}export{we as M,it as R,tt as S,Ae as _,M as a,Qe as b,Ye as c,et as d,$e as e,ze as f,Ne as g,U as h,De as i,Je as j,Te as k,Fe as p,Z as u};
