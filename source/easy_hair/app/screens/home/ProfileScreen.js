import React, { Component } from 'react'
import { View, Text, TouchableOpacity, ImageBackground, Image, Alert } from 'react-native'

export default class ProfileScreenView extends Component {

    onSettingButtonPressed(){
        Alert.alert("Hello");
    }

    render() {
        return (
            <View/>
        )
    //     return (
    //         <View style={{ flex: 1, backgroundColor: 'white' }}>
    //             <View style={{ flex: 4,  alignItems: 'center', justifyContent: 'center' }}>
    //                 <View style={{ width: '100%', height: '50%', backgroundColor: '#1774BA' }}>
    //                     <TouchableOpacity
    //                         onPress={this.onSettingButtonPressed}
    //                         style={{ alignSelf: 'flex-end', marginTop: 15, marginRight: 7 }}>
    //                         <Image style={{ width: 20, height: 20, borderRadius: 50 }}  />
    //                     </TouchableOpacity>
    //                 </View>

    //                 <View style={{ width: '100%', height: '50%', backgroundColor: 'white', alignItems: 'center', justifyContent: 'flex-start', paddingTop: 70 }}>
    //                     <Text style={{ fontWeight: 'bold', color: 'black' }}>TAYLOR SWIFT</Text>
    //                 </View>

    //                 <Image style={{ width: 130, height: 130, borderRadius: 50, position: 'absolute' }}  />
    //             </View>

    //             <View style={{ flex: 5, paddingBottom: 30, marginLeft: 30 }}>
    //                 <View style={{ flex: 1, borderBottomColor: '#EBEBEB', borderBottomWidth: 1, justifyContent: 'flex-end', paddingBottom: 5 }}>
    //                     <Text style={{ color: '#2F80ED' }}>Họ tên : </Text>
    //                     <Text style={{ color: 'black' }}>Taylor Swift</Text>
    //                 </View>

    //                 <View style={{ flex: 1, borderBottomColor: '#EBEBEB', borderBottomWidth: 1, justifyContent: 'flex-end', paddingBottom: 5 }}>
    //                     <Text style={{ color: '#2F80ED' }}>Giới tính : </Text>
    //                     <Text style={{ color: 'black' }}>Nữ</Text>
    //                 </View>


    //                 <View style={{ flex: 1, borderBottomColor: '#EBEBEB', borderBottomWidth: 1, justifyContent: 'flex-end', paddingBottom: 5 }}>
    //                     <Text style={{ color: '#2F80ED' }}>Ngày sinh : </Text>
    //                     <Text style={{ color: 'black' }}>12/03/1989</Text>
    //                 </View>

    //                 <View style={{ flex: 1, borderBottomColor: '#EBEBEB', borderBottomWidth: 1, justifyContent: 'flex-end', paddingBottom: 5 }}>
    //                     <Text style={{ color: '#2F80ED' }}>Địa chỉ : </Text>
    //                     <Text style={{ color: 'black' }}>New York</Text>
    //                 </View>


    //             </View>
    //         </View>
    //     );
     };
}
