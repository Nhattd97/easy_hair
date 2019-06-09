import {StackNavigator} from 'react-navigation'

import HomeScreen from '../screens/home/HomeScreen'
import AlbumScreen from '../screens/home/AlbumScreen'
import ImageScreen from '../screens/home/ImageScreen'

const HomeStack = StackNavigator(
  {
    Home: {
      screen: HomeScreen
    },
    Album: {
      screen: AlbumScreen
    },
    Image: {
      screen: ImageScreen
    }
  },
  {
    initialRouteName: 'Home'
  }
)

export default HomeStack
