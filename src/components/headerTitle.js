import React, { Component } from 'react';
import { Image } from 'react-native';
import { StackNavigator } from 'react-navigation';

class HeaderTitle extends Component {
  render() {
    return (
      <Image
        source={require('../images/header_logo.png')}
        style={{ width: 30, height: 30 }}
      />
    );
  }
}

export default HeaderTitle;