import App from './App';
import Home from './src/screens/Home';
import Profile from './src/screens/Profile';
import { Navigation } from "react-native-navigation";

Navigation.registerComponent(`App`, () => App);
Navigation.registerComponent(`Home`, () => Home);
Navigation.registerComponent(`Profile`, () => Profile);
Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      component:{
        name: "App"
      }
    }
  })
});
