import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { Pagination } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import LemonDessert from "./assets/lemon dessert.jpg";
import GreekSalad from "./assets/greek salad.jpg";
import Bruchetta from "./assets/brucheta.png";

const dishes = [
  {
    name: "Greek salad",
    price: "5.99",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi",
    image: GreekSalad,
  },
  {
    name: "Lemon dessert",
    price: "5.99",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi",
    image: LemonDessert,
  },
  {
    name: "Bruchetta",
    price: "5.99",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi",
    image: Bruchetta,
  },
  {
    name: "Greek salad",
    price: "5.99",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi",
    image: GreekSalad,
  },
  {
    name: "Greek salad",
    price: "5.99",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi",
    image: GreekSalad,
  },
  {
    name: "Greek salad",
    price: "5.99",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi",
    image: GreekSalad,
  },
];

export function Specials() {
  const listItems = dishes.map((dish) => {
    return (
      <SwiperSlide>
        <div className="dish-card">
          <img src={dish.image} />
          <div className="title-area">
            <h3>{dish.name}</h3>
            <p className="price">{dish.price}</p>
          </div>
          <p className="description">{dish.description}</p>
        </div>
      </SwiperSlide>
    );
  });

  return (
    <div className="specials">
      <div className="title-area">
        <h1>Specials</h1>
        <button>Online menu</button>
      </div>
      <div className="swiper-container">
        <Swiper
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 100,
              centeredSlides: true,
            },
            700: {
              slidesPerView: 2,
              spaceBetween: 100,
              centeredSlides: true,
            },
            1085: {
              slidesPerView: 3,
              spaceBetween: 110,
              centeredSlides: false,
            },
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {listItems}
        </Swiper>
      </div>
    </div>
  );
}
