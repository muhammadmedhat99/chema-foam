import { SystemsComponent } from "@/components/pages/systems";
import React from "react";
import fetchData from "@/utils/api";

export default async function page({
  params,
  searchParams,
}: {
  params: { locale: "en" | "ar" };
  searchParams: { system: string };
}) {
  const { locale } = params;
  const mainData = await fetchData(`page/Systems/${locale}`, locale);
  const data = await fetchData(
    `${searchParams?.system ? `page/Systems/show/${searchParams?.system}` : `page/Systems/${locale}`}`,
    locale,
  );
  const initialSelection = searchParams.system
    ? [searchParams.system.toString()]
    : [];
  return (
    <SystemsComponent
      data={mainData}
      initialSelection={initialSelection}
      systemData={data}
    />
  );
}
