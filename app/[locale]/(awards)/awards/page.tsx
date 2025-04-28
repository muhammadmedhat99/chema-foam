"use client";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";

export default function AwardsPage() {
  function fetchLocalizedData() {
    return fetch(
      `https://web.chema-foam.com/api/Awards/chema-products-point`,
    ).then((res) => res.json());
  }

  const { data, isLoading } = useQuery({
    queryKey: ["ProductPoints"],
    queryFn: () => fetchLocalizedData(),
  });

  return (
    <div className="flex w-full flex-1 flex-col items-center gap-2 px-40 py-10">
      <div>
        <Image
          src="/imgs/applications/2.jpg"
          alt="application image"
          width={1024}
          height={120}
          className="h-60 object-cover"
        />
        <h3 className="relative mx-3 -mt-[54px] mb-16 min-h-[108px] max-w-[582px] bg-[#1F3566D9] px-3 py-7 text-center text-2xl text-white lg:mx-auto lg:px-32 lg:text-5xl">
          برنامج جمع النقاط
        </h3>
      </div>

      <div className="mb-5 flex w-full flex-col gap-4 bg-[#1EBAE51A] bg-opacity-10 px-[3.875rem] py-[1.875rem]">
        <div className="text-lg font-bold text-primary">
          ما هوا برنامج جمع النقاط؟
        </div>
        <div className="arabicLanguage text-base font-normal text-[#5A5A5A]">
          عبارة عن مسابقة على هيئة كروت خدش موجودة في بعض المنتجات يتم ادخال
          الرقم الموجود على حساب خاص بالفني ويتم تجميع النقاط مع شراء المنتجات
          واستبدالها بهدايا.
        </div>
      </div>

      <div className="mb-5 flex w-full flex-col gap-4 bg-[#FBAD4A] bg-opacity-10 px-[3.875rem] py-[1.875rem]">
        <div className="text-lg font-bold text-primary">
          ما هي طريقة الإشتراك؟
        </div>
        <ol className="mr-[1.5rem] list-decimal">
          <li>
            <div className="arabicLanguage text-base font-normal text-[#5A5A5A]">
              الدخول على الرابط (*) وتسجيل الاسم ورقم البطاقة ورقم التليفون.
            </div>
          </li>
          <li>
            <div className="arabicLanguage text-base font-normal text-[#5A5A5A]">
              خدش الكارت وادخال رقم الكارت وتجميع النقاط.
            </div>
          </li>
          <li>
            <div className="arabicLanguage text-base font-normal text-[#5A5A5A]">
              عند الدخول مرة اخرى يتم الدخول على اللينك السابق وادخال رقم
              البطاقة .
            </div>
          </li>
          <li>
            <div className="arabicLanguage text-base font-normal text-[#5A5A5A]">
              يمكن الاستعلام عن عدد النقاط المجمعة ومعرفة الهدايا من خلال نفس
              الرابط.
            </div>
          </li>
        </ol>
      </div>

      <div className="rtl flex flex-col gap-4 bg-[#1EBAE51A] bg-opacity-10 px-[3.875rem] py-[1.875rem]">
        <div className="text-lg font-bold text-primary">
          ما هي طريقة الاستبدال؟
        </div>
        <ol className="mr-[1.5rem] list-decimal">
          <li>
            <div className="arabicLanguage text-base font-normal text-[#5A5A5A]">
              عند وصول العميل الى عدد النقاط المطلوبة للهدية يتم التواصل مع
              الارقام الخاصة بالمسابقة لتحديد موعد استلام الهدية خلال 30 يوم من
              الاتصال ويتم خصم النقاط من رصيد العميل على حسابة الخاص على الرابط
              السابق.
            </div>
          </li>
          <li>
            <div className="arabicLanguage text-base font-normal text-[#5A5A5A]">
              يتم الاستبدال من خلال فروع الشركة او مراكز التلوين المنتشرة على
              مستوى الجمهورية ويتم التنسيق مع ادارة المسابقة بموعد ومكان
              الاستلام.
            </div>
          </li>
        </ol>
      </div>

      <div className="my-5 self-center text-center">
        <span className="mb-[2rem] text-center">
          <div className="border-b-[0.3rem] border-solid border-[#FBAD4A] pb-[0.5rem]">
            <span className="leading-13 !text-sm text-xl font-semibold text-[#1C4585] lg:!text-2xl">
              العبوات
            </span>
            <span className="leading-13 !text-sm text-xl font-semibold text-[#1C4585] lg:!text-2xl">
              {" "}
            </span>
            <span className="leading-13 !text-sm text-xl font-semibold text-[#1C4585] lg:!text-2xl">
              التي تحتوي على كروت الخدش وعدد النقاط الموجودة في كل عبوة
            </span>
          </div>
        </span>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-5 lg:gap-10">
        {!isLoading &&
          data?.chema_products_point?.map((item: any) => (
            <div
              key={item?.id}
              className="flex h-[14.025rem] w-[10rem] flex-col items-center justify-start gap-3 border-2 border-[#FBAD4A] lg:h-[23.375rem] lg:w-[17.0625rem] lg:justify-evenly"
            >
              <Image
                src={item?.card_image?.image}
                alt="Chema Proof 105"
                width={1024}
                height={1024}
                className="h-fit max-w-60"
              />
              <div className="arabicLanguage text-sm font-bold text-[#1C4585] lg:text-xl">
                {item?.title}
              </div>
              <div className="h-[1.8rem ] rtl flex w-[7.25rem] flex-row items-center justify-center gap-2 border-2 border-[#FBAD4A] lg:h-[3rem] lg:w-[13rem]">
                <img
                  src="/imgs/points.svg"
                  alt="Points"
                  className="h-[0.9rem] w-[0.9rem] lg:h-[1.5rem] lg:w-[1.5rem]"
                />
                <div className="arabicLanguage mb-[0.3rem] text-xs font-normal text-[#5A5A5A] lg:mb-[0.5rem] lg:text-xl">
                  {item?.awards_point} نقطة
                </div>
              </div>
            </div>
          ))}
      </div>

      <img
        src="/imgs/ChemaGroupBlueIcon.svg"
        alt="Chema Group"
        className="my-[2rem] mb-[6rem] h-[3.25rem] w-[9.98625rem] self-center lg:mb-0 lg:mt-[7rem]"
      />
    </div>
  );
}
