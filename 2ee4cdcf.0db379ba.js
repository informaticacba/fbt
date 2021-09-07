/*! For license information please see 2ee4cdcf.0db379ba.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{100:function(e,t,n){"use strict";var r=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable;function i(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(o){return!1}}()?Object.assign:function(e,t){for(var n,c,l=i(e),u=1;u<arguments.length;u++){for(var s in n=Object(arguments[u]))o.call(n,s)&&(l[s]=n[s]);if(r){c=r(n);for(var p=0;p<c.length;p++)a.call(n,c[p])&&(l[c[p]]=n[c[p]])}}return l}},68:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return s}));var r=n(1),o=n(6),a=(n(98),n(97)),i={id:"collection",title:"Extracting FBTs",sidebar_label:"Extracting translatable texts"},c={unversionedId:"collection",id:"collection",isDocsHomePage:!1,title:"Extracting FBTs",description:"We provide",source:"@site/../docs/collection.md",slug:"/collection",permalink:"/fbt/docs/collection",version:"current",lastUpdatedBy:"David Han Sze Chuen",lastUpdatedAt:1618533842,sidebar_label:"Extracting translatable texts",sidebar:"docs",previous:{title:"JS Transforms (Transpilation)",permalink:"/fbt/docs/transform"},next:{title:"Translating",permalink:"/fbt/docs/translating"}},l=[{value:"A note on hashes",id:"a-note-on-hashes",children:[]}],u={rightToc:l};function s(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"We provide"),Object(a.b)("p",null,Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/facebook/fbt/blob/master/packages/babel-plugin-fbt/src/bin/collectFbt.js"}),Object(a.b)("inlineCode",{parentName:"a"},"collectFbt.js")),"\nas a utility for collecting strings.  It expects a JSON input of:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"{\n  <enumManifestPath>: [\n    <path1>, <path2>, ..., <pathN>\n  ]\n}\n")),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},Object(a.b)("inlineCode",{parentName:"em"},"collectFbt.js")," is also exposed as a binary named ",Object(a.b)("inlineCode",{parentName:"em"},"fbt-collect")," from ",Object(a.b)("inlineCode",{parentName:"em"},"babel-plugin-fbt"))),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"enumManifestPath")," doesn't need to point to a valid enum manifest, but if you use a ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"enums#shared-enums"}),"shared enum")," it's required."),Object(a.b)("p",null,"The enum-manifest should be a ",Object(a.b)("inlineCode",{parentName:"p"},'"JSON.parseable"')," mapping from all known enums in your app to the key/value pairs they respectively represent:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),'{\n "EnumA": {\n    "keyA1": "valA1",\n    ...,\n    "keyAN": "valAN"\n  },\n  ...,\n "EnumX": {\n    "keyX1": "valX1",\n    ...,\n    "keyXM": "valXM"\n  },\n}\n')),Object(a.b)("p",null,"We've provided ",Object(a.b)("inlineCode",{parentName:"p"},"manifest.js")," as an easy way to generate this manifest from a given source tree.\n",Object(a.b)("em",{parentName:"p"},Object(a.b)("inlineCode",{parentName:"em"},"manifest.js")," is also exposed as a binary named ",Object(a.b)("inlineCode",{parentName:"em"},"fbt-manifest")," from ",Object(a.b)("inlineCode",{parentName:"em"},"babel-plugin-fbt"))),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"collectFbt.js")," will output a JSON object in the following format:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),'{\n  "phrases": [\n    {\n      "hashToLeaf": {\n        <hash>: {\n          "text": <text>,\n          "desc": <description>,\n        },\n        ...\n      },\n      "line_beg": <beginning_line>,\n      "col_beg": <beginning_col>,\n      "line_end": <end_line>,\n      "col_end": <col_end>,\n      "type": "text"|"table",\n      "project": <project>,\n      "jsfbt": string|{t: <table>, m: <metadata>},\n    }\n  ],\n  childParentMapping: {\n    <childIdx>: <parentIdx>\n  }\n}\n')),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"phrases")," here represents all the ",Object(a.b)("em",{parentName:"p"},"source")," information we need to\nprocess and produce an ",Object(a.b)("inlineCode",{parentName:"p"},"fbt._(...)")," callsite's final payload.  When\ncombined with corresponding translations to each ",Object(a.b)("inlineCode",{parentName:"p"},"hashToLeaf")," entry we\ncan produce the translated payloads ",Object(a.b)("inlineCode",{parentName:"p"},"fbt._()")," expects."),Object(a.b)("p",null,"When it comes to moving from source text to translations, what is most\npertinent is the ",Object(a.b)("inlineCode",{parentName:"p"},"hashToLeaf")," payload containing all relevant texts\nwith their identifying hash.  You can provide a custom hash module to\n",Object(a.b)("inlineCode",{parentName:"p"},"collectFbts")," if you so choose.  It defaults to md5."),Object(a.b)("h3",{id:"a-note-on-hashes"},"A note on hashes"),Object(a.b)("p",null,"In the FBT framework, there are 2 main places we uses hashes for\nidentification: ",Object(a.b)("strong",{parentName:"p"},"text")," and ",Object(a.b)("strong",{parentName:"p"},"fbt callsite"),".  The ",Object(a.b)("inlineCode",{parentName:"p"},"hashToLeaf")," mapping\nabove represents the hash (using whichever algorithm was chosen in\n",Object(a.b)("inlineCode",{parentName:"p"},"collectFbt"),") of the ",Object(a.b)("strong",{parentName:"p"},"text")," and its ",Object(a.b)("strong",{parentName:"p"},"description"),".  This is used\nwhen ",Object(a.b)("em",{parentName:"p"},"building")," the translated payloads."),Object(a.b)("p",null,"The hash of the callsite (defaulting to ",Object(a.b)("inlineCode",{parentName:"p"},"jenkins")," hash) is used to\nlook up the payload in\n",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/facebook/fbt/blob/master/runtime/nonfb/FbtTranslations.js"}),Object(a.b)("inlineCode",{parentName:"a"},"FbtTranslations")),".\nThis is basically the hash of the object you see in ",Object(a.b)("inlineCode",{parentName:"p"},"jsfbt"),"."),Object(a.b)("p",null,"See ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"translating"}),"Translating FBTs")," for getting your translations in\nthe right format."))}s.isMDXComponent=!0},97:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=o.a.createContext({}),s=function(e){var t=o.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=s(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(n),b=r,d=p["".concat(i,".").concat(b)]||p[b]||f[b]||a;return n?o.a.createElement(d,c(c({ref:t},u),{},{components:n})):o.a.createElement(d,c({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=b;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var u=2;u<a;u++)i[u]=n[u];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},98:function(e,t,n){"use strict";e.exports=n(99)},99:function(e,t,n){"use strict";var r=n(100),o="function"==typeof Symbol&&Symbol.for,a=o?Symbol.for("react.element"):60103,i=o?Symbol.for("react.portal"):60106,c=o?Symbol.for("react.fragment"):60107,l=o?Symbol.for("react.strict_mode"):60108,u=o?Symbol.for("react.profiler"):60114,s=o?Symbol.for("react.provider"):60109,p=o?Symbol.for("react.context"):60110,f=o?Symbol.for("react.forward_ref"):60112,b=o?Symbol.for("react.suspense"):60113,d=o?Symbol.for("react.memo"):60115,m=o?Symbol.for("react.lazy"):60116,y="function"==typeof Symbol&&Symbol.iterator;function h(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var j={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},O={};function g(e,t,n){this.props=e,this.context=t,this.refs=O,this.updater=n||j}function v(){}function w(e,t,n){this.props=e,this.context=t,this.refs=O,this.updater=n||j}g.prototype.isReactComponent={},g.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(h(85));this.updater.enqueueSetState(this,e,t,"setState")},g.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},v.prototype=g.prototype;var N=w.prototype=new v;N.constructor=w,r(N,g.prototype),N.isPureReactComponent=!0;var C={current:null},x=Object.prototype.hasOwnProperty,k={key:!0,ref:!0,__self:!0,__source:!0};function S(e,t,n){var r,o={},i=null,c=null;if(null!=t)for(r in void 0!==t.ref&&(c=t.ref),void 0!==t.key&&(i=""+t.key),t)x.call(t,r)&&!k.hasOwnProperty(r)&&(o[r]=t[r]);var l=arguments.length-2;if(1===l)o.children=n;else if(1<l){for(var u=Array(l),s=0;s<l;s++)u[s]=arguments[s+2];o.children=u}if(e&&e.defaultProps)for(r in l=e.defaultProps)void 0===o[r]&&(o[r]=l[r]);return{$$typeof:a,type:e,key:i,ref:c,props:o,_owner:C.current}}function _(e){return"object"==typeof e&&null!==e&&e.$$typeof===a}var E=/\/+/g,P=[];function T(e,t,n,r){if(P.length){var o=P.pop();return o.result=e,o.keyPrefix=t,o.func=n,o.context=r,o.count=0,o}return{result:e,keyPrefix:t,func:n,context:r,count:0}}function $(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>P.length&&P.push(e)}function R(e,t,n,r){var o=typeof e;"undefined"!==o&&"boolean"!==o||(e=null);var c=!1;if(null===e)c=!0;else switch(o){case"string":case"number":c=!0;break;case"object":switch(e.$$typeof){case a:case i:c=!0}}if(c)return n(r,e,""===t?"."+F(e,0):t),1;if(c=0,t=""===t?".":t+":",Array.isArray(e))for(var l=0;l<e.length;l++){var u=t+F(o=e[l],l);c+=R(o,u,n,r)}else if(null===e||"object"!=typeof e?u=null:u="function"==typeof(u=y&&e[y]||e["@@iterator"])?u:null,"function"==typeof u)for(e=u.call(e),l=0;!(o=e.next()).done;)c+=R(o=o.value,u=t+F(o,l++),n,r);else if("object"===o)throw n=""+e,Error(h(31,"[object Object]"===n?"object with keys {"+Object.keys(e).join(", ")+"}":n,""));return c}function A(e,t,n){return null==e?0:R(e,"",t,n)}function F(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,(function(e){return t[e]}))}(e.key):t.toString(36)}function I(e,t){e.func.call(e.context,t,e.count++)}function M(e,t,n){var r=e.result,o=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?D(e,r,n,(function(e){return e})):null!=e&&(_(e)&&(e=function(e,t){return{$$typeof:a,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(e,o+(!e.key||t&&t.key===e.key?"":(""+e.key).replace(E,"$&/")+"/")+n)),r.push(e))}function D(e,t,n,r,o){var a="";null!=n&&(a=(""+n).replace(E,"$&/")+"/"),A(e,M,t=T(t,a,r,o)),$(t)}var L={current:null};function U(){var e=L.current;if(null===e)throw Error(h(321));return e}var q={ReactCurrentDispatcher:L,ReactCurrentBatchConfig:{suspense:null},ReactCurrentOwner:C,IsSomeRendererActing:{current:!1},assign:r};t.Children={map:function(e,t,n){if(null==e)return e;var r=[];return D(e,r,null,t,n),r},forEach:function(e,t,n){if(null==e)return e;A(e,I,t=T(null,null,t,n)),$(t)},count:function(e){return A(e,(function(){return null}),null)},toArray:function(e){var t=[];return D(e,t,null,(function(e){return e})),t},only:function(e){if(!_(e))throw Error(h(143));return e}},t.Component=g,t.Fragment=c,t.Profiler=u,t.PureComponent=w,t.StrictMode=l,t.Suspense=b,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=q,t.cloneElement=function(e,t,n){if(null==e)throw Error(h(267,e));var o=r({},e.props),i=e.key,c=e.ref,l=e._owner;if(null!=t){if(void 0!==t.ref&&(c=t.ref,l=C.current),void 0!==t.key&&(i=""+t.key),e.type&&e.type.defaultProps)var u=e.type.defaultProps;for(s in t)x.call(t,s)&&!k.hasOwnProperty(s)&&(o[s]=void 0===t[s]&&void 0!==u?u[s]:t[s])}var s=arguments.length-2;if(1===s)o.children=n;else if(1<s){u=Array(s);for(var p=0;p<s;p++)u[p]=arguments[p+2];o.children=u}return{$$typeof:a,type:e.type,key:i,ref:c,props:o,_owner:l}},t.createContext=function(e,t){return void 0===t&&(t=null),(e={$$typeof:p,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:s,_context:e},e.Consumer=e},t.createElement=S,t.createFactory=function(e){var t=S.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:f,render:e}},t.isValidElement=_,t.lazy=function(e){return{$$typeof:m,_ctor:e,_status:-1,_result:null}},t.memo=function(e,t){return{$$typeof:d,type:e,compare:void 0===t?null:t}},t.useCallback=function(e,t){return U().useCallback(e,t)},t.useContext=function(e,t){return U().useContext(e,t)},t.useDebugValue=function(){},t.useEffect=function(e,t){return U().useEffect(e,t)},t.useImperativeHandle=function(e,t,n){return U().useImperativeHandle(e,t,n)},t.useLayoutEffect=function(e,t){return U().useLayoutEffect(e,t)},t.useMemo=function(e,t){return U().useMemo(e,t)},t.useReducer=function(e,t,n){return U().useReducer(e,t,n)},t.useRef=function(e){return U().useRef(e)},t.useState=function(e){return U().useState(e)},t.version="16.14.0"}}]);