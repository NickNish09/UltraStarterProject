import React from 'react'
import {
  View,
  TouchableOpacity,
  Text,
} from 'react-native'
import {styles} from "../styles/SignUp";
import {popNavigation} from "../helpers/navigation";
import { baseStyles } from "../styles/base";
import IconInput from "../components/auth/IconInput";

export default class SignUp extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      password: '',
      passwordConfirm: '',
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
        <IconInput
          onChangeText={this.onChangeText}
          inputKey={'email'}
          placeholder={'Email'}
          icon={require('../assets/images/mail.png')}
        />
        <IconInput
          onChangeText={this.onChangeText}
          isSecureTextEntry={true}
          inputKey={'password'}
          placeholder={'Password'}
          icon={require('../assets/images/lock.png')}
        />
        <IconInput
          onChangeText={this.onChangeText}
          isSecureTextEntry={true}
          inputKey={'passwordConfirm'}
          placeholder={'Password Confirm'}
          icon={require('../assets/images/lock.png')}
        />

        <View style={styles.buttonGroup}>
          <TouchableOpacity style={[styles.buttonContainer, styles.loginButton]}>
            <Text style={styles.loginText}>Cadastrar</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={styles.registerButton}
          onPress={
            () => popNavigation(this.props.componentId)
          }
        >
          <Text style={baseStyles.textWhite}>Já possui conta? entrar</Text>
        </TouchableOpacity>

      </View>
    )
  }
}
