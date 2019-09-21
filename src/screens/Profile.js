import React, {Component} from 'react';
import {Button, Text, View} from 'react-native';
import {navigateTo} from "../helpers/navigation";
import {baseStyles} from "../styles/base";
import { CSComponent } from 'react-central-state';
import deviceStorage from "../helpers/storage";
import {USER_KEY} from "../helpers/config";
import AvatarUpload from '../components/profile/AvatarUpload';

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

  placeholderUrl(){
    if(this.centralState.user.avatar !== ""){
      return this.centralState.user.avatar;
    } else {
      return 'https://cdn3.iconfinder.com/data/icons/user-icon-4-1/100/user_2-07-512.png'
    }
  }

  render() {
    return (
      this.centralState.userSignedIn ?
      <View style={baseStyles.centerContainer}>
        <AvatarUpload
          placeholderImage={
            this.placeholderUrl()
          }
        />
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
