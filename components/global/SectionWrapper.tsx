import clsx from "clsx";
import React from "react";

type SectionWrapperProps = {
  children: React.ReactNode;
  className?: string;
};

export const SectionWrapper = ({
  children,
  className,
}: SectionWrapperProps) => {
  return (
    <div
      className={clsx(
        "container mx-auto px-1 py-2 lg:px-9 lg:py-20",
        className,
      )}
    >
      {children}
    </div>
  );
};
