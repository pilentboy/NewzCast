import Wrapper from "../authenticate/Wrapper"
import SliderItemWrapper from "./SliderItemWrapper"
import ShareVideoIMG from '../../assets/images/share-video.png'
import Following from '../../assets/images/following.png'
import ShareTextPost from '../../assets/images/share-post.png'
import MainText from "../landing/MainText"
import { useEffect, useState } from "react"
import SliderCircleBTN from "./SliderCircleBTN"

export default function Slider() {

    const [currentSlideIndex, SetCurrentSlideIndex] = useState(0)
    const [mySliders, setMySliders] = useState([])

    const SlideShowData = [
        {
            src: ShareVideoIMG,
            text: 'Share videos upto 1 min timeframe with selecting  news zingle.'
        },
        {
            src: Following,
            text: 'Follow your favourite  Celebrities, Media Journalists and many more.'
        },
        {
            src: ShareTextPost,
            text: 'Share the news upto 100   words per segment. However for Truly Verified  upto 300.'
        }
    ]

    const Sliders = () => {
        const SliderItems = SlideShowData.map((item, id) => (
            <SliderItemWrapper key={id}>
                <MainText styles={'text-white text-2xl'} text={item.text} />
                <img src={item.src} className="rounded-md h-1/2 " />
            </SliderItemWrapper>
        ))
        return SliderItems
    }

    const handleSliderChangeButton = (sliderID) => {
        SetCurrentSlideIndex(sliderID)
    }

    useEffect(() => {
        setMySliders(Sliders())
    }, [])

    useEffect(() => {
        const interval = setInterval(() => {
            SetCurrentSlideIndex(prevIndex => (prevIndex >= SlideShowData.length - 1 ? 0 : prevIndex + 1));
        }, 10000);

        return () => clearInterval(interval);
    }, []);


    return (
        <Wrapper styles={'header-bg px-40 hidden lg:w-1/2  lg:flex lg:flex-col'}>

            {
                mySliders[currentSlideIndex]
            }


            <div className="flex items-center space-x-2 absolute bottom-10">

                {
                    SlideShowData.map((item, id) => (
                        <SliderCircleBTN key={id} handleClick={handleSliderChangeButton} buttonID={id} active={currentSlideIndex === id ? true : false} />
                    ))
                }

            </div>

        </Wrapper>
    )
}