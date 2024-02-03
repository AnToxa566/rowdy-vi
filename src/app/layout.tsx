import type { Metadata } from "next";
import { Montserrat } from "next/font/google";

import { SEO } from "@/common/enums";

import { Providers } from "./providers";

import "./globals.scss";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: SEO.TITLE,
  description: SEO.DESCRIPTION,
  applicationName: SEO.APLICATION_NAME,
  creator: SEO.AUTHOR_NAME,
  authors: { name: SEO.AUTHOR_NAME, url: SEO.AUTHOR_URL },
  keywords: SEO.KEYWORDS,
  generator: SEO.GENERATOR,
  publisher: SEO.PUBLISHER,
  metadataBase: new URL(process.env.APP_URL || ""),
  openGraph: {
    title: SEO.TITLE,
    description: SEO.DESCRIPTION,
    emails: SEO.EMAIL,
    phoneNumbers: [SEO.PHONE_NUMBER_1, SEO.PHONE_NUMBER_2],
    siteName: SEO.APLICATION_NAME,
    type: SEO.OG_TYPE,
    locale: SEO.LOCALE,
    url: process.env.APP_URL,
    countryName: SEO.COUNTRY_NAME,
  },
  twitter: {
    card: "summary",
    title: SEO.TITLE,
    description: SEO.DESCRIPTION,
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
