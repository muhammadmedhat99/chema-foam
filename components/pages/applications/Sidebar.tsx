"use client";
import { FiltersIcon } from "@/components/icons";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Checkbox } from "@/components/ui/checkbox";
import React, { useEffect, useState } from "react";
import { useSearchParams, useRouter, usePathname } from "next/navigation";

interface SidebarProps {
  filterTitle: string;
  filters?: any;
  selectedIds: string[];
  setSelectedIds: React.Dispatch<React.SetStateAction<string[]>>;
  defaultName?: string;
  defaultCat?: string;
  singleSelection?: boolean;
  searchParamKey?: string;
  initialSelection?: string[];
}

export const Sidebar = ({
  filterTitle,
  filters,
  selectedIds = [],
  setSelectedIds,
  defaultName = "title",
  defaultCat = "product",
  singleSelection,
  searchParamKey,
  initialSelection = [],
}: SidebarProps) => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const [isInitialized, setIsInitialized] = useState(false);

  // Initialize selection from URL or props
  useEffect(() => {
    if (isInitialized) return;

    if (searchParamKey) {
      // Sync from URL param if available
      const paramValue = searchParams.get(searchParamKey);
      if (paramValue) {
        setSelectedIds([paramValue]);
      } else if (initialSelection.length > 0) {
        // Fall back to server-side initial selection
        setSelectedIds(initialSelection);
      }
    } else if (initialSelection.length > 0) {
      // For non-URL cases, use server-side initial selection
      setSelectedIds(initialSelection);
    }

    setIsInitialized(true);
  }, [
    searchParams,
    searchParamKey,
    initialSelection,
    isInitialized,
    setSelectedIds,
  ]);

  const handleCheckboxChange = (productId: string, checked: boolean) => {
    if (singleSelection) {
      const newSelection = checked ? [productId] : [];
      setSelectedIds(newSelection);

      if (searchParamKey) {
        const params = new URLSearchParams(searchParams.toString());
        if (checked) {
          params.set(searchParamKey, productId);
        } else {
          params.delete(searchParamKey);
        }
        router.replace(`${pathname}?${params.toString()}`);
      }
    } else {
      setSelectedIds((prev) =>
        checked ? [...prev, productId] : prev.filter((id) => id !== productId),
      );
    }
  };

  // Check if a product is selected
  const isProductChecked = (productId: string) => {
    return selectedIds.includes(productId);
  };

  return (
    <div className="h-fit w-full bg-secondary/10 px-6 py-8">
      <div className="flex items-center justify-start gap-2">
        <FiltersIcon width={16} height={16} className="fill-secGray" />
        <span className="text-xl font-bold text-secGray">{filterTitle}</span>
      </div>
      {filters ? (
        <Accordion
          type="multiple"
          defaultValue={["item-1", "item-2", "item-3"]}
        >
          {filters?.map((item: any) => (
            <AccordionItem
              value={item?.id}
              className="border-b-0"
              key={item?.id}
            >
              <AccordionTrigger className="text-lg font-semibold text-primary">
                {item?.[defaultName]}
              </AccordionTrigger>
              <AccordionContent className="space-y-4">
                {item?.[defaultCat]?.map((product: any) => (
                  <div
                    className="flex items-center justify-between pl-3"
                    key={product?.id}
                  >
                    <label
                      htmlFor={product?.id}
                      className="text-sm text-primary"
                    >
                      {product?.title}
                    </label>
                    <Checkbox
                      id={product?.id}
                      checked={isProductChecked(product?.id)}
                      onCheckedChange={(checked) =>
                        handleCheckboxChange(product?.id, checked as boolean)
                      }
                      className="data-[state=checked]:text-white"
                    />
                  </div>
                ))}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      ) : (
        <></>
      )}
    </div>
  );
};
