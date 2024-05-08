import { BiSolidLike } from "react-icons/bi";
import { useContext } from "react";
import { LoginContext } from "../../../context/LoginContext";

function LikePost({ likedPost, handleLike }) {

    const { userInfo } = useContext(LoginContext)

    const handlePostLike = () => {
        userInfo ? handleLike(e => !e) : alert("Please log in first!")
    }

    return (
        <button type='button' className='flex items-center text-gray-600 text-[12px] font-medium'
            onClick={handlePostLike}
        >

            <BiSolidLike
                className={`text-2xl mr-2 duration-200 ${!likedPost || !userInfo ? 'text-gray-400' : 'text-green-600 '} `}
            />
            <span className={`${likedPost && userInfo ? 'invisible' : 'visible'}`}>
                Like
            </span>
        </button>)
}

export default LikePost