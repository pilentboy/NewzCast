import { Swiper, SwiperSlide } from "swiper/react"
import {Pagination} from "swiper/modules"
import 'swiper/css/effect-fade'
import 'swiper/css/navigation'
import 'swiper/css'
import PostImage from "./PostImage"
import PostVideo from "./PostVideo"

function PostSlider({children}) {

  return (
        <Swiper
            pagination={{
            dynamicBullets: true
            }}
            modules={[Pagination]}
            speed={700}
            slidesPerView={1}
            className="w-full h-80"
        >
          {children}
        </Swiper>
  )
}

export default PostSlider