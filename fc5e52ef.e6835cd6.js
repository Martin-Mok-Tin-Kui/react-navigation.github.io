(window.webpackJsonp=window.webpackJsonp||[]).push([[357],{494:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return s})),r.d(t,"default",(function(){return p}));var n=r(2),a=r(9),o=(r(0),r(504)),i={id:"drawer-actions",title:"DrawerActions reference",sidebar_label:"DrawerActions"},c={id:"version-2.x/drawer-actions",isDocsHomePage:!1,title:"DrawerActions reference",description:"DrawerActions is an object containing methods for generating actions specific to drawer-based navigators. Its methods expand upon the actions available in NavigationActions.",source:"@site/versioned_docs/version-2.x/drawer-actions.md",permalink:"/docs/2.x/drawer-actions",editUrl:"https://github.com/react-navigation/react-navigation.github.io/edit/source/versioned_docs/version-2.x/drawer-actions.md",version:"2.x",sidebar_label:"DrawerActions",sidebar:"version-2.x-api",previous:{title:"StackActions reference",permalink:"/docs/2.x/stack-actions"},next:{title:"createStackNavigator",permalink:"/docs/2.x/stack-navigator"},latestVersionMainDocPermalink:"/docs/getting-started"},s=[{value:"Usage",id:"usage",children:[]}],l={rightToc:s};function p(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"DrawerActions")," is an object containing methods for generating actions specific to drawer-based navigators. Its methods expand upon the actions available in ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/2.x/navigation-actions"}),Object(o.b)("inlineCode",{parentName:"a"},"NavigationActions")),"."),Object(o.b)("p",null,"The following actions are supported:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"#openDrawer"}),"openDrawer")," - open the drawer"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"#closeDrawer"}),"closeDrawer")," - close the drawer"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"#toggleDrawer"}),"toggleDrawer")," - toggle the state, ie. switch from closed to open and vice versa")),Object(o.b)("h3",{id:"usage"},"Usage"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"import { DrawerActions } from 'react-navigation-drawer';\n\nthis.props.navigation.dispatch(DrawerActions.toggleDrawer())\n")))}p.isMDXComponent=!0},504:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return f}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),p=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=p(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(r),d=n,f=u["".concat(i,".").concat(d)]||u[d]||b[d]||o;return r?a.a.createElement(f,c(c({ref:t},l),{},{components:r})):a.a.createElement(f,c({ref:t},l))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var l=2;l<o;l++)i[l]=r[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);