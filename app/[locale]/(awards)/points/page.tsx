import React from "react";
import Image from "next/image";

export default function PointsPage() {
  return (
    <div className="flex w-full flex-1 flex-col items-center gap-2 px-40 py-10">
      <div className="my-10 flex items-center">
        <Image
          src="/imgs/image.png"
          alt="points image"
          width={1024}
          height={1024}
          className="size-[450px]"
        />
        <Image
          src="/imgs/image_2.png"
          alt="points image"
          width={1024}
          height={1024}
          className="size-[450px]"
        />
      </div>
      <img
        src="/imgs/ssss.png"
        alt="Chema Group"
        className="h-[7.5rem] w-[19.9375rem] object-cover lg:mt-[3rem] lg:h-[13.5rem] lg:w-full"
      />
      <img
        src="/imgs/ChemaGroupBlueIcon.svg"
        alt="Chema Group"
        className="my-[2rem] mb-[6rem] h-[3.25rem] w-[9.98625rem] self-center lg:mb-0 lg:mt-[7rem]"
      />
    </div>
  );
}
