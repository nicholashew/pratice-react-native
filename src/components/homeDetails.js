import React, { Component } from 'react';
import { Text, View } from 'react-native';

class HomeDetails extends Component {   
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>This is Home Details</Text>        
      </View>
    );    
  }
}

export default HomeDetails;