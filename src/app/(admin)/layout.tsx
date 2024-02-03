import type { Metadata } from "next";
import { Montserrat } from "next/font/google";

import { Providers } from "../providers";

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
      <body className={montserrat.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
