import Script from "next/script";
import { Suspense } from "react";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import {
  NextIntlClientProvider,
  useMessages,
  useTranslations,
} from "next-intl";
import { getTranslations } from "next-intl/server";
import { Analytics } from '@vercel/analytics/react';

import { SEO } from "@/common/enums";

import { Providers } from "../../providers";

import Loading from "./loading";
import { Footer, Header } from "./components";

import "swiper/scss";
import "./globals.scss";

const montserrat = Montserrat({ subsets: ["latin"] });

type Props = {
  params: { locale: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const locale = params.locale;

  const t = await getTranslations({ locale, namespace: "seo" });

  return {
    title: t("title"),
    description: t("description"),
    applicationName: SEO.APLICATION_NAME,
    creator: SEO.AUTHOR_NAME,
    authors: { name: SEO.AUTHOR_NAME, url: SEO.AUTHOR_URL },
    keywords: SEO.KEYWORDS,
    generator: SEO.GENERATOR,
    publisher: SEO.PUBLISHER,
    metadataBase: new URL(process.env.APP_URL || ""),
    alternates: {
      canonical: `${process.env.APP_URL}/${locale}`,
      languages: {
        uk: `${process.env.APP_URL}/uk`,
        ru: `${process.env.APP_URL}/ru`,
        en: `${process.env.APP_URL}/en`,
      },
    },
    openGraph: {
      title: t("title"),
      description: t("description"),
      emails: SEO.EMAIL,
      phoneNumbers: [SEO.PHONE_NUMBER_1, SEO.PHONE_NUMBER_2],
      siteName: SEO.APLICATION_NAME,
      type: SEO.OG_TYPE,
      locale: locale,
      url: process.env.APP_URL,
      countryName: SEO.COUNTRY_NAME,
      images: `${process.env.APP_URL}/images/barbershop-bg.jpg`,
    },
    twitter: {
      card: "summary",
      title: t("title"),
      description: t("description"),
    },
  };
}

export default function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const messages = useMessages();

  const t = useTranslations("shared");

  return (
    <html lang={locale}>
      <head>
        {/* Google Tag Manager */}
        <Script
          id="gtag"
          strategy="afterInteractive"
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
          strategy="afterInteractive"
          type="text/javascript"
          src="https://w848214.alteg.io/widgetJS"
        />

        <Script
          strategy="afterInteractive"
          id="altegio_widget"
          dangerouslySetInnerHTML={{
            __html: `var yWidgetSettings = {
              buttonText : '${t("start_rowdy")}',
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

        <NextIntlClientProvider locale={locale} messages={messages}>
          <Providers>
            <Header />
            <Suspense fallback={<Loading />}>
              <main className="w-screen overflow-x-hidden">{children}</main>
            </Suspense>
            <Footer />
          </Providers>
        </NextIntlClientProvider>
        
        <Analytics />
      </body>
    </html>
  );
}
