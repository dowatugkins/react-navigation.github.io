"use strict";(self.webpackChunkreact_navigation_website_next=self.webpackChunkreact_navigation_website_next||[]).push([[71725],{55607:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>s,default:()=>g,frontMatter:()=>c,metadata:()=>l,toc:()=>d});var a=t(85893),o=t(11151),i=t(74866),r=t(85162);const c={id:"navigation-lifecycle",title:"Navigation lifecycle",sidebar_label:"Navigation lifecycle"},s=void 0,l={id:"navigation-lifecycle",title:"Navigation lifecycle",description:"In a previous section, we worked with a stack navigator that has two screens (Home and Profile) and learned how to use navigation.navigate('RouteName') to navigate between the screens.",source:"@site/versioned_docs/version-7.x/navigation-lifecycle.md",sourceDirName:".",slug:"/navigation-lifecycle",permalink:"/docs/7.x/navigation-lifecycle",draft:!1,unlisted:!1,editUrl:"https://github.com/react-navigation/react-navigation.github.io/edit/main/versioned_docs/version-7.x/navigation-lifecycle.md",tags:[],version:"7.x",frontMatter:{id:"navigation-lifecycle",title:"Navigation lifecycle",sidebar_label:"Navigation lifecycle"},sidebar:"docs",previous:{title:"Nesting navigators",permalink:"/docs/7.x/nesting-navigators"},next:{title:"Next steps",permalink:"/docs/7.x/next-steps"}},u={},d=[{value:"Example scenario",id:"example-scenario",level:2},{value:"React Navigation lifecycle events",id:"react-navigation-lifecycle-events",level:2},{value:"Summary",id:"summary",level:2}];function f(e){const n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.p,{children:["In a previous section, we worked with a stack navigator that has two screens (",(0,a.jsx)(n.code,{children:"Home"})," and ",(0,a.jsx)(n.code,{children:"Profile"}),") and learned how to use ",(0,a.jsx)(n.code,{children:"navigation.navigate('RouteName')"})," to navigate between the screens."]}),"\n",(0,a.jsxs)(n.p,{children:["An important question in this context is: what happens with ",(0,a.jsx)(n.code,{children:"Home"})," when we navigate away from it, or when we come back to it? How does a screen find out that a user is leaving it or coming back to it?"]}),"\n",(0,a.jsxs)(n.p,{children:["If you are coming to react-navigation from a web background, you may assume that when the user navigates from route ",(0,a.jsx)(n.code,{children:"A"})," to route ",(0,a.jsx)(n.code,{children:"B"}),", ",(0,a.jsx)(n.code,{children:"A"})," will unmount (its ",(0,a.jsx)(n.code,{children:"componentWillUnmount"})," is called) and ",(0,a.jsx)(n.code,{children:"A"})," will mount again when the user comes back to it. While these React lifecycle methods are still valid and are used in React Navigation, their usage differs from the web. This is driven by the more complex needs of mobile navigation."]}),"\n",(0,a.jsx)(n.h2,{id:"example-scenario",children:"Example scenario"}),"\n",(0,a.jsxs)(n.p,{children:["Consider a stack navigator with 2 screens: ",(0,a.jsx)(n.code,{children:"Home"})," and ",(0,a.jsx)(n.code,{children:"Profile"}),". When we first render the navigator, the ",(0,a.jsx)(n.code,{children:"Home"})," screen is mounted, i.e. its ",(0,a.jsx)(n.code,{children:"useEffect"})," or ",(0,a.jsx)(n.code,{children:"componentDidMount"})," is called. When we navigate to ",(0,a.jsx)(n.code,{children:"Profile"}),", now ",(0,a.jsx)(n.code,{children:"Profile"})," is mounted and its ",(0,a.jsx)(n.code,{children:"useEffect"})," or ",(0,a.jsx)(n.code,{children:"componentDidMount"})," is called. But nothing happens to ",(0,a.jsx)(n.code,{children:"Home"})," - it remains mounted in the stack. The cleanup function returned by ",(0,a.jsx)(n.code,{children:"useEffect"})," or ",(0,a.jsx)(n.code,{children:"componentWillUnmount"})," is not called."]}),"\n",(0,a.jsxs)(n.p,{children:["When we go back from ",(0,a.jsx)(n.code,{children:"Profile"})," to ",(0,a.jsx)(n.code,{children:"Home"}),", ",(0,a.jsx)(n.code,{children:"Profile"})," is unmounted and its ",(0,a.jsx)(n.code,{children:"useEffect"})," cleanup or ",(0,a.jsx)(n.code,{children:"componentWillUnmount"})," is called. But ",(0,a.jsx)(n.code,{children:"Home"})," is not mounted again - it remained mounted the whole time - and its ",(0,a.jsx)(n.code,{children:"useEffect"})," or ",(0,a.jsx)(n.code,{children:"componentDidMount"})," is not called."]}),"\n",(0,a.jsx)(n.p,{children:"Similar results can be observed (in combination) with other navigators as well. Consider a tab navigator with two tabs, where each tab is a stack navigator:"}),"\n",(0,a.jsxs)(i.Z,{groupId:"config",queryString:"config",children:[(0,a.jsx)(r.Z,{value:"static",label:"Static",default:!0,children:(0,a.jsx)(n.pre,{"data-name":"Navigation lifecycle","data-snack":"true","data-version":"7",children:(0,a.jsx)(n.code,{className:"language-js",metastring:'name="Navigation lifecycle" snack version=7',children:"import * as React from 'react';\nimport { Text, View, Button } from 'react-native';\nimport {\n  createStaticNavigation,\n  useNavigation,\n} from '@react-navigation/native';\nimport { createNativeStackNavigator } from '@react-navigation/native-stack';\nimport { createBottomTabNavigator } from '@react-navigation/bottom-tabs';\n\nfunction SettingsScreen() {\n  const navigation = useNavigation();\n\n  React.useEffect(() => {\n    console.log('SettingsScreen mounted');\n\n    return () => console.log('SettingsScreen unmounted');\n  }, []);\n\n  return (\n    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>\n      <Text>Settings Screen</Text>\n      <Button\n        title=\"Go to Profile\"\n        onPress={() => navigation.navigate('Profile')}\n      />\n    </View>\n  );\n}\n\nfunction ProfileScreen() {\n  const navigation = useNavigation();\n\n  React.useEffect(() => {\n    console.log('ProfileScreen mounted');\n\n    return () => console.log('ProfileScreen unmounted');\n  }, []);\n\n  return (\n    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>\n      <Text>Profile Screen</Text>\n      <Button\n        title=\"Go to Settings\"\n        onPress={() => navigation.navigate('Settings')}\n      />\n    </View>\n  );\n}\n\nfunction HomeScreen() {\n  const navigation = useNavigation();\n\n  React.useEffect(() => {\n    console.log('HomeScreen mounted');\n\n    return () => console.log('HomeScreen unmounted');\n  }, []);\n\n  return (\n    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>\n      <Text>Home Screen</Text>\n      <Button\n        title=\"Go to Details\"\n        onPress={() => navigation.navigate('Details')}\n      />\n    </View>\n  );\n}\n\nfunction DetailsScreen() {\n  const navigation = useNavigation();\n\n  React.useEffect(() => {\n    console.log('DetailsScreen mounted');\n\n    return () => console.log('DetailsScreen unmounted');\n  }, []);\n\n  return (\n    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>\n      <Text>Details Screen</Text>\n      <Button\n        title=\"Go to Details... again\"\n        onPress={() => navigation.push('Details')}\n      />\n    </View>\n  );\n}\n\n// codeblock-focus-start\nconst SettingsStack = createNativeStackNavigator({\n  screens: {\n    Settings: SettingsScreen,\n    Profile: ProfileScreen,\n  },\n});\n\nconst HomeStack = createNativeStackNavigator({\n  screens: {\n    Home: HomeScreen,\n    Details: DetailsScreen,\n  },\n});\n\nconst MyTabs = createBottomTabNavigator({\n  screenOptions: {\n    headerShown: false,\n  },\n  screens: {\n    First: SettingsStack,\n    Second: HomeStack,\n  },\n});\n// codeblock-focus-end\n\nconst Navigation = createStaticNavigation(MyTabs);\n\nexport default function App() {\n  return <Navigation />;\n}\n"})})}),(0,a.jsx)(r.Z,{value:"dynamic",label:"Dynamic",children:(0,a.jsx)(n.pre,{"data-name":"Navigation lifecycle","data-snack":"true","data-version":"7",children:(0,a.jsx)(n.code,{className:"language-js",metastring:'name="Navigation lifecycle" snack version=7',children:"import * as React from 'react';\nimport { Text, View, Button } from 'react-native';\nimport { NavigationContainer, useNavigation } from '@react-navigation/native';\nimport { createNativeStackNavigator } from '@react-navigation/native-stack';\nimport { createBottomTabNavigator } from '@react-navigation/bottom-tabs';\n\nfunction SettingsScreen() {\n  const navigation = useNavigation();\n\n  React.useEffect(() => {\n    console.log('SettingsScreen mounted');\n\n    return () => console.log('SettingsScreen unmounted');\n  }, []);\n\n  return (\n    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>\n      <Text>Settings Screen</Text>\n      <Button\n        title=\"Go to Profile\"\n        onPress={() => navigation.navigate('Profile')}\n      />\n    </View>\n  );\n}\n\nfunction ProfileScreen() {\n  const navigation = useNavigation();\n\n  React.useEffect(() => {\n    console.log('ProfileScreen mounted');\n\n    return () => console.log('ProfileScreen unmounted');\n  }, []);\n\n  return (\n    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>\n      <Text>Profile Screen</Text>\n      <Button\n        title=\"Go to Settings\"\n        onPress={() => navigation.navigate('Settings')}\n      />\n    </View>\n  );\n}\n\nfunction HomeScreen() {\n  const navigation = useNavigation();\n\n  React.useEffect(() => {\n    console.log('HomeScreen mounted');\n\n    return () => console.log('HomeScreen unmounted');\n  }, []);\n\n  return (\n    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>\n      <Text>Home Screen</Text>\n      <Button\n        title=\"Go to Details\"\n        onPress={() => navigation.navigate('Details')}\n      />\n    </View>\n  );\n}\n\nfunction DetailsScreen() {\n  const navigation = useNavigation();\n\n  React.useEffect(() => {\n    console.log('DetailsScreen mounted');\n\n    return () => console.log('DetailsScreen unmounted');\n  }, []);\n\n  return (\n    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>\n      <Text>Details Screen</Text>\n      <Button\n        title=\"Go to Details... again\"\n        onPress={() => navigation.push('Details')}\n      />\n    </View>\n  );\n}\n\nconst SettingsStack = createNativeStackNavigator();\nconst HomeStack = createNativeStackNavigator();\nconst MyTabs = createBottomTabNavigator();\n\n// codeblock-focus-start\nfunction FirstScreen() {\n  return (\n    <SettingsStack.Navigator>\n      <SettingsStack.Screen name=\"Settings\" component={SettingsScreen} />\n      <SettingsStack.Screen name=\"Profile\" component={ProfileScreen} />\n    </SettingsStack.Navigator>\n  );\n}\n\nfunction SecondScreen() {\n  return (\n    <HomeStack.Navigator>\n      <HomeStack.Screen name=\"Home\" component={HomeScreen} />\n      <HomeStack.Screen name=\"Details\" component={DetailsScreen} />\n    </HomeStack.Navigator>\n  );\n}\n\nfunction Root() {\n  return (\n    <MyTabs.Navigator screenOptions={{ headerShown: false }}>\n      <MyTabs.Screen name=\"First\" component={FirstScreen} />\n      <MyTabs.Screen name=\"Second\" component={SecondScreen} />\n    </MyTabs.Navigator>\n  );\n}\n// codeblock-focus-end\n\nexport default function App() {\n  return (\n    <NavigationContainer>\n      <Root />\n    </NavigationContainer>\n  );\n}\n"})})})]}),"\n",(0,a.jsxs)(n.p,{children:["We start on the ",(0,a.jsx)(n.code,{children:"HomeScreen"})," and navigate to ",(0,a.jsx)(n.code,{children:"DetailsScreen"}),". Then we use the tab bar to switch to the ",(0,a.jsx)(n.code,{children:"SettingsScreen"})," and navigate to ",(0,a.jsx)(n.code,{children:"ProfileScreen"}),". After this sequence of operations is done, all 4 of the screens are mounted! If you use the tab bar to switch back to the ",(0,a.jsx)(n.code,{children:"HomeStack"}),", you'll notice you'll be presented with the ",(0,a.jsx)(n.code,{children:"DetailsScreen"})," - the navigation state of the ",(0,a.jsx)(n.code,{children:"HomeStack"})," has been preserved!"]}),"\n",(0,a.jsx)(n.h2,{id:"react-navigation-lifecycle-events",children:"React Navigation lifecycle events"}),"\n",(0,a.jsx)(n.p,{children:'Now that we understand how React lifecycle methods work in React Navigation, let\'s answer the question we asked at the beginning: "How do we find out that a user is leaving (blur) it or coming back to it (focus)?"'}),"\n",(0,a.jsxs)(n.p,{children:["React Navigation emits events to screen components that subscribe to them. We can listen to ",(0,a.jsx)(n.code,{children:"focus"})," and ",(0,a.jsx)(n.code,{children:"blur"})," events to know when a screen comes into focus or goes out of focus respectively."]}),"\n",(0,a.jsx)(n.p,{children:"Example:"}),"\n",(0,a.jsxs)(i.Z,{groupId:"config",queryString:"config",children:[(0,a.jsx)(r.Z,{value:"static",label:"Static",default:!0,children:(0,a.jsx)(n.pre,{"data-name":"Focus and blur","data-snack":"true","data-version":"7",children:(0,a.jsx)(n.code,{className:"language-js",metastring:'name="Focus and blur" snack version=7',children:"import * as React from 'react';\nimport { Text, View, Button } from 'react-native';\nimport {\n  createStaticNavigation,\n  useNavigation,\n} from '@react-navigation/native';\nimport { createNativeStackNavigator } from '@react-navigation/native-stack';\n\n// codeblock-focus-start\nfunction ProfileScreen() {\n  const navigation = useNavigation();\n\n  React.useEffect(() => {\n    // highlight-start\n    const unsubscribe = navigation.addListener('focus', () => {\n      console.log('ProfileScreen focused');\n    });\n    // highlight-end\n\n    return unsubscribe;\n  }, [navigation]);\n\n  React.useEffect(() => {\n    // highlight-start\n    const unsubscribe = navigation.addListener('blur', () => {\n      console.log('ProfileScreen blurred');\n    });\n    // highlight-end\n\n    return unsubscribe;\n  }, [navigation]);\n\n  return (\n    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>\n      <Text>Profile Screen</Text>\n    </View>\n  );\n}\n// codeblock-focus-end\n\nfunction HomeScreen() {\n  const navigation = useNavigation();\n\n  React.useEffect(() => {\n    const unsubscribe = navigation.addListener('focus', () => {\n      console.log('HomeScreen focused');\n    });\n\n    return unsubscribe;\n  }, [navigation]);\n\n  React.useEffect(() => {\n    const unsubscribe = navigation.addListener('blur', () => {\n      console.log('HomeScreen blurred');\n    });\n\n    return unsubscribe;\n  }, [navigation]);\n\n  return (\n    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>\n      <Text>Home Screen</Text>\n      <Button\n        title=\"Go to Profile\"\n        onPress={() => navigation.navigate('Profile')}\n      />\n    </View>\n  );\n}\n\nconst RootStack = createNativeStackNavigator({\n  screens: {\n    Home: HomeScreen,\n    Profile: ProfileScreen,\n  },\n});\n\nconst Navigation = createStaticNavigation(RootStack);\n\nexport default function App() {\n  return <Navigation />;\n}\n"})})}),(0,a.jsx)(r.Z,{value:"dynamic",label:"Dynamic",children:(0,a.jsx)(n.pre,{"data-name":"Focus and blur","data-snack":"true","data-version":"7",children:(0,a.jsx)(n.code,{className:"language-js",metastring:'name="Focus and blur" snack version=7',children:"import * as React from 'react';\nimport { Text, View, Button } from 'react-native';\nimport { NavigationContainer, useNavigation } from '@react-navigation/native';\nimport { createNativeStackNavigator } from '@react-navigation/native-stack';\n\n// codeblock-focus-start\nfunction ProfileScreen() {\n  const navigation = useNavigation();\n\n  React.useEffect(() => {\n    // highlight-start\n    const unsubscribe = navigation.addListener('focus', () => {\n      console.log('ProfileScreen focused');\n    });\n    // highlight-end\n\n    return unsubscribe;\n  }, [navigation]);\n\n  React.useEffect(() => {\n    // highlight-start\n    const unsubscribe = navigation.addListener('blur', () => {\n      console.log('ProfileScreen blurred');\n    });\n    // highlight-end\n\n    return unsubscribe;\n  }, [navigation]);\n\n  return (\n    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>\n      <Text>Profile Screen</Text>\n    </View>\n  );\n}\n// codeblock-focus-end\n\nfunction HomeScreen() {\n  const navigation = useNavigation();\n\n  React.useEffect(() => {\n    const unsubscribe = navigation.addListener('focus', () => {\n      console.log('HomeScreen focused');\n    });\n\n    return unsubscribe;\n  }, [navigation]);\n\n  React.useEffect(() => {\n    const unsubscribe = navigation.addListener('blur', () => {\n      console.log('HomeScreen blurred');\n    });\n\n    return unsubscribe;\n  }, [navigation]);\n\n  return (\n    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>\n      <Text>Home Screen</Text>\n      <Button\n        title=\"Go to Profile\"\n        onPress={() => navigation.navigate('Profile')}\n      />\n    </View>\n  );\n}\n\nconst Stack = createNativeStackNavigator();\n\nfunction RootStack() {\n  return (\n    <Stack.Navigator>\n      <Stack.Screen name=\"Home\" component={HomeScreen} />\n      <Stack.Screen name=\"Profile\" component={ProfileScreen} />\n    </Stack.Navigator>\n  );\n}\n\nexport default function App() {\n  return (\n    <NavigationContainer>\n      <RootStack />\n    </NavigationContainer>\n  );\n}\n"})})})]}),"\n",(0,a.jsxs)(n.p,{children:["See ",(0,a.jsx)(n.a,{href:"/docs/7.x/navigation-events",children:"Navigation events"})," for more details on the available events and the API usage."]}),"\n",(0,a.jsxs)(n.p,{children:["Instead of adding event listeners manually, we can use the ",(0,a.jsx)(n.a,{href:"/docs/7.x/use-focus-effect",children:(0,a.jsx)(n.code,{children:"useFocusEffect"})})," hook to perform side effects. It's like React's ",(0,a.jsx)(n.code,{children:"useEffect"})," hook, but it ties into the navigation lifecycle."]}),"\n",(0,a.jsx)(n.p,{children:"Example:"}),"\n",(0,a.jsxs)(i.Z,{groupId:"config",queryString:"config",children:[(0,a.jsx)(r.Z,{value:"static",label:"Static",default:!0,children:(0,a.jsx)(n.pre,{"data-name":"Focus effect","data-snack":"true","data-version":"7",children:(0,a.jsx)(n.code,{className:"language-js",metastring:'name="Focus effect" snack version=7',children:"import * as React from 'react';\nimport { Text, View, Button } from 'react-native';\nimport {\n  createStaticNavigation,\n  useNavigation,\n} from '@react-navigation/native';\nimport { createNativeStackNavigator } from '@react-navigation/native-stack';\n// codeblock-focus-start\nimport { useFocusEffect } from '@react-navigation/native';\n\nfunction ProfileScreen() {\n  // highlight-start\n  useFocusEffect(\n    React.useCallback(() => {\n      // Do something when the screen is focused\n      console.log('ProfileScreen focus effect');\n\n      return () => {\n        // Do something when the screen is unfocused\n        // Useful for cleanup functions\n        console.log('ProfileScreen focus effect cleanup');\n      };\n    }, [])\n  );\n  // highlight-end\n\n  return (\n    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>\n      <Text>Profile Screen</Text>\n    </View>\n  );\n}\n// codeblock-focus-end\n\nfunction HomeScreen() {\n  const navigation = useNavigation();\n\n  return (\n    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>\n      <Text>Home Screen</Text>\n      <Button\n        title=\"Go to Profile\"\n        onPress={() => navigation.navigate('Profile')}\n      />\n    </View>\n  );\n}\n\nconst RootStack = createNativeStackNavigator({\n  screens: {\n    Home: HomeScreen,\n    Profile: ProfileScreen,\n  },\n});\n\nconst Navigation = createStaticNavigation(RootStack);\n\nexport default function App() {\n  return <Navigation />;\n}\n"})})}),(0,a.jsx)(r.Z,{value:"dynamic",label:"Dynamic",children:(0,a.jsx)(n.pre,{"data-name":"Focus effect","data-snack":"true","data-version":"7",children:(0,a.jsx)(n.code,{className:"language-js",metastring:'name="Focus effect" snack version=7',children:"import * as React from 'react';\nimport { Text, View, Button } from 'react-native';\nimport { NavigationContainer, useNavigation } from '@react-navigation/native';\nimport { createNativeStackNavigator } from '@react-navigation/native-stack';\n// codeblock-focus-start\nimport { useFocusEffect } from '@react-navigation/native';\n\nfunction ProfileScreen() {\n  // highlight-start\n  useFocusEffect(\n    React.useCallback(() => {\n      // Do something when the screen is focused\n      console.log('ProfileScreen focus effect');\n\n      return () => {\n        // Do something when the screen is unfocused\n        // Useful for cleanup functions\n        console.log('ProfileScreen focus effect cleanup');\n      };\n    }, [])\n  );\n  // highlight-end\n\n  return (\n    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>\n      <Text>Profile Screen</Text>\n    </View>\n  );\n}\n// codeblock-focus-end\n\nfunction HomeScreen() {\n  const navigation = useNavigation();\n\n  return (\n    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>\n      <Text>Home Screen</Text>\n      <Button\n        title=\"Go to Profile\"\n        onPress={() => navigation.navigate('Profile')}\n      />\n    </View>\n  );\n}\n\nconst Stack = createNativeStackNavigator();\n\nfunction RootStack() {\n  return (\n    <Stack.Navigator>\n      <Stack.Screen name=\"Home\" component={HomeScreen} />\n      <Stack.Screen name=\"Profile\" component={ProfileScreen} />\n    </Stack.Navigator>\n  );\n}\n\nexport default function App() {\n  return (\n    <NavigationContainer>\n      <RootStack />\n    </NavigationContainer>\n  );\n}\n"})})})]}),"\n",(0,a.jsxs)(n.p,{children:["If you want to render different things based on if the screen is focused or not, you can use the ",(0,a.jsx)(n.a,{href:"/docs/7.x/use-is-focused",children:(0,a.jsx)(n.code,{children:"useIsFocused"})})," hook which returns a boolean indicating whether the screen is focused."]}),"\n",(0,a.jsx)(n.h2,{id:"summary",children:"Summary"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["While React's lifecycle methods are still valid, React Navigation adds more events that you can subscribe to through the ",(0,a.jsx)(n.code,{children:"navigation"})," object."]}),"\n",(0,a.jsxs)(n.li,{children:["You may also use the ",(0,a.jsx)(n.code,{children:"useFocusEffect"})," or ",(0,a.jsx)(n.code,{children:"useIsFocused"})," hooks."]}),"\n"]})]})}function g(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(f,{...e})}):f(e)}},85162:(e,n,t)=>{t.d(n,{Z:()=>r});t(67294);var a=t(86010);const o={tabItem:"tabItem_Ymn6"};var i=t(85893);function r(e){let{children:n,hidden:t,className:r}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,a.Z)(o.tabItem,r),hidden:t,children:n})}},74866:(e,n,t)=>{t.d(n,{Z:()=>w});var a=t(67294),o=t(86010),i=t(12466),r=t(16550),c=t(20469),s=t(91980),l=t(67392),u=t(50012);function d(e){var n,t;return null!=(n=null==(t=a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:t.filter(Boolean))?n:[]}function f(e){const{values:n,children:t}=e;return(0,a.useMemo)((()=>{const e=null!=n?n:function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:a,default:o}}=e;return{value:n,label:t,attributes:a,default:o}}))}(t);return function(e){const n=(0,l.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error('Docusaurus error: Duplicate values "'+n.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[n,t])}function g(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function v(e){let{queryString:n=!1,groupId:t}=e;const o=(0,r.k6)(),i=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=t?t:null}({queryString:n,groupId:t});return[(0,s._X)(i),(0,a.useCallback)((e=>{if(!i)return;const n=new URLSearchParams(o.location.search);n.set(i,e),o.replace({...o.location,search:n.toString()})}),[i,o])]}function m(e){const{defaultValue:n,queryString:t=!1,groupId:o}=e,i=f(e),[r,s]=(0,a.useState)((()=>function(e){var n;let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!g({value:t,tabValues:a}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+t+'" but none of its children has the corresponding value. Available values are: '+a.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return t}const o=null!=(n=a.find((e=>e.default)))?n:a[0];if(!o)throw new Error("Unexpected error: 0 tabValues");return o.value}({defaultValue:n,tabValues:i}))),[l,d]=v({queryString:t,groupId:o}),[m,h]=function(e){let{groupId:n}=e;const t=function(e){return e?"docusaurus.tab."+e:null}(n),[o,i]=(0,u.Nk)(t);return[o,(0,a.useCallback)((e=>{t&&i.set(e)}),[t,i])]}({groupId:o}),S=(()=>{const e=null!=l?l:m;return g({value:e,tabValues:i})?e:null})();(0,c.Z)((()=>{S&&s(S)}),[S]);return{selectedValue:r,selectValue:(0,a.useCallback)((e=>{if(!g({value:e,tabValues:i}))throw new Error("Can't select invalid tab value="+e);s(e),d(e),h(e)}),[d,h,i]),tabValues:i}}var h=t(72389);const S={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=t(85893);function b(e){let{className:n,block:t,selectedValue:a,selectValue:r,tabValues:c}=e;const s=[],{blockElementScrollPositionUntilNextRender:l}=(0,i.o5)(),u=e=>{const n=e.currentTarget,t=s.indexOf(n),o=c[t].value;o!==a&&(l(n),r(o))},d=e=>{var n;let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{var a;const n=s.indexOf(e.currentTarget)+1;t=null!=(a=s[n])?a:s[0];break}case"ArrowLeft":{var o;const n=s.indexOf(e.currentTarget)-1;t=null!=(o=s[n])?o:s[s.length-1];break}}null==(n=t)||n.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":t},n),children:c.map((e=>{let{value:n,label:t,attributes:i}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:a===n?0:-1,"aria-selected":a===n,ref:e=>s.push(e),onKeyDown:d,onClick:u,...i,className:(0,o.Z)("tabs__item",S.tabItem,null==i?void 0:i.className,{"tabs__item--active":a===n}),children:null!=t?t:n},n)}))})}function p(e){let{lazy:n,children:t,selectedValue:o}=e;const i=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=i.find((e=>e.props.value===o));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:i.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==o})))})}function j(e){const n=m(e);return(0,x.jsxs)("div",{className:(0,o.Z)("tabs-container",S.tabList),children:[(0,x.jsx)(b,{...e,...n}),(0,x.jsx)(p,{...e,...n})]})}function w(e){const n=(0,h.Z)();return(0,x.jsx)(j,{...e,children:d(e.children)},String(n))}},11151:(e,n,t)=>{t.d(n,{Z:()=>c,a:()=>r});var a=t(67294);const o={},i=a.createContext(o);function r(e){const n=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),a.createElement(i.Provider,{value:n},e.children)}}}]);