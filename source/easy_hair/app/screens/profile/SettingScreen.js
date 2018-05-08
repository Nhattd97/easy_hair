import React, { Component } from 'react'
import {
    View,
    StyleSheet,
    Text,
    TouchableOpacity,
    AsyncStorage
} from 'react-native'
import firebase from 'react-native-firebase'

export default class SettingScreen extends Component {
    constructor(props) {
        super(props)

    }

     logout = async () => {

        try {
    
            await firebase.auth().signOut();
            //alert("Log out")
            // Navigate to login view
            this.props.navigation.navigate('Auth')
    
        } catch (error) {
            alert(error);
        }
    
    }

 

    render() {
        return (
            <View style = {styles.container}>
                <TouchableOpacity onPress = {this.logout}>
                    <Text>Đăng xuất</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
    }
})