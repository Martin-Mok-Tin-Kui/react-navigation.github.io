(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{152:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return c})),a.d(t,"rightToc",(function(){return s})),a.d(t,"default",(function(){return p}));var n=a(2),o=a(9),r=(a(0),a(504)),i={title:"2.0 release candidate",author:"Brent Vatne",author_url:"https://twitter.com/notbrent",author_title:"Core Team",author_image_url:"https://avatars0.githubusercontent.com/u/90494?s=200&v=4",tags:["release","announcement"]},c={permalink:"/blog/2018/04/06/react-navigation-2.0-rc",source:"@site/blog/2018-04-06-react-navigation-2.0-rc.md",description:"Exactly two months after the release of React Navigation 1.0, we are close to another major version release. We\u2019d like to invite developers that use the library to give the release candidate a try in your app and let us know if you encounter any issues.",date:"2018-04-06T00:00:00.000Z",tags:[{label:"release",permalink:"/blog/tags/release"},{label:"announcement",permalink:"/blog/tags/announcement"}],title:"2.0 release candidate",readingTime:4.875,truncated:!0,prevItem:{title:"React Navigation 2.0",permalink:"/blog/2018/05/07/react-navigation-2.0"},nextItem:{title:"React Navigation 1.0 (goodbye, beta!)",permalink:"/blog/2018/02/06/react-navigation-1.0"}},s=[{value:"Breaking changes",id:"breaking-changes",children:[{value:"<code>navigate(routeName)</code> in StackNavigator is \u201cless pushy\u201d",id:"navigateroutename-in-stacknavigator-is-less-pushy",children:[]},{value:"<code>push</code> now propagates between routers like <code>navigate</code>",id:"push-now-propagates-between-routers-like-navigate",children:[]},{value:"Shallow navigation options",id:"shallow-navigation-options",children:[]},{value:"New API for creating navigators",id:"new-api-for-creating-navigators",children:[]},{value:"Drawer routes have been replaced with actions",id:"drawer-routes-have-been-replaced-with-actions",children:[]},{value:"Navigation actions API overhaul",id:"navigation-actions-api-overhaul",children:[]}]},{value:"Deprecations",id:"deprecations",children:[{value:"XNavigator is now named createXNavigator",id:"xnavigator-is-now-named-createxnavigator",children:[]},{value:"<code>TabNavigator</code> has been split up into more focused navigators",id:"tabnavigator-has-been-split-up-into-more-focused-navigators",children:[]}]},{value:"New feature highlights",id:"new-feature-highlights",children:[]}],l={rightToc:s};function p(e){var t=e.components,a=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Exactly two months after the release of React Navigation 1.0, we are close to another major version release. We\u2019d like to invite developers that use the library to give the release candidate a try in your app and let us know if you encounter any issues."),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),"yarn add react-navigation@^2.0.0-rc.1\n")),Object(r.b)("p",null,"The documentation for 2.0 is available at ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://reactnavigation.org/"}),"https://reactnavigation.org/")),Object(r.b)("p",null,"We\u2019re bumping the major version because some of the changes in this release are backwards incompatible. That said, this should be a fairly easy upgrade. We are improving React Navigation incrementally because we don't want to leave developers feeling stranded in an old version. If you use React Navigation in a conventional way and don't have any custom navigators, I can't imagine this update would take you more than an hour."),Object(r.b)("p",null,"This blog post is not a comprehensive changelog - that will come with the 2.0 proper release; the following is a list of the breaking changes, suggestions for how you can update your app to accommodate them, notice of deprecations, and some of my favourite new features."),Object(r.b)("h2",{id:"breaking-changes"},"Breaking changes"),Object(r.b)("h3",{id:"navigateroutename-in-stacknavigator-is-less-pushy"},Object(r.b)("inlineCode",{parentName:"h3"},"navigate(routeName)")," in StackNavigator is \u201cless pushy\u201d"),Object(r.b)("p",null,"In 1.x, ",Object(r.b)("inlineCode",{parentName:"p"},"navigate(routeName)")," and ",Object(r.b)("inlineCode",{parentName:"p"},"push(routeName)")," were very similar: every time you called ",Object(r.b)("inlineCode",{parentName:"p"},"navigate(routeName)")," it would push a new route to the stack, regardless. Now ",Object(r.b)("inlineCode",{parentName:"p"},"navigate(routeName)")," will first try to find an existing instance of the route and jump to that if it exists, otherwise it will push the route to the stack."),Object(r.b)("p",null,"To update your app for this change you may need to change ",Object(r.b)("inlineCode",{parentName:"p"},"navigate")," to ",Object(r.b)("inlineCode",{parentName:"p"},"push")," in places where you would like to push a new route every time. Alternatively, you could consider using a ",Object(r.b)("inlineCode",{parentName:"p"},"key"),": ",Object(r.b)("inlineCode",{parentName:"p"},"navigate({routeName: \u2018MyRoute\u2019, key: data.uniqueId, params: data})"),". ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/en/navigation-key.html"}),"Read more about navigation with keys"),"."),Object(r.b)("p",null,"Read more about this in ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/react-navigation/rfcs/blob/master/text/0004-less-pushy-navigate.md"}),"RFC 4"),"."),Object(r.b)("h3",{id:"push-now-propagates-between-routers-like-navigate"},Object(r.b)("inlineCode",{parentName:"h3"},"push")," now propagates between routers like ",Object(r.b)("inlineCode",{parentName:"h3"},"navigate")),Object(r.b)("p",null,"Previously, ",Object(r.b)("inlineCode",{parentName:"p"},"push")," only applied to the deepest active stack router. This meant that if you had Stack A > Stack B and Stack B fired ",Object(r.b)("inlineCode",{parentName:"p"},"push(\u2018MyRoute\u2019)"),", even if Stack B does not have a route with the name ",Object(r.b)("inlineCode",{parentName:"p"},"\u2019MyRoute\u2019")," and Stack A does, the screen would not be pushed. We made this change to accommodate for the \u201cless pushy\u201d navigate behavior."),Object(r.b)("p",null,"When updating your app, you may want to double check where you use ",Object(r.b)("inlineCode",{parentName:"p"},"push"),"to ensure that this doesn\u2019t impact the expected behavior of your app."),Object(r.b)("h3",{id:"shallow-navigation-options"},"Shallow navigation options"),Object(r.b)("p",null,"A common source of confusion for developers working with React Navigation has been around ",Object(r.b)("inlineCode",{parentName:"p"},"navigationOptions")," resolution. For example, if you have a stack navigator with a header, and a drawer inside of that stack, then in some circumstances the title of the stack would change every time you change screens in the drawer. This is because the stack navigator would crawl into child navigators and pull ",Object(r.b)("inlineCode",{parentName:"p"},"navigationOptions")," off of the deepest active screen. As of 2.0, this no longer happens: navigators will only look at their direct children for ",Object(r.b)("inlineCode",{parentName:"p"},"navigationOptions"),". Read more about this in ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/react-navigation/rfcs/blob/master/text/0005-shallow-navigation-options.md"}),"RFC 5"),"."),Object(r.b)("h3",{id:"new-api-for-creating-navigators"},"New API for creating navigators"),Object(r.b)("p",null,"This does not impact most users, but if you have any custom navigators in your app, read on. Read more about the changes in ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/react-navigation/rfcs/blob/master/text/0002-navigator-view-api.md"}),"RFC 2"),". Also read the ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://reactnavigation.org/docs/en/custom-navigators.html"}),"custom navigators documentation"),"."),Object(r.b)("h3",{id:"drawer-routes-have-been-replaced-with-actions"},"Drawer routes have been replaced with actions"),Object(r.b)("p",null,"Rather than opening a drawer with ",Object(r.b)("inlineCode",{parentName:"p"},"navigation.navigate(\u2018DrawerOpen\u2019)"),", you can now call ",Object(r.b)("inlineCode",{parentName:"p"},"navigation.openDrawer()"),". Other methods are ",Object(r.b)("inlineCode",{parentName:"p"},"closeDrawer()")," and ",Object(r.b)("inlineCode",{parentName:"p"},"toggleDrawer()"),"."),Object(r.b)("h3",{id:"navigation-actions-api-overhaul"},"Navigation actions API overhaul"),Object(r.b)("p",null,"In 1.x, functions on the ",Object(r.b)("inlineCode",{parentName:"p"},"navigation")," were not contextual - they would be the same regardless of whether your screen was inside of a drawer, a stack, a tab navigator, etc. In 2.0 the functions that are available to you on the ",Object(r.b)("inlineCode",{parentName:"p"},"navigation")," prop depend on the navigators that it corresponds to. If your screen is inside of both a stack and a drawer navigator, you will have helpers for both -- ",Object(r.b)("inlineCode",{parentName:"p"},"push")," and ",Object(r.b)("inlineCode",{parentName:"p"},"openDrawer"),", for example."),Object(r.b)("p",null,"Given that we only exposed generic helpers (",Object(r.b)("inlineCode",{parentName:"p"},"navigate"),", ",Object(r.b)("inlineCode",{parentName:"p"},"goBack"),") and helpers specific to the stack in 1.x, this would only impact you if you attempted to use the stack helpers from outside of a stack. For example, if you had a tab navigator with a stack in tab A and just a plain screen in tab B, then tried to ",Object(r.b)("inlineCode",{parentName:"p"},"push")," a route from the screen in tab B, ",Object(r.b)("inlineCode",{parentName:"p"},"push")," would not be available. Keep this in mind when you update your app if it follows this type of structure."),Object(r.b)("p",null,"One of the big improvements you get from this is that you can now add your own helpers to the ",Object(r.b)("inlineCode",{parentName:"p"},"navigation")," prop!  Read more in ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/react-navigation/rfcs/blob/master/text/0006-action-creators.md"}),"RFC 6"),"."),Object(r.b)("h2",{id:"deprecations"},"Deprecations"),Object(r.b)("p",null,"The following APIs are deprecated and will be removed in 3.0."),Object(r.b)("h3",{id:"xnavigator-is-now-named-createxnavigator"},"XNavigator is now named createXNavigator"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),"import { createStackNavigator } from \u2018react-navigation\u2019;\ncreateStackNavigator({routeName: Screen});\n")),Object(r.b)("p",null,"This change was made to improve the ease of learning and understanding the library. The navigator constructors are functions that return components (HOCs), and that was not previously very well communicated by the name."),Object(r.b)("h3",{id:"tabnavigator-has-been-split-up-into-more-focused-navigators"},Object(r.b)("inlineCode",{parentName:"h3"},"TabNavigator")," has been split up into more focused navigators"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"TabNavigator")," (now ",Object(r.b)("inlineCode",{parentName:"p"},"createTabNavigator")," as per above) was a frequent source of confusion for users because it would use a bottom tab bar on iOS and a top tab bar on Android by default. Additionally, some of the configuration properties applied to the bottom tab bar, and others to the top tab bar. The equivalent components are now: ",Object(r.b)("inlineCode",{parentName:"p"},"createBottomTabNavigator")," and ",Object(r.b)("inlineCode",{parentName:"p"},"createMaterialTopTabNavigator"),". We\u2019ve also introduced a new type of tab navigator, ",Object(r.b)("inlineCode",{parentName:"p"},"createMaterialBottomTabNavigator")," - a material design styled bottom tab bar based navigator from ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/callstack/react-native-paper"}),"react-native-paper"),". Thank you ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"http://github.com/satya164"}),"satya164")," for your great work on this!"),Object(r.b)("h2",{id:"new-feature-highlights"},"New feature highlights"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"State persistence - automatically save state and reload it when the app restarts. See ",Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://reactnavigation.org/docs/en/state-persistence.html"}),"https://reactnavigation.org/docs/en/state-persistence.html")),Object(r.b)("li",{parentName:"ul"},"Transitions between screens in stack with headers and without headers now animates as expected on iOS. ",Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/react-navigation/react-navigation/pull/3821"}),"https://github.com/react-navigation/react-navigation/pull/3821"),". Thanks ",Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/skevy"}),"skevy"),"!"),Object(r.b)("li",{parentName:"ul"},"As mentioned above, ",Object(r.b)("inlineCode",{parentName:"li"},"createMaterialBottomNavigator")," is a new navigator type that provides the material design bottom tab bar pattern.")))}p.isMDXComponent=!0},504:function(e,t,a){"use strict";a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return d}));var n=a(0),o=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=o.a.createContext({}),p=function(e){var t=o.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},b=function(e){var t=p(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},h=o.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),b=p(a),h=n,d=b["".concat(i,".").concat(h)]||b[h]||u[h]||r;return a?o.a.createElement(d,c(c({ref:t},l),{},{components:a})):o.a.createElement(d,c({ref:t},l))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,i=new Array(r);i[0]=h;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var l=2;l<r;l++)i[l]=a[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,a)}h.displayName="MDXCreateElement"}}]);