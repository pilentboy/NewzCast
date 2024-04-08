import LandingContainer from "./landingContainer"
import LandingWrapper from "./landingWrapper"
import LandingButton from './landingButton'
import LandingMainText from "./landingMainText"
import SmallBox from "./smallBox"
import SmallBoxIcon from "./smallBoxIcon"
import { IoMdMusicalNote } from "react-icons/io";
import SmallBoxText from "./smallBoxText"
import SmallBoxCloseBTN from "./smallBoxCloseBTN"
import { BsCameraVideoFill } from "react-icons/bs";

export default function LandingMain() {

    return (
        <>
            <LandingContainer styles={'min-h-lvh bg-white py-10'}>

                <LandingWrapper>

                    <LandingMainText text={"Share videos upto 1 min timeframe with selecting news zingle."} />

                    <LandingButton title={'Get Started'} styles={' font-bold bg-purple-1000  w-28 h-9 text-sm'} />
                </LandingWrapper>

                <LandingWrapper>
                    <div className="rounded-md border border-1 border-gray-200  w-[65%] mx-auto h-[280px] flex flex-col px-6 py-6 space-y-8 md:w-[400px] lg:w-[350px]">

                        <h1 className="font-medium">
                            My sons first Rugby Match Live!
                        </h1>

                        <div className="flex items-center space-x-2">
                            <SmallBox styles={'border border-1 border-purple-1000 '}>
                                <SmallBoxIcon icon={<IoMdMusicalNote />} />
                                <SmallBoxText title={'Music 1'} />
                                <SmallBoxCloseBTN />
                            </SmallBox>
                            <SmallBox styles={'border border-1 border-purple-1000 '}>
                                <SmallBoxIcon icon={<BsCameraVideoFill />} />
                                <SmallBoxText title={'36 Sec'} />
                                <SmallBoxCloseBTN />
                            </SmallBox>
                            <SmallBox styles={'border border-dashed	 border-1 border-purple-1000 '}>
                                <SmallBoxIcon icon={<BsCameraVideoFill />} />
                                <SmallBoxText title={'Add'} />
                                <SmallBoxCloseBTN />
                            </SmallBox>
                        </div>

                        <div className="flex justify-between items-center">
                            <span className="text-gray-400 text-sm">
                                66/100
                            </span>
                            <LandingButton title={'Share'} styles={'bg-purple-1000 w-24 h-8 '} />
                        </div>


                    </div>
                </LandingWrapper>


            </LandingContainer>
        </>
    )
}