import Link from "next/link";
import Image from "next/image";
import { useTranslations } from "next-intl";

import { Button } from "@nextui-org/react";
import { RiArrowRightLine } from "@remixicon/react";

import { AppLink } from "@/common/enums";

import { Container } from "../container";

export const HomeAbout = () => {
  const t = useTranslations();

  return (
    <Container id="about" isBlackBg>
      <div className="flex flex-col gap-8">
        <h2 className="text-3xl lg:text-4xl font-bold leading-tight uppercase">
          {t("home.about.title")}
        </h2>

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
    </Container>
  );
};
