import {StackNavigator} from 'react-navigation'
import RegisterScreen from '../screens/auth/RegisterScreen'
import RegisterCodeScreen from '../screens/auth/RegisterCodeScreen'
import CreatePasswordScreen from '../screens/auth/CreatePasswordScreen'
import RecoveryCodeScreen from '../screens/auth/RecoveryCodeScreen'
import ForgotPasswordScreen from '../screens/auth/ForgotPasswordScreen'
import LoginScreen from '../screens/auth/LoginScreen'
import ConfirmScreen from '../screens/auth/ConfirmScreen'
import InfoScreen from '../screens/auth/InfoScreen'

const AuthStack = StackNavigator(
  {
    Register: {
      screen: RegisterScreen
    },
    RegisterCode: {
      screen: RegisterCodeScreen
    },
    CreatePassword: {
      screen: CreatePasswordScreen
    },
    RecoveryCode: {
      screen: RecoveryCodeScreen
    },
    ForgotPassword: {
      screen: ForgotPasswordScreen
    },
    Login: {
      screen: LoginScreen
    },
    Confirm: {
      screen: ConfirmScreen
    },
    Info: {
      screen: InfoScreen
    },
  },
  {
    initialRouteName: 'Login'
  }
)

export default AuthStack
