import React, { Component } from 'react'
import { View, Text, TouchableOpacity, ImageBackground, Image, Alert } from 'react-native'

var ImagePicker = require('react-native-image-picker');

var options = {
  title: 'Select Avatar',

  storageOptions: {
    skipBackup: true,
    path: 'images'
  }
};
export default class ProfileScreenView extends Component {

    onSettingButtonPressed(){
        Alert.alert("Hello");
    }
    onPhotoButtonPressed(){
        ImagePicker.showImagePicker(options, (response) => {
          
            if (response.didCancel) {
              console.log('User cancelled image picker');
            }
            else if (response.error) {
              console.log('ImagePicker Error: ', response.error);
            }
            else if (response.customButton) {
              console.log('User tapped custom button: ', response.customButton);
            }
            else {
              let source = { uri: response.uri };
          
          
              this.setState({
                avatarSource: source
              });
            }
          });
    }

    constructor(props){
        super(props);
        this.state={
            avatarSource:null
        }
    }

    render() {
        let img = this.state.avatarSource == null? null:
        <Image style={{ width: 130, height: 130, borderRadius: 50, position: 'absolute' }} source={this.state.avatarSource} />
        return (
            <View style={{ flex: 1, backgroundColor: 'white' }}>
                <View style={{ flex: 4,  alignItems: 'center', justifyContent: 'center' }}>
                    <View style={{ width: '100%', height: '50%', backgroundColor: '#1774BA' }}>
                        <TouchableOpacity
                            onPress={this.onSettingButtonPressed}
                            style={{ alignSelf: 'flex-end', marginTop: 15, marginRight: 7 }}>
                            <Image style={{ width: 20, height: 20, borderRadius: 50 }} source={require('../../assets/images/settingButton.png')} />
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={this.onPhotoButtonPressed.bind(this)}
                            style={{ alignSelf: 'flex-end', marginTop: 50, marginRight: 7 }}>
                           <Image style={{ width: 20, height: 20, borderRadius: 50 }} source={require('../../assets/images/camera.png')} />
                        </TouchableOpacity>
                 
                    </View>
                        
                    <View style={{ width: '100%', height: '50%', backgroundColor: 'white', alignItems: 'center', justifyContent: 'flex-start', paddingTop: 70 }}>
                        <Text style={{ fontWeight: 'bold', color: 'black' }}>{this.props.user.name}</Text>
                    </View>
                    
                   {img}
                </View>

                <View style={{ flex: 5, paddingBottom: 30, marginLeft: 30 }}>
                    <View style={{ flex: 1, borderBottomColor: '#EBEBEB', borderBottomWidth: 1, justifyContent: 'flex-end', paddingBottom: 5 }}>
                        <Text style={{ color: '#2F80ED' }}>Họ tên : </Text>
                        <Text style={{ color: 'black' }}>{this.props.user.name}</Text>
                    </View>

                    <View style={{ flex: 1, borderBottomColor: '#EBEBEB', borderBottomWidth: 1, justifyContent: 'flex-end', paddingBottom: 5 }}>
                        <Text style={{ color: '#2F80ED' }}>Giới tính : </Text>
                        <Text style={{ color: 'black' }}>{this.props.user.gender}</Text>
                    </View>


                    <View style={{ flex: 1, borderBottomColor: '#EBEBEB', borderBottomWidth: 1, justifyContent: 'flex-end', paddingBottom: 5 }}>
                        <Text style={{ color: '#2F80ED' }}>Ngày sinh : </Text>
                        <Text style={{ color: 'black' }}>{this.props.user.birthday}</Text>
                    </View>

                    <View style={{ flex: 1, borderBottomColor: '#EBEBEB', borderBottomWidth: 1, justifyContent: 'flex-end', paddingBottom: 5 }}>
                        <Text style={{ color: '#2F80ED' }}>Địa chỉ : </Text>
                        <Text style={{ color: 'black' }}>{this.props.user.address}</Text>
                    </View>


                </View>
            </View>
        );
    };
 
}