import React from "react";
import { MainSlider } from "@/components/global/MainSlider";
import { PageHeader } from "@/components/global/PageHeader";
import { SectionWrapper } from "@/components/global/SectionWrapper";
import { ApplicationCard } from "@/components/global/ApplicationCard";

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
      <PageHeader
        title="Applications"
        link="All Applications"
        href="/applications"
      />
      <MainSlider
        sliderElements={slider_elements}
        breakpoints={{
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
