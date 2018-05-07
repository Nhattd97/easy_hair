/*
 * @author: LeVoGiaKhang on 5/5/2018
 */

import React, {Component} from "react";
import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    Animated,
    Image,
    Dimensions,
    TouchableOpacity,
} from "react-native";
import MapView from "react-native-maps";
import CustomMarker from "../controls/CustomMarker.js";
import geolib from 'geolib';
import SlidingUpPanel from "rn-sliding-up-panel";

//region Global variables
//=====================================================================================
//                             Global Variables
//=====================================================================================
const Images = [
    {uri: "https://i.imgur.com/sNam9iJ.jpg"},
    {uri: "https://i.imgur.com/N7rlQYt.jpg"},
    {uri: "https://i.imgur.com/UDrH0wm.jpg"},
    {uri: "https://i.imgur.com/Ka8kNST.jpg"},
    {uri: "https://firebasestorage.googleapis.com/v0/b/testfirebasestorage-17479.appspot.com/o/Khang.jpg?alt=media&token=456c59ae-96aa-4298-aed7-8191cf90b013"}
];

const {width, height} = Dimensions.get("window");

const CARD_HEIGHT = height / 3;
const CARD_WIDTH = width - 50;

const filterUp = require("../assets/images/filter_up.png");
const filterDown = require("../assets/images/filter_down.png");
//endregion


