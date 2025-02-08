import React from "react";
import Image from "next/image";
import { Button } from "./Button";
import { FaArrowRightLong } from "react-icons/fa6";
import { CalculatorIcon, DownloadIcon, EyeIcon, VideoIcon } from "../icons";
import Link from "next/link";

type ProductCardProps = {};

export const ProductCard = (props: ProductCardProps) => {
  return (
    <div className="group relative h-[386px] w-[273px] overflow-hidden border border-secondary">
      <Image
        src="/imgs/products/1.png"
        width={1024}
        height={1024}
        alt="application image"
        className="h-[244px] w-[273px] object-contain p-7 duration-300"
      />

      <div className="absolute left-6 top-9 z-50 flex flex-col gap-3">
        <Link
          href="/"
          className="flex size-8 items-center justify-center bg-paragraph"
        >
          <EyeIcon width={19} height={11} className="fill-[#5A5A5A]" />
        </Link>
        <Link
          href="/"
          className="flex size-8 items-center justify-center bg-paragraph"
        >
          <VideoIcon width={18} height={14} className="fill-[#5A5A5A]" />
        </Link>
        <Link
          href="/"
          className="flex size-8 items-center justify-center bg-paragraph"
        >
          <CalculatorIcon width={17} height={18} className="fill-[#5A5A5A]" />
        </Link>
        <Link
          href="/"
          className="flex size-8 items-center justify-center bg-paragraph"
        >
          <DownloadIcon width={16} height={18} className="fill-[#5A5A5A]" />
        </Link>
      </div>

      <div className="absolute bottom-0 top-[284px] flex flex-col justify-center gap-2 px-2 py-3 text-center duration-300 group-hover:bottom-0 group-hover:left-0 group-hover:right-0 group-hover:top-0 group-hover:h-[386px] group-hover:bg-primary/65">
        <h3 className="max-h-[90px] text-xl font-bold text-primary group-hover:pl-[52px] group-hover:text-white">
          Chema Proof 105
        </h3>
        <p className="text-primary group-hover:pl-[52px] group-hover:text-white">
          Chema Proof 105
        </p>
        <p className="max-h-[161px] overflow-y-hidden px-2 pb-4 text-xs text-white opacity-0 group-hover:pl-[52px] group-hover:opacity-100">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly
          believable.There are many variations of passages of Lorem Ipsum
          available, but the majority have suffered alteration in some form, by
          injected humour, or randomised words which don't look even slightly
          believable.
        </p>
        <Button
          text="View Product"
          isLink={true}
          href="/product"
          className="mx-auto h-16 w-[200px] overflow-hidden text-sm opacity-0 group-hover:opacity-100"
        >
          <FaArrowRightLong />
        </Button>
      </div>

      <div className="absolute bottom-0 right-0 flex h-[43px] w-[74px] items-center justify-center bg-secondary font-bold text-primary group-hover:hidden">
        25 kg
      </div>
    </div>
  );
};
