
import { IoSendSharp } from "react-icons/io5";

function CommentPostInput({ commentValue, setCommentValue }) {

    const handleSendComment = () => {
        setCommentValue('')
    }
    const handleChange = (e) => {
        setCommentValue(e.target.value);
    }

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleSendComment()
        }
    }

    return (
        <div className='flex items-center justify-between w-full border border-gray-300 px-2 rounded-md'>

            <input
                type='text'
                value={commentValue}
                onChange={handleChange}
                className={`w-4/5 border-gray-200 text-[12px] py-2   placeholder-gray-600 font-normal  border-0 outline-none  `}
                onKeyDown={handleKeyDown}
                placeholder='Write comment' />

            <button type="button" aria-label="send comment" title="Send Comment" onClick={handleSendComment}>
                <IoSendSharp className='text-[18px] duration-200  text-purple-1000 hover:scale-110' />
            </button>
        </div>
    )
}

export default CommentPostInput