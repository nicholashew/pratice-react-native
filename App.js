import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';

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

export default class App extends React.Component {
  render() {
    return <RootStack />
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