import React from "react";
import Image from "next/image";

import { BreadcrumbComponent } from "@/components/global/Breadcrumb";
import { ProductCard } from "@/components/global/ProductCard";
import { CustomAccordion } from "@/components/pages/about/Accordion";
import { Sidebar } from "@/components/pages/applications/Sidebar";

import { BiMessageSquareDots } from "react-icons/bi";
import fetchData from "@/utils/api";
import { AppComponent } from "@/components/pages/applications/AppComponent";

export default async function page({
  params,
  searchParams,
}: {
  params: { locale: "en" | "ar" };
  searchParams: { app: string };
}) {
  const { locale } = params;
  const data = await fetchData(`page/Application/${locale}`, locale);
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
        <AppComponent data={data} />
      </div>
    </div>
  );
}
