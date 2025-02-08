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

export default function Home() {
  return (
    <div className="">
      <Slider />
      <div className="pb-40">
        <SearchBoxComponent />
        <Categories />
      </div>
      <About />
      <Applications />
      <Products />
      <Systems />
      <Clients />
      <SocialMedia />
      <Faq />
    </div>
  );
}
