

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Routes from './routes/index'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducers from './reducers/index'


const store = createStore(reducers)

export default class App extends Component {

  componentWillMount() {
  }

  render() {
    return (
      <Provider store = {store}>
        <Routes/>
      </Provider>
    );
  }
}