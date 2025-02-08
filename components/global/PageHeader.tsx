import clsx from "clsx";
import Link from "next/link";
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
      <div className="flex w-full items-center justify-center">
        <h2
          className={clsx(
            "relative pb-5 text-5xl font-bold text-primary before:absolute before:bottom-0 before:h-1 before:w-full before:bg-secondary",
            link && "ml-auto",
          )}
        >
          {title}
        </h2>

        {link && href && (
          <Link
            href={href}
            className="ml-auto flex items-center gap-2 text-xl font-semibold uppercase text-svg"
          >
            <span>{link}</span>
            <RiArrowDropRightFill size={35} />
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
