"use client";
import React, { useState } from "react";
import { Sidebar } from "../applications/Sidebar";
import { DownloadCard } from "./DownloadCard";
import { useTranslations } from "next-intl";

type DownloadComponentProps = { data: any };

export const DownloadComponent = ({ data }: DownloadComponentProps) => {
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const filteredProducts = data?.products.filter((product: any) =>
    selectedIds.includes(product.id),
  );
  const t = useTranslations();
  return (
    <div className="mx-auto my-20 max-w-7xl px-2">
      <div className="grid gap-3 lg:grid-cols-4 lg:gap-9">
        <Sidebar
          filterTitle={t("Home.filter")}
          filters={data?.sidebar}
          selectedIds={selectedIds}
          setSelectedIds={setSelectedIds}
          defaultCat="products"
        />

        <div className="grid gap-3 md:grid-cols-2 md:gap-6 lg:col-span-3 lg:grid-cols-3 lg:gap-9">
          {filteredProducts.length > 0
            ? filteredProducts.map((product: any) => (
                <DownloadCard key={product.id} product={product} />
              ))
            : data?.products?.map((item: any) => (
                <DownloadCard key={item.id} product={item} />
              ))}
        </div>
      </div>
    </div>
  );
};
