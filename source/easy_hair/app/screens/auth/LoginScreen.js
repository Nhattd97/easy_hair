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
    Modal,
    ActivityIndicator,
    TextInput,
    TouchableHighlight,
    Alert,
    AsyncStorage
 } from 'react-native';
import * as AuthActions from '../../actions/AuthAction'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

class LoginScreen extends Component {
    static navigationOptions = {
        header : null
    }
    constructor(props)
    {
        super(props);
        this.state = { 
            password: '',
            phone: '',
            isLoading : false
        }
    }

    signInAsync = async () => {
        try{
            await AsyncStorage.setItem('isLoggedIn', true.toString());
            // if(firebase.auth().currentUser())
            //     this.props.AuthActions.updateUser(firebase.auth().currentUser())
            this.setState({ isLoading : false })
            this.props.navigation.navigate('App')
        }catch(error) {
            this.setState({ isLoading : false })
            Alert.alert(error)
        }
        
    }

    login() {
        this.setState({
            isLoading : true
        })
        const phone = this.state.phone
        var formatPhone = phone
        if(phone.charAt(0) == '0') {
            if(phone.length == 10)
                formatPhone = `${phone.substr(1,9)}`
            if(phone.length == 11)
                formatPhone = `${phone.substr(1,10)}`
        }
        const user = {
            email : `${formatPhone}@domain.com` ,
            password : this.state.password
        }
        this.props.AuthActions.login(user,() => {
            this.signInAsync()
        },(error) => {
            this.setState({ isLoading : false })
            alert(error)
        })
    }

    checker = () =>
    {
        if(this.state.password.length < 6)
        {
            alert("Your password least 6 letters.");
        }
        else if (this.state.phone.length < 9 && this.state.phone.length > 11)
        {
            alert("Your phone can NOT be larger than 9 and shorter than 11 numbers!");
        }else {
            this.login()
        }
    } 
    
    forgotPassword = () =>{
        this.props.navigation.navigate('ForgotPassword')
    }

    signUp = () => {
        this.props.navigation.navigate('Register')
    }
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
                <View style={styles.containerForm}>
                    <StatusBar 
                    backgroundColor="blue"
                    barStyle="light-content"/>
                    <Modal transparent = {true} visible = {this.state.isLoading} onRequestClose = {() => {}}>
                            <View style = {styles.modal}>
                                <ActivityIndicator/>
                            </View>
                        </Modal>

                    <View style={{alignItems:'center', marginTop: 60}}>    
                        <TextInput style={styles.textInput}
                            placeholder="Số điện thoại"
                            keyboardType='phone-pad'
                            placeholderTextColor="rgba(0,0,0,1)"
                            returnKeyLabel="Next"
                            underlineColorAndroid='transparent'
                            onChangeText={(phone) =>{this.setState({phone});} }
                            onSubmitEditing={() => this.passwordInput.focus()} //Nhấn nút next trên keyboard sẽ trỏ tới vùng nhập password
                            > 
                        </TextInput>
                    
                    <View  style={{borderBottomColor: '#000000',borderBottomWidth: 1,}}/>

                    <TextInput style={styles.textInput}
                            secureTextEntry
                            placeholder="Mật khẩu"
                            placeholderTextColor="rgba(0,0,0,1)"
                            returnKeyLabel="Go"
                            underlineColorAndroid='transparent'
                            ref={(input) => this.passwordInput = input} // Tạo tham chiếu khi nhấn nút next trên vùng phone number sẽ trỏ tới đây
                            onChangeText={(password) =>{this.setState({password});} }>
                    </TextInput>

                    <View style={{alignItems: 'flex-end', width: 271,}}>
                        <TouchableHighlight 
                            style={styles.hl_forgotPass}
                            onPress={this.forgotPassword}>

                            <Text style={styles.textForgotPassword}> 
                                Quên mật khẩu?
                            </Text>
                        </TouchableHighlight>
                    </View>
                </View>

                <View style={{alignItems: 'center', marginTop: 25, marginBottom: 55}}>
                <TouchableOpacity style={styles.buttonContainer}
                                    onPress={this.checker}>
                    <Text style={styles.buttonText}>
                        Đăng Nhập
                    </Text>
                </TouchableOpacity>
                
                <TouchableHighlight 
                    underlayColor="#ee5253"
                    style={styles.hl_signUp}
                    onPress={this.signUp}>

                    <Text style={styles.textSignUp}> 
                    Đăng ký
                    </Text>
                </TouchableHighlight>
                </View>
            </View>

                    </ImageBackground>                    
                </View>


                <View style={styles.formContainer}>
                    
                </View>   
                </ScrollView>           
         
            </KeyboardAvoidingView>
         )
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
    },
    containerForm:{
        padding: 20,
    },

    textTitle:{
        color: '#222f3e',
    },


    textInput:{
        width: 271,
        height: 40,
        backgroundColor: 'rgba(255,255,255,1)',
        marginBottom: 0,
        color: '#000000',
        paddingHorizontal: 0,
        fontFamily: 'Montserrat-Regular',
        paddingLeft: 20,
    },

    buttonContainer:{
        width: 271,
        height:47,
        backgroundColor: '#2D9CDB',
        paddingVertical: 10,
    },

    buttonText:{
        textAlign: 'center',
        color: '#fff',
        fontFamily: 'Montserrat-Bold',
        fontSize: 18,
    },

    textForgotPassword:{
        color:'#2D9CDB',
        fontFamily: 'Montserrat-Regular'
    },

    hl_forgotPass:{
        alignItems: 'flex-end',
    },

    hl_signUp:{
        alignItems: 'center',
        marginTop: 10,
    },

     textSignUp:{
        color: '#FFFFFF',
        //textDecorationLine:'underline',
        fontSize: 13,
        fontStyle: 'normal',
        fontFamily: 'Montserrat-Regular',
    },
    modal : {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
     }   
 });