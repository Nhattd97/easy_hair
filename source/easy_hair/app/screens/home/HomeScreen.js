import React, {Component} from 'react'
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    AsyncStorage,
    ScrollView,
    Image,
    Dimensions
} from 'react-native'
import firebase from 'react-native-firebase'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as AuthActions from '../../actions/AuthAction'
import { AlbumDetail, AlbumList, AlbumImage, SliderEntry } from '../../components'
import Carousel, {Pagination} from 'react-native-snap-carousel'

const { width, height } = Dimensions.get('window');

function wp (percentage) {
    const value = (percentage * width) / 100;
    return Math.round(value);
}

const slideHeight = height * 0.36;
const slideWidth = wp(75);
const itemHorizontalMargin = wp(2);

 const sliderWidth = width;
 const itemWidth = slideWidth + itemHorizontalMargin * 2;
 const SLIDER_1_FIRST_ITEM =1

const entryBorderRadius = 8;
const colors = {
    black: '#1a1917',
    gray: '#888888',
    background1: '#c4ebf2',
    background2: '#ffffff',
    red : '#e2b9e5'
};
const storage = firebase.storage()
const storageRef = storage.ref()


export const ENTRIES1 = [
    {
        title: 'Beautiful and dramatic Antelope Canyon',
        subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
        illustration: 'https://i.imgur.com/UYiroysl.jpg'
    },
    {
        title: 'Earlier this morning, NYC',
        subtitle: 'Lorem ipsum dolor sit amet',
        illustration: 'https://i.imgur.com/UPrs1EWl.jpg'
    },
    {
        title: 'White Pocket Sunset',
        subtitle: 'Lorem ipsum dolor sit amet et nuncat ',
        illustration: 'https://i.imgur.com/MABUbpDl.jpg'
    },
    {
        title: 'Acrocorinth, Greece',
        subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
        illustration: 'https://i.imgur.com/KZsmUi2l.jpg'
    },
    {
        title: 'The lone tree, majestic landscape of New Zealand',
        subtitle: 'Lorem ipsum dolor sit amet',
        illustration: 'https://i.imgur.com/2nCt3Sbl.jpg'
    },
    {
        title: 'Middle Earth, Germany',
        subtitle: 'Lorem ipsum dolor sit amet',
        illustration: 'https://i.imgur.com/lceHsT6l.jpg'
    }
];

class HomeScreen extends Component {

    static navigationOptions = {
        headerTitle : 'Home',
        header : null
    };

