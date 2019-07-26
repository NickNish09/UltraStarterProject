import axios from "axios";
import {Platform, ToastAndroid} from 'react-native';
import deviceStorage from './storage';
import {USER_KEY} from './config';
import {popNavigation, popToRoot} from './navigation';
import flash from './flash';
import { GoogleSignin, statusCodes } from 'react-native-google-signin';
export const baseURL = "http://192.168.0.184:3000/"; //MUDE AQUI

const api = axios.create({
  baseURL
});

export const login = (email, password, context) => {
  context.setState({signIninProgress: true});
  if(email !== "" && password !== ""){
    try {
      api.post("v1/login.json", {
        email: email,
        password: password,
      })
        .then(function (response) {
          ToastAndroid.show('Autenticação feita com sucesso! Entrando...', ToastAndroid.SHORT);
          console.log(response.data);
          context.setCentralState({ user: response.data, userSignedIn: true });
          deviceStorage.saveItem(USER_KEY, JSON.stringify(response.data));
          context.setState({signIninProgress: false});
          popNavigation(context.props.componentId);
        })
        .catch(function (error) {
          ToastAndroid.show('Erro ao se autenticar', ToastAndroid.SHORT);
          context.setState({signIninProgress: false});
        });
    } catch (err) {
      context.setState({signIninProgress: false});
    }
  } else {
    flash("Erro ao entrar", "Preencha todos os campos")
    context.setState({signIninProgress: false});
  }
};

export const signUp = (email, password, passwordConfirm, first_name, last_name, context) => {
  context.setState({signIninProgress: true});
  if(password !== passwordConfirm){
    flash("Senhas não conferem", "Redigite as senhas");
    context.setState({signIninProgress: false});
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
            context.setCentralState({ user: response.data, userSignedIn: true });
            deviceStorage.saveItem(USER_KEY, JSON.stringify(response.data));
            context.setState({signIninProgress: false});
            popToRoot(context.props.componentId);
          })
          .catch(function (error) {
            console.log(error.response.data);
            if(Platform.OS === 'android'){
              ToastAndroid.show('Erro ao se autenticar', ToastAndroid.SHORT);
            }
            context.setState({signIninProgress: false});
          });
      } catch (err) {
        console.log(err.response.data);
        context.setState({signIninProgress: false});
      }
    } else {
      flash("Erro ao entrar", "Preencha todos os campos");
      context.setState({signIninProgress: false});
    }
  }
};

//MUDE AQUI - crie uma conta no firebase e siga o tutorial pra conseguir o arquivo GoogleService.infopslist
//https://github.com/react-native-community/react-native-google-signin/blob/master/docs/get-config-file.md
export const signInWithGoogle = async (context) => {
  context.setState({signIninProgress: true});
  try {
    await GoogleSignin.hasPlayServices();
    const userInfo = await GoogleSignin.signIn();
    try {
      api.post("v1/google_oauth2.json", {
        user: {
          email: userInfo.user.email,
          first_name: userInfo.user.givenName,
          last_name: userInfo.user.familyName,
          avatar_url: userInfo.user.photo,
          id: userInfo.user.id
        },
        idToken: userInfo.idToken
      })
        .then(function (response) {
          if(Platform.OS === 'android'){
            ToastAndroid.show('Cadastro feito com sucesso! Entrando...', ToastAndroid.SHORT);
          }
          console.log(response.data);
          context.setCentralState({ user: response.data, userSignedIn: true });
          deviceStorage.saveItem(USER_KEY, JSON.stringify(response.data));
          context.setState({signIninProgress: false});
          popToRoot(context.props.componentId);
        })
        .catch(function (error) {
          console.log(error.response.data);
          if(Platform.OS === 'android'){
            ToastAndroid.show('Erro ao se autenticar', ToastAndroid.SHORT);
          }
          context.setState({signIninProgress: false});
        });
    } catch (err) {
      console.log(err.response.data);
      context.setState({signIninProgress: false});
    }
    console.log(userInfo);
    context.setState({ userInfo, signIninProgress: false });
  } catch (error) {
    if (error.code === statusCodes.SIGN_IN_CANCELLED) {
      // user cancelled the login flow
    } else if (error.code === statusCodes.IN_PROGRESS) {
      // operation (f.e. sign in) is in progress already
    } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
      // play services not available or outdated
    } else {
      // some other error happened
    }
    context.setState({signIninProgress: false});
  }
};

export default api;
