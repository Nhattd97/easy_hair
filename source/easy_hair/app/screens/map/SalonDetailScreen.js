import React, {Component,PureComponent} from 'react'
import {
    View,
    Text,
    Image,
    ImageBackground,
    TouchableOpacity,
    ScrollView,
    StyleSheet,
    FlatList,
    Dimensions,
    TextInput
} from 'react-native'
import firebase from 'react-native-firebase'
import {
    Rating,
    UserFeedback,
} from '../../components'
import WhiteButton from '../../components/WhiteButton';
import { getCenter } from 'geolib';
import StarRating from 'react-native-star-rating'
import Prompt from 'rn-prompt'
import call from 'react-native-phone-call'


const { width, height } = Dimensions.get('window');

function wp (percentage) {
    const value = (percentage * width) / 100;
    return Math.round(value);
}

function wh (percentage) {
    const value = (percentage * height) / 100;
    return Math.round(value);
}

class SalonDetailScreen extends PureComponent {

    static navigationOptions = {
        headerTitle : 'Chi tiết',
    };

    constructor(props) {
        super(props)
        this.database = firebase.database()
        const {params} = this.props.navigation.state
        const data = params.data
        this.state = {
            score : 0,
            oneStar : 0,
            twoStar : 0,
            threeStar : 0,
            fourStar: 0,
            fiveStar : 0,
            starCount : 0,
            userName : '',
            avatar : '',
            uidUser : params.uid,
            dataInfo : data,
            index : params.index,
            salonName : data.title,
            phone : data.phone,
            address : data.description,
            background : data.background,
            promptVisible : false,
            content : '',
            images : ['https://i.imgur.com/UYiroysl.jpg','https://i.imgur.com/UPrs1EWl.jpg','https://i.imgur.com/MABUbpDl.jpg','https://i.imgur.com/KZsmUi2l.jpg','https://i.imgur.com/UYiroysl.jpg','https://i.imgur.com/UPrs1EWl.jpg'],
            feedback : data.feedback =='empty' ? [] : data.feedback ,
            description : 'Hoang Huy chạy thử nghiệm lần đầu tiên tại Hà Nội vào tháng 5/2015 và mất 1 năm để tìm ra hướng đi như hiện nay. Những anh em sáng lập Hoang Huy tin tưởng rằng người thợ Việt Nam rất tận tâm, khéo léo trong các nhóm ngành nghề cắt tóc, làm móng, massage… Nếu đưa ra một mô hình mới ứng dụng công nghệ và quy trình hợp lý, Hoang Huy có thể giúp thế mạnh này được chắp cánh, mang lại dịch vụ tuyệt vời cho khách hàng, tạo dựng môi trường tốt hơn cho anh em thợ. Theo đó, doanh nghiệp cũng có khả năng phát triển bền vững tại Việt Nam và vươn ra nước ngoài.'
        }
    }

    componentWillMount() {
        const database = this.database.ref(`salons/${this.state.index}/feedback`)
        database.on('value',(data) => {
            if(data.val() != 'empty')
                this.setState({
                    feedback : data.val()
                })
        })
        const user = this.database.ref(`users/${this.state.uidUser}`)
        user.on('value',(data) => {
            const userData = data.val()
            const {name,avatar} = userData
            this.setState({
                userName : name,
                avatar
            })
        })
    }

    componentDidMount() {
        this.updateStar()
    }

    updateStar() {
        if(this.state.feedback.length !=0) {
            var star1 = 0, star2 = 0, star3 = 0, star4 = 0, star5 = 0
            this.state.feedback.forEach(item => {
                switch(item.star) {
                    case 1 : 
                        star1 = star1 + 1
                        break;
                    case 2 : 
                        star2 = star2 + 1
                        break;
                    case 3 : 
                        star3 = star3 + 1
                        break;
                    case 4 : 
                        star4 = star4 + 1
                    break;
                    case 5 : 
                        star5 = star5 +1
                        break;
                    default :
                }
            })
            const result = (star1 + star2*2 + star3*3 + star4*4 + star5*5 ) / (star1 + star2 + star3 + star4 + star5) 
            this.setState({
                oneStar : star1,
                twoStar : star2,
                threeStar : star3,
                fourStar : star4,
                fiveStar : star5,
                score : result
            })
            const data = this.state.dataInfo
            this.database.ref(`salons/${this.state.index}`).set({
                coordinate: {
                    latitude: data.coordinate.latitude,
                    longitude: data.coordinate.longitude,
                },
                title: data.title,
                description: data.description,
                background: data.background,
                phone: data.phone,
                rating: result,
                distance: data.distance,
                feedback : this.state.feedback
            })
        }
    }


    userComment = (data, index, value) => {
        const feedback = {
            avatar : this.state.avatar,
            comment : value,
            star : this.state.starCount,
            userName : this.state.userName,
        }
        this.state.feedback.push(feedback)
        
        this.database.ref(`salons/${index}`).set({
            coordinate: {
                latitude: data.coordinate.latitude,
                longitude: data.coordinate.longitude,
            },
            title: data.title,
            description: data.description,
            background: data.background,
            phone: data.phone,
            rating: data.rating,
            distance: data.distance,
            feedback : this.state.feedback
        })
        this.setState({
            starCount : 0
        })
        
    }

    onStarRatingPress = (rating) => {
        this.setState({
            starCount : rating,
            promptVisible : true
        })
    }
    
