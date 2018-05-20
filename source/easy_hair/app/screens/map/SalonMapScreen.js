import React, {Component} from 'react'
import {
    Text,
    View,
    Animated,
    Image,
    Dimensions,
    TouchableOpacity,
    TextInput,
    StyleSheet,
    ScrollView,
} from 'react-native'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {CustomMarker} from '../../components';
import MapView from "react-native-maps";
import geolib from 'geolib';
import SlidingUpPanel from "rn-sliding-up-panel";
import PopupDialog from 'react-native-popup-dialog';
import StarRating from 'react-native-star-rating';
import Picker from 'react-native-wheel-picker';
import firebase from 'react-native-firebase'

//region Global variables
//=====================================================================================
//                             Global Variables
//=====================================================================================

const {width, height} = Dimensions.get("window");

const CARD_HEIGHT = height / 3 - 20;
const CARD_WIDTH = width - 70;

const filterUp = require('../../assets/images/filter_up.png');
const filterDown = require("../../assets/images/filter_down.png");

let SCALE_STYLE;
let OPACITY_STYLE;

const storage = firebase.storage()
const storageRef = storage.ref()

//endregion

class SalonMapScreen extends Component {

    static navigationOptions = {
        headerTitle : 'Home',
        header : null
    };
    
    constructor(props) {
        super(props);
        this.state = {
            salonsInDatabase : this.props.salonsInDatabase,
            markers: [],

            // The region that The Map will be shown at the first time
            region: {
                latitude: 10.8884278,
                longitude: 106.7765558,
                latitudeDelta: 0.02,
                longitudeDelta: 0.02,
            },

            /**
             * SlidingUpPanel is visible or not
             * @default: false
             */
            visible: false,

            /**
             * tempDistance is a state to assign each salon's distance
             * @default: -1
             */
            tempDistance: -1,

            /**
             * store value of rating that user want to filter salons
             * @default: 1
             */
            ratingFilter: 1,

            /**
             * filterMode is mode of filter that users choose on filter
             * @default: "all"
             * @enum: "all", "number", "rating"
             */
            filterMode: "all",

            /**
             * set Pop Up dialog is show or hide
             */
            isShowPopUpDialog: false,

            /**
             * number of nearest salons
             */
            numberNearSalons: 0,

            /**
             * item list for WheelPicker
             */
            itemList: [],

            /**
             * set WheelPicker show or hide
             */
            isShowPicker: false,
        }
    }

    componentWillMount() {
        this.index = 0;
        this.animation = new Animated.Value(0);
        this.setState({markers: this.state.salonsInDatabase});

        let temp = [];
        for (let i = 1; i <= this.state.salonsInDatabase.length; ++i) {
            temp.push(i.toString());
        }
        this.setState({itemList: temp});
    }

    componentDidMount() {
        // We should detect when scrolling has stopped then animate
        // We should just debounce the event listener here
        this.animation.addListener(({value}) => {
            let index = Math.floor(value / CARD_WIDTH + 0.4); // animate 30% away from landing on the next item
            if (index >= this.state.markers.length) {
                index = this.state.markers.length - 1;
            }
            if (index <= 0) {
                index = 0;
            }

            clearTimeout(this.regionTimeout);
            this.regionTimeout = setTimeout(() => {
                    if (this.index !== index) {
                        this.index = index;
                        const {coordinate} = this.state.markers[index];
                        this.map.animateToRegion(
                            {
                                ...coordinate,
                                latitudeDelta: this.state.region.latitudeDelta,
                                longitudeDelta: this.state.region.longitudeDelta,
                            },
                            400 // time to move from old place to new place
                        );
                    }

                },
                10 // number of delay time that the function call should be delayed by
            );
        });

        clearTimeout(this.distanceTimeOut);
        this.distanceTimeOut = setTimeout(() => {
                for (let i = 0; i <= this.state.markers.length - 1; ++i) {
                    navigator.geolocation.getCurrentPosition(
                        (position) => {
                            let dis = geolib.getDistance(position.coords, {
                                latitude: this.state.markers[i].coordinate.latitude,
                                longitude: this.state.markers[i].coordinate.longitude,
                            });
                            //this.setState({tempDistance: dis});
                            this.state.markers[i].distance = dis;
                        },
                        () => {
                            //alert("Can not get distance to \"" + this.state.markers[i].title + "\"\nPlease make sure your location is turned on!");
                            this.setState({tempDistance: -1});
                            this.state.markers[i].distance = this.state.tempDistance;
                        },
                        {
                            enableHighAccuracy: false, timeout: 20000
                        }
                    );
                }
            },
            1000);

    }

