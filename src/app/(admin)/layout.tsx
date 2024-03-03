import type { Metadata } from "next";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { Montserrat } from "next/font/google";

import { AppPath, CookieKey } from "@/common/enums";

import { Providers } from "../providers";

import { Sidebar } from "./components";

import "./admin.scss";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rowdy - Dashboard",
  description: "The awesomest dashboard in the world",
  robots: {
    index: false,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cookieStore = cookies();
  const accessToken = cookieStore.get(CookieKey.ACCESS_TOKEN);

  if (!accessToken) {
    redirect(AppPath.LOGIN);
  }

  return (
    <html lang="ru">
      <body
        className={`${montserrat.className} relative min-h-screen flex ga-8 w-screen`}
      >
        <Sidebar />

        <main className="w-full">
          <Providers>
            <section className="container mx-auto py-8 px-4 sm:px-8">
              {children}
            </section>
          </Providers>
        </main>
      </body>
    </html>
  );
}
