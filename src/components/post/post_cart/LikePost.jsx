import { BiSolidLike } from "react-icons/bi";
import { useContext, useState } from "react";
import { LoginContext } from "../../../context/LoginContext";

function LikePost({ postID, userEmail}) {

    const [liked,setLiked]=useState(false)

    const { userTokenInfo, handlePostLike } = useContext(LoginContext)



    return (
        <button type='button' className='flex items-center text-gray-600 text-[12px] font-medium'
            onClick={() => handlePostLike(postID,userEmail)}
        >

            <BiSolidLike
                className={`text-[23px] mr-2 duration-200 ${!liked ? 'text-gray-400' : 'text-green-600 '} ${!liked ? 'hover:text-gray-500' : null}`}
            />
      
        </button>)
}

export default LikePost