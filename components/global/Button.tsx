import { cn } from "@/lib/utils";
import { Link } from "@/i18n/navigation";
import React from "react";
type ButtonProps = {
  text: string;
  isLink: boolean;
  href?: string;
  children?: React.ReactNode;
  className?: string;
  type?: string;
};
export const Button = ({
  text,
  isLink,
  href = "/",
  children,
  className,
  type,
}: ButtonProps) => {
  return (
    <>
      {isLink ? (
        <Link
          href={href}
          className={cn(
            "flex items-center justify-center gap-2 bg-paragraph px-10 py-6 text-xl font-bold text-primary",
            className,
          )}
        >
          {text}
          {children}
        </Link>
      ) : (
        <div
          className={cn(
            "flex items-center justify-center gap-2 bg-paragraph px-10 py-6 text-xl font-bold text-primary",
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
