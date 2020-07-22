(window.webpackJsonp=window.webpackJsonp||[]).push([[166],{305:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return p}));var r=n(2),a=n(9),o=(n(0),n(504)),i={id:"screen-tracking",title:"Screen tracking for analytics",sidebar_label:"Screen tracking for analytics"},c={id:"version-4.x/screen-tracking",isDocsHomePage:!1,title:"Screen tracking for analytics",description:"This example shows how to do screen tracking and send to Google Analytics. The approach can be adapted to any other analytics SDK.",source:"@site/versioned_docs/version-4.x/screen-tracking.md",permalink:"/docs/4.x/screen-tracking",editUrl:"https://github.com/react-navigation/react-navigation.github.io/edit/source/versioned_docs/version-4.x/screen-tracking.md",version:"4.x",sidebar_label:"Screen tracking for analytics",sidebar:"version-4.x-docs",previous:{title:"Deep linking",permalink:"/docs/4.x/deep-linking"},next:{title:"Themes",permalink:"/docs/4.x/themes"},latestVersionMainDocPermalink:"/docs/getting-started"},s=[{value:"Listening to State Changes",id:"listening-to-state-changes",children:[]}],u={rightToc:s};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"This example shows how to do screen tracking and send to Google Analytics. The approach can be adapted to any other analytics SDK."),Object(o.b)("h2",{id:"listening-to-state-changes"},"Listening to State Changes"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"import { createAppContainer, createStackNavigator } from 'react-navigation';\nimport analytics from '@react-native-firebase/analytics';\n\n// gets the current screen from navigation state\nfunction getActiveRouteName(navigationState) {\n  if (!navigationState) {\n    return null;\n  }\n  const route = navigationState.routes[navigationState.index];\n  // dive into nested navigators\n  if (route.routes) {\n    return getActiveRouteName(route);\n  }\n  return route.routeName;\n}\n\nconst AppNavigator = createStackNavigator(AppRouteConfigs);\nconst AppContainer = createAppContainer(AppNavigator);\n\nexport default () => (\n  <AppContainer\n    onNavigationStateChange={(prevState, currentState, action) => {\n      const currentRouteName = getActiveRouteName(currentState);\n      const previousRouteName = getActiveRouteName(prevState);\n\n      if (previousRouteName !== currentRouteName) {\n        // the line below uses the @react-native-firebase/analytics tracker\n        // change the tracker here to use other Mobile analytics SDK.\n        analytics().setCurrentScreen(currentRouteName, currentRouteName);\n      }\n    }}\n  />\n);\n")))}p.isMDXComponent=!0},504:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return f}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),p=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},l=function(e){var t=p(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},g={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),l=p(n),d=r,f=l["".concat(i,".").concat(d)]||l[d]||g[d]||o;return n?a.a.createElement(f,c(c({ref:t},u),{},{components:n})):a.a.createElement(f,c({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var u=2;u<o;u++)i[u]=n[u];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);