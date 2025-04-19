"use client";
import { BreadcrumbComponent } from "@/components/global/Breadcrumb";
import React, { useState } from "react";
import { Sidebar } from "../applications/Sidebar";
import Image from "next/image";
import { CustomAccordion } from "@/components/pages/about/Accordion";
import { BiChevronDown, BiMessageSquareDots } from "react-icons/bi";
import { ProductCard } from "@/components/global/ProductCard";

type SystemsComponentProps = {
  data: any;
  initialSelection?: string[];
  systemData: any;
};
export const SystemsComponent = ({
  data,
  initialSelection,
  systemData,
}: SystemsComponentProps) => {
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  return (
    <div>
      <BreadcrumbComponent
        pageTitle={data?.system?.title || "Systems"}
        pages={[
          { title: "Home", href: "/" },
          { title: data?.system?.title || "Systems" },
        ]}
      />
      <div className="mx-auto my-20 max-w-7xl px-2">
        <div className="grid gap-3 lg:grid-cols-4 lg:gap-9">
          <Sidebar
            filterTitle="Smart Systems"
            filters={data?.sidebar}
            defaultCat="system"
            defaultName="title"
            selectedIds={selectedIds}
            setSelectedIds={setSelectedIds}
            searchParamKey="system"
            singleSelection
            initialSelection={initialSelection}
          />
          <div className="lg:col-span-3">
            <Image
              src={systemData?.system?.app_page_header_image[0]?.image}
              alt={systemData?.system?.title}
              width={1440}
              height={720}
              className="w-full object-cover"
            />
            <h3 className="relative z-50 mx-3 -mt-[54px] mb-16 min-h-[108px] max-w-[582px] bg-[#1F3566D9] px-3 py-7 text-center text-2xl text-white lg:mx-auto lg:px-32 lg:text-5xl">
              {systemData?.system?.title}
            </h3>

            <div className="mx-auto my-16 max-w-3xl px-2">
              {systemData?.system?.videos?.map((item: any) => (
                <iframe
                  key={item?.id}
                  src={item?.video_url}
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                  className="mb-2 h-[331px] w-full"
                ></iframe>
              ))}
            </div>

            <div className="bg-[#1EBAE51A] px-3 py-11 lg:px-24">
              <div className="mx-auto max-w-5xl text-center text-xl font-bold text-primary lg:text-2xl">
                {systemData?.system?.title}
              </div>

              <p className="mx-auto mt-4 max-w-5xl text-sm text-svg lg:text-base">
                {systemData?.system?.description}
              </p>
            </div>

            <div className="mt-2 bg-gray-200 px-3 py-11 lg:px-24">
              <div className="mx-auto max-w-5xl text-center text-xl font-bold text-primary lg:text-2xl">
                {systemData?.system?.title} Features
              </div>
              <div className="flex items-center justify-between gap-3">
                <ul className="list-disc space-y-2 pl-5">
                  {systemData?.system?.featurs?.map((item: any) => (
                    <li key={item.id}>{item.content}</li>
                  ))}
                </ul>

                <Image
                  src={systemData?.system?.featurs_image[0]?.image}
                  alt={systemData?.system?.featurs_image[0]?.title}
                  width={1024}
                  height={1024}
                  className="h-[350px] w-[350px] object-contain"
                />
              </div>
            </div>

            <div className="mt-2 bg-[#1EBAE51A] px-3 py-11 lg:px-24">
              <div className="mx-auto max-w-5xl text-center text-xl font-bold text-primary lg:text-2xl">
                {systemData?.system?.title} Application Benefits
              </div>
              <div className="flex items-center justify-between gap-3">
                <ul className="list-disc space-y-2 pl-5">
                  {systemData?.system?.benefits?.map((item: any) => (
                    <li key={item.id}>{item.content}</li>
                  ))}
                </ul>

                <Image
                  src={systemData?.system?.benefits_image[0]?.image}
                  alt={systemData?.system?.benefits_image[0]?.title}
                  width={1024}
                  height={1024}
                  className="h-[350px] w-[350px] object-contain"
                />
              </div>
            </div>

            <div className="mt-5">
              <h2 className="mb-6 text-center text-2xl font-bold text-primary">
                System Places
              </h2>

              {systemData?.system?.system_places?.map((place: any) => (
                <div key={place.id} className="mb-4">
                  <CustomAccordion
                    title={place.name}
                    icon={
                      <Image
                        src={place.icon}
                        alt="system icon"
                        width={40}
                        height={40}
                      />
                    }
                    content={
                      <>
                        <p className="text-primary">{place.descrition}</p>

                        <div className="mt-3">
                          <Image
                            src={place.image}
                            alt="system image"
                            width={1440}
                            height={720}
                            className="aspect-video"
                          />
                        </div>
                        <div className="mt-5 flex flex-wrap items-center gap-3">
                          {systemData?.recommended_products?.map(
                            (item: any) => (
                              <ProductCard key={item?.id} item={item} />
                            ),
                          )}
                        </div>
                      </>
                    }
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
