import { BreadcrumbComponent } from "@/components/global/Breadcrumb";
import { Sidebar } from "@/components/pages/applications/Sidebar";
import { DownloadCard } from "@/components/pages/downloads/DownloadCard";
import { DownloadComponent } from "@/components/pages/downloads/DownloadComponent";
import fetchData from "@/utils/api";

export default async function page({
  params,
}: {
  params: { locale: "en" | "ar" };
}) {
  const { locale } = params;
  const data = await fetchData(`page/Downloads/${locale}`, locale);

  return (
    <div>
      <BreadcrumbComponent
        pageTitle={"Products Documents"}
        pages={[{ title: "Home", href: "/" }, { title: "Downloads" }]}
      />

      <DownloadComponent data={data} />
    </div>
  );
}
