import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import "swiper/css/bundle";
import PopularClass from "../PopularClass/PopularClass";
import CustomerReview from "../Review/CustomerReview";
import PopularInstructor from "../PopularInstructor/PopularInstructor";
import { Link } from "react-router-dom";

const Banner = () => {
  const slider = [
    {
      id: 1,
      img: "/cover/cover6.jpg",
      quote:
        "Play with heart, compete with fire, and leave it all on the field.",
    },
    {
      id: 2,
      img: "/cover/cover1.jpg",
      quote: "Push your limits, break barriers, and achieve greatness",
    },
    {
      id: 3,
      img: "/cover/cover2.jpg",
      quote: " Embrace the thrill of victory and the sweat of hard work.",
    },
    {
      id: 4,
      img: "/cover/cover3.jpg",
      quote: "Sports: where legends are made and dreams become reality.",
    },
    {
      id: 5,
      img: "/cover/cover4.jpg",
      quote: " Embrace the thrill of victory and the sweat of hard work.",
    },
  ];

  return (
    <div>
      <div>
        <Swiper
          pagination={{ dynamicBullets: true }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          {slider.map((s) => (
            <SwiperSlide key={s.id}>
              <div className=" md:h-[70vh]">
                <img
                  className=" w-full brightness-75 absolute object-fill object-center"
                  src={s.img}
                  alt=""
                />
                <div className="bg-white/20 flex justify-center items-center max-w-md mx-auto p-4 md:top-40 relative z-10">
                  <div className="space-y-3">
                    <h1 className="text-3xl text-white capitalize">
                      {s.quote}
                    </h1>
                    <Link to="/allClass" className="btn btn-secondary">
                      See Classes
                    </Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <PopularClass />
      <PopularInstructor />
      <CustomerReview />
    </div>
  );
};

export default Banner;
