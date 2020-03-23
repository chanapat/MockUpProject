// import React from 'react';
// import {StyleSheet, View, Text, Button} from 'react-native';
// import 'react-native-gesture-handler';
// import {NavigationContainer} from '@react-navigation/native';
// import {createStackNavigator} from '@react-navigation/stack';
// import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import {createDrawerNavigator} from '@react-navigation/drawer';
// import {
//   HomeScreen,
//   SettingScreen,
//   AboutScreen,
//   DetailsScreen,
// } from './Navigator';

// const Stack = createStackNavigator();
// const Tab = createBottomTabNavigator();
// const Drawer = createDrawerNavigator();

// function SideBar() {
//   return (
//     <Drawer.Navigator>
//       <Drawer.Screen name="Home" component={BottomTabs} />
//       <Drawer.Screen name="Setting" component={SettingScreen} />
//     </Drawer.Navigator>
//   );
// }

// function BottomTabs() {
//   return (
//     <Tab.Navigator
//       tabBarOptions={{
//         activeTintColor: 'tomato',
//         inactiveTintColor: 'gray',
//       }}>
//       <Tab.Screen name="Home" component={HomeScreen} />
//       <Tab.Screen name="About" component={AboutScreen} />
//     </Tab.Navigator>
//   );
// }

// function RouteStack() {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen name="Home" component={SideBar} />
//       <Stack.Screen name="Details" component={DetailsScreen} />
//     </Stack.Navigator>
//   );
// }
