import React,{Component} from 'react';
import {
    ScrollView,
    Text,
} from 'react-native';
import AlbumDetail from './AlbumDetail'
import firebase from 'react-native-firebase'

class AlbumList extends Component {
    constructor(props){
        super(props)
        this.state = {
            albums : [
                "https://firebasestorage.googleapis.com/v0/b/easy-hair-914b1.appspot.com/o/images%2Fcrop%2F1.jpg?alt=media&token=69ea69df-e322-455a-9e33-f508b3c20d3b",
                "https://firebasestorage.googleapis.com/v0/b/easy-hair-914b1.appspot.com/o/images%2Fcrop%2F2.jpg?alt=media&token=a32dacf5-db6d-48e1-b63c-ef2f9482668f",
                "https://firebasestorage.googleapis.com/v0/b/easy-hair-914b1.appspot.com/o/images%2Fcrop%2F3.jpg?alt=media&token=78cedf42-b86f-4d08-b569-e1de33e2964d",
                "https://firebasestorage.googleapis.com/v0/b/easy-hair-914b1.appspot.com/o/images%2Fcrop%2F4.jpg?alt=media&token=b4f26da1-1e65-42e9-87ac-f95a124f4fe3",
                "https://firebasestorage.googleapis.com/v0/b/easy-hair-914b1.appspot.com/o/images%2Fcrop%2F5.jpg?alt=media&token=4a13f451-133c-4d24-b82a-fe1142d2c3a9",
                "https://firebasestorage.googleapis.com/v0/b/easy-hair-914b1.appspot.com/o/images%2Fcrop%2F6.jpg?alt=media&token=ab9ece05-2435-42cd-91c1-11b03d84f48e",
                "https://firebasestorage.googleapis.com/v0/b/easy-hair-914b1.appspot.com/o/images%2Fcrop%2F7.jpg?alt=media&token=770db097-b48e-4ee4-a3ba-752a17a4feef"
            ],
        }
    }
    componentWillMount(){
            // const database = firebase.database().ref(`images/${this.props.style}`)
            // database.on('value',(data) => {
            //     const jsonData = data.val()
            //     this.setState({
            //         albums : jsonData
            //     })
            // })
        //console.log(this.state);
    }

    renderAlbums(){
        return this.state.albums.map(album => <AlbumDetail  album={album}/>);
    }

    render() {
        return (
            <ScrollView>
                {this.renderAlbums()}
            </ScrollView>
        );
    }
}

export {AlbumList};