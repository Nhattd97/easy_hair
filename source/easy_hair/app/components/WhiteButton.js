import React, {Component} from 'react';
import {
    Text,
    TouchableOpacity,
    StyleSheet,
} from 'react-native';

class WhiteButton extends Component {
    render() {
        return (
            <TouchableOpacity style = {styles.buttonStyle}>
                <Text 
                    style = {styles.textStyle}
                    onPress = {this.props.onPress}
                >
                    {this.props.children}
                </Text>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    textStyle : {
        alignSelf : 'center',
        color : '#007aff',
        fontSize : 16,
        fontWeight : '600',
        paddingTop : 10,
        paddingBottom : 10,
    },
    buttonStyle : {
        flex : 1,
        alignItems : 'stretch',
        backgroundColor : '#fff',
        borderRadius : 5,
        marginLeft : 5,
        marginRight : 5,
    }
})

export default WhiteButton;