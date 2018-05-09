import React, { Component } from 'react'
import {
    View,
    Dimensions,
    Image,
    FlatList,
    StyleSheet,
    TouchableOpacity
} from 'react-native'
import firebase from 'react-native-firebase'

const { width, height } = Dimensions.get('window');

function wp (percentage) {
    const value = (percentage * width) / 100;
    return Math.round(value);
}

class ImageScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            albumCrop : [
                "https://firebasestorage.googleapis.com/v0/b/easy-hair-914b1.appspot.com/o/images%2Fcrop%2F1.jpg?alt=media&token=69ea69df-e322-455a-9e33-f508b3c20d3b",
                "https://firebasestorage.googleapis.com/v0/b/easy-hair-914b1.appspot.com/o/images%2Fcrop%2F2.jpg?alt=media&token=a32dacf5-db6d-48e1-b63c-ef2f9482668f",
                "https://firebasestorage.googleapis.com/v0/b/easy-hair-914b1.appspot.com/o/images%2Fcrop%2F3.jpg?alt=media&token=78cedf42-b86f-4d08-b569-e1de33e2964d",
                "https://firebasestorage.googleapis.com/v0/b/easy-hair-914b1.appspot.com/o/images%2Fcrop%2F4.jpg?alt=media&token=b4f26da1-1e65-42e9-87ac-f95a124f4fe3",
                "https://firebasestorage.googleapis.com/v0/b/easy-hair-914b1.appspot.com/o/images%2Fcrop%2F5.jpg?alt=media&token=4a13f451-133c-4d24-b82a-fe1142d2c3a9",
                "https://firebasestorage.googleapis.com/v0/b/easy-hair-914b1.appspot.com/o/images%2Fcrop%2F6.jpg?alt=media&token=ab9ece05-2435-42cd-91c1-11b03d84f48e",
                "https://firebasestorage.googleapis.com/v0/b/easy-hair-914b1.appspot.com/o/images%2Fcrop%2F7.jpg?alt=media&token=770db097-b48e-4ee4-a3ba-752a17a4feef",
                "https://firebasestorage.googleapis.com/v0/b/easy-hair-914b1.appspot.com/o/images%2Fcurly%2F1.jpg?alt=media&token=74b29aaa-480a-4575-aaf4-60f284823eb5",
                "https://firebasestorage.googleapis.com/v0/b/easy-hair-914b1.appspot.com/o/images%2Fcurly%2F2.jpg?alt=media&token=16c48eee-ab0b-40ad-b8ca-670fa07b3cb0",
                "https://firebasestorage.googleapis.com/v0/b/easy-hair-914b1.appspot.com/o/images%2Fcurly%2F3.jpg?alt=media&token=126e1b10-fa20-4adb-bd51-18dac067df1f",
                "https://firebasestorage.googleapis.com/v0/b/easy-hair-914b1.appspot.com/o/images%2Fcurly%2F4.jpg?alt=media&token=2a11771d-5204-405c-a755-e206c80b3a9f",
                "https://firebasestorage.googleapis.com/v0/b/easy-hair-914b1.appspot.com/o/images%2Fcurly%2F5.jpg?alt=media&token=c510cea6-4d72-45c7-9492-e9ce6c828144",
                "https://firebasestorage.googleapis.com/v0/b/easy-hair-914b1.appspot.com/o/images%2Fcurly%2F6.jpg?alt=media&token=ab5db736-d734-403b-8ba1-39a11fbcd981",
                "https://firebasestorage.googleapis.com/v0/b/easy-hair-914b1.appspot.com/o/images%2Fcurly%2F7.jpg?alt=media&token=2a890a47-37f3-4120-9fcc-7bbd86cdd99a",
                "https://firebasestorage.googleapis.com/v0/b/easy-hair-914b1.appspot.com/o/images%2Fcurly%2F8.jpg?alt=media&token=76ecdc9b-70cf-4b3f-8c85-ae26e525e834",
                "https://firebasestorage.googleapis.com/v0/b/easy-hair-914b1.appspot.com/o/images%2Fcurly%2F9.jpg?alt=media&token=e0d65d9b-8d03-4bc8-8e75-bdd867e5499e"
            ],
            album : []
        }
    }

    componentWillMount() {
        // const database = firebase.database().ref(`images/men/album1/images`)
        // database.on('value',(data) => {
        //     const userData = data.val()
        //     const {name,gender,birthday,address} = userData
        //     this.setState({
        //         album : userData
        //     })
        // })
        const {params} = this.props.navigation.state
        //alert(images)
        this.setState({
            album : params.images
        })

    }

    render() {
        //alert(this.state.album)
        const dimension = wp(46)
        return(
            <View style = {styles.container}>
                <FlatList
                    contentContainerStyle = {{ marginLeft : wp(3)}}
                    numColumns = {2}
                    data={this.state.album}
                    refreshing = {true}
                    showsVerticalScrollIndicator={false}
                    renderItem={({item}) =>
                    {
                        return <TouchableOpacity onPress = {() => {}}>
                            <Image source = {{uri : item}}  style = {{width : dimension, height : dimension , marginRight : wp(3), marginBottom : wp(3)}}/>
                        </TouchableOpacity>
                    }
                    }
                    keyExtractor={(item,index) => index}
                />
            </View>
        )
    }
}

export default ImageScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
   
})