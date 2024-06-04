

function CommentBoxModal({children}) {
  return (
    <div className="absolute bottom-0 left-[50%] translate-x-[-50%] mx-auto bg- flex flex-col w-screen overflow-y-auto h-[500px] bg-black border-white  border-t-2 rounded-t-lg px-3 bottom-box-anima lg:h-[400px] lg:w-3/6">
      <h1  className="text-center text-white font-bold text-2xl mt-1  ">comments</h1>
      {children}
    </div>
  )
}

export default CommentBoxModal