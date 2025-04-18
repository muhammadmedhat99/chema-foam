"use client";
import React, { useState } from "react";
import { Sidebar } from "./Sidebar";
import Image from "next/image";
import { CustomAccordion } from "../about/Accordion";
import {
  BiMessageSquareDots,
  BiHomeAlt,
  BiShield,
  BiStar,
  BiBuildings,
} from "react-icons/bi";
import { ProductCard } from "@/components/global/ProductCard";

type Props = { data: any; sidebarData: any; initialSelection?: string[] };

export const AppComponent = ({
  data,
  sidebarData,
  initialSelection,
}: Props) => {
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  return (
    <div className="grid gap-3 lg:grid-cols-4 lg:gap-9">
      <Sidebar
        filterTitle="Applications"
        filters={sidebarData}
        defaultName="categoryName"
        defaultCat="application"
        selectedIds={selectedIds}
        setSelectedIds={setSelectedIds}
        singleSelection={true}
        searchParamKey="app"
        initialSelection={initialSelection}
      />
      <div className="lg:col-span-3">
        <Image
          src={data?.application?.app_page_header_image[0]?.image}
          alt="application image"
          width={1440}
          height={720}
          className="w-full object-cover"
        />
        <h3 className="relative z-50 mx-3 -mt-[54px] mb-16 min-h-[108px] max-w-[582px] bg-[#1F3566D9] px-3 py-7 text-center text-2xl text-white lg:mx-auto lg:px-32 lg:text-5xl">
          {data?.application?.title}
        </h3>

        <div className="mx-auto my-16 max-w-3xl px-2">
          {data?.application?.videos?.map((item: any) => (
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
            {data?.application?.title}
          </div>

          <p className="mx-auto mt-4 max-w-5xl text-sm text-svg lg:text-base">
            {data?.application?.description}
          </p>
        </div>
        <div className="my-5 space-y-7 lg:mt-10">
          <h6 className="mx-auto max-w-2xl text-center text-2xl font-bold text-primary">
            The difference between
            {data?.application?.application_comparison?.map(
              (item: any, index: number) => (
                <span key={`name-${item?.name}`}>
                  {" "}
                  {item?.name}{" "}
                  {data?.application?.application_comparison?.length >
                    index + 1 && "and"}
                </span>
              ),
            )}
          </h6>

          <div className="flex gap-2 lg:gap-8">
            {data?.application?.application_comparison?.map((item: any) => (
              <div className="flex flex-1 flex-col" key={item?.id}>
                <Image
                  src={item?.image}
                  alt={item?.name}
                  width={1024}
                  height={720}
                  className="w-full object-cover"
                />

                <div className="flex h-full flex-col gap-2 bg-[#1EBAE51A] p-7">
                  <h6 className="text-center text-xl font-bold text-primary">
                    {item?.name}
                  </h6>
                  <p className="text-sm text-secGray">{item?.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-5">
          {/* Features Accordion */}
          <CustomAccordion
            title="Features"
            icon={<BiHomeAlt size={36} />}
            content={
              <div className="space-y-4">
                {data.application?.featurs.map((feature: any) => (
                  <div key={feature.id}>
                    <p className="text-primary">{feature.content}</p>
                  </div>
                ))}
                <div className="mt-3 grid grid-cols-1 gap-4 md:grid-cols-2">
                  {data.application?.featurs_image.map((image: any) => (
                    <Image
                      key={image.id}
                      src={image.image}
                      alt={image.alt_text || "Feature image"}
                      width={1440}
                      height={720}
                      className="aspect-video w-full object-cover"
                    />
                  ))}
                </div>
              </div>
            }
          />

          {/* Benefits Accordion */}
          <CustomAccordion
            title="Benefits"
            icon={<BiStar size={36} />}
            content={
              <div className="space-y-4">
                {data.application?.benefits.map((benefit: any) => (
                  <div key={benefit.id}>
                    <p className="text-primary">{benefit.content}</p>
                  </div>
                ))}
                <div className="mt-3 grid grid-cols-1 gap-4 md:grid-cols-2">
                  {data.application?.benefits_image.map((image: any) => (
                    <Image
                      key={image.id}
                      src={image.image}
                      alt={image.alt_text || "Benefit image"}
                      width={1440}
                      height={720}
                      className="aspect-video w-full object-cover"
                    />
                  ))}
                </div>
              </div>
            }
          />

          {/* Application Places Accordion */}
          <CustomAccordion
            title="Application Places"
            icon={<BiBuildings size={36} />}
            content={
              <>
                <div className="space-y-8">
                  {data.application?.application_places.map((place: any) => (
                    <div key={place.id} className="space-y-3">
                      <div className="flex items-center gap-3">
                        {place.icon && (
                          <Image
                            src={place.icon}
                            alt={place.name}
                            width={100}
                            height={100}
                            className="h-8 w-8 object-contain"
                          />
                        )}
                        <h4 className="text-lg font-medium">{place.name}</h4>
                      </div>
                      <p className="text-primary">{place.descrition}</p>
                      {place.image && (
                        <Image
                          src={place.image}
                          alt={place.name}
                          width={1440}
                          height={720}
                          className="aspect-video w-full rounded-lg object-cover"
                        />
                      )}
                    </div>
                  ))}
                </div>

                <div className="mt-5 flex items-center gap-3">
                  {data?.recommended_products?.map((product: any) => (
                    <ProductCard item={product} key={product?.id} />
                  ))}
                </div>
              </>
            }
          />
        </div>
      </div>
    </div>
  );
};
