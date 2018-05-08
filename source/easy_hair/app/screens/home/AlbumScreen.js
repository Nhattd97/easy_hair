import React, {Component} from 'react'
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    AsyncStorage,
    ScrollView,
    Dimensions,
    Image,
    SafeAreaView,
    StatusBar,
    Platform,
    ImageBackground
} from 'react-native'
import Carousel, {Pagination} from 'react-native-snap-carousel'
import {SliderEntry} from '../../components'

const IS_IOS = Platform.OS === 'ios';
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

const ENTRIES1 = [
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

export default class AlbumScreen extends Component {
    // static navigationOptions = ({ navigation }) => {
    //     return {
    //       headerStyle: {
    //         backgroundColor: 'transparent',
    //       },
    //     };
    //   }

      static navigationOptions = {
        header : null
    };

    constructor(props) {
        super(props)
        this.state = {
            image : 'https://firebasestorage.googleapis.com/v0/b/easy-hair-914b1.appspot.com/o/images%2Fcurly%2F1.jpg?alt=media&token=74b29aaa-480a-4575-aaf4-60f284823eb5',
            slider1ActiveSlide: SLIDER_1_FIRST_ITEM
        }
    }

    componentWillMount() {
        const database = firebase.database().ref(`images/men/banner`)
        database.on('value',(data) => {
            const userData = data.val()
            const {name,gender,birthday,address} = userData
            this.setState({
                album : userData
            })
        })
        this.getImage()
    }

    _renderItemWithParallax ({item, index}, parallaxProps) {
        return (
            <SliderEntry
              onPress = {() => this.props.navigation.navigate('Image')}
              data={item}
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
                  data={ENTRIES1}
                  renderItem={this._renderItemWithParallax.bind(this)}
                  sliderWidth={sliderWidth}
                  itemWidth={itemWidth}
                  hasParallaxImages={true}
                  firstItem={0}
                  inactiveSlideScale={0.94}
                  inactiveSlideOpacity={0.7}
                  // inactiveSlideShift={20}
                  containerCustomStyle={styles.slider}
                  contentContainerCustomStyle={styles.sliderContentContainer}
                  loopClonesPerSide={2}
                />
            </View>
        );
    }

    render() {
        const example1 = this.mainExample(1, 'Default layout | Loop | Autoplay | Parallax | Scale | Opacity | Pagination with tappable dots');
        return(
                <View style={styles.container}>
                    <StatusBar
                      translucent={true}
                      backgroundColor={'rgba(0, 0, 0, 0.3)'}
                      barStyle={'light-content'}
                    />
                    <ImageBackground style = {{width : '100%',height : '100%'}} source = {{uri : 'https://firebasestorage.googleapis.com/v0/b/easy-hair-914b1.appspot.com/o/test%2Fboy-hair-style-best-25-hair-styles-for-boys-ideas-on-pinterest-kids-haircutboy-hair-style-best-25-hair-styles-for-boys-ideas-on-pinterest-kids-haircut-long.jpg?alt=media&token=7f7880a1-04f7-4726-a8f6-12ae94cf58c7'}}>
                    <View style = {{ flex : 1, alignItems : 'center', justifyContent:'center'}}>
                        <Text style = {{fontSize : 60, color : 'white'}}>Easy Hair</Text>
                        <Text style = {{fontSize : 30, color : 'white'}}>Kiểu tóc nam</Text>
                    </View>
                    <View style = {{flexDirection : 'row', justifyContent : 'space-between', marginHorizontal : 10, marginVertical : 20}}>
                        <TouchableOpacity onPress = {() => { this._slider1Ref.snapToPrev() }} >
                            <Text>Prev</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress = {() => { this._slider1Ref.snapToNext() }} >
                            <Text>Next</Text>
                        </TouchableOpacity>
                    </View>
                        { example1 }
                    </ImageBackground>
                    
                </View>
        )
    }
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: colors.black
    },
    container: {
        flex: 1,
        justifyContent : 'flex-end',
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
        paddingVertical: 10 // for custom animation
    },
    paginationContainer: {
        paddingVertical: 0
    },
    navBar: {
        backgroundColor: 'transparent',
      },
    paginationDot: {
        width: 8,
        height: 8,
        borderRadius: 4,
        marginHorizontal: 8
    }
})