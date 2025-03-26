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
  console.log(" data ===>>", data);
  return (
    <div className="">
      <Slider data={data?.header} />
      <div className="pb-40">
        <SearchBoxComponent />
        <Categories />
      </div>
      <About data={data?.aboutUs} />
      <Applications data={data?.applications} />
      <Products data={data?.products} />
      <Systems />
      <Clients />
      <SocialMedia />
      <Faq />
    </div>
  );
}
