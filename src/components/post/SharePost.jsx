//share post
import PostText from "./PostText"
import { useEffect, useState } from "react"
function SharePost() {
    const [postText, setPostText] = useState("")
 
    return (
        <div className="w-[480px] min-h-[110px] duration-500 bg-white rounded-md flex flex-col justify-between px-2 py-3">
            <PostText text={postText} handleChange={setPostText} />
        </div>
    )
}

export default SharePost