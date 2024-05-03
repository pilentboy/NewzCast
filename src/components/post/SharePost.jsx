import PostText from "./PostText"
import MainButton from '../landing/MainButton'
import { BsFillCameraVideoFill } from "react-icons/bs";
import { IoMdCamera } from "react-icons/io";
import { useState } from "react"
import PostFile from "./PostFile";

function SharePost() {
    const [postText, setPostText] = useState("")

    return (
        <div className="w-[480px] min-h-[110px] duration-500 bg-white rounded-md flex flex-col justify-between px-2 py-3">
            <PostText text={postText} handleChange={setPostText} />
            <div className="flex justify-between items-center w-full">


                <div className="flex items-center justify-between w-2/5 ">

                    <PostFile
                        title={'Video'}
                        accept={'video/mp4,video/x-matroska'}
                        logo={<BsFillCameraVideoFill className="text-lg text-purple-1000" />} />

                    <span className="bg-gray-300 w-[1px] h-4 "></span>

                    <PostFile
                        title={'Photo'}
                        accept={'image/*'}
                        logo={<IoMdCamera className="text-lg text-purple-1000" />} />

                </div>

                <MainButton title={'Share'} lgBTN={false} styles={'bg-purple-1000 text-white p-2'} action={() => alert("share")} />


            </div>
        </div>
    )
}

export default SharePost