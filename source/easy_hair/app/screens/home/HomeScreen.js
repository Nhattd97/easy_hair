import React, {Component} from 'react'
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    AsyncStorage
} from 'react-native'
import firebase from 'react-native-firebase'

export default class HomeScreen extends Component {

    static navigationOptions = {
        headerTitle : 'Home'
    };

    async logout() {

        try {
    
            await firebase.auth().signOut();
            alert("Log out")
            // Navigate to login view
            this.props.navigation.goBack()
    
        } catch (error) {
            alert(error);
        }
    
    }

    signOutAsync = async () => {
        await AsyncStorage.clear()
        this.props.navigation.navigate('Auth')
    }

    render() {

        return(
            <View style = {{flex : 1, alignItems : 'center'}}>
                <Text>Home Screen</Text>
                <TouchableOpacity onPress = {() => this.signOutAsync()}>
                    <Text>Log Out</Text>
                </TouchableOpacity>
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