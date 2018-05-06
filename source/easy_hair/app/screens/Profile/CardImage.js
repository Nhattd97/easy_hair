import React, { Component } from 'react'
import { Text, Image, View, StyleSheet } from 'react-native'



class CardImage extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    };

    render() {
        return (
            <View style={[styles.container, this.props.style]}>
                <Image style={styles.image} source={{ uri: this.props.uri }} />
                <Text style={[styles.nameText,this.props.texStyle]}>{this.props.title}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: { width: 200, height: 200, backgroundColor:'white', borderWidth:5, borderColor:'#C4EBF2', borderTopRightRadius:10, borderBottomRightRadius:10 },
    image: { width: '100%', aspectRatio: 1, borderRadius: 10, borderTopRightRadius:5, borderTopLeftRadius:1 },
    nameText: { fontWeight: 'bold' , alignSelf:'center', color:'black'}
})


export default CardImage;