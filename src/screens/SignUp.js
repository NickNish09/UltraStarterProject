import React from 'react'
import {
  View,
  TouchableOpacity,
  Text,
  ToastAndroid,
  ActivityIndicator,
  Platform
} from 'react-native'
import {styles} from "../styles/SignUp";
import {popToRoot} from "../helpers/navigation";
import {baseStyles, colors} from "../styles/base";
import IconInput from "../components/auth/IconInput";
import api from "../helpers/api";
import deviceStorage from "../helpers/storage";
import {USER_KEY} from "../helpers/config";
import flash from "../helpers/flash";
import { CSComponent } from 'react-central-state';

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
    let self = this;
    const { password, email, passwordConfirm, first_name, last_name } = this.state;
    this.setState({signIninProgress: true});
    if(password !== passwordConfirm){
      flash("Senhas não conferem", "Redigite as senhas");
      this.setState({signIninProgress: false});
    } else {
      if(email !== "" && password !== "" && passwordConfirm !== "" && first_name !== "" && last_name !== ""){
        try {
          api.post("v1/cadastro.json", {
            user: {
              email: email,
              password: password,
              first_name: first_name,
              last_name: last_name,
            }
          })
            .then(function (response) {
              if(Platform.OS === 'android'){
               ToastAndroid.show('Cadastro feito com sucesso! Entrando...', ToastAndroid.SHORT);
              }
              console.log(response.data);
              self.setCentralState({ user: response.data, userSignedIn: true });
              deviceStorage.saveItem(USER_KEY, JSON.stringify(response.data));
              self.setState({signIninProgress: false});
              popToRoot(self.props.componentId);
            })
            .catch(function (error) {
              console.log(error);
              if(Platform.OS === 'android'){
               ToastAndroid.show('Erro ao se autenticar', ToastAndroid.SHORT);
              }
              self.setState({signIninProgress: false});
            });
        } catch (err) {
          this.setState({signIninProgress: false});
        }
      } else {
        flash("Erro ao entrar", "Preencha todos os campos")
        this.setState({signIninProgress: false});
      }
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
