
import { CgBorderStyleSolid } from "react-icons/cg";

function CommentBoxModal({children}) {
  return (
    <div className="absolute bottom-0 left-[50%] translate-x-[-50%] mx-auto bg- flex flex-col w-screen overflow-y-auto h-[500px] bg-black border-white  border-t-2 rounded-t-lg px-3 bottom-box-anima lg:h-[400px] lg:w-3/6">
      <CgBorderStyleSolid className="text-white mx-auto mt-2"/>
      <h1  className="text-center text-stone-600  text-base mt-1  ">comments</h1>
      {children}
    </div>
  )
}

export default CommentBoxModal