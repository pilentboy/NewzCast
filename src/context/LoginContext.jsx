import { createContext, useEffect, useState } from "react";
import UsersDB from '../db.json'
import generateRandomPostID from "../utils/generateRandomPostID ";
import manageUsersLiked from "../utils/manageUsersLikes";
import handleUploadDate from "../utils/handleUploadDate";
import defaultProfileImage from '../assets/images/blank_profile.webp'
const LoginContext = createContext()

const LoginProvider = ({ children }) => {

    const [mainDB,setMainDB]=useState(UsersDB.UsersData)
    const [userTokenInfo, setUserTokenInfo] = useState()
    const [userLoggedInfo, setUserLoggedInfo] = useState()
    const [loading, setLoading] = useState(false)
    const [verifyUser, setVerifyUser] = useState()

 

    const getUserInfo = (userEmail) => {
        const userInfo = mainDB.filter((usersInfo) => usersInfo.email === userEmail)
        
        if (userInfo.length === 1){
			return userInfo[0]
		}
		
		const userSessionData = JSON.parse(localStorage.getItem('sb-sftspirecsaiuswinvmc-auth-token'))
		const updateDB= mainDB
		
		updateDB.push(
			     {
            "firstName": "User",
            "lastName": "User",
            "username": "username",
            "profileImage":"",
            "email": userSessionData['user']['email'],
            "verified": false,
            "userConnections": [
               {
                "Followers":[]
               },
               {
                "Following":[]
               }
            ],
            "posts": [],
            "favoritePosts":[]
        }
		)
		
		setMainDB(updateDB)
		
    }
    
    

    const handleUploadNewPost = (title,postMedias) => {

        const updatedDB = [...mainDB];
        
        const userAccIndex = updatedDB.findIndex(user => user.email === userLoggedInfo.email);
               
        const newPost = {
            "title": title,
            "postMeidas":postMedias,
            "uploadedDate": handleUploadDate(),
            "likes": 0,
            "usersLiked":[],
            "views": 0,
            "postID": generateRandomPostID(),
            "comments": []
            };
            
        updatedDB[userAccIndex].posts = [newPost, ...updatedDB[userAccIndex].posts];
        setMainDB(updatedDB);
    };


    const handlePostLike=(postID,userEmail) => {

        const updatedDB = [...mainDB];
        const userAccIndex = updatedDB.findIndex(user => user.email === userEmail);

        const currentPostIndex=updatedDB[userAccIndex].posts.findIndex(post => post.postID === postID)

        const currentPost= updatedDB[userAccIndex].posts[currentPostIndex]
        const manageUsersLikedRes= manageUsersLiked(currentPost.usersLiked,userLoggedInfo.email)

       if(manageUsersLikedRes){
            const updateCurrentPostLikes= currentPost.usersLiked.filter((usersEmail) => usersEmail !== userLoggedInfo.email)
            currentPost.usersLiked = updateCurrentPostLikes
       }else{
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


    const handleDeletePost  = postID=>{
        const updatedDB = [...mainDB];
        const userAccIndex = updatedDB.findIndex(user => user.email === userLoggedInfo.email);
        const userData=updatedDB[userAccIndex]
        const currentPost= userData.posts.filter((post) => post.postID !== postID)
        updatedDB[userAccIndex].posts=currentPost
        setMainDB(updatedDB)
    }
    
    const handlePostEdit  = (postID,newTitle) =>{
        const updatedDB = [...mainDB];
        const userAccIndex = updatedDB.findIndex(user => user.email === userLoggedInfo.email);
        const userData=updatedDB[userAccIndex]
        const curretPost=userData.posts.findIndex(post => post.postID === postID)
        userData.posts[curretPost].title = newTitle
        updatedDB[userAccIndex] = userData
        setMainDB(updatedDB)
    }



    const handleSendComment= (commentValue,postID, postUserEmail) =>{
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


    const handleChangeProfilePic= e =>{
        const file = Array.from(e.target.files)
        const filePath = file.map(file => URL.createObjectURL(file))
        const updatedDB = [...mainDB];
        const userDBIndex= updatedDB.findIndex(user => user.email === userLoggedInfo.email)

        updatedDB[userDBIndex].profileImage= filePath[0]

        setMainDB(updatedDB)

    }

    const handleDeleteProfilePic= () =>{
        const updatedDB = [...mainDB];
        const userDBIndex= updatedDB.findIndex(user => user.email === userLoggedInfo.email)

        updatedDB[userDBIndex].profileImage= defaultProfileImage

        setMainDB(updatedDB)

    }


    const handleUpdateUserInfo= (newValue,title) =>{
        const updatedDB = [...mainDB];
        const userDBIndex= updatedDB.findIndex(user => user.email === userLoggedInfo.email)
        updatedDB[userDBIndex][title]= newValue
        setMainDB(updatedDB)
    }

    useEffect(() => {

        handleUserAuth()

        if (userLoggedInfo) {
            setVerifyUser(userLoggedInfo['verified'])
        }
	
        console.log(mainDB)
    }, [userLoggedInfo,mainDB])


    return (
        <LoginContext.Provider value={{mainDB, setMainDB, getUserInfo, userTokenInfo, setUserTokenInfo, handleUserAuth, userLoggedInfo, loading, setLoading, verifyUser, handleUploadNewPost, handlePostLike,handleDeletePost,handlePostEdit, handleSendComment,handleChangeProfilePic,handleDeleteProfilePic,handleUpdateUserInfo}}>
            {children}
        </LoginContext.Provider>
    )
}


export default LoginProvider
export { LoginContext }



