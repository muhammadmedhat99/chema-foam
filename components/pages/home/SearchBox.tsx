"use client";
import React from "react";
import { BiSearch } from "react-icons/bi";

type SearchBoxProps = {};

export const SearchBoxComponent = (props: SearchBoxProps) => {
  return (
    <div className="relative z-10 mx-auto -mt-24 flex max-w-3xl flex-col items-center justify-center gap-6 bg-primary/85 px-20 py-20 backdrop-blur-sm">
      <h2 className="text-4xl font-bold text-white">How can we help you?</h2>
      <div className="relative w-full">
        <input
          type="text"
          className="shadow-main w-full bg-paragraph px-4 py-5 text-base outline-none placeholder:text-[#868686]"
          placeholder="Find Products, Application, Systems and Solutions....."
        />
        <BiSearch className="absolute end-4 top-1/2 size-4 -translate-y-1/2 text-[#5A5A5A]" />
      </div>
    </div>
  );
};
