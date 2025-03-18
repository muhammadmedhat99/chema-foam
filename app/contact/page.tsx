import { BreadcrumbComponent } from "@/components/global/Breadcrumb";
import { ContactForm } from "@/components/global/ContactForm";
import { CustomAccordion } from "@/components/pages/about/Accordion";
import { ContactCard } from "@/components/pages/contact/ContactCard";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { LucideLayoutGrid } from "lucide-react";
import Link from "next/link";
import React from "react";
import { BiUserPin } from "react-icons/bi";
import { CgArrowTopRightO } from "react-icons/cg";
import { CiLocationOn } from "react-icons/ci";
import { FiPhoneCall } from "react-icons/fi";
import { SlCallOut } from "react-icons/sl";

export default function page() {
  return (
    <div>
      <BreadcrumbComponent
        pageTitle={"Contact Us"}
        pages={[{ title: "Home", href: "/" }, { title: "Contact Us" }]}
      />

      <div className="mx-auto my-5 max-w-7xl px-2 md:my-10 lg:my-20">
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1" className="border-b-0">
            <AccordionTrigger>
              <p className="font-bold text-primary lg:text-3xl">
                <strong>For your Inquiries -</strong> Contact us in your
                preferred way.?
              </p>
            </AccordionTrigger>
            <AccordionContent>
              <div className="my-5 grid gap-3 md:grid-cols-2 md:gap-6 lg:grid-cols-3 lg:gap-9">
                <ContactCard
                  title="Call US"
                  color="primary"
                  icon={<CiLocationOn size={36} />}
                >
                  <div className="flex flex-col gap-1 px-7">
                    <h6 className="font-bold uppercase text-[#5A5A5A]">
                      Factory
                    </h6>
                    <Link
                      href="/"
                      className="flex items-center gap-2 text-xs text-svg"
                    >
                      10th of Ramadan - B4 Industrial Zone
                      <span>
                        <CgArrowTopRightO />
                      </span>
                    </Link>
                    <h6 className="mt-5 font-bold uppercase text-[#5A5A5A]">
                      office
                    </h6>
                    <Link
                      href="/"
                      className="flex flex-wrap items-center gap-2 text-xs text-svg"
                    >
                      11 Obour Buildings - Salah Salem - Nasr City - Cairo -
                      Egypt
                      <span>
                        <CgArrowTopRightO />
                      </span>
                    </Link>
                  </div>
                </ContactCard>
                <ContactCard
                  title="Call US"
                  color="primary"
                  icon={<SlCallOut size={36} />}
                >
                  <div className="flex flex-col gap-1 px-7">
                    <h6 className="font-bold uppercase text-[#5A5A5A]">
                      Factory
                    </h6>
                    <Link
                      href="/"
                      className="flex items-center gap-2 text-xs text-svg"
                    >
                      10th of Ramadan - B4 Industrial Zone
                      <span>
                        <CgArrowTopRightO />
                      </span>
                    </Link>
                    <h6 className="mt-5 font-bold uppercase text-[#5A5A5A]">
                      office
                    </h6>
                    <Link
                      href="/"
                      className="flex flex-wrap items-center gap-2 text-xs text-svg"
                    >
                      11 Obour Buildings - Salah Salem - Nasr City - Cairo -
                      Egypt
                      <span>
                        <CgArrowTopRightO />
                      </span>
                    </Link>
                  </div>
                </ContactCard>
                <ContactCard
                  title="Call US"
                  color="primary"
                  icon={<BiUserPin size={36} />}
                >
                  <div className="flex flex-col gap-1 px-7">
                    <h6 className="font-bold uppercase text-[#5A5A5A]">
                      Factory
                    </h6>
                    <Link
                      href="/"
                      className="flex items-center gap-2 text-xs text-svg"
                    >
                      10th of Ramadan - B4 Industrial Zone
                      <span>
                        <CgArrowTopRightO />
                      </span>
                    </Link>
                    <h6 className="mt-5 font-bold uppercase text-[#5A5A5A]">
                      office
                    </h6>
                    <Link
                      href="/"
                      className="flex flex-wrap items-center gap-2 text-xs text-svg"
                    >
                      11 Obour Buildings - Salah Salem - Nasr City - Cairo -
                      Egypt
                      <span>
                        <CgArrowTopRightO />
                      </span>
                    </Link>
                  </div>
                </ContactCard>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <Accordion type="single" collapsible>
          <AccordionItem value="item-1" className="border-b-0">
            <AccordionTrigger>
              <p className="font-bold text-primary lg:text-3xl">
                <strong>Distributors</strong> Contact your nearest distributor.
              </p>
            </AccordionTrigger>
            <AccordionContent>
              <div className="my-5 grid gap-3 md:grid-cols-2 md:gap-6 lg:grid-cols-4 lg:gap-9">
                <ContactCard
                  title="Cairo"
                  color="secondary"
                  icon={<SlCallOut size={32} />}
                >
                  <div className="flex flex-col gap-1 px-7">
                    <h6 className="font-bold uppercase text-[#5A5A5A]">
                      Nasr City
                    </h6>
                    <Link
                      href="tel:+201558890007"
                      className="flex items-center gap-2 text-xs text-svg"
                    >
                      <span>
                        <FiPhoneCall size={16} />
                      </span>
                      +201558890007
                    </Link>
                    <h6 className="mt-5 font-bold uppercase text-[#5A5A5A]">
                      Maadi
                    </h6>
                    <Link
                      href="tel:+201558890007"
                      className="flex items-center gap-2 text-xs text-svg"
                    >
                      <span>
                        <FiPhoneCall size={16} />
                      </span>
                      +201558890007
                    </Link>
                  </div>
                </ContactCard>
                <ContactCard
                  title="Cairo"
                  color="secondary"
                  icon={<SlCallOut size={32} />}
                >
                  <div className="flex flex-col gap-1 px-7">
                    <h6 className="font-bold uppercase text-[#5A5A5A]">
                      Nasr City
                    </h6>
                    <Link
                      href="tel:+201558890007"
                      className="flex items-center gap-2 text-xs text-svg"
                    >
                      <span>
                        <FiPhoneCall size={16} />
                      </span>
                      +201558890007
                    </Link>
                    <h6 className="mt-5 font-bold uppercase text-[#5A5A5A]">
                      Maadi
                    </h6>
                    <Link
                      href="tel:+201558890007"
                      className="flex items-center gap-2 text-xs text-svg"
                    >
                      <span>
                        <FiPhoneCall size={16} />
                      </span>
                      +201558890007
                    </Link>
                  </div>
                </ContactCard>
                <ContactCard
                  title="Cairo"
                  color="secondary"
                  icon={<SlCallOut size={32} />}
                >
                  <div className="flex flex-col gap-1 px-7">
                    <h6 className="font-bold uppercase text-[#5A5A5A]">
                      Nasr City
                    </h6>
                    <Link
                      href="tel:+201558890007"
                      className="flex items-center gap-2 text-xs text-svg"
                    >
                      <span>
                        <FiPhoneCall size={16} />
                      </span>
                      +201558890007
                    </Link>
                    <h6 className="mt-5 font-bold uppercase text-[#5A5A5A]">
                      Maadi
                    </h6>
                    <Link
                      href="tel:+201558890007"
                      className="flex items-center gap-2 text-xs text-svg"
                    >
                      <span>
                        <FiPhoneCall size={16} />
                      </span>
                      +201558890007
                    </Link>
                  </div>
                </ContactCard>
                <ContactCard
                  title="Cairo"
                  color="secondary"
                  icon={<SlCallOut size={32} />}
                >
                  <div className="flex flex-col gap-1 px-7">
                    <h6 className="font-bold uppercase text-[#5A5A5A]">
                      Nasr City
                    </h6>
                    <Link
                      href="tel:+201558890007"
                      className="flex items-center gap-2 text-xs text-svg"
                    >
                      <span>
                        <FiPhoneCall size={16} />
                      </span>
                      +201558890007
                    </Link>
                    <h6 className="mt-5 font-bold uppercase text-[#5A5A5A]">
                      Maadi
                    </h6>
                    <Link
                      href="tel:+201558890007"
                      className="flex items-center gap-2 text-xs text-svg"
                    >
                      <span>
                        <FiPhoneCall size={16} />
                      </span>
                      +201558890007
                    </Link>
                  </div>
                </ContactCard>
                <ContactCard
                  title="Cairo"
                  color="secondary"
                  icon={<SlCallOut size={32} />}
                >
                  <div className="flex flex-col gap-1 px-7">
                    <h6 className="font-bold uppercase text-[#5A5A5A]">
                      Nasr City
                    </h6>
                    <Link
                      href="tel:+201558890007"
                      className="flex items-center gap-2 text-xs text-svg"
                    >
                      <span>
                        <FiPhoneCall size={16} />
                      </span>
                      +201558890007
                    </Link>
                    <h6 className="mt-5 font-bold uppercase text-[#5A5A5A]">
                      Maadi
                    </h6>
                    <Link
                      href="tel:+201558890007"
                      className="flex items-center gap-2 text-xs text-svg"
                    >
                      <span>
                        <FiPhoneCall size={16} />
                      </span>
                      +201558890007
                    </Link>
                  </div>
                </ContactCard>
                <ContactCard
                  title="Cairo"
                  color="secondary"
                  icon={<SlCallOut size={32} />}
                >
                  <div className="flex flex-col gap-1 px-7">
                    <h6 className="font-bold uppercase text-[#5A5A5A]">
                      Nasr City
                    </h6>
                    <Link
                      href="tel:+201558890007"
                      className="flex items-center gap-2 text-xs text-svg"
                    >
                      <span>
                        <FiPhoneCall size={16} />
                      </span>
                      +201558890007
                    </Link>
                    <h6 className="mt-5 font-bold uppercase text-[#5A5A5A]">
                      Maadi
                    </h6>
                    <Link
                      href="tel:+201558890007"
                      className="flex items-center gap-2 text-xs text-svg"
                    >
                      <span>
                        <FiPhoneCall size={16} />
                      </span>
                      +201558890007
                    </Link>
                  </div>
                </ContactCard>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <h6 className="my-5 text-2xl font-semibold text-primary lg:text-5xl">
          Contact Forms
        </h6>
        <CustomAccordion
          title="Products and Solutions"
          icon={<LucideLayoutGrid />}
          content={<ContactForm />}
        />
      </div>
    </div>
  );
}
