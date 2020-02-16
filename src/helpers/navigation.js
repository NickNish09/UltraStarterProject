import { Navigation } from "react-native-navigation";
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
                    text: "HOME",
                    alignment: "center",
                    color: "white"
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
            icon: require("../assets/icons/trophy-icon.png")
          }
        }
      }
    },
    {
      stack: {
        children: [
          {
            component: {
              name: "Blank",
              options: {
                topBar: {
                  title: {
                    text: "BLANK",
                    alignment: "center",
                    color: "white"
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
            text: "Blank",
            textColor: "white",
            selectedTextColor: colors.primary,
            selectedIconColor: colors.primary,
            icon: require("../assets/icons/list_white.png")
          }
        }
      }
    },
    //MUDE AQUI para adicionar mais telas
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
                    text: "PERFIL",
                    alignment: "center",
                    color: "white"
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
            icon: require("../assets/icons/user_white.png")
          }
        }
      }
    }
    //FIM DA TELA DE PERFIL
  ],
  options: {
    bottomTabs: {
      backgroundColor: colors.primary_dark
    }
  }
};

export const goToAuth = () =>
  Navigation.setRoot({
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
                    color: "white"
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

export const goToHome = () =>
  Navigation.setRoot({
    root: {
      bottomTabs: bottomTabs
    }
  });

export const navigateTo = (
  componentName,
  screenName,
  componentId,
  passProps
) => {
  Navigation.push(componentId, {
    component: {
      name: componentName,
      passProps: {
        componentId,
        ...passProps
      },
      options: {
        topBar: {
          visible: true,
          drawBehind: false,
          animate: true,
          background: {
            color: colors.primary_dark
          },
          backButton: {
            color: "white"
          },
          title: {
            text: screenName.toUpperCase(),
            color: "white"
          }
        }
      }
    }
  });
};

export const popNavigation = componentId => {
  Navigation.pop(componentId);
};

export const popToRoot = componentId => {
  Navigation.popToRoot(componentId);
};
