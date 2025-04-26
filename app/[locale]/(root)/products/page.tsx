import React from "react";

import { BreadcrumbComponent } from "@/components/global/Breadcrumb";

import { Sidebar } from "@/components/pages/applications/Sidebar";
import { ProductDetails } from "@/components/pages/products/ProductDetails";
import fetchData from "@/utils/api";
import { getTranslations } from "next-intl/server";

export default async function page({
  params,
  searchParams,
}: {
  params: { locale: "en" | "ar" };
  searchParams: { product: string };
}) {
  const { locale } = params;
  const data = await fetchData(`page/Products/${locale}`, locale);
  const mainData = await fetchData(
    `${searchParams?.product ? `page/Product/show/${searchParams?.product}` : `page/Products/${locale}`}`,
    locale,
  );
  const t = await getTranslations();
  return (
    <div>
      <BreadcrumbComponent
        pageTitle={mainData?.product?.title || t("Header.products")}
        pages={[
          { title: t("Header.home"), href: "/" },
          { title: mainData?.product?.title || t("Header.products") },
        ]}
      />
      <div className="mx-auto my-20 max-w-7xl px-2">
        <div className="grid gap-3 lg:grid-cols-4 lg:gap-9">
          <ProductDetails
            data={data}
            productData={mainData?.product}
            related={mainData?.related_product}
          />
        </div>
      </div>
    </div>
  );
}
