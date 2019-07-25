import React, {Component} from 'react';
import { Text, View } from 'react-native';

export default class Profile extends Component {

  constructor(props) {
    super(props);
    this.state = {
      profile: "Perfil"
    };
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <Text>{this.state.profile}</Text>
      </View>
    );
  }
}
