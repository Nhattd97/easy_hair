import * as ActionTypes from '../const/types'
import * as AuthLogics from '../logics/AuthLogics'

export function login(userInfo, successFunc = null, errorFunc = null) {
    return dispatch => {
        AuthLogics.login(userInfo, () => {
            dispatch({ type : ActionTypes.LOGIN, userInfo})
            if(successFunc)
                successFunc()
        }, (error) => {
            if(errorFunc)
                errorFunc(error)
        })
    }
}

export function sendCode(phone, successFunc = null , errorFunc = null) {
    return dispatch => {
        AuthLogics.sendCode(phone, (confirmResult) => {
            const content = {
                phone,
                confirmResult
            }
            dispatch({ type : ActionTypes.SEND_CODE, content})
            if(successFunc)
                successFunc()
        }, error => {
            if(errorFunc)
                errorFunc(error)
        })
    }
}

export function updateUser(user) {
    return dispatch => {
        dispatch({ type : ActionTypes.UPDATE_USER,user })
    }
}