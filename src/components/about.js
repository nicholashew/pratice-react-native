import React, { Component } from 'react';
import { Button, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';

class About extends Component {  
  render() {
    return (
      <View>
        <Text>This is About</Text>
        <Button 
          title="Go back"
          onPress={() => this.props.navigation.goBack()}
        />
      </View>
    );    
  }
}

export default About;