import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator, TabNavigator, TabBarBottom } from 'react-navigation';

import Home from './src/components/home';
import About from './src/components/about';
import Enquiry from './src/components/enquiry';
import ModalScreen from './src/components/modalScreen';

const MainStack = StackNavigator(
  {
    Home: {
      screen: Home,
    },
    About: {
      screen: About,
    },
    Enquiry: {
      screen: Enquiry,
    },
  },
  {
    initialRouteName: 'Home',
    navigationOptions: {      
      headerStyle: {
        backgroundColor: 'rgb(34, 34, 34)',
      },
      headerTintColor: '#fff',      
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  }
);

/*
const RootStack = StackNavigator(
  {
    Main: {
      screen: MainStack,
    },
    Modal: {
      screen: ModalScreen
    }
  },
  {
    mode: 'modal',
    headerMode: 'none'
  }  
);
*/

const TabNav = TabNavigator(
  {
    Home: {
      screen: MainStack
    },
    About: {
      screen: About
    },
    Modal: {
      screen: ModalScreen
    },
  },
  {
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    },
    animationEnabled: false,
    swipeEnabled: false,
  }
);

export default class App extends React.Component {
  render() {
    return <TabNav />
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});