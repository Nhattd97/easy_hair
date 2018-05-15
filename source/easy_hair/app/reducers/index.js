import { combineReducers } from 'redux'
import AuthReducer from './AuthReducer'
import DatabaseReducer from './DatabaseReducer'

export default combineReducers({
    Auth : AuthReducer,
    Database : DatabaseReducer
})