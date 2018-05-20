import React, { Component } from 'react';
import {
    View,
    Text,
    KeyboardAvoidingView,
    StyleSheet,
    Image,
    TouchableOpacity,
    TextInput,
    ScrollView,
    Picker,
    Item,
    Dimensions
} from 'react-native';

import DateTimePicker from 'react-native-modal-datetime-picker';
import moment from 'moment';
import { FONT } from '../../const';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import firebase from 'react-native-firebase'

// Import actions
import * as AuthActions from '../../actions/AuthAction'

class InfoScreen extends Component {

    static navigationOptions = {
        header: (props) => (
            <View style={styles.header}>
                <View>
                    <Text style={styles.headerTitle}>{'ĐĂNG KÝ'}</Text>
                </View>
            </View>
        ),
        tabBarVisible: true
    }

    constructor(props) {
        super(props);
        this.database = firebase.database()
        //dataGender = ['Male', 'Female', 'Other'];
        this.state = {
            selected: "Male",
            isDateTimePickerVisible: false,
            chosenDate: '',
            password: '',
            passwordConfirm: '',
            name: '',
            birthday : '18/07/1997',
            address : 'Binh duong'
        }
    }

    writeUserInfo = (userId) => {
        this.database.ref(`users/${userId}`).set({
            name : this.state.name,
            gender : this.state.selected,
            birthday : this.state.birthday,
            address : this.state.address,
            avatar : ''
        })
    }

    // renderGenderItem() {
    //     items = [];
    //     for (let item of dataGender) {
    //         items.push(<Picker.Item key={item} label={item} value={item} color='#AFAFAF'/>)
    //     }
    //     return items;
    // }

    handleDateTimePicker = (date) => {
        this.setState({
            isDateTimePickerVisible: false,
            chosenDate: moment(date).format('DD-MM-YYYY'),
        })
    }

    hideDateTimePicker = () => {
        this.setState({ isDateTimePickerVisible: false, })
    }

    showDateTimePicker = () => {
        this.setState({ isDateTimePickerVisible: true, })
    }

    continueChecker = (userId) => {
        // return this.state.password == this.state.passwordConfirm ? true: false

        if (this.state.password != this.state.passwordConfirm) {
            alert("Your password confirm is NOT match!");
        }
        else if (this.state.name == '') {
            alert("Your name can NOT be empty.");
        }
        else if (this.state.password.length < 6) {
            alert("Your password least 6 letters.");
        }
        else {
            this.writeUserInfo(userId)
            this.props.user.updateEmail(`${this.props.phone}@domain.com`)
            .then(() => {
                this.props.user.updatePassword(this.state.password)
                .then(() => {
                    this.props.navigation.navigate("Confirm")
                })
                .catch( error => {
                    alert(error)
                } )
                })
            .catch( error => {
                alert(error)
            } )
        }
        
        
    }

    render() {
        return (
            <KeyboardAvoidingView
                behavior='padding'
                style={styles.sContainer}>

                <ScrollView style={styles.sContainer}>



                    <View style={styles.sInfo}>
                        <Image style={styles.sImageInfo}
                            source={require('../../assets/images/fill_info.png')} />
                        <View style={styles.sTextInfoView}>
                            <Text style={styles.sTextInfoWelcome}>
                                Chào mừng!
                            </Text>
                            <View style={{ width: 230 }}>
                                <Text style={styles.sTextInfoContent}
                                    multiline={true}>
                                    Hãy nhập thông tin và mật khẩu
                                    cho tài khoản của bạn.
                            </Text>
                            </View>
                        </View>
                    </View>

                    <View style={styles.sGroup}>
                        <View style={styles.sGroupContent}>
                            <Text style={styles.sTextInputTitle}>
                                Họ tên
                            </Text>

                            <TextInput style={styles.sTextInputName}
                                underlineColorAndroid='transparent'
                                placeholder='Họ tên'
                                placeholderTextColor='#AFAFAF'
                                onChangeText={(name) => { this.setState({ name }); }} />

                            <Text style={styles.sTextInputTitle}>
                                Giới tính
                            </Text>

                            <View style={{borderRadius: 6,backgroundColor: '#fff', width: 100, height: 40, flex:.5}}>
                            <Picker
                                selectedValue={this.state.selected}
                                style={styles.sPickerGender}
                                onValueChange={(itemValue, itemIndex) => this.setState({ selected: itemValue })}>
                                <Picker.Item label="Nam" value="Male" />
                                <Picker.Item label="Nữ" value="Female" />
                                <Picker.Item label="Khác" value="Other" />
                            </Picker>
                            </View>

                            <Text style={styles.sTextInputTitle}>
                                Ngày sinh
                            </Text>

                            <View style={{ flexDirection: 'row' }}>
                                <TextInput // key={idDoB}
                                    style={styles.sTextInputDoB}
                                    underlineColorAndroid='transparent'
                                    placeholder="18/07/1997"
                                    placeholderTextColor="#AFAFAF"
                                    editable={false}
                                    selectTextOnFocus={false}>
                                    {this.state.chosenDate}
                                </TextInput>

                                <TouchableOpacity style={{ marginLeft: 30 }}
                                    onPress={this.showDateTimePicker}>
                                    <Image style={{ width: 40, height: 40 }}
                                        source={require('../../assets/images/fill_info.png')} />
                                </TouchableOpacity>

                                <DateTimePicker
                                    isVisible={this.state.isDateTimePickerVisible}
                                    onConfirm={this.handleDateTimePicker}
                                    onCancel={this.hideDateTimePicker}
                                    mode='date' />

                            </View>

                            <Text style={styles.sTextInputTitle}>
                                Mật khẩu
                            </Text>

                            <TextInput style={styles.sTextInputPassword}
                                underlineColorAndroid='transparent'
                                placeholder='Mật khẩu'
                                placeholderTextColor="#AFAFAF"
                                secureTextEntry={true}
                                onChangeText={(password) => { this.setState({ password }); }} />

                            <Text style={styles.sTextInputTitle}>
                                Nhập lại mật khẩu
                            </Text>

                            <TextInput style={styles.sTextInputPassword}
                                underlineColorAndroid='transparent'
                                placeholder='Nhập lại mật khẩu'
                                placeholderTextColor="#AFAFAF"
                                secureTextEntry={true}
                                onChangeText={(passwordConfirm) => { this.setState({ passwordConfirm }); }} />
                        </View>

                        <View style={styles.sGroupButtonContinue}>
                            <TouchableOpacity style={styles.sButtonContinue}
                                onPress={()=> {this.continueChecker(this.props.user.uid)}}>
                                <Text style={styles.sTextButtonContinue}>
                                    Tiếp theo
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                </ScrollView>
            </KeyboardAvoidingView>
        );
    }
}

