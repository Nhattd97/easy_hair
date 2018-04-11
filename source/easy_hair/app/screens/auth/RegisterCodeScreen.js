// Import libraries
import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Alert,
    TouchableOpacity,
    ImageBackground,
    ScrollView,
    StatusBar,
    Image,
    Dimensions
} from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { FONT } from '../../const';

// Import actions
import * as AuthActions from '../../actions/AuthAction'
// Import components
import { HeaderCard, Input, PasswordInput } from '../../components';

class RegisterCodeScreen extends Component {
    static navigationOptions = {
        header: (props) => (
            <View style={styles.header}>
                <View>
                    <TouchableOpacity style={styles.headerLeftBtn} onPress={() => { props.navigation.goBack(null), StatusBar.setBarStyle('light-content'); }}>
                        <Image style={{ width: 30, height: 30 }} source={require('../../assets/images/Back_WHITE.png')} resizeMethod='resize' />
                    </TouchableOpacity>
                    <Text style={styles.headerTitle}>{'ĐĂNG KÝ'}</Text>
                </View>
            </View>
        ),
        tabBarVisible: true
    };

    constructor(props) {
        super(props);
        this.state = {
            code: {
                text: '',
                error: false
            },
            active: false,
        };
    }


    getCode(code) {
        this.setState({ code });
    }

    resendPress() {
    }

    donePress() {
        this.props.confirmResult.confirm(this.state.code.text)
      .then((user) => {
        this.props.AuthActions.updateUser(user)
        this.props.navigation.navigate('Info')
      })
      .catch((error) => {
        const { code, message } = error;
      });
    }

    render() {
        if (this.state.code.text === '' || this.state.code.error) this.state.active = false
        else this.state.active = true
        return (
            <ScrollView style={styles.container}>
                <HeaderCard
                    link={require('../../assets/images/email.png')}
                >
                    <Text style={styles.textHeaderStyle}>
                    {'Vui lòng nhập mã code mà chúng tôi đã gửi đến điện thoại của bạn'}
                    </Text>
                </HeaderCard>

                <View style={styles.footer}>
                <PasswordInput
                inputStyle={{ marginBottom: 20 }}
                inputContainer={{
                    borderColor: '#D5D9DE', borderWidth: 1, borderRadius: 6, shadowColor: '#AAC1C5',
                    shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.36
                }}
                inputStyleLabel={{ color: '#757575' }}
                typeName={'Mã code'}
                placeholder={'Mã code'}
                setValue={this.getCode.bind(this)}
                disabledError={false}
                autoFocus={true}
                />
                    <TouchableOpacity onPress={() => this.resendPress()}>
                        <View style={styles.textResend} >
                            <Text style={{ fontSize: 15, color: '#00528f' }}>
                            {'GỬI LẠI MÃ CODE'}
                            </Text>
                        </View>
                    </TouchableOpacity>
                    <View style={styles.proceedBtnWrap}>

                        <TouchableOpacity style={[styles.proceedBtn, this.state.active == true && styles.proceedBtnOn]} onPress={() => this.donePress()}>
                            <Text style={[styles.proceedBtnTitle, this.state.active == true && styles.proceedBtnTitleOn]}>{'Tiếp theo'}</Text>

                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        );
    }
}
function mapStateToProps(state) {
    return {
       confirmResult : state.Auth.confirmResult
    };
}
function mapDispatchToProps(dispatch) {
    return {
        AuthActions : bindActionCreators(AuthActions,dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(RegisterCodeScreen);

const styles = StyleSheet.create({
    container: {
        position: 'relative',
        flex: 1,
        backgroundColor: '#F0F5F6',
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
        backgroundColor: '#2D9CDB'
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
    textResend: {
        marginTop: 5,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20
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
});
