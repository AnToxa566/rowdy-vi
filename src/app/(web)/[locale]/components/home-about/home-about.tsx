import Link from "next/link";
import Image from "next/image";
import { useTranslations } from "next-intl";

import { Button } from "@nextui-org/react";
import { RiArrowRightLine } from "@remixicon/react";

import { AppLink } from "@/common/enums";

import { SectionTitle } from "../section-title";
import { SectionContainer } from "../section-container";

export const HomeAbout = () => {
  const t = useTranslations();

  return (
    <SectionContainer id="about" isBlackBg>
      <div className="flex flex-col gap-4 lg:gap-6">
        <SectionTitle title={t("home.about.title")}></SectionTitle>

        <div className="flex items-center justify-between gap-8 flex-col lg:flex-row">
          <div className="flex flex-col gap-4 lg:w-1/2">
            <p
              dangerouslySetInnerHTML={{
                __html: t.raw("home.about.text_01_HTML"),
              }}
              className="text-lg font-medium"
            ></p>

            <p
              dangerouslySetInnerHTML={{
                __html: t.raw("home.about.text_02_HTML"),
              }}
              className="font-light"
            ></p>

            <p
              dangerouslySetInnerHTML={{
                __html: t.raw("home.about.text_03_HTML"),
              }}
              className="font-light"
            ></p>

            <p
              dangerouslySetInnerHTML={{
                __html: t.raw("home.about.text_04_HTML"),
              }}
              className="font-light"
            ></p>

            <Link href={AppLink.ALTEGIO} target="_blank">
              <Button
                color="primary"
                radius="full"
                size="lg"
                endContent={<RiArrowRightLine />}
                className="bg-[#e62621] w-full md:w-auto animate-pulsate"
              >
                {t("shared.online_booking")}
              </Button>
            </Link>
          </div>

          <div className="hidden sm:block lg:w-1/2">
            <Image
              width={750}
              height={500}
              alt="Процес чоловічої стрижки в Rowdy Barbershop"
              src="/images/about/hero.jpg"
              className="w-full h-auto rounded-xl"
            />
          </div>

          <Image
            width={750}
            height={500}
            alt="Процес чоловічої стрижки в Rowdy Barbershop"
            src="/images/about/hero.jpg"
            className="w-full h-auto rounded-xl sm:hidden"
          />
        </div>
      </div>
    </SectionContainer>
  );
};
