(window.webpackJsonp=window.webpackJsonp||[]).push([[290],{427:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return b}));var a=n(2),i=n(9),r=(n(0),n(504)),o={id:"stack-navigator",title:"createStackNavigator",sidebar_label:"createStackNavigator"},l={id:"version-2.x/stack-navigator",isDocsHomePage:!1,title:"createStackNavigator",description:"Provides a way for your app to transition between screens where each new screen is placed on top of a stack.",source:"@site/versioned_docs/version-2.x/stack-navigator.md",permalink:"/docs/2.x/stack-navigator",editUrl:"https://github.com/react-navigation/react-navigation.github.io/edit/source/versioned_docs/version-2.x/stack-navigator.md",version:"2.x",sidebar_label:"createStackNavigator",sidebar:"version-2.x-api",previous:{title:"DrawerActions reference",permalink:"/docs/2.x/drawer-actions"},next:{title:"createSwitchNavigator",permalink:"/docs/2.x/switch-navigator"},latestVersionMainDocPermalink:"/docs/getting-started"},c=[{value:"API Definition",id:"api-definition",children:[{value:"RouteConfigs",id:"routeconfigs",children:[]},{value:"StackNavigatorConfig",id:"stacknavigatorconfig",children:[]},{value:"<code>navigationOptions</code> for screens inside of the navigator",id:"navigationoptions-for-screens-inside-of-the-navigator",children:[]},{value:"Navigator Props",id:"navigator-props",children:[]},{value:"Examples",id:"examples",children:[]}]}],s={rightToc:c};function b(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Provides a way for your app to transition between screens where each new screen is placed on top of a stack."),Object(r.b)("p",null,"By default the stack navigator is configured to have the familiar iOS and Android look & feel: new screens slide in from the right on iOS, fade in from the bottom on Android. On iOS the stack navigator can also be configured to a modal style where screens slide in from the bottom."),Object(r.b)("h2",{id:"api-definition"},"API Definition"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"createStackNavigator(RouteConfigs, StackNavigatorConfig);\n")),Object(r.b)("h3",{id:"routeconfigs"},"RouteConfigs"),Object(r.b)("p",null,"The route configs object is a mapping from route name to a route config, which tells the navigator what to present for that route."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"createStackNavigator({\n  // For each screen that you can navigate to, create a new entry like this:\n  Profile: {\n    // `ProfileScreen` is a React component that will be the main content of the screen.\n    screen: ProfileScreen,\n    // When `ProfileScreen` is loaded by the StackNavigator, it will be given a `navigation` prop.\n\n    // Optional: When deep linking or using react-navigation in a web app, this path is used:\n    path: 'people/:name',\n    // The action and route params are extracted from the path.\n\n    // Optional: Override the `navigationOptions` for the screen\n    navigationOptions: ({ navigation }) => ({\n      title: `${navigation.state.params.name}'s Profile'`,\n    }),\n  },\n\n  ...MyOtherRoutes,\n});\n")),Object(r.b)("h3",{id:"stacknavigatorconfig"},"StackNavigatorConfig"),Object(r.b)("p",null,"Options for the router:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"initialRouteName")," - Sets the default screen of the stack. Must match one of the keys in route configs."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"initialRouteParams")," - The params for the initial route"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"initialRouteKey")," - Optional identifier of the initial route"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"navigationOptions")," - Default navigation options to use for screens"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"paths")," - A mapping of overrides for the paths set in the route configs"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"disableKeyboardHandling")," - If true, the keyboard will NOT automatically dismiss when navigating to a new screen. Defaults to false. This is ignored in the web platform.")),Object(r.b)("p",null,"Visual options:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"mode")," - Defines the style for rendering and transitions:",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"card")," - Use the standard iOS and Android screen transitions. This is the default."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"modal")," - Make the screens slide in from the bottom which is a common iOS pattern. Only works on iOS, has no effect on Android."))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"headerMode")," - Specifies how the header should be rendered:",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"float")," - Render a single header that stays at the top and animates as screens are changed. This is a common pattern on iOS."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"screen")," - Each screen has a header attached to it and the header fades in and out together with the screen. This is a common pattern on Android."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"none")," - No header will be rendered."))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"headerBackTitleVisible")," - A reasonable default is supplied for whether the back button title should be visible or not, but if you want to override that you can use ",Object(r.b)("inlineCode",{parentName:"li"},"true")," or ",Object(r.b)("inlineCode",{parentName:"li"},"false")," in this option."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"headerTransitionPreset")," - Specifies how the header should transition from one screen to another when ",Object(r.b)("inlineCode",{parentName:"li"},"headerMode: float")," is enabled.",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"fade-in-place")," - Header components cross-fade without moving, similar to the Twitter, Instagram, and Facebook app for iOS. This is the default value."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"uikit")," - An approximation of the default behavior for iOS."))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"headerLayoutPreset")," - Specifies how to lay out the header components.",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"left")," - Anchor the title to the left, near the back button or other left component. This is the default on Android. When used on iOS, the header back title is hidden. Content from the left component will overflow underneath the title, if you need to adjust this you can use ",Object(r.b)("inlineCode",{parentName:"li"},"headerLeftContainerStyle")," and ",Object(r.b)("inlineCode",{parentName:"li"},"headerTitleContainerStyle"),". Additionally, this alignment is incompatible with ",Object(r.b)("inlineCode",{parentName:"li"},"headerTransitionPreset: 'uikit'"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"center")," - Center the title, this is the default on iOS."))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"cardStyle")," - Use this prop to override or extend the default style for an individual card in stack."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"transitionConfig")," - Function to return an object that is merged with the default screen transitions (take a look at TransitionConfig in ",Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/react-navigation/react-navigation/blob/2.x/flow/react-navigation.js"}),"type definitions"),"). Provided function will be passed the following arguments:",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"transitionProps")," - Transition props for the new screen."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"prevTransitionProps")," - Transitions props for the old screen."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"isModal")," - Boolean specifying if screen is modal."))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"onTransitionStart")," - Function to be invoked when the card transition animation is about to start."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"onTransitionEnd")," - Function to be invoked once the card transition animation completes."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"transparentCard")," - ",Object(r.b)("em",{parentName:"li"},"Experimental")," - Prop to keep all cards in the stack visible and add a transparent background instead of a white one. This is useful to implement things like modal dialogs where the previous scene should still be visible underneath the current one.")),Object(r.b)("h3",{id:"navigationoptions-for-screens-inside-of-the-navigator"},Object(r.b)("inlineCode",{parentName:"h3"},"navigationOptions")," for screens inside of the navigator"),Object(r.b)("h4",{id:"title"},Object(r.b)("inlineCode",{parentName:"h4"},"title")),Object(r.b)("p",null,"String that can be used as a fallback for ",Object(r.b)("inlineCode",{parentName:"p"},"headerTitle"),". Additionally, will be used as a fallback for ",Object(r.b)("inlineCode",{parentName:"p"},"tabBarLabel")," (if nested in a TabNavigator) or ",Object(r.b)("inlineCode",{parentName:"p"},"drawerLabel")," (if nested in a DrawerNavigator)."),Object(r.b)("h4",{id:"header"},Object(r.b)("inlineCode",{parentName:"h4"},"header")),Object(r.b)("p",null,"React Element or a function that given ",Object(r.b)("inlineCode",{parentName:"p"},"HeaderProps")," returns a React Element, to display as a header. Setting to ",Object(r.b)("inlineCode",{parentName:"p"},"null")," hides header."),Object(r.b)("h4",{id:"headertitle"},Object(r.b)("inlineCode",{parentName:"h4"},"headerTitle")),Object(r.b)("p",null,"String, React Element or React Component used by the header. Defaults to scene ",Object(r.b)("inlineCode",{parentName:"p"},"title"),". When a component is used, it receives ",Object(r.b)("inlineCode",{parentName:"p"},"allowFontScaling"),", ",Object(r.b)("inlineCode",{parentName:"p"},"style")," and ",Object(r.b)("inlineCode",{parentName:"p"},"children")," props. The title string is passed in ",Object(r.b)("inlineCode",{parentName:"p"},"children"),"."),Object(r.b)("h4",{id:"headertitleallowfontscaling"},Object(r.b)("inlineCode",{parentName:"h4"},"headerTitleAllowFontScaling")),Object(r.b)("p",null,"Whether header title font should scale to respect Text Size accessibility settings. Defaults to true."),Object(r.b)("h4",{id:"headerbackimage"},Object(r.b)("inlineCode",{parentName:"h4"},"headerBackImage")),Object(r.b)("p",null,"React Element or Component to display custom image in header's back button. When a component is used, it receives a number of props when rendered (",Object(r.b)("inlineCode",{parentName:"p"},"tintColor"),", ",Object(r.b)("inlineCode",{parentName:"p"},"title"),"). Defaults to Image component with ",Object(r.b)("inlineCode",{parentName:"p"},"react-navigation/views/assets/back-icon.png")," back image source, which is the default back icon image for the platform (a chevron on iOS and an arrow on Android)."),Object(r.b)("h4",{id:"headerbacktitle"},Object(r.b)("inlineCode",{parentName:"h4"},"headerBackTitle")),Object(r.b)("p",null,"Title string used by the back button on iOS, or ",Object(r.b)("inlineCode",{parentName:"p"},"null")," to disable label. Defaults to the previous scene's ",Object(r.b)("inlineCode",{parentName:"p"},"headerTitle"),". ",Object(r.b)("inlineCode",{parentName:"p"},"headerBackTitle")," has to be defined in the origin screen, not in the destination screen. For instance, when you have a transition A to B and you want to disable the ",Object(r.b)("inlineCode",{parentName:"p"},"headerBackTitle")," on ",Object(r.b)("inlineCode",{parentName:"p"},"B"),":"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"StackNavigator({\n  A: {\n    screen: AScreen,\n    navigationOptions: () => ({\n      title: `A`,\n      headerBackTitle: null\n    }),\n  },\n  B: {\n    screen: BScreen,\n    navigationOptions: () => ({\n      title: `B`,\n    }),\n  }\n});\n")),Object(r.b)("h4",{id:"headertruncatedbacktitle"},Object(r.b)("inlineCode",{parentName:"h4"},"headerTruncatedBackTitle")),Object(r.b)("p",null,"Title string used by the back button when ",Object(r.b)("inlineCode",{parentName:"p"},"headerBackTitle")," doesn't fit on the screen. ",Object(r.b)("inlineCode",{parentName:"p"},'"Back"')," by default. ",Object(r.b)("inlineCode",{parentName:"p"},"headerTruncatedBackTitle")," has to be defined in the origin screen, not in the destination screen. For instance, when you have a transition A to B and you want to truncate the label on ",Object(r.b)("inlineCode",{parentName:"p"},"B"),":"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"StackNavigator({\n  A: {\n    screen: AScreen,\n    navigationOptions: () => ({\n      title: `A`,\n      headerBackTitle: 'A much too long text for back button from B to A',\n      headerTruncatedBackTitle: `to A`\n    }),\n  },\n  B: {\n    screen: BScreen,\n    navigationOptions: () => ({\n      title: `B`,\n    }),\n  }\n});\n")),Object(r.b)("h4",{id:"headerright"},Object(r.b)("inlineCode",{parentName:"h4"},"headerRight")),Object(r.b)("p",null,"React Element to display on the right side of the header."),Object(r.b)("h4",{id:"headerleft"},Object(r.b)("inlineCode",{parentName:"h4"},"headerLeft")),Object(r.b)("p",null,"React Element or Component to display on the left side of the header. When a component is used, it receives a number of props when rendered (",Object(r.b)("inlineCode",{parentName:"p"},"onPress"),", ",Object(r.b)("inlineCode",{parentName:"p"},"title"),", ",Object(r.b)("inlineCode",{parentName:"p"},"titleStyle")," and more - check ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/react-navigation/react-navigation-stack/blob/master/src/views/Header/Header.js"}),"Header.js")," for the complete list)."),Object(r.b)("h4",{id:"headerstyle"},Object(r.b)("inlineCode",{parentName:"h4"},"headerStyle")),Object(r.b)("p",null,"Style object for the header"),Object(r.b)("h4",{id:"headerforceinset"},Object(r.b)("inlineCode",{parentName:"h4"},"headerForceInset")),Object(r.b)("p",null,"Allows to pass ",Object(r.b)("inlineCode",{parentName:"p"},"forceInset")," object to internal SafeAreaView used in the header."),Object(r.b)("h4",{id:"headertitlestyle"},Object(r.b)("inlineCode",{parentName:"h4"},"headerTitleStyle")),Object(r.b)("p",null,"Style object for the title component"),Object(r.b)("h4",{id:"headerbacktitlestyle"},Object(r.b)("inlineCode",{parentName:"h4"},"headerBackTitleStyle")),Object(r.b)("p",null,"Style object for the back title"),Object(r.b)("h4",{id:"headerleftcontainerstyle"},Object(r.b)("inlineCode",{parentName:"h4"},"headerLeftContainerStyle")),Object(r.b)("p",null,"Customize the style for the container of the ",Object(r.b)("inlineCode",{parentName:"p"},"headerLeft")," component, for example to add padding."),Object(r.b)("h4",{id:"headerrightcontainerstyle"},Object(r.b)("inlineCode",{parentName:"h4"},"headerRightContainerStyle")),Object(r.b)("p",null,"Customize the style for the container of the ",Object(r.b)("inlineCode",{parentName:"p"},"headerRight")," component, for example to add padding."),Object(r.b)("h4",{id:"headertitlecontainerstyle"},Object(r.b)("inlineCode",{parentName:"h4"},"headerTitleContainerStyle")),Object(r.b)("p",null,"Customize the style for the container of the ",Object(r.b)("inlineCode",{parentName:"p"},"headerTitle")," component, for example to add padding."),Object(r.b)("h4",{id:"headertintcolor"},Object(r.b)("inlineCode",{parentName:"h4"},"headerTintColor")),Object(r.b)("p",null,"Tint color for the header"),Object(r.b)("h4",{id:"headerpresscolorandroid"},Object(r.b)("inlineCode",{parentName:"h4"},"headerPressColorAndroid")),Object(r.b)("p",null,"Color for material ripple (Android >= 5.0 only)"),Object(r.b)("h4",{id:"headertransparent"},Object(r.b)("inlineCode",{parentName:"h4"},"headerTransparent")),Object(r.b)("p",null,"Defaults to ",Object(r.b)("inlineCode",{parentName:"p"},"false"),". If ",Object(r.b)("inlineCode",{parentName:"p"},"true"),", the header will not have a background unless you explicitly provide it with ",Object(r.b)("inlineCode",{parentName:"p"},"headerStyle")," or ",Object(r.b)("inlineCode",{parentName:"p"},"headerBackground"),"."),Object(r.b)("h4",{id:"headerbackground"},Object(r.b)("inlineCode",{parentName:"h4"},"headerBackground")),Object(r.b)("p",null,"Use this with ",Object(r.b)("inlineCode",{parentName:"p"},"headerTransparent")," to provide a component to render in the background of the header. You can use this with a blur view, for example, to create a translucent header."),Object(r.b)("h4",{id:"gesturesenabled"},Object(r.b)("inlineCode",{parentName:"h4"},"gesturesEnabled")),Object(r.b)("p",null,"Whether you can use gestures to dismiss this screen. Defaults to true on iOS, false on Android."),Object(r.b)("h4",{id:"gestureresponsedistance"},Object(r.b)("inlineCode",{parentName:"h4"},"gestureResponseDistance")),Object(r.b)("p",null,"Object to override the distance of touch start from the edge of the screen to recognize gestures. It takes the following properties:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"horizontal")," - ",Object(r.b)("em",{parentName:"li"},"number")," - Distance for horizontal direction. Defaults to 25."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"vertical")," - ",Object(r.b)("em",{parentName:"li"},"number")," - Distance for vertical direction. Defaults to 135.")),Object(r.b)("h4",{id:"gesturedirection"},Object(r.b)("inlineCode",{parentName:"h4"},"gestureDirection")),Object(r.b)("p",null,"String to override the direction for dismiss gesture. ",Object(r.b)("inlineCode",{parentName:"p"},"default")," for normal behaviour or ",Object(r.b)("inlineCode",{parentName:"p"},"inverted")," for right-to-left swipes."),Object(r.b)("h3",{id:"navigator-props"},"Navigator Props"),Object(r.b)("p",null,"The navigator component created by ",Object(r.b)("inlineCode",{parentName:"p"},"StackNavigator(...)")," takes the following props:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"screenProps")," - Pass down extra options to child screens, for example:")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const SomeStack = createStackNavigator({\n  // config\n});\n\n<SomeStack\n  screenProps={/* this prop will get passed to the screen components as this.props.screenProps */}\n/>\n")),Object(r.b)("h3",{id:"examples"},"Examples"),Object(r.b)("p",null,"See the examples ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/react-navigation/react-navigation/tree/2.x/examples/NavigationPlayground/js/SimpleStack.js"}),"SimpleStack.js")," and ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/react-navigation/react-navigation/tree/2.x/examples/NavigationPlayground/js/ModalStack.js"}),"ModalStack.js")," which you can run locally as part of the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/react-navigation/react-navigation/tree/2.x/examples/NavigationPlayground"}),"NavigationPlayground")," app."),Object(r.b)("p",null,"You can view these examples directly on your phone by visiting ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://exp.host/@react-navigation/NavigationPlayground"}),"our expo demo"),"."),Object(r.b)("h4",{id:"modal-stacknavigator-with-custom-screen-transitions"},"Modal StackNavigator with Custom Screen Transitions"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const ModalNavigator = createStackNavigator(\n  {\n    Main: { screen: Main },\n    Login: { screen: Login },\n  },\n  {\n    headerMode: 'none',\n    mode: 'modal',\n    navigationOptions: {\n      gesturesEnabled: false,\n    },\n    transitionConfig: () => ({\n      transitionSpec: {\n        duration: 300,\n        easing: Easing.out(Easing.poly(4)),\n        timing: Animated.timing,\n      },\n      screenInterpolator: sceneProps => {\n        const { layout, position, scene } = sceneProps;\n        const { index } = scene;\n\n        const height = layout.initHeight;\n        const translateY = position.interpolate({\n          inputRange: [index - 1, index, index + 1],\n          outputRange: [height, 0, 0],\n        });\n\n        const opacity = position.interpolate({\n          inputRange: [index - 1, index - 0.99, index],\n          outputRange: [0, 1, 1],\n        });\n\n        return { opacity, transform: [{ translateY }] };\n      },\n    }),\n  }\n);\n")),Object(r.b)("p",null,"Header transitions can also be configured using ",Object(r.b)("inlineCode",{parentName:"p"},"headerLeftInterpolator"),", ",Object(r.b)("inlineCode",{parentName:"p"},"headerTitleInterpolator")," and ",Object(r.b)("inlineCode",{parentName:"p"},"headerRightInterpolator")," fields under ",Object(r.b)("inlineCode",{parentName:"p"},"transitionConfig"),"."),Object(r.b)("h4",{id:"specifying-the-transition-mode-for-a-stacks-screens-explicitly"},"Specifying the transition mode for a stack's screens explicitly"),Object(r.b)("p",null,"We can't set the ",Object(r.b)("inlineCode",{parentName:"p"},"StackNavigatorConfig"),"'s ",Object(r.b)("inlineCode",{parentName:"p"},"mode")," dynamically. Instead we are going to use a custom ",Object(r.b)("inlineCode",{parentName:"p"},"transitionConfig")," to render the specific transition we want - modal or card - on a screen by screen basis."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"import { createStackNavigator, StackViewTransitionConfigs } from 'react-navigation';\n\n/* The screens you add to IOS_MODAL_ROUTES will have the modal transition.  */\nconst IOS_MODAL_ROUTES = ['OptionsScreen'];\n\nlet dynamicModalTransition = (transitionProps, prevTransitionProps) => {\n  const isModal = IOS_MODAL_ROUTES.some(\n    screenName =>\n      screenName === transitionProps.scene.route.routeName ||\n      (prevTransitionProps && screenName === prevTransitionProps.scene.route.routeName)\n  )\n  return StackViewTransitionConfigs.defaultTransitionConfig(\n    transitionProps,\n    prevTransitionProps,\n    isModal\n  );\n};\n\nconst HomeStack = createStackNavigator(\n  { DetailScreen, HomeScreen, OptionsScreen },\n  { initialRouteName: 'HomeScreen', transitionConfig: dynamicModalTransition }\n);\n")))}b.isMDXComponent=!0},504:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return u}));var a=n(0),i=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=i.a.createContext({}),b=function(e){var t=i.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=b(e.components);return i.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},h=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=b(n),h=a,u=d["".concat(o,".").concat(h)]||d[h]||p[h]||r;return n?i.a.createElement(u,l(l({ref:t},s),{},{components:n})):i.a.createElement(u,l({ref:t},s))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=h;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<r;s++)o[s]=n[s];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}h.displayName="MDXCreateElement"}}]);