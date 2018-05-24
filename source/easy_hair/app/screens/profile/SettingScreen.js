import React, { Component } from 'react'
import {
    View,
    StyleSheet,
    Text,
    TouchableOpacity,
    AsyncStorage,
    StatusBar,
    Image,
    Alert
} from 'react-native'
import firebase from 'react-native-firebase'

export default class SettingScreen extends Component {
    static navigationOptions = {
        header: (props) => (
            <View style={styles.header}>
                <View>
                    <TouchableOpacity style={styles.headerLeftBtn} onPress={() => { props.navigation.goBack(null), StatusBar.setBarStyle('light-content'); }}>
                        <Image style={{ width: 30, height: 30 }} source={require('../../assets/images/Close_WHITE.png')} resizeMethod='resize' />
                    </TouchableOpacity>
                    <Text style={styles.headerTitle}>Cài đặt</Text>
                </View>
            </View>
        ),
        tabBarVisible: true
    };

    constructor(props) {
        super(props)

    }

    logOut = async () => {

        try {
    
            await firebase.auth().signOut();
            //alert("Log out")
            // Navigate to login view
            this.props.navigation.navigate('Auth')
    
        } catch (error) {
            alert(error);
        }
    }

    onLogOut = () => {

        // try {
    
        //     await firebase.auth().signOut();
        //     //alert("Log out")
        //     // Navigate to login view
        //     this.props.navigation.navigate('Auth')
    
        // } catch (error) {
        //     alert(error);
        // }
        
        Alert.alert(
            "",
            "Bạn có chắc muốn đăng xuất?",
            [
                {
                    text: "Không",
                    onPress: () => { }
                },
                {
                    text: "Có",
                    onPress: () => {
                        this.logOut()
                    }
                },
            ],
            {
                cancelable: false
            }
        );
    }

    changePassword = () => {

    }

