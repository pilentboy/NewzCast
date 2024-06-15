import { Swiper } from "swiper/react"
import {Pagination} from "swiper/modules"
import 'swiper/css/effect-fade'
import 'swiper/css/navigation'
import 'swiper/css'

function PostSlider({children}) {

  return (
        <Swiper
            pagination={{
            dynamicBullets: true
            }}
            modules={[Pagination]}
            speed={700}
            slidesPerView={1}
            className="w-full h-80 rounded-md"
        >
          {children}
        </Swiper>
  )
}

export default PostSlider