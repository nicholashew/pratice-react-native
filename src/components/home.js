import React, { Component } from 'react';
import { Button, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';

import HeaderTitle from './headerTitle';

class Home extends Component {
  static navigationOptions = ({navigation}) => {
    const params = navigation.state.params || {};

    return {
      headerTitle: <HeaderTitle />,
      headerLeft: (
        <Button
          onPress={() => navigation.navigate('Modal')}
          title="Modal"
        />
      )
    };
  };
  
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>This is Home</Text>
        <Text>Open up App.js to start working on your app!!!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
        <Button 
          title="Go to About"
          onPress={() => this.props.navigation.navigate('About')}
        />
        <Button 
          title="Go to Enquiry - General"
          onPress={() => this.props.navigation.navigate('Enquiry', {
            enquiryType: 'general',
            otherParam: 'anything you want here'
          })}
        />
        <Button 
          title="Go to Enquiry - Quotation"
          onPress={() => this.props.navigation.navigate('Enquiry', {
            enquiryType: 'quotation',
            otherParam: 'anything you want here'
          })}
        />
      </View>
    );    
  }
}

export default Home;