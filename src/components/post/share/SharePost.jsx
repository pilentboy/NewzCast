import PostText from "./PostText"
import { BsFillCameraVideoFill } from "react-icons/bs";
import { IoMdCamera } from "react-icons/io";
import {useState, useContext } from "react"
import PostMedia from "./PostMedia";
import { LoginContext } from "../../../context/LoginContext";


function SharePost({ TextLimit }) {

    const [postText, setPostText] = useState("")
    const [selectedFiles, setSelectedFiles] = useState([])
    const {handleUploadNewPost}=useContext(LoginContext)


    const handleSharePost = (e) => {
        e.preventDefault()
        if(postText){
			handleUploadNewPost(postText,selectedFiles)
		}
    }


    const handleInputChange = (e) => {
        const file = Array.from(e.target.files)
        console.log(file)
        const newFilePath = file.map(file => URL.createObjectURL(file))
        const updatedFiles = [...selectedFiles, ...newFilePath]
        setSelectedFiles(updatedFiles)
        console.log(updatedFiles)
    }



    return (
        <form action="/" onSubmit={handleSharePost}>
            <div className="w-[350px] min-h-[150px] duration-300 bg-white border border-gray-100 shadow-md rounded-md flex flex-col justify-between px-2 py-2  mb-3 md:w-460">

                <PostText text={postText} TextLength={TextLimit} handleChange={setPostText} />

                <div className="flex justify-between items-center w-full">


                    <div className="flex items-center justify-between w-2/5 ">

                        <PostMedia
                            title={'Video'}
                            validFormats={'video/mp4,video/x-matroska'}
                            logo={<BsFillCameraVideoFill className="text-lg text-purple-1000" />}
                            handleInputChange={handleInputChange}
                        />

                        <span className="bg-gray-300 w-[1px] h-4 "></span>

                        <PostMedia
                            title={'Photo'}
                            validFormats={'image/*'}
                            logo={<IoMdCamera className="text-lg text-purple-1000" />}
                            handleInputChange={handleInputChange}
                        />

                    </div>

                    <button type="submit"
                        className="w-20 h-8 rounded-md bg-purple-1000 text-white text-center hover:opacity-90 md:w-28 md:h-10"
                    >
                        Share
                    </button>

                </div>
            </div>
        </form>

    )
}

export default SharePost