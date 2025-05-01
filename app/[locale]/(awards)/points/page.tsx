"use client";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { getCookie } from "cookies-next";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

export default function PointsPage() {
  const router = useRouter();
  async function fetchLocalizedData() {
    const token = getCookie("token");
    if (!token) {
      router.push("/login");
    }
    const response = await axios.get(
      "https://web.chema-foam.com/api/Awards/get-auth-user",
      { headers: { Authorization: `Bearer ${token}` } },
    );
    return response.data;
  }

  const { data } = useQuery({
    queryKey: ["UserInformation"],
    queryFn: () => fetchLocalizedData(),
  });
  return (
    <div className="flex w-full flex-1 flex-col items-center gap-2 px-40 py-10">
      <div className="my-10 flex items-center">
        <div className="relative before:absolute before:bottom-0 before:left-0 before:right-0 before:top-0 before:bg-primary/80">
          <Image
            src="/imgs/image.png"
            alt="points image"
            width={1024}
            height={1024}
            className="size-[450px]"
          />
          <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-2">
            <Image
              src="/imgs/money.svg"
              width={160}
              height={160}
              alt="icon"
              className="size-40"
            />
            <span className="text-lg font-semibold text-white md:text-2xl">
              رصيد النقاط
            </span>

            <div className="rounded-lg border border-secondary p-5 text-2xl font-semibold text-secondary lg:text-4xl">
              {data?.data?.user?.number_of_points} نقطه
            </div>
          </div>
        </div>
        <Image
          src="/imgs/image_2.png"
          alt="points image"
          width={1024}
          height={1024}
          className="size-[450px] object-cover"
        />
      </div>
      <img
        src="/imgs/ssss.png"
        alt="Chema Group"
        className="h-[7.5rem] w-[19.9375rem] object-cover lg:mt-[3rem] lg:h-[13.5rem] lg:w-full"
      />
      <img
        src="/imgs/ChemaGroupBlueIcon.svg"
        alt="Chema Group"
        className="my-[2rem] mb-[6rem] h-[3.25rem] w-[9.98625rem] self-center lg:mb-0 lg:mt-[7rem]"
      />
    </div>
  );
}
