import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
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
  const t = useTranslations();
  return (
    <div className={className}>
      <Link href="/awards" type="button" className={buttonClassName}>
        <Image
          src="/imgs/logos/reward.svg"
          alt="category icon"
          width={28}
          height={28}
          className="size-5 lg:size-7"
        />
        <span className="text-sm font-bold leading-8 text-svg lg:text-base">
          {t("Home.awards")}
        </span>
      </Link>
      <Link href="/applications" type="button" className={buttonClassName}>
        <Image
          src="/imgs/logos/apps.svg"
          alt="category icon"
          width={28}
          height={28}
          className="size-5 lg:size-7"
        />
        <span className="text-sm font-bold leading-8 text-svg lg:text-base">
          {t("Header.applications")}
        </span>
      </Link>
      <Link href="/products" type="button" className={buttonClassName}>
        <Image
          src="/imgs/logos/products.svg"
          alt="category icon"
          width={28}
          height={28}
          className="size-5 lg:size-7"
        />
        <span className="text-sm font-bold leading-8 text-svg lg:text-base">
          {t("Header.products")}
        </span>
      </Link>
      <Link href="/videos" type="button" className={buttonClassName}>
        <Image
          src="/imgs/logos/videos.svg"
          alt="category icon"
          width={28}
          height={28}
          className="size-5 lg:size-7"
        />
        <span className="text-sm font-bold leading-8 text-svg lg:text-base">
          {t("Header.videos")}
        </span>
      </Link>
      <Link href="/downloads" type="button" className={buttonClassName}>
        <Image
          src="/imgs/logos/downloads.svg"
          alt="category icon"
          width={28}
          height={28}
          className="size-5 lg:size-7"
        />
        <span className="text-sm font-bold leading-8 text-svg lg:text-base">
          {t("Header.downloads")}
        </span>
      </Link>
      <Link href="/contact" type="button" className={buttonClassName}>
        <Image
          src="/imgs/logos/mail.svg"
          alt="category icon"
          width={28}
          height={28}
          className="size-5 lg:size-7"
        />
        <span className="text-sm font-bold leading-8 text-svg lg:text-base">
          {t("Header.contact")}
        </span>
      </Link>
    </div>
  );
};
