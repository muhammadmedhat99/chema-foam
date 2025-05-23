import React from "react";

import { MainSlider } from "@/components/global/MainSlider";
import { PageHeader } from "@/components/global/PageHeader";
import { ProductCard } from "@/components/global/ProductCard";
import { SectionWrapper } from "@/components/global/SectionWrapper";
import { FadeIn } from "@/components/global/FadeIn";
import { useTranslations } from "next-intl";

type ProductsProps = { data: any };

export const Products = ({ data }: ProductsProps) => {
  const slider_elements = data?.map((item: any) => ({
    id: item?.id,
    element: <ProductCard item={item} />,
  }));
  const t = useTranslations();
  return (
    <div className="bg-secondary/20">
      <SectionWrapper>
        <FadeIn duration={0.5}>
          <PageHeader
            title={t("Header.products")}
            link={t("Home.all_products")}
            href="/products"
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
    </div>
  );
};