    render() {
        
        return(
                <ScrollView>
                    
                    <View>
                        <ImageBackground style = {styles.background} source = {{uri : this.state.background}}>
                        <View style = {styles.navigation}>
                                    <TouchableOpacity onPress ={() => {}}>
                                        <Image source = {require('../../assets/images/marker_map.png')}/>  
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress ={() => {
                                        call({
                                            number : this.state.phone,
                                            prompt : false
                                        }).catch(error => {
                                            alert(error)
                                        })
                                    }}>
                                        <Image source = {require('../../assets/images/phone_call.png')}/>
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress ={() => {}}>
                                        <Image source = {require('../../assets/images/web.png')}/>
                                    </TouchableOpacity>
                                </View>
                        </ImageBackground>
                    </View>
                        <View style = {styles.salonTitle}>
                        <View style = {{}}>
                                    <Text style = {styles.salonName}>{this.state.salonName}</Text>
                                    <Text style = {styles.address}>{this.state.address}</Text>
                                </View>
                               
                        </View>
                    <View>
                        <Text style = {styles.description}>{this.state.description}</Text>
                    </View>
                    <View style = {{marginBottom : wp(3)}}>
                        <View style = {{flexDirection : 'row'}}>
                            <Text style = {styles.title}>Photos</Text>
                            <View style = {styles.line}/>
                        </View>
                        <FlatList
                            contentContainerStyle = {{ marginLeft : wp(5)}}
                            data={this.state.images}
                            refreshing = {true}
                            horizontal = {true}
                            showsVerticalScrollIndicator={false}
                            renderItem={({item}) =>
                            {
                                return <Image source = {{uri : item}}  style = {{width : 100, height : 150 , marginRight : 5}}/>
                            }
                            }
                            keyExtractor={(item,index) => item}
                        />
                    </View>
                    <View style = {{flexDirection : 'row', marginBottom : wp(3)}}>
                        <Text style = {styles.title}>Videos</Text>
                        <View style = {styles.line}/>
                    </View>
                    <View>
                        <View style = {{flexDirection : 'row'}}>
                            <Text style = {styles.title}>Rating</Text>
                            <View style = {styles.line}/>
                        </View>
                        <View style = {{alignItems : 'center'}}>
                            <Rating
                                score = {this.state.score} 
                                score1 = {this.state.oneStar} 
                                score2 = {this.state.twoStar} 
                                score3 = {this.state.threeStar} 
                                score4={this.state.fourStar} 
                                score5 = {this.state.fiveStar}/>
                        </View>
                    </View>
                    
                    <View style = {{marginVertical : wp(5)}}>
                        {/* <TextInput
                            style={{height: 80, borderColor: '#2D9CDB', borderWidth: 1, backgroundColor : 'white'}}
                            onChangeText={(text) => this.setState({content : text})}
                            value={this.state.content}
                            placeholder = "Nhập đánh giá của bạn"
                            placeholderTextColor = "grey"
                        /> */}
                        <Prompt
                            title = {"Bình luận của bạn"}
                            placeholder = {'Nhập đánh giá của bạn'}
                            visible = {this.state.promptVisible}
                            onCancel = {() => {
                                this.setState({
                                    promptVisible : false,
                                    starCount : 0,
                                    content : ''
                                })
                            }}
                            onSubmit = {(value) => {
                                this.setState({
                                    promptVisible : false,
                                    content : value
                                })
                                this.userComment(this.state.dataInfo,this.state.index, value)
                                this.updateStar()
                            }}
                        />
                        <Text style = {{fontSize : 17, marginTop : 20, alignSelf : 'center'}}>Đánh giá của bạn</Text>
                        <StarRating
                            disabled={false}
                            emptyStar={'ios-star-outline'}
                            fullStar={'ios-star'}
                            halfStar={'ios-star-half'}
                            iconSet={'Ionicons'}
                            maxStars={5}
                            rating={this.state.starCount}
                            selectedStar={(rating) => this.onStarRatingPress(rating)}
                            fullStarColor={'yellow'}
                        />
                    </View>
                    <View>
                        <View style = {{flexDirection : 'row'}}>
                            <Text style = {styles.title}>Phản hồi</Text>
                            <View style = {styles.line}/>
                        </View>
                        
                        <FlatList
                            contentContainerStyle = {{ marginLeft : wp(3)}}
                            data={this.state.feedback}
                            refreshing = {true}
                            showsVerticalScrollIndicator={false}
                            renderItem={({item}) =>
                            {
                                return <UserFeedback  
                                            image = {item.avatar}  
                                            comment = {item.comment} 
                                            userName = {item.userName}
                                            count = {item.star}
                                            />
                            }
                            }
                            keyExtractor={(item,index) => item.userName}
                        />
                    </View>
                </ScrollView>
        )
    }
}

export default SalonDetailScreen

const styles = StyleSheet.create({
    container : {
        flex : 1
    },
    background : {
        flex :1,
        width : '100%',
        height : wh(50),
        justifyContent : 'flex-end',
        alignItems : 'center',
        marginBottom : wp(2)
    },
    salonTitle : {
        justifyContent : 'center',
        alignItems : 'center',
    },
    title : {
        fontSize : 25, 
        marginBottom : wp(5), 
        marginLeft : wp(5)
    },

    salonName : {
        fontSize : 40,
        color : 'black',
        fontFamily : 'bold'
    },
    address : {
        fontSize : 20,
        color : 'black',
        fontFamily : 'bold'
    },
    navigation : {
        flexDirection : 'row',
        marginTop : 20,
        paddingHorizontal : 30,
        paddingVertical : 30,
        marginHorizontal : 30,
        backgroundColor : '#9da7f2'
    },
    description : {
        fontSize : 20
    },
    line: {
        marginLeft : wp(3), 
        height: 1, 
        alignSelf: 'center', 
        width: wp(60) ,
        backgroundColor : 'black'
    }
})