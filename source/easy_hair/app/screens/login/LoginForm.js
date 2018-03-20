import React, { Component } from 'react';
import { 
    StyleSheet, 
    View, 
    Text, 
    TextInput, 
    Button,
    TouchableOpacity,
    TouchableHighlight,
    StatusBar,
    Alert } from 'react-native';

export default class LoginForm extends Component {
  render() {
    return (
      <View style={styles.container}>
          <StatusBar 
          backgroundColor="blue"
          barStyle="light-content"/>

        <Text style={styles.textTitle}> 
            Phone Number 
        </Text>

        <TextInput style={styles.input}
                   placeholder="Phone number"
                   keyboardType='phone-pad'
                   placeholderTextColor="rgba(255,255,255,0.2)"
                   returnKeyLabel="Next"
                   onSubmitEditing={() => this.passwordInput.focus()} //Nhấn nút next trên keyboard sẽ trỏ tới vùng nhập password
                   > 
        </TextInput>

        
        <Text style={styles.textTitle}> 
            Password 
        </Text>

        <TextInput style={styles.input}
                    secureTextEntry
                    placeholder="Password"
                    placeholderTextColor="rgba(255,255,255,0.2)"
                    returnKeyLabel="Go"
                    ref={(input) => this.passwordInput = input} // Tạo tham chiếu khi nhấn nút next trên vùng phone number sẽ trỏ tới đây
                    >
        </TextInput>

        <TouchableHighlight 
            style={styles.hl_forgotPass}
            onPress={this.forgotPassword}>

            <Text style={styles.textForgotPassword}> 
            Forgot Password? 
            </Text>
        </TouchableHighlight>

        <View style={{alignItems: 'center'}}>
        <TouchableOpacity style={styles.buttonContainer}>
            <Text style={styles.buttonText}>
                LOGIN
            </Text>
        </TouchableOpacity>
        </View>


        <TouchableHighlight 
            underlayColor="#ee5253"
            style={styles.hl_signUp}
            onPress={this.forgotPassword}>

            <Text style={styles.textSignUp}> 
            Sign Up
            </Text>
        </TouchableHighlight>

      </View>
    );
  }

  forgotPassword = () =>{
      Alert.alert("Kememay :)");
  }
}

var styles = StyleSheet.create({
    container:{
        padding: 20,
    },

    textTitle:{
        color: '#222f3e',
    },


    input:{
        height: 40,
        backgroundColor: 'rgba(255,255,255,0.3)',
        marginBottom: 20,
        color: '#FFF',
        paddingHorizontal: 10,
    },

    buttonContainer:{
        width: 200,
        height:50,
        backgroundColor: '#2e86de',
        paddingVertical: 10,
    },

    buttonText:{
        textAlign: 'center',
        color: '#fff',
        fontWeight: '900',
        fontSize: 20,

    },

    textForgotPassword:{
        color:'#341f97',
    },

    hl_forgotPass:{
        alignItems: 'flex-start',
    },

    hl_signUp:{
        alignItems: 'center',
    },

    textSignUp:{
        color: '#000',
        textDecorationLine:'underline',
    },

});