function mapStateToProps(state) {
    return {
        user : state.Auth.user,
        phone : state.Auth.phone
    };
}
function mapDispatchToProps(dispatch) {
    return {
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(InfoScreen)

const widthScreen = Dimensions.get('window').width;

const styles = StyleSheet.create({
    sContainer: {
        flex: 1,
    },


    sInfo: {
        backgroundColor: "#ffffff",
        flexDirection: 'row',
        width: null,
        height: 130,
    },

    sGroup: {
        backgroundColor: '#F0F5F6',
    },


    sTextInfoWelcome: {
        fontFamily: 'Roboto-Bold',
        fontWeight: 'bold',
        fontSize: 18,
        lineHeight: 21,
        color: "#000000",
    },

    sTextInfoContent: {
        fontFamily: 'Roboto-Light',
        fontWeight: 'normal',
        fontSize: 16,
        lineHeight: 20,
        color: "#000000",

    },

    sImageInfo: {
        marginLeft: '7%',
        marginTop: '6%',
        marginRight: '3%',
        width: '20%',
        height: '60%',
    },

    sTextInfoView: {
        paddingTop: '8%',
    },

    sGroupContent: {
        paddingLeft: '10%',
        paddingTop: 24
    },

    sGroupButtonContinue: {
        alignItems: 'center',
        marginTop: 20,
        marginBottom: 30,
    },

    sButtonContinue: {
        backgroundColor: '#2D9CDB',
        width: 240,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center'
    },

    sTextButtonContinue: {
        color: '#FFFFFF',
        fontFamily: 'Roboto-Medium',
        fontWeight: 'bold',
        fontSize: 17,
        lineHeight: 20,
    },

    sTextInputTitle: {
        color: '#828282',
        fontFamily: 'Roboto-Medium',
        fontSize: 13,
        lineHeight: 18,
        marginTop: 6,
        marginBottom: 6,
    },

    sTextInputName: {
        borderRadius: 5,
        backgroundColor: '#FFFFFF',
        width: '90%',
        height: 35,
        fontSize: 13,
        paddingLeft: 12,
    },

    sPickerGender: {
        alignItems: 'center',
        justifyContent: 'center',
        color:'#AFAFAF',
    },

    sTextInputDoB: {
        borderRadius: 6,
        backgroundColor: "#ffffff",
        width: '30%',
        height: 35,
        paddingLeft: 12,
    },

    sTextInputPassword: {
        borderRadius: 6,
        backgroundColor: '#FFFFFF',
        width: '90%',
        height: 35,
        paddingTop: 7,
        paddingLeft: 12,
    },
    header: {
        paddingTop: 18,
        paddingBottom: 10,
        position: 'relative',
        height: 63,
        backgroundColor: '#2D9CDB'
    },
    headerTitle: {
        color: '#FFFFFF',
        fontFamily: FONT.APP,
        fontSize: 18,
        textAlign: 'center',
        paddingTop: 5,
        fontWeight: 'bold'
    },

});
