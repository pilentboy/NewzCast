import { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";


function BoxBTN({title}) {

    const [isHover,setButtonHover]=useState(false)



  return (
    <button
    onMouseEnter={() => setButtonHover(true)}
    onMouseLeave={() => setButtonHover(false)}

     className="my-2 w-[270px] flex items-center justify-between px-4 py-7  h-10 bg-white border border-gray-200 rounded-md text-black text-sm md:w-[400px]"

     >
        {title}
        <IoIosArrowForward className={` duration-200 ${isHover ? 'translate-x-2' : 'translate-x-0'}`} />
    </button>
  )
}

export default BoxBTN