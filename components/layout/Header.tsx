"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Navbar } from "./Nav";

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
  return (
    <div
      className={`sticky left-0 right-0 z-10 flex h-[100px] gap-9 duration-300 ${isSticky ? "top-0" : "top-10"}`}
    >
      <div className="flex h-full w-[325px] items-center justify-end bg-primary/75 pr-[37px]">
        <Image src="/imgs/logo.svg" alt="logo" width={169} height={55} />
      </div>
      <div className="flex h-full flex-1 items-center bg-primary/75 pl-[37px]">
        <Navbar />
      </div>
    </div>
  );
};
