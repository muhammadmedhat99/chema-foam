"use client";
import { NavItem } from "@/types";
import { Link } from "@/i18n/navigation";
import { usePathname } from "next/navigation";

import React, { Fragment, useState } from "react";
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
const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  {
    label: "Applications",
    href: "/applications",
    sublinks: [
      {
        label: "Thermal Insulation",
        href: "/applications?app=1",
      },
      { label: "Waterproofing", href: "/applications?app=2" },
      { label: "Tile Adhesive", href: "/applications?app=3" },
      {
        label: "Insulation & construction",
        href: "#",
        sublinks: [
          {
            label: "Light-Weight Concrete",
            href: "/applications?app=4",
          },
          {
            label: "Chema Protection System",
            href: "/applications?app=5",
          },
          { label: "Geo Foam", href: "/applications?app=6" },
          { label: "Floor Raising", href: "/applications?app=7" },
        ],
      },
      {
        label: "Outdoor Decoration",
        href: "/applications?app=1",
      },
      {
        label: "3D Models",
        href: "/applications?app=2",
      },
    ],
  },
  {
    label: "Products",
    href: "/products",
    sublinks: [
      {
        label: "Thermal Insulation",
        href: "/products?product=1",
      },
      { label: "Waterproofing", href: "/products?product=2" },
      { label: "Tile Adhesive", href: "/products?product=3" },
      {
        label: "Insulation & construction",
        href: "#",
        sublinks: [
          {
            label: "Light-Weight Concrete",
            href: "/products?product=4",
          },
          {
            label: "Chema Protection System",
            href: "/products?product=5",
          },
          { label: "Geo Foam", href: "/products?product=6" },
          { label: "Floor Raising", href: "/products?product=7" },
        ],
      },
      {
        label: "Outdoor Decoration",
        href: "/products?product=1",
      },
      {
        label: "3D Models",
        href: "/products?product=2",
      },
    ],
  },
  {
    label: "Systems",
    href: "/systems",
    sublinks: [
      {
        label: "Thermal Insulation",
        href: "/systems?system=1",
      },
      { label: "Waterproofing", href: "/systems?system=2" },
      { label: "Tile Adhesive", href: "/systems?system=3" },
      {
        label: "Insulation & construction",
        href: "#",
        sublinks: [
          {
            label: "Light-Weight Concrete",
            href: "/systems?system=4",
          },
          {
            label: "Chema Protection System",
            href: "/systems?system=5",
          },
          { label: "Geo Foam", href: "/systems?system=6" },
          { label: "Floor Raising", href: "/systems?system=7" },
        ],
      },
      {
        label: "Outdoor Decoration",
        href: "/systems?system=1",
      },
      {
        label: "3D Models",
        href: "/systems?system=2",
      },
    ],
  },
  { label: "Videos", href: "/videos" },
  { label: "Downloads", href: "/downloads" },
  { label: "Contact Us", href: "/contact" },
];

// Update the Navbar component to use this hook
export const Navbar = () => {
  const [activeSublink, setActiveSublink] = useState<string | null>(null);

  const pathname = usePathname();

  return (
    <>
      <div className="hidden items-center justify-center space-x-4 lg:flex">
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
                            <MenubarItem>
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
  const [activeSublink, setActiveSublink] = useState<string | null>(null);

  const pathname = usePathname();
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
