
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import ProfileScreen from './ProfileScreen.js'

const myUser={
  name:'Taylor Swift',
  //image:'https://s3.r29static.com//bin/entry/c6b/340x408/1772845/image.png',
  gender:'Nữ',
  birthday:'28/09/1989',
  address:'HCMC' 
}

export default class Run extends Component {
  render() {
    return ( 
      <View style={{flex:1}}>
        <ProfileScreen user={myUser}/> 
      </View>
    );
  }
}



 