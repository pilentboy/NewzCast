
function PostText({ text, handleChange, TextLength }) {

    return (
        <div className="flex justify-between mb-2 w-full ">
            <textarea
                value={text}
                rows={4} cols={10}
                maxLength={TextLength ? 300 : 100}
                onChange={(e) => handleChange(e.target.value)}
                className="font-medium w-[87%] overflow-y-visible text-gray-700 text-sm resize-none placeholder-gray-700 border-none outline-none" placeholder="Share some Newz.....
" >

            </textarea>

            <span className="text-gray-400 text-xs font-medium">{text.length}/{TextLength ? 300 : 100}</span>


        </div>
    )
}

export default PostText