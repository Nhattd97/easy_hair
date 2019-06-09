import React, {Component} from 'react'
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native'

class TextButton extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    const {style, text, color, side = "right"} = this.props;

    return (
      <TouchableOpacity
        onPress={this.props.onPress}>
        <View style={[styles.container, style]}>

          <View style={styles.body}>

            {
              (side === "left") ? <View style={[styles.line, {backgroundColor: color}]}></View> : null
            }


            <Text style={[styles.textname, {color: color}]}> {text}</Text>


            {
              (side === "right") ? <View style={[styles.line, {backgroundColor: color}]}></View> : null
            }

          </View>

        </View>
      </TouchableOpacity>

    )
  }
}

const styles = StyleSheet.create({
  container: {width: 100, height: 20, backgroundColor: 'transparent', flexDirection: 'row'},
  body: {flexDirection: 'row', flex: 1, backgroundColor: 'transparent'},
  line: {flex: 1, height: 1, alignSelf: 'center', width: '100%'}
})


export {TextButton}

