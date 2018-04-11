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
    Alert, } from 'react-native';

export default class LoginForm extends Component {
    constructor(props)
    {
        super(props);
        this.state = { 
            password: '',
            phone: '',
        }
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
        }
    } 


  render() {
    return (
      <View style={styles.container}>
          <StatusBar 
          backgroundColor="blue"
          barStyle="light-content"/>

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
            onPress={this.forgotPassword}>

            <Text style={styles.textSignUp}> 
            Đăng ký
            </Text>
        </TouchableHighlight>
        </View>
      </View>
    );
  }

  forgotPassword = () =>{
      Alert.alert("Kememay :)");
  }
}

//export {LoginForm}

const styles = StyleSheet.create({
    container:{
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

});
