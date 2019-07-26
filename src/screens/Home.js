import React, {Component} from 'react';
import { Text, View, Button } from 'react-native';
import { navigateTo } from "../helpers/navigation";
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
