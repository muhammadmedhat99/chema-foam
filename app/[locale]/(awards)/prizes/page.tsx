"use client";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";

export default function PrizesPage() {
  function fetchLocalizedData() {
    return fetch(`https://web.chema-foam.com/api/Awards/products`).then((res) =>
      res.json(),
    );
  }

  const { data, isLoading } = useQuery({
    queryKey: ["AvailablePrizes"],
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
          جوائز المسابقة
        </h3>
      </div>

      <div className="my-5 self-center text-center">
        <span className="mb-[2rem] text-center">
          <div className="border-b-[0.3rem] border-solid border-[#FBAD4A] pb-[0.5rem]">
            <span className="leading-13 !text-sm text-xl font-semibold text-[#1C4585] lg:!text-2xl">
              الجوائز المتاحة في المسابقة على حسب مجموع النقاط
            </span>
          </div>
        </span>
      </div>

      <div className="flex flex-wrap items-center gap-5 md:gap-10">
        {!isLoading &&
          data?.award_products?.map((item: any) => (
            <div
              key={item?.id}
              className="relative flex h-[13.699rem] w-[10rem] flex-col items-center justify-center border-2 border-[#FBAD4A] pt-[1rem] md:h-[23.375rem] md:w-[17.0625rem]"
            >
              <div className="rtl absolute top-0 flex h-[1.7578125rem] w-[7.61875rem] flex-row items-center justify-center border-2 border-t-0 border-[#FBAD4A] pb-[0.5rem] text-sm font-bold text-[#5A5A5A] md:h-[3rem] md:w-[13rem] md:text-xl">
                {item?.points} نقطة
              </div>
              <Image
                src={item?.image}
                alt="Filter"
                width={1024}
                height={1024}
                className="h-fit w-full object-cover"
              />
              <div className="text-sm font-semibold text-primary md:text-xl">
                {item?.name}
              </div>
            </div>
          ))}
      </div>
      <div className="mt-10 flex flex-col gap-4 bg-[#FBAD4A] bg-opacity-10 px-[3.875rem] py-[1.875rem]">
        <div className="text-sm font-bold text-[#1C4585] md:text-2xl">
          شروط واحكام عامة:
        </div>
        <ol className="mr-[1.5rem] list-decimal">
          <li>
            <div className="text-base font-normal text-[#5A5A5A]">
              لا يحق لجميع موظفين الشركة او اقاربهم الاشتراك في المسابقة .
            </div>
          </li>
          <li>
            <div className="text-base font-normal text-[#5A5A5A]">
              يحق للعميل الاستمرار في المسابقة حتى بعد حصوله على الهدية
              والاستمرار في حساب النقاط طوال فترة المسابقة.
            </div>
          </li>
          <li>
            <div className="text-base font-normal text-[#5A5A5A]">
              يحق للشركة استبدال ماركة الهدية المطلوبة حسب التواجد في السوق.
            </div>
          </li>
          <li>
            <div className="text-base font-normal text-[#5A5A5A]">
              يتم صرف الهدايا للافراد باسمائهم وبياناتهم الشخصية الموجودة على
              الموقع الخاص بالشركة والتي تم عمل الحساب بها ولا يتم صرفها من خلال
              توكيل او اي احد من افراد العائلة.
            </div>
          </li>
          <li>
            <div className="text-base font-normal text-[#5A5A5A]">
              تبدأ المسابقة في 15 اغسطس 2020 وتنتهي في 14 اغسطس 2023 ويحق للشركة
              مد المسابقة او انهائها كما يترائى لها.
            </div>
          </li>
          <li>
            <div className="text-base font-normal text-[#5A5A5A]">
              يحق للشركة استبدال عدد النقاط الموجودة في اي منتج او اضافة او حذف
              منتجات من المسابقة طوال فترة المسابقة.
            </div>
          </li>
          <li>
            <div className="text-base font-normal text-[#5A5A5A]">
              للشركة الحق في تصوير الفائزين لاستغلالها في اي مواد دعائية ويعد
              اشتراك العميل في موقع الشركة موافقة ضمنية منه على ذلك.
            </div>
          </li>
          <li>
            <div className="text-base font-normal text-[#5A5A5A]">
              في حالة تلف الكارت يتم التوجه الى اقرب فرع او مركز تلوين وتسليم
              الكارت ويتم اضافة الكارت في حالة عدم شحنه من قبل على رصيد المشترك.
            </div>
          </li>
        </ol>
      </div>

      <div className="mt-5 flex flex-col gap-4 bg-[#1EBAE51A] bg-opacity-10 px-[3.875rem] py-[1.875rem]">
        <div className="text-sm font-bold text-[#1EBAE5] md:text-2xl">
          يحق للشركه تعديل عدد النقاط لكل هديه ونوع الهديه فى أى وقت دون أى
          إنذار مسبق
        </div>
        <div className="text-justify text-sm font-bold text-[#1C4585] md:text-2xl">
          كروت النقاط الموجودة في العبوات خاصة بالفني المستخدم للعبوة فقط وغير
          قابلة للتداول او البيع او الشراء وفي حالة اكتشاف ذلك يتم ايقاف المشترك
          فورا وللشركة الحق في اتخاذ كافة الاجراءات التي تحفظ حقوقها حال اكتشاف
          اي تلاعب
        </div>
      </div>
      <img
        src="/imgs/ChemaGroupBlueIcon.svg"
        alt="Chema Group"
        className="my-[2rem] mb-[6rem] h-[3.25rem] w-[9.98625rem] self-center lg:mb-0 lg:mt-[7rem]"
      />
    </div>
  );
}
