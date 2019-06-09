import React, {Component} from 'react';
import Routes from './routes/index'
import {Provider} from 'react-redux'
import {applyMiddleware, createStore} from 'redux'
import reducers from './reducers/index'
import reduxThunk from 'redux-thunk'


const store = createStore(reducers, applyMiddleware(reduxThunk))

export default class App extends Component {

  componentWillMount() {
    console.disableYellowBox = true
  }

  render() {
    return (
      <Provider store={store}>
        <Routes/>
      </Provider>
    );
  }
}
