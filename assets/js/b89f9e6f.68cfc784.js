"use strict";(self.webpackChunkreact_navigation_website_next=self.webpackChunkreact_navigation_website_next||[]).push([[20259],{8242:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>c,default:()=>b,frontMatter:()=>s,metadata:()=>l,toc:()=>d});var a=t(85893),r=t(11151),i=t(74866),o=t(85162);const s={id:"hiding-tabbar-in-screens",title:"Hiding tab bar in specific screens",sidebar_label:"Hiding tab bar in specific screens"},c=void 0,l={id:"hiding-tabbar-in-screens",title:"Hiding tab bar in specific screens",description:"Sometimes we may want to hide the tab bar in specific screens in a stack navigator nested in a tab navigator. Let's say we have 5 screens",source:"@site/versioned_docs/version-7.x/hiding-tabbar-in-screens.md",sourceDirName:".",slug:"/hiding-tabbar-in-screens",permalink:"/docs/7.x/hiding-tabbar-in-screens",draft:!1,unlisted:!1,editUrl:"https://github.com/react-navigation/react-navigation.github.io/edit/main/versioned_docs/version-7.x/hiding-tabbar-in-screens.md",tags:[],version:"7.x",frontMatter:{id:"hiding-tabbar-in-screens",title:"Hiding tab bar in specific screens",sidebar_label:"Hiding tab bar in specific screens"},sidebar:"docs",previous:{title:"Supporting safe areas",permalink:"/docs/7.x/handling-safe-area"},next:{title:"Different status bar configuration based on route",permalink:"/docs/7.x/status-bar"}},u={},d=[];function m(e){const n={code:"code",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.p,{children:["Sometimes we may want to hide the tab bar in specific screens in a stack navigator nested in a tab navigator. Let's say we have 5 screens: ",(0,a.jsx)(n.code,{children:"Home"}),", ",(0,a.jsx)(n.code,{children:"Feed"}),", ",(0,a.jsx)(n.code,{children:"Notifications"}),", ",(0,a.jsx)(n.code,{children:"Profile"})," and ",(0,a.jsx)(n.code,{children:"Settings"}),", and your navigation structure looks like this:"]}),"\n",(0,a.jsxs)(i.Z,{groupId:"config",queryString:"config",children:[(0,a.jsx)(o.Z,{value:"static",label:"Static",default:!0,children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",metastring:'name="Hiding tab bar in screens"',children:"const HomeStack = createNativeStackNavigator({\n  screens: {\n    Home: Home,\n    Profile: Profile,\n    Settings: Settings,\n  },\n});\n\nconst MyTabs = createBottomTabNavigator({\n  screens: {\n    Home: HomeStack,\n    Feed: Feed,\n    Notifications: Notifications,\n  },\n});\n\nconst Navigation = createStaticNavigation(MyTabs);\n\nexport default function App() {\n  return <Navigation />;\n}\n"})})}),(0,a.jsx)(o.Z,{value:"dynamic",label:"Dynamic",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:'function HomeStack() {\n  return (\n    <Stack.Navigator>\n      <Stack.Screen name="Home" component={Home} />\n      <Stack.Screen name="Profile" component={Profile} />\n      <Stack.Screen name="Settings" component={Settings} />\n    </Stack.Navigator>\n  );\n}\n\nfunction App() {\n  return (\n    <NavigationContainer>\n      <Tab.Navigator>\n        <Tab.Screen name="Home" component={HomeStack} />\n        <Tab.Screen name="Feed" component={Feed} />\n        <Tab.Screen name="Notifications" component={Notifications} />\n      </Tab.Navigator>\n    </NavigationContainer>\n  );\n}\n'})})})]}),"\n",(0,a.jsxs)(n.p,{children:["With this structure, when we navigate to the ",(0,a.jsx)(n.code,{children:"Profile"})," or ",(0,a.jsx)(n.code,{children:"Settings"})," screen, the tab bar will still stay visible over those screens."]}),"\n",(0,a.jsxs)(n.p,{children:["But if we want to show the tab bar only on the ",(0,a.jsx)(n.code,{children:"Home"}),", ",(0,a.jsx)(n.code,{children:"Feed"})," and ",(0,a.jsx)(n.code,{children:"Notifications"})," screens, but not on the ",(0,a.jsx)(n.code,{children:"Profile"})," and ",(0,a.jsx)(n.code,{children:"Settings"})," screens, we'll need to change the navigation structure. The easiest way to achieve this is to nest the tab navigator inside the first screen of the stack instead of nesting stack inside tab navigator:"]}),"\n",(0,a.jsxs)(i.Z,{groupId:"config",queryString:"config",children:[(0,a.jsx)(o.Z,{value:"static",label:"Static",default:!0,children:(0,a.jsx)(n.pre,{"data-name":"Hiding tabbar","data-snack":"true","data-version":"7",children:(0,a.jsx)(n.code,{className:"language-js",metastring:'name="Hiding tabbar" snack version=7',children:"import * as React from 'react';\nimport { Text, View, Button } from 'react-native';\nimport {\n  createStaticNavigation,\n  useNavigation,\n} from '@react-navigation/native';\nimport { createNativeStackNavigator } from '@react-navigation/native-stack';\nimport { createBottomTabNavigator } from '@react-navigation/bottom-tabs';\n\nfunction EmptyScreen() {\n  return <View />;\n}\n\nfunction Home() {\n  const navigation = useNavigation();\n\n  return (\n    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>\n      <Text>Home Screen</Text>\n      <Button\n        title=\"Go to Profile\"\n        onPress={() => navigation.navigate('Profile')}\n      />\n      <Button\n        title=\"Go to Settings\"\n        onPress={() => navigation.navigate('Settings')}\n      />\n    </View>\n  );\n}\n\n// codeblock-focus-start\nconst HomeTabs = createBottomTabNavigator({\n  screens: {\n    Home: Home,\n    Feed: EmptyScreen,\n    Notifications: EmptyScreen,\n  },\n});\n\nconst RootStack = createNativeStackNavigator({\n  screens: {\n    Home: HomeTabs,\n    Profile: EmptyScreen,\n    Settings: EmptyScreen,\n  },\n});\n\n// codeblock-focus-end\n\nconst Navigation = createStaticNavigation(RootStack);\n\nexport default function App() {\n  return <Navigation />;\n}\n"})})}),(0,a.jsx)(o.Z,{value:"dynamic",label:"Dynamic",default:!0,children:(0,a.jsx)(n.pre,{"data-name":"Hiding tabbar","data-snack":"true","data-version":"7",children:(0,a.jsx)(n.code,{className:"language-js",metastring:'name="Hiding tabbar" snack version=7',children:"import * as React from 'react';\nimport { Text, View, Button } from 'react-native';\nimport { NavigationContainer } from '@react-navigation/native';\nimport { createNativeStackNavigator } from '@react-navigation/native-stack';\nimport { createBottomTabNavigator } from '@react-navigation/bottom-tabs';\n\nconst Tab = createBottomTabNavigator();\nconst Stack = createNativeStackNavigator();\n\nfunction EmptyScreen() {\n  return <View />;\n}\n\nfunction Home({ navigation }) {\n  return (\n    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>\n      <Text>Home Screen</Text>\n      <Button\n        title=\"Go to Profile\"\n        onPress={() => navigation.navigate('Profile')}\n      />\n      <Button\n        title=\"Go to Settings\"\n        onPress={() => navigation.navigate('Settings')}\n      />\n    </View>\n  );\n}\n\n// codeblock-focus-start\nfunction HomeTabs() {\n  return (\n    <Tab.Navigator>\n      <Tab.Screen name=\"Home\" component={Home} />\n      <Tab.Screen name=\"Feed\" component={EmptyScreen} />\n      <Tab.Screen name=\"Notifications\" component={EmptyScreen} />\n    </Tab.Navigator>\n  );\n}\n\nfunction App() {\n  return (\n    <NavigationContainer>\n      <Stack.Navigator>\n        <Stack.Screen name=\"Home\" component={HomeTabs} />\n        <Stack.Screen name=\"Profile\" component={EmptyScreen} />\n        <Stack.Screen name=\"Settings\" component={EmptyScreen} />\n      </Stack.Navigator>\n    </NavigationContainer>\n  );\n}\n// codeblock-focus-end\n\nexport default App;\n"})})})]}),"\n",(0,a.jsxs)(n.p,{children:["After re-organizing the navigation structure, now if we navigate to the ",(0,a.jsx)(n.code,{children:"Profile"})," or ",(0,a.jsx)(n.code,{children:"Settings"})," screens, the tab bar won't be visible over the screen anymore."]})]})}function b(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(m,{...e})}):m(e)}},85162:(e,n,t)=>{t.d(n,{Z:()=>o});t(67294);var a=t(86010);const r={tabItem:"tabItem_Ymn6"};var i=t(85893);function o(e){let{children:n,hidden:t,className:o}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,a.Z)(r.tabItem,o),hidden:t,children:n})}},74866:(e,n,t)=>{t.d(n,{Z:()=>k});var a=t(67294),r=t(86010),i=t(12466),o=t(16550),s=t(20469),c=t(91980),l=t(67392),u=t(50012);function d(e){var n,t;return null!=(n=null==(t=a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:t.filter(Boolean))?n:[]}function m(e){const{values:n,children:t}=e;return(0,a.useMemo)((()=>{const e=null!=n?n:function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:a,default:r}}=e;return{value:n,label:t,attributes:a,default:r}}))}(t);return function(e){const n=(0,l.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error('Docusaurus error: Duplicate values "'+n.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[n,t])}function b(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function g(e){let{queryString:n=!1,groupId:t}=e;const r=(0,o.k6)(),i=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=t?t:null}({queryString:n,groupId:t});return[(0,c._X)(i),(0,a.useCallback)((e=>{if(!i)return;const n=new URLSearchParams(r.location.search);n.set(i,e),r.replace({...r.location,search:n.toString()})}),[i,r])]}function f(e){const{defaultValue:n,queryString:t=!1,groupId:r}=e,i=m(e),[o,c]=(0,a.useState)((()=>function(e){var n;let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!b({value:t,tabValues:a}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+t+'" but none of its children has the corresponding value. Available values are: '+a.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return t}const r=null!=(n=a.find((e=>e.default)))?n:a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:i}))),[l,d]=g({queryString:t,groupId:r}),[f,v]=function(e){let{groupId:n}=e;const t=function(e){return e?"docusaurus.tab."+e:null}(n),[r,i]=(0,u.Nk)(t);return[r,(0,a.useCallback)((e=>{t&&i.set(e)}),[t,i])]}({groupId:r}),p=(()=>{const e=null!=l?l:f;return b({value:e,tabValues:i})?e:null})();(0,s.Z)((()=>{p&&c(p)}),[p]);return{selectedValue:o,selectValue:(0,a.useCallback)((e=>{if(!b({value:e,tabValues:i}))throw new Error("Can't select invalid tab value="+e);c(e),d(e),v(e)}),[d,v,i]),tabValues:i}}var v=t(72389);const p={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var h=t(85893);function S(e){let{className:n,block:t,selectedValue:a,selectValue:o,tabValues:s}=e;const c=[],{blockElementScrollPositionUntilNextRender:l}=(0,i.o5)(),u=e=>{const n=e.currentTarget,t=c.indexOf(n),r=s[t].value;r!==a&&(l(n),o(r))},d=e=>{var n;let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{var a;const n=c.indexOf(e.currentTarget)+1;t=null!=(a=c[n])?a:c[0];break}case"ArrowLeft":{var r;const n=c.indexOf(e.currentTarget)-1;t=null!=(r=c[n])?r:c[c.length-1];break}}null==(n=t)||n.focus()};return(0,h.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":t},n),children:s.map((e=>{let{value:n,label:t,attributes:i}=e;return(0,h.jsx)("li",{role:"tab",tabIndex:a===n?0:-1,"aria-selected":a===n,ref:e=>c.push(e),onKeyDown:d,onClick:u,...i,className:(0,r.Z)("tabs__item",p.tabItem,null==i?void 0:i.className,{"tabs__item--active":a===n}),children:null!=t?t:n},n)}))})}function x(e){let{lazy:n,children:t,selectedValue:r}=e;const i=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=i.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,h.jsx)("div",{className:"margin-top--md",children:i.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==r})))})}function N(e){const n=f(e);return(0,h.jsxs)("div",{className:(0,r.Z)("tabs-container",p.tabList),children:[(0,h.jsx)(S,{...e,...n}),(0,h.jsx)(x,{...e,...n})]})}function k(e){const n=(0,v.Z)();return(0,h.jsx)(N,{...e,children:d(e.children)},String(n))}},11151:(e,n,t)=>{t.d(n,{Z:()=>s,a:()=>o});var a=t(67294);const r={},i=a.createContext(r);function o(e){const n=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),a.createElement(i.Provider,{value:n},e.children)}}}]);