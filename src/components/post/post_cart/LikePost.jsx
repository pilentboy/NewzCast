import { BiSolidLike } from "react-icons/bi";

function LikePost({ likedPost, handleLike }) {



    return (
        <button type='button' className='flex items-center text-gray-600 text-[12px] font-medium'
            onClick={() => handleLike(e => !e)}
        >

            <BiSolidLike
                className={`text-2xl mr-2 duration-200 ${!likedPost ? 'text-gray-400' : 'text-green-600 '} `}
            />
            <span className={`${likedPost ? 'invisible' : 'visible'}`}>
                Like
            </span>
        </button>)
}

export default LikePost