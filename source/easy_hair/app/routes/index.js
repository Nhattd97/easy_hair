import React, { Component } from 'react'
import { View,StyleSheet } from 'react-native'
import LoginStack from './LoginStack'


export default class Routes extends Component {
    render() {
        return (
                <View style={styles.container}>
                    <LoginStack/>
                </View>
        )
    }
}

const styles = StyleSheet.create({
    container : {
        flex: 1,
    }
})