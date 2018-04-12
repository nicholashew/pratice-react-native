import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';

import Home from './src/components/home';
import About from './src/components/about';
import Enquiry from './src/components/enquiry';

const RootStack = StackNavigator(
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

export default class App extends React.Component {
  render() {
    return <RootStack /> /*(
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!!!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>                
      </View>
    );*/
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