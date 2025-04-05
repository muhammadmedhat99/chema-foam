import { DownloadIcon } from "@/components/icons";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import React from "react";

export const DownloadCard = ({ product }: any) => {
  return (
    <div className="relative flex h-fit w-full flex-col gap-1.5 border border-secondary pb-5">
      <Image
        src={product?.card_image?.image || "/imgs/products/1.png"}
        width={1024}
        height={1024}
        alt="application image"
        className="h-[244px] w-[273px] object-contain p-7 duration-300 hover:scale-110"
      />

      <h6 className="text-center text-2xl font-bold text-primary">
        {product?.title}
      </h6>

      <Link
        href={product?.pdf[0]?.file_url || "#"}
        target="_blank"
        className="mx-auto flex w-11/12 items-center justify-center gap-2 bg-paragraph p-3 duration-300 hover:bg-slate-400 md:w-10/12 lg:w-9/12"
      >
        <span className="text-xl text-secGray">Download</span>
        <DownloadIcon width={24} height={24} className="fill-secGray" />
      </Link>
    </div>
  );
};
