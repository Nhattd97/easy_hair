import React,{ Component } from 'react'
import {
    View,
    Text,
    Image,
    Dimensions,
} from 'react-native'
import PropTypes from 'prop-types';
import MapView, {Callout, Marker, Polygon} from 'react-native-maps';
import BillBoard from './BillBoard.js'


const {width, height} = Dimensions.get('window');

class CustomMarker extends Component {
    static propTypes =
        {
            nameOfPlace: PropTypes.string,
            markerId: PropTypes.oneOfType([
                PropTypes.number,
                PropTypes.string,
            ]),
            title: PropTypes.string,
            description: PropTypes.string,
            source: PropTypes.object,
            rating: PropTypes.number,
        };


    static defaultProps = {
        nameOfPlace: "Khang",
        coordinateMarker: {
            latitude: null,
            longitude: null,
        },
        title: "Title",
        description: "Description",
        source: "",
        rating: 0,
    };

    state = {
        initialRender: true,
    };

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
                <Marker key={this.props.markerId}
                        title={this.props.title}
                        description={this.props.description}
                        coordinate={this.props.coordinateMarker}
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
                            onLoad={this.onLoad.bind(this)}>
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

export {CustomMarker}