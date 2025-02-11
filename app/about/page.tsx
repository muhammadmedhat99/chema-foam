import { BreadcrumbComponent } from "@/components/global/Breadcrumb";
import { Clients } from "@/components/pages/home/Clients";
import React from "react";

export default function page() {
  return (
    <div>
      <BreadcrumbComponent
        pageTitle="Chema Foam Profile"
        pages={[{ title: "Home", href: "/" }, { title: "About Us" }]}
      />

      <h3 className="relative z-50 mx-auto -mt-[54px] mb-16 min-h-[108px] max-w-[582px] bg-[#1F3566D9] px-32 py-7 text-2xl text-white lg:text-5xl">
        Who We Are ?!
      </h3>

      <div className="bg-[#1EBAE51A] px-24 py-11">
        <div className="mx-auto max-w-5xl text-center text-2xl text-primary">
          Chema foam is a company that specialized in providing innovative,
          modern, and advanced engineering solutions, systems, and building
          applications that have resulted in significant development in the
          field of building materials, thermal and waterproofing.
        </div>

        <p className="mx-auto mt-4 max-w-5xl text-center text-svg">
          Chema Foam produces many polystyrene foam products and dry mix
          products as modern products in the field The world of construction,
          thermal and waterproof insulation, and industrial packaging. Our
          products and services serve many Vital industries in the business
          world, such as the building and construction sector, the contracting
          sector, and the commodities sector The durable, transport sector,
          refrigerated transport, agricultural sector, furniture, and decoration
          .......
        </p>
      </div>

      <div className="mx-auto my-16 max-w-3xl px-2">
        <iframe
          src="https://www.youtube.com/embed/qGBCn9j5TZk?si=3LEH5PZMqgdSU-LS"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          className="h-[331px] w-full"
        ></iframe>
      </div>

      <Clients />
    </div>
  );
}
