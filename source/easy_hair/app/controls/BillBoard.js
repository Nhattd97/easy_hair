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
    static defaultProps =
        {
            title: '',
            source: '',
            rating: '',
        };

    state =
        {
            viewLength: 200,
            initialRender: true
        };


    componentWillMount()
    {
        if(this.props.title.length < 11)
        {
            this.setState({viewLength: 180});
        }
        else
        {
            this.setState({viewLength: this.props.title.length*12 + 50});
        }
    }

    onLoad() {
        this.setState({initialRender: false});
    }

    render() {
        return (
            <View style={{width: this.state.viewLength, height: 50, flexDirection: 'row'}}>
                <Image source={this.props.source}
                       style={style.image}
                       key={`${this.state.initialRender}`}
                       onLoad={this.onLoad.bind(this)}>
                </Image>

                <View style={{flexDirection: 'column'}}>
                    <Text style={style.title}>
                        {this.props.title}
                    </Text>

                    <View style={{flexDirection: 'row'}}>
                        <Text style={style.point}>
                            {this.props.rating}
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