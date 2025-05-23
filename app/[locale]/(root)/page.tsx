import { About } from "@/components/pages/home/About";
import { Applications } from "@/components/pages/home/Applications";
import { Categories } from "@/components/pages/home/Categories";
import { Clients } from "@/components/pages/home/Clients";
import { Faq } from "@/components/pages/home/Faq";
import { Products } from "@/components/pages/home/Products";
import { SearchBoxComponent } from "@/components/pages/home/SearchBox";
import { Slider } from "@/components/pages/home/Slider";
import { SocialMedia } from "@/components/pages/home/SocialMedia";
import { Systems } from "@/components/pages/home/Systems";
import fetchData from "@/utils/api";

export default async function Home({
  params,
}: {
  params: { locale: "en" | "ar" };
}) {
  const { locale } = params;
  const data = await fetchData(`page/Home/${locale}`, locale);
  return (
    <div className="">
      <Slider data={data?.header} />
      <div className="pb-40">
        <SearchBoxComponent />
        <Categories className="relative z-10 mx-auto mt-5 flex max-w-7xl flex-wrap items-center justify-center gap-3 duration-300 lg:gap-6" />
      </div>
      <About data={data?.aboutUs} />
      <Applications data={data?.applications} />
      <Products data={data?.products} />
      <Systems data={data?.systems} />
      <Clients data={data?.projects} clients={data?.clients} />
      <SocialMedia data={data?.socialPosts?.data} />
      <Faq data={data?.questions} />
    </div>
  );
}
