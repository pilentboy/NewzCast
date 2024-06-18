import { FaHeart } from "react-icons/fa";
import { useContext, useEffect, useState } from "react";
import { LoginContext } from "../../../context/LoginContext";
import manageUsersFavorites from "../../../utils/manageUsersFavorites";


function AddFavorites({ postID }) {

    const { userTokenInfo, userLoggedInfo, mainDB } = useContext(LoginContext)
    const [favorite,setFavorite]=useState(false)


    const handleAddFavorite = () => {
  
    }

    useEffect(()=>{
        if(userTokenInfo && manageUsersFavorites(postID,userLoggedInfo.email, mainDB)){
            setFavorite(true)
        }else{
            setFavorite(false)
        }
    },[userTokenInfo])
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