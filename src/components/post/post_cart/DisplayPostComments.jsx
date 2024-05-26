
import { FaCommentDots } from "react-icons/fa";

function DisplayPostComments({ commentsLength }) {
    return (
        <button type="button" className="flex items-center" title="comments" aria-label="display post comments">
            <span className="text-gray-600 text-[12px]">{commentsLength}
            </span>
            <FaCommentDots className='text-base  text-gray-400 mx-2' />
        </button>
    )

}

export default DisplayPostComments