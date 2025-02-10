import React from "react";

import { PageHeader } from "@/components/global/PageHeader";
import { SectionWrapper } from "@/components/global/SectionWrapper";
import {
  BuildingIcon,
  FactorIcon,
  GearIcon,
  HouseIcon,
  TourIcon,
} from "@/components/icons";
import { MainSlider } from "@/components/global/MainSlider";
import Image from "next/image";

type ClientsProps = {};

const slider_elements = [
  {
    id: 1,
    element: (
      <Image
        alt="client image"
        width={640}
        height={640}
        className="h-[120px] w-[120px] object-cover"
        src="/imgs/clients/1.png"
      />
    ),
  },
  {
    id: 2,
    element: (
      <Image
        alt="client image"
        width={640}
        height={640}
        className="h-[120px] w-[120px] object-cover"
        src="/imgs/clients/2.png"
      />
    ),
  },
  {
    id: 3,
    element: (
      <Image
        alt="client image"
        width={640}
        height={640}
        className="h-[120px] w-[120px] object-cover"
        src="/imgs/clients/1.png"
      />
    ),
  },
  {
    id: 4,
    element: (
      <Image
        alt="client image"
        width={640}
        height={640}
        className="h-[120px] w-[120px] object-cover"
        src="/imgs/clients/2.png"
      />
    ),
  },
  {
    id: 5,
    element: (
      <Image
        alt="client image"
        width={640}
        height={640}
        className="h-[120px] w-[120px] object-cover"
        src="/imgs/clients/1.png"
      />
    ),
  },
  {
    id: 6,
    element: (
      <Image
        alt="client image"
        width={640}
        height={640}
        className="h-[120px] w-[120px] object-cover"
        src="/imgs/clients/2.png"
      />
    ),
  },
  {
    id: 7,
    element: (
      <Image
        alt="client image"
        width={640}
        height={640}
        className="h-[120px] w-[120px] object-cover"
        src="/imgs/clients/1.png"
      />
    ),
  },
  {
    id: 8,
    element: (
      <Image
        alt="client image"
        width={640}
        height={640}
        className="h-[120px] w-[120px] object-cover"
        src="/imgs/clients/2.png"
      />
    ),
  },
  {
    id: 9,
    element: (
      <Image
        alt="client image"
        width={640}
        height={640}
        className="h-[120px] w-[120px] object-cover"
        src="/imgs/clients/1.png"
      />
    ),
  },
];

export const Clients = (props: ClientsProps) => {
  return (
    <div className="bg-primary/10 pb-20">
      <SectionWrapper className="max-w-7xl">
        <PageHeader
          title="Chema Foam Projects"
          description="lorem Ipsum is simply dummy text of the printing and typesetting industry. by injected humour, or randomised words which don't look even slightly believable. by injected humour."
        />

        <div className="flex flex-wrap items-center justify-center gap-8 py-11">
          <div className="group flex max-w-[144px] flex-col items-center justify-center gap-4 duration-300 hover:max-w-[320px]">
            <BuildingIcon className="size-16 fill-[#1EBAE5] duration-300 group-hover:size-[84px]" />
            <span className="text-[40px] font-medium text-primary duration-300 group-hover:text-[54px]">
              750
            </span>
            <span className="text-center text-[14px] text-svg duration-300 group-hover:text-[28px]">
              Total Chema Foam Projects
            </span>
          </div>
          <div className="group flex max-w-[144px] flex-col items-center justify-center gap-4 duration-300 hover:max-w-[320px]">
            <HouseIcon className="size-16 fill-[#1EBAE5] duration-300 group-hover:size-[84px]" />
            <span className="text-[40px] font-medium text-primary duration-300 group-hover:text-[54px]">
              2,000
            </span>
            <span className="text-center text-[14px] text-svg duration-300 group-hover:text-[28px]">
              Total Chema Foam Projects
            </span>
          </div>
          <div className="group flex max-w-[144px] flex-col items-center justify-center gap-4 duration-300 hover:max-w-[320px]">
            <GearIcon className="size-16 fill-[#1EBAE5] duration-300 group-hover:size-[84px]" />
            <span className="text-[40px] font-medium text-primary duration-300 group-hover:text-[54px]">
              5,000
            </span>
            <span className="text-center text-[14px] text-svg duration-300 group-hover:text-[28px]">
              Total Chema Foam Projects
            </span>
          </div>
          <div className="group flex max-w-[144px] flex-col items-center justify-center gap-4 duration-300 hover:max-w-[320px]">
            <TourIcon className="size-16 fill-[#1EBAE5] duration-300 group-hover:size-[84px]" />
            <span className="text-[40px] font-medium text-primary duration-300 group-hover:text-[54px]">
              750
            </span>
            <span className="text-center text-[14px] text-svg duration-300 group-hover:text-[28px]">
              Total Chema Foam Projects
            </span>
          </div>
          <div className="group flex max-w-[144px] flex-col items-center justify-center gap-4 duration-300 hover:max-w-[320px]">
            <FactorIcon className="size-16 fill-[#1EBAE5] duration-300 group-hover:size-[84px]" />
            <span className="text-[40px] font-medium text-primary duration-300 group-hover:text-[54px]">
              750
            </span>
            <span className="text-center text-[14px] text-svg duration-300 group-hover:text-[28px]">
              Total Chema Foam Projects
            </span>
          </div>
        </div>

        <PageHeader title="Our Clients" />
      </SectionWrapper>
      <div className="mx-auto bg-white">
        <MainSlider
          autoPlay={true}
          mainClassName="py-10"
          sliderElements={slider_elements}
          slidesPreview={7}
          wrapperClassName="px-0 pg-white items-center"
          showArrows={false}
          breakPoints={{
            320: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            640: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 36,
            },
            1280: {
              slidesPerView: 6,
              spaceBetween: 48,
            },
            1440: {
              slidesPerView: 7,
              spaceBetween: 56,
            },
          }}
        />
      </div>
    </div>
  );
};
