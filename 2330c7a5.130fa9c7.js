(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{193:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return c})),a.d(t,"rightToc",(function(){return l})),a.d(t,"default",(function(){return p}));var n=a(2),i=a(9),r=(a(0),a(504)),o={id:"navigation-key",title:"Using the navigation key",sidebar_label:"Using the navigation key"},c={id:"version-2.x/navigation-key",isDocsHomePage:!1,title:"Using the navigation key",description:"The key parameter comes up repeatedly across different navigation functions. Let's take a look at a summary of its use cases:",source:"@site/versioned_docs/version-2.x/navigation-key.md",permalink:"/docs/2.x/navigation-key",editUrl:"https://github.com/react-navigation/react-navigation.github.io/edit/source/versioned_docs/version-2.x/navigation-key.md",version:"2.x",sidebar_label:"Using the navigation key",sidebar:"version-2.x-docs",previous:{title:"Navigating without the navigation prop",permalink:"/docs/2.x/navigating-without-navigation-prop"},next:{title:"Deep linking",permalink:"/docs/2.x/deep-linking"},latestVersionMainDocPermalink:"/docs/getting-started"},l=[{value:"Usage with the navigate call",id:"usage-with-the-navigate-call",children:[]},{value:"Usage with reset",id:"usage-with-reset",children:[]},{value:"Usage with replace",id:"usage-with-replace",children:[]},{value:"Usage with <code>goBack</code>",id:"usage-with-goback",children:[]}],s={rightToc:l};function p(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"key")," parameter comes up repeatedly across different navigation functions. Let's take a look at a summary of its use cases:"),Object(r.b)("h3",{id:"usage-with-the-navigate-call"},"Usage with the ",Object(r.b)("a",Object(n.a)({parentName:"h3"},{href:"navigation-actions.html#navigate"}),Object(r.b)("inlineCode",{parentName:"a"},"navigate"))," call"),Object(r.b)("p",null,"If no key is provided, ",Object(r.b)("inlineCode",{parentName:"p"},"StackRouter")," will behave as follows:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"if a route with the given name already exists in the state, ",Object(r.b)("inlineCode",{parentName:"li"},"StackRouter")," will jump to the existing route, along with setting the new parameters."),Object(r.b)("li",{parentName:"ul"},"if no such route exists, ",Object(r.b)("inlineCode",{parentName:"li"},"StackRouter")," will push it onto the stack")),Object(r.b)("p",null,"If, however, you want to push several instances of the same route, you can do so by providing a unique ",Object(r.b)("inlineCode",{parentName:"p"},"key")," parameter each time you call ",Object(r.b)("inlineCode",{parentName:"p"},"navigate"),", or you can use the ",Object(r.b)("inlineCode",{parentName:"p"},"push")," action available on ",Object(r.b)("inlineCode",{parentName:"p"},"StackRouter"),". See the related ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/react-navigation/rfcs/blob/master/text/0004-less-pushy-navigate.md"}),"RFC")," for more background."),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"Note: the behavior of ",Object(r.b)("inlineCode",{parentName:"p"},"navigate")," without a ",Object(r.b)("inlineCode",{parentName:"p"},"key")," is significantly different in the 1.x series of releases. Read more about it ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://gist.github.com/vonovak/ef72f5efe1d36742de8968ff6a708985"}),"here"),".")),Object(r.b)("h3",{id:"usage-with-reset"},"Usage with ",Object(r.b)("a",Object(n.a)({parentName:"h3"},{href:"navigation-actions.html#reset"}),Object(r.b)("inlineCode",{parentName:"a"},"reset"))),Object(r.b)("p",null,"When resetting, ",Object(r.b)("inlineCode",{parentName:"p"},"key")," is also optional and can be a string or ",Object(r.b)("inlineCode",{parentName:"p"},"null"),". If set, the navigator with the given key will reset. If ",Object(r.b)("inlineCode",{parentName:"p"},"null"),", the root navigator will reset. You can obtain a route's navigator key by calling ",Object(r.b)("inlineCode",{parentName:"p"},"this.props.navigation.dangerouslyGetParent().state.key"),". Reason why the function is called ",Object(r.b)("inlineCode",{parentName:"p"},"dangerouslyGetParent")," is to warn developers against overusing it to eg. get parent of parent and other hard-to-follow patterns."),Object(r.b)("h3",{id:"usage-with-replace"},"Usage with ",Object(r.b)("a",Object(n.a)({parentName:"h3"},{href:"navigation-actions.html#replace"}),Object(r.b)("inlineCode",{parentName:"a"},"replace"))),Object(r.b)("p",null,"With the ",Object(r.b)("inlineCode",{parentName:"p"},"replace")," navigation action, ",Object(r.b)("inlineCode",{parentName:"p"},"key")," is a required parameter used for identifying the route to be replaced. If you use the helper function ",Object(r.b)("inlineCode",{parentName:"p"},"this.props.navigation.replace"),", we will automatically substitute the key of the current route."),Object(r.b)("h3",{id:"usage-with-goback"},"Usage with ",Object(r.b)("inlineCode",{parentName:"h3"},"goBack")),Object(r.b)("p",null,"Please refer to the ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"navigation-prop.html#goback-close-the-active-screen-and-move-back"}),Object(r.b)("inlineCode",{parentName:"a"},"goBack docs"))," for a detailed explanation."))}p.isMDXComponent=!0},504:function(e,t,a){"use strict";a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return h}));var n=a(0),i=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=i.a.createContext({}),p=function(e){var t=i.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},b=function(e){var t=p(e.components);return i.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},d=i.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),b=p(a),d=n,h=b["".concat(o,".").concat(d)]||b[d]||u[d]||r;return a?i.a.createElement(h,c(c({ref:t},s),{},{components:a})):i.a.createElement(h,c({ref:t},s))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,o=new Array(r);o[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var s=2;s<r;s++)o[s]=a[s];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"}}]);