import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";

import {
  RiArrowRightLine,
  RiMailLine,
  RiMapPinLine,
  RiPhoneLine,
  RiTimeLine,
} from "@remixicon/react";
import { Button } from "@nextui-org/react";

import { AppLink } from "@/common/enums";
import { Map } from "./map";

export const HomeContacts = () => {
  const t = useTranslations();

  const locale = useLocale();

  return (
    <section
      className="relative z-30 bg-white py-10 px-4 sm:px-8"
      id="contacts"
    >
      <div className="container mx-auto flex flex-col gap-8">
        <h2 className="text-3xl lg:text-4xl font-bold leading-tight uppercase">
          {t("home.contacts.title")}
        </h2>

        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div className="flex flex-col gap-5 text-lg font-medium w-full md:w-auto">
            <div className="flex items-center gap-2">
              <RiMapPinLine />

              <Link
                href={AppLink.GOOGLE_MAPS}
                target="_blank"
                className="hover:text-[#e62621] transition-colors"
              >
                <span>{t("home.contacts.address")}</span>
              </Link>
            </div>

            <div className="flex gap-2">
              <RiPhoneLine />

              <div className="flex flex-col">
                <Link
                  href="tel:380663372763"
                  target="_blank"
                  className="hover:text-[#e62621] transition-colors"
                >
                  <span>+38 (066) 337 27 63</span>
                </Link>

                <Link
                  href="tel:380687710337"
                  target="_blank"
                  className="hover:text-[#e62621] transition-colors"
                >
                  <span>+38 (068) 771 03 37</span>
                </Link>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <RiMailLine />

              <Link
                href="mailto:rowdy.barbershop@gmail.com"
                target="_blank"
                className="hover:text-[#e62621] transition-colors"
              >
                <span>rowdy.barbershop@gmail.com</span>
              </Link>
            </div>

            <div className="flex items-center gap-2">
              <RiTimeLine />
              <span>10:00 - 20:00</span>
            </div>

            <Link href={AppLink.ALTEGIO} target="_blank">
              <Button
                color="primary"
                radius="full"
                size="lg"
                endContent={<RiArrowRightLine />}
                className="bg-[#e62621] w-full md:w-auto animate-pulsate"
              >
                {t("shared.book_visit")}
              </Button>
            </Link>
          </div>

          <div className="w-full">
            <Map locale={locale} loader={t("home.contacts.maps_loader")} />
          </div>
        </div>
      </div>
    </section>
  );
};
