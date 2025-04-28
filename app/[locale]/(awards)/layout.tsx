import React from "react";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";

export default async function AwardsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div dir="rtl" className="min-h-screen">
      <Header />
      <div className="flex h-full w-full gap-2">
        <Sidebar />
        <div className="flex-1 overflow-y-scroll pr-32 pt-32">{children}</div>
      </div>
    </div>
  );
}
