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
    <div className={clsx("container mx-auto px-9 py-20", className)}>
      {children}
    </div>
  );
};
