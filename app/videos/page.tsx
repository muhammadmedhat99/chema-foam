import { BreadcrumbComponent } from "@/components/global/Breadcrumb";
import { PageHeader } from "@/components/global/PageHeader";
import { VideoCard } from "@/components/pages/videos/VideoCard";
import React from "react";

export default function page() {
  return (
    <div>
      <BreadcrumbComponent
        pageTitle={"Chema Foam Videos"}
        pages={[{ title: "Home", href: "/" }, { title: "Videos" }]}
      />
      <div className="mx-auto max-w-7xl py-5 lg:py-20">
        <PageHeader title="Products Applications" />

        <div className="mt-10 grid gap-3 px-2 md:grid-cols-2 md:gap-6 lg:grid-cols-3 lg:gap-9">
          <VideoCard />
          <VideoCard />
          <VideoCard />
          <VideoCard />
          <VideoCard />
          <VideoCard />
        </div>
      </div>
    </div>
  );
}
