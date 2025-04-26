import Image from "next/image";
import React from "react";
import { Categories } from "../pages/home/Categories";
import { Link } from "@/i18n/navigation";
import { FaFacebookSquare, FaLinkedin, FaYoutubeSquare } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";
import { FadeIn } from "../global/FadeIn";
import { useTranslations } from "next-intl";

export const Footer = () => {
  const t = useTranslations();
  return (
    <FadeIn>
      <div className="bg-primary px-2 py-14">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col items-center justify-between gap-5 lg:flex-row">
            <Image src="/imgs/logo.svg" alt="logo" width={200} height={68} />
            <Categories
              className="flex max-w-7xl flex-wrap items-center justify-center gap-4"
              buttonClassName="flex items-center justify-center gap-1 bg-white w-[135px] h-[60px] shadow-main bg-white/80 duration-300 hover:bg-secondary"
            />
          </div>

          <div className="grid grid-cols-1 gap-20 pt-20 md:grid-cols-2 lg:grid-cols-4">
            {/* Need Help Section */}
            <div>
              <h3 className="mb-4 font-bold text-secondary">
                {t("Footer.need_help")}
              </h3>
              <div className="flex items-center justify-between">
                <ul className="space-y-2">
                  <li>
                    <Link
                      href="/"
                      className="text-white duration-300 hover:text-secondary"
                    >
                      {t("Header.home")}
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/about"
                      className="text-white duration-300 hover:text-secondary"
                    >
                      {t("Header.about")}
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/applications"
                      className="text-white duration-300 hover:text-secondary"
                    >
                      {t("Header.applications")}
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/products"
                      className="text-white duration-300 hover:text-secondary"
                    >
                      {t("Header.products")}
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/systems"
                      className="text-white duration-300 hover:text-secondary"
                    >
                      {t("Header.systems")}
                    </Link>
                  </li>
                </ul>
                <ul>
                  <li className="space-y-2">
                    <Link
                      href="/videos"
                      className="text-white duration-300 hover:text-secondary"
                    >
                      {t("Header.videos")}
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/downloads"
                      className="text-white duration-300 hover:text-secondary"
                    >
                      {t("Header.downloads")}
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/contact"
                      className="text-white duration-300 hover:text-secondary"
                    >
                      {t("Header.contact")}
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* Map Location Section */}
            <div>
              <h3 className="mb-4 font-bold text-secondary">
                {t("Footer.map_location")}
              </h3>
              <div>
                <p className="font-bold text-white">{t("Footer.factory")}</p>
                <a
                  href="https://www.google.com/maps/place/Chema+Foam+Group+-+%D9%83%D9%8A%D9%85%D8%A7+%D9%81%D9%88%D9%85%E2%80%AD/@30.3196073,31.7795342,15z/data=!4m6!3m5!1s0x14f80796d8433167:0xb2ed4d649c3b3c9e!8m2!3d30.3196073!4d31.7795342!16s%2Fg%2F11c1rfd9c4?sa=X&ved=2ahUKEwjb24HwlZD_AhXLTaQEHXS6DfMQ_BJ6BAhMEAg&entry=tts&shorturl=1"
                  target="_blanc"
                  className="text-sm text-paragraph"
                >
                  {t("Footer.factory_location")}
                </a>
              </div>
              <div className="mt-4">
                <p className="font-bold text-white">{t("Footer.office")}</p>
                <a
                  href="https://www.google.com/maps/place/TAQA+Misr/@30.078028,31.3113224,21z/data=!4m7!3m6!1s0x14581872016c19c1:0x599141d37b8d1d8d!8m2!3d30.0779342!4d31.3115634!15sCj0xMSBPYm91ciBCdWlsZGluZ3MgLSBTYWxhaCBTYWxlbSAtIE5hc3IgQ2l0eSBDYWlybyAtIEVneXB04oCtkgEaaGVhdGluZ19lcXVpcG1lbnRfc3VwcGxpZXLgAQA!16s%2Fg%2F1q5bpk6s2?entry=tts&shorturl=1"
                  target="_blanc"
                  className="text-sm text-paragraph"
                >
                  {t("Footer.office_location")}
                </a>
              </div>
            </div>

            {/* Follow Us Section */}
            <div>
              <h3 className="mb-4 font-bold text-secondary">
                {t("Footer.follow_us")}
              </h3>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="text-white/80 duration-300 hover:text-secondary"
                >
                  <FaFacebookSquare size={36} />
                </a>
                <a
                  href="#"
                  className="text-white/80 duration-300 hover:text-secondary"
                >
                  <FaLinkedin size={36} />
                </a>
                <a
                  href="#"
                  className="text-white/80 duration-300 hover:text-secondary"
                >
                  <FaYoutubeSquare size={36} />
                </a>
              </div>
              <a
                href="tel:+01002278080"
                className="mt-8 flex items-center gap-2 text-2xl font-bold text-white"
              >
                <FiPhoneCall className="size-6 text-secondary" />
                01002278080
              </a>
              <a
                href="tel:+0221276230"
                className="mt-8 flex items-center gap-2 text-2xl font-bold text-white"
              >
                <FiPhoneCall className="size-6 text-secondary" />
                0221276230
              </a>
            </div>

            {/* Logo Section */}
            <Image
              src="/imgs/logos/icon.svg"
              alt="Chema Logo"
              width={146}
              height={146}
              className="mt-20"
            />
          </div>
          <div className="text-sm text-[#1EBAE5]">
            Copyright © {new Date().getFullYear()} Chema Foam Group
          </div>
        </div>
      </div>
    </FadeIn>
  );
};
