import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import "swiper/css/bundle";
import PopularClass from "../PopularClass/PopularClass";
import img from "../../../assets/cover-Img.jpg";
import PopularInstructor from "../PopularInstructor/PopularInstructor";

const Banner = () => {
  return (
    <div>
      <div>
        <Swiper
          pagination={{ dynamicBullets: true }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img className="h-[60vh] w-full object-fill" src={img} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="h-[60vh] w-full object-fill" src={img} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="h-[60vh] w-full object-fill" src={img} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="h-[60vh] w-full object-fill" src={img} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="h-[60vh] w-full object-fill" src={img} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="h-[60vh] w-full object-fill" src={img} alt="" />
          </SwiperSlide>
        </Swiper>
      </div>
      <PopularClass />
      <PopularInstructor />
    </div>
  );
};

export default Banner;
