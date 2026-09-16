(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();function xd(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var ts={exports:{}},ci={},ns={exports:{}},M={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var nr=Symbol.for("react.element"),vd=Symbol.for("react.portal"),yd=Symbol.for("react.fragment"),kd=Symbol.for("react.strict_mode"),wd=Symbol.for("react.profiler"),Fd=Symbol.for("react.provider"),jd=Symbol.for("react.context"),bd=Symbol.for("react.forward_ref"),Cd=Symbol.for("react.suspense"),Nd=Symbol.for("react.memo"),Sd=Symbol.for("react.lazy"),Hl=Symbol.iterator;function Ed(e){return e===null||typeof e!="object"?null:(e=Hl&&e[Hl]||e["@@iterator"],typeof e=="function"?e:null)}var rs={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},is=Object.assign,os={};function hn(e,t,n){this.props=e,this.context=t,this.refs=os,this.updater=n||rs}hn.prototype.isReactComponent={};hn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};hn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function ls(){}ls.prototype=hn.prototype;function Yo(e,t,n){this.props=e,this.context=t,this.refs=os,this.updater=n||rs}var Xo=Yo.prototype=new ls;Xo.constructor=Yo;is(Xo,hn.prototype);Xo.isPureReactComponent=!0;var Vl=Array.isArray,as=Object.prototype.hasOwnProperty,Zo={current:null},ss={key:!0,ref:!0,__self:!0,__source:!0};function cs(e,t,n){var r,i={},o=null,a=null;if(t!=null)for(r in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(o=""+t.key),t)as.call(t,r)&&!ss.hasOwnProperty(r)&&(i[r]=t[r]);var s=arguments.length-2;if(s===1)i.children=n;else if(1<s){for(var c=Array(s),d=0;d<s;d++)c[d]=arguments[d+2];i.children=c}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)i[r]===void 0&&(i[r]=s[r]);return{$$typeof:nr,type:e,key:o,ref:a,props:i,_owner:Zo.current}}function zd(e,t){return{$$typeof:nr,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Jo(e){return typeof e=="object"&&e!==null&&e.$$typeof===nr}function Dd(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var ql=/\/+/g;function Ei(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Dd(""+e.key):t.toString(36)}function Nr(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(o){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case nr:case vd:a=!0}}if(a)return a=e,i=i(a),e=r===""?"."+Ei(a,0):r,Vl(i)?(n="",e!=null&&(n=e.replace(ql,"$&/")+"/"),Nr(i,t,n,"",function(d){return d})):i!=null&&(Jo(i)&&(i=zd(i,n+(!i.key||a&&a.key===i.key?"":(""+i.key).replace(ql,"$&/")+"/")+e)),t.push(i)),1;if(a=0,r=r===""?".":r+":",Vl(e))for(var s=0;s<e.length;s++){o=e[s];var c=r+Ei(o,s);a+=Nr(o,t,n,c,i)}else if(c=Ed(e),typeof c=="function")for(e=c.call(e),s=0;!(o=e.next()).done;)o=o.value,c=r+Ei(o,s++),a+=Nr(o,t,n,c,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function cr(e,t,n){if(e==null)return e;var r=[],i=0;return Nr(e,r,"","",function(o){return t.call(n,o,i++)}),r}function Ld(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var ue={current:null},Sr={transition:null},_d={ReactCurrentDispatcher:ue,ReactCurrentBatchConfig:Sr,ReactCurrentOwner:Zo};function us(){throw Error("act(...) is not supported in production builds of React.")}M.Children={map:cr,forEach:function(e,t,n){cr(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return cr(e,function(){t++}),t},toArray:function(e){return cr(e,function(t){return t})||[]},only:function(e){if(!Jo(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};M.Component=hn;M.Fragment=yd;M.Profiler=wd;M.PureComponent=Yo;M.StrictMode=kd;M.Suspense=Cd;M.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=_d;M.act=us;M.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=is({},e.props),i=e.key,o=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,a=Zo.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(c in t)as.call(t,c)&&!ss.hasOwnProperty(c)&&(r[c]=t[c]===void 0&&s!==void 0?s[c]:t[c])}var c=arguments.length-2;if(c===1)r.children=n;else if(1<c){s=Array(c);for(var d=0;d<c;d++)s[d]=arguments[d+2];r.children=s}return{$$typeof:nr,type:e.type,key:i,ref:o,props:r,_owner:a}};M.createContext=function(e){return e={$$typeof:jd,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Fd,_context:e},e.Consumer=e};M.createElement=cs;M.createFactory=function(e){var t=cs.bind(null,e);return t.type=e,t};M.createRef=function(){return{current:null}};M.forwardRef=function(e){return{$$typeof:bd,render:e}};M.isValidElement=Jo;M.lazy=function(e){return{$$typeof:Sd,_payload:{_status:-1,_result:e},_init:Ld}};M.memo=function(e,t){return{$$typeof:Nd,type:e,compare:t===void 0?null:t}};M.startTransition=function(e){var t=Sr.transition;Sr.transition={};try{e()}finally{Sr.transition=t}};M.unstable_act=us;M.useCallback=function(e,t){return ue.current.useCallback(e,t)};M.useContext=function(e){return ue.current.useContext(e)};M.useDebugValue=function(){};M.useDeferredValue=function(e){return ue.current.useDeferredValue(e)};M.useEffect=function(e,t){return ue.current.useEffect(e,t)};M.useId=function(){return ue.current.useId()};M.useImperativeHandle=function(e,t,n){return ue.current.useImperativeHandle(e,t,n)};M.useInsertionEffect=function(e,t){return ue.current.useInsertionEffect(e,t)};M.useLayoutEffect=function(e,t){return ue.current.useLayoutEffect(e,t)};M.useMemo=function(e,t){return ue.current.useMemo(e,t)};M.useReducer=function(e,t,n){return ue.current.useReducer(e,t,n)};M.useRef=function(e){return ue.current.useRef(e)};M.useState=function(e){return ue.current.useState(e)};M.useSyncExternalStore=function(e,t,n){return ue.current.useSyncExternalStore(e,t,n)};M.useTransition=function(){return ue.current.useTransition()};M.version="18.3.1";ns.exports=M;var D=ns.exports;const Zt=xd(D);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Td=D,Md=Symbol.for("react.element"),Pd=Symbol.for("react.fragment"),Ad=Object.prototype.hasOwnProperty,Rd=Td.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Bd={key:!0,ref:!0,__self:!0,__source:!0};function ds(e,t,n){var r,i={},o=null,a=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(a=t.ref);for(r in t)Ad.call(t,r)&&!Bd.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:Md,type:e,key:o,ref:a,props:i,_owner:Rd.current}}ci.Fragment=Pd;ci.jsx=ds;ci.jsxs=ds;ts.exports=ci;var l=ts.exports,to={},ps={exports:{}},we={},hs={exports:{}},fs={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(E,L){var T=E.length;E.push(L);e:for(;0<T;){var q=T-1>>>1,X=E[q];if(0<i(X,L))E[q]=L,E[T]=X,T=q;else break e}}function n(E){return E.length===0?null:E[0]}function r(E){if(E.length===0)return null;var L=E[0],T=E.pop();if(T!==L){E[0]=T;e:for(var q=0,X=E.length,ar=X>>>1;q<ar;){var kt=2*(q+1)-1,Si=E[kt],wt=kt+1,sr=E[wt];if(0>i(Si,T))wt<X&&0>i(sr,Si)?(E[q]=sr,E[wt]=T,q=wt):(E[q]=Si,E[kt]=T,q=kt);else if(wt<X&&0>i(sr,T))E[q]=sr,E[wt]=T,q=wt;else break e}}return L}function i(E,L){var T=E.sortIndex-L.sortIndex;return T!==0?T:E.id-L.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var a=Date,s=a.now();e.unstable_now=function(){return a.now()-s}}var c=[],d=[],g=1,f=null,m=3,k=!1,y=!1,v=!1,F=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,u=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function h(E){for(var L=n(d);L!==null;){if(L.callback===null)r(d);else if(L.startTime<=E)r(d),L.sortIndex=L.expirationTime,t(c,L);else break;L=n(d)}}function x(E){if(v=!1,h(E),!y)if(n(c)!==null)y=!0,Bt(j);else{var L=n(d);L!==null&&gn(x,L.startTime-E)}}function j(E,L){y=!1,v&&(v=!1,p(S),S=-1),k=!0;var T=m;try{for(h(L),f=n(c);f!==null&&(!(f.expirationTime>L)||E&&!re());){var q=f.callback;if(typeof q=="function"){f.callback=null,m=f.priorityLevel;var X=q(f.expirationTime<=L);L=e.unstable_now(),typeof X=="function"?f.callback=X:f===n(c)&&r(c),h(L)}else r(c);f=n(c)}if(f!==null)var ar=!0;else{var kt=n(d);kt!==null&&gn(x,kt.startTime-L),ar=!1}return ar}finally{f=null,m=T,k=!1}}var C=!1,b=null,S=-1,P=5,_=-1;function re(){return!(e.unstable_now()-_<P)}function Ae(){if(b!==null){var E=e.unstable_now();_=E;var L=!0;try{L=b(!0,E)}finally{L?$e():(C=!1,b=null)}}else C=!1}var $e;if(typeof u=="function")$e=function(){u(Ae)};else if(typeof MessageChannel<"u"){var Rt=new MessageChannel,Je=Rt.port2;Rt.port1.onmessage=Ae,$e=function(){Je.postMessage(null)}}else $e=function(){F(Ae,0)};function Bt(E){b=E,C||(C=!0,$e())}function gn(E,L){S=F(function(){E(e.unstable_now())},L)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(E){E.callback=null},e.unstable_continueExecution=function(){y||k||(y=!0,Bt(j))},e.unstable_forceFrameRate=function(E){0>E||125<E?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):P=0<E?Math.floor(1e3/E):5},e.unstable_getCurrentPriorityLevel=function(){return m},e.unstable_getFirstCallbackNode=function(){return n(c)},e.unstable_next=function(E){switch(m){case 1:case 2:case 3:var L=3;break;default:L=m}var T=m;m=L;try{return E()}finally{m=T}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(E,L){switch(E){case 1:case 2:case 3:case 4:case 5:break;default:E=3}var T=m;m=E;try{return L()}finally{m=T}},e.unstable_scheduleCallback=function(E,L,T){var q=e.unstable_now();switch(typeof T=="object"&&T!==null?(T=T.delay,T=typeof T=="number"&&0<T?q+T:q):T=q,E){case 1:var X=-1;break;case 2:X=250;break;case 5:X=1073741823;break;case 4:X=1e4;break;default:X=5e3}return X=T+X,E={id:g++,callback:L,priorityLevel:E,startTime:T,expirationTime:X,sortIndex:-1},T>q?(E.sortIndex=T,t(d,E),n(c)===null&&E===n(d)&&(v?(p(S),S=-1):v=!0,gn(x,T-q))):(E.sortIndex=X,t(c,E),y||k||(y=!0,Bt(j))),E},e.unstable_shouldYield=re,e.unstable_wrapCallback=function(E){var L=m;return function(){var T=m;m=L;try{return E.apply(this,arguments)}finally{m=T}}}})(fs);hs.exports=fs;var Id=hs.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Od=D,ke=Id;function w(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var ms=new Set,Bn={};function Pt(e,t){ln(e,t),ln(e+"Capture",t)}function ln(e,t){for(Bn[e]=t,e=0;e<t.length;e++)ms.add(t[e])}var Ke=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),no=Object.prototype.hasOwnProperty,Ud=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Gl={},Kl={};function $d(e){return no.call(Kl,e)?!0:no.call(Gl,e)?!1:Ud.test(e)?Kl[e]=!0:(Gl[e]=!0,!1)}function Wd(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Hd(e,t,n,r){if(t===null||typeof t>"u"||Wd(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function de(e,t,n,r,i,o,a){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=a}var ne={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ne[e]=new de(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ne[t]=new de(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ne[e]=new de(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ne[e]=new de(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ne[e]=new de(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ne[e]=new de(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ne[e]=new de(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ne[e]=new de(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ne[e]=new de(e,5,!1,e.toLowerCase(),null,!1,!1)});var el=/[\-:]([a-z])/g;function tl(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(el,tl);ne[t]=new de(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(el,tl);ne[t]=new de(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(el,tl);ne[t]=new de(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ne[e]=new de(e,1,!1,e.toLowerCase(),null,!1,!1)});ne.xlinkHref=new de("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ne[e]=new de(e,1,!1,e.toLowerCase(),null,!0,!0)});function nl(e,t,n,r){var i=ne.hasOwnProperty(t)?ne[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Hd(t,n,i,r)&&(n=null),r||i===null?$d(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Ze=Od.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ur=Symbol.for("react.element"),Ot=Symbol.for("react.portal"),Ut=Symbol.for("react.fragment"),rl=Symbol.for("react.strict_mode"),ro=Symbol.for("react.profiler"),gs=Symbol.for("react.provider"),xs=Symbol.for("react.context"),il=Symbol.for("react.forward_ref"),io=Symbol.for("react.suspense"),oo=Symbol.for("react.suspense_list"),ol=Symbol.for("react.memo"),tt=Symbol.for("react.lazy"),vs=Symbol.for("react.offscreen"),Ql=Symbol.iterator;function xn(e){return e===null||typeof e!="object"?null:(e=Ql&&e[Ql]||e["@@iterator"],typeof e=="function"?e:null)}var H=Object.assign,zi;function Cn(e){if(zi===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);zi=t&&t[1]||""}return`
`+zi+e}var Di=!1;function Li(e,t){if(!e||Di)return"";Di=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(d){var r=d}Reflect.construct(e,[],t)}else{try{t.call()}catch(d){r=d}e.call(t.prototype)}else{try{throw Error()}catch(d){r=d}e()}}catch(d){if(d&&r&&typeof d.stack=="string"){for(var i=d.stack.split(`
`),o=r.stack.split(`
`),a=i.length-1,s=o.length-1;1<=a&&0<=s&&i[a]!==o[s];)s--;for(;1<=a&&0<=s;a--,s--)if(i[a]!==o[s]){if(a!==1||s!==1)do if(a--,s--,0>s||i[a]!==o[s]){var c=`
`+i[a].replace(" at new "," at ");return e.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",e.displayName)),c}while(1<=a&&0<=s);break}}}finally{Di=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Cn(e):""}function Vd(e){switch(e.tag){case 5:return Cn(e.type);case 16:return Cn("Lazy");case 13:return Cn("Suspense");case 19:return Cn("SuspenseList");case 0:case 2:case 15:return e=Li(e.type,!1),e;case 11:return e=Li(e.type.render,!1),e;case 1:return e=Li(e.type,!0),e;default:return""}}function lo(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Ut:return"Fragment";case Ot:return"Portal";case ro:return"Profiler";case rl:return"StrictMode";case io:return"Suspense";case oo:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case xs:return(e.displayName||"Context")+".Consumer";case gs:return(e._context.displayName||"Context")+".Provider";case il:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ol:return t=e.displayName||null,t!==null?t:lo(e.type)||"Memo";case tt:t=e._payload,e=e._init;try{return lo(e(t))}catch{}}return null}function qd(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return lo(t);case 8:return t===rl?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function mt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ys(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Gd(e){var t=ys(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(a){r=""+a,o.call(this,a)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function dr(e){e._valueTracker||(e._valueTracker=Gd(e))}function ks(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=ys(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Br(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function ao(e,t){var n=t.checked;return H({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Yl(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=mt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function ws(e,t){t=t.checked,t!=null&&nl(e,"checked",t,!1)}function so(e,t){ws(e,t);var n=mt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?co(e,t.type,n):t.hasOwnProperty("defaultValue")&&co(e,t.type,mt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Xl(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function co(e,t,n){(t!=="number"||Br(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Nn=Array.isArray;function Jt(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+mt(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function uo(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(w(91));return H({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Zl(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(w(92));if(Nn(n)){if(1<n.length)throw Error(w(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:mt(n)}}function Fs(e,t){var n=mt(t.value),r=mt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Jl(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function js(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function po(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?js(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var pr,bs=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(pr=pr||document.createElement("div"),pr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=pr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function In(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var zn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Kd=["Webkit","ms","Moz","O"];Object.keys(zn).forEach(function(e){Kd.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),zn[t]=zn[e]})});function Cs(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||zn.hasOwnProperty(e)&&zn[e]?(""+t).trim():t+"px"}function Ns(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Cs(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var Qd=H({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ho(e,t){if(t){if(Qd[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(w(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(w(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(w(61))}if(t.style!=null&&typeof t.style!="object")throw Error(w(62))}}function fo(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var mo=null;function ll(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var go=null,en=null,tn=null;function ea(e){if(e=or(e)){if(typeof go!="function")throw Error(w(280));var t=e.stateNode;t&&(t=fi(t),go(e.stateNode,e.type,t))}}function Ss(e){en?tn?tn.push(e):tn=[e]:en=e}function Es(){if(en){var e=en,t=tn;if(tn=en=null,ea(e),t)for(e=0;e<t.length;e++)ea(t[e])}}function zs(e,t){return e(t)}function Ds(){}var _i=!1;function Ls(e,t,n){if(_i)return e(t,n);_i=!0;try{return zs(e,t,n)}finally{_i=!1,(en!==null||tn!==null)&&(Ds(),Es())}}function On(e,t){var n=e.stateNode;if(n===null)return null;var r=fi(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(w(231,t,typeof n));return n}var xo=!1;if(Ke)try{var vn={};Object.defineProperty(vn,"passive",{get:function(){xo=!0}}),window.addEventListener("test",vn,vn),window.removeEventListener("test",vn,vn)}catch{xo=!1}function Yd(e,t,n,r,i,o,a,s,c){var d=Array.prototype.slice.call(arguments,3);try{t.apply(n,d)}catch(g){this.onError(g)}}var Dn=!1,Ir=null,Or=!1,vo=null,Xd={onError:function(e){Dn=!0,Ir=e}};function Zd(e,t,n,r,i,o,a,s,c){Dn=!1,Ir=null,Yd.apply(Xd,arguments)}function Jd(e,t,n,r,i,o,a,s,c){if(Zd.apply(this,arguments),Dn){if(Dn){var d=Ir;Dn=!1,Ir=null}else throw Error(w(198));Or||(Or=!0,vo=d)}}function At(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function _s(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function ta(e){if(At(e)!==e)throw Error(w(188))}function ep(e){var t=e.alternate;if(!t){if(t=At(e),t===null)throw Error(w(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return ta(i),e;if(o===r)return ta(i),t;o=o.sibling}throw Error(w(188))}if(n.return!==r.return)n=i,r=o;else{for(var a=!1,s=i.child;s;){if(s===n){a=!0,n=i,r=o;break}if(s===r){a=!0,r=i,n=o;break}s=s.sibling}if(!a){for(s=o.child;s;){if(s===n){a=!0,n=o,r=i;break}if(s===r){a=!0,r=o,n=i;break}s=s.sibling}if(!a)throw Error(w(189))}}if(n.alternate!==r)throw Error(w(190))}if(n.tag!==3)throw Error(w(188));return n.stateNode.current===n?e:t}function Ts(e){return e=ep(e),e!==null?Ms(e):null}function Ms(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Ms(e);if(t!==null)return t;e=e.sibling}return null}var Ps=ke.unstable_scheduleCallback,na=ke.unstable_cancelCallback,tp=ke.unstable_shouldYield,np=ke.unstable_requestPaint,G=ke.unstable_now,rp=ke.unstable_getCurrentPriorityLevel,al=ke.unstable_ImmediatePriority,As=ke.unstable_UserBlockingPriority,Ur=ke.unstable_NormalPriority,ip=ke.unstable_LowPriority,Rs=ke.unstable_IdlePriority,ui=null,Oe=null;function op(e){if(Oe&&typeof Oe.onCommitFiberRoot=="function")try{Oe.onCommitFiberRoot(ui,e,void 0,(e.current.flags&128)===128)}catch{}}var Te=Math.clz32?Math.clz32:sp,lp=Math.log,ap=Math.LN2;function sp(e){return e>>>=0,e===0?32:31-(lp(e)/ap|0)|0}var hr=64,fr=4194304;function Sn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function $r(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,a=n&268435455;if(a!==0){var s=a&~i;s!==0?r=Sn(s):(o&=a,o!==0&&(r=Sn(o)))}else a=n&~i,a!==0?r=Sn(a):o!==0&&(r=Sn(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Te(t),i=1<<n,r|=e[n],t&=~i;return r}function cp(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function up(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var a=31-Te(o),s=1<<a,c=i[a];c===-1?(!(s&n)||s&r)&&(i[a]=cp(s,t)):c<=t&&(e.expiredLanes|=s),o&=~s}}function yo(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Bs(){var e=hr;return hr<<=1,!(hr&4194240)&&(hr=64),e}function Ti(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function rr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Te(t),e[t]=n}function dp(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-Te(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function sl(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Te(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var R=0;function Is(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Os,cl,Us,$s,Ws,ko=!1,mr=[],at=null,st=null,ct=null,Un=new Map,$n=new Map,rt=[],pp="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ra(e,t){switch(e){case"focusin":case"focusout":at=null;break;case"dragenter":case"dragleave":st=null;break;case"mouseover":case"mouseout":ct=null;break;case"pointerover":case"pointerout":Un.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":$n.delete(t.pointerId)}}function yn(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=or(t),t!==null&&cl(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function hp(e,t,n,r,i){switch(t){case"focusin":return at=yn(at,e,t,n,r,i),!0;case"dragenter":return st=yn(st,e,t,n,r,i),!0;case"mouseover":return ct=yn(ct,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return Un.set(o,yn(Un.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,$n.set(o,yn($n.get(o)||null,e,t,n,r,i)),!0}return!1}function Hs(e){var t=Ct(e.target);if(t!==null){var n=At(t);if(n!==null){if(t=n.tag,t===13){if(t=_s(n),t!==null){e.blockedOn=t,Ws(e.priority,function(){Us(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Er(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=wo(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);mo=r,n.target.dispatchEvent(r),mo=null}else return t=or(n),t!==null&&cl(t),e.blockedOn=n,!1;t.shift()}return!0}function ia(e,t,n){Er(e)&&n.delete(t)}function fp(){ko=!1,at!==null&&Er(at)&&(at=null),st!==null&&Er(st)&&(st=null),ct!==null&&Er(ct)&&(ct=null),Un.forEach(ia),$n.forEach(ia)}function kn(e,t){e.blockedOn===t&&(e.blockedOn=null,ko||(ko=!0,ke.unstable_scheduleCallback(ke.unstable_NormalPriority,fp)))}function Wn(e){function t(i){return kn(i,e)}if(0<mr.length){kn(mr[0],e);for(var n=1;n<mr.length;n++){var r=mr[n];r.blockedOn===e&&(r.blockedOn=null)}}for(at!==null&&kn(at,e),st!==null&&kn(st,e),ct!==null&&kn(ct,e),Un.forEach(t),$n.forEach(t),n=0;n<rt.length;n++)r=rt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<rt.length&&(n=rt[0],n.blockedOn===null);)Hs(n),n.blockedOn===null&&rt.shift()}var nn=Ze.ReactCurrentBatchConfig,Wr=!0;function mp(e,t,n,r){var i=R,o=nn.transition;nn.transition=null;try{R=1,ul(e,t,n,r)}finally{R=i,nn.transition=o}}function gp(e,t,n,r){var i=R,o=nn.transition;nn.transition=null;try{R=4,ul(e,t,n,r)}finally{R=i,nn.transition=o}}function ul(e,t,n,r){if(Wr){var i=wo(e,t,n,r);if(i===null)Wi(e,t,r,Hr,n),ra(e,r);else if(hp(i,e,t,n,r))r.stopPropagation();else if(ra(e,r),t&4&&-1<pp.indexOf(e)){for(;i!==null;){var o=or(i);if(o!==null&&Os(o),o=wo(e,t,n,r),o===null&&Wi(e,t,r,Hr,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else Wi(e,t,r,null,n)}}var Hr=null;function wo(e,t,n,r){if(Hr=null,e=ll(r),e=Ct(e),e!==null)if(t=At(e),t===null)e=null;else if(n=t.tag,n===13){if(e=_s(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Hr=e,null}function Vs(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(rp()){case al:return 1;case As:return 4;case Ur:case ip:return 16;case Rs:return 536870912;default:return 16}default:return 16}}var ot=null,dl=null,zr=null;function qs(){if(zr)return zr;var e,t=dl,n=t.length,r,i="value"in ot?ot.value:ot.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var a=n-e;for(r=1;r<=a&&t[n-r]===i[o-r];r++);return zr=i.slice(e,1<r?1-r:void 0)}function Dr(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function gr(){return!0}function oa(){return!1}function Fe(e){function t(n,r,i,o,a){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=a,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(o):o[s]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?gr:oa,this.isPropagationStopped=oa,this}return H(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=gr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=gr)},persist:function(){},isPersistent:gr}),t}var fn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},pl=Fe(fn),ir=H({},fn,{view:0,detail:0}),xp=Fe(ir),Mi,Pi,wn,di=H({},ir,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:hl,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==wn&&(wn&&e.type==="mousemove"?(Mi=e.screenX-wn.screenX,Pi=e.screenY-wn.screenY):Pi=Mi=0,wn=e),Mi)},movementY:function(e){return"movementY"in e?e.movementY:Pi}}),la=Fe(di),vp=H({},di,{dataTransfer:0}),yp=Fe(vp),kp=H({},ir,{relatedTarget:0}),Ai=Fe(kp),wp=H({},fn,{animationName:0,elapsedTime:0,pseudoElement:0}),Fp=Fe(wp),jp=H({},fn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),bp=Fe(jp),Cp=H({},fn,{data:0}),aa=Fe(Cp),Np={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Sp={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Ep={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function zp(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Ep[e])?!!t[e]:!1}function hl(){return zp}var Dp=H({},ir,{key:function(e){if(e.key){var t=Np[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Dr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Sp[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:hl,charCode:function(e){return e.type==="keypress"?Dr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Dr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Lp=Fe(Dp),_p=H({},di,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),sa=Fe(_p),Tp=H({},ir,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:hl}),Mp=Fe(Tp),Pp=H({},fn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ap=Fe(Pp),Rp=H({},di,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Bp=Fe(Rp),Ip=[9,13,27,32],fl=Ke&&"CompositionEvent"in window,Ln=null;Ke&&"documentMode"in document&&(Ln=document.documentMode);var Op=Ke&&"TextEvent"in window&&!Ln,Gs=Ke&&(!fl||Ln&&8<Ln&&11>=Ln),ca=" ",ua=!1;function Ks(e,t){switch(e){case"keyup":return Ip.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Qs(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var $t=!1;function Up(e,t){switch(e){case"compositionend":return Qs(t);case"keypress":return t.which!==32?null:(ua=!0,ca);case"textInput":return e=t.data,e===ca&&ua?null:e;default:return null}}function $p(e,t){if($t)return e==="compositionend"||!fl&&Ks(e,t)?(e=qs(),zr=dl=ot=null,$t=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Gs&&t.locale!=="ko"?null:t.data;default:return null}}var Wp={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function da(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Wp[e.type]:t==="textarea"}function Ys(e,t,n,r){Ss(r),t=Vr(t,"onChange"),0<t.length&&(n=new pl("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var _n=null,Hn=null;function Hp(e){ac(e,0)}function pi(e){var t=Vt(e);if(ks(t))return e}function Vp(e,t){if(e==="change")return t}var Xs=!1;if(Ke){var Ri;if(Ke){var Bi="oninput"in document;if(!Bi){var pa=document.createElement("div");pa.setAttribute("oninput","return;"),Bi=typeof pa.oninput=="function"}Ri=Bi}else Ri=!1;Xs=Ri&&(!document.documentMode||9<document.documentMode)}function ha(){_n&&(_n.detachEvent("onpropertychange",Zs),Hn=_n=null)}function Zs(e){if(e.propertyName==="value"&&pi(Hn)){var t=[];Ys(t,Hn,e,ll(e)),Ls(Hp,t)}}function qp(e,t,n){e==="focusin"?(ha(),_n=t,Hn=n,_n.attachEvent("onpropertychange",Zs)):e==="focusout"&&ha()}function Gp(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return pi(Hn)}function Kp(e,t){if(e==="click")return pi(t)}function Qp(e,t){if(e==="input"||e==="change")return pi(t)}function Yp(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Pe=typeof Object.is=="function"?Object.is:Yp;function Vn(e,t){if(Pe(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!no.call(t,i)||!Pe(e[i],t[i]))return!1}return!0}function fa(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ma(e,t){var n=fa(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=fa(n)}}function Js(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Js(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function ec(){for(var e=window,t=Br();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Br(e.document)}return t}function ml(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Xp(e){var t=ec(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Js(n.ownerDocument.documentElement,n)){if(r!==null&&ml(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=ma(n,o);var a=ma(n,r);i&&a&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Zp=Ke&&"documentMode"in document&&11>=document.documentMode,Wt=null,Fo=null,Tn=null,jo=!1;function ga(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;jo||Wt==null||Wt!==Br(r)||(r=Wt,"selectionStart"in r&&ml(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Tn&&Vn(Tn,r)||(Tn=r,r=Vr(Fo,"onSelect"),0<r.length&&(t=new pl("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Wt)))}function xr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Ht={animationend:xr("Animation","AnimationEnd"),animationiteration:xr("Animation","AnimationIteration"),animationstart:xr("Animation","AnimationStart"),transitionend:xr("Transition","TransitionEnd")},Ii={},tc={};Ke&&(tc=document.createElement("div").style,"AnimationEvent"in window||(delete Ht.animationend.animation,delete Ht.animationiteration.animation,delete Ht.animationstart.animation),"TransitionEvent"in window||delete Ht.transitionend.transition);function hi(e){if(Ii[e])return Ii[e];if(!Ht[e])return e;var t=Ht[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in tc)return Ii[e]=t[n];return e}var nc=hi("animationend"),rc=hi("animationiteration"),ic=hi("animationstart"),oc=hi("transitionend"),lc=new Map,xa="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function xt(e,t){lc.set(e,t),Pt(t,[e])}for(var Oi=0;Oi<xa.length;Oi++){var Ui=xa[Oi],Jp=Ui.toLowerCase(),eh=Ui[0].toUpperCase()+Ui.slice(1);xt(Jp,"on"+eh)}xt(nc,"onAnimationEnd");xt(rc,"onAnimationIteration");xt(ic,"onAnimationStart");xt("dblclick","onDoubleClick");xt("focusin","onFocus");xt("focusout","onBlur");xt(oc,"onTransitionEnd");ln("onMouseEnter",["mouseout","mouseover"]);ln("onMouseLeave",["mouseout","mouseover"]);ln("onPointerEnter",["pointerout","pointerover"]);ln("onPointerLeave",["pointerout","pointerover"]);Pt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Pt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Pt("onBeforeInput",["compositionend","keypress","textInput","paste"]);Pt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Pt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Pt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var En="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),th=new Set("cancel close invalid load scroll toggle".split(" ").concat(En));function va(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Jd(r,t,void 0,e),e.currentTarget=null}function ac(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var a=r.length-1;0<=a;a--){var s=r[a],c=s.instance,d=s.currentTarget;if(s=s.listener,c!==o&&i.isPropagationStopped())break e;va(i,s,d),o=c}else for(a=0;a<r.length;a++){if(s=r[a],c=s.instance,d=s.currentTarget,s=s.listener,c!==o&&i.isPropagationStopped())break e;va(i,s,d),o=c}}}if(Or)throw e=vo,Or=!1,vo=null,e}function I(e,t){var n=t[Eo];n===void 0&&(n=t[Eo]=new Set);var r=e+"__bubble";n.has(r)||(sc(t,e,2,!1),n.add(r))}function $i(e,t,n){var r=0;t&&(r|=4),sc(n,e,r,t)}var vr="_reactListening"+Math.random().toString(36).slice(2);function qn(e){if(!e[vr]){e[vr]=!0,ms.forEach(function(n){n!=="selectionchange"&&(th.has(n)||$i(n,!1,e),$i(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[vr]||(t[vr]=!0,$i("selectionchange",!1,t))}}function sc(e,t,n,r){switch(Vs(t)){case 1:var i=mp;break;case 4:i=gp;break;default:i=ul}n=i.bind(null,t,n,e),i=void 0,!xo||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Wi(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var s=r.stateNode.containerInfo;if(s===i||s.nodeType===8&&s.parentNode===i)break;if(a===4)for(a=r.return;a!==null;){var c=a.tag;if((c===3||c===4)&&(c=a.stateNode.containerInfo,c===i||c.nodeType===8&&c.parentNode===i))return;a=a.return}for(;s!==null;){if(a=Ct(s),a===null)return;if(c=a.tag,c===5||c===6){r=o=a;continue e}s=s.parentNode}}r=r.return}Ls(function(){var d=o,g=ll(n),f=[];e:{var m=lc.get(e);if(m!==void 0){var k=pl,y=e;switch(e){case"keypress":if(Dr(n)===0)break e;case"keydown":case"keyup":k=Lp;break;case"focusin":y="focus",k=Ai;break;case"focusout":y="blur",k=Ai;break;case"beforeblur":case"afterblur":k=Ai;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":k=la;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":k=yp;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":k=Mp;break;case nc:case rc:case ic:k=Fp;break;case oc:k=Ap;break;case"scroll":k=xp;break;case"wheel":k=Bp;break;case"copy":case"cut":case"paste":k=bp;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":k=sa}var v=(t&4)!==0,F=!v&&e==="scroll",p=v?m!==null?m+"Capture":null:m;v=[];for(var u=d,h;u!==null;){h=u;var x=h.stateNode;if(h.tag===5&&x!==null&&(h=x,p!==null&&(x=On(u,p),x!=null&&v.push(Gn(u,x,h)))),F)break;u=u.return}0<v.length&&(m=new k(m,y,null,n,g),f.push({event:m,listeners:v}))}}if(!(t&7)){e:{if(m=e==="mouseover"||e==="pointerover",k=e==="mouseout"||e==="pointerout",m&&n!==mo&&(y=n.relatedTarget||n.fromElement)&&(Ct(y)||y[Qe]))break e;if((k||m)&&(m=g.window===g?g:(m=g.ownerDocument)?m.defaultView||m.parentWindow:window,k?(y=n.relatedTarget||n.toElement,k=d,y=y?Ct(y):null,y!==null&&(F=At(y),y!==F||y.tag!==5&&y.tag!==6)&&(y=null)):(k=null,y=d),k!==y)){if(v=la,x="onMouseLeave",p="onMouseEnter",u="mouse",(e==="pointerout"||e==="pointerover")&&(v=sa,x="onPointerLeave",p="onPointerEnter",u="pointer"),F=k==null?m:Vt(k),h=y==null?m:Vt(y),m=new v(x,u+"leave",k,n,g),m.target=F,m.relatedTarget=h,x=null,Ct(g)===d&&(v=new v(p,u+"enter",y,n,g),v.target=h,v.relatedTarget=F,x=v),F=x,k&&y)t:{for(v=k,p=y,u=0,h=v;h;h=It(h))u++;for(h=0,x=p;x;x=It(x))h++;for(;0<u-h;)v=It(v),u--;for(;0<h-u;)p=It(p),h--;for(;u--;){if(v===p||p!==null&&v===p.alternate)break t;v=It(v),p=It(p)}v=null}else v=null;k!==null&&ya(f,m,k,v,!1),y!==null&&F!==null&&ya(f,F,y,v,!0)}}e:{if(m=d?Vt(d):window,k=m.nodeName&&m.nodeName.toLowerCase(),k==="select"||k==="input"&&m.type==="file")var j=Vp;else if(da(m))if(Xs)j=Qp;else{j=Gp;var C=qp}else(k=m.nodeName)&&k.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(j=Kp);if(j&&(j=j(e,d))){Ys(f,j,n,g);break e}C&&C(e,m,d),e==="focusout"&&(C=m._wrapperState)&&C.controlled&&m.type==="number"&&co(m,"number",m.value)}switch(C=d?Vt(d):window,e){case"focusin":(da(C)||C.contentEditable==="true")&&(Wt=C,Fo=d,Tn=null);break;case"focusout":Tn=Fo=Wt=null;break;case"mousedown":jo=!0;break;case"contextmenu":case"mouseup":case"dragend":jo=!1,ga(f,n,g);break;case"selectionchange":if(Zp)break;case"keydown":case"keyup":ga(f,n,g)}var b;if(fl)e:{switch(e){case"compositionstart":var S="onCompositionStart";break e;case"compositionend":S="onCompositionEnd";break e;case"compositionupdate":S="onCompositionUpdate";break e}S=void 0}else $t?Ks(e,n)&&(S="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(S="onCompositionStart");S&&(Gs&&n.locale!=="ko"&&($t||S!=="onCompositionStart"?S==="onCompositionEnd"&&$t&&(b=qs()):(ot=g,dl="value"in ot?ot.value:ot.textContent,$t=!0)),C=Vr(d,S),0<C.length&&(S=new aa(S,e,null,n,g),f.push({event:S,listeners:C}),b?S.data=b:(b=Qs(n),b!==null&&(S.data=b)))),(b=Op?Up(e,n):$p(e,n))&&(d=Vr(d,"onBeforeInput"),0<d.length&&(g=new aa("onBeforeInput","beforeinput",null,n,g),f.push({event:g,listeners:d}),g.data=b))}ac(f,t)})}function Gn(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Vr(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=On(e,n),o!=null&&r.unshift(Gn(e,o,i)),o=On(e,t),o!=null&&r.push(Gn(e,o,i))),e=e.return}return r}function It(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function ya(e,t,n,r,i){for(var o=t._reactName,a=[];n!==null&&n!==r;){var s=n,c=s.alternate,d=s.stateNode;if(c!==null&&c===r)break;s.tag===5&&d!==null&&(s=d,i?(c=On(n,o),c!=null&&a.unshift(Gn(n,c,s))):i||(c=On(n,o),c!=null&&a.push(Gn(n,c,s)))),n=n.return}a.length!==0&&e.push({event:t,listeners:a})}var nh=/\r\n?/g,rh=/\u0000|\uFFFD/g;function ka(e){return(typeof e=="string"?e:""+e).replace(nh,`
`).replace(rh,"")}function yr(e,t,n){if(t=ka(t),ka(e)!==t&&n)throw Error(w(425))}function qr(){}var bo=null,Co=null;function No(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var So=typeof setTimeout=="function"?setTimeout:void 0,ih=typeof clearTimeout=="function"?clearTimeout:void 0,wa=typeof Promise=="function"?Promise:void 0,oh=typeof queueMicrotask=="function"?queueMicrotask:typeof wa<"u"?function(e){return wa.resolve(null).then(e).catch(lh)}:So;function lh(e){setTimeout(function(){throw e})}function Hi(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),Wn(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Wn(t)}function ut(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Fa(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var mn=Math.random().toString(36).slice(2),Ie="__reactFiber$"+mn,Kn="__reactProps$"+mn,Qe="__reactContainer$"+mn,Eo="__reactEvents$"+mn,ah="__reactListeners$"+mn,sh="__reactHandles$"+mn;function Ct(e){var t=e[Ie];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Qe]||n[Ie]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Fa(e);e!==null;){if(n=e[Ie])return n;e=Fa(e)}return t}e=n,n=e.parentNode}return null}function or(e){return e=e[Ie]||e[Qe],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Vt(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(w(33))}function fi(e){return e[Kn]||null}var zo=[],qt=-1;function vt(e){return{current:e}}function O(e){0>qt||(e.current=zo[qt],zo[qt]=null,qt--)}function B(e,t){qt++,zo[qt]=e.current,e.current=t}var gt={},ae=vt(gt),fe=vt(!1),Dt=gt;function an(e,t){var n=e.type.contextTypes;if(!n)return gt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function me(e){return e=e.childContextTypes,e!=null}function Gr(){O(fe),O(ae)}function ja(e,t,n){if(ae.current!==gt)throw Error(w(168));B(ae,t),B(fe,n)}function cc(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(w(108,qd(e)||"Unknown",i));return H({},n,r)}function Kr(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||gt,Dt=ae.current,B(ae,e),B(fe,fe.current),!0}function ba(e,t,n){var r=e.stateNode;if(!r)throw Error(w(169));n?(e=cc(e,t,Dt),r.__reactInternalMemoizedMergedChildContext=e,O(fe),O(ae),B(ae,e)):O(fe),B(fe,n)}var He=null,mi=!1,Vi=!1;function uc(e){He===null?He=[e]:He.push(e)}function ch(e){mi=!0,uc(e)}function yt(){if(!Vi&&He!==null){Vi=!0;var e=0,t=R;try{var n=He;for(R=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}He=null,mi=!1}catch(i){throw He!==null&&(He=He.slice(e+1)),Ps(al,yt),i}finally{R=t,Vi=!1}}return null}var Gt=[],Kt=0,Qr=null,Yr=0,je=[],be=0,Lt=null,Ve=1,qe="";function jt(e,t){Gt[Kt++]=Yr,Gt[Kt++]=Qr,Qr=e,Yr=t}function dc(e,t,n){je[be++]=Ve,je[be++]=qe,je[be++]=Lt,Lt=e;var r=Ve;e=qe;var i=32-Te(r)-1;r&=~(1<<i),n+=1;var o=32-Te(t)+i;if(30<o){var a=i-i%5;o=(r&(1<<a)-1).toString(32),r>>=a,i-=a,Ve=1<<32-Te(t)+i|n<<i|r,qe=o+e}else Ve=1<<o|n<<i|r,qe=e}function gl(e){e.return!==null&&(jt(e,1),dc(e,1,0))}function xl(e){for(;e===Qr;)Qr=Gt[--Kt],Gt[Kt]=null,Yr=Gt[--Kt],Gt[Kt]=null;for(;e===Lt;)Lt=je[--be],je[be]=null,qe=je[--be],je[be]=null,Ve=je[--be],je[be]=null}var ye=null,ve=null,U=!1,_e=null;function pc(e,t){var n=Ce(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Ca(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,ye=e,ve=ut(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,ye=e,ve=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Lt!==null?{id:Ve,overflow:qe}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Ce(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,ye=e,ve=null,!0):!1;default:return!1}}function Do(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Lo(e){if(U){var t=ve;if(t){var n=t;if(!Ca(e,t)){if(Do(e))throw Error(w(418));t=ut(n.nextSibling);var r=ye;t&&Ca(e,t)?pc(r,n):(e.flags=e.flags&-4097|2,U=!1,ye=e)}}else{if(Do(e))throw Error(w(418));e.flags=e.flags&-4097|2,U=!1,ye=e}}}function Na(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ye=e}function kr(e){if(e!==ye)return!1;if(!U)return Na(e),U=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!No(e.type,e.memoizedProps)),t&&(t=ve)){if(Do(e))throw hc(),Error(w(418));for(;t;)pc(e,t),t=ut(t.nextSibling)}if(Na(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(w(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){ve=ut(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}ve=null}}else ve=ye?ut(e.stateNode.nextSibling):null;return!0}function hc(){for(var e=ve;e;)e=ut(e.nextSibling)}function sn(){ve=ye=null,U=!1}function vl(e){_e===null?_e=[e]:_e.push(e)}var uh=Ze.ReactCurrentBatchConfig;function Fn(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(w(309));var r=n.stateNode}if(!r)throw Error(w(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(a){var s=i.refs;a===null?delete s[o]:s[o]=a},t._stringRef=o,t)}if(typeof e!="string")throw Error(w(284));if(!n._owner)throw Error(w(290,e))}return e}function wr(e,t){throw e=Object.prototype.toString.call(t),Error(w(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Sa(e){var t=e._init;return t(e._payload)}function fc(e){function t(p,u){if(e){var h=p.deletions;h===null?(p.deletions=[u],p.flags|=16):h.push(u)}}function n(p,u){if(!e)return null;for(;u!==null;)t(p,u),u=u.sibling;return null}function r(p,u){for(p=new Map;u!==null;)u.key!==null?p.set(u.key,u):p.set(u.index,u),u=u.sibling;return p}function i(p,u){return p=ft(p,u),p.index=0,p.sibling=null,p}function o(p,u,h){return p.index=h,e?(h=p.alternate,h!==null?(h=h.index,h<u?(p.flags|=2,u):h):(p.flags|=2,u)):(p.flags|=1048576,u)}function a(p){return e&&p.alternate===null&&(p.flags|=2),p}function s(p,u,h,x){return u===null||u.tag!==6?(u=Zi(h,p.mode,x),u.return=p,u):(u=i(u,h),u.return=p,u)}function c(p,u,h,x){var j=h.type;return j===Ut?g(p,u,h.props.children,x,h.key):u!==null&&(u.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===tt&&Sa(j)===u.type)?(x=i(u,h.props),x.ref=Fn(p,u,h),x.return=p,x):(x=Rr(h.type,h.key,h.props,null,p.mode,x),x.ref=Fn(p,u,h),x.return=p,x)}function d(p,u,h,x){return u===null||u.tag!==4||u.stateNode.containerInfo!==h.containerInfo||u.stateNode.implementation!==h.implementation?(u=Ji(h,p.mode,x),u.return=p,u):(u=i(u,h.children||[]),u.return=p,u)}function g(p,u,h,x,j){return u===null||u.tag!==7?(u=zt(h,p.mode,x,j),u.return=p,u):(u=i(u,h),u.return=p,u)}function f(p,u,h){if(typeof u=="string"&&u!==""||typeof u=="number")return u=Zi(""+u,p.mode,h),u.return=p,u;if(typeof u=="object"&&u!==null){switch(u.$$typeof){case ur:return h=Rr(u.type,u.key,u.props,null,p.mode,h),h.ref=Fn(p,null,u),h.return=p,h;case Ot:return u=Ji(u,p.mode,h),u.return=p,u;case tt:var x=u._init;return f(p,x(u._payload),h)}if(Nn(u)||xn(u))return u=zt(u,p.mode,h,null),u.return=p,u;wr(p,u)}return null}function m(p,u,h,x){var j=u!==null?u.key:null;if(typeof h=="string"&&h!==""||typeof h=="number")return j!==null?null:s(p,u,""+h,x);if(typeof h=="object"&&h!==null){switch(h.$$typeof){case ur:return h.key===j?c(p,u,h,x):null;case Ot:return h.key===j?d(p,u,h,x):null;case tt:return j=h._init,m(p,u,j(h._payload),x)}if(Nn(h)||xn(h))return j!==null?null:g(p,u,h,x,null);wr(p,h)}return null}function k(p,u,h,x,j){if(typeof x=="string"&&x!==""||typeof x=="number")return p=p.get(h)||null,s(u,p,""+x,j);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case ur:return p=p.get(x.key===null?h:x.key)||null,c(u,p,x,j);case Ot:return p=p.get(x.key===null?h:x.key)||null,d(u,p,x,j);case tt:var C=x._init;return k(p,u,h,C(x._payload),j)}if(Nn(x)||xn(x))return p=p.get(h)||null,g(u,p,x,j,null);wr(u,x)}return null}function y(p,u,h,x){for(var j=null,C=null,b=u,S=u=0,P=null;b!==null&&S<h.length;S++){b.index>S?(P=b,b=null):P=b.sibling;var _=m(p,b,h[S],x);if(_===null){b===null&&(b=P);break}e&&b&&_.alternate===null&&t(p,b),u=o(_,u,S),C===null?j=_:C.sibling=_,C=_,b=P}if(S===h.length)return n(p,b),U&&jt(p,S),j;if(b===null){for(;S<h.length;S++)b=f(p,h[S],x),b!==null&&(u=o(b,u,S),C===null?j=b:C.sibling=b,C=b);return U&&jt(p,S),j}for(b=r(p,b);S<h.length;S++)P=k(b,p,S,h[S],x),P!==null&&(e&&P.alternate!==null&&b.delete(P.key===null?S:P.key),u=o(P,u,S),C===null?j=P:C.sibling=P,C=P);return e&&b.forEach(function(re){return t(p,re)}),U&&jt(p,S),j}function v(p,u,h,x){var j=xn(h);if(typeof j!="function")throw Error(w(150));if(h=j.call(h),h==null)throw Error(w(151));for(var C=j=null,b=u,S=u=0,P=null,_=h.next();b!==null&&!_.done;S++,_=h.next()){b.index>S?(P=b,b=null):P=b.sibling;var re=m(p,b,_.value,x);if(re===null){b===null&&(b=P);break}e&&b&&re.alternate===null&&t(p,b),u=o(re,u,S),C===null?j=re:C.sibling=re,C=re,b=P}if(_.done)return n(p,b),U&&jt(p,S),j;if(b===null){for(;!_.done;S++,_=h.next())_=f(p,_.value,x),_!==null&&(u=o(_,u,S),C===null?j=_:C.sibling=_,C=_);return U&&jt(p,S),j}for(b=r(p,b);!_.done;S++,_=h.next())_=k(b,p,S,_.value,x),_!==null&&(e&&_.alternate!==null&&b.delete(_.key===null?S:_.key),u=o(_,u,S),C===null?j=_:C.sibling=_,C=_);return e&&b.forEach(function(Ae){return t(p,Ae)}),U&&jt(p,S),j}function F(p,u,h,x){if(typeof h=="object"&&h!==null&&h.type===Ut&&h.key===null&&(h=h.props.children),typeof h=="object"&&h!==null){switch(h.$$typeof){case ur:e:{for(var j=h.key,C=u;C!==null;){if(C.key===j){if(j=h.type,j===Ut){if(C.tag===7){n(p,C.sibling),u=i(C,h.props.children),u.return=p,p=u;break e}}else if(C.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===tt&&Sa(j)===C.type){n(p,C.sibling),u=i(C,h.props),u.ref=Fn(p,C,h),u.return=p,p=u;break e}n(p,C);break}else t(p,C);C=C.sibling}h.type===Ut?(u=zt(h.props.children,p.mode,x,h.key),u.return=p,p=u):(x=Rr(h.type,h.key,h.props,null,p.mode,x),x.ref=Fn(p,u,h),x.return=p,p=x)}return a(p);case Ot:e:{for(C=h.key;u!==null;){if(u.key===C)if(u.tag===4&&u.stateNode.containerInfo===h.containerInfo&&u.stateNode.implementation===h.implementation){n(p,u.sibling),u=i(u,h.children||[]),u.return=p,p=u;break e}else{n(p,u);break}else t(p,u);u=u.sibling}u=Ji(h,p.mode,x),u.return=p,p=u}return a(p);case tt:return C=h._init,F(p,u,C(h._payload),x)}if(Nn(h))return y(p,u,h,x);if(xn(h))return v(p,u,h,x);wr(p,h)}return typeof h=="string"&&h!==""||typeof h=="number"?(h=""+h,u!==null&&u.tag===6?(n(p,u.sibling),u=i(u,h),u.return=p,p=u):(n(p,u),u=Zi(h,p.mode,x),u.return=p,p=u),a(p)):n(p,u)}return F}var cn=fc(!0),mc=fc(!1),Xr=vt(null),Zr=null,Qt=null,yl=null;function kl(){yl=Qt=Zr=null}function wl(e){var t=Xr.current;O(Xr),e._currentValue=t}function _o(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function rn(e,t){Zr=e,yl=Qt=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(he=!0),e.firstContext=null)}function Se(e){var t=e._currentValue;if(yl!==e)if(e={context:e,memoizedValue:t,next:null},Qt===null){if(Zr===null)throw Error(w(308));Qt=e,Zr.dependencies={lanes:0,firstContext:e}}else Qt=Qt.next=e;return t}var Nt=null;function Fl(e){Nt===null?Nt=[e]:Nt.push(e)}function gc(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,Fl(t)):(n.next=i.next,i.next=n),t.interleaved=n,Ye(e,r)}function Ye(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var nt=!1;function jl(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function xc(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Ge(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function dt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,A&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Ye(e,n)}return i=r.interleaved,i===null?(t.next=t,Fl(r)):(t.next=i.next,i.next=t),r.interleaved=t,Ye(e,n)}function Lr(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,sl(e,n)}}function Ea(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=a:o=o.next=a,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Jr(e,t,n,r){var i=e.updateQueue;nt=!1;var o=i.firstBaseUpdate,a=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var c=s,d=c.next;c.next=null,a===null?o=d:a.next=d,a=c;var g=e.alternate;g!==null&&(g=g.updateQueue,s=g.lastBaseUpdate,s!==a&&(s===null?g.firstBaseUpdate=d:s.next=d,g.lastBaseUpdate=c))}if(o!==null){var f=i.baseState;a=0,g=d=c=null,s=o;do{var m=s.lane,k=s.eventTime;if((r&m)===m){g!==null&&(g=g.next={eventTime:k,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var y=e,v=s;switch(m=t,k=n,v.tag){case 1:if(y=v.payload,typeof y=="function"){f=y.call(k,f,m);break e}f=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=v.payload,m=typeof y=="function"?y.call(k,f,m):y,m==null)break e;f=H({},f,m);break e;case 2:nt=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,m=i.effects,m===null?i.effects=[s]:m.push(s))}else k={eventTime:k,lane:m,tag:s.tag,payload:s.payload,callback:s.callback,next:null},g===null?(d=g=k,c=f):g=g.next=k,a|=m;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;m=s,s=m.next,m.next=null,i.lastBaseUpdate=m,i.shared.pending=null}}while(!0);if(g===null&&(c=f),i.baseState=c,i.firstBaseUpdate=d,i.lastBaseUpdate=g,t=i.shared.interleaved,t!==null){i=t;do a|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);Tt|=a,e.lanes=a,e.memoizedState=f}}function za(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(w(191,i));i.call(r)}}}var lr={},Ue=vt(lr),Qn=vt(lr),Yn=vt(lr);function St(e){if(e===lr)throw Error(w(174));return e}function bl(e,t){switch(B(Yn,t),B(Qn,e),B(Ue,lr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:po(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=po(t,e)}O(Ue),B(Ue,t)}function un(){O(Ue),O(Qn),O(Yn)}function vc(e){St(Yn.current);var t=St(Ue.current),n=po(t,e.type);t!==n&&(B(Qn,e),B(Ue,n))}function Cl(e){Qn.current===e&&(O(Ue),O(Qn))}var $=vt(0);function ei(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var qi=[];function Nl(){for(var e=0;e<qi.length;e++)qi[e]._workInProgressVersionPrimary=null;qi.length=0}var _r=Ze.ReactCurrentDispatcher,Gi=Ze.ReactCurrentBatchConfig,_t=0,W=null,Q=null,Z=null,ti=!1,Mn=!1,Xn=0,dh=0;function ie(){throw Error(w(321))}function Sl(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Pe(e[n],t[n]))return!1;return!0}function El(e,t,n,r,i,o){if(_t=o,W=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,_r.current=e===null||e.memoizedState===null?mh:gh,e=n(r,i),Mn){o=0;do{if(Mn=!1,Xn=0,25<=o)throw Error(w(301));o+=1,Z=Q=null,t.updateQueue=null,_r.current=xh,e=n(r,i)}while(Mn)}if(_r.current=ni,t=Q!==null&&Q.next!==null,_t=0,Z=Q=W=null,ti=!1,t)throw Error(w(300));return e}function zl(){var e=Xn!==0;return Xn=0,e}function Be(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Z===null?W.memoizedState=Z=e:Z=Z.next=e,Z}function Ee(){if(Q===null){var e=W.alternate;e=e!==null?e.memoizedState:null}else e=Q.next;var t=Z===null?W.memoizedState:Z.next;if(t!==null)Z=t,Q=e;else{if(e===null)throw Error(w(310));Q=e,e={memoizedState:Q.memoizedState,baseState:Q.baseState,baseQueue:Q.baseQueue,queue:Q.queue,next:null},Z===null?W.memoizedState=Z=e:Z=Z.next=e}return Z}function Zn(e,t){return typeof t=="function"?t(e):t}function Ki(e){var t=Ee(),n=t.queue;if(n===null)throw Error(w(311));n.lastRenderedReducer=e;var r=Q,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var a=i.next;i.next=o.next,o.next=a}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var s=a=null,c=null,d=o;do{var g=d.lane;if((_t&g)===g)c!==null&&(c=c.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),r=d.hasEagerState?d.eagerState:e(r,d.action);else{var f={lane:g,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};c===null?(s=c=f,a=r):c=c.next=f,W.lanes|=g,Tt|=g}d=d.next}while(d!==null&&d!==o);c===null?a=r:c.next=s,Pe(r,t.memoizedState)||(he=!0),t.memoizedState=r,t.baseState=a,t.baseQueue=c,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,W.lanes|=o,Tt|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Qi(e){var t=Ee(),n=t.queue;if(n===null)throw Error(w(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var a=i=i.next;do o=e(o,a.action),a=a.next;while(a!==i);Pe(o,t.memoizedState)||(he=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function yc(){}function kc(e,t){var n=W,r=Ee(),i=t(),o=!Pe(r.memoizedState,i);if(o&&(r.memoizedState=i,he=!0),r=r.queue,Dl(jc.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||Z!==null&&Z.memoizedState.tag&1){if(n.flags|=2048,Jn(9,Fc.bind(null,n,r,i,t),void 0,null),J===null)throw Error(w(349));_t&30||wc(n,t,i)}return i}function wc(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=W.updateQueue,t===null?(t={lastEffect:null,stores:null},W.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Fc(e,t,n,r){t.value=n,t.getSnapshot=r,bc(t)&&Cc(e)}function jc(e,t,n){return n(function(){bc(t)&&Cc(e)})}function bc(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Pe(e,n)}catch{return!0}}function Cc(e){var t=Ye(e,1);t!==null&&Me(t,e,1,-1)}function Da(e){var t=Be();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Zn,lastRenderedState:e},t.queue=e,e=e.dispatch=fh.bind(null,W,e),[t.memoizedState,e]}function Jn(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=W.updateQueue,t===null?(t={lastEffect:null,stores:null},W.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Nc(){return Ee().memoizedState}function Tr(e,t,n,r){var i=Be();W.flags|=e,i.memoizedState=Jn(1|t,n,void 0,r===void 0?null:r)}function gi(e,t,n,r){var i=Ee();r=r===void 0?null:r;var o=void 0;if(Q!==null){var a=Q.memoizedState;if(o=a.destroy,r!==null&&Sl(r,a.deps)){i.memoizedState=Jn(t,n,o,r);return}}W.flags|=e,i.memoizedState=Jn(1|t,n,o,r)}function La(e,t){return Tr(8390656,8,e,t)}function Dl(e,t){return gi(2048,8,e,t)}function Sc(e,t){return gi(4,2,e,t)}function Ec(e,t){return gi(4,4,e,t)}function zc(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Dc(e,t,n){return n=n!=null?n.concat([e]):null,gi(4,4,zc.bind(null,t,e),n)}function Ll(){}function Lc(e,t){var n=Ee();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Sl(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function _c(e,t){var n=Ee();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Sl(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Tc(e,t,n){return _t&21?(Pe(n,t)||(n=Bs(),W.lanes|=n,Tt|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,he=!0),e.memoizedState=n)}function ph(e,t){var n=R;R=n!==0&&4>n?n:4,e(!0);var r=Gi.transition;Gi.transition={};try{e(!1),t()}finally{R=n,Gi.transition=r}}function Mc(){return Ee().memoizedState}function hh(e,t,n){var r=ht(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Pc(e))Ac(t,n);else if(n=gc(e,t,n,r),n!==null){var i=ce();Me(n,e,r,i),Rc(n,t,r)}}function fh(e,t,n){var r=ht(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Pc(e))Ac(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var a=t.lastRenderedState,s=o(a,n);if(i.hasEagerState=!0,i.eagerState=s,Pe(s,a)){var c=t.interleaved;c===null?(i.next=i,Fl(t)):(i.next=c.next,c.next=i),t.interleaved=i;return}}catch{}finally{}n=gc(e,t,i,r),n!==null&&(i=ce(),Me(n,e,r,i),Rc(n,t,r))}}function Pc(e){var t=e.alternate;return e===W||t!==null&&t===W}function Ac(e,t){Mn=ti=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Rc(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,sl(e,n)}}var ni={readContext:Se,useCallback:ie,useContext:ie,useEffect:ie,useImperativeHandle:ie,useInsertionEffect:ie,useLayoutEffect:ie,useMemo:ie,useReducer:ie,useRef:ie,useState:ie,useDebugValue:ie,useDeferredValue:ie,useTransition:ie,useMutableSource:ie,useSyncExternalStore:ie,useId:ie,unstable_isNewReconciler:!1},mh={readContext:Se,useCallback:function(e,t){return Be().memoizedState=[e,t===void 0?null:t],e},useContext:Se,useEffect:La,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Tr(4194308,4,zc.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Tr(4194308,4,e,t)},useInsertionEffect:function(e,t){return Tr(4,2,e,t)},useMemo:function(e,t){var n=Be();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Be();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=hh.bind(null,W,e),[r.memoizedState,e]},useRef:function(e){var t=Be();return e={current:e},t.memoizedState=e},useState:Da,useDebugValue:Ll,useDeferredValue:function(e){return Be().memoizedState=e},useTransition:function(){var e=Da(!1),t=e[0];return e=ph.bind(null,e[1]),Be().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=W,i=Be();if(U){if(n===void 0)throw Error(w(407));n=n()}else{if(n=t(),J===null)throw Error(w(349));_t&30||wc(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,La(jc.bind(null,r,o,e),[e]),r.flags|=2048,Jn(9,Fc.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=Be(),t=J.identifierPrefix;if(U){var n=qe,r=Ve;n=(r&~(1<<32-Te(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Xn++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=dh++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},gh={readContext:Se,useCallback:Lc,useContext:Se,useEffect:Dl,useImperativeHandle:Dc,useInsertionEffect:Sc,useLayoutEffect:Ec,useMemo:_c,useReducer:Ki,useRef:Nc,useState:function(){return Ki(Zn)},useDebugValue:Ll,useDeferredValue:function(e){var t=Ee();return Tc(t,Q.memoizedState,e)},useTransition:function(){var e=Ki(Zn)[0],t=Ee().memoizedState;return[e,t]},useMutableSource:yc,useSyncExternalStore:kc,useId:Mc,unstable_isNewReconciler:!1},xh={readContext:Se,useCallback:Lc,useContext:Se,useEffect:Dl,useImperativeHandle:Dc,useInsertionEffect:Sc,useLayoutEffect:Ec,useMemo:_c,useReducer:Qi,useRef:Nc,useState:function(){return Qi(Zn)},useDebugValue:Ll,useDeferredValue:function(e){var t=Ee();return Q===null?t.memoizedState=e:Tc(t,Q.memoizedState,e)},useTransition:function(){var e=Qi(Zn)[0],t=Ee().memoizedState;return[e,t]},useMutableSource:yc,useSyncExternalStore:kc,useId:Mc,unstable_isNewReconciler:!1};function De(e,t){if(e&&e.defaultProps){t=H({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function To(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:H({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var xi={isMounted:function(e){return(e=e._reactInternals)?At(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=ce(),i=ht(e),o=Ge(r,i);o.payload=t,n!=null&&(o.callback=n),t=dt(e,o,i),t!==null&&(Me(t,e,i,r),Lr(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=ce(),i=ht(e),o=Ge(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=dt(e,o,i),t!==null&&(Me(t,e,i,r),Lr(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ce(),r=ht(e),i=Ge(n,r);i.tag=2,t!=null&&(i.callback=t),t=dt(e,i,r),t!==null&&(Me(t,e,r,n),Lr(t,e,r))}};function _a(e,t,n,r,i,o,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,a):t.prototype&&t.prototype.isPureReactComponent?!Vn(n,r)||!Vn(i,o):!0}function Bc(e,t,n){var r=!1,i=gt,o=t.contextType;return typeof o=="object"&&o!==null?o=Se(o):(i=me(t)?Dt:ae.current,r=t.contextTypes,o=(r=r!=null)?an(e,i):gt),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=xi,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function Ta(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&xi.enqueueReplaceState(t,t.state,null)}function Mo(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},jl(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=Se(o):(o=me(t)?Dt:ae.current,i.context=an(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(To(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&xi.enqueueReplaceState(i,i.state,null),Jr(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function dn(e,t){try{var n="",r=t;do n+=Vd(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function Yi(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Po(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var vh=typeof WeakMap=="function"?WeakMap:Map;function Ic(e,t,n){n=Ge(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){ii||(ii=!0,Vo=r),Po(e,t)},n}function Oc(e,t,n){n=Ge(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){Po(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){Po(e,t),typeof r!="function"&&(pt===null?pt=new Set([this]):pt.add(this));var a=t.stack;this.componentDidCatch(t.value,{componentStack:a!==null?a:""})}),n}function Ma(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new vh;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=_h.bind(null,e,t,n),t.then(e,e))}function Pa(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Aa(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Ge(-1,1),t.tag=2,dt(n,t,1))),n.lanes|=1),e)}var yh=Ze.ReactCurrentOwner,he=!1;function se(e,t,n,r){t.child=e===null?mc(t,null,n,r):cn(t,e.child,n,r)}function Ra(e,t,n,r,i){n=n.render;var o=t.ref;return rn(t,i),r=El(e,t,n,r,o,i),n=zl(),e!==null&&!he?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Xe(e,t,i)):(U&&n&&gl(t),t.flags|=1,se(e,t,r,i),t.child)}function Ba(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!Il(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,Uc(e,t,o,r,i)):(e=Rr(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var a=o.memoizedProps;if(n=n.compare,n=n!==null?n:Vn,n(a,r)&&e.ref===t.ref)return Xe(e,t,i)}return t.flags|=1,e=ft(o,r),e.ref=t.ref,e.return=t,t.child=e}function Uc(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(Vn(o,r)&&e.ref===t.ref)if(he=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(he=!0);else return t.lanes=e.lanes,Xe(e,t,i)}return Ao(e,t,n,r,i)}function $c(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},B(Xt,xe),xe|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,B(Xt,xe),xe|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,B(Xt,xe),xe|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,B(Xt,xe),xe|=r;return se(e,t,i,n),t.child}function Wc(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Ao(e,t,n,r,i){var o=me(n)?Dt:ae.current;return o=an(t,o),rn(t,i),n=El(e,t,n,r,o,i),r=zl(),e!==null&&!he?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Xe(e,t,i)):(U&&r&&gl(t),t.flags|=1,se(e,t,n,i),t.child)}function Ia(e,t,n,r,i){if(me(n)){var o=!0;Kr(t)}else o=!1;if(rn(t,i),t.stateNode===null)Mr(e,t),Bc(t,n,r),Mo(t,n,r,i),r=!0;else if(e===null){var a=t.stateNode,s=t.memoizedProps;a.props=s;var c=a.context,d=n.contextType;typeof d=="object"&&d!==null?d=Se(d):(d=me(n)?Dt:ae.current,d=an(t,d));var g=n.getDerivedStateFromProps,f=typeof g=="function"||typeof a.getSnapshotBeforeUpdate=="function";f||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(s!==r||c!==d)&&Ta(t,a,r,d),nt=!1;var m=t.memoizedState;a.state=m,Jr(t,r,a,i),c=t.memoizedState,s!==r||m!==c||fe.current||nt?(typeof g=="function"&&(To(t,n,g,r),c=t.memoizedState),(s=nt||_a(t,n,s,r,m,c,d))?(f||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=c),a.props=r,a.state=c,a.context=d,r=s):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,xc(e,t),s=t.memoizedProps,d=t.type===t.elementType?s:De(t.type,s),a.props=d,f=t.pendingProps,m=a.context,c=n.contextType,typeof c=="object"&&c!==null?c=Se(c):(c=me(n)?Dt:ae.current,c=an(t,c));var k=n.getDerivedStateFromProps;(g=typeof k=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(s!==f||m!==c)&&Ta(t,a,r,c),nt=!1,m=t.memoizedState,a.state=m,Jr(t,r,a,i);var y=t.memoizedState;s!==f||m!==y||fe.current||nt?(typeof k=="function"&&(To(t,n,k,r),y=t.memoizedState),(d=nt||_a(t,n,d,r,m,y,c)||!1)?(g||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,y,c),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,y,c)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=y),a.props=r,a.state=y,a.context=c,r=d):(typeof a.componentDidUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),r=!1)}return Ro(e,t,n,r,o,i)}function Ro(e,t,n,r,i,o){Wc(e,t);var a=(t.flags&128)!==0;if(!r&&!a)return i&&ba(t,n,!1),Xe(e,t,o);r=t.stateNode,yh.current=t;var s=a&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&a?(t.child=cn(t,e.child,null,o),t.child=cn(t,null,s,o)):se(e,t,s,o),t.memoizedState=r.state,i&&ba(t,n,!0),t.child}function Hc(e){var t=e.stateNode;t.pendingContext?ja(e,t.pendingContext,t.pendingContext!==t.context):t.context&&ja(e,t.context,!1),bl(e,t.containerInfo)}function Oa(e,t,n,r,i){return sn(),vl(i),t.flags|=256,se(e,t,n,r),t.child}var Bo={dehydrated:null,treeContext:null,retryLane:0};function Io(e){return{baseLanes:e,cachePool:null,transitions:null}}function Vc(e,t,n){var r=t.pendingProps,i=$.current,o=!1,a=(t.flags&128)!==0,s;if((s=a)||(s=e!==null&&e.memoizedState===null?!1:(i&2)!==0),s?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),B($,i&1),e===null)return Lo(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(a=r.children,e=r.fallback,o?(r=t.mode,o=t.child,a={mode:"hidden",children:a},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=a):o=ki(a,r,0,null),e=zt(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=Io(n),t.memoizedState=Bo,e):_l(t,a));if(i=e.memoizedState,i!==null&&(s=i.dehydrated,s!==null))return kh(e,t,a,r,s,i,n);if(o){o=r.fallback,a=t.mode,i=e.child,s=i.sibling;var c={mode:"hidden",children:r.children};return!(a&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=c,t.deletions=null):(r=ft(i,c),r.subtreeFlags=i.subtreeFlags&14680064),s!==null?o=ft(s,o):(o=zt(o,a,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,a=e.child.memoizedState,a=a===null?Io(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},o.memoizedState=a,o.childLanes=e.childLanes&~n,t.memoizedState=Bo,r}return o=e.child,e=o.sibling,r=ft(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function _l(e,t){return t=ki({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Fr(e,t,n,r){return r!==null&&vl(r),cn(t,e.child,null,n),e=_l(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function kh(e,t,n,r,i,o,a){if(n)return t.flags&256?(t.flags&=-257,r=Yi(Error(w(422))),Fr(e,t,a,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=ki({mode:"visible",children:r.children},i,0,null),o=zt(o,i,a,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&cn(t,e.child,null,a),t.child.memoizedState=Io(a),t.memoizedState=Bo,o);if(!(t.mode&1))return Fr(e,t,a,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var s=r.dgst;return r=s,o=Error(w(419)),r=Yi(o,r,void 0),Fr(e,t,a,r)}if(s=(a&e.childLanes)!==0,he||s){if(r=J,r!==null){switch(a&-a){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|a)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,Ye(e,i),Me(r,e,i,-1))}return Bl(),r=Yi(Error(w(421))),Fr(e,t,a,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=Th.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,ve=ut(i.nextSibling),ye=t,U=!0,_e=null,e!==null&&(je[be++]=Ve,je[be++]=qe,je[be++]=Lt,Ve=e.id,qe=e.overflow,Lt=t),t=_l(t,r.children),t.flags|=4096,t)}function Ua(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),_o(e.return,t,n)}function Xi(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function qc(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(se(e,t,r.children,n),r=$.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Ua(e,n,t);else if(e.tag===19)Ua(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(B($,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&ei(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Xi(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&ei(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Xi(t,!0,n,null,o);break;case"together":Xi(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Mr(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Xe(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Tt|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(w(153));if(t.child!==null){for(e=t.child,n=ft(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=ft(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function wh(e,t,n){switch(t.tag){case 3:Hc(t),sn();break;case 5:vc(t);break;case 1:me(t.type)&&Kr(t);break;case 4:bl(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;B(Xr,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(B($,$.current&1),t.flags|=128,null):n&t.child.childLanes?Vc(e,t,n):(B($,$.current&1),e=Xe(e,t,n),e!==null?e.sibling:null);B($,$.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return qc(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),B($,$.current),r)break;return null;case 22:case 23:return t.lanes=0,$c(e,t,n)}return Xe(e,t,n)}var Gc,Oo,Kc,Qc;Gc=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Oo=function(){};Kc=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,St(Ue.current);var o=null;switch(n){case"input":i=ao(e,i),r=ao(e,r),o=[];break;case"select":i=H({},i,{value:void 0}),r=H({},r,{value:void 0}),o=[];break;case"textarea":i=uo(e,i),r=uo(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=qr)}ho(n,r);var a;n=null;for(d in i)if(!r.hasOwnProperty(d)&&i.hasOwnProperty(d)&&i[d]!=null)if(d==="style"){var s=i[d];for(a in s)s.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(Bn.hasOwnProperty(d)?o||(o=[]):(o=o||[]).push(d,null));for(d in r){var c=r[d];if(s=i!=null?i[d]:void 0,r.hasOwnProperty(d)&&c!==s&&(c!=null||s!=null))if(d==="style")if(s){for(a in s)!s.hasOwnProperty(a)||c&&c.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in c)c.hasOwnProperty(a)&&s[a]!==c[a]&&(n||(n={}),n[a]=c[a])}else n||(o||(o=[]),o.push(d,n)),n=c;else d==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,s=s?s.__html:void 0,c!=null&&s!==c&&(o=o||[]).push(d,c)):d==="children"?typeof c!="string"&&typeof c!="number"||(o=o||[]).push(d,""+c):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(Bn.hasOwnProperty(d)?(c!=null&&d==="onScroll"&&I("scroll",e),o||s===c||(o=[])):(o=o||[]).push(d,c))}n&&(o=o||[]).push("style",n);var d=o;(t.updateQueue=d)&&(t.flags|=4)}};Qc=function(e,t,n,r){n!==r&&(t.flags|=4)};function jn(e,t){if(!U)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function oe(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Fh(e,t,n){var r=t.pendingProps;switch(xl(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return oe(t),null;case 1:return me(t.type)&&Gr(),oe(t),null;case 3:return r=t.stateNode,un(),O(fe),O(ae),Nl(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(kr(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,_e!==null&&(Ko(_e),_e=null))),Oo(e,t),oe(t),null;case 5:Cl(t);var i=St(Yn.current);if(n=t.type,e!==null&&t.stateNode!=null)Kc(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(w(166));return oe(t),null}if(e=St(Ue.current),kr(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[Ie]=t,r[Kn]=o,e=(t.mode&1)!==0,n){case"dialog":I("cancel",r),I("close",r);break;case"iframe":case"object":case"embed":I("load",r);break;case"video":case"audio":for(i=0;i<En.length;i++)I(En[i],r);break;case"source":I("error",r);break;case"img":case"image":case"link":I("error",r),I("load",r);break;case"details":I("toggle",r);break;case"input":Yl(r,o),I("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},I("invalid",r);break;case"textarea":Zl(r,o),I("invalid",r)}ho(n,o),i=null;for(var a in o)if(o.hasOwnProperty(a)){var s=o[a];a==="children"?typeof s=="string"?r.textContent!==s&&(o.suppressHydrationWarning!==!0&&yr(r.textContent,s,e),i=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(o.suppressHydrationWarning!==!0&&yr(r.textContent,s,e),i=["children",""+s]):Bn.hasOwnProperty(a)&&s!=null&&a==="onScroll"&&I("scroll",r)}switch(n){case"input":dr(r),Xl(r,o,!0);break;case"textarea":dr(r),Jl(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=qr)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{a=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=js(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=a.createElement(n,{is:r.is}):(e=a.createElement(n),n==="select"&&(a=e,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):e=a.createElementNS(e,n),e[Ie]=t,e[Kn]=r,Gc(e,t,!1,!1),t.stateNode=e;e:{switch(a=fo(n,r),n){case"dialog":I("cancel",e),I("close",e),i=r;break;case"iframe":case"object":case"embed":I("load",e),i=r;break;case"video":case"audio":for(i=0;i<En.length;i++)I(En[i],e);i=r;break;case"source":I("error",e),i=r;break;case"img":case"image":case"link":I("error",e),I("load",e),i=r;break;case"details":I("toggle",e),i=r;break;case"input":Yl(e,r),i=ao(e,r),I("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=H({},r,{value:void 0}),I("invalid",e);break;case"textarea":Zl(e,r),i=uo(e,r),I("invalid",e);break;default:i=r}ho(n,i),s=i;for(o in s)if(s.hasOwnProperty(o)){var c=s[o];o==="style"?Ns(e,c):o==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&bs(e,c)):o==="children"?typeof c=="string"?(n!=="textarea"||c!=="")&&In(e,c):typeof c=="number"&&In(e,""+c):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Bn.hasOwnProperty(o)?c!=null&&o==="onScroll"&&I("scroll",e):c!=null&&nl(e,o,c,a))}switch(n){case"input":dr(e),Xl(e,r,!1);break;case"textarea":dr(e),Jl(e);break;case"option":r.value!=null&&e.setAttribute("value",""+mt(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?Jt(e,!!r.multiple,o,!1):r.defaultValue!=null&&Jt(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=qr)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return oe(t),null;case 6:if(e&&t.stateNode!=null)Qc(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(w(166));if(n=St(Yn.current),St(Ue.current),kr(t)){if(r=t.stateNode,n=t.memoizedProps,r[Ie]=t,(o=r.nodeValue!==n)&&(e=ye,e!==null))switch(e.tag){case 3:yr(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&yr(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Ie]=t,t.stateNode=r}return oe(t),null;case 13:if(O($),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(U&&ve!==null&&t.mode&1&&!(t.flags&128))hc(),sn(),t.flags|=98560,o=!1;else if(o=kr(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(w(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(w(317));o[Ie]=t}else sn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;oe(t),o=!1}else _e!==null&&(Ko(_e),_e=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||$.current&1?Y===0&&(Y=3):Bl())),t.updateQueue!==null&&(t.flags|=4),oe(t),null);case 4:return un(),Oo(e,t),e===null&&qn(t.stateNode.containerInfo),oe(t),null;case 10:return wl(t.type._context),oe(t),null;case 17:return me(t.type)&&Gr(),oe(t),null;case 19:if(O($),o=t.memoizedState,o===null)return oe(t),null;if(r=(t.flags&128)!==0,a=o.rendering,a===null)if(r)jn(o,!1);else{if(Y!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(a=ei(e),a!==null){for(t.flags|=128,jn(o,!1),r=a.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,a=o.alternate,a===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=a.childLanes,o.lanes=a.lanes,o.child=a.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=a.memoizedProps,o.memoizedState=a.memoizedState,o.updateQueue=a.updateQueue,o.type=a.type,e=a.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return B($,$.current&1|2),t.child}e=e.sibling}o.tail!==null&&G()>pn&&(t.flags|=128,r=!0,jn(o,!1),t.lanes=4194304)}else{if(!r)if(e=ei(a),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),jn(o,!0),o.tail===null&&o.tailMode==="hidden"&&!a.alternate&&!U)return oe(t),null}else 2*G()-o.renderingStartTime>pn&&n!==1073741824&&(t.flags|=128,r=!0,jn(o,!1),t.lanes=4194304);o.isBackwards?(a.sibling=t.child,t.child=a):(n=o.last,n!==null?n.sibling=a:t.child=a,o.last=a)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=G(),t.sibling=null,n=$.current,B($,r?n&1|2:n&1),t):(oe(t),null);case 22:case 23:return Rl(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?xe&1073741824&&(oe(t),t.subtreeFlags&6&&(t.flags|=8192)):oe(t),null;case 24:return null;case 25:return null}throw Error(w(156,t.tag))}function jh(e,t){switch(xl(t),t.tag){case 1:return me(t.type)&&Gr(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return un(),O(fe),O(ae),Nl(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Cl(t),null;case 13:if(O($),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(w(340));sn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return O($),null;case 4:return un(),null;case 10:return wl(t.type._context),null;case 22:case 23:return Rl(),null;case 24:return null;default:return null}}var jr=!1,le=!1,bh=typeof WeakSet=="function"?WeakSet:Set,N=null;function Yt(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){V(e,t,r)}else n.current=null}function Uo(e,t,n){try{n()}catch(r){V(e,t,r)}}var $a=!1;function Ch(e,t){if(bo=Wr,e=ec(),ml(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var a=0,s=-1,c=-1,d=0,g=0,f=e,m=null;t:for(;;){for(var k;f!==n||i!==0&&f.nodeType!==3||(s=a+i),f!==o||r!==0&&f.nodeType!==3||(c=a+r),f.nodeType===3&&(a+=f.nodeValue.length),(k=f.firstChild)!==null;)m=f,f=k;for(;;){if(f===e)break t;if(m===n&&++d===i&&(s=a),m===o&&++g===r&&(c=a),(k=f.nextSibling)!==null)break;f=m,m=f.parentNode}f=k}n=s===-1||c===-1?null:{start:s,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(Co={focusedElem:e,selectionRange:n},Wr=!1,N=t;N!==null;)if(t=N,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,N=e;else for(;N!==null;){t=N;try{var y=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var v=y.memoizedProps,F=y.memoizedState,p=t.stateNode,u=p.getSnapshotBeforeUpdate(t.elementType===t.type?v:De(t.type,v),F);p.__reactInternalSnapshotBeforeUpdate=u}break;case 3:var h=t.stateNode.containerInfo;h.nodeType===1?h.textContent="":h.nodeType===9&&h.documentElement&&h.removeChild(h.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(w(163))}}catch(x){V(t,t.return,x)}if(e=t.sibling,e!==null){e.return=t.return,N=e;break}N=t.return}return y=$a,$a=!1,y}function Pn(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&Uo(t,n,o)}i=i.next}while(i!==r)}}function vi(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function $o(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Yc(e){var t=e.alternate;t!==null&&(e.alternate=null,Yc(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Ie],delete t[Kn],delete t[Eo],delete t[ah],delete t[sh])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Xc(e){return e.tag===5||e.tag===3||e.tag===4}function Wa(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Xc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Wo(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=qr));else if(r!==4&&(e=e.child,e!==null))for(Wo(e,t,n),e=e.sibling;e!==null;)Wo(e,t,n),e=e.sibling}function Ho(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Ho(e,t,n),e=e.sibling;e!==null;)Ho(e,t,n),e=e.sibling}var ee=null,Le=!1;function et(e,t,n){for(n=n.child;n!==null;)Zc(e,t,n),n=n.sibling}function Zc(e,t,n){if(Oe&&typeof Oe.onCommitFiberUnmount=="function")try{Oe.onCommitFiberUnmount(ui,n)}catch{}switch(n.tag){case 5:le||Yt(n,t);case 6:var r=ee,i=Le;ee=null,et(e,t,n),ee=r,Le=i,ee!==null&&(Le?(e=ee,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):ee.removeChild(n.stateNode));break;case 18:ee!==null&&(Le?(e=ee,n=n.stateNode,e.nodeType===8?Hi(e.parentNode,n):e.nodeType===1&&Hi(e,n),Wn(e)):Hi(ee,n.stateNode));break;case 4:r=ee,i=Le,ee=n.stateNode.containerInfo,Le=!0,et(e,t,n),ee=r,Le=i;break;case 0:case 11:case 14:case 15:if(!le&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,a=o.destroy;o=o.tag,a!==void 0&&(o&2||o&4)&&Uo(n,t,a),i=i.next}while(i!==r)}et(e,t,n);break;case 1:if(!le&&(Yt(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){V(n,t,s)}et(e,t,n);break;case 21:et(e,t,n);break;case 22:n.mode&1?(le=(r=le)||n.memoizedState!==null,et(e,t,n),le=r):et(e,t,n);break;default:et(e,t,n)}}function Ha(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new bh),t.forEach(function(r){var i=Mh.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function ze(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,a=t,s=a;e:for(;s!==null;){switch(s.tag){case 5:ee=s.stateNode,Le=!1;break e;case 3:ee=s.stateNode.containerInfo,Le=!0;break e;case 4:ee=s.stateNode.containerInfo,Le=!0;break e}s=s.return}if(ee===null)throw Error(w(160));Zc(o,a,i),ee=null,Le=!1;var c=i.alternate;c!==null&&(c.return=null),i.return=null}catch(d){V(i,t,d)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Jc(t,e),t=t.sibling}function Jc(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(ze(t,e),Re(e),r&4){try{Pn(3,e,e.return),vi(3,e)}catch(v){V(e,e.return,v)}try{Pn(5,e,e.return)}catch(v){V(e,e.return,v)}}break;case 1:ze(t,e),Re(e),r&512&&n!==null&&Yt(n,n.return);break;case 5:if(ze(t,e),Re(e),r&512&&n!==null&&Yt(n,n.return),e.flags&32){var i=e.stateNode;try{In(i,"")}catch(v){V(e,e.return,v)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,a=n!==null?n.memoizedProps:o,s=e.type,c=e.updateQueue;if(e.updateQueue=null,c!==null)try{s==="input"&&o.type==="radio"&&o.name!=null&&ws(i,o),fo(s,a);var d=fo(s,o);for(a=0;a<c.length;a+=2){var g=c[a],f=c[a+1];g==="style"?Ns(i,f):g==="dangerouslySetInnerHTML"?bs(i,f):g==="children"?In(i,f):nl(i,g,f,d)}switch(s){case"input":so(i,o);break;case"textarea":Fs(i,o);break;case"select":var m=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var k=o.value;k!=null?Jt(i,!!o.multiple,k,!1):m!==!!o.multiple&&(o.defaultValue!=null?Jt(i,!!o.multiple,o.defaultValue,!0):Jt(i,!!o.multiple,o.multiple?[]:"",!1))}i[Kn]=o}catch(v){V(e,e.return,v)}}break;case 6:if(ze(t,e),Re(e),r&4){if(e.stateNode===null)throw Error(w(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(v){V(e,e.return,v)}}break;case 3:if(ze(t,e),Re(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Wn(t.containerInfo)}catch(v){V(e,e.return,v)}break;case 4:ze(t,e),Re(e);break;case 13:ze(t,e),Re(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(Pl=G())),r&4&&Ha(e);break;case 22:if(g=n!==null&&n.memoizedState!==null,e.mode&1?(le=(d=le)||g,ze(t,e),le=d):ze(t,e),Re(e),r&8192){if(d=e.memoizedState!==null,(e.stateNode.isHidden=d)&&!g&&e.mode&1)for(N=e,g=e.child;g!==null;){for(f=N=g;N!==null;){switch(m=N,k=m.child,m.tag){case 0:case 11:case 14:case 15:Pn(4,m,m.return);break;case 1:Yt(m,m.return);var y=m.stateNode;if(typeof y.componentWillUnmount=="function"){r=m,n=m.return;try{t=r,y.props=t.memoizedProps,y.state=t.memoizedState,y.componentWillUnmount()}catch(v){V(r,n,v)}}break;case 5:Yt(m,m.return);break;case 22:if(m.memoizedState!==null){qa(f);continue}}k!==null?(k.return=m,N=k):qa(f)}g=g.sibling}e:for(g=null,f=e;;){if(f.tag===5){if(g===null){g=f;try{i=f.stateNode,d?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(s=f.stateNode,c=f.memoizedProps.style,a=c!=null&&c.hasOwnProperty("display")?c.display:null,s.style.display=Cs("display",a))}catch(v){V(e,e.return,v)}}}else if(f.tag===6){if(g===null)try{f.stateNode.nodeValue=d?"":f.memoizedProps}catch(v){V(e,e.return,v)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===e)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;f.sibling===null;){if(f.return===null||f.return===e)break e;g===f&&(g=null),f=f.return}g===f&&(g=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:ze(t,e),Re(e),r&4&&Ha(e);break;case 21:break;default:ze(t,e),Re(e)}}function Re(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Xc(n)){var r=n;break e}n=n.return}throw Error(w(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(In(i,""),r.flags&=-33);var o=Wa(e);Ho(e,o,i);break;case 3:case 4:var a=r.stateNode.containerInfo,s=Wa(e);Wo(e,s,a);break;default:throw Error(w(161))}}catch(c){V(e,e.return,c)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Nh(e,t,n){N=e,eu(e)}function eu(e,t,n){for(var r=(e.mode&1)!==0;N!==null;){var i=N,o=i.child;if(i.tag===22&&r){var a=i.memoizedState!==null||jr;if(!a){var s=i.alternate,c=s!==null&&s.memoizedState!==null||le;s=jr;var d=le;if(jr=a,(le=c)&&!d)for(N=i;N!==null;)a=N,c=a.child,a.tag===22&&a.memoizedState!==null?Ga(i):c!==null?(c.return=a,N=c):Ga(i);for(;o!==null;)N=o,eu(o),o=o.sibling;N=i,jr=s,le=d}Va(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,N=o):Va(e)}}function Va(e){for(;N!==null;){var t=N;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:le||vi(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!le)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:De(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&za(t,o,r);break;case 3:var a=t.updateQueue;if(a!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}za(t,a,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var c=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&n.focus();break;case"img":c.src&&(n.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var d=t.alternate;if(d!==null){var g=d.memoizedState;if(g!==null){var f=g.dehydrated;f!==null&&Wn(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(w(163))}le||t.flags&512&&$o(t)}catch(m){V(t,t.return,m)}}if(t===e){N=null;break}if(n=t.sibling,n!==null){n.return=t.return,N=n;break}N=t.return}}function qa(e){for(;N!==null;){var t=N;if(t===e){N=null;break}var n=t.sibling;if(n!==null){n.return=t.return,N=n;break}N=t.return}}function Ga(e){for(;N!==null;){var t=N;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{vi(4,t)}catch(c){V(t,n,c)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(c){V(t,i,c)}}var o=t.return;try{$o(t)}catch(c){V(t,o,c)}break;case 5:var a=t.return;try{$o(t)}catch(c){V(t,a,c)}}}catch(c){V(t,t.return,c)}if(t===e){N=null;break}var s=t.sibling;if(s!==null){s.return=t.return,N=s;break}N=t.return}}var Sh=Math.ceil,ri=Ze.ReactCurrentDispatcher,Tl=Ze.ReactCurrentOwner,Ne=Ze.ReactCurrentBatchConfig,A=0,J=null,K=null,te=0,xe=0,Xt=vt(0),Y=0,er=null,Tt=0,yi=0,Ml=0,An=null,pe=null,Pl=0,pn=1/0,We=null,ii=!1,Vo=null,pt=null,br=!1,lt=null,oi=0,Rn=0,qo=null,Pr=-1,Ar=0;function ce(){return A&6?G():Pr!==-1?Pr:Pr=G()}function ht(e){return e.mode&1?A&2&&te!==0?te&-te:uh.transition!==null?(Ar===0&&(Ar=Bs()),Ar):(e=R,e!==0||(e=window.event,e=e===void 0?16:Vs(e.type)),e):1}function Me(e,t,n,r){if(50<Rn)throw Rn=0,qo=null,Error(w(185));rr(e,n,r),(!(A&2)||e!==J)&&(e===J&&(!(A&2)&&(yi|=n),Y===4&&it(e,te)),ge(e,r),n===1&&A===0&&!(t.mode&1)&&(pn=G()+500,mi&&yt()))}function ge(e,t){var n=e.callbackNode;up(e,t);var r=$r(e,e===J?te:0);if(r===0)n!==null&&na(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&na(n),t===1)e.tag===0?ch(Ka.bind(null,e)):uc(Ka.bind(null,e)),oh(function(){!(A&6)&&yt()}),n=null;else{switch(Is(r)){case 1:n=al;break;case 4:n=As;break;case 16:n=Ur;break;case 536870912:n=Rs;break;default:n=Ur}n=su(n,tu.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function tu(e,t){if(Pr=-1,Ar=0,A&6)throw Error(w(327));var n=e.callbackNode;if(on()&&e.callbackNode!==n)return null;var r=$r(e,e===J?te:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=li(e,r);else{t=r;var i=A;A|=2;var o=ru();(J!==e||te!==t)&&(We=null,pn=G()+500,Et(e,t));do try{Dh();break}catch(s){nu(e,s)}while(!0);kl(),ri.current=o,A=i,K!==null?t=0:(J=null,te=0,t=Y)}if(t!==0){if(t===2&&(i=yo(e),i!==0&&(r=i,t=Go(e,i))),t===1)throw n=er,Et(e,0),it(e,r),ge(e,G()),n;if(t===6)it(e,r);else{if(i=e.current.alternate,!(r&30)&&!Eh(i)&&(t=li(e,r),t===2&&(o=yo(e),o!==0&&(r=o,t=Go(e,o))),t===1))throw n=er,Et(e,0),it(e,r),ge(e,G()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(w(345));case 2:bt(e,pe,We);break;case 3:if(it(e,r),(r&130023424)===r&&(t=Pl+500-G(),10<t)){if($r(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){ce(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=So(bt.bind(null,e,pe,We),t);break}bt(e,pe,We);break;case 4:if(it(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var a=31-Te(r);o=1<<a,a=t[a],a>i&&(i=a),r&=~o}if(r=i,r=G()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Sh(r/1960))-r,10<r){e.timeoutHandle=So(bt.bind(null,e,pe,We),r);break}bt(e,pe,We);break;case 5:bt(e,pe,We);break;default:throw Error(w(329))}}}return ge(e,G()),e.callbackNode===n?tu.bind(null,e):null}function Go(e,t){var n=An;return e.current.memoizedState.isDehydrated&&(Et(e,t).flags|=256),e=li(e,t),e!==2&&(t=pe,pe=n,t!==null&&Ko(t)),e}function Ko(e){pe===null?pe=e:pe.push.apply(pe,e)}function Eh(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!Pe(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function it(e,t){for(t&=~Ml,t&=~yi,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Te(t),r=1<<n;e[n]=-1,t&=~r}}function Ka(e){if(A&6)throw Error(w(327));on();var t=$r(e,0);if(!(t&1))return ge(e,G()),null;var n=li(e,t);if(e.tag!==0&&n===2){var r=yo(e);r!==0&&(t=r,n=Go(e,r))}if(n===1)throw n=er,Et(e,0),it(e,t),ge(e,G()),n;if(n===6)throw Error(w(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,bt(e,pe,We),ge(e,G()),null}function Al(e,t){var n=A;A|=1;try{return e(t)}finally{A=n,A===0&&(pn=G()+500,mi&&yt())}}function Mt(e){lt!==null&&lt.tag===0&&!(A&6)&&on();var t=A;A|=1;var n=Ne.transition,r=R;try{if(Ne.transition=null,R=1,e)return e()}finally{R=r,Ne.transition=n,A=t,!(A&6)&&yt()}}function Rl(){xe=Xt.current,O(Xt)}function Et(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,ih(n)),K!==null)for(n=K.return;n!==null;){var r=n;switch(xl(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Gr();break;case 3:un(),O(fe),O(ae),Nl();break;case 5:Cl(r);break;case 4:un();break;case 13:O($);break;case 19:O($);break;case 10:wl(r.type._context);break;case 22:case 23:Rl()}n=n.return}if(J=e,K=e=ft(e.current,null),te=xe=t,Y=0,er=null,Ml=yi=Tt=0,pe=An=null,Nt!==null){for(t=0;t<Nt.length;t++)if(n=Nt[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var a=o.next;o.next=i,r.next=a}n.pending=r}Nt=null}return e}function nu(e,t){do{var n=K;try{if(kl(),_r.current=ni,ti){for(var r=W.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}ti=!1}if(_t=0,Z=Q=W=null,Mn=!1,Xn=0,Tl.current=null,n===null||n.return===null){Y=1,er=t,K=null;break}e:{var o=e,a=n.return,s=n,c=t;if(t=te,s.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var d=c,g=s,f=g.tag;if(!(g.mode&1)&&(f===0||f===11||f===15)){var m=g.alternate;m?(g.updateQueue=m.updateQueue,g.memoizedState=m.memoizedState,g.lanes=m.lanes):(g.updateQueue=null,g.memoizedState=null)}var k=Pa(a);if(k!==null){k.flags&=-257,Aa(k,a,s,o,t),k.mode&1&&Ma(o,d,t),t=k,c=d;var y=t.updateQueue;if(y===null){var v=new Set;v.add(c),t.updateQueue=v}else y.add(c);break e}else{if(!(t&1)){Ma(o,d,t),Bl();break e}c=Error(w(426))}}else if(U&&s.mode&1){var F=Pa(a);if(F!==null){!(F.flags&65536)&&(F.flags|=256),Aa(F,a,s,o,t),vl(dn(c,s));break e}}o=c=dn(c,s),Y!==4&&(Y=2),An===null?An=[o]:An.push(o),o=a;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var p=Ic(o,c,t);Ea(o,p);break e;case 1:s=c;var u=o.type,h=o.stateNode;if(!(o.flags&128)&&(typeof u.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(pt===null||!pt.has(h)))){o.flags|=65536,t&=-t,o.lanes|=t;var x=Oc(o,s,t);Ea(o,x);break e}}o=o.return}while(o!==null)}ou(n)}catch(j){t=j,K===n&&n!==null&&(K=n=n.return);continue}break}while(!0)}function ru(){var e=ri.current;return ri.current=ni,e===null?ni:e}function Bl(){(Y===0||Y===3||Y===2)&&(Y=4),J===null||!(Tt&268435455)&&!(yi&268435455)||it(J,te)}function li(e,t){var n=A;A|=2;var r=ru();(J!==e||te!==t)&&(We=null,Et(e,t));do try{zh();break}catch(i){nu(e,i)}while(!0);if(kl(),A=n,ri.current=r,K!==null)throw Error(w(261));return J=null,te=0,Y}function zh(){for(;K!==null;)iu(K)}function Dh(){for(;K!==null&&!tp();)iu(K)}function iu(e){var t=au(e.alternate,e,xe);e.memoizedProps=e.pendingProps,t===null?ou(e):K=t,Tl.current=null}function ou(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=jh(n,t),n!==null){n.flags&=32767,K=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Y=6,K=null;return}}else if(n=Fh(n,t,xe),n!==null){K=n;return}if(t=t.sibling,t!==null){K=t;return}K=t=e}while(t!==null);Y===0&&(Y=5)}function bt(e,t,n){var r=R,i=Ne.transition;try{Ne.transition=null,R=1,Lh(e,t,n,r)}finally{Ne.transition=i,R=r}return null}function Lh(e,t,n,r){do on();while(lt!==null);if(A&6)throw Error(w(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(w(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(dp(e,o),e===J&&(K=J=null,te=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||br||(br=!0,su(Ur,function(){return on(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=Ne.transition,Ne.transition=null;var a=R;R=1;var s=A;A|=4,Tl.current=null,Ch(e,n),Jc(n,e),Xp(Co),Wr=!!bo,Co=bo=null,e.current=n,Nh(n),np(),A=s,R=a,Ne.transition=o}else e.current=n;if(br&&(br=!1,lt=e,oi=i),o=e.pendingLanes,o===0&&(pt=null),op(n.stateNode),ge(e,G()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(ii)throw ii=!1,e=Vo,Vo=null,e;return oi&1&&e.tag!==0&&on(),o=e.pendingLanes,o&1?e===qo?Rn++:(Rn=0,qo=e):Rn=0,yt(),null}function on(){if(lt!==null){var e=Is(oi),t=Ne.transition,n=R;try{if(Ne.transition=null,R=16>e?16:e,lt===null)var r=!1;else{if(e=lt,lt=null,oi=0,A&6)throw Error(w(331));var i=A;for(A|=4,N=e.current;N!==null;){var o=N,a=o.child;if(N.flags&16){var s=o.deletions;if(s!==null){for(var c=0;c<s.length;c++){var d=s[c];for(N=d;N!==null;){var g=N;switch(g.tag){case 0:case 11:case 15:Pn(8,g,o)}var f=g.child;if(f!==null)f.return=g,N=f;else for(;N!==null;){g=N;var m=g.sibling,k=g.return;if(Yc(g),g===d){N=null;break}if(m!==null){m.return=k,N=m;break}N=k}}}var y=o.alternate;if(y!==null){var v=y.child;if(v!==null){y.child=null;do{var F=v.sibling;v.sibling=null,v=F}while(v!==null)}}N=o}}if(o.subtreeFlags&2064&&a!==null)a.return=o,N=a;else e:for(;N!==null;){if(o=N,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Pn(9,o,o.return)}var p=o.sibling;if(p!==null){p.return=o.return,N=p;break e}N=o.return}}var u=e.current;for(N=u;N!==null;){a=N;var h=a.child;if(a.subtreeFlags&2064&&h!==null)h.return=a,N=h;else e:for(a=u;N!==null;){if(s=N,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:vi(9,s)}}catch(j){V(s,s.return,j)}if(s===a){N=null;break e}var x=s.sibling;if(x!==null){x.return=s.return,N=x;break e}N=s.return}}if(A=i,yt(),Oe&&typeof Oe.onPostCommitFiberRoot=="function")try{Oe.onPostCommitFiberRoot(ui,e)}catch{}r=!0}return r}finally{R=n,Ne.transition=t}}return!1}function Qa(e,t,n){t=dn(n,t),t=Ic(e,t,1),e=dt(e,t,1),t=ce(),e!==null&&(rr(e,1,t),ge(e,t))}function V(e,t,n){if(e.tag===3)Qa(e,e,n);else for(;t!==null;){if(t.tag===3){Qa(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(pt===null||!pt.has(r))){e=dn(n,e),e=Oc(t,e,1),t=dt(t,e,1),e=ce(),t!==null&&(rr(t,1,e),ge(t,e));break}}t=t.return}}function _h(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=ce(),e.pingedLanes|=e.suspendedLanes&n,J===e&&(te&n)===n&&(Y===4||Y===3&&(te&130023424)===te&&500>G()-Pl?Et(e,0):Ml|=n),ge(e,t)}function lu(e,t){t===0&&(e.mode&1?(t=fr,fr<<=1,!(fr&130023424)&&(fr=4194304)):t=1);var n=ce();e=Ye(e,t),e!==null&&(rr(e,t,n),ge(e,n))}function Th(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),lu(e,n)}function Mh(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(w(314))}r!==null&&r.delete(t),lu(e,n)}var au;au=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||fe.current)he=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return he=!1,wh(e,t,n);he=!!(e.flags&131072)}else he=!1,U&&t.flags&1048576&&dc(t,Yr,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Mr(e,t),e=t.pendingProps;var i=an(t,ae.current);rn(t,n),i=El(null,t,r,e,i,n);var o=zl();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,me(r)?(o=!0,Kr(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,jl(t),i.updater=xi,t.stateNode=i,i._reactInternals=t,Mo(t,r,e,n),t=Ro(null,t,r,!0,o,n)):(t.tag=0,U&&o&&gl(t),se(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Mr(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=Ah(r),e=De(r,e),i){case 0:t=Ao(null,t,r,e,n);break e;case 1:t=Ia(null,t,r,e,n);break e;case 11:t=Ra(null,t,r,e,n);break e;case 14:t=Ba(null,t,r,De(r.type,e),n);break e}throw Error(w(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:De(r,i),Ao(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:De(r,i),Ia(e,t,r,i,n);case 3:e:{if(Hc(t),e===null)throw Error(w(387));r=t.pendingProps,o=t.memoizedState,i=o.element,xc(e,t),Jr(t,r,null,n);var a=t.memoizedState;if(r=a.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=dn(Error(w(423)),t),t=Oa(e,t,r,n,i);break e}else if(r!==i){i=dn(Error(w(424)),t),t=Oa(e,t,r,n,i);break e}else for(ve=ut(t.stateNode.containerInfo.firstChild),ye=t,U=!0,_e=null,n=mc(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(sn(),r===i){t=Xe(e,t,n);break e}se(e,t,r,n)}t=t.child}return t;case 5:return vc(t),e===null&&Lo(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,a=i.children,No(r,i)?a=null:o!==null&&No(r,o)&&(t.flags|=32),Wc(e,t),se(e,t,a,n),t.child;case 6:return e===null&&Lo(t),null;case 13:return Vc(e,t,n);case 4:return bl(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=cn(t,null,r,n):se(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:De(r,i),Ra(e,t,r,i,n);case 7:return se(e,t,t.pendingProps,n),t.child;case 8:return se(e,t,t.pendingProps.children,n),t.child;case 12:return se(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,a=i.value,B(Xr,r._currentValue),r._currentValue=a,o!==null)if(Pe(o.value,a)){if(o.children===i.children&&!fe.current){t=Xe(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var s=o.dependencies;if(s!==null){a=o.child;for(var c=s.firstContext;c!==null;){if(c.context===r){if(o.tag===1){c=Ge(-1,n&-n),c.tag=2;var d=o.updateQueue;if(d!==null){d=d.shared;var g=d.pending;g===null?c.next=c:(c.next=g.next,g.next=c),d.pending=c}}o.lanes|=n,c=o.alternate,c!==null&&(c.lanes|=n),_o(o.return,n,t),s.lanes|=n;break}c=c.next}}else if(o.tag===10)a=o.type===t.type?null:o.child;else if(o.tag===18){if(a=o.return,a===null)throw Error(w(341));a.lanes|=n,s=a.alternate,s!==null&&(s.lanes|=n),_o(a,n,t),a=o.sibling}else a=o.child;if(a!==null)a.return=o;else for(a=o;a!==null;){if(a===t){a=null;break}if(o=a.sibling,o!==null){o.return=a.return,a=o;break}a=a.return}o=a}se(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,rn(t,n),i=Se(i),r=r(i),t.flags|=1,se(e,t,r,n),t.child;case 14:return r=t.type,i=De(r,t.pendingProps),i=De(r.type,i),Ba(e,t,r,i,n);case 15:return Uc(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:De(r,i),Mr(e,t),t.tag=1,me(r)?(e=!0,Kr(t)):e=!1,rn(t,n),Bc(t,r,i),Mo(t,r,i,n),Ro(null,t,r,!0,e,n);case 19:return qc(e,t,n);case 22:return $c(e,t,n)}throw Error(w(156,t.tag))};function su(e,t){return Ps(e,t)}function Ph(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ce(e,t,n,r){return new Ph(e,t,n,r)}function Il(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Ah(e){if(typeof e=="function")return Il(e)?1:0;if(e!=null){if(e=e.$$typeof,e===il)return 11;if(e===ol)return 14}return 2}function ft(e,t){var n=e.alternate;return n===null?(n=Ce(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Rr(e,t,n,r,i,o){var a=2;if(r=e,typeof e=="function")Il(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case Ut:return zt(n.children,i,o,t);case rl:a=8,i|=8;break;case ro:return e=Ce(12,n,t,i|2),e.elementType=ro,e.lanes=o,e;case io:return e=Ce(13,n,t,i),e.elementType=io,e.lanes=o,e;case oo:return e=Ce(19,n,t,i),e.elementType=oo,e.lanes=o,e;case vs:return ki(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case gs:a=10;break e;case xs:a=9;break e;case il:a=11;break e;case ol:a=14;break e;case tt:a=16,r=null;break e}throw Error(w(130,e==null?e:typeof e,""))}return t=Ce(a,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function zt(e,t,n,r){return e=Ce(7,e,r,t),e.lanes=n,e}function ki(e,t,n,r){return e=Ce(22,e,r,t),e.elementType=vs,e.lanes=n,e.stateNode={isHidden:!1},e}function Zi(e,t,n){return e=Ce(6,e,null,t),e.lanes=n,e}function Ji(e,t,n){return t=Ce(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Rh(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ti(0),this.expirationTimes=Ti(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ti(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Ol(e,t,n,r,i,o,a,s,c){return e=new Rh(e,t,n,s,c),t===1?(t=1,o===!0&&(t|=8)):t=0,o=Ce(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},jl(o),e}function Bh(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ot,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function cu(e){if(!e)return gt;e=e._reactInternals;e:{if(At(e)!==e||e.tag!==1)throw Error(w(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(me(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(w(171))}if(e.tag===1){var n=e.type;if(me(n))return cc(e,n,t)}return t}function uu(e,t,n,r,i,o,a,s,c){return e=Ol(n,r,!0,e,i,o,a,s,c),e.context=cu(null),n=e.current,r=ce(),i=ht(n),o=Ge(r,i),o.callback=t??null,dt(n,o,i),e.current.lanes=i,rr(e,i,r),ge(e,r),e}function wi(e,t,n,r){var i=t.current,o=ce(),a=ht(i);return n=cu(n),t.context===null?t.context=n:t.pendingContext=n,t=Ge(o,a),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=dt(i,t,a),e!==null&&(Me(e,i,a,o),Lr(e,i,a)),a}function ai(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Ya(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Ul(e,t){Ya(e,t),(e=e.alternate)&&Ya(e,t)}function Ih(){return null}var du=typeof reportError=="function"?reportError:function(e){console.error(e)};function $l(e){this._internalRoot=e}Fi.prototype.render=$l.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(w(409));wi(e,t,null,null)};Fi.prototype.unmount=$l.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Mt(function(){wi(null,e,null,null)}),t[Qe]=null}};function Fi(e){this._internalRoot=e}Fi.prototype.unstable_scheduleHydration=function(e){if(e){var t=$s();e={blockedOn:null,target:e,priority:t};for(var n=0;n<rt.length&&t!==0&&t<rt[n].priority;n++);rt.splice(n,0,e),n===0&&Hs(e)}};function Wl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function ji(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Xa(){}function Oh(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var d=ai(a);o.call(d)}}var a=uu(t,r,e,0,null,!1,!1,"",Xa);return e._reactRootContainer=a,e[Qe]=a.current,qn(e.nodeType===8?e.parentNode:e),Mt(),a}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var s=r;r=function(){var d=ai(c);s.call(d)}}var c=Ol(e,0,!1,null,null,!1,!1,"",Xa);return e._reactRootContainer=c,e[Qe]=c.current,qn(e.nodeType===8?e.parentNode:e),Mt(function(){wi(t,c,n,r)}),c}function bi(e,t,n,r,i){var o=n._reactRootContainer;if(o){var a=o;if(typeof i=="function"){var s=i;i=function(){var c=ai(a);s.call(c)}}wi(t,a,e,i)}else a=Oh(n,t,e,i,r);return ai(a)}Os=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Sn(t.pendingLanes);n!==0&&(sl(t,n|1),ge(t,G()),!(A&6)&&(pn=G()+500,yt()))}break;case 13:Mt(function(){var r=Ye(e,1);if(r!==null){var i=ce();Me(r,e,1,i)}}),Ul(e,1)}};cl=function(e){if(e.tag===13){var t=Ye(e,134217728);if(t!==null){var n=ce();Me(t,e,134217728,n)}Ul(e,134217728)}};Us=function(e){if(e.tag===13){var t=ht(e),n=Ye(e,t);if(n!==null){var r=ce();Me(n,e,t,r)}Ul(e,t)}};$s=function(){return R};Ws=function(e,t){var n=R;try{return R=e,t()}finally{R=n}};go=function(e,t,n){switch(t){case"input":if(so(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=fi(r);if(!i)throw Error(w(90));ks(r),so(r,i)}}}break;case"textarea":Fs(e,n);break;case"select":t=n.value,t!=null&&Jt(e,!!n.multiple,t,!1)}};zs=Al;Ds=Mt;var Uh={usingClientEntryPoint:!1,Events:[or,Vt,fi,Ss,Es,Al]},bn={findFiberByHostInstance:Ct,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},$h={bundleType:bn.bundleType,version:bn.version,rendererPackageName:bn.rendererPackageName,rendererConfig:bn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ze.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Ts(e),e===null?null:e.stateNode},findFiberByHostInstance:bn.findFiberByHostInstance||Ih,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Cr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Cr.isDisabled&&Cr.supportsFiber)try{ui=Cr.inject($h),Oe=Cr}catch{}}we.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Uh;we.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Wl(t))throw Error(w(200));return Bh(e,t,null,n)};we.createRoot=function(e,t){if(!Wl(e))throw Error(w(299));var n=!1,r="",i=du;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Ol(e,1,!1,null,null,n,!1,r,i),e[Qe]=t.current,qn(e.nodeType===8?e.parentNode:e),new $l(t)};we.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(w(188)):(e=Object.keys(e).join(","),Error(w(268,e)));return e=Ts(t),e=e===null?null:e.stateNode,e};we.flushSync=function(e){return Mt(e)};we.hydrate=function(e,t,n){if(!ji(t))throw Error(w(200));return bi(null,e,t,!0,n)};we.hydrateRoot=function(e,t,n){if(!Wl(e))throw Error(w(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",a=du;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),t=uu(t,null,e,1,n??null,i,!1,o,a),e[Qe]=t.current,qn(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Fi(t)};we.render=function(e,t,n){if(!ji(t))throw Error(w(200));return bi(null,e,t,!1,n)};we.unmountComponentAtNode=function(e){if(!ji(e))throw Error(w(40));return e._reactRootContainer?(Mt(function(){bi(null,null,e,!1,function(){e._reactRootContainer=null,e[Qe]=null})}),!0):!1};we.unstable_batchedUpdates=Al;we.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!ji(n))throw Error(w(200));if(e==null||e._reactInternals===void 0)throw Error(w(38));return bi(e,t,n,!1,r)};we.version="18.3.1-next-f1338f8080-20240426";function pu(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(pu)}catch(e){console.error(e)}}pu(),ps.exports=we;var Wh=ps.exports,Za=Wh;to.createRoot=Za.createRoot,to.hydrateRoot=Za.hydrateRoot;/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hh=e=>e==null?void 0:e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function Vh(e,t,n=[]){if(t==null)throw new Error("[lucide]: iconNode is required when icon name is used");return{name:Hh(e),size:24,node:t,...n.length>0?{aliases:n}:{}}}/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qh=e=>{let t="",n=!1;for(const r of e){if(r==="-"||r==="_"||r<=" "){n=t.length>0;continue}t.length===0?t+=r.toLowerCase():t+=n?r.toUpperCase():r,n=!1}return t};/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gh=e=>{const t=qh(e);return t.charAt(0).toUpperCase()+t.slice(1)};/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qo=(...e)=>e.filter((t,n,r)=>!!t&&t.trim()!==""&&r.indexOf(t)===n).join(" ").trim();/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ft={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function eo(e){return e!=null}function Kh(e,t={}){var m,k;const n=t.attributeNames??{},r=y=>n[y]??y,i=e.size??e.width??Ft.width,o=e.size??e.height??Ft.height,a=((m=e.aliases)==null?void 0:m.filter(y=>typeof y=="string"&&y.trim()!=="").map(y=>`lucide-${y}`))??[],s=[...e.name?[`lucide-${e.name}`]:[],...a],c=((k=t.className)==null?void 0:k.split(" ").filter(Boolean))??[],d=t.includeDefaultClasses===!1?Qo(...c):Qo("lucide",...s,...c),g=t.absoluteStrokeWidth?Number(t.strokeWidth??Ft["stroke-width"])*Number(e.size??e.width??Ft.width)/Number(t.size??t.width??Ft.width):t.strokeWidth??Ft["stroke-width"];return["svg",{...Object.entries(Ft).reduce((y,[v,F])=>(y[r(v)]=F,y),{}),..."color"in t&&t.color&&{[r("stroke")]:t.color},..."size"in t&&eo(t.size)&&{[r("width")]:t.size,[r("height")]:t.size},..."width"in t&&eo(t.width)&&{[r("width")]:t.width},..."height"in t&&eo(t.height)&&{[r("height")]:t.height},[r("stroke-width")]:g,...d&&{[r("class")]:d},[r("viewBox")]:`0 0 ${i} ${o}`,...t.hasA11yProp===!1?{[r("aria-hidden")]:"true"}:{},..."attributes"in t&&t.attributes},e.node.map(y=>{const[v,F,p]=y,u=t.nonScalingStroke?{[r("vector-effect")]:"non-scaling-stroke",...F}:F;return p?[v,u,p]:[v,u]})]}/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function Qh(e,t={}){return Kh(e,{...t,attributeNames:{...t.attributeNames,class:"className","stroke-width":"strokeWidth","stroke-linecap":"strokeLinecap","stroke-linejoin":"strokeLinejoin","vector-effect":"vectorEffect"}})}/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yh=e=>{for(const t in e)if(t.startsWith("aria-")||t==="role"||t==="title")return!0;return!1},Xh=D.createContext({}),Zh=()=>D.useContext(Xh),Jh=D.forwardRef(({color:e,size:t,width:n,height:r,strokeWidth:i,absoluteStrokeWidth:o,nonScalingStroke:a,className:s="",children:c,iconNode:d=[],icon:g={node:d,aliases:[],size:24},...f},m)=>{const{size:k=24,strokeWidth:y=2,absoluteStrokeWidth:v=!1,nonScalingStroke:F=!1,color:p="currentColor",className:u=""}=Zh()??{},h=!!c||Yh(f),[x,j,C=[]]=Qh(g,{color:e??p,width:n??t??k,height:r??t??k,strokeWidth:i??y,absoluteStrokeWidth:o??v,nonScalingStroke:a??F,className:Qo(u,s),hasA11yProp:h,attributes:f});return D.createElement(x,{ref:m,...j},[...C.map(([b,S])=>D.createElement(b,S)),...Array.isArray(c)?c:[c]])});/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function z(e,t=[],n=[]){const r=typeof e=="string"?Vh(e,t,n):e,i=D.forwardRef(({className:o,...a},s)=>D.createElement(Jh,{ref:s,icon:r,className:o,...a}));return r.name&&(i.displayName=Gh(r.name)),i}/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hu={name:"activity",size:24,node:[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]]};hu.node;const ef=z(hu);/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fu={name:"arrow-right",size:24,node:[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]};fu.node;const Ci=z(fu);/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mu={name:"arrow-up",size:24,node:[["path",{d:"m5 12 7-7 7 7",key:"hav0vg"}],["path",{d:"M12 19V5",key:"x0mq9r"}]]};mu.node;const gu=z(mu);/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xu={name:"bug",size:24,node:[["path",{d:"M12 20v-9",key:"1qisl0"}],["path",{d:"M14 7a4 4 0 0 1 4 4v3a6 6 0 0 1-12 0v-3a4 4 0 0 1 4-4z",key:"uouzyp"}],["path",{d:"M14.12 3.88 16 2",key:"qol33r"}],["path",{d:"M21 21a4 4 0 0 0-3.81-4",key:"1b0z45"}],["path",{d:"M21 5a4 4 0 0 1-3.55 3.97",key:"5cxbf6"}],["path",{d:"M22 13h-4",key:"1jl80f"}],["path",{d:"M3 21a4 4 0 0 1 3.81-4",key:"1fjd4g"}],["path",{d:"M3 5a4 4 0 0 0 3.55 3.97",key:"1d7oge"}],["path",{d:"M6 13H2",key:"82j7cp"}],["path",{d:"m8 2 1.88 1.88",key:"fmnt4t"}],["path",{d:"M9 7.13V6a3 3 0 1 1 6 0v1.13",key:"1vgav8"}]]};xu.node;const tf=z(xu);/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vu={name:"check",size:24,node:[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]};vu.node;const nf=z(vu);/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yu={name:"chevron-down",size:24,node:[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]};yu.node;const ku=z(yu);/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wu={name:"chevron-left",size:24,node:[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]};wu.node;const rf=z(wu);/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fu={name:"chevron-right",size:24,node:[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]};Fu.node;const of=z(Fu);/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ju={name:"circle-check-big",size:24,node:[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]],aliases:["check-circle"]};ju.node;const lf=z(ju);/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bu={name:"circle-check",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m16 9-5.5 5.5L8 12",key:"xofnsj"}]],aliases:["check-circle-2"]};bu.node;const Cu=z(bu);/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nu={name:"circle-question-mark",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["path",{d:"M12 17h.01",key:"p32p05"}]],aliases:["help-circle","circle-help"]};Nu.node;const Ja=z(Nu);/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Su={name:"clock",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 6v6l4 2",key:"mmk7yg"}]]};Su.node;const af=z(Su);/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Eu={name:"cloud-upload",size:24,node:[["path",{d:"M12 13v8",key:"1l5pq0"}],["path",{d:"M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242",key:"1pljnt"}],["path",{d:"m8 17 4-4 4 4",key:"1quai1"}]],aliases:["upload-cloud"]};Eu.node;const sf=z(Eu);/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zu={name:"coins",size:24,node:[["path",{d:"M13.744 17.736a6 6 0 1 1-7.48-7.48",key:"bq4yh3"}],["path",{d:"M15 6h1v4",key:"11y1tn"}],["path",{d:"m6.134 14.768.866-.5 2 3.464",key:"17snzx"}],["circle",{cx:"16",cy:"8",r:"6",key:"14bfc9"}]]};zu.node;const cf=z(zu);/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Du={name:"database",size:24,node:[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]]};Du.node;const Lu=z(Du);/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _u={name:"dollar-sign",size:24,node:[["line",{x1:"12",x2:"12",y1:"2",y2:"22",key:"7eqyqh"}],["path",{d:"M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6",key:"1b0p4s"}]]};_u.node;const uf=z(_u);/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tu={name:"file-code-corner",size:24,node:[["path",{d:"M4 12.15V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2h-3.35",key:"1wthlu"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"m5 16-3 3 3 3",key:"331omg"}],["path",{d:"m9 22 3-3-3-3",key:"lsp7cz"}]],aliases:["file-code-2"]};Tu.node;const df=z(Tu);/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mu={name:"file-text",size:24,node:[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]};Mu.node;const Pu=z(Mu);/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Au={name:"flame",size:24,node:[["path",{d:"M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4",key:"1slcih"}]]};Au.node;const pf=z(Au);/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ru={name:"git-pull-request",size:24,node:[["circle",{cx:"18",cy:"18",r:"3",key:"1xkwt0"}],["circle",{cx:"6",cy:"6",r:"3",key:"1lh9wr"}],["path",{d:"M13 6h3a2 2 0 0 1 2 2v7",key:"1yeb86"}],["line",{x1:"6",x2:"6",y1:"9",y2:"21",key:"rroup"}]]};Ru.node;const hf=z(Ru);/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bu={name:"key",size:24,node:[["path",{d:"m2 21 9.6-9.6",key:"9l79m3"}],["path",{d:"m7.5 15.5 2.3 2.3a1 1 0 0 1 0 1.4l-2.1 2.1a1 1 0 0 1-1.4 0L4 19",key:"fw8biw"}],["circle",{cx:"15.5",cy:"7.5",r:"5.5",key:"4wxmhb"}]]};Bu.node;const ff=z(Bu);/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Iu={name:"lightbulb",size:24,node:[["path",{d:"M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",key:"1gvzjb"}],["path",{d:"M9 18h6",key:"x1upvd"}],["path",{d:"M10 22h4",key:"ceow96"}]]};Iu.node;const mf=z(Iu);/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ou={name:"lock",size:24,node:[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]};Ou.node;const gf=z(Ou);/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uu={name:"mail",size:24,node:[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]]};Uu.node;const xf=z(Uu);/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $u={name:"map-pin",size:24,node:[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]};$u.node;const vf=z($u);/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wu={name:"menu",size:24,node:[["path",{d:"M4 5h16",key:"1tepv9"}],["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 19h16",key:"1djgab"}]]};Wu.node;const yf=z(Wu);/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hu={name:"message-circle",size:24,node:[["path",{d:"M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719",key:"1sd12s"}]]};Hu.node;const kf=z(Hu);/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vu={name:"message-square",size:24,node:[["path",{d:"M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z",key:"18887p"}]]};Vu.node;const wf=z(Vu);/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qu={name:"monitor",size:24,node:[["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2",key:"48i651"}],["line",{x1:"8",x2:"16",y1:"21",y2:"21",key:"1svkeh"}],["line",{x1:"12",x2:"12",y1:"17",y2:"21",key:"vw1qmm"}]]};qu.node;const Ff=z(qu);/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gu={name:"octagon-alert",size:24,node:[["path",{d:"M12 16h.01",key:"1drbdi"}],["path",{d:"M12 8v4",key:"1got3b"}],["path",{d:"M15.312 2a2 2 0 0 1 1.414.586l4.688 4.688A2 2 0 0 1 22 8.688v6.624a2 2 0 0 1-.586 1.414l-4.688 4.688a2 2 0 0 1-1.414.586H8.688a2 2 0 0 1-1.414-.586l-4.688-4.688A2 2 0 0 1 2 15.312V8.688a2 2 0 0 1 .586-1.414l4.688-4.688A2 2 0 0 1 8.688 2z",key:"1fd625"}]],aliases:["alert-octagon"]};Gu.node;const Ku=z(Gu);/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qu={name:"palette",size:24,node:[["path",{d:"M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z",key:"e79jfc"}],["circle",{cx:"13.5",cy:"6.5",r:".5",fill:"currentColor",key:"1okk4w"}],["circle",{cx:"17.5",cy:"10.5",r:".5",fill:"currentColor",key:"f64h9f"}],["circle",{cx:"6.5",cy:"12.5",r:".5",fill:"currentColor",key:"qy21gx"}],["circle",{cx:"8.5",cy:"7.5",r:".5",fill:"currentColor",key:"fotxhn"}]]};Qu.node;const jf=z(Qu);/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yu={name:"phone",size:24,node:[["path",{d:"M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",key:"9njp5v"}]]};Yu.node;const Ni=z(Yu);/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xu={name:"refresh-cw",size:24,node:[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]};Xu.node;const Zu=z(Xu);/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ju={name:"rocket",size:24,node:[["path",{d:"M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5",key:"qeys4"}],["path",{d:"M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09",key:"u4xsad"}],["path",{d:"M9 12a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.4 22.4 0 0 1-4 2z",key:"676m9"}],["path",{d:"M9 12H4s.55-3.03 2-4c1.62-1.08 5 .05 5 .05",key:"92ym6u"}]]};Ju.node;const ed=z(Ju);/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const td={name:"scale",size:24,node:[["path",{d:"M12 3v18",key:"108xh3"}],["path",{d:"m19 8 3 8a5 5 0 0 1-6 0zV7",key:"zcdpyk"}],["path",{d:"M3 7h1a17 17 0 0 0 8-2 17 17 0 0 0 8 2h1",key:"1yorad"}],["path",{d:"m5 8 3 8a5 5 0 0 1-6 0zV7",key:"eua70x"}],["path",{d:"M7 21h10",key:"1b0cd5"}]]};td.node;const bf=z(td);/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nd={name:"search",size:24,node:[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]]};nd.node;const Cf=z(nd);/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rd={name:"send",size:24,node:[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]]};rd.node;const es=z(rd);/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const id={name:"settings",size:24,node:[["path",{d:"M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915",key:"1i5ecw"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]};id.node;const Nf=z(id);/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const od={name:"shield-alert",size:24,node:[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"M12 8v4",key:"1got3b"}],["path",{d:"M12 16h.01",key:"1drbdi"}]]};od.node;const Sf=z(od);/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ld={name:"shield-check",size:24,node:[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]};ld.node;const tr=z(ld);/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ad={name:"shield-x",size:24,node:[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m14.5 9.5-5 5",key:"17q4r4"}],["path",{d:"m9.5 9.5 5 5",key:"18nt4w"}]],aliases:["shield-close"]};ad.node;const Ef=z(ad);/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sd={name:"smartphone",size:24,node:[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2",key:"1yt0o3"}],["path",{d:"M12 18h.01",key:"mhygvu"}]]};sd.node;const zf=z(sd);/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cd={name:"sparkles",size:24,node:[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],aliases:["stars"]};cd.node;const Df=z(cd);/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ud={name:"sprout",size:24,node:[["path",{d:"M14 9.536V7a4 4 0 0 1 4-4h1.5a.5.5 0 0 1 .5.5V5a4 4 0 0 1-4 4 4 4 0 0 0-4 4c0 2 1 3 1 5a5 5 0 0 1-1 3",key:"139s4v"}],["path",{d:"M4 9a5 5 0 0 1 8 4 5 5 0 0 1-8-4",key:"1dlkgp"}],["path",{d:"M5 21h14",key:"11awu3"}]]};ud.node;const Lf=z(ud);/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dd={name:"star",size:24,node:[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]]};dd.node;const _f=z(dd);/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pd={name:"triangle-alert",size:24,node:[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]],aliases:["alert-triangle"]};pd.node;const si=z(pd);/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hd={name:"user-check",size:24,node:[["path",{d:"m16 11 2 2 4-4",key:"9rsbq5"}],["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}]]};hd.node;const Tf=z(hd);/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fd={name:"user-x",size:24,node:[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["line",{x1:"17",x2:"22",y1:"8",y2:"13",key:"3nzzx3"}],["line",{x1:"22",x2:"17",y1:"8",y2:"13",key:"1swrse"}]]};fd.node;const Mf=z(fd);/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const md={name:"x",size:24,node:[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]};md.node;const Pf=z(md);/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gd={name:"zap",size:24,node:[["path",{d:"M15.914 4a1.5 1.5 0 00-2.474-1.561l-9 9A1.5 1.5 0 005.5 14h4.002a.5.5 0 01.471.666L8.086 20a1.5 1.5 0 002.475 1.56l9-9A1.5 1.5 0 0018.5 10h-3.997a.5.5 0 01-.472-.667z",key:"1v7up4"}]]};gd.node;const Af=z(gd);function Rf({onPhoneClick:e,onSelectPlan:t}){const[n,r]=D.useState(!1),[i,o]=D.useState(!1);D.useEffect(()=>{const s=()=>{r(window.scrollY>20)};return window.addEventListener("scroll",s),()=>window.removeEventListener("scroll",s)},[]);const a=s=>{o(!1);const c=document.getElementById(s);if(c){const f=c.getBoundingClientRect().top+window.pageYOffset-80;window.scrollTo({top:f,behavior:"smooth"})}};return l.jsxs("header",{className:`header ${n?"header-scrolled":""}`,children:[l.jsxs("div",{className:"container header-container",children:[l.jsxs("a",{href:"#",className:"header-logo",onClick:s=>{s.preventDefault(),window.scrollTo({top:0,behavior:"smooth"})},children:[l.jsx("img",{src:"/logo.webp",alt:"DUDI Software Logo",className:"logo-img"}),l.jsxs("div",{className:"logo-text",children:[l.jsxs("span",{className:"logo-title",children:["DUDI ",l.jsx("span",{className:"logo-highlight",children:"SOFTWARE"})]}),l.jsx("span",{className:"logo-subtitle",children:"Application Maintenance"})]})]}),l.jsxs("nav",{className:"header-nav",children:[l.jsx("button",{onClick:()=>a("van-de"),className:"nav-link",children:"Vấn đề"}),l.jsx("button",{onClick:()=>a("dau-ra"),className:"nav-link",children:"Đầu ra"}),l.jsx("button",{onClick:()=>a("bang-gia"),className:"nav-link",children:"Bảng giá"}),l.jsx("button",{onClick:()=>a("quy-trinh"),className:"nav-link",children:"Quy trình"}),l.jsx("button",{onClick:()=>a("gioi-han"),className:"nav-link",children:"Phạm vi"}),l.jsx("button",{onClick:()=>a("faq"),className:"nav-link",children:"Hỏi đáp"})]}),l.jsxs("div",{className:"header-actions",children:[l.jsxs("button",{className:"btn-primary header-cta-btn",onClick:()=>a("form-dang-ky"),children:[l.jsx("span",{children:"Gửi ứng dụng"}),l.jsx(Ci,{size:16})]}),l.jsx("button",{className:"mobile-menu-btn",onClick:()=>o(!i),"aria-label":"Toggle menu",children:i?l.jsx(Pf,{size:24}):l.jsx(yf,{size:24})})]})]}),i&&l.jsxs("div",{className:"mobile-dropdown",children:[l.jsx("button",{onClick:()=>a("van-de"),className:"mobile-nav-link",children:"Vấn đề thường gặp"}),l.jsx("button",{onClick:()=>a("dau-ra"),className:"mobile-nav-link",children:"Đầu ra bàn giao"}),l.jsx("button",{onClick:()=>a("bang-gia"),className:"mobile-nav-link",children:"Bảng giá 3 gói"}),l.jsx("button",{onClick:()=>a("quy-trinh"),className:"mobile-nav-link",children:"Quy trình xử lý sự cố"}),l.jsx("button",{onClick:()=>a("gioi-han"),className:"mobile-nav-link",children:"Giới hạn & Định nghĩa"}),l.jsx("button",{onClick:()=>a("faq"),className:"mobile-nav-link",children:"Câu hỏi thường gặp"}),l.jsxs("div",{className:"mobile-menu-footer",children:[l.jsxs("button",{className:"mobile-phone-btn",onClick:e,children:[l.jsx(Ni,{size:16}),l.jsx("span",{children:"Hotline: 0909 163 821"})]}),l.jsx("button",{className:"btn-primary",style:{width:"100%"},onClick:()=>a("form-dang-ky"),children:"Gửi ứng dụng để DUDI kiểm tra"})]})]}),l.jsx("style",{children:`
        .header {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          height: 80px;
          background: rgba(255, 255, 255, 0.88);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          z-index: 1000;
          border-bottom: 1px solid rgba(226, 232, 240, 0.7);
          transition: all 0.3s ease;
        }
        .header-scrolled {
          height: 70px;
          background: rgba(255, 255, 255, 0.96);
          box-shadow: 0 4px 20px -2px rgba(15, 23, 42, 0.08);
          border-bottom-color: rgba(220, 38, 38, 0.15);
        }
        .header-container {
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .header-logo {
          display: flex;
          align-items: center;
          gap: 12px;
          text-decoration: none;
        }
        .logo-img {
          height: 44px;
          width: auto;
          object-fit: contain;
          transition: transform 0.2s ease;
        }
        .header-logo:hover .logo-img {
          transform: scale(1.05);
        }
        .logo-text {
          display: flex;
          flex-direction: column;
        }
        .logo-title {
          font-family: var(--font-heading);
          font-size: 18px;
          font-weight: 800;
          letter-spacing: -0.5px;
          color: var(--color-dark);
          line-height: 1.1;
        }
        .logo-highlight {
          color: var(--color-primary);
        }
        .logo-subtitle {
          font-size: 10.5px;
          color: var(--color-text-muted);
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.8px;
        }
        .header-nav {
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .nav-link {
          background: none;
          border: none;
          padding: 8px 14px;
          font-size: 14.5px;
          font-weight: 600;
          color: var(--color-text-main);
          cursor: pointer;
          border-radius: var(--radius-sm);
          transition: var(--transition);
        }
        .nav-link:hover {
          color: var(--color-primary);
          background: var(--color-primary-tint);
        }
        .header-actions {
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .header-phone-btn {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 9px 16px;
          background: #F8FAFC;
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-md);
          font-size: 14px;
          font-weight: 700;
          color: var(--color-dark);
          cursor: pointer;
          transition: var(--transition);
        }
        .header-phone-btn:hover {
          border-color: var(--color-primary);
          color: var(--color-primary);
          background: var(--color-primary-tint);
        }
        .phone-icon {
          color: var(--color-primary);
        }
        .header-cta-btn {
          padding: 10px 20px;
          font-size: 14px;
        }
        .mobile-menu-btn {
          display: none;
          background: none;
          border: none;
          color: var(--color-dark);
          cursor: pointer;
          padding: 6px;
        }
        .mobile-dropdown {
          position: absolute;
          top: 100%;
          left: 0;
          right: 0;
          background: #FFFFFF;
          border-bottom: 1px solid var(--border-subtle);
          box-shadow: 0 15px 25px rgba(0,0,0,0.1);
          display: flex;
          flex-direction: column;
          padding: 16px 24px;
          gap: 6px;
          animation: fadeIn 0.2s ease;
        }
        .mobile-nav-link {
          background: none;
          border: none;
          text-align: left;
          padding: 12px 10px;
          font-size: 15px;
          font-weight: 600;
          color: var(--color-text-main);
          border-bottom: 1px solid #F1F5F9;
          cursor: pointer;
        }
        .mobile-nav-link:hover {
          color: var(--color-primary);
        }
        .mobile-menu-footer {
          margin-top: 12px;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .mobile-phone-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 12px;
          background: #F8FAFC;
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-md);
          font-weight: 700;
          color: var(--color-dark);
          cursor: pointer;
        }
        @media (max-width: 1024px) {
          .header-nav {
            display: none;
          }
          .mobile-menu-btn {
            display: flex;
          }
        }
        @media (max-width: 640px) {
          .header-phone-btn {
            display: none;
          }
          .logo-subtitle {
            display: none;
          }
        }
      `})]})}function Bf({onSelectPlan:e}){const t=()=>{const r=document.getElementById("form-dang-ky");r&&r.scrollIntoView({behavior:"smooth"})},n=()=>{const r=document.getElementById("bang-gia");r&&r.scrollIntoView({behavior:"smooth"})};return l.jsxs("section",{className:"section hero-section",id:"hero",children:[l.jsx("div",{className:"container hero-container",children:l.jsxs("div",{className:"hero-text-card reveal-up is-revealed",children:[l.jsxs("div",{className:"hero-badge",children:[l.jsx("span",{className:"badge-pulse"}),l.jsx(Df,{size:14,className:"badge-icon"}),l.jsx("span",{children:"DỊCH VỤ BẢO TRÌ ỨNG DỤNG CHUYÊN NGHIỆP"})]}),l.jsxs("h1",{className:"hero-title",children:[l.jsx("span",{className:"title-line title-dark",children:"DỊCH VỤ BẢO TRÌ & VẬN HÀNH"}),l.jsx("span",{className:"title-line title-red",children:"ỨNG DỤNG DI ĐỘNG"})]}),l.jsxs("div",{className:"hero-cta-group",children:[l.jsxs("button",{className:"btn-primary hero-btn-main",onClick:t,children:[l.jsx("span",{children:"Gửi ứng dụng để DUDI kiểm tra"}),l.jsx(Ci,{size:18})]}),l.jsx("button",{className:"btn-secondary hero-btn-sub",onClick:n,children:l.jsx("span",{children:"Xem chi tiết 3 gói"})})]})]})}),l.jsx("style",{children:`
        .hero-section {
          min-height: 100vh;
          display: flex;
          align-items: center;
          padding-top: 90px;
          padding-bottom: 40px;
          position: relative;
          background-image: url('/hero-mascot.webp');
          background-size: cover;
          background-position: center right;
          background-repeat: no-repeat;
          box-sizing: border-box;
        }
        .hero-container {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          width: 100%;
          max-width: var(--max-width);
        }
        .hero-text-card {
          max-width: 740px;
          display: flex;
          flex-direction: column;
          background: rgba(255, 255, 255, 0.88);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          padding: 38px 44px;
          border-radius: 30px;
          border: 1px solid rgba(255, 255, 255, 0.95);
          box-shadow: 0 20px 48px -10px rgba(15, 23, 42, 0.14), 0 0 0 1px rgba(220, 38, 38, 0.1);
        }
        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 6px 14px;
          background: #FFFFFF;
          border: 1px solid #FECDD3;
          color: var(--color-primary);
          border-radius: var(--radius-full);
          font-size: 12.5px;
          font-weight: 800;
          letter-spacing: 0.8px;
          text-transform: uppercase;
          width: fit-content;
          margin-bottom: 18px;
          box-shadow: 0 2px 8px rgba(220, 38, 38, 0.12);
        }
        .badge-pulse {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: var(--color-primary);
          box-shadow: 0 0 0 rgba(220, 38, 38, 0.4);
          animation: pulseGlow 2s infinite;
        }
        .badge-icon {
          color: var(--color-primary);
        }
        .hero-title {
          font-family: 'Orbitron', 'Michroma', 'Plus Jakarta Sans', sans-serif;
          font-size: 32px;
          font-weight: 900;
          line-height: 1.35;
          letter-spacing: 0.5px;
          text-transform: uppercase;
          margin-bottom: 24px;
        }
        .title-line {
          display: block;
        }
        .title-dark {
          color: #0B1120;
          margin-bottom: 4px;
        }
        .title-red {
          color: #DC2626;
          font-weight: 900;
        }
        .hero-cta-group {
          display: flex;
          align-items: center;
          gap: 14px;
          flex-wrap: wrap;
        }
        .hero-btn-main {
          padding: 14px 28px;
          font-size: 15px;
          font-weight: 800;
          letter-spacing: 0.2px;
          box-shadow: 0 6px 20px rgba(220, 38, 38, 0.4);
        }
        .hero-btn-sub {
          padding: 13px 24px;
          font-size: 14.5px;
          font-weight: 700;
          background: #FFFFFF;
          color: var(--color-dark);
          border: 1px solid var(--border-subtle);
          box-shadow: 0 4px 14px rgba(0, 0, 0, 0.08);
        }
        .hero-btn-sub:hover {
          background: #F8FAFC;
        }

        @media (max-width: 1024px) {
          .hero-text-card {
            padding: 32px 28px;
          }
          .hero-title {
            font-size: 26px;
          }
        }

        @media (max-width: 768px) {
          .hero-section {
            padding-top: 100px;
            padding-bottom: 60px;
            min-height: auto;
          }
          .hero-text-card {
            padding: 24px 18px;
          }
          .hero-title {
            font-size: 22px;
            line-height: 1.4;
          }
          .hero-cta-group {
            flex-direction: column;
            width: 100%;
          }
          .hero-btn-main, .hero-btn-sub {
            width: 100%;
          }
        }
      `})]})}function If(){const e=[{id:1,icon:tf,image:"https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?auto=format&fit=crop&w=600&q=80",category:"Xung Đột Hệ Thống",title:"Lỗi phát sinh sau khi nâng cấp hệ điều hành",short:"Xung đột thư viện, văng ứng dụng, lỗi quyền vị trí & camera trên iOS / Android mới.",desc:"iOS / Android cập nhật phiên bản mới dễ gây xung đột thư viện cũ, làm văng app hoặc đơ màn hình."},{id:2,icon:Sf,image:"https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=600&q=80",category:"Rủi Ro Store",title:"Cảnh báo gỡ bỏ ứng dụng từ Apple & Google Store",short:"Nguy cơ bị gỡ khỏi Store do không đáp ứng kịp Target SDK & chính sách bảo mật.",desc:"Kho ứng dụng liên tục nâng chuẩn Target SDK và yêu cầu bảo mật. Không xử lý kịp sẽ bị gỡ bỏ."},{id:3,icon:Mf,image:"https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=600&q=80",category:"Nhân Sự Vận Hành",title:"Phụ thuộc hoặc mất liên lạc với nhân sự lập trình cũ",short:"Mã nguồn bàn giao thiếu tài liệu, không ai chịu trách nhiệm sửa lỗi hay phát hành bản mới.",desc:"Thiếu tài liệu bàn giao khiến doanh nghiệp lúng túng khi cần sửa lỗi gấp hoặc phát hành bản mới."},{id:4,icon:Ku,image:"https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80",category:"Giám Sát & Log",title:"Không có hệ thống giám sát crash & ghi log tự động",short:"Khách hàng phàn nàn lỗi nhưng không biết xảy ra ở dòng code hay thiết bị nào để sửa.",desc:"Không ghi nhận được log sự cố và dòng thiết bị lỗi khiến việc tái hiện và sửa bug mất nhiều thời gian."},{id:5,icon:uf,image:"https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=600&q=80",category:"Chi Phí Doanh Nghiệp",title:"Chi phí thuê dev full-time quá tốn kém",short:"Tốn 15 - 25 triệu/tháng duy trì dev trong khi nhu cầu thực tế chỉ cần vài giờ bảo trì định kỳ.",desc:"Thuê dev full-time tốn 15 - 25tr/tháng dù nhu cầu thực tế chỉ cần vài giờ kỹ thuật xử lý định kỳ."},{id:6,icon:si,image:"https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=600&q=80",category:"Uy Tín Thương Hiệu",title:"Rủi ro rớt hạng và mất đánh giá sao trên Store",short:"Nhận bão đánh giá 1 sao do lỗi vặt kéo dài, sụt giảm uy tín và lượt tải tự nhiên.",desc:"Lỗi vặt kéo dài làm giảm điểm đánh giá trên Store, sụt giảm uy tín và lượt tải tự nhiên của ứng dụng."}],t=[...e,...e,...e,...e],n=D.useRef(null),r=D.useRef(!1),i=D.useRef(0),o=D.useRef(0),[a,s]=D.useState(!1),c=D.useRef(null);D.useEffect(()=>{const v=n.current;if(!v)return;const F=()=>{if(!r.current&&!a){v.scrollLeft+=1.2;const p=v.scrollWidth/2;v.scrollLeft>=p&&(v.scrollLeft-=p)}c.current=requestAnimationFrame(F)};return c.current=requestAnimationFrame(F),()=>cancelAnimationFrame(c.current)},[a]);const d=v=>{r.current=!0,s(!0),i.current=v.pageX-n.current.offsetLeft,o.current=n.current.scrollLeft},g=v=>{if(!r.current)return;v.preventDefault();const p=(v.pageX-n.current.offsetLeft-i.current)*2.2;n.current.scrollLeft=o.current-p},f=()=>{r.current&&(r.current=!1,setTimeout(()=>s(!1),500))},m=v=>{r.current=!0,s(!0),i.current=v.touches[0].pageX-n.current.offsetLeft,o.current=n.current.scrollLeft},k=v=>{if(!r.current)return;const p=(v.touches[0].pageX-n.current.offsetLeft-i.current)*2.2;n.current.scrollLeft=o.current-p},y=()=>{r.current=!1,setTimeout(()=>s(!1),500)};return l.jsxs("section",{className:"section bg-tech-white problems-section",id:"thuc-trang",children:[l.jsx("div",{className:"container",children:l.jsxs("div",{className:"section-header reveal-up",children:[l.jsxs("div",{className:"section-tag",style:{background:"#FEF3C7",color:"#B45309"},children:[l.jsx(si,{size:14}),l.jsx("span",{children:"Thực Trạng Vận Hành"})]}),l.jsx("h2",{className:"section-title",children:"Những Rủi Ro Doanh Nghiệp Thường Gặp Phải"}),l.jsx("p",{className:"section-desc",children:"Ứng dụng cần được chăm sóc định kỳ để duy trì tính tương thích với OS và chính sách Store."})]})}),l.jsx("div",{className:"interactive-scroll-container",ref:n,onMouseDown:d,onMouseMove:g,onMouseUp:f,onMouseLeave:f,onTouchStart:m,onTouchMove:k,onTouchEnd:y,children:l.jsx("div",{className:"scroll-track-inner",children:t.map((v,F)=>{const p=v.icon;return l.jsx("div",{className:"problem-card-slide",children:l.jsxs("div",{className:"card-inner-box",children:[l.jsxs("div",{className:"prob-category-pill",children:[l.jsx("div",{className:"prob-icon-mini",children:l.jsx(p,{size:13})}),l.jsx("span",{className:"prob-cat-name",children:v.category})]}),l.jsx("div",{className:"card-img-wrap",children:l.jsx("img",{src:v.image,alt:v.title,className:"card-thumb-img",loading:"lazy",draggable:"false"})}),l.jsxs("div",{className:"card-body-content",children:[l.jsx("h3",{className:"prob-title",children:v.title}),l.jsx("p",{className:"prob-teaser",children:v.short}),l.jsx("div",{className:"prob-detail-expanded",children:l.jsx("p",{className:"prob-detail-text",children:v.desc})})]})]})},F)})})}),l.jsx("style",{children:`
        .problems-section {
          padding: 38px 0 42px 0;
          overflow: hidden;
        }

        /* Interactive Drag & Fast-Scroll Track Layout */
        .interactive-scroll-container {
          width: 100%;
          overflow-x: auto;
          overflow-y: hidden;
          padding: 16px 0 28px 0;
          position: relative;
          cursor: grab;
          user-select: none;
          -webkit-user-select: none;
          scrollbar-width: none; /* Hide scrollbar for clean look */
          -ms-overflow-style: none;
          mask-image: linear-gradient(to right, transparent 0%, black 4%, black 96%, transparent 100%);
          -webkit-mask-image: linear-gradient(to right, transparent 0%, black 4%, black 96%, transparent 100%);
        }

        .interactive-scroll-container::-webkit-scrollbar {
          display: none;
        }

        .interactive-scroll-container:active {
          cursor: grabbing;
        }

        .scroll-track-inner {
          display: flex;
          gap: 24px;
          width: max-content;
          align-items: flex-start;
        }

        /* Problem Card Slide */
        .problem-card-slide {
          width: 350px;
          flex-shrink: 0;
          cursor: pointer;
          padding-top: 14px;
          transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .card-inner-box {
          background: #FFFFFF;
          border: 1px solid #E2E8F0;
          border-radius: 20px;
          padding: 0;
          display: flex;
          flex-direction: column;
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.05);
          transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
          height: auto;
          position: relative;
        }

        .problem-card-slide:hover .card-inner-box {
          border-color: rgba(220, 38, 38, 0.45);
          box-shadow: 0 18px 40px -8px rgba(220, 38, 38, 0.2), 0 0 0 1px rgba(220, 38, 38, 0.25);
          transform: translateY(-8px);
          background: #FFFFFF;
        }

        /* Top Category Pill Floating at Top of Card */
        .prob-category-pill {
          position: absolute;
          top: -13px;
          left: 50%;
          transform: translateX(-50%);
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: #DC2626;
          color: #FFFFFF;
          padding: 5px 14px;
          border-radius: var(--radius-full);
          border: 2px solid #FFFFFF;
          box-shadow: 0 4px 14px rgba(220, 38, 38, 0.4);
          z-index: 10;
          white-space: nowrap;
          transition: all 0.25s ease;
        }

        .problem-card-slide:hover .prob-category-pill {
          transform: translateX(-50%) scale(1.05);
          box-shadow: 0 6px 18px rgba(220, 38, 38, 0.55);
        }

        .prob-icon-mini {
          color: #FFFFFF;
          display: flex;
          align-items: center;
        }

        .prob-cat-name {
          font-size: 11px;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          color: #FFFFFF;
        }

        /* Image Banner Covering Upper Half of Card */
        .card-img-wrap {
          width: 100%;
          height: 160px;
          border-radius: 19px 19px 0 0;
          overflow: hidden;
          position: relative;
          background: #F1F5F9;
        }

        .card-thumb-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.45s ease;
        }

        .problem-card-slide:hover .card-thumb-img {
          transform: scale(1.08);
        }

        /* Card Body Content Area */
        .card-body-content {
          padding: 16px 18px 18px 18px;
          display: flex;
          flex-direction: column;
        }

        .prob-title {
          font-size: 15.5px;
          font-weight: 800;
          color: #0F172A;
          line-height: 1.35;
          margin-bottom: 8px;
          min-height: 42px;
          transition: color 0.2s ease;
        }

        .problem-card-slide:hover .prob-title {
          color: #DC2626;
        }

        .prob-teaser {
          font-size: 12.5px;
          color: #64748B;
          line-height: 1.45;
          margin-bottom: 0;
        }

        /* Detail expanded on hover */
        .prob-detail-expanded {
          max-height: 0;
          opacity: 0;
          overflow: hidden;
          transition: max-height 0.4s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.35s ease, margin-top 0.35s ease;
        }

        .problem-card-slide:hover .prob-detail-expanded {
          max-height: 180px;
          opacity: 1;
          margin-top: 10px;
        }

        .prob-detail-text {
          font-size: 12px;
          color: #334155;
          line-height: 1.5;
          background: #F8FAFC;
          padding: 10px 12px;
          border-radius: 8px;
        }

        @media (max-width: 768px) {
          .problem-card-slide {
            width: 290px;
          }
        }
      `})]})}function Of(){const e=D.useRef(null),[t,n]=D.useState(!1),[r,i]=D.useState(!0),[o,a]=D.useState(0),s=[{icon:Zu,tag:"Kiểm tra định kỳ",image:"https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=800&q=80",title:"Kiểm tra sức khỏe định kỳ",desc:"Rà soát tính ổn định và độ tương thích với hệ điều hành iOS / Android mới."},{icon:zf,tag:"Giám sát 24/7",image:"https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",title:"Theo dõi & Báo cáo Crash",desc:"Giám sát tỷ lệ crash qua Crashlytics, phát hiện sớm nguyên nhân gây lỗi."},{icon:Lu,tag:"Linh hoạt",image:"https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",title:"Cập nhật dữ liệu theo yêu cầu",desc:"Thay đổi nội dung, banner, bảng giá theo yêu cầu từ khách hàng."},{icon:sf,tag:"Store Readiness",image:"https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80",title:"Hỗ trợ phát hành lên Store",desc:"Build bản phát hành (AAB / IPA), ký chứng chỉ và gửi duyệt Store."},{icon:tr,tag:"SLA Cam kết",image:"https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80",title:"Xử lý lỗi trong hạn mức giờ",desc:"Khắc phục sự cố kỹ thuật, xung đột thư viện theo định mức giờ minh bạch."},{icon:Pu,tag:"Minh bạch 100%",image:"https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80",title:"Báo cáo vận hành minh bạch",desc:"Báo cáo số giờ kỹ thuật đã dùng, nhật ký lỗi đã sửa và đề xuất tối ưu."}],c=[{title:"Mã nguồn ứng dụng"},{title:"Tài khoản Store"},{title:"Server & API (nếu có)"}],d=()=>{var f;if(e.current){const{scrollLeft:m,scrollWidth:k,clientWidth:y}=e.current;n(m>10),i(m<k-y-10);const v=((f=e.current.querySelector(".deliverable-slide-card"))==null?void 0:f.clientWidth)||340,F=Math.round(m/(v+14));a(Math.min(Math.max(0,F),s.length-1))}};D.useEffect(()=>{const f=e.current;if(f)return f.addEventListener("scroll",d,{passive:!0}),d(),()=>f.removeEventListener("scroll",d)},[]);const g=f=>{var m;if(e.current){const y=((((m=e.current.querySelector(".deliverable-slide-card"))==null?void 0:m.clientWidth)||340)+14)*(f==="left"?-1:1);e.current.scrollBy({left:y,behavior:"smooth"})}};return l.jsxs("section",{className:"section deliverables-section-compact pcb-tech-section",id:"dau-ra",children:[l.jsx("div",{className:"pcb-bg-canvas","aria-hidden":"true",children:l.jsxs("svg",{viewBox:"0 0 1440 620",fill:"none",xmlns:"http://www.w3.org/2000/svg",preserveAspectRatio:"xMidYMid slice",className:"pcb-svg-root",children:[l.jsxs("defs",{children:[l.jsxs("linearGradient",{id:"traceGradRedPrimary",x1:"0%",y1:"0%",x2:"100%",y2:"0%",children:[l.jsx("stop",{offset:"0%",stopColor:"#EF4444",stopOpacity:"0.25"}),l.jsx("stop",{offset:"50%",stopColor:"#F87171",stopOpacity:"0.9"}),l.jsx("stop",{offset:"100%",stopColor:"#FFFFFF",stopOpacity:"0.5"})]}),l.jsxs("linearGradient",{id:"traceGradRedGlow",x1:"0%",y1:"0%",x2:"100%",y2:"0%",children:[l.jsx("stop",{offset:"0%",stopColor:"#DC2626",stopOpacity:"0.3"}),l.jsx("stop",{offset:"50%",stopColor:"#EF4444",stopOpacity:"0.85"}),l.jsx("stop",{offset:"100%",stopColor:"#FECACA",stopOpacity:"0.3"})]}),l.jsxs("linearGradient",{id:"chipBodyGradRed",x1:"0%",y1:"0%",x2:"100%",y2:"100%",children:[l.jsx("stop",{offset:"0%",stopColor:"#2E080D"}),l.jsx("stop",{offset:"100%",stopColor:"#170306"})]}),l.jsx("polygon",{id:"hexUnitRed",points:"0,-24 20.78,-12 20.78,12 0,24 -20.78,12 -20.78,-12",fill:"none",stroke:"#DC2626",strokeWidth:"1.2",strokeOpacity:"0.45"})]}),l.jsxs("g",{className:"hex-group",opacity:"0.6",children:[l.jsx("use",{href:"#hexUnitRed",x:"220",y:"70"}),l.jsx("use",{href:"#hexUnitRed",x:"262",y:"94"}),l.jsx("use",{href:"#hexUnitRed",x:"262",y:"142"}),l.jsx("use",{href:"#hexUnitRed",x:"220",y:"166"})]}),l.jsxs("g",{className:"hex-group",opacity:"0.5",children:[l.jsx("use",{href:"#hexUnitRed",x:"1240",y:"480"}),l.jsx("use",{href:"#hexUnitRed",x:"1282",y:"504"}),l.jsx("use",{href:"#hexUnitRed",x:"1324",y:"480"})]}),l.jsx("path",{d:"M 20 80 L 140 80 L 180 120 L 260 120",stroke:"#7F1D1D",strokeWidth:"1.5",fill:"none",opacity:"0.8"}),l.jsx("circle",{cx:"260",cy:"120",r:"3",fill:"#EF4444",opacity:"0.9"}),l.jsx("path",{d:"M 20 160 L 280 160 L 340 100 L 600 100 L 660 160 L 700 160",stroke:"url(#traceGradRedPrimary)",strokeWidth:"2",fill:"none"}),l.jsx("circle",{cx:"700",cy:"160",r:"4",fill:"#FFFFFF",stroke:"#DC2626",strokeWidth:"1.5"}),l.jsx("path",{d:"M 40 380 L 520 380",stroke:"url(#traceGradRedGlow)",strokeWidth:"2",fill:"none",opacity:"0.85"}),l.jsx("circle",{cx:"520",cy:"380",r:"4",fill:"#EF4444",stroke:"#160306",strokeWidth:"1.5"}),l.jsx("path",{d:"M 780 180 L 980 180 L 1040 120 L 1380 120",stroke:"#7F1D1D",strokeWidth:"1.6",fill:"none",opacity:"0.75"}),l.jsx("circle",{cx:"1380",cy:"120",r:"3.5",fill:"#EF4444",opacity:"0.9"})]})}),l.jsxs("div",{className:"container pcb-tech-content",children:[l.jsxs("div",{className:"section-header reveal-up deliverables-header-compact",children:[l.jsxs("div",{className:"section-tag deliverables-tech-tag",children:[l.jsx(Cu,{size:13}),l.jsx("span",{children:"Cam Kết Bàn Giao"})]}),l.jsx("h2",{className:"section-title deliverables-tech-title",children:"Đầu Ra Cụ Thể Trong Từng Gói Bảo Trì"}),l.jsx("p",{className:"section-desc deliverables-tech-desc",children:"Cam kết các hạng mục đầu ra minh bạch cùng hình ảnh thực tế bàn giao cho ứng dụng."})]}),l.jsxs("div",{className:"deliverables-slider-wrapper reveal-up delay-100",children:[l.jsx("div",{className:"slider-controls-bar",children:l.jsxs("div",{className:"slider-arrows",children:[l.jsx("button",{type:"button",className:`slider-arrow-btn ${t?"":"disabled"}`,onClick:()=>g("left"),"aria-label":"Xem thẻ trước",children:l.jsx(rf,{size:16})}),l.jsx("button",{type:"button",className:`slider-arrow-btn ${r?"":"disabled"}`,onClick:()=>g("right"),"aria-label":"Xem thẻ tiếp theo",children:l.jsx(of,{size:16})})]})}),l.jsx("div",{className:"deliverables-track",ref:e,children:s.map((f,m)=>{const k=f.icon;return l.jsxs("div",{className:"deliverable-slide-card",children:[l.jsxs("div",{className:"slide-card-img-wrap",children:[l.jsx("img",{src:f.image,alt:f.title,className:"slide-card-img",loading:"lazy"}),l.jsx("div",{className:"slide-card-img-overlay"}),l.jsx("span",{className:"slide-card-tag",children:f.tag})]}),l.jsxs("div",{className:"slide-card-body",children:[l.jsxs("div",{className:"slide-card-header",children:[l.jsx("div",{className:"slide-icon-box",children:l.jsx(k,{size:16})}),l.jsx("h3",{className:"slide-card-title",children:f.title})]}),l.jsx("p",{className:"slide-card-desc",children:f.desc})]})]},m)})})]}),l.jsxs("div",{className:"client-inputs-box reveal-scale delay-200",children:[l.jsxs("div",{className:"inputs-box-header",children:[l.jsxs("div",{className:"inputs-header-left",children:[l.jsx(ff,{size:15,className:"inputs-icon"}),l.jsx("h4",{className:"inputs-title",children:"Thông Tin Cần Thiết Để Tiếp Quản (Tối giản)"})]}),l.jsxs("div",{className:"inputs-security-badge",children:[l.jsx(tr,{size:13,className:"text-success"}),l.jsx("span",{children:"Cam kết bảo mật theo NDA & không lưu mật khẩu riêng tư"})]})]}),l.jsx("div",{className:"inputs-cards-grid",children:c.map((f,m)=>l.jsxs("div",{className:"input-card",children:[l.jsxs("span",{className:"input-card-number",children:["0",m+1]}),l.jsx("span",{className:"input-card-title",children:f.title})]},m))})]})]}),l.jsx("style",{children:`
        .deliverables-section-compact {
          position: relative !important;
          background-color: #88131A !important;
          background: radial-gradient(ellipse at 50% 10%, #DC2626 0%, #A81822 45%, #6B0E14 100%) !important;
          overflow: hidden !important;
          padding: 34px 0 38px 0 !important;
          border-top: 1px solid rgba(255, 255, 255, 0.15) !important;
          border-bottom: 1px solid rgba(255, 255, 255, 0.15) !important;
        }
        .pcb-bg-canvas {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 0;
          overflow: hidden;
          opacity: 0.85;
        }
        .pcb-svg-root {
          width: 100%;
          height: 100%;
          display: block;
        }
        .pcb-tech-content {
          position: relative;
          z-index: 2;
        }
        .deliverables-header-compact {
          margin-bottom: 14px;
        }
        
        .deliverables-tech-tag {
          background: rgba(220, 38, 38, 0.28) !important;
          color: #FECACA !important;
          border: 1px solid rgba(239, 68, 68, 0.5) !important;
          box-shadow: 0 0 14px rgba(220, 38, 38, 0.35) !important;
          padding: 4px 12px !important;
          font-size: 11.5px !important;
          margin-bottom: 8px !important;
        }

        .deliverables-tech-title {
          color: #FFFFFF !important;
          font-size: 26px !important;
          font-weight: 800 !important;
          letter-spacing: -0.4px;
          margin-bottom: 6px !important;
          text-shadow: 0 2px 12px rgba(0, 0, 0, 0.8);
        }

        .deliverables-tech-desc {
          color: #FECACA !important;
          font-size: 13px !important;
          margin-bottom: 0 !important;
          opacity: 0.9;
        }

        /* Slider Wrapper */
        .deliverables-slider-wrapper {
          position: relative;
          margin-bottom: 16px;
        }

        .slider-controls-bar {
          display: flex;
          align-items: center;
          justify-content: flex-end;
          margin-bottom: 10px;
          padding: 0 2px;
        }

        .slider-arrows {
          display: flex;
          gap: 8px;
        }

        .slider-arrow-btn {
          width: 30px;
          height: 30px;
          border-radius: 50%;
          background: rgba(45, 8, 14, 0.9);
          border: 1px solid rgba(220, 38, 38, 0.4);
          color: #FFFFFF;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.2s ease;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.4);
        }

        .slider-arrow-btn:hover:not(.disabled) {
          background: #DC2626;
          border-color: #EF4444;
          color: #FFFFFF;
          transform: scale(1.06);
          box-shadow: 0 0 12px rgba(220, 38, 38, 0.6);
        }

        .slider-arrow-btn.disabled {
          opacity: 0.35;
          cursor: not-allowed;
        }

        /* Multi-card Track: Shows 3-4 cards horizontally */
        .deliverables-track {
          display: flex;
          gap: 14px;
          overflow-x: auto;
          scroll-snap-type: x mandatory;
          scroll-behavior: smooth;
          padding: 4px 2px 8px 2px;
          scrollbar-width: none;
          -ms-overflow-style: none;
        }

        .deliverables-track::-webkit-scrollbar {
          display: none;
        }

        /* Individual Compact Card with High-Contrast Pure White Glass */
        .deliverable-slide-card {
          flex: 0 0 calc(33.333% - 10px);
          min-width: 310px;
          max-width: 360px;
          scroll-snap-align: start;
          background: #FFFFFF;
          border: 1px solid rgba(255, 255, 255, 0.95);
          border-radius: 14px;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          box-shadow: 0 12px 32px rgba(0, 0, 0, 0.38);
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .deliverable-slide-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 18px 42px rgba(0, 0, 0, 0.45), 0 0 0 2px #DC2626;
        }

        .slide-card-img-wrap {
          width: 100%;
          height: 130px;
          position: relative;
          overflow: hidden;
          background: #F1F5F9;
        }

        .slide-card-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          transition: transform 0.4s ease;
        }

        .deliverable-slide-card:hover .slide-card-img {
          transform: scale(1.06);
        }

        .slide-card-img-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, rgba(0, 0, 0, 0.05) 0%, rgba(0, 0, 0, 0.4) 100%);
        }

        .slide-card-tag {
          position: absolute;
          top: 8px;
          right: 8px;
          font-size: 10.5px;
          font-weight: 700;
          color: #FFFFFF;
          background: #DC2626;
          padding: 2px 9px;
          border-radius: 9999px;
          border: 1px solid rgba(255, 255, 255, 0.4);
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
        }

        .slide-card-body {
          padding: 14px 16px 16px 16px;
          display: flex;
          flex-direction: column;
          flex: 1;
          background: #FFFFFF;
        }

        .slide-card-header {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 6px;
        }

        .slide-icon-box {
          width: 30px;
          height: 30px;
          border-radius: 8px;
          background: #FEE2E2;
          color: #DC2626;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          border: 1px solid #FECDD3;
        }

        .slide-card-title {
          font-size: 14.5px;
          font-weight: 800;
          color: #0F172A;
          line-height: 1.3;
          margin: 0;
        }

        .slide-card-desc {
          font-size: 12px;
          color: #475569;
          line-height: 1.5;
          margin: 0;
        }

        /* Compact Requirements box */
        .client-inputs-box {
          background: #FFFFFF;
          border-radius: 12px;
          border: 1px solid rgba(255, 255, 255, 0.95);
          padding: 12px 16px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.35);
        }
        .inputs-box-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 8px;
          flex-wrap: wrap;
          gap: 4px;
        }
        .inputs-header-left {
          display: flex;
          align-items: center;
          gap: 6px;
        }
        .inputs-icon {
          color: #DC2626;
          flex-shrink: 0;
        }
        .inputs-title {
          font-size: 13.5px;
          font-weight: 800;
          color: #0F172A;
          margin: 0;
        }
        .inputs-security-badge {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          font-size: 11.5px;
          color: #059669;
          font-weight: 600;
        }
        .inputs-cards-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 8px;
        }
        .input-card {
          background: #F8FAFC;
          border: 1px solid #E2E8F0;
          border-radius: 8px;
          padding: 8px 12px;
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 12.5px;
        }
        .input-card-number {
          font-size: 11px;
          font-weight: 800;
          color: #FFFFFF;
          font-family: monospace;
          background: #DC2626;
          padding: 2px 6px;
          border-radius: 4px;
          flex-shrink: 0;
        }
        .input-card-title {
          font-weight: 700;
          color: #0F172A;
          font-size: 12.5px;
        }

        @media (max-width: 1024px) {
          .deliverable-slide-card {
            flex: 0 0 calc(50% - 8px);
            min-width: 280px;
          }
        }

        @media (max-width: 768px) {
          .deliverables-section-compact {
            padding: 28px 0 32px 0 !important;
          }
          .deliverable-slide-card {
            flex: 0 0 85%;
            min-width: 250px;
          }
          .inputs-cards-grid {
            grid-template-columns: 1fr;
          }
        }
      `})]})}function Uf(){const e=D.useRef(null);return D.useEffect(()=>{const t=e.current;if(!t)return;const n=t.getContext("2d");let r,i=0,o=0,a={x:-1e3,y:-1e3,radius:140};const s=()=>{if(!t||!t.parentElement)return;const h=t.parentElement.getBoundingClientRect(),x=window.devicePixelRatio||1;i=h.width,o=h.height,t.width=i*x,t.height=o*x,n.scale(x,x),m()},c=["#EF4444","#F87171","#FCA5A5","#FECACA","#DC2626","#E11D48","#FB7185","#FDA4AF","#FFE4E6"];let d=[];const g=32,f=16;function m(){d=[];const h=Math.ceil(i/(g+f))+2,x=Math.ceil(o/(g+f))+2;for(let j=0;j<h;j++)for(let C=0;C<x;C++)if(Math.random()<.22){const S=Math.random();let P=16;S<.3?P=8:S<.6?P=14:S<.85?P=22:S<.95?P=30:P=38;const _=c[Math.floor(Math.random()*c.length)],re=.08+Math.random()*.22,Ae=.008+Math.random()*.018,$e=Math.random()*Math.PI*2,Rt=.15+Math.random()*.3,Je=j*(g+f)+(Math.random()*18-9),Bt=C*(g+f)+(Math.random()*18-9),gn=P>26?7:P>16?5:P>10?3.5:2;d.push({x:Je,y:Bt,baseX:Je,baseY:Bt,size:P,color:_,baseAlpha:re,pulseSpeed:Ae,phase:$e,floatSpeed:Rt,radius:gn})}}const k=h=>{const x=t.getBoundingClientRect();a.x=h.clientX-x.left,a.y=h.clientY-x.top},y=()=>{a.x=-1e3,a.y=-1e3};window.addEventListener("resize",s);const v=t.parentElement;v&&(v.addEventListener("mousemove",k),v.addEventListener("mouseleave",y)),s();let F=0;function p(h,x,j,C,b){n.beginPath(),n.moveTo(h+b,x),n.lineTo(h+j-b,x),n.arcTo(h+j,x,h+j,x+b,b),n.lineTo(h+j,x+C-b),n.arcTo(h+j,x+C,h+j-b,x+C,b),n.lineTo(h+b,x+C),n.arcTo(h,x+C,h,x+C-b,b),n.lineTo(h,x+b),n.arcTo(h,x,h+b,x,b),n.closePath()}const u=()=>{F+=1,n.clearRect(0,0,i,o);const h=n.createLinearGradient(0,0,0,o);h.addColorStop(0,"#FFF7F7"),h.addColorStop(.5,"#FFFFFF"),h.addColorStop(1,"#FFF5F5"),n.fillStyle=h,n.fillRect(0,0,i,o);for(let x=0;x<d.length;x++){const j=d[x],C=(j.baseY-F*j.floatSpeed*.4%o+o)%o,b=a.x-j.x,S=a.y-C,P=Math.sqrt(b*b+S*S);let _=0,re=j.x,Ae=C;if(P<a.radius){const Je=1-P/a.radius;_=Je*.18,re+=b/P*-5*Je,Ae+=S/P*-5*Je}const $e=Math.sin(F*j.pulseSpeed+j.phase)*.08,Rt=Math.max(.04,Math.min(.42,j.baseAlpha+$e+_));n.save(),n.globalAlpha=Rt,n.fillStyle=j.color,p(re,Ae,j.size,j.size,j.radius),n.fill(),n.restore()}r=requestAnimationFrame(u)};return u(),()=>{window.removeEventListener("resize",s),v&&(v.removeEventListener("mousemove",k),v.removeEventListener("mouseleave",y)),cancelAnimationFrame(r)}},[]),l.jsx("canvas",{ref:e,className:"pricing-dynamic-canvas","aria-hidden":"true"})}function $f({onSelectPlan:e}){const t=[{id:"co-ban",name:"Cơ bản",price:"800.000",period:"/ tháng",badge:"Tiết kiệm",icon:Lf,isFeatured:!1,desc:"Ứng dụng ít thay đổi, cần duy trì ổn định & phòng ngừa lỗi.",features:["Kiểm tra định kỳ 1 lần / tháng","Phản hồi trong 24h làm việc","Tối đa 1 giờ kỹ thuật / tháng","2 yêu cầu cập nhật dữ liệu","Nhắc hạn tài khoản Store","Báo cáo tóm tắt công việc"]},{id:"tieu-chuan",name:"Tiêu chuẩn",price:"2.000.000",period:"/ tháng",badge:"Được chọn nhiều nhất",icon:_f,isFeatured:!0,desc:"Ứng dụng chạy thường xuyên, cần theo dõi crash & cập nhật.",features:["Kiểm tra 2 lần / tháng + Crashlytics","Phản hồi trong 12h làm việc","Tối đa 4 giờ kỹ thuật / tháng","6 yêu cầu cập nhật dữ liệu","Tối đa 1 bản phát hành Store","Báo cáo kỹ thuật hàng tháng"]},{id:"cao-cap",name:"Cao cấp",price:"4.000.000",period:"/ tháng",badge:"Doanh nghiệp & SLA Cao",icon:ed,isFeatured:!1,desc:"Ứng dụng kinh doanh chính, cần SLA phản hồi 2-4h & theo dõi API.",features:["Kiểm tra hàng tuần + Cảnh báo tự động","Phản hồi nhanh trong 2h - 4h","Tối đa 8 giờ kỹ thuật / tháng","12 yêu cầu cập nhật dữ liệu","Tối đa 2 bản phát hành Store","Theo dõi API, Server & ASO Store"]}];return l.jsxs("section",{className:"section pricing-sample-section",id:"bang-gia",children:[l.jsx(Uf,{}),l.jsxs("div",{className:"container pricing-main-container",children:[l.jsxs("div",{className:"pricing-sample-header reveal-up",children:[l.jsxs("div",{className:"top-recommend-pill",children:[l.jsx(pf,{size:14,className:"flame-icon"}),l.jsx("span",{children:"Lựa Chọn Khuyên Dùng"})]}),l.jsxs("h2",{className:"pricing-main-title",children:["Các Gói Dịch Vụ ",l.jsx("span",{className:"title-red-highlight",children:"Bảo Trì Ứng Dụng"})]}),l.jsx("p",{className:"pricing-main-subtitle",children:"Linh hoạt theo quy mô, tối ưu chi phí, duy trì ứng dụng vận hành liên tục."}),l.jsx("div",{className:"header-red-dash"})]}),l.jsxs("div",{className:"pricing-cards-wrapper reveal-up delay-100",children:[l.jsx("div",{className:"mascot-badge-wrap",children:l.jsx("img",{src:"/mascot-faq.webp",alt:"DUDI AI Robot Mascot",className:"mascot-faq-img"})}),l.jsx("div",{className:"pricing-sample-grid",children:t.map(n=>{const r=n.icon;return l.jsxs("div",{className:`pricing-sample-card ${n.isFeatured?"card-featured-red":""}`,children:[l.jsx("div",{className:"card-top-section",children:l.jsxs("div",{className:"card-top-header-row",children:[l.jsx("div",{className:"card-icon-square",children:l.jsx(r,{size:20})}),l.jsxs("div",{className:"card-title-badge-wrap",children:[l.jsx("h3",{className:"card-plan-title",children:n.name}),l.jsx("span",{className:"card-pill-tag",children:n.badge})]})]})}),l.jsx("div",{className:"card-middle-divider"}),l.jsxs("div",{className:"card-bottom-section",children:[l.jsxs("div",{className:"card-price-row",children:[l.jsx("span",{className:"currency-red",children:"₫"}),l.jsx("span",{className:"price-big-num",children:n.price}),l.jsx("span",{className:"period-unit",children:n.period})]}),l.jsx("div",{className:"features-scope-title",children:"PHẠM VI HẠN MỨC TRONG GÓI:"}),l.jsx("ul",{className:"features-check-list",children:n.features.map((i,o)=>l.jsxs("li",{className:"feat-check-item",children:[l.jsx("div",{className:"red-check-circle",children:l.jsx(nf,{size:11,strokeWidth:3})}),l.jsx("span",{className:"feat-label-text",children:i})]},o))}),l.jsxs("button",{className:`plan-select-btn ${n.isFeatured?"btn-red-action":"btn-white-action"}`,onClick:()=>e(n.name),children:[l.jsxs("span",{children:["Chọn gói ",n.name]}),l.jsx(Ci,{size:14})]})]})]},n.id)})})]})]}),l.jsx("style",{children:`
        .pricing-sample-section {
          padding: 38px 0 44px 0;
          background: #F8FAFC;
          position: relative;
          overflow: hidden;
        }
        .pricing-dynamic-canvas {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 0;
          pointer-events: none;
        }
        .pricing-main-container {
          position: relative;
          z-index: 2;
        }
        .pricing-sample-header {
          text-align: center;
          margin-bottom: 18px;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .top-recommend-pill {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          background: linear-gradient(135deg, #DC2626 0%, #991B1B 100%);
          color: #FFFFFF;
          padding: 3px 12px;
          border-radius: var(--radius-full);
          font-size: 11px;
          font-weight: 700;
          margin-bottom: 8px;
          box-shadow: 0 4px 12px rgba(220, 38, 38, 0.25);
        }
        .flame-icon {
          color: #FEF08A;
        }
        .pricing-main-title {
          font-size: 28px;
          font-weight: 900;
          color: #0F172A;
          letter-spacing: -0.5px;
          margin-bottom: 4px;
        }
        .title-red-highlight {
          color: #DC2626;
        }
        .pricing-main-subtitle {
          font-size: 13.5px;
          color: #64748B;
          max-width: 650px;
          line-height: 1.45;
        }
        .header-red-dash {
          width: 40px;
          height: 3px;
          background: #DC2626;
          border-radius: 2px;
          margin-top: 6px;
        }

        /* Cards Wrapper & Mascot */
        .pricing-cards-wrapper {
          position: relative;
          max-width: 1120px;
          margin: 0 auto;
        }
        .mascot-badge-wrap {
          position: absolute;
          top: -85px;
          right: -36px;
          z-index: 10;
          pointer-events: none;
        }
        .mascot-faq-img {
          width: 145px;
          height: auto;
          filter: drop-shadow(0 12px 22px rgba(220, 38, 38, 0.22));
          animation: floatMascot 4s ease-in-out infinite alternate;
        }
        @keyframes floatMascot {
          from { transform: translateY(0) rotate(0deg); }
          to { transform: translateY(-6px) rotate(2deg); }
        }

        /* Grid of 3 Cards */
        .pricing-sample-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 18px;
          align-items: stretch;
        }
        .pricing-sample-card {
          background: #FFFFFF;
          border-radius: 16px;
          border: 1px solid #E2E8F0;
          box-shadow: 0 8px 20px -5px rgba(0, 0, 0, 0.05);
          display: flex;
          flex-direction: column;
          overflow: hidden;
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }
        .pricing-sample-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 14px 30px -5px rgba(220, 38, 38, 0.12);
        }

        /* Card 1 & 3 Normal Styles */
        .pricing-sample-card .card-top-section {
          padding: 16px 18px;
        }
        .card-top-header-row {
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .card-icon-square {
          width: 38px;
          height: 38px;
          border-radius: 9px;
          background: #FEF2F2;
          color: #DC2626;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .card-title-badge-wrap {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }
        .card-plan-title {
          font-size: 18px;
          font-weight: 800;
          color: #0F172A;
          line-height: 1.2;
        }
        .card-pill-tag {
          font-size: 10.5px;
          font-weight: 700;
          color: #DC2626;
          background: #FEE2E2;
          padding: 2px 7px;
          border-radius: var(--radius-full);
          width: fit-content;
        }

        .card-middle-divider {
          height: 1px;
          background: #F1F5F9;
          margin: 0 18px;
        }

        /* Featured Card 2 (Solid Red Header) */
        .card-featured-red {
          border: 2px solid #DC2626;
          box-shadow: 0 14px 35px -5px rgba(220, 38, 38, 0.2);
          transform: scale(1.02);
        }
        .card-featured-red:hover {
          transform: scale(1.02) translateY(-4px);
        }
        .card-featured-red .card-top-section {
          background: linear-gradient(135deg, #DC2626 0%, #B91C1C 100%);
          color: #FFFFFF;
          padding: 16px 18px;
        }
        .card-featured-red .card-icon-square {
          background: rgba(255, 255, 255, 0.2);
          color: #FFFFFF;
          border: 1px solid rgba(255, 255, 255, 0.3);
        }
        .card-featured-red .card-plan-title {
          color: #FFFFFF;
        }
        .card-featured-red .card-pill-tag {
          background: #FFFFFF;
          color: #DC2626;
        }
        .card-featured-red .card-middle-divider {
          display: none;
        }

        /* Bottom Section with Price & Features */
        .card-bottom-section {
          padding: 12px 18px 16px 18px;
          display: flex;
          flex-direction: column;
          flex-grow: 1;
        }
        .card-price-row {
          display: flex;
          align-items: baseline;
          gap: 3px;
          margin-bottom: 10px;
        }
        .currency-red {
          font-size: 17px;
          font-weight: 800;
          color: #DC2626;
        }
        .price-big-num {
          font-size: 25px;
          font-weight: 900;
          color: #0F172A;
          line-height: 1;
        }
        .period-unit {
          font-size: 12px;
          color: #64748B;
          font-weight: 600;
        }
        .features-scope-title {
          font-size: 10.5px;
          font-weight: 800;
          color: #0F172A;
          letter-spacing: 0.5px;
          margin-bottom: 8px;
        }
        .features-check-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 5px;
          margin-bottom: 14px;
          flex-grow: 1;
        }
        .feat-check-item {
          display: flex;
          align-items: flex-start;
          gap: 7px;
          font-size: 11.5px;
          color: #334155;
          line-height: 1.3;
        }
        .red-check-circle {
          width: 15px;
          height: 15px;
          border-radius: 50%;
          background: #FEE2E2;
          color: #DC2626;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          margin-top: 1px;
        }
        .feat-label-text {
          color: #1E293B;
          font-weight: 500;
        }

        /* Action Buttons */
        .plan-select-btn {
          width: 100%;
          padding: 8px 12px;
          border-radius: 8px;
          font-size: 12.5px;
          font-weight: 700;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 5px;
          transition: all 0.2s ease;
        }
        .btn-red-action {
          background: linear-gradient(135deg, #DC2626 0%, #B91C1C 100%);
          color: #FFFFFF;
          border: none;
          box-shadow: 0 4px 10px rgba(220, 38, 38, 0.3);
        }
        .btn-red-action:hover {
          background: linear-gradient(135deg, #B91C1C 0%, #991B1B 100%);
          transform: translateY(-2px);
        }
        .btn-white-action {
          background: #FFFFFF;
          color: #0F172A;
          border: 1px solid #CBD5E1;
        }
        .btn-white-action:hover {
          background: #F8FAFC;
          border-color: #DC2626;
          color: #DC2626;
          transform: translateY(-2px);
        }

        @media (max-width: 1024px) {
          .pricing-sample-grid {
            grid-template-columns: 1fr;
            max-width: 460px;
            margin: 0 auto;
            gap: 24px;
          }
          .card-featured-red {
            transform: none;
          }
          .mascot-badge-wrap {
            display: none;
          }
        }
      `})]})}function Wf(){const e=[{step:"01",icon:mf,title:"Tiếp nhận",desc:"Ghi nhận sự cố & ticket tức thì qua Hotline/Zalo."},{step:"02",icon:Ff,title:"Phân loại SLA",desc:"Đánh giá mức độ ưu tiên và kích hoạt cam kết SLA."},{step:"03",icon:Cf,title:"Khảo sát",desc:"Tái hiện lỗi trên mã nguồn & thiết bị thực tế."},{step:"04",icon:cf,title:"Vá lỗi & Sửa code",desc:"Tiến hành sửa mã nguồn, tối ưu trong hạn mức giờ."},{step:"05",icon:Tf,title:"Kiểm thử & Store",desc:"Test đa thiết bị & hỗ trợ xét duyệt lên Store."},{step:"06",icon:Nf,title:"Bàn giao & Báo cáo",desc:"Báo cáo kỹ thuật chi tiết & tổng kết số giờ tháng."}];return l.jsxs("section",{className:"section process-wave-section pcb-tech-section",id:"quy-trinh",children:[l.jsx("div",{className:"pcb-bg-canvas","aria-hidden":"true",children:l.jsxs("svg",{viewBox:"0 0 1440 560",fill:"none",xmlns:"http://www.w3.org/2000/svg",preserveAspectRatio:"xMidYMid slice",className:"pcb-svg-root",children:[l.jsxs("defs",{children:[l.jsxs("linearGradient",{id:"procTraceGrad1",x1:"0%",y1:"0%",x2:"100%",y2:"0%",children:[l.jsx("stop",{offset:"0%",stopColor:"#DC2626",stopOpacity:"0.25"}),l.jsx("stop",{offset:"50%",stopColor:"#EF4444",stopOpacity:"0.9"}),l.jsx("stop",{offset:"100%",stopColor:"#FCA5A5",stopOpacity:"0.4"})]}),l.jsxs("linearGradient",{id:"procChipGrad",x1:"0%",y1:"0%",x2:"100%",y2:"100%",children:[l.jsx("stop",{offset:"0%",stopColor:"#2E080D"}),l.jsx("stop",{offset:"100%",stopColor:"#170306"})]}),l.jsx("polygon",{id:"procHexUnit",points:"0,-22 19,-11 19,11 0,22 -19,11 -19,-11",fill:"none",stroke:"#DC2626",strokeWidth:"1.2",strokeOpacity:"0.65"})]}),l.jsxs("g",{opacity:"0.65",children:[l.jsx("use",{href:"#procHexUnit",x:"160",y:"70"}),l.jsx("use",{href:"#procHexUnit",x:"198",y:"92"}),l.jsx("use",{href:"#procHexUnit",x:"198",y:"136"}),l.jsx("use",{href:"#procHexUnit",x:"160",y:"158"}),l.jsx("use",{href:"#procHexUnit",x:"122",y:"92"}),l.jsx("use",{href:"#procHexUnit",x:"122",y:"136"})]}),l.jsxs("g",{opacity:"0.55",children:[l.jsx("use",{href:"#procHexUnit",x:"1260",y:"440"}),l.jsx("use",{href:"#procHexUnit",x:"1298",y:"462"}),l.jsx("use",{href:"#procHexUnit",x:"1336",y:"440"}),l.jsx("use",{href:"#procHexUnit",x:"1298",y:"418"})]}),l.jsxs("g",{transform:"translate(680, 80)",opacity:"0.95",children:[[-10,-3,3,10].map((t,n)=>l.jsxs(Zt.Fragment,{children:[l.jsx("line",{x1:t,y1:"-24",x2:t,y2:"-16",stroke:"#7F1D1D",strokeWidth:"1.5"}),l.jsx("line",{x1:t,y1:"16",x2:t,y2:"24",stroke:"#7F1D1D",strokeWidth:"1.5"}),l.jsx("line",{x1:"-24",y1:t,x2:"-16",y2:t,stroke:"#7F1D1D",strokeWidth:"1.5"}),l.jsx("line",{x1:"16",y1:t,x2:"24",y2:t,stroke:"#7F1D1D",strokeWidth:"1.5"})]},`proc-chip-t-${n}`)),l.jsx("rect",{x:"-16",y:"-16",width:"32",height:"32",rx:"3",fill:"url(#procChipGrad)",stroke:"#DC2626",strokeWidth:"1.3"}),l.jsx("rect",{x:"-8",y:"-8",width:"16",height:"16",rx:"1",fill:"#170306",stroke:"#EF4444",strokeWidth:"1",opacity:"0.9"}),l.jsx("circle",{cx:"-10",cy:"-10",r:"1.5",fill:"#EF4444",opacity:"0.9"})]}),l.jsxs("g",{transform:"translate(780, 480)",opacity:"0.95",children:[[-10,-3,3,10].map((t,n)=>l.jsxs(Zt.Fragment,{children:[l.jsx("line",{x1:t,y1:"-24",x2:t,y2:"-16",stroke:"#7F1D1D",strokeWidth:"1.5"}),l.jsx("line",{x1:t,y1:"16",x2:t,y2:"24",stroke:"#7F1D1D",strokeWidth:"1.5"}),l.jsx("line",{x1:"-24",y1:t,x2:"-16",y2:t,stroke:"#7F1D1D",strokeWidth:"1.5"}),l.jsx("line",{x1:"16",y1:t,x2:"24",y2:t,stroke:"#7F1D1D",strokeWidth:"1.5"})]},`proc-chip-b-${n}`)),l.jsx("rect",{x:"-16",y:"-16",width:"32",height:"32",rx:"3",fill:"url(#procChipGrad)",stroke:"#DC2626",strokeWidth:"1.3"}),l.jsx("rect",{x:"-8",y:"-8",width:"16",height:"16",rx:"1",fill:"#170306",stroke:"#EF4444",strokeWidth:"1",opacity:"0.9"}),l.jsx("circle",{cx:"-10",cy:"-10",r:"1.5",fill:"#EF4444",opacity:"0.9"})]}),l.jsx("rect",{x:"60",y:"36",width:"20",height:"20",fill:"none",stroke:"#DC2626",strokeWidth:"1.2",opacity:"0.5"}),l.jsx("rect",{x:"740",y:"20",width:"110",height:"24",rx:"2",fill:"none",stroke:"#DC2626",strokeWidth:"1",opacity:"0.45"}),l.jsx("rect",{x:"1300",y:"60",width:"80",height:"22",rx:"2",fill:"none",stroke:"#DC2626",strokeWidth:"1",opacity:"0.45"}),l.jsx("g",{transform:"translate(1140, 160)",opacity:"0.6",children:[...Array(16)].map((t,n)=>l.jsx("line",{x1:n*6,y1:"0",x2:n*6+10,y2:"-14",stroke:"#991B1B",strokeWidth:"1.8",strokeLinecap:"round"},`proc-hash-tr-${n}`))}),l.jsx("g",{transform:"translate(100, 360)",opacity:"0.6",children:[...Array(24)].map((t,n)=>l.jsx("line",{x1:n*6,y1:"0",x2:n*6+10,y2:"-14",stroke:"#991B1B",strokeWidth:"1.8",strokeLinecap:"round"},`proc-hash-bl-${n}`))}),l.jsx("g",{transform:"translate(420, 480)",opacity:"0.65",children:[...Array(8)].map((t,n)=>l.jsx("line",{x1:n*8,y1:"0",x2:n*8+14,y2:"-18",stroke:"#DC2626",strokeWidth:"2.2",strokeLinecap:"round"},`proc-slash-bc-${n}`))}),l.jsx("path",{d:"M 20 80 L 100 80 L 130 110 L 200 110",stroke:"#7F1D1D",strokeWidth:"1.5",fill:"none",opacity:"0.8"}),l.jsx("circle",{cx:"200",cy:"110",r:"3",fill:"#EF4444",opacity:"0.9"}),l.jsx("path",{d:"M 20 160 L 260 160 L 320 100 L 560 100 L 630 170 L 650 170",stroke:"url(#procTraceGrad1)",strokeWidth:"2",fill:"none"}),l.jsx("circle",{cx:"650",cy:"170",r:"4",fill:"#FFFFFF",stroke:"#DC2626",strokeWidth:"1.5"}),l.jsx("path",{d:"M 750 160 L 980 160 L 1040 110 L 1380 110",stroke:"#7F1D1D",strokeWidth:"1.7",fill:"none",opacity:"0.8"}),l.jsx("circle",{cx:"750",cy:"160",r:"3.5",fill:"#EF4444"}),l.jsx("circle",{cx:"1380",cy:"110",r:"3.5",fill:"#FCA5A5",opacity:"0.9"}),l.jsx("path",{d:"M 20 220 L 240 220 L 280 260 L 460 260 L 510 310 L 780 310",stroke:"#7F1D1D",strokeWidth:"1.6",fill:"none",opacity:"0.8"}),l.jsx("circle",{cx:"780",cy:"310",r:"3.5",fill:"#EF4444"}),l.jsx("path",{d:"M 40 400 L 580 400",stroke:"#EF4444",strokeWidth:"1.8",fill:"none",opacity:"0.75",strokeDasharray:"8 6"}),l.jsx("circle",{cx:"580",cy:"400",r:"4",fill:"#EF4444",stroke:"#160306",strokeWidth:"1.5"}),l.jsx("path",{d:"M 140 500 L 220 420 L 410 420 L 480 490 L 680 490 L 730 440 L 980 440 L 1030 490 L 1420 490",stroke:"#7F1D1D",strokeWidth:"1.8",fill:"none",opacity:"0.8"}),l.jsx("circle",{cx:"140",cy:"500",r:"3.5",fill:"#EF4444"}),l.jsx("circle",{cx:"1420",cy:"490",r:"3.5",fill:"#EF4444",opacity:"0.9"}),l.jsx("path",{d:"M 850 530 L 1400 530",stroke:"#7F1D1D",strokeWidth:"1.5",fill:"none",opacity:"0.75"}),l.jsx("circle",{cx:"850",cy:"530",r:"3",fill:"#EF4444"})]})}),l.jsxs("div",{className:"container pcb-tech-content",children:[l.jsxs("div",{className:"section-header reveal-up process-header-compact",children:[l.jsxs("div",{className:"section-tag process-tech-tag",children:[l.jsx(hf,{size:14}),l.jsx("span",{children:"Quy Trình Chuẩn Hóa"})]}),l.jsx("h2",{className:"section-title process-tech-title",children:"Quy Trình Xử Lý Sự Cố & Tiếp Quản"}),l.jsx("p",{className:"section-desc process-tech-desc",children:"Vận hành tinh gọn 6 bước với thời gian minh bạch theo cam kết SLA."})]}),l.jsxs("div",{className:"wave-flowchart-wrapper reveal-up delay-100",children:[l.jsx("div",{className:"flow-straight-line","aria-hidden":"true"}),l.jsx("div",{className:"wave-nodes-grid",children:e.map((t,n)=>{const r=t.icon;return l.jsxs("div",{className:"wave-node-col",children:[l.jsx("span",{className:"node-step-tag",children:t.step}),l.jsx("div",{className:"wave-circle-node",children:l.jsx("div",{className:"circle-inner-glow",children:l.jsx(r,{size:32,strokeWidth:1.8,className:"node-icon-red"})})}),l.jsxs("div",{className:"node-text-wrap",children:[l.jsx("h3",{className:"node-title",children:t.title}),l.jsx("p",{className:"node-desc",children:t.desc})]})]},n)})})]})]}),l.jsx("style",{children:`
        .pcb-tech-section {
          position: relative !important;
          background-color: #88131A !important;
          background: radial-gradient(ellipse at 50% 10%, #DC2626 0%, #A81822 45%, #6B0E14 100%) !important;
          overflow: hidden !important;
          padding: 48px 0 54px 0 !important;
          border-top: 1px solid rgba(255, 255, 255, 0.15) !important;
          border-bottom: 1px solid rgba(255, 255, 255, 0.15) !important;
        }
        .pcb-bg-canvas {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 0;
          overflow: hidden;
          opacity: 0.9;
        }
        .pcb-svg-root {
          width: 100%;
          height: 100%;
          display: block;
        }
        .pcb-tech-content {
          position: relative;
          z-index: 2;
        }
        .process-wave-section {
          position: relative;
          overflow: hidden;
        }

        .process-header-compact {
          margin-bottom: 18px;
        }

        .process-tech-tag {
          background: rgba(220, 38, 38, 0.28) !important;
          color: #FECACA !important;
          border: 1px solid rgba(239, 68, 68, 0.5) !important;
          box-shadow: 0 0 14px rgba(220, 38, 38, 0.35) !important;
        }

        .process-tech-title {
          color: #FFFFFF !important;
          letter-spacing: -0.5px;
          text-shadow: 0 2px 14px rgba(0, 0, 0, 0.7);
        }

        .process-tech-desc {
          color: #FECACA !important;
          opacity: 0.9;
        }

        .wave-flowchart-wrapper {
          position: relative;
          max-width: 1140px;
          margin: 16px auto 0 auto;
          padding: 6px 0;
        }

        /* Straight Connecting Laser Line (Desktop) */
        .flow-straight-line {
          position: absolute;
          top: 66px;
          left: calc(100% / 12);
          right: calc(100% / 12);
          height: 3px;
          background: linear-gradient(90deg, #DC2626 0%, #F87171 50%, #DC2626 100%);
          box-shadow: 0 0 14px rgba(239, 68, 68, 0.85);
          border-radius: 9999px;
          pointer-events: none;
          z-index: 1;
          transition: all 0.3s ease;
        }

        .wave-flowchart-wrapper:hover .flow-straight-line {
          background: linear-gradient(90deg, #EF4444 0%, #FFFFFF 50%, #EF4444 100%);
          box-shadow: 0 0 20px rgba(239, 68, 68, 1);
        }

        /* Grid of 6 Nodes */
        .wave-nodes-grid {
          display: grid;
          grid-template-columns: repeat(6, 1fr);
          gap: 14px;
          position: relative;
          z-index: 2;
        }

        .wave-node-col {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          cursor: pointer;
        }

        .wave-node-col:hover {
          transform: translateY(-6px);
        }

        /* Step Number Tag - High Prominence */
        .node-step-tag {
          font-size: 11.5px;
          font-weight: 800;
          font-family: var(--font-heading);
          letter-spacing: 0.5px;
          color: #FFFFFF;
          background: #DC2626;
          border: 1.5px solid rgba(255, 255, 255, 0.4);
          padding: 2px 10px;
          border-radius: 9999px;
          margin-bottom: 9px;
          box-shadow: 0 4px 14px rgba(220, 38, 38, 0.65);
          transition: all 0.3s ease;
        }

        .wave-node-col:hover .node-step-tag {
          background: #EF4444;
          color: #FFFFFF;
          border-color: #FFFFFF;
          box-shadow: 0 0 16px rgba(239, 68, 68, 0.9);
          transform: scale(1.08);
        }

        /* Circle Node Element: Luminous Bright White / Light Frost Glass */
        .wave-circle-node {
          width: 82px;
          height: 82px;
          border-radius: 50%;
          background: #FFFFFF;
          border: 2px solid rgba(255, 255, 255, 0.95);
          box-shadow: 0 10px 28px rgba(0, 0, 0, 0.35), 0 0 16px rgba(255, 255, 255, 0.4);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 12px;
          transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
          position: relative;
        }

        .circle-inner-glow {
          width: 62px;
          height: 62px;
          border-radius: 50%;
          background: linear-gradient(135deg, #FEE2E2 0%, #FFF1F2 100%);
          border: 1.5px solid #FECDD3;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
        }

        .node-icon-red {
          color: #DC2626;
          filter: drop-shadow(0 2px 4px rgba(220, 38, 38, 0.25));
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }

        /* HOVER STATE: Glowing Crimson Tech Accent */
        .wave-node-col:hover .wave-circle-node {
          background: #FFFFFF;
          border-color: #DC2626;
          box-shadow: 0 14px 34px rgba(0, 0, 0, 0.45), 0 0 24px rgba(220, 38, 38, 0.6);
          transform: scale(1.1);
        }

        .wave-node-col:hover .circle-inner-glow {
          background: #FEE2E2;
          border-color: #F87171;
        }

        .wave-node-col:hover .node-icon-red {
          color: #B91C1C;
          transform: scale(1.1);
          filter: drop-shadow(0 2px 8px rgba(220, 38, 38, 0.4));
        }

        /* Minimal Text */
        .node-text-wrap {
          display: flex;
          flex-direction: column;
          align-items: center;
          max-width: 160px;
          padding: 0 4px;
        }

        .node-title {
          font-size: 15px;
          font-weight: 800;
          color: #FFFFFF !important;
          margin-bottom: 4px;
          line-height: 1.3;
          white-space: normal;
          text-shadow: 0 2px 8px rgba(0, 0, 0, 0.9);
          transition: color 0.3s ease;
        }

        .wave-node-col:hover .node-title {
          color: #F87171 !important;
        }

        .node-desc {
          font-size: 12px;
          color: #94A3B8 !important;
          line-height: 1.45;
          margin: 0;
          opacity: 0;
          max-height: 0;
          overflow: hidden;
          transform: translateY(6px);
          transition: opacity 0.3s ease, max-height 0.35s cubic-bezier(0.16, 1, 0.3, 1), transform 0.3s ease, margin-top 0.3s ease;
        }

        .wave-node-col:hover .node-desc {
          opacity: 1;
          max-height: 80px;
          transform: translateY(0);
          margin-top: 4px;
          color: #CBD5E1 !important;
        }

        /* Responsive Layout */
        @media (max-width: 1024px) {
          .flow-straight-line {
            display: none;
          }
          .wave-nodes-grid {
            grid-template-columns: repeat(3, 1fr);
            gap: 28px 16px;
          }
          .wave-circle-node {
            width: 76px;
            height: 76px;
          }
          .circle-inner-glow {
            width: 58px;
            height: 58px;
          }
        }

        @media (max-width: 640px) {
          .wave-nodes-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 24px 12px;
          }
          .wave-circle-node {
            width: 70px;
            height: 70px;
          }
          .circle-inner-glow {
            width: 54px;
            height: 54px;
          }
          .node-title {
            font-size: 13.5px;
          }
          .node-desc {
            font-size: 11.5px;
          }
        }
      `})]})}const Hf=[{id:1,accent:"#DC2626",image:"/case-ecommerce.webp",title:"Vá Crash SDK Thanh Toán",desc:"Khắc phục lỗi văng app trên Android 14+, nâng cấp SDK và phát hành bản vá sau 24h.",results:[{label:"Tỷ lệ Crash-free",val:"99.92%",num:99.92,decimals:2,suffix:"%",change:"tăng từ 95.8%"},{label:"Phản hồi SLA",val:"< 3 giờ",prefix:"< ",num:3,decimals:0,suffix:" giờ",change:"giờ làm việc"},{label:"Phát hành Store",val:"2 bản/tháng",num:2,decimals:0,suffix:" bản/tháng",change:"đúng kế hoạch"}]},{id:2,accent:"#0284C7",image:"/case-booking.webp",title:"Duy Trì Chuẩn Apple Store",desc:"Cấu hình Privacy Manifest, cập nhật giá dịch vụ và duyệt ngay lần gửi đầu.",results:[{label:"Thời gian Live Store",val:"100%",num:100,decimals:0,suffix:"%",change:"không gián đoạn"},{label:"Yêu cầu dữ liệu",val:"6/6",num:6,decimals:0,suffix:"/6",change:"hoàn thành"},{label:"Đánh giá Store",val:"4.8 ★",num:4.8,decimals:1,suffix:" ★",change:"duy trì điểm cao"}]},{id:3,accent:"#10B981",image:"/case-inventory.webp",title:"Bảo Trì App Kiểm Kê Nội Bộ",desc:"Kiểm tra định kỳ hàng tháng, xử lý token bảo mật và gia hạn Certificate.",results:[{label:"Kiểm tra hệ thống",val:"1 lần/tháng",num:1,decimals:0,suffix:" lần/tháng",change:"định kỳ"},{label:"Bảo mật dữ liệu",val:"100%",num:100,decimals:0,suffix:"%",change:"an toàn 100%"},{label:"Tiết kiệm chi phí",val:"90%",num:90,decimals:0,suffix:"%",change:"800k/tháng"}]}];function Vf({item:e,isVisible:t}){const[n,r]=D.useState(e.num!==void 0?(e.prefix||"")+0 .toFixed(e.decimals||0)+(e.suffix||""):e.val),i=D.useRef(!1);return D.useEffect(()=>{if(!t||e.num===void 0){e.num===void 0&&r(e.val);return}if(i.current)return;i.current=!0;const o=e.num,a=1400,s=performance.now(),c=g=>{const f=g-s,m=Math.min(f/a,1),k=m===1?1:1-Math.pow(2,-10*m),y=o*k,v=(e.prefix||"")+y.toFixed(e.decimals||0)+(e.suffix||"");if(r(v),m<1)requestAnimationFrame(c);else{const F=(e.prefix||"")+o.toFixed(e.decimals||0)+(e.suffix||"");r(F)}},d=requestAnimationFrame(c);return()=>cancelAnimationFrame(d)},[t,e.num,e.prefix,e.suffix,e.decimals,e.val]),l.jsx("span",{children:n})}function qf(){const e=D.useRef(null),[t,n]=D.useState(!1),[r,i]=D.useState({}),o=s=>{i(c=>({...c,[s]:!c[s]}))};D.useEffect(()=>{const s=new IntersectionObserver(([c])=>{c.isIntersecting&&(n(!0),s.disconnect())},{threshold:.15});return e.current&&s.observe(e.current),()=>s.disconnect()},[]);const a=Hf;return l.jsxs("section",{ref:e,className:"section bg-tech-white cases-section-compact",id:"case-study",children:[l.jsxs("div",{className:"container",children:[l.jsxs("div",{className:"section-header reveal-up cases-header-compact",children:[l.jsxs("div",{className:"section-tag",children:[l.jsx(ef,{size:14}),l.jsx("span",{children:"Thực Tế Vận Hành"})]}),l.jsx("h2",{className:"section-title",children:"Kết Quả Vận Hành Đo Lường Được"}),l.jsx("p",{className:"section-desc",children:"Hiệu quả thực tế từ các ứng dụng được DUDI tiếp quản vận hành và bảo vệ ổn định trên Store."})]}),l.jsx("div",{className:"cases-grid",children:a.map((s,c)=>{const d=!!r[s.id];return l.jsxs("div",{className:`case-card reveal-up delay-${(c+1)*120}`,style:{"--case-accent":s.accent},children:[l.jsxs("div",{className:"case-img-wrap",children:[l.jsx("img",{src:s.image,alt:s.title,className:"case-thumb-img",loading:"lazy",onError:g=>{g.currentTarget.src="/case-ecommerce.webp"}}),l.jsx("div",{className:"case-img-overlay"})]}),l.jsxs("div",{className:"case-card-body",children:[l.jsx("h3",{className:"case-title",children:s.title}),l.jsxs("button",{type:"button",className:"case-detail-btn",onClick:()=>o(s.id),"aria-expanded":d,children:[l.jsx("span",{children:d?"Thu gọn chi tiết":"Xem chi tiết"}),l.jsx(ku,{size:14,className:`case-chevron ${d?"open":""}`})]}),l.jsx("div",{className:`case-desc-drawer ${d?"open":""}`,children:l.jsx("p",{className:"case-desc",children:s.desc})}),l.jsx("div",{className:"case-kpi-grid",children:s.results.map((g,f)=>l.jsxs("div",{className:"kpi-score-box",children:[l.jsx("span",{className:"kpi-num",children:l.jsx(Vf,{item:g,isVisible:t})}),l.jsx("span",{className:"kpi-name",children:g.label})]},f))})]})]},s.id)})})]}),l.jsx("style",{children:`
        .cases-section-compact {
          padding: 38px 0 44px 0;
        }

        .cases-header-compact {
          margin-bottom: 18px;
        }

        .cases-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 18px;
          align-items: start;
        }

        .case-card {
          background: #FFFFFF;
          border-radius: var(--radius-xl);
          border: 1px solid var(--border-subtle);
          padding: 0;
          display: flex;
          flex-direction: column;
          box-shadow: 0 4px 18px rgba(0, 0, 0, 0.04);
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          position: relative;
          overflow: hidden;
        }

        .case-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 16px 36px -8px rgba(15, 23, 42, 0.1), 0 0 0 1px rgba(220, 38, 38, 0.15);
          border-color: rgba(220, 38, 38, 0.3);
        }

        /* Top Image Banner */
        .case-img-wrap {
          width: 100%;
          height: 180px;
          position: relative;
          overflow: hidden;
          background: #0F172A;
        }

        .case-thumb-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .case-card:hover .case-thumb-img {
          transform: scale(1.08);
        }

        .case-img-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, transparent 50%, rgba(15, 23, 42, 0.35) 100%);
          pointer-events: none;
        }

        .case-card-body {
          padding: 16px 16px 18px 16px;
          display: flex;
          flex-direction: column;
          flex: 1;
        }

        /* Main Title */
        .case-title {
          font-size: 15px;
          font-weight: 800;
          color: var(--color-dark);
          margin-bottom: 4px;
          line-height: 1.35;
        }

        /* Detail Toggle Button */
        .case-detail-btn {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          font-size: 11.5px;
          font-weight: 700;
          color: var(--case-accent);
          background: #F8FAFC;
          border: 1px solid #E2E8F0;
          border-radius: 6px;
          padding: 5px 10px;
          margin-top: 4px;
          margin-bottom: 10px;
          cursor: pointer;
          transition: all 0.2s ease;
          width: fit-content;
        }

        .case-detail-btn:hover {
          background: #F1F5F9;
          border-color: #CBD5E1;
        }

        .case-chevron {
          transition: transform 0.25s ease;
        }

        .case-chevron.open {
          transform: rotate(180deg);
        }

        /* Expandable Description Drawer */
        .case-desc-drawer {
          max-height: 0;
          opacity: 0;
          overflow: hidden;
          transition: max-height 0.35s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.25s ease, margin-bottom 0.25s ease;
          margin-bottom: 0;
        }

        .case-desc-drawer.open {
          max-height: 120px;
          opacity: 1;
          margin-bottom: 10px;
        }

        .case-desc {
          font-size: 12px;
          color: var(--color-text-muted);
          line-height: 1.5;
          padding: 2px 0 6px 0;
          background: transparent;
          border: none;
        }

        /* KPI Metrics Dashboard Grid */
        .case-kpi-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 6px;
          border-top: 1px dashed #E2E8F0;
          padding-top: 14px;
          margin-top: auto;
        }

        .kpi-score-box {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          padding: 10px 4px;
          background: #F8FAFC;
          border: 1px solid #EDF2F7;
          border-radius: var(--radius-sm);
          transition: background 0.2s ease;
        }

        .case-card:hover .kpi-score-box {
          background: #FFFFFF;
          border-color: #E2E8F0;
        }

        .kpi-num {
          font-family: var(--font-heading);
          font-size: 16px;
          font-weight: 900;
          color: var(--color-dark);
          line-height: 1.1;
        }

        .kpi-name {
          font-size: 10.5px;
          color: var(--color-text-muted);
          font-weight: 600;
          margin-top: 4px;
          white-space: nowrap;
        }

        @media (max-width: 1024px) {
          .cases-grid {
            grid-template-columns: 1fr;
            max-width: 600px;
            margin: 0 auto;
          }
        }
      `})]})}function Gf(){const e=["Viết lại toàn bộ ứng dụng hoặc tái cấu trúc lớn","Phát triển tính năng mới & nâng cấp Framework lớn","Thiết kế lại toàn bộ giao diện (UX/UI Redesign)","Xử lý lỗi tồn đọng & mã độc từ đơn vị cũ","Trực kỹ thuật 24/7 ngoài giờ làm việc","Phí bên thứ ba: Apple, Google, Server, SMS OTP"],t=[{num:"01",term:"Một Giờ Kỹ Thuật",color:"#0284C7",icon:af,def:"Thời gian phân tích lỗi, sửa mã nguồn, kiểm thử và đóng gói. DUDI luôn báo trước nếu phát sinh công việc vượt hạn mức tháng."},{num:"02",term:"Một Yêu Cầu Dữ Liệu",color:"#EA580C",icon:Lu,def:"Một lần cập nhật nội dung văn bản, banner hoặc cấu hình dữ liệu trong khu vực màn hình có sẵn từ nguồn khách hàng cấp."},{num:"03",term:"Một Bản Phát Hành",color:"#E11D48",icon:ed,def:"Một bộ build (IPA / AAB) đóng gói cho đợt thay đổi mã nguồn đã được khách hàng nghiệm thu trước khi đưa lên Store."},{num:"04",term:"Chỉnh UI / UX Nhỏ",color:"#0D9488",icon:jf,def:"Thay đổi văn bản, màu sắc, icon hoặc căn chỉnh lề (padding/margin) trên màn hình hiện có, không gồm thiết kế lại luồng mới."},{num:"05",term:"Sự Cố Nghiêm Trọng",color:"#DC2626",icon:si,def:"Ứng dụng văng khi mở (crash on launch) hoặc đứt gãy thanh toán. SLA phản hồi là mốc tiếp nhận và đưa phương án ban đầu."}];return l.jsxs("section",{className:"section scope-section-compact pcb-tech-section",id:"gioi-han",children:[l.jsx("div",{className:"pcb-bg-canvas","aria-hidden":"true",children:l.jsxs("svg",{viewBox:"0 0 1440 680",fill:"none",xmlns:"http://www.w3.org/2000/svg",preserveAspectRatio:"xMidYMid slice",className:"pcb-svg-root",children:[l.jsxs("defs",{children:[l.jsxs("linearGradient",{id:"scopeTraceGrad1",x1:"0%",y1:"0%",x2:"100%",y2:"0%",children:[l.jsx("stop",{offset:"0%",stopColor:"#CBD5E1",stopOpacity:"0.4"}),l.jsx("stop",{offset:"50%",stopColor:"#94A3B8",stopOpacity:"0.85"}),l.jsx("stop",{offset:"100%",stopColor:"#CBD5E1",stopOpacity:"0.4"})]}),l.jsxs("linearGradient",{id:"scopeChipGrad",x1:"0%",y1:"0%",x2:"100%",y2:"100%",children:[l.jsx("stop",{offset:"0%",stopColor:"#F1F5F9"}),l.jsx("stop",{offset:"100%",stopColor:"#E2E8F0"})]}),l.jsx("polygon",{id:"scopeHexUnit",points:"0,-24 20.78,-12 20.78,12 0,24 -20.78,12 -20.78,-12",fill:"none",stroke:"#CBD5E1",strokeWidth:"1.2",strokeOpacity:"0.65"})]}),l.jsxs("g",{opacity:"0.6",children:[l.jsx("use",{href:"#scopeHexUnit",x:"200",y:"80"}),l.jsx("use",{href:"#scopeHexUnit",x:"242",y:"104"}),l.jsx("use",{href:"#scopeHexUnit",x:"242",y:"152"}),l.jsx("use",{href:"#scopeHexUnit",x:"200",y:"176"}),l.jsx("use",{href:"#scopeHexUnit",x:"158",y:"104"}),l.jsx("use",{href:"#scopeHexUnit",x:"158",y:"152"}),l.jsx("use",{href:"#scopeHexUnit",x:"284",y:"80"})]}),l.jsxs("g",{opacity:"0.5",children:[l.jsx("use",{href:"#scopeHexUnit",x:"1240",y:"560"}),l.jsx("use",{href:"#scopeHexUnit",x:"1282",y:"584"}),l.jsx("use",{href:"#scopeHexUnit",x:"1324",y:"560"}),l.jsx("use",{href:"#scopeHexUnit",x:"1282",y:"536"})]}),l.jsxs("g",{transform:"translate(740, 90)",opacity:"0.85",children:[[-12,-4,4,12].map((n,r)=>l.jsxs(Zt.Fragment,{children:[l.jsx("line",{x1:n,y1:"-26",x2:n,y2:"-18",stroke:"#94A3B8",strokeWidth:"1.6"}),l.jsx("line",{x1:n,y1:"18",x2:n,y2:"26",stroke:"#94A3B8",strokeWidth:"1.6"}),l.jsx("line",{x1:"-26",y1:n,x2:"-18",y2:n,stroke:"#94A3B8",strokeWidth:"1.6"}),l.jsx("line",{x1:"18",y1:n,x2:"26",y2:n,stroke:"#94A3B8",strokeWidth:"1.6"})]},`scope-chip-t-${r}`)),l.jsx("rect",{x:"-18",y:"-18",width:"36",height:"36",rx:"3",fill:"url(#scopeChipGrad)",stroke:"#94A3B8",strokeWidth:"1.4"}),l.jsx("rect",{x:"-9",y:"-9",width:"18",height:"18",rx:"1.5",fill:"#CBD5E1",stroke:"#94A3B8",strokeWidth:"1",opacity:"0.75"}),l.jsx("circle",{cx:"-12",cy:"-12",r:"1.5",fill:"#DC2626",opacity:"0.8"})]}),l.jsxs("g",{transform:"translate(680, 580)",opacity:"0.85",children:[[-12,-4,4,12].map((n,r)=>l.jsxs(Zt.Fragment,{children:[l.jsx("line",{x1:n,y1:"-26",x2:n,y2:"-18",stroke:"#94A3B8",strokeWidth:"1.6"}),l.jsx("line",{x1:n,y1:"18",x2:n,y2:"26",stroke:"#94A3B8",strokeWidth:"1.6"}),l.jsx("line",{x1:"-26",y1:n,x2:"-18",y2:n,stroke:"#94A3B8",strokeWidth:"1.6"}),l.jsx("line",{x1:"18",y1:n,x2:"26",y2:n,stroke:"#94A3B8",strokeWidth:"1.6"})]},`scope-chip-b-${r}`)),l.jsx("rect",{x:"-18",y:"-18",width:"36",height:"36",rx:"3",fill:"url(#scopeChipGrad)",stroke:"#94A3B8",strokeWidth:"1.4"}),l.jsx("rect",{x:"-9",y:"-9",width:"18",height:"18",rx:"1.5",fill:"#CBD5E1",stroke:"#94A3B8",strokeWidth:"1",opacity:"0.75"}),l.jsx("circle",{cx:"-12",cy:"-12",r:"1.5",fill:"#94A3B8",opacity:"0.8"})]}),l.jsx("rect",{x:"50",y:"40",width:"22",height:"22",fill:"none",stroke:"#CBD5E1",strokeWidth:"1.2",opacity:"0.5"}),l.jsx("rect",{x:"800",y:"24",width:"120",height:"26",rx:"2",fill:"none",stroke:"#CBD5E1",strokeWidth:"1",opacity:"0.4"}),l.jsx("rect",{x:"1200",y:"70",width:"90",height:"24",rx:"2",fill:"none",stroke:"#CBD5E1",strokeWidth:"1",opacity:"0.45"}),l.jsx("g",{transform:"translate(1160, 180)",opacity:"0.55",children:[...Array(18)].map((n,r)=>l.jsx("line",{x1:r*6,y1:"0",x2:r*6+10,y2:"-14",stroke:"#94A3B8",strokeWidth:"1.8",strokeLinecap:"round"},`scope-hash-tr-${r}`))}),l.jsx("g",{transform:"translate(90, 480)",opacity:"0.55",children:[...Array(26)].map((n,r)=>l.jsx("line",{x1:r*6,y1:"0",x2:r*6+10,y2:"-14",stroke:"#94A3B8",strokeWidth:"1.8",strokeLinecap:"round"},`scope-hash-bl-${r}`))}),l.jsx("g",{transform:"translate(480, 580)",opacity:"0.6",children:[...Array(8)].map((n,r)=>l.jsx("line",{x1:r*8,y1:"0",x2:r*8+14,y2:"-18",stroke:"#94A3B8",strokeWidth:"2.2",strokeLinecap:"round"},`scope-slash-bc-${r}`))}),l.jsx("path",{d:"M 20 110 L 100 110 L 130 140 L 200 140",stroke:"#94A3B8",strokeWidth:"1.5",fill:"none",opacity:"0.65"}),l.jsx("circle",{cx:"200",cy:"140",r:"3",fill:"#94A3B8"}),l.jsx("path",{d:"M 20 180 L 260 180 L 330 120 L 610 120 L 690 190 L 710 190",stroke:"url(#scopeTraceGrad1)",strokeWidth:"2.2",fill:"none"}),l.jsx("circle",{cx:"710",cy:"190",r:"4.5",fill:"#94A3B8",stroke:"#FFFFFF",strokeWidth:"1.5"}),l.jsx("path",{d:"M 820 180 L 1000 180 L 1060 130 L 1400 130",stroke:"#94A3B8",strokeWidth:"1.8",fill:"none",opacity:"0.75"}),l.jsx("circle",{cx:"820",cy:"180",r:"3.5",fill:"#94A3B8"}),l.jsx("circle",{cx:"1400",cy:"130",r:"3.5",fill:"#94A3B8"}),l.jsx("path",{d:"M 20 280 L 180 280 L 240 340 L 500 340 L 560 400 L 800 400 L 850 350 L 1380 350",stroke:"#CBD5E1",strokeWidth:"1.6",fill:"none",opacity:"0.75"}),l.jsx("circle",{cx:"180",cy:"280",r:"3.5",fill:"#CBD5E1"}),l.jsx("circle",{cx:"1380",cy:"350",r:"3.5",fill:"#CBD5E1"}),l.jsx("path",{d:"M 40 460 L 560 460",stroke:"#DC2626",strokeWidth:"1.8",fill:"none",opacity:"0.55",strokeDasharray:"8 6"}),l.jsx("circle",{cx:"560",cy:"460",r:"4",fill:"#DC2626",stroke:"#FFFFFF",strokeWidth:"1.5"}),l.jsx("path",{d:"M 120 600 L 200 520 L 400 520 L 470 590 L 700 590 L 750 540 L 960 540 L 1010 600 L 1420 600",stroke:"#94A3B8",strokeWidth:"1.8",fill:"none",opacity:"0.75"}),l.jsx("circle",{cx:"120",cy:"600",r:"3.5",fill:"#94A3B8"}),l.jsx("circle",{cx:"1420",cy:"600",r:"3.5",fill:"#94A3B8"})]})}),l.jsxs("div",{className:"container pcb-tech-content",children:[l.jsxs("div",{className:"section-header reveal-up scope-header-compact",children:[l.jsxs("div",{className:"section-tag",children:[l.jsx(bf,{size:14}),l.jsx("span",{children:"Phạm Vi & Định Nghĩa"})]}),l.jsx("h2",{className:"section-title",children:"Minh Bạch Giới Hạn & Thuật Ngữ"}),l.jsx("p",{className:"section-desc",children:"Công khai rõ ràng các hạng mục ngoài gói cố định và định nghĩa nghiệm thu kỹ thuật."})]}),l.jsxs("div",{className:"boundaries-grid",children:[l.jsxs("div",{className:"boundary-card out-of-scope-red-card reveal-left delay-100",children:[l.jsx("div",{className:"red-card-pcb-canvas","aria-hidden":"true",children:l.jsxs("svg",{viewBox:"0 0 540 440",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"red-card-svg",preserveAspectRatio:"none",children:[l.jsxs("defs",{children:[l.jsxs("linearGradient",{id:"redTraceGlow",x1:"0%",y1:"0%",x2:"100%",y2:"100%",children:[l.jsx("stop",{offset:"0%",stopColor:"#FFFFFF",stopOpacity:"0.45"}),l.jsx("stop",{offset:"50%",stopColor:"#FECACA",stopOpacity:"0.8"}),l.jsx("stop",{offset:"100%",stopColor:"#F87171",stopOpacity:"0.3"})]}),l.jsxs("linearGradient",{id:"cyanTraceGlow",x1:"0%",y1:"0%",x2:"100%",y2:"0%",children:[l.jsx("stop",{offset:"0%",stopColor:"#38BDF8",stopOpacity:"0.2"}),l.jsx("stop",{offset:"70%",stopColor:"#38BDF8",stopOpacity:"0.75"}),l.jsx("stop",{offset:"100%",stopColor:"#FFFFFF",stopOpacity:"0.9"})]})]}),l.jsx("g",{opacity:"0.18",children:[...Array(9)].map((n,r)=>[...Array(11)].map((i,o)=>l.jsx("circle",{cx:30+o*48,cy:30+r*46,r:"1",fill:"#FFFFFF"},`dot-${r}-${o}`)))}),l.jsx("path",{d:"M 520 40 L 410 40 L 410 120 L 320 120 L 320 190 L 260 190",stroke:"url(#redTraceGlow)",strokeWidth:"1.6",strokeLinecap:"round",opacity:"0.65"}),l.jsx("circle",{cx:"260",cy:"190",r:"3",fill:"#FFFFFF",opacity:"0.9"}),l.jsx("circle",{cx:"520",cy:"40",r:"2.5",fill:"#FECACA"}),l.jsx("path",{d:"M 40 20 L 40 80 L 110 80 L 110 160 L 60 210 L 60 310",stroke:"url(#redTraceGlow)",strokeWidth:"1.5",strokeLinecap:"round",opacity:"0.5"}),l.jsx("circle",{cx:"60",cy:"310",r:"3",fill:"#FFFFFF",opacity:"0.8"}),l.jsx("circle",{cx:"40",cy:"20",r:"2.5",fill:"#FECACA"}),l.jsx("path",{d:"M 480 90 L 480 170 L 390 170 L 390 270 L 450 270 L 450 360 L 520 360",stroke:"url(#cyanTraceGlow)",strokeWidth:"1.8",strokeLinecap:"round",opacity:"0.6"}),l.jsx("circle",{cx:"520",cy:"360",r:"3.5",fill:"#38BDF8"}),l.jsx("circle",{cx:"480",cy:"90",r:"3",fill:"#FFFFFF"}),l.jsx("path",{d:"M 120 380 L 220 380 L 270 330 L 360 330 L 360 410",stroke:"url(#redTraceGlow)",strokeWidth:"1.6",strokeLinecap:"round",opacity:"0.55"}),l.jsx("circle",{cx:"120",cy:"380",r:"3",fill:"#FFFFFF",opacity:"0.85"}),l.jsx("circle",{cx:"360",cy:"410",r:"3",fill:"#FFFFFF",opacity:"0.85"}),l.jsx("path",{d:"M 180 230 L 240 230 L 280 270 L 340 270",stroke:"url(#redTraceGlow)",strokeWidth:"1.4",opacity:"0.45"}),l.jsx("circle",{cx:"340",cy:"270",r:"2.5",fill:"#FECACA"}),l.jsxs("g",{transform:"translate(470, 230)",opacity:"0.35",children:[l.jsx("rect",{x:"-14",y:"-14",width:"28",height:"28",rx:"2",fill:"#7F1D1D",stroke:"#FECACA",strokeWidth:"1"}),l.jsx("circle",{cx:"-9",cy:"-9",r:"1.5",fill:"#FFFFFF"}),[-8,-2,4].map((n,r)=>l.jsxs(Zt.Fragment,{children:[l.jsx("line",{x1:n,y1:"-20",x2:n,y2:"-14",stroke:"#FECACA",strokeWidth:"1.2"}),l.jsx("line",{x1:n,y1:"14",x2:n,y2:"20",stroke:"#FECACA",strokeWidth:"1.2"})]},r))]})]})}),l.jsxs("div",{className:"red-card-content",children:[l.jsxs("div",{className:"card-header-badge-white",children:[l.jsx("div",{className:"header-icon-badge-white",children:l.jsx(Ef,{size:16,strokeWidth:2.5,className:"header-icon-red"})}),l.jsx("span",{children:"Hạng Mục Ngoài Gói (Báo giá riêng)"})]}),l.jsx("p",{className:"boundary-intro-white",children:"Khảo sát & báo giá riêng theo từng yêu cầu:"}),l.jsx("ul",{className:"out-scope-list",children:e.map((n,r)=>l.jsxs("li",{className:"out-scope-item-white",children:[l.jsx("div",{className:"out-icon-badge",children:l.jsx(Ku,{size:13,strokeWidth:2.5,className:"out-icon-red"})}),l.jsx("span",{children:n})]},r))}),l.jsxs("div",{className:"third-party-note-white",children:[l.jsx("strong",{children:"Lưu ý:"})," Phí Store, Server, API do khách hàng thanh toán trực tiếp cho nhà cung cấp."]})]})]}),l.jsxs("div",{className:"boundary-card terms-card reveal-right delay-200",children:[l.jsxs("div",{className:"card-header-badge dark",children:[l.jsx(df,{size:18}),l.jsx("span",{children:"Định Nghĩa Thuật Ngữ Nghiệm Thu"})]}),l.jsx("p",{className:"boundary-intro",children:"Rê chuột vào từng hạng mục để xem giải nghĩa chi tiết căn cứ nghiệm thu:"}),l.jsxs("div",{className:"sample-timeline-wrapper",children:[l.jsx("div",{className:"timeline-spine-line","aria-hidden":"true"}),l.jsx("div",{className:"timeline-items-flow",children:t.map((n,r)=>{const i=n.icon;return l.jsxs("div",{className:"sample-timeline-row",style:{"--item-accent":n.color},children:[l.jsxs("div",{className:"timeline-spine-node",children:[l.jsx("div",{className:"node-ring-circle",children:l.jsx("div",{className:"node-ring-inner"})}),l.jsx("div",{className:"node-pointer-arrow"})]}),l.jsxs("div",{className:"timeline-content-block",children:[l.jsxs("div",{className:"timeline-header-row",children:[l.jsxs("div",{className:"timeline-meta-wrap",children:[l.jsx("span",{className:"timeline-big-num",children:n.num}),l.jsx("h4",{className:"timeline-term-name",children:n.term})]}),l.jsx("div",{className:"timeline-dotted-line"}),l.jsx("div",{className:"timeline-circle-badge",children:l.jsx("div",{className:"badge-outer-ring",children:l.jsx("div",{className:"badge-inner-circle",children:l.jsx(i,{size:18,className:"badge-item-icon"})})})})]}),l.jsx("div",{className:"timeline-def-collapse",children:l.jsx("p",{className:"timeline-def-text",children:n.def})})]})]},r)})})]})]})]})]}),l.jsx("style",{children:`
        .pcb-tech-section {
          position: relative;
          background: linear-gradient(180deg, #F8FAFC 0%, #FFFFFF 50%, #F1F5F9 100%);
          overflow: hidden;
          padding: 42px 0 46px 0;
        }
        .pcb-bg-canvas {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 0;
          overflow: hidden;
        }
        .pcb-svg-root {
          width: 100%;
          height: 100%;
          display: block;
          opacity: 0.92;
        }
        .pcb-tech-content {
          position: relative;
          z-index: 2;
        }
        .scope-header-compact {
          margin-bottom: 18px;
        }

        .boundaries-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
          align-items: stretch;
        }

        .boundary-card {
          border-radius: var(--radius-xl);
          padding: 20px 22px;
          display: flex;
          flex-direction: column;
        }

        /* Left Card - Brand Red with Glowing PCB Circuit Overlay */
        .out-of-scope-red-card {
          position: relative;
          background: linear-gradient(145deg, #DC2626 0%, #B91C1C 55%, #991B1B 100%);
          color: #FFFFFF;
          border: 1px solid rgba(220, 38, 38, 0.5);
          box-shadow: 0 16px 36px -8px rgba(220, 38, 38, 0.4);
          overflow: hidden;
        }

        .red-card-pcb-canvas {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 1;
          overflow: hidden;
        }

        .red-card-svg {
          width: 100%;
          height: 100%;
          display: block;
        }

        .red-card-content {
          position: relative;
          z-index: 2;
          display: flex;
          flex-direction: column;
          height: 100%;
        }

        .card-header-badge-white {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 13.5px;
          font-weight: 800;
          color: #FFFFFF;
          margin-bottom: 6px;
        }

        .header-icon-badge-white {
          width: 26px;
          height: 26px;
          border-radius: 7px;
          background: #FFFFFF;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
          flex-shrink: 0;
        }

        .header-icon-red {
          color: #DC2626;
        }

        .boundary-intro-white {
          font-size: 11.5px;
          color: #FEE2E2;
          line-height: 1.4;
          margin-bottom: 10px;
        }

        .out-scope-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 8px;
          margin-bottom: 14px;
          flex-grow: 1;
        }

        .out-scope-item-white {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 12.5px;
          color: #FFFFFF;
          line-height: 1.35;
        }

        .out-icon-badge {
          width: 18px;
          height: 18px;
          border-radius: 50%;
          background: #FFFFFF;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.25), 0 0 0 2px rgba(255, 255, 255, 0.25);
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        .out-scope-item-white:hover .out-icon-badge {
          transform: scale(1.15);
          box-shadow: 0 3px 8px rgba(0, 0, 0, 0.35), 0 0 0 3px rgba(255, 255, 255, 0.4);
        }

        .out-icon-red {
          color: #DC2626;
        }

        .third-party-note-white {
          background: rgba(0, 0, 0, 0.2);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 8px;
          padding: 8px 12px;
          font-size: 11px;
          color: #FEE2E2;
          line-height: 1.4;
        }

        /* Right Card - White */
        .terms-card {
          background: rgba(255, 255, 255, 0.94);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          border: 1px solid rgba(226, 232, 240, 0.95);
          box-shadow: 0 4px 18px rgba(15, 23, 42, 0.04);
        }

        .card-header-badge.dark {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 14.5px;
          font-weight: 800;
          color: var(--color-dark);
          margin-bottom: 8px;
        }

        .boundary-intro {
          font-size: 12.5px;
          color: var(--color-text-muted);
          line-height: 1.45;
          margin-bottom: 16px;
        }

        /* Sample Timeline Styles */
        .sample-timeline-wrapper {
          position: relative;
          padding-left: 24px;
          flex-grow: 1;
          display: flex;
          flex-direction: column;
        }

        .timeline-spine-line {
          position: absolute;
          top: 14px;
          bottom: 14px;
          left: 6px;
          width: 4px;
          background: linear-gradient(180deg, #0284C7 0%, #EA580C 25%, #E11D48 50%, #0D9488 75%, #DC2626 100%);
          border-radius: 4px;
        }

        .timeline-items-flow {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .sample-timeline-row {
          position: relative;
          display: flex;
          align-items: flex-start;
          cursor: pointer;
          padding: 4px 8px 4px 12px;
          border-radius: 10px;
          transition: background 0.25s ease, transform 0.25s ease;
        }

        .sample-timeline-row:hover {
          background: #F8FAFC;
          transform: translateX(4px);
        }

        /* Node on Spine */
        .timeline-spine-node {
          position: absolute;
          left: -24px;
          top: 8px;
          display: flex;
          align-items: center;
        }

        .node-ring-circle {
          width: 15px;
          height: 15px;
          border-radius: 50%;
          background: #FFFFFF;
          border: 2.5px solid var(--item-accent);
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 0 0 2px #FFFFFF;
          transition: transform 0.25s ease;
        }

        .sample-timeline-row:hover .node-ring-circle {
          transform: scale(1.25);
          background: var(--item-accent);
        }

        .node-ring-inner {
          width: 3px;
          height: 3px;
          border-radius: 50%;
          background: var(--item-accent);
        }

        .sample-timeline-row:hover .node-ring-inner {
          background: #FFFFFF;
        }

        .node-pointer-arrow {
          width: 0;
          height: 0;
          border-top: 4px solid transparent;
          border-bottom: 4px solid transparent;
          border-left: 5px solid var(--item-accent);
          margin-left: 3px;
        }

        /* Content block */
        .timeline-content-block {
          width: 100%;
          display: flex;
          flex-direction: column;
        }

        .timeline-header-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 10px;
          width: 100%;
        }

        .timeline-meta-wrap {
          display: flex;
          flex-direction: row;
          align-items: baseline;
          gap: 7px;
          flex-shrink: 0;
        }

        .timeline-big-num {
          font-family: var(--font-heading);
          font-size: 15px;
          font-weight: 900;
          color: var(--item-accent);
          line-height: 1;
          letter-spacing: 0.5px;
        }

        .timeline-term-name {
          font-size: 12px;
          font-weight: 800;
          color: var(--color-dark);
          text-transform: uppercase;
          letter-spacing: 0.3px;
          margin-top: 0;
          transition: color 0.2s ease;
        }

        .sample-timeline-row:hover .timeline-term-name {
          color: var(--item-accent);
        }

        /* Horizontal Dotted Connector */
        .timeline-dotted-line {
          flex-grow: 1;
          height: 0;
          border-bottom: 2px dotted #CBD5E1;
          margin: 0 6px;
          transition: border-color 0.25s ease;
        }

        .sample-timeline-row:hover .timeline-dotted-line {
          border-bottom-color: var(--item-accent);
        }

        /* Double Ring Circular Badge */
        .timeline-circle-badge {
          flex-shrink: 0;
        }

        .badge-outer-ring {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          border: 2px solid var(--item-accent);
          display: flex;
          align-items: center;
          justify-content: center;
          background: #FFFFFF;
          box-shadow: 0 3px 10px rgba(0, 0, 0, 0.06);
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .sample-timeline-row:hover .badge-outer-ring {
          background: var(--item-accent);
          box-shadow: 0 6px 16px -2px rgba(0, 0, 0, 0.2);
          transform: scale(1.1);
        }

        .badge-inner-circle {
          width: 26px;
          height: 26px;
          border-radius: 50%;
          background: #FFFFFF;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
        }

        .badge-item-icon {
          color: var(--item-accent);
          transition: all 0.3s ease;
        }

        .sample-timeline-row:hover .badge-inner-circle {
          background: #FFFFFF;
        }

        .sample-timeline-row:hover .badge-item-icon {
          transform: scale(1.15);
        }

        /* Hover Expansion for Definition */
        .timeline-def-collapse {
          max-height: 0;
          opacity: 0;
          overflow: hidden;
          transition: max-height 0.35s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.3s ease, margin-top 0.3s ease;
        }

        .sample-timeline-row:hover .timeline-def-collapse {
          max-height: 100px;
          opacity: 1;
          margin-top: 6px;
        }

        .timeline-def-text {
          font-size: 11.5px;
          color: #475569;
          line-height: 1.45;
          background: #F8FAFC;
          padding: 6px 10px;
          border: none;
          border-radius: 6px;
          box-shadow: none;
        }

        /* Bottom Finish Row */
        .timeline-finish-row {
          position: relative;
          display: flex;
          align-items: center;
          margin-top: 4px;
          padding-left: 12px;
        }

        .finish-spine-node {
          position: absolute;
          left: -22px;
          top: 50%;
          transform: translateY(-50%);
        }

        .finish-ring-circle {
          width: 11px;
          height: 11px;
          border-radius: 50%;
          background: #10B981;
          box-shadow: 0 0 0 3px #FFFFFF;
        }

        .finish-pill-badge {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          padding: 4px 12px;
          border-radius: 6px;
          border: 1.5px solid #10B981;
          color: #059669;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 0.5px;
          background: #ECFDF5;
        }

        .finish-flag-icon {
          color: #10B981;
        }

        @media (max-width: 1024px) {
          .boundaries-grid {
            grid-template-columns: 1fr;
          }
        }
      `})]})}function Kf(){const e=[{q:"Không có mã nguồn có bảo trì được không?",a:"Không. DUDI cần mã nguồn hợp lệ (Git repository hoặc source code build được) để kiểm tra và sửa lỗi. Nếu chỉ có file APK/IPA, DUDI cần khảo sát riêng."},{q:"Thời gian phản hồi SLA 2 giờ có phải là sửa xong lỗi không?",a:"Không. Mốc SLA (2-4h hoặc 12-24h) là thời gian tiếp nhận, phân loại và đưa ra phương án xử lý đầu tiên. Thời gian sửa hoàn tất phụ thuộc vào độ phức tạp của lỗi."},{q:"Chi phí bảo trì hàng tháng đã bao gồm phí Store và Server chưa?",a:"Chưa bao gồm. Phí tài khoản Apple Developer ($99/năm), Google Play, máy chủ (Cloud/VPS), Firebase và các API bên thứ ba do khách hàng thanh toán trực tiếp."},{q:"Nếu Store (Apple/Google) từ chối duyệt bản cập nhật thì xử lý thế nào?",a:"DUDI kiểm tra phản hồi từ Store và khắc phục các vấn đề mã nguồn trong hạn mức giờ của gói. Yêu cầu thay đổi lớn về luồng nghiệp vụ sẽ được báo giá riêng."},{q:"Số giờ kỹ thuật không sử dụng hết trong tháng có được cộng dồn không?",a:"Không cộng dồn. Hạn mức giờ kỹ thuật, lượt cập nhật dữ liệu và bản phát hành được làm mới vào đầu mỗi chu kỳ thanh toán hàng tháng."},{q:"DUDI có đảm bảo bảo mật thông tin mã nguồn và dữ liệu không?",a:"DUDI tuân thủ nguyên tắc cấp quyền tối thiểu (Least Privilege), cam kết bảo mật theo NDA, không lưu mật khẩu và thu hồi quyền khi kết thúc hợp đồng."}],[t,n]=D.useState({0:!0}),r=i=>{n(o=>({...o,[i]:!o[i]}))};return l.jsxs("section",{className:"section bg-tech-white faq-section",id:"faq",children:[l.jsxs("div",{className:"container",children:[l.jsxs("div",{className:"section-header reveal-up faq-header",children:[l.jsxs("div",{className:"section-tag",children:[l.jsx(Ja,{size:14}),l.jsx("span",{children:"Giải Đáp Thắc Mắc"})]}),l.jsx("h2",{className:"section-title",children:"Câu Hỏi Thường Gặp Về Dịch Vụ"}),l.jsx("p",{className:"section-desc",children:"Các giải đáp trọng tâm về SLA, mã nguồn và chi phí vận hành ứng dụng."})]}),l.jsx("div",{className:"faq-accordion-container",children:e.map((i,o)=>{const a=!!t[o];return l.jsxs("div",{className:`faq-accordion-item ${a?"active":""}`,children:[l.jsxs("button",{type:"button",className:"faq-accordion-header",onClick:()=>r(o),"aria-expanded":a,children:[l.jsxs("div",{className:"faq-header-left",children:[l.jsx("div",{className:"faq-icon-bubble",children:l.jsx(Ja,{size:17})}),l.jsx("span",{className:"faq-question-text",children:i.q})]}),l.jsx("div",{className:`faq-chevron-box ${a?"open":""}`,children:l.jsx(ku,{size:18})})]}),l.jsx("div",{className:`faq-accordion-collapse ${a?"show":""}`,children:l.jsx("div",{className:"faq-accordion-body",children:l.jsx("p",{className:"faq-answer-text",children:i.a})})})]},o)})})]}),l.jsx("style",{children:`
        .faq-section {
          padding: 48px 0 56px 0;
        }
        .faq-header {
          text-align: center;
          max-width: 800px;
          margin: 0 auto 32px auto;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .faq-header .section-tag {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 5px 14px;
          border-radius: var(--radius-full);
          background: #FEE2E2;
          color: #DC2626;
          font-size: 12.5px;
          font-weight: 700;
          letter-spacing: 0.5px;
          margin-bottom: 12px;
          border: 1px solid rgba(220, 38, 38, 0.15);
        }
        .faq-header .section-title {
          font-size: 32px;
          font-weight: 800;
          color: #0F172A;
          line-height: 1.25;
          margin-bottom: 10px;
          letter-spacing: -0.02em;
        }
        .faq-header .section-desc {
          font-size: 15px;
          color: #64748B;
          max-width: 600px;
          line-height: 1.55;
          margin: 0 auto;
        }
        .faq-accordion-container {
          max-width: 820px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .faq-accordion-item {
          background: #FFFFFF;
          border: 1px solid var(--border-subtle);
          border-radius: 12px;
          overflow: hidden;
          transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
          box-shadow: 0 2px 8px rgba(15, 23, 42, 0.03);
        }
        .faq-accordion-item:hover {
          border-color: rgba(220, 38, 38, 0.3);
          box-shadow: 0 6px 20px -4px rgba(220, 38, 38, 0.08);
        }
        .faq-accordion-item.active {
          border-color: rgba(220, 38, 38, 0.4);
          box-shadow: 0 8px 24px -4px rgba(220, 38, 38, 0.1);
        }
        .faq-accordion-header {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 16px 20px;
          background: transparent;
          border: none;
          cursor: pointer;
          text-align: left;
          gap: 14px;
          transition: background 0.2s ease;
        }
        .faq-accordion-header:hover {
          background: rgba(254, 242, 242, 0.4);
        }
        .faq-header-left {
          display: flex;
          align-items: center;
          gap: 14px;
          flex: 1;
        }
        .faq-icon-bubble {
          width: 32px;
          height: 32px;
          border-radius: 9px;
          background: #FEF2F2;
          color: var(--color-primary);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          border: 1px solid rgba(220, 38, 38, 0.18);
          transition: all 0.2s ease;
        }
        .faq-accordion-item.active .faq-icon-bubble {
          background: var(--color-primary);
          color: #FFFFFF;
          border-color: var(--color-primary);
        }
        .faq-question-text {
          font-size: 15.5px;
          font-weight: 700;
          color: var(--color-dark);
          line-height: 1.4;
          letter-spacing: -0.01em;
        }
        .faq-chevron-box {
          width: 28px;
          height: 28px;
          border-radius: 50%;
          background: #F8FAFC;
          color: var(--color-text-muted);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          border: 1px solid var(--border-subtle);
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .faq-chevron-box.open {
          transform: rotate(180deg);
          background: #FEF2F2;
          color: var(--color-primary);
          border-color: rgba(220, 38, 38, 0.25);
        }
        
        /* Smooth Accordion Body */
        .faq-accordion-collapse {
          display: grid;
          grid-template-rows: 0fr;
          transition: grid-template-rows 0.3s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.25s ease;
          opacity: 0;
        }
        .faq-accordion-collapse.show {
          grid-template-rows: 1fr;
          opacity: 1;
        }
        .faq-accordion-body {
          overflow: hidden;
        }
        .faq-answer-text {
          padding: 0 20px 18px 66px;
          margin: 0;
          font-size: 14px;
          color: var(--color-text-muted);
          line-height: 1.6;
        }

        @media (max-width: 640px) {
          .faq-accordion-header {
            padding: 14px 16px;
            gap: 10px;
          }
          .faq-question-text {
            font-size: 14.5px;
          }
          .faq-answer-text {
            padding: 0 16px 14px 16px;
            font-size: 13.5px;
          }
        }
      `})]})}function Qf({selectedPlan:e,setSelectedPlan:t,showToast:n}){const[r,i]=D.useState({appName:"",storeLink:"",platforms:["iOS","Android"],techStack:"",sourceCodeStatus:"repo",appStatus:["crash"],plan:e||"Tiêu chuẩn",phone:"",note:""}),[o,a]=D.useState({}),[s,c]=D.useState(!1),[d,g]=D.useState(!1);D.useEffect(()=>{e&&i(F=>({...F,plan:e}))},[e]);const f=F=>{i(p=>{const h=p.platforms.includes(F)?p.platforms.filter(x=>x!==F):[...p.platforms,F];return{...p,platforms:h}}),o.platforms&&a(p=>({...p,platforms:null}))},m=F=>{i(p=>{const h=p.appStatus.includes(F)?p.appStatus.filter(x=>x!==F):[...p.appStatus,F];return{...p,appStatus:h}}),o.appStatus&&a(p=>({...p,appStatus:null}))},k=()=>{const F={};if((!r.appName||r.appName.trim().length<2||r.appName.trim().length>120)&&(F.appName="Tên ứng dụng phải từ 2 đến 120 ký tự"),r.storeLink&&r.storeLink.trim()!=="")try{new URL(r.storeLink)}catch{F.storeLink="Vui lòng nhập đường link Store hợp lệ (bắt đầu bằng http:// hoặc https://)"}(!r.platforms||r.platforms.length===0)&&(F.platforms="Vui lòng chọn ít nhất một nền tảng (iOS, Android hoặc cả hai)"),r.sourceCodeStatus||(F.sourceCodeStatus="Vui lòng chọn tình trạng mã nguồn hiện tại"),(!r.appStatus||r.appStatus.length===0)&&(F.appStatus="Vui lòng chọn ít nhất một tình trạng ứng dụng"),r.plan||(F.plan="Vui lòng chọn gói quan tâm");const p=r.phone.replace(/\s+/g,"");return(!p||!/^[0-9]{9,12}$/.test(p))&&(F.phone="Số điện thoại hoặc Zalo phải từ 9 đến 12 chữ số hợp lệ"),a(F),Object.keys(F).length===0},y=F=>{if(F.preventDefault(),!k()){n("Vui lòng kiểm tra lại các trường thông tin bắt buộc.");return}c(!0),setTimeout(()=>{c(!1),g(!0),n("Gửi thông tin thành công! Kỹ sư DUDI sẽ liên hệ sớm nhất.")},1e3)},v=()=>{i({appName:"",storeLink:"",platforms:["iOS","Android"],techStack:"",sourceCodeStatus:"repo",appStatus:["crash"],plan:"Tiêu chuẩn",phone:"",note:""}),g(!1),a({})};return l.jsxs("section",{className:"section form-section-compact",id:"form-dang-ky",children:[l.jsxs("div",{className:"container",children:[l.jsxs("div",{className:"section-header reveal-up form-header-compact",children:[l.jsxs("div",{className:"section-tag",children:[l.jsx(es,{size:14}),l.jsx("span",{children:"Tiếp Nhận Khảo Sát"})]}),l.jsx("h2",{className:"section-title",children:"Gửi Yêu Cầu Đánh Giá Tiếp Quản Ứng Dụng"}),l.jsx("p",{className:"section-desc",children:"Gửi thông tin để DUDI đánh giá khả năng tiếp quản và báo phương án trong 24 giờ."})]}),l.jsxs("div",{className:"lead-form-layout-container",children:[l.jsx("div",{className:"lead-form-mascot-col reveal-left delay-100",children:l.jsx("div",{className:"mascot-img-wrapper",children:l.jsx("img",{src:"/mascot-support.webp",alt:"DUDI Tech Mascot App Support",className:"mascot-full-img"})})}),l.jsx("div",{className:"lead-form-card-col reveal-right delay-200",children:l.jsx("div",{className:"form-card-wrapper",children:d?l.jsxs("div",{className:"form-success-box",children:[l.jsx("div",{className:"success-icon-wrap",children:l.jsx(Cu,{size:48})}),l.jsx("h3",{className:"success-title",children:"Tiếp Nhận Thông Tin Thành Công!"}),l.jsx("p",{className:"success-msg",children:l.jsx("strong",{children:"DUDI đã nhận thông tin ứng dụng và sẽ liên hệ để xác nhận khả năng tiếp quản."})}),l.jsxs("div",{className:"success-summary",children:[l.jsxs("div",{className:"summary-line",children:[l.jsx("span",{children:"Ứng dụng:"})," ",l.jsx("strong",{children:r.appName})]}),l.jsxs("div",{className:"summary-line",children:[l.jsx("span",{children:"Gói quan tâm:"})," ",l.jsxs("strong",{children:["Gói ",r.plan]})]}),l.jsxs("div",{className:"summary-line",children:[l.jsx("span",{children:"Số liên hệ:"})," ",l.jsx("strong",{children:r.phone})]})]}),l.jsxs("button",{className:"btn-secondary",onClick:v,style:{marginTop:24},children:[l.jsx(Zu,{size:16}),l.jsx("span",{children:"Gửi thêm ứng dụng khác"})]})]}):l.jsxs("form",{className:"lead-form",onSubmit:y,noValidate:!0,children:[l.jsxs("div",{className:"form-grid",children:[l.jsxs("div",{className:"form-group half-width",children:[l.jsxs("label",{htmlFor:"appName",className:"form-label",children:["Tên ứng dụng ",l.jsx("span",{className:"req",children:"*"})]}),l.jsx("input",{type:"text",id:"appName",name:"appName",className:`form-input ${o.appName?"input-error":""}`,placeholder:"Ví dụ: App Bán Hàng, Đặt Xe...",value:r.appName,onChange:F=>{i({...r,appName:F.target.value}),o.appName&&a({...o,appName:null})},maxLength:120}),o.appName&&l.jsx("span",{className:"error-text",children:o.appName})]}),l.jsxs("div",{className:"form-group half-width",children:[l.jsxs("label",{htmlFor:"storeLink",className:"form-label",children:["Đường dẫn Store ",l.jsx("span",{className:"optional",children:"(Tùy chọn)"})]}),l.jsx("input",{type:"url",id:"storeLink",name:"storeLink",className:`form-input ${o.storeLink?"input-error":""}`,placeholder:"https://apps.apple.com/... hoặc Play Store",value:r.storeLink,onChange:F=>{i({...r,storeLink:F.target.value}),o.storeLink&&a({...o,storeLink:null})}}),o.storeLink&&l.jsx("span",{className:"error-text",children:o.storeLink})]}),l.jsxs("div",{className:"form-group half-width",children:[l.jsxs("label",{className:"form-label",children:["Nền tảng ứng dụng ",l.jsx("span",{className:"req",children:"*"})]}),l.jsx("div",{className:"checkbox-group",children:["iOS","Android"].map(F=>l.jsxs("label",{className:"checkbox-label",children:[l.jsx("input",{type:"checkbox",checked:r.platforms.includes(F),onChange:()=>f(F)}),l.jsx("span",{className:"checkbox-text",children:F})]},F))}),o.platforms&&l.jsx("span",{className:"error-text",children:o.platforms})]}),l.jsxs("div",{className:"form-group half-width",children:[l.jsxs("label",{htmlFor:"techStack",className:"form-label",children:["Công nghệ phát triển ",l.jsx("span",{className:"optional",children:"(Nếu biết)"})]}),l.jsxs("select",{id:"techStack",className:"form-select",value:r.techStack,onChange:F=>i({...r,techStack:F.target.value}),children:[l.jsx("option",{value:"",children:"-- Chọn công nghệ --"}),l.jsx("option",{value:"flutter",children:"Flutter"}),l.jsx("option",{value:"react-native",children:"React Native"}),l.jsx("option",{value:"native-ios-android",children:"Native (iOS Swift / Android Kotlin)"}),l.jsx("option",{value:"unknown",children:"Chưa rõ / Cần kỹ sư kiểm tra"})]})]}),l.jsxs("div",{className:"form-group half-width",children:[l.jsxs("label",{htmlFor:"sourceCodeStatus",className:"form-label",children:["Tình trạng mã nguồn (Source Code) ",l.jsx("span",{className:"req",children:"*"})]}),l.jsxs("select",{id:"sourceCodeStatus",className:"form-select",value:r.sourceCodeStatus,onChange:F=>{i({...r,sourceCodeStatus:F.target.value}),o.sourceCodeStatus&&a({...o,sourceCodeStatus:null})},children:[l.jsx("option",{value:"repo",children:"Có Repository (GitHub / GitLab / Bitbucket)"}),l.jsx("option",{value:"zip",children:"Có file mã nguồn đóng gói (.zip, .tar)"}),l.jsx("option",{value:"unknown",children:"Chưa rõ / Cần liên hệ dev cũ"})]}),r.sourceCodeStatus==="unknown"&&l.jsxs("div",{className:"source-warning-box",children:[l.jsx(si,{size:15}),l.jsxs("span",{children:[l.jsx("strong",{children:"Lưu ý:"})," DUDI chỉ nhận bảo trì khi có mã nguồn hợp lệ. Trường hợp chưa rõ mã nguồn, chúng tôi sẽ cần khảo sát riêng."]})]})]}),l.jsxs("div",{className:"form-group half-width",children:[l.jsxs("label",{htmlFor:"plan",className:"form-label",children:["Gói dịch vụ quan tâm ",l.jsx("span",{className:"req",children:"*"})]}),l.jsxs("select",{id:"plan",className:"form-select",value:r.plan,onChange:F=>{i({...r,plan:F.target.value}),t&&t(F.target.value),o.plan&&a({...o,plan:null})},children:[l.jsx("option",{value:"Cơ bản",children:"Gói Cơ bản (800.000đ / tháng)"}),l.jsx("option",{value:"Tiêu chuẩn",children:"Gói Tiêu chuẩn (2.000.000đ / tháng)"}),l.jsx("option",{value:"Cao cấp",children:"Gói Cao cấp (4.000.000đ / tháng)"}),l.jsx("option",{value:"Chưa rõ",children:"Chưa rõ / Cần tư vấn thêm"})]})]}),l.jsxs("div",{className:"form-group full-width",children:[l.jsxs("label",{className:"form-label",children:["Tình trạng thực tế đang gặp phải ",l.jsx("span",{className:"req",children:"*"})]}),l.jsx("div",{className:"checkbox-wrap-grid",children:[{id:"crash",label:"Bị crash / Văng ứng dụng đột ngột"},{id:"broken-features",label:"Lỗi chức năng / Không dùng được tính năng"},{id:"slow",label:"Ứng dụng bị chậm, đơ lag"},{id:"need-release",label:"Cần build và phát hành bản cập nhật lên Store"},{id:"other",label:"Yêu cầu bảo trì định kỳ khác"}].map(F=>l.jsxs("label",{className:"checkbox-pill",children:[l.jsx("input",{type:"checkbox",checked:r.appStatus.includes(F.id),onChange:()=>m(F.id)}),l.jsx("span",{className:"pill-text",children:F.label})]},F.id))}),o.appStatus&&l.jsx("span",{className:"error-text",children:o.appStatus})]}),l.jsxs("div",{className:"form-group full-width",children:[l.jsxs("label",{htmlFor:"phone",className:"form-label",children:["Số điện thoại hoặc Zalo tiếp nhận phản hồi ",l.jsx("span",{className:"req",children:"*"})]}),l.jsx("input",{type:"tel",id:"phone",name:"phone",className:`form-input ${o.phone?"input-error":""}`,placeholder:"Ví dụ: 0909163821 hoặc 0987654321",value:r.phone,onChange:F=>{i({...r,phone:F.target.value}),o.phone&&a({...o,phone:null})},maxLength:14}),o.phone&&l.jsx("span",{className:"error-text",children:o.phone})]})]}),l.jsxs("div",{className:"form-footer",children:[l.jsxs("div",{className:"security-guarantee",children:[l.jsx(gf,{size:15}),l.jsxs("span",{children:["DUDI ",l.jsx("strong",{children:"không"})," thu thập token, signing key hoặc mật khẩu tài khoản qua form công khai."]})]}),l.jsx("button",{type:"submit",className:"btn-primary form-submit-btn",disabled:s,children:s?l.jsx("span",{children:"Đang gửi thông tin..."}):l.jsxs(l.Fragment,{children:[l.jsx("span",{children:"Gửi ứng dụng để DUDI kiểm tra"}),l.jsx(es,{size:16})]})})]})]})})})]})]}),l.jsx("style",{children:`
        .form-section-compact {
          padding: 38px 0 46px 0;
          position: relative;
          background-color: #FFFFFF !important;
          background-image: 
            radial-gradient(circle at 15% 50%, rgba(220, 38, 38, 0.03) 0%, transparent 40%),
            radial-gradient(circle at 85% 50%, rgba(56, 189, 248, 0.03) 0%, transparent 40%),
            url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='138.56' viewBox='0 0 160 138.56'%3E%3Cg fill='none' stroke='%23E2E8F0' stroke-width='0.75' opacity='0.75'%3E%3Cpolygon points='80,0 160,46.19 160,92.38 80,138.56 0,92.38 0,46.19'/%3E%3Cline x1='80' y1='0' x2='80' y2='138.56'/%3E%3Cline x1='0' y1='46.19' x2='160' y2='92.38'/%3E%3Cline x1='0' y1='92.38' x2='160' y2='46.19'/%3E%3Ccircle cx='80' cy='69.28' r='1.5' fill='%23CBD5E1' opacity='0.8'/%3E%3Ccircle cx='0' cy='46.19' r='1.2' fill='%23CBD5E1' opacity='0.8'/%3E%3Ccircle cx='160' cy='46.19' r='1.2' fill='%23CBD5E1' opacity='0.8'/%3E%3Ccircle cx='80' cy='0' r='1.2' fill='%23CBD5E1' opacity='0.8'/%3E%3Ccircle cx='80' cy='138.56' r='1.2' fill='%23CBD5E1' opacity='0.8'/%3E%3C/g%3E%3C/svg%3E") !important;
          background-size: auto, auto, 160px 138.56px !important;
          background-position: center, center, center center !important;
          overflow: hidden;
        }
        .form-header-compact {
          margin-bottom: 22px;
        }

        /* 2-Column Grid: 3D Mascot on Left, Red Form on Right */
        .lead-form-layout-container {
          width: 100%;
          max-width: 1220px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1.12fr 1.25fr;
          gap: 32px;
          align-items: center;
        }

        .lead-form-mascot-col {
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          background: transparent;
        }

        .mascot-img-wrapper {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          background: transparent;
        }

        .mascot-full-img {
          width: 100%;
          max-width: 576px;
          height: auto;
          object-fit: contain;
          filter: drop-shadow(0 20px 42px rgba(220, 38, 38, 0.18));
          animation: floatLeadMascot 4.2s ease-in-out infinite alternate;
        }

        @keyframes floatLeadMascot {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(-12px);
          }
        }

        .lead-form-card-col {
          width: 100%;
          position: relative;
          z-index: 5;
        }

        /* Red Form Card */
        .form-card-wrapper {
          width: 100%;
          background: linear-gradient(145deg, #DC2626 0%, #B91C1C 55%, #991B1B 100%);
          border-radius: var(--radius-xl);
          border: 1px solid rgba(220, 38, 38, 0.4);
          padding: 18px 22px;
          box-shadow: 0 20px 45px -10px rgba(220, 38, 38, 0.35), 0 8px 24px -4px rgba(15, 23, 42, 0.08);
          color: #FFFFFF;
          position: relative;
        }
        .form-grid {
          display: flex;
          flex-wrap: wrap;
          gap: 8px 10px;
        }
        .form-group {
          display: flex;
          flex-direction: column;
        }
        .full-width {
          width: 100%;
        }
        .half-width {
          width: calc(50% - 5px);
        }
        .form-label {
          font-size: 11.5px;
          font-weight: 700;
          color: #FFFFFF;
          margin-bottom: 2px;
        }
        .req {
          color: #FEF08A;
          font-weight: 800;
          margin-left: 2px;
        }
        .optional {
          font-weight: normal;
          color: #FEE2E2;
          font-size: 10.5px;
        }
        .form-input, .form-select {
          padding: 6px 10px;
          border-radius: var(--radius-sm);
          border: 1px solid rgba(255, 255, 255, 0.3);
          background: #FFFFFF;
          font-size: 12px;
          color: var(--color-dark);
          transition: var(--transition);
          height: 32px;
        }
        .form-input:focus, .form-select:focus {
          outline: none;
          background: #FFFFFF;
          border-color: #FFFFFF;
          box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.4);
        }
        .input-error {
          border-color: #F87171 !important;
          background: #FFF5F5 !important;
          box-shadow: 0 0 0 2px rgba(248, 113, 113, 0.4) !important;
        }
        .error-text {
          font-size: 10.5px;
          color: #FEF08A;
          font-weight: 700;
          margin-top: 2px;
          background: rgba(0, 0, 0, 0.25);
          padding: 1px 5px;
          border-radius: 3px;
          width: fit-content;
        }
        .checkbox-group {
          display: flex;
          gap: 14px;
          align-items: center;
          padding: 2px 0;
          height: 32px;
        }
        .checkbox-label {
          display: flex;
          align-items: center;
          gap: 5px;
          font-size: 12.5px;
          font-weight: 600;
          color: #FFFFFF;
          cursor: pointer;
          user-select: none;
        }
        .checkbox-label input[type="checkbox"] {
          accent-color: #2563EB;
          width: 16px;
          height: 16px;
          cursor: pointer;
          border-radius: 3px;
        }
        .checkbox-wrap-grid {
          display: flex;
          flex-wrap: wrap;
          gap: 5px;
        }
        .checkbox-pill {
          display: inline-flex;
          align-items: center;
          cursor: pointer;
        }
        .checkbox-pill input {
          display: none;
        }
        .pill-text {
          padding: 4px 10px;
          background: rgba(255, 255, 255, 0.15);
          border: 1px solid rgba(255, 255, 255, 0.3);
          border-radius: var(--radius-full);
          font-size: 11px;
          font-weight: 600;
          color: #FFFFFF;
          transition: var(--transition);
        }
        .checkbox-pill:hover .pill-text {
          background: rgba(255, 255, 255, 0.25);
        }
        .checkbox-pill input:checked + .pill-text {
          background: #FFFFFF;
          border-color: #FFFFFF;
          color: #DC2626;
          font-weight: 800;
          box-shadow: 0 3px 8px rgba(0, 0, 0, 0.2);
        }
        .source-warning-box {
          display: flex;
          align-items: flex-start;
          gap: 5px;
          background: rgba(0, 0, 0, 0.25);
          border: 1px solid rgba(254, 240, 138, 0.4);
          color: #FEF08A;
          padding: 5px 8px;
          border-radius: var(--radius-sm);
          font-size: 11px;
          margin-top: 4px;
          line-height: 1.35;
        }
        .form-footer {
          margin-top: 10px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          border-top: 1px solid rgba(255, 255, 255, 0.2);
          padding-top: 10px;
        }
        .security-guarantee {
          display: flex;
          align-items: center;
          gap: 5px;
          font-size: 10.5px;
          color: #FEE2E2;
          max-width: 360px;
          line-height: 1.3;
        }
        .form-submit-btn {
          background: #FFFFFF;
          color: #DC2626;
          border: none;
          font-weight: 800;
          padding: 9px 18px;
          font-size: 13px;
          flex-shrink: 0;
          border-radius: var(--radius-sm);
          box-shadow: 0 4px 14px rgba(0, 0, 0, 0.2);
          transition: all 0.25s ease;
        }
        .form-submit-btn:hover {
          background: #FEF2F2;
          color: #B91C1C;
          transform: translateY(-2px);
          box-shadow: 0 6px 18px rgba(0, 0, 0, 0.25);
        }

        /* Success State */
        .form-success-box {
          text-align: center;
          padding: 30px 20px;
          color: #FFFFFF;
        }
        .success-icon-wrap {
          color: #FEF08A;
          margin-bottom: 16px;
        }
        .success-title {
          font-size: 24px;
          font-weight: 800;
          color: #FFFFFF;
          margin-bottom: 12px;
        }
        .success-msg {
          font-size: 15.5px;
          color: #FEE2E2;
          line-height: 1.6;
          max-width: 540px;
          margin: 0 auto 24px auto;
        }
        .success-summary {
          background: rgba(0, 0, 0, 0.2);
          border-radius: var(--radius-md);
          border: 1px solid rgba(255, 255, 255, 0.2);
          padding: 16px 20px;
          max-width: 440px;
          margin: 0 auto;
          text-align: left;
          font-size: 13.5px;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .summary-line {
          display: flex;
          justify-content: space-between;
          color: #FEE2E2;
        }
        .summary-line strong {
          color: #FFFFFF;
        }

        @media (max-width: 992px) {
          .lead-form-layout-container {
            grid-template-columns: 1fr;
            gap: 20px;
          }
          .mascot-full-img {
            max-width: 384px;
          }
        }

        @media (max-width: 768px) {
          .form-card-wrapper {
            padding: 16px 14px;
          }
          .half-width {
            width: 100%;
          }
          .form-footer {
            flex-direction: column;
            align-items: stretch;
          }
          .form-submit-btn {
            width: 100%;
          }
        }
      `})]})}function Yf({onPhoneClick:e}){const t=()=>{const r=document.getElementById("form-dang-ky");r&&r.scrollIntoView({behavior:"smooth"})},n=()=>{window.open("https://zalo.me/0909163821","_blank","noopener,noreferrer")};return l.jsxs("section",{className:"section final-cta-section",id:"lien-he",children:[l.jsx("div",{className:"final-cta-bg","aria-hidden":"true"}),l.jsx("div",{className:"final-cta-overlay","aria-hidden":"true"}),l.jsx("div",{className:"container final-cta-container",children:l.jsxs("div",{className:"cta-box-tech reveal-scale",children:[l.jsxs("div",{className:"cta-header-center reveal-up delay-100",children:[l.jsxs("div",{className:"cta-tag",children:[l.jsx(Af,{size:14}),l.jsx("span",{children:"Khởi Động Bảo Trì Ngay Hôm Nay"})]}),l.jsx("h2",{className:"cta-heading",children:"Bảo Vệ Ứng Dụng Của Bạn Khỏi Rủi Ro Gián Đoạn & Bị Gỡ Khỏi Store"})]}),l.jsxs("div",{className:"cta-center-actions reveal-up delay-200",children:[l.jsxs("button",{className:"btn-primary cta-action-btn",onClick:t,children:[l.jsx("span",{children:"Gửi ứng dụng để DUDI kiểm tra"}),l.jsx(Ci,{size:18})]}),l.jsxs("div",{className:"cta-direct-channels",children:[l.jsx("span",{className:"channels-label",children:"Hoặc liên hệ kỹ thuật trực tiếp:"}),l.jsxs("div",{className:"channels-row",children:[l.jsxs("button",{className:"channel-pill phone",onClick:e,children:[l.jsx(Ni,{size:14}),l.jsx("span",{children:"0909 163 821"})]}),l.jsxs("button",{className:"channel-pill zalo",onClick:n,children:[l.jsx(kf,{size:14}),l.jsx("span",{children:"Chat Zalo"})]})]})]}),l.jsxs("div",{className:"cta-perks-center",children:[l.jsxs("div",{className:"perk-item",children:[l.jsx(tr,{size:16,className:"text-success"}),l.jsx("span",{children:"Không phát sinh chi phí ẩn"})]}),l.jsx("span",{className:"perk-divider","aria-hidden":"true",children:"•"}),l.jsxs("div",{className:"perk-item",children:[l.jsx(tr,{size:16,className:"text-success"}),l.jsx("span",{children:"Khảo sát mã nguồn trước khi ký hợp đồng"})]})]})]})]})}),l.jsx("style",{children:`
        .final-cta-section {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          padding: 40px 0;
          box-sizing: border-box;
          overflow: hidden;
        }

        /* Sharp Wireframe City Background Image */
        .final-cta-bg {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-image: url('/final-cta-bg.webp');
          background-size: cover;
          background-position: center center;
          background-repeat: no-repeat;
          z-index: 1;
        }

        /* Balanced Tint Overlay (Cyber Red) */
        .final-cta-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(180deg, rgba(22, 3, 6, 0.55) 0%, rgba(20, 2, 5, 0.75) 100%);
          z-index: 2;
        }

        .final-cta-container {
          width: 100%;
          display: flex;
          justify-content: center;
          position: relative;
          z-index: 3;
        }

        .cta-box-tech {
          background: transparent;
          border: none;
          padding: 20px;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          width: 100%;
          max-width: 980px;
          box-shadow: none;
          position: relative;
        }

        .cta-header-center {
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-bottom: 26px;
          width: 100%;
        }

        .cta-tag {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 6px 18px;
          background: rgba(220, 38, 38, 0.45);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          color: #FECACA;
          border-radius: var(--radius-full);
          font-size: 12px;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          margin-bottom: 16px;
          border: 1px solid rgba(220, 38, 38, 0.6);
          box-shadow: 0 4px 15px rgba(220, 38, 38, 0.3);
        }

        .cta-heading {
          font-size: 34px;
          font-weight: 900;
          color: #FFFFFF;
          line-height: 1.35;
          max-width: 860px;
          margin: 0 auto;
          text-shadow: 0 4px 20px rgba(0, 0, 0, 0.95), 0 2px 6px rgba(0, 0, 0, 0.85);
        }

        .cta-center-actions {
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 100%;
          max-width: 620px;
          gap: 18px;
        }

        .cta-action-btn {
          padding: 16px 36px;
          font-size: 16px;
          font-weight: 800;
          width: 100%;
          max-width: 440px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          box-shadow: 0 8px 30px rgba(220, 38, 38, 0.65);
        }

        .cta-direct-channels {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
          width: 100%;
          max-width: 440px;
        }

        .channels-label {
          font-size: 13.5px;
          color: #F1F5F9;
          font-weight: 600;
          text-shadow: 0 2px 8px rgba(0, 0, 0, 0.95);
        }

        .channels-row {
          display: flex;
          gap: 12px;
          width: 100%;
        }

        .channel-pill {
          flex: 1;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 12px 16px;
          border-radius: var(--radius-md);
          font-size: 14px;
          font-weight: 700;
          cursor: pointer;
          transition: var(--transition);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
        }

        .channel-pill.phone {
          background: rgba(255, 255, 255, 0.22);
          color: #FFFFFF;
          border: 1px solid rgba(255, 255, 255, 0.45);
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.4);
        }

        .channel-pill.phone:hover {
          background: rgba(255, 255, 255, 0.35);
          border-color: #FFFFFF;
        }

        .channel-pill.zalo {
          background: #0068FF;
          color: #FFFFFF;
          border: 1px solid #388BFD;
          box-shadow: 0 4px 15px rgba(0, 104, 255, 0.4);
        }

        .channel-pill.zalo:hover {
          background: #0056D2;
        }

        /* 2 Perks in 1 Single Line */
        .cta-perks-center {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 18px;
          flex-direction: row;
          flex-wrap: nowrap;
          white-space: nowrap;
          margin-top: 6px;
        }

        .perk-item {
          display: flex;
          align-items: center;
          gap: 7px;
          font-size: 13.5px;
          color: #FFFFFF;
          font-weight: 600;
          text-shadow: 0 2px 8px rgba(0, 0, 0, 0.95);
          white-space: nowrap;
        }

        .perk-divider {
          color: rgba(255, 255, 255, 0.5);
          font-size: 14px;
          line-height: 1;
        }

        @media (max-width: 768px) {
          .final-cta-section {
            min-height: auto;
            padding: 60px 0;
          }
          .cta-box-tech {
            padding: 16px;
          }
          .cta-heading {
            font-size: 22px;
          }
          .channels-row {
            flex-direction: column;
          }
          .cta-perks-center {
            flex-direction: column;
            gap: 8px;
            white-space: normal;
          }
          .perk-divider {
            display: none;
          }
        }
      `})]})}function Xf({onPhoneClick:e}){const t=()=>{window.scrollTo({top:0,behavior:"smooth"})},n=()=>{window.open("https://zalo.me/0909163821","_blank","noopener,noreferrer")};return l.jsxs("footer",{className:"footer-section",children:[l.jsxs("div",{className:"container",children:[l.jsxs("div",{className:"footer-grid-sample",children:[l.jsxs("div",{className:"footer-col-1",children:[l.jsxs("div",{className:"footer-brand-header",children:[l.jsx("img",{src:"/logo.webp",alt:"DUDI Software Logo",className:"footer-logo-square"}),l.jsx("div",{className:"footer-brand-title",children:l.jsxs("span",{children:["DUDI ",l.jsx("span",{className:"text-red",children:"Software"})]})})]}),l.jsx("h3",{className:"company-legal-title",children:"Công ty TNHH Giải Pháp Phần Mềm DUDI"}),l.jsx("p",{className:"company-spec-desc",children:"Đơn vị cung cấp giải pháp bảo trì ứng dụng chuyên nghiệp theo tháng, giúp doanh nghiệp duy trì tính ổn định và tuân thủ tiêu chuẩn Store."}),l.jsxs("div",{className:"company-meta-list",children:[l.jsxs("div",{className:"company-meta-item",children:[l.jsx(Pu,{size:16,className:"meta-icon red"}),l.jsxs("span",{className:"meta-text",children:["Mã số thuế: ",l.jsx("strong",{children:"0319641544"})]})]}),l.jsxs("div",{className:"company-meta-item",children:[l.jsx(vf,{size:16,className:"meta-icon red"}),l.jsx("span",{className:"meta-text",children:"Địa chỉ: 49/2 Đường 14, Phường Thủ Đức, Thành phố Hồ Chí Minh"})]})]})]}),l.jsxs("div",{className:"footer-col-2",children:[l.jsx("h4",{className:"footer-header-title",children:"LIÊN HỆ TRỰC TIẾP"}),l.jsxs("div",{className:"contact-cards-list",children:[l.jsxs("button",{className:"contact-card-item",onClick:e,title:"Nhấn để gọi hoặc sao chép Hotline",children:[l.jsx("div",{className:"card-icon-box",children:l.jsx(Ni,{size:18})}),l.jsx("div",{className:"card-info",children:l.jsx("span",{className:"card-val",children:"Hotline: 0909 163 821"})})]}),l.jsxs("a",{href:"mailto:contact@dudisoftware.com",className:"contact-card-item",title:"Gửi email tới DUDI",children:[l.jsx("div",{className:"card-icon-box",children:l.jsx(xf,{size:18})}),l.jsx("div",{className:"card-info",children:l.jsx("span",{className:"card-val",children:"contact@dudisoftware.com"})})]}),l.jsxs("button",{className:"contact-card-item",onClick:n,title:"Mở Zalo chat",children:[l.jsx("div",{className:"card-icon-box",children:l.jsx(wf,{size:18})}),l.jsx("div",{className:"card-info",children:l.jsx("span",{className:"card-val",children:"Zalo OA: 0909 163 821"})})]})]})]}),l.jsxs("div",{className:"footer-col-3",children:[l.jsx("h4",{className:"footer-header-title",children:"ĐIỀU KHOẢN & MINH BẠCH"}),l.jsxs("ul",{className:"transparency-list",children:[l.jsxs("li",{children:[l.jsx("span",{className:"bullet-dot",children:"•"}),l.jsx("span",{children:"Minh bạch phạm vi theo hợp đồng"})]}),l.jsxs("li",{children:[l.jsx("span",{className:"bullet-dot",children:"•"}),l.jsx("span",{children:"Nghiệm thu theo từng mốc kỹ thuật"})]}),l.jsxs("li",{children:[l.jsx("span",{className:"bullet-dot",children:"•"}),l.jsx("span",{children:"Hỗ trợ xử lý lỗi phát sinh sau bàn giao"})]}),l.jsxs("li",{children:[l.jsx("span",{className:"bullet-dot",children:"•"}),l.jsx("span",{children:"Bảo mật thông tin khách hàng"})]})]}),l.jsxs("button",{className:"footer-back-to-top-btn",onClick:t,children:[l.jsx(gu,{size:16}),l.jsx("span",{children:"Về đầu trang"})]})]})]}),l.jsxs("div",{className:"footer-bottom-bar",children:[l.jsxs("div",{className:"copyright-info",children:["Copyright © 2026 ",l.jsx("strong",{children:"DUDI Software"}),". All rights reserved."]}),l.jsxs("div",{className:"verified-legal-badge",children:[l.jsx(tr,{size:16,className:"text-emerald"}),l.jsx("span",{children:"Thông tin đăng ký kinh doanh chính thức"})]})]})]}),l.jsx("style",{children:`
        .footer-section {
          background-color: #0B0D13;
          background-image: none;
          color: #94A3B8;
          padding: 70px 0 28px 0;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          font-size: 13.5px;
        }
        .footer-grid-sample {
          display: grid;
          grid-template-columns: 1.25fr 1.15fr 1fr;
          gap: 48px;
          margin-bottom: 50px;
        }
        
        /* Column 1 */
        .footer-brand-header {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 18px;
        }
        .footer-logo-square {
          height: 38px;
          width: auto;
          border-radius: 6px;
        }
        .footer-brand-title {
          font-family: var(--font-heading);
          font-size: 22px;
          font-weight: 800;
          color: #FFFFFF;
          letter-spacing: -0.3px;
        }
        .text-red {
          color: #EF4444;
        }
        .company-legal-title {
          font-size: 15px;
          font-weight: 700;
          color: #FFFFFF;
          margin-bottom: 12px;
          line-height: 1.35;
        }
        .company-spec-desc {
          font-size: 13.5px;
          color: #94A3B8;
          line-height: 1.6;
          margin-bottom: 20px;
        }
        .company-meta-list {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .company-meta-item {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          font-size: 13px;
          color: #CBD5E1;
          line-height: 1.45;
        }
        .meta-icon.red {
          color: #EF4444;
          flex-shrink: 0;
          margin-top: 2px;
        }
        .meta-text strong {
          color: #F87171;
        }

        /* Column 2 */
        .footer-header-title {
          font-size: 15px;
          font-weight: 800;
          color: #FFFFFF;
          margin-bottom: 20px;
          letter-spacing: 0.5px;
          text-transform: uppercase;
        }
        .contact-cards-list {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .contact-card-item {
          background: #121622;
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: var(--radius-md);
          padding: 12px 16px;
          display: flex;
          align-items: center;
          gap: 14px;
          cursor: pointer;
          color: #F1F5F9;
          font-size: 14px;
          font-weight: 600;
          text-decoration: none;
          transition: var(--transition);
          width: 100%;
          text-align: left;
        }
        .contact-card-item:hover {
          background: #181E2E;
          border-color: rgba(220, 38, 38, 0.4);
          transform: translateX(4px);
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.4);
        }
        .card-icon-box {
          width: 36px;
          height: 36px;
          border-radius: 8px;
          background: rgba(220, 38, 38, 0.12);
          border: 1px solid rgba(220, 38, 38, 0.25);
          color: #EF4444;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .card-val {
          color: #F8FAFC;
        }

        /* Column 3 */
        .transparency-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 10px;
          margin-bottom: 24px;
        }
        .transparency-list li {
          display: flex;
          align-items: flex-start;
          gap: 8px;
          font-size: 13.5px;
          color: #94A3B8;
          line-height: 1.45;
        }
        .bullet-dot {
          color: #EF4444;
          font-weight: bold;
        }
        .footer-back-to-top-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 10px 20px;
          background: #161B26;
          border: 1px solid rgba(255, 255, 255, 0.12);
          color: #FFFFFF;
          border-radius: var(--radius-md);
          font-size: 13.5px;
          font-weight: 700;
          cursor: pointer;
          transition: var(--transition);
        }
        .footer-back-to-top-btn:hover {
          background: #DC2626;
          border-color: #EF4444;
          transform: translateY(-2px);
          box-shadow: 0 0 14px rgba(220, 38, 38, 0.5);
        }

        /* Bottom Bar */
        .footer-bottom-bar {
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          padding-top: 24px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 16px;
        }
        .copyright-info {
          font-size: 13px;
          color: #94A3B8;
        }
        .copyright-info strong {
          color: #F1F5F9;
        }
        .verified-legal-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 13px;
          color: #10B981;
          font-weight: 600;
        }
        .text-emerald {
          color: #10B981;
        }

        @media (max-width: 1024px) {
          .footer-grid-sample {
            grid-template-columns: 1fr 1fr;
            gap: 36px;
          }
          .footer-col-1 {
            grid-column: span 2;
          }
        }

        @media (max-width: 768px) {
          .footer-grid-sample {
            grid-template-columns: 1fr;
            gap: 36px;
          }
          .footer-col-1 {
            grid-column: span 1;
          }
          .footer-bottom-bar {
            flex-direction: column;
            align-items: flex-start;
          }
        }
      `})]})}function Zf({onPhoneClick:e}){const[t,n]=D.useState(!1);D.useEffect(()=>{const o=()=>{window.scrollY>350?n(!0):n(!1)};return window.addEventListener("scroll",o),()=>window.removeEventListener("scroll",o)},[]);const r=()=>{window.scrollTo({top:0,behavior:"smooth"})},i=()=>{window.open("https://zalo.me/0909163821","_blank","noopener,noreferrer")};return t?l.jsxs("div",{className:"floating-actions-widget",role:"region","aria-label":"Widget liên hệ nhanh",children:[l.jsx("button",{className:"widget-btn widget-call",onClick:e,"aria-label":"Gọi hotline hoặc sao chép",title:"Gọi hoặc sao chép Hotline: 0909 163 821",children:l.jsx(Ni,{size:22,className:"widget-phone-icon"})}),l.jsx("button",{className:"widget-btn widget-zalo",onClick:i,"aria-label":"Chat Zalo",title:"Chat Zalo với DUDI: 0909 163 821",children:l.jsx("span",{className:"zalo-text",children:"Zalo"})}),l.jsx("button",{className:"widget-btn widget-top",onClick:r,"aria-label":"Lên đầu trang",title:"Về đầu trang",children:l.jsx(gu,{size:22})}),l.jsx("style",{children:`
        .floating-actions-widget {
          position: fixed;
          right: 24px;
          bottom: 28px;
          display: flex;
          flex-direction: column;
          gap: 12px;
          z-index: 999;
          animation: floatInWidget 0.35s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .widget-btn {
          width: 52px;
          height: 52px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.25);
          cursor: pointer;
          transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
          border: none;
          outline: none;
        }

        .widget-btn:hover {
          transform: scale(1.1) translateY(-2px);
          box-shadow: 0 12px 26px rgba(0, 0, 0, 0.35);
        }

        /* 1. Call Button (Red) */
        .widget-btn.widget-call {
          background: #DC2626;
          color: #FFFFFF;
        }
        .widget-btn.widget-call:hover {
          background: #EF4444;
        }
        .widget-phone-icon {
          transform: rotate(0deg);
        }

        /* 2. Zalo Button (Blue with bold text) */
        .widget-btn.widget-zalo {
          background: #0068FF;
          color: #FFFFFF;
        }
        .widget-btn.widget-zalo:hover {
          background: #0056D2;
        }
        .zalo-text {
          font-family: var(--font-heading), sans-serif;
          font-size: 13.5px;
          font-weight: 800;
          letter-spacing: -0.2px;
        }

        /* 3. Top Button (Dark Crimson Red) */
        .widget-btn.widget-top {
          background: #7F1D1D;
          color: #FFFFFF;
          border: 1px solid rgba(220, 38, 38, 0.4);
        }
        .widget-btn.widget-top:hover {
          background: #DC2626;
          border-color: #EF4444;
          box-shadow: 0 0 14px rgba(220, 38, 38, 0.6);
        }

        @keyframes floatInWidget {
          from { opacity: 0; transform: translateY(20px) scale(0.9); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }

        @media (max-width: 768px) {
          .floating-actions-widget {
            right: 16px;
            bottom: 20px;
            gap: 10px;
          }
          .widget-btn {
            width: 46px;
            height: 46px;
          }
          .zalo-text {
            font-size: 12px;
          }
        }
      `})]}):null}function Jf({message:e}){return e?l.jsx("div",{className:"toast-container",role:"status","aria-live":"polite",children:l.jsxs("div",{className:"toast",children:[l.jsx(lf,{size:18,className:"text-success"}),l.jsx("span",{children:e})]})}):null}function e0(){D.useEffect(()=>{const e=o=>{o.forEach(a=>{a.isIntersecting&&a.target.classList.add("is-revealed")})},t={root:null,rootMargin:"0px 0px -40px 0px",threshold:.05},n=new IntersectionObserver(e,t),r=()=>{document.querySelectorAll(".reveal-on-scroll, .reveal-up, .reveal-scale, .reveal-left, .reveal-right, .reveal-stagger").forEach(a=>{const s=a.getBoundingClientRect();s.top<window.innerHeight&&s.bottom>0&&a.classList.add("is-revealed"),n.observe(a)})};r();const i=new MutationObserver(()=>{r()});return i.observe(document.body,{childList:!0,subtree:!0}),()=>{n.disconnect(),i.disconnect()}},[])}function t0(){const[e,t]=D.useState("Tiêu chuẩn"),[n,r]=D.useState(""),[i,o]=D.useState(0);e0(),D.useEffect(()=>{"scrollRestoration"in window.history&&(window.history.scrollRestoration="manual"),window.scrollTo(0,0);const d=()=>{const g=document.documentElement.scrollTop||document.body.scrollTop,f=document.documentElement.scrollHeight-document.documentElement.clientHeight;if(f>0){const m=g/f*100;o(m)}};return window.addEventListener("scroll",d),()=>window.removeEventListener("scroll",d)},[]);const a=d=>{r(d),setTimeout(()=>{r("")},3500)},s=()=>{const d=/Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)||window.innerWidth<=768,g="0909163821",f="0909 163 821";if(d)window.location.href=`tel:${g}`;else if(navigator.clipboard&&navigator.clipboard.writeText)navigator.clipboard.writeText(g).then(()=>{a(`Đã sao chép số Hotline DUDI: ${f}`)}).catch(()=>{a(`Hotline DUDI: ${f}`)});else{const m=document.createElement("textarea");m.value=g,document.body.appendChild(m),m.select(),document.execCommand("copy"),document.body.removeChild(m),a(`Đã sao chép số Hotline DUDI: ${f}`)}},c=d=>{t(d);const g=document.getElementById("form-dang-ky");if(g){const k=g.getBoundingClientRect().top+window.pageYOffset-75;window.scrollTo({top:k,behavior:"smooth"})}};return l.jsxs("div",{className:"app-root",children:[l.jsx("div",{className:"scroll-progress-container",children:l.jsx("div",{className:"scroll-progress-bar",style:{width:`${i}%`}})}),l.jsx(Rf,{onPhoneClick:s,onSelectPlan:c}),l.jsxs("main",{children:[l.jsx(Bf,{onSelectPlan:c}),l.jsx("div",{className:"section-divider-glow"}),l.jsx(If,{}),l.jsx("div",{className:"section-divider-glow"}),l.jsx(Of,{}),l.jsx("div",{className:"section-divider-glow"}),l.jsx($f,{onSelectPlan:c}),l.jsx("div",{className:"section-divider-glow"}),l.jsx(Wf,{}),l.jsx("div",{className:"section-divider-glow"}),l.jsx(qf,{}),l.jsx("div",{className:"section-divider-glow"}),l.jsx(Gf,{}),l.jsx("div",{className:"section-divider-glow"}),l.jsx(Kf,{}),l.jsx("div",{className:"section-divider-glow"}),l.jsx(Qf,{selectedPlan:e,setSelectedPlan:t,showToast:a}),l.jsx(Yf,{onPhoneClick:s})]}),l.jsx(Xf,{onPhoneClick:s}),l.jsx(Zf,{onPhoneClick:s}),l.jsx(Jf,{message:n})]})}to.createRoot(document.getElementById("root")).render(l.jsx(Zt.StrictMode,{children:l.jsx(t0,{})}));
