import React from "react";

import { MainSlider } from "@/components/global/MainSlider";
import { PageHeader } from "@/components/global/PageHeader";
import { ProductCard } from "@/components/global/ProductCard";
import { SectionWrapper } from "@/components/global/SectionWrapper";
import { FadeIn } from "@/components/global/FadeIn";

type ProductsProps = {};

const slider_elements = [
  {
    id: 1,
    element: <ProductCard />,
  },
  {
    id: 2,
    element: <ProductCard />,
  },
  {
    id: 3,
    element: <ProductCard />,
  },
  {
    id: 4,
    element: <ProductCard />,
  },
  {
    id: 5,
    element: <ProductCard />,
  },
];

export const Products = (props: ProductsProps) => {
  return (
    <div className="bg-secondary/20">
      <SectionWrapper>
        <FadeIn duration={0.5}>
          <PageHeader title="Products" link="All Products" href="/products" />
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
