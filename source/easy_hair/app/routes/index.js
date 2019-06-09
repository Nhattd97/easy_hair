import React, {Component} from 'react'
import {StyleSheet, View} from 'react-native'
import {SwitchNavigator} from 'react-navigation'
import AuthStack from './AuthStack'
import HomeTab from './HomeTab'
import AuthLoadingScreen from '../screens/auth/AuthLoadingScreen'


const MyRoute = SwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    App: HomeTab,
    Auth: AuthStack
  },
  {
    initialRouteName: 'AuthLoading'
  }
)

export default class Routes extends Component {
  render() {
    return (
      <View style={styles.container}>
        <MyRoute/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})
