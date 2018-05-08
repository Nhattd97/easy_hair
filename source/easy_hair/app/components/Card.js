import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
} from 'react-native';

class Card extends Component {
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
        borderRadius : 10,
        borderBottomWidth : 0,
        elevation : 1,
        marginLeft : 5,
        marginRight : 5,
        marginBottom : 15,
    }
})

export default Card;