import * as ActionTypes from '../const/types'
import * as DatabaseLogics from '../logics/DatabaseLogics'


export function getListSalon(successFunc = null, errorFunc = null) {
    return dispatch => {
        DatabaseLogics.getListSalon((data) => {
            dispatch({ type : ActionTypes.GET_LIST_SALON, data})
            if(successFunc)
                successFunc()
        }, (error) => {
            if(errorFunc)
                errorFunc(error)
        })
    }
}

export function getMenAlbum(successFunc = null, errorFunc = null) {
    return dispatch => {
        DatabaseLogics.getMenAlbum((data) => {
            dispatch({ type : ActionTypes.GET_MEN_ALBUM, data})
            if(successFunc)
                successFunc()
        }, (error) => {
            if(errorFunc)
                errorFunc(error)
        })
    }
}

export function getWomenAlbum(successFunc = null, errorFunc = null) {
    return dispatch => {
        DatabaseLogics.getWomenAlbum((data) => {
            dispatch({ type : ActionTypes.GET_WOMEN_ALBUM, data})
            if(successFunc)
                successFunc()
        }, (error) => {
            if(errorFunc)
                errorFunc(error)
        })
    }
}

export function getBannerAlbum(successFunc = null, errorFunc = null) {
    return dispatch => {
        DatabaseLogics.getBannerAlbum((data) => {
            dispatch({ type : ActionTypes.GET_BANNER_ALBUM, data})
            if(successFunc)
                successFunc()
        }, (error) => {
            if(errorFunc)
                errorFunc(error)
        })
    }
}