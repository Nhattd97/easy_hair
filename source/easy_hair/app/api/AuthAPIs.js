import firebase from 'react-native-firebase'

export function login(userInfo) {
    const {email,password} = userInfo
    return firebase.auth().signInWithEmailAndPassword(email,password)
}


export function sendCode(phone) {
    return firebase.auth().signInWithPhoneNumber(phone)
}
