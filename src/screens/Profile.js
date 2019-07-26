import React, {Component} from 'react';
import {Button, Text, View} from 'react-native';
import {navigateTo} from "../helpers/navigation";
import {baseStyles} from "../styles/base";
import { CSComponent } from 'react-central-state';
import deviceStorage from "../helpers/storage";
import {USER_KEY} from "../helpers/config";

class Profile extends Component {

  constructor(props) {
    super(props);
    this.state = {
      profile: "Perfil"
    };
  }

  updateWith(){
    return ['user', 'userSignedIn'];
  }

  logout = () => {
    deviceStorage.removeValue(USER_KEY);
    this.setCentralState({user: null, userSignedIn: false});
  };

  render() {
    return (
      this.centralState.userSignedIn ?
      <View style={baseStyles.centerContainer}>
        <Text>Logado como {this.centralState.user.first_name}</Text>
        <Button title={'Sair'} onPress={this.logout}/>
      </View> :
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
export default CSComponent(Profile);
