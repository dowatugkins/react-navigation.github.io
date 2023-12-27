"use strict";(self.webpackChunkreact_navigation_website_next=self.webpackChunkreact_navigation_website_next||[]).push([[46800],{80341:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>m,frontMatter:()=>s,metadata:()=>l,toc:()=>d});var a=n(85893),o=n(11151),r=n(74866),i=n(85162);const s={id:"header-buttons",title:"Header buttons",sidebar_label:"Header buttons"},c=void 0,l={id:"header-buttons",title:"Header buttons",description:"Now that we know how to customize the look of our headers, let's make them sentient! Actually perhaps that's ambitious, let's just make them able to respond to our touches in very well-defined ways.",source:"@site/versioned_docs/version-7.x/header-buttons.md",sourceDirName:".",slug:"/header-buttons",permalink:"/docs/7.x/header-buttons",draft:!1,unlisted:!1,editUrl:"https://github.com/react-navigation/react-navigation.github.io/edit/main/versioned_docs/version-7.x/header-buttons.md",tags:[],version:"7.x",frontMatter:{id:"header-buttons",title:"Header buttons",sidebar_label:"Header buttons"},sidebar:"docs",previous:{title:"Configuring the header bar",permalink:"/docs/7.x/headers"},next:{title:"Nesting navigators",permalink:"/docs/7.x/nesting-navigators"}},u={},d=[{value:"Adding a button to the header",id:"adding-a-button-to-the-header",level:2},{value:"Header interaction with its screen component",id:"header-interaction-with-its-screen-component",level:2},{value:"Customizing the back button",id:"customizing-the-back-button",level:2},{value:"Overriding the back button",id:"overriding-the-back-button",level:2},{value:"Summary",id:"summary",level:2}];function h(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.p,{children:"Now that we know how to customize the look of our headers, let's make them sentient! Actually perhaps that's ambitious, let's just make them able to respond to our touches in very well-defined ways."}),"\n",(0,a.jsx)(t.h2,{id:"adding-a-button-to-the-header",children:"Adding a button to the header"}),"\n",(0,a.jsx)(t.p,{children:"The most common way to interact with a header is by tapping on a button either to the left or the right of the title. Let's add a button to the right side of the header (one of the most difficult places to touch on your entire screen, depending on finger and phone size, but also a normal place to put buttons)."}),"\n",(0,a.jsxs)(r.Z,{groupId:"config",queryString:"config",children:[(0,a.jsx)(i.Z,{value:"static",label:"Static",default:!0,children:(0,a.jsx)(t.pre,{"data-name":"Header button","data-snack":"true","data-version":"7",children:(0,a.jsx)(t.code,{className:"language-js",metastring:'name="Header button" snack version=7',children:"import * as React from 'react';\nimport { Text, View, Button } from 'react-native';\nimport { createStaticNavigation } from '@react-navigation/native';\nimport { createNativeStackNavigator } from '@react-navigation/native-stack';\n\nfunction HomeScreen() {\n  return (\n    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>\n      <Text>Home Screen</Text>\n    </View>\n  );\n}\n\n// codeblock-focus-start\nconst MyStack = createNativeStackNavigator({\n  screens: {\n    Home: {\n      screen: HomeScreen,\n      options: {\n        // highlight-start\n        headerRight: () => (\n          <Button onPress={() => alert('This is a button!')} title=\"Info\" />\n        ),\n        // highlight-end\n      },\n    },\n  },\n});\n// codeblock-focus-end\n\nconst Navigation = createStaticNavigation(MyStack);\n\nexport default function App() {\n  return <Navigation />;\n}\n"})})}),(0,a.jsx)(i.Z,{value:"dynamic",label:"Dynamic",children:(0,a.jsx)(t.pre,{"data-name":"Header button","data-snack":"true","data-version":"7",children:(0,a.jsx)(t.code,{className:"language-js",metastring:'name="Header button" snack version=7',children:"import * as React from 'react';\nimport { Text, View, Button } from 'react-native';\nimport { NavigationContainer } from '@react-navigation/native';\nimport { createNativeStackNavigator } from '@react-navigation/native-stack';\n\nfunction HomeScreen() {\n  return (\n    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>\n      <Text>Home Screen</Text>\n    </View>\n  );\n}\n\nconst Stack = createNativeStackNavigator();\n\n// codeblock-focus-start\nfunction MyStack() {\n  return (\n    <Stack.Navigator>\n      <Stack.Screen\n        name=\"Home\"\n        component={HomeScreen}\n        options={{\n          // highlight-start\n          headerRight: () => (\n            <Button onPress={() => alert('This is a button!')} title=\"Info\" />\n          ),\n          // highlight-end\n        }}\n      />\n    </Stack.Navigator>\n  );\n}\n// codeblock-focus-end\n\nexport default function App() {\n  return (\n    <NavigationContainer>\n      <MyStack />\n    </NavigationContainer>\n  );\n}\n"})})})]}),"\n",(0,a.jsxs)(t.p,{children:["When we define our button this way, the ",(0,a.jsx)(t.code,{children:"this"})," variable in ",(0,a.jsx)(t.code,{children:"options"})," is ",(0,a.jsx)(t.em,{children:"not"})," the ",(0,a.jsx)(t.code,{children:"HomeScreen"})," instance, so you can't call ",(0,a.jsx)(t.code,{children:"setState"})," or any instance methods on it. This is pretty important because it's common to want the buttons in your header to interact with the screen that the header belongs to. So, we will look how to do this next."]}),"\n",(0,a.jsx)(t.admonition,{type:"tip",children:(0,a.jsxs)(t.p,{children:["Note that a community-developed library for rendering buttons in the header with the correct styling is available: ",(0,a.jsx)(t.a,{href:"https://github.com/vonovak/react-navigation-header-buttons",children:"react-navigation-header-buttons"}),"."]})}),"\n",(0,a.jsx)(t.h2,{id:"header-interaction-with-its-screen-component",children:"Header interaction with its screen component"}),"\n",(0,a.jsxs)(t.p,{children:["In some cases, components in the header need to interact with the screen component. For this use case, we need to use ",(0,a.jsx)(t.code,{children:"navigation.setOptions"})," to update our options. By using ",(0,a.jsx)(t.code,{children:"navigation.setOptions"})," inside the screen component, we get access to screen's props, state, context etc."]}),"\n",(0,a.jsxs)(r.Z,{groupId:"config",queryString:"config",children:[(0,a.jsx)(i.Z,{value:"static",label:"Static",default:!0,children:(0,a.jsx)(t.pre,{"data-name":"Header button","data-snack":"true","data-version":"7",children:(0,a.jsx)(t.code,{className:"language-js",metastring:'name="Header button" snack version=7',children:"import * as React from 'react';\nimport { Text, View, Button } from 'react-native';\nimport {\n  createStaticNavigation,\n  useNavigation,\n} from '@react-navigation/native';\nimport { createNativeStackNavigator } from '@react-navigation/native-stack';\n\n// codeblock-focus-start\nfunction HomeScreen() {\n  const navigation = useNavigation();\n  const [count, setCount] = React.useState(0);\n\n  React.useEffect(() => {\n    // Use `setOptions` to update the button that we previously specified\n    // Now the button includes an `onPress` handler to update the count\n    // highlight-start\n    navigation.setOptions({\n      headerRight: () => (\n        <Button onPress={() => setCount((c) => c + 1)} title=\"Update count\" />\n      ),\n    });\n    // highlight-end\n  }, [navigation]);\n\n  return <Text>Count: {count}</Text>;\n}\n\nconst MyStack = createNativeStackNavigator({\n  screens: {\n    Home: {\n      screen: HomeScreen,\n      options: {\n        // Add a placeholder button without the `onPress` to avoid flicker\n        // highlight-next-line\n        headerRight: () => <Button title=\"Update count\" />,\n      },\n    },\n  },\n});\n// codeblock-focus-end\n\nconst Navigation = createStaticNavigation(MyStack);\n\nexport default function App() {\n  return <Navigation />;\n}\n"})})}),(0,a.jsx)(i.Z,{value:"dynamic",label:"Dynamic",children:(0,a.jsx)(t.pre,{"data-name":"Header button","data-snack":"true","data-version":"7",children:(0,a.jsx)(t.code,{className:"language-js",metastring:'name="Header button" snack version=7',children:"import * as React from 'react';\nimport { Text, View, Button } from 'react-native';\nimport { NavigationContainer, useNavigation } from '@react-navigation/native';\nimport { createNativeStackNavigator } from '@react-navigation/native-stack';\n\nconst Stack = createNativeStackNavigator();\n\n// codeblock-focus-start\nfunction HomeScreen() {\n  const navigation = useNavigation();\n  const [count, setCount] = React.useState(0);\n\n  React.useEffect(() => {\n    // Use `setOptions` to update the button that we previously specified\n    // Now the button includes an `onPress` handler to update the count\n    // highlight-start\n    navigation.setOptions({\n      headerRight: () => (\n        <Button onPress={() => setCount((c) => c + 1)} title=\"Update count\" />\n      ),\n    });\n    // highlight-end\n  }, [navigation]);\n\n  return <Text>Count: {count}</Text>;\n}\n\nfunction MyStack() {\n  return (\n    <Stack.Navigator>\n      <Stack.Screen\n        name=\"Home\"\n        component={HomeScreen}\n        options={{\n          // Add a placeholder button without the `onPress` to avoid flicker\n          // highlight-next-line\n          headerRight: () => <Button title=\"Update count\" />,\n        }}\n      />\n    </Stack.Navigator>\n  );\n}\n// codeblock-focus-end\n\nexport default function App() {\n  return (\n    <NavigationContainer>\n      <MyStack />\n    </NavigationContainer>\n  );\n}\n"})})})]}),"\n",(0,a.jsxs)(t.p,{children:["Here we update the ",(0,a.jsx)(t.code,{children:"headerRight"})," with a button with ",(0,a.jsx)(t.code,{children:"onPress"})," handler that has access to the component's state and can update it."]}),"\n",(0,a.jsx)(t.h2,{id:"customizing-the-back-button",children:"Customizing the back button"}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.code,{children:"createNativeStackNavigator"}),' provides the platform-specific defaults for the back button. On iOS this includes a label next to the button, which shows the title of the previous screen when the title fits in the available space, otherwise it says "Back".']}),"\n",(0,a.jsxs)(t.p,{children:["You can change the label behavior with ",(0,a.jsx)(t.code,{children:"headerBackTitle"})," and style it with ",(0,a.jsx)(t.code,{children:"headerBackTitleStyle"})," (",(0,a.jsx)(t.a,{href:"/docs/7.x/native-stack-navigator#headerbacktitle",children:"read more"}),")."]}),"\n",(0,a.jsxs)(t.p,{children:["To customize the back button image, you can use ",(0,a.jsx)(t.code,{children:"headerBackImageSource"})," (",(0,a.jsx)(t.a,{href:"/docs/7.x/native-stack-navigator#headerbackimagesource",children:"read more"}),")."]}),"\n",(0,a.jsx)(t.h2,{id:"overriding-the-back-button",children:"Overriding the back button"}),"\n",(0,a.jsx)(t.p,{children:"The back button will be rendered automatically in a stack navigator whenever it is possible for the user to go back from their current screen \u2014 in other words, the back button will be rendered whenever there is more than one screen in the stack."}),"\n",(0,a.jsxs)(t.p,{children:["Generally, this is what you want. But it's possible that in some circumstances that you want to customize the back button more than you can through the options mentioned above, in which case you can set the ",(0,a.jsx)(t.code,{children:"headerLeft"})," option to a React Element that will be rendered, just as we did with ",(0,a.jsx)(t.code,{children:"headerRight"}),". Alternatively, the ",(0,a.jsx)(t.code,{children:"headerLeft"})," option also accepts a React Component, which can be used, for example, for overriding the onPress behavior of the back button. Read more about this in the ",(0,a.jsx)(t.a,{href:"/docs/7.x/native-stack-navigator#headerleft",children:"api reference"}),"."]}),"\n",(0,a.jsx)(t.h2,{id:"summary",children:"Summary"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["You can set buttons in the header through the ",(0,a.jsx)(t.code,{children:"headerLeft"})," and ",(0,a.jsx)(t.code,{children:"headerRight"})," properties in ",(0,a.jsx)(t.code,{children:"options"}),"."]}),"\n",(0,a.jsxs)(t.li,{children:["The back button is fully customizable with ",(0,a.jsx)(t.code,{children:"headerLeft"}),", but if you just want to change the title or image, there are other ",(0,a.jsx)(t.code,{children:"options"})," for that \u2014 ",(0,a.jsx)(t.code,{children:"headerBackTitle"}),", ",(0,a.jsx)(t.code,{children:"headerBackTitleStyle"}),", and ",(0,a.jsx)(t.code,{children:"headerBackImageSource"}),"."]}),"\n",(0,a.jsxs)(t.li,{children:["You can use a callback for the options prop to access ",(0,a.jsx)(t.code,{children:"navigation"})," and ",(0,a.jsx)(t.code,{children:"route"})," objects."]}),"\n"]})]})}function m(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},85162:(e,t,n)=>{n.d(t,{Z:()=>i});n(67294);var a=n(86010);const o={tabItem:"tabItem_Ymn6"};var r=n(85893);function i(e){let{children:t,hidden:n,className:i}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,a.Z)(o.tabItem,i),hidden:n,children:t})}},74866:(e,t,n)=>{n.d(t,{Z:()=>j});var a=n(67294),o=n(86010),r=n(12466),i=n(16550),s=n(20469),c=n(91980),l=n(67392),u=n(50012);function d(e){var t,n;return null!=(t=null==(n=a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:n.filter(Boolean))?t:[]}function h(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=null!=t?t:function(e){return d(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:o}}=e;return{value:t,label:n,attributes:a,default:o}}))}(n);return function(e){const t=(0,l.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function p(e){let{queryString:t=!1,groupId:n}=e;const o=(0,i.k6)(),r=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=n?n:null}({queryString:t,groupId:n});return[(0,c._X)(r),(0,a.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(o.location.search);t.set(r,e),o.replace({...o.location,search:t.toString()})}),[r,o])]}function b(e){const{defaultValue:t,queryString:n=!1,groupId:o}=e,r=h(e),[i,c]=(0,a.useState)((()=>function(e){var t;let{defaultValue:n,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:a}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+a.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}const o=null!=(t=a.find((e=>e.default)))?t:a[0];if(!o)throw new Error("Unexpected error: 0 tabValues");return o.value}({defaultValue:t,tabValues:r}))),[l,d]=p({queryString:n,groupId:o}),[b,v]=function(e){let{groupId:t}=e;const n=function(e){return e?"docusaurus.tab."+e:null}(t),[o,r]=(0,u.Nk)(n);return[o,(0,a.useCallback)((e=>{n&&r.set(e)}),[n,r])]}({groupId:o}),g=(()=>{const e=null!=l?l:b;return m({value:e,tabValues:r})?e:null})();(0,s.Z)((()=>{g&&c(g)}),[g]);return{selectedValue:i,selectValue:(0,a.useCallback)((e=>{if(!m({value:e,tabValues:r}))throw new Error("Can't select invalid tab value="+e);c(e),d(e),v(e)}),[d,v,r]),tabValues:r}}var v=n(72389);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var f=n(85893);function x(e){let{className:t,block:n,selectedValue:a,selectValue:i,tabValues:s}=e;const c=[],{blockElementScrollPositionUntilNextRender:l}=(0,r.o5)(),u=e=>{const t=e.currentTarget,n=c.indexOf(t),o=s[n].value;o!==a&&(l(t),i(o))},d=e=>{var t;let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{var a;const t=c.indexOf(e.currentTarget)+1;n=null!=(a=c[t])?a:c[0];break}case"ArrowLeft":{var o;const t=c.indexOf(e.currentTarget)-1;n=null!=(o=c[t])?o:c[c.length-1];break}}null==(t=n)||t.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t),children:s.map((e=>{let{value:t,label:n,attributes:r}=e;return(0,f.jsx)("li",{role:"tab",tabIndex:a===t?0:-1,"aria-selected":a===t,ref:e=>c.push(e),onKeyDown:d,onClick:u,...r,className:(0,o.Z)("tabs__item",g.tabItem,null==r?void 0:r.className,{"tabs__item--active":a===t}),children:null!=n?n:t},t)}))})}function k(e){let{lazy:t,children:n,selectedValue:o}=e;const r=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=r.find((e=>e.props.value===o));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:r.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==o})))})}function w(e){const t=b(e);return(0,f.jsxs)("div",{className:(0,o.Z)("tabs-container",g.tabList),children:[(0,f.jsx)(x,{...e,...t}),(0,f.jsx)(k,{...e,...t})]})}function j(e){const t=(0,v.Z)();return(0,f.jsx)(w,{...e,children:d(e.children)},String(t))}},11151:(e,t,n)=>{n.d(t,{Z:()=>s,a:()=>i});var a=n(67294);const o={},r=a.createContext(o);function i(e){const t=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),a.createElement(r.Provider,{value:t},e.children)}}}]);