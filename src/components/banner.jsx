"use client";
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";

const BannerSlider = () => {
  return (
    <>
      <div className="md:max-w-[100%] mx-auto pt-[82px]">
        <Swiper
          className="mySwiper hidden md:bg-none"
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          loop={true}
          modules={[Autoplay]}
        >
          <SwiperSlide className="items-center md:hidden bg-[url('/images/background.jpg')] bg-cover bg-center h-screen flex justify-center">
            <Image
              src="/1.png" // Corrected from '/1,png' to '/1.png'
              alt="Slide 1"
              layout="fill" // Use layout="fill" to fill the container
              objectFit="cover" // Ensures the image fits nicely
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/2.png"
              alt="Slide 2"
              layout="fill" // Use layout="fill"
              objectFit="cover"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/3.png"
              alt="Slide 3"
              layout="fill" // Use layout="fill"
              objectFit="cover"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default BannerSlider;
