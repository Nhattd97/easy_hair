

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
  TextInput
} from 'react-native';
import firebase from 'react-native-firebase'



export default class SignUp extends Component {
  constructor(props) {
    super(props)
    this.state = {
      verificationCode : '',
      confirmResult : '',
      phone : '',
      user : null
    }
  }

  onLoginOrRegister = () => {
    const { phone } = this.state;
    formatPhoneNumber = `+84${phone}`
    firebase.auth().signInWithPhoneNumber(formatPhoneNumber)
      .then((confirmResult) => {
        // This means that the SMS has been sent to the user
        // You need to:
        //   1) Save the `confirmResult` object to use later
        alert('sent!')
        this.setState({ confirmResult });
        //   2) Hide the phone number form
        //   3) Show the verification code form
      })
      .catch((error) => {
        const { code, message } = error;
        alert(`${code} and ${message}`);
        // For details of error codes, see the docs
        // The message contains the default Firebase string
        // representation of the error
      });
  }
  onVerificationCode = () => {
    const { confirmResult, verificationCode } = this.state;
    const email = `${this.state.phone}@domain.com`
    const password = '123456'
    confirmResult.confirm(verificationCode)
      .then((user) => {
        alert("success!")
        this.setState({ user : firebase.auth().currentUser()}) 
        if(user) {
          user.delete().then(() => {
            alert('deleted!')
          }).catch((error) => {

          })
        }
        // firebase.auth().createUserWithEmailAndPassword(email, password)
        //   .then((user) => {
    
        //     // Navigate to the Home page
        //     //this.props.navigation.navigate("home")
        //     //this.signInAsync()
        //     // If you need to do anything with the user, do it here
        //     // The user will be logged in automatically by the 
        //     // `onAuthStateChanged` listener we set up in App.js earlier
        //   })
        //   .catch((error) => {
        //     //const { code, message } = error;
        //     alert(error.toString())
        //     // For details of error codes, see the docs
        //     // The message contains the default Firebase string
        //     // representation of the error
        //   });
        // If you need to do anything with the user, do it here
        // The user will be logged in automatically by the
        // `onAuthStateChanged` listener we set up in App.js earlier
      })
      .catch((error) => {
        const { code, message } = error;
        alert(code)
        // For details of error codes, see the docs
        // The message contains the default Firebase string
        // representation of the error
      });
  }

  render() {
    return (
      <View>
        <Text>Enter Your Phone Number</Text>
        <TextInput 
                    placeholder='phone number'
                    autoCapitalize='none'
                    autoCorrect={false} 
                    autoFocus={true} 
                    keyboardType='numeric'
                    value={this.state.phone} 
                    onChangeText={(text) => this.setState({ phone: text })} 
        />
        <TextInput 
                    placeholder='phone number'
                    autoCapitalize='none'
                    autoCorrect={false} 
                    autoFocus={false} 
                    keyboardType='numeric'
                    value={this.state.verificationCode} 
                    onChangeText={(text) => this.setState({ verificationCode: text })} />
        <Button title = 'send code' onPress = {()=>{this.onLoginOrRegister()}}/>
        <Button title = 'verification' onPress = {()=>{this.onVerificationCode()}}/>
      </View>
    );
  }
}