"use client";
import { NavItem } from "@/types";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { useEffect, useRef, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
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

const useClickOutside = (callback: () => void) => {
  const ref = useRef<HTMLLIElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        callback();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [callback]);

  return ref;
};

// Update the Navbar component to use this hook
export const Navbar: React.FC = () => {
  const [activeSublink, setActiveSublink] = useState<string | null>(null);
  const dropdownRef = useClickOutside(() => setActiveSublink(null));

  const handleSublinkToggle = (label: string) => {
    setActiveSublink(activeSublink === label ? null : label);
  };

  const pathname = usePathname();

  return (
    <ul className="flex items-center justify-center space-x-4">
      {navItems.map((item) => (
        <li key={item.label} className="relative" ref={dropdownRef}>
          <Link
            href={item.href}
            className={`text-white flex items-center gap-1 px-3 py-2 duration-300 hover:text-secondary ${pathname === item.href ? "text-base font-bold text-secondary" : "text-xs font-normal"}`}
            onClick={(e) => {
              if (item.sublinks) {
                e.preventDefault();
                handleSublinkToggle(item.label);
              }
            }}
          >
            <span>{item.label}</span>
            {item?.sublinks && (
              <IoIosArrowDown
                className={`transition-transform duration-300 ${activeSublink === item?.label ? "-scale-y-100" : ""}`}
              />
            )}
          </Link>
          {item.sublinks && activeSublink === item.label && (
            <ul className="bg-gray-700 absolute left-0 top-[150%] mt-2 w-40 rounded-md shadow-lg">
              {item.sublinks.map((sublink) => (
                <li key={sublink.label}>
                  <Link
                    href={sublink.href}
                    className="bg-white block px-4 py-2 text-xs text-primary"
                  >
                    {sublink.label}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ul>
  );
};
