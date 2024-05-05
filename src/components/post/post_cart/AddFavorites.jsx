import { FaHeart } from "react-icons/fa";

function AddFavorites({ favoritePost, handleFavorite }) {
    return (
        <button type='button' onClick={() => handleFavorite(e => !e)}>
            <FaHeart
                title='add to favorites'
                className={` text-base duration-200  ${favoritePost ? 'text-red-700' : 'text-gray-400'}`} />

        </button>)
}

export default AddFavorites