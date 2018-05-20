import React, { Component } from 'react'
import {
    View,
    StyleSheet,
    Text,
    TouchableOpacity,
    AsyncStorage,
    StatusBar,
    Image,
    Alert
} from 'react-native'
import firebase from 'react-native-firebase'

export default class SettingScreen extends Component {
    static navigationOptions = {
        header: (props) => (
            <View style={styles.header}>
                <View>
                    <TouchableOpacity style={styles.headerLeftBtn} onPress={() => { props.navigation.goBack(null), StatusBar.setBarStyle('light-content'); }}>
                        <Image style={{ width: 30, height: 30 }} source={require('../../assets/images/Close_WHITE.png')} resizeMethod='resize' />
                    </TouchableOpacity>
                    <Text style={styles.headerTitle}>Cài đặt</Text>
                </View>
            </View>
        ),
        tabBarVisible: true
    };

    constructor(props) {
        super(props)

    }

    logOut = async () => {

        try {
    
            await firebase.auth().signOut();
            //alert("Log out")
            // Navigate to login view
            this.props.navigation.navigate('Auth')
    
        } catch (error) {
            alert(error);
        }
    }

    onLogOut = () => {

        // try {
    
        //     await firebase.auth().signOut();
        //     //alert("Log out")
        //     // Navigate to login view
        //     this.props.navigation.navigate('Auth')
    
        // } catch (error) {
        //     alert(error);
        // }
        
        Alert.alert(
            "",
            "Bạn có chắc muốn đăng xuất?",
            [
                {
                    text: "Không",
                    onPress: () => { }
                },
                {
                    text: "Có",
                    onPress: () => {
                        this.logOut()
                    }
                },
            ],
            {
                cancelable: false
            }
        );
    }

    changePassword() {
        
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.body}>
                    <TouchableOpacity onPress={() => this.changePassword()}>
                        <View style={styles.bodyCard}>
                            <Text style={styles.bodyCardContentText}>Thay đổi mật khẩu</Text>
                            <View style={styles.headerRightBtn}>
                                <Image style={{ width: 25, height: 25 }} source={require('../../assets/images/right_BLACK.png')} resizeMethod='resize' />
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.onLogOut()}>
                        <View style={styles.bodyCard}>
                            <Text style={styles.bodyCardContentText}>Đăng xuất</Text>
                            <View style={styles.headerRightBtn}>
                                <Image style={{ width: 25, height: 25 }} source={require('../../assets/images/right_BLACK.png')} resizeMethod='resize' />
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>
            </View >
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F0F5F6'
    },
    header: {
        paddingTop: 26,
        paddingBottom: 10,
        position: 'relative',
        height: 63,
        backgroundColor: '#2D9CDB'
    },

    headerTitle: {
        color: '#FFFFFF',
        fontFamily: 'Helvetica',
        fontSize: 16,
        textAlign: 'center',
        paddingTop: 5,
        fontWeight: 'bold'
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
    headerRightBtn: {
        position: 'absolute',
        right: 10,
        justifyContent: 'center',
        width: 40,
        height: 40,
        zIndex: 3,
        alignItems: 'center',
    },
    body: {
        paddingVertical: 30,
    },
    bodyCard: {
        justifyContent: 'center',
        alignItems: 'flex-start',
        marginBottom: 3,
        padding: 15,
        backgroundColor: '#FFFFFF',
    },
    bodyCardTitle: {
        marginBottom: 15,
        fontSize: 14
    },
    bodyCardContentText: {
        color: '#000000',
        fontSize: 14
    },
})