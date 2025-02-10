import { BreadcrumbComponent } from "@/components/global/Breadcrumb";
import React from "react";

export default function page() {
  return (
    <div>
      <BreadcrumbComponent
        pageTitle="Chema Foam Profile"
        pages={[{ title: "Home", href: "/" }, { title: "About Us" }]}
      />
    </div>
  );
}
