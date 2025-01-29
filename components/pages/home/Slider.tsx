"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Autoplay, Navigation, Pagination } from "swiper/modules";
import Image from "next/image";
import { Button } from "@/components/global/Button";
import { FaArrowRightLong } from "react-icons/fa6";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { IoIosArrowBack, IoIosArrowForward, IoIosPlay } from "react-icons/io";
import { IoPauseOutline } from "react-icons/io5";
import { useRef, useState } from "react";
export const Slider = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const swiperRef = useRef<any>(null);

  const handlePrev = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  const handleNext = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };
  return (
    <div className="relative">
      <Swiper
        ref={swiperRef}
        modules={[Navigation, Pagination, A11y, Autoplay]}
        slidesPerView={1}
        spaceBetween={0}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
        className="mt-[-100px]"
        navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
        }}
        pagination={{
          clickable: true,
          el: ".custom-pagination",
          type: "bullets",
        }}
        autoplay={isPlaying}
      >
        <SwiperSlide>
          <div className="relative h-screen w-full px-[120px]">
            <Image
              src="/imgs/slider/1.jpg"
              alt="slider 1"
              width={1280}
              height={1280}
              className="absolute bottom-0 left-0 right-0 top-0 z-0 h-full w-full object-cover"
            />
            <div className="absolute left-0 top-0 z-0 h-full w-full bg-gradient-to-t from-[#000D2B] to-[#F5F5F7CC]" />
            <div className="relative flex h-full flex-col justify-center gap-6 md:max-w-3xl">
              <h1 className="text-6xl font-bold text-white">
                Welcome To Chema Foam
              </h1>
              <p className="text-xl text-paragraph">
                lorem Ipsum is simply dummy text of the printing and typesetting
                industry. by injected humour, or randomised words which don't
                look even slightly believable. by injected humour.
              </p>
              <Button
                text="Who We Are"
                isLink={true}
                href="/about"
                className="h-16 w-[262px]"
              >
                <FaArrowRightLong />
              </Button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative h-screen w-full px-[120px]">
            <Image
              src="/imgs/slider/2.jpg"
              alt="slider 2"
              width={1280}
              height={1280}
              className="absolute bottom-0 left-0 right-0 top-0 z-0 h-full w-full object-cover"
            />
            <div className="absolute left-0 top-0 z-0 h-full w-full bg-gradient-to-t from-[#000D2B] to-[#F5F5F7CC]" />

            <div className="relative flex h-full flex-col justify-center gap-6 md:max-w-3xl">
              <h1 className="text-6xl font-bold text-white">
                Welcome To Chema Foam
              </h1>
              <p className="text-xl text-paragraph">
                lorem Ipsum is simply dummy text of the printing and typesetting
                industry. by injected humour, or randomised words which don't
                look even slightly believable. by injected humour.
              </p>
              <Button
                text="Who We Are"
                isLink={true}
                href="/about"
                className="h-16 w-[262px]"
              >
                <FaArrowRightLong />
              </Button>
            </div>
          </div>
        </SwiperSlide>
        <div className="custom-navigation">
          <div
            className="cursor-pointer bg-paragraph p-4 text-lg text-svg"
            onClick={handlePrev}
          >
            <IoIosArrowBack width={20} />
          </div>
          <div
            className="cursor-pointer bg-paragraph p-4 text-xl text-svg"
            onClick={() => {
              setIsPlaying(!isPlaying);
            }}
          >
            {isPlaying ? (
              <IoPauseOutline width={24} />
            ) : (
              <IoIosPlay width={24} />
            )}
          </div>

          <div
            className="cursor-pointer bg-paragraph p-4 text-lg text-svg"
            onClick={handleNext}
          >
            <IoIosArrowForward width={20} />
          </div>
        </div>
        <div className="custom-pagination"></div>
      </Swiper>
      <Image
        src="/imgs/logos/icon.svg"
        alt="Chema Logo"
        width={146}
        height={146}
        className="absolute bottom-20 right-20 z-10"
      />
    </div>
  );
};
