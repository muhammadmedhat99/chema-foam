import { BreadcrumbComponent } from "@/components/global/Breadcrumb";
import { Sidebar } from "@/components/pages/applications/Sidebar";
import { DownloadCard } from "@/components/pages/downloads/DownloadCard";
import { DownloadComponent } from "@/components/pages/downloads/DownloadComponent";
import fetchData from "@/utils/api";
import { getTranslations } from "next-intl/server";

export default async function page({
  params,
}: {
  params: { locale: "en" | "ar" };
}) {
  const { locale } = params;
  const data = await fetchData(`page/Downloads/${locale}`, locale);
  const t = await getTranslations();
  return (
    <div>
      <BreadcrumbComponent
        pageTitle={t("Header.downloads")}
        pages={[
          { title: t("Header.home"), href: "/" },
          { title: t("Header.downloads") },
        ]}
      />

      <DownloadComponent data={data} />
    </div>
  );
}
