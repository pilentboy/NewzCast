
import { FaCommentMedical } from "react-icons/fa6";

function CommentPost({ commentValue, setCommentValue }) {

    const handleSendComment = () => {
        setCommentValue('')
    }
    return (
        <div className='flex items-center justify-between w-full border border-gray-300 px-2 rounded-md'>

            <input
                type='text'
                value={commentValue}
                onChange={() => setCommentValue()}
                className={`w-4/5 border-gray-200 text-[12px] py-2   placeholder-gray-600 font-normal  border-0 outline-none  `}
                placeholder='Write comment' />

            <button type="button" aria-label="send comment" title="Send Comment" onClick={handleSendComment}>
                <FaCommentMedical className='text-[22px]  text-purple-1000' />
            </button>
        </div>
    )
}

export default CommentPost