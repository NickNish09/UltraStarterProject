import {Navigation} from "react-native-navigation";
import { colors } from "../styles/base";

const bottomTabs = {
  children: [
    {
      stack: {
        children: [
          {
            component: {
              name: "Home",
              options: {
                topBar: {
                  title: {
                    text: "Home",
                    alignment: "center",
                    color: 'white'
                  },
                  background: {
                    color: colors.primary_dark
                  }
                }
              }
            }
          }
        ],
        options: {
          bottomTab: {
            text: "Home",
            textColor: "white",
            selectedTextColor: colors.primary,
            selectedIconColor: colors.primary,
            icon: require("../assets/icons/trophy-icon.png"),
          }
        }
      }
    },//MUDE AQUI para adicionar mais telas
    //TELA DE PERFIL
    {
      stack: {
        children: [
          {
            component: {
              name: "Profile",
              options: {
                topBar: {
                  title: {
                    text: "Perfil",
                    alignment: "center",
                    color: 'white'
                  },
                  background: {
                    color: colors.primary_dark
                  }
                }
              }
            }
          }
        ],
        options: {
          bottomTab: {
            text: "Perfil",
            textColor: "white",
            selectedTextColor: colors.primary,
            selectedIconColor: colors.primary,
            icon: require("../assets/icons/user_white.png"),
          }
        }
      }
    },
    //FIM DA TELA DE PERFIL
  ],
    options: {
    bottomTabs: {
      backgroundColor: colors.primary_dark
    }
  }
};

export const goToAuth = () => Navigation.setRoot({
  root: {
    stack: {
      children: [
        {
          component: {
            name: "SignIn",
            options: {
              topBar: {
                title: {
                  text: "Entrar",
                  alignment: "center",
                  color: 'white'
                },
                background: {
                  color: colors.primary_dark
                }
              }
            }
          }
        }
      ]
    }
  }
});

export const goToHome = () => Navigation.setRoot({
  root: {
    bottomTabs: bottomTabs
  }
});
