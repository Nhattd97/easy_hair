import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';

class CardItem extends Component {
  render() {
    return (
      <View style={styles.container}>
        {this.props.children}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    //padding : 5,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    position: 'relative',
    borderRadius: 10
  }
})

export default CardItem;
