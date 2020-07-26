import React, {component, useState} from 'react';
import {StyleSheet, View, StatusBar, Image} from 'react-native';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
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
import PieChart from 'react-native-pie-chart';
import {LineChart} from 'react-native-chart-kit';

const chart_wh = 220;
const series = [123, 360];
const sliceColor = ['#D5EFE1', 'white'];

function HomeScreen({navigation}) {
  return (
    <Container style={styles.Container}>
      <View style={styles.MiddleContent}>
        <Text />
        <StatusBar hidden={true} />
        <PieChart
          chart_wh={chart_wh}
          series={series}
          sliceColor={sliceColor}
          doughnut={true}
          coverRadius={0.75}
          coverFill={'#F9F9F4'}
        />
      </View>
      <Content style={{top: 15}}>
        <Card>
          <CardItem>
            <Left>
              <Text>Breakfast</Text>
            </Left>
            <Right>
              <Text>123 kcal</Text>
            </Right>
          </CardItem>
        </Card>
        <Card>
          <CardItem>
            <Left>
              <Text>Lunch</Text>
            </Left>
            <Right>
              <Text>123 kcal</Text>
            </Right>
          </CardItem>
        </Card>
        <Card>
          <CardItem>
            <Left>
              <Text>Dinner</Text>
            </Left>
            <Right>
              <Text>123 kcal</Text>
            </Right>
          </CardItem>
        </Card>
      </Content>
    </Container>
  );
}

function MealAddScreen({navigation}) {
  return (
    <View>
      <Text>yeah</Text>
    </View>
  );
}

function ProfileScreen() {
  return (
    <View style={styles.MiddleContent}>
      <Text>Profile!</Text>
      <Button style={{backgroundColor: '#5067FF'}} />
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
                    'https://scontent.fcnx1-1.fna.fbcdn.net/v/t1.0-9/90193636_3188145554582260_1532929013977186304_n.jpg?_nc_cat=108&_nc_sid=85a577&_nc_eui2=AeGHCP0xtytTHbmenKQiZORh9IJzgyUGDpnQ4MStoerGdzJodWn7_9mqH78h4vNrUTz2MfoJAWgFw1ygF-yYNvdkj4m7Hu0jcrlkTf2LO-xWcw&_nc_oc=AQk947zrqCw7y7WEzSVSJTKXWNEum0-6vVCB-hS_ewUiw4OzxkO93Tynte3w6NjzFzg&_nc_ht=scontent.fcnx1-1.fna&oh=1605b1d9d7e20f7f951175e440a96d49&oe=5EA3EF03',
                }}
              />
              <Body>
                <Text>Papp-Papp</Text>
                <Text note>Chubby Chubby</Text>
              </Body>
            </Left>
          </CardItem>
          <CardItem cardBody>
            <Image
              source={{
                uri:
                  'https://i.pinimg.com/originals/8c/c2/47/8cc247110d67c7788bf97fa015316862.jpg',
              }}
              style={{height: 400, width: null, flex: 1}}
            />
          </CardItem>
          <CardItem>
            <Left>
              <Button transparent>
                <Icon active name="thumbs-up" />
                <Text>56 Likes</Text>
              </Button>
            </Left>
            <Body>
              <Button transparent>
                <Icon active name="chatbubbles" />
                <Text>8 Comments</Text>
              </Button>
            </Body>
            <Right>
              <Text>2h ago</Text>
            </Right>
          </CardItem>
        </Card>
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
                  'https://cheatdaydesign.com/wp-content/uploads/2019/02/KFC2-1024x1024.jpg',
              }}
              style={{height: 400, width: null, flex: 1}}
            />
          </CardItem>
          <CardItem>
            <Left>
              <Button transparent>
                <Icon active name="thumbs-up" />
                <Text>24 Likes</Text>
              </Button>
            </Left>
            <Body>
              <Button transparent>
                <Icon active name="chatbubbles" />
                <Text>4 Comments</Text>
              </Button>
            </Body>
            <Right>
              <Text>8h ago</Text>
            </Right>
          </CardItem>
        </Card>
      </Content>
    </Container>
  );
}
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

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
      <Stack.Screen
        name="MealAdd"
        component={MealAddScreen}
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
      <BottomTabs />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  MiddleContent: {
    flex: 1,
    alignItems: 'center',
  },
  Container: {
    backgroundColor: '#F9F9F4',
  },
});

export default App;
