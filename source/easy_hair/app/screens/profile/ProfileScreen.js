import React, {Component} from 'react'
import {ActivityIndicator, StatusBar, Image, Modal, Platform, StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import {connect} from 'react-redux'
import firebase from 'react-native-firebase'
import RNFetchBlob from 'react-native-fetch-blob'

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

const Blod = RNFetchBlob.polyfill.Blob
const fs = RNFetchBlob.fs

window.XMLHttpRequest = RNFetchBlob.polyfill.XMLHttpRequest
window.Blob = Blod

class ProfileScreen extends Component {
  static navigationOptions = {
    header: null
  }

  constructor(props) {
    super(props);
    this.state = {
      avatar: '',
      userData: null,
      name: '',
      gender: '',
      birthday: '',
      address: '',
      isUpdating: false
    }
  }

  componentWillMount() {
    const database = firebase.database().ref(`users/${this.props.user.uid}`)
    database.on('value', (data) => {
      const userData = data.val()
      const {name, gender, birthday, address, avatar} = userData
      this.setState({
        name,
        gender,
        birthday,
        address,
        avatar,
      })
    })
  }

  writeUserInfo = () => {
    const database = firebase.database()
    database.ref(`users/${this.props.user.uid}`).set({
      name: this.state.name,
      gender: this.state.gender,
      birthday: this.state.birthday,
      address: this.state.address,
      avatar: this.state.avatar
    })
  }

  uploadImage = (uri, mime = 'img/jpg') => {
    return new Promise((resolve, reject) => {
      const uploadUri = Platform.OS === 'ios' ? uri.replace('file://', '') : uri
      const sessionId = new Date().getTime()
      let uploadBlob = null
      const imageRef = storage.ref('avatars').child(`${this.props.user.uid}.jpg`)

      fs.readFile(uploadUri, 'base64')
        .then(data => {
          return Blod.build(data, {type: `${mime};BASE64`})
        })
        .then(blob => {
          uploadBlob = blob
          return imageRef.put(uploadUri, {contentType: mime})
        })
        .then(() => {
          uploadBlob.close()
          return imageRef.getDownloadURL()
        })
        .then(url => {
          resolve(url)
        })
        .catch(error => {
          reject(error)
        })
    })
  }


  pickImage = () => {
    ImagePicker.showImagePicker(options, (response) => {

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        this.setState({
          isUpdating: true
        })
        this.uploadImage(response.uri)
          .then(url => {
            this.setState({avatar: url, isUpdating: false})
            this.writeUserInfo()
          })
          .catch(error => alert(error))
      }
    })
  }


  onSettingButtonPressed = () => {
    this.props.navigation.navigate('Setting')
  }

  onPhotoButtonPressed() {
    ImagePicker.showImagePicker(options, (response) => {

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        let source = {uri: response.uri};
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

        //   this.setState({
        //     avatar: source
        //   });
      }
    });
  }

  render() {
    let img = this.state.avatar === null || this.state.avatar === '' ?
      <Image style={{width: 130, height: 130, borderRadius: 100, position: 'absolute'}}
             source={require('../../assets/images/non_avatar.jpg')}/>
      :
      <Image style={{width: 130, height: 130, borderRadius: 100, position: 'absolute'}}
             source={{uri: this.state.avatar}}/>
    return (
      <View style={{flex: 1, backgroundColor: 'white'}}>
        <StatusBar hidden />
        <Modal transparent={true} visible={this.state.isUpdating} onRequestClose={() => {
        }}>
          <View style={styles.modal}>
            <ActivityIndicator/>
          </View>
        </Modal>
        <View style={{flex: 4, alignItems: 'center', justifyContent: 'center'}}>
          <View style={{width: '100%', height: '50%', backgroundColor: '#2D9CDB'}}>
            <TouchableOpacity
              onPress={this.onSettingButtonPressed}
              style={{alignSelf: 'flex-end', marginTop: 15, marginRight: 7}}>
              <Image style={{width: 20, height: 20, borderRadius: 50}}
                     source={require('../../assets/images/setting.png')}/>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={this.pickImage.bind(this)}
              style={{alignSelf: 'flex-end', marginTop: 50, marginRight: 7}}>
              <Image style={{width: 20, height: 20, borderRadius: 50}}
                     source={require('../../assets/images/camera.png')}/>
            </TouchableOpacity>

          </View>

          <View style={{
            width: '100%',
            height: '50%',
            backgroundColor: 'white',
            alignItems: 'center',
            justifyContent: 'flex-start',
            paddingTop: 70
          }}>
            <Text style={{fontWeight: 'bold', color: 'black'}}>{this.state.name}</Text>
          </View>

          {img}
        </View>

        <View style={{flex: 5, paddingBottom: 30, marginLeft: 30}}>
          <View style={{
            flex: 1,
            borderBottomColor: '#EBEBEB',
            borderBottomWidth: 1,
            justifyContent: 'flex-end',
            paddingBottom: 5
          }}>
            <Text style={{color: '#2F80ED'}}>Họ tên : </Text>
            <Text style={{color: 'black'}}>{this.state.name}</Text>
          </View>

          <View style={{
            flex: 1,
            borderBottomColor: '#EBEBEB',
            borderBottomWidth: 1,
            justifyContent: 'flex-end',
            paddingBottom: 5
          }}>
            <Text style={{color: '#2F80ED'}}>Giới tính : </Text>
            <Text style={{color: 'black'}}>{this.state.gender}</Text>
          </View>


          <View style={{
            flex: 1,
            borderBottomColor: '#EBEBEB',
            borderBottomWidth: 1,
            justifyContent: 'flex-end',
            paddingBottom: 5
          }}>
            <Text style={{color: '#2F80ED'}}>Ngày sinh : </Text>
            <Text style={{color: 'black'}}>{this.state.birthday}</Text>
          </View>

          <View style={{
            flex: 1,
            borderBottomColor: '#EBEBEB',
            borderBottomWidth: 1,
            justifyContent: 'flex-end',
            paddingBottom: 5
          }}>
            <Text style={{color: '#2F80ED'}}>Địa chỉ : </Text>
            <Text style={{color: 'black'}}>{this.state.address}</Text>
          </View>


        </View>
      </View>
    );
  };

}

function mapStateToProps(state) {
  return {
    user: state.Auth.user
  }
}

function mapDispatchToProps(dispatch) {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileScreen)

const styles = StyleSheet.create({
  modal: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
})
