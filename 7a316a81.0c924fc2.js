(window.webpackJsonp=window.webpackJsonp||[]).push([[183],{322:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return u}));var r=n(2),a=n(9),o=(n(0),n(504)),i={id:"supported-react-native-versions",title:"Supported React Native versions",sidebar_label:"Supported React Native versions"},c={id:"version-4.x/supported-react-native-versions",isDocsHomePage:!1,title:"Supported React Native versions",description:"Since react-navigation@3.x depends on the new React.createContext API, which was added in react@16.3.x, we require react-native@^0.54.x. Also, react-navigation@3.x needs react-native-gesture-handler to work, so you will need to make sure that the version of react-native-gesture-handler you are using matches your current react-native version.",source:"@site/versioned_docs/version-4.x/supported-react-native-versions.md",permalink:"/docs/4.x/supported-react-native-versions",editUrl:"https://github.com/react-navigation/react-navigation.github.io/edit/source/versioned_docs/version-4.x/supported-react-native-versions.md",version:"4.x",sidebar_label:"Supported React Native versions",sidebar:"version-4.x-docs",previous:{title:"Navigation views",permalink:"/docs/4.x/navigation-views"},next:{title:"Community-developed Navigators and Libraries",permalink:"/docs/4.x/community-libraries-and-navigators"},latestVersionMainDocPermalink:"/docs/getting-started"},s=[],p={rightToc:s};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Since ",Object(o.b)("inlineCode",{parentName:"p"},"react-navigation@3.x")," depends on the new ",Object(o.b)("inlineCode",{parentName:"p"},"React.createContext")," API, which was added in ",Object(o.b)("inlineCode",{parentName:"p"},"react@16.3.x"),", we require ",Object(o.b)("inlineCode",{parentName:"p"},"react-native@^0.54.x"),". Also, ",Object(o.b)("inlineCode",{parentName:"p"},"react-navigation@3.x")," needs ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/software-mansion/react-native-gesture-handler#react-native-support"}),"react-native-gesture-handler")," to work, so you will need to make sure that the version of ",Object(o.b)("inlineCode",{parentName:"p"},"react-native-gesture-handler")," you are using matches your current ",Object(o.b)("inlineCode",{parentName:"p"},"react-native")," version."),Object(o.b)("p",null,"If you are using ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/4.x/react-native-screens"}),"react-native-screens"),", you will need to be aware of its own supported ",Object(o.b)("inlineCode",{parentName:"p"},"react-native")," version too."),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"Please note that the statements above may not be correct for a particular ",Object(o.b)("inlineCode",{parentName:"p"},"react-native")," version. If you notice a version that is not working properly, feel free to either file an ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/react-navigation/react-navigation.github.io/issues/new"}),"issue")," or correct it in this page.")))}u.isMDXComponent=!0},504:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return b}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),u=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},l=function(e){var t=u(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},v=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),l=u(n),v=r,b=l["".concat(i,".").concat(v)]||l[v]||d[v]||o;return n?a.a.createElement(b,c(c({ref:t},p),{},{components:n})):a.a.createElement(b,c({ref:t},p))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=v;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var p=2;p<o;p++)i[p]=n[p];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}v.displayName="MDXCreateElement"}}]);