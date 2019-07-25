import React, {Component} from 'react';
import { Text, View } from 'react-native';

export default class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      welcome: "Home"
    };
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <Text>{this.state.welcome}</Text>
      </View>
    );
  }
}
