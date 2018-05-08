import { Platform, StyleSheet, Image } from 'react-native'
import React, { Component } from 'react'
import { TabNavigator } from 'react-navigation'
//import screen here
import HomeStack from './HomeStack'
import ProfileStack from './ProfileStack'
import SalonStack from './SalonStack'

const HomeTab = TabNavigator(
    {
        home : {
            screen : HomeStack,
            navigationOptions: {
                title: 'Home',
                tabBarIcon: ({ tintColor }) => (
                    <Image
                        source={require('../assets/images/home.png')}
                        style={styles.icon}
                        resizeMethod='resize'
                    />
                ),
            },
        },
        salon : {
            screen : SalonStack,
            navigationOptions: {
                title: 'Salon',
                tabBarIcon: ({ tintColor }) => (
                    <Image
                        source={require('../assets/images/map.png')}
                        style={styles.icon}
                        resizeMethod='resize'
                    />
                ),
            },
        },
        profile : {
            screen : ProfileStack,
            navigationOptions: {
                title: 'Profile',
                tabBarIcon: ({ tintColor }) => (
                    <Image
                        source={require('../assets/images/profile.png')}
                        style={styles.icon}
                        resizeMethod='resize'
                    />
                ),
            }
        }
    },{
        // Tab configs
        tabBarPosition: (Platform.OS === 'ios') ? 'bottom' : 'bottom',
        swipeEnabled: false,
        animationEnabled: false,
        tabBarOptions: {
            activeTintColor: '#00528F',
            inactiveTintColor: '#D5D9DE',
            labelStyle: {
                fontSize: 12,
                fontFamily: 'Lucida Grande',

                ...Platform.select({
                    android: {
                        bottom: 0,
                        margin: 0,
                        position: 'absolute'
                    }
                })
            },
            tabStyle: {
                height: 48,
                padding: 0,
                paddingTop: 0,
                flexDirection: 'column',
                position: 'relative'

            },
            upperCaseLabel: false,
            showIcon: true,
            indicatorStyle: {
                backgroundColor: 'transparent'
            },
            iconStyle: {
                width: 38,
                height: 38,
                marginBottom : 5
            }
        },
    }
)

export default HomeTab

const styles = StyleSheet.create({
    icon: {
        ...Platform.select({
            android: {
                bottom: 5,
                position: 'absolute'
            }
        }),

    },
});
