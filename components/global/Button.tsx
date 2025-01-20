import clsx from "clsx";
import Link from "next/link";
import React from "react";
type ButtonProps = {
  text: string;
  isLink: boolean;
  href?: string;
  children?: React.ReactNode;
  className?: string;
};
export const Button = ({
  text,
  isLink,
  href = "/",
  children,
  className,
}: ButtonProps) => {
  return (
    <>
      {isLink ? (
        <Link
          href={href}
          className={clsx(
            "bg-paragraph flex items-center justify-center gap-2 px-10 py-6 text-xl font-bold text-primary",
            className,
          )}
        >
          {text}
          {children}
        </Link>
      ) : (
        <div
          className={clsx(
            "bg-paragraph flex items-center justify-center gap-2 px-10 py-6 text-xl font-bold text-primary",
            className,
          )}
        >
          {text}
          {children}
        </div>
      )}
    </>
  );
};
