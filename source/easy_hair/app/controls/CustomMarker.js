/*
 * @author: LeVoGiaKhang on 4/22/2018
 */

import React, {Component} from 'react';
import {
    View,
    Text,
    Image,
} from 'react-native';
import BillBoard from './BillBoard.js';
import MapView, {Callout, Marker, Polygon} from 'react-native-maps';

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
            }
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
                        coordinate={this.props.marker}>

                    <Image source={this.props.source}
                           style={{width: 40, height: 40, marginLeft: 50}}>
                    </Image>


                    <Text style={{color: '#0984e3'}}>
                        {this.props.nameOfPlace}
                    </Text>

                    <Callout>
                        <BillBoard srcForSalonImage={require('../assets/images/salon1.jpg')}
                                   title="Salon 1"
                                   rating={4}/>
                    </Callout>
                </Marker>


            </View>
        );
    }
}