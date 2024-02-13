import Script from "next/script";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";

import { SEO } from "@/common/enums";

import { Providers } from "../providers";

import { Header } from "./components";

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
      <head>
        {/* Google Tag Manager */}
        <Script
          id="gtag"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-PZ9FP3S3');`,
          }}
        />
        {/* End Google Tag Manager */}

        {/* Start Altegio Widget */}
        <Script
          type="text/javascript"
          src="https://w848214.alteg.io/widgetJS"
        />

        <Script
          id="altegio_widget"
          dangerouslySetInnerHTML={{
            __html: `var yWidgetSettings = {
              buttonText : 'Стартуй кіпіш',
            };`,
          }}
        />
        {/* End Altegio Widget */}
      </head>

      <body className={montserrat.className}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-PZ9FP3S3"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        {/* End Google Tag Manager (noscript) */}

        <Providers>
          <Header />
          <main>{children}</main>
        </Providers>
      </body>
    </html>
  );
}