export default class AnimatedMap extends Component {
    state = {

        // region  Markers
        // ---------------------------------------------------------------------------
        // An array markers used to store the salons' data
        // Include of:
        //      @ coordinate:   lat, long of marker
        //      @ title:        name of salon
        //      @ description:  describe about the salon, I passed the salon's address
        //      @ image:        an object represents an uri
        //      @ rating:       score of the salon
        markers: [
            {
                coordinate: {
                    latitude: 10.876492,
                    longitude: 106.808571,
                },
                title: "Nam Bảo Lân",
                description: "Đường 621, Phường Linh Trung, Quận Thủ Đức, Thành Phố Hồ Chí Minh",
                image: Images[0],
                phone: +841633829689,
                rating: 1,
                distance: 0,
            },
            {
                coordinate: {
                    latitude: 10.887485,
                    longitude: 106.767158,
                },
                title: "Anh Tuấn",
                description: "12 Đường số 11, Linh Xuân, Thủ Đức, Hồ Chí Minh",
                image: Images[1],
                phone: +842838974335,
                rating: 2,
                distance: 0,
            },
            {
                coordinate: {
                    latitude: 10.867649,
                    longitude: 106.786881,
                },
                title: "Minh Hoàng",
                description: "146 Đường số 17, Phường Linh Trung, Thủ Đức, Hồ Chí Minh",
                image: Images[2],
                phone: +84919691978,
                rating: 3,
                distance: 0,
            },
            {
                coordinate: {
                    latitude: 10.8834292,
                    longitude: 106.7783064,
                },
                title: "Khang",
                description: "B Dorm, DiAn District, BinhDuong Province",
                image: Images[4],
                phone: +84868242564,
                rating: 5,
                distance: 0,
            },
            {
                coordinate: {
                    latitude: 10.860831,
                    longitude: 106.782804,
                },
                title: "D&D",
                description: "40 Đường số 16, Phường Linh Trung, Thu Duc District, Hồ Chí Minh",
                image: Images[3],
                phone: +84907500803,
                rating: 4,
                distance: 0,
            },
        ],
        // endregion

        // The region that The Map will be shown at the first time
        region: {
            latitude: 10.8884278,
            longitude: 106.7765558,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01,
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
         * @default: 0
         */
        ratingFilter: 0,

        /**
         * filterMode is mode of filter that users choose on filter
         * @default: "all"
         * @enum: "all", "number", "rating"
         */
        filterMode: "all",
    };

    constructor(props) {
        super(props);
        this.getSalonsByRating = this.getSalonsByRating.bind(this);
        this.getSalonsByNearestSalons = this.getSalonsByNearestSalons.bind(this);
    }



    //region  Component Will Mount Function
    //=====================================================================================
    //                           Component Will Mount Function
    //=====================================================================================
    componentWillMount() {
        this.index = 0;
        this.animation = new Animated.Value(0);
    }
    //endregion



    //region  Component Did Mount Function
    //=====================================================================================
    //                           Component Did Mount Function
    //=====================================================================================
    componentDidMount() {
        // We should detect when scrolling has stopped then animate
        // We should just debounce the event listener here
        this.animation.addListener(({value}) => {
            let index = Math.floor(value / CARD_WIDTH + 0.3); // animate 30% away from landing on the next item
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
                                alert("Can not get distance to \"" + this.state.markers[i].title + "\"\nPlease make sure your location is turned on!");
                                this.setState({tempDistance: -1});
                                this.state.markers[i].distance = this.state.tempDistance;
                            },
                            {
                                enableHighAccuracy: false, timeout: 20000
                            }
                        );
                    }
                },
                10 // number of delay time that the function call should be delayed by
            );
        });


    }
    //endregion


    //region  Render Function
    //=====================================================================================
    //                           Render Function
    //=====================================================================================
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
                        return (
                            <CustomMarker
                                nameOfPlace={marker.title}
                                coordinateMarker={marker.coordinate}
                                markerId={index}
                                title={marker.title}
                                description={marker.description}
                                source={marker.image}
                                rating={marker.rating}>

                                <Animated.View style={[styles.markerWrap, opacityStyle]}>
                                    <Animated.View style={[styles.ring, scaleStyle]}/>
                                    <View style={styles.coordinateMarker}/>
                                </Animated.View>
                            </CustomMarker>
                        );
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
                                source={marker.image}
                                style={styles.cardImage}
                                resizeMode="cover"
                            />
                            <View style={styles.textContent}>
                                <View style={{justifyContent: "center", alignItems: "center"}}>
                                    <Text numberOfLines={1}
                                          style={styles.cardTitle}>
                                        {marker.title}
                                    </Text>
                                </View>

                                <Text numberOfLines={1}
                                      style={styles.cardDescription}>
                                    {marker.description}
                                </Text>

                                <View style={{flexDirection: "row", marginTop: 3}}>
                                    <View style={{flexDirection: "row", marginLeft: 15}}>
                                        <Image
                                            style={{width: 20, height: 20}}
                                            source={require("../assets/images/phone.png")}/>
                                        <Text numberOfLines={1}
                                              style={styles.cardDescription}>
                                            {"\t" + marker.phone}
                                        </Text>
                                    </View>


                                    <View style={{flexDirection: "row", marginLeft: CARD_WIDTH / 5}}>
                                        <Image
                                            style={{width: 20, height: 20}}
                                            source={require("../assets/images/location.png")}/>
                                        <Text numberOfLines={1}
                                              style={styles.cardDescription}>
                                            {marker.distance / 1000 + " km"}
                                        </Text>

                                    </View>
                                </View>
                            </View>
                        </View>
                    ))}

                </Animated.ScrollView>

                <SlidingUpPanel
                    visible={this.state.visible}
                    height={height - 200}
                    draggableRange={{top: height - 200, bottom: 0}}
                    onRequestClose={() => {
                        this.setState({visible: false})
                    }}
                    allowDragging={false}>

                    <View style={viewPanel}>
                        <TouchableOpacity
                            style={filterButtonChild}>
                            <Text style={filterButtonChildText}>
                                ALL
                            </Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={filterButtonChild}>
                            <Text style={filterButtonChildText}>
                                NEARLY
                            </Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={filterButtonChild}
                        onPress={() => {
                            this.state.markers.slice(0,this.state.markers.length);
                            this.setState({markers: this.getSalonsByRating(3)})}
                        }>
                            <Text style={filterButtonChildText}>
                                RATING
                            </Text>
                        </TouchableOpacity>

                    </View>

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
        );
    }

    //endregion

    //region Other Functions
    //=====================================================================================
    //                                 Other Functions
    //=====================================================================================

    /**
     * Set ratingFilter
     * @param rating
     */
    setRatingFilter(rating) {
        this.setState({ratingFilter: rating});
    }

    /**
     * Return an array as a result that is filtered by rating
     * @param rating
     * @returns {T[]}
     */
    getSalonsByRating(rating) {
        return this.state.markers.filter((salon) => {
            return salon.rating >= rating;
        });
    }

    /**
     * Return an array as a result that is filtered by number of nearest salons
     * @param totalSalons: number of salons in database
     * @param number: number of salons that user wants to filter
     * @returns {any[]}
     */
    getSalonsByNearestSalons(totalSalons, number) {
        // sort() method sorts by character, so sort((a,b) => return a - b) will sort number by ascending
        // this statement means get each salon in markers array, after that ascending sort by distance.
        let arrAfterSort = this.state.markers.sort((salon) => {
            return salon.distance;
        }).sort((a, b) => {
            return a - b;
        });

        if (number > totalSalons)
        {
            let result = new Array(arrAfterSort.length);
            for (let i = 0; i <=  arrAfterSort.length - 1; ++i) {
                result.push(arrAfterSort[arrAfterSort.length - 1 - i]);
            }
            return result;
        }

        else {
            let result = new Array(number);
            for (let i = 0; i <= number - 1; ++i) {
                result.push(arrAfterSort[arrAfterSort.length - 1 - i]);
            }
            return result;
        }
    }

    //endregion
}


//region StyleSheet
//=====================================================================================
//                                   StyleSheet
//=====================================================================================
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
            padding: 10,
            elevation: 2,
            backgroundColor: "#FFF",
            marginHorizontal: 10,
            shadowColor: "#000",
            shadowRadius: 5,
            shadowOpacity: 0.3,
            shadowOffset: {x: 2, y: -2},
            height: CARD_HEIGHT + 20,
            width: CARD_WIDTH,
            overflow: "hidden",
            borderRadius: 30,
        },
    cardImage:
        {
            flex: 3,
            width: "100%",
            height: "100%",
            borderRadius: 20,
        },
    textContent:
        {
            flex: 1,
        },
    cardTitle:
        {
            fontSize: 15,
            marginTop: 2,
            fontWeight: "bold",
        },
    cardDescription:
        {
            fontSize: 12,
            color: "#444",
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

});
//endregion