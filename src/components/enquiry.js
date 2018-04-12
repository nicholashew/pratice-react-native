import React, { Component } from 'react';
import { Button, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';

class Enquiry extends Component {
  render() {
    const { params } = this.props.navigation.state;
    const enquiryType = params ? params.enquiryType : null;
    const otherParam = params ? params.otherParam : null;

    return (
      <View>
        <Text>This is Enquiry</Text>  
        <Text>enquiryType: {JSON.stringify(enquiryType)}</Text>
        <Text>otherParam: {JSON.stringify(otherParam)}</Text>        
        <Button 
          title="Go back"
          onPress={() => this.props.navigation.goBack()}
        />
      </View>
    );    
  }
}

export default Enquiry;