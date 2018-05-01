/*
 * @author: LeVoGiaKhang on 5/2/2018
 */

import React, {Component} from 'react';
import {
    View
} from 'react-native';
import MapView from 'react-native-maps';
import CustomMarker from '../controls/CustomMarker.js'

export default class MapScreen extends Component<Props> {

    constructor(props) {
        super(props);

        arrayMarkers = [{
            latitude: 10.8884278,
            longitude: 106.7765558,
        }];

        this.state =
            {
                region: {
                    latitude: 10.8884278,
                    longitude: 106.7765558,
                    latitudeDelta: 0.01,
                    longitudeDelta: 0.01,
                },

                markers: arrayMarkers,
            }
    }


    onPress(data) {
        let latitude = data.nativeEvent.coordinate.latitude;
        let longitude = data.nativeEvent.coordinate.longitude;

        arrayMarkers.push(
            {
                latitude: latitude,
                longitude: longitude,
            }
        );

        this.setState({markers: arrayMarkers});
    }

    renderMarkers() {
        markers = [];
        let i = 0;
        for (marker of this.state.markers) {
            markers.push(
                <CustomMarker
                    nameOfPlace={"Khang is so handsome!"}
                    marker={{latitude: 10.884950,
                        longitude: 106.780147,}}
                    key={2}
                    title={"This is a title"}
                    description={"This is a description"}
                    source={require('../assets/images/marker.png')}
                />
            );
            i++;
        }
        return markers;
    }

    render() {
        return (
            <View style={{flex: 1}}>
                <MapView
                    style={{flex: 1}}
                    initialRegion={this.state.region}
                    onPress={this.onPress.bind(this)}>

                    {this.renderMarkers()}

                    <CustomMarker
                        nameOfPlace={"Khang is so handsome!"}
                        marker={{latitude: 10.884950,
                            longitude: 106.780147,}}
                        key={2}
                        title={"This is a title"}
                        description={"This is a description"}
                        source={require('../assets/images/marker.png')}
                    />

                </MapView>
            </View>
        );
    }
}
