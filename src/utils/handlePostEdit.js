

const handlePostEdit  = (postID,newTitle,userLoggedInfo,mainDB,setMainDB) =>{
    const updatedDB = [...mainDB];
    const userAccIndex = updatedDB.findIndex(user => user.email === userLoggedInfo.email);
    const userData=updatedDB[userAccIndex]
    const curretPost=userData.posts.findIndex(post => post.postID === postID)
    userData.posts[curretPost].title = newTitle
    updatedDB[userAccIndex] = userData
    setMainDB(updatedDB)
}

export default handlePostEdit