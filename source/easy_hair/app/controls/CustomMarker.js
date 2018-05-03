/*
 * @author: LeVoGiaKhang on 4/22/2018
 */

import React, {Component} from 'react';
import {
    View,
    Text,
    Image,
    Dimensions,
} from 'react-native';
import BillBoard from './BillBoard.js';
import MapView, {Callout, Marker, Polygon} from 'react-native-maps';


const {width, height} = Dimensions.get('window');

export default class CustomMarker extends Component {
    constructor(props) {
        super(props);
        this.props =
            {
                nameOfPlace: "",
                marker: "",
                key: 1,
                title: "",
                description: "",
                source: "",
                rating: "",
            };
        this.state = {
            initialRender: true
        };

        this.onLoad = this.onLoad.bind(this);
    }

    onLoad() {
        this.setState({initialRender: false});
    }

    render() {
        return (
            <View style={{
                flexDirection: 'row',
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
            }}>
                <Marker key={this.props.key}
                        title={this.props.title}
                        description={this.props.description}
                        coordinate={this.props.marker}
                        anchor={{x: (40 / width), y: 1}}
                        calloutOffset={{x: -200, y: -200}}>
                    <View style={{
                        flexDirection: 'row',
                        width: width / 2,
                        height: 40,
                        alignItems: 'center',
                        justifyContent: 'flex-start'
                    }}>
                        <Image
                            key={`${this.state.initialRender}`}
                            source={require('../assets/images/marker.png')}
                            style={{width: 40, height: 40}}
                            onLoad={this.onLoad}>
                        </Image>


                        <Text style={{color: '#0984e3'}}>
                            {this.props.nameOfPlace}
                        </Text>
                    </View>
                    <Callout>
                        <BillBoard source={this.props.source}
                                   title={this.props.nameOfPlace}
                                   rating={this.props.rating}/>
                    </Callout>
                </Marker>


            </View>
        );
    }
}