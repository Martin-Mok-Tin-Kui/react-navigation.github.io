/*! For license information please see 11edefd1.d467c150.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{146:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return u}));var a=n(1),i=n(9),o=(n(0),n(486)),r=n(488),b=n(489),l={id:"bottom-tab-navigator",title:"createBottomTabNavigator",sidebar_label:"createBottomTabNavigator"},c={id:"version-5.x/bottom-tab-navigator",title:"createBottomTabNavigator",description:"A simple tab bar on the bottom of the screen that lets you switch between different routes. Routes are lazily initialized -- their screen components are not mounted until they are first focused.",source:"@site/versioned_docs/version-5.x/bottom-tab-navigator.md",permalink:"/docs/bottom-tab-navigator",editUrl:"https://github.com/react-navigation/react-navigation.github.io/edit/source/versioned_docs/version-5.x/bottom-tab-navigator.md",version:"5.x",sidebar_label:"createBottomTabNavigator",sidebar:"version-5.x/docs",previous:{title:"createDrawerNavigator",permalink:"/docs/drawer-navigator"},next:{title:"createMaterialBottomTabNavigator",permalink:"/docs/material-bottom-tab-navigator"}},s=[{value:"API Definition",id:"api-definition",children:[{value:"Props",id:"props",children:[]},{value:"Options",id:"options",children:[]},{value:"Events",id:"events",children:[]},{value:"Helpers",id:"helpers",children:[]}]},{value:"Example",id:"example",children:[]}],p={rightToc:s};function u(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"A simple tab bar on the bottom of the screen that lets you switch between different routes. Routes are lazily initialized -- their screen components are not mounted until they are first focused."),Object(o.b)("div",{style:{display:"flex",margin:"16px 0"}},Object(o.b)("video",{playsInline:!0,autoPlay:!0,muted:!0,loop:!0},Object(o.b)("source",{src:"/assets/navigators/tabs/bottom-tabs-demo.mov"}))),Object(o.b)("p",null,"To use this navigator, ensure that you have ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/getting-started"}),Object(o.b)("inlineCode",{parentName:"a"},"@react-navigation/native")," and its dependencies (follow this guide)"),", then install ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/react-navigation/react-navigation/tree/master/packages/bottom-tabs"}),Object(o.b)("inlineCode",{parentName:"a"},"@react-navigation/bottom-tabs")),":"),Object(o.b)(r.a,{defaultValue:"npm",values:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],mdxType:"Tabs"},Object(o.b)(b.a,{value:"npm",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"npm install @react-navigation/bottom-tabs\n"))),Object(o.b)(b.a,{value:"yarn",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"yarn add @react-navigation/bottom-tabs\n")))),Object(o.b)("h2",{id:"api-definition"},"API Definition"),Object(o.b)("p",null,"To use this tab navigator, import it from ",Object(o.b)("inlineCode",{parentName:"p"},"@react-navigation/bottom-tabs"),":"),Object(o.b)("samp",{id:"tab-based-navigation-minimal"}),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'import { createBottomTabNavigator } from \'@react-navigation/bottom-tabs\';\n\nconst Tab = createBottomTabNavigator();\n\nfunction MyTabs() {\n  return (\n    <Tab.Navigator>\n      <Tab.Screen name="Home" component={HomeScreen} />\n      <Tab.Screen name="Settings" component={SettingsScreen} />\n    </Tab.Navigator>\n  );\n}\n')),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"For a complete usage guide please visit ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/tab-based-navigation"}),"Tab Navigation"))),Object(o.b)("h3",{id:"props"},"Props"),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"Tab.Navigator")," component accepts following props:"),Object(o.b)("h4",{id:"initialroutename"},Object(o.b)("inlineCode",{parentName:"h4"},"initialRouteName")),Object(o.b)("p",null,"The name of the route to render on first load of the navigator."),Object(o.b)("h4",{id:"screenoptions"},Object(o.b)("inlineCode",{parentName:"h4"},"screenOptions")),Object(o.b)("p",null,"Default options to use for the screens in the navigator."),Object(o.b)("h4",{id:"backbehavior"},Object(o.b)("inlineCode",{parentName:"h4"},"backBehavior")),Object(o.b)("p",null,"Behavior of back button handling."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"initialRoute")," to return to initial tab"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"order")," to return to previous tab (in the order they are shown in the tab bar)"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"history")," to return to last visited tab"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"none")," to not handle back button")),Object(o.b)("h4",{id:"lazy"},Object(o.b)("inlineCode",{parentName:"h4"},"lazy")),Object(o.b)("p",null,"Defaults to ",Object(o.b)("inlineCode",{parentName:"p"},"true"),". If ",Object(o.b)("inlineCode",{parentName:"p"},"false"),", all tabs are rendered immediately. When ",Object(o.b)("inlineCode",{parentName:"p"},"true"),", tabs are rendered only when they are made active for the first time. Note: tabs are ",Object(o.b)("strong",{parentName:"p"},"not")," re-rendered upon subsequent visits."),Object(o.b)("h4",{id:"tabbar"},Object(o.b)("inlineCode",{parentName:"h4"},"tabBar")),Object(o.b)("p",null,"Function that returns a React element to display as the tab bar."),Object(o.b)("p",null,"Example:"),Object(o.b)("samp",{id:"custom-tab-bar"}),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"import { View, Text, TouchableOpacity } from 'react-native';\n\nfunction MyTabBar({ state, descriptors, navigation }) {\n  const focusedOptions = descriptors[state.routes[state.index].key];\n\n  if (focusedOptions.tabBarVisible === false) {\n    return null;\n  }\n\n  return (\n    <View style={{ flexDirection: 'row' }}>\n      {state.routes.map((route, index) => {\n        const { options } = descriptors[route.key];\n        const label =\n          options.tabBarLabel !== undefined\n            ? options.tabBarLabel\n            : options.title !== undefined\n            ? options.title\n            : route.name;\n\n        const isFocused = state.index === index;\n\n        const onPress = () => {\n          const event = navigation.emit({\n            type: 'tabPress',\n            target: route.key,\n            canPreventDefault: true,\n          });\n\n          if (!isFocused && !event.defaultPrevented) {\n            navigation.navigate(route.name);\n          }\n        };\n\n        const onLongPress = () => {\n          navigation.emit({\n            type: 'tabLongPress',\n            target: route.key,\n          });\n        };\n\n        return (\n          <TouchableOpacity\n            accessibilityRole=\"button\"\n            accessibilityStates={isFocused ? ['selected'] : []}\n            accessibilityLabel={options.tabBarAccessibilityLabel}\n            testID={options.tabBarTestID}\n            onPress={onPress}\n            onLongPress={onLongPress}\n            style={{ flex: 1 }}\n          >\n            <Text style={{ color: isFocused ? '#673ab7' : '#222' }}>\n              {label}\n            </Text>\n          </TouchableOpacity>\n        );\n      })}\n    </View>\n  );\n}\n\n// ...\n\n<Tab.Navigator tabBar={props => <MyTabBar {...props} />}>\n  {...}\n</Tab.Navigator>\n")),Object(o.b)("p",null,"This example will render a basic tab bar with labels."),Object(o.b)("h4",{id:"tabbaroptions"},Object(o.b)("inlineCode",{parentName:"h4"},"tabBarOptions")),Object(o.b)("p",null,"An object containing the props for the tab bar component. It can contain the following properties:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"activeTintColor")," - Label and icon color of the active tab."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"activeBackgroundColor")," - Background color of the active tab."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"inactiveTintColor")," - Label and icon color of the inactive tab."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"inactiveBackgroundColor")," - Background color of the inactive tab."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"showLabel")," - Whether to show label for tab, default is true."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"showIcon")," - Whether to show icon for tab, default is true."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"style")," - Style object for the tab bar."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"labelStyle")," - Style object for the tab label."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"labelPosition")," - Where to show the tab label in relation to the tab icon. Available values are ",Object(o.b)("inlineCode",{parentName:"li"},"beside-icon")," and ",Object(o.b)("inlineCode",{parentName:"li"},"below-icon"),". Defaults to ",Object(o.b)("inlineCode",{parentName:"li"},"beside-icon"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"tabStyle")," - Style object for the tab."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"allowFontScaling")," - Whether label font should scale to respect Text Size accessibility settings, default is true."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"adaptive")," - Should the tab icons and labels alignment change based on screen size? Defaults to ",Object(o.b)("inlineCode",{parentName:"li"},"true")," for iOS 11. If ",Object(o.b)("inlineCode",{parentName:"li"},"false"),", tab icons and labels align vertically all the time. When ",Object(o.b)("inlineCode",{parentName:"li"},"true"),", tab icons and labels align horizontally on tablet."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"safeAreaInset")," - Override the ",Object(o.b)("inlineCode",{parentName:"li"},"forceInset")," prop for ",Object(o.b)("inlineCode",{parentName:"li"},"<SafeAreaView>"),". Defaults to ",Object(o.b)("inlineCode",{parentName:"li"},"{ bottom: 'always', top: 'never' }"),". Available keys are ",Object(o.b)("inlineCode",{parentName:"li"},"top | bottom | left | right")," provided with the values ",Object(o.b)("inlineCode",{parentName:"li"},"'always' | 'never'"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"keyboardHidesTabBar")," - Defaults to ",Object(o.b)("inlineCode",{parentName:"li"},"false"),". If ",Object(o.b)("inlineCode",{parentName:"li"},"true")," hide the tab bar when keyboard opens.")),Object(o.b)("h3",{id:"options"},"Options"),Object(o.b)("p",null,"The following ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/screen-options"}),"options")," can be used to configure the screens in the navigator:"),Object(o.b)("h4",{id:"title"},Object(o.b)("inlineCode",{parentName:"h4"},"title")),Object(o.b)("p",null,"Generic title that can be used as a fallback for ",Object(o.b)("inlineCode",{parentName:"p"},"headerTitle")," and ",Object(o.b)("inlineCode",{parentName:"p"},"tabBarLabel"),"."),Object(o.b)("h4",{id:"tabbarvisible"},Object(o.b)("inlineCode",{parentName:"h4"},"tabBarVisible")),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"true")," or ",Object(o.b)("inlineCode",{parentName:"p"},"false")," to show or hide the tab bar, if not set then defaults to ",Object(o.b)("inlineCode",{parentName:"p"},"true"),"."),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"Note: Hiding tab bar can cause glitches and jumpy behavior. We recommend ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/hiding-tabbar-in-screens"}),"the tab navigator inside of a stack navigator instead"),".")),Object(o.b)("h4",{id:"tabbaricon"},Object(o.b)("inlineCode",{parentName:"h4"},"tabBarIcon")),Object(o.b)("p",null,"Function that given ",Object(o.b)("inlineCode",{parentName:"p"},"{ focused: boolean, color: string, size: number }")," returns a React.Node, to display in the tab bar."),Object(o.b)("h4",{id:"tabbarlabel"},Object(o.b)("inlineCode",{parentName:"h4"},"tabBarLabel")),Object(o.b)("p",null,"Title string of a tab displayed in the tab bar or a function that given ",Object(o.b)("inlineCode",{parentName:"p"},"{ focused: boolean, color: string }")," returns a React.Node, to display in tab bar. When undefined, scene ",Object(o.b)("inlineCode",{parentName:"p"},"title")," is used. To hide, see ",Object(o.b)("inlineCode",{parentName:"p"},"tabBarOptions.showLabel")," in the previous section."),Object(o.b)("h4",{id:"tabbarbutton"},Object(o.b)("inlineCode",{parentName:"h4"},"tabBarButton")),Object(o.b)("p",null,"Function which returns a React element to render as the tab bar button. It wraps the icon and label and implements ",Object(o.b)("inlineCode",{parentName:"p"},"onPress"),". Renders ",Object(o.b)("inlineCode",{parentName:"p"},"TouchableWithoutFeedback")," by default. ",Object(o.b)("inlineCode",{parentName:"p"},"tabBarButton: props => <TouchableOpacity {...props} />")," would use ",Object(o.b)("inlineCode",{parentName:"p"},"TouchableOpacity")," instead."),Object(o.b)("h4",{id:"tabbaraccessibilitylabel"},Object(o.b)("inlineCode",{parentName:"h4"},"tabBarAccessibilityLabel")),Object(o.b)("p",null,"Accessibility label for the tab button. This is read by the screen reader when the user taps the tab. It's recommended to set this if you don't have a label for the tab."),Object(o.b)("h4",{id:"tabbartestid"},Object(o.b)("inlineCode",{parentName:"h4"},"tabBarTestID")),Object(o.b)("p",null,"ID to locate this tab button in tests."),Object(o.b)("h4",{id:"unmountonblur"},Object(o.b)("inlineCode",{parentName:"h4"},"unmountOnBlur")),Object(o.b)("p",null,"Whether this screen should be unmounted when navigating away from it. Unmounting a screen resets any local state in the screen as well as state of nested navigators in the screen. Defaults to ",Object(o.b)("inlineCode",{parentName:"p"},"false"),"."),Object(o.b)("h3",{id:"events"},"Events"),Object(o.b)("p",null,"The navigator can ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/navigation-events"}),"emit events")," on certain actions. Supported events are:"),Object(o.b)("h4",{id:"tabpress"},Object(o.b)("inlineCode",{parentName:"h4"},"tabPress")),Object(o.b)("p",null,"This event is fired when the user presses the tab button for the current screen in the tab bar. By default a tab press does several things:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"If the tab is not focused, tab press will focus that tab"),Object(o.b)("li",{parentName:"ul"},"If the tab is already focused:",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"If the screen for the tab renders a scroll view, scroll to top is performed by ",Object(o.b)("inlineCode",{parentName:"li"},"useScrollToTop")),Object(o.b)("li",{parentName:"ul"},"If the screen for the tab renders a stack navigator, a ",Object(o.b)("inlineCode",{parentName:"li"},"popToTop")," action is performed on the stack")))),Object(o.b)("p",null,"To prevent the default behavior, you can call ",Object(o.b)("inlineCode",{parentName:"p"},"event.preventDefault"),":"),Object(o.b)("samp",{id:"bottom-tab-prevent-default"}),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"React.useEffect(() => {\n  const unsubscribe = navigation.addListener('tabPress', e => {\n    // Prevent default behavior\n    e.preventDefault();\n\n    // Do something manually\n    // ...\n  });\n\n  return unsubscribe;\n}, [navigation]);\n")),Object(o.b)("p",null,"If you have a custom tab bar, make sure to emit this event."),Object(o.b)("h4",{id:"tablongpress"},Object(o.b)("inlineCode",{parentName:"h4"},"tabLongPress")),Object(o.b)("p",null,"This event is fired when the user presses the tab button for the current screen in the tab bar for an extended period. If you have a custom tab bar, make sure to emit this event."),Object(o.b)("p",null,"Example:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"React.useEffect(() => {\n  const unsubscribe = navigation.addListener('tabLongPress', e => {\n    // Do something\n  });\n\n  return unsubscribe;\n}, [navigation]);\n")),Object(o.b)("h3",{id:"helpers"},"Helpers"),Object(o.b)("p",null,"The tab navigator adds the following methods to the navigation prop:"),Object(o.b)("h4",{id:"jumpto"},Object(o.b)("inlineCode",{parentName:"h4"},"jumpTo")),Object(o.b)("p",null,"Navigates to an existing screen in the tab navigator. The method accepts following arguments:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"name")," - ",Object(o.b)("em",{parentName:"li"},"string")," - Name of the route to jump to."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"params")," - ",Object(o.b)("em",{parentName:"li"},"object")," - Screen params to merge into the destination route (found in the pushed screen through ",Object(o.b)("inlineCode",{parentName:"li"},"route.params"),").")),Object(o.b)("samp",{id:"tab-jump-to"}),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"navigation.jumpTo('Profile', { owner: 'Micha\u015b' });\n")),Object(o.b)("h2",{id:"example"},"Example"),Object(o.b)("samp",{id:"bottom-tab-example"}),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'import { createBottomTabNavigator } from \'@react-navigation/bottom-tabs\';\nimport MaterialCommunityIcons from \'react-native-vector-icons/MaterialCommunityIcons\';\n\nconst Tab = createBottomTabNavigator();\n\nfunction MyTabs() {\n  return (\n    <Tab.Navigator\n      initialRouteName="Feed"\n      tabBarOptions={{\n        activeTintColor: \'#e91e63\',\n      }}\n    >\n      <Tab.Screen\n        name="Feed"\n        component={Feed}\n        options={{\n          tabBarLabel: \'Home\',\n          tabBarIcon: ({ color, size }) => (\n            <MaterialCommunityIcons name="home" color={color} size={size} />\n          ),\n        }}\n      />\n      <Tab.Screen\n        name="Notifications"\n        component={Notifications}\n        options={{\n          tabBarLabel: \'Updates\',\n          tabBarIcon: ({ color, size }) => (\n            <MaterialCommunityIcons name="bell" color={color} size={size} />\n          ),\n        }}\n      />\n      <Tab.Screen\n        name="Profile"\n        component={Profile}\n        options={{\n          tabBarLabel: \'Profile\',\n          tabBarIcon: ({ color, size }) => (\n            <MaterialCommunityIcons name="account" color={color} size={size} />\n          ),\n        }}\n      />\n    </Tab.Navigator>\n  );\n}\n')))}u.isMDXComponent=!0},486:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var a=n(0),i=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=i.a.createContext({}),s=function(e){var t=i.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):b({},t,{},e)),n},p=function(e){var t=s(e.components);return i.a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},d=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,r=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=s(n),d=a,m=p["".concat(r,".").concat(d)]||p[d]||u[d]||o;return n?i.a.createElement(m,b({ref:t},c,{components:n})):i.a.createElement(m,b({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=d;var b={};for(var l in t)hasOwnProperty.call(t,l)&&(b[l]=t[l]);b.originalType=e,b.mdxType="string"==typeof e?e:a,r[1]=b;for(var c=2;c<o;c++)r[c]=n[c];return i.a.createElement.apply(null,r)}return i.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},487:function(e,t,n){var a;!function(){"use strict";var n={}.hasOwnProperty;function i(){for(var e=[],t=0;t<arguments.length;t++){var a=arguments[t];if(a){var o=typeof a;if("string"===o||"number"===o)e.push(a);else if(Array.isArray(a)&&a.length){var r=i.apply(null,a);r&&e.push(r)}else if("object"===o)for(var b in a)n.call(a,b)&&a[b]&&e.push(b)}}return e.join(" ")}e.exports?(i.default=i,e.exports=i):void 0===(a=function(){return i}.apply(t,[]))||(e.exports=a)}()},488:function(e,t,n){"use strict";n(23),n(17),n(18);var a=n(0),i=n.n(a),o=n(487),r=n.n(o),b=n(120),l=n.n(b),c=37,s=39;t.a=function(e){var t=e.block,n=e.children,o=e.defaultValue,b=e.values,p=Object(a.useState)(o),u=p[0],d=p[1],m=[];return i.a.createElement("div",null,i.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:r()("tabs",{"tabs--block":t})},b.map((function(e){var t=e.value,n=e.label;return i.a.createElement("li",{role:"tab",tabIndex:"0","aria-selected":u===t,className:r()("tab-item",l.a.tabItem,{"tab-item--active":u===t}),key:t,ref:function(e){return m.push(e)},onKeyDown:function(e){return function(e,t,n){switch(n.keyCode){case s:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case c:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(m,e.target,e)},onFocus:function(){return d(t)},onClick:function(){return d(t)}},n)}))),i.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},a.Children.toArray(n).filter((function(e){return e.props.value===u}))[0]))}},489:function(e,t,n){"use strict";var a=n(0),i=n.n(a);t.a=function(e){return i.a.createElement("div",null,e.children)}}}]);