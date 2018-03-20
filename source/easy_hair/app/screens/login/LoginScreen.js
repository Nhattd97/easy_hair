import React, { Component } from 'react';
import { 
    StyleSheet,
    TouchableOpacity,
    Text,
    View,
    Image,
    KeyboardAvoidingView
 } from 'react-native';
import LoginForm from './LoginForm.js';

export default class LoginScreen extends Component {
     render() {
         return (
            <KeyboardAvoidingView 
                behavior="padding"
                style={styles.container}>

                <View style={styles.logoContainer}>
                    <Image style={styles.logo}
                        source={require('../images/bg_image.jpg')}>
                    </Image>

                    <Text style={styles.title}> 
                        Easy hair
                    </Text>

                </View>


                <View style={styles.formContainer}>
                    <LoginForm/>
                </View>              
         
            </KeyboardAvoidingView>
         )
     }
 }

 var styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#3498db'
    },

    logoContainer:{
        alignItems: 'center',
        //justifyContent:'center',
        flexGrow: 1,
    },

    logo:{ 
        marginTop: 20,
        width:200,
        height:70
    },

    title:{
        color: '#fff',
        marginTop: 0,
        fontSize: 40,
        textAlign: 'center',
        opacity: 0.7   // độ mờ của chữ
    }   
 });