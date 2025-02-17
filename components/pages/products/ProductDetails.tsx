import Image from "next/image";
import { ProductCard, ProductEmptyCard } from "@/components/global/ProductCard";
import { CalculatorIcon, DownloadIcon, VideoIcon } from "@/components/icons";
import { CustomAccordion } from "../about/Accordion";
import { BiCategory, BiMessageSquareDots } from "react-icons/bi";
import { FaBars } from "react-icons/fa6";
import { ApplicationCard } from "@/components/global/ApplicationCard";

export const ProductDetails = () => {
  return (
    <div className="lg:col-span-3">
      <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
        <ProductEmptyCard />

        <div className="relative col-span-2">
          <Image
            src="/imgs/applications/3.jpg"
            alt="application image"
            width={720}
            height={320}
            className="object-cover"
          />

          <div className="absolute left-1/2 top-1/2 flex h-1/2 w-1/2 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center gap-2 bg-primary/65">
            <h6 className="text-6xl font-semibold text-white">
              8 <span className="-ml-3 text-lg">M2</span>
            </h6>
            <p className="font-semibold text-secondary">
              Two layers individual rate
            </p>
          </div>
        </div>
      </div>
      <div className="mt-5 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
        <button className="flex grow items-center justify-center gap-2 bg-paragraph px-5 py-3.5 font-bold text-[#5A5A5A]">
          <VideoIcon width={24} height={18} className="fill-[#5A5A5A]" />
          Watching Video
        </button>
        <button className="flex grow items-center justify-center gap-2 bg-paragraph px-5 py-3.5 font-bold text-[#5A5A5A]">
          <CalculatorIcon width={24} height={18} className="fill-[#5A5A5A]" />
          Quantity Calculation
        </button>
        <button className="flex grow items-center justify-center gap-2 bg-paragraph px-5 py-3.5 font-bold text-[#5A5A5A]">
          <DownloadIcon width={24} height={18} className="fill-[#5A5A5A]" />
          Download Files
        </button>
      </div>

      <div className="mt-5">
        <CustomAccordion
          title="The Description"
          icon={<FaBars size={36} />}
          content={
            <>
              <p className="text-lg text-primary">
                We strive hard to be the pioneers of modern environmentally
                friendly building technology through the concerted joint
                efforts.
              </p>
              <p className="text-svg">
                We strive hard to be the pioneers of modern environmentally
                friendly building technology through the concerted joint efforts
                of all our success partners and keenness on continuous
                improvement and development, To provide various engineering
                solutions and innovative, advanced, and unique building systems.
              </p>

              <div className="mt-3 grid grid-cols-2 gap-3">
                <Image
                  src="/imgs/about/1.jpg"
                  alt="about image"
                  width={1440}
                  height={720}
                  className="w-full object-cover"
                />
                <Image
                  src="/imgs/about/1.jpg"
                  alt="about image"
                  width={1440}
                  height={720}
                  className="w-full object-cover"
                />
              </div>
            </>
          }
        />
      </div>

      <div className="mt-5">
        <CustomAccordion
          title="Our Message"
          icon={<BiMessageSquareDots size={36} />}
          content={
            <>
              <p className="text-primary">
                We strive hard to be the pioneers of modern environmentally
                friendly building technology through the concerted joint efforts
                of all our success partners and keenness on continuous
                improvement and development, To provide various engineering
                solutions and innovative, advanced, and unique building systems.
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
      </div>

      <div className="mt-5">
        <CustomAccordion
          title="Other Related Products"
          icon={<BiCategory size={36} />}
          content={
            <>
              <p className="text-2xl text-[#1EBAE5]">Other Related Products</p>
              <div className="mt-5 flex flex-wrap items-center gap-3">
                <ProductCard />
                <ProductCard />
                <ProductCard />
              </div>
              <p className="mt-10 text-2xl text-[#1EBAE5]">
                Applications related to this product
              </p>
              <div className="mt-5 flex flex-wrap items-center gap-3">
                <ApplicationCard />
                <ApplicationCard />
              </div>
            </>
          }
        />
      </div>
    </div>
  );
};
