
const handleSendComment= (commentValue,postID, postUserEmail,mainDB,setMainDB,userLoggedInfo) =>{
    const updatedDB = [...mainDB];
    const currentPostUser= updatedDB.findIndex(user => user.email === postUserEmail)
    const curretPost= updatedDB[currentPostUser].posts.findIndex(post => post.postID === postID)
    
    updatedDB[currentPostUser].posts[curretPost].comments.push(
        {
            "username":userLoggedInfo.username,
            "email": userLoggedInfo.email,
            "profileImage":userLoggedInfo.profileImage,
            "comment": commentValue
        }
    )

    setMainDB(updatedDB)
 
}


export default handleSendComment