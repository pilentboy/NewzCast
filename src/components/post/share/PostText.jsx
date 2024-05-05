
function PostText({ text, handleChange }) {

    return (
        <div className="flex justify-between">
            <textarea
                value={text}
                rows={4} cols={10}
                maxLength={100}
                onChange={(e) => handleChange(e.target.value)}
                className="font-medium w-4/5 overflow-y-auto text-gray-700 text-sm resize-none placeholder-gray-700 border-none outline-none" placeholder="Share some Newz.....
" >

            </textarea>

            <span className="text-gray-400 text-xs font-medium">{text.length}/100</span>


        </div>
    )
}

export default PostText