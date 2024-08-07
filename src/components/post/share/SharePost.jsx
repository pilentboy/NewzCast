import PostText from "./PostText"
import { BsFillCameraVideoFill } from "react-icons/bs";
import { IoMdCamera } from "react-icons/io";
import {useState, useContext } from "react"
import PostMedia from "./PostMedia";
import { FaCheckSquare } from "react-icons/fa";
import { LoginContext } from "../../../context/LoginContext";
import MediaBox from '../../landing/MediaBox/MediaBox'
import { BsCameraVideoFill } from "react-icons/bs";
import { FaImage } from "react-icons/fa6";
import MediaBoxIcon from '../../landing/MediaBox/MediaBoxIcon'
import MediaBoxText from '../../landing/MediaBox/MediaBoxText'
import CloseBTN from "../../landing/MediaBox/CloseBTN";
import handleUploadNewPost from '../../../utils/handleUploadNewPost'
import SmallAlertBox from '../../alert/smallAlertBox'

function SharePost({ TextLimit }) {

    const [postText, setPostText] = useState("")
    const [postMeidas,setPostMedias]=useState([])
    const [smallAlertDisplay,setSmallAlertDisplay]=useState('hidden')
    const {mainDB,setMainDB,userLoggedInfo}=useContext(LoginContext)

    const handleSharePost = (e) => {
        e.preventDefault()
        if(postText){
            handleUploadNewPost(postText,postMeidas,mainDB,setMainDB,userLoggedInfo)
			// handleUploadNewPost(postText,postMeidas)
            setSmallAlertDisplay('flex')
            setTimeout(()=> setSmallAlertDisplay('hidden'),3000)
		}
        setPostText("")
        setPostMedias([])
    }



    const handleInputChange = (e, mediaType) => {

        const file = Array.from(e.target.files)
        const newFilePath = file.map(file => URL.createObjectURL(file))
        let objectKeyName= mediaType === 'video' ? 'video' : 'image'

        let combiteFiles=[]

        newFilePath.forEach(path => {
            combiteFiles.push({ [objectKeyName]: path });
        })

        const updatedFiles = [...postMeidas, ...combiteFiles];

        console.log(updatedFiles)
        setPostMedias(updatedFiles)
        
    }

    const handleDeleteMeida= (itemPath)=> {
        const newPostMedias=postMeidas.filter(media => media !== itemPath )
        setPostMedias(newPostMedias)
    }




    return (
        <form action="/" onSubmit={handleSharePost}>
            <div className="w-[350px] min-h-[150px] duration-300 bg-white border border-gray-200 shadow-lg rounded-md flex flex-col justify-between px-2 py-2  mb-3 md:w-460">

                <PostText text={postText} TextLength={TextLimit} handleChange={setPostText} />

                {
                        postMeidas.length >=1 ? (
                            <div className=" h-20 px-1 flex items-center justify-start w-full my-1 space-x-2 ">

                            {
                                postMeidas.map((media,id) => {
                                    const mediaType=Object.keys(media)[0]

                                    if(mediaType === 'image'){
                                        return (
                                            <MediaBox key={id} styles={'border border-1 border-purple-1000   w-14 h-16'}>
                                            <MediaBoxIcon icon={<FaImage />} styles={'text-base text-purple-1000'} />
                                            <MediaBoxText title={`File ${id + 1}`} styles={'text-purple-1000 text-xs'} />
                                            <CloseBTN action={()=> handleDeleteMeida(media)} />
                                            </MediaBox>
                                        
                                        )
                                    }
                                    return (
                                        <MediaBox key={id} styles={'border border-1 border-purple-1000   w-14 h-16'}>
                                            <MediaBoxIcon icon={<BsCameraVideoFill />} styles={'text-base text-purple-1000'} />
                                            <MediaBoxText title={`File ${id +1}`} styles={'text-purple-1000 text-xs'} />
                                            <CloseBTN action={()=> handleDeleteMeida(media)} />
                                        </MediaBox>         
                                    )
                          
                                })
                            }
                      
                            
                      
                        </div>
                        ) : null
                }
             


                <div className="flex justify-between items-center w-full">


                    <div className="flex items-center justify-between w-2/5 ">

                        <PostMedia
                            title={'Video'}
                            validFormats={'video/mp4,video/x-matroska'}
                            mediaType={'video'}
                            logo={<BsFillCameraVideoFill className="text-lg text-purple-1000" />}
                            handleInputChange={handleInputChange}
                        />

                        <span className="bg-gray-300 w-[1px] h-4 "></span>

                        <PostMedia
                            title={'Photo'}
                            validFormats={'image/*'}
                            mediaType={'image'}
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


            <SmallAlertBox 
            display={smallAlertDisplay} 
            bgColor='bg-purple-1000'
            title='Post uploaded successfuly'
            icon={<FaCheckSquare  className="text-lg text-white"/>}
            />

        </form>

    )
}

export default SharePost