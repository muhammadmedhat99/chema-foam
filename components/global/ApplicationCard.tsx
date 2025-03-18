import Image from "next/image";
import React from "react";
import { Button } from "./Button";
import { FaArrowRightLong } from "react-icons/fa6";

type ApplicationCardProps = {};

export const ApplicationCard = (props: ApplicationCardProps) => {
  return (
    <div className="group relative h-[386px] w-[273px] overflow-hidden border border-secondary">
      <Image
        src="/imgs/applications/1.jpg"
        width={1024}
        height={1024}
        alt="application image"
        className="h-[278px] w-[273px] object-cover duration-300 group-hover:h-[386px]"
      />

      <div className="absolute bottom-0 top-[278px] flex flex-col justify-between bg-white px-2 py-3 text-center duration-300 group-hover:bottom-0 group-hover:left-0 group-hover:right-0 group-hover:top-0 group-hover:h-[386px] group-hover:bg-primary/50">
        <h3 className="max-h-[90px] text-xl font-bold text-primary group-hover:text-white">
          Contrary to popular belief Many desktop publishing packages and web
          page
        </h3>
        <p className="max-h-[161px] overflow-y-hidden pb-4 text-xs text-white">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly
          believable.There are many variations of passages of Lorem Ipsum
          available, but the majority have suffered alteration in some form, by
          injected humour, or randomised words which don't look even slightly
          believable.
        </p>
        <Button
          text="Who We Are"
          isLink={true}
          href="/about"
          className="mx-auto h-16 w-[220px] text-sm"
        >
          <FaArrowRightLong />
        </Button>
      </div>
    </div>
  );
};
