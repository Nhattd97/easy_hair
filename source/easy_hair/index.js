import { AppRegistry } from 'react-native';
import App from './app/App';
import ConfirmForm from './app/screens/ConfirmForm/ConfirmForm.js';
import InfoForm from './app/screens/InfoForm/InfoForm.js';
import LoginScreen from './app/screens/LoginForm/LoginScreen.js'
import { StackNavigator } from 'react-navigation';


const myStack = StackNavigator(
    {
      Info: {
        screen: InfoForm,
      },

      Confirm:{
          screen: ConfirmForm,
      },

      Login:{
          screen: LoginScreen
      }
    },

    { 
       initialRouteName: 'Confirm',
    }
  );

AppRegistry.registerComponent('easy_hair', () => myStack);
