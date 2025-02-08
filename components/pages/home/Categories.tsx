import Image from "next/image";
import React from "react";

type CategoriesProps = {
  className?: string;
  buttonClassName?: string;
};

export const Categories = ({
  className = "relative z-10 mx-auto -mt-10 flex max-w-7xl flex-wrap items-center justify-center gap-6",
  buttonClassName = "flex items-center justify-center gap-1 bg-white px-9 py-6 shadow-main",
}: CategoriesProps) => {
  return (
    <div className={className}>
      <button type="button" className={buttonClassName}>
        <Image
          src="/imgs/logos/reward.svg"
          alt="category icon"
          width={28}
          height={28}
        />
        <span className="text-base font-bold leading-8 text-svg">Awards</span>
      </button>
      <button type="button" className={buttonClassName}>
        <Image
          src="/imgs/logos/apps.svg"
          alt="category icon"
          width={28}
          height={28}
        />
        <span className="text-base font-bold leading-8 text-svg">Apps</span>
      </button>
      <button type="button" className={buttonClassName}>
        <Image
          src="/imgs/logos/products.svg"
          alt="category icon"
          width={28}
          height={28}
        />
        <span className="text-base font-bold leading-8 text-svg">products</span>
      </button>
      <button type="button" className={buttonClassName}>
        <Image
          src="/imgs/logos/videos.svg"
          alt="category icon"
          width={28}
          height={28}
        />
        <span className="text-base font-bold leading-8 text-svg">videos</span>
      </button>
      <button type="button" className={buttonClassName}>
        <Image
          src="/imgs/logos/downloads.svg"
          alt="category icon"
          width={28}
          height={28}
        />
        <span className="text-base font-bold leading-8 text-svg">
          downloads
        </span>
      </button>
      <button type="button" className={buttonClassName}>
        <Image
          src="/imgs/logos/mail.svg"
          alt="category icon"
          width={28}
          height={28}
        />
        <span className="text-base font-bold leading-8 text-svg">
          Contact Us
        </span>
      </button>
    </div>
  );
};
