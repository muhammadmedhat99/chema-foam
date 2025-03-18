import React from "react";

import { BreadcrumbComponent } from "@/components/global/Breadcrumb";
import { CustomAccordion } from "@/components/pages/about/Accordion";
import { Clients } from "@/components/pages/home/Clients";
import Image from "next/image";
import { Briefcase } from "lucide-react";
import { BiMessageSquareDots } from "react-icons/bi";

export default function page() {
  return (
    <div>
      <BreadcrumbComponent
        pageTitle="Chema Foam Profile"
        pages={[{ title: "Home", href: "/" }, { title: "About Us" }]}
      />

      <h3 className="relative z-50 mx-3 -mt-[54px] mb-16 min-h-[108px] max-w-[582px] bg-[#1F3566D9] px-3 py-7 text-center text-2xl text-white lg:mx-auto lg:px-32 lg:text-5xl">
        Who We Are ?!
      </h3>

      <div className="bg-[#1EBAE51A] px-3 py-11 lg:px-24">
        <div className="mx-auto max-w-5xl text-center text-xl text-primary lg:text-2xl">
          Chema foam is a company that specialized in providing innovative,
          modern, and advanced engineering solutions, systems, and building
          applications that have resulted in significant development in the
          field of building materials, thermal and waterproofing.
        </div>

        <p className="mx-auto mt-4 max-w-5xl text-center text-sm text-svg lg:text-base">
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

      <CustomAccordion
        title="Chema Foam Story"
        icon={<Briefcase size={36} />}
        content={
          <>
            <p className="text-primary">
              We strive hard to be the pioneers of modern environmentally
              friendly building technology through the concerted joint efforts
              of all our success partners and keenness on continuous improvement
              and development, To provide various engineering solutions and
              innovative, advanced, and unique building systems.
            </p>

            <div className="mt-3 grid gap-2 lg:grid-cols-2">
              <Image
                src="/imgs/about/1.jpg"
                alt="about image"
                width={1440}
                height={720}
                className="aspect-video"
              />
              <Image
                src="/imgs/about/1.jpg"
                alt="about image"
                width={1440}
                height={720}
                className="aspect-video"
              />
            </div>
          </>
        }
      />
      <CustomAccordion
        title="Our Message"
        icon={<BiMessageSquareDots size={36} />}
        content={
          <>
            <p className="text-primary">
              We strive hard to be the pioneers of modern environmentally
              friendly building technology through the concerted joint efforts
              of all our success partners and keenness on continuous improvement
              and development, To provide various engineering solutions and
              innovative, advanced, and unique building systems.
            </p>

            <div className="mt-3">
              <Image
                src="/imgs/about/1.jpg"
                alt="about image"
                width={1440}
                height={720}
                className="aspect-video"
              />
            </div>
          </>
        }
      />
      <Clients />
    </div>
  );
}
