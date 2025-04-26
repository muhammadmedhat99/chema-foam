import { Button } from "@/components/global/Button";
import { FadeIn } from "@/components/global/FadeIn";
import { PageHeader } from "@/components/global/PageHeader";
import { useTranslations } from "next-intl";
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

type AboutProps = { data: any };

export const About = ({ data }: AboutProps) => {
  const t = useTranslations("Home");
  return (
    <div className="bg-[#1EBAE51A] px-2 py-20">
      <div className="mx-auto max-w-7xl">
        <FadeIn duration={0.5}>
          <PageHeader title={data[0]?.title} />
        </FadeIn>

        <FadeIn duration={0.8} delay={0.5}>
          <div className="mt-10 grid grid-cols-1 gap-9 md:grid-cols-2">
            <iframe
              src={data[0]?.videos[0]?.video_url}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="h-[331px] w-full"
            ></iframe>

            <div className="flex h-full flex-col gap-3.5">
              {/* <p
                className="text-xl font-bold tracking-wide text-primary"
                dangerouslySetInnerHTML={{ __html: data[0]?.description }}
              /> */}

              <p
                className="leading-6 text-secGray"
                dangerouslySetInnerHTML={{ __html: data[0]?.description }}
              />

              <Button
                text={t("who_we_are")}
                isLink={true}
                href="/about"
                className="h-16 w-[262px] bg-primary text-white"
              >
                <FaArrowRightLong className="rtl:-scale-x-100" />
              </Button>
            </div>
          </div>
        </FadeIn>
      </div>
    </div>
  );
};
