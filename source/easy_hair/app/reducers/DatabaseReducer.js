
import * as ActionTypes from '../const/types'
const INITIAL_STATE = {
    salonsInDatabase : [],
    bannerAlbum : [],
    menAlbum : [],
    womenAlbum : []
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case ActionTypes.GET_LIST_SALON : 
            return {
                ...state,
                salonsInDatabase : action.data
            }

            case ActionTypes.GET_MEN_ALBUM : 
            return {
                ...state,
                menAlbum : action.data
            }

            case ActionTypes.GET_WOMEN_ALBUM : 
            return {
                ...state,
                womenAlbum : action.data
            }

            case ActionTypes.GET_BANNER_ALBUM : 
            return {
                ...state,
                bannerAlbum : action.data
            }
        
        default : return state
    }
}