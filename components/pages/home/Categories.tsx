import Image from "next/image";
import React from "react";

type CategoriesProps = {
  className?: string;
  buttonClassName?: string;
};

export const Categories = ({
  className = "relative z-10 mx-auto mt-5 lg:-mt-10 flex max-w-7xl flex-wrap items-center justify-center gap-3 lg:gap-6 duration-300",
  buttonClassName = "flex items-center justify-center gap-1 bg-white px-4 py-3 lg:px-9 lg:py-6 shadow-main duration-300 hover:bg-secondary",
}: CategoriesProps) => {
  return (
    <div className={className}>
      <button type="button" className={buttonClassName}>
        <Image
          src="/imgs/logos/reward.svg"
          alt="category icon"
          width={28}
          height={28}
          className="size-5 lg:size-7"
        />
        <span className="text-sm font-bold leading-8 text-svg lg:text-base">
          Awards
        </span>
      </button>
      <button type="button" className={buttonClassName}>
        <Image
          src="/imgs/logos/apps.svg"
          alt="category icon"
          width={28}
          height={28}
          className="size-5 lg:size-7"
        />
        <span className="text-sm font-bold leading-8 text-svg lg:text-base">
          Apps
        </span>
      </button>
      <button type="button" className={buttonClassName}>
        <Image
          src="/imgs/logos/products.svg"
          alt="category icon"
          width={28}
          height={28}
          className="size-5 lg:size-7"
        />
        <span className="text-sm font-bold leading-8 text-svg lg:text-base">
          products
        </span>
      </button>
      <button type="button" className={buttonClassName}>
        <Image
          src="/imgs/logos/videos.svg"
          alt="category icon"
          width={28}
          height={28}
          className="size-5 lg:size-7"
        />
        <span className="text-sm font-bold leading-8 text-svg lg:text-base">
          videos
        </span>
      </button>
      <button type="button" className={buttonClassName}>
        <Image
          src="/imgs/logos/downloads.svg"
          alt="category icon"
          width={28}
          height={28}
          className="size-5 lg:size-7"
        />
        <span className="text-sm font-bold leading-8 text-svg lg:text-base">
          downloads
        </span>
      </button>
      <button type="button" className={buttonClassName}>
        <Image
          src="/imgs/logos/mail.svg"
          alt="category icon"
          width={28}
          height={28}
          className="size-5 lg:size-7"
        />
        <span className="text-sm font-bold leading-8 text-svg lg:text-base">
          Contact Us
        </span>
      </button>
    </div>
  );
};
