"use client";
import { NavItem } from "@/types";
import { Link } from "@/i18n/navigation";
import { usePathname } from "next/navigation";

import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "@/components/ui/menubar";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

import { useLocalizedData } from "@/utils/hooks";
import { useLocale, useTranslations } from "next-intl";

function mapEntriesToNav({
  data,
  base,
  param,
  entryKey,
  labelKey = "title",
  idKey = "id",
}: {
  data?: any[];
  base: string;
  param: string;
  entryKey: "application" | "products" | "system";
  labelKey?: string;
  idKey?: string;
}): NavItem[] {
  if (!data) return [];

  return data.flatMap((category: any) => {
    const items = category[entryKey];

    if (!items || items.length === 0) return [];

    if (items.length === 1) {
      const item = items[0];
      return [
        {
          label: item[labelKey],
          href: `/${base}?${param}=${item[idKey]}`,
        },
      ];
    }

    return [
      {
        label: category.categoryName || category.title,
        href: "#",
        sublinks: items.map((item: any) => ({
          label: item[labelKey],
          href: `/${base}?${param}=${item[idKey]}`,
        })),
      },
    ];
  });
}
export const Navbar = () => {
  const t = useTranslations("Header");
  const locale = useLocale();
  const [activeSublink, setActiveSublink] = useState<string | null>(null);

  const pathname = usePathname();

  const applications = useLocalizedData("Application");
  const systems = useLocalizedData("Systems");
  const products = useLocalizedData("Products");

  const navItems: NavItem[] = [
    { label: t("home"), href: "/" },
    { label: t("about"), href: "/about" },
    {
      label: t("applications"),
      href: "/applications",
      sublinks: mapEntriesToNav({
        data: applications?.data?.sidebar,
        base: "applications",
        param: "app",
        entryKey: "application",
      }),
    },
    {
      label: t("products"),
      href: "/products",
      sublinks: mapEntriesToNav({
        data: products?.data?.sidebar,
        base: "products",
        param: "product",
        entryKey: "products",
        idKey: "product_id",
      }),
    },
    {
      label: t("systems"),
      href: "/systems",
      sublinks: mapEntriesToNav({
        data: systems?.data?.sidebar,
        base: "systems",
        param: "system",
        entryKey: "system",
      }),
    },
    { label: t("videos"), href: "/videos" },
    { label: t("downloads"), href: "/downloads" },
    { label: t("contact"), href: "/contact" },
  ];
  return (
    <>
      <div
        className={`hidden flex-row items-center justify-center space-x-4 lg:flex ${locale === "ar" ? "flex-row-reverse" : "flex-row"}`}
      >
        {navItems.map((item) =>
          !item?.sublinks ? (
            <Link
              key={item?.label}
              href={item.href}
              className={`flex items-center gap-1 px-3 py-2 text-white duration-300 hover:text-secondary ${pathname === item.href ? "text-base font-bold text-secondary" : "text-xs font-normal"}`}
            >
              <span>{item.label}</span>
              {item?.sublinks && (
                <IoIosArrowDown
                  className={`transition-transform duration-300 ${activeSublink === item?.label ? "-scale-y-100" : ""}`}
                />
              )}
            </Link>
          ) : (
            <Menubar
              key={item?.label}
              className="border-none bg-transparent shadow-none"
            >
              <MenubarMenu>
                <MenubarTrigger
                  className={`flex items-center gap-1 !bg-transparent px-3 py-2 text-white duration-300 hover:!text-secondary data-[state=open]:!text-secondary ${pathname === item.href ? "text-base font-bold text-secondary" : "text-xs font-normal"}`}
                >
                  {item.label}
                  <IoIosArrowDown
                    className={`transition-transform duration-300 ${activeSublink === item?.label ? "-scale-y-100" : ""}`}
                  />
                </MenubarTrigger>
                <MenubarContent className="z-[999]">
                  {item?.sublinks?.map((sublink) =>
                    sublink?.sublinks ? (
                      <MenubarSub key={`subSubLink-${sublink.label}`}>
                        <MenubarSubTrigger>{sublink?.label}</MenubarSubTrigger>
                        <MenubarSubContent>
                          {sublink?.sublinks?.map((singleLink) => (
                            <MenubarItem key={`sub-link-${singleLink?.label}`}>
                              <Link href={singleLink?.href}>
                                {singleLink?.label}
                              </Link>
                            </MenubarItem>
                          ))}
                        </MenubarSubContent>
                      </MenubarSub>
                    ) : (
                      <MenubarItem key={`sublink-${sublink?.label}`}>
                        <Link href={sublink?.href}>{sublink?.label}</Link>
                      </MenubarItem>
                    ),
                  )}
                </MenubarContent>
              </MenubarMenu>
            </Menubar>
          ),
        )}
      </div>
    </>
  );
};

