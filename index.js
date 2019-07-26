import App from './App';
import Home from './src/screens/Home';
import Profile from './src/screens/Profile';
import Stack from './src/screens/Stack';
import SignUp from './src/screens/SignUp';
import SignIn from './src/screens/SignIn';
import { Navigation } from "react-native-navigation";

Navigation.registerComponent(`App`, () => App);
Navigation.registerComponent(`Home`, () => Home);
Navigation.registerComponent(`Profile`, () => Profile);
Navigation.registerComponent(`Stack`, () => Stack);
Navigation.registerComponent(`SignUp`, () => SignUp);
Navigation.registerComponent(`SignIn`, () => SignIn);

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      component:{
        name: "App"
      }
    }
  })
});
