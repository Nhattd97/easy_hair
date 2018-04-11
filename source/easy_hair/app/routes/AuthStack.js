import { StackNavigator } from 'react-navigation'
import LoginScreen from '../screens/auth/LoginScreen'
import SignUpScreen from '../screens/auth/SignUpScreen'
import RegisterScreen from '../screens/auth/RegisterScreen'
import RegisterCodeScreen from '../screens/auth/RegisterCodeScreen'
import CreatePasswordScreen from '../screens/auth/CreatePasswordScreen'
import RecoveryCodeScreen from '../screens/auth/RecoveryCodeScreen'
import ForgotPasswordScreen from '../screens/auth/ForgotPasswordScreen'
import SignInScreen from '../screens/auth/SignInScreen'
import ConfirmScreen from '../screens/auth/ConfirmScreen'
import InfoScreen from '../screens/auth/InfoScreen'

const AuthStack = StackNavigator(
    {
        Login : {
            screen : LoginScreen,
        },
        SignUp : {
            screen : SignUpScreen
        },
        Register : {
            screen : RegisterScreen
        },
        RegisterCode : {
            screen : RegisterCodeScreen
        },
        CreatePassword : {
            screen : CreatePasswordScreen
        },
        RecoveryCode : {
            screen : RecoveryCodeScreen
        },
        ForgotPassword : {
            screen : ForgotPasswordScreen
        },
        SignIn : {
            screen : SignInScreen
        },
        Confirm : {
            screen : ConfirmScreen
        },
        Info : {
            screen : InfoScreen
        }
    },
    {
        initialRouteName : 'ForgotPassword'
    }
)

export default AuthStack