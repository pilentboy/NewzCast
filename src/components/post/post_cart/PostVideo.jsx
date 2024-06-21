import ReactPlayer from "react-player"
import { FaCirclePlay } from "react-icons/fa6";
import { FaPauseCircle } from "react-icons/fa";

function PostVideo({url,playingVideo,setPlayingVideo}) {
  

  return (
    <>
        <div className='w-full h-80 rounded-md  overflow-hidden relative ' onClick={()=> setPlayingVideo(v=> !v)} >
             <ReactPlayer 
                url={url}
                playing={playingVideo}    
                width='100%'
                height='100%'
                onEnded={()=> setPlayingVideo(false)}
            />

        <div className="text-purple-1000 text-3xl absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
          {
            playingVideo ? <FaPauseCircle className="animate__fadeOut animate__animated animate__delay-0s" /> : <FaCirclePlay className="animate__animated  animate__fadeIn animate__delay-0s "/>
          }
        </div>


        </div>

    </>

  )
}

export default PostVideo