    constructor(props) {
        super(props)
        this.state = {
            //image : 'https://firebasestorage.googleapis.com/v0/b/easy-hair-914b1.appspot.com/o/taylor.jpg?alt=media&token=d03031df-042c-4236-8e05-b0c394ea4306'
            image : '',
            albumCrop : [
                "https://firebasestorage.googleapis.com/v0/b/easy-hair-914b1.appspot.com/o/images%2Fcrop%2F1.jpg?alt=media&token=69ea69df-e322-455a-9e33-f508b3c20d3b",
                "https://firebasestorage.googleapis.com/v0/b/easy-hair-914b1.appspot.com/o/images%2Fcrop%2F2.jpg?alt=media&token=a32dacf5-db6d-48e1-b63c-ef2f9482668f",
                "https://firebasestorage.googleapis.com/v0/b/easy-hair-914b1.appspot.com/o/images%2Fcrop%2F3.jpg?alt=media&token=78cedf42-b86f-4d08-b569-e1de33e2964d",
                "https://firebasestorage.googleapis.com/v0/b/easy-hair-914b1.appspot.com/o/images%2Fcrop%2F4.jpg?alt=media&token=b4f26da1-1e65-42e9-87ac-f95a124f4fe3",
                "https://firebasestorage.googleapis.com/v0/b/easy-hair-914b1.appspot.com/o/images%2Fcrop%2F5.jpg?alt=media&token=4a13f451-133c-4d24-b82a-fe1142d2c3a9",
                "https://firebasestorage.googleapis.com/v0/b/easy-hair-914b1.appspot.com/o/images%2Fcrop%2F6.jpg?alt=media&token=ab9ece05-2435-42cd-91c1-11b03d84f48e",
                "https://firebasestorage.googleapis.com/v0/b/easy-hair-914b1.appspot.com/o/images%2Fcrop%2F7.jpg?alt=media&token=770db097-b48e-4ee4-a3ba-752a17a4feef"
            ],
            albumCurly : [
                "https://firebasestorage.googleapis.com/v0/b/easy-hair-914b1.appspot.com/o/images%2Fcurly%2F1.jpg?alt=media&token=74b29aaa-480a-4575-aaf4-60f284823eb5",
                "https://firebasestorage.googleapis.com/v0/b/easy-hair-914b1.appspot.com/o/images%2Fcurly%2F2.jpg?alt=media&token=16c48eee-ab0b-40ad-b8ca-670fa07b3cb0",
                "https://firebasestorage.googleapis.com/v0/b/easy-hair-914b1.appspot.com/o/images%2Fcurly%2F3.jpg?alt=media&token=126e1b10-fa20-4adb-bd51-18dac067df1f",
                "https://firebasestorage.googleapis.com/v0/b/easy-hair-914b1.appspot.com/o/images%2Fcurly%2F4.jpg?alt=media&token=2a11771d-5204-405c-a755-e206c80b3a9f",
                "https://firebasestorage.googleapis.com/v0/b/easy-hair-914b1.appspot.com/o/images%2Fcurly%2F5.jpg?alt=media&token=c510cea6-4d72-45c7-9492-e9ce6c828144",
                "https://firebasestorage.googleapis.com/v0/b/easy-hair-914b1.appspot.com/o/images%2Fcurly%2F6.jpg?alt=media&token=ab5db736-d734-403b-8ba1-39a11fbcd981",
                "https://firebasestorage.googleapis.com/v0/b/easy-hair-914b1.appspot.com/o/images%2Fcurly%2F7.jpg?alt=media&token=2a890a47-37f3-4120-9fcc-7bbd86cdd99a",
                "https://firebasestorage.googleapis.com/v0/b/easy-hair-914b1.appspot.com/o/images%2Fcurly%2F8.jpg?alt=media&token=76ecdc9b-70cf-4b3f-8c85-ae26e525e834",
                "https://firebasestorage.googleapis.com/v0/b/easy-hair-914b1.appspot.com/o/images%2Fcurly%2F9.jpg?alt=media&token=e0d65d9b-8d03-4bc8-8e75-bdd867e5499e"
            ],
            album : [],
            slider1ActiveSlide: SLIDER_1_FIRST_ITEM
        }
    }

    componentWillMount() {
        const database = firebase.database().ref(`images/banner`)
        database.on('value',(data) => {
            const userData = data.val()
            const {name,gender,birthday,address} = userData
            this.setState({
                album : userData
            })
        })
        //this.getImage()
    }

    renderAlbums(albums){
        return albums.map(album => <AlbumDetail  album={album.background}/>);
    }

    getImage = () => {
        const imageURL = storageRef.child('taylor.jpg')
        imageURL.getDownloadURL().then((url) => {
            this.setImage(url)
          }).catch(function(error) {
            // Handle any errors
            alert(error)
          });
    }

    setImage(url) {
        this.setState({
            image : url
        })
    }

    async logout() {

        try {
    
            await firebase.auth().signOut();
            //alert("Log out")
            // Navigate to login view
            this.props.navigation.navigate('Auth')
    
        } catch (error) {
            alert(error);
        }
    
    }

    signOutAsync = async () => {
        await AsyncStorage.clear()
        this.props.navigation.navigate('Auth')
    }

    _renderItemWithParallax ({item, index}, parallaxProps) {
        const dataItem = {
            title: item.title,
            subtitle: 'Lorem ipsum dolor sit amet',
            illustration: item.background
        }
        const {images} = item
        return (
            <SliderEntry
              onPress = {() => this.props.navigation.navigate('Image',{ images})}
              data={dataItem}
              even={(index + 1) % 2 === 0}
              //even={true}
              parallax={true}
              parallaxProps={parallaxProps}
            />
        );
    }

