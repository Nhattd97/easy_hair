import * as AuthAPIs from '../api/AuthAPIs'

export function login(userInfo, successFunc = null, errorFunc = null) {
    AuthAPIs.login(userInfo)
    .then(user => {
        if(successFunc)
            successFunc()
    })
    .catch(error => {
        if(errorFunc)   
            errorFunc(error)
    })
}

export function sendCode(phone,successFunc = null, errorFunc = null) {
    AuthAPIs.sendCode(phone)
    .then(confirmResult => {
        if(successFunc) 
            successFunc(confirmResult)
    })
    .catch(error => {
        if(errorFunc)
            errorFunc(error)
    })
}
