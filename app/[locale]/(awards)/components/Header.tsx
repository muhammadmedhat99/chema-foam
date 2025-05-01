import Image from "next/image";
import { cookies } from "next/headers";
import { Link } from "@/i18n/navigation";
import fetchData from "@/utils/api";

export const Header = async () => {
  const cookieStore = cookies();
  const token = cookieStore.get("token")?.value;
  const isLoggedIn = !!token;

  let userData = null;

  if (isLoggedIn) {
    try {
      const response = await fetchData("Awards/get-auth-user", "en", token);
      userData = response?.data?.user;
    } catch (error) {
      console.error("Failed to fetch user data:", error);
    }
  }

  return (
    <div className="fixed top-0 z-[1] flex h-20 w-full items-center justify-between bg-[#1F3566] px-10 lg:h-28">
      <div className="flex items-center gap-2">
        {isLoggedIn && userData ? (
          <Link
            href="/profile"
            className="flex items-center justify-center gap-2 text-xs text-white"
          >
            <Image
              src="/imgs/profile.png"
              width={50}
              height={50}
              alt="profile image"
              className="rounded-full"
            />
            <span>{userData.name}</span>
          </Link>
        ) : (
          <>
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
          </>
        )}
      </div>
      <Link href="/" className="flex h-full w-[325px] items-center justify-end">
        <Image src="/imgs/logo.svg" alt="logo" width={169} height={55} />
      </Link>
    </div>
  );
};
