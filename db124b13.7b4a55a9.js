(window.webpackJsonp=window.webpackJsonp||[]).push([[315],{451:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return r})),a.d(t,"metadata",(function(){return c})),a.d(t,"rightToc",(function(){return s})),a.d(t,"default",(function(){return p}));var n=a(2),i=a(9),o=(a(0),a(504)),r={title:"React Navigation 5.0 - A new way to navigate",author:"Satyajit Sahoo, Micha\u0142 Osadnik",author_url:"https://twitter.com/reactnavigation",author_title:"Core Team",author_image_url:"https://avatars1.githubusercontent.com/u/29647600?s=200&v=4",tags:["release","announcement"]},c={permalink:"/blog/2020/02/06/react-navigation-5.0",source:"@site/blog/2020-02-06-react-navigation-5.0.md",description:"Exactly two years ago, we published the first stable version of React Navigation. Throughout this time, the library has been actively developed by adding  many new features and bug fixes. The essence of React Navigation was that it was a project that was to become not only a project of individual programmers adapting it to their requirements, but a community as a whole, hence the emphasis on versatility, extensibility, and the tendency to reconsider the assumptions if there were such needs. Thanks to this, the Library has been undergoing metamorphosis of both incremental and completely reorganized shape.",date:"2020-02-06T00:00:00.000Z",tags:[{label:"release",permalink:"/blog/tags/release"},{label:"announcement",permalink:"/blog/tags/announcement"}],title:"React Navigation 5.0 - A new way to navigate",readingTime:6.825,truncated:!0,prevItem:{title:"React Navigation on the Web",permalink:"/blog/2020/05/16/web-support"},nextItem:{title:"React Navigation v5 + React Native Paper = \u2764\ufe0f",permalink:"/blog/2020/01/29/using-react-navigation-5-with-react-native-paper"}},s=[{value:"Highlights",id:"highlights",children:[{value:"Component based configuration",id:"component-based-configuration",children:[]},{value:"New hooks",id:"new-hooks",children:[]},{value:"Update options from component",id:"update-options-from-component",children:[]},{value:"New theming API",id:"new-theming-api",children:[]},{value:"First-class types with TypeScript",id:"first-class-types-with-typescript",children:[]},{value:"Redux DevTools integration",id:"redux-devtools-integration",children:[]},{value:"Native Stack Navigator",id:"native-stack-navigator",children:[]},{value:"Native backends for Material top tab navigator",id:"native-backends-for-material-top-tab-navigator",children:[]},{value:"Other improvements",id:"other-improvements",children:[]}]},{value:"Upgrading",id:"upgrading",children:[]},{value:"A note for alpha users",id:"a-note-for-alpha-users",children:[]},{value:"Thanks to these wonderful people",id:"thanks-to-these-wonderful-people",children:[]}],l={rightToc:s};function p(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Exactly two years ago, we published the first stable version of React Navigation. Throughout this time, the library has been actively developed by adding  many new features and bug fixes. The essence of React Navigation was that it was a project that was to become not only a project of individual programmers adapting it to their requirements, but a community as a whole, hence the emphasis on versatility, extensibility, and the tendency to reconsider the assumptions if there were such needs. Thanks to this, the Library has been undergoing metamorphosis of both incremental and completely reorganized shape."),Object(o.b)("p",null,"This led us to the moment when React Navigation became one of the most popular navigation solutions in React Native and we are incredibly proud of it."),Object(o.b)("p",null,"Today is the day, when we want to mark this vision and major refactoring of the project, that has taken place over the last six months, as stable. One could say that this significant change concerned the core library, and therefore the API, which has been developed and made more dynamic."),Object(o.b)("h2",{id:"highlights"},"Highlights"),Object(o.b)("h3",{id:"component-based-configuration"},"Component based configuration"),Object(o.b)("p",null,"In previous versions of React Navigation, we used to configure the navigator statically using ",Object(o.b)("inlineCode",{parentName:"p"},"createXNavigator")," functions and ",Object(o.b)("inlineCode",{parentName:"p"},"static navigationOptions"),". In React Navigation 5, all of the configuration happens inside a component and is dynamic."),Object(o.b)("p",null,"Example:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),'function App() {\n  return (\n    <Stack.Navigator initialRouteName="home">\n      <Stack.Screen name="settings" component={Settings} />\n      <Stack.Screen\n        name="profile"\n        component={Profile}\n        options={{ title: \'John Doe\' }}\n      />\n    </Stack.Navigator>\n  );\n}\n')),Object(o.b)("p",null,"This means we have access to props, state and context, and can dynamically change the configuration for the navigator!"),Object(o.b)("p",null,"We want to stress that this is the most important change. This seems to be just a difference in the API. It actually required reconsidering many of the assumptions made in React Navigation during the development of previous versions. The static API, known from previous versions may seem an easier and more obvious choice. In the current version, the navigation configuration is consistent with all patterns in the React community.\nThis made it necessary to rewrite the core of the library, which allowed us to make a number of improvements not only in this respect."),Object(o.b)("h3",{id:"new-hooks"},"New hooks"),Object(o.b)("p",null,"Hooks are great for stateful logic and code organization. Now we have several hooks for common use cases:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://reactnavigation.org/docs/use-navigation.html"}),Object(o.b)("inlineCode",{parentName:"a"},"useNavigation"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://reactnavigation.org/docs/use-route.html"}),Object(o.b)("inlineCode",{parentName:"a"},"useRoute"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://reactnavigation.org/docs/use-navigation-state.html"}),Object(o.b)("inlineCode",{parentName:"a"},"useNavigationState"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://reactnavigation.org/docs/use-focus-effect.html"}),Object(o.b)("inlineCode",{parentName:"a"},"useFocusEffect"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://reactnavigation.org/docs/use-is-focused.html"}),Object(o.b)("inlineCode",{parentName:"a"},"useIsFocused"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://reactnavigation.org/docs/use-linking.html"}),Object(o.b)("inlineCode",{parentName:"a"},"useLinking"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://reactnavigation.org/docs/use-scroll-to-top.html"}),Object(o.b)("inlineCode",{parentName:"a"},"useScrollToTop")))),Object(o.b)("h3",{id:"update-options-from-component"},"Update options from component"),Object(o.b)("p",null,"We\u2019ve added a new ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://reactnavigation.org/docs/navigation-prop.html#setoptions---update-screen-options-from-the-component"}),Object(o.b)("inlineCode",{parentName:"a"},"setOptions"))," method on the ",Object(o.b)("inlineCode",{parentName:"p"},"navigation")," prop to make configuring screen navigation options more intuitive than its ",Object(o.b)("inlineCode",{parentName:"p"},"static navigationOptions")," predecessor. It lets us ",Object(o.b)("strong",{parentName:"p"},"easily set screen options based on props, state or context without messing with params"),". Instead of using static options, we can call it anytime to configure the screen."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"navigation.setOptions({\n  headerRight: () => (\n    <DoneButton\n      onPress={async () => {\n        await saveNote();\n        navigation.replace('Notes');\n      }}\n    />\n  ),\n})\n")),Object(o.b)("p",null,"It can be used for things like adding a button in the header which needs to interact with the screen state."),Object(o.b)("h3",{id:"new-theming-api"},"New theming API"),Object(o.b)("p",null,"In React Navigation, we had basic theming support where you could specify whether to use a light or dark theme. It wasn't easy to customize the colors used by the built-in components such as header, tab bar etc. without extra code or repetition."),Object(o.b)("p",null,"Now, we have revamped the ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://reactnavigation.org/docs/themes.html"}),"theme system")," for easier customization. It is possible to provide a theme object with your desired colors for background, accent color etc. and it will automatically change the colors of all navigators without any extra code."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"const MyTheme = {\n  dark: false,\n  colors: {\n    primary: 'rgb(255, 45, 85)',\n    background: 'rgb(242, 242, 242)',\n    card: 'rgb(255, 255, 255)',\n    text: 'rgb(28, 28, 30)',\n    border: 'rgb(199, 199, 204)',\n  },\n};\n")),Object(o.b)("h3",{id:"first-class-types-with-typescript"},"First-class types with TypeScript"),Object(o.b)("p",null,"The new version has been written from the ground-up with TypeScript. We now get first class autocompletion and type-checking."),Object(o.b)("p",null,Object(o.b)("img",Object(n.a)({parentName:"p"},{src:"/assets/blog/announcing-5.0/typescript.gif",alt:"TypeScript in action"}))),Object(o.b)("p",null,"We also have JSDoc for the built-in methods and options, so you get their description directly in your editor. See ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://reactnavigation.org/docs/typescript.html"}),"our typescript documentation")," for more details on how to use it."),Object(o.b)("h3",{id:"redux-devtools-integration"},"Redux DevTools integration"),Object(o.b)("p",null,"If you use ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/jhen0409/react-native-debugger"}),"React Native Debugger")," or ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/zalmoxisus/redux-devtools-extension"}),"Redux Devtools Extension"),", you can see navigation actions in the devtools along with the current navigation state. It also supports time-travel debugging!"),Object(o.b)("p",null,Object(o.b)("img",Object(n.a)({parentName:"p"},{src:"/assets/blog/announcing-5.0/redux-devtools.gif",alt:"Redux Devtools in action"}))),Object(o.b)("p",null,"You don't need to use Redux in your apps for this to work and it works without any extra setup!"),Object(o.b)("h3",{id:"native-stack-navigator"},"Native Stack Navigator"),Object(o.b)("p",null,"Traditionally, we have written our navigators in JavaScript for greater customizability. It fits a lot of use cases, but sometimes you want the exact native feel and the performance of native navigation. Now, we have added a new native stack navigator that uses native navigation primitives for navigation using the ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/kmagiera/react-native-screens"}),Object(o.b)("inlineCode",{parentName:"a"},"react-native-screens"))," library. Under the hood, it just uses native components which might be obvious choice for native development and might be a good pick in the most cases."),Object(o.b)("img",{src:"/assets/blog/android-native-stack.gif",height:"530"}),Object(o.b)("img",{src:"/assets/blog/ios-native-stack.gif",height:"530"}),Object(o.b)("h3",{id:"native-backends-for-material-top-tab-navigator"},"Native backends for Material top tab navigator"),Object(o.b)("p",null,"Similar to native stack, we also have ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://reactnavigation.org/docs/material-top-tab-navigator.html#pager"}),"new backends")," for Material top tab navigator based on ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/react-native-community/react-native-viewpager"}),Object(o.b)("inlineCode",{parentName:"a"},"react-native-viewpager"))," and ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://reactnative.dev/docs/scrollview"}),Object(o.b)("inlineCode",{parentName:"a"},"ScrollView")),"."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"import ViewPagerAdapter from 'react-native-tab-view-viewpager-adapter';\n\n// ...\n\n<Tab.Navigator pager={props => <ViewPagerAdapter {...props} />}>\n  {...}\n</Tab.Navigator>\n")),Object(o.b)("p",null,"or"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"import { ScrollPager } from 'react-native-tab-view';\n\n// ...\n\n<Tab.Navigator pager={props => <ScrollPager {...props} />}>\n  {...}\n</Tab.Navigator>\n")),Object(o.b)("h3",{id:"other-improvements"},"Other improvements"),Object(o.b)("p",null,"In addition to these larger improvements, there are several smaller improvements to fit more use cases and make it easier to do certain tasks:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Revamped drawer navigator to make customizing the drawer sidebar content easier and more flexible."),Object(o.b)("li",{parentName:"ul"},"Simpler API for ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://reactnavigation.org/docs/navigation-prop.html#reset"}),Object(o.b)("inlineCode",{parentName:"a"},"reset")," action")," where you can pass the new state directly instead of a chain of actions."),Object(o.b)("li",{parentName:"ul"},"More reliable ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://reactnavigation.org/docs/navigation-lifecycle.html"}),Object(o.b)("inlineCode",{parentName:"a"},"focus")," and ",Object(o.b)("inlineCode",{parentName:"a"},"blur")," events")," to know when a screen's focus state changes."),Object(o.b)("li",{parentName:"ul"},"Integration with ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://reactnative.dev/docs/interactionmanager"}),Object(o.b)("inlineCode",{parentName:"a"},"InteractionManager"))," to delay tasks until animation is complete."),Object(o.b)("li",{parentName:"ul"},"Better safe area handling with ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/th3rdwave/react-native-safe-area-context"}),Object(o.b)("inlineCode",{parentName:"a"},"react-native-safe-area-context")),".")),Object(o.b)("h2",{id:"upgrading"},"Upgrading"),Object(o.b)("p",null,"This is a big release and, while the basic concepts such as nesting are the same, the new API is mostly incompatible with the previous API. We know it can be a challenge to upgrade your code base. So we're going to keep supporting React Navigation 4 with bug fixes. We'll accept contributions and keep it compatible with the latest React Native version. The old code will now live in the ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/react-navigation/react-navigation/tree/4.x"}),"4.x branch")," on GitHub."),Object(o.b)("p",null,"We recommend starting your new projects with the new version so you can take advantage of the new APIs and the new features."),Object(o.b)("p",null,"We have written an ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://reactnavigation.org/docs/upgrading-from-4.x.html"}),"upgrade guide")," which will give you an overview of what's changed and how to adapt the old API and concepts to the new API."),Object(o.b)("h2",{id:"a-note-for-alpha-users"},"A note for alpha users"),Object(o.b)("p",null,"If you were using React Navigation 5 when it was alpha, you might need to check the following changes when upgrading:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"If you have added ",Object(o.b)("inlineCode",{parentName:"li"},"@react-navigation/core")," to your dependencies, remove it, and replace all imports from ",Object(o.b)("inlineCode",{parentName:"li"},"@react-navigation/core")," with ",Object(o.b)("inlineCode",{parentName:"li"},"@react-navigation/native")),Object(o.b)("li",{parentName:"ul"},"If you were importing ",Object(o.b)("inlineCode",{parentName:"li"},"NavigationNativeContainer"),", change it to ",Object(o.b)("inlineCode",{parentName:"li"},"NavigationContainer"),", if you were using ",Object(o.b)("inlineCode",{parentName:"li"},"NavigationContainer"),", change it to ",Object(o.b)("inlineCode",{parentName:"li"},"BaseNavigationContainer")),Object(o.b)("li",{parentName:"ul"},"If you had deep linking configured, the config format has changed for nesting. Check the ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://reactnavigation.org/docs/deep-linking.html"}),"deep linking docs")," for details.")),Object(o.b)("h2",{id:"thanks-to-these-wonderful-people"},"Thanks to these wonderful people"),Object(o.b)("p",null,"React Navigation 5 wouldn't have been possible without these wonderful people. A lot of thanks to ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/osdnk"}),"Micha\u0142 Osadnik")," for working in this project with me from idea to fruition, ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/brentvatne"}),"Brent Vatne")," for his ideas, encouragement and funding from ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://expo.io"}),"Expo"),", ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/WoLewicki"}),"Wojciech Lewicki")," and ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/jakub-gonet"}),"Jakub Gonet")," for improving the documentation, and working on deep link support, ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/kmagiera"}),"Krzysztof Magiera")," and ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/software-mansion"}),"Software Mansion")," for their awesome libraries that the core functionality depends on and contributions, ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/janicduplessis"}),"Janic Duplessis")," for ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/th3rdwave/react-native-safe-area-context"}),Object(o.b)("inlineCode",{parentName:"a"},"react-native-safe-area-context")),"."),Object(o.b)("p",null,"Additionally, I would like to mention how important is the community's influence on building this project. Without you, your support, your readiness to test and apply the next versions of the libraries, it wouldn't be possible at all, and despite mentioning a few people by name, at no stage do we forget that this is a community activity and will respond to its needs. We are incredibly grateful for the opportunity to work on such an unusual project, which facilitates the work of a large number of users."),Object(o.b)("p",null,"Thanks again and hope you will find this release useful."))}p.isMDXComponent=!0},504:function(e,t,a){"use strict";a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return d}));var n=a(0),i=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=i.a.createContext({}),p=function(e){var t=i.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},b=function(e){var t=p(e.components);return i.a.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},u=i.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,r=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),b=p(a),u=n,d=b["".concat(r,".").concat(u)]||b[u]||h[u]||o;return a?i.a.createElement(d,c(c({ref:t},l),{},{components:a})):i.a.createElement(d,c({ref:t},l))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,r=new Array(o);r[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,r[1]=c;for(var l=2;l<o;l++)r[l]=a[l];return i.a.createElement.apply(null,r)}return i.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"}}]);