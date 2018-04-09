import { StackNavigator } from 'react-navigation'
import LoginScreen from '../screens/login/LoginScreen'

const LoginStack = StackNavigator(
    {
        Login : {
            screen : LoginScreen
        },
    }
)

export default LoginStack