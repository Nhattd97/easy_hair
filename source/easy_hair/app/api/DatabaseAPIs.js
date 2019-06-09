import firebase from 'react-native-firebase'

export function getListSalon(successFunc = null) {
  const database = firebase.database().ref(`salons`)
  database.on('value', (data) => {
    if (successFunc)
      successFunc(data.val())
  })
}

export function getMenAlbum(successFunc = null) {
  const database = firebase.database().ref(`images/men`)
  database.on('value', (data) => {
    if (successFunc)
      successFunc(data.val())
  })
}

export function getWomenAlbum(successFunc = null) {
  const database = firebase.database().ref(`images/women`)
  database.on('value', (data) => {
    if (successFunc)
      successFunc(data.val())
  })
}

export function getBannerAlbum(successFunc = null) {
  const database = firebase.database().ref(`images/banner`)
  database.on('value', (data) => {
    if (successFunc)
      successFunc(data.val())
  })
}
