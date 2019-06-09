import * as ActionTypes from '../const/types'
import * as AuthLogics from '../logics/AuthLogics'

export function login(userInfo, successFunc = null, errorFunc = null) {
  return dispatch => {
    AuthLogics.login(userInfo, (user) => {
      dispatch({type: ActionTypes.LOGIN, user})
      if (successFunc)
        successFunc()
    }, (error) => {
      if (errorFunc)
        errorFunc(error)
    })
  }
}

export function logout() {
  return dispatch => {
    AuthLogics.logout();
    dispatch({type: ActionTypes.LOGOUT});
  }
}

export function sendCode(phone, successFunc = null, errorFunc = null) {
  return dispatch => {
    let formatPhone = `+84${phone}`
    AuthLogics.sendCode(formatPhone, (confirmResult) => {
      const content = {
        phone,
        confirmResult
      }
      dispatch({type: ActionTypes.SEND_CODE, content})
      if (successFunc)
        successFunc()
    }, error => {
      if (errorFunc)
        errorFunc(error)
    })
  }
}

export function updateUser(user) {
  return dispatch => {
    dispatch({type: ActionTypes.UPDATE_USER, user})
  }
}
