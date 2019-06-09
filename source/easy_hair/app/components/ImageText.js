import React, {Component} from 'react'
import {Image, StyleSheet, View} from 'react-native'


export default class ImageText extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image style={[styles.imageStyle, this.props.imageStyle]} source={{uri: this.props.url}}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 10
  },
  imageStyle: {
    height: 180,
    width: 180
  }
})
