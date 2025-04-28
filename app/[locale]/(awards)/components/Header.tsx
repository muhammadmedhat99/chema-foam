"use client";
import Image from "next/image";
import { Link } from "@/i18n/navigation";

export const Header = () => {
  return (
    <div className="fixed top-0 z-[1] flex h-20 w-full items-center justify-between bg-[#1F3566] px-10 lg:h-28">
      <div className="flex items-center gap-2">
        <Link
          href="/register"
          className="bg-secondary px-6 py-4 font-semibold text-primary"
        >
          التسجيل في البرنامج
        </Link>
        <Link
          href="/login"
          className="bg-paragraph px-6 py-4 font-semibold text-secGray"
        >
          تسجيل الدخول
        </Link>
      </div>
      <Link href="/" className="flex h-full w-[325px] items-center justify-end">
        <Image src="/imgs/logo.svg" alt="logo" width={169} height={55} />
      </Link>
    </div>
  );
};
