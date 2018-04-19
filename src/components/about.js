import React, { Component } from 'react';
import { Button, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';

class About extends Component {
  render() {
    return (
      <View>
        <Text>This is About</Text>
        <Button 
          title="General Enquiry"
          onPress={() => this.props.navigation.navigate('Enquiry', {
            enquiryType: 'General Enquiry',
            otherParam: 'anything you want here'
          })}
        />
        <Button 
          title="Quotation Enquiry"
          onPress={() => this.props.navigation.navigate('Enquiry', {
            enquiryType: 'Request for Quotation',
            otherParam: 'anything you want here'
          })}
        />
        <Button 
          title="Go back"
          onPress={() => this.props.navigation.goBack()}
        />
      </View>
    );    
  }
}

export default About;