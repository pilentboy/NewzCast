import { CiCircleInfo } from "react-icons/ci";
import { useState } from "react";

export default function InfoBox({title,textContent}) { // test 
    const [isHovered, setIsHovered] = useState(false);

    return <>

        <div className="relative">
            <CiCircleInfo
                className='text-purple-1000 text-xl cursor-pointer'
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            />

            <div className={`w-[340px] py-2 px-2   rounded-md  -right-11 top-10 bg-gray-200 border border-1 border-gray-200 duration-4000 font-sans info-box  absolute lg:-top-4  lg:right-[-370px] cursor-text ${isHovered ? 'block' : 'hidden'}`}>

                <h1 className='text-sm  bg-purple-1000 my-1 text-start text-white font-medium
                 rounded-r-md 
                 p-1
                '>
                    {title}
                </h1>
                <p className='text-black   font-semibold text-[13px] text-justify '>
                 {textContent}
                </p>

            </div>

        </div>



    </>
}