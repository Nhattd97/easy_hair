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


const {width,height} = Dimensions.get('window');

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
                        coordinate={this.props.marker}
                        anchor={{x:(40/width),y:1}}
                        calloutOffset={{x:-200,y:-200}}>
                    <View style={{flexDirection : 'row' , width : width/2 ,height : 40 , alignItems :'center',justifyContent:'center'}}>
                        <Image source={this.props.source}
                               style={{width: 40, height: 40}}>
                        </Image>


                        <Text style={{color: '#0984e3'}}>
                            {this.props.nameOfPlace}
                        </Text>
                    </View>
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