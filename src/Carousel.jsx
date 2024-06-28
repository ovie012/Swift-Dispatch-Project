import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import SwiperCore, { Navigation, Pagination } from "swiper";
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css";

// Install modules
SwiperCore.use([Navigation, Pagination]);

const Carousel = () => {
  return (
    <div className="swiper-container">
      <Swiper
        slidesPerView={1}
        spaceBetween={20}
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
        navigation
        pagination={{ clickable: true }}
      >
        <SwiperSlide>
          <div className="flex flex-col items-center text-center">
            <img src="image1.jpg" alt="Image 1" className="w-full" />
            <h3 className="text-xl font-bold mt-2">Heading 1</h3>
            <p className="text-sm text-gray-600">Description for image 1</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col items-center text-center">
            <img src="image2.jpg" alt="Image 2" className="w-full" />
            <h3 className="text-xl font-bold mt-2">Heading 2</h3>
            <p className="text-sm text-gray-600">Description for image 2</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col items-center text-center">
            <img src="image3.jpg" alt="Image 3" className="w-full" />
            <h3 className="text-xl font-bold mt-2">Heading 3</h3>
            <p className="text-sm text-gray-600">Description for image 3</p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Carousel;
