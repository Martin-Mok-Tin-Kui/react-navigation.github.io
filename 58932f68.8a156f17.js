(window.webpackJsonp=window.webpackJsonp||[]).push([[138],{273:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return b}));var a=n(2),i=n(9),o=(n(0),n(504)),r={id:"navigation-lifecycle",title:"Navigation lifecycle",sidebar_label:"Navigation lifecycle"},c={id:"version-4.x/navigation-lifecycle",isDocsHomePage:!1,title:"Navigation lifecycle",description:"In the previous section, we worked with a stack navigator that has two screens (Home and Details) and learned how to use this.props.navigation.navigate('RouteName') to navigate between the routes.",source:"@site/versioned_docs/version-4.x/navigation-lifecycle.md",permalink:"/docs/4.x/navigation-lifecycle",editUrl:"https://github.com/react-navigation/react-navigation.github.io/edit/source/versioned_docs/version-4.x/navigation-lifecycle.md",version:"4.x",sidebar_label:"Navigation lifecycle",sidebar:"version-4.x-docs",previous:{title:"Moving between screens",permalink:"/docs/4.x/navigating"},next:{title:"Passing parameters to routes",permalink:"/docs/4.x/params"},latestVersionMainDocPermalink:"/docs/getting-started"},l=[{value:"Example scenario",id:"example-scenario",children:[]},{value:"Subscribing to lifecycle events",id:"subscribing-to-lifecycle-events",children:[]},{value:"Summary",id:"summary",children:[]}],s={rightToc:l};function b(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"In the previous section, we worked with a stack navigator that has two screens (",Object(o.b)("inlineCode",{parentName:"p"},"Home")," and ",Object(o.b)("inlineCode",{parentName:"p"},"Details"),") and learned how to use ",Object(o.b)("inlineCode",{parentName:"p"},"this.props.navigation.navigate('RouteName')")," to navigate between the routes."),Object(o.b)("p",null,"An important question in this context is: what happens with ",Object(o.b)("inlineCode",{parentName:"p"},"Home")," when we navigate away from it, or when we come back to it? How does a route find out that a user is leaving it or coming back to it?"),Object(o.b)("p",null,"Coming to React Navigation from the web, you may assume that when user navigates from route ",Object(o.b)("inlineCode",{parentName:"p"},"A")," to route ",Object(o.b)("inlineCode",{parentName:"p"},"B"),", ",Object(o.b)("inlineCode",{parentName:"p"},"A")," will unmount and its ",Object(o.b)("inlineCode",{parentName:"p"},"componentWillUnmount")," will be called. You may also expect ",Object(o.b)("inlineCode",{parentName:"p"},"A")," will remount again when user comes back to it. While these React lifecycle methods are still valid and are used in React Navigation, their usage differs from the web. This is driven by more complex needs of mobile navigation."),Object(o.b)("h2",{id:"example-scenario"},"Example scenario"),Object(o.b)("p",null,"Consider a stack navigator with screens ",Object(o.b)("inlineCode",{parentName:"p"},"A")," and ",Object(o.b)("inlineCode",{parentName:"p"},"B"),". After navigating to ",Object(o.b)("inlineCode",{parentName:"p"},"A"),", its ",Object(o.b)("inlineCode",{parentName:"p"},"componentDidMount")," is called. When pushing ",Object(o.b)("inlineCode",{parentName:"p"},"B"),", its ",Object(o.b)("inlineCode",{parentName:"p"},"componentDidMount")," is also called, but ",Object(o.b)("inlineCode",{parentName:"p"},"A")," remains mounted on the stack and its ",Object(o.b)("inlineCode",{parentName:"p"},"componentWillUnmount")," is therefore not called."),Object(o.b)("p",null,"When going back from ",Object(o.b)("inlineCode",{parentName:"p"},"B")," to ",Object(o.b)("inlineCode",{parentName:"p"},"A"),", ",Object(o.b)("inlineCode",{parentName:"p"},"componentWillUnmount")," of ",Object(o.b)("inlineCode",{parentName:"p"},"B")," is called, but ",Object(o.b)("inlineCode",{parentName:"p"},"componentDidMount")," of ",Object(o.b)("inlineCode",{parentName:"p"},"A")," is not because ",Object(o.b)("inlineCode",{parentName:"p"},"A")," remained mounted the whole time."),Object(o.b)("h2",{id:"subscribing-to-lifecycle-events"},"Subscribing to lifecycle events"),Object(o.b)("p",null,'Now that we understand how React lifecycle methods work in React Navigation, let\'s answer the question we asked at the beginning: "How do we find out that a user is leaving it or coming back to it?"'),Object(o.b)("p",null,"React Navigation emits events to screen components that subscribe to them. There are four different events that you can subscribe to: ",Object(o.b)("inlineCode",{parentName:"p"},"willFocus"),", ",Object(o.b)("inlineCode",{parentName:"p"},"willBlur"),", ",Object(o.b)("inlineCode",{parentName:"p"},"didFocus")," and ",Object(o.b)("inlineCode",{parentName:"p"},"didBlur"),". Read more about them in the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"navigation-prop.html#addlistener-subscribe-to-updates-to-navigation-lifecycle"}),"API reference"),"."),Object(o.b)("p",null,"Many of your use cases may be covered with the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/4.x/with-navigation-focus"}),Object(o.b)("inlineCode",{parentName:"a"},"withNavigationFocus")," higher-order-component"),", the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/4.x/navigation-events"}),Object(o.b)("inlineCode",{parentName:"a"},"<NavigationEvents />")," component"),", or the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/react-navigation/hooks#usefocusstate"}),"useFocusState hook"),"."),Object(o.b)("h2",{id:"summary"},"Summary"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"While Reacts lifecycle methods are still valid, React Navigation adds more lifecycle events that you can subscribe to through the ",Object(o.b)("inlineCode",{parentName:"li"},"navigation")," prop."),Object(o.b)("li",{parentName:"ul"},"You may also use the ",Object(o.b)("inlineCode",{parentName:"li"},"withNavigationFocus")," HOC or ",Object(o.b)("inlineCode",{parentName:"li"},"<NavigationEvents />")," component to react to lifecycle changes.")))}b.isMDXComponent=!0},504:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var a=n(0),i=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=i.a.createContext({}),b=function(e){var t=i.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=b(e.components);return i.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},m=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,r=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=b(n),m=a,d=p["".concat(r,".").concat(m)]||p[m]||u[m]||o;return n?i.a.createElement(d,c(c({ref:t},s),{},{components:n})):i.a.createElement(d,c({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,r[1]=c;for(var s=2;s<o;s++)r[s]=n[s];return i.a.createElement.apply(null,r)}return i.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);