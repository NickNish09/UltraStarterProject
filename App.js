import React, {Component} from 'react';
import {
  View,
  Text,
} from 'react-native';
import { goToHome } from "./src/helpers/navigation";
import SplashScreen from 'react-native-splash-screen';

class App extends Component {
  componentDidMount(){
    goToHome();
    SplashScreen.hide();
  }

  render(){
    return(
      <View>
        <Text>Oi</Text>
      </View>
    )
  }
}

export default App;
