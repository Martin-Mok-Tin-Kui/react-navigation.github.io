(window.webpackJsonp=window.webpackJsonp||[]).push([[146],{281:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return u}));var a=n(2),o=n(9),r=(n(0),n(504)),i={id:"custom-routers",title:"Custom routers",sidebar_label:"Custom routers"},s={id:"version-1.x/custom-routers",isDocsHomePage:!1,title:"Custom routers",description:"You can make your own router by building an object with the following functions:",source:"@site/versioned_docs/version-1.x/custom-routers.md",permalink:"/docs/1.x/custom-routers",editUrl:"https://github.com/react-navigation/react-navigation.github.io/edit/source/versioned_docs/version-1.x/custom-routers.md",version:"1.x",sidebar_label:"Custom routers",sidebar:"version-1.x/docs",previous:{title:"Custom navigators",permalink:"/docs/1.x/custom-navigators"},next:{title:"Navigation views",permalink:"/docs/1.x/navigation-views"},latestVersionMainDocPermalink:"/docs/getting-started"},c=[{value:"<code>getStateForAction(action, state)</code>",id:"getstateforactionaction-state",children:[]},{value:"<code>getComponentForRouteName(routeName)</code>",id:"getcomponentforroutenameroutename",children:[]},{value:"<code>getComponentForState(state)</code>",id:"getcomponentforstatestate",children:[]},{value:"<code>getActionForPathAndParams(path, params)</code>",id:"getactionforpathandparamspath-params",children:[]},{value:"<code>getPathAndParamsForState(state)</code>",id:"getpathandparamsforstatestate",children:[]},{value:"<code>getScreenOptions(navigation, screenProps)</code>",id:"getscreenoptionsnavigation-screenprops",children:[]}],p={rightToc:c};function u(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"You can make your own router by building an object with the following functions:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const MyRouter = {\n  getStateForAction: (action, state) => ({}),\n  getActionForPathAndParams: (path, params) => null,\n  getPathAndParamsForState: (state) => null,\n  getComponentForState: (state) => MyScreen,\n  getComponentForRouteName: (routeName) => MyScreen,\n};\n\n// Now, you can make a navigator by putting the router on it:\nclass MyNavigator extends React.Component {\n  static router = MyRouter;\n  render() {\n    ...\n  }\n}\n")),Object(r.b)("p",null,Object(r.b)("img",Object(a.a)({parentName:"p"},{src:"./assets/routers/routers-concept-map.png",alt:"Routers manage the relationship between URIs, actions, and navigation state"}))),Object(r.b)("h3",{id:"getstateforactionaction-state"},Object(r.b)("inlineCode",{parentName:"h3"},"getStateForAction(action, state)")),Object(r.b)("p",null,"Defines the navigation state in response to a given action. This function will be run when an action gets passed into ",Object(r.b)("inlineCode",{parentName:"p"},"props.navigation.dispatch("),", or when any of the helper functions are called, like ",Object(r.b)("inlineCode",{parentName:"p"},"navigation.navigate("),"."),Object(r.b)("p",null,"Typically this should return a navigation state, with the following form:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"{\n  index: 1, // identifies which route in the routes array is active\n  routes: [\n    {\n      // Each route needs a name to identify the type.\n      routeName: 'MyRouteName',\n\n      // A unique identifier for this route in the routes array:\n      key: 'myroute-123',\n      // (used to specify the re-ordering of routes)\n\n      // Routes can have any data, as long as key and routeName are correct\n      ...randomRouteData,\n    },\n    ...moreRoutes,\n  ]\n}\n")),Object(r.b)("p",null,"If the router has handled the action externally, or wants to swallow it without changing the navigation state, this function will return ",Object(r.b)("inlineCode",{parentName:"p"},"null"),"."),Object(r.b)("h3",{id:"getcomponentforroutenameroutename"},Object(r.b)("inlineCode",{parentName:"h3"},"getComponentForRouteName(routeName)")),Object(r.b)("p",null,"Returns the child component or navigator for the given route name."),Object(r.b)("p",null,"Say a router ",Object(r.b)("inlineCode",{parentName:"p"},"getStateForAction")," outputs a state like this:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"{\n  index: 1,\n  routes: [\n    { key: 'A', routeName: 'Foo' },\n    { key: 'B', routeName: 'Bar' },\n  ],\n}\n")),Object(r.b)("p",null,"Based on the routeNames in the state, the router is responsible for returning valid components when calling ",Object(r.b)("inlineCode",{parentName:"p"},"router.getComponentForRouteName('Foo')")," or ",Object(r.b)("inlineCode",{parentName:"p"},"router.getComponentForRouteName('Bar')"),"."),Object(r.b)("h3",{id:"getcomponentforstatestate"},Object(r.b)("inlineCode",{parentName:"h3"},"getComponentForState(state)")),Object(r.b)("p",null,"Returns the active component for a deep navigation state."),Object(r.b)("h3",{id:"getactionforpathandparamspath-params"},Object(r.b)("inlineCode",{parentName:"h3"},"getActionForPathAndParams(path, params)")),Object(r.b)("p",null,"Returns an optional navigation action that should be used when the user navigates to this path and provides optional query parameters."),Object(r.b)("h3",{id:"getpathandparamsforstatestate"},Object(r.b)("inlineCode",{parentName:"h3"},"getPathAndParamsForState(state)")),Object(r.b)("p",null,"Returns the path and params that can be put into the URL to link the user back to the same spot in the app."),Object(r.b)("p",null,"The path/params that are output from this should form an action when passed back into the router's ",Object(r.b)("inlineCode",{parentName:"p"},"getActionForPathAndParams"),". That action should take you to a similar state once passed through ",Object(r.b)("inlineCode",{parentName:"p"},"getStateForAction"),"."),Object(r.b)("h3",{id:"getscreenoptionsnavigation-screenprops"},Object(r.b)("inlineCode",{parentName:"h3"},"getScreenOptions(navigation, screenProps)")),Object(r.b)("p",null,"Used to retrieve the navigation options for a screen. Must provide the screen's current navigation prop and optionally, other props that your navigation options may need to consume."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"navigation")," - This is the navigation prop that the screen will use, where the state refers to the screen's route/state. Dispatch will trigger actions in the context of that screen."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"screenProps")," - Other props that your navigation options may need to consume"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"navigationOptions")," - The previous set of options that are default or provided by the previous configurer")),Object(r.b)("p",null,"Inside an example view, perhaps you need to fetch the configured title:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"// First, prepare a navigation prop for your child, or re-use one if already available.\nconst screenNavigation = addNavigationHelpers({\n  // In this case we use navigation.state.index because we want the title for the active route.\n  state: navigation.state.routes[navigation.state.index],\n  dispatch: navigation.dispatch,\n});\nconst options = this.props.router.getScreenOptions(screenNavigation, {});\nconst title = options.title;\n")))}u.isMDXComponent=!0},504:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return m}));var a=n(0),o=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=o.a.createContext({}),u=function(e){var t=o.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},l=function(e){var t=u(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),l=u(n),b=a,m=l["".concat(i,".").concat(b)]||l[b]||d[b]||r;return n?o.a.createElement(m,s(s({ref:t},p),{},{components:n})):o.a.createElement(m,s({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=b;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var p=2;p<r;p++)i[p]=n[p];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);