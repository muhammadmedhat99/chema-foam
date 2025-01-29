import { About } from "@/components/pages/home/About";
import { Categories } from "@/components/pages/home/Categories";
import { SearchBoxComponent } from "@/components/pages/home/SearchBox";
import { Slider } from "@/components/pages/home/Slider";

export default function Home() {
  return (
    <div className="">
      <Slider />
      <div className="pb-40">
        <SearchBoxComponent />
        <Categories />
      </div>
      <About />
    </div>
  );
}
