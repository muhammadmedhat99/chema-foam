import React from "react";

import { BreadcrumbComponent } from "@/components/global/Breadcrumb";
import fetchData from "@/utils/api";
import { AppComponent } from "@/components/pages/applications/AppComponent";
import { getTranslations } from "next-intl/server";

export default async function page({
  params,
  searchParams,
}: {
  params: { locale: "en" | "ar" };
  searchParams: { app: string };
}) {
  const { locale } = params;
  const mainData = await fetchData(`page/Application/${locale}`, locale);
  const data = await fetchData(
    `${searchParams?.app ? `page/Application/show/${searchParams?.app}` : `page/Application/${locale}`}`,
    locale,
  );
  const initialSelection = searchParams.app
    ? [searchParams.app.toString()]
    : [];
  const t = await getTranslations("Header");
  return (
    <div>
      <BreadcrumbComponent
        pageTitle={mainData?.application?.title || t("applications")}
        pages={[
          { title: t("home"), href: "/" },
          { title: mainData?.application?.title || t("applications") },
        ]}
      />
      <div className="mx-auto my-20 max-w-7xl px-2">
        <AppComponent
          data={data}
          sidebarData={mainData?.sidebar}
          initialSelection={initialSelection}
        />
      </div>
    </div>
  );
}
