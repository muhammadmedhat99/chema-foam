import { BreadcrumbComponent } from "@/components/global/Breadcrumb";
import { Sidebar } from "@/components/pages/applications/Sidebar";
import { DownloadCard } from "@/components/pages/downloads/DownloadCard";

export default function page() {
  return (
    <div>
      <BreadcrumbComponent
        pageTitle={"Products Documents"}
        pages={[{ title: "Home", href: "/" }, { title: "Downloads" }]}
      />

      <div className="mx-auto my-20 max-w-7xl px-2">
        <div className="grid gap-3 lg:grid-cols-4 lg:gap-9">
          <Sidebar filterTitle="Filter" />

          <div className="grid gap-3 md:grid-cols-2 md:gap-6 lg:col-span-3 lg:grid-cols-3 lg:gap-9">
            <DownloadCard />
            <DownloadCard />
            <DownloadCard />
            <DownloadCard />
            <DownloadCard />
            <DownloadCard />
          </div>
        </div>
      </div>
    </div>
  );
}
