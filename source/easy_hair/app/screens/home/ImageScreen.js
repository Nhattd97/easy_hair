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