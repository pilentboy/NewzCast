import ReactPlayer from "react-player"
import { useState } from "react"

function PostVideo({url,playingVideo,setPlayingVideo}) {
  
  // const [playingVideo,setPlayingVideo]= useState(false)

  return (
    <>
        <div className='w-full h-80 rounded-md  overflow-hidden' onClick={()=> setPlayingVideo(v=> !v)} >
             <ReactPlayer 
                url={url}
                playing={playingVideo}    
                width='100%'
                height='100%'
            />
        </div>

    </>

  )
}

export default PostVideo