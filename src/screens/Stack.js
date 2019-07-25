import React, {Component} from 'react';
import { Text, View } from 'react-native';

export default class Stack extends Component {

  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <Text>Stack</Text>
      </View>
    );
  }
}
