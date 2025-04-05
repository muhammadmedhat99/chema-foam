"use client";

import { useState } from "react";

import Image from "next/image";
import Link from "next/link";

type Props = { data: any };

export const SocialMedia = ({ data }: Props) => {
  const [activeChild, setActiveChild] = useState(data[0]?.id);
  // const data = [
  //   { id: 1, image: "/imgs/social_media/2.png" },
  //   { id: 2, image: "/imgs/social_media/3.png" },
  //   { id: 3, image: "/imgs/social_media/4.png" },
  //   { id: 4, image: "/imgs/social_media/5.png" },
  //   { id: 5, image: "/imgs/social_media/6.png" },
  // ];
  return (
    <div
      className="relative bg-cover bg-center bg-no-repeat py-20"
      style={{ backgroundImage: "url(/imgs/social_media/1.jpg)" }}
    >
      <div className="absolute bottom-0 left-0 right-0 top-0 z-0 bg-primary/50" />
      <div className="relative">
        <h3 className="text-center text-5xl text-white">#BuildYourDream</h3>
        <div className="mx-auto max-w-7xl pt-10">
          <div className="relative grid grid-cols-1 place-content-center place-items-center gap-3 gap-y-10 lg:grid-cols-2">
            {data?.map((item: any) => (
              <div
                key={item?.id}
                className={`group flex h-[590px] w-[375px] flex-col gap-5 overflow-hidden bg-white duration-300 ${activeChild === item?.id ? "lg:absolute lg:left-1/2 lg:top-1/2 lg:z-50 lg:-translate-x-1/2 lg:-translate-y-1/2 lg:scale-150 lg:opacity-100 lg:shadow" : "lg:relative lg:z-0 lg:opacity-50"}`}
                onClick={() => setActiveChild(item?.id)}
              >
                <Image
                  src={item?.images[0]?.image}
                  alt="social media image"
                  width={1024}
                  height={1024}
                  className="z-10 size-[380px] object-cover"
                />
                {/* <div className="px-6 duration-10000 group-hover:-translate-y-80"> */}
                <div className="px-6">
                  <Link
                    href={item?.post_url}
                    target="_blank"
                    className="flex items-center gap-2 py-8"
                  >
                    <Image
                      src="/imgs/logo-2.svg"
                      alt="logo"
                      width={41}
                      height={41}
                    />
                    <div className="flex flex-col">
                      <span className="font-semibold text-primary">
                        Chema Foam Group
                      </span>
                      <span className="text-xs text-svg">
                        {item?.post_date}
                      </span>
                    </div>
                  </Link>

                  <p className="pb-2">{item?.content}</p>
                  {activeChild !== item.id && (
                    <div className="absolute inset-x-0 bottom-0 h-8 bg-gradient-to-t from-white to-transparent transition-all duration-500 ease-in-out"></div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
