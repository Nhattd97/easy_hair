import React, {Component} from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    Alert,
    Linking,
    TouchableOpacity
} from 'react-native';
import Card from './Card';
import CardItem from './CardItem';

class AlbumDetail extends Component {
    render() {
        const image = this.props.album;
        return (
            <Card>
                <CardItem>
                    <Image
                        style = {styles.imageStyle}
                        source = {{uri : image}}
                    />
                </CardItem>

                <CardItem>
                    <TouchableOpacity onPress = {this.props.onPress} style = {styles.button1Style}>
                        <Text 
                            style = {styles.textStyle}
                        >
                            {this.props.title}
                        </Text>
                    </TouchableOpacity>
                </CardItem>
            </Card>
        );
    }
}

const styles = StyleSheet.create({
    titleStyle : {
        fontSize : 20,
    },
    contentContainerStyle : {
        flexDirection : 'column',
        justifyContent : 'space-around',
    },
    thumbnailContainerStyle : {
        justifyContent : 'center',
        alignItems : 'center',
        marginLeft : 5,
        marginRight : 5,
    },
    thumbnailStyle : {
        width : 60,
        height : 60
    },
    imageStyle : {
        height : 207,
        width : 175,
        flex : 1,
        borderRadius : 10

    },
    buttonStyle : {
        alignItems : 'center',
    },
    textStyle : {
        alignSelf : 'center',
        color : '#007aff',
        fontSize : 16,
        fontWeight : '600',
        paddingTop : 10,
        paddingBottom : 10,
    },
    button1Style : {
        flex : 1,
        alignItems : 'stretch',
        backgroundColor : '#fff',
        borderRadius : 5,
        marginLeft : 5,
        marginRight : 5,
    }
})

export {AlbumDetail};