    uploadData() {
        const database = firebase.database()
        database.ref(`images`).set({
            banner : [
                {
                    background : 'http://sv1.upsieutoc.com/2018/05/18/growlonghairmain2.jpg',
                    images : [
                        'http://sv1.upsieutoc.com/2018/05/18/9-4.jpg',
                        'http://sv1.upsieutoc.com/2018/05/18/12-2.jpg',
                        'http://sv1.upsieutoc.com/2018/05/18/david-beckham-messy-pompadour-hairstyle.jpg',
                        'http://sv1.upsieutoc.com/2018/05/18/hqdefault.jpg',
                        'http://sv1.upsieutoc.com/2018/05/18/images.jpg',
                        'http://sv1.upsieutoc.com/2018/05/18/jarredsbarbers-cool-fade-haircuts-heavy-drop-fade-thick-hair-men-e1507069625654.jpg',
                        'http://sv1.upsieutoc.com/2018/05/18/njj.jpg',
                        'http://sv1.upsieutoc.com/2018/05/18/o.jpg',
                        'http://sv1.upsieutoc.com/2018/05/18/quiff-slicked-back.jpg',
                        'http://sv1.upsieutoc.com/2018/05/18/tt-Cristiano-Ronaldo.jpg',
                        'http://sv1.upsieutoc.com/2018/05/18/growlonghairmain2.jpg',
                        'http://sv1.upsieutoc.com/2018/05/18/1274927e06a36e9ca5aa55bb982af7fe--men-hair--medium--mens-hairstyles-medium.jpg'
                    ],
                    title : 'HOT TREND NAM'
                },
                {
                    background : 'http://sv1.upsieutoc.com/2018/05/18/4d7d0e5f56f8875b93c1b065bf7af46e.jpg',
                    images : [
                        'http://sv1.upsieutoc.com/2018/05/18/4d7d0e5f56f8875b93c1b065bf7af46e.jpg',
                        'http://sv1.upsieutoc.com/2018/05/18/16d2e4577f86d25fc6762a17b6381dc240055897.jpg',
                        'http://sv1.upsieutoc.com/2018/05/18/Black-Sleek-Banged-Bob.jpg',
                        'http://sv1.upsieutoc.com/2018/05/18/Brown-Layers.jpg',
                        'http://sv1.upsieutoc.com/2018/05/18/cap-nhat-xu-huong-xam-long-may-moi-nhat-2014-3.jpg',
                        'http://sv1.upsieutoc.com/2018/05/18/dakota-bangs.jpg',
                        'http://sv1.upsieutoc.com/2018/05/18/GettyImages-886809966.jpg',
                        'http://sv1.upsieutoc.com/2018/05/18/GettyImages-890309714.jpg',
                        'http://sv1.upsieutoc.com/2018/05/18/High-End-Blonde-Bun.jpg',
                        'http://sv1.upsieutoc.com/2018/05/18/Hottest-Hair-Color-Trends-2016-for-Women-52.jpg',
                        'http://sv1.upsieutoc.com/2018/05/18/image_560103171334047622501.jpg',
                        'http://sv1.upsieutoc.com/2018/05/18/large_dce72bfc-99ab-49cb-9e7d-fc39569ef43f.jpg',
                        'http://sv1.upsieutoc.com/2018/05/18/Loose-Hair-with-Puffy-Crown-and-Intense-Curls.jpg',
                        'http://sv1.upsieutoc.com/2018/05/18/Messy-Curly-Ponytail-with-Puff-and-Side-Bangs.jpg',
                        'http://sv1.upsieutoc.com/2018/05/18/Soft-Waves.jpg',
                        'http://sv1.upsieutoc.com/2018/05/18/Spiral-Curled-Tousled-Bob.jpg',
                        'http://sv1.upsieutoc.com/2018/05/18/tori.jpg',
                        'http://sv1.upsieutoc.com/2018/05/18/zendaya.jpg'
                    ],
                    title : 'ALBUM HOT TREND NU'
                },
                {
                    background : 'http://sv1.upsieutoc.com/2018/05/18/2018hair-sweep1.jpg',
                    images : [
                        'http://sv1.upsieutoc.com/2018/05/18/2018hair-parting.jpg',
                        'http://sv1.upsieutoc.com/2018/05/18/2018hair-sweep1.jpg',
                        'http://sv1.upsieutoc.com/2018/05/18/asdasdsd.jpg',
                        'http://sv1.upsieutoc.com/2018/05/18/asdsdd.jpg',
                        'http://sv1.upsieutoc.com/2018/05/18/braidbarbers-heavy-crop-haircuts-for-thick-hair-men.jpg',
                        'http://sv1.upsieutoc.com/2018/05/18/dddds.jpg',
                        'http://sv1.upsieutoc.com/2018/05/18/dddsaaw.jpg',
                        'http://sv1.upsieutoc.com/2018/05/18/ddsdsdsd.jpg',
                        'http://sv1.upsieutoc.com/2018/05/18/ddsdss.jpg',
                        'http://sv1.upsieutoc.com/2018/05/18/dsdasdasd.jpg',
                        'http://sv1.upsieutoc.com/2018/05/18/dsdsdsd.jpg',
                        'http://sv1.upsieutoc.com/2018/05/18/fringecut-768x768.jpg',
                        'http://sv1.upsieutoc.com/2018/05/18/sdsdssd.jpg'
                    ],
                    title : 'ALBUM THU ĐÔNG NAM'
                },
                {
                    background : 'http://sv1.upsieutoc.com/2018/05/18/kieu-toc-thu-dong9.jpg',
                    images : [
                        'http://sv1.upsieutoc.com/2018/05/18/kieu-toc-thu-don13.jpg',
                        'http://sv1.upsieutoc.com/2018/05/18/kieu-toc-thu-dong3.jpg',
                        'http://sv1.upsieutoc.com/2018/05/18/kieu-toc-thu-dong5.jpg',
                        'http://sv1.upsieutoc.com/2018/05/18/kieu-toc-thu-dong7.jpg',
                        'http://sv1.upsieutoc.com/2018/05/18/kieu-toc-thu-dong9.jpg',
                        'http://sv1.upsieutoc.com/2018/05/18/xu-huong-toc-nu-dep-cho-nam-2018-1.jpg',
                        'http://sv1.upsieutoc.com/2018/05/18/xu-huong-toc-nu-dep-cho-nam-2018-1.png',
                        'http://sv1.upsieutoc.com/2018/05/18/xu-huong-toc-nu-dep-cho-nam-2018-4.jpg',
                        'http://sv1.upsieutoc.com/2018/05/18/xu-huong-toc-nu-dep-cho-nam-2018-13.jpg',
                        'http://sv1.upsieutoc.com/2018/05/18/toc-6.jpg',
                        'http://sv1.upsieutoc.com/2018/05/18/t16.jpg'
                    ],
                    title : 'ALBUM THU ĐÔNG NỮ'
                },
                {
                    background : 'http://sv1.upsieutoc.com/2018/05/18/kieu-toc-tre-trung-cho-phu-nu-u407-2018-04-18-16-51_0_0.jpg',
                    images : [
                        'http://sv1.upsieutoc.com/2018/05/18/kieu-toc-tre-trung-cho-phu-nu-u401-2018-04-18-16-50_0_0.jpg',
                        'http://sv1.upsieutoc.com/2018/05/18/kieu-toc-tre-trung-cho-phu-nu-u403-2018-04-18-16-50_0_0.jpg',
                        'http://sv1.upsieutoc.com/2018/05/18/kieu-toc-tre-trung-cho-phu-nu-u404-2018-04-18-16-49_0_0.jpg',
                        'http://sv1.upsieutoc.com/2018/05/18/kieu-toc-tre-trung-cho-phu-nu-u407-2018-04-18-16-51_0_0.jpg',
                        'http://sv1.upsieutoc.com/2018/05/18/kieu-toc-tre-trung-cho-phu-nu-u408-2018-04-18-16-51_0_0.jpg',
                        'http://sv1.upsieutoc.com/2018/05/18/kieu-toc-tre-trung-cho-phu-nu-u409-2018-04-18-16-52_0_0.jpg',
                        'http://sv1.upsieutoc.com/2018/05/18/kieu-toc-tre-trung-cho-phu-nu-u4011-2018-04-18-16-52_0_0.jpg',
                        'http://sv1.upsieutoc.com/2018/05/18/kieu-toc-tre-trung-cho-phu-nu-u4012-2018-04-18-16-52_0_0.jpg',
                        'http://sv1.upsieutoc.com/2018/05/18/xu-huong-toc-nu-dep-cho-nam-2018.jpg',
                        'http://sv1.upsieutoc.com/2018/05/18/xu-huong-toc-nu-dep-cho-nam-2018-2.jpg',
                        'http://sv1.upsieutoc.com/2018/05/18/xu-huong-toc-nu-dep-cho-nam-2018-3.jpg',
                        'http://sv1.upsieutoc.com/2018/05/18/xu-huong-toc-nu-dep-cho-nam-2018-5.jpg',
                        'http://sv1.upsieutoc.com/2018/05/18/xu-huong-toc-nu-dep-cho-nam-2018-6.jpg',
                        'http://sv1.upsieutoc.com/2018/05/18/xu-huong-toc-nu-dep-cho-nam-2018-11.jpg'
                    ],
                    title : 'ALBUM XUÂN HẠ NỮ'
                },
                {
                    background : 'http://sv1.upsieutoc.com/2018/05/18/sadasd.jpg',
                    images : [
                        'http://sv1.upsieutoc.com/2018/05/18/alan_beak-side-part-haircut-hairstyles-for-men-fade-e1515452308977.jpg',
                        'http://sv1.upsieutoc.com/2018/05/18/alevirgilio_short-mens-haircuts.jpg',
                        'http://sv1.upsieutoc.com/2018/05/18/ambarberia_long-hair-Undercut-men-hipster-beard.jpg',
                        'http://sv1.upsieutoc.com/2018/05/18/andrewdoeshair-medium-mens-haircut-with-slicked-back-flow.jpg',
                        'http://sv1.upsieutoc.com/2018/05/18/asdsad.jpg',
                        'http://sv1.upsieutoc.com/2018/05/18/baldysbarbers-hairstyles-for-asian-men-medium-length-messy-fade-e1519926124350.jpg',
                        'http://sv1.upsieutoc.com/2018/05/18/braidbarbers-messy-spikes-new-hairstyles-for-men-2018-1.jpg',
                        'http://sv1.upsieutoc.com/2018/05/18/db.dillblack-low-fade-spiky-faux-hawk-summer-2016.jpg',
                        'http://sv1.upsieutoc.com/2018/05/18/jamie_barberdoo-crop-fade-haircut-thick-hair-short-mens-haircuts-e1511984248163.jpg',
                        'http://sv1.upsieutoc.com/2018/05/18/jaysfades-summer-hair-trends-for-men-2016-e1463092025890.jpg',
                        'http://sv1.upsieutoc.com/2018/05/18/nicholas_the_greek_Fadedwave-undercut-taper-fade-e1463092940531.jpg',
                        'http://sv1.upsieutoc.com/2018/05/18/odyzzeuz-pomp-skin-fade-lineup.jpg',
                        'http://sv1.upsieutoc.com/2018/05/18/rhysgreen-combover-razor-part-low-fadejpg.jpg',
                        'http://sv1.upsieutoc.com/2018/05/18/sadasd.jpg',
                        'http://sv1.upsieutoc.com/2018/05/18/tombaxter_hair-high-fade-haircut-spikes-2018.jpg'
                    ],
                    title : 'ALBUM XUÂN HẠ NAM'
                },
                {
                    background : 'http://sv1.upsieutoc.com/2018/05/16/high-tight-slick2.jpg',
                    images : [
                        'http://sv1.upsieutoc.com/2018/05/16/high-tight-military2.jpg',
                        'http://sv1.upsieutoc.com/2018/05/16/high-tight-military3.jpg',
                        'http://sv1.upsieutoc.com/2018/05/16/high-tight-military4.jpg',
                        'http://sv1.upsieutoc.com/2018/05/16/high-tight-slick1.jpg',
                        'http://sv1.upsieutoc.com/2018/05/16/high-tight-slick2.jpg',
                        'http://sv1.upsieutoc.com/2018/05/16/high-tight-slick3.jpg',
                        'http://sv1.upsieutoc.com/2018/05/16/high-tight-slick4.jpg'
                    ],
                    title : 'XU HƯỚNG NAM 2018'
                },
                {
                    background : 'http://sv1.upsieutoc.com/2018/05/16/cap-nhat-3-xu-huong-toc-duoc-yeu-thich-nhat-nam-nay6-2018-05-07-17-18_0_0.jpg',
                    images : [
                        'http://sv1.upsieutoc.com/2018/05/16/cap-nhat-3-xu-huong-toc-duoc-yeu-thich-nhat-nam-nay1-2018-05-07-17-18_0_0.jpg',
                        'http://sv1.upsieutoc.com/2018/05/16/cap-nhat-3-xu-huong-toc-duoc-yeu-thich-nhat-nam-nay2-2018-05-07-17-18_0_0.jpg',
                        'http://sv1.upsieutoc.com/2018/05/16/cap-nhat-3-xu-huong-toc-duoc-yeu-thich-nhat-nam-nay3-2018-05-07-17-18_0_0.jpg',
                        'http://sv1.upsieutoc.com/2018/05/16/cap-nhat-3-xu-huong-toc-duoc-yeu-thich-nhat-nam-nay4-2018-05-07-17-18_0_0.jpg',
                        'http://sv1.upsieutoc.com/2018/05/16/cap-nhat-3-xu-huong-toc-duoc-yeu-thich-nhat-nam-nay6-2018-05-07-17-18_0_0.jpg',
                        'http://sv1.upsieutoc.com/2018/05/16/cap-nhat-3-xu-huong-toc-duoc-yeu-thich-nhat-nam-nay9-2018-05-07-17-19_0_0.jpg',
                        'http://sv1.upsieutoc.com/2018/05/16/cap-nhat-3-xu-huong-toc-duoc-yeu-thich-nhat-nam-nay10-2018-05-07-17-20_0_0.jpg',
                        'http://sv1.upsieutoc.com/2018/05/16/cap-nhat-3-xu-huong-toc-duoc-yeu-thich-nhat-nam-nay11-2018-05-07-17-20_1_0_0.jpg',
                        'http://sv1.upsieutoc.com/2018/05/16/gettyimages-528407082.jpg',
                        'http://sv1.upsieutoc.com/2018/05/16/gettyimages-656509726.jpg',
                        'http://sv1.upsieutoc.com/2018/05/16/katy-perry-1525968414.jpg',
                        'http://sv1.upsieutoc.com/2018/05/16/kim-kardashian-1513201865.jpg',
                        'http://sv1.upsieutoc.com/2018/05/16/selena-gomez-1513201864.jpg',
                        'http://sv1.upsieutoc.com/2018/05/16/summer-2017-hairstyle-trend-1.jpg',
                        'http://sv1.upsieutoc.com/2018/05/16/summer-2017-hairstyle-trend-2.jpg',
                        'http://sv1.upsieutoc.com/2018/05/16/summer-2017-hairstyle-trend-6.jpg'
                    ],
                    title : 'XU HƯỚNG NỮ 2018'
                }
            ],
            men : [
                {
                    background : 'http://sv1.upsieutoc.com/2018/05/22/10-5.jpg',
                    images : [
                        'http://sv1.upsieutoc.com/2018/05/22/1a1a3247d8064ed489a4845e6b4c5a1f-e1485904085408.jpg',
                        'http://sv1.upsieutoc.com/2018/05/22/4-9.jpg',
                        'http://sv1.upsieutoc.com/2018/05/22/10-5.jpg',
                        'http://sv1.upsieutoc.com/2018/05/22/11-3.jpg',
                        'http://sv1.upsieutoc.com/2018/05/22/12976385_515135172025591_594690019_n.jpg',
                        'http://sv1.upsieutoc.com/2018/05/22/brushed-up-mens-crew-cut-500x625.jpg',
                        'http://sv1.upsieutoc.com/2018/05/22/c.jpg',
                        'http://sv1.upsieutoc.com/2018/05/22/Crew-Cut-Hair.jpg',
                        'http://sv1.upsieutoc.com/2018/05/22/crew-cut-hairstyle.jpg',
                        'http://sv1.upsieutoc.com/2018/05/22/crew-cut-hairstyle-for-men.jpg',
                        'http://sv1.upsieutoc.com/2018/05/22/crew-cuts-for-men-50-min-e1454844886375.jpg',
                        'http://sv1.upsieutoc.com/2018/05/22/Crew-Cut-Styles.jpg',
                        'http://sv1.upsieutoc.com/2018/05/22/download-1.jpg',
                        'http://sv1.upsieutoc.com/2018/05/22/download-2.jpg',
                        'http://sv1.upsieutoc.com/2018/05/22/download.jpg',
                        'http://sv1.upsieutoc.com/2018/05/22/M_Mar_BestHairstyles2016_CrewCut_700x400.jpg',
                        'http://sv1.upsieutoc.com/2018/05/22/The-Blonde-Crew-Cut-hairstyle.jpg'
                    ],
                    title : 'CREW'
                },
                {
                    background : 'http://sv1.upsieutoc.com/2018/05/22/download-5.jpg',
                    images : [
                        'http://sv1.upsieutoc.com/2018/05/22/a21.jpg',
                        'http://sv1.upsieutoc.com/2018/05/22/a22.jpg',
                        'http://sv1.upsieutoc.com/2018/05/22/aleksandrvasilyev_-short-haircut-for-thick-hair-mens-hair-trends-2017.jpg',
                        'http://sv1.upsieutoc.com/2018/05/22/barber_djirlauw-scissor-cut-short-sides-long-hair-on-top.jpg',
                        'http://sv1.upsieutoc.com/2018/05/22/download-15b522d8e2ec72864.jpg',
                        'http://sv1.upsieutoc.com/2018/05/22/download-2ce28a17023da5532.jpg',
                        'http://sv1.upsieutoc.com/2018/05/22/download-3.jpg',
                        'http://sv1.upsieutoc.com/2018/05/22/download-4.jpg',
                        'http://sv1.upsieutoc.com/2018/05/22/download-5.jpg',
                        'http://sv1.upsieutoc.com/2018/05/22/download4b27d83fb1e19864.jpg',
                        'http://sv1.upsieutoc.com/2018/05/22/images-111aef256cb5c8953.jpg',
                        'http://sv1.upsieutoc.com/2018/05/22/images-2.jpg',
                        'http://sv1.upsieutoc.com/2018/05/22/images-3.jpg',
                        'http://sv1.upsieutoc.com/2018/05/22/images-4.jpg',
                        'http://sv1.upsieutoc.com/2018/05/22/images-5.jpg',
                        'http://sv1.upsieutoc.com/2018/05/22/images.jpg',
                        'http://sv1.upsieutoc.com/2018/05/22/jarredsbarbers-teenage-haircuts-for-boys-heavy-crop-mid-bald-fade-e1507069653125.jpg',
                        'http://sv1.upsieutoc.com/2018/05/22/kieu-toc-nam-Textured-crop-3.jpg',
                        'http://sv1.upsieutoc.com/2018/05/22/lianos_urban_cutz-crop-haircut-hard-part.jpg',
                        'http://sv1.upsieutoc.com/2018/05/22/mikeyyyyyyy_-short-crop-haircut.jpg',
                        'http://sv1.upsieutoc.com/2018/05/22/NOMAD-BARBER-BLN-mens-hair-trends-2017-short-crop-with-beard.jpg',
                        'http://sv1.upsieutoc.com/2018/05/22/vinsenthebarber-thick-angled-crop-new-hairstyles-for-men.jpg',
                        'http://sv1.upsieutoc.com/2018/05/22/travisanthonyhair-ivy-league-haircut-short-thick-hair-high-fade.jpg',
                        'http://sv1.upsieutoc.com/2018/05/22/z_ramsey-choppy-fringe-textured-crop-layered-short-haircut-for-men-e1507067007886.jpg'
                    ],
                    title : 'CROP'
                },
                {
                    background : 'http://sv1.upsieutoc.com/2018/05/22/image0083.jpg',
                    images : [
                        'http://sv1.upsieutoc.com/2018/05/22/1-2-1.jpg',
                        'http://sv1.upsieutoc.com/2018/05/22/11-7.jpg',
                        'http://sv1.upsieutoc.com/2018/05/22/2011-Mens-Hairstyle-Brit-rock-Indie-Haircut.jpg',
                        'http://sv1.upsieutoc.com/2018/05/22/20141201-022834-indie-2_520x725.jpg',
                        'http://sv1.upsieutoc.com/2018/05/22/image0083.jpg',
                        'http://sv1.upsieutoc.com/2018/05/22/image0114.jpg',
                        'http://sv1.upsieutoc.com/2018/05/22/toc-indie-bien-tau.jpg',
                        'http://sv1.upsieutoc.com/2018/05/22/toc-indie-cho-nam.jpg',
                        'http://sv1.upsieutoc.com/2018/05/22/toc-nam-tia-so-le-dep-thu-hut-phai-dep.jpg'
                    ],
                    title : 'INDIE'
                },
                {
                    background : 'http://sv1.upsieutoc.com/2018/05/22/6-6.jpg',
                    images : [
                        'http://sv1.upsieutoc.com/2018/05/22/1-5.jpg',
                        'http://sv1.upsieutoc.com/2018/05/22/2-6.jpg',
                        'http://sv1.upsieutoc.com/2018/05/22/4-6.jpg',
                        'http://sv1.upsieutoc.com/2018/05/22/5-6.jpg',
                        'http://sv1.upsieutoc.com/2018/05/22/6-6.jpg',
                        'http://sv1.upsieutoc.com/2018/05/22/7-5.jpg',
                        'http://sv1.upsieutoc.com/2018/05/22/9-e1513721694432.png',
                        'http://sv1.upsieutoc.com/2018/05/22/12-3.jpg',
                        'http://sv1.upsieutoc.com/2018/05/22/13-2.jpg',
                        'http://sv1.upsieutoc.com/2018/05/22/15-1024x682.jpg',
                        'http://sv1.upsieutoc.com/2018/05/22/17.jpg',
                        'http://sv1.upsieutoc.com/2018/05/22/14-2.jpg',
                        'http://sv1.upsieutoc.com/2018/05/22/a27.jpg',
                        'http://sv1.upsieutoc.com/2018/05/22/16.jpg',
                        'http://sv1.upsieutoc.com/2018/05/22/cs-mai-lech.jpg',
                        'http://sv1.upsieutoc.com/2018/05/22/18.jpg',
                        'http://sv1.upsieutoc.com/2018/05/22/u30-middle-part.jpg',
                        'http://sv1.upsieutoc.com/2018/05/22/a28.jpg',
                    ],
                    title : 'KIỂU MÁI ĐÔI'
                },
                {
                    background : 'http://sv1.upsieutoc.com/2018/05/22/45a839dad9de5bf532e508354542b1d6.jpg',
                    images : [
                        'http://sv1.upsieutoc.com/2018/05/22/45a839dad9de5bf532e508354542b1d6.jpg',
                        'http://sv1.upsieutoc.com/2018/05/22/a8.jpg',
                        'http://sv1.upsieutoc.com/2018/05/22/Classic-Pompadour-1.jpg',
                        'http://sv1.upsieutoc.com/2018/05/22/Classic-Pompadour-3.jpg',
                        'http://sv1.upsieutoc.com/2018/05/22/classy-professional-pompadour-haircut-men.jpg',
                        'http://sv1.upsieutoc.com/2018/05/22/cs-pom.jpg',
                        'http://sv1.upsieutoc.com/2018/05/22/david-beckham-slick-pompadour-hairstyle.jpg',
                        'http://sv1.upsieutoc.com/2018/05/22/downloadd63b73ee0b19e402.jpg',
                        'http://sv1.upsieutoc.com/2018/05/22/f6bd54cbbb3bb96c00d5f1679a510b3a.jpg',
                        'http://sv1.upsieutoc.com/2018/05/22/mannys-combover-pompadour-hairstyle-for-men.jpg',
                        'http://sv1.upsieutoc.com/2018/05/22/Modern-Pompadour-Hairstyle-with-Low-Skin-Fade-and-Beard.jpg',
                        'http://sv1.upsieutoc.com/2018/05/22/Pompadour-Haircut.jpg',
                        'http://sv1.upsieutoc.com/2018/05/22/pompadour-hairstyle-for-men-pompadour-haircut-for-men-50-masculine-hairstyles-ideas.jpg',
                        'http://sv1.upsieutoc.com/2018/05/22/travisanthonyhair-messy-pomp-hair-trends-for-men-2017-hipster-fade-e1507137807981.jpg',
                        'http://sv1.upsieutoc.com/2018/05/22/u30-pom-undercut-1.jpg'
                    ],
                    title : 'POMPADOUR'
                },
                {
                    background : 'http://sv1.upsieutoc.com/2018/05/22/a10.jp',
                    images : [
                        'http://sv1.upsieutoc.com/2018/05/22/8-9-802x1024.jpg',
                        'http://sv1.upsieutoc.com/2018/05/22/6-8.jpg',
                        'http://sv1.upsieutoc.com/2018/05/22/a9.jpg',
                        'http://sv1.upsieutoc.com/2018/05/22/10-9.jpg',
                        'http://sv1.upsieutoc.com/2018/05/22/a16.jpg',
                        'http://sv1.upsieutoc.com/2018/05/22/a10.jpg',
                        'http://sv1.upsieutoc.com/2018/05/22/cs-quiff.jpg',
                        'http://sv1.upsieutoc.com/2018/05/22/asdsad.jpg',
                        'http://sv1.upsieutoc.com/2018/05/22/mens-short-hairstyles-quiff-short-mens-hairstyles-of-2014-new-beauty-short-hairstyles.jpg',
                        'http://sv1.upsieutoc.com/2018/05/22/cs-quiff-1.jpg',
                        'http://sv1.upsieutoc.com/2018/05/22/quiff-dai.jpg',
                        'http://sv1.upsieutoc.com/2018/05/22/quiff-3-7.jpg',
                        'http://sv1.upsieutoc.com/2018/05/22/quiff-faded.jpg',
                        'http://sv1.upsieutoc.com/2018/05/22/quiff-hien-dai.jpg',
                        'http://sv1.upsieutoc.com/2018/05/22/quiff-medium.jpg',
                        'http://sv1.upsieutoc.com/2018/05/22/quiff-messy.jpg',
                        'http://sv1.upsieutoc.com/2018/05/22/quiff-sided-part.jpg',
                        'http://sv1.upsieutoc.com/2018/05/22/quiff-side-swept.jpg',
                        'http://sv1.upsieutoc.com/2018/05/22/quiff-textured.jpg',
                        'http://sv1.upsieutoc.com/2018/05/22/quiff-wavy.jpg'
                    ],
                    title : 'QUIFF'
                },
                {
                    background : 'http://sv1.upsieutoc.com/2018/05/22/12-3a13d9de0e60e2ea9.jpg',
                    images : [
                        'http://sv1.upsieutoc.com/2018/05/22/2-4.jpg',
                        'http://sv1.upsieutoc.com/2018/05/22/3-4.jpg',
                        'http://sv1.upsieutoc.com/2018/05/22/4-3.jpg',
                        'http://sv1.upsieutoc.com/2018/05/22/5-2.jpg',
                        'http://sv1.upsieutoc.com/2018/05/22/6-3.jpg',
                        'http://sv1.upsieutoc.com/2018/05/22/7-3.jpg',
                        'http://sv1.upsieutoc.com/2018/05/22/8-3.jpg',
                        'http://sv1.upsieutoc.com/2018/05/22/12-3a13d9de0e60e2ea9.jpg',
                        'http://sv1.upsieutoc.com/2018/05/22/13-3.jpg',
                        'http://sv1.upsieutoc.com/2018/05/22/a14.jpg',
                        'http://sv1.upsieutoc.com/2018/05/22/a13.jpg',
                        'http://sv1.upsieutoc.com/2018/05/22/a15-bo-sung.jpg',
                        'http://sv1.upsieutoc.com/2018/05/22/a15.jpg',
                        'http://sv1.upsieutoc.com/2018/05/22/adasdss.jpg',
                        'http://sv1.upsieutoc.com/2018/05/22/adaaww.jpg',
                        'http://sv1.upsieutoc.com/2018/05/22/cs-side-part-co-dien.jpg',
                        'http://sv1.upsieutoc.com/2018/05/22/asdasd.jpg',
                        'http://sv1.upsieutoc.com/2018/05/22/gdmn_uk-stylish-haircuts-for-men-side-part.jpg',
                        'http://sv1.upsieutoc.com/2018/05/22/cs-side-part-hien-dai.jpg',
                        'http://sv1.upsieutoc.com/2018/05/22/slimfadey__-stylish-haircuts-for-men-side-part-fringe-medium-length.jpg',
                        'http://sv1.upsieutoc.com/2018/05/22/ppreshaw-slick-side-part-hairstyle-for-men.jpg'
                    ],
                    title : 'SIDE PART'
                },
                {
                    background : 'http://sv1.upsieutoc.com/2018/05/22/tt-Cristiano-Ronaldo-2.jpg',
                    images : [
                        'http://sv1.upsieutoc.com/2018/05/22/as-tattoo.jpg',
                        'http://sv1.upsieutoc.com/2018/05/22/tt-Arturo-Vidal.jpg',
                        'http://sv1.upsieutoc.com/2018/05/22/tt-Arturo-Vidal-1.jpg',
                        'http://sv1.upsieutoc.com/2018/05/22/tt-Cristiano-Ronaldo-1.jpg',
                        'http://sv1.upsieutoc.com/2018/05/22/tt-Cristiano-Ronaldo-2.jpg',
                        'http://sv1.upsieutoc.com/2018/05/22/tt-Cristiano-Ronaldo-3.jpg',
                        'http://sv1.upsieutoc.com/2018/05/22/tt-Ivan-Perisic.jpg',
                        'http://sv1.upsieutoc.com/2018/05/22/tt-Ivan-Perisic-1.jpg',
                        'http://sv1.upsieutoc.com/2018/05/22/tt-Nani.jpg',
                        'http://sv1.upsieutoc.com/2018/05/22/tt-Paul-Pogba.jpg',
                        'http://sv1.upsieutoc.com/2018/05/22/tt-Paul-Pogba-1.jpg',
                        'http://sv1.upsieutoc.com/2018/05/22/tt-Paul-Pogba-2.jpg',
                        'http://sv1.upsieutoc.com/2018/05/22/tt-Paul-Pogba-3.jpg',
                        'http://sv1.upsieutoc.com/2018/05/22/tt-Ramsey-1024x689.jpg',
                        'http://sv1.upsieutoc.com/2018/05/22/tt-RICARDO-QUARESMA.jpg',
                        'http://sv1.upsieutoc.com/2018/05/22/tt-Stephan-El-Shaarawy.jpg'
                    ],
                    title : 'TATOO'
                },
                {
                    background : 'http://sv1.upsieutoc.com/2018/05/22/AlexPettyferButlerPremieresLAPart5ibcht0O6w9Jl.jpg',
                    images : [
                        'http://sv1.upsieutoc.com/2018/05/22/2-8-1024x682.jpg',
                        'http://sv1.upsieutoc.com/2018/05/22/7edb61bc9dd839f909b59460c1225221.jpg',
                        'http://sv1.upsieutoc.com/2018/05/22/9-8.jpg',
                        'http://sv1.upsieutoc.com/2018/05/22/525baa3bafe772b8e5c95f675d968660.jpg',
                        'http://sv1.upsieutoc.com/2018/05/22/AlexPettyferButlerPremieresLAPart5ibcht0O6w9Jl.jpg',
                        'http://sv1.upsieutoc.com/2018/05/22/comb_over_haircuts_32.jpg',
                        'http://sv1.upsieutoc.com/2018/05/22/comb-over-hairstyles-for-men-2013-1.jpg',
                        'http://sv1.upsieutoc.com/2018/05/22/High-Razor-Fade-Short-Comb-Over-Thick-Beard.jpg',
                        'http://sv1.upsieutoc.com/2018/05/22/Long-Comb-Over.jpg',
                        'http://sv1.upsieutoc.com/2018/05/22/maxresdefault-1.jpg',
                        'http://sv1.upsieutoc.com/2018/05/22/maxresdefault-2.jpg',
                        'http://sv1.upsieutoc.com/2018/05/22/Men-Fashion-Haircut-also-David-Beckham-Side-Comb-Hair.jpg',
                        'http://sv1.upsieutoc.com/2018/05/22/New-Model-with-morrismotley-and-short-side-longer-hair-on-top-hairstyle-for-men-834x1024.jpg',
                        'http://sv1.upsieutoc.com/2018/05/22/nickduzhair-stylish-haircuts-for-mens-side-part-comb-over-fade-e1503590685958.jpg'

                    ],
                    title : 'THE COMB'
                },
                {
                    background : 'http://sv1.upsieutoc.com/2018/05/22/a3.jpg',
                    images : [
                        'http://sv1.upsieutoc.com/2018/05/22/6-2.jpg',
                        'http://sv1.upsieutoc.com/2018/05/22/5-1.jpg',
                        'http://sv1.upsieutoc.com/2018/05/22/33065940795_4b063f3b28.jpg',
                        'http://sv1.upsieutoc.com/2018/05/22/32939312361_9bcbb41e72.jpg',
                        'http://sv1.upsieutoc.com/2018/05/22/a3.jpg',
                        'http://sv1.upsieutoc.com/2018/05/22/a1-1024x695.jpg',
                        'http://sv1.upsieutoc.com/2018/05/22/a5.jpg',
                        'http://sv1.upsieutoc.com/2018/05/22/a4-1024x860.jpg',
                        'http://sv1.upsieutoc.com/2018/05/22/a25.jpg',
                        'http://sv1.upsieutoc.com/2018/05/22/a6.jpg',
                        'http://sv1.upsieutoc.com/2018/05/22/angel_raws-high-bald-fade-and-curly-hair-haircut-for-men.jpg',
                        'http://sv1.upsieutoc.com/2018/05/22/a26.jpg',
                        'http://sv1.upsieutoc.com/2018/05/22/as-spiky-1-1024x710.jpg',
                        'http://sv1.upsieutoc.com/2018/05/22/asdsdsd.jpg',
                        'http://sv1.upsieutoc.com/2018/05/22/as-undercut-mohawk.jpg',
                        'http://sv1.upsieutoc.com/2018/05/22/as-spiky-1024x576.jpg',
                        'http://sv1.upsieutoc.com/2018/05/22/as-undercut-quiff-1.jpg',
                        'http://sv1.upsieutoc.com/2018/05/22/as-Undercut-Quiff.jpg',
                        'http://sv1.upsieutoc.com/2018/05/22/barber_djirlauw-cool-slicked-back-mens-hairstyle.jpg',
                        'http://sv1.upsieutoc.com/2018/05/22/asym-undercut-696x385.jpg',
                        'http://sv1.upsieutoc.com/2018/05/22/cullencharlie17-sweep-back-taper-haircut-mens-hair-2017-e1503591079358.jpg',
                        'http://sv1.upsieutoc.com/2018/05/22/barberdeano-neckline-hair-design-reverse-fade-messy-textured-top-mens-hair-2018.jpg',
                        'http://sv1.upsieutoc.com/2018/05/22/download-16b9560c695fa8efa.jpg',
                        'http://sv1.upsieutoc.com/2018/05/22/cuttyfresh-short-haircuts-for-men-temple-fade-buzz-haircut.jpg',
                        'http://sv1.upsieutoc.com/2018/05/22/fraser_hardgrind_and-texture-and-long-fringe-haircut-men-2017-new.jpg',
                        'http://sv1.upsieutoc.com/2018/05/22/download3cea82d2af2bd90f.jpg',
                        'http://sv1.upsieutoc.com/2018/05/22/javi_thebarber_-thick-textured-hairstyle-for-men.jpg',
                        'http://sv1.upsieutoc.com/2018/05/22/gioi-thieu-ve-kieu-toc-undercut-quiff-3.jpg',
                        'http://sv1.upsieutoc.com/2018/05/22/mensworldherkappers-long-messy-textured-spiky-haircut.jpg',
                        'http://sv1.upsieutoc.com/2018/05/22/melissatoft86-mens-undercut-hairstyle.jpg',
                        'http://sv1.upsieutoc.com/2018/05/22/quiff-undercut-noo.jpg',
                        'http://sv1.upsieutoc.com/2018/05/22/quiff-spiky.jpg',
                        'http://sv1.upsieutoc.com/2018/05/22/r.braid-natural-look-mens-haircut.jpg',
                        'http://sv1.upsieutoc.com/2018/05/22/r.braid-long-hair-undercut.jpg',
                        'http://sv1.upsieutoc.com/2018/05/22/serahdoeshairahh-undercut-hair-for-men-2017-2018-merman-hair-color-electric-blue-green.jpg',
                        'http://sv1.upsieutoc.com/2018/05/22/russ_thebarber-dry-sweep-back-high-fade-cool-haircuts-for-men.jpg',
                        'http://sv1.upsieutoc.com/2018/05/22/swisshairbyzainal-very-high-fade-medium-mens-haircut.jpg',
                        'http://sv1.upsieutoc.com/2018/05/22/tombaxter_hair-short-spiky-mens-haircut-2017.jpg',
                        'http://sv1.upsieutoc.com/2018/05/22/slimfadey__-high-fade-spiky-hair-fohawk-fauxhawk-asian-hair-men.jpg',
                        'http://sv1.upsieutoc.com/2018/05/22/undercut-Asymertrical-800x552.x95389.jpg',
                        'http://sv1.upsieutoc.com/2018/05/22/tombaxter_hair_-cool-textured-quiff-haircut-for-men.jpg',
                        'http://sv1.upsieutoc.com/2018/05/22/virogas.barber-medium-mens-haircut.jpg',
                        'http://sv1.upsieutoc.com/2018/05/22/u30-Quiff-undercut.jpg',
                        'http://sv1.upsieutoc.com/2018/05/22/undercut-ngan-800x600.x95389.jpg',


                    ],
                    title : 'THE UNDERCUT'
                }
            ],
            women : [
                {
                    background : 'http://sv1.upsieutoc.com/2018/05/22/Blonde-Short-Bob.jpg',
                    images : [
                        'http://sv1.upsieutoc.com/2018/05/22/Blonde-Hairdo-with-Finely-Chopped-Bangs.jpg',
                        'http://sv1.upsieutoc.com/2018/05/22/Blonde-Fringed-Braid.jpg',
                        'http://sv1.upsieutoc.com/2018/05/22/Blonde-Short-Bob.jpg',
                        'http://sv1.upsieutoc.com/2018/05/22/Blonde-Messy-Braid.jpg',
                        'http://sv1.upsieutoc.com/2018/05/22/Blonde-Twin-Braid.jpg',
                        'http://sv1.upsieutoc.com/2018/05/22/Blonde-Subtly-Textured-Tousled-Edges.jpg',
                        'http://sv1.upsieutoc.com/2018/05/22/gettyimages-57006365.jpg',
                        'http://sv1.upsieutoc.com/2018/05/22/Chopped-Blonde-Steppes.jpg',
                        'http://sv1.upsieutoc.com/2018/05/22/Pinned-Up-Ruffles.jpg',
                        'http://sv1.upsieutoc.com/2018/05/22/Pinned-Up-Bob.jpg'
                    ],
                    title : 'BLONDE'
                },
                {
                    background : 'http://sv1.upsieutoc.com/2018/05/22/Stylish-Layers.jpg',
                    images : [
                        'http://sv1.upsieutoc.com/2018/05/22/A-Line-Inverted-Stacked-Bob.jpg',
                        'http://sv1.upsieutoc.com/2018/05/22/Asymmetric-Bob-with-Sleek-Side-Swept-Bang.jpg',
                        'http://sv1.upsieutoc.com/2018/05/22/Angled-Face-Contouring-Bob.jpg',
                        'http://sv1.upsieutoc.com/2018/05/22/Blunt-Wavy-bob-with-Center-Part.jpg',
                        'http://sv1.upsieutoc.com/2018/05/22/Blunt-Tousled-Bob.jpg',
                        'http://sv1.upsieutoc.com/2018/05/22/Boyish-looking-Bob.jpg',
                        'http://sv1.upsieutoc.com/2018/05/22/Bob-with-Long-Bangs-and-Wispy-Points.jpg',
                        'http://sv1.upsieutoc.com/2018/05/22/Edgy-Platinum-Bob.jpg',
                        'http://sv1.upsieutoc.com/2018/05/22/Edgy-Tousled-Bob.jpg',
                        'http://sv1.upsieutoc.com/2018/05/22/Fine-fork-like-Bangs-with-Curly-Bob.jpg',
                        'http://sv1.upsieutoc.com/2018/05/22/Fringe-Bob.jpg',
                        'http://sv1.upsieutoc.com/2018/05/22/Fringed-Layered-Bob-with-Razored-Ends.jpg',
                        'http://sv1.upsieutoc.com/2018/05/22/Front-Side-Bun-with-Added-Texture.jpg',
                        'http://sv1.upsieutoc.com/2018/05/22/Inverted-Layered-Bob-with-Curly-Bangs-and-Ends.jpg',
                        'http://sv1.upsieutoc.com/2018/05/22/Layered-Bob-with-Feathered-Side-Bang.jpg',
                        'http://sv1.upsieutoc.com/2018/05/22/Long-Inverted-Bob-with-Curly-Ends.jpg',
                        'http://sv1.upsieutoc.com/2018/05/22/Medium-Length-Wavy-Bob-with-Side-Twist.jpg',
                        'http://sv1.upsieutoc.com/2018/05/22/Middle-Parted-Relaxed-Bob-with-Side-Sweeps.jpg',
                        'http://sv1.upsieutoc.com/2018/05/22/Neat-Tucked-Away-Bob.jpg',
                        'http://sv1.upsieutoc.com/2018/05/22/Oval-Shaped-Bob.jpg',
                        'http://sv1.upsieutoc.com/2018/05/22/Relaxed-Bob-with-Layered-Bangs.jpg',
                        'http://sv1.upsieutoc.com/2018/05/22/Retro-Bob-with-Tucked-In-Textured-Curls.jpg',
                        'http://sv1.upsieutoc.com/2018/05/22/Retro-Side-Hairdo-with-Texture.jpg',
                        'http://sv1.upsieutoc.com/2018/05/22/Round-Bob-with-Front-Bang.jpg',
                        'http://sv1.upsieutoc.com/2018/05/22/Shoulder-Grazing-Messy-Bob.jpg',
                        'http://sv1.upsieutoc.com/2018/05/22/Shoulder-Length-Bob-with-Side-Bang.jpg',
                        'http://sv1.upsieutoc.com/2018/05/22/Side-Banged-Bob.jpg',
                        'http://sv1.upsieutoc.com/2018/05/22/Side-Swept-Short-Bob.jpg',
                        'http://sv1.upsieutoc.com/2018/05/22/Simple-Bob-with-Wavy-Bang.jpg',
                        'http://sv1.upsieutoc.com/2018/05/22/Smart-Short-Bob-with-Choppy-Ends.jpg',
                        'http://sv1.upsieutoc.com/2018/05/22/Smart-Short-Bob-with-Long-Side-Swept-Bang.jpg',
                        'http://sv1.upsieutoc.com/2018/05/22/Smooth-Bob-with-Curly-Textured-Ends.jpg',
                        'http://sv1.upsieutoc.com/2018/05/22/Smooth-Bob-with-Inward-and-Outward-Curves.jpg',
                        'http://sv1.upsieutoc.com/2018/05/22/Soft-Edged-Bob.jpg',
                        'http://sv1.upsieutoc.com/2018/05/22/Stylish-Layers.jpg',
                        'http://sv1.upsieutoc.com/2018/05/22/Sweet-and-Adorable-Chinese-Bob.jpg',
                        'http://sv1.upsieutoc.com/2018/05/22/The-Black-A-line-Bob-with-a-Side-Part.jpg',
                        'http://sv1.upsieutoc.com/2018/05/22/Thick-Layered-Bob-with-Short-Side-Bang.jpg'
                    ],
                    title : 'BOB'
                },
                {
                    background : 'http://sv1.upsieutoc.com/2018/05/22/Long-Flair-Braid.jpg',
                    images : [
                        'http://sv1.upsieutoc.com/2018/05/22/Braided-Bun.jpg',
                        'http://sv1.upsieutoc.com/2018/05/22/Braid-in-Weave.jpg',
                        'http://sv1.upsieutoc.com/2018/05/22/Braid-with-a-Puff.jpg',
                        'http://sv1.upsieutoc.com/2018/05/22/Braid-with-Open-Hair.jpg',
                        'http://sv1.upsieutoc.com/2018/05/22/Frivolous-Front-Bangs-with-Sleek-Braid.jpg',
                        'http://sv1.upsieutoc.com/2018/05/22/hair-ideas-1521045857.jpg',
                        'http://sv1.upsieutoc.com/2018/05/22/Highlighted-French-Braid.jpg',
                        'http://sv1.upsieutoc.com/2018/05/22/Long-Flair-Braid.jpg',
                        'http://sv1.upsieutoc.com/2018/05/22/Long-Ponytail-Braid.jpg',
                        'http://sv1.upsieutoc.com/2018/05/22/Mohawk-Braid.jpg',
                        'http://sv1.upsieutoc.com/2018/05/22/Side-Long-Braid.jpg',
                        'http://sv1.upsieutoc.com/2018/05/22/Side-Swept-Highlighted-Hairdo.jpg',
                        'http://sv1.upsieutoc.com/2018/05/22/Simple-Braid.jpg',
                        'http://sv1.upsieutoc.com/2018/05/22/Trendy-Braid.jpg',
                        'http://sv1.upsieutoc.com/2018/05/22/zoe-saldana-hair-1521045858.jpg'
                    ],
                    title : 'BRAID'
                },
                {
                    background : 'http://sv1.upsieutoc.com/2018/05/22/Medium-Base-Knotted-Bun.jpg',
                    images : [
                        'http://sv1.upsieutoc.com/2018/05/22/High-Bun-with-Twisted-Hair-Wrap-and-Graduated-Side-Bang.jpg',
                        'http://sv1.upsieutoc.com/2018/05/22/Layered-Bangs-Tousled-Bun.jpg',
                        'http://sv1.upsieutoc.com/2018/05/22/Medium-Base-Knotted-Bun.jpg',
                        'http://sv1.upsieutoc.com/2018/05/22/Ombre-Pulled-Back-Bun.jpg',
                        'http://sv1.upsieutoc.com/2018/05/22/Semi-High-Angled-Bun-with-Messy-Finish.jpg',
                        'http://sv1.upsieutoc.com/2018/05/22/Sexy-Low-Bun-with-Side-Sweep.jpg',
                        'http://sv1.upsieutoc.com/2018/05/22/Silky-Semi-High-Bun-with-Puffy-Top.jpg',
                        'http://sv1.upsieutoc.com/2018/05/22/Simple-and-Elegant-Twisted-Topknot.jpg',
                        'http://sv1.upsieutoc.com/2018/05/22/The-Small-Braid-Bun.jpg'
                    ],
                    title : 'BUN'
                },
                {
                    background : 'http://sv1.upsieutoc.com/2018/05/22/0ce352957dea76009043a9c13f0d3ddb.jpg',
                    images : [
                        'http://sv1.upsieutoc.com/2018/05/22/0ce352957dea76009043a9c13f0d3ddb.jpg',
                        'http://sv1.upsieutoc.com/2018/05/22/01f47cdec967b1f4a5699f0aa67093e9.jpg',
                        'http://sv1.upsieutoc.com/2018/05/22/4f5296b09c332efa84bf1f82392f67ab.jpg',
                        'http://sv1.upsieutoc.com/2018/05/22/Beyonce-Knowles-Long-Curly-Hairstyles.jpg',
                        'http://sv1.upsieutoc.com/2018/05/22/Big-Voluminous-Curls.jpg',
                        'http://sv1.upsieutoc.com/2018/05/22/bob-cuts-for-curly-hair-hairstyle-fod0ba-women-man-with-regard-to-the-most-beautiful-curly-hairstyles-women.jpg',
                        'http://sv1.upsieutoc.com/2018/05/22/black-women-natural-hair-wigs-pt6gbhl7jtepdqji-1.jpg',
                        'http://sv1.upsieutoc.com/2018/05/22/download94fc4ff15e41aafa.jpg',
                        'http://sv1.upsieutoc.com/2018/05/22/Cute-Hair-with-Fringes-End-Curls-and-Headband.jpg',
                        'http://sv1.upsieutoc.com/2018/05/22/fa8129f60f66f7324a3917e140f360d7.jpg',
                        'http://sv1.upsieutoc.com/2018/05/22/f8768071efe0e9c5327e5d793f244283.jpg',
                        'http://sv1.upsieutoc.com/2018/05/22/keirsay-clemons-hair-1521045861.jpg',
                        'http://sv1.upsieutoc.com/2018/05/22/gettyimages-468333956.jpg',
                        'http://sv1.upsieutoc.com/2018/05/22/Long-Side-Curls.jpg',
                        'http://sv1.upsieutoc.com/2018/05/22/Layered-Curls.jpg',
                        'http://sv1.upsieutoc.com/2018/05/22/Luscious-Curls-with-Puffy-Crown.jpg',
                        'http://sv1.upsieutoc.com/2018/05/22/Long-Side-Swept-Bangs.jpg',
                        'http://sv1.upsieutoc.com/2018/05/22/Simple-Hairdo-with-Curly-Ends-and-Side-Bang.jpg',
                        'http://sv1.upsieutoc.com/2018/05/22/Scrunching.jpg',
                        'http://sv1.upsieutoc.com/2018/05/22/Super-Curly-Layered-Bob-with-Ultimate-Volume.jpg',
                        'http://sv1.upsieutoc.com/2018/05/22/Soft-Highlighted-Curls-with-Side-Part.jpg',
                    ],
                    title : 'CURLY'
                },
                {
                    background : 'http://sv1.upsieutoc.com/2018/05/22/Medium-Messy-Bob-with-Short-Sides.jpg',
                    images : [
                        'http://sv1.upsieutoc.com/2018/05/22/Elegant-Messy-Updo-with-Side-Bangs.jpg',
                        'http://sv1.upsieutoc.com/2018/05/22/Medium-Messy-Bob-with-Short-Sides.jpg',
                        'http://sv1.upsieutoc.com/2018/05/22/Messy-Bob-with-Curly-Bangs-and-Textured-Waves.jpg',
                        'http://sv1.upsieutoc.com/2018/05/22/Messy-Half-up-Half-Down.jpg',
                        'http://sv1.upsieutoc.com/2018/05/22/Messy-High-Bun-with-Flat-Tight-Top.jpg',
                        'http://sv1.upsieutoc.com/2018/05/22/Messy-High-Ponytails.jpg',
                        'http://sv1.upsieutoc.com/2018/05/22/Messy-High-Ponytail-with-Teased-Top.jpg',
                        'http://sv1.upsieutoc.com/2018/05/22/Messy-Low-Chignon.jpg',
                        'http://sv1.upsieutoc.com/2018/05/22/Messy-Short-Bob-with-Side-Swept-Fringes.jpg',
                        'http://sv1.upsieutoc.com/2018/05/22/Messy-Side.jpg',
                        'http://sv1.upsieutoc.com/2018/05/22/Messy-Small-Bun.jpg',
                        'http://sv1.upsieutoc.com/2018/05/22/Messy-Textured-Bob-with-Curved-Bang.jpg',
                        'http://sv1.upsieutoc.com/2018/05/22/Messy-Updo-with-Free-Curly-Ends.jpg',
                        'http://sv1.upsieutoc.com/2018/05/22/Messy-Wavy-Ponytail-with-Texture.jpg',
                        'http://sv1.upsieutoc.com/2018/05/22/The-Messy-Jagged-Style.jpg',
                    ],
                    title : 'MESSY'
                },
                {
                    background : 'http://sv1.upsieutoc.com/2018/05/22/1bbeb73bb83cf4954b30a6e91a0be830.jpg',
                    images : [
                        'http://sv1.upsieutoc.com/2018/05/22/1bbeb73bb83cf4954b30a6e91a0be830.jpg',
                        'http://sv1.upsieutoc.com/2018/05/22/6d7a4907c0a201021ca1a33b2259f60e--side-braid-ponytail-side-braids.jpg',
                        'http://sv1.upsieutoc.com/2018/05/22/18c7e97afeaee9623abab393ff889db4--long-ponytail-hairstyles-cute-bob-hairstyles.jpg',
                        'http://sv1.upsieutoc.com/2018/05/22/25-pretty-easy-messy-ponytail-hairstyles-you-can-try-1-11.jpg',
                        'http://sv1.upsieutoc.com/2018/05/22/11771--pinterest-the-most-beautiful-ponytails-article_media_block-1.jpg',
                        'http://sv1.upsieutoc.com/2018/05/22/beautiful-hairstyles-for-women-2014-lowside-ponytail.jpg',
                        'http://sv1.upsieutoc.com/2018/05/22/db52bb4a1a5eab34291dab42d4e9bea2.jpg',
                        'http://sv1.upsieutoc.com/2018/05/22/Essential-Ponytail.jpg',
                        'http://sv1.upsieutoc.com/2018/05/22/Fringe-Ponytail.jpg',
                        'http://sv1.upsieutoc.com/2018/05/22/gettyimages-168777252.jpg',
                        'http://sv1.upsieutoc.com/2018/05/22/Headband-Ponytail.jpg',
                        'http://sv1.upsieutoc.com/2018/05/22/High-Long-Ponytail-with-Hair-Wrap.jpg',
                        'http://sv1.upsieutoc.com/2018/05/22/High-Looped-Ponytail-with-Hair-Wrap.jpg',
                        'http://sv1.upsieutoc.com/2018/05/22/Loose-Low-Ponytail-with-Casual-Side-Bang.jpg',
                        'http://sv1.upsieutoc.com/2018/05/22/messy-ponytail-hairstyle-2.jpg',
                        'http://sv1.upsieutoc.com/2018/05/22/Thick-Banged-Ponytail.jpg',
                        'http://sv1.upsieutoc.com/2018/05/22/top-8-hairstyles-for-medium-wavy-hair-styles-at-life-for-the-most-elegant-along-with-beautiful-poofy-ponytail-hairstyles-pertaining-to-your-property.jpg'
                    ],
                    title : 'PONY TAIL'
                },
                {
                    background : 'http://sv1.upsieutoc.com/2018/05/22/Short-and-Sleek.jpg',
                    images : [
                        'http://sv1.upsieutoc.com/2018/05/22/emma-stone-hair-1521045856.jpg',
                        'http://sv1.upsieutoc.com/2018/05/22/Ruffled-Headband.jpg',
                        'http://sv1.upsieutoc.com/2018/05/22/Ruffled-Pixie.jpg',
                        'http://sv1.upsieutoc.com/2018/05/22/Sexy-Pixie.jpg',
                        'http://sv1.upsieutoc.com/2018/05/22/Short-and-Sleek.jpg',
                        'http://sv1.upsieutoc.com/2018/05/22/Short-Blunt-Bob-with-Straight-Fringes.jpg',
                        'http://sv1.upsieutoc.com/2018/05/22/Short-Curly-Textured-Bob.jpg',
                        'http://sv1.upsieutoc.com/2018/05/22/Short-Layered-Shaggy-Bob.jpg',
                        'http://sv1.upsieutoc.com/2018/05/22/Short-Slicked-Back-Bob-with-Volumized-Top.jpg',
                        'http://sv1.upsieutoc.com/2018/05/22/Short-Slicked-Back-Textured-Bob.jpg',
                        'http://sv1.upsieutoc.com/2018/05/22/The-Edgy-Ombre-Pixie.jpg',
                        'http://sv1.upsieutoc.com/2018/05/22/The-Ruffled-Banged-Pixie.jpg',
                        'http://sv1.upsieutoc.com/2018/05/22/Tucked-Away.jpg',
                        'http://sv1.upsieutoc.com/2018/05/22/Very-Short-Brunette-Ear-Length-Bob.jpg',
                        'http://sv1.upsieutoc.com/2018/05/22/Very-Short-Stacked-Bob-with-Messy-Finish.jpg',
                        'http://sv1.upsieutoc.com/2018/05/22/Very-Short-Textured-and-Curtained-Hair.jpg'
                    ],
                    title : 'SHORT'
                },
                {
                    background : 'http://sv1.upsieutoc.com/2018/05/22/Sleek-Long-Blunt.jpg',
                    images : [
                        'http://sv1.upsieutoc.com/2018/05/22/Backcombed-Sleek-Waves-with-Fine-Bangs.jpg',
                        'http://sv1.upsieutoc.com/2018/05/22/Long-Sleek-Pixie.jpg',
                        'http://sv1.upsieutoc.com/2018/05/22/Sleek-and-Smooth-High-Bun-with-Side-Sweep.jpg',
                        'http://sv1.upsieutoc.com/2018/05/22/Sleek-blonde-Layers.jpg',
                        'http://sv1.upsieutoc.com/2018/05/22/Sleek-Blunt.jpg',
                        'http://sv1.upsieutoc.com/2018/05/22/Sleek-Detail.jpg',
                        'http://sv1.upsieutoc.com/2018/05/22/Sleek-Face-Contouring-Bob-with-Side-Bang.jpg',
                        'http://sv1.upsieutoc.com/2018/05/22/Sleek-Fine-Layers.jpg',
                        'http://sv1.upsieutoc.com/2018/05/22/Sleek-Half-Up.jpg',
                        'http://sv1.upsieutoc.com/2018/05/22/Sleek-High-Bun-with-Side-Sweep.jpg',
                        'http://sv1.upsieutoc.com/2018/05/22/Sleek-Long-Blunt.jpg',
                        'http://sv1.upsieutoc.com/2018/05/22/Sleek-Long-Ponytail.jpg',
                        'http://sv1.upsieutoc.com/2018/05/22/Sleek-Long-Tresses-in-Dual-layers.jpg',
                        'http://sv1.upsieutoc.com/2018/05/22/Sleek-Ponytail-with-Beautiful-Front-Fringes.jpg',
                        'http://sv1.upsieutoc.com/2018/05/22/Sleek-purple-Tinge.jpg',
                        'http://sv1.upsieutoc.com/2018/05/22/Sleek-Side-Ponytail.jpg',
                        'http://sv1.upsieutoc.com/2018/05/22/Sleek-Straight-and-Long-Layers.jpg',
                        'http://sv1.upsieutoc.com/2018/05/22/The-Sleek-Taylor-Cut.jpg',
                        'http://sv1.upsieutoc.com/2018/05/22/Trimmed-Sleek-layered-Edges.jpg',
                        'http://sv1.upsieutoc.com/2018/05/22/zendaya-hair-1521045859.jpg'
                    ],
                    title : 'SLEEK'
                },
                {
                    background : 'http://sv1.upsieutoc.com/2018/05/22/images-137705052258cffc2.jpg',
                    images : [
                        'http://sv1.upsieutoc.com/2018/05/22/Black-Straight.jpg',
                        'http://sv1.upsieutoc.com/2018/05/22/Braided-Staight-Side-Parted-Blond-Hairstyle.jpg',
                        'http://sv1.upsieutoc.com/2018/05/22/casual-straight-hairstyle.jpg',
                        'http://sv1.upsieutoc.com/2018/05/22/download-1358d8dc169759d33.jpg',
                        'http://sv1.upsieutoc.com/2018/05/22/daa11b41197b272e913a1de0ab5cf389.jpg',
                        'http://sv1.upsieutoc.com/2018/05/22/e3b669b9af3345af7d6d11f502b94890.jpg',
                        'http://sv1.upsieutoc.com/2018/05/22/images-137705052258cffc2.jpg',
                        'http://sv1.upsieutoc.com/2018/05/22/downloadc283b8d84caffd7f.jpg',
                        'http://sv1.upsieutoc.com/2018/05/22/Layered-Inward-Feathered-Hair-with-Side-Bang.jpg',
                        'http://sv1.upsieutoc.com/2018/05/22/Long-Ombre-Evenly-Trimmed-with-Fringes.jpg',
                        'http://sv1.upsieutoc.com/2018/05/22/f6a8f054e9f29919274bef20d7f8ee9d.png',
                        'http://sv1.upsieutoc.com/2018/05/22/Loose-Straight-Layers-with-Side-Bangs.jpg',
                        'http://sv1.upsieutoc.com/2018/05/22/long-hairstyles-for-women-over-40-with-bangs.jpg',
                        'http://sv1.upsieutoc.com/2018/05/22/Short-Trimmed-Fringe.jpg',
                        'http://sv1.upsieutoc.com/2018/05/22/Long-Straight-Layered-Hair-with-Fringes.jpg',
                        'http://sv1.upsieutoc.com/2018/05/22/Straight-Fringes-and-Layers.jpg',
                        'http://sv1.upsieutoc.com/2018/05/22/Medium-Length-Hairstyles-For-Round-Faces.jpg',
                        'http://sv1.upsieutoc.com/2018/05/22/Straight-Shoulder-Length-Bob.jpg',
                        'http://sv1.upsieutoc.com/2018/05/22/Straight-and-Tousled.jpg',
                        'http://sv1.upsieutoc.com/2018/05/22/Straight-High-Ponytail-with-Puffy-Top.jpg'
                    ],
                    title : 'STRAIGHT'
                },
                {
                    background : 'http://sv1.upsieutoc.com/2018/05/22/Long-Tousled-and-Curled-Layers.jpg',
                    images : [
                        'http://sv1.upsieutoc.com/2018/05/22/Bouncy-Tousled-Waves-with-Side-Swept-Bangs.jpg',
                        'http://sv1.upsieutoc.com/2018/05/22/Casual-Tousled-Bangs.jpg',
                        'http://sv1.upsieutoc.com/2018/05/22/Brunette-Tousled-Hair.jpg',
                        'http://sv1.upsieutoc.com/2018/05/22/Dark-Brown-Highlighted-Tousled-Hair.jpg',
                        'http://sv1.upsieutoc.com/2018/05/22/Dry-Tousled-Waves.jpg',
                        'http://sv1.upsieutoc.com/2018/05/22/Long-Tousled-and-Curled-Layers.jpg',
                        'http://sv1.upsieutoc.com/2018/05/22/Long-Tousled-Pixie.jpg',
                        'http://sv1.upsieutoc.com/2018/05/22/Long-Tousled-Side-Part.jpg',
                        'http://sv1.upsieutoc.com/2018/05/22/Mid-Part-Ombre.jpg',
                        'http://sv1.upsieutoc.com/2018/05/22/Simple-Blonde-Medium-Tousled-Bob.jpg',
                        'http://sv1.upsieutoc.com/2018/05/22/Simple-Tousled-Ponytails.jpg',
                        'http://sv1.upsieutoc.com/2018/05/22/Soft-Tousled-Side-Waves-with-Side-Swept-Bangs.jpg',
                        'http://sv1.upsieutoc.com/2018/05/22/Subtle-Tousled-Waves.jpg',
                        'http://sv1.upsieutoc.com/2018/05/22/Subtly-Layered-Tousled-Edges.jpg',
                        'http://sv1.upsieutoc.com/2018/05/22/Subtly-Tousled-Long-Waves.jpg',
                        'http://sv1.upsieutoc.com/2018/05/22/Subtly-Tousled-Waves-with-Curled-Edges.jpg',
                        'http://sv1.upsieutoc.com/2018/05/22/The-Shiny-Bob-with-Tousled-Curls.jpg',
                        'http://sv1.upsieutoc.com/2018/05/22/The-Subtle-Tousled-Waves.jpg',
                        'http://sv1.upsieutoc.com/2018/05/22/The-Vintage-Cut.jpg',
                        'http://sv1.upsieutoc.com/2018/05/22/Tousled-Dark-Brown-Wavy-Bob.jpg',
                        'http://sv1.upsieutoc.com/2018/05/22/Tousled-Ombre-Long-Layers.jpg',
                        'http://sv1.upsieutoc.com/2018/05/22/Tousled-Soft-Waves-with-Fine-Bangs.jpg',
                        'http://sv1.upsieutoc.com/2018/05/22/Tousled-Wavy-Edges-with-Highlights.jpg'
                    ],
                    title : 'TOUSLED'
                },
            ]
        })
        
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.body}>
                    <TouchableOpacity onPress={() => this.uploadData()}>
                        <View style={styles.bodyCard}>
                            <Text style={styles.bodyCardContentText}>Thay đổi mật khẩu</Text>
                            <View style={styles.headerRightBtn}>
                                <Image style={{ width: 25, height: 25 }} source={require('../../assets/images/right_BLACK.png')} resizeMethod='resize' />
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.onLogOut()}>
                        <View style={styles.bodyCard}>
                            <Text style={styles.bodyCardContentText}>Đăng xuất</Text>
                            <View style={styles.headerRightBtn}>
                                <Image style={{ width: 25, height: 25 }} source={require('../../assets/images/right_BLACK.png')} resizeMethod='resize' />
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>
            </View >
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F0F5F6'
    },
    header: {
        paddingTop: 26,
        paddingBottom: 10,
        position: 'relative',
        height: 63,
        backgroundColor: '#2D9CDB'
    },

    headerTitle: {
        color: '#FFFFFF',
        fontFamily: 'Helvetica',
        fontSize: 16,
        textAlign: 'center',
        paddingTop: 5,
        fontWeight: 'bold'
    },
    headerLeftBtn: {
        position: 'absolute',
        left: 20,
        top: -3,
        width: 25,
        height: 25,
        zIndex: 3,
        alignItems: 'center',
    },
    headerRightBtn: {
        position: 'absolute',
        right: 10,
        justifyContent: 'center',
        width: 40,
        height: 40,
        zIndex: 3,
        alignItems: 'center',
    },
    body: {
        paddingVertical: 30,
    },
    bodyCard: {
        justifyContent: 'center',
        alignItems: 'flex-start',
        marginBottom: 3,
        padding: 15,
        backgroundColor: '#FFFFFF',
    },
    bodyCardTitle: {
        marginBottom: 15,
        fontSize: 14
    },
    bodyCardContentText: {
        color: '#000000',
        fontSize: 14
    },
})