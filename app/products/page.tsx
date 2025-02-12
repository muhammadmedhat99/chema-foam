import React from "react";

import { BreadcrumbComponent } from "@/components/global/Breadcrumb";

import { Sidebar } from "@/components/pages/applications/Sidebar";
import { ProductDetails } from "@/components/pages/products/ProductDetails";

export default function page() {
  return (
    <div>
      <BreadcrumbComponent
        pageTitle="Products"
        pages={[{ title: "Home", href: "/" }, { title: "Products" }]}
      />
      <div className="mx-auto my-20 max-w-7xl px-2">
        <div className="grid gap-3 lg:grid-cols-4 lg:gap-9">
          <Sidebar />

          <ProductDetails />
        </div>
      </div>
    </div>
  );
}
