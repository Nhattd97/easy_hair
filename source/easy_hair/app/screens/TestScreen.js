import React, {Component} from 'react'
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    AsyncStorage,
    ScrollView,
    Dimensions,
    Image,
    SafeAreaView,
    StatusBar,
    Platform,
    ImageBackground,
    FlatList,
    Modal
} from 'react-native'
import firebase from 'react-native-firebase'
import Carousel, {Pagination} from 'react-native-snap-carousel'
import {SliderEntry} from '../components'
import ImageText from '../components/ImageText'
import RNFetchBlob from 'react-native-fetch-blob'
import ImagePicker from 'react-native-image-picker'

var options = {
    title: 'Select Avatar',
  
    storageOptions: {
      skipBackup: true,
      path: 'images'
    }
  };

const Blod = RNFetchBlob.polyfill.Blob
const fs = RNFetchBlob.fs

window.XMLHttpRequest = RNFetchBlob.polyfill.XMLHttpRequest
window.Blob = Blod

const IS_IOS = Platform.OS === 'ios';
const { width, height } = Dimensions.get('window');

function wp (percentage) {
    const value = (percentage * width) / 100;
    return Math.round(value);
}


const slideHeight = height * 0.36;
const slideWidth = wp(75);
const itemHorizontalMargin = wp(2);

 const sliderWidth = width;
 const itemWidth = slideWidth + itemHorizontalMargin * 2;
 const SLIDER_1_FIRST_ITEM =1

 const entryBorderRadius = 8;
 const colors = {
     black: '#1a1917',
     gray: '#888888',
     background1: '#c4ebf2',
     background2: '#ffffff',
     red : '#e2b9e5'
 };

 var storageRef = firebase.storage()
 const path = 'Users/TranNhat/Documents/easy_hair/source/easy_hair/app/assets/images/marker.png'

//  const images = [
//     {
//         source : {
//             uri : 'http://sv1.upsieutoc.com/2018/05/18/njj.jpg'
//         },
//         height : 720
//     },
//     {
//         source : {
//             uri : 'http://sv1.upsieutoc.com/2018/05/18/growlonghairmain2.jpg'
//         }
//     },
//     {
//         source : {
//             uri : 'http://sv1.upsieutoc.com/2018/05/18/njj.jpg'
//         }
//     },
//     {
//         source : {
//             uri : 'http://sv1.upsieutoc.com/2018/05/18/1274927e06a36e9ca5aa55bb982af7fe--men-hair--medium--mens-hairstyles-medium.jpg'
//         }
//     },
// ]

const images = [
    {
            url : 'http://sv1.upsieutoc.com/2018/05/18/njj.jpg'
    },
    // {
    //         url : 'http://sv1.upsieutoc.com/2018/05/18/growlonghairmain2.jpg'
    // },
    // {
    //         url : 'http://sv1.upsieutoc.com/2018/05/18/njj.jpg'
    // },
    // {
    //         url : 'http://sv1.upsieutoc.com/2018/05/18/1274927e06a36e9ca5aa55bb982af7fe--men-hair--medium--mens-hairstyles-medium.jpg'
    // },
]

export default class TestScreen extends Component {

    constructor(props) {
        super(props)
        this.state = {
            avatarSource : '',
            
            imageIndex :  0,
            isImageViewVisible : false
        }
    }

    // uploadImage = (uri, mime = 'img/jpg') => {
    //     return new Promise((resolve, reject) => {
    //         const uploadUri = Platform.OS === 'ios' ? uri.replace('file://','') : uri
    //         const sessionId = new Date().getTime()
    //         let uploadBlob = null
    //         const imageRef = storageRef.ref('avatars').child(`${sessionId}.jpg`)

    //         fs.readFile(uploadUri, 'base64')
    //         .then(data => {
    //             return Blod.build(data,{ type : `${mime};BASE64` })
    //         })
    //         .then(blob => {
    //             uploadBlob = blob
    //             return imageRef.put(uploadUri, {contentType : mime})
    //         })
    //         .then(() => {
    //             uploadBlob.close()
    //             return imageRef.getDownloadURL()
    //         })
    //         .then(url => {
    //             resolve(url)
    //         })
    //         .catch(error => {
    //             reject(error)
    //         })
    //     })
    // }

    // pickImage = () => {
    //     ImagePicker.showImagePicker(options, (response) => {
          
    //         if (response.didCancel) {
    //           console.log('User cancelled image picker');
    //         }
    //         else if (response.error) {
    //           console.log('ImagePicker Error: ', response.error);
    //         }
    //         else if (response.customButton) {
    //           console.log('User tapped custom button: ', response.customButton);
    //         }
    //         else {
    //             this.uploadImage(response.uri)
    //             .then(url => this.setState({avatarSource : url}))
    //             .catch(error => alert(error))
    //             //alert(response.path)
    //         }
    //       })
    // }

    pushImage = () => {
        const ref = storageRef.child('avatars/image.png')
        var file = new File(['marker'],path)
        ref.put(file).then(snapshot => {
            alert('uploaded')
        }).catch(error => {
            alert(error)
        })
    }

    render() {
        return(
            <View style = {styles.container}>
                {/* {
                    images.map((image, index) => {
                        <TouchableOpacity onPress = {
                            () => {
                                this.setState({
                                    imageIndex : index,
                                    isImageViewVisible : true
                                })
                            }
                        }>
                        <Image
                            style = {{width : 200, height : 200}}
                            source = {image.source}
                            resizeMode = 'cover'
                        />
                        </TouchableOpacity>
                    })
                } */}
                {/* <TouchableOpacity onPress = {() =>{
                    this.setState({
                        isImageViewVisible : true
                    })
                }}>
                    <Text>Text</Text>
                </TouchableOpacity>
                
                <ImgageView
                    images = {images}
                    imageIndex = {this.state.imageIndex}
                    isVisible = {this.state.isImageViewVisible}
                /> */}
                {/* <Modal visible = {this.sta} onre>
                    <ImageViewer imageUrls = {images}/>
                </Modal> */}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    
})