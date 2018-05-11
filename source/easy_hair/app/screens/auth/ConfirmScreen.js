import React, { Component } from 'react';
import {  
    View, 
    Text,
    KeyboardAvoidingView,
    StyleSheet,
    Image,
    TouchableOpacity,
    Alert
} from 'react-native';
import firebase from 'react-native-firebase'
import { FONT } from '../../const';

export default class ConfirmScreen extends Component {

    static navigationOptions = {
        header: (props) => (
            <View style={styles.header}>
                <View>
                    <Text style={styles.headerTitle}>{'QUÊN MẬT KHẨU'}</Text>
                </View>
            </View>
        ),
        tabBarVisible: true
    };


  render() {
    const { params } = this.props.navigation.state;
    return (
      <KeyboardAvoidingView
      behavior="padding"
      style={styles.sContainer}>

        <View style={styles.sInfo}>
            <Image style={styles.sImage}
                source={require('../../assets/images/thank_you.png')}>
            </Image>

            <View style={{alignItems:'center', width: 250,}}>
            <Text style={styles.sText}>
                Bạn đã đăng kí
            </Text>
            <Text style={styles.sText}>
                thành công!
            </Text>

            </View>

            <TouchableOpacity style={styles.sButton}
                onPress={this.backToLoginScreen}>
                <Text style={styles.sTextButton}>
                    Trở lại đăng nhập
                </Text>
            </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    );
  }

  backToLoginScreen = () =>
  {
    firebase.auth().signOut()
    this.props.navigation.navigate("Login")
  }
}

var styles = StyleSheet.create({
    sContainer:{
        flex: 1,
        backgroundColor: '#ffffff',
    },

    sHeader:{
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:"#2D9CDB",
        height: 55,        
    },

    sInfo:{
        alignItems: 'center',
    },

    sImage:{
        marginTop: 98,
    },

    sText:{
        fontFamily: "Roboto-Medium",
        fontSize: 18,
        lineHeight: 21,
        color: "#000000",
    },

    sButton:{
        marginTop: 149,
        backgroundColor: '#2D9CDB',
        width: 252,
        height: 42,
        alignItems: 'center',
        paddingTop: 10,
    },

    sTextButton:{
        fontFamily: 'Roboto-Medium',
        lineHeight: 20,
        fontSize: 17,
        color: '#ffffff', 
    },
    header: {
        paddingTop: 18,
        paddingBottom: 10,
        position: 'relative',
        height: 63,
        backgroundColor: '#1572B8'
    },
    headerTitle: {
        color: '#FFFFFF',
        fontFamily: FONT.APP,
        fontSize: 15,
        textAlign: 'center',
        paddingTop: 5,
        fontWeight: 'bold'
    },
});
