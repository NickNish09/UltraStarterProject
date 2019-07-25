import React, {Component} from 'react';
import {
  View,
  Text,
} from 'react-native';
import { goToHome } from "./src/services/setRoot";

class App extends Component {
  componentDidMount(){
    goToHome();
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
