"use client";

import React, { useEffect, useState } from "react";
import { Link, usePathname } from "@/i18n/navigation";
import Image from "next/image";

import { RiImageCircleAiLine } from "react-icons/ri";
import { LuNotebookText } from "react-icons/lu";

export const Sidebar = () => {
  const pathname = usePathname();

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Check for token in cookies
    const token = document.cookie
      .split("; ")
      .find((row) => row.startsWith("token="))
      ?.split("=")[1];

    setIsLoggedIn(!!token);
  }, []);

  return (
    <div className="fixed right-0 z-0 flex h-screen w-20 flex-col justify-between bg-primary py-10 pt-32 lg:w-48">
      <div className="flex flex-col gap-4 px-2">
        {isLoggedIn && (
          <Link
            href="/points"
            className={`flex items-center justify-start gap-1 text-sm font-semibold ${pathname === "/points" ? "text-secondary" : "text-white"}`}
          >
            <Image src="/imgs/money.svg" width={24} height={24} alt="icon" />
            مراجعة رصيد النقاط
          </Link>
        )}
        <Link
          href="/prizes"
          className={`flex items-center justify-start gap-1 text-sm font-semibold ${pathname === "/prizes" ? "text-secondary" : "text-white"}`}
        >
          <RiImageCircleAiLine size={24} />
          جوائز المسابقة
        </Link>
        <Link
          href="/awards"
          className={`flex items-center justify-start gap-1 text-sm font-semibold ${pathname === "/awards" ? "text-secondary" : "text-white"}`}
        >
          <LuNotebookText size={24} />
          الشروط والأحكام
        </Link>
      </div>

      <div className="flex flex-col items-center gap-2">
        <Image
          src="/imgs/logos/icon.svg"
          alt="Chema Logo"
          width={146}
          height={146}
          className="mt-20"
        />
        <div className="text-[8px] text-[#1EBAE5]">
          Copyright © {new Date().getFullYear()} Chema Foam Group
        </div>
      </div>
    </div>
  );
};
