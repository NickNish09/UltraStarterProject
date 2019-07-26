import React from 'react'
import {
  View,
  TouchableOpacity,
  Text,
  TextInput,
  Image
} from 'react-native'
import {styles} from "../styles/SignUp";
import {popNavigation} from "../helpers/navigation";
import { baseStyles } from "../styles/base";

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
          <Image style={[styles.icon, styles.inputIcon]} source={require('../assets/images/mail.png')}/>
          <TextInput style={styles.inputs}
                     placeholder="Email"
                     keyboardType="email-address"
                     underlineColorAndroid='transparent'
                     onChangeText={val => this.onChangeText('email', val)}
          />
        </View>

        <View style={styles.inputContainer}>
          <Image style={[styles.icon, styles.inputIcon]} source={require('../assets/images/lock.png')}/>
          <TextInput style={styles.inputs}
                     placeholder="Password"
                     secureTextEntry={true}
                     underlineColorAndroid='transparent'
                     onChangeText={val => this.onChangeText('password', val)}
          />
        </View>

        <View style={styles.inputContainer}>
          <Image style={[styles.icon, styles.inputIcon]} source={require('../assets/images/lock.png')}/>
          <TextInput style={styles.inputs}
                     placeholder="Password Confirm"
                     secureTextEntry={true}
                     underlineColorAndroid='transparent'
                     onChangeText={val => this.onChangeText('passwordConfirm', val)}
          />
        </View>

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

        <View style={styles.buttonGroup}>
          <TouchableOpacity style={[styles.buttonContainer, styles.fabookButton]}>
            <View style={styles.socialButtonContent}>
              <Image style={styles.icon} source={{uri: 'https://png.icons8.com/facebook/androidL/40/FFFFFF'}}/>
              <Text style={styles.loginText}>Continue with facebook</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.buttonGroup}>
          <TouchableOpacity style={[styles.buttonContainer, styles.googleButton]}>
            <View style={styles.socialButtonContent}>
              <Image style={styles.icon} source={{uri: 'https://png.icons8.com/google/androidL/40/FFFFFF'}}/>
              <Text style={styles.loginText}>Sign in with google</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}
