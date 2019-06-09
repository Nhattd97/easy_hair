import {StackNavigator} from 'react-navigation'
import ProfileScreen from '../screens/profile/ProfileScreen'
import SettingScreen from '../screens/profile/SettingScreen'

const ProfileStack = StackNavigator(
  {
    Profile: {
      screen: ProfileScreen
    },
    Setting: {
      screen: SettingScreen
    }
  },
  {
    initialRouteName: "Profile"
  }
)

export default ProfileStack
