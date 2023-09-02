// swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";

import { motion } from "../../../utils/motion";

export const AboutCarousel = ({ data }) => {
  return (
    <Swiper
      freeMode={true}
      grabCursor={true}
      modules={[FreeMode]}
      className="mySwiper rounded"
      breakpoints={{
        0: {
          slidesPerView: 1,
          spaceBetween: 5,
        },
        640: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 15,
        },
        1280: {
          slidesPerView: 5,
          spaceBetween: 30,
        },
      }}
    >
      <>
        {data?.map((item, index) => {
          return (
            <SwiperSlide key={index} className="p-2">
              <div className="flex flex-col gap-y-2 shadow-xl w-[240px] h-[360px] p-2 rounded-lg mx-auto">
                <div className="w-full h-60 overflow-hidden rounded">
                  <motion.img
                    src={item?.image}
                    alt={item?.title}
                    className="w-full h-full object-cover object-center aspect-square"
                    whileHover={{ scale: 1.1 }}
                    loading="lazy"
                  />
                </div>
                <div className="text-grey h-[120px] rounded overflow-hidden">
                  <p className="font-semibold text-xl">{item?.title}</p>
                  <p className="text-gray-500">{item?.text}</p>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </>
    </Swiper>
  );
};
