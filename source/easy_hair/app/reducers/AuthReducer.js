
import * as ActionTypes from '../const/types'
const INITIAL_STATE = {
    isLoggedIn : false
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case ActionTypes.LOGIN : 
            return {
                ...state,
                isLoggedIn : true
            }
        default : return state
    }
}