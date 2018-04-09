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

// Import actions

// Import components
import { HeaderCard, TextInputWithLabel } from '../../components';
import { FONT } from '../../const';

// Import logics

//import string

class ForgotPasswordScreen extends Component {
    static navigationOptions = {
        header: (props) => (
            <View style={styles.header}>
                <View>
                    <TouchableOpacity style={styles.headerLeftBtn} onPress={() => { props.navigation.goBack(null), StatusBar.setBarStyle('light-content'); }}>
                        <Image style={{ width: 28, height: 28 }} source={require('../../assets/images/Back_WHITE.png')} resizeMethod='resize' />
                    </TouchableOpacity>
                    <Text style={styles.headerTitle}>QUÊN MẬT KHẨU</Text>
                </View>
            </View>
        ),
        tabBarVisible: true
    };

    constructor(props) {
        super(props);
        this.state = {
            email: {
                text: '',
                error: false
            },
            active: false,
        };
    }


    getEmail(email) {
        this.setState({ email });

    }

    recoveryCodePress() {
        this.props.navigation.navigate('RecoveryCode')
    }
    render() {
        if (this.state.email.text === '' || this.state.email.error) this.state.active = false
        else this.state.active = true
        return (
            <ScrollView style={styles.container}>
                <HeaderCard
                    link={require('../../assets/images/thank_you.png')}
                >
                    <Text style={styles.textHeaderStyle}>
                    Chúng tôi sẽ gửi một mã code đến điện thoại của bạn đã từng đăng nhập để xác nhận
                </Text>
                </HeaderCard>

                <View style={styles.footer}>
                    <TextInputWithLabel
                        inputStyle={{ marginBottom: 20 }}
                        inputContainer={{
                            borderColor: '#D5D9DE', borderWidth: 1, borderRadius: 6, shadowColor: '#AAC1C5',
                            shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.36
                        }}
                        inputStyleLabel={{ color: '#757575' }}
                        typeName={'Số điện thoại'}
                        placeholder={'Số điện thoại'}
                        keyboardType='phone-pad'
                        setValue={this.getEmail.bind(this)}
                        disabledError={false}
                        autoFocus={true}
                    />
                    <View style={styles.proceedBtnWrap}>

                        <TouchableOpacity style={[styles.proceedBtn, this.state.active == false && styles.proceedBtnOn]} onPress={() => this.recoveryCodePress()}>
                            <Text style={[styles.proceedBtnTitle, this.state.active == false && styles.proceedBtnTitleOn]}>Tiếp theo</Text>

                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        );
    }
}
// function mapStateToProps(state) {
//     return {
//         // userId: state.User.userId,
//         // accountId: state.User.accountId,
//         // userJwt: state.User.jwt,
//         // profile: state.User.profile
//     };
// }
// function mapDispatchToProps(dispatch) {
//     return {
//         // UserActions: bindActionCreators(UserActions, dispatch),
//     };
// }

//export default connect(mapStateToProps, mapDispatchToProps)(ForgotPasswordScreen);
export default ForgotPasswordScreen

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
        paddingTop: 16,
        paddingBottom: 10,
        position: 'relative',
        height: 55,
        backgroundColor: '#1572B8'
    },
    headerImage: {
        backgroundColor: '#FFFFFF'
    },
    headerTitle: {
        color: '#FFFFFF',
        fontFamily: FONT.APP,
        fontSize: 15,
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
        backgroundColor: '#2D9CDB'

    },
    proceedBtnTitle: {
        color: '#9bbbd4'
    },
    proceedBtnTitleOn: {
        color: '#ffffff'
    },
});
