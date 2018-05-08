import { StackNavigator } from 'react-navigation'

import SalonMapScreen from '../screens/map/SalonMapScreen'

const SalonStack = StackNavigator(
    {
        MapSalon : {
            screen : SalonMapScreen
        }
    },
    {
        initialRouteName : 'MapSalon'
    }
)

export default SalonStack