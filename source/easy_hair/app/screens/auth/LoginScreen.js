import React, { Component } from 'react'
import { 
    StyleSheet,
    TouchableOpacity,
    TextInput,
    Text,
    View,
    Alert,
    ScrollView,
    AsyncStorage,
    Button,
    Modal,
    ActivityIndicator
 } from 'react-native'
 import firebase from 'react-native-firebase'

 export default class LoginScreen extends Component {
    constructor (props) {
        super(props);
        this.state = {
            route: 'Login',
            username: '',
            password: '',
            isLoading : false
        };
    }

    signup = async (email,pass) => {
        try {
            await firebase.auth().createUserWithEmailAndPassword(email,pass);
            firebase.auth().signinwithp
            Alert.alert("Account created!")
        }catch(error) {
            alert(error)
        }

    }

    signInAsync = async () => {
        try{
            await AsyncStorage.setItem('isLoggedIn', true.toString());
            //Alert.alert("Logged In!");
            this.setState({ isLoading : false })
            this.props.navigation.navigate('App')
        }catch(error) {
            Alert.alert(error)
        }
        
    }

    async login(email, pass) {
    
        try {
            await firebase.auth().signInWithEmailAndPassword(email, pass);
    
            // Navigate to the Home page
            //this.props.navigation.navigate("home")
    
        } catch (error) {
            Alert.alert(error.toString())
        }
    
    }

    onLogin = (email, password) => {
        this.setState({isLoading : true})
        firebase.auth().signInWithEmailAndPassword(email, password)
          .then((user) => {
    
            // Navigate to the Home page
            //this.props.navigation.navigate("home")
            this.signInAsync()
            // If you need to do anything with the user, do it here
            // The user will be logged in automatically by the 
            // `onAuthStateChanged` listener we set up in App.js earlier
          })
          .catch((error) => {
            //const { code, message } = error;
            Alert.alert(error.toString())
            this.setState({isLoading : false})
            // For details of error codes, see the docs
            // The message contains the default Firebase string
            // representation of the error
          });
      }
 
    render () {
        return (
            <ScrollView style={{padding: 20}}>
                <Modal visible = {this.state.isLoading} onRequestClose = {() => {}}>
                    <View style = {styles.modal}>
                        <ActivityIndicator/>
                    </View>
                </Modal>
                <Text style={{fontSize: 27}}>{this.state.route}</Text>
                <TextInput 
                    placeholder='Username'
                    autoCapitalize='none'
                    autoCorrect={false} 
                    autoFocus={true} 
                    keyboardType='email-address'
                    value={this.state.username} 
                    onChangeText={(text) => this.setState({ username: text })} />
                <TextInput 
                    placeholder='Password'
                    autoCapitalize='none'
                    autoCorrect={false} 
                    secureTextEntry={true} 
                    value={this.state.password} 
                    onChangeText={(text) => this.setState({ password: text })} />
                <View style={{margin: 7}}/>
                <Button onPress = {() => this.onLogin(this.state.username,this.state.password)}  title={this.state.route}/>
                <Button onPress = {() => {this.props.navigation.navigate('Register')}} title = {'Đăng ký'}/>
                <Button onPress = {() => {this.props.navigation.navigate('ForgotPassword')}} title = {'Quên mật khẩu'}/>
            </ScrollView>
        );
    }
 }

 const styles = StyleSheet.create({
     container : {
         flex : 1,
     },
     textinput : {
        
     },
     modal : {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
     }
 })