import React, {Component} from 'react';
import { Text, View } from 'react-native';
import {baseStyles} from "../styles/base";

//Tela base
export default class Blank extends Component {

  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <View style={baseStyles.centerContainer}>
        <Text>Blank</Text>
      </View>
    );
  }
}
