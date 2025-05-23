"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Navbar, ResponsiveNav } from "./Nav";
import { IoIosArrowDown, IoMdSearch } from "react-icons/io";
import { FaGlobeAmericas } from "react-icons/fa";
import { ImageIcon } from "../icons";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { MenuIcon, SearchIcon } from "lucide-react";
import { useLocale } from "next-intl";
import { Link, usePathname, useRouter } from "@/i18n/navigation";

export const Header = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const newLocale = locale === "en" ? "ar" : "en";

  const changeLocale = (selectedLocale: string) => {
    const newLocale = selectedLocale;
    router.replace(pathname, { locale: newLocale });
  };
  return (
    <div
      className={`sticky left-0 right-0 z-[99] flex h-[100px] duration-300 lg:gap-9 ${isSticky ? "top-0" : "lg:top-10"}`}
      dir="ltr"
    >
      <Link
        href="/"
        className="flex h-full w-[325px] items-center justify-end bg-primary/75 pe-[37px]"
      >
        <Image src="/imgs/logo.svg" alt="logo" width={169} height={55} />
      </Link>
      <div className="flex h-full flex-1 items-center justify-between bg-primary/75 px-2 lg:px-[37px]">
        <Navbar />

        <div className="flex items-center gap-3">
          {/* <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="hover:bg-transparent"
              >
                <IoMdSearch className="size-5" color="white" />
                <span className="sr-only">Search</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="z-[999] w-[300px] p-4">
              <div className="relative">
                <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500 dark:text-gray-400" />
                <Input
                  type="search"
                  placeholder="Search..."
                  className="w-full pl-8"
                />
              </div>
            </DropdownMenuContent>
          </DropdownMenu> */}
          <div
            onClick={() => changeLocale(locale === "en" ? "ar" : "en")}
            className="flex cursor-pointer items-center gap-1 text-white"
          >
            <FaGlobeAmericas className="size-4" color="white" />
            <span>{locale === "en" ? "AR" : "EN"}</span>
          </div>
          {/* <ImageIcon className="size-7 fill-white" /> */}

          <div className="flex items-center gap-4">
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full !bg-transparent lg:hidden"
                >
                  <MenuIcon className="h-5 w-5 text-white" />
                  <span className="sr-only">Toggle navigation menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="z-[999] lg:hidden">
                <ResponsiveNav />
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </div>
  );
};
