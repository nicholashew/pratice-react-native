import React, { Component } from 'react';
import { Button, Text, View } from 'react-native';

class Home extends Component {    
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>This is Home</Text>
        <Text>Open up App.js to start working on your app!!!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
        <Button 
          title="Go to Detail"
          onPress={() => this.props.navigation.navigate("HomeDetails")} 
        />        
      </View>
    );    
  }
}

export default Home;