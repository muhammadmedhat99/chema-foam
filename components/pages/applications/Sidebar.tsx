"use client";
import { FiltersIcon } from "@/components/icons";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Checkbox } from "@/components/ui/checkbox";
import React, { useState } from "react";

interface SidebarProps {
  filterTitle: string;
  filters?: any;
  selectedIds: string[];
  setSelectedIds: React.Dispatch<React.SetStateAction<string[]>>;
  defaultName?: string;
  defaultCat?: string;
}
export const Sidebar = ({
  filterTitle,
  filters,
  selectedIds = [],
  setSelectedIds,
  defaultName = "title",
  defaultCat = "product",
}: SidebarProps) => {
  const handleCheckboxChange = (productId: string, checked: boolean) => {
    setSelectedIds((prev) =>
      checked ? [...prev, productId] : prev.filter((id) => id !== productId),
    );
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
                      checked={selectedIds.includes(product?.id)}
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
        <Accordion
          type="multiple"
          defaultValue={["item-1", "item-2", "item-3"]}
        >
          <AccordionItem value="item-1" className="border-b-0">
            <AccordionTrigger className="text-lg font-semibold text-primary">
              Insulation & construction
            </AccordionTrigger>
            <AccordionContent className="space-y-4">
              <div className="flex items-center justify-between pl-3">
                <label
                  htmlFor="thermal_insulation"
                  className="text-sm text-primary"
                >
                  Thermal Insulation
                </label>
                <Checkbox
                  id="thermal_insulation"
                  className="data-[state=checked]:text-white"
                />
              </div>
              <div className="flex items-center justify-between pl-3">
                <label htmlFor="waterproofing" className="text-sm text-primary">
                  Waterproofing
                </label>
                <Checkbox
                  id="waterproofing"
                  className="data-[state=checked]:text-white"
                />
              </div>
              <div className="flex items-center justify-between pl-3">
                <label htmlFor="tile_adhesive" className="text-sm text-primary">
                  Tile Adhesive
                </label>
                <Checkbox
                  id="tile_adhesive"
                  className="data-[state=checked]:text-white"
                />
              </div>
              <div className="flex items-center justify-between pl-3">
                <label htmlFor="light_wight" className="text-sm text-primary">
                  Light-Weight Concrete
                </label>
                <Checkbox
                  id="light_wight"
                  className="data-[state=checked]:text-white"
                />
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2" className="border-b-0">
            <AccordionTrigger className="text-lg font-semibold text-primary">
              Creative solution
            </AccordionTrigger>
            <AccordionContent className="space-y-4">
              <div className="flex items-center justify-between pl-3">
                <label
                  htmlFor="thermal_insulation"
                  className="text-sm text-primary"
                >
                  Thermal Insulation
                </label>
                <Checkbox
                  id="thermal_insulation"
                  className="data-[state=checked]:text-white"
                />
              </div>
              <div className="flex items-center justify-between pl-3">
                <label htmlFor="waterproofing" className="text-sm text-primary">
                  Waterproofing
                </label>
                <Checkbox
                  id="waterproofing"
                  className="data-[state=checked]:text-white"
                />
              </div>
              <div className="flex items-center justify-between pl-3">
                <label htmlFor="tile_adhesive" className="text-sm text-primary">
                  Tile Adhesive
                </label>
                <Checkbox
                  id="tile_adhesive"
                  className="data-[state=checked]:text-white"
                />
              </div>
              <div className="flex items-center justify-between pl-3">
                <label htmlFor="light_wight" className="text-sm text-primary">
                  Light-Weight Concrete
                </label>
                <Checkbox
                  id="light_wight"
                  className="data-[state=checked]:text-white"
                />
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3" className="border-b-0">
            <AccordionTrigger className="text-lg font-semibold text-primary">
              Packing & packaging
            </AccordionTrigger>
            <AccordionContent className="space-y-4">
              <div className="flex items-center justify-between pl-3">
                <label
                  htmlFor="thermal_insulation"
                  className="text-sm text-primary"
                >
                  Thermal Insulation
                </label>
                <Checkbox
                  id="thermal_insulation"
                  className="data-[state=checked]:text-white"
                />
              </div>
              <div className="flex items-center justify-between pl-3">
                <label htmlFor="waterproofing" className="text-sm text-primary">
                  Waterproofing
                </label>
                <Checkbox
                  id="waterproofing"
                  className="data-[state=checked]:text-white"
                />
              </div>
              <div className="flex items-center justify-between pl-3">
                <label htmlFor="tile_adhesive" className="text-sm text-primary">
                  Tile Adhesive
                </label>
                <Checkbox
                  id="tile_adhesive"
                  className="data-[state=checked]:text-white"
                />
              </div>
              <div className="flex items-center justify-between pl-3">
                <label htmlFor="light_wight" className="text-sm text-primary">
                  Light-Weight Concrete
                </label>
                <Checkbox
                  id="light_wight"
                  className="data-[state=checked]:text-white"
                />
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      )}
    </div>
  );
};
