const manageUsersLiked= (currentPost, loggedUserEmail)=>{
        
    const checkUserLikeStatus= currentPost.filter((userEmail) => userEmail === loggedUserEmail)

    if(checkUserLikeStatus.length >=1) return true
}

export default manageUsersLiked