import React, {Component} from 'react';
import { Text, View } from 'react-native';
import {baseStyles} from "../styles/base";

export default class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      welcome: "Home"
    };
  }

  render() {
    return (
      <View style={baseStyles.centerContainer}>
        <Text>{this.state.welcome}</Text>
      </View>
    );
  }
}
