import React from 'react'
import {
  View,
  TouchableOpacity,
  Text,
  ActivityIndicator,
} from 'react-native'
import {styles} from "../styles/SignUp";
import {baseStyles, colors} from "../styles/base";
import IconInput from "../components/auth/IconInput";
import {signUp} from '../helpers/api';
import { CSComponent } from 'react-central-state';
import {popNavigation} from '../helpers/navigation';

class SignUp extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      password: '',
      passwordConfirm: '',
      email: '',
      first_name: '',
      last_name: '',
      signIninProgress: false
    }
  };

  onChangeText = (key, val) => {
    this.setState({ [key]: val })
  };

  updateWith(){
    return ['user', 'userSignedIn'];
  }

  signUp = async () => {
    const { password, email, passwordConfirm, first_name, last_name } = this.state;
    signUp(email, password, passwordConfirm, first_name, last_name, this);
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
          inputKey={'first_name'}
          placeholder={'Nome'}
          icon={require('../assets/images/mail.png')}
        />
        <IconInput
          onChangeText={this.onChangeText}
          inputKey={'last_name'}
          placeholder={'Sobrenome'}
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

        {this.state.signIninProgress ?
          <ActivityIndicator size="large" color={colors.primary}/> :
          <View style={styles.buttonGroup}>
            <TouchableOpacity style={[styles.buttonContainer, styles.loginButton]}
              onPress={this.signUp}
            >
              <Text style={styles.loginText}>Cadastrar</Text>
            </TouchableOpacity>
          </View>
        }
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
export default CSComponent(SignUp);