    mainExample (number, title) {
        const { slider1ActiveSlide } = this.state;

        return (
            <View style={styles.exampleContainer}>
                {/* <Text style={styles.title}>{`Example ${number}`}</Text>
                <Text style={styles.subtitle}>{title}</Text> */}
                <Carousel
                  ref={c => this._slider1Ref = c}
                  data={this.state.album}
                  renderItem={this._renderItemWithParallax.bind(this)}
                  sliderWidth={sliderWidth}
                  itemWidth={itemWidth}
                  hasParallaxImages={true}
                  firstItem={SLIDER_1_FIRST_ITEM}
                  inactiveSlideScale={0.94}
                  inactiveSlideOpacity={0.7}
                  // inactiveSlideShift={20}
                  containerCustomStyle={styles.slider}
                  contentContainerCustomStyle={styles.sliderContentContainer}
                  loop={true}
                  loopClonesPerSide={2}
                  autoplay={true}
                  autoplayDelay={500}
                  autoplayInterval={3000}
                  onSnapToItem={(index) => this.setState({ slider1ActiveSlide: index }) }
                />
                <Pagination
                  dotsLength={this.state.album.length}
                  activeDotIndex={slider1ActiveSlide}
                  containerStyle={styles.paginationContainer}
                  dotColor={'rgba(255, 255, 255, 0.92)'}
                  dotStyle={styles.paginationDot}
                  inactiveDotColor={colors.black}
                  inactiveDotOpacity={0.4}
                  inactiveDotScale={0.6}
                  carouselRef={this._slider1Ref}
                  tappableDots={!!this._slider1Ref}
                />
            </View>
        );
    }

    render() {
        const example1 = this.mainExample(1, 'Default layout | Loop | Autoplay | Parallax | Scale | Opacity | Pagination with tappable dots');
        return(
                <View style={styles.container}>
                    <ScrollView
                      style={styles.scrollview}
                      scrollEventThrottle={200}
                      directionalLockEnabled={true}
                    >
                        { example1 }
                    <View style = {styles.genderContainer}>
                        <View style = {[styles.genderImage,{marginLeft : 5}]}>
                            <AlbumDetail onPress = {() => {this.props.navigation.navigate('Album',{gender : 'men'})}} title = {'Nam'} album = {'https://firebasestorage.googleapis.com/v0/b/easy-hair-914b1.appspot.com/o/test%2Fboy-hair-style-best-25-hair-styles-for-boys-ideas-on-pinterest-kids-haircutboy-hair-style-best-25-hair-styles-for-boys-ideas-on-pinterest-kids-haircut-long.jpg?alt=media&token=7f7880a1-04f7-4726-a8f6-12ae94cf58c7'}/>
                        </View>
                        <View style = {styles.genderImage}>
                            <AlbumDetail onPress = {() => {this.props.navigation.navigate('Album',{gender : 'women'})}} title = {'Nữ'} album = {'https://firebasestorage.googleapis.com/v0/b/easy-hair-914b1.appspot.com/o/test%2Ftaylor.jpg?alt=media&token=eac3c43a-4c44-47c1-b91f-1374e9726132'}/>
                        </View>
                    </View>
                    </ScrollView>
                </View>
        )
    }
}

function mapStateToProps(state) {
    return {
        user : state.Auth.user
    }
}

function mapDispatchToProps(dispatch) {
    return {
        AuthActions : bindActionCreators(AuthActions, dispatch)
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(HomeScreen)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background1
    },
    gradient: {
        ...StyleSheet.absoluteFillObject
    },
    scrollview: {
        flex: 1
    },
    exampleContainer: {
        paddingVertical: 0,
    },
    exampleContainerDark: {
        backgroundColor: colors.black
    },
    exampleContainerLight: {
        backgroundColor: 'white'
    },
    title: {
        paddingHorizontal: 30,
        backgroundColor: 'transparent',
        color: 'rgba(255, 255, 255, 0.9)',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    titleDark: {
        color: colors.black
    },
    subtitle: {
        marginTop: 5,
        paddingHorizontal: 30,
        backgroundColor: 'transparent',
        color: 'rgba(255, 255, 255, 0.75)',
        fontSize: 13,
        fontStyle: 'italic',
        textAlign: 'center'
    },
    slider: {
        marginTop: 5,
        overflow: 'visible' // for custom animations
    },
    sliderContentContainer: {
        paddingVertical: 0 // for custom animation
    },
    paginationContainer: {
        paddingVertical: 0
    },
    paginationDot: {
        width: 8,
        height: 8,
        borderRadius: 4,
        marginHorizontal: 5
    },
    genderContainer : {
        flex : 1,
        flexDirection : 'row',
        justifyContent : 'center',
        marginTop : wp(5)
    },
    genderImage : {
        marginTop : 20,
        width : 175,
        height : 260,
        borderRadius : 10
    }
})