export const ResponsiveNav = () => {
  const t = useTranslations("Header");
  const [activeSublink, setActiveSublink] = useState<string | null>(null);

  const pathname = usePathname();

  const applications = useLocalizedData("Application");
  const systems = useLocalizedData("Systems");
  const products = useLocalizedData("Products");

  const navItems: NavItem[] = [
    { label: t("home"), href: "/" },
    { label: t("about"), href: "/about" },
    {
      label: t("applications"),
      href: "/applications",
      sublinks: mapEntriesToNav({
        data: applications?.data?.sidebar,
        base: "applications",
        param: "app",
        entryKey: "application",
      }),
    },
    {
      label: t("products"),
      href: "/products",
      sublinks: mapEntriesToNav({
        data: products?.data?.sidebar,
        base: "products",
        param: "product",
        entryKey: "products",
        idKey: "product_id",
      }),
    },
    {
      label: t("systems"),
      href: "/systems",
      sublinks: mapEntriesToNav({
        data: systems?.data?.sidebar,
        base: "systems",
        param: "system",
        entryKey: "system",
      }),
    },
    { label: t("videos"), href: "/videos" },
    { label: t("downloads"), href: "/downloads" },
    { label: t("contact"), href: "/contact" },
  ];
  return (
    <div className="flex flex-col gap-2 lg:hidden">
      {navItems.map((item) =>
        !item?.sublinks ? (
          <Link
            key={item?.label}
            href={item.href}
            className={`flex items-center gap-1 py-2 duration-300 hover:text-secondary ${pathname === item.href ? "text-base font-bold text-secondary" : "text-xs font-normal"}`}
          >
            <span>{item.label}</span>
            {item?.sublinks && (
              <IoIosArrowDown
                className={`transition-transform duration-300 ${activeSublink === item?.label ? "-scale-y-100" : ""}`}
              />
            )}
          </Link>
        ) : (
          <Accordion key={item?.label} type="single" collapsible>
            <AccordionItem
              value={item?.label}
              className={`border-b-0 !bg-transparent duration-300 hover:!text-secondary data-[state=open]:!text-secondary ${pathname === item.href ? "text-base font-bold text-secondary" : "text-xs font-normal"}`}
            >
              <AccordionTrigger className="max-h-4 text-xs font-normal">
                {item?.label}
              </AccordionTrigger>
              <AccordionContent className="px-2">
                {item?.sublinks?.map((sublink) =>
                  sublink?.sublinks ? (
                    <Accordion
                      type="multiple"
                      key={`subSubLink-${sublink.label}`}
                    >
                      <AccordionItem
                        value={`nested-item-${sublink?.label}`}
                        className={`border-b-0 !bg-transparent duration-300 hover:!text-secondary data-[state=open]:!text-secondary ${pathname === sublink.href ? "text-base font-bold text-secondary" : "text-xs font-normal"}`}
                      >
                        <AccordionTrigger
                          className={`text-xs font-normal text-black`}
                        >
                          {sublink?.label}
                        </AccordionTrigger>
                        <AccordionContent className="px-2">
                          {sublink?.sublinks?.map((singleLink) => (
                            <Link
                              key={`sublink-${sublink?.label}`}
                              href={singleLink?.href}
                              className={`text-xs font-normal text-black`}
                            >
                              {singleLink?.label}
                            </Link>
                          ))}
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  ) : (
                    <Link
                      key={`sublink-${sublink?.label}`}
                      href={sublink?.href}
                      className={`text-xs font-normal text-black`}
                    >
                      {sublink?.label}
                    </Link>
                  ),
                )}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        ),
      )}
    </div>
  );
};
