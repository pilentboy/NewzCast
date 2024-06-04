import { FaHeart } from "react-icons/fa";
import { useContext, useState } from "react";
import { LoginContext } from "../../../context/LoginContext";


function AddFavorites({ favoritePost }) {

    const { userInfo } = useContext(LoginContext)
    const [favorite,setFavorite]=useState(favoritePost ? favoritePost : false)


    const handleAddFavorite = () => {
        userInfo ? setFavorite(e => !e) : alert("Please log in first!")
    }
    return (
        <button type='button' onClick={handleAddFavorite}>
            <FaHeart
                title='add to favorites'
                className={` text-xl duration-200   ${userInfo && favorite ? 'text-red-700' : 'text-gray-400'}
                ${!favorite ? 'hover:text-gray-500' : null}
                `} />

        </button>)
}

export default AddFavorites