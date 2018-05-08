import React, {Component} from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    Alert,
    Linking,
    TouchableOpacity,
    ImageBackground
} from 'react-native';
import Card from './Card';
import CardItem from './CardItem';
import WhiteButton from './WhiteButton'

class AlbumImage extends Component {
    render() {
        return (
            <Card>
                <CardItem>
                    <TouchableOpacity>
                    <ImageBackground
                        style = {styles.imageStyle}
                        source = {{uri : this.props.image}}
                    >
                    <Text style = {styles.titleStyle}>{this.props.title}</Text>
                    
                    </ImageBackground>
                    </TouchableOpacity>
                </CardItem>
            </Card>
        );
    }
}

const styles = StyleSheet.create({
    titleStyle : {
        fontSize : 50,
        color : 'white'
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
        height : 180,
        width : 350,
        justifyContent : 'center',
        alignItems : 'center',
        flex : 1,

    },
    buttonStyle : {
        alignItems : 'center',
    },
    
    albumStyle : {
        justifyContent : 'center',
        alignItems : 'center'
    },
})

export {AlbumImage};