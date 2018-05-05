import React, { Component, PropTypes } from 'react'
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
    container: { width: 200, height: 300 },
    image: { width: '100%', aspectRatio: 1 },
    nameText: { fontWeight: 'bold' , alignSeft:'center'}
})


export default CardImage;