import React from 'react'
import MainLink from './MainLink'
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { FaAppStore } from "react-icons/fa";

function AppDownloadLinks() {

    return (
        <div className=" w-[260px] h-24 bg-white rounded-md flex flex-col justify-around  md:mt-20 px-4 py-4 ">
            <h3 className="font-bold text-sm ">
                Available in
            </h3>
            <div className="flex justify-between items-center">
                <MainLink title={'App Store'} styles={'w-28 h-7 rounded-xl text-sm  bg-blue-900 justify-evenly '} icon={<FaAppStore />} />
                <MainLink title={'Play Store'} styles={'w-28 h-7  rounded-xl text-sm  bg-blue-900 justify-evenly '} icon={<IoLogoGooglePlaystore />} />
            </div>

        </div>

    )
}

export default AppDownloadLinks