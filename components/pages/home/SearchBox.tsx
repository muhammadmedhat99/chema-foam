"use client";
import React from "react";
import { BiSearch } from "react-icons/bi";

type SearchBoxProps = {};

export const SearchBoxComponent = (props: SearchBoxProps) => {
  return (
    <div className="relative z-10 mx-auto mt-5 flex max-w-3xl flex-col items-center justify-center gap-6 bg-primary/85 px-2 py-2 backdrop-blur-sm lg:-mt-24 lg:px-20 lg:py-20">
      <h2 className="text-lg font-bold text-white lg:text-4xl">
        How can we help you?
      </h2>
      <div className="relative w-full">
        <input
          type="text"
          className="w-full bg-paragraph px-4 py-5 text-xs shadow-main outline-none placeholder:text-svg lg:text-base"
          placeholder="Find Products, Application, Systems and Solutions....."
        />
        <BiSearch className="absolute end-4 top-1/2 size-4 -translate-y-1/2 text-[#5A5A5A]" />
      </div>
    </div>
  );
};
