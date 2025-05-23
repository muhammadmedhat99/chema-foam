import clsx from "clsx";
import { Link } from "@/i18n/navigation";
import React from "react";
import { RiArrowDropRightFill } from "react-icons/ri";

type PageHeaderProps = {
  title: string;
  link?: string;
  href?: string;
  description?: string;
};

export const PageHeader = ({
  title,
  link,
  href,
  description,
}: PageHeaderProps) => {
  return (
    <>
      <div className="flex w-full items-center justify-between lg:justify-center">
        <h2
          className={clsx(
            "relative pb-5 text-2xl font-bold text-primary before:absolute before:bottom-0 before:h-1 before:w-full before:bg-secondary lg:text-5xl",
            link && "ltr:ml-auto rtl:mr-auto",
          )}
        >
          {title}
        </h2>

        {link && href && (
          <Link
            href={href}
            className="flex items-center text-xs font-semibold uppercase text-svg lg:gap-2 lg:text-xl ltr:ml-auto rtl:mr-auto"
          >
            <span>{link}</span>
            <RiArrowDropRightFill size={30} className="rtl:-scale-x-100" />
          </Link>
        )}
      </div>
      {description && (
        <p className="pt-8 text-center text-xl leading-8 text-svg">
          {description}
        </p>
      )}
    </>
  );
};
