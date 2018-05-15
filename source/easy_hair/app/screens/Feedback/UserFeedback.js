import React, { Component } from 'react'
import { Text, Image, View, StyleSheet, TextInput } from 'react-native'
import StarRating from 'react-native-star-rating'

class UserFeedback extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }



    render() {
        const { image, comment, userName, count, maxLength } = this.props;
        return (
            <View style={[styles.container, { flexDirection: 'row' }]}>
                <View style={styles.avaContainer}>
                    <Image style={styles.image} source={{ uri: image }} />
                </View>
                <View style={styles.rowContainer}>
                    <View style={styles.row}>
                        <Text style={styles.rowText}>{userName}</Text>
                    </View>
                    <View style={styles.row}>
                        {
                            (count === "5") ? <Image style={styles.rowImage} source={require('../../assets/images/5star.png')} /> : null
                        }
                        {
                            (count === "4") ? <Image style={styles.rowImage} source={require('../../assets/images/4star.png')} /> : null
                        }
                           {
                            (count === "3") ? <Image style={styles.rowImage} source={require('../../assets/images/3star.png')} /> : null
                        }
                           {
                            (count === "2") ? <Image style={styles.rowImage} source={require('../../assets/images/2star.png')} /> : null
                        }
                           {
                            (count === "1") ? <Image style={styles.rowImage} source={require('../../assets/images/1star.png')} /> : null
                        }
                    </View>
                    {/* <View style={[styles.row, { marginTop: 10 }]}> */}
                        <TextInput style={styles.rowText}
                        maxLength={50}
                        value = {comment} 
                        multiline={true}
                        numberOfLines={3}
                        placeholder={'Tối đa 50 kí tự'}
                        placeholderTextColor='#757575'
                        underlineColorAndroid={'transparent'}
                        />
                   

                </View>

            </View>
        )
    }

}


const styles = StyleSheet.create({
    avaContainer: {width:150, height:150, flexDirection: 'row', aspectRatio: 1 },
    image: { width: '70%', aspectRatio: 1, borderRadius: 200, marginLeft: 10 },
    rowImage: { width: '88%', height: '100%', resizeMode: 'stretch' },
    rowText: { color: 'black', paddingLeft:10 },
    rowContainer: {flex:3,height:150 },
    row: { flex: 1, flexDirection: 'row' }
})


export default UserFeedback;