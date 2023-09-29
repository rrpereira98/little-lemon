import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const dishes = [];

export function Specials() {
  return (
    <div className="specials">
      <div className="title-area">
        <h1>Specials</h1>
        <button>Online menu</button>
      </div>
      <div className="swiper-container">
        <Swiper
          spaceBetween={50}
          slidesPerView={3}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide>
            <div className="dish-card">Slide 1</div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="dish-card">Slide 2</div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="dish-card">Slide 3</div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="dish-card">Slide 4</div>
          </SwiperSlide>
          ...
        </Swiper>
      </div>
    </div>
  );
}
