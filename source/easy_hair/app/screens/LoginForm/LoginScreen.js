import React, { Component } from 'react';
import { 
    StyleSheet,
    TouchableOpacity,
    Text,
    View,
    Image,
    ImageBackground,
    KeyboardAvoidingView,
    StatusBar,
    ScrollView,
 } from 'react-native';
import LoginForm from './LoginForm.js';

export default class LoginScreen extends Component {
     render() {
         return (
            <KeyboardAvoidingView 
                behavior="padding"
                style={styles.container}>
                
                <ScrollView>
                <StatusBar hidden={true}/>
                
                <View style={styles.logoContainer}>
                    <ImageBackground style={styles.background}
                        blurRadius={1}
                        source={require('../../assets/images/background.jpg')}>
                       
                       <View style={{alignItems: 'flex-start', marginTop: 70, marginLeft: 150}}>
                        <Text style={styles.title}> 
                        EASY
                        </Text>
                        </View>
                        
                        <View style={{alignItems: 'flex-end', marginRight: 160}}>
                        <Text style={styles.title}> 
                        HAIR
                        </Text>
                        </View>

                    <LoginForm/>

                    </ImageBackground>                    
                </View>


                <View style={styles.formContainer}>
                    
                </View>   
                </ScrollView>           
         
            </KeyboardAvoidingView>
         )
     }
 }

 var styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#3498db',
    },

    logoContainer:{
        alignItems: 'center',
        //justifyContent:'center',
        flexGrow: 1,
    },

    background:{ 
        flex: 1,
        width:'150%',
        height: '100%',
    },

    title:{
        color: '#000000',
        marginTop: 0,
        fontSize: 70,
        fontFamily: 'AlgerianRegular',
        textAlign: 'center',
        alignItems: 'flex-start',
        opacity: 1   // độ mờ của chữ
    }   
 });