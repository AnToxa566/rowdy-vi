import type { Metadata } from "next";
import { Montserrat } from "next/font/google";

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
  return (
    <html lang="ru">
      <body
        className={`${montserrat.className} relative min-h-screen flex ga-8 w-screen`}
      >
        <Sidebar />

        <main className="w-full">
          <Providers>
            <section className="container mx-auto py-8 px-4">
              {children}
            </section>
          </Providers>
        </main>
      </body>
    </html>
  );
}
