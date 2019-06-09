import React, {Component} from 'react'
import {Alert, Image, StatusBar, StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import firebase from 'react-native-firebase'
import {connect} from "react-redux";
import * as AuthActions from "../../actions/AuthAction";
import {bindActionCreators} from "redux";

class SettingScreen extends Component {
  static navigationOptions = {
    header: (props) => (
      <View style={styles.header}>
        <View>
          <TouchableOpacity style={styles.headerLeftBtn} onPress={() => {
            props.navigation.goBack(null), StatusBar.setBarStyle('light-content');
          }}>
            <Image style={{width: 30, height: 30}} source={require('../../assets/images/Close_WHITE.png')}
                   resizeMethod='resize'/>
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

  logOut = () => {
    try {
      this.props.AuthActions.logout();
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
          onPress: () => {
          }
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
    //this.uploadData();
  }

  uploadData() {
    const database = firebase.database()
    database.ref(`images`).set({
      banner: [
        {
          background: "https://i.pinimg.com/originals/88/42/9b/88429b3b8011df5e6ae00d27d800fdff.jpg",
          images: [
            "https://i.pinimg.com/originals/88/42/9b/88429b3b8011df5e6ae00d27d800fdff.jpg",
            "https://i.pinimg.com/originals/88/42/9b/88429b3b8011df5e6ae00d27d800fdff.jpg",
            "https://i.pinimg.com/originals/88/42/9b/88429b3b8011df5e6ae00d27d800fdff.jpg",
            "https://i.pinimg.com/originals/88/42/9b/88429b3b8011df5e6ae00d27d800fdff.jpg",
            "https://i.pinimg.com/originals/88/42/9b/88429b3b8011df5e6ae00d27d800fdff.jpg",
            "https://i.pinimg.com/originals/88/42/9b/88429b3b8011df5e6ae00d27d800fdff.jpg",
            "https://i.pinimg.com/originals/88/42/9b/88429b3b8011df5e6ae00d27d800fdff.jpg",
            "https://i.pinimg.com/originals/88/42/9b/88429b3b8011df5e6ae00d27d800fdff.jpg",
            "https://i.pinimg.com/originals/88/42/9b/88429b3b8011df5e6ae00d27d800fdff.jpg",
            "https://i.pinimg.com/originals/88/42/9b/88429b3b8011df5e6ae00d27d800fdff.jpg"
          ],
          title: 'HOT TREND NAM'
        },
        {
          background: "https://content2.latest-hairstyles.com/wp-content/uploads/HH-A-featured.jpg",
          images: [
            "https://content2.latest-hairstyles.com/wp-content/uploads/HH-A-featured.jpg",
            "https://content2.latest-hairstyles.com/wp-content/uploads/HH-A-featured.jpg",
            "https://content2.latest-hairstyles.com/wp-content/uploads/HH-A-featured.jpg",
            "https://content2.latest-hairstyles.com/wp-content/uploads/HH-A-featured.jpg",
            "https://content2.latest-hairstyles.com/wp-content/uploads/HH-A-featured.jpg",
            "https://content2.latest-hairstyles.com/wp-content/uploads/HH-A-featured.jpg",
            "https://content2.latest-hairstyles.com/wp-content/uploads/HH-A-featured.jpg",
            "https://content2.latest-hairstyles.com/wp-content/uploads/HH-A-featured.jpg",
            "https://content2.latest-hairstyles.com/wp-content/uploads/HH-A-featured.jpg",
          ],
          title: 'ALBUM HOT TREND NU'
        },
        {
          background: "https://static3.fashionbeans.com/wp-content/uploads/2018/09/formal-attire-top-2.jpg",
          images: [
            "https://static3.fashionbeans.com/wp-content/uploads/2018/09/formal-attire-top-2.jpg",
            "https://static3.fashionbeans.com/wp-content/uploads/2018/09/formal-attire-top-2.jpg",
            "https://static3.fashionbeans.com/wp-content/uploads/2018/09/formal-attire-top-2.jpg",
            "https://static3.fashionbeans.com/wp-content/uploads/2018/09/formal-attire-top-2.jpg",
            "https://static3.fashionbeans.com/wp-content/uploads/2018/09/formal-attire-top-2.jpg",
            "https://static3.fashionbeans.com/wp-content/uploads/2018/09/formal-attire-top-2.jpg"
          ],
          title: 'ALBUM THU ĐÔNG NAM'
        },
        {
          background: "https://img4.thelist.com/img/gallery/the-most-dramatic-celeb-makeup-transformations/intro-1501253292.jpg",
          images: [
            "https://img4.thelist.com/img/gallery/the-most-dramatic-celeb-makeup-transformations/intro-1501253292.jpg",
            "https://img4.thelist.com/img/gallery/the-most-dramatic-celeb-makeup-transformations/intro-1501253292.jpg",
            "https://img4.thelist.com/img/gallery/the-most-dramatic-celeb-makeup-transformations/intro-1501253292.jpg",
            "https://img4.thelist.com/img/gallery/the-most-dramatic-celeb-makeup-transformations/intro-1501253292.jpg",
            "https://img4.thelist.com/img/gallery/the-most-dramatic-celeb-makeup-transformations/intro-1501253292.jpg"
          ],
          title: 'ALBUM THU ĐÔNG NỮ'
        },
        {
          background: "http://vernetwork.org/wp-content/uploads/2018/12/18-greatest-long-hairstyles-for-women-with-hair-in-2018-within-s-decor-8.jpg",
          images: [
            "http://vernetwork.org/wp-content/uploads/2018/12/18-greatest-long-hairstyles-for-women-with-hair-in-2018-within-s-decor-8.jpg",
            "http://vernetwork.org/wp-content/uploads/2018/12/18-greatest-long-hairstyles-for-women-with-hair-in-2018-within-s-decor-8.jpg",
            "http://vernetwork.org/wp-content/uploads/2018/12/18-greatest-long-hairstyles-for-women-with-hair-in-2018-within-s-decor-8.jpg",
            "http://vernetwork.org/wp-content/uploads/2018/12/18-greatest-long-hairstyles-for-women-with-hair-in-2018-within-s-decor-8.jpg"
          ],
          title: 'ALBUM XUÂN HẠ NỮ'
        },
        {
          background: "https://static1.fashionbeans.com/wp-content/uploads/2017/10/best-mens-medium-length-hairstyles2.jpg",
          images: [
            "https://static1.fashionbeans.com/wp-content/uploads/2017/10/best-mens-medium-length-hairstyles2.jpg",
            "https://static1.fashionbeans.com/wp-content/uploads/2017/10/best-mens-medium-length-hairstyles2.jpg",
            "https://static1.fashionbeans.com/wp-content/uploads/2017/10/best-mens-medium-length-hairstyles2.jpg",
            "https://static1.fashionbeans.com/wp-content/uploads/2017/10/best-mens-medium-length-hairstyles2.jpg",
            "https://static1.fashionbeans.com/wp-content/uploads/2017/10/best-mens-medium-length-hairstyles2.jpg",
            "https://static1.fashionbeans.com/wp-content/uploads/2017/10/best-mens-medium-length-hairstyles2.jpg"
          ],
          title: 'ALBUM XUÂN HẠ NAM'
        },
        {
          background: "https://content2.latest-hairstyles.com/wp-content/uploads/Casual-Thick-Hairstyle-for-Men-500x333.jpg",
          images: [
            "https://content2.latest-hairstyles.com/wp-content/uploads/Casual-Thick-Hairstyle-for-Men-500x333.jpg",
            "https://content2.latest-hairstyles.com/wp-content/uploads/Casual-Thick-Hairstyle-for-Men-500x333.jpg",
            "https://content2.latest-hairstyles.com/wp-content/uploads/Casual-Thick-Hairstyle-for-Men-500x333.jpg",
            "https://content2.latest-hairstyles.com/wp-content/uploads/Casual-Thick-Hairstyle-for-Men-500x333.jpg",
            "https://content2.latest-hairstyles.com/wp-content/uploads/Casual-Thick-Hairstyle-for-Men-500x333.jpg"
          ],
          title: 'XU HƯỚNG NAM 2018'
        },
        {
          background: "https://content.latest-hairstyles.com/wp-content/uploads/bob-haircuts.jpg",
          images: [
            "https://content.latest-hairstyles.com/wp-content/uploads/bob-haircuts.jpg",
            "https://content.latest-hairstyles.com/wp-content/uploads/bob-haircuts.jpg",
            "https://content.latest-hairstyles.com/wp-content/uploads/bob-haircuts.jpg",
            "https://content.latest-hairstyles.com/wp-content/uploads/bob-haircuts.jpg",
            "https://content.latest-hairstyles.com/wp-content/uploads/bob-haircuts.jpg",
            "https://content.latest-hairstyles.com/wp-content/uploads/bob-haircuts.jpg"
          ],
          title: 'XU HƯỚNG NỮ 2018'
        }
      ],
      men: [
        {
          background: "https://www.menshairstylestoday.com/wp-content/uploads/2019/02/Good-Haircut-Styles-For-Guys.jpg",
          images: [
            "https://i.pinimg.com/originals/b7/04/0d/b7040d931b997d18690a6027560f8867.jpg",
            "https://www.ukhairdressers.com/style/hairstyles/23293/Kinky%20Curly%20Straight-Short-Brown-straight-hairstyles.jpg",
            "https://hairstyleonpoint.com/wp-content/uploads/2016/05/Super-high-Pomp.jpg",
            "http://www.machovibes.com/wp-content/uploads/2018/03/Viral-Undercut-Hairstyles-with-Beard-26.jpg",
            "https://vickvanlian.com/wp-content/uploads/2019/04/cole-monahan-nicholas-inspiration-hair-beard-in-2019-long-along-with-hairstyles-magnificent-gallery-medium-length-mens-curly-970x1293.jpg",
            "https://exsecratus.com/wp-content/uploads/parser/semi-long-hairstyles-men-1.jpg",
            "https://i.pinimg.com/236x/29/25/13/29251353a7aee14c0a4a47cea7002d2b.jpg",
          ],
          title: 'CREW'
        },
        {
          background: "https://static1.fashionbeans.com/wp-content/uploads/2017/10/growlonghairmain2.jpg",
          images: [
            "https://i.pinimg.com/originals/b7/04/0d/b7040d931b997d18690a6027560f8867.jpg",
            "https://www.ukhairdressers.com/style/hairstyles/23293/Kinky%20Curly%20Straight-Short-Brown-straight-hairstyles.jpg",
            "https://hairstyleonpoint.com/wp-content/uploads/2016/05/Super-high-Pomp.jpg",
            "http://www.machovibes.com/wp-content/uploads/2018/03/Viral-Undercut-Hairstyles-with-Beard-26.jpg",
            "https://vickvanlian.com/wp-content/uploads/2019/04/cole-monahan-nicholas-inspiration-hair-beard-in-2019-long-along-with-hairstyles-magnificent-gallery-medium-length-mens-curly-970x1293.jpg",
            "https://exsecratus.com/wp-content/uploads/parser/semi-long-hairstyles-men-1.jpg",
            "https://i.pinimg.com/236x/29/25/13/29251353a7aee14c0a4a47cea7002d2b.jpg"
          ],
          title: 'CROP'
        },
        {
          background: "https://www.hottesthaircuts.com/wp-content/uploads/2018/01/Ponytail-Hairstyle-for-Men.jpg",
          images: [
            "https://i.pinimg.com/originals/b7/04/0d/b7040d931b997d18690a6027560f8867.jpg",
            "https://www.ukhairdressers.com/style/hairstyles/23293/Kinky%20Curly%20Straight-Short-Brown-straight-hairstyles.jpg",
            "https://hairstyleonpoint.com/wp-content/uploads/2016/05/Super-high-Pomp.jpg",
            "http://www.machovibes.com/wp-content/uploads/2018/03/Viral-Undercut-Hairstyles-with-Beard-26.jpg",
            "https://vickvanlian.com/wp-content/uploads/2019/04/cole-monahan-nicholas-inspiration-hair-beard-in-2019-long-along-with-hairstyles-magnificent-gallery-medium-length-mens-curly-970x1293.jpg",
            "https://exsecratus.com/wp-content/uploads/parser/semi-long-hairstyles-men-1.jpg",
            "https://i.pinimg.com/236x/29/25/13/29251353a7aee14c0a4a47cea7002d2b.jpg"
          ],
          title: 'INDIE'
        },
        {
          background: "https://www.tophairstyles2018.com/wp-content/uploads/2018/04/Mens-Long-Hairstyles-2018-35-1.jpg",
          images: [
            "https://i.pinimg.com/originals/b7/04/0d/b7040d931b997d18690a6027560f8867.jpg",
            "https://www.ukhairdressers.com/style/hairstyles/23293/Kinky%20Curly%20Straight-Short-Brown-straight-hairstyles.jpg",
            "https://hairstyleonpoint.com/wp-content/uploads/2016/05/Super-high-Pomp.jpg",
            "http://www.machovibes.com/wp-content/uploads/2018/03/Viral-Undercut-Hairstyles-with-Beard-26.jpg",
            "https://vickvanlian.com/wp-content/uploads/2019/04/cole-monahan-nicholas-inspiration-hair-beard-in-2019-long-along-with-hairstyles-magnificent-gallery-medium-length-mens-curly-970x1293.jpg",
            "https://exsecratus.com/wp-content/uploads/parser/semi-long-hairstyles-men-1.jpg",
            "https://i.pinimg.com/236x/29/25/13/29251353a7aee14c0a4a47cea7002d2b.jpg"
          ],
          title: 'KIỂU MÁI ĐÔI'
        },
        {
          background: "https://fashioninspire.net/wp-content/uploads/2017/08/fashionable-mens-haircuts-tousled-aspirations.jpg",
          images: [
            "https://i.pinimg.com/originals/b7/04/0d/b7040d931b997d18690a6027560f8867.jpg",
            "https://www.ukhairdressers.com/style/hairstyles/23293/Kinky%20Curly%20Straight-Short-Brown-straight-hairstyles.jpg",
            "https://hairstyleonpoint.com/wp-content/uploads/2016/05/Super-high-Pomp.jpg",
            "http://www.machovibes.com/wp-content/uploads/2018/03/Viral-Undercut-Hairstyles-with-Beard-26.jpg",
            "https://vickvanlian.com/wp-content/uploads/2019/04/cole-monahan-nicholas-inspiration-hair-beard-in-2019-long-along-with-hairstyles-magnificent-gallery-medium-length-mens-curly-970x1293.jpg",
            "https://exsecratus.com/wp-content/uploads/parser/semi-long-hairstyles-men-1.jpg",
            "https://i.pinimg.com/236x/29/25/13/29251353a7aee14c0a4a47cea7002d2b.jpg"
          ],
          title: 'POMPADOUR'
        },
        {
          background: "https://static1.fashionbeans.com/wp-content/uploads/2017/01/trickycolours11.jpg",
          images: [
            "https://i.pinimg.com/originals/b7/04/0d/b7040d931b997d18690a6027560f8867.jpg",
            "https://www.ukhairdressers.com/style/hairstyles/23293/Kinky%20Curly%20Straight-Short-Brown-straight-hairstyles.jpg",
            "https://hairstyleonpoint.com/wp-content/uploads/2016/05/Super-high-Pomp.jpg",
            "http://www.machovibes.com/wp-content/uploads/2018/03/Viral-Undercut-Hairstyles-with-Beard-26.jpg",
            "https://vickvanlian.com/wp-content/uploads/2019/04/cole-monahan-nicholas-inspiration-hair-beard-in-2019-long-along-with-hairstyles-magnificent-gallery-medium-length-mens-curly-970x1293.jpg",
            "https://exsecratus.com/wp-content/uploads/parser/semi-long-hairstyles-men-1.jpg",
            "https://i.pinimg.com/236x/29/25/13/29251353a7aee14c0a4a47cea7002d2b.jpg"
          ],
          title: 'QUIFF'
        },
        {
          background: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlf-E91jxUPZleGq6_CZz2rfz3YHTzcGKbf4LNgMN4aYZAoh1T",
          images: [
            "https://i.pinimg.com/originals/b7/04/0d/b7040d931b997d18690a6027560f8867.jpg",
            "https://www.ukhairdressers.com/style/hairstyles/23293/Kinky%20Curly%20Straight-Short-Brown-straight-hairstyles.jpg",
            "https://hairstyleonpoint.com/wp-content/uploads/2016/05/Super-high-Pomp.jpg",
            "http://www.machovibes.com/wp-content/uploads/2018/03/Viral-Undercut-Hairstyles-with-Beard-26.jpg",
            "https://vickvanlian.com/wp-content/uploads/2019/04/cole-monahan-nicholas-inspiration-hair-beard-in-2019-long-along-with-hairstyles-magnificent-gallery-medium-length-mens-curly-970x1293.jpg",
            "https://exsecratus.com/wp-content/uploads/parser/semi-long-hairstyles-men-1.jpg",
            "https://i.pinimg.com/236x/29/25/13/29251353a7aee14c0a4a47cea7002d2b.jpg"
          ],
          title: 'SIDE PART'
        },
        {
          background: "https://www.findhealthtips.com/wp-content/uploads/2018/05/Akshay-Kumar-handsome-men-world-2018.jpg",
          images: [
            "https://i.pinimg.com/originals/b7/04/0d/b7040d931b997d18690a6027560f8867.jpg",
            "https://www.ukhairdressers.com/style/hairstyles/23293/Kinky%20Curly%20Straight-Short-Brown-straight-hairstyles.jpg",
            "https://hairstyleonpoint.com/wp-content/uploads/2016/05/Super-high-Pomp.jpg",
            "http://www.machovibes.com/wp-content/uploads/2018/03/Viral-Undercut-Hairstyles-with-Beard-26.jpg",
            "https://vickvanlian.com/wp-content/uploads/2019/04/cole-monahan-nicholas-inspiration-hair-beard-in-2019-long-along-with-hairstyles-magnificent-gallery-medium-length-mens-curly-970x1293.jpg",
            "https://exsecratus.com/wp-content/uploads/parser/semi-long-hairstyles-men-1.jpg",
            "https://i.pinimg.com/236x/29/25/13/29251353a7aee14c0a4a47cea7002d2b.jpg"
          ],
          title: 'TATOO'
        },
        {
          background: "https://www.menshairstyletrends.com/wp-content/uploads/2016/03/modutch85_and_nayqueenoffades-cool-design-and-long-hair-undercut-mens-hairstyle.jpg",
          images: [
            "https://i.pinimg.com/originals/b7/04/0d/b7040d931b997d18690a6027560f8867.jpg",
            "https://www.ukhairdressers.com/style/hairstyles/23293/Kinky%20Curly%20Straight-Short-Brown-straight-hairstyles.jpg",
            "https://hairstyleonpoint.com/wp-content/uploads/2016/05/Super-high-Pomp.jpg",
            "http://www.machovibes.com/wp-content/uploads/2018/03/Viral-Undercut-Hairstyles-with-Beard-26.jpg",
            "https://vickvanlian.com/wp-content/uploads/2019/04/cole-monahan-nicholas-inspiration-hair-beard-in-2019-long-along-with-hairstyles-magnificent-gallery-medium-length-mens-curly-970x1293.jpg",
            "https://exsecratus.com/wp-content/uploads/parser/semi-long-hairstyles-men-1.jpg",
            "https://i.pinimg.com/236x/29/25/13/29251353a7aee14c0a4a47cea7002d2b.jpg"
          ],
          title: 'THE COMB'
        },
        {
          background: 'https://hairstylecamp.com/wp-content/uploads/mens-fade-undercut-13.jpg',
          images: [
            "https://i.pinimg.com/originals/b7/04/0d/b7040d931b997d18690a6027560f8867.jpg",
            "https://www.ukhairdressers.com/style/hairstyles/23293/Kinky%20Curly%20Straight-Short-Brown-straight-hairstyles.jpg",
            "https://hairstyleonpoint.com/wp-content/uploads/2016/05/Super-high-Pomp.jpg",
            "http://www.machovibes.com/wp-content/uploads/2018/03/Viral-Undercut-Hairstyles-with-Beard-26.jpg",
            "https://vickvanlian.com/wp-content/uploads/2019/04/cole-monahan-nicholas-inspiration-hair-beard-in-2019-long-along-with-hairstyles-magnificent-gallery-medium-length-mens-curly-970x1293.jpg",
            "https://exsecratus.com/wp-content/uploads/parser/semi-long-hairstyles-men-1.jpg",
            "https://i.pinimg.com/236x/29/25/13/29251353a7aee14c0a4a47cea7002d2b.jpg"
          ],
          title: 'THE UNDERCUT'
        }
      ],
      women: [
        {
          background: "https://lionesse.com/wp-content/uploads/hair.jpg",
          images: [
            "https://ae01.alicdn.com/kf/HTB1MejcqDJYBeNjy1zeq6yhzVXar/1PC-Ready-to-Wear-Updo-That-Can-be-Styled-in-a-Top-Knot-or-Low-Bun.jpg_q50.jpg",
            "https://www.hottesthaircuts.com/wp-content/uploads/2017/09/Side-Bun.jpg",
            "https://i.pinimg.com/736x/8b/b0/00/8bb0001044ea81f776c991c33efc8493.jpg",
            "https://www.rd.com/wp-content/uploads/2018/01/30_Tight_The-40-Best-Hairstyles-for-Women-Over-40_329920157_Miramiska.jpg",
            "https://orange-jlink.com/wp-content/uploads/2019/02/emma-stone-short-hairstyles-collection-best-of-emma-stone-blunt-finish-to-this-bob-heavier-side-fringe-softens-of-emma-stone-short-hairstyles-collection.jpg",
            "https://whereitstands.com/wp-content/uploads/2018/12/short-bob-haircuts-20-new-bob-hair-style-cute-bob-hair-page-new-hair-cut-women.jpg",
            "http://www.vusla.net/wp-content/uploads/2018/01/53.jpg",
            "https://i.pinimg.com/736x/6a/27/9e/6a279e0be17180fb960a0f6b549ad11e.jpg",
            "http://www.liveenhanced.com/wp-content/uploads/2018/02/Barely-There-Waves-Hair.jpg"
          ],
          title: 'BLONDE'
        },
        {
          background: "https://media.istockphoto.com/photos/happy-young-fashion-woman-in-leather-jacket-walking-in-city-street-picture-id873755234?k=6&m=873755234&s=612x612&w=0&h=R13A0wIXsyj6QrsSJBChb_7q3LYdRqW9qaKF13g6908=",
          images: [
            "https://ae01.alicdn.com/kf/HTB1MejcqDJYBeNjy1zeq6yhzVXar/1PC-Ready-to-Wear-Updo-That-Can-be-Styled-in-a-Top-Knot-or-Low-Bun.jpg_q50.jpg",
            "https://www.hottesthaircuts.com/wp-content/uploads/2017/09/Side-Bun.jpg",
            "https://i.pinimg.com/736x/8b/b0/00/8bb0001044ea81f776c991c33efc8493.jpg",
            "https://www.rd.com/wp-content/uploads/2018/01/30_Tight_The-40-Best-Hairstyles-for-Women-Over-40_329920157_Miramiska.jpg",
            "https://orange-jlink.com/wp-content/uploads/2019/02/emma-stone-short-hairstyles-collection-best-of-emma-stone-blunt-finish-to-this-bob-heavier-side-fringe-softens-of-emma-stone-short-hairstyles-collection.jpg",
            "https://whereitstands.com/wp-content/uploads/2018/12/short-bob-haircuts-20-new-bob-hair-style-cute-bob-hair-page-new-hair-cut-women.jpg",
            "http://www.vusla.net/wp-content/uploads/2018/01/53.jpg",
            "https://i.pinimg.com/736x/6a/27/9e/6a279e0be17180fb960a0f6b549ad11e.jpg",
            "http://www.liveenhanced.com/wp-content/uploads/2018/02/Barely-There-Waves-Hair.jpg"
          ],
          title: 'BOB'
        },
        {
          background: "http://spice4life.co.za/wp-content/uploads/2015/10/hair-loss-explained.jpg",
          images: [
            "https://ae01.alicdn.com/kf/HTB1MejcqDJYBeNjy1zeq6yhzVXar/1PC-Ready-to-Wear-Updo-That-Can-be-Styled-in-a-Top-Knot-or-Low-Bun.jpg_q50.jpg",
            "https://www.hottesthaircuts.com/wp-content/uploads/2017/09/Side-Bun.jpg",
            "https://i.pinimg.com/736x/8b/b0/00/8bb0001044ea81f776c991c33efc8493.jpg",
            "https://www.rd.com/wp-content/uploads/2018/01/30_Tight_The-40-Best-Hairstyles-for-Women-Over-40_329920157_Miramiska.jpg",
            "https://orange-jlink.com/wp-content/uploads/2019/02/emma-stone-short-hairstyles-collection-best-of-emma-stone-blunt-finish-to-this-bob-heavier-side-fringe-softens-of-emma-stone-short-hairstyles-collection.jpg",
            "https://whereitstands.com/wp-content/uploads/2018/12/short-bob-haircuts-20-new-bob-hair-style-cute-bob-hair-page-new-hair-cut-women.jpg",
            "http://www.vusla.net/wp-content/uploads/2018/01/53.jpg",
            "https://i.pinimg.com/736x/6a/27/9e/6a279e0be17180fb960a0f6b549ad11e.jpg",
            "http://www.liveenhanced.com/wp-content/uploads/2018/02/Barely-There-Waves-Hair.jpg"
          ],
          title: 'BRAID'
        },
        {
          background: "http://blog.blingstation.com/wp-content/uploads/2017/06/Top-Tips-For-Long-Hair.jpg",
          images: [
            "https://ae01.alicdn.com/kf/HTB1MejcqDJYBeNjy1zeq6yhzVXar/1PC-Ready-to-Wear-Updo-That-Can-be-Styled-in-a-Top-Knot-or-Low-Bun.jpg_q50.jpg",
            "https://www.hottesthaircuts.com/wp-content/uploads/2017/09/Side-Bun.jpg",
            "https://i.pinimg.com/736x/8b/b0/00/8bb0001044ea81f776c991c33efc8493.jpg",
            "https://www.rd.com/wp-content/uploads/2018/01/30_Tight_The-40-Best-Hairstyles-for-Women-Over-40_329920157_Miramiska.jpg",
            "https://orange-jlink.com/wp-content/uploads/2019/02/emma-stone-short-hairstyles-collection-best-of-emma-stone-blunt-finish-to-this-bob-heavier-side-fringe-softens-of-emma-stone-short-hairstyles-collection.jpg",
            "https://whereitstands.com/wp-content/uploads/2018/12/short-bob-haircuts-20-new-bob-hair-style-cute-bob-hair-page-new-hair-cut-women.jpg",
            "http://www.vusla.net/wp-content/uploads/2018/01/53.jpg",
            "https://i.pinimg.com/736x/6a/27/9e/6a279e0be17180fb960a0f6b549ad11e.jpg",
            "http://www.liveenhanced.com/wp-content/uploads/2018/02/Barely-There-Waves-Hair.jpg"
          ],
          title: 'BUN'
        },
        {
          background: "https://www.matrix.com/~/media/images/blogs/blog%20images0052the%2013%20best%20volumizing%20styling%20tips%20for%20fine%20thin%20hair.jpg",
          images: [
            "https://ae01.alicdn.com/kf/HTB1MejcqDJYBeNjy1zeq6yhzVXar/1PC-Ready-to-Wear-Updo-That-Can-be-Styled-in-a-Top-Knot-or-Low-Bun.jpg_q50.jpg",
            "https://www.hottesthaircuts.com/wp-content/uploads/2017/09/Side-Bun.jpg",
            "https://i.pinimg.com/736x/8b/b0/00/8bb0001044ea81f776c991c33efc8493.jpg",
            "https://www.rd.com/wp-content/uploads/2018/01/30_Tight_The-40-Best-Hairstyles-for-Women-Over-40_329920157_Miramiska.jpg",
            "https://orange-jlink.com/wp-content/uploads/2019/02/emma-stone-short-hairstyles-collection-best-of-emma-stone-blunt-finish-to-this-bob-heavier-side-fringe-softens-of-emma-stone-short-hairstyles-collection.jpg",
            "https://whereitstands.com/wp-content/uploads/2018/12/short-bob-haircuts-20-new-bob-hair-style-cute-bob-hair-page-new-hair-cut-women.jpg",
            "http://www.vusla.net/wp-content/uploads/2018/01/53.jpg",
            "https://i.pinimg.com/736x/6a/27/9e/6a279e0be17180fb960a0f6b549ad11e.jpg",
            "http://www.liveenhanced.com/wp-content/uploads/2018/02/Barely-There-Waves-Hair.jpg"
          ],
          title: 'CURLY'
        },
        {
          background: "https://cdn.shortpixel.ai/client/q_glossy,ret_img,w_965/https://arsengurgov.com/wp-content/uploads/2017/09/women-hair-style.jpg",
          images: [
            "https://ae01.alicdn.com/kf/HTB1MejcqDJYBeNjy1zeq6yhzVXar/1PC-Ready-to-Wear-Updo-That-Can-be-Styled-in-a-Top-Knot-or-Low-Bun.jpg_q50.jpg",
            "https://www.hottesthaircuts.com/wp-content/uploads/2017/09/Side-Bun.jpg",
            "https://i.pinimg.com/736x/8b/b0/00/8bb0001044ea81f776c991c33efc8493.jpg",
            "https://www.rd.com/wp-content/uploads/2018/01/30_Tight_The-40-Best-Hairstyles-for-Women-Over-40_329920157_Miramiska.jpg",
            "https://orange-jlink.com/wp-content/uploads/2019/02/emma-stone-short-hairstyles-collection-best-of-emma-stone-blunt-finish-to-this-bob-heavier-side-fringe-softens-of-emma-stone-short-hairstyles-collection.jpg",
            "https://whereitstands.com/wp-content/uploads/2018/12/short-bob-haircuts-20-new-bob-hair-style-cute-bob-hair-page-new-hair-cut-women.jpg",
            "http://www.vusla.net/wp-content/uploads/2018/01/53.jpg",
            "https://i.pinimg.com/736x/6a/27/9e/6a279e0be17180fb960a0f6b549ad11e.jpg",
            "http://www.liveenhanced.com/wp-content/uploads/2018/02/Barely-There-Waves-Hair.jpg"
          ],
          title: 'MESSY'
        },
        {
          background: "https://media.istockphoto.com/photos/beautiful-woman-with-makeup-picture-id513821098?k=6&m=513821098&s=612x612&w=0&h=lEAE2eURnQuti_G1rqJPYIlDUKkS2OuaSHfkF0NYTvU=",
          images: [
            "https://ae01.alicdn.com/kf/HTB1MejcqDJYBeNjy1zeq6yhzVXar/1PC-Ready-to-Wear-Updo-That-Can-be-Styled-in-a-Top-Knot-or-Low-Bun.jpg_q50.jpg",
            "https://www.hottesthaircuts.com/wp-content/uploads/2017/09/Side-Bun.jpg",
            "https://i.pinimg.com/736x/8b/b0/00/8bb0001044ea81f776c991c33efc8493.jpg",
            "https://www.rd.com/wp-content/uploads/2018/01/30_Tight_The-40-Best-Hairstyles-for-Women-Over-40_329920157_Miramiska.jpg",
            "https://orange-jlink.com/wp-content/uploads/2019/02/emma-stone-short-hairstyles-collection-best-of-emma-stone-blunt-finish-to-this-bob-heavier-side-fringe-softens-of-emma-stone-short-hairstyles-collection.jpg",
            "https://whereitstands.com/wp-content/uploads/2018/12/short-bob-haircuts-20-new-bob-hair-style-cute-bob-hair-page-new-hair-cut-women.jpg",
            "http://www.vusla.net/wp-content/uploads/2018/01/53.jpg",
            "https://i.pinimg.com/736x/6a/27/9e/6a279e0be17180fb960a0f6b549ad11e.jpg",
            "http://www.liveenhanced.com/wp-content/uploads/2018/02/Barely-There-Waves-Hair.jpg"
          ],
          title: 'PONY TAIL'
        },
        {
          background: "https://content.latest-hairstyles.com/wp-content/uploads/long-bob-haircuts.jpg",
          images: [
            "https://ae01.alicdn.com/kf/HTB1MejcqDJYBeNjy1zeq6yhzVXar/1PC-Ready-to-Wear-Updo-That-Can-be-Styled-in-a-Top-Knot-or-Low-Bun.jpg_q50.jpg",
            "https://www.hottesthaircuts.com/wp-content/uploads/2017/09/Side-Bun.jpg",
            "https://i.pinimg.com/736x/8b/b0/00/8bb0001044ea81f776c991c33efc8493.jpg",
            "https://www.rd.com/wp-content/uploads/2018/01/30_Tight_The-40-Best-Hairstyles-for-Women-Over-40_329920157_Miramiska.jpg",
            "https://orange-jlink.com/wp-content/uploads/2019/02/emma-stone-short-hairstyles-collection-best-of-emma-stone-blunt-finish-to-this-bob-heavier-side-fringe-softens-of-emma-stone-short-hairstyles-collection.jpg",
            "https://whereitstands.com/wp-content/uploads/2018/12/short-bob-haircuts-20-new-bob-hair-style-cute-bob-hair-page-new-hair-cut-women.jpg",
            "http://www.vusla.net/wp-content/uploads/2018/01/53.jpg",
            "https://i.pinimg.com/736x/6a/27/9e/6a279e0be17180fb960a0f6b549ad11e.jpg",
            "http://www.liveenhanced.com/wp-content/uploads/2018/02/Barely-There-Waves-Hair.jpg"
          ],
          title: 'SHORT'
        },
        {
          background: "https://i.pinimg.com/originals/15/1b/0c/151b0ccfdf9cca8869d678d00db1f2d4.jpg",
          images: [
            "https://ae01.alicdn.com/kf/HTB1MejcqDJYBeNjy1zeq6yhzVXar/1PC-Ready-to-Wear-Updo-That-Can-be-Styled-in-a-Top-Knot-or-Low-Bun.jpg_q50.jpg",
            "https://www.hottesthaircuts.com/wp-content/uploads/2017/09/Side-Bun.jpg",
            "https://i.pinimg.com/736x/8b/b0/00/8bb0001044ea81f776c991c33efc8493.jpg",
            "https://www.rd.com/wp-content/uploads/2018/01/30_Tight_The-40-Best-Hairstyles-for-Women-Over-40_329920157_Miramiska.jpg",
            "https://orange-jlink.com/wp-content/uploads/2019/02/emma-stone-short-hairstyles-collection-best-of-emma-stone-blunt-finish-to-this-bob-heavier-side-fringe-softens-of-emma-stone-short-hairstyles-collection.jpg",
            "https://whereitstands.com/wp-content/uploads/2018/12/short-bob-haircuts-20-new-bob-hair-style-cute-bob-hair-page-new-hair-cut-women.jpg",
            "http://www.vusla.net/wp-content/uploads/2018/01/53.jpg",
            "https://i.pinimg.com/736x/6a/27/9e/6a279e0be17180fb960a0f6b549ad11e.jpg",
            "http://www.liveenhanced.com/wp-content/uploads/2018/02/Barely-There-Waves-Hair.jpg"
          ],
          title: 'SLEEK'
        },
        {
          background: "http://lionesseflatiron.org/wp-content/uploads/2017/01/lionesse-hot-hairstyles-for-2017-texture.jpg",
          images: [
            "https://ae01.alicdn.com/kf/HTB1MejcqDJYBeNjy1zeq6yhzVXar/1PC-Ready-to-Wear-Updo-That-Can-be-Styled-in-a-Top-Knot-or-Low-Bun.jpg_q50.jpg",
            "https://www.hottesthaircuts.com/wp-content/uploads/2017/09/Side-Bun.jpg",
            "https://i.pinimg.com/736x/8b/b0/00/8bb0001044ea81f776c991c33efc8493.jpg",
            "https://www.rd.com/wp-content/uploads/2018/01/30_Tight_The-40-Best-Hairstyles-for-Women-Over-40_329920157_Miramiska.jpg",
            "https://orange-jlink.com/wp-content/uploads/2019/02/emma-stone-short-hairstyles-collection-best-of-emma-stone-blunt-finish-to-this-bob-heavier-side-fringe-softens-of-emma-stone-short-hairstyles-collection.jpg",
            "https://whereitstands.com/wp-content/uploads/2018/12/short-bob-haircuts-20-new-bob-hair-style-cute-bob-hair-page-new-hair-cut-women.jpg",
            "http://www.vusla.net/wp-content/uploads/2018/01/53.jpg",
            "https://i.pinimg.com/736x/6a/27/9e/6a279e0be17180fb960a0f6b549ad11e.jpg",
            "http://www.liveenhanced.com/wp-content/uploads/2018/02/Barely-There-Waves-Hair.jpg"
          ],
          title: 'STRAIGHT'
        },
        {
          background: "https://www.ladonnaroye.com/images/headers/IP-header_hair-toppers.jpg",
          images: [
            "https://ae01.alicdn.com/kf/HTB1MejcqDJYBeNjy1zeq6yhzVXar/1PC-Ready-to-Wear-Updo-That-Can-be-Styled-in-a-Top-Knot-or-Low-Bun.jpg_q50.jpg",
            "https://www.hottesthaircuts.com/wp-content/uploads/2017/09/Side-Bun.jpg",
            "https://i.pinimg.com/736x/8b/b0/00/8bb0001044ea81f776c991c33efc8493.jpg",
            "https://www.rd.com/wp-content/uploads/2018/01/30_Tight_The-40-Best-Hairstyles-for-Women-Over-40_329920157_Miramiska.jpg",
            "https://orange-jlink.com/wp-content/uploads/2019/02/emma-stone-short-hairstyles-collection-best-of-emma-stone-blunt-finish-to-this-bob-heavier-side-fringe-softens-of-emma-stone-short-hairstyles-collection.jpg",
            "https://whereitstands.com/wp-content/uploads/2018/12/short-bob-haircuts-20-new-bob-hair-style-cute-bob-hair-page-new-hair-cut-women.jpg",
            "http://www.vusla.net/wp-content/uploads/2018/01/53.jpg",
            "https://i.pinimg.com/736x/6a/27/9e/6a279e0be17180fb960a0f6b549ad11e.jpg",
            "http://www.liveenhanced.com/wp-content/uploads/2018/02/Barely-There-Waves-Hair.jpg"
          ],
          title: 'TOUSLED'
        },
      ]
    })

  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar hidden/>
        <View style={styles.body}>
          <TouchableOpacity onPress={() => this.changePassword()}>
            <View style={styles.bodyCard}>
              <Text style={styles.bodyCardContentText}>Thay đổi mật khẩu</Text>
              <View style={styles.headerRightBtn}>
                <Image style={{width: 25, height: 25}} source={require('../../assets/images/right_BLACK.png')}
                       resizeMethod='resize'/>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.onLogOut()}>
            <View style={styles.bodyCard}>
              <Text style={styles.bodyCardContentText}>Đăng xuất</Text>
              <View style={styles.headerRightBtn}>
                <Image style={{width: 25, height: 25}} source={require('../../assets/images/right_BLACK.png')}
                       resizeMethod='resize'/>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </View>
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
    paddingVertical: 5,
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

function mapStateToProps(state) {
  return {}
}

function mapDispatchToProps(dispatch) {
  return {
    AuthActions: bindActionCreators(AuthActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SettingScreen)
