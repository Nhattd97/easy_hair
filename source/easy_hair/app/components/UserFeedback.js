import React, { Component } from 'react'
import { Text, Image, View, StyleSheet } from 'react-native'

class UserFeedback extends Component{
    constructor(props){
        super(props);
    }    

render(){
    const {image, comment, userName} = this.props;
    return(
        <View style = {[styles.container, {flexDirection:'row', marginVertical : 10}]}>
            <View style={styles.avaContainer}>
                <Image style={styles.image} source={image === '' ? require('../assets/images/non_avatar.jpg'):{uri : image}}/>
            </View>
           <View style= {styles.rowContainer}>
                <View style={styles.row}>
                        <Text style={styles.rowText}>{userName}</Text>
                </View>
                <View style={styles.row}>
                    <Image style={styles.rowImage} source={require('../assets/images/5star.png')} />
                </View>
                <View style={[styles.row, {marginTop:10}]}>
                        <Text style={styles.rowText}>{comment}</Text>
                </View>

           </View>

        </View>
    )
}

}


const styles = StyleSheet.create({
    avaContainer:{flexDirection:'row', aspectRatio:2},
    image: { width: '50%', aspectRatio: 1, borderRadius: 200 },
    rowImage:{width:'88%', height:'100%',resizeMode:'stretch' },
    rowText:{color: 'black'},
    rowContainer:{flex:4},
    row:{flex:1, flexDirection:'row'}
})


export {UserFeedback};