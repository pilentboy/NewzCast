import Nav from "./Nav"
import Container from "./Container"
import appScreenshot from '../../assets/images/homephoneview.png'
import Button from "./Button"
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { FaAppStore } from "react-icons/fa";

export default function LandingHeader() {

    return (
        <header>
            <div className="header-bg w-full  px-2 lg:px-10  min-h-lvh py-4 md:py-12 ">

                <Nav />

                <Container styles={'mt-28 md:mt-14'}>
                    <div className="flex flex-col items-center  lg:items-start  ">
                        <div className="space-y-7 my-16 hidden md:block lg:my-0">
                            <h1 className="text-white text-5xl  font-bold"> Share the Newz!</h1>
                            <Button title={'Get Started'} styles={' font-bold bg-purple-1000  w-28 h-9 text-sm'} />
                        </div>
                        <div className=" w-[260px] h-24 bg-white rounded-md flex flex-col justify-around  md:mt-20 px-4 py-4 ">
                            <h3 className="font-bold text-sm ">
                                Available in
                            </h3>
                            <div className="flex justify-between items-center">
                                <Button title={'App Store'} styles={'w-28 h-7 rounded-xl text-sm  bg-blue-900 justify-evenly '} icon={<FaAppStore />} />
                                <Button title={'Play Store'} styles={'w-28 h-7  rounded-xl text-sm  bg-blue-900 justify-evenly '} icon={<IoLogoGooglePlaystore />} />
                            </div>
                        </div>

                    </div>
                    <img src={appScreenshot} className="lg:w-[250px] lg:h-[460px]" />
                </Container>


            </div>
        </header>
    )
}