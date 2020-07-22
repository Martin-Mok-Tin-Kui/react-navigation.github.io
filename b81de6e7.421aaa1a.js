(window.webpackJsonp=window.webpackJsonp||[]).push([[268],{405:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return s}));var a=n(2),i=n(9),r=(n(0),n(504)),o={id:"stack-actions",title:"StackActions reference",sidebar_label:"StackActions"},c={id:"version-2.x/stack-actions",isDocsHomePage:!1,title:"StackActions reference",description:"StackActions is an object containing methods for generating actions specific to stack-based navigators. Its methods expand upon the actions available in NavigationActions.",source:"@site/versioned_docs/version-2.x/stack-actions.md",permalink:"/docs/2.x/stack-actions",editUrl:"https://github.com/react-navigation/react-navigation.github.io/edit/source/versioned_docs/version-2.x/stack-actions.md",version:"2.x",sidebar_label:"StackActions",sidebar:"version-2.x-api",previous:{title:"NavigationActions reference",permalink:"/docs/2.x/navigation-actions"},next:{title:"DrawerActions reference",permalink:"/docs/2.x/drawer-actions"},latestVersionMainDocPermalink:"/docs/getting-started"},p=[{value:"reset",id:"reset",children:[]},{value:"replace",id:"replace",children:[]},{value:"push",id:"push",children:[]},{value:"pop",id:"pop",children:[]},{value:"popToTop",id:"poptotop",children:[]}],l={rightToc:p};function s(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"StackActions")," is an object containing methods for generating actions specific to stack-based navigators. Its methods expand upon the actions available in ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/2.x/navigation-actions"}),Object(r.b)("inlineCode",{parentName:"a"},"NavigationActions")),"."),Object(r.b)("p",null,"The following actions are supported:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"#reset"}),"Reset")," - Replace current state with a new state"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"#replace"}),"Replace")," - Replace a route at a given key with another route"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"#push"}),"Push")," - Add a route on the top of the stack, and navigate forward to it"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"#pop"}),"Pop")," - Navigate back to previous routes"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"#poptotop"}),"PopToTop")," - Navigate to the top route of the stack, dismissing all other routes")),Object(r.b)("h3",{id:"reset"},"reset"),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"reset")," action wipes the whole navigation state and replaces it with the result of several actions."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"index")," - ",Object(r.b)("em",{parentName:"li"},"number")," - required - Index of the active route on ",Object(r.b)("inlineCode",{parentName:"li"},"routes")," array in navigation ",Object(r.b)("inlineCode",{parentName:"li"},"state"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"actions")," - ",Object(r.b)("em",{parentName:"li"},"array")," - required - Array of Navigation Actions that will replace the navigation state."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"key")," - ",Object(r.b)("em",{parentName:"li"},"string or null")," - optional - If set, the navigator with the given key will reset. If null, the root navigator will reset.")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"import { StackActions, NavigationActions } from 'react-navigation';\n\nconst resetAction = StackActions.reset({\n  index: 0,\n  actions: [NavigationActions.navigate({ routeName: 'Profile' })],\n});\nthis.props.navigation.dispatch(resetAction);\n")),Object(r.b)("h4",{id:"how-to-use-the-index-parameter"},"How to use the ",Object(r.b)("inlineCode",{parentName:"h4"},"index")," parameter"),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"index")," param is used to specify the current active route."),Object(r.b)("p",null,"eg: given a basic stack navigation with two routes ",Object(r.b)("inlineCode",{parentName:"p"},"Profile")," and ",Object(r.b)("inlineCode",{parentName:"p"},"Settings"),".\nTo reset the state to a point where the active screen was ",Object(r.b)("inlineCode",{parentName:"p"},"Settings")," but have it stacked on top of a ",Object(r.b)("inlineCode",{parentName:"p"},"Profile")," screen, you would do the following:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"import { StackActions, NavigationActions } from 'react-navigation';\n\nconst resetAction = StackActions.reset({\n  index: 1,\n  actions: [\n    NavigationActions.navigate({ routeName: 'Profile' }),\n    NavigationActions.navigate({ routeName: 'Settings' }),\n  ],\n});\nthis.props.navigation.dispatch(resetAction);\n")),Object(r.b)("h3",{id:"replace"},"replace"),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"replace")," action replaces the route at the given key with another route."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"key")," - ",Object(r.b)("em",{parentName:"li"},"string")," - Key of the route to replace. If this is not defined, the most recent route will be replaced."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"newKey")," - ",Object(r.b)("em",{parentName:"li"},"string")," - Key to use for the replacement route. Generated automatically if not provided."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"routeName")," - ",Object(r.b)("em",{parentName:"li"},"string")," - ",Object(r.b)("inlineCode",{parentName:"li"},"routeName")," to use for replacement route."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"params")," - ",Object(r.b)("em",{parentName:"li"},"object")," - Parameters to pass in to the replacement route."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"action")," - ",Object(r.b)("em",{parentName:"li"},"object")," - Optional sub-action."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"immediate"),Object(r.b)("em",{parentName:"li"}," - ",Object(r.b)("em",{parentName:"em"},"boolean")," - "),"Currently has no effect, this is a placeholder for when stack navigator supports animated replace (it currently does not).")),Object(r.b)("h3",{id:"push"},"push"),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"push")," action adds a route on top of the stack and navigates forward to it. This differs from ",Object(r.b)("inlineCode",{parentName:"p"},"navigate")," in that ",Object(r.b)("inlineCode",{parentName:"p"},"navigate")," will pop back to earlier in the stack if a route of the given name is already present there. ",Object(r.b)("inlineCode",{parentName:"p"},"push")," will always add on top, so a route can be present multiple times."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"routeName")," - ",Object(r.b)("em",{parentName:"li"},"string")," - ",Object(r.b)("inlineCode",{parentName:"li"},"routeName")," to push onto the stack."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"params")," - ",Object(r.b)("em",{parentName:"li"},"object")," - Screen params to merge into the destination route (found in the pushed screen through ",Object(r.b)("inlineCode",{parentName:"li"},"this.props.navigation.state.params"),")."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"action")," - (advanced) The sub-action to run in the child router, if the screen is a navigator.")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"import { StackActions } from 'react-navigation';\n\nconst pushAction = StackActions.push({\n  routeName: 'Profile',\n  params: {\n    myUserId: 9,\n  },\n});\n\nthis.props.navigation.dispatch(pushAction);\n")),Object(r.b)("h3",{id:"pop"},"pop"),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"pop")," action takes you back to a previous screen in the stack. The ",Object(r.b)("inlineCode",{parentName:"p"},"n")," param allows you to specify how many screens to pop back by."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"n")," - ",Object(r.b)("em",{parentName:"li"},"number")," - The number of screens to pop back by.")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"import { StackActions } from 'react-navigation';\n\nconst popAction = StackActions.pop({\n  n: 1,\n});\n\nthis.props.navigation.dispatch(popAction);\n")),Object(r.b)("h3",{id:"poptotop"},"popToTop"),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"popToTop")," action takes you back to the first screen in the stack, dismissing all the others. It's functionally identical to ",Object(r.b)("inlineCode",{parentName:"p"},"StackActions.pop({n: currentIndex})"),"."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"import { StackActions } from 'react-navigation';\n\nthis.props.navigation.dispatch(StackActions.popToTop());\n")))}s.isMDXComponent=!0},504:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return d}));var a=n(0),i=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=i.a.createContext({}),s=function(e){var t=i.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=s(e.components);return i.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},m=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),b=s(n),m=a,d=b["".concat(o,".").concat(m)]||b[m]||u[m]||r;return n?i.a.createElement(d,c(c({ref:t},l),{},{components:n})):i.a.createElement(d,c({ref:t},l))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=m;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var l=2;l<r;l++)o[l]=n[l];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);