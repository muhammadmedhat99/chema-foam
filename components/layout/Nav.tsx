"use client";
import { NavItem } from "@/types";
import Link from "next/link";
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
const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  {
    label: "Applications",
    href: "/applications",
    sublinks: [
      {
        label: "Thermal Insulation",
        href: "/applications?app=thermal-insulation",
      },
      { label: "Waterproofing", href: "/applications?app=waterproofing" },
      { label: "Tile Adhesive", href: "/applications?app=tile-adhesive" },
      {
        label: "Insulation & construction",
        href: "#",
        sublinks: [
          {
            label: "Light-Weight Concrete",
            href: "/applications?app=light-weight-concrete",
          },
          {
            label: "Chema Protection System",
            href: "/applications?app=chema-protection-system",
          },
          { label: "Geo Foam", href: "/applications?app=geo-foam" },
          { label: "Floor Raising", href: "/applications?app=floor-raising" },
        ],
      },
      {
        label: "Outdoor Decoration",
        href: "/applications?app=outdoor-decoration",
      },
      {
        label: "3D Models",
        href: "/applications?app=3d-models",
      },
    ],
  },
  {
    label: "Products",
    href: "/products",
    sublinks: [
      {
        label: "Thermal Insulation",
        href: "/products?product=thermal-insulation",
      },
      { label: "Waterproofing", href: "/products?product=waterproofing" },
      { label: "Tile Adhesive", href: "/products?product=tile-adhesive" },
      {
        label: "Insulation & construction",
        href: "#",
        sublinks: [
          {
            label: "Light-Weight Concrete",
            href: "/products?product=light-weight-concrete",
          },
          {
            label: "Chema Protection System",
            href: "/products?product=chema-protection-system",
          },
          { label: "Geo Foam", href: "/products?product=geo-foam" },
          { label: "Floor Raising", href: "/products?product=floor-raising" },
        ],
      },
      {
        label: "Outdoor Decoration",
        href: "/products?product=outdoor-decoration",
      },
      {
        label: "3D Models",
        href: "/products?product=3d-models",
      },
    ],
  },
  {
    label: "Systems",
    href: "/systems",
    sublinks: [
      {
        label: "Thermal Insulation",
        href: "/systems?system=thermal-insulation",
      },
      { label: "Waterproofing", href: "/systems?system=waterproofing" },
      { label: "Tile Adhesive", href: "/systems?system=tile-adhesive" },
      {
        label: "Insulation & construction",
        href: "#",
        sublinks: [
          {
            label: "Light-Weight Concrete",
            href: "/systems?system=light-weight-concrete",
          },
          {
            label: "Chema Protection System",
            href: "/systems?system=chema-protection-system",
          },
          { label: "Geo Foam", href: "/systems?system=geo-foam" },
          { label: "Floor Raising", href: "/systems?system=floor-raising" },
        ],
      },
      {
        label: "Outdoor Decoration",
        href: "/systems?system=outdoor-decoration",
      },
      {
        label: "3D Models",
        href: "/systems?system=3d-models",
      },
    ],
  },
  { label: "Videos", href: "/videos" },
  { label: "Downloads", href: "/downloads" },
  { label: "Contact Us", href: "/contact" },
];

// Update the Navbar component to use this hook
export const Navbar: React.FC = () => {
  const [activeSublink, setActiveSublink] = useState<string | null>(null);

  const pathname = usePathname();

  return (
    <>
      {/* <NavigationMenu>
        <NavigationMenuList>
          {navItems.map((item) =>
            !item?.sublinks ? (
              <NavigationMenuItem
                className="flex items-center gap-1 bg-transparent px-3 py-2 text-white duration-300 hover:text-secondary"
                key={item.label}
              >
                <Link href={item?.href} legacyBehavior passHref>
                  <NavigationMenuLink className="flex items-center gap-1 px-3 py-2 text-white duration-300 hover:text-secondary">
                    {item?.label}
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            ) : (
              <NavigationMenuItem key={item.label} className="relative">
                <NavigationMenuTrigger className="!bg-transparent text-white duration-300 hover:text-secondary">
                  {item.label}
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-4 md:w-[300px] lg:w-[300px] lg:grid-cols-1">
                    {item.sublinks.map((sublink) => (
                      <ListItem
                        href={sublink.href}
                        title={sublink.label}
                        key={sublink.label}
                      ></ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            ),
          )}
        </NavigationMenuList>
      </NavigationMenu> */}

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

// const ListItem = React.forwardRef<
//   React.ElementRef<"a">,
//   React.ComponentPropsWithoutRef<"a">
// >(({ className, title, children, ...props }, ref) => {
//   return (
//     <li>
//       <NavigationMenuLink asChild>
//         <a
//           ref={ref}
//           className={cn(
//             "hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors",
//             className,
//           )}
//           {...props}
//         >
//           <div className="text-sm font-medium leading-none">{title}</div>
//           <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
//             {children}
//           </p>
//         </a>
//       </NavigationMenuLink>
//     </li>
//   );
// });
// ListItem.displayName = "ListItem";
