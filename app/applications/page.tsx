import React from "react";
import Image from "next/image";

import { BreadcrumbComponent } from "@/components/global/Breadcrumb";
import { ProductCard } from "@/components/global/ProductCard";
import { CustomAccordion } from "@/components/pages/about/Accordion";
import { Sidebar } from "@/components/pages/applications/Sidebar";

import { BiMessageSquareDots } from "react-icons/bi";

export default function page({
  searchParams,
}: {
  searchParams: { app: string };
}) {
  return (
    <div>
      <BreadcrumbComponent
        pageTitle={searchParams?.app || "Applications"}
        pages={[
          { title: "Home", href: "/" },
          { title: searchParams?.app || "Applications" },
        ]}
      />
      <div className="mx-auto my-20 max-w-7xl px-2">
        <div className="grid gap-3 lg:grid-cols-4 lg:gap-9">
          <Sidebar filterTitle="Applications" />
          <div className="lg:col-span-3">
            <Image
              src="/imgs/applications/2.jpg"
              alt="application image"
              width={1440}
              height={720}
              className="w-full object-cover"
            />
            <h3 className="relative z-50 mx-3 -mt-[54px] mb-16 min-h-[108px] max-w-[582px] bg-[#1F3566D9] px-3 py-7 text-center text-2xl text-white lg:mx-auto lg:px-32 lg:text-5xl">
              Waterproofing
            </h3>

            <div className="mx-auto my-16 max-w-3xl px-2">
              <iframe
                src="https://www.youtube.com/embed/qGBCn9j5TZk?si=3LEH5PZMqgdSU-LS"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="h-[331px] w-full"
              ></iframe>
            </div>

            <div className="bg-[#1EBAE51A] px-3 py-11 lg:px-24">
              <div className="mx-auto max-w-5xl text-center text-xl font-bold text-primary lg:text-2xl">
                Waterproofing Application
              </div>

              <p className="mx-auto mt-4 max-w-5xl text-sm text-svg lg:text-base">
                Orhun Kimya waterproofing application product range consists of
                one-piece, high-quality, pollution-free waterproof membrane
                coatings. Our range of waterproofing applications includes
                synthetic resins / superior hybrid polymers / acrylic resins and
                polymer-based products alone or in suitable combination. They
                differ from other traditional waterproof coatings due to their
                excellent flexibility and superior UV resistance. Specially
                formulated structures developed by Orhun Kimya make
                waterproofing application products ideal for use on both
                horizontal and vertical surfaces. The coating becomes part of
                the concrete repair by repairing cracks in the underlying
                surfaces and adhering perfectly to most building materials. Our
                waterproofing application products can be produced in different
                colors according to customer demands. White waterproofing
                application products offer extra benefits with their high
                sunlight reflectivity.
              </p>
            </div>
            <div className="my-5 space-y-7 lg:mt-10">
              <h6 className="mx-auto max-w-2xl text-center text-2xl font-bold text-primary">
                The difference between Cement Waterproofing and Acrylic
                Waterproofing
              </h6>

              <div className="grid gap-8 lg:grid-cols-2">
                <div className="flex flex-col">
                  <Image
                    src="/imgs/applications/1.jpg"
                    alt="application image"
                    width={1024}
                    height={720}
                    className="w-full object-cover"
                  />

                  <div className="flex flex-col gap-2 bg-[#1EBAE51A] p-7">
                    <h6 className="text-center text-xl font-bold text-primary">
                      Cement Waterproofing
                    </h6>
                    <p className="text-sm text-[#5a5a5a]">
                      Orhun Kimya waterproofing application product range
                      consists of one-piece, high-quality, pollution-free
                      waterproof membrane coatings. Our range of waterproofing
                      applications includes synthetic resins / superior hybrid
                      polymers / acrylic resins and polymer-based products alone
                      or in suitable combination.
                    </p>
                  </div>
                </div>
                <div className="flex flex-col">
                  <Image
                    src="/imgs/applications/2.jpg"
                    alt="application image"
                    width={1024}
                    height={720}
                    className="w-full object-cover"
                  />

                  <div className="flex flex-col gap-2 bg-[#1EBAE51A] p-7">
                    <h6 className="text-center text-xl font-bold text-primary">
                      Cement Waterproofing
                    </h6>
                    <p className="text-sm text-[#5a5a5a]">
                      Orhun Kimya waterproofing application product range
                      consists of one-piece, high-quality, pollution-free
                      waterproof membrane coatings. Our range of waterproofing
                      applications includes synthetic resins / superior hybrid
                      polymers / acrylic resins and polymer-based products alone
                      or in suitable combination.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-5">
              <CustomAccordion
                title="Our Message"
                icon={<BiMessageSquareDots size={36} />}
                content={
                  <>
                    <p className="text-primary">
                      We strive hard to be the pioneers of modern
                      environmentally friendly building technology through the
                      concerted joint efforts of all our success partners and
                      keenness on continuous improvement and development, To
                      provide various engineering solutions and innovative,
                      advanced, and unique building systems.
                    </p>

                    <div className="mt-3">
                      <Image
                        src="/imgs/about/1.jpg"
                        alt="about image"
                        width={1440}
                        height={720}
                        className="aspect-video"
                      />
                    </div>

                    <div className="mt-5 flex items-center gap-3">
                      <ProductCard />
                      <ProductCard />
                      <ProductCard />
                    </div>
                  </>
                }
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
