import React, {Component} from 'react'
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

const { width, height } = Dimensions.get('window');

function wp (percentage) {
    const value = (percentage * width) / 100;
    return Math.round(value);
}

function wh (percentage) {
    const value = (percentage * height) / 100;
    return Math.round(value);
}

class SalonDetailScreen extends Component {

    static navigationOptions = {
        headerTitle : 'Chi tiết',
    };

    constructor(props) {
        super(props)
        this.database = firebase.database()
        const {params} = this.props.navigation.state
        const data = params.data
        this.state = {
            userName : '',
            avatar : '',
            uidUser : params.uid,
            dataInfo : data,
            index : params.index,
            salonName : data.title,
            phone : data.phone,
            address : data.description,
            background : data.background,
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

    userComment = (data,index) => {
        const feedback = {
            avatar : this.state.avatar,
            comment : this.state.content,
            star : 5,
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
            content : ''
        })
    }
    
    render() {
        return(
                <ScrollView>
                    <View>
                        <ImageBackground style = {styles.background} source = {{uri : this.state.background}}>
                            <View style = {{}}>
                                <Text style = {styles.salonName}>{this.state.salonName}</Text>
                                <Text style = {styles.address}>{this.state.address}</Text>
                            </View>
                            <View style = {styles.navigation}>
                                <TouchableOpacity onPress ={() => {}}>
                                    <Image source = {require('../../assets/images/marker_map.png')}/>  
                                </TouchableOpacity>
                                <TouchableOpacity onPress ={() => {}}>
                                    <Image source = {require('../../assets/images/phone_call.png')}/>
                                </TouchableOpacity>
                                <TouchableOpacity onPress ={() => {}}>
                                    <Image source = {require('../../assets/images/web.png')}/>
                                </TouchableOpacity>
                            </View>
                        </ImageBackground>
                    </View>
                    <View>
                        <Text style = {styles.description}>{this.state.description}</Text>
                    </View>
                    <View>
                        <Text style = {{fontSize : 25}}>Photos</Text>
                        <FlatList
                            contentContainerStyle = {{ marginLeft : wp(3)}}
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
                    <View>
                        <Text style = {{fontSize : 25}}>Videos</Text>
                    </View>
                    <View>
                        <Text style = {{fontSize : 25}}>Rating</Text>
                        <Rating score = {4.1} score1 = {1} score2 = {3} score3 = {6} score4={5} score5 = {9}/>
                    </View>
                    <View>
                        <TextInput
                            style={{height: 80, borderColor: 'gray', borderWidth: 1, backgroundColor : 'white'}}
                            onChangeText={(text) => this.setState({content : text})}
                            value={this.state.content}
                        />
                        <WhiteButton onPress = {() => this.userComment(this.state.dataInfo,this.state.index)}>
                            Đánh giá
                        </WhiteButton>
                    </View>
                    <View>
                        <Text style = {{fontSize : 25}}>Feedback</Text>
                        <FlatList
                            contentContainerStyle = {{ marginLeft : wp(3)}}
                            data={this.state.feedback}
                            refreshing = {true}
                            showsVerticalScrollIndicator={false}
                            renderItem={({item}) =>
                            {
                                return <UserFeedback  image = {item.avatar}  comment = {item.comment} userName = {item.userName}/>
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
        justifyContent : 'center',
        alignItems : 'center',
        marginBottom : wp(2)
    },
    salonName : {
        fontSize : 40,
        color : 'white',
        fontFamily : 'bold'
    },
    address : {
        fontSize : 20,
        color : 'white',
        fontFamily : 'bold'
    },
    navigation : {
        flexDirection : 'row',
        marginTop : 120,
        paddingHorizontal : 30,
        paddingVertical : 30,
        marginHorizontal : 30
    },
    description : {
        fontSize : 20
    }
})