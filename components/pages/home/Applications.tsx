import React from "react";
import { MainSlider } from "@/components/global/MainSlider";
import { PageHeader } from "@/components/global/PageHeader";
import { SectionWrapper } from "@/components/global/SectionWrapper";
import { ApplicationCard } from "@/components/global/ApplicationCard";
import { FadeIn } from "@/components/global/FadeIn";
import { useTranslations } from "next-intl";

type ApplicationsProps = { data: any };

export const Applications = ({ data }: ApplicationsProps) => {
  const t = useTranslations();
  const slider_elements = data?.map((item: any) => ({
    id: item?.id,
    element: (
      <ApplicationCard
        id={item?.id}
        title={item?.title}
        description={item?.description}
        image={item?.home_page_card_image[0]?.image}
      />
    ),
  }));
  return (
    <SectionWrapper>
      <FadeIn duration={0.5}>
        <PageHeader
          title={t("Header.applications")}
          link={t("Home.all_applications")}
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
