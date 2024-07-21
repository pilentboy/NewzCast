
const handleDeletePost  = (postID,mainDB,setMainDB,userLoggedInfo) =>{
    const updatedDB = [...mainDB];
    const userAccIndex = updatedDB.findIndex(user => user.email === userLoggedInfo.email);
    const userData=updatedDB[userAccIndex]
    const currentPost= userData.posts.filter((post) => post.postID !== postID)
    updatedDB[userAccIndex].posts=currentPost
    setMainDB(updatedDB)
}

export default handleDeletePost