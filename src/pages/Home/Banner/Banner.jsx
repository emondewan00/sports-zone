import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import "swiper/css/bundle";
import PopularClass from "../PopularClass/PopularClass";
import img from "../../../assets/cover-Img.jpg";
import PopularInstructor from "../PopularInstructor/PopularInstructor";
import { Link } from "react-router-dom";

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
            <div>
              <div className=" md:h-[70vh]">
                <img
                  className="  w-full brightness-75 absolute object-fill"
                  src="/cover/cover6.jpg"
                  alt=""
                />
                <div className="bg-white/20 flex justify-center items-center max-w-md mx-auto p-4 md:top-40 relative z-10">
                  <div className="space-y-3">
                    <h1 className="text-3xl text-white capitalize">
                      Play with heart, compete with fire, and leave it all on
                      the field.
                    </h1>
                    <Link to="/allClass" className="btn btn-secondary">See Classes</Link>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <div className=" md:h-[70vh]">
                <img
                  className=" w-full brightness-75 absolute object-fill object-center"
                  src="/cover/cover1.jpg"
                  alt=""
                />
                <div className="bg-white/20 flex justify-center items-center max-w-md mx-auto p-4 md:top-40 relative z-10">
                  <div className="space-y-3">
                    <h1 className="text-3xl text-white capitalize">
                      Push your limits, break barriers, and achieve greatness
                    </h1>
                    <Link to="/allClass" className="btn btn-secondary">See Classes</Link>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <div className=" md:h-[70vh]">
                <img
                  className=" w-full brightness-75 absolute object-fill object-center"
                  src="/cover/cover2.jpg"
                  alt=""
                />
                <div className="bg-white/20 flex justify-center items-center max-w-md mx-auto p-4 md:top-40 relative z-10">
                  <div className="space-y-3">
                    <h1 className="text-3xl text-white capitalize">
                      Embrace the thrill of victory and the sweat of hard work.
                    </h1>
                    <Link to="/allClass" className="btn btn-secondary">See Classes</Link>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <div className=" md:h-[70vh]">
                <img
                  className=" w-full brightness-75 absolute object-fill object-center"
                  src="/cover/cover3.jpg"
                  alt=""
                />
                <div className="bg-white/20 flex justify-center items-center max-w-md mx-auto p-4 md:top-40 relative z-10">
                  <div className="space-y-3">
                    <h1 className="text-3xl text-white capitalize">
                      Sports: where legends are made and dreams become reality.
                    </h1>
                    <Link to="/allClass" className="btn btn-secondary">See Classes</Link>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <PopularClass />
      <PopularInstructor />
    </div>
  );
};

export default Banner;
