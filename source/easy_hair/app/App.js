

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Routes from './routes/index'
import { Provider } from 'react-redux'
import { createStore,applyMiddleware } from 'redux'
import reducers from './reducers/index'
import reduxThunk from 'redux-thunk'


const store = createStore(reducers,applyMiddleware(reduxThunk))

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