    /**
     * Return an array as a result that is filtered by rating
     * @param rating
     * @returns {T[]}
     */
    getSalonsByRating(rating) {
        this.setState({
            markers: this.state.salonsInDatabase.filter((salon) => {
                return salon.rating >= rating;
            })
        });
    }

    /**
     * Return an array as a result that is filtered by number of nearest salons
     * @param totalSalons: number of salons in database
     * @param number: number of salons that user wants to filter
     */
    getSalonsByNearestSalons(totalSalons, number) {
        // sort() method sorts by character, so sort((a,b) => return a - b) will sort number by ascending
        // this statement means get each salon in markers array, after that ascending sort by distance.

        let arrAfterSort = this.state.salonsInDatabase.sort((salon, salon1) => {
            return salon.distance - salon1.distance;
        });

        if (number > totalSalons) {
            let result = [];
            for (let i = 0; i <= arrAfterSort.length - 1; ++i) {
                result.push(arrAfterSort[i]);
            }
            this.setState({markers: result});
        }

        else {
            let result = [];
            for (let i = 0; i <= number - 1; ++i) {
                result.push(arrAfterSort[i]);
            }
            console.log("number elements: " + result.length);
            console.log("old Value: " + this.state.markers.length);
            this.setState({markers: result});
            console.log("new Value: " + this.state.markers.length);
        }

    }

    /**
     * get All salons
     */
    getAllSalons() {
        this.setState({markers: this.state.salonsInDatabase});
    }


    /**
     * An event when Pop Up on dismissed
     */
    onPopUpDismissed() {
        this.setState({isShowPopUpDialog: false});
        this.getSalonsByRating(this.state.ratingFilter);
    }

    onPressDetails = (data,index,uid) => {
        this.props.navigation.navigate('DetailSalon',{data,index,uid});
    };


