"use client";

import { useState } from "react";

import Image from "next/image";

type Props = {};

export const SocialMedia = (props: Props) => {
  const [activeChild, setActiveChild] = useState(1);
  const data = [
    { id: 1, image: "/imgs/social_media/2.png" },
    { id: 2, image: "/imgs/social_media/3.png" },
    { id: 3, image: "/imgs/social_media/4.png" },
    { id: 4, image: "/imgs/social_media/5.png" },
    { id: 5, image: "/imgs/social_media/6.png" },
  ];
  return (
    <div
      className="relative bg-cover bg-center bg-no-repeat py-20"
      style={{ backgroundImage: "url(/imgs/social_media/1.jpg)" }}
    >
      <div className="absolute bottom-0 left-0 right-0 top-0 z-0 bg-primary/50" />
      <div className="relative">
        <h3 className="text-center text-5xl text-white">#BuildYourDream</h3>
        <div className="mx-auto max-w-7xl pt-10">
          <div className="relative grid grid-cols-2 place-content-center place-items-center gap-3 gap-y-10">
            {data?.map((item) => (
              <div
                key={item?.id}
                className={`group flex h-[590px] w-[375px] flex-col gap-5 overflow-hidden bg-white duration-300 ${activeChild === item?.id ? "absolute left-1/2 top-1/2 z-50 -translate-x-1/2 -translate-y-1/2 scale-150 opacity-100 shadow" : "relative z-0 opacity-50"}`}
                onClick={() => setActiveChild(item?.id)}
              >
                <Image
                  src={item?.image}
                  alt="social media image"
                  width={1024}
                  height={1024}
                  className="z-10 size-[380px] object-cover"
                />
                <div className="px-6 duration-[12000ms] group-hover:-translate-y-72">
                  <div className="flex items-center gap-2 py-8">
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
                      <span className="text-xs text-svg">7 days ago</span>
                    </div>
                  </div>

                  <p className="pb-2">
                    ما هي أنواع العزل الحراري؟ تتوفر العديد من أنواع العزل
                    الحراري المستخدمة في المباني والمنشآت، ومنها: 1- الألياف
                    الزجاجية: تعتبر الألياف الزجاجية من أكثر أنواع العوازل
                    الحرارية شيوعًا، وتتميز بأنها مقاومة للحريق والعفن والمياه
                    والحشرات والبكتيريا. 2- الألياف الصخرية: تتميز الألياف
                    الصخرية بقدرتها على تحمل درجات حرارة عالية جدًا، مما يجعلها
                    مناسبة للاستخدام في المناطق التي تتعرض لدرجات حرارة مرتفعة.
                    3- البوليسترين: تتميز البوليسترين بأنها من العوازل الحرارية
                    الخفيفة الوزن والمتينة، وتستخدم عادة في الأسقف والحوائط
                    والأرضيات. تتوفر هذه الأنواع وغيرها من العوازل الحرارية
                    بأشكال وأحجام ومواد مختلفة لتناسب احتياجات المشاريع
                  </p>
                  {activeChild !== item.id && (
                    <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-white to-transparent transition-all duration-500 ease-in-out"></div>
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
