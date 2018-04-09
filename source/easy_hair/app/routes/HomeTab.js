import { TabNavigator } from 'react-navigation'
//import screen here
import HomeScreen from '../screens/home/HomeScreen'
import ProfileScreen from '../screens/home/ProfileScreen'

const HomeTab = TabNavigator(
    {
        home : {
            screen : HomeScreen,
        },
        profile : {
            screen : ProfileScreen
        }
    },
    {
        initialRouteName : 'home'
    }
)

export default HomeTab