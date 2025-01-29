import Image from "next/image";
import React from "react";

type CategoriesProps = {};

export const Categories = (props: CategoriesProps) => {
  return (
    <div className="relative z-10 mx-auto -mt-10 flex max-w-7xl flex-wrap items-center justify-center gap-6">
      <button
        type="button"
        className="shadow-main flex items-center justify-center gap-1 bg-white px-9 py-6"
      >
        <Image
          src="/imgs/logos/reward.svg"
          alt="category icon"
          width={28}
          height={28}
        />
        <span className="text-base font-bold leading-8 text-[#868686]">
          Awards
        </span>
      </button>
      <button
        type="button"
        className="shadow-main flex items-center justify-center gap-1 bg-white px-9 py-6"
      >
        <Image
          src="/imgs/logos/apps.svg"
          alt="category icon"
          width={28}
          height={28}
        />
        <span className="text-base font-bold leading-8 text-[#868686]">
          Apps
        </span>
      </button>
      <button
        type="button"
        className="shadow-main flex items-center justify-center gap-1 bg-white px-9 py-6"
      >
        <Image
          src="/imgs/logos/products.svg"
          alt="category icon"
          width={28}
          height={28}
        />
        <span className="text-base font-bold leading-8 text-[#868686]">
          products
        </span>
      </button>
      <button
        type="button"
        className="shadow-main flex items-center justify-center gap-1 bg-white px-9 py-6"
      >
        <Image
          src="/imgs/logos/videos.svg"
          alt="category icon"
          width={28}
          height={28}
        />
        <span className="text-base font-bold leading-8 text-[#868686]">
          videos
        </span>
      </button>
      <button
        type="button"
        className="shadow-main flex items-center justify-center gap-1 bg-white px-9 py-6"
      >
        <Image
          src="/imgs/logos/downloads.svg"
          alt="category icon"
          width={28}
          height={28}
        />
        <span className="text-base font-bold leading-8 text-[#868686]">
          downloads
        </span>
      </button>
      <button
        type="button"
        className="shadow-main flex items-center justify-center gap-1 bg-white px-9 py-6"
      >
        <Image
          src="/imgs/logos/mail.svg"
          alt="category icon"
          width={28}
          height={28}
        />
        <span className="text-base font-bold leading-8 text-[#868686]">
          Contact Us
        </span>
      </button>
    </div>
  );
};
