
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
//import ProfileScreen from './ProfileScreen.js'
//import CardImage from './CardImage.js';
import InputTextForButton from './InputTextForButton.js';

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
      <View style={{ flex: 1, backgroundColor:'black',justifyContent:'space-between',flexDirection:'row' }}>
        <InputTextForButton text="abc" color='white' style={{width:50}} side="left" />
      </View>
    );
  }
}

{/* <ProfileScreen user={myUser}/>  */ }
{/* <CardImage style={{ width: 100, height: 120 }} uri='https://s3.r29static.com//bin/entry/c6b/340x408/1772845/image.png' title="Nam" /> */ }



