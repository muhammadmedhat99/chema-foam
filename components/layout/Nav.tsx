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
  MenubarSeparator,
  MenubarShortcut,
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
    href: "/apps",
    sublinks: [
      { label: "Web Development", href: "/apps/web" },
      { label: "Mobile Development", href: "/apps/mobile" },
      { label: "SEO", href: "/apps/seo" },
    ],
  },
  {
    label: "Products",
    href: "/products",
    sublinks: [
      { label: "Web Development", href: "/products/web" },
      { label: "Mobile Development", href: "/products/mobile" },
      { label: "SEO", href: "/products/seo" },
    ],
  },
  {
    label: "Systems",
    href: "/systems",
    sublinks: [
      { label: "Web Development", href: "/systems/web" },
      { label: "Mobile Development", href: "/systems/mobile" },
      { label: "SEO", href: "/systems/seo" },
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
                  <MenubarItem>
                    New Tab <MenubarShortcut>⌘T</MenubarShortcut>
                  </MenubarItem>
                  <MenubarItem>
                    New Window <MenubarShortcut>⌘N</MenubarShortcut>
                  </MenubarItem>
                  <MenubarItem disabled>New Incognito Window</MenubarItem>
                  <MenubarSub>
                    <MenubarSubTrigger>Share</MenubarSubTrigger>
                    <MenubarSubContent>
                      <MenubarItem>Email link</MenubarItem>
                      <MenubarItem>Messages</MenubarItem>
                      <MenubarItem>Notes</MenubarItem>
                    </MenubarSubContent>
                  </MenubarSub>
                  <MenubarSeparator />
                  <MenubarItem>
                    Print... <MenubarShortcut>⌘P</MenubarShortcut>
                  </MenubarItem>
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
