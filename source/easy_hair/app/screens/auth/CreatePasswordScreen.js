// Import libraries
import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Alert,
    TouchableOpacity,
    ScrollView,
    Dimensions
} from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { FONT } from '../../const';
import firebase from 'react-native-firebase'

// Import actions
// Import components
import { HeaderCard, PassInputWithLabel, PasswordInput, Button } from '../../components';

//import Spinner from '../../components/Spinner';

class CreatePasswordScreen extends Component {
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

    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            visible: false,
            error: '',
            newPass: {
                text : '',
                error : false
            },
            retypePass: {
                text : '',
                error : false
            },
            hiddenNew: true,
            hiddenRetype: true,
        }
    }


    setNewPass(newPass) {
        this.setState({ newPass });
    }

    retypePass(retypePass) {
        this.setState({ retypePass });
    }

    onButtonPress() {
        if(this.state.newPass.text === this.state.retypePass.text) {
            this.props.user.updatePassword(this.state.newPass.text)
            .then(() => {
                alert('changed password!')
                firebase.auth().signOut()
                this.props.navigation.navigate("Login")
            })
            .catch( error => {
                alert(error)
            } )
        }
           
    }

    render() {
        return (
            <ScrollView style={styles.container}>
                <HeaderCard
                    link={require('../../assets/images/doctor_results.png')}
                >
                    <Text style={styles.textHeaderStyle}>
                        {'Vui lòng nhập mật khẩu mới cho tài khoản của bạn'}
                    </Text>
                </HeaderCard>

                <View style={styles.footer}>
                    <PasswordInput
                        inputStyle={{ marginBottom: 20 }}
                        inputContainer={styles.inputContainer}
                        inputStyleLabel={{ color: '#757575' }}
                        typeName={'Mật khẩu'}
                        placeholder={'Mật khẩu'}
                        setValue={this.setNewPass.bind(this)}
                        disabledError={false}
                        autoFocus={true}
                        keyboardType = {'default'}
                    />
                    <PasswordInput
                        inputStyle={{ marginBottom: 20 }}
                        inputContainer={styles.inputContainer}
                        inputStyleLabel={{ color: '#757575' }}
                        typeName={'Nhập lại mật khẩu'}
                        placeholder={'Nhập lại mật khẩu'}
                        setValue={this.retypePass.bind(this)}
                        disabledError={false}
                        autoFocus={false}
                        keyboardType = {'default'}
                    />
                    <View style={styles.buttonSection}>
                        <Button
                            isLoading={this.state.isLoading}
                            label={'Xác nhận'}
                            onPress={() => this.onButtonPress()}
                            disabled={!(this.state.newPass.text && this.state.retypePass.text)}
                        />
                    </View>
                    {/* <View style={styles.proceedBtnWrap}>
                        <TouchableOpacity style={[styles.proceedBtn, this.state.active == true && styles.proceedBtnOn]} onPress={() => this.onButtonPress()}>
                            <Text style={[styles.proceedBtnTitle, this.state.active == true && styles.proceedBtnTitleOn]}>{CreatePasswordStrings.btnDone}</Text>
                        </TouchableOpacity>
                    </View>  */}
                </View>
            </ScrollView>
        );
    }
}
function mapStateToProps(state) {
    return {
        user : state.Auth.user
    };
}

function mapDispatchToProps(dispatch) {
    return {
       
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CreatePasswordScreen);

const styles = StyleSheet.create({
    container: {
        position: 'relative',
        flex: 1,
        backgroundColor: '#F0F5F6',
    },
    inputContainer : {
        borderColor: '#D5D9DE', 
        borderWidth: 1, 
        borderRadius: 6, 
        shadowColor: '#AAC1C5',
        shadowOffset: { width: 0, height: 1 }, 
        shadowOpacity: 0.36
    },
    textHeader: {
        marginLeft: 10,
        paddingTop: 15,
        justifyContent: 'center',
        alignItems: 'flex-start',
        marginBottom: 30
    },
    headerContainer: {
        backgroundColor: '#FFFFFF',
        flexDirection: 'row',
        paddingTop: 30,
        paddingBottom: 15,
        paddingHorizontal: 30,
    },
    header: {
        paddingTop: 26,
        paddingBottom: 10,
        position: 'relative',
        height: 63,
        backgroundColor: '#1572B8'
    },
    headerImage: {
        backgroundColor: '#FFFFFF'
    },
    headerTitle: {
        color: '#FFFFFF',
        fontFamily: FONT.APP,
        fontSize: 14,
        textAlign: 'center',
        paddingTop: 5,
        fontWeight: 'bold'
    },
    textHeaderStyle: {
        flexDirection: 'column',
        fontSize: (Dimensions.get('window').height >= 570) ? 16 : 15,
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
    footer: {
        paddingTop: 30,
        paddingBottom: 15,
        paddingHorizontal: 40,
    },
    proceedBtnWrap: {
        backgroundColor: '#F0F5F6',
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 15,
        paddingRight: 15,
        marginTop: 7
    },
    proceedBtn: {
        height: 50,
        backgroundColor: '#ccdce9',
        borderRadius: 50,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    proceedBtnOn: {
        backgroundColor: '#00528f'
    },
    proceedBtnTitle: {
        color: '#9bbbd4'
    },
    proceedBtnTitleOn: {
        color: '#ffffff'
    },
    buttonSection: {
        width: '100%',
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 15,
        paddingRight: 15,
        marginTop: 7

    }
});


