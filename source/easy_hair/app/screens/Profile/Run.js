
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import ProfileScreen from './ProfileScreen.js'
import CardImage from './CardImage.js';

const myUser = {
  name: 'Hoang Lam',
  image: 'https://s3.r29static.com//bin/entry/c6b/340x408/1772845/image.png',
  gender: 'Nữ',
  birthday: '28/09/1989',
  address: 'HCMC'
}

export default class Run extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        {/* <ProfileScreen user={myUser}/>  */}
        <CardImage style={{ width: 100, height: 250 }} uri={myUser.image} title="Nam" />
      </View>
    );
  }
}



