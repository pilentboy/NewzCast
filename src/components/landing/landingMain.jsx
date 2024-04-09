import LandingContainer from "./landingContainer"
import LandingWrapper from "./landingWrapper"
import LandingButton from './landingButton'
import LandingMainText from "./landingMainText"
import SmallBox from "./smallBox"
import SmallBoxIcon from "./smallBoxIcon"
import { IoMdMusicalNote, IoIosAddCircleOutline } from "react-icons/io";
import SmallBoxText from "./smallBoxText"
import SmallBoxCloseBTN from "./smallBoxCloseBTN"
import { BsCameraVideoFill } from "react-icons/bs";
import LandingSecondMainText from './landingSecondMainText'
import LandingMainBox from "./landingMainBox"
import { FaCamera } from "react-icons/fa";
import coloredLogo from '../../assets/images/NewzKast new Final Truly Verified-01.png'
import { FiTrendingUp } from "react-icons/fi";
import postScreenShot from '../../assets/images/Annotation 2024-04-08 235717.png'
import followingScreenShot from '../../assets/images/Annotation 2024-04-09 002220.png'

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

                        <div className="flex items-center space-x-2  ">
                            <SmallBox styles={'border border-1 border-purple-1000  w-36 h-28'}>
                                <SmallBoxIcon icon={<IoMdMusicalNote />} styles={'text-2xl text-purple-1000'} />
                                <SmallBoxText title={'Music 1'} styles={'text-purple-1000'} />
                                <SmallBoxCloseBTN />
                            </SmallBox>
                            <SmallBox styles={'border border-1 border-purple-1000  w-36 h-28 '}>
                                <SmallBoxIcon icon={<BsCameraVideoFill />} styles={'text-2xl text-purple-1000'} />
                                <SmallBoxText title={'36 Sec'} styles={'text-purple-1000'} />
                                <SmallBoxCloseBTN />
                            </SmallBox>
                            <SmallBox styles={'border border-dashed	 border-1 border-purple-1000  w-36 h-28 '}>
                                <SmallBoxIcon icon={<IoIosAddCircleOutline />} styles={'text-2xl text-purple-1000'} />
                                <SmallBoxText title={'Add'} styles={'text-purple-1000'} />
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

            <LandingContainer styles={'min-h-lvh bg-white py-10'}>

                <LandingWrapper>

                    <img src={coloredLogo} className="w-[150px]" />

                    <LandingMainBox>

                        <div className="flex justify-between items-center">
                            <span className="font-medium">
                                Share some newz....
                            </span>
                            <span className="text-gray-400 text-sm">
                                0/00
                            </span>
                        </div>

                        <div className="flex justify-between items-center">
                            <div className="flex items-center space-x-2">
                                <SmallBoxIcon icon={<BsCameraVideoFill />} styles={'text-sm text-purple-1000'} />
                                <span className="text-sm">
                                    Video
                                </span>
                            </div>

                            <div className="flex items-center space-x-2">
                                <SmallBoxIcon icon={<FaCamera />} styles={'text-sm text-purple-1000'} />
                                <span className="text-sm">
                                    Photo
                                </span>
                            </div>

                            <LandingButton title={'Share'} styles={'bg-purple-1000 w-24 h-8 '} />

                        </div>

                    </LandingMainBox>

                </LandingWrapper>

                <LandingWrapper>

                    <LandingMainText text={"Share the news upto 100 words per segment. However for Truly Verifiedupto 300."} />

                    <LandingSecondMainText text={'Talk about truly verified. Ex- Celibrities,Media Journalists etc'} />

                    <LandingButton title={'Get Started'} styles={' font-bold bg-purple-1000  w-28 h-9 text-sm'} />

                </LandingWrapper>




            </LandingContainer>

            <LandingContainer styles={'min-h-lvh bg-white py-10'}>

                <LandingWrapper>

                    <SmallBox styles={'bg-purple-1000 border border-1  w-16 h-20 '}>
                        <SmallBoxIcon icon={<FiTrendingUp />} styles={'text-white text-2xl'} />
                        <SmallBoxText title={'Trending'} styles={'text-white'} />
                    </SmallBox>
                    <LandingMainText text={"See all the trending Newsposts in one app.."} />

                    <LandingButton title={'Get Started'} styles={' font-bold bg-purple-1000  w-28 h-9 text-sm'} />
                </LandingWrapper>

                <LandingWrapper>

                    <img src={postScreenShot} className=" hover:scale-110 duration-200" />
                </LandingWrapper>




            </LandingContainer >


            <LandingContainer styles={'min-h-lvh bg-white py-10'}>



                <LandingWrapper>

                    <img src={followingScreenShot} className=" hover:scale-110 duration-200" />
                </LandingWrapper>

                <LandingWrapper>

                    <LandingMainText text={"Follow your favourite Celebrities, Influencers, Media Journalists and many more for getting realtime unbaised News."} />

                    <LandingButton title={'Get Started'} styles={' font-bold bg-purple-1000  w-28 h-9 text-sm'} />
                </LandingWrapper>


            </LandingContainer >
        </>
    )
}