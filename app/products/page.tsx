import React from "react";

import { BreadcrumbComponent } from "@/components/global/Breadcrumb";

import { Sidebar } from "@/components/pages/applications/Sidebar";
import { ProductDetails } from "@/components/pages/products/ProductDetails";

export default function page({
  searchParams,
}: {
  searchParams: { product: string };
}) {
  return (
    <div>
      <BreadcrumbComponent
        pageTitle={searchParams?.product || "Products"}
        pages={[
          { title: "Home", href: "/" },
          { title: searchParams?.product || "Products" },
        ]}
      />
      <div className="mx-auto my-20 max-w-7xl px-2">
        <div className="grid gap-3 lg:grid-cols-4 lg:gap-9">
          <Sidebar filterTitle="Products" />

          <ProductDetails />
        </div>
      </div>
    </div>
  );
}
