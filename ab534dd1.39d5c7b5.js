(window.webpackJsonp=window.webpackJsonp||[]).push([[252],{390:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return u}));var r=n(2),a=n(9),o=(n(0),n(504)),i={id:"preventing-going-back",title:"Preventing going back",sidebar_label:"Preventing going back"},c={id:"version-5.x/preventing-going-back",isDocsHomePage:!1,title:"Preventing going back",description:"Sometimes you may want to prevent the user from leaving a screen, for example, if there are unsaved changes, you might want to show a confirmation dialog.",source:"@site/versioned_docs/version-5.x/preventing-going-back.md",permalink:"/docs/preventing-going-back",editUrl:"https://github.com/react-navigation/react-navigation.github.io/edit/source/versioned_docs/version-5.x/preventing-going-back.md",version:"5.x",sidebar_label:"Preventing going back",sidebar:"version-5.x/docs",previous:{title:"Custom Android back button behavior",permalink:"/docs/custom-android-back-button-handling"},next:{title:"Call a function when focused screen changes",permalink:"/docs/function-after-focusing-screen"}},s=[],l={rightToc:s};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Sometimes you may want to prevent the user from leaving a screen, for example, if there are unsaved changes, you might want to show a confirmation dialog."),Object(o.b)("p",null,"You can achieve it by using the ",Object(o.b)("inlineCode",{parentName:"p"},"beforeRemove")," event. This event is triggered whenever a screen is being removed. For example:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"The user pressed back button on a screen in a stack"),Object(o.b)("li",{parentName:"ul"},"The user performed a swipe back gesture"),Object(o.b)("li",{parentName:"ul"},"Some action such as ",Object(o.b)("inlineCode",{parentName:"li"},"pop")," or ",Object(o.b)("inlineCode",{parentName:"li"},"reset")," was dispatched which removes the screen from the state")),Object(o.b)("p",null,"The event receives the ",Object(o.b)("inlineCode",{parentName:"p"},"action")," that triggered it. You can dispatch this action again after confirmation, or check the action object to determine what to do."),Object(o.b)("p",null,"Example:"),Object(o.b)("samp",{id:"prevent-going-back"}),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"function EditText({ navigation }) {\n  const [text, setText] = React.useState('');\n  const hasUnsavedChanges = Boolean(text);\n\n  React.useEffect(\n    () =>\n      navigation.addListener('beforeRemove', (e) => {\n        if (!hasUnsavedChanges) {\n          // If we don't have unsaved changes, then we don't need to do anything\n          return;\n        }\n\n        // Prevent default behavior of leaving the screen\n        e.preventDefault();\n\n        // Prompt the user before leaving the screen\n        Alert.alert(\n          'Discard changes?',\n          'You have unsaved changes. Are you sure to discard them and leave the screen?',\n          [\n            { text: \"Don't leave\", style: 'cancel', onPress: () => {} },\n            {\n              text: 'Discard',\n              style: 'destructive',\n              // If the user confirmed, then we dispatch the action we blocked earlier\n              // This will continue the action that had triggered the removal of the screen\n              onPress: () => navigation.dispatch(e.data.action),\n            },\n          ]\n        );\n      }),\n    [navigation, hasUnsavedChanges]\n  );\n\n  return (\n    <TextInput\n      value={text}\n      placeholder=\"Type something\u2026\"\n      onChangeText={setText}\n    />\n  );\n}\n")),Object(o.b)("p",null,"Previously, the way to do this was to:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Override back button in header"),Object(o.b)("li",{parentName:"ul"},"Disable back swipe gesture"),Object(o.b)("li",{parentName:"ul"},"Override system back button/gesture on Android")),Object(o.b)("p",null,"However, this approach has many important differences in addition to being less code:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"It's not coupled to any specific buttons, going back from custom buttons will trigger it as well"),Object(o.b)("li",{parentName:"ul"},"It's not coupled to any specific actions, any action that removes the route from state will trigger it"),Object(o.b)("li",{parentName:"ul"},"It works across nested navigators, e.g. if the screen is being removed due to an action in parent navigator"),Object(o.b)("li",{parentName:"ul"},"User can still swipe back in the stack navigator, however, the swipe will be cancelled if the event was prevented"),Object(o.b)("li",{parentName:"ul"},"It's possible to continue the same action that triggered the event")),Object(o.b)("p",null,"There are couple of edge cases to be aware of when using this approach. Specifically, the event only checks if the route is removed from the navigation state when an action is handled. If the change was from other reasons, e.g. - screen getting unmounted due to parent being unmounted, conditionally rendering different screens based on state not managed by React Navigation, using ",Object(o.b)("inlineCode",{parentName:"p"},"unmountOnBlur")," etc., then this event won't be triggered. It's impossible to prevent unmounting a component."))}u.isMDXComponent=!0},504:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return g}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),u=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=u(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),b=u(n),d=r,g=b["".concat(i,".").concat(d)]||b[d]||p[d]||o;return n?a.a.createElement(g,c(c({ref:t},l),{},{components:n})):a.a.createElement(g,c({ref:t},l))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);