import React, {Component} from 'react';
import {Button, View} from 'react-native';
import {navigateTo} from "../helpers/navigation";
import {baseStyles} from "../styles/base";

export default class Profile extends Component {

  constructor(props) {
    super(props);
    this.state = {
      profile: "Perfil"
    };
  }

  render() {
    return (
      <View style={baseStyles.centerContainer}>
        <Button
          title={'Entrar'}
          onPress={
            () => navigateTo("SignIn","Login", this.props.componentId)
          }
        />
      </View>
    );
  }
}
