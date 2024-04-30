import { CiCircleInfo } from "react-icons/ci";
import { useState } from "react";

export default function VerifyInfo() {
    const [isHovered, setIsHovered] = useState(false);

    return <>

        <div className="relative">
            <CiCircleInfo
                className='text-purple-1000 text-xl cursor-pointer'
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            />

            <div className={`w-[350px] py-2 px-2   rounded-md  -right-10 top-10 bg-white border border-1 border-gray-200  absolute lg:-top-4  lg:right-[-370px] cursor-text ${isHovered ? 'block' : 'hidden'}`}>

                <h1 className='text-sm my-1 text-start text-purple-1000 font-medium'>
                    What types of accounts get verified?
                </h1>
                <p className='text-gray-400 font-medium text-xs text-justify'>
                    An account may be verified if it is determined to be an
                    account of public interest. Typically this includes accounts
                    maintained by users in media, journalism, government,
                    politics, business, religion,music, sports, celebrity, and other
                    areas of public interests
                </p>

            </div>

        </div>



    </>
}