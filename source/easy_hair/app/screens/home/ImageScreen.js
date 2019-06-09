import React, {Component} from 'react'
import {Dimensions, FlatList, StyleSheet, View} from 'react-native'
import ZoomImage from 'react-native-zoom-image'

const {width, height} = Dimensions.get('window');

function wp(percentage) {
  const value = (percentage * width) / 100;
  return Math.round(value);
}

class ImageScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      album: [],
      isImageViewVisible: false,
      currentImage: 'https://scontent.fsgn5-1.fna.fbcdn.net/v/t1.0-9/26734063_1246822755418092_6500198356385146251_n.jpg?_nc_cat=0&_nc_eui2=AeH3awnsxRws9QYo5Z-wdb22_L-4KH9FrBeaVBlrKD02gN7gT0fgHMxeRYnSU8KANd24MuBbLmsmYE_fl-kUnutid-2FVVEapv7YUGfapjt8mg&oh=8a9d5a52cd9842cc8323c28726a05175&oe=5B86D15E'
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
      album: params.images,
    })

  }

  imagePress = (item) => {
    alert(item)
    this.setState({
      currentImage: item.uri,
      isImageViewVisible: true
    })
  }

  render() {
    //alert(this.state.album)
    const dimension = wp(46)
    return (
      <View style={styles.container}>
        <FlatList
          contentContainerStyle={{marginLeft: wp(3)}}
          numColumns={2}
          data={this.state.album}
          refreshing={true}
          showsVerticalScrollIndicator={false}
          renderItem={({item}, index) => {
            return <ZoomImage
              source={{uri: item}}
              imgStyle={{width: wp(46), height: wp(46), marginRight: wp(3), marginBottom: wp(3)}}
            />
            //return <ImageViewButton uri = {item} />
            //         return <TouchableOpacity onPress = {() => {
            //             this.setState({
            //                 isImageViewVisible : true,
            //             })
            //         }}>

            //             <Image source = {{uri : item}}  style = {{width : dimension, height : dimension , marginRight : wp(3), marginBottom : wp(3)}}/>
            //             <ImageView
            //     images = {[{
            //         source : {uri : item,
            //             width : wp(100),
            //             height : wp(100)
            //         }}]}
            //     isVisible = {this.state.isImageViewVisible}
            //     imageIndex = {0}
            // />
            //         </TouchableOpacity>
          }
          }
          keyExtractor={(item, index) => index}
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
