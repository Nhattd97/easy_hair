
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
import Rating from '../Feedback/Rating.js';
import UserFeedback from '../Feedback/UserFeedback.js'

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
      <View style={{ flex: 1}}>
        <Rating score1='1' score2="1" score3="1" score4 ="1" score5="2" />
      </View>
    );
  }
}

{/* <ProfileScreen user={myUser}/>  */ }
{/* <CardImage style={{ width: 100, height: 120 }} uri='https://s3.r29static.com//bin/entry/c6b/340x408/1772845/image.png' title="Nam" /> */ }
{/* <InputTextForButton text="abc" color='white' style={{width:100}} side="right" /> */}
{/* <Rating score= "4.1" score1="1" score2="2" score3="3" score4 ="4" score5="5" /> */}
{/* <UserFeedback image='http://sv1.upsieutoc.com/2018/05/16/hightight.jpg' userName="Hoàng Lâm"  count="2" /> */}