import Image from "next/image";
import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "../ui/breadcrumb";

interface BreadcrumbProps {
  pageTitle: string;
  pages: { title: string; href?: string }[];
}

export const BreadcrumbComponent = ({ pageTitle, pages }: BreadcrumbProps) => {
  return (
    <div
      className="relative mt-[-100px] h-[400px] w-full bg-cover bg-center bg-no-repeat pt-10"
      style={{ backgroundImage: "url(/imgs/breadcrumb.png)" }}
    >
      <div className="absolute left-0 top-0 z-0 h-full w-full bg-gradient-to-t from-[#000D2B] to-[#F5F5F7CC]" />
      <div className="relative mx-auto flex h-full w-full max-w-7xl items-center justify-between px-2">
        <div className="flex flex-col gap-3">
          <h3 className="text-2xl text-white lg:text-5xl">{pageTitle}</h3>
          <Breadcrumb>
            <BreadcrumbList>
              {pages.map((item, index) => (
                <React.Fragment key={index}>
                  <BreadcrumbItem>
                    {item?.href ? (
                      <BreadcrumbLink
                        href={item.href}
                        className="font-medium text-white duration-300 hover:text-primary"
                      >
                        {item.title}
                      </BreadcrumbLink>
                    ) : (
                      <BreadcrumbPage className="text-secondary">
                        {item?.title}
                      </BreadcrumbPage>
                    )}
                  </BreadcrumbItem>
                  {item?.href && (
                    <BreadcrumbSeparator className="mt-1.5 text-white" />
                  )}
                </React.Fragment>
              ))}
            </BreadcrumbList>
          </Breadcrumb>
        </div>

        <Image
          src="/imgs/logos/icon.svg"
          alt="Chema Logo"
          width={146}
          height={146}
          className="absolute bottom-20 z-10 hidden lg:block ltr:right-20 rtl:left-20"
        />
      </div>
    </div>
  );
};
