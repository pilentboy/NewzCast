import { BiSolidLike } from "react-icons/bi";
import { useContext, useEffect, useState } from "react";
import { LoginContext } from "../../../context/LoginContext";
import manageUsersLiked from "../../../utils/manageUsersLikes";

function LikePost({ postID, userEmail,usersLiked}) {

    const [liked,setLiked]=useState(false)

    const { userTokenInfo,userLoggedInfo,mainDB,setMainDB } = useContext(LoginContext)


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

    const handlePostLikeStatus= ()=>{
        if(userTokenInfo){
            handlePostLike(postID,userEmail)
        }else{
            alert("please log in!")
        }
    }



    useEffect(()=>{
        if(userLoggedInfo){
            setLiked(manageUsersLiked(usersLiked,userLoggedInfo.email))
        }else{
			setLiked(false)
		}
    },[userLoggedInfo, mainDB])

    return (
        <button type='button' className='flex items-center text-gray-600 text-[12px] font-medium'
            onClick={handlePostLikeStatus}
        >

            <BiSolidLike
                className={`text-[23px] mr-2 duration-200 ${!liked ? 'text-gray-400' : 'text-green-600 '} ${!liked ? 'hover:text-gray-500' : null}`}
            />
      
        </button>)
}

export default LikePost