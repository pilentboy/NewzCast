import LandingNav from "./landingNav"
import LandingContainer from "./landingContainer"
import appScreenshot from '../../assets/images/homephoneview.png'
import NavButton from "./navButton"
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { FaAppStore } from "react-icons/fa";

export default function LandingHeader() {

    return (
        <header>
            <div className="bg-sky-800 w-full px-10  min-h-lvh py-4 md:py-10 ">
                <LandingNav />

                <LandingContainer>
                    <div className="flex flex-col">
                        <div className="space-y-7 hidden md:block">
                            <h1 className="text-white text-5xl  font-bold"> Share the Newz!</h1>
                            <NavButton title={'Get Started'} styles={' font-bold bg-blue-900  w-28 h-9 text-sm'} />
                        </div>
                        <div className=" w-[260px] h-24 bg-white rounded-md flex flex-col justify-around  md:mt-20 px-4 py-4 ">
                            <h3 className="font-bold text-sm ">
                                Available in
                            </h3>
                            <div className="flex justify-between items-center">
                                <NavButton title={'App Store'} styles={'w-28 h-7 rounded-xl text-sm  bg-blue-900 justify-evenly '} icon={<FaAppStore />} />
                                <NavButton title={'Play Store'} styles={'w-28 h-7  rounded-xl text-sm  bg-blue-900 justify-evenly '} icon={<IoLogoGooglePlaystore />} />
                            </div>
                        </div>

                    </div>
                    <img src={appScreenshot} className="w-[250px] h-[460px] " />
                </LandingContainer>

            </div>
        </header>
    )
}