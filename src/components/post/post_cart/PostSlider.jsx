import { Swiper, SwiperSlide } from "swiper/react";
import {Pagination } from "swiper/modules";
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import 'swiper/css';

function PostSlider({ children, slideChange }) {
  return (
    <Swiper
      pagination={{
        dynamicBullets: true,
        clickable: true,
      }}
      modules={[Pagination]}
   
      speed={700}
      slidesPerView={1}
      onSlideChange={() => slideChange(false)}
      className="w-full h-80 rounded-md"
    >
      {children}
    </Swiper>
  );
}

export default PostSlider;
