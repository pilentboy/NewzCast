import { FaHeart } from "react-icons/fa";
import { useContext } from "react";
import { LoginContext } from "../../../context/LoginContext";
function AddFavorites({ favoritePost, handleFavorite }) {

    const { userInfo } = useContext(LoginContext)

    const handleAddFavorite = () => {
        userInfo ? handleFavorite(e => !e) : alert("Please log in first!")
    }
    return (
        <button type='button' onClick={handleAddFavorite}>
            <FaHeart
                title='add to favorites'
                className={` text-xl duration-200  ${userInfo && favoritePost ? 'text-red-700' : 'text-gray-400'}`} />

        </button>)
}

export default AddFavorites