import { createContext, useEffect, useState } from "react";
import UsersDB from '../db.json'
import generateRandomPostID from "../utils/generateRandomPostID ";
import manageUsersLiked from "../utils/manageUsersLikes";

const LoginContext = createContext()

const LoginProvider = ({ children }) => {

    const [mainDB,setMainDB]=useState(UsersDB.UsersData)
    const [userTokenInfo, setUserTokenInfo] = useState()
    const [userLoggedInfo, setUserLoggedInfo] = useState()
    const [loading, setLoading] = useState(false)
    const [verifyUser, setVerifyUser] = useState()

 

    const getUserInfo = (userEmail) => {
        const userInfo = mainDB.filter((usersInfo) => usersInfo.email === userEmail)
        
        if (userInfo.length === 1) return userInfo[0]
    }
    
    

    const handleUploadNewPost = (title,selectedFiles) => {

        const updatedDB = [...mainDB];
        
        const userAccIndex = updatedDB.findIndex(user => user.email === userLoggedInfo.email);
               
        const newPost = {
            "title": title,
            "image": selectedFiles[0],
            "likes": 0,
            "views": 0,
            "postID": generateRandomPostID(),
            "comments": []
            };
            
        updatedDB[userAccIndex].posts = [...updatedDB[userAccIndex].posts, newPost];
            
        setMainDB(updatedDB);
        console.log(mainDB)
    };


    const handlePostLike=(postID,userEmail) => {

        const updatedDB = [...mainDB];
        const userAccIndex = updatedDB.findIndex(user => user.email === userEmail);

        const currentPostIndex=updatedDB[userAccIndex].posts.findIndex(post => post.postID === postID)

        const currentPost= updatedDB[userAccIndex].posts[currentPostIndex]
        const manageUsersLikedRes= manageUsersLiked(currentPost.usersLiked,userLoggedInfo.email)

       if(manageUsersLikedRes){
            currentPost.likes -= 1
            const updateCurrentPostLikes= currentPost.usersLiked.filter((usersEmail) => usersEmail !== userLoggedInfo.email)
            currentPost.usersLiked = updateCurrentPostLikes
            console.log(currentPost,'min')
       }else{
            currentPost.likes += 1
            currentPost.usersLiked.push(userLoggedInfo.email)
        }

        updatedDB[userAccIndex][currentPostIndex] = currentPost 

        setMainDB(updatedDB)
        return manageUsersLikedRes

    }

  
    
	
	
    const handleUserAuth = () => {
        const userSessionData = JSON.parse(localStorage.getItem('sb-sftspirecsaiuswinvmc-auth-token'))
        if (!userSessionData) {
            setUserTokenInfo(null)
            setUserLoggedInfo(null)
        } else {
            setUserTokenInfo(userSessionData)
            setUserLoggedInfo(getUserInfo(userSessionData['user']['email']))
        }
    }



    useEffect(() => {

        handleUserAuth()

        if (userLoggedInfo) {
            setVerifyUser(userLoggedInfo['verified'])
        }
        console.log("dd")
		
    }, [userLoggedInfo])


    return (
        <LoginContext.Provider value={{mainDB, getUserInfo, userTokenInfo, setUserTokenInfo, handleUserAuth, userLoggedInfo, loading, setLoading, verifyUser, handleUploadNewPost, handlePostLike}}>
            {children}
        </LoginContext.Provider>
    )
}


export default LoginProvider
export { LoginContext }



