import React, {Component} from 'react';
import {
  View,
  Text,
} from 'react-native';
import { goToHome } from "./src/helpers/navigation";
import SplashScreen from 'react-native-splash-screen';
import deviceStorage from './src/helpers/storage';
import {USER_KEY} from "./src/helpers/config";
import { CSComponent } from "react-central-state";
import {baseStyles} from "./src/styles/base";

class App extends Component {
  async componentDidMount(){
    const item = await deviceStorage.loadItem(USER_KEY);
    const user = item;
    console.log(user);
    if(user !== null){
      this.setCentralState({user: user, userSignedIn: true});
    }
    goToHome();
    SplashScreen.hide();
  }

  updateWith(){
    return ["user", "userSignedIn"];
  }

  render(){
    return(
      <View style={baseStyles.centerContainer}>
        <Text>Carregando...</Text>
      </View>
    )
  }
}

export default CSComponent(App);
