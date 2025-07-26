"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";

const images = [
  "/autoslide-1.png",
  "/autoslide-2.png",
  "/autoslide-3.png",
  "/autoslide-1.png",
  "/autoslide-2.png",
  "/autoslide-3.png",
];

const Carouselslide = () => {
  return (
    <div className="relative w-full max-w-[1440px] mx-auto py-10">
      {/* White shadow overlay */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-[200px] bg-gradient-to-t from-white to-transparent z-10" />

      <Swiper
        modules={[Autoplay]}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        speed={1000}
        className="w-full relative z-0"
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            {({ isActive }) => (
              <div
                className={`overflow-hidden rounded-2xl shadow-md transition-all duration-700 ease-in-out ${
                  isActive
                    ? "scale-100 h-[450px]"
                    : "scale-90 opacity-80 h-[450px]"
                }`}
              >
                <img
                  src={img}
                  alt={`slide-${index}`}
                  className="w-full h-[450px] md:h-[450px]  object-contain"
                />
              </div>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carouselslide;
