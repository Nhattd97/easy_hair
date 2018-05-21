import React, { Component } from 'react'
import {
    TouchableOpacity,
    Image,
    Dimensions,
    View
} from 'react-native'
import ImageView from 'react-native-image-view'

const { width, height } = Dimensions.get('window');

function wp (percentage) {
    const value = (percentage * width) / 100;
    return Math.round(value);
}
const dimension = wp(46)

class ImageViewButton extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isImageViewVisible : false
        }
    }
    render() {
        const uri = this.props.uri
        return (
            <TouchableOpacity onPress = {() => {
                this.setState({
                    isImageViewVisible : true
                })
            }}>
                <Image source = {{uri : this.props.uri}}  style = {{width : dimension, height : dimension , marginRight : wp(3), marginBottom : wp(3)}}/>
                <ImageView
                    images = {[{
                        source : {uri : this.props.uri,
                            width : 200,
                            height : 200
                        }}]}
                    isVisible = {this.state.isImageViewVisible}
                />
            </TouchableOpacity>
        )
    }
}

export {ImageViewButton}