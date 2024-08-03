
import { useContext } from "react";
import { IoSendSharp } from "react-icons/io5";
import { LoginContext } from "../../../context/LoginContext";
import handleSendComment from "../../../utils/handleSendComment";

function CommentPostInput({ commentValue, setCommentValue, postID, postUserEmail}) {

    const {mainDB,setMainDB, userTokenInfo,userLoggedInfo}= useContext(LoginContext)


    const handleChange = (e) => {
        setCommentValue(e.target.value);
    }

    const checkUserInfo=()=>{
        if(userTokenInfo){
            handleSendComment(commentValue, postID, postUserEmail,mainDB,setMainDB,userLoggedInfo)
            setCommentValue("")
        }else{
            alert("log in first!")
        }
    }
    

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            checkUserInfo()
        }
    }

    return (
        <div 

        className='flex items-center justify-between w-full border border-gray-300 px-2 rounded-md'
        >

            <input
                type='text'
                value={commentValue}
                onChange={handleChange}
                onKeyDown={handleKeyDown}
                className={`w-4/5 border-gray-200 text-[12px] py-2   placeholder-gray-600 font-normal  border-0 outline-none  `}
                placeholder='Write comment' />

            <button type="button" aria-label="send comment" title="Send Comment" onClick={checkUserInfo} >
                <IoSendSharp className='text-[18px] duration-200  text-purple-1000 hover:scale-110' />
            </button>
        </div>
    )
}

export default CommentPostInput