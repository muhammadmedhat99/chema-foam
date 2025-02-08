import Image from "next/image";
import React from "react";
import { Categories } from "../pages/home/Categories";
import Link from "next/link";
import { FaFacebookSquare, FaLinkedin, FaYoutubeSquare } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";

export const Footer = () => {
  return (
    <div className="bg-primary py-14">
      <div className="mx-auto max-w-7xl">
        <div className="flex items-center justify-between gap-5">
          <Image src="/imgs/logo.svg" alt="logo" width={200} height={68} />
          <Categories
            className="flex max-w-7xl flex-wrap items-center justify-center gap-4"
            buttonClassName="flex items-center justify-center gap-1 bg-white w-[135px] h-[60px] shadow-main bg-white/80"
          />
        </div>

        <div className="grid grid-cols-4 gap-20 pt-20">
          {/* Need Help Section */}
          <div>
            <h3 className="mb-4 font-bold text-secondary">Need Help?</h3>
            <div className="flex items-center justify-between">
              <ul className="space-y-2">
                <li>
                  <Link
                    href="#"
                    className="text-white duration-300 hover:text-secondary"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-white duration-300 hover:text-secondary"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-white duration-300 hover:text-secondary"
                  >
                    Applications
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-white duration-300 hover:text-secondary"
                  >
                    Products
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-white duration-300 hover:text-secondary"
                  >
                    Systems
                  </Link>
                </li>
              </ul>
              <ul>
                <li className="space-y-2">
                  <Link
                    href="#"
                    className="text-white duration-300 hover:text-secondary"
                  >
                    Videos
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-white duration-300 hover:text-secondary"
                  >
                    Downloads
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-white duration-300 hover:text-secondary"
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Map Location Section */}
          <div>
            <h3 className="mb-4 font-bold text-secondary">Map Location</h3>
            <div>
              <p className="font-bold text-white">FACTORY</p>
              <p className="text-sm text-paragraph">
                10th of Ramadan - B4 Industrial Zone
              </p>
            </div>
            <div className="mt-4">
              <p className="to-white font-bold">OFFICE</p>
              <p className="text-sm text-paragraph">
                11 Obour Buildings - Salah Salem - Nasr City - Cairo
              </p>
            </div>
          </div>

          {/* Follow Us Section */}
          <div>
            <h3 className="mb-4 font-bold text-secondary">Follow Us</h3>
            <div className="flex space-x-4">
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
              href="tel:+2010203040"
              className="mt-8 flex items-center gap-2 text-4xl font-bold text-white"
            >
              <FiPhoneCall className="size-6 text-secondary" />
              19211
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
          Copyright © 2023 Chema Foam Group
        </div>
      </div>
    </div>
  );
};
