import React, { Component } from 'react'
import { View, Text, TouchableOpacity, ImageBackground, Image, Alert } from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import firebase from 'react-native-firebase'

import ImagePicker from 'react-native-image-picker'

var options = {
  title: 'Select Avatar',

  storageOptions: {
    skipBackup: true,
    path: 'images'
  }
};

const storage = firebase.storage()
const storageRef = storage.ref()

class ProfileScreen extends Component {
    static navigationOptions = {
        header : null
    }

    constructor(props){
        super(props);
        this.state={
            avatarSource: '',
            userData : null,
            name : '',
            gender : '',
            birthday : '',
            address : ''

        }
    }

    componentDidMount() {
        const database = firebase.database().ref(`users/${this.props.user.uid}`)
        database.on('value',(data) => {
            const userData = data.val()
            const {name,gender,birthday,address} = userData
            this.setState({
                name,
                gender,
                birthday,
                address
            })
        })
    }

    getImage = () => {
        const imageURL = storageRef.child('taylor.jpg')
        imageURL.getDownloadURL().then((url) => {
            this.setImage(url)
          }).catch(function(error) {
            // Handle any errors
            alert(error)
          });
    }

    setImage(url) {
        this.setState({
            avatarSource : url
        })
    }

    onSettingButtonPressed = () => {
        this.props.navigation.navigate('Setting')
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
              firebase
              .storage()
              .ref('/avatars')
              .putFile(
                `${response.path}`
              )
              .then(
                  //alert(response.path)
              )
              .catch(
                  //alert(response.name)
              );
          
              this.setState({
                avatarSource: source
              });
            }
          });
    }

    render() {
        let img = this.state.avatarSource === null || this.state.avatarSource ===''? 
        <Image style={{ width: 130, height: 130, borderRadius: 100, position: 'absolute' }} source={require('../../assets/images/non_avatar.jpg')} />
        :
        <Image style={{ width: 130, height: 130, borderRadius: 100, position: 'absolute' }} source={this.state.avatarSource} />
        return (
            <View style={{ flex: 1, backgroundColor: 'white' }}>
                <View style={{ flex: 4,  alignItems: 'center', justifyContent: 'center' }}>
                    <View style={{ width: '100%', height: '50%', backgroundColor: '#1774BA' }}>
                        <TouchableOpacity
                            onPress={() => {this.onSettingButtonPressed()}}
                            style={{ alignSelf: 'flex-end', marginTop: 15, marginRight: 7 }}>
                            <Image style={{ width: 20, height: 20, borderRadius: 50 }} source={require('../../assets/images/setting.png')} />
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={this.onPhotoButtonPressed.bind(this)}
                            style={{ alignSelf: 'flex-end', marginTop: 50, marginRight: 7 }}>
                           <Image style={{ width: 20, height: 20, borderRadius: 50 }} source={require('../../assets/images/camera.png')} />
                        </TouchableOpacity>
                 
                    </View>
                        
                    <View style={{ width: '100%', height: '50%', backgroundColor: 'white', alignItems: 'center', justifyContent: 'flex-start', paddingTop: 70 }}>
                        <Text style={{ fontWeight: 'bold', color: 'black' }}>{this.state.name}</Text>
                    </View>
                    
                   {img}
                </View>

                <View style={{ flex: 5, paddingBottom: 30, marginLeft: 30 }}>
                    <View style={{ flex: 1, borderBottomColor: '#EBEBEB', borderBottomWidth: 1, justifyContent: 'flex-end', paddingBottom: 5 }}>
                        <Text style={{ color: '#2F80ED' }}>Họ tên : </Text>
                        <Text style={{ color: 'black' }}>{this.state.name}</Text>
                    </View>

                    <View style={{ flex: 1, borderBottomColor: '#EBEBEB', borderBottomWidth: 1, justifyContent: 'flex-end', paddingBottom: 5 }}>
                        <Text style={{ color: '#2F80ED' }}>Giới tính : </Text>
                        <Text style={{ color: 'black' }}>{this.state.gender}</Text>
                    </View>


                    <View style={{ flex: 1, borderBottomColor: '#EBEBEB', borderBottomWidth: 1, justifyContent: 'flex-end', paddingBottom: 5 }}>
                        <Text style={{ color: '#2F80ED' }}>Ngày sinh : </Text>
                        <Text style={{ color: 'black' }}>{this.state.birthday}</Text>
                    </View>

                    <View style={{ flex: 1, borderBottomColor: '#EBEBEB', borderBottomWidth: 1, justifyContent: 'flex-end', paddingBottom: 5 }}>
                        <Text style={{ color: '#2F80ED' }}>Địa chỉ : </Text>
                        <Text style={{ color: 'black' }}>{this.state.address}</Text>
                    </View>


                </View>
            </View>
        );
    };
 
}

function mapStateToProps(state) {
    return {
        user : state.Auth.user
    }
}

function mapDispatchToProps(dispatch) {
    return {

    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ProfileScreen)