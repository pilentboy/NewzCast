import Wrapper from "../authenticate/Wrapper"
import SliderItemWrapper from "./SliderItemWrapper"
import ShareVideoIMG from '../../assets/images/share-video.png'
import Following from '../../assets/images/following.png'
import ShareTextPost from '../../assets/images/share-post.png'
import MainText from "../landing/MainText"
import { useEffect, useState } from "react"

export default function SliderContainer() {

    const [sliderIndex, SetSliderIndex] = useState(0)
    const [mySliders, setMySliders] = useState([])
    const SlideShowData = [
        {
            src: ShareVideoIMG,
            text: 'Share videos upto 1 min timeframe with selecting  news zingle.'
        },
        {
            src: Following,
            text: 'Follow your favourite  Celebrities, Influencers, Media Journalists and many more for getting realtime unbaised News.'
        },
        {
            src: ShareTextPost,
            text: 'Share the news upto 100   words per segment. However for Truly Verified  upto 300.'
        }
    ]

    const Sliders = () => {
        const myImages = SlideShowData.map((item, id) => (
            <SliderItemWrapper key={id}>
                <MainText styles={'text-white text-2xl'} text={item.text} />
                <img src={item.src} className="rounded-md h-1/2 " />
            </SliderItemWrapper>
        ))
        return myImages
    }

    useEffect(() => {
        setMySliders(Sliders())
    }, [])

    return (
        <Wrapper styles={'header-bg px-40 hidden lg:flex lg:flex-col'}>

            {
                mySliders[sliderIndex]
            }

        </Wrapper>
    )
}