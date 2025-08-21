"use client";

import Link from "next/link";
import { Button } from "@nextui-org/react";
import { SwiperSlide } from "swiper/react";
import { useTranslations } from "next-intl";
import { RiArrowRightLine } from "@remixicon/react";

import { AppLink } from "@/common/enums";

import { Carousel } from "../carousel";
import { SectionContainer } from "../section-container";

import { Service, ServiceCard } from ".";

export const HomeServices = () => {
  const t = useTranslations("home.services");

  const services: Service[] = [
    {
      label: t("cards.haircut"),
      imageSrc: "/images/services/service-1.jpg",
      price: 500,
    },
    {
      label: t("cards.beard"),
      imageSrc: "/images/services/service-2.jpg",
      price: 400,
    },
    {
      label: t("cards.haircut_and_beard"),
      imageSrc: "/images/services/service-3.jpg",
      price: 800,
    },
    {
      label: t("cards.shaving"),
      imageSrc: "/images/services/service-4.jpg",
      price: 400,
    },
    {
      label: t("cards.kids"),
      imageSrc: "/images/services/service-5.jpg",
      price: 500,
    },
    {
      label: t("cards.coloring"),
      imageSrc: "/images/services/service-6.jpg",
      price: 450,
    },
    {
      label: t("cards.long_hair"),
      imageSrc: "/images/services/service-7.jpg",
      price: 550,
    },
    {
      label: t("cards.styling"),
      imageSrc: "/images/services/service-8.jpg",
      price: 150,
    },
    {
      label: t("cards.wax"),
      imageSrc: "/images/services/service-9.jpg",
      price: 150,
    },
  ];

  return (
    <SectionContainer id="services">
      <div className="flex flex-col gap-4 lg:gap-6">
        <Carousel
          title={t("title")}
          actionOpt={{
            label: t("look_prices"),
            href: AppLink.ALTEGIO_SERVICES,
            target: "_blank",
          }}
        >
          {services.map((service, idx) => (
            <SwiperSlide key={idx}>
              <ServiceCard service={service} />
            </SwiperSlide>
          ))}
        </Carousel>

        <div className="mx-auto">
          <Link
            href={AppLink.ALTEGIO_SERVICES}
            target="_blank"
            className="mx-auto"
          >
            <Button
              color="primary"
              radius="full"
              size="lg"
              endContent={<RiArrowRightLine />}
              className="bg-[#e62621] animate-pulsate"
            >
              {t("select_service")}
            </Button>
          </Link>
        </div>
      </div>
    </SectionContainer>
  );
};
