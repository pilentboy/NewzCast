import { FaHeart } from "react-icons/fa";
import { useContext, useEffect, useState } from "react";
import { LoginContext } from "../../../context/LoginContext";
import manageUsersFavorites from "../../../utils/manageUsersFavorites";


function AddFavorites({ postID }) {

    const { userTokenInfo, userLoggedInfo, mainDB, setMainDB } = useContext(LoginContext)
    const [favorite,setFavorite]=useState(false)


    const handleAddFavorite = () => {
        const updateDB=[...mainDB]
        const LoggedUserIndex=updateDB.findIndex(user => user.email === userLoggedInfo.email)
        if(favorite){
            const updatedUserFavoritePosts=updateDB[LoggedUserIndex].favoritePosts.filter(favoriteID => favoriteID !== postID)
            updateDB[LoggedUserIndex].favoritePosts = updatedUserFavoritePosts
            setMainDB(updateDB)
        }else{
            updateDB[LoggedUserIndex].favoritePosts.push(postID)
            setMainDB(updateDB)
        }
    }

    useEffect(()=>{
        if(userTokenInfo && manageUsersFavorites(postID,userLoggedInfo.email, mainDB)){
            setFavorite(true)
        }else{
            setFavorite(false)
        }
    },[userTokenInfo,mainDB])
    
    return (
        <button type='button' onClick={handleAddFavorite}>
            <FaHeart
                title='add to favorites'
                className={` text-xl duration-200   ${userTokenInfo && favorite ? 'text-red-700' : 'text-gray-400'}
                ${!favorite ? 'hover:text-gray-500' : null}
                `} />

        </button>)
}

export default AddFavorites