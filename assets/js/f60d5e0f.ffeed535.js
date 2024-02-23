"use strict";(self.webpackChunkreact_navigation_website_next=self.webpackChunkreact_navigation_website_next||[]).push([[16163],{52581:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>m,frontMatter:()=>s,metadata:()=>l,toc:()=>u});var a=t(85893),i=t(11151),o=t(74866),r=t(85162);const s={id:"handling-safe-area",title:"Supporting safe areas",sidebar_label:"Supporting safe areas"},c=void 0,l={id:"handling-safe-area",title:"Supporting safe areas",description:"By default, React Navigation tries to ensure that the elements of the navigators display correctly on devices with notches (e.g. iPhone X) and UI elements which may overlap the app content. Such items include:",source:"@site/versioned_docs/version-7.x/handling-safe-area.md",sourceDirName:".",slug:"/handling-safe-area",permalink:"/docs/7.x/handling-safe-area",draft:!1,unlisted:!1,editUrl:"https://github.com/react-navigation/react-navigation.github.io/edit/main/versioned_docs/version-7.x/handling-safe-area.md",tags:[],version:"7.x",frontMatter:{id:"handling-safe-area",title:"Supporting safe areas",sidebar_label:"Supporting safe areas"},sidebar:"docs",previous:{title:"Authentication flows",permalink:"/docs/7.x/auth-flow"},next:{title:"Hiding tab bar in specific screens",permalink:"/docs/7.x/hiding-tabbar-in-screens"}},d={},u=[{value:"Hidden/Custom Header or Tab Bar",id:"hiddencustom-header-or-tab-bar",level:2},{value:"Landscape Mode",id:"landscape-mode",level:2},{value:"Use the hook for more control",id:"use-the-hook-for-more-control",level:2},{value:"Summary",id:"summary",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.p,{children:"By default, React Navigation tries to ensure that the elements of the navigators display correctly on devices with notches (e.g. iPhone X) and UI elements which may overlap the app content. Such items include:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Physical notches"}),"\n",(0,a.jsx)(n.li,{children:"Status bar overlay"}),"\n",(0,a.jsx)(n.li,{children:"Home activity indicator on iOS"}),"\n",(0,a.jsx)(n.li,{children:"Navigation bar on Android"}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:'The area not overlapped by such items is referred to as "safe area".'}),"\n",(0,a.jsx)(n.p,{children:"We try to apply proper insets on the UI elements of the navigators to avoid being overlapped by such items. The goal is to (a) maximize usage of the screen (b) without hiding content or making it difficult to interact with by having it obscured by a physical display cutout or some operating system UI."}),"\n",(0,a.jsx)(n.p,{children:"While React Navigation handles safe areas for the built-in UI elements by default, your own content may also need to handle it to ensure that content isn't hidden by these items."}),"\n",(0,a.jsx)(n.p,{children:"It's tempting to solve (a) by wrapping your entire app in a container with padding that ensures all content will not be occluded. But in doing so, we waste a bunch of space on the screen, as pictured in the image on the left below. What we ideally want is the image pictured on the right."}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"Notch on the iPhone X",src:t(82541).Z+"",width:"794",height:"785"})}),"\n",(0,a.jsxs)(n.p,{children:["While React Native exports a ",(0,a.jsx)(n.code,{children:"SafeAreaView"})," component, this component only supports iOS 10+ with no support for older iOS versions or Android. In addition, it also has some issues, i.e. if a screen containing safe area is animating, it causes jumpy behavior. So we recommend to use the ",(0,a.jsx)(n.code,{children:"useSafeAreaInsets"})," hook from the ",(0,a.jsx)(n.a,{href:"https://github.com/th3rdwave/react-native-safe-area-context",children:"react-native-safe-area-context"})," library to handle safe areas in a more reliable way."]}),"\n",(0,a.jsx)(n.admonition,{type:"warning",children:(0,a.jsxs)(n.p,{children:["The ",(0,a.jsx)(n.code,{children:"react-native-safe-area-context"})," library also exports a ",(0,a.jsx)(n.code,{children:"SafeAreaView"})," component. While it works on Android, it also has the same issues related to jumpy behavior when animating. So we recommend always using the ",(0,a.jsx)(n.code,{children:"useSafeAreaInsets"})," hook instead and avoid using the ",(0,a.jsx)(n.code,{children:"SafeAreaView"})," component."]})}),"\n",(0,a.jsx)(n.p,{children:"The rest of this guide gives more information on how to support safe areas in React Navigation."}),"\n",(0,a.jsx)(n.h2,{id:"hiddencustom-header-or-tab-bar",children:"Hidden/Custom Header or Tab Bar"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"Default React Navigation Behavior",src:t(93006).Z+"",width:"323",height:"700"})}),"\n",(0,a.jsx)(n.p,{children:"React Navigation handles safe area in the default header. However, if you're using a custom header, it's important to ensure your UI is within the safe area."}),"\n",(0,a.jsxs)(n.p,{children:["For example, if I render nothing for the ",(0,a.jsx)(n.code,{children:"header"})," or ",(0,a.jsx)(n.code,{children:"tabBar"}),", nothing renders"]}),"\n",(0,a.jsxs)(o.Z,{groupId:"config",queryString:"config",children:[(0,a.jsx)(r.Z,{value:"static",label:"Static",default:!0,children:(0,a.jsx)(n.pre,{"data-name":"Hidden components","data-snack":"true","data-version":"7",children:(0,a.jsx)(n.code,{className:"language-js",metastring:'name="Hidden components" snack version=7',children:"import * as React from 'react';\nimport { Text, View } from 'react-native';\nimport { createStaticNavigation } from '@react-navigation/native';\nimport { createBottomTabNavigator } from '@react-navigation/bottom-tabs';\nimport { createNativeStackNavigator } from '@react-navigation/native-stack';\n\nfunction Demo() {\n  return (\n    <View\n      style={{ flex: 1, justifyContent: 'space-between', alignItems: 'center' }}\n    >\n      <Text>This is top text.</Text>\n      <Text>This is bottom text.</Text>\n    </View>\n  );\n}\n\n// codeblock-focus-start\nconst MyTabs = createBottomTabNavigator({\n  initialRouteName: 'Analitics',\n  // highlight-start\n  tabBar: () => null,\n  screenOptions: {\n    headerShown: false,\n  },\n  // highlight-end\n  screens: {\n    Analitics: Demo,\n    Profile: Demo,\n  },\n});\n\nconst RootStack = createNativeStackNavigator({\n  initialRouteName: 'Home',\n  // highlight-start\n  screenOptions: {\n    headerShown: false,\n  },\n  // highlight-end\n  screens: {\n    Home: MyTabs,\n    Settings: Demo,\n  },\n});\n\n// codeblock-focus-end\n\nconst Navigation = createStaticNavigation(RootStack);\n\nexport default function App() {\n  return <Navigation />;\n}\n"})})}),(0,a.jsx)(r.Z,{value:"dynamic",label:"Dynamic",default:!0,children:(0,a.jsx)(n.pre,{"data-name":"Hidden components","data-snack":"true","data-version":"7",children:(0,a.jsx)(n.code,{className:"language-js",metastring:'name="Hidden components" snack version=7',children:"import * as React from 'react';\nimport { Text, View } from 'react-native';\nimport { NavigationContainer } from '@react-navigation/native';\nimport { createBottomTabNavigator } from '@react-navigation/bottom-tabs';\nimport { createNativeStackNavigator } from '@react-navigation/native-stack';\n\nfunction Demo() {\n  return (\n    <View\n      style={{ flex: 1, justifyContent: 'space-between', alignItems: 'center' }}\n    >\n      <Text>This is top text.</Text>\n      <Text>This is bottom text.</Text>\n    </View>\n  );\n}\nconst Stack = createNativeStackNavigator();\nconst Tab = createBottomTabNavigator();\n\nexport default function App() {\n  return (\n    <NavigationContainer>\n      <Stack.Navigator\n        initialRouteName=\"Home\"\n        screenOptions={{ headerShown: false }}\n      >\n        <Stack.Screen name=\"Home\">\n          {() => (\n            <Tab.Navigator\n              initialRouteName=\"Analitics\"\n              tabBar={() => null}\n              screenOptions={{ headerShown: false }}\n            >\n              <Tab.Screen name=\"Analitics\" component={Demo} />\n              <Tab.Screen name=\"Profile\" component={Demo} />\n            </Tab.Navigator>\n          )}\n        </Stack.Screen>\n\n        <Stack.Screen name=\"Settings\" component={Demo} />\n      </Stack.Navigator>\n    </NavigationContainer>\n  );\n}\n"})})})]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"Text hidden by iPhoneX UI elements",src:t(19860).Z+"",width:"323",height:"700"})}),"\n",(0,a.jsxs)(n.p,{children:["To fix this issue you can apply safe area insets on your content. This can be achieved using the ",(0,a.jsx)(n.code,{children:"useSafeAreaInsets"})," hook from the ",(0,a.jsx)(n.code,{children:"react-native-safe-area-context"})," library:"]}),"\n",(0,a.jsxs)(o.Z,{groupId:"config",queryString:"config",children:[(0,a.jsx)(r.Z,{value:"static",label:"Static",default:!0,children:(0,a.jsx)(n.pre,{"data-name":"Safe area example","data-snack":"true","data-version":"7",children:(0,a.jsx)(n.code,{className:"language-js",metastring:'name="Safe area example" snack version=7',children:"import * as React from 'react';\nimport { Text, View } from 'react-native';\nimport { createStaticNavigation } from '@react-navigation/native';\nimport { createBottomTabNavigator } from '@react-navigation/bottom-tabs';\nimport { createNativeStackNavigator } from '@react-navigation/native-stack';\nimport {\n  SafeAreaProvider,\n  useSafeAreaInsets,\n} from 'react-native-safe-area-context';\n\n// codeblock-focus-start\nfunction Demo() {\n  const insets = useSafeAreaInsets();\n\n  return (\n    <View\n      style={{\n        flex: 1,\n        justifyContent: 'space-between',\n        alignItems: 'center',\n        paddingTop: insets.top,\n        paddingBottom: insets.bottom,\n        paddingLeft: insets.left,\n        paddingRight: insets.right,\n      }}\n    >\n      <Text>This is top text.</Text>\n      <Text>This is bottom text.</Text>\n    </View>\n  );\n}\n// codeblock-focus-end\n\nconst MyTabs = createBottomTabNavigator({\n  initialRouteName: 'Analitics',\n  tabBar: () => null,\n  screenOptions: {\n    headerShown: false,\n  },\n  screens: {\n    Analitics: Demo,\n    Profile: Demo,\n  },\n});\n\nconst RootStack = createNativeStackNavigator({\n  initialRouteName: 'Home',\n  screenOptions: {\n    headerShown: false,\n  },\n  screens: {\n    Home: MyTabs,\n    Settings: Demo,\n  },\n});\n\n// codeblock-focus-start\n\nconst Navigation = createStaticNavigation(RootStack);\n\nexport default function App() {\n  return (\n    <SafeAreaProvider>\n      <Navigation />\n    </SafeAreaProvider>\n  );\n}\n// codeblock-focus-end\n"})})}),(0,a.jsx)(r.Z,{value:"dynamic",label:"Dynamic",default:!0,children:(0,a.jsx)(n.pre,{"data-name":"Safe area example","data-snack":"true","data-version":"7",children:(0,a.jsx)(n.code,{className:"language-js",metastring:'name="Safe area example" snack version=7',children:"import * as React from 'react';\nimport { View, Text } from 'react-native';\nimport { NavigationContainer } from '@react-navigation/native';\nimport { createBottomTabNavigator } from '@react-navigation/bottom-tabs';\nimport { createNativeStackNavigator } from '@react-navigation/native-stack';\nimport {\n  SafeAreaProvider,\n  useSafeAreaInsets,\n} from 'react-native-safe-area-context';\n\n// codeblock-focus-start\nfunction Demo() {\n  const insets = useSafeAreaInsets();\n\n  return (\n    <View\n      style={{\n        flex: 1,\n        justifyContent: 'space-between',\n        alignItems: 'center',\n        paddingTop: insets.top,\n        paddingBottom: insets.bottom,\n        paddingLeft: insets.left,\n        paddingRight: insets.right,\n      }}\n    >\n      <Text>This is top text.</Text>\n      <Text>This is bottom text.</Text>\n    </View>\n  );\n}\n// codeblock-focus-end\n\nconst Stack = createNativeStackNavigator();\nconst Tab = createBottomTabNavigator();\n\n// codeblock-focus-start\nexport default function App() {\n  return (\n    <SafeAreaProvider>\n      <NavigationContainer>\n        {/*(...) */}\n        // codeblock-focus-end\n        <Stack.Navigator\n          initialRouteName=\"Home\"\n          screenOptions={{ headerShown: false }}\n        >\n          <Stack.Screen name=\"Home\">\n            {() => (\n              <Tab.Navigator\n                initialRouteName=\"Analitics\"\n                tabBar={() => null}\n                screenOptions={{ headerShown: false }}\n              >\n                <Tab.Screen name=\"Analitics\" component={Demo} />\n                <Tab.Screen name=\"Profile\" component={Demo} />\n              </Tab.Navigator>\n            )}\n          </Stack.Screen>\n          <Stack.Screen name=\"Settings\" component={Demo} />\n        </Stack.Navigator>\n        // codeblock-focus-start\n      </NavigationContainer>\n    </SafeAreaProvider>\n  );\n}\n// codeblock-focus-end\n"})})})]}),"\n",(0,a.jsxs)(n.p,{children:["Make sure to wrap your app in ",(0,a.jsx)(n.code,{children:"SafeAreaProvider"})," as per the instructions ",(0,a.jsx)(n.a,{href:"https://github.com/th3rdwave/react-native-safe-area-context#usage",children:"here"}),"."]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"Content spaced correctly with safe area insets",src:t(52819).Z+"",width:"323",height:"700"})}),"\n",(0,a.jsx)(n.p,{children:"This will detect if the app is running on a device with notches, if so, ensure the content isn't hidden behind any hardware elements."}),"\n",(0,a.jsx)(n.h2,{id:"landscape-mode",children:"Landscape Mode"}),"\n",(0,a.jsx)(n.p,{children:"Even if you're using the default navigation bar and tab bar - if your application works in landscape mode it's important to ensure your content isn't hidden behind the sensor cluster."}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"App in landscape mode with text hidden",src:t(43559).Z+"",width:"2436",height:"1125"})}),"\n",(0,a.jsx)(n.p,{children:"To fix this you can, once again, apply safe area insets to your content. This will not conflict with the navigation bar nor the tab bar's default behavior in portrait mode."}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"App in landscape mode with text visible",src:t(42224).Z+"",width:"2436",height:"1125"})}),"\n",(0,a.jsx)(n.h2,{id:"use-the-hook-for-more-control",children:"Use the hook for more control"}),"\n",(0,a.jsxs)(n.p,{children:["In some cases you might need more control over which paddings are applied. For example, you can only apply the top and the bottom padding by changing the ",(0,a.jsx)(n.code,{children:"style"})," object:"]}),"\n",(0,a.jsxs)(o.Z,{groupId:"config",queryString:"config",children:[(0,a.jsx)(r.Z,{value:"static",label:"Static",children:(0,a.jsx)(n.pre,{"data-name":"useSafeAreaInsets hook","data-snack":"true","data-version":"7",children:(0,a.jsx)(n.code,{className:"language-js",metastring:'name="useSafeAreaInsets hook" snack version=7',children:"import * as React from 'react';\nimport { Text, View } from 'react-native';\nimport { createStaticNavigation } from '@react-navigation/native';\nimport { createBottomTabNavigator } from '@react-navigation/bottom-tabs';\nimport { createNativeStackNavigator } from '@react-navigation/native-stack';\n// codeblock-focus-start\nimport {\n  SafeAreaProvider,\n  useSafeAreaInsets,\n} from 'react-native-safe-area-context';\n\nfunction Demo() {\n  const insets = useSafeAreaInsets();\n  return (\n    <View\n      style={{\n        paddingTop: insets.top,\n        paddingBottom: insets.bottom,\n\n        flex: 1,\n        justifyContent: 'space-between',\n        alignItems: 'center',\n      }}\n    >\n      <Text>This is top text.</Text>\n      <Text>This is bottom text.</Text>\n    </View>\n  );\n}\n// codeblock-focus-end\n\nconst MyTabs = createBottomTabNavigator({\n  initialRouteName: 'Analitics',\n  tabBar: () => null,\n  screenOptions: {\n    headerShown: false,\n  },\n  screens: {\n    Analitics: Demo,\n    Profile: Demo,\n  },\n});\n\nconst RootStack = createNativeStackNavigator({\n  initialRouteName: 'Home',\n  screenOptions: {\n    headerShown: false,\n  },\n  screens: {\n    Home: MyTabs,\n    Settings: Demo,\n  },\n});\n\n// codeblock-focus-start\n\nconst Navigation = createStaticNavigation(RootStack);\n\nexport default function App() {\n  return (\n    <SafeAreaProvider>\n      <Navigation />\n    </SafeAreaProvider>\n  );\n}\n// codeblock-focus-end\n"})})}),(0,a.jsx)(r.Z,{value:"dynamic",label:"Dynamic",default:!0,children:(0,a.jsx)(n.pre,{"data-name":"useSafeAreaInsets hook","data-snack":"true","data-version":"7",children:(0,a.jsx)(n.code,{className:"language-js",metastring:'name="useSafeAreaInsets hook" snack version=7',children:"import * as React from 'react';\nimport { Text, View } from 'react-native';\nimport { NavigationContainer } from '@react-navigation/native';\nimport { createBottomTabNavigator } from '@react-navigation/bottom-tabs';\nimport { createStackNavigator } from '@react-navigation/stack';\n// codeblock-focus-start\nimport {\n  SafeAreaProvider,\n  useSafeAreaInsets,\n} from 'react-native-safe-area-context';\n\nfunction Demo() {\n  const insets = useSafeAreaInsets();\n  return (\n    <View\n      style={{\n        paddingTop: insets.top,\n        paddingBottom: insets.bottom,\n\n        flex: 1,\n        justifyContent: 'space-between',\n        alignItems: 'center',\n      }}\n    >\n      <Text>This is top text.</Text>\n      <Text>This is bottom text.</Text>\n    </View>\n  );\n}\n// codeblock-focus-end\n\nconst Stack = createStackNavigator();\nconst Tab = createBottomTabNavigator();\n\nexport default function App() {\n  return (\n    <SafeAreaProvider>\n      <NavigationContainer>\n        <Stack.Navigator\n          initialRouteName=\"Home\"\n          screenOptions={{ headerShown: false }}\n        >\n          <Stack.Screen name=\"Home\">\n            {() => (\n              <Tab.Navigator\n                initialRouteName=\"Analitics\"\n                tabBar={() => null}\n                screenOptions={{ headerShown: false }}\n              >\n                <Tab.Screen name=\"Analitics\" component={Demo} />\n                <Tab.Screen name=\"Profile\" component={Demo} />\n              </Tab.Navigator>\n            )}\n          </Stack.Screen>\n\n          <Stack.Screen name=\"Settings\" component={Demo} />\n        </Stack.Navigator>\n      </NavigationContainer>\n    </SafeAreaProvider>\n  );\n}\n"})})})]}),"\n",(0,a.jsxs)(n.p,{children:["Similarly, you could apply these paddings in ",(0,a.jsx)(n.code,{children:"contentContainerStyle"})," of ",(0,a.jsx)(n.code,{children:"FlatList"})," to have the content avoid the safe areas, but still show them under the statusbar and navigation bar when scrolling."]}),"\n",(0,a.jsx)(n.h2,{id:"summary",children:"Summary"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["Use ",(0,a.jsx)(n.code,{children:"useSafeAreaInsets"})," hook from ",(0,a.jsx)(n.code,{children:"react-native-safe-area-context"})," instead of ",(0,a.jsx)(n.code,{children:"SafeAreaView"})," component"]}),"\n",(0,a.jsxs)(n.li,{children:["Don't wrap your whole app in ",(0,a.jsx)(n.code,{children:"SafeAreaView"}),", instead apply the styles to content inside your screens"]}),"\n",(0,a.jsxs)(n.li,{children:["Apply only specific insets using the ",(0,a.jsx)(n.code,{children:"useSafeAreaInsets"})," hook for more control"]}),"\n"]})]})}function m(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},85162:(e,n,t)=>{t.d(n,{Z:()=>r});t(67294);var a=t(86010);const i={tabItem:"tabItem_Ymn6"};var o=t(85893);function r(e){let{children:n,hidden:t,className:r}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,a.Z)(i.tabItem,r),hidden:t,children:n})}},74866:(e,n,t)=>{t.d(n,{Z:()=>w});var a=t(67294),i=t(86010),o=t(12466),r=t(16550),s=t(20469),c=t(91980),l=t(67392),d=t(50012);function u(e){var n,t;return null!=(n=null==(t=a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:t.filter(Boolean))?n:[]}function h(e){const{values:n,children:t}=e;return(0,a.useMemo)((()=>{const e=null!=n?n:function(e){return u(e).map((e=>{let{props:{value:n,label:t,attributes:a,default:i}}=e;return{value:n,label:t,attributes:a,default:i}}))}(t);return function(e){const n=(0,l.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error('Docusaurus error: Duplicate values "'+n.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[n,t])}function m(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function p(e){let{queryString:n=!1,groupId:t}=e;const i=(0,r.k6)(),o=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=t?t:null}({queryString:n,groupId:t});return[(0,c._X)(o),(0,a.useCallback)((e=>{if(!o)return;const n=new URLSearchParams(i.location.search);n.set(o,e),i.replace({...i.location,search:n.toString()})}),[o,i])]}function f(e){const{defaultValue:n,queryString:t=!1,groupId:i}=e,o=h(e),[r,c]=(0,a.useState)((()=>function(e){var n;let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:a}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+t+'" but none of its children has the corresponding value. Available values are: '+a.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return t}const i=null!=(n=a.find((e=>e.default)))?n:a[0];if(!i)throw new Error("Unexpected error: 0 tabValues");return i.value}({defaultValue:n,tabValues:o}))),[l,u]=p({queryString:t,groupId:i}),[f,g]=function(e){let{groupId:n}=e;const t=function(e){return e?"docusaurus.tab."+e:null}(n),[i,o]=(0,d.Nk)(t);return[i,(0,a.useCallback)((e=>{t&&o.set(e)}),[t,o])]}({groupId:i}),v=(()=>{const e=null!=l?l:f;return m({value:e,tabValues:o})?e:null})();(0,s.Z)((()=>{v&&c(v)}),[v]);return{selectedValue:r,selectValue:(0,a.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error("Can't select invalid tab value="+e);c(e),u(e),g(e)}),[u,g,o]),tabValues:o}}var g=t(72389);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=t(85893);function x(e){let{className:n,block:t,selectedValue:a,selectValue:r,tabValues:s}=e;const c=[],{blockElementScrollPositionUntilNextRender:l}=(0,o.o5)(),d=e=>{const n=e.currentTarget,t=c.indexOf(n),i=s[t].value;i!==a&&(l(n),r(i))},u=e=>{var n;let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{var a;const n=c.indexOf(e.currentTarget)+1;t=null!=(a=c[n])?a:c[0];break}case"ArrowLeft":{var i;const n=c.indexOf(e.currentTarget)-1;t=null!=(i=c[n])?i:c[c.length-1];break}}null==(n=t)||n.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":t},n),children:s.map((e=>{let{value:n,label:t,attributes:o}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:a===n?0:-1,"aria-selected":a===n,ref:e=>c.push(e),onKeyDown:u,onClick:d,...o,className:(0,i.Z)("tabs__item",v.tabItem,null==o?void 0:o.className,{"tabs__item--active":a===n}),children:null!=t?t:n},n)}))})}function S(e){let{lazy:n,children:t,selectedValue:i}=e;const o=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=o.find((e=>e.props.value===i));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:o.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==i})))})}function y(e){const n=f(e);return(0,b.jsxs)("div",{className:(0,i.Z)("tabs-container",v.tabList),children:[(0,b.jsx)(x,{...e,...n}),(0,b.jsx)(S,{...e,...n})]})}function w(e){const n=(0,g.Z)();return(0,b.jsx)(y,{...e,children:u(e.children)},String(n))}},82541:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/00-intro-4709ed78711b21c7bd54d2a1385262bb.png"},93006:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/01-iphonex-default-2588bf4cb73433282b14319e54ea4815.png"},19860:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/02-iphonex-content-hidden-2a5db62e9fa6340cfb3e8f5a4250b7d4.png"},52819:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/03-iphonex-content-fixed-cb656e6a268a30af3f9aae2b6f3d4c64.png"},43559:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/04-iphonex-landscape-hidden-113cbaf522b57ff8fbfdf4b1b39411d3.png"},42224:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/05-iphonex-landscape-fixed-0d90c3fe5813cdd8664946c5873d7f57.png"},11151:(e,n,t)=>{t.d(n,{Z:()=>s,a:()=>r});var a=t(67294);const i={},o=a.createContext(i);function r(e){const n=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),a.createElement(o.Provider,{value:n},e.children)}}}]);