export const UserModel = {
    name : '',
    gender : '',
    birthday : '',
    address : '',
    avatar : '',
    history : [
        {
            salonName : '',
            image : []
        }
    ]
}

export const SalonModel = {
    title : '',
    description : '',
    phone : '',
    rating : 0,
    image : [],
    coordinate : {
        latitude : 1,
        longtitude : 1
    },
    comment : [
        {
            name : '',
            avatar : '',
            content : '',
            rate : 0
        }
    ]
}