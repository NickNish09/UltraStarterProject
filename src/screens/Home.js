import React, {Component} from 'react';
import { Text, View, Button } from 'react-native';
import { navigateTo } from "../helpers/navigation";

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
        <Button
          title={'Navegar'}
          onPress={
            () => navigateTo("Stack","Stacked", this.props.componentId)
          }
        />
      </View>
    );
  }
}
