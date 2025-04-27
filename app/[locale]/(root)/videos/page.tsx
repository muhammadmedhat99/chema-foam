import { BreadcrumbComponent } from "@/components/global/Breadcrumb";
import { PageHeader } from "@/components/global/PageHeader";
import { VideoCard } from "@/components/pages/videos/VideoCard";
import fetchData from "@/utils/api";
import { getTranslations } from "next-intl/server";
import React from "react";

export default async function page({
  params,
}: {
  params: { locale: "en" | "ar" };
}) {
  const { locale } = params;
  const data = await fetchData(`page/Videos/${locale}`, locale);
  const t = await getTranslations();
  return (
    <div>
      <BreadcrumbComponent
        pageTitle={t("Header.videos")}
        pages={[
          { title: t("Header.home"), href: "/" },
          { title: t("Header.videos") },
        ]}
      />
      <div className="mx-auto max-w-7xl py-5 lg:py-20">
        <PageHeader title={t("Videos.products_applications")} />

        <div className="mt-10 grid gap-3 px-2 md:grid-cols-2 md:gap-6 lg:grid-cols-3 lg:gap-9">
          {data?.products_videos?.map((item: any) => (
            <VideoCard
              key={item?.id}
              name={item?.title}
              description={item?.subtitle}
              url={item?.videos[0]?.video_url}
            />
          ))}
        </div>
        <div className="mt-10">
          <PageHeader title={t("Videos.systems_videos")} />

          <div className="mt-10 grid gap-3 px-2 md:grid-cols-2 md:gap-6 lg:grid-cols-3 lg:gap-9">
            {data?.systems_videos?.map((item: any) => (
              <VideoCard
                key={item?.id}
                name={item?.title}
                description={item?.subtitle}
                url={item?.videos[0]?.video_url}
              />
            ))}
          </div>
        </div>
        <div className="mt-10">
          <PageHeader title={t("Videos.other_videos")} />

          <div className="mt-10 grid gap-3 px-2 md:grid-cols-2 md:gap-6 lg:grid-cols-3 lg:gap-9">
            {data?.other_videos?.map((item: any) => (
              <VideoCard
                key={item?.id}
                name={item?.title}
                description={item?.description}
                url={item?.video_url}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
