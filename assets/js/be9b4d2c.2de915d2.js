"use strict";(self.webpackChunkreact_navigation_website_next=self.webpackChunkreact_navigation_website_next||[]).push([[57807],{1559:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>c,default:()=>g,frontMatter:()=>s,metadata:()=>l,toc:()=>d});var a=t(85893),o=t(11151),i=t(74866),r=t(85162);const s={id:"tab-based-navigation",title:"Tab navigation",sidebar_label:"Tab navigation"},c=void 0,l={id:"tab-based-navigation",title:"Tab navigation",description:"Possibly the most common style of navigation in mobile apps is tab-based navigation. This can be tabs on the bottom of the screen or on the top below the header (or even instead of a header).",source:"@site/versioned_docs/version-7.x/tab-based-navigation.md",sourceDirName:".",slug:"/tab-based-navigation",permalink:"/docs/7.x/tab-based-navigation",draft:!1,unlisted:!1,editUrl:"https://github.com/react-navigation/react-navigation.github.io/edit/main/versioned_docs/version-7.x/tab-based-navigation.md",tags:[],version:"7.x",frontMatter:{id:"tab-based-navigation",title:"Tab navigation",sidebar_label:"Tab navigation"},sidebar:"docs",previous:{title:"Next steps",permalink:"/docs/7.x/next-steps"},next:{title:"Drawer navigation",permalink:"/docs/7.x/drawer-based-navigation"}},u={},d=[{value:"Minimal example of tab-based navigation",id:"minimal-example-of-tab-based-navigation",level:2},{value:"Customizing the appearance",id:"customizing-the-appearance",level:2},{value:"Add badges to icons",id:"add-badges-to-icons",level:2},{value:"Jumping between tabs",id:"jumping-between-tabs",level:2},{value:"A stack navigator for each tab",id:"a-stack-navigator-for-each-tab",level:2},{value:"Why do we need a TabNavigator instead of TabBarIOS or some other component?",id:"why-do-we-need-a-tabnavigator-instead-of-tabbarios-or-some-other-component",level:2},{value:"A tab navigator contains a stack and you want to hide the tab bar on specific screens",id:"a-tab-navigator-contains-a-stack-and-you-want-to-hide-the-tab-bar-on-specific-screens",level:2}];function m(e){const n={a:"a",code:"code",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.p,{children:"Possibly the most common style of navigation in mobile apps is tab-based navigation. This can be tabs on the bottom of the screen or on the top below the header (or even instead of a header)."}),"\n",(0,a.jsxs)(n.p,{children:["This guide covers ",(0,a.jsx)(n.a,{href:"/docs/7.x/bottom-tab-navigator",children:(0,a.jsx)(n.code,{children:"createBottomTabNavigator"})}),". Before continuing, first install ",(0,a.jsx)(n.a,{href:"https://github.com/react-navigation/react-navigation/tree/main/packages/bottom-tabs",children:(0,a.jsx)(n.code,{children:"@react-navigation/bottom-tabs"})}),":"]}),"\n",(0,a.jsxs)(i.Z,{groupId:"npm2yarn",children:[(0,a.jsx)(r.Z,{value:"npm",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"npm install @react-navigation/bottom-tabs@next\n"})})}),(0,a.jsx)(r.Z,{value:"yarn",label:"Yarn",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"yarn add @react-navigation/bottom-tabs@next\n"})})}),(0,a.jsx)(r.Z,{value:"pnpm",label:"pnpm",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"pnpm add @react-navigation/bottom-tabs@next\n"})})})]}),"\n",(0,a.jsx)(n.h2,{id:"minimal-example-of-tab-based-navigation",children:"Minimal example of tab-based navigation"}),"\n",(0,a.jsxs)(i.Z,{groupId:"config",queryString:"config",children:[(0,a.jsx)(r.Z,{value:"static",label:"Static",default:!0,children:(0,a.jsx)(n.pre,{"data-name":"Tab based navigation","data-snack":"true","data-version":"7",children:(0,a.jsx)(n.code,{className:"language-js",metastring:'name="Tab based navigation" snack version=7',children:"import * as React from 'react';\nimport { View, Text } from 'react-native';\nimport { createStaticNavigation } from '@react-navigation/native';\nimport { createBottomTabNavigator } from '@react-navigation/bottom-tabs';\n\nfunction HomeScreen() {\n  return (\n    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>\n      <Text>Home!</Text>\n    </View>\n  );\n}\n\nfunction SettingsScreen() {\n  return (\n    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>\n      <Text>Settings!</Text>\n    </View>\n  );\n}\n\nconst RootTabs = createBottomTabNavigator({\n  screens: {\n    Home: HomeScreen,\n    Settings: SettingsScreen,\n  },\n});\n\nconst Navigation = createStaticNavigation(RootTabs);\n\nexport default function App() {\n  return <Navigation />;\n}\n"})})}),(0,a.jsx)(r.Z,{value:"dynamic",label:"Dynamic",children:(0,a.jsx)(n.pre,{"data-name":"Tab based navigation","data-snack":"true","data-version":"7",children:(0,a.jsx)(n.code,{className:"language-js",metastring:'name="Tab based navigation" snack version=7',children:"import * as React from 'react';\nimport { Text, View } from 'react-native';\nimport { NavigationContainer } from '@react-navigation/native';\nimport { createBottomTabNavigator } from '@react-navigation/bottom-tabs';\n\nfunction HomeScreen() {\n  return (\n    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>\n      <Text>Home!</Text>\n    </View>\n  );\n}\n\nfunction SettingsScreen() {\n  return (\n    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>\n      <Text>Settings!</Text>\n    </View>\n  );\n}\n\nconst Tab = createBottomTabNavigator();\n\nfunction RootTabs() {\n  return (\n    <Tab.Navigator>\n      <Tab.Screen name=\"Home\" component={HomeScreen} />\n      <Tab.Screen name=\"Settings\" component={SettingsScreen} />\n    </Tab.Navigator>\n  );\n}\n\nexport default function App() {\n  return (\n    <NavigationContainer>\n      <RootTabs />\n    </NavigationContainer>\n  );\n}\n"})})})]}),"\n",(0,a.jsx)(n.h2,{id:"customizing-the-appearance",children:"Customizing the appearance"}),"\n",(0,a.jsxs)(n.p,{children:["This is similar to how you would customize a stack navigator \u2014 there are some properties that are set when you initialize the tab navigator and others that can be customized per-screen in ",(0,a.jsx)(n.code,{children:"options"}),"."]}),"\n",(0,a.jsxs)(i.Z,{groupId:"config",queryString:"config",children:[(0,a.jsx)(r.Z,{value:"static",label:"Static",default:!0,children:(0,a.jsx)(n.pre,{"data-name":"Tab based navigation","data-snack":"true","data-version":"7","data-dependencies":"@expo/vector-icons,@expo/vector-icons/Ionicons",children:(0,a.jsx)(n.code,{className:"language-js",metastring:'name="Tab based navigation" snack version=7 dependencies=@expo/vector-icons,@expo/vector-icons/Ionicons',children:"import * as React from 'react';\nimport { View, Text } from 'react-native';\nimport { createStaticNavigation } from '@react-navigation/native';\nimport { createBottomTabNavigator } from '@react-navigation/bottom-tabs';\n// codeblock-focus-start\n// You can import Ionicons from @expo/vector-icons/Ionicons if you use Expo or\n// react-native-vector-icons/Ionicons otherwise.\nimport Ionicons from 'react-native-vector-icons/Ionicons';\n\n// codeblock-focus-end\n\nfunction HomeScreen() {\n  return (\n    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>\n      <Text>Home!</Text>\n    </View>\n  );\n}\n\nfunction SettingsScreen() {\n  return (\n    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>\n      <Text>Settings!</Text>\n    </View>\n  );\n}\n\n// codeblock-focus-start\nconst RootTabs = createBottomTabNavigator({\n  screenOptions: ({ route }) => ({\n    // highlight-start\n    tabBarIcon: ({ focused, color, size }) => {\n      let iconName;\n\n      if (route.name === 'Home') {\n        iconName = focused\n          ? 'ios-information-circle'\n          : 'ios-information-circle-outline';\n      } else if (route.name === 'Settings') {\n        iconName = focused ? 'ios-list' : 'ios-list-outline';\n      }\n\n      // You can return any component that you like here!\n      return <Ionicons name={iconName} size={size} color={color} />;\n    },\n    // highlight-end\n    tabBarActiveTintColor: 'tomato',\n    tabBarInactiveTintColor: 'gray',\n  }),\n  screens: {\n    Home: HomeScreen,\n    Settings: SettingsScreen,\n  },\n});\n// codeblock-focus-end\n\nconst Navigation = createStaticNavigation(RootTabs);\n\nexport default function App() {\n  return <Navigation />;\n}\n"})})}),(0,a.jsx)(r.Z,{value:"dynamic",label:"Dynamic",children:(0,a.jsx)(n.pre,{"data-name":"Tab based navigation","data-snack":"true","data-version":"7","data-dependencies":"@expo/vector-icons,@expo/vector-icons/Ionicons",children:(0,a.jsx)(n.code,{className:"language-js",metastring:'name="Tab based navigation" snack version=7 dependencies=@expo/vector-icons,@expo/vector-icons/Ionicons',children:"import * as React from 'react';\nimport { Text, View } from 'react-native';\nimport { NavigationContainer } from '@react-navigation/native';\nimport { createBottomTabNavigator } from '@react-navigation/bottom-tabs';\n// codeblock-focus-start\n// You can import Ionicons from @expo/vector-icons/Ionicons if you use Expo or\n// react-native-vector-icons/Ionicons otherwise.\nimport Ionicons from 'react-native-vector-icons/Ionicons';\n\n// codeblock-focus-end\n\nfunction HomeScreen() {\n  return (\n    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>\n      <Text>Home!</Text>\n    </View>\n  );\n}\n\nfunction SettingsScreen() {\n  return (\n    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>\n      <Text>Settings!</Text>\n    </View>\n  );\n}\n\nconst Tab = createBottomTabNavigator();\n\n// codeblock-focus-start\nfunction RootTabs() {\n  return (\n    <Tab.Navigator\n      screenOptions={({ route }) => ({\n        // highlight-start\n        tabBarIcon: ({ focused, color, size }) => {\n          let iconName;\n\n          if (route.name === 'Home') {\n            iconName = focused\n              ? 'ios-information-circle'\n              : 'ios-information-circle-outline';\n          } else if (route.name === 'Settings') {\n            iconName = focused ? 'ios-list' : 'ios-list-outline';\n          }\n\n          // You can return any component that you like here!\n          return <Ionicons name={iconName} size={size} color={color} />;\n        },\n        // highlight-end\n        tabBarActiveTintColor: 'tomato',\n        tabBarInactiveTintColor: 'gray',\n      })}\n    >\n      <Tab.Screen name=\"Home\" component={HomeScreen} />\n      <Tab.Screen name=\"Settings\" component={SettingsScreen} />\n    </Tab.Navigator>\n  );\n}\n// codeblock-focus-end\n\nexport default function App() {\n  return (\n    <NavigationContainer>\n      <RootTabs />\n    </NavigationContainer>\n  );\n}\n"})})})]}),"\n",(0,a.jsx)(n.p,{children:"Let's dissect this:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"tabBarIcon"})," is a supported option in bottom tab navigator. So we know we can use it on our screen components in the ",(0,a.jsx)(n.code,{children:"options"})," prop, but in this case chose to put it in the ",(0,a.jsx)(n.code,{children:"screenOptions"})," prop of ",(0,a.jsx)(n.code,{children:"Tab.Navigator"})," in order to centralize the icon configuration for convenience."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"tabBarIcon"})," is a function that is given the ",(0,a.jsx)(n.code,{children:"focused"})," state, ",(0,a.jsx)(n.code,{children:"color"}),", and ",(0,a.jsx)(n.code,{children:"size"})," params. If you take a peek further down in the configuration you will see ",(0,a.jsx)(n.code,{children:"tabBarActiveTintColor"})," and ",(0,a.jsx)(n.code,{children:"tabBarInactiveTintColor"}),". These default to the iOS platform defaults, but you can change them here. The ",(0,a.jsx)(n.code,{children:"color"})," that is passed through to the ",(0,a.jsx)(n.code,{children:"tabBarIcon"})," is either the active or inactive one, depending on the ",(0,a.jsx)(n.code,{children:"focused"})," state (focused is active). The ",(0,a.jsx)(n.code,{children:"size"})," is the size of the icon expected by the tab bar."]}),"\n",(0,a.jsxs)(n.li,{children:["Read the ",(0,a.jsx)(n.a,{href:"/docs/7.x/bottom-tab-navigator",children:"full API reference"})," for further information on ",(0,a.jsx)(n.code,{children:"createBottomTabNavigator"})," configuration options."]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"add-badges-to-icons",children:"Add badges to icons"}),"\n",(0,a.jsxs)(n.p,{children:["Sometimes we want to add badges to some icons. You can use the ",(0,a.jsxs)(n.a,{href:"/docs/7.x/bottom-tab-navigator#tabbarbadge",children:[(0,a.jsx)(n.code,{children:"tabBarBadge"})," option"]})," to do it:"]}),"\n",(0,a.jsxs)(i.Z,{groupId:"config",queryString:"config",children:[(0,a.jsx)(r.Z,{value:"static",label:"Static",default:!0,children:(0,a.jsx)(n.pre,{"data-name":"Tab based navigation","data-snack":"true","data-version":"7",children:(0,a.jsx)(n.code,{className:"language-js",metastring:'name="Tab based navigation" snack version=7',children:"import * as React from 'react';\nimport { View, Text } from 'react-native';\nimport { createStaticNavigation } from '@react-navigation/native';\nimport { createBottomTabNavigator } from '@react-navigation/bottom-tabs';\n\nfunction HomeScreen() {\n  return (\n    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>\n      <Text>Home!</Text>\n    </View>\n  );\n}\n\nfunction SettingsScreen() {\n  return (\n    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>\n      <Text>Settings!</Text>\n    </View>\n  );\n}\n\n// codeblock-focus-start\nconst RootTabs = createBottomTabNavigator({\n  screens: {\n    Home: {\n      screen: HomeScreen,\n      options: {\n        // highlight-start\n        tabBarBadge: 3,\n        // highlight-end\n      },\n    },\n    Settings: SettingsScreen,\n  },\n});\n// codeblock-focus-end\n\nconst Navigation = createStaticNavigation(RootTabs);\n\nexport default function App() {\n  return <Navigation />;\n}\n"})})}),(0,a.jsx)(r.Z,{value:"dynamic",label:"Dynamic",children:(0,a.jsx)(n.pre,{"data-name":"Tab based navigation","data-snack":"true","data-version":"7",children:(0,a.jsx)(n.code,{className:"language-js",metastring:'name="Tab based navigation" snack version=7',children:"import * as React from 'react';\nimport { Text, View } from 'react-native';\nimport { NavigationContainer } from '@react-navigation/native';\nimport { createBottomTabNavigator } from '@react-navigation/bottom-tabs';\n\nfunction HomeScreen() {\n  return (\n    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>\n      <Text>Home!</Text>\n    </View>\n  );\n}\n\nfunction SettingsScreen() {\n  return (\n    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>\n      <Text>Settings!</Text>\n    </View>\n  );\n}\n\nconst Tab = createBottomTabNavigator();\n\n// codeblock-focus-start\nfunction RootTabs() {\n  return (\n    <Tab.Navigator>\n      <Tab.Screen\n        name=\"Home\"\n        component={HomeScreen}\n        options={{\n          // highlight-start\n          tabBarBadge: 3,\n          // highlight-end\n        }}\n      />\n      <Tab.Screen name=\"Settings\" component={SettingsScreen} />\n    </Tab.Navigator>\n  );\n}\n// codeblock-focus-end\n\nexport default function App() {\n  return (\n    <NavigationContainer>\n      <RootTabs />\n    </NavigationContainer>\n  );\n}\n"})})})]}),"\n",(0,a.jsxs)(n.p,{children:["From UI perspective this component is ready to use, but you still need to find some way to pass down the badge count properly from somewhere else, like using ",(0,a.jsx)(n.a,{href:"https://reactjs.org/docs/context.html",children:"React Context"}),", ",(0,a.jsx)(n.a,{href:"https://redux.js.org/",children:"Redux"}),", ",(0,a.jsx)(n.a,{href:"https://mobx.js.org/",children:"MobX"})," or ",(0,a.jsx)(n.a,{href:"https://github.com/facebook/react-native/blob/master/Libraries/vendor/emitter/EventEmitter.js",children:"event emitters"}),"."]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"Tabs with badges",src:t(73580).Z+"",width:"320",height:"569"})}),"\n",(0,a.jsx)(n.h2,{id:"jumping-between-tabs",children:"Jumping between tabs"}),"\n",(0,a.jsxs)(n.p,{children:["Switching from one tab to another has a familiar API \u2014 ",(0,a.jsx)(n.code,{children:"navigation.navigate"}),"."]}),"\n",(0,a.jsx)("samp",{id:"tab-based-navigation-switching"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"function HomeScreen({ navigation }) {\n  return (\n    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>\n      <Text>Home!</Text>\n      <Button\n        title=\"Go to Settings\"\n        onPress={() => navigation.navigate('Settings')}\n      />\n    </View>\n  );\n}\n\nfunction SettingsScreen({ navigation }) {\n  return (\n    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>\n      <Text>Settings!</Text>\n      <Button title=\"Go to Home\" onPress={() => navigation.navigate('Home')} />\n    </View>\n  );\n}\n"})}),"\n",(0,a.jsx)(n.h2,{id:"a-stack-navigator-for-each-tab",children:"A stack navigator for each tab"}),"\n",(0,a.jsx)(n.p,{children:"Usually tabs don't just display one screen \u2014 for example, on your Twitter feed, you can tap on a tweet and it brings you to a new screen within that tab with all of the replies. You can think of this as there being separate navigation stacks within each tab, and that's exactly how we will model it in React Navigation."}),"\n",(0,a.jsx)("samp",{id:"tab-based-navigation-stack"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"import * as React from 'react';\nimport { Button, Text, View } from 'react-native';\nimport { NavigationContainer } from '@react-navigation/native';\nimport { createNativeStackNavigator } from '@react-navigation/native-stack';\nimport { createBottomTabNavigator } from '@react-navigation/bottom-tabs';\n\nfunction DetailsScreen() {\n  return (\n    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>\n      <Text>Details!</Text>\n    </View>\n  );\n}\n\nfunction HomeScreen({ navigation }) {\n  return (\n    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>\n      <Text>Home screen</Text>\n      <Button\n        title=\"Go to Details\"\n        onPress={() => navigation.navigate('Details')}\n      />\n    </View>\n  );\n}\n\nfunction SettingsScreen({ navigation }) {\n  return (\n    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>\n      <Text>Settings screen</Text>\n      <Button\n        title=\"Go to Details\"\n        onPress={() => navigation.navigate('Details')}\n      />\n    </View>\n  );\n}\n\nconst HomeStack = createNativeStackNavigator();\n\nfunction HomeStackScreen() {\n  return (\n    <HomeStack.Navigator>\n      <HomeStack.Screen name=\"Home\" component={HomeScreen} />\n      <HomeStack.Screen name=\"Details\" component={DetailsScreen} />\n    </HomeStack.Navigator>\n  );\n}\n\nconst SettingsStack = createNativeStackNavigator();\n\nfunction SettingsStackScreen() {\n  return (\n    <SettingsStack.Navigator>\n      <SettingsStack.Screen name=\"Settings\" component={SettingsScreen} />\n      <SettingsStack.Screen name=\"Details\" component={DetailsScreen} />\n    </SettingsStack.Navigator>\n  );\n}\n\nconst Tab = createBottomTabNavigator();\n\nexport default function App() {\n  return (\n    <NavigationContainer>\n      <Tab.Navigator screenOptions={{ headerShown: false }}>\n        <Tab.Screen name=\"Home\" component={HomeStackScreen} />\n        <Tab.Screen name=\"Settings\" component={SettingsStackScreen} />\n      </Tab.Navigator>\n    </NavigationContainer>\n  );\n}\n"})}),"\n",(0,a.jsx)(n.h2,{id:"why-do-we-need-a-tabnavigator-instead-of-tabbarios-or-some-other-component",children:"Why do we need a TabNavigator instead of TabBarIOS or some other component?"}),"\n",(0,a.jsx)(n.p,{children:"It's common to attempt to use a standalone tab bar component without integrating it into the navigation library you use in your app. In some cases, this works fine! You should be warned, however, that you may run into some frustrating unanticipated issues when doing this."}),"\n",(0,a.jsx)(n.p,{children:'For example, React Navigation\'s tab navigator takes care of handling the Android back button for you, while standalone components typically do not. Additionally, it is more difficult for you (as the developer) to perform actions such as "jump to this tab and then go to this screen" if you need to call into two distinct APIs for it. Lastly, mobile user interfaces have numerous small design details that require that certain components are aware of the layout or presence of other components \u2014 for example, if you have a translucent tab bar, content should scroll underneath it and the scroll view should have an inset on the bottom equal to the height of the tab bar so you can see all of the content. Double tapping the tab bar should make the active navigation stack pop to the top of the stack, and doing it again should scroll the active scroll view in that stack scroll to the top. While not all of these behaviors are implemented out of the box yet with React Navigation, they will be and you will not get any of this if you use a standalone tab view component.'}),"\n",(0,a.jsx)(n.h2,{id:"a-tab-navigator-contains-a-stack-and-you-want-to-hide-the-tab-bar-on-specific-screens",children:"A tab navigator contains a stack and you want to hide the tab bar on specific screens"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.a,{href:"/docs/7.x/hiding-tabbar-in-screens",children:"See the documentation here"})})]})}function g(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(m,{...e})}):m(e)}},85162:(e,n,t)=>{t.d(n,{Z:()=>r});t(67294);var a=t(86010);const o={tabItem:"tabItem_Ymn6"};var i=t(85893);function r(e){let{children:n,hidden:t,className:r}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,a.Z)(o.tabItem,r),hidden:t,children:n})}},74866:(e,n,t)=>{t.d(n,{Z:()=>j});var a=t(67294),o=t(86010),i=t(12466),r=t(16550),s=t(20469),c=t(91980),l=t(67392),u=t(50012);function d(e){var n,t;return null!=(n=null==(t=a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:t.filter(Boolean))?n:[]}function m(e){const{values:n,children:t}=e;return(0,a.useMemo)((()=>{const e=null!=n?n:function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:a,default:o}}=e;return{value:n,label:t,attributes:a,default:o}}))}(t);return function(e){const n=(0,l.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error('Docusaurus error: Duplicate values "'+n.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[n,t])}function g(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function h(e){let{queryString:n=!1,groupId:t}=e;const o=(0,r.k6)(),i=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=t?t:null}({queryString:n,groupId:t});return[(0,c._X)(i),(0,a.useCallback)((e=>{if(!i)return;const n=new URLSearchParams(o.location.search);n.set(i,e),o.replace({...o.location,search:n.toString()})}),[i,o])]}function b(e){const{defaultValue:n,queryString:t=!1,groupId:o}=e,i=m(e),[r,c]=(0,a.useState)((()=>function(e){var n;let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!g({value:t,tabValues:a}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+t+'" but none of its children has the corresponding value. Available values are: '+a.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return t}const o=null!=(n=a.find((e=>e.default)))?n:a[0];if(!o)throw new Error("Unexpected error: 0 tabValues");return o.value}({defaultValue:n,tabValues:i}))),[l,d]=h({queryString:t,groupId:o}),[b,v]=function(e){let{groupId:n}=e;const t=function(e){return e?"docusaurus.tab."+e:null}(n),[o,i]=(0,u.Nk)(t);return[o,(0,a.useCallback)((e=>{t&&i.set(e)}),[t,i])]}({groupId:o}),f=(()=>{const e=null!=l?l:b;return g({value:e,tabValues:i})?e:null})();(0,s.Z)((()=>{f&&c(f)}),[f]);return{selectedValue:r,selectValue:(0,a.useCallback)((e=>{if(!g({value:e,tabValues:i}))throw new Error("Can't select invalid tab value="+e);c(e),d(e),v(e)}),[d,v,i]),tabValues:i}}var v=t(72389);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var p=t(85893);function x(e){let{className:n,block:t,selectedValue:a,selectValue:r,tabValues:s}=e;const c=[],{blockElementScrollPositionUntilNextRender:l}=(0,i.o5)(),u=e=>{const n=e.currentTarget,t=c.indexOf(n),o=s[t].value;o!==a&&(l(n),r(o))},d=e=>{var n;let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{var a;const n=c.indexOf(e.currentTarget)+1;t=null!=(a=c[n])?a:c[0];break}case"ArrowLeft":{var o;const n=c.indexOf(e.currentTarget)-1;t=null!=(o=c[n])?o:c[c.length-1];break}}null==(n=t)||n.focus()};return(0,p.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":t},n),children:s.map((e=>{let{value:n,label:t,attributes:i}=e;return(0,p.jsx)("li",{role:"tab",tabIndex:a===n?0:-1,"aria-selected":a===n,ref:e=>c.push(e),onKeyDown:d,onClick:u,...i,className:(0,o.Z)("tabs__item",f.tabItem,null==i?void 0:i.className,{"tabs__item--active":a===n}),children:null!=t?t:n},n)}))})}function T(e){let{lazy:n,children:t,selectedValue:o}=e;const i=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=i.find((e=>e.props.value===o));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,p.jsx)("div",{className:"margin-top--md",children:i.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==o})))})}function S(e){const n=b(e);return(0,p.jsxs)("div",{className:(0,o.Z)("tabs-container",f.tabList),children:[(0,p.jsx)(x,{...e,...n}),(0,p.jsx)(T,{...e,...n})]})}function j(e){const n=(0,v.Z)();return(0,p.jsx)(S,{...e,children:d(e.children)},String(n))}},73580:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/tabs-badges-94675c8566521656189422362d92cf9e.png"},11151:(e,n,t)=>{t.d(n,{Z:()=>s,a:()=>r});var a=t(67294);const o={},i=a.createContext(o);function r(e){const n=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),a.createElement(i.Provider,{value:n},e.children)}}}]);