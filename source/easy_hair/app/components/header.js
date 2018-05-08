import React,{Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
} from 'react-native';


export default class Header extends Component {
    render() {
        return (
            <View style = {styles.container}>
                <Text style = {styles.text}>{this.props.title}</Text>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    text : {
        fontSize : 20,
    },
    container : {
        height : 70,
        backgroundColor : 'grey',
        justifyContent : 'center',
        alignItems : 'center'
    }
})