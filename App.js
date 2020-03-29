import React, {component} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {Icon, Button, Container, Content, Accordion,arr} from 'native-base';

function HomeScreen({navigation}) {
  return (
    <View style={styles.MiddleContent}>
      <Text>Home Screen</Text>
    </View>
  );
}

function ProfileScreen() {
  return (
    <View style={styles.MiddleContent}>
      <Text>Profile!</Text>
    </View>
  );
}

function SettingScreen() {
  return (
    <View style={styles.MiddleContent}>
      <Text>Settings!</Text>
    </View>
  );
}

const toDayArray = [
  {title: 'Breakfast ', content: 'Breakfast menu and calories here!!'},
  {title: 'Lunch', content: 'Lunch menu and calories here!!'},
  {title: 'Dinner', content: 'Dinner menu and calories here!!'},
  {title: 'Break and Snack', content: 'Break menu and calories here!!'}
];

function TodayScreen() {
  return (
    <Container>
      <Content padder>
        <Accordion dataArray={toDayArray} />
      </Content>
    </Container>
  );
}

function ProgressScreen() {
  return (
    <View style={styles.MiddleContent}>
      <Text>Progress!</Text>
    </View>
  );
}

function CommunityScreen() {
  return (
    <View style={styles.MiddleContent}>
      <Text>Community!</Text>
    </View>
  );
}
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

function SideBar() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={BottomTabs} />
      <Drawer.Screen name="Setting" component={SettingScreen} />
    </Drawer.Navigator>
  );
}

function BottomTabs() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: '#F3BEBB',
        inactiveTintColor: 'gray',
      }}>
      <Tab.Screen
        name="Home"
        component={HomeStack}
        options={{
          tabBarIcon: () => <Icon name="home" color="#F3BEBB" />,
        }}
      />
      <Tab.Screen
        name="Today"
        component={TodayStack}
        options={{
          tabBarIcon: () => <Icon name="book" color="#F3BEBB" />,
        }}
      />
      <Tab.Screen
        name="Progress"
        component={ProgressStack}
        options={{
          tabBarIcon: () => <Icon name="pulse" color="#F3BEBB" />,
        }}
      />
      <Tab.Screen
        name="Community"
        component={CommunityStack}
        options={{
          tabBarIcon: () => <Icon name="people" color="#F3BEBB" />,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileStack}
        options={{
          tabBarIcon: () => <Icon name="person" color="#F3BEBB" />,
        }}
      />
    </Tab.Navigator>
  );
}

function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerStyle: {
            backgroundColor: '#F3BEBB',
          },
          headerTintColor: '#515C5D',
        }}
      />
    </Stack.Navigator>
  );
}

function TodayStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Today"
        component={TodayScreen}
        options={{
          headerStyle: {
            backgroundColor: '#F3BEBB',
          },
          headerTintColor: '#515C5D',
        }}
      />
    </Stack.Navigator>
  );
}

function ProgressStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Progress"
        component={ProgressScreen}
        options={{
          headerStyle: {
            backgroundColor: '#F3BEBB',
          },
          headerTintColor: '#515C5D',
        }}
      />
    </Stack.Navigator>
  );
}
function CommunityStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Community"
        component={CommunityScreen}
        options={{
          headerStyle: {
            backgroundColor: '#F3BEBB',
          },
          headerTintColor: '#515C5D',
        }}
      />
    </Stack.Navigator>
  );
}
function ProfileStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          headerStyle: {
            backgroundColor: '#F3BEBB',
          },
          headerTintColor: '#515C5D',
        }}
      />
    </Stack.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <SideBar />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  MiddleContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