    render() {
        const interpolations = this.state.markers.map((marker, index) => {
            const inputRange = [
                (index - 1) * CARD_WIDTH,
                index * CARD_WIDTH,
                ((index + 1) * CARD_WIDTH),
            ];
            const scale = this.animation.interpolate({
                inputRange,
                outputRange: [1, 2.5, 1],
                extrapolate: "clamp",
            });
            const opacity = this.animation.interpolate({
                inputRange,
                outputRange: [0.35, 1, 0.35],
                extrapolate: "clamp",
            });
            return {scale, opacity};
        });

        let imgFilter = this.state.visible ? filterDown : filterUp;
        let styleFilter = this.state.visible ? styles.filterDown : styles.filterUp;
        let filterText = this.state.visible ? styles.filterTextDown : styles.filterTextUp;
        let viewPanel = this.state.visible ? styles.viewPanelUp : styles.viewPanelDown;
        let filterButtonChild = this.state.visible ? styles.filterButtonChildUp : styles.filterButtonChildDown;
        let filterButtonChildText = this.state.visible ? styles.filterButtonChildTextUp : styles.filterButtonChildTextDown;


        return (
            <View style={styles.container}>
                <MapView
                    ref={map => this.map = map}
                    initialRegion={this.state.region}
                    style={styles.mapView}>

                    {this.state.markers.map((marker, index) => {
                        const scaleStyle = {
                            transform: [
                                {
                                    scale: interpolations[index].scale,
                                },
                            ],
                        };
                        const opacityStyle = {
                            opacity: interpolations[index].opacity,
                        };
                        SCALE_STYLE = scaleStyle;
                        OPACITY_STYLE = opacityStyle;
                        return (
                            <CustomMarker
                                nameOfPlace={marker.title}
                                coordinateMarker={marker.coordinate}
                                markerId={index}
                                title={marker.title}
                                description={marker.description}
                                source={{uri :marker.background}}
                                rating={marker.rating}>

                                <Animated.View style={[styles.markerWrap, opacityStyle]}>
                                    <Animated.View style={[styles.ring, scaleStyle]}/>
                                    <View style={styles.coordinateMarker}/>
                                </Animated.View>
                            </CustomMarker>);
                    })}

                </MapView>

                <Animated.ScrollView
                    horizontal
                    scrollEventThrottle={1}
                    showsHorizontalScrollIndicator={false}
                    snapToInterval={CARD_WIDTH}
                    onScroll={Animated.event(
                        [
                            {
                                nativeEvent: {
                                    contentOffset: {
                                        x: this.animation,
                                    },
                                },
                            },
                        ],
                        {useNativeDriver: true}
                    )}
                    style={styles.scrollView}
                    contentContainerStyle={styles.endPadding}>

                    {this.state.markers.map((marker, index) => (
                        <View style={styles.card} key={index}>

                            <Image
                                source={{uri :marker.background}}
                                style={styles.cardImage}
                                resizeMode="cover"/>

                            <View style={styles.cover}>
                                <View style={styles.textContent}>

                                    <Text style={styles.textSalon}>
                                        SALON
                                    </Text>

                                    <Text numberOfLines={3}
                                          style={styles.cardTitle}>
                                        {marker.title}
                                    </Text>

                                    <View style={styles.viewPhoneAndLocation}>
                                        <View style={{flexDirection: "row"}}>
                                            <Image
                                                style={{width: 20, height: 20}}
                                                source={require("../../assets/images/phone.png")}/>
                                            <Text numberOfLines={1}
                                                  style={styles.cardDescription}>
                                                {marker.phone}
                                            </Text>
                                        </View>

                                        <View style={{flexDirection: "row"}}>
                                            <Image
                                                style={{width: 20, height: 20, marginTop: 10}}
                                                source={require("../../assets/images/location.png")}/>
                                            <Text numberOfLines={1}
                                                  style={[styles.cardDescription, {marginTop: 10}]}>
                                                {marker.distance / 1000 + " km"}
                                            </Text>
                                        </View>
                                    </View>
                                </View>

                                <TouchableOpacity
                                    style={styles.infoButton}
                                    onPress={() => {
                                        this.onPressDetails(marker,index,this.props.user.uid)
                                    }}>
                                    <Image source={require('../../assets/images/info.png')}
                                           style={{width: 17, height: 17, marginBottom: 5}}
                                           resizeMode="cover"/>

                                    <Text style={{fontFamily: "TitanOne-Regular", fontSize: 12}}>
                                        INFOS
                                    </Text>
                                </TouchableOpacity>

                            </View>

                        </View>
                    ))}

                </Animated.ScrollView>


                <SlidingUpPanel
                    visible={this.state.visible}
                    height={height - 150}
                    draggableRange={{top: height - 150, bottom: 70}}
                    onRequestClose={() => {
                        this.setState({visible: false, isShowPopUpDialog: false, isShowPicker: false,})
                    }}
                    allowDragging={false}>
                    <ScrollView contentContainerStyle={viewPanel}>
                        <TouchableOpacity
                            style={filterButtonChild}
                            onPress={() => {
                                this.getAllSalons();
                            }}>
                            <Text style={filterButtonChildText}>
                                ALL
                            </Text>
                        </TouchableOpacity>

                        {
                            this.state.isShowPicker === false ?
                                (
                                    <TouchableOpacity
                                        style={filterButtonChild}
                                        onPress={() => {
                                            this.setState({isShowPicker: true});
                                        }}>
                                        <Text style={filterButtonChildText}>
                                            NEARLY
                                        </Text>
                                    </TouchableOpacity>
                                )
                                :
                                (
                                    <View
                                        style={styles.viewCoverWheelPicker}>
                                        <Picker
                                            style={styles.wheelPicker}
                                            selectedValue={this.state.numberNearSalons}
                                            itemStyle={{color: "white", fontSize: 26}}
                                            onValueChange={(index) => {
                                                this.setState({numberNearSalons: index});
                                            }}>
                                            {
                                                this.state.itemList.map((value, i) =>
                                                    (
                                                        <Picker.Item label={value} value={i} key={value}/>
                                                    ))
                                            }
                                        </Picker>

                                        <TouchableOpacity
                                            style={[filterButtonChild, {width: 70, height: 50}]}
                                            onPress={() => {
                                                this.getSalonsByNearestSalons(this.state.salonsInDatabase.length, this.state.numberNearSalons + 1);
                                                this.setState({isShowPicker: false});

                                                const {coordinate} = this.state.markers[0];
                                                this.map.animateToRegion(
                                                    {
                                                        ...coordinate,
                                                        latitudeDelta: this.state.region.latitudeDelta,
                                                        longitudeDelta: this.state.region.longitudeDelta,
                                                    },
                                                    400 // time to move from old place to new place
                                                );
                                            }}>
                                            <Text style={[filterButtonChildText, {fontSize: 20}]}>
                                                OK
                                            </Text>
                                        </TouchableOpacity>
                                    </View>
                                )
                        }

                        {
                            this.state.isShowPopUpDialog === false ?
                                (
                                    <TouchableOpacity
                                        style={[filterButtonChild,]}
                                        onPress={() => {
                                            this.setState({isShowPopUpDialog: true, isShowPicker: false})
                                        }
                                        }>
                                        <Text style={filterButtonChildText}>
                                            RATING
                                        </Text>
                                    </TouchableOpacity>
                                )
                                :
                                (
                                    < PopupDialog
                                        style={{backgroundColor: "red"}}
                                        width={width}
                                        height={100}
                                        dialogStyle={{backgroundColor: "black"}}
                                        show={this.state.isShowPopUpDialog}
                                        onDismissed={() => {
                                            this.onPopUpDismissed();
                                        }}>

                                        <StarRating
                                            starStyle={{
                                                marginTop: 15,
                                                justifyContent: "center",
                                                alignItems: "center"
                                            }}
                                            starSize={60}
                                            disabled={false}
                                            emptyStar={require('../../assets/images/empty-star.png')}
                                            fullStar={require('../../assets/images/full-star.png')}
                                            maxStars={5}
                                            rating={this.state.ratingFilter}
                                            selectedStar={(rating) => {
                                                this.setState({ratingFilter: rating});
                                                const {coordinate} = this.state.markers[0];
                                                this.map.animateToRegion(
                                                    {
                                                        ...coordinate,
                                                        latitudeDelta: this.state.region.latitudeDelta,
                                                        longitudeDelta: this.state.region.longitudeDelta,
                                                    },
                                                    400 // time to move from old place to new place
                                                );
                                            }
                                            }
                                        />

                                    </PopupDialog>
                                )
                        }

                    </ScrollView>
                </SlidingUpPanel>


                <View style={styles.touchableCover}>
                    <TouchableOpacity
                        style={styleFilter}
                        onPress={() => {
                            if (this.state.visible)
                                this.setState({visible: false});
                            else
                                this.setState({visible: true});
                        }}>

                        <Image source={imgFilter}
                               style={{width: 30, height: 30}}/>

                        <Text style={filterText}>
                            FILTER
                        </Text>
                    </TouchableOpacity>
                </View>

            </View>
        )
    }
}

