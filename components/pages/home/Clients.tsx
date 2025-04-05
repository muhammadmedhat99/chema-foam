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
import { FadeIn } from "@/components/global/FadeIn";

type ClientsProps = { data: any; clients: any };

export const Clients = ({ data, clients }: ClientsProps) => {
  const slider_elements = clients?.map((client: any) => ({
    id: client?.id,
    element: (
      <Image
        alt={client?.name}
        width={640}
        height={640}
        className="object-fit h-[120px] w-[120px]"
        src={client?.client_logo}
      />
    ),
  }));
  return (
    <div className="bg-primary/10 pb-20">
      <SectionWrapper className="max-w-7xl">
        <FadeIn duration={0.5} delay={0.2}>
          <PageHeader
            title={data[0]?.section_title}
            description={data[0]?.description}
          />
        </FadeIn>

        <FadeIn duration={0.5} delay={0.2}>
          <div className="flex flex-wrap items-center justify-center gap-8 py-11">
            <div className="group flex max-w-[144px] flex-col items-center justify-center gap-4 duration-300 hover:max-w-[320px]">
              <Image
                src={data[0]?.companies_icon}
                alt="projects icon"
                width={64}
                height={64}
                className="size-16 fill-[#1EBAE5] duration-300 group-hover:size-[84px]"
              />
              {/* <BuildingIcon className="size-16 fill-[#1EBAE5] duration-300 group-hover:size-[84px]" /> */}
              <span className="text-[40px] font-medium text-primary duration-300 group-hover:text-[54px]">
                {data[0]?.companies_number}
              </span>
              <span className="text-center text-[14px] text-svg duration-300 group-hover:text-[28px]">
                Total Chema Foam Projects
              </span>
            </div>

            <div className="group flex max-w-[144px] flex-col items-center justify-center gap-4 duration-300 hover:max-w-[320px]">
              <Image
                src={data[0]?.house_icon}
                alt="projects icon"
                width={64}
                height={64}
                className="size-16 fill-[#1EBAE5] duration-300 group-hover:size-[84px]"
              />
              {/* <BuildingIcon className="size-16 fill-[#1EBAE5] duration-300 group-hover:size-[84px]" /> */}
              <span className="text-[40px] font-medium text-primary duration-300 group-hover:text-[54px]">
                {data[0]?.house_number}
              </span>
              <span className="text-center text-[14px] text-svg duration-300 group-hover:text-[28px]">
                Total Chema Foam Projects
              </span>
            </div>

            <div className="group flex max-w-[144px] flex-col items-center justify-center gap-4 duration-300 hover:max-w-[320px]">
              <Image
                src={data[0]?.national_icon}
                alt="projects icon"
                width={64}
                height={64}
                className="size-16 fill-[#1EBAE5] duration-300 group-hover:size-[84px]"
              />
              {/* <BuildingIcon className="size-16 fill-[#1EBAE5] duration-300 group-hover:size-[84px]" /> */}
              <span className="text-[40px] font-medium text-primary duration-300 group-hover:text-[54px]">
                {data[0]?.national_number}
              </span>
              <span className="text-center text-[14px] text-svg duration-300 group-hover:text-[28px]">
                Total Chema Foam national
              </span>
            </div>

            <div className="group flex max-w-[144px] flex-col items-center justify-center gap-4 duration-300 hover:max-w-[320px]">
              <Image
                src={data[0]?.factories_icon}
                alt="projects icon"
                width={64}
                height={64}
                className="size-16 fill-[#1EBAE5] duration-300 group-hover:size-[84px]"
              />
              {/* <BuildingIcon className="size-16 fill-[#1EBAE5] duration-300 group-hover:size-[84px]" /> */}
              <span className="text-[40px] font-medium text-primary duration-300 group-hover:text-[54px]">
                {data[0]?.factories_number}
              </span>
              <span className="text-center text-[14px] text-svg duration-300 group-hover:text-[28px]">
                Total Chema Foam factories
              </span>
            </div>

            <div className="group flex max-w-[144px] flex-col items-center justify-center gap-4 duration-300 hover:max-w-[320px]">
              <Image
                src={data[0]?.total_icon}
                alt="projects icon"
                width={64}
                height={64}
                className="size-16 fill-[#1EBAE5] duration-300 group-hover:size-[84px]"
              />
              {/* <BuildingIcon className="size-16 fill-[#1EBAE5] duration-300 group-hover:size-[84px]" /> */}
              <span className="text-[40px] font-medium text-primary duration-300 group-hover:text-[54px]">
                {data[0]?.total_projects}
              </span>
              <span className="text-center text-[14px] text-svg duration-300 group-hover:text-[28px]">
                Total Chema Foam Projects
              </span>
            </div>
          </div>
        </FadeIn>

        <FadeIn>
          <PageHeader title="Our Clients" />
        </FadeIn>
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
