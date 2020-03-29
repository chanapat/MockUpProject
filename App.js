import React, {component} from 'react';
import {StyleSheet, View, Image} from 'react-native';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {
  Icon,
  Container,
  Content,
  Accordion,
  Card,
  CardItem,
  Thumbnail,
  Text,
  Button,
  Left,
  Body,
  Right,
} from 'native-base';

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
  {title: 'Break and Snack', content: 'Break menu and calories here!!'},
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
    <Container>
      <Content>
        <Card>
          <CardItem>
            <Left>
              <Thumbnail
                source={{
                  uri:
                    'https://scontent.fcnx1-1.fna.fbcdn.net/v/t1.0-9/67217944_2149871128457169_8156511433362767872_o.jpg?_nc_cat=109&_nc_sid=85a577&_nc_eui2=AeGxEy6ksGUS2ylpOfh64eOMvrpXHvM5KTwHjtX2BnLrxJbwe4EWm48x7X0hb-ErSEfKmfcpEthb4cddcbZSeI_Jn0AOU-npkJ9svxObp0tN_Q&_nc_oc=AQnzJqchWrpLD8BSSKGvmLIjI_qGLWF9zOKHskAhYnUXofaA9A352QAn9K7JI-luAok&_nc_ht=scontent.fcnx1-1.fna&oh=6b7c148a79af7ede3be51717909ee69b&oe=5EA64B64',
                }}
              />
              <Body>
                <Text>FatBoyz</Text>
                <Text note>I love fried chicken</Text>
              </Body>
            </Left>
          </CardItem>
          <CardItem cardBody>
            <Image
              source={{
                uri:
                  'https://d8xxy3dl0iwm6.cloudfront.net/wp-content/uploads/2016/10/Open_kfc.png',
              }}
              style={{height: 200, width: null, flex: 1}}
            />
          </CardItem>
          <CardItem>
            <Left>
              <Button transparent>
                <Icon active name="thumbs-up" />
                <Text>12 Likes</Text>
              </Button>
            </Left>
            <Body>
              <Button transparent>
                <Icon active name="chatbubbles" />
                <Text>4 Comments</Text>
              </Button>
            </Body>
            <Right>
              <Text>11h ago</Text>
            </Right>
          </CardItem>
        </Card>
      </Content>
    </Container>
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
