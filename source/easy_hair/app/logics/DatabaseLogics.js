import * as DatababeAPIs from '../api/DatabaseAPIs'

export function getListSalon(successFunc = null, errorFunc = null) {
    DatababeAPIs.getListSalon((data) => {
        successFunc(data)

    })
}

export function getMenAlbum(successFunc = null, errorFunc = null) {
    DatababeAPIs.getMenAlbum((data) => {
        successFunc(data)
    })
}

export function getWomenAlbum(successFunc = null, errorFunc = null) {
    DatababeAPIs.getWomenAlbum((data) => {
        successFunc(data)
    })
}

export function getBannerAlbum(successFunc = null, errorFunc = null) {
    DatababeAPIs.getBannerAlbum((data) => {
        successFunc(data)
    })
}
