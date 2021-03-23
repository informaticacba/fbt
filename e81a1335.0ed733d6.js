/*! For license information please see e81a1335.0ed733d6.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{100:function(e,t,n){"use strict";var r=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable;function i(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(a){return!1}}()?Object.assign:function(e,t){for(var n,l,c=i(e),s=1;s<arguments.length;s++){for(var b in n=Object(arguments[s]))a.call(n,b)&&(c[b]=n[b]);if(r){l=r(n);for(var u=0;u<l.length;u++)o.call(n,l[u])&&(c[l[u]]=n[l[u]])}}return c}},88:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return b}));var r=n(1),a=n(6),o=(n(98),n(97)),i={id:"getting_started_react_native",title:"Getting Started with React Native",sidebar_label:"React Native"},l={unversionedId:"getting_started_react_native",id:"getting_started_react_native",isDocsHomePage:!1,title:"Getting Started with React Native",description:"Try the Demo",source:"@site/../docs/getting_started_react_native.md",slug:"/getting_started_react_native",permalink:"/fbt/docs/getting_started_react_native",version:"current",lastUpdatedBy:"John Watson",lastUpdatedAt:1616539689,sidebar_label:"React Native",sidebar:"docs",previous:{title:"Getting Started on web",permalink:"/fbt/docs/getting_started_on_web"},next:{title:"The FBT API",permalink:"/fbt/docs/api_intro"}},c=[{value:"Try the Demo",id:"try-the-demo",children:[]},{value:"Adding FBT and its dependencies",id:"adding-fbt-and-its-dependencies",children:[]},{value:"Android",id:"android",children:[]},{value:"iOS",id:"ios",children:[]},{value:"Add the FBT scripts in your package.json file",id:"add-the-fbt-scripts-in-your-packagejson-file",children:[]},{value:"<strong>Notes</strong>",id:"notes",children:[]}],s={rightToc:c};function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"try-the-demo"},"Try the Demo"),Object(o.b)("p",null,"Check out our ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/facebook/fbt/tree/rn-demo-app"}),"React Native Demo app"),".\nCheck out our ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.npmjs.com/package/react-native-fbt"}),"FBT Native Module")," on NPM."),Object(o.b)("h2",{id:"adding-fbt-and-its-dependencies"},"Adding FBT and its dependencies"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Dependencies"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"p"},"yarn add babel-plugin-fbt babel-plugin-fbt-runtime fbt react-native-fbt '@fbtjs/default-collection-transform'"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"p"},"yarn add babel-preset-react-native shelljs fb-tiger-hash --dev"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Make sure your fbt has a version greater than ",Object(o.b)("inlineCode",{parentName:"p"},'"^0.10.0"'))))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Create a ",Object(o.b)("inlineCode",{parentName:"p"},".babelrc")," or ",Object(o.b)("inlineCode",{parentName:"p"},"babel.config.js")," file to add the transformation plugins with the following content:"))),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),'  {\n   "plugins": ["babel-plugin-fbt", "babel-plugin-fbt-runtime"],\n   "presets": ["module:metro-react-native-babel-preset"]\n  }\n')),Object(o.b)("h2",{id:"android"},"Android"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Update your Android main activity so that the app reloads whenever the user changes the locale",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"You can find an example in the ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/facebook/fbt/blob/rn-demo-app/android/app/src/main/java/com/fbtrndemoapp/MainActivity.java#L39"}),"rn-demo-app")))),Object(o.b)("li",{parentName:"ul"},"Add ",Object(o.b)("inlineCode",{parentName:"li"},'"locale|layoutDirection"')," in ",Object(o.b)("inlineCode",{parentName:"li"},"android:configChanges")," in the ",Object(o.b)("inlineCode",{parentName:"li"},"AndroidManifest.xml"),". This will restart the app whenever the language of the device changes and will load the correct translations.")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),'android:configChanges="keyboard|keyboardHidden|orientation|screenSize|screenLayout|layoutDirection|locale"\n')),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Copy the files in the i18n folder of the demo app into your app. Find an explanation of each file below:")),Object(o.b)("p",null,Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/facebook/fbt/blob/rn-demo-app/i18n/NativeFbtModule.js"}),"NativeFbtModule.js")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"TurboModule specification enabling usage in JavaScript of the ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/facebook/fbt/blob/master/packages/react-native-fbt/android/src/main/java/com/facebook/react/modules/FbtModule.java"}),"Android Native Module"))),Object(o.b)("p",null,Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/facebook/fbt/blob/rn-demo-app/i18n/FbtI18nNativeAssets.js"}),"FbtI18nNativeAssets.js")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"JavaScript wrapper around the native module"),Object(o.b)("li",{parentName:"ul"},"Implements a local cache for translations to avoid unnecessary trips to the native side"),Object(o.b)("li",{parentName:"ul"},"The Android Native Module in the ",Object(o.b)("inlineCode",{parentName:"li"},"react-native-fbt")," package, is used to read translations from Android resources. This module reads translations from ",Object(o.b)("inlineCode",{parentName:"li"},"android/raw-xx-rXX/localizable.json")," files where xx/XX are the languageCode-countryCode respectively (more on Android resources naming ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.android.com/training/basics/supporting-devices/languages#CreateDirs"}),"here"),") with the following structure:")),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},'{\n"2keTtB": "\\"Escanear c\xf3digo QR\\"",\n"24DJ19": "\\"Subir\\"",\n}')),Object(o.b)("p",null,"The hash values are the jenkins' hashes generated by the ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/facebook/fbt/blob/291ba53c60df57dd76f65ff80fc0f5429667972b/package.json#L7"}),"collectFbt")," script. Notice the escaped quotes in the translated string since this file will be converted into JSON by your app."),Object(o.b)("p",null,Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/facebook/fbt/blob/rn-demo-app/i18n/getTranslatedInput.js"}),"getTranslatedInput.js")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"React Native specific hook to tell the FBT package how to load strings in your application")),Object(o.b)("p",null,Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/facebook/fbt/blob/rn-demo-app/i18n/fbtInit.js"}),"fbtInit.js")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Injects the getTranslatedInput hook into FBT"),Object(o.b)("li",{parentName:"ul"},"This file must be imported in your app's entry file, before any other imports, to make FBT available for any static strings you may need to translate in your app. See an example in our ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/facebook/fbt/blob/291ba53c60df57dd76f65ff80fc0f5429667972b/index.js#L25"}),"index.js"))),Object(o.b)("h2",{id:"ios"},"iOS"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"After adding the native module, run ",Object(o.b)("inlineCode",{parentName:"li"},"cd ios/ && pod install")," to add the new module to your app"),Object(o.b)("li",{parentName:"ul"},"Add the languages you want your app to support",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Name the files ",Object(o.b)("inlineCode",{parentName:"li"},"Localizable.strings")," as this is what the native module will look for when looking for translations")))),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Note:")," Please, remember you need to escape your quotes when writing your translation strings on iOS. See an example in ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/facebook/fbt/blob/rn-demo-app/ios/es.lproj/Localizable.strings"}),"our test app"),"."),Object(o.b)("h2",{id:"add-the-fbt-scripts-in-your-packagejson-file"},"Add the FBT scripts in your package.json file"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Add the manifest script call in package.json. This script looks for all the files that import fbt and creates the input for the collectFbt script below:")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),'"manifest": "fbt-manifest --src src/ --enum-manifest i18n/fbt/.enum_manifest.json --src-manifest i18n/fbt/.src_manifest.json"\n')),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Add the collectFbt script call in package.json. This script collects all fbt-wrapped strings into a file for you to translate.")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),'"collect-fbts": "fbt-collect --hash-module fb-tiger-hash --react-native-mode --manifest < i18n/fbt/.src_manifest.json > i18n/fbt/.source_strings.json"\n')),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Add the translate script call in package.json. This script should be used after all strings are translated. It'll generate a single file with all translations that we then need to translate into Android specific localizable.json files. See the input format ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/facebook/fbt/blob/rn-demo-app/i18n/fbt/translationScriptInput/es_es.json"}),"here"),".")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),'"translate-fbts": "fbt-translate --jenkins --source-strings i18n/fbt/.source_strings.json --translations i18n/fbt/translationScriptInput/*.json > i18n/fbt/translatedFbts.json"\n')),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Generate localizable.json files for each language and add them to the corresponding ",Object(o.b)("inlineCode",{parentName:"li"},"res/raw-xx-rXX")," folder (xx is the ISO 2 Letter Language Codes and XX is the ISO 2 Letter Country Code). You can find a helper script in our test app: ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/facebook/fbt/blob/rn-demo-app/i18n/scripts/generate-android-localizables.js"}),"generate-android-localizables.js"),". This script takes in the translation script output and generates localizable.json files in the ",Object(o.b)("inlineCode",{parentName:"li"},"android/res")," folder:")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"res\n\u251c\u2500\u2500 raw\n\u2502   \u2514\u2500\u2500 localizable.json\n\u251c\u2500\u2500 raw-es-rES\n\u2502   \u2514\u2500\u2500 localizable.json\n\u2514\u2500\u2500 values\n    \u251c\u2500\u2500 strings.xml\n    \u2514\u2500\u2500 styles.xml\n")),Object(o.b)("h2",{id:"notes"},Object(o.b)("strong",{parentName:"h2"},"Notes")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"The ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/facebook/fbt/blob/rn-demo-app/i18n/scripts/generate-android-localizables.js"}),"generate-android-localizable.js")," script creates the main ",Object(o.b)("inlineCode",{parentName:"li"},"res/raw/localizable.json")," with the content: ",Object(o.b)("inlineCode",{parentName:"li"},"{}"),". This empty file is necessary so that Android generates the ",Object(o.b)("inlineCode",{parentName:"li"},"R.raw.localizable")," resource. If you don\u2019t use the script, please, create the file ",Object(o.b)("inlineCode",{parentName:"li"},"res/raw/localizable.json")," manually with an empty json as mentioned before. You can add this  as part of your scripts thanks to ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/facebook/fbt/pull/136"}),"a GitHub collaboration")," using the ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/facebook/fbt/blob/rn-demo-app/i18n/scripts/generate-android-localizables-executor.js"}),"generate-android-localizables-executor.js")),Object(o.b)("li",{parentName:"ul"},"There's a known bug when using ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/facebook/fbt/issues/127"}),"fbt in React Native components' properties"),". The solution is to call ",Object(o.b)("inlineCode",{parentName:"li"},".toString()")," after the fbt() call:")),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},'<TextInput placeholder={fbt("Text", "Description").toString()} />')))}b.isMDXComponent=!0},97:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),b=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=b(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},f=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=b(n),f=r,d=u["".concat(i,".").concat(f)]||u[f]||p[f]||o;return n?a.a.createElement(d,l(l({ref:t},s),{},{components:n})):a.a.createElement(d,l({ref:t},s))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},98:function(e,t,n){"use strict";e.exports=n(99)},99:function(e,t,n){"use strict";var r=n(100),a="function"==typeof Symbol&&Symbol.for,o=a?Symbol.for("react.element"):60103,i=a?Symbol.for("react.portal"):60106,l=a?Symbol.for("react.fragment"):60107,c=a?Symbol.for("react.strict_mode"):60108,s=a?Symbol.for("react.profiler"):60114,b=a?Symbol.for("react.provider"):60109,u=a?Symbol.for("react.context"):60110,p=a?Symbol.for("react.forward_ref"):60112,f=a?Symbol.for("react.suspense"):60113,d=a?Symbol.for("react.memo"):60115,m=a?Symbol.for("react.lazy"):60116,h="function"==typeof Symbol&&Symbol.iterator;function j(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var O={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},y={};function g(e,t,n){this.props=e,this.context=t,this.refs=y,this.updater=n||O}function v(){}function N(e,t,n){this.props=e,this.context=t,this.refs=y,this.updater=n||O}g.prototype.isReactComponent={},g.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(j(85));this.updater.enqueueSetState(this,e,t,"setState")},g.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},v.prototype=g.prototype;var w=N.prototype=new v;w.constructor=N,r(w,g.prototype),w.isPureReactComponent=!0;var k={current:null},_=Object.prototype.hasOwnProperty,C={key:!0,ref:!0,__self:!0,__source:!0};function S(e,t,n){var r,a={},i=null,l=null;if(null!=t)for(r in void 0!==t.ref&&(l=t.ref),void 0!==t.key&&(i=""+t.key),t)_.call(t,r)&&!C.hasOwnProperty(r)&&(a[r]=t[r]);var c=arguments.length-2;if(1===c)a.children=n;else if(1<c){for(var s=Array(c),b=0;b<c;b++)s[b]=arguments[b+2];a.children=s}if(e&&e.defaultProps)for(r in c=e.defaultProps)void 0===a[r]&&(a[r]=c[r]);return{$$typeof:o,type:e,key:i,ref:l,props:a,_owner:k.current}}function x(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var T=/\/+/g,P=[];function A(e,t,n,r){if(P.length){var a=P.pop();return a.result=e,a.keyPrefix=t,a.func=n,a.context=r,a.count=0,a}return{result:e,keyPrefix:t,func:n,context:r,count:0}}function E(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>P.length&&P.push(e)}function R(e,t,n,r){var a=typeof e;"undefined"!==a&&"boolean"!==a||(e=null);var l=!1;if(null===e)l=!0;else switch(a){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case o:case i:l=!0}}if(l)return n(r,e,""===t?"."+F(e,0):t),1;if(l=0,t=""===t?".":t+":",Array.isArray(e))for(var c=0;c<e.length;c++){var s=t+F(a=e[c],c);l+=R(a,s,n,r)}else if(null===e||"object"!=typeof e?s=null:s="function"==typeof(s=h&&e[h]||e["@@iterator"])?s:null,"function"==typeof s)for(e=s.call(e),c=0;!(a=e.next()).done;)l+=R(a=a.value,s=t+F(a,c++),n,r);else if("object"===a)throw n=""+e,Error(j(31,"[object Object]"===n?"object with keys {"+Object.keys(e).join(", ")+"}":n,""));return l}function I(e,t,n){return null==e?0:R(e,"",t,n)}function F(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,(function(e){return t[e]}))}(e.key):t.toString(36)}function $(e,t){e.func.call(e.context,t,e.count++)}function D(e,t,n){var r=e.result,a=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?z(e,r,n,(function(e){return e})):null!=e&&(x(e)&&(e=function(e,t){return{$$typeof:o,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(e,a+(!e.key||t&&t.key===e.key?"":(""+e.key).replace(T,"$&/")+"/")+n)),r.push(e))}function z(e,t,n,r,a){var o="";null!=n&&(o=(""+n).replace(T,"$&/")+"/"),I(e,D,t=A(t,o,r,a)),E(t)}var M={current:null};function L(){var e=M.current;if(null===e)throw Error(j(321));return e}var B={ReactCurrentDispatcher:M,ReactCurrentBatchConfig:{suspense:null},ReactCurrentOwner:k,IsSomeRendererActing:{current:!1},assign:r};t.Children={map:function(e,t,n){if(null==e)return e;var r=[];return z(e,r,null,t,n),r},forEach:function(e,t,n){if(null==e)return e;I(e,$,t=A(null,null,t,n)),E(t)},count:function(e){return I(e,(function(){return null}),null)},toArray:function(e){var t=[];return z(e,t,null,(function(e){return e})),t},only:function(e){if(!x(e))throw Error(j(143));return e}},t.Component=g,t.Fragment=l,t.Profiler=s,t.PureComponent=N,t.StrictMode=c,t.Suspense=f,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=B,t.cloneElement=function(e,t,n){if(null==e)throw Error(j(267,e));var a=r({},e.props),i=e.key,l=e.ref,c=e._owner;if(null!=t){if(void 0!==t.ref&&(l=t.ref,c=k.current),void 0!==t.key&&(i=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(b in t)_.call(t,b)&&!C.hasOwnProperty(b)&&(a[b]=void 0===t[b]&&void 0!==s?s[b]:t[b])}var b=arguments.length-2;if(1===b)a.children=n;else if(1<b){s=Array(b);for(var u=0;u<b;u++)s[u]=arguments[u+2];a.children=s}return{$$typeof:o,type:e.type,key:i,ref:l,props:a,_owner:c}},t.createContext=function(e,t){return void 0===t&&(t=null),(e={$$typeof:u,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:b,_context:e},e.Consumer=e},t.createElement=S,t.createFactory=function(e){var t=S.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:p,render:e}},t.isValidElement=x,t.lazy=function(e){return{$$typeof:m,_ctor:e,_status:-1,_result:null}},t.memo=function(e,t){return{$$typeof:d,type:e,compare:void 0===t?null:t}},t.useCallback=function(e,t){return L().useCallback(e,t)},t.useContext=function(e,t){return L().useContext(e,t)},t.useDebugValue=function(){},t.useEffect=function(e,t){return L().useEffect(e,t)},t.useImperativeHandle=function(e,t,n){return L().useImperativeHandle(e,t,n)},t.useLayoutEffect=function(e,t){return L().useLayoutEffect(e,t)},t.useMemo=function(e,t){return L().useMemo(e,t)},t.useReducer=function(e,t,n){return L().useReducer(e,t,n)},t.useRef=function(e){return L().useRef(e)},t.useState=function(e){return L().useState(e)},t.version="16.14.0"}}]);