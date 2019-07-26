import React, {Component} from 'react';
import {Button, Text, View} from 'react-native';
import {navigateTo} from "../helpers/navigation";

export default class Profile extends Component {

  constructor(props) {
    super(props);
    this.state = {
      profile: "Perfil"
    };
  }

  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Button
          title={'Cadastrar-se'}
          onPress={
            () => navigateTo("SignIn","Login", this.props.componentId)
          }
        />
      </View>
    );
  }
}
