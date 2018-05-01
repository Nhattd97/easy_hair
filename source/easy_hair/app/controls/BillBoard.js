/*
 * @author: LeVoGiaKhang on 4/22/2018
 */

import React, {Component} from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
} from 'react-native';
import {Rating} from 'react-native-ratings';


export default class BillBoard extends Component {
    constructor(props) {
        super(props);
        this.props =
            {
                title: '',
                srcForSalonImage: '',
                rating: '',
            };

        this.state =
        {
            viewLength: 200,
        }

    };

    componentWillMount()
    {
        if(this.props.title.length < 11)
        {
            this.setState({viewLength: 170});
        }
        else
        {
            this.setState({viewLength: this.props.title.length*11 + 50});
        }
    }

    render() {
        return (
            <View style={{width: this.state.viewLength, height: 50, flexDirection: 'row'}}>
                <Image source={this.props.srcForSalonImage}
                       style={style.image}>
                </Image>

                <View style={{flexDirection: 'column'}}>
                    <Text style={style.title}>
                        {this.props.title}
                    </Text>

                    <View style={{flexDirection: 'row'}}>
                        <Text style={style.point}>
                            4.1
                        </Text>

                        <Rating
                            type='star'
                            startingValue={this.props.rating}
                            ratingImage={STAR_IMAGE}
                            ratingColor='#3498db'
                            ratingBackgroundColor='#c8c7c8'
                            ratingCount={5}
                            imageSize={13}
                            style={style.rating}/>

                    </View>
                </View>
            </View>
        );
    }
}

const STAR_IMAGE = require('../assets/images/star.png');

const paddingLeftForRightComponents = 7;

const style = StyleSheet.create({
    image: {
        width: 50,
        height: 50,
        paddingLeft: 0
    },

    rating: {
        paddingVertical: 8,
        paddingLeft: 10
    },

    point: {
        paddingVertical: 5,
        color: '#ff6348',
        paddingLeft: paddingLeftForRightComponents,
    },

    title: {
        color: '#000',
        paddingLeft: paddingLeftForRightComponents,
        fontSize: 20
    }
});