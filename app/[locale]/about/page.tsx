import React from "react";

import { BreadcrumbComponent } from "@/components/global/Breadcrumb";
import { CustomAccordion } from "@/components/pages/about/Accordion";
import { Clients } from "@/components/pages/home/Clients";
import Image from "next/image";
import { Briefcase, MedalIcon } from "lucide-react";
import { BiMessageSquareDots } from "react-icons/bi";
import fetchData from "@/utils/api";

export default async function page({
  params,
}: {
  params: { locale: "en" | "ar" };
}) {
  const { locale } = params;
  const data = await fetchData(`page/AboutUs/${locale}`, locale);
  return (
    <div>
      <BreadcrumbComponent
        pageTitle={data?.whoWe[0]?.title}
        pages={[{ title: "Home", href: "/" }, { title: "About Us" }]}
      />

      <h3 className="relative z-50 mx-3 -mt-[54px] mb-16 min-h-[108px] max-w-[582px] bg-[#1F3566D9] px-3 py-7 text-center text-2xl text-white lg:mx-auto lg:px-32 lg:text-5xl">
        {data?.whoWe[0]?.title}
      </h3>

      <div className="bg-[#1EBAE51A] px-3 py-11 lg:px-24">
        {/* <div className="mx-auto max-w-5xl text-center text-xl text-primary lg:text-2xl">
          {data?.whoWe[0]?.description}
        </div> */}

        <p className="mx-auto mt-4 max-w-5xl text-center text-sm text-svg lg:text-base">
          {data?.whoWe[0]?.description}
        </p>
      </div>

      <div className="mx-auto my-16 max-w-3xl px-2">
        <iframe
          src={data?.whoWe[0]?.videos[0]?.video_url}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          className="h-[331px] w-full"
        ></iframe>
      </div>

      <CustomAccordion
        title="Chema Foam Story"
        icon={<Briefcase size={36} />}
        content={
          <>
            <p className="text-primary">{data?.story[0]?.title}</p>
            <ul className="my-2.5 ms-5 list-disc text-sm text-secGray">
              {data?.story[0]?.list?.map((item: any) => (
                <li key={item?.id}>{item?.content}</li>
              ))}
            </ul>

            <div className="mt-3 grid gap-2 lg:grid-cols-2">
              {data?.story[0]?.images?.map((item: any) => (
                <Image
                  src={item?.image}
                  alt="about image"
                  width={1440}
                  height={720}
                  className="aspect-video"
                  key={item?.id}
                />
              ))}
            </div>
          </>
        }
      />
      <CustomAccordion
        title="Our Message"
        icon={<BiMessageSquareDots size={36} />}
        content={
          <>
            <p className="text-primary">{data?.message[0]?.title}</p>

            <div className="mt-3">
              {data?.message[0]?.images?.map((item: any) => (
                <Image
                  src={item?.image}
                  alt="about image"
                  width={1440}
                  height={720}
                  className="aspect-video"
                  key={item?.id}
                />
              ))}
            </div>
          </>
        }
      />
      <CustomAccordion
        title="Our Strategic Goals"
        icon={<MedalIcon size={36} />}
        content={
          <>
            <div className="mt-3 grid gap-2 lg:grid-cols-2">
              <ul className="my-2.5 ms-5 list-disc text-sm text-secGray">
                {data?.goals[0]?.list?.map((item: any) => (
                  <li key={item?.id}>{item?.content}</li>
                ))}
              </ul>
              {data?.goals[0]?.images?.map((item: any) => (
                <Image
                  src={item?.image}
                  alt="about image"
                  width={1440}
                  height={720}
                  className="aspect-video"
                  key={item?.id}
                />
              ))}
            </div>
          </>
        }
      />
      <Clients data={data?.projects} clients={data?.clients} />
    </div>
  );
}
