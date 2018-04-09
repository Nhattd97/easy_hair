import * as ActionTypes from '../const/types'

export function login(userInfo) {
    return dispatch => {
        try {
            await firebase.auth()
                .signInWithEmailAndPassword(userInfo.email, userInfo.pass);
    
                Alert.alert("Logged In!");
    
            // Navigate to the Home page
            //this.props.navigation.navigate("home")
            dispatch({type : ActionTypes.LOGIN})
    
        } catch (error) {
            Alert.alert(error.toString())
        }
        
    }
}