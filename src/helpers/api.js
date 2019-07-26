import axios from "axios";
import {Platform, ToastAndroid} from 'react-native';
import deviceStorage from './storage';
import {USER_KEY} from './config';
import {popNavigation, popToRoot} from './navigation';
import flash from './flash';
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
            console.log(error);
            if(Platform.OS === 'android'){
              ToastAndroid.show('Erro ao se autenticar', ToastAndroid.SHORT);
            }
            context.setState({signIninProgress: false});
          });
      } catch (err) {
        context.setState({signIninProgress: false});
      }
    } else {
      flash("Erro ao entrar", "Preencha todos os campos")
      context.setState({signIninProgress: false});
    }
  }
};

export default api;
