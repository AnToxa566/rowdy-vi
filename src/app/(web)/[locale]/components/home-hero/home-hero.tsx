import Link from "next/link";
import Image from "next/image";
import { useTranslations } from "next-intl";

import { Button, Card, CardBody } from "@nextui-org/react";
import { RiMapPinLine, RiArrowRightLine } from "@remixicon/react";

import { AppLink } from "@/common/enums";

import { ScrollButton } from "./scroll-btn";

export const HomeHero = () => {
  const t = useTranslations();

  const services = [
    {
      label: t("home.hero.services.haircut"),
      styles:
        "bottom-[150px] left-[220px] animate-[levitate_10s_ease_infinite]",
    },
    {
      label: t("home.hero.services.beard"),
      styles: "bottom-[80px] left-[50px] animate-[levitate_7s_ease_infinite]",
    },
    {
      label: t("home.hero.services.shaving"),
      styles: "bottom-[60px] left-[350px] animate-[levitate_13s_ease_infinite]",
    },
    {
      label: t("home.hero.services.kids"),
      styles: "bottom-[1px] left-[140px] animate-[levitate_17s_ease_infinite]",
    },
    {
      label: t("home.hero.services.coloring"),
      styles: "top-[20px] left-[330px] animate-[levitate_8s_ease_infinite]",
    },
    {
      label: t("home.hero.services.styling"),
      styles: "top-[50px] left-[80px] animate-[levitate_12s_ease_infinite]",
    },
    {
      label: t("home.hero.services.wax"),
      styles: "top-[130px] left-[180px] animate-[levitate_6s_ease_infinite]",
    },
  ];

  return (
    <section className="relative text-white max-h-screen" id="hero">
      <div className="relative py-36 sm:py-64 px-4 sm:px-8 h-full z-20">
        <div className="container mx-auto h-full flex items-center">
          <div className="flex flex-col gap-8 lg:gap-10 lg:w-1/2">           
            <h1 className="text-3xl lg:text-5xl font-bold leading-tight">
              <span className="font-black">{t("shared.rowdy_barbershop")}</span>{" "}
              {t("home.hero.title")}
            </h1>

            <div className="flex flex-col md:flex-row items-center gap-4">
              <Link
                href={AppLink.ALTEGIO}
                target="_blank"
                className="w-full md:w-auto"
              >
                <Button
                  color="primary"
                  radius="full"
                  size="lg"
                  endContent={<RiArrowRightLine />}
                  className="bg-[#e62621] w-full animate-pulsate"
                >
                  {t("shared.booking")}
                </Button>
              </Link>

              <Link
                href={AppLink.GOOGLE_MAPS}
                target="_blank"
                className="w-full md:w-auto"
              >
                <Button
                  radius="full"
                  size="lg"
                  variant="bordered"
                  startContent={<RiMapPinLine />}
                  className="text-white w-full"
                >
                  {t("shared.we_on_map")}
                </Button>
              </Link>
            </div>
          </div>

          <div className="w-1/2 relative hidden lg:block">
            {services.map((service, idx) => (
              <Link key={service.label} href={AppLink.ALTEGIO} target="_blank">
                <Card
                  className={`absolute hover:bg-gray-100 ${service.styles}`}
                >
                  <CardBody className="p-4">
                    <p className="whitespace-nowrap">{service.label}</p>
                  </CardBody>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <Image
        priority
        width={1200}
        height={800}
        loading="eager"
        src="/images/barbershop-bg.jpg"
        alt={t("home.hero.hero_img")}
        className="absolute top-0 left-0 h-full w-full object-cover z-0"
      />

      <div className="absolute bottom-12 left-1/2 z-20 translate-x-[-50%]">
        <ScrollButton />
      </div>

      <div className="absolute top-0 left-0 h-full w-full z-10 bg-black opacity-70"></div>
    </section>
  );
};
