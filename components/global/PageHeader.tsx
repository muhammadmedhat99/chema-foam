import React from "react";

type Props = {
  title: string;
};

export const PageHeader = (props: Props) => {
  return (
    <div className="flex w-full items-center justify-center">
      <h2 className="relative pb-5 text-5xl font-bold text-primary before:absolute before:bottom-0 before:h-1 before:w-full before:bg-secondary">
        {props.title}
      </h2>
    </div>
  );
};
