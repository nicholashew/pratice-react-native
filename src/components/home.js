import React, { Component } from 'react';
import { Button, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';

class Home extends Component {
  render() {
    return (
      <View>
        <Text>This is Home</Text>
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