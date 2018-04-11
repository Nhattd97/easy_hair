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
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as AuthActions from '../../actions/AuthAction'

class LoginScreen extends Component {
    constructor (props) {
        super(props);
        this.state = {
            route: 'Login',
            phone: '',
            password: '',
            isLoading : false,
            text : ''
        };
    }

    signInAsync = async () => {
        try{
            await AsyncStorage.setItem('isLoggedIn', true.toString());
            this.setState({ isLoading : false })
            this.props.navigation.navigate('App')
        }catch(error) {
            Alert.alert(error)
        }
        
    }

    login() {
        const user = {
            email : `${this.state.phone}@domain.com` ,
            password : this.state.password
        }
        this.props.AuthActions.login(user,() => {
            this.signInAsync()
        },(error) => {
            alert(error)
        })
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
                    keyboardType='phone-pad'
                    value={this.state.username} 
                    onChangeText={(text) => this.setState({ phone: text })} />
                <TextInput 
                    placeholder='Password'
                    autoCapitalize='none'
                    autoCorrect={false} 
                    secureTextEntry={true} 
                    value={this.state.password} 
                    onChangeText={(text) => this.setState({ password: text })} />
                <View style={{margin: 7}}/>
                <Button onPress = {() => this.login()}  title={this.state.route}/>
                <Button onPress = {() => {this.props.navigation.navigate('Register')}} title = {'Đăng ký'}/>
                <Button onPress = {() => {this.props.navigation.navigate('ForgotPassword')}} title = {'Quên mật khẩu'}/>
            </ScrollView>
        );
    }
 }

 function mapStateToProps(state) {
    return {
       text : state.Auth.text,
    };
}
function mapDispatchToProps(dispatch) {
    return {
        AuthActions: bindActionCreators(AuthActions, dispatch),
    };
}

export default connect(mapStateToProps,mapDispatchToProps)(LoginScreen)


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