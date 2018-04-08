import { StackNavigator } from 'react-navigation'
import LoginScreen from '../screens/LoginForm/LoginScreen'
import ConfirmForm from '../screens/ConfirmForm/ConfirmForm'
import InfoForm from '../screens/InfoForm/InfoForm';

const LoginStack = StackNavigator(
    {
        Login : {
            screen : LoginScreen
        },
    }
)

export default LoginStack