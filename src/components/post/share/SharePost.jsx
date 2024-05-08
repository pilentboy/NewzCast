import PostText from "./PostText"
import MainButton from '../../landing/MainButton'
import { BsFillCameraVideoFill } from "react-icons/bs";
import { IoMdCamera } from "react-icons/io";
import { useState } from "react"
import PostMedia from "./PostMedia";

function SharePost() {
    const [postText, setPostText] = useState("")

    return (
        <form action="">
            <div className="w-[346px]  min-h-[110px] duration-300 bg-white border border-gray-100 shadow-md rounded-md flex flex-col justify-between px-2 py-2 md:w-480">
                <PostText text={postText} handleChange={setPostText} />
                <div className="flex justify-between items-center w-full">


                    <div className="flex items-center justify-between w-2/5 ">

                        <PostMedia
                            title={'Video'}
                            accept={'video/mp4,video/x-matroska'}
                            logo={<BsFillCameraVideoFill className="text-lg text-purple-1000" />} />

                        <span className="bg-gray-300 w-[1px] h-4 "></span>

                        <PostMedia
                            title={'Photo'}
                            accept={'image/*'}
                            logo={<IoMdCamera className="text-lg text-purple-1000" />} />

                    </div>

                    <button type="submit" className="w-20 h-8 rounded-md bg-purple-1000 text-white text-center hover:opacity-90 md:w-28 md:h-10">
                        Share
                    </button>

                </div>
            </div>
        </form>

    )
}

export default SharePost