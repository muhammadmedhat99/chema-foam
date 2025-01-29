import { Button } from "@/components/global/Button";
import { PageHeader } from "@/components/global/PageHeader";
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

type AboutProps = {};

export const About = (props: AboutProps) => {
  return (
    <div className="bg-[#1EBAE51A] py-20">
      <div className="mx-auto max-w-7xl">
        <PageHeader title="About Chema Foam" />

        <div className="mt-10 grid grid-cols-1 gap-9 md:grid-cols-2">
          <iframe
            width="582px"
            height="331"
            src="https://www.youtube.com/embed/qGBCn9j5TZk?si=3LEH5PZMqgdSU-LS"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>

          <div className="flex h-full flex-col gap-3.5">
            <p className="text-xl font-bold tracking-wide text-primary">
              Chema foam is a company that specialized in providing innovative,
              modern, and advanced engineering solutions, systems, and building
              applications.
            </p>
            <p className="leading-6 text-[#5A5A5A]">
              Chema Foam produces many polystyrene foam products and dry mix
              products as modern products in the field The world of
              construction, thermal and waterproof insulation, and industrial
              packaging. Our products and services serve many Vital industries
              in the business world, such as the building and construction
              sector, the contracting sector, and the commodities sector The
              durable, transport sector, refrigerated transport, agricultural
              sector, furniture, and decoration
            </p>
            <Button
              text="Who We Are"
              isLink={true}
              href="/about"
              className="h-16 w-[262px] bg-primary text-white"
            >
              <FaArrowRightLong />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
