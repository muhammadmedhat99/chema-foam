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
export const Slider = ({ data }: any) => {
  const [isPlaying, setIsPlaying] = useState(true);

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
        {data?.map((item: any) => (
          <SwiperSlide key={item?.id}>
            <div className="relative h-screen w-full px-2 lg:px-[120px]">
              <Image
                src={item?.Background_image}
                alt="slider 1"
                width={1280}
                height={1280}
                className="absolute bottom-0 left-0 right-0 top-0 z-0 h-full w-full object-cover"
              />
              <div className="absolute left-0 top-0 z-0 h-full w-full bg-gradient-to-t from-[#000D2B] to-[#F5F5F7CC]" />
              <div className="relative flex h-full flex-col justify-center gap-6 md:max-w-3xl">
                <h1 className="text-6xl font-bold text-white">{item?.title}</h1>
                <p className="text-xl text-paragraph">{item?.description}</p>
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
        ))}

        <div className="absolute left-1/2 right-1/2 top-[90%] z-[12] flex items-center justify-center gap-3 lg:left-[120px] lg:right-[unset] lg:top-[72%]">
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
        <div className="custom-pagination hidden lg:flex"></div>
      </Swiper>
      <Image
        src="/imgs/logos/icon.svg"
        alt="Chema Logo"
        width={146}
        height={146}
        className="absolute bottom-20 right-20 z-10 hidden lg:block"
      />
    </div>
  );
};
