"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Autoplay, Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useRef } from "react";

type MainSliderProps = {
  sliderElements: { id: number; element: React.ReactNode }[];
  autoPlay?: boolean;
  slidesPreview?: number;
  spaceBetweenSlides?: number;
  centeredSlides?: boolean;
  loop?: boolean;
  breakPoints?: {
    [key: number]: {
      slidesPerView?: number;
      spaceBetween?: number;
    };
  };
  mainClassName?: string;
  wrapperClassName?: string;
  slideClassName?: string;
  showArrows?: boolean;
};

export const MainSlider = ({
  sliderElements,
  autoPlay = false,
  slidesPreview = 4,
  spaceBetweenSlides = 30,
  centeredSlides = false,
  loop = false,
  breakPoints,
  mainClassName = "pt-2 lg:pt-40",
  wrapperClassName = "px-0",
  slideClassName = "flex max-w-[310px] items-center justify-center",
  showArrows = true,
}: MainSliderProps) => {
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
    <div className={mainClassName}>
      <Swiper
        ref={swiperRef}
        modules={[Navigation, Pagination, A11y, Autoplay]}
        slidesPerView={slidesPreview}
        spaceBetween={spaceBetweenSlides}
        onSwiper={(swiper) => console.log(swiper)}
        loop={loop}
        centeredSlides={centeredSlides}
        wrapperClass={wrapperClassName}
        navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
        }}
        pagination={{
          clickable: true,
          el: ".main-pagination",
          type: "bullets",
        }}
        breakpoints={breakPoints}
        autoplay={autoPlay}
      >
        {sliderElements?.map((item) => (
          <SwiperSlide className={slideClassName} key={item?.id}>
            {item?.element}
          </SwiperSlide>
        ))}
        {showArrows && (
          <div className="absolute left-0 right-0 top-1/2 z-[9999] flex -translate-y-1/2 items-center justify-between">
            <div
              className="cursor-pointer bg-paragraph p-4 text-lg text-svg"
              onClick={handlePrev}
            >
              <IoIosArrowBack className="rtl:-scale-x-100" width={20} />
            </div>

            <div
              className="cursor-pointer bg-paragraph p-4 text-lg text-svg"
              onClick={handleNext}
            >
              <IoIosArrowForward className="rtl:-scale-x-100" width={20} />
            </div>
          </div>
        )}
        <div className="main-pagination flex w-full items-center justify-center pt-10"></div>
      </Swiper>
    </div>
  );
};
