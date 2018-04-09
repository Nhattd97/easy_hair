import React, {Component} from 'react'
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet
} from 'react-native'

export default class ProfileScreen extends Component {

    static navigationOptions = {
        headerTitle : 'Profile'
    };


    render() {

        return(
            <View style = {{flex : 1, alignItems : 'center'}}>
                <Text>Profile Screen</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    header: {
        paddingTop: 26,
        paddingBottom: 10,
        position: 'relative',
        height: 63,
        backgroundColor: '#1572B8'
    },
    headerTitle: {
        color: '#FFFFFF',
        fontSize: 14,
        textAlign: 'center',
        paddingTop: 5,
        fontWeight: 'bold'
    },
    headerLeftBtn: {
        position: 'absolute',
        left: 20,
        top: -3,
        width: 25,
        height: 25,
        zIndex: 3,
        alignItems: 'center',
    },
})