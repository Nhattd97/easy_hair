import React, {Component} from 'react'
import {Image, StyleSheet, Text, View} from 'react-native'

class UserFeedback extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {image, comment, userName, count} = this.props;
    return (
      <View style={[styles.container, {flexDirection: 'row', marginBottom: 15}]}>
        <View style={styles.avaContainer}>
          <Image style={styles.image}
                 source={image === '' || image === null ? require('../assets/images/non_avatar.jpg') : {uri: image}}/>
        </View>
        <View style={styles.rowContainer}>
          <View style={styles.row}>
            <Text style={styles.rowText}>{userName}</Text>
          </View>
          <View style={styles.row}>
            {
              (count == "5") ? <Image style={styles.rowImage} source={require('../assets/images/5star.png')}/> : null
            }
            {
              (count == "4") ? <Image style={styles.rowImage} source={require('../assets/images/4star.png')}/> : null
            }
            {
              (count == "3") ? <Image style={styles.rowImage} source={require('../assets/images/3star.png')}/> : null
            }
            {
              (count == "2") ? <Image style={styles.rowImage} source={require('../assets/images/2star.png')}/> : null
            }
            {
              (count == "1") ? <Image style={styles.rowImage} source={require('../assets/images/1star.png')}/> : null
            }
          </View>
          <View style={styles.row}>
            <Text style={styles.rowText}>{comment}</Text>
          </View>
        </View>

      </View>
    )
  }

}


const styles = StyleSheet.create({
  avaContainer: {flexDirection: 'row', aspectRatio: 2},
  image: {width: '50%', aspectRatio: 1, borderRadius: 200},
  rowImage: {width: '88%', height: '100%', resizeMode: 'stretch'},
  rowText: {color: 'black'},
  rowContainer: {flex: 4},
  row: {flex: 1, flexDirection: 'row'}
})


export {UserFeedback};
