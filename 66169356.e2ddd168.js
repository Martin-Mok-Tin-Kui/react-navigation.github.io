(window.webpackJsonp=window.webpackJsonp||[]).push([[149],{284:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return b}));var a=n(2),o=n(9),i=(n(0),n(504)),r={id:"navigating",title:"Moving between screens",sidebar_label:"Moving between screens"},c={id:"version-4.x/navigating",isDocsHomePage:!1,title:"Moving between screens",description:'In the previous section, "Hello React Navigation", we defined a stack navigator with two routes (Home and Details), but we didn\'t learn how to let a user navigate from Home to Details (although we did learn how to change the initial route in our code, but forcing our users to clone our repository and change the route in our code in order to see another screen is arguably among the worst user experiences one could imagine).',source:"@site/versioned_docs/version-4.x/navigating.md",permalink:"/docs/4.x/navigating",editUrl:"https://github.com/react-navigation/react-navigation.github.io/edit/source/versioned_docs/version-4.x/navigating.md",version:"4.x",sidebar_label:"Moving between screens",sidebar:"version-4.x-docs",previous:{title:"Hello React Navigation",permalink:"/docs/4.x/hello-react-navigation"},next:{title:"Navigation lifecycle",permalink:"/docs/4.x/navigation-lifecycle"},latestVersionMainDocPermalink:"/docs/getting-started"},s=[{value:"Navigating to a new screen",id:"navigating-to-a-new-screen",children:[]},{value:"Navigate to a route multiple times",id:"navigate-to-a-route-multiple-times",children:[]},{value:"Going back",id:"going-back",children:[]},{value:"Summary",id:"summary",children:[]}],l={rightToc:s};function b(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"In the previous section, ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/4.x/hello-react-navigation"}),'"Hello React Navigation"'),", we defined a stack navigator with two routes (",Object(i.b)("inlineCode",{parentName:"p"},"Home")," and ",Object(i.b)("inlineCode",{parentName:"p"},"Details"),"), but we didn't learn how to let a user navigate from ",Object(i.b)("inlineCode",{parentName:"p"},"Home")," to ",Object(i.b)("inlineCode",{parentName:"p"},"Details")," (although we did learn how to change the ",Object(i.b)("em",{parentName:"p"},"initial")," route in our code, but forcing our users to clone our repository and change the route in our code in order to see another screen is arguably among the worst user experiences one could imagine)."),Object(i.b)("p",null,"If this was a web browser, we'd be able to write something like this:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),'<a href="details.html">Go to Details</a>\n')),Object(i.b)("p",null,"Another way to write this would be:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),'<a onClick={() => { document.location.href = "details.html"; }}>Go to Details</a>\n')),Object(i.b)("p",null,"We'll do something similar to the latter, but rather than using a ",Object(i.b)("inlineCode",{parentName:"p"},"document")," global we'll use the ",Object(i.b)("inlineCode",{parentName:"p"},"navigation")," prop that is passed down to our screen components."),Object(i.b)("h2",{id:"navigating-to-a-new-screen"},"Navigating to a new screen"),Object(i.b)("samp",{id:"new-screen"},"First navigation"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"import * as React from 'react';\nimport { Button, View, Text } from 'react-native';\nimport { createAppContainer } from 'react-navigation';\nimport { createStackNavigator } from 'react-navigation-stack';\n\nclass HomeScreen extends React.Component {\n  render() {\n    return (\n      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>\n        <Text>Home Screen</Text>\n        <Button\n          title=\"Go to Details\"\n          onPress={() => this.props.navigation.navigate('Details')}\n        />\n      </View>\n    );\n  }\n}\n\n// ... other code from the previous section\n")),Object(i.b)("p",null,"Let's break this down:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"this.props.navigation"),": the ",Object(i.b)("inlineCode",{parentName:"li"},"navigation")," prop is passed in to every ",Object(i.b)("strong",{parentName:"li"},"screen component")," (",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"glossary-of-terms.html#screen-component"}),"definition"),") in stack navigator (more about this later in ",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/4.x/navigation-prop"}),'"The navigation prop in depth"'),")."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"navigate('Details')"),": we call the ",Object(i.b)("inlineCode",{parentName:"li"},"navigate")," function (on the ",Object(i.b)("inlineCode",{parentName:"li"},"navigation")," prop ","\u2014"," naming is hard!) with the name of the route that we'd like to move the user to.")),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"If we call ",Object(i.b)("inlineCode",{parentName:"p"},"this.props.navigation.navigate")," with a route name that we haven't defined on a stack navigator, nothing will happen. Said another way, we can only navigate to routes that have been defined on our stack navigator ","\u2014"," we cannot navigate to an arbitrary component.")),Object(i.b)("p",null,"So we now have a stack with two routes: 1) the Home route 2) the Details route. What would happen if we navigated to the Details route again, from the Details screen?"),Object(i.b)("h2",{id:"navigate-to-a-route-multiple-times"},"Navigate to a route multiple times"),Object(i.b)("samp",{id:"multiple-navigate"}),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"class DetailsScreen extends React.Component {\n  render() {\n    return (\n      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>\n        <Text>Details Screen</Text>\n        <Button\n          title=\"Go to Details... again\"\n          onPress={() => this.props.navigation.navigate('Details')}\n        />\n      </View>\n    );\n  }\n}\n")),Object(i.b)("p",null,"If you run this code, you'll notice that when you tap \"Go to Details... again\" that it doesn't do anything! This is because we are already on the Details route. The ",Object(i.b)("inlineCode",{parentName:"p"},"navigate"),' function roughly means "go to this screen", and if you are already on that screen then it makes sense that it would do nothing.'),Object(i.b)("p",null,"Let's suppose that we actually ",Object(i.b)("em",{parentName:"p"},"want")," to add another details screen. This is pretty common in cases where you pass in some unique data to each route (more on that later when we talk about ",Object(i.b)("inlineCode",{parentName:"p"},"params"),"!). To do this, we can change ",Object(i.b)("inlineCode",{parentName:"p"},"navigate")," to ",Object(i.b)("inlineCode",{parentName:"p"},"push"),". This allows us to express the intent to add another route regardless of the existing navigation history."),Object(i.b)("samp",{id:"multiple-push"},"push"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"<Button\n  title=\"Go to Details... again\"\n  onPress={() => this.props.navigation.push('Details')}\n/>\n")),Object(i.b)("p",null,"Each time you call ",Object(i.b)("inlineCode",{parentName:"p"},"push")," we add a new route to the navigation stack. When you call ",Object(i.b)("inlineCode",{parentName:"p"},"navigate")," it first tries to find an existing route with that name, and only pushes a new route if there isn't yet one on the stack."),Object(i.b)("h2",{id:"going-back"},"Going back"),Object(i.b)("p",null,"The header provided by stack navigator will automatically include a back button when it is possible to go back from the active screen (if there is only one screen in the navigation stack, there is nothing that you can go back to, and so there is no back button)."),Object(i.b)("p",null,"Sometimes you'll want to be able to programmatically trigger this behavior, and for that you can use ",Object(i.b)("inlineCode",{parentName:"p"},"this.props.navigation.goBack();"),"."),Object(i.b)("samp",{id:"go-back"},"goBack"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"class DetailsScreen extends React.Component {\n  render() {\n    return (\n      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>\n        <Text>Details Screen</Text>\n        <Button\n          title=\"Go to Details... again\"\n          onPress={() => this.props.navigation.push('Details')}\n        />\n        <Button\n          title=\"Go to Home\"\n          onPress={() => this.props.navigation.navigate('Home')}\n        />\n        <Button\n          title=\"Go back\"\n          onPress={() => this.props.navigation.goBack()}\n        />\n      </View>\n    );\n  }\n}\n")),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"On Android, React Navigation hooks in to the hardware back button and fires the ",Object(i.b)("inlineCode",{parentName:"p"},"goBack()")," function for you when the user presses it, so it behaves as the user would expect.")),Object(i.b)("p",null,"Another common requirement is to be able to go back ",Object(i.b)("em",{parentName:"p"},"multiple")," screens -- for example, if you are several screens deep in a stack and want to dismiss all of them to go back to the first screen. In this case, we know that we want to go back to ",Object(i.b)("inlineCode",{parentName:"p"},"Home")," so we can use ",Object(i.b)("inlineCode",{parentName:"p"},"navigate('Home')")," (not ",Object(i.b)("inlineCode",{parentName:"p"},"push"),"! try that out and see the difference). Another alternative would be ",Object(i.b)("inlineCode",{parentName:"p"},"navigation.popToTop()"),", which goes back to the first screen in the stack."),Object(i.b)("h2",{id:"summary"},"Summary"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"this.props.navigation.navigate('RouteName')")," pushes a new route to the stack navigator if it's not already in the stack, otherwise it jumps to that screen."),Object(i.b)("li",{parentName:"ul"},"We can call ",Object(i.b)("inlineCode",{parentName:"li"},"this.props.navigation.push('RouteName')")," as many times as we like and it will continue pushing routes."),Object(i.b)("li",{parentName:"ul"},"The header bar will automatically show a back button, but you can programmatically go back by calling ",Object(i.b)("inlineCode",{parentName:"li"},"this.props.navigation.goBack()"),". On Android, the hardware back button just works as expected."),Object(i.b)("li",{parentName:"ul"},"You can go back to an existing screen in the stack with ",Object(i.b)("inlineCode",{parentName:"li"},"this.props.navigation.navigate('RouteName')"),", and you can go back to the first screen in the stack with ",Object(i.b)("inlineCode",{parentName:"li"},"this.props.navigation.popToTop()"),"."),Object(i.b)("li",{parentName:"ul"},"The ",Object(i.b)("inlineCode",{parentName:"li"},"navigation")," prop is available to all screen components (components defined as screens in route configuration and rendered by React Navigation as a route)."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"#example/go-back"}),"Full source of what we have built so far"),".")))}b.isMDXComponent=!0},504:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var a=n(0),o=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),b=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=b(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},h=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,r=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=b(n),h=a,m=p["".concat(r,".").concat(h)]||p[h]||u[h]||i;return n?o.a.createElement(m,c(c({ref:t},l),{},{components:n})):o.a.createElement(m,c({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=h;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,r[1]=c;for(var l=2;l<i;l++)r[l]=n[l];return o.a.createElement.apply(null,r)}return o.a.createElement.apply(null,n)}h.displayName="MDXCreateElement"}}]);