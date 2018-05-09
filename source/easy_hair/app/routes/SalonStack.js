import { StackNavigator } from 'react-navigation'

import SalonMapScreen from '../screens/map/SalonMapScreen'
import SalonDetailScreen from '../screens/map/SalonDetailScreen'

const SalonStack = StackNavigator(
    {
        MapSalon : {
            screen : SalonMapScreen
        },

        DetailSalon:
        {
            screen : SalonDetailScreen
        }

    },
    {
        initialRouteName : 'MapSalon'
    }
)

export default SalonStack