
const manageUsersFavorites=(postID,userEmail,mainDB)=>{
    const findLoggedUser=mainDB.filter(user => user.email === userEmail)[0]
    const checkUsersFavorites= findLoggedUser.favoritePosts.filter(favoriteID => favoriteID === postID )
    if(checkUsersFavorites.length > 0){
        return true
    }

}

export default manageUsersFavorites