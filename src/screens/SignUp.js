import React from 'react'
import {
  View,
  TouchableHighlight,
  Text,
  TextInput,
  Image
} from 'react-native'
import {styles} from "../styles/SignUp";

export default class SignUp extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      password: '',
      email: ''
    }
  };

  onChangeText = (key, val) => {
    this.setState({ [key]: val })
  };

  signUp = async () => {
    const { password, email } = this.state;
    try {
      // here place your signup logic
    } catch (err) {
      console.log('error signing up: ', err);
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <Image style={styles.inputIcon} source={require('../assets/images/mail.png')}/>
          <TextInput
            style={styles.input}
            placeholder='Email'
            autoCapitalize="none"
            placeholderTextColor='white'
            onChangeText={val => this.onChangeText('email', val)}
          />
        </View>
        <View style={styles.inputContainer}>
          <Image style={styles.inputIcon} source={require('../assets/images/lock.png')}/>
          <TextInput
            style={styles.input}
            placeholder='Password'
            secureTextEntry={true}
            autoCapitalize="none"
            placeholderTextColor='white'
            onChangeText={val => this.onChangeText('password', val)}
          />
        </View>
        <View style={{flexDirection: 'row'}}>
          <TouchableHighlight style={[styles.buttonContainer, styles.signupButton]} onPress={() => this.signUp}>
            <Text style={styles.signUpText}>Cadastrar</Text>
          </TouchableHighlight>
        </View>
      </View>
    )
  }
}
