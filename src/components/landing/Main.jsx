import Container from "./Container"
import Wrapper from "./Wrapper"
import Button from './Button'
import MainText from "./MainText"
import SmallBox from "./SmallBox"
import SmallBoxIcon from "./SmallBoxIcon"
import { IoMdMusicalNote, IoIosAddCircleOutline } from "react-icons/io";
import SmallBoxText from "./SmallBoxText"
import CloseBTN from "./CloseBTN"
import { BsCameraVideoFill } from "react-icons/bs";
import GetStartedBTN from "./GetStartedBTN"
import SecondMainText from './SecondMainText'
import MainBox from "./MainBox"
import { FaCamera } from "react-icons/fa";
import { FiTrendingUp } from "react-icons/fi";
import postScreenShot from '../../assets/images/Annotation 2024-04-08 235717.png'
import followingScreenShot from '../../assets/images/Annotation 2024-04-09 002220.png'
import ColoredLogo from "../ColoredLogo"

export default function LandingMain() {

    return (
        <>

            <Container styles={'min-h-lvh bg-white py-10'}>

                <Wrapper>

                    <MainText text={"Share videos upto 1 min timeframe with selecting news zingle."} styles={'text-3xl'} />

                    <GetStartedBTN />

                </Wrapper>

                <Wrapper>


                    <MainBox styles={'h-[280px] w-[65%] px-6 py-6  md:w-[400px] lg:w-[350px]'}>


                        <h1 className="font-medium">
                            My sons first Rugby Match Live!
                        </h1>

                        <div className="flex items-center space-x-2  ">
                            <SmallBox styles={'border border-1 border-purple-1000  w-36 h-28'}>
                                <SmallBoxIcon icon={<IoMdMusicalNote />} styles={'text-2xl text-purple-1000'} />
                                <SmallBoxText title={'Music 1'} styles={'text-purple-1000'} />
                                <CloseBTN />
                            </SmallBox>
                            <SmallBox styles={'border border-1 border-purple-1000  w-36 h-28 '}>
                                <SmallBoxIcon icon={<BsCameraVideoFill />} styles={'text-2xl text-purple-1000'} />
                                <SmallBoxText title={'36 Sec'} styles={'text-purple-1000'} />
                                <CloseBTN />
                            </SmallBox>
                            <SmallBox styles={'border border-dashed	 border-1 border-purple-1000  w-36 h-28 '}>
                                <SmallBoxIcon icon={<IoIosAddCircleOutline />} styles={'text-2xl text-purple-1000'} />
                                <SmallBoxText title={'Add'} styles={'text-purple-1000'} />
                                <CloseBTN />
                            </SmallBox>
                        </div>

                        <div className="flex justify-between items-center">
                            <span className="text-gray-400 text-sm">
                                66/100
                            </span>
                            <Button title={'Share'} styles={'bg-purple-1000 w-24 h-8 '} />

                        </div>


                    </MainBox>
                </Wrapper>


            </Container>

            <Container styles={'min-h-lvh bg-white py-10'}>

                <Wrapper>

                    <ColoredLogo />

                    <MainBox styles={'w-[340px] h-[210px] px-4 py-3 justify-between '}>

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

                            <Button title={'Share'} styles={'bg-purple-1000 w-24 h-8 '} />

                        </div>

                    </MainBox>

                </Wrapper>

                <Wrapper>

                    <MainText text={"Share the news upto 100 words per segment. However for Truly Verifiedupto 300."} styles={'text-3xl'} />

                    <SecondMainText text={'Talk about truly verified. Ex- Celibrities,Media Journalists etc'} />

                    <GetStartedBTN />


                </Wrapper>




            </Container>

            <Container styles={'min-h-lvh bg-white py-10'}>

                <Wrapper>

                    <SmallBox styles={'bg-purple-1000 border border-1  w-16 h-20 '}>
                        <SmallBoxIcon icon={<FiTrendingUp />} styles={'text-white text-2xl'} />
                        <SmallBoxText title={'Trending'} styles={'text-white'} />
                    </SmallBox>
                    <MainText text={"See all the trending Newsposts in one app.."} styles={'text-3xl'} />

                    <GetStartedBTN />

                </Wrapper>

                <Wrapper>
                    <img src={postScreenShot} />
                </Wrapper>




            </Container >


            <Container styles={'min-h-lvh bg-white py-10'}>



                <Wrapper>

                    <img src={followingScreenShot} />
                </Wrapper>

                <Wrapper>

                    <MainText text={"Follow your favourite Celebrities, Influencers, Media Journalists and many more for getting realtime unbaised News."} styles={'text-3xl'} />

                    <GetStartedBTN />

                </Wrapper>


            </Container >
        </>
    )
}