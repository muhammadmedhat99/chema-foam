"use client";
import React, { useState } from "react";
import { BiSearch } from "react-icons/bi";
import { useDebounce } from "use-debounce";
import { useQuery } from "@tanstack/react-query";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";

type SearchResultItem = {
  id: number;
  title: string;
  description: string;
  seo: string | null;
};

type SearchResults = {
  applications: SearchResultItem[];
  products: SearchResultItem[];
  systems: SearchResultItem[];
};

type SearchBoxProps = {};

export const SearchBoxComponent = (props: SearchBoxProps) => {
  const t = useTranslations("Home");
  const fetchSearchResults = async (query: string): Promise<SearchResults> => {
    if (!query.trim()) return { applications: [], products: [], systems: [] };

    const response = await fetch(
      `https://web.chema-foam.com/api/search/${encodeURIComponent(query)}`,
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  };

  const [text, setText] = useState("");
  const [value] = useDebounce(text, 1000);

  const { data, isLoading } = useQuery({
    queryKey: ["search", value],
    queryFn: () => fetchSearchResults(value),
    enabled: !!value,
    staleTime: 5 * 60 * 1000,
  });

  // Helper function to render a section of results
  const renderResultsSection = (
    title: string,
    items: SearchResultItem[],
    type: string,
  ) => {
    if (!items || items.length === 0) return null;

    return (
      <div className="mb-4">
        <h3 className="mb-2 text-lg font-semibold text-white">{title}</h3>
        <div className="space-y-2">
          {items.map((item) => (
            <Link
              key={`${type}-${item.id}`}
              className="block rounded bg-white/90 p-3 hover:bg-white"
              href={`/${type}?${type === "applications" ? "app" : type === "products" ? "product" : "system"}=${item.id}`}
            >
              <h4 className="font-medium text-primary">{item.title}</h4>
            </Link>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="relative z-[11] mx-auto mt-5 flex max-w-3xl flex-col items-center justify-center gap-6 bg-primary/85 px-2 py-2 backdrop-blur-sm lg:-mt-24 lg:px-20 lg:py-20">
      <h2 className="text-lg font-bold text-white lg:text-4xl">
        {t("how_can_we_help")}
      </h2>
      <div className="relative w-full">
        <input
          type="text"
          className="w-full bg-paragraph px-4 py-5 text-xs shadow-main outline-none placeholder:text-svg lg:text-base"
          placeholder={t("search_text")}
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
        />
        <BiSearch className="absolute end-4 top-1/2 size-4 -translate-y-1/2 text-secGray" />

        {/* Results dropdown */}
        {data && (
          <div className="absolute left-0 top-full z-[99999] mt-1 h-80 w-full overflow-y-auto rounded-b-lg bg-primary p-4 shadow-lg">
            {isLoading ? (
              <div className="flex items-center justify-center p-4">
                <span className="text-white">Loading...</span>
              </div>
            ) : (
              <>
                {renderResultsSection(
                  "Applications",
                  data.applications,
                  "applications",
                )}
                {renderResultsSection("Products", data.products, "products")}
                {renderResultsSection("Systems", data.systems, "systems")}

                {data.applications.length === 0 &&
                  data.products.length === 0 &&
                  data.systems.length === 0 && (
                    <div className="p-4 text-center text-white">
                      No results found
                    </div>
                  )}
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
