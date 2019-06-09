import React, {Component} from 'react';
import {ActivityIndicator, AsyncStorage, StatusBar, StyleSheet, View,} from 'react-native';
import firebase from 'react-native-firebase'

export default class AuthLoadingScreen extends Component {
  constructor(props) {
    super(props);
    this._bootstrapAsync();
    this.state = {
      isLoggedIn: false,
      user: null
    }
  }

  componentDidMount() {
    this.authSubscription = firebase.auth().onAuthStateChanged((user) => {
      this.setState({
        user
      });

    });
  }


  componentWillUnmount() {
    this.authSubscription()
  }


  _bootstrapAsync = async () => {
    const userToken = await AsyncStorage.getItem('isLoggedIn');

    this.props.navigation.navigate(this.state.user ? 'Auth' : 'Auth');
  };

  render() {
    return (
      <View style={styles.container}>
        <ActivityIndicator/>
        <StatusBar barStyle="default"/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
