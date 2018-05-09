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
    Dimensions
} from 'react-native'
import {
    Rating, UserFeedback,
    
} from '../../components'

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

    constructor(props) {
        super(props)
        this.state = {
            salonName : 'Hoang Huy',
            phone : '',
            address : 'Quan 3, Ho Chi Minh',
            background : "https://s3-media4.fl.yelpcdn.com/bphoto/x77J3sxFkWwKHakDSyhDIw/o.jpg",
            images : ['https://i.imgur.com/UYiroysl.jpg','https://i.imgur.com/UPrs1EWl.jpg','https://i.imgur.com/MABUbpDl.jpg','https://i.imgur.com/KZsmUi2l.jpg','https://i.imgur.com/UYiroysl.jpg','https://i.imgur.com/UPrs1EWl.jpg'],
            feedback : [
                {
                    userName : 'Tran Duc Nhat',
                    comment : 'Salon cat toc dep',
                    image : 'https://scontent.fsgn5-3.fna.fbcdn.net/v/t1.0-9/26734063_1246822755418092_6500198356385146251_n.jpg?_nc_cat=0&_nc_eui2=v1%3AAeH3awnsxRws9QYo5Z-wdb22_L-4KH9FrBeaVBlrKD02gN7gT0fgHMxeRYnSU8KANd24MuBbLmsmYE_fl-kUnutid-2FVVEapv7YUGfapjt8mg&oh=f3083fd86430018030b9aa8c4de9b329&oe=5B86D15E'
                },
                {
                    userName : 'Hoàng Lâm',
                    comment : 'Nice salon',
                    image : 'https://scontent.fsgn5-4.fna.fbcdn.net/v/t1.0-1/30516461_1957789730928723_7711068971956436992_n.jpg?_nc_cat=0&_nc_eui2=v1%3AAeFyF8HH0rRtafHhw8ElrgTd9vl7luyPy0SYia2N2SEGjtOv3sId-kWvDxmj5xBR1_q_OrvhtdrKdZkF21sNYn0oCXEeesayVPvsWrcxuUW-rw&oh=1d45739519d6a1971a181ab1486e2c4b&oe=5B578883'
                },
                {
                    userName : 'Lê Võ Gia Khang',
                    comment : 'Sẽ hớt lần sau nữa',
                    image : 'https://scontent.fsgn5-6.fna.fbcdn.net/v/t1.0-9/31351335_609328229399602_6277382813805182976_n.jpg?_nc_cat=0&_nc_eui2=v1%3AAeEZ15pvN2QGXlnYDGFUPzdDclVXaIJLqKxsxUAVwDj2otKdyDLNPR04f4mRrf7WKY1y8O0crC15BTNPHocc_xsDzR3NMVa23WGxUSltVczBEg&oh=7a60a4484e56400c9f0769aec0316e74&oe=5B86D7FB'
                },
                {
                    userName : 'Ngô Minh Kiên',
                    comment : 'Kiểu đầu khất rất chất',
                    image : 'https://scontent.fsgn5-6.fna.fbcdn.net/v/t1.0-9/30740548_1243311172466624_1153362417359519744_n.jpg?_nc_cat=0&_nc_eui2=v1%3AAeGM0dvk28fFYuLFJQMavL3xHbQlBkQrfDGEXaHdOC-ZhFK64eP1wqu9rLkeb7moQEQa6W9DwueUzZLgoi-BEZWjCOtv-_8pKudEpTC5uV2BjA&oh=d6b676acce0f3e01c3eaa3b3b55f15bc&oe=5B549EEE'
                }
            ],
            description : 'Hoang Huy chạy thử nghiệm lần đầu tiên tại Hà Nội vào tháng 5/2015 và mất 1 năm để tìm ra hướng đi như hiện nay. Những anh em sáng lập Hoang Huy tin tưởng rằng người thợ Việt Nam rất tận tâm, khéo léo trong các nhóm ngành nghề cắt tóc, làm móng, massage… Nếu đưa ra một mô hình mới ứng dụng công nghệ và quy trình hợp lý, Hoang Huy có thể giúp thế mạnh này được chắp cánh, mang lại dịch vụ tuyệt vời cho khách hàng, tạo dựng môi trường tốt hơn cho anh em thợ. Theo đó, doanh nghiệp cũng có khả năng phát triển bền vững tại Việt Nam và vươn ra nước ngoài.'
        }
    }
    
    render() {
        return(
                <ScrollView>
                    <View>
                        <ImageBackground style = {styles.background} source = {{uri : this.state.background}}>
                            <View>
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
                            keyExtractor={(item,index) => index}
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
                        <Text style = {{fontSize : 25}}>Feedback</Text>
                        <FlatList
                            contentContainerStyle = {{ marginLeft : wp(3)}}
                            data={this.state.feedback}
                            refreshing = {true}
                            showsVerticalScrollIndicator={false}
                            renderItem={({item}) =>
                            {
                                return <UserFeedback  image = {item.image}  comment = {item.comment} userName = {item.userName}/>
                            }
                            }
                            keyExtractor={(item,index) => index}
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
        alignItems : 'center'
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