import React from 'react'
import {
  View,
  TouchableOpacity,
  Text,
  Image,
  ActivityIndicator
} from 'react-native'
import {styles} from "../styles/SignUp";
import {navigateTo} from "../helpers/navigation";
import {baseStyles, colors} from "../styles/base";
import IconInput from "../components/auth/IconInput";
import {CSComponent} from 'react-central-state'
import {login} from '../helpers/api';

class SignIn extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      password: '',
      email: '',
      signIninProgress: false,
    }
  };

  updateWith(){
    return ['user', 'userSignedIn'];
  }

  onChangeText = (key, val) => {
    this.setState({ [key]: val })
  };

  signIn = async () => {
    const { password, email } = this.state;
    login(email,password,this);
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

        <TouchableOpacity style={styles.restoreButtonContainer}>
          <Text style={baseStyles.textWhite}>Esqueceu a senha? Recuperar</Text>
        </TouchableOpacity>

        <View style={styles.buttonGroup}>
          {this.state.signIninProgress ?
            <ActivityIndicator size="large" color={colors.primary} /> :
            <TouchableOpacity
              style={[styles.buttonContainer, styles.loginButton]}
              onPress={() => this.signIn()}
            >
              <Text style={styles.loginText}>Entrar</Text>
            </TouchableOpacity>
          }
        </View>

        <TouchableOpacity
          style={styles.registerButton}
          onPress={
            () => navigateTo("SignUp","Cadastro", this.props.componentId)
          }
        >
          <Text style={baseStyles.textWhite}>Ainda não possui conta? Registrar-se</Text>
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

export default CSComponent(SignIn);
