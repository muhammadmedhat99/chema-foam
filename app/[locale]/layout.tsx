import type { Metadata } from "next";
import localFont from "next/font/local";
import "@/styles/globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { routing } from "@/i18n/routing";
import { notFound } from "next/navigation";
import { TanstackProvider } from "@/components/provider";

const geistSans = localFont({
  src: "./fonts/Roboto-VariableFont_wdth,wght.ttf",
  variable: "--font-geist-sans",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Chema Foam",
  description: "Created by create be group",
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  return (
    <html lang={locale}>
      <body className={`${geistSans.variable} antialiased`}>
        <NextIntlClientProvider>
          <TanstackProvider>
            <Header />
            {children}
            <Footer />
          </TanstackProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
