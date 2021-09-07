/*! For license information please see b5427812.290c5332.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{100:function(e,t,n){"use strict";var r=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable;function u(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(o){return!1}}()?Object.assign:function(e,t){for(var n,l,i=u(e),c=1;c<arguments.length;c++){for(var p in n=Object(arguments[c]))o.call(n,p)&&(i[p]=n[p]);if(r){l=r(n);for(var f=0;f<l.length;f++)a.call(n,l[f])&&(i[l[f]]=n[l[f]])}}return i}},84:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return u})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return p}));var r=n(1),o=n(6),a=(n(98),n(97)),u={id:"plurals",title:"Plurals",sidebar_label:"Plurals"},l={unversionedId:"plurals",id:"plurals",isDocsHomePage:!1,title:"Plurals",description:"fbt:plural provides you with a shorthand way for plural variations.",source:"@site/../docs/plurals.md",slug:"/plurals",permalink:"/fbt/docs/plurals",version:"current",lastUpdatedBy:"David Han Sze Chuen",lastUpdatedAt:1618533842,sidebar_label:"Plurals",sidebar:"docs",previous:{title:"Implicit parameters",permalink:"/fbt/docs/implicit_params"},next:{title:"Enumerations",permalink:"/fbt/docs/enums"}},i=[],c={rightToc:i};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"fbt:plural")," provides you with a shorthand way for plural variations."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),'<fbt desc="plural example">\n  You have\n  <fbt:plural\n    count={getLikeCount()}\n    name="number of likes"\n    showCount="ifMany"\n    many="likes">\n     a like\n  </fbt:plural>\n  on your\n  <fbt:plural\n    count={getPhotoCount()}\n    showCount="no">\n     photo\n  </fbt:plural>.\n</fbt>\n')),Object(a.b)("p",null,"OR"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"fbt(\n  'You have ' +\n    fbt.plural('a like', getLikeCount(), {\n      name: 'number of likes',\n      showCount: 'ifMany',\n      many: 'likes',\n    }) +\n    ' on your ' +\n    fbt.plural('photo', getPhotoCount()),\n  'plural example',\n);\n")),Object(a.b)("p",null,"Both the above examples generate the following during ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"collection"}),"collection"),"."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),'"phrases": [\n  {\n    "hashToLeaf": {\n      "bae7d2f1abd57d08a9dca0b5d05edee8": {\n        "text": "You have {number of likes} likes on your photos",\n        "desc": "plural example",\n      },\n      "3306b396e08398f28d921b46039f008c": {\n        "text": "You have {number of likes} likes on your photo",\n        "desc": "plural example",\n      },\n      "c9e4b5b48f38634ffecaf34956a4b186": {\n        "text": "You have a like on your photos",\n        "desc": "plural example",\n      },\n      "cb49d6d764ea8aabdca0e9db7f10ba34": {\n        "text": "You have a like on your photo"\n        "desc": "plural example",\n      },\n    },\n    "type": "table",\n    ...\n  }\n]\n')),Object(a.b)("h4",{id:"required-arguments"},"Required arguments:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"singular phrase")," ",Object(a.b)("inlineCode",{parentName:"li"},"string"),": JSX child in ",Object(a.b)("inlineCode",{parentName:"li"},"<fbt:plural>")," and argument 1 in ",Object(a.b)("inlineCode",{parentName:"li"},"fbt.plural")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"count")," ",Object(a.b)("inlineCode",{parentName:"li"},"number"),": ",Object(a.b)("inlineCode",{parentName:"li"},"count")," in ",Object(a.b)("inlineCode",{parentName:"li"},"<fbt:plural>")," and argument 2 in ",Object(a.b)("inlineCode",{parentName:"li"},"fbt.plural"))),Object(a.b)("h4",{id:"optional-arguments"},"Optional arguments:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},Object(a.b)("strong",{parentName:"p"},"many")," ",Object(a.b)("inlineCode",{parentName:"p"},"string"),": Represents the plural form of the string in English.  Default is ",Object(a.b)("inlineCode",{parentName:"p"},"{singular} + 's'"))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},Object(a.b)("strong",{parentName:"p"},"showCount")," ",Object(a.b)("inlineCode",{parentName:"p"},'"yes"|"no"|"ifMany"'),": Whether to show the ",Object(a.b)("inlineCode",{parentName:"p"},"{number}")," in the string.\n",Object(a.b)("em",{parentName:"p"},"Note that the singular phrase never has a token, but inlines to ",Object(a.b)("inlineCode",{parentName:"em"},"1"),". This is to account for languages like Hebrew for which showing the actual number isn't appropriate")),Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},'"no"'),": (",Object(a.b)("em",{parentName:"li"},"DEFAULT"),") Don't show the count"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},'"ifMany"'),": Show the count only in plural case"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},'"yes"'),": Show the count in all cases"))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},Object(a.b)("strong",{parentName:"p"},"name")," ",Object(a.b)("inlineCode",{parentName:"p"},"string"),": Name of the token where count shows up. (",Object(a.b)("em",{parentName:"p"},"Default"),": ",Object(a.b)("inlineCode",{parentName:"p"},'"number"'),")")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},Object(a.b)("strong",{parentName:"p"},"value")," ",Object(a.b)("inlineCode",{parentName:"p"},"mixed"),": For overriding the displayed ",Object(a.b)("inlineCode",{parentName:"p"},"number")))))}p.isMDXComponent=!0},97:function(e,t,n){"use strict";n.d(t,"a",(function(){return f})),n.d(t,"b",(function(){return m}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=o.a.createContext({}),p=function(e){var t=o.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},f=function(e){var t=p(e.components);return o.a.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),f=p(n),b=r,m=f["".concat(u,".").concat(b)]||f[b]||s[b]||a;return n?o.a.createElement(m,l(l({ref:t},c),{},{components:n})):o.a.createElement(m,l({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,u=new Array(a);u[0]=b;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:r,u[1]=l;for(var c=2;c<a;c++)u[c]=n[c];return o.a.createElement.apply(null,u)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},98:function(e,t,n){"use strict";e.exports=n(99)},99:function(e,t,n){"use strict";var r=n(100),o="function"==typeof Symbol&&Symbol.for,a=o?Symbol.for("react.element"):60103,u=o?Symbol.for("react.portal"):60106,l=o?Symbol.for("react.fragment"):60107,i=o?Symbol.for("react.strict_mode"):60108,c=o?Symbol.for("react.profiler"):60114,p=o?Symbol.for("react.provider"):60109,f=o?Symbol.for("react.context"):60110,s=o?Symbol.for("react.forward_ref"):60112,b=o?Symbol.for("react.suspense"):60113,m=o?Symbol.for("react.memo"):60115,d=o?Symbol.for("react.lazy"):60116,y="function"==typeof Symbol&&Symbol.iterator;function h(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var O={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},j={};function g(e,t,n){this.props=e,this.context=t,this.refs=j,this.updater=n||O}function v(){}function w(e,t,n){this.props=e,this.context=t,this.refs=j,this.updater=n||O}g.prototype.isReactComponent={},g.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(h(85));this.updater.enqueueSetState(this,e,t,"setState")},g.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},v.prototype=g.prototype;var N=w.prototype=new v;N.constructor=w,r(N,g.prototype),N.isPureReactComponent=!0;var C={current:null},k=Object.prototype.hasOwnProperty,S={key:!0,ref:!0,__self:!0,__source:!0};function x(e,t,n){var r,o={},u=null,l=null;if(null!=t)for(r in void 0!==t.ref&&(l=t.ref),void 0!==t.key&&(u=""+t.key),t)k.call(t,r)&&!S.hasOwnProperty(r)&&(o[r]=t[r]);var i=arguments.length-2;if(1===i)o.children=n;else if(1<i){for(var c=Array(i),p=0;p<i;p++)c[p]=arguments[p+2];o.children=c}if(e&&e.defaultProps)for(r in i=e.defaultProps)void 0===o[r]&&(o[r]=i[r]);return{$$typeof:a,type:e,key:u,ref:l,props:o,_owner:C.current}}function P(e){return"object"==typeof e&&null!==e&&e.$$typeof===a}var E=/\/+/g,_=[];function R(e,t,n,r){if(_.length){var o=_.pop();return o.result=e,o.keyPrefix=t,o.func=n,o.context=r,o.count=0,o}return{result:e,keyPrefix:t,func:n,context:r,count:0}}function $(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>_.length&&_.push(e)}function D(e,t,n,r){var o=typeof e;"undefined"!==o&&"boolean"!==o||(e=null);var l=!1;if(null===e)l=!0;else switch(o){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case a:case u:l=!0}}if(l)return n(r,e,""===t?"."+M(e,0):t),1;if(l=0,t=""===t?".":t+":",Array.isArray(e))for(var i=0;i<e.length;i++){var c=t+M(o=e[i],i);l+=D(o,c,n,r)}else if(null===e||"object"!=typeof e?c=null:c="function"==typeof(c=y&&e[y]||e["@@iterator"])?c:null,"function"==typeof c)for(e=c.call(e),i=0;!(o=e.next()).done;)l+=D(o=o.value,c=t+M(o,i++),n,r);else if("object"===o)throw n=""+e,Error(h(31,"[object Object]"===n?"object with keys {"+Object.keys(e).join(", ")+"}":n,""));return l}function T(e,t,n){return null==e?0:D(e,"",t,n)}function M(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,(function(e){return t[e]}))}(e.key):t.toString(36)}function A(e,t){e.func.call(e.context,t,e.count++)}function I(e,t,n){var r=e.result,o=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?L(e,r,n,(function(e){return e})):null!=e&&(P(e)&&(e=function(e,t){return{$$typeof:a,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(e,o+(!e.key||t&&t.key===e.key?"":(""+e.key).replace(E,"$&/")+"/")+n)),r.push(e))}function L(e,t,n,r,o){var a="";null!=n&&(a=(""+n).replace(E,"$&/")+"/"),T(e,I,t=R(t,a,r,o)),$(t)}var U={current:null};function q(){var e=U.current;if(null===e)throw Error(h(321));return e}var F={ReactCurrentDispatcher:U,ReactCurrentBatchConfig:{suspense:null},ReactCurrentOwner:C,IsSomeRendererActing:{current:!1},assign:r};t.Children={map:function(e,t,n){if(null==e)return e;var r=[];return L(e,r,null,t,n),r},forEach:function(e,t,n){if(null==e)return e;T(e,A,t=R(null,null,t,n)),$(t)},count:function(e){return T(e,(function(){return null}),null)},toArray:function(e){var t=[];return L(e,t,null,(function(e){return e})),t},only:function(e){if(!P(e))throw Error(h(143));return e}},t.Component=g,t.Fragment=l,t.Profiler=c,t.PureComponent=w,t.StrictMode=i,t.Suspense=b,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=F,t.cloneElement=function(e,t,n){if(null==e)throw Error(h(267,e));var o=r({},e.props),u=e.key,l=e.ref,i=e._owner;if(null!=t){if(void 0!==t.ref&&(l=t.ref,i=C.current),void 0!==t.key&&(u=""+t.key),e.type&&e.type.defaultProps)var c=e.type.defaultProps;for(p in t)k.call(t,p)&&!S.hasOwnProperty(p)&&(o[p]=void 0===t[p]&&void 0!==c?c[p]:t[p])}var p=arguments.length-2;if(1===p)o.children=n;else if(1<p){c=Array(p);for(var f=0;f<p;f++)c[f]=arguments[f+2];o.children=c}return{$$typeof:a,type:e.type,key:u,ref:l,props:o,_owner:i}},t.createContext=function(e,t){return void 0===t&&(t=null),(e={$$typeof:f,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:p,_context:e},e.Consumer=e},t.createElement=x,t.createFactory=function(e){var t=x.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:s,render:e}},t.isValidElement=P,t.lazy=function(e){return{$$typeof:d,_ctor:e,_status:-1,_result:null}},t.memo=function(e,t){return{$$typeof:m,type:e,compare:void 0===t?null:t}},t.useCallback=function(e,t){return q().useCallback(e,t)},t.useContext=function(e,t){return q().useContext(e,t)},t.useDebugValue=function(){},t.useEffect=function(e,t){return q().useEffect(e,t)},t.useImperativeHandle=function(e,t,n){return q().useImperativeHandle(e,t,n)},t.useLayoutEffect=function(e,t){return q().useLayoutEffect(e,t)},t.useMemo=function(e,t){return q().useMemo(e,t)},t.useReducer=function(e,t,n){return q().useReducer(e,t,n)},t.useRef=function(e){return q().useRef(e)},t.useState=function(e){return q().useState(e)},t.version="16.14.0"}}]);