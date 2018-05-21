import React, { Component } from 'react'
import { Text, Image, View, StyleSheet } from 'react-native'

class Rating extends Component {
    constructor(props) {
        super(props);
    };

    render() {
        const { style, score ,score1, score2, score3, score4, score5 } = this.props;
        return (
            <View style={[styles.container, style, { flexDirection: 'row' }]}>
                <View style={styles.averageTextContainer}>
                    <Text style={styles.averageText}>{score} </Text>
                </View>
                <View style={styles.rowContainer}>
                    <View style={styles.row}>
                        <Image style={styles.rowImage} source={require('../assets/images/5star.png')} />
                        <Text style={styles.rowText}>:{score5}</Text>
                    </View>
                    <View style={styles.row}>
                        <Image style={styles.rowImage} source={require('../assets/images/4star.png')} />
                        <Text style={styles.rowText}>:{score4}</Text>
                    </View>
                    <View style={styles.row}>
                        <Image style={styles.rowImage} source={require('../assets/images/3star.png')} />
                        <Text style={styles.rowText}>:{score3}</Text>
                    </View>
                    <View style={styles.row}>
                        <Image style={styles.rowImage} source={require('../assets/images/2star.png')} />
                        <Text style={styles.rowText}>:{score2}</Text>
                    </View>
                    <View style={styles.row}>
                        <Image style={styles.rowImage} source={require('../assets/images/1star.png')} />
                        <Text style={styles.rowText}>:{score1}</Text>
                    </View>

                </View>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    container: { flexDirection: 'row' ,width:250,aspectRatio:2.5},
    averageTextContainer: { flex: 2, justifyContent: 'center', alignItems: 'flex-start' },
    averageText: { fontWeight: 'bold', fontSize: 50, color: 'green',margin:2, flexDirection:'row', justifyContent:'center' },
    rowContainer: { flex: 4},
    row: { flex: 1, flexDirection:'row'},
    rowImage: { width: '88%', height: '100%', resizeMode: 'stretch' },
    rowText: { fontSize: 20, color: 'orange', alignSelf:'center' }
})


export  {Rating};