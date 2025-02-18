import React from "react";

import { PageHeader } from "@/components/global/PageHeader";
import { SectionWrapper } from "@/components/global/SectionWrapper";
import { MainSlider } from "@/components/global/MainSlider";
import Image from "next/image";
import { Button } from "@/components/global/Button";
import { FaArrowRightLong } from "react-icons/fa6";
import { FadeIn } from "@/components/global/FadeIn";

type SystemsProps = {};

const slider_elements = [
  {
    id: 1,
    element: (
      <div className="flex w-full flex-col items-center justify-center lg:flex-row">
        <Image
          src="/imgs/systems/1.png"
          alt="System image"
          width={500}
          height={500}
        />

        <div className="flex w-full flex-col gap-4 bg-primary p-5 lg:p-14">
          <p className="text-3xl font-bold leading-tight text-secondary">
            Chema Foam is simply dummy text of the printing and typesetting
            industry.
          </p>
          <p className="text-xl leading-10 tracking-widest text-white">
            lorem Ipsum is simply dummy text of the printing and typesetting
            industry. by injected humour, or randomised words which don't look
            even slightly believable. by injected humour.
          </p>
          <Button
            text="Who We Are"
            isLink={true}
            href="/about"
            className="h-16 w-[235px] text-sm"
          >
            <FaArrowRightLong />
          </Button>
        </div>
      </div>
    ),
  },
  {
    id: 2,
    element: (
      <div className="flex w-full flex-col items-center justify-center lg:flex-row">
        <Image
          src="/imgs/systems/1.png"
          alt="System image"
          width={500}
          height={500}
        />

        <div className="flex w-full flex-col gap-4 bg-primary p-5 lg:p-14">
          <p className="text-3xl font-bold leading-tight text-secondary">
            Chema Foam is simply dummy text of the printing and typesetting
            industry.
          </p>
          <p className="text-xl leading-10 tracking-widest text-white">
            lorem Ipsum is simply dummy text of the printing and typesetting
            industry. by injected humour, or randomised words which don't look
            even slightly believable. by injected humour.
          </p>
          <Button
            text="Who We Are"
            isLink={true}
            href="/about"
            className="h-16 w-[235px] text-sm"
          >
            <FaArrowRightLong />
          </Button>
        </div>
      </div>
    ),
  },
];
export const Systems = (props: SystemsProps) => {
  return (
    <SectionWrapper className="max-w-7xl">
      <FadeIn delay={0.5}>
        <PageHeader
          title="Smart Solution System"
          link="All Systems"
          href="/systems"
        />
      </FadeIn>

      <MainSlider
        sliderElements={slider_elements}
        slidesPreview={1}
        spaceBetweenSlides={65}
        wrapperClassName="px-0"
        slideClassName="mx-auto"
      />
    </SectionWrapper>
  );
};
