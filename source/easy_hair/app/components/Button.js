import React, {Component} from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

class Button extends Component {
  render() {
    const btnStyle = (this.props.isLoading || this.props.disabled) ? [styles.buttonStyle, this.props.style, {backgroundColor: '#CCDCE9'}] : [styles.buttonStyle, this.props.style];
    return (
      <TouchableOpacity style={btnStyle} onPress={this.props.onPress}>
        <Text style={styles.textStyle}>
          {this.props.label}
        </Text>
      </TouchableOpacity>
    );
  }
}

export {Button}

const styles = StyleSheet.create({
  buttonStyle: {
    backgroundColor: '#00528F',
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: 50,
  },
  textStyle: {
    fontFamily: 'Nunito',
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: 'bold'
  }
});
