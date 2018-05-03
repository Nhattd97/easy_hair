/*
 * @author: LeVoGiaKhang on 5/2/2018
 */

import React, {Component} from 'react';
import {
    View,
    Text,
    TouchableHighlight
} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import CustomMarker from '../controls/CustomMarker.js'
import MapViewDirections from 'react-native-maps-directions'

const GOOGLE_MAP_API_KEY = "AIzaSyDtHoCwRolZ5ND0QOebIfpNFmJLRTG9x6A";

export default class MapScreen extends Component<Props> {


    constructor(props) {
        super(props);

        arrayMarkers = [{
            latitude: 10.8884278,
            longitude: 106.7765558,
        }];


        arraySalons =
            [
                {
                    id: 1,
                    name: 'Nam Bảo Lân',
                    imgSource: require('../assets/images/salon1.jpg'),
                    address: 'Đường 621, Phường Linh Trung, Quận Thủ Đức, Thành Phố Hồ Chí Minh',
                    phone: +841633829689,
                    rating: 4,
                    latitude: 10.876492,
                    longitude: 106.808571,
                },

                {
                    id: 2,
                    name: 'Anh Tuấn',
                    imgSource: require('../assets/images/anhtuan.jpg'),
                    address: '12 Đường số 11, Linh Xuân, Thủ Đức, Hồ Chí Minh',
                    phone: +842838974335,
                    rating: 4,
                    latitude: 10.887485,
                    longitude: 106.767158,
                },

                {
                    id: 3,
                    name: 'Minh Hoàng',
                    imgSource: require('../assets/images/minhhao.jpg'),
                    address: '146 Đường số 17, Phường Linh Trung, Thủ Đức, Hồ Chí Minh',
                    phone: +84919691978,
                    rating: 4,
                    latitude: 10.867649,
                    longitude: 106.786881,
                },

                {
                    id: 4,
                    name: 'D&D',
                    imgSource: require('../assets/images/dnd.jpg'),
                    address: '40 Đường số 16, Phường Linh Trung, Thu Duc District, Hồ Chí Minh',
                    phone: +84907500803,
                    rating: 4,
                    latitude: 10.860831,
                    longitude: 106.782804,
                },

                {
                    id: 5,
                    name: 'Minh Hào',
                    imgSource: require('../assets/images/salon1.jpg'),
                    address: '89 Lê Văn Chí, Phường Linh Trung, Thủ Đức, Hồ Chí Minh',
                    phone: +84967780391,
                    rating: 4,
                    latitude: 10.859972,
                    longitude: 106.776144,
                },

                {
                    id: 6,
                    name: 'Sang',
                    imgSource: require('../assets/images/salon1.jpg'),
                    address: '47 Hữu Nghị, Bình Thọ, Thủ Đức, Hồ Chí Minh',
                    phone: 0,
                    rating: 4,
                    latitude: 10.850661,
                    longitude: 106.768155,
                },

                {
                    id: 7,
                    name: 'BARBERSHOP',
                    imgSource: require('../assets/images/salon1.jpg'),
                    address: '25 Đường số 6, .P.Linh Chiểu . Q.thủ đức, Hồ Chí Minh',
                    phone: +84977665613,
                    rating: 4,
                    latitude: 10.854366,
                    longitude: 106.771873,
                },

                {
                    id: 8,
                    name: 'Tý',
                    imgSource: require('../assets/images/ty.jpg'),
                    address: '15 Hàn Thuyên, Bình Thọ, Thủ Đức, Hồ Chí Minh',
                    phone: +841212121294,
                    rating: 4,
                    latitude: 10.853051,
                    longitude: 106.768192,
                },

                {
                    id: 9,
                    name: 'Pink Lady',
                    imgSource: require('../assets/images/salon1.jpg'),
                    address: '123, Hoàng Diệu 2, Phường Linh Trung, Quận Thủ Đức, Thành Phố Hồ Chí Minh',
                    phone: +84934393484,
                    rating: 4,
                    latitude: 10.859801,
                    longitude: 106.766397,
                },

                {
                    id: 10,
                    name: 'Nguyen Binh',
                    imgSource: require('../assets/images/nguyenbinh.jpg'),
                    address: '934 Kha Vạn Cân, Phường Linh Trung, Thủ Đức, Hồ Chí Minh',
                    phone: +84983426441,
                    rating: 4,
                    latitude: 10.865839,
                    longitude: 106.759057,
                },
            ];

        this.state =
            {
                region: {
                    latitude: 10.8884278,
                    longitude: 106.7765558,
                    latitudeDelta: 0.01,
                    longitudeDelta: 0.01,
                },

                location: {
                    latitude: 10.8884278,
                    longitude: 106.7765558,
                    latitudeDelta: 0.01,
                    longitudeDelta: 0.01,
                },

                markers: arraySalons,

                origin: {
                    latitude: 10.8884278,
                    longitude: 106.7765558,
                },

                destination: {
                    latitude: 10.8043691,
                    longitude: 106.7152589,
                }
            }
    }

    watchID: ?number = null;

    componentWillMount() {
        navigator.geolocation.getCurrentPosition((position) => {
                let lat = parseFloat(position.coords.latitude);
                let long = parseFloat(position.coords.longitude);

                let location = {
                    latitude: lat,
                    longitude: long,
                    latitudeDelta: LAT_DELTA,
                    longitudeDelta: LONG_DELTA,
                };

                this.setState({location: location});

            },
            error => alert(JSON.stringify(error)),
            {enableHighAccuracy: false, timeout: 20000}
        );

        this.watchID = navigator.geolocation.watchPosition((position) => {
            let lat = parseFloat(position.coords.latitude);
            let long = parseFloat(position.coords.longitude);

            let location = {
                latitude: lat,
                longitude: long,
                latitudeDelta: LAT_DELTA,
                longitudeDelta: LONG_DELTA,
            };

            this.setState({location: location});
        },);
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
        for (mar of this.state.markers) {
            markers.push(
                <CustomMarker
                    nameOfPlace={"Salon " + mar.name}
                    marker={mar}
                    key={mar.id}
                    title={"This is a title"}
                    description={"This is a description"}
                    source={mar.imgSource}
                    rating={mar.rating}/>);
            i++;
        }
        return markers;
    }


    render() {
        return (
            <View style={{flex: 1}}>
                <MapView
                    style={{flex: 1}}
                    initialRegion={this.state.location}
                    // onPress={this.onPress.bind(this)}
                >

                    {this.renderMarkers()}

                    {/*<CustomMarker*/}
                    {/*nameOfPlace={"Khang is so handsome!"}*/}
                    {/*marker={{*/}
                    {/*latitude: 10.884950,*/}
                    {/*longitude: 106.780147,*/}
                    {/*}}*/}
                    {/*key={2}*/}
                    {/*title={"This is a title"}*/}
                    {/*description={"This is a description"}*/}
                    {/*source={require('../assets/images/marker.png')}*/}
                    {/*/>*/}

                    <Marker
                        coordinate={this.state.location}>
                    </Marker>


                    <MapViewDirections
                        origin={this.state.origin}
                        destination={this.state.destination}
                        apikey={GOOGLE_MAP_API_KEY}
                        mode="bicycling"
                        strokeWidth={3}
                        strokeColor="hotpink"/>

                </MapView>


            </View>
        );
    }


    componentDidMount() {
        navigator.geolocation.clearWatch(this.watchID);
    }
}

const LAT_DELTA = 0.01;
const LONG_DELTA = 0.01;

