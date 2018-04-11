
import * as ActionTypes from '../const/types'
const INITIAL_STATE = {
    isLoggedIn : false,
    text : '',
    confirmResult : null,
    user : null,
    phone : ''
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case ActionTypes.LOGIN : 
            return {
                ...state,
                isLoggedIn : true,
                text : action.password
            }
        case ActionTypes.SEND_CODE :
            return {
                ...state,
                confirmResult : action.content.confirmResult,
                phone : action.content.phone
            }
        case ActionTypes.UPDATE_USER :
            return {
                ...state,
                user : action.user
            }
        default : return state
    }
}