import React from "react";
import { MainSlider } from "@/components/global/MainSlider";
import { PageHeader } from "@/components/global/PageHeader";
import { SectionWrapper } from "@/components/global/SectionWrapper";
import { ApplicationCard } from "@/components/global/ApplicationCard";
import { FadeIn } from "@/components/global/FadeIn";

type ApplicationsProps = {};

const slider_elements = [
  {
    id: 1,
    element: <ApplicationCard />,
  },
  {
    id: 2,
    element: <ApplicationCard />,
  },
  {
    id: 3,
    element: <ApplicationCard />,
  },
  {
    id: 4,
    element: <ApplicationCard />,
  },
  {
    id: 5,
    element: <ApplicationCard />,
  },
];

export const Applications = (props: ApplicationsProps) => {
  return (
    <SectionWrapper>
      <FadeIn duration={0.5}>
        <PageHeader
          title="Applications"
          link="All Applications"
          href="/applications"
        />
      </FadeIn>
      <MainSlider
        sliderElements={slider_elements}
        breakPoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1280: {
            slidesPerView: 4,
            spaceBetween: 36,
          },
        }}
      />
    </SectionWrapper>
  );
};
