import ReactPlayer from "react-player"

function PostVideo({playingVideo,setPlayingVideo,url}) {
  return (
    <>
        <div className='w-full rounded-lg overflow-hidden' onClick={()=> setPlayingVideo(v=> !v)} >
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