function mapStateToProps(state) {
    return {
        salonsInDatabase : state.Database.salonsInDatabase,
        user : state.Auth.user        
    }
}

function mapDispatchToProps(dispatch) {
    return {

    }
}

export default connect(mapStateToProps,mapDispatchToProps)(SalonMapScreen)

const styles = StyleSheet.create({
    container:
        {
            flex: 1,
            justifyContent: "flex-start",
            alignItems: "flex-start",
        },
    mapView:
        {
            flex: 1,
            width: width,
            height: height,
            position: "absolute"
        },
    scrollView:
        {
            position: "absolute",
            bottom: 50,
            left: 0,
            right: 0,
            paddingVertical: 5,
        },
    endPadding:
        {
            paddingRight: width - CARD_WIDTH,
        },
    card:
        {
            // padding: 10,
            // elevation: 2,
            // backgroundColor: "#fff",
            // marginHorizontal: 10,
            // shadowColor: "#000",
            // shadowRadius: 5,
            // shadowOpacity: 0.3,
            // shadowOffset: { x: 2, y: -2 },
            // height: CARD_HEIGHT + 20,
            // width: CARD_WIDTH,
            // overflow: "hidden",
            // borderRadius: 30,

            backgroundColor: "transparent",
            height: CARD_HEIGHT + 20,
            width: CARD_WIDTH,
            marginHorizontal: 10,
            flexDirection: "row",
            overflow: "hidden",

        },
    cardImage:
        {
            flex: 1,
            width: "100%",
            height: "100%",
            borderRadius: 5,
        },
    cover:
        {
            flex: 2,
            backgroundColor: "transparent",
        },
    infoButton:
        {
            position: "absolute",
            right: 0,
            bottom: 0,
            width: 50,
            height: 50,
            backgroundColor: "#dfbb7f",
            borderRadius: 5,
            justifyContent: "center",
            alignItems: "center",
            elevation: 2, // only supported on Android 5.0+
        },
    textContent:
        {
            flex: 1,
            marginTop: 10,
            marginBottom: 10,
            marginRight: 10,
            backgroundColor: "#fff",
            borderRadius: 2,
            elevation: 2,
        },
    textSalon:
        {
            marginTop: 20,
            marginLeft: 20,
            color: "#d5cfc7",
            fontWeight: "bold"
        },
    cardTitle:
        {
            fontSize: 22,
            marginLeft: 30,
            marginTop: 5,
            fontWeight: "bold",
            color: "#0d1319",
        },
    viewPhoneAndLocation:
        {
            position: "absolute",
            top: CARD_HEIGHT * 0.68,
            left: 20,
        },
    cardDescription:
        {
            fontSize: 15,
            marginLeft: 5,
            color: "#c0c0ad",
        },
    markerWrap:
        {
            alignItems: "center",
            justifyContent: "center",
        },
    marker:
        {
            width: 8,
            height: 8,
            borderRadius: 4,
            backgroundColor: "rgba(130,4,150, 0.9)",
        },
    ring:
        {
            width: 24,
            height: 24,
            borderRadius: 12,
            backgroundColor: "rgba(130,4,150, 0.3)",
            position: "absolute",
            borderWidth: 1,
            borderColor: "rgba(130,4,150, 0.5)",
        },
    filterUp:
        {
            paddingTop: 2,
            width: width - 70,
            borderRadius: 30,
            height: 50,
            backgroundColor: "#fad390",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            opacity: 0.7
        },
    filterDown:
        {
            paddingTop: 2,
            width: width - 70,
            height: 50,
            borderRadius: 30,
            backgroundColor: "black",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            opacity: 0.7
        },
    filterTextUp:
        {
            color: "black",
            fontSize: 20,
            fontFamily: "TitanOne-Regular",
        },
    filterTextDown:
        {
            color: "white",
            fontSize: 20,
            fontFamily: "TitanOne-Regular",
        },
    viewPanelDown:
        {
            flex: 1,
            height: height,
            backgroundColor: "#fad390",
            alignItems: "center",
            opacity: 0.5
        },
    viewPanelUp:
        {
            flex: 1,
            height: height,
            alignItems: "center",
            backgroundColor: "black",
            opacity: 0.5
        },
    touchableCover:
        {
            alignItems: "center",
            justifyContent: "center",
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            paddingVertical: 0,
        },
    filterButtonChildUp:
        {
            borderWidth: 3,
            borderRadius: 20,
            borderColor: "#fad390",
            width: width / 2,
            height: height / 7,
            marginVertical: 15,
            alignItems: "center",
            justifyContent: "space-around"
        },
    filterButtonChildDown:
        {
            borderWidth: 3,
            borderRadius: 20,
            borderColor: "black",
            width: width / 2,
            height: height / 7,
            marginVertical: 15,
            alignItems: "center",
            justifyContent: "space-around"
        },
    filterButtonChildTextUp:
        {
            color: "#fad390",
            fontSize: 30,
            fontFamily: "TitanOne-Regular",
        },
    filterButtonChildTextDown:
        {
            color: "black",
            fontSize: 30,
            fontFamily: "TitanOne-Regular",
        },
    starRating:
        {
            opacity: 0,
        },
    wheelPicker:
        {
            width: 150,
            height: height / 7 + 30,
        },
    viewCoverWheelPicker:
        {
            flexDirection: 'row',
            justifyContent: "center",
            alignItems: "center",
            width: width,
            height: height / 7 + 30,
        }
})