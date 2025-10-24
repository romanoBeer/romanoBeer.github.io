(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const u of l)if(u.type==="childList")for(const h of u.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&r(h)}).observe(document,{childList:!0,subtree:!0});function i(l){const u={};return l.integrity&&(u.integrity=l.integrity),l.referrerPolicy&&(u.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?u.credentials="include":l.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function r(l){if(l.ep)return;l.ep=!0;const u=i(l);fetch(l.href,u)}})();function H0(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var Ph={exports:{}},Xo={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var mv;function Yy(){if(mv)return Xo;mv=1;var s=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(r,l,u){var h=null;if(u!==void 0&&(h=""+u),l.key!==void 0&&(h=""+l.key),"key"in l){u={};for(var d in l)d!=="key"&&(u[d]=l[d])}else u=l;return l=u.ref,{$$typeof:s,type:r,key:h,ref:l!==void 0?l:null,props:u}}return Xo.Fragment=t,Xo.jsx=i,Xo.jsxs=i,Xo}var gv;function jy(){return gv||(gv=1,Ph.exports=Yy()),Ph.exports}var ye=jy(),Bh={exports:{}},se={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _v;function Zy(){if(_v)return se;_v=1;var s=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),h=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),S=Symbol.for("react.lazy"),v=Symbol.for("react.activity"),y=Symbol.iterator;function M(N){return N===null||typeof N!="object"?null:(N=y&&N[y]||N["@@iterator"],typeof N=="function"?N:null)}var T={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},A=Object.assign,E={};function _(N,J,xt){this.props=N,this.context=J,this.refs=E,this.updater=xt||T}_.prototype.isReactComponent={},_.prototype.setState=function(N,J){if(typeof N!="object"&&typeof N!="function"&&N!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,N,J,"setState")},_.prototype.forceUpdate=function(N){this.updater.enqueueForceUpdate(this,N,"forceUpdate")};function P(){}P.prototype=_.prototype;function O(N,J,xt){this.props=N,this.context=J,this.refs=E,this.updater=xt||T}var w=O.prototype=new P;w.constructor=O,A(w,_.prototype),w.isPureReactComponent=!0;var H=Array.isArray;function B(){}var L={H:null,A:null,T:null,S:null},j=Object.prototype.hasOwnProperty;function D(N,J,xt){var Tt=xt.ref;return{$$typeof:s,type:N,key:J,ref:Tt!==void 0?Tt:null,props:xt}}function C(N,J){return D(N.type,J,N.props)}function V(N){return typeof N=="object"&&N!==null&&N.$$typeof===s}function tt(N){var J={"=":"=0",":":"=2"};return"$"+N.replace(/[=:]/g,function(xt){return J[xt]})}var ct=/\/+/g;function ft(N,J){return typeof N=="object"&&N!==null&&N.key!=null?tt(""+N.key):J.toString(36)}function dt(N){switch(N.status){case"fulfilled":return N.value;case"rejected":throw N.reason;default:switch(typeof N.status=="string"?N.then(B,B):(N.status="pending",N.then(function(J){N.status==="pending"&&(N.status="fulfilled",N.value=J)},function(J){N.status==="pending"&&(N.status="rejected",N.reason=J)})),N.status){case"fulfilled":return N.value;case"rejected":throw N.reason}}throw N}function z(N,J,xt,Tt,Ut){var Q=typeof N;(Q==="undefined"||Q==="boolean")&&(N=null);var ut=!1;if(N===null)ut=!0;else switch(Q){case"bigint":case"string":case"number":ut=!0;break;case"object":switch(N.$$typeof){case s:case t:ut=!0;break;case S:return ut=N._init,z(ut(N._payload),J,xt,Tt,Ut)}}if(ut)return Ut=Ut(N),ut=Tt===""?"."+ft(N,0):Tt,H(Ut)?(xt="",ut!=null&&(xt=ut.replace(ct,"$&/")+"/"),z(Ut,J,xt,"",function(Ft){return Ft})):Ut!=null&&(V(Ut)&&(Ut=C(Ut,xt+(Ut.key==null||N&&N.key===Ut.key?"":(""+Ut.key).replace(ct,"$&/")+"/")+ut)),J.push(Ut)),1;ut=0;var Et=Tt===""?".":Tt+":";if(H(N))for(var Ct=0;Ct<N.length;Ct++)Tt=N[Ct],Q=Et+ft(Tt,Ct),ut+=z(Tt,J,xt,Q,Ut);else if(Ct=M(N),typeof Ct=="function")for(N=Ct.call(N),Ct=0;!(Tt=N.next()).done;)Tt=Tt.value,Q=Et+ft(Tt,Ct++),ut+=z(Tt,J,xt,Q,Ut);else if(Q==="object"){if(typeof N.then=="function")return z(dt(N),J,xt,Tt,Ut);throw J=String(N),Error("Objects are not valid as a React child (found: "+(J==="[object Object]"?"object with keys {"+Object.keys(N).join(", ")+"}":J)+"). If you meant to render a collection of children, use an array instead.")}return ut}function q(N,J,xt){if(N==null)return N;var Tt=[],Ut=0;return z(N,Tt,"","",function(Q){return J.call(xt,Q,Ut++)}),Tt}function W(N){if(N._status===-1){var J=N._result;J=J(),J.then(function(xt){(N._status===0||N._status===-1)&&(N._status=1,N._result=xt)},function(xt){(N._status===0||N._status===-1)&&(N._status=2,N._result=xt)}),N._status===-1&&(N._status=0,N._result=J)}if(N._status===1)return N._result.default;throw N._result}var mt=typeof reportError=="function"?reportError:function(N){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var J=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof N=="object"&&N!==null&&typeof N.message=="string"?String(N.message):String(N),error:N});if(!window.dispatchEvent(J))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",N);return}console.error(N)},yt={map:q,forEach:function(N,J,xt){q(N,function(){J.apply(this,arguments)},xt)},count:function(N){var J=0;return q(N,function(){J++}),J},toArray:function(N){return q(N,function(J){return J})||[]},only:function(N){if(!V(N))throw Error("React.Children.only expected to receive a single React element child.");return N}};return se.Activity=v,se.Children=yt,se.Component=_,se.Fragment=i,se.Profiler=l,se.PureComponent=O,se.StrictMode=r,se.Suspense=m,se.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=L,se.__COMPILER_RUNTIME={__proto__:null,c:function(N){return L.H.useMemoCache(N)}},se.cache=function(N){return function(){return N.apply(null,arguments)}},se.cacheSignal=function(){return null},se.cloneElement=function(N,J,xt){if(N==null)throw Error("The argument must be a React element, but you passed "+N+".");var Tt=A({},N.props),Ut=N.key;if(J!=null)for(Q in J.key!==void 0&&(Ut=""+J.key),J)!j.call(J,Q)||Q==="key"||Q==="__self"||Q==="__source"||Q==="ref"&&J.ref===void 0||(Tt[Q]=J[Q]);var Q=arguments.length-2;if(Q===1)Tt.children=xt;else if(1<Q){for(var ut=Array(Q),Et=0;Et<Q;Et++)ut[Et]=arguments[Et+2];Tt.children=ut}return D(N.type,Ut,Tt)},se.createContext=function(N){return N={$$typeof:h,_currentValue:N,_currentValue2:N,_threadCount:0,Provider:null,Consumer:null},N.Provider=N,N.Consumer={$$typeof:u,_context:N},N},se.createElement=function(N,J,xt){var Tt,Ut={},Q=null;if(J!=null)for(Tt in J.key!==void 0&&(Q=""+J.key),J)j.call(J,Tt)&&Tt!=="key"&&Tt!=="__self"&&Tt!=="__source"&&(Ut[Tt]=J[Tt]);var ut=arguments.length-2;if(ut===1)Ut.children=xt;else if(1<ut){for(var Et=Array(ut),Ct=0;Ct<ut;Ct++)Et[Ct]=arguments[Ct+2];Ut.children=Et}if(N&&N.defaultProps)for(Tt in ut=N.defaultProps,ut)Ut[Tt]===void 0&&(Ut[Tt]=ut[Tt]);return D(N,Q,Ut)},se.createRef=function(){return{current:null}},se.forwardRef=function(N){return{$$typeof:d,render:N}},se.isValidElement=V,se.lazy=function(N){return{$$typeof:S,_payload:{_status:-1,_result:N},_init:W}},se.memo=function(N,J){return{$$typeof:p,type:N,compare:J===void 0?null:J}},se.startTransition=function(N){var J=L.T,xt={};L.T=xt;try{var Tt=N(),Ut=L.S;Ut!==null&&Ut(xt,Tt),typeof Tt=="object"&&Tt!==null&&typeof Tt.then=="function"&&Tt.then(B,mt)}catch(Q){mt(Q)}finally{J!==null&&xt.types!==null&&(J.types=xt.types),L.T=J}},se.unstable_useCacheRefresh=function(){return L.H.useCacheRefresh()},se.use=function(N){return L.H.use(N)},se.useActionState=function(N,J,xt){return L.H.useActionState(N,J,xt)},se.useCallback=function(N,J){return L.H.useCallback(N,J)},se.useContext=function(N){return L.H.useContext(N)},se.useDebugValue=function(){},se.useDeferredValue=function(N,J){return L.H.useDeferredValue(N,J)},se.useEffect=function(N,J){return L.H.useEffect(N,J)},se.useEffectEvent=function(N){return L.H.useEffectEvent(N)},se.useId=function(){return L.H.useId()},se.useImperativeHandle=function(N,J,xt){return L.H.useImperativeHandle(N,J,xt)},se.useInsertionEffect=function(N,J){return L.H.useInsertionEffect(N,J)},se.useLayoutEffect=function(N,J){return L.H.useLayoutEffect(N,J)},se.useMemo=function(N,J){return L.H.useMemo(N,J)},se.useOptimistic=function(N,J){return L.H.useOptimistic(N,J)},se.useReducer=function(N,J,xt){return L.H.useReducer(N,J,xt)},se.useRef=function(N){return L.H.useRef(N)},se.useState=function(N){return L.H.useState(N)},se.useSyncExternalStore=function(N,J,xt){return L.H.useSyncExternalStore(N,J,xt)},se.useTransition=function(){return L.H.useTransition()},se.version="19.2.0",se}var vv;function Sc(){return vv||(vv=1,Bh.exports=Zy()),Bh.exports}var ri=Sc();const nl=H0(ri);var Ih={exports:{}},Wo={},Fh={exports:{}},Hh={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Sv;function Ky(){return Sv||(Sv=1,(function(s){function t(z,q){var W=z.length;z.push(q);t:for(;0<W;){var mt=W-1>>>1,yt=z[mt];if(0<l(yt,q))z[mt]=q,z[W]=yt,W=mt;else break t}}function i(z){return z.length===0?null:z[0]}function r(z){if(z.length===0)return null;var q=z[0],W=z.pop();if(W!==q){z[0]=W;t:for(var mt=0,yt=z.length,N=yt>>>1;mt<N;){var J=2*(mt+1)-1,xt=z[J],Tt=J+1,Ut=z[Tt];if(0>l(xt,W))Tt<yt&&0>l(Ut,xt)?(z[mt]=Ut,z[Tt]=W,mt=Tt):(z[mt]=xt,z[J]=W,mt=J);else if(Tt<yt&&0>l(Ut,W))z[mt]=Ut,z[Tt]=W,mt=Tt;else break t}}return q}function l(z,q){var W=z.sortIndex-q.sortIndex;return W!==0?W:z.id-q.id}if(s.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;s.unstable_now=function(){return u.now()}}else{var h=Date,d=h.now();s.unstable_now=function(){return h.now()-d}}var m=[],p=[],S=1,v=null,y=3,M=!1,T=!1,A=!1,E=!1,_=typeof setTimeout=="function"?setTimeout:null,P=typeof clearTimeout=="function"?clearTimeout:null,O=typeof setImmediate<"u"?setImmediate:null;function w(z){for(var q=i(p);q!==null;){if(q.callback===null)r(p);else if(q.startTime<=z)r(p),q.sortIndex=q.expirationTime,t(m,q);else break;q=i(p)}}function H(z){if(A=!1,w(z),!T)if(i(m)!==null)T=!0,B||(B=!0,tt());else{var q=i(p);q!==null&&dt(H,q.startTime-z)}}var B=!1,L=-1,j=5,D=-1;function C(){return E?!0:!(s.unstable_now()-D<j)}function V(){if(E=!1,B){var z=s.unstable_now();D=z;var q=!0;try{t:{T=!1,A&&(A=!1,P(L),L=-1),M=!0;var W=y;try{e:{for(w(z),v=i(m);v!==null&&!(v.expirationTime>z&&C());){var mt=v.callback;if(typeof mt=="function"){v.callback=null,y=v.priorityLevel;var yt=mt(v.expirationTime<=z);if(z=s.unstable_now(),typeof yt=="function"){v.callback=yt,w(z),q=!0;break e}v===i(m)&&r(m),w(z)}else r(m);v=i(m)}if(v!==null)q=!0;else{var N=i(p);N!==null&&dt(H,N.startTime-z),q=!1}}break t}finally{v=null,y=W,M=!1}q=void 0}}finally{q?tt():B=!1}}}var tt;if(typeof O=="function")tt=function(){O(V)};else if(typeof MessageChannel<"u"){var ct=new MessageChannel,ft=ct.port2;ct.port1.onmessage=V,tt=function(){ft.postMessage(null)}}else tt=function(){_(V,0)};function dt(z,q){L=_(function(){z(s.unstable_now())},q)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(z){z.callback=null},s.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):j=0<z?Math.floor(1e3/z):5},s.unstable_getCurrentPriorityLevel=function(){return y},s.unstable_next=function(z){switch(y){case 1:case 2:case 3:var q=3;break;default:q=y}var W=y;y=q;try{return z()}finally{y=W}},s.unstable_requestPaint=function(){E=!0},s.unstable_runWithPriority=function(z,q){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var W=y;y=z;try{return q()}finally{y=W}},s.unstable_scheduleCallback=function(z,q,W){var mt=s.unstable_now();switch(typeof W=="object"&&W!==null?(W=W.delay,W=typeof W=="number"&&0<W?mt+W:mt):W=mt,z){case 1:var yt=-1;break;case 2:yt=250;break;case 5:yt=1073741823;break;case 4:yt=1e4;break;default:yt=5e3}return yt=W+yt,z={id:S++,callback:q,priorityLevel:z,startTime:W,expirationTime:yt,sortIndex:-1},W>mt?(z.sortIndex=W,t(p,z),i(m)===null&&z===i(p)&&(A?(P(L),L=-1):A=!0,dt(H,W-mt))):(z.sortIndex=yt,t(m,z),T||M||(T=!0,B||(B=!0,tt()))),z},s.unstable_shouldYield=C,s.unstable_wrapCallback=function(z){var q=y;return function(){var W=y;y=q;try{return z.apply(this,arguments)}finally{y=W}}}})(Hh)),Hh}var xv;function Qy(){return xv||(xv=1,Fh.exports=Ky()),Fh.exports}var Gh={exports:{}},wn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var yv;function Jy(){if(yv)return wn;yv=1;var s=Sc();function t(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var S=2;S<arguments.length;S++)p+="&args[]="+encodeURIComponent(arguments[S])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function u(m,p,S){var v=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:v==null?null:""+v,children:m,containerInfo:p,implementation:S}}var h=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return wn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,wn.createPortal=function(m,p){var S=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(t(299));return u(m,p,null,S)},wn.flushSync=function(m){var p=h.T,S=r.p;try{if(h.T=null,r.p=2,m)return m()}finally{h.T=p,r.p=S,r.d.f()}},wn.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,r.d.C(m,p))},wn.prefetchDNS=function(m){typeof m=="string"&&r.d.D(m)},wn.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var S=p.as,v=d(S,p.crossOrigin),y=typeof p.integrity=="string"?p.integrity:void 0,M=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;S==="style"?r.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:v,integrity:y,fetchPriority:M}):S==="script"&&r.d.X(m,{crossOrigin:v,integrity:y,fetchPriority:M,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},wn.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var S=d(p.as,p.crossOrigin);r.d.M(m,{crossOrigin:S,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&r.d.M(m)},wn.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var S=p.as,v=d(S,p.crossOrigin);r.d.L(m,S,{crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},wn.preloadModule=function(m,p){if(typeof m=="string")if(p){var S=d(p.as,p.crossOrigin);r.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:S,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else r.d.m(m)},wn.requestFormReset=function(m){r.d.r(m)},wn.unstable_batchedUpdates=function(m,p){return m(p)},wn.useFormState=function(m,p,S){return h.H.useFormState(m,p,S)},wn.useFormStatus=function(){return h.H.useHostTransitionStatus()},wn.version="19.2.0",wn}var Mv;function $y(){if(Mv)return Gh.exports;Mv=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(t){console.error(t)}}return s(),Gh.exports=Jy(),Gh.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ev;function tM(){if(Ev)return Wo;Ev=1;var s=Qy(),t=Sc(),i=$y();function r(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function u(e){var n=e,a=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(a=n.return),e=n.return;while(e)}return n.tag===3?a:null}function h(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function d(e){if(e.tag===31){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function m(e){if(u(e)!==e)throw Error(r(188))}function p(e){var n=e.alternate;if(!n){if(n=u(e),n===null)throw Error(r(188));return n!==e?null:e}for(var a=e,o=n;;){var c=a.return;if(c===null)break;var f=c.alternate;if(f===null){if(o=c.return,o!==null){a=o;continue}break}if(c.child===f.child){for(f=c.child;f;){if(f===a)return m(c),e;if(f===o)return m(c),n;f=f.sibling}throw Error(r(188))}if(a.return!==o.return)a=c,o=f;else{for(var x=!1,b=c.child;b;){if(b===a){x=!0,a=c,o=f;break}if(b===o){x=!0,o=c,a=f;break}b=b.sibling}if(!x){for(b=f.child;b;){if(b===a){x=!0,a=f,o=c;break}if(b===o){x=!0,o=f,a=c;break}b=b.sibling}if(!x)throw Error(r(189))}}if(a.alternate!==o)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?e:n}function S(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=S(e),n!==null)return n;e=e.sibling}return null}var v=Object.assign,y=Symbol.for("react.element"),M=Symbol.for("react.transitional.element"),T=Symbol.for("react.portal"),A=Symbol.for("react.fragment"),E=Symbol.for("react.strict_mode"),_=Symbol.for("react.profiler"),P=Symbol.for("react.consumer"),O=Symbol.for("react.context"),w=Symbol.for("react.forward_ref"),H=Symbol.for("react.suspense"),B=Symbol.for("react.suspense_list"),L=Symbol.for("react.memo"),j=Symbol.for("react.lazy"),D=Symbol.for("react.activity"),C=Symbol.for("react.memo_cache_sentinel"),V=Symbol.iterator;function tt(e){return e===null||typeof e!="object"?null:(e=V&&e[V]||e["@@iterator"],typeof e=="function"?e:null)}var ct=Symbol.for("react.client.reference");function ft(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===ct?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case A:return"Fragment";case _:return"Profiler";case E:return"StrictMode";case H:return"Suspense";case B:return"SuspenseList";case D:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case T:return"Portal";case O:return e.displayName||"Context";case P:return(e._context.displayName||"Context")+".Consumer";case w:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case L:return n=e.displayName||null,n!==null?n:ft(e.type)||"Memo";case j:n=e._payload,e=e._init;try{return ft(e(n))}catch{}}return null}var dt=Array.isArray,z=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,q=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,W={pending:!1,data:null,method:null,action:null},mt=[],yt=-1;function N(e){return{current:e}}function J(e){0>yt||(e.current=mt[yt],mt[yt]=null,yt--)}function xt(e,n){yt++,mt[yt]=e.current,e.current=n}var Tt=N(null),Ut=N(null),Q=N(null),ut=N(null);function Et(e,n){switch(xt(Q,n),xt(Ut,e),xt(Tt,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?I_(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=I_(n),e=F_(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}J(Tt),xt(Tt,e)}function Ct(){J(Tt),J(Ut),J(Q)}function Ft(e){e.memoizedState!==null&&xt(ut,e);var n=Tt.current,a=F_(n,e.type);n!==a&&(xt(Ut,e),xt(Tt,a))}function ie(e){Ut.current===e&&(J(Tt),J(Ut)),ut.current===e&&(J(ut),Ho._currentValue=W)}var Ue,F;function be(e){if(Ue===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);Ue=n&&n[1]||"",F=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Ue+e+F}var ne=!1;function $t(e,n){if(!e||ne)return"";ne=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var _t=function(){throw Error()};if(Object.defineProperty(_t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(_t,[])}catch(lt){var it=lt}Reflect.construct(e,[],_t)}else{try{_t.call()}catch(lt){it=lt}e.call(_t.prototype)}}else{try{throw Error()}catch(lt){it=lt}(_t=e())&&typeof _t.catch=="function"&&_t.catch(function(){})}}catch(lt){if(lt&&it&&typeof lt.stack=="string")return[lt.stack,it.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var c=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");c&&c.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=o.DetermineComponentFrameRoot(),x=f[0],b=f[1];if(x&&b){var I=x.split(`
`),nt=b.split(`
`);for(c=o=0;o<I.length&&!I[o].includes("DetermineComponentFrameRoot");)o++;for(;c<nt.length&&!nt[c].includes("DetermineComponentFrameRoot");)c++;if(o===I.length||c===nt.length)for(o=I.length-1,c=nt.length-1;1<=o&&0<=c&&I[o]!==nt[c];)c--;for(;1<=o&&0<=c;o--,c--)if(I[o]!==nt[c]){if(o!==1||c!==1)do if(o--,c--,0>c||I[o]!==nt[c]){var pt=`
`+I[o].replace(" at new "," at ");return e.displayName&&pt.includes("<anonymous>")&&(pt=pt.replace("<anonymous>",e.displayName)),pt}while(1<=o&&0<=c);break}}}finally{ne=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?be(a):""}function qt(e,n){switch(e.tag){case 26:case 27:case 5:return be(e.type);case 16:return be("Lazy");case 13:return e.child!==n&&n!==null?be("Suspense Fallback"):be("Suspense");case 19:return be("SuspenseList");case 0:case 15:return $t(e.type,!1);case 11:return $t(e.type.render,!1);case 1:return $t(e.type,!0);case 31:return be("Activity");default:return""}}function Me(e){try{var n="",a=null;do n+=qt(e,a),a=e,e=e.return;while(e);return n}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var Ht=Object.prototype.hasOwnProperty,ae=s.unstable_scheduleCallback,je=s.unstable_cancelCallback,qe=s.unstable_shouldYield,U=s.unstable_requestPaint,g=s.unstable_now,G=s.unstable_getCurrentPriorityLevel,$=s.unstable_ImmediatePriority,ht=s.unstable_UserBlockingPriority,at=s.unstable_NormalPriority,Pt=s.unstable_LowPriority,Rt=s.unstable_IdlePriority,Gt=s.log,Yt=s.unstable_setDisableYieldValue,bt=null,wt=null;function Zt(e){if(typeof Gt=="function"&&Yt(e),wt&&typeof wt.setStrictMode=="function")try{wt.setStrictMode(bt,e)}catch{}}var Bt=Math.clz32?Math.clz32:X,Lt=Math.log,oe=Math.LN2;function X(e){return e>>>=0,e===0?32:31-(Lt(e)/oe|0)|0}var At=256,Dt=262144,It=4194304;function Mt(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function vt(e,n,a){var o=e.pendingLanes;if(o===0)return 0;var c=0,f=e.suspendedLanes,x=e.pingedLanes;e=e.warmLanes;var b=o&134217727;return b!==0?(o=b&~f,o!==0?c=Mt(o):(x&=b,x!==0?c=Mt(x):a||(a=b&~e,a!==0&&(c=Mt(a))))):(b=o&~f,b!==0?c=Mt(b):x!==0?c=Mt(x):a||(a=o&~e,a!==0&&(c=Mt(a)))),c===0?0:n!==0&&n!==c&&(n&f)===0&&(f=c&-c,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:c}function Vt(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function re(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Be(){var e=It;return It<<=1,(It&62914560)===0&&(It=4194304),e}function Ae(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function Ln(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function oi(e,n,a,o,c,f){var x=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var b=e.entanglements,I=e.expirationTimes,nt=e.hiddenUpdates;for(a=x&~a;0<a;){var pt=31-Bt(a),_t=1<<pt;b[pt]=0,I[pt]=-1;var it=nt[pt];if(it!==null)for(nt[pt]=null,pt=0;pt<it.length;pt++){var lt=it[pt];lt!==null&&(lt.lane&=-536870913)}a&=~_t}o!==0&&$s(e,o,0),f!==0&&c===0&&e.tag!==0&&(e.suspendedLanes|=f&~(x&~n))}function $s(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var o=31-Bt(n);e.entangledLanes|=n,e.entanglements[o]=e.entanglements[o]|1073741824|a&261930}function Ni(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var o=31-Bt(a),c=1<<o;c&n|e[o]&n&&(e[o]|=n),a&=~c}}function Ir(e,n){var a=n&-n;return a=(a&42)!==0?1:Fr(a),(a&(e.suspendedLanes|n))!==0?0:a}function Fr(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Hr(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function ir(){var e=q.p;return e!==0?e:(e=window.event,e===void 0?32:lv(e.type))}function to(e,n){var a=q.p;try{return q.p=e,n()}finally{q.p=a}}var jn=Math.random().toString(36).slice(2),sn="__reactFiber$"+jn,Mn="__reactProps$"+jn,ya="__reactContainer$"+jn,eo="__reactEvents$"+jn,wc="__reactListeners$"+jn,Dc="__reactHandles$"+jn,ml="__reactResources$"+jn,ar="__reactMarker$"+jn;function R(e){delete e[sn],delete e[Mn],delete e[eo],delete e[wc],delete e[Dc]}function Y(e){var n=e[sn];if(n)return n;for(var a=e.parentNode;a;){if(n=a[ya]||a[sn]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=q_(e);e!==null;){if(a=e[sn])return a;e=q_(e)}return n}e=a,a=e.parentNode}return null}function rt(e){if(e=e[sn]||e[ya]){var n=e.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return e}return null}function ot(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(r(33))}function K(e){var n=e[ml];return n||(n=e[ml]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function St(e){e[ar]=!0}var Nt=new Set,Xt={};function zt(e,n){Kt(e,n),Kt(e+"Capture",n)}function Kt(e,n){for(Xt[e]=n,e=0;e<n.length;e++)Nt.add(n[e])}var ee=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Qt={},pe={};function Oe(e){return Ht.call(pe,e)?!0:Ht.call(Qt,e)?!1:ee.test(e)?pe[e]=!0:(Qt[e]=!0,!1)}function Xe(e,n,a){if(Oe(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+a)}}function ze(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+a)}}function me(e,n,a,o){if(o===null)e.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,""+o)}}function Wt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Ye(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Re(e,n,a){var o=Object.getOwnPropertyDescriptor(e.constructor.prototype,n);if(!e.hasOwnProperty(n)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var c=o.get,f=o.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return c.call(this)},set:function(x){a=""+x,f.call(this,x)}}),Object.defineProperty(e,n,{enumerable:o.enumerable}),{getValue:function(){return a},setValue:function(x){a=""+x},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function En(e){if(!e._valueTracker){var n=Ye(e)?"checked":"value";e._valueTracker=Re(e,n,""+e[n])}}function ki(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),o="";return e&&(o=Ye(e)?e.checked?"true":"false":e.value),e=o,e!==a?(n.setValue(e),!0):!1}function vn(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var rr=/[\n"\\]/g;function ve(e){return e.replace(rr,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Cn(e,n,a,o,c,f,x,b){e.name="",x!=null&&typeof x!="function"&&typeof x!="symbol"&&typeof x!="boolean"?e.type=x:e.removeAttribute("type"),n!=null?x==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+Wt(n)):e.value!==""+Wt(n)&&(e.value=""+Wt(n)):x!=="submit"&&x!=="reset"||e.removeAttribute("value"),n!=null?pn(e,x,Wt(n)):a!=null?pn(e,x,Wt(a)):o!=null&&e.removeAttribute("value"),c==null&&f!=null&&(e.defaultChecked=!!f),c!=null&&(e.checked=c&&typeof c!="function"&&typeof c!="symbol"),b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"?e.name=""+Wt(b):e.removeAttribute("name")}function Nn(e,n,a,o,c,f,x,b){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(e.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null)){En(e);return}a=a!=null?""+Wt(a):"",n=n!=null?""+Wt(n):a,b||n===e.value||(e.value=n),e.defaultValue=n}o=o??c,o=typeof o!="function"&&typeof o!="symbol"&&!!o,e.checked=b?e.checked:!!o,e.defaultChecked=!!o,x!=null&&typeof x!="function"&&typeof x!="symbol"&&typeof x!="boolean"&&(e.name=x),En(e)}function pn(e,n,a){n==="number"&&vn(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function nn(e,n,a,o){if(e=e.options,n){n={};for(var c=0;c<a.length;c++)n["$"+a[c]]=!0;for(a=0;a<e.length;a++)c=n.hasOwnProperty("$"+e[a].value),e[a].selected!==c&&(e[a].selected=c),c&&o&&(e[a].defaultSelected=!0)}else{for(a=""+Wt(a),n=null,c=0;c<e.length;c++){if(e[c].value===a){e[c].selected=!0,o&&(e[c].defaultSelected=!0);return}n!==null||e[c].disabled||(n=e[c])}n!==null&&(n.selected=!0)}}function Gr(e,n,a){if(n!=null&&(n=""+Wt(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+Wt(a):""}function Oi(e,n,a,o){if(n==null){if(o!=null){if(a!=null)throw Error(r(92));if(dt(o)){if(1<o.length)throw Error(r(93));o=o[0]}a=o}a==null&&(a=""),n=a}a=Wt(n),e.defaultValue=a,o=e.textContent,o===a&&o!==""&&o!==null&&(e.value=o),En(e)}function Vr(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var VS=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function zp(e,n,a){var o=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":o?e.setProperty(n,a):typeof a!="number"||a===0||VS.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function Pp(e,n,a){if(n!=null&&typeof n!="object")throw Error(r(62));if(e=e.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?e.setProperty(o,""):o==="float"?e.cssFloat="":e[o]="");for(var c in n)o=n[c],n.hasOwnProperty(c)&&a[c]!==o&&zp(e,c,o)}else for(var f in n)n.hasOwnProperty(f)&&zp(e,f,n[f])}function Uc(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var kS=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),XS=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function gl(e){return XS.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Xi(){}var Lc=null;function Nc(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var kr=null,Xr=null;function Bp(e){var n=rt(e);if(n&&(e=n.stateNode)){var a=e[Mn]||null;t:switch(e=n.stateNode,n.type){case"input":if(Cn(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+ve(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var o=a[n];if(o!==e&&o.form===e.form){var c=o[Mn]||null;if(!c)throw Error(r(90));Cn(o,c.value,c.defaultValue,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name)}}for(n=0;n<a.length;n++)o=a[n],o.form===e.form&&ki(o)}break t;case"textarea":Gr(e,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&nn(e,!!a.multiple,n,!1)}}}var Oc=!1;function Ip(e,n,a){if(Oc)return e(n,a);Oc=!0;try{var o=e(n);return o}finally{if(Oc=!1,(kr!==null||Xr!==null)&&(iu(),kr&&(n=kr,e=Xr,Xr=kr=null,Bp(n),e)))for(n=0;n<e.length;n++)Bp(e[n])}}function no(e,n){var a=e.stateNode;if(a===null)return null;var o=a[Mn]||null;if(o===null)return null;a=o[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break t;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(r(231,n,typeof a));return a}var Wi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),zc=!1;if(Wi)try{var io={};Object.defineProperty(io,"passive",{get:function(){zc=!0}}),window.addEventListener("test",io,io),window.removeEventListener("test",io,io)}catch{zc=!1}var Ma=null,Pc=null,_l=null;function Fp(){if(_l)return _l;var e,n=Pc,a=n.length,o,c="value"in Ma?Ma.value:Ma.textContent,f=c.length;for(e=0;e<a&&n[e]===c[e];e++);var x=a-e;for(o=1;o<=x&&n[a-o]===c[f-o];o++);return _l=c.slice(e,1<o?1-o:void 0)}function vl(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function Sl(){return!0}function Hp(){return!1}function Bn(e){function n(a,o,c,f,x){this._reactName=a,this._targetInst=c,this.type=o,this.nativeEvent=f,this.target=x,this.currentTarget=null;for(var b in e)e.hasOwnProperty(b)&&(a=e[b],this[b]=a?a(f):f[b]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?Sl:Hp,this.isPropagationStopped=Hp,this}return v(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Sl)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Sl)},persist:function(){},isPersistent:Sl}),n}var sr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},xl=Bn(sr),ao=v({},sr,{view:0,detail:0}),WS=Bn(ao),Bc,Ic,ro,yl=v({},ao,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Hc,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ro&&(ro&&e.type==="mousemove"?(Bc=e.screenX-ro.screenX,Ic=e.screenY-ro.screenY):Ic=Bc=0,ro=e),Bc)},movementY:function(e){return"movementY"in e?e.movementY:Ic}}),Gp=Bn(yl),qS=v({},yl,{dataTransfer:0}),YS=Bn(qS),jS=v({},ao,{relatedTarget:0}),Fc=Bn(jS),ZS=v({},sr,{animationName:0,elapsedTime:0,pseudoElement:0}),KS=Bn(ZS),QS=v({},sr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),JS=Bn(QS),$S=v({},sr,{data:0}),Vp=Bn($S),tx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ex={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},nx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ix(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=nx[e])?!!n[e]:!1}function Hc(){return ix}var ax=v({},ao,{key:function(e){if(e.key){var n=tx[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=vl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?ex[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Hc,charCode:function(e){return e.type==="keypress"?vl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?vl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),rx=Bn(ax),sx=v({},yl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),kp=Bn(sx),ox=v({},ao,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Hc}),lx=Bn(ox),ux=v({},sr,{propertyName:0,elapsedTime:0,pseudoElement:0}),cx=Bn(ux),fx=v({},yl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),hx=Bn(fx),dx=v({},sr,{newState:0,oldState:0}),px=Bn(dx),mx=[9,13,27,32],Gc=Wi&&"CompositionEvent"in window,so=null;Wi&&"documentMode"in document&&(so=document.documentMode);var gx=Wi&&"TextEvent"in window&&!so,Xp=Wi&&(!Gc||so&&8<so&&11>=so),Wp=" ",qp=!1;function Yp(e,n){switch(e){case"keyup":return mx.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function jp(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Wr=!1;function _x(e,n){switch(e){case"compositionend":return jp(n);case"keypress":return n.which!==32?null:(qp=!0,Wp);case"textInput":return e=n.data,e===Wp&&qp?null:e;default:return null}}function vx(e,n){if(Wr)return e==="compositionend"||!Gc&&Yp(e,n)?(e=Fp(),_l=Pc=Ma=null,Wr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Xp&&n.locale!=="ko"?null:n.data;default:return null}}var Sx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Zp(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!Sx[e.type]:n==="textarea"}function Kp(e,n,a,o){kr?Xr?Xr.push(o):Xr=[o]:kr=o,n=cu(n,"onChange"),0<n.length&&(a=new xl("onChange","change",null,a,o),e.push({event:a,listeners:n}))}var oo=null,lo=null;function xx(e){L_(e,0)}function Ml(e){var n=ot(e);if(ki(n))return e}function Qp(e,n){if(e==="change")return n}var Jp=!1;if(Wi){var Vc;if(Wi){var kc="oninput"in document;if(!kc){var $p=document.createElement("div");$p.setAttribute("oninput","return;"),kc=typeof $p.oninput=="function"}Vc=kc}else Vc=!1;Jp=Vc&&(!document.documentMode||9<document.documentMode)}function tm(){oo&&(oo.detachEvent("onpropertychange",em),lo=oo=null)}function em(e){if(e.propertyName==="value"&&Ml(lo)){var n=[];Kp(n,lo,e,Nc(e)),Ip(xx,n)}}function yx(e,n,a){e==="focusin"?(tm(),oo=n,lo=a,oo.attachEvent("onpropertychange",em)):e==="focusout"&&tm()}function Mx(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ml(lo)}function Ex(e,n){if(e==="click")return Ml(n)}function Tx(e,n){if(e==="input"||e==="change")return Ml(n)}function bx(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Zn=typeof Object.is=="function"?Object.is:bx;function uo(e,n){if(Zn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),o=Object.keys(n);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var c=a[o];if(!Ht.call(n,c)||!Zn(e[c],n[c]))return!1}return!0}function nm(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function im(e,n){var a=nm(e);e=0;for(var o;a;){if(a.nodeType===3){if(o=e+a.textContent.length,e<=n&&o>=n)return{node:a,offset:n-e};e=o}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=nm(a)}}function am(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?am(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function rm(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=vn(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=vn(e.document)}return n}function Xc(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var Ax=Wi&&"documentMode"in document&&11>=document.documentMode,qr=null,Wc=null,co=null,qc=!1;function sm(e,n,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;qc||qr==null||qr!==vn(o)||(o=qr,"selectionStart"in o&&Xc(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),co&&uo(co,o)||(co=o,o=cu(Wc,"onSelect"),0<o.length&&(n=new xl("onSelect","select",null,n,a),e.push({event:n,listeners:o}),n.target=qr)))}function or(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var Yr={animationend:or("Animation","AnimationEnd"),animationiteration:or("Animation","AnimationIteration"),animationstart:or("Animation","AnimationStart"),transitionrun:or("Transition","TransitionRun"),transitionstart:or("Transition","TransitionStart"),transitioncancel:or("Transition","TransitionCancel"),transitionend:or("Transition","TransitionEnd")},Yc={},om={};Wi&&(om=document.createElement("div").style,"AnimationEvent"in window||(delete Yr.animationend.animation,delete Yr.animationiteration.animation,delete Yr.animationstart.animation),"TransitionEvent"in window||delete Yr.transitionend.transition);function lr(e){if(Yc[e])return Yc[e];if(!Yr[e])return e;var n=Yr[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in om)return Yc[e]=n[a];return e}var lm=lr("animationend"),um=lr("animationiteration"),cm=lr("animationstart"),Rx=lr("transitionrun"),Cx=lr("transitionstart"),wx=lr("transitioncancel"),fm=lr("transitionend"),hm=new Map,jc="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");jc.push("scrollEnd");function yi(e,n){hm.set(e,n),zt(n,[e])}var El=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},li=[],jr=0,Zc=0;function Tl(){for(var e=jr,n=Zc=jr=0;n<e;){var a=li[n];li[n++]=null;var o=li[n];li[n++]=null;var c=li[n];li[n++]=null;var f=li[n];if(li[n++]=null,o!==null&&c!==null){var x=o.pending;x===null?c.next=c:(c.next=x.next,x.next=c),o.pending=c}f!==0&&dm(a,c,f)}}function bl(e,n,a,o){li[jr++]=e,li[jr++]=n,li[jr++]=a,li[jr++]=o,Zc|=o,e.lanes|=o,e=e.alternate,e!==null&&(e.lanes|=o)}function Kc(e,n,a,o){return bl(e,n,a,o),Al(e)}function ur(e,n){return bl(e,null,null,n),Al(e)}function dm(e,n,a){e.lanes|=a;var o=e.alternate;o!==null&&(o.lanes|=a);for(var c=!1,f=e.return;f!==null;)f.childLanes|=a,o=f.alternate,o!==null&&(o.childLanes|=a),f.tag===22&&(e=f.stateNode,e===null||e._visibility&1||(c=!0)),e=f,f=f.return;return e.tag===3?(f=e.stateNode,c&&n!==null&&(c=31-Bt(a),e=f.hiddenUpdates,o=e[c],o===null?e[c]=[n]:o.push(n),n.lane=a|536870912),f):null}function Al(e){if(50<No)throw No=0,sh=null,Error(r(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var Zr={};function Dx(e,n,a,o){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Kn(e,n,a,o){return new Dx(e,n,a,o)}function Qc(e){return e=e.prototype,!(!e||!e.isReactComponent)}function qi(e,n){var a=e.alternate;return a===null?(a=Kn(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function pm(e,n){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function Rl(e,n,a,o,c,f){var x=0;if(o=e,typeof e=="function")Qc(e)&&(x=1);else if(typeof e=="string")x=zy(e,a,Tt.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case D:return e=Kn(31,a,n,c),e.elementType=D,e.lanes=f,e;case A:return cr(a.children,c,f,n);case E:x=8,c|=24;break;case _:return e=Kn(12,a,n,c|2),e.elementType=_,e.lanes=f,e;case H:return e=Kn(13,a,n,c),e.elementType=H,e.lanes=f,e;case B:return e=Kn(19,a,n,c),e.elementType=B,e.lanes=f,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case O:x=10;break t;case P:x=9;break t;case w:x=11;break t;case L:x=14;break t;case j:x=16,o=null;break t}x=29,a=Error(r(130,e===null?"null":typeof e,"")),o=null}return n=Kn(x,a,n,c),n.elementType=e,n.type=o,n.lanes=f,n}function cr(e,n,a,o){return e=Kn(7,e,o,n),e.lanes=a,e}function Jc(e,n,a){return e=Kn(6,e,null,n),e.lanes=a,e}function mm(e){var n=Kn(18,null,null,0);return n.stateNode=e,n}function $c(e,n,a){return n=Kn(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var gm=new WeakMap;function ui(e,n){if(typeof e=="object"&&e!==null){var a=gm.get(e);return a!==void 0?a:(n={value:e,source:n,stack:Me(n)},gm.set(e,n),n)}return{value:e,source:n,stack:Me(n)}}var Kr=[],Qr=0,Cl=null,fo=0,ci=[],fi=0,Ea=null,zi=1,Pi="";function Yi(e,n){Kr[Qr++]=fo,Kr[Qr++]=Cl,Cl=e,fo=n}function _m(e,n,a){ci[fi++]=zi,ci[fi++]=Pi,ci[fi++]=Ea,Ea=e;var o=zi;e=Pi;var c=32-Bt(o)-1;o&=~(1<<c),a+=1;var f=32-Bt(n)+c;if(30<f){var x=c-c%5;f=(o&(1<<x)-1).toString(32),o>>=x,c-=x,zi=1<<32-Bt(n)+c|a<<c|o,Pi=f+e}else zi=1<<f|a<<c|o,Pi=e}function tf(e){e.return!==null&&(Yi(e,1),_m(e,1,0))}function ef(e){for(;e===Cl;)Cl=Kr[--Qr],Kr[Qr]=null,fo=Kr[--Qr],Kr[Qr]=null;for(;e===Ea;)Ea=ci[--fi],ci[fi]=null,Pi=ci[--fi],ci[fi]=null,zi=ci[--fi],ci[fi]=null}function vm(e,n){ci[fi++]=zi,ci[fi++]=Pi,ci[fi++]=Ea,zi=n.id,Pi=n.overflow,Ea=e}var Tn=null,Ze=null,Ee=!1,Ta=null,hi=!1,nf=Error(r(519));function ba(e){var n=Error(r(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw ho(ui(n,e)),nf}function Sm(e){var n=e.stateNode,a=e.type,o=e.memoizedProps;switch(n[sn]=e,n[Mn]=o,a){case"dialog":_e("cancel",n),_e("close",n);break;case"iframe":case"object":case"embed":_e("load",n);break;case"video":case"audio":for(a=0;a<zo.length;a++)_e(zo[a],n);break;case"source":_e("error",n);break;case"img":case"image":case"link":_e("error",n),_e("load",n);break;case"details":_e("toggle",n);break;case"input":_e("invalid",n),Nn(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":_e("invalid",n);break;case"textarea":_e("invalid",n),Oi(n,o.value,o.defaultValue,o.children)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||o.suppressHydrationWarning===!0||P_(n.textContent,a)?(o.popover!=null&&(_e("beforetoggle",n),_e("toggle",n)),o.onScroll!=null&&_e("scroll",n),o.onScrollEnd!=null&&_e("scrollend",n),o.onClick!=null&&(n.onclick=Xi),n=!0):n=!1,n||ba(e,!0)}function xm(e){for(Tn=e.return;Tn;)switch(Tn.tag){case 5:case 31:case 13:hi=!1;return;case 27:case 3:hi=!0;return;default:Tn=Tn.return}}function Jr(e){if(e!==Tn)return!1;if(!Ee)return xm(e),Ee=!0,!1;var n=e.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||yh(e.type,e.memoizedProps)),a=!a),a&&Ze&&ba(e),xm(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));Ze=W_(e)}else if(n===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));Ze=W_(e)}else n===27?(n=Ze,Fa(e.type)?(e=Ah,Ah=null,Ze=e):Ze=n):Ze=Tn?pi(e.stateNode.nextSibling):null;return!0}function fr(){Ze=Tn=null,Ee=!1}function af(){var e=Ta;return e!==null&&(Gn===null?Gn=e:Gn.push.apply(Gn,e),Ta=null),e}function ho(e){Ta===null?Ta=[e]:Ta.push(e)}var rf=N(null),hr=null,ji=null;function Aa(e,n,a){xt(rf,n._currentValue),n._currentValue=a}function Zi(e){e._currentValue=rf.current,J(rf)}function sf(e,n,a){for(;e!==null;){var o=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),e===a)break;e=e.return}}function of(e,n,a,o){var c=e.child;for(c!==null&&(c.return=e);c!==null;){var f=c.dependencies;if(f!==null){var x=c.child;f=f.firstContext;t:for(;f!==null;){var b=f;f=c;for(var I=0;I<n.length;I++)if(b.context===n[I]){f.lanes|=a,b=f.alternate,b!==null&&(b.lanes|=a),sf(f.return,a,e),o||(x=null);break t}f=b.next}}else if(c.tag===18){if(x=c.return,x===null)throw Error(r(341));x.lanes|=a,f=x.alternate,f!==null&&(f.lanes|=a),sf(x,a,e),x=null}else x=c.child;if(x!==null)x.return=c;else for(x=c;x!==null;){if(x===e){x=null;break}if(c=x.sibling,c!==null){c.return=x.return,x=c;break}x=x.return}c=x}}function $r(e,n,a,o){e=null;for(var c=n,f=!1;c!==null;){if(!f){if((c.flags&524288)!==0)f=!0;else if((c.flags&262144)!==0)break}if(c.tag===10){var x=c.alternate;if(x===null)throw Error(r(387));if(x=x.memoizedProps,x!==null){var b=c.type;Zn(c.pendingProps.value,x.value)||(e!==null?e.push(b):e=[b])}}else if(c===ut.current){if(x=c.alternate,x===null)throw Error(r(387));x.memoizedState.memoizedState!==c.memoizedState.memoizedState&&(e!==null?e.push(Ho):e=[Ho])}c=c.return}e!==null&&of(n,e,a,o),n.flags|=262144}function wl(e){for(e=e.firstContext;e!==null;){if(!Zn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function dr(e){hr=e,ji=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function bn(e){return ym(hr,e)}function Dl(e,n){return hr===null&&dr(e),ym(e,n)}function ym(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},ji===null){if(e===null)throw Error(r(308));ji=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else ji=ji.next=n;return a}var Ux=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,o){e.push(o)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},Lx=s.unstable_scheduleCallback,Nx=s.unstable_NormalPriority,on={$$typeof:O,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function lf(){return{controller:new Ux,data:new Map,refCount:0}}function po(e){e.refCount--,e.refCount===0&&Lx(Nx,function(){e.controller.abort()})}var mo=null,uf=0,ts=0,es=null;function Ox(e,n){if(mo===null){var a=mo=[];uf=0,ts=hh(),es={status:"pending",value:void 0,then:function(o){a.push(o)}}}return uf++,n.then(Mm,Mm),n}function Mm(){if(--uf===0&&mo!==null){es!==null&&(es.status="fulfilled");var e=mo;mo=null,ts=0,es=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function zx(e,n){var a=[],o={status:"pending",value:null,reason:null,then:function(c){a.push(c)}};return e.then(function(){o.status="fulfilled",o.value=n;for(var c=0;c<a.length;c++)(0,a[c])(n)},function(c){for(o.status="rejected",o.reason=c,c=0;c<a.length;c++)(0,a[c])(void 0)}),o}var Em=z.S;z.S=function(e,n){s_=g(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&Ox(e,n),Em!==null&&Em(e,n)};var pr=N(null);function cf(){var e=pr.current;return e!==null?e:We.pooledCache}function Ul(e,n){n===null?xt(pr,pr.current):xt(pr,n.pool)}function Tm(){var e=cf();return e===null?null:{parent:on._currentValue,pool:e}}var ns=Error(r(460)),ff=Error(r(474)),Ll=Error(r(542)),Nl={then:function(){}};function bm(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Am(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(Xi,Xi),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,Cm(e),e;default:if(typeof n.status=="string")n.then(Xi,Xi);else{if(e=We,e!==null&&100<e.shellSuspendCounter)throw Error(r(482));e=n,e.status="pending",e.then(function(o){if(n.status==="pending"){var c=n;c.status="fulfilled",c.value=o}},function(o){if(n.status==="pending"){var c=n;c.status="rejected",c.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,Cm(e),e}throw gr=n,ns}}function mr(e){try{var n=e._init;return n(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(gr=a,ns):a}}var gr=null;function Rm(){if(gr===null)throw Error(r(459));var e=gr;return gr=null,e}function Cm(e){if(e===ns||e===Ll)throw Error(r(483))}var is=null,go=0;function Ol(e){var n=go;return go+=1,is===null&&(is=[]),Am(is,e,n)}function _o(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function zl(e,n){throw n.$$typeof===y?Error(r(525)):(e=Object.prototype.toString.call(n),Error(r(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function wm(e){function n(Z,k){if(e){var et=Z.deletions;et===null?(Z.deletions=[k],Z.flags|=16):et.push(k)}}function a(Z,k){if(!e)return null;for(;k!==null;)n(Z,k),k=k.sibling;return null}function o(Z){for(var k=new Map;Z!==null;)Z.key!==null?k.set(Z.key,Z):k.set(Z.index,Z),Z=Z.sibling;return k}function c(Z,k){return Z=qi(Z,k),Z.index=0,Z.sibling=null,Z}function f(Z,k,et){return Z.index=et,e?(et=Z.alternate,et!==null?(et=et.index,et<k?(Z.flags|=67108866,k):et):(Z.flags|=67108866,k)):(Z.flags|=1048576,k)}function x(Z){return e&&Z.alternate===null&&(Z.flags|=67108866),Z}function b(Z,k,et,gt){return k===null||k.tag!==6?(k=Jc(et,Z.mode,gt),k.return=Z,k):(k=c(k,et),k.return=Z,k)}function I(Z,k,et,gt){var Jt=et.type;return Jt===A?pt(Z,k,et.props.children,gt,et.key):k!==null&&(k.elementType===Jt||typeof Jt=="object"&&Jt!==null&&Jt.$$typeof===j&&mr(Jt)===k.type)?(k=c(k,et.props),_o(k,et),k.return=Z,k):(k=Rl(et.type,et.key,et.props,null,Z.mode,gt),_o(k,et),k.return=Z,k)}function nt(Z,k,et,gt){return k===null||k.tag!==4||k.stateNode.containerInfo!==et.containerInfo||k.stateNode.implementation!==et.implementation?(k=$c(et,Z.mode,gt),k.return=Z,k):(k=c(k,et.children||[]),k.return=Z,k)}function pt(Z,k,et,gt,Jt){return k===null||k.tag!==7?(k=cr(et,Z.mode,gt,Jt),k.return=Z,k):(k=c(k,et),k.return=Z,k)}function _t(Z,k,et){if(typeof k=="string"&&k!==""||typeof k=="number"||typeof k=="bigint")return k=Jc(""+k,Z.mode,et),k.return=Z,k;if(typeof k=="object"&&k!==null){switch(k.$$typeof){case M:return et=Rl(k.type,k.key,k.props,null,Z.mode,et),_o(et,k),et.return=Z,et;case T:return k=$c(k,Z.mode,et),k.return=Z,k;case j:return k=mr(k),_t(Z,k,et)}if(dt(k)||tt(k))return k=cr(k,Z.mode,et,null),k.return=Z,k;if(typeof k.then=="function")return _t(Z,Ol(k),et);if(k.$$typeof===O)return _t(Z,Dl(Z,k),et);zl(Z,k)}return null}function it(Z,k,et,gt){var Jt=k!==null?k.key:null;if(typeof et=="string"&&et!==""||typeof et=="number"||typeof et=="bigint")return Jt!==null?null:b(Z,k,""+et,gt);if(typeof et=="object"&&et!==null){switch(et.$$typeof){case M:return et.key===Jt?I(Z,k,et,gt):null;case T:return et.key===Jt?nt(Z,k,et,gt):null;case j:return et=mr(et),it(Z,k,et,gt)}if(dt(et)||tt(et))return Jt!==null?null:pt(Z,k,et,gt,null);if(typeof et.then=="function")return it(Z,k,Ol(et),gt);if(et.$$typeof===O)return it(Z,k,Dl(Z,et),gt);zl(Z,et)}return null}function lt(Z,k,et,gt,Jt){if(typeof gt=="string"&&gt!==""||typeof gt=="number"||typeof gt=="bigint")return Z=Z.get(et)||null,b(k,Z,""+gt,Jt);if(typeof gt=="object"&&gt!==null){switch(gt.$$typeof){case M:return Z=Z.get(gt.key===null?et:gt.key)||null,I(k,Z,gt,Jt);case T:return Z=Z.get(gt.key===null?et:gt.key)||null,nt(k,Z,gt,Jt);case j:return gt=mr(gt),lt(Z,k,et,gt,Jt)}if(dt(gt)||tt(gt))return Z=Z.get(et)||null,pt(k,Z,gt,Jt,null);if(typeof gt.then=="function")return lt(Z,k,et,Ol(gt),Jt);if(gt.$$typeof===O)return lt(Z,k,et,Dl(k,gt),Jt);zl(k,gt)}return null}function kt(Z,k,et,gt){for(var Jt=null,Ce=null,jt=k,ce=k=0,xe=null;jt!==null&&ce<et.length;ce++){jt.index>ce?(xe=jt,jt=null):xe=jt.sibling;var we=it(Z,jt,et[ce],gt);if(we===null){jt===null&&(jt=xe);break}e&&jt&&we.alternate===null&&n(Z,jt),k=f(we,k,ce),Ce===null?Jt=we:Ce.sibling=we,Ce=we,jt=xe}if(ce===et.length)return a(Z,jt),Ee&&Yi(Z,ce),Jt;if(jt===null){for(;ce<et.length;ce++)jt=_t(Z,et[ce],gt),jt!==null&&(k=f(jt,k,ce),Ce===null?Jt=jt:Ce.sibling=jt,Ce=jt);return Ee&&Yi(Z,ce),Jt}for(jt=o(jt);ce<et.length;ce++)xe=lt(jt,Z,ce,et[ce],gt),xe!==null&&(e&&xe.alternate!==null&&jt.delete(xe.key===null?ce:xe.key),k=f(xe,k,ce),Ce===null?Jt=xe:Ce.sibling=xe,Ce=xe);return e&&jt.forEach(function(Xa){return n(Z,Xa)}),Ee&&Yi(Z,ce),Jt}function te(Z,k,et,gt){if(et==null)throw Error(r(151));for(var Jt=null,Ce=null,jt=k,ce=k=0,xe=null,we=et.next();jt!==null&&!we.done;ce++,we=et.next()){jt.index>ce?(xe=jt,jt=null):xe=jt.sibling;var Xa=it(Z,jt,we.value,gt);if(Xa===null){jt===null&&(jt=xe);break}e&&jt&&Xa.alternate===null&&n(Z,jt),k=f(Xa,k,ce),Ce===null?Jt=Xa:Ce.sibling=Xa,Ce=Xa,jt=xe}if(we.done)return a(Z,jt),Ee&&Yi(Z,ce),Jt;if(jt===null){for(;!we.done;ce++,we=et.next())we=_t(Z,we.value,gt),we!==null&&(k=f(we,k,ce),Ce===null?Jt=we:Ce.sibling=we,Ce=we);return Ee&&Yi(Z,ce),Jt}for(jt=o(jt);!we.done;ce++,we=et.next())we=lt(jt,Z,ce,we.value,gt),we!==null&&(e&&we.alternate!==null&&jt.delete(we.key===null?ce:we.key),k=f(we,k,ce),Ce===null?Jt=we:Ce.sibling=we,Ce=we);return e&&jt.forEach(function(qy){return n(Z,qy)}),Ee&&Yi(Z,ce),Jt}function Ve(Z,k,et,gt){if(typeof et=="object"&&et!==null&&et.type===A&&et.key===null&&(et=et.props.children),typeof et=="object"&&et!==null){switch(et.$$typeof){case M:t:{for(var Jt=et.key;k!==null;){if(k.key===Jt){if(Jt=et.type,Jt===A){if(k.tag===7){a(Z,k.sibling),gt=c(k,et.props.children),gt.return=Z,Z=gt;break t}}else if(k.elementType===Jt||typeof Jt=="object"&&Jt!==null&&Jt.$$typeof===j&&mr(Jt)===k.type){a(Z,k.sibling),gt=c(k,et.props),_o(gt,et),gt.return=Z,Z=gt;break t}a(Z,k);break}else n(Z,k);k=k.sibling}et.type===A?(gt=cr(et.props.children,Z.mode,gt,et.key),gt.return=Z,Z=gt):(gt=Rl(et.type,et.key,et.props,null,Z.mode,gt),_o(gt,et),gt.return=Z,Z=gt)}return x(Z);case T:t:{for(Jt=et.key;k!==null;){if(k.key===Jt)if(k.tag===4&&k.stateNode.containerInfo===et.containerInfo&&k.stateNode.implementation===et.implementation){a(Z,k.sibling),gt=c(k,et.children||[]),gt.return=Z,Z=gt;break t}else{a(Z,k);break}else n(Z,k);k=k.sibling}gt=$c(et,Z.mode,gt),gt.return=Z,Z=gt}return x(Z);case j:return et=mr(et),Ve(Z,k,et,gt)}if(dt(et))return kt(Z,k,et,gt);if(tt(et)){if(Jt=tt(et),typeof Jt!="function")throw Error(r(150));return et=Jt.call(et),te(Z,k,et,gt)}if(typeof et.then=="function")return Ve(Z,k,Ol(et),gt);if(et.$$typeof===O)return Ve(Z,k,Dl(Z,et),gt);zl(Z,et)}return typeof et=="string"&&et!==""||typeof et=="number"||typeof et=="bigint"?(et=""+et,k!==null&&k.tag===6?(a(Z,k.sibling),gt=c(k,et),gt.return=Z,Z=gt):(a(Z,k),gt=Jc(et,Z.mode,gt),gt.return=Z,Z=gt),x(Z)):a(Z,k)}return function(Z,k,et,gt){try{go=0;var Jt=Ve(Z,k,et,gt);return is=null,Jt}catch(jt){if(jt===ns||jt===Ll)throw jt;var Ce=Kn(29,jt,null,Z.mode);return Ce.lanes=gt,Ce.return=Z,Ce}finally{}}}var _r=wm(!0),Dm=wm(!1),Ra=!1;function hf(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function df(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Ca(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function wa(e,n,a){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,(Le&2)!==0){var c=o.pending;return c===null?n.next=n:(n.next=c.next,c.next=n),o.pending=n,n=Al(e),dm(e,null,a),n}return bl(e,o,n,a),Al(e)}function vo(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,Ni(e,a)}}function pf(e,n){var a=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var c=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var x={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?c=f=x:f=f.next=x,a=a.next}while(a!==null);f===null?c=f=n:f=f.next=n}else c=f=n;a={baseState:o.baseState,firstBaseUpdate:c,lastBaseUpdate:f,shared:o.shared,callbacks:o.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var mf=!1;function So(){if(mf){var e=es;if(e!==null)throw e}}function xo(e,n,a,o){mf=!1;var c=e.updateQueue;Ra=!1;var f=c.firstBaseUpdate,x=c.lastBaseUpdate,b=c.shared.pending;if(b!==null){c.shared.pending=null;var I=b,nt=I.next;I.next=null,x===null?f=nt:x.next=nt,x=I;var pt=e.alternate;pt!==null&&(pt=pt.updateQueue,b=pt.lastBaseUpdate,b!==x&&(b===null?pt.firstBaseUpdate=nt:b.next=nt,pt.lastBaseUpdate=I))}if(f!==null){var _t=c.baseState;x=0,pt=nt=I=null,b=f;do{var it=b.lane&-536870913,lt=it!==b.lane;if(lt?(Se&it)===it:(o&it)===it){it!==0&&it===ts&&(mf=!0),pt!==null&&(pt=pt.next={lane:0,tag:b.tag,payload:b.payload,callback:null,next:null});t:{var kt=e,te=b;it=n;var Ve=a;switch(te.tag){case 1:if(kt=te.payload,typeof kt=="function"){_t=kt.call(Ve,_t,it);break t}_t=kt;break t;case 3:kt.flags=kt.flags&-65537|128;case 0:if(kt=te.payload,it=typeof kt=="function"?kt.call(Ve,_t,it):kt,it==null)break t;_t=v({},_t,it);break t;case 2:Ra=!0}}it=b.callback,it!==null&&(e.flags|=64,lt&&(e.flags|=8192),lt=c.callbacks,lt===null?c.callbacks=[it]:lt.push(it))}else lt={lane:it,tag:b.tag,payload:b.payload,callback:b.callback,next:null},pt===null?(nt=pt=lt,I=_t):pt=pt.next=lt,x|=it;if(b=b.next,b===null){if(b=c.shared.pending,b===null)break;lt=b,b=lt.next,lt.next=null,c.lastBaseUpdate=lt,c.shared.pending=null}}while(!0);pt===null&&(I=_t),c.baseState=I,c.firstBaseUpdate=nt,c.lastBaseUpdate=pt,f===null&&(c.shared.lanes=0),Oa|=x,e.lanes=x,e.memoizedState=_t}}function Um(e,n){if(typeof e!="function")throw Error(r(191,e));e.call(n)}function Lm(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)Um(a[e],n)}var as=N(null),Pl=N(0);function Nm(e,n){e=aa,xt(Pl,e),xt(as,n),aa=e|n.baseLanes}function gf(){xt(Pl,aa),xt(as,as.current)}function _f(){aa=Pl.current,J(as),J(Pl)}var Qn=N(null),di=null;function Da(e){var n=e.alternate;xt(an,an.current&1),xt(Qn,e),di===null&&(n===null||as.current!==null||n.memoizedState!==null)&&(di=e)}function vf(e){xt(an,an.current),xt(Qn,e),di===null&&(di=e)}function Om(e){e.tag===22?(xt(an,an.current),xt(Qn,e),di===null&&(di=e)):Ua()}function Ua(){xt(an,an.current),xt(Qn,Qn.current)}function Jn(e){J(Qn),di===e&&(di=null),J(an)}var an=N(0);function Bl(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Th(a)||bh(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Ki=0,ue=null,He=null,ln=null,Il=!1,rs=!1,vr=!1,Fl=0,yo=0,ss=null,Px=0;function $e(){throw Error(r(321))}function Sf(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!Zn(e[a],n[a]))return!1;return!0}function xf(e,n,a,o,c,f){return Ki=f,ue=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,z.H=e===null||e.memoizedState===null?_g:zf,vr=!1,f=a(o,c),vr=!1,rs&&(f=Pm(n,a,o,c)),zm(e),f}function zm(e){z.H=To;var n=He!==null&&He.next!==null;if(Ki=0,ln=He=ue=null,Il=!1,yo=0,ss=null,n)throw Error(r(300));e===null||un||(e=e.dependencies,e!==null&&wl(e)&&(un=!0))}function Pm(e,n,a,o){ue=e;var c=0;do{if(rs&&(ss=null),yo=0,rs=!1,25<=c)throw Error(r(301));if(c+=1,ln=He=null,e.updateQueue!=null){var f=e.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}z.H=vg,f=n(a,o)}while(rs);return f}function Bx(){var e=z.H,n=e.useState()[0];return n=typeof n.then=="function"?Mo(n):n,e=e.useState()[0],(He!==null?He.memoizedState:null)!==e&&(ue.flags|=1024),n}function yf(){var e=Fl!==0;return Fl=0,e}function Mf(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function Ef(e){if(Il){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}Il=!1}Ki=0,ln=He=ue=null,rs=!1,yo=Fl=0,ss=null}function On(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ln===null?ue.memoizedState=ln=e:ln=ln.next=e,ln}function rn(){if(He===null){var e=ue.alternate;e=e!==null?e.memoizedState:null}else e=He.next;var n=ln===null?ue.memoizedState:ln.next;if(n!==null)ln=n,He=e;else{if(e===null)throw ue.alternate===null?Error(r(467)):Error(r(310));He=e,e={memoizedState:He.memoizedState,baseState:He.baseState,baseQueue:He.baseQueue,queue:He.queue,next:null},ln===null?ue.memoizedState=ln=e:ln=ln.next=e}return ln}function Hl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Mo(e){var n=yo;return yo+=1,ss===null&&(ss=[]),e=Am(ss,e,n),n=ue,(ln===null?n.memoizedState:ln.next)===null&&(n=n.alternate,z.H=n===null||n.memoizedState===null?_g:zf),e}function Gl(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Mo(e);if(e.$$typeof===O)return bn(e)}throw Error(r(438,String(e)))}function Tf(e){var n=null,a=ue.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var o=ue.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(c){return c.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Hl(),ue.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),o=0;o<e;o++)a[o]=C;return n.index++,a}function Qi(e,n){return typeof n=="function"?n(e):n}function Vl(e){var n=rn();return bf(n,He,e)}function bf(e,n,a){var o=e.queue;if(o===null)throw Error(r(311));o.lastRenderedReducer=a;var c=e.baseQueue,f=o.pending;if(f!==null){if(c!==null){var x=c.next;c.next=f.next,f.next=x}n.baseQueue=c=f,o.pending=null}if(f=e.baseState,c===null)e.memoizedState=f;else{n=c.next;var b=x=null,I=null,nt=n,pt=!1;do{var _t=nt.lane&-536870913;if(_t!==nt.lane?(Se&_t)===_t:(Ki&_t)===_t){var it=nt.revertLane;if(it===0)I!==null&&(I=I.next={lane:0,revertLane:0,gesture:null,action:nt.action,hasEagerState:nt.hasEagerState,eagerState:nt.eagerState,next:null}),_t===ts&&(pt=!0);else if((Ki&it)===it){nt=nt.next,it===ts&&(pt=!0);continue}else _t={lane:0,revertLane:nt.revertLane,gesture:null,action:nt.action,hasEagerState:nt.hasEagerState,eagerState:nt.eagerState,next:null},I===null?(b=I=_t,x=f):I=I.next=_t,ue.lanes|=it,Oa|=it;_t=nt.action,vr&&a(f,_t),f=nt.hasEagerState?nt.eagerState:a(f,_t)}else it={lane:_t,revertLane:nt.revertLane,gesture:nt.gesture,action:nt.action,hasEagerState:nt.hasEagerState,eagerState:nt.eagerState,next:null},I===null?(b=I=it,x=f):I=I.next=it,ue.lanes|=_t,Oa|=_t;nt=nt.next}while(nt!==null&&nt!==n);if(I===null?x=f:I.next=b,!Zn(f,e.memoizedState)&&(un=!0,pt&&(a=es,a!==null)))throw a;e.memoizedState=f,e.baseState=x,e.baseQueue=I,o.lastRenderedState=f}return c===null&&(o.lanes=0),[e.memoizedState,o.dispatch]}function Af(e){var n=rn(),a=n.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=e;var o=a.dispatch,c=a.pending,f=n.memoizedState;if(c!==null){a.pending=null;var x=c=c.next;do f=e(f,x.action),x=x.next;while(x!==c);Zn(f,n.memoizedState)||(un=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,o]}function Bm(e,n,a){var o=ue,c=rn(),f=Ee;if(f){if(a===void 0)throw Error(r(407));a=a()}else a=n();var x=!Zn((He||c).memoizedState,a);if(x&&(c.memoizedState=a,un=!0),c=c.queue,wf(Hm.bind(null,o,c,e),[e]),c.getSnapshot!==n||x||ln!==null&&ln.memoizedState.tag&1){if(o.flags|=2048,os(9,{destroy:void 0},Fm.bind(null,o,c,a,n),null),We===null)throw Error(r(349));f||(Ki&127)!==0||Im(o,n,a)}return a}function Im(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=ue.updateQueue,n===null?(n=Hl(),ue.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function Fm(e,n,a,o){n.value=a,n.getSnapshot=o,Gm(n)&&Vm(e)}function Hm(e,n,a){return a(function(){Gm(n)&&Vm(e)})}function Gm(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!Zn(e,a)}catch{return!0}}function Vm(e){var n=ur(e,2);n!==null&&Vn(n,e,2)}function Rf(e){var n=On();if(typeof e=="function"){var a=e;if(e=a(),vr){Zt(!0);try{a()}finally{Zt(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Qi,lastRenderedState:e},n}function km(e,n,a,o){return e.baseState=a,bf(e,He,typeof o=="function"?o:Qi)}function Ix(e,n,a,o,c){if(Wl(e))throw Error(r(485));if(e=n.action,e!==null){var f={payload:c,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(x){f.listeners.push(x)}};z.T!==null?a(!0):f.isTransition=!1,o(f),a=n.pending,a===null?(f.next=n.pending=f,Xm(n,f)):(f.next=a.next,n.pending=a.next=f)}}function Xm(e,n){var a=n.action,o=n.payload,c=e.state;if(n.isTransition){var f=z.T,x={};z.T=x;try{var b=a(c,o),I=z.S;I!==null&&I(x,b),Wm(e,n,b)}catch(nt){Cf(e,n,nt)}finally{f!==null&&x.types!==null&&(f.types=x.types),z.T=f}}else try{f=a(c,o),Wm(e,n,f)}catch(nt){Cf(e,n,nt)}}function Wm(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){qm(e,n,o)},function(o){return Cf(e,n,o)}):qm(e,n,a)}function qm(e,n,a){n.status="fulfilled",n.value=a,Ym(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,Xm(e,a)))}function Cf(e,n,a){var o=e.pending;if(e.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=a,Ym(n),n=n.next;while(n!==o)}e.action=null}function Ym(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function jm(e,n){return n}function Zm(e,n){if(Ee){var a=We.formState;if(a!==null){t:{var o=ue;if(Ee){if(Ze){e:{for(var c=Ze,f=hi;c.nodeType!==8;){if(!f){c=null;break e}if(c=pi(c.nextSibling),c===null){c=null;break e}}f=c.data,c=f==="F!"||f==="F"?c:null}if(c){Ze=pi(c.nextSibling),o=c.data==="F!";break t}}ba(o)}o=!1}o&&(n=a[0])}}return a=On(),a.memoizedState=a.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:jm,lastRenderedState:n},a.queue=o,a=pg.bind(null,ue,o),o.dispatch=a,o=Rf(!1),f=Of.bind(null,ue,!1,o.queue),o=On(),c={state:n,dispatch:null,action:e,pending:null},o.queue=c,a=Ix.bind(null,ue,c,f,a),c.dispatch=a,o.memoizedState=e,[n,a,!1]}function Km(e){var n=rn();return Qm(n,He,e)}function Qm(e,n,a){if(n=bf(e,n,jm)[0],e=Vl(Qi)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=Mo(n)}catch(x){throw x===ns?Ll:x}else o=n;n=rn();var c=n.queue,f=c.dispatch;return a!==n.memoizedState&&(ue.flags|=2048,os(9,{destroy:void 0},Fx.bind(null,c,a),null)),[o,f,e]}function Fx(e,n){e.action=n}function Jm(e){var n=rn(),a=He;if(a!==null)return Qm(n,a,e);rn(),n=n.memoizedState,a=rn();var o=a.queue.dispatch;return a.memoizedState=e,[n,o,!1]}function os(e,n,a,o){return e={tag:e,create:a,deps:o,inst:n,next:null},n=ue.updateQueue,n===null&&(n=Hl(),ue.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(o=a.next,a.next=e,e.next=o,n.lastEffect=e),e}function $m(){return rn().memoizedState}function kl(e,n,a,o){var c=On();ue.flags|=e,c.memoizedState=os(1|n,{destroy:void 0},a,o===void 0?null:o)}function Xl(e,n,a,o){var c=rn();o=o===void 0?null:o;var f=c.memoizedState.inst;He!==null&&o!==null&&Sf(o,He.memoizedState.deps)?c.memoizedState=os(n,f,a,o):(ue.flags|=e,c.memoizedState=os(1|n,f,a,o))}function tg(e,n){kl(8390656,8,e,n)}function wf(e,n){Xl(2048,8,e,n)}function Hx(e){ue.flags|=4;var n=ue.updateQueue;if(n===null)n=Hl(),ue.updateQueue=n,n.events=[e];else{var a=n.events;a===null?n.events=[e]:a.push(e)}}function eg(e){var n=rn().memoizedState;return Hx({ref:n,nextImpl:e}),function(){if((Le&2)!==0)throw Error(r(440));return n.impl.apply(void 0,arguments)}}function ng(e,n){return Xl(4,2,e,n)}function ig(e,n){return Xl(4,4,e,n)}function ag(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function rg(e,n,a){a=a!=null?a.concat([e]):null,Xl(4,4,ag.bind(null,n,e),a)}function Df(){}function sg(e,n){var a=rn();n=n===void 0?null:n;var o=a.memoizedState;return n!==null&&Sf(n,o[1])?o[0]:(a.memoizedState=[e,n],e)}function og(e,n){var a=rn();n=n===void 0?null:n;var o=a.memoizedState;if(n!==null&&Sf(n,o[1]))return o[0];if(o=e(),vr){Zt(!0);try{e()}finally{Zt(!1)}}return a.memoizedState=[o,n],o}function Uf(e,n,a){return a===void 0||(Ki&1073741824)!==0&&(Se&261930)===0?e.memoizedState=n:(e.memoizedState=a,e=l_(),ue.lanes|=e,Oa|=e,a)}function lg(e,n,a,o){return Zn(a,n)?a:as.current!==null?(e=Uf(e,a,o),Zn(e,n)||(un=!0),e):(Ki&42)===0||(Ki&1073741824)!==0&&(Se&261930)===0?(un=!0,e.memoizedState=a):(e=l_(),ue.lanes|=e,Oa|=e,n)}function ug(e,n,a,o,c){var f=q.p;q.p=f!==0&&8>f?f:8;var x=z.T,b={};z.T=b,Of(e,!1,n,a);try{var I=c(),nt=z.S;if(nt!==null&&nt(b,I),I!==null&&typeof I=="object"&&typeof I.then=="function"){var pt=zx(I,o);Eo(e,n,pt,ei(e))}else Eo(e,n,o,ei(e))}catch(_t){Eo(e,n,{then:function(){},status:"rejected",reason:_t},ei())}finally{q.p=f,x!==null&&b.types!==null&&(x.types=b.types),z.T=x}}function Gx(){}function Lf(e,n,a,o){if(e.tag!==5)throw Error(r(476));var c=cg(e).queue;ug(e,c,n,W,a===null?Gx:function(){return fg(e),a(o)})}function cg(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:W,baseState:W,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Qi,lastRenderedState:W},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Qi,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function fg(e){var n=cg(e);n.next===null&&(n=e.alternate.memoizedState),Eo(e,n.next.queue,{},ei())}function Nf(){return bn(Ho)}function hg(){return rn().memoizedState}function dg(){return rn().memoizedState}function Vx(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=ei();e=Ca(a);var o=wa(n,e,a);o!==null&&(Vn(o,n,a),vo(o,n,a)),n={cache:lf()},e.payload=n;return}n=n.return}}function kx(e,n,a){var o=ei();a={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Wl(e)?mg(n,a):(a=Kc(e,n,a,o),a!==null&&(Vn(a,e,o),gg(a,n,o)))}function pg(e,n,a){var o=ei();Eo(e,n,a,o)}function Eo(e,n,a,o){var c={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Wl(e))mg(n,c);else{var f=e.alternate;if(e.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var x=n.lastRenderedState,b=f(x,a);if(c.hasEagerState=!0,c.eagerState=b,Zn(b,x))return bl(e,n,c,0),We===null&&Tl(),!1}catch{}finally{}if(a=Kc(e,n,c,o),a!==null)return Vn(a,e,o),gg(a,n,o),!0}return!1}function Of(e,n,a,o){if(o={lane:2,revertLane:hh(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},Wl(e)){if(n)throw Error(r(479))}else n=Kc(e,a,o,2),n!==null&&Vn(n,e,2)}function Wl(e){var n=e.alternate;return e===ue||n!==null&&n===ue}function mg(e,n){rs=Il=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function gg(e,n,a){if((a&4194048)!==0){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,Ni(e,a)}}var To={readContext:bn,use:Gl,useCallback:$e,useContext:$e,useEffect:$e,useImperativeHandle:$e,useLayoutEffect:$e,useInsertionEffect:$e,useMemo:$e,useReducer:$e,useRef:$e,useState:$e,useDebugValue:$e,useDeferredValue:$e,useTransition:$e,useSyncExternalStore:$e,useId:$e,useHostTransitionStatus:$e,useFormState:$e,useActionState:$e,useOptimistic:$e,useMemoCache:$e,useCacheRefresh:$e};To.useEffectEvent=$e;var _g={readContext:bn,use:Gl,useCallback:function(e,n){return On().memoizedState=[e,n===void 0?null:n],e},useContext:bn,useEffect:tg,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,kl(4194308,4,ag.bind(null,n,e),a)},useLayoutEffect:function(e,n){return kl(4194308,4,e,n)},useInsertionEffect:function(e,n){kl(4,2,e,n)},useMemo:function(e,n){var a=On();n=n===void 0?null:n;var o=e();if(vr){Zt(!0);try{e()}finally{Zt(!1)}}return a.memoizedState=[o,n],o},useReducer:function(e,n,a){var o=On();if(a!==void 0){var c=a(n);if(vr){Zt(!0);try{a(n)}finally{Zt(!1)}}}else c=n;return o.memoizedState=o.baseState=c,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:c},o.queue=e,e=e.dispatch=kx.bind(null,ue,e),[o.memoizedState,e]},useRef:function(e){var n=On();return e={current:e},n.memoizedState=e},useState:function(e){e=Rf(e);var n=e.queue,a=pg.bind(null,ue,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:Df,useDeferredValue:function(e,n){var a=On();return Uf(a,e,n)},useTransition:function(){var e=Rf(!1);return e=ug.bind(null,ue,e.queue,!0,!1),On().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var o=ue,c=On();if(Ee){if(a===void 0)throw Error(r(407));a=a()}else{if(a=n(),We===null)throw Error(r(349));(Se&127)!==0||Im(o,n,a)}c.memoizedState=a;var f={value:a,getSnapshot:n};return c.queue=f,tg(Hm.bind(null,o,f,e),[e]),o.flags|=2048,os(9,{destroy:void 0},Fm.bind(null,o,f,a,n),null),a},useId:function(){var e=On(),n=We.identifierPrefix;if(Ee){var a=Pi,o=zi;a=(o&~(1<<32-Bt(o)-1)).toString(32)+a,n="_"+n+"R_"+a,a=Fl++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=Px++,n="_"+n+"r_"+a.toString(32)+"_";return e.memoizedState=n},useHostTransitionStatus:Nf,useFormState:Zm,useActionState:Zm,useOptimistic:function(e){var n=On();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=Of.bind(null,ue,!0,a),a.dispatch=n,[e,n]},useMemoCache:Tf,useCacheRefresh:function(){return On().memoizedState=Vx.bind(null,ue)},useEffectEvent:function(e){var n=On(),a={impl:e};return n.memoizedState=a,function(){if((Le&2)!==0)throw Error(r(440));return a.impl.apply(void 0,arguments)}}},zf={readContext:bn,use:Gl,useCallback:sg,useContext:bn,useEffect:wf,useImperativeHandle:rg,useInsertionEffect:ng,useLayoutEffect:ig,useMemo:og,useReducer:Vl,useRef:$m,useState:function(){return Vl(Qi)},useDebugValue:Df,useDeferredValue:function(e,n){var a=rn();return lg(a,He.memoizedState,e,n)},useTransition:function(){var e=Vl(Qi)[0],n=rn().memoizedState;return[typeof e=="boolean"?e:Mo(e),n]},useSyncExternalStore:Bm,useId:hg,useHostTransitionStatus:Nf,useFormState:Km,useActionState:Km,useOptimistic:function(e,n){var a=rn();return km(a,He,e,n)},useMemoCache:Tf,useCacheRefresh:dg};zf.useEffectEvent=eg;var vg={readContext:bn,use:Gl,useCallback:sg,useContext:bn,useEffect:wf,useImperativeHandle:rg,useInsertionEffect:ng,useLayoutEffect:ig,useMemo:og,useReducer:Af,useRef:$m,useState:function(){return Af(Qi)},useDebugValue:Df,useDeferredValue:function(e,n){var a=rn();return He===null?Uf(a,e,n):lg(a,He.memoizedState,e,n)},useTransition:function(){var e=Af(Qi)[0],n=rn().memoizedState;return[typeof e=="boolean"?e:Mo(e),n]},useSyncExternalStore:Bm,useId:hg,useHostTransitionStatus:Nf,useFormState:Jm,useActionState:Jm,useOptimistic:function(e,n){var a=rn();return He!==null?km(a,He,e,n):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:Tf,useCacheRefresh:dg};vg.useEffectEvent=eg;function Pf(e,n,a,o){n=e.memoizedState,a=a(o,n),a=a==null?n:v({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var Bf={enqueueSetState:function(e,n,a){e=e._reactInternals;var o=ei(),c=Ca(o);c.payload=n,a!=null&&(c.callback=a),n=wa(e,c,o),n!==null&&(Vn(n,e,o),vo(n,e,o))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var o=ei(),c=Ca(o);c.tag=1,c.payload=n,a!=null&&(c.callback=a),n=wa(e,c,o),n!==null&&(Vn(n,e,o),vo(n,e,o))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=ei(),o=Ca(a);o.tag=2,n!=null&&(o.callback=n),n=wa(e,o,a),n!==null&&(Vn(n,e,a),vo(n,e,a))}};function Sg(e,n,a,o,c,f,x){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,f,x):n.prototype&&n.prototype.isPureReactComponent?!uo(a,o)||!uo(c,f):!0}function xg(e,n,a,o){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,o),n.state!==e&&Bf.enqueueReplaceState(n,n.state,null)}function Sr(e,n){var a=n;if("ref"in n){a={};for(var o in n)o!=="ref"&&(a[o]=n[o])}if(e=e.defaultProps){a===n&&(a=v({},a));for(var c in e)a[c]===void 0&&(a[c]=e[c])}return a}function yg(e){El(e)}function Mg(e){console.error(e)}function Eg(e){El(e)}function ql(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function Tg(e,n,a){try{var o=e.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(c){setTimeout(function(){throw c})}}function If(e,n,a){return a=Ca(a),a.tag=3,a.payload={element:null},a.callback=function(){ql(e,n)},a}function bg(e){return e=Ca(e),e.tag=3,e}function Ag(e,n,a,o){var c=a.type.getDerivedStateFromError;if(typeof c=="function"){var f=o.value;e.payload=function(){return c(f)},e.callback=function(){Tg(n,a,o)}}var x=a.stateNode;x!==null&&typeof x.componentDidCatch=="function"&&(e.callback=function(){Tg(n,a,o),typeof c!="function"&&(za===null?za=new Set([this]):za.add(this));var b=o.stack;this.componentDidCatch(o.value,{componentStack:b!==null?b:""})})}function Xx(e,n,a,o,c){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=a.alternate,n!==null&&$r(n,a,c,!0),a=Qn.current,a!==null){switch(a.tag){case 31:case 13:return di===null?au():a.alternate===null&&tn===0&&(tn=3),a.flags&=-257,a.flags|=65536,a.lanes=c,o===Nl?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([o]):n.add(o),uh(e,o,c)),!1;case 22:return a.flags|=65536,o===Nl?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([o]):a.add(o)),uh(e,o,c)),!1}throw Error(r(435,a.tag))}return uh(e,o,c),au(),!1}if(Ee)return n=Qn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=c,o!==nf&&(e=Error(r(422),{cause:o}),ho(ui(e,a)))):(o!==nf&&(n=Error(r(423),{cause:o}),ho(ui(n,a))),e=e.current.alternate,e.flags|=65536,c&=-c,e.lanes|=c,o=ui(o,a),c=If(e.stateNode,o,c),pf(e,c),tn!==4&&(tn=2)),!1;var f=Error(r(520),{cause:o});if(f=ui(f,a),Lo===null?Lo=[f]:Lo.push(f),tn!==4&&(tn=2),n===null)return!0;o=ui(o,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=c&-c,a.lanes|=e,e=If(a.stateNode,o,e),pf(a,e),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(za===null||!za.has(f))))return a.flags|=65536,c&=-c,a.lanes|=c,c=bg(c),Ag(c,e,a,o),pf(a,c),!1}a=a.return}while(a!==null);return!1}var Ff=Error(r(461)),un=!1;function An(e,n,a,o){n.child=e===null?Dm(n,null,a,o):_r(n,e.child,a,o)}function Rg(e,n,a,o,c){a=a.render;var f=n.ref;if("ref"in o){var x={};for(var b in o)b!=="ref"&&(x[b]=o[b])}else x=o;return dr(n),o=xf(e,n,a,x,f,c),b=yf(),e!==null&&!un?(Mf(e,n,c),Ji(e,n,c)):(Ee&&b&&tf(n),n.flags|=1,An(e,n,o,c),n.child)}function Cg(e,n,a,o,c){if(e===null){var f=a.type;return typeof f=="function"&&!Qc(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,wg(e,n,f,o,c)):(e=Rl(a.type,null,o,n,n.mode,c),e.ref=n.ref,e.return=n,n.child=e)}if(f=e.child,!Yf(e,c)){var x=f.memoizedProps;if(a=a.compare,a=a!==null?a:uo,a(x,o)&&e.ref===n.ref)return Ji(e,n,c)}return n.flags|=1,e=qi(f,o),e.ref=n.ref,e.return=n,n.child=e}function wg(e,n,a,o,c){if(e!==null){var f=e.memoizedProps;if(uo(f,o)&&e.ref===n.ref)if(un=!1,n.pendingProps=o=f,Yf(e,c))(e.flags&131072)!==0&&(un=!0);else return n.lanes=e.lanes,Ji(e,n,c)}return Hf(e,n,a,o,c)}function Dg(e,n,a,o){var c=o.children,f=e!==null?e.memoizedState:null;if(e===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if((n.flags&128)!==0){if(f=f!==null?f.baseLanes|a:a,e!==null){for(o=n.child=e.child,c=0;o!==null;)c=c|o.lanes|o.childLanes,o=o.sibling;o=c&~f}else o=0,n.child=null;return Ug(e,n,f,a,o)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&Ul(n,f!==null?f.cachePool:null),f!==null?Nm(n,f):gf(),Om(n);else return o=n.lanes=536870912,Ug(e,n,f!==null?f.baseLanes|a:a,a,o)}else f!==null?(Ul(n,f.cachePool),Nm(n,f),Ua(),n.memoizedState=null):(e!==null&&Ul(n,null),gf(),Ua());return An(e,n,c,a),n.child}function bo(e,n){return e!==null&&e.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function Ug(e,n,a,o,c){var f=cf();return f=f===null?null:{parent:on._currentValue,pool:f},n.memoizedState={baseLanes:a,cachePool:f},e!==null&&Ul(n,null),gf(),Om(n),e!==null&&$r(e,n,o,!0),n.childLanes=c,null}function Yl(e,n){return n=Zl({mode:n.mode,children:n.children},e.mode),n.ref=e.ref,e.child=n,n.return=e,n}function Lg(e,n,a){return _r(n,e.child,null,a),e=Yl(n,n.pendingProps),e.flags|=2,Jn(n),n.memoizedState=null,e}function Wx(e,n,a){var o=n.pendingProps,c=(n.flags&128)!==0;if(n.flags&=-129,e===null){if(Ee){if(o.mode==="hidden")return e=Yl(n,o),n.lanes=536870912,bo(null,e);if(vf(n),(e=Ze)?(e=X_(e,hi),e=e!==null&&e.data==="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Ea!==null?{id:zi,overflow:Pi}:null,retryLane:536870912,hydrationErrors:null},a=mm(e),a.return=n,n.child=a,Tn=n,Ze=null)):e=null,e===null)throw ba(n);return n.lanes=536870912,null}return Yl(n,o)}var f=e.memoizedState;if(f!==null){var x=f.dehydrated;if(vf(n),c)if(n.flags&256)n.flags&=-257,n=Lg(e,n,a);else if(n.memoizedState!==null)n.child=e.child,n.flags|=128,n=null;else throw Error(r(558));else if(un||$r(e,n,a,!1),c=(a&e.childLanes)!==0,un||c){if(o=We,o!==null&&(x=Ir(o,a),x!==0&&x!==f.retryLane))throw f.retryLane=x,ur(e,x),Vn(o,e,x),Ff;au(),n=Lg(e,n,a)}else e=f.treeContext,Ze=pi(x.nextSibling),Tn=n,Ee=!0,Ta=null,hi=!1,e!==null&&vm(n,e),n=Yl(n,o),n.flags|=4096;return n}return e=qi(e.child,{mode:o.mode,children:o.children}),e.ref=n.ref,n.child=e,e.return=n,e}function jl(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(e===null||e.ref!==a)&&(n.flags|=4194816)}}function Hf(e,n,a,o,c){return dr(n),a=xf(e,n,a,o,void 0,c),o=yf(),e!==null&&!un?(Mf(e,n,c),Ji(e,n,c)):(Ee&&o&&tf(n),n.flags|=1,An(e,n,a,c),n.child)}function Ng(e,n,a,o,c,f){return dr(n),n.updateQueue=null,a=Pm(n,o,a,c),zm(e),o=yf(),e!==null&&!un?(Mf(e,n,f),Ji(e,n,f)):(Ee&&o&&tf(n),n.flags|=1,An(e,n,a,f),n.child)}function Og(e,n,a,o,c){if(dr(n),n.stateNode===null){var f=Zr,x=a.contextType;typeof x=="object"&&x!==null&&(f=bn(x)),f=new a(o,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=Bf,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=o,f.state=n.memoizedState,f.refs={},hf(n),x=a.contextType,f.context=typeof x=="object"&&x!==null?bn(x):Zr,f.state=n.memoizedState,x=a.getDerivedStateFromProps,typeof x=="function"&&(Pf(n,a,x,o),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(x=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),x!==f.state&&Bf.enqueueReplaceState(f,f.state,null),xo(n,o,f,c),So(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(e===null){f=n.stateNode;var b=n.memoizedProps,I=Sr(a,b);f.props=I;var nt=f.context,pt=a.contextType;x=Zr,typeof pt=="object"&&pt!==null&&(x=bn(pt));var _t=a.getDerivedStateFromProps;pt=typeof _t=="function"||typeof f.getSnapshotBeforeUpdate=="function",b=n.pendingProps!==b,pt||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(b||nt!==x)&&xg(n,f,o,x),Ra=!1;var it=n.memoizedState;f.state=it,xo(n,o,f,c),So(),nt=n.memoizedState,b||it!==nt||Ra?(typeof _t=="function"&&(Pf(n,a,_t,o),nt=n.memoizedState),(I=Ra||Sg(n,a,I,o,it,nt,x))?(pt||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=nt),f.props=o,f.state=nt,f.context=x,o=I):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{f=n.stateNode,df(e,n),x=n.memoizedProps,pt=Sr(a,x),f.props=pt,_t=n.pendingProps,it=f.context,nt=a.contextType,I=Zr,typeof nt=="object"&&nt!==null&&(I=bn(nt)),b=a.getDerivedStateFromProps,(nt=typeof b=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(x!==_t||it!==I)&&xg(n,f,o,I),Ra=!1,it=n.memoizedState,f.state=it,xo(n,o,f,c),So();var lt=n.memoizedState;x!==_t||it!==lt||Ra||e!==null&&e.dependencies!==null&&wl(e.dependencies)?(typeof b=="function"&&(Pf(n,a,b,o),lt=n.memoizedState),(pt=Ra||Sg(n,a,pt,o,it,lt,I)||e!==null&&e.dependencies!==null&&wl(e.dependencies))?(nt||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(o,lt,I),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(o,lt,I)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||x===e.memoizedProps&&it===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||x===e.memoizedProps&&it===e.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=lt),f.props=o,f.state=lt,f.context=I,o=pt):(typeof f.componentDidUpdate!="function"||x===e.memoizedProps&&it===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||x===e.memoizedProps&&it===e.memoizedState||(n.flags|=1024),o=!1)}return f=o,jl(e,n),o=(n.flags&128)!==0,f||o?(f=n.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,e!==null&&o?(n.child=_r(n,e.child,null,c),n.child=_r(n,null,a,c)):An(e,n,a,c),n.memoizedState=f.state,e=n.child):e=Ji(e,n,c),e}function zg(e,n,a,o){return fr(),n.flags|=256,An(e,n,a,o),n.child}var Gf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Vf(e){return{baseLanes:e,cachePool:Tm()}}function kf(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=ti),e}function Pg(e,n,a){var o=n.pendingProps,c=!1,f=(n.flags&128)!==0,x;if((x=f)||(x=e!==null&&e.memoizedState===null?!1:(an.current&2)!==0),x&&(c=!0,n.flags&=-129),x=(n.flags&32)!==0,n.flags&=-33,e===null){if(Ee){if(c?Da(n):Ua(),(e=Ze)?(e=X_(e,hi),e=e!==null&&e.data!=="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Ea!==null?{id:zi,overflow:Pi}:null,retryLane:536870912,hydrationErrors:null},a=mm(e),a.return=n,n.child=a,Tn=n,Ze=null)):e=null,e===null)throw ba(n);return bh(e)?n.lanes=32:n.lanes=536870912,null}var b=o.children;return o=o.fallback,c?(Ua(),c=n.mode,b=Zl({mode:"hidden",children:b},c),o=cr(o,c,a,null),b.return=n,o.return=n,b.sibling=o,n.child=b,o=n.child,o.memoizedState=Vf(a),o.childLanes=kf(e,x,a),n.memoizedState=Gf,bo(null,o)):(Da(n),Xf(n,b))}var I=e.memoizedState;if(I!==null&&(b=I.dehydrated,b!==null)){if(f)n.flags&256?(Da(n),n.flags&=-257,n=Wf(e,n,a)):n.memoizedState!==null?(Ua(),n.child=e.child,n.flags|=128,n=null):(Ua(),b=o.fallback,c=n.mode,o=Zl({mode:"visible",children:o.children},c),b=cr(b,c,a,null),b.flags|=2,o.return=n,b.return=n,o.sibling=b,n.child=o,_r(n,e.child,null,a),o=n.child,o.memoizedState=Vf(a),o.childLanes=kf(e,x,a),n.memoizedState=Gf,n=bo(null,o));else if(Da(n),bh(b)){if(x=b.nextSibling&&b.nextSibling.dataset,x)var nt=x.dgst;x=nt,o=Error(r(419)),o.stack="",o.digest=x,ho({value:o,source:null,stack:null}),n=Wf(e,n,a)}else if(un||$r(e,n,a,!1),x=(a&e.childLanes)!==0,un||x){if(x=We,x!==null&&(o=Ir(x,a),o!==0&&o!==I.retryLane))throw I.retryLane=o,ur(e,o),Vn(x,e,o),Ff;Th(b)||au(),n=Wf(e,n,a)}else Th(b)?(n.flags|=192,n.child=e.child,n=null):(e=I.treeContext,Ze=pi(b.nextSibling),Tn=n,Ee=!0,Ta=null,hi=!1,e!==null&&vm(n,e),n=Xf(n,o.children),n.flags|=4096);return n}return c?(Ua(),b=o.fallback,c=n.mode,I=e.child,nt=I.sibling,o=qi(I,{mode:"hidden",children:o.children}),o.subtreeFlags=I.subtreeFlags&65011712,nt!==null?b=qi(nt,b):(b=cr(b,c,a,null),b.flags|=2),b.return=n,o.return=n,o.sibling=b,n.child=o,bo(null,o),o=n.child,b=e.child.memoizedState,b===null?b=Vf(a):(c=b.cachePool,c!==null?(I=on._currentValue,c=c.parent!==I?{parent:I,pool:I}:c):c=Tm(),b={baseLanes:b.baseLanes|a,cachePool:c}),o.memoizedState=b,o.childLanes=kf(e,x,a),n.memoizedState=Gf,bo(e.child,o)):(Da(n),a=e.child,e=a.sibling,a=qi(a,{mode:"visible",children:o.children}),a.return=n,a.sibling=null,e!==null&&(x=n.deletions,x===null?(n.deletions=[e],n.flags|=16):x.push(e)),n.child=a,n.memoizedState=null,a)}function Xf(e,n){return n=Zl({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function Zl(e,n){return e=Kn(22,e,null,n),e.lanes=0,e}function Wf(e,n,a){return _r(n,e.child,null,a),e=Xf(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function Bg(e,n,a){e.lanes|=n;var o=e.alternate;o!==null&&(o.lanes|=n),sf(e.return,n,a)}function qf(e,n,a,o,c,f){var x=e.memoizedState;x===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:c,treeForkCount:f}:(x.isBackwards=n,x.rendering=null,x.renderingStartTime=0,x.last=o,x.tail=a,x.tailMode=c,x.treeForkCount=f)}function Ig(e,n,a){var o=n.pendingProps,c=o.revealOrder,f=o.tail;o=o.children;var x=an.current,b=(x&2)!==0;if(b?(x=x&1|2,n.flags|=128):x&=1,xt(an,x),An(e,n,o,a),o=Ee?fo:0,!b&&e!==null&&(e.flags&128)!==0)t:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Bg(e,a,n);else if(e.tag===19)Bg(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break t;for(;e.sibling===null;){if(e.return===null||e.return===n)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(c){case"forwards":for(a=n.child,c=null;a!==null;)e=a.alternate,e!==null&&Bl(e)===null&&(c=a),a=a.sibling;a=c,a===null?(c=n.child,n.child=null):(c=a.sibling,a.sibling=null),qf(n,!1,c,a,f,o);break;case"backwards":case"unstable_legacy-backwards":for(a=null,c=n.child,n.child=null;c!==null;){if(e=c.alternate,e!==null&&Bl(e)===null){n.child=c;break}e=c.sibling,c.sibling=a,a=c,c=e}qf(n,!0,a,null,f,o);break;case"together":qf(n,!1,null,null,void 0,o);break;default:n.memoizedState=null}return n.child}function Ji(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),Oa|=n.lanes,(a&n.childLanes)===0)if(e!==null){if($r(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(r(153));if(n.child!==null){for(e=n.child,a=qi(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=qi(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function Yf(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&wl(e)))}function qx(e,n,a){switch(n.tag){case 3:Et(n,n.stateNode.containerInfo),Aa(n,on,e.memoizedState.cache),fr();break;case 27:case 5:Ft(n);break;case 4:Et(n,n.stateNode.containerInfo);break;case 10:Aa(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,vf(n),null;break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(Da(n),n.flags|=128,null):(a&n.child.childLanes)!==0?Pg(e,n,a):(Da(n),e=Ji(e,n,a),e!==null?e.sibling:null);Da(n);break;case 19:var c=(e.flags&128)!==0;if(o=(a&n.childLanes)!==0,o||($r(e,n,a,!1),o=(a&n.childLanes)!==0),c){if(o)return Ig(e,n,a);n.flags|=128}if(c=n.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),xt(an,an.current),o)break;return null;case 22:return n.lanes=0,Dg(e,n,a,n.pendingProps);case 24:Aa(n,on,e.memoizedState.cache)}return Ji(e,n,a)}function Fg(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)un=!0;else{if(!Yf(e,a)&&(n.flags&128)===0)return un=!1,qx(e,n,a);un=(e.flags&131072)!==0}else un=!1,Ee&&(n.flags&1048576)!==0&&_m(n,fo,n.index);switch(n.lanes=0,n.tag){case 16:t:{var o=n.pendingProps;if(e=mr(n.elementType),n.type=e,typeof e=="function")Qc(e)?(o=Sr(e,o),n.tag=1,n=Og(null,n,e,o,a)):(n.tag=0,n=Hf(null,n,e,o,a));else{if(e!=null){var c=e.$$typeof;if(c===w){n.tag=11,n=Rg(null,n,e,o,a);break t}else if(c===L){n.tag=14,n=Cg(null,n,e,o,a);break t}}throw n=ft(e)||e,Error(r(306,n,""))}}return n;case 0:return Hf(e,n,n.type,n.pendingProps,a);case 1:return o=n.type,c=Sr(o,n.pendingProps),Og(e,n,o,c,a);case 3:t:{if(Et(n,n.stateNode.containerInfo),e===null)throw Error(r(387));o=n.pendingProps;var f=n.memoizedState;c=f.element,df(e,n),xo(n,o,null,a);var x=n.memoizedState;if(o=x.cache,Aa(n,on,o),o!==f.cache&&of(n,[on],a,!0),So(),o=x.element,f.isDehydrated)if(f={element:o,isDehydrated:!1,cache:x.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=zg(e,n,o,a);break t}else if(o!==c){c=ui(Error(r(424)),n),ho(c),n=zg(e,n,o,a);break t}else{switch(e=n.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Ze=pi(e.firstChild),Tn=n,Ee=!0,Ta=null,hi=!0,a=Dm(n,null,o,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(fr(),o===c){n=Ji(e,n,a);break t}An(e,n,o,a)}n=n.child}return n;case 26:return jl(e,n),e===null?(a=K_(n.type,null,n.pendingProps,null))?n.memoizedState=a:Ee||(a=n.type,e=n.pendingProps,o=fu(Q.current).createElement(a),o[sn]=n,o[Mn]=e,Rn(o,a,e),St(o),n.stateNode=o):n.memoizedState=K_(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return Ft(n),e===null&&Ee&&(o=n.stateNode=Y_(n.type,n.pendingProps,Q.current),Tn=n,hi=!0,c=Ze,Fa(n.type)?(Ah=c,Ze=pi(o.firstChild)):Ze=c),An(e,n,n.pendingProps.children,a),jl(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&Ee&&((c=o=Ze)&&(o=My(o,n.type,n.pendingProps,hi),o!==null?(n.stateNode=o,Tn=n,Ze=pi(o.firstChild),hi=!1,c=!0):c=!1),c||ba(n)),Ft(n),c=n.type,f=n.pendingProps,x=e!==null?e.memoizedProps:null,o=f.children,yh(c,f)?o=null:x!==null&&yh(c,x)&&(n.flags|=32),n.memoizedState!==null&&(c=xf(e,n,Bx,null,null,a),Ho._currentValue=c),jl(e,n),An(e,n,o,a),n.child;case 6:return e===null&&Ee&&((e=a=Ze)&&(a=Ey(a,n.pendingProps,hi),a!==null?(n.stateNode=a,Tn=n,Ze=null,e=!0):e=!1),e||ba(n)),null;case 13:return Pg(e,n,a);case 4:return Et(n,n.stateNode.containerInfo),o=n.pendingProps,e===null?n.child=_r(n,null,o,a):An(e,n,o,a),n.child;case 11:return Rg(e,n,n.type,n.pendingProps,a);case 7:return An(e,n,n.pendingProps,a),n.child;case 8:return An(e,n,n.pendingProps.children,a),n.child;case 12:return An(e,n,n.pendingProps.children,a),n.child;case 10:return o=n.pendingProps,Aa(n,n.type,o.value),An(e,n,o.children,a),n.child;case 9:return c=n.type._context,o=n.pendingProps.children,dr(n),c=bn(c),o=o(c),n.flags|=1,An(e,n,o,a),n.child;case 14:return Cg(e,n,n.type,n.pendingProps,a);case 15:return wg(e,n,n.type,n.pendingProps,a);case 19:return Ig(e,n,a);case 31:return Wx(e,n,a);case 22:return Dg(e,n,a,n.pendingProps);case 24:return dr(n),o=bn(on),e===null?(c=cf(),c===null&&(c=We,f=lf(),c.pooledCache=f,f.refCount++,f!==null&&(c.pooledCacheLanes|=a),c=f),n.memoizedState={parent:o,cache:c},hf(n),Aa(n,on,c)):((e.lanes&a)!==0&&(df(e,n),xo(n,null,null,a),So()),c=e.memoizedState,f=n.memoizedState,c.parent!==o?(c={parent:o,cache:o},n.memoizedState=c,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=c),Aa(n,on,o)):(o=f.cache,Aa(n,on,o),o!==c.cache&&of(n,[on],a,!0))),An(e,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}function $i(e){e.flags|=4}function jf(e,n,a,o,c){if((n=(e.mode&32)!==0)&&(n=!1),n){if(e.flags|=16777216,(c&335544128)===c)if(e.stateNode.complete)e.flags|=8192;else if(h_())e.flags|=8192;else throw gr=Nl,ff}else e.flags&=-16777217}function Hg(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!ev(n))if(h_())e.flags|=8192;else throw gr=Nl,ff}function Kl(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?Be():536870912,e.lanes|=n,fs|=n)}function Ao(e,n){if(!Ee)switch(e.tailMode){case"hidden":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function Ke(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,o=0;if(n)for(var c=e.child;c!==null;)a|=c.lanes|c.childLanes,o|=c.subtreeFlags&65011712,o|=c.flags&65011712,c.return=e,c=c.sibling;else for(c=e.child;c!==null;)a|=c.lanes|c.childLanes,o|=c.subtreeFlags,o|=c.flags,c.return=e,c=c.sibling;return e.subtreeFlags|=o,e.childLanes=a,n}function Yx(e,n,a){var o=n.pendingProps;switch(ef(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ke(n),null;case 1:return Ke(n),null;case 3:return a=n.stateNode,o=null,e!==null&&(o=e.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),Zi(on),Ct(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Jr(n)?$i(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,af())),Ke(n),null;case 26:var c=n.type,f=n.memoizedState;return e===null?($i(n),f!==null?(Ke(n),Hg(n,f)):(Ke(n),jf(n,c,null,o,a))):f?f!==e.memoizedState?($i(n),Ke(n),Hg(n,f)):(Ke(n),n.flags&=-16777217):(e=e.memoizedProps,e!==o&&$i(n),Ke(n),jf(n,c,e,o,a)),null;case 27:if(ie(n),a=Q.current,c=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&$i(n);else{if(!o){if(n.stateNode===null)throw Error(r(166));return Ke(n),null}e=Tt.current,Jr(n)?Sm(n):(e=Y_(c,o,a),n.stateNode=e,$i(n))}return Ke(n),null;case 5:if(ie(n),c=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&$i(n);else{if(!o){if(n.stateNode===null)throw Error(r(166));return Ke(n),null}if(f=Tt.current,Jr(n))Sm(n);else{var x=fu(Q.current);switch(f){case 1:f=x.createElementNS("http://www.w3.org/2000/svg",c);break;case 2:f=x.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;default:switch(c){case"svg":f=x.createElementNS("http://www.w3.org/2000/svg",c);break;case"math":f=x.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;case"script":f=x.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof o.is=="string"?x.createElement("select",{is:o.is}):x.createElement("select"),o.multiple?f.multiple=!0:o.size&&(f.size=o.size);break;default:f=typeof o.is=="string"?x.createElement(c,{is:o.is}):x.createElement(c)}}f[sn]=n,f[Mn]=o;t:for(x=n.child;x!==null;){if(x.tag===5||x.tag===6)f.appendChild(x.stateNode);else if(x.tag!==4&&x.tag!==27&&x.child!==null){x.child.return=x,x=x.child;continue}if(x===n)break t;for(;x.sibling===null;){if(x.return===null||x.return===n)break t;x=x.return}x.sibling.return=x.return,x=x.sibling}n.stateNode=f;t:switch(Rn(f,c,o),c){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break t;case"img":o=!0;break t;default:o=!1}o&&$i(n)}}return Ke(n),jf(n,n.type,e===null?null:e.memoizedProps,n.pendingProps,a),null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==o&&$i(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(r(166));if(e=Q.current,Jr(n)){if(e=n.stateNode,a=n.memoizedProps,o=null,c=Tn,c!==null)switch(c.tag){case 27:case 5:o=c.memoizedProps}e[sn]=n,e=!!(e.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||P_(e.nodeValue,a)),e||ba(n,!0)}else e=fu(e).createTextNode(o),e[sn]=n,n.stateNode=e}return Ke(n),null;case 31:if(a=n.memoizedState,e===null||e.memoizedState!==null){if(o=Jr(n),a!==null){if(e===null){if(!o)throw Error(r(318));if(e=n.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(557));e[sn]=n}else fr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Ke(n),e=!1}else a=af(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return n.flags&256?(Jn(n),n):(Jn(n),null);if((n.flags&128)!==0)throw Error(r(558))}return Ke(n),null;case 13:if(o=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(c=Jr(n),o!==null&&o.dehydrated!==null){if(e===null){if(!c)throw Error(r(318));if(c=n.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(r(317));c[sn]=n}else fr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Ke(n),c=!1}else c=af(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=c),c=!0;if(!c)return n.flags&256?(Jn(n),n):(Jn(n),null)}return Jn(n),(n.flags&128)!==0?(n.lanes=a,n):(a=o!==null,e=e!==null&&e.memoizedState!==null,a&&(o=n.child,c=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(c=o.alternate.memoizedState.cachePool.pool),f=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(f=o.memoizedState.cachePool.pool),f!==c&&(o.flags|=2048)),a!==e&&a&&(n.child.flags|=8192),Kl(n,n.updateQueue),Ke(n),null);case 4:return Ct(),e===null&&gh(n.stateNode.containerInfo),Ke(n),null;case 10:return Zi(n.type),Ke(n),null;case 19:if(J(an),o=n.memoizedState,o===null)return Ke(n),null;if(c=(n.flags&128)!==0,f=o.rendering,f===null)if(c)Ao(o,!1);else{if(tn!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(f=Bl(e),f!==null){for(n.flags|=128,Ao(o,!1),e=f.updateQueue,n.updateQueue=e,Kl(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)pm(a,e),a=a.sibling;return xt(an,an.current&1|2),Ee&&Yi(n,o.treeForkCount),n.child}e=e.sibling}o.tail!==null&&g()>eu&&(n.flags|=128,c=!0,Ao(o,!1),n.lanes=4194304)}else{if(!c)if(e=Bl(f),e!==null){if(n.flags|=128,c=!0,e=e.updateQueue,n.updateQueue=e,Kl(n,e),Ao(o,!0),o.tail===null&&o.tailMode==="hidden"&&!f.alternate&&!Ee)return Ke(n),null}else 2*g()-o.renderingStartTime>eu&&a!==536870912&&(n.flags|=128,c=!0,Ao(o,!1),n.lanes=4194304);o.isBackwards?(f.sibling=n.child,n.child=f):(e=o.last,e!==null?e.sibling=f:n.child=f,o.last=f)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=g(),e.sibling=null,a=an.current,xt(an,c?a&1|2:a&1),Ee&&Yi(n,o.treeForkCount),e):(Ke(n),null);case 22:case 23:return Jn(n),_f(),o=n.memoizedState!==null,e!==null?e.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(a&536870912)!==0&&(n.flags&128)===0&&(Ke(n),n.subtreeFlags&6&&(n.flags|=8192)):Ke(n),a=n.updateQueue,a!==null&&Kl(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==a&&(n.flags|=2048),e!==null&&J(pr),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Zi(on),Ke(n),null;case 25:return null;case 30:return null}throw Error(r(156,n.tag))}function jx(e,n){switch(ef(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return Zi(on),Ct(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return ie(n),null;case 31:if(n.memoizedState!==null){if(Jn(n),n.alternate===null)throw Error(r(340));fr()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 13:if(Jn(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(r(340));fr()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return J(an),null;case 4:return Ct(),null;case 10:return Zi(n.type),null;case 22:case 23:return Jn(n),_f(),e!==null&&J(pr),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return Zi(on),null;case 25:return null;default:return null}}function Gg(e,n){switch(ef(n),n.tag){case 3:Zi(on),Ct();break;case 26:case 27:case 5:ie(n);break;case 4:Ct();break;case 31:n.memoizedState!==null&&Jn(n);break;case 13:Jn(n);break;case 19:J(an);break;case 10:Zi(n.type);break;case 22:case 23:Jn(n),_f(),e!==null&&J(pr);break;case 24:Zi(on)}}function Ro(e,n){try{var a=n.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var c=o.next;a=c;do{if((a.tag&e)===e){o=void 0;var f=a.create,x=a.inst;o=f(),x.destroy=o}a=a.next}while(a!==c)}}catch(b){Fe(n,n.return,b)}}function La(e,n,a){try{var o=n.updateQueue,c=o!==null?o.lastEffect:null;if(c!==null){var f=c.next;o=f;do{if((o.tag&e)===e){var x=o.inst,b=x.destroy;if(b!==void 0){x.destroy=void 0,c=n;var I=a,nt=b;try{nt()}catch(pt){Fe(c,I,pt)}}}o=o.next}while(o!==f)}}catch(pt){Fe(n,n.return,pt)}}function Vg(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{Lm(n,a)}catch(o){Fe(e,e.return,o)}}}function kg(e,n,a){a.props=Sr(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(o){Fe(e,n,o)}}function Co(e,n){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var o=e.stateNode;break;case 30:o=e.stateNode;break;default:o=e.stateNode}typeof a=="function"?e.refCleanup=a(o):a.current=o}}catch(c){Fe(e,n,c)}}function Bi(e,n){var a=e.ref,o=e.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(c){Fe(e,n,c)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(c){Fe(e,n,c)}else a.current=null}function Xg(e){var n=e.type,a=e.memoizedProps,o=e.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break t;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(c){Fe(e,e.return,c)}}function Zf(e,n,a){try{var o=e.stateNode;gy(o,e.type,a,n),o[Mn]=n}catch(c){Fe(e,e.return,c)}}function Wg(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Fa(e.type)||e.tag===4}function Kf(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||Wg(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Fa(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Qf(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(e),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Xi));else if(o!==4&&(o===27&&Fa(e.type)&&(a=e.stateNode,n=null),e=e.child,e!==null))for(Qf(e,n,a),e=e.sibling;e!==null;)Qf(e,n,a),e=e.sibling}function Ql(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?a.insertBefore(e,n):a.appendChild(e);else if(o!==4&&(o===27&&Fa(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(Ql(e,n,a),e=e.sibling;e!==null;)Ql(e,n,a),e=e.sibling}function qg(e){var n=e.stateNode,a=e.memoizedProps;try{for(var o=e.type,c=n.attributes;c.length;)n.removeAttributeNode(c[0]);Rn(n,o,a),n[sn]=e,n[Mn]=a}catch(f){Fe(e,e.return,f)}}var ta=!1,cn=!1,Jf=!1,Yg=typeof WeakSet=="function"?WeakSet:Set,Sn=null;function Zx(e,n){if(e=e.containerInfo,Sh=vu,e=rm(e),Xc(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else t:{a=(a=e.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var c=o.anchorOffset,f=o.focusNode;o=o.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break t}var x=0,b=-1,I=-1,nt=0,pt=0,_t=e,it=null;e:for(;;){for(var lt;_t!==a||c!==0&&_t.nodeType!==3||(b=x+c),_t!==f||o!==0&&_t.nodeType!==3||(I=x+o),_t.nodeType===3&&(x+=_t.nodeValue.length),(lt=_t.firstChild)!==null;)it=_t,_t=lt;for(;;){if(_t===e)break e;if(it===a&&++nt===c&&(b=x),it===f&&++pt===o&&(I=x),(lt=_t.nextSibling)!==null)break;_t=it,it=_t.parentNode}_t=lt}a=b===-1||I===-1?null:{start:b,end:I}}else a=null}a=a||{start:0,end:0}}else a=null;for(xh={focusedElem:e,selectionRange:a},vu=!1,Sn=n;Sn!==null;)if(n=Sn,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,Sn=e;else for(;Sn!==null;){switch(n=Sn,f=n.alternate,e=n.flags,n.tag){case 0:if((e&4)!==0&&(e=n.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)c=e[a],c.ref.impl=c.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&f!==null){e=void 0,a=n,c=f.memoizedProps,f=f.memoizedState,o=a.stateNode;try{var kt=Sr(a.type,c);e=o.getSnapshotBeforeUpdate(kt,f),o.__reactInternalSnapshotBeforeUpdate=e}catch(te){Fe(a,a.return,te)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,a=e.nodeType,a===9)Eh(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Eh(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(r(163))}if(e=n.sibling,e!==null){e.return=n.return,Sn=e;break}Sn=n.return}}function jg(e,n,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:na(e,a),o&4&&Ro(5,a);break;case 1:if(na(e,a),o&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(x){Fe(a,a.return,x)}else{var c=Sr(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(c,n,e.__reactInternalSnapshotBeforeUpdate)}catch(x){Fe(a,a.return,x)}}o&64&&Vg(a),o&512&&Co(a,a.return);break;case 3:if(na(e,a),o&64&&(e=a.updateQueue,e!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{Lm(e,n)}catch(x){Fe(a,a.return,x)}}break;case 27:n===null&&o&4&&qg(a);case 26:case 5:na(e,a),n===null&&o&4&&Xg(a),o&512&&Co(a,a.return);break;case 12:na(e,a);break;case 31:na(e,a),o&4&&Qg(e,a);break;case 13:na(e,a),o&4&&Jg(e,a),o&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=ay.bind(null,a),Ty(e,a))));break;case 22:if(o=a.memoizedState!==null||ta,!o){n=n!==null&&n.memoizedState!==null||cn,c=ta;var f=cn;ta=o,(cn=n)&&!f?ia(e,a,(a.subtreeFlags&8772)!==0):na(e,a),ta=c,cn=f}break;case 30:break;default:na(e,a)}}function Zg(e){var n=e.alternate;n!==null&&(e.alternate=null,Zg(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&R(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Je=null,In=!1;function ea(e,n,a){for(a=a.child;a!==null;)Kg(e,n,a),a=a.sibling}function Kg(e,n,a){if(wt&&typeof wt.onCommitFiberUnmount=="function")try{wt.onCommitFiberUnmount(bt,a)}catch{}switch(a.tag){case 26:cn||Bi(a,n),ea(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:cn||Bi(a,n);var o=Je,c=In;Fa(a.type)&&(Je=a.stateNode,In=!1),ea(e,n,a),Bo(a.stateNode),Je=o,In=c;break;case 5:cn||Bi(a,n);case 6:if(o=Je,c=In,Je=null,ea(e,n,a),Je=o,In=c,Je!==null)if(In)try{(Je.nodeType===9?Je.body:Je.nodeName==="HTML"?Je.ownerDocument.body:Je).removeChild(a.stateNode)}catch(f){Fe(a,n,f)}else try{Je.removeChild(a.stateNode)}catch(f){Fe(a,n,f)}break;case 18:Je!==null&&(In?(e=Je,V_(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),Ss(e)):V_(Je,a.stateNode));break;case 4:o=Je,c=In,Je=a.stateNode.containerInfo,In=!0,ea(e,n,a),Je=o,In=c;break;case 0:case 11:case 14:case 15:La(2,a,n),cn||La(4,a,n),ea(e,n,a);break;case 1:cn||(Bi(a,n),o=a.stateNode,typeof o.componentWillUnmount=="function"&&kg(a,n,o)),ea(e,n,a);break;case 21:ea(e,n,a);break;case 22:cn=(o=cn)||a.memoizedState!==null,ea(e,n,a),cn=o;break;default:ea(e,n,a)}}function Qg(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Ss(e)}catch(a){Fe(n,n.return,a)}}}function Jg(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Ss(e)}catch(a){Fe(n,n.return,a)}}function Kx(e){switch(e.tag){case 31:case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new Yg),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new Yg),n;default:throw Error(r(435,e.tag))}}function Jl(e,n){var a=Kx(e);n.forEach(function(o){if(!a.has(o)){a.add(o);var c=ry.bind(null,e,o);o.then(c,c)}})}function Fn(e,n){var a=n.deletions;if(a!==null)for(var o=0;o<a.length;o++){var c=a[o],f=e,x=n,b=x;t:for(;b!==null;){switch(b.tag){case 27:if(Fa(b.type)){Je=b.stateNode,In=!1;break t}break;case 5:Je=b.stateNode,In=!1;break t;case 3:case 4:Je=b.stateNode.containerInfo,In=!0;break t}b=b.return}if(Je===null)throw Error(r(160));Kg(f,x,c),Je=null,In=!1,f=c.alternate,f!==null&&(f.return=null),c.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)$g(n,e),n=n.sibling}var Mi=null;function $g(e,n){var a=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Fn(n,e),Hn(e),o&4&&(La(3,e,e.return),Ro(3,e),La(5,e,e.return));break;case 1:Fn(n,e),Hn(e),o&512&&(cn||a===null||Bi(a,a.return)),o&64&&ta&&(e=e.updateQueue,e!==null&&(o=e.callbacks,o!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var c=Mi;if(Fn(n,e),Hn(e),o&512&&(cn||a===null||Bi(a,a.return)),o&4){var f=a!==null?a.memoizedState:null;if(o=e.memoizedState,a===null)if(o===null)if(e.stateNode===null){t:{o=e.type,a=e.memoizedProps,c=c.ownerDocument||c;e:switch(o){case"title":f=c.getElementsByTagName("title")[0],(!f||f[ar]||f[sn]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=c.createElement(o),c.head.insertBefore(f,c.querySelector("head > title"))),Rn(f,o,a),f[sn]=e,St(f),o=f;break t;case"link":var x=$_("link","href",c).get(o+(a.href||""));if(x){for(var b=0;b<x.length;b++)if(f=x[b],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){x.splice(b,1);break e}}f=c.createElement(o),Rn(f,o,a),c.head.appendChild(f);break;case"meta":if(x=$_("meta","content",c).get(o+(a.content||""))){for(b=0;b<x.length;b++)if(f=x[b],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){x.splice(b,1);break e}}f=c.createElement(o),Rn(f,o,a),c.head.appendChild(f);break;default:throw Error(r(468,o))}f[sn]=e,St(f),o=f}e.stateNode=o}else tv(c,e.type,e.stateNode);else e.stateNode=J_(c,o,e.memoizedProps);else f!==o?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,o===null?tv(c,e.type,e.stateNode):J_(c,o,e.memoizedProps)):o===null&&e.stateNode!==null&&Zf(e,e.memoizedProps,a.memoizedProps)}break;case 27:Fn(n,e),Hn(e),o&512&&(cn||a===null||Bi(a,a.return)),a!==null&&o&4&&Zf(e,e.memoizedProps,a.memoizedProps);break;case 5:if(Fn(n,e),Hn(e),o&512&&(cn||a===null||Bi(a,a.return)),e.flags&32){c=e.stateNode;try{Vr(c,"")}catch(kt){Fe(e,e.return,kt)}}o&4&&e.stateNode!=null&&(c=e.memoizedProps,Zf(e,c,a!==null?a.memoizedProps:c)),o&1024&&(Jf=!0);break;case 6:if(Fn(n,e),Hn(e),o&4){if(e.stateNode===null)throw Error(r(162));o=e.memoizedProps,a=e.stateNode;try{a.nodeValue=o}catch(kt){Fe(e,e.return,kt)}}break;case 3:if(pu=null,c=Mi,Mi=hu(n.containerInfo),Fn(n,e),Mi=c,Hn(e),o&4&&a!==null&&a.memoizedState.isDehydrated)try{Ss(n.containerInfo)}catch(kt){Fe(e,e.return,kt)}Jf&&(Jf=!1,t_(e));break;case 4:o=Mi,Mi=hu(e.stateNode.containerInfo),Fn(n,e),Hn(e),Mi=o;break;case 12:Fn(n,e),Hn(e);break;case 31:Fn(n,e),Hn(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Jl(e,o)));break;case 13:Fn(n,e),Hn(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(tu=g()),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Jl(e,o)));break;case 22:c=e.memoizedState!==null;var I=a!==null&&a.memoizedState!==null,nt=ta,pt=cn;if(ta=nt||c,cn=pt||I,Fn(n,e),cn=pt,ta=nt,Hn(e),o&8192)t:for(n=e.stateNode,n._visibility=c?n._visibility&-2:n._visibility|1,c&&(a===null||I||ta||cn||xr(e)),a=null,n=e;;){if(n.tag===5||n.tag===26){if(a===null){I=a=n;try{if(f=I.stateNode,c)x=f.style,typeof x.setProperty=="function"?x.setProperty("display","none","important"):x.display="none";else{b=I.stateNode;var _t=I.memoizedProps.style,it=_t!=null&&_t.hasOwnProperty("display")?_t.display:null;b.style.display=it==null||typeof it=="boolean"?"":(""+it).trim()}}catch(kt){Fe(I,I.return,kt)}}}else if(n.tag===6){if(a===null){I=n;try{I.stateNode.nodeValue=c?"":I.memoizedProps}catch(kt){Fe(I,I.return,kt)}}}else if(n.tag===18){if(a===null){I=n;try{var lt=I.stateNode;c?k_(lt,!0):k_(I.stateNode,!1)}catch(kt){Fe(I,I.return,kt)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break t;for(;n.sibling===null;){if(n.return===null||n.return===e)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=e.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,Jl(e,a))));break;case 19:Fn(n,e),Hn(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Jl(e,o)));break;case 30:break;case 21:break;default:Fn(n,e),Hn(e)}}function Hn(e){var n=e.flags;if(n&2){try{for(var a,o=e.return;o!==null;){if(Wg(o)){a=o;break}o=o.return}if(a==null)throw Error(r(160));switch(a.tag){case 27:var c=a.stateNode,f=Kf(e);Ql(e,f,c);break;case 5:var x=a.stateNode;a.flags&32&&(Vr(x,""),a.flags&=-33);var b=Kf(e);Ql(e,b,x);break;case 3:case 4:var I=a.stateNode.containerInfo,nt=Kf(e);Qf(e,nt,I);break;default:throw Error(r(161))}}catch(pt){Fe(e,e.return,pt)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function t_(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;t_(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function na(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)jg(e,n.alternate,n),n=n.sibling}function xr(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:La(4,n,n.return),xr(n);break;case 1:Bi(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&kg(n,n.return,a),xr(n);break;case 27:Bo(n.stateNode);case 26:case 5:Bi(n,n.return),xr(n);break;case 22:n.memoizedState===null&&xr(n);break;case 30:xr(n);break;default:xr(n)}e=e.sibling}}function ia(e,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,c=e,f=n,x=f.flags;switch(f.tag){case 0:case 11:case 15:ia(c,f,a),Ro(4,f);break;case 1:if(ia(c,f,a),o=f,c=o.stateNode,typeof c.componentDidMount=="function")try{c.componentDidMount()}catch(nt){Fe(o,o.return,nt)}if(o=f,c=o.updateQueue,c!==null){var b=o.stateNode;try{var I=c.shared.hiddenCallbacks;if(I!==null)for(c.shared.hiddenCallbacks=null,c=0;c<I.length;c++)Um(I[c],b)}catch(nt){Fe(o,o.return,nt)}}a&&x&64&&Vg(f),Co(f,f.return);break;case 27:qg(f);case 26:case 5:ia(c,f,a),a&&o===null&&x&4&&Xg(f),Co(f,f.return);break;case 12:ia(c,f,a);break;case 31:ia(c,f,a),a&&x&4&&Qg(c,f);break;case 13:ia(c,f,a),a&&x&4&&Jg(c,f);break;case 22:f.memoizedState===null&&ia(c,f,a),Co(f,f.return);break;case 30:break;default:ia(c,f,a)}n=n.sibling}}function $f(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&po(a))}function th(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&po(e))}function Ei(e,n,a,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)e_(e,n,a,o),n=n.sibling}function e_(e,n,a,o){var c=n.flags;switch(n.tag){case 0:case 11:case 15:Ei(e,n,a,o),c&2048&&Ro(9,n);break;case 1:Ei(e,n,a,o);break;case 3:Ei(e,n,a,o),c&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&po(e)));break;case 12:if(c&2048){Ei(e,n,a,o),e=n.stateNode;try{var f=n.memoizedProps,x=f.id,b=f.onPostCommit;typeof b=="function"&&b(x,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(I){Fe(n,n.return,I)}}else Ei(e,n,a,o);break;case 31:Ei(e,n,a,o);break;case 13:Ei(e,n,a,o);break;case 23:break;case 22:f=n.stateNode,x=n.alternate,n.memoizedState!==null?f._visibility&2?Ei(e,n,a,o):wo(e,n):f._visibility&2?Ei(e,n,a,o):(f._visibility|=2,ls(e,n,a,o,(n.subtreeFlags&10256)!==0||!1)),c&2048&&$f(x,n);break;case 24:Ei(e,n,a,o),c&2048&&th(n.alternate,n);break;default:Ei(e,n,a,o)}}function ls(e,n,a,o,c){for(c=c&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var f=e,x=n,b=a,I=o,nt=x.flags;switch(x.tag){case 0:case 11:case 15:ls(f,x,b,I,c),Ro(8,x);break;case 23:break;case 22:var pt=x.stateNode;x.memoizedState!==null?pt._visibility&2?ls(f,x,b,I,c):wo(f,x):(pt._visibility|=2,ls(f,x,b,I,c)),c&&nt&2048&&$f(x.alternate,x);break;case 24:ls(f,x,b,I,c),c&&nt&2048&&th(x.alternate,x);break;default:ls(f,x,b,I,c)}n=n.sibling}}function wo(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,o=n,c=o.flags;switch(o.tag){case 22:wo(a,o),c&2048&&$f(o.alternate,o);break;case 24:wo(a,o),c&2048&&th(o.alternate,o);break;default:wo(a,o)}n=n.sibling}}var Do=8192;function us(e,n,a){if(e.subtreeFlags&Do)for(e=e.child;e!==null;)n_(e,n,a),e=e.sibling}function n_(e,n,a){switch(e.tag){case 26:us(e,n,a),e.flags&Do&&e.memoizedState!==null&&Py(a,Mi,e.memoizedState,e.memoizedProps);break;case 5:us(e,n,a);break;case 3:case 4:var o=Mi;Mi=hu(e.stateNode.containerInfo),us(e,n,a),Mi=o;break;case 22:e.memoizedState===null&&(o=e.alternate,o!==null&&o.memoizedState!==null?(o=Do,Do=16777216,us(e,n,a),Do=o):us(e,n,a));break;default:us(e,n,a)}}function i_(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function Uo(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];Sn=o,r_(o,e)}i_(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)a_(e),e=e.sibling}function a_(e){switch(e.tag){case 0:case 11:case 15:Uo(e),e.flags&2048&&La(9,e,e.return);break;case 3:Uo(e);break;case 12:Uo(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,$l(e)):Uo(e);break;default:Uo(e)}}function $l(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];Sn=o,r_(o,e)}i_(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:La(8,n,n.return),$l(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,$l(n));break;default:$l(n)}e=e.sibling}}function r_(e,n){for(;Sn!==null;){var a=Sn;switch(a.tag){case 0:case 11:case 15:La(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:po(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,Sn=o;else t:for(a=e;Sn!==null;){o=Sn;var c=o.sibling,f=o.return;if(Zg(o),o===a){Sn=null;break t}if(c!==null){c.return=f,Sn=c;break t}Sn=f}}}var Qx={getCacheForType:function(e){var n=bn(on),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a},cacheSignal:function(){return bn(on).controller.signal}},Jx=typeof WeakMap=="function"?WeakMap:Map,Le=0,We=null,ge=null,Se=0,Ie=0,$n=null,Na=!1,cs=!1,eh=!1,aa=0,tn=0,Oa=0,yr=0,nh=0,ti=0,fs=0,Lo=null,Gn=null,ih=!1,tu=0,s_=0,eu=1/0,nu=null,za=null,mn=0,Pa=null,hs=null,ra=0,ah=0,rh=null,o_=null,No=0,sh=null;function ei(){return(Le&2)!==0&&Se!==0?Se&-Se:z.T!==null?hh():ir()}function l_(){if(ti===0)if((Se&536870912)===0||Ee){var e=Dt;Dt<<=1,(Dt&3932160)===0&&(Dt=262144),ti=e}else ti=536870912;return e=Qn.current,e!==null&&(e.flags|=32),ti}function Vn(e,n,a){(e===We&&(Ie===2||Ie===9)||e.cancelPendingCommit!==null)&&(ds(e,0),Ba(e,Se,ti,!1)),Ln(e,a),((Le&2)===0||e!==We)&&(e===We&&((Le&2)===0&&(yr|=a),tn===4&&Ba(e,Se,ti,!1)),Ii(e))}function u_(e,n,a){if((Le&6)!==0)throw Error(r(327));var o=!a&&(n&127)===0&&(n&e.expiredLanes)===0||Vt(e,n),c=o?ey(e,n):lh(e,n,!0),f=o;do{if(c===0){cs&&!o&&Ba(e,n,0,!1);break}else{if(a=e.current.alternate,f&&!$x(a)){c=lh(e,n,!1),f=!1;continue}if(c===2){if(f=n,e.errorRecoveryDisabledLanes&f)var x=0;else x=e.pendingLanes&-536870913,x=x!==0?x:x&536870912?536870912:0;if(x!==0){n=x;t:{var b=e;c=Lo;var I=b.current.memoizedState.isDehydrated;if(I&&(ds(b,x).flags|=256),x=lh(b,x,!1),x!==2){if(eh&&!I){b.errorRecoveryDisabledLanes|=f,yr|=f,c=4;break t}f=Gn,Gn=c,f!==null&&(Gn===null?Gn=f:Gn.push.apply(Gn,f))}c=x}if(f=!1,c!==2)continue}}if(c===1){ds(e,0),Ba(e,n,0,!0);break}t:{switch(o=e,f=c,f){case 0:case 1:throw Error(r(345));case 4:if((n&4194048)!==n)break;case 6:Ba(o,n,ti,!Na);break t;case 2:Gn=null;break;case 3:case 5:break;default:throw Error(r(329))}if((n&62914560)===n&&(c=tu+300-g(),10<c)){if(Ba(o,n,ti,!Na),vt(o,0,!0)!==0)break t;ra=n,o.timeoutHandle=H_(c_.bind(null,o,a,Gn,nu,ih,n,ti,yr,fs,Na,f,"Throttled",-0,0),c);break t}c_(o,a,Gn,nu,ih,n,ti,yr,fs,Na,f,null,-0,0)}}break}while(!0);Ii(e)}function c_(e,n,a,o,c,f,x,b,I,nt,pt,_t,it,lt){if(e.timeoutHandle=-1,_t=n.subtreeFlags,_t&8192||(_t&16785408)===16785408){_t={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Xi},n_(n,f,_t);var kt=(f&62914560)===f?tu-g():(f&4194048)===f?s_-g():0;if(kt=By(_t,kt),kt!==null){ra=f,e.cancelPendingCommit=kt(v_.bind(null,e,n,f,a,o,c,x,b,I,pt,_t,null,it,lt)),Ba(e,f,x,!nt);return}}v_(e,n,f,a,o,c,x,b,I)}function $x(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var c=a[o],f=c.getSnapshot;c=c.value;try{if(!Zn(f(),c))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Ba(e,n,a,o){n&=~nh,n&=~yr,e.suspendedLanes|=n,e.pingedLanes&=~n,o&&(e.warmLanes|=n),o=e.expirationTimes;for(var c=n;0<c;){var f=31-Bt(c),x=1<<f;o[f]=-1,c&=~x}a!==0&&$s(e,a,n)}function iu(){return(Le&6)===0?(Oo(0),!1):!0}function oh(){if(ge!==null){if(Ie===0)var e=ge.return;else e=ge,ji=hr=null,Ef(e),is=null,go=0,e=ge;for(;e!==null;)Gg(e.alternate,e),e=e.return;ge=null}}function ds(e,n){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,Sy(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),ra=0,oh(),We=e,ge=a=qi(e.current,null),Se=n,Ie=0,$n=null,Na=!1,cs=Vt(e,n),eh=!1,fs=ti=nh=yr=Oa=tn=0,Gn=Lo=null,ih=!1,(n&8)!==0&&(n|=n&32);var o=e.entangledLanes;if(o!==0)for(e=e.entanglements,o&=n;0<o;){var c=31-Bt(o),f=1<<c;n|=e[c],o&=~f}return aa=n,Tl(),a}function f_(e,n){ue=null,z.H=To,n===ns||n===Ll?(n=Rm(),Ie=3):n===ff?(n=Rm(),Ie=4):Ie=n===Ff?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,$n=n,ge===null&&(tn=1,ql(e,ui(n,e.current)))}function h_(){var e=Qn.current;return e===null?!0:(Se&4194048)===Se?di===null:(Se&62914560)===Se||(Se&536870912)!==0?e===di:!1}function d_(){var e=z.H;return z.H=To,e===null?To:e}function p_(){var e=z.A;return z.A=Qx,e}function au(){tn=4,Na||(Se&4194048)!==Se&&Qn.current!==null||(cs=!0),(Oa&134217727)===0&&(yr&134217727)===0||We===null||Ba(We,Se,ti,!1)}function lh(e,n,a){var o=Le;Le|=2;var c=d_(),f=p_();(We!==e||Se!==n)&&(nu=null,ds(e,n)),n=!1;var x=tn;t:do try{if(Ie!==0&&ge!==null){var b=ge,I=$n;switch(Ie){case 8:oh(),x=6;break t;case 3:case 2:case 9:case 6:Qn.current===null&&(n=!0);var nt=Ie;if(Ie=0,$n=null,ps(e,b,I,nt),a&&cs){x=0;break t}break;default:nt=Ie,Ie=0,$n=null,ps(e,b,I,nt)}}ty(),x=tn;break}catch(pt){f_(e,pt)}while(!0);return n&&e.shellSuspendCounter++,ji=hr=null,Le=o,z.H=c,z.A=f,ge===null&&(We=null,Se=0,Tl()),x}function ty(){for(;ge!==null;)m_(ge)}function ey(e,n){var a=Le;Le|=2;var o=d_(),c=p_();We!==e||Se!==n?(nu=null,eu=g()+500,ds(e,n)):cs=Vt(e,n);t:do try{if(Ie!==0&&ge!==null){n=ge;var f=$n;e:switch(Ie){case 1:Ie=0,$n=null,ps(e,n,f,1);break;case 2:case 9:if(bm(f)){Ie=0,$n=null,g_(n);break}n=function(){Ie!==2&&Ie!==9||We!==e||(Ie=7),Ii(e)},f.then(n,n);break t;case 3:Ie=7;break t;case 4:Ie=5;break t;case 7:bm(f)?(Ie=0,$n=null,g_(n)):(Ie=0,$n=null,ps(e,n,f,7));break;case 5:var x=null;switch(ge.tag){case 26:x=ge.memoizedState;case 5:case 27:var b=ge;if(x?ev(x):b.stateNode.complete){Ie=0,$n=null;var I=b.sibling;if(I!==null)ge=I;else{var nt=b.return;nt!==null?(ge=nt,ru(nt)):ge=null}break e}}Ie=0,$n=null,ps(e,n,f,5);break;case 6:Ie=0,$n=null,ps(e,n,f,6);break;case 8:oh(),tn=6;break t;default:throw Error(r(462))}}ny();break}catch(pt){f_(e,pt)}while(!0);return ji=hr=null,z.H=o,z.A=c,Le=a,ge!==null?0:(We=null,Se=0,Tl(),tn)}function ny(){for(;ge!==null&&!qe();)m_(ge)}function m_(e){var n=Fg(e.alternate,e,aa);e.memoizedProps=e.pendingProps,n===null?ru(e):ge=n}function g_(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=Ng(a,n,n.pendingProps,n.type,void 0,Se);break;case 11:n=Ng(a,n,n.pendingProps,n.type.render,n.ref,Se);break;case 5:Ef(n);default:Gg(a,n),n=ge=pm(n,aa),n=Fg(a,n,aa)}e.memoizedProps=e.pendingProps,n===null?ru(e):ge=n}function ps(e,n,a,o){ji=hr=null,Ef(n),is=null,go=0;var c=n.return;try{if(Xx(e,c,n,a,Se)){tn=1,ql(e,ui(a,e.current)),ge=null;return}}catch(f){if(c!==null)throw ge=c,f;tn=1,ql(e,ui(a,e.current)),ge=null;return}n.flags&32768?(Ee||o===1?e=!0:cs||(Se&536870912)!==0?e=!1:(Na=e=!0,(o===2||o===9||o===3||o===6)&&(o=Qn.current,o!==null&&o.tag===13&&(o.flags|=16384))),__(n,e)):ru(n)}function ru(e){var n=e;do{if((n.flags&32768)!==0){__(n,Na);return}e=n.return;var a=Yx(n.alternate,n,aa);if(a!==null){ge=a;return}if(n=n.sibling,n!==null){ge=n;return}ge=n=e}while(n!==null);tn===0&&(tn=5)}function __(e,n){do{var a=jx(e.alternate,e);if(a!==null){a.flags&=32767,ge=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){ge=e;return}ge=e=a}while(e!==null);tn=6,ge=null}function v_(e,n,a,o,c,f,x,b,I){e.cancelPendingCommit=null;do su();while(mn!==0);if((Le&6)!==0)throw Error(r(327));if(n!==null){if(n===e.current)throw Error(r(177));if(f=n.lanes|n.childLanes,f|=Zc,oi(e,a,f,x,b,I),e===We&&(ge=We=null,Se=0),hs=n,Pa=e,ra=a,ah=f,rh=c,o_=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,sy(at,function(){return E_(),null})):(e.callbackNode=null,e.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=z.T,z.T=null,c=q.p,q.p=2,x=Le,Le|=4;try{Zx(e,n,a)}finally{Le=x,q.p=c,z.T=o}}mn=1,S_(),x_(),y_()}}function S_(){if(mn===1){mn=0;var e=Pa,n=hs,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=z.T,z.T=null;var o=q.p;q.p=2;var c=Le;Le|=4;try{$g(n,e);var f=xh,x=rm(e.containerInfo),b=f.focusedElem,I=f.selectionRange;if(x!==b&&b&&b.ownerDocument&&am(b.ownerDocument.documentElement,b)){if(I!==null&&Xc(b)){var nt=I.start,pt=I.end;if(pt===void 0&&(pt=nt),"selectionStart"in b)b.selectionStart=nt,b.selectionEnd=Math.min(pt,b.value.length);else{var _t=b.ownerDocument||document,it=_t&&_t.defaultView||window;if(it.getSelection){var lt=it.getSelection(),kt=b.textContent.length,te=Math.min(I.start,kt),Ve=I.end===void 0?te:Math.min(I.end,kt);!lt.extend&&te>Ve&&(x=Ve,Ve=te,te=x);var Z=im(b,te),k=im(b,Ve);if(Z&&k&&(lt.rangeCount!==1||lt.anchorNode!==Z.node||lt.anchorOffset!==Z.offset||lt.focusNode!==k.node||lt.focusOffset!==k.offset)){var et=_t.createRange();et.setStart(Z.node,Z.offset),lt.removeAllRanges(),te>Ve?(lt.addRange(et),lt.extend(k.node,k.offset)):(et.setEnd(k.node,k.offset),lt.addRange(et))}}}}for(_t=[],lt=b;lt=lt.parentNode;)lt.nodeType===1&&_t.push({element:lt,left:lt.scrollLeft,top:lt.scrollTop});for(typeof b.focus=="function"&&b.focus(),b=0;b<_t.length;b++){var gt=_t[b];gt.element.scrollLeft=gt.left,gt.element.scrollTop=gt.top}}vu=!!Sh,xh=Sh=null}finally{Le=c,q.p=o,z.T=a}}e.current=n,mn=2}}function x_(){if(mn===2){mn=0;var e=Pa,n=hs,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=z.T,z.T=null;var o=q.p;q.p=2;var c=Le;Le|=4;try{jg(e,n.alternate,n)}finally{Le=c,q.p=o,z.T=a}}mn=3}}function y_(){if(mn===4||mn===3){mn=0,U();var e=Pa,n=hs,a=ra,o=o_;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?mn=5:(mn=0,hs=Pa=null,M_(e,e.pendingLanes));var c=e.pendingLanes;if(c===0&&(za=null),Hr(a),n=n.stateNode,wt&&typeof wt.onCommitFiberRoot=="function")try{wt.onCommitFiberRoot(bt,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=z.T,c=q.p,q.p=2,z.T=null;try{for(var f=e.onRecoverableError,x=0;x<o.length;x++){var b=o[x];f(b.value,{componentStack:b.stack})}}finally{z.T=n,q.p=c}}(ra&3)!==0&&su(),Ii(e),c=e.pendingLanes,(a&261930)!==0&&(c&42)!==0?e===sh?No++:(No=0,sh=e):No=0,Oo(0)}}function M_(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,po(n)))}function su(){return S_(),x_(),y_(),E_()}function E_(){if(mn!==5)return!1;var e=Pa,n=ah;ah=0;var a=Hr(ra),o=z.T,c=q.p;try{q.p=32>a?32:a,z.T=null,a=rh,rh=null;var f=Pa,x=ra;if(mn=0,hs=Pa=null,ra=0,(Le&6)!==0)throw Error(r(331));var b=Le;if(Le|=4,a_(f.current),e_(f,f.current,x,a),Le=b,Oo(0,!1),wt&&typeof wt.onPostCommitFiberRoot=="function")try{wt.onPostCommitFiberRoot(bt,f)}catch{}return!0}finally{q.p=c,z.T=o,M_(e,n)}}function T_(e,n,a){n=ui(a,n),n=If(e.stateNode,n,2),e=wa(e,n,2),e!==null&&(Ln(e,2),Ii(e))}function Fe(e,n,a){if(e.tag===3)T_(e,e,a);else for(;n!==null;){if(n.tag===3){T_(n,e,a);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(za===null||!za.has(o))){e=ui(a,e),a=bg(2),o=wa(n,a,2),o!==null&&(Ag(a,o,n,e),Ln(o,2),Ii(o));break}}n=n.return}}function uh(e,n,a){var o=e.pingCache;if(o===null){o=e.pingCache=new Jx;var c=new Set;o.set(n,c)}else c=o.get(n),c===void 0&&(c=new Set,o.set(n,c));c.has(a)||(eh=!0,c.add(a),e=iy.bind(null,e,n,a),n.then(e,e))}function iy(e,n,a){var o=e.pingCache;o!==null&&o.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,We===e&&(Se&a)===a&&(tn===4||tn===3&&(Se&62914560)===Se&&300>g()-tu?(Le&2)===0&&ds(e,0):nh|=a,fs===Se&&(fs=0)),Ii(e)}function b_(e,n){n===0&&(n=Be()),e=ur(e,n),e!==null&&(Ln(e,n),Ii(e))}function ay(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),b_(e,a)}function ry(e,n){var a=0;switch(e.tag){case 31:case 13:var o=e.stateNode,c=e.memoizedState;c!==null&&(a=c.retryLane);break;case 19:o=e.stateNode;break;case 22:o=e.stateNode._retryCache;break;default:throw Error(r(314))}o!==null&&o.delete(n),b_(e,a)}function sy(e,n){return ae(e,n)}var ou=null,ms=null,ch=!1,lu=!1,fh=!1,Ia=0;function Ii(e){e!==ms&&e.next===null&&(ms===null?ou=ms=e:ms=ms.next=e),lu=!0,ch||(ch=!0,ly())}function Oo(e,n){if(!fh&&lu){fh=!0;do for(var a=!1,o=ou;o!==null;){if(e!==0){var c=o.pendingLanes;if(c===0)var f=0;else{var x=o.suspendedLanes,b=o.pingedLanes;f=(1<<31-Bt(42|e)+1)-1,f&=c&~(x&~b),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,w_(o,f))}else f=Se,f=vt(o,o===We?f:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(f&3)===0||Vt(o,f)||(a=!0,w_(o,f));o=o.next}while(a);fh=!1}}function oy(){A_()}function A_(){lu=ch=!1;var e=0;Ia!==0&&vy()&&(e=Ia);for(var n=g(),a=null,o=ou;o!==null;){var c=o.next,f=R_(o,n);f===0?(o.next=null,a===null?ou=c:a.next=c,c===null&&(ms=a)):(a=o,(e!==0||(f&3)!==0)&&(lu=!0)),o=c}mn!==0&&mn!==5||Oo(e),Ia!==0&&(Ia=0)}function R_(e,n){for(var a=e.suspendedLanes,o=e.pingedLanes,c=e.expirationTimes,f=e.pendingLanes&-62914561;0<f;){var x=31-Bt(f),b=1<<x,I=c[x];I===-1?((b&a)===0||(b&o)!==0)&&(c[x]=re(b,n)):I<=n&&(e.expiredLanes|=b),f&=~b}if(n=We,a=Se,a=vt(e,e===n?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o=e.callbackNode,a===0||e===n&&(Ie===2||Ie===9)||e.cancelPendingCommit!==null)return o!==null&&o!==null&&je(o),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Vt(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(o!==null&&je(o),Hr(a)){case 2:case 8:a=ht;break;case 32:a=at;break;case 268435456:a=Rt;break;default:a=at}return o=C_.bind(null,e),a=ae(a,o),e.callbackPriority=n,e.callbackNode=a,n}return o!==null&&o!==null&&je(o),e.callbackPriority=2,e.callbackNode=null,2}function C_(e,n){if(mn!==0&&mn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(su()&&e.callbackNode!==a)return null;var o=Se;return o=vt(e,e===We?o:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o===0?null:(u_(e,o,n),R_(e,g()),e.callbackNode!=null&&e.callbackNode===a?C_.bind(null,e):null)}function w_(e,n){if(su())return null;u_(e,n,!0)}function ly(){xy(function(){(Le&6)!==0?ae($,oy):A_()})}function hh(){if(Ia===0){var e=ts;e===0&&(e=At,At<<=1,(At&261888)===0&&(At=256)),Ia=e}return Ia}function D_(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:gl(""+e)}function U_(e,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,e.id&&a.setAttribute("form",e.id),n.parentNode.insertBefore(a,n),e=new FormData(e),a.parentNode.removeChild(a),e}function uy(e,n,a,o,c){if(n==="submit"&&a&&a.stateNode===c){var f=D_((c[Mn]||null).action),x=o.submitter;x&&(n=(n=x[Mn]||null)?D_(n.formAction):x.getAttribute("formAction"),n!==null&&(f=n,x=null));var b=new xl("action","action",null,o,c);e.push({event:b,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(Ia!==0){var I=x?U_(c,x):new FormData(c);Lf(a,{pending:!0,data:I,method:c.method,action:f},null,I)}}else typeof f=="function"&&(b.preventDefault(),I=x?U_(c,x):new FormData(c),Lf(a,{pending:!0,data:I,method:c.method,action:f},f,I))},currentTarget:c}]})}}for(var dh=0;dh<jc.length;dh++){var ph=jc[dh],cy=ph.toLowerCase(),fy=ph[0].toUpperCase()+ph.slice(1);yi(cy,"on"+fy)}yi(lm,"onAnimationEnd"),yi(um,"onAnimationIteration"),yi(cm,"onAnimationStart"),yi("dblclick","onDoubleClick"),yi("focusin","onFocus"),yi("focusout","onBlur"),yi(Rx,"onTransitionRun"),yi(Cx,"onTransitionStart"),yi(wx,"onTransitionCancel"),yi(fm,"onTransitionEnd"),Kt("onMouseEnter",["mouseout","mouseover"]),Kt("onMouseLeave",["mouseout","mouseover"]),Kt("onPointerEnter",["pointerout","pointerover"]),Kt("onPointerLeave",["pointerout","pointerover"]),zt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),zt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),zt("onBeforeInput",["compositionend","keypress","textInput","paste"]),zt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),zt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),zt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var zo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),hy=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(zo));function L_(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var o=e[a],c=o.event;o=o.listeners;t:{var f=void 0;if(n)for(var x=o.length-1;0<=x;x--){var b=o[x],I=b.instance,nt=b.currentTarget;if(b=b.listener,I!==f&&c.isPropagationStopped())break t;f=b,c.currentTarget=nt;try{f(c)}catch(pt){El(pt)}c.currentTarget=null,f=I}else for(x=0;x<o.length;x++){if(b=o[x],I=b.instance,nt=b.currentTarget,b=b.listener,I!==f&&c.isPropagationStopped())break t;f=b,c.currentTarget=nt;try{f(c)}catch(pt){El(pt)}c.currentTarget=null,f=I}}}}function _e(e,n){var a=n[eo];a===void 0&&(a=n[eo]=new Set);var o=e+"__bubble";a.has(o)||(N_(n,e,2,!1),a.add(o))}function mh(e,n,a){var o=0;n&&(o|=4),N_(a,e,o,n)}var uu="_reactListening"+Math.random().toString(36).slice(2);function gh(e){if(!e[uu]){e[uu]=!0,Nt.forEach(function(a){a!=="selectionchange"&&(hy.has(a)||mh(a,!1,e),mh(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[uu]||(n[uu]=!0,mh("selectionchange",!1,n))}}function N_(e,n,a,o){switch(lv(n)){case 2:var c=Hy;break;case 8:c=Gy;break;default:c=Uh}a=c.bind(null,n,a,e),c=void 0,!zc||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(c=!0),o?c!==void 0?e.addEventListener(n,a,{capture:!0,passive:c}):e.addEventListener(n,a,!0):c!==void 0?e.addEventListener(n,a,{passive:c}):e.addEventListener(n,a,!1)}function _h(e,n,a,o,c){var f=o;if((n&1)===0&&(n&2)===0&&o!==null)t:for(;;){if(o===null)return;var x=o.tag;if(x===3||x===4){var b=o.stateNode.containerInfo;if(b===c)break;if(x===4)for(x=o.return;x!==null;){var I=x.tag;if((I===3||I===4)&&x.stateNode.containerInfo===c)return;x=x.return}for(;b!==null;){if(x=Y(b),x===null)return;if(I=x.tag,I===5||I===6||I===26||I===27){o=f=x;continue t}b=b.parentNode}}o=o.return}Ip(function(){var nt=f,pt=Nc(a),_t=[];t:{var it=hm.get(e);if(it!==void 0){var lt=xl,kt=e;switch(e){case"keypress":if(vl(a)===0)break t;case"keydown":case"keyup":lt=rx;break;case"focusin":kt="focus",lt=Fc;break;case"focusout":kt="blur",lt=Fc;break;case"beforeblur":case"afterblur":lt=Fc;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":lt=Gp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":lt=YS;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":lt=lx;break;case lm:case um:case cm:lt=KS;break;case fm:lt=cx;break;case"scroll":case"scrollend":lt=WS;break;case"wheel":lt=hx;break;case"copy":case"cut":case"paste":lt=JS;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":lt=kp;break;case"toggle":case"beforetoggle":lt=px}var te=(n&4)!==0,Ve=!te&&(e==="scroll"||e==="scrollend"),Z=te?it!==null?it+"Capture":null:it;te=[];for(var k=nt,et;k!==null;){var gt=k;if(et=gt.stateNode,gt=gt.tag,gt!==5&&gt!==26&&gt!==27||et===null||Z===null||(gt=no(k,Z),gt!=null&&te.push(Po(k,gt,et))),Ve)break;k=k.return}0<te.length&&(it=new lt(it,kt,null,a,pt),_t.push({event:it,listeners:te}))}}if((n&7)===0){t:{if(it=e==="mouseover"||e==="pointerover",lt=e==="mouseout"||e==="pointerout",it&&a!==Lc&&(kt=a.relatedTarget||a.fromElement)&&(Y(kt)||kt[ya]))break t;if((lt||it)&&(it=pt.window===pt?pt:(it=pt.ownerDocument)?it.defaultView||it.parentWindow:window,lt?(kt=a.relatedTarget||a.toElement,lt=nt,kt=kt?Y(kt):null,kt!==null&&(Ve=u(kt),te=kt.tag,kt!==Ve||te!==5&&te!==27&&te!==6)&&(kt=null)):(lt=null,kt=nt),lt!==kt)){if(te=Gp,gt="onMouseLeave",Z="onMouseEnter",k="mouse",(e==="pointerout"||e==="pointerover")&&(te=kp,gt="onPointerLeave",Z="onPointerEnter",k="pointer"),Ve=lt==null?it:ot(lt),et=kt==null?it:ot(kt),it=new te(gt,k+"leave",lt,a,pt),it.target=Ve,it.relatedTarget=et,gt=null,Y(pt)===nt&&(te=new te(Z,k+"enter",kt,a,pt),te.target=et,te.relatedTarget=Ve,gt=te),Ve=gt,lt&&kt)e:{for(te=dy,Z=lt,k=kt,et=0,gt=Z;gt;gt=te(gt))et++;gt=0;for(var Jt=k;Jt;Jt=te(Jt))gt++;for(;0<et-gt;)Z=te(Z),et--;for(;0<gt-et;)k=te(k),gt--;for(;et--;){if(Z===k||k!==null&&Z===k.alternate){te=Z;break e}Z=te(Z),k=te(k)}te=null}else te=null;lt!==null&&O_(_t,it,lt,te,!1),kt!==null&&Ve!==null&&O_(_t,Ve,kt,te,!0)}}t:{if(it=nt?ot(nt):window,lt=it.nodeName&&it.nodeName.toLowerCase(),lt==="select"||lt==="input"&&it.type==="file")var Ce=Qp;else if(Zp(it))if(Jp)Ce=Tx;else{Ce=Mx;var jt=yx}else lt=it.nodeName,!lt||lt.toLowerCase()!=="input"||it.type!=="checkbox"&&it.type!=="radio"?nt&&Uc(nt.elementType)&&(Ce=Qp):Ce=Ex;if(Ce&&(Ce=Ce(e,nt))){Kp(_t,Ce,a,pt);break t}jt&&jt(e,it,nt),e==="focusout"&&nt&&it.type==="number"&&nt.memoizedProps.value!=null&&pn(it,"number",it.value)}switch(jt=nt?ot(nt):window,e){case"focusin":(Zp(jt)||jt.contentEditable==="true")&&(qr=jt,Wc=nt,co=null);break;case"focusout":co=Wc=qr=null;break;case"mousedown":qc=!0;break;case"contextmenu":case"mouseup":case"dragend":qc=!1,sm(_t,a,pt);break;case"selectionchange":if(Ax)break;case"keydown":case"keyup":sm(_t,a,pt)}var ce;if(Gc)t:{switch(e){case"compositionstart":var xe="onCompositionStart";break t;case"compositionend":xe="onCompositionEnd";break t;case"compositionupdate":xe="onCompositionUpdate";break t}xe=void 0}else Wr?Yp(e,a)&&(xe="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(xe="onCompositionStart");xe&&(Xp&&a.locale!=="ko"&&(Wr||xe!=="onCompositionStart"?xe==="onCompositionEnd"&&Wr&&(ce=Fp()):(Ma=pt,Pc="value"in Ma?Ma.value:Ma.textContent,Wr=!0)),jt=cu(nt,xe),0<jt.length&&(xe=new Vp(xe,e,null,a,pt),_t.push({event:xe,listeners:jt}),ce?xe.data=ce:(ce=jp(a),ce!==null&&(xe.data=ce)))),(ce=gx?_x(e,a):vx(e,a))&&(xe=cu(nt,"onBeforeInput"),0<xe.length&&(jt=new Vp("onBeforeInput","beforeinput",null,a,pt),_t.push({event:jt,listeners:xe}),jt.data=ce)),uy(_t,e,nt,a,pt)}L_(_t,n)})}function Po(e,n,a){return{instance:e,listener:n,currentTarget:a}}function cu(e,n){for(var a=n+"Capture",o=[];e!==null;){var c=e,f=c.stateNode;if(c=c.tag,c!==5&&c!==26&&c!==27||f===null||(c=no(e,a),c!=null&&o.unshift(Po(e,c,f)),c=no(e,n),c!=null&&o.push(Po(e,c,f))),e.tag===3)return o;e=e.return}return[]}function dy(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function O_(e,n,a,o,c){for(var f=n._reactName,x=[];a!==null&&a!==o;){var b=a,I=b.alternate,nt=b.stateNode;if(b=b.tag,I!==null&&I===o)break;b!==5&&b!==26&&b!==27||nt===null||(I=nt,c?(nt=no(a,f),nt!=null&&x.unshift(Po(a,nt,I))):c||(nt=no(a,f),nt!=null&&x.push(Po(a,nt,I)))),a=a.return}x.length!==0&&e.push({event:n,listeners:x})}var py=/\r\n?/g,my=/\u0000|\uFFFD/g;function z_(e){return(typeof e=="string"?e:""+e).replace(py,`
`).replace(my,"")}function P_(e,n){return n=z_(n),z_(e)===n}function Ge(e,n,a,o,c,f){switch(a){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||Vr(e,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&Vr(e,""+o);break;case"className":ze(e,"class",o);break;case"tabIndex":ze(e,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":ze(e,a,o);break;case"style":Pp(e,o,f);break;case"data":if(n!=="object"){ze(e,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=gl(""+o),e.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&Ge(e,n,"name",c.name,c,null),Ge(e,n,"formEncType",c.formEncType,c,null),Ge(e,n,"formMethod",c.formMethod,c,null),Ge(e,n,"formTarget",c.formTarget,c,null)):(Ge(e,n,"encType",c.encType,c,null),Ge(e,n,"method",c.method,c,null),Ge(e,n,"target",c.target,c,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=gl(""+o),e.setAttribute(a,o);break;case"onClick":o!=null&&(e.onclick=Xi);break;case"onScroll":o!=null&&_e("scroll",e);break;case"onScrollEnd":o!=null&&_e("scrollend",e);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(r(61));if(a=o.__html,a!=null){if(c.children!=null)throw Error(r(60));e.innerHTML=a}}break;case"multiple":e.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":e.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){e.removeAttribute("xlink:href");break}a=gl(""+o),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""+o):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":o===!0?e.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,o):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?e.setAttribute(a,o):e.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?e.removeAttribute(a):e.setAttribute(a,o);break;case"popover":_e("beforetoggle",e),_e("toggle",e),Xe(e,"popover",o);break;case"xlinkActuate":me(e,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":me(e,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":me(e,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":me(e,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":me(e,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":me(e,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":me(e,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":me(e,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":me(e,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":Xe(e,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=kS.get(a)||a,Xe(e,a,o))}}function vh(e,n,a,o,c,f){switch(a){case"style":Pp(e,o,f);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(r(61));if(a=o.__html,a!=null){if(c.children!=null)throw Error(r(60));e.innerHTML=a}}break;case"children":typeof o=="string"?Vr(e,o):(typeof o=="number"||typeof o=="bigint")&&Vr(e,""+o);break;case"onScroll":o!=null&&_e("scroll",e);break;case"onScrollEnd":o!=null&&_e("scrollend",e);break;case"onClick":o!=null&&(e.onclick=Xi);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Xt.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(c=a.endsWith("Capture"),n=a.slice(2,c?a.length-7:void 0),f=e[Mn]||null,f=f!=null?f[a]:null,typeof f=="function"&&e.removeEventListener(n,f,c),typeof o=="function")){typeof f!="function"&&f!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(n,o,c);break t}a in e?e[a]=o:o===!0?e.setAttribute(a,""):Xe(e,a,o)}}}function Rn(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":_e("error",e),_e("load",e);var o=!1,c=!1,f;for(f in a)if(a.hasOwnProperty(f)){var x=a[f];if(x!=null)switch(f){case"src":o=!0;break;case"srcSet":c=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Ge(e,n,f,x,a,null)}}c&&Ge(e,n,"srcSet",a.srcSet,a,null),o&&Ge(e,n,"src",a.src,a,null);return;case"input":_e("invalid",e);var b=f=x=c=null,I=null,nt=null;for(o in a)if(a.hasOwnProperty(o)){var pt=a[o];if(pt!=null)switch(o){case"name":c=pt;break;case"type":x=pt;break;case"checked":I=pt;break;case"defaultChecked":nt=pt;break;case"value":f=pt;break;case"defaultValue":b=pt;break;case"children":case"dangerouslySetInnerHTML":if(pt!=null)throw Error(r(137,n));break;default:Ge(e,n,o,pt,a,null)}}Nn(e,f,b,I,nt,x,c,!1);return;case"select":_e("invalid",e),o=x=f=null;for(c in a)if(a.hasOwnProperty(c)&&(b=a[c],b!=null))switch(c){case"value":f=b;break;case"defaultValue":x=b;break;case"multiple":o=b;default:Ge(e,n,c,b,a,null)}n=f,a=x,e.multiple=!!o,n!=null?nn(e,!!o,n,!1):a!=null&&nn(e,!!o,a,!0);return;case"textarea":_e("invalid",e),f=c=o=null;for(x in a)if(a.hasOwnProperty(x)&&(b=a[x],b!=null))switch(x){case"value":o=b;break;case"defaultValue":c=b;break;case"children":f=b;break;case"dangerouslySetInnerHTML":if(b!=null)throw Error(r(91));break;default:Ge(e,n,x,b,a,null)}Oi(e,o,c,f);return;case"option":for(I in a)if(a.hasOwnProperty(I)&&(o=a[I],o!=null))switch(I){case"selected":e.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:Ge(e,n,I,o,a,null)}return;case"dialog":_e("beforetoggle",e),_e("toggle",e),_e("cancel",e),_e("close",e);break;case"iframe":case"object":_e("load",e);break;case"video":case"audio":for(o=0;o<zo.length;o++)_e(zo[o],e);break;case"image":_e("error",e),_e("load",e);break;case"details":_e("toggle",e);break;case"embed":case"source":case"link":_e("error",e),_e("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(nt in a)if(a.hasOwnProperty(nt)&&(o=a[nt],o!=null))switch(nt){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Ge(e,n,nt,o,a,null)}return;default:if(Uc(n)){for(pt in a)a.hasOwnProperty(pt)&&(o=a[pt],o!==void 0&&vh(e,n,pt,o,a,void 0));return}}for(b in a)a.hasOwnProperty(b)&&(o=a[b],o!=null&&Ge(e,n,b,o,a,null))}function gy(e,n,a,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var c=null,f=null,x=null,b=null,I=null,nt=null,pt=null;for(lt in a){var _t=a[lt];if(a.hasOwnProperty(lt)&&_t!=null)switch(lt){case"checked":break;case"value":break;case"defaultValue":I=_t;default:o.hasOwnProperty(lt)||Ge(e,n,lt,null,o,_t)}}for(var it in o){var lt=o[it];if(_t=a[it],o.hasOwnProperty(it)&&(lt!=null||_t!=null))switch(it){case"type":f=lt;break;case"name":c=lt;break;case"checked":nt=lt;break;case"defaultChecked":pt=lt;break;case"value":x=lt;break;case"defaultValue":b=lt;break;case"children":case"dangerouslySetInnerHTML":if(lt!=null)throw Error(r(137,n));break;default:lt!==_t&&Ge(e,n,it,lt,o,_t)}}Cn(e,x,b,I,nt,pt,f,c);return;case"select":lt=x=b=it=null;for(f in a)if(I=a[f],a.hasOwnProperty(f)&&I!=null)switch(f){case"value":break;case"multiple":lt=I;default:o.hasOwnProperty(f)||Ge(e,n,f,null,o,I)}for(c in o)if(f=o[c],I=a[c],o.hasOwnProperty(c)&&(f!=null||I!=null))switch(c){case"value":it=f;break;case"defaultValue":b=f;break;case"multiple":x=f;default:f!==I&&Ge(e,n,c,f,o,I)}n=b,a=x,o=lt,it!=null?nn(e,!!a,it,!1):!!o!=!!a&&(n!=null?nn(e,!!a,n,!0):nn(e,!!a,a?[]:"",!1));return;case"textarea":lt=it=null;for(b in a)if(c=a[b],a.hasOwnProperty(b)&&c!=null&&!o.hasOwnProperty(b))switch(b){case"value":break;case"children":break;default:Ge(e,n,b,null,o,c)}for(x in o)if(c=o[x],f=a[x],o.hasOwnProperty(x)&&(c!=null||f!=null))switch(x){case"value":it=c;break;case"defaultValue":lt=c;break;case"children":break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(r(91));break;default:c!==f&&Ge(e,n,x,c,o,f)}Gr(e,it,lt);return;case"option":for(var kt in a)if(it=a[kt],a.hasOwnProperty(kt)&&it!=null&&!o.hasOwnProperty(kt))switch(kt){case"selected":e.selected=!1;break;default:Ge(e,n,kt,null,o,it)}for(I in o)if(it=o[I],lt=a[I],o.hasOwnProperty(I)&&it!==lt&&(it!=null||lt!=null))switch(I){case"selected":e.selected=it&&typeof it!="function"&&typeof it!="symbol";break;default:Ge(e,n,I,it,o,lt)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var te in a)it=a[te],a.hasOwnProperty(te)&&it!=null&&!o.hasOwnProperty(te)&&Ge(e,n,te,null,o,it);for(nt in o)if(it=o[nt],lt=a[nt],o.hasOwnProperty(nt)&&it!==lt&&(it!=null||lt!=null))switch(nt){case"children":case"dangerouslySetInnerHTML":if(it!=null)throw Error(r(137,n));break;default:Ge(e,n,nt,it,o,lt)}return;default:if(Uc(n)){for(var Ve in a)it=a[Ve],a.hasOwnProperty(Ve)&&it!==void 0&&!o.hasOwnProperty(Ve)&&vh(e,n,Ve,void 0,o,it);for(pt in o)it=o[pt],lt=a[pt],!o.hasOwnProperty(pt)||it===lt||it===void 0&&lt===void 0||vh(e,n,pt,it,o,lt);return}}for(var Z in a)it=a[Z],a.hasOwnProperty(Z)&&it!=null&&!o.hasOwnProperty(Z)&&Ge(e,n,Z,null,o,it);for(_t in o)it=o[_t],lt=a[_t],!o.hasOwnProperty(_t)||it===lt||it==null&&lt==null||Ge(e,n,_t,it,o,lt)}function B_(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function _y(){if(typeof performance.getEntriesByType=="function"){for(var e=0,n=0,a=performance.getEntriesByType("resource"),o=0;o<a.length;o++){var c=a[o],f=c.transferSize,x=c.initiatorType,b=c.duration;if(f&&b&&B_(x)){for(x=0,b=c.responseEnd,o+=1;o<a.length;o++){var I=a[o],nt=I.startTime;if(nt>b)break;var pt=I.transferSize,_t=I.initiatorType;pt&&B_(_t)&&(I=I.responseEnd,x+=pt*(I<b?1:(b-nt)/(I-nt)))}if(--o,n+=8*(f+x)/(c.duration/1e3),e++,10<e)break}}if(0<e)return n/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Sh=null,xh=null;function fu(e){return e.nodeType===9?e:e.ownerDocument}function I_(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function F_(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function yh(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Mh=null;function vy(){var e=window.event;return e&&e.type==="popstate"?e===Mh?!1:(Mh=e,!0):(Mh=null,!1)}var H_=typeof setTimeout=="function"?setTimeout:void 0,Sy=typeof clearTimeout=="function"?clearTimeout:void 0,G_=typeof Promise=="function"?Promise:void 0,xy=typeof queueMicrotask=="function"?queueMicrotask:typeof G_<"u"?function(e){return G_.resolve(null).then(e).catch(yy)}:H_;function yy(e){setTimeout(function(){throw e})}function Fa(e){return e==="head"}function V_(e,n){var a=n,o=0;do{var c=a.nextSibling;if(e.removeChild(a),c&&c.nodeType===8)if(a=c.data,a==="/$"||a==="/&"){if(o===0){e.removeChild(c),Ss(n);return}o--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")o++;else if(a==="html")Bo(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,Bo(a);for(var f=a.firstChild;f;){var x=f.nextSibling,b=f.nodeName;f[ar]||b==="SCRIPT"||b==="STYLE"||b==="LINK"&&f.rel.toLowerCase()==="stylesheet"||a.removeChild(f),f=x}}else a==="body"&&Bo(e.ownerDocument.body);a=c}while(a);Ss(n)}function k_(e,n){var a=e;e=0;do{var o=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),o&&o.nodeType===8)if(a=o.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=o}while(a)}function Eh(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Eh(a),R(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function My(e,n,a,o){for(;e.nodeType===1;){var c=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(o){if(!e[ar])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(f=e.getAttribute("rel"),f==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(f!==c.rel||e.getAttribute("href")!==(c.href==null||c.href===""?null:c.href)||e.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin)||e.getAttribute("title")!==(c.title==null?null:c.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(f=e.getAttribute("src"),(f!==(c.src==null?null:c.src)||e.getAttribute("type")!==(c.type==null?null:c.type)||e.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin))&&f&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var f=c.name==null?null:""+c.name;if(c.type==="hidden"&&e.getAttribute("name")===f)return e}else return e;if(e=pi(e.nextSibling),e===null)break}return null}function Ey(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=pi(e.nextSibling),e===null))return null;return e}function X_(e,n){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=pi(e.nextSibling),e===null))return null;return e}function Th(e){return e.data==="$?"||e.data==="$~"}function bh(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function Ty(e,n){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=n;else if(e.data!=="$?"||a.readyState!=="loading")n();else{var o=function(){n(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),e._reactRetry=o}}function pi(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return e}var Ah=null;function W_(e){e=e.nextSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(n===0)return pi(e.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}e=e.nextSibling}return null}function q_(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return e;n--}else a!=="/$"&&a!=="/&"||n++}e=e.previousSibling}return null}function Y_(e,n,a){switch(n=fu(a),e){case"html":if(e=n.documentElement,!e)throw Error(r(452));return e;case"head":if(e=n.head,!e)throw Error(r(453));return e;case"body":if(e=n.body,!e)throw Error(r(454));return e;default:throw Error(r(451))}}function Bo(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);R(e)}var mi=new Map,j_=new Set;function hu(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var sa=q.d;q.d={f:by,r:Ay,D:Ry,C:Cy,L:wy,m:Dy,X:Ly,S:Uy,M:Ny};function by(){var e=sa.f(),n=iu();return e||n}function Ay(e){var n=rt(e);n!==null&&n.tag===5&&n.type==="form"?fg(n):sa.r(e)}var gs=typeof document>"u"?null:document;function Z_(e,n,a){var o=gs;if(o&&typeof n=="string"&&n){var c=ve(n);c='link[rel="'+e+'"][href="'+c+'"]',typeof a=="string"&&(c+='[crossorigin="'+a+'"]'),j_.has(c)||(j_.add(c),e={rel:e,crossOrigin:a,href:n},o.querySelector(c)===null&&(n=o.createElement("link"),Rn(n,"link",e),St(n),o.head.appendChild(n)))}}function Ry(e){sa.D(e),Z_("dns-prefetch",e,null)}function Cy(e,n){sa.C(e,n),Z_("preconnect",e,n)}function wy(e,n,a){sa.L(e,n,a);var o=gs;if(o&&e&&n){var c='link[rel="preload"][as="'+ve(n)+'"]';n==="image"&&a&&a.imageSrcSet?(c+='[imagesrcset="'+ve(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(c+='[imagesizes="'+ve(a.imageSizes)+'"]')):c+='[href="'+ve(e)+'"]';var f=c;switch(n){case"style":f=_s(e);break;case"script":f=vs(e)}mi.has(f)||(e=v({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),mi.set(f,e),o.querySelector(c)!==null||n==="style"&&o.querySelector(Io(f))||n==="script"&&o.querySelector(Fo(f))||(n=o.createElement("link"),Rn(n,"link",e),St(n),o.head.appendChild(n)))}}function Dy(e,n){sa.m(e,n);var a=gs;if(a&&e){var o=n&&typeof n.as=="string"?n.as:"script",c='link[rel="modulepreload"][as="'+ve(o)+'"][href="'+ve(e)+'"]',f=c;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=vs(e)}if(!mi.has(f)&&(e=v({rel:"modulepreload",href:e},n),mi.set(f,e),a.querySelector(c)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Fo(f)))return}o=a.createElement("link"),Rn(o,"link",e),St(o),a.head.appendChild(o)}}}function Uy(e,n,a){sa.S(e,n,a);var o=gs;if(o&&e){var c=K(o).hoistableStyles,f=_s(e);n=n||"default";var x=c.get(f);if(!x){var b={loading:0,preload:null};if(x=o.querySelector(Io(f)))b.loading=5;else{e=v({rel:"stylesheet",href:e,"data-precedence":n},a),(a=mi.get(f))&&Rh(e,a);var I=x=o.createElement("link");St(I),Rn(I,"link",e),I._p=new Promise(function(nt,pt){I.onload=nt,I.onerror=pt}),I.addEventListener("load",function(){b.loading|=1}),I.addEventListener("error",function(){b.loading|=2}),b.loading|=4,du(x,n,o)}x={type:"stylesheet",instance:x,count:1,state:b},c.set(f,x)}}}function Ly(e,n){sa.X(e,n);var a=gs;if(a&&e){var o=K(a).hoistableScripts,c=vs(e),f=o.get(c);f||(f=a.querySelector(Fo(c)),f||(e=v({src:e,async:!0},n),(n=mi.get(c))&&Ch(e,n),f=a.createElement("script"),St(f),Rn(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(c,f))}}function Ny(e,n){sa.M(e,n);var a=gs;if(a&&e){var o=K(a).hoistableScripts,c=vs(e),f=o.get(c);f||(f=a.querySelector(Fo(c)),f||(e=v({src:e,async:!0,type:"module"},n),(n=mi.get(c))&&Ch(e,n),f=a.createElement("script"),St(f),Rn(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(c,f))}}function K_(e,n,a,o){var c=(c=Q.current)?hu(c):null;if(!c)throw Error(r(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=_s(a.href),a=K(c).hoistableStyles,o=a.get(n),o||(o={type:"style",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=_s(a.href);var f=K(c).hoistableStyles,x=f.get(e);if(x||(c=c.ownerDocument||c,x={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(e,x),(f=c.querySelector(Io(e)))&&!f._p&&(x.instance=f,x.state.loading=5),mi.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},mi.set(e,a),f||Oy(c,e,a,x.state))),n&&o===null)throw Error(r(528,""));return x}if(n&&o!==null)throw Error(r(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=vs(a),a=K(c).hoistableScripts,o=a.get(n),o||(o={type:"script",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,e))}}function _s(e){return'href="'+ve(e)+'"'}function Io(e){return'link[rel="stylesheet"]['+e+"]"}function Q_(e){return v({},e,{"data-precedence":e.precedence,precedence:null})}function Oy(e,n,a,o){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=e.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),Rn(n,"link",a),St(n),e.head.appendChild(n))}function vs(e){return'[src="'+ve(e)+'"]'}function Fo(e){return"script[async]"+e}function J_(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var o=e.querySelector('style[data-href~="'+ve(a.href)+'"]');if(o)return n.instance=o,St(o),o;var c=v({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(e.ownerDocument||e).createElement("style"),St(o),Rn(o,"style",c),du(o,a.precedence,e),n.instance=o;case"stylesheet":c=_s(a.href);var f=e.querySelector(Io(c));if(f)return n.state.loading|=4,n.instance=f,St(f),f;o=Q_(a),(c=mi.get(c))&&Rh(o,c),f=(e.ownerDocument||e).createElement("link"),St(f);var x=f;return x._p=new Promise(function(b,I){x.onload=b,x.onerror=I}),Rn(f,"link",o),n.state.loading|=4,du(f,a.precedence,e),n.instance=f;case"script":return f=vs(a.src),(c=e.querySelector(Fo(f)))?(n.instance=c,St(c),c):(o=a,(c=mi.get(f))&&(o=v({},a),Ch(o,c)),e=e.ownerDocument||e,c=e.createElement("script"),St(c),Rn(c,"link",o),e.head.appendChild(c),n.instance=c);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,du(o,a.precedence,e));return n.instance}function du(e,n,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),c=o.length?o[o.length-1]:null,f=c,x=0;x<o.length;x++){var b=o[x];if(b.dataset.precedence===n)f=b;else if(f!==c)break}f?f.parentNode.insertBefore(e,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function Rh(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function Ch(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var pu=null;function $_(e,n,a){if(pu===null){var o=new Map,c=pu=new Map;c.set(a,o)}else c=pu,o=c.get(a),o||(o=new Map,c.set(a,o));if(o.has(e))return o;for(o.set(e,null),a=a.getElementsByTagName(e),c=0;c<a.length;c++){var f=a[c];if(!(f[ar]||f[sn]||e==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var x=f.getAttribute(n)||"";x=e+x;var b=o.get(x);b?b.push(f):o.set(x,[f])}}return o}function tv(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function zy(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return e=n.disabled,typeof n.precedence=="string"&&e==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function ev(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function Py(e,n,a,o){if(a.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var c=_s(o.href),f=n.querySelector(Io(c));if(f){n=f._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(e.count++,e=mu.bind(e),n.then(e,e)),a.state.loading|=4,a.instance=f,St(f);return}f=n.ownerDocument||n,o=Q_(o),(c=mi.get(c))&&Rh(o,c),f=f.createElement("link"),St(f);var x=f;x._p=new Promise(function(b,I){x.onload=b,x.onerror=I}),Rn(f,"link",o),a.instance=f}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=mu.bind(e),n.addEventListener("load",a),n.addEventListener("error",a))}}var wh=0;function By(e,n){return e.stylesheets&&e.count===0&&_u(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var o=setTimeout(function(){if(e.stylesheets&&_u(e,e.stylesheets),e.unsuspend){var f=e.unsuspend;e.unsuspend=null,f()}},6e4+n);0<e.imgBytes&&wh===0&&(wh=62500*_y());var c=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&_u(e,e.stylesheets),e.unsuspend)){var f=e.unsuspend;e.unsuspend=null,f()}},(e.imgBytes>wh?50:800)+n);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(o),clearTimeout(c)}}:null}function mu(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)_u(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var gu=null;function _u(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,gu=new Map,n.forEach(Iy,e),gu=null,mu.call(e))}function Iy(e,n){if(!(n.state.loading&4)){var a=gu.get(e);if(a)var o=a.get(null);else{a=new Map,gu.set(e,a);for(var c=e.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<c.length;f++){var x=c[f];(x.nodeName==="LINK"||x.getAttribute("media")!=="not all")&&(a.set(x.dataset.precedence,x),o=x)}o&&a.set(null,o)}c=n.instance,x=c.getAttribute("data-precedence"),f=a.get(x)||o,f===o&&a.set(null,c),a.set(x,c),this.count++,o=mu.bind(this),c.addEventListener("load",o),c.addEventListener("error",o),f?f.parentNode.insertBefore(c,f.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(c,e.firstChild)),n.state.loading|=4}}var Ho={$$typeof:O,Provider:null,Consumer:null,_currentValue:W,_currentValue2:W,_threadCount:0};function Fy(e,n,a,o,c,f,x,b,I){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ae(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ae(0),this.hiddenUpdates=Ae(null),this.identifierPrefix=o,this.onUncaughtError=c,this.onCaughtError=f,this.onRecoverableError=x,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=I,this.incompleteTransitions=new Map}function nv(e,n,a,o,c,f,x,b,I,nt,pt,_t){return e=new Fy(e,n,a,x,I,nt,pt,_t,b),n=1,f===!0&&(n|=24),f=Kn(3,null,null,n),e.current=f,f.stateNode=e,n=lf(),n.refCount++,e.pooledCache=n,n.refCount++,f.memoizedState={element:o,isDehydrated:a,cache:n},hf(f),e}function iv(e){return e?(e=Zr,e):Zr}function av(e,n,a,o,c,f){c=iv(c),o.context===null?o.context=c:o.pendingContext=c,o=Ca(n),o.payload={element:a},f=f===void 0?null:f,f!==null&&(o.callback=f),a=wa(e,o,n),a!==null&&(Vn(a,e,n),vo(a,e,n))}function rv(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function Dh(e,n){rv(e,n),(e=e.alternate)&&rv(e,n)}function sv(e){if(e.tag===13||e.tag===31){var n=ur(e,67108864);n!==null&&Vn(n,e,67108864),Dh(e,67108864)}}function ov(e){if(e.tag===13||e.tag===31){var n=ei();n=Fr(n);var a=ur(e,n);a!==null&&Vn(a,e,n),Dh(e,n)}}var vu=!0;function Hy(e,n,a,o){var c=z.T;z.T=null;var f=q.p;try{q.p=2,Uh(e,n,a,o)}finally{q.p=f,z.T=c}}function Gy(e,n,a,o){var c=z.T;z.T=null;var f=q.p;try{q.p=8,Uh(e,n,a,o)}finally{q.p=f,z.T=c}}function Uh(e,n,a,o){if(vu){var c=Lh(o);if(c===null)_h(e,n,o,Su,a),uv(e,o);else if(ky(c,e,n,a,o))o.stopPropagation();else if(uv(e,o),n&4&&-1<Vy.indexOf(e)){for(;c!==null;){var f=rt(c);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var x=Mt(f.pendingLanes);if(x!==0){var b=f;for(b.pendingLanes|=2,b.entangledLanes|=2;x;){var I=1<<31-Bt(x);b.entanglements[1]|=I,x&=~I}Ii(f),(Le&6)===0&&(eu=g()+500,Oo(0))}}break;case 31:case 13:b=ur(f,2),b!==null&&Vn(b,f,2),iu(),Dh(f,2)}if(f=Lh(o),f===null&&_h(e,n,o,Su,a),f===c)break;c=f}c!==null&&o.stopPropagation()}else _h(e,n,o,null,a)}}function Lh(e){return e=Nc(e),Nh(e)}var Su=null;function Nh(e){if(Su=null,e=Y(e),e!==null){var n=u(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=h(n),e!==null)return e;e=null}else if(a===31){if(e=d(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return Su=e,null}function lv(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(G()){case $:return 2;case ht:return 8;case at:case Pt:return 32;case Rt:return 268435456;default:return 32}default:return 32}}var Oh=!1,Ha=null,Ga=null,Va=null,Go=new Map,Vo=new Map,ka=[],Vy="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function uv(e,n){switch(e){case"focusin":case"focusout":Ha=null;break;case"dragenter":case"dragleave":Ga=null;break;case"mouseover":case"mouseout":Va=null;break;case"pointerover":case"pointerout":Go.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Vo.delete(n.pointerId)}}function ko(e,n,a,o,c,f){return e===null||e.nativeEvent!==f?(e={blockedOn:n,domEventName:a,eventSystemFlags:o,nativeEvent:f,targetContainers:[c]},n!==null&&(n=rt(n),n!==null&&sv(n)),e):(e.eventSystemFlags|=o,n=e.targetContainers,c!==null&&n.indexOf(c)===-1&&n.push(c),e)}function ky(e,n,a,o,c){switch(n){case"focusin":return Ha=ko(Ha,e,n,a,o,c),!0;case"dragenter":return Ga=ko(Ga,e,n,a,o,c),!0;case"mouseover":return Va=ko(Va,e,n,a,o,c),!0;case"pointerover":var f=c.pointerId;return Go.set(f,ko(Go.get(f)||null,e,n,a,o,c)),!0;case"gotpointercapture":return f=c.pointerId,Vo.set(f,ko(Vo.get(f)||null,e,n,a,o,c)),!0}return!1}function cv(e){var n=Y(e.target);if(n!==null){var a=u(n);if(a!==null){if(n=a.tag,n===13){if(n=h(a),n!==null){e.blockedOn=n,to(e.priority,function(){ov(a)});return}}else if(n===31){if(n=d(a),n!==null){e.blockedOn=n,to(e.priority,function(){ov(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function xu(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=Lh(e.nativeEvent);if(a===null){a=e.nativeEvent;var o=new a.constructor(a.type,a);Lc=o,a.target.dispatchEvent(o),Lc=null}else return n=rt(a),n!==null&&sv(n),e.blockedOn=a,!1;n.shift()}return!0}function fv(e,n,a){xu(e)&&a.delete(n)}function Xy(){Oh=!1,Ha!==null&&xu(Ha)&&(Ha=null),Ga!==null&&xu(Ga)&&(Ga=null),Va!==null&&xu(Va)&&(Va=null),Go.forEach(fv),Vo.forEach(fv)}function yu(e,n){e.blockedOn===n&&(e.blockedOn=null,Oh||(Oh=!0,s.unstable_scheduleCallback(s.unstable_NormalPriority,Xy)))}var Mu=null;function hv(e){Mu!==e&&(Mu=e,s.unstable_scheduleCallback(s.unstable_NormalPriority,function(){Mu===e&&(Mu=null);for(var n=0;n<e.length;n+=3){var a=e[n],o=e[n+1],c=e[n+2];if(typeof o!="function"){if(Nh(o||a)===null)continue;break}var f=rt(a);f!==null&&(e.splice(n,3),n-=3,Lf(f,{pending:!0,data:c,method:a.method,action:o},o,c))}}))}function Ss(e){function n(I){return yu(I,e)}Ha!==null&&yu(Ha,e),Ga!==null&&yu(Ga,e),Va!==null&&yu(Va,e),Go.forEach(n),Vo.forEach(n);for(var a=0;a<ka.length;a++){var o=ka[a];o.blockedOn===e&&(o.blockedOn=null)}for(;0<ka.length&&(a=ka[0],a.blockedOn===null);)cv(a),a.blockedOn===null&&ka.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var c=a[o],f=a[o+1],x=c[Mn]||null;if(typeof f=="function")x||hv(a);else if(x){var b=null;if(f&&f.hasAttribute("formAction")){if(c=f,x=f[Mn]||null)b=x.formAction;else if(Nh(c)!==null)continue}else b=x.action;typeof b=="function"?a[o+1]=b:(a.splice(o,3),o-=3),hv(a)}}}function dv(){function e(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(x){return c=x})},focusReset:"manual",scroll:"manual"})}function n(){c!==null&&(c(),c=null),o||setTimeout(a,20)}function a(){if(!o&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,c=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){o=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),c!==null&&(c(),c=null)}}}function zh(e){this._internalRoot=e}Eu.prototype.render=zh.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(r(409));var a=n.current,o=ei();av(a,o,e,n,null,null)},Eu.prototype.unmount=zh.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;av(e.current,2,null,e,null,null),iu(),n[ya]=null}};function Eu(e){this._internalRoot=e}Eu.prototype.unstable_scheduleHydration=function(e){if(e){var n=ir();e={blockedOn:null,target:e,priority:n};for(var a=0;a<ka.length&&n!==0&&n<ka[a].priority;a++);ka.splice(a,0,e),a===0&&cv(e)}};var pv=t.version;if(pv!=="19.2.0")throw Error(r(527,pv,"19.2.0"));q.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(r(188)):(e=Object.keys(e).join(","),Error(r(268,e)));return e=p(n),e=e!==null?S(e):null,e=e===null?null:e.stateNode,e};var Wy={bundleType:0,version:"19.2.0",rendererPackageName:"react-dom",currentDispatcherRef:z,reconcilerVersion:"19.2.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Tu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Tu.isDisabled&&Tu.supportsFiber)try{bt=Tu.inject(Wy),wt=Tu}catch{}}return Wo.createRoot=function(e,n){if(!l(e))throw Error(r(299));var a=!1,o="",c=yg,f=Mg,x=Eg;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(c=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(x=n.onRecoverableError)),n=nv(e,1,!1,null,null,a,o,null,c,f,x,dv),e[ya]=n.current,gh(e),new zh(n)},Wo.hydrateRoot=function(e,n,a){if(!l(e))throw Error(r(299));var o=!1,c="",f=yg,x=Mg,b=Eg,I=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(c=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(x=a.onCaughtError),a.onRecoverableError!==void 0&&(b=a.onRecoverableError),a.formState!==void 0&&(I=a.formState)),n=nv(e,1,!0,n,a??null,o,c,I,f,x,b,dv),n.context=iv(null),a=n.current,o=ei(),o=Fr(o),c=Ca(o),c.callback=null,wa(a,c,o),a=o,n.current.lanes=a,Ln(n,a),Ii(n),e[ya]=n.current,gh(e),new Eu(n)},Wo.version="19.2.0",Wo}var Tv;function eM(){if(Tv)return Ih.exports;Tv=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(t){console.error(t)}}return s(),Ih.exports=tM(),Ih.exports}var nM=eM();const iM="/assets/Romano-1024x1024-Cih9GxIi.png";/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const yp="180",aM=0,bv=1,rM=2,G0=1,sM=2,ha=3,er=0,qn=1,pa=2,$a=0,Bs=1,Td=2,Av=3,Rv=4,oM=5,Dr=100,lM=101,uM=102,cM=103,fM=104,hM=200,dM=201,pM=202,mM=203,bd=204,Ad=205,gM=206,_M=207,vM=208,SM=209,xM=210,yM=211,MM=212,EM=213,TM=214,Rd=0,Cd=1,wd=2,Fs=3,Dd=4,Ud=5,Ld=6,Nd=7,V0=0,bM=1,AM=2,tr=0,RM=1,CM=2,wM=3,DM=4,UM=5,LM=6,NM=7,k0=300,Hs=301,Gs=302,Od=303,zd=304,xc=306,Pd=1e3,Di=1001,Bd=1002,si=1003,OM=1004,bu=1005,Xn=1006,Vh=1007,Lr=1008,_a=1009,X0=1010,W0=1011,il=1012,Mp=1013,Br=1014,Gi=1015,Zs=1016,Ep=1017,Tp=1018,al=1020,q0=35902,Y0=35899,j0=1021,Z0=1022,vi=1023,rl=1026,sl=1027,K0=1028,bp=1029,Q0=1030,Ap=1031,Rp=1033,$u=33776,tc=33777,ec=33778,nc=33779,Id=35840,Fd=35841,Hd=35842,Gd=35843,Vd=36196,kd=37492,Xd=37496,Wd=37808,qd=37809,Yd=37810,jd=37811,Zd=37812,Kd=37813,Qd=37814,Jd=37815,$d=37816,tp=37817,ep=37818,np=37819,ip=37820,ap=37821,rp=36492,sp=36494,op=36495,lp=36283,up=36284,cp=36285,fp=36286,zM=3200,PM=3201,BM=0,IM=1,Ja="",_i="srgb",Vs="srgb-linear",uc="linear",ke="srgb",xs=7680,Cv=519,FM=512,HM=513,GM=514,J0=515,VM=516,kM=517,XM=518,WM=519,wv=35044,Dv="300 es",Vi=2e3,cc=2001;class Ks{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[t]===void 0&&(r[t]=[]),r[t].indexOf(i)===-1&&r[t].push(i)}hasEventListener(t,i){const r=this._listeners;return r===void 0?!1:r[t]!==void 0&&r[t].indexOf(i)!==-1}removeEventListener(t,i){const r=this._listeners;if(r===void 0)return;const l=r[t];if(l!==void 0){const u=l.indexOf(i);u!==-1&&l.splice(u,1)}}dispatchEvent(t){const i=this._listeners;if(i===void 0)return;const r=i[t.type];if(r!==void 0){t.target=this;const l=r.slice(0);for(let u=0,h=l.length;u<h;u++)l[u].call(this,t);t.target=null}}}const Dn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],kh=Math.PI/180,hp=180/Math.PI;function ul(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Dn[s&255]+Dn[s>>8&255]+Dn[s>>16&255]+Dn[s>>24&255]+"-"+Dn[t&255]+Dn[t>>8&255]+"-"+Dn[t>>16&15|64]+Dn[t>>24&255]+"-"+Dn[i&63|128]+Dn[i>>8&255]+"-"+Dn[i>>16&255]+Dn[i>>24&255]+Dn[r&255]+Dn[r>>8&255]+Dn[r>>16&255]+Dn[r>>24&255]).toLowerCase()}function Te(s,t,i){return Math.max(t,Math.min(i,s))}function qM(s,t){return(s%t+t)%t}function Xh(s,t,i){return(1-i)*s+i*t}function qo(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function kn(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}class le{constructor(t=0,i=0){le.prototype.isVector2=!0,this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,r=this.y,l=t.elements;return this.x=l[0]*i+l[3]*r+l[6],this.y=l[1]*i+l[4]*r+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=Te(this.x,t.x,i.x),this.y=Te(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=Te(this.x,t,i),this.y=Te(this.y,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Te(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(t)/i;return Math.acos(Te(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,r=this.y-t.y;return i*i+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const r=Math.cos(i),l=Math.sin(i),u=this.x-t.x,h=this.y-t.y;return this.x=u*r-h*l+t.x,this.y=u*l+h*r+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class cl{constructor(t=0,i=0,r=0,l=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=r,this._w=l}static slerpFlat(t,i,r,l,u,h,d){let m=r[l+0],p=r[l+1],S=r[l+2],v=r[l+3];const y=u[h+0],M=u[h+1],T=u[h+2],A=u[h+3];if(d===0){t[i+0]=m,t[i+1]=p,t[i+2]=S,t[i+3]=v;return}if(d===1){t[i+0]=y,t[i+1]=M,t[i+2]=T,t[i+3]=A;return}if(v!==A||m!==y||p!==M||S!==T){let E=1-d;const _=m*y+p*M+S*T+v*A,P=_>=0?1:-1,O=1-_*_;if(O>Number.EPSILON){const H=Math.sqrt(O),B=Math.atan2(H,_*P);E=Math.sin(E*B)/H,d=Math.sin(d*B)/H}const w=d*P;if(m=m*E+y*w,p=p*E+M*w,S=S*E+T*w,v=v*E+A*w,E===1-d){const H=1/Math.sqrt(m*m+p*p+S*S+v*v);m*=H,p*=H,S*=H,v*=H}}t[i]=m,t[i+1]=p,t[i+2]=S,t[i+3]=v}static multiplyQuaternionsFlat(t,i,r,l,u,h){const d=r[l],m=r[l+1],p=r[l+2],S=r[l+3],v=u[h],y=u[h+1],M=u[h+2],T=u[h+3];return t[i]=d*T+S*v+m*M-p*y,t[i+1]=m*T+S*y+p*v-d*M,t[i+2]=p*T+S*M+d*y-m*v,t[i+3]=S*T-d*v-m*y-p*M,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,r,l){return this._x=t,this._y=i,this._z=r,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){const r=t._x,l=t._y,u=t._z,h=t._order,d=Math.cos,m=Math.sin,p=d(r/2),S=d(l/2),v=d(u/2),y=m(r/2),M=m(l/2),T=m(u/2);switch(h){case"XYZ":this._x=y*S*v+p*M*T,this._y=p*M*v-y*S*T,this._z=p*S*T+y*M*v,this._w=p*S*v-y*M*T;break;case"YXZ":this._x=y*S*v+p*M*T,this._y=p*M*v-y*S*T,this._z=p*S*T-y*M*v,this._w=p*S*v+y*M*T;break;case"ZXY":this._x=y*S*v-p*M*T,this._y=p*M*v+y*S*T,this._z=p*S*T+y*M*v,this._w=p*S*v-y*M*T;break;case"ZYX":this._x=y*S*v-p*M*T,this._y=p*M*v+y*S*T,this._z=p*S*T-y*M*v,this._w=p*S*v+y*M*T;break;case"YZX":this._x=y*S*v+p*M*T,this._y=p*M*v+y*S*T,this._z=p*S*T-y*M*v,this._w=p*S*v-y*M*T;break;case"XZY":this._x=y*S*v-p*M*T,this._y=p*M*v-y*S*T,this._z=p*S*T+y*M*v,this._w=p*S*v+y*M*T;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+h)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const r=i/2,l=Math.sin(r);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,r=i[0],l=i[4],u=i[8],h=i[1],d=i[5],m=i[9],p=i[2],S=i[6],v=i[10],y=r+d+v;if(y>0){const M=.5/Math.sqrt(y+1);this._w=.25/M,this._x=(S-m)*M,this._y=(u-p)*M,this._z=(h-l)*M}else if(r>d&&r>v){const M=2*Math.sqrt(1+r-d-v);this._w=(S-m)/M,this._x=.25*M,this._y=(l+h)/M,this._z=(u+p)/M}else if(d>v){const M=2*Math.sqrt(1+d-r-v);this._w=(u-p)/M,this._x=(l+h)/M,this._y=.25*M,this._z=(m+S)/M}else{const M=2*Math.sqrt(1+v-r-d);this._w=(h-l)/M,this._x=(u+p)/M,this._y=(m+S)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let r=t.dot(i)+1;return r<1e-8?(r=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=r):(this._x=0,this._y=-t.z,this._z=t.y,this._w=r)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=r),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Te(this.dot(t),-1,1)))}rotateTowards(t,i){const r=this.angleTo(t);if(r===0)return this;const l=Math.min(1,i/r);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const r=t._x,l=t._y,u=t._z,h=t._w,d=i._x,m=i._y,p=i._z,S=i._w;return this._x=r*S+h*d+l*p-u*m,this._y=l*S+h*m+u*d-r*p,this._z=u*S+h*p+r*m-l*d,this._w=h*S-r*d-l*m-u*p,this._onChangeCallback(),this}slerp(t,i){if(i===0)return this;if(i===1)return this.copy(t);const r=this._x,l=this._y,u=this._z,h=this._w;let d=h*t._w+r*t._x+l*t._y+u*t._z;if(d<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,d=-d):this.copy(t),d>=1)return this._w=h,this._x=r,this._y=l,this._z=u,this;const m=1-d*d;if(m<=Number.EPSILON){const M=1-i;return this._w=M*h+i*this._w,this._x=M*r+i*this._x,this._y=M*l+i*this._y,this._z=M*u+i*this._z,this.normalize(),this}const p=Math.sqrt(m),S=Math.atan2(p,d),v=Math.sin((1-i)*S)/p,y=Math.sin(i*S)/p;return this._w=h*v+this._w*y,this._x=r*v+this._x*y,this._y=l*v+this._y*y,this._z=u*v+this._z*y,this._onChangeCallback(),this}slerpQuaternions(t,i,r){return this.copy(t).slerp(i,r)}random(){const t=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),r=Math.random(),l=Math.sqrt(1-r),u=Math.sqrt(r);return this.set(l*Math.sin(t),l*Math.cos(t),u*Math.sin(i),u*Math.cos(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class st{constructor(t=0,i=0,r=0){st.prototype.isVector3=!0,this.x=t,this.y=i,this.z=r}set(t,i,r){return r===void 0&&(r=this.z),this.x=t,this.y=i,this.z=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(Uv.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(Uv.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,r=this.y,l=this.z,u=t.elements;return this.x=u[0]*i+u[3]*r+u[6]*l,this.y=u[1]*i+u[4]*r+u[7]*l,this.z=u[2]*i+u[5]*r+u[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,r=this.y,l=this.z,u=t.elements,h=1/(u[3]*i+u[7]*r+u[11]*l+u[15]);return this.x=(u[0]*i+u[4]*r+u[8]*l+u[12])*h,this.y=(u[1]*i+u[5]*r+u[9]*l+u[13])*h,this.z=(u[2]*i+u[6]*r+u[10]*l+u[14])*h,this}applyQuaternion(t){const i=this.x,r=this.y,l=this.z,u=t.x,h=t.y,d=t.z,m=t.w,p=2*(h*l-d*r),S=2*(d*i-u*l),v=2*(u*r-h*i);return this.x=i+m*p+h*v-d*S,this.y=r+m*S+d*p-u*v,this.z=l+m*v+u*S-h*p,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,r=this.y,l=this.z,u=t.elements;return this.x=u[0]*i+u[4]*r+u[8]*l,this.y=u[1]*i+u[5]*r+u[9]*l,this.z=u[2]*i+u[6]*r+u[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=Te(this.x,t.x,i.x),this.y=Te(this.y,t.y,i.y),this.z=Te(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=Te(this.x,t,i),this.y=Te(this.y,t,i),this.z=Te(this.z,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Te(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const r=t.x,l=t.y,u=t.z,h=i.x,d=i.y,m=i.z;return this.x=l*m-u*d,this.y=u*h-r*m,this.z=r*d-l*h,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const r=t.dot(this)/i;return this.copy(t).multiplyScalar(r)}projectOnPlane(t){return Wh.copy(this).projectOnVector(t),this.sub(Wh)}reflect(t){return this.sub(Wh.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(t)/i;return Math.acos(Te(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,r=this.y-t.y,l=this.z-t.z;return i*i+r*r+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,r){const l=Math.sin(i)*t;return this.x=l*Math.sin(r),this.y=Math.cos(i)*t,this.z=l*Math.cos(r),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,r){return this.x=t*Math.sin(i),this.y=r,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),r=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=r,this.z=l,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(t),this.y=i,this.z=r*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Wh=new st,Uv=new cl;class fe{constructor(t,i,r,l,u,h,d,m,p){fe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,r,l,u,h,d,m,p)}set(t,i,r,l,u,h,d,m,p){const S=this.elements;return S[0]=t,S[1]=l,S[2]=d,S[3]=i,S[4]=u,S[5]=m,S[6]=r,S[7]=h,S[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(t,i,r){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const r=t.elements,l=i.elements,u=this.elements,h=r[0],d=r[3],m=r[6],p=r[1],S=r[4],v=r[7],y=r[2],M=r[5],T=r[8],A=l[0],E=l[3],_=l[6],P=l[1],O=l[4],w=l[7],H=l[2],B=l[5],L=l[8];return u[0]=h*A+d*P+m*H,u[3]=h*E+d*O+m*B,u[6]=h*_+d*w+m*L,u[1]=p*A+S*P+v*H,u[4]=p*E+S*O+v*B,u[7]=p*_+S*w+v*L,u[2]=y*A+M*P+T*H,u[5]=y*E+M*O+T*B,u[8]=y*_+M*w+T*L,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],r=t[1],l=t[2],u=t[3],h=t[4],d=t[5],m=t[6],p=t[7],S=t[8];return i*h*S-i*d*p-r*u*S+r*d*m+l*u*p-l*h*m}invert(){const t=this.elements,i=t[0],r=t[1],l=t[2],u=t[3],h=t[4],d=t[5],m=t[6],p=t[7],S=t[8],v=S*h-d*p,y=d*m-S*u,M=p*u-h*m,T=i*v+r*y+l*M;if(T===0)return this.set(0,0,0,0,0,0,0,0,0);const A=1/T;return t[0]=v*A,t[1]=(l*p-S*r)*A,t[2]=(d*r-l*h)*A,t[3]=y*A,t[4]=(S*i-l*m)*A,t[5]=(l*u-d*i)*A,t[6]=M*A,t[7]=(r*m-p*i)*A,t[8]=(h*i-r*u)*A,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,r,l,u,h,d){const m=Math.cos(u),p=Math.sin(u);return this.set(r*m,r*p,-r*(m*h+p*d)+h+t,-l*p,l*m,-l*(-p*h+m*d)+d+i,0,0,1),this}scale(t,i){return this.premultiply(qh.makeScale(t,i)),this}rotate(t){return this.premultiply(qh.makeRotation(-t)),this}translate(t,i){return this.premultiply(qh.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,r=t.elements;for(let l=0;l<9;l++)if(i[l]!==r[l])return!1;return!0}fromArray(t,i=0){for(let r=0;r<9;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){const r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const qh=new fe;function $0(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function fc(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function YM(){const s=fc("canvas");return s.style.display="block",s}const Lv={};function ol(s){s in Lv||(Lv[s]=!0,console.warn(s))}function jM(s,t,i){return new Promise(function(r,l){function u(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:l();break;case s.TIMEOUT_EXPIRED:setTimeout(u,i);break;default:r()}}setTimeout(u,i)})}const Nv=new fe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ov=new fe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function ZM(){const s={enabled:!0,workingColorSpace:Vs,spaces:{},convert:function(l,u,h){return this.enabled===!1||u===h||!u||!h||(this.spaces[u].transfer===ke&&(l.r=ma(l.r),l.g=ma(l.g),l.b=ma(l.b)),this.spaces[u].primaries!==this.spaces[h].primaries&&(l.applyMatrix3(this.spaces[u].toXYZ),l.applyMatrix3(this.spaces[h].fromXYZ)),this.spaces[h].transfer===ke&&(l.r=Is(l.r),l.g=Is(l.g),l.b=Is(l.b))),l},workingToColorSpace:function(l,u){return this.convert(l,this.workingColorSpace,u)},colorSpaceToWorking:function(l,u){return this.convert(l,u,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===Ja?uc:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,u=this.workingColorSpace){return l.fromArray(this.spaces[u].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,u,h){return l.copy(this.spaces[u].toXYZ).multiply(this.spaces[h].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,u){return ol("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(l,u)},toWorkingColorSpace:function(l,u){return ol("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(l,u)}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],r=[.3127,.329];return s.define({[Vs]:{primaries:t,whitePoint:r,transfer:uc,toXYZ:Nv,fromXYZ:Ov,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:_i},outputColorSpaceConfig:{drawingBufferColorSpace:_i}},[_i]:{primaries:t,whitePoint:r,transfer:ke,toXYZ:Nv,fromXYZ:Ov,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:_i}}}),s}const De=ZM();function ma(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Is(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let ys;class KM{static getDataURL(t,i="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let r;if(t instanceof HTMLCanvasElement)r=t;else{ys===void 0&&(ys=fc("canvas")),ys.width=t.width,ys.height=t.height;const l=ys.getContext("2d");t instanceof ImageData?l.putImageData(t,0,0):l.drawImage(t,0,0,t.width,t.height),r=ys}return r.toDataURL(i)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=fc("canvas");i.width=t.width,i.height=t.height;const r=i.getContext("2d");r.drawImage(t,0,0,t.width,t.height);const l=r.getImageData(0,0,t.width,t.height),u=l.data;for(let h=0;h<u.length;h++)u[h]=ma(u[h]/255)*255;return r.putImageData(l,0,0),i}else if(t.data){const i=t.data.slice(0);for(let r=0;r<i.length;r++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[r]=Math.floor(ma(i[r]/255)*255):i[r]=ma(i[r]);return{data:i,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let QM=0;class Cp{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:QM++}),this.uuid=ul(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?t.set(i.videoWidth,i.videoHeight,0):i instanceof VideoFrame?t.set(i.displayHeight,i.displayWidth,0):i!==null?t.set(i.width,i.height,i.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const r={uuid:this.uuid,url:""},l=this.data;if(l!==null){let u;if(Array.isArray(l)){u=[];for(let h=0,d=l.length;h<d;h++)l[h].isDataTexture?u.push(Yh(l[h].image)):u.push(Yh(l[h]))}else u=Yh(l);r.url=u}return i||(t.images[this.uuid]=r),r}}function Yh(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?KM.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let JM=0;const jh=new st;class Pn extends Ks{constructor(t=Pn.DEFAULT_IMAGE,i=Pn.DEFAULT_MAPPING,r=Di,l=Di,u=Xn,h=Lr,d=vi,m=_a,p=Pn.DEFAULT_ANISOTROPY,S=Ja){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:JM++}),this.uuid=ul(),this.name="",this.source=new Cp(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=l,this.magFilter=u,this.minFilter=h,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=m,this.offset=new le(0,0),this.repeat=new le(1,1),this.center=new le(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new fe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=S,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(jh).x}get height(){return this.source.getSize(jh).y}get depth(){return this.source.getSize(jh).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const i in t){const r=t[i];if(r===void 0){console.warn(`THREE.Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Texture.setValues(): property '${i}' does not exist.`);continue}l&&r&&l.isVector2&&r.isVector2||l&&r&&l.isVector3&&r.isVector3||l&&r&&l.isMatrix3&&r.isMatrix3?l.copy(r):this[i]=r}}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(t.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==k0)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Pd:t.x=t.x-Math.floor(t.x);break;case Di:t.x=t.x<0?0:1;break;case Bd:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Pd:t.y=t.y-Math.floor(t.y);break;case Di:t.y=t.y<0?0:1;break;case Bd:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Pn.DEFAULT_IMAGE=null;Pn.DEFAULT_MAPPING=k0;Pn.DEFAULT_ANISOTROPY=1;class en{constructor(t=0,i=0,r=0,l=1){en.prototype.isVector4=!0,this.x=t,this.y=i,this.z=r,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,r,l){return this.x=t,this.y=i,this.z=r,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,r=this.y,l=this.z,u=this.w,h=t.elements;return this.x=h[0]*i+h[4]*r+h[8]*l+h[12]*u,this.y=h[1]*i+h[5]*r+h[9]*l+h[13]*u,this.z=h[2]*i+h[6]*r+h[10]*l+h[14]*u,this.w=h[3]*i+h[7]*r+h[11]*l+h[15]*u,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,r,l,u;const m=t.elements,p=m[0],S=m[4],v=m[8],y=m[1],M=m[5],T=m[9],A=m[2],E=m[6],_=m[10];if(Math.abs(S-y)<.01&&Math.abs(v-A)<.01&&Math.abs(T-E)<.01){if(Math.abs(S+y)<.1&&Math.abs(v+A)<.1&&Math.abs(T+E)<.1&&Math.abs(p+M+_-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const O=(p+1)/2,w=(M+1)/2,H=(_+1)/2,B=(S+y)/4,L=(v+A)/4,j=(T+E)/4;return O>w&&O>H?O<.01?(r=0,l=.707106781,u=.707106781):(r=Math.sqrt(O),l=B/r,u=L/r):w>H?w<.01?(r=.707106781,l=0,u=.707106781):(l=Math.sqrt(w),r=B/l,u=j/l):H<.01?(r=.707106781,l=.707106781,u=0):(u=Math.sqrt(H),r=L/u,l=j/u),this.set(r,l,u,i),this}let P=Math.sqrt((E-T)*(E-T)+(v-A)*(v-A)+(y-S)*(y-S));return Math.abs(P)<.001&&(P=1),this.x=(E-T)/P,this.y=(v-A)/P,this.z=(y-S)/P,this.w=Math.acos((p+M+_-1)/2),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=Te(this.x,t.x,i.x),this.y=Te(this.y,t.y,i.y),this.z=Te(this.z,t.z,i.z),this.w=Te(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=Te(this.x,t,i),this.y=Te(this.y,t,i),this.z=Te(this.z,t,i),this.w=Te(this.w,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Te(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this.w=t.w+(i.w-t.w)*r,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class $M extends Ks{constructor(t=1,i=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Xn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=r.depth,this.scissor=new en(0,0,t,i),this.scissorTest=!1,this.viewport=new en(0,0,t,i);const l={width:t,height:i,depth:r.depth},u=new Pn(l);this.textures=[];const h=r.count;for(let d=0;d<h;d++)this.textures[d]=u.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(t={}){const i={minFilter:Xn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(i.mapping=t.mapping),t.wrapS!==void 0&&(i.wrapS=t.wrapS),t.wrapT!==void 0&&(i.wrapT=t.wrapT),t.wrapR!==void 0&&(i.wrapR=t.wrapR),t.magFilter!==void 0&&(i.magFilter=t.magFilter),t.minFilter!==void 0&&(i.minFilter=t.minFilter),t.format!==void 0&&(i.format=t.format),t.type!==void 0&&(i.type=t.type),t.anisotropy!==void 0&&(i.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(i.colorSpace=t.colorSpace),t.flipY!==void 0&&(i.flipY=t.flipY),t.generateMipmaps!==void 0&&(i.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(i.internalFormat=t.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(i)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,i,r=1){if(this.width!==t||this.height!==i||this.depth!==r){this.width=t,this.height=i,this.depth=r;for(let l=0,u=this.textures.length;l<u;l++)this.textures[l].image.width=t,this.textures[l].image.height=i,this.textures[l].image.depth=r,this.textures[l].isArrayTexture=this.textures[l].image.depth>1;this.dispose()}this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,r=t.textures.length;i<r;i++){this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},t.textures[i].image);this.textures[i].source=new Cp(l)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class nr extends $M{constructor(t=1,i=1,r={}){super(t,i,r),this.isWebGLRenderTarget=!0}}class tS extends Pn{constructor(t=null,i=1,r=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:r,depth:l},this.magFilter=si,this.minFilter=si,this.wrapR=Di,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class tE extends Pn{constructor(t=null,i=1,r=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:r,depth:l},this.magFilter=si,this.minFilter=si,this.wrapR=Di,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class fl{constructor(t=new st(1/0,1/0,1/0),i=new st(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,r=t.length;i<r;i+=3)this.expandByPoint(Ti.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,r=t.count;i<r;i++)this.expandByPoint(Ti.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,r=t.length;i<r;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const r=Ti.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(r),this.max.copy(t).add(r),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const r=t.geometry;if(r!==void 0){const u=r.getAttribute("position");if(i===!0&&u!==void 0&&t.isInstancedMesh!==!0)for(let h=0,d=u.count;h<d;h++)t.isMesh===!0?t.getVertexPosition(h,Ti):Ti.fromBufferAttribute(u,h),Ti.applyMatrix4(t.matrixWorld),this.expandByPoint(Ti);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Au.copy(t.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),Au.copy(r.boundingBox)),Au.applyMatrix4(t.matrixWorld),this.union(Au)}const l=t.children;for(let u=0,h=l.length;u<h;u++)this.expandByObject(l[u],i);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Ti),Ti.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,r;return t.normal.x>0?(i=t.normal.x*this.min.x,r=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,r=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,r+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,r+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,r+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,r+=t.normal.z*this.min.z),i<=-t.constant&&r>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Yo),Ru.subVectors(this.max,Yo),Ms.subVectors(t.a,Yo),Es.subVectors(t.b,Yo),Ts.subVectors(t.c,Yo),Wa.subVectors(Es,Ms),qa.subVectors(Ts,Es),Mr.subVectors(Ms,Ts);let i=[0,-Wa.z,Wa.y,0,-qa.z,qa.y,0,-Mr.z,Mr.y,Wa.z,0,-Wa.x,qa.z,0,-qa.x,Mr.z,0,-Mr.x,-Wa.y,Wa.x,0,-qa.y,qa.x,0,-Mr.y,Mr.x,0];return!Zh(i,Ms,Es,Ts,Ru)||(i=[1,0,0,0,1,0,0,0,1],!Zh(i,Ms,Es,Ts,Ru))?!1:(Cu.crossVectors(Wa,qa),i=[Cu.x,Cu.y,Cu.z],Zh(i,Ms,Es,Ts,Ru))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ti).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ti).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(oa[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),oa[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),oa[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),oa[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),oa[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),oa[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),oa[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),oa[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(oa),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const oa=[new st,new st,new st,new st,new st,new st,new st,new st],Ti=new st,Au=new fl,Ms=new st,Es=new st,Ts=new st,Wa=new st,qa=new st,Mr=new st,Yo=new st,Ru=new st,Cu=new st,Er=new st;function Zh(s,t,i,r,l){for(let u=0,h=s.length-3;u<=h;u+=3){Er.fromArray(s,u);const d=l.x*Math.abs(Er.x)+l.y*Math.abs(Er.y)+l.z*Math.abs(Er.z),m=t.dot(Er),p=i.dot(Er),S=r.dot(Er);if(Math.max(-Math.max(m,p,S),Math.min(m,p,S))>d)return!1}return!0}const eE=new fl,jo=new st,Kh=new st;class yc{constructor(t=new st,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const r=this.center;i!==void 0?r.copy(i):eE.setFromPoints(t).getCenter(r);let l=0;for(let u=0,h=t.length;u<h;u++)l=Math.max(l,r.distanceToSquared(t[u]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const r=this.center.distanceToSquared(t);return i.copy(t),r>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;jo.subVectors(t,this.center);const i=jo.lengthSq();if(i>this.radius*this.radius){const r=Math.sqrt(i),l=(r-this.radius)*.5;this.center.addScaledVector(jo,l/r),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Kh.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(jo.copy(t.center).add(Kh)),this.expandByPoint(jo.copy(t.center).sub(Kh))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const la=new st,Qh=new st,wu=new st,Ya=new st,Jh=new st,Du=new st,$h=new st;class eS{constructor(t=new st,i=new st(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,la)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const r=i.dot(this.direction);return r<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=la.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):(la.copy(this.origin).addScaledVector(this.direction,i),la.distanceToSquared(t))}distanceSqToSegment(t,i,r,l){Qh.copy(t).add(i).multiplyScalar(.5),wu.copy(i).sub(t).normalize(),Ya.copy(this.origin).sub(Qh);const u=t.distanceTo(i)*.5,h=-this.direction.dot(wu),d=Ya.dot(this.direction),m=-Ya.dot(wu),p=Ya.lengthSq(),S=Math.abs(1-h*h);let v,y,M,T;if(S>0)if(v=h*m-d,y=h*d-m,T=u*S,v>=0)if(y>=-T)if(y<=T){const A=1/S;v*=A,y*=A,M=v*(v+h*y+2*d)+y*(h*v+y+2*m)+p}else y=u,v=Math.max(0,-(h*y+d)),M=-v*v+y*(y+2*m)+p;else y=-u,v=Math.max(0,-(h*y+d)),M=-v*v+y*(y+2*m)+p;else y<=-T?(v=Math.max(0,-(-h*u+d)),y=v>0?-u:Math.min(Math.max(-u,-m),u),M=-v*v+y*(y+2*m)+p):y<=T?(v=0,y=Math.min(Math.max(-u,-m),u),M=y*(y+2*m)+p):(v=Math.max(0,-(h*u+d)),y=v>0?u:Math.min(Math.max(-u,-m),u),M=-v*v+y*(y+2*m)+p);else y=h>0?-u:u,v=Math.max(0,-(h*y+d)),M=-v*v+y*(y+2*m)+p;return r&&r.copy(this.origin).addScaledVector(this.direction,v),l&&l.copy(Qh).addScaledVector(wu,y),M}intersectSphere(t,i){la.subVectors(t.center,this.origin);const r=la.dot(this.direction),l=la.dot(la)-r*r,u=t.radius*t.radius;if(l>u)return null;const h=Math.sqrt(u-l),d=r-h,m=r+h;return m<0?null:d<0?this.at(m,i):this.at(d,i)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(t.normal)+t.constant)/i;return r>=0?r:null}intersectPlane(t,i){const r=this.distanceToPlane(t);return r===null?null:this.at(r,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let r,l,u,h,d,m;const p=1/this.direction.x,S=1/this.direction.y,v=1/this.direction.z,y=this.origin;return p>=0?(r=(t.min.x-y.x)*p,l=(t.max.x-y.x)*p):(r=(t.max.x-y.x)*p,l=(t.min.x-y.x)*p),S>=0?(u=(t.min.y-y.y)*S,h=(t.max.y-y.y)*S):(u=(t.max.y-y.y)*S,h=(t.min.y-y.y)*S),r>h||u>l||((u>r||isNaN(r))&&(r=u),(h<l||isNaN(l))&&(l=h),v>=0?(d=(t.min.z-y.z)*v,m=(t.max.z-y.z)*v):(d=(t.max.z-y.z)*v,m=(t.min.z-y.z)*v),r>m||d>l)||((d>r||r!==r)&&(r=d),(m<l||l!==l)&&(l=m),l<0)?null:this.at(r>=0?r:l,i)}intersectsBox(t){return this.intersectBox(t,la)!==null}intersectTriangle(t,i,r,l,u){Jh.subVectors(i,t),Du.subVectors(r,t),$h.crossVectors(Jh,Du);let h=this.direction.dot($h),d;if(h>0){if(l)return null;d=1}else if(h<0)d=-1,h=-h;else return null;Ya.subVectors(this.origin,t);const m=d*this.direction.dot(Du.crossVectors(Ya,Du));if(m<0)return null;const p=d*this.direction.dot(Jh.cross(Ya));if(p<0||m+p>h)return null;const S=-d*Ya.dot($h);return S<0?null:this.at(S/h,u)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class dn{constructor(t,i,r,l,u,h,d,m,p,S,v,y,M,T,A,E){dn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,r,l,u,h,d,m,p,S,v,y,M,T,A,E)}set(t,i,r,l,u,h,d,m,p,S,v,y,M,T,A,E){const _=this.elements;return _[0]=t,_[4]=i,_[8]=r,_[12]=l,_[1]=u,_[5]=h,_[9]=d,_[13]=m,_[2]=p,_[6]=S,_[10]=v,_[14]=y,_[3]=M,_[7]=T,_[11]=A,_[15]=E,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new dn().fromArray(this.elements)}copy(t){const i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(t){const i=this.elements,r=t.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,r){return t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(t,i,r){return this.set(t.x,i.x,r.x,0,t.y,i.y,r.y,0,t.z,i.z,r.z,0,0,0,0,1),this}extractRotation(t){const i=this.elements,r=t.elements,l=1/bs.setFromMatrixColumn(t,0).length(),u=1/bs.setFromMatrixColumn(t,1).length(),h=1/bs.setFromMatrixColumn(t,2).length();return i[0]=r[0]*l,i[1]=r[1]*l,i[2]=r[2]*l,i[3]=0,i[4]=r[4]*u,i[5]=r[5]*u,i[6]=r[6]*u,i[7]=0,i[8]=r[8]*h,i[9]=r[9]*h,i[10]=r[10]*h,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,r=t.x,l=t.y,u=t.z,h=Math.cos(r),d=Math.sin(r),m=Math.cos(l),p=Math.sin(l),S=Math.cos(u),v=Math.sin(u);if(t.order==="XYZ"){const y=h*S,M=h*v,T=d*S,A=d*v;i[0]=m*S,i[4]=-m*v,i[8]=p,i[1]=M+T*p,i[5]=y-A*p,i[9]=-d*m,i[2]=A-y*p,i[6]=T+M*p,i[10]=h*m}else if(t.order==="YXZ"){const y=m*S,M=m*v,T=p*S,A=p*v;i[0]=y+A*d,i[4]=T*d-M,i[8]=h*p,i[1]=h*v,i[5]=h*S,i[9]=-d,i[2]=M*d-T,i[6]=A+y*d,i[10]=h*m}else if(t.order==="ZXY"){const y=m*S,M=m*v,T=p*S,A=p*v;i[0]=y-A*d,i[4]=-h*v,i[8]=T+M*d,i[1]=M+T*d,i[5]=h*S,i[9]=A-y*d,i[2]=-h*p,i[6]=d,i[10]=h*m}else if(t.order==="ZYX"){const y=h*S,M=h*v,T=d*S,A=d*v;i[0]=m*S,i[4]=T*p-M,i[8]=y*p+A,i[1]=m*v,i[5]=A*p+y,i[9]=M*p-T,i[2]=-p,i[6]=d*m,i[10]=h*m}else if(t.order==="YZX"){const y=h*m,M=h*p,T=d*m,A=d*p;i[0]=m*S,i[4]=A-y*v,i[8]=T*v+M,i[1]=v,i[5]=h*S,i[9]=-d*S,i[2]=-p*S,i[6]=M*v+T,i[10]=y-A*v}else if(t.order==="XZY"){const y=h*m,M=h*p,T=d*m,A=d*p;i[0]=m*S,i[4]=-v,i[8]=p*S,i[1]=y*v+A,i[5]=h*S,i[9]=M*v-T,i[2]=T*v-M,i[6]=d*S,i[10]=A*v+y}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(nE,t,iE)}lookAt(t,i,r){const l=this.elements;return ni.subVectors(t,i),ni.lengthSq()===0&&(ni.z=1),ni.normalize(),ja.crossVectors(r,ni),ja.lengthSq()===0&&(Math.abs(r.z)===1?ni.x+=1e-4:ni.z+=1e-4,ni.normalize(),ja.crossVectors(r,ni)),ja.normalize(),Uu.crossVectors(ni,ja),l[0]=ja.x,l[4]=Uu.x,l[8]=ni.x,l[1]=ja.y,l[5]=Uu.y,l[9]=ni.y,l[2]=ja.z,l[6]=Uu.z,l[10]=ni.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const r=t.elements,l=i.elements,u=this.elements,h=r[0],d=r[4],m=r[8],p=r[12],S=r[1],v=r[5],y=r[9],M=r[13],T=r[2],A=r[6],E=r[10],_=r[14],P=r[3],O=r[7],w=r[11],H=r[15],B=l[0],L=l[4],j=l[8],D=l[12],C=l[1],V=l[5],tt=l[9],ct=l[13],ft=l[2],dt=l[6],z=l[10],q=l[14],W=l[3],mt=l[7],yt=l[11],N=l[15];return u[0]=h*B+d*C+m*ft+p*W,u[4]=h*L+d*V+m*dt+p*mt,u[8]=h*j+d*tt+m*z+p*yt,u[12]=h*D+d*ct+m*q+p*N,u[1]=S*B+v*C+y*ft+M*W,u[5]=S*L+v*V+y*dt+M*mt,u[9]=S*j+v*tt+y*z+M*yt,u[13]=S*D+v*ct+y*q+M*N,u[2]=T*B+A*C+E*ft+_*W,u[6]=T*L+A*V+E*dt+_*mt,u[10]=T*j+A*tt+E*z+_*yt,u[14]=T*D+A*ct+E*q+_*N,u[3]=P*B+O*C+w*ft+H*W,u[7]=P*L+O*V+w*dt+H*mt,u[11]=P*j+O*tt+w*z+H*yt,u[15]=P*D+O*ct+w*q+H*N,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],r=t[4],l=t[8],u=t[12],h=t[1],d=t[5],m=t[9],p=t[13],S=t[2],v=t[6],y=t[10],M=t[14],T=t[3],A=t[7],E=t[11],_=t[15];return T*(+u*m*v-l*p*v-u*d*y+r*p*y+l*d*M-r*m*M)+A*(+i*m*M-i*p*y+u*h*y-l*h*M+l*p*S-u*m*S)+E*(+i*p*v-i*d*M-u*h*v+r*h*M+u*d*S-r*p*S)+_*(-l*d*S-i*m*v+i*d*y+l*h*v-r*h*y+r*m*S)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,r){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=i,l[14]=r),this}invert(){const t=this.elements,i=t[0],r=t[1],l=t[2],u=t[3],h=t[4],d=t[5],m=t[6],p=t[7],S=t[8],v=t[9],y=t[10],M=t[11],T=t[12],A=t[13],E=t[14],_=t[15],P=v*E*p-A*y*p+A*m*M-d*E*M-v*m*_+d*y*_,O=T*y*p-S*E*p-T*m*M+h*E*M+S*m*_-h*y*_,w=S*A*p-T*v*p+T*d*M-h*A*M-S*d*_+h*v*_,H=T*v*m-S*A*m-T*d*y+h*A*y+S*d*E-h*v*E,B=i*P+r*O+l*w+u*H;if(B===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const L=1/B;return t[0]=P*L,t[1]=(A*y*u-v*E*u-A*l*M+r*E*M+v*l*_-r*y*_)*L,t[2]=(d*E*u-A*m*u+A*l*p-r*E*p-d*l*_+r*m*_)*L,t[3]=(v*m*u-d*y*u-v*l*p+r*y*p+d*l*M-r*m*M)*L,t[4]=O*L,t[5]=(S*E*u-T*y*u+T*l*M-i*E*M-S*l*_+i*y*_)*L,t[6]=(T*m*u-h*E*u-T*l*p+i*E*p+h*l*_-i*m*_)*L,t[7]=(h*y*u-S*m*u+S*l*p-i*y*p-h*l*M+i*m*M)*L,t[8]=w*L,t[9]=(T*v*u-S*A*u-T*r*M+i*A*M+S*r*_-i*v*_)*L,t[10]=(h*A*u-T*d*u+T*r*p-i*A*p-h*r*_+i*d*_)*L,t[11]=(S*d*u-h*v*u-S*r*p+i*v*p+h*r*M-i*d*M)*L,t[12]=H*L,t[13]=(S*A*l-T*v*l+T*r*y-i*A*y-S*r*E+i*v*E)*L,t[14]=(T*d*l-h*A*l-T*r*m+i*A*m+h*r*E-i*d*E)*L,t[15]=(h*v*l-S*d*l+S*r*m-i*v*m-h*r*y+i*d*y)*L,this}scale(t){const i=this.elements,r=t.x,l=t.y,u=t.z;return i[0]*=r,i[4]*=l,i[8]*=u,i[1]*=r,i[5]*=l,i[9]*=u,i[2]*=r,i[6]*=l,i[10]*=u,i[3]*=r,i[7]*=l,i[11]*=u,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],r=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,r,l))}makeTranslation(t,i,r){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),r=Math.sin(t);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const r=Math.cos(i),l=Math.sin(i),u=1-r,h=t.x,d=t.y,m=t.z,p=u*h,S=u*d;return this.set(p*h+r,p*d-l*m,p*m+l*d,0,p*d+l*m,S*d+r,S*m-l*h,0,p*m-l*d,S*m+l*h,u*m*m+r,0,0,0,0,1),this}makeScale(t,i,r){return this.set(t,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(t,i,r,l,u,h){return this.set(1,r,u,0,t,1,h,0,i,l,1,0,0,0,0,1),this}compose(t,i,r){const l=this.elements,u=i._x,h=i._y,d=i._z,m=i._w,p=u+u,S=h+h,v=d+d,y=u*p,M=u*S,T=u*v,A=h*S,E=h*v,_=d*v,P=m*p,O=m*S,w=m*v,H=r.x,B=r.y,L=r.z;return l[0]=(1-(A+_))*H,l[1]=(M+w)*H,l[2]=(T-O)*H,l[3]=0,l[4]=(M-w)*B,l[5]=(1-(y+_))*B,l[6]=(E+P)*B,l[7]=0,l[8]=(T+O)*L,l[9]=(E-P)*L,l[10]=(1-(y+A))*L,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,i,r){const l=this.elements;let u=bs.set(l[0],l[1],l[2]).length();const h=bs.set(l[4],l[5],l[6]).length(),d=bs.set(l[8],l[9],l[10]).length();this.determinant()<0&&(u=-u),t.x=l[12],t.y=l[13],t.z=l[14],bi.copy(this);const p=1/u,S=1/h,v=1/d;return bi.elements[0]*=p,bi.elements[1]*=p,bi.elements[2]*=p,bi.elements[4]*=S,bi.elements[5]*=S,bi.elements[6]*=S,bi.elements[8]*=v,bi.elements[9]*=v,bi.elements[10]*=v,i.setFromRotationMatrix(bi),r.x=u,r.y=h,r.z=d,this}makePerspective(t,i,r,l,u,h,d=Vi,m=!1){const p=this.elements,S=2*u/(i-t),v=2*u/(r-l),y=(i+t)/(i-t),M=(r+l)/(r-l);let T,A;if(m)T=u/(h-u),A=h*u/(h-u);else if(d===Vi)T=-(h+u)/(h-u),A=-2*h*u/(h-u);else if(d===cc)T=-h/(h-u),A=-h*u/(h-u);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return p[0]=S,p[4]=0,p[8]=y,p[12]=0,p[1]=0,p[5]=v,p[9]=M,p[13]=0,p[2]=0,p[6]=0,p[10]=T,p[14]=A,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(t,i,r,l,u,h,d=Vi,m=!1){const p=this.elements,S=2/(i-t),v=2/(r-l),y=-(i+t)/(i-t),M=-(r+l)/(r-l);let T,A;if(m)T=1/(h-u),A=h/(h-u);else if(d===Vi)T=-2/(h-u),A=-(h+u)/(h-u);else if(d===cc)T=-1/(h-u),A=-u/(h-u);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return p[0]=S,p[4]=0,p[8]=0,p[12]=y,p[1]=0,p[5]=v,p[9]=0,p[13]=M,p[2]=0,p[6]=0,p[10]=T,p[14]=A,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(t){const i=this.elements,r=t.elements;for(let l=0;l<16;l++)if(i[l]!==r[l])return!1;return!0}fromArray(t,i=0){for(let r=0;r<16;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){const r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t[i+9]=r[9],t[i+10]=r[10],t[i+11]=r[11],t[i+12]=r[12],t[i+13]=r[13],t[i+14]=r[14],t[i+15]=r[15],t}}const bs=new st,bi=new dn,nE=new st(0,0,0),iE=new st(1,1,1),ja=new st,Uu=new st,ni=new st,zv=new dn,Pv=new cl;class va{constructor(t=0,i=0,r=0,l=va.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=r,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,r,l=this._order){return this._x=t,this._y=i,this._z=r,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,r=!0){const l=t.elements,u=l[0],h=l[4],d=l[8],m=l[1],p=l[5],S=l[9],v=l[2],y=l[6],M=l[10];switch(i){case"XYZ":this._y=Math.asin(Te(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-S,M),this._z=Math.atan2(-h,u)):(this._x=Math.atan2(y,p),this._z=0);break;case"YXZ":this._x=Math.asin(-Te(S,-1,1)),Math.abs(S)<.9999999?(this._y=Math.atan2(d,M),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-v,u),this._z=0);break;case"ZXY":this._x=Math.asin(Te(y,-1,1)),Math.abs(y)<.9999999?(this._y=Math.atan2(-v,M),this._z=Math.atan2(-h,p)):(this._y=0,this._z=Math.atan2(m,u));break;case"ZYX":this._y=Math.asin(-Te(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(y,M),this._z=Math.atan2(m,u)):(this._x=0,this._z=Math.atan2(-h,p));break;case"YZX":this._z=Math.asin(Te(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-S,p),this._y=Math.atan2(-v,u)):(this._x=0,this._y=Math.atan2(d,M));break;case"XZY":this._z=Math.asin(-Te(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(y,p),this._y=Math.atan2(d,u)):(this._x=Math.atan2(-S,M),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,r){return zv.makeRotationFromQuaternion(t),this.setFromRotationMatrix(zv,i,r)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return Pv.setFromEuler(this),this.setFromQuaternion(Pv,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}va.DEFAULT_ORDER="XYZ";class nS{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let aE=0;const Bv=new st,As=new cl,ua=new dn,Lu=new st,Zo=new st,rE=new st,sE=new cl,Iv=new st(1,0,0),Fv=new st(0,1,0),Hv=new st(0,0,1),Gv={type:"added"},oE={type:"removed"},Rs={type:"childadded",child:null},td={type:"childremoved",child:null};class Yn extends Ks{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:aE++}),this.uuid=ul(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Yn.DEFAULT_UP.clone();const t=new st,i=new va,r=new cl,l=new st(1,1,1);function u(){r.setFromEuler(i,!1)}function h(){i.setFromQuaternion(r,void 0,!1)}i._onChange(u),r._onChange(h),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new dn},normalMatrix:{value:new fe}}),this.matrix=new dn,this.matrixWorld=new dn,this.matrixAutoUpdate=Yn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Yn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new nS,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return As.setFromAxisAngle(t,i),this.quaternion.multiply(As),this}rotateOnWorldAxis(t,i){return As.setFromAxisAngle(t,i),this.quaternion.premultiply(As),this}rotateX(t){return this.rotateOnAxis(Iv,t)}rotateY(t){return this.rotateOnAxis(Fv,t)}rotateZ(t){return this.rotateOnAxis(Hv,t)}translateOnAxis(t,i){return Bv.copy(t).applyQuaternion(this.quaternion),this.position.add(Bv.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(Iv,t)}translateY(t){return this.translateOnAxis(Fv,t)}translateZ(t){return this.translateOnAxis(Hv,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ua.copy(this.matrixWorld).invert())}lookAt(t,i,r){t.isVector3?Lu.copy(t):Lu.set(t,i,r);const l=this.parent;this.updateWorldMatrix(!0,!1),Zo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ua.lookAt(Zo,Lu,this.up):ua.lookAt(Lu,Zo,this.up),this.quaternion.setFromRotationMatrix(ua),l&&(ua.extractRotation(l.matrixWorld),As.setFromRotationMatrix(ua),this.quaternion.premultiply(As.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Gv),Rs.child=t,this.dispatchEvent(Rs),Rs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(oE),td.child=t,this.dispatchEvent(td),td.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ua.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ua.multiply(t.parent.matrixWorld)),t.applyMatrix4(ua),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Gv),Rs.child=t,this.dispatchEvent(Rs),Rs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let r=0,l=this.children.length;r<l;r++){const h=this.children[r].getObjectByProperty(t,i);if(h!==void 0)return h}}getObjectsByProperty(t,i,r=[]){this[t]===i&&r.push(this);const l=this.children;for(let u=0,h=l.length;u<h;u++)l[u].getObjectsByProperty(t,i,r);return r}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Zo,t,rE),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Zo,sE,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].updateMatrixWorld(t)}updateWorldMatrix(t,i){const r=this.parent;if(t===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let u=0,h=l.length;u<h;u++)l[u].updateWorldMatrix(!1,!0)}}toJSON(t){const i=t===void 0||typeof t=="string",r={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(d=>({...d})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(t),l.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function u(d,m){return d[m.uuid]===void 0&&(d[m.uuid]=m.toJSON(t)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=u(t.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const m=d.shapes;if(Array.isArray(m))for(let p=0,S=m.length;p<S;p++){const v=m[p];u(t.shapes,v)}else u(t.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(u(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let m=0,p=this.material.length;m<p;m++)d.push(u(t.materials,this.material[m]));l.material=d}else l.material=u(t.materials,this.material);if(this.children.length>0){l.children=[];for(let d=0;d<this.children.length;d++)l.children.push(this.children[d].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let d=0;d<this.animations.length;d++){const m=this.animations[d];l.animations.push(u(t.animations,m))}}if(i){const d=h(t.geometries),m=h(t.materials),p=h(t.textures),S=h(t.images),v=h(t.shapes),y=h(t.skeletons),M=h(t.animations),T=h(t.nodes);d.length>0&&(r.geometries=d),m.length>0&&(r.materials=m),p.length>0&&(r.textures=p),S.length>0&&(r.images=S),v.length>0&&(r.shapes=v),y.length>0&&(r.skeletons=y),M.length>0&&(r.animations=M),T.length>0&&(r.nodes=T)}return r.object=l,r;function h(d){const m=[];for(const p in d){const S=d[p];delete S.metadata,m.push(S)}return m}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let r=0;r<t.children.length;r++){const l=t.children[r];this.add(l.clone())}return this}}Yn.DEFAULT_UP=new st(0,1,0);Yn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Yn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ai=new st,ca=new st,ed=new st,fa=new st,Cs=new st,ws=new st,Vv=new st,nd=new st,id=new st,ad=new st,rd=new en,sd=new en,od=new en;class wi{constructor(t=new st,i=new st,r=new st){this.a=t,this.b=i,this.c=r}static getNormal(t,i,r,l){l.subVectors(r,i),Ai.subVectors(t,i),l.cross(Ai);const u=l.lengthSq();return u>0?l.multiplyScalar(1/Math.sqrt(u)):l.set(0,0,0)}static getBarycoord(t,i,r,l,u){Ai.subVectors(l,i),ca.subVectors(r,i),ed.subVectors(t,i);const h=Ai.dot(Ai),d=Ai.dot(ca),m=Ai.dot(ed),p=ca.dot(ca),S=ca.dot(ed),v=h*p-d*d;if(v===0)return u.set(0,0,0),null;const y=1/v,M=(p*m-d*S)*y,T=(h*S-d*m)*y;return u.set(1-M-T,T,M)}static containsPoint(t,i,r,l){return this.getBarycoord(t,i,r,l,fa)===null?!1:fa.x>=0&&fa.y>=0&&fa.x+fa.y<=1}static getInterpolation(t,i,r,l,u,h,d,m){return this.getBarycoord(t,i,r,l,fa)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(u,fa.x),m.addScaledVector(h,fa.y),m.addScaledVector(d,fa.z),m)}static getInterpolatedAttribute(t,i,r,l,u,h){return rd.setScalar(0),sd.setScalar(0),od.setScalar(0),rd.fromBufferAttribute(t,i),sd.fromBufferAttribute(t,r),od.fromBufferAttribute(t,l),h.setScalar(0),h.addScaledVector(rd,u.x),h.addScaledVector(sd,u.y),h.addScaledVector(od,u.z),h}static isFrontFacing(t,i,r,l){return Ai.subVectors(r,i),ca.subVectors(t,i),Ai.cross(ca).dot(l)<0}set(t,i,r){return this.a.copy(t),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(t,i,r,l){return this.a.copy(t[i]),this.b.copy(t[r]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,i,r,l){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,r),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ai.subVectors(this.c,this.b),ca.subVectors(this.a,this.b),Ai.cross(ca).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return wi.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return wi.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,r,l,u){return wi.getInterpolation(t,this.a,this.b,this.c,i,r,l,u)}containsPoint(t){return wi.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return wi.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const r=this.a,l=this.b,u=this.c;let h,d;Cs.subVectors(l,r),ws.subVectors(u,r),nd.subVectors(t,r);const m=Cs.dot(nd),p=ws.dot(nd);if(m<=0&&p<=0)return i.copy(r);id.subVectors(t,l);const S=Cs.dot(id),v=ws.dot(id);if(S>=0&&v<=S)return i.copy(l);const y=m*v-S*p;if(y<=0&&m>=0&&S<=0)return h=m/(m-S),i.copy(r).addScaledVector(Cs,h);ad.subVectors(t,u);const M=Cs.dot(ad),T=ws.dot(ad);if(T>=0&&M<=T)return i.copy(u);const A=M*p-m*T;if(A<=0&&p>=0&&T<=0)return d=p/(p-T),i.copy(r).addScaledVector(ws,d);const E=S*T-M*v;if(E<=0&&v-S>=0&&M-T>=0)return Vv.subVectors(u,l),d=(v-S)/(v-S+(M-T)),i.copy(l).addScaledVector(Vv,d);const _=1/(E+A+y);return h=A*_,d=y*_,i.copy(r).addScaledVector(Cs,h).addScaledVector(ws,d)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const iS={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Za={h:0,s:0,l:0},Nu={h:0,s:0,l:0};function ld(s,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?s+(t-s)*6*i:i<1/2?t:i<2/3?s+(t-s)*6*(2/3-i):s}class Ne{constructor(t,i,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,r)}set(t,i,r){if(i===void 0&&r===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,i,r);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=_i){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,De.colorSpaceToWorking(this,i),this}setRGB(t,i,r,l=De.workingColorSpace){return this.r=t,this.g=i,this.b=r,De.colorSpaceToWorking(this,l),this}setHSL(t,i,r,l=De.workingColorSpace){if(t=qM(t,1),i=Te(i,0,1),r=Te(r,0,1),i===0)this.r=this.g=this.b=r;else{const u=r<=.5?r*(1+i):r+i-r*i,h=2*r-u;this.r=ld(h,u,t+1/3),this.g=ld(h,u,t),this.b=ld(h,u,t-1/3)}return De.colorSpaceToWorking(this,l),this}setStyle(t,i=_i){function r(u){u!==void 0&&parseFloat(u)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let u;const h=l[1],d=l[2];switch(h){case"rgb":case"rgba":if(u=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(u[4]),this.setRGB(Math.min(255,parseInt(u[1],10))/255,Math.min(255,parseInt(u[2],10))/255,Math.min(255,parseInt(u[3],10))/255,i);if(u=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(u[4]),this.setRGB(Math.min(100,parseInt(u[1],10))/100,Math.min(100,parseInt(u[2],10))/100,Math.min(100,parseInt(u[3],10))/100,i);break;case"hsl":case"hsla":if(u=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(u[4]),this.setHSL(parseFloat(u[1])/360,parseFloat(u[2])/100,parseFloat(u[3])/100,i);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const u=l[1],h=u.length;if(h===3)return this.setRGB(parseInt(u.charAt(0),16)/15,parseInt(u.charAt(1),16)/15,parseInt(u.charAt(2),16)/15,i);if(h===6)return this.setHex(parseInt(u,16),i);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=_i){const r=iS[t.toLowerCase()];return r!==void 0?this.setHex(r,i):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ma(t.r),this.g=ma(t.g),this.b=ma(t.b),this}copyLinearToSRGB(t){return this.r=Is(t.r),this.g=Is(t.g),this.b=Is(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=_i){return De.workingToColorSpace(Un.copy(this),t),Math.round(Te(Un.r*255,0,255))*65536+Math.round(Te(Un.g*255,0,255))*256+Math.round(Te(Un.b*255,0,255))}getHexString(t=_i){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=De.workingColorSpace){De.workingToColorSpace(Un.copy(this),i);const r=Un.r,l=Un.g,u=Un.b,h=Math.max(r,l,u),d=Math.min(r,l,u);let m,p;const S=(d+h)/2;if(d===h)m=0,p=0;else{const v=h-d;switch(p=S<=.5?v/(h+d):v/(2-h-d),h){case r:m=(l-u)/v+(l<u?6:0);break;case l:m=(u-r)/v+2;break;case u:m=(r-l)/v+4;break}m/=6}return t.h=m,t.s=p,t.l=S,t}getRGB(t,i=De.workingColorSpace){return De.workingToColorSpace(Un.copy(this),i),t.r=Un.r,t.g=Un.g,t.b=Un.b,t}getStyle(t=_i){De.workingToColorSpace(Un.copy(this),t);const i=Un.r,r=Un.g,l=Un.b;return t!==_i?`color(${t} ${i.toFixed(3)} ${r.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(r*255)},${Math.round(l*255)})`}offsetHSL(t,i,r){return this.getHSL(Za),this.setHSL(Za.h+t,Za.s+i,Za.l+r)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,r){return this.r=t.r+(i.r-t.r)*r,this.g=t.g+(i.g-t.g)*r,this.b=t.b+(i.b-t.b)*r,this}lerpHSL(t,i){this.getHSL(Za),t.getHSL(Nu);const r=Xh(Za.h,Nu.h,i),l=Xh(Za.s,Nu.s,i),u=Xh(Za.l,Nu.l,i);return this.setHSL(r,l,u),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,r=this.g,l=this.b,u=t.elements;return this.r=u[0]*i+u[3]*r+u[6]*l,this.g=u[1]*i+u[4]*r+u[7]*l,this.b=u[2]*i+u[5]*r+u[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Un=new Ne;Ne.NAMES=iS;let lE=0;class hl extends Ks{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:lE++}),this.uuid=ul(),this.name="",this.type="Material",this.blending=Bs,this.side=er,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=bd,this.blendDst=Ad,this.blendEquation=Dr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ne(0,0,0),this.blendAlpha=0,this.depthFunc=Fs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Cv,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=xs,this.stencilZFail=xs,this.stencilZPass=xs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const r=t[i];if(r===void 0){console.warn(`THREE.Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(r):l&&l.isVector3&&r&&r.isVector3?l.copy(r):this[i]=r}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(t).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(t).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(t).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(t).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(t).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Bs&&(r.blending=this.blending),this.side!==er&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==bd&&(r.blendSrc=this.blendSrc),this.blendDst!==Ad&&(r.blendDst=this.blendDst),this.blendEquation!==Dr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Fs&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Cv&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==xs&&(r.stencilFail=this.stencilFail),this.stencilZFail!==xs&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==xs&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function l(u){const h=[];for(const d in u){const m=u[d];delete m.metadata,h.push(m)}return h}if(i){const u=l(t.textures),h=l(t.images);u.length>0&&(r.textures=u),h.length>0&&(r.images=h)}return r}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let r=null;if(i!==null){const l=i.length;r=new Array(l);for(let u=0;u!==l;++u)r[u]=i[u].clone()}return this.clippingPlanes=r,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class aS extends hl{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ne(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new va,this.combine=V0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const fn=new st,Ou=new le;let uE=0;class Ui{constructor(t,i,r=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:uE++}),this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=r,this.usage=wv,this.updateRanges=[],this.gpuType=Gi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,i,r){t*=this.itemSize,r*=i.itemSize;for(let l=0,u=this.itemSize;l<u;l++)this.array[t+l]=i.array[r+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,r=this.count;i<r;i++)Ou.fromBufferAttribute(this,i),Ou.applyMatrix3(t),this.setXY(i,Ou.x,Ou.y);else if(this.itemSize===3)for(let i=0,r=this.count;i<r;i++)fn.fromBufferAttribute(this,i),fn.applyMatrix3(t),this.setXYZ(i,fn.x,fn.y,fn.z);return this}applyMatrix4(t){for(let i=0,r=this.count;i<r;i++)fn.fromBufferAttribute(this,i),fn.applyMatrix4(t),this.setXYZ(i,fn.x,fn.y,fn.z);return this}applyNormalMatrix(t){for(let i=0,r=this.count;i<r;i++)fn.fromBufferAttribute(this,i),fn.applyNormalMatrix(t),this.setXYZ(i,fn.x,fn.y,fn.z);return this}transformDirection(t){for(let i=0,r=this.count;i<r;i++)fn.fromBufferAttribute(this,i),fn.transformDirection(t),this.setXYZ(i,fn.x,fn.y,fn.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let r=this.array[t*this.itemSize+i];return this.normalized&&(r=qo(r,this.array)),r}setComponent(t,i,r){return this.normalized&&(r=kn(r,this.array)),this.array[t*this.itemSize+i]=r,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=qo(i,this.array)),i}setX(t,i){return this.normalized&&(i=kn(i,this.array)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=qo(i,this.array)),i}setY(t,i){return this.normalized&&(i=kn(i,this.array)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=qo(i,this.array)),i}setZ(t,i){return this.normalized&&(i=kn(i,this.array)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=qo(i,this.array)),i}setW(t,i){return this.normalized&&(i=kn(i,this.array)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,r){return t*=this.itemSize,this.normalized&&(i=kn(i,this.array),r=kn(r,this.array)),this.array[t+0]=i,this.array[t+1]=r,this}setXYZ(t,i,r,l){return t*=this.itemSize,this.normalized&&(i=kn(i,this.array),r=kn(r,this.array),l=kn(l,this.array)),this.array[t+0]=i,this.array[t+1]=r,this.array[t+2]=l,this}setXYZW(t,i,r,l,u){return t*=this.itemSize,this.normalized&&(i=kn(i,this.array),r=kn(r,this.array),l=kn(l,this.array),u=kn(u,this.array)),this.array[t+0]=i,this.array[t+1]=r,this.array[t+2]=l,this.array[t+3]=u,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==wv&&(t.usage=this.usage),t}}class rS extends Ui{constructor(t,i,r){super(new Uint16Array(t),i,r)}}class sS extends Ui{constructor(t,i,r){super(new Uint32Array(t),i,r)}}class ga extends Ui{constructor(t,i,r){super(new Float32Array(t),i,r)}}let cE=0;const gi=new dn,ud=new Yn,Ds=new st,ii=new fl,Ko=new fl,xn=new st;class xa extends Ks{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:cE++}),this.uuid=ul(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new($0(t)?sS:rS)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,r=0){this.groups.push({start:t,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const u=new fe().getNormalMatrix(t);r.applyNormalMatrix(u),r.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return gi.makeRotationFromQuaternion(t),this.applyMatrix4(gi),this}rotateX(t){return gi.makeRotationX(t),this.applyMatrix4(gi),this}rotateY(t){return gi.makeRotationY(t),this.applyMatrix4(gi),this}rotateZ(t){return gi.makeRotationZ(t),this.applyMatrix4(gi),this}translate(t,i,r){return gi.makeTranslation(t,i,r),this.applyMatrix4(gi),this}scale(t,i,r){return gi.makeScale(t,i,r),this.applyMatrix4(gi),this}lookAt(t){return ud.lookAt(t),ud.updateMatrix(),this.applyMatrix4(ud.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ds).negate(),this.translate(Ds.x,Ds.y,Ds.z),this}setFromPoints(t){const i=this.getAttribute("position");if(i===void 0){const r=[];for(let l=0,u=t.length;l<u;l++){const h=t[l];r.push(h.x,h.y,h.z||0)}this.setAttribute("position",new ga(r,3))}else{const r=Math.min(t.length,i.count);for(let l=0;l<r;l++){const u=t[l];i.setXYZ(l,u.x,u.y,u.z||0)}t.length>i.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new fl);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new st(-1/0,-1/0,-1/0),new st(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let r=0,l=i.length;r<l;r++){const u=i[r];ii.setFromBufferAttribute(u),this.morphTargetsRelative?(xn.addVectors(this.boundingBox.min,ii.min),this.boundingBox.expandByPoint(xn),xn.addVectors(this.boundingBox.max,ii.max),this.boundingBox.expandByPoint(xn)):(this.boundingBox.expandByPoint(ii.min),this.boundingBox.expandByPoint(ii.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new yc);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new st,1/0);return}if(t){const r=this.boundingSphere.center;if(ii.setFromBufferAttribute(t),i)for(let u=0,h=i.length;u<h;u++){const d=i[u];Ko.setFromBufferAttribute(d),this.morphTargetsRelative?(xn.addVectors(ii.min,Ko.min),ii.expandByPoint(xn),xn.addVectors(ii.max,Ko.max),ii.expandByPoint(xn)):(ii.expandByPoint(Ko.min),ii.expandByPoint(Ko.max))}ii.getCenter(r);let l=0;for(let u=0,h=t.count;u<h;u++)xn.fromBufferAttribute(t,u),l=Math.max(l,r.distanceToSquared(xn));if(i)for(let u=0,h=i.length;u<h;u++){const d=i[u],m=this.morphTargetsRelative;for(let p=0,S=d.count;p<S;p++)xn.fromBufferAttribute(d,p),m&&(Ds.fromBufferAttribute(t,p),xn.add(Ds)),l=Math.max(l,r.distanceToSquared(xn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=i.position,l=i.normal,u=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ui(new Float32Array(4*r.count),4));const h=this.getAttribute("tangent"),d=[],m=[];for(let j=0;j<r.count;j++)d[j]=new st,m[j]=new st;const p=new st,S=new st,v=new st,y=new le,M=new le,T=new le,A=new st,E=new st;function _(j,D,C){p.fromBufferAttribute(r,j),S.fromBufferAttribute(r,D),v.fromBufferAttribute(r,C),y.fromBufferAttribute(u,j),M.fromBufferAttribute(u,D),T.fromBufferAttribute(u,C),S.sub(p),v.sub(p),M.sub(y),T.sub(y);const V=1/(M.x*T.y-T.x*M.y);isFinite(V)&&(A.copy(S).multiplyScalar(T.y).addScaledVector(v,-M.y).multiplyScalar(V),E.copy(v).multiplyScalar(M.x).addScaledVector(S,-T.x).multiplyScalar(V),d[j].add(A),d[D].add(A),d[C].add(A),m[j].add(E),m[D].add(E),m[C].add(E))}let P=this.groups;P.length===0&&(P=[{start:0,count:t.count}]);for(let j=0,D=P.length;j<D;++j){const C=P[j],V=C.start,tt=C.count;for(let ct=V,ft=V+tt;ct<ft;ct+=3)_(t.getX(ct+0),t.getX(ct+1),t.getX(ct+2))}const O=new st,w=new st,H=new st,B=new st;function L(j){H.fromBufferAttribute(l,j),B.copy(H);const D=d[j];O.copy(D),O.sub(H.multiplyScalar(H.dot(D))).normalize(),w.crossVectors(B,D);const V=w.dot(m[j])<0?-1:1;h.setXYZW(j,O.x,O.y,O.z,V)}for(let j=0,D=P.length;j<D;++j){const C=P[j],V=C.start,tt=C.count;for(let ct=V,ft=V+tt;ct<ft;ct+=3)L(t.getX(ct+0)),L(t.getX(ct+1)),L(t.getX(ct+2))}}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Ui(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let y=0,M=r.count;y<M;y++)r.setXYZ(y,0,0,0);const l=new st,u=new st,h=new st,d=new st,m=new st,p=new st,S=new st,v=new st;if(t)for(let y=0,M=t.count;y<M;y+=3){const T=t.getX(y+0),A=t.getX(y+1),E=t.getX(y+2);l.fromBufferAttribute(i,T),u.fromBufferAttribute(i,A),h.fromBufferAttribute(i,E),S.subVectors(h,u),v.subVectors(l,u),S.cross(v),d.fromBufferAttribute(r,T),m.fromBufferAttribute(r,A),p.fromBufferAttribute(r,E),d.add(S),m.add(S),p.add(S),r.setXYZ(T,d.x,d.y,d.z),r.setXYZ(A,m.x,m.y,m.z),r.setXYZ(E,p.x,p.y,p.z)}else for(let y=0,M=i.count;y<M;y+=3)l.fromBufferAttribute(i,y+0),u.fromBufferAttribute(i,y+1),h.fromBufferAttribute(i,y+2),S.subVectors(h,u),v.subVectors(l,u),S.cross(v),r.setXYZ(y+0,S.x,S.y,S.z),r.setXYZ(y+1,S.x,S.y,S.z),r.setXYZ(y+2,S.x,S.y,S.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,r=t.count;i<r;i++)xn.fromBufferAttribute(t,i),xn.normalize(),t.setXYZ(i,xn.x,xn.y,xn.z)}toNonIndexed(){function t(d,m){const p=d.array,S=d.itemSize,v=d.normalized,y=new p.constructor(m.length*S);let M=0,T=0;for(let A=0,E=m.length;A<E;A++){d.isInterleavedBufferAttribute?M=m[A]*d.data.stride+d.offset:M=m[A]*S;for(let _=0;_<S;_++)y[T++]=p[M++]}return new Ui(y,S,v)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new xa,r=this.index.array,l=this.attributes;for(const d in l){const m=l[d],p=t(m,r);i.setAttribute(d,p)}const u=this.morphAttributes;for(const d in u){const m=[],p=u[d];for(let S=0,v=p.length;S<v;S++){const y=p[S],M=t(y,r);m.push(M)}i.morphAttributes[d]=m}i.morphTargetsRelative=this.morphTargetsRelative;const h=this.groups;for(let d=0,m=h.length;d<m;d++){const p=h[d];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(t[p]=m[p]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const r=this.attributes;for(const m in r){const p=r[m];t.data.attributes[m]=p.toJSON(t.data)}const l={};let u=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],S=[];for(let v=0,y=p.length;v<y;v++){const M=p[v];S.push(M.toJSON(t.data))}S.length>0&&(l[m]=S,u=!0)}u&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const h=this.groups;h.length>0&&(t.data.groups=JSON.parse(JSON.stringify(h)));const d=this.boundingSphere;return d!==null&&(t.data.boundingSphere=d.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const r=t.index;r!==null&&this.setIndex(r.clone());const l=t.attributes;for(const p in l){const S=l[p];this.setAttribute(p,S.clone(i))}const u=t.morphAttributes;for(const p in u){const S=[],v=u[p];for(let y=0,M=v.length;y<M;y++)S.push(v[y].clone(i));this.morphAttributes[p]=S}this.morphTargetsRelative=t.morphTargetsRelative;const h=t.groups;for(let p=0,S=h.length;p<S;p++){const v=h[p];this.addGroup(v.start,v.count,v.materialIndex)}const d=t.boundingBox;d!==null&&(this.boundingBox=d.clone());const m=t.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const kv=new dn,Tr=new eS,zu=new yc,Xv=new st,Pu=new st,Bu=new st,Iu=new st,cd=new st,Fu=new st,Wv=new st,Hu=new st;class Si extends Yn{constructor(t=new xa,i=new aS){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,h=l.length;u<h;u++){const d=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=u}}}}getVertexPosition(t,i){const r=this.geometry,l=r.attributes.position,u=r.morphAttributes.position,h=r.morphTargetsRelative;i.fromBufferAttribute(l,t);const d=this.morphTargetInfluences;if(u&&d){Fu.set(0,0,0);for(let m=0,p=u.length;m<p;m++){const S=d[m],v=u[m];S!==0&&(cd.fromBufferAttribute(v,t),h?Fu.addScaledVector(cd,S):Fu.addScaledVector(cd.sub(i),S))}i.add(Fu)}return i}raycast(t,i){const r=this.geometry,l=this.material,u=this.matrixWorld;l!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),zu.copy(r.boundingSphere),zu.applyMatrix4(u),Tr.copy(t.ray).recast(t.near),!(zu.containsPoint(Tr.origin)===!1&&(Tr.intersectSphere(zu,Xv)===null||Tr.origin.distanceToSquared(Xv)>(t.far-t.near)**2))&&(kv.copy(u).invert(),Tr.copy(t.ray).applyMatrix4(kv),!(r.boundingBox!==null&&Tr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(t,i,Tr)))}_computeIntersections(t,i,r){let l;const u=this.geometry,h=this.material,d=u.index,m=u.attributes.position,p=u.attributes.uv,S=u.attributes.uv1,v=u.attributes.normal,y=u.groups,M=u.drawRange;if(d!==null)if(Array.isArray(h))for(let T=0,A=y.length;T<A;T++){const E=y[T],_=h[E.materialIndex],P=Math.max(E.start,M.start),O=Math.min(d.count,Math.min(E.start+E.count,M.start+M.count));for(let w=P,H=O;w<H;w+=3){const B=d.getX(w),L=d.getX(w+1),j=d.getX(w+2);l=Gu(this,_,t,r,p,S,v,B,L,j),l&&(l.faceIndex=Math.floor(w/3),l.face.materialIndex=E.materialIndex,i.push(l))}}else{const T=Math.max(0,M.start),A=Math.min(d.count,M.start+M.count);for(let E=T,_=A;E<_;E+=3){const P=d.getX(E),O=d.getX(E+1),w=d.getX(E+2);l=Gu(this,h,t,r,p,S,v,P,O,w),l&&(l.faceIndex=Math.floor(E/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(h))for(let T=0,A=y.length;T<A;T++){const E=y[T],_=h[E.materialIndex],P=Math.max(E.start,M.start),O=Math.min(m.count,Math.min(E.start+E.count,M.start+M.count));for(let w=P,H=O;w<H;w+=3){const B=w,L=w+1,j=w+2;l=Gu(this,_,t,r,p,S,v,B,L,j),l&&(l.faceIndex=Math.floor(w/3),l.face.materialIndex=E.materialIndex,i.push(l))}}else{const T=Math.max(0,M.start),A=Math.min(m.count,M.start+M.count);for(let E=T,_=A;E<_;E+=3){const P=E,O=E+1,w=E+2;l=Gu(this,h,t,r,p,S,v,P,O,w),l&&(l.faceIndex=Math.floor(E/3),i.push(l))}}}}function fE(s,t,i,r,l,u,h,d){let m;if(t.side===qn?m=r.intersectTriangle(h,u,l,!0,d):m=r.intersectTriangle(l,u,h,t.side===er,d),m===null)return null;Hu.copy(d),Hu.applyMatrix4(s.matrixWorld);const p=i.ray.origin.distanceTo(Hu);return p<i.near||p>i.far?null:{distance:p,point:Hu.clone(),object:s}}function Gu(s,t,i,r,l,u,h,d,m,p){s.getVertexPosition(d,Pu),s.getVertexPosition(m,Bu),s.getVertexPosition(p,Iu);const S=fE(s,t,i,r,Pu,Bu,Iu,Wv);if(S){const v=new st;wi.getBarycoord(Wv,Pu,Bu,Iu,v),l&&(S.uv=wi.getInterpolatedAttribute(l,d,m,p,v,new le)),u&&(S.uv1=wi.getInterpolatedAttribute(u,d,m,p,v,new le)),h&&(S.normal=wi.getInterpolatedAttribute(h,d,m,p,v,new st),S.normal.dot(r.direction)>0&&S.normal.multiplyScalar(-1));const y={a:d,b:m,c:p,normal:new st,materialIndex:0};wi.getNormal(Pu,Bu,Iu,y.normal),S.face=y,S.barycoord=v}return S}class dl extends xa{constructor(t=1,i=1,r=1,l=1,u=1,h=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:r,widthSegments:l,heightSegments:u,depthSegments:h};const d=this;l=Math.floor(l),u=Math.floor(u),h=Math.floor(h);const m=[],p=[],S=[],v=[];let y=0,M=0;T("z","y","x",-1,-1,r,i,t,h,u,0),T("z","y","x",1,-1,r,i,-t,h,u,1),T("x","z","y",1,1,t,r,i,l,h,2),T("x","z","y",1,-1,t,r,-i,l,h,3),T("x","y","z",1,-1,t,i,r,l,u,4),T("x","y","z",-1,-1,t,i,-r,l,u,5),this.setIndex(m),this.setAttribute("position",new ga(p,3)),this.setAttribute("normal",new ga(S,3)),this.setAttribute("uv",new ga(v,2));function T(A,E,_,P,O,w,H,B,L,j,D){const C=w/L,V=H/j,tt=w/2,ct=H/2,ft=B/2,dt=L+1,z=j+1;let q=0,W=0;const mt=new st;for(let yt=0;yt<z;yt++){const N=yt*V-ct;for(let J=0;J<dt;J++){const xt=J*C-tt;mt[A]=xt*P,mt[E]=N*O,mt[_]=ft,p.push(mt.x,mt.y,mt.z),mt[A]=0,mt[E]=0,mt[_]=B>0?1:-1,S.push(mt.x,mt.y,mt.z),v.push(J/L),v.push(1-yt/j),q+=1}}for(let yt=0;yt<j;yt++)for(let N=0;N<L;N++){const J=y+N+dt*yt,xt=y+N+dt*(yt+1),Tt=y+(N+1)+dt*(yt+1),Ut=y+(N+1)+dt*yt;m.push(J,xt,Ut),m.push(xt,Tt,Ut),W+=6}d.addGroup(M,W,D),M+=W,y+=q}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new dl(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function ks(s){const t={};for(const i in s){t[i]={};for(const r in s[i]){const l=s[i][r];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][r]=null):t[i][r]=l.clone():Array.isArray(l)?t[i][r]=l.slice():t[i][r]=l}}return t}function zn(s){const t={};for(let i=0;i<s.length;i++){const r=ks(s[i]);for(const l in r)t[l]=r[l]}return t}function hE(s){const t=[];for(let i=0;i<s.length;i++)t.push(s[i].clone());return t}function oS(s){const t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:De.workingColorSpace}const dE={clone:ks,merge:zn};var pE=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,mE=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Sa extends hl{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=pE,this.fragmentShader=mE,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ks(t.uniforms),this.uniformsGroups=hE(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const h=this.uniforms[l].value;h&&h.isTexture?i.uniforms[l]={type:"t",value:h.toJSON(t).uuid}:h&&h.isColor?i.uniforms[l]={type:"c",value:h.getHex()}:h&&h.isVector2?i.uniforms[l]={type:"v2",value:h.toArray()}:h&&h.isVector3?i.uniforms[l]={type:"v3",value:h.toArray()}:h&&h.isVector4?i.uniforms[l]={type:"v4",value:h.toArray()}:h&&h.isMatrix3?i.uniforms[l]={type:"m3",value:h.toArray()}:h&&h.isMatrix4?i.uniforms[l]={type:"m4",value:h.toArray()}:i.uniforms[l]={value:h}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const r={};for(const l in this.extensions)this.extensions[l]===!0&&(r[l]=!0);return Object.keys(r).length>0&&(i.extensions=r),i}}class hc extends Yn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new dn,this.projectionMatrix=new dn,this.projectionMatrixInverse=new dn,this.coordinateSystem=Vi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,i){super.updateWorldMatrix(t,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ka=new st,qv=new le,Yv=new le;class Ci extends hc{constructor(t=50,i=1,r=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=r,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=hp*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(kh*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return hp*2*Math.atan(Math.tan(kh*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,i,r){Ka.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ka.x,Ka.y).multiplyScalar(-t/Ka.z),Ka.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Ka.x,Ka.y).multiplyScalar(-t/Ka.z)}getViewSize(t,i){return this.getViewBounds(t,qv,Yv),i.subVectors(Yv,qv)}setViewOffset(t,i,r,l,u,h){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=u,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan(kh*.5*this.fov)/this.zoom,r=2*i,l=this.aspect*r,u=-.5*l;const h=this.view;if(this.view!==null&&this.view.enabled){const m=h.fullWidth,p=h.fullHeight;u+=h.offsetX*l/m,i-=h.offsetY*r/p,l*=h.width/m,r*=h.height/p}const d=this.filmOffset;d!==0&&(u+=t*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(u,u+l,i,i-r,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const Us=-90,Ls=1;class gE extends Yn{constructor(t,i,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new Ci(Us,Ls,t,i);l.layers=this.layers,this.add(l);const u=new Ci(Us,Ls,t,i);u.layers=this.layers,this.add(u);const h=new Ci(Us,Ls,t,i);h.layers=this.layers,this.add(h);const d=new Ci(Us,Ls,t,i);d.layers=this.layers,this.add(d);const m=new Ci(Us,Ls,t,i);m.layers=this.layers,this.add(m);const p=new Ci(Us,Ls,t,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[r,l,u,h,d,m]=i;for(const p of i)this.remove(p);if(t===Vi)r.up.set(0,1,0),r.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),u.up.set(0,0,-1),u.lookAt(0,1,0),h.up.set(0,0,1),h.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(t===cc)r.up.set(0,-1,0),r.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),u.up.set(0,0,1),u.lookAt(0,1,0),h.up.set(0,0,-1),h.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const p of i)this.add(p),p.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[u,h,d,m,p,S]=this.children,v=t.getRenderTarget(),y=t.getActiveCubeFace(),M=t.getActiveMipmapLevel(),T=t.xr.enabled;t.xr.enabled=!1;const A=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,t.setRenderTarget(r,0,l),t.render(i,u),t.setRenderTarget(r,1,l),t.render(i,h),t.setRenderTarget(r,2,l),t.render(i,d),t.setRenderTarget(r,3,l),t.render(i,m),t.setRenderTarget(r,4,l),t.render(i,p),r.texture.generateMipmaps=A,t.setRenderTarget(r,5,l),t.render(i,S),t.setRenderTarget(v,y,M),t.xr.enabled=T,r.texture.needsPMREMUpdate=!0}}class lS extends Pn{constructor(t=[],i=Hs,r,l,u,h,d,m,p,S){super(t,i,r,l,u,h,d,m,p,S),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class _E extends nr{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const r={width:t,height:t,depth:1},l=[r,r,r,r,r,r];this.texture=new lS(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},l=new dl(5,5,5),u=new Sa({name:"CubemapFromEquirect",uniforms:ks(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:qn,blending:$a});u.uniforms.tEquirect.value=i;const h=new Si(l,u),d=i.minFilter;return i.minFilter===Lr&&(i.minFilter=Xn),new gE(1,10,this).update(t,h),i.minFilter=d,h.geometry.dispose(),h.material.dispose(),this}clear(t,i=!0,r=!0,l=!0){const u=t.getRenderTarget();for(let h=0;h<6;h++)t.setRenderTarget(this,h),t.clear(i,r,l);t.setRenderTarget(u)}}class Vu extends Yn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const vE={type:"move"};class fd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Vu,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Vu,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new st,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new st),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Vu,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new st,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new st),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const r of t.hand.values())this._getHandJoint(i,r)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,r){let l=null,u=null,h=null;const d=this._targetRay,m=this._grip,p=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(p&&t.hand){h=!0;for(const A of t.hand.values()){const E=i.getJointPose(A,r),_=this._getHandJoint(p,A);E!==null&&(_.matrix.fromArray(E.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=E.radius),_.visible=E!==null}const S=p.joints["index-finger-tip"],v=p.joints["thumb-tip"],y=S.position.distanceTo(v.position),M=.02,T=.005;p.inputState.pinching&&y>M+T?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!p.inputState.pinching&&y<=M-T&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else m!==null&&t.gripSpace&&(u=i.getPose(t.gripSpace,r),u!==null&&(m.matrix.fromArray(u.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,u.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(u.linearVelocity)):m.hasLinearVelocity=!1,u.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(u.angularVelocity)):m.hasAngularVelocity=!1));d!==null&&(l=i.getPose(t.targetRaySpace,r),l===null&&u!==null&&(l=u),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(vE)))}return d!==null&&(d.visible=l!==null),m!==null&&(m.visible=u!==null),p!==null&&(p.visible=h!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const r=new Vu;r.matrixAutoUpdate=!1,r.visible=!1,t.joints[i.jointName]=r,t.add(r)}return t.joints[i.jointName]}}class jv extends Yn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new va,this.environmentIntensity=1,this.environmentRotation=new va,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}class SE extends Pn{constructor(t=null,i=1,r=1,l,u,h,d,m,p=si,S=si,v,y){super(null,h,d,m,p,S,l,u,v,y),this.isDataTexture=!0,this.image={data:t,width:i,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const hd=new st,xE=new st,yE=new fe;class Cr{constructor(t=new st(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,r,l){return this.normal.set(t,i,r),this.constant=l,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,r){const l=hd.subVectors(r,i).cross(xE.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i){const r=t.delta(hd),l=this.normal.dot(r);if(l===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const u=-(t.start.dot(this.normal)+this.constant)/l;return u<0||u>1?null:i.copy(t.start).addScaledVector(r,u)}intersectsLine(t){const i=this.distanceToPoint(t.start),r=this.distanceToPoint(t.end);return i<0&&r>0||r<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const r=i||yE.getNormalMatrix(t),l=this.coplanarPoint(hd).applyMatrix4(t),u=this.normal.applyMatrix3(r).normalize();return this.constant=-l.dot(u),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const br=new yc,ME=new le(.5,.5),ku=new st;class uS{constructor(t=new Cr,i=new Cr,r=new Cr,l=new Cr,u=new Cr,h=new Cr){this.planes=[t,i,r,l,u,h]}set(t,i,r,l,u,h){const d=this.planes;return d[0].copy(t),d[1].copy(i),d[2].copy(r),d[3].copy(l),d[4].copy(u),d[5].copy(h),this}copy(t){const i=this.planes;for(let r=0;r<6;r++)i[r].copy(t.planes[r]);return this}setFromProjectionMatrix(t,i=Vi,r=!1){const l=this.planes,u=t.elements,h=u[0],d=u[1],m=u[2],p=u[3],S=u[4],v=u[5],y=u[6],M=u[7],T=u[8],A=u[9],E=u[10],_=u[11],P=u[12],O=u[13],w=u[14],H=u[15];if(l[0].setComponents(p-h,M-S,_-T,H-P).normalize(),l[1].setComponents(p+h,M+S,_+T,H+P).normalize(),l[2].setComponents(p+d,M+v,_+A,H+O).normalize(),l[3].setComponents(p-d,M-v,_-A,H-O).normalize(),r)l[4].setComponents(m,y,E,w).normalize(),l[5].setComponents(p-m,M-y,_-E,H-w).normalize();else if(l[4].setComponents(p-m,M-y,_-E,H-w).normalize(),i===Vi)l[5].setComponents(p+m,M+y,_+E,H+w).normalize();else if(i===cc)l[5].setComponents(m,y,E,w).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),br.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),br.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(br)}intersectsSprite(t){br.center.set(0,0,0);const i=ME.distanceTo(t.center);return br.radius=.7071067811865476+i,br.applyMatrix4(t.matrixWorld),this.intersectsSphere(br)}intersectsSphere(t){const i=this.planes,r=t.center,l=-t.radius;for(let u=0;u<6;u++)if(i[u].distanceToPoint(r)<l)return!1;return!0}intersectsBox(t){const i=this.planes;for(let r=0;r<6;r++){const l=i[r];if(ku.x=l.normal.x>0?t.max.x:t.min.x,ku.y=l.normal.y>0?t.max.y:t.min.y,ku.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(ku)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let r=0;r<6;r++)if(i[r].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class EE extends hl{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ne(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const dc=new st,pc=new st,Zv=new dn,Qo=new eS,Xu=new yc,dd=new st,Kv=new st;class TE extends Yn{constructor(t=new xa,i=new EE){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const i=t.attributes.position,r=[0];for(let l=1,u=i.count;l<u;l++)dc.fromBufferAttribute(i,l-1),pc.fromBufferAttribute(i,l),r[l]=r[l-1],r[l]+=dc.distanceTo(pc);t.setAttribute("lineDistance",new ga(r,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,i){const r=this.geometry,l=this.matrixWorld,u=t.params.Line.threshold,h=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),Xu.copy(r.boundingSphere),Xu.applyMatrix4(l),Xu.radius+=u,t.ray.intersectsSphere(Xu)===!1)return;Zv.copy(l).invert(),Qo.copy(t.ray).applyMatrix4(Zv);const d=u/((this.scale.x+this.scale.y+this.scale.z)/3),m=d*d,p=this.isLineSegments?2:1,S=r.index,y=r.attributes.position;if(S!==null){const M=Math.max(0,h.start),T=Math.min(S.count,h.start+h.count);for(let A=M,E=T-1;A<E;A+=p){const _=S.getX(A),P=S.getX(A+1),O=Wu(this,t,Qo,m,_,P,A);O&&i.push(O)}if(this.isLineLoop){const A=S.getX(T-1),E=S.getX(M),_=Wu(this,t,Qo,m,A,E,T-1);_&&i.push(_)}}else{const M=Math.max(0,h.start),T=Math.min(y.count,h.start+h.count);for(let A=M,E=T-1;A<E;A+=p){const _=Wu(this,t,Qo,m,A,A+1,A);_&&i.push(_)}if(this.isLineLoop){const A=Wu(this,t,Qo,m,T-1,M,T-1);A&&i.push(A)}}}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,h=l.length;u<h;u++){const d=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=u}}}}}function Wu(s,t,i,r,l,u,h){const d=s.geometry.attributes.position;if(dc.fromBufferAttribute(d,l),pc.fromBufferAttribute(d,u),i.distanceSqToSegment(dc,pc,dd,Kv)>r)return;dd.applyMatrix4(s.matrixWorld);const p=t.ray.origin.distanceTo(dd);if(!(p<t.near||p>t.far))return{distance:p,point:Kv.clone().applyMatrix4(s.matrixWorld),index:h,face:null,faceIndex:null,barycoord:null,object:s}}const Qv=new st,Jv=new st;class bE extends TE{constructor(t,i){super(t,i),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const i=t.attributes.position,r=[];for(let l=0,u=i.count;l<u;l+=2)Qv.fromBufferAttribute(i,l),Jv.fromBufferAttribute(i,l+1),r[l]=l===0?0:r[l-1],r[l+1]=r[l]+Qv.distanceTo(Jv);t.setAttribute("lineDistance",new ga(r,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class cS extends Pn{constructor(t,i,r=Br,l,u,h,d=si,m=si,p,S=rl,v=1){if(S!==rl&&S!==sl)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const y={width:t,height:i,depth:v};super(y,l,u,h,d,m,S,r,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Cp(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class fS extends Pn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Or extends xa{constructor(t=1,i=1,r=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:r,heightSegments:l};const u=t/2,h=i/2,d=Math.floor(r),m=Math.floor(l),p=d+1,S=m+1,v=t/d,y=i/m,M=[],T=[],A=[],E=[];for(let _=0;_<S;_++){const P=_*y-h;for(let O=0;O<p;O++){const w=O*v-u;T.push(w,-P,0),A.push(0,0,1),E.push(O/d),E.push(1-_/m)}}for(let _=0;_<m;_++)for(let P=0;P<d;P++){const O=P+p*_,w=P+p*(_+1),H=P+1+p*(_+1),B=P+1+p*_;M.push(O,w,B),M.push(w,H,B)}this.setIndex(M),this.setAttribute("position",new ga(T,3)),this.setAttribute("normal",new ga(A,3)),this.setAttribute("uv",new ga(E,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Or(t.width,t.height,t.widthSegments,t.heightSegments)}}class qu extends Sa{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class AE extends hl{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=zM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class RE extends hl{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class CE extends hc{constructor(t=-1,i=1,r=1,l=-1,u=.1,h=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=r,this.bottom=l,this.near=u,this.far=h,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,r,l,u,h){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=u,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let u=r-t,h=r+t,d=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,S=(this.top-this.bottom)/this.view.fullHeight/this.zoom;u+=p*this.view.offsetX,h=u+p*this.view.width,d-=S*this.view.offsetY,m=d-S*this.view.height}this.projectionMatrix.makeOrthographic(u,h,d,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class wE extends Ci{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class DE{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const i=performance.now();t=(i-this.oldTime)/1e3,this.oldTime=i,this.elapsedTime+=t}return t}}function $v(s,t,i,r){const l=UE(r);switch(i){case j0:return s*t;case K0:return s*t/l.components*l.byteLength;case bp:return s*t/l.components*l.byteLength;case Q0:return s*t*2/l.components*l.byteLength;case Ap:return s*t*2/l.components*l.byteLength;case Z0:return s*t*3/l.components*l.byteLength;case vi:return s*t*4/l.components*l.byteLength;case Rp:return s*t*4/l.components*l.byteLength;case $u:case tc:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case ec:case nc:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Fd:case Gd:return Math.max(s,16)*Math.max(t,8)/4;case Id:case Hd:return Math.max(s,8)*Math.max(t,8)/2;case Vd:case kd:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Xd:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Wd:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case qd:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case Yd:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case jd:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case Zd:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case Kd:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case Qd:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case Jd:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case $d:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case tp:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case ep:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case np:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case ip:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case ap:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case rp:case sp:case op:return Math.ceil(s/4)*Math.ceil(t/4)*16;case lp:case up:return Math.ceil(s/4)*Math.ceil(t/4)*8;case cp:case fp:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function UE(s){switch(s){case _a:case X0:return{byteLength:1,components:1};case il:case W0:case Zs:return{byteLength:2,components:1};case Ep:case Tp:return{byteLength:2,components:4};case Br:case Mp:case Gi:return{byteLength:4,components:1};case q0:case Y0:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:yp}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=yp);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function hS(){let s=null,t=!1,i=null,r=null;function l(u,h){i(u,h),r=s.requestAnimationFrame(l)}return{start:function(){t!==!0&&i!==null&&(r=s.requestAnimationFrame(l),t=!0)},stop:function(){s.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(u){i=u},setContext:function(u){s=u}}}function LE(s){const t=new WeakMap;function i(d,m){const p=d.array,S=d.usage,v=p.byteLength,y=s.createBuffer();s.bindBuffer(m,y),s.bufferData(m,p,S),d.onUploadCallback();let M;if(p instanceof Float32Array)M=s.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)M=s.HALF_FLOAT;else if(p instanceof Uint16Array)d.isFloat16BufferAttribute?M=s.HALF_FLOAT:M=s.UNSIGNED_SHORT;else if(p instanceof Int16Array)M=s.SHORT;else if(p instanceof Uint32Array)M=s.UNSIGNED_INT;else if(p instanceof Int32Array)M=s.INT;else if(p instanceof Int8Array)M=s.BYTE;else if(p instanceof Uint8Array)M=s.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)M=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:y,type:M,bytesPerElement:p.BYTES_PER_ELEMENT,version:d.version,size:v}}function r(d,m,p){const S=m.array,v=m.updateRanges;if(s.bindBuffer(p,d),v.length===0)s.bufferSubData(p,0,S);else{v.sort((M,T)=>M.start-T.start);let y=0;for(let M=1;M<v.length;M++){const T=v[y],A=v[M];A.start<=T.start+T.count+1?T.count=Math.max(T.count,A.start+A.count-T.start):(++y,v[y]=A)}v.length=y+1;for(let M=0,T=v.length;M<T;M++){const A=v[M];s.bufferSubData(p,A.start*S.BYTES_PER_ELEMENT,S,A.start,A.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(d){return d.isInterleavedBufferAttribute&&(d=d.data),t.get(d)}function u(d){d.isInterleavedBufferAttribute&&(d=d.data);const m=t.get(d);m&&(s.deleteBuffer(m.buffer),t.delete(d))}function h(d,m){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const S=t.get(d);(!S||S.version<d.version)&&t.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const p=t.get(d);if(p===void 0)t.set(d,i(d,m));else if(p.version<d.version){if(p.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(p.buffer,d,m),p.version=d.version}}return{get:l,remove:u,update:h}}var NE=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,OE=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,zE=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,PE=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,BE=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,IE=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,FE=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,HE=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,GE=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,VE=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,kE=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,XE=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,WE=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,qE=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,YE=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,jE=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,ZE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,KE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,QE=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,JE=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,$E=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,tT=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,eT=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,nT=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,iT=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,aT=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,rT=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,sT=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,oT=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,lT=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,uT="gl_FragColor = linearToOutputTexel( gl_FragColor );",cT=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,fT=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,hT=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,dT=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,pT=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,mT=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,gT=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,_T=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,vT=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ST=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,xT=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,yT=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,MT=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ET=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,TT=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,bT=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,AT=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,RT=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,CT=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,wT=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,DT=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,UT=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,LT=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,NT=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,OT=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,zT=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,PT=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,BT=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,IT=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,FT=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,HT=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,GT=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,VT=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,kT=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,XT=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,WT=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,qT=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,YT=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,jT=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,ZT=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,KT=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,QT=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,JT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,$T=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,tb=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,eb=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,nb=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,ib=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ab=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,rb=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,sb=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ob=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,lb=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ub=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,cb=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,fb=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,hb=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,db=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,pb=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,mb=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,gb=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,_b=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,vb=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Sb=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,xb=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,yb=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Mb=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Eb=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Tb=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,bb=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Ab=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Rb=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Cb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,wb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Db=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Ub=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Lb=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Nb=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ob=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,zb=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Pb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Bb=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ib=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Fb=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Hb=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Gb=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Vb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,kb=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Xb=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Wb=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,qb=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Yb=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,jb=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Zb=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Kb=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Qb=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Jb=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,$b=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,t1=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,e1=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,n1=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,i1=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,a1=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,r1=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,s1=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,o1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,l1=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,u1=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,c1=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,f1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,he={alphahash_fragment:NE,alphahash_pars_fragment:OE,alphamap_fragment:zE,alphamap_pars_fragment:PE,alphatest_fragment:BE,alphatest_pars_fragment:IE,aomap_fragment:FE,aomap_pars_fragment:HE,batching_pars_vertex:GE,batching_vertex:VE,begin_vertex:kE,beginnormal_vertex:XE,bsdfs:WE,iridescence_fragment:qE,bumpmap_pars_fragment:YE,clipping_planes_fragment:jE,clipping_planes_pars_fragment:ZE,clipping_planes_pars_vertex:KE,clipping_planes_vertex:QE,color_fragment:JE,color_pars_fragment:$E,color_pars_vertex:tT,color_vertex:eT,common:nT,cube_uv_reflection_fragment:iT,defaultnormal_vertex:aT,displacementmap_pars_vertex:rT,displacementmap_vertex:sT,emissivemap_fragment:oT,emissivemap_pars_fragment:lT,colorspace_fragment:uT,colorspace_pars_fragment:cT,envmap_fragment:fT,envmap_common_pars_fragment:hT,envmap_pars_fragment:dT,envmap_pars_vertex:pT,envmap_physical_pars_fragment:bT,envmap_vertex:mT,fog_vertex:gT,fog_pars_vertex:_T,fog_fragment:vT,fog_pars_fragment:ST,gradientmap_pars_fragment:xT,lightmap_pars_fragment:yT,lights_lambert_fragment:MT,lights_lambert_pars_fragment:ET,lights_pars_begin:TT,lights_toon_fragment:AT,lights_toon_pars_fragment:RT,lights_phong_fragment:CT,lights_phong_pars_fragment:wT,lights_physical_fragment:DT,lights_physical_pars_fragment:UT,lights_fragment_begin:LT,lights_fragment_maps:NT,lights_fragment_end:OT,logdepthbuf_fragment:zT,logdepthbuf_pars_fragment:PT,logdepthbuf_pars_vertex:BT,logdepthbuf_vertex:IT,map_fragment:FT,map_pars_fragment:HT,map_particle_fragment:GT,map_particle_pars_fragment:VT,metalnessmap_fragment:kT,metalnessmap_pars_fragment:XT,morphinstance_vertex:WT,morphcolor_vertex:qT,morphnormal_vertex:YT,morphtarget_pars_vertex:jT,morphtarget_vertex:ZT,normal_fragment_begin:KT,normal_fragment_maps:QT,normal_pars_fragment:JT,normal_pars_vertex:$T,normal_vertex:tb,normalmap_pars_fragment:eb,clearcoat_normal_fragment_begin:nb,clearcoat_normal_fragment_maps:ib,clearcoat_pars_fragment:ab,iridescence_pars_fragment:rb,opaque_fragment:sb,packing:ob,premultiplied_alpha_fragment:lb,project_vertex:ub,dithering_fragment:cb,dithering_pars_fragment:fb,roughnessmap_fragment:hb,roughnessmap_pars_fragment:db,shadowmap_pars_fragment:pb,shadowmap_pars_vertex:mb,shadowmap_vertex:gb,shadowmask_pars_fragment:_b,skinbase_vertex:vb,skinning_pars_vertex:Sb,skinning_vertex:xb,skinnormal_vertex:yb,specularmap_fragment:Mb,specularmap_pars_fragment:Eb,tonemapping_fragment:Tb,tonemapping_pars_fragment:bb,transmission_fragment:Ab,transmission_pars_fragment:Rb,uv_pars_fragment:Cb,uv_pars_vertex:wb,uv_vertex:Db,worldpos_vertex:Ub,background_vert:Lb,background_frag:Nb,backgroundCube_vert:Ob,backgroundCube_frag:zb,cube_vert:Pb,cube_frag:Bb,depth_vert:Ib,depth_frag:Fb,distanceRGBA_vert:Hb,distanceRGBA_frag:Gb,equirect_vert:Vb,equirect_frag:kb,linedashed_vert:Xb,linedashed_frag:Wb,meshbasic_vert:qb,meshbasic_frag:Yb,meshlambert_vert:jb,meshlambert_frag:Zb,meshmatcap_vert:Kb,meshmatcap_frag:Qb,meshnormal_vert:Jb,meshnormal_frag:$b,meshphong_vert:t1,meshphong_frag:e1,meshphysical_vert:n1,meshphysical_frag:i1,meshtoon_vert:a1,meshtoon_frag:r1,points_vert:s1,points_frag:o1,shadow_vert:l1,shadow_frag:u1,sprite_vert:c1,sprite_frag:f1},Ot={common:{diffuse:{value:new Ne(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new fe},alphaMap:{value:null},alphaMapTransform:{value:new fe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new fe}},envmap:{envMap:{value:null},envMapRotation:{value:new fe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new fe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new fe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new fe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new fe},normalScale:{value:new le(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new fe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new fe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new fe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new fe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ne(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ne(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new fe},alphaTest:{value:0},uvTransform:{value:new fe}},sprite:{diffuse:{value:new Ne(16777215)},opacity:{value:1},center:{value:new le(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new fe},alphaMap:{value:null},alphaMapTransform:{value:new fe},alphaTest:{value:0}}},Fi={basic:{uniforms:zn([Ot.common,Ot.specularmap,Ot.envmap,Ot.aomap,Ot.lightmap,Ot.fog]),vertexShader:he.meshbasic_vert,fragmentShader:he.meshbasic_frag},lambert:{uniforms:zn([Ot.common,Ot.specularmap,Ot.envmap,Ot.aomap,Ot.lightmap,Ot.emissivemap,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.fog,Ot.lights,{emissive:{value:new Ne(0)}}]),vertexShader:he.meshlambert_vert,fragmentShader:he.meshlambert_frag},phong:{uniforms:zn([Ot.common,Ot.specularmap,Ot.envmap,Ot.aomap,Ot.lightmap,Ot.emissivemap,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.fog,Ot.lights,{emissive:{value:new Ne(0)},specular:{value:new Ne(1118481)},shininess:{value:30}}]),vertexShader:he.meshphong_vert,fragmentShader:he.meshphong_frag},standard:{uniforms:zn([Ot.common,Ot.envmap,Ot.aomap,Ot.lightmap,Ot.emissivemap,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.roughnessmap,Ot.metalnessmap,Ot.fog,Ot.lights,{emissive:{value:new Ne(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:he.meshphysical_vert,fragmentShader:he.meshphysical_frag},toon:{uniforms:zn([Ot.common,Ot.aomap,Ot.lightmap,Ot.emissivemap,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.gradientmap,Ot.fog,Ot.lights,{emissive:{value:new Ne(0)}}]),vertexShader:he.meshtoon_vert,fragmentShader:he.meshtoon_frag},matcap:{uniforms:zn([Ot.common,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.fog,{matcap:{value:null}}]),vertexShader:he.meshmatcap_vert,fragmentShader:he.meshmatcap_frag},points:{uniforms:zn([Ot.points,Ot.fog]),vertexShader:he.points_vert,fragmentShader:he.points_frag},dashed:{uniforms:zn([Ot.common,Ot.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:he.linedashed_vert,fragmentShader:he.linedashed_frag},depth:{uniforms:zn([Ot.common,Ot.displacementmap]),vertexShader:he.depth_vert,fragmentShader:he.depth_frag},normal:{uniforms:zn([Ot.common,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,{opacity:{value:1}}]),vertexShader:he.meshnormal_vert,fragmentShader:he.meshnormal_frag},sprite:{uniforms:zn([Ot.sprite,Ot.fog]),vertexShader:he.sprite_vert,fragmentShader:he.sprite_frag},background:{uniforms:{uvTransform:{value:new fe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:he.background_vert,fragmentShader:he.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new fe}},vertexShader:he.backgroundCube_vert,fragmentShader:he.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:he.cube_vert,fragmentShader:he.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:he.equirect_vert,fragmentShader:he.equirect_frag},distanceRGBA:{uniforms:zn([Ot.common,Ot.displacementmap,{referencePosition:{value:new st},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:he.distanceRGBA_vert,fragmentShader:he.distanceRGBA_frag},shadow:{uniforms:zn([Ot.lights,Ot.fog,{color:{value:new Ne(0)},opacity:{value:1}}]),vertexShader:he.shadow_vert,fragmentShader:he.shadow_frag}};Fi.physical={uniforms:zn([Fi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new fe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new fe},clearcoatNormalScale:{value:new le(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new fe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new fe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new fe},sheen:{value:0},sheenColor:{value:new Ne(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new fe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new fe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new fe},transmissionSamplerSize:{value:new le},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new fe},attenuationDistance:{value:0},attenuationColor:{value:new Ne(0)},specularColor:{value:new Ne(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new fe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new fe},anisotropyVector:{value:new le},anisotropyMap:{value:null},anisotropyMapTransform:{value:new fe}}]),vertexShader:he.meshphysical_vert,fragmentShader:he.meshphysical_frag};const Yu={r:0,b:0,g:0},Ar=new va,h1=new dn;function d1(s,t,i,r,l,u,h){const d=new Ne(0);let m=u===!0?0:1,p,S,v=null,y=0,M=null;function T(O){let w=O.isScene===!0?O.background:null;return w&&w.isTexture&&(w=(O.backgroundBlurriness>0?i:t).get(w)),w}function A(O){let w=!1;const H=T(O);H===null?_(d,m):H&&H.isColor&&(_(H,1),w=!0);const B=s.xr.getEnvironmentBlendMode();B==="additive"?r.buffers.color.setClear(0,0,0,1,h):B==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,h),(s.autoClear||w)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function E(O,w){const H=T(w);H&&(H.isCubeTexture||H.mapping===xc)?(S===void 0&&(S=new Si(new dl(1,1,1),new Sa({name:"BackgroundCubeMaterial",uniforms:ks(Fi.backgroundCube.uniforms),vertexShader:Fi.backgroundCube.vertexShader,fragmentShader:Fi.backgroundCube.fragmentShader,side:qn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),S.geometry.deleteAttribute("normal"),S.geometry.deleteAttribute("uv"),S.onBeforeRender=function(B,L,j){this.matrixWorld.copyPosition(j.matrixWorld)},Object.defineProperty(S.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(S)),Ar.copy(w.backgroundRotation),Ar.x*=-1,Ar.y*=-1,Ar.z*=-1,H.isCubeTexture&&H.isRenderTargetTexture===!1&&(Ar.y*=-1,Ar.z*=-1),S.material.uniforms.envMap.value=H,S.material.uniforms.flipEnvMap.value=H.isCubeTexture&&H.isRenderTargetTexture===!1?-1:1,S.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,S.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,S.material.uniforms.backgroundRotation.value.setFromMatrix4(h1.makeRotationFromEuler(Ar)),S.material.toneMapped=De.getTransfer(H.colorSpace)!==ke,(v!==H||y!==H.version||M!==s.toneMapping)&&(S.material.needsUpdate=!0,v=H,y=H.version,M=s.toneMapping),S.layers.enableAll(),O.unshift(S,S.geometry,S.material,0,0,null)):H&&H.isTexture&&(p===void 0&&(p=new Si(new Or(2,2),new Sa({name:"BackgroundMaterial",uniforms:ks(Fi.background.uniforms),vertexShader:Fi.background.vertexShader,fragmentShader:Fi.background.fragmentShader,side:er,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=H,p.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,p.material.toneMapped=De.getTransfer(H.colorSpace)!==ke,H.matrixAutoUpdate===!0&&H.updateMatrix(),p.material.uniforms.uvTransform.value.copy(H.matrix),(v!==H||y!==H.version||M!==s.toneMapping)&&(p.material.needsUpdate=!0,v=H,y=H.version,M=s.toneMapping),p.layers.enableAll(),O.unshift(p,p.geometry,p.material,0,0,null))}function _(O,w){O.getRGB(Yu,oS(s)),r.buffers.color.setClear(Yu.r,Yu.g,Yu.b,w,h)}function P(){S!==void 0&&(S.geometry.dispose(),S.material.dispose(),S=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return d},setClearColor:function(O,w=1){d.set(O),m=w,_(d,m)},getClearAlpha:function(){return m},setClearAlpha:function(O){m=O,_(d,m)},render:A,addToRenderList:E,dispose:P}}function p1(s,t){const i=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},l=y(null);let u=l,h=!1;function d(C,V,tt,ct,ft){let dt=!1;const z=v(ct,tt,V);u!==z&&(u=z,p(u.object)),dt=M(C,ct,tt,ft),dt&&T(C,ct,tt,ft),ft!==null&&t.update(ft,s.ELEMENT_ARRAY_BUFFER),(dt||h)&&(h=!1,w(C,V,tt,ct),ft!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(ft).buffer))}function m(){return s.createVertexArray()}function p(C){return s.bindVertexArray(C)}function S(C){return s.deleteVertexArray(C)}function v(C,V,tt){const ct=tt.wireframe===!0;let ft=r[C.id];ft===void 0&&(ft={},r[C.id]=ft);let dt=ft[V.id];dt===void 0&&(dt={},ft[V.id]=dt);let z=dt[ct];return z===void 0&&(z=y(m()),dt[ct]=z),z}function y(C){const V=[],tt=[],ct=[];for(let ft=0;ft<i;ft++)V[ft]=0,tt[ft]=0,ct[ft]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:V,enabledAttributes:tt,attributeDivisors:ct,object:C,attributes:{},index:null}}function M(C,V,tt,ct){const ft=u.attributes,dt=V.attributes;let z=0;const q=tt.getAttributes();for(const W in q)if(q[W].location>=0){const yt=ft[W];let N=dt[W];if(N===void 0&&(W==="instanceMatrix"&&C.instanceMatrix&&(N=C.instanceMatrix),W==="instanceColor"&&C.instanceColor&&(N=C.instanceColor)),yt===void 0||yt.attribute!==N||N&&yt.data!==N.data)return!0;z++}return u.attributesNum!==z||u.index!==ct}function T(C,V,tt,ct){const ft={},dt=V.attributes;let z=0;const q=tt.getAttributes();for(const W in q)if(q[W].location>=0){let yt=dt[W];yt===void 0&&(W==="instanceMatrix"&&C.instanceMatrix&&(yt=C.instanceMatrix),W==="instanceColor"&&C.instanceColor&&(yt=C.instanceColor));const N={};N.attribute=yt,yt&&yt.data&&(N.data=yt.data),ft[W]=N,z++}u.attributes=ft,u.attributesNum=z,u.index=ct}function A(){const C=u.newAttributes;for(let V=0,tt=C.length;V<tt;V++)C[V]=0}function E(C){_(C,0)}function _(C,V){const tt=u.newAttributes,ct=u.enabledAttributes,ft=u.attributeDivisors;tt[C]=1,ct[C]===0&&(s.enableVertexAttribArray(C),ct[C]=1),ft[C]!==V&&(s.vertexAttribDivisor(C,V),ft[C]=V)}function P(){const C=u.newAttributes,V=u.enabledAttributes;for(let tt=0,ct=V.length;tt<ct;tt++)V[tt]!==C[tt]&&(s.disableVertexAttribArray(tt),V[tt]=0)}function O(C,V,tt,ct,ft,dt,z){z===!0?s.vertexAttribIPointer(C,V,tt,ft,dt):s.vertexAttribPointer(C,V,tt,ct,ft,dt)}function w(C,V,tt,ct){A();const ft=ct.attributes,dt=tt.getAttributes(),z=V.defaultAttributeValues;for(const q in dt){const W=dt[q];if(W.location>=0){let mt=ft[q];if(mt===void 0&&(q==="instanceMatrix"&&C.instanceMatrix&&(mt=C.instanceMatrix),q==="instanceColor"&&C.instanceColor&&(mt=C.instanceColor)),mt!==void 0){const yt=mt.normalized,N=mt.itemSize,J=t.get(mt);if(J===void 0)continue;const xt=J.buffer,Tt=J.type,Ut=J.bytesPerElement,Q=Tt===s.INT||Tt===s.UNSIGNED_INT||mt.gpuType===Mp;if(mt.isInterleavedBufferAttribute){const ut=mt.data,Et=ut.stride,Ct=mt.offset;if(ut.isInstancedInterleavedBuffer){for(let Ft=0;Ft<W.locationSize;Ft++)_(W.location+Ft,ut.meshPerAttribute);C.isInstancedMesh!==!0&&ct._maxInstanceCount===void 0&&(ct._maxInstanceCount=ut.meshPerAttribute*ut.count)}else for(let Ft=0;Ft<W.locationSize;Ft++)E(W.location+Ft);s.bindBuffer(s.ARRAY_BUFFER,xt);for(let Ft=0;Ft<W.locationSize;Ft++)O(W.location+Ft,N/W.locationSize,Tt,yt,Et*Ut,(Ct+N/W.locationSize*Ft)*Ut,Q)}else{if(mt.isInstancedBufferAttribute){for(let ut=0;ut<W.locationSize;ut++)_(W.location+ut,mt.meshPerAttribute);C.isInstancedMesh!==!0&&ct._maxInstanceCount===void 0&&(ct._maxInstanceCount=mt.meshPerAttribute*mt.count)}else for(let ut=0;ut<W.locationSize;ut++)E(W.location+ut);s.bindBuffer(s.ARRAY_BUFFER,xt);for(let ut=0;ut<W.locationSize;ut++)O(W.location+ut,N/W.locationSize,Tt,yt,N*Ut,N/W.locationSize*ut*Ut,Q)}}else if(z!==void 0){const yt=z[q];if(yt!==void 0)switch(yt.length){case 2:s.vertexAttrib2fv(W.location,yt);break;case 3:s.vertexAttrib3fv(W.location,yt);break;case 4:s.vertexAttrib4fv(W.location,yt);break;default:s.vertexAttrib1fv(W.location,yt)}}}}P()}function H(){j();for(const C in r){const V=r[C];for(const tt in V){const ct=V[tt];for(const ft in ct)S(ct[ft].object),delete ct[ft];delete V[tt]}delete r[C]}}function B(C){if(r[C.id]===void 0)return;const V=r[C.id];for(const tt in V){const ct=V[tt];for(const ft in ct)S(ct[ft].object),delete ct[ft];delete V[tt]}delete r[C.id]}function L(C){for(const V in r){const tt=r[V];if(tt[C.id]===void 0)continue;const ct=tt[C.id];for(const ft in ct)S(ct[ft].object),delete ct[ft];delete tt[C.id]}}function j(){D(),h=!0,u!==l&&(u=l,p(u.object))}function D(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:j,resetDefaultState:D,dispose:H,releaseStatesOfGeometry:B,releaseStatesOfProgram:L,initAttributes:A,enableAttribute:E,disableUnusedAttributes:P}}function m1(s,t,i){let r;function l(p){r=p}function u(p,S){s.drawArrays(r,p,S),i.update(S,r,1)}function h(p,S,v){v!==0&&(s.drawArraysInstanced(r,p,S,v),i.update(S,r,v))}function d(p,S,v){if(v===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,p,0,S,0,v);let M=0;for(let T=0;T<v;T++)M+=S[T];i.update(M,r,1)}function m(p,S,v,y){if(v===0)return;const M=t.get("WEBGL_multi_draw");if(M===null)for(let T=0;T<p.length;T++)h(p[T],S[T],y[T]);else{M.multiDrawArraysInstancedWEBGL(r,p,0,S,0,y,0,v);let T=0;for(let A=0;A<v;A++)T+=S[A]*y[A];i.update(T,r,1)}}this.setMode=l,this.render=u,this.renderInstances=h,this.renderMultiDraw=d,this.renderMultiDrawInstances=m}function g1(s,t,i,r){let l;function u(){if(l!==void 0)return l;if(t.has("EXT_texture_filter_anisotropic")===!0){const L=t.get("EXT_texture_filter_anisotropic");l=s.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function h(L){return!(L!==vi&&r.convert(L)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(L){const j=L===Zs&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(L!==_a&&r.convert(L)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&L!==Gi&&!j)}function m(L){if(L==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";L="mediump"}return L==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const S=m(p);S!==p&&(console.warn("THREE.WebGLRenderer:",p,"not supported, using",S,"instead."),p=S);const v=i.logarithmicDepthBuffer===!0,y=i.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),M=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),T=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),A=s.getParameter(s.MAX_TEXTURE_SIZE),E=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),_=s.getParameter(s.MAX_VERTEX_ATTRIBS),P=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),O=s.getParameter(s.MAX_VARYING_VECTORS),w=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),H=T>0,B=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:u,getMaxPrecision:m,textureFormatReadable:h,textureTypeReadable:d,precision:p,logarithmicDepthBuffer:v,reversedDepthBuffer:y,maxTextures:M,maxVertexTextures:T,maxTextureSize:A,maxCubemapSize:E,maxAttributes:_,maxVertexUniforms:P,maxVaryings:O,maxFragmentUniforms:w,vertexTextures:H,maxSamples:B}}function _1(s){const t=this;let i=null,r=0,l=!1,u=!1;const h=new Cr,d=new fe,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(v,y){const M=v.length!==0||y||r!==0||l;return l=y,r=v.length,M},this.beginShadows=function(){u=!0,S(null)},this.endShadows=function(){u=!1},this.setGlobalState=function(v,y){i=S(v,y,0)},this.setState=function(v,y,M){const T=v.clippingPlanes,A=v.clipIntersection,E=v.clipShadows,_=s.get(v);if(!l||T===null||T.length===0||u&&!E)u?S(null):p();else{const P=u?0:r,O=P*4;let w=_.clippingState||null;m.value=w,w=S(T,y,O,M);for(let H=0;H!==O;++H)w[H]=i[H];_.clippingState=w,this.numIntersection=A?this.numPlanes:0,this.numPlanes+=P}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function S(v,y,M,T){const A=v!==null?v.length:0;let E=null;if(A!==0){if(E=m.value,T!==!0||E===null){const _=M+A*4,P=y.matrixWorldInverse;d.getNormalMatrix(P),(E===null||E.length<_)&&(E=new Float32Array(_));for(let O=0,w=M;O!==A;++O,w+=4)h.copy(v[O]).applyMatrix4(P,d),h.normal.toArray(E,w),E[w+3]=h.constant}m.value=E,m.needsUpdate=!0}return t.numPlanes=A,t.numIntersection=0,E}}function v1(s){let t=new WeakMap;function i(h,d){return d===Od?h.mapping=Hs:d===zd&&(h.mapping=Gs),h}function r(h){if(h&&h.isTexture){const d=h.mapping;if(d===Od||d===zd)if(t.has(h)){const m=t.get(h).texture;return i(m,h.mapping)}else{const m=h.image;if(m&&m.height>0){const p=new _E(m.height);return p.fromEquirectangularTexture(s,h),t.set(h,p),h.addEventListener("dispose",l),i(p.texture,h.mapping)}else return null}}return h}function l(h){const d=h.target;d.removeEventListener("dispose",l);const m=t.get(d);m!==void 0&&(t.delete(d),m.dispose())}function u(){t=new WeakMap}return{get:r,dispose:u}}const zs=4,t0=[.125,.215,.35,.446,.526,.582],Ur=20,pd=new CE,e0=new Ne;let md=null,gd=0,_d=0,vd=!1;const wr=(1+Math.sqrt(5))/2,Ns=1/wr,n0=[new st(-wr,Ns,0),new st(wr,Ns,0),new st(-Ns,0,wr),new st(Ns,0,wr),new st(0,wr,-Ns),new st(0,wr,Ns),new st(-1,1,-1),new st(1,1,-1),new st(-1,1,1),new st(1,1,1)],S1=new st;class i0{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,i=0,r=.1,l=100,u={}){const{size:h=256,position:d=S1}=u;md=this._renderer.getRenderTarget(),gd=this._renderer.getActiveCubeFace(),_d=this._renderer.getActiveMipmapLevel(),vd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(h);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(t,r,l,m,d),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=s0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=r0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(md,gd,_d),this._renderer.xr.enabled=vd,t.scissorTest=!1,ju(t,0,0,t.width,t.height)}_fromTexture(t,i){t.mapping===Hs||t.mapping===Gs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),md=this._renderer.getRenderTarget(),gd=this._renderer.getActiveCubeFace(),_d=this._renderer.getActiveMipmapLevel(),vd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=i||this._allocateTargets();return this._textureToCubeUV(t,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,r={magFilter:Xn,minFilter:Xn,generateMipmaps:!1,type:Zs,format:vi,colorSpace:Vs,depthBuffer:!1},l=a0(t,i,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=a0(t,i,r);const{_lodMax:u}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=x1(u)),this._blurMaterial=y1(u,t,i)}return l}_compileMaterial(t){const i=new Si(this._lodPlanes[0],t);this._renderer.compile(i,pd)}_sceneToCubeUV(t,i,r,l,u){const m=new Ci(90,1,i,r),p=[1,-1,1,1,1,1],S=[1,1,1,-1,-1,-1],v=this._renderer,y=v.autoClear,M=v.toneMapping;v.getClearColor(e0),v.toneMapping=tr,v.autoClear=!1,v.state.buffers.depth.getReversed()&&(v.setRenderTarget(l),v.clearDepth(),v.setRenderTarget(null));const A=new aS({name:"PMREM.Background",side:qn,depthWrite:!1,depthTest:!1}),E=new Si(new dl,A);let _=!1;const P=t.background;P?P.isColor&&(A.color.copy(P),t.background=null,_=!0):(A.color.copy(e0),_=!0);for(let O=0;O<6;O++){const w=O%3;w===0?(m.up.set(0,p[O],0),m.position.set(u.x,u.y,u.z),m.lookAt(u.x+S[O],u.y,u.z)):w===1?(m.up.set(0,0,p[O]),m.position.set(u.x,u.y,u.z),m.lookAt(u.x,u.y+S[O],u.z)):(m.up.set(0,p[O],0),m.position.set(u.x,u.y,u.z),m.lookAt(u.x,u.y,u.z+S[O]));const H=this._cubeSize;ju(l,w*H,O>2?H:0,H,H),v.setRenderTarget(l),_&&v.render(E,m),v.render(t,m)}E.geometry.dispose(),E.material.dispose(),v.toneMapping=M,v.autoClear=y,t.background=P}_textureToCubeUV(t,i){const r=this._renderer,l=t.mapping===Hs||t.mapping===Gs;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=s0()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=r0());const u=l?this._cubemapMaterial:this._equirectMaterial,h=new Si(this._lodPlanes[0],u),d=u.uniforms;d.envMap.value=t;const m=this._cubeSize;ju(i,0,0,3*m,2*m),r.setRenderTarget(i),r.render(h,pd)}_applyPMREM(t){const i=this._renderer,r=i.autoClear;i.autoClear=!1;const l=this._lodPlanes.length;for(let u=1;u<l;u++){const h=Math.sqrt(this._sigmas[u]*this._sigmas[u]-this._sigmas[u-1]*this._sigmas[u-1]),d=n0[(l-u-1)%n0.length];this._blur(t,u-1,u,h,d)}i.autoClear=r}_blur(t,i,r,l,u){const h=this._pingPongRenderTarget;this._halfBlur(t,h,i,r,l,"latitudinal",u),this._halfBlur(h,t,r,r,l,"longitudinal",u)}_halfBlur(t,i,r,l,u,h,d){const m=this._renderer,p=this._blurMaterial;h!=="latitudinal"&&h!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const S=3,v=new Si(this._lodPlanes[l],p),y=p.uniforms,M=this._sizeLods[r]-1,T=isFinite(u)?Math.PI/(2*M):2*Math.PI/(2*Ur-1),A=u/T,E=isFinite(u)?1+Math.floor(S*A):Ur;E>Ur&&console.warn(`sigmaRadians, ${u}, is too large and will clip, as it requested ${E} samples when the maximum is set to ${Ur}`);const _=[];let P=0;for(let L=0;L<Ur;++L){const j=L/A,D=Math.exp(-j*j/2);_.push(D),L===0?P+=D:L<E&&(P+=2*D)}for(let L=0;L<_.length;L++)_[L]=_[L]/P;y.envMap.value=t.texture,y.samples.value=E,y.weights.value=_,y.latitudinal.value=h==="latitudinal",d&&(y.poleAxis.value=d);const{_lodMax:O}=this;y.dTheta.value=T,y.mipInt.value=O-r;const w=this._sizeLods[l],H=3*w*(l>O-zs?l-O+zs:0),B=4*(this._cubeSize-w);ju(i,H,B,3*w,2*w),m.setRenderTarget(i),m.render(v,pd)}}function x1(s){const t=[],i=[],r=[];let l=s;const u=s-zs+1+t0.length;for(let h=0;h<u;h++){const d=Math.pow(2,l);i.push(d);let m=1/d;h>s-zs?m=t0[h-s+zs-1]:h===0&&(m=0),r.push(m);const p=1/(d-2),S=-p,v=1+p,y=[S,S,v,S,v,v,S,S,v,v,S,v],M=6,T=6,A=3,E=2,_=1,P=new Float32Array(A*T*M),O=new Float32Array(E*T*M),w=new Float32Array(_*T*M);for(let B=0;B<M;B++){const L=B%3*2/3-1,j=B>2?0:-1,D=[L,j,0,L+2/3,j,0,L+2/3,j+1,0,L,j,0,L+2/3,j+1,0,L,j+1,0];P.set(D,A*T*B),O.set(y,E*T*B);const C=[B,B,B,B,B,B];w.set(C,_*T*B)}const H=new xa;H.setAttribute("position",new Ui(P,A)),H.setAttribute("uv",new Ui(O,E)),H.setAttribute("faceIndex",new Ui(w,_)),t.push(H),l>zs&&l--}return{lodPlanes:t,sizeLods:i,sigmas:r}}function a0(s,t,i){const r=new nr(s,t,i);return r.texture.mapping=xc,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function ju(s,t,i,r,l){s.viewport.set(t,i,r,l),s.scissor.set(t,i,r,l)}function y1(s,t,i){const r=new Float32Array(Ur),l=new st(0,1,0);return new Sa({name:"SphericalGaussianBlur",defines:{n:Ur,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:wp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:$a,depthTest:!1,depthWrite:!1})}function r0(){return new Sa({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:wp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:$a,depthTest:!1,depthWrite:!1})}function s0(){return new Sa({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:wp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:$a,depthTest:!1,depthWrite:!1})}function wp(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function M1(s){let t=new WeakMap,i=null;function r(d){if(d&&d.isTexture){const m=d.mapping,p=m===Od||m===zd,S=m===Hs||m===Gs;if(p||S){let v=t.get(d);const y=v!==void 0?v.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==y)return i===null&&(i=new i0(s)),v=p?i.fromEquirectangular(d,v):i.fromCubemap(d,v),v.texture.pmremVersion=d.pmremVersion,t.set(d,v),v.texture;if(v!==void 0)return v.texture;{const M=d.image;return p&&M&&M.height>0||S&&M&&l(M)?(i===null&&(i=new i0(s)),v=p?i.fromEquirectangular(d):i.fromCubemap(d),v.texture.pmremVersion=d.pmremVersion,t.set(d,v),d.addEventListener("dispose",u),v.texture):null}}}return d}function l(d){let m=0;const p=6;for(let S=0;S<p;S++)d[S]!==void 0&&m++;return m===p}function u(d){const m=d.target;m.removeEventListener("dispose",u);const p=t.get(m);p!==void 0&&(t.delete(m),p.dispose())}function h(){t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:h}}function E1(s){const t={};function i(r){if(t[r]!==void 0)return t[r];let l;switch(r){case"WEBGL_depth_texture":l=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":l=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":l=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":l=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:l=s.getExtension(r)}return t[r]=l,l}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){const l=i(r);return l===null&&ol("THREE.WebGLRenderer: "+r+" extension not supported."),l}}}function T1(s,t,i,r){const l={},u=new WeakMap;function h(v){const y=v.target;y.index!==null&&t.remove(y.index);for(const T in y.attributes)t.remove(y.attributes[T]);y.removeEventListener("dispose",h),delete l[y.id];const M=u.get(y);M&&(t.remove(M),u.delete(y)),r.releaseStatesOfGeometry(y),y.isInstancedBufferGeometry===!0&&delete y._maxInstanceCount,i.memory.geometries--}function d(v,y){return l[y.id]===!0||(y.addEventListener("dispose",h),l[y.id]=!0,i.memory.geometries++),y}function m(v){const y=v.attributes;for(const M in y)t.update(y[M],s.ARRAY_BUFFER)}function p(v){const y=[],M=v.index,T=v.attributes.position;let A=0;if(M!==null){const P=M.array;A=M.version;for(let O=0,w=P.length;O<w;O+=3){const H=P[O+0],B=P[O+1],L=P[O+2];y.push(H,B,B,L,L,H)}}else if(T!==void 0){const P=T.array;A=T.version;for(let O=0,w=P.length/3-1;O<w;O+=3){const H=O+0,B=O+1,L=O+2;y.push(H,B,B,L,L,H)}}else return;const E=new($0(y)?sS:rS)(y,1);E.version=A;const _=u.get(v);_&&t.remove(_),u.set(v,E)}function S(v){const y=u.get(v);if(y){const M=v.index;M!==null&&y.version<M.version&&p(v)}else p(v);return u.get(v)}return{get:d,update:m,getWireframeAttribute:S}}function b1(s,t,i){let r;function l(y){r=y}let u,h;function d(y){u=y.type,h=y.bytesPerElement}function m(y,M){s.drawElements(r,M,u,y*h),i.update(M,r,1)}function p(y,M,T){T!==0&&(s.drawElementsInstanced(r,M,u,y*h,T),i.update(M,r,T))}function S(y,M,T){if(T===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,M,0,u,y,0,T);let E=0;for(let _=0;_<T;_++)E+=M[_];i.update(E,r,1)}function v(y,M,T,A){if(T===0)return;const E=t.get("WEBGL_multi_draw");if(E===null)for(let _=0;_<y.length;_++)p(y[_]/h,M[_],A[_]);else{E.multiDrawElementsInstancedWEBGL(r,M,0,u,y,0,A,0,T);let _=0;for(let P=0;P<T;P++)_+=M[P]*A[P];i.update(_,r,1)}}this.setMode=l,this.setIndex=d,this.render=m,this.renderInstances=p,this.renderMultiDraw=S,this.renderMultiDrawInstances=v}function A1(s){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(u,h,d){switch(i.calls++,h){case s.TRIANGLES:i.triangles+=d*(u/3);break;case s.LINES:i.lines+=d*(u/2);break;case s.LINE_STRIP:i.lines+=d*(u-1);break;case s.LINE_LOOP:i.lines+=d*u;break;case s.POINTS:i.points+=d*u;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",h);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:l,update:r}}function R1(s,t,i){const r=new WeakMap,l=new en;function u(h,d,m){const p=h.morphTargetInfluences,S=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,v=S!==void 0?S.length:0;let y=r.get(d);if(y===void 0||y.count!==v){let C=function(){j.dispose(),r.delete(d),d.removeEventListener("dispose",C)};var M=C;y!==void 0&&y.texture.dispose();const T=d.morphAttributes.position!==void 0,A=d.morphAttributes.normal!==void 0,E=d.morphAttributes.color!==void 0,_=d.morphAttributes.position||[],P=d.morphAttributes.normal||[],O=d.morphAttributes.color||[];let w=0;T===!0&&(w=1),A===!0&&(w=2),E===!0&&(w=3);let H=d.attributes.position.count*w,B=1;H>t.maxTextureSize&&(B=Math.ceil(H/t.maxTextureSize),H=t.maxTextureSize);const L=new Float32Array(H*B*4*v),j=new tS(L,H,B,v);j.type=Gi,j.needsUpdate=!0;const D=w*4;for(let V=0;V<v;V++){const tt=_[V],ct=P[V],ft=O[V],dt=H*B*4*V;for(let z=0;z<tt.count;z++){const q=z*D;T===!0&&(l.fromBufferAttribute(tt,z),L[dt+q+0]=l.x,L[dt+q+1]=l.y,L[dt+q+2]=l.z,L[dt+q+3]=0),A===!0&&(l.fromBufferAttribute(ct,z),L[dt+q+4]=l.x,L[dt+q+5]=l.y,L[dt+q+6]=l.z,L[dt+q+7]=0),E===!0&&(l.fromBufferAttribute(ft,z),L[dt+q+8]=l.x,L[dt+q+9]=l.y,L[dt+q+10]=l.z,L[dt+q+11]=ft.itemSize===4?l.w:1)}}y={count:v,texture:j,size:new le(H,B)},r.set(d,y),d.addEventListener("dispose",C)}if(h.isInstancedMesh===!0&&h.morphTexture!==null)m.getUniforms().setValue(s,"morphTexture",h.morphTexture,i);else{let T=0;for(let E=0;E<p.length;E++)T+=p[E];const A=d.morphTargetsRelative?1:1-T;m.getUniforms().setValue(s,"morphTargetBaseInfluence",A),m.getUniforms().setValue(s,"morphTargetInfluences",p)}m.getUniforms().setValue(s,"morphTargetsTexture",y.texture,i),m.getUniforms().setValue(s,"morphTargetsTextureSize",y.size)}return{update:u}}function C1(s,t,i,r){let l=new WeakMap;function u(m){const p=r.render.frame,S=m.geometry,v=t.get(m,S);if(l.get(v)!==p&&(t.update(v),l.set(v,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",d)===!1&&m.addEventListener("dispose",d),l.get(m)!==p&&(i.update(m.instanceMatrix,s.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,s.ARRAY_BUFFER),l.set(m,p))),m.isSkinnedMesh){const y=m.skeleton;l.get(y)!==p&&(y.update(),l.set(y,p))}return v}function h(){l=new WeakMap}function d(m){const p=m.target;p.removeEventListener("dispose",d),i.remove(p.instanceMatrix),p.instanceColor!==null&&i.remove(p.instanceColor)}return{update:u,dispose:h}}const dS=new Pn,o0=new cS(1,1),pS=new tS,mS=new tE,gS=new lS,l0=[],u0=[],c0=new Float32Array(16),f0=new Float32Array(9),h0=new Float32Array(4);function Qs(s,t,i){const r=s[0];if(r<=0||r>0)return s;const l=t*i;let u=l0[l];if(u===void 0&&(u=new Float32Array(l),l0[l]=u),t!==0){r.toArray(u,0);for(let h=1,d=0;h!==t;++h)d+=i,s[h].toArray(u,d)}return u}function gn(s,t){if(s.length!==t.length)return!1;for(let i=0,r=s.length;i<r;i++)if(s[i]!==t[i])return!1;return!0}function _n(s,t){for(let i=0,r=t.length;i<r;i++)s[i]=t[i]}function Mc(s,t){let i=u0[t];i===void 0&&(i=new Int32Array(t),u0[t]=i);for(let r=0;r!==t;++r)i[r]=s.allocateTextureUnit();return i}function w1(s,t){const i=this.cache;i[0]!==t&&(s.uniform1f(this.addr,t),i[0]=t)}function D1(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(gn(i,t))return;s.uniform2fv(this.addr,t),_n(i,t)}}function U1(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(gn(i,t))return;s.uniform3fv(this.addr,t),_n(i,t)}}function L1(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(gn(i,t))return;s.uniform4fv(this.addr,t),_n(i,t)}}function N1(s,t){const i=this.cache,r=t.elements;if(r===void 0){if(gn(i,t))return;s.uniformMatrix2fv(this.addr,!1,t),_n(i,t)}else{if(gn(i,r))return;h0.set(r),s.uniformMatrix2fv(this.addr,!1,h0),_n(i,r)}}function O1(s,t){const i=this.cache,r=t.elements;if(r===void 0){if(gn(i,t))return;s.uniformMatrix3fv(this.addr,!1,t),_n(i,t)}else{if(gn(i,r))return;f0.set(r),s.uniformMatrix3fv(this.addr,!1,f0),_n(i,r)}}function z1(s,t){const i=this.cache,r=t.elements;if(r===void 0){if(gn(i,t))return;s.uniformMatrix4fv(this.addr,!1,t),_n(i,t)}else{if(gn(i,r))return;c0.set(r),s.uniformMatrix4fv(this.addr,!1,c0),_n(i,r)}}function P1(s,t){const i=this.cache;i[0]!==t&&(s.uniform1i(this.addr,t),i[0]=t)}function B1(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(gn(i,t))return;s.uniform2iv(this.addr,t),_n(i,t)}}function I1(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(gn(i,t))return;s.uniform3iv(this.addr,t),_n(i,t)}}function F1(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(gn(i,t))return;s.uniform4iv(this.addr,t),_n(i,t)}}function H1(s,t){const i=this.cache;i[0]!==t&&(s.uniform1ui(this.addr,t),i[0]=t)}function G1(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(gn(i,t))return;s.uniform2uiv(this.addr,t),_n(i,t)}}function V1(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(gn(i,t))return;s.uniform3uiv(this.addr,t),_n(i,t)}}function k1(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(gn(i,t))return;s.uniform4uiv(this.addr,t),_n(i,t)}}function X1(s,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l);let u;this.type===s.SAMPLER_2D_SHADOW?(o0.compareFunction=J0,u=o0):u=dS,i.setTexture2D(t||u,l)}function W1(s,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTexture3D(t||mS,l)}function q1(s,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTextureCube(t||gS,l)}function Y1(s,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTexture2DArray(t||pS,l)}function j1(s){switch(s){case 5126:return w1;case 35664:return D1;case 35665:return U1;case 35666:return L1;case 35674:return N1;case 35675:return O1;case 35676:return z1;case 5124:case 35670:return P1;case 35667:case 35671:return B1;case 35668:case 35672:return I1;case 35669:case 35673:return F1;case 5125:return H1;case 36294:return G1;case 36295:return V1;case 36296:return k1;case 35678:case 36198:case 36298:case 36306:case 35682:return X1;case 35679:case 36299:case 36307:return W1;case 35680:case 36300:case 36308:case 36293:return q1;case 36289:case 36303:case 36311:case 36292:return Y1}}function Z1(s,t){s.uniform1fv(this.addr,t)}function K1(s,t){const i=Qs(t,this.size,2);s.uniform2fv(this.addr,i)}function Q1(s,t){const i=Qs(t,this.size,3);s.uniform3fv(this.addr,i)}function J1(s,t){const i=Qs(t,this.size,4);s.uniform4fv(this.addr,i)}function $1(s,t){const i=Qs(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,i)}function tA(s,t){const i=Qs(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,i)}function eA(s,t){const i=Qs(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,i)}function nA(s,t){s.uniform1iv(this.addr,t)}function iA(s,t){s.uniform2iv(this.addr,t)}function aA(s,t){s.uniform3iv(this.addr,t)}function rA(s,t){s.uniform4iv(this.addr,t)}function sA(s,t){s.uniform1uiv(this.addr,t)}function oA(s,t){s.uniform2uiv(this.addr,t)}function lA(s,t){s.uniform3uiv(this.addr,t)}function uA(s,t){s.uniform4uiv(this.addr,t)}function cA(s,t,i){const r=this.cache,l=t.length,u=Mc(i,l);gn(r,u)||(s.uniform1iv(this.addr,u),_n(r,u));for(let h=0;h!==l;++h)i.setTexture2D(t[h]||dS,u[h])}function fA(s,t,i){const r=this.cache,l=t.length,u=Mc(i,l);gn(r,u)||(s.uniform1iv(this.addr,u),_n(r,u));for(let h=0;h!==l;++h)i.setTexture3D(t[h]||mS,u[h])}function hA(s,t,i){const r=this.cache,l=t.length,u=Mc(i,l);gn(r,u)||(s.uniform1iv(this.addr,u),_n(r,u));for(let h=0;h!==l;++h)i.setTextureCube(t[h]||gS,u[h])}function dA(s,t,i){const r=this.cache,l=t.length,u=Mc(i,l);gn(r,u)||(s.uniform1iv(this.addr,u),_n(r,u));for(let h=0;h!==l;++h)i.setTexture2DArray(t[h]||pS,u[h])}function pA(s){switch(s){case 5126:return Z1;case 35664:return K1;case 35665:return Q1;case 35666:return J1;case 35674:return $1;case 35675:return tA;case 35676:return eA;case 5124:case 35670:return nA;case 35667:case 35671:return iA;case 35668:case 35672:return aA;case 35669:case 35673:return rA;case 5125:return sA;case 36294:return oA;case 36295:return lA;case 36296:return uA;case 35678:case 36198:case 36298:case 36306:case 35682:return cA;case 35679:case 36299:case 36307:return fA;case 35680:case 36300:case 36308:case 36293:return hA;case 36289:case 36303:case 36311:case 36292:return dA}}class mA{constructor(t,i,r){this.id=t,this.addr=r,this.cache=[],this.type=i.type,this.setValue=j1(i.type)}}class gA{constructor(t,i,r){this.id=t,this.addr=r,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=pA(i.type)}}class _A{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,r){const l=this.seq;for(let u=0,h=l.length;u!==h;++u){const d=l[u];d.setValue(t,i[d.id],r)}}}const Sd=/(\w+)(\])?(\[|\.)?/g;function d0(s,t){s.seq.push(t),s.map[t.id]=t}function vA(s,t,i){const r=s.name,l=r.length;for(Sd.lastIndex=0;;){const u=Sd.exec(r),h=Sd.lastIndex;let d=u[1];const m=u[2]==="]",p=u[3];if(m&&(d=d|0),p===void 0||p==="["&&h+2===l){d0(i,p===void 0?new mA(d,s,t):new gA(d,s,t));break}else{let v=i.map[d];v===void 0&&(v=new _A(d),d0(i,v)),i=v}}}class ic{constructor(t,i){this.seq=[],this.map={};const r=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let l=0;l<r;++l){const u=t.getActiveUniform(i,l),h=t.getUniformLocation(i,u.name);vA(u,h,this)}}setValue(t,i,r,l){const u=this.map[i];u!==void 0&&u.setValue(t,r,l)}setOptional(t,i,r){const l=i[r];l!==void 0&&this.setValue(t,r,l)}static upload(t,i,r,l){for(let u=0,h=i.length;u!==h;++u){const d=i[u],m=r[d.id];m.needsUpdate!==!1&&d.setValue(t,m.value,l)}}static seqWithValue(t,i){const r=[];for(let l=0,u=t.length;l!==u;++l){const h=t[l];h.id in i&&r.push(h)}return r}}function p0(s,t,i){const r=s.createShader(t);return s.shaderSource(r,i),s.compileShader(r),r}const SA=37297;let xA=0;function yA(s,t){const i=s.split(`
`),r=[],l=Math.max(t-6,0),u=Math.min(t+6,i.length);for(let h=l;h<u;h++){const d=h+1;r.push(`${d===t?">":" "} ${d}: ${i[h]}`)}return r.join(`
`)}const m0=new fe;function MA(s){De._getMatrix(m0,De.workingColorSpace,s);const t=`mat3( ${m0.elements.map(i=>i.toFixed(4))} )`;switch(De.getTransfer(s)){case uc:return[t,"LinearTransferOETF"];case ke:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function g0(s,t,i){const r=s.getShaderParameter(t,s.COMPILE_STATUS),u=(s.getShaderInfoLog(t)||"").trim();if(r&&u==="")return"";const h=/ERROR: 0:(\d+)/.exec(u);if(h){const d=parseInt(h[1]);return i.toUpperCase()+`

`+u+`

`+yA(s.getShaderSource(t),d)}else return u}function EA(s,t){const i=MA(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function TA(s,t){let i;switch(t){case RM:i="Linear";break;case CM:i="Reinhard";break;case wM:i="Cineon";break;case DM:i="ACESFilmic";break;case LM:i="AgX";break;case NM:i="Neutral";break;case UM:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),i="Linear"}return"vec3 "+s+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Zu=new st;function bA(){De.getLuminanceCoefficients(Zu);const s=Zu.x.toFixed(4),t=Zu.y.toFixed(4),i=Zu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function AA(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Jo).join(`
`)}function RA(s){const t=[];for(const i in s){const r=s[i];r!==!1&&t.push("#define "+i+" "+r)}return t.join(`
`)}function CA(s,t){const i={},r=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let l=0;l<r;l++){const u=s.getActiveAttrib(t,l),h=u.name;let d=1;u.type===s.FLOAT_MAT2&&(d=2),u.type===s.FLOAT_MAT3&&(d=3),u.type===s.FLOAT_MAT4&&(d=4),i[h]={type:u.type,location:s.getAttribLocation(t,h),locationSize:d}}return i}function Jo(s){return s!==""}function _0(s,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function v0(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const wA=/^[ \t]*#include +<([\w\d./]+)>/gm;function dp(s){return s.replace(wA,UA)}const DA=new Map;function UA(s,t){let i=he[t];if(i===void 0){const r=DA.get(t);if(r!==void 0)i=he[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,r);else throw new Error("Can not resolve #include <"+t+">")}return dp(i)}const LA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function S0(s){return s.replace(LA,NA)}function NA(s,t,i,r){let l="";for(let u=parseInt(t);u<parseInt(i);u++)l+=r.replace(/\[\s*i\s*\]/g,"[ "+u+" ]").replace(/UNROLLED_LOOP_INDEX/g,u);return l}function x0(s){let t=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function OA(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===G0?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===sM?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===ha&&(t="SHADOWMAP_TYPE_VSM"),t}function zA(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Hs:case Gs:t="ENVMAP_TYPE_CUBE";break;case xc:t="ENVMAP_TYPE_CUBE_UV";break}return t}function PA(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Gs:t="ENVMAP_MODE_REFRACTION";break}return t}function BA(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case V0:t="ENVMAP_BLENDING_MULTIPLY";break;case bM:t="ENVMAP_BLENDING_MIX";break;case AM:t="ENVMAP_BLENDING_ADD";break}return t}function IA(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:r,maxMip:i}}function FA(s,t,i,r){const l=s.getContext(),u=i.defines;let h=i.vertexShader,d=i.fragmentShader;const m=OA(i),p=zA(i),S=PA(i),v=BA(i),y=IA(i),M=AA(i),T=RA(u),A=l.createProgram();let E,_,P=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(E=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T].filter(Jo).join(`
`),E.length>0&&(E+=`
`),_=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T].filter(Jo).join(`
`),_.length>0&&(_+=`
`)):(E=[x0(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+S:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Jo).join(`
`),_=[x0(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+S:"",i.envMap?"#define "+v:"",y?"#define CUBEUV_TEXEL_WIDTH "+y.texelWidth:"",y?"#define CUBEUV_TEXEL_HEIGHT "+y.texelHeight:"",y?"#define CUBEUV_MAX_MIP "+y.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==tr?"#define TONE_MAPPING":"",i.toneMapping!==tr?he.tonemapping_pars_fragment:"",i.toneMapping!==tr?TA("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",he.colorspace_pars_fragment,EA("linearToOutputTexel",i.outputColorSpace),bA(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Jo).join(`
`)),h=dp(h),h=_0(h,i),h=v0(h,i),d=dp(d),d=_0(d,i),d=v0(d,i),h=S0(h),d=S0(d),i.isRawShaderMaterial!==!0&&(P=`#version 300 es
`,E=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+E,_=["#define varying in",i.glslVersion===Dv?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===Dv?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const O=P+E+h,w=P+_+d,H=p0(l,l.VERTEX_SHADER,O),B=p0(l,l.FRAGMENT_SHADER,w);l.attachShader(A,H),l.attachShader(A,B),i.index0AttributeName!==void 0?l.bindAttribLocation(A,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(A,0,"position"),l.linkProgram(A);function L(V){if(s.debug.checkShaderErrors){const tt=l.getProgramInfoLog(A)||"",ct=l.getShaderInfoLog(H)||"",ft=l.getShaderInfoLog(B)||"",dt=tt.trim(),z=ct.trim(),q=ft.trim();let W=!0,mt=!0;if(l.getProgramParameter(A,l.LINK_STATUS)===!1)if(W=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(l,A,H,B);else{const yt=g0(l,H,"vertex"),N=g0(l,B,"fragment");console.error("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(A,l.VALIDATE_STATUS)+`

Material Name: `+V.name+`
Material Type: `+V.type+`

Program Info Log: `+dt+`
`+yt+`
`+N)}else dt!==""?console.warn("THREE.WebGLProgram: Program Info Log:",dt):(z===""||q==="")&&(mt=!1);mt&&(V.diagnostics={runnable:W,programLog:dt,vertexShader:{log:z,prefix:E},fragmentShader:{log:q,prefix:_}})}l.deleteShader(H),l.deleteShader(B),j=new ic(l,A),D=CA(l,A)}let j;this.getUniforms=function(){return j===void 0&&L(this),j};let D;this.getAttributes=function(){return D===void 0&&L(this),D};let C=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=l.getProgramParameter(A,SA)),C},this.destroy=function(){r.releaseStatesOfProgram(this),l.deleteProgram(A),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=xA++,this.cacheKey=t,this.usedTimes=1,this.program=A,this.vertexShader=H,this.fragmentShader=B,this}let HA=0;class GA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const i=t.vertexShader,r=t.fragmentShader,l=this._getShaderStage(i),u=this._getShaderStage(r),h=this._getShaderCacheForMaterial(t);return h.has(l)===!1&&(h.add(l),l.usedTimes++),h.has(u)===!1&&(h.add(u),u.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const r of i)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let r=i.get(t);return r===void 0&&(r=new Set,i.set(t,r)),r}_getShaderStage(t){const i=this.shaderCache;let r=i.get(t);return r===void 0&&(r=new VA(t),i.set(t,r)),r}}class VA{constructor(t){this.id=HA++,this.code=t,this.usedTimes=0}}function kA(s,t,i,r,l,u,h){const d=new nS,m=new GA,p=new Set,S=[],v=l.logarithmicDepthBuffer,y=l.vertexTextures;let M=l.precision;const T={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function A(D){return p.add(D),D===0?"uv":`uv${D}`}function E(D,C,V,tt,ct){const ft=tt.fog,dt=ct.geometry,z=D.isMeshStandardMaterial?tt.environment:null,q=(D.isMeshStandardMaterial?i:t).get(D.envMap||z),W=q&&q.mapping===xc?q.image.height:null,mt=T[D.type];D.precision!==null&&(M=l.getMaxPrecision(D.precision),M!==D.precision&&console.warn("THREE.WebGLProgram.getParameters:",D.precision,"not supported, using",M,"instead."));const yt=dt.morphAttributes.position||dt.morphAttributes.normal||dt.morphAttributes.color,N=yt!==void 0?yt.length:0;let J=0;dt.morphAttributes.position!==void 0&&(J=1),dt.morphAttributes.normal!==void 0&&(J=2),dt.morphAttributes.color!==void 0&&(J=3);let xt,Tt,Ut,Q;if(mt){const Ae=Fi[mt];xt=Ae.vertexShader,Tt=Ae.fragmentShader}else xt=D.vertexShader,Tt=D.fragmentShader,m.update(D),Ut=m.getVertexShaderID(D),Q=m.getFragmentShaderID(D);const ut=s.getRenderTarget(),Et=s.state.buffers.depth.getReversed(),Ct=ct.isInstancedMesh===!0,Ft=ct.isBatchedMesh===!0,ie=!!D.map,Ue=!!D.matcap,F=!!q,be=!!D.aoMap,ne=!!D.lightMap,$t=!!D.bumpMap,qt=!!D.normalMap,Me=!!D.displacementMap,Ht=!!D.emissiveMap,ae=!!D.metalnessMap,je=!!D.roughnessMap,qe=D.anisotropy>0,U=D.clearcoat>0,g=D.dispersion>0,G=D.iridescence>0,$=D.sheen>0,ht=D.transmission>0,at=qe&&!!D.anisotropyMap,Pt=U&&!!D.clearcoatMap,Rt=U&&!!D.clearcoatNormalMap,Gt=U&&!!D.clearcoatRoughnessMap,Yt=G&&!!D.iridescenceMap,bt=G&&!!D.iridescenceThicknessMap,wt=$&&!!D.sheenColorMap,Zt=$&&!!D.sheenRoughnessMap,Bt=!!D.specularMap,Lt=!!D.specularColorMap,oe=!!D.specularIntensityMap,X=ht&&!!D.transmissionMap,At=ht&&!!D.thicknessMap,Dt=!!D.gradientMap,It=!!D.alphaMap,Mt=D.alphaTest>0,vt=!!D.alphaHash,Vt=!!D.extensions;let re=tr;D.toneMapped&&(ut===null||ut.isXRRenderTarget===!0)&&(re=s.toneMapping);const Be={shaderID:mt,shaderType:D.type,shaderName:D.name,vertexShader:xt,fragmentShader:Tt,defines:D.defines,customVertexShaderID:Ut,customFragmentShaderID:Q,isRawShaderMaterial:D.isRawShaderMaterial===!0,glslVersion:D.glslVersion,precision:M,batching:Ft,batchingColor:Ft&&ct._colorsTexture!==null,instancing:Ct,instancingColor:Ct&&ct.instanceColor!==null,instancingMorph:Ct&&ct.morphTexture!==null,supportsVertexTextures:y,outputColorSpace:ut===null?s.outputColorSpace:ut.isXRRenderTarget===!0?ut.texture.colorSpace:Vs,alphaToCoverage:!!D.alphaToCoverage,map:ie,matcap:Ue,envMap:F,envMapMode:F&&q.mapping,envMapCubeUVHeight:W,aoMap:be,lightMap:ne,bumpMap:$t,normalMap:qt,displacementMap:y&&Me,emissiveMap:Ht,normalMapObjectSpace:qt&&D.normalMapType===IM,normalMapTangentSpace:qt&&D.normalMapType===BM,metalnessMap:ae,roughnessMap:je,anisotropy:qe,anisotropyMap:at,clearcoat:U,clearcoatMap:Pt,clearcoatNormalMap:Rt,clearcoatRoughnessMap:Gt,dispersion:g,iridescence:G,iridescenceMap:Yt,iridescenceThicknessMap:bt,sheen:$,sheenColorMap:wt,sheenRoughnessMap:Zt,specularMap:Bt,specularColorMap:Lt,specularIntensityMap:oe,transmission:ht,transmissionMap:X,thicknessMap:At,gradientMap:Dt,opaque:D.transparent===!1&&D.blending===Bs&&D.alphaToCoverage===!1,alphaMap:It,alphaTest:Mt,alphaHash:vt,combine:D.combine,mapUv:ie&&A(D.map.channel),aoMapUv:be&&A(D.aoMap.channel),lightMapUv:ne&&A(D.lightMap.channel),bumpMapUv:$t&&A(D.bumpMap.channel),normalMapUv:qt&&A(D.normalMap.channel),displacementMapUv:Me&&A(D.displacementMap.channel),emissiveMapUv:Ht&&A(D.emissiveMap.channel),metalnessMapUv:ae&&A(D.metalnessMap.channel),roughnessMapUv:je&&A(D.roughnessMap.channel),anisotropyMapUv:at&&A(D.anisotropyMap.channel),clearcoatMapUv:Pt&&A(D.clearcoatMap.channel),clearcoatNormalMapUv:Rt&&A(D.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Gt&&A(D.clearcoatRoughnessMap.channel),iridescenceMapUv:Yt&&A(D.iridescenceMap.channel),iridescenceThicknessMapUv:bt&&A(D.iridescenceThicknessMap.channel),sheenColorMapUv:wt&&A(D.sheenColorMap.channel),sheenRoughnessMapUv:Zt&&A(D.sheenRoughnessMap.channel),specularMapUv:Bt&&A(D.specularMap.channel),specularColorMapUv:Lt&&A(D.specularColorMap.channel),specularIntensityMapUv:oe&&A(D.specularIntensityMap.channel),transmissionMapUv:X&&A(D.transmissionMap.channel),thicknessMapUv:At&&A(D.thicknessMap.channel),alphaMapUv:It&&A(D.alphaMap.channel),vertexTangents:!!dt.attributes.tangent&&(qt||qe),vertexColors:D.vertexColors,vertexAlphas:D.vertexColors===!0&&!!dt.attributes.color&&dt.attributes.color.itemSize===4,pointsUvs:ct.isPoints===!0&&!!dt.attributes.uv&&(ie||It),fog:!!ft,useFog:D.fog===!0,fogExp2:!!ft&&ft.isFogExp2,flatShading:D.flatShading===!0&&D.wireframe===!1,sizeAttenuation:D.sizeAttenuation===!0,logarithmicDepthBuffer:v,reversedDepthBuffer:Et,skinning:ct.isSkinnedMesh===!0,morphTargets:dt.morphAttributes.position!==void 0,morphNormals:dt.morphAttributes.normal!==void 0,morphColors:dt.morphAttributes.color!==void 0,morphTargetsCount:N,morphTextureStride:J,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numClippingPlanes:h.numPlanes,numClipIntersection:h.numIntersection,dithering:D.dithering,shadowMapEnabled:s.shadowMap.enabled&&V.length>0,shadowMapType:s.shadowMap.type,toneMapping:re,decodeVideoTexture:ie&&D.map.isVideoTexture===!0&&De.getTransfer(D.map.colorSpace)===ke,decodeVideoTextureEmissive:Ht&&D.emissiveMap.isVideoTexture===!0&&De.getTransfer(D.emissiveMap.colorSpace)===ke,premultipliedAlpha:D.premultipliedAlpha,doubleSided:D.side===pa,flipSided:D.side===qn,useDepthPacking:D.depthPacking>=0,depthPacking:D.depthPacking||0,index0AttributeName:D.index0AttributeName,extensionClipCullDistance:Vt&&D.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Vt&&D.extensions.multiDraw===!0||Ft)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:D.customProgramCacheKey()};return Be.vertexUv1s=p.has(1),Be.vertexUv2s=p.has(2),Be.vertexUv3s=p.has(3),p.clear(),Be}function _(D){const C=[];if(D.shaderID?C.push(D.shaderID):(C.push(D.customVertexShaderID),C.push(D.customFragmentShaderID)),D.defines!==void 0)for(const V in D.defines)C.push(V),C.push(D.defines[V]);return D.isRawShaderMaterial===!1&&(P(C,D),O(C,D),C.push(s.outputColorSpace)),C.push(D.customProgramCacheKey),C.join()}function P(D,C){D.push(C.precision),D.push(C.outputColorSpace),D.push(C.envMapMode),D.push(C.envMapCubeUVHeight),D.push(C.mapUv),D.push(C.alphaMapUv),D.push(C.lightMapUv),D.push(C.aoMapUv),D.push(C.bumpMapUv),D.push(C.normalMapUv),D.push(C.displacementMapUv),D.push(C.emissiveMapUv),D.push(C.metalnessMapUv),D.push(C.roughnessMapUv),D.push(C.anisotropyMapUv),D.push(C.clearcoatMapUv),D.push(C.clearcoatNormalMapUv),D.push(C.clearcoatRoughnessMapUv),D.push(C.iridescenceMapUv),D.push(C.iridescenceThicknessMapUv),D.push(C.sheenColorMapUv),D.push(C.sheenRoughnessMapUv),D.push(C.specularMapUv),D.push(C.specularColorMapUv),D.push(C.specularIntensityMapUv),D.push(C.transmissionMapUv),D.push(C.thicknessMapUv),D.push(C.combine),D.push(C.fogExp2),D.push(C.sizeAttenuation),D.push(C.morphTargetsCount),D.push(C.morphAttributeCount),D.push(C.numDirLights),D.push(C.numPointLights),D.push(C.numSpotLights),D.push(C.numSpotLightMaps),D.push(C.numHemiLights),D.push(C.numRectAreaLights),D.push(C.numDirLightShadows),D.push(C.numPointLightShadows),D.push(C.numSpotLightShadows),D.push(C.numSpotLightShadowsWithMaps),D.push(C.numLightProbes),D.push(C.shadowMapType),D.push(C.toneMapping),D.push(C.numClippingPlanes),D.push(C.numClipIntersection),D.push(C.depthPacking)}function O(D,C){d.disableAll(),C.supportsVertexTextures&&d.enable(0),C.instancing&&d.enable(1),C.instancingColor&&d.enable(2),C.instancingMorph&&d.enable(3),C.matcap&&d.enable(4),C.envMap&&d.enable(5),C.normalMapObjectSpace&&d.enable(6),C.normalMapTangentSpace&&d.enable(7),C.clearcoat&&d.enable(8),C.iridescence&&d.enable(9),C.alphaTest&&d.enable(10),C.vertexColors&&d.enable(11),C.vertexAlphas&&d.enable(12),C.vertexUv1s&&d.enable(13),C.vertexUv2s&&d.enable(14),C.vertexUv3s&&d.enable(15),C.vertexTangents&&d.enable(16),C.anisotropy&&d.enable(17),C.alphaHash&&d.enable(18),C.batching&&d.enable(19),C.dispersion&&d.enable(20),C.batchingColor&&d.enable(21),C.gradientMap&&d.enable(22),D.push(d.mask),d.disableAll(),C.fog&&d.enable(0),C.useFog&&d.enable(1),C.flatShading&&d.enable(2),C.logarithmicDepthBuffer&&d.enable(3),C.reversedDepthBuffer&&d.enable(4),C.skinning&&d.enable(5),C.morphTargets&&d.enable(6),C.morphNormals&&d.enable(7),C.morphColors&&d.enable(8),C.premultipliedAlpha&&d.enable(9),C.shadowMapEnabled&&d.enable(10),C.doubleSided&&d.enable(11),C.flipSided&&d.enable(12),C.useDepthPacking&&d.enable(13),C.dithering&&d.enable(14),C.transmission&&d.enable(15),C.sheen&&d.enable(16),C.opaque&&d.enable(17),C.pointsUvs&&d.enable(18),C.decodeVideoTexture&&d.enable(19),C.decodeVideoTextureEmissive&&d.enable(20),C.alphaToCoverage&&d.enable(21),D.push(d.mask)}function w(D){const C=T[D.type];let V;if(C){const tt=Fi[C];V=dE.clone(tt.uniforms)}else V=D.uniforms;return V}function H(D,C){let V;for(let tt=0,ct=S.length;tt<ct;tt++){const ft=S[tt];if(ft.cacheKey===C){V=ft,++V.usedTimes;break}}return V===void 0&&(V=new FA(s,C,D,u),S.push(V)),V}function B(D){if(--D.usedTimes===0){const C=S.indexOf(D);S[C]=S[S.length-1],S.pop(),D.destroy()}}function L(D){m.remove(D)}function j(){m.dispose()}return{getParameters:E,getProgramCacheKey:_,getUniforms:w,acquireProgram:H,releaseProgram:B,releaseShaderCache:L,programs:S,dispose:j}}function XA(){let s=new WeakMap;function t(h){return s.has(h)}function i(h){let d=s.get(h);return d===void 0&&(d={},s.set(h,d)),d}function r(h){s.delete(h)}function l(h,d,m){s.get(h)[d]=m}function u(){s=new WeakMap}return{has:t,get:i,remove:r,update:l,dispose:u}}function WA(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function y0(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function M0(){const s=[];let t=0;const i=[],r=[],l=[];function u(){t=0,i.length=0,r.length=0,l.length=0}function h(v,y,M,T,A,E){let _=s[t];return _===void 0?(_={id:v.id,object:v,geometry:y,material:M,groupOrder:T,renderOrder:v.renderOrder,z:A,group:E},s[t]=_):(_.id=v.id,_.object=v,_.geometry=y,_.material=M,_.groupOrder=T,_.renderOrder=v.renderOrder,_.z=A,_.group=E),t++,_}function d(v,y,M,T,A,E){const _=h(v,y,M,T,A,E);M.transmission>0?r.push(_):M.transparent===!0?l.push(_):i.push(_)}function m(v,y,M,T,A,E){const _=h(v,y,M,T,A,E);M.transmission>0?r.unshift(_):M.transparent===!0?l.unshift(_):i.unshift(_)}function p(v,y){i.length>1&&i.sort(v||WA),r.length>1&&r.sort(y||y0),l.length>1&&l.sort(y||y0)}function S(){for(let v=t,y=s.length;v<y;v++){const M=s[v];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:i,transmissive:r,transparent:l,init:u,push:d,unshift:m,finish:S,sort:p}}function qA(){let s=new WeakMap;function t(r,l){const u=s.get(r);let h;return u===void 0?(h=new M0,s.set(r,[h])):l>=u.length?(h=new M0,u.push(h)):h=u[l],h}function i(){s=new WeakMap}return{get:t,dispose:i}}function YA(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let i;switch(t.type){case"DirectionalLight":i={direction:new st,color:new Ne};break;case"SpotLight":i={position:new st,direction:new st,color:new Ne,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new st,color:new Ne,distance:0,decay:0};break;case"HemisphereLight":i={direction:new st,skyColor:new Ne,groundColor:new Ne};break;case"RectAreaLight":i={color:new Ne,position:new st,halfWidth:new st,halfHeight:new st};break}return s[t.id]=i,i}}}function jA(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let i;switch(t.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new le};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new le};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new le,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=i,i}}}let ZA=0;function KA(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function QA(s){const t=new YA,i=jA(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)r.probe.push(new st);const l=new st,u=new dn,h=new dn;function d(p){let S=0,v=0,y=0;for(let D=0;D<9;D++)r.probe[D].set(0,0,0);let M=0,T=0,A=0,E=0,_=0,P=0,O=0,w=0,H=0,B=0,L=0;p.sort(KA);for(let D=0,C=p.length;D<C;D++){const V=p[D],tt=V.color,ct=V.intensity,ft=V.distance,dt=V.shadow&&V.shadow.map?V.shadow.map.texture:null;if(V.isAmbientLight)S+=tt.r*ct,v+=tt.g*ct,y+=tt.b*ct;else if(V.isLightProbe){for(let z=0;z<9;z++)r.probe[z].addScaledVector(V.sh.coefficients[z],ct);L++}else if(V.isDirectionalLight){const z=t.get(V);if(z.color.copy(V.color).multiplyScalar(V.intensity),V.castShadow){const q=V.shadow,W=i.get(V);W.shadowIntensity=q.intensity,W.shadowBias=q.bias,W.shadowNormalBias=q.normalBias,W.shadowRadius=q.radius,W.shadowMapSize=q.mapSize,r.directionalShadow[M]=W,r.directionalShadowMap[M]=dt,r.directionalShadowMatrix[M]=V.shadow.matrix,P++}r.directional[M]=z,M++}else if(V.isSpotLight){const z=t.get(V);z.position.setFromMatrixPosition(V.matrixWorld),z.color.copy(tt).multiplyScalar(ct),z.distance=ft,z.coneCos=Math.cos(V.angle),z.penumbraCos=Math.cos(V.angle*(1-V.penumbra)),z.decay=V.decay,r.spot[A]=z;const q=V.shadow;if(V.map&&(r.spotLightMap[H]=V.map,H++,q.updateMatrices(V),V.castShadow&&B++),r.spotLightMatrix[A]=q.matrix,V.castShadow){const W=i.get(V);W.shadowIntensity=q.intensity,W.shadowBias=q.bias,W.shadowNormalBias=q.normalBias,W.shadowRadius=q.radius,W.shadowMapSize=q.mapSize,r.spotShadow[A]=W,r.spotShadowMap[A]=dt,w++}A++}else if(V.isRectAreaLight){const z=t.get(V);z.color.copy(tt).multiplyScalar(ct),z.halfWidth.set(V.width*.5,0,0),z.halfHeight.set(0,V.height*.5,0),r.rectArea[E]=z,E++}else if(V.isPointLight){const z=t.get(V);if(z.color.copy(V.color).multiplyScalar(V.intensity),z.distance=V.distance,z.decay=V.decay,V.castShadow){const q=V.shadow,W=i.get(V);W.shadowIntensity=q.intensity,W.shadowBias=q.bias,W.shadowNormalBias=q.normalBias,W.shadowRadius=q.radius,W.shadowMapSize=q.mapSize,W.shadowCameraNear=q.camera.near,W.shadowCameraFar=q.camera.far,r.pointShadow[T]=W,r.pointShadowMap[T]=dt,r.pointShadowMatrix[T]=V.shadow.matrix,O++}r.point[T]=z,T++}else if(V.isHemisphereLight){const z=t.get(V);z.skyColor.copy(V.color).multiplyScalar(ct),z.groundColor.copy(V.groundColor).multiplyScalar(ct),r.hemi[_]=z,_++}}E>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Ot.LTC_FLOAT_1,r.rectAreaLTC2=Ot.LTC_FLOAT_2):(r.rectAreaLTC1=Ot.LTC_HALF_1,r.rectAreaLTC2=Ot.LTC_HALF_2)),r.ambient[0]=S,r.ambient[1]=v,r.ambient[2]=y;const j=r.hash;(j.directionalLength!==M||j.pointLength!==T||j.spotLength!==A||j.rectAreaLength!==E||j.hemiLength!==_||j.numDirectionalShadows!==P||j.numPointShadows!==O||j.numSpotShadows!==w||j.numSpotMaps!==H||j.numLightProbes!==L)&&(r.directional.length=M,r.spot.length=A,r.rectArea.length=E,r.point.length=T,r.hemi.length=_,r.directionalShadow.length=P,r.directionalShadowMap.length=P,r.pointShadow.length=O,r.pointShadowMap.length=O,r.spotShadow.length=w,r.spotShadowMap.length=w,r.directionalShadowMatrix.length=P,r.pointShadowMatrix.length=O,r.spotLightMatrix.length=w+H-B,r.spotLightMap.length=H,r.numSpotLightShadowsWithMaps=B,r.numLightProbes=L,j.directionalLength=M,j.pointLength=T,j.spotLength=A,j.rectAreaLength=E,j.hemiLength=_,j.numDirectionalShadows=P,j.numPointShadows=O,j.numSpotShadows=w,j.numSpotMaps=H,j.numLightProbes=L,r.version=ZA++)}function m(p,S){let v=0,y=0,M=0,T=0,A=0;const E=S.matrixWorldInverse;for(let _=0,P=p.length;_<P;_++){const O=p[_];if(O.isDirectionalLight){const w=r.directional[v];w.direction.setFromMatrixPosition(O.matrixWorld),l.setFromMatrixPosition(O.target.matrixWorld),w.direction.sub(l),w.direction.transformDirection(E),v++}else if(O.isSpotLight){const w=r.spot[M];w.position.setFromMatrixPosition(O.matrixWorld),w.position.applyMatrix4(E),w.direction.setFromMatrixPosition(O.matrixWorld),l.setFromMatrixPosition(O.target.matrixWorld),w.direction.sub(l),w.direction.transformDirection(E),M++}else if(O.isRectAreaLight){const w=r.rectArea[T];w.position.setFromMatrixPosition(O.matrixWorld),w.position.applyMatrix4(E),h.identity(),u.copy(O.matrixWorld),u.premultiply(E),h.extractRotation(u),w.halfWidth.set(O.width*.5,0,0),w.halfHeight.set(0,O.height*.5,0),w.halfWidth.applyMatrix4(h),w.halfHeight.applyMatrix4(h),T++}else if(O.isPointLight){const w=r.point[y];w.position.setFromMatrixPosition(O.matrixWorld),w.position.applyMatrix4(E),y++}else if(O.isHemisphereLight){const w=r.hemi[A];w.direction.setFromMatrixPosition(O.matrixWorld),w.direction.transformDirection(E),A++}}}return{setup:d,setupView:m,state:r}}function E0(s){const t=new QA(s),i=[],r=[];function l(S){p.camera=S,i.length=0,r.length=0}function u(S){i.push(S)}function h(S){r.push(S)}function d(){t.setup(i)}function m(S){t.setupView(i,S)}const p={lightsArray:i,shadowsArray:r,camera:null,lights:t,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:d,setupLightsView:m,pushLight:u,pushShadow:h}}function JA(s){let t=new WeakMap;function i(l,u=0){const h=t.get(l);let d;return h===void 0?(d=new E0(s),t.set(l,[d])):u>=h.length?(d=new E0(s),h.push(d)):d=h[u],d}function r(){t=new WeakMap}return{get:i,dispose:r}}const $A=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,tR=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function eR(s,t,i){let r=new uS;const l=new le,u=new le,h=new en,d=new AE({depthPacking:PM}),m=new RE,p={},S=i.maxTextureSize,v={[er]:qn,[qn]:er,[pa]:pa},y=new Sa({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new le},radius:{value:4}},vertexShader:$A,fragmentShader:tR}),M=y.clone();M.defines.HORIZONTAL_PASS=1;const T=new xa;T.setAttribute("position",new Ui(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const A=new Si(T,y),E=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=G0;let _=this.type;this.render=function(B,L,j){if(E.enabled===!1||E.autoUpdate===!1&&E.needsUpdate===!1||B.length===0)return;const D=s.getRenderTarget(),C=s.getActiveCubeFace(),V=s.getActiveMipmapLevel(),tt=s.state;tt.setBlending($a),tt.buffers.depth.getReversed()===!0?tt.buffers.color.setClear(0,0,0,0):tt.buffers.color.setClear(1,1,1,1),tt.buffers.depth.setTest(!0),tt.setScissorTest(!1);const ct=_!==ha&&this.type===ha,ft=_===ha&&this.type!==ha;for(let dt=0,z=B.length;dt<z;dt++){const q=B[dt],W=q.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",q,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;l.copy(W.mapSize);const mt=W.getFrameExtents();if(l.multiply(mt),u.copy(W.mapSize),(l.x>S||l.y>S)&&(l.x>S&&(u.x=Math.floor(S/mt.x),l.x=u.x*mt.x,W.mapSize.x=u.x),l.y>S&&(u.y=Math.floor(S/mt.y),l.y=u.y*mt.y,W.mapSize.y=u.y)),W.map===null||ct===!0||ft===!0){const N=this.type!==ha?{minFilter:si,magFilter:si}:{};W.map!==null&&W.map.dispose(),W.map=new nr(l.x,l.y,N),W.map.texture.name=q.name+".shadowMap",W.camera.updateProjectionMatrix()}s.setRenderTarget(W.map),s.clear();const yt=W.getViewportCount();for(let N=0;N<yt;N++){const J=W.getViewport(N);h.set(u.x*J.x,u.y*J.y,u.x*J.z,u.y*J.w),tt.viewport(h),W.updateMatrices(q,N),r=W.getFrustum(),w(L,j,W.camera,q,this.type)}W.isPointLightShadow!==!0&&this.type===ha&&P(W,j),W.needsUpdate=!1}_=this.type,E.needsUpdate=!1,s.setRenderTarget(D,C,V)};function P(B,L){const j=t.update(A);y.defines.VSM_SAMPLES!==B.blurSamples&&(y.defines.VSM_SAMPLES=B.blurSamples,M.defines.VSM_SAMPLES=B.blurSamples,y.needsUpdate=!0,M.needsUpdate=!0),B.mapPass===null&&(B.mapPass=new nr(l.x,l.y)),y.uniforms.shadow_pass.value=B.map.texture,y.uniforms.resolution.value=B.mapSize,y.uniforms.radius.value=B.radius,s.setRenderTarget(B.mapPass),s.clear(),s.renderBufferDirect(L,null,j,y,A,null),M.uniforms.shadow_pass.value=B.mapPass.texture,M.uniforms.resolution.value=B.mapSize,M.uniforms.radius.value=B.radius,s.setRenderTarget(B.map),s.clear(),s.renderBufferDirect(L,null,j,M,A,null)}function O(B,L,j,D){let C=null;const V=j.isPointLight===!0?B.customDistanceMaterial:B.customDepthMaterial;if(V!==void 0)C=V;else if(C=j.isPointLight===!0?m:d,s.localClippingEnabled&&L.clipShadows===!0&&Array.isArray(L.clippingPlanes)&&L.clippingPlanes.length!==0||L.displacementMap&&L.displacementScale!==0||L.alphaMap&&L.alphaTest>0||L.map&&L.alphaTest>0||L.alphaToCoverage===!0){const tt=C.uuid,ct=L.uuid;let ft=p[tt];ft===void 0&&(ft={},p[tt]=ft);let dt=ft[ct];dt===void 0&&(dt=C.clone(),ft[ct]=dt,L.addEventListener("dispose",H)),C=dt}if(C.visible=L.visible,C.wireframe=L.wireframe,D===ha?C.side=L.shadowSide!==null?L.shadowSide:L.side:C.side=L.shadowSide!==null?L.shadowSide:v[L.side],C.alphaMap=L.alphaMap,C.alphaTest=L.alphaToCoverage===!0?.5:L.alphaTest,C.map=L.map,C.clipShadows=L.clipShadows,C.clippingPlanes=L.clippingPlanes,C.clipIntersection=L.clipIntersection,C.displacementMap=L.displacementMap,C.displacementScale=L.displacementScale,C.displacementBias=L.displacementBias,C.wireframeLinewidth=L.wireframeLinewidth,C.linewidth=L.linewidth,j.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const tt=s.properties.get(C);tt.light=j}return C}function w(B,L,j,D,C){if(B.visible===!1)return;if(B.layers.test(L.layers)&&(B.isMesh||B.isLine||B.isPoints)&&(B.castShadow||B.receiveShadow&&C===ha)&&(!B.frustumCulled||r.intersectsObject(B))){B.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,B.matrixWorld);const ct=t.update(B),ft=B.material;if(Array.isArray(ft)){const dt=ct.groups;for(let z=0,q=dt.length;z<q;z++){const W=dt[z],mt=ft[W.materialIndex];if(mt&&mt.visible){const yt=O(B,mt,D,C);B.onBeforeShadow(s,B,L,j,ct,yt,W),s.renderBufferDirect(j,null,ct,yt,B,W),B.onAfterShadow(s,B,L,j,ct,yt,W)}}}else if(ft.visible){const dt=O(B,ft,D,C);B.onBeforeShadow(s,B,L,j,ct,dt,null),s.renderBufferDirect(j,null,ct,dt,B,null),B.onAfterShadow(s,B,L,j,ct,dt,null)}}const tt=B.children;for(let ct=0,ft=tt.length;ct<ft;ct++)w(tt[ct],L,j,D,C)}function H(B){B.target.removeEventListener("dispose",H);for(const j in p){const D=p[j],C=B.target.uuid;C in D&&(D[C].dispose(),delete D[C])}}}const nR={[Rd]:Cd,[wd]:Ld,[Dd]:Nd,[Fs]:Ud,[Cd]:Rd,[Ld]:wd,[Nd]:Dd,[Ud]:Fs};function iR(s,t){function i(){let X=!1;const At=new en;let Dt=null;const It=new en(0,0,0,0);return{setMask:function(Mt){Dt!==Mt&&!X&&(s.colorMask(Mt,Mt,Mt,Mt),Dt=Mt)},setLocked:function(Mt){X=Mt},setClear:function(Mt,vt,Vt,re,Be){Be===!0&&(Mt*=re,vt*=re,Vt*=re),At.set(Mt,vt,Vt,re),It.equals(At)===!1&&(s.clearColor(Mt,vt,Vt,re),It.copy(At))},reset:function(){X=!1,Dt=null,It.set(-1,0,0,0)}}}function r(){let X=!1,At=!1,Dt=null,It=null,Mt=null;return{setReversed:function(vt){if(At!==vt){const Vt=t.get("EXT_clip_control");vt?Vt.clipControlEXT(Vt.LOWER_LEFT_EXT,Vt.ZERO_TO_ONE_EXT):Vt.clipControlEXT(Vt.LOWER_LEFT_EXT,Vt.NEGATIVE_ONE_TO_ONE_EXT),At=vt;const re=Mt;Mt=null,this.setClear(re)}},getReversed:function(){return At},setTest:function(vt){vt?ut(s.DEPTH_TEST):Et(s.DEPTH_TEST)},setMask:function(vt){Dt!==vt&&!X&&(s.depthMask(vt),Dt=vt)},setFunc:function(vt){if(At&&(vt=nR[vt]),It!==vt){switch(vt){case Rd:s.depthFunc(s.NEVER);break;case Cd:s.depthFunc(s.ALWAYS);break;case wd:s.depthFunc(s.LESS);break;case Fs:s.depthFunc(s.LEQUAL);break;case Dd:s.depthFunc(s.EQUAL);break;case Ud:s.depthFunc(s.GEQUAL);break;case Ld:s.depthFunc(s.GREATER);break;case Nd:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}It=vt}},setLocked:function(vt){X=vt},setClear:function(vt){Mt!==vt&&(At&&(vt=1-vt),s.clearDepth(vt),Mt=vt)},reset:function(){X=!1,Dt=null,It=null,Mt=null,At=!1}}}function l(){let X=!1,At=null,Dt=null,It=null,Mt=null,vt=null,Vt=null,re=null,Be=null;return{setTest:function(Ae){X||(Ae?ut(s.STENCIL_TEST):Et(s.STENCIL_TEST))},setMask:function(Ae){At!==Ae&&!X&&(s.stencilMask(Ae),At=Ae)},setFunc:function(Ae,Ln,oi){(Dt!==Ae||It!==Ln||Mt!==oi)&&(s.stencilFunc(Ae,Ln,oi),Dt=Ae,It=Ln,Mt=oi)},setOp:function(Ae,Ln,oi){(vt!==Ae||Vt!==Ln||re!==oi)&&(s.stencilOp(Ae,Ln,oi),vt=Ae,Vt=Ln,re=oi)},setLocked:function(Ae){X=Ae},setClear:function(Ae){Be!==Ae&&(s.clearStencil(Ae),Be=Ae)},reset:function(){X=!1,At=null,Dt=null,It=null,Mt=null,vt=null,Vt=null,re=null,Be=null}}}const u=new i,h=new r,d=new l,m=new WeakMap,p=new WeakMap;let S={},v={},y=new WeakMap,M=[],T=null,A=!1,E=null,_=null,P=null,O=null,w=null,H=null,B=null,L=new Ne(0,0,0),j=0,D=!1,C=null,V=null,tt=null,ct=null,ft=null;const dt=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let z=!1,q=0;const W=s.getParameter(s.VERSION);W.indexOf("WebGL")!==-1?(q=parseFloat(/^WebGL (\d)/.exec(W)[1]),z=q>=1):W.indexOf("OpenGL ES")!==-1&&(q=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),z=q>=2);let mt=null,yt={};const N=s.getParameter(s.SCISSOR_BOX),J=s.getParameter(s.VIEWPORT),xt=new en().fromArray(N),Tt=new en().fromArray(J);function Ut(X,At,Dt,It){const Mt=new Uint8Array(4),vt=s.createTexture();s.bindTexture(X,vt),s.texParameteri(X,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(X,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Vt=0;Vt<Dt;Vt++)X===s.TEXTURE_3D||X===s.TEXTURE_2D_ARRAY?s.texImage3D(At,0,s.RGBA,1,1,It,0,s.RGBA,s.UNSIGNED_BYTE,Mt):s.texImage2D(At+Vt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Mt);return vt}const Q={};Q[s.TEXTURE_2D]=Ut(s.TEXTURE_2D,s.TEXTURE_2D,1),Q[s.TEXTURE_CUBE_MAP]=Ut(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),Q[s.TEXTURE_2D_ARRAY]=Ut(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Q[s.TEXTURE_3D]=Ut(s.TEXTURE_3D,s.TEXTURE_3D,1,1),u.setClear(0,0,0,1),h.setClear(1),d.setClear(0),ut(s.DEPTH_TEST),h.setFunc(Fs),$t(!1),qt(bv),ut(s.CULL_FACE),be($a);function ut(X){S[X]!==!0&&(s.enable(X),S[X]=!0)}function Et(X){S[X]!==!1&&(s.disable(X),S[X]=!1)}function Ct(X,At){return v[X]!==At?(s.bindFramebuffer(X,At),v[X]=At,X===s.DRAW_FRAMEBUFFER&&(v[s.FRAMEBUFFER]=At),X===s.FRAMEBUFFER&&(v[s.DRAW_FRAMEBUFFER]=At),!0):!1}function Ft(X,At){let Dt=M,It=!1;if(X){Dt=y.get(At),Dt===void 0&&(Dt=[],y.set(At,Dt));const Mt=X.textures;if(Dt.length!==Mt.length||Dt[0]!==s.COLOR_ATTACHMENT0){for(let vt=0,Vt=Mt.length;vt<Vt;vt++)Dt[vt]=s.COLOR_ATTACHMENT0+vt;Dt.length=Mt.length,It=!0}}else Dt[0]!==s.BACK&&(Dt[0]=s.BACK,It=!0);It&&s.drawBuffers(Dt)}function ie(X){return T!==X?(s.useProgram(X),T=X,!0):!1}const Ue={[Dr]:s.FUNC_ADD,[lM]:s.FUNC_SUBTRACT,[uM]:s.FUNC_REVERSE_SUBTRACT};Ue[cM]=s.MIN,Ue[fM]=s.MAX;const F={[hM]:s.ZERO,[dM]:s.ONE,[pM]:s.SRC_COLOR,[bd]:s.SRC_ALPHA,[xM]:s.SRC_ALPHA_SATURATE,[vM]:s.DST_COLOR,[gM]:s.DST_ALPHA,[mM]:s.ONE_MINUS_SRC_COLOR,[Ad]:s.ONE_MINUS_SRC_ALPHA,[SM]:s.ONE_MINUS_DST_COLOR,[_M]:s.ONE_MINUS_DST_ALPHA,[yM]:s.CONSTANT_COLOR,[MM]:s.ONE_MINUS_CONSTANT_COLOR,[EM]:s.CONSTANT_ALPHA,[TM]:s.ONE_MINUS_CONSTANT_ALPHA};function be(X,At,Dt,It,Mt,vt,Vt,re,Be,Ae){if(X===$a){A===!0&&(Et(s.BLEND),A=!1);return}if(A===!1&&(ut(s.BLEND),A=!0),X!==oM){if(X!==E||Ae!==D){if((_!==Dr||w!==Dr)&&(s.blendEquation(s.FUNC_ADD),_=Dr,w=Dr),Ae)switch(X){case Bs:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Td:s.blendFunc(s.ONE,s.ONE);break;case Av:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Rv:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}else switch(X){case Bs:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Td:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case Av:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Rv:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}P=null,O=null,H=null,B=null,L.set(0,0,0),j=0,E=X,D=Ae}return}Mt=Mt||At,vt=vt||Dt,Vt=Vt||It,(At!==_||Mt!==w)&&(s.blendEquationSeparate(Ue[At],Ue[Mt]),_=At,w=Mt),(Dt!==P||It!==O||vt!==H||Vt!==B)&&(s.blendFuncSeparate(F[Dt],F[It],F[vt],F[Vt]),P=Dt,O=It,H=vt,B=Vt),(re.equals(L)===!1||Be!==j)&&(s.blendColor(re.r,re.g,re.b,Be),L.copy(re),j=Be),E=X,D=!1}function ne(X,At){X.side===pa?Et(s.CULL_FACE):ut(s.CULL_FACE);let Dt=X.side===qn;At&&(Dt=!Dt),$t(Dt),X.blending===Bs&&X.transparent===!1?be($a):be(X.blending,X.blendEquation,X.blendSrc,X.blendDst,X.blendEquationAlpha,X.blendSrcAlpha,X.blendDstAlpha,X.blendColor,X.blendAlpha,X.premultipliedAlpha),h.setFunc(X.depthFunc),h.setTest(X.depthTest),h.setMask(X.depthWrite),u.setMask(X.colorWrite);const It=X.stencilWrite;d.setTest(It),It&&(d.setMask(X.stencilWriteMask),d.setFunc(X.stencilFunc,X.stencilRef,X.stencilFuncMask),d.setOp(X.stencilFail,X.stencilZFail,X.stencilZPass)),Ht(X.polygonOffset,X.polygonOffsetFactor,X.polygonOffsetUnits),X.alphaToCoverage===!0?ut(s.SAMPLE_ALPHA_TO_COVERAGE):Et(s.SAMPLE_ALPHA_TO_COVERAGE)}function $t(X){C!==X&&(X?s.frontFace(s.CW):s.frontFace(s.CCW),C=X)}function qt(X){X!==aM?(ut(s.CULL_FACE),X!==V&&(X===bv?s.cullFace(s.BACK):X===rM?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Et(s.CULL_FACE),V=X}function Me(X){X!==tt&&(z&&s.lineWidth(X),tt=X)}function Ht(X,At,Dt){X?(ut(s.POLYGON_OFFSET_FILL),(ct!==At||ft!==Dt)&&(s.polygonOffset(At,Dt),ct=At,ft=Dt)):Et(s.POLYGON_OFFSET_FILL)}function ae(X){X?ut(s.SCISSOR_TEST):Et(s.SCISSOR_TEST)}function je(X){X===void 0&&(X=s.TEXTURE0+dt-1),mt!==X&&(s.activeTexture(X),mt=X)}function qe(X,At,Dt){Dt===void 0&&(mt===null?Dt=s.TEXTURE0+dt-1:Dt=mt);let It=yt[Dt];It===void 0&&(It={type:void 0,texture:void 0},yt[Dt]=It),(It.type!==X||It.texture!==At)&&(mt!==Dt&&(s.activeTexture(Dt),mt=Dt),s.bindTexture(X,At||Q[X]),It.type=X,It.texture=At)}function U(){const X=yt[mt];X!==void 0&&X.type!==void 0&&(s.bindTexture(X.type,null),X.type=void 0,X.texture=void 0)}function g(){try{s.compressedTexImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function G(){try{s.compressedTexImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function $(){try{s.texSubImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function ht(){try{s.texSubImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function at(){try{s.compressedTexSubImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Pt(){try{s.compressedTexSubImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Rt(){try{s.texStorage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Gt(){try{s.texStorage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Yt(){try{s.texImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function bt(){try{s.texImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function wt(X){xt.equals(X)===!1&&(s.scissor(X.x,X.y,X.z,X.w),xt.copy(X))}function Zt(X){Tt.equals(X)===!1&&(s.viewport(X.x,X.y,X.z,X.w),Tt.copy(X))}function Bt(X,At){let Dt=p.get(At);Dt===void 0&&(Dt=new WeakMap,p.set(At,Dt));let It=Dt.get(X);It===void 0&&(It=s.getUniformBlockIndex(At,X.name),Dt.set(X,It))}function Lt(X,At){const It=p.get(At).get(X);m.get(At)!==It&&(s.uniformBlockBinding(At,It,X.__bindingPointIndex),m.set(At,It))}function oe(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),h.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),S={},mt=null,yt={},v={},y=new WeakMap,M=[],T=null,A=!1,E=null,_=null,P=null,O=null,w=null,H=null,B=null,L=new Ne(0,0,0),j=0,D=!1,C=null,V=null,tt=null,ct=null,ft=null,xt.set(0,0,s.canvas.width,s.canvas.height),Tt.set(0,0,s.canvas.width,s.canvas.height),u.reset(),h.reset(),d.reset()}return{buffers:{color:u,depth:h,stencil:d},enable:ut,disable:Et,bindFramebuffer:Ct,drawBuffers:Ft,useProgram:ie,setBlending:be,setMaterial:ne,setFlipSided:$t,setCullFace:qt,setLineWidth:Me,setPolygonOffset:Ht,setScissorTest:ae,activeTexture:je,bindTexture:qe,unbindTexture:U,compressedTexImage2D:g,compressedTexImage3D:G,texImage2D:Yt,texImage3D:bt,updateUBOMapping:Bt,uniformBlockBinding:Lt,texStorage2D:Rt,texStorage3D:Gt,texSubImage2D:$,texSubImage3D:ht,compressedTexSubImage2D:at,compressedTexSubImage3D:Pt,scissor:wt,viewport:Zt,reset:oe}}function aR(s,t,i,r,l,u,h){const d=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new le,S=new WeakMap;let v;const y=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function T(U,g){return M?new OffscreenCanvas(U,g):fc("canvas")}function A(U,g,G){let $=1;const ht=qe(U);if((ht.width>G||ht.height>G)&&($=G/Math.max(ht.width,ht.height)),$<1)if(typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&U instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&U instanceof ImageBitmap||typeof VideoFrame<"u"&&U instanceof VideoFrame){const at=Math.floor($*ht.width),Pt=Math.floor($*ht.height);v===void 0&&(v=T(at,Pt));const Rt=g?T(at,Pt):v;return Rt.width=at,Rt.height=Pt,Rt.getContext("2d").drawImage(U,0,0,at,Pt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ht.width+"x"+ht.height+") to ("+at+"x"+Pt+")."),Rt}else return"data"in U&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ht.width+"x"+ht.height+")."),U;return U}function E(U){return U.generateMipmaps}function _(U){s.generateMipmap(U)}function P(U){return U.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:U.isWebGL3DRenderTarget?s.TEXTURE_3D:U.isWebGLArrayRenderTarget||U.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function O(U,g,G,$,ht=!1){if(U!==null){if(s[U]!==void 0)return s[U];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+U+"'")}let at=g;if(g===s.RED&&(G===s.FLOAT&&(at=s.R32F),G===s.HALF_FLOAT&&(at=s.R16F),G===s.UNSIGNED_BYTE&&(at=s.R8)),g===s.RED_INTEGER&&(G===s.UNSIGNED_BYTE&&(at=s.R8UI),G===s.UNSIGNED_SHORT&&(at=s.R16UI),G===s.UNSIGNED_INT&&(at=s.R32UI),G===s.BYTE&&(at=s.R8I),G===s.SHORT&&(at=s.R16I),G===s.INT&&(at=s.R32I)),g===s.RG&&(G===s.FLOAT&&(at=s.RG32F),G===s.HALF_FLOAT&&(at=s.RG16F),G===s.UNSIGNED_BYTE&&(at=s.RG8)),g===s.RG_INTEGER&&(G===s.UNSIGNED_BYTE&&(at=s.RG8UI),G===s.UNSIGNED_SHORT&&(at=s.RG16UI),G===s.UNSIGNED_INT&&(at=s.RG32UI),G===s.BYTE&&(at=s.RG8I),G===s.SHORT&&(at=s.RG16I),G===s.INT&&(at=s.RG32I)),g===s.RGB_INTEGER&&(G===s.UNSIGNED_BYTE&&(at=s.RGB8UI),G===s.UNSIGNED_SHORT&&(at=s.RGB16UI),G===s.UNSIGNED_INT&&(at=s.RGB32UI),G===s.BYTE&&(at=s.RGB8I),G===s.SHORT&&(at=s.RGB16I),G===s.INT&&(at=s.RGB32I)),g===s.RGBA_INTEGER&&(G===s.UNSIGNED_BYTE&&(at=s.RGBA8UI),G===s.UNSIGNED_SHORT&&(at=s.RGBA16UI),G===s.UNSIGNED_INT&&(at=s.RGBA32UI),G===s.BYTE&&(at=s.RGBA8I),G===s.SHORT&&(at=s.RGBA16I),G===s.INT&&(at=s.RGBA32I)),g===s.RGB&&(G===s.UNSIGNED_INT_5_9_9_9_REV&&(at=s.RGB9_E5),G===s.UNSIGNED_INT_10F_11F_11F_REV&&(at=s.R11F_G11F_B10F)),g===s.RGBA){const Pt=ht?uc:De.getTransfer($);G===s.FLOAT&&(at=s.RGBA32F),G===s.HALF_FLOAT&&(at=s.RGBA16F),G===s.UNSIGNED_BYTE&&(at=Pt===ke?s.SRGB8_ALPHA8:s.RGBA8),G===s.UNSIGNED_SHORT_4_4_4_4&&(at=s.RGBA4),G===s.UNSIGNED_SHORT_5_5_5_1&&(at=s.RGB5_A1)}return(at===s.R16F||at===s.R32F||at===s.RG16F||at===s.RG32F||at===s.RGBA16F||at===s.RGBA32F)&&t.get("EXT_color_buffer_float"),at}function w(U,g){let G;return U?g===null||g===Br||g===al?G=s.DEPTH24_STENCIL8:g===Gi?G=s.DEPTH32F_STENCIL8:g===il&&(G=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):g===null||g===Br||g===al?G=s.DEPTH_COMPONENT24:g===Gi?G=s.DEPTH_COMPONENT32F:g===il&&(G=s.DEPTH_COMPONENT16),G}function H(U,g){return E(U)===!0||U.isFramebufferTexture&&U.minFilter!==si&&U.minFilter!==Xn?Math.log2(Math.max(g.width,g.height))+1:U.mipmaps!==void 0&&U.mipmaps.length>0?U.mipmaps.length:U.isCompressedTexture&&Array.isArray(U.image)?g.mipmaps.length:1}function B(U){const g=U.target;g.removeEventListener("dispose",B),j(g),g.isVideoTexture&&S.delete(g)}function L(U){const g=U.target;g.removeEventListener("dispose",L),C(g)}function j(U){const g=r.get(U);if(g.__webglInit===void 0)return;const G=U.source,$=y.get(G);if($){const ht=$[g.__cacheKey];ht.usedTimes--,ht.usedTimes===0&&D(U),Object.keys($).length===0&&y.delete(G)}r.remove(U)}function D(U){const g=r.get(U);s.deleteTexture(g.__webglTexture);const G=U.source,$=y.get(G);delete $[g.__cacheKey],h.memory.textures--}function C(U){const g=r.get(U);if(U.depthTexture&&(U.depthTexture.dispose(),r.remove(U.depthTexture)),U.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(g.__webglFramebuffer[$]))for(let ht=0;ht<g.__webglFramebuffer[$].length;ht++)s.deleteFramebuffer(g.__webglFramebuffer[$][ht]);else s.deleteFramebuffer(g.__webglFramebuffer[$]);g.__webglDepthbuffer&&s.deleteRenderbuffer(g.__webglDepthbuffer[$])}else{if(Array.isArray(g.__webglFramebuffer))for(let $=0;$<g.__webglFramebuffer.length;$++)s.deleteFramebuffer(g.__webglFramebuffer[$]);else s.deleteFramebuffer(g.__webglFramebuffer);if(g.__webglDepthbuffer&&s.deleteRenderbuffer(g.__webglDepthbuffer),g.__webglMultisampledFramebuffer&&s.deleteFramebuffer(g.__webglMultisampledFramebuffer),g.__webglColorRenderbuffer)for(let $=0;$<g.__webglColorRenderbuffer.length;$++)g.__webglColorRenderbuffer[$]&&s.deleteRenderbuffer(g.__webglColorRenderbuffer[$]);g.__webglDepthRenderbuffer&&s.deleteRenderbuffer(g.__webglDepthRenderbuffer)}const G=U.textures;for(let $=0,ht=G.length;$<ht;$++){const at=r.get(G[$]);at.__webglTexture&&(s.deleteTexture(at.__webglTexture),h.memory.textures--),r.remove(G[$])}r.remove(U)}let V=0;function tt(){V=0}function ct(){const U=V;return U>=l.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+U+" texture units while this GPU supports only "+l.maxTextures),V+=1,U}function ft(U){const g=[];return g.push(U.wrapS),g.push(U.wrapT),g.push(U.wrapR||0),g.push(U.magFilter),g.push(U.minFilter),g.push(U.anisotropy),g.push(U.internalFormat),g.push(U.format),g.push(U.type),g.push(U.generateMipmaps),g.push(U.premultiplyAlpha),g.push(U.flipY),g.push(U.unpackAlignment),g.push(U.colorSpace),g.join()}function dt(U,g){const G=r.get(U);if(U.isVideoTexture&&ae(U),U.isRenderTargetTexture===!1&&U.isExternalTexture!==!0&&U.version>0&&G.__version!==U.version){const $=U.image;if($===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Q(G,U,g);return}}else U.isExternalTexture&&(G.__webglTexture=U.sourceTexture?U.sourceTexture:null);i.bindTexture(s.TEXTURE_2D,G.__webglTexture,s.TEXTURE0+g)}function z(U,g){const G=r.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&G.__version!==U.version){Q(G,U,g);return}i.bindTexture(s.TEXTURE_2D_ARRAY,G.__webglTexture,s.TEXTURE0+g)}function q(U,g){const G=r.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&G.__version!==U.version){Q(G,U,g);return}i.bindTexture(s.TEXTURE_3D,G.__webglTexture,s.TEXTURE0+g)}function W(U,g){const G=r.get(U);if(U.version>0&&G.__version!==U.version){ut(G,U,g);return}i.bindTexture(s.TEXTURE_CUBE_MAP,G.__webglTexture,s.TEXTURE0+g)}const mt={[Pd]:s.REPEAT,[Di]:s.CLAMP_TO_EDGE,[Bd]:s.MIRRORED_REPEAT},yt={[si]:s.NEAREST,[OM]:s.NEAREST_MIPMAP_NEAREST,[bu]:s.NEAREST_MIPMAP_LINEAR,[Xn]:s.LINEAR,[Vh]:s.LINEAR_MIPMAP_NEAREST,[Lr]:s.LINEAR_MIPMAP_LINEAR},N={[FM]:s.NEVER,[WM]:s.ALWAYS,[HM]:s.LESS,[J0]:s.LEQUAL,[GM]:s.EQUAL,[XM]:s.GEQUAL,[VM]:s.GREATER,[kM]:s.NOTEQUAL};function J(U,g){if(g.type===Gi&&t.has("OES_texture_float_linear")===!1&&(g.magFilter===Xn||g.magFilter===Vh||g.magFilter===bu||g.magFilter===Lr||g.minFilter===Xn||g.minFilter===Vh||g.minFilter===bu||g.minFilter===Lr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(U,s.TEXTURE_WRAP_S,mt[g.wrapS]),s.texParameteri(U,s.TEXTURE_WRAP_T,mt[g.wrapT]),(U===s.TEXTURE_3D||U===s.TEXTURE_2D_ARRAY)&&s.texParameteri(U,s.TEXTURE_WRAP_R,mt[g.wrapR]),s.texParameteri(U,s.TEXTURE_MAG_FILTER,yt[g.magFilter]),s.texParameteri(U,s.TEXTURE_MIN_FILTER,yt[g.minFilter]),g.compareFunction&&(s.texParameteri(U,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(U,s.TEXTURE_COMPARE_FUNC,N[g.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(g.magFilter===si||g.minFilter!==bu&&g.minFilter!==Lr||g.type===Gi&&t.has("OES_texture_float_linear")===!1)return;if(g.anisotropy>1||r.get(g).__currentAnisotropy){const G=t.get("EXT_texture_filter_anisotropic");s.texParameterf(U,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,l.getMaxAnisotropy())),r.get(g).__currentAnisotropy=g.anisotropy}}}function xt(U,g){let G=!1;U.__webglInit===void 0&&(U.__webglInit=!0,g.addEventListener("dispose",B));const $=g.source;let ht=y.get($);ht===void 0&&(ht={},y.set($,ht));const at=ft(g);if(at!==U.__cacheKey){ht[at]===void 0&&(ht[at]={texture:s.createTexture(),usedTimes:0},h.memory.textures++,G=!0),ht[at].usedTimes++;const Pt=ht[U.__cacheKey];Pt!==void 0&&(ht[U.__cacheKey].usedTimes--,Pt.usedTimes===0&&D(g)),U.__cacheKey=at,U.__webglTexture=ht[at].texture}return G}function Tt(U,g,G){return Math.floor(Math.floor(U/G)/g)}function Ut(U,g,G,$){const at=U.updateRanges;if(at.length===0)i.texSubImage2D(s.TEXTURE_2D,0,0,0,g.width,g.height,G,$,g.data);else{at.sort((bt,wt)=>bt.start-wt.start);let Pt=0;for(let bt=1;bt<at.length;bt++){const wt=at[Pt],Zt=at[bt],Bt=wt.start+wt.count,Lt=Tt(Zt.start,g.width,4),oe=Tt(wt.start,g.width,4);Zt.start<=Bt+1&&Lt===oe&&Tt(Zt.start+Zt.count-1,g.width,4)===Lt?wt.count=Math.max(wt.count,Zt.start+Zt.count-wt.start):(++Pt,at[Pt]=Zt)}at.length=Pt+1;const Rt=s.getParameter(s.UNPACK_ROW_LENGTH),Gt=s.getParameter(s.UNPACK_SKIP_PIXELS),Yt=s.getParameter(s.UNPACK_SKIP_ROWS);s.pixelStorei(s.UNPACK_ROW_LENGTH,g.width);for(let bt=0,wt=at.length;bt<wt;bt++){const Zt=at[bt],Bt=Math.floor(Zt.start/4),Lt=Math.ceil(Zt.count/4),oe=Bt%g.width,X=Math.floor(Bt/g.width),At=Lt,Dt=1;s.pixelStorei(s.UNPACK_SKIP_PIXELS,oe),s.pixelStorei(s.UNPACK_SKIP_ROWS,X),i.texSubImage2D(s.TEXTURE_2D,0,oe,X,At,Dt,G,$,g.data)}U.clearUpdateRanges(),s.pixelStorei(s.UNPACK_ROW_LENGTH,Rt),s.pixelStorei(s.UNPACK_SKIP_PIXELS,Gt),s.pixelStorei(s.UNPACK_SKIP_ROWS,Yt)}}function Q(U,g,G){let $=s.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&($=s.TEXTURE_2D_ARRAY),g.isData3DTexture&&($=s.TEXTURE_3D);const ht=xt(U,g),at=g.source;i.bindTexture($,U.__webglTexture,s.TEXTURE0+G);const Pt=r.get(at);if(at.version!==Pt.__version||ht===!0){i.activeTexture(s.TEXTURE0+G);const Rt=De.getPrimaries(De.workingColorSpace),Gt=g.colorSpace===Ja?null:De.getPrimaries(g.colorSpace),Yt=g.colorSpace===Ja||Rt===Gt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,g.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,g.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Yt);let bt=A(g.image,!1,l.maxTextureSize);bt=je(g,bt);const wt=u.convert(g.format,g.colorSpace),Zt=u.convert(g.type);let Bt=O(g.internalFormat,wt,Zt,g.colorSpace,g.isVideoTexture);J($,g);let Lt;const oe=g.mipmaps,X=g.isVideoTexture!==!0,At=Pt.__version===void 0||ht===!0,Dt=at.dataReady,It=H(g,bt);if(g.isDepthTexture)Bt=w(g.format===sl,g.type),At&&(X?i.texStorage2D(s.TEXTURE_2D,1,Bt,bt.width,bt.height):i.texImage2D(s.TEXTURE_2D,0,Bt,bt.width,bt.height,0,wt,Zt,null));else if(g.isDataTexture)if(oe.length>0){X&&At&&i.texStorage2D(s.TEXTURE_2D,It,Bt,oe[0].width,oe[0].height);for(let Mt=0,vt=oe.length;Mt<vt;Mt++)Lt=oe[Mt],X?Dt&&i.texSubImage2D(s.TEXTURE_2D,Mt,0,0,Lt.width,Lt.height,wt,Zt,Lt.data):i.texImage2D(s.TEXTURE_2D,Mt,Bt,Lt.width,Lt.height,0,wt,Zt,Lt.data);g.generateMipmaps=!1}else X?(At&&i.texStorage2D(s.TEXTURE_2D,It,Bt,bt.width,bt.height),Dt&&Ut(g,bt,wt,Zt)):i.texImage2D(s.TEXTURE_2D,0,Bt,bt.width,bt.height,0,wt,Zt,bt.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){X&&At&&i.texStorage3D(s.TEXTURE_2D_ARRAY,It,Bt,oe[0].width,oe[0].height,bt.depth);for(let Mt=0,vt=oe.length;Mt<vt;Mt++)if(Lt=oe[Mt],g.format!==vi)if(wt!==null)if(X){if(Dt)if(g.layerUpdates.size>0){const Vt=$v(Lt.width,Lt.height,g.format,g.type);for(const re of g.layerUpdates){const Be=Lt.data.subarray(re*Vt/Lt.data.BYTES_PER_ELEMENT,(re+1)*Vt/Lt.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Mt,0,0,re,Lt.width,Lt.height,1,wt,Be)}g.clearLayerUpdates()}else i.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Mt,0,0,0,Lt.width,Lt.height,bt.depth,wt,Lt.data)}else i.compressedTexImage3D(s.TEXTURE_2D_ARRAY,Mt,Bt,Lt.width,Lt.height,bt.depth,0,Lt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else X?Dt&&i.texSubImage3D(s.TEXTURE_2D_ARRAY,Mt,0,0,0,Lt.width,Lt.height,bt.depth,wt,Zt,Lt.data):i.texImage3D(s.TEXTURE_2D_ARRAY,Mt,Bt,Lt.width,Lt.height,bt.depth,0,wt,Zt,Lt.data)}else{X&&At&&i.texStorage2D(s.TEXTURE_2D,It,Bt,oe[0].width,oe[0].height);for(let Mt=0,vt=oe.length;Mt<vt;Mt++)Lt=oe[Mt],g.format!==vi?wt!==null?X?Dt&&i.compressedTexSubImage2D(s.TEXTURE_2D,Mt,0,0,Lt.width,Lt.height,wt,Lt.data):i.compressedTexImage2D(s.TEXTURE_2D,Mt,Bt,Lt.width,Lt.height,0,Lt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):X?Dt&&i.texSubImage2D(s.TEXTURE_2D,Mt,0,0,Lt.width,Lt.height,wt,Zt,Lt.data):i.texImage2D(s.TEXTURE_2D,Mt,Bt,Lt.width,Lt.height,0,wt,Zt,Lt.data)}else if(g.isDataArrayTexture)if(X){if(At&&i.texStorage3D(s.TEXTURE_2D_ARRAY,It,Bt,bt.width,bt.height,bt.depth),Dt)if(g.layerUpdates.size>0){const Mt=$v(bt.width,bt.height,g.format,g.type);for(const vt of g.layerUpdates){const Vt=bt.data.subarray(vt*Mt/bt.data.BYTES_PER_ELEMENT,(vt+1)*Mt/bt.data.BYTES_PER_ELEMENT);i.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,vt,bt.width,bt.height,1,wt,Zt,Vt)}g.clearLayerUpdates()}else i.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,bt.width,bt.height,bt.depth,wt,Zt,bt.data)}else i.texImage3D(s.TEXTURE_2D_ARRAY,0,Bt,bt.width,bt.height,bt.depth,0,wt,Zt,bt.data);else if(g.isData3DTexture)X?(At&&i.texStorage3D(s.TEXTURE_3D,It,Bt,bt.width,bt.height,bt.depth),Dt&&i.texSubImage3D(s.TEXTURE_3D,0,0,0,0,bt.width,bt.height,bt.depth,wt,Zt,bt.data)):i.texImage3D(s.TEXTURE_3D,0,Bt,bt.width,bt.height,bt.depth,0,wt,Zt,bt.data);else if(g.isFramebufferTexture){if(At)if(X)i.texStorage2D(s.TEXTURE_2D,It,Bt,bt.width,bt.height);else{let Mt=bt.width,vt=bt.height;for(let Vt=0;Vt<It;Vt++)i.texImage2D(s.TEXTURE_2D,Vt,Bt,Mt,vt,0,wt,Zt,null),Mt>>=1,vt>>=1}}else if(oe.length>0){if(X&&At){const Mt=qe(oe[0]);i.texStorage2D(s.TEXTURE_2D,It,Bt,Mt.width,Mt.height)}for(let Mt=0,vt=oe.length;Mt<vt;Mt++)Lt=oe[Mt],X?Dt&&i.texSubImage2D(s.TEXTURE_2D,Mt,0,0,wt,Zt,Lt):i.texImage2D(s.TEXTURE_2D,Mt,Bt,wt,Zt,Lt);g.generateMipmaps=!1}else if(X){if(At){const Mt=qe(bt);i.texStorage2D(s.TEXTURE_2D,It,Bt,Mt.width,Mt.height)}Dt&&i.texSubImage2D(s.TEXTURE_2D,0,0,0,wt,Zt,bt)}else i.texImage2D(s.TEXTURE_2D,0,Bt,wt,Zt,bt);E(g)&&_($),Pt.__version=at.version,g.onUpdate&&g.onUpdate(g)}U.__version=g.version}function ut(U,g,G){if(g.image.length!==6)return;const $=xt(U,g),ht=g.source;i.bindTexture(s.TEXTURE_CUBE_MAP,U.__webglTexture,s.TEXTURE0+G);const at=r.get(ht);if(ht.version!==at.__version||$===!0){i.activeTexture(s.TEXTURE0+G);const Pt=De.getPrimaries(De.workingColorSpace),Rt=g.colorSpace===Ja?null:De.getPrimaries(g.colorSpace),Gt=g.colorSpace===Ja||Pt===Rt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,g.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,g.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Gt);const Yt=g.isCompressedTexture||g.image[0].isCompressedTexture,bt=g.image[0]&&g.image[0].isDataTexture,wt=[];for(let vt=0;vt<6;vt++)!Yt&&!bt?wt[vt]=A(g.image[vt],!0,l.maxCubemapSize):wt[vt]=bt?g.image[vt].image:g.image[vt],wt[vt]=je(g,wt[vt]);const Zt=wt[0],Bt=u.convert(g.format,g.colorSpace),Lt=u.convert(g.type),oe=O(g.internalFormat,Bt,Lt,g.colorSpace),X=g.isVideoTexture!==!0,At=at.__version===void 0||$===!0,Dt=ht.dataReady;let It=H(g,Zt);J(s.TEXTURE_CUBE_MAP,g);let Mt;if(Yt){X&&At&&i.texStorage2D(s.TEXTURE_CUBE_MAP,It,oe,Zt.width,Zt.height);for(let vt=0;vt<6;vt++){Mt=wt[vt].mipmaps;for(let Vt=0;Vt<Mt.length;Vt++){const re=Mt[Vt];g.format!==vi?Bt!==null?X?Dt&&i.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Vt,0,0,re.width,re.height,Bt,re.data):i.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Vt,oe,re.width,re.height,0,re.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):X?Dt&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Vt,0,0,re.width,re.height,Bt,Lt,re.data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Vt,oe,re.width,re.height,0,Bt,Lt,re.data)}}}else{if(Mt=g.mipmaps,X&&At){Mt.length>0&&It++;const vt=qe(wt[0]);i.texStorage2D(s.TEXTURE_CUBE_MAP,It,oe,vt.width,vt.height)}for(let vt=0;vt<6;vt++)if(bt){X?Dt&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,0,0,wt[vt].width,wt[vt].height,Bt,Lt,wt[vt].data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,oe,wt[vt].width,wt[vt].height,0,Bt,Lt,wt[vt].data);for(let Vt=0;Vt<Mt.length;Vt++){const Be=Mt[Vt].image[vt].image;X?Dt&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Vt+1,0,0,Be.width,Be.height,Bt,Lt,Be.data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Vt+1,oe,Be.width,Be.height,0,Bt,Lt,Be.data)}}else{X?Dt&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,0,0,Bt,Lt,wt[vt]):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,oe,Bt,Lt,wt[vt]);for(let Vt=0;Vt<Mt.length;Vt++){const re=Mt[Vt];X?Dt&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Vt+1,0,0,Bt,Lt,re.image[vt]):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Vt+1,oe,Bt,Lt,re.image[vt])}}}E(g)&&_(s.TEXTURE_CUBE_MAP),at.__version=ht.version,g.onUpdate&&g.onUpdate(g)}U.__version=g.version}function Et(U,g,G,$,ht,at){const Pt=u.convert(G.format,G.colorSpace),Rt=u.convert(G.type),Gt=O(G.internalFormat,Pt,Rt,G.colorSpace),Yt=r.get(g),bt=r.get(G);if(bt.__renderTarget=g,!Yt.__hasExternalTextures){const wt=Math.max(1,g.width>>at),Zt=Math.max(1,g.height>>at);ht===s.TEXTURE_3D||ht===s.TEXTURE_2D_ARRAY?i.texImage3D(ht,at,Gt,wt,Zt,g.depth,0,Pt,Rt,null):i.texImage2D(ht,at,Gt,wt,Zt,0,Pt,Rt,null)}i.bindFramebuffer(s.FRAMEBUFFER,U),Ht(g)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,$,ht,bt.__webglTexture,0,Me(g)):(ht===s.TEXTURE_2D||ht>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&ht<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,$,ht,bt.__webglTexture,at),i.bindFramebuffer(s.FRAMEBUFFER,null)}function Ct(U,g,G){if(s.bindRenderbuffer(s.RENDERBUFFER,U),g.depthBuffer){const $=g.depthTexture,ht=$&&$.isDepthTexture?$.type:null,at=w(g.stencilBuffer,ht),Pt=g.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Rt=Me(g);Ht(g)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Rt,at,g.width,g.height):G?s.renderbufferStorageMultisample(s.RENDERBUFFER,Rt,at,g.width,g.height):s.renderbufferStorage(s.RENDERBUFFER,at,g.width,g.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Pt,s.RENDERBUFFER,U)}else{const $=g.textures;for(let ht=0;ht<$.length;ht++){const at=$[ht],Pt=u.convert(at.format,at.colorSpace),Rt=u.convert(at.type),Gt=O(at.internalFormat,Pt,Rt,at.colorSpace),Yt=Me(g);G&&Ht(g)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Yt,Gt,g.width,g.height):Ht(g)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Yt,Gt,g.width,g.height):s.renderbufferStorage(s.RENDERBUFFER,Gt,g.width,g.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Ft(U,g){if(g&&g.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(s.FRAMEBUFFER,U),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const $=r.get(g.depthTexture);$.__renderTarget=g,(!$.__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),dt(g.depthTexture,0);const ht=$.__webglTexture,at=Me(g);if(g.depthTexture.format===rl)Ht(g)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ht,0,at):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ht,0);else if(g.depthTexture.format===sl)Ht(g)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ht,0,at):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ht,0);else throw new Error("Unknown depthTexture format")}function ie(U){const g=r.get(U),G=U.isWebGLCubeRenderTarget===!0;if(g.__boundDepthTexture!==U.depthTexture){const $=U.depthTexture;if(g.__depthDisposeCallback&&g.__depthDisposeCallback(),$){const ht=()=>{delete g.__boundDepthTexture,delete g.__depthDisposeCallback,$.removeEventListener("dispose",ht)};$.addEventListener("dispose",ht),g.__depthDisposeCallback=ht}g.__boundDepthTexture=$}if(U.depthTexture&&!g.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");const $=U.texture.mipmaps;$&&$.length>0?Ft(g.__webglFramebuffer[0],U):Ft(g.__webglFramebuffer,U)}else if(G){g.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(i.bindFramebuffer(s.FRAMEBUFFER,g.__webglFramebuffer[$]),g.__webglDepthbuffer[$]===void 0)g.__webglDepthbuffer[$]=s.createRenderbuffer(),Ct(g.__webglDepthbuffer[$],U,!1);else{const ht=U.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,at=g.__webglDepthbuffer[$];s.bindRenderbuffer(s.RENDERBUFFER,at),s.framebufferRenderbuffer(s.FRAMEBUFFER,ht,s.RENDERBUFFER,at)}}else{const $=U.texture.mipmaps;if($&&$.length>0?i.bindFramebuffer(s.FRAMEBUFFER,g.__webglFramebuffer[0]):i.bindFramebuffer(s.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer===void 0)g.__webglDepthbuffer=s.createRenderbuffer(),Ct(g.__webglDepthbuffer,U,!1);else{const ht=U.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,at=g.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,at),s.framebufferRenderbuffer(s.FRAMEBUFFER,ht,s.RENDERBUFFER,at)}}i.bindFramebuffer(s.FRAMEBUFFER,null)}function Ue(U,g,G){const $=r.get(U);g!==void 0&&Et($.__webglFramebuffer,U,U.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),G!==void 0&&ie(U)}function F(U){const g=U.texture,G=r.get(U),$=r.get(g);U.addEventListener("dispose",L);const ht=U.textures,at=U.isWebGLCubeRenderTarget===!0,Pt=ht.length>1;if(Pt||($.__webglTexture===void 0&&($.__webglTexture=s.createTexture()),$.__version=g.version,h.memory.textures++),at){G.__webglFramebuffer=[];for(let Rt=0;Rt<6;Rt++)if(g.mipmaps&&g.mipmaps.length>0){G.__webglFramebuffer[Rt]=[];for(let Gt=0;Gt<g.mipmaps.length;Gt++)G.__webglFramebuffer[Rt][Gt]=s.createFramebuffer()}else G.__webglFramebuffer[Rt]=s.createFramebuffer()}else{if(g.mipmaps&&g.mipmaps.length>0){G.__webglFramebuffer=[];for(let Rt=0;Rt<g.mipmaps.length;Rt++)G.__webglFramebuffer[Rt]=s.createFramebuffer()}else G.__webglFramebuffer=s.createFramebuffer();if(Pt)for(let Rt=0,Gt=ht.length;Rt<Gt;Rt++){const Yt=r.get(ht[Rt]);Yt.__webglTexture===void 0&&(Yt.__webglTexture=s.createTexture(),h.memory.textures++)}if(U.samples>0&&Ht(U)===!1){G.__webglMultisampledFramebuffer=s.createFramebuffer(),G.__webglColorRenderbuffer=[],i.bindFramebuffer(s.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let Rt=0;Rt<ht.length;Rt++){const Gt=ht[Rt];G.__webglColorRenderbuffer[Rt]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,G.__webglColorRenderbuffer[Rt]);const Yt=u.convert(Gt.format,Gt.colorSpace),bt=u.convert(Gt.type),wt=O(Gt.internalFormat,Yt,bt,Gt.colorSpace,U.isXRRenderTarget===!0),Zt=Me(U);s.renderbufferStorageMultisample(s.RENDERBUFFER,Zt,wt,U.width,U.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Rt,s.RENDERBUFFER,G.__webglColorRenderbuffer[Rt])}s.bindRenderbuffer(s.RENDERBUFFER,null),U.depthBuffer&&(G.__webglDepthRenderbuffer=s.createRenderbuffer(),Ct(G.__webglDepthRenderbuffer,U,!0)),i.bindFramebuffer(s.FRAMEBUFFER,null)}}if(at){i.bindTexture(s.TEXTURE_CUBE_MAP,$.__webglTexture),J(s.TEXTURE_CUBE_MAP,g);for(let Rt=0;Rt<6;Rt++)if(g.mipmaps&&g.mipmaps.length>0)for(let Gt=0;Gt<g.mipmaps.length;Gt++)Et(G.__webglFramebuffer[Rt][Gt],U,g,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,Gt);else Et(G.__webglFramebuffer[Rt],U,g,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,0);E(g)&&_(s.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Pt){for(let Rt=0,Gt=ht.length;Rt<Gt;Rt++){const Yt=ht[Rt],bt=r.get(Yt);let wt=s.TEXTURE_2D;(U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(wt=U.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),i.bindTexture(wt,bt.__webglTexture),J(wt,Yt),Et(G.__webglFramebuffer,U,Yt,s.COLOR_ATTACHMENT0+Rt,wt,0),E(Yt)&&_(wt)}i.unbindTexture()}else{let Rt=s.TEXTURE_2D;if((U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(Rt=U.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),i.bindTexture(Rt,$.__webglTexture),J(Rt,g),g.mipmaps&&g.mipmaps.length>0)for(let Gt=0;Gt<g.mipmaps.length;Gt++)Et(G.__webglFramebuffer[Gt],U,g,s.COLOR_ATTACHMENT0,Rt,Gt);else Et(G.__webglFramebuffer,U,g,s.COLOR_ATTACHMENT0,Rt,0);E(g)&&_(Rt),i.unbindTexture()}U.depthBuffer&&ie(U)}function be(U){const g=U.textures;for(let G=0,$=g.length;G<$;G++){const ht=g[G];if(E(ht)){const at=P(U),Pt=r.get(ht).__webglTexture;i.bindTexture(at,Pt),_(at),i.unbindTexture()}}}const ne=[],$t=[];function qt(U){if(U.samples>0){if(Ht(U)===!1){const g=U.textures,G=U.width,$=U.height;let ht=s.COLOR_BUFFER_BIT;const at=U.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Pt=r.get(U),Rt=g.length>1;if(Rt)for(let Yt=0;Yt<g.length;Yt++)i.bindFramebuffer(s.FRAMEBUFFER,Pt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Yt,s.RENDERBUFFER,null),i.bindFramebuffer(s.FRAMEBUFFER,Pt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Yt,s.TEXTURE_2D,null,0);i.bindFramebuffer(s.READ_FRAMEBUFFER,Pt.__webglMultisampledFramebuffer);const Gt=U.texture.mipmaps;Gt&&Gt.length>0?i.bindFramebuffer(s.DRAW_FRAMEBUFFER,Pt.__webglFramebuffer[0]):i.bindFramebuffer(s.DRAW_FRAMEBUFFER,Pt.__webglFramebuffer);for(let Yt=0;Yt<g.length;Yt++){if(U.resolveDepthBuffer&&(U.depthBuffer&&(ht|=s.DEPTH_BUFFER_BIT),U.stencilBuffer&&U.resolveStencilBuffer&&(ht|=s.STENCIL_BUFFER_BIT)),Rt){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Pt.__webglColorRenderbuffer[Yt]);const bt=r.get(g[Yt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,bt,0)}s.blitFramebuffer(0,0,G,$,0,0,G,$,ht,s.NEAREST),m===!0&&(ne.length=0,$t.length=0,ne.push(s.COLOR_ATTACHMENT0+Yt),U.depthBuffer&&U.resolveDepthBuffer===!1&&(ne.push(at),$t.push(at),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,$t)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,ne))}if(i.bindFramebuffer(s.READ_FRAMEBUFFER,null),i.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Rt)for(let Yt=0;Yt<g.length;Yt++){i.bindFramebuffer(s.FRAMEBUFFER,Pt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Yt,s.RENDERBUFFER,Pt.__webglColorRenderbuffer[Yt]);const bt=r.get(g[Yt]).__webglTexture;i.bindFramebuffer(s.FRAMEBUFFER,Pt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Yt,s.TEXTURE_2D,bt,0)}i.bindFramebuffer(s.DRAW_FRAMEBUFFER,Pt.__webglMultisampledFramebuffer)}else if(U.depthBuffer&&U.resolveDepthBuffer===!1&&m){const g=U.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[g])}}}function Me(U){return Math.min(l.maxSamples,U.samples)}function Ht(U){const g=r.get(U);return U.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function ae(U){const g=h.render.frame;S.get(U)!==g&&(S.set(U,g),U.update())}function je(U,g){const G=U.colorSpace,$=U.format,ht=U.type;return U.isCompressedTexture===!0||U.isVideoTexture===!0||G!==Vs&&G!==Ja&&(De.getTransfer(G)===ke?($!==vi||ht!==_a)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",G)),g}function qe(U){return typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement?(p.width=U.naturalWidth||U.width,p.height=U.naturalHeight||U.height):typeof VideoFrame<"u"&&U instanceof VideoFrame?(p.width=U.displayWidth,p.height=U.displayHeight):(p.width=U.width,p.height=U.height),p}this.allocateTextureUnit=ct,this.resetTextureUnits=tt,this.setTexture2D=dt,this.setTexture2DArray=z,this.setTexture3D=q,this.setTextureCube=W,this.rebindTextures=Ue,this.setupRenderTarget=F,this.updateRenderTargetMipmap=be,this.updateMultisampleRenderTarget=qt,this.setupDepthRenderbuffer=ie,this.setupFrameBufferTexture=Et,this.useMultisampledRTT=Ht}function rR(s,t){function i(r,l=Ja){let u;const h=De.getTransfer(l);if(r===_a)return s.UNSIGNED_BYTE;if(r===Ep)return s.UNSIGNED_SHORT_4_4_4_4;if(r===Tp)return s.UNSIGNED_SHORT_5_5_5_1;if(r===q0)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===Y0)return s.UNSIGNED_INT_10F_11F_11F_REV;if(r===X0)return s.BYTE;if(r===W0)return s.SHORT;if(r===il)return s.UNSIGNED_SHORT;if(r===Mp)return s.INT;if(r===Br)return s.UNSIGNED_INT;if(r===Gi)return s.FLOAT;if(r===Zs)return s.HALF_FLOAT;if(r===j0)return s.ALPHA;if(r===Z0)return s.RGB;if(r===vi)return s.RGBA;if(r===rl)return s.DEPTH_COMPONENT;if(r===sl)return s.DEPTH_STENCIL;if(r===K0)return s.RED;if(r===bp)return s.RED_INTEGER;if(r===Q0)return s.RG;if(r===Ap)return s.RG_INTEGER;if(r===Rp)return s.RGBA_INTEGER;if(r===$u||r===tc||r===ec||r===nc)if(h===ke)if(u=t.get("WEBGL_compressed_texture_s3tc_srgb"),u!==null){if(r===$u)return u.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===tc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===ec)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===nc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(u=t.get("WEBGL_compressed_texture_s3tc"),u!==null){if(r===$u)return u.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===tc)return u.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===ec)return u.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===nc)return u.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Id||r===Fd||r===Hd||r===Gd)if(u=t.get("WEBGL_compressed_texture_pvrtc"),u!==null){if(r===Id)return u.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Fd)return u.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Hd)return u.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Gd)return u.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Vd||r===kd||r===Xd)if(u=t.get("WEBGL_compressed_texture_etc"),u!==null){if(r===Vd||r===kd)return h===ke?u.COMPRESSED_SRGB8_ETC2:u.COMPRESSED_RGB8_ETC2;if(r===Xd)return h===ke?u.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:u.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Wd||r===qd||r===Yd||r===jd||r===Zd||r===Kd||r===Qd||r===Jd||r===$d||r===tp||r===ep||r===np||r===ip||r===ap)if(u=t.get("WEBGL_compressed_texture_astc"),u!==null){if(r===Wd)return h===ke?u.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:u.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===qd)return h===ke?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:u.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Yd)return h===ke?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:u.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===jd)return h===ke?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:u.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Zd)return h===ke?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:u.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Kd)return h===ke?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:u.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Qd)return h===ke?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:u.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Jd)return h===ke?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:u.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===$d)return h===ke?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:u.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===tp)return h===ke?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:u.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===ep)return h===ke?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:u.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===np)return h===ke?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:u.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===ip)return h===ke?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:u.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===ap)return h===ke?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:u.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===rp||r===sp||r===op)if(u=t.get("EXT_texture_compression_bptc"),u!==null){if(r===rp)return h===ke?u.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:u.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===sp)return u.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===op)return u.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===lp||r===up||r===cp||r===fp)if(u=t.get("EXT_texture_compression_rgtc"),u!==null){if(r===lp)return u.COMPRESSED_RED_RGTC1_EXT;if(r===up)return u.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===cp)return u.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===fp)return u.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===al?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:i}}const sR=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,oR=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class lR{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,i){if(this.texture===null){const r=new fS(t.texture);(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(t){if(this.texture!==null&&this.mesh===null){const i=t.cameras[0].viewport,r=new Sa({vertexShader:sR,fragmentShader:oR,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Si(new Or(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class uR extends Ks{constructor(t,i){super();const r=this;let l=null,u=1,h=null,d="local-floor",m=1,p=null,S=null,v=null,y=null,M=null,T=null;const A=typeof XRWebGLBinding<"u",E=new lR,_={},P=i.getContextAttributes();let O=null,w=null;const H=[],B=[],L=new le;let j=null;const D=new Ci;D.viewport=new en;const C=new Ci;C.viewport=new en;const V=[D,C],tt=new wE;let ct=null,ft=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let ut=H[Q];return ut===void 0&&(ut=new fd,H[Q]=ut),ut.getTargetRaySpace()},this.getControllerGrip=function(Q){let ut=H[Q];return ut===void 0&&(ut=new fd,H[Q]=ut),ut.getGripSpace()},this.getHand=function(Q){let ut=H[Q];return ut===void 0&&(ut=new fd,H[Q]=ut),ut.getHandSpace()};function dt(Q){const ut=B.indexOf(Q.inputSource);if(ut===-1)return;const Et=H[ut];Et!==void 0&&(Et.update(Q.inputSource,Q.frame,p||h),Et.dispatchEvent({type:Q.type,data:Q.inputSource}))}function z(){l.removeEventListener("select",dt),l.removeEventListener("selectstart",dt),l.removeEventListener("selectend",dt),l.removeEventListener("squeeze",dt),l.removeEventListener("squeezestart",dt),l.removeEventListener("squeezeend",dt),l.removeEventListener("end",z),l.removeEventListener("inputsourceschange",q);for(let Q=0;Q<H.length;Q++){const ut=B[Q];ut!==null&&(B[Q]=null,H[Q].disconnect(ut))}ct=null,ft=null,E.reset();for(const Q in _)delete _[Q];t.setRenderTarget(O),M=null,y=null,v=null,l=null,w=null,Ut.stop(),r.isPresenting=!1,t.setPixelRatio(j),t.setSize(L.width,L.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){u=Q,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){d=Q,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||h},this.setReferenceSpace=function(Q){p=Q},this.getBaseLayer=function(){return y!==null?y:M},this.getBinding=function(){return v===null&&A&&(v=new XRWebGLBinding(l,i)),v},this.getFrame=function(){return T},this.getSession=function(){return l},this.setSession=async function(Q){if(l=Q,l!==null){if(O=t.getRenderTarget(),l.addEventListener("select",dt),l.addEventListener("selectstart",dt),l.addEventListener("selectend",dt),l.addEventListener("squeeze",dt),l.addEventListener("squeezestart",dt),l.addEventListener("squeezeend",dt),l.addEventListener("end",z),l.addEventListener("inputsourceschange",q),P.xrCompatible!==!0&&await i.makeXRCompatible(),j=t.getPixelRatio(),t.getSize(L),A&&"createProjectionLayer"in XRWebGLBinding.prototype){let Et=null,Ct=null,Ft=null;P.depth&&(Ft=P.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,Et=P.stencil?sl:rl,Ct=P.stencil?al:Br);const ie={colorFormat:i.RGBA8,depthFormat:Ft,scaleFactor:u};v=this.getBinding(),y=v.createProjectionLayer(ie),l.updateRenderState({layers:[y]}),t.setPixelRatio(1),t.setSize(y.textureWidth,y.textureHeight,!1),w=new nr(y.textureWidth,y.textureHeight,{format:vi,type:_a,depthTexture:new cS(y.textureWidth,y.textureHeight,Ct,void 0,void 0,void 0,void 0,void 0,void 0,Et),stencilBuffer:P.stencil,colorSpace:t.outputColorSpace,samples:P.antialias?4:0,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}else{const Et={antialias:P.antialias,alpha:!0,depth:P.depth,stencil:P.stencil,framebufferScaleFactor:u};M=new XRWebGLLayer(l,i,Et),l.updateRenderState({baseLayer:M}),t.setPixelRatio(1),t.setSize(M.framebufferWidth,M.framebufferHeight,!1),w=new nr(M.framebufferWidth,M.framebufferHeight,{format:vi,type:_a,colorSpace:t.outputColorSpace,stencilBuffer:P.stencil,resolveDepthBuffer:M.ignoreDepthValues===!1,resolveStencilBuffer:M.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(m),p=null,h=await l.requestReferenceSpace(d),Ut.setContext(l),Ut.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return E.getDepthTexture()};function q(Q){for(let ut=0;ut<Q.removed.length;ut++){const Et=Q.removed[ut],Ct=B.indexOf(Et);Ct>=0&&(B[Ct]=null,H[Ct].disconnect(Et))}for(let ut=0;ut<Q.added.length;ut++){const Et=Q.added[ut];let Ct=B.indexOf(Et);if(Ct===-1){for(let ie=0;ie<H.length;ie++)if(ie>=B.length){B.push(Et),Ct=ie;break}else if(B[ie]===null){B[ie]=Et,Ct=ie;break}if(Ct===-1)break}const Ft=H[Ct];Ft&&Ft.connect(Et)}}const W=new st,mt=new st;function yt(Q,ut,Et){W.setFromMatrixPosition(ut.matrixWorld),mt.setFromMatrixPosition(Et.matrixWorld);const Ct=W.distanceTo(mt),Ft=ut.projectionMatrix.elements,ie=Et.projectionMatrix.elements,Ue=Ft[14]/(Ft[10]-1),F=Ft[14]/(Ft[10]+1),be=(Ft[9]+1)/Ft[5],ne=(Ft[9]-1)/Ft[5],$t=(Ft[8]-1)/Ft[0],qt=(ie[8]+1)/ie[0],Me=Ue*$t,Ht=Ue*qt,ae=Ct/(-$t+qt),je=ae*-$t;if(ut.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(je),Q.translateZ(ae),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert(),Ft[10]===-1)Q.projectionMatrix.copy(ut.projectionMatrix),Q.projectionMatrixInverse.copy(ut.projectionMatrixInverse);else{const qe=Ue+ae,U=F+ae,g=Me-je,G=Ht+(Ct-je),$=be*F/U*qe,ht=ne*F/U*qe;Q.projectionMatrix.makePerspective(g,G,$,ht,qe,U),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}}function N(Q,ut){ut===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(ut.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(l===null)return;let ut=Q.near,Et=Q.far;E.texture!==null&&(E.depthNear>0&&(ut=E.depthNear),E.depthFar>0&&(Et=E.depthFar)),tt.near=C.near=D.near=ut,tt.far=C.far=D.far=Et,(ct!==tt.near||ft!==tt.far)&&(l.updateRenderState({depthNear:tt.near,depthFar:tt.far}),ct=tt.near,ft=tt.far),tt.layers.mask=Q.layers.mask|6,D.layers.mask=tt.layers.mask&3,C.layers.mask=tt.layers.mask&5;const Ct=Q.parent,Ft=tt.cameras;N(tt,Ct);for(let ie=0;ie<Ft.length;ie++)N(Ft[ie],Ct);Ft.length===2?yt(tt,D,C):tt.projectionMatrix.copy(D.projectionMatrix),J(Q,tt,Ct)};function J(Q,ut,Et){Et===null?Q.matrix.copy(ut.matrixWorld):(Q.matrix.copy(Et.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(ut.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(ut.projectionMatrix),Q.projectionMatrixInverse.copy(ut.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=hp*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return tt},this.getFoveation=function(){if(!(y===null&&M===null))return m},this.setFoveation=function(Q){m=Q,y!==null&&(y.fixedFoveation=Q),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=Q)},this.hasDepthSensing=function(){return E.texture!==null},this.getDepthSensingMesh=function(){return E.getMesh(tt)},this.getCameraTexture=function(Q){return _[Q]};let xt=null;function Tt(Q,ut){if(S=ut.getViewerPose(p||h),T=ut,S!==null){const Et=S.views;M!==null&&(t.setRenderTargetFramebuffer(w,M.framebuffer),t.setRenderTarget(w));let Ct=!1;Et.length!==tt.cameras.length&&(tt.cameras.length=0,Ct=!0);for(let F=0;F<Et.length;F++){const be=Et[F];let ne=null;if(M!==null)ne=M.getViewport(be);else{const qt=v.getViewSubImage(y,be);ne=qt.viewport,F===0&&(t.setRenderTargetTextures(w,qt.colorTexture,qt.depthStencilTexture),t.setRenderTarget(w))}let $t=V[F];$t===void 0&&($t=new Ci,$t.layers.enable(F),$t.viewport=new en,V[F]=$t),$t.matrix.fromArray(be.transform.matrix),$t.matrix.decompose($t.position,$t.quaternion,$t.scale),$t.projectionMatrix.fromArray(be.projectionMatrix),$t.projectionMatrixInverse.copy($t.projectionMatrix).invert(),$t.viewport.set(ne.x,ne.y,ne.width,ne.height),F===0&&(tt.matrix.copy($t.matrix),tt.matrix.decompose(tt.position,tt.quaternion,tt.scale)),Ct===!0&&tt.cameras.push($t)}const Ft=l.enabledFeatures;if(Ft&&Ft.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&A){v=r.getBinding();const F=v.getDepthInformation(Et[0]);F&&F.isValid&&F.texture&&E.init(F,l.renderState)}if(Ft&&Ft.includes("camera-access")&&A){t.state.unbindTexture(),v=r.getBinding();for(let F=0;F<Et.length;F++){const be=Et[F].camera;if(be){let ne=_[be];ne||(ne=new fS,_[be]=ne);const $t=v.getCameraImage(be);ne.sourceTexture=$t}}}}for(let Et=0;Et<H.length;Et++){const Ct=B[Et],Ft=H[Et];Ct!==null&&Ft!==void 0&&Ft.update(Ct,ut,p||h)}xt&&xt(Q,ut),ut.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:ut}),T=null}const Ut=new hS;Ut.setAnimationLoop(Tt),this.setAnimationLoop=function(Q){xt=Q},this.dispose=function(){}}}const Rr=new va,cR=new dn;function fR(s,t){function i(E,_){E.matrixAutoUpdate===!0&&E.updateMatrix(),_.value.copy(E.matrix)}function r(E,_){_.color.getRGB(E.fogColor.value,oS(s)),_.isFog?(E.fogNear.value=_.near,E.fogFar.value=_.far):_.isFogExp2&&(E.fogDensity.value=_.density)}function l(E,_,P,O,w){_.isMeshBasicMaterial||_.isMeshLambertMaterial?u(E,_):_.isMeshToonMaterial?(u(E,_),v(E,_)):_.isMeshPhongMaterial?(u(E,_),S(E,_)):_.isMeshStandardMaterial?(u(E,_),y(E,_),_.isMeshPhysicalMaterial&&M(E,_,w)):_.isMeshMatcapMaterial?(u(E,_),T(E,_)):_.isMeshDepthMaterial?u(E,_):_.isMeshDistanceMaterial?(u(E,_),A(E,_)):_.isMeshNormalMaterial?u(E,_):_.isLineBasicMaterial?(h(E,_),_.isLineDashedMaterial&&d(E,_)):_.isPointsMaterial?m(E,_,P,O):_.isSpriteMaterial?p(E,_):_.isShadowMaterial?(E.color.value.copy(_.color),E.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function u(E,_){E.opacity.value=_.opacity,_.color&&E.diffuse.value.copy(_.color),_.emissive&&E.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(E.map.value=_.map,i(_.map,E.mapTransform)),_.alphaMap&&(E.alphaMap.value=_.alphaMap,i(_.alphaMap,E.alphaMapTransform)),_.bumpMap&&(E.bumpMap.value=_.bumpMap,i(_.bumpMap,E.bumpMapTransform),E.bumpScale.value=_.bumpScale,_.side===qn&&(E.bumpScale.value*=-1)),_.normalMap&&(E.normalMap.value=_.normalMap,i(_.normalMap,E.normalMapTransform),E.normalScale.value.copy(_.normalScale),_.side===qn&&E.normalScale.value.negate()),_.displacementMap&&(E.displacementMap.value=_.displacementMap,i(_.displacementMap,E.displacementMapTransform),E.displacementScale.value=_.displacementScale,E.displacementBias.value=_.displacementBias),_.emissiveMap&&(E.emissiveMap.value=_.emissiveMap,i(_.emissiveMap,E.emissiveMapTransform)),_.specularMap&&(E.specularMap.value=_.specularMap,i(_.specularMap,E.specularMapTransform)),_.alphaTest>0&&(E.alphaTest.value=_.alphaTest);const P=t.get(_),O=P.envMap,w=P.envMapRotation;O&&(E.envMap.value=O,Rr.copy(w),Rr.x*=-1,Rr.y*=-1,Rr.z*=-1,O.isCubeTexture&&O.isRenderTargetTexture===!1&&(Rr.y*=-1,Rr.z*=-1),E.envMapRotation.value.setFromMatrix4(cR.makeRotationFromEuler(Rr)),E.flipEnvMap.value=O.isCubeTexture&&O.isRenderTargetTexture===!1?-1:1,E.reflectivity.value=_.reflectivity,E.ior.value=_.ior,E.refractionRatio.value=_.refractionRatio),_.lightMap&&(E.lightMap.value=_.lightMap,E.lightMapIntensity.value=_.lightMapIntensity,i(_.lightMap,E.lightMapTransform)),_.aoMap&&(E.aoMap.value=_.aoMap,E.aoMapIntensity.value=_.aoMapIntensity,i(_.aoMap,E.aoMapTransform))}function h(E,_){E.diffuse.value.copy(_.color),E.opacity.value=_.opacity,_.map&&(E.map.value=_.map,i(_.map,E.mapTransform))}function d(E,_){E.dashSize.value=_.dashSize,E.totalSize.value=_.dashSize+_.gapSize,E.scale.value=_.scale}function m(E,_,P,O){E.diffuse.value.copy(_.color),E.opacity.value=_.opacity,E.size.value=_.size*P,E.scale.value=O*.5,_.map&&(E.map.value=_.map,i(_.map,E.uvTransform)),_.alphaMap&&(E.alphaMap.value=_.alphaMap,i(_.alphaMap,E.alphaMapTransform)),_.alphaTest>0&&(E.alphaTest.value=_.alphaTest)}function p(E,_){E.diffuse.value.copy(_.color),E.opacity.value=_.opacity,E.rotation.value=_.rotation,_.map&&(E.map.value=_.map,i(_.map,E.mapTransform)),_.alphaMap&&(E.alphaMap.value=_.alphaMap,i(_.alphaMap,E.alphaMapTransform)),_.alphaTest>0&&(E.alphaTest.value=_.alphaTest)}function S(E,_){E.specular.value.copy(_.specular),E.shininess.value=Math.max(_.shininess,1e-4)}function v(E,_){_.gradientMap&&(E.gradientMap.value=_.gradientMap)}function y(E,_){E.metalness.value=_.metalness,_.metalnessMap&&(E.metalnessMap.value=_.metalnessMap,i(_.metalnessMap,E.metalnessMapTransform)),E.roughness.value=_.roughness,_.roughnessMap&&(E.roughnessMap.value=_.roughnessMap,i(_.roughnessMap,E.roughnessMapTransform)),_.envMap&&(E.envMapIntensity.value=_.envMapIntensity)}function M(E,_,P){E.ior.value=_.ior,_.sheen>0&&(E.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),E.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(E.sheenColorMap.value=_.sheenColorMap,i(_.sheenColorMap,E.sheenColorMapTransform)),_.sheenRoughnessMap&&(E.sheenRoughnessMap.value=_.sheenRoughnessMap,i(_.sheenRoughnessMap,E.sheenRoughnessMapTransform))),_.clearcoat>0&&(E.clearcoat.value=_.clearcoat,E.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(E.clearcoatMap.value=_.clearcoatMap,i(_.clearcoatMap,E.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(E.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,i(_.clearcoatRoughnessMap,E.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(E.clearcoatNormalMap.value=_.clearcoatNormalMap,i(_.clearcoatNormalMap,E.clearcoatNormalMapTransform),E.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===qn&&E.clearcoatNormalScale.value.negate())),_.dispersion>0&&(E.dispersion.value=_.dispersion),_.iridescence>0&&(E.iridescence.value=_.iridescence,E.iridescenceIOR.value=_.iridescenceIOR,E.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],E.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(E.iridescenceMap.value=_.iridescenceMap,i(_.iridescenceMap,E.iridescenceMapTransform)),_.iridescenceThicknessMap&&(E.iridescenceThicknessMap.value=_.iridescenceThicknessMap,i(_.iridescenceThicknessMap,E.iridescenceThicknessMapTransform))),_.transmission>0&&(E.transmission.value=_.transmission,E.transmissionSamplerMap.value=P.texture,E.transmissionSamplerSize.value.set(P.width,P.height),_.transmissionMap&&(E.transmissionMap.value=_.transmissionMap,i(_.transmissionMap,E.transmissionMapTransform)),E.thickness.value=_.thickness,_.thicknessMap&&(E.thicknessMap.value=_.thicknessMap,i(_.thicknessMap,E.thicknessMapTransform)),E.attenuationDistance.value=_.attenuationDistance,E.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(E.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(E.anisotropyMap.value=_.anisotropyMap,i(_.anisotropyMap,E.anisotropyMapTransform))),E.specularIntensity.value=_.specularIntensity,E.specularColor.value.copy(_.specularColor),_.specularColorMap&&(E.specularColorMap.value=_.specularColorMap,i(_.specularColorMap,E.specularColorMapTransform)),_.specularIntensityMap&&(E.specularIntensityMap.value=_.specularIntensityMap,i(_.specularIntensityMap,E.specularIntensityMapTransform))}function T(E,_){_.matcap&&(E.matcap.value=_.matcap)}function A(E,_){const P=t.get(_).light;E.referencePosition.value.setFromMatrixPosition(P.matrixWorld),E.nearDistance.value=P.shadow.camera.near,E.farDistance.value=P.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:l}}function hR(s,t,i,r){let l={},u={},h=[];const d=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function m(P,O){const w=O.program;r.uniformBlockBinding(P,w)}function p(P,O){let w=l[P.id];w===void 0&&(T(P),w=S(P),l[P.id]=w,P.addEventListener("dispose",E));const H=O.program;r.updateUBOMapping(P,H);const B=t.render.frame;u[P.id]!==B&&(y(P),u[P.id]=B)}function S(P){const O=v();P.__bindingPointIndex=O;const w=s.createBuffer(),H=P.__size,B=P.usage;return s.bindBuffer(s.UNIFORM_BUFFER,w),s.bufferData(s.UNIFORM_BUFFER,H,B),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,O,w),w}function v(){for(let P=0;P<d;P++)if(h.indexOf(P)===-1)return h.push(P),P;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function y(P){const O=l[P.id],w=P.uniforms,H=P.__cache;s.bindBuffer(s.UNIFORM_BUFFER,O);for(let B=0,L=w.length;B<L;B++){const j=Array.isArray(w[B])?w[B]:[w[B]];for(let D=0,C=j.length;D<C;D++){const V=j[D];if(M(V,B,D,H)===!0){const tt=V.__offset,ct=Array.isArray(V.value)?V.value:[V.value];let ft=0;for(let dt=0;dt<ct.length;dt++){const z=ct[dt],q=A(z);typeof z=="number"||typeof z=="boolean"?(V.__data[0]=z,s.bufferSubData(s.UNIFORM_BUFFER,tt+ft,V.__data)):z.isMatrix3?(V.__data[0]=z.elements[0],V.__data[1]=z.elements[1],V.__data[2]=z.elements[2],V.__data[3]=0,V.__data[4]=z.elements[3],V.__data[5]=z.elements[4],V.__data[6]=z.elements[5],V.__data[7]=0,V.__data[8]=z.elements[6],V.__data[9]=z.elements[7],V.__data[10]=z.elements[8],V.__data[11]=0):(z.toArray(V.__data,ft),ft+=q.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,tt,V.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function M(P,O,w,H){const B=P.value,L=O+"_"+w;if(H[L]===void 0)return typeof B=="number"||typeof B=="boolean"?H[L]=B:H[L]=B.clone(),!0;{const j=H[L];if(typeof B=="number"||typeof B=="boolean"){if(j!==B)return H[L]=B,!0}else if(j.equals(B)===!1)return j.copy(B),!0}return!1}function T(P){const O=P.uniforms;let w=0;const H=16;for(let L=0,j=O.length;L<j;L++){const D=Array.isArray(O[L])?O[L]:[O[L]];for(let C=0,V=D.length;C<V;C++){const tt=D[C],ct=Array.isArray(tt.value)?tt.value:[tt.value];for(let ft=0,dt=ct.length;ft<dt;ft++){const z=ct[ft],q=A(z),W=w%H,mt=W%q.boundary,yt=W+mt;w+=mt,yt!==0&&H-yt<q.storage&&(w+=H-yt),tt.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),tt.__offset=w,w+=q.storage}}}const B=w%H;return B>0&&(w+=H-B),P.__size=w,P.__cache={},this}function A(P){const O={boundary:0,storage:0};return typeof P=="number"||typeof P=="boolean"?(O.boundary=4,O.storage=4):P.isVector2?(O.boundary=8,O.storage=8):P.isVector3||P.isColor?(O.boundary=16,O.storage=12):P.isVector4?(O.boundary=16,O.storage=16):P.isMatrix3?(O.boundary=48,O.storage=48):P.isMatrix4?(O.boundary=64,O.storage=64):P.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",P),O}function E(P){const O=P.target;O.removeEventListener("dispose",E);const w=h.indexOf(O.__bindingPointIndex);h.splice(w,1),s.deleteBuffer(l[O.id]),delete l[O.id],delete u[O.id]}function _(){for(const P in l)s.deleteBuffer(l[P]);h=[],l={},u={}}return{bind:m,update:p,dispose:_}}class dR{constructor(t={}){const{canvas:i=YM(),context:r=null,depth:l=!0,stencil:u=!1,alpha:h=!1,antialias:d=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:S="default",failIfMajorPerformanceCaveat:v=!1,reversedDepthBuffer:y=!1}=t;this.isWebGLRenderer=!0;let M;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");M=r.getContextAttributes().alpha}else M=h;const T=new Uint32Array(4),A=new Int32Array(4);let E=null,_=null;const P=[],O=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=tr,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const w=this;let H=!1;this._outputColorSpace=_i;let B=0,L=0,j=null,D=-1,C=null;const V=new en,tt=new en;let ct=null;const ft=new Ne(0);let dt=0,z=i.width,q=i.height,W=1,mt=null,yt=null;const N=new en(0,0,z,q),J=new en(0,0,z,q);let xt=!1;const Tt=new uS;let Ut=!1,Q=!1;const ut=new dn,Et=new st,Ct=new en,Ft={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ie=!1;function Ue(){return j===null?W:1}let F=r;function be(R,Y){return i.getContext(R,Y)}try{const R={alpha:!0,depth:l,stencil:u,antialias:d,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:S,failIfMajorPerformanceCaveat:v};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${yp}`),i.addEventListener("webglcontextlost",Dt,!1),i.addEventListener("webglcontextrestored",It,!1),i.addEventListener("webglcontextcreationerror",Mt,!1),F===null){const Y="webgl2";if(F=be(Y,R),F===null)throw be(Y)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let ne,$t,qt,Me,Ht,ae,je,qe,U,g,G,$,ht,at,Pt,Rt,Gt,Yt,bt,wt,Zt,Bt,Lt,oe;function X(){ne=new E1(F),ne.init(),Bt=new rR(F,ne),$t=new g1(F,ne,t,Bt),qt=new iR(F,ne),$t.reversedDepthBuffer&&y&&qt.buffers.depth.setReversed(!0),Me=new A1(F),Ht=new XA,ae=new aR(F,ne,qt,Ht,$t,Bt,Me),je=new v1(w),qe=new M1(w),U=new LE(F),Lt=new p1(F,U),g=new T1(F,U,Me,Lt),G=new C1(F,g,U,Me),bt=new R1(F,$t,ae),Rt=new _1(Ht),$=new kA(w,je,qe,ne,$t,Lt,Rt),ht=new fR(w,Ht),at=new qA,Pt=new JA(ne),Yt=new d1(w,je,qe,qt,G,M,m),Gt=new eR(w,G,$t),oe=new hR(F,Me,$t,qt),wt=new m1(F,ne,Me),Zt=new b1(F,ne,Me),Me.programs=$.programs,w.capabilities=$t,w.extensions=ne,w.properties=Ht,w.renderLists=at,w.shadowMap=Gt,w.state=qt,w.info=Me}X();const At=new uR(w,F);this.xr=At,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const R=ne.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=ne.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(R){R!==void 0&&(W=R,this.setSize(z,q,!1))},this.getSize=function(R){return R.set(z,q)},this.setSize=function(R,Y,rt=!0){if(At.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}z=R,q=Y,i.width=Math.floor(R*W),i.height=Math.floor(Y*W),rt===!0&&(i.style.width=R+"px",i.style.height=Y+"px"),this.setViewport(0,0,R,Y)},this.getDrawingBufferSize=function(R){return R.set(z*W,q*W).floor()},this.setDrawingBufferSize=function(R,Y,rt){z=R,q=Y,W=rt,i.width=Math.floor(R*rt),i.height=Math.floor(Y*rt),this.setViewport(0,0,R,Y)},this.getCurrentViewport=function(R){return R.copy(V)},this.getViewport=function(R){return R.copy(N)},this.setViewport=function(R,Y,rt,ot){R.isVector4?N.set(R.x,R.y,R.z,R.w):N.set(R,Y,rt,ot),qt.viewport(V.copy(N).multiplyScalar(W).round())},this.getScissor=function(R){return R.copy(J)},this.setScissor=function(R,Y,rt,ot){R.isVector4?J.set(R.x,R.y,R.z,R.w):J.set(R,Y,rt,ot),qt.scissor(tt.copy(J).multiplyScalar(W).round())},this.getScissorTest=function(){return xt},this.setScissorTest=function(R){qt.setScissorTest(xt=R)},this.setOpaqueSort=function(R){mt=R},this.setTransparentSort=function(R){yt=R},this.getClearColor=function(R){return R.copy(Yt.getClearColor())},this.setClearColor=function(){Yt.setClearColor(...arguments)},this.getClearAlpha=function(){return Yt.getClearAlpha()},this.setClearAlpha=function(){Yt.setClearAlpha(...arguments)},this.clear=function(R=!0,Y=!0,rt=!0){let ot=0;if(R){let K=!1;if(j!==null){const St=j.texture.format;K=St===Rp||St===Ap||St===bp}if(K){const St=j.texture.type,Nt=St===_a||St===Br||St===il||St===al||St===Ep||St===Tp,Xt=Yt.getClearColor(),zt=Yt.getClearAlpha(),Kt=Xt.r,ee=Xt.g,Qt=Xt.b;Nt?(T[0]=Kt,T[1]=ee,T[2]=Qt,T[3]=zt,F.clearBufferuiv(F.COLOR,0,T)):(A[0]=Kt,A[1]=ee,A[2]=Qt,A[3]=zt,F.clearBufferiv(F.COLOR,0,A))}else ot|=F.COLOR_BUFFER_BIT}Y&&(ot|=F.DEPTH_BUFFER_BIT),rt&&(ot|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear(ot)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",Dt,!1),i.removeEventListener("webglcontextrestored",It,!1),i.removeEventListener("webglcontextcreationerror",Mt,!1),Yt.dispose(),at.dispose(),Pt.dispose(),Ht.dispose(),je.dispose(),qe.dispose(),G.dispose(),Lt.dispose(),oe.dispose(),$.dispose(),At.dispose(),At.removeEventListener("sessionstart",oi),At.removeEventListener("sessionend",$s),Ni.stop()};function Dt(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),H=!0}function It(){console.log("THREE.WebGLRenderer: Context Restored."),H=!1;const R=Me.autoReset,Y=Gt.enabled,rt=Gt.autoUpdate,ot=Gt.needsUpdate,K=Gt.type;X(),Me.autoReset=R,Gt.enabled=Y,Gt.autoUpdate=rt,Gt.needsUpdate=ot,Gt.type=K}function Mt(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function vt(R){const Y=R.target;Y.removeEventListener("dispose",vt),Vt(Y)}function Vt(R){re(R),Ht.remove(R)}function re(R){const Y=Ht.get(R).programs;Y!==void 0&&(Y.forEach(function(rt){$.releaseProgram(rt)}),R.isShaderMaterial&&$.releaseShaderCache(R))}this.renderBufferDirect=function(R,Y,rt,ot,K,St){Y===null&&(Y=Ft);const Nt=K.isMesh&&K.matrixWorld.determinant()<0,Xt=ya(R,Y,rt,ot,K);qt.setMaterial(ot,Nt);let zt=rt.index,Kt=1;if(ot.wireframe===!0){if(zt=g.getWireframeAttribute(rt),zt===void 0)return;Kt=2}const ee=rt.drawRange,Qt=rt.attributes.position;let pe=ee.start*Kt,Oe=(ee.start+ee.count)*Kt;St!==null&&(pe=Math.max(pe,St.start*Kt),Oe=Math.min(Oe,(St.start+St.count)*Kt)),zt!==null?(pe=Math.max(pe,0),Oe=Math.min(Oe,zt.count)):Qt!=null&&(pe=Math.max(pe,0),Oe=Math.min(Oe,Qt.count));const Xe=Oe-pe;if(Xe<0||Xe===1/0)return;Lt.setup(K,ot,Xt,rt,zt);let ze,me=wt;if(zt!==null&&(ze=U.get(zt),me=Zt,me.setIndex(ze)),K.isMesh)ot.wireframe===!0?(qt.setLineWidth(ot.wireframeLinewidth*Ue()),me.setMode(F.LINES)):me.setMode(F.TRIANGLES);else if(K.isLine){let Wt=ot.linewidth;Wt===void 0&&(Wt=1),qt.setLineWidth(Wt*Ue()),K.isLineSegments?me.setMode(F.LINES):K.isLineLoop?me.setMode(F.LINE_LOOP):me.setMode(F.LINE_STRIP)}else K.isPoints?me.setMode(F.POINTS):K.isSprite&&me.setMode(F.TRIANGLES);if(K.isBatchedMesh)if(K._multiDrawInstances!==null)ol("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),me.renderMultiDrawInstances(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount,K._multiDrawInstances);else if(ne.get("WEBGL_multi_draw"))me.renderMultiDraw(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount);else{const Wt=K._multiDrawStarts,Ye=K._multiDrawCounts,Re=K._multiDrawCount,En=zt?U.get(zt).bytesPerElement:1,ki=Ht.get(ot).currentProgram.getUniforms();for(let vn=0;vn<Re;vn++)ki.setValue(F,"_gl_DrawID",vn),me.render(Wt[vn]/En,Ye[vn])}else if(K.isInstancedMesh)me.renderInstances(pe,Xe,K.count);else if(rt.isInstancedBufferGeometry){const Wt=rt._maxInstanceCount!==void 0?rt._maxInstanceCount:1/0,Ye=Math.min(rt.instanceCount,Wt);me.renderInstances(pe,Xe,Ye)}else me.render(pe,Xe)};function Be(R,Y,rt){R.transparent===!0&&R.side===pa&&R.forceSinglePass===!1?(R.side=qn,R.needsUpdate=!0,jn(R,Y,rt),R.side=er,R.needsUpdate=!0,jn(R,Y,rt),R.side=pa):jn(R,Y,rt)}this.compile=function(R,Y,rt=null){rt===null&&(rt=R),_=Pt.get(rt),_.init(Y),O.push(_),rt.traverseVisible(function(K){K.isLight&&K.layers.test(Y.layers)&&(_.pushLight(K),K.castShadow&&_.pushShadow(K))}),R!==rt&&R.traverseVisible(function(K){K.isLight&&K.layers.test(Y.layers)&&(_.pushLight(K),K.castShadow&&_.pushShadow(K))}),_.setupLights();const ot=new Set;return R.traverse(function(K){if(!(K.isMesh||K.isPoints||K.isLine||K.isSprite))return;const St=K.material;if(St)if(Array.isArray(St))for(let Nt=0;Nt<St.length;Nt++){const Xt=St[Nt];Be(Xt,rt,K),ot.add(Xt)}else Be(St,rt,K),ot.add(St)}),_=O.pop(),ot},this.compileAsync=function(R,Y,rt=null){const ot=this.compile(R,Y,rt);return new Promise(K=>{function St(){if(ot.forEach(function(Nt){Ht.get(Nt).currentProgram.isReady()&&ot.delete(Nt)}),ot.size===0){K(R);return}setTimeout(St,10)}ne.get("KHR_parallel_shader_compile")!==null?St():setTimeout(St,10)})};let Ae=null;function Ln(R){Ae&&Ae(R)}function oi(){Ni.stop()}function $s(){Ni.start()}const Ni=new hS;Ni.setAnimationLoop(Ln),typeof self<"u"&&Ni.setContext(self),this.setAnimationLoop=function(R){Ae=R,At.setAnimationLoop(R),R===null?Ni.stop():Ni.start()},At.addEventListener("sessionstart",oi),At.addEventListener("sessionend",$s),this.render=function(R,Y){if(Y!==void 0&&Y.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(H===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),Y.parent===null&&Y.matrixWorldAutoUpdate===!0&&Y.updateMatrixWorld(),At.enabled===!0&&At.isPresenting===!0&&(At.cameraAutoUpdate===!0&&At.updateCamera(Y),Y=At.getCamera()),R.isScene===!0&&R.onBeforeRender(w,R,Y,j),_=Pt.get(R,O.length),_.init(Y),O.push(_),ut.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),Tt.setFromProjectionMatrix(ut,Vi,Y.reversedDepth),Q=this.localClippingEnabled,Ut=Rt.init(this.clippingPlanes,Q),E=at.get(R,P.length),E.init(),P.push(E),At.enabled===!0&&At.isPresenting===!0){const St=w.xr.getDepthSensingMesh();St!==null&&Ir(St,Y,-1/0,w.sortObjects)}Ir(R,Y,0,w.sortObjects),E.finish(),w.sortObjects===!0&&E.sort(mt,yt),ie=At.enabled===!1||At.isPresenting===!1||At.hasDepthSensing()===!1,ie&&Yt.addToRenderList(E,R),this.info.render.frame++,Ut===!0&&Rt.beginShadows();const rt=_.state.shadowsArray;Gt.render(rt,R,Y),Ut===!0&&Rt.endShadows(),this.info.autoReset===!0&&this.info.reset();const ot=E.opaque,K=E.transmissive;if(_.setupLights(),Y.isArrayCamera){const St=Y.cameras;if(K.length>0)for(let Nt=0,Xt=St.length;Nt<Xt;Nt++){const zt=St[Nt];Hr(ot,K,R,zt)}ie&&Yt.render(R);for(let Nt=0,Xt=St.length;Nt<Xt;Nt++){const zt=St[Nt];Fr(E,R,zt,zt.viewport)}}else K.length>0&&Hr(ot,K,R,Y),ie&&Yt.render(R),Fr(E,R,Y);j!==null&&L===0&&(ae.updateMultisampleRenderTarget(j),ae.updateRenderTargetMipmap(j)),R.isScene===!0&&R.onAfterRender(w,R,Y),Lt.resetDefaultState(),D=-1,C=null,O.pop(),O.length>0?(_=O[O.length-1],Ut===!0&&Rt.setGlobalState(w.clippingPlanes,_.state.camera)):_=null,P.pop(),P.length>0?E=P[P.length-1]:E=null};function Ir(R,Y,rt,ot){if(R.visible===!1)return;if(R.layers.test(Y.layers)){if(R.isGroup)rt=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(Y);else if(R.isLight)_.pushLight(R),R.castShadow&&_.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||Tt.intersectsSprite(R)){ot&&Ct.setFromMatrixPosition(R.matrixWorld).applyMatrix4(ut);const Nt=G.update(R),Xt=R.material;Xt.visible&&E.push(R,Nt,Xt,rt,Ct.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||Tt.intersectsObject(R))){const Nt=G.update(R),Xt=R.material;if(ot&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),Ct.copy(R.boundingSphere.center)):(Nt.boundingSphere===null&&Nt.computeBoundingSphere(),Ct.copy(Nt.boundingSphere.center)),Ct.applyMatrix4(R.matrixWorld).applyMatrix4(ut)),Array.isArray(Xt)){const zt=Nt.groups;for(let Kt=0,ee=zt.length;Kt<ee;Kt++){const Qt=zt[Kt],pe=Xt[Qt.materialIndex];pe&&pe.visible&&E.push(R,Nt,pe,rt,Ct.z,Qt)}}else Xt.visible&&E.push(R,Nt,Xt,rt,Ct.z,null)}}const St=R.children;for(let Nt=0,Xt=St.length;Nt<Xt;Nt++)Ir(St[Nt],Y,rt,ot)}function Fr(R,Y,rt,ot){const K=R.opaque,St=R.transmissive,Nt=R.transparent;_.setupLightsView(rt),Ut===!0&&Rt.setGlobalState(w.clippingPlanes,rt),ot&&qt.viewport(V.copy(ot)),K.length>0&&ir(K,Y,rt),St.length>0&&ir(St,Y,rt),Nt.length>0&&ir(Nt,Y,rt),qt.buffers.depth.setTest(!0),qt.buffers.depth.setMask(!0),qt.buffers.color.setMask(!0),qt.setPolygonOffset(!1)}function Hr(R,Y,rt,ot){if((rt.isScene===!0?rt.overrideMaterial:null)!==null)return;_.state.transmissionRenderTarget[ot.id]===void 0&&(_.state.transmissionRenderTarget[ot.id]=new nr(1,1,{generateMipmaps:!0,type:ne.has("EXT_color_buffer_half_float")||ne.has("EXT_color_buffer_float")?Zs:_a,minFilter:Lr,samples:4,stencilBuffer:u,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:De.workingColorSpace}));const St=_.state.transmissionRenderTarget[ot.id],Nt=ot.viewport||V;St.setSize(Nt.z*w.transmissionResolutionScale,Nt.w*w.transmissionResolutionScale);const Xt=w.getRenderTarget(),zt=w.getActiveCubeFace(),Kt=w.getActiveMipmapLevel();w.setRenderTarget(St),w.getClearColor(ft),dt=w.getClearAlpha(),dt<1&&w.setClearColor(16777215,.5),w.clear(),ie&&Yt.render(rt);const ee=w.toneMapping;w.toneMapping=tr;const Qt=ot.viewport;if(ot.viewport!==void 0&&(ot.viewport=void 0),_.setupLightsView(ot),Ut===!0&&Rt.setGlobalState(w.clippingPlanes,ot),ir(R,rt,ot),ae.updateMultisampleRenderTarget(St),ae.updateRenderTargetMipmap(St),ne.has("WEBGL_multisampled_render_to_texture")===!1){let pe=!1;for(let Oe=0,Xe=Y.length;Oe<Xe;Oe++){const ze=Y[Oe],me=ze.object,Wt=ze.geometry,Ye=ze.material,Re=ze.group;if(Ye.side===pa&&me.layers.test(ot.layers)){const En=Ye.side;Ye.side=qn,Ye.needsUpdate=!0,to(me,rt,ot,Wt,Ye,Re),Ye.side=En,Ye.needsUpdate=!0,pe=!0}}pe===!0&&(ae.updateMultisampleRenderTarget(St),ae.updateRenderTargetMipmap(St))}w.setRenderTarget(Xt,zt,Kt),w.setClearColor(ft,dt),Qt!==void 0&&(ot.viewport=Qt),w.toneMapping=ee}function ir(R,Y,rt){const ot=Y.isScene===!0?Y.overrideMaterial:null;for(let K=0,St=R.length;K<St;K++){const Nt=R[K],Xt=Nt.object,zt=Nt.geometry,Kt=Nt.group;let ee=Nt.material;ee.allowOverride===!0&&ot!==null&&(ee=ot),Xt.layers.test(rt.layers)&&to(Xt,Y,rt,zt,ee,Kt)}}function to(R,Y,rt,ot,K,St){R.onBeforeRender(w,Y,rt,ot,K,St),R.modelViewMatrix.multiplyMatrices(rt.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),K.onBeforeRender(w,Y,rt,ot,R,St),K.transparent===!0&&K.side===pa&&K.forceSinglePass===!1?(K.side=qn,K.needsUpdate=!0,w.renderBufferDirect(rt,Y,ot,K,R,St),K.side=er,K.needsUpdate=!0,w.renderBufferDirect(rt,Y,ot,K,R,St),K.side=pa):w.renderBufferDirect(rt,Y,ot,K,R,St),R.onAfterRender(w,Y,rt,ot,K,St)}function jn(R,Y,rt){Y.isScene!==!0&&(Y=Ft);const ot=Ht.get(R),K=_.state.lights,St=_.state.shadowsArray,Nt=K.state.version,Xt=$.getParameters(R,K.state,St,Y,rt),zt=$.getProgramCacheKey(Xt);let Kt=ot.programs;ot.environment=R.isMeshStandardMaterial?Y.environment:null,ot.fog=Y.fog,ot.envMap=(R.isMeshStandardMaterial?qe:je).get(R.envMap||ot.environment),ot.envMapRotation=ot.environment!==null&&R.envMap===null?Y.environmentRotation:R.envMapRotation,Kt===void 0&&(R.addEventListener("dispose",vt),Kt=new Map,ot.programs=Kt);let ee=Kt.get(zt);if(ee!==void 0){if(ot.currentProgram===ee&&ot.lightsStateVersion===Nt)return Mn(R,Xt),ee}else Xt.uniforms=$.getUniforms(R),R.onBeforeCompile(Xt,w),ee=$.acquireProgram(Xt,zt),Kt.set(zt,ee),ot.uniforms=Xt.uniforms;const Qt=ot.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Qt.clippingPlanes=Rt.uniform),Mn(R,Xt),ot.needsLights=wc(R),ot.lightsStateVersion=Nt,ot.needsLights&&(Qt.ambientLightColor.value=K.state.ambient,Qt.lightProbe.value=K.state.probe,Qt.directionalLights.value=K.state.directional,Qt.directionalLightShadows.value=K.state.directionalShadow,Qt.spotLights.value=K.state.spot,Qt.spotLightShadows.value=K.state.spotShadow,Qt.rectAreaLights.value=K.state.rectArea,Qt.ltc_1.value=K.state.rectAreaLTC1,Qt.ltc_2.value=K.state.rectAreaLTC2,Qt.pointLights.value=K.state.point,Qt.pointLightShadows.value=K.state.pointShadow,Qt.hemisphereLights.value=K.state.hemi,Qt.directionalShadowMap.value=K.state.directionalShadowMap,Qt.directionalShadowMatrix.value=K.state.directionalShadowMatrix,Qt.spotShadowMap.value=K.state.spotShadowMap,Qt.spotLightMatrix.value=K.state.spotLightMatrix,Qt.spotLightMap.value=K.state.spotLightMap,Qt.pointShadowMap.value=K.state.pointShadowMap,Qt.pointShadowMatrix.value=K.state.pointShadowMatrix),ot.currentProgram=ee,ot.uniformsList=null,ee}function sn(R){if(R.uniformsList===null){const Y=R.currentProgram.getUniforms();R.uniformsList=ic.seqWithValue(Y.seq,R.uniforms)}return R.uniformsList}function Mn(R,Y){const rt=Ht.get(R);rt.outputColorSpace=Y.outputColorSpace,rt.batching=Y.batching,rt.batchingColor=Y.batchingColor,rt.instancing=Y.instancing,rt.instancingColor=Y.instancingColor,rt.instancingMorph=Y.instancingMorph,rt.skinning=Y.skinning,rt.morphTargets=Y.morphTargets,rt.morphNormals=Y.morphNormals,rt.morphColors=Y.morphColors,rt.morphTargetsCount=Y.morphTargetsCount,rt.numClippingPlanes=Y.numClippingPlanes,rt.numIntersection=Y.numClipIntersection,rt.vertexAlphas=Y.vertexAlphas,rt.vertexTangents=Y.vertexTangents,rt.toneMapping=Y.toneMapping}function ya(R,Y,rt,ot,K){Y.isScene!==!0&&(Y=Ft),ae.resetTextureUnits();const St=Y.fog,Nt=ot.isMeshStandardMaterial?Y.environment:null,Xt=j===null?w.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:Vs,zt=(ot.isMeshStandardMaterial?qe:je).get(ot.envMap||Nt),Kt=ot.vertexColors===!0&&!!rt.attributes.color&&rt.attributes.color.itemSize===4,ee=!!rt.attributes.tangent&&(!!ot.normalMap||ot.anisotropy>0),Qt=!!rt.morphAttributes.position,pe=!!rt.morphAttributes.normal,Oe=!!rt.morphAttributes.color;let Xe=tr;ot.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(Xe=w.toneMapping);const ze=rt.morphAttributes.position||rt.morphAttributes.normal||rt.morphAttributes.color,me=ze!==void 0?ze.length:0,Wt=Ht.get(ot),Ye=_.state.lights;if(Ut===!0&&(Q===!0||R!==C)){const pn=R===C&&ot.id===D;Rt.setState(ot,R,pn)}let Re=!1;ot.version===Wt.__version?(Wt.needsLights&&Wt.lightsStateVersion!==Ye.state.version||Wt.outputColorSpace!==Xt||K.isBatchedMesh&&Wt.batching===!1||!K.isBatchedMesh&&Wt.batching===!0||K.isBatchedMesh&&Wt.batchingColor===!0&&K.colorTexture===null||K.isBatchedMesh&&Wt.batchingColor===!1&&K.colorTexture!==null||K.isInstancedMesh&&Wt.instancing===!1||!K.isInstancedMesh&&Wt.instancing===!0||K.isSkinnedMesh&&Wt.skinning===!1||!K.isSkinnedMesh&&Wt.skinning===!0||K.isInstancedMesh&&Wt.instancingColor===!0&&K.instanceColor===null||K.isInstancedMesh&&Wt.instancingColor===!1&&K.instanceColor!==null||K.isInstancedMesh&&Wt.instancingMorph===!0&&K.morphTexture===null||K.isInstancedMesh&&Wt.instancingMorph===!1&&K.morphTexture!==null||Wt.envMap!==zt||ot.fog===!0&&Wt.fog!==St||Wt.numClippingPlanes!==void 0&&(Wt.numClippingPlanes!==Rt.numPlanes||Wt.numIntersection!==Rt.numIntersection)||Wt.vertexAlphas!==Kt||Wt.vertexTangents!==ee||Wt.morphTargets!==Qt||Wt.morphNormals!==pe||Wt.morphColors!==Oe||Wt.toneMapping!==Xe||Wt.morphTargetsCount!==me)&&(Re=!0):(Re=!0,Wt.__version=ot.version);let En=Wt.currentProgram;Re===!0&&(En=jn(ot,Y,K));let ki=!1,vn=!1,rr=!1;const ve=En.getUniforms(),Cn=Wt.uniforms;if(qt.useProgram(En.program)&&(ki=!0,vn=!0,rr=!0),ot.id!==D&&(D=ot.id,vn=!0),ki||C!==R){qt.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),ve.setValue(F,"projectionMatrix",R.projectionMatrix),ve.setValue(F,"viewMatrix",R.matrixWorldInverse);const nn=ve.map.cameraPosition;nn!==void 0&&nn.setValue(F,Et.setFromMatrixPosition(R.matrixWorld)),$t.logarithmicDepthBuffer&&ve.setValue(F,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(ot.isMeshPhongMaterial||ot.isMeshToonMaterial||ot.isMeshLambertMaterial||ot.isMeshBasicMaterial||ot.isMeshStandardMaterial||ot.isShaderMaterial)&&ve.setValue(F,"isOrthographic",R.isOrthographicCamera===!0),C!==R&&(C=R,vn=!0,rr=!0)}if(K.isSkinnedMesh){ve.setOptional(F,K,"bindMatrix"),ve.setOptional(F,K,"bindMatrixInverse");const pn=K.skeleton;pn&&(pn.boneTexture===null&&pn.computeBoneTexture(),ve.setValue(F,"boneTexture",pn.boneTexture,ae))}K.isBatchedMesh&&(ve.setOptional(F,K,"batchingTexture"),ve.setValue(F,"batchingTexture",K._matricesTexture,ae),ve.setOptional(F,K,"batchingIdTexture"),ve.setValue(F,"batchingIdTexture",K._indirectTexture,ae),ve.setOptional(F,K,"batchingColorTexture"),K._colorsTexture!==null&&ve.setValue(F,"batchingColorTexture",K._colorsTexture,ae));const Nn=rt.morphAttributes;if((Nn.position!==void 0||Nn.normal!==void 0||Nn.color!==void 0)&&bt.update(K,rt,En),(vn||Wt.receiveShadow!==K.receiveShadow)&&(Wt.receiveShadow=K.receiveShadow,ve.setValue(F,"receiveShadow",K.receiveShadow)),ot.isMeshGouraudMaterial&&ot.envMap!==null&&(Cn.envMap.value=zt,Cn.flipEnvMap.value=zt.isCubeTexture&&zt.isRenderTargetTexture===!1?-1:1),ot.isMeshStandardMaterial&&ot.envMap===null&&Y.environment!==null&&(Cn.envMapIntensity.value=Y.environmentIntensity),vn&&(ve.setValue(F,"toneMappingExposure",w.toneMappingExposure),Wt.needsLights&&eo(Cn,rr),St&&ot.fog===!0&&ht.refreshFogUniforms(Cn,St),ht.refreshMaterialUniforms(Cn,ot,W,q,_.state.transmissionRenderTarget[R.id]),ic.upload(F,sn(Wt),Cn,ae)),ot.isShaderMaterial&&ot.uniformsNeedUpdate===!0&&(ic.upload(F,sn(Wt),Cn,ae),ot.uniformsNeedUpdate=!1),ot.isSpriteMaterial&&ve.setValue(F,"center",K.center),ve.setValue(F,"modelViewMatrix",K.modelViewMatrix),ve.setValue(F,"normalMatrix",K.normalMatrix),ve.setValue(F,"modelMatrix",K.matrixWorld),ot.isShaderMaterial||ot.isRawShaderMaterial){const pn=ot.uniformsGroups;for(let nn=0,Gr=pn.length;nn<Gr;nn++){const Oi=pn[nn];oe.update(Oi,En),oe.bind(Oi,En)}}return En}function eo(R,Y){R.ambientLightColor.needsUpdate=Y,R.lightProbe.needsUpdate=Y,R.directionalLights.needsUpdate=Y,R.directionalLightShadows.needsUpdate=Y,R.pointLights.needsUpdate=Y,R.pointLightShadows.needsUpdate=Y,R.spotLights.needsUpdate=Y,R.spotLightShadows.needsUpdate=Y,R.rectAreaLights.needsUpdate=Y,R.hemisphereLights.needsUpdate=Y}function wc(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return B},this.getActiveMipmapLevel=function(){return L},this.getRenderTarget=function(){return j},this.setRenderTargetTextures=function(R,Y,rt){const ot=Ht.get(R);ot.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,ot.__autoAllocateDepthBuffer===!1&&(ot.__useRenderToTexture=!1),Ht.get(R.texture).__webglTexture=Y,Ht.get(R.depthTexture).__webglTexture=ot.__autoAllocateDepthBuffer?void 0:rt,ot.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,Y){const rt=Ht.get(R);rt.__webglFramebuffer=Y,rt.__useDefaultFramebuffer=Y===void 0};const Dc=F.createFramebuffer();this.setRenderTarget=function(R,Y=0,rt=0){j=R,B=Y,L=rt;let ot=!0,K=null,St=!1,Nt=!1;if(R){const zt=Ht.get(R);if(zt.__useDefaultFramebuffer!==void 0)qt.bindFramebuffer(F.FRAMEBUFFER,null),ot=!1;else if(zt.__webglFramebuffer===void 0)ae.setupRenderTarget(R);else if(zt.__hasExternalTextures)ae.rebindTextures(R,Ht.get(R.texture).__webglTexture,Ht.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const Qt=R.depthTexture;if(zt.__boundDepthTexture!==Qt){if(Qt!==null&&Ht.has(Qt)&&(R.width!==Qt.image.width||R.height!==Qt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");ae.setupDepthRenderbuffer(R)}}const Kt=R.texture;(Kt.isData3DTexture||Kt.isDataArrayTexture||Kt.isCompressedArrayTexture)&&(Nt=!0);const ee=Ht.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(ee[Y])?K=ee[Y][rt]:K=ee[Y],St=!0):R.samples>0&&ae.useMultisampledRTT(R)===!1?K=Ht.get(R).__webglMultisampledFramebuffer:Array.isArray(ee)?K=ee[rt]:K=ee,V.copy(R.viewport),tt.copy(R.scissor),ct=R.scissorTest}else V.copy(N).multiplyScalar(W).floor(),tt.copy(J).multiplyScalar(W).floor(),ct=xt;if(rt!==0&&(K=Dc),qt.bindFramebuffer(F.FRAMEBUFFER,K)&&ot&&qt.drawBuffers(R,K),qt.viewport(V),qt.scissor(tt),qt.setScissorTest(ct),St){const zt=Ht.get(R.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+Y,zt.__webglTexture,rt)}else if(Nt){const zt=Y;for(let Kt=0;Kt<R.textures.length;Kt++){const ee=Ht.get(R.textures[Kt]);F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0+Kt,ee.__webglTexture,rt,zt)}}else if(R!==null&&rt!==0){const zt=Ht.get(R.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,zt.__webglTexture,rt)}D=-1},this.readRenderTargetPixels=function(R,Y,rt,ot,K,St,Nt,Xt=0){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let zt=Ht.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Nt!==void 0&&(zt=zt[Nt]),zt){qt.bindFramebuffer(F.FRAMEBUFFER,zt);try{const Kt=R.textures[Xt],ee=Kt.format,Qt=Kt.type;if(!$t.textureFormatReadable(ee)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!$t.textureTypeReadable(Qt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Y>=0&&Y<=R.width-ot&&rt>=0&&rt<=R.height-K&&(R.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+Xt),F.readPixels(Y,rt,ot,K,Bt.convert(ee),Bt.convert(Qt),St))}finally{const Kt=j!==null?Ht.get(j).__webglFramebuffer:null;qt.bindFramebuffer(F.FRAMEBUFFER,Kt)}}},this.readRenderTargetPixelsAsync=async function(R,Y,rt,ot,K,St,Nt,Xt=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let zt=Ht.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Nt!==void 0&&(zt=zt[Nt]),zt)if(Y>=0&&Y<=R.width-ot&&rt>=0&&rt<=R.height-K){qt.bindFramebuffer(F.FRAMEBUFFER,zt);const Kt=R.textures[Xt],ee=Kt.format,Qt=Kt.type;if(!$t.textureFormatReadable(ee))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!$t.textureTypeReadable(Qt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const pe=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,pe),F.bufferData(F.PIXEL_PACK_BUFFER,St.byteLength,F.STREAM_READ),R.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+Xt),F.readPixels(Y,rt,ot,K,Bt.convert(ee),Bt.convert(Qt),0);const Oe=j!==null?Ht.get(j).__webglFramebuffer:null;qt.bindFramebuffer(F.FRAMEBUFFER,Oe);const Xe=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await jM(F,Xe,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,pe),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,St),F.deleteBuffer(pe),F.deleteSync(Xe),St}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,Y=null,rt=0){const ot=Math.pow(2,-rt),K=Math.floor(R.image.width*ot),St=Math.floor(R.image.height*ot),Nt=Y!==null?Y.x:0,Xt=Y!==null?Y.y:0;ae.setTexture2D(R,0),F.copyTexSubImage2D(F.TEXTURE_2D,rt,0,0,Nt,Xt,K,St),qt.unbindTexture()};const ml=F.createFramebuffer(),ar=F.createFramebuffer();this.copyTextureToTexture=function(R,Y,rt=null,ot=null,K=0,St=null){St===null&&(K!==0?(ol("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),St=K,K=0):St=0);let Nt,Xt,zt,Kt,ee,Qt,pe,Oe,Xe;const ze=R.isCompressedTexture?R.mipmaps[St]:R.image;if(rt!==null)Nt=rt.max.x-rt.min.x,Xt=rt.max.y-rt.min.y,zt=rt.isBox3?rt.max.z-rt.min.z:1,Kt=rt.min.x,ee=rt.min.y,Qt=rt.isBox3?rt.min.z:0;else{const Nn=Math.pow(2,-K);Nt=Math.floor(ze.width*Nn),Xt=Math.floor(ze.height*Nn),R.isDataArrayTexture?zt=ze.depth:R.isData3DTexture?zt=Math.floor(ze.depth*Nn):zt=1,Kt=0,ee=0,Qt=0}ot!==null?(pe=ot.x,Oe=ot.y,Xe=ot.z):(pe=0,Oe=0,Xe=0);const me=Bt.convert(Y.format),Wt=Bt.convert(Y.type);let Ye;Y.isData3DTexture?(ae.setTexture3D(Y,0),Ye=F.TEXTURE_3D):Y.isDataArrayTexture||Y.isCompressedArrayTexture?(ae.setTexture2DArray(Y,0),Ye=F.TEXTURE_2D_ARRAY):(ae.setTexture2D(Y,0),Ye=F.TEXTURE_2D),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,Y.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,Y.unpackAlignment);const Re=F.getParameter(F.UNPACK_ROW_LENGTH),En=F.getParameter(F.UNPACK_IMAGE_HEIGHT),ki=F.getParameter(F.UNPACK_SKIP_PIXELS),vn=F.getParameter(F.UNPACK_SKIP_ROWS),rr=F.getParameter(F.UNPACK_SKIP_IMAGES);F.pixelStorei(F.UNPACK_ROW_LENGTH,ze.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,ze.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,Kt),F.pixelStorei(F.UNPACK_SKIP_ROWS,ee),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Qt);const ve=R.isDataArrayTexture||R.isData3DTexture,Cn=Y.isDataArrayTexture||Y.isData3DTexture;if(R.isDepthTexture){const Nn=Ht.get(R),pn=Ht.get(Y),nn=Ht.get(Nn.__renderTarget),Gr=Ht.get(pn.__renderTarget);qt.bindFramebuffer(F.READ_FRAMEBUFFER,nn.__webglFramebuffer),qt.bindFramebuffer(F.DRAW_FRAMEBUFFER,Gr.__webglFramebuffer);for(let Oi=0;Oi<zt;Oi++)ve&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Ht.get(R).__webglTexture,K,Qt+Oi),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Ht.get(Y).__webglTexture,St,Xe+Oi)),F.blitFramebuffer(Kt,ee,Nt,Xt,pe,Oe,Nt,Xt,F.DEPTH_BUFFER_BIT,F.NEAREST);qt.bindFramebuffer(F.READ_FRAMEBUFFER,null),qt.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(K!==0||R.isRenderTargetTexture||Ht.has(R)){const Nn=Ht.get(R),pn=Ht.get(Y);qt.bindFramebuffer(F.READ_FRAMEBUFFER,ml),qt.bindFramebuffer(F.DRAW_FRAMEBUFFER,ar);for(let nn=0;nn<zt;nn++)ve?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Nn.__webglTexture,K,Qt+nn):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Nn.__webglTexture,K),Cn?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,pn.__webglTexture,St,Xe+nn):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,pn.__webglTexture,St),K!==0?F.blitFramebuffer(Kt,ee,Nt,Xt,pe,Oe,Nt,Xt,F.COLOR_BUFFER_BIT,F.NEAREST):Cn?F.copyTexSubImage3D(Ye,St,pe,Oe,Xe+nn,Kt,ee,Nt,Xt):F.copyTexSubImage2D(Ye,St,pe,Oe,Kt,ee,Nt,Xt);qt.bindFramebuffer(F.READ_FRAMEBUFFER,null),qt.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else Cn?R.isDataTexture||R.isData3DTexture?F.texSubImage3D(Ye,St,pe,Oe,Xe,Nt,Xt,zt,me,Wt,ze.data):Y.isCompressedArrayTexture?F.compressedTexSubImage3D(Ye,St,pe,Oe,Xe,Nt,Xt,zt,me,ze.data):F.texSubImage3D(Ye,St,pe,Oe,Xe,Nt,Xt,zt,me,Wt,ze):R.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,St,pe,Oe,Nt,Xt,me,Wt,ze.data):R.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,St,pe,Oe,ze.width,ze.height,me,ze.data):F.texSubImage2D(F.TEXTURE_2D,St,pe,Oe,Nt,Xt,me,Wt,ze);F.pixelStorei(F.UNPACK_ROW_LENGTH,Re),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,En),F.pixelStorei(F.UNPACK_SKIP_PIXELS,ki),F.pixelStorei(F.UNPACK_SKIP_ROWS,vn),F.pixelStorei(F.UNPACK_SKIP_IMAGES,rr),St===0&&Y.generateMipmaps&&F.generateMipmap(Ye),qt.unbindTexture()},this.initRenderTarget=function(R){Ht.get(R).__webglFramebuffer===void 0&&ae.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?ae.setTextureCube(R,0):R.isData3DTexture?ae.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?ae.setTexture2DArray(R,0):ae.setTexture2D(R,0),qt.unbindTexture()},this.resetState=function(){B=0,L=0,j=null,qt.reset(),Lt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Vi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorSpace=De._getDrawingBufferColorSpace(t),i.unpackColorSpace=De._getUnpackColorSpace()}}function pR({mouseForce:s=20,cursorSize:t=100,isViscous:i=!1,viscous:r=30,iterationsViscous:l=32,iterationsPoisson:u=32,dt:h=.014,BFECC:d=!0,resolution:m=.5,isBounce:p=!1,colors:S=["#5227FF","#FF9FFC","#B19EEF"],style:v={},className:y="",autoDemo:M=!0,autoSpeed:T=.5,autoIntensity:A=2.2,takeoverDuration:E=.25,autoResumeDelay:_=1e3,autoRampDuration:P=.6}){const O=ri.useRef(null),w=ri.useRef(null),H=ri.useRef(null),B=ri.useRef(null),L=ri.useRef(null),j=ri.useRef(!0),D=ri.useRef(null);return ri.useEffect(()=>{if(!O.current)return;function C(U){let g;Array.isArray(U)&&U.length>0?U.length===1?g=[U[0],U[0]]:g=U:g=["#ffffff","#ffffff"];const G=g.length,$=new Uint8Array(G*4);for(let at=0;at<G;at++){const Pt=new Ne(g[at]);$[at*4+0]=Math.round(Pt.r*255),$[at*4+1]=Math.round(Pt.g*255),$[at*4+2]=Math.round(Pt.b*255),$[at*4+3]=255}const ht=new SE($,G,1,vi);return ht.magFilter=Xn,ht.minFilter=Xn,ht.wrapS=Di,ht.wrapT=Di,ht.generateMipmaps=!1,ht.needsUpdate=!0,ht}const V=C(S),tt=new en(0,0,0,0);class ct{constructor(){this.width=0,this.height=0,this.aspect=1,this.pixelRatio=1,this.isMobile=!1,this.breakpoint=768,this.fboWidth=null,this.fboHeight=null,this.time=0,this.delta=0,this.container=null,this.renderer=null,this.clock=null}init(g){this.container=g,this.pixelRatio=Math.min(window.devicePixelRatio||1,2),this.resize(),this.renderer=new dR({antialias:!0,alpha:!0}),this.renderer.autoClear=!1,this.renderer.setClearColor(new Ne(0),0),this.renderer.setPixelRatio(this.pixelRatio),this.renderer.setSize(this.width,this.height),this.renderer.domElement.style.width="100%",this.renderer.domElement.style.height="100%",this.renderer.domElement.style.display="block",this.clock=new DE,this.clock.start()}resize(){if(!this.container)return;const g=this.container.getBoundingClientRect();this.width=Math.max(1,Math.floor(g.width)),this.height=Math.max(1,Math.floor(g.height)),this.aspect=this.width/this.height,this.renderer&&this.renderer.setSize(this.width,this.height,!1)}update(){this.delta=this.clock.getDelta(),this.time+=this.delta}}const ft=new ct;class dt{constructor(){this.mouseMoved=!1,this.coords=new le,this.coords_old=new le,this.diff=new le,this.timer=null,this.container=null,this._onMouseMove=this.onDocumentMouseMove.bind(this),this._onTouchStart=this.onDocumentTouchStart.bind(this),this._onTouchMove=this.onDocumentTouchMove.bind(this),this._onMouseEnter=this.onMouseEnter.bind(this),this._onMouseLeave=this.onMouseLeave.bind(this),this._onTouchEnd=this.onTouchEnd.bind(this),this.isHoverInside=!1,this.hasUserControl=!1,this.isAutoActive=!1,this.autoIntensity=2,this.takeoverActive=!1,this.takeoverStartTime=0,this.takeoverDuration=.25,this.takeoverFrom=new le,this.takeoverTo=new le,this.onInteract=null}init(g){this.container=g,g.addEventListener("mousemove",this._onMouseMove,!1),g.addEventListener("touchstart",this._onTouchStart,!1),g.addEventListener("touchmove",this._onTouchMove,!1),g.addEventListener("mouseenter",this._onMouseEnter,!1),g.addEventListener("mouseleave",this._onMouseLeave,!1),g.addEventListener("touchend",this._onTouchEnd,!1)}dispose(){this.container&&(this.container.removeEventListener("mousemove",this._onMouseMove,!1),this.container.removeEventListener("touchstart",this._onTouchStart,!1),this.container.removeEventListener("touchmove",this._onTouchMove,!1),this.container.removeEventListener("mouseenter",this._onMouseEnter,!1),this.container.removeEventListener("mouseleave",this._onMouseLeave,!1),this.container.removeEventListener("touchend",this._onTouchEnd,!1))}setCoords(g,G){if(!this.container)return;this.timer&&clearTimeout(this.timer);const $=this.container.getBoundingClientRect(),ht=(g-$.left)/$.width,at=(G-$.top)/$.height;this.coords.set(ht*2-1,-(at*2-1)),this.mouseMoved=!0,this.timer=setTimeout(()=>{this.mouseMoved=!1},100)}setNormalized(g,G){this.coords.set(g,G),this.mouseMoved=!0}onDocumentMouseMove(g){if(this.onInteract&&this.onInteract(),this.isAutoActive&&!this.hasUserControl&&!this.takeoverActive){const G=this.container.getBoundingClientRect(),$=(g.clientX-G.left)/G.width,ht=(g.clientY-G.top)/G.height;this.takeoverFrom.copy(this.coords),this.takeoverTo.set($*2-1,-(ht*2-1)),this.takeoverStartTime=performance.now(),this.takeoverActive=!0,this.hasUserControl=!0,this.isAutoActive=!1;return}this.setCoords(g.clientX,g.clientY),this.hasUserControl=!0}onDocumentTouchStart(g){if(g.touches.length===1){const G=g.touches[0];this.onInteract&&this.onInteract(),this.setCoords(G.pageX,G.pageY),this.hasUserControl=!0}}onDocumentTouchMove(g){if(g.touches.length===1){const G=g.touches[0];this.onInteract&&this.onInteract(),this.setCoords(G.pageX,G.pageY)}}onTouchEnd(){this.isHoverInside=!1}onMouseEnter(){this.isHoverInside=!0}onMouseLeave(){this.isHoverInside=!1}update(){if(this.takeoverActive){const g=(performance.now()-this.takeoverStartTime)/(this.takeoverDuration*1e3);if(g>=1)this.takeoverActive=!1,this.coords.copy(this.takeoverTo),this.coords_old.copy(this.coords),this.diff.set(0,0);else{const G=g*g*(3-2*g);this.coords.copy(this.takeoverFrom).lerp(this.takeoverTo,G)}}this.diff.subVectors(this.coords,this.coords_old),this.coords_old.copy(this.coords),this.coords_old.x===0&&this.coords_old.y===0&&this.diff.set(0,0),this.isAutoActive&&!this.takeoverActive&&this.diff.multiplyScalar(this.autoIntensity)}}const z=new dt;class q{constructor(g,G,$){this.mouse=g,this.manager=G,this.enabled=$.enabled,this.speed=$.speed,this.resumeDelay=$.resumeDelay||3e3,this.rampDurationMs=($.rampDuration||0)*1e3,this.active=!1,this.current=new le(0,0),this.target=new le,this.lastTime=performance.now(),this.activationTime=0,this.margin=.2,this._tmpDir=new le,this.pickNewTarget()}pickNewTarget(){const g=Math.random;this.target.set((g()*2-1)*(1-this.margin),(g()*2-1)*(1-this.margin))}forceStop(){this.active=!1,this.mouse.isAutoActive=!1}update(){if(!this.enabled)return;const g=performance.now();if(g-this.manager.lastUserInteraction<this.resumeDelay){this.active&&this.forceStop();return}if(this.mouse.isHoverInside){this.active&&this.forceStop();return}if(this.active||(this.active=!0,this.current.copy(this.mouse.coords),this.lastTime=g,this.activationTime=g),!this.active)return;this.mouse.isAutoActive=!0;let $=(g-this.lastTime)/1e3;this.lastTime=g,$>.2&&($=.016);const ht=this._tmpDir.subVectors(this.target,this.current),at=ht.length();if(at<.01){this.pickNewTarget();return}ht.normalize();let Pt=1;if(this.rampDurationMs>0){const Yt=Math.min(1,(g-this.activationTime)/this.rampDurationMs);Pt=Yt*Yt*(3-2*Yt)}const Rt=this.speed*$*Pt,Gt=Math.min(Rt,at);this.current.addScaledVector(ht,Gt),this.mouse.setNormalized(this.current.x,this.current.y)}}const W=`
  attribute vec3 position;
  uniform vec2 px;
  uniform vec2 boundarySpace;
  varying vec2 uv;
  precision highp float;
  void main(){
  vec3 pos = position;
  vec2 scale = 1.0 - boundarySpace * 2.0;
  pos.xy = pos.xy * scale;
  uv = vec2(0.5)+(pos.xy)*0.5;
  gl_Position = vec4(pos, 1.0);
}
`,mt=`
  attribute vec3 position;
  uniform vec2 px;
  precision highp float;
  varying vec2 uv;
  void main(){
  vec3 pos = position;
  uv = 0.5 + pos.xy * 0.5;
  vec2 n = sign(pos.xy);
  pos.xy = abs(pos.xy) - px * 1.0;
  pos.xy *= n;
  gl_Position = vec4(pos, 1.0);
}
`,yt=`
    precision highp float;
    attribute vec3 position;
    attribute vec2 uv;
    uniform vec2 center;
    uniform vec2 scale;
    uniform vec2 px;
    varying vec2 vUv;
    void main(){
    vec2 pos = position.xy * scale * 2.0 * px + center;
    vUv = uv;
    gl_Position = vec4(pos, 0.0, 1.0);
}
`,N=`
    precision highp float;
    uniform sampler2D velocity;
    uniform float dt;
    uniform bool isBFECC;
    uniform vec2 fboSize;
    uniform vec2 px;
    varying vec2 uv;
    void main(){
    vec2 ratio = max(fboSize.x, fboSize.y) / fboSize;
    if(isBFECC == false){
        vec2 vel = texture2D(velocity, uv).xy;
        vec2 uv2 = uv - vel * dt * ratio;
        vec2 newVel = texture2D(velocity, uv2).xy;
        gl_FragColor = vec4(newVel, 0.0, 0.0);
    } else {
        vec2 spot_new = uv;
        vec2 vel_old = texture2D(velocity, uv).xy;
        vec2 spot_old = spot_new - vel_old * dt * ratio;
        vec2 vel_new1 = texture2D(velocity, spot_old).xy;
        vec2 spot_new2 = spot_old + vel_new1 * dt * ratio;
        vec2 error = spot_new2 - spot_new;
        vec2 spot_new3 = spot_new - error / 2.0;
        vec2 vel_2 = texture2D(velocity, spot_new3).xy;
        vec2 spot_old2 = spot_new3 - vel_2 * dt * ratio;
        vec2 newVel2 = texture2D(velocity, spot_old2).xy; 
        gl_FragColor = vec4(newVel2, 0.0, 0.0);
    }
}
`,J=`
    precision highp float;
    uniform sampler2D velocity;
    uniform sampler2D palette;
    uniform vec4 bgColor;
    varying vec2 uv;
    void main(){
    vec2 vel = texture2D(velocity, uv).xy;
    float lenv = clamp(length(vel), 0.0, 1.0);
    vec3 c = texture2D(palette, vec2(lenv, 0.5)).rgb;
    vec3 outRGB = mix(bgColor.rgb, c, lenv);
    float outA = mix(bgColor.a, 1.0, lenv);
    gl_FragColor = vec4(outRGB, outA);
}
`,xt=`
    precision highp float;
    uniform sampler2D velocity;
    uniform float dt;
    uniform vec2 px;
    varying vec2 uv;
    void main(){
    float x0 = texture2D(velocity, uv-vec2(px.x, 0.0)).x;
    float x1 = texture2D(velocity, uv+vec2(px.x, 0.0)).x;
    float y0 = texture2D(velocity, uv-vec2(0.0, px.y)).y;
    float y1 = texture2D(velocity, uv+vec2(0.0, px.y)).y;
    float divergence = (x1 - x0 + y1 - y0) / 2.0;
    gl_FragColor = vec4(divergence / dt);
}
`,Tt=`
    precision highp float;
    uniform vec2 force;
    uniform vec2 center;
    uniform vec2 scale;
    uniform vec2 px;
    varying vec2 vUv;
    void main(){
    vec2 circle = (vUv - 0.5) * 2.0;
    float d = 1.0 - min(length(circle), 1.0);
    d *= d;
    gl_FragColor = vec4(force * d, 0.0, 1.0);
}
`,Ut=`
    precision highp float;
    uniform sampler2D pressure;
    uniform sampler2D divergence;
    uniform vec2 px;
    varying vec2 uv;
    void main(){
    float p0 = texture2D(pressure, uv + vec2(px.x * 2.0, 0.0)).r;
    float p1 = texture2D(pressure, uv - vec2(px.x * 2.0, 0.0)).r;
    float p2 = texture2D(pressure, uv + vec2(0.0, px.y * 2.0)).r;
    float p3 = texture2D(pressure, uv - vec2(0.0, px.y * 2.0)).r;
    float div = texture2D(divergence, uv).r;
    float newP = (p0 + p1 + p2 + p3) / 4.0 - div;
    gl_FragColor = vec4(newP);
}
`,Q=`
    precision highp float;
    uniform sampler2D pressure;
    uniform sampler2D velocity;
    uniform vec2 px;
    uniform float dt;
    varying vec2 uv;
    void main(){
    float step = 1.0;
    float p0 = texture2D(pressure, uv + vec2(px.x * step, 0.0)).r;
    float p1 = texture2D(pressure, uv - vec2(px.x * step, 0.0)).r;
    float p2 = texture2D(pressure, uv + vec2(0.0, px.y * step)).r;
    float p3 = texture2D(pressure, uv - vec2(0.0, px.y * step)).r;
    vec2 v = texture2D(velocity, uv).xy;
    vec2 gradP = vec2(p0 - p1, p2 - p3) * 0.5;
    v = v - gradP * dt;
    gl_FragColor = vec4(v, 0.0, 1.0);
}
`,ut=`
    precision highp float;
    uniform sampler2D velocity;
    uniform sampler2D velocity_new;
    uniform float v;
    uniform vec2 px;
    uniform float dt;
    varying vec2 uv;
    void main(){
    vec2 old = texture2D(velocity, uv).xy;
    vec2 new0 = texture2D(velocity_new, uv + vec2(px.x * 2.0, 0.0)).xy;
    vec2 new1 = texture2D(velocity_new, uv - vec2(px.x * 2.0, 0.0)).xy;
    vec2 new2 = texture2D(velocity_new, uv + vec2(0.0, px.y * 2.0)).xy;
    vec2 new3 = texture2D(velocity_new, uv - vec2(0.0, px.y * 2.0)).xy;
    vec2 newv = 4.0 * old + v * dt * (new0 + new1 + new2 + new3);
    newv /= 4.0 * (1.0 + v * dt);
    gl_FragColor = vec4(newv, 0.0, 0.0);
}
`;class Et{constructor(g){this.props=g||{},this.uniforms=this.props.material?.uniforms,this.scene=null,this.camera=null,this.material=null,this.geometry=null,this.plane=null}init(){this.scene=new jv,this.camera=new hc,this.uniforms&&(this.material=new qu(this.props.material),this.geometry=new Or(2,2),this.plane=new Si(this.geometry,this.material),this.scene.add(this.plane))}update(){ft.renderer.setRenderTarget(this.props.output||null),ft.renderer.render(this.scene,this.camera),ft.renderer.setRenderTarget(null)}}class Ct extends Et{constructor(g){super({material:{vertexShader:W,fragmentShader:N,uniforms:{boundarySpace:{value:g.cellScale},px:{value:g.cellScale},fboSize:{value:g.fboSize},velocity:{value:g.src.texture},dt:{value:g.dt},isBFECC:{value:!0}}},output:g.dst}),this.uniforms=this.props.material.uniforms,this.init()}init(){super.init(),this.createBoundary()}createBoundary(){const g=new xa,G=new Float32Array([-1,-1,0,-1,1,0,-1,1,0,1,1,0,1,1,0,1,-1,0,1,-1,0,-1,-1,0]);g.setAttribute("position",new Ui(G,3));const $=new qu({vertexShader:mt,fragmentShader:N,uniforms:this.uniforms});this.line=new bE(g,$),this.scene.add(this.line)}update({dt:g,isBounce:G,BFECC:$}){this.uniforms.dt.value=g,this.line.visible=G,this.uniforms.isBFECC.value=$,super.update()}}class Ft extends Et{constructor(g){super({output:g.dst}),this.init(g)}init(g){super.init();const G=new Or(1,1),$=new qu({vertexShader:yt,fragmentShader:Tt,blending:Td,depthWrite:!1,uniforms:{px:{value:g.cellScale},force:{value:new le(0,0)},center:{value:new le(0,0)},scale:{value:new le(g.cursor_size,g.cursor_size)}}});this.mouse=new Si(G,$),this.scene.add(this.mouse)}update(g){const G=z.diff.x/2*g.mouse_force,$=z.diff.y/2*g.mouse_force,ht=g.cursor_size*g.cellScale.x,at=g.cursor_size*g.cellScale.y,Pt=Math.min(Math.max(z.coords.x,-1+ht+g.cellScale.x*2),1-ht-g.cellScale.x*2),Rt=Math.min(Math.max(z.coords.y,-1+at+g.cellScale.y*2),1-at-g.cellScale.y*2),Gt=this.mouse.material.uniforms;Gt.force.value.set(G,$),Gt.center.value.set(Pt,Rt),Gt.scale.value.set(g.cursor_size,g.cursor_size),super.update()}}class ie extends Et{constructor(g){super({material:{vertexShader:W,fragmentShader:ut,uniforms:{boundarySpace:{value:g.boundarySpace},velocity:{value:g.src.texture},velocity_new:{value:g.dst_.texture},v:{value:g.viscous},px:{value:g.cellScale},dt:{value:g.dt}}},output:g.dst,output0:g.dst_,output1:g.dst}),this.init()}update({viscous:g,iterations:G,dt:$}){let ht,at;this.uniforms.v.value=g;for(let Pt=0;Pt<G;Pt++)Pt%2===0?(ht=this.props.output0,at=this.props.output1):(ht=this.props.output1,at=this.props.output0),this.uniforms.velocity_new.value=ht.texture,this.props.output=at,this.uniforms.dt.value=$,super.update();return at}}class Ue extends Et{constructor(g){super({material:{vertexShader:W,fragmentShader:xt,uniforms:{boundarySpace:{value:g.boundarySpace},velocity:{value:g.src.texture},px:{value:g.cellScale},dt:{value:g.dt}}},output:g.dst}),this.init()}update({vel:g}){this.uniforms.velocity.value=g.texture,super.update()}}class F extends Et{constructor(g){super({material:{vertexShader:W,fragmentShader:Ut,uniforms:{boundarySpace:{value:g.boundarySpace},pressure:{value:g.dst_.texture},divergence:{value:g.src.texture},px:{value:g.cellScale}}},output:g.dst,output0:g.dst_,output1:g.dst}),this.init()}update({iterations:g}){let G,$;for(let ht=0;ht<g;ht++)ht%2===0?(G=this.props.output0,$=this.props.output1):(G=this.props.output1,$=this.props.output0),this.uniforms.pressure.value=G.texture,this.props.output=$,super.update();return $}}class be extends Et{constructor(g){super({material:{vertexShader:W,fragmentShader:Q,uniforms:{boundarySpace:{value:g.boundarySpace},pressure:{value:g.src_p.texture},velocity:{value:g.src_v.texture},px:{value:g.cellScale},dt:{value:g.dt}}},output:g.dst}),this.init()}update({vel:g,pressure:G}){this.uniforms.velocity.value=g.texture,this.uniforms.pressure.value=G.texture,super.update()}}class ne{constructor(g){this.options={iterations_poisson:32,iterations_viscous:32,mouse_force:20,resolution:.5,cursor_size:100,viscous:30,isBounce:!1,dt:.014,isViscous:!1,BFECC:!0,...g},this.fbos={vel_0:null,vel_1:null,vel_viscous0:null,vel_viscous1:null,div:null,pressure_0:null,pressure_1:null},this.fboSize=new le,this.cellScale=new le,this.boundarySpace=new le,this.init()}init(){this.calcSize(),this.createAllFBO(),this.createShaderPass()}getFloatType(){return/(iPad|iPhone|iPod)/i.test(navigator.userAgent)?Zs:Gi}createAllFBO(){const G={type:this.getFloatType(),depthBuffer:!1,stencilBuffer:!1,minFilter:Xn,magFilter:Xn,wrapS:Di,wrapT:Di};for(let $ in this.fbos)this.fbos[$]=new nr(this.fboSize.x,this.fboSize.y,G)}createShaderPass(){this.advection=new Ct({cellScale:this.cellScale,fboSize:this.fboSize,dt:this.options.dt,src:this.fbos.vel_0,dst:this.fbos.vel_1}),this.externalForce=new Ft({cellScale:this.cellScale,cursor_size:this.options.cursor_size,dst:this.fbos.vel_1}),this.viscous=new ie({cellScale:this.cellScale,boundarySpace:this.boundarySpace,viscous:this.options.viscous,src:this.fbos.vel_1,dst:this.fbos.vel_viscous1,dst_:this.fbos.vel_viscous0,dt:this.options.dt}),this.divergence=new Ue({cellScale:this.cellScale,boundarySpace:this.boundarySpace,src:this.fbos.vel_viscous0,dst:this.fbos.div,dt:this.options.dt}),this.poisson=new F({cellScale:this.cellScale,boundarySpace:this.boundarySpace,src:this.fbos.div,dst:this.fbos.pressure_1,dst_:this.fbos.pressure_0}),this.pressure=new be({cellScale:this.cellScale,boundarySpace:this.boundarySpace,src_p:this.fbos.pressure_0,src_v:this.fbos.vel_viscous0,dst:this.fbos.vel_0,dt:this.options.dt})}calcSize(){const g=Math.max(1,Math.round(this.options.resolution*ft.width)),G=Math.max(1,Math.round(this.options.resolution*ft.height)),$=1/g,ht=1/G;this.cellScale.set($,ht),this.fboSize.set(g,G)}resize(){this.calcSize();for(let g in this.fbos)this.fbos[g].setSize(this.fboSize.x,this.fboSize.y)}update(){this.options.isBounce?this.boundarySpace.set(0,0):this.boundarySpace.copy(this.cellScale),this.advection.update({dt:this.options.dt,isBounce:this.options.isBounce,BFECC:this.options.BFECC}),this.externalForce.update({cursor_size:this.options.cursor_size,mouse_force:this.options.mouse_force,cellScale:this.cellScale});let g=this.fbos.vel_1;this.options.isViscous&&(g=this.viscous.update({viscous:this.options.viscous,iterations:this.options.iterations_viscous,dt:this.options.dt})),this.divergence.update({vel:g});const G=this.poisson.update({iterations:this.options.iterations_poisson});this.pressure.update({vel:g,pressure:G})}}class $t{constructor(){this.init()}init(){this.simulation=new ne,this.scene=new jv,this.camera=new hc,this.output=new Si(new Or(2,2),new qu({vertexShader:W,fragmentShader:J,transparent:!0,depthWrite:!1,uniforms:{velocity:{value:this.simulation.fbos.vel_0.texture},boundarySpace:{value:new le},palette:{value:V},bgColor:{value:tt}}})),this.scene.add(this.output)}addScene(g){this.scene.add(g)}resize(){this.simulation.resize()}render(){ft.renderer.setRenderTarget(null),ft.renderer.render(this.scene,this.camera)}update(){this.simulation.update(),this.render()}}class qt{constructor(g){this.props=g,ft.init(g.$wrapper),z.init(g.$wrapper),z.autoIntensity=g.autoIntensity,z.takeoverDuration=g.takeoverDuration,this.lastUserInteraction=performance.now(),z.onInteract=()=>{this.lastUserInteraction=performance.now(),this.autoDriver&&this.autoDriver.forceStop()},this.autoDriver=new q(z,this,{enabled:g.autoDemo,speed:g.autoSpeed,resumeDelay:g.autoResumeDelay,rampDuration:g.autoRampDuration}),this.init(),this._loop=this.loop.bind(this),this._resize=this.resize.bind(this),window.addEventListener("resize",this._resize),this._onVisibility=()=>{document.hidden?this.pause():j.current&&this.start()},document.addEventListener("visibilitychange",this._onVisibility),this.running=!1}init(){this.props.$wrapper.prepend(ft.renderer.domElement),this.output=new $t}resize(){ft.resize(),this.output.resize()}render(){this.autoDriver&&this.autoDriver.update(),z.update(),ft.update(),this.output.update()}loop(){this.running&&(this.render(),B.current=requestAnimationFrame(this._loop))}start(){this.running||(this.running=!0,this._loop())}pause(){this.running=!1,B.current&&(cancelAnimationFrame(B.current),B.current=null)}dispose(){try{if(window.removeEventListener("resize",this._resize),document.removeEventListener("visibilitychange",this._onVisibility),z.dispose(),ft.renderer){const g=ft.renderer.domElement;g&&g.parentNode&&g.parentNode.removeChild(g),ft.renderer.dispose()}}catch{}}}const Me=O.current;Me.style.position=Me.style.position||"relative",Me.style.overflow=Me.style.overflow||"hidden";const Ht=new qt({$wrapper:Me,autoDemo:M,autoSpeed:T,autoIntensity:A,takeoverDuration:E,autoResumeDelay:_,autoRampDuration:P});w.current=Ht,(()=>{if(!w.current)return;const U=w.current.output?.simulation;if(!U)return;const g=U.options.resolution;Object.assign(U.options,{mouse_force:s,cursor_size:t,isViscous:i,viscous:r,iterations_viscous:l,iterations_poisson:u,dt:h,BFECC:d,resolution:m,isBounce:p}),m!==g&&U.resize()})(),Ht.start();const je=new IntersectionObserver(U=>{const g=U[0],G=g.isIntersecting&&g.intersectionRatio>0;j.current=G,w.current&&(G&&!document.hidden?w.current.start():w.current.pause())},{threshold:[0,.01,.1]});je.observe(Me),L.current=je;const qe=new ResizeObserver(()=>{w.current&&(D.current&&cancelAnimationFrame(D.current),D.current=requestAnimationFrame(()=>{w.current&&w.current.resize()}))});return qe.observe(Me),H.current=qe,()=>{if(B.current&&cancelAnimationFrame(B.current),H.current)try{H.current.disconnect()}catch{}if(L.current)try{L.current.disconnect()}catch{}w.current&&w.current.dispose(),w.current=null}},[d,t,h,p,i,u,l,s,m,r,S,M,T,A,E,_,P]),ri.useEffect(()=>{const C=w.current;if(!C)return;const V=C.output?.simulation;if(!V)return;const tt=V.options.resolution;Object.assign(V.options,{mouse_force:s,cursor_size:t,isViscous:i,viscous:r,iterations_viscous:l,iterations_poisson:u,dt:h,BFECC:d,resolution:m,isBounce:p}),C.autoDriver&&(C.autoDriver.enabled=M,C.autoDriver.speed=T,C.autoDriver.resumeDelay=_,C.autoDriver.rampDurationMs=P*1e3,C.autoDriver.mouse&&(C.autoDriver.mouse.autoIntensity=A,C.autoDriver.mouse.takeoverDuration=E)),m!==tt&&V.resize()},[s,t,i,r,l,u,h,d,m,p,M,T,A,E,_,P]),ye.jsx("div",{ref:O,className:`liquid-ether-container ${y||""}`,style:v})}var Wn=function(){return Wn=Object.assign||function(t){for(var i,r=1,l=arguments.length;r<l;r++){i=arguments[r];for(var u in i)Object.prototype.hasOwnProperty.call(i,u)&&(t[u]=i[u])}return t},Wn.apply(this,arguments)};function mc(s,t,i){if(i||arguments.length===2)for(var r=0,l=t.length,u;r<l;r++)(u||!(r in t))&&(u||(u=Array.prototype.slice.call(t,0,r)),u[r]=t[r]);return s.concat(u||Array.prototype.slice.call(t))}var Qe="-ms-",el="-moz-",Pe="-webkit-",_S="comm",Ec="rule",Dp="decl",mR="@import",vS="@keyframes",gR="@layer",SS=Math.abs,Up=String.fromCharCode,pp=Object.assign;function _R(s,t){return yn(s,0)^45?(((t<<2^yn(s,0))<<2^yn(s,1))<<2^yn(s,2))<<2^yn(s,3):0}function xS(s){return s.trim()}function da(s,t){return(s=t.exec(s))?s[0]:s}function de(s,t,i){return s.replace(t,i)}function ac(s,t,i){return s.indexOf(t,i)}function yn(s,t){return s.charCodeAt(t)|0}function Xs(s,t,i){return s.slice(t,i)}function Hi(s){return s.length}function yS(s){return s.length}function $o(s,t){return t.push(s),s}function vR(s,t){return s.map(t).join("")}function T0(s,t){return s.filter(function(i){return!da(i,t)})}var Tc=1,Ws=1,MS=0,xi=0,hn=0,Js="";function bc(s,t,i,r,l,u,h,d){return{value:s,root:t,parent:i,type:r,props:l,children:u,line:Tc,column:Ws,length:h,return:"",siblings:d}}function Qa(s,t){return pp(bc("",null,null,"",null,null,0,s.siblings),s,{length:-s.length},t)}function Os(s){for(;s.root;)s=Qa(s.root,{children:[s]});$o(s,s.siblings)}function SR(){return hn}function xR(){return hn=xi>0?yn(Js,--xi):0,Ws--,hn===10&&(Ws=1,Tc--),hn}function Li(){return hn=xi<MS?yn(Js,xi++):0,Ws++,hn===10&&(Ws=1,Tc++),hn}function zr(){return yn(Js,xi)}function rc(){return xi}function Ac(s,t){return Xs(Js,s,t)}function mp(s){switch(s){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function yR(s){return Tc=Ws=1,MS=Hi(Js=s),xi=0,[]}function MR(s){return Js="",s}function xd(s){return xS(Ac(xi-1,gp(s===91?s+2:s===40?s+1:s)))}function ER(s){for(;(hn=zr())&&hn<33;)Li();return mp(s)>2||mp(hn)>3?"":" "}function TR(s,t){for(;--t&&Li()&&!(hn<48||hn>102||hn>57&&hn<65||hn>70&&hn<97););return Ac(s,rc()+(t<6&&zr()==32&&Li()==32))}function gp(s){for(;Li();)switch(hn){case s:return xi;case 34:case 39:s!==34&&s!==39&&gp(hn);break;case 40:s===41&&gp(s);break;case 92:Li();break}return xi}function bR(s,t){for(;Li()&&s+hn!==57;)if(s+hn===84&&zr()===47)break;return"/*"+Ac(t,xi-1)+"*"+Up(s===47?s:Li())}function AR(s){for(;!mp(zr());)Li();return Ac(s,xi)}function RR(s){return MR(sc("",null,null,null,[""],s=yR(s),0,[0],s))}function sc(s,t,i,r,l,u,h,d,m){for(var p=0,S=0,v=h,y=0,M=0,T=0,A=1,E=1,_=1,P=0,O="",w=l,H=u,B=r,L=O;E;)switch(T=P,P=Li()){case 40:if(T!=108&&yn(L,v-1)==58){ac(L+=de(xd(P),"&","&\f"),"&\f",SS(p?d[p-1]:0))!=-1&&(_=-1);break}case 34:case 39:case 91:L+=xd(P);break;case 9:case 10:case 13:case 32:L+=ER(T);break;case 92:L+=TR(rc()-1,7);continue;case 47:switch(zr()){case 42:case 47:$o(CR(bR(Li(),rc()),t,i,m),m);break;default:L+="/"}break;case 123*A:d[p++]=Hi(L)*_;case 125*A:case 59:case 0:switch(P){case 0:case 125:E=0;case 59+S:_==-1&&(L=de(L,/\f/g,"")),M>0&&Hi(L)-v&&$o(M>32?A0(L+";",r,i,v-1,m):A0(de(L," ","")+";",r,i,v-2,m),m);break;case 59:L+=";";default:if($o(B=b0(L,t,i,p,S,l,d,O,w=[],H=[],v,u),u),P===123)if(S===0)sc(L,t,B,B,w,u,v,d,H);else switch(y===99&&yn(L,3)===110?100:y){case 100:case 108:case 109:case 115:sc(s,B,B,r&&$o(b0(s,B,B,0,0,l,d,O,l,w=[],v,H),H),l,H,v,d,r?w:H);break;default:sc(L,B,B,B,[""],H,0,d,H)}}p=S=M=0,A=_=1,O=L="",v=h;break;case 58:v=1+Hi(L),M=T;default:if(A<1){if(P==123)--A;else if(P==125&&A++==0&&xR()==125)continue}switch(L+=Up(P),P*A){case 38:_=S>0?1:(L+="\f",-1);break;case 44:d[p++]=(Hi(L)-1)*_,_=1;break;case 64:zr()===45&&(L+=xd(Li())),y=zr(),S=v=Hi(O=L+=AR(rc())),P++;break;case 45:T===45&&Hi(L)==2&&(A=0)}}return u}function b0(s,t,i,r,l,u,h,d,m,p,S,v){for(var y=l-1,M=l===0?u:[""],T=yS(M),A=0,E=0,_=0;A<r;++A)for(var P=0,O=Xs(s,y+1,y=SS(E=h[A])),w=s;P<T;++P)(w=xS(E>0?M[P]+" "+O:de(O,/&\f/g,M[P])))&&(m[_++]=w);return bc(s,t,i,l===0?Ec:d,m,p,S,v)}function CR(s,t,i,r){return bc(s,t,i,_S,Up(SR()),Xs(s,2,-2),0,r)}function A0(s,t,i,r,l){return bc(s,t,i,Dp,Xs(s,0,r),Xs(s,r+1,-1),r,l)}function ES(s,t,i){switch(_R(s,t)){case 5103:return Pe+"print-"+s+s;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return Pe+s+s;case 4789:return el+s+s;case 5349:case 4246:case 4810:case 6968:case 2756:return Pe+s+el+s+Qe+s+s;case 5936:switch(yn(s,t+11)){case 114:return Pe+s+Qe+de(s,/[svh]\w+-[tblr]{2}/,"tb")+s;case 108:return Pe+s+Qe+de(s,/[svh]\w+-[tblr]{2}/,"tb-rl")+s;case 45:return Pe+s+Qe+de(s,/[svh]\w+-[tblr]{2}/,"lr")+s}case 6828:case 4268:case 2903:return Pe+s+Qe+s+s;case 6165:return Pe+s+Qe+"flex-"+s+s;case 5187:return Pe+s+de(s,/(\w+).+(:[^]+)/,Pe+"box-$1$2"+Qe+"flex-$1$2")+s;case 5443:return Pe+s+Qe+"flex-item-"+de(s,/flex-|-self/g,"")+(da(s,/flex-|baseline/)?"":Qe+"grid-row-"+de(s,/flex-|-self/g,""))+s;case 4675:return Pe+s+Qe+"flex-line-pack"+de(s,/align-content|flex-|-self/g,"")+s;case 5548:return Pe+s+Qe+de(s,"shrink","negative")+s;case 5292:return Pe+s+Qe+de(s,"basis","preferred-size")+s;case 6060:return Pe+"box-"+de(s,"-grow","")+Pe+s+Qe+de(s,"grow","positive")+s;case 4554:return Pe+de(s,/([^-])(transform)/g,"$1"+Pe+"$2")+s;case 6187:return de(de(de(s,/(zoom-|grab)/,Pe+"$1"),/(image-set)/,Pe+"$1"),s,"")+s;case 5495:case 3959:return de(s,/(image-set\([^]*)/,Pe+"$1$`$1");case 4968:return de(de(s,/(.+:)(flex-)?(.*)/,Pe+"box-pack:$3"+Qe+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+Pe+s+s;case 4200:if(!da(s,/flex-|baseline/))return Qe+"grid-column-align"+Xs(s,t)+s;break;case 2592:case 3360:return Qe+de(s,"template-","")+s;case 4384:case 3616:return i&&i.some(function(r,l){return t=l,da(r.props,/grid-\w+-end/)})?~ac(s+(i=i[t].value),"span",0)?s:Qe+de(s,"-start","")+s+Qe+"grid-row-span:"+(~ac(i,"span",0)?da(i,/\d+/):+da(i,/\d+/)-+da(s,/\d+/))+";":Qe+de(s,"-start","")+s;case 4896:case 4128:return i&&i.some(function(r){return da(r.props,/grid-\w+-start/)})?s:Qe+de(de(s,"-end","-span"),"span ","")+s;case 4095:case 3583:case 4068:case 2532:return de(s,/(.+)-inline(.+)/,Pe+"$1$2")+s;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Hi(s)-1-t>6)switch(yn(s,t+1)){case 109:if(yn(s,t+4)!==45)break;case 102:return de(s,/(.+:)(.+)-([^]+)/,"$1"+Pe+"$2-$3$1"+el+(yn(s,t+3)==108?"$3":"$2-$3"))+s;case 115:return~ac(s,"stretch",0)?ES(de(s,"stretch","fill-available"),t,i)+s:s}break;case 5152:case 5920:return de(s,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,l,u,h,d,m,p){return Qe+l+":"+u+p+(h?Qe+l+"-span:"+(d?m:+m-+u)+p:"")+s});case 4949:if(yn(s,t+6)===121)return de(s,":",":"+Pe)+s;break;case 6444:switch(yn(s,yn(s,14)===45?18:11)){case 120:return de(s,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+Pe+(yn(s,14)===45?"inline-":"")+"box$3$1"+Pe+"$2$3$1"+Qe+"$2box$3")+s;case 100:return de(s,":",":"+Qe)+s}break;case 5719:case 2647:case 2135:case 3927:case 2391:return de(s,"scroll-","scroll-snap-")+s}return s}function gc(s,t){for(var i="",r=0;r<s.length;r++)i+=t(s[r],r,s,t)||"";return i}function wR(s,t,i,r){switch(s.type){case gR:if(s.children.length)break;case mR:case Dp:return s.return=s.return||s.value;case _S:return"";case vS:return s.return=s.value+"{"+gc(s.children,r)+"}";case Ec:if(!Hi(s.value=s.props.join(",")))return""}return Hi(i=gc(s.children,r))?s.return=s.value+"{"+i+"}":""}function DR(s){var t=yS(s);return function(i,r,l,u){for(var h="",d=0;d<t;d++)h+=s[d](i,r,l,u)||"";return h}}function UR(s){return function(t){t.root||(t=t.return)&&s(t)}}function LR(s,t,i,r){if(s.length>-1&&!s.return)switch(s.type){case Dp:s.return=ES(s.value,s.length,i);return;case vS:return gc([Qa(s,{value:de(s.value,"@","@"+Pe)})],r);case Ec:if(s.length)return vR(i=s.props,function(l){switch(da(l,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Os(Qa(s,{props:[de(l,/:(read-\w+)/,":"+el+"$1")]})),Os(Qa(s,{props:[l]})),pp(s,{props:T0(i,r)});break;case"::placeholder":Os(Qa(s,{props:[de(l,/:(plac\w+)/,":"+Pe+"input-$1")]})),Os(Qa(s,{props:[de(l,/:(plac\w+)/,":"+el+"$1")]})),Os(Qa(s,{props:[de(l,/:(plac\w+)/,Qe+"input-$1")]})),Os(Qa(s,{props:[l]})),pp(s,{props:T0(i,r)});break}return""})}}var NR={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},ai={},qs=typeof process<"u"&&ai!==void 0&&(ai.REACT_APP_SC_ATTR||ai.SC_ATTR)||"data-styled",TS="active",bS="data-styled-version",Rc="6.1.19",Lp=`/*!sc*/
`,_c=typeof window<"u"&&typeof document<"u",OR=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&ai!==void 0&&ai.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&ai.REACT_APP_SC_DISABLE_SPEEDY!==""?ai.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&ai.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&ai!==void 0&&ai.SC_DISABLE_SPEEDY!==void 0&&ai.SC_DISABLE_SPEEDY!==""&&ai.SC_DISABLE_SPEEDY!=="false"&&ai.SC_DISABLE_SPEEDY),Cc=Object.freeze([]),Ys=Object.freeze({});function zR(s,t,i){return i===void 0&&(i=Ys),s.theme!==i.theme&&s.theme||t||i.theme}var AS=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),PR=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,BR=/(^-|-$)/g;function R0(s){return s.replace(PR,"-").replace(BR,"")}var IR=/(a)(d)/gi,Ku=52,C0=function(s){return String.fromCharCode(s+(s>25?39:97))};function _p(s){var t,i="";for(t=Math.abs(s);t>Ku;t=t/Ku|0)i=C0(t%Ku)+i;return(C0(t%Ku)+i).replace(IR,"$1-$2")}var yd,RS=5381,Ps=function(s,t){for(var i=t.length;i;)s=33*s^t.charCodeAt(--i);return s},CS=function(s){return Ps(RS,s)};function FR(s){return _p(CS(s)>>>0)}function HR(s){return s.displayName||s.name||"Component"}function Md(s){return typeof s=="string"&&!0}var wS=typeof Symbol=="function"&&Symbol.for,DS=wS?Symbol.for("react.memo"):60115,GR=wS?Symbol.for("react.forward_ref"):60112,VR={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},kR={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},US={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},XR=((yd={})[GR]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},yd[DS]=US,yd);function w0(s){return("type"in(t=s)&&t.type.$$typeof)===DS?US:"$$typeof"in s?XR[s.$$typeof]:VR;var t}var WR=Object.defineProperty,qR=Object.getOwnPropertyNames,D0=Object.getOwnPropertySymbols,YR=Object.getOwnPropertyDescriptor,jR=Object.getPrototypeOf,U0=Object.prototype;function LS(s,t,i){if(typeof t!="string"){if(U0){var r=jR(t);r&&r!==U0&&LS(s,r,i)}var l=qR(t);D0&&(l=l.concat(D0(t)));for(var u=w0(s),h=w0(t),d=0;d<l.length;++d){var m=l[d];if(!(m in kR||i&&i[m]||h&&m in h||u&&m in u)){var p=YR(t,m);try{WR(s,m,p)}catch{}}}}return s}function js(s){return typeof s=="function"}function Np(s){return typeof s=="object"&&"styledComponentId"in s}function Nr(s,t){return s&&t?"".concat(s," ").concat(t):s||t||""}function L0(s,t){if(s.length===0)return"";for(var i=s[0],r=1;r<s.length;r++)i+=s[r];return i}function ll(s){return s!==null&&typeof s=="object"&&s.constructor.name===Object.name&&!("props"in s&&s.$$typeof)}function vp(s,t,i){if(i===void 0&&(i=!1),!i&&!ll(s)&&!Array.isArray(s))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)s[r]=vp(s[r],t[r]);else if(ll(t))for(var r in t)s[r]=vp(s[r],t[r]);return s}function Op(s,t){Object.defineProperty(s,"toString",{value:t})}function pl(s){for(var t=[],i=1;i<arguments.length;i++)t[i-1]=arguments[i];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(s," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var ZR=(function(){function s(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return s.prototype.indexOfGroup=function(t){for(var i=0,r=0;r<t;r++)i+=this.groupSizes[r];return i},s.prototype.insertRules=function(t,i){if(t>=this.groupSizes.length){for(var r=this.groupSizes,l=r.length,u=l;t>=u;)if((u<<=1)<0)throw pl(16,"".concat(t));this.groupSizes=new Uint32Array(u),this.groupSizes.set(r),this.length=u;for(var h=l;h<u;h++)this.groupSizes[h]=0}for(var d=this.indexOfGroup(t+1),m=(h=0,i.length);h<m;h++)this.tag.insertRule(d,i[h])&&(this.groupSizes[t]++,d++)},s.prototype.clearGroup=function(t){if(t<this.length){var i=this.groupSizes[t],r=this.indexOfGroup(t),l=r+i;this.groupSizes[t]=0;for(var u=r;u<l;u++)this.tag.deleteRule(r)}},s.prototype.getGroup=function(t){var i="";if(t>=this.length||this.groupSizes[t]===0)return i;for(var r=this.groupSizes[t],l=this.indexOfGroup(t),u=l+r,h=l;h<u;h++)i+="".concat(this.tag.getRule(h)).concat(Lp);return i},s})(),oc=new Map,vc=new Map,lc=1,Qu=function(s){if(oc.has(s))return oc.get(s);for(;vc.has(lc);)lc++;var t=lc++;return oc.set(s,t),vc.set(t,s),t},KR=function(s,t){lc=t+1,oc.set(s,t),vc.set(t,s)},QR="style[".concat(qs,"][").concat(bS,'="').concat(Rc,'"]'),JR=new RegExp("^".concat(qs,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),$R=function(s,t,i){for(var r,l=i.split(","),u=0,h=l.length;u<h;u++)(r=l[u])&&s.registerName(t,r)},tC=function(s,t){for(var i,r=((i=t.textContent)!==null&&i!==void 0?i:"").split(Lp),l=[],u=0,h=r.length;u<h;u++){var d=r[u].trim();if(d){var m=d.match(JR);if(m){var p=0|parseInt(m[1],10),S=m[2];p!==0&&(KR(S,p),$R(s,S,m[3]),s.getTag().insertRules(p,l)),l.length=0}else l.push(d)}}},N0=function(s){for(var t=document.querySelectorAll(QR),i=0,r=t.length;i<r;i++){var l=t[i];l&&l.getAttribute(qs)!==TS&&(tC(s,l),l.parentNode&&l.parentNode.removeChild(l))}};function eC(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var NS=function(s){var t=document.head,i=s||t,r=document.createElement("style"),l=(function(d){var m=Array.from(d.querySelectorAll("style[".concat(qs,"]")));return m[m.length-1]})(i),u=l!==void 0?l.nextSibling:null;r.setAttribute(qs,TS),r.setAttribute(bS,Rc);var h=eC();return h&&r.setAttribute("nonce",h),i.insertBefore(r,u),r},nC=(function(){function s(t){this.element=NS(t),this.element.appendChild(document.createTextNode("")),this.sheet=(function(i){if(i.sheet)return i.sheet;for(var r=document.styleSheets,l=0,u=r.length;l<u;l++){var h=r[l];if(h.ownerNode===i)return h}throw pl(17)})(this.element),this.length=0}return s.prototype.insertRule=function(t,i){try{return this.sheet.insertRule(i,t),this.length++,!0}catch{return!1}},s.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},s.prototype.getRule=function(t){var i=this.sheet.cssRules[t];return i&&i.cssText?i.cssText:""},s})(),iC=(function(){function s(t){this.element=NS(t),this.nodes=this.element.childNodes,this.length=0}return s.prototype.insertRule=function(t,i){if(t<=this.length&&t>=0){var r=document.createTextNode(i);return this.element.insertBefore(r,this.nodes[t]||null),this.length++,!0}return!1},s.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},s.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},s})(),aC=(function(){function s(t){this.rules=[],this.length=0}return s.prototype.insertRule=function(t,i){return t<=this.length&&(this.rules.splice(t,0,i),this.length++,!0)},s.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},s.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},s})(),O0=_c,rC={isServer:!_c,useCSSOMInjection:!OR},OS=(function(){function s(t,i,r){t===void 0&&(t=Ys),i===void 0&&(i={});var l=this;this.options=Wn(Wn({},rC),t),this.gs=i,this.names=new Map(r),this.server=!!t.isServer,!this.server&&_c&&O0&&(O0=!1,N0(this)),Op(this,function(){return(function(u){for(var h=u.getTag(),d=h.length,m="",p=function(v){var y=(function(_){return vc.get(_)})(v);if(y===void 0)return"continue";var M=u.names.get(y),T=h.getGroup(v);if(M===void 0||!M.size||T.length===0)return"continue";var A="".concat(qs,".g").concat(v,'[id="').concat(y,'"]'),E="";M!==void 0&&M.forEach(function(_){_.length>0&&(E+="".concat(_,","))}),m+="".concat(T).concat(A,'{content:"').concat(E,'"}').concat(Lp)},S=0;S<d;S++)p(S);return m})(l)})}return s.registerId=function(t){return Qu(t)},s.prototype.rehydrate=function(){!this.server&&_c&&N0(this)},s.prototype.reconstructWithOptions=function(t,i){return i===void 0&&(i=!0),new s(Wn(Wn({},this.options),t),this.gs,i&&this.names||void 0)},s.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},s.prototype.getTag=function(){return this.tag||(this.tag=(t=(function(i){var r=i.useCSSOMInjection,l=i.target;return i.isServer?new aC(l):r?new nC(l):new iC(l)})(this.options),new ZR(t)));var t},s.prototype.hasNameForId=function(t,i){return this.names.has(t)&&this.names.get(t).has(i)},s.prototype.registerName=function(t,i){if(Qu(t),this.names.has(t))this.names.get(t).add(i);else{var r=new Set;r.add(i),this.names.set(t,r)}},s.prototype.insertRules=function(t,i,r){this.registerName(t,i),this.getTag().insertRules(Qu(t),r)},s.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},s.prototype.clearRules=function(t){this.getTag().clearGroup(Qu(t)),this.clearNames(t)},s.prototype.clearTag=function(){this.tag=void 0},s})(),sC=/&/g,oC=/^\s*\/\/.*$/gm;function zS(s,t){return s.map(function(i){return i.type==="rule"&&(i.value="".concat(t," ").concat(i.value),i.value=i.value.replaceAll(",",",".concat(t," ")),i.props=i.props.map(function(r){return"".concat(t," ").concat(r)})),Array.isArray(i.children)&&i.type!=="@keyframes"&&(i.children=zS(i.children,t)),i})}function lC(s){var t,i,r,l=Ys,u=l.options,h=u===void 0?Ys:u,d=l.plugins,m=d===void 0?Cc:d,p=function(y,M,T){return T.startsWith(i)&&T.endsWith(i)&&T.replaceAll(i,"").length>0?".".concat(t):y},S=m.slice();S.push(function(y){y.type===Ec&&y.value.includes("&")&&(y.props[0]=y.props[0].replace(sC,i).replace(r,p))}),h.prefix&&S.push(LR),S.push(wR);var v=function(y,M,T,A){M===void 0&&(M=""),T===void 0&&(T=""),A===void 0&&(A="&"),t=A,i=M,r=new RegExp("\\".concat(i,"\\b"),"g");var E=y.replace(oC,""),_=RR(T||M?"".concat(T," ").concat(M," { ").concat(E," }"):E);h.namespace&&(_=zS(_,h.namespace));var P=[];return gc(_,DR(S.concat(UR(function(O){return P.push(O)})))),P};return v.hash=m.length?m.reduce(function(y,M){return M.name||pl(15),Ps(y,M.name)},RS).toString():"",v}var uC=new OS,Sp=lC(),PS=nl.createContext({shouldForwardProp:void 0,styleSheet:uC,stylis:Sp});PS.Consumer;nl.createContext(void 0);function z0(){return ri.useContext(PS)}var cC=(function(){function s(t,i){var r=this;this.inject=function(l,u){u===void 0&&(u=Sp);var h=r.name+u.hash;l.hasNameForId(r.id,h)||l.insertRules(r.id,h,u(r.rules,h,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=i,Op(this,function(){throw pl(12,String(r.name))})}return s.prototype.getName=function(t){return t===void 0&&(t=Sp),this.name+t.hash},s})(),fC=function(s){return s>="A"&&s<="Z"};function P0(s){for(var t="",i=0;i<s.length;i++){var r=s[i];if(i===1&&r==="-"&&s[0]==="-")return s;fC(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var BS=function(s){return s==null||s===!1||s===""},IS=function(s){var t,i,r=[];for(var l in s){var u=s[l];s.hasOwnProperty(l)&&!BS(u)&&(Array.isArray(u)&&u.isCss||js(u)?r.push("".concat(P0(l),":"),u,";"):ll(u)?r.push.apply(r,mc(mc(["".concat(l," {")],IS(u),!1),["}"],!1)):r.push("".concat(P0(l),": ").concat((t=l,(i=u)==null||typeof i=="boolean"||i===""?"":typeof i!="number"||i===0||t in NR||t.startsWith("--")?String(i).trim():"".concat(i,"px")),";")))}return r};function Pr(s,t,i,r){if(BS(s))return[];if(Np(s))return[".".concat(s.styledComponentId)];if(js(s)){if(!js(u=s)||u.prototype&&u.prototype.isReactComponent||!t)return[s];var l=s(t);return Pr(l,t,i,r)}var u;return s instanceof cC?i?(s.inject(i,r),[s.getName(r)]):[s]:ll(s)?IS(s):Array.isArray(s)?Array.prototype.concat.apply(Cc,s.map(function(h){return Pr(h,t,i,r)})):[s.toString()]}function hC(s){for(var t=0;t<s.length;t+=1){var i=s[t];if(js(i)&&!Np(i))return!1}return!0}var dC=CS(Rc),pC=(function(){function s(t,i,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&hC(t),this.componentId=i,this.baseHash=Ps(dC,i),this.baseStyle=r,OS.registerId(i)}return s.prototype.generateAndInjectStyles=function(t,i,r){var l=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,i,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&i.hasNameForId(this.componentId,this.staticRulesId))l=Nr(l,this.staticRulesId);else{var u=L0(Pr(this.rules,t,i,r)),h=_p(Ps(this.baseHash,u)>>>0);if(!i.hasNameForId(this.componentId,h)){var d=r(u,".".concat(h),void 0,this.componentId);i.insertRules(this.componentId,h,d)}l=Nr(l,h),this.staticRulesId=h}else{for(var m=Ps(this.baseHash,r.hash),p="",S=0;S<this.rules.length;S++){var v=this.rules[S];if(typeof v=="string")p+=v;else if(v){var y=L0(Pr(v,t,i,r));m=Ps(m,y+S),p+=y}}if(p){var M=_p(m>>>0);i.hasNameForId(this.componentId,M)||i.insertRules(this.componentId,M,r(p,".".concat(M),void 0,this.componentId)),l=Nr(l,M)}}return l},s})(),FS=nl.createContext(void 0);FS.Consumer;var Ed={};function mC(s,t,i){var r=Np(s),l=s,u=!Md(s),h=t.attrs,d=h===void 0?Cc:h,m=t.componentId,p=m===void 0?(function(w,H){var B=typeof w!="string"?"sc":R0(w);Ed[B]=(Ed[B]||0)+1;var L="".concat(B,"-").concat(FR(Rc+B+Ed[B]));return H?"".concat(H,"-").concat(L):L})(t.displayName,t.parentComponentId):m,S=t.displayName,v=S===void 0?(function(w){return Md(w)?"styled.".concat(w):"Styled(".concat(HR(w),")")})(s):S,y=t.displayName&&t.componentId?"".concat(R0(t.displayName),"-").concat(t.componentId):t.componentId||p,M=r&&l.attrs?l.attrs.concat(d).filter(Boolean):d,T=t.shouldForwardProp;if(r&&l.shouldForwardProp){var A=l.shouldForwardProp;if(t.shouldForwardProp){var E=t.shouldForwardProp;T=function(w,H){return A(w,H)&&E(w,H)}}else T=A}var _=new pC(i,y,r?l.componentStyle:void 0);function P(w,H){return(function(B,L,j){var D=B.attrs,C=B.componentStyle,V=B.defaultProps,tt=B.foldedComponentIds,ct=B.styledComponentId,ft=B.target,dt=nl.useContext(FS),z=z0(),q=B.shouldForwardProp||z.shouldForwardProp,W=zR(L,dt,V)||Ys,mt=(function(Ut,Q,ut){for(var Et,Ct=Wn(Wn({},Q),{className:void 0,theme:ut}),Ft=0;Ft<Ut.length;Ft+=1){var ie=js(Et=Ut[Ft])?Et(Ct):Et;for(var Ue in ie)Ct[Ue]=Ue==="className"?Nr(Ct[Ue],ie[Ue]):Ue==="style"?Wn(Wn({},Ct[Ue]),ie[Ue]):ie[Ue]}return Q.className&&(Ct.className=Nr(Ct.className,Q.className)),Ct})(D,L,W),yt=mt.as||ft,N={};for(var J in mt)mt[J]===void 0||J[0]==="$"||J==="as"||J==="theme"&&mt.theme===W||(J==="forwardedAs"?N.as=mt.forwardedAs:q&&!q(J,yt)||(N[J]=mt[J]));var xt=(function(Ut,Q){var ut=z0(),Et=Ut.generateAndInjectStyles(Q,ut.styleSheet,ut.stylis);return Et})(C,mt),Tt=Nr(tt,ct);return xt&&(Tt+=" "+xt),mt.className&&(Tt+=" "+mt.className),N[Md(yt)&&!AS.has(yt)?"class":"className"]=Tt,j&&(N.ref=j),ri.createElement(yt,N)})(O,w,H)}P.displayName=v;var O=nl.forwardRef(P);return O.attrs=M,O.componentStyle=_,O.displayName=v,O.shouldForwardProp=T,O.foldedComponentIds=r?Nr(l.foldedComponentIds,l.styledComponentId):"",O.styledComponentId=y,O.target=r?l.target:s,Object.defineProperty(O,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(w){this._foldedDefaultProps=r?(function(H){for(var B=[],L=1;L<arguments.length;L++)B[L-1]=arguments[L];for(var j=0,D=B;j<D.length;j++)vp(H,D[j],!0);return H})({},l.defaultProps,w):w}}),Op(O,function(){return".".concat(O.styledComponentId)}),u&&LS(O,s,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),O}function B0(s,t){for(var i=[s[0]],r=0,l=t.length;r<l;r+=1)i.push(t[r],s[r+1]);return i}var I0=function(s){return Object.assign(s,{isCss:!0})};function gC(s){for(var t=[],i=1;i<arguments.length;i++)t[i-1]=arguments[i];if(js(s)||ll(s))return I0(Pr(B0(Cc,mc([s],t,!0))));var r=s;return t.length===0&&r.length===1&&typeof r[0]=="string"?Pr(r):I0(Pr(B0(r,t)))}function xp(s,t,i){if(i===void 0&&(i=Ys),!t)throw pl(1,t);var r=function(l){for(var u=[],h=1;h<arguments.length;h++)u[h-1]=arguments[h];return s(t,i,gC.apply(void 0,mc([l],u,!1)))};return r.attrs=function(l){return xp(s,t,Wn(Wn({},i),{attrs:Array.prototype.concat(i.attrs,l).filter(Boolean)}))},r.withConfig=function(l){return xp(s,t,Wn(Wn({},i),l))},r}var HS=function(s){return xp(mC,s)},GS=HS;AS.forEach(function(s){GS[s]=HS(s)});const tl=({Text:s,Link:t})=>ye.jsx(_C,{children:ye.jsx("a",{href:t,children:ye.jsx("button",{children:ye.jsx("span",{className:"text",children:s})})})}),_C=GS.div`
  button {
    pointer-events: auto;
    align-items: center;
    background-image: linear-gradient(144deg, #af40ff, #5b42f3 50%, #00ddeb);
    border: 0;
    border-radius: 8px;
    box-shadow: rgba(151, 65, 252, 0.2) 0 15px 30px -5px;
    box-sizing: border-box;
    color: #ffffff;
    display: flex;
    font-size: 18px;
    justify-content: center;
    line-height: 1em;
    max-width: 100%;
    min-width: 140px;
    padding: 3px;
    text-decoration: none;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    white-space: nowrap;
    cursor: pointer;
    transition: all 0.3s;
  }

  button:active,
  button:hover {
    outline: 0;
  }

  button span {
    background-color: rgb(5, 6, 45);
    padding: 16px 24px;
    border-radius: 6px;
    width: 100%;
    height: 100%;
    transition: 300ms;
  }

  button:hover span {
    background: none;
  }

  button:active {
    transform: scale(0.9);
  }
`;function vC(){return ye.jsxs("div",{className:"layout main-container",children:[ye.jsx("div",{className:"liquid-background",children:ye.jsx(pR,{colors:["#5227FF","#FF9FFC","#B19EEF"],mouseForce:20,cursorSize:100,isViscous:!1,viscous:30,iterationsViscous:32,iterationsPoisson:32,resolution:.5,isBounce:!1,autoDemo:!0,autoSpeed:.5,autoIntensity:2.2,takeoverDuration:.25,autoResumeDelay:3e3,autoRampDuration:.6})}),ye.jsxs("div",{className:"grow1 text-container",children:[ye.jsx("h1",{className:"text heading",children:"Hi, I'm Romano"}),ye.jsx("h2",{className:"text occupation",children:"Full-Stack Developer."}),ye.jsx("p",{className:"text summary",children:"Experienced in React, C#, HTML, CSS, and WordPress, delivering secure, high-performing websites with expertise in server management and e-commerce platforms. Currently at Hive Digital Marketing, building modern, scalable web solutions."}),ye.jsx(tl,{Text:"Contact",Link:""})]}),ye.jsx("div",{className:"grow1",children:ye.jsx("img",{className:"romano-image",src:iM,alt:"Romano"})})]})}function SC(){return ye.jsxs("div",{className:"menu",children:[ye.jsx(tl,{Text:"About",Link:"#about"}),ye.jsx(tl,{Text:"Recent Projects"}),ye.jsx(tl,{Text:"Contact"}),ye.jsx(tl,{Text:"Work Experience"})]})}function xC({Head:s,Sub:t}){return ye.jsxs("div",{id:"about",className:"about",children:[ye.jsx("h2",{className:"text-center about-heading",children:s}),ye.jsx("p",{className:"text-center paragraph summary",children:t})]})}var Ju={},F0;function yC(){if(F0)return Ju;F0=1;function s(u){if(typeof window>"u")return;const h=document.createElement("style");return h.setAttribute("type","text/css"),h.innerHTML=u,document.head.appendChild(h),u}Object.defineProperty(Ju,"__esModule",{value:!0});var t=Sc();function i(u){return u&&typeof u=="object"&&"default"in u?u:{default:u}}var r=i(t);s(`.rfm-marquee-container {
  overflow-x: hidden;
  display: flex;
  flex-direction: row;
  position: relative;
  width: var(--width);
  transform: var(--transform);
}
.rfm-marquee-container:hover div {
  animation-play-state: var(--pause-on-hover);
}
.rfm-marquee-container:active div {
  animation-play-state: var(--pause-on-click);
}

.rfm-overlay {
  position: absolute;
  width: 100%;
  height: 100%;
}
.rfm-overlay::before, .rfm-overlay::after {
  background: linear-gradient(to right, var(--gradient-color), rgba(255, 255, 255, 0));
  content: "";
  height: 100%;
  position: absolute;
  width: var(--gradient-width);
  z-index: 2;
  pointer-events: none;
  touch-action: none;
}
.rfm-overlay::after {
  right: 0;
  top: 0;
  transform: rotateZ(180deg);
}
.rfm-overlay::before {
  left: 0;
  top: 0;
}

.rfm-marquee {
  flex: 0 0 auto;
  min-width: var(--min-width);
  z-index: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  animation: scroll var(--duration) linear var(--delay) var(--iteration-count);
  animation-play-state: var(--play);
  animation-delay: var(--delay);
  animation-direction: var(--direction);
}
@keyframes scroll {
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-100%);
  }
}

.rfm-initial-child-container {
  flex: 0 0 auto;
  display: flex;
  min-width: auto;
  flex-direction: row;
  align-items: center;
}

.rfm-child {
  transform: var(--transform);
}`);const l=t.forwardRef(function({style:h={},className:d="",autoFill:m=!1,play:p=!0,pauseOnHover:S=!1,pauseOnClick:v=!1,direction:y="left",speed:M=50,delay:T=0,loop:A=0,gradient:E=!1,gradientColor:_="white",gradientWidth:P=200,onFinish:O,onCycleComplete:w,onMount:H,children:B},L){const[j,D]=t.useState(0),[C,V]=t.useState(0),[tt,ct]=t.useState(1),[ft,dt]=t.useState(!1),z=t.useRef(null),q=L||z,W=t.useRef(null),mt=t.useCallback(()=>{if(W.current&&q.current){const Q=q.current.getBoundingClientRect(),ut=W.current.getBoundingClientRect();let Et=Q.width,Ct=ut.width;(y==="up"||y==="down")&&(Et=Q.height,Ct=ut.height),ct(m&&Et&&Ct&&Ct<Et?Math.ceil(Et/Ct):1),D(Et),V(Ct)}},[m,q,y]);t.useEffect(()=>{if(ft&&(mt(),W.current&&q.current)){const Q=new ResizeObserver(()=>mt());return Q.observe(q.current),Q.observe(W.current),()=>{Q&&Q.disconnect()}}},[mt,q,ft]),t.useEffect(()=>{mt()},[mt,B]),t.useEffect(()=>{dt(!0)},[]),t.useEffect(()=>{typeof H=="function"&&H()},[]);const yt=t.useMemo(()=>m?C*tt/M:C<j?j/M:C/M,[m,j,C,tt,M]),N=t.useMemo(()=>Object.assign(Object.assign({},h),{"--pause-on-hover":!p||S?"paused":"running","--pause-on-click":!p||S&&!v||v?"paused":"running","--width":y==="up"||y==="down"?"100vh":"100%","--transform":y==="up"?"rotate(-90deg)":y==="down"?"rotate(90deg)":"none"}),[h,p,S,v,y]),J=t.useMemo(()=>({"--gradient-color":_,"--gradient-width":typeof P=="number"?`${P}px`:P}),[_,P]),xt=t.useMemo(()=>({"--play":p?"running":"paused","--direction":y==="left"?"normal":"reverse","--duration":`${yt}s`,"--delay":`${T}s`,"--iteration-count":A?`${A}`:"infinite","--min-width":m?"auto":"100%"}),[p,y,yt,T,A,m]),Tt=t.useMemo(()=>({"--transform":y==="up"?"rotate(90deg)":y==="down"?"rotate(-90deg)":"none"}),[y]),Ut=t.useCallback(Q=>[...Array(Number.isFinite(Q)&&Q>=0?Q:0)].map((ut,Et)=>r.default.createElement(t.Fragment,{key:Et},t.Children.map(B,Ct=>r.default.createElement("div",{style:Tt,className:"rfm-child"},Ct)))),[Tt,B]);return ft?r.default.createElement("div",{ref:q,style:N,className:"rfm-marquee-container "+d},E&&r.default.createElement("div",{style:J,className:"rfm-overlay"}),r.default.createElement("div",{className:"rfm-marquee",style:xt,onAnimationIteration:w,onAnimationEnd:O},r.default.createElement("div",{className:"rfm-initial-child-container",ref:W},t.Children.map(B,Q=>r.default.createElement("div",{style:Tt,className:"rfm-child"},Q))),Ut(tt-1)),r.default.createElement("div",{className:"rfm-marquee",style:xt},Ut(tt))):null});return Ju.default=l,Ju}var MC=yC();const EC=H0(MC),TC="/assets/c-sharp-B4GGs_mZ.webp",bC="/assets/html-5-Bwjf5hEe.webp",AC="/assets/css-3-D49x5bZt.webp",RC="/assets/docker-DcdaGILN.webp",CC="/assets/mysql-database-BkOhLdKT.webp",wC="/assets/react-DHnbS0Tn.webp",DC="/assets/tailwind-DTCECmLR.webp",UC="/assets/three-js-icon-BDqzwIEO.webp",LC="/assets/web-CkYsl96L.webp",NC="/assets/woocommerce-0QjqEvKP.webp",OC="/assets/wordpress-CF-qeGq2.webp",Ri={CSharp:TC,Html:bC,CSS:AC,Docker:RC,MySQL:CC,ReactLogo:wC,Tailwind:DC,ThreeJS:UC,PHP:LC,Woocommerce:NC,WordPress:OC},zC=[{name:"HTML",img:Ri.Html},{name:"PHP",img:Ri.PHP},{name:"C#",img:Ri.CSharp},{name:"CSS",img:Ri.CSS},{name:"React.js",img:Ri.ReactLogo},{name:"WordPress",img:Ri.WordPress},{name:"MySQL",img:Ri.MySQL},{name:"Three.js",img:Ri.ThreeJS},{name:"Docker",img:Ri.Docker},{name:"Tailwind CSS",img:Ri.Tailwind},{name:"Woocommerce",img:Ri.Woocommerce}];function PC(){return ye.jsx("div",{className:"carousel-container",children:ye.jsx(EC,{speed:50,gradient:!0,gradientColor:"rgb(2, 0, 36)",autoFill:!0,children:zC.map((s,t)=>ye.jsxs("div",{className:"pill",children:[ye.jsx("img",{src:s.img,alt:s.name}),ye.jsx("span",{children:s.name})]},t))})})}function BC(){return ye.jsxs(ye.Fragment,{children:[ye.jsx(vC,{}),ye.jsx(SC,{}),ye.jsx(xC,{Head:"About",Sub:"I’m a junior front-end developer looking for a new role in an exciting company. I focus on writing accessible HTML, using modern CSS practices and writing clean JavaScript. When writing JavaScript code, I mostly use React, but I can adapt to whatever tools are required. I’m based in London, UK, but I’m happy working remotely and have experience in remote teams. When I’m not coding, you’ll find me outdoors. I love being out in nature whether that’s going for a walk, run or cycling. I’d love you to check out my work."}),ye.jsx(PC,{})]})}nM.createRoot(document.getElementById("root")).render(ye.jsx(ri.StrictMode,{children:ye.jsx(BC,